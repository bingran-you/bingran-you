# PDF Document: Mahanipour and Khamfroush - 2025 - Semi-Supervised Federated Multi-Label Feature Selection with Fuzzy Information Measures.pdf

**File Path:** Mahanipour and Khamfroush - 2025 - Semi-Supervised Federated Multi-Label Feature Selection with Fuzzy Information Measures.pdf

**Processed Date:** 2026-02-10T18:15:59.492Z

**File Size:** 237.02 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3479

**Title:** Semi-Supervised Federated Multi-Label Feature Selection with Fuzzy Information Measures

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Semi-Supervised Federated Multi-Label Feature
Selection with Fuzzy Information Measures
Afsaneh Mahanipour1, Hana Khamfroush1
1Department of Computer Science, University of Kentucky, Lexington, KY, USA ama654@uky.edu, khamfroush@cs.uky.edu
Abstract—Multi-label feature selection (FS) reduces the dimensionality of multi-label data by removing irrelevant, noisy, and redundant features, thereby boosting the performance of multilabel learning models. However, existing methods typically require centralized data, which makes them unsuitable for distributed and federated environments where each device/client holds its own local dataset. Additionally, federated methods often assume that clients have labeled data, which is unrealistic in case-
s where clients lack the expertise or resources to label task-specific data. To address these challenges, we propose a Semi-Supervised Federated Multi-Label Feature Selection method, called SSFMLFS, where clients hold only unlabeled data, while the server has limited labeled data. SSFMLFS adapts fuzzy information theory to a federated setting, where clients compute fuzzy similarity matrices and transmit them to the server, which then calculates feature redundancy and feature-label relevancy degree-
s. A feature graph is constructed by modeling features as vertices, assigning relevancy and redundancy degrees as vertex weights and edge weights, respectively. PageRank is then applied to rank the features by importance. Extensive experiments on five real-world datasets from various domains, including biology, images, music, and text, demonstrate that SSFMLFS outperforms other federated and centralized supervised and semi-supervised approaches in terms of three different evaluation metrics in non-
-IID data distribution setting. Index Terms—Federated feature selection, Fuzzy complementary entropy, Multi-label data, Semi-supervised learning
I. INTRODUCTION
With the rise of technologies developed to realize smart cities, such as smart healthcare, Internet-of-Things (IoT), and intelligent transportation, we are now in the era of big data, with vast amounts of high-dimensional data generated daily. For instance, gene expression data can have 5,000 to 50,000 features. This data may include irrelevant, noisy, or redundant features, which increase the complexity and execution time of learning models, ultimately affecting their performance [1]. To address -
these issues, data pre-processing methods, particularly feature selection (FS) techniques, are effective. Unlike dimensionality reduction methods like PCA, FS retains the original features by selecting the most relevant ones. This approach reduces data dimensions, lowers computational costs, and improves model performance. In domains like image annotation, text categorization, and gene prediction, where instances are associated with multiple labels, FS becomes even more crucial to manage high dime-
nsionality effectively [1]. Processing large amounts of data collected by different devices/clients within distributed environments is crucial for
gaining valuable insights about the problem. While data was traditionally sent to cloud servers, the demand for real-time responses and privacy concerns has driven a shift to local or edge processing [2]. However, sending raw local data to an edge server increases communication costs, privacy risks, and delays. Moreover, using raw data locally in distributed, privacypreserving models like federated learning (FL) increases complexity cost and execution time.
Many studies focus on supervised learning, assuming clients have fully labeled data. In reality, clients often lack the expertise or resources to label their data, making this process costly and time-consuming. For instance, a healthcare system or image/text classification system might have a server with limited labeled data from experts, while numerous clients hold large amounts of unlabeled data [3].
In a distributed environment where multiple clients hold unlabeled data and a server contains multi-label data, selecting informative features requires a collaborative semi-supervised federated feature selection (FFS) approach. Existing centralized multi-label FS methods struggle in these settings, often leading to bias and inaccurate results when applied independently on client data. To address this, we introduce the first semisupervised federated multi-label FS method. This approach selects info-
rmative features from unlabeled client data using fuzzy complementary joint entropy and mutual information, while the server evaluates feature-label relevance using k-nearest neighbor fuzzy dependency. A feature graph is then constructed with features as vertices, using the weighted PageRank algorithm. Vertex weights reflect feature relevance, and edge weights capture inter-feature redundancy across clients. PageRank then determines the importance of features. This method efficiently identifies ke-
y features, reduces data size, accelerates learning models, and minimizes communication costs without losing information. The key innovations of this approach include:
• Introducing the first semi-supervised federated multi-label feature selection method (SSFMLFS) by integrating a semi-supervised approach into the FFS process. • Developing a federated adaptation of fuzzy information theory for feature evaluation in multi-label datasets. • Conducting extensive experiments on five real-world datasets from various domains, showing that SSFMLFS outperforms existing supervised and semi-supervised stateof-the-art multi-label feature selection methods.
arXiv:2511.17796v1 [cs.LG] 21 Nov 2025

II. RELATED WORKS Most previous research on multi-label FS has been centralized. To our knowledge, there is limited work on FFS and no research on semi-supervised federated multi-label FS. (a) Centralized Multi-label Feature Selection: Multi-label feature selection methods are mainly classified into problem transformation and algorithm adaptation approaches. Problem transformation methods, such as Binary Relevance (BR), Pruned Problem Transformation (PPT), Label Powerset (LP), and Entropy-based L-
abel Assignment (ELA), convert multi-label data into single-label data for easier feature selection. However, they face challenges like disrupting label correlations (BR) or struggling with imbalanced classes (LP) [4]. Algorithm adaptation methods extend supervised and semisupervised FS techniques to handle multi-label datasets effectively. For instance, SCFC [5] leverages probabilistic neighborhood similarities for feature correlation. SFAM [6] integrates adaptive global structure learning with m-
anifold learning. MLFS-NRS [7] employs the Fisher score and neighborhood rough sets for supervised FS, while ant colony optimization in MLACO [8] balances feature-label relevancy and redundancy. MGFS [9] converts the FS problem into a graph and ranks features using PageRank, whereas GRMFS [10] uses fuzzy rough sets and weighted graph to measure feature-label uncertainty and improve feature selection. However, centralized methods are not suitable for distributed environments. (b) Federated Feature -
Selection: A few supervised FFS methods are designed for single-label and multi-label datasets. These methods, inspired by federated learning (FL), are categorized into vertical FFS, which handles clients with identical instances but different feature sets, and horizontal FFS, where clients have the same features but different instances [11]. For example, FMLFS [12] uses mutual information for feature-label relevance and correlation distance for redundancy, while FedCMFS [13] introduces a federate-
d causal approach for multi-label FS. III. PRELIMINARIES
(a) Fuzzy relation: Let U = {x1, x2, ..., xn} be a finite set of objects. If A maps elements of U to values in [0, 1], denoted as A : U → [0, 1], then A = (A(x1), A(x2), ..., A(xn)) is a fuzzy set on U. The membership function of each x ∈ U is A(x).
Definition 1. A fuzzy relation R on a set U is defined as R : U × U → [0, 1]. R ∈ F(U × U) where F(U × U) is the set of all fuzzy relations on U. For any pair (x, y) ∈ U × U, the membership degree R(x, y) represents the extent to which x and y are related under the relation R. If R meets the following conditions for any x, y, z ∈ U, it is considered a fuzzy equivalence relation: 1) Reflexivity: R(x, x) = 1; 2) Symmetry: R(x, y) = R(y, x);
3) Transitivity: R(x, z) ≥ supy∈U min(R(x, y), R(y, z)), If R satisfies only conditions (1) and (2), it is referred to as a fuzzy similarity relation on U. (b) Fuzzy rough sets: The fuzzy rough set (FRS) model, introduced in [14], is defined as follows:
Fig. 1: Architecture overview of the two-layer system.
Definition 2. For a fuzzy equivalence relation R on U and any X ∈ F(U), the lower approximation RX and upper approximation RX of X are fuzzy sets on U with membership functions given by:
RX (x) = inf
y∈U max{1 − R(x, y), X (y)}, (1)
RX (x) = sup
y∈U
min{R(x, y), X (y)}. (2)
IV. PROPOSED METHOD
A. System Overview
We examine a two-tier horizontal FFS framework, as depicted in Fig. 1, where multiple clients collect unlabeled data Z, and an edge server with labeled data S coordinates feature selection. The system includes M clients (Cm, m = {1, ..., M }) and one edge server, scalable with additional servers, and requires at least two clients to avoid centralization. Client datasets Z = Rn×d contain d-dimensional feature vectors xi = (xi1, xi2, ..., xid). The server’s labeled dataset S = Rs×d, represented as S-
 = {(xi, yi)}s
i=1, includes s instances with ddimensional feature vectors and L-dimensional binary labels yi = (yi1, yi2, ..., yiL), where yil = 1 if an instance has label yl, and 0 otherwise. The goal is to collaboratively select informative features.
B. Proposed Algorithm
The proposed method, SSFMLFS (Semi-Supervised Federated Multi-Label Feature Selection), integrates semi-supervised and federated learning to select informative features across client datasets. It uniquely adapts fuzzy complementary entropy and related uncertainty metrics to federated settings, minimizing data transfer while enhancing speed and proximity to data sources. SSFMLFS evaluates features based on maximum information and minimum redundancy. The fuzzy information system for clients, denoted-
 as F IS = <U, F >, characterizes a system where U = {x1, x2, ..., xn} represents the data instances and F = {f1, f2, ..., fd} denotes the feature set. For any feature fp ∈ F, Rfp is a fuzzy similarity relation on U, and M (Rfp ) = (rfp
ij )n×n denotes the fuzzy similarity relation matrix. To prevent varying feature value ranges from affecting algorithm performance, the original features are normalized. In this study, normalization scales feature values to a range of [0, 1]. Then, in each client, the standard deviation of each feature fp is calculated as:
std(fp) =
√ ∑n
i=1(fp (xi)−fp (x))2
n−1 , where fp(x) is the mean of

all instances in the local dataset for fp. The calculated standard deviation of all features are then sent from the clients to the edge server. The server aggregates the standard deviations received from clients and computes the global standard deviation for each feature (stdg(fp)). It then broadcasts these values to the clients. Using the global standard deviation, each client calculates the
adaptive fuzzy radius εfp = stdg(fp)
λ , where λ ∈ [0.4, 2] adjusts the radius. Clients subsequently compute the fuzzy similarity relation matrix for each feature, determining the similarity rfp
ij
between data instances xi and xj based on the method in [15].
rfp
ij =
{
1 − |fp(xi) − fp(xj)|, if |fp(xi) − fp(xj)| 6 εfp 0, if |fp(xi) − fp(xj)| > εfp
(3)
Then, the fuzzy similarity relation matrices are transmitted to the server, where they are aggregated to obtain global fuzzy similarity relation matrices for all features. The server then evaluates features by calculating fuzzy complementary joint entropy and mutual information, maximizing information and minimizing redundancy, using FRS theory: Definition 3. The Fuzzy complementary entropy for any feature fp is defined as:
CE(fp) = 1
|U |
∑n
i=1
(
1 − |[xi]fp |
|U |
)
. (4)
where |[xi]fp | = ∑n
j=1 rfp
ij . Fuzzy complementary entropy, an uncertainty measure for fuzzy information systems, is first defined for a single relation and then extended to multiple relations as fuzzy complementary joint entropy. Definition 4. The fuzzy complementary joint entropy of fp and fb is defined as:
CJ E(fp, fb) = 1
|U |
n ∑
i=1
(
1 − |[xi]fp ∩ [xi]fb |
|U |
)
. (5)
Definition 5. The fuzzy complementary conditional entropy of fp on fb is defined as:
CCE(fp|fb) = 1
|U |
n ∑
i=1
( |[xi]fb |
|U | − |[xi]fp ∩ [xi]fb |
|U |
)
. (6)
Definition 6. The fuzzy complementary mutual information between fp and fb is defined as:
CM I(fp; fb) =
1 |U |
n ∑
i=1
(
1 − |[xi]fb | + |[xi]fp | − |[xi]fp ∩ [xi]fb |
|U |
)
. (7)
After calculating fuzzy complementary joint entropy and mutual information between features, we calculate a correlation distance to maximize information and minimize redundancy by subtracting fuzzy complementary mutual information from fuzzy complementary joint entropy. Now, using the labeled dataset on the edge server, we evaluate the features based on their relation to all labels. For this purpose, we calculate the k-nearest neighbor fuzzy dependency degree [10] as follows to determine the featu-
re-label relevancy.
TABLE I: Details of the multi-label benchmark datasets.
Dataset Instances Features Labels Domain Cal500 502 68 174 Music Corel5k 5000 499 374 Images Emotions 593 72 6 Music Enron 1702 1001 53 Text Yeast 2417 103 14 Biology
Definition 7. Given a multi-label fuzzy information system M F IS = <U, F ∪ Y >, where F = {f1, f2, ..., fd} denotes the feature set and Y = {y1, y2, · · · , yL} denotes the label set, the fuzzy positive region of Y with respect to feature fp ∈ F is denoted as:
P OSfp (Y )(xi) = ⋃
Yl
Rfp (Yl)(xi). (8)
Definition 8. The fuzzy similarity between instances xi and xj under label set Y is defined as:
Sim(xi, xj ) = ∑L
t=1(Y ̃ t(xi) − Y ̃ (xi))(Y ̃ t(xj ) − Y ̃ (xj ))
√∑L
t=1(Y ̃ t(xi) − Y ̃ (xi))2
√∑L
t=1(Y ̃ t(xj ) − Y ̃ (xj ))2
. (9)
where Y ̃ t(xi) and Y ̃ t(xj ) are the fuzzy decisions of samples
xi and xj on label yt, respectively. Y ̃ (xi) represents the mean of the fuzzy decisions of xi on the label set Y . Then, k nearest relevant and irrelevant instances are selected as the soft same class sample set ST (xi) and different class sample set DT (xi), respectively. Definition 9. The k-nearest neighbor fuzzy lower and upper approximations are defined as follows:
Rλ,k
fp (Y )(xi) = 1
k
k ∑
j=1
(1 − Rλ
fp (xi, xj)), xj ∈ DT (xi), (10)
Rλ,k
fp (Y )(xi) = 1
k
k ∑
j=1
Rλ
fp (xi, xj), xj ∈ ST (xi). (11)
Definition 10. The k-nearest neighbor fuzzy dependency degree of Y to feature fp, Dλ
fp (Y ), is defined as follows:
Dλ
fp (Y ) =
∑
xi∈U P OSλ,k
fp (Y )(xi)
|U | . (12)
where P OSλ,k
fp (Y )(xi) = Rλ,k
fp (Y )(xi) represents the k-nearest neighbor fuzzy positive region. This fuzzy dependency degree evaluates the feature-label relevance degree. After evaluating the correlation distances between features and the relevancy between features and labels, we adopt a weighted PageRank algorithm [16] to traverse a feature graph and select the most informative features based on the weights of the edges and vertices. In this graph, features are considered as the vertices, the relevance between features and-
 labels serves as the initial weights of the vertices, and the correlation distance between features serves as the initial weights of the edges. The

Algorithm 1 Pseudocode of the proposed semi-supervised federated multi-label FS (SSFMLFS) Input: M Clients with their unlabeled data Z, and labeled data on the server S, λ = 1.2 [10]. Output: Selected feature subset 1: Client 2: for fp ∈ F do
3: Calculate standard deviation; 4: end for 5: Server
6: Aggregate the standard deviations received from clients 7: Client 8: for fp ∈ F do
9: Calculate fuzzy similarity matrix M (Rfp ) (Eq. 3); 10: end for 11: Server
12: Aggregate fuzzy similarity matrices 13: for fp ∈ F do 14: for fb ∈ F do
15: Compute fuzzy joint entropy CJE(fp, fb) (Eq. 5); 16: Compute fuzzy mutual information CM I(fp; fb) (Eq. 7);
17: end for 18: end for
19: % The initial weights for edges in the graph % 20: Calculate correlation distance = CJE − CM I; 21: % The initial weights for vertices in the graph % 22: Calculate fuzzy similarity under the label set Y (Eq. 9); 23: for fp ∈ F do
24: Compute k-nearest neighbor dependency Dλ
fp (Y ) (Eq. 12);
25: end for
26: Apply weighted PageRank (Eq. 13) to score features; 27: Sort feature scores in descending order; 28: Select the top features as specified by the user.
PageRank algorithm then assigns scores (Gfi ) to the vertices iteratively, with features having higher scores considered more informative. The PageRank formula is as follows [16]:
Gfi = (1 − ζ)Wfi + ζ ∑
fj ∈B(fi)
Gfj Wuij
∑
fz ∈B(fj ) Wujz
. (13)
where ζ is the probability of accessing the current feature, usually set to 0.85 [10]; Wfi is the initial weight of feature fi, and Wuij is the weight of the edge between features fi and fj. Also, B(fi) is the set of features connected to feature fi. The features’ scores are then ranked in descending order, and the desired number of best features are selected. The pseudocode for the SSFMLFS method is provided in Algorithm 1.
V. EXPERIMENTAL RESULTS
In this section, we evaluate the proposed method against supervised FFS methods and centralized supervised and semisupervised FS methods. Clients use SSFMLFS to select infor
mative features and then send the smaller datasets to the edge server for comparison with other multi-label FS methods using the MLKNN classifier.
TABLE II: AP for SSFMLFS vs. ten supervised FS methods.
Algorithms AP (↑)
Cal500 Corel5k Emotions Enron Yeast D2F 0.4724 0.2217 0.6790 0.6556 0.7256 RFNMIFS 0.4839 0.2333 0.6702 0.5468 0.7375 FIMF 0.4774 0.2234 0.7122 0.6533 0.7414 MLFS-NRS 0.4709 0.2311 0.6866 0.5827 0.7449 MFSDNA 0.4758 0.2242 0.7199 0.5293 0.7508 MLNRS 0.4729 0.2081 0.7233 0.5250 0.7489 BMFS 0.4871 0.2107 0.6703 0.5578 0.7220 MGFS 0.4883 0.2309 0.7165 0.6578 0.7448 MLACO 0.4976 0.2176 0.6552 0.6498 0.7463 GRMFS 0.5012 0.2360 0.7309 0.6698 0.7582 SSFMLFS 0.5119 0.2409 0.7749 0.6687 0.7792
(a) Datasets: This study selects five real-world multi-label datasets from diverse domains, including biology, image, text, and music, sourced from the Mulan1 repository. The datasets vary in the number of instances, features, and labels. Table I lists the characteristics of these datasets.
TABLE III: CV for SSFMLFS vs. ten supervised FS methods.
Algorithms CV (↓)
Cal500 Corel5k Emotions Enron Yeast D2F 133.5412 117.1810 2.400 12.7824 6.6704 RFNMIFS 133.0102 115.7105 2.3125 13.5924 6.5857 FIMF 132.2130 116.9134 2.2566 12.6118 6.5682 MLFS-NRS 135.1731 116.6408 2.1429 13.5015 6.4838 MFSDNA 135.1193 118.3408 2.1261 15.2815 6.4903 MLNRS 133.4587 119.8625 2.1739 15.0749 6.4869 BMFS 130.7996 118.5782 2.5781 14.2853 6.8413 MGFS 131.2896 116.699 2.2143 12.8417 6.4794 MLACO 130.4024 119.5255 2.5072 12.8798 6.5037 GRMFS 129.0146 112.143 2.1243 12.4176 6.4707 SSFMLFS -
128.3000 89.9625 2.0420 12.8647 6.1242
(b) Baselines: We compare the proposed method with five semi-supervised and ten supervised centralized multi-label FS methods, as well as two supervised multi-label FFS methods. The methods are as follows: Semi-supervised methods [6]: SFSS, CSFS, RLSR, SCFC, and SFAM. Supervised methods [10]: Org uses all the original features in the experiments. D2F, FSNM, RFNMIFS, FIMF, MLFS-NRS, MFSDNA, MLFRS, BMFS, MGFS, MLACO, GRMFS, FMLFS [12], and FedCMFS [13]. The experiments are run in an integrated devel-
opment environment of MATLAB R2023b on a computer with Windows 11 with Intel(R) Core(TM) i7-8700 CPU at 3.20 GHz and 32.0 GB memory. (c) Evaluation Metrics: Three evaluation metrics are used to assess the performance of the proposed method: average precision (AP), coverage (CV), and ranking loss (RL). Denoting a test set as (T = {(xi, yi)}n
i=1), where yi and zi are the actual and predicted label sets for xi, respectively, these metrics are
as follows [4]: • AP calculates the average fraction of relevant labels ranked higher than a specific label.
1https://mulan.sourceforge.net/datasets.html

10 15 20 25 30 35 40 percentage of labeled data
0.72
0.74
0.76
0.78
0.8
Average-Precision
Yeast Dataset
10 15 20 25 30 35 40 percentage of labeled data
0.55
0.6
0.65
0.7
0.75
0.8
0.85
Average-Precision
Emotion Dataset
10 15 20 25 30 35 40 percentage of labeled data
0.44
0.46
0.48
0.5
0.52
Average-Precision
Cal500 Dataset
10 15 20 25 30 35 40 percentage of labeled data
0.19
0.2
0.21
0.22
0.23
0.24
0.25
0.26
Average-Precision
Corel5k Dataset
10 15 20 25 30 35 40 percentage of labeled data
0.5
0.55
0.6
0.65
0.7
Average-Precision
Enron Dataset
Org SFSS CSFS RLSR SCFC SFAM SSFMLFS
Fig. 2: Performance comparison across all datasets with varying labeled data percentages (10%, 20%, 30%, 40%).
TABLE IV: RL for SSFMLFS vs. ten supervised FS methods.
Algorithms RL (↓)
Cal500 Corel5k Emotions Enron Yeast D2F 0.1902 0.1389 0.2858 0.0887 0.1954 RFNMIFS 0.1894 0.1366 0.2977 0.1026 0.1871 FIMF 0.1941 0.1383 0.2663 0.0905 0.1845 MLFS-NRS 0.1904 0.1374 0.2576 0.0933 0.1777 MFSDNA 0.1940 0.1407 0.2654 0.1131 0.1772 MLNRS 0.1910 0.1428 0.2708 0.1143 0.1751 BMFS 0.1858 0.1411 0.3124 0.1050 0.1990 MGFS 0.1855 0.1376 0.2310 0.0912 0.1710 MLACO 0.1849 0.1442 0.2971 0.0879 0.1818 GRMFS 0.1804 0.1318 0.2215 0.0825 0.1710 SSFMLFS 0.1723 0.1051 0.2064 0.0847 0.1527
AP = 1
n
n
∑
i=1
1 |yi |
∑
λ∈yi
|λ′ ∈ yi : rank(λ′) ≤ rank(λ)|
rank(λ) (14)
• CV indicates the number of steps needed for a learning algorithm to cover all true labels of an instance.
CV = 1
n
n ∑
i=1
max
λ∈yi
(rank(λ)) − 1 (15)
• RL assesses how often relevant labels are ranked lower than non-relevant labels.
RL = 1
n
∑n
i=1
1
|yi||y ̄i| |(λa, λb) : rank(λa) > rank(λb),
(λa, λb) ∈ yi × y ̄i|
(16)
where y ̄i is the complement set of yi. (↓) indicates that “lower values are better”, while (↑) denotes that “higher values are better” for each metric. (d) Parameter settings: For the experiments, we use MLKNN with k = 10 and a smoothing parameter of 1 as the classifier,
which is a common choice for evaluating federated and centralized multi-label FS results. Additionally, in line with existing FFS methods, we involve 10 clients with non-IID data and apply the classifier after selecting the desired number of features. The final number of selected features for comparison is determined based on the method recommended in [4].
TABLE V: Comparison of FFS methods on the Yeast dataset.
Algorithms Yeast
AP (↑) CV (↓) RL (↓) FMLFS 0.7534 6.4199 0.1732 FedCMFS 0.7590 6.4531 0.1717 SSFMLFS 0.7792 6.1242 0.1527
(e) Results and Analysis: Fig. 2 compares our federated FS method with various centralized semi-supervised multilabel FS approaches. The results show that SSFMLFS selects more informative features with fewer labeled instances than other centralized methods across all datasets except for “Emotions”. For instance, with only 10% of labeled instances in the “corel5k” and “Enron” datasets, our method, using less labeled data, matches or outperforms the performance of “SFAM”, the second-best method, whi-
ch uses 40% labeled data. Table II to IV present comparison results against ten supervised centralized multi-label FS methods, covering approaches based on graph, rough sets, and information theory, across all datasets using three evaluation metrics. The results for the proposed method are based on utilizing 20% of the labeled training data on the server. The findings reveal that incorporating both labeled and unlabeled data allows the proposed method to outperform others in nearly all metrics. Fo-
r instance, the “Yeast” and “Emotions” datasets show 2.1% and 4.4% improvements in AP, respectively, compared to “GRMFS”, the second-best method.

Additionally, Table V shows that SSFMLFS, with only 20% labeled data, outperforms two supervised FFS methods on the “Yeast” dataset. Communication Cost: To calculate the communication cost before and after FS, the following formula is used. As shown in Table VI, the results demonstrate that the communication cost decreased after FS due to the reduced number of features.
Communivation − Cost =
M ∑
i=1
Di × Ni × Fi × b (17)
Here, M is the number of clients, Di is the distance between client i and the edge server, Ni and Fi represent the number of instances and features, respectively, in the local dataset, and b indicates the number of bits per value (e.g., 32 for float).
TABLE VI: Communication Cost before and after FS.
Datasets Communivation Cost (↓)
Before FS After FS
Cal500 ∑M
i=1 Di × 502 × 68 × b ∑M
i=1 Di × 502 × 27 × b
Corel5k ∑M
i=1 Di × 5000 × 499 × b ∑M
i=1 Di × 5000 × 150 × b
Emotion ∑M
i=1 Di × 593 × 72 × b ∑M
i=1 Di × 593 × 28 × b
Enron ∑M
i=1 Di × 1702 × 1001 × b ∑M
i=1 Di × 1702 × 100 × b
Yeast ∑M
i=1 Di × 2417 × 103 × b ∑M
i=1 Di × 2417 × 31 × b
VI. CONCLUSION AND FUTURE WORKS
In this paper, we present SSFMLFS, a novel semisupervised federated feature selection method for multi-label data. SSFMLFS adapts fuzzy mutual information and joint entropy into a federated setting to select informative features from unlabeled client data and limited labeled server data. Extensive experiments are conducted on 5 diverse datasets with four varying labeled data percentages. SSFMLFS outperforms other methods in 17 out of 20 comparisons against various semisupervised centralized multi--
label FS methods. Furthermore, compared to ten supervised centralized FS methods that have 100% labeled data, SSFMLFS, with only 20% labeled data, performs better across nearly all metrics on four datasets. For instance, on the “Emotions” dataset, it improves AP by 4.4% over the second-best method, “GRMFS”, and by 20% over “Org”. Finally, SSFMLFS demonstrates better performance compared to other supervised FFS methods. Future work will explore integrating encryption techniques and embedded FFS wit-
h semi-supervised FL in non-IID data distribution setting. ACKNOWLEDGEMENT This work is funded by career grant provided by the National Science Foundation (NSF) under the grant number 2340075.
REFERENCES
[1] R. Zebari, A. Abdulazeez, D. Zeebaree, D. Zebari, and J. Saeed, “A comprehensive review of dimensionality reduction techniques for feature selection and feature extraction,” Journal of Applied Science and Technology Trends, vol. 1, no. 2, pp. 56–70, 2020. [2] T. Nishio and R. Yonetani, “Client selection for federated learning with heterogeneous resources in mobile edge,” in ICC 2019-2019 IEEE international conference on communications (ICC). IEEE, 2019, pp. 1–7.
[3] E. Diao, J. Ding, and V. Tarokh, “Semifl: Semi-supervised federated learning for unlabeled clients with alternate training,” Advances in Neural Information Processing Systems, vol. 35, pp. 17 871–17 884, 2022. [4] S. Kashef, H. Nezamabadi-pour, and B. Nikpour, “Multilabel feature selection: A comprehensive review and guiding experiments,” Wiley Interdisciplinary Reviews: Data Mining and Knowledge Discovery, vol. 8, no. 2, p. e1240, 2018. [5] Y. Xu, J. Wang, S. An, J. Wei, and J. Ruan, “Semisup-
ervised multi-label feature selection by preserving feature-label space consistency,” in Proceedings of the 27th ACM international conference on information and knowledge management, 2018, pp. 783–792.
[6] S. Lv, S. Shi, H. Wang, and F. Li, “Semi-supervised multilabel feature selection with adaptive structure learning and manifold learning,” Knowledge-based systems, vol. 214, p. 106757, 2021. [7] L. Sun, T. Wang, W. Ding, J. Xu, and Y. Lin, “Feature selection using fisher score and multilabel neighborhood rough sets for multilabel classification,” Information Sciences, vol. 578, pp. 887–912, 2021. [8] M. Paniri, M. B. Dowlatshahi, and H. Nezamabadi-Pour, “Mlaco: A multi-label feature selection a-
lgorithm based on ant colony optimization,” Knowledge-Based Systems, vol. 192, p. 105285, 2020. [9] A. Hashemi, M. B. Dowlatshahi, and H. NezamabadiPour, “Mgfs: A multi-label graph-based feature selection algorithm via pagerank centrality,” Expert Systems with Applications, vol. 142, p. 113024, 2020. [10] T. Yin, H. Chen, Z. Yuan, J. Wan, K. Liu, S.-J. Horng, and T. Li, “A robust multilabel feature selection approach based on graph structure considering fuzzy dependency and feature interaction,” I-
EEE Transactions on Fuzzy Systems, vol. 31, no. 12, pp. 4516–4528, 2023. [11] A. Mahanipour and H. Khamfroush, “Wrapper-based federated feature selection for iot environments,” in 2023 International Conference on Computing, Networking and Communications (ICNC). IEEE, 2023, pp. 214–219. [12] ——, “Fmlfs: A federated multi-label feature selection based on information theory in iot environment,” arXiv preprint arXiv:2405.00524, 2024.
[13] Y. Song, D. Cao, J. Miao, S. Yang, and K. Yu, “Causal multi-label feature selection in federated setting,” arXiv preprint arXiv:2403.06419, 2024.
[14] D. Dubois and H. Prade, “Rough fuzzy sets and fuzzy rough sets,” International Journal of General System, vol. 17, no. 2-3, pp. 191–209, 1990. [15] J. Wan, H. Chen, T. Li, Z. Yuan, J. Liu, and W. Huang, “Interactive and complementary feature selection via fuzzy multigranularity uncertainty measures,” IEEE Transactions on Cybernetics, vol. 53, no. 2, pp. 1208–1221, 2021. [16] D. Luo, C. Gong, R. Hu, L. Duan, and S. Ma, “Ensemble enabled weighted pagerank,” arXiv preprint arXiv:1604.05462, 2016-
.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:59.492Z
- **Text Length:** 29535 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
