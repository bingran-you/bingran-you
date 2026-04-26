# PDF Document: Cutkosky - 2015 - Asymptotic Multiplicities of Graded Families of Ideals and Linear Series.pdf

**File Path:** Cutkosky - 2015 - Asymptotic Multiplicities of Graded Families of Ideals and Linear Series.pdf

**Processed Date:** 2026-02-10T18:18:31.619Z

**File Size:** 465.84 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2745

**Title:** Asymptotic Multiplicities of Graded Families of Ideals and Linear Series

**Collection:** Large Files

---

## Extracted Text Content

arXiv:1508.01938v1 [math.AC] 8 Aug 2015
ASYMPTOTIC MULTIPLICITIES OF GRADED FAMILIES OF IDEALS AND LINEAR SERIES
STEVEN DALE CUTKOSKY
Abstract. We find simple necessary and sufficient conditions on a local ring R of dimension d for the limit
ili→m∞
lR(R/In) nd
to exist whenever {In} is a graded family of mR-primary ideals, and give a number of applications. We also give simple necessary and sufficient conditions on projective schemes over a field k for asymptotic limits of the growth of all graded linear series of a fixed Kodaira-Iitaka dimension to exist.
1. Introduction
1.1. Limits of graded families of ideals. In this paper we prove the following theorem about graded families of mR-primary ideals.
Theorem 1.1. (Theorem 5.5) Suppose that R is a (Noetherian) local ring of dimension d, and N (Rˆ) is the nilradical of the mR-adic completion Rˆ of R. Then the limit
(1) nli→m∞
lR(R/In) nd
exists for any graded family {In} of mR-primary ideals, if and only if dim N (Rˆ) < d.
A graded family of ideals {In} in R is a family of ideals indexed by the natural numbers such that I0 = R and ImIn ⊂ Im+n for all m, n. The nilradical N (R) of a d-dimensional ring R is
N (R) = {x ∈ R | xn = 0 for some positive integer n}.
Recall that dim N (R) = −1 if N (R) = 0 and if N (R) 6= 0, then
dim N (R) = dim R/ann(N (R)),
so that dim N (R) = d if and only if there exists a minimal prime P of R such that dim R/P = d and RP is not reduced.
If R is excellent, then N (Rˆ) = N (R)Rˆ, and the theorem is true with the condition dim N (Rˆ) < d replaced with dim N (R) < d. However, there exist Noetherian local domains R (so that N (R) = 0) such that dim N (Rˆ) = dim R (Nagata (E3.2) [32]). It is not difficult to construct examples of graded families of mR-primary ideals in a regular local ring such that the above limit is irrational. The problem of existence of such limits (1) has been considered by Ein, Lazarsfeld and Smith [15] and Musta-
 ̧t ̆a [31]. Lazarsfeld and Musta ̧t ̆a [28] showed that the limit exists for all graded families of mR-primary ideals in R if R is a domain which is essentially of finite type over an algebraically closed field k with R/mR = k. All of these assumptions are necessary in their proof. Their proof is by reducing the problem to one on graded linear
Partially supported by NSF.
1

series on a projective variety, and then using a method introduced by Okounkov [33] to reduce the problem to one of counting points in an integral semigroup. In our paper [6], we prove that such limits exist for graded families of mR-primary ideals, with the restriction that R is an analytically unramified (N = 0) equicharacteristic local ring with perfect residue field (Theorem 5.8 [6]). In this paper we extend this result (in Theorem 4.7) to prove that the limit (1) exists for all graded famili-
es of mR-primary ideals in a local ring R satisfying the assumptions of Theorem 1.1, establishing sufficiency in Theorem 1.1. Our proof begins with the cone method discussed above. In Example 5.3, we give an example of a graded family of mR-primary ideals in a nonreduced local ring R for which the above limit does not exist. Hailong Dao and Ilya Smirnov have shown that such examples are universal, so that if the nilradical of R has dimension d, then there exists a graded family of mR-primary ideal-
s such that the limit (1) does not exist (Theorem 5.4 of this paper). Since a graded family of mR-primary ideals on the completion of a ring lifts to the ring, necessity in Theorem 1.1 follows from this result. In Section 6 of this paper, we give some applications of this result and the method used in proving it, which generalize some of the applications in [6]. We extend the theorems to remove the requirement that the local ring be equicharacteristic with perfect residue field, to hold on arbitra-
ry analytically unramified local rings. We prove some volume = multiplicity formulas for graded families of mR-primary ideals in analytically unramified local rings in Theorems 6.5 - 6.9. Theorem 6.5 is proven for valuation ideals associated to an Abhyankar valuation in a regular local ring which is essentially of finite type over a field by Ein, Lazarsfeld and Smith in [15], for general families of mR-primary ideals when R is a regular local ring containing a field by Musta ̧t ̆a in [31] and when-
 R is a local domain which is essentially of finite type over an algebraically closed field k with R/mR = k by Lazarsfeld and Ein in Theorem 3.8 [28]. All of these assumptions are necessary in the proof in [28]. The volume = multiplicity formula is proven when R is regular or R is analytically unramified with perfect residue field in Theorem 6.5 [6]. We give, in Theorems 6.1 - Theorem 6.5, some formulas showing that limits of the epsilon multiplicity type exist in analytically unramified local rin-
gs. We extend results of [6], where it is assumed that R is equicharacteristic with perfect residue field. Epsilon multiplicity is defined as a limsup by Ulrich and Validashti in [39] and by Kleiman, Ulrich and Validashti in [25]. We also prove an asymptotic formula on multiplicities proposed by Herzog, Puthenpurakal and Verma [20] on analytically unramified local rings. A weaker version of this result is proven in [6]. A general proof of the existence of epsilon multiplicities for torsion free fi-
nite rank modules over an analytically unramified local ring is given in Theorem 3.6 of [8] by developing the methods of this paper. In the case of modules over local rings essentially of finite type over an algebraically closed field, this is proven for modules which are locally free over the punctured spectrum in [24] and for more general modules in [5], using different methods.
1.2. Kodaira-Iitaka dimension and growth rate of graded linear series. Before discussing limits of graded linear series we need to define the Kodaira-Iitaka dimension of a graded linear series. This concept is defined classically by several equivalent conditions for normal projective varieties. However, these conditions are no longer equivalent for more general proper schemes, so we must make an appropriate choice in our definition.
2

Suppose that X is a d-dimensional proper scheme over a field k. A graded linear series L=⊕
n≥0 Ln on X is a graded k-subalgebra of a section ring ⊕
n≥0 Γ(X, Ln) of a line
bundle L on X. We define the Kodaira-Iitaka dimension κ(L) from the maximal number of algebraically independent forms in L (the complete definition is given in Section 7). This definition agrees with the classical one for normal projective varieties. When X is a projective scheme, the Kodaira-Iitaka dimension of L is −∞ if the Krull dimension of L is 0, and is one less than the Krull dimension of L if the Krull dimension is positive (Lemma 7.2). Suppose that L is a line bundle on a normal projecti-
ve variety X. The index m(L) of L is defined to be the least common multiple of the positive integers n such that Γ(X, Ln) 6= 0. The theorem of Iitaka, Theorem 10.2 [21], tells us that if κ(L) = −∞ then dimk Γ(X, Ln) = 0 for all positive integers n and if κ(L) ≥ 0 then there exist positive constants 0 < a < b such that
(2) anκ(L) < dimk Γ(X, Lm(L)n) < bnκ(L)
for n ≫ 0. Thus, with the assumption that X is a normal projective variety, the KodairaIitaka dimension is the growth rate of dimk Γ(X, Ln). Equation (2) continues to hold for graded linear series on a proper variety X over a field (this is stated in (45)). However, when X is not integral, (2) may not hold. In fact, the rate of growth has little meaning on nonreduced schemes. In Section 12, it is shown that a graded linear series L on a nonreduced d-dimensional projective scheme with κ(L) = −∞ can-
 grow like nd (Example 12.1) or can oscillate wildly between 0 and nd (Theorem 12.2 and Example 12.3) so that there is no growth rate. In fact, it is quite easy to construct badly behaved examples with κ(L) = −∞, since in this case the condition that LmLn ⊂ Lm+n required for a graded linear series may be vacuous.
1.3. Limits of graded families of linear series. Let k be a field.
From (2) and (45) we have that both lim infn→∞ dimk Lmn
nκ(L) and lim supn→∞ dimk Lmn
nκ(L) exist
for a graded linear series L on a proper variety. The remarkable fact is that they actually exist as a common limit on a proper variety. Suppose that L is a graded linear series on a proper variety X over a field k. The index m = m(L) of L is defined as the index of groups
m = [Z : G]
where G is the subgroup of Z generated by {n | Ln 6= 0}.
Theorem 1.2. (Theorem 8.1) Suppose that X is a d-dimensional proper variety over a field k, and L is a graded linear series on X with Kodaira-Iitaka dimension κ = κ(L) ≥ 0. Let m = m(L) be the index of L. Then
nli→m∞
dimk Lnm nκ exists.
In particular, from the definition of the index, we have that the limit
nli→m∞
dimk Ln nκ
exists, whenever n is constrained to lie in an arithmetic sequence a + bm (m = m(L) and a an arbitrary but fixed constant), as dimk Ln = 0 if m 6 | n.
3

An example of a big line bundle where the limit in Theorem 1.2 is an irrational number is given in Example 4 of Section 7 of the author’s paper [12] with Srinivas. Theorem 1.2 is proven for big line bundles on a nonsingular variety over an algebraically closed field of characteristic zero by Lazarsfeld (Example 11.4.7 [27]) using Fujita approximation (Fujita, [16]). This result is extended by Takagi using De Jong’s theory of alterations [13] to hold on nonsingular varieties over algebraically fie-
lds of all characteristics p ≥ 0. Theorem 1.2 has been proven by Okounkov [33] for section rings of ample line bundles, Lazarsfeld and Musta ̧t ̆a [28] for section rings of big line bundles, and for graded linear series by Kaveh and Khovanskii [22] when k is an algebraically closed field. A local form of this result is given by Fulger in [17]. These last proofs use an ingenious method introduced by Okounkov to reduce to a problem of counting points in an integral semigroup. All of these proofs req-
uire the assumption that k is algebraically closed. In this paper we establish Theorem 1.2 over an arbitrary ground field k (in Theorem 8.1). We deduce Fujita approximation over an arbitrary field in Theorem 8.5. It is worth remarking that when k is an arbitrary field and X is geometrically integral over k we easily obtain that the limit of Theorem 1.2 exists by making the base change to X = X ×k k where k is an algebraic closure of k. Then dimk Ln = dimk Ln where L=⊕
n≥0 Ln is the graded linear series on X with Ln = Ln ⊗k k. The scheme X is a
complete k variety (it is integral) since X is geometrically integral. Thus the conclusions of Theorem 1.2 are valid for L (on the complete variety X over the algebraically closed field k) so that the limit for L (on X over k) exists as well. This observation is exploited by Boucksom and Chen in [1] where some limits on geometrically integral arithmetic varieties are computed. However, this argument is not applicable when X is not geometrically integral. The most dramatic difficulty can occur when-
 k is not perfect, as there exist simple examples of irreducible projective varieties which are not even generically reduced after taking the base change to the algebraic closure (we give a simple example below). In Theorem 10.3 it is shown that for general graded linear series the limit does not always exist if X is not generically reduced. We now give an example, showing that even if X is normal and k is algebraically closed in the function field of X, then X ×k k may not be generically reduced,-
 where k is an algebraic closure of k. Let p be a prime number, Fp be the field with p elements and let k = Fp(s, t, u) be a rational function field in three variables over Fp. Let R be the local
ring R = (k[x, y, z]/(sxp +typ +uzp))(x,y,z) with maximal ideal mR. R is the localization of
T = Fp[s, t, u, x, y, z]/(sxp +typ +uzp) at the ideal (x, y, z), since Fp[s, t, u]∩(x, y, z) = (0). T is nonsingular in codimension 1 by the Jacobian criterion over the perfect field Fp, and
so T is normal by Serre’s criterion. Thus R is normal since it is a localization of T . Let k′ be the algebraic closure of k in the quotient field K of R. Then k′ ⊂ R since R is normal.
R/mR ∼= k necessarily contains k′, so k = k′. However, we have that R ⊗k k is generically not reduced, if k is an algebraically closure of k. Now taking X to be a normal projective model of K over k such that R is the local ring of a closed point of X, we have the desired example. In fact, we have that k is algebraically closed in K, but K ⊗k k has nonzero nilpotent elements. The statement of Theorem 1.2 generalizes very nicely to reduced proper k-schemes, as we establish in Theorem 9.2.
Theorem 1.3. (Theorem 9.2) Suppose that X is a reduced proper scheme over a field k. Let L be a graded linear series on X with Kodaira-Iitaka dimension κ = κ(L) ≥ 0. Then
4

there exists a positive integer r such that
nli→m∞
dimk La+nr nκ exists for any fixed a ∈ N.
The theorem says that
nli→m∞
dimk Ln nκ
exists if n is constrained to lie in an arithmetic sequence a + br with r as above, and for some fixed a. The conclusions of the theorem are a little weaker than the conclusions of Theorem 1.2 for varieties. In particular, the index m(L) has little relevance on reduced but nonirreducible schemes (as shown by the example after Theorem 10.2 and Example 9.5). Now we turn to the case of nonreduced proper schemes. We begin by returning to our discussion of the relationship between growth rates and the -
Kodaira-Iitaka dimension of graded linear series, which is much more subtle on nonreduced schemes. Suppose that X is a proper scheme over a field k. Let NX be the nilradical of X. Suppose that L is a graded linear series on X. Then by Theorem 10.2, there exists a positive constant γ such that dimk Ln < γne where
(3) e = max{κ(L), dim NX }.
This is the best bound possible. It is shown in Theorem 10.5 that if X is a nonreduced projective k-scheme, then for any s ∈ N ∪ {−∞} with s ≤ dim NX, there exists a graded linear series L on X with κ(L) = s and a constant α > 0 such that
αndim NX < dimk Ln
for all n ≫ 0. It follows from Theorem 10.3 that if X is a proper k-scheme with r = dim NX ≥ s, then there exists a graded linear series L of Kodaira-Iitaka dimension κ(L) = s such that the limit
nli→m∞
dimk Ln nr
does not exist, even when n is constrained to lie in any arithmetic sequence. However, we prove in Theorem 10.2 that if L is a graded linear series on a proper scheme X over a field k, with κ(L) > dim NX, then there exists a positive integer r such that
nli→m∞
dimk La+nr nκ(L)
exists for any fixed a ∈ N. This is the strongest statement on limits that is true. In fact, the existence of all such limits characterizes the dimension of the nilradical, at least on projective schemes. We show this in the following theorem.
Theorem 1.4. (Theorem 10.6) Suppose that X is a d-dimensional projective scheme over a field k with d > 0. Let NX be the nilradical of X. Let α ∈ N. Then the following are equivalent:
1) For every graded linear series L on X with α ≤ κ(L), there exists a positive integer r such that
nli→m∞
dimk La+nr nκ(L)
exists for every positive integer a.
5

2) For every graded linear series L on X with α ≤ κ(L), there exists an arithmetic sequence a + nr (for fixed r and a depending on L) such that
nli→m∞
dimk La+nr nκ(L)
exists. 3) The nilradical NX of X satisfies dim NX < α.
If X is a proper k-scheme of dimension d = 0 which is not irreducible, then the conclusions of Theorem 10.6 are true for X. This follows from Section 11. However, 2) implies 3) does not hold if X is irreducible of dimension 0. In fact (Proposition 11.1) if X is irreducible of dimension 0, and L is a graded linear series on X with κ(L) = 0, then there exists a positive integer r such that the limit limn→∞ dimk La+nr exists for every positive integer a.
1.4. Volumes of line bundles. The volume of a line bundle L on a d-dimensional proper variety X is the limsup
(4) Vol(L) = lim sup
n→∞
h0(X, Ln)
nd/d! .
There has been much progress of our understanding of the volume as a function on the big cone in N 1(X) on a projective variety X over an algebraically closed field (where (4) is actually a limit). Much of the theory is explained in [27], where extensive references are given. Volume is continuous on N 1(X) but is not twice differentiable on all of N 1(X) (as shown in an example of Ein Lazarsfeld, Musta ̧t ̆a, Nakamaye and Popa, [14]). Boucksom, Favre and Jonsson [2] have shown that the volume is C-
1-differentiable on the big cone of N 1(X) (when X is a proper variety over an algebraically closed field of characteristic zero). This theorem is proven for a proper variety over an arbitrary field in [7]. The Fujita approximation type theorem Theorem 8.5, which is valid over an arbitrary field, is an ingredient of the proof. Interpretation of the directional derivative in terms of intersection products and many applications are given in [2], [14], [28] and [7]. The starting point of the theory o-
f volume on nonreduced schemes is to determine if the limsup defined in (4) exists as a limit. In Theorem 10.7, it is shown that the volume of a line bundle always exists on a d-dimensional proper scheme X over a field k with dim NX < d (as explained earlier, this result was known on varieties over an algebraically closed field). We see from Theorem 10.3 and Example 12.1 that the limit does not always exist for graded linear series L.
2. notation and conventions
mR will denote the maximal ideal of a local ring R. Q(R) will denote the quotient field of a domain R. lR(N ) will denote the length of an R-module N . Z+ denotes the positive integers and N the nonnegative integers. Suppose that x ∈ R. ⌈x⌉ is the smallest integer n such that x ≤ n. ⌊x⌋ is the largest integer n such that n ≤ x. We recall some notation on multiplicity from Chapter VIII, Section 10 of [40], Section V-2 [35] and Section 4.6 [4]. Suppose that (R, mR) is a (Noetherian) local ring, N is-
 a finitely generated R-module with r = dim N and a is an ideal of definition of R. Then
ea(N ) = kli→m∞
lR(N/akN )
kr/r! .
We write e(a) = ea(R).
6

If s ≥ r = dim N , then we define
es(a, N ) =
{ ea(N ) if dim N = s 0 if dim N < s.
A local ring is analytically unramified if its completion is reduced. In particular, a reduced excellent local ring is analytically unramified. We will denote the maximal ideal of a local ring R by mR. If ν is a valuation of a field K, then we will write Vν for the valuation ring of ν, and mν for the maximal ideal of Vν. We will write Γν for the value group of ν. If A and B are local rings, we will say that B dominates A if A ⊂ B and mB ∩ A = mA. The dimension of an R-module M is dim M = dim R/ann-
(M ). We use the notation of Hartshorne [19]. For instance, a variety is required to be integral. If F is a coherent sheaf on a Noetherian scheme, then dim F will denote the dimension of the support of F, with dim F = −∞ if F = 0. Suppose that X is a scheme. The nilradical of X is the ideal sheaf NX on X which is the kernel of the natural surjection OX → OXred where Xred is the reduced scheme
associated to X. (NX )η is the nilradical of the local ring OX,η for all η ∈ X.
3. Cones associated to semigroups
In this section, we summarize some results of Okounkov [33], Lazarsfeld and Musta ̧t ̆a [28] and Kaveh and Khovanskii [22]. Suppose that S is a subsemigroup of Zd × N which is not contained in Zd × {0}. Let L(S) be the subspace of Rd+1 which is generated by S, and let M (S) = L(S) ∩ (Rd × R≥0). Let Con(S) ⊂ L(S) be the closed convex cone which is the closure of the set of all linear combinations ∑ λisi with si ∈ S and λi ≥ 0. S is called strongly nonnegative (Section 1.4 [22]) if Cone(S) intersect-
s ∂M (S) only at the origin (this is equivalent to being strongly admissible (Definition 1.9 [22]) since with our assumptions, Cone(S) is contained in Rd × R≥0, so the ridge of of S must be contained in ∂M (S)). In particular, a subsemigroup of a strongly negative semigroup is itself strongly negative. We now introduce some notation from [22]. Let
Sk = S ∩ (Rd × {k}).
∆(S) = Con(S) ∩ (Rd × {1}) (the Newton-Okounkov body of S). q(S) = dim ∂M (S). G(S) be the subgroup of Zd+1 generated by S. m(S) = [Z : π(G(S))] where π : Rd+1 → R be projection onto the last factor. ind(S) = [∂M (S)Z : G(S) ∩ ∂M (S)Z] where ∂M (S)Z := ∂M (S) ∩ Zd+1 = M (S) ∩ (Zd × {0}). volq(S)(∆(S)) is the integral volume of ∆(S). This volume is computed using the translation of the integral measure on ∂M (S).
S is strongly negative if and only if ∆(S) is a compact set. If S is strongly negative, then the dimension of ∆(S) is q(S).
Theorem 3.1. (Kaveh and Khovanskii) Suppose that S is strongly nonnegative. Then
kli→m∞
#Sm(S)k
kq(S) = volq(S)(∆(S))
ind(S) .
7

This is proven in Corollary 1.16 [22]. With our assumptions, we have that Sn = ∅ if m(S) 6 | n and the limit is positive, since volq(S)(∆(S)) > 0.
Theorem 3.2. (Okounkov, Section 3 [33], Lazarsfeld and Musta ̧t ̆a, Proposition 2.1 [28]) Suppose that a subsemigroup S of Zd × N satisfies the following two conditions:
(5) There exist finitely many vectors (vi, 1) spanning a semigroup B ⊂ Nd+1
such that S ⊂ B
and
(6) G(S) = Zd+1.
Then
nli→m∞
#Sn
nd = vol(∆(S)).
Proof. S is strongly nonnegative since B is strongly nonnegative, so Theorem 3.1 holds. G(S) = Zd+1 implies L(S) = Rd+1, so M (S) = Rd × R≥0, ∂M (S) = Rd × {0} and q(S) = dim ∂M (S) = d. We thus have m(S) = 1 and ind(S) = 1.
Theorem 3.3. Suppose that S is strongly nonnegative. Fix ε > 0. Then there is an integer p = p0(ε) such that if p ≥ p0, then the limit
nli→m∞
#(n ∗ Spm(S))
nq(S)pq(S) ≥ volq(S)∆(S)
ind(S) − ε
exists, where
n ∗ Spm(S) = {x1 + · · · + xn | x1, . . . , xn ∈ Spm(S)}.
Proof. Let m = m(S) and q = q(S). Let S[pm] = ∪n∞=1(n ∗ Spm(S)) be the subsemigroup of S generated by Spm. For p ≫ 0, we have that L(S[pm]) = L(S) so m(S[pm]) = pm and q(S[pm]) = q.
Suppose that v1, . . . , vr generate G(S) ∩ ∂M (S)Z. For 1 ≤ i ≤ r, there exist ai, bi, ni such that vi = (ai, nim) − (bi, nim) with (ai, nim), (bi, nim) ∈ Snim. There exist b > 0 and
c, c′ such that (c, mb) ∈ S and (c′, m(b + 1)) ∈ S. bm divides nim + ni(b − 1)(b + 1)m and
vi = [(ai, nim) + ni(b − 1)(c′, (b + 1)m)] − [(bi, nim) + ni(b − 1)(c′, (b + 1)m)],
so we may assume that b divides ni for all i. Thus v1, . . . , vr ∈ G(S[nm]) where n =
max{ni}, and v1, . . . , vr ∈ G(S[pm]) whenever p ≥ (b − 1)b + n. Thus
(7) ind(S[pm]) = ind(S)
whenever p ≫ 0. We have that
(8) pli→m∞
volq (∆(S [pm] ))
pq = volq(∆(S).
By Theorem 3.1,
(9) nli→m∞
#(n ∗ Spm)
nq = volq(∆(S[pm]))
ind(S[pm]) .
The theorem now follows from (7), (8), (9).
We obtain the following result.
8

Theorem 3.4. (Proposition 3.1 [28]) Suppose that a subsemigroup S of Zd × N satisfies (5) and (6). Fix ε > 0. Then there is an integer p0 = p0(ε) such that if p ≥ p0, then the limit
kli→m∞
#(k ∗ Sp)
kdpd ≥ vol(∆(S)) − ε
exists.
4. Asymptotic theorems on lengths
Definition 4.1. A graded family of ideals {Ii} in a ring R is a family of ideals indexed by the natural numbers such that I0 = R and IiIj ⊂ Ii+j for all i, j. If R is a local ring and Ii is mR-primary for i > 0, then we will say that {Ii} is a graded family of mR-primary ideals.
The following theorem is proven with the further assumptions that R is equicharacteristic with perfect residue field in [6].
Theorem 4.2. Suppose that R is an analytically irreducible local domain of dimension d and {Ii} is a graded family of mR-primary ideals in R. Then
ili→m∞
lR(R/Ii) id exists.
Corollary 4.3. Suppose that R is an analytically irreducible local domain of dimension d > 0 and {Ii} is a graded family of ideals in R such that there exists a positive number c
such that mcR ⊂ I1. Then
ili→m∞
lR(R/Ii) id exists.
Proof. The assumption mcR ⊂ I1 implies that either In is mR-primary for all positive n, or
there exists n0 > 1 such that In0 = R. In the first case, the corollary follows from Theorem
4.2. In the second case, mcRn ⊂ In for all n ≥ n0, so lR(R/Ii) is actually bounded.
We now give the proof of Theorem 4.2. Since I1 is mR-primary, there exists c ∈ Z+ such that
(10) mcR ⊂ I1.
Let Rˆ be the mR-adic completion of R. Since the In are mR-primary, we have that
R/In ∼= Rˆ/InRˆ and lR(R/In) = lRˆ(Rˆ/InRˆ) for all n. We may thus assume that R is an
excellent domain. Let π : X → spec(R) be the normalization of the blow up of mR. X
is of finite type over R since R is excellent. Since π−1(mR) has codimension 1 in X and X is normal, there exists a closed point x ∈ X such that the local ring OX,x is a regular local ring. Let S be this local ring. S is a regular local ring which is essentially of finite type and birational over R (R and S have the same quotient field). Let y1, . . . , yd be a regular system of parameters in S. Let λ1, . . . , λd be rationally independent real numbers, such that
(11) λi ≥ 1 for all i.
We define a valuation ν on Q(R) which dominates S by prescribing
ν(y1a1 · · · yad
d ) = a1λ1 + · · · + adλd
9

for a1, . . . , ad ∈ Z+, and ν(γ) = 0 if γ ∈ S has nonzero residue in S/mS. Let C be a coefficient set of S. Since S is a regular local ring, for r ∈ Z+ and f ∈ S, there is a unique expression
(12) f = ∑ si1,...,id yi11 · · · yid
d + gr
with gr ∈ mrS, si1,...,id ∈ S and i1 + · · · + id < r for all i1, . . . , id appearing in the sum.
Take r so large that r > i1λ1 + · · · + idλd for some term with si1,...,id 6= 0. Then define
(13) ν(f ) = min{i1λ1 + · · · + idλd | si1,...,id 6= 0}.
This definition is well defined, and we calculate that ν(f + g) ≥ min{ν(f ), ν(g)} and ν(f g) = ν(f ) + ν(g) (by the uniqueness of the minimal value term in the expansion (12)) for all 0 6= f, g ∈ S. Thus ν is a valuation. Let Vν be the valuation ring of ν (in Q(R)). The value group Γν of Vν is the (nondiscrete) ordered subgroup Zλ1 + · · · + Zλd of R. Since there is a unique monomial giving the minimum in (13), we have that the residue field of Vν is S/mS.
Let k = R/mR and k′ = S/mS = Vν/mν . Since S is essentially of finite type over R,
we have that [k′ : k] < ∞.
For λ ∈ R, define ideals Kλ and K+
λ in Vν by
Kλ = {f ∈ Q(R) | ν(f ) ≥ λ}
and
K+
λ = {f ∈ Q(R) | ν(f ) > λ}.
We follow the usual convention that ν(0) = ∞ is larger than any element of R. By Lemma 4.3 [6], we have the following formula. The assumption that R is analytically irreducible is necessary for the validity of the formula.
(14) There exists α ∈ Z+ such that Kαn ∩ R ⊂ mnR for all n ∈ N.
Suppose that I ⊂ R is an ideal and λ ∈ Γν is nonnegative. Then we have inclusions of k-vector spaces
I ∩ Kλ/I ∩ K+
λ ⊂ Kλ/K+
λ. Since Kλ/K+
λ is isomorphic to k′, we conclude that
(15) dimk I ∩ Kλ/I ∩ K+
λ ≤ [k′ : k].
Let β = αc ∈ Z+, where c is the constant of (10), and α is the constant of (14), so that for all i ∈ Z+,
(16) Kβi ∩ R = Kαci ∩ R ⊂ miRc ⊂ Ii.
For t ≥ 1, define
Γ(t) =
{ (n1, . . . , nd, i) ∈ Nd+1 | dimk Ii ∩ Kn1λ1+···+ndλd /Ii ∩ K+
n1λ1+···+ndλd ≥ t
and n1 + · · · + nd ≤ βi
}
,
and
ˆΓ(t) =
{ (n1, . . . , nd, i) ∈ Nd+1 | dimk R ∩ Kn1λ1+···+ndλd /R ∩ K+
n1λ1+···+ndλd ≥ t
and n1 + · · · + nd ≤ βi
}
.
Let λ = n1λ1 + · · · + ndλd be such that n1 + · · · + nd ≤ βi. Then
(17) dimk Kλ ∩ Ii/K+
λ ∩ Ii = #{t|(n1, . . . , nd, i) ∈ Γ(t)}.
10

Lemma 4.4. Suppose that t ≥ 1, 0 6= f ∈ Ii, 0 6= g ∈ Ij and
dimk Ii ∩ Kν(f)/Ii ∩ K+
ν(f) ≥ t.
Then
(18) dimk Ii+j ∩ Kν(fg)/Ii+j ∩ K+
ν(fg) ≥ t.
In particular, when nonempty, Γ(t) and Γˆ(t) are subsemigroups of the semigroup Zd+1.
Proof. There exist f1, . . . , ft ∈ Ii ∩ Kν(f) such that their classes are linearly independent
over k in Ii ∩ Kν(f)/Ii ∩ K+
ν(f). We will show that the classes of gf1, . . . , gft in
Ii+j ∩ Kν(fg)/Ii+j ∩ K+
ν(f g)
are linearly independent over k. Suppose that a1, . . . , at ∈ k are such that the class of a1gf1 + · · · + atgft in Ii+j ∩
Kν(fg)/Ii+j ∩ K+
ν(fg) is zero. Then ν(a1gf1 + · · · + atgft) > ν(f g), whence ν(a1f1 + · · · +
atft) > ν(f ), so a1f1 + · · · + atft ∈ Ii ∩ K+
ν(f). Thus a1 = · · · = at = 0, since the classes of
f1, . . . , ft are linearly independent over k in Ii ∩ Kν(f)/Ii ∩ K+
ν (f ) .
From (16), and since n1λ1 + · · · + ndλd < βi implies n1 + · · · + nd < βi by (11), we have that
(19)
lR(R/Ii) = lR(R/Kβi ∩ R) − lR(Ii/Kβi ∩ Ii)
= dimk
( ⊕
0≤λ<βi Kλ ∩ R/K+
λ ∩R
)
− dimk
( ⊕
0≤λ<βi Kλ ∩ Ii/K+
λ ∩ Ii
)
=
(
∑[k′:k]
t=1 #Γˆ(t)
i
)
−
(
∑[k′:k]
t=1 #Γ(t)
i
)
,
where Γ(t)
i = Γ(t) ∩ (Nd × {i}) and Γˆ(t)
i = Γˆ(t) ∩ (Nd × {i}). Since R is Noetherian, there
are only finitely many values of ν on R which are ≤ βi, For 0 6= f ∈ R, define
φ(f ) = (n1, . . . , nd) ∈ Nd
if ν(f ) = n1λ1 + · · · + ndλd. We have that φ(f g) = φ(f ) + φ(g).
Lemma 4.5. Suppose that t ≥ 1 and Γ(t) 6⊂ (0). Then Γ(t) satisfies equations (5) and (6).
Proof. Let {ei} be the standard basis of Zd+1. The semigroup
B = {(n1, . . . , nd, i) | (n1, . . . , nd) ∈ Nd and n1 + · · · + nd ≤ βi}
is generated by B ∩ (Nd × {1}) and contains Γ(t), so (5) holds. By assumption, there exists r ≥ 1 and 0 6= h ∈ Ir such that (φ(h), r) ∈ Γ(t).
There exists 0 6= u ∈ I1. Write yi = fi
gi with fi, gi ∈ R for 1 ≤ i ≤ d. Then hfi, hgi ∈ Ir.
There exists c′ ∈ Z+ such that c′ ≥ c and u, hfi, hgi 6∈ mc′
R for 1 ≤ i ≤ d. We may replace
c with c′ in (10). Then (φ(hfi), r), (φ(hgi), r) ∈ Γ(rt) = Γ(t) ∩ (Nd × {r}) for 1 ≤ i ≤ d, by (18) (with fi, gi ∈ I0 = R) since hfi and hgi all have values n1λ1 + · · · + ndλd < βr, so that n1 + . . . + nd < βr. We have that φ(yi) = φ(hfi) − φ(hgi) = φ(yi) = ei for 1 ≤ i ≤ d. Thus
(ei, 0) = (φ(hfi), r) − (φ(hgi), r) ∈ G(Γ(t))
for 1 ≤ i ≤ d. (φ(uh), r + 1) ∈ Γ(t) by (18) and since ν(u) ≤ β, so that (φ(u), 1) ∈ G(Γ(t)), so ed+1 ∈ G(Γ(t)). Thus G(Γ(t)) = Zd+1 and (6) holds.
11

The same argument proves the following lemma.
Lemma 4.6. Suppose that t ≥ 1 and ˆΓ(t) 6⊂ (0). Then Γˆ(t) satisfies equations (5) and(6).
By Theorem 3.2,
(20) ili→m∞
#Γ(t)
i
id = vol(∆(Γ(t)))
and
(21) ili→m∞
#Γˆ (t)
i
id = vol(∆(Γˆ(t))).
We obtain the conclusions of Theorem 4.2 from equations (19), (20) and (21).
Theorem 4.7. Suppose that R is a local ring of dimension d, and {Ii} is a graded family
of mR-primary ideals in R. Let N (Rˆ) be the nilradical of the mR-adic completion Rˆ of R,
and suppose that dim N (Rˆ) < d = dim R. Then
ili→m∞
lR(R/Ii) id
exists.
Proof. Let N = N (Rˆ) and A = Rˆ/N . We have a short exact sequence of Rˆ-modules
0 → N/(N ∩ IiRˆ) → Rˆ/IiRˆ → A/IiA → 0.
There exists a number c such that mcR ⊂ I1. Hence mcRiN ⊂ N ∩ IiRˆ for all i, so that
lRˆ(N/N ∩ IiRˆ) ≤ lRˆ(N/mcRˆiN ) ≤ αidim N
for some constant α. Hence
ili→m∞
lR(R/Ii)
id = ili→m∞
lRˆ (Rˆ /Ii Rˆ )
id = ili→m∞
lA(A/IiA)
id .
Let p1, . . . , ps be the minimal primes of A, and Aj = A/pj for 1 ≤ j ≤ s. By Lemma 4.8 below,
ili→m∞
lA(A/IiA)
id =
s
∑
j=1
ili→m∞
lAj (Aj /IiAj ) id
which exists by Theorem 4.2
Lemma 4.8. (Lemma 5.1 [6]) Suppose that R is a d-dimensional reduced local ring and {In} is a graded family of mR-primary ideals in R, Let {p1, . . . , ps} be the minimal primes
of R, Ri = R/pi, and let S be the ring S = ⊕s
i=1 Ri. Then there exists α ∈ Z+ such that
for all n ∈ Z+,
|
s
∑
i=1
lRi (Ri/InRi) − lR(R/In)| ≤ αnd−1.
12

5. A necessary and sufficient condition for limits to exist in a local ring
Let i1 = 2 and r1 = i21 . For j ≥ 1, inductively define ij+1 so that ij+1 is even and
ij+1 > 2j ij . Let rj+1 = ij+1
2 . For n ∈ Z+, define
(22) σ(n) =
{ 1 if n = 1
ij
2 if ij ≤ n < ij+1
Lemma 5.1. Suppose that a ∈ N and r ∈ Z+. Then given m > 0 and ε > 0, there exists a positive integer n = a + br with b ∈ N such that n > m and
∣ ∣ ∣ ∣
σ(n)
n −1
2
∣ ∣ ∣ ∣
<ε
Proof. Choose j sufficiently large that ij > m, ij + r < ij+1 and
(23) ij
2(ij + k) > 1
2 −ε
for 0 ≤ k < r. There exists n = ij + k with 0 ≤ k < r in the arithmetic sequence a + br.
σ(n)
n = ij
2n = ij
2(ij + k) .
By (23),
1
2 ≥ ij
2(ij + k) > 1
2 − ε.
Lemma 5.2. Suppose that a ∈ N and r ∈ Z+. Then given m > 0 and ε > 0, there exists a positive integer n = a + br with b ∈ N such that n > m and
∣ ∣ ∣ ∣
σ(n) n
∣ ∣ ∣ ∣
< ε.
Proof. Choose j sufficiently large that ij > m + r, 2jij > r and
(24) ij
2(2j ij − k) < ε
for 0 < k ≤ r. Let n = ij+1 − k with 0 < k ≤ r in the arithmetic sequence a + br.
σ(n)
n = ij
2n = ij
2(ij+1 − k) .
By (24),
0 < ij
2(ij+1 − k) < ε.
It follows from the previous two lemmas that the limit
(25) nli→m∞
σ(n) n
does not exist, even when n is constrained to lie in an arithmetic sequence. The following example shows that limits might not exist on nonreduced local rings.
13

Example 5.3. Let k be a field, d > 0 and R be the nonreduced d-dimensional local ring R = k[[x1, . . . , xd, y]]/(y2). There exists a graded family of mR-primary ideals {In} in R such that the limit
nli→m∞
lR(R/In) nd
does not exist, even when n is constrained to lie in an arithmetic sequence.
Proof. Let x1, . . . , xd, y be the classes of x1, . . . , xd, y in R. Let Ni be the set of monomials of degree i in the variables x1, . . . , xd. Let σ(n) be the function defined in (22). Define MR-primary ideals In in R by In = (Nn, yNn−σ(n)) for n ≥ 1 (and I0 = R). We first verify that {In} is a graded family of ideals, by showing that ImIn ⊂ Im+n for all m, n > 0. This follows since
ImIn = (Nm+n, yN(m+n)−σ(m) , yN(m+n)−σ(n))
and σ(j) ≤ σ(k) for k ≥ j. R/In has a k-basis consisting of
{Ni | i < n} and {yNj | j < n − σ(n)}.
Thus
lR(R/In) =
(n
d
)
+
(n − σ(n) d
)
.
does not exist, even when n is constrained to lie in an arithmetic sequence, by (25).
Hailong Dao and and Ilya Smirnov have communicated to me that they have proven the following theorem.
Theorem 5.4. (Hailong Dao and Ilya Smirnov) Suppose that R is a local ring of dimension d > 0 with nilradical N (R). Suppose that for any graded family {In} of mR-primary ideals, the limit
nli→m∞
lR(R/In) nd exists. Then dim N (R) < d.
Proof. Let N = N (R). Suppose that dim N = d. Let p be a minimal prime of N such that dim R/p = d. Then Np 6= 0, so pp 6= 0 in Rp. p is an associated prime of N , so there exists 0 6= x ∈ R such that ann(x) = p. x ∈ p, since otherwise 0 = pxRp = pp which is
impossible. In particular, x2 = 0. Let f (n) = n − σ(n) be the function of (22), and define mR-primary ideals in R by
In = mnR + xmf(n)
R.
{In} is a graded family of ideals in R since
ImIn = (mm+n
R , xm(m+n)−σ(m)
R , xm(m+n)−σ(n)
R)
and σ(j) ≤ σ(k) for k ≥ j. Let R = R/xR. We have short exact sequences
(26) 0 → xR/xR ∩ In → R/In → R/InR → 0.
By Artin-Rees, there exists a number k such that xR ∩ mnR = mn−k
R (xR ∩ mn−k
R ) for n > k.
Thus xR ∩ mnR ⊂ xmf(n)
R for n ≫ 0 and xR ∩ In = xmf(n)
R for n ≫ 0. We have that
xR/xR ∩ In ∼= xR/xmf(n)
R ∼= R/(ann(x) + mf(n)
R ) ∼= R/p + mf(n)
R, 14

so that lR(xR/xR ∩ In) = PR/p(f (n)) for n ≫ 0, where PR/p(n) is the Hilbert-Samuel polynomial of R/p. Hence
(27) nli→m∞
lR(xR/xR ∩ In)
nd = e(mR/p)
d! nli→m∞
( f (n) n
)d
does not exist by (25). For n ≫ 0,
lR(R/InR) = lR(R/mn
R) = PR(n)
where PR(n) is the Hilbert-Samuel polynomial of R. Since dim R ≤ d, we have that
(28) nli→m∞
lR(R/InR) nd exists. Thus
nli→m∞
lR(R/In) nd does not exist by (26), (27) and (28).
Theorem 5.5. Suppose that R is a local ring of dimension d, and N (Rˆ) is the nilradical of the mR-adic completion Rˆ of R. Then the limit
nli→m∞
lR(R/In) nd
exists for any graded family {In} of mR-primary ideals, if and only if dim N (Rˆ) < d.
Proof. Sufficiency follows from Theorem 4.7. Necessity follows from Theorem 5.4 if d > 0,
since a family of mRˆ-primary ideals in Rˆ naturally lifts to a graded family of mR-primary
ideals in R.
In the case when d = 0 and N (Rˆ) 6= 0, R is an Artin local ring. Thus there exists some number 0 < t such that mtR 6= 0 but mt+1
R = 0. With the notation before (22), let
(29) τ (n) =
{ 0 if ij ≤ n ≤ ij+1 and j is even 1 if ij ≤ n ≤ ij+1 and j is odd.
Define a graded family of mR-primary ideals {In} in R by In = mt+τ(n)
R . Then limn→∞ lR(R/In)
does not exist.
Corollary 5.6. Suppose that R is an excellent local ring of dimension d, and N (R) is the nilradical of R. Then the limit
ili→m∞
lR(R/In) nd
exists for any graded family {Ii} of mR-primary ideals, if and only if dim N (R) < d.
Proof. Let N (Rˆ) be the nilradical of Rˆ. (R̂ /N (R) ∼= Rˆ/N (R)Rˆ is reduced since R/N (R)
is (by Scholie IV.7.8.3 [18]). Since N (R)Rˆ ⊂ N (Rˆ), we have that N (Rˆ) = N (R)Rˆ. Thus grmRˆ (N (Rˆ)) = grmR(N (R), so dim N (Rˆ) = dim N (R). Now the corollary follows from
Theorem 5.5.
Example 5.7. For any d ≥ 1, there exists a local domain R of dimension d with a graded family of mR-primary ideals {In} such that the limit
nli→m∞
lR(R/In)
nd
15

does not exist.
Proof. The example of (E3.2) in [32] is of a local domain R such that the nilradical of Rˆ has dimension d. The example then follows from Theorem 5.4 by lifting an appropriate graded family of mRˆ-primary ideals to R.
In Section 4 of [10], a series of examples of graded families of mR-primary valuation ideals in a regular local ring R of dimension two are given which have asymptotic growth of the rate nα, where α can be any rational number 1 ≤ α ≤ 2. An example, also in a regular local ring of dimension two, with growth rate nlog10(n) is given. Thus we generally do not have a polynomial rate of growth.
6. Applications to asymptotic multiplicities
In this section, we apply Theorem 4.2 and its method of proof, to generalize some of the applications in [6] to analytically unramified local rings.
Theorem 6.1. Suppose that R is an analytically unramified local ring of dimension d > 0. Suppose that {Ii} and {Ji} are graded families of ideals in R. Further suppose that Ii ⊂ Ji for all i and there exists c ∈ Z+ such that
(30) mcRi ∩ Ii = mcRi ∩ Ji
for all i. Assume that if P is a minimal prime of R then I1 ⊂ P implies Ii ⊂ P for all i ≥ 1. Then the limit
ili→m∞
lR(Ji/Ii) id exists.
Theorem 6.1 is proven for local rings R which are regular, or normal excellent and equicharacteristic in [6].
Remark 6.2. A reduced analytic local ring R satisfies the hypotheses of Theorem 6.1. In fact, an analytic local ring is excellent by Theorem 102 on page 291 [29] and a reduced, excellent local ring is unramified by (x) of Scholie 7.8.3 [18].
Proof. We may assume that R is complete, by replacing R, Ii, Ji by Rˆ, IiRˆ, JiRˆ. First suppose that R is analytically irreducible. Then either Ii = Ji = 0 for all i ≥ 1 or I1 6= 0 (and J1 6= 0). We may thus assume that I1 6= 0. We will prove the theorem in this case. We will apply the method of Theorem 4.2. Construct the regular local ring S by the argument of the proof of Theorem 4.2. Let ν be the valuation of Q(R) constructed from S in the proof of Theorem 4.2, with associated valuation ideals-
 Kλ in the valuation ring Vν of ν. Let k = R/mR and k′ = S/mS = Vν /mν.
By (14), there exists α ∈ Z+ such that
Kαn ∩ R ⊂ mnR
for all n ∈ Z+. We have that
Kαcn ∩ In = Kαcn ∩ Jn
for all n. Thus
(31) lR(Jn/In) = lR(Jn/Kαcn ∩ Jn) − lR(In/Kαcn ∩ In)
16

for all n. Let β = αc. For t ≥ 1, let
Γ(J∗)(t) = { (n1, . . . , nd, i) | dimk Ji ∩ Kn1λ1+···+ndλd /Ji ∩ K+
n1λ1+···+ndλd ≥ t
and n1 + · · · + nd ≤ βi, }
and
Γ(I∗)(t) = { (n1, . . . , nd, i) | dimk Ii ∩ Kn1λ1+···+ndλd /Ii ∩ K+
n1λ1+···+ndλd ≥ t
and n1 + · · · + nd ≤ βi }.
We have that
(32) lR(Jn/In) = (
[k′:k]
∑
t=1
#Γ(J∗)(nt)) − (
[k′:k]
∑
t=1
#Γ(I∗)(nt))
as explained in the proof of Theorem 4.2. As in the proof of Lemma 4.5 (this is were we need I1 6= 0 and thus J1 6= 0), we have that Γ(J∗)(t) and Γ(I∗)(t) satisfy the conditions (5) and (6)of Theorem 3.2. Thus
nli→m∞
#Γ(J∗)(nt)
nd = vol(∆(Γ(J∗)) and nli→m∞
#Γ(I∗)(nt)
nd = vol(∆(Γ(I∗)(t))
by Theorem 3.2. The theorem, in the case when R is analytically irreducible, now follows from (31). Now suppose that R is only analytically unramified. We may continue to assume that R is complete. Let P1, . . . , Ps be the minimal primes of R. Let Ri = R/Pi for 1 ≤ i ≤ s.
Let T = ⊕s
i=1 Ri and φ : R → T be the natural inclusion. By Artin-Rees, there exists a
positive integer λ such that
ωn := φ−1(mnRT ) = R ∩ mnRT ⊂ mn−λ
R
for all n ≥ λ. Thus
mnR ⊂ ωn ⊂ mn−λ
R
for all n. We have that
ωn = φ−1(mnRT ) = φ−1(mnRR1
⊕ · · · ⊕ mnRRs) = (mnR + P1) ∩ · · · ∩ (mnR + Ps).
Let β = (λ + 1)c. Now ωβn ⊂ mc(λ+1)n−λ
R ⊂ mcRn for all n ≥ 1, so that
ωβn ∩ In = ωβn ∩ (mcRn ∩ In) = ωβn ∩ (mcRn ∩ Jn) = ωβn ∩ Jn
for all n ≥ 1, so
(33) lR(Jn/In) = lR(Jn/ωβn ∩ Jn) − lR(In/ωβn ∩ In)
for all n ≥ 1.
Define Lj
0 = R for 0 ≤ j ≤ s, and for n > 0, define L0n = Jn and
Ljn = (mβn
R + P1) ∩ · · · ∩ (mβn
R + Pj ) ∩ Jn
for 1 ≤ j ≤ s. For fixed j, with 0 ≤ j ≤ s, {Ljn} is a graded family of ideals in R. For n ≥ 1, we have isomorphisms
Ljn/Lj+1
n = Ljn/(mβn
R + Pj+1) ∩ Ljn ∼= LjnRj+1/(LjnRj+1) ∩ mβn
Rj+1
for 0 ≤ j ≤ s − 1, and
Lsn = ωβn ∩ Jn.
17

Thus
(34) lR(Jn/ωβn ∩ Jn) =
s−1
∑
j=0
lR(Ljn/Lj+1
n )=
s−1
∑
j=0
lRj+1
(
LjnRj+1/(LjnRj+1) ∩ mβn
Rj+1
)
.
For some fixed j with 0 ≤ j ≤ s − 1, let R = Rj+1, J n = LjnR and In = J n ∩ mβn
R . {In}
and {Jn} are graded families of ideals in R and mβn
R ∩ In = mβn
R ∩ Jn for all n.
We have that I1 = 0 implies Ii = 0 for all i ≥ 1 and J1 = 0 implies Ji = 0 for all i ≥ 1 by our initial assumptions. Since dim R ≤ dim R = d and R is analytically irreducible, by the first part of the proof we have that
nli→m∞
lR(J n/In) nd
exists, and from (34), we have that
nli→m∞
lR(Jn/ωβn ∩ Jn) nd
exists. The same argument applied to the graded family of ideals {In} in R implies that
nli→m∞
lR(In/ωβn ∩ In) nd
exists. Finally, (33) implies that the limit
nli→m∞
lR(Jn/In) nd exists.
If R is a local ring and I is an ideal in R then the saturation of I is
Isat = I : mR∞ = ∪k∞=1I : mkR.
Corollary 6.3. Suppose that R is an analytically unramified local ring of dimension d > 0 and I is an ideal in R. Then the limit
ili→m∞
lR ((I i )sat /I i ) id
exists.
Since (In)sat/In ∼= H0mR (R/In), the epsilon multiplicity of Ulrich and Validashti [39]
ε(I) = lim sup lR(H0mR (R/In))
nd/d!
exists as a limit, under the assumptions of Corollary 6.3. Corollary 6.3 is proven for more general families of modules when R is a local domain which is essentially of finite type over a perfect field k such that R/mR is algebraic over k in [5]. The corollary is proven with more restrictions on R in Corollary 6.3 [6]. The limit in corollary 6.3 can be irrational, as shown in [11].
Proof. By Theorem 3.4 [36], there exists c ∈ Z+ such that each power In of I has an irredundant primary decomposition
In = q1(n) ∩ · · · ∩ qs(n)
18

where q1(n) is mR-primary and mnRc ⊂ q1(n) for all n. Since (In)sat = q2(n) ∩ · · · ∩ qs(n),
we have that
In ∩ mnRc = mnRc ∩ q2(n) ∩ · · · ∩ qs(n) = mnRc ∩ (In)sat
for all n ∈ Z+. Thus the corollary follows from Theorem 6.1, taking Ii = Ii and Ji =
(I i )sat .
A stronger version of the previous corollary is true. The following corollary proves a formula proposed by Herzog, Puthenpurakal and Verma in the introduction to [20]. The formula is proven with more restrictions on R in Corollary 6.4 [6]. Suppose that R is a ring, and I, J are ideals in R. Then the nth symbolic power of I with respect to J is
In(J ) = In : J ∞ = ∪i∞=1In : J i.
Corollary 6.4. Suppose that R is an analytically unramified local ring of dimension d. Suppose that I and J are ideals in R. Let s be the constant limit dimension of In(J)/In for n ≫ 0. Suppose that s < d. Then
nli→m∞
emR (In(J )/In)
nd−s
exists.
Proof. There exists a positive integer n0 such that the set of associated primes of R/In stabilizes for n ≥ n0 by [3]. Let {p1, . . . , pt} be this set of associated primes. We thus have irredundant primary decompositions for n ≥ n0,
(35) In = q1(n) ∩ · · · ∩ qt(n),
where qi(n) are pi-primary. We further have that
(36) In : J ∞ = ∩J6⊂piqi(n).
Thus dim In(J)/In is constant for n ≥ n0. Let s be this limit dimension. The set
A = {p ∈ ∪n≥n0Ass(In(J )/In) | n ≥ n0 and dim R/p = s}
is a finite set. Moreover, every such prime is in Ass(In(J)/In for all n ≥ n0. For n ≥ n0, we have by the additivity formula (V-2 [35] or Corollary 4.6.8, page 189 [4]), that
emR (In(J )/In) = ∑
p
lRp((In(J )/In)p)e(mR/p)
where the sum is over the finite set of primes p ∈ Spec(R) such that dim R/p = s. This sum is thus over the finite set A. Suppose that p ∈ A and n ≥ n0. Then
Ipn = ∩qi(n)p
where the intersection is over the qi(n) such that pi ⊂ p, and
In(J ) = ∩qi(n)p
where the intersection is over the qi(n) such that J 6⊂ pi and pi ⊂ p. Thus there exists an index i0 such that pi0 = p and
Ipn = qi0(n)p ∩ In(J )p.
19

By (35),
(Ipn)sat = In(J )p
for n ≥ n0. Since Rp is analytically unramified (by [34] or Proposition 9.1.4 [37]) and dim Rp ≤ d − s, by Corollary 6.3, the limit
nli→m∞
lR((In(J )/In)p)
nd−s
exists.
We now establish some Volume = Multiplicity formulas.
Theorem 6.5. Suppose that R is a d-dimensional analytically unramified local ring and {Ii} is a graded family of mR-primary ideals in R. Then
nli→m∞
lR(R/In)
nd/d! = pli→m∞
e(Ip) pd
exists. Here e(Ip) is the multiplicity
e(Ip) = eIp(R) = kli→m∞
lR (R/Ipk )
kd/d! .
Theorem 6.5 is proven for valuation ideals associated to an Abhyankar valuation in a regular local ring which is essentially of finite type over a field in [15], for general families of mR-primary ideals when R is a regular local ring containing a field in [31] and when R is a local domain which is essentially of finite type over an algebraically closed field k with R/mR = k in Theorem 3.8 [28]. It is proven when R is regular or R is analytically unramified with perfect residue field in Theorem 6.-
5 [6].
Proof. There exists c ∈ Z+ such that mcR ⊂ I1.
We first prove the theorem when R is analytically irreducible, and so satisfies the assumptions of Theorem 4.2. We may assume that R is complete. Let ν be the valuation of Q(R) constructed from S in the proof of Theorem 4.2, with associated valuation ideals Kλ in the valuation ring Vν of ν. Let k = R/mR and k′ = S/mS = Vν/mν. Apply (14) to find α ∈ Z+ such that
Kαn ∩ R ⊂ mnR
for all n ∈ N. We have that
Kαcn ∩ R ⊂ mcRn ⊂ In
for all n. For t ≥ 1, let
Γ(I∗)(t) = { (n1, . . . , nd, i) | dimk Ii ∩ Kn1λ1+···+ndλd /Ii ∩ K+
n1λ1+···+ndλd ≥ t
and n1 + · · · + nd ≤ αci },
and
Γ(R)(t) = { (n1, . . . , nd, i) | dimk R ∩ Kn1λ1+···+ndλd /R ∩ K+
n1λ−1+···+ndλd ≥ t
and n1 + · · · + nd ≤ αci }.
20

As in the proofs of Lemmas 4.4 and 4.5, Γ(I∗)(t) and Γ(R)(t) satisfy the conditions (5) and (6) of Theorem 3.2 when they are not contained in {0}. For fixed p ∈ Z+ and t ≥ 1, let
Γ(I∗)(p)(t) = { (n1, . . . , nd, kp) | dimk Ipk ∩ Kn1λ1+···+ndλd /Ipk ∩ K+
n1λ1+···+ndλd ≥ t
and n1 + · · · + nd ≤ αckp }.
We have inclusions of semigroups
k ∗ Γ(I∗)(pt) ⊂ Γ(I∗)(p)(t)
kp ⊂ Γ(I∗)(t)
kp
for all p, t and k. By Theorem 3.4, given ε > 0, there exists p0 such that p ≥ p0 implies
vol(∆(Γ(I∗)(t)) − ε
[k′ : k] ≤ kli→m∞
#(k ∗ Γ(I∗)(pt))
kdpd .
Thus
vol(∆(Γ(I∗)(t)) − ε
[k′ : k] ≤ kli→m∞
#Γ(I∗)(p)(t)
kp
kdpd ≤ vol(∆(Γ(I∗)(t)).
Again by Theorem 3.4, we can choose p0 sufficiently large that we also have that
vol(∆(Γ(R)(t)) − ε
[k′ : k] ≤ kli→m∞
#Γ(R)(t)
kp
kdpd ≤ vol(∆(Γ(R)(t))).
Now
lR(R/Ipk) = (
[k′:k]
∑
t=1
#Γ(R)(t)
kp ) − (
[k′:k]
∑
t=1
#Γ(I∗)(p)(t)
kp )
and
lR(R/In) = (
[k′:k]
∑
t=1
#Γ(R)(nt)) − (
[k′:k]
∑
t=1
#Γ(I∗)(nt)).
By Theorem 3.2,
nli→m∞
lR(R/In)
nd = (
[k′:k]
∑
t=1
vol(∆(Γ(R)(t))) − (
[k′:k]
∑
t=1
vol(∆(Γ(I∗)(t)))).
Thus
nli→m∞
lR(R/In)
nd − ε ≤ kli→m∞
lR (R/Ipk )
kdpd = e(Ip)
d!pd ≤ nli→m∞
lR(R/In)
nd + ε.
Taking the limit as p → ∞, we obtain the conclusions of the theorem. Now assume that R is analytically unramified. We may assume that R is complete and reduced since
lR(R/Ipk) = lRˆ(Rˆ/IpkRˆ) and ed(Ip, R) = ed(IpRˆ, Rˆ)
for all p, k. Suppose that the minimal primes of (the reduced ring) R are {q1, . . . , qs}. Let Ri = R/qi. Ri are complete local domains. We have that
ed(Ip, R)
pd =
s
∑
i=1
ed(IpRi, Ri) pd
21

by the additivity formula (page V-3 [35] or Corollary 4.6.8, page 189 [4]) or directly from Lemma 4.8. We also have that
nli→m∞
lR(R/In)
nd =
s
∑
i=1
nli→m∞
lR(Ri/InRi) nd
by Lemma 4.8. Since each Ri is analytically irreducible, the limits
nli→m∞
lR(Ri/InRi)
nd = pli→m∞
ed(IpRi, Ri) pd
exist by the earlier proof of this theorem for analytically irreducible local rings. The conclusions of the theorem now follow.
Suppose that R is a Noetherian ring, and {Ii} is a graded family of ideals in R. Let
s = s(I∗) = lim sup dim R/Ii.
Let i0 ∈ Z+ be the smallest integer such that
(37) dim R/Ii ≤ s for i ≥ i0.
For i ≥ i0 and p a prime ideal in R such that dim R/p = s, we have that (Ii)p = Rp or (Ii)p is pp-primary. s is in general not a limit, as is shown by Example 6.6 [6]. Let
T = T (I∗) = {p ∈ spec(R) | dim R/p = s and there exist arbitrarily large j such that (Ij)p 6= Rp}.
We recall some lemmas from [6].
Lemma 6.6. (Lemma 6.7 [6]) T (I∗) is a finite set.
Lemma 6.7. (Lemma 6.8 [6]) There exist c = c(I∗) ∈ Z+ such that if j ≥ i0 and p ∈ T (I∗), then
pjcRp ⊂ IjRp.
Let A(I∗) = {q ∈ T (I∗) | InRq is qq-primary for n ≥ i0}.
Lemma 6.8. (Lemma 6.9 [6]) Suppose that q ∈ T (I∗) \ A(I∗). Then there exists b ∈ Z+
such that qqb ⊂ (In)q for all n ≥ i0.
We obtain the following asymptotic additivity formula. It is proven in Theorem 6.10 [6], with the additional assumption that R is regular or analytically unramified of equicharacteristic zero.
Theorem 6.9. Suppose that R is a d-dimensional analytically unramified local ring and {Ii} is a graded family of ideals in R. Let s = s(I∗) = lim sup dim R/Ii . Suppose that s < d. Then
nli→m∞
es(mR, R/In)
nd−s/(d − s)! = ∑
q
(
kli→m∞
e((Ik )q )
kd−s
)
e(mR/q )
where the sum is over all prime ideals q such that dim R/q = s.
22

Proof. Let i0 be the (smallest) constant satisfying (37). By the additivity formula (V-2 [35] or Corollary 4.6.8, page 189 [4]), for i ≥ i0,
es(mR, R/Ii) = ∑
p
lRp (Rp/(Ii)p)emR (R/p)
where the sum is over all prime ideals p of R with dim R/p = s. By Lemma 6.6, for i ≥ i0, the sum is actually over the finite set T (I∗) of prime ideals of R. For p ∈ T (I∗), Rp is a local ring of dimension ≤ d − s. Further, Rp is analytically unramified (by [34] or Prop 9.1.4 [37]). By Lemma 6.7, and by Theorem 4.7, replacing (Ii)p with pipc if i < i0, we have that
ili→m∞
lRp (Rp /(Ii )p )
id−s
exists. Further, this limit is zero if p ∈ T (I∗) \ A(I∗) by Lemma 6.8, and since s < d. Finally, we have
ili→m∞
lRq (Rq/(Ii)q)
id−s/(d − s)! = kli→m∞
e(Ik)q (Rq) kd−s
for q ∈ A(I∗) by Theorem 6.5.
7. Kodaira-Iitaka dimension on proper k-schemes
Suppose that X is a d-dimensional proper scheme over a field k, and L is a line bundle on X. Then under the natural inclusion of rings k ⊂ Γ(X, OX ), we have that the section ring
⊕
n≥0
Γ(X, Ln)
is a graded k-algebra. Each Γ(X, Ln) is a finite dimensional k-vector space since X is proper over k. In particular, Γ(X, OX ) is an Artin ring. A graded k-subalgebra L =
⊕
n≥0 Ln of a section ring of a line bundle L on X is called a graded linear series for L. We define the Kodaira-Iitaka dimension κ = κ(L) of a graded linear series L as follows. Let
σ(L) = max
{
m | there exists y1, . . . , ym ∈ L which are homogeneous of positive
degree and are algebraically independent over k
}
.
κ(L) is then defined as
κ(L) =
{ σ(L) − 1 if σ(L) > 0 −∞ if σ(L) = 0
This definition is in agreement with the classical definition for line bundles on normal projective varieties (Definition in Section 10.1 [21] or Chapter 2 [27]).
Lemma 7.1. Suppose that L is a graded linear series on a d-dimensional proper scheme X over a field k. Then 1)
(38) κ(L) ≤ d = dim X.
2) There exists a positive constant γ such that
(39) dimk Ln < γnd
for all n.
23

3) Suppose that κ(L) ≥ 0. Then there exists a positive constant α and a positive integer e such that
(40) dimk Len > αnκ(L)
for all positive integers n. 4) Suppose that X is reduced and L is a graded linear series on X. Then κ(L) = −∞ if and only if Ln = 0 for all n > 0.
We will show in Theorem 10.2 that (39) of Lemma 7.1 can be sharpened to the statement that there exists a positive constant γ such that
(41) dimk Ln < γne
where e = max{κ(L), dim NX}, where NX is the nilradical of X (defined in the section on notations and conventions). By Theorem 10.3, (41) is the best bound possible. To prove Lemma 7.1, we need the following lemma.
Lemma 7.2. Suppose that L is a graded linear series on a projective scheme X over a field k. Then
σ(L) = Krull dimension (L)
and
(42) κ(L) =
{ Krull dimension (L) − 1 if Krull dimension (L) > 0 −∞ if Krull dimension (L) = 0.
Proof. We first prove the lemma with the assumption that L is a finitely generated kalgebra. In the case when L0 = k, the lemma follows from graded Noether normalization (Theorem 1.5.17 [4]). For a general graded linear series L, we always have that k ⊂ L0 ⊂ Γ(X, OX ), which is a finite dimensional k-vector space since X is a projective k-scheme. Let m = σ(L) and y1, . . . , ym ∈ L be homogeneous elements of positive degree which are algebraically independent over k. Extend to homogeneous elements-
 of positive degree y1, . . . , yn which generate L as an L0-algebra. Let B = k[y1, . . . , yn]. We have that σ(L) ≤ σ(B) ≤ σ(L) so σ(B) = σ(L). By the first case (L0 = k) proven above, we have that σ(B) = Krull dimension(B). Since L is finite over B, we have that Krull dimension(L) = Krull dimension(B). Thus the lemma holds when L is a finitely generated k-algebra. Now suppose that L is an arbitrary graded linear series on X. Since X is projective over k, we have an expression X = Proj(A) where A-
 is the quotient of a standard graded polynomial ring R = k[x0, . . . , xn] by a homogeneous ideal I, which we can take to be saturated; that is, (x0, . . . , xn) is not an associated prime of I. Let p1, . . . , pt be the associated primes of I. By graded prime avoidance (Lemma 1.5.10 [4]) there exists a form F in k[x0, . . . , xn] of some positive degree c such that F 6∈ ∪it=1pi. Then F is a nonzero
divisor on A, so that A F→ A(c) is 1-1. Sheafifying, we have an injection
(43) 0 → OX → OX (c).
Since OX (c) is ample on X, there exists f > 0 such that A := L ⊗ OX (cf ) is ample. From (43) we then have a 1-1 OX -module homomorphism OX → OX (cf ), and a 1-1 OX -module homomorphism L → A, which induces inclusions of graded k-algebras
L⊂⊕
n≥0
Γ(X, Ln) ⊂ B := ⊕
n≥0
Γ(X, An).
24

There exists a positive integer e such that Ae is very ample on X. Thus, by Theorem II.5.19 and Exercise II.9.9 [19], B′ = ⊕
n≥0 Ben is finite over a coordinate ring S of X and
thus B is a finitely generated k-algebra. Let Li be the k-subalgebra generated by Lj for j ≤ i. A k-algebra is subfinite if it is a subalgebra of a finitely generated k-algebra. We have that
Li ⊂ L ⊂ B
are subfinite k-algebras. By Corollary 4.7 [23],
Krull dimension (Li) ≤ Krull dimension (L) ≤ Krull dimension (B) = dim(X) + 1
for all i. Let
P0 ⊂ P1 ⊂ · · · ⊂ Pr
be a chain of distinct prime ideals in L with r = Krull dimension (L). Since ∪i∞=1Li = L,
there exists n0 such that
P0 ∩ Li ⊂ P1 ∩ Li ⊂ · · · ⊂ Pr ∩ Li
is a chain of distinct prime ideals in Li for i ≥ n0, and so
Krull dimension (L) = Krull dimension (Li)
for ≥ n0. For i ≫ 0 we also have that σ(L) = σ(Li), so
σ(L) = Krull dimension (L).
We now give the proof of Lemma 7.1. Formula 2) follows from the following formula: Suppose that M is a coherent sheaf on X. Then there exists a positive constant γ such that
(44) dimk Γ(X, M ⊗ Ln) < γnd
for all positive n. We first prove (44) when X is projective. Let OX (1) be a very ample line bundle on X.
By Proposition 7.4 [19], there exists a finite filtration of M by coherent sheaves Mi with
quotients Mi/Mi−1 ∼= OYi (ni), where Yi are closed integral subschemes of X and ni ∈ Z. There exists a number c > 0 such that L ⊗ OYi(c) is ample for all i. Let A = OX (n) ⊗ L, where n = c + max{|ni|}. For all i and positive n, we have
dimk Γ(X, (Mi/Mi−1) ⊗ Ln) ≤ dimk Γ(Yi, OYi ⊗ An).
This last is a polynomial in n of degree equal to dim Yi for large n (by Proposition 8.8a [21]). Thus we obtain the formula (44) in the case that X is projective. Now suppose that X is proper over k. We prove the formula by induction on dim M. If
dim M = 0, then dimk Γ(X, M) < ∞, and M ⊗ Ln ∼= M for all n, so (44) holds. Suppose that dim M = e (≤ d) and the formula is true for coherent OX -modules whose support has dimension < e. Let I be the sheaf of ideals on X defined for η ∈ X by
Iη = {f ∈ OX,η | f Mη = 0}.
Let Y = Spec(OX /I), a closed subscheme of X. M is a coherent OY -module, and Y and M have the same support, so dim Y = e. By Chow’s Lemma, there exists a proper
25

morphism φ : Y ′ → Y such that Y ′ is projective over k and φ is an isomorphism over an open dense subset of Y . Ket K be the kernel of the natural morphism of OY -modules
M → φ∗φ∗M.
dim K < e since φ is an isomorphism over a dense open subset of Y . Let L′ = φ∗(L ⊗ OY ). We have inequalities
dimk Γ(X, M ⊗ Ln) ≤ dimk Γ(X, K ⊗ Ln) + dimk Γ(Y ′, φ∗(M) ⊗ (L′)n)
for all n ≥ 0, so we get the desired upper bound of (44). Now we establish 1). Let κ := κ(L). Then there exists an inclusion of a weighted polynomial ring k[x0, . . . , xκ] into L. Let f be the least common multiple of the degrees of the xi. Let Z = Proj(k[x0, . . . , xκ]). OZ (f ) is an ample line bundle on the κ-dimensional weighted projective space Z. Thus there exists a polynomial Q(n) of degree κ such that
dimk k[x0, . . . , xn]nf = dimk Γ(Z, OZ (nf )) = Q(n) for all n ≫ 0.
Thus there exists a positive constant α such that
dimk Lnf ≥ αnκ for n ≫ 0,
whence κ(L) ≤ d by 2). We will now establish formula 3). Suppose that κ(L) ≥ 0. Let Li be the k-subalgebra of L generated by Lj for j ≤ i. For i sufficiently large, we have that κ(Li) = κ(L). For
such an i, since Li is a finitely generated L0-algebra, we have that there exists a number e
such that the Veronese algebra L∗ defined by L∗n = (Li)en is generated as a L0-algebra in
degree 1. Thus, since L0 is an Artin ring, and L∗ has Krull dimension κ(L) + 1 by (42),
L∗ has a Hilbert polynomial P (t) of degree κ(L), satisfying lL0(L∗n) = P (n) for n ≫ 0 (Corollary to Theorem 13.2 [30]), where lL0 denotes length of an L0 module, and thus
dimk L∗n = (dimk L0)P (n) for n ≫ 0. Thus there exists a positive constant α such that
dimk L∗n > αnκ(L) for all n, and so
dimk Len > αnκ(L)
for all positive integers n, which is formula (40). Finally, we will establish the fourth statement of the lemma. Suppose that X is reduced and 0 6= Ln for some n > 0. Consider the graded k-algebra homomorphism φ : k[t] → L defined by φ(t) = z where k[t] is graded by giving t the weight n. The kernel of φ is weighted homogeneous, so it is either 0 or (ts) for some s > 1. Thus if φ is not 1-1 then there exists s > 1 such that zs = 0 in Lns. We will show that this cannot happen. Since
z is a nonzero global section of Γ(X, Ln), there exists Q ∈ X such that the image of z in LnQ is σf where f ∈ OX,Q is nonzero and σ is a local generator of LnQ. The image of zs
in LsQn = σsOX,Q is σsf s. We have that f s 6= 0 since OX,Q is reduced. Thus zs 6= 0. We thus have that φ is 1-1, so κ(L) ≥ 0.
8. Limits of graded linear series on proper varieties over a field
Suppose that L is a graded linear series on a proper variety X over a field k. The index m = m(L) of L is defined as the index of groups
m = [Z : G]
where G is the subgroup of Z generated by {n | Ln 6= 0}. The following theorem has been proven by Okounkov [33] for section rings of ample line bundles, Lazarsfeld and Musta ̧t ̆a [28] for section rings of big line bundles, and for graded
26

linear series by Kaveh and Khovanskii [22]. All of these proofs require the assumption that k is algebraically closed. We prove the result here for an arbitrary base field k.
Theorem 8.1. Suppose that X is a d-dimensional proper variety over a field k, and L is a graded linear series on X with Kodaira-Iitaka dimension κ = κ(L) ≥ 0. Let m = m(L) be the index of L. Then
nli→m∞
dimk Lnm nκ exists.
In particular, from the definition of the index, we have that the limit
nli→m∞
dimk Ln nκ
exists, whenever n is constrained to lie in an arithmetic sequence a + bm (m = m(L) and a an arbitrary but fixed constant), as dimk Ln = 0 if m 6 | n. An example of a big line bundle where the limit in Theorem 8.1 is an irrational number is given in Example 4 of Section 7 [12]. It follows that dimk Ln = 0 if m 6 | n, and if κ(L) ≥ 0, then there exist positive constants α < β such that
(45) αnκ(L) < dimk Lnm < βnκ(L)
for all sufficiently large positive integers n The following theorem is proven by Kaveh and Khovanskii [22] when k is an algebraically closed field (Theorem 3.3 [22]). We prove the theorem for an arbitrary field. Theorem 8.2 is a global analog of Theorem 6.5.
Theorem 8.2. Suppose that X is a d-dimensional proper variety over a field k, and L is a graded linear series on X with Kodaira-Iitaka dimension κ = κ(L) ≥ 0. Let m = m(L) be the index of L. Let Ynm be the projective subvariety of Pdimk Lnm that is the closure of
the image of the rational map Lnm : X 99K Pdimk Lnm−1
k . Let deg(Ynm) be the degree of
Ynm in Pdimk Lnm−1
k . Then dim Ynm = κ for n ≫ 0 and
nli→m∞
dimk Lnm
nκ = nli→m∞
deg(Ynm)
κ!nκ .
Letting t be an indeterminate, deg(Ynm) is the multiplicity of the graded k-algebra k[Lnmt] (with elements of Lnmt having degree 1). The proof by Kaveh and Khovanskii actually is valid for a variety X over an arbitrary field k, with the additional assumption that there exists a valuation ν of the function field k(X) of X such that the value group Γν of ν is isomorphic to Zd and the residue field Vν/mν = k. The existence of such a valuation is always true if k is algebraically closed. It is however-
 a rather special condition over non closed fields, as is shown by the following proposition.
Proposition 8.3. Suppose that X is a d-dimensional projective variety over a field k. Then there exists a valuation ν of the function field k(X) of X such that the value group Γν of ν is isomorphic to Zd and the residue field Vν /mν = k if and only if there exists a
birational morphism X′ → X of projective varieties such that there exists a nonsingular (regular) k-rational point Q′ ∈ X′.
27

Proof. First suppose there exists a valuation ν of the function field k(X) of X such that the value group Γν of ν is isomorphic to Zd as a group and with residue field Vν/mν = k. Then ν is an “Abhyankar valuation”; that is
trdegkk(X) = d = 0 + d = trdegkVν/mν + rational rank Γν,
with k = Vν/mν , so there exists a local uniformization of ν by [26]. Let Q be the center of ν on X, so that Vν dominates OX,Q. OX,Q is a localization of a k-algebra k[Z] where Z ⊂ Vν is a finite set. By Theorem 1.1 [26], there exists a regular local ring R which is essentially of finite type over k with quotient field k(X) such that Vν dominates R and Z ⊂ R. Since k[Z] ⊂ R and Vν dominates OX,Q, we have that R dominates OX,Q. The
residue field R/mR = k since Vν dominates R. There exists a projective k-variety X′′
such that R is the local ring of a closed k-rational point Q′ on X′′, and the birational map X′′ 99K X is a morphism in a neighborhood of Q′. Let X′ be the graph of the birational correspondence between X′′ and X. Since X′′ 99K X is a morphism in a neighborhood of Q′, the projection of X′ onto X′′ is an isomorphism in a neighborhood of Q′. We can thus identify Q′ with a nonsingular k-rational point of X′. Now suppose that there exists a birational morphism X′ → X of projective varieties such that -
there exists a nonsingular k-rational point Q′ ∈ X′. Choose a regular system of parameters y1, . . . , yd in R = OX′,Q′. R/mR = k(Q′) = k,
so k is a coefficient field of R. We have that Rˆ = k[[y1, . . . , yd]]. We define a valuation νˆ
dominating Rˆ by stipulating that
(46) νˆ(yi) = ei for 1 ≤ i ≤ d
where {ei} is the standard basis of the totally ordered group (Zd)lex, and νˆ(c) = 0 if c is a nonzero element of k.
If f ∈ Rˆ and f = ∑ ci1,...,id yi11 · · · yid
d with ci1,...,id ∈ k, then
νˆ(f ) = min{ν(yi11 · · · yid
d ) | ci1,...,id 6= 0}.
We let ν be the valuation of the function field k(X) which is obtained by restricting ν. The value group of ν is (Zd)lex.
Suppose that h is in k(X) and ν(h) = 0. Write h = f
g where f, g ∈ R and ν(f ) = ν(g).
Thus in Rˆ, we have expansions f = αyi11 · · · yid
d + f ′, g = βyi11 · · · yid
d + g′ where α, β are
nonzero elements of k, ν(yi11 · · · yid
d ) = ν(f ) = ν(g) and ν(f ′) > ν(f ), ν(g′) > ν(g). Let
γ=α
β in k. Computing f − γg in Rˆ, we obtain that ν(f − γg) > ν(f ), and thus the residue
of f
g in Vν/mν is equal to the residue of γ, which is in k. By our construction k ⊂ Vν. Thus the residue field Vν/mν = k.
We now proceed to prove Theorems 8.1 and 8.2. By Chow’s Lemma, there exists a proper birational morphism φ : X′ → X which is an isomorphism over a dense open set, such that X′ is projective over k. Since X is integral, we have an inclusion Γ(X, Ln) ⊂ Γ(X, φ∗Ln) for all n. Thus L is a graded linear series for φ∗L, on the projective variety X′. In this way, we can assume that X is in fact projective over k. By [41], X has a closed regular point Q (even though there may be no points which are smooth -
over k if k is not perfect). Let R = OX,Q. R is a d-dimensional regular local ring.
Let k′ = k(Q) = R/mR. Choose a regular system of parameters y1, . . . , yd in R. By a similar argument to that of the proof of Theorem 4.2, we may define a valuation ν of the function field k(X) of X
28

dominating R, by stipulating that
(47) ν(yi) = ei for 1 ≤ i ≤ d
where {ei} is the standard basis of the totally ordered group Γν = (Zd)lex, and ν(c) = 0 if c is a unit in R. As in the proof of Theorem 4.2, we have that the residue field of the valuation ring Vν of ν is Vν/mν = k(Q) = k′. L is a graded linear series for some line bundle L on X. Since X is integral, L is isomorphic to an invertible sheaf OX (D) for some Cartier divisor D on X. We can assume that Q is not contained in the support of D, after possibly replacing D with a Cartier divisor linearly eq-
uivalent to D. We have an induced graded k-algebra isomorphism of section rings
⊕
n≥0
Γ(X, Ln) → ⊕
n≥0
Γ(X, OX (nD))
which takes L to a graded linear series for OX (D). Thus we may assume that L = OX (D). For all n, the restriction map followed by inclusion into Vν ,
(48) Γ(X, Ln) → LQ = OX,Q ⊂ Vν
is a 1-1 k-vector space homomorphism since X is integral, and we have an induced kalgebra homomorphism (sending t 7→ 1).
L → OX,Q ⊂ Vν .
Given a nonnegative element γ in the value group Γν = (Zd)lex of ν, we have associated
valuation ideals Iγ and Iγ+ in Vν defined by
Iγ = {f ∈ Vν | ν(f ) ≥ γ}
and
Iγ+ = {f ∈ Vν | ν(f ) > γ}.
Since Vν /mν = k′, we have that Iλ/I+
λ ∼= k′ for all nonnegative elements λ ∈ Γν, so
(49) dimk(Iγ /Iγ+) = [k′ : k] < ∞
for all non negative γ ∈ Γν. For 1 ≤ t, let
S(L)(nt) = {γ ∈ Γν | dimk Ln ∩ Iγ/Ln ∩ Iγ+ ≥ t}.
Since every element of Ln has non negative value (as Ln ⊂ Vν), we have by (49) and (48) that
(50) dimk Ln =
[k′:k]
∑
t=1
#(S (L)(nt) )
for all n. For 1 ≤ t, let
S(L)(t) = {(γ, n)|γ ∈ S(L)(nt)}.
We have inclusions of semigroups S(L)(t′) ⊂ S(L)(t) if t < t′.
Lemma 8.4. Suppose that t ≥ 1, 0 6= f ∈ Li, 0 6= g ∈ Lj and
dimk Li ∩ Iν(f)/Li ∩ I+
ν(f) ≥ t.
Then
(51) dimk Li+j ∩ Iν(fg)/Li+j ∩ I+
ν(fg) ≥ t. 29

In particular, the S(L)(t) are subsemigroups of the semigroup Zd+1 whenever S(L)(t) 6= ∅. We have that m(S(L)(t)) = m(S(L)(1)) and q(S(L)(t)) = q(S(L)(1)) for all t such that S(L)(t) 6⊂ {0}.
Proof. The proof of (51) and that S(L)(t) are sub semigroups is similar to that of Lemma 4.4. Suppose that S(L(t)) 6⊂ {0}. S(L)(t) ⊂ S(L)(1), so
(52) m(S(L)(1)) divides m(S(L)(t))
and
(53) q(S(L)(t)) ≤ q(S(L)(1)).
For all a ≫ 0, S(L)(1)
am(S(L)(1)) 6= ∅. In particular, we can take a ≡ 1 ((mod mS(L)(t))).
There exists b > 0 such that S(L)(t)
bm(S(L)(t)) 6= ∅. By (51), we have that
S(L)(t)
am(S(L)(1) )+bm(S(L)(t)) 6= ∅.
Thus m(S(L)(1)) ∈ π(G(S(L)(t))), and by (52), m(S(L)(t)) = m(S(L)(1)). Let q = q(S(L)(1)). There exists n1 > 0 and (γ1, n1), . . . , (γq, n1) ∈ S(L)(n11) such that
if C1 is the cone generated by (γ1, n1), . . . , (γq, n1) in Rd+1, then dim C1 ∩ (Rd × {1}) = q. There exists (τ, n2) ∈ S(L(t)) with n2 > 0. Thus
(τ + γ1, n1 + n2), . . . , (τ + γq, n1 + n2) ∈ S(L)(t)
n1 +n2
by (51). Let C2 be the cone generated by
(τ + γ1, n1 + n2), . . . , (τ + γq, n1 + n2)
in Rd+1. Then dim C2 ∩ (Rd × {1}) = q, and q ≤ q(S(L)(t)). Thus, by (53), q(S(L)(t)) = q(S(L)(1)).
We have that m = m(L) is the common value of m(S(L)(t)). Let q(L) be the common value of q(S(L)(t)) for S(L)(t) 6⊂ {0}. There exists a very ample Cartier divisor H on X (at the beginning of the proof we reduced to X being projective) such that OX (D) ⊂ OX (H) and the point Q of X (from the beginning of the proof) is not contained in the support of H. Let An = Γ(X, OX (nH)) and A be the section ring A = ⊕
n≥0 An. After possibly replacing H with a sufficiently
high multiple of H, we may assume that A is generated in degree 1 as a k′′ = Γ(X, OX )
algebra. [k′′ : k] < ∞ since X is projective. The k-algebra homomorphism L → Vν defined after (48) extends to a k-algebra homomorphism L ⊂ A → Vν. Let
Tn = {γ ∈ Γν | An ∩ Iγ /An ∩ Iγ+ 6= 0},
and T = {(γ, n) | γ ∈ Tn}. T is a subsemigroup of Zd+1 by the argument of Lemma 8.4, and we have inclusions of semigroups S(t) ⊂ T for all t. By our construction, A is naturally a graded subalgebra of the graded algebra OX,Q[t]. Since H is ample on X, we have that A(0) = k(X), where A(0) is the set of elements of degree 0 in the localization of A at the set of nonzero homogeneous elements of A. Thus
for 1 ≤ i ≤ d, there exists fi, gi ∈ Ani, for some ni, such that fi
gi = yi. Thus
(ei, 0) = (ν(yi), 0) = (ν(fi), ni) − (ν(gi), ni) ∈ G(T ).
30

for 1 ≤ i ≤ d. Since A1 6= 0, we then have that (0, 1) ∈ G(T ). Thus G(T ) = Zd+1, so
L(T ) = Rd+1, ∂M (T ) = Rd × {0} and q(T ) = d (with the notation of Section 3 on cones and semigroups). For all n ≫ 0 we have a bound
|Tn| ≤ dimk An = [k′′ : k] dimk′′ An = [k′′ : k]PA(n)
where PA(n) is the Hilbert polynomial of the k′′-algebra A, which has degree dim X = d = q(T ). Thus, by Theorem 1.18 [22], T is a strongly nonnegative semigroup. Since the S(L)(t) are subsemigroups of T , they are also strongly nonnegative, so by Theorem 3.1 and (50), we have that
(54) nli→m∞
dimk Lnm
nq(L) =
[k′:k]
∑
t=1
nli→m∞
#(S(L)(nt)m)
nq(L) =
[k′:k]
∑
t=1
volq(L)(∆(S(L)(t)))
ind(S(L)(t))
exists. Let Ypm be the varieties defined in the statement of Theorem 8.2. Let d(pm) = dim Ypm. The coordinate ring of Ypm is the k-subalgebra L[pm] := k[Lpm] of L (but with the grading giving elements of Lpm degree 1). The Hilbert polynomial PYpm(n) of Ypm (Section I.7 [19] or Theorem 4.1.3 [4]) has the properties that
(55) PYpm (n) = deg(Ypm)
d(pm)! nd(pm) + lower order terms
and
(56) dimk L[pm]
npm = PYpm (n)
for n ≫ 0. We have that
(57) nli→m∞
dimk (L[pm] )npm
nd(pm) = deg(Ypm)
d(pm)! .
Suppose that t is such that 1 ≤ t ≤ [k′ : k] and S(L)(t) 6⊂ {0}. By Lemma 8.4, for p sufficiently large, we have that m(S(L[pm])(t)) = mp. Let C be the closed cone generated by S(L)(pt)m in Rd+1. We also have that
dim(C ∩ (Rd × {1})) = dim(∆(S(L)(t)) = q(L)
for p sufficiently large (the last equality is by Lemma 8.4). Since S(L)(pt)m = S(L[pm])(pt)m, we have that
dim(C ∩ (Rd × {1})) ≤ dim(∆(S(L[pm])(t)) ≤ dim(∆(L)(t)).
Thus
(58) q(S(L[pm])(t)) = q(L)
for all p sufficiently large. By the definition of Kodaira-Iitaka dimension, we also have that
(59) κ(L[pm]) = κ(L)
for p sufficiently large. Now by graded Noether normalization (Section I.7 [19] or Theorem 1.5.17[4]), the finitely generated k-algebra L[pm] satisfies
(60) d(pm) = dim Ypm = Krull dimension(L[pm]) − 1 = κ(L[pm]).
31

We have that
(61) 1
[k′ : k] dimk L[pm]
npm ≤ #(S(L[pm])(n1p)m) ≤ dimk L[pm]
npm
for all n. S(L[pm])(1) is strongly nonnegative since S(L[pm])(1) ⊂ S(L)(1) (or since L[pm] is a finitely generated k-algebra). It follows from Theorem 3.1, (61), (56), (55) and (60) that
(62) q(S(L[pm])(1)) = d(pm) = κ(L[pm]).
From (58), (62) and (59), we have that
(63) q(L) = κ(L) = κ.
Theorem 8.1 now follows from (54) and (63). We now prove Theorem 8.2. For all p, we have inequalities
[k′:k]
∑
t=1
#(n ∗ S(L)(mt)p) ≤
[k′:k]
∑
t=1
#(S(L[mp])(nt)mp) ≤
[k′:k]
∑
t=1
#(S(L)(nt)mp).
The second term in the inequality is dimk(L[pm])nmp and the third term is dimk Lnmp.
Dividing by nκpκ, and taking the limit as n → ∞, we obtain from Theorem 3.3, (63) and (54) for the first term and (57), (59) and (60) for the second term, that for given ε > 0, we can take p sufficiently large that
nli→m∞
dimk Lnm
nκ − ε ≤ deg(Ypm)
κ!pκ ≤ nli→m∞
dimk Lnm
nκ .
Taking the limit as p goes to infinity then proves Theorem 8.2.
Theorem 8.5. (Fujita Approximation) Suppose that D is a big Cartier divisor on a complete variety X of dimension d over a field k, and ε > 0 is given. Then there exists a projective variety Y with a birational morphism f : Y → X, a nef and big Q-divisor N on Y , and an effective Q-divisor E on Y such that there exists n ∈ Z>0 so that nD, nN and
nE are Cartier divisors with f ∗(nD) ∼ nN + nE, where ∼ denotes linear equivalence, and
volY (N ) ≥ volX (D) − ε.
Proof. By taking a Chow cover by a birational morphism, which is an isomorphism in codimension one, we may assume that X is projective over k. This theorem was proven over an algebraically closed field of characteristic zero by Fujita [16] (c.f. Theorem 10.35 [27]). It is proven in Theorem 3.4 and Remark 3.4 [28] over an arbitrary algebraically closed field (using Okounkov bodies) and by Takagi [38] using de Jong’s alterations [13]. We give a proof for an arbitrary field. The conclusions of Theore-
m 3.3 [28] over an arbitrary field follow from Theorem 8.2 and formula (57), taking the Ln of Theorem 8.2 to
be the H0(X, OX (nD)) of Theorem 3.3 [28]. m = 1 in Theorem 8.2 since D is big. Then the Vk,p of Theorem 3.3 [28] are the L[p]
kp of the proof of Theorem 8.2. The proof of Remark 3.4 [28] is valid over an arbitrary field, using the strengthened form of Theorem 3.3 [28] given above, from which the approximation theorem follows.
32

9. Limits on reduced proper schemes over a field
Suppose that X is a proper scheme over a field k and L is a graded linear series for a line bundle L on X. Suppose that Y is a closed subscheme of X. Set L|Y = L ⊗OX OY . Taking global sections of the natural surjections
Ln φ→n (L|Y )n → 0,
for n ≥ 1 we have induced short exact sequences of k-vector spaces
(64) 0 → K(L, Y )n → Ln → (L|Y )n → 0,
where (L|Y )n := φn(Ln) ⊂ Γ(Y, (L|Y )n)
and K(L, Y )n is the kernel of φn|Ln. Defining K(L, Y )0 = k and (L|Y )0 = φ0(L0), we have that L|Y = ⊕
n≥0(L|Y )n is a graded linear series for L|Y and K(L, Y ) = ⊕
n≥0 K(L, Y )n
is a graded linear series for L.
Lemma 9.1. Suppose that X is a reduced proper scheme over a field k and X1, . . . , Xs are the irreducible components of X. Suppose that L is a graded linear series on X. Then
κ(L) = max{κ(L|Xi) | 1 ≤ i ≤ s}.
Proof. L is a graded linear series for a line bundle L on X. Let X1, . . . , Xs be the irreducible components of X. Since X is reduced, we have a natural inclusion
0 → OX →
s
⊕
i=1
OXi .
There is a natural inclusion of k-algebras
⊕
n≥0
Γ(X, Ln) →
s
⊕
i=1


⊕
n≥0
Γ(Xi, Ln ⊗OX OXi )

,
which induces an inclusion of k-algebras
(65) L →
s
⊕
i=1
L|Xi.
Suppose that i is such that 1 ≤ i ≤ s. Set t = κ(L|Xi). Then by the definition of KodairaIitaka dimension, there exists a graded inclusion of k-algebras φ : k[z1, . . . , zt] → L|Xi where k[z1, . . . , zt] is a graded polynomial ring. Since the projection L → L|Xi is a surjection, we have a lift of φ to a graded k-algebra homomorphism into L, which is 1-1, so that κ(L) ≥ t. Thus
κ(L) ≥ max{κ(L|Xi) | 1 ≤ i ≤ s}.
Let κ = κ(L). Then there exists a 1-1 k-algebra homomorphism φ : k[z1, . . . , zq] → L where k[z1, . . . , zq] is a positively graded polynomial ring. Let φi : k[z1, . . . , zq] → L|Xi be the induced homomorphisms, for 1 ≤ i ≤ s. Let pi be the kernel of φi. Since (65) is 1-1, we have that p1 ∩ · · · ∩ ps = (0). Since k[z1, . . . , zq] is a domain, this implies that some pi = (0). Thus φi is 1-1 and we have that κ(L|Xi) ≥ κ(L).
33

Theorem 9.2. Suppose that X is a reduced proper scheme over a field k. Let L be a graded linear series on X with Kodaira-Iitaka dimension κ = κ(L) ≥ 0. Then there exists a positive integer r such that
nli→m∞
dimk La+nr nκ exists for any fixed a ∈ N.
The theorem says that
nli→m∞
dimk Ln nκ
exists if n is constrained to lie in an arithmetic sequence a + br with r as above, and for some fixed a. The conclusions of the theorem are a little weaker than the conclusions of Theorem 8.1 for varieties. In particular, the index m(L) has little relevance on reduced but not irreducible schemes (as shown by the example after Theorem 10.2 and Example 9.5.
Proof. Let X1, . . . , Xs be the irreducible components of X. Define graded linear series M i
on X by M 0 = L, M i = K(M i−1, Xi) for 1 ≤ i ≤ s. By (64), for n ≥ 1, we have exact sequences of k-vector spaces
0 → (M j+1)n = K(M j, Xj+1)n → Mnj → (M j |Xj+1)n → 0
for 0 ≤ j ≤ s − 1, and thus
Mnj = Kernel(Ln →
j
⊕
i=1
(L|Xi)n)
for 1 ≤ j ≤ s. The natural map L → ⊕s
i=1 L|Xi is an injection of k-algebras since X is
reduced. Thus Mns = (0), and
(66) dimk Ln =
s
∑
i=1
dimk(M i−1|Xi)n
for all n. Let r = LCM{m(M i−1|Xi) | κ(M i−1|Xi) = κ(L)}. The theorem now follows
from Theorem 8.1 applied to each of the Xi with κ(M i−1|Xi) = κ(L) (we can start with an X1 with κ(L|X1) = κ(L)).
Corollary 9.3. Suppose that X is a reduced projective scheme over a perfect field k. Let L be a graded linear series on X with κ(L) ≥ 0. Then there exists a positive constant β such that
(67) dimk Ln < βnκ(L)
for all n. Further, there exists a positive constant α and a positive integer m such that
(68) αnκ(L) < dimk Lmn
for all positive integers n.
Proof. Equation (67) follows from (66), since dimk(M i−1|Xi) ≤ dimk(L|Xi) for all i, and since (45) holds on a variety. Equation (68) is immediate from (40).
The following lemma is required for the construction of the next example. It follows from Theorem V.2.17 [19] when r = 1. The lemma uses the notation of [19].
34

Lemma 9.4. Let k be an algebraically closed field, and write P1 = P1k. Suppose that r ≥ 0.
Let X = P(OP1(−1) ⊕ OrP1) with natural projection π : X → P1. Then the complete linear
system |Γ(X, OX (1) ⊗ π∗OP1(1))| is base point free, and the only curve contracted by the induced morphism of X is the curve C which is the section of π defined by the projection of O(−1)P1
⊕ OrP1 onto the first factor.
Proof. We prove this by induction on r. First suppose that r = 0. Then π is an isomorphism, and X = C.
OX (1) ⊗ π∗OP1 (1) ∼= π∗OX (1) ⊗ OP1 (1) ∼= OP1 (−1) ⊗ OP1(1) ∼= OP1,
from which the statement of the lemma follows. Now suppose that r > 0 and the statement of the lemma is true for r − 1. Let V0 be
the P1-subbundle of X corresponding to projection onto the first r − 1 factors,
(69) 0 → OP1 → OP1 (−1) ⊕ OrP1 → OP1(−1) ⊕ Or−1
P1 → 0.
Apply π∗ to the exact sequence
0 → OX (1) ⊗ OX (−V0) → OX (1) → OV0 (1) → 0
to obtain the exact sequence (69), from which we see that OX (V0) ∼= OX (1) and V0 ∼=
P(OP1 (−1) ⊕ Or−1
P1 ) with OX (V0) ⊗ OV0 ∼= OV0(1). Let F be the fiber over a point in P1
by π. We have that OX (1) ⊗ π∗OP1 ∼= OX (V0 + F ). Apply π∗ to
0 → OX (F ) → OX (V0 + F ) → OX (V0 + F ) ⊗ OV0 → 0
to get
0 → OP1 (1) → OP1
⊕ OP1 (1)r → π∗(OV0 (1) ⊗ π∗OP1(1)) → 0.
Now take global sections to obtain that the restriction map
Γ(X, OX (V0 + F )) → Γ(V0, OV0 (1) ⊗ π∗OP1(1))
is a surjection. In particular, by the induction statement, V0 contains no base points of
Λ = |Γ(X, OX (V0 + F ))|. Since any two fibers F over points of P1 are linearly equivalent, Λ is base point free. Suppose that γ is a curve of X which is not contained in V0. If π(γ) = P1 then (γ ·F ) > 0 and (γ · V0) ≥ 0 so that γ is not contracted by Λ. If γ is in a fiber of F then (γ · F ) = 0.
Let F ∼= Pr be the fiber of π containing γ. Let h = F · V0, a hyperplane section of F . Then (γ · V0) = (γ · h)F > 0. Thus γ is not contracted by Λ. By induction on r, we have that C is the only curve on V0 which is contracted by Λ. We have thus proven the induction statement for r.
Example 9.5. Let k be an algebraically closed field. Suppose that s is a positive integer and ai ∈ Z+ are positive integers for 1 ≤ i ≤ s. Suppose that d > 1. Then there exists a connected reduced projective scheme X over k which is equidimensional of dimension d with a line bundle L on X and a bounded function σ(n) such that
dimk Γ(X, Ln) = λ(n)
(d + n − 1 d−1
)
+ σ(n),
where λ(n) is the periodic function
λ(n) = |{i | n ≡ 0(ai)}|.
35

The Kodaira-Iitaka dimension of L is κ(L) = d − 1. Let m′ = LCM{ai}. The limit
nli→m∞
dimk Ln
nd−1
exists whenever n is constrained to be in an arithmetic sequence a + bm′ (with any fixed a). We have that dimk Ln 6= 0 for all n if some ai = 1, so the conclusions of Theorem 8.1 do not quite hold in this example.
Proof. Let E be an elliptic curve over k. Let p0, p1, . . . , ps be points on E such that the
line bundles OE(pi − p0) have order ai. Let S = E ×k Pd−1
k , and define line bundles
Li = OE(pi − p0) ⊗ OPd−1(1) on S. The Segre embedding gives a closed embedding of S
in Pr with r = 3d − 1 Let π : X = P(OP1(−1) ⊕ OrP1) → P1 be the projective bundle,
and let C be the section corresponding to the surjection of OP1(−1) ⊕ OrP1 onto the first
factor. Let b1, . . . , bs be distinct points of P1 and let Fi be the fiber by π over bi. Let Si be an embedding of S in Fi. We can if necessary make a translation of Si so that the point
ci = C · Fi lies on Si, but is not contained in pj × Pd−1 for any j. We have a line bundle
L′ on the (disjoint) union T of the Si defined by L′|Si = Li. By Lemma 9.4, there is a morphism φ : X → Y which only contracts the curve C. φ is actually birational and an isomorphism away from C, but we do not need to verify this, as we can certainly obtain this after replacing φ with the Stein factorization of φ. Let Z = φ(T ). The birational morphism T → Z is an isomorphism away from the points ci,
which are not contained on the support of the divisor defining L′. Thus L′|(T \ φ(C)) extends naturally to a line bundle L on Z. We have a short exact sequence
0 → OZ →
s
⊕
i=1
OSi → F → 0
where F has finite support. Tensoring this sequence with Ln and taking global sections, we obtain that
0≤
s
∑
i=1
dimk Γ(Si, Lin) − dimk Γ(Z, Ln) ≤ dimk F
for all n. Since
Γ(Si, Lin) ∼= Γ(E, OE (n(pi − p0))) ⊗k Γ(Pd−1, OPd−1 (n))
by the Kuenneth formula, we obtain the conclusions of the example.
10. Necessary and sufficient conditions for limits to exist on a proper scheme over a field
The nilradical NX of a scheme X is defined in the section on notations and conventions.
Lemma 10.1. Suppose that X is a proper scheme over a field k and L is a graded linear series on X. Then κ(L) = κ(L|Xred).
Proof. Let L be a line bundle associated to X. We have a commutative diagram
0 00 ↓ ↓↓ 0→⊕
n≥0 Kn → ⊕
n≥0 Ln → ⊕
n≥0(L|Xred)n → 0
↓ ↓↓ 0→⊕
n≥0 Γ(X, Ln ⊗ NX ) → ⊕
n≥0 Γ(X, Ln) → ⊕
n≥0 Γ(Xred, (L|Xred)n)
36

so that Kn = Ln ∩ Γ(X, Ln ⊗ NX ) for all n.
Suppose that σ ∈ Γ(X, Lm). X is Noetherian, so there exists r0 = r0(σ) such that the
closed sets sup(σr) = sup(σr0) for all r ≥ r0. Thus
σ ∈ Γ(X, Ln ⊗ NX ) if and only if σQ is torsion in the OX,Q-algebra ⊕
n≥0 LnQ for all Q ∈ X, if and only if
σrQ0 = 0 in ⊕
n≥0 LnQ for all Q ∈ X, if and only if
σr0 = 0 in ⊕
n≥0 Γ(X, Ln) since L is a sheaf.
Thus ⊕
n≥0 Γ(X, Ln ⊗ NX ) is the nilradical of ⊕
n≥0 Γ(X, Ln) and so K is the nilradical
of L. We have that κ(L|Xred) ≤ κ(L) since any injection of a weighted polynomial ring into L|Xred lifts to a graded injection into L. If A is a weighted polynomial ring which injects into L, then it intersects K in (0), so there is an induced graded inclusion of A into L|Xred. Thus κ(L|Xred) = κ(L).
Theorem 10.2. Suppose that X is a proper scheme over a field k. Let NX be the nilradical of X. Suppose that L is a graded linear series on X. Then
1) There exists a positive constant γ such that dimk Ln < γne where
e = max{κ(L), dim NX }.
2) Suppose that dim NX < κ(L). Then there exists a positive integer r such that
nli→m∞
dimk La+nr nκ(L)
exists for any fixed a ∈ N.
Proof. Let L be a line bundle associated to L, so that Ln ⊂ Γ(X, Ln) for all n. Let Kn be the kernel of the surjection Ln → (L|Xred)n. From the exact sequence
0 → NX → OX → OXred → 0,
we see that Kn ⊂ Γ(X, NX ⊗ Ln) for all n. There exists a constant c such that
dimk Γ(X, NX ⊗ Ln) < cndim NX
for all n. By Lemma 10.1 and Theorem 9.2, 1. holds and there exists a positive integer r such that for any a,
nli→m∞
dimk (L|Xred )a+nr nκ(L)
exists. Thus the conclusions of the theorem hold.
An example showing that the r of the theorem might have to be strictly larger than the index m(L) is obtained as follows. Let X1 and X2 be two general linear subspaces of
dimension d in P2d. They intersect transversally in a rational point Q. Let Let Li be the graded linear series on Xi defined by
L1n =
{ Γ(X1, OX1 (n) ⊗ OX1 (−Q)) if 2 | n 0 otherwise
and
L2n =
{ Γ(X2, OX2 (n) ⊗ OX2 (−Q)) if 3 | n 0 otherwise
37

Here OXi(−Q) denotes the ideal sheaf on Xi of the point Q. Let X be the reduced scheme whose support is X1 ∪ X2. From the short exact sequence
0 → OX → OX1
⊕ OX1 → k(Q) → 0,
we see that there is a graded linear series L on X associated to OX (1) such that L|Xi = Li
for i = 1, 2, and dimk Ln = dimk L1n + dimk L2n for all n. Thus
dimk Ln =



2
(d+n d
) − 2 if n ≡ 0 (mod 6) 0 if n ≡ 1 or 5 (mod 6)
(d+n d
) − 1 if n ≡ 2, 3 or 4 (mod 6).
In Theorem 10.3, we give general conditions under which limits do not always exist.
Theorem 10.3. Suppose that X is a d-dimensional projective scheme over a field k with d > 0. Let r = dim NX , where NX is the nilradical of X. Suppose that r ≥ 0. Let s ∈ {−∞} ∪ N be such that s ≤ r. Then there exists a graded linear series L on X with κ(L) = s such that
nli→m∞
dimk Ln nr
does not exist, even when n is constrained to lie in any arithmetic sequence.
Remark 10.4. The sequence
dimk Ln nr
in Theorem 10.3 must be bounded by Theorem 10.2.
Proof. Let Y be an irreducible component of the support of NX which has maximal dimension r. Let S be a homogeneous coordinate ring of X, which we may assume is saturated, so that the natural graded homomorphism S → ⊕
n≥0 Γ(X, OX (n)) is an
inclusion. Let PY be the homogeneous prime ideal of Y in S. There exist homogeneous elements z0, . . . , zr ∈ S such that if zi is the image of zi in S/PY , then z1, . . . , zr is a homogeneous system of parameters in S/PY (by Lemma 1.5.10 and Proposition 1.5.11 [4]). We can assume that deg z0 = 1 since some linear form in S is not in PY , so it is not a zero divisor S/PY . We can take z0 to be this form (If k is infinite, we can take all of the zi to have degree 1). k[z0, . . . , zr] is a weighte-
d polynomial ring (by Theorem
1.5.17 [4]), so A := k[z0, . . . , zr] ∼= k[z0, . . . , zd] is a weighted polynomial ring. Let N be the nilradical of S. The sheafification of N is NX . PY is a minimal prime of N , so there exists a homogeneous element x ∈ N such that annS(x) = PY . NPY 6= 0 in SPY , so (PY )PY 6= 0. Thus x ∈ PY , since otherwise 0 = (xPY )PY = (PY )PY . Consider
the graded k-subalgebra B := A[x] = k[z0, . . . , zr, x] of S. We have that x2 = 0. Also, annA(x) = annS(x) ∩ A = PY ∩ A = (0). Suppose that ax + b = 0 with a, b ∈ A. Then
xb = 0, whence b = 0 and thus a = 0 also. Hence the only relation on B is x2 = 0. Let di = deg zi, e = deg x. Recall that d0 = 1. Let f = LCM{d0, . . . , dr, e}. First assume that r ≥ 1. For 0 ≤ α ≤ r, let M (α)
t be the k-vector space of homogeneous
forms of degree t in the weighted variables z0, . . . , zα. OZα(f ) is an ample line bundle on the weighted projective space Zα = Proj(k[z0, . . . , zα]) (If Ui = Spec(k[z0, . . . , zα](zi)),
then OZα |Ui = z
f
idi OUi ).
dimk M (α)
nf = dimk Γ(Zα, OZα (nf ))
38

is thus the value of a polynomial Qα(n) in n of degree α for n ≫ 0. Write
Qα(n) = cαnα + lower order terms.
Suppose that s ≥ 0 (and r ≥ 1). Let L0 = k. For n ≥ 1, let
Ln = znf
0 Mnsf + xz(n−σ(n))f−e
0 M(rn+σ(n))f ⊂ B2nf ⊂ S2nf ⊂ Γ(X, OX (2nf ))
where σ(n) is the function of (22). LmLn ⊂ Lm+n since σ(j) ≥ σ(i) if j ≥ i. L = ⊕
n≥0 Ln
is a graded linear series with κ(L) = s. Since B has x2 = 0 as its only relation, we have that dimk Ln = dimk Mnsf + dimk M(rn+σ(n))f = Qs(n) + Qr(n + σ(n)),
so that
nli→m∞
dimk Ln
nr = nli→m∞
(
csns−r + cr(1 + ( σ(n)
n ))r
)
which does not exist, even when n is constrained to lie in any arithmetic sequence, since limn→∞ σ(n)
n has this property (as commented after (25)).
Suppose that s = −∞ (and r ≥ 1). Then define the graded linear series L by
Ln = xz(n−σ(n))f−e
0 M(rn+σ(n))f .
Then κ(L) = −∞. We compute as above that
nli→m∞
dimk Ln
nr = nli→m∞ cr(1 + ( σ(n)
n ))r
does not exist, even when n is constrained to lie in any arithmetic sequence. Now assume that r = s = 0. Since dim NX = 0, we have injections for all n,
Γ(X, NX ) ∼= Γ(X, NX ⊗ OX (n)) → Γ(X, OX (n)).
In this case Y is a closed point, so that dimk Γ(X, IY ⊗ OX (en)) goes to infinity as n → ∞ (we assume that d = dim X > 0). Thus for g ≫ 0, there exists h ∈ Γ(X, IY ⊗ OX (eg)) such that h 6∈ Γ(X, NX ⊗ OX (eg)), so h is not nilpotent in S. h ∈ PY implies hx = 0 in S. Define L0 = k and for n > 0,
Ln =
{ khn if τ (n) = 0
khn + kxzng−e
0 if τ (n) = 1,
where τ (n) is the function of (29). τ (n) has the property that τ (n) is not eventually constant, even when n is constrained to line in an arithmetic sequence. L=⊕
n≥0 Ln is a graded linear series on X with κ(L) = 0 such that limn→∞ dimk Ln
does not exist, even when n is constrained to lie in any arithmetic sequence. The last case is when r = 0 and s = −∞. Define L0 = k and for n > 0,
Ln =
{ 0 if τ (n) = 0
kxzng−e
0 if τ (n) = 1.
Then L = ⊕
n≥0 Ln is a graded linear series on X with κ(L) = −∞ such that limn→∞ dimk Ln
does not exist, even when n is constrained to lie in any arithmetic sequence.
39

Theorem 10.5. Suppose that X is a projective nonreduced scheme over a field k. Suppose that s ∈ N ∪ {−∞} satisfies s ≤ dim NX. Then there exists a graded linear series L on X with κ(L) = s and a constant α > 0 such that
αndim NX < dimk Lnm
for all n ≫ 0.
Proof. Let r = dim NX. When r ≥ 1 and s ≤ r, this is established in the construction of Theorem 10.3. When r = 0 and s = 0, the graded linear series L = k[t] (with associated line bundle OX ) has κ(L) = 0 and dimk Ln = 1 for all n, so satisfies the bound. Suppose that r = 0 and s = −∞. Then 0 6= Γ(X, NX ) since the support of NX is zero dimensional. Define L0 = k and Ln = Γ(X, NX ) for n > 0. Then L = ⊕
n≥0 Ln is a graded linear series for OX with κ(L) = −∞ which satisfies the bound.
Theorem 10.6. Suppose that X is a d-dimensional projective scheme over a field k with d > 0. Let NX be the nilradical of X. Let α ∈ N. Then the following are equivalent:
1) For every graded linear series L on X with α ≤ κ(L), there exists a positive integer r such that
nli→m∞
dimk La+nr nκ(L)
exists for every positive integer a. 2) For every graded linear series L on X with α ≤ κ(L), there exists an arithmetic sequence a + nr (for fixed r and a depending on L) such that
nli→m∞
dimk La+nr nκ(L)
exists. 3) The nilradical NX of X satisfies dim NX < α.
Proof. 1) implies 2) is immediate. 2) implies 3) follows from Theorem 10.3. 3) implies 1) follows from Theorem 10.2.
Theorem 10.7. Suppose that X is a proper scheme of dimension d over a field k, such that dim NX < d and L is a line bundle on X. Then the limit
nli→m∞
dimk Γ(X, Ln) nd exists.
Proof. We first prove the theorem in the case when X is integral (a variety). We may assume that the section ring L of L has maximal Kodaira-Iitaka dimension d, because the limit is zero otherwise. There then exists a positive constant α and a positive integer e such that
dimk Γ(X, Lne) > αnd
for all positive integers n by (40). Let H be a hyperplane section of X, giving a short exact sequence
0 → OX (−H) → OX → OH → 0.
Tensoring with Ln and taking global sections, we see that Γ(X, Lne ⊗ OX (−H)) 6= 0 for
n ≫ 0 as q(Le ⊗ OH ) ≤ dim(H) = d − 1. Since H is ample, there exists a positive integer f such that L ⊗ OX(f H) is generated by global sections. Thus
Γ(X, Lnef+1) ∼= Γ(X, (Lnef ⊗ OX (−f H)) ⊗ (L ⊗ OX (f H))) 6= 0
40

for n ≫ 0. Thus m(L) = 1. The theorem in the case when X is a variety thus follows from Theorem 8.1. Now assume that X is reduced. Let X1, . . . , Xs be the irreducible components of X. Since X is reduced, we have a natural short exact sequence of OX -modules
0 → OX → ⊕
n≥0
OXi → F → 0
where F has support of dimension ≤ d − 1. Tensoring with Ln, we obtain that
nli→m∞
dimk Γ(X, Ln)
nd =
s
∑
i=1
nli→m∞
dimk Γ(Xi, Ln ⊗ OXi ) nd
exists, as dimk Γ(X, F ⊗ Ln) grows at most like nd−1. Let X = Xred so that OX = OX /NX . From the exact sequence
0 → NX → OX → OX → 0
and since the support of NX has dimension less than d, we have that
nli→m∞
dimk Γ(X, Ln)
nd = nli→m∞
dimk Γ(X, Ln ⊗ OX ) nd
exists.
11. Nonreduced zero dimensional schemes
The case when d = dim X = 0 is rather special. In fact, the implication 2) implies ) of Theorem 10.6 does not hold if d = 0, as follows from Proposition 11.1 below. There is however a very precise statement about what does happen in zero dimensional schemes, as we show below.
Proposition 11.1. Suppose that X is a 0-dimensional irreducible but nonreduced kscheme and L is a graded linear series on X with κ(L) = 0. Then there exists a positive integer r such that
nli→m∞ dimk La+nr
exists for every positive integer a.
Proof. With our assumptions, X = Spec(A) where A is a nonreduced Artin local ring, with dimk L < ∞, and L is a graded k-subalgebra of Γ(X, OX )[t] = A[t]. The condition κ(L) = 0 is equivalent to the statement that there exists r > 0 such that Lr contains a unit u of A. We then have that
dimk Lm+r ≥ dimk LmLr ≥ dimk Lm
for all m. Thus for fixed a, dimk La+nr must stabilize for large n.
We do not have such good behavior for graded linear series L with κ(L) = ∞.
Proposition 11.2. Suppose that X is a 0-dimensional nonreduced k-scheme. Then there exists a graded linear series L on X with κ(L) = −∞, such that
nli→m∞ dimk Ln
does not exist, even when n is constrained to lie in any arithmetic sequence.
41

Proof. X = Spec(A) where A = ⊕s
i=1 Ai, with s the number of irreducible components
of X and the Ai are Artin local rings with dimk A < ∞. Let mA1 be the maximal ideal
of A1. There exists a number 0 < t such that mtA1 6= 0 but mt+1
A1 = 0. Let τ (n) be the
function defined in (29). Define a graded linear series L1 on Spec(A1) by L1n = mA1t+τ(n). Then limn→∞ dimk L1n does not exist, even when n is constrained to lie in an arithmetic sequence. Extend L to a graded linear series L on X with κ(L) = −∞ be setting Ln = L1n
⊕(0) ⊕ · · · ⊕(0).
It follows that the conclusions of Proposition 11.1 do not hold in nonreduced 0-dimensional schemes which are not irreducible.
Proposition 11.3. Suppose that X is a 0-dimensional nonirreducible and nonreduced k-scheme. Then there exists a graded linear series L on X with κ(L) = 0, such that
(70) nli→m∞ dimk Ln
does not exist, even when n is constrained in any arithmetic sequence.
Proof. X = Spec(A) where A = A1
⊕ A2, with A1 an Artin local ring and A2 an Artin
ring. A graded linear series L on X is a graded k-subalgebra of A[t]. Let L2 be a graded linear series on Spec(A2) with κ(L2) = −∞, such that the conclusions of Proposition 11.2 hold. Then the linear series L on X defined by
Ln = A1
⊕(L2)n
has κ(L) = 0, but
nli→m∞ dimk Ln = 1 + nli→m∞ dimk L2n
does not exist, even when n is constrained to lie in any arithmetic sequence.
In particular, the conclusions of Theorem 10.6 are true for 0-dimensional projective k-schemes which are not irreducible.
12. Examples with Kodaira-Iitaka dimension −∞
It is much easier to construct perverse examples with Kodaira-Iitaka dimension −∞, since the condition LmLn ⊂ Lm+n can be trivial in this case. If X is a reduced variety, and L is a graded linear series on X, then it follows from Corollary 9.3 that there is an upper bound dimk Ln < βnq(L) for all n. However, for nonreduced varieties of dimension d, we
only have the upper bound dimk Ln < γnd of (39). Here is an example with κ(L) = −∞
and maximal growth of order nd.
Example 12.1. Let k be a field, and let X be the one dimensional projective non reduced k-scheme consisting of a double line in P2k. Let T be a subset of the positive integers.
There exists a graded linear series L for OX (2) such that
dimk Ln =
{ n + 1 if n ∈ T 0 if n 6∈ T
In the example, we have that κ(L) = −∞, but dimk Ln is O(n) = O(ndim X ).
42

Proof. We can choose homogeneous coordinates coordinates on P2k so that X = Proj(S),
where S = k[x0, x1, x2]/(x21). Let xi be the classes of xi in S, so that S = k[x0, x1, x2]. De
fine a graded linear series L for OX (2) by defining Ln to be the k-subspace of Γ(X, OX (2n))
spanned by {x1xi0xj
2 | i + j = n} if n ∈ T and Ln = 0 if n 6∈ T . Then
dimk Ln =
{ n + 1 if n ∈ T 0 if n 6∈ T
We modify the above example a little bit to find another example with interesting growth.
Theorem 12.2. Let k be a field, and let X be the one dimensional projective non reduced k-scheme consisting of a double line in P2k. Let T be any infinite subset of the positive
integers Z+ such that Z+ \ T is also infinite. There exists a graded linear series L for OX (2) such that
dimk Ln =
{ ⌈log(n)⌉ if n ∈ T
⌈ log(n)
2 ⌉ if n 6∈ T In this example we have κ(L) = −∞.
Proof. We can choose homogeneous coordinates coordinates on P2k so that X = Proj(S),
where S = k[x0, x1, x2]/(x21). Let xi be the classes of xi in S, so that S = k[x0, x1, x2].
Define
λ(n) =
{ ⌈log(n)⌉ if n ∈ T
⌈ log(n)
2 ⌉ if n ∈ Z+ \ T.
Define a graded linear series L for OX (1) by defining Ln to be the k-subspace of Γ(X, OX (n)) spanned by
xn−1
0 x1, xn−2
0 x1x2, . . . , xn−λ(n)
0 x1xλ(n)−1
2. Then Ln has the desired property.
The following is an example of a line bundle on a non reduced scheme for which there is interesting growth. The characteristic p > 0 plays a role in the construction.
Example 12.3. Suppose that d ≥ 1. There exists an irreducible but nonreduced projective variety Z of dimension d over a field of positive characteristic p, and a line bundle N on Z, whose Kodaira-Iitaka dimension is −∞, such that
dimk Γ(Z, N n) =



(d+n−1 d−1
) if n is a power of p
0 otherwise
In particular, given a positive integer r, there exists at least one integer a with 0 ≤ a < r such that the limit
nli→m∞
dimk Γ(Z, N n)
nd−1
does not exist when n is constrained to lie in the arithmetic sequence a + br.
Proof. Suppose that p is a prime number such that p ≡ 2 (3). In Section 6 of [12], a projective genus 2 curve C over an algebraic function field k of characteristic p is constructed, which has a k-rational point Q and a degree zero line bundle L with the properties that
dimk Γ(C, Ln ⊗ OC (Q)) =
{ 1 if n is a power of p 0 otherwise
43

and
(71) Γ(C, Ln) = 0 for all n.
Let E = OC (Q) ⊕ OC. Let S = P(E) with natural projection π : S → C, a ruled surface over C. Let C0 be the section of π corresponding to the surjection onto the second factor
E → OC → 0. By Proposition V.2.6 [19], we have that OS(−C0) ⊗OS OC0 ∼= OC(Q). Let X be the nonreduced subscheme 2C0 of S. We have a short exact sequence
0 → OC (Q) → OX → OC → 0.
Let M = π∗(L) ⊗OS OX . Then we have short exact sequences
(72) 0 → Ln ⊗OC OC (Q) → Mn → Ln → 0.
By (72) and (71), we have that
dimk Γ(X, Mn) = dimk Γ(C, Ln ⊗ OC (Q))
=
{ 1 if n is a power of p 0 otherwise
Now let Z = X × Pd−1
k and N = M ⊗ OP(1). By the Kuenneth formula, we have that
Γ(Z, N n) = Γ(X, Mn) ⊗k Γ(Pd−1, OP(n))
from which the conclusions of the example follow.
References
[1] S. Boucksom and H. Chen, Okounkov bodies of filtered linear series, Compos. Math. 147 (2011), 1205 - 1229. [2] S. Boucksom, C. Favre, M. Jonsson, Differentiability of volumes of divisors and a problem of Teissier, Journal of Algebraic Geometry 18 (2009), 279 - 308. [3] M. Brodmann, Asymptotic stablity of Ass(M/InM ), Proc. Amer. Math. Soc 74 (1979), 16 - 18. [4] W. Bruns and J. Herzog, Cohen-Macaulay rings, Cambridge University Press, 1993. [5] S.D. Cutkosky, Asymptotic growth of saturated pow-
ers and epsilon multiplicity, Math. Res. Lett. 18 (2011), 93 - 106, [6] S.D. Cutkosky, Multiplicities associated to graded families of ideals, Algebra and Number Theory 7 (2013), 2059 - 2083. [7] S.D. Cutkosky, Teissier’s problem on inequalities of nef divisors over an arbitrary field, to appear in Journal of Algebra and its Applications, Memorial volume in honor of Professor Shreeram S. Abhyankar, arXiv:1304.1218. [8] S.D. Cutkosky, Asymptotic Multiplicities, preprint, arXiv:1311.1432. [9] S.D. C-
utkosky, J. Herzog and H. Srinivasan, Asymptotic growth of algebras associated to powers of ideals, Math. Proc. Camb. Philos. Soc. 148 (2010), 55 - 72. [10] S.D. Cutkosky, K. Dalili and O. Kashcheyeva, Growth of rank 1 valuations, Comm. Algebra 38 (2010), 2768 - 2789. [11] S.D. Cutkosky, T. Ha, H. Srinivasan and E. Theodorescu, Asymptotic behavior of length of local cohomology, Canad. J. Math. 57 (2005), 1178 -1192. [12] S.D. Cutkosky and V. Srinivas, On a problem of Zariski on dimensions of linea-
r systems, Ann. Math. 137 (1993), 531 - 559. [13] A. J. de Jong, Smoothness, semi-stability and alterations, Publications Mathematiques I.H.E.S. 83 (1996), 51 - 93. [14] L. Ein, R. Lazarsfeld, M. Mustat ̧ ̆a, M. Nakamaye, M. Popa, Asymptotic invariants of line bundles, Pure Appl. Math. Q. 1 (2005), 379-403. [15] L. Ein, R. Lazarsfeld and K. Smith, Uniform Approximation of Abhyankar valuation ideals in smooth function fields, Amer. J. Math. 125 (2003), 409 - 440. 44

[16] T. Fujita, Approximating Zariski decomposition of big line bundles, Kodai Math. J. 17 (1994), 1-3. [17] M. Fulger, Local volumes on normal algebraic varieties, arXiv:1105.298 [18] A. Grothendieck, and A. Dieudonne ́, Ele ́ments de ge ́ome ́trie alge ́brique IV, vol. 2, Publ. Math. IHES 24 (1965). [19] R. Hartshorne, Algebraic Geometry, Springer Verlag 1977. [20] J. Herzog, T. Puthenpurakal, J. Verma, Hilbert polynomials and powers of ideals, Math. Proc. Cambridge Math. Soc. 145 (2008), 623 --
 642. [21] S. Iitaka, Algebraic Geometry, Springer Verlag, 1982. [22] K. Kaveh and G. Khovanskii, Newton-Okounkov bodies, semigroups of integral points, graded algebras and intersection theory, to appear in Annals of Math., arXiv:0904.3350v3. [23] G. Kemper and N.V. Trung, Krull Dimension and Monomial Orders, J. Algebra 399 (2014), 782 - 800. [24] S. Kleiman, Private Communication [25] S. Kleiman, B. Ulrich and J. Validashti, Specialization of integral dependence, in preparation. [26] H. Knaf and -
F.-V. Kuhlmann, Abhyankar places admit local uniformization in any characteristic, Ann. Scient. Ec. Norm. Sup 30 (2005), 833 - 846. [27] R. Lazarsfeld, Positivity in Algebraic Geometry, I and II, Ergebnisse der Mathematik und ihrer Grenzgebiete, vols 48 and 49, Springer Verlag, Berlin 2004. [28] R. Lazarsfeld and M. Mustat ̧ ̆a, Convex bodies associated to linear series, Ann. Sci. Ec. Norm. Super 42 (2009) 783 - 835. [29] H. Matsumura, Commutative Algebra, 2nd edition, Benjamin/Cummings (1980). [3-
0] H. Matsumura, Commutative Ring Theory, Cambridge Univ. Press, 1986. [31] M. Mustat ̧ ̆a, On multiplicities of graded sequence of ideals, J. Algebra 256 (2002), 229-249. [32] M. Nagata, Local Rings, Wiley, 1962. [33] A. Okounkov, Why would multiplicities be log-concave?, in The orbit method in geometry and physics, Progr. Math. 213, 2003, 329-347. [34] D. Rees, A note on analytically unramified local rings, J. London Math. Soc. 36 (1961), 24 - 28. [35] J.P. Serre, Alge`bre locale. Multiplicite ́-
s. LNM 11, Springer, 1965. [36] I. Swanson, Powers of ideals: primary decomposition, Artin-Rees lemma and regularity, Math. Annalen 307 (1997), 299 - 313. [37] I. Swanson and C. Huneke, Integral closure of ideals, rings and modules, Cambridge Univ. Press, 200. [38] S. Takagi, Fujita’s approximation theorem in positive characteristics, J. Math. Kyoto Univ, 47 (2007), 179 - 202. [39] B. Ulrich and J. Validashti, Numerical criteria for integral dependence, Math. Proc. Camb. Phil. Soc. 151 (2011), 95 -
- 102. [40] O. Zariski and P. Samuel, Commutative Algebra Vol II, Van Nostrand (1960). [41] O. Zariski, The concept of a simple point on an abstract algebraic variety, Trans. Amer. Math. Soc. 62 (1947), 1- 52.
Steven Dale Cutkosky, Department of Mathematics, University of Missouri, Columbia, MO 65211, USA
E-mail address: cutkoskys@missouri.edu
45

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:31.619Z
- **Text Length:** 104127 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
