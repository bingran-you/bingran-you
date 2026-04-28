# PDF Document: Wang et al. - 2021 - Zero-shot Node Classification with Decomposed Graph Prototype Network.pdf

**File Path:** Wang et al. - 2021 - Zero-shot Node Classification with Decomposed Graph Prototype Network.pdf

**Processed Date:** 2026-02-10T18:15:29.148Z

**File Size:** 803.36 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2764

**Title:** Zero-shot Node Classification with Decomposed Graph Prototype Network

**Collection:** Large Files

---

## Extracted Text Content

Zero-shot Node Classification with Decomposed Graph Prototype Network
Zheng Wang1,2, Jialong Wang1, Yuchen Guo3, Zhiguo Gong1∗
1 State Key Laboratory of Internet of Things for Smart City, University of Macau, China 2 Department of Computer Science and Technology, University of Science and Technology Beijing, China 3 Institute for Brain and Cognitive Sciences, BNRist, Tsinghua University, China zhengwang100@gmail.com,fstzgg@um.edu.mo
ABSTRACT
Node classification is a central task in graph data analysis. Scarce or even no labeled data of emerging classes is a big challenge for existing methods. A natural question arises: can we classify the nodes from those classes that have never been seen? In this paper, we study this zero-shot node classification (ZNC) problem which has a two-stage nature: (1) acquiring high-quality class semantic descriptions (CSDs) for knowledge transfer, and (2) designing a well generalized graph-based learning mo-
del. For the first stage, we give a novel quantitative CSDs evaluation strategy based on estimating the real class relationships, to get the “best” CSDs in a completely automatic way. For the second stage, we propose a novel Decomposed Graph Prototype Network (DGPN) method, following the principles of locality and compositionality for zero-shot model generalization. Finally, we conduct extensive experiments to demonstrate the effectiveness of our solutions.
CCS CONCEPTS
• Information systems → Data mining; • Mathematics of computing → Graph theory; • Computing methodologies → Machine learning.
KEYWORDS
Node Classification; Graph Convolutional Networks; Graph Data Analysis
ACM Reference Format:
Zheng Wang1,2, Jialong Wang1, Yuchen Guo3, Zhiguo Gong1∗. 2021. Zeroshot Node Classification with Decomposed Graph Prototype Network. In Proceedings of the 27th ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD ’21), August 14–18, 2021, Virtual Event, Singapore. ACM, New York, NY, USA, 11 pages. https://doi.org/10.1145/3447548.3467230
1 INTRODUCTION
Node classification is an integral component of graph data analysis [3, 35], like document classification in citation networks [23],
* Zhiguo Gong is the corresponding author.
Permission to make digital or hard copies of all or part of this work for personal or classroom use is granted without fee provided that copies are not made or distributed for profit or commercial advantage and that copies bear this notice and the full citation on the first page. Copyrights for components of this work owned by others than ACM must be honored. Abstracting with credit is permitted. To copy otherwise, or republish, to post on servers or to redistribute to lists, requires prior specif-
ic permission and/or a fee. Request permissions from permissions@acm.org. KDD ’21, August 14–18, 2021, Virtual Event, Singapore © 2021 Association for Computing Machinery. ACM ISBN 978-1-4503-8332-5/21/08. . . $15.00 https://doi.org/10.1145/3447548.3467230
Can we find those unseen AI papers? 1. What auxiliary data do we need? 2. How to design the model?
Citation network
Seen classes • DB • HCI Unseen classes • AI • IR
DB DB
HCI
HCI
?
?
?
?
?
Figure 1: The problem of zero-shot node classification.
user type prediction in social networks [11], and protein function identification in bioinformatics [12]. In a broadly applicable scenario, given a graph in which only a small fraction of nodes are labeled, the goal is to predict the labels of the remaining unlabeled ones, assuming that graph structure information reflects some affinities among nodes. This problem is well-studied, and solutions are often powerful [2].
Problem. Traditional node classification methods are facing an enormous challenge — cannot catch up with the rapid growth of newly emerging classes in dynamic and open environments. For example, it is hard and costly to annotate sufficient labeled nodes for a new research topic in citation networks; moreover and in fact, it is impossible to know the exact class numbers in real-world big data applications (like Wikipedia). Naturally, as illustrated in Figure 1, it would be very useful to empower mo-
dels the ability to classify the nodes from those “unseen” classes that have no labeled instances. This paper presents the first study of this zero-shot node classification (ZNC) problem. As a practical application of zero-shot learning (ZSL) [7] [17], this problem has a two-stage nature. The first refers to acquiring high-quality class semantic descriptions (CSDs)1 as auxiliary data, for transferring supervised knowledge from seen classes to unseen classes. However, few studies have explored this-
 kind of semantic knowledge in graph scenarios where classes (e.g., “AI” papers in citation networks) are generally complex and abstract. Moreover, the study of “what are good CSDs?” is also very limited.
1In computer vision, this kind of semantic knowledge is usually referred as “attributes”. In this paper, to avoid ambiguity with node attributes (i.e., original features like bagof-words in documents) terminology, we use CSDs instead.
arXiv:2106.08022v1 [cs.AI] 15 Jun 2021

The other stage refers to designing a well-generalized graphbased learning model. Unlike the traditional ZSL tasks, node classification is a type of relational learning task that operates on graphstructured data. Moreover, how to effectively utilize the rich graph information (like node attributes and graph structure) together with the CSDs knowledge for zero-shot models is still an open problem.
Solutions and Contributions. For the first stage, considering the difficulty of manually describing complex and abstract concepts in graph scenarios, we propose to acquire high-quality CSDs in a completely automatic way. For illustration, we use the famous natural language processing model Bert-Tiny [28] to automatically generate two types of CSDs: LABEL-CSDs (i.e., the word embeddings generated from class labels/names) and TEXT-CSDs (i.e., the document embeddings generated from some class-related-
 text descriptions). Next, as it is inconvenient for humans to incorporate domain knowledge in the learned embedding space, we give a novel quantitative CSDs evaluation strategy, based on the assumption that good CSDs should reflect the real relationships among classes [42]. As such, we can finally choose the “best” CSDs from the above two kinds of candidates. For the second stage, we propose a novel Decomposed Graph Prototype Network (DGPN) method, following the principles of locality (i.e., the -
concern about the small subparts of input) and compositionality (i.e., the concern about the combination of representations learned from these small subparts) for zero-shot model generalization [27]. In particular, we first show how to decompose the outputs of multi-layer graph convolutional networks (GCNs) [13]. Then, for locality, we inject some semantic losses on those intermediate representations learned from these decompositions. Finally, for compositionality, we apply a weighted sum pooling -
operation to those intermediate representations to get global ones for the target problem. Intuitively, our method not only enhances the locality of node representations that is critical for zero-shot generalization, but also guarantees the discriminability of the global compositional representation for the final node classification problem. We experimentally demonstrate the effectiveness of the proposed CSDs evaluation strategy as well as the proposed method DGPN, from which we can get some inter-
esting findings. Firstly, the quality of CSDs is the key to the ZNC problem. More specifically, comparing to graph information, we can rank their importance as: CSDs ≫ node attributes > graph structure. Secondly, comparing to the performance of the most naïve baseline “RandomGuess”, we can rank the general performance of those two CSDs as: TEXT-CSDs ≫ LABEL-CSDs ≥ RandomGuess. Thirdly, with high-quality CSDs, graph structure information can be very useful or even be comparable to node attributes. -
Lastly, through subtly recasting the concepts, the principles of locality and compositionality can be well adapted to graph-structured data. The main contributions of this paper are summarized as follows:
• Novel problem and findings. We study the problem of zeroshot node classification. Through various experiments and analysis, we uncover some new and interesting findings of ZSL in the graph scenario.
• Novel CSDs acquisition and evaluation strategy. We give a novel quantitative CSDs evaluation strategy, so as to acquire high-quality CSDs in a completely automatic way.
• Novel ZNC method. We propose DGPN for the studied ZNC problem, following the principles of locality and compositionality for zero-shot model generalization.
Roadmap. The remainder of this paper is organized as follows. We review some related work in Section 2, and discuss the studied problem in Section 3. In Section 4, by introducing a novel quantitative CSDs evaluation strategy, we show how to acquire the “best” CSDs in a completely automatic way. In Section 5, we elaborate the proposed method DGPN in details. In Section 6, we report the comparison of our method with existing ZSL methods. Finally, we conclude this paper in Section 7.
2 RELATED WORK
2.1 Node Classification
Early studies [43] [44] generally use shallow models to jointly consider the graph structure and supervised information. With the recent dramatic progress in deep neural networks, graph neural network (GNN) [38] methods are becoming the primary techniques. Generally, GNN methods stack multiple neural network layers to capture graph information, and end with a classification layer to utilize the supervised knowledge. Specifically, at each layer, GNN methods propagate information from each node to i-
ts neighborhoods with some well-defined propagation rules. The most wellknown work is GCN [13] which propagates node information based on a normalized and self-looped adjacency matrix. Recent attempts to advance this line are GAT [29], LNGN [4] and so on. Nevertheless, existing methods generally all assume that every class in the graph has some labeled nodes. The inability to generalize to unseen classes is one of the major challenges for current methods.
2.2 Zero-shot Learning
Zero-shot learning (ZSL) [7] (also known as zero-data learning [17]) has recently become a hot topic in machine learning and computer vision areas. The goal is to classify the samples belonging to the classes which have no labeled data. To solve this problem, class semantic descriptions (CSDs) [15], which could enable cross-class knowledge transfer, are introduced. For example, to distinguish animals, we can first define some CSDs like “swim”, “wing” and “fur”. Then, at the training stage, we can -
train classifiers to recognize these CSDs. At the testing stage, given an animal from some unseen classes, we can first infer its CSDs and then compare the results with those of each unseen class to predict its label [15] [22]. However, existing ZSL methods are mainly limited to computer vision [32] or natural language processing [41]. Although, some studies [34, 36, 37] also consider the zero-shot setting in graph scenarios, they focus on graph embedding [9, 31] not node classification. Therefore-
, the graph scenario might become a new challenging application context for ZSL communities.
3 PROBLEM DEFINITION AND DISCUSSION
3.1 Problem Definition
Let G = (V, E) denote a graph, where V denotes the set of n nodes {v1, . . . , vn }, and E denotes the set of edges between these n nodes.
Let A ∈ Rn×n be the adjacency matrix with Ai j denoting the edge weight between nodes vi and v j . Furthermore, we use X ∈ Rn×d

to denote the node attribute (i.e., feature) matrix, i.e., each node is associated with a d-dimensional attribute vector. The class set in this graph is C = {Cs ∪ Cu } where Cs is the seen class set and Cu is the unseen class set satisfying Cs ∩ Cu = ∅. Supposing all the labeled nodes are coming from seen classes, the goal of zero-shot node classification (ZNC) is to classify the rest testing nodes whose label set is Cu .
3.2 Problem Discussion
As a practical application of ZSL, the problem of ZNC has a twostage nature. The first and most important is: how to acquire highquality CSDs which can be used as a bridge for cross-class knowledge transfer. In other words, we want to (1) determine the way of obtaining CSDs, and (2) quantitatively measure the overall quality. Existing ZSL methods, which are generally developed for computer vision, mainly rely on human annotations. For example, given a class like “duck”, they manually describe this-
 class by some figurative words like “wing” and “feather”. However, this may not be practical for ZNC, as graphs generally have more complex and abstract classes. For instance, in social networks, it is hard to figure out what a “blue” or “optimistic” user looks like; and in citation networks, it is hard to describe what are “AI” papers. On the other hand, although there exist some automatic solutions, the related studies on graph scenarios are still unexplored. Moreover, the limited study of quan-
titative CSDs evaluation further prevents their practical usage. The other is: how to design a well-generalized graph-based learning model. Specifically, we want to (1) effectively utilize the rich graph information (like node attributes and graph structure), and (2) make the model capable of zero-shot generalization. Firstly, few ZSL methods have ever considered the graph-structured data. On the other hand, with the given CSDs knowledge, how to design a graph-based learning model (especially a po-
werful GNN model) that generalizes well to unseen classes is still an open question. In the following, we will elaborate our solutions by addressing these two subproblems sequentially.
4 ACQUIRING HIGH-QUALITY CSDs
Considering the difficulty of manually describing complex and abstract concepts in graph scenarios, in this paper, we aim to acquire high-quality CSDs in a completely automatic way. In this section, we first show how to get some CSDs candidates via a typical automatic tool, then give a novel quantitative CSDs evaluation strategy, and at last present a simple experiment to illustrate the whole acquisition process.
4.1 Getting CSDs Candidates Automatically
For the automatic acquisition of semantic knowledge, text is playing the most significant role at present. The basic idea is that with the help of some machine-learning models, we can use the “word2vec” [20] results of some related textural sources as CSDs. Intuitively, in the learned word embedding space, each dimension denotes a “latent” unknown class property. Recently, neural network models, like Bert [6], have made remarkable achievements in lots of word embedding tasks. For efficiency and ea-
se of calculation,
we use Bert-Tiny [28] (the light version of Bert) to generate the following two types of 128-dimensional CSDs:
(1) LABEL-CSDs are the word/phrase embedding results generated from class labels, i.e., class names (like “dog” and “cat”) usually in the form of a word or phrase. (2) TEXT-CSDs are the document embedding results generated from some class-related text descriptions (like a paragraph or an article describing this class). Specifically, for each class, we use its Wikipedia page as text descriptions.
In the traditional ZSL application scenarios (like computer vision and natural language processing), LABEL-CSDs are usually used, due to the easy computation and good performance. On the other hand, TEXT-CSDs usually suffer from heavy computation and huge noise [45].
4.2 Quantitative CSDs Evaluation
As it is inconvenient for humans to incorporate domain knowledge in the learned embedding space, traditional methods generally evaluate the quality of CSDs according to their performance on the target ZSL task. However, this kind of “ex-post forecast” strategy seriously relies on the choice of some particular ZSL methods and the specific application scenarios. In the following, we give a more practical and easily implemented evaluation strategy. The evaluation is based on the assumption that good -
CSDs should reflect the real relationships among classes [42]. Although those relationships are not explicitly given, we can approximately estimate them2. Specifically, we first use a set of mean-class feature vectors {oi } | C |
i=1 (i.e., oi ∈ Rd denotes the center of class ci ∈ C in
the d-dimensional feature space) as class prototypes, following the work in few-shot learning [26]. Then, for any two classes ci and c j , we define the empirical probability of c j generated by ci as:
Pr (c j |ci ) =
exp (o⊤
i ·oj)
Í|C | t,t ≠i
exp (o⊤
i · ot )
(1)
where exp (·) is the usual exponential function, and · stands for the inner product between two vectors. Intuitively, for each class ci , Eq. 1 defines a conditional distribution Pr (·|ci ) over all the other classes. Similarly, given the automatically generated CSD vectors of all classes {si } | C |
i=1 (i.e., si ∈ Rds denotes the ds -dimensional CSD vector
of class ci ∈ C) and a specific class pair < ci, c j >, we can also calculate the probability Pˆr (c j |ci ) as:
ˆ
Pr (c j |ci ) =
exp (s⊤
i ·sj)
Í|C | t,t ≠i
exp (s⊤
i · st )
(2)
Finally, the quality of the generated CSDs can be evaluated by comparing the above two distributions: 1 |C|
∑︁
ci ∈C
dis (Pr (·|ci ), Pˆr (·|ci )) (3)
where dis (·, ·) is the selected distance/similarity measure. In this paper, we adopt three well-known measures: KL Divergence, Cosine Similarity and Euclidean Distance.
2This evaluation can be conducted on all classes or only on seen classes. In this paper, we choose the former one for a comprehensive investigation.

Table 1: Quality of obtained CSDs.
Dataset CSDs Type KL
Divergence↓ Cosine
Similarity↑ Euclidean
Distance ↓
Cora LABEL-CSDs 0.0154 0.9978 0.1787
TEXT-CSDs 0.0109 0.9985 0.1552
Citeseer LABEL-CSDs 0.0120 0.9980 0.1620
TEXT-CSDs 0.0077 0.9987 0.1328
C-M10M LABEL-CSDs 0.0062 0.9990 0.1175
TEXT-CSDs 0.0026 0.9996 0.0735
Here, ‘↓’ indicates the lower the better, whereas ‘↑’ indicates the higher the better.
4.3 CSDs Evaluation Experiment
We conduct the evaluation on three real-world citation networks: Cora [23], Citeseer [23], and C-M10M [21]. The details about these datasets and this experiment can be found in Appendix A.1 and Appendix A.2, respectively. As shown in Table 1, TEXT-CSDs always get a much better performance. This may due to the complex and abstract nature of graph classes, i.e., describing graph classes needs rich text (Wikipedia articles, in particular) which contains more elaborate and subtle information. Therefor-
e, we use TEXT-CSDs as auxiliary information in the later ZNC experiments.
5 DESIGNING WELL-GENERALIZED GRAPH-BASED LEARNING MODELS
Recent studies [27] [39] show that locality and compositionality are fundamental ingredients for well-generalized zero-shot models. Intuitively, locality concerns the small subparts of input, and compositionality concerns the combination of representations learned from these small subparts. In the following, we will first give a brief introduction to GCNs, then show how to decompose the outputs of GCNs into a set of “subparts”, and finally elaborate the proposed method following the above two prin-
ciples.
5.1 Preliminaries on GCNs
We use the diagonal matrix D to denote the degree matrix of the adjacency matrix A, i.e., Dii = Í
j Ai j . The normalized graph Lapla
cian matrix is L = In − D− 12 AD− 12 which is a symmetric positive semidefinite matrix with eigen-decomposition L = U ΛU ⊤. Here Λ is a diagonal matrix of the eigenvalues of L, and U ∈ Rn×n is a unitary matrix which comprises orthonormal eigenvectors of L.
Spectral Graph Convolution. We consider the graph convolution operation defined as the multiplication of a signal x with a filter gθ (parameterized by θ ∈ Rn) in the Fourier domain [24]:
gθ ★ x = U gθ (Λ)U ⊤x (4)
where ★ denotes the convolution operator. We can understand gθ as a function operating on the eigenvalues of the laplacian matrix, i.e., gθ (Λ). For efficiency, gθ (Λ) can be further approximated by the K-th order Chebyshev polynomials [10] [5], as follows:
gθ ★ x ≈ U
K ∑︁
k =0
θ′ k
Tk (  ̃Λ)U ⊤x =
K ∑︁
k =0
θ′ k
Tk (L ̃)x (5)
where Tk (·) denotes the Chebyshev polynomials and θ ′ denotes a
vector of the Chebyshev coefficients; Λ ̃ = 2
λmax
Λ − In is a rescaled diagonal eigenvalue matrix, In is the identity matrix, λmax denotes
the largest eigenvalue of L, and L ̃ = U Λ ̃ U ⊤ = 2
λmax
L − In.
Graph Convolutional Network (GCN). The vanilla GCN [13] simplifies the Chebyshev approximation by setting λmax ≈ 2, K = 1, and θ = θ0′ = −θ1′. This leads to the following spectral convolution
formulation:
gθ ★ x ≈ θ (In + D− 21 AD− 12 )x (6)
Then it adopts a renormalization trick:
In + D− 12 AD− 21 → D ̃ − 21 A ̃D ̃ − 12 (7)
where A ̃ = A + In and D ̃ ii = Í
j A ̃i j . In this way, the spectral graph convolution is finally simplified as follows:
gθ ★ x ≈ θ (D ̃ − 21 A ̃D ̃ − 21 )x (8)
5.2 GCNs Decomposition
In computer vision where the concepts of locality and compositionality are initially introduced, a small subpart (usually known as “patch”) of input usually refers to an image region, i.e., a small rectangular area of an image. Generally, convolutional neural networks (CNNs) [14], which have a locality-aware architecture, can exploit this kind of local information from images intrinsically [27] [39]. However, CNNs cannot deal with the irregular graph structures which lack of shift-invariant notion-
 of translation [25]. In the following, using two typical cases, we show how to decompose the outputs of GCNs into a set of subparts, so as to localize irregular graph structures.
5.2.1 Case I: The Vanilla GCN without Renormalization Trick. We continue with the graph convolution formulated in Eq. 6. In the following, we use gθk to denote the filter (parameterized by θk ) at
the k-th graph convolution, and let P = D− 21 AD− 12 . As such, on signal x, performing the graph convolution K times leads to:
gθK
★ · · · gθ1 ★ x ≈ θK · · · θ1 (In + P)K x
= θ∗
K ∑︁
k =0
K
k
Pkx
(9)
where θ ∗ = θK · · · θ1 denotes the integration of all learnable parameters and K
k is the combinatorial number. However, Eq. 9 has the problem of numerical instability, as the eigenvalues of matrix (In +P) are in the range [0, 2] and those of (In +P)K are in the range [0, 2K ]. To circumvent this problem, we can further normalize Eq. 9 by dividing by 2K , which leads:
gθK
★ · · · ★ (gθ1 ★ x) ≈ θ ∗
K ∑︁
k =0
K k
2
K
Pkx (10)
This indicates that the outputs of a K times graph convolution over signal x can be decomposed into a set of K + 1 subparts (i.e.,
{Pkx }K
k=0), with the k-th subpart reflecting the knowledge of its
k-hop neighbors.

Graph
CSD vector
Node embedding
Local loss
Self features
2-hop neighbor features
1-hop neighbor features
K-hop neighbor features
...
...
Compositional loss
Pooling
Map
Self embedding
2-hop neighbor embeddings
1-hop neighbor embeddings
K-hop neighbor embeddings
...
K-times Graph Convolution
Class
...
ሺȉሻ ߰
߶
௖௢௠
ሺȉሻ
߶
௟௢௖
ሺȉሻ
Map
Map
Figure 2: The architecture of Decomposed Graph Prototype Network (DGPN).
The variant with lazy random walk. In order to alleviate the over-smoothing problem [18] in GCNs, lazy random walk is usually considered. Specifically, at each graph convolution layer, it enables each node to maintain some parts of its representations learned in the preceding layer. In the following, we continue with the graph convolution formulated in Eq. 5, and set K = 1 and θ = θ
′
0
= −θ
′
1
. As such, we can get the following formulation:
g
θ
★ x ≈ θ ((2 −
2
λ
max
)I
n
+
2
λ
max
P)x (11)
As the matrix ((2 −
2
λ
max
)I
n
+
2
λ
max
P) has eigenvalues in the range [0, 2], for numerical stability, we further normalize it by dividing by 2. This leads to the following equation:
g
θ
★ x ≈ θ (βI
n
+ (1 − β)P)x
(12)
where β = 1 −
1
λ
max
. If we enforce β to lie in [0, 1], β can be seen as the probability of staying at the current node in a lazy random walk. This shows that compared to the vanilla GCN, lazy random walk is also a kind of spectral graph convolution model but with a different approximation for λ
max
(i.e., λ
max
> 2) in the Chebyshev polynomials. Based on Eq. 12, on signal x, performing the lazy random walk K times leads to:
g
θ
K
★ · · · ★ (g
θ
1
★x) ≈ θ
∗
K ∑︁
k =0
K
k
β
K −k
[(1 − β)P]
k
x
(13)
5.2.2 Case II: The Vanilla GCN with Renormalization Trick. We continue with the trick formulated in Eq. 7:
I
n
+D
−
1
2
AD
−
1
2
→
 ̃
D
−
1
2
 ̃
A
 ̃
D
−
1
2
=
 ̃
I
n
+
 ̃
P
(14)
where
 ̃
I
n
=
 ̃
D
−
1
2
I
n
 ̃
D
−
1
2
and
 ̃
P=
 ̃
D
−
1
2
A
 ̃
D
−
1
2
.
In this case, on signal x, performing the graph convolution (formulated in Eq. 8) K times leads to:
g
θ
K
★ · · · ★ (g
θ
1
★x) ≈ θ
∗
(
 ̃
I
n
+
 ̃
P)
K
x
=θ
∗
K ∑︁
k =0
K
k
 ̃
I
K −k n
 ̃
P
k
x
(15)
The variant with lazy random walk. Similar to the analysis in Section 5.2.1, we can further introduce lazy random walk into the above graph convolution. We neglect these derivation processes, due to space limitation. Finally, we can get:
g
θ
K
★ · · · ★ (g
θ
1
★x) ≈ θ
∗
K ∑︁
k =0
K
k
β
K −k
[(1 − β)
ˆ
P]
k
x
(16)
where
ˆ
P=
 ̃
D
−
1
2
 ̃
A
 ̃
D
−
1
2
.
5.2.3 Time Complexity of GCNs Decomposition. Without loss of generality, we continue with the Case I in Section 5.2.1. As shown in its formulation (Eq. 10), we further get another K new feature matrices; and each of them will cost O (|E |d), where |E | is the edge number. Therefore, as a whole, the overall time complexity is O (K |E |d).
5.3 Locality and Compositionality in GCNs
Figure 2 illustrates the proposed DGPN method for the studied ZNC problem. In the following, we will show the design details by elaborating how to improve locality and compositionality in GCNs. A schematic explanation of these two concepts can be found in Figure 5 in Appendix A.3.
5.3.1 Locality in GCNs. From the viewpoint of representation learning, locality refers to the ability of a representation to localize and associate an input “patch” with semantic knowledge [27]. As analysed in 5.2, the outputs of a K times graph convolution over a node can be decomposed into K + 1 subparts; each subpart can be seen as a “patch” containing the knowledge of a fixed hop of neighbors. To improve locality, we can inject some semantic losses on those intermediate representations learned-
 from these subparts. Without loss of generality, we use the decomposition of the vanilla GCN (formulated in Eq. 10) as an example. First of all, considering a K times graph convolution, we can define the resulted node representations as the collection of K + 1 subparts: {P
k
X}
K
k =0
. In other words, the resulted node v
i
’s representation vector can be defined as the collection of itself and its {1, ..., K }-hop neighbor information: {
 ̄
x
(k)
i
}
K
k =0
, where
 ̄
x
(k)
i
denotes the i-th row of matrix
(P
k
X ).

Table 2: Summary of the datasets.
Dataset Nodes Edges Features Classes Class Split I [Train/Val/Test] Class Split II [Train/Val/Test]
Cora 2,708 5,429 1,433 7 [3/0/4] [2/2/3] Citeseer 3,327 4,732 3,703 6 [2/0/4] [2/2/2] C-M10M 4,464 5,804 128 6 [3/0/3] [2/2/2]
With an input subpart x ̄(k)
i , we can adopt a map function ψ (·) to
convert it into a latent feature representation h (k)
i = ψ (x ̄(k)
i ). Then, we can force the resulted representation to encode some semantic knowledge. In detail, we can use another map function φloc (·) to
map h (k)
i into a semantic space. In this space, we can compute the
prediction score f (k)
ic of node vi w.r.t. a seen class c ∈ Cs as:
f (k)
ic = sim(φloc (h (k)
i ), sc ) (17)
where sim(·, ·) is a similarity measure function (e.g., inner product and cosine similarity), and sc is the given CSD vector of class c. It is worth noting that, for each node vi , we obtain all its sub representations {h (k)
i }K
k=0 (via the map function ψ (·)) at the same layer.
This would facilitate the configuration of local loss, i.e., avoiding the confusion of choosing appropriate intermediate layers in deep neural network models. Next, we can apply a softmax function to transform the predicted scores into a probability distribution over all source classes. Finally, the model is trained to minimize the cross-entropy loss between the predicted probabilities and the ground-truth labels. Specifically, given a training node vi from a seen class c ∈ Cs , the local loss (w.-
r.t. all its K + 1 sub-representations) can be calculated as:
Q
loc = −
∑︁
k =0:K
ln
exp (f (k)
ic )
Í
c′ ∈Cs exp (f (k)
ic′ )
(18)
Intuitively, by minimizing the above objective function, for each node, we can force the first neural network module (i.e., the map functionψ (·)) in our method to extract a set of semantically relevant representations.
5.3.2 Compositionality for GCNs. From the viewpoint of representation learning, compositionality refers to the ability to express the learned global representations as a combination of those prelearned sub-representations [1]. Based on the analysis in Section 5.2, for each node vi , we can apply a global weighted sum pooling operation on its previously learned K + 1 sub-representations {h (k)
i }K
k =0 ,
so as to obtain a global representation zi :
zi =
K ∑︁
k =0
ωk ∗ h (k)
i (19)
where {ωk }K
k=0 are the scalar weight parameters, and symbol ∗
stands for the scalar multiplication. This weight parameter vector
is determined based on the decomposition analysis, e.g., ωk = (K
k)
2
K
in Case I (formulated in Eq. 10). For ZSL, we can also minimize a cross-entropy loss function in the semantic space. Specifically, given a training node vi from a
seen class c ∈ Cs , the compositional loss can be calculated as:
Q
com = − ln exp (gic )
Í
c′ ∈Cs exp (gic′ ) (20)
where gic = sim(φcom (zi ), sc ) is the predicted score of node vi w.r.t. the seen class c in the semantic space; and φcom (·) is a map function that maps the global feature zi into this semantic space.
5.3.3 Joint Locality and Compositionality Graph Learning. As illustrated in Figure 2, our full model DGPN optimizes the neural networks by integrating both the compositional loss (Eq. 20) and local loss (Eq. 18):
Q = Qcom + α Qloc (21)
where α is a hyper-parameter. This joint learning not only enhances the locality of the node representation that is critical for zero-shot generalization, but also guarantees the discriminability of the global compositional representation for the final node classification. After model convergence, given a node vi from unseen classes, we can infer its label from the unseen class set Cu as:
arg maxc ∈Cu sim(φcom (zi ), sc ) (22)
It is worth noting that, by changing the convolution time K and choosing simple map functions for ψ (·), φcom (·) and φloc (·), our method can preserve the high-order proximity of a graph, using only a few parameters.
5.3.4 Time Complexity. Suppose we adopt single-layer perceptrons for all these three map functions ψ (·), φcom (·) and φloc (·). First of all, as analysed in Section 5.2.3, the decomposition will cost O (K |E |d). Then, all these K+1 subparts will be mapped to a dhdimensional hidden space, which will cost O ((K + 1)nddh). The afterwards pooling operator will cost O (Kndh). At last, all the intermediate results will be finally mapped to a ds -dimensional semantic space, the time complexity of which-
 would be O ((K + 2)ndhds ). As a whole, the computational complexity of evaluating Eq. 21 is O (K |E |ddh + Kndhds ), i.e., linear in the number of graph edges and nodes.
6 EXPERIMENT
In this section, we conduct a set of experiments to answer the following research questions:
• RQ1: Is it possible to conduct ZSL on graph-structured data? Especially, does the proposed method DGPN significantly outperform state-of-the-art ZSL methods? • RQ2: Which parts really affect the performance of DGPN? Or more subtly, the quality of CSDs, the used graph structure information, or the employed algorithm components? • RQ3: Can the decomposed GCNs part in DGPN be used for other applications?

6.1 Experimental Setup
Datasets. As summarized in Table 2, we use three widely used real-world citation networks: Cora [23], Citeseer [23], and C-M10M (a light version of Citeseer-M10 [21]). In these datasets, nodes are publications, and edges are citation links; each node is associated with an attribute vector and belongs to one of the research topics. To construct zero-shot setting, we design two fixed seen/unseen class split settings, for ease of comparison. Specifically, based on their class IDs in each dataset, we -
adopt the first few classes as seen classes and the rest classes as unseen ones:
• Class Split I : all the seen classes are used for training, and all the unseen classes are used for testing. • Class Split II : the seen classes are further partitioned to train and validation parts, and all the unseen classes are still used for testing.
As analysed in Section 4, by default, we adopt the 128-dimensional TEXT-CSDs generated by Bert-Tiny as auxiliary data. Details about these datasets and seen/unseen class split settings can be found in Appendix A.1.
Baselines. The compared baselines include both classical and recent state-of-the-art ZSL methods: DAP [15], ESZSL [22], ZS-GCN [33], WDVSc [30], and Hyperbolic-ZSL [19]. In addition, as traditional methods are mainly designed for computer vision, their original implementations heavily rely on some pre-trained CNNs. Therefore, we further test two representative variants: DAP(CNN) and ZS-GCN(CNN), in both of which a pre-trained AlexNet [14] CNN model is used as the backbone network. Besides, RandomG-
uess (i.e., randomly guessing an unseen label) is introduced as the naïve baseline.
Parameter Settings. In our method, we use the decomposition of the vanilla GCN with lazy random walk (formulated in Eq.13), employ single-layer perceptrons for all three map functions, and adopt the inner product as the similarity function. At the first layer, the input size is equal to feature dimension, and the output size is simply fixed to 128. At the second layer, the output dimension size is also set to 128, so as to be compatible with the given TEXTCSDs for the final loss calculation. Unles-
s otherwise noted, all these settings are fixed throughout the whole experiment. In addition, in Class Split I, we adopt the default hyper-parameter settings for all baselines. For our method, we simply fix K = 3 and β = 0.7 in all datasets. In Class Split II, the hyper-parameters in baselines and ours are all determined based on their performance on validation data. More details about these baselines and hyperparameter settings can be found in Appendix A.4.
6.2 Over-all Performance (RQ1)
Table 3 shows the comparison results. Firstly, we can see that our method DGPN always outperforms all baselines by a significant margin. Compared to the best baseline, our method on average gives 10.19% and 14.27% improvements under the settings of Class Split I and Class Split II, respectively. Secondly, although all baselines perform poorly on the whole, most of them still outperform RandomGuess. Finally, the performance of both DAP and ZS-GCN almost always becomes worse when the pre-trained Ale-
xNet model is involved. Even more surprisingly, those simple classical methods
Table 3: Zero-shot node classification accuracy (%).
Cora Citeseer C-M10M
Class Split I
RandomGuess 25.35±1.28 24.86±1.63 33.21±1.08 DAP 26.56±0.37 34.01±0.97 38.71±0.54 DAP(CNN) 27.80±0.67 30.45±0.93 32.97±0.71 ESZSL 27.35±0.00 30.32±0.00 37.00±0.00 ZS-GCN 25.73±0.46 28.62±0.20 37.89±1.15 ZS-GCN(CNN) 16.01±3.27 21.18±1.58 36.44±0.97 WDVSc 30.62±0.38 23.46±0.11 38.12±0.35 Hyperbolic-ZSL 26.36±0.41 34.18±0.88 35.80±2.25 DGPN (ours) 33.78±0.28 38.02±0.11 41.98±0.21 Improve↑ +10.32% +11.79% +8.45%
Class Split II
RandomGuess 32.69±1.48 50.48±1.70 49.73±1.56 DAP 30.22±1.21 53.30±0.22 46.79±4.16 DAP(CNN) 29.83±1.23 50.07±1.70 46.29±0.36 ESZSL 38.82±0.00 55.32±0.00 56.07±0.00 ZS-GCN 29.53±0.91 52.22±1.21 55.28±0.41 ZS-GCN(CNN) 33.20±0.32 49.27±0.73 51.37±1.27 WDVSc 34.13±0.67 52.70±0.68 46.26±2.58 Hyperbolic-ZSL 37.02±0.28 46.27±0.39 55.07±0.77 DGPN (ours) 46.40±0.31 61.90±0.32 62.46±0.42 Improve↑ +19.53% +11.89% +11.40%
The best method is bolded, and the second-best is underlined.
Table 4: Zero-shot node classification accuracy (%) using LABEL-CSDs.
Cora Citeseer C-M10M Acc. Decl. Acc. Decl. Acc. Decl.
Class Split I
DAP 25.34 -4.59% 30.01 -11.76% 32.67 -15.60% ESZSL 25.79 -5.70% 28.52 -5.94% 35.02 -5.35% ZS-GCN 23.73 -7.77% 26.11 -8.77% 33.32 -12.06% WDVSc 18.73 -38.83% 19.70 -16.02% 30.82 -19.15% Hyperbolic-ZSL 25.47 -3.38% 21.04 -38.44% 34.49 -3.66% DGPN (ours) 32.55 -3.64% 31.83 -16.28% 35.05 -16.51%
The results which are better than those of RandomGuess are typeset in blue. The “Decl.” column shows the relative decline, compared to the results in Table 3.
(like DAP and ESZSL) generally get better results than those recently proposed complex ones (like ZS-GCN and Hyperbolic-ZSL). This indicates that as a new problem, ZNC would become a new challenge for ZSL and graph learning communities.
Overall, the above experiments show the feasibility of conducting ZSL on graph-structured data. In addition, for this new problem, our method is more effective than those traditional ZSL methods.
6.3 Component Analysis in DGPN (RQ2)
TEXT-CSDs v.s. LABEL-CSDs. To compare these two kinds of CSDs, we conduct a new ZNC experiment by replacing the TEXTCSDs used in Section 6.2 with LABEL-CSDs. As shown in Table 4, the performance of all methods (including ours) declines significantly, compared to those results in Table 3 where TEXT-CSDs are used. Moreover, more than half of baselines (around 61.11%) can only (or cannot even) be comparable to RandomGuess. This definitely shows the superiority of TEXT-CSDs over LABEL-CSDs,

Table 5: Zero-shot node classification accuracy (%) using the graph adjacency information as node attribute information.
TEXT-CSDs LABEL-CSDs Cora Citeseer C-M10M Cora Citeseer C-M10M
Class Split I
DAP 30.76 33.98 36.76 28.57 19.38 30.91 ESZSL 24.98 33.20 36.34 30.22 30.05 34.61 ZS-GCN 28.43 33.35 36.87 23.26 30.26 33.90 WDVSc 18.98 28.77 33.84 29.73 23.03 30.35 Hyperbolic-ZSL 19.96 12.16 35.80 28.53 12.45 30.82 DGPN (ours) 32.96 38.03 40.01 31.28 31.85 35.75
The results which are better than those of RandomGuess are typeset in blue.
which is also consistent with our quantitative CSDs evaluation experiments in Section 4.2. It is worth noting that, unlike our experiments, in the previously published reports in computer vision and natural language processing, LABEL-CSDs generally could get considerable performance. The reason may be as follows. In computer vision, concepts can easily be described by very few words (like class names). In NLP, as instance features are usually given in plain-text form, researchers usually pre-proce-
ss them by some word2vec tools, which may facilitate the problem. Another possible reason is that: the recently proposed BERT-Tiny, which really releases the power of TEXT-CSDs, is much better than traditional ones for long text understanding. We leave this for future study.
Graph Structure v.s. Node Attributes. To compare their effects, we take the graph adjacency matrix A as the input node attribute matrix X . Table 5 shows the performance with both LABEL-CSDs and TEXT-CSDs. First, we can see that the results are worse than those in Table 3 where node attributes are used as the input X . This indicates node attributes contain richer and more useful information than graph structure information. On the other hand, we can see that even with the same input graph adjacen-
cy information, the results with TEXT-CSDs are much better than those with LABEL-CSDs. Specifically, most methods (around 77.78%) successfully beat RandomGuess in the first case, but fail in the second case. Especially, on Citeseer with TEXT-CSDs, our method and some compared baselines even could get comparable performance to those in Table 3. These observations indicate that the quality of CSDs is the key to ZNC.
Ablation Study. We test the following three variants of our method:
• ProNet refers to the variant that replaces the decomposed GCNs part (together with the involved local loss part) with a fully-connected layer. This variant can be seen as a classical prototypical network model [26]. • ProNet+GCN refers to the variant that removes the local loss part in our method. This variant can be seen as a special prototypical network which utilizes GCNs as the encoder for node representation learning. • ProNet+GCN+LL refers to the exact full model.
Figure 3 shows the results of this ablation study. We can clearly see that both two parts (the decomposed GCNs part and local loss part) contribute to the final performance, which evidently demonstrates their effectiveness.
Cora Citeseer Citeseer-10M-M
20
30
40
Accuracy (%)
ProNet ProNet+GCN ProNet+GCN+LL (the full model)
Figure 3: Model ablation under Class Split I.
30.95
32.08
32.29
32.14
32.27
30.14
30.7
32.9
32.67
29.57
33.24
29.3 28.45
29.71
28.75
31.02
33.59 31.25
33.73
34.29
34.49
33.78
34.27
35.06
35.08
0.1 0.3 0.5 0.7 0.9
1
3
5
7
9
(a) Cora
35.99
37.06
36.3
34.58
35.52
36.04
37.16
35.85
34.98
36.9
36.74
37.03
35.63
36.7
36.1
36.87
37.78 37.71 37.71 38.06
38.22
37.9
38.18
38.66
38.46
0.1 0.3 0.5 0.7 0.9
1
3
5
7
9
(b) Citeseer
40.39
41.44
39.2
39.21
37.33
40.16
42.09
40.09
38.83
37.25
39.43
41.52
41.07
39.01
38.13
41.12
41.29
37.69
37.01
38.75
40.18
40.63
42.23
44.1
42.67
0.1 0.3 0.5 0.7 0.9
1
3
5
7
9
(c) C-M10M
Figure 4: Effects of K and β in our method under Class Split I. Grid numbers denote the classification accuracy (%). Color indicates the performance (the deeper the better).
Parameter Sensitivity. Figure 4 illustrates the performance of our method when the hyper-parameters K and β change. On the whole, when the neighbor hop number K ranges in [2, 3] and the β ranges in [0.5, 0.7], our method gets the best performance. These results show the usefulness of the graph structure information and the lazy random walk strategy.
In sum, we can get some interesting findings: (1) the quality of CSDs is the key to ZNC, (2) with high-quality CSDs, graph structure information can be very useful (even be comparable to node attributes) for ZNC, and (3) the involved decomposed GCNs and local loss play very important roles in our method.
6.4 Validation of Decomposed GCNs (RQ3)
We compare our method with the vanilla GCN method on the standard node classification task. In our method, we continue with its default network setting, but replace the final prototypical loss with the standard cross-entropy loss. In addition, we use our trick version (Eq. 15) and set K = 2, so as to be consistent with the default setting of the vanilla GCN. Besides Cora and Citeseer, we further introduce another citation network Pubmed which has 19, 717 nodes (with 500-dimensional attributes) and-
 44, 338 edges. On all these datasets, we adopt the standard train/val/test splits [40]. More experimental details can be found in Appendix A.5.2. Table 6 reports the results on the standard node classification task. We can see that our method obtains very similar results compared to the vanilla GCN method. This is consistent with our decomposition analysis in Section 5.2.2. Here, we do not test the case with local loss, as this loss does not affect the performance of our method in this task.
In sum, the above experiments demonstrate the effectiveness of our decomposed GCNs part. This provides new opportunities for our method to be applied in a wider range of applications.

Table 6: The standard node classification accuracy (%).
Cora Citeseer Pubmed
Numbers from literature:
GCN 81.5 70.3 79.0
Our experiments:
GCN 81.23 ± 0.52 70.32 ± 0.54 79.01 ± 0.44 Ours 81.38 ± 0.66 70.53 ± 0.65 78.89 ± 0.41
7 CONCLUSION
In this paper, we provide the first study of zero-shot node classification. Our contributions lie in two main points. First of all, by introducing a novel quantitative CSDs evaluation strategy, we show how to acquire high-quality CSDs in a completely automatic way. On the other hand, we propose a novel method named DGPN for the studied problem, following the principles of locality and compositionality. Experiments on several real-world datasets demonstrate the effectiveness of our two main contrib-
utions. In the future, we plan to consider more complex graphs, such as signed graphs and heterogeneous graphs.
ACKNOWLEDGMENTS
This work is supported by National Natural Science Foundation of China (61902020), National Key D&R Program of China (2019YFB1600704), Macao Youth Scholars Program (AM201912), The Science and Technology Development Fund, Macau SAR (0068/2020/AGJ, 0045/2019/A1, 0007/2018/A1, SKL-IOTSC-2021-2023), GSTIC (201907010013, EF005/FSTGZG/2019/GSTIC), University of Macau (MYRG2018-00129-FST), and Fundamental Research Funds for the Central Universities (FRFTP-20-040A2).
REFERENCES
[1] Jacob Andreas. 2018. Measuring Compositionality in Representation Learning. In ICLR.
[2] Olivier Chapelle, Bernhard Scholkopf, and Alexander Zien. 2009. Semi-supervised learning [book reviews]. IEEE TNN 20, 3 (2009), 542–542. [3] Diane J Cook and Lawrence B Holder. 2006. Mining graph data. John Wiley & Sons. [4] Pim de Haan, Taco Cohen, and Max Welling. 2020. Natural graph networks. arXiv preprint arXiv:2007.08349 (2020).
[5] Michaël Defferrard, Xavier Bresson, and Pierre Vandergheynst. 2016. Convolutional neural networks on graphs with fast localized spectral filtering. In NIPS. 3844–3852. [6] Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2018. Bert: Pre-training of deep bidirectional transformers for language understanding. arXiv preprint arXiv:1810.04805 (2018).
[7] Ali Farhadi, Ian Endres, Derek Hoiem, and David Forsyth. 2009. Describing objects by their attributes. In CVPR. IEEE, 1778–1785. [8] Lise Getoor. 2005. Link-based classification. In AMKDCD. Springer, 189–207. [9] Palash Goyal and Emilio Ferrara. 2018. Graph embedding techniques, applications, and performance: A survey. Knowledge-Based Systems 151 (2018), 78–94. [10] David K Hammond, Pierre Vandergheynst, and Rémi Gribonval. 2011. Wavelets on graphs via spectral graph theory. ACHA 30, 2 (2011),-
 129–150. [11] Long Jin, Yang Chen, Tianyi Wang, Pan Hui, and Athanasios V Vasilakos. 2013. Understanding user behavior in online social networks: A survey. IEEE Communications Magazine 51, 9 (2013), 144–150. [12] Minoru Kanehisa and Peer Bork. 2003. Bioinformatics in the post-sequence era. Nature Genetics 33, 3 (2003), 305–310. [13] Thomas N Kipf and Max Welling. 2016. Semi-supervised classification with graph convolutional networks. arXiv preprint arXiv:1609.02907 (2016).
[14] Alex Krizhevsky, Ilya Sutskever, and Geoffrey E Hinton. 2017. Imagenet classification with deep convolutional neural networks. Commun. ACM 60, 6 (2017), 84–90.
[15] Christoph H Lampert, Hannes Nickisch, and Stefan Harmeling. 2013. Attributebased classification for zero-shot visual object categorization. IEEE TPAMI 36, 3 (2013), 453–465. [16] Ken Lang. 1995. Newsweeder: Learning to filter netnews. In ICML. 331–339. [17] Hugo Larochelle, Dumitru Erhan, and Yoshua Bengio. 2008. Zero-data learning of new tasks. In AAAI, Vol. 1. 646–651. [18] Qimai Li, Zhichao Han, and Xiao-Ming Wu. 2018. Deeper insights into graph convolutional networks for semi-supervised l-
earning. In AAAI. 3538–3545. [19] Shaoteng Liu, Jingjing Chen, Liangming Pan, Chong-Wah Ngo, Tat-Seng Chua, and Yu-Gang Jiang. 2020. Hyperbolic Visual Embedding Learning for Zero-Shot Recognition. In CVPR. 9273–9281. [20] Tomas Mikolov, Kai Chen, Greg Corrado, and Jeffrey Dean. 2013. Efficient estimation of word representations in vector space. arXiv preprint arXiv:1301.3781 (2013). [21] Shirui Pan, Jia Wu, Xingquan Zhu, Chengqi Zhang, and Yang Wang. 2016. Triparty deep network representation. In -
IJCAI. 1895–1901. [22] Bernardino Romera-Paredes and Philip Torr. 2015. An embarrassingly simple approach to zero-shot learning. In ICML. 2152–2161. [23] Prithviraj Sen, Galileo Namata, Mustafa Bilgic, Lise Getoor, Brian Galligher, and Tina Eliassi-Rad. 2008. Collective classification in network data. AI Magazine 29, 3 (2008), 93–93. [24] David I Shuman, Sunil K Narang, Pascal Frossard, Antonio Ortega, and Pierre Vandergheynst. 2013. The emerging field of signal processing on graphs: Extending hig-
h-dimensional data analysis to networks and other irregular domains. IEEE SPM 30, 3 (2013), 83–98. [25] David I Shuman, Benjamin Ricaud, and Pierre Vandergheynst. 2012. A windowed graph Fourier transform. In IEEE SSP Workshop. Ieee, 133–136. [26] Jake Snell, Kevin Swersky, and Richard Zemel. 2017. Prototypical networks for few-shot learning. In NIPS. 4077–4087. [27] Tristan Sylvain, Linda Petrini, and Devon Hjelm. 2019. Locality and Compositionality in Zero-Shot Learning. In ICLR. [28] Iulia Turc,-
 Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2019. Well-read students learn better: On the importance of pre-training compact models. arXiv preprint arXiv:1908.08962 (2019).
[29] Petar Veličković, Guillem Cucurull, Arantxa Casanova, Adriana Romero, Pietro Liò, and Yoshua Bengio. 2018. Graph Attention Networks. In ICLR. [30] Ziyu Wan, Dongdong Chen, Yan Li, Xingguang Yan, Junge Zhang, Yizhou Yu, and Jing Liao. 2019. Transductive zero-shot learning with visual structure constraint. In NIPS. 9972–9982. [31] Qiao Wang, Zheng Wang, and Xiaojun Ye. 2017. Equivalence between line and matrix factorization. arXiv preprint arXiv:1707.05926 (2017).
[32] Wei Wang, Vincent W Zheng, Han Yu, and Chunyan Miao. 2019. A survey of zero-shot learning: Settings, methods, and applications. ACM TIST 10, 2 (2019), 1–37. [33] Xiaolong Wang, Yufei Ye, and Abhinav Gupta. 2018. Zero-shot recognition via semantic embeddings and knowledge graphs. In CVPR. 6857–6866. [34] Zheng Wang, Ruihang Shao, Changping Wang, Changjun Hu, Chaokun Wang, and Zhiguo Gong. 2021. Expanding Semantic Knowledge for Zero-shot Graph Embedding. In DASFAA. [35] Zheng Wang, Chaokun Wang-
, Jisheng Pei, Xiaojun Ye, and S Yu Philip. 2016. Causality Based Propagation History Ranking in Social Networks.. In IJCAI. 3917–3923. [36] Zheng Wang, Xiaojun Ye, Chaokun Wang, Jian Cui, and Philip S Yu. 2020. Network Embedding with Completely-imbalanced Labels. TKDE (2020). https://doi.org/ 10.1109/TKDE.2020.2971490 [37] Zheng Wang, Xiaojun Ye, Chaokun Wang, Yuexin Wu, Changping Wang, and Kaiwen Liang. 2018. RSDNE: Exploring relaxed similarity and dissimilarity from completely-imbalanced labels-
 for network embedding. In AAAI. 475–482. [38] Zonghan Wu, Shirui Pan, Fengwen Chen, Guodong Long, Chengqi Zhang, and S Yu Philip. 2020. A comprehensive survey on graph neural networks. IEEE TNNLS (2020). [39] Wenjia Xu, Yongqin Xian, Jiuniu Wang, Bernt Schiele, and Zeynep Akata. 2020. Attribute Prototype Network for Zero-Shot Learning. NIPS 33 (2020). [40] Zhilin Yang, William Cohen, and Ruslan Salakhudinov. 2016. Revisiting SemiSupervised Learning with Graph Embeddings. In ICML. 40–48. [41] Wenp-
eng Yin, Jamaal Hay, and Dan Roth. 2019. Benchmarking Zero-shot Text Classification: Datasets, Evaluation and Entailment Approach. In EMNLP-IJCNLP. 3905–3914. [42] Ziming Zhang and Venkatesh Saligrama. 2015. Zero-shot learning via semantic similarity embedding. In ICCV. 4166–4174. [43] Dengyong Zhou, Olivier Bousquet, Thomas N Lal, Jason Weston, and Bernhard Schölkopf. 2004. Learning with local and global consistency. In NIPS. 321–328. [44] Xiaojin Zhu, Zoubin Ghahramani, and John D Lafferty. 2003-
. Semi-supervised learning using gaussian fields and harmonic functions. In ICML. 912–919. [45] Yizhe Zhu, Mohamed Elhoseiny, Bingchen Liu, Xi Peng, and Ahmed Elgammal. 2018. A generative adversarial approach for zero-shot learning from noisy texts. In CVPR. 1004–1013.

Table 7: Detailed class distributions in datasets
Dataset Class ID Quantity Class Label (Name)
Cora
0 818 Neural Network 1 180 Rule Learning 2 217 Reinforcement Learning 3 426 Probabilistic Methods 4 351 Theory 5 418 Genetic Algorithms 6 298 Case Based
Citeseer
0 596 Agent 1 668 Information Retrieval 2 701 Database 3 249 Artificial Intelligence 4 508 Human Computer Interaction 5 590 Machine Learning
C-M10M
0 825 Biology 1 852 Computer Science 2 600 Financial Economics 3 730 Industrial Engineering 4 674 Physics 5 783 Social Science
A APPENDIX
A.1 Datasets Details
As summarized in Table 2 and Table 7, we use the following three real-world datasets:
(1) Cora3 [8] is a paper citation network. It consists of 2,708 papers from seven machine learning related categories, with 5,429 citation links among them. Each node has a 1,433dimensional bag-of-words (BOW) feature vector indicating whether each word in the vocabulary is present (indicated by 1) or absent (indicated by 0) in the paper. (2) Citeseer4 [8] is also a citation network which is a subset of the papers selected from the CiteSeer digital library. It contains 3,312 papers from six categor-
ies, with 4,732 citation connections. Each node also has a BOW feature vector and the dictionary size is 3,703. (3) C-M10M [16] is a subset of the scientific publication dataset Citeseer-M105 [21]. As the original Citeseer-M10 contains too much noise, we thereby remove all the nodes which have no labels or attributes, remove the classes whose node number is less than 70, and also remove the associated edges under the above conditions. Finally, we get the dataset CM10M which consists of publication-
s from six distinct research areas, including 4,464 publications and 5,804 citation links. As its node attributes are in plain-text form, we simply use Bert-Tiny to process them to get 128-dimensional features.
Seen/Unseen Class Split. In this paper, we provide two fixed seen/unseen class split settings. Specifically, based on their class IDs shown in Table 7, we adopt the first few classes as seen classes
3 https://linqs-data.soe.ucsc.edu/public/lbc/cora.tgz
4 https://linqs-data.soe.ucsc.edu/public/lbc/citeseer.tgz
5 https://github.com/shiruipan/TriDNR
and adopt the rest as unseen classes. In the setting of Class Split I, the [train/val/test] class split for Cora, Citeseer, and C-M10M are: [3/0/4], [2/0/4] and [3/0/3]. In the setting of Class Split II, we further partition the seen classes to train and validation parts, where [train/val/test] class splits in these three datasets become: [2/2/3], [2/2/2] and [2/2/2].
A.2 CSDs Evaluation Experiment Details
In this experiment, we use three real-world datasets: Cora, Citeseer and C-M10M. The details of these datasets can be found in Appendix A.1. Their node attributes are pre-processed as follows. As the first two datasets have BOW features, to avoid the curseof-dimensionality, we apply SVD decomposition to reduce the attribute dimension to 128. In the third dataset C-M10M, we use the 128-dimensional features generated by Bert-Tiny, as mentioned above. Finally, all the CSD vectors and node attribute v-
ectors are normalized to unit length, for a fair computation.
A.3 Explaining Local and Global Features
A local part
Global (compositional) representation
Apply CNNs
(a) Apply CNNs to an image: for this image, the local feature refers to the representations learned from a “patch” of an image, and the global feature refers to the pooling (like concatenation) result of those local ones.
Layer 1 i
Layer 2
Global (compositional) representation
Local representations
Self features
2-hop neighbor features
1-hop neighbor features
Apply two-layer GCNs
(b) Apply K -layer (here K =2) GCNs to a graph: for a node in this graph, the {k }K
k=0-th local feature of this node refers to its k-hop neighbor information, and
the global feature refers to the weighted sum of all its 3 (i.e., K + 1) local ones.
Figure 5: CNNs for images v.s. GCNs for graphs
A.4 Baselines Details
We compare the result of ours against the following methods:
(1) DAP6 [15] is one of the most well-known ZSL methods. In this method, an attribute classifier is first learned from source classes and then is applied to unseen classes for ZSL. (2) ESZSL7 [22] is a very simple and classical ZSL method. It adopts a bilinear compatibility function to directly model the relationships among features, CSDs and class labels.
6As its codes are unavailable now, we reimplement it in PyTorch.
7 https://github.com/bernard24/Embarrassingly-simple-ZSL

Table 8: Search space of hyper-parameters.
Parameters Value Learning rate {0.001, 0.01, 0.1} Training epoch {200, 500, 1000, 1200} Weight decay {0, 1e-6, 1e-5, 1e-4} Dropout rate {0.3, 0.5, 0.7} K-hop {1, 2, 3, 4, 5} α {0.1, 0.5, 1} β {0.1, 0.3, 0.5, 0.7, 0.9}
(3) ZS-GCN 8 [33] uses GCN for knowledge transfer among similar classes, based on class relationships reflected on a knowledge graph. However, unlike our method, it applies GCN on a class-level graph which describes the relationships among classes. (4) WDVSc9 [30] is a transductive ZSL method which jointly considers the samples from both seen and unseen classes. It adds different types of visual structural constraints to the prediction results, so as to improve the attribute prediction accuracy. (-
5) Hyperbolic-ZSL10 [19] is a recently proposed ZSL method. It learns hierarchical-aware embeddings in hyperbolic space for ZSL, so as to preserve the hierarchical structure of semantic classes in low dimensions. (6) RandomGuess simply randomly choose an unseen class label for each testing node.
In addition, as traditional methods are mainly designed for computer vision, their original implementations heavily rely on some pre-trained CNNs. Therefore, we additionally test two representative variants: DAP(CNN) and ZS-GCN(CNN), in both of which a pre-trained AlexNet is used as the backbone network. Specifically, we use the AlexNet11 released by the official PyTorch library. Also, to be compatible with CNNs, we adopt zero-padding to handle the input of convolution layer.
Parameter Settings. In the Class Split II, the hyper-parameters in baselines and ours are all determined based on their performance on validation data. Table 8 shows the search space of the hyperparameters. In addition, in those baselines, their default hyperparameters are also considered.
A.5 More Experimental Details of Our Method
A.5.1 Running Environment. The experiments in this paper are all conducted on a single Linux server with 56 Intel(R) Xeon(R) Gold 5120 CPU 2.20GHz, 256G RAM, and 8 NVIDIA GeForce RTX 2080 Ti. The codes of our method are all implemented in PyTorch 1.7.0 with CUDA version 10.2, scikit-learn version 0.24, and Python 3.6.
A.5.2 Detailed Experiments for Decomposed GCNs. The statistics of the datasets used in this experiment are summarized in Table 9. In the vanilla GCN method, we adopt its default setting, i.e., 2 (layer number), 16 (number of hidden units), 0.5 (dropout rate), 5e-4 (L2 regularization), and ReLU (activation function). We train all
8 https://github.com/JudyYe/zero-shot-gcn
9 https://github.com/raywzy/VSC
10 https://github.com/ShaoTengLiu/Hyperbolic_ZSL
11 https://pytorch.org/hub/pytorch_vision_alexnet/
Table 9: Dataset statistics of the citation networks.
Dataset Classes Nodes Edges Train/Val/Test Nodes
Cora 7 2, 708 5, 429 140/500/1, 000 Citeseer 6 3, 327 4, 732 120/500/1, 000 Pubmed 3 19, 717 44, 338 60/500/1, 000
methods for a maximum of 200 epochs, using Adam with a learning rate of 0.01. We also adopt early stopping with a window size of 10, i.e., stopping training if the validation loss does not decrease for 10 consecutive epochs. In addition, in our method, we also adopt the above training settings.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:29.148Z
- **Text Length:** 59560 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
