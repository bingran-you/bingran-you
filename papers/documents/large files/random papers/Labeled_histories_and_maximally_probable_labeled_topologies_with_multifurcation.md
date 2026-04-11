# PDF Document: Dickey and Rosenberg - 2025 - Labeled histories and maximally probable labeled topologies with multifurcation.pdf

**File Path:** Dickey and Rosenberg - 2025 - Labeled histories and maximally probable labeled topologies with multifurcation.pdf

**Processed Date:** 2026-02-10T18:17:24.627Z

**File Size:** 218.04 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3614

**Title:** Labeled histories and maximally probable labeled topologies with multifurcation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Labeled histories and maximally probable labeled topologies
with multifurcation
Emily H. Dickey∗ & Noah A. Rosenberg∗
November 24, 2025
Abstract
In mathematical phylogenetics, labeled histories describe the sequences by which sets of labeled lineages coalesce to a shared ancestral lineage. We study labeled histories for at-most-r-furcating trees. Consider a rooted leaf-labeled tree in which internal nodes each have i offspring, and i is permitted to range from 2 to r across internal nodes, for a specified value of r. For labeled topologies with n leaves, we enumerate the total number of labeled histories with at-most-r-furcation. We enumer-
ate the labeled histories possessed by a specific at-most-r-furcating labeled topology. We then demonstrate that the maximally probable at-most-r-furcating unlabeled topology on n > 2 leaves—the unlabeled topology whose labelings have the largest number of labeled histories—is the maximally probable strictly bifurcating unlabeled topology on n leaves. Finally, we enumerate labeled histories for at-most-r-furcating labeled topologies in a setting that permits simultaneous branchings. We similarly r-
educe the problem of identifying the maximally probable at-most-r-furcating unlabeled topology on n > 2 leaves, allowing simultaneity, to that of identifying the maximally probable strictly bifurcating unlabeled topology on n leaves, with simultaneity; we conjecture the shape of this bifurcating unlabeled topology. The computations contribute to the study of multifurcation, which arises in various biological processes, and they connect to analogous mathematical settings involving precedence-constr-
ained scheduling.
Keywords: labeled histories, multifurcation, phylogenetic models
Mathematics subject classification (MSC2020): 05A15, 05C05, 92D15
Author for correspondence: Noah A. Rosenberg. Email: noahr@stanford.edu.
1 Introduction
In evolutionary models that give rise to tree structures, the labeled history is an important concept. For a leaflabeled tree on n leaves, a labeled history encodes the sequence of branchings that produce the specific labeled tree topology. The labeled histories produce a state space for probabilistic computations; the enumerations of labeled histories with n leaves, and of labeled histories compatible with a specific n-leaf labeled topology, therefore assist in such computations. Under the Yule–H-
arding probability model on labeled histories [6, 15], each labeled history is equally likely to be produced by the process of evolutionary descent. Hammersley & Grimmett [5], building on a conjecture of Harding [6], described a sequence of bifurcating unlabeled tree shapes, growing with the number of leaves n, whose associated labeled topologies maximize the number of labeled histories among all labeled topologies at fixed numbers of leaves. Degnan & Rosenberg [1] termed these unlabeled shapes, a-
nd their associated labeled topologies, maximally probable: among labeled topologies with a fixed number of leaves, the labeled topologies with the maximally probable unlabeled shape have the highest probability under the Yule–Harding model. Degnan & Rosenberg [1] used the maximally probable unlabeled tree shapes in a proof concerning gene tree and species tree labeled topologies. The maximally probable shapes have also appeared in various other phylogenetic combinatorics problems [2, 3]. Much of -
the mathematical study of evolutionary trees has focused on bifurcating trees. However, multifurcating trees—in which internal nodes of a tree might possess more than two immediate offspring—arise
∗Department of Biology, Stanford University, Stanford, CA 94305 USA
1
arXiv:2511.16799v1 [q-bio.PE] 20 Nov 2025

in the context of models for phenomena such as epidemic transmission, large family sizes, high variance in reproductive success, and adaptive radiation [4, 8, 11]. Mathematically convenient formulations for multifurcating trees include strict r-furcation, in which each internal node of a tree possesses precisely r immediate descendants for a constant r > 2, and at-most-r-furcation, in which internal nodes are permitted to vary from 2 to r in their numbers of immediate descendants [8]. Previously,-
 we extended classical enumeration results for labeled histories from bifurcating trees to strict r-furcation [2]. Specifically, (1) we enumerated the total number of labeled histories across all r-furcating labeled topologies with n leaves, and (2) we enumerated labeled histories for a specific labeled topology with n leaves. In addition, (3) we conjectured the maximally probable r-furcating unlabeled tree shape for n leaves. We also considered problems (1) and (2) in the setting in which simulta-
neous branching events are permitted, counting “tie-permitting labeled histories” both with bifurcation and with strict r-furcation. In this paper, we extend these results to at-most-r-furcation. For non-simultaneous at-most-r-furcation, we (1) we enumerate the total number of labeled histories across all at-most-r-furcating labeled topologies with n leaves, and (2) we enumerate labeled histories for a specific at-most-r-furcating labeled topology with n leaves. Next, (3) we show that the maximall-
y probable at-most-r-furcating unlabeled tree shape on n leaves is the maximally probable bifurcating unlabeled tree shape on n leaves. For simultaneous atmost-r-furcation, we solve problems (1) and (2), enumerating the total number of tie-permitting labeled histories across all at-most-r-furcating labeled topologies and enumerating tie-permitting labeled histories for a specific at-most-r-furcating labeled topology on n leaves. We (3) reduce the problem of identifying the maximally probable at-mo-
st-r-furcating unlabeled tree shape on n leaves, with simultaneity, to that of identifying the maximally probable bifurcating unlabeled tree shape on n leaves, with simultaneity. We present a conjecture describing this bifurcating shape.
2 Definitions
Definitions largely follow Dickey & Rosenberg [2], tracing to Steel [13] and King & Rosenberg [7]; definitions for at-most-r-furcating trees follow Maranca & Rosenberg [8]. We consider leaf-labeled, rooted trees T . Each leaf has a distinct label. For a tree T , nodes are leaf nodes or internal nodes; the unique root node is included among internal nodes. The labeled topology of T is its topological structure together with its leaf labels. The unlabeled tree shape or unlabeled topology of T is the-
 topological structure without the leaf labels. We indicate the number of leaves of T by |T |. For nodes v and u of T , u is descended from v and v is ancestral to u if v lies on the path from the root to u. A node is ancestral to itself and descended from itself. A pendant edge is an edge that connects an internal node to a leaf. A cherry node is an internal node with exactly two child nodes, both of which are leaves. For r > 2, in an r-furcating tree, also termed a strictly r-furcating tree, eac-
h internal node has exactly r immediate descendant nodes. The generalization of a cherry node for r-furcating trees is a broomstick node, an internal node whose r children are all leaves. In an at-most-r-furcating tree, the number of immediate descendant nodes of an internal node ranges from 2 to r across internal nodes. Bifurcation corresponds to r = 2. Strictly r-furcating trees are also at-most-r-furcating. For an at-most-r-furcating tree T whose root has immediate subtrees T1, T2, . . . , Tk, -
2 6 k 6 r, we write T = T1 ⊕ T2 ⊕ . . . ⊕ Tk. We define An as the set of at-most-r-furcating unlabeled tree shapes with n leaves. The set of all at-most-r-furcating unlabeled tree shapes is
A=
∞
⋃
n=1
An.
We have A∗ = A\A1, where we disregard the trivial tree with one leaf.
Let m : A ∪ ∅ → Z+ be the function that extracts the number of leaves of a tree; for a tree T , m(T ) = |T |. We define m(∅) = 0. Let s : A∗ → A × A × (A ∪ ∅) × . . . × (A ∪ ∅), which maps an at-most-r-furcating tree to its immediate subtrees. The empty set is included as an option for subtrees 3, 4, . . . , r, as an at-most-rfurcating tree possesses at least two subtrees but need not possess more than two. We arrange subtrees of s such that if the ith component of s, si(T ), satisfies si(T ) = ∅,-
 then sj(T ) = ∅ for all j > i. Finally, we
2

ABC
Figure 1: Bifurcatable and non-bifurcatable trees. (A) A bifurcatable at-most-trifurcating tree. (B) A bifurcatable at-most-6-furcating tree. (C) A non-bifurcatable at-most-trifurcating tree. The tree is nonbifurcatable because it possesses a node, the root node, that has more than two non-leaf child nodes.
define the function w : A ∪ ∅ → Z+, which counts internal nodes of a tree, including the root. Again, we define w(∅) = 0. For a strictly r-furcating tree T , we have
w(T ) = m(T ) − 1
r−1 .
The number of internal nodes is w(T ) = m(T ) − 1 for bifurcating trees. For a tree T , each node is associated with a time. Leaves all have the same time. In the classic YuleHarding model for bifurcating trees, internal nodes have distinct times, and the tree has non-simultaneous branching. Given a labeled topology for a rooted tree T with w internal nodes and non-simultaneous branching, a labeled history for T is a bijection f from the set of internal nodes of T to {1, 2, . . . , w(T )}, so that-
 if node u is descended from node v in T and u 6= v, then f (u) < f (v). A labeled history can be viewed as the temporal sequence of internal nodes, with the convention here that the numbers assigned to nodes increase backward in time along genealogical lines, and the root is assigned the value w(T ). The Yule–Harding model assumes that each internal node has a distinct time. If we modify the setting so that simultaneous branching is allowed, internal nodes can possess the same time, and we modify-
 the definition of a labeled history accordingly. An event is a set of internal nodes that possess the same time. If z is the number of events across all internal nodes, z 6 w(T ), then a labeled history f for T is a surjective function from the internal nodes of T to {1, 2, . . . , z}, such that if node u is descended from node v in T and u 6= v, then f (u) < f (v). The internal nodes of an event then map to the same element of {1, 2, . . . , z}. Because simultaneity is permitted, the labeled his-
tory is not injective. If internal node u is descended from v and u 6= v, then u and v are not part of the same event. We sometimes use the term tie-permitting to refer to labeled histories that allow simultaneity, as such labeled histories allow “ties” in node times. Consider a fixed number of leaves n. For a given set of labeled topologies—bifurcating, strictly r-furcating, or at-most-r-furcating, without simultaneity or with simultaneity—a maximally probable labeled topology is a labeled topolo-
gy whose number of labeled histories is greater than or equal to that of all other labeled topologies [1]. Because each labeling of an unlabeled topology gives rise to the same number of labeled histories, we use unlabeled topologies to indicate the maximally probable labeled topologies, and we refer to unlabeled topologies as maximally probable. The term maximally probable arises from the fact that under the Yule–Harding probability model, the probability that a certain labeled topology is produc-
ed by the evolutionary process is proportional to its number of labeled histories—so that labeled topologies with the most labeled histories are the most probable labeled topologies under the model. Although the YuleHarding model does not apply to sets of trees with multifurcation or simultaneity, we continue to use the term maximally probable in these settings: a maximally probable unlabeled topology refers to an unlabeled topology whose labelings possess the largest number of labeled histories. -
Finally, we define a bifurcatable tree as a tree T , with n > 1, for which each internal node has at most two non-leaf children. Trivially, every bifurcating tree is bifurcatable. The 1-leaf tree is trivially bifurcatable. Examples of bifurcatable trees appear in Figure 1.
3 Results
For at-most-r-furcating trees T with n leaves, we examine (1) the number of labeled histories across all labeled topologies, (2) the number of labeled histories for a specific labeled topology, and (3) the characterization of maximally probable unlabeled tree shapes. Section 3.1 proceeds under non-simultaneous branching. Section 3.2 allows simultaneous branching.
3

r
n2 3 4 5 6 11 1 1 1 1 21 1 1 1 1 33 4 4 4 4 4 18 28 29 29 29 5 180 320 335 336 336 6 2,700 5,360 5,665 5,686 5,687 7 56,700 123,760 131,705 132,265 132,293 8 1,587,600 3,765,440 4,028,430 4,046,980 4,047,932 9 57,153,600 145,951,680 156,800,490 157,560,312 157,599,498 10 2,571,912,000 7,019,678,400 7,567,091,700 7,605,060,162 7,607,014,464
Table 1: The total number of labeled histories for at-most-r-furcating trees with n leaves, Ar(n), as obtained by Proposition 1. The r = 2 column, A2(n), corresponds to OEIS sequence A006472, and the r = 3 column, A3(n), is OEIS sequence A358072. The diagonal An(n) is A256006. For r > n, Ar(n) = An(n). The table accords with Table 1 of [14], which reported the first terms of A2(n), A3(n), A4(n), and An(n).
3.1 At-most-r-furcating trees, non-simultaneous branching
Consider at-most-r-furcating trees with non-simultaneous bifurcations and n > 2 leaves. Fix r, r > 2. The trivial tree with a single leaf, n = 1, is also permitted.
3.1.1 Total number of labeled histories
Let Ar(n) denote the total number of labeled histories across all labeled topologies with n leaves. Trivially, Ar(1) = 1. To count labeled histories, we proceed backward in time from the n lineages. For n > 2, each group of i lineages, 2 6 i 6 min{n, r}, can be the first to coalesce, leaving n − (i − 1) lineages. The number
of such groups that can be the first to coalesce is (n
i
). Proceeding recursively, the n + 1 − i remaining lineages can coalesce in Ar(n + 1 − i) ways. Summing over all possible values of i, we have the following result.
Proposition 1. Permitting only non-simultaneous at-most-r-furcations, the total number of labeled histories on n leaves, Ar(n), satisfies Ar(1) = 1, and for n > 2,
Ar(n) =
min{n,r}
∑
i=2
(n
i
)
Ar(n + 1 − i).
Note that it is convenient to allow r > n, although no additional labeled histories exist with r > n
relative to the case of r = n. With r = 2, we have A2(n) = (n
2
)A2(n − 1) for n > 2, and the recursion reduces to the recursion that counts labeled histories for strictly bifurcating trees [2, Proposition 1]. Applying the proposition recursively, for small values of n and r, Table 1 reports the values of Ar(n).
3.1.2 Number of labeled histories for a specific topology
Next, we enumerate labeled histories for a specific at-most-r-furcating labeled topology T with non-simultaneous branchings and n leaves. Let s(T ) = (T1, T2, . . . , Tr) be the r immediate subtrees of the root of T , with (w(T1), w(T2), . . . , w(Tr)) internal nodes, respectively. Note that w(T ) = w(T1) + w(T2) + . . . + w(Tr) + 1. The computation is analogous to the case of strict r-furcation [2, eq. 3.6]. For n > 2, the number of labeled histories, N (T ), is obtained recursively by
N (T ) =
( w(T ) − 1 w(T1), w(T2), . . . , w(Tr)
)
N (T1) N (T2) · · · N (Tr), (1)
with N (T ) = 1 for |T | = 1 and T = ∅. To obtain a non-recursive formula, define V 0(T ) as the set of internal nodes of T , including the root. We expand (1) and multiply by w(T )/w(T ).
4

Proposition 2 ([12], p. 23). Permitting only non-simultaneous at-most-r-furcations, the number of labeled histories for a labeled topology T with n leaves satisfies N (T ) = 1 for n = 1 or T = ∅, and for n > 2,
N (T ) =
(w(T ))!
∏
v∈V 0(T ) w(v) ,
where w(v) is the number of internal nodes in the subtree of T rooted at v, including v itself.
With m(v) equal to the number of leaves descended from v, if w(v) = (m(v)−1)/(r−1) for all v ∈ V 0(T ), then T is strictly r-furcating. For the strictly r-furcating case, Proposition 2 recovers Proposition 8 of [2]:
N (T ) =
( n−1 r−1
)!
∏
v∈V 0(T )
( m(v)−1 r−1
) . (2)
3.1.3 Maximally probable at-most-r-furcating labeled topologies
In this section, we show that the unique maximally probable at-most-r-furcating tree shape with n leaves is the unique maximally probable strictly bifurcating tree shape. We first introduce a transformation, bifurcatization, that converts an arbitrary at-most-r-furcating tree with n leaves into a bifurcatable at-mostr-furcating tree with n leaves. We then show that bifurcatization cannot decrease the number of labeled histories, from which we conclude that the strictly bifurcating tree is maximall-
y probable. First, we introduce a transformation for trees that we call pendant-pruning.
Definition 3. Consider an at-most-r-furcating tree T and a node v. The pendant-pruning transformation Pv(T ) applied to T at node v is defined as follows:
(i) If node v possesses 2 or fewer children, then Pv(T ) = T .
(ii) If node v possesses 3 or more children, at least 2 of which are internal nodes, then Pv(T ) is obtained from T by pruning all pendant edges descended from v and their associated leaves.
(iii) If node v possesses 3 or more children, exactly 0 or 1 of which is an internal node, then Pv(T ) is obtained from T by pruning pendant edges descended from v and their associated leaves until exactly 2 children of v remain.
Because only leaves are removed, pendant-pruning does not change the number of descendant internal nodes for an internal node v. If node v possesses r = 2 immediate descendants (condition (i)), or if v possesses r > 2 descendants and the number of pendant edges is less than or equal to r − 2 (condition (ii)), then pendant-pruning has a unique result. If v possesses r > 2 descendants and the number of pendant edges is r or r − 1 (condition (iii)), then the pendant-pruned tree is not uniquely specif-
ied. Recall that an at-most-r-furcating tree is bifurcatable if each internal node has at most two non-leaf children. Consider a bifurcatable tree, T . Apply pendant-pruning to all of its internal nodes. A strictly bifurcating tree is produced, T ′. Because pendant-pruning does not alter the number of descendant internal nodes for an internal node v, by Proposition 2, N (T ′) = N (T ). We have obtained the following result.
Lemma 4. For every bifurcatable tree T with n > 1 leaves, there exists an associated pendant-pruned bifurcating tree T ′ that is obtained by pendant-pruning at each of the internal nodes of T and that has the same number of labeled histories, N (T ′) = N (T ).
We now introduce a transformation that we call bifurcatization, which converts an at-most-r-furcating tree into a bifurcatable tree. If a tree T is bifurcatable, then bifurcatization of T results simply in T . Otherwise, consider an internal node v of T that has at least 3 non-leaf subtrees: that is, if T (v) is the subtree of T rooted at v, then s(T (v)) = (T1, T2, . . . , Tk), where T1, T2, T3 6= ∅. Choose two of these subtrees, say T1
and T2, prune them from v, and construct a new subtree T1′ = T1 ⊕ T2 descended from v. We now have
s(v) = (T1′, T3, . . . , Tk, ∅), and the number of non-leaf children of node v has decreased by 1. Formally, we have the following definition.
5

ABC
Figure 2: Bifurcatization. (A) A non-bifurcatable tree. (B) A tree produced by bifurcatization at the red internal node of (A). (C) A tree produced by bifurcatization at the blue internal node of (B). The tree in (C) is bifurcatable. Bifurcatization is used in proving results 6, 9, 12, and 13.
Definition 5. Consider an at-most-r-furcating tree T and a node v. A bifurcatization Bv(T ) of T at node v is defined as follows:
(i) If node v possesses 2 non-leaf subtrees, then Bv(T ) = T .
(ii) If node v possesses at least 3 non-leaf subtrees T1, T2, . . . , Tk, then Bv(T ) is obtained from T by replacing
two of these subtrees, say T1 and T2, by a new subtree T1′ from whose root T1 and T2 are appended.
A (non-trivial) bifurcatization adds an internal node; if node v possesses at least 3 non-leaf subtrees, then the number of internal nodes of Bv(T ) exceeds that of T by 1. Note that if a node v possesses at least 3 non-leaf subtrees, then multiple bifurcatizations Bv(T ) exist. Figure 2 shows bifurcatization applied to a tree twice sequentially, producing a bifurcatable tree. We now show that bifurcatization applied to a non-bifurcatable at-most-r-furcating tree T increases the number of labeled -
histories.
Lemma 6. Consider a non-bifurcatable at-most-r-furcating tree T , and suppose T ′ is obtained from T by bifurcatization. Then N (T ′) > N (T ).
Proof. As T is non-bifurcatable, consider an internal node v that has at least 3 non-leaf subtrees, and call their roots c1, c2, . . . , cm, where j > 3. Let T ′ = Bv(T ) be a bifurcatization of T at node v. Let k be the new internal node created in the bifurcatization, with c1 and c2 as the children of k. The number of internal
nodes w(T ′) satisfies w(T ′) = w(T ) + 1. First, we show that for each labeled history of T , we can construct a labeled history of T ′. Consider a labeled history f of T , with labels {1, 2, . . . , w(T )} as the image of the internal nodes of T . We construct a labeled history f ′ for T ′, with labels {1, 2, . . . , w(T ), w(T ) + 1} as the image of the internal nodes of T ′; an example appears in Figure 3. For the node v, at which the bifurcatization takes place, suppose the numerical label is-
 f (v) = i. For i 6 l 6 w(T ), we set f ′−1(l + 1) = f −1(l). That is, we increment the label by 1 for all nodes with labels larger than or equal to that of v, so that the relative ordering of these nodes remains unchanged. We let f ′(k) = f (v) = i. We retain f ′−1(l) = f −1(l) for 1 6 l 6 i − 1; again, the relative ordering of these nodes remains unchanged. Because for each labeled history of T , we can construct at least one corresponding labeled history for T ′, N (T ) 6 N (T ′). Next, to prov-
e that the inequality is strict, we show that there exists some labeled history of T that can be associated with multiple labeled histories for T ′. Because c1, c2, . . . , cm share the same parent node in T , there must exist a labeled history of T in which f (c3) > f (c2) and f (c3) > f (c1). Let f (c3) = j, and for
j + 1 6 l 6 ω(T ), we set f ′−1(l + 1) = f −1(l). That is, we increment the label by 1 for all nodes with labels larger than that of c3, so that the relative ordering of these nodes remains unchanged. For our first labeled
history, we set f ′−1(c3) = j + 1, f −1(k) = j, and retain f ′−1(l) = f −1(l) for 1 6 l 6 j − 1. For our second
labeled history, we set f ′−1(k) = j + 1, f −1(c3) = j, and retain f ′−1(l) = f −1(l) for 1 6 l 6 j − 1.
Because for each labeled history of T , we can construct at least one corresponding labeled history for T ′ and because there exists at least one labeled history for which we can construct more than one corresponding labeled history for T ′, N (T ) < N (T ′).
With Lemmas 4 and 6, we can show that the unique maximally probable at-most-r-furcating tree with n leaves is the unique strictly bifurcating tree with n leaves. We first recall the form of the unique maximally probable strictly bifurcating tree with n > 3 leaves.
6

A7 B
5
42 3 1
6
8
6
41
7
3
2
5
Figure 3: The bifurcatization in the proof of Lemma 6. (A) Tree T . (B) Tree T ′ after the bifurcatization. The lemma constructs a labeled history for T ′ from a labeled history for T ; in (B), the node 5 corresponds to node k in the proof of the lemma.
Theorem 7 ([5]). Permitting only non-simultaneous bifurcations, the unique unlabeled topology whose labelings have the largest number of labeled histories among unlabeled topologies with n leaves takes the form Un∗ = Ut∗ ⊕ Un∗−t, where for n > 3,
t = 2⌊log2( n−1
3 )⌋+1.
The topology is obtained by a decomposition at the root into trees of size t equal to a certain power of 2, and the remainder equal to n − t. We have (t, n − t) = (1, 1) for the trivial n = 2, and for n = 3 to n = 16, (t, n − t) = (1, 2), (2, 2), (2, 3), (2, 4), (4, 3), (4, 4), (4, 5), (4, 6), (4, 7), (4, 8), (8, 5), (8, 6), (8, 7), and (8, 8). Note that by eq. 1, for maximally probable unlabeled topologies with n > 3 leaves, we can show that the number of labeled histories is strictly monotonical-
ly increasing with the number of leaves n.
Proposition 8. For n > 3 leaves, the number of labeled histories of the unique maximally probable bifurcating unlabeled topology, N (Un∗), increases monotonically with n.
Proof. We proceed by induction. It is convenient to establish monotonicity for the first several base cases by direct calculation: N (U3∗) = 1, N (U4∗) = 2, N (U5∗) = 3, N (U6∗) = 8, N (U7∗) = 20, N (U8∗) = 80.
Suppose that for all i such that 3 6 i 6 k, N (Ui∗) < N (Ui∗+1). We prove N (Uk∗+1) < N (Uk∗+2). Note that based on the sequence of base cases, we can assume k + 1 > 8, so that tk = 2⌊log2( k
3 )⌋+1 > 4.
By Theorem 7, Uk∗+1 = Ut∗k+1 ⊕ Uk∗+1−tk+1 , where tk+1 = 2⌊log2( k
3 )⌋+1, and Uk∗+2 = Ut∗k+2 ⊕ Uk∗+2−tk+2 ,
where tk+2 = 2⌊log2( k+1
3 )⌋+1. Note that tk+1, tk+2 > 4 because k + 1 > 8.
We first demonstrate that a subtree size is shared by Uk∗+1 and Uk∗+2. There are two cases. (i) If
tk+1 = tk+2, then |Ut∗k+1 | = |Ut∗k+2 |. Otherwise, (ii) if tk+1 6= tk+2, then incrementing the tree size by 1
increments the exponent of the size of the “left” subtree by 1, so that tk+2 = 2tk+1. This case requires
⌊log2( k+1
3 )⌋ = ⌊log2( k
3 )⌋ + 1. Writing l = ⌊log2( k+1
3 )⌋, log2( k+1
3 ) must be an integer, or k+1
3 = 2l, so that
for case (ii) to apply, k +2 = 3×2l +1. Because tk+2 = 2l+1, the other subtree of Uk∗+2 has size k +2−tk+2 =
3 × 2l + 1 − 2l+1 = 2l + 1 leaves. The subtrees of Uk∗+1 have sizes 2l and k + 1 − 2l = 3 × 2l − 2l = 2l+1, so
that both Uk∗+2 and Uk∗+1 have a subtree of size 2l+1. Next, by eq. 1,
N (Uk∗+2) =
(k
tk+2 − 1
)
N (Ut∗k+2 ) N (Uk∗+2−tk+2 ), (3)
N (Uk∗+1) =
( k−1
tk+1 − 1
)
N (Ut∗k+1 ) N (Uk∗+1−tk+1 ). (4)
For convenience, write the binomial coefficients Bk+2 = ( k
tk+2 −1
) and Bk+1 = ( k−1
tk+1 −1
).
Continuing the two cases above, if (i) tk+1 = tk+2, then Bk+2 > Bk+1 because (n
r
) > (n−1
r
) for n > r. We have N (Ut∗k+2 ) = N (Ut∗k+1 ), and N (Uk∗+2−tk+2 ) > N (Uk∗+1−tk+1 ) by the inductive hypothesis. Using eqs. 3
and 4, we conclude N (Uk∗+2) = Bk+2 N (Ut∗k+2 ) N (Uk∗+2−tk+2 ) > Bk+1 N (Ut∗k+2 ) N (Uk∗+1−tk+1 ) = N (Uk∗+1).
7

Otherwise, if (ii) tk+2 = 2tk+1, then k + 2 = 3 × 2l + 1, tk+2 = k + 1 − 2l = 2l+1, and
N (Uk∗+2) = (3 × 2l − 1)!
(2l+1 − 1)! (2l)! N (U ∗
2l+1 ) N (U ∗
2l+1),
N (Uk∗+1) = (3 × 2l − 2)!
(2l − 1)! (2l+1 − 1)! N (U ∗
2l ) N (U ∗
2l+1 ).
Taking the ratio of N (Uk∗+2) and N (Uk∗+1), we apply the inductive hypothesis to trees of size 2l, noting
2l > 4 for k + 1 > 8, and we obtain
N (Uk∗+2)
N (Uk∗+1) =
( 3 × 2l − 1 2l
)( N (U2∗l+1)
N (U ∗
2l )
)
> 1.
The induction is now complete.
Theorem 9. For r > 2 and n > 1, the maximally probable at-most-r-furcating tree topology with n leaves is unique, and it is the unique maximally probable strictly bifurcating tree with n leaves.
Proof. For n = 1 and n = 2, the claim is trivial, as there is only one possible tree shape. For n > 3,
let Tˆn = Un∗ be the unique maximally probable bifurcating tree with n leaves, as defined by Theorem 7. Consider an at-most-r-furcating tree, T , with n leaves. There are three cases: (i) T is a strictly bifurcating tree, (ii) T is bifurcatable but not strictly bifurcating, and (iii) T is non-bifurcatable. (i) If T is strictly bifurcating, then it is either the maximally probable strictly bifurcating tree, in which
case N (T ) = N (Tˆn), or it is not the maximally probable strictly bifurcating tree, in which case N (T ) < N (Tˆn) by the uniqueness of the maximally probable strictly bifurcating tree. (ii) If T is bifurcatable and not strictly bifurcating, then we apply pendant-pruning to produce T ∗, a bifurcating tree with n∗ < n leaves. By Lemma 4, we have N (T ) = N (T ∗), and by the monotonicity in
Proposition 8, N (T ∗) 6 N (Tˆn∗ ) < N (Tˆn), so that N (T ) < N (Tˆn).
(iii) If T is non-bifurcatable, then we sequentially apply bifurcatization until a bifurcatable tree T ′ is reached. By Lemma 6, N (T ) < N (T ′). T ′ is strictly bifurcating or it is bifurcatable but not strictly
bifurcating, so that case (i) or (ii) applies to T ′ and N (T ′) 6 N (Tˆn). Because N (T ) < N (T ′), we conclude
N (T ) < N (Tˆn).
We conclude that N (T ) 6 N (Tˆn), with equality if and only if T = Tˆn.
3.2 At-most-r-furcating trees, simultaneous branching
3.2.1 Total number of labeled histories
Let Sr(n) denote the total number of tie-permitting labeled histories across all labeled topologies with n leaves. Trivially, Sr(1) = 1. We count labeled histories by proceeding backward in time from the n lineages. We choose groups of lineages to coalesce simultaneously in the first “event.” Each such group has a number of lineages in {2, 3, . . . , r} . Specifically, let xi be the number of groups of size i, 2 6 i 6 r, that coalesce in this event. We must have 2 6 2x2 + 3x3 + . . . + rxr 6 n; th-
at is, at least 2 and at most n lineages coalesce. With fixed x2, x3, . . . , xr, without loss of generality, the groups are selected in ascending size. For groups of
size i, there are (n−∑i−1
j=2 jxj
i
) choices for the first group, (n−(∑i−1
j=2 jxj )−i i
) for the second group, and so on,
with (n−(∑i−1
j=2 jxj )−i(xi−1) i
) for the xith group. The same xi groups can be chosen in any of xi! orders. We
8

r
n2 3 4 5 6 11 1 1 1 1 21 1 1 1 1 33 4 4 4 4 4 21 31 32 32 32 5 255 420 435 436 436 6 4,815 8,625 8,990 9,011 9,012 7 130,095 250,390 262,045 262,731 262,759 8 4,763,115 9,755,865 10,241,105 10,269,469 10,270,659 9 226,955,925 491,081,920 516,730,165 518,213,374 518,275,576 10 13,646,570,175 31,014,100,075 32,695,631,150 32,791,782,443 32,795,799,470
Table 2: The total number of labeled histories, allowing simultaneity, for an at-most-r-furcating tree with n leaves, Sr(n), as obtained by Proposition 10. The r = 2 column, S2(n), corresponds to OEIS sequence A317059. The diagonal Sn(n) is A005121. As in Table 1, for r > n, Sr(n) = Sn(n).
obtain
[1
x2!
(n
2
)(n − 2 2
)
×···×
(n − 2(x2 − 1) 2
)]
×
[1
x3!
(n − 2x2 3
)(n − 2x2 − 3 3
)
×···×
(n − 2x2 − 3(x3 − 1) 3
)]
×···×
[1
xr !
(n − 2x2 − 3x3 − . . . − (r − 1)xr−1 r
)(n − 2x2 − 3x3 − . . . − (r − 1)xr−1 − r r
)
×···×
(n − 2x2 − 3x3 − . . . − (r − 1)xr−1 − r(xr − 1) r
)]
=1
x2! x3! · · · xr!
n! (2!)x2 (3!)x3 · · · (r!)xr
(n − 2x2 − 3x3 − . . . − (r − 1)xr−1 − rxr
)! .
Once all groups of all sizes coalesce in this event, we are left with n − ∑r
j=2(j − 1)xj lineages. The number of ways in which these remaining lineages can coalesce is Sr
(n − ∑r
j=2(j − 1)xj
).
Proposition 10. Permitting simultaneous at-most-r-furcations, the total number of labeled histories on n leaves, Sr(n), satisfies Sr(1) = 1, and for n > 2,
Sr(n) = ∑
{(x2,x3,...,xr) : 26∑r
j=2 jxj 6n}
n!
[ ∏r
j=2(j!)xj (xj !)](n − ∑r
j=2 jxj )! Sr
(
n−
r
∑
j=2
(j − 1)xj
)
.
In the proposition, the sum traverses the partitions of n that only contain entries of 2, 3, . . . , r (OEIS A002865 in the calculation of Sn(n)). Table 2 gives the values of Sr(n) for small values of n and r. We observe that S2(n) reduces to the number of labeled histories for bifurcating trees with simultaneity, Proposition 5 from [2]: x2 is the only nonzero element in (x2, x3, . . . , xr), so that the sum becomes
S2(n) =
⌊n/2⌋
∑
x2=1
n!
2x2 x2! (n − 2x2)! S2(n − x2).
3.2.2 Number of labeled histories for a specific topology
Next, we count the labeled histories for a labeled topology T of an at-most-r-furcating tree allowing simultaneity, extending Theorem 15 from [2]. The proof follows closely. Write E(T, z) for the number of tie-permitting labeled histories of labeled topology T with z events. For labeled topology T , the maximal number of events is the number of internal nodes w(T ), if each internal
9

node occurs at a distinct time point. The minimal number of permissible events is δ(T ), the height of tree T . Hence, for labeled topology, T , the number of events, z, must satisfy
δ(T ) 6 z 6 w(T ).
Consider an at-most-r-furcating tree T . If T has r non-empty subtrees of the root, then there exist 2r − 1 possible (non-empty) sets of subtrees. Each of these sets provides a possible “event type”: a set of subtrees that can be associated with an event as the subtrees in which simultaneous nodes associated with that event occur. We encode event type k, 1 6 k 6 2r − 1, in binary, with r digits. Reading left to right, the jth digit of the binary representation of k, 1 6 j 6 r, indicates if an even-
t occurs in subtree j. An event of type k possesses simultaneous at-most-r-furcations in all subtrees for which the binary representation of k has a 1. The z −1 non-root events each have a type among 1, 2, . . . , 2r −1. Each labeled history has a “simultaneity configuration,” a vector that counts the numbers of events of the different types. We write the simultaneity configuration c∗ = (c1 − 1, c2 − 1, . . . , c2r−1 − 1), where ck − 1 counts events of type k. It is convenient to use ck − 1 rather-
 than ck to count events of type k, as the vector c = (c1, c2, . . . , c2r−1) is then a composition of
(z − 1) + (2r − 1) into 2r − 1 ordered, positive integer parts.
Write I(c, j) = ∑2r−1
k=1 c∗kf (k, j), where f (k, j) = 1 if the r-digit binary representation of integer k has
a 1 in position j. I(c, j) counts internal nodes of subtree j for a simultaneity configuration c∗ encoded by composition c. For a simultaneity configuration c∗ that has specified numbers of events a1, a2, . . . , ar in subtrees 1, 2, . . . , r, the number of labeled histories for subtree j is E(Tj, aj). If the at-most-r-furcating tree T possesses only b immediate subtrees of the root, 2 6 b < r, then we view the tree as having r − b empty subtrees; the permissible event types k are only those inte-
gers 1 6 k < 2r − 1 whose binary representations have a 0 in the last r−b positions, so that for each composition c and associated simultaneity configuration c∗, I(c, j) = 0 for b + 1 6 j 6 r. The number of labeled histories can be written using the same recursion as for the strictly r-furcating case, with w(T ) providing a general expression for the count of internal nodes. Sums over aj with b + 1 6 j 6 r collapse to aj = 0 and the sum over c requires
consideration only of compositions with (cb∗+1, cb∗+2, . . . , cr∗) = (0, 0, . . . , 0).
Proposition 11. Permitting simultaneous at-most-r-furcations, the number of labeled histories for a labeled topology T with n leaves, N (T ), satisfies
N (T ) =
w(T )
∑
z=δ(T )
E(T, z).
The number of tie-permitting labeled histories E(T, z) satisfies
(i) If T has 1 leaf or is empty, then E(T, 0) = 1 and E(T, z) = 0 for z 6= 0.
(ii) If |T1| > 1 and |T2| > 1 and max16j6r |Tj| = 1, then E(T, 1) = 1 and E(T, z) = 0 for z 6= 1.
(iii) If max16j6r |Tj| > 1, then
E(T, z) =
min
(
w(T1),z−1
)
∑
a1 =δ(T1 )
min
(
w(T2 ),z−1
)
∑
a2 =δ(T2 )
...
min
(
w(Tr ),z−1
)
∑
ar=δ(Tr )
∑
c∈C (z+2r −2,2r −1)
r
∏
j=1
JI(c, j) = ajK
×
(r
∏
j=1
E(Tj, aj)
)( z − 1
c1∗, c2∗, . . . , c2∗r−1
)
.
The Iverson bracket J·K equals 1 if its statement holds and is 0 otherwise.
10

3.2.3 Maximally probable at-most-r-furcating tree with simultaneity
Here, we reduce the problem of identifying the maximally probable at-most-r-furcating tree shape with simultaneity to that of determining the maximally probable bifurcating tree shape with simultaneity. With simultaneity, a maximally probable tree is a topology, T , that maximizes N (T ). A topology can also maximize E(T, z), the number of labeled histories with a fixed number of leaves n and events z. We follow similar logic to our corresponding result in Section 3.1.3 without simultaneity.
Lemma 12. Consider a non-bifurcatable at-most-r-furcating tree T , and suppose T ′ is obtained from T by bifurcatization. Then, allowing simultaneity, N (T ′) > N (T ).
We omit the proof of this result, which is almost entirely identical to that of Lemma 6. The statement of this result and its proof follow those of Lemma 6 with two slight changes. First, in the construction of internal node k in the bifurcatization, we also increase the number of events by 1. Second, in the step that shows that the inequality N (T ′) > N (T ) is strict, we begin with a tie-permitting labeled history of T in which c1, c2, . . . , cj are all in the same event. With node k and the a-
dded event introduced, one tie-permitting
labeled history of T ′ places c3 and k in the same event and c1, c2 in a separate event, and another places k as its own event and keeps c1, c2, c3 together in a separate event. Note that this construction also verifies
that E(T, z) < E(T ′, z + 1).
Theorem 13. For r > 2, and n > 1, an at-most-r-furcating tree shape with the largest number of tiepermitting labeled histories among at-most-r-furcating tree shapes with n leaves is a strictly bifurcating tree.
The statement of this result and its proof follow those of Theorem 9 with two slight changes. First, for the proof, Lemma 12 is used in place of Lemma 6. Second, the statement of the result recognizes that we have not yet established that a unique at-most-r-furcating tree shape has the largest number of tie-permitting labeled histories. In the proof, if there are multiple strictly bifurcating tree shapes with the largest number
of tie-permitting labeled histories, then choose one of them arbitrarily for the role of Tˆn in the proof. We have therefore reduced the problem of finding the n-leaf at-most-r-furcating unlabeled topology whose labelings have the largest number of tie-permitting labeled histories to the problem of finding the n-leaf bifurcating unlabeled topology (or topologies) whose labelings have the largest number of tie-permitting labeled histories. We have not characterized this bifurcating unlabeled topolo-
gy, but we can state a conjecture. For 2 6 n 6 21, with z ranging in ⌈log2(n)⌉ 6 z 6 n − 1, Tables 3 and 4 report the maximal number of tie-permitting labeled histories with z events across all bifurcating unlabeled topologies with n leaves. For n = 1, one labeled history occurs with z = 0, and 0 labeled histories occur for all other z. In all cases of (n, z) in the tables, the unlabeled topology in Theorem 7 produces the maximal number of tie-permitting labeled histories. For some (n, z), we find-
 that multiple unlabeled topologies share this maximal number. However, with fixed n, this sharing of the maximum does not occur at all permissible z. We are led to the following conjectures.
Conjecture 14. Consider the set of rooted bifurcating unlabeled topologies with n leaves, permitting simultaneous bifurcations.
(i) The unlabeled topology whose labelings have the largest number of tie-permitting labeled histories takes the form in Theorem 7. This topology is unique in having the maximal value.
(ii) Further, this same unlabeled topology has the largest number of tie-permitting labeled histories with exactly z events, ⌈log2 n⌉ 6 z 6 n − 1. This topology is not necessarily unique in having the maximal value.
Note that part (ii) of the conjecture, together with Theorem 7, implies part (i). To demonstrate part (i), it suffices to show show part (ii) and to exhibit some value of z for which the topology specified by Theorem 7 uniquely achieves the maximum at that z. The required value of z is z = n − 1: with z = n − 1, no ties occur, and by Theorem 7, the tree specified by the proposition uniquely achieves the maximal number of tie-permitting labeled histories with n leaves and z = n − 1 events. As state-
d in part (ii), the maximum does not always occur for a unique unlabeled topology. For example, the two tree shapes in Figure 4 produce the maximal number of tie-permitting labeled histories for (n, z) =
11

A4 B
3 3 2 22
1 11 11 a
4
33
2
1 1 b 12 2
11
Figure 4: The two rooted bifurcating unlabeled topologies whose labelings produce the maximal number of tie-permitting labeled histories for (n, z) = (13, 4). Both trees both produce 2 tie-permitting labeled histories. Internal nodes are labeled by the events to which they are assigned. (A) The topology in Theorem 7. Two tie-permitting labeled histories are possible, with a = 1 and a = 2. (B) An alternative topology. Two tie-permitting labeled histories are possible, with b = 1 and b = 2.
(13, 4), namely 2. This pattern of non-uniqueness generalizes. For each k > 4, for (n, z) = (2k − 3, k), nonuniqueness occurs with two trees of similar structure. One of the trees—call it T1—has subtrees L1, R1 of sizes
(|L1|, |R1|) = (2k−1 − 1, 2k−1 − 2). The other, T2, has subtrees L2, R2 of sizes (|L2|, |R2|) = (2k−1, 2k−1 − 3). In the two trees, subtrees L1, R1, L2, R2 have the topologies in Theorem 7. Trees T1 and T2 both produce 2 tie-permitting labeled histories; in both trees, one internal node can be labeled 1 or 2, and all other internal nodes have a fixed label because they lie on a length-k path between leaves and the root.
4 Discussion
In this paper, we have extended results on the enumeration of labeled histories from strictly r-furcating trees to at-most-r-furcating trees. With non-simultaneous branching, we enumerated the total number of atmost-r-furcating trees on n leaves (Proposition 1) and the number of labeled histories for a specific topology (Proposition 2). We then identified the at-most-r-furcating tree with the largest number of labeled histories as the maximally probable bifurcating tree (Theorem 9). Next, allowing-
 simultaneous branching, we enumerated the total number of tie-permitting labeled histories for at-most-r-furcating trees on n leaves (Proposition 10) and the number of tie-permitting labeled histories for a specific topology (Proposition 11). We then reduced the problem of identifying the at-mostr-furcating tree with the largest number of labeled histories to that of finding the bifurcating tree with the largest number of tie-permitting labeled histories (Theorem 13). This work continues recent e-
xtensions of enumerative phylogenetic results from standard settings of nonsimultaneity and bifurcation to allow multifurcation and simultaneity. Recent interest in multifurcation traces to its potential applicability in pathogen transmission models, rapid speciation, and genealogical models for organisms in which some individuals have very large numbers of offspring [4, 8, 11]. Such settings can also possess simultaneous coalescence, so that simultaneity is of interest in extended models as well -
[2, 7]. The consideration of at-most-r-furcation here extends beyond the strict r-furcation in [2]. The mathematics of labeled histories has correspondences with concepts in other settings. King & Rosenberg [7] discussed how the labeled histories of a labeled topology correspond to sequences in which the games in a single-elimination tournament can be played. If simultaneity is permitted, then tie-permitting labeled histories specify tournament schedules allowing for multiple games to be played si-
multaneously in different arenas. More generally, the area of operations research considers precedence constraints for task scheduling [9], and a labeled history corresponds to a set of precedence constraints; simultaneity in labeled histories is analogous to availability of multiple machines in operations research. Just as labeled topologies vary in their numbers of labeled histories, sets of precedence constraints vary in their numbers of valid schedulings [10]; problems of finding maximally pro-
bable labeled topologies correspond to problems of finding, for a set of tasks, the precedence constraints that give rise to the largest number of valid schedulings. A number of computations in this study recapitulate and generalize known number sequences. For example, in Table 1, A2(n) in the r = 2 column recovers sequence A006472, A3(n) recovers sequence A358072, and the diagonal An(n) recovers sequence A256006. In Table 2, the r = 2 column, S2(n), corresponds to OEIS sequence A317059, and the d-
iagonal, Sn(n), corresponds to sequence A005121. Tables 3 and 4 (transposed) correspond to sequence A378855, with column sums following A380767.
12

Number of leaves, n z 2 3 4 5 6 7 8 9 10 11 12 13 14 15 1 1000 0 0 0 0 0 0 0 0 0 0 2 0110 0 0 0 0 0 0 0 0 0 0 3 0022 2 1 1 0 0 0 0 0 0 0 4 0 0 0 3 9 12 22 10 10 5 5 2 2 1 5 0 0 0 0 8 30 102 114 198 204 344 278 434 412 6 0 0 0 0 0 20 160 380 1,100 1,930 4,890 6,360 14,016 20,130 7 0 0 0 0 0 0 80 485 2,495 7,260 27,110 53,000 159,560 321,820 8 0 0 0 0 0 0 0 210 2,478 12,810 72,702 211,365 866,775 2,390,150 9 0 0 0 0 0 0 0 0 896 10,640 101,024 451,164 2,572,052 9,685,872 10 0 0 0 0 0 0 0 0 0 3,360 7-
0,080 529,116 4,408,404 23,150,064 11 0 0 0 0 0 0 0 0 0 0 19,200 321,600 4,357,632 33,549,120 12 0 0 0 0 0 0 0 0 0 0 0 79,200 2,307,360 28,979,280 13 0 0 0 0 0 0 0 0 0 0 0 0 506,880 13,728,000 14 0 0 0 0 0 0 0 0 0 0 0 0 0 2,745,600 Total 1 1 3 5 19 63 365 1,199 7,177 36,209 295,355 1,652,085 15,193,115 114,570,449
Table 3: For 2 6 n 6 15 leaves, the number of tie-permitting labeled histories for the maximally probable bifurcating tree shape, allowing simultaneity. Columns correspond to the number of leaves, n, and rows to the number of events, z, ⌈log2 n⌉ 6 z 6 n − 1. Each entry is found by computing E(T, z) using Proposition 11, where r = 2, for all strictly bifurcating unlabeled tree shapes on n leaves, and taking the maximum. The maximizing tree shape is, in all (n, z) in the table, the shape in Theorem -
7, but that shape is not necessarily the only maximizing shape for an entry (n, z). The maximizing total, summing across rows, is unique. The table of values for (n, z) corresponds to OEIS 378855 transposed; the total corresponds to OEIS A380767.
An outstanding problem in this study is that of identifying the (possibly non-unique) bifurcating tree shape whose labelings possess the largest number of tie-permitting labeled histories. Based on computations up to n = 21 (Tables 3 and 4), in Conjecture 14, we have conjectured that the (unique) bifurcating tree shape that produces the maximal number of tie-permitting labeled histories follows Theorem 7. A related claim, which we have demonstrated in Theorem 13, is that the (possibly non-unique) -
at-most-r-furcating tree shape with the most tie-permitting labeled histories is a bifurcating shape. Hence, if the conjecture holds, then the (unique) at-most-r-furcating tree shape with the most tie-permitting labeled histories also has the bifurcating shape in Theorem 7.
Acknowledgments. Grant support was provided by National Science Foundation grant DMS-2450005.
References
[1] J. H. Degnan and N. A. Rosenberg. Discordance of species trees with their most likely gene trees. PLoS Genetics, 2:762–768, 2006.
[2] E. H. Dickey and N. A. Rosenberg. Labelled histories with multifurcation and simultaneity. Philosophical Transactions of the Royal Society B: Biological Sciences, 380:20230307, 2025.
[3] F. Disanto and N. A. Rosenberg. Enumeration of ancestral configurations for matching gene trees and species trees. Journal of Computational Biology, 24:831–850, 2017.
[4] B. Eldon. Evolutionary genomics of high fecundity. Annual Review of Genetics, 54:213–236, 2020.
[5] J. M. Hammersley and G. R. Grimmett. Maximal solutions of the generalized subadditive inequality. In E. F. Harding, editor, Stochastic Geometry, pages 270–285. Wiley, London, 1974.
[6] E. F. Harding. The probabilities of rooted tree-shapes generated by random bifurcation. Advances in Applied Probability, 3:44–77, 1971.
[7] M. C. King and N. A. Rosenberg. On a mathematical connection between single-elimination sports tournaments and evolutionary trees. Mathematics Magazine, 96:484–497, 2023.
13

Number of leaves, n z 16 17 18 19 20 21 41 0 0 0 0 0 5 672 260 260 130 130 52 6 45,914 35,108 53,756 50,188 81,268 63,676 7 973,300 1,147,560 2,409,000 3,319,860 7,396,980 8,658,240 8 9,396,760 15,642,395 42,972,365 80,327,145 231,570,595 366,969,220 9 49,410,424 111,849,304 393,883,672 960,564,444 3,480,089,340 7,122,959,508 10 155,188,488 471,859,668 2,117,397,324 6,617,863,308 29,725,413,060 76,673,425,752 11 304,369,008 1,250,312,856 7,186,950,312 28,651,896,456 158,936,626,776 510,467,689,05-
6 12 376,231,680 2,140,177,050 16,024,041,990 81,957,989,850 563,604,210,510 2,246,305,636,905 13 284,951,040 2,365,158,180 23,815,148,060 158,943,918,980 1,370,645,607,980 6,805,224,583,410 14 120,806,400 1,630,311,540 23,382,250,892 210,260,550,500 2,321,850,953,708 14,524,535,914,746 15 21,964,800 637,665,600 14,570,322,624 186,971,378,880 2,737,984,132,416 22,032,147,914,088 16 0 108,108,000 5,222,016,800 106,955,008,160 2,204,742,219,680 23,627,935,026,696 17 0 0 820,019,200 35,568,332,800 1,-
156,376,166,400 17,515,815,233,280 18 0 0 0 5,227,622,400 356,157,235,200 8,541,180,560,640 19 0 0 0 0 48,881,664,000 2,465,468,928,000 20 0 0 0 0 0 319,258,368,000 Total 1,323,338,487 8,732,267,521 93,577,466,255 822,198,823,101 10,952,623,368,043 98,672,511,931,269
Table 4: For 16 6 n 6 21 leaves, the number of tie-permitting labeled histories for the maximally probable bifurcating tree shape, allowing simultaneity. The table continues Table 3, whose design it follows.
[8] A. R. P. Maranca and N. A. Rosenberg. Bijections between the multifurcating unlabeled rooted trees and the positive integers. Advances in Applied Mathematics, 153:102612, 2024.
[9] M. Pinedo. Scheduling: Theory, Algorithms, and Systems. Springer, Cham, Switzerland, sixth edition, 2022.
[10] D. Prot and O. Bellenguez-Morineau. A survey on how the structure of precedence constraints may change the complexity class of scheduling problems. Journal of Scheduling, 21:3–16, 2018.
[11] O. Sargsyan and J. Wakeley. A coalescent process with simultaneous multiple mergers for approximating the gene genealogies of many marine organisms. Theoretical Population Biology, 74:104–114, 2008.
[12] C. Semple and M. Steel. Phylogenetics. Oxford University Press, Oxford, 2003.
[13] M. Steel. Phylogeny: Discrete and Random Processes in Evolution. Society for Industrial and Applied Mathematics, Philadelphia, 2016.
[14] J. Wirtz. On the enumeration of leaf-labeled increasing trees with arbitrary node-degree. The Art of Discrete and Applied Mathematics, 7:P1.10, 2024.
[15] G. U. Yule. II.—A mathematical theory of evolution, based on the conclusions of Dr. J. C. Willis, F. R. S. Philosophical Transactions of the Royal Society of London. Series B, Containing Papers of a Biological Character, 213:21–87, 1925.
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:24.627Z
- **Text Length:** 50522 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
