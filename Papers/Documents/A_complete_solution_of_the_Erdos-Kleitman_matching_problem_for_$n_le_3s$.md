# PDF Document: Kupavskii and Sokolov - 2025 - A complete solution of the Erdős-Kleitman matching problem for $nle 3s$.pdf

**File Path:** Kupavskii and Sokolov - 2025 - A complete solution of the Erdős-Kleitman matching problem for $nle 3s$.pdf

**Processed Date:** 2026-02-10T18:14:13.398Z

**File Size:** 720.17 KB

**Total Pages:** 42

**Extracted Pages:** 42

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3753

**Title:** A complete solution of the Erdős-Kleitman matching problem for $n\le 3s$

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A complete solution of the Erd ̋os–Kleitman
matching problem for n ≤ 3s.
Andrey Kupavskii, Georgy Sokolov
Abstract
Given integers n ≥ s ≥ 2, let e(n, s) stand for the maximum size of a family F of subsets of an n-element set that contains no s pairwise disjoint members. The study of this quantity goes back to the 1960s, when Kleitman determined e(sm − 1, s) and e(sm, s) for all integer m, s ≥ 1. The question of determining e(n, s) is closely connected to its uniform counterpart, the subject of the famous Erdo ̋s Matching Conjecture. The problem of determining e(n, s) has proven to be very hard and, in spite of-
 some progress during these years, even a general conjecture concerning the value of e(n, s) is missing. In this paper, we completely solve the problem for n ≤ 3s. In this regime, the average size of a set in an s-matching is at most 3, and it is a delicate interplay between the ‘missing’ 2- and 3-element sets that plays a key role here. Four types of extremal families appear in the characterization. Our result sheds light on how the extremal function e(n, s) may behave in general.
1 Introduction
Let [n] := {1, 2, . . . , n} and, more generally, [a, b] = {a, a + 1, . . . , b}. For a set X and an integer k, let 2X , X
k and X
≥k stand for the power set of X, the set of its k-element subsets and the set of its subsets with size at least k, respectively. Any collection of sets is called a family. A matching is a collection of pairwise disjoint sets. An s-matching is a matching of size s. Given a family F, its matching number ν(F) is the size of the largest matching in F . One of the classical topics in extremal set theory is the study of intersecting families, that is, families with matching number 1. Erd ̋os, Ko and Rad-
o [6] showed that the largest intersecting family F ⊂ 2[n] has size at most 2n−1, and that for n ≥ 2k the largest intersecting family F ⊂ [n]
k has size n−1
k−1 . In the several years that followed, Erd ̋os asked for the size of the largest family avoiding an s-matching. Let us introduce the following two quantities.
e(n, s) = max |F | : F ⊂ 2[n], ν(F ) < s ,
ek(n, s) = max
n
|F| : F ⊂ [n]
k , ν(F ) < s
o
.
1
arXiv:2511.21628v1 [math.CO] 26 Nov 2025

1.1 The uniform case
The value of ek(n, s) is the subject of the famous Erdo ̋s Matching Conjecture.
Let us define the families A(k)
i (n, s) :
A(k)
i (n, s − 1) :=
n
F ∈ [n]
k : |F ∩ [si − 1]| ≥ i
o
, 1 ≤ i ≤ k. (1)
It is not difficult to see that ν(A(k)
i (n, s − 1) ≤ s − 1 for any n, s.
Conjecture 1 (Erd ̋os Matching Conjecture [4]). For n ≥ sk
ek(n, s) = max |A(k)
1 (n, s − 1)|, |A(k)
k (n, s − 1)| . (2)
Let us comment on the statement of the conjecture. First, the condition n ≥ sk is required in order for [n]
k to contain an s-matching. Second, note that the conjecture suggests that only two out of k + 1 families Ai could be extremal. This is different from some other similar-looking questions, notably, the Complete t-Intersection Theorem for [n]
k [1]. There, all families could be extremal depending on the parameters n, k, t. The conjecture (2) is known to be true for k = 2 [5], and k = 3 [22, 10]. In fact, an elegant proof of Frankl of the k = 2 case of the conjecture, initially proven by Erd ̋os and Gallai, will play an important role in this paper. We will recite it later. The conjecture was proved for n ≥ n0(s, k) by Erd ̋os [4]. Many researchers worked on extending the range in which the conjecture is valid: [4], [3], [17], [15], [8]-
, [14]. Notably, in the last two papers, it is proved that
ek(n, s) = |A1| = n
k − n−s+1
k (3)
for n ≥ (2s + 1)k − s and for (n ≥ 5
3 sk, s ≥ s0), respectively. In [9] and [20], the authors studied the problem from the other end and showed that Ak is extremal for (n ≤ s(k + 1/100k), s ≥ ck3 with some absolute c > 0). We refer the reader to [2, 14] for the connections of the Erdo ̋s Matching Conjecture and other questions, such as Dirac thresholds and small deviations in probability theory. In [17], [21], the multi-family variant of the EMC was addressed. In [12], a Hilton–Milner type stability result for the EMC is obtained.
1.2 The non-uniform case
The study of e(n, s) was also initiated by Erd ̋os at around the same time. The behavior of e(n, s) heavily depends on n (mod s). Answering a question of Erd ̋os, Kleitman proved the following theorem.
2

Theorem 1 (Kleitman [19]).
e(sm − 1, s) =
sm−1
X
t=m
sm − 1
t , (4)
e(sm, s) = sm − 1
m+
sm
X
t=m+1
sm
t . (5)
The matching example for the first case is the family [n]
≥m of all subsets of [n] of size at least m. It is also not difficult to see that e(sm, s) = 2e(sm − 1, s). In general, e(n + 1, s) ≥ 2e(n, s) because of the doubling construction. Given a family F ⊂ 2[n] with ν(F ) < s, we may construct the doubling F ′ of F as follows: F ′ = {F ⊂ [n + 1] : F ∩ [n] ∈ F }. It is easy to see that ν(F ′) < s as well. In [11], Frankl and the first author put forth the following conjecture.
Definition 1. Let n = sm + s − l, 0 < l ≤ s. Set
P(s, m, l) := P ⊂ 2[n] : |P | + |P ∩ [l − 1]| ≥ m + 1 .
It is not difficult to check (cf. [11]) that ν(P(s, m, l)) < s.
Conjecture 2 ([11]). Suppose that s ≥ 2, m ≥ 1, and n = sm + s − l for some integer 0 < l ≤ ⌈ s
2 ⌉. Then
e(sm + s − l, s) = |P(s, m, l)|. (6)
They confirmed the conjecture for a variety of cases:
Theorem 2 ([11, 13]). e(sm + s − l, s) = |P(s, m, l)| holds for
(i) l = 2,
(ii) m = 1,
(iii) s ≥ lm + 3l + 3.
The case of l = 2, s = 3 was solved much earlier by Quinn [23] in his PhD dissertation. We also note that a sum-type inequality for s families avoiding a matching is much easier to obtain, see [12]. Let us return to the definition of P(s, m, l). The two main uniformities to understand the construction are m and m+1. One sees that the family contains all sets of size m + 1, as well as all sets of size m that intersect [l − 1], i.e., the
family A(m)
1 (n, l − 1). Thus, in fact, the sets of uniformity m form a family with no matching of size l. We should note here that the sets in P(s, m, l) ∩ [n]
≤m ,
a bulk of which is A(m)
1 (n, l − 1), could be replaced by any other family in [n]
m
with no matching of size l. As a result, we would obtain a construction of a family in 2[n] with no s-matching.
3

Here, one sees that the problems of determining e(n, s) and ek(n, s) are, in fact, closely connected. In particular, let us give the reason for the constraint l ≤ s/2 in Conjecture 2: in this regime, n ≥ 2lm, and the result of Frankl [8] guarantees that the largest family in [n]
m with no matching of size l is indeed
A(m)
1 (n, l − 1). Incidentally, one could also interpret the extremal family for n = sm = sm + s − s in the same way: the extremal example consists of all sets of size at least m + 1, as well as of the family of sets of size m with no s-matching. The construction for the sets of uniformity m is, however, different: it is A(m)
k (n, s − 1). Actually, the situation is even more complicated, as is shown in [11]: already for n = sm + 1 there is a construction in which some (m + 1)-element sets are missing and that is bigger than constructions with all (m + 1)-element sets present. Namely, it is the doubling construction. Concluding the discussion, the authors of [11] state that it is hard to formulate a general conjecture, and that they had already struggled with the case n = 2s + t for some small values of t.
1.3 Main result
In this paper, we find the value of e(n, s) for all n, s, provided n ≤ 3s. The easy case n < 2s is solved in Theorem 2. The cases n = 2s and n = 3s are answered in (5). Thus, we are left to deal with the cases 2s < n < 3s. For the rest of the paper, unless otherwise stated, we use notation n = 2s + c = 3s − l, where c, l ∈ [s − 1], c + l = s.
In order to state the result, we describe the prospective extremal families. We have already seen the first example.
P(s, l) := P(s, 2, l) = P ∈ 2[n] : |P | + |P ∩ [l − 1]| ≥ 3 .
The second family also contains all sets of size at least 3, but differs on the 2uniform layer. It has the other extremal example for 2-uniform families avoiding an l-matching: a clique on 2l − 1 vertices.
P′(s, l) := [n]
≥ 3 ∪ [2l − 1]
2.
The third family misses some 3-element sets, and instead has a larger 2-uniform layer. It is also a clique.
Q(s, l) := [n]
≥ 3 ∪ [s + l − 1]
2 \ [s + l, n]
3.
Finally, the fourth family is an iterated doubling of the extremal family for n = 2s − 1. W(s, l) := P ∈ 2[n] : |P ∩ [2s − 1]| ≥ 2 .
We note that none of these families contain 0- or 1-element sets. In the next section, we show that all these families indeed avoid s-matchings. The main result of the paper is the following theorem.
4

Figure 1: Extremal families. W is one of the extremal families for c = 1, s ≥ 5.
Theorem 3. Let n, s, l, c be positive integers such that n = 2s + c = 3s − l, and c, l ∈ [s − 1]. Then
e(n, s) = max |P(s, l)|, |P′(l)|, |Q(s, l)|, |W(s, l)| .
Moreover, if s ≥ 3, F ⊂ 2[n] is shifted, has no s-matching and |F | = e(n, s), then F must coincide with one of the families above.
On Figures 1 and 2 we show, which families are extremal for different regimes of the parameters s, c. For some values we get that three different families are extremal at the same time. We define shifted families in the next section. We should note that actually there are rather natural examples of families with no s-matching interpolating between P′(s, l) and Q(s, l) in a somewhat similar way as Ai interpolate between A0 and Ak, but, as in the case of the EMC, there is a certain convexity that le-
ads to the fact that it is the endpoints that must be extremal. In the proof we will work only with sets of size 3 or less. Therefore, any family, avoiding s-matching, must miss at least as many sets of size 3 or less, as the extremal family. We thus get the following theorem about the truncated boolean lattice, confirming a conjecture of Frankl and the first author [11] in our regime of the parameters.
Theorem 4. Let n, s, l, c be positive integers such that n = 2s + c = 3s − l, and c, l ∈ [s − 1]. If F ⊂ [n]
≤3 has no s-matching, then
|F | ≤ max |P(s, l)(≤3)|, |P′(s, l)(≤3)|, |Q(s, l)(≤3)|, |W(s, l)(≤3)| .
Note that a similar statement about 2 first layers of boolean lattice is obviously false. Indeed, one of the families A(2)
1 (n, s − 1), A(2)
2 (n, s − 1) has a larger
cardinality than families P(s, l)(≤2), P′(s, l)(≤2), Q(s, l)(≤2), W(s, l)(≤2).
5

Figure 2: Extremal families for small c, s. Note that for c = 1, s = 5 there are 3 different extremal families. For l = 1, that is, s = c + 1, the family P′ coincides with P (both are equal to n
≥(m+1) ) and thus is formally extremal. When P′ ̸= P, for c ≤ 9 P′ cannot be extremal.
In Section 2, we prove several easy facts and make the necessary preparations for the proof of the main theorem. In Section 3 we describe the strategy of the proof of the main theorem.
2 Preliminaries
Let us show that the families from Theorem 3 indeed have no s-matchings. We use the following simple lemma.
Lemma 5. Let x1, . . . , xn ≥ 0 be nonnegative real numbers such that Pn
i=1 xi <
s. Suppose that for a family F and any F ∈ F we have P
i∈F xi ≥ 1. Then ν(F) < s.
Proof. Take any matching F1, . . . , Fq ∈ F . Then s > Pn
i=1 xi ≥ P
i∈S
j Fj xi =
Pq
j=1
P
i∈Fj xi ≥ q. Thus, q ≤ s − 1.
Corollary 6. The families P(s, l), P′(s, l), Q(s, l), W(s, l) do not contain an s-matching.
Proof. We show it by finding suitable xi and applying Lemma 5.
P(s, l): put xi = 2
3 for i ≤ l − 1 and xi = 1
3 for i ≥ l.
P′(s, l): put xi = 1
2 for i ≤ 2l − 1 and xi = 1
3 for i ≥ 2l.
6

Q(s, l): put xi = 1
2 for i ≤ 2s − c − 1 and xi = 1
4 for i ≥ 2s − c.
W(s, l): put xi = 1
2 for i ≤ 2s − 1 and xi = 0 for i ≥ 2s.
The families that we consider contain almost all subsets of [n]. Thus, it is more convenient to work with the complements of the families. For a family F ⊂ 2[n], denote by F its complement: F := 2[n] \ F . Simple computations show that
|P(s, l)| = n − l + 1
2 + n + 1 = s + 2c + 1
2 + n + 1, (7)
|P′(s, l)| = n
2 − 2l − 1
2 + n + 1 = (6c + 4)s − 3
2 c2 − 5
2 c, (8)
|Q(s, l)| = (4c + 4)s + 4c3 − 4c
3 , (9)
|W(s, l)| = 2c+2s. (10)
For a family F, let
F (i) = F ∩ [n]
i
be the i-th layer of F . Let yF (i) be the number of i-element sets, which are not in F , that is,
yF (i) = n
i − |F (i)|.
We will write y(i) instead of yF (i) if the family is clear from the context. Recall the definition of shifting. Given a pair of indices i < j ∈ [n] and a set A ∈ 2[n] define the (i ← j)-shift Si←j(A) of A as follows.
Si←j (A) :=
(
A if i ∈ A or j ∈/ A;
(A − {j}) ∪ {i} if i ∈/ A and j ∈ A.
We say that a set A can be shifted to B if there is a sequence of (i ← j)shifts with i < j that transforms A into B. For a family F ⊂ 2[n], define the (i ← j)-shift Si←j(F ) as follows.
Si←j(F ) := {Si,j(A) : A ∈ F } ∪ {A : A, Si←j(A) ∈ F }.
We call a family F shifted, if Si←j(F ) = F for all 1 ≤ i < j ≤ n.
A family F is called an up-set if for any F ∈ F and A ⊃ F we have A ∈ F. For the proof of Theorem 3 we may restrict our attention to the families that are shifted up-sets (cf. e.g. [7] for a proof), which we assume for the rest of the paper. We will need the following simple, but very useful observation.
7

Lemma 7. If F ⊂ 2[n] is shifted and {i, j} ∈/ F , i < j, then y(2) ≥
(n+j−2i)(n−j+1)
2 . Moreover, equality is achieved only if F (2) is the family of all two-element sets that cannot be shifted to {i, j}.
Proof. A set {a, b} with a < b can be shifted to i, j iff a ≥ i and b ≥ j. It is a simple calculation to check that there are (n+j−2i)(n−j+1)
2 two-element sets that can be shifted to {i, j}. All of them are not in F because F is shifted. Equality is achieved only if all other two-element sets are in F.
The following theorem is the 2-uniform case of the Erd ̋os Matching Conjecture, proven by Erd ̋os and Gallai [5]. Later, Frankl in [7] gave a proof of this result that uses Lemma 7. We will use the same method in the proof of our main theorem, and thus we present its proof. We also state it in a bit unusual form.
Theorem 8. Let n, s be positive integers, n ≥ 2s. Suppose that F ⊂ 2[n] satisfies ν(F (2)) < s. Then y(2) ≥ min( n−s+1
2 ,n
2 − 2s−1
2 ).
Proof. As we have mentioned, we may assume that F is shifted, cf. [7]. Consider the sets {i, 2s + 1 − i}, i ∈ [s]. These sets form an s-matching, and thus at least one of them is not in F. By Lemma 7, we get
y(2) ≥ (n + 2s + 1 − 3i)(n − 2s + i)
2
for some i ∈ [1, s]. The right-hand side is upward convex as a function of i. Thus, its minimum in the interval [1, s] is attained at one of its ends. We get the bound
y(2) ≥ min
n n−s+1
2 , (n + 2s − 2)(n − 2s + 1)
2
o
.
This is the claimed bound since n
2 − 2s−1
2 = (n+2s−2)(n−2s+1)
2.
3 An overview of the proof
Let F ⊂ 2[n] be a shifted up-set with no s-matching of maximal size. We need to prove that
n
X
i=0
yF (i) ≥ min |P(s, l)|, |P′(s, l)|, |Q(s, l)|, |W(s, l)| ,
and examine when equality is achieved. As we have mentioned, we will actually prove the following stronger inequality.
3
X
i=0
yF (i) ≥ min |P(s, l)|, |P′(s, l)|, |Q(s, l)|, |W(s, l)| .
8

Note that this inequality implies Theorem 4 as well as Theorem 3. The first step in the proof is to show that F does not contain the empty set or 1-element sets. Actually, it is trivial for the empty set since its copies form a matching of an arbitrary size. For 1-element sets, we use an inductive argument. From that point, we need to concentrate on 2- and 3-element sets only.
The balance between 2- and 3-element sets in F is captured by the following key definition. The definition for even d is more transparent, so the reader may ignore the case of odd d for the moment and assume that it somehow interpolates between the even values of d.
Definition 1. Denote by d(F ) the smallest d ≥ 0 that satisfies one of the following two conditions:
• d is even and for some i ∈ 1, l + d
2 the set {i, 2l + d + 1 − i} is not in F .
• d is odd and either {1, 2l + d} ∈/ F , or for some i ∈ [3, l + d+1
2 ] the set {i, 2l + d + 2 − i} is not in F.
Since ν(F) < s, at least one of the sets {i, 2s + 1 − i}, i ∈ [s], is not in F. Thus, d = 2c satisfies the condition from Definition 1. It means that d(F ) is well-defined and d(F) ≤ 2c. (11)
Note that if d(F ) > 2k for some integer k ≥ 0, then ν(F (2)) ≥ l + k. Indeed, the sets {1, 2l+2k}, . . . {l+k, l+k+1} form an (l+k)-matching and all belong to F by the definition of d. Actually, it is not difficult to prove that ν(F (2)) ≥ l+k if and only if d(F) > 2k. The value d(F) may thus be understood as a certain half-integral refinement of ν(F (2)).
We will often use the following simple claim.
Claim 9. If F is a shifted family and d(F) ≥ d, then one of the following two conditions is satisfied:
• d is even and for some i ∈ 1, l + d
2 the set {i, 2l + d + 1 − i} is not in F .
• d is odd and either {1, 2l + d} ∈/ F , or for some i ∈ [3, l + d+1
2 ] the set {i, 2l + d + 2 − i} is not in F.
Proof. By the definition of d(F) one of these conditions is satisfied for d(F) ≤ d. Thus, we need to check, that if the condition is satisfied for some d′, then it is satisfied for d′ + 1. We consider separately the cases of odd and even d′.
• Let d′ be an even number, satisfying the condition from the definition of
d(F ), that is, for some i ∈ 1, l + d′
2 the set {i, 2l + d′ + 1 − i} is not in
F. If i = 1, then by shiftedness of F we have {i, 2l + d′ + 2 − i} = {1, 2l + (d′ + 1)} ∈/ F and thus the first part of the condition for odd d′ is satisfied. If i ≥ 2, then, again by shiftedness, {i + 1, 2l + d′ + 2 − i} ∈/ F . Since {i + 1, 2l + d′ + 2 − i} = {i′, 2l + (d′ + 1) + 2 − i′} for i′ = i + 1 ∈ [3, l + d′+2
2 ],
the second part of condition for odd d′ is satisfied.
9

• Let d′ be an odd number, satisfying the condition from the definition of
d(F ), that is, either {1, 2l + d′} ∈/ F , or for some i ∈ [3, l + d′+1
2 ] the
set {i, 2l + d′ + 2 − i} is not in F. If the first part of the condition is satisfied, then by shiftedness {1, 2l + (d′ + 1)} ∈/ F, that is, the condition for d′ + 1 is satisfied with i = 1. If the second part of the condition is satisfied, then we notice, that the set {i, 2l + d′ + 2 − i} is exactly the set {i, 2l + (d′ + 1) + 1 − i}, so the condition for d′ + 1 is satisfied with the same i and the same missing set.
In Section 5 we prove lower bounds on yF (2) in terms of d(F). The bound is somewhat similar to the bound in Theorem 8. In particular, the bound will be a minimum of some expressions, and in order to use it, we will need to consider cases depending on where the minimum is achieved. The second key ingredient of the proof is a certain averaging argument that allows us to bound yF (3) in terms of d(F). The averaging will be over a certain class of matching with a rather tricky construction. This argu-
ment is where the definition of d(F) for odd d comes from. We comment on the subtlety in the definition of d(F) after the statement of Lemma 20. In Section 6 we will use it to get several bounds on yF (3) for different regimes of d(F). Again, there will be several regimes to consider. In Section 7 we combine the bounds from Sections 5 and 6 and prove the main theorem for c ≥ 5. The nature of the problem with its multiple extremal examples forces us to do a non-trivial case analysis. The proofs of -
some technical statements are moved to Appendix A. In Appendix B, we provide the rather tedious proof of the main theorem for c ≤ 4. It uses the same ideas, but extra care is required to handle all the remaining cases.
4 Avoiding 1-element sets
In order to get rid of 1-element sets, we need to run an inductive procedure. We formalize it as follows. Assume that the following theorem holds.
Theorem 10. Let n, s, l be non-negative integers such that n = 3s − l and 0 ≤ l ≤ s. Suppose that F ⊂ 2[n] is a shifted up-set with ν(F ) < s and F ∩ [n]
1 = ∅.
Then |F| ≤ max |P(s, l)|, |P′(s, l)|, |Q(s, l)|, |W(s, l)| . Moreover, equality is achieved only if F coincides with one of these families.
Proof of Theorem 3 using Theorem 10. We prove Theorem 3 by induction on l. For l ∈ {0, 1} the statement is given by Theorem 1, together with uniqueness that is proven in [19]. In what follows, we assume that l ≥ 2. If {1} ∈/ F then by shiftedness F ∩ [n]
1 = ∅ and we are done. If {1} ∈ F then we apply induction. Let F ′ = F ∩ 2[2,n]. The family F ′ is a family of subsets of an (n − 1)-element set, ν(F′) < s − 1, and we have n − 1 = 3(s − 1) − (l − 2).
10

Note that l − 2 ≥ 0 and l − 2 < s − 1, and thus we may apply induction to F ′, getting that
|F ′| ≥ min |P′(s − 1, l − 2)|, |P(s − 1, l − 2)|, |Q(s − 1, l − 2)|, |W(s − 1, l − 2)| ,
where the complement is taken with respect to 2[2,n]. Clearly, |F | ≥ |F ′|, and so Theorem 3 is implied by the following claim.
Claim 11. We have
min |P′(s − 1, l − 2)|, |P(s − 1, l − 2)|, |Q(s − 1, l − 2)|,
|W(s − 1, l − 2)| > min |P′(s, l)|, |P(s, l)|, |Q(s, l)|, |W(s, l)| .
Moreover,
min |P′(s − 1, l − 2)(≤3)|, |P(s − 1, l − 2)(≤3)|, |Q(s − 1, l − 2)(≤3)|,
|W(s − 1, l − 2)(≤3)| > min |P′(s, l)(≤3)|, |P(s, l)(≤3)|, |Q(s, l)(≤3)|, |W(s, l)(≤3)| .
(We need the moreover part for Theorem 4). The proof the claim is a technical check, and we defer it to the appendix. This completes the proof of the implication.
In what follows, we need to prove Theorem 10. Concretely, we need to lower bound y(2) + y(3).
5 Bounds on y(2)
In this section, we prove a lower bound on yF (2) that depends on d(F). The definition of d(F) depends on its parity, which is why we get slightly different bounds and proofs for odd and even d(F). We start with the easier case of even d.
Lemma 12. Let d ≥ 0 be even. If F ⊂ 2[n] is a shifted family with d(F ) ≤ d then
y(2) ≥ min
(
(4l + 3c + d − 2)(3c − d + 1)
2 , (l + 3c − d
2 + 1)(l + 3c − d
2) 2
)
. (12)
Moreover, equality is achieved only if F (2) = [2l+d−1]
2 or F (2) = F ∈ n
2:
F ∩ [l + d
2 − 1] ̸= ∅ .
Proof. The proof is very similar to Frankl’s proof of the Erdo ̋s-Gallai theorem. By Claim 9 for some i ∈ [l + d
2 ] the set {i, 2l + d + 1 − i} is not in F. By Lemma 7,
y(2) ≥ (n + 2l + d − 3i + 1)(n − 2l − d + i)
2 = (4l + 3c + d − 3i + 1)(3c − d + i)
2.
11

This bound is upward convex as a function of i, and thus the minimum on the interval [1, l + d
2 ] is attained at one of its ends. Substituting i = 1, d
2 in the
inequality above, we get that (12) holds. Equality is attained only if i ∈ {1, d
2} and F (2) consists of all sets that cannot be shifted to {i, 2l + d + 1 − i}. It implies that F (2) must have the form as stated in the moreover part.
We get the following claim as an immediate corollary.
Claim 13. Theorem 10 holds for d(F ) = 0.
Proof. Indeed, Lemma 12 for d(F) = 0 states that
yF (2) ≥ min (4l + 3c − 2)(3c + 1)
2 , (l + 3c + 1)(l + 3c)
2 = min yP′(s,l)(2), yP(s,l)(2)
and equality is achieved only if F (2) = P′(s, l)(2) or F (2) = P(s, l)(2). At the same time, F does not contain 0- or 1-element sets and both P′(s, l) and P(s, l) contain all sets of size at least 3. Altogether, we get that |F | ≤ max |P′(s, l)|, |P(s, l)| and equality is achieved only if F ∈ {P(s, l), P′(s, l)}.
The case of odd d requires a more careful analysis. In this case, we use the inequality (11) which states that d(F) ≤ 2c.
Lemma 14. Let d be a positive odd integer, d ≤ 2c. If F ⊂ 2[n] is a shifted family with d(F ) = d, then
y(2) ≥ min
n (4l + 3c + d − 2)(3c − d + 1)
2 , (l + 3c − d−1
2 )(l + 3c − d+1
2) 2
o
. (13)
Moreover, equality is achieved only if F (2) = [2l+d−1]
2 or F (2) = {F ∈ n
2:
F ∩ [l + d−1
2 ] ̸= ∅}.
Combining the bounds (12) and (13), we get the following bound.
y(2) ≥ max
(
(4l + 3c + d − 2)(3c − d + 1)
2 , (l + 3c − ⌈ d
2 ⌉ + 1)(l + 3c − ⌈ d
2 ⌉) 2
)
.
(14)
Proof of Lemma 14. We consider cases depending on the missing set. If {1, 2l+ d} ∈/ F , then by Lemma 7 we have y(2) ≥ (4l+3c+d−2)(3c−d+1)
2 , and equality is
achieved only if F (2) = [2l+d−1]
2 . Otherwise, one of the sets {i, 2l + d + 2 − i}
for some i ∈ [3, l + d+1
2 ] is not in F . By Lemma 7, we get
y(2) ≥ (4l + 3c + d − 3i + 2)(3c − d + i − 1)
2 =: f (i).
Again, by convexity y(2) ≥ min f (3), f l + d+1
2 . If l + d+1
2 = 3 then the two expressions coincide. If in that case y(2) = f (3) then by Lemma 7
F (2) =
n
F∈ n
2 :F∩
h
l+ d−1
2
i
̸= ∅
o
.
12

The family F (2) must have the same form if y(2) = f l + d+1
2 < f (3). To complete the proof of the lemma, it is sufficient to show that either f (3) > f l + d+1
2 or f (3) > (4l+3c+d−2)(3c−d+1)
2 whenever l + d+1
2 ≥ 4. This is shown in the following technical claim, which proof is deferred to the appendix.
Claim 15. For l + d+1
2 ≥ 4 at least one of the inequalities
(4l + 3c + d − 2)(3c − d + 1)
2 < (4l + 3c + d − 7)(3c − d + 2)
2 (15)
and
(l + 3c − d−1
2 )(l + 3c − d+1
2)
2 < (4l + 3c + d − 7)(3c − d + 2)
2 (16)
is satisfied.
This completes the proof of the lemma.
Often it will be more convenient to use Lemmas 12 and 14 in the following form. Again, the proof is a calculation that is deferred to the appendix.
Corollary 16. Let F ⊂ 2[n] be a shifted up-set without 1-element sets. Let d(F) = d ≤ 2c. Then either
|P′(s, l)| − (yF (0) + yF (1) + yF (2)) ≤ (4l + d − 3)d
2 or
|P(s, l)| − (yF (0) + yF (1) + yF (2)) ≤ (2l + 6c − ⌈ d
2 ⌉ + 1)⌈ d
2⌉
2.
6 Bounds on y(3)
In this section, we will prove several bounds on yF (3) that depend on d(F). We will use different bounds for different intervals of d(F): small constant d(F), d(F) ≤ c + 1 and d(F) ≥ c + 2. One reason why the bounds we use change near d(F) = c is that for one of the extremal families F = Q(s, l) we have d(F) = c. Recall that we treated the case d(F ) = 0 in Claim 13. In what follows, d(F) > 0. We will start with the bound that will be used for small d(F) and for l small compared to c.
Lemma 17. If d(F ) > 0 and ν(F ) < s, then y(3) ≥ 3c−1
2 . Moreover, equality
is achieved only if F contains all sets in [n]
3 \ [2l+1,n]
3.
Proof. Recall that s = l + c. Since d > 0 the family F contains an l-matching {1, 2l}, . . . , {l, l + 1}. Consequently, ν(F ∩ 2[2l+1,n]) < c. At the same time, the set [2l + 1, n] has size 3c. Consider any c-matching in [2l+1,n]
3 . It must
contain at least one element in F . Averaging over all c-matchings in [2l+1,n]
3,
we get that yF (3) ≥ yF∩2[2l+1,n] (3) ≥ 1
c
3c
3 = 3c−1
2 . The first inequality turns
into an equality if and only if F contains all sets in [n]
3 \ [2l+1,n]
3.
13

In the regime d = d(F) ≤ c + 1 we will need to consider two subcases. The easy case is when ν(F ∩ [2l+d,n]
3 ) < c − d + 1. In that case, we will be able
to bound y(3) using missing sets in [2l+d,n]
3 . Concretely wee make use of the following inequality from [7] that generalizes the Erd ̋os–Ko–Rado theorem.
Lemma 18 ([7]). Let G ⊂ [n]
k , ν(G) < s, n ≥ ks. Then |G| ≤ (s − 1) n−1
k−1 .
For d ≥ 1 we have n − 2l − d + 1 = 3c − d + 1 ≥ 3(c − d + 1). Thus, we can apply Lemma 18 and get
y(3) ≥ n − 2l − d + 1
3 − (c − d) n − 2l − d
2
= 3c − d + 1
3 − (c − d) 3c − d
2 = (2d + 1)(3c − d)(3c − d − 1)
6,
provided ν F ∩ [2l+d,n]
3 < c − d + 1.
Next, let us deal with the case ν(F ∩ [2l+d,n]
3 ) ≥ c − d + 1. This is one of the cruxes of the proof. The main idea of the bound for this case is as follows. Fix a (c − d + 1)-matching in F ∩ [2l+d,n]
3 and consider s-matchings that consist of three parts:
(i) this fixed (c − d + 1)-matching in F ∩ [2l+d,n]
3;
(ii) some l-matching in F ∩ [2l+d−1]
2;
(iii) d − 1 3-element sets, each containing one element in [2l + d − 1] and two elements in [2l + d, n].
The sets from the first two groups belong to F. Since ν(F) < s, at least one of the sets from this s-matching must belong to F, and it must be one of the d − 1 sets from the third group. Averaging over all such matchings gives us a lower bound on y(3). Getting sufficiently many ‘missing’ sets from the third group requires care. Implementation of these ideas depends on the parity of d(F). We start with the easier case of odd d.
Lemma 19. Let F ⊂ 2[n] be a shifted family with ν(F ) < s. Suppose that d(F ) ≥ d, where d ≤ c + 1 and d is odd. If ν F ∩ [2l+d,n]
3 ≥ c − d + 1, then
y(3) ≥ (2l + d − 1)(2d − 3).
Proof. Put k = d−1
2 . By the definition of d(F), the sets {1, 2l + 2k}, . . . , {l +
k, l + k + 1} all belong to F . They form an (l + k)-matching πL in F ∩ [2l+d−1]
2. Let F1, . . . , Fc−d+1 be a (c − d + 1)-matching in F ∩ [2l+d,n]
3 , and put
Y := [2l + d, n] \
c−d+1
[
i=1
Fi.
14

Note that |Y | = (2l + 3c) − (2l + d − 1) − 3(c − d + 1) = 2d − 2 = 4k. Let G := [2l + d − 1] × Y
2 be the family of three-element sets that contain one element from [2l + d − 1] and two elements from Y . We will prove that
|G ∩ F| ≥ (2l + 2k)(4k − 1) = (2l + d − 1)(2d − 3),
and thus that y(3) ≥ (2l + d − 1)(2d − 3). Construct a random s-matching π in (F ∩ [2l+d−1]
2 ) ∪ (F ∩ [2l+d,n]
3 )∪G by the following procedure.
• Add F1, . . . , Fc−d+1 to π.
• Choose l sets from πL at random and add them to π. Let Z be the set of d − 1 elements in [2l + d − 1] that are not covered by these l sets.
• So far we included s − d + 1 sets from F into π. We have d − 1 uncovered elements in Z and 2d − 2 uncovered elements in Y .
• Choose a random (d − 1)-matching on Z ∪ Y , consisting of 3-element sets that contain one element from Z and two elements from Y and add it to π.
Let ξ be a random variable equal to the number of sets from G ∩ F in π. We use a double counting argument for E ξ. If ξ = 0, then all s sets from π are in F. It contradicts ν(F ) < s. Thus, ξ ≥ 1 and, consequently, E ξ ≥ 1. Take a set {x, y1, y2} ∈ G with x ∈ [2l + d − 1] and y1, y2 ∈ Y . We have Pr[x ∈ Z] = k
l+k since, in order to be in Z, x must be in one of the k sets from πL that are not added to π. Next, we have
Pr[{x, y1, y2} ∈ π|x ∈ Z] = |Y |
2
−1
= 2d − 2
2
−1
,
since x is matched with a random pair of elements from Y . Combining these, we get
Pr[{x, y1, y2} ∈ π] = k
l+k
2d − 2 2
−1
.
By linearity of expectation, we have E ξ = |G ∩ F| · k
l+k
2d−2 2
−1. Combining it with E ξ ≥ 1, we get
y(3) ≥ |G ∩ F| ≥ l + k
k
2d − 2
2 = 2l + d − 1
d−1
2d − 2
2=
= (2l + d − 1)(2d − 3).
The case of even d is more complicated, and the bound on y(3) is slightly weaker. The averaging argument in the coming lemma is the reason for the more complicated definition of d(F ) in the odd case.
15

Lemma 20. Let F ⊂ 2[n] be a family with ν(F ) < s. Suppose that d(F ) ≥ d, and d ∈ [2, c + 1] is an even integer. Let X ⊂ [2l + d − 1] be a set such that for any x ∈ X the family F ∩ [2l+d−1]\{x}
2 contains an l + d−2
2 -matching. If
ν(F ∩ [2l+d,n]
3 ) ≥ c − d + 1, then
y(3) ≥ |X| 2d − 2
2 1 − (2l + d − 2)(d − 2)
(d − 2)|X| + 2l .
Note, that if |X| = 2l + d − 1 then we get y(3) ≥ (2l + d − 1)(2d − 3) as in Lemma 19. However, we could only guarantee |X| = 2l + d − 2, as we will show in Lemma 21. Thus, we get a slightly worse bound. The size of X that we could guarantee depends on the condition for odd d in the definition of d(F) and is the reason for the ‘exceptional’ set {1, 2l+d}. It is now appropriate to illustrate the subtlety in the definition of d(F) in this case. On the one hand, if, by analogy with the case of even d-
, we chose a requirement that {i, 2l + d + 1 − i} ∈/ F for some i ∈ [1, l + d−1
2 ], we would only be able to guarantee |X| ≥ 2l+d
2, which is not good enough. If, on the other hand, we change {1, 2l + d} ∈/ F to {2, 2l + d} ∈/ F, we could reach the bound |X| = 2l + d − 1. But then the bound on y(2) in Lemma 14 becomes worse and ultimately insufficient for our purposes.
Proof. Let k = d−2
2 . For x ∈ X let πx be an (l + k)-matching in F ∩
[2l+d−1]\{x}
2 . Let F1, . . . , Fc−d+1 be a (c − d + 1)-matching in F ∩ [2l+d,n]
3 and
Y = [2l+d, n]\Sc−d+1
i=1 Fi. Note, that |Y | = (2l+3c)−(2l+d−1)−3(c−d+1) =
2d − 2. Let G := X × Y
2 be a family of 3-element sets, containing one element from X and two elements from Y . We shall prove that
|G ∩ F| ≥ |X| 2d − 2
2 1 − (2l + d − 2)(d − 2)
(d − 2)|X| + 2l .
Construct a random s-matching π in (F ∩ [2l+d−1]
2 ) ∪ (F ∩ [2l+d,n]
3 )∪G by the following procedure.
• Add F1, . . . , Fc−d+1 to π.
• Choose z ∈ X at random.
• Choose l sets from πz at random and add them to π. Let Z be the set of d − 1 elements in [2l + d − 1] that are not covered by these l sets. That is, Z consists of z and the union of k random sets from πz.
• So far, we included s − d + 1 sets from F into π. We have d − 1 uncovered elements in Z and 2d − 2 uncovered elements in Y .
• Choose a random (d − 1)-matching on Z ∪ Y , consisting of 3-element sets that contain one element in Z and two elements in Y , and add it to π.
16

Let ξ be a random variable equal to the number of sets from G ∩ F in π.1 If ξ = d − 1, then all s sets from π are in F . It contradicts ν(F ) < s, and so ξ ≤ d − 2. Therefore, E ξ ≤ d − 2. Take a set {x, y1, y2} ∈ G with x ∈ X and y1, y2 ∈ Y . We have Pr[x ∈ Z] =
1
|X| + |X|−1
|X |
k
k+l = k|X|+l
(l+k)|X| , where the first summand is the probability that z = x, and the second summand is the probability that z ̸= x, but x lies in one of the k sets from πz that are not added in π. As in Lemma 19, x is matched to a random pair of elements in Y , and we get
Pr[{x, y1, y2} ∈ π|x ∈ Z] = |Y |
2
−1
= 2d − 2
2
−1
.
Combining these, we have
P [{x, y1, y2} ∈ π] = k|X| + l
(l + k)|X|
2d − 2 2
−1
and E ξ = |G ∩ F | · k|X|+l
(l+k)|X |
2d−2 2
−1. Combining it with E ξ ≤ d − 2, we get
|G ∩ F| ≤ (d − 2) (l + k)|X|
k|X| + l
2d − 2 2
and
y(3) ≥ |G| − |G ∩ F| ≥ |X| 2d − 2
2 − (d − 2) (l + k)|X|
k|X| + l
2d − 2
2=
= |X| 2d − 2
2 1 − (d − 2)(l + k)
k|X| + l = |X| 2d − 2
2 1 − (d − 2)(2l + d − 2)
(d − 2)|X| + 2l .
The next lemma guarantees that we can take |X| ≥ 2l + d − 2 when applying Lemma 20.
Lemma 21. Let F ⊂ 2[n] be a shifted family with ν(F ) < s. Let d = d(F ) ≥ 2 be even. Then for any x ∈ [2, 2l + d − 1] the family F ∩ [2l+d−1]\{x}
2 contains
an (l + d−2
2 )-matching πx.
Proof. By the definition of d(F ), the family F ∩ [2l+d−1]\{2}
2 contains an (l +
d−2
2 )-matching π2 = {{1, 2l + d − 1}, {3, 2l + d − 2}, {4, 2l + d − 3}, . . . , {l + d
2, l+
d
2 + 1}}. For x ≥ 2 let {x, y} be the set in π2 that contains x. Since F is shifted, we get {2, y} ∈ F. Let πx be a matching which is obtained from π2 by replacing {x, y} by {2, y}. Then πx is an (l + d−2
2 )-matching in F ∩ [2l+d−1]\{x}
2.
Combining these two statements, we get the following.
1Note the discrepancy in the definition of ξ with the previous lemma.
17

Corollary 22. Let F ⊂ 2[n] be a shifted family with ν(F ) < s. Let d ∈ [2, c + 1] be an even integer. If d(F ) = d, ν(F ) < s and ν(F ∩ [2l+d,n]
3 ) ≥ c − d + 1, then
y(3) ≥ (2l + d − 2)(2d − 3) 1
1 + (d−2)2
2l(d−1)
.
Proof. Apply Lemma 20 with X = [2, 2l + d − 1]. Lemma 21 guarantees that the condition on X is satisfied. We get
y(3) ≥ (2l + d − 2) 2d − 2
2 1 − (2l + d − 2)(d − 2)
(d − 2)(2l + d − 2) + 2l
= (2l + d − 2)(2d − 3) 1
1 + (d−2)2
2l(d−1)
.
Lemmas 18, 19 and Corollary 22 together are enough to cover the range 5 ≤ d(F ) ≤ c + 1, l ≥ l0(c), where l0(c) is some linear function. In the case d(F) ≥ c + 2 we again distinguish cases depending on the relation between l and c. For small l = l(c) we also use Lemma 17. For large l = l(c) we use the following corollary of Lemmas 19 and 20.
Lemma 23. Let F ⊂ 2[n] be a shifted family with ν(F ) < s and d(F ) ≥ c + 2. Then y(3) ≥ (2l + c)(2c − 1).
Proof. Assume that c + 1 is odd. Then we could apply Lemma 19 with d = c + 1 and get the inequality. Next, assume that c + 1 is even. Since d(F ) ≥ c + 2, the family F contains the matching {{1, 2l + c + 1}, . . . , {l + c+1
2 , l + c+3
2 }}.
Removing the first set, we see that F ∩ [2,2l+c]
2 contains an (l+c)-matching. By
shiftedness, F ∩ [2l+c]\{x}
2 contains an (l + c)-matching for any x ∈ [2l + c]. We conclude that the conditions of Lemma 20 hold with d = c+1 and X = [2l+c] = [2l+d−1]. Therefore, we conclude that y(3) ≥ (2l+d−1)(2d−3) = (2l+c)(2c−1) in this case as well.
7 Proof of Theorem 10 for c ≥ 5
In this section, we combine the bounds from Sections 5 and 6 and prove Theorem 10 for c ≥ 5. Also for c = 3 and c = 4 we deal with all cases, except d ∈ {3, 4}. We record the values y(2) + y(3) for the families P(s, l), P′(s, l) Q(s, l) that may be obtained by straightforward calculations:
yP(s,l)(2) + yP(s,l)(3) = l + 3c + 1
2 , (17)
yP′(s,l)(2) + yP′(s,l)(3) = (4l + 3c − 2)(3c + 1)
2 , (18)
yQ(s,l)(2) + yQ(s,l)(3) = (4c + 2)l + 4c3 + 12c2 − c − 3
3 . (19)
18

Recall that (14) holds for yF (2). As a simplifying step, let us bound the following expression: min{yP(s,l)(2) + yP(s,l)(3), yP′(s,l)(2) + yP′(s,l)(3)} − yF (2). If the minimum in (14) is attained on the first expression, then we subtract it from yP′(s,l)(2) + yP′(s,l)(3). If the minimum in (14) is attained on the second expression, then we subtract it from yP(s,l)(2) + yP(s,l)(3). As a result, skipping some calculations, we get that if the minimum in (14) is attained on the first expression, th-
en
yP′(s,l)(2) + yP′(s,l)(3) − yF (2) ≤ d(4l + d − 3)
2
and it is sufficient to show
yF (3) > d(4l + d − 3)
2 (20)
and if the minimum in (14) is attained on the second expression, then
yP(s,l)(2) + yP(s,l)(3) − yF (2) ≤
ld 2
m
2l + 6c − d
2 +1
2
and it is sufficient to show
yF (3) >
ld 2
m
2l + 6c − d
2 +1
2 . (21)
In the cases when this does not hold, we will show that
yF (2) + yF (3) ≤ yQ(s,l)(2) + yQ(s,l)(3). (22)
and equality is only possible if F = Q(s, l).
7.1 d ∈ [4]
We consider cases d ∈ {1, 2} and d ∈ {3, 4} separately. For d(F ) ∈ {1, 2} we use Lemma 17 to bound yF (3) and (14) to bound yF (2). (We group these two cases since we have the same bound on yF (3) for d = 1, 2.) Then we consider cases, depending on whether the minimum in (14) is attained on the first or on the second argument, as well as depending on whether l is big or small compared to c. For each of these cases, we prove one of (21), (20), (22) with strict inequality.
Lemma 24. Let F be a shifted family without one-element sets with ν(F) < s, d(F) = d. If d ∈ {1, 2} and c ≥ 3, then |F | < max{|P(s, l)|, |P′(s, l)|, |Q(s, l)|}.
Note that in this lemma we require only c ≥ 3 instead of c ≥ 5, and thus we will be able to use this lemma when dealing with small cases in the appendix.
19

Proof. By (14) we get
yF (2) ≥ min( (4l + 3c)(3c − 1)
2 , (l + 3c)(l + 3c − 1)
2)
and by Lemma 17 we get
yF (3) ≥ 3c − 1
2.
If the minimum in (14) is attained on the first argument and l < 9c2−9c+4
8 , then we prove (20).
yF (3) ≥ 3c − 1
2 > (4l − 1) ≥ d(4l + d − 3)
2.
If the minimum in (14) is attained on the first argument and l > 4c2−7c+3
6, then, using assumption c > 2, below we show the validity of (22) with strict inequality. (We skip some simplifying calculations in the first inequality below.)
yF (2) + yF (3) ≥ (yQ(s,l)(2) + yQ(s,l)(3)) + (2c − 4)l − 4c3 − 15c2 + 17c − 6
3=
= (yQ(s,l)(2) + yQ(s,l)(3)) + (2c − 4)(l − 4c2 − 7c + 3
6 ) > yQ(s,l)(2) + yQ(s,l)(3).
Since 4c2−7c+3
6 < 9c2−9c+4
8 for c ≥ 0, at least one of the inequalities l <
9c2 −9c+4
8 and l > 4c2−7c+3
6 is satisfied. Therefore, if the minimum in (14) is
attained in the first argument, then |F| > min{|P′(s, l)|, |Q(s, l)|}. If the minimum in (14) is attained on the second argument and l <
9c2 −15c+2
2 , then we prove (21).
yF (3) ≥ 3c − 1
2 > (l + 3c) =
ld 2
m
2l + 6c − d
2 +1
2.
If the minimum in (14) is attained on the second argument, l ≥ 9c2−15c+2
2
and l > 4(4c3−15c2+17c−6)
3(9c2−19c−8) , then we get (22) with strict inequality.
yF (2) + yF (3) ≥ (yQ(s,l)(2) + yQ(s,l)(3)) + l
2 − 2c + 5
2 l − 4c3 − 15c2 + 17c − 6
3
≥ (yQ(s,l)(2) + yQ(s,l)(3)) + 9c2 − 15c + 2
4 − 2c + 5
2 l − 4c3 − 15c2 + 17c − 6
3
= (yQ(s,l)(2) + yQ(s,l)(3)) + 9c2 − 19c − 8
4 l − 4c3 − 15c2 + 17c − 6
3
> yQ(s,l)(2) + yQ(s,l)(3).
Since for c ≥ 3 we have 9c2−15c+2
2 > 4(4c3−15c2+17c−6)
3(9c2−19c−8) , one of the con
ditions l < 9c2−15c+2
2 or (l ≥ 9c2−15c+2
2 and l > 4(4c3−15c2+17c−6)
3(9c2−19c−8) ) is sat
isfied. Therefore, if the minimum is attained on the second argument, then |F| > min{|P(s, l)|, |Q(s, l)|}.
20

The case d(F) ∈ {3, 4} is intermediate between the cases d(F) ∈ {1, 2} and d(F) ≥ 5. If minimum in Lemma 12 is attained in the first argument, we argue as in the case d(F) ≥ 5 and if it is attained in the second argument, we argue as in the case d(F ) ∈ {1, 2}.
Lemma 25. Let F be a shifted family without one-element sets with ν(F) < s, d(F) = d. If d ∈ {3, 4} and c ≥ 5, then |F | < max{|P(s, l)|, |P′(s, l)|, |Q(s, l)|}.
Proof. By (14) we get
yF (2) ≥ min
n (4l + 3c + d − 2)(3c − d + 1)
2 , (l + 3c − ⌈ d
2 ⌉ + 1)(l + 3c − ⌈ d
2 ⌉)
2
o
.
If the minimum in (14) is attained in the second argument then we argue as in Lemma 24. We use Lemma 17 to bound y(3).
If l < 9c2−21c+4
4 , then we establish (21).
yF (3) ≥ 3c − 1
2 > (2l + 6c − 1) ≥
ld 2
m
2l + 6c − d
2 +1
2.
If l ≥ 9c2−21c+4
4 and l > 8(4c3−15c2+26c−9)
3(9c2−29c−24) , then
yF (2) + yF (3) ≥ (yQ(s,l)(2) + yQ(s,l)(3)) + l
2 − 2c + 7
2 l − 4c3 − 15c2 + 26c − 9
3
≥ (yQ(s,l)(2) + yQ(s,l)(3)) + 9c2 − 21c + 4
8 − 2c + 7
2 l − 4c3 − 15c2 + 26c − 9
3
= (yQ(s,l)(2) + yQ(s,l)(3)) + 9c2 − 29c − 24
8 l − 4c3 − 15c2 + 26c − 9
3
> yQ(s,l)(2) + yQ(s,l)(3).
Since for c ≥ 5 we have 9c2−21c+4
4 > 8(4c3−15c2+26c−9)
3(9c2−29c−24) , one of condi
tions l < 9c2−21c+4
4 or (l ≥ 9c2−21c+4
4 and l > 8(4c3−15c2+26c−9)
3(9c2−29c−24) ) is sat
isfied. Therefore, if the minimum is attained in the second argument, then |F| > min(|P(s, l)|, |Q(s, l)|).
Below, we deal with the case when the minimum in (14) is attained on the first argument. Here we need a more complicated argument. The same argument will be used in the next subsection for moderate d. We distinguish two more cases: whether ν(F ∩ [2l+d,n]
3 ) ≥ c − d + 1 or ν(F ∩ [2l+d,n]
3 ) < c − d + 1. If
ν(F ∩ [2l+d,n]
3 ) ≥ c − d + 1, then we use Lemma 19 for d = 3 and Lemma 20
for d = 4. If ν(F ∩ [2l+d,n]
3 ) < c − d + 1, then we use Lemma 18.
If d = 3 and ν(F ∩ [2l+d,n]
3 ) ≥ c − d + 1, then by Lemma 19 we get
y(3) ≥ 3(2l + 2) > 6l = d(4l + d − 3)
2
and thus (20) is proven.
21

If d = 4 and ν(F ∩ [2l+d,n]
3 ) ≥ c − d + 1, then by Corollary 22 we get
y(3) ≥ 5(2l + 2) · 1
1+ 2
3l
.
Thus, to get (20) it is sufficient to check
5(2l + 2) · 1
1+ 2
3l
> 8l + 2. (23)
Indeed, for l ≥ 3 we get
5(2l + 2) · 1
1+ 2
3l
≥ 90
11 (l + 1) > 8l + 2.
For l = 2 the left-hand side of (23) equals 45
2 and the right-hand side of (23) equals 18. For l = 3 the left-hand side (23) equals 12 and the right-hand side of (23) equals 10. Finally, we need to deal with the case yF (2) ≥ (4l+3c+d−2)(3c−d+1)
2 and ν(F ∩
[2l+d,n]
3 ) < c − d + 1. Note, that in this case we use the assumption d ∈ {3, 4}
only to prove that the desired inequality is strict. Since ν(F ∩ [2l+d,n]
3 ) ≥ 0,
the condition ν(F ∩ [2l+d,n]
3 ) < c − d + 1 implies d ≤ c.
Let F ′ = F ∩ [2l+d,n]
3 . Since ν(F ′) ≤ c − d, by Lemma 18 we have |F ′| ≤
(c − d) 3c−d
2 . Therefore,
yF (3) ≥ yF′ (3) ≥ 3c − d + 1
3 −(c−d) 3c − d
2 = (2d + 1)(3c − d)(3c − d − 1)
2.
Combining bounds on yF (2) and yF (3), we get yF (2) + yF (3) ≥ fl,c(d), where
fl,c(d) := (2d + 1)(3c − d)(3c − d − 1)
2 + (4l + 3c + d − 2)(3c − d + 1)
2.
Since f ′′
l,c(d) = 6d − 12c + 2 < 0 for 0 ≤ d ≤ c and c ≥ 1, we get yF (2) +
yF (3) ≥ min(fl,c(0), fl,c(c)). Since fl,c(0) = yP′(s,l)(2) + yP′(s,l)(3) + 3c(3c−1)
2> yP′(s,l)(2) + yP′(s,l)(3) and fl,c(c) = yQ(s,l)(2) + yQ(s,l)(3), we get yF (2) + yF (3) ≥ min yP′(s,l)(2) + yP′(s,l)(3), yQ(s,l)(2) + yQ(s,l)(3) and equality holds only if d = c. Moreover, F contains no sets of size ≤ 2 and both P′(s, l) and Q(s, l) contain all sets of size ≥ 4. Therefore, |F | ≤ max{|P′(s, l)|, |Q(s, l)|}. If equality holds, then d = c. Since it contradicts the assumption d ∈ {3, 4} and c ≥ 5, we get that |F| < max(|P′(s, l)|, |Q(s, l)|).
7.2 Moderate d
In this subsection we will deal with the case of moderate d(F ), that is, the case 5 ≤ d(F ) ≤ c + 1. We consider two subcases: ν(F ∩ [2l+d,n]
3 ) ≥ c − d + 1 and
ν(F ∩ [2l+d,n]
3 ) < c − d + 1. In the first case, in order to bound yF (3) we use Lemmas 20 and 19 or Lemma 17, depending on the relation between l and c. In the second case, we use Lemma 18 to bound yF (3).
22

Lemma 26. Let d(F) = d be odd integer, 5 ≤ d ≤ c+1. If F is a family without singletons such that d(F ) = d, ν(F ) < s and ν(F ∩ [2l+d,n]
3 ) ≥ c − d + 1, then
|F | < max{|P(s, l)|, |P′(s, l)|}.
Proof. As we mentioned in the beginning of this section, it is sufficient to prove (20) and (21). Inequality (20) is an immediate corollary of Lemma 19. Indeed, by Lemma 19 we have
y(3) ≥ (2l + d − 1)(2d − 3) = (4l + 2d − 2)(2d − 3)
2 > (4l + d − 3)d
2.
To prove (21) we consider two cases: l ≤ 6c − 27 and l ≥ 6c − 26. If l ≤ 6c − 27, we use Lemma 17 and get
y(3) ≥ 3c − 1
2 = (2(6c − 27 + 56
c+2 ) + 6c) c+2
2
2 > (2l + 6c − d
2+1
2 )( d+1
2)
2.
If l ≥ 6c − 26, we use Lemma 19 and for d ≥ 5, l ≥ 1 get
y(3) ≥ (2l + d − 1)(2d − 3)
= (3l + 26 − d
2+1
2 ) d+1
2
2 + 13
4 d − 27
4 l + 17
8 d2 − 23
2 d − 29
8
≥ (3l + 26 − d
2+1
2 ) d+1
2
2 + 17
8 d2 − 33
4 d − 83
8 > (3l + 26 − d
2+1
2 ) d+1
2
2 ≥ (2l + 6c − d
2+1
2 ) d+1
2
2.
In the second inequality we used l ≥ 1 and 13
4 d− 27
4 > 0. In the fourth inequality we used d ≥ 5.
Lemma 27. Let d(F) = d be even integer, 6 ≤ d ≤ c+1. If F is a shifted family without singletons such that d(F ) = d, ν(F ) < s and ν(F ∩ [2l+d,n]
3 ) ≥ c−d+1,
then |F | < max{|P(s, l)|, |P′(s, l)|}.
The proof of Lemma 27 is very similar to the proof of Lemma 26. The only difference is that we need to consider the cases of small and large l both for proving (20) and (21), because Corollary 22 provides us with a slightly worse bound than Lemma 19. We deferred the proof to the appendix. Next, we deal with the case ν(F ∩ [2l+d,n]
3 ) < c − d + 1. We use almost the same argument as in the end of the proof of Lemma 25. The main difference is that now we do not know whether minimum in (14) is achieved on the first or on the second argument. Thus, we need to consider these two cases separately.
Lemma 28. Let d(F) = d be an integer, d ≥ 5. If F is a shifted family without one-element sets such that d(F ) = d and ν(F ∩ [2l+d,n]
3 ) < c − d + 1, then
|F| ≤ max{|P(s, l)|, |P′(s, l)|, |Q(s, l)|}. Moreover, equality is attained only if F = Q(s, l).
23

Proof. Since ν(F ∩ [2l+d,n]
3 ) ≥ 0, the condition ν(F ∩ [2l+d,n]
3 ) < c−d+1 implies d ≤ c.
Let F ′ = F ∩ [2l+d,n]
3 . Since ν(F ′) ≤ c − d, by Lemma 18 we have |F ′| ≤
(c − d) 3c−d
2 . Therefore,
yF (3) ≥ yF′ (3) ≥ 3c − d + 1
3 − (c − d) 3c − d
2
= (2d + 1)(3c − d)(3c − d − 1)
2 . (24)
We relax the inequality (14) to
yF (2) ≥ max
(
(4l + 3c + d − 2)(3c − d + 1)
2 , (l + 3c − d−1
2 )(l + 3c − d+1
2) 2
)
(25)
to make the right-hand side of the inequality continuous as a function of d. Then we consider two cases: whether the minimum is attained on the first or on the second argument. If the minimum in (25) is attained on the first argument, combining (24) and (25), we have yF (2) + yF (3) ≥ fl,c(d), where
fl,c(d) := (2d + 1)(3c − d)(3c − d − 1)
2 + (4l + 3c + d − 2)(3c − d + 1)
2.
Since f ′′
l,c(d) = 6d − 12c + 2 < 0 for 0 ≤ d ≤ c and c ≥ 1, we get yF (2) +
yF (3) ≥ min(fl,c(0), fl,c(c)). Since fl,c(0) = yP′(s,l)(2) + yP′(s,l)(3) + 3c(3c−1)
2> yP′(s,l)(2)+yP′(s,l)(3) and fl,c(c) = yQ(s,l)(2)+yQ(s,l)(3), we get yF (2)+yF (3) ≥ min(yP′(s,l)(2) + yP′(s,l)(3), yQ(s,l)(2) + yQ(s,l)(3)) and equality holds only if d = c. Moreover, F contains no sets with size less then 2 and both P′(s, l) and Q(s, l) contain all sets with size at least 4. Therefore, |F| ≤ max(|P′(s, l)|, |Q(s, l)|). If equality holds, then d = c, consequently, ν(F ∩ [2l+c,n]
3 ) ≤ 0, that is, F ∩
[2l+d,n]
3 = ∅ and F (3) ⊂ Q(s, l)(3). Moreover, equality also holds in the bound
on yF (2), therefore, F (2) = [2l+c−1]
2 . Since F contains no singletons, attaining the equality implies that F ⊂ Q(s, l) and therefore F = Q(s, l). If the minimum in (25) is attained on the second argument, we get yF (2) + yF (3) ≥ gl,c(d), where
gl,c(d) := (2d + 1)(3c − d)(3c − d − 1)
2 + (l + 3c − d
2+1
2 )(l + 3c − d
2−1
2)
2.
Again, we note, that g′′
l,c(d) = 6d − 12c + 13
4 < 0 for 0 ≤ d ≤ c, c ≥ 1 and therefore yF (2) + yF (3) ≥ min(gl,c(0), gl,c(c)). For further analysis, we need to mention that the minimum in (25) is attained on the second argument if and only if l ≤ 6c + 7
2−5
8 d. (To solve the inequality (4l+3c+d−2)(3c−d+1)
2≥
(l+3c− d
2+1
2 )(l+3c− d
2−1
2)
2 , it is convenient to rewrite it as (n+2k−2)(n−2k+1)
2≥
24

(n−k+ 1
2 )(n−k− 1
2)
2 , where n = 2l + 3c and k = l + d
2 .) Thus, we need to verify that for c ≥ d ≥ 5, the inequalities yF (2) + yF (3) ≥ min{gl,c(0), gl,c(c)} and l ≤ 6c + 7
2−5
8 d imply yF (2) + yF (3) > yP(s,l)(2) + yP(s,l)(3). Indeed,
gl,c(0) = 3c(3c − 1)
2 + (l + 3c + 1
2 )(l + 3c − 1
2)
2=
= (yP(s,l)(2) + yP(s,l)(3)) + 3c(3c − 1)
2 − 2l + 6c + 1
2
2≥
≥ (yP(s,l)(2) + yP(s,l)(3)) + 9c2 − 21c − 15
2
2 > (yP(s,l)(2) + yP(s,l)(3))
and
gl,c(c) = (2c + 1)(2c)(2c − 1)
6 + (l + 5
2c + 1
2 )(l + 5
2c − 1
2) 2
= (yP(s,l)(2) + yP(s,l)(3)) + (2c + 1)(2c)(2c − 1)
6 − (2l + 11
2 c+ 1
2 )( c
2+1
2) 2
≥ (yP(s,l)(2) + yP(s,l)(3)) + (2c + 1)(2c)(2c − 1)
6 − ( 35
2 c + 35
8 )( c
2+1
2) 2 > (yP(s,l)(2) + yP(s,l)(3)).
7.3 Large d
In this case, we use Lemmas 23 and 17 to bound yF (3). As above, the choice between these two bounds depends on the relation between l and c. In order to bound yF (2), we use Corollary 16. Together, Lemmas 17 and 23 imply that if c ≥ 3 and c + 2 ≤ d(F) ≤ 2c − 1, then |F | < max(|P(s, l)|, |P′(s, l)|). Recall that by (11), d ≤ 2c. We analyze separately the last remaining case d = 2c. This case is easy, since by Lemma 21 the condition d = 2c implies existing of many (s − 1)-matchings and (c + 2)-ele-
ment complement of the union of each such matching can not contain any sets from F. Note that in the case d ≥ c + 2 we only require the condition c ≥ 3 instead of c ≥ 5. Therefore, dealing with the case c = 3 in the Appendix, we may assume d ≤ 4.
Lemma 29. Let c ≥ 3 and d ≥ c + 2. If F is a shifted family without one-element sets such that d(F ) = d and ν(F ) < s, then |F| < max{|P(s, l)|, |P′(s, l)|}.
Proof. By Corollary 16 either
|P′(s, l)| − (yF (0) + yF (1) + yF (2)) ≤ (4l + d − 3)d
2 (26)
or
|P(s, l)| − (yF (0) + yF (1) + yF (2)) ≤ (2l + 6c − ⌈ d
2 ⌉ + 1)⌈ d
2⌉
2 ≤ (2l + 5c + 1)c
2 . (27)
25

In the last inequality, we used that that the function f (x) = (2l + 6c − x + 1)x is increasing for x < l + 3c + 1
2 , and that the argument d is bounded: d ≤ 2c by (11). Assume first that (27) holds. If l < 2c2−5c+1
c then we use Lemma 17 and get
yF (3) ≥ 3c − 1
2 = (2 2c2−5c+1
c + 5c + 1)c
2 > (2l + 5c + 1)c
2
≥ |P(s, l)| − (yF (0) + yF (1) + yF (2))
and therefore |F | ≥ yF (0) + yF (1) + yF (2) + yF (3) > |P(s, l)|.
If l > c2+3c
6c−4 then we use Lemma 23 and get
yF (3) ≥ (2l + c)(2c − 1) = (2l + 5c + 1)c
2 + (3c − 2)l − c2 + 3c
2 > (2l + 5c + 1)c
2
and therefore |F| > |P(s, l)|. Since for c ≥ 3 we have c2+3c
6c−4 < 2c2−5c+1
c , at least one of the inequalities l <
2c2 −5c+1
c and l > c2+3c
6c−4 is satisfied. Therefore, if (27) holds then |F | < |P(s, l)|. If (26) holds and d ≤ 2c − 1, then we use Lemma 23 to bound yF (3) and get
yF (3) ≥ (2l + c)(2c − 1) > (4l + 2c − 4)(2c − 1)
2 ≥ |P′(s, l)| − (yF (0) + yF (1) + yF (2))
and therefore |F | < |P′(s, l)|. The only remaining case is when d = 2c and (26) holds. The RHS of (26) is (4l + 2c − 3)c in this case. By Lemma 21, for any x in [2, 2s − 1] the family
F ∪ [2s−1]\{x}
2 contains an (s − 1)-matching. Therefore, for any x in [2, 2s − 1]
and {y1, y2} ∈ [2s,n]
2 we get {x, y1, y2} ∈/ F . So y(3) ≥ (2s − 2) c+1
2=
c(c + 1)l + c3 − c. For c ≥ 3 we have c(c + 1)l + c3 − c >= 4cl + (2c − 3)c and therefore |F | < |P′(s, l)|.
7.4 Proof of Theorem 10 for c ≥ 5
Let F be a shifted up-set without one-element sets with ν(F) < s. If d(F ) = 0, then by Lemma 12 we have yF (2) ≥ min{yP(s,l)(2), yP′(s,l)(2)} and equality is achieved only if F (2) = P(s, l)(2) or F (2) = P′(s, l)(2). Since F does not contain any one-element sets and both P(s, l) and P′(s, l) contain all sets with size at least 3, it implies that |F| ≤ max{|P(s, l)|, |P′(s, l)|} and equality is attained only if F = P(s, l) or F = P′(s, l). If 1 ≤ d(F) ≤ 4, then by Lemmas 24 and 25 we have |F| < m-
ax{|P(s, l)|, |P′(s, l)|, |Q(s, l)|}.
If 5 ≤ d(F ) ≤ c + 1 and ν(F ) ∩ [2l+d,n]
3 ≥ c − d + 1, then Lemmas 26 and 27
imply |F | < max{|P(s, l)|, |P′(s, l)|}. If 5 ≤ d(F ) ≤ c + 1 and ν(F ) ∩ [2l+d,n]
3 ) < c − d + 1, then by Lemma 28
we get |F| ≤ max{|P(s, l)|, |P′(s, l)|, |Q(s, l)|}, and equality is achieved only if F = Q(s, l). If d(F ) ≥ c + 2, then Lemma 29 implies that |F | < max{|P(s, l)|, |P′(s, l)|}.
26

References
[1] R. Ahlswede and L.H. Khachatrian, The Complete Intersection Theorem for Systems of Finite Sets, European Journal of Combinatorics. 18 (1997), 125–136.
[2] N. Alon, P. Frankl, H. Huang, V. R ̈odl, A. Rucin ́ski and B. Sudakov, Large matchings in uniform hypergraphs and the conjectures of Erd ̋os and Samuels, Journal of Comb. Theory, Ser. A 119 (2012), 1200–1215.
[3] B. Bollob ́as, D.E. Daykin, P. Erdo ̋s, Sets of independent edges of a hypergraph, Quart. J. Math. Oxford Ser. 27 (1976), N2, 25–32.
[4] P. Erd ̋os, A problem on independent r-tuples, Ann. Univ. Sci. Budapest. 8 (1965) 93–95.
[5] P. Erd ̋os, T. Gallai, On maximal paths and circuits of graphs, Acta Math. Acad. Sci. Hungar. 10 (1959), 337–356.
[6] P. Erd ̋os, C. Ko, R. Rado, Intersection theorems for systems of finite sets, The Quarterly Journal of Mathematics, 12 (1961) N1, 313–320.
[7] P. Frankl, The shifting technique in extremal set theory, Surveys in combinatorics, Lond. Math. Soc. Lecture Note Ser. 123 (1987), 81–110, Cambridge University Press, Cambridge.
[8] P. Frankl, Improved bounds for Erd ̋os’ Matching Conjecture, Journ. of Comb. Theory Ser. A 120 (2013), 1068–1072.
[9] P. Frankl, Proof of the Erd ̋os matching conjecture in a new range, Isr. J. Math. 222 (2017), N1, 421–430.
[10] P. Frankl, On the maximum number of edges in a hypergraph with a given matching number Discrete Applied Mathematics Volume 216 (2017), N3, 562–581.
[11] P. Frankl, A. Kupavskii, Families with no s pairwise disjoint sets, Journal of the London Mathematical Society 95 (2017), N3, 875–894
[12] P. Frankl, A. Kupavskii, Two problems on matchings in set families - in the footsteps of Erd ̋os and Kleitman, J. Comb. Th. Ser. B 138 (2019), 286–313
[13] P. Frankl, A. Kupavskii, Families of sets with no matching of sizes 3 and 4, European Journal of Combinatorics 75 (2019), 123-135
[14] P. Frankl and A. Kupavskii, The Erd ̋os Matching Conjecture and concentration inequalities, Journal of Comb. Theory Ser B. 157 (2022), 366–400.
[15] P. Frankl, T. Luczak, K. Mieczkowska, On matchings in hypergraphs, Electron. J. Combin. 19 (2012), Paper 42.
27

[16] A.J.W. Hilton, E.C. Milner, Some intersection theorems for systems of finite sets, Quart. J. Math. Oxford 18 (1967), 369–384.
[17] H. Huang, P. Loh, B. Sudakov, The size of a hypergraph and its matching number, Combin. Probab. Comput. 21 (2012), 442–450.
[18] G. Katona, Intersection theorems for systems of finite sets, Acta Math. Acad. Sci. Hung. 15 (1964), 329–337.
[19] D.J. Kleitman, Maximal number of subsets of a finite set no k of which are pairwise disjoint, Journ. of Comb. Theory 5 (1968), 157–163.
[20] D. Kolupaev, A. Kupavskii, Erd ̋os Matching Conjecture for almost perfect matchings, Discrete Math. 346 (2023).
[21] A. Kupavskii, Rainbow version of the Erd ̋os Matching Conjecture via Concentration, Combinatorial Theory 3 (2023) N1, arXiv:2104.08083
[22] T. Luczak, K. Mieczkowska, On Erd ̋os’ extremal problem on matchings in hypergraphs, Journ. of Comb. Theory Ser A 124, (2014), 178–194.
[23] F. Quinn, PhD Thesis, Massachusetts Institute of Technology (1986).
8 Appendix A: proofs of some technical state
ments
We deferred to the appendix some of the more technical/computational proofs. We restate the claims for convenience.
Claim 11. We have
min |P′(s − 1, l − 2)|, |P(s − 1, l − 2)|, |Q(s − 1, l − 2)|,
|W(s − 1, l − 2)| > min |P′(s, l)|, |P(s, l)|, |Q(s, l)|, |W(s, l)| .
Moreover,
min |P′(s − 1, l − 2)(≤3)|, |P(s − 1, l − 2)(≤3)|, |Q(s − 1, l − 2)(≤3)|,
|W(s − 1, l − 2)(≤3)| > min |P′(s, l)(≤3)|, |P(s, l)(≤3)|, |Q(s, l)(≤3)|, |W(s, l)(≤3)| .
Proof. Put
N (s, l) := min |P′(s, l)|, |P(s, l)|, |Q(s, l)|, |W(s, l)| (28)
and
K(s, l) := min
n
P′(s, l)(≤3) , P(s, l)(≤3) , Q(s, l)(≤3) , W(s, l)(≤3) o
. (29)
28

We need to prove
N (s − 1, l − 2) > N (s, l) (30)
and
K(s − 1, l − 2) > K(s, l). (31)
Since P, P′, and Q contain all sets with size at least 4,
K(s, l) = min
n
|P′(s, l)|, |P(s, l)|, |Q(s, l)|, W(s, l)(≤3) o
.
Straightforward calculations give
W(s, l)(≤3) = (c2 + 3c + 4)s + c3 − c
6 . (32)
Let us show that we can exclude W(s, l)(≤3) from the RHS of (29) without changing the minimum. Indeed, combining (32) with (8) and (9), we get
W(s, l)(≤3) − |P(s, l)| = (c2 − 3c)s + c3 + 9c2 + 14c
6 (33)
and
W(s, l)(≤3) − |Q(s, l)| = c(c − 1)(6s − 7c − 7). (34)
For c ≥ 3, as well as for c = 2, s ≤ 6, equality (33) implies that
W(s, l)(≤3) ≥ |P(s, l)|. For c = 1, as well as for c = 2, s ≥ 4, equality (34)
implies that W(s, l)(≤3) ≥ |Q(s, l)|. These two cases combined imply that
for all s and c we have W(s, l)(≤3) ≥ min
n
|P(s, l)|, |Q(s, l)|
o
. Consequently,
we have |W(s, l)| ≥ min
n
|P(s, l)|, |Q(s, l)|
o
, and thus we can as well exclude
|W(s, l)| from the RHS of (28) without changing the respective minimum. Thus, to prove both (31) and (30), it is sufficient to prove
M (s − 1, l − 2) > M (s, l),
where
M (s, l) := min |P′(s, l)|, |P(s, l)|, |Q(s, l)| . (35)
Using straightforward calculations, one can check that for l ≥ 2 the inequality |P′(s, l)| ≤ |P(s, l)| is equivalent to s ≥ 7c + 2. Indeed, we have
|P′(s′, l′)| − |P(s′, l′)| = n
2 − 2l − 1
2 − n−l+1
2=
=1
2 n2 − n − 2(l − 1)(2l − 1) − n2 + 2ln − n + l(l − 1) =
=1
2 (2(l − 1)n − (5l − 2)(l − 1)) = (l − 1) n − 5l − 2
2=
= (l − 1) 2s + c − 5s − 5c − 2
2 = l−1
2 (7c + 2 − s) .
29

Moreover, for l = 2 we have |P′(s′, l′)| = |P(s′, l′)| = n
2 + n + 1. Therefore, if the minimum in the definition of M (s − 1, l − 2) is achieved only on the first argument, then the inequality
|P′(s − 1, l − 2)| < |P(s − 1, l − 2)|
implies s > 7(c + 1) + 3 and we have
M (s − 1, l − 2) = |P′(s − 1, l − 2)|
= (6c + 10)(s − 1) − 3
2 (c + 1)2 − 5
2 (c + 1)
= (6c + 4)s − 3
2 c2 − 5
2 c + 6s − 9c − 14
> (6c + 4)s − 3
2 c2 − 5
2 c = |P′(s, l)| ≥ M (s, l).
If the minimum is achieved on the second argument, we have
M (s − 1, l − 2) = |P(s − 1, l − 2)|
= s + 2c + 2
2 + n = s + 2c + 1
2 + n + 1 + s + 2c
> s + 2c + 1
2 + n + 1 = |P(s, l)| ≥ M (s, l).
If the minimum is achieved on the third argument, we have
M (s − 1, l − 2) = |Q(s − 1, l − 2)|
= (4c + 8)(s − 1) + 4(c + 1)3 − 4(c + 1)
3
= (4s + 4c2 − 8) + (4c + 4)s + 4c3 − 4c
3
> (4c + 4)s + 4c3 − 4c
3 = |Q(s, l)| ≥ M (s, l).
Claim 15. For l + d+1
2 ≥ 4 at least one of the inequalities
(4l + 3c + d − 2)(3c − d + 1)
2 < (4l + 3c + d − 7)(3c − d + 2)
2 (15)
and
(l + 3c − d−1
2 )(l + 3c − d+1
2)
2 < (4l + 3c + d − 7)(3c − d + 2)
2 (16)
is satisfied.
30

Proof. Since (4l+3c+d−2)(3c−d+1) = (4l+3c+d−7)(3c−d+1)+5(3c−d+1) and (4l + 3c + d − 7)(3c − d + 2) = (4l + 3c + d − 7)(3c − d + 1) + (4l + 3c + d − 7), inequality (15) is equivalent to 5(3c − d + 1) < 4l + 3c + d − 7. Simplifying the inequality, we get
l > 3c − 3
2 d + 3.
To solve (16), it is convenient to note that it turns into an equality for
l + d+1
2 = 3, since both the left-hand side and the right-hand side are equal to the number of two-element sets that can be shifted to {3, 4}. That is, the difference between the left-hand side and the right-hand side equals zero when l+ d
2−5
2 = 0. Therefore, (l + d
2−5
2 ) divides the difference between the sides of (16). Noting it, it is easy to factor
(l + 3c − d−1
2 )(l + 3c − d+1
2)
2 − (4l + 3c + d − 7)(3c − d + 2)
2
and get that (16) is equivalent to
l+ d
2−5
2 l+ 5
2 d − 6c − 11
2 < 0.
Since l + d
2−5
2 > 0, the inequality is equivalent to
l < 6c − 5
2 d + 11
2.
Therefore, if both inequalities (15) and (16) are not satisfied, then 6c − 5
2d+
11
2 ≤ l ≤ 3c − 3
2 d + 3. It is equivalent to d ≥ 3c + 5
2 and contradicts the assumption d ≤ 2c.
Corollary 16. Let F ⊂ 2[n] be a shifted up-set without 1-element sets. Let d(F) = d ≤ 2c. Then either
|P′(s, l)| − (yF (0) + yF (1) + yF (2)) ≤ (4l + d − 3)d
2
or
|P(s, l)| − (yF (0) + yF (1) + yF (2)) ≤ (2l + 6c − ⌈ d
2 ⌉ + 1)⌈ d
2⌉
2.
Proof. Since F is an up-set without one-element sets, yF (0) = 1 and yF (1) = n. By Lemmas 12 and 14 we get
y(2) ≥ max (4l + 3c + d − 2)(3c − d + 1)
2 , (l + 3c − ⌈ d
2 ⌉ + 1)(l + 3c − ⌈ d
2 ⌉)
2.
If y(2) ≥ (4l+3c+d−2)(3c−d+1)
2 , then
31

|P′(s, l)| − (yF (0) + yF (1) + yF (2))
≤ (6c + 4)(l + c) − 3
2 c2 − 5
2 c − 1 + 2l + 3c + (4l + 3c + d − 2)(3c − d + 1)
2
= (4l + d − 3)d
2.
If y(2) ≥ (l+3c−⌊ d
2 ⌋+1)(l+3c−⌊ d
2 ⌋)
2 , then
|P(s, l)| − (yF (0) + yF (1) + yF (2)) ≤
≤ (1 + n + l + 3c + 1
2 ) − (1 + n + l + 3c − ⌈ d
2⌉ + 1
2 )=
= (2l + 6c − ⌈ d
2 ⌉ + 1)⌈ d
2⌉
2.
Lemma 27. Let d(F) = d be even integer, 6 ≤ d ≤ c+1. If F is a shifted family without singletons such that d(F ) = d, ν(F ) < s and ν(F ∩ [2l+d,n]
3 ) ≥ c−d+1,
then |F | < max{|P(s, l)|, |P′(s, l)|}.
Proof. As in Lemma 26, we establish (20) and (21). To prove (20), we consider cases l ≤ 2c − 4 and l ≥ 2c − 3. If l ≤ 2c − 4, we use Lemma 17 and get
y(3) ≥ 3c − 1
2 = (4(2c − 4 + 8
c+1 ) + (c + 1) − 3)(c + 1)
2 > (4l + d − 3)d
2.
If l ≥ 2c − 3, then l ≥ 2d − 5 (since d ≤ c + 1), so we get
(d − 2)2
2l(d − 1) ≤ (d − 2)2
2(2d − 5)(d − 1) = d2 − 4d + 4
4d2 − 14d + 10 ≤ 1
4.
(In the last inequality we used d ≥ 4.) By Corollary 22 we get
y(3) ≥ (2l + d − 2)(2d − 3) 1
1 + (d−2)2
2l(d−1)
≥ (2l + d − 2)(2d − 3) 1
1+ 1
4
≥ (2l + d − 2)d > (4l + d − 3)d
2.
In order to prove (21) we consider cases l ≤ 6c − 18 and l ≥ 6c − 17. If l ≤ 6c − 18, we use Lemma 17 and get
y(3) ≥ 3c − 1
2 = (2(6c − 18 + 20
c+1 ) + 6c) c+1
2
2 > (2l + 6c − d
2 + 1)( d
2)
2.
32

If l ≥ 6c − 17, then l ≥ 6d − 23 ≥ 2d and therefore (d−2)2
2l(d−1) ≤ (d−2)2
2d(d−1) < 1
4. Straightforward computations show that for all l ≥ 0 and d ≥ 6 an inequality
4
5 (2l + d − 2)(2d − 3) ≥ (3l+18)d
4 holds. Combining these inequalities with Corollary 22, we get
y(3) ≥ (2l + d − 2)(2d − 3) 1
1 + (d−2)2
2l(d−1)
>4
5 (2l + d − 2)(2d − 3)
≥ (3l + 18)d
4 ≥ (2l + 6c − d
2 + 1) d
2
2.
9 Appendix B: Proof of Theorem 10 for c ≤ 4
9.1 One more bound on y(3)
For small c we will usually use the following lemma instead of Lemmas 19 and 20 to get a bound on y(3).
Lemma 30. Let d be an integer, 2 ≤ d ≤ c. Let F ⊂ 2[n] be a shifted family with ν(F ) < s. Suppose that for all i ∈ [l] we have {i, 2l + d + 1 − i} ∈ F and
ν(F ∩ [2l+d+1,n]
3 ) ≥ c − d. Then
yF (3) ≥ (2d − 1)(s + 2c − 2d) + 1.
Moreover, equality is achieved only if d = 2 and F (3) contains all 3-element sets that cannot be shifted to {l + 2, n − 2, n − 1}.
Note that the condition ν(F ∩ [2l + d + 1, n]) ≥ c − d is the same as in Lemmas 19 and 20 for d(F ) = d + 1 and the condition {i, 2l + d + 1 − i} ∈ F for all i ∈ [l] is similar to d(F) > d for even d, but is weaker, since we do not require {i, 2l + d + 1 − i} ∈ F for i ≥ l + 1. On the other hand, we get a bound on y(3) that is approximately twice worse. Therefore, we use Lemma 30 when we can provide the condition {i, 2l + d + 1 − i} ∈ F for all i ∈ [l], but we do not have this condition for i > l.-
 It is a rather common situation for small c.
Proof. Since F is shifted and ν(F ∩ [2l+d+1,n]
3 ) ≥ c − d, we have ν(F ∩
[2l+d+1,2l+3c−2d]
3 ) ≥ c − d. Note, that 2l + 3c − 2d = n − 2d. Consider d sets {l + i, n − 2d + i, n − i + 1}, i ∈ [d]. Together with the sets {i, 2l + d + 1 − i} for i ∈ [l] and the (c − d)-matching in F ∩ [2l+d+1,2l+3c−2d]
3 , these sets form an s-matching. Since ν(F ) < s and all sets from the other two groups are in F , we have {l + i, n − 2d + i, n − i + 1} ∈/ F for some i ∈ [d]. Since F is shifted, all sets, that may be shifted to {l + i, n − 2d + i, n − i + 1} are also not in F. Next, we estimate the minimum over i of the number of sets that can be shifted to {l + i, n − 2d + i, n − i + 1}. For all x ∈ [l + i, n − 2d + i − 1] and all
{y, z} ∈ [n−2d+i,n]
2 such that {y, z} may be shifted to {n − 2d + i, n − i + 1}
33

the set {x, y, z} may be shifted to {l + i, n − 2d + i, n − i + 1}. We have (n−2d+i−1)−(l+i−1) = s+2c−2d such x and 2d−i+1
2 − 2d−2i+1
2 = (4d−3i+1)i
2
such pairs {y, z}, that is, (s + 2c − 2d) (4d−3i+1)i
2 such triples {x, y, z}. All these triples are different, since we count unordered pairs x, y and for all triples x ≤ n − 2d + i − 1 and min (y, z) ≥ n − 2d + i. Moreover, we did not count a set {n − 2, n − 1, n}, that of course may be shifted to {l + i, n − 2d + i, n − i + 1}, because in all considered triples x ≤ n − 2d + i − 1 ≤ n − d − 1 ≤ n − 3 (here we use d ≥ 2). If d > 2 or i < d, we also did not count the set {n − 3, n − 1, n}, that also may be shifted to {l + i, n − 2d + i, n − i + 1}. -
Therefore, we have at
least
(s + 2c − 2d) (4d − 3i + 1)i
2 +1
sets that may be shifted to {l + i, n − 2d + i, n − i + 1} and this bound is strict only if d = 2 and i = 2. Finally, we apply a usual convexity argument. Since for some i ∈ [d] we have {l + i, n − 2d + i, n − i + 1} ∈/ F and at least
(s + 2c − 2d) (4d − 3i + 1)i
2 +1
sets may be shifted to {l + i, n − 2d + i, n − i + 1} ∈/ F , we have
yF (3) ≥ min
i∈[d]
n
(s + 2c − 2d) (4d − 3i + 1)i
2 +1
o
.
This bound is an upward convex function, the minimum is attained at one of the ends. For d ≥ 2 we have (d+1)d
2 ≥ 2d−1, and so the minimum is attained for i = 1 and we have the desired bound yF (3) ≥ (2d − 1)(s + 2c − 2d) + 1. Equality is attained only if d = i = 2. Moreover, if F attains equality then it must contain all 3-element sets that cannot be shifted to {l + i, n − 2d + i, n − i + 1}.
We go to the proof of the theorem. We start with the case c = 2, since it is the best to illustrate methods that we use for small c.
9.2 c = 2
For c = 2 we have
yP(s,l)(2) = s + 5
2 = s2 + 9s + 20
2,
yP′(s,l)(2) = 2s + 2
2 − 2s − 5
2 = 14s − 14
and yQ(s,l)(2) + yQ(s,l)(3) = 10s + 5.
34

Straightforward computations show, that the condition |P′(s, l)| ≥ |P(s, l)| is equivalent to s ≥ 16 and the condition |P′(s, l)| ≥ |Q(s, l)| is equivalent to s ≤ 19
4 . Therefore, max{|P(s, l)|, |P′(s, l)|, |Q(s, l)|} cannot be attained in the second argument. However, it is still more convenient to prove |F| ≤ max{|P(s, l)|, |P′(s, l)|, |Q(s, l)|} than |F | ≤ max}|P(s, l)|, |Q(s, l)|}. In this subsection, we prove the following lemma.
Lemma 31. Let n = 2s + 2 and F ⊂ 2[n] is a shifted up-set with ν(F ) < s and
F ∩ [n]
1 = ∅. Then |F| ≤ max{|P(s, l)|, |P′(s, l)|, |Q(s, l)|}. Moreover, equality
is achieved only if F is one of the families P(s, l), P′(s, l), Q(s, l).
Proof. The case l ≤ 1, that is, s ≤ 3 is treated in [19], so we will assume s ≥ 4. Since F contains no singletons, the inequality
|F| ≤ max{|P(s, l)|, |P′(s, l)|, |Q(s, l)|}
is a consequence of
yF (2) + yF (3) ≥ min{yP(s,l)(2), yP′(s,l)(2), yQ(s,l)(2) + yQ(s,l)(3)}.
If d(F ) = 0, then by Lemma 12 we get that yF (2) ≥ max{yP(s,l)(2), yP′(s,l)(2)} and equality is achieved only if F is one of the families P(s, l) and P′(s, l). Therefore, we may assume d(F) > 0. By Lemma 17 it implies yF (3) ≥ 10. If {1, 2s − 2} ∈/ F, then by Lemma 7 we get yF ≥ 10s − 5 and therefore
yF (2) + yF (3) ≥ 10s + 5 = yQ(s,l)(2) + yQ(s,l)(3).
Moreover, equality is achived only if F (2) = [2s−3]
2 and all sets in [n]
3 \ [2s−3,n]
3
are in F . This conditions together with ν(F) < s imply F ⊂ Q(s, l). Indeed, if F contains a set F1 ∈ [2s−2,n]
3 then F contains an s-matching {{2i − 1, 2i} : i ∈ [s − 3]} ∪ {{2s − 5, 2s − 3}, F1, F2}, where F2 = [2s − 2, 2s + 2] \ F1 ∪ {2s − 4}. Summarizing, if |F| ≥ max{|P(s, l)|, |Q(s, l)|}, d(F) > 0, and {1, 2s − 2} ∈/ F, then F = Q(s, l). In what follows, we assume {1, 2s − 2} ∈ F. Our goal is to prove that |F| < max{|P(s, l)|, |Q(s, l)|}, that is, yF (2) + yF (3) > min{yP(s,l)(2), yQ(s,l)(2) +
yQ(s,l)(3)}.
If for some i ∈ [2, s − 2] we have {i, 2s − 1 − i} ∈/ F, then by Lemma 7 we get
yF (2) ≥ (4s−3i+1)(i+4)
2 and by convexity yF (2) ≥ min 3(4s − 5), (s+7)(s+2)
2. Combining it with the inequality yF (3) ≥ 10, we get
yF (2) + yF (3) ≥ min
n
12s − 5, s2 + 9s + 34
2
o
.
Since s2+9s+34
2 > s2+9s+20
2 for all s, 12s − 5 > 10s + 5 for s ≥ 6 and
12s − 5 > s2+9s+20
2 for s ∈ {4, 5}, we get
yF (2) + yF (3) ≥ min(12s − 5, s2 + 9s + 34
2 ) > min
n
10s + 5, s2 + 9s + 20
2
o
= min
n
yP(s,l)(2), yQ(s,l)(2) + yQ(s,l)(3)
o
.
35

Thus, we get that if for some i ∈ [2, s − 2] we have {i, 2s − 1 − i} ∈/ F , then |F| < max{|P(s, l)|, |Q(s, l)|}. In what follows, we assume {i, 2s − 1 − i} ∈ F for all i ∈ [1, s − 2]. (The case i = 1 was treated in the previous step of the proof). Note that, unlike in the case of big c, we cannot use the same argument to prove {s − 1, s} ∈ F , since an inequality yF (2) + yF (3) ≥ (s+4)(s+3)
2 + 10 does
not imply yF (2) + yF (3) > min 10s + 5, s2+9s+20
2 } for s ∈ {6, 7, 8}. This is the reason why do we have to apply the weaker Lemma 30 instead of Lemma 19 that we used for large c. By Lemma 30 we get yF (3) ≥ 3s + 1. With this upgraded bound on yF (3), we turn back to the analysis of F (2). The next step is to prove that {i, 2s + 1 − i} ∈ F for all i ∈ [2, s]. That is, we add a set {s − 1, s} to the (s − 2)-matching in F (2) from the previous paragraph and move the matching to the right by one element. We use completely the same argument as in t-
he previous step. The only difference is that we get a worse bound on y(2), but use a better bound on y(3). If for some i ∈ [2, s] we have {i, 2s + 1 − i} ∈/ F , then by Lemma 7 we get
yF (2) ≥ (4s−3i+3)(i+2)
2 and by convexity yF (2) ≥ min 2(4s − 3), (s+3)(s+2)
2. Combining it with the inequality yF (3) ≥ 3s + 1, we get
yF (2) + yF (3) ≥ min
n
11s − 5, s2 + 11s + 8
2
o
.
We have s2+13s+8
2 > s2+9s+20
2 for s ≥ 4. Moreover, we have 11s−5 > 10s+5
for s ≥ 11, 11s − 5 > s2+9s+20
2 for 4 ≤ s ≤ 9, and 11s − 5 = 10s + 5 = s2+9s+20
2
for s = 10. Using it, we get that
yF (2) + yF (3) ≥ min yP(s,l)(2), yQ(s,l)(2) + yQ(s,l)(3) ,
and equality is attained only if s = 10 and F contains all 2-element sets except those that may be shifted to {2, 2s − 1}, as well as all 3-element sets except those that may be shifted to {s, 2s, 2s + 1}. However, in this case F contains an s-matching {{i, 2s − 1 − i} : i ∈ [2, s − 2]} ∪ {{1, 2s + 2}, {s − 1, 2s − 2, 2s + 1}, {s, 2s − 1, 2s}}. It implies that the last displayed inequality is strict, and so |F| < max(|P(s, l)|, |Q(s, l)|). Our only assumption was that {i, 2s+1−i} ∈/ F , and so in -
what follows we assume that this is not the case, i.e., {i, 2s+1−i} ∈ F for all i ∈ [2, s]. Since the sets {i, 2s + 1 − i}, i ∈ [2, s] form an (s − 1)-matching in F and ν(F ) < s, then no subset of [n] \ Ss
i=2{i, 2s + 1 − i} = {1, 2s, 2s + 1, 2s + 2} can lie in F. By shiftedness, it implies F ⊂ W(s, l) and therefore yF (2) + yF (3) ≥ yW(s,l)(2) + yW(s,l)(3). Since yW(s,l)(2) + yW(s,l)(3) = 12s − 2 > 10s + 5 for s ≥ 4, we get |F| < |Q(s, l)|.
Proofs for c = 1, 3, 4 are very similar to the proof for c = 2. We only have two notable differences. First, for c = 1 we have W(s, l) = Q(s, l) and therefore in the last step of the proof we get another extremal family. Second, for c = 3 and c = 4 we may only consider cases d(F ) ∈ {3, 4}, since other cases were treated in Section 7.
36

Since the rest of the proof is very similar to the proof of Lemma 31 and we have already discussed all its ideas, we provide formal proofs almost without discussion.
9.3 c = 1
Lemma 32. Let n = 2s + 1 and F ⊂ 2[n] is a shifted up-set with ν(F ) < s and F ∩ [n]
1 = ∅. Then |F | ≤ max{|P(s, l)|, |P′(s, l)|, |Q(s, l)|, |W(s, l)|}.
Moreover, equality is achieved only if F is one of the families P(s, l), P′(s, l), Q(s, l), W(s, l).
Again, for c = 1 the maximum cannot be attained in the second argument, but it is still more convenient to prove |F| ≤ max{|P(s, l)|, |P′(s, l)|, |Q(s, l)|, |W(s, l)|} than |F | ≤ max{|P(s, l)|, |Q(s, l)|, |W(s, l)|}.
Proof. The case l ≤ 1, that is, s ≤ 2 is treated in [19] and the case l = 2, that is, s = 3 is treated in [11], so we will assume s ≥ 4. For c = 1 we have
yP(s,l)(2) = s2 + 5s + 6
2
and yQ(s,l)(2) + yQ(s,l)(3) = yW(s,l)(2) + yW(s,l)(3) = 6s − 2.
Since F does not contains any singletons, the inequality
|F| ≤ max |P(s, l)|, |P′(s, l)|, |Q(s, l)|, |W(s, l)|
is a consequence of
yF (2)+yF (3) ≥ min yP(s,l)(2), yP′(s,l)(2), yQ(s,l)(2)+yQ(s,l)(3), yW(s,l)(2)+yW(s,l)(3) .
If d(F ) = 0, then by Lemma 12 we get that yF (2) ≥ max{yP(s,l)(2), yP′(s,l)(2)} and equality is achieved only if F is one of the families P(s, l) and P′(s, l). Therefore, we assume d(F) > 0. By the definition of d(F) it implies that {i, 2s − i − 1} ∈ F for all i ∈ [s − 1]. Since these sets together with a set {2s−1, 2s, 2s+1} form an s-matching and ν(F) < s, we have {2s−1, 2s, 2s+1} ∈/ F.
If {1, 2s − 1} ∈/ F, then by shiftedness of F we have F ⊂ Q(s, l). Therefore, |F| ≤ |Q(s, l)| and equality is attained only if F = Q(s, l). If the rest of the proof we assume {1, 2s − 1} ∈ F. Next, we deal with the case {i, 2s−i} ∈/ F for some i ∈ [2, s−2]. By Lemma 7 it implies yF (2) ≥ (4s−3i+1)(i+2)
2 for some i ∈ [2, s − 2] and by convexity we get
yF (2) ≥ min(8s − 10, s2+7s
2 ). Since s ≥ 4, we get
yF (2) ≥ min
n
8s − 10, s2 + 7s
2
o
> min
n
6s − 2, s2 + 5s + 6
2
o
= min yQ(s,l)(2) + yQ(s,l)(3), yP(s,l)(2) .
37

The second inequality is correct since for s ≥ 5 we have 8s − 10 > 6s − 2 and
s2 +7s
2 > s2+5s+6
2 and for s = 4 we get
min
n
8s − 10, s2 + 7s
2
o
= 32 > 31 = min
n
6s − 2, s2 + 5s + 6
2
o
.
Therefore, |F| < max |Q(s, l)|, |P(s, l)| . In the rest of the proof we assume {i, 2s − i} ∈ F for all i ∈ [2, s − 2]. Consider an s-matching {{1, 2s − 1}, {2, 2s − 2}, . . . , {s − 2, s + 2}, {s − 1, s}, {s + 1, 2s, 2s + 1}}. Since all 2-element sets in this matching are in F and ν(F ) < s, we get that {s + 1, 2s, 2s + 1} ∈/ F. By shiftedness, we get {x, 2s, 2s + 1} ∈/ F for all x ∈ [s + 1, 2s − 1] and, therefore, yF (3) ≥ s − 1. If {s − 1, s + 1} ∈/ F , by Lemma 7 we get yF (2) ≥ (s+4)(s+1)
2 = s2+5s+4
2. Combining this bound with yF (3) ≥ s − 1, we get
yF (2) + yF (3) ≥ s2 + 7s + 2
2 > s2 + 5s + 6
2 = yP(s,l)(2)
and, therefore, |F| < |P(s, l)|. In what follows, we assume {s − 1, s + 1} ∈ F. Since {i, 2s − i} ∈ F for i ∈ [s − 1] and these sets together with {s, 2s, 2s + 1} form an s-matching, we get {s, 2s, 2s + 1} ∈/ F . By shiftedness it implies
yF (3) ≥ s. (36)
Next, consider sets {i, 2s+1−i} for i ∈ [2, s−1]. If one of these sets is not in F , by Lemma 7 and convexity we get yF (2) ≥ min 6s − 6, (s+5)s
2 . Combining this bound with yF (3) ≥ s and using s ≥ 4, we get
yF (2) + yF (3) ≥ min
n
7s − 6, s2 + 7s
2
o
> min
n
6s − 2, s2 + 5s + 6
2
o
= min yQ(s,l)(2) + yQ(s,l)(3), yP(s,l)(2) .
Again, the second inequality is obvious for s ≥ 5 and the case s = 4 may be treated separately. Therefore, |F| < max |P(s, l)|, |Q(s, l)| . Thus, we may assume {i, 2s + 1 − i} ∈ F for all i ∈ [2, s − 1]. If the set {s, s + 1} also lies if F , then the sets {i, 2s + 1 − i}, i ∈ [2, s], form an (s − 1)-matching in F that leaves the elements 1, 2s, 2s + 1 uncovered. Therefore, we have {1, 2s, 2s + 1} ∈/ F and {1, 2s} ∈/ F. Shiftedness of F implies F ⊂ W(s, l). Thus, we have |F | ≤ |W(s, l)| and equal-
ity is attained only if F = W(s, l). The only remaining case is as follows: {i, 2s + 1 − i} ∈ F for i ∈ [2, s − 1], but {s, s + 1} ∈/ F. We will show that in this case |F | < |P(s, l)|. We consider two more subcases: whether {1, 2s} ∈ F or {1, 2s} ∈/ F. If {1, 2s} ∈ F then {s, s + 1, s + 2} ∈/ F, since otherwise {{1, 2s}, . . . , {s − 1, s + 2}, {s, s + 1, 2s + 1}} is an s-matching in F. By shiftedness we have
38

{x, y, 2s + 1} ∈/ F for all x, y ∈ [s, 2s], consequently yF (3) ≥ s+1
2 . Since
{s, s + 1} ∈/ F , Lemma 7 implies that yF (2) ≥ (s+2)(s+1)
2 . Combining these bounds, we get
yF (2) + yF (3) ≥ 2s2 + 4s + 2
2 > s2 + 5s + 6
2 = yP(s,l)(2).
Finally, consider the case {1, 2s}, {s, s + 1} ∈/ F . In this case, F does not contain any sets that can be shifted to {1, 2s} or to {s, s + 1}. There are s+2
2
sets that can be shifted to {s, s+1} and 2(s−1) sets that can be shifted to {1, 2s}, but cannot be shifted to {s, s + 1}. Thus, yF (2) ≥ s+2
2 + 2(s − 1) = s2+7s−2
2. Combining this bound with (36), we get
yF (2) + yF (3) ≥ s2 + 9s − 2
2 > s2 + 5s + 6
2 = yP(s,l)(2).
9.4 c ∈ {3, 4}
Lemma 33. Let n = 2s + 3 and F ⊂ 2[n] is a shifted up-set with ν(F ) < s and
F ∩ [n]
1 = ∅. Then |F | ≤ max(|P(s, l)|, |P′(s, l)|, |Q(s, l)|). Moreover, equality
is achieved only if F is one of the families P(s, l), P′(s, l), Q(s, l).
Proof. The case l ≤ 1, that is, s ≤ 4, is treated in [19], so we will assume s ≥ 5. For c = 3 we have
yP(s,l)(2) = s2 + 13s + 42
2
and yQ(s,l)(2) + yQ(s,l)(3) = 14s + 28.
Since F does contains no singletons, the inequality
|F| ≤ max |P(s, l)|, |P′(s, l)|, |Q(s, l)|
is a consequence of
yF (2) + yF (3) ≥ min yP(s,l)(2), yP′(s,l)(2), yQ(s,l)(2) + yQ(s,l)(3) .
If d(F ) = 0, then by Lemma 12 we get that yF (2) ≥ max yP(s,l)(2), yP′(s,l)(2) and equality is achieved only if F is one of the families P(s, l) and P′(s, l). The case d(F) ∈ {1, 2} is treated in Lemma 24 and the case d(F ) ≥ 5 is treated in Lemma 29. Therefore, we may assume d(F) ∈ {3, 4}. By the definition of d(F), the condition d > 2 implies that F contains {i, 2s − 3 − i} for all i ∈ [s − 2] and by Lemma 12 the condition d ≤ 4 implies
yF (2) ≥ min 3(4s − 1), (s + 5)(s + 6)
2 = min 12s − 3, s2 + 11s + 30
2 . (37)
39

If {1, 2s − 3} ∈/ F and F ∩ [2s−3,n]
3 = ∅, then F ⊂ Q(s, l) and, therefore, |F| ≤ |Q(s, l)| and equality is attained only if F = Q(s, l). If {1, 2s − 3} ∈/ F and F ∩ [2s−3,n]
3 ̸= ∅, we use Lemma 30 for d = 2 and get yF (3) ≥ 3s + 7. Since {1, 2s − 3} ∈/ F , by Lemma 7 we get yF (2) ≥ 14s − 7. Combining this bound with the bounds on y(3), we get
yF (2) + yF (3) ≥ 17s.
To conclude that |F | < max {|P(s, l)|, |Q(s, l)|} we need to check that 17s >
min
n s2+13s+42
2 , 14s + 28
o
for s ≥ 5. Indeed, we have 17s > 14s + 28 for
s ≥ 10 and 17s > s2+13s+42
2 for 5 ≤ s ≤ 9. We got this conclusion in the case {1, 2s − 3} ∈/ F, and so in what follows we assume {1, 2s − 3} ∈ F. Next, we prove, than for all i ∈ [2, s − 3] we have {i, 2s − 2 − i} ∈ F. Indeed, otherwise by Lemma 7 we have yF (2) ≥ (4s−3i+1)(i+6)
2 for some
i ∈ [2, s − 3] and by convexity yF (2) ≥ min
n
4(4s − 5), (s+10)(s+3)
2
o
. By
Lemma 17 we have yF (3) ≥ 28. Combining these bounds, we get yF (2)+yF (3) ≥
min
n
16s + 8, s2+13s+86
2
o
. To conclude that |F| < max {|P(s, l)|, |Q(s, l)|} we
need to check that min
n
16s + 8, s2+13s+86
2
o
> min
n s2+13s+42
2 , 14s + 28
o
for
s ≥ 5, that is, for any s each argument in the left-hand side is greater than at least one argument in the right-hand side. Indeed, we have s2+13s+86
2>
s2 +13s+42
2 for all s, 16s + 8 > 14s + 28 for s ≥ 11 and 16s + 8 > s2+13s+42
2 for 5 ≤ s ≤ 10. We have proved that if {i, 2s − 2 − i} ∈/ F for some i ∈ [1, s − 3], then |F| < max {|P(s, l)|, |Q(s, l)|}. Therefore, we may assume {i, 2s−2−i} ∈ F for all i ∈ [1, s−3]. Thus, we may apply Lemma 30 for d = 3 and get yF (3) ≥ 5s+1. Finally, we combine this bound with the bound (37) on yF (2) and get
yF (2) + yF (3) ≥ min 17s − 2, s2 + 21s + 32
2.
We have s2+21s+32
2 > s2+13s+42
2 for s ≥ 5, 17s − 2 > 14s + 28 for s ≥ 11 and
17s − 2 > s2+13s+42
2 for 5 ≤ s ≤ 10. Therefore,
yF (2) + yF (3) ≥ min 17s − 2, s2 + 21s + 32
2>
> min s2 + 13s + 42
2 , 14s + 28 = min yP(s,l)(2), yQ(s,l)(2) + yQ(s,l)(3) .
Lemma 34. Let n = 2s + 4. Suppose that F ⊂ 2[n] is a shifted up-set with ν(F ) < s and F ∩ [n]
1 = ∅. Then |F | ≤ max(|P(s, l)|, |P′(s, l)|, |Q(s, l)|).
Moreover, equality is achieved only if F is one of the families P(s, l), P′(s, l), Q(s, l).
40

Proof. The case l ≤ 1, that is, s ≤ 5 is treated in [19] and the case l = 2, that is s = 6 is treated in [11], so we will assume s ≥ 7. For c = 4 we have
yP(s,l)(2) = s2 + 17s + 72
2
and yQ(s,l)(2) + yQ(s,l)(3) = 18s + 75.
Since F contains no singletons, the inequality
|F| ≤ max(|P(s, l)|, |P′(s, l)|, |Q(s, l)|)
is a consequence of
yF (2) + yF (3) ≥ min(yP(s,l)(2), yP′(s,l)(2), yQ(s,l)(2) + yQ(s,l)(3)).
If d(F ) = 0, then by Lemma 12 we get that yF (2) ≥ max(yP(s,l)(2), yP′(s,l)(2)) and equality is achieved only if F is one of the families P(s, l) and P′(s, l). The case d(F ) ∈ {1, 2} is treated in Lemma 24 and the case d(F ) ≥ 5 is treated in Lemma 29. Therefore, we may assume d(F ) ∈ {3, 4}. By definition of d(F) the condition d > 2 implies that F contains {i, 2s − 3 − i} for all i ∈ [s − 2] and by Lemma 12 the condition d ≤ 4 implies
yF (2) ≥ min 9(2s − 1), (s + 7)(s + 6)
2 = min 18s − 9, s2 + 13s + 42
2 . (38)
First, we deal with the case {i, 2s − 3 − i} ∈/ F for some i ∈ [2, s − 4]. By Lemma 7 it implies yF ≥ (4s−3i+1)(i+8)
2 . By convexity we get
yF (2) ≥ min 5(4s − 5), (s + 13)(s + 4)
2 = min 20s − 25, s2 + 17s + 52
2.
Combining it with a bound yF (3) ≥ 55 from Lemma 17, we get yF (2) + yF (3) ≥
min
n
20s + 30, s2+17s+162
2
o
. Since s2+17s+162
2 > s2+17s+72
2 for all s, 20s + 30 >
18s + 75 for s ≥ 23 and 20s + 30 > s2+17s+72
2 for 6 ≤ s ≤ 22, we get
yF (2) + yF (3) ≥ min 20s + 30, s2 + 17s + 162
2
> min s2 + 17s + 72
2 , 18s + 75
= min yP(s,l)(2), yQ(s,l)(2) + yQ(s,l)(3) .
Thus, we have proved that if {i, 2s − 3 − i} ∈/ F for some i ∈ [2, s − 4], then |F| < max {|P(s, l)|, |Q(s, l)|}. In what follows, we assume {i, 2s − 3 − i} ∈ F for all i ∈ [2, s − 4]. If {1, 2s − 4} ∈/ F and F ∩ [2s−4,n]
3 = ∅, then F ⊂ Q(s, l) and, therefore, |F| ≤ |Q(s, l)| and equality is attained only if F = Q(s, l).
41

If {1, 2s − 4} ∈/ F and F ∩ [2s−4,n]
3 ̸= ∅, we use Lemma 30 for d = 3 and get yF (3) ≥ 5s + 11. Since {1, 2s − 4} ∈/ F , by Lemma 7 we get yF (2) ≥ 18s − 9. Combining these bounds, we get
yF (2) + yF (3) ≥ 23s + 2.
To conclude that |F| < max {|P(s, l)|, |Q(s, l)|} we need to check that 23s+2 >
min
n s2+17s+72
2 , 18s + 75
o
for s ≥ 6. Indeed, we have 23s + 2 > 18s + 75 for
s ≥ 15 and 23s + 2 > s2+17s+72
2 for 6 ≤ s ≤ 14. Since we considered the case {1, 2s − 4} ∈/ F, in futher proof we assume {1, 2s − 4} ∈ F . Finally, we use Lemma 30 for d = 4 and get yF (3) ≥ 7s + 1. Combining
it with the bound 38, we get yF (2) + yF (3) ≥ min
n
25s − 8, s2+27s+44
2
o
. We
have s2+27s+44
2 > s2+17s+72
2 for s ≥ 6, 25s − 8 > 18s + 75 for s ≥ 12 and
25s − 8 > s2+17s+72
2 for 6 ≤ s ≤ 11. Therefore, we get
yF (2) + yF (3) ≥ min 25s − 8, s2 + 27s + 44
2>
> min s2 + 17s + 72
2 , 18s + 75 = min yP(s,l)(2), yQ(s,l)(2) + yQ(s,l)(3)
and thus |F| < max {|P(s, l)|, |Q(s, l)|}.
42

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:13.398Z
- **Text Length:** 82328 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 42 of 42
