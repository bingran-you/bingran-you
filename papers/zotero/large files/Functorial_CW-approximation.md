# PDF Document: Hirschhorn - 2015 - Functorial CW-approximation.pdf

**File Path:** Hirschhorn - 2015 - Functorial CW-approximation.pdf

**Processed Date:** 2026-02-10T18:17:34.719Z

**File Size:** 147.13 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2743

**Title:** Functorial CW-approximation

**Collection:** Large Files

---

## Extracted Text Content

arXiv:1508.01944v1 [math.AT] 8 Aug 2015
FUNCTORIAL CW-APPROXIMATION
PHILIP S. HIRSCHHORN
Abstract. The usual construction of a CW-approximation is functorial up to homotopy, but it is not functorial. In this note, we construct a functorial CW-approximation. Our construction takes inclusions of subspaces into inclusions of subcomplexes, and commutes with intersections of subspaces of a fixed space.
Contents
1. Introduction 1 2. The main theorems 2 2.1. The first factorization 2 2.2. The second factorization 2 2.3. Relative CW-approximation 3 3. The proof Theorem 2.1 4 3.1. The construction 4 3.2. The homotopy groups of the spaces in the construction 5 3.3. The functoriality of the construction 6 4. The proof of Theorem 2.2 7 4.1. The construction 7 4.2. The homotopy groups of the spaces in the construction 7 4.3. The functoriality of the construction 8 5. Proof of Proposition 2.3 8 6. Proof of Theore-
m 2.4 9 7. The proof of Theorem 2.5 9 References 10
1. Introduction
A CW-approximation to a topological space B is a CW-complex B ̃ together with a weak equivalence B ̃ → B. The usual construction of a CW-approximation is functorial up to homotopy, but it is not functorial. In this note, we construct a functorial CW-approximation. Our construction takes inclusions of subspaces into inclusions of subcomplexes (see Theorem 2.4), and commutes with intersections of subspaces of a fixed space (see Theorem 2.5). We construct a CW-approximation to a space using a constru-
ction that functorially factors a map A → B as A → B ̃ → B where A → B ̃ is a relative CW-complex
Date: August 8, 2015.
1

2 PHILIP S. HIRSCHHORN
and B ̃ → B is a weak equivalence; applying this to the map ∅ → B produces a CW-approximation B ̃ → B to B. We actually define two such factorizations. The first is for arbitrary maps A → B (see Theorem 2.1). If A is a nonempty CW-complex, though, then the relative CW-complex A → B ̃ that it produces will not, in general, be the inclusion of a subcomplex. Thus, we construct a different functorial factorization in Theorem 2.2 for maps A → B in which A is a CW-complex; in the factorization A → B ̃ →-
 B that it produces, the relative CW-complex A → B ̃ is the inclusion of a subcomplex. We show in Theorem 2.4 that if the factorization of Theorem 2.1 is used to construct a functorial CW-approximation (by factoring the maps with domain the empty space), then this construction turns an inclusion of a subspace into an inclusion of a subcomplex, i.e., if B is a subspace of B′, then B ̃ is a subcomplex of B ̃′. Thus, it defines a functorial CW-approximation for pairs, triads, etc. We also show that t-
his operation commutes with taking intersections of subspaces of a fixed space (see Theorem 2.5).
2. The main theorems
2.1. The first factorization.
Theorem 2.1. Every map f : A → B has a functorial factorization A −j→ B ̃ −p→ B such that j is a relative CW-complex and p is a weak equivalence.
To obtain a CW-approximation B ̃ → B to a space B, you apply the factorization of Theorem 2.1 to the map ∅ → B. We show in Theorem 2.4 that if B is a subspace of B′ then the map B ̃ → B ̃′ is the inclusion of a subcomplex, and we show in Theorem 2.5 that this operation commutes with taking intersections of subspaces of a fixed space. The outline of the proof of Theorem 2.1 follows that of the standard construction of a CW-approximation, but instead of choosing maps of spheres that represent elemen-
ts of homotopy groups to be killed by attaching disks, we attach disks using all possible such maps. Thus, we attach many more cells than are required, but the result is that our construction is functorial. This construction is a cross between the usual construction of a functorial-onlyup-to-homotopy CW-approximation to a space and the small object argument used to factorize maps in model categories ([1, Prop. 10.5.16]). The standard small object argument would produce a factorization into a relat-
ive cell complex (in which the attaching maps of cells do not, in general, factor through a subspace of lower dimensional cells) followed by a map that is both a weak equivalence and a fibration; our construction produces a relative CW-complex followed by a weak equivalence. The proof of Theorem 2.1 is in Section 3.
2.2. The second factorization. If the space A is nonempty, then even if it is a CW-complex, the space B ̃ produced by Theorem 2.1 will not generally be a CWcomplex, because there is no restriction on how the cells attached to construct B ̃ out of A meet the cells of A. Thus, we will also prove the following theorem.
Theorem 2.2. Every map f : A → B such that A is a CW-complex has a functorial
factorization A −j→ B ̃ −p→ B such that j is the inclusion of a subcomplex of a CWcomplex and p is a weak equivalence, where “functorial” means that it is natural

FUNCTORIAL CW-APPROXIMATION 3
with respect to diagrams
A f // A′
B g // B′
in which f : A → A′ is a cellular map of CW-complexes.
Theorem 2.2 can also be used to obtain a functorial CW-approximation to a space B by applying it to the map ∅ → B, but we show in Proposition 2.3 that this produces the same result as using Theorem 2.1. The proof of Theorem 2.2 is in Section 4.
Proposition 2.3. If B ̃ → B is the CW-approximation to B obtained by applying the factorization of Theorem 2.1 to ∅ → B and ̂B → B is the CW-approximation to B obtained by applying the factorization of Theorem 2.2 to ∅ → B, then there is a natural isomorphism ̂B → B ̃ that makes the diagram
̂B
❖❖❖❖❖❖''
B
B ̃
♦♦♦♦♦♦77
commute.
The proof of Proposition 2.3 is in Section 5.
2.3. Relative CW-approximation. The constructions of Theorem 2.1 and Theorem 2.2 can be used to create relative CW-approximations.
Theorem 2.4. If (B′, B) is a pair of spaces (i.e., if B is a subspace of the space B
′) then in the commutative square
B ̃ f ̃ // B ̃′
Bf
// B′
obtained by applying the factorization of Theorem 2.1 to the maps ∅ → B and
∅ → B′, the map f ̃: B ̃ → B ̃′ is an inclusion of a subcomplex.
Thus, Theorem 2.1 creates relative CW-approximations for pairs, triads, etc. Alternatively, given a pair (B′, B), one could apply Theorem 2.2 to the map ∅ → B to obtain B ̃ → B and then apply Theorem 2.2 to the composition B ̃ → B → B′ to obtain B ̃′ → B′, and B ̃ would be a subcomplex of B ̃′. The proof of Theorem 2.4 is in Section 6.
Theorem 2.5 (CW-approximation commutes with intersections). If X is a space, let CW(X) denote the CW-complex obtained by applying the factorization of Theorem 2.1 to the map ∅ → X. If X is a space, S is a set, and for every element s of S we have a subspace Xs of X, then each CW(Xs) is a subcomplex of CW(X),

4 PHILIP S. HIRSCHHORN
and ⋂
s∈S
CW(Xs) = CW
(⋂
s∈S
Xs
) .
The proof of Theorem 2.5 is in Section 7.
3. The proof Theorem 2.1
We construct the factorization in Section 3.1, show that the map B ̃ → B is a weak equivalence in Section 3.2, and show that the construction is functorial in Section 3.3.
3.1. The construction. We will construct a sequence of spaces
A = A−1 // A0 //
zz✉✉✉✉✉✉✉✉✉✉
A1 //
uu❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦❦ · · ·
B
that map to B and then let B ̃ = colimn An. Each An for n ≥ 0 will be constructed from An−1 by attaching n-cells in such a way that the map An → B is n-connected (see Notation 3.1). Since spheres and disks are compact, any map from a sphere or disk to colimn An will factor through some An, and so we will have πiB ̃ =
colimn πiAn for all i ≥ 0, and the map B ̃ → B will be a weak equivalence. We begin by letting A−1 = A, and then defining
A0 = A−1 ∐
(∐
D0 →B
D0)
.
That is, we let A0 be the coproduct of A−1 with a single point for each map of a point to B; this maps to B by taking the D0 indexed by a map D0 → B to B by that indexing map. To construct A1 we construct the pushout ∐
Map(S 0 ,A0 )×Map(S 0 ,B) Map(D1 ,B )
S0 // A0
A1
∐
Map(S 0 ,A0 )×Map(S 0 ,B) Map(D1 ,B )
D1
99
// B
where Map(S0, A0) ×Map(S0,B) Map(D1, B) is the set of commutative squares
S0 // A0
D1 // B .
That is, for every such square we attach a 1-cell to A0, and we use the bottom horizontal map of that square to map that attached 1-cell to B.

FUNCTORIAL CW-APPROXIMATION 5
If n > 1 and we have constructed An−1 along with it’s map to B, we construct An by constructing the pushout
∐
Map(S n−1 ,An−1 )×Map(S n−1 ,B) Map(Dn ,B )
Sn−1 // An−1
An
∐
Map(S n−1 ,An−1 )×Map(S n−1 ,B) Map(Dn ,B )
Dn
77
// B
where Map(Sn−1, An−1)×Map(Sn−1,B)Map(Dn, B) is the set of commutative squares
Sn−1 // An−1
Dn // B .
That is, for every such square we attach an n-cell to An−1, and we use the bottom horizontal map of that square to map that attached n-cell to B. To complete the construction we let B ̃ = colimn An, and the map A → B ̃ is
clearly a relative CW-complex. We show that the map B ̃ → B is a weak equivalence in Section 3.2, and we show that the construction is natural in Section 3.3.
3.2. The homotopy groups of the spaces in the construction.
Notation 3.1. If f : X → Y is a map and n ≥ 0, then we will say that f is nconnected if
• the set of path components of X maps onto the set of path components of Y , and • for every choice of basepoint in X the induced map of homotopy groups (for i > 0) or sets (for i = 0) πi(X) → πi(Y ) is an isomorphism for i < n and an epimorphism for i = n.
Lemma 3.2. For each n ≥ 0 the map An → B is n-connected.
Proof. We will show inductively on n that the map An → B is n-connected. The space A0 was constructed to map onto B, and so the map A0 → B is 0-connected The space A1 was constructed by attaching 1-cells to A0 that connected any pair of points in A0 whose images were in the same path component of B; thus, the set of path components of A1 maps isomorphically to the set of path components of B. In addition, a loop was wedged at every point of A0 for every loop in B at the image of that point; thus, -
for every basepoint of A1, the fundamental group of A1 maps epimorphically onto the fundamental group of B. Thus, the map A1 → B is 1-connected. Suppose now that n > 1 and that the map An−1 → B is (n−1)-connected. Since An is constructed from An−1 by attaching n-cells, for every choice of basepoint we have πi(An−1) ≈ πi(An) for i < n − 1 and πn−1(An) is a quotient of πn−1(An−1). For every map α : Sn−1 → An−1 such that the composition with An−1 → B is
nullhomotopic, we’ve attached an n-cell, and so the composition Sn−1 −α→ An−1 →

6 PHILIP S. HIRSCHHORN
An is nullhomotopic. Thus, πn−1(An) → πn−1(B) is an isomorphism for every choice of basepoint. In addition, for every map β : Dn/Sn−1 → B for which the image of the collapsed Sn−1 is in the image of An−1 → B, we’ve wedged on a copy of Dn/Sn−1 to An−1 and mapped it to B using β, and so πn(An) → πn(B) is surjective for every choice of basepoint. Thus, the map An → B is n-connected. This completes the induction.
We now let B ̃ = colimn An. Since spheres and disks are compact, every map from a sphere or disk to colimn An factors through some An, and so we have
colimn πiAn ≈ πiB ̃ for i ≥ 0. Since the map πiAn → πiB is an isomorphism
for n > i, the map πiB ̃ → πiB is an isomorphism for i ≥ 0, and so the map B ̃ → B is a weak equivalence.
3.3. The functoriality of the construction. We will now show that the construction of Section 3.1 is functorial, i.e., that if we have a commutative square
A f // A′
B g // B′
and we apply the construction of Section 3.1 to A → B to obtain A → B ̃ → B and to A′ → B′ to obtain A′ → B ̃′ → B′, then there is a natural commutative diagram
A f // A′
B ̃ g ̃ // B ̃′
B g // B′ .
We define g ̃ by defining fn : An → A′
n inductively on the constructions of B ̃ and
B ̃′.
To begin, we have
A0 = A−1 ∐
(∐
D0 →B
D0)
and A′
0 = A′
−1 ∐
(∐
D0 →B ′
D0)
and we define f0 : A0 → A′
0 by sending the copy of D0 indexed by α : D0 → B to
the copy of D0 indexed by g ◦ α : D0 → B′. For the inductive step, suppose that n > 0 and that we’ve defined fn−1 : An−1 → A
′
n−1. The space An is constructed by attaching an n-cell to An−1 for each commutative square
Sn−1 α // An−1
Dn
β
// B

FUNCTORIAL CW-APPROXIMATION 7
We take the cell attached to An−1 by the map α to the cell attached to A′
n−1 by
the map fn−1 ◦ α indexed by the outer commutative rectangle
Sn−1 α // An−1
fn−1 // A′
n−1
Dn
β
// B g // B′
Doing that for each n-cell attached to An−1 defines fn : An → A′
n.
That completes the induction, and we let g ̃: B ̃ → B ̃′ be colimn fn.
4. The proof of Theorem 2.2
We construct the factorization in Section 4.1, show that the map B ̃ → B is a weak equivalence in Section 4.2, and show that the construction is functorial in Section 4.3.
4.1. The construction. We use a modification of the construction of Section 3.1. We construct A0 exactly as in Section 3.1, but when n > 0 and we are constructing An out of An−1, we attach only the n-cells indexed by commutative squares
Sn−1 α // An−1
Dn
β
// B
for which α : Sn−1 → An−1 is a cellular map.
4.2. The homotopy groups of the spaces in the construction.
Lemma 4.1. For each n ≥ 0 the map An → B is n-connected.
Proof. We will show inductively on n that the map An → B is n-connected. The space A0 was constructed to map onto B, and so the map A0 → B is 0-connected. The space A1 was constructed by attaching 1-cells to A0 that connected any pair of vertices in A0 whose images were in the same path component of B; since every path component of A0 contains at least one vertex, the set of path components of A1 maps isomorphically to the set of path components of B. In addition, a loop was wedged at every vertex-
 of A0 for every loop in B at the image of that vertex; since every path component of B contains the image of a vertex of A0, for every basepoint of A1 the fundamental group of A1 maps epimorphically onto the fundamental group of B. Thus, the map A1 → B is 1-connected. Suppose now that n > 1 and that the map An−1 → B is (n−1)-connected. Since An is constructed from An−1 by attaching n-cells, for every choice of basepoint we have πi(An−1) ≈ πi(An) for i < n − 1 and πn−1(An) is a quotient of πn−1(An-
−1). For every cellular map α : Sn−1 → An−1 such that the composition with An−1 → B
is nullhomotopic, we’ve attached an n-cell, and so the composition Sn−1 −α→ An−1 → An is nullhomotopic. Since every map Sn−1 → An−1 is homotopic to a cellular map, πn−1(An) → πn−1(B) is an isomorphism for every choice of basepoint. In addition, for every map β : Dn/Sn−1 → B for which the image of the collapsed Sn−1 is in the

8 PHILIP S. HIRSCHHORN
image of a vertex of An−1, we’ve wedged on a copy of Dn/Sn−1 to that vertex of An−1 and mapped it to B using β; since every path component of B is in the image of a vertex of An−1, πn(An) → πn(B) is surjective for every choice of basepoint. Thus, the map An → B is n-connected. This completes the induction.
We now let B ̃ = colimn An. Since spheres and disks are compact, every map from a sphere or disk to colimn An factors through some An, and so we have
colimn πiAn ≈ πiB ̃ for i ≥ 0. Since the map πiAn → πiB is an isomorphism
for n > i, the map πiB ̃ → πiB is an isomorphism for i ≥ 0, and so the map B ̃ → B is a weak equivalence.
4.3. The functoriality of the construction. We will now show that the construction of Section 4.1 is functorial, i.e., that if we have a commutative square
A f // A′
B g // B′
in which f : A → A′ is a cellular map and we apply the construction of Section 4.1 to A → B to obtain A → B ̃ → B and to A′ → B′ to obtain A′ → B ̃′ → B′, then there is a natural commutative diagram
A f // A′
B ̃ g ̃ // B ̃′
B g // B′ .
We define g ̃ by defining fn : An → A′
n inductively on the constructions of B ̃ and
B ̃′. Since each fn : An → A′
n is a cellular map, the composition of a cellular map
α : Sn−1 → A′
n with fn−1 : An−1 → A′
n−1 is also cellular, and so we have an induced map fn : An → A′
n. Thus, the induction goes through, and we let g ̃: B ̃ → B ̃′ be colimn fn.
5. Proof of Proposition 2.3
Since we are factorizing the map ∅ → B, in the sequence A−1 → A0 → A1 → · · ·
whose colimit is B ̃ (see Section 3.1) the space A−1 is empty. Thus, for each n ≥ 0 the space An is an n-dimensional CW-complex, and so every map Sn → An is a cellular map. Thus, the sequence constructed in Section 4.1 is exactly the same as the sequence constructed in Section 3.1, and so their colimits are the same.

FUNCTORIAL CW-APPROXIMATION 9
6. Proof of Theorem 2.4
We will show by induction that in the diagram
∅ = A−1 // A0 // A1 // A2 // · · ·
∅ = A′
−1 // A′
0 // A′
1 // A′
2 // · · ·
used to construct B ̃ → B ̃′, each map An → A′
n is an inclusion of a subcomplex. The induction is begun because A0 has one point for every point of B and A′
0 has one point for every point of B′. Now assume that n > 0 and that An−1 → A′
n−1 is an inclusion of a subcomplex. Since the map B → B′ is also an inclusion, the set of n-cells to be attached to An−1 is a subset of the set of n-cells to be attached to A′
n−1, and so An → A′
n will also be an inclusion of a subcomplex.
7. The proof of Theorem 2.5
Let XS = ∩s∈SXs.
• Let ∅ = A−1 → A0 → A1 → · · · be the sequence created in the proof of Theorem 2.1 whose colimit is CW(X), • let ∅ = AS
−1 → A0S → A1S → · · · be the sequence created in the proof of Theorem 2.1 whose colimit is CW(XS ), and • for each s ∈ S let ∅ = As
−1 → As0 → As1 → · · · be the sequence created in the proof of Theorem 2.1 whose colimit is CW(Xs).
The proof of Theorem 2.4 shows that ASn and Asn are subcomplexes of An for all
s ∈ S and n ≥ 0; we will show by induction that ASn = ∩s∈SAsn for all n ≥ 0.
Since A0S is discrete with one point for each point of XS and for all s ∈ S the
space As0 is discrete with one point for each point of Xs, we have A0S = ∩s∈S As0.
Assume now that n > 0 and ASn−1 = ∩s∈SAsn−1. The space ASn is constructed
by attaching an n-cell to ASn−1 for each commutative square
Sn−1 // AS
n−1 = ∩s∈S As
n−1
Dn // XS = ∩s∈S Xs
Since the maps ASn−1 → Asn−1 and XS → Xs are inclusions for all s ∈ S, each such
n-cell corresponds to a unique n-cell in ∩s∈SAsn, i.e., the map ASn → ∩s∈SAsn is an injection. To see that the map ASn → ∩s∈SAsn is a surjection, let
Sn−1 αs // As
n−1
Dn
βs
// Xs


for every s ∈ S
index n-cells of the Asn that together define an n-cell of ∩s∈SAsn. Since the maps
Asn−1 → An−1 and Xs → X are all inclusions, the compositions Sn−1 −αs → Asn−1 →

10 PHILIP S. HIRSCHHORN
An−1 are all equal and the compositions Dn −βs → Xs → X are all equal, and the diagram
Sn−1 αs // As
n−1 // An−1
Dn
βs
// Xs // X
(for any s ∈ S; the upper and lower compositions are all the same) indexes an n-cell that was attached to An−1 when creating An. Since the upper composition factors uniquely through ∩s∈S Asn−1 and the lower composition factors uniquely through
XS = ∩s∈S Xs, those factorizations index an n-cell that was attached to ASn−1 when
creating ASn, and that n-cell maps to our n-cell of ∩s∈SAsn.
References
[1] Philip S. Hirschhorn, Model categories and their localizations, Mathematical Surveys and Monographs, vol. 99, American Mathematical Society, Providence, RI, 2003.
Department of Mathematics, Wellesley College, Wellesley, Massachusetts 02481 E-mail address: psh@math.mit.edu URL: http://www-math.mit.edu/~psh

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:34.719Z
- **Text Length:** 19088 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
