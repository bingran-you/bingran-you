# PDF Document: Rowley - 2025 - A direct approach to the Gallai-Schur numbers.pdf

**File Path:** Rowley - 2025 - A direct approach to the Gallai-Schur numbers.pdf

**Processed Date:** 2026-02-10T18:18:23.086Z

**File Size:** 107.05 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2808

**Title:** A direct approach to the Gallai-Schur numbers

**Collection:** Large Files

---

## Extracted Text Content

arXiv:2503.02136v1 [math.CO] 3 Mar 2025
A DIRECT APPROACH TO THE GALLAI-SCHUR NUMBERS
Fred Rowley
formerly of Lincoln College, Oxford, UK. fred.rowley@ozemail.com.au
Abstract
This paper characterises the structure of every maximal weak or strong GallaiSchur partition. The results confirm the exact values of Gallai-Schur numbers provided by Budden (2020) in the strong case, and provide corresponding values for weak Gallai-Schur numbers. The proofs are elementary and standalone.
1. Introduction
In [1], Budden deduced the exact values of the Gallai-Schur numbers (in the strong case, as defined here) from an earlier result of Chung and Graham [2]. These numbers represent upper bounds on the size of colourings (or partitions) of integer intervals [1, n] which avoid both monochromatic and rainbow sums of the form a + b = c. We distinguish the strong case, where we seek to avoid monochromatic sums where a = b, from the weak case, where such sums are permitted. The result of Chung and Graham i-
n [2] is graph-theoretic, and supported Budden’s approach in the strong case very well, but it does not appear to lend itself easily to the weak case. Budden mentioned the the weak case, but left its investigation for later work. Robertson et al (2024) derived upper and lower bounds for the weak numbers [3] In this paper, we provide a self-contained proof of Budden’s result, and a parallel result for the weak case. We prove that the weak Gallai-Schur numbers are in fact equal to the lower bound de-
rived in [3].
2. Terminology and Definitions
In concept, the Gallai-Schur partition follows on from the Schur partition, so we begin there. If an integer interval U = [1, n] can be partitioned into r disjoint subsets Si

A Direct Approach to the Gallai-Schur Numbers (ArXiv version 1) 2
for i = 1, 2, . . . , r, where no subset contains any set of integers a, b, c, such that a + b = c, then each such subset is said to be sum-free and that partition is called a Schur (r-)partition. The order of the set U is clearly n, and is also referred to as the order of the partition. We may occasionally refer to this type of partition as a strong partition, to distinguish it from the weak case defined next below. If we limit the definition above so that it excludes only sets of three distinct -
integers a, b, c, such that a + b = c, then each such subset is weakly sum-free and that partition is a weak Schur (r-)partition. We define a weak pair of integers as a pair of the form a, 2a. The strong partition excludes such pairs from each subset, whereas the weak partition does not. A Schur partition is a Gallai-Schur partition, if in addition there is no triple a, b, c, such that a + b = c, and each of a, b, c is in a different subset, noting that the partition must contain exactly r non-emp-
ty subsets. We define a weak Gallai-Schur partition correspondingly. For any r, the Gallai-Schur number GS(r) is the least integer n such that no Gallai-Schur r-partition of [1, m] exists for any1 integer m ≥ n. We may define the weak Gallai-Schur number W GS(r) in an exactly parallel manner. In section 3, we define some mappings that we will use in section 4 to determine the structure of maximal (strong or weak) Gallai-Schur partitions, and in section 5 we deduce GS(r) and W GS(r) directly. In se-
ction 6, some brief conclusions are drawn.
3. Gallai-Schur Partitions
We begin by defining two very simple constructions, which we will use iteratively. These are derived by generalising and extending the construction used by Budden [1] to demonstrate lower bounds. They are used here, along with their inverses, to derive both upper and lower bounds.
Theorem 1. (2-fold / 5-fold Construction) If there is a (weak) Gallai-Schur partition of the integers [1, m] into r non-empty subsets, then there is a (weak) Gallai-Schur partition of [1, 2m + 1] into r + 1 nonempty subsets; and a (weak) Gallai-Schur partition of [1, 5m+4] into r+2 non-empty subsets.
Proof. Let Pr be such a partition of [1, m]. We can identify the colour of an integer with the index number of the unique subset Si ⊂ Pr that it belongs to. Thus for an integer a ∈ Si, we write the colour as χ(a) = i.
1This definition may seem slightly longer than necessary, but it must deal with the fact that choosing m = r forces at least 1, 2, 3 to be a rainbow triple.

A Direct Approach to the Gallai-Schur Numbers (ArXiv version 1) 3
The first part of the theorem can be demonstrated by considering the partition Qr+1 of [1, 2m + 1] that results if we assign all the odd numbers to a single new subset S′1. The members of each of the other new subsets St′+1 ⊂ Qr+1 can be determined by multiplying the members of St ⊂ Pr by 2, for 1 ≤ t ≤ r. There is no ’weak pair’ (a, 2a) in S′1, so we can deduce that if Pr is a strong or weak partition, Qr+1 has the same property. In this way, for example, a strong partition P2 of [1, 4] into S1 =-
 {1, 4}, S2 = {2, 3} gives rise to Q3 with S′1 = {1, 3, 5, 7, 9}, S′2 = {2, 8}, S′3 = {4, 6} and 2m + 1 = 9. The subsets are clearly distinct and fully cover the interval [1, 9]. There is no ’weak pair’ (a, 2a) in S′1, so Q3 is strong, like P2. For any triple with a + b = c, either (i) exactly two of them are odd, or (ii) none of them is odd. In case (i), it is easy to check that the sum or difference of two members of S′1 cannot be of the same colour, since the sum or difference is even: and of c-
ourse a, b, c is not a rainbow triple if two of them are members of S′1. In case (ii), if there is either a monochromatic or a rainbow triple in the other subsets, then we would know there was such a triple in the partition Pr, which is a contradiction. The mapping from Pr to Qr+1 is clearly well-defined, and has an obvious inverse. We may call the mapping 2Θ. This proves the first part of the theorem.
The second part can be demonstrated by assigning all integers x in the range [1, 5m + 4] to a subset S′1′ of a new partition Rr+2 as follows. If x ≡ 2 or 3 modulo 5, then x ∈ S′1′. If x ≡ 1 or 4 modulo 5, then x ∈ S′2′. The members of each of the other subsets St′′+2 can be determined by multiplying the members of St by 5, for 1 ≤ t ≤ r. Once more, the subsets are clearly distinct and fully cover the interval [1, 5m + 4]. There is no ’weak pair’ (a, 2a) in S′1′ or S′2′, so if Pr is a strong or wea-
k partition, Rr+2 has the same property. It is easy to see that the sum of two members of S′1′ must be in S′2′, and vice versa, and the resulting sum is obviously not rainbow in either case. Adding a member of S′1′ to a member of S′2′ clearly cannot form a monochromatic triple, but that triple is never rainbow either, since the sum cannot be a multiple of 5. Thus we have dealt with the case where no member of the triple is divisible by 5. If any member of a triple with a + b = c is divisible by 5,-
 then either (i) all of them are divisible by 5, or (ii) exactly one of them is. In case (i), we note that if there is either a monochromatic or a rainbow triple contained wholly in the subsets with index greater than 2, then we would know there was such a triple in the partition Pr, which is a contradiction. In case (ii), we must have two members of either S′1′ or S′2′ whose absolute difference is a multiple of 5, and hence they are in the same subset. Thus, the triple is neither monochromatic no-
r rainbow. The mapping from Pr to Rr+2 is clearly well-defined, and has an obvious inverse. We may call the mapping 5Θ. This proves the second part of the theorem.

A Direct Approach to the Gallai-Schur Numbers (ArXiv version 1) 4
4. Structure of Maximal Partitions
The result in the previous section provides a basis for lower bounds on GS(r) and W GS(r). In this section, we explore the structure of maximal examples of GallaiSchur partitions. The assumption that a partition is maximal – i.e. that there is no larger GallaiSchur partition into the same number of colours – is remarkably powerful in this instance. We aim to prove the theorem below. To do so, we assume here that the colours of any partition occur in the natural order – so that if we have two colou-
rs i, j, and i < j, then the smallest member of subset Si is less than the smallest member of Sj. We note that the main arguments in this section apply with the same force whether the strong or the weak criterion applies.
Theorem 2. (2-fold / 5-fold Image) Let the (strong or weak) Gallai-Schur partition Pr be a maximal partition of order m, with r > 3. The first three integers must have colours 1, 2, 2 or 1, 2, 1 respectively. In the first case, m has residue 4 modulo 5 and Pr is an image, under the mapping 5Θ, of a Gallai-Schur partition (strong or weak, respectively) of order (m − 4)/5. In the second case, m is odd, and Pr is an image, under the mapping 2Θ, of a Gallai-Schur partition (strong or weak, respectivel-
y) of order (m − 1)/2.
Proof. Let Rr be a partition of [1, m] into r colours, where r > 3. We assume there is no larger Gallai-Schur partition into r colours, and therefore say that it is maximal.
If we look at the colours of Rr in increasing sequence, we can derive some very useful results. We recall first that the colour of an integer i is written χ(i). So by our assumption above, χ(1) = 1. We must consider whether we can have χ(2) = 1. If that were so, then with r > 3, there would be a contradiction, since we know that for some s > 2 we would have χ(s) = 2, and for some t > s we must have χ(t) = 3. We can assume without loss of generality that these are the smallest integers of their res-
pective colours. We can immediately deduce that χ(t − 1) = χ(t − 2) = 1, since otherwise we would have rainbow triples (1, t − 1, t) and (2, t − 2, t). However, we now have a monochromatic triple (1, t − 1, t). Thus we must take χ(2) = 2. It is worth pausing to note that the reasoning above ensures a full reflection symmetry. That is, if t > 2 is the smallest integer of a given colour, then all smaller integers must conform to a symmetrical colour pattern within the interval [1, t − 1], in order t-
o avoid a rainbow sum. If χ(1) = 1 and χ(2) = 2, then we must have χ(3) ∈ {1, 2}, to avoid a rainbow colouring.

A Direct Approach to the Gallai-Schur Numbers (ArXiv version 1) 5
We note here that since r > 3, we cannot have χ(4) = 2 by the same symmetry argument as above. That is, for some minimal t > 4 we would have χ(t) = 3 and therefore χ(t − 2) = χ(t − 4) = 2, which avoids a rainbow sum, but must produce a monochromatic triple (2, t − 4, t − 2). We note that this argument applies in both weak and strong cases. We go back to χ(3). If we first assume χ(3) = 2, then χ(4) ∈ {1, 2} to avoid a rainbow colouring, but we know (from the above) that this means χ(4) = 1. We now -
have the pattern “1221” for the first four integers, and we can see this implies χ(5) ∈/ {1, 2} if we are to avoid a monochromatic sum. Setting χ(5) = 3 does not produce a rainbow colouring, since the preceding sequence is symmetrical. So we now have “12213”. The fact that χ(5) = 3 has interesting consequences for values of s ∈ [6, 9]. To avoid a rainbow sum, we can deduce that χ(s) ∈ {3, χ(s − 5)}. However, we also know that χ(6) ∈ {χ(2), χ(4)}, and χ(7) ∈ {χ(3), χ(4)}. Thus χ(6) = 1, and χ(7) = -
2. Similarly, we deduce that χ(8) = 2, and χ(9) = 1. It is easy to see that χ(10) ∈/ 1, 2. This pattern of colouring continues indefinitely for the integers that are not multiples of 5. The fact that no multiple of 5 can be of colour 1 or 2, forces repetition of the “1221[χ(5k)]” pattern iteratively for every subsequent set of 5 consecutive integers. This can easily be formalised inductively for all integers in Rr. We assume that, for t ≥ 0, every integer of the form 5s with 1 ≤ s ≤ t is not of co-
lour 1 or 2; that any integer of the form 5t + 1 or 5t + 4 is colour 1; and that any integer of the form 5t + 2 or 5t + 3 is of colour 2. We have proven this for t ≤ 1, so now consider t > 1.
Since χ(6) = χ(5t − 1) = 1 we deduce that χ(5(t + 1)) 6= 1. Since χ(7) = χ(5t − 2) = 2 we deduce that χ(5(t + 1)) 6= 2.
Let χ(5t) = x. The absence of rainbow triples give us the following: χ(6) = 1 implies χ(5t + 6) ∈ {1, x}. χ(7) = 2 implies χ(5t + 7) ∈ {2, x}. χ(8) = 2 implies χ(5t + 8) ∈ {2, x}. χ(9) = 1 implies χ(5t + 9) ∈ {1, x}.
However, we can also deduce that: χ(4) = 1 and χ(5t + 2) = 2 implies χ(5t + 6) ∈ {1, 2}, so χ(5t + 6) = 1. χ(4) = 1 and χ(5t + 3) = 2 implies χ(5t + 7) ∈ {1, 2}, so χ(5t + 7) = 2. χ(7) = 2 and χ(5t + 1) = 1 implies χ(5t + 8) ∈ {1, 2}, so χ(5t + 8) = 2. χ(8) = 2 and χ(5t + 1) = 1 implies χ(5t + 9) ∈ {1, 2}, so χ(5t + 9) = 1.

A Direct Approach to the Gallai-Schur Numbers (ArXiv version 1) 6
This completes the induction. Summarising, for all t ≥ 0, χ(5t + 5) = χ(5(t + 1)) ∈/ {1, 2}. χ(5(t + 1) + 1) = χ(5(t + 1) + 4) = 1, and χ(5(t + 1) + 2) = χ(5(t + 1) + 3) = 2.
We see that the integers in Rr that are divisible by 5 are not of colour 1 or 2. Those integers must therefore be coloured in such a way that if they are all divided by 5, the resulting sets will themselves form a strong or weak Gallai-Schur partition, according to the same property of Rr, using two fewer colours than Rr. We now also see that m must have residue 4 modulo 5 : if not, we could extend the interval by adding members to S1 or S2 to make it so – which would contradict the assumed maxima-
lity of Rr. (It should be clear from the above that the extension of this pattern of colouring integers not divisible by 5 can never give rise to monochromatic or rainbow sums.) Summarising the above, the members of S1 consist exactly of all the members of [1, m] with residue 1 or 4 modulo 5, and the members of S2 consist exactly of all the members of [1, m] with residue 2 or 3 modulo 5. All members of all the other subsets must be divisible by 5. The multiples of 5 in that pattern form a subset o-
f the interval [1, m], such that if any two members of that subset form part of an additive triple within the interval, then the other member of that triple is a member of the same subset. Thus we can form a new partition of [1, (m − 4)/5] by taking the subsets St of Rr for t > 2, dividing their members by 5, and re-labelling them with indices reduced by 2. We have clearly created the inverse of the mapping 5Θ. Since there are no weak pairs in S1 or S2, the new partition is strong or weak accordin-
g to the status of Rr. This proves the first part of the theorem. Moving to the second part, the only alternative assumption for χ(3) to avoid a rainbow colouring is that χ(3) = 1. Since r > 3, by the argument of reflection used above, we cannot have χ(4) = 2. To avoid a monochromatic sum, we cannot have χ(4) = 1. Therefore χ(4) = 3. For χ(5), we must look at the two possible triples with c = 5. We deduce that χ(5) ∈ {1, 3} and χ(5) ∈ {1, 2} to avoid rainbow sums. Thus χ(5) = 1, and we have the in-
itial colour sequence “12131”. We can now see that no even integer up to 8 can be of colour 1, since we avoid monochromatic sums. We also know χ(6) must be either 2 or 3, to avoid a rainbow sum. Whichever it is, we know that χ(7) ∈ {1, 3} and χ(7) ∈ {1, 2}. Thus χ(7) = 1. This pattern can also be seen to repeat indefinitely: all the odd integers are members of S1 and all the even integers are in other subsets. A formal proof is omitted, although only a simpler version of the proof above is needed.-
 We observe that the order m must be odd, since otherwise we could add the odd integer (m + 1) to S1, which would be a contradiction of maximality.

A Direct Approach to the Gallai-Schur Numbers (ArXiv version 1) 7
As in the first part, we can form a new partition of [1, (m − 1)/2] by taking the subsets St of Rr for t > 1, dividing their members by 2, and re-labelling them with indices reduced by 1. We have clearly created the inverse of the mapping 2Θ. Since there are no weak pairs in S1, the new partition is again strong or weak according to the status of Rr. This proves the second part of the theorem, which now includes all possible colourings of a maximal partition.
5. Size of Maximal Partitions
To examine the size of a maximal Gallai-Schur partition, we start with any such partition Qr of [1, m] into exactly r colrs. To better manage the arithmetic, we define a simple function g(Qr) = |Qr| + 1 = (m + 1). Theorem 2 tells us that provided r > 3, Qr is the image of another Gallai-Schur partition under either 5Θ or 2Θ, and that we can determine which is the mapping concerned and apply the inverse mapping. If we apply the inverse of 5Θ, we will get a new partition Qr−2 of order (m − 4)/5 and -
we therefore have g(Qr−2) = g(Qr)/5. If we apply the inverse of 2Θ, we will get a new partition Qr−1 of order (m − 1)/2 and we therefore have g(Qr−1) = g(Qr)/2. We can continue this process until the number of colours remaining falls below 4. We will then have a partition Qr−t where r − t = 2 or 3. At that point we may consider how many times we have applied 2Θ−1. We find it cannot be more than once. If it were more, we could take Qr−t and apply a different sequence of iΘ (replacing two instances -
of 2Θ by one instance of 5Θ) to generate a Q′r with g(Q′r) > g(Qr), which is a contradiction on maximality. Clearly, the partition Qr−t must also be maximal, otherwise we could easily generate a larger Q′r. The maximal Gallai-Schur partitions for s colours, s < 4 are highly constrained and are easily proven to be as follows. We use two forms of notation which are equivalent, the first specifying subsets and the second listing colours of the integers in increasing order.
Strong case:
B1 = {1} ≡ “1”. |B1| = 1.
B2 = {1, 4}, {2, 3} ≡ “1221”. |B2| = 4.
B3A = B1 ∗ 5Θ = {1, 4, 6, 9}, {2, 3, 7, 8}, {5} ≡ “122131221”. |B3A| = 9.
B3B = B2 ∗ 2Θ = {1, 3, 5, 7, 9}, {2, 8}, {4, 6} ≡ “121313121”. |B3B| = 9.

A Direct Approach to the Gallai-Schur Numbers (ArXiv version 1) 8
Weak case:
C1 = {1, 2} ≡ “11”. |C1| = 2.
C2 = {1, 2, 4, 8}, {3, 5, 6, 7} ≡ “11212221”. |C2| = 8.
C3 = C2 ∗ 2Θ = {1, 3, 5, 7, 9, 11, 13, 15, 17}, {2, 4, 8, 16}, {6, 10, 12, 14} ≡ “12121312131313121”. |C3| = 17.
To be certain, these have been verified as being the only maximal cases, down to re-labelling, using a SAT-solver (Penelope).
Returning now to the main argument, we have several sub-cases to consider.
Strong case:
If r − t = 2 we must have Qr−t = B2. If r is even we therefore have g(Qr) = g(B2).5(r−2)/2 = 5.(5(r−2)/2). If r is odd, we must have g(Qr) = 2.g(B2).5(r−3)/2 =
10.(5(r−3)/2).
If r − t = 3 we must have Qr−t = B3A or B3B. If r is odd, we therefore have g(Qr−t) = g(B3A) = g(B3B) = 10 and g(Qr) = 10.(5(r−3)/2) as above. If r is even, we can produce a larger partition Q′r by setting Qr−t = B3B and replacing two
applications of 2Θ with one application of 5Θ, showing that Qr is not maximal. This contradiction shows we cannot have r − t = 3 in a maximal partition when r is even and Qr is maximal. Thus in the strong case, for r ≥ 1 we have: g(Qr) = 5(r/2) for even r, and g(Qr) = 2.(5(r−1)/2) for odd r.
Weak case:
If r − t = 2, we must have Qr−t = C2. Since we know there cannot be more than one occurrence of 2Θ−1 in the sequence of inverse mappings applied, we must have g(Qr) = g(C2).5(r−2)/2 = 9.(5(r−2)/2)) if r is even. If r is odd, g(Qr) = 2.g(C2).5(r−3)/2 = 18.(5(r−3)/2)). If r − t = 3, we must have Qr−t = C3. Since we know there cannot be more than one occurrence of 2Θ−1 in the sequence of inverse mappings applied, we must again have g(Qr) = 2.g(C3).5(r−2)/2 = 18.(5(r−3)/2) if r is odd. If r is even, w-
e have one or more occurrences of 2Θ−1 in the sequence of inverse mappings, so the value of g(Qr) will be less than g(C2).5(r−2)/2, hence Qr is not maximal. This contradiction shows we cannot have r − t = 3 in the weak case when r is even and Qr is maximal.

A Direct Approach to the Gallai-Schur Numbers (ArXiv version 1) 9
It should be clear that since each of the Qr is maximal, g(Qr) corresponds to the (strong or weak) Gallai-Schur number. Thus we have proved the following:
Theorem 3. (Strong and weak Gallai-Schur numbers) In the strong case, for r ≥ 1 we have: GS(r) = 5(r/2) for even r, and GS(r) = 2.(5(r−1)/2) for odd r.
In the weak case, we have the exceptional value W GS(r) = 3 for r = 1, and for r > 1, W GS(r) = 9.(5(r−2)/2) for even r, and W GS(r) = 18.(5(r−3)/2) for odd r.
i.e. W GS(r) = (9/5).GS(r) for r > 1.
6. Conclusions
We have precisely characterised maximal Gallai-Schur partitions, and determined the Gallai-Schur numbers. It is noted that both the weak and strong maximal Gallai-Schur partitions are unique for even r, although not for odd r. This is possible because the combination of constraints that require a triple to be free of both rainbow and monochromatic sums is very strong, so that maximal partitions take a restricted range of forms. This in turn allows us to derive exact values for weak and strong Gall-
ai-Schur numbers, replicating, for the strong case, those derived by Budden in [1].
Dedication
I dedicate this paper to the memory of my late father, Gordon Rowley, formerly of Queens’ College, Cambridge, who took on some memorable and fulfilling challenges, late in life.
References
[1] M. Budden, Schur numbers involving rainbow colourings, Ars Math. Contemp. 18 (2) (2020), 281–288.
[2] F. R. K. Chung and R. L. Graham, Edge-coloured complete graphs with precisely coloured subgraphs, Combinatorica 3 (1983), 315–324.
[3] Y. Mao, A. Robertson, J. Wang, C. Yang, and G. Yang, Gallai-Schur triples and related problems, arXiv preprint arXiv:2502.21221, (2025) https://arxiv.org/abs/2502.21221

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:23.086Z
- **Text Length:** 21470 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
