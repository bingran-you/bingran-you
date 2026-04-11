# PDF Document: Bekos et al. - 2021 - On the Queue Number of Planar Graphs.pdf

**File Path:** Bekos et al. - 2021 - On the Queue Number of Planar Graphs.pdf

**Processed Date:** 2026-02-10T18:17:52.717Z

**File Size:** 786.36 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2768

**Title:** On the Queue Number of Planar Graphs

**Collection:** Large Files

---

## Extracted Text Content

On the Queue Number of Planar Graphs
Michael A. Bekos1 , Martin Gronemann2 , Chrysanthi N. Raftopoulou3
1 Department of Computer Science, University of T ̈ubingen, Tu ̈bingen, Germany bekos@informatik.uni-tuebingen.de
2 Theoretical Computer Science, Osnabru ̈ck University, Osnabru ̈ck, Germany martin.gronemann@uni-osnabrueck.de
3 School of Applied Mathematics and Physical Sciences, NTUA, Athens, Greece crisraft@math.ntua.gr
Abstract. A k-queue layout is a special type of a linear layout, in which the linear order avoids (k + 1)-rainbows, i.e., k + 1 independent edges that pairwise form a nested pair. The optimization goal is to determine the queue number of a graph, i.e., the minimum value of k for which a k-queue layout is feasible. Recently, Dujmovi ́c et al. [J. ACM, 67(4), 22:1-38, 2020] showed that the queue number of planar graphs is at most 49, thus settling in the positive a long-standing conjecture by Heath,-
 Leighton and Rosenberg. To achieve this breakthrough result, their approach involves three different techniques: (i) an algorithm to obtain straight-line drawings of outerplanar graphs, in which the y-distance of any two adjacent vertices is 1 or 2, (ii) an algorithm to obtain 5-queue layouts of planar 3-trees, and (iii) a decomposition of a planar graph into so-called tripods. In this work, we push further each of these techniques to obtain the first non-trivial improvement of the upper bound on-
 queue number of planar graphs from 49 to 42.
Keywords: Queue layouts, Planar graphs, Queue number
1 Introduction
Linear layouts of graphs have a long tradition of study in different contexts, including graph theory and graph drawing, as they form a framework for defining different graph-theoretic parameters with several applications; see, e.g., [9]. In this regard, one seeks to find a total order of the vertices of a graph that reaches a certain optimization goal [3,7,19]. In this work, we focus on a well-studied type of linear layouts, called queue layout [12,17,18,21], in which the goal is to minimize the -
size of the largest rainbow, namely, a set of independent edges that are pairwise nested. Equivalently, the problem asks for a linear order of the vertices and a partition of the edges into a minimum number of queues (called queue number), such that no two independent edges in the same queue are nested [18]; see Fig. 1b. Queue layouts of graphs were introduced by Heath and Rosenberg [18] in 1992 as the counterpart of stack layouts (widely known also as book embeddings), in which the edges must be -
partitioned into a minimum number of stacks (called stack number), such that no two edges in the same stack cross [6]; see Fig. 1c. Since their introduction, queue layouts of graphs have been a fruitful subject of intense research with several important milestones over the years [1,2,4,13,17,21,22]; for an introduction, we refer the interested reader to [15]. The most intriguing problem in this research field is undoubtedly the problem of specifying the queue number of planar graphs, that is, the -
maximum queue number of a planar graph. This problem dates back to a conjecture by Heath, Leighton and Rosenberg, who in 1992 conjectured that the queue number of planar graphs is bounded [17]. Notably, despite the different efforts [2,8,10], this conjecture remained unanswered for more than two decades. That only changed in 2019 with a breakthrough result of Dujmovi ́c, Joret, Micek, Morin, Ueckerdt and Wood [11], who managed to settle in the positive the conjecture, as they showed that the queue-
 number of planar graphs is at most 49. The best-known corresponding lower bound is 4 due to Alam et al. [1]. It is immediate to see, however, that the gap between the currently best-known lower and upper bounds is rather large, which implies that the exact queue number of planar graphs is, up to the point of writing, still unknown. Note that this is in contrast with the maximum stack number of planar graphs, which was recently shown to be exactly 4 [5,23]. Also, the existing gap in the bounds
arXiv:2106.08003v3 [cs.DS] 5 Aug 2021

2 Michael A. Bekos, Martin Gronemann, Chrysanthi N. Raftopoulou
v1
v4
v5 v6
v2 v3
(a)
v2 v3 v5 v6 v4
v1
(b) 2-queue layout
v2 v3 v4 v5 v6
v1
(c) 2-stack layout
Fig. 1: (a) The octahedron graph and (b)-(c) different linear layouts of it.
on the queue number of planar graphs gives the intuition that it is unlikely the upper bound of 49 by Dujmovic ́ at al. [11] to be tight, even though in the last two years no improvement appeared in the literature.
Our contribution. We verify the aforementioned intuition by reducing the upper bound on the queue number of planar graphs from 49 to 42 (see Theorem 1 in Section 5). To achieve this, we present improvements to each of the following three main techniques involved in the approach by Dujmovic ́ at al. [11]: (i) an algorithm to obtain straight-line drawings of outerplanar graphs, in which the y-distance of any two adjacent vertices is 1 or 2 [14]; see Section 4.1, (ii) an algorithm to obtain 5-queue l-
ayouts of planar 3-trees [1]; see Section 4.2, and (iii) a decomposition of a planar graph into so-called tripods [11]; see Section 4.3. Although we assume familiarity with these techniques, we outline in Section 3 their most important aspects; also, for preliminary notions and standard terminology refer to Section 2.
2 Preliminaries
A drawing of a graph maps each vertex to a distinct point of the Euclidean plane and each edge to a Jordan curve connecting its endpoints. A drawing of a graph is planar, if no two edges cross (expect at common endpoints). A graph that admits a planar drawing is called planar. A planar drawing partitions the plane into topologically connected regions called faces; its unbounded one is called outer. A combinatorial embedding of a planar graph is an equivalence class of planar drawings that are pair-
wise topologically equivalent, i.e., they define the same set of faces up to an orientation-preserving homeomorphism of the plane. A planar graph together with a combinatorial embedding is a plane graph. A graph that admits a planar drawing, in which all vertices are incident to its outer face, is called outerplanar. It is known that outerplanar graphs have treewidth at most 2. A planar graph with treewidth at most 3 is commonly referred to as a planar 3-tree. Planar 3-trees are subgraphs of maxim-
al planar 3-trees, where such an n-vertex graph is either a 3-cycle, if n = 3, or has a degree-3 vertex whose deletion yields a maximal planar 3-tree with n − 1 vertices, if n > 3. A vertex order ≺ of a simple undirected graph G is a total order of its vertices, such that for any two vertices u and v of G, u ≺ v if and only if u precedes v in the order. Let F be a set of k ≥ 2 independent edges (ui, vi) of G, that is, F = {(ui, vi); i = 1, . . . , k}. If u1 ≺ . . . ≺ uk ≺ vk ≺ . . . ≺ v1, then we -
say that the edges of F form a k-rainbow, while if u1 ≺ v1 ≺ . . . ≺ uk ≺ vk, then the edges of F form a k-necklace. The edges of F form a k-twist, if u1 ≺ . . . ≺ uk ≺ v1 ≺ . . . ≺ vk; see Fig. 2. Two independent edges that form a 2-rainbow (2-necklace, 2-twist) are referred to as nested (disjoint, crossing, respectively).
u1 u2 u3 v3 v2 v1
(a)
u1 v1 u2 v2 u3 v3
(b)
u1 u2 u3 v1 v2 v3
(c)
Fig. 2: Illustration of (a) a 3-rainbow, (b) a 3-necklace, and (c) a 3-twist.
A k-queue layout of a graph consists of a vertex order ≺ of G and a partition of the edge-set of G into k sets of pairwise non-nested edges, called queues. A preliminary result by Heath and

On the Queue Number of Planar Graphs 3
v u w
(a)
u
w
v
(b)
Fig. 3: Introducing a degree-2 vertex v along the upper envelope, when its two neighbors u and w are connected with (a) a span-1 edge, and (b) a span-2 edge.
Rosenberg [18] states that a graph admits a k-queue layout if and only if it admits a vertex order in which no (k + 1)-rainbow is formed. The queue number of a graph G, denoted by qn(G), is the minimum k, such that G admits a k-queue layout. Accordingly, the queue number of a class of graphs is the maximum queue number over all its members.
3 Sketch of the involved techniques
In the following, we sketch the main aspects of the three algorithms mentioned in Section 1 that are involved in the approach by Dujmovi ́c et al. [12] to achieve the bound of 49 on the queue number of planar graphs. The first is an algorithm by Dujmovi ́c, P ́or, and Wood [14] to compute 2-queue layouts of outerplanar graphs (Section 3.1). The second one is by Alam et al. [1] to compute 5-queue layouts of planar 3-trees (Section 3.2). The last one is the actual algorithm by Dujmovic ́ et al. [12]-
 to compute 49-queue layouts of planar graphs (Section 3.3).
3.1 Outerplanar Graphs
The main ingredient of the algorithm by Dujmovic ́, Po ́r and Wood [14] is an algorithm to obtain a straight-line drawing Γ (G) of a maximal outerplane graph G whose output can be transformed into a 2-queue layout of G. The recursive construction of Γ (G) maintains the following invariant properties:
(O.1) The cycle delimiting the outerface consists of two strictly x-monotone paths, referred to as upper and lower envelopes, respectively.
(O.2) The y-coordinates of the endvertices of each edge differ by either one (span-1 edge) or two (span-2 edge).
To maintain (O.1) and (O.2), Dujmovic ́ et al. adopt an approach in which at each recursive step a vertex of degree 2 is added to the already constructed drawing; see Fig. 3. The base of the recursion consists of a triangle4 that can be trivially drawn with two span-1 edges and one span-2 edge satisfying Invariants (O.1) and (O.2). Assume that G has n > 3 vertices. Since G is biconnected outerplane, it contains a vertex v of degree 2. Removing v yields a biconnected outerplane graph G′ with n − 1 -
vertices, which recursively admits a drawing Γ (G′) satisfying Invariants (O.1) and (O.2). By Invariant (O.1), none of the edges in Γ (G′) is drawn vertically. To obtain drawing Γ (G) of G vertex v is introduced in Γ (G′) as follows. Let u and w be the neighbors of v in G. Since G is maximal outerplane, (u, w) is an edge of G that lies on the outerface of Γ (G′). By Invariant (O.2), (u, w) is either a span-1 or a span-2 edge. Assume that (u, w) is along the upper envelope of Γ (G′); the case where-
 it is along the lower envelope is symmetric. Assume first that (u, w) has span 1 in Γ (G′) and w.l.o.g. that y(u) = y(w) + 1. Then, vertex v is placed such that y(v) = y(u) + 1 and x(v) = 1
2 (x(u) + x(w)); see Fig. 3a. Hence, (u, v) and (v, w) have span 1 and 2, respectively, which
implies that Invariant (O.2) is maintained. Since edge (u, w) of the upper envelope of Γ (G′) is replaced by the x-monotone path u → v → w in Γ (G), Invariant (O.1) is also maintained. Assume now that (u, w) has span 2 in Γ (G′) and w.l.o.g. that y(u) = y(w) + 2. Then, vertex v is placed such that y(v) = y(u) − 1 and x(v) = 3x(u)+x(w)
4 ; see Fig. 3b. This implies that both edges (u, v) and (v, w) have span 1. Similarly to the previous case, one can argue that Invariants (O.1) and (O.2) are maintained. Drawing Γ (G) is transformed to a 2-queue layout of G as follows:
4 In [14], Dujmovic ́ et al. consider a single edge at the base of the recursion. To ease the presentation, we slightly modify their approach.

4 Michael A. Bekos, Martin Gronemann, Chrysanthi N. Raftopoulou
(i) for any two vertices u and v of G, u ≺ v if and only if either y(u) > y(v), or y(u) = y(v) and x(u) < x(v) in Γ (G), (ii) edge (u, v) is assigned to the first (second) queue if it has span 1 (2, respectively) in Γ (G).
3.2 Planar 3-trees
Alam et al. [1] adopt a peeling-into-levels approach [16] to produce a 5-queue layout of a maximal plane 3-tree H. Initially, the vertices of H are partitioned into levels L0, . . . , Lλ with λ ≥ 1, such that L0-vertices are incident to the outer face of H, while Li+1-vertices are in the outer face of the subgraph of H obtained by the removal of all vertices in L0, . . . , Li. The edges of H are partitioned into level and binding, depending on whether their endpoints are on the same or on consecut-
ive levels. As each connected component of the subgraph Hi of H induced by the edges of level Li is an internally triangulated outerplane graph, it is embeddable in two queues. This implies that each connected component c of Hi+1 (which is outerplane) lies in the interior of a triangular face of Hi, therefore there are exactly three vertices of Hi that are connected to c. The constructed 5-queue layout of H satisfies the following invariant properties:
(T.1) The linear order ≺H is such that all vertices of level Lj precede all vertices of level Lj+1 for every j = 0, . . . , λ − 1; (T.2) Vertices of each connected component of level Lj appear consecutively in ≺H for every j = 0, . . . , λ;
(T.3) Level edges of each of the levels L0, . . . , Lλ are assigned to two queues denoted by Q0 and Q1;
(T.4) For every j = 0, . . . , λ − 1, the binding edges between Lj and Lj+1 are assigned to three queues Q2, Q3 and Q4 as follows. For each connected component c of Hj+1, let x, y and z be its three neighbors in Hj so that x ≺H y ≺H z. Then, the binding edges between Lj and Lj+1 incident to c are assigned to Q2, Q3 and Q4 if they lead to x, y and z, respectively.
3.3 General Planar Graphs
Central in the algorithm by Dujmovi ́c et al. [12] is the notion of H-partition5, defined as follows. Given a graph G, an H-partition of G is a partition of the vertices of G into sets Ax with x ∈ V (H), called bags, such that for each edge (u, v) of G with u ∈ Ax and v ∈ Ay either x = y holds or (x, y) is an edge of H. In the former case, (u, v) is called intra-bag edge, while in the latter case inter-bag. A BFS-layering of G is a partition L = (V0, V1, . . .) of its vertices according to their d-
istance from a specific vertex r of G, i.e., it is a special type of H-partition, where H is a path and each bag Vi corresponds to a layer. In this regard, an intra-bag edge is called intra-layer, while an inter-bag edge is called inter-layer6. An H-partition has layered-width ` with respect to a BFS-layering L if each bag of H has at most ` vertices on each layer of L.
Lemma 1 (Dujmovi ́c et al. [12]). For all graphs G and H, if H admits a k-queue layout and G has an H-partition of layered-width ` with respect to some layering L = (V0, V1, . . .) of G, then
G admits a (3`k + b 3
2 `c)-queue layout using vertex order V−→0, V−→1, . . . , where V−→i is some order of Vi. In particular,
qn(G) ≤ 3` qn(H) + b 3
2 `c. (1)
In the proof of Lemma 1, the order of the vertices of G on each layer of L is defined as follows. Let x1, . . . , xh be the vertices of H as they appear in a k-queue layout QL(H) of H and let Ax1 , . . . , Axh
be the corresponding bags of the H-partition. Then, the order V−→i of each layer Vi with i ≥ 0 is:
V−→i = Ax1 ∩ Vi, Ax2 ∩ Vi, . . . , Axh ∩ Vi
5 To avoid confusion with notation used earlier, note that, in the scope of the algorithm by Dujmovi ́c et al. [12], graph H denotes a plane 3-tree, as we will shortly see. 6 Dujmovi ́c et al. [12] refer to the intra- and inter-layer edges as intra- and inter-level edges, respectively. We adopt the terms intra- and inter-layer edges to avoid confusion with the different type of leveling used in the algorithm of Alam et al. [1].

On the Queue Number of Planar Graphs 5
Vi−1
Vi
Vi+1
(a) Intra-bag edges
Vi−1
Vi
Vi+1
(b) Inter-bag edges
Fig. 4: Illustration of (a) Intra-bag edges; the intra-layer ones are red, while the inter-layer ones are blue, and (b) inter-bag edges; the intra-layer ones are green, while the inter-layer ones are purple (forward) and orange (backward).
where each subset Axj ∩ Vi is ordered arbitrarily. This gives the total order ≺G for the vertices of G. The edge-to-queue assignment, which completes the construction of the queue layout QL(G) of G, exploits the following two properties:
(P.1) Two intra-bag edges nest in ≺G, only if they belong to the same bag; see blue and red edges in Fig. 4a. (P.2) Two inter-layer edges nest in ≺G, only if their endpoints belong to the same pair of consecutive layers of L; see blue, purple and orange edges in Fig. 4.
For the edge-to-queue assignment, the edges of G are classified into four categories given by the bags of the H-partition and the layers of L. We start with edges whose endpoints belong to the same bag (i.e., intra-bag edges); see Fig. 4a.
(E.1) Intra-layer intra-bag edges of G are assigned to at most b `
2 c queues, as the queue number of
K` is b `
2 c [16]; see red edges in Fig. 4a. (E.2) Inter-layer intra-bag edges of G are assigned to at most ` queues, as the queue number of K`,` is `, when all vertices of the first bipartition precede those of the second; see blue edges in Fig. 4a.
The remaining edges of G connect vertices of different bags (i.e., inter-bag edges); see Fig. 4b. We further partition the inter-layer inter-bag edges into two categories. Let (u, v) be an inter-layer inter-bag edge with u ∈ Ax ∩ Vi and v ∈ Ay ∩ Vi+1, for some i ≥ 0. Then (u, v) is forward, if x ≺H y holds in QL(H); otherwise, it is backward; see purple and orange edges in Fig. 4b, respectively. For all inter-bag edges, in total, 3`k queues suffice (see [12, Lemma 9] for details).
(E.3) Intra-layer inter-bag edges of G are assigned to at most `k queues; on each layer, an edge of H corresponds to a subgraph of K`,`, where the first bipartition precedes the second; see green edges in Fig. 4b. (E.4) Forward inter-layer inter-bag edges of G are assigned to at most `k queues; for two consecutive layers, an edge of H corresponds to a subgraph of K`,`, where the first bipartition precedes the second; see purple edges of Fig. 4b. (E.5) Symmetrically all backward inter-layer inter-b-
ag edges of G are assigned to at most `k queues; see orange edges in Fig. 4b.
The next property follows from the proof of Lemma 9 in [12]:
(P.3) For 1 ≤ i ≤ r, let (ui, vi) be an edge of G, such that ui ≺G vi, ui ∈ Axi and vi ∈ Ayi . If all these r edges belong to one of (E.3)-(E.5) and form an r-rainbow in ≺G, while edges (x1, y1), . . . , (xr, yr) of H are assigned to the same queue in QL(H), then r ≤ ` and either u1, . . . , ur or v1, . . . , vr belong to the same bag of the H-partition of G.
If G is maximal plane, few more ingredients are needed to apply Lemma 1. A vertical path of G in a BFS-layering L is a path P = v0, . . . , vk of G consisting only of edges of the BFS-tree of L

6 Michael A. Bekos, Martin Gronemann, Chrysanthi N. Raftopoulou
and such that if v0 belongs to Vi in L, then vj belongs to Vi+j, with j = 1, . . . , k. Further, we say that v0 and vk are the first and last vertices of P . A tripod of G consists of up to three pairwise vertex-disjoint vertical paths in L whose last vertices form a clique of size at most 3 in G. We refer to this clique as the base of the tripod. Dujmovic ́ et al. [12] showed that for any BFS-layering L, G admits an H-partition with the following properties:
(P.4) H is a planar 3-tree and thus QL(H) is a k-queue layout with k ≤ 5 [1]. (P.5) Its layered-width ` is at most 3, since each bag induces a tripod in G, whose base is a triangular face of G, if it is a 3-clique.
Properties (P.4) and (P.5) along with Eq. (1) imply that the queue number of planar graphs is at most 3 · 3 · 5 + b 3
2 · 3c = 49.
4 Refinements of the involved techniques
In this section, we present refinements of the algorithms outlined in Section 3 that will allow us to reduce the upper bound on the queue number of planar graphs.
4.1 Outerplanar Graphs
We modify the algorithm by Dujmovic ́ et al. [14] outlined in Section 3.1 to guarantee two additional properties (stated in Lemma 2) of the outerplanar drawing. To this end, besides Invariants (O.1) and (O.2), we maintain a third one:
(O.3) The lower envelope consists of a single edge.
To maintain Invariant (O.3), we observe that a biconnected maximal outerplane graph with at least four vertices contains at least two non-adjacent degree-2 vertices. Let x be such a degree-2 vertex of G, which we assume to be fixed in the recursive construction of Γ (G). In particular, by our previous observation, we can always remove a degree-2 vertex that is different from x at every recursive step. This ensures that x will eventually appear in the triangle T that is drawn at the base of the rec-
ursion. We draw T , such that x is its bottommost vertex while its two incident edges are of span-1 and span-2 as follows. Let y and z be the other two vertices of T . We draw x, y and z at (2, 0), (0, 1) and (1, 2), respectively. This implies that (x, y) forms the lower envelope of T , while (y, z) and (z, x) form the upper one. This guarantees that Invariant (O.3) is maintained at the base of the recursion. Assume now that drawing Γ (G′) obtained by removing v from G satisfies Invariant (O.3), s-
uch that the edge (x, y) of T forms the lower envelope of Γ (G′). Since (x, y) belongs to the outer face of G, it follows that v is incident to two vertices of the upper envelope of Γ (G′). So, after the addition of v to Γ (G′) in order to obtain Γ (G), edge (x, y) forms the lower envelope of Γ (G), as desired. Let 〈u, v, w〉 be a face of Γ (G) such that y(u) − y(w) = 2 and y(u) − y(v) = y(v) − y(w) = 1. We refer to vertices u, v and w as the top, middle and bottom vertex of the face, respectively7-
. Further, we say that face 〈u, v, w〉 is a bottom, side and top triangle for vertices u, v and w, respectively. In the next lemma, we prove two properties of drawing Γ (G). Part (a) of Lemma 2 requires Invariant (O.3), i.e., it does not necessarily hold for all drawings obtained by the algorithm by Dujmovic ́ et al. [14]. On the other hand, part (b) of Lemma 2 holds for drawings that do not necessarily satisfy Invariant (O.3), i.e., it is a property of the original algorithm by Dujmovi ́c et al. [-
14].
Lemma 2. Let Γ (G) be an outerplanar drawing satisfying Invariants (O.1)–(O.3) of a biconnected maximal outerplane graph G. Then, each vertex of G is
(a) the top vertex of at most two triangular faces of Γ (G) and (b) the side vertex of at most two triangular faces of Γ (G).
7 Alam et al. [1] refer to the middle vertex of a triangular face in Γ (G) as its anchor.

On the Queue Number of Planar Graphs 7
Proof. For (a), consider a vertex u of G. If u is the top vertex of a face, then u is incident to a span-2 edge (u, v) with y(u) > y(v). By Invariant (O.3), u is a successor of v in the recursive approach by Dujmovi ́c et al. [14], i.e., when u is placed in Γ (G), vertex v belongs to the upper envelope. We now claim that u cannot be incident to two edges (u, v) and (u, v′) with the properties mentioned above; this claim implies the lemma. Assuming the contrary, by Invariant (O.2), when u is placed-
 in Γ (G) at most one edge incident to u has span 2. So, at most one of (u, v) and (u, v′) is drawn when u is placed in Γ (G), which implies that at least one of v and v′, say v′, is a successor of u. Thus, y(u) < y(v′) holds; a contradiction. For (b), assume for a contradiction that G contains a vertex u, which is the side vertex of three triangular faces, say T1, T2 and T3, of Γ (G). For a significantly small constant ε > 0, let p1 = (x(u) − ε, y(u)) and p2 = (x(u) + ε, y(u)), and consider the t-
wo horizontal rays r1 and r2 emanating from vertex u, such that r1 and r2 contain points p1 and p2, respectively. Since u is side vertex for T1, T2 and T3, it follows by Invariant (O.2) that the span-2 edge of each of T1, T2 and T3 crosses either r1 or r2; by the choice of ε, we may assume that if a span-2 edge of one of T1, T2 and T3 crosses r1 (r2), then point p1 (p2, respectively) lies in the interior of it. On the other hand, by outerplanarity, each of the points p1 and p2 can be contained in -
at most one of T1, T2 and T3; a contradiction.
4.2 Planar 3-trees
To maintain Invariant (T.3), Alam et al. [1] use the algorithm by Dujmovic ́ et al. [14] to assign the level edges of L0, . . . , Lλ of the input plane 3-tree H to two queues Q0 and Q1, since on each level these edges induce a (not necessarily connected) outerplane graph. Unlike in the original algorithm, in our approach we adopt the modification for the algorithm by Dujmovic ́ et al. [14] introduced in Section 4.1. As Invariants (O.1) and (O.2) are preserved, queues Q0 and Q1 suffice. To maintain-
 Invariant (T.4), Alam et al. [1] adopt the following assignment scheme for the binding edges between Lj and Lj+1 to queues Q2, Q3 and Q4, for each j = 0, . . . , λ − 1. Consider a binding edge (u, v) with u ∈ Lj and v ∈ Lj+1. Then, vertex u belongs to a connected component Cu of the subgraph Hj of H induced by the level-Lj vertices, while vertex v belongs to a connected component Cv of Hj+1. Further, Cu is outerplane and its 2-queue layout has been computed by the algorithm by Dujmovi ́c et al. [-
14], while Cv resides in the interior of a triangular face Tv of Cu in the embedding of H, such that u is on the boundary of Tv. In the edge-to-queue assignment scheme by Alam et al. [1], edge (u, v) is assigned to Q2, Q3 or Q4 if and only if u is the top, middle or bottom vertex of Tv, respectively [1]. For a vertex u ∈ Lj with j = 0, . . . , λ − 1, we denote by N2(u), N3(u) and N4(u) the neighbors of u in Lj+1 such that the edges connecting them to u are assigned to queue Q2, Q3 and Q4, respecti-
vely. The next property follows from Lemma 2.
Lemma 3. For j = 0, . . . , λ − 1, let u ∈ Lj be a vertex of H in our modification of the peelinginto-levels approach by Alam et al. [1]. Then, the vertices of N2(u) precede those of N3(u), and the vertices of N2(u) (or of N3(u)) belong to at most two connected components of Hj+1 (residing within distinct faces of Hj).
Proof. The first part of the lemma is proven in [1]. For the second part, consider a binding edge (u, v) with v ∈ N2(u); a similar argument applies when v ∈ N3(u). Thus, u is the top vertex of the triangular face Tv of Hj, in which the connected component Cv of Hj+1 that contains v resides. Since by Lemma 2(a) vertex u can be the top vertex of at most two triangular faces of Hj, there exist at most two connected components of Hj+1, to which vertex v can belong.
4.3 General Planar Graphs
Dujmovic ́ et al. [12] recursively compute the bags (i.e., the tripods) of the H-partition. Each newly discovered tripod τ is adjacent to at most three other tripods τ1, τ2 and τ3 already discovered. We say that τ1, τ2 and τ3 are the parents of τ ; see Fig. 5a. Also, each non-empty vertical path of τ is connected to only one of its parents via an edge of the BFS-tree used to construct the BFS-layering L (black in Fig. 5a). This property gives rise to at most three sub-instances (gray in Fig. 5a), -
which are processed recursively to compute the final tripod decomposition.

8 Michael A. Bekos, Martin Gronemann, Chrysanthi N. Raftopoulou
τ3
τ1
τ2
τ
p1
1 p2
1
p3
1
p2
3
p3
3
p1
3
p3
2
p2
2
p1
2
(a) τ shares no vertex with τ1, τ2, τ3
τ3
τ1
τ2
τ
p1
1 p2
1
p3
1
p2
3
p3
3
p1
3
p3
2
p2
2
p1
2
(b) τ shares a vertex with τ3
τ3
τ1
τ2
τ
p3
3
vq
i
vq
i+1
vp
i+1
vp
i
(c)
Fig. 5: (a), (b) Tripod τ with parents τ1, τ2 and τ3. (c) Illustration for (P.6) and (P.8).
Note that, in general, one or more vertical paths of a tripod may have no vertices; see Fig. 5b. However, by an appropriate augmentation of the input graph we can avoid considering this degenerate case explicitly. More precisely, we first compute a BFS tree T of G rooted at a vertex of the outer face. We next augment G by adding a triangle f ∗ in the interior of each face f of G. By an appropriate triangulation, we can obtain a triangulated plane graph G∗ that contains G as a subgraph, such that e-
ach of the newly introduced vertices of f ∗ can be added as a leaf of T to derive a BFS tree T ∗ of G∗. In this way, each original face f of G gets three leaves of T ∗ inside it, one attached to each vertex of f . By computing a tripod decomposition of G using the tree T , one obtains a collection of tripods. Each of these tripods has a “base”, which is a triangular face f of G. We produce a tripod decomposition of G∗ with respect to T ∗ by extending each tripod with base f so that its base is f ∗-
. In this way, we derive a tripod decomposition of G∗, in which every tripod has three non-empty vertical paths, as desired. Hence, without loss of generality, we assume in the following that in the tripod decomposition no vertical path of a tripod is empty. For i ∈ {1, 2, 3}, let p1
i , p2
i and p3
i be the three vertical paths of tripod τi. Up to renaming, we
assume that τ lies in the cycle bounded by (parts of) p11, p21, p12, p22, p13 and p23 as in Fig. 5a. The next properties follow by planarity and the BFS-layering:
(P.6) There is no edge connecting a vertex of τ to a vertex of p3
i for i = 1, 2, 3; see the dotted edge in Fig. 5c. (P.7) Let vp
i be the vertex of vertical path p of τ on layer Vi of L. For two vertical paths p and q of
τ , edge (vp
i , vq
j ) belongs to G only if |i − j| ≤ 1.
(P.8) For vertical paths p and q of τ , at most one of the edges (vp
i , vq
i+1) and (vp
i+1, vq
i ) exists in G; see the dashed edges of Fig. 5c.
Note that (P.6)–(P.8) hold even if τ has less than three parents, or if the cycle bounding the region of τ does not contain two vertical paths of each parent tripod. In the original algorithm by Dujmovi ́c et al. [12], each vertex vτ in H corresponds to a tripod τ in G, and an edge (vτ , vτ′ ) exists in H, if τ is a parent of τ ′ in G, or vice versa. Also, H is a connected partial planar 3-tree, which is arbitrarily augmented to a maximal planar 3-tree H′ (to compute a 5-queue layout of it). Here,-
 we adopt a particular augmentation to guarantee an additional property for the graph H′ (see Lemma 4). Similarly to the original approach, we contract the vertices of each tripod τ of G to a single vertex vτ . However, in our modification, we keep self-loops that occur when an edge of G has both endpoints in τ (unless this edge belongs to one of its vertical paths), as well as, parallel edges that occur when two vertices of τ have a common neighbor not in τ . Two important properties of this cont-
raction scheme that follow directly from planarity are given below; see Fig. 6.
(P.9) The edges around each contracted vertex vτ appear in the same clockwise cyclic order as they appear in a clockwise traversal along τ in G. (P.10) The edges having at least one endpoint on the same vertical path of τ appear consecutively around vτ ; see Fig. 6b.
To guarantee simplicity, we focus on homotopic self-loops and pairs of parallel edges, which contain no vertex either in the interior or in the exterior region that they define. We remove such self-loops

On the Queue Number of Planar Graphs 9
(a) (b)
Fig. 6: (a) A tripod τ in G where the edges incident to its three vertical paths are drawn dotted, and (b) the result after contracting τ to vτ .
and keep one copy of such parallel edges. Then, we subdivide each self-loop twice, and for each edge with multiplicity m > 1, we subdivide all but one of its copies. In this way, each vertex vτ corresponding to a tripod τ in G always lies in the interior of a separating 3-cycle C that contains all the vertices corresponding to its parent tripods on its boundary. To see this, observe that if τ has three parent τ1, τ2 and τ3, then C is formed by vτ1 , vτ2 and vτ3 , such that vτ is connected to each -
of them. If τ has two parent τ1 and τ2, then C is formed by vτ1 , vτ2 and a subdivision vertex, such that vτ is connected to vτ1 and vτ2 . Finally, if τ has only one parent τ1, then C is formed by vτ1 and two subdivision vertices, such that vτ is connected to vτ1 . Since subdivision vertices are of degree 2, the result is a simple (possibly not maximal) planar 3-tree, which is a supergraph of H. To derive H′, we augment it to maximal by adding edges, while maintaining its embedding [20].
Lemma 4. Let vτ and vτp be two vertices of H′ that correspond to a tripod τ and to a parent tripod τp of τ in G. If Li and Lj are the levels of vτ and vτp in the peeling-into-levels approach for H′, then i ≥ j.
Proof. Let C be the inclusion-minimal separating 3-cycle of H′ containing vτ in its interior and all vertices that correspond to the parent tripods of τ on its boundary. Let Lk, Ll and Lm be the levels of the three vertices of C, with k ≤ l ≤ m, in the peeling-into-levels approach for H′. As τp is a parent of τ , j ∈ {k, l, m} holds. Since C is a 3-cycle and since each edge in the peeling-into-level approach is either level or binding, m ≤ k + 1 holds. The fact that vτ lies in the interior of C an-
d is connected to each of the vertices in H′ corresponding to its parent tripods in G, implies that vτ is on level Lk+1, i.e., i = k + 1. So, j ≤ m ≤ k + 1 = i holds.
As in the original algorithm by Dujmovi ́c et al. [12], we compute a 5-queue layout QL(H′) of H′. However, we use our modification of the algorithm by Alam et al. [1] described in Section 4.2. Denote by x1, . . . , xh the vertices of the subgraph H of H′ as they appear in QL(H′) (i.e., we ignore subdivision vertices introduced when augmenting H to H′) and by Q0, . . . , Q4 the queues of QL(H′) as described in Invariants (T.1)–(T.4). To compute the linear layout QL(G) of G, we use Lemma 1, which or-
ders the vertices of each layer Vi, with i ≥ 0, of L as:
V−→i = Ax1 ∩ Vi, Ax2 ∩ Vi, . . . , Axh ∩ Vi,
where Ax1 , . . . , Axh are the bags (i.e., the tripods) of the H-partition of G. Unlike in the original algorithm, we do not order the vertices in each subset Axj ∩ Vi, with j ∈ {1, . . . , h}, arbitrarily. Instead, we carefully choose their order; we describe this choice in the rest of this section. Let τ be the tripod of bag Axj . Then, Axj ∩ Vi contains at most one vertex of each vertical path of τ . We will order the three vertical paths of τ , which defines the order of the (at most three) v-
ertices of Axj ∩ Vi for every i ≥ 0. Let Ll be the level of vτ in the peeling-into-levels of H′, with 0 ≤ l < λ. By Lemma 3, there are at most four connected components cs1, cs2, ct1 and ct2 of the subgraph H′
l+1 of H′ induced by the
vertices of Ll+1, such that the edges connecting vτ to vertices of cs1 and cs2 (ct1 and ct2) belong to Q2

10 Michael A. Bekos, Martin Gronemann, Chrysanthi N. Raftopoulou
vt
c1
s
c2
t
c1
t
c2
s
(a)
c1
s
c2
t
c1
t
c2
s
(b)
Vi
Vi+1
u1 u2 u3
v3 v2 v1
p1 p2 p3
...
...
...
...
...
...
(c)
Fig. 7: Illustrations for: (a)-(b) the fact that Cases (i) and (ii) in the selection of the first vertical path of τ cannot apply simultaneously, and (c) the proof of Lemma 5.
(Q3, respectively). Let c be one of cs1, cs2, ct1 and ct2; c may contain vertices that correspond to tripods
in G (i.e., not to subdivisions introduced while augmenting H to H′). We refer to the union of these vertices of G as the tripod-vertices of c. By Invariant (T.1), vτ precedes the vertices of cs1, cs2,
ct1 and ct2 in QL(H′). Also by (T.2), we may assume that the vertices of cs1 (ct1) precede those of cs2
(ct2, respectively). Additionally, Lemma 3 ensures that the vertices of cs2 precede those of ct1. Since an edge (vτ , vτ′ ) exists in H, if τ is a parent of τ ′, or vice versa, by Lemma 4, for each vertex vτ′ of H that is a neighbor of vτ in one of cs1, cs2, ct1 and ct2, it follows that τ is a parent of τ ′.
By Property (P.6), there is a vertical path of τ in G, say p (q), such that no tripod-vertex of cs2 (ct2, respectively) is adjacent to it in G. Note that p and q might be the same vertical path of τ . We now describe the order of the three vertical paths of τ . We only specify the first one; the other two can be arbitrarily ordered: (i) if the tripod-vertices of cs1 and cs2 are connected to all
three vertical paths of τ in G, then p is the first vertical path of τ ; (ii) if the tripod-vertices of ct1
and ct2 are connected to all three vertical paths of τ in G, then q is the first vertical path of τ ; (iii) otherwise, any vertical path of τ can be first. Before proving formally that Cases (i) and (ii) cannot apply simultaneously (which implies that the order of the vertical paths of τ is well defined), we state two important implications of the described choice for the first vertical path of τ .
(P.11) Under our assumption that all vertices of cs1 precede those of cs2, if tripod-vertices of cs1 and
cs2 are connected to all three vertical paths of τ , then tripod-vertices of cs2 are not connected to the first vertical path of τ . (P.12) Also, under our assumption that all vertices of ct1 precede those of ct2, if tripod-vertices of
ct1 and ct2 are connected to all three vertical paths of τ , then tripod-vertices of ct2 are not connected to the first vertical path of τ .
We now prove that Cases (i) and (ii) in the selection of the first vertical path of τ cannot apply simultaneously. Assume for a contradiction that the tripod-vertices of cs1 and cs2 are connected to
all three vertical paths of τ , and also that the tripod-vertices of ct1 and ct2 are connected to all three
vertical paths of τ . Since vτ is the top vertex of the two triangular faces ft1 and ft2 that contain
ct1 and ct2 in their interior in Γ (H′
l ), it follows that the edges connecting vτ to ct1 and ct2 appear
consecutively around vτ in the cyclic order of the binding edges between levels Ll and Ll+1 of H′; refer to the blue edges of Fig. 7a. Also, since vτ is the side vertex of the two triangular faces fs1
and fs2 that contain cs1 and cs2 in their interior in Γ (H′
l ), we may assume w.l.o.g. that the edges
connecting vτ to cs1 immediately precede the edges connecting vτ to ct1 and ct2, while the edges
connecting vτ to cs2 immediately follow them; refer to the green edges of Fig. 7a (note that since we
have assumed that the vertices of cs1 precede the vertices of cs2, our assumption on the order of the
edges around vτ is a property of the algorithm by Alam et al. [1]). Now, if the tripod-vertices of cs1
and cs2 are connected to all three vertical paths of τ , and the same holds for the tripod-vertices of ct1
and ct2, then Property (P.10) implies that in G the edges connecting vertices of τ to tripod-vertices
of ct1 and ct2 alternate with edges connecting vertices of τ to tripod-vertices of cs1 and cs2; see e.g.
Fig. 7b. Hence, the cyclic order of the edges around vτ in H′ is not the same as the cyclic order of the edges incident to vertices of τ along a clockwise traversal of τ in G, contradicting Property (P.9). Hence, Case (i) and (ii) cannot apply simultaneously, as we initially claimed.

On the Queue Number of Planar Graphs 11
5 Reducing the bound
To reduce the bound, we turn our attention to the analysis of the required number of queues for the intra-bag inter-layer edges (E.2), as well as for the inter-bag edges (i.e., either intra-layer (E.3) or inter-layer (E.4)–(E.5)) given by Dujmovic ́ et al. [12]; refer to Section 3.3. For intra-bag inter-layer edges (E.2), the original algorithm by Dujmovic ́ et al. [12] uses three queues, since ` = 3; see blue edges in Fig. 4a. We prove that no three intra-bag inter-layer edges form a 3-rainbow, i-
mplying that the upper bound on the queue number of planar graphs can be improved from 49 to 48.
Lemma 5. In the queue layout computed by our modification of the algorithm by Dujmovi ́c et al. [12], no three intra-bag inter-layer edges of G form a 3-rainbow.
Proof. Assume to the contrary that there exist three such edges (u1, v1), (u2, v2) and (u3, v3) forming a 3-rainbow in QL(G) so that u1 ≺G u2 ≺G u3 ≺G v3 ≺G v2 ≺G v1. By (P.1) these edges belong to the same bag A of the H-partition, while by (P.2) their endpoints belong to two consecutive layers Vi and Vi+1 of L. Due to the order, u1, u2, u3 ∈ Vi and v1, v2, v3 ∈ Vi+1. The order of A ∩ Vi and A ∩ Vi+1 is u1 ≺G u2 ≺G u3 and v3 ≺G v2 ≺G v1; see Fig. 7c. Let p1, p2 and p3 be the first, second and thi-
rd vertical paths of tripod τ forming A. Then, (u1, v3) ∈ p1, (u2, v2) ∈ p2 and (u3, v1) ∈ p3. However, (u1, v1) and (u3, v3) contradict (P.8).
For inter-bag edges (E.3)–(E.5), the algorithm by Dujmovi ́c et al. [12] uses 3 · 15 queues, since k = 5 and ` = 3; see green, purple and orange edges in Fig. 4b. We exploit (P.3) to prove that 3 · 13 queues suffice. This further improves the upper bound on the queue number of planar graphs from 48 to 42.
Lemma 6. In the queue layout computed by our modification of the algorithm by Dujmovi ́c et al. [12], the inter-bag edges of G do not form a 40-rainbow.
Proof. To prove the statement, it suffices to show that the inter-bag edges of G that belong to each of (E.3)–(E.5) form at most a 13-rainbow. We focus on the edges of (E.3), that is, on the intra-layer inter-bag edges of G; the other two types of edges, i.e., forward and backward inter-layer inter-bag edges, can be treated similarly. We partition the edges of (E.3) into five subsets E30, . . . , E34, such
that for i = 0, . . . , 4, set Ei3 contains the following subset of (E.3)-edges of G:
Ei
3 = {(u, v) ∈ (E.3) : u ∈ Ax, v ∈ Ay, (x, y) ∈ Qi}.
By Property (P.3), the edges of Ei3 can form at most a 3-rainbow (this property actually implies the initial bound of 15 queues for all intra-layer inter-bag edges of G by Dujmovi ́c et al. [12]). We next prove that neither the edges of E32 nor the edges of E33 form a 3-rainbow, which yields the desired reduction from 15 to 13 on the size of the maximum rainbow formed by the edges of (E.3). Assume that this is not true, say for the edges of E32; a symmetric argument applies for the
edges of E33. Let (u1, v1), (u2, v2) and (u3, v3) be three edge of E32 that form a 3-rainbow, such that u1 ≺G u2 ≺G u3 ≺G v3 ≺G v2 ≺G v1. Since (u1, v1), (u2, v2) and (u3, v3) are (E.3)-edges, i.e., intra-layer edges, their endpoints u1, u2, u3, v1, v2 and v3 all belong to the same layer of the BFS-layering of G8. Assuming that ui ∈ Axi and vi ∈ Ayi , it follows that (xi, yi) is an edge of H assigned to Q2 and xi ≺H yi. By Property (P.3), either x1 = x2 = x3 or y1 = y2 = y3 holds. First, we prove -
that x1 = x2 = x3 always holds. Assume for a contradiction that, w.l.o.g., x1 6= x2. Then, y = y1 = y2 = y3 holds. Since the edges of Q2 are binding in the peeling-into-levels decomposition of H′ and since x1 ≺H x2 ≺H y, vertices x1 and x2 belong to level Lj of H′, while y belongs to level Lj+1, for some 0 ≤ j < λ. By Property (T.4), y has only one neighbor on level Lj such that the edge connecting y to this neighbor is assigned to Q2. This contradicts the fact that both edges (x1, y) and (x2, y) -
are assigned to Q2, since x1 6= x2. Hence x = x1 = x2 = x3 holds.
8 Note that if we had assumed that (u1, v1), (u2, v2) and (u3, v3) belonged to one of (E.4) or (E.5), i.e., inter-layer edges, vertices u1, u2 and u3 would all belong to one layer, while vertices v1, v2 and v3 would belong to the next layer. In what follows, we will only use the fact that vertices u1, u2 and u3 belong to the same layer and that vertices v1, v2 and v3 belong to the same layer, without discriminating whether the two layers are the same or not.

12 Michael A. Bekos, Martin Gronemann, Chrysanthi N. Raftopoulou
Now, since the edges of Q2 are binding in the peeling-into-levels decomposition of H′, and since, for i = 1, 2, 3 , x ≺H yi, it follows that vertex x belongs to level Lj of H′, while vertex yi belongs to level Lj+1, for some 0 ≤ j < λ. Let τ be the tripod of bag Ax and let τ1, τ2, τ3 be the tripods of Ay1 , Ay2 and Ay3 , respectively. Note that vertices y1, y2 and y3 are not necessarily distinct, that is, the corresponding tripods τ1, τ2 and τ3 are not necessarily pairwise different. However, sinc-
e u1 ≺G u2 ≺G u3, and since u1, u2 and u3 belong to the same layer in the BFS-layering L of G, we can conclude that u1, u2 and u3 belong to p1, p2 and p3, respectively, where p1, p2 and p3 are the first, second and third vertical paths of τ . Since, for i = 1, 2, 3, the edge (x, yi) belongs to H, it follows that τ is a parent tripod of τi or vice versa. Since x belongs to level Lj of H′ and vertices y1, y2 and y3 belong to level Lj+1, by Lemma 4 we conclude that τ is a parent tripod of τ1, τ2 and -
τ3. By Lemma 3, there exist at most two connected components cs1 and cs2 of H′
j+1, such that the edges connecting x to vertices of cs1 and cs2 have been assigned to Q2. W.l.o.g, by Invariant (T.2)
we assume that all vertices of cs1 (if any) precede those of cs2 (if any).
We first argue that not all vertices y1, y2 and y3 belong to only one of cs1 or cs2, which further
implies that both components cs1 and cs2 exist. Assume to the contrary that y1, y2 and y3 belong
to cs1; a similar argument applies for cs2. By Property (P.6), tripod-vertices of component cs1 are not adjacent to the vertices of at least one vertical path of τ in G, say p3. In this case, however, we obtain a contradiction to the fact that v3, which is a tripod-vertex of cs1, is connect to u3 that belongs to p3, i.e., edge (u3, v3) cannot exist in G. Hence, not all vertices y1, y2 and y3 belong to only one of cs1 or cs2, as we initially claimed. In
particular, since y3 H y2 H y1 and since all vertices of cs1 precede those of cs2, it follows that y3
belongs to cs1, while y1 belongs to cs2. Since u1, u2 and u3 belong to p1, p2 and p3, respectively, the
vertices of cs1 and cs2 are connected to all vertical paths of τ . Thus, Property (P.11) applies, which
implies that the tripod-vertices of cs2 (including v1) are not connected to the first vertical path p1 of τ , which is a contradiction to the fact that (u1, v1) is an edge of G, since u1 ∈ p1. Hence, the edges of E32 cannot form a 3-rainbow. Symmetrically, we can prove that the edges of E33 cannot form a 3-rainbow, which completes the proof of the lemma.
We are now ready to state the main theorem of this section.
Theorem 1. Every planar graph has queue number at most 42.
6 Conclusions
In this work, we improved the upper bound on the queue number of planar graphs by refining the three techniques involved in the original algorithm [12]. We believe that our approach has the potential to further reduce the upper bound by at least 3 (i.e., from 42 to 39). However, more elaborate arguments that exploit deeper the planarity of the graph are required, and several details need to be worked out. Still the gap with the lower bound of 4 remains large and needs to be further reduced. In thi-
s regard, determining the exact queue number of planar 3-trees becomes critical, since an improvement of the current upper bound of 5 (to meet the lower bound of 4) directly implies a corresponding improvement on the upper bound on the queue number of general planar graphs. On the other hand, to obtain a better understanding of the general open problem, it is also reasonable to further examine subclasses of planar graphs, such as bipartite planar graphs or planar graphs with bounded degree (e.g., -
max-degree 3).
References
1. Alam, J.M., Bekos, M.A., Gronemann, M., Kaufmann, M., Pupyrev, S.: Queue layouts of planar 3-trees. Algorithmica 82(9), 2564–2585 (2020), https://doi.org/10.1007/s00453-020-00697-4
2. Bannister, M.J., Devanny, W.E., Dujmovic, V., Eppstein, D., Wood, D.R.: Track layouts, layered path decompositions, and leveled planarity. Algorithmica 81(4), 1561–1583 (2019), https://doi.org/10. 1007/s00453-018-0487-5
3. Barth, D., Pellegrini, F., Raspaud, A., Roman, J.: On bandwidth, cutwidth, and quotient graphs. RAIRO Theor. Informatics Appl. 29(6), 487–508 (1995), https://doi.org/10.1051/ita/1995290604871

On the Queue Number of Planar Graphs 13
4. Bekos, M.A., F ̈orster, H., Gronemann, M., Mchedlidze, T., Montecchiani, F., Raftopoulou, C.N., Ueckerdt, T.: Planar graphs of bounded degree have bounded queue number. SIAM J. Comput. 48(5), 1487–1502 (2019), https://doi.org/10.1137/19M125340X
5. Bekos, M.A., Kaufmann, M., Klute, F., Pupyrev, S., Raftopoulou, C.N., Ueckerdt, T.: Four pages are indeed necessary for planar graphs. J. Comput. Geom. 11(1), 332–353 (2020), https://journals. carleton.ca/jocg/index.php/jocg/article/view/504
6. Bernhart, F., Kainen, P.C.: The book thickness of a graph. J. Comb. Theory, Ser. B 27(3), 320–331 (1979), https://doi.org/10.1016/0095-8956(79)90021-2
7. Chinn, P.Z., Chvatalova, J., Dewdney, A.K., Gibbs, N.E.: The bandwidth problem for graphs and matrices - a survey. J. Graph Theory 6(3), 223–254 (1982), https://doi.org/10.1002/jgt.3190060302 8. Di Battista, G., Frati, F., Pach, J.: On the queue number of planar graphs. SIAM J. Comput. 42(6), 2243–2285 (2013), https://doi.org/10.1137/130908051
9. Dı ́az, J., Petit, J., Serna, M.J.: A survey of graph layout problems. ACM Comput. Surv. 34(3), 313–356 (2002), https://doi.org/10.1145/568522.568523
10. Dujmovi ́c, V., Frati, F.: Stack and queue layouts via layered separators. J. Graph Algorithms Appl. 22(1), 89–99 (2018), https://doi.org/10.7155/jgaa.00454
11. Dujmovic ́, V., Joret, G., Micek, P., Morin, P., Ueckerdt, T., Wood, D.R.: Planar graphs have bounded queue-number. In: Zuckerman, D. (ed.) FOCS. pp. 862–875. IEEE Computer Society (2019), https: //doi.org/10.1109/FOCS.2019.00056
12. Dujmovic, V., Joret, G., Micek, P., Morin, P., Ueckerdt, T., Wood, D.R.: Planar graphs have bounded queue-number. J. ACM 67(4), 22:1–22:38 (2020), https://dl.acm.org/doi/10.1145/3385731 13. Dujmovi ́c, V., Morin, P., Wood, D.R.: Layout of graphs with bounded tree-width. SIAM J. Comput. 34(3), 553–579 (2005), https://doi.org/10.1137/S0097539702416141
14. Dujmovi ́c, V., P ́or, A., Wood, D.R.: Track layouts of graphs. Discrete Mathematics & Theoretical Computer Science 6(2), 497–522 (2004), http://dmtcs.episciences.org/315 15. Dujmovic ́, V., Wood, D.R.: On linear layouts of graphs. Discrete Mathematics & Theoretical Computer Science 6(2), 339–358 (2004), http://dmtcs.episciences.org/317
16. Heath, L.S.: Embedding planar graphs in seven pages. In: FOCS. pp. 74–83. IEEE Computer Society (1984), https://doi.org/10.1109/SFCS.1984.715903
17. Heath, L.S., Leighton, F.T., Rosenberg, A.L.: Comparing queues and stacks as mechanisms for laying out graphs. SIAM J. Discrete Math. 5(3), 398–412 (1992), https://doi.org/10.1137/0405031 18. Heath, L.S., Rosenberg, A.L.: Laying out graphs using queues. SIAM J. Comput. 21(5), 927–958 (1992), https://doi.org/10.1137/0221055
19. Horton, S.B., Parker, R.G., Borie, R.B.: On minimum cuts and the linear arrangement problem. Discret. Appl. Math. 103(1-3), 127–139 (2000), https://doi.org/10.1016/S0166-218X(00)00173-6
20. Kratochvı ́l, J., Vaner, M.: A note on planar partial 3-trees. CoRR abs/1210.8113 (2012), http://arxiv. org/abs/1210.8113
21. Wiechert, V.: On the queue-number of graphs with bounded tree-width. Electr. J. Comb. 24(1), P1.65 (2017), http://www.combinatorics.org/ojs/index.php/eljc/article/view/v24i1p65
22. Wood, D.R.: Queue layouts, tree-width, and three-dimensional graph drawing. In: Agrawal, M., Seth, A. (eds.) FST TCS. LNCS, vol. 2556, pp. 348–359. Springer (2002), https://doi.org/10.1007/ 3-540-36206-1_31
23. Yannakakis, M.: Embedding planar graphs in four pages. J. Comput. Syst. Sci. 38(1), 36–67 (1989), https://doi.org/10.1016/0022-0000(89)90032-9

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:52.717Z
- **Text Length:** 51034 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
