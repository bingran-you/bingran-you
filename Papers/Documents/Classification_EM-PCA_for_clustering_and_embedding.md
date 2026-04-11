# PDF Document: Tighidet et al. - 2025 - Classification EM-PCA for clustering and embedding.pdf

**File Path:** Tighidet et al. - 2025 - Classification EM-PCA for clustering and embedding.pdf

**Processed Date:** 2026-02-10T18:15:07.751Z

**File Size:** 2207.15 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3402

**Title:** Classification EM-PCA for clustering and embedding

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Classification EM-PCA for clustering and
embedding
Zineddine Tighidet‡¶∗, Lazhar Labiod§, Mohamed Nadif§ ‡Sorbonne Universite ́, CNRS, ISIR, Paris, France ¶BNP Paribas, Paris, France §Centre Borelli UMR 9010, Universite ́ Paris Cite ́, France firstname.lastname@{sorbonne-universite.fr, u-paris.fr}
Abstract—The mixture model is undoubtedly one of the greatest contributions to clustering. For continuous data, Gaussian models are often used and the Expectation-Maximization (EM) algorithm is particularly suitable for estimating parameters from which clustering is inferred. If these models are particularly popular in various domains including image clustering, they however suffer from the dimensionality and also from the slowness of convergence of the EM algorithm. However, the Classification EM-
 (CEM) algorithm, a classifying version, offers a fast convergence solution while dimensionality reduction still remains a challenge. Thus we propose in this paper an algorithm combining simultaneously and non-sequentially the two tasks Data embedding and Clustering– relying on Principal Component Analysis (PCA) and CEM. We demonstrate the interest of such approach in terms of clustering and data embedding. We also establish different connections with other clustering approaches.1
Index Terms—Clustering, Gaussian Mixture models, CEM algorithm, PCA, data embedding
I. INTRODUCTION
N
OWADAYS, many real-world data sets are highdimensional. In order to reduce the dimensionality a manifold learning technique can be used to map a set of high-dimensional data into a low-dimensional space, while preserving the intrinsic structure of the data. Principal component analysis (PCA) [19] is the most popular linear approach. In nonlinear cases, however, there are other more efficient approaches to be found. A number of techniques have been proposed, including Multi-Dimensional Scaling (MDS-
) [26], Isometric Feature Mapping (ISOMAP) [1], Locally Linear Embedding (LLE) [30], Locally Preserving Projections (LPP) [13], and Stochastic Neighbor Embedding (SNE) [15]; we refer the interested reader to [10]. Unfortunately, these nonlinear techniques tend to be extremely sensitive to noise, sample size, the choice of neighborhood, and other parameters; see for instance [12, 35, 10]. In the context of deep learning, where data embedding is referred to as data representation, an autoencoder can-
 learn a representation (or encoding) for a set of data. If linear activations are used, or if there is only a single sigmoid hidden layer, then the optimal solution for an autoencoder is strongly related to Principal Component Analysis (PCA) [16].
* Work done during time at Centre Borelli, Universit ́e Paris Cit ́e. 1This work has been accepted for publication in IEEE Conference on Big Data et the Special Session on Machine Learning. The final published version will be available via IEEE Xplore.
In data science, data embedding (DE) is commonly used for the purposes of visualizing, but it can also play a significant role in clustering, where the aim is to divide a dataset into homogeneous clusters. Working with a low-dimensional space can be useful when partitioning data, and a number of approaches are reported in the literature with applications in various fields.
Fig. 1. PCA projection of the Chang dataset onto the plan spawned by the first and second principal components (left) and the plan spawned by the first and fifteenth principal components (right).
A popular method to achieve this is the use of principal component analysis (PCA), which reduces the dimensionality of data while retaining the most relevant information, followed by any clustering algorithm. Although such an approach has been successfully applied sequentially in many applications [14], they present some drawbacks. This is because the first components do not necessarily capture the clustering structure. Chang [6] discussed a simulated example from a 15-dimensional mixture model in-
to 2 clusters to show the failure of principal components as a method for reducing the dimension of the data before clustering. With the scheme described in [6] the first 8 variables can be considered roughly as a block of variables with the same correlations, while the rest of the variables form another block. Thereby, from the simulated continuous data of size 1000 × 15 into 2 clusters we observe that the plan spawned by the two-first components, obtained by PCA, does not reveal the two classes -
Figure (1, left). However, the plan spawned by the last and the first components perfectly discerns the two classes as shown in Figure (1, right). Therefore the idea of taking into account only the first components to perform a clustering is not always effective. In our proposal, we have chosen to rely on the mixture model approach for its flexibility. Thereby, we present an ap
arXiv:2511.18992v1 [stat.ML] 24 Nov 2025

proach that simultaneously uses the PCA and the ExpectationMaximization-Type algorithm (EM) [8, 23] that inserts a classification step, referred to as Classification EM (CEM [5]). The derived algorithm called CEM-PCA we propose can be viewed as a regularized dimension reduction method. This regulation will be beneficial to the reduction of the dimension while taking into account the clustering structure to be discovered. In this way, it simultaneously combines the two data tasks –data embedding a-
nd clustering–. As reported in Figure 2, we observe the interest of such approach on simulated data. The sub-figure on the left illustrates the obtained clustering by K-means [20] applied on the 15 principal components arising from PCA. The sub-figure on the right represents the clusters obtained by CEM-PCA that generates a data embedding B. CEM-PCA successfully separates the two classes and results in perfect accuracy (Accuracy=100%), as opposed to PCA followed by K-means (Accuracy=78%).
Fig. 2. Comparison between the clustering of K-means (left) and CEM-PCA (right) on Chang data using respectively the components arising from PCA for K-means and the data embedding B obtained by CEM-PCA. Black points represent 22% misclassified objects.
The paper is structured as follows: Section II describes related work and methods to which we compare our approach, Section III presents CEM-PCA and all the algorithms that are used such as EM and CEM algorithms. Section IV covers the optimization aspect of CEM-PCA as well as the algorithm itself and the complexity analysis. In Section V we present the experimental evaluation of our approach, including the results and comparisons with other state-of-the-art methods. In Section VI, we establish con-
nections between CEM-PCA and other state-of-the-art methods and finally, we conclude and discuss the potential applications and future directions of the proposed approach.
II. RELATED WORK AND MOTIVATION
In this section, we describe several existing methods that are related to our proposed CEM-PCA approach:
• Reduced K-means [21, 39] combines PCA for dimension reduction with K-means for clustering. • EM-GMM [2, 29] estimates the parameters of a Gaussian mixture models. The clusters are inferred at the convergence using the maximum a posterior principle. Often wrongly referenced by GMM when it is the EM algorithm [8] estimating the parameters of a Gaussian mixture model. • PCA-GMM [14] proposes a reduction of the dimensionality of the data in each component of the model by principal component analysis-
. To learn the low-dimensional
parameters of the mixture model they use EM algorithm whose M-step requires the solution of constrained optimization problems. • Deep-K-means [11] is a jointly clustering with K-Means and learning representations by considering the K-Means clustering loss as the limit of a differentiable function. • Deep-GMM [36] provides a generalization of classical Gaussian mixtures to multiple layers. Each layer contains a set of latent variables that follow a mixture of Gaussian distributions. To avoid over p-
arameterized solutions, dimension reduction is applied at each layer using factorial models.
III. OUR PROPOSAL
Before proposing an optimization of an objective function taking into account the simultaneity of the two tasks –data embedding and clustering–, we briefly review the Gaussian mixture model and the EM and CEM algorithms traditionally used for such approach.
A. Gaussian Mixture Model
The mixture model is undoubtedly one of the greatest contributions to clustering [24]. With a finite Gaussian Mixture Model (GMM) [29], the data X = (x1, . . . , xn) are considered as constituting a sample of n independent instances of a random variable X in Rd. The probability density function can be expressed as follows:
f (xi; Θ) =
g
X
k=1
πkφk(xi|μk, Σk), ∀i ∈ {1, . . . , n}
where,
Θ = (π1, . . . , πg, μ1, . . . , μg, Σ1, . . . , Σg). The πk’s are
the weights or mixing probabilities (such as πk > 0,
Pg
k=1 πk = 1) and g is the number of components in the mixture. Thus, the classes are ellipsoidal, centered on the mean vector μk, and with other geometric characteristics, such as volume, shape and orientation, determined by the spectral decomposition of covariance matrix Σk [2, 5]. To estimate Θ, we rely on the log-likelihood maximization given by:
L(X; Θ) =
n
X
i=1
log
g
X
k=1
πkφk(xi|μk, Σk)
!
.
Maximization is usually performed by expectation maximization (EM) [8]; an iterative algorithm based on maximizing the conditional expectation of the log-likelihood of the complete data given Θ′:
Q(Θ|Θ′) =
X
i
X
k
z ̃ik log(πkφk(xi|μk, Σk))
where z ̃ik ∝ πkφl(xi|μk, Σk) are the posterior probabilities. More specifically, the algorithm is decomposed into two steps (steps E-M) and the unknown parameters of Θ are

updated thanks to the probabilities computed previously. For each component k, we have:
πk =
P
i z ̃ik
n , μk =
P
i z ̃ikxi
P
i z ̃ik
,
and Σk =
P
i z ̃ik(xi − μk)⊤(xi − μk)
P
i sik
At convergence, we can deduce a hard clustering using the principle of the maximum a posterior by
zik ← arg max
k
z ̃ik, ∀i ∈ {1, . . . , n}. (1)
Algorithm 1 EM-GMM
Input: X ← (x1, . . . , xn), g the number of components; Initialization: initialize Θ′ from a partition obtained with K -means; repeat
E-step: compute Q(Θ|Θ′); M-step: update πk, μk and Σk according to (III-A); until convergence return Σk’s, μk’s, πk’s and Z using 1
B. Classification EM (CEM) Algorithm
In order to use the model in a clustering context, we want to jointly infer Z and learn the model parameters. To this end, we rely on the Classification Expectation-Maximization algorithm [4], referred to as CEM. It consists of inserting a C-step between E-step and M-step. This leads for maximizing the complete-data log-likelihood given by
L(X, Z; Θ) =
n
X
i=1
g
X
k=1
zik log πkφk(xi|μk, Σk).
With CEM this maximization requires fewer iterations and is a simplified version of EM capable of handling large data sets.
Algorithm 2 CEM
Input: X ← (x1, . . . , xn), g the number of components; Initialization: initialize Θ′ from a partition obtained with K -means; repeat
E-step: compute Q(Θ|Θ′);
C-step: zik ← arg maxk z ̃ik, ∀i ∈ {1, . . . , n};
M-step: update πk, μk and Σk according to (III-A) where z ̃ik ← zik;
until convergence return Z, Σk’s, μk’s and πk’s.
C. Objective function
The data are represented by a matrix X = (xij) of size n × d where the xi = (xi1, . . . , xid)⊤ are assumed to be sampled from a given parametric distribution of density φ. The value of each entry in the data matrix depends on the latent row of model parameters. The partition of the set of rows into g classes is represented by the latent classification matrix Z = (zik), with Pg
k=1 zik = 1, where zik = 1 if row i belongs to the kth class of rows and zik = 0 otherwise. We also write zi ∈ {1, . . . , g} as the index of the class of i. We consider the problem of dimension reduction and clustering simultaneously. The idea is to combine the PCA and the CEM via a regularization. In this way, we propose the following objective function to be minimized:
F (X; Q, Z, Σ, S) = ||X − BQ⊤||2 + δ||B − M||2
−
n
X
i=1
g
X
k=1
zik log(πkφ(mi, (sk, Σk)) (2)
with:
• X ∈ Rn×d • Q = X⊤B ∈ Rd×p
• B ∈ Rn×p is an orthonormal matrix in columns • sk = (sk1, . . . , skp) the centroid of the kth class. Then the centroid matrix S ∈ Rg×p • Z ∈ {0, 1}n×g clustering matrix • φ(mi, (sk, Σk)) is a distribution matrix in M ∈ Rn×p • The πk the apriori probabilities of the mixture
The diagram in Figure 3 summarizes in a simplified way the proposed method. The first term of the objective function corresponds to PCA for data embedding while the third term concerns CEM clustering task on the PCA embedding. Note that both tasks – PCA embedding and CEM clustering – are performed simultaneously and supported by the second term ∥B − M∥2; this is the key to achieve good embedding while taking the clustering structure into account.
D. Graph Laplacian Regularization
Although PCA is effective at providing an embedding for data on a linear manifold, it may not be suitable for nonlinear manifold applications. To address this issue, the graph Laplacian-based embedding method is often utilized. To implement this method, we begin by constructing a k-nearest neighbor data graph using the n data samples {x1, . . . , xn} as vertices. The data weight matrix W is defined as follows,
Wij =
(
e−||xi−xj||2 , if xj ∈ N (xi); i ̸= j
0 otherwise,
where N (xi) represents the set of k-nearest neighbors of xi. Laplacian embedding [3], [40] preserves the local geometrical relationships and maximizes the smoothness with respect to the intrinsic manifold of the data set in the low embedding space. We also normalize the resulting matrix W by row. In the subsequent sections, we consider that the matrix X is the outcome of the matrix multiplication between the input

...
PCA
CEM
1
. . .
1 ...
1
...
1
...
1 ...
1 ...
1 ...
1 ...
1
Objective Function
Clusters
1 ...
...
...
1
1
Fig. 3. Diagram illustrating the steps of the proposed algorithm (CEM-PCA).
data and the matrix W, denoted as X ← WX. We can repeat the operation m times in order to accentuate the smoothing with respect to the manifold of X in the low dimensional space: X ← WmX.
IV. OPTIMIZATION AND ALGORITHM
The estimation of the parameters is performed in an alternative way, allowing a mutual reinforcement between the dimensionality reduction task and the clustering task performed on a reduced size matrix.
A. Optimization
To solve (2), we use an alternated iterative method. 1) Computation of Q : First, fixing B, by setting the derivative of the first term in (2) with respect to Q as 0, we obtain:
Q = X⊤B (3)
2) Computation of B: Second, given Q and M, we can rewrite (2) as:
min
B⊤ B=I
X − BQ⊤ 2 + δ∥B − M∥2. (4)
To solve (4) we rely on the following proposition.
Proposition 1: Let Xn×d and Qd×k and Mn×k be three matrices. Consider the constrained optimization problem
B∗ = arg mBin X − BQ⊤ 2 + δ∥B − M∥2 s.t B⊤B = I
= arg mBax Tr((XQ+δM)B⊤) s.t B⊤B = I (5)
The solution of Eq. (5) comes from the singular value decomposition (SVD) of (XQ+δM). Let U DV ⊤ be the SVD for (XQ+δM), then B∗ = U V ⊤.
Proof 1: We expand the matrix norm
X − BQ⊤ 2 + δ∥B − M∥2.
We have
T r(X⊤X) − 2T r(X⊤BQ⊤) + T r(QB⊤BQ⊤)
+ δ T r(B⊤B) + T r(M⊤M) − 2T r(B⊤M) .
Since B⊤B = I, the original minimization problem (5) is equivalent to maximize the term
max
B⊤ B=I
T r((XQ + δM)B⊤). (6)
With the SVD of (XQ + δM) = U DV ⊤, this middle term becomes
T r((XQ + δM)B⊤) = T r(U DV ⊤B⊤)
= T r(U D ˆB⊤) where ˆB = BV
= T r(Bˆ ⊤U D). (7)
Denoting
- U = [u1| . . . |uk] ∈ Rd×k, - D = Diag(d1, . . . , dk) ∈ Rk×k
+,
- ˆB = [ˆb1| . . . |ˆbk] ∈ Rd×k.
Applying the Cauchy-Shwartz inequality and since U ⊤U = I, ˆB⊤Bˆ = I due to V V ⊤ = I, we have
T r(Bˆ ⊤U D) ≤
X
i
di||ui|| × ||ˆbi|| =
X
i
di = T r(D).
Then the upper bound is clearly attained by setting Bˆ = U . This leads to ˆB = BV = U and BV V ⊤ = U V ⊤. Hence we obtain B∗ = U V ⊤.
3) Computation of M : Fixing Q, Z, Σ, S and Q, the objective function with respect to M is
δ||B − M||2 −
n
X
i=1
g
X
k=1
zik log(πkφ(mi, (sk, Σk)) (8)
We can now derive the updated equation of mi in closed form as follow:
mi =
g
X
k=1
zik Σ−1
k + δI
−1
δbi +
g
X
k=1
zik Σ−1
k sk . (9)
4) Computation of sk, Σk and πk : The updates of these parameters are the same as those described in the CEM algorithm.

B. Algorithm
In summary, the steps of the proposed CEM-PCA algorithm can be deduced in Algorithm3. The code of the CEM-PCA algorithm is available on GitHub for reproducibility 2
Algorithm 3 CEM-PCA
Input: X, g number of classes, p the number of latent dimensions, δ regularization parameter, k the number of neighbors to consider in the Laplacian graph (as described in section III-D). Initialization: Compute B and Q using PCA, Z, Σk’s and S, with a CEM applied on B repeat
Step 1. Compute M using 9. Step 2. Update Z, S, Σk’s and the πk’s using CEM. Step 3. Compute B = UV⊤ where
U∆V⊤ = svd(XQ + δM),
Step 4. Compute Q = X⊤B until convergence return Z, B, M, Σk’s and πk’s.
C. Complexity Analysis
In this section we analyze the complexity of each step for each iteration of the CEM-PCA algorithm. Step 1. and Step 2. estimate Q, Z, M, S, and Σ which can be done using the EM algorithm based on a GMM. We can use a more efficient version of EM algorithm for GMM called Incremental Gaussian Mixture Network (IGMN) [28] that reduces the complexity to O(nkp2). Step 3. and Step 4. estimate B and Q which can be done using a PCA that is based on Singular Value Decomposition (SVD), the complexity is O(d2-
n + d3). In fact, the complexity of covariance matrix computation is O(d2n). Its eigenvalue decomposition is O(d3) which gives O(d2n + d3). Thereby, the complexity per iteration for the CEM-PCA algorithm is O(nkp2 + d2n + d3). Let t be the number of iterations necessary for convergence, the complexity of CEM-PCA is O(t(nkp2 + d2n + d3)). The use of GPUs can significantly speed up the computation time, due to the multiple matrix operations (e.g. covariance matrix computation).
V. EXPERIMENTS
A. Datasets
To evaluate the performance of the CEM-PCA algorithm, experiments are carried out on different types of labeled data sets described in Table I.
a) Synthetic Datasets: Atom, Chainlink, Hepta, Lsun3D, and Tetra. b) Image Datasets: COIL20, USPS, Yale, and ORL. c) Biomedical Datasets: Lung, Yeast, and Breast
2https://github.com/Zineddine-Tighidet/CEM-PCA
d) Text Datasets: BBC, Classic3, and Classic4. We used the cased GloVe model [27], with a vocabulary size of 2.2M and 840 billion tokens represented in 300 dimensions. To obtain the embedding of each document we computed the average of the word embeddings that compose each document. The GloVe model can be described as a log-bilinear approach that employs a weighted least-squares objective. The fundamental idea behind the model is based on the observation that word-word co-occurrence probabilities -
ratios can be utilized to capture meaning. TABLE I CHARACTERISTICS OF SYNTHETIC DATA, IMAGE, BIOMEDICAL AND TEXTUAL DATASETS
Set Data Type #rows #columns #classes
FCPS
Atom Numerical 800 3 2 Chainlink Numerical 1000 3 2 Hepta Numerical 212 3 7 Lsun3D Numerical 404 3 4 Tetra Numerical 400 3 4
Images
COIL20 Numerical 1440 1440 20 USPS Numerical 9298 256 10 Yale Numerical 165 1024 15 ORL Numerical 400 1024 40
Biomedical
Lung Microarray 203 12600 5 Yeast Microarray 1484 8 10 Breast Microarray 106 9 6
Text
BBC Text 2225 300 5 Classic3 Text 3891 300 3 Classic4 Text 7095 300 4
B. Performance Metrics
To measure the clustering performance of the proposed method, we used the commonly adopted metrics, normalized mutual information (NMI) [32], Adjusted Rand Index (ARI) [31], and Accuracy. The clustering accuracy noted (Acc) discovers the oneto-one relationship between two partitions and measures the extent to which each cluster contains data points from the corresponding class. It is defined by 1
n
Pn
i=1 δ(Ci, map(Pi))
where n is the total number of samples, Pi is the ith obtained cluster and Ci is the true ith class provided by the data set. δ(x, y) is the delta function that equals one if x = y and equals zero otherwise, and map(Pi) is the permutation mapping function that maps the obtained label Pi to the equivalent label from the data set. The best mapping can be found by using the Kuhn-Munkres algorithm [18]. However, the accuracy measure is not reliable when the classes are dramatically unbalanced. In this-
 case, we prefer other measures such as the NMI and ARI metrics. The NMI is estimated by:
NMI =
P
k,l
nkl
n log nnkl
nk nˆ l
q
(
P
k nk log nk
n )(P
l ˆnl log nˆl
n)
where nk represents the number of data contained in the class Ck(1 ≤ k ≤ g), ˆnl is the number of data belonging to the class Pl(1 ≤ l ≤ g), and nkl represents the number of data that are at the intersection between the class Ck and the class Pl. The ARI metric is a measure of the similarity between two partitions. From a mathematical point of view, the ARI is

First component
Second component
K-means-PCA-2 (Lsun3D)
K-means-PCA-2 (Chainlink)
K-means-PCA-2 (Hepta)
K-means-PCA-2 (Atom)
Fig. 4. Comparison between the clustering of K-means-PCA-2 and CEM-PCA, and the representation of the data embedding B – the methods where applied on FCPS datasets and the plots where obtained using UMAP (black points represent misclassified objects). K-means-PCA-2 results from applying K-means on the two first components of PCA, CEM-PCA is our proposed method, and B is the data embedding obtained by CEM-PCA (see algorithm 3.) This figure highlights the advantage of applying dimension reduction an-
d clustering simultaneously (CEM-PCA) rather than sequentially (K-means-PCA-2). The embedding space of CEM-PCA (represented by B in the figure) perfectly captures the separation of the clusters, making it easy for the CEM algorithm to perform clustering.
related to the precision. The adjusted form of the Rand Index is as follows:
ARI =
P
k,l
nkl
2−
h P
k
nk 2
P
l
nˆ l 2
in 2
1 2
h P
k
nk
2 +P
l
nˆ l 2
i
−
h P
k
nk 2
P
l
nˆ l 2
in 2
For all the measures (Acc, NMI, and ARI), a value close to 1 means a good clustering.
C. Parameters Setting
1) Number of iterations and initializations: The CEM-PCA algorithm is initialized randomly. Based on 20 initializations, the best trial that minimizes (2) is retained. For convergence, the algorithm requires less than 20 iterations.
2) Number of Dimensions p: We trained our model on different numbers of dimensions to consider from the PCA. In our experiments, p = 10 appears to be a good choice.
3) Regularization parameter δ: The parameter δ has a significant impact on the obtained results. As indicated in the objective function (2), the larger δ is, the more importance is given to classification (i.e. minimizing the intra-class inertia). On the contrary, if we take a smaller δ we will give more importance to the dimension reduction (i.e. minimize the distance between the input data and the principal components). We performed CEM-PCA on different values of δ ranging from 10−6 to 1. In our-
 experiments a chosen δ between 10−6 and 10−5 seems to give the best performance overall. In other words, a slight regularization is enough to obtain good results.
D. Comparisons and evaluations
1) Clustering: We used a Gaussian kernel to build the Laplacian matrix W which resulted in perfect results. This enhances even more the smoothness with respect to the intrinsic manifold of the data set in the low embedding
space while preserving the local geometrical relationships. The results obtained on synthetic data (FCPS) are reported in Table II and illustrated in Figure 4. In terms of Acc, NMI and ARI, we notice that the performance of the proposed method (CEM-PCA) is significantly better than the other reference methods, K-means, K-means-PCA-2 which denotes K-means applied on the two first components of PCA while K-means-PCA-10 is applied on the 10 first components when d > 10, Reduced-Kmeans, Deep-K-means, -
EM-GMM, PCA-GMM, Deep-GMM.
We first observe that performing the two steps in a sequential manner can lead to unexpected clustering as illustrated by K-means-PCA-2 and K-means-PCA-10. In contrast, CEM-PCA that performs both steps simultaneously, creates a mutual reinforcement between dimension reduction and clustering. This performance is confirmed on Images, Biomedical, and Textual datasets (Table II). Finally, we notice that deep-GMM and Deep-Kmeans with a high-cost computing and the PCA-GMM method which proceeds by reduct-
ion of the dimensionality by cluster appear much less effective than CEM-PCA while Reduced K-means and EM-GMM can be sometimes competitive.
The results obtained with different values of NMI are summarized by Critical Difference (CD) diagrams in Figure 5. The aim of CD diagrams [9] is to visualize the performance ranks of each approach over the different datasets. If we take the example of ρ = 10%, the CD diagram summarizes the scores given in Table II. It depicts the average rank of each method and the bold line corresponds to the critical difference, based on the post-hoc Nemenyi test [25]. We observe the interest of CEM-PCA which cl-
early outeperforms other methods including deep versions relying on GMM or not.

TABLE II CLUSTERING PERFORMANCE (NMI, ARI, AND ACC – ACCURACY) ON THE FCPS, Images, BioMedical, AND Text DATA SETS. THE BEST RESULTS ARE IN BOLD AND THE SECOND BEST RESULTS ARE UNDERLINED AND ”-” CORRESPONDS TO THE CASE WHERE d < 10.
Dataset Metric
K-means
Kmeans-PCA-2
Kmeans-PCA-10
Reduced-Kmeans
Deep-k-means
EM-GMM
PCA-GMM
Deep-GMM
CEM-PCA
Atom
NMI ARI Acc
0.29 0.18 0.71
0.29 0.18 0.71

0.56 0.17 0.58
0.33 0.23 0.40
0.95 0.98 0.91
0.77 0.74 0.85
0.23 0.15 0.37
1.0 1.0 1.0
Chainlink
NMI ARI Acc
0.06 0.10 0.50
0.01 0.01 0.52

0.06 0.10 0.09
0.07 0.10 0.12
0.84 0.91 0.95
0.31 0.28 0.41
0.34 0.40 0.55
0.96 0.98 0.99
Hepta
NMI ARI Acc
1.0 1.0 1.0
1.0 1.0 1.0

1.0 1.0 1.0
0.90 0.88 0.92
1.0 1.0 1.0
0.90 0.78 0.82
0.92 0.90 0.95
1.0 1.0 1.0
Lsun3D
NMI ARI Acc
0.73 0.60 0.73
0.74 0.61 0.74

0.65 0.59 0.71
0.84 0.86 0.89
1.0 1.0 0.97
0.74 0.61 0.71
0.65 0.60 0.73
0.98 0.99 0.98
Tetra
NMI ARI Acc
1.0 1.0 1.0
0.75 0.73 0.88

1.0 1.0 1.0
0.72 0.69 0.79
1.0 1.0 1.0
0.64 0.54 0.61
0.72 0.73 0.84
1.0 1.0 1.0
COIL20
NMI ARI Acc
0.72 0.55 0.60
0.63 0.40 0.52
0.77 0.57 0.65
0.73 0.63 0.68
0.49 0.27 0.51
0.60 0.34 0.61
0.36 0.13 0.23
0.62 0.33 0.67
0.75 0.58 0.82
USPS
NMI ARI Acc
0.57 0.47 0.58
0.37 0.28 0.39
0.54 0.45 0.58
0.54 0.47 0.50
0.40 0.32 0.51
0.31 0.15 0.47
0.39 0.28 0.43
0.42 0.29 0.49
0.62 0.50 0.58
Yale
NMI ARI Acc
0.60 0.52 0.55
0.45 0.18 0.37
0.64 0.41 0.53
0.52 0.26 0.35
0.48 0.19 0.53
0.65 0.43 0.70
0.12 0.01 0.33
0.42 0.29 0.55
0.66 0.53 0.71
ORL
NMI ARI Acc
0.71 0.31 0.57
0.57 0.16 0.58
0.75 0.40 0.53
0.73 0.39 0.75
0.61 0.20 0.42
0.82 0.54 0.79
0.23 0.21 0.32
0.55 0.13 0.47
0.75 0.42 0.82
Lung
NMI ARI Acc
0.57 0.38 0.43
0.28 0.14 0.49
0.31 0.15 0.50
0.63 0.46 0.75
0.18 0.03 0.54
0.23 0.12 0.22
0.45 0.39 0.51
0.43 0.18 0.48
0.64 0.71 0.76
Yeast
NMI ARI Acc
0.25 0.12 0.21
0.20 0.09 0.33

0.26 0.13 0.19
0.07 0.02 0.10
0.24 0.14 0.41
0.13 0.08 0.12
0.11 0.10 0.21
0.27 0.16 0.24
Breast
NMI ARI Acc
0.33 0.18 0.33
0.69 0.80 0.94

0.70 0.81 0.95
0.60 0.69 0.72
0.65 0.72 0.70
0.18 0.13 0.33
0.66 0.78 0.81
0.71 0.81 0.96
BBC
NMI ARI Acc
0.81 0.82 0.92
0.63 0.61 0.81
0.81 0.83 0.92
0.78 0.77 0.80
0.52 0.44 0.51
0.52 0.44 0.58
0.60 0.59 0.62
0.78 0.78 0.84
0.83 0.81 0.94
Classic3
NMI ARI Acc
0.90 0.93 0.90
0.89 0.92 0.97
0.89 0.92 0.97
0.90 0.93 0.97
0.89 0.92 0.88
0.91 0.94 0.93
0.54 0.50 0.48
0.84 0.88 0.90
0.96 0.98 0.98
Classic4
NMI ARI Acc
0.66 0.46 0.70
0.53 0.33 0.52
0.66 0.46 0.70
0.66 0.46 0.70
0.64 0.44 0.71
0.60 0.41 0.69
0.51 0.43 0.69
0.47 0.29 0.62
0.71 0.54 0.74
0 1 2 3 4 5 6 7 8 9 10
CD
K-means
Deep-Kmeans
PCA-GMM
Deep-GMM
Reduced-K-means
EM-GMM
CEM-PCA
Fig. 5. Comparison of all models against each other with the Nemenyi test. Groups of models that are not significantly different (at ρ = 0.10) are connected (based on NMI).
2) Data embedding: To go further and measure the quality of data embedding expressed by B, we carried out projections using the nonlinear UMAP method [22]. We observe that the separability is sufficiently expressed by this matrix which benefits from the regularization of the third clustering term (2) as illustrated in Figures 4, 6, and 7.
VI. RELATIONSHIP BETWEEN CEM-PCA AND
STATE-OF-THE-ART METHODS
Next, we show how our proposed CEM-PCA approach is related to some other clustering and data embedding methods.

First component
Second component
Fig. 6. UMAP projection and clustering of the CEM-PCA method on Images data.
First component
Second component
Fig. 7. UMAP projection and clustering of the CEM-PCA method on BioMedical data (Yeast, Breast, and Lung) and text data (BBC, Classic3, and Classic4).
A. Relation with EM-GMM and K-means
The third term of (2) corresponds exactly to the minus complete-data log-likelihood from M:
−
n
X
i=1
g
X
k=1
zik log(πkφ(mi, (sk, Σk)). (10)
Its minimization is equivalent to the maximization of the complete-data log-likelihood performed by the CEM algorithm. Note that Parsimonious parameterizations [2, 5] of the covariances matrices can be obtained by means of an eigendecomposition of the form Σk = λkDkAkD⊤
k , where λk is a scalar controlling the volume of the ellipsoid, Ak is a diagonal matrix specifying the shape of the density contours with det(Ak) = 1, and Dk is an orthogonal matrix which determines the orientation of the corresponding ellipsoid. Thereby, when Σk = λI and πk = π ∀k, the CEM algorithm is K-means. In other words K-means is a constrained CEM algorithm applied on a reduced data matrix M and the k-means objective function takes the following form,
||M − ZS||2. (11)
B. Smoothed PCA
The new data representation is referred to as  ̃X = WX of size (n × d) can be viewed as a multiplicative way to encode information from both W and X. Then the objective of CEM-PCA, defines a graph regularized PCA on the smoothed matrix  ̃X. Thus, the first term in (2) performs PCA, on the
centroid computed on the neighborhood (barycenter) of each node. In fact, from
min
B,Q
 ̃X − BQ⊤ 2
plugging the optimal solution Q =  ̃X⊤B leads to the equivalent trace maximization problem of a smoothed PCA
mBax T r(B⊤(  ̃X  ̃X⊤)B). (12)
C. Smoothed PCA with clustering regularization
The objective function of CEM-PCA takes the following form
mBax T r(B⊤(  ̃X  ̃X⊤)B + δ||B − M||2
−
n
X
i=1
g
X
k=1
zik log(πkφ(mi, (sk, Σk)).
(13)
This shows that the first term is related to a Smoothed PCA and the third term represents a clustering regularization that enriches the Smoothed PCA by plugging the hidden clustering structure via Z.
D. Reduced k-means
In this subsection we will focus our attention on the objective of Reduced k-means given in [21, 38], which can be expressed as follows
X − ZSQ⊤ 2 = X − XQQ⊤ 2 + ∥XQ − ZS∥2. (14)

As with CEM-PCA, the first term of 14 performs PCA and the second term is the K-means objective applied on the reduced PCA embedding, which is a special case of the third term in CEM-PCA objective. Then, Reduced K-means objective is equivalent to CEM-PCA objective with the following additional constraints πk = π, ∀k and Σk = I, ∀k.
E. Regularized spectral data embedding
By setting  ̃X = W we rely only on the initial graph information without integrating any additional information. From the first term of the objective function reported in (2)
minB,Q W − BQ⊤ 2 plugging the optimal solution Q = W⊤B leads to the following equivalent trace maximization problem of a Spectral embedding
mBax T r(B⊤(WW⊤)B). (15)
Minimizing the first term in (2) is equivalent to the trace maximization problem expressed by maxB T r(B⊤WW⊤B). It is easy to show that W and WW⊤ have the same eigenvectors as in classical spectral clustering. Let BΛB⊤ be the eigendecomposition of W. The eigendecomposition of WW⊤ = BΛ2B⊤. Then, the objective of CEM-PCA in (2), is equivalent to regularized spectral data embedding by the complete-data log-likelihood,
max
B,Z,M,S,πk ,Σk
T r B⊤(WW⊤)B
+
n
X
i=1
g
X
k=1
zik log(πkφ(mi, (sk, Σk)) s.t M = B.
Assuming that K-means as a special case of CEM, the objective function of CEM-PCA is reduced to
max
B,Z,M,S T r B⊤(WW⊤)B − ||M − ZS||2 s.t M = B.
F. Graph Convolutional Networks
Graph Convolutional Networks (GCNs) have experienced significant attention and have become popular methods for learning graph representations. Below, we establish the connection between the graph convolution operator of GCN and the closed-form embedding solution of the CEM-PCA formulation. We demonstrate that its provided embedding is SVD of the GCN embedding and then can achieve better or similar results to GCN over several benchmark datasets. Similar to other neural networks stacked with repeate-
d layers, GCN contains multiple graph convolution layers; each of which is followed by a nonlinear activation [17, 37, 7]. Let H(l) be the l-th layer hidden representation, then GCN follows:
H(l+1) = σ(WH(l)Q(l)) (16)
where Q(l) is the l-th layer parameter (to be learned), H(0) = X and σ is the nonlinear activation function. Graph convolution operation is defined as the formulation before activation in (16).The graph convolution (parameterized with Q) mapping the feature matrix X to a new representation Y
defined as Y = WXQ. The embedding solution of CEM-PCA is given by the closed form solution of the following problem
mBax T r (X ̃ Q + δM)B⊤ s.t. B⊤B = I. (17)
Let ˆUΣˆ Vˆ ⊤ be SVD of ((X ̃ Q+δM)B⊤) = (WXQ+δM) = (Y + δM), then the embedding B = ˆUVˆ ⊤ is obtained from SVD of Y.
VII. CONCLUSION
In unsupervised learning, PCA and K-means are popular for their simplicity and effectiveness in dimensionality reduction, partitioning, and visualization, though their sequential use suffers from differing objectives. We propose a method unifying dimension reduction and clustering via Gaussian mixtures [2], overcoming challenges of dimensionality and slow EM convergence through joint optimization of embedding (PCA) and clustering (CEM, an extension of K-means). This scalable approach reveals more -
meaningful structures than sequential or deep methods, opening perspectives in representation learning and clustering. Beyond traditional applications, our method could also offers promise for interpretability in large language models by uncovering meaningful clusters in embeddings and intermediate transformer layers [34, 33].
REFERENCES
[1] Mukund Balasubramanian and Eric L Schwartz. “The isomap algorithm and topological stability”. In: Science 295.5552 (2002), pp. 7–7. [2] Jeffrey D. Banfield and Adrian E. Raftery. “ModelBased Gaussian and Non-Gaussian Clustering”. In: Biometrics 49.3 (1993), pp. 803–821. [3] Mikhail Belkin and Partha Niyogi. “Laplacian Eigenmaps and Spectral Techniques for Embedding and Clustering”. In: Advances in Neural Information Processing Systems. Ed. by T. Dietterich, S. Becker, and Z. Ghahramani. Vol. 1-
4. MIT Press, 2001. [4] Gilles Celeux and Gerard Govaert. “A classification EM algorithm for clustering and two stochastic versions”. In: Computational Statistics& Data Analysis 14.3 (1992), pp. 315–332. [5] Gilles Celeux and Ge ́rard Govaert. “Gaussian parsimonious clustering models”. In: Pattern Recognition 28.5 (1995), pp. 781–793. ISSN: 0031-3203. [6] Wei-Chien Chang. “On using principal components before separating a mixture of two multivariate normal distributions”. In: Journal of the Royal -
Statistical Society: Series C (Applied Statistics) 32.3 (1983), pp. 267275. [7] Ming Chen et al. “Simple and deep graph convolutional networks”. In: International Conference on Machine Learning. PMLR. 2020, pp. 1725–1735. [8] Arthur P Dempster, Nan M Laird, and Donald B Rubin. “Maximum likelihood from incomplete data via the EM algorithm”. In: Journal of the royal statistical society. Series B (methodological) (1977), pp. 1–38.

[9] Janez Demsˇar. “Statistical comparisons of classifiers over multiple data sets”. In: The Journal of Machine learning research 7 (2006), pp. 1–30.
[10] D. Engel, L. Hu ̈ttenberger, and B. Hamann. “A survey of dimension reduction methods for high-dimensional data analysis and visualization”. In: OAIS – Open Access Series in Informatics. Vol. 27. Schloss Dagstuhl, Leibniz-Zentrum fuer Informatik. 2012, pp. 135–149. [11] Maziar Moradi Fard, Thibaut Thonet, and Eric Gaussier. “Deep k-means: Jointly clustering with k-means and learning representations”. In: Pattern Recognition Letters 138 (2020), pp. 185–192.
[12] R. Gittins. Canonical Analysis – A Review with Applications in Ecology (Biomathematics, vol. 12), SpringerVerlag, Berlin – Heidelberg – New York – Tokyo 1985, 351 S., 16 Abb., DM 128. Springer, 1985.
[13] Xiaofei He and Partha Niyogi. “Locality preserving projections”. In: Advances in neural information processing systems 16 (2003). [14] Johannes Hertrich et al. PCA reduced Gaussian mixture models with applications in superresolution. 2022.
[15] Geoffrey E Hinton and Sam Roweis. “Stochastic neighbor embedding”. In: Advances in neural information processing systems 15 (2002).
[16] Geoffrey E Hinton and Ruslan R Salakhutdinov. “Reducing the dimensionality of data with neural networks”. In: science 313.5786 (2006), pp. 504–507. [17] Thomas N Kipf and Max Welling. “Semi-supervised classification with graph convolutional networks”. In: arXiv preprint arXiv:1609.02907 (2016).
[18] L. Lova ́sz and M.D. Plummer. Matching Theory. AMS Chelsea Pub., 2009. [19] Andrzej Mac ́kiewicz and Waldemar Ratajczak. “Principal components analysis (PCA)”. In: Computers& Geosciences 19.3 (1993), pp. 303–342. ISSN: 00983004. [20] J MacQueen. “Classification and analysis of multivariate observations”. In: 5th Berkeley Symp. Math. Statist. Probability. University of California Los Angeles LA USA. 1967, pp. 281–297. [21] Angelos Markos. “Joint dimension reduction and clustering in R (Part I)-
”. In: (). [22] Leland McInnes, John Healy, and James Melville. “Umap: Uniform manifold approximation and projection for dimension reduction”. In: arXiv preprint arXiv:1802.03426 (2018).
[23] Geoffrey J McLachlan and Thriyambakam Krishnan. The EM algorithm and extensions. John Wiley & Sons, 2007. [24] Geoffrey J McLachlan, Sharon X Lee, and Suren I Rathnayake. “Finite mixture models”. In: Annual review of statistics and its application 6 (2019), pp. 355–378. [25] Peter Bjorn Nemenyi. Distribution-free multiple comparisons. Princeton University, 1963. [26] GC Pacini et al. “Combining multi-dimensional scaling and cluster analysis to describe the diversity of rural
households”. In: Experimental Agriculture 50.3 (2014), pp. 376–397. [27] Jeffrey Pennington, Richard Socher, and Christopher Manning. “GloVe: Global Vectors for Word Representation”. In: Proceedings of the 2014 Conference on Empirical Methods in Natural Language Processing (EMNLP). Association for Computational Linguistics, 2014, pp. 1532–1543. [28] Rafael C. Pinto and Paulo Martins Engel. “A Fast Incremental Gaussian Mixture Model”. In: CoRR abs/1506.04422 (2015). [29] Douglas A. Reynolds. “Gauss-
ian Mixture Models”. In: Encyclopedia of Biometrics. 2009.
[30] Sam T Roweis and Lawrence K Saul. “Nonlinear dimensionality reduction by locally linear embedding”. In: science 290.5500 (2000), pp. 2323–2326. [31] Douglas L. Steinley. “Properties of the Hubert-Arabie adjusted Rand index.” In: Psychological methods 9 3 (2004), pp. 386–96. [32] Alexander Strehl and Joydeep Ghosh. “Cluster Ensembles - A Knowledge Reuse Framework for Combining Multiple Partitions”. In: Journal of Machine Learning Research 3 (Jan. 2002), pp. 583–617. [33] Zineddine Tighidet et -
al. “Context Copying Modulation: The Role of Entropy Neurons in Managing Parametric and Contextual Knowledge Conflicts”. In: Findings of the Association for Computational Linguistics: EMNLP 2025. Ed. by Christos Christodoulopoulos et al. Suzhou, China: Association for Computational Linguistics, Nov. 2025, pp. 20469–20481. ISBN: 979-889176-335-7. DOI: 10.18653/v1/2025.findings- emnlp. 1116. URL: https : / / aclanthology. org / 2025 . findings emnlp.1116/. [34] Zineddine Tighidet et al. “Probing Lan-
guage Models on Their Knowledge Source”. In: Proceedings of the 7th BlackboxNLP Workshop: Analyzing and Interpreting Neural Networks for NLP. Ed. by Yonatan Belinkov et al. Miami, Florida, US: Association for Computational Linguistics, Nov. 2024, pp. 604–614. DOI: 10.18653/ v1/2024.blackboxnlp- 1.35. URL: https://aclanthology. org/2024.blackboxnlp-1.35/. [35] L. Van Der Maaten, E. Postma, and J. Van den Herik. “Dimensionality reduction: a comparative”. In: J Mach Learn Res 10 (2009), pp. 66–71. [3-
6] Cinzia Viroli and Geoffrey J. McLachlan. Deep Gaussian Mixture Models. 2017.
[37] Felix Wu et al. “Simplifying graph convolutional networks”. In: International conference on machine learning. 2019, pp. 6861–6871. [38] M. Yamamoto. “Clustering of functional data in a lowdimensional subspace”. In: Advances in Data Analysis and Classification 6.3 (2012), pp. 219–247. [39] M. Yamamoto and H. Hwang. “A general formulation of cluster analysis with dimension reduction and subspace separation”. In: Behaviormetrika 41.1 (2014), pp. 115129.

[40] Zhenyue Zhang and Hongyuan Zha. “Principal Manifolds and Nonlinear Dimensionality Reduction via Tangent Space Alignment”. In: SIAM Journal on Scientific Computing 26.1 (2004), pp. 313–338.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:07.751Z
- **Text Length:** 41307 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
