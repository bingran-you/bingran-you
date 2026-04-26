# PDF Document: Adler et al. - 2017 - On rank-width of even-hole-free graphs.pdf

**File Path:** Adler et al. - 2017 - On rank-width of even-hole-free graphs.pdf

**Processed Date:** 2026-02-10T18:17:15.633Z

**File Size:** 174.08 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2728

**Title:** On rank-width of even-hole-free graphs

**Collection:** Large Files

---

## Extracted Text Content

arXiv:1611.09907v3 [cs.DM] 1 Sep 2017
Discrete Mathematics and Theoretical Computer Science DMTCS vol. 19:1, 2017, #24
On rank-width of (diamond, even hole)-free
graphs
Isolde Adler1 Ngoc Khang Le2,3∗ Haiko Mu ̈ller1
Marko Radovanovic ́4† Nicolas Trotignon2 Kristina Vuˇskovic ́1,5‡
1 School of Computing, University of Leeds, United Kingdom 2 CNRS, ENS de Lyon, LIP, France 3 Universit ́e de Lyon, France 4 Faculty of Mathematics, University of Belgrade, Serbia 5 Faculty of Computer Science (RAF), Union University, Serbia
received 5th Dec. 2016, revised 1st Aug. 2017, accepted 3rd Aug. 2017.
We present a class of (diamond, even hole)-free graphs with no clique cutset that has unbounded rank-width.
In general, even-hole-free graphs have unbounded rank-width, because chordal graphs are even-hole-free. A. A. da Silva, A. Silva and C. Linhares-Sales (2010) showed that planar even-hole-free graphs have bounded rank-width, and N. K. Le (2016) showed that even-hole-free graphs with no star cutset have bounded rank-width. A natural question is to ask, whether even-hole-free graphs with no clique cutsets have bounded rank-width. Our result gives a negative answer. Hence we cannot apply the meta-theo-
rem by Courcelle, Makowsky and Rotics, which would provide efficient algorithms for a large number of problems, including the maximum independent set problem, whose complexity remains open for (diamond, even hole)-free graphs.
Keywords: even-hole-free graph, (diamond, even hole)-free graph, clique cutset, clique-width, rank-width
1 Introduction
In a graph G a hole is a chordless cycle of length at least four. A hole is even or odd depending on the parity of the size of its vertex set. An n-hole is a hole on n vertices. A graph G contains a graph F , if F is isomorphic to an induced subgraph of G. G is F -free if it does not contain F , and for a family of graphs F , G is F -free if for every F ∈ F , G does not contain F . A diamond is the graph obtained by removing one edge from a complete graph on four vertices. In this paper we study (-
diamond, even hole)-free graphs.
∗Partially supported by ANR project Stint under reference ANR-13-BS02-0007 and by the LABEX MILYON (ANR-10-LABX0070) of Universite ́ de Lyon, within the program “Investissements d’Avenir” (ANR-11-IDEX-0007) operated by the French National Research Agency (ANR). †Partially supported by Serbian Ministry of Education, Science and Technological Development project 174033. ‡Partially supported by EPSRC grant EP/N019660/1, by Serbian Ministry of Education, Science and Technological Development projects -
174033 and III44006.
ISSN 1365–8050 c© 2017 by the author(s) Distributed under a Creative Commons Attribution 4.0 International License

2 Isolde Adler, Ngoc Khang Le, Haiko Mu ̈ller, Marko Radovanovi ́c, Nicolas Trotignon, Kristina Vuˇskovi ́c
Even-hole-free graphs have been studied considerably in the last two decades (see surveys [22, 23]), and yet some of the key algorithmic questions remain open for this class. Finding a largest (weighted) clique in an even-hole-free graph can be done in polynomial time. As observed by Farber [14], 4-holefree graphs have O(n2) maximal cliques, so one can list them all in polynomial time. One can do better for even-hole-free graphs, by exploiting structural properties of the class. In [12] it is show-
n that every even-hole-free graph has a vertex whose neighbourhood is chordal (i.e. hole-free), and in [1] it is shown that an ordering of such vertices can be found using LexBFS, resulting in an O(nm)-time algorithm for maximum weighted clique problem for even-hole-free graphs. This algorithm is in fact robust: for any input graph G, it either outputs a maximum weighed clique of G or a certificate that G is not even-holefree. Even-hole-free graphs can be recognized in polynomial time, as first sh-
own in [6], with currently best complexity of O(n11) [4]. This result is based on a decomposition theorem for even-hole-free graphs from [13] that states that every even-hole-free graph is either simple in some sense, or has a star cutset or a 2-join. In [2] it is shown that every even-hole-free graph G has a vertex whose neighborhood is a union of two (possibly empty) cliques, implying that χ(G) ≤ 2ω(G) − 1. Despite all these attempts to understand the structure of even-hole-free graphs, the comp-
lexity of the stable set and coloring problems remains open for this class. For several subclasses of even-hole-free graphs these problems are solved in polynomial time. Of particular interest is the class of (diamond, even hole)-free graphs. The class was first studied in [18] where it was shown that (diamond, even hole)-free graphs can be decomposed by bisimplicial cutsets (a special type of a star cutset that consists of two, possibly empty, cliques) and 2-joins. One of the consequences of this-
 decomposition theorem is the existence of a vertex that is either of degree 2 or is simplicial (i.e., its neighborhood is a clique), implying that the class is β-perfect, and for every graph G in the class χ(G) ≤ ω(G) + 1. The β-perfection implies that the class can be colored in polynomial time by coloring greedily on a particular, easily constructible, ordering of vertices. The complexity of the stable set problem remains open for this class. One of the motivations for the study of even-hole-fr-
ee graphs is their connection to β-perfect graphs introduced by Markossian, Gasparian and Reed [20]. For a graph G, let δ(G) denote the minimum degree of a vertex of G. Consider the following total order on V (G): order the vertices by repeatedly removing a vertex of minimum degree in the subgraph of vertices not yet chosen and placing it after all the remaining vertices but before all the vertices already removed. Coloring greedily on this order gives the upper bound: χ(G) ≤ β(G), where β(G) = ma-
x{δ(H) + 1 : H is an induced subgraph of G}. A graph is β-perfect if for each induced subgraph H of G, χ(H) = β(H). It is easy to see that β-perfect graphs are a proper subclass of even-hole-free graphs. Tree-width is a well-known graph invariant, introduced by Robertson and Seymour in [21]. Many problems that are NP-hard in general become tractable on graph classes of bounded tree-width [8]. Similarly, clique-width, introduced by Courcelle, Engelfriet and Rozenberg in [9], allows for many hard pr-
oblems to become tractable on graph classes of bounded clique-width [10]. This includes finding the largest clique or independent set, and deciding if a colouring with at most k colors exists (for fixed k ∈ N). While bounded tree-width implies bounded clique-width, the converse is not true in general. Graph classes of bounded tree-width are necessarily sparse. In contrast, there exist dense graph classes with bounded clique-width. This makes clique-width particularly interesting in the study of al-
gorithmic properties of hereditary graph classes. The notion of rank-width was defined by Oum and Seymour in [16], where they use it for an approximation algorithm for clique-width. They also show that rank-width and clique-width are equivalent, in the sense that a graph class has bounded rank-width if, and only if, it has bounded clique-width. Mean

On rank-width of (diamond, even hole)-free graphs 3
while, the structure of graphs of bounded rank-width is studied widely, and it turns out that rank-width is an elegant notion, that also provides a better understanding of graph classes of bounded clique-width. Rank-width of subclasses of even-hole-free graphs has also been studied. In [11] it is shown that planar even-hole-free graphs have tree-width at most 49. In [19] it is shown that even-hole-free graphs with no star cutset have bounded rank-width. Even-hole-free graphs in general do not have-
 bounded tree-, clique-, rank-width, as they contain all chordal graphs. Algorithms for chordal graphs follow from their decomposition by clique cutsets, and clique cutsets in general agree well with a number of problems, including stable set and coloring. An example of even-hole-free graphs with no clique cutset and unbounded rankwidth is given in [19], which is a slight modification of the class of permutation graphs introduced in [15]. In [17] Kloks claims a proof of the fact that (diamond, eve-
n hole)-free graphs can be decomposed by clique cutsets into graphs of bounded clique-width. In this paper we exhibit a class of (diamond, even hole)-free graphs with no clique cutset that has unbounded rank-width (and hence clique-width), so disproving Kloks’ claim. Another interesting subclass of even-hole-free graphs is the class of (cap, even hole)-free graphs, where a cap is a graph made of a hole and a vertex that has exactly two neighbors on this hole, which are furthermore adjacent. Cap-fr-
ee graphs in general are decomposed by amalgams in [5]. Recently, Conforti, Gerards and Pashkovich [7], show how to obtain a polynomial-time algorithm for solving the maximum weighted stable set problem on any class of graphs that is decomposable by amalgams into basic graphs for which one can solve the maximum weighted stable set problem in polynomial time. This leads to a polynomial-time algorithm for solving the maximum weight stable set problem for (cap, even-hole)-free graphs. Subsequently, C-
ameron, da Silva, Huang and Vuˇskovic ́ [3] give an explicit construction of (cap, even hole)-free graphs, which is then used to show that (triangle, even hole)-free graphs have tree-width at most 5, and that (cap, even hole)-free graphs with no clique cutset have clique-width at most 48 (and hence bounded rank-width). This implies that a number of problems can be solved efficiently on this class, and in particular the class can be colored in polynomial time.
2 Preliminaries
Graphs are finite, simple and undirected unless stated otherwise. The vertex set of a graph G is denoted by V (G) and the edge set by E(G). A graph H is a subgraph of a graph G, denoted by H ⊆ G, if V (H) ⊆ V (G) and E(H) ⊆ E(G). For a graph G and a subset X ⊆ V (G), we let G[X] denote the subgraph of G induced by X, i.e. G[X] has vertex set X, and E(G[X]) consists of the edges of G that have both ends in X. A graph H ⊆ G is an induced subgraph of G, if H = G[X] for some X ⊆ V (G). Moreover, we le-
t G \ X := G[V (G) \ X]. The set X is a clique, if G[X] contains all possible edges. If G is connected, X is called a clique cutset if X is a clique and G \ X is disconnected. A tree is a connected, acyclic graph. A leaf of a tree is a node incident to exactly one edge. For a tree T , we let L(T ) denote the set of all leaves of T . A tree node that is not a leaf is called internal. A tree is cubic, if it has at least two vertices and every internal node has degree 3. A path is a tree where every -
node has degree at most 2. The (at most 2) leaves of a path P are called end-vertices of P . A u, v-path is a path with end-vertices u and v. A graph P is a subpath of a graph G, if P is a path and P ⊆ G. For a set X, let 2X denote the set of all subsets of X. For sets R and C, an (R, C)-matrix is a matrix where the rows are indexed by elements in R and columns indexed by elements in C. For an (R, C)matrix M , if X ⊆ R and Y ⊆ C, we let M [X, Y ] be the submatrix of M where the rows and the column-
s are indexed by X and Y , respectively. For a graph G = (V, E), let AG denote the adjacency matrix of G

4 Isolde Adler, Ngoc Khang Le, Haiko Mu ̈ller, Marko Radovanovi ́c, Nicolas Trotignon, Kristina Vuˇskovi ́c
over the binary field (i.e. AG is the (V, V )-matrix, where an entry is 1, if and only if, the column-vertex is adjacent to the row-vertex, and 0 otherwise). The cutrank function of G is the function cutrkG : 2V → N, given by
cutrkG(X) = rank (AG[X, V \ X]) ,
where the rank is taken over the binary field. A rank decomposition of a graph G is a pair (T, λ), where T is a cubic tree and λ : V (G) → L(T ) is a bijection. If |V (G)| ≤ 1, then G has no rank decomposition. For every edge e ∈ E(T ), the connected components of T − e induce a partition (Ae, Be) of L(T ). The width of an edge e is defined as cutrkG(λ−1(Ae)). The width of (T, λ), denoted by width(T, λ), is the maximum width over all edges of T . The rank-width of G, denoted by rw(G), is the minim-
um integer k, such that there is a rank decomposition of G of width k. (If |V (G)| ≤ 1, we let rw(G) = 0.)
Remark 1. Let G be a graph and H ⊆ G be an induced subgraph of G. Then rw(H) ≤ rw(G).
We say that a class C of graphs has bounded rank-width, if there exists a constant k ∈ N, such that every G ∈ C satisfies rw(G) ≤ k. If such a constant does not exist, C has unbounded rank-width. We conclude the section with two lemmas that we will use in Section 4.
Lemma 2. Let k ∈ N. Let G be a graph, P ⊆ G an induced path, (T, λ) a rank decomposition of G of width at most k, and e ∈ E(T ). Let (X, Y ) be the bipartition of V (P ) induced by the two components of T − e. Then the induced graph P [X] has at most k + 1 connected components.
Proof: Towards a contradiction, assume that P [X] has at least k + 2 components. Order the components (which are subpaths of P ) according to their appearance along P . From each component, except for the first one, pick the first vertex. In this way we obtain a set X′ ⊆ X of at least k + 1 vertices, each with one or two neighbours in Y (two neighbours only if the component is a singleton vertex). Let Y ′ be the set of vertices in Y that are adjacent to a vertex in X′. Then each row of AP [X′, Y ′-
] has one or two non-zero entries, and no two rows are equal. Ordering the vertices of X′ and Y ′ according to their appearance on P yields a matrix with blocks corresponding to subpaths of P , such that in each row the (at most two) non-zero entries appear consecutively. By the choice of X′, within each block there is at most one row with precisely one non-zero entry, while all other rows in that block have two non-zero entries. With this it is easy to see that the rows of each block are linearly-
 independent, and it follows that AP [X′, Y ′] has rank at least k + 1. Since P is induced, we have AP [X′, Y ′] = AG[X′, Y ′], and hence the width of e is at least k + 1, a contradiction to the width of (T, λ) being at most k.
We use the following definition, several variants of which exist in the literature.
Definition 3. Let T be a tree. We call an edge e ∈ E(T ) balanced, if the partition (Ae, Be) of L(T )
satisfies 1
3 |L(T )| ≤ |Ae| and 1
3 |L(T )| ≤ |Be|.
The following lemma is well-known and we omit the proof.
Lemma 4. Every cubic tree has a balanced edge.
Lemma 5. For m, k ∈ N with k > 1, let G be a graph, P ⊆ G be an induced path and |V (G)|−|V (P )| = m. Let (T, λ) be a rank decomposition of G of width at most k, and let e ∈ E(T ) be a balanced edge. Let (X, Y ) be the bipartition of V (P ) induced by e. Then each of the two induced subgraphs P [X] and
P [Y ] contains a connected component with at least
⌊ |V (G)|−3m 3(k+1)
⌋
vertices.

On rank-width of (diamond, even hole)-free graphs 5
Proof: Since e is balanced, we have |X| ≥ 1
3 |V (G)| − m and |Y | ≥ 1
3 |V (G)| − m. By Lemma 2, both
P [X] and P [Y ] have at most k + 1 connected components, which proves the lemma.
3 Construction
In this section we construct a class of (diamond, even-hole)-free graphs (Gd)d≥1. For 1 ≤ k ≤ d, let
Sk = {(a1, a2, . . . , ak−1, ak) : a1, a2, . . . , ak−1 ∈ {1, 3}, ak ∈ {1, 2, 3, 4}},
and Sd = ⋃d
k=1 Sk. If u ∈ Sk, then we denote l(u) = k, and say that the length of u is k.
In Sd, let 4 denote the lexicographical order defined as follows. For a = (a1, a2, . . . , ak) ∈ Sd and b = (b1, b2, . . . , bl) ∈ Sd, a 4 b if and only if k ≤ l and ai = bi for 1 ≤ i ≤ k, or t = min{i : ai 6= bi} is well-defined and at < bt. This order is a total order on the finite set Sd, so we introduce the following notation:
• for a ∈ Sd \ {(4)}, s(a) is the smallest element (w.r.t. 4) of Sd that is greater than a;
• for a ∈ Sd \ {(1)}, p(a) is the greatest element (w.r.t. 4) of Sd that is smaller than a.
Let Pd′ denote the path on vertex set Sd connecting the vertices according to the lexicographic order,
and let Pd be the path obtained from Pd′ by subdividing every edge uv ∈ E(Pd′ ) twice if l(u) = l(v), and once, otherwise. Finally, let Wd = {v1, v2, . . . , vd} be a set of (new) vertices, such that vk, for 1 ≤ k ≤ d, is adjacent to all vertices of Sk and all other vertices of Wd. Then, Gd is the graph induced by the set Wd ∪ V (Pd). For vertices of Wd we say that they are centers of Gd. Figure 1 shows G4.
Remark 6. For d ≥ 1, the following hold:
(i) |Sd| = ∑d
k=1 4 · 2k−1 = 4(2d − 1) ≥ 2d+1, and
(ii) 3|Sd| + d ≥ |V (Gd)| ≥ 2|Sd| ≥ 2d+2.
Proof: Part (i) follows from the fact that for k = 1, the set Sk contains 4 vertices, and that the number of vertices in the set doubles whenever k increases by one. Part (ii) follows from Part (i) and the number of subdivision vertices added in the construction of Pd.
Remark 7. For d ≥ 1, every u ∈ Sd, with u 6= (4), satisfies |l(u) − l(s(u))| ≤ 1.
Let us introduce some additional notation for the elements of Sd. For a, b ∈ Sd, interval [a, b] is the set {c ∈ Sd : a 4 c 4 b}. We say that an interval [a, b] is proper if for all c ∈ [a, b] \ {a, b},
l(c) 6∈ {l(a), l(b)}. Note that [a, b] = ⋃
a4c≺b[c, s(c)]. For an interval [c, s(c)], a 4 c ≺ b, we say that it
is a step of [a, b], and if additionally l(c) = l(s(c)), we say that this step is flat.
Lemma 8. Let a, b ∈ Sd. If [a, b] is a proper interval such that l(a) = l(b), then it contains an odd number of flat steps.
Proof: Our proof is by induction on the number of elements of [a, b]. If [a, b] has only 2 elements, that is if b = s(a), then the lemma trivially holds. Let a = (a1, a2, . . . , ak).

6 Isolde Adler, Ngoc Khang Le, Haiko Mu ̈ller, Marko Radovanovi ́c, Nicolas Trotignon, Kristina Vuˇskovi ́c
v1
v2 v3
v4
(1,1,1,1)
(1,1,1,2)
(1,1,1,3)
(1,1,1,4)
(1,1,3,1)
(1,1,3,2)
(1,1,3,3)
(1,1,3,4)
(1,3,1,1)
(1,3,1,2)
(1,3,1,3)
(1,3,1,4)
(1,3,3,1)
(1,3,3,2)
(1,3,3,3)
(1,3,3,4)
(3,1,1,1)
(3,1,1,2)
(3,1,1,3)
(3,1,1,4)
(3,1,3,1)
(3,1,3,2)
(3,1,3,3)
(3,1,3,4)
(3,3,1,1) (3,3,1,2) (3,3,1,3)
(3,3,1,4)
(3,3,3,1)
(3,3,3,2)
(3,3,3,3)
(3,3,3,4)
(1,1,1)
(1,1,2)
(1,1,3)
(1,1,4)
(1,3,1)
(1,3,2)
(1,3,3)
(1,3,4)
(3,1,1)
(3,1,2)
(3,1,3)
(3,1,4)
(3,3,1)
(3,3,2)
(3,3,3)
(3,3,4)
(1,1)
(1,2)
(1,3)
(1,4)
(3,1)
(3,2)
(3,3)
(3,4)
(1)
(2)
(3)
(4)
Figure 1: The graph G4

On rank-width of (diamond, even hole)-free graphs 7
Case 1. ak = 2.
In this case b = (a1, a2, . . . , ak−1, 3) and [a, b] = {a, b}, so the conclusion trivially follows.
Case 2. ak ∈ {1, 3}.
In this case b = (a1, a2, . . . , ak−1, ak + 1). If k = d, then [a, b] = {a, b}, and the conclusion follows. So, let k < d. Then
[a, b] = [a, a(1)] ∪ [a(1), a(2)] ∪ [a(2), a(3)] ∪ [a(3), a(4)] ∪ [a(4), b],
where a(i) = (a1, a2, . . . , ak, i), for 1 ≤ i ≤ 4. Since s(a) = a(1) and s(a(4)) = b, the number
of flat steps of [a, b] is the sum of the numbers of flat steps of [a(i), a(i+1)], for 1 ≤ i ≤ 3. Note that a(i) and a(i+1), for 1 ≤ i ≤ 3, are consecutive (k + 1)-tuples of Sd, i.e. the interval [a(i), a(i+1)] is proper. Therefore, by induction, each of the intervals [a(i), a(i+1)], for 1 ≤ i ≤ 3, has an odd number of flat steps, and hence so does the interval [a, b].
Case 3. ak = 4.
In this case ak−1 ∈ {1, 3}, so
a = (a1, . . . , ai−1, 1, 3, . . . , 3
} {{ } k−i−1
, 4),
where 1 ≤ i ≤ k − 1 (a has at least one coordinate equal to 1, since there does not exist a k-tuple in Sd which is larger than the k-tuple (3, . . . , 3, 4)).
If i = k − 1, then s(a) = (a1, . . . , ai−1, 2), s(s(a)) = (a1, . . . , ai−1, 3) and s(s(s(a))) = (a1, . . . , ai−1, 3, 1) = b, and hence the interval [a, b] has one flat step.
So, let i < k − 1. Then
s(a) = (a1, . . . , ai−1, 1, 3, . . . , 3
} {{ } k−i−2
, 4),
p(b) = (a1, . . . , ai−1, 3, 1, . . . , 1
} {{ } k−i−1
),
b = (a1, . . . , ai−1, 3, 1, . . . , 1
} {{ } k−i
).
So, the number of flat steps of the interval [a, b] is the same as the number of flat steps of the interval [s(a), p(b)]. Since s(a) and p(b) are consecutive (k − 1)-tuples of Sd, the interval [s(a), p(b)] is proper, and the conclusion follows by induction.
Lemma 9. Let a, b ∈ Sd. If [a, b] is a proper interval such that l(a) 6= l(b), then it does not contain a flat step.

8 Isolde Adler, Ngoc Khang Le, Haiko Mu ̈ller, Marko Radovanovi ́c, Nicolas Trotignon, Kristina Vuˇskovi ́c
Proof: Note that the set Sd is symmetric, so we may assume that l(a) > l(b). Let a = (a1, . . . , ak−1, ak). If ak < 4, then a ≺ (a1, . . . , ak−1, ak +1), and hence [a, b] is not proper, since there does not exist c ∈ Sd such that (a1, . . . , ak−1, ak) ≺ c ≺ (a1, . . . , ak−1, ak + 1) and l(c) < k. So, ak = 4. If a = (3, . . . , 3
} {{ } k−1
, 4),
then b = (3, . . . , 3
} {{ } l−1
, 4), where l = l(b), and the conclusion follows. So, let
a = (a1, . . . , ai−1, 1, 3, . . . , 3
} {{ } k−i−1
, 4) ,
where 1 ≤ i ≤ k − 1, and
a′ = (a1, . . . , ai−1, 3, 1, . . . , 1
} {{ } k−i
).
The elements of the interval [a, a′] are the following (given in increasing order):
(a1, . . . , ai−1, 1, 3, . . . , 3
} {{ } k−i−1
, 4), (a1, . . . , ai−1, 1, 3, . . . , 3
} {{ } k−i−2
, 4), . . . , (a1, . . . , ai−1, 2),
(a1, . . . , ai−1, 3), (a1, . . . , ai−1, 3, 1), . . . , (a1, . . . , ai−1, 3, 1, . . . , 1
} {{ } k−i
).
Since [a, b] is proper, it holds b ≺ a′. Additionally, since [a, b] does not contain an element of length equal to l(b), b is an element of [a, a′] from the first row of the given list. Now it is clear that [a, b] contains zero flat steps.
For an interval [a, b] in Sd, let P[a,b] be the path of Gd induced by ⋃
a4c≺b V (Pc). Since path Pc is of
odd length if and only if l(c) = l(s(c)), path P[a,b] is of odd length if and only if [a, b] contains an odd number of flat steps.
Theorem 10. The graph Gd is (diamond, even hole)-free for all d ≥ 1 and Gd has no clique cutset for all d ≥ 2.
Proof: First, suppose that Gd contains a diamond D for some d ≥ 1. Since Pd is a path, V (D) 6⊆ V (Pd), and since D is not a clique V (D) 6⊆ Wd. The neighborhood in Pd of every vertex of Wd is a stable set, so |V (D) ∩ V (Pd)| ≤ 2. On the other hand, every vertex of Pd is adjacent to at most one vertex of Wd, so |V (D) ∩ V (Wd)| ≤ 2. Hence, |V (D) ∩ V (Pd)| = |V (D) ∩ Wd| = 2. But then D has at most 4 edges, a contradiction. Now, suppose that Gd contains an even hole H for some d ≥ 1. Since Pd is -
a path, V (H) ∩ Wd 6= ∅, and since Wd is a clique |V (H) ∩ V (Wd)| ≤ 2. First suppose that V (H) ∩ V (Wd) = {vk}, for some 1 ≤ k ≤ d. Since vk has exactly two neighbors in H, V (H) = {vk} ∪ V (P[a,b]), where a, b ∈ Sd are such that l(a) = l(b) = k and the interval [a, b] is proper. Then, by Lemma 8, interval [a, b] contains an odd number of flat steps, and hence path P[a,b] and hole H are of odd length, a contradiction. So, V (H) ∩ V (Wd) = {vk, vl}, for some 1 ≤ k < l ≤ d. Then V (H) = {vk, vl} ∪-
 V (P[a,b]), where a, b ∈ Sd are such that {l(a), l(b)} = {k, l} and the interval [a, b] is proper. Then, by Lemma 9, interval [a, b] does not contain a flat step, and hence path P[a,b] is of even length, i.e. the hole H is of odd length (since the length of H is by 3 larger than the length of P[a,b]), a contradiction.

On rank-width of (diamond, even hole)-free graphs 9
Let d ≥ 2 and suppose that Gd has a clique cutset K. We distinguish between three cases. First, if K ⊆ Wd then K does not separate since Pd is a path and every vertex in Wd \ K has a neighbor in Pd. Second, if K ⊆ V (Pd) then Pd − K has two components. In Gd − K these are connected via Wd since d ≥ 2. Hence we are in the third case and may assume K ∩ Wd 6= ∅ and K ∩ V (Pd) 6= ∅. By construction, no vertex of Pd is contained in a triangle, and hence |K| ≤ 2. Consequently K = {u, vi} for u ∈ V (Pd) -
and 1 ≤ i ≤ d. The vertex u is neither (1) nor (4) since both are adjacent to v1 ∈ Wd and neither {(1), v1} nor {(4), v1} are cutsets of Gd. It follows that (1) and (4) are separated by K. Since v1 is adjacent to both (1) and (4) we have i = 1, and hence u is (2) or (3). But then v2 has a neighbor in both components of Pd − u, a contradiction.
4 Lower bound
In this section we prove that the rank-width of the class (Gd)d≥1 constructed in the previous section is unbounded.
Lemma 11. If d ≥ 1 and P is a subpath of Pd such that |V (P ) ∩ Si| ≥ 3 for some i (1 ≤ i ≤ d), then V (P ) ∩ Sj 6= ∅ for every j satisfying i ≤ j ≤ d.
Proof: Since |V (P )∩Si| ≥ 3, there exist two vertices of the form (a1, . . . , ai−1, 1) and (a1, . . . , ai−1, 2), or two vertices of the form (a1, . . . , ai−1, 3) and (a1, . . . , ai−1, 4) in P , where ak ∈ {1, 3} for 1 ≤ k < i. But then, by the definition of the order 4 for Sd, P must contain some vertex of length j for every j satisfying i ≤ j ≤ d.
Lemma 12. If P is a subpath of Pd such that |V (P )| ≥ c|V (Gd)|, where 0 < c < 1 and d > 2⌊log2 1
c⌋+
4, then V (P ) ∩ Sj 6= ∅ for every j satisfying ⌊log2 1
c ⌋ + 3 ≤ j ≤ d.
Proof: If V (P ) ∩ Sj 6= ∅ for every j ∈ {1, . . . , d}, then the conclusion trivially holds. Hence, we may assume that V (P ) ∩ Sj = ∅ for some j ∈ {1, . . . , d}.
Claim 1. |V (P )| > 6d.
Proof of Claim 1: Suppose that |V (P )| ≤ 6d. Since |V (P )| ≥ c|V (Gd)| ≥ c · 2d+2 (the first inequality is by the assumption, and the second by Remark 6), it follows that 6d ≥ c · 2d+2, which is equivalent to log2 1
c ≥ d − log2 d + 2 − log2 6. Since d − log2 d ≥ d
2 , for all d ≥ 4
(which is the case by assumption), and 2 − log2 6 > −1, we have that log2 1
c>d
2 − 1, which is
equivalent to d < 2 log2 1
c + 2, a contradiction. This completes the proof of Claim 1.
Claim 2. For some t ∈ {1, . . . , d}, |V (P ) ∩ St| ≥ 3.
Proof of Claim 2: Suppose that for all t ∈ {1, . . . , d}, |V (P ) ∩ St| ≤ 2. Let a′ and b′ be the endnodes of P , and let a (resp. b) be the first (resp. last) vertex of Sd encountered when traversing P from a′ to b′. Since for some j, V (P ) ∩ Sj = ∅, the interval [a, b] contains at most d − 2 + 1 + d − 2 = 2d − 3 steps (note that this bound can be achieved when [a, b] contains vertices (2) and (3), the d − 2 elements of Sd that precede (2), and the d − 2 elements of Sd that succeed (3)). For ea-
ch step [u, s(u)], the u, s(u)-subpath of P is of length at most three. The a, a′-subpath of P and the b, b′-subpath of P are each of length at most two. It follows that

10 Isolde Adler, Ngoc Khang Le, Haiko Mu ̈ller, Marko Radovanovi ́c, Nicolas Trotignon, Kristina Vuˇskovi ́c
the length of P is at most 3(2d − 3) + 2 · 2 = 6d − 5, and hence |V (P )| ≤ 6d, contradicting Claim 1. This completes the proof of Claim 2.
By Claim 2 and Lemma 11, for some i < d, V (P ) ∩ Si = ∅ and V (P ) ∩ Sj 6= ∅ for j ∈ {i + 1, . . . , d}. By Remark 7, V (P ) ∩ Sj = ∅ for j ∈ {1, . . . , i}. Therefore, there exist two vertices u, v ∈ Si, u 4 v, such that P is contained in the subpath P ′ of Pd from u to v and V (P ′) ∩ Si = {u, v}. Let u = (a1, . . . , ai).
Claim 3. ai ∈ {1, 3}.
Proof of Claim 3: We consider the following cases:
• If ai = 2 then v = s(u). Hence, |V (P ′)| = 4.
• If ai = 4, then u = (a1, . . . , ai′−1, 1, 3, . . . , 3, 4), where 1 ≤ i′ ≤ i − 1 (u has at least one coordinate equal to 1, otherwise there does not exist a tuple in Si which is larger than u). Since v is the next element in Si which is larger than u, v = (a1, . . . , ai′−1, 3, 1, . . . , 1). By the discussion in the proof of Lemma 9, the number of elements of Sd in the interval [u, v] is 2(i − i′ + 1) and we have that 2(i − i′ + 1) ≤ 2i ≤ 2d. Since there are at most two vertices of P ′ between-
 any two consecutive elements in Sd, |V (P ′)| ≤ 3 · 2d = 6d.
Both cases contradict Claim 1. This completes the proof of Claim 3.
Since there are at most two vertices of P ′ between any two consecutive elements in Sd and by Claim 3,
|V (P ′)| ≤ 3|[u, v]| = 3(∑d−i−1
j=0 4 · 2j + 2) < 12(∑d−i−1
j=0 2j + 1) = 12 · 2d−i < 2d−i+4. So by Remark 6, we have that
2d−i+4 > |V (P ′)| ≥ |V (P )| ≥ c|V (Gd)| ≥ c · 2d+2 .
Hence 22−i > c, or equivalently i < 2 + log2 1
c , proving the lemma.
Lemma 13. For any d ≥ 22 we have rw(Gd) > d/3.
Proof: Suppose that rw(Gd) ≤ k = d/3. Let (T, λ) be a rank decomposition of Gd of width at most k. Let e ∈ E(T ) be a balanced edge (it exists by Lemma 4), and let M be the adjacency matrix of Gd. Let (X, Y ) be the bipartition of V (Gd) induced by e. Appying Lemma 5 for Gd and the path Pd (|V (Gd)| − |V (Pd)| = d), there exist two subpaths PX , PY of Pd in Gd[X] and Gd[Y ], respectively, such
that |V (PX )|, |V (PY )| ≥
⌊ |V (Gd)|−3d 3(k+1)
⌋
≥ |V (Gd)|
4(k+1) (note that the second inequality holds by Remark
6 and the fact that d ≥ 22). Applying Lemma 12 (using the fact that d ≥ 22) with c = 1
4(k+1) and
letting c′ = ⌊log2( 1
c )⌋ + 3 = ⌊log2(k + 1)⌋ + 5, we have V (PX ) ∩ Sj 6= ∅ and V (PY ) ∩ Sj 6= ∅ for
every j satisfying c′ ≤ j ≤ d. W.l.o.g. let X be the set containing at least half of the center vertices in {vc′, . . . , vd}. Let I = {i ∈ {c′, . . . , d} | vi ∈ X} (the set of indices of center vertices in X), and fix a vertex ai ∈ Y ∩ Si for every i ∈ I, which exists because V (PY ) ∩ Si 6= ∅. We have |I| ≥ d−c′+1
2.
Let SX = {vi | i ∈ I} and SY = {ai | i ∈ I}. Note that SX ⊆ X and SY ⊆ Y . Because each vertex vi in SX has exactly one neighbor in SY (namely ai), we have that M [SX , SY ] = 1|I| (identity matrix). Therefore, rank(M [SX , SY ]) = |I|. We have
k ≥ width(T, λ) ≥ cutrkG(X) = rank(M [X, Y ]) ≥ rank(M [SX , SY ]) = |I| ≥ d − c′ + 1
2,

On rank-width of (diamond, even hole)-free graphs 11
which is equivalent to d ≤ 2k + c′ − 1 = 2k + ⌊log2(k + 1)⌋ + 4 = 2d/3 + ⌊log2(d/3 + 1)⌋ + 4, a contradiction since d ≥ 22.
From Lemma 13 and Remark 6 we obtain that the rankwidth of Gd grows at least logarithmically with |V (Gd)|, since if d ≥ 22 then rw(Gd) > d/3 ≥ (log2 |V (Gd)| − 4)/3. From Theorem 10 and Lemma 13 we have the following theorem.
Theorem 14. The family of (diamond, even hole)-free graphs Gd, d ≥ 2, without clique cutsets has unbounded rank-width.
For completeness, observe that rw(Gd) ≤ d + 1 for all d ∈ N. To see this, take a cubic tree T with |V (Gd)| leaves, where the internal nodes form a path. Via the bijection λ : V (Gd) → L(T ), pick the linear ordering on Wd ∪V (Pd), which starts with v1, v2, v3, . . . , vd, followed by the vertices of Pd in their canonical order (see Figure 2).
v1 v2 v3 vd (1) (1,1) (1,1,1) (3,3,4) (3,4) (4)
Figure 2: A rank decomposition of Gd of width at most d + 1.
Let e be an edge of T and let (X, Y ) be the bipartition of V (Gd) induced by e. Since rank(M [X, Y ]) ≤ min(|X|, |Y |) we may assume |X|, |Y | > d and {v1, v2, . . . , vd} ⊆ X. Now the vertices in Y have at most d + 1 different neighbours in X. Hence the width of e is at most d + 1, proving that rw(Gd) ≤ d + 1.
References
[1] P. Aboulker, P. Charbit, N. Trotignon, and K. Vuˇskovic ́, Vertex elimination orderings for hereditary graph classes, Discrete Mathematics 338 (2015), no. 5, 825–834.
[2] L. Addario-Berry, M. Chudnovsky, F. Havet, B. A. Reed, and P. D. Seymour, Bisimplicial vertices in even-hole-free graphs, Journal of Combinatorial Theory Series B 98 (2008), 1119–1164.
[3] K. Cameron, M. V. G. da Silva, S. Huang, and K. Vuˇskovic ́, Structure and algorithms for (cap, even hole)-free graphs, submitted, 2016.
[4] H.-C. Chang and H.-I. Lu, A faster algorithm for recognising even-hole-free graphs, Journal of Combinatorial Theory Series B 113 (2015), 141–161.
[5] M. Conforti, G. Cornue ́jols, A. Kapoor, and K. Vuˇskovic ́, Even and odd holes in cap-free graphs, Journal of Graph Theory 30 (1999).
[6] , Even-hole-free graphs, part II: Recognition algorithm, Journal of Graph Theory 40 (2002), 238–266.
[7] M. Conforti, B. Gerards, and K. Pashkovich, Stable sets and graphs with no even hole, Mathematical Programming Series B 153 (2015), 13–39.

12 Isolde Adler, Ngoc Khang Le, Haiko Mu ̈ller, Marko Radovanovi ́c, Nicolas Trotignon, Kristina Vuˇskovi ́c
[8] B. Courcelle, Graph rewriting: An algebraic and logic approach, Handbook of Theoretical Computer Science vol. B (Jan van Leeuwen, ed.), Elsevier/MIT Press, 1990, pp. 194–242.
[9] B. Courcelle, J. Engelfriet, and G. Rozenberg, Handle-rewriting hypergraph grammars, Journal of Computer and System Sciences 46 (1993), 218–270.
[10] B. Courcelle, J. A. Makowsky, and U. Rotics, Linear time solvable optimization problems on graphs of bounded clique width, Theory of Computing Systems 33 (2000), 125–150.
[11] A. A. da Silva, A. Silva, and C. Linhares-Sales, A bound on the treewidth of planar even-hole-free graphs, Discrete Applied Mathematics 158 (2010), 1229–1239.
[12] M. V. G. da Silva and K. Vuˇskovic ́, Triangulated neighborhoods in even-hole-free graphs, Discrete Mathematics 307 (2007), 1065–1073.
[13] , Decomposition of even-hole-free graphs with star cutsets and 2-joins, Journal of Combinatorial Theory Series B 103 (2013), 144–183.
[14] M. Farber, On diameters and radii of bridged graphs, Discrete Mathematics (1989).
[15] M. C. Golumbic and U. Rotics, On the clique-width of some perfect graph classes, International Journal of Foundations of Computer Science 11 (2000), 423–443.
[16] S. i. Oum and P. D. Seymour, Approximating clique-width and branch-width, Journal of Combinatorial Theory Series B 96 (2006).
[17] T. Kloks, Graphs without even holes or diamonds, arXiv:1104.3920v1[math.CO], 2011.
[18] T. Kloks, H. Mu ̈ller, and K. Vuˇskovic ́, Even-hole-free graphs that do not contain diamonds: a structure theorem and its consequences, Journal of Combinatorial Theory Series B 99 (2009), 733800.
[19] N. K. Le, in preparation.
[20] S. E. Markossian, G. S. Gasparian, and B. A. Reed, β-perfect graphs, Journal of Combinatorial Theory Series B 67 (1996).
[21] N. Robertson and P. D. Seymour, Graph minors II: Algorithmic aspects of tree-width, Journal of Algorithms 7 (1986), 309–322.
[22] K. Vuˇskovic ́, Even-hole-free graphs: A survey, Applicable Analysis and Discrete Mathematics 4 (2010), 219–240.
[23] , The world of hereditary graph classes viewed through Truemper configurations, London Mathematical Society Lecture Note Series, vol. 409, Cambridge University Press, 2013, pp. 265325.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:15.633Z
- **Text Length:** 34050 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
