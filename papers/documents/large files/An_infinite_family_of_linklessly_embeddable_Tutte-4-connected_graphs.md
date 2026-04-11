# PDF Document: Pavelescu and Pavelescu - 2021 - An infinite family of linklessly embeddable Tutte-4-connected graphs.pdf

**File Path:** Pavelescu and Pavelescu - 2021 - An infinite family of linklessly embeddable Tutte-4-connected graphs.pdf

**Processed Date:** 2026-02-10T18:14:09.123Z

**File Size:** 11938.17 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2761

**Title:** An infinite family of linklessly embeddable Tutte-4-connected graphs

**Collection:** Large Files

---

## Extracted Text Content

AN INFINITE FAMILY OF LINKLESSLY EMBEDDABLE TUTTE-4-CONNECTED GRAPHS
ANDREI PAVELESCU AND ELENA PAVELESCU
Abstract. For each n ≥ 14, we provide an example of a linklessly embeddable, Tutte-4-connected graph of order n.
1. Introduction
In [3], Maharry proved that the graph Q13,3, previously studied in [4] and [8], is 4-connected, triangle free graph (which he called Tutte-4-connected), and linklessly embeddable. It was only the second known such example. Through private communication with Maharry, Robertson had conjectured that K5,5 minus a perfect matching was the only graph with these properties, so Maharry’s discovery was quite extraordinary. In this article we prove that the class of linklessly embeddable Tutte-4-connected g-
raphs is quite rich, as we provide an example of such a graph for every order n ≥ 14. All the graphs considered in this article are finite and simple. A graph is called intrinsically linked (IL) if every embedding of it in the three dimensional space contains a nontrivial link. A graph which is not IL is called linklessly embeddable (nIL). The class of nIL graphs is closed under taking minors. By work of Conway and Gordon [1], Robsertson, Seymour, and Thomas [5], and Sachs [6], a graph is nIL if a-
nd only if it does not contain any of the graphs in the Petersen family as a minor. The Petersen family consists of the seven graphs obtained from K6 by performing all the possible ∇Y −moves and Y ∇−moves, as described in Figure 1.
Figure 1. ∇Y − and Y ∇−moves
A graph is called apex if it has a vertex whose deletion gives a planar graph. An apex graph is nIL [6].
Date: June 16, 2021.
1
arXiv:2106.08018v1 [math.CO] 15 Jun 2021

2 ANDREI PAVELESCU AND ELENA PAVELESCU
A graph G is the clique sum of G1 and G2 over Kp if V (G) = V (G1) ∪ V (G2), E(G) = E(G1) ∪ E(G2) and the subgraphs induced by V (G1) ∩ V (G2) in G1 and G2 are both complete of order p. We use the notation G = G1 ⊕Kp G2.
2. Main Theorem
In his 1974 paper [7] classifying 4-connected graphs, Slater introduced the notion of n-vertex splitting. Given a simple graph G and a vertex v of G of degree at least 2n − 2, a n-vertex splitting is obtained by replacing v by two adjacent vertices a and b and by adding one edge from each former neighbor of v to either a or b, but not both, such that the degree of both a and b is at least n. Theorems 0 and 1 of [7] state that any graph obtained from an n-connected graph by either adding edges or p-
erforming n-vertex splittings remains n-connected. We repeatedly use these results in our constructions. To simplify arguments about linkless embedabbility we use a result of Holt, Lova ́sz, and Schrijver [2]. It states that if G is the clique sum over S of two nIL graphs, then G is IL if and only if one can contract two or three components of G − S so that the contracted nodes together with S form a K7 minus a triangle. In particular, the clique sum over K4 of two connected nIL graphs, with the e-
xtra condition that the clique is not a vertex cut in either of the two graphs, is a nIL graph. Consider the graph T of Figure 2(a). Deleting any of its vertices produces the planar graph T ′ in Figure 2(b), thus T is an apex graph and therefore it is linklessly embeddable.
(a) (b)
Figure 2. (a) The graph T is apex. (b) The planar graph T ′.
Also consider the graph C of Figure 3(a). Deleting the vertex labeled a, produces the planar graph C′ in Figure 3(b), thus C is also an apex graph and therefore linklessly embeddable. We can now state the main result of this article.
Theorem 1. For every integer n ≥ 13, there exists a linklessly embeddable Tutte4-connected graph of order n, Tn.
Proof. Take T13 = Q13,3, the graph thoroughly analyzed in [3] and displayed in Figure 4. The graph T14 is constructed from T10 (see Figure 5) through successive

AN INFINITE FAMILY OF LINKLESSLY EMBEDDABLE TUTTE-4-CONNECTED GRAPHS 3
2
1
3
4
5
6
7
8
a
1
86
7
25 4
3
Figure 3. (a) The graph C is apex. (b) The graph C′ is planar.
Figure 4. Q13,3 is 4-connected, triangle free, and maximal linklessly embeddable.
4-vertex splittings and edge additions. Start by adding the 6 missing edges in the
2
1
3
4
5
6
7
8
ab
Figure 5. T10 is K5,5 minus a perfect matching, the original Tutte4-connected graph.
subgraph induced by {5, 6, 7, 8} to form an induced K4. We call this graph S10.

4 ANDREI PAVELESCU AND ELENA PAVELESCU
See Figure 6. This graph is no longer triangle free, but it is still 4-connected and nIL, as it is the clique sum over K4 of C and K5. Then perform a sequence of
2
1
3
4
5
6
7
8
ab
Figure 6. S10 is isomorphic to C ⊕K4 K5.
vertex splittings and edge additions as detailed in Figure 7. Build S11 from S10 by splitting the vertex labeled 8 into {8, 9} and add the edge {6, 9}. To build S12 from S11, split the vertex labeled 5 into {5, 10} and add the edge {7, 10}. The graph S13 is obtained by splitting the vertex labeled 6 into {6, 11} and T14 is obtained by further splitting the vertex labeled 7 into {7, 12}. The graph T14,
2
1
3
4
5
6
7
8
ab
9
10
2
1
3
4
5
6
7
8
ab
9
10
11
12
2
1
3
4
5
6
7
8
ab
9
10
11
2
1
3
4
5
6
7
8
ab
9
S11 S12
S13 T14
Figure 7. Building T14 from T10.

AN INFINITE FAMILY OF LINKLESSLY EMBEDDABLE TUTTE-4-CONNECTED GRAPHS 5
redrawn for clarity in Figure 8(a), was obtained from a 4-connected graph by 4-vertex splittings and edge additions, so it is 4-connected, by Theorems 0 and 1 of [7]. It is also a triangle-free graph. Finally, T14 is a subgraph of S14 of Figure 8(b), which is a nIL graph as S14 ' C ⊕K4 C. Thus T14 is also nIL.
2
1
3
4
5
6
7
8
ab
9
10
11
12
(a)
2
1
3
4
5
6
7
8
ab
9
10
11
12 (b)
Figure 8. (a) The graph T14. (b) The graph S14.
The graphs T15, T16, T17, and T18, featured in Figure 9, are obtained by successive 4-vertex splittings starting with the graph T14 and thus they are all 4-connected. Since vertex splittings do not create induced triangles, all four
2
1
3
4
5
6
7
8
ab
9
10
11
12
13
2
1
3
4
5
6
7
8
ab
9
10
11
12
13
14
2
1
3
4
5
6
7
8
ab
9
10
11
12
13
14
15
2
1
3
4
9
10
11
12
ab
5
6
7
8
13
14
15
16
T15 T16
T17 T18
Figure 9. Graphs T15 through T18.
graphs are triangle-free. Finally, they are all minors of the graph S18 featured in Figure 10 which is nIL as the consecutive clique sums over K4 of nIL graphs

6 ANDREI PAVELESCU AND ELENA PAVELESCU
(S18 ' C ⊕K4 T ⊕K4 C). This implies that T15, T16, T17, and T18 are all nIL.
2
1
3
4
9
10
11
12
ab
5
6
7
8
13
14
15
16
Figure 10. The graph S18 is isomorphic to C ⊕K4 T ⊕K4 C.
The next four graphs in this sequence are obtained from T18 by edge additions and 4-vertex splittings. The choices of edges to be added and vertices to be split generalize to higher order graphs in this sequence and constitute the inductive step for the construction of all the graphs of order more than 22. For reference, we include them in Figure 11.
2
1
3
4
9
10
11
12
ab
5
6
7
8
13
14
15
16
17
2
1
3
4
9
10
11
12
ab
5
6
7
8
13
14
15
16
17
18
2
1
3
4
9
10
11
12
ab
5
6
7
8
13
14
15
16
17
18
19
2
1
3
4
9
10
11
12
ab
5
6
7
8
13
14 15
16
17
18
19
20
T19 T20
T21 T22
Figure 11. The graphs T19 through T22.
The graph T19 is obtained from T18 by adding the edges {13, 14} and {13, 16}, so that the degree of the vertex labeled 13 becomes 6, and then by 4-splitting this vertex into {13, 17}. The graph T20 is obtained from T19 by first adding the

AN INFINITE FAMILY OF LINKLESSLY EMBEDDABLE TUTTE-4-CONNECTED GRAPHS 7
edge {14, 15} and then by 4-splitting the vertex labeled 14 into {14, 18}. The graph T21 is obtained from T20 by first adding the edge {15, 16} and then by 4-splitting the vertex labeled 15 into {15, 19}. Finally, the graph T22 is obtained by executing a 4-vertex splitting on the vertex labeled 16 into {16, 20}. Since each of these four graphs was obtained by edge additions and 4-vertex splittings starting from a 4-connected graph, they are all 4-connected, by Theorems 0 and 1 of [7]. One can easi-
ly check the graphs are triangle-free. Since they are all minors of the graph S22 ' C ⊕K4 T ⊕K4 T ⊕K4 C, featured in Figure 12, which is nIL, all the four graphs must be nIL.
2
1
3
4
9
ab
5
6
7
8
13
14
15
16
17
18
19
20
11
10
12
Figure 12. The graph S22 is isomorphic to C ⊕K4 T ⊕K4 T ⊕K4 C.
2
1
3
4
5
6
7
8
ab
4n-7
4n-6
4n-5
4n-4
4n-3
4n-2
4n-1
4n
Figure 13. The graph T4n+2.
In general, for n ≥ 5, assuming the nIL, Tutte-4-connected graph T4n+2 has already been build (see Figure 13), by the method described above one can build, by successive edge additions and 4-vertex splittings at vertices labeled 4n − 3, 4n−2, 4n−1 , and 4n, the graphs T4n+3, T4n+4, T4n+5, and T4n+6. These graphs are 4-connected by Theorems 0 and 1 of [7], and triangle-free by construction. They are all minors of the graph S4n+6, obtained by adding all the missing edges in the

8 ANDREI PAVELESCU AND ELENA PAVELESCU
subgraphs of T4n+6 induced by the vertices labeled {4k + 1, 4k + 2, 4k + 3, 4k + 4}, for 2 ≤ k ≤ n. This graph is isomorphic to C ⊕K4 T ⊕K4 . . . ⊕K4 T ⊕K4 C, where the clique sum contains (n − 2) T -summands. The graph S4n+6 is therefore nIL, and so must be T4n+3 through T4n+6.
Remark 2. In this article, we’ve presented an example of a nIL Tutte-4-connected graph for every order n ≥ 14. The constructions are dependent on the choices of edges to be added and vertices to be 4-vertex split from one order to another. For instance, the graphs of order 4n + 2, for n > 4, contain the 4-cycles {4k + 1, 4k + 2, 4k + 3, 4k + 4}, for 2 ≤ k ≤ n. For each index 2 ≤ k ≤ n, one could pick another 4-cycle on the vertices {4k + 1, 4k + 2, 4k + 3, 4k + 4} and still obtain a nIL, Tutte-4-c-
onnected graph.
Remark 3. The graph Q13,3, analyzed by Maharry in [3], is a splitter in the class of nIL graphs. In particular, none of the graphs we constructed in this article contains Q13,3 as a minor. It would be extremely interesting to know whether there is another example of a Tutte-4-connected graph of order larger than 13, which is a splitter for the class of nIL graphs.
References
1. J. Conway and C. Gordon. Knots and links in spatial graphs. J. Graph Theory 7 (1983), No. 4, 445–453. 2. H. van der Holst, L. Lov ́asz, and A. Schrijver. The Colin de Verdi`ere graph parameter, Graph Theory and Combinatorial Biology (Balatonelle, 1996), Bolyai Soc. Math. Stud. 7, Budapest: J ́anos Bolyai Math. Soc., 29–85.
3. J. Maharry. A splitter for graphs with no Petersen family minor, J. of Combinatorial Theory, Series B 72, no. 1 (1998), 136-139. 4. S.P. Randby. Embedding K5 in 4-connected graphs., PhD diss., The Ohio State University, 1991. 5. N. Robertson, P. Seymour and R. Thomas. Linkless embeddings of graphs in 3-space. Bulletin of the Amer. Math. Soc. 28 (1993), No. 1, 84–89. 6. H. Sachs. On spatial representations of finite graphs A. Hajnal, L. Lovasz, V.T. So ́s (Eds.), Colloq. Math. Soc. J ́anos Bolya-
i, Vol. 37, North-Holland, Amsterdam, 1984, 649–662. 7. P.J. Slater. A classification of 4-connected graphs, J. of Combinatorial Theory, Series B 17, no. 3 (1974), 281-298.
8. C. Thomassen. Tilings of the torus and the Klein bottle and vertex-transitive graphs on a fixed surface, Transactions of the Amer. Math. Soc. 323, no. 2 (1991), 605-635.
Department of Mathematics, University of South Alabama, Mobile, AL 36688, USA.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:09.123Z
- **Text Length:** 11206 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
