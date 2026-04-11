# PDF Document: Ford - 2015 - Geometric Shifts and Positroid Varieties.pdf

**File Path:** Ford - 2015 - Geometric Shifts and Positroid Varieties.pdf

**Processed Date:** 2026-02-10T18:14:11.394Z

**File Size:** 417.52 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2747

**Title:** Geometric Shifts and Positroid Varieties

**Collection:** Large Files

---

## Extracted Text Content

arXiv:1508.01935v1 [math.AG] 8 Aug 2015
GEOMETRIC SHIFTS AND POSITROID
VARIETIES
by
Nicolas Ford
A dissertation submitted in partial fulfillment of the requirements for the degree of Doctor of Philosophy (Mathematics) in The University of Michigan 2014
Doctoral Committee:
Associate Professor David E. Speyer, Chair Associate Professor Henriette Elvang Professor Sergey Fomin Professor Thomas Lam Professor Karen E. Smith

TABLE OF CONTENTS
LIST OF FIGURES . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . iii
CHAPTER
I. Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
II. Matroids and Matroid Varieties . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2.1 Matroids . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 2.2 Matroid Varieties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10 2.3 Operations on Matroids and Matroid Varieties . . . . . . . . . . . . . . . . . 12
III. Interval Rank Varieties and the Geometric Shift . . . . . . . . . . . . . . . . 16
IV. Positroid Varieties . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
V. Complications with Shifting Positroids . . . . . . . . . . . . . . . . . . . . . . 27
5.1 The Square Positroid . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27 5.2 Partial Success in Rank 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30 5.3 The Tripod Positroid and Failure in Rank 4 . . . . . . . . . . . . . . . . . . 41
VI. Expected Codimension of Matroid Varieties . . . . . . . . . . . . . . . . . . . 43
6.1 Properties of Expected Codimension . . . . . . . . . . . . . . . . . . . . . . . 46 6.2 Positroids . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53 6.3 Valuativity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56
VII. Code . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
BIBLIOGRAPHY . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63
ii

LIST OF FIGURES
Figure
1 A projective model of the “V” matroid. . . . . . . . . . . . . . . . . . . . . . . . . . 6
2 A projective model of the “square positroid.” . . . . . . . . . . . . . . . . . . . . . . 28
3 An example of a “model polygon” of a positroid . . . . . . . . . . . . . . . . . . . . 31
4 A projective model of the tripod positroid. . . . . . . . . . . . . . . . . . . . . . . . 41
5 A projective model of the “Pappus matroid.” . . . . . . . . . . . . . . . . . . . . . . 52
iii

CHAPTER I
Introduction
Consider a point x on the Grassmannian G(k, n) of k-planes in Cn. The matroid
of x is defined to be the set of Plücker coordinates that are nonzero at x, and a
matroid variety is the closure of the set of points on G(k, n) with a particular
matroid. Many enumerative problems on the Grassmannian can be described in
terms of matroid varieties; the Schubert varieties that form the usual basis for the
cohomology ring of G(k, n) are an especially well-behaved special case.
So if there were a good way to take a matroid and produce the cohomology class
of the corresponding matroid variety, we would have a systematic way of solving any
enumerative problem on the Grassmannian that can be described purely in terms
of the vanishing or nonvanishing of Plücker coordinates. Unfortunately, in a sense
that will be made more precise later, matroid varieties are very poorly behaved, and
there is essentially no way to solve the problem just described in a reasonable and
efficient manner: there is a strictly easier problem that is known to be NP-hard.
One might expect to have more success with a slightly more modest goal: find
a well-behaved class of matroids for which the class of the corresponding matroid
variety can be described nicely. There is a class of matroids called positroids which
are a natural candidate: the corresponding matroid varieties, called positroid va
1

2
rieties are geometrically much better behaved, and indeed some work toward the
goal of describing their cohomology classes has already been done. On the one hand,
in [10] there is a description of the cohomology class of a positroid variety in terms
of a symmetric function called an “affine Stanley symmetric function.” When the
cohomology ring of the Grassmannian is expressed as a quotient of the ring of sym
metric functions, the affine Stanley function maps to the class of the corresponding
positroid variety.
It would be nice, though, if there were a way to do the computation directly
in the cohomology ring: the symmetric function description involves a mysterious
change of basis that introduces several minus signs that all disappear after taking the
quotient. What would be preferable would be a more combinatorial description that
computes, from the positroid, the coefficient of each Schubert class in its cohomology
class. Indeed, for an even more restricted class of matroid varieties called interval
rank varieties, there is a description that does exactly that. Given an interval rank
variety, there is a sequence of degenerations in the Grassmannian that take it to a
union of Schubert varieties, and there is a combinatorial procedure for keeping track
of what happens along the way.
This thesis is in two parts. The first is an account of an attempt to extend the
procedure that worked for interval rank varieties to positroids. We will see that, with
a lot of arm-twisting, it can be made to work when k ≤ 3 (Theorem V.2), but when
k ≥ 4 it fails (Counterexample V.1). In the second part, we have more success at
an even more modest goal: it describes a new way to estimate just the codimension
of a matroid variety purely in terms of the combinatorics of the matroid itself. The
resulting number is not always the actual codimension, but we prove that in the case
of positroids, it is. This work, which appears in Section 6, also appears in a paper

3
[6], which has been submitted to the Journal of Algebraic Combinatorics.
We write [n] for the set {1, 2, . . . , n}, and for any set S we write P(S) for the power
set of S and (S
k
) for the set of all k-element subsets of S. G(k, n) will always stand
for the Grassmannian of k-planes in Cn. For S ∈ ([n]
k
), we write pS for corresponding
Plücker coordinate on G(k, n); that is, thinking of elements of G(k, n) as being
represented by k × n matrices, pS is the determinant of the minor whose columns
correspond to the elements of S. All varieties are over C.
Fix a complete flag 0 = V0 ⊂ V1 ⊂ · · · ⊂ Vn = Cn. One may define a Schubert
variety from a partition λ consisting of parts n − k ≥ λ1 ≥ · · · ≥ λk ≥ 0. We define
Ωλ to be the set of all W ∈ G(k, n) such that, for each i,
dim(W ∩ Vn+k+i−λi) ≥ i.
The corresponding cohomology classes are called Schubert classes, written σλ =
[Ωλ]. The Schubert classes corresponding to partitions that fit in a k × (n − k) box
— that is, partitions with at most k parts each of which is ≤ n − k — form a basis
for the cohomology ring of the Grassmannian. When a basis is chosen for Cn, we
often take the flag to be the one corresponding to that basis. In this case, taking the
Schubert variety corresponding to the flag given by taking the basis in reverse order
produces what we’ll call an opposite Schubert variety.
We write Λk for the ring of symmetric polynomials in k variables. The well-known
Schur polynomials corresponding to partitions with at most k parts give a basis for
Λk. There is a surjective map Λk → H∗(G(k, n)) which takes each Schur polynomial
sλ to σλ; its kernel is spanned by the sλ corresponding to partitions λ with a part
larger than n − k. Proofs of every claim in this and the preceding paragraph can be
found in [11, Ch. 3].
We will at some points have use for the GLk-equivariant cohomology ring H∗GLk(Matk×n),

4
where Matk×n is the variety consisting of all k × n matrices. This ring is isomorphic
to Λk itself. Restricting to the subvariety Mat◦k×n of full-rank k × n matrices causes
the action of GLk to be free, making the corresponding equivariant cohomology ring
isomorphic to the cohomology ring of Mat◦
k×n/GLk ∼= G(k, n). The restriction map
Λk = H∗GLk (Matk×n) → H∗GLk (Mat◦k×n) =∼ H∗(G(k, n))
is the same as the map described in the previous paragraph.
To see this, we first note that there is a GLk-equivariant contraction of Matk×n,
which allows us to just consider H∗GLk(pt). This, by Section 1 of [1], is the copy
of Λk sitting inside Z[x1, . . . , xk] = H∗
(C∗)k (pt), so it’s enough to compute the (C∗)k
equivariant cohomology class of the matrix Schubert varieties. This is done in Section
3 of [1].

CHAPTER II
Matroids and Matroid Varieties
2.1 Matroids
We are going to be investigating subvarieties of Grassmannians defined by combi
natorial objects called matroids. There are many equivalent definitions of matroids,
all useful in different contexts, and we are only going to mention two of them here.
There is a lot of literature on the combinatorial theory of matroids. A good place to
start might be [16].
From our perspective, the purpose of a matroid is, given a collection of vectors in
a vector space, to combinatorially capture the information about the linear relations
among the vectors. We will consider two equivalent ways to do this. Details of these
and other axiomatizations of matroids can be found in [16, pp. 298–312].
Definition II.1. A matroid may be specified in terms of its bases. According to
this definition, a matroid M is a finite set E together with a collection of subsets
B ⊆ P(E). (An element of B is called a basis.) We require:
• B is not empty.
• No element of B contains another.
• For B, B′ ∈ B and x ∈ B, there is some y ∈ B′ so that B − {x} ∪ {y} ∈ B.
5

6
15
2
3
4
Figure 1: A projective model of the “V” matroid.
Note that this is enough to force all bases to have the same number of elements.
Definition II.2. Suppose we have a finite-dimensional vector space V , a finite set
E, and a function e : E → V whose image spans V . We can put a matroid structure
on E by taking B to be the collection of all subsets of E which map injectively to a
basis of V . (The reason for this funny definition is that we’d like to be able to take
the same element of V more than once; otherwise E could just be a subset of V .
We will hardly ever be very careful about the difference between an element x ∈ E
and its image e(x) ∈ V .) It’s an easy exercise in linear algebra to show that this
definition satisfies the axioms above. Matroids which arise in this way are called
realizable.
It will sometimes be convenient to be able to draw a picture of a realizable matroid
by drawing the images of the elements of E in the projective space P(V ) and the
linear subspaces they lie on. We will call these projective models. For example,
Figure 1 shows a projective model of the rank-3 matroid on {1, 2, 3, 4, 5} in which
{1, 2, 3} and {3, 4, 5} are the only three-element sets that are not bases.
The following terminology will be useful to have as we talk about matroids, so
we present it here. Most (but not all) of the terminology mirrors the corresponding

7
terminology from linear algebra in the realizable case, which should make those terms
easier to remember. Throughout this discussion, unless otherwise specified, M is a
matroid on the set E.
Definitions II.3.
1. A set which is contained in a basis is called independent. Any other set is
dependent.
2. For F ⊆ E, the rank of F , written rk F , is the size of the largest independent
set contained in F . Note that rk E is the same as the size of any basis. We will
sometimes write rk M = rk E.
3. For a set F and an element x ∈ E, we say that x is in the closure of F ,
written x ∈ F , if rk(F ∪ {x}) = rk F . Note that, as the name suggests, closure
is idempotent and inclusion-preserving. Sets which are their own closures are
called flats.
In the realizable case, the flats are the intersections of subspaces of V with E.
4. A set F which contains a basis is called a spanning set. Equivalently, F spans
if rk F = rk E, or if F = E.
5. If rk({x}) = 0, we say x is a loop. Equivalently, x is not in any basis, or x ∈ ∅,
or x is in every flat.
In the realizable case, loops are elements of E which map to the zero vector in
V.
6. If rk(E − {x}) = rk E − 1, we say x is a coloop. Equivalently, x is in every
basis.

8
7. If rk({x, y}) = 1, we say that x and y are parallel. Equivalently, any flat which
contains one of x or y also contains the other.
8. Given a set F ⊆ E, we can put a matroid structure on F by saying B ⊆ F is a
basis of F if it is maximal among independent sets contained in F . Note that
this preserves the independence and dependence of subsets of F , and therefore
also the ranks of subsets of F . This operation is called restricting to F or
deleting E − F , and we call the resulting matroid M|F or M − (E − F ).
In the realizable case, this corresponds to restricting the function e to F and
replacing V with the span of the image of F .
9. There is a second way to put a matroid structure on E − F called the contrac
tion, and written M/F . The rank function on the contraction is rkM/F (A) =
rk(A ∪ F ) − rk(F ).
It will also be convenient to note that matroids can be defined just by listing the
axioms that have to be satisfied by the rank function defined above:
Definition II.4. A matroid may be specified in terms of the ranks of all its subsets.
According to this definition, a matroid is a finite set E together with a function
rk : P(E) → N satisfying:
• rk ∅ = 0.
• rk(F ∪ {x}) is either rk F or rk F + 1.
• If rk F = rk(F ∪ {x}) = rk(F ∪ {y}), then rk(F ∪ {x, y}) = rk F .
Note that this is enough to force the useful inequality rk A + rk B ≥ rk(A ∪ B) +
rk(A ∩ B).

9
Given the same data we had to define a realizable matroid before — a set E with
a function e to a vector space V — we can get a rank function on E by setting
rk(F ) = dim(span(e(F ))).
We have already mentioned how to turn a collection of bases into a rank function.
To go the other way, we can say B is a basis if it is minimal among sets of maximal
rank. One can check that these two correspondences make the two definitions given
here equivalent. We will not distinguish between them as we go forward.
One more definition will be useful in later parts of this paper:
Definition II.5. A pseudo-rank function on a set E is a function r : P(E) → N
satisfying the first two criteria in Definition II.4.
Take some collection S of subsets of E and some function r : S → N. The
pseudo-rank function generated by r is the pointwise-largest pseudo-rank func
tion on P(E) which agrees with r on the sets in S , if such a pseudo-rank function
exists. (Note that, since the pointwise max of two pseudo-rank functions is still a
pseudo-rank function, this is well-defined if it exists.) If this pseudo-rank function
happens to be the rank function of a matroid M, we will sometimes say that M is
“generated by the rank conditions given by r” or that M is the matroid “defined by
imposing the rank conditions given by r.”
For example, the matroid on [4] defined by imposing the conditions that {1, 2} has
rank 1 and {1, 2, 3, 4} has rank 3 will give all one-element sets rank 1, all two-element
sets other than {1, 2} rank 2, and both three-element sets other than {1, 2, 3} and
{1, 2, 4} rank 3. Its bases are {1, 3, 4} and {2, 3, 4}.

10
2.2 Matroid Varieties
As mentioned above, the main objects of study in this paper are certain subvari
eties of Grassmannians which can be described in terms of matroids.
Construction II.6. Consider the Grassmannian G(k, n), which we’ll think of as the
set of k ×n matrices of full rank modulo the obvious action of GLk. When one builds
the Grassmannian in this way, one ordinarily considers the k rows of the matrix as
elements of Cn, and the action of GLk corresponds to automorphisms of the span of
those elements, so that we are left with a variety that parametrizes the k-planes in
Cn.
We will think about our matrices the other way. Given a k ×n matrix of full rank,
consider the function e : [n] → Ck which takes i to the i’th column of our matrix.
We can then use Definition II.2 to put a matroid structure on [n]. Since the action
of GLk clearly doesn’t change which matroid we get, we have assigned a matroid
in a consistent way to every point of the Grassmannian. The Plücker coordinate pS
corresponding to some S ∈ ([n]
k
) is given by the determinant of the submatrix defined
by taking the columns in S. So pS vanishes precisely when these k columns fail to
span Ck, that is, precisely when S fails to be a basis of our matroid.
Given a matroid M of rank k on [n], the open matroid variety X◦(M) is the
subset of G(k, n) consisting of all points whose matroid is M. This is a locally closed
subvariety of G(k, n): it is defined by taking all Plücker coordinates corresponding
to bases of M to be nonzero and all the other Plücker coordinates to be zero. The
closure of X◦(M) is called the matroid variety X(M). We can define a matroid
variety inside Matk×n in the same way. We write V ◦(M) for the open matroid variety
in Matk×n and V (M) for its closure. The open matroid variety in Matk×n doesn’t

11
intersect the subvariety of matrices of less than full rank, but its closure will.
The reader who is familiar with the definition of Schubert varieties may be tempted
to ignore part of the definition above and take X(M) to be the subvariety of G(k, n)
defined by setting all the Plücker coordinates corresponding to nonbases of M to
zero. Sadly, this is not the same as the definition given above.
Counterexample II.7. Consider the rank-3 matroid A on [7] generated by the
conditions that {1, 2, 7}, {3, 4, 7}, and {5, 6, 7} have rank 2. The variety X(A) is not
cut out by the ideal (p127, p347, p567). That ideal cuts out two components: X(A) and
the variety of the matroid in which 7 is a loop. The ideal of X(A) is actually
(p127, p347, p567, p124p356 − p123p456).
Matroid varieties can be used to encode any number of enumerative geometry
problems. For example, Schubert varieties are matroid varieties, as are intersections
of Schubert varieties and opposite Schubert varieties. Of course, there are many more
matroid varieties than just these, so coming up with a way to find the cohomology
class of a matroid variety would enable one to solve a much larger set of combinatorial
problems about linear arrangements of points. Since the multiplication rule for
Schubert classes is well-known, it would be enough to come up with an algorithm
that takes in a matroid and outputs its class as a linear combination of Schubert
classes.
In general, matroid varieties are under no obligation to be geometrically well
behaved. They don’t have to be irreducible, equidimensional, normal, or even gener
ically reduced. It is too much to hope that we might find an algorithm that can
efficiently produce the class of an arbitrary matroid variety: even the problem of
determining whether a given matroid variety is empty or not is NP-hard [13]. To

12
make progress on this question, it will be necessary to be more modest in our goals
and only look for the classes of certain well-behaved matroid varieties. It is to that
task that the rest of this paper is dedicated.
2.3 Operations on Matroids and Matroid Varieties
We first establish some results which describe the effects of some simple operations
on the cohomology class of a matroid. We will use these later in the paper to help
us describe the classes of a few matroid varieties.
Definitions II.8.
1. Let M be a matroid on E and N be a matroid on F . The direct sum of M
and N is the matroid M ⊕ N on E ⊔ F defined by
rkM⊕N (S) = rkM (S ∩ E) + rkN (S ∩ F ).
2. If M is a matroid, the loop extension of M is the matroid M ⊕ x0 formed by
taking the direct sum of M with the unique matroid of rank 0 on the one-element
set {x}, so that the new element x is a loop.
3. The coloop extension of M is the matroid M ⊕ x1 formed by taking the direct
sum of M with the unique matroid of rank 1 on {x}, so that x is a coloop.
It’s straightforward to compute the cohomology class of X(M ⊕ N) given the
classes of X(M) and X(N).
Proposition II.9. Given a matroid M of rank k on [m] and N of rank l on [n],
we can think of them both as matroids on [m + n] = [m] ⊔ [n] in the natural way:
M puts conditions on the points in {1, . . . , m} and N puts conditions on the points
in {m + 1, . . . , m + n}. Interpreted in this way, [X(M ⊕ N)] = [X(M)][X(N)] in
G(k + l, m + n).

13
Proof. This result is easier to see in H∗GLk+l(Mat(k+l)×(m+n)), which is enough to prove
the statement for the Grassmannian as well. In fact, X(M ⊕ N) is the transverse
intersection of X(M ) and X(N ). The tangent space of Mat(k+l)×(m+n) at any point
is naturally Mat(k+l)×(m+n) itself. At any point of X(M ) ∩ X(N ), the tangent space
of X(M) contains the span of the columns in {m + 1, . . . , m + n}, and the tangent
space of X(N) contains the span of the columns in {1, . . . , m}, so together they span
the entirety of Mat(k+l)×(m+n).
Corollary II.10. Let X(M) ⊆ G(k, n) be a matroid variety. Then the class of
X(M ⊕ x0) in H∗(G(k, n + 1)) is σ1k · [X(M )], and the class of X(M ⊕ x1) in
H∗(G(k + 1, n + 1)) is σn−k · [X(M )].
The next definition is a bit more complicated than the ones that precede it. It
gives a way to add a new element to a matroid that is similar to the coloop extension
except that it doesn’t increase the total rank.
Definition II.11. Let M be a matroid of rank k on a set E. The free extension of
M by x is the matroid M + x on E ⊔ {x} that we get by adding a new, unconstrained
element x in a way that does not increase the total rank. Its rank function is defined
by
rkM+x S =

     
     
rkM S, x ∈/ S
rkM (S − {x}) + 1, x ∈ S and rkM (S − {x}) < k
k, rkM (S − {x}) = k
The class of a free extension can also be described in terms of the class of the
original matroid. This result will be much easier to state and deal with if we work
in H∗GLk(Matk×n) instead of H∗(G(k, n)).
Proposition II.12. If M is a matroid, the equivariant cohomology classes of X(M)

14
in H∗GLk (Matk×n) and of X(M + x) in H∗GLk (Matk×(n+1)) are represented by the same
symmetric function.
Proof. The map that takes X(M) to X(M + x) is the pullback in GLk-equivariant
cohomology along the projection map π : Matk×(n+1) → Matk×n that kills the last
column. But both Matk×(n+1) and Matk×n are contractible, so both of their equivari
ant cohomology rings are canonically isomorphic to H∗GLk(pt) = Λk, and therefore,
after identifying the three cohomology rings, π∗ is just the identity on Λk.
Definition II.13. If M can’t be written as a direct sum in a nontrivial way, we say
that M is connected. If we write M = ⊕
i Ai with each Ai connected, then the Ai’s
are uniquely determined, and we call them the connected components of M.
There are two other, equivalent ways to define connectedness [16, pp. 108-110]:
• M is connected if there is no proper, nonempty subset S ⊆ E for which rk S +
rk(E − S) = rk E.
• A circuit of M is a minimal dependent set, that is, a dependent set C for which
every proper subset is independent. We can define an equivalence relation on
E by saying x is equivalent to y if either x = y or there is a circuit of M
containing both x and y. The connected components of M are the equivalence
classes under this relation.
Definition II.14. Let M be a matroid of rank k on a set E, with #E = n. The
dual of M is the matroid M∗ on E whose bases are exactly the complements of bases
of M.
The rank of a set S in M∗ works out to be #S − k + rk(E \ S). In particular M∗
has rank n − k.

15
Proposition II.15. Consider the map ω : H∗(G(k, n)) → H∗(G(n − k, n)) defined
by taking σλ to σλ∨ and extending linearly. Then [X(M∗)] = ω([X(M)]).
Proof. In fact, ω is the map on cohomology induced by the isomorphism G(n−k, n) →
G(k, n) that takes each Plücker coordinate pS to p[n]−S. Some set S is a basis for M ∗
if and only if [n] − S is a basis for M, so we see that this isomorphism takes X(M∗)
to X(M).
It is important to note that restriction and contraction are dual to each other.
That is, (M |S)∗ = M ∗/(E − S), and (M/S)∗ = M ∗|E−S.

CHAPTER III
Interval Rank Varieties and the Geometric Shift
We mentioned earlier that intersections of Schubert varieties and opposite Schu
bert varieties are a special case of matroid varieties. These are called Richardson
varieties. Because Schuberts and opposite Schuberts are transverse, a Richardson
variety is a representative of the product of the cohomology classes of the Schuberts
used to construct it. So finding an algorithm for expressing the cohomology class of
a Richardson variety in terms of Schuberts is the same as finding a way to multiply
Schubert classes.
Such an algorithm is called a Littlewood-Richardson rule, and, as mentioned
in the introduction, there are already many different Littlewood-Richardson rules
that can be described by lots of different types of combinatorial gadgets. The rule
that we are going to look at in detail here is the one first described by Ravi Vakil
in [15] and later in different language and more generality by Allen Knutson in [8].
Their approach has a distinct advantage over other Littlewood-Richardson rules in
that it can be described purely geometrically. That is, Vakil and Knutson start with
a Richardson variety, perform a specific sequence of degenerations, and end up with
Schubert varieties at the end. By understanding the varieties that show up in the
middle of the sequence of process and how they behave under this operation, one can
16

17
read off the coefficient of some Schubert class simply by counting how many times
the corresponding Schubert variety appears at the end of this process.
What will interest us about this rule is the fact that it does more than just provide
a way to multiply Schubert classes. The matroid varieties that appear in the middle
of the sequence of degenerations are called “interval rank varieties,” and even though
this was not the original aim, their procedure ends up providing a way to find the
cohomology class of an arbitrary interval rank variety. Our goal in this paper, which
we will only partially accomplish, will be to generalize their degeneration procedure
to find the classes of a larger collection of matroid varieties.
We will start by describing the degeneration procedure used in their rule:
Definition III.1. Given a closed subset V ⊆ G(k, n), the geometric shift from i
to j of V is the variety
Шi→jV = tli→m∞ exp(teij) · V,
where eij is the matrix whose only nonzero entry is a 1 in row i and column j. That
is, take the set of points {(exp(teij)v, v) : v ∈ V } in G(k, n) × A1, take the closure
inside G(k, n) × P1, and let Шi→jV be the fiber over ∞.
By the definition of rational equivalence, [V ] and [Шi→jV ] are equal in the Chow
ring of G(k, n). In general, even if V is irreducible, its shifts might have multiple
components. The Littlewood-Richardson rule we’re examining works by taking a
Richardson variety and performing a prescribed sequence of geometric shifts. Every
time we have multiple irreducible components, we will perform the remaining shifts
on each component separately, and at the end of this process everything will have
become a Schubert variety.
So it’s enough to understand what happens to our varieties when we do a geometric

18
shift. The general question, even just for matroid varieties, will prove to be very
difficult, and we’ll see in Counterexample V.1 that, in general, a geometric shift of
a matroid variety doesn’t have to be a matroid variety. However, we will be able to
understand enough about the behavior of geometric shifts to make our Littlewood
Richardson rule work. We will start with a simple case:
Proposition III.2. Take S ⊆ [n] and 0 ≤ r < k, and let M be the matroid on [n]
generated (in the sense of Definition II.5) by imposing the condition that S has rank
r. If i ∈ S or j ∈/ S, then Шi→jX(M ) = X(M ). Otherwise, Шi→jX(M ) = X(M ′),
where M′ is the matroid in which S − {j} ∪ {i} has rank r and there are no other
conditions.
Proof. This is [8, 6.1].
When one performs a geometric shift on a Richardson variety, the result is almost
never another Richardson variety. By picking our shifts carefully, though, we are able
to make sure we stay inside a larger but still well-behaved class of matroid varieties:
Definition III.3. An interval is a subset of [n] of the form {i : a ≤ i ≤ b}.
Definition III.4. An interval rank matroid is a matroid which is generated by
putting rank conditions on intervals. An interval rank variety is the matroid
variety of an interval rank matroid.
Note that Schubert and Richardson varieties are themselves interval rank varieties.
It’s not true that all shifts of interval rank varieties are still interval rank varieties.
The strategy is to instead find a specific sequence of shifts that always works. That
is, starting with an interval rank variety, we perform a specific geometric shift which
gives us a reduced union of different interval rank varieties of the same dimension.

19
Then we can take each of those components and repeat the process until we only
have Schubert varieties left.
Lemma III.5. Suppose M is an interval rank matroid of rank k, defined by rank
conditions of the form “Im has rank rm” for intervals Im. Suppose further that, for
some i, j ∈ [n], there is a unique p such that i ∈/ Ip and j ∈ Ip, and that Ip − {j} ∪ {i}
is an interval. If Mp is the matroid generated only by the condition on Ip and M′ is
the matroid generated by all the rank conditions except the one on Ip, then
Шi→jX(M ) = X(M ′) ∩ Шi→jX(Mp)
as schemes.
Proof. This is proved in Section 5.3 of [9], which is forthcoming.
From here, two tasks remain. We need to guarantee the existence of a pair i, j as
in Lemma III.5 for any interval rank variety, and we need to figure out what varieties
we get as the components of the intersection that occurs on the last line. Both of
these tasks will be accomplished by the same combinatorial object:
Definition III.6. An interval rank matrix of rank k is an upper triangular n×n
matrix of nonnegative integers rij with the following properties:
1. r1n = k.
2. ri−1,j and ri,j+1 are both either rij or rij + 1. (Here we take rij to be 0 whenever
i > j.)
3. If rij =ri−1,j=ri,j+1, then ri−1,j+1 = rij .
There is a one-to-one correspondence between interval rank matroids of rank k on
[n] and n × n interval rank matrices of rank k. In fact, given an interval rank matrix,

20
imposing the condition on the Grassmannian that rk([i, j]) ≤ rij (that is, just setting
the corresponding Plückers equal to 0) is enough to define the corresponding interval
rank variety, even as a scheme ([8, 1.8]).
Many of the conditions in the interval rank matrix are redundant. For example,
if we know that rk({1, 2, 3}) ≤ 1, we don’t need to also say that rk({1, 2}) ≤ 1
or rk({1, 2, 3, 4}) ≤ 2. So it’s possible to eliminate the condition on [i, j] whenever
rij = ri,j+1 or rij = ri,j−1 + 1, and similarly for changing i. Chasing through the
definitions, one can see that this is equivalent to the following:
Definition III.7. Let (rij)1≤i≤j≤n be an interval rank matrix of rank k. We can use
r to define a partial permutation matrix (that is, a matrix whose entries are all
0 except for at most one 1 in each row and column) by putting a 1 in position (i, j)
if and only if rij = ri,j−1 = ri+1,j 6= ri+1,j−1.
Take the partial permutation associated to an interval rank matrix, and “cross out”
every position strictly below or to the left of a 1, and every empty row and empty
column. We are left with some intact entries in the matrix, called the diagram
of the partial permutation. Some interval [i, j] is called essential if (i, j) is in the
upper-right corner of a connected component of the diagram.
Proposition III.8. If M is an interval rank matroid, the rank conditions coming
from the essential set define X(M) as scheme.
Proof. This is [8, 2.3].
This gives us a good way to choose our interval: we can find the essential set
of our interval rank matroid and take, among all essential intervals starting after
1 which are tied for the rightmost right endpoint, the one with the rightmost left
endpoint. If this interval is [i, j], then the shift Шi−1→j will clearly always satisfy

21
the hypotheses of Lemma III.5.
The last task is to describe what the result of this shift is. After we perform the
shift, we will be left with a bunch of rank conditions on intervals inside [n]. We can
take the pseudo-rank function generated by these conditions and try to use them to
fill out an interval rank matrix. In general, we will fail: what we get won’t always
be an interval rank matrix because it won’t satisfy property 3 in Definition III.6. So
we need to figure out how to split up the subscheme of G(k, n) we get by imposing
these new conditions into irreducible components. This turns out to be surprisingly
straightforward.
Lemma III.9. The intersection of interval rank varieties is a reduced union of in
terval rank varieties.
Proof. This is [8, 2.2].
Proposition III.10. Let M be an interval rank matrix, possibly not satisfying prop
erty 3 in Definition III.6. Suppose
r r+1
rr
appears somewhere in the middle of M. If M1 is the rank matrix with that block
replaced by
rr
rr
and M2 is the rank matrix with that block replaced by
r r+1
r−1 r
,
then the scheme defined by M is the union of the schemes defined by M1 and M2.

22
Proof. As sets, this is clear. The statement about subschemes then follows from
Lemma III.9.
So now we have our procedure. Starting with a Richardson variety — or indeed
any interval rank variety at all — we can perform a sequence of shifts, splitting the
results up according to the prescription in Proposition III.10 whenever we have more
than one irreducible component. If we arrive at a point where no more shifting can
be done, we must be in a position where every essential interval starts at 1, that is,
we must have a Schubert variety. And every shift we do either decreases the sum
of the left and right endpoints of all essential intervals (if the shift is irreducible)
or expresses the cohomology class we’re interested in as a nontrivial sum of smaller
cohomology classes (if the shift isn’t irreducible), and neither of these can continue
forever. So this process must terminate eventually, and when it does we are left with
a bunch of Schubert varieties with respect to the standard basis of Cn.

CHAPTER IV
Positroid Varieties
In addition to the fact that they fill in the gap between Richardson and Schubert
varieties in the right way, interval rank varieties have several nice geometric proper
ties. They share these properties with a larger class of matroid varieties, which we
will describe in this section.
Definition IV.1. A cyclic interval is a subset of [n] which can be written as a
cyclic permutation applied to an interval.
Proposition IV.2. If M is a matroid of rank k on [n], the following are equivalent:
1. M is generated by rank conditions on cyclic intervals.
2. M is the matroid of an R-point of the Grassmannian for which every Plücker
coordinate is nonnegative.
3. X(M) is the image of a Richardson variety in the flag variety F l(n) under the
natural projection map F l(n) → G(k, n).
Proof. For the equivalence of (1) and (2), see [12]. For (2) and (3), see [10].
Definition IV.3. A matroid satisfying any of the equivalent conditions just listed
is called a positroid, and its matroid variety is called a positroid variety.
23

24
Several nice properties of positroid varieties are described in [7]. In particular, they
are always reduced, irreducible, and Cohen-Macaulay, and unlike general matroid
varieties (see Counterexample II.7) they are always cut out by Plücker variables.
Positroids are very well-studied already, and there are several different combinatorial
gadgets that have been invented to describe them, some of which are described in
[10].
Similarly to how we handled interval rank varieties, we can describe a positroid
by saying what the rank of every cyclic interval is. We wind up with something
analogous to Definition III.6.
Definition IV.4. Take a positroid P on [n]. We’ll think of elements [n] as represen
tatives of equivalence classes of integers mod n with the obvious cyclic order (that is,
1 comes right after n). We’ll use interval notation with this in mind; for example, if
n = 6, then we’ll write [5, 8] = [5, 2] = {5, 6, 1, 2}. In particular, [5, 5] = {5}, whereas
[5, 11] = [5, 10] = [5, 4] = {5, 6, 1, 2, 3, 4}. We can form a cyclic rank matrix by
setting rij = rkP ([i, j]) for any integers i, j with 0 ≤ j − i ≤ n.
The conditions in Definiton III.6 are again necessary and sufficient for a rank
matrix to have arisen from this procedure. We can also replicate the essential set
machinery in this setting:
Definition IV.5. We can form an affine permutation matrix from our cyclic
rank matrix using the same condition we used for interval rank varieties: put a 1
in position (i, j) if rij = ri,j−1 = ri+1,j 6= ri+1,j−1 and a 0 otherwise. Unlike in the
interval rank case, every row and every column will have exactly one 1.
The essential set is also defined exactly as before: cross out all the positions
strictly below or to the left of a 1 in the partial permutation matrix, and take the

25
positions which are at the upper-right corners of their connected components.
By convention, we don’t consider positions on the very upper-right edge of the
matrix (that is, ones where j − i = n) to be essential. Again, imposing the rank
conditions corresponding to the essential intervals are enough to define a positroid
variety in G(k, n) as a scheme.
Example IV.6. The positroid of rank 3 on [6] generated by forcing [1, 3], [3, 5], and
[5, 1] to have rank 2 has the following cyclic rank matrix:
1223333
1233333
1223333
1233333
1223333
1233333
We think of the matrix as repeating indefinitely in the northwest and southeast
directions. So, for example, the 3 printed in the fourth row and fourth nonempty
column indicates that [4, 7] = [4, 1] = {4, 5, 6, 1} has rank 3. The affine permutation
corresponding to this rank matrix is the one with 1’s in the spots marked in underline.
We’ll sometimes write affine permutations as functions, listing the images of each
element of [n] in order. So, for example, this one is 3, 6, 5, 8, 7, 10.
As we have already mentioned, finding the cohomology class of an arbitrary ma
troid variety is probably an impossible task. But given how nice positroid varieties
are, it seems much more reasonable that there might be a nice way to describe their
classes. There is a sense in which this has already been done in [10]: the authors
of that paper give a procedure which takes a positroid P and outputs a symmetric

26
function which represents the class of X(P ) in the cohomology ring of G(k, n). But
the symmetric function they give (called the “affine Stanley symmetric function”)
is not always a nonnegative linear combination of Schur functions. Instead, when
expanded in the Schur basis all the minus signs happen to appear only in front of
Schur functions which map to zero in H∗(G(k, n)).
It would be good to instead have a “positive” rule, like we had for interval rank
varieties, that is, a rule that takes in a positroid and simply outputs the coefficients
of the Schuberts in its cohomology class without having to go through the computa
tionally opaque step of finding a representative for a symmetric function modulo an
ideal.
Perhaps we could proceed in a way similar to our strategy for interval rank va
rieties: find a shift that always works, do it to get a union of positroid varieties,
and continue until we have only Schuberts. The rest of this paper is dedicated to
exploring the extent to which this plan can be successful.

CHAPTER V
Complications with Shifting Positroids
5.1 The Square Positroid
Note that the choice of which sequence of shifts to perform is much less clear in
this case. Since the elements of an interval rank matroid had a natural linear order,
it made sense to start at one end and perform the shortest and rightmost possible
shifts in order until the end. In a positroid, of course, there is no “rightmost,” so any
such choice would be more arbitrary than in the interval rank case.
At any rate, it doesn’t matter: there is a positroid variety in G(3, 8), which will
be defined in a moment, for which no nontrivial shift is a reduced union of positroid
varieties. So if we are going to use geometric shifts to find the class of a positroid
variety, it won’t be as easy as it was for interval rank varieties.
Counterexample V.1. The square positroid is a rank-3 positroid S on [8]. Its
essential intervals are [1, 3], [3, 5], [5, 7], and [7, 1], each of which has rank 2. A picture
of a projective model of S is shown in Figure 2.
The picture makes it clear that this matroid has D4 symmetry. Table ?? is
a catalog of the results of performing every possible geometric shift on X(S) up
to symmetry. Each entry in the table is a list of the irreducible components of
the corresponding shift. In this table and in the other similar tables later in this
27

28
1 23
4
5
6
7
8
Figure 2: A projective model of the “square positroid.”
paper, we will describe a matroid by listing the nonredundant conditions on its rank
function; each row of the table corresponds to one connected component. We will
write, for example (123)2 to mean that the set {1, 2, 3} has rank 2. The rank of any
set not listed is understood to be the largest possible number that doesn’t violate
the condition rk(F ∪ {x}) = rk F or rk F + 1. In this way, S itself could be described
by the conditions
(123)2 (345)2 (567)2 (781)2.
Some features of the table are worth pointing out explicitly. First, except for the
shift 1 → 2, which does nothing, for none of the shifts is it the case that every
irreducible component is a positroid variety. This means that the naive goal of just
replacing the words “interval rank variety” with “positroid variety” everywhere in
Section III and hoping to find the right shift order cannot possibly work — there is
no way to stay entirely inside the world of positroid varieties using geometric shifts.
Also worth discussing is the fifth component of the shift 1 → 5 in the table, which
we’ll call B. As indicated there, B is not a matroid variety. Its ideal in the coordinate
ring of the Grassmannian is generated by all the Plücker coordinates that contain 1

29
shift result 1 → 2 no change 1 → 3 (123)2 (145)2 (567)2 (781)2 1 → 4 (1235)2 (567)2 (781)2 (13)1 (567)2 (781)2 (783)2 (1)0 (567)2 1 → 5 (1234)2 (6781)2 (13)1 (6781)2 (6783)2 (17)1 (1234)2 (7234)2 (137)1 not a matroid variety, described in the text 2 → 3 (123)2 (245)2 (567)2 (781)2 2 → 4 (1235)2 (567)2 (781)2 (23)1 (567)2 (781)2 2 → 5 (1234)2 (267)2 (781)2 (23)1 (267)2 (367)2 (781)2 (2)0 (781)2 2 → 6 (123)2 (257)2 (345)2 (781)2
Table 1: The results of the possible geometric shifts of X(S) up to symmetry.
(which exactly forces 1 to be a loop) along with the single cubic binomial
p234p367p578 − p235p347p678.
This ideal is prime, and the matroid of a generic point of B is simply the matroid in
which 1 is a loop.
The preceding counterexample does much to dash our hopes of a geometric-shift
based way to find the cohomology class of a positroid variety. However, at least in
rank 3, all is not lost. Look at the entry in Table ?? for the shift 2 → 4. The second
component listed is definitely a positroid variety, since all the conditions are on cyclic
intervals. The first component is not: one of the conditions is on the set {1, 2, 3, 5}.
But notice that the number 4 doesn’t appear in that section of the table; there are
no conditions placed on that element of the matroid at all. And if 4 is deleted from
the matroid, {1, 2, 3, 5} becomes a cyclic interval and we have a positroid again.
So while the first component of the shift 2 → 4 isn’t a positroid variety, it is
the variety of a free extension of a positroid (see Definition II.11). From a certain

30
perspective, it’s not so strange that it worked out this way. In the original description
of S, 4 appears in only one of the essential rank conditions — the one on {3, 4, 5}.
This is exactly the sort of situation that made us happy when we were working with
interval rank varieties.
5.2 Partial Success in Rank 3
In fact, for positroids in rank 3 we can always arrange for this to happen. Since
we will be making use of free extensions and Proposition II.12, it will be simpler to
work in the equivariant cohomology ring H∗GL3(Mat3×n) for this computation. The
geometric shift is defined in exactly the same way this context, and we can extract
results about H∗(G(3, n)) by restricting classes inside Mat3×n to the open subvariety
Mat◦3×n consisting of full-rank matrices, and using the fact that
H ∗GL3(Mat◦
3×n) ∼= H∗(Mat◦
3×n/GL3) = H∗(G(3, n)).
Theorem V.2. If P is a positroid of rank 3, there is a geometric shift we can apply
to V (P ) which, up to cohomology, results in a reduced union of positroid varieties
and free extensions of positroid varieties.
Before we prove this, we first analyze the essential set of a positroid P of rank 3.
The essential conditions will, of course, be on sets of rank 0, 1, or 2. By repeatedly
using Corollary II.10, we may reduce to the case where P has no loops, that is, there
are no nonempty subsets of rank 0.
So all essential conditions must be on sets of rank 1 or 2. Conditions of rank
1 (that is, conditions which force elements of the matroid to be parallel) put an
equivalence relation on [n], and any essential rank-2 interval must be a union of
these equivalence classes. This is because if some interval I has rank 2 and some
interval J has rank 1, then there are two nonisomorphic ways to resolve this: either

31
14
2,3 5
8
9
1
11,12
13
Figure 3: An example of a “model polygon” of a positroid
I ∪ J has rank 2 or I ∩ J has rank 0. (One can deduce this formally by repeatedly
applying Definition IV.5.) This is a problem unless I ∩ J is empty or J ⊆ I, that is,
I contains the entire equivalence class J or none of it.
Furthermore, the intersection of two essential intervals must have rank at most 1:
if I and J have rank 2, and rk(I ∩ J) > 0, then either rk(I ∩ J) = 1 or rk(I ∪ J) = 2.
But in the latter case, I and J wouldn’t have been essential intervals, because the
rank conditions on I and J would be implied by the condition on I ∪ J. This means
that, provided I and J intersect in an interval (which must happen unless I ∪J = [n]),
I ∩ J consists of a single equivalence class.
So we can think of a projective model of P as a polygon, which we will call the
model polygon, with points drawn at all the vertices and at various points along
the edges. Each edge of the polygon is a rank-2 essential interval and each point is
a rank-1 essential interval (which may consist of multiple parallel elements of [n]).
We’ll make use of this description throughout the section.
For example, Figure 3 shows a picture of a model polygon of a positroid. In this
example, n = 13; there are four edges (rank-2 essential intervals): [1, 7], [5, 9], [9, 12],
and [11, 1]; and there are three rank-1 essential intervals: [2, 3], [5, 7], and [11, 12].

32
We can immediately eliminate the case where there are only two rank-2 essential
intervals which intersect on both ends. This happens, for example, in the rank-3
positroid on [6] in which [1, 4] and [4, 1] are the only essential intervals, each of rank
2. At every point of the corresponding open positroid variety, 1 and 4 are parallel,
and something similar happens in general. Suppose [n] = A ⊔ B ⊔ C ⊔ D with
A, B, C, D appearing cyclically consecutively. The case we’re interested in is where
our rank-2 essential sets are, say, A ∪ B ∪ C and C ∪ D ∪ A. But by the logic from
two paragraphs ago, this means that, on the open set Mat◦3×n of full-rank matrices,
A ∪ C has rank 1. So we could reorder our points in the order B, A, C, D, and our
positroid turns out to actually be an interval rank matroid.
To prove Theorem V.2, we’ll need some lemmas:
Lemma V.3. Let u, v ∈ [n]. Suppose M is a free extension of a positroid of rank 3
in which all rank conditions are on cyclic intervals in [u, v], and in which u and v
are each only in one essential interval, which has rank 2. Let M′ be a matroid with
the same conditions, except having rank conditions on cyclic intervals in [v, u]. Then
V (M) and V (M′) intersect generically transversely in Mat3×n.
The proof of this is somewhat involved, and it will be helpful to establish some
more lemmas beforehand.
Lemma V.4. Suppose M and M′ satisfy the hypotheses of Lemma V.3. Then the
generic point of V (M) ∩ V (M′) is a nonsingular point of both V (M) and V (M′).
Proof. Since u and v each appear in at most two essential intervals, each of rank 2,
at a generic point of this intersection, the u’th and v’th columns of the matrix are
nonzero. And the dimension of the tangent space of V (M) is the same at any point
at which the u’th and v’th columns are nonzero, since there is an automorphism

33
interchanging any two such points, so each such point is a nonsingular point of
V (M).
Lemma V.5. Under the hypotheses of Lemma V.3, let A ∈ V (M) ∩ V (M′), and
pick a tangent vector Q at A in Mat3×n. Then there is a tangent vector to V (M)
which agrees with Q in the columns in [v, u].
Proof. First, if one or both of M or M′ is a free extension of a positroid, then there
is a column which is free in both V (M) and V (M′). So it’s enough if we can get any
tangent vector at A in the projection of the tangent space away from that column,
since we can then fix it in any way we want without leaving either V (M) or V (M′).
So it’s enough if we handle the case where M and M′ are actually positroids.
We think of Q as a C[ǫ]/(ǫ2)-point of Mat3×n, that is, a 3 × n matrix with entries
in C[ǫ]/(ǫ2). We’re looking for another such matrix W which lies in V (M)(C[ǫ]/(ǫ2)).
Like Q, W should map to A after setting ǫ to 0, and it should agree with Q on the
columns in [v, u].
We will determine the entries of W column by column. For i ∈ [n], write qi, wi,
and ai for the i’th columns of Q, W , and A respectively. As we mentioned above, at
a generic point of the intersection, we can assume that au and av are nonzero. First,
V (M) imposes no conditions on the columns in [v, u] except u and v themselves, so
we are free to set those columns of W to whatever we like without leaving V (M).
So we simply need to verify that there is a matrix with the right entries in columns
u and v that lies in V (M) and still maps to A.
Following the “model polygon” description of rank-3 positroids from above, let I
be the edge (that is, rank-2 essential condition) containing u and let J be the edge
containing v. Let u′ be the rightmost (that is, further from u) element of I so that
au′ isn’t a multiple of au, or set u = u′ if there is no such element. Similarly, either

34
let v′ be the leftmost element of J with av′ not a multiple of av or set v = v′.
If I 6= J, then we can construct W by making the columns in [v, u] agree with
those of Q, as we must, and letting columns u′ and v′ be as in A, that is, have 0
as their coefficient of ǫ. We similarly let any columns outside of I ∪ J be as in A.
By construction, au and au′ span the columns in I. Given an x with u < x < u′,
say ax = αau + βau′. We set wx = αwu + βwu′. After doing this, we see we have
accomplished our goal: all the essential rank conditions defining V (M) have been
met by W , and by construction, W maps to A after killing ǫ.
Finally, if I = J, we can do the same thing, except that since u′ = v and v′ = u,
we can’t force those columns to agree with A. But in this case, the entire interval
[u, v] is a single essential rank-2 interval, so we can simply set wu and wv equal to qu
and qv and handle the interior columns as in the preceding paragraph.
Proof of Lemma V.3. Take a generic point of V (M) ∩ V (M′). By Lemma V.4, this
is a nonsingular point of both V (M) and V (M′). The tangent space at a point of
Mat3×n is isomorphic to Mat3×n, so if A is a generic element of V (M ) ∩ V (M ′), it’s
enough to show that the tangent spaces of V (M) and V (M′) at A together span all
of Mat3×n. We’ll show that the projection of the tangent space at A of V (M) to the
subspace of Mat3×n spanned by the columns in [v, u] is surjective. This, together with
the symmetrical claim about V (M′) and [u, v], is enough to prove the result. Take
a tangent vector at our intersection point. By Lemma V.5, there is a tangent vector
to V (M) which agrees with it in the columns in [v, u]. But since V (M′) imposes no
conditions on the columns in (u, v), we can set the columns in (u, v) to whatever we
want by adding a vector tangent to V (M′) without disturbing anything else.
Lemma V.6. For any GL3-invariant equidimensional subvariety V ⊆ Mat3×n, if V

35
has components contained in L, then we claim its equivariant cohomology class when
expanded in the Schur basis will contain some terms corresponding to partitions with
more than n − 3 columns.
Proof. First, all the coefficients in the Schur basis are nonnegative: if some σλ appears
with a negative coefficient, then free-extend enough times so that n − 3 is at least
the number of columns in λ. Then removing L and passing to the Grassmannian
gives us a negative coefficient in the Schur basis there, which can’t happen. So if
there is a component of V contained in L, then it maps to 0 after passing to the
Grassmannian, so its class lies in the kernel of that map, that is, it’s a nonnegative
sum of terms corresponding to partitions with more than n − 3 columns.
Lemma V.7. Suppose the model polygon of P doesn’t have two edges which overlap
on both ends, and that at least two of the corners don’t have any parallel points. Then
V (P ) is generically equal to the variety cut out in Mat3×n by the rank conditions
corresponding to its essential intervals.
Proof. Let Y (P ) be the subvariety of Mat3×n cut out by the rank conditions corre
sponding to the essential intervals of P . Since we know Y (P ) = X(P ) in G(3, n), and
therefore in Mat◦
3×n, it’s enough to check that Y (P ) has no components contained
in L := Mat3×n − Mat◦
3×n.
Let E1, . . . , Ek be the subvarieties corresponding to each of the rank conditions on
the edges of the model polygon, except with only one element of each rank-1 essential
interval included. In the example in Figure 3, k would be 4, and the corresponding
sets could be {1, 2, 4, 5}, {7, 8, 9}, {9, 10, 11}, and {12, 13, 1}. Let A1, . . . , Al be the
ones corresponding to the rank-1 essential conditions. In the example, l = 3 and the
sets are {2, 3}, {5, 6, 7}, and {11, 12}.

36
We know from Lemma V.3 that the intersection E1 ∩ · · · ∩ Ek is generically trans
verse, and we claim the same is true of each (E1 ∩ · · ·∩ Ek ∩ A1 ∩ · · · Ai−1) ∩ Ai. To see
this, suppose Ai is forcing x1, x2, . . . , xr to be parallel, and that x1 is the one with a
condition imposed on it by the E’s. Then at any point of the intersection, columns
x2, . . . , xr are free in the tangent space to E1 ∩ · · · ∩ Ek ∩ A1 ∩ · · · Ai−1, all the other
columns are free to vary in the tangent space to Ai, so together their tangent spaces
span.
Write
B = E1 ∩ · · · ∩ Ek ∩ A1 ∩ · · · ∩ Al.
We then have V (P ) ⊆ Y (P ) ⊆ B, and we claim that they are all equidimensional
of the same dimension. The fact that dim V (P ) = dim B follows either from direct
computation or from the expected codimension machinery developed in the next sec
tion. We know that V (P ) is equidimensional (in fact, irreducible) from the positroid
machinery, and B is equidimensional because it’s the generically transverse inter
section of Schuberts. Finally, the hypothesis on the corners of the model polygon
of P allow us to conclude via Lemma V.3 that Y (P ) is the generically transverse
intersection of two interval rank varieties.
So it is sufficient to show B has no components contained in L. By Lemma V.6,
this is the same as showing that no terms of B correspond to partitions with more
than n−3 columns. But we can compute the class of B directly. From its description
as a transverse intersection, its class is
σe1−2 · · · σek−2σ(a1−1)2 · · · σ(al−1)2 ,
where ei is the number of points on edge i of the model polygon, and ai is the
number of points in the i’th rank-1 essential interval. By the Pieri rule, the number

37
of columns in each term of this is at most
∑ ei + ∑ aj − 2#(edges) − #(rank-1 intervals).
Some simple counting shows that
n = ∑ ei + ∑ aj − #(rank-1 intervals) − #(corners).
If P is an interval rank matroid, this follows directly from that theory, so we may
assume that the model polygon of P is closed, with as many corners as edges. Since
we’ve eliminated the case of two edges by hypothesis, the number of edges is at least
3. All together, this says that when we expand the class of B in the Schur basis,
each term corresponds to a partition with at most n − 3 columns, which gives the
result.
Lemma V.8. For any matroid M on [n] in which the point k is not a loop, write
Mk for the matroid on [n + 1] obtained by taking the free extension of M in which the
new element is n+1 and adding the condition that n+1 is parallel to k. (We call this
a parallel extension of M.) Fix i, j 6= k. Suppose that Шi→jV (M) = ⋃
r V (Nr)
for some matroids Nr. Then k is not a loop in any Nr, and
Шi→jV (M k) = ⋃
r
V ((Nr)k).
Proof. For a subvariety V ⊆ Mat3×n, write Σi◦→jV for the variety
{(exp(teij)v, v) : v ∈ V, t ∈ A1}
in Matk×n × A1, and write Σi→jV for its closure in Mat3×nP1. Then by definition
Шi→jV is the fiber over ∞ of Σi→jV .
Let π : Mat3×(n+1) → Mat3×n be the map that drops the (n + 1)’st column, and
let A be the rank-3 matroid on [n + 1] in which k and n + 1 are parallel with no other

38
conditions. For any subvariety V ⊆ Mat
3×n
, we can define V
k
⊆ Mat
3×(n+1)
to be
π
−1
(V ) ∩ V (A). We can define the same operation on subvarieties of Mat
3×n
×A
1
or Mat
3×n
×P
1
by just working on the first component. Then away from the locus
where k is a loop, V (M
k
) = V (M)
k
. Furthermore,
Σ
◦
i→j
(V
k
) = (Σ
◦
i→j
V)
k
for any V : applying Σ
◦
i→j
replaces an equation f (M) = 0 by the equation f (exp(−te
ij
)M) =
0, but because i, j 6= k, the equations defining V (A) are invariant under this opera
tion. Therefore, we can conclude that their closures are equal as well:
Σ
i→j
(V
k
) = (Σ
i→j
V)
k
.
We claim that none of the components of Ш
i→j
V (M) or Ш
i→j
V (M
k
) live inside
the locus where k is a loop. If there was such a component, say C ⊆ Ш
i→j
V (M),
then consider the inclusion Mat
3×(n−1)
֒ → Mat
3×n
and write L for its image. Then
in fact C lies in Ш
i→j
(V (M) ∩ L): as in the last paragraph, Σ
◦
i→j
(V (M) ∩ L) =
(Σ
◦
i→j
V (M)) ∩ (L × P
1
) because the equations defining L are invariant under the
operation f (M) 7→ f (exp(−te
ij
)M). But this is a contradiction: the dimension of
each component of Ш
i→j
(V (M) ∩ L) is equal to the dimension of V (M) ∩ L, which
is strictly less than dim V (M) = dim C.
So it’s enough to show that Ш
i→j
(V (M)
k
) = (Ш
i→j
V (M))
k
, since we can then
remove all the components inside the locus where k is a loop to get our result. But
this is clear: Ш
i→j
(V (M)
k
) is cut out in Mat
3×(n+1)
×P
1
by the equations defining
Σ
i→j
(V (M)
k
) and t = ∞, but by the result from the preceding paragraph, these is
the same as the equations defining Σ
i→j
V (M) and V (A), together with t = ∞. But
this defines (Ш
i→j
V (M))
k
.

39
Proof of Theorem V.2. We first eliminate the case where there are parallel elements
at points of the model polygon other than corners. Say i, i + 1, . . . , i + r are parallel,
and that they correspond to a point on the interior of an edge A of the polygon.
Either there are some rank-1 essential intervals between i + r and the next corner,
say also containing the edge B, or i + r + 1 is a point on that corner. Either way,
we will do the shift i + r + 1 → i. Let H be the matroid defined by the conditions
on A and B, and let H′ be the matroid defined by the rest of the conditions in
P . By applying Lemma V.8, we can assume that the two points involved in the
shift are the only ones with any parallel elements. Then by Lemma V.7, we know
V (P ) = V (H) ∩ V (H′).
Since Шi+r+1→i fixes V (H′), we want to be comparing
X1 = Шi+r+1→i(V (H) ∩ V (H′))
and
X2 = (Шi+r+1→iV (H)) ∩ V (H′).
Now, H is an interval rank matroid — we’ve already eliminated the case where A
and B are the only edges of the polygon and they meet at both endpoints. So we can
appeal to the interval rank machinery to conclude that Шi+r+1→iV (H′) is again a
union interval rank varieties, meaning that the X2 is a union of positroid varieties. So
by Lemma V.3, we know that both intersections in that containment are generically
transverse, so we can conclude that they have the same cohomology class.
So it’s enough to understand the case where the only parallel elements are at the
intersections of rank-2 essential intervals. And using Lemma V.8, as long as none of
our shifts involve these corners, it is then enough to understand the case where there
are no rank-1 essential intervals at all.

40
Let I and J be two cyclically adjacent rank-2 essential intervals overlapping in {i},
say with J occurring to the right of I. (Note that if I and J are adjacent and disjoint,
then our positroid is actually an interval rank matroid.) There must be at least
three elements in I and in J, because otherwise the condition that they have rank 2
wouldn’t be essential. In the absence of parallel elements, essential intervals are only
allowed to overlap in one element, so J is the only essential interval containing i + 1
and I is the only essential interval containing i − 1.
Let E be the subvariety of Matk×n defined by the rank conditions on I, E′ the
subvariety defined by the rank conditions on J, and S the subvariety defined by all
the other conditions. By Lemma V.7 again, we know that V (P ) = E ∩ E′ ∩ S. Since
the shift from i + 1 to i − 1 fixes E and S, we already know that
Шi+1→i−1(E ∩ E′ ∩ S) ⊆ (Шi+1→i−1E) ∩ E′ ∩ S.
The intersection (Шi+1→i−1E) ∩ E′ is equal to Шi+1→i−1(E ∩ E′), and it’s the union
of two components: A, in which I ∪ J − {i + 1} has rank 2, and B, in which i and
i − 1 are parallel, and I and J − {i + 1} ∪ {i − 1} have rank 2. (This can either be
computed directly or by using the interval rank machinery.)
Let u be the left endpoint of I and v be the right endpoint of J. By Lemma V.7,
the intersections A ∩ S and B ∩ S are free extensions of positroid varieties — after
removing i + 1, A is defined by a condition on the interval [u, v] and B is defined
by conditions on [u, i], [i − 1, v], and [i, i − 1]. So it will be enough to show that
the containment above is actually an equality up to cohomology. In fact, we claim
that both E ∩ E′ and (Шi+1→i−1E) ∩ E′ intersect S generically transversely, which
is enough. This follows from Lemma V.3.
This procedure is quite a bit more complicated than the procedure we saw for

41
7
5
4
1
8
9
6
3 2
Figure 4: A projective model of the tripod positroid.
interval rank varieties, and it relies critically on our ability to isolate a single element
which is in only one essential interval to be the target of our shift. As the next
section will show, this situation is special to rank ≤ 3. In general, positroid varieties
in rank 4 and above are even less amenable to our geometric shift operation.
5.3 The Tripod Positroid and Failure in Rank 4
Our program for applying geometric shifts to positroid varieties in rank 3 relied
on being able to find some pair of elements i, j ∈ [n] for which there was exactly one
essential interval containing j but not i. We found that, with some difficulty, we can
always arrange for this to be the case in rank 3. In rank 4, though, we will not be
so lucky:
Counterexample V.9. The tripod positroid is a rank-4 positroid T on [9]. Its
essential intervals are [1, 6], [4, 9], and [7, 3] with rank 3, and [1, 3], [4, 6], and [7, 9]
with rank 2. A projective model of T is shown in Figure 4.
It is immediate from the description given in the previous paragraph that there is
no pair of elements i, j for which there is exactly one essential interval containing i

42
but not j. In fact, there is enough symmetry here that there are only two essentially
different shifts: ones involving two elements in the same rank-2 essential interval,
and the rest.
The first kind clearly does nothing. To examine the second kind, we can pick any
suitable pair of numbers and see what happens. Consider the shift 6 → 9. We wind
up with two components. Using the notation of Counterexample V.1, they are:
A : (123)2 (45678)2 (12345678)3
B : (1236)2 (456)2 (678)2 (123456)3 (456789)3 (678123)3
Component A is a positroid variety, but component B is not. In fact, we can say
even more: notice that there are three different rank-2 flats in our list that contain 6.
Since one can’t have three different cyclic intervals which overlap in just one point,
we see that the sets in B can’t become cyclic intervals even if we reorder the base
set. That is, B isn’t a positroid variety with respect to any ordering of [n].
Since this was the only shift we could do up to symmetry, we see that there’s no
way to shift X(T ) to get even free extensions of positroids, like we had in rank 3. It’s
possible, though it seems unlikely, that B belongs to some class of matroid varieties
larger than positroid varieties for which it’s still possible to concretely describe the
effects of geometric shifts.

CHAPTER VI
Expected Codimension of Matroid Varieties
Matroid varieties can be very ugly in general. A good start toward understanding
the behavior of a matroid variety would be to find some way to compute its dimension
directly from the matroid that defines it. Even this has very little hope of succeeding.
Matroid varieties are under no obligation to be irreducible, equidimensional, or even
generically reduced (when given the natural scheme structure), and, as mentioned
before, even the problem of determining whether a given matroid variety is empty
or not is NP-hard ([13]).
Still, one can come up with an estimate of the codimension of a matroid variety
inside its Grassmannian by keeping careful track of the conditions imposed by the
vanishing of Plücker coordinates on the columns of the k × n matrix defining a
point on G(k, n). This section is about a way to make this idea precise, producing
a number called the expected codimension for each matroid. While it doesn’t
always produce the actual codimension of the matroid variety, we will prove that it
always does for positroids.
The procedure we follow was described quite informally in [4, 3.3], and we flesh
it out here. Consider the matroid S of a point in G(3, 8) for which p123, p345, p567
and p178 are the only Plücker variables that vanish. A projective model for S using
43

44
points in P2 is shown in Figure 2.
We estimate the codimension of X(S) in G(3, 8) as follows. To build a projective
model of S like the one in the figure, we are free to place the odd-numbered points
wherever we want. Once we’ve done this, each even-numbered point is forced to live
in the codimension-1 subspace spanned by two of the points we’ve already placed.
So we guess that the codimension of X(S) is 1 + 1 + 1 + 1 = 4.
This turns out to be the correct answer for codim X(S), and we’ll see later that
the reasoning given is more or less why. One immediate question is whether the
result of this procedure depends on the order in which we “place” the points. Once
we’ve nailed down exactly what the procedure is, we will see that the answer to this
question is no. For now, let’s just try a couple more. If they’re placed in order
starting from the beginning, points 1, 2, 4, 5, and 7 can be put anywhere without
restriction. As before, points 6 and 8 are now forced onto codimension-1 subspaces.
But point 3 is now forced onto a codimension-2 subspace: it needs to be on the
intersection of span{1, 2} and span{4, 5}. So, adding all the restrictions up, we get
1 + 1 + 2 = 4. Similarly, we could get “2 + 2” by placing the points 1, 2, 4, 5, 6, and
8 freely, and then putting 3 and 5 in last.
We will show that our definition is independent of the order by recasting it in
terms of something manifestly order-independent. In G(k, n), specifying exactly
which Plücker coordinates vanish is the same as describing, for each subset of the
set of columns, the dimension of its span in Ck; in matroid language, this is called
the rank of the corresponding subset [n]. Our current procedure is to ask, for each
element, what constraints are put on that element when it’s added in. Instead let’s
ask, for each subset of the base set of the matroid, what constraints it puts on its
elements. For example, in the set {1, 2, 3} in S, the third element added in will be

45
forced onto a codimension-1 subspace no matter what the order is; the only thing
that matters is that the number of elements of this set is 1 more than its rank.
So it seems like we should add up the numbers (#F − rk F )(k − rk F ) for each
subset F ; the first factor is the number of elements which are constrained by F and
the second is the codimension of the subspace those elements are constrained to.
But this is not quite right: whenever an element belongs to two different such F ’s,
it’s going to be counted twice. Sometimes this is desirable, as we saw with point 3
two paragraphs up, but often it will be redundant, as it is for the sets {1, 2, 3} and
{1, 2, 3, 4} in S. We ought to subtract 1 from the number of constrained elements for
the larger set to account for the fact that it was already taken care of by the smaller
one.
This, finally, takes us to the definition that we’ll be using:
Definition VI.1. Let M be a matroid of a point of G(k, n), and let S ⊆ P([n]).
For S ∈ S, we define
c(S) = #S − rk S,
and
a
S(S) = c(S) − ∑
T ∈S
T (S
a
S(T ), aS(∅) = 0,
where the sum goes over elements of S. (Note that this indeed recursively defines
a for all elements of S.) We then define the expected codimension of M with
respect to S to be
ecS(M ) := ∑
S∈S
(k − rk S)aS(S).
The expected codimension of M is then
ec(M ) := ecP(E)(M ).

46
(Similarly, we will write a = aP([n]).) We say that M has expected codimension
if ec(M) is equal to the codimension of X(M) in G(k, n).
Allowing S to be something other than P([n]) itself might seem strange, but it
will turn out to be very helpful. We will show that in many cases ecS will be the
same for many different choices of S but easier to compute for some choices than for
others, and we will be happy to have the flexibility, for both theoretical and practical
reasons.
We will show in Theorem VI.10 that positroids have expected codimension. In
Section 6.3 we also discuss valuativity, a well-studied property of some numerical
invariants of matroids, and show that expected codimension is valuative.
6.1 Properties of Expected Codimension
We now study how ecS chages for different choices of S. Throughout this section,
M is a matroid of rank k on a set E.
First, it will be helpful to write ec in a more symmetrical way. Thinking of S as
a poset under containment, write μS for its Möbius function. Then the fact that
c(S) = ∑
T ⊆S, T ∈S
a
S(T )
tells us that we can write
a
S(S) = ∑
T ∈S
c(T )μS(T, S),
which means that
ecS(M ) = ∑
S,T ∈S
c(T )(k − rk S)μS(T, S).
(Note that this is the same as summing over only the pairs S, T with T ⊆ S, since if
T 6⊆ S, μ(T, S) = 0.) From this perspective, it seems natural to define a version of

47
a
S which splits up the sum the other way, that is, we define
b
S(T ) = ∑
S∈S
(k − rk S)μS(T, S),
and from here we may clearly write
ecS(M ) = ∑
T ∈S
c(T )bS(T ).
A small advantage of singling out b is that it clarifies the behavior of these oper
ations under dualization:
Proposition VI.2. If S ⊆ P(E) is some collection of sets, let S′ = {E − S : S ∈
S}. Then:
1. ecS(M ) = ecS′(M ∗)
2. For S ∈ S, aS(S) = bS′(E − S), where the latter is computed in M∗.
Proof. The rank of E − S in M∗ is #(E − S) − k + rkM S. So c(E − S) in M∗ is
k − rkM S, and c(S) in M is k − rkM∗(E − S). So since
ecS = ∑
S,T ∈S
c(T )(k − rk S)μS(T, S),
(1) follows from the fact that S′ is the opposite poset to S, and therefore μS′(E −
S, E − T ) = μS(T, S). From this perspective, (2) is also immediate.
What is the point of going through this? Our immediate goal is to determine the
conditions under which the expected codimension can be computed with respect to
some set other than P(E) and still give the same answer. To figure this out, it would
be enough to establish a condition for when ecS(M) = ecS−{Z}(M) for some set Z.
In fact, we can do a little better:
Proposition VI.3. If S ⊆ P(E) and Z ∈ S, then

48
1. ecS(M ) − ecS−{Z}(M ) = aS(Z)bS(Z).
2. For S ∈ S − {Z}, aS(S) − aS−{Z}(S) = aS(Z)μS(Z, S).
3. For S ∈ S − {Z}, bS(S) − bS−{Z}(S) = μS(S, Z)bS(Z).
Proof. We have
ecS(M ) − ecS−{Z}(M ) = ∑
S,T ∈S
c(T )(k − rk S)(μS(T, S) − μS−{Z}(T, S))
if we take μS−{Z}(T, S) to be zero if either T or S is equal to Z. Recall that the
Möbius function can be defined by setting μS(X, Y ) to be the sum over all chains
in S connecting X to Y of (−1)c where c is the length of the chain. So μS(T, S) −
μ
S−{Z}(T, S) is going to be the alternating sum of lengths of chains in S connecting
T to S through Z; all other chains will appear in both sums and therefore cancel.
Write qk(X, Y ) for the number of length-k chains in S connecting X to Y . The
number of length-c chains connecting T to S through Z is clearly equal to
c
∑
k=0
qk(T, Z)qc−k(Z, S),
which means that
μ
S(T, S) − μS−{Z}(T, S) = ∑
c
∑
k
(−1)k(−1)c−kqk(T, Z)qc−k(Z, S),
which is just μS(T, Z)μS(Z, S).
Therefore our difference of expected codimensions works out to be
∑
S,T ∈S
c(T )(k − rk S)μS(T, Z)μS(Z, S) = aS(Z)bS(Z).
Dropping in this expression for the difference of Möbius functions into the earlier
expression of a, we see that
a
S(S) − aS−{Z}(S) = ∑
T
c(T )μS(T, Z)μS(Z, S) = aS(Z)μS(Z, S),
and again similarly for b.

49
Corollary VI.4. Given A ⊆ S, if aS(A) = 0 for each A ∈ A, then ecS−A(M) =
ecS(M), and similarly with a replaced with b.
Proof. Remove the elements of A from S one by one. By part 1 of the proposition,
removing something for which a = 0 doesn’t change ec, and by part 2, the remaining
elements of A will still have a = 0 after some have been removed. The argument is
exactly analogous for b.
This result will be a lot more useful if we can find a lot of sets for which a and b
are zero. Luckily, we can:
Proposition VI.5. Suppose that S ∈ S is disconnected, say S = ⊕
i Si. Suppose
further that, for each T ⊆ S for which T ∈ S, we also have that each connected
component of T is in S. Then aS(S) = 0.
Proof. Recall that
a
S(S) = c(S) − ∑
T (S
a
S(T ).
Any T ( S which intersects more than one of the Si’s is disconnected, so for those
sets we may inductively conclude that aS(T ) = 0. We are left only with sets that are
contained in one of the Si’s. To handle those, we note that ∑
T ⊆Si aS(T ) = c(Si).
So we are left with aS(S) = c(S) − ∑
i c(Si). It is simple to check that c is additive
in direct sums, so this zero.
Simply by dualizing everything, we get a version of this statement about b. Sup
pose that S ∈ S is such that M/S is disconnected, and that whenever T ⊇ S is in
S, say M/T = ⊕ Ai, we have each T ∪ Ai ∈ S. Then bS(S) = 0.
In particular, Proposition VI.5 and Corollary VI.4 together imply that, starting
with all of P(E), we can remove any number of disconnected sets, or any number

50
of sets S for which M/S is disconnected, and end up with the same expected codi
mension, because the extra condition in Proposition VI.5 will be trivially satisfied.
Note that it doesn’t say that we can remove sets of both kinds at the same time:
Proposition VI.3 tells us that removing sets for which b = 0 doesn’t change values of
b for other sets, but values of a can and will change.
First we need a lemma:
Lemma VI.6. Suppose that M is connected and that S ⊆ M is connected. Say
M/S = ⊕
i Ai where each Ai is connected in M/S. Then each Ai ∪ S is connected
in M.
Proof. Suppose Ai ∪ S is disconnected. Write A = Ai ∪ S and B = ⋃
j6=i Aj ∪ S, so
that M/S = (A − S) ⊕ (B − S). Because S is connected, it must be contained in
a connected component of A. Dually, since A/S ∼= Ai is connected, S must contain
all but one connected component of A. So in fact S is a connected component of A,
say A = S ⊕ C.
We know that rk M − rk S = (rk A − rk S) + (rk B − rk S), but our decomposition
of A gives us that the right-hand side is rk C + rk B − rk S, so rk M = rk B + rk C.
So in fact M = B ⊕ C, contradicting the connectedness of M.
Note that by applying the theorem inductively to the Ai’s themselves, we get
that any S ∪ ⋃
i∈I Ai is also connected. Again we can extract a dual version of this
statement: if M and M/S are connected but S = ⊕ Bi with each Bi connected,
then each M/Bi is connected.
Theorem VI.7. Suppose that M is connected, that S contains every set S for
which both S and M/S are connected, and that whenever S ∈ S, all of the connected
components of S are also in S. Then ecS(M) = ec(M).

51
Proof. Starting with all of P(E), using Corollary VI.4 we may remove every set S for
which M/S is disconnected and S ∈/ S. Call the resulting collection T. If T ∈ T−S,
we know that M/T is connected, or we would have removed it already. So T must
be disconnected, or else it would be in S. Write T = ⊕
i Ti with each Ti connected.
We know that the Ti’s themselves are in T: each M/Ti is connected by the dual
version of Lemma VI.6, so in fact each Ti ∈ S. Suppose U ( T and U ∈ T. If
U ∈ T − S, then aT(U) = 0 by induction. Otherwise, U ∈ S, so its connected
components are in S by hypothesis, and we again can conclude inductively that
a
T(U) = 0. This is enough to be able to apply Proposition VI.5 to get that aT(T ) = 0.
So by applying Corollary VI.4 once more, we may remove every set in T − S,
which gives the result.
Note that, in particular, Lemma VI.6 implies that taking S to be the collection
of all sets S for which both S and M/S are connected will satisfy the hypotheses of
Theorem VI.7. (These sets are called flacets, and come up in the study of matroid
polytopes. See [5, 2.6].)
Expected codimension turns out to be well-behaved under direct sums:
Proposition VI.8. Let M and N be matroids on sets E and F , and take collections
S ⊆ P(E) and T ⊆ P(F ). In P(E ∪ F ), let
A = S ∪ T ∪ {S ∪ T : S ∈ S, T ∈ T}.
Then ecA(M ⊕ N ) = ecS(M ) + ecT(N ).
Proof. Take A ∈ A. If A is a union of nonempty sets from S and T, then it satisfies
the hypotheses of Proposition VI.5. Otherwise, if A ∈ S, then aA(A) = aS(A), and

52
1
23
45
6
7
89
Figure 5: A projective model of the “Pappus matroid.”
similarly for T. So in fact,
ecA(M ⊕ N ) = ∑
A∈A
a
A(A) codim(A)
=
∑
A∈S
a
S(A) codim(A) + ∑
A∈T
a
T(A) codim(A)
= ecS(M ) + ecT(N ).
In particular, using Proposition II.9, we see that if M and N have expected
codimension, so does M ⊕ N. Since it is trivial to check that both matroids on
a one-element set have expected codimension, this also applies to loop and coloop
extensions.
We conclude this section with an example of a matroid that doesn’t have expected
codimension:
Counterexample VI.9. Consider the Pappus matroid P , the rank-3 matroid on
[9] generated by the collinearities in Figure 5. The only sets S ⊆ [9] for which both
S and P/S are connected are the nine sets of points which lie on lines in the picture.
(That is, 123, 456, 789, 157, 168, 247, 269, 348, and 359.) From this we can easily

53
compute that ec(P ) = 9. However, the actual codimension of X(P ) in G(3, 9) is
8. This can be (and was) computed directly with a computer algebra system like
Macaulay2; it also follows from computations performed in [4]. Either way, P doesn’t
have expected codimension.
This should not be especially surprising: the whole point of the Pappus matroid
is that it demonstrates Pappus’s theorem, that is, the fact that given any eight of
the collinearities in Figure 5, the ninth comes for free. Our definition of expected
codimension is unable to keep track of “global” constraints like this one, so it treats
all nine rank conditions as independent.
6.2 Positroids
We have already seen in Counterexample VI.9 a case in which the expected codi
menion of a matroid variety fails to line up with its actual codimension in the Grass
mannian. The main result of this section is that that doesn’t happen for positroids:
Theorem VI.10. Positroids have expected codimension.
In order to prove this, we’re going to need to understand a little bit more about the
matroid structure of a positroid. We refer repeatedly to restrictions and contractions
of positroids; note that it follows directly from the second definition in Proposition
IV.2 that these are again positroids.
Lemma VI.11. If P is a positroid on [n], X ⊆ [n], and both P |X and P/X are
connected, then X is an interval.
Proof. Suppose X is not an interval. Take c1, c2 ∈ [n] − X to lie in two different
cyclic intervals of [n] −X. Since P/X is connected, there is a circuit C of P/X which
contains both c1 and c2. By restricting to X∪C, we may assume that P/X is a circuit.

54
Similarly, for b1, b2 ∈ X lying on different sides of c1 and c2 (so the named elements
appear in the cyclic order b1, c1, b2, c2), there is a circuit B of (P |X)∗ = P/([n] − X)
containing both, and we may contract the elements of X −B and assume that (P |X)∗
is a circuit, that is, that everything in X is parallel.
Now, delete all elements of X other than b1 and b2. This doesn’t change the rank
of any set in P/X: everything in X was parallel to b1 and b2. Dually, contract all
elements of [n] − X except c1 and c2. Now we have n = 4, and the sets {1, 3} and
{2, 4} each have rank 1. This matroid is not a positroid, which can easily be checked,
so we have a contradiction.
Lemma VI.12. The connected components of a positroid form a non-crossing par
tition. (This was also proved independently in [2].)
Proof. Suppose first that P has just two connected components, say P = A ⊕ B.
Then P/A = B and P/B = A are also both connected, so Lemma VI.11 implies that
they are both intervals. If there are more than two connected components, they no
longer have to both be intervals, but for any two components C and D, each of C
and D must be an interval inside C ∪ D, which means in particular that they cannot
cross.
Lemma VI.13. If P is a connected positroid on [n] and I ⊆ [n] is an interval, then
each connected component of I is an interval.
Proof. Say I = X ⊕ ⊕
i Yi with X and each Yi connected, and suppose X is not an
interval, say X = ⋃
k Jk and I − X = ⋃
l Jl′ where each Jk and Jl′ is an interval. Since
the components of I have to form a non-crossing partition by Lemma VI.12, none of
the Yi’s can meet more than one of the Jl′’s. So we may assume that left and right
endpoints of X coincide with those of I by removing the Yi’s that lie to the left of

55
X’s left endpoint or to the right of its right endpoint. We now know that all the Jl′’s
lie in between two Jk’s.
Just as in the proof of Lemma VI.11, the connectedness of X lets us conclude
that there is a circuit of X∗ = P/([n] − X) that contains points in two different Jk’s.
Suppose there is a circuit of P/X that contains a point of I − X and a point of
P − I. If this were the case, because we forced all the points of I − X to lie between
intervals of X, we would be in the exact situation that gave us a contradiction in the
previous proof.
So there must be no such circuit. But this means that
P/X = I/X ⊕ ((P − I) ∪ X)/X =
(
⊕
i
Yi
)
⊕ (P − I ∪ X/X),
which means that
rk P − rk X = ∑
i
rk Yi + rk(P − I ∪ X) − rk X,
so in fact
P=
(
⊕
i
Yi
)
⊕ ((P − I) ∪ X),
contradicting the connectedness of P .
Lemma VI.14. For a positroid P , let I ⊆ P([n]) be the collection of all cyclic
intervals. For any interval [i, j] 6= [n], aI([i, j]) is equal to the entry (either 0 or 1)
at (i, j) in the affine permutation matrix.
Proof. To see this, it’s enough to note that our purported aI satisfies the relation
c(S) = ∑
T ⊆S
a
I(T ).
We mentioned above that c([i, j]) = #[i, j] − rk[i, j] is the number of intervals [k, l] ⊆
[i, j] with a 1 in the affine permutation matrix at position (k, l), so this is true.

56
Proof of Theorem VI.10. First, we claim that for a positroid P , if I ⊆ P([n]) is the
collection of all cyclic intervals of [n], ec(P ) = ecI(P ). For connected positroids, this
follows immediately from Theorem VI.7: Lemmas VI.11 and VI.13 say that taking
S = I satisfies the hypotheses of the theorem. For a general positroid, we can
decompose it as a direct sum and apply Proposition VI.8.
So now it remains to show that ecI(P ) is the actual codimension of P . We’ll use
the fact that codim P = l(π), where π is the corresponding affine permutation. Let
dI be the number of intervals [k, l] ⊆ I with a 1 in position (k, l), and let I′ be the
collection of intervals other than [n] with a 1 at the corresponding position. We can
ignore [n] itself because codim[n] = 0, so we may compute, using Lemma VI.14:
ecI(P ) = ∑
I ∈I
a
I(I) codim(I) = ∑
I ∈I′
codim(I) = ∑
I ∈I′
(k − (#I − dI)),
where k is the rank of P . A simple computation (which is spelled out in [10]) shows
that ∑ #I = nk + n, and we know that ∑ dI = l(π) + n, since we’re counting the
pairs of intervals in the definition of l(π) and also counting the pairs (I, I). So we’re
left with
ecI(P ) = nk − (nk + n) + l(π) + n = l(π).
6.3 Valuativity
Let M be a matroid on a set [n]. For each basis B of M, consider the vectors in Rn
whose entries are 1 if the corresponding element of [n] is in B and 0 otherwise. The
convex hull of these vectors is called the matroid polytope of M, written P (M).
There are many examples of combinatorial properties of matroids that are encoded
in the geometry of the matroid polytope.

57
Definition VI.15. Given a matroid M, a matroidal subdivision of P (M) is a
decomposition of P (M) into polytopes which are all matroid polytopes. If D is a
matroidal subdivision of P (M), write Din for the internal faces of D, that is, the
faces of D that are not also faces of P (M). Given a function f from the set Mat(n)
of all matroids on [n] into an abelian group, we say f is valuative if, for any matroid
M and any matroidal subdivision D of P (M),
f (M) = ∑
P (N )∈Din
(−1)dim P (M)−dim P (N)f (N ).
Valuative matroid invariants are studied in detail in [3]. We single out the follow
ing result, which appears as [3, 5.4] in slightly different language:
Theorem VI.16. The set of Schubert matroids forms a basis for Mat(n) modulo
matroidal subdivisions.
We will show:
Theorem VI.17. Expected codimension is a valuative matroid invariant.
Since Schubert matroids, being positroids, have expected codimension, Theorem
VI.16 gives us another way to think about expected codimension: you could have
defined it by assigning Schubert matroids their codimensions and extending to all
matroids by subdividing the matroid polytope and insisting that it be valuative.
We’ll prove Theorem VI.17 by proving something stronger first:
Lemma VI.18. Let M be a matroid on [n], and define
sM (x, y, z) = ∑
S⊆T ⊆[n]
x#S−rk Syrk M −rk T z#T −#S .
Then the function that takes M to sM is valuative.

58
This is a generalization of the Tutte polynomial, which is
tM (x, y) = sM (x − 1, y − 1, 0).
In [14, 6.4], David Speyer shows that the Tutte polynomial is a valuative matroid
invariant. The proof we give here of VI.18 turns out to be almost identical. We
single out the following lemma, which appears as [14, 6.5]:
Lemma VI.19. If P is a polytope and G is the set of internal faces of a decomposition
of P , then
∑
N ∈G
(−1)dim P −dim N = 1.
Proof. This is just (−1)dim P (χ(P ) − χ(∂P )) where χ is the Euler characteristic. So
the result follows, becuase P is contractible and ∂P is homeomorphic to a (dim P −1)
sphere.
Proof of Lemma VI.18. Plugging the definition of sM to the definition of valuativity,
it’s enough to show, for any matroidal subdivision D of P (M),
x#S−rkM S yrk M −rkM T z#T −#S
is equal to
∑
P (N )∈Din
(−1)dim P (M )−dim P (N)x#S−rkN S yrk N−rkN T z#T −#S .
Comparing the coefficients of x#S−rkM Syrk M−rkM T z#T −#S, we want that
∑
P (N )∈Din
rkN (S)=r, rkN (T )=s
(−1)dim P (M)−dim P (N)
is 1 if (r, s) = (rkM (S), rkM (T )) and 0 otherwise. Since the sum is empty if r >
rkM (S) or s > rkM (T ), we’ll just show that
∑
P (N )∈Din
rkN (S)≥r, rkN (T )≥s
(−1)dim P (M)−dim P (N) = 1

59
for r ≤ rkM (S) and s ≤ rkM (T ).
Let lS be the linear function on Rn sending (xi) to ∑
i∈S xi. Note that
rkN (S) = max
x∈P (N) lS(x).
So rkN (S) ≥ r if and only if P (N ) intersects the half-space lS > r− 1
2 . So our equality
follows by applying Lemma VI.19 to P (M) ∩ {lM > r − 1
2 } ∩ {lN > s − 1
2 }.
Proof of Theorem VI.17. This follows directly:
ec(M) = ∂
∂x
∂
∂y sM (0, 0, −1).

CHAPTER VII
Code
In the course of doing the research described here, I found it helpful to write a
script in Macaulay2 which I’ve uploaded to my Web site at http://nicf.net/static/posshift.m2.
This section is a short description of some of the functions defined in that file and
how to use them. The descriptions of the functions below are followed by a short
example.
• initialize: This function should be called before doing anything else. It takes
three parameters, n, k, and stief, and it defines the rings necessary to work in
the Grassmannian G(k, n). If stief is true, then computations are done instead
in the Stiefel cone, that is, the variety of full-rank k × n matrices.
• ssToMatroid: This function takes a list of numbers which define the siteswap of
a juggling pattern (as described in [10]) and produces a matroid. Matroids are
stored as lists of lists of numbers, each of which is a basis.
• matroidToSS: This is the partial inverse to the previous function.
• matroidToIdeal: This takes a matroid and returns the ideal of the subvariety
of the Grassmannian defined by the vanishing of the Plücker coordinates corre
sponding to nonbases of the matroid. (Note that this is not always the matroid
60

61
variety.)
• matroidToIdeal’: This function is like the previous one, but returns the ideal
of the matroid variety. It’s often much slower.
• idealToMatroid: This is the partial inverse to matroidToIdeal. (Note: not to
matroidToIdeal’.)
• ssToIdeal: This is the composition of matroidToIdeal and ssToMatroid.
• idealToSS: This is the composition of matroidToSS and idealToMatroid.
• geomShift: This function performs a geometric shift. It takes three parameters,
i, j, and I, and outputs the result of the shift Шj→iI.
Example
This example shows the result of shifting 2 to 5 in the subvariety of G(3, 5) defined
by the ideal (p123, p345). We end up with two components: one where 5 is a coloop
and one where 2 and 3 are parallel.
i1 : initialize(5,3,false)
o1 = false
i2 : ssToIdeal {2,4,2,3,4}
o2 = ideal (p , p ) {1, 2, 3} {3, 4, 5}
o2 : Ideal of G
i3 : geomShift(5,2,o2)
o3 = ideal (p , p ) {2, 3, 4} {1, 2, 3}
o3 : Ideal of G
i4 : decompose o3
o4 = {ideal (p , p , p , p ), ideal (p , {2, 3, 4} {1, 3, 4} {1, 2, 4} {1, 2, 3} {2, 3, 5} --------------------------------------------------------------------------p , p )} {2, 3, 4} {1, 2, 3}
o4 : List
i5 : idealToMatroid \ o4
o5 = {{{1, 2, 5}, {1, 3, 5}, {2, 3, 5}, {1, 4, 5}, {2, 4, 5}, {3, 4, 5}}, {{1, --------------------------------------------------------------------------2, 4}, {1, 3, 4}, {1, 2, 5}, {1, 3, 5}, {1, 4, 5}, {2, 4, 5}, {3, 4, 5}}}

62
o5 : List

BIBLIOGRAPHY
63

64
BIBLIOGRAPHY
[1] D. Anderson. Introduction to Equivariant Cohomology in Algebraic Geometry (IMPANGA 2010). ArXiv e-prints, December 2011.
[2] Federico Ardila, Felipe Rincón, and Lauren Williams. Positroids and non-crossing partitions. arXiv preprint arXiv:1308.2698, 2013.
[3] Harm Derksen and Alex Fink. Valuative invariants for polymatroids. Advances in Mathematics, 225(4):1840–1892, 2010.
[4] László M. Fehér, András Némethi, and Richárd Rimányi. Equivariant classes of matrix matroid varieties. Comment. Math. Helv., 87(4):861–889, 2012.
[5] Eva Maria Feichtner and Bernd Sturmfels. Matroid polytopes, nested sets and Bergman fans. Port. Math. (N.S.), 62(4):437–468, 2005.
[6] Nicolas Ford. The Expected Codimension of a Matroid Variety. ArXiv e-prints, September 2013.
[7] A. Knutson, T. Lam, and D. E Speyer. Projections of Richardson Varieties. ArXiv e-prints, August 2010.
[8] Allen Knutson. Puzzles, positroid varieties, and equivariant K-theory of Grassmannians. arXiv: 1008.4302v1, August 2010.
[9] Allen Knutson. Schubert calculus and shifting of interval positroid varieties. Forthcoming, 2013.
[10] Allen Knutson, Thomas Lam, and David E Speyer. Positroid Varieties: Juggling and Geometry. arXiv: 1111.3660v1, November 2011.
[11] Laurent Manivel. Symmetric Functions, Schubert Polynomials and Degeneracy Loci, volume 6 of SMF/AMS Texts and Monographs. American Mathematical Society, 2001.
[12] Suho Oh. Positroids and Schubert matroids. J. Combin. Theory Ser. A, 118(8):2426–2435, 2011.
[13] Peter W. Shor. Stretchability of pseudolines is NP-hard. In Applied geometry and discrete mathematics, volume 4 of DIMACS Ser. Discrete Math. Theoret. Comput. Sci., pages 531554. Amer. Math. Soc., Providence, RI, 1991.
[14] David E Speyer. Tropical linear spaces. SIAM Journal on Discrete Mathematics, 22(4):15271558, 2008.
[15] Ravi Vakil. A geometric Littlewood-Richardson rule. arXiv: 0302294v1, February 2003.
[16] Neil White, editor. Theory of Matroids, volume 26 of Encyclopedia of Mathematics and its Applications. Cambridge University Press, 1986.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:11.394Z
- **Text Length:** 93770 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
