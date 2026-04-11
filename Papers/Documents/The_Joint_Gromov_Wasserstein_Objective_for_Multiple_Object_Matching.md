# PDF Document: Riahi and Duc - 2025 - The Joint Gromov Wasserstein Objective for Multiple Object Matching.pdf

**File Path:** Riahi and Duc - 2025 - The Joint Gromov Wasserstein Objective for Multiple Object Matching.pdf

**Processed Date:** 2026-02-10T18:14:08.050Z

**File Size:** 2919.93 KB

**Total Pages:** 21

**Extracted Pages:** 21

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3648

**Title:** The Joint Gromov Wasserstein Objective for Multiple Object Matching

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

The Joint Gromov Wasserstein Objective for Multiple Object
Matching
Aryan Tajmir Riahi1, and Khanh Dao Duc1,2,∗
1 Department of Computer Science, University of British Columbia, Vancouver, BC V6T 1Z4, Canada 2 Department of Mathematics, University of British Columbia, Vancouver, BC V6T 1Z4, Canada
Abstract
The Gromov-Wasserstein (GW) distance serves as a powerful tool for matching objects in metric spaces. However, its traditional formulation is constrained to pairwise matching between single objects, limiting its utility in scenarios and applications requiring multiple-to-one or multiple-to-multiple object matching. In this paper, we introduce the Joint Gromov-Wasserstein (JGW) objective and extend the original framework of GW to enable simultaneous matching between collections of objects. Our form-
ulation provides a non-negative dissimilarity measure that identifies partially isomorphic distributions of mm-spaces, with point sampling convergence. We also show that the objective can be formulated and solved for point cloud object representations by adapting traditional algorithms in Optimal Transport, including entropic regularization. Our benchmarking with other variants of GW for partial matching indicates superior performance in accuracy and computational efficiency of our method, while e-
xperiments on both synthetic and real-world datasets show its effectiveness for multiple shape matching, including geometric shapes and biomolecular complexes, suggesting promising applications for solving complex matching problems across diverse domains, including computer graphics and structural biology.
Introduction
Finding correspondence between two objects is a central problem in computer science with applications such as shape interpolation and texture transfer in computer vision [1], account linking across social networks [2], or protein structure analysis [3, 4]. Despite extensive research on object matching across these domains, existing methods mostly address full-to-full shape matching [1, 5, 6, 7], where both objects are assumed to be complete with no significant missing parts. A smaller body of work-
 focuses on partial-to-full matching [1, 8, 9, 10], where an incomplete object is matched against a complete reference. However, when multiple fragments must be assembled—a scenario arising in protein model building [4], merging partial 3D scans [11], and solving 2D and 3D puzzles [12, 13]— current approaches require sequential pairwise matching. This strategy can lead to error accumulation and increased computational cost, motivating the need for multiple-to-multiple partial matching methods. Rec-
ently, Optimal Transport theory (OT) [14] and its related tools became a popular choice establishing correspondence between two objects represented as measurements over a metric space in graph matching [15, 16], graph clustering [17], matching language models [18], and biomolecule matching [4, 3, 19]. In particular, approximations of the Gromov-Wasserstein (GW) distance [20] have gained popularity, as they provide a powerful tool for matching objects defined in different domains and are rigid body-
 transformation invariant (so they don’t require pre-alignment). Furthermore, researchers have designed various extensions and variants of the Gromov-Wasserstein distance [21, 22, 23] for partial-to-full matching. The Z-GromovWasserstein distance [24] was recently introduced for the multiple-to-multiple partial matching problem, assuming a Z-structure on the distributions. However, many multiple-to-multiple matching applications lack such structure in the data. In this paper, we introduce the Join-
t Gromov-Wasserstein (JGW) problem, that is a novel variant of the original Gromov-Wasserstein formulation that enables the matching of two collections of objects simultaneously. To summarize, our key contributions are as follows.
∗ corresponding author: kdd@math.ubc.ca
1
arXiv:2511.16868v1 [cs.CV] 21 Nov 2025

• We formulate the new JGW objective function, which extends the mathematical concepts underlying the Gromov-Wasserstein objective function, such as metric measure spaces and isomorphisms, to handle collections of objects. We prove theoretical properties of the JGW objective, analyzing its metric properties and convergence from point sampling.
• We investigate and adapt existing approximation techniques from the standard Gromov-Wasserstein problem to our the JGW framework, to produce feasible and applicable algorithms to compute it.
• We demonstrate the usefulness of the JGW formulation through benchmarks against other GW variants, and experiments on object matching problems with various datasets including 2D/3D geometric shapes and biomolecular complexes.
Related Work
Here, we cover most recent works on partial and multiple-to-multiple object matching, with a focus on OT-related approaches. We refer interested readers to [1] for a broader survey of object matching methods.
Partial Matching. Partial-to-full matching, where an incomplete query must be aligned to a complete template, has received considerable attention due to its practical importance in object recognition and retrieval. Early approaches adapted full matching techniques by incorporating outlier handling mechanisms [1] or by identifying and matching salient regions [25]. The SHREC benchmark for partial matching [9] has driven progress in this area, with top-performing methods leveraging learned descripto-
rs [10], and region growing strategies [25]. Graph matching has been extended to the partial setting through modifications that allow node and edge deletions [26, 27], while point cloud methods have incorporated robust estimators [28] and learned features [29] to handle missing data. In the optimal transport framework, partial variants such as unbalanced [30, 23] and semi-relaxed [22, 21] optimal transport have been developed.
Multiple-to-Multiple Matching. Matching multiple objects simultaneously, rather than through sequential pairwise alignments, has been explored primarily in the context of full shape collections. Litany et al. [13] used an extension of Partial Functional Maps to introduce a framework for multiple-to-multiple shape matching. Wu et al. introduced an alternative approach by simultaneous partial functional correspondence [31]. In the context of Optimal Transport Theory, the Z-Gromov-Wasserstein distanc-
e [24] was recently introduced, extending the traditional Gromov-Wasserstein framework to match distributions equipped with Z-structure. However, many multiple-to-multiple matching applications lack such structure in the data.
Gromov-Wasserstein Distance
In this section we briefly introduce the traditional Gromov-Wasserstein distance [20] along with key definitions.
Preliminaries
Suppose we are given two compact metric spaces (X, dX ), (Y, dY ) and measures μX , μY . Following [20], define the metric measure space (mm-space) and the set of all couplings, two fundamental concepts for the definition of the Gromov-Wasserstein distance, as follows.
Definition 1. A metric measure space (mm-space) is a triple (X, dX , μX ), where (X, dX ) is a compact metric space and μX is a Borel probability measure, i.e., μX (X) = 1 and supp[μX ] = X. An example of a discrete mm-space is illustrated in Figure 1a.
Definition 2. Two mm-spaces (X, dX , μX ) and (Y, dY , μY ) are called isomorphic if there exists isometry ψ : X → Y , i.e., dx(x, x′) = dy(ψ(x), ψ(x′)) for any x, x′ ∈ X, such that (ψ#μX ) = μY , where # denotes the pushforward operator. Note that isomorphism is an equivalence relation, and the GW problem aims to define a metric between equivalence classes of mm-spaces.
2

The main goal of the GW problem is to define a metric between “nonequal” classes of mm-spaces. To complete this task, [20] defines isomorphism as a notion of equality between mm-spaces.
Definition 3. Given two mm-spaces (X, dX , μX ) and (Y, dY , μY ), M(μX , μY ) denotes the set of all transportation plans, such that, μ ∈ M(μX , μY ) is a Borel probability measure on X × Y , and satisfies the marginal constraints μ(A × Y ) = μx(A) for any Borel subset A ⊂ X, and μ(X × B) = μy(B) for any Borel subset B ⊂ Y .
Formulation
These definitions enable us to define the Gromov-Wasserstein distance as a comparison method between mm-spaces.
Definition 4. [20] Given two mm-spaces (X, dX , μX ) and (Y, dY , μY ), the Gromov-Wasserstein distance between X and Y is defined as
GWΓ,p(X, Y ) =
inf
μ∈M(μX ,μY )
1 2
Z
X ×Y
Z
X ×Y
Γ(x, y, x′, y′)μ(dx × dy)μ(dx′ × dy′)
1/p
, (1)
where Γ : X × Y × X × Y → R is called the loss function. With the typical choice of Γp(x, y, x′, y′) = |dX (x, x′) − dY (y, y′)|p we often denote GWΓp,p(X, Y ) by GWp(X, Y ).
The minimizer of this optimization problem is called the transportation plan, and it can be used to find a matching between X and Y , as a metric function between isomorphy classes of mm-spaces:
Theorem 5 ([20]). GWp defines a metric on the collection of all isomorphism classes of mm-spaces.
The Joint Gromov-Wasserstein Objective
Preliminaries and Definition
To enable multiple-to-multiple object matching, we extend fundamental concepts associated with the GW distance, by first introducing distributions of metric measure spaces (see also Definition 1).
Definition 6. A distribution of mm-spaces is a categorical distribution of kX mm-spaces, usually denoted X = (Xi, dXi , μXi , sXi )i∈[kX ], where
(i) ∀i ∈ [kX ], (Xi, dXi , μXi ) is a metric measure space (called cluster i) (ii) sXi ∈ R>0 is the probability assigned to cluster i.
Figure 1 shows an illustrative comparison between a mm-space (1a) and a distribution of mm-spaces (1b). To provide a framework for comparing distributions of mm-spaces, we introduce the notion of embedding:
Definition 7. Given a distribution of mm-spaces X = (Xi, dXi , μXi , sXi )i∈[kX], an embedding of X is a mm-space (X, dX , μX ) such that there exist kX isometries (ψi : Xi → X)i∈[kX], such that (i) P
j∈[kX ] sXj × ψj #μXj = μX
(ii) ∀(j, k) ∈ [kX ]2, ψj(Xj) ∩ ψj(Xk) = ∅ (iii) X = S
i∈[kX ] ψXi (Xi).
We call the ψi’s embedding functions.
Using embeddings, we now formulate the Joint Gromov-Wasserstein objective:
Definition 8. Given two distributions of mm-spaces X and Y and embeddings (X, dX , μX ) and (Y, dY , μY ) with embedding functions (ψXi )i∈[kX] and (ψYi )i∈[kY ] respectively, the joint Gormov-Wasserstein divergence between X and Y is defined by
J GWp(X, Y) = GWΓ∗p,p(X, Y ), (2)
3

where for all (i, j) ∈ [kX ] × [kY ] and (x, x′, y, y′) ∈ Im(ψXi )2 × Im(ψYj )2,
Γ∗
p(x, y, x′, y′) = |dX (x, x′) − dY (y, y′)|p, (3)
and Γ∗p = 0 otherwise.
We note that while the definition of J GWp(X, Y) uses given embeddings X, Y , its value and the associated transport plan do not depend on these. They also neither depend on the choice of the embedding functions:
Theorem 9. Given two distributions of mm-spaces X and Y and different embeddings X1, X2 for X and Y1, Y2 for Y, we have
GWΓ∗p,p(X1, Y1) = GWΓ∗p,p(X2, Y2).
We provide a detailed proof of this theorem in Appendix A.
Partial Ismorphism
To establish key properties of the Joint Gromov Wassertein objective function as a similarity measure between distributions of mm-spaces, we now extend the notion of isomorphism (Definition 2) to partial isomorphism as follows.
Definition 10. Two distributions of mm-spaces X = (Xi, dXi , μXi , sXi )i∈[kX] and Y = (Yi, dYi , μYi , sYi )i∈[kY ] are called partially isomorphic if there exists a distribution of mm-spaces Z, indexed by (i, j) ∈ [kX × kY ]
Z = (Zi,j , dZi,j , μZi,j , sZi,j )i∈[kX ],j∈[kY ],
and isometry functions ψX
i,j : Zi,j → Xi and ψY
i,j : Zi,j → Yj , such that
X
j
ψX
i,j #μZi,j × sZi,j = μXi × sXi and
X
i
ψY
i,j #μZi,j × sZi,j = μYj × sYj .
Similar to [20] for mm-spaces, we can then extend Theorem 5 to distributions of mm-spaces:
Theorem 11. Given two distribution of mm-spaces X, Y and p ∈ [1, ∞), J GWp(X, Y) = 0 if and only if X and Y are partially isomorphic.
For a detailed proof, see Appendix B.
Remark 11.1. Although Theorem 11 shows that some properties of isomorphism of GWp naturally extend to J GWp, note that the Joint Gromov-Wasserstein objective function does not form a proper distance function that holds the triangle inequality (which is not issue for our goal of matching two collections of objects). As a counterexample, let X = {0, 1}, Z = {0, 2}, both equipped with the uniform distribution and Y be a distribution of mm-spaces with two one-point set clusters of equal mass. One can -
verify that X and Y are partially isomorphic, thus, J GWp(X, Y) = 0. With the same argument we can see that J GWp(Z, Y) = 0. However, X and Z are not partially isomorphic hence J GWp(Z, X) > 0.
Point Sampling Convergence
In the context of shape matching, having point sampling convergence for the objective is crucial, since objects get discretized or represented by point clouds. The following theorem ensures that we also asymptotically recover JGW when doing so:
Theorem 12. Let X = (Xi, dXi , μXi , sXi )i∈[kX] be a distribution of mm-spaces and p ∈ [1, ∞), n ∈ N. Consider n i.i.d samples from X (by randomly picking a cluster j from Cat(si) and sampling a point in Xj from μXj ), distributed into the kX mm-spaces of X as {Xn
i }i∈[kX]. Let Xn be a distribution of mm-spaces
defined as (Xn
i , dXi , μi, sXi )i∈[kX] where μi is the uniform measure on Xn
i . Then J GWp(Xn, X) → 0 almost surely as n → ∞.
For a detailed proof, see Appendix C.
4

The Joint Gromov-Wasserstein Objective in Finite Space
In practice, we are interested in solving a discretized version of the Joint Gromov-Wasserstein objective function. Formally, let X = (Xi, dXi , μXi , sXi )i∈[kX ] and Y = (Yi, dYi , μYi , sYi )i=1∈[kY ], with Xi and Yi being finite for all i, and let us denote nXi and nYi the cardinal of Xi and Yi respectively, so Xi = {xi,j}j∈[nXi ]
and Yi = {yi.j }j=1∈nYi , with pairwise distance matrices dXi ∈ RnXi ×nXi
≥0 and dYi ∈ RnYi ×nYi
≥0 . To simplify
our embedding notation, we also denote X = SkX
i=1 Xi and Y = SkY
i=1 Yi. We now create μX and μY as distributions over X and Y respectively, as
μX [xi,j ] = sXi μXi [xi,j ], μY [yi,j ] = sYi μYi [yi,j ].
Note that with this definition we clearly have μX [X] = μY [Y ] = 1. Next, we define the block matrices
dX =

   
dX1 0 . . . 0 0 dX2 . . . 0
... ... . . . ...
0 0 . . . dXkX

   
, IX =

   
JnX1 ,nX1 0 . . . 0
0 JnX2 ,nX2 . . . 0
... ... . . . ...
0 0 . . . JnXkX ,nXkX

   
.
With these definitions, we have dX ⊗ IX = dX , and dY ⊗ IY = dY where ⊗, denotes the elementwise multiplication and jn×m denotes a n × m where all entries all one. For simplicity, we now assume p = 2 and denote J GW2(X, Y) by J GW(X, Y). Using (1) and (2), we have
J GW(X, Y) = min
μ∈M(μX ,μY )
1 2


X
i,j,k,l
|dX
ij − dY
kl |2 I X
ij I Y
kl μik μj l


1/2
. (4)
Regularization and Computation
Our goal is now to compute J GW(X, Y) as given in equation (4). One of the main limitations of the GromovWasserstein distance is the non-convexity of its formulation which makes its computation challenging. To overcome this challenge, various approximations and algorithms for GW distance or its variants have been proposed, such as linear lower bounds [20], entropic regularization [32], operator splitting-based relaxation [16], and Frank-Wolfe optimization algorithm [22]. To compute (4) we can adap-
t most of these techniques, including methods used in [16, 32, 22], and one of the linear lower bounds proved in [20]. In the rest of this paper, as a proof of concept, we focus on adapting entropic regularization [32], which is one of the most widely used approximations for OT problems [33]. To do so, we introduce the regularization term to (4):
J GWε(X, Y) = min
μ∈M(μX ,μY )
1 2


X
i,j,k,l
|dX
ij − dY
kl |2 I X
ij I Y
klμikμjl + εH(μ)


1/2
,
where H is the usual entropy function defined by
H(μ) = −
X
i,j
μi,j log(μi,j ),
and ε ∈ R≥0 is called the regularization parameter.
Proposition 13. Given X, Y and ε ∈ R≥0, we have
J GWε(X, Y) = min
μ∈M(μX ,μY )
1
2 (⟨μ, Λ(μ)⟩ + εH(μ))1/2 ,
where ⟨., .⟩ is the inner product of two given matrices, the superscript ∧2 denotes the elementwise square of a matrix, and Λ is defined as
Λ(μ) = dX∧2μIY − 2dX μdY + IX μdY ∧2.
5

We prove Proposition 13 Appendix D. Using this Theorem and with the same argument as [34, 32], we can compute the transportation plan (μ) by solving
μ = argmin
μ∈M(μX ,μY )
KL(μ, e Λ(μ)
ε ). (5)
To solve (5), similar to [34, 32] we can use the following iterations
μ(t+1) = argmin
μ∈M(μX ,μY )
KL(μ, e Λ(μ(t))
ε
∧η
⊗
h
μ(t)i∧(1−η)
), (6)
where 0 < η ≤ 1 is called the convergence parameter. Note that the number of iterations of (6) needed for convergence increases as η → 0, but the iterations might not converge for high enough values of η. Pseudocode for this method is provided in Algorithm 1.
Algorithm 1 Pseudocode for approximating JGW solver
Input convergence parameter η ∈ (0, 1], regularization parameter ε ∈ R≥0, maximum number of iterations T ∈ N and two embedded distribution of mm-spaces X, Y given by distance matrices dX ∈ RnX ×nX , dY ∈ RnY ×nY , cluster matrices IX ∈ RnX ×nX , IY ∈ RnY ×nY , and marginal vectors μX ∈ RnX , μY ∈ RnY
1: μ := μX × μT
Y
2: for t in 1, 2, . . . , T do 3: Λ = dX∧2μIY − 2dX μdY + IX μdY ∧2
4: K =
h
e
Λ ε
i∧η
⊗ [μ]∧(1−η)
5: μ = SINKHORN-PROJECTION(K, μX , μY ) 6: end for 7: return μ
Experiments and Results
For all the following experiments, the computational times reported were obtained on the same machine with a 12th Gen Intel(R) Core(TM) i5-1240P (1.70 GHz) CPU and 16.0 GB of RAM. None of the following experiments uses a GPU. All of the code for this paper is implemented in Python 3.10. and is available in this repository.
General Evaluation on Partial Matching
To evaluate the performance of the JGW objective, we first conducted a partial matching experiment by comparing JGW with other recent Gromov-Wasserstein variants involving two unbalanced measurements p, q (1 = |p| > |q|), including the mass-constrained Partial Gromov-Wasserstein distance (mPGW) [22], the Partial Gromov-Wasserstein distance (PGW) [21], and the Unbalanced Gromov-Wasserstein distance (UGW) [23]. Although JGW originally operates on data from all clusters, we adapted it for this specif-
ic scenario by employing dummy clusters through the construction Y = {p} and X = {X1, X2} where X1 is q/|q| with mass sX1 = |q| and X2 is a single point distribution with mass sX2 = 1−|q|. Using the formulation of (2), we notice that the formulation of mPGW [22] is equivalent to this special case of JGW. However, the computation method suggested by its authors differs from the approximation we used for our computations. We generated the source distribution (q) by sampling 200 points from an Archim-
edean spiral with added noise, while the target distribution (p) combines 200 points sampled using the same method, but with 100 additional points drawn from a standard normal distribution (see Figure 2a). We then applied mPGW[22], PGW[21], UGW[23], and our proposed JGW method to compute the optimal coupling between p and q, with results visualized in Figure 2b. The results reveal a significant performance difference in structural preservation. Both mPGW and PGW exhibit substantial difficulty in d-
istinguishing spiral structure from
6

added noise, incorrectly transporting nearly half (49%) of the total mass to noise points. UGW demonstrates some improvement over these methods but still suffers from significant misattribution, transporting 33% of mass toward noise points, and failing to fully capture the spiral’s structural coherence. In contrast, JGW achieves superior performance by effectively separating the true spiral structure from noise contamination, transporting only 0.9% of mass to noise points while preserving the geo-
metric integrity of the spiral pattern. Although we acknowledge that mPGW and PGW results depend critically on the initial coupling of their algorithms, our search across 50 randomly generated transportation plans, combined with the authors’ default initialization strategy, failed to yield satisfactory couplings, suggesting fundamental limitations in these methods’ ability to handle partial matching tasks.
Sparcity of Transport Plans
Another critical consideration in applications involving continuous data, such as shape-matching, is the quality of the coupling matrix to find accurate one-to-one correspondences for geometric analysis. More precisely, this requires sparse transportation matrices. Note that in general, mPGW and PGW achieve completely one-to-one matching matrices, so we here focus on both UGW and JGW, that produce diffuse transportation patterns due to their regularization terms. To examine this aspect, we analyze-
d the same previous experiment, and selected the leftmost point in q to visualize its corresponding transportation edges (shown in purple in Figure 3a). JGW exhibits slightly more sparsity than UGW. To quantify this sparsity difference, we computed the variance of the transported mass from each source point in q for both UGW and JGW methods. The violin plot in Figure 3b displays the distribution of all variances, revealing JGW’s better performance with an average variance of 29 × 10−3 compared to -
UGW’s 38 × 10−3, representing approximately 24% improvement in coupling sparsity. We acknowledge that the sparsity of both methods could be enhanced by decreasing their respective regularization parameters, but such adjustments would come at the cost of increased computational complexity and runtime, creating a fundamental trade-off between coupling sparsity and computational efficiency. Regarding computational efficiency, mPGW and PGW complete their computations in 0.49 and 0.48 seconds respectiv-
ely, leveraging their direct optimization approach, while the regularized methods require substantially more time with UGW taking 227 seconds and JGW achieving some speedup at 108 seconds with our current set of parameters, suggesting representing JGW can achieve faster computation than UGW while delivering better coupling quality. In summary, our example (see Figure 2, 3) demonstrates that JGW discovers couplings that align most closely with structural expectations, outperforming all competing me-
thods in preserving meaningful geometric correspondences. JGW achieves a superior sparsity/runtime trade-off compared to UGW. Although mPGW and PGW offer computational advantages and perfect one-to-one couplings, these benefits come at the significant cost of the failure to preserve the underlying geometric structures.
Applications of JGW in Shape Matching
To analyze the performance of JGW in applications related to shape matching, we designed experiments involving 2D and 3D shape data. First, we used a typeset illustrating of three letters “A”, “B” and “C” (see Figure 4 a source) to build a distribution of mm-spaces with 3 clusters and use as the source space. For the target space, we used a different typeface and created one cluster with the illustration of the word “ABC” (see Figure 4 a target). In Figure 4 a, we color in the right panel ”result”-
 each point in the target distribution based on the cluster from the source space, that has its corresponding coupled point in the JGW transportation plan. JGW manages to transport 98.6% of the mass correctly, by using 450 points to represent the data. This experiment took ≈ 24 seconds to run. To test the performance of JGW on 3D data, we next used two 3D meshes from the CAPOD dataset [35] of a human in different poses. We split the first mesh into 5 clusters, namely, upper body, left arm, right a-
rm, left leg, and right leg (see Figure 4 b). We used the mesh vertices as our distribution points and applied the same method to find correspondence and colorized matched points of each cluster in one color. As Figure 4 b suggests, JGW does a perfect job in distinguishing the arms and the body, although it confuses some parts of the legs. In total more than 80% of the mass is transported correctly, and it took 50 seconds to perform this experiment. We acknowledge that due to symmetry in this part-
icular example, it’s possible to get the same result with the substitution of left and right arm/leg, depending on the initialization of our
7

optimization process. Finally, we evaluated our method on the SHREC’16 cuts dataset [9], which uses shapes from TOSCA [36] and provides partial versions with different cuts (see Figure 4 c). Since the SHREC’16 dataset provides only one partial cluster per shape, we computed the complement component as the second cluster to make it suitable for our method. Figure 4 c shows the colorized correspondence diagram, demonstrating near-perfect mass transportation. To quantitatively evaluate the mapping q-
uality, we employed a standard measure commonly used in shape matching [37, 31, 8], that is the geodesic distance between ground truth and computed corresponding points, normalized by the square root of the full shape’s area. Figure 4 c (Correspondence quality) presents a cumulative distribution function (CDF) of this measure across all mesh vertices. The fact that the CDF reaches 100% at a geodesic error of 0.0001 suggests that this method can match complex shapes with excellent accuracy. For thi-
s experiment we modeled the cat body with 104 points and it took ≈ 3000 seconds to run this experiment. Overall, these experiments show the potential of JGW in shape matching problems.
Alignment of Biomolecular Complexes
As mentioned in the Introduction, one of potential applications for our method is to align and fit biomolecules from 3D density maps obtained from Cryogenic Electron Microscopy [3, 4]. To study how our framework can be applied in this context, we focus on the model-building application, where a density map (a large 3D voxelized array) and the atomic structure of its submodules are given, and the goal is to find an alignment from the submodules to the whole map [4]. In the following experiment, we -
compare the performance of our new joint alignment method with a previous method that uses UGW [23], named EMPOT [4] using the complex protein structure PDB:1I3Q [38]. While this atomic structure originally consists of 10 chains, in order to keep the experiment simple, we here merged 5 small chains and delete 3 tiny ones, resulting in an atomic model with three similar-sized chains (Figure 5a illustrates this simplified version showing each chain with a unique color). To mitigate the impact of sam-
pling point clouds from density maps, we directly sampled a point cloud from each structure (each chain plus the whole structure), with 2471 points 1111, 862, and 498 points from chains A, B, and C, respectively. Then we apply EMPOT and JGW to align these three point clouds to the whole map. Figure 5a shows the reconstructed model with each method, and Figure 5b illustrates the result of alignment of each chain (in red) comparing to the ground truth position of it (in blue). As the figure shows, J-
GW finds a near-perfect alignment for all chains, while EMPOT is off. For quantitative measurements, we report correlation of the density maps, rotational error, and RMSD of PDB maps after applying the alignment for each chain in Table 1 that also confirms our visual assessment. Finally, we also compared runtimes for the two methods. The runtime of JGW with 50 iterations is approximately 805 seconds. For EMPOT, we performed two different alignments for each chain and find the best combination betw-
een these alignments, and the total runtime is around 5680 seconds. This suggests that JGW is more than 11× faster than EMPOT due to the fact that 1- we need to solve more alignment problems to align one-by-one compared to when we align them together using JGW. 2- The computation of our approximation of JGW is slightly faster than the approximation UGW that is utilized for EMPOT.
Conclusion
In this paper, we formulate a novel variant of the Gromov-Wasserstein distance specifically designed to calculate a dissimilarity measure between two collections of mm-spaces, which we call the Joint GromovWasserstein (JGW) objective. We prove several theoretical properties of this new variant and analyze its behavior by showing useful results in the partial isomorphism and point sampling scenarios. Furthermore, we propose a method to adapt existing algorithms designed for computing the entropic r-
egularized Gromov-Wasserstein distance to approximate the solution of our formulation in practice. Finally, we conduct extensive experiments testing our method on partial matching, shape matching, and cryo-EM density map alignment tasks. Our experiments suggest that JGW is applicable to a wide range of problems, significantly outperforming classical partial and unbalanced variants, including mPGW [22], PGW [21], and UGW [23] with particularly strong performance when matching multiple distributions-
. We also show that JGW is effective for image matching and cryo-EM density map alignment, making it a suitable alignment method for cryo-EM model-building applications where multiple chains must be matched simultaneously.
8

Among the potential directions for improving our method, we first mention that the choice of approximation algorithm significantly affects the quality of the transportation map, which is crucial for applications involving continuous data types such as shape matching and cryo-EM density map alignment. Our formulation of JGW can adapt most existing approximations and relaxations developed for the original Gromov-Wasserstein distance using a similar approach, including the methods introduced in [16,-
 22] and one of the three linear lower bounds in [20]. In the context of cryo-EM, while our results suggest that the present approach is suitable for model-building applications, further validation on additional structures with different approximation methods is needed. Finally, it would be valuable to test the method’s ability to handle highly heterogeneous alignments by partitioning the source map and aligning its constituent parts.
Acknowledgments
This research is supported by a NSERC Discovery Grant RGPIN-2020-05348.
References
[1] Sahillio ̆glu Y. Recent advances in shape correspondence. The Visual Computer. 2020;36(8):1705–1721.
[2] Zhang J, Philip SY. Multiple anonymized social networks alignment. In: 2015 IEEE International Conference on Data Mining. IEEE; 2015. p. 599–608.
[3] Tajmir Riahi A, Woollard G, Poitevin F, Condon A, Dao Duc K. AlignOT: An optimal transport based algorithm for fast 3D alignment with applications to cryogenic electron microscopy density maps. IEEE/ACM Transactions on Computational Biology and Bioinformatics. 2023;.
[4] Tajmir Riahi A, Zhang C, Condon A, Chen J, Dao Duc K. Alignment of Partially Overlapping Cryo-EM Maps Using Unbalanced Gromov-Wasserstein Divergence. PRX Life. 2025;3(2):023003.
[5] Roetzer P, Bernard F. Spidermatch: 3D shape matching with global optimality and geometric consistency. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition; 2024. p. 14543–14553.
[6] Ovsjanikov M, Ben-Chen M, Solomon J, Butscher A, Guibas L. Functional maps: a flexible representation of maps between shapes. ACM Transactions on Graphics (ToG). 2012;31(4):1–11.
[7] Cao D, Roetzer P, Bernard F. Unsupervised learning of robust spectral shape matching. arXiv preprint arXiv:230414419. 2023;.
[8] Ehm V, Roetzer P, Eisenberger M, Gao M, Bernard F, Cremers D. Geometrically consistent partial shape matching. In: 2024 International Conference on 3D Vision (3DV). IEEE Computer Society; 2024. p. 914–922.
[9] Cosmo L, Rodola E, Bronstein MM, Torsello A, Cremers D, Sahillioˇglu Y, et al. SHREC’16: Partial matching of deformable shapes. In: Eurographics Workshop on 3D Object Retrieval, EG 3DOR. Eurographics Association; 2016. p. 61–67.
[10] Litany O, Remez T, Rodola E, Bronstein A, Bronstein M. Deep functional maps: Structured prediction for dense shape correspondence. In: Proceedings of the IEEE international conference on computer vision; 2017. p. 5659–5667.
[11] Neugebauer PJ. Reconstruction of real-world objects via simultaneous registration and robust combination of multiple range images. International journal of shape modeling. 1997;3(01n02):71–90.
[12] Domokos C, Kato Z. Affine puzzle: Realigning deformed object fragments without correspondences. In: European Conference on Computer Vision. Springer; 2010. p. 777–790.
[13] Litany O, Rodol`a E, Bronstein A, Bronstein M, Cremers D. Non-Rigid Puzzles. arXiv preprint arXiv:201113076. 2020;.
9

[14] Peyr ́e G, Cuturi M, et al. Computational optimal transport: With applications to data science. Foundations and Trends® in Machine Learning. 2019;11(5-6):355–607.
[15] Xu H, Luo D, Zha H, Duke LC. Gromov-Wasserstein learning for graph matching and node embedding. In: International conference on machine learning. PMLR; 2019. p. 6932–6941.
[16] Li J, Tang J, Kong L, Liu H, Li J, So AMC, et al. A convergent single-loop algorithm for relaxation of Gromov-Wasserstein in graph data. arXiv preprint arXiv:230306595. 2023;.
[17] Chowdhury S, Needham T. Generalized spectral clustering via Gromov-Wasserstein learning. In: International Conference on Artificial Intelligence and Statistics. PMLR; 2021. p. 712–720.
[18] Grave E, Joulin A, Berthet Q. Unsupervised alignment of embeddings with wasserstein procrustes. In: The 22nd International Conference on Artificial Intelligence and Statistics. PMLR; 2019. p. 1880–1890.
[19] Singer A, Yang R. Alignment of density maps in Wasserstein distance. Biological Imaging. 2024;4:e5.
[20] M ́emoli F. Gromov–Wasserstein distances and the metric approach to object matching. Foundations of computational mathematics. 2011;11:417–487.
[21] Bai Y, Martin RD, Du H, Shahbazi A, Kolouri S. Efficient Solvers for Partial Gromov-Wasserstein. arXiv preprint arXiv:240203664. 2024;.
[22] Chapel L, Alaya MZ, Gasso G. Partial optimal tranport with applications on positive-unlabeled learning. Advances in Neural Information Processing Systems. 2020;33:2903–2913.
[23] S ́ejourn ́e T, Vialard FX, Peyr ́e G. The unbalanced Gromov Wasserstein distance: Conic formulation and relaxation. Advances in Neural Information Processing Systems. 2021;34:8766–8779.
[24] Bauer M, M ́emoli F, Needham T, Nishino M. The Z-Gromov-Wasserstein distance. arXiv preprint arXiv:240808233. 2024;.
[25] Rodol`a E, Cosmo L, Bronstein MM, Torsello A, Cremers D. Partial functional correspondence. In: Computer graphics forum. vol. 36. Wiley Online Library; 2017. p. 222–236.
[26] Cho M, Alahari K, Ponce J. Learning graphs to match. In: Proceedings of the IEEE international conference on computer vision; 2013. p. 25–32.
[27] Zanfir A, Sminchisescu C. Deep learning of graph matching. In: Proceedings of the IEEE conference on computer vision and pattern recognition; 2018. p. 2684–2693.
[28] Yang H, Shi J, Carlone L. Teaser: Fast and certifiable point cloud registration. IEEE Transactions on Robotics. 2020;37(2):314–333.
[29] Huang S, Gojcic Z, Usvyatsov M, Wieser A, Schindler K. Predator: Registration of 3D point clouds with low overlap. In: Proceedings of the IEEE/CVF Conference on computer vision and pattern recognition; 2021. p. 4267–4276.
[30] Chizat L, Peyr ́e G, Schmitzer B, Vialard FX. Unbalanced optimal transport: Dynamic and Kantorovich formulations. Journal of Functional Analysis. 2018;274(11):3090–3123.
[31] Wu Y, Yang J. Multi-part shape matching by simultaneous partial functional correspondence. The Visual Computer. 2023;39(1):393–412.
[32] Solomon J, Peyr ́e G, Kim VG, Sra S. Entropic metric alignment for correspondence problems. ACM Transactions on Graphics (ToG). 2016;35(4):1–13.
[33] Cuturi M. Sinkhorn distances: Lightspeed computation of optimal transport. Advances in neural information processing systems. 2013;26.
[34] Benamou JD, Carlier G, Cuturi M, Nenna L, Peyr ́e G. Iterative Bregman projections for regularized transportation problems. SIAM Journal on Scientific Computing. 2015;37(2):A1111–A1138.
10

[35] Papadakis P. The canonically posed 3D objects dataset. In: Eurographics Workshop on 3D Object Retrieval; 2014. p. 33–36.
[36] Bronstein AM, Bronstein MM, Kimmel R. Numerical geometry of non-rigid shapes. Springer Science & Business Media; 2008.
[37] Kim VG, Lipman Y, Funkhouser T. Blended intrinsic maps. ACM transactions on graphics (TOG). 2011;30(4):1–12.
[38] Cramer P, Bushnell DA, Kornberg RD. Structural basis of transcription: RNA polymerase II at 2.8 Angstrom resolution. science. 2001;292(5523):1863–1876.
[39] Bogachev VI. Measure theory. Springer; 2007.
[40] Villani C. Topics in optimal transportation. vol. 58. American Mathematical Soc.; 2021.
11

Appendix
A Proof of Theorem 9
Lemma 14. Given a distribution of mm-spaces X = (Xi, dXi , μXi , sXi )i∈[kX] and an embedding (X, dX , μX ) with embedding functions (ψXi )i∈[kX], there exist a bijective function πX : S
i Xi → X, such that πX (xi) = ψXi (xi) for all xi ∈ Xi. We call this map a projection.
Proof. Define πX by πX (xi) = ψXi (xi) for all xi ∈ Xi. By (ii) property of Definition 7, we know that the images of ψXi s are distinct, thus πX is injective. Also using (iii) property of Definition 7, we conclude that πX is surjective as well.
Proof of Theorem 9. Assume X1 and X2 (respectively Y1 and Y2) are two distinct embeddings for X (Y) with embedding functions (ψX1,i )i∈[kX ], (ψX2,i )i∈[kX ] ((ψY1,i )i∈[kY ], (ψY2,i )i∈[kY ]). Using Lemma 14, we define the
bijections πX1 , πX2 , πY1 , πY2 . Now let π∗
X : X1 → X2 and π∗
Y : Y1 → Y2 be defined by
π∗
X = πX2 ◦ π−1
X1 , π∗
Y = πY2 ◦ π−1
Y1 .
Now for x, x′ ∈ X1 and y, y′ ∈ Y1 by using the properties of projections in Lemma 14, we want to prove that
Γ∗
p(x, y, x′, y′) = Γ∗
p(π∗
X (x), π∗
Y (y), π∗
X (x′), π∗
Y (y′)).
To do so, we distinguish the following cases:
• CASE 1: there exist i ∈ [kX ] and j ∈ [kY ] such that (x, x′, y, y′) ∈ Im(ψX1,i )2 × Im(ψY1,j )2. By (3), we can write
Γ∗
p(x, y, x′, y′) = |dX1 (x, x′) − dY1 (y, y′)|p = |dXi (π−1
X1 (x), π−1
X1 (x′)) − dYj (π−1
Y1 (y), π−1
Y1 (y′))|p
= |dXi (π∗
X (x), π∗
X (x′)) − dYj (π∗
Y (y), π∗
Y (y′))|p (7)
Also it is straightforward to see that if (x, x′, y, y′) ∈ Im(ψX1,i )2×Im(ψY1,j )2, then (π∗(x), π∗(x′), π∗(y), π∗(y′)) ∈ Im(ψX2,i )2 × Im(ψY2,j )2. By combining this fact with (7) we conclude that
Γ∗
p(x, y, x′, y′) = |dXi (π∗
X (x), π∗
X (x′)) − dYj (π∗
Y (y), π∗
Y (y′))|p = Γ∗
p(π∗
X (x), π∗
Y (y), π∗
X (x′), π∗
Y (y′)).
• CASE 2: otherwise: Without loss of generality, we can assume x ∈ Im(ψX1,i ) and x′ ∈ Im(ψX1,i′ )
with i ̸= i′. Then
x ∈ Im(ψX1,i ) ⇒ π−1
X1 (x) ∈ Xi ⇒ π∗(x) = πX2 ◦ π−1
X1 (x) ∈ Im(ψX2,i ),
x′ ∈ Im(ψX1,i′ ) ⇒ π−1
X1 (x′) ∈ X′
i ⇒ π∗(x′) = πX2 ◦ π−1
X1 (x′) ∈ Im(ψX2,i′ ).
As a result there exists no i ∈ [kX ], such that (π∗(x), π∗(x′)) ∈ Im(ψX2,i ), therefore
Γ∗
p(x, y, x′, y′) = 0 = Γ∗
p(π∗
X (x), π∗
Y (y), π∗
X (x′), π∗
Y (y′)).
We finalize the proof by using (1) and get
GWΓ∗p,p(X1, Y1) = inf
μ∈M(μX1 ,μY1 )
1 2
Z
X1 ×Y1
Z
X1 ×Y1
Γ∗
p(x, y, x′, y′)μ(dx × dy)μ(dx′ × dy′)
1/p
= inf
μ∈M(μX1 ,μY1 )
1 2
Z
X1 ×Y1
Z
X1 ×Y1
Γ∗
p(π∗
X (x), π∗
Y (y), π∗
X (x′), π∗
Y (y′))
μ(dx × dy)μ(dx′ × dy′)
1/p
.
12

To simplify this equation, we perform the change of variables x∗ = π∗
X (x), y∗ = π∗
Y (y), x′∗ = π∗
X (x′) and y′∗ =
π∗
Y (y′) and we denote μ∗(., .) = μ(π∗−1
X (.), π∗−1
Y (.)) the image of μ under the product mapping (π∗
X, π∗
Y ). Therefore, using [39, Theorem 3.6.1], we conclude that
GWΓ∗p,p(X1, Y1) = inf
μ∈M(μX1 ,μY1 )
1 2
Z
X1 ×Y1
Z
X1 ×Y1
Γ∗
p(π∗
X (x), π∗
Y (y), π∗
X (x′), π∗
Y (y′))
μ(dx × dy)μ(dx′ × dy′)
1/p
= inf
μ∈M(μX1 ,μY1 )
1 2
Z
X2 ×Y2
Z
X2 ×Y2
Γ∗
p(x∗, y∗, x′∗, y′∗)μ∗(dx × dy)μ∗(dx′ × dy′)
1/p
.
Using the properties of embedding functions, it’s straightforward to check that
μ∗ ∈ M(μX2 , μY2 ) ⇐⇒ μ ∈ M(μX1 , μY1 ).
Thus, we can change the domain of infimum and complete the proof as follows.
GWΓ∗p,p(X1, Y1) = inf
μ∈M(μX1 ,μY1 )
1 2
Z
X2 ×Y2
Z
X2 ×Y2
Γ∗
p(x∗, y∗, x′∗, y′∗)μ∗(dx × dy)μ∗(dx′ × dy′)
1/p
= inf
μ∗∈M(μX2 ,μY2 )
1 2
Z
X2 ×Y2
Z
X2 ×Y2
Γ∗
p(x∗, y∗, x′∗, y′∗)μ∗(dx × dy)μ∗(dx′ × dy′)
1/p
= GWΓ∗p,p(X2, Y2).
B Proof of Theorem 11
Lemma 15. Given two distribution of mm-spaces X and Y with embbedings X and Y respectively, there exists a coupling μ∗ ∈ M(μX , μY ) such that
J GWp(X, Y) = 1
2 (D(μ∗))1/p ,
where
D(μ∗) =
Z
X ×Y
Z
X ×Y
Γ∗
p(x, y, x′, y′)μ∗(dx × dy)μ∗(dx′ × dy′). (8)
Proof. For this we need to show the sequential compactness of M(μX , μY ) and the continuity of D. The former is provided in [40, p. 49] and the latter follows from [20, Lemma 10.3].
Proof of Theorem 11. Let X and Y be embeddings for X and Y with embedding functions ψX
i and ψY
j
respectively, and D be defined similarly as in (8). For the “if” part, we want to show that if X and Y are partially isomorphic, then there exists a coupling μ∗ ∈ M(μX , μY ) such that D(μ∗) = 0. By definition, there exist mm-spaces Zi,j with isometry functions ψX
i,j : Zi,j → Xi, ψY
i,j : Zi,j → Yj satisfying the conditions specified in Definition 10. For simplicity, given x ∈ X, y ∈ Y , we define
Z(x, y) = {μZi,j (z) | ∃i ∈ [kX ], j ∈ [kY ], z ∈ Zi,j s.t. ψX
i ◦ ψX
i,j (z) = x, ψY
j ◦ ψY
i,j(z) = y}.
Now using this operator define μ∗(x, y) as
μ∗(x, y) =
(P
p∈Z(x,y) p if Z(x, y) ̸= ∅
0 else .
13

Now consider (x1, y1) and (x2, y2) such that μ∗(xi, yi) ̸= 0 for i = 1, 2. Since μ∗(x1, y1) ̸= 0, Z(x1, y1) ̸= ∅ and there exists z1, i1, j1 such that ψX
i1 ◦ ψX
i1,j1 (z1) = x1, ψY
j1 ◦ ψY
i1,j1 (z1) = y1. By the same argument, we similarly define z2, i2, j2. If i1 ̸= i2 or j1 ̸= j2, since the images of ψX
i s are disjoint (due to the properties
of embedding functions in Definition 7), then Γ∗p(x1, y1, x2, y2) = 0. If i1 = i2, and j1 = j2, we have the isometries ψX
i1 , ψX
i1,j1 , ψY
j1 , ψY
i1,j1 , and we can write
dZi1,j1 (z1, z2) = dXi1 (ψX
i1,j1 (z1), ψX
i1,j1 (z2))
= dX (ψX
i1 ◦ ψX
i1,j1 (z1), ψX
i1 ◦ ψX
i1,j1 (z2))
= dX (x1, x2),
dZi1,j1 (z1, z2) = dYj1 (ψY
i1,j1 (z1), ψY
i1,j1 (z2))
= dY (ψY
j1 ◦ ψY
i1,j1 (z1), ψY
j1 ◦ ψY
i1,j1 (z2))
= dY (y1, y2).
This implies dX (x1, x2) = dY (y1, y2), so we showed that Γ∗p(x1, y1, x2, y2) = 0 and as a result μ∗ satisfies
D(μ∗) = 0. For the other direction assume J GWp(X, Y) = 0. Using Lemma 15, there exists μ∗ such that D(μ∗) = 0. Now for each i ∈ [kX ] and j ∈ [kY ] define Zi,j as the set of couplings
Zi,j = {(x, y)|x ∈ Xi, y ∈ Yj, μ∗ ψX
i (x), ψY
j (y) ̸= 0},
endowed with a measure where we assign μ∗ ψX
i (x), ψY
j (y) to (x, y) and normalize it. Now for (x1, y1), (x2, y2) ∈ Zi,j, since D(μ∗) = 0 and ψX
i , ψY
j are isometries, we have dXi (x1, x2) = dYj (y1, y2). Thus Zi,j can be equipped with a metric function (either dXi or dYj ) and forms a mm-space, such that
Zi,j → Xi
ψX
i,j : (x, y) 7→ x
and
Zi,j → Yj
ψY
i,j : (x, y) 7→ y
are isometries. Using the assumption that D(μ∗) = 0 and the isomorphism properties of ψX
i and ψY
j , we can further verify that dXi and dYJ satisfy the conditions for partial isomorphism, and thus Zi,j provides the desired partial isomorphism between X, Y.
C Proof of Theorem 12
Proof of Theorem 12. Let X be an embedding of X with embedding functions ψi : Xi → X, and {xj}j∈[n] be n points in S
i∈[kX ] X n
i . Let Xn = {ψi(xj)|∀j ∈ [n], xj ∈ Xi} endowed with the uniform empirical measure on it. As ψis hold the properties of embedding functions, Xn is an embedding for Xn. Therefore using (2) we have J GWp(X, Xn) = GWΓ∗p,p(X, Xn). (9)
By definition of Γ∗, one can see that Γ∗(x, y, x′, y′) ≤ Γ(x, y, x′, y′) for all x, y, x′, y′. Hence,
GWΓ∗p,p(X, Xn) ≤ GWΓp,p(X, Xn). (10)
A similar statement for GWΓp,p ([20], Theorem 5.1e), shows that GWΓp,p(X, Xn) almost surely converges to zero as n → ∞. The combination of this Theorem with (9), (10), shows that J GWp(X, Xn) almost surely converges to zero as n → ∞.
14

D Proof of Proposition 13
Proof of Proposition 13. Using the definition of entropic Joint Gromov-Wasserstein objective (J GWε(X, Y)), we can expand
X
i,j,k,l
|dX
ij − dY
kl |2 I X
ij I Y
klμikμjl =
X
i,j,k,l
dX
ij
2IX
ij I Y
klμi,kμj,l − 2
X
i,j,k,l
dX
i,j dY
k,lI X
ij I Y
kl μik μj l
+
X
i,j,k,l
dY
k,l
2IX
ij I Y
kl μi,k μj,l
=
X
i,k
μik
X
j,l
dX
ij
2 μj l I Y
lk − 2
X
i,k
μik
X
j,l
dX
ij μjldY
lk
+
X
i,k
μik
X
j,l
IX
ij μjldY
lk
2 (11)
=
X
i,k
μik[dX∧2μIY ]ik − 2
X
i,k
μik[dX μdY ]ik
+
X
i,k
μik[IX μdY ∧2]ik
= ⟨μ, dX∧2μIY ⟩ − 2⟨μ, dX μdY ⟩ + ⟨μ, IX μdY ∧2⟩
= ⟨μ, dX∧2μIY − 2dX μdY + IX μdY ∧2⟩, (12)
where ⟨., .⟩ denotes the inner product of two given matrices and the superscript ∧2 denotes the elementwise square of a matrix. We used the fact that dX ⊗ IX = dX , and dY ⊗ IY = dY and dX , IX , dY , IY are all symmetric in line (11). Combining (12) with the definition of J GWε(X, Y), we then get
J GWε(X, Y) = min
μ∈M(μX ,μY )
1
2 (⟨μ, Λ(μ)⟩ + εH(μ))1/2 ,
where Λ is defined as
Λ(μ) = dX∧2μIY − 2dX μdY + IX μdY ∧2.
15

Figures
ab
Figure 1: a. A simple example of a discrete mm-space with values of dx and μx provided. b. An example of a discrete distribution of mm-spaces containing two clusters with values of dx, μx, sx provided. Each point’s size corresponds to the value of μ at that point.
16

Figure 2: Performance comparison of GW variants for partial matching. We evaluate mPGW[22], PGW[21], UGW[14], and our proposed JGW approach. a. Source distribution (blue) comprising 200 points sampled from an Archimedean spiral, and target distribution containing 200 points from the same spiral plus 100 noise points from a standard normal distribution (red). b. Couplings computed by each method, demonstrating JGW’s superior performance in handling partial matches.
17

Figure 3: Comparison of the quality of the couplings generated by UGW and JGW on the same example as Figure 2. a. Couplings computed by each method, with visualization of how a single source point (the leftmost point in the source) is matched across the target distribution (purple edges). Both UGW and JGW distribute mass across multiple target points due to regularization, with JGW achieving lower variance. b. Violin plot showing the variance of coupled target points for each source point, confir-
ming JGW’s better mass concentration.
18

source target result
a
source target result
b
source
c target result Correspondence quality
Geodesic Error
Density
Figure 4: Performance of JGW in matching shapes involving 2D and 3D data. a. The source and target distributions created using different typesets and combinations of letters “A”, “B”, and “C”. Performance of JGW in matching the source space and target, each color shows the clusters of the coupled most points to a point of the target distribution. b. The source and target space created from 3D meshes of human body for CAPOD dataset [35]. The results of the 3D experiments is demonstrated in the same-
 way as before. This diagram shows the perfect performance of this method in matching the hands and the body, while mismatching some parts of the legs. c. The source and target space created from an example of SHREC’16 dataset [9]. The results of the 3D experiments is demonstrated in the same way as before. This diagram shows the near-perfect performance of this method. To quantitatively evaluate the mapping quality, we employed a standard measure introduced in [37]: the geodesic distance between -
ground truth and computed corresponding points, normalized by the square root of the full shape’s area, and illustrated a cumulative distribution function (CDF) of this measure across all mesh vertices.
19

a original one-by-one reconstruction
JGW reconstruction
JGW one-by-one UGW
chain A
b chain B chain C
Figure 5: Performance of JGW on matching biomolecular complexes compared to [4]. a. We used the atomic structure of PDB:1I3Q [38] and simplified it into 3 chains. Then applied JGW and sequential partial matching with UGW [4]to reconstruct it by aligning its chains into the whole map. b. The results of alignment of each chain using UGW and one-by-one alignment of chains and JGW (ours). In each diagram, the blue structure shows the ground truth while the red one represents the aligned one.
20

Tables
metric Chain A Chain B Chain C JGW UGW JGW UGW JGW UGW Rotational error 5.1◦ 30.4◦ 4.2◦ 57.2◦ 8.9◦ 161.9◦ RMSD 3.018 25.974 2.441 37.543 8.275 63.858
Table 1: Performance of JGW on matching biomolecular complexes compared to [4]. a. We used the atomic structure of PDB:1I3Q [38] and simplified it into 3 chains. Then applied JGW and EMPOT to reconstruct it by aligning its chains into the whole map. We used 3 standard measurements to analyze the results of this experiment, and for each chain, highlighted the best result regarding each metric in bold. For all chains, significant improvement of all metrics is a consequence of a near-perfect alignmen-
t by JGW, as is illustrated in Figure 5.
21

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:08.050Z
- **Text Length:** 48745 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 21 of 21
