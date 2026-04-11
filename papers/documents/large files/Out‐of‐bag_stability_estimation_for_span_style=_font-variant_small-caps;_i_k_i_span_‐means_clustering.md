# PDF Document: Liu et al. - 2022 - Out‐of‐bag stability estimation for  k  ‐means.pdf

**File Path:** Liu et al. - 2022 - Out‐of‐bag stability estimation for  k  ‐means.pdf

**Processed Date:** 2026-02-10T18:18:25.049Z

**File Size:** 2340.25 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2706

**Title:** Out‐of‐bag stability estimation for <span style="font-variant:small-caps;"> <i>k</i> </span> ‐means clustering

**Collection:** Large Files

---

## Extracted Text Content

Received: 2 July 2021 Revised: 13 June 2022 Accepted: 10 July 2022
DOI: 10.1002/sam.11593
RESEARCH ARTICLE
Out-of-bag stability estimation for k-means clustering
Tianmou Liu1 Han Yu2 Rachael Hageman Blair3
1State University of New York at Buffalo, Buffalo, New York, USA
2Department of Biostatistics and Bioinformatics, Roswell Park Comprehensive Cancer Center, Buffalo, New York, USA
3Department of Biostatistics, State University of New York at Buffalo, Buffalo, New York, USA
Correspondence
Rachael Hageman Blair, Department of Biostatistics, State University of New York at Buffalo, 3435 Main Street, 709 Kimball Tower, Buffalo, NY 14214, USA. Email: hageman@buffalo.edu
Funding information
Division of Mathematical Sciences, Grant/Award Number: 1557589
Abstract
Clustering data is a challenging problem in unsupervised learning where there
is no gold standard. Results depend on several factors, such as the selection of a
clustering method, measures of dissimilarity, parameters, and the determination
of the number of reliable groupings. Stability has become a valuable surrogate
to performance and robustness that can provide insight to an investigator on
the quality of a clustering, and guidance on subsequent cluster prioritization.
This work develops a framework for stability measurements that is based on
resampling and OB estimation. Bootstrapping methods for cluster stability can
be prone to overfitting in a setting that is analogous to poor delineation of test
and training sets in supervised learning. Stability that relies on OB items from
a resampling overcomes these issues and does not depend on a reference clus
tering for comparisons. Furthermore, OB stability can provide estimates at the
level of the item, cluster, and as an overall summary, which has good interpretive
value. This framework is extended to develop stability estimates for determin
ing the number of clusters (model selection) through contrasts between stability
estimates on clustered data, and stability estimates of clustered reference data
with no signal. These contrasts form stability profiles that can be used to iden
tify the largest differences in stability and do not require a direct threshold on
stability values, which tend to be data specific. These approaches can be imple
mented using the R package bootcluster that is available on the Comprehensive
R Archive Network.
KEYWORDS
bootstrap, clustering, Jaccard coefficient, k-means, out-of-bag, resampling, stability
1 INTRODUCTION
The objective of cluster analysis is to group items based on similarity [7, 20]. Decisions on clustering methods and parameters can often be arbitrary and yield wide ranging results, which makes interpretation and assessment of confidence in the grouping rather challenging. This is due in part to the differences in the objective functions used in
clustering algorithms, parameter settings and measures of dissimilarity. Quantification of the performance and goodness of fit is critical when using clustering for knowledge and discovery. These assessments are problematic in unsupervised clustering because of the lack of labels to serve as gold standards. The development of methods to assess the quality of a clustering has been a longstanding active area of
Stat Anal Data Min: The ASA Data Sci Journal. 2022;1–16. wileyonlinelibrary.com/sam © 2022 Wiley Periodicals LLC. 1

2 LIU et al.
research. Different quality assessments are often connected to the model selection problem of identifying the optimal number of clusters in a dataset. Stability can be viewed as an estimate of cluster reproducibility that measures the sensitivity of the clustering to small changes (perturbations) to the data [25, 36] and is often used as a surrogate for performance. The underlying premise is that if we repeatedly draw samples from the population and apply the clustering algorithm, a good clusterin-
g result will persist from one perturbed dataset to another. How these small changes are generated is what fundamentally distinguishes the different stability estimation methods. Stability methods take a range of approaches, see recent review [25], such as the addition of random noise to the data [6], subsampling [5, 24, 32], and bootstrapping[9, 13, 23, 33, 39]. The use of stability for the selection of the number of clusters is both challenging and controversial. Ben-David et al. [4] developed t-
heoretical properties of stability for spectral and center-based clustering. Their findings show that stability can be induced by symmetries of data that are unrelated to the clustering parameters. They show that results can be misleading; unless an objective function is known to have a global minimum [4]. Ben-David and Von Luxburg [3] examined stability as a function of cluster boundary and support the use of stability as a way of identifying red flags that may indicate something is wrong with th-
e clustering solution when low levels of stability arise. Von Luxburg [36] examined the stability of k-means and also supported the use of low stability to signal a potentially unstable clustering. Akhanli and Hennig [1] also emphasized the challenges in stability for model selection, arguing that undesirable clusterings can also be stable. There are several alternative heuristics for the selection of the number of clusters for unlabeled data, for example, the silhouette plots [31], Calinski–Harab-
asz index [28], gap statistic [35], profiles of the within cluster dissimilarity, and alternative measures of cluster validity [1, 16, 38]. The performance of these methods will ultimately depend on the data and clustering algorithm. Stability and the use of alternative methods can be effective tools, but do not override the need of careful interpretation by the user in the context of the data and application. In this work, we develop a nonparametric approach to stability estimation that leverages-
 bootstrap replications of the data [11], and subsequent clusterings. Felsenstein [14] was the first to develop a method for bootstrap based clustering for the inference of phylogenetic trees, which inherently have a hierarchical dendrogram-like structure. Jain and Moreau [21] combined bootstrap with the Davies and Bouldin Criterion, a function of within cluster dispersion and between cluster separation. Dudoit
and Fridlyand [9] proposed two resampling approaches: bagclust1 aggregates clustering solutions, and bagclust2, which defines a pairwise dissimilarity matrix from the frequency of pairs of observations sharing a common cluster label. Fang and Wang [13] developed a bootstrapping method for selecting the number of clusters that utilizes pairwise comparisons of clustering labels estimated from bootstrapped data. This resampling approach was found to be an improvement over cross-validated measures of -
stability, which can be sensitive to fold assignments [37]. Ben-Hur et al. [5] developed a method for detecting the presence of structure in clustered data across resampled datasets using the Jaccard coefficient. Hennig [18] developed a resampling approach to stability estimation that depends on the maximum Jaccard coefficient between each data cluster and the resampled data clusters. Inspired by the fact that a dataset can contain both meaningful patterns and spurious ones at the same time, the a-
pproach provides a cluster-level estimate of stability. Yu et al. [39] proposed a stability method based on bootstrapping that relies on the Jaccard coefficients to measure the pairwise changes between clusterings. Stability is estimated at the level of the individual observation, the cluster and as an overall measure. As with Hennig [18], this is valuable from the point of view of interpretation and exploration. Yu et al. [39] also derived a stability profile that can be used to select the optima-
l number of clusters (model selection) but requires a threshold stability value that is suggested to fall above 0.80 or 0.90. A limitation of this approach is that the entire set of clustered items has to be reprojected onto the bootstrap estimated mean centers in order to compute Jaccard coefficients over the same sets. From herein we will refer to this form of stability estimation as whole set (WS) stability. Since items used for the mean center estimation in the bootstrap samples are also repro-
jected onto the same mean centers, an overestimation of stability is possible. A similar phenomenon can be observed in bootstrap estimation of generalization error in supervised learning problems, which require modifications to account for poor delineations between the training (resampled) and test (not resampled) in the bootstrap replications [10]. Tibshirani and Walther [34] proposed prediction strength, which partially frames the clustering problem as supervised by aiming to capture and validat-
e the structure through the use of a test sample, or cross-validation. The method requires the researcher to specify a threshold value on prediction strength in order to select the optimal number of clusters, k. Empirically, the choice of threshold was suggested to fall above 0.80 or 0.90, and the importance of examining prediction strength profile across a range of k values is emphasized [34]. The gap

LIU et al. 3
statistic arose out of earlier work by Tibshirani et al. [35] and relies on contrasting the within-cluster sum of pairwise dissimilarity of a dataset to that of a null reference with no signal. Although not termed a measure of stability, exploiting the differences between the structured data and random null reference distributions is a unique approach to model selection in clustering. In lieu of thresholding on a value of the gap statistic, there is tuning that comes in the form of specifying an a-
cceptable SE difference within the gap statistic profile between the optimal k clustering, and the less complex k − 1 model. In this work, a connection is made between ideas based on resampling for cluster stability [39] and ideas of capturing and validating structure [34]. The major contributions of this work are as follows. (1) The development of out-of-bag (OB) estimates of stability at the level of the observation that is not conditional on the cluster labels of the original data. The OB obser-
vations are defined as the observations that are not resampled in the bootstrap process. OB estimation [8] seeks to avoid overfitting that occurs algorithmically when test data, represented as OB observations, influences the model training. (2) Observation level OB stability is used to derive stability measures at the cluster level and as an overall measure, which facilitates different levels of interpretation. (3) Stability, both OB and WS, is used in connection to a reference dataset for the pur-
pose of the selection of the number of clusters. Coupling stability estimates with a reference stability of a null model enables the selection of the number of cluster without the need to define stability threshold, which can be problematic in real data. The utility of OB stability is demonstrated on simulation and real data at the level of the observation, cluster and as an overall measure. Subsampling is also examined as an alternative approach and performs similarly to OB estimation. Finally, i-
n similar spirit to the gap statistic, we show that contrasting the OB stability profiles of the data and reference distributions performs well when benchmarked against other competing methods. These methods are implemented in an open-source R package bootcluster. This paper is organized as follows. In Section 2.1, we motivate the ideas of stability and define similarity across clustering that will be used in the stability estimation. In Section 2.2, we describe WS stability [39], and in Section 2-
.3, OB stability estimation is introduced. In Section 2.4, we introduce a framework for stability-based model selection. Finally, Section 2.4 outlines a range of simulation experiments, and applications to three real datasets, for benchmarking stability methods. Results are shown in Section 3 and discussed in the context of the literature in Section 4.
2 METHODS
2.1 Defining the similarity between clusterings
The similarity between clusterings must first be defined in order to assess stability. We begin by defining the measures of similarity between two clusterings based on the co-membership of points xi and xj to a given cluster. Our approach will utilize a Jaccard similarity of co-memberships, although other measures to compare co-membership changes could be utilized in this context. Following Yu et al. [39], we denote  and  as two different clusterings (partitions) of the data, X0 ∈ RN×p. Denote x-
i ∼ xj, when xi and xj belong to the same cluster of , and xi ≁ xj otherwise. We define the similarity at the level of the individual observation, xi, as a function of how well the pair-wise co-membership of observation xi with other observations xj is preserved between the two clusterings:
Sim (xi, , ) =
N ∑
j=1,j≠i
I (xi ∼ xj
) I (xi ∼ xj
) + I (xi ≁ xj
) I (xi ≁ xj
)
N − 1 , (1)
where I(⋅) is an indicator function that takes on the value of 1 if the expression is true, and 0 otherwise. Note that the first term expresses the true positives (xi and xj cluster together in both  and ) and the second term represents the true negatives (xi and xj cluster together in both  and ). We define the similarity between two different clusterings  and  as the average observation-level similarity:
Sim(, ) =
N ∑
i=1
N ∑
j=1,j≠i
I (xi ∼ xj
) I (xi ∼ xj
) + I (xi ≁ xj
) I (xi ≁ xj
)
N(N − 1) ,
or equivalently:
Sim(, ) = 1
N
N ∑
i=1
Sim (xi, , ) . (2)
For two observations xi and xj, i ≠ j, their cluster membership in different clusterings  and  can be comprehensively described by the following equation:
I (xi ∼ xj
) I (xi ∼ xj
) + I (xi ∼ xj
) I (xi ≁ xj
)
+ I (xi ≁ xj
) I (xi ∼ xj
) + I (xi ≁ xj
) I (xi ≁ xj
) = 1.

4 LIU et al.
Since xi has exactly one cluster assignment, if follows that:
N−1=
N ∑
j=1,j≠i
{I (xi ∼ xj
) I (xi ∼ xj
)
+ I (xi ∼ xj
) I (xi ≁ xj
)
+ I (xi ≁ xj
) I (xi ∼ xj
)
+ I (xi ≁ xj
) I (xi ≁ xj
)} .
Therefore, Sim (xi, , ) in Equation 1 can be expressed as:
Sim (xi, , )
=
N ∑
j=1,j≠i
{I (xi ∼ xj
) I (xi ∼ xj
) + I (xi ≁ xj
) I (xi ≁ xj
)}
⋅
[ N ∑
j=1,j≠i
{I (xi ∼ xj
) I (xi ∼ xj
) + I (xi ∼ xj
) I (xi ≁ xj
)
+ I (xi ≁ xj
) I (xi ∼ xj
) + I (xi ≁ xj
) I (xi ≁ xj
)]−1
.
Note that the term I (xi ≁ xj
) I (xi ≁ xj
) can be large and easily dominating when there are a moderate to large number of clusters in the data. To avoid this, we drop the term and revise Sim (xi, , ) as follows:
A (xi, , ) =
N ∑
j=1,j≠i
I (xi ∼ xj
) I (xi ∼ xj
)
[
N ∑
j=1,j≠i
{I (xi ∼ xj
) I (xi ∼ xj
)
+ I (xi ∼ xj
) I (xi ≁ xj
)
+ I (xi ≁ xj
) I (xi ∼ xj
)}]−1
= | (xi) ∩  (xi) | − 1
| (xi) ∪  (xi) | − 1 ≈ | (xi) ∩  (xi) |
| (xi) ∪  (xi) |
= Jaccard ( (xi) ,  (xi)) , (3)
where  (xi) and denote the cluster that contains xi in clusterings  and , respectively. Note that the −1 after the second equal sign on both the numerator and the denominator follows from j ≠ i in the summation. Equation 3 defines the observational level stability between two clusterings,  and  underlying our stability calculations. An alternative to the overall similarity (Equation 2) can be expressed as the average observation level similarity:
A(, ) = 1
N
N ∑
i=1
A (xi, , ) . (4)
2.2 Whole set stability estimation
Stability estimation utilizes bootstrap resampling of a dataset. Let X0 ∈ RN×p be the data that we are interested in clustering. For simplicity, we assume that k-means is the clustering algorithm [30], although further generalizations can be made. Without loss of generality, assume that we want to cluster the N observations. Using a nonparametric bootstrap, these data are resampled with replacement [12] to produce a bootstrap replication that is the same size as the original data, Xb ∈ RN×p, for b-
 = 1, 2, ... , B. In this work, for each of these bootstrap replicates, we define a subset, Xb
ob ⊂ X0, where
Xb
ob = X0∖Xb represent the observations that were not picked up in the resampling. Note the difference in dimensionality, Xb ∈ RN×p, is the same size as the data and contains repetitions due to sampling with replacement. For our purposes, Xb can be viewed as the learning/training set for the clustering, and in k-means, the repetitions of observations directly impact the mean estimates of the cluster centers. Whereas, the OB data, Xb
ob, represents a smaller subsample of observations that were not picked up in the bootstrap. The bootstrap data and OB data will play the role of training and testing in a validation framework for cluster stability that is analogous to their role in ensemble methods for classification and regression [8]. We denote b as the clustering of the bth resampled dataset, and b
ob as the clustering corresponding to the OB data not picked up in the bth resampling. When a bootstrapped dataset is clustered, the cluster memberships, b, are only assigned to the observations picked up in the resampling. However, every observation in the original dataset needs a membership in order to be directly compared with the original data clustering, 0. In this setting, projections on the bootstrapped cluster centers are used as an alternative. Let the k cluster centers for the bth resa-
mpled dataset be defined as Mb =
{mb1 , mb2 , ... , mbk
}. Note that these means are estimated directly from the bootstrapped samples. Consequently, by the nature of the sampling, there will be observations resampled from X0 that contribute multiple times to the estimate of Mb, and observations not picked up in the resampling do not contribute at all. In Yu et al. [39], the stability depends on the projection of each observation onto the bootstrapped centers Mb. Specifically, for the bth resampled data, the cluster memberships for each observation xi ∈-
 X0 is obtained through the remapping:
b (xi ∈ X0) = argmin
j∈(1,2, ... ,k)
∥ mbj − xi ∥ . (5)
Note that the remapping in Equation 5 is necessary to compute the quantities in Section 2.1. This is because there has

LIU et al. 5
(A) Whole Set Stability
Data (X)
Xb1
Xob
b1 ...................
Data (X)
Xb1 Xb2 XbB
.............
CX->M
C
(B) Out-of-bag Stability
0
XbB
Xob
bB
Cob->M
bB
compared
bB
b2 b2
CXb1->Mb1 CXb-B>MbB
M
bB
M
b2
M
b1 M b1
CX->Mb1
M
b1 ob
C
b1 ob
C
ob->Mb1
b1
M
bB ob
C
bB ob
M
bB
CXb -B>MbB
compared
−1
0
1
2
−2 −1 0 1
x
y
(C) Whole Set Stability
−1
0
1
2
−2 −1 0 1
x
y
Cluster 1 2 3
(D) Out-of-bag data --> bootstrapped centers (E) Out-of-bag data clustered
−1
0
1
2
−2 −1 0 1
x
y
Xob
b Mb Cob->M
bb
Xob
b Mb
ob
C
b ob
Cluster 1 2 3
Cluster 1 2 3
membership change
membership change
X C0 CXb->Mb2
XX
Xb
F I G U R E 1 A schematic of stability estimation. (A) Whole set stability estimation depends on bootstrap replications of the data, which are clustered using k-means. The original data, X, are mapped to the bootstrapped centers to obtain cluster memberships for all of the observations. Stability measures are calculated from the co-membership changes that occur when comparing the original clustering of the data to the bootstrap clustering assignments. (B) Out-of-bag stability measures are derived -
by comparing co-membership changes between clusterings of OB samples (red paths). Specifically, cluster assignments from OB samples mapped to bootstrapped centers, and cluster assignments from clustering OB data. (C) For a simulated three-cluster model, the cluster memberships are shown with bootstrapped centers are indicated as squares. (D) The OB points mapped to the bootstrapped centers. (E) The OB points are clustered on their own. The membership change of points on the cluster boundaries are -
indicated
to be a 1:1 correspondence between observations used in the original data clusterings, and each bootstrap replication, in order to compute Jaccard coefficients. The comparisons used for WS stability are depicted in Figure 1A and are fully defined in Yu et al. [39]. We briefly introduce some important notations here as follows. The WS observations level stability is defined as follows:
Sowbss (xi) = 1
B
B ∑
b=1
A (xi, 0, b (xi ∈ X0)) . (6)
WS cluster-level stability is defined as:
Sclust
ws (j) = 1
|nj |
∑
xi ∈ 0
j
Sowbss (xi) , j ∈ (1, 2, ... , k), (7)
where ||nj|| is the number of observations in cluster 0
j.
2.3 Out-of-bag stability estimation
OB stability estimation requires the extension of these stability measures using alternative projections that delineate between the bootstrapped data (resampled), xi ∈ Xb, and OB observations, xi ∉ Xb. Note that we are intentionally avoiding the term in bag, as we are referring to the entire bootstrapped dataset, including replications, in the algorithm. We define b as the clustering of the bootstrapped data, and b
ob as the clustering of the OB data.
Let Mb
ob =
{
mb1
ob, mb2
ob, ... , mbk
ob
}
be the centers obtained
from clustering the OB observations. The new OB stability measure relies on the projection of the OB observations, xi ∉ Xb, to the centers from the bootstrapped data and the centers from the OB data, Mb and Mb
ob,
respectively. Mathematically, we define the mapping as follows:

6 LIU et al.
b
ob→Mb
(xi ∉ Xb) = argmin
j∈(1,2, ... ,k)
∥ mbj − xi ∥, (8)
b
ob→Mb
ob
(xi ∉ Xb) = argmin
j∈(1,2, ... ,k)
∥ mbj
ob − xi ∥ . (9)
Intuitively, the mapping is depicted in Figure 1B with an example of the consequences of this mapping in Figure 1C–E. Cluster assignments made for WS stability rely on projecting all of the data back onto the bootstrap centers for comparison to a reference set (Figure 1A,C). Estimation relies on the projection of only the OB points onto the bootstrapped centers (Equation 8, Figure 1D), and the projections that arise from clustering points (Equation 9, Figure 1E). The comparisons are made by compar-
ing these projections (Figure 1D,E) that have two identified points that disagree in cluster assignment, which would not be utilized with WS stability (Figure 1C). From these general stability measures we can define observation stability for an OB observation, xi ∉ Xb at the bth bootstrap be defined as follows:
Sobs
ob
(xi ∉ Xb)
b=A
(
xi, b
ob→Mb , b
ob→Mb
ob
)
. (10)
Note that an observation xi ∈ X0, it is likely to be picked up in a bootstrapped dataset with a probability of approximately 2∕3 [12]. Thus, each observation will appear in approximately 1∕3 of the OB samples. The number of observations that have OB stability defined in Equation 10 will thereby vary over the bootstrap iterations. Let the OB observation stability be defined by the average:
Sobs
ob (xi) = 1
Z
B ∑
j=1
I (xi ∉ Xb) ⋅ (Sobs
ob (xi))
j , (11)
where Z = |∑B
j=1I (xi ∉ Xb) | is the total number of instances out of the B bootstrap experiments that xi appeared in the OB set, and I(⋅) is an indicator function with a value of 1 when xi is OB, and 0 otherwise. The OB overall stability is simply the average over the sample:
Soverall
ob = 1
N
N ∑
k=1
Sobs
ob (xk) . (12)
In contrast to Yu et al. [39], our definitions of OB stability are not conditional on the original data clustering, C0. At the observation level, we are measuring how well OB points are able to retain their pairwise cluster relationships when remapped to the bootstrapped centers. The overall stability simply captures the average
OB stability across all observations. Therefore, we sidestep the need to compare to a reference clustering of the original dataset. However, this information can still be captured at the cluster level, by aggregating observation level OB stability over the original data clusterings as follows:
Sclust
ob (j) = 1
|nj |
∑
xi ∈C0
j
Sobs
ob (xi) , for j ∈ {1, 2, ... , k}, (13)
where C0
j is the jth cluster in C0 and nj is the number of
observations in the cluster C0
j.
2.4 Model selection
Stability can also be used to provide guidance in the selection of the number of clusters in a dataset, a longstanding challenge in the area of unsupervised learning. Specifically, by examining stability over a range of k values, we can assemble a stability profile that can be used for model selection. The model selection procedure can be applied to both WS and OB estimates of stability. Our approach is, for each k, to compare the minimum cluster stability of the data to the minimum cluster stabil-
ity of a reference dataset that contains no organized structure. Specifically, at each value, k, we define:
Smin
ob (k) = min
j=1,2, ... ,k
(Sclust
ob (j)) , (14)
Swmsin(k) = min
j=1,2, ... ,k
(Sclust
ws (j)) . (15)
The rationale for using the minimum follows from similar estimates within frameworks for model selection in clustering [33, 34, 39]. Specifically, when the stability is estimated from the optimal k to k + 1, we expect that at least one of the k stable clusters will be divided into two unstable clusters, where we should get a rather low estimate of cluster-level stability. This phenomenon would be problematic in an averaging setting, especially for larger k values. On the other hand, the minimum cl-
uster stability values avoid this issue in construction of the stability profile. Following Tibshirani et al. [35], for a given dataset, reference data, Xref ∈ RN×p, are generated from a uniform distribution on each of its dimension’s range, that is, Xref
i∼
U [ai, bi
] if range (X0
i
) = [ai, bi
]. Several reference datasets are generated, and stability estimates are obtained for each value of k considered in the stability profile. These estimates will give insights into what a baseline stability value would be for a given k on a dataset with no structure. We denote ̃Smin
ob (k) and ̃Swmsin(k) as the corresponding minimum

LIU et al. 7
cluster stability of a reference dataset, Xref
i ∈ RN×p, for a given k. A stable clustering will have a high stability, and a large difference between Smin
ob and the average minimum cluster stability over a set of R reference datasets. The estimates used for model selection are defined as:
SΔ
ob(k) = Smin
ob (k) − 1
R
R ∑
i=1
̃Smin
ob (k)i, (16)
SΔws(k) = Swmsin(k) − 1
R
R ∑
i=1
̃Swmsin(k)i, (17)
where the reference set means can be viewed as an approx
imation of the expectations, E
[̃Smin
ob
]
and E
[̃Swmsin
]
[34].
A parsimonious approach to model selection is to avoid selecting a more complex model that is only marginally better than simpler one. Adopting a one standard error rule will help safeguard against the selection of overly complex structures with only marginal gains in stability. By selecting the maximum SΔ
ob(k + 1) that is at least one standard
error away from SΔ
ob(k), we can detect where the differences between the stability profile for the data, and the stability profile for the reference data differ the most, and are substantial in their differences than the next most complex model. Following Tibshirani and Walther [34], we define the selection criteria as follows:
SΔ
ob(k) ≥ SΔ
ob(k + 1) + seob(k + 1), (18)
SΔws(k) ≥ SΔws(k + 1) + sews(k + 1), (19)
where se∗(k + 1) is the standard error of the corresponding R reference ̃S∗min(k + 1), and “*” denotes OB and WS stability. We utilize the one standard error rule, but one can tune this parameter to favor more complex or simpler models by decreasing or increasing this value, respectively. Algorithm 2 details the OB stability profile generation for the selection of the number of k clusters. Since comparisons must be made between S∗Δ(k) to the S∗Δ(k + 1), Algorithm 2 calculates stability estimates u-
p to kmax + 1.
Algorithms 1 and 2 are available in the R package bootcluster on the Comprehensive R Archive Network (CRAN). The package also includes a subsampling option for stability calculations.
2.5 Applications to simulation and real data
We applied our algorithm to both simulated and real data. A total of 50 simulations were performed for each experimental setup described below. In each of these simulations, the performance of OB and WS stabilities Yu et al.
Algorithm 1. Out-of-bag stability estimation
Input:
X0 ∈ RN×p - original dataset k - number of clusters considered B - number of bootstrap experiments executed
Beginning of the Algorithm:
Cluster X0 to obtain 0 the reference cluster membership
for b = 1 to B do
Generate bootstrap data, Xb ∈ RN×p, and extract out-of-bag dataset Xb
ob
Cluster Xb and obtain clusters centers Mb Cluster Xb
ob and obtain out-of-bag cluster centers Mb
ob,
b
ob−→Mb (xi ∉ Xb), ∀xi ∉ Xb Equation 8 - Project Xb
ob
onto bootstrap centers Mb to obtain membership
b
ob−→Mb
ob
(xi ∉ Xb), ∀xi ∉ Xb Equation 9 -Project Xb
ob
onto out-of-bag centers Mb
ob to obtain membership
Sobs
ob (xi)b - observation level stability by Equation 10 end for
Calculate Sobs
ob - Out-of-bag observation level stability by Equation 11 Calculate Sclust
ob - Out-of-bag cluster level stability by Equation 13 Calculate Soverall
ob - Out-of-bag overall stability by Equation 12
Output:
0 - Reference cluster membership
Sobs
ob - Out-of-bag observation level stability
Sclust
ob - Out-of-bag cluster level stability
Soverall
ob - Out-of-bag overall stability
[39] was examined at the observation level and for the selection of the correct number of clusters. For model selection, the use of reference distributions is described in Section 2.4. OB and WS stabilities were benchmarked against the prediction strength method [34], and an alternative bootstrap procedure, which we denote as Fang2012 [13]. Reference set stability estimates were obtained using five reference sets that were randomly generated uniformly for each simulation using the range of the ind-
ividual variables in the data. Simulations follow the experimental setup in Tibshirani and Walther [34].
Simulation 1. Null uniform model: 200 points were generated from a uniform distribution U(0, 1) in 10 dimensions.
Simulation 2. Null Gaussian model: 200 points were generated from a multivariate normal distribution N(0, 10 ⋅ I) in 10 dimensions.

8 LIU et al.
Algorithm 2. Out-of-bag stability profile for k-selection
Input:
X0 ∈ RN×p - original dataset kmax ∈ Z+ - max number of clusters considered R - number of reference datasets generated B - number of bootstrap experiments executed
Beginning of the Algorithm: for k = 2 to kmax + 1 do Apply Algorithm 1 to cluster X0 into k clusters and B bootstrap replicates end for for i = 1 to R do
Generate reference dataset Xref ∈ RN×p for k = 2 to kmax + 1 do Apply Algorithm 1 to cluster Xref into k clusters with B bootstrap replicates Calculate ̃Smin
ob (k)i - stability of the null reference data by Equation 14 Calculate SΔ
ob(k) - contrast of stability in the data with a null reference by Equation 16 end for end for
Find optimal k by choosing the SΔ
ob(k) by Equation 18
Output: SΔ
ob profile for all k kopt - Optimal k
End of the Algorithm
Simulation 3. Three-cluster model: Three two-dimensional clusters with 25, 25, and 50 standard normal observations per group, centered at (0, 0), (0, 5), and (5, −3).
Simulation 4. Random four clusters in three dimensions: Four clusters were randomly generated to have 25 or 50 multivariate normal observations with the covariance matrix as the identity matrix I. The cluster centers were randomly chosen from N(0, 5 ⋅ I). Experiments where generated clusters have distance less than 1.0 units between them were discarded.
Simulation 5. Random four clusters in 10 dimensions: Four clusters were randomly generated to have 25 or 50 multivariate normal observations with the covariance matrix as the identity matrix I. The cluster centers were randomly chosen from N(0, 5 ⋅ I). Experiments where generated clusters have distance less than 1.0 units between them were discarded.
Simulation 6. Three elongated clusters in a line: Three elongated three-dimensional clusters were simulated.
Each cluster is generated as follows: set x1 = x2 = x3 = t with t taking on 100 equally spaced values from −0.5 to 0.5 with Gaussian noise ∼ N(0,0.1 ⋅ I) was then added to each feature. A second and a third clusters are generated in the same way, except that the value 10 and 20 are then added to each feature. The result is three elongated clusters, stretching out along the main diagonal of a three-dimensional cube.
Simulation 7. Three close elongated clusters in a line: Three close and elongated clusters were simulated in three dimensions. As in Simulation 6, a second and third clusters are generated in the same way as the first cluster. The values of 1.3 and 2.6 were then added to the features.
We also applied our algorithm to four datasets that are available on the UCI machine learning repository [2], with various complexities: the iris data, wine data, NCI60 microarray data and image segmentation data. Each of these well studied datasets has labels, which were not used for the clustering. The iris data have 150 observations, 4 variables, and 3 classes. The wine data have 178 observations, 13 variables, and 3 classes. The NCI60 human tumor cell lines microarray data contains 64 samples -
each with 6830 gene expression variables measured from 12 different cancers. The image segmentation dataset has 2100 observations, 19 variables, and 7 classes, each class with 300 samples. For the NCI data, we used the first two principal components to analyze the clusters, which captures 23% of the variation. For each dataset, WS stability [39] and OB stability were estimated, along with prediction strength [34] and Fang2012 [13], over a range of k values. Note that the implementation of predicti-
on strength in the R package fpc [19] varies slightly from the original methodology [34], implementing subsampling with a 50%/50% split ratio.
3 RESULTS
In simulations, the observation level stability for OB estimates (Figure 2A) and WS estimates (Figure 2B) differ in values, but generally agree on points near the cluster boundary as more unstable. In this example, it is apparent that WS is exceeds the OB stability values (Figure 2C) and this is consistent across different k values (Figure 2D). The trend is notably the same in terms of k = 3 as the max, followed by a downward trend for larger k values. In fact, since the other summary measures are-
 a function of stability at the observation level, these systematic differences are seen across all estimates. In terms of model selection, the guidelines provided in Tibshirani and Walther [34] of a 0.8 − 0.9 stability threshold based on empirical results worked well with Yu et al. [39]. However, OB stability will

LIU et al. 9
−2
−1
0
1
−2 −1 0 1 2
y
0.00
0.25
0.50
0.75
1.00
WS stability
(B) Observation stability – whole set
−2
−1
0
1
−2 −1 0 1 2
y
0.00
0.25
0.50
0.75
1.00
OB stability
cluster 1
2
3
4
(A) Observation stability – out of bag
cluster 1
2
3
4
0.4
0.6
0.8
1.0
234567
Obs
Stability WS OOB
(D) Observation stability over a range of “k”
x
k
x
−2
−1
0
1
−2 −1 0 1 2 x
y
0.05
0.10
0.15
0.20
WS − OB stability cluster
1
2
3
4
(C) Observation stability difference: WS-OB
0.25
0.50
0.75
Smin
0.2
0.3
0.4
0.5
Delta Smin
(E) Smin profiles for bootstrapped data and references
0.1
(F) Delta Smin profiles for (bootstrapped – reference)
2 3 4 5 67 k
2 34 56 7 k
WS Smin OB Smin WS ref Smin OB ref Smin
WS del_Smin OB del_Smin
F I G U R E 2 Observation stability estimates from a single simulation of three clusters, one well separated and two overlapping. (A) Out-of-bag observation level stability is shown on a color-scale. (B) Whole set observation level stability is show on the same color-scale. (C) Differences between whole set and OB observation stability. (D) Box plots of the observation level stability for WS stability and OB stability for a range of k shows that OB is consistently more lower. (E) Stability profile-
 of Swmsin(k), Smin
ob (k), and the corresponding null reference set stability profile. (F) The differences between the two sets of stability profiles

10 LIU et al.
Stability Metric Out−of−bag Subsample 0.25 Subsample 0.30 Subsample 0.40
Subsample 0.50 Subsample 0.60 Subsample 0.70 Subsample 0.75 Whole Set
Stability Metric Out−of−bag Subsample 0.25 Subsample 0.30 Subsample 0.40
Subsample 0.50 Subsample 0.60 Subsample 0.70 Subsample 0.75 Whole Set
(A) Observation level stability for differet resampling approaches: seven-cluster model Small Sample Size (N=20 obs/cluster)
(B) Observation level stability for differet resampling approaches: seven-cluster model Small Sample Size (N=500 obs/cluster)
2 3 4 5 6 7 8 9 10 Number of Clusters
Observation level stability
0.25
0.50
0.75
1.00
2 3 4 5 6 7 8 9 10 Number of Clusters
Observation level stability
0.25
0.50
0.75
1.00
0
5
10
0 5 10 15
x
y
−0.02
0.00
0.02
0.04
0.06
cluster 1 2 3 4 5 6 7
(C) Observation level: OB – Subsampling (size = 0.50) Small Sample Size (N=20 obs/cluster)
0.2
cluster 1 2 3 4 5 6 7
0 5 10 15
x
0
5
10
y
(D) Observation level: Whole Set – OB (size = 0.50) Small Sample Size (N=20 obs/cluster)
0.1
0.2
0.3
0 5 10 15
x
0
5
10
y
cluster 1 2 3 4 5 6 7
(E) Observation level: Whole Set – Subsample (size = 0.50) Small Sample Size (N=20 obs/cluster)
F I G U R E 3 Observation stability based on bootstrapping, subsampling with different training set sizes and whole-set stability. Boxplots of observation stability over a range of k when (A) N = 140 (20 obs/cluster) and (B) N = 3500 (500 obs/cluster). The mean values are also indicated as a white circle. The bars are ordered from left to right as: OB, subsample ratios: 0.25, 0.40, 0.50, 0.60, 0.70, 0.75, and whole set stability. (C) Differences in observation stability for N = 140 and k = 7 betwe-
en OB and subsampling (sampling ratio = 0.50), (D) whole set and OB, and (E) whole set and subsampling (sampling ratio = 0.50)
likely not achieve such a large value (Figure 2D). However, using the reference set criteria, both WS and OB are able to select the correct number of clusters (Figure 2E,F), showing maximum deviation from the reference at k = 3. Subsampling Politis et al. [29] was also implemented and compared to WS and OB stabilities. Subsampling draws subsets of observations from the data without replacement to produce a collection of random subsamples of the data with smaller dimension, r < N. The sampling rati-
o is simply the proportion of observations randomly selected for each subsample (r∕N). Results from subsampling with different sampling ratios were compared to OB and WS stabilities. Observation level stability results for a seven-cluster model are shown in Figure 3 for small sample size (N = 20 observations/cluster) and
larger sample size (N = 500 observations/cluster). Overall, OB stability was comparable to most subsampling results using different split ratios, and both OOB and subsampling were lower than WS. In smaller sample sizes with complex structure (Figure 3A), the stability was more sensitive to the split ratio for subsampling. For example, the 25%/75% split ratio was lower, and as the split ratio progresses to the other end of the spectrum 75%/25%, observation stability, on average, tends to increase. -
This trend becomes more apparent as k increases, with lower observational stability when there is insufficient support in the training set. When there are sufficient sample sizes to support the complex structure (Figure 3B), this trend subsides, and the observation level stabilities are less sensitive to the subsampling ratio. For a smaller sample size, the differences in observation level stabilities between subsampling (50%/50%)

LIU et al. 11
and OB are shown to have rather uniform and negligible differences in the clusters (Figure 3C), and uniform and strong differences between OB and WS (Figure 3D) and subsampling and WS (Figure 3E). Novel stability measures based on OB stability estimation were benchmarked against competing state-of-the-art methods on a range of simulations and real datasets. Model selection results for the 7 different simulation settings are shown for 50 simulations per setting in Table 1. Overall, when structure i-
s present, OB stability tends to underestimate k when it is inaccurate, and this is corrected when used in connection with a reference distribution for model selection (Table 1). For data with no structure (Table 1, null models), OB and WS stability measures [39] performed well when contrasted to the stability estimates of reference datasets with no structure. This indicates that the differences between the reference sets and the simulation are consistently negligible across a range of k values. A-
ll methods performed well, with the exception of Fang2012 [13], which consistently severely overestimated the number of clusters in both the null uniform model and the null Gaussian model. In the three-cluster model, prediction strength [34] performed exceptionally well, identifying 3 clusters 48 out of 50 times. WS was able to pick the right number of clusters 43 times with a threshold of 0.8. However, using only WS-ref failed 50 times in the prediction of the right number of clusters. Use of the-
 one standard error rule corrected this issue (WS-ref + SE), and we were able to predict the right number of clusters 42 times, which was similar to the performance of WS stability. Note that because OB was consistently lower than WS, the use of a predefined threshold for k-selection would have to be lowered and user-defined. Therefore, there was no OB model selection option shown without adjustment with a reference set (Table 1). In the three-cluster model, OB stability minus the reference stabil-
ity scheme also failed in all 50 simulations. However, when the standard error was taken into account (OB-ref + SE), OB was able to predict k = 3 in all 50 simulations. Of the other bootstrapping approaches, Fang2012 predicted two clusters consistently. Results suggested that Fang2012 may also benefit from an adjustment using stability estimates from reference distribution, as the other bootstrapping approaches showed improvements. We also increased the sample sizes (data not shown), and the resul-
ts were consistent throughout. In the random four-cluster models, in both 3 and 10 dimensions, the results varied widely (Table 1). Prediction strength consistently performs well, while Fang2012 predictions are spread over different ks. WS was fairly robust with 44 out of 50 accurately estimated. Similar to the previous simulation, leveraging the stability of the reference distribution using the one standard error rule improved the
T A B L E 1 Comparison of the number of clusters selected in 50 simulations across different experiments
Estimation of number of clusters
Method 1 2 3 4 5 6 ≥ 7
Null uniform model
Pred str 50* 0 0 0 0 0 0
Fang2012 0* 0 0 0 0 0 50
WS 50* 0 0 0 0 0 0
WS-ref 50* 0 0 0 0 0 0
WS-ref + SE 50* 0 0 0 0 0 0
OB-ref 50* 0 0 0 0 0 0
OB-ref + SE 50* 0 0 0 0 0 0
Null Gaussian model
Pred str 50* 0 0 0 0 0 0
Fang2012 0* 0 0 0 0 0 50
WS 50* 0 0 0 0 0 0
WS-ref 1* 14 21 3 6 3 2
WS-ref + SE 50* 0 0 0 0 0 0
OB-ref 0* 20 3 1 26 0 0
OB-ref + SE 50* 0 0 0 0 0 0
Three-cluster model
Pred str 0 0 48* 2 0 0 0
Fang2012 0 50 0* 0 0 0 0
WS 0 4 43* 3 0 0 0
WS-ref 0 50 0* 0 0 0 0
WS-ref + SE 0 0 42* 2 3 0 0
OB-ref 0 50 0* 0 0 0 0
OB-ref + SE 0 0 50* 0 0 0 0
Random four clusters in three dimensions
Pred str 0 1 0 49* 0 0 0
Fang2012 0 8 16 5* 8 8 5
WS 1 1 5 44* 0 0 0
WS-ref 0 2 34 14* 0 0 0
WS-ref + SE 0 1 4 39* 4 2 0
OB–ref 0 6 30 14* 0 0 0
OB-ref + SE 0 3 5 42* 0 0 0
Random four clusters in 10 dimensions
Pred str 0 0 1 49* 0 0 0
Fang2012 0 2 5 13* 27 2 1
WS 0 0 5 45* 0 0 0
WS-ref 0 0 4 42* 0 0 0
WS-ref + SE 0 1 4 44* 0 0 0

12 LIU et al.
T A B L E 1 (Continued)
Estimation of number of clusters
Method 1 2 3 4 5 6 ≥ 7
OB-ref 0 0 10 40* 0 0 0
OB-ref + SE 0 1 3 45* 1 0 0
Three elongated clusters
Pred str 0 0 50* 0 0 0 0
Fang2012 0 0 0* 0 0 3 47
WS 1 0 49* 0 0 0 0
WS-ref 0 0 48* 1 1 0 0
WS-ref + SE 0 1 42 1 7 0 0
OB-ref 0 0 50* 0 0 0 0
OB-ref + SE 0 0 50* 0 0 0 0
Three close elongated clusters
Pred str 0 0 50* 0 0 0 0
Fang2012 0 0 0* 0 0 0 50
WS 0 0 15* 0 0 35 0
WS-ref 0 0 50* 0 0 0 0
WS-ref + SE 0 0 49 0 0 1 0
OB-ref 0 0 50* 0 0 0 0
OB-ref + SE 0 0 50* 0 0 0 0
Abbreviations: OB, out-of-bag; WS, whole set. *The true number of clusters.
OB method’s performance. On the other hand, Fang2012 and WS adjusted by the reference tend to overestimate the number of clusters. The introduction of more dimensions is favorable for all methods across the board. This may be due in part to the added dimensions in the simulation that ultimately increased the distance between the centroids. In the simulations for three elongated clusters, every scheme performed well, except for Fang2012. There was also slight misspecification in WS when used in con-
nection with the reference distribution and standard error rule, with the correct k identified in 42 out of 50 simulations (Table 1).
When the centers are closer and the three close elongated clusters are not as well-separated, all methods performed well, except Fang2012 and WS. Three well-studied datasets with small number of clusters were also tested to determine if the original set of class labels could be recovered (Table 2). The wine data have three classes, and all methods identified the expected k. Three clusters were found in the NCI data by all methods. Although there are 12 different cancers in the data, these data hav-
e been repeatedly shown to have 3 clusters that are rather homogeneous with respect to cancer type [17, 22, 39]. The iris data contain three groups, two of which overlap, and one that is elongated. All methods incorrectly identified two clusters, with the exception of WS. The image dataset is more complex, prediction strength correctly identified seven clusters, WS and OB estimated eight. Fang2012 again came in high at 10. Figure 4 shows the stability profiles for the iris data (Figure 4A,B), NCI -
data (Figure 4C,D), the wine data (Figure 4E,F), and the image data (Figure 4G,H). Overall, these stability profiles for model selection mimic the performance that was observed in the simulations. The introduction of the reference stability with the standard error rule corrected many of the cluster misspecifications that would have been selected through the strict use of the maximum.
4 DISCUSSION
In this work, we developed novel stability estimates based on nonparametric bootstrap [12] that rely on OB observations [8]. This stability estimate can be interpreted at the level of the individual observation, the cluster, and as an overall measure of performance. Moreover, the stability framework can be used to select the optimal number of clusters, a major challenge in unsupervised learning. The introduction of null reference datasets enables a contrast between the cluster stability in the dat-
a for a given k, and the stability of unstructured data for the same k. The resulting novel OB stability profile enables the selection of k based on the maximum differences between k clusters in
T A B L E 2 Selection of the number of clusters with real data
Number of clusters detected
Data #Classes Pred str Fang2012 WS WS-ref WS-ref + SE OB-ref OB-ref + SE
Wine 3 3 3 3 3 3 3 3
Iris 3 2 2 3 2 2 2 2
NCI 12 3 3 3 3 3 3 3
Image 7 7 10 8 8 8 8 8
Abbreviations: OB, out-of-bag; WS, whole set.

LIU et al. 13
0.00
0.25
0.50
0.75
1.00
234567
Smin
(A) Iris data Smin profiles for bootstrapped and reference data
−0.2
−0.1
0
0.1
0.2
0.3
234567
Delta Smin
0.25
0.50
0.75
234567
Smin
0
0.2
0.4
0.6
234567
Delta Smin
0
0.25
0.50
0.75
234567
Smin
0.0
0.2
0.4
0.6
234567
Delta Smin
(C) NCI data Smin profiles for bootstrapped and reference data
(E) Wine data Smin profiles for bootstrapped and reference data
(B) Iris data delta Smin profiles for (bootstrapped – reference)
(D) NCI data delta Smin profiles for (bootstrapped – reference)
(F) Wine data delta Smin profiles for (bootstrapped – reference)
WS Smin OB Smin
WS Smin OB Smin
WS Smin OB Smin
WS Smin OB Smin WS ref Smin OB ref Smin
WS Smin OB Smin WS ref Smin OB ref Smin
WS Smin OB Smin WS ref Smin OB ref Smin
kk
kk
kk
0
0.80
Smin
0.60
0.40
0.20
0
2345
k
6 7 8 9 10
WS Smin OB Smin WS ref Smin OB ref Smin
(G) Image data Smin profiles for bootstrapped and reference data
234 5
k
6 7 8 9 10
(H) Image data delta Smin profiles for (bootstrapped – reference)
0
0.2
0.4
0.4
Delta Smin
WS Smin OB Smin
F I G U R E 4 Results for the iris data for (A) whole set and OB stability profiles, as well as null reference stabilities, and (B) the difference between the reference and bootstrapped profiles. Results for the NCI data for (C) whole set and OB stability profiles, as well as null reference stabilities, and (D) the difference between the reference and bootstrapped profiles. Results for the wine data for (E) whole set and OB stability profiles, as well as null reference stabilities, and (F) the dif-
ference between the reference and bootstrapped profiles. Results for the image data for (F) whole set and OB stability profiles, as well as null reference stabilities, and (G) the difference between the reference and bootstrapped profiles

14 LIU et al.
the data, and the stability of k clusters in a dataset with no structure. OB stability fuses ideas of resampling to a cluster validation framework. Alternative strategies, such as a single split of the data (e.g., 50%/50%) may be unfortunate in the sense that the split may be randomly generated in a way that does not capture the cluster structure. The results of using subsampling [29] instead of OB stability were similar in performance. Prediction strength [34] implementation in the fpc package [1-
9] also makes use of subsampling and OB stability performance was comparable. Taken together, we conclude that both resampling strategies are feasible options. Computationally, the only difference between OB stability and subsampling-based stability is the size of the learning set used to estimate the mean cluster centers. OB stability uses resampling with replacement to produce a bootstrap replication that the same size as the data, whereas subsampling utilizes a subset of the data as the learnin-
g set. In general, the repetition of samples may be problematic for some clustering methods such as hierarchical clustering, which rely on dissimilarity matrices and linkage. These issues could be potentially overcome by jittering through the addition of small amounts of noise [18]; but the value of the repeated samples is less obvious. Although we did not observe major differences between OB and subsampling, we did observe some sensitivity to the split ratio size that was more exaggerated when th-
e number of clusters was large and the sample size was smaller, indicating poor structural support. In supervised learning, Martínez-Muñoz and Suárez [27] show that the optimal choice of split ratio is data dependent, and they suggest the use of OB estimates of generalization error to tune this ratio. How the differences in subsampling and bootstrapping manifest in stability is unclear and will be a topic of future research. The WS stability estimation developed by Yu et al. [39] can also be inter-
preted at the level of the individual observation, the cluster and as an overall measure of performance. A shortcoming of the WS method is that in order to make the comparison between the data clustering and the bootstrapped data, all observations are remapped to the bootstrapped centers. Consequently, the same points that were used to estimate the centroids are then used in the stability calculation. This situation is analogous to issues that arise when using bootstrap to estimate generalization -
error in supervised learning [10]. OB stability circumvents this problem because it is not necessary to remap all of the observations, both in and OB, to the bootstrapped centers for a cluster assignment. The required remapping of points to clusters may also hinder the generalizability of a method. Although this remapping may be feasible in center-based approaches such as k-means, it is not in alternative methods, such as hierarchical clustering.
OB stability also have a remapping feature but could be easily generalized since the sets being compared for co-membership changes pertain only to the OB samples. Another feature of OB stability is it is not conditional on the original cluster assignment of the data. Comparatively, WS stability [39] uses the Jaccard coefficient to measure co-membership changes between the original data and the bootstrapped clusterings. WS stability estimates how well the original data clustering is preserved under-
 bootstrap replications. OB stability measures co-membership changes between the clusterings of the OB data and the clusterings of the OB data mapped to the bootstrap centers. Despite this difference, we show that the observation level OB stability can still be aggregated over the original cluster assignments to capture cluster-level stability, which is a major component of the stability profile for model selection and valuable for interpretation. From a practical standpoint, using a stability pro-
file to select the optimal number of clusters can be problematic because the stability range will vary from dataset to dataset, making the selection of a predefined threshold impractical, and the curve may not present an obvious elbow to guide in selection. Our approach utilizes a null reference distribution and bypasses the need to define a threshold on a stability value for the selection of k. Contrasting with a reference distribution has been used for unsupervised learning with bump-hunting [15-
], the gap statistic [35], and more recently, network module stability [33]. The gap statistic also contrasts with a reference distribution for model selection, but centers on contrasting the within cluster dissimilarity of the data with the within cluster dissimilarity of a null reference set. The gap statistic does not rely on a stability or difference threshold, but it is not without tuning. The selection is based on a standard error rule to ensure that the max gap statistic corresponding to k -
clusters is one standard error above the gap statistic for the less complex k − 1 cluster model. The standard error rule can be modified (e.g., 1.5SE, 2SE) as an option in the ClusGap() function within the cluster package [26] to allow for more complex or simplistic models. Our approach also utilizes the standard error rule and is thus not free of tuning. We also echo the guidance in [35] and emphasize that the standard error rule should be used in addition to visual inspection of the stability pr-
ofile, which may reveal additional characteristics of the clustering quality and guide in model selection. Our results show that connecting stability with a null reference set was not only effective for the OB estimation, but also improved model selection for the whole-set stability. It is possible that this threshold free approach can be connected with alternative bootstrap approaches to stability [9, 37] for the purpose of model selection. In addition to a uniform reference, alternative referenc-
e distributions

LIU et al. 15
could be explored to identify other deviations of interest as in Tibshirani et al. [35]. Resampling frameworks such as bootstrapping and subsampling have some limitations. Small datasets are challenging because the number OB samples for each bootstrap replication are approximately one third of the sample size. Clustering such few points may create a lot of variability in cluster memberships and the stability estimates. This is universally characteristic of clustering small datasets but is more pro-
minent with OB stability since OB sample can become too small to characterize the clusters well. This was also observed in subsampling cases where there are a larger number of clusters with lower support in terms of observations. Another consideration is that the stability estimation at the individual observation level will only be calculated from approximately one third of the bootstrap replications. In our applications, 500 bootstrap replications was sufficient, but this will vary according to d-
ata size and complexity. In conclusion, stability can be used as a measure of performance and reproducibility in clustering. Such measures are important when there is no gold-standard available. The framework for OB stability provides estimates of that can be interpreted at the level of the individual observation, the cluster and as an overall measure of performance. When coupled with null reference distributions, bootstrapped stability can be used effectively for model selection. Note that the k--
means algorithm was used in this work. The OB stability method can be easily extended to clustering methods with slight modification and will be a direction of future research. Implementation for k-means and hierarchical clustering is available in the bootcluster package in CRAN.
ACKNOWLEDGMENTS
Rachael Hageman Blair was supported by the National Science Foundation (DMS 1557589).
DATA AVAILABILITY STATEMENT Data derived from public domain resources.
ORCID
Han Yu https://orcid.org/0000-0001-6160-173X Rachael Hageman Blair https://orcid.org/0000-00018538-2447
REFERENCES
1. S. E. Akhanli and C. Hennig, Comparing clusterings and numbers of clusters by aggregation of calibrated clustering validity indexes, Stat. Comput. 30 (2020), no. 5, 1523–1544.
2. A. Asuncion and D. Newman, UCI machine learning repository, University of California, Irvine, California, 2007.
3. S. Ben-David and U. Von Luxburg, Relating clustering stability to properties of cluster boundaries, 21st Ann. Conf. Learn. Theor. (COLT 2008), Omnipress, Helsinki, Finland 2008, pp. 379–390. 4. S. Ben-David, U. Von Luxburg, and D. Pál, A sober look at clustering stability, Learning theory, Springer, New York, NY 2006, pp. 5–19. 5. A. Ben-Hur, A. Elisseeff, and I. Guyon, A stability based method for discovering structure in clustered data, Pac. Symp. Biocomput. 7 (2001), 6–17. 6. M. Bittner, P. -
Meltzer, Y. Chen, Y. Jiang, E. Seftor, M. Hendrix, M. Radmacher, R. Simon, Z. Yakhini, A. Ben-Dor, N. Sampas, E. Dougherty, E. Wang, F. Marincola, C. Gooden, J. Lueders, A. Glatfelter, P. Pollock, J. Carpten, E. Gillanders, D. Leja, K. Dietrich, C. Beaudry, M. Berens, D. Alberts, V. Sondak, N. Hayward, and J. Trent, Molecular classification of cutaneous malignant melanoma by gene expression profiling, Nature 406 (2000), 536–540. 7. M. Bramer, Clustering, Springer, London, 2007. 8. L. Breiman, Out--
of-bag estimation. Technical report, Statistics Department, University of California Berkeley, Berkeley CA, 1996.
9. S. Dudoit and J. Fridlyand, Bagging to improve the accuracy of a clustering procedure, Bioinformatics 19 (2003), no. 9, 1090–1099.
10. B. Efron and R. Tibshirani, Improvements on cross-validation: The 632+ bootstrap method, J. Am. Stat. Assoc. 92 (1997), no. 438, 548–560. 11. B. Efron and R. J. Tibshirani, An introduction to the bootstrap, CRC Press, USA, 1994. 12. B. Efron, E. Halloran, and S. Holmes, Bootstrap confidence levels for phylogenetic trees, Proc. Natl. Acad. Sci. 93 (1996), no. 23, 13429–13434.
13. Y. Fang and J. Wang, Selection of the number of clusters via the bootstrap, Comput. Stat. Data Anal. 56 (2012), 468–477.
14. J. Felsenstein, Confidence limits on phylogenies: An approach using the bootstrap, Evolution 39 (1985), 783–791. 15. J. H. Friedman and N. I. Fisher, Bump hunting in highdimensional data, Stat. Comput. 9 (1999), no. 2, 123–143. 16. M. Halkidi, M. Vazirgiannis, and C. Hennig, Methodindependent indices for cluster validation and estimating the number of clusters, Handbook of cluster analysis, Chapman and Hall/CRC, New York 2015, pp. 616–639. 17. T. Hastie, R. Tibshirani, and J. Friedman, The ele-
ments of statistical learning. Springer series in statistics, Springer New York Inc, New York, NY, 2001.
18. C. Hennig, Cluster-wise assessment of cluster stability, Comput. Stat. Data Anal. 52 (2007), no. 1, 258–271.
19. Hennig, C. (2019). fpc: Flexible procedures for clustering. R package version 2.2-3. 20. C. Hennig, M. Meila, F. Murtagh, and R. Rocci, Handbook of cluster analysis, CRC Press, Boca Raton, FL, 2015.
21. A. K. Jain and J. Moreau, Bootstrap technique in cluster analysis, Pattern Recogn. 20 (1987), no. 5, 547–568. 22. G. James, D. Witten, T. Hastie, and R. Tibshirani, An introduction to statistical learning, Vol 112, Springer, New York, NY 2013. 23. M. K. Kerr and G. A. Churchill, Bootstrapping cluster analysis: Assessing the reliability of conclusions from microarray experiments, Proc. Natl. Acad. Sci. 98 (2001), no. 16, 8961–8965.

16 LIU et al.
24. E. Levine and E. Domany, Resampling method for unsupervised estimation of cluster validity, Neural Comput. 13 (2003), no. 11, 2573-2593.
25. T. Liu, H. Yu, and R. Blair, Stability estimation for unsupervised clustering: A review, Wiley Interdiscip. Rev. Comput. Stat. (2022), e1575. 26. Maechler, M., Rousseeuw, P., Struyf, A., Hubert, M., and Hornik, K. (2022). cluster: Cluster analysis basics and extensions. R package version 2.1.3. 27. G. Martínez-Mu∼noz and A. Suárez, Out-of-bag estimation of the optimal sample size in bagging, Pattern Recogn. 43 (2010), no. 1, 143–152. 28. U. Maulik and S. Bandyopadhyay, Performance evaluation o-
f some clustering algorithms and validity indices, IEEE Trans. Pattern Anal. Mach. Intell. 24 (2002), no. 12, 1650–1654. 29. D. N. Politis, J. P. Romano, and M. Wolf, Subsampling, Springer Science & Business Media, Heidelberg, Germany, 1999.
30. L. Rokach and O. Maimon, Clustering methods, Data mining and knowledge discovery handbook, Springer, New York, NY, 2005, pp. 321–352.
31. P. J. Rousseeuw, Silhouettes: A graphical aid to the interpretation and validation of cluster analysis, J. Comput. Appl. Math. 20 (1987), 53–65.
32. M. Smolkin and D. Ghosh, Cluster stability scores for microarray data in cancer studies, BMC Bioinform. 36 (2003), no. 4, 892–895. 33. M. Tian, R. Hageman Blair, L. Mu, M. Bonner, R. Browne, and H. Yu, A framework for stability-based module detection in
correlation graphs, Stat. Anal. Data Mining ASA Data Sci. J. 14 (2021), no. 2, 129–143. 34. R. Tibshirani and G. Walther, Cluster validation by prediction strength, J. Comput. Graph. Stat. 14 (2005), no. 3, 511–528. 35. R. Tibshirani, G. Walther, and T. Hastie, Estimating the number of clusters in a data set via the gap statistic, J. Roy. Stat. Soc. Ser. B Stat. Methodol. 63 (2001), no. 2, 411–423.
36. U. Von Luxburg, Clustering stability: An overview, Found. Trends Mach. Learn. 2 (2009), no. 3, 235–274.
37. J. Wang, Consistent selection of the number of clusters via cross-validation, Biometrika 97 (2010), no. 4, 893–904.
38. M. J. Warrens, On the equivalence of Cohen’s kappa and the Hubert-Arabie adjusted Rand index, J. Classif. 25 (2008), no. 2, 177–183. 39. H. Yu, B. Chapman, A. Di Florio, E. Eischen, D. Gotz, M. Jacob, and R. Hageman Blair, Bootstrapping estimates of stability for clusters, observations and model selection, Comput. Stat. 34 (2019), no. 1, 349–372.
How to cite this article: T. Liu, H. Yu, and R. H. Blair, Out-of-bag stability estimation for
k-means clustering, Stat. Anal. Data Min.: ASA Data Sci. J. (2022), 1–16. https://doi.org/10.1002/sam. 11593

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:25.049Z
- **Text Length:** 63095 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
