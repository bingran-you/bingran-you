# PDF Document: Tang et al. - 2025 - Data Privatization in Vertical Federated Learning with Client-wise Missing Problem.pdf

**File Path:** Tang et al. - 2025 - Data Privatization in Vertical Federated Learning with Client-wise Missing Problem.pdf

**Processed Date:** 2026-02-10T18:14:45.103Z

**File Size:** 918.78 KB

**Total Pages:** 65

**Extracted Pages:** 65

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3398

**Title:** Data Privatization in Vertical Federated Learning with Client-wise Missing Problem

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Data Privatization in Vertical Federated Learning
with Client-wise Missing Problem
Huiyun Tang2, Long Feng3, Yang Li1,2, and Feifei Wang1,2∗
1 Center for Applied Statistics, Renmin University of China, Beijing, China;
2 School of Statistics, Renmin University of China, Beijing, China;
3 Department of Statistics & Actuarial Science, The University of Hong Kong, Hong Kong,
China.
Abstract
Vertical Federated Learning (VFL) often suffers from client-wise missingness, where entire feature blocks from some clients are unobserved, and conventional approaches are vulnerable to privacy leakage. We propose a Gaussian copulabased framework for VFL data privatization under missingness constraints, which requires no prior specification of downstream analysis tasks and imposes no restriction on the number of analyses. To privately estimate copula parameters, we introduce a debiased randomized -
response mechanism for correlation matrix estimation from perturbed ranks, together with a nonparametric privatized marginal estimation that yields consistent CDFs even under MAR. The proposed methods comprise VCDS for MCAR data, EVCDS for MAR data, and IEVCDS, which iteratively refines copula parameters to mitigate MAR-induced bias. Notably, EVCDS and IEVCDS also apply under MCAR, and the framework accommodates mixed data types, including discrete variables. Theoretically, we introduce the notion-
 of Vertical Distributed Attribute Differential Privacy (VDADP), tailored to the VFL setting, establish corresponding privacy and utility guarantees, and investigate the utility of privatized data for GLM coefficient estimation and variable selection. We further establish asymptotic properties including estimation and variable selection consistency for VFL-GLMs. Extensive simulations and a real-data application demonstrate the effectiveness of the proposed framework.
Keywords: Data Privatization; Differential Privacy; Gaussian Copula; Missing Values; Vertical Federated Learning
∗Corresponding author: feifei.wang@ruc.edu.cn
1
arXiv:2511.20876v1 [stat.ME] 25 Nov 2025

1. INTRODUCTION
As vast quantities of sensitive data are collected and maintained in a distributed
fashion, extracting accurate statistical insights while mitigating the risk of privacy
breaches has become a paramount concern. Federated learning (FL) (Kairouz et al.,
2021) has emerged as a compelling paradigm that facilitates collaborative model train
ing across distributed data sources while preserving privacy and data security. Our
research focuses on Vertical Federated Learning (VFL), a specialized category of fed
erated learning in which data holders share the same set of samples but possess non
overlapping subsets of covariates (Liu et al., 2024). Such setting appears in many
real applications, where the information describing an individual is collected and held
by different entities. For example, a person’s medical records are sensitive personal
information that can be held by several clinics. Additionally, in cross-silo collabora
tive scenarios, organizations or institutions such as banks, hospitals, and government
agencies, each holding small and fragmented datasets, are eager to seek data part
ners to jointly develop statistical or machine learning models, thereby enhancing data
utility. In VFL, since the participating entities are often reliable organizations which
have access to substantial computational resources and high-bandwidth communica
tion infrastructure, computational and communication constraints are generally not
the primary bottlenecks in these settings.
VFL employs a fundamentally different training architecture compared to the clas
sical FL framework, where data is partitioned by example. In VFL, it is typically
assumed that the response variable is held by one participant, and this particular
participant serves as the server which communicates with all the other participants
(commonly referred to as clients) to orchestrate the training procedure. Depending on
the specific training algorithm, clients exchange intermediate results rather than model
2

parameters to facilitate model training across different clients. The choice of training
algorithm is typically dictated by the underlying machine learning objective. Existing
approaches include decision trees (Fang et al., 2021), random forests (Liu et al., 2020),
linear regression and K-means clustering (Huang et al., 2022), the Cox proportional
hazards model (Dai et al., 2020), quantile regression (Fan et al., 2023), and neural
networks (Wang et al., 2023).
In Vertical Federated Learning (VFL), although clients can collaboratively perform
data analysis tasks without exposing their raw data, the training process requires fre
quent sharing and transmission of intermediate results, which poses privacy risks. In
particular, honest-but-curious participants may infer private information about other
clients by observing the training process. For instance, adversaries may reconstruct
portions of the original data from transmitted gradient information (Zhu et al., 2019),
or infer whether specific data samples originate from a particular client based on in
termediate results (Jin et al., 2021; Fu et al., 2022). A common approach to mitigate
privacy risks is incorporating Differential Privacy (DP) (Dwork, 2006) into the VFL
framework. In general, DP ensures that the released statistical analysis results do
not change much whether one particular record is present or absent in the underly
ing dataset, thereby preserving the sensitive information about the input data. DP
provides a rigorous mathematical formulation to quantify privacy loss and defines the
probability bounds on privacy leakage in an algorithm. Due to its strong theoretical
guarantees and practical feasibility, DP has become one of the most widely adopted
privacy-preserving frameworks. It has also been deployed in real-world applications by
major industry leaders (Ding et al., 2017; Team, 2017; Abowd et al., 2020).
There are typically two streams of approaches about usage of DP in the context
of VFL. The first involves designing algorithms that satisfy DP by introducing ran
3

domness or noise to obscure the influence of individual records on the output. For
instance, Hu et al. (2020) proposed a privacy-preserving ADMM algorithm for empir
ical risk minimization in VFL, where each client’s transmitted values are perturbed
with carefully calibrated Gaussian noise to ensure DP. Similarly, Wang et al. (2020)
developed a DP-based privacy-preserving stochastic gradient descent (SGD) algorithm
for learning generalized linear models (GLMs) from vertically partitioned data while
maintaining participant data confidentiality. Despite their simplicity, these methods
often suffer from degraded parameter estimation accuracy due to the added noise.
The second major approach involves generating privacy-preserving synthetic data.
Extensive research has been conducted on differentially private data release in central
ized settings, where all data reside on a single machine Zhang et al. (2024); Yang et al.
(2024a). However, synthesizing vertical data presents greater challenges, primarily due
to the difficulty of capturing dependencies between covariates across datasets held by
different clients.
Recently, studies on differentially private data construction under VFL have begun
to emerge, which can be broadly classified into two categories. The first category is
based on statistical modeling. Mohammed et al. (2013) introduced an early method for
releasing vertically partitioned data, utilizing a predefined attribute taxonomy tree as
publicly available information. However, this approach is limited to two-party scenarios
due to constraints imposed by the underlying cryptographic primitives. Tang et al.
(2019) extended this method by employing a latent tree model to approximate the
joint distribution of the integrated dataset, allowing it to handle a larger number
of attributes. Nevertheless, its applicability remains constrained, as it is designed
specifically for datasets with binary attributes and incurs significant communication
and computational overhead due to the complexity of the cryptographic protocol. More
4

recently, Zhao et al. (2024) proposed an approach based on a differentially private
Markov Random Field (MRF), where a central server reconstructs a global MRF to
capture correlations using locally shared MRFs and DP-protected sketches of client
data. However, this method remains constrained to datasets with discrete attributes,
limiting its broader applicability.
The second category leverages distributed generative adversarial networks (GANs)
for collaborative synthetic data generation in a vertical setting Jiang et al. (2023b);
Zhao et al. (2023). However, these GAN-based approaches struggle to capture de
pendencies among covariates across different clients. This limitation arises because
the local discriminators are trained independently on each client’s data, distinguishing
between real and synthetic local samples without direct interaction across datasets.
In addition to the limitations discussed above, a critical yet underexplored challenge
in VFL is client-wise missing data, a prevalent issue in real-world applications. This
occurs when certain clients entirely lack variable information for some samples due to
practical constraints in data collection. In VFL literature, samples with fully observed
covariates across all clients are referred to as aligned samples, and conventional VFL
methods typically assume their availability. However, in practice, as the number of
clients increases, it becomes more common for certain sources of information to be
completely missing for a subset of samples, leading to a large proportion of non-aligned
samples.
A straightforward approach to handling this issue is to discard non-aligned samples,
but doing so results in a significant loss of information and can introduce bias in
parameter estimation, ultimately degrading model performance. Thus, integrating
all available data while maintaining privacy constraints is crucial for improving VFL
effectiveness. Existing approaches in VFL literature primarily rely on deep learning
5

and transfer learning techniques to infer missing features or their representations (Yang
et al., 2022; Kang et al., 2022; Ren et al., 2022; He et al., 2024). While these methods
can enhance predictive accuracy, they generally lack model interpretability, and they
did not consider data privacy protection.
A similar concept in statistical literature is block-wise missing data, where cer
tain blocks of features are unavailable when integrating multi-source datasets. Several
approaches have been proposed to address this issue, including multiple block-wise
imputation (Xue and Qu, 2021), GAN-based synthesis (Fang and Bao, 2024), semi
supervised learning (Song et al., 2024; Li et al., 2024), and projected estimating equa
tions (Xue et al., 2025). However, these methods are designed for centralized settings,
where all data is aggregated on a single server, and thus are not directly applicable to
VFL, where privacy constraints prevent raw data sharing among clients.
Given the unique challenges posed by client-wise missing data, there is a pressing
need for principled solutions specifically tailored to VFL. An ideal approach should
effectively integrate fragmented data from multiple sources while balancing privacy
preservation, interpretability, and computational efficiency, ensuring both theoretical
soundness and practical feasibility in real-world applications.
2. METHODOLOGY
We propose a novel privacy-preserving framework tailored for the vertical federated
learning (VFL) paradigm, built upon the Gaussian copula model. At a high level,
assuming the variables in the original dataset follow a Gaussian copula model, synthetic
samples can be generated by first drawing new samples from the Gaussian copula
distribution and then mapping them to the original variables through the established
correspondence between the latent Gaussian variables and the original variables.
6

2.1 Problem Setup and Notation
We consider a vertical federated learning framework comprising K clients. Each client
(1 ≤ k ≤ K) possesses a distinct subset of covariates, denoted as Xk = {xki}N
i=1, for
a shared cohort of N subjects. Specifically, for each subject i, the covariate vector
xki ∈ Rpk represents the pk-dimensional feature set owned by client k. The complete
covariate profile of subject i is then given by xi ≜ (x1⊤
i , . . . , xK⊤
i )⊤ ∈ Rp, where p =
PK
k=1 pk. Consequently, the aggregated covariate matrix, constructed by concatenating
all clients’ feature sets, is expressed as X = (X1, . . . , XK) ∈ RN×p. Without loss of
generality, we assume that the response vector y ∈ RN is exclusively held by one of
the K clients, which consequently assumes the role of a central server, orchestrating
the overall model training process.
In addition, suppose the response variable is fully observed by the central server
for all subjects, while the covariates may be partially unavailable at the client level.
Specifically, for a given subject, the covariate subset held by a particular client may
be entirely missing. Define the missing indicator vector for each subject i as Mi =
(Mi1, . . . , MiK)⊤, where Mik = 1 if the pk-dimensional covariates from the k-th client
are missing and Mik = 0 otherwise. The overall missing data pattern across all subjects
is then represented by the matrix M = (M1, . . . , MN )⊤. Further define ∆i,obs and ∆i,mis
as the sets of clients for which the corresponding covariates are observed and missing,
respectively, for subject i. Formally, ∆i,obs = {1 ≤ k ≤ K : Mik = 0}, ∆i,mis = {1 ≤
k ≤ K : Mik = 1}. Accordingly, the covariate vector for subject i can be rewritten as
xi = (xi,obs, xi,mis), where xi,obs = (xk
i )k∈∆i,obs represents the observed covariates, and
xi,mis = (xk
i )k∈∆i,mis corresponds to the missing ones. Notably, the dimensions of xi,obs
and xi,mis generally vary across subjects.
Our primary objective is to generate privatized pseudo-complete data in the pres
7

ence of distributed multi-source covariates with client-specific missing observations. To
this end, we develop a synthetic data generation framework that ensures data privacy
using a copula-based model. Specifically, we first provide preliminaries on the tech
niques employed for data privatization in Section X. We then present the proposed
algorithms tailored for MCAR and MAR missing mechanisms in Sections X and X,
respectively.
2.2 Preliminary
Let the original dataset be denoted by X = (X0, X1, . . . , Xp), where X0 represents
the response variable Y . The covariates may be of mixed types, including continuous,
binomial, categorical, ordinal, and count variables. The procedure for handling discrete
variables is provided in the Supplementary Material. The Gaussian copula models the
(p + 1)-dimensional vector as
Z ∼ Np+1(0, Ω), Xj = F −1
j (Φ(Zj)) , j = 0, 1, . . . , p. (2.1)
Under this construction, the joint dependence structure among all variables across
clients is captured via a Gaussian copula. This framework links the set of univariate
marginals {Fj}p
j=0 associated with each component of X to a multivariate distribu
tion over latent Gaussian variables Z, governed by a correlation matrix Ω. In this
representation, each marginal distribution Fj characterizes the distributional proper
ties of Xj, while the correlation matrix Ω encodes the global dependency structure
among variables. When the marginals Xj are normally distributed, Ω coincides with
the Pearson correlation matrix of X; otherwise, it captures rank-based dependencies.
Specifically, for Ω = (rj1j2)(p+1)×(p+1), the pairwise rank-based correlations-Kendall’s τ
8

and Spearman’s ρ are given by
τj1j2 = 2
π arcsin(rj1j2), ρj1j2 = 6
π arcsin rj1j2
2 , ∀j1, j2 ∈ {0, . . . , p} and j1 ̸= j2.
Apparently, according to (2.1), given new latent Gaussian samples zi ∼ Np+1(0, Ω),
the synthetic data can be obtained via the transformation x ̃ij = F −1
j (Φ(zij)) for each
j = 0, 1, · · · , p. Owing to their flexibility in modeling joint distributions with hetero
geneous marginals, copula-based methods have been widely adopted for synthetic data
generation in centralized settings, where multi-source datasets can be aggregated (Li
et al., 2014; Gambs et al., 2021; Jiang et al., 2023a). However, these approaches are
not directly applicable in the VFL setting due to the decentralized nature of the data
and the lack of centralized access to the full joint distribution.
Copula-based modeling entails two primary components: estimation of the corre
lation structure Ω and the marginal distributions {Fj}p
j=0. The correlation matrix
Ω = (rij)(p+1)×(p+1) is typically inferred via rank-based methods, with each entry es
timated by the relationship rij = sin( π
2 τij), where τij denotes the Kendall’s tau rank
correlation coefficient between variables Xi and Xj. In the context of VFL, the global
correlation matrix Ω must be collaboratively estimated across clients. To this end,
each client shares perturbed ranks of its local variables with the server, enabling se
cure computation of cross-party rank correlations while enhancing privacy protection
through randomized rank perturbation.
Privatization of the Rank. To prevent potential privacy leakage from rank infor
mation, we apply a local differential privacy (LDP) mechanism to the ranks of each
variable independently. For each variable j, its rank vector Rj is encoded as a binary
vector Vj ∈ {0, 1}N(N−1)/2, where each entry vii′ represents the outcome of a pairwise
9

comparison between samples i and i′: if Xij > Xi′j for 1 ≤ i < i′ ≤ N , then vii′ = 1;
otherwise, vii′ = 0. The rank of Xij can be recovered via R(Xij) = 1 + P
i′̸=i cii′ , where
cii′ = vii′ if i < i′ and cii′ = 1 − vi′i if i > i′.
To protect these pairwise comparisons, we adopt the randomized response (RR)
mechanism (Warner, 1965; Xu et al., 2025), which perturbs each vii′ independently:
v ̃ii′ =

  
  
vii′, with probability 1 − θ,
1 − vii′, with probability θ,
(2.2)
where θ = (1 + exp(ε))−1, and ε is the local privacy budget. For any ε > 0, we have
θ ∈ (0, 1/2). The privatized rank is then Re(Xij) = 1 + P
i′̸=i c ̃ii′ , with c ̃ii′ = v ̃ii′ if i < i′
and c ̃ii′ = 1 − v ̃i′i if i > i′.
The RR mechanism satisfies ε-LDP given θ = (1 + exp(ε))−1 (Yang et al., 2024b;
Wang et al., 2017), guaranteeing privacy protection for all observed pairwise compar
isons. Due to its effectiveness, the RR mechanism has been widely adopted in practice,
including in Google Chrome browser (Erlingsson et al., 2014), macOS (Tang et al.,
2017), and recommender system (Kalloori et al., 2018). Prior work (Xu et al., 2025)
also shows that the RR mechanism outperforms additive noise mechanisms such as
the Laplace mechanism (Dwork, 2006) in preserving the relative order of entries in the
original rankings, even when achieving the same privacy budget.
Denote by bΩ the empirical rank correlation matrix computed from the true (unper
turbed) ranks, and by Ωe the privatized estimator constructed from perturbed ranks.
Theorem 1 establishes the convergence rate of the l∞-norm error between Ωe and Ωb .
According to (3.1), the convergence rate of the relative error of Ωe is a constant given
any fix privacy parameter ε1, implying that Ωe does not converge to Ωb even as N → ∞.
10

This inconsistency arises because the RR mechanism shifts the distribution of pairwise
comparisons, introducing systematic bias into subsequent parameter estimation. To
address the issue, we propose a debiased RR mechanism. After obtaining the per
turbed pairwise comparison vector Vej via (2.2), we apply the following correction step:
v ̃d
ii′ = v ̃ii′ − θ
1 − 2θ , for i < i′. (2.3)
This adjustment yields an unbiased estimator for the original pairwise comparisons vii′.
Denote by Red
j the rank vector derived from the debiased Ve d
j . Then E(Red
j ) = Rj, where
the expectation is taken with respect to the randomness of the privacy mechanism.
As shown in (3.2) of Theorem 1, the resulting debiased estimator Ωe d is consistent and
can asymptotically recover Ωb given sufficiently large N , overcoming the convergence
barrier of the classical RR mechanism.
Regarding the estimation of marginal distributions, a common practice is to fix the
marginals at their empirical distribution functions (ECDFs), denoted by {Fbj}p
j=0. Ac
cording to classical results such as the Glivenko-Cantelli Theorem, {Fbj}p
j=0 constitutes
a consistent estimator of the true marginal distributions {Fj}p
j=0 when the dataset is
fully observed or when the missing data mechanism satisfies the missing completely at
random (MCAR) assumption (Little and Rubin, 2019). We then employ the ECDF
Fbj to generate privatized data. Since Fbj is a step function, it lacks a well-defined con
tinuous inverse. A common remedy is to fit a monotone interpolating spline to the set
{(Xij, Fbj(Xij))}N
i=1, and, for notational simplicity, we continue to denote the resulting
smoothed function by Fbj. However, Fbj is not differentially private. To avoid the leak
age of sensitive information when applying the ECDFs {Fbj}p
j=0, we approximate each
Fbj using privatized Bernstein polynomials (Phillips, 2003; Alda and Rubinstein, 2017).
11

Privatization of the Marginal Distribution. Specifically, we first rescale (X1j, · · · , XNj)
to the interval [0, 1], and then approximate Fbj(x) using the Bernstein operator:
Bl Fbj (x) :=
l
X
v=0
Fbj
v
l bv,l(x), bv,l(x) = l
v xv(1 − x)l−v, v = 0, · · · , l.
According to Alda and Rubinstein (2017), we can achieve differential privacy by adding
noise to the Bernstein coefficients. That is,
Bel Fbj (x) =
l
X
v=0
Fbj
v
l + εv bv,l(x),
where εv
i.i.d.
∼ Lap(∆Fbj · (l + 1)/ε), and ∆Fbj denotes the l1-sensitivity, defined as
∆
Fbj := sup
Xj ∼X′
j
Fbj(x) − Fbj(x′) ,
with Xj ∼ X′
j indicating that Xj and X′
j differ in at most one element belonging to a
single person. Apparently, for ECDFs, we have ∆Fbj = 1
N.
Furthermore, suppose Fbj is (h, T )-smooth, meaning it possesses continuous deriva
tives up to order h (for some positive integer h), and all such derivatives are bounded
in absolute value by T . In this case, a more refined approximation can be obtained
using the Iterated Bernstein operator (Micchelli, 1973):
Be(h)
l
Fbj (x) :=
l
X
v=0
Fbj
v
l + εv b(h)
v,l (x), b(h)
v,l (x) =
h
X
i=1
h
i (−1)i−1Bi−1
l (bv,l; x),
(2.4)
where Bi
l = Bl ⊙ Bi−1
l , and B0
l = I denotes the identity operator.
We denote the final privatized estimator of the marginal CDF as Fbpriv
j := Be(h)
l
Fbj (x).
According to Alda and Rubinstein (2017), the estimator Fbpriv
j satisfies ε-differential pri
12

vacy. In addition, Corollary 1 characterizes the overall error, which includes both the
approximation error and the noise-induced error.
2.3 The Vertical Copula-based Data Sanitization Method un
der MCAR
Based on the above analysis, we propose the Vertical Copula-based Data Sanitization
(VCDS) method to handle client-wise MCAR missingness. As illustrated in Figure 1,
the method consists of two main stages: (1) local rank perturbation and dependence
estimation; (2) marginal distribution estimation and privatization. The more detailed
procedure is outlined in Algorithm 1. The process begins with each client k perturbing
the ranks of its local variables on observed entries using the debiased RR mechanism,
yielding the perturbed observed rank matrix Re d
k,obs. In parallel, each client computes
the ECDF Fbj,obs for each local variable employing only observed values, and applies
monotone spline smoothing to ensure invertibility. To achieve differential privacy, the
smoothed ECDF is approximated using privatized Bernstein polynomials, producing
Fbpriv
j,obs(x) = Be(h)
l (Fbj,obs)(x). Next, the server collects the perturbed rank matrices from
all clients and concatenates them into Re d
obs = (Re d
1,obs, . . . , Re d
K,obs). Based on these per
turbed ranks, the server computes the rank correlation matrix Ωe d
obs. Then, the server
samples Znew ∈ RN′×(p+1) from the multivariate normal distribution Np+1(0, Ωe d
obs) and
sends the corresponding submatrix Znew
k to each client k. Upon receiving Znew
k , each
client applies the inverse of its privatized marginal distribution function to transform
the Gaussian scores back to the original data domain: Xepriv
j = (Fbpriv
j,obs)−1 Φ(Znew
j ).
This yields the privatized pseudo-data Xe priv
k for each client.
The VCDS algorithm ensures that sensitive raw data never leave the local clients.
13

Ranks are perturbed under local differential privacy, marginal distributions are pri
vatized via Bernstein polynomial approximation, and the dependence structure is re
constructed on the server using only perturbed statistics. Theorem 4 shows that the
generated synthetic data preserve both the marginal distributions and the cross-party
dependence structure while satisfying formal privacy guarantees. Theorem 5 provides
a theoretical upper bound on the utility of the VCDS mechanism, quantifying how well
the raw data distribution is preserved under privacy protection.
Figure 1: Illustration of the Vertical Copula-based Data Sanitization (VCDS) procedure under the MCAR mechanism, where gray cells denote missing entries.
Note that Algorithm 1 is built upon the ECDF, fixing each Fj at its empirical
cumulative distribution function. However, the ECDF can incur substantial bias when
the missing data mechanism is not completely at random, such as under the missing at
random (MAR) scenario. To address this limitation, we propose an extended version of
the Vertical Copula-based Data Sanitization method, referred to as EVCDS. Unlike the
original approach, EVCDS does not rely on the ECDFs. Instead, it introduces a novel
nonparametric estimator for the marginal distributions, which yields computationally
14

Algorithm 1: The VCDS Algorithm Input: Local raw observed data Xk,obs for k = 1, 2, . . . , K
1 and Y Output: Privatized pseudo data Xe priv
k for k = 1, 2, . . . , K
2 and Ye priv for each client k ∈ {1, 2, . . . , K} do
3 Perturb the ranks of each local variable using the debiased RR mechanism
to obtain perturbed ranks Re d
k,obs, and send them to the server;
4 Compute the ECDF Fbj,obs for each local variable and apply monotone smoothing;
5 Approximate each Fbj,obs via privatized Bernstein polynomials to obtain:
Fbpriv
j,obs(x) = Be(h)
l (Fbj,obs)(x).
6 On the server side:
7 Aggregate the rank matrices as Re d
obs := (Re d
1,obs, . . . , Re d
K,obs);
8 Compute the copula correlation matrix estimator Ωe d
obs from Re d
obs;
9 Draw a new sample Znew ∈ RN′×(p+1) from Np+1(0, Ωe d
obs), and return the corresponding submatrices Znew
k to client k for k = 1, 2, . . . , K; 10 for each client k ∈ {1, 2, . . . , K} do
11 Generate the privatized synthetic data for each variable as
Xe priv
j = (Fbpriv
j,obs)−1 Φ(Znew
j ).
efficient and consistent estimates of {Fj}p
j=0 even in the presence of MAR data.
2.4 The Extended Vertical Copula-based Data Sanitization
Method under MAR
In terms of the estimation of marginal distributions under more complex missing data
mechanisms, inspired by the “margin adjustment” approach proposed by Feldman and
Kowal (2024), we estimate the marginal CDFs {Fj}p
j=0 by utilizing perturbed ranks
together with the latent variables Z. This approach leverages the insight that, under
model (2.1), each Zj is a non-decreasing transformation of the corresponding variable
Xj. More precisely, for each j, there exists a strictly increasing function Gj(·), possibly
unknown, such that Xj = Gj(Zj) for j = 0, 1, . . . , p. As a consequence, when both
{Xij }N
i=1 and {Zij}N
i=1 are sorted, the position of max{Zij : Xij ≤ x} within {Zij}N
i=1
15

coincides with that of max{Xij : Xij ≤ x} within {Xij}N
i=1 for any x exceeding the
minimum of {Xij}N
i=1. Define
Zej(x) = max {Z′
ij : Re(Xij) ≤ Re(x)} ∪ {Z′
ij : Re(Xij) = min
1≤i≤N
Re(Xij)}, i = 1, · · · , N ,
(2.5)
where Re(·) denotes the perturbed rank function. The privatized marginal distribution
estimator is then given by Fej(x) := Φ(Zej(x)). In the presence of missing data, Zej(x)
is calculated as
Zej(x) = max {Z′obs
ij : Re(Xobs
ij ) ≤ Re(x)} ∪ {Z′obs
ij : Re(Xobs
ij ) = min
1≤i≤N
Re(X obs
ij )}, i = 1, · · · , N .
(2.6)
According to Eq. (3.3) in Theorem 2, we have Fej(x) →P Fj(x), implying that Fej(x)
is a consistent estimator of the true CDF Fj(x). Crucially, this consistency remains
valid under MAR. For clarity, we present the result in Theorem 3 for the case p = 2,
where one variable follows an MAR mechanism; the extension to higher dimensions is
straightforward.
Nevertheless, Fej(x) may fail to be a valid distribution function because it is not
guaranteed to be monotonic. In particular, for any x1 < x2, it is possible that Fej(x1) >
Fej(x2) with positive probability when the privacy parameter ε and the sample size N
are fixed. To address this issue, we construct a perturbed version of the variable Xj,
denoted by Xej, by reordering the original sample {Xij}N
i=1 according to their perturbed
ranks. Specifically, let x = {X1j, . . . , XNj} = {X(R(X1j)), . . . , X(R(XNj))}, and define the
perturbed sequence as
xe := {X(Re(X1j)), . . . , X(Re(XNj))}. (2.7)
Under this construction, the mapping xe 7→ Fej(xe) is guaranteed to be non-decreasing, as
16

the ranks of the inputs are aligned with those used in computing their function values.
Moreover, Eq. (3.4) in Theorem 2 ensures that Fej(xe) attains the same convergence rate
as Fej(x).
Notably, although {Xeij}N
i=1 are no longer linked to their original indices, thereby
protecting individual identities, the variable values themselves may still leak sensitive
information. To further enhance the privacy protection of the original values {Xij}N
i=1,
we approximate Fej(x ̃) by means of the privatized Bernstein polynomials as described
in Eq. (2.4). We denote the resulting privatized estimator of the marginal CDF as
Fepriv
j := Be(h)
l
Fej (x ̃). According to Alda and Rubinstein (2017), the estimator Fepriv
j
satisfies ε-differential privacy and admits the error bound stated in Corollary 2.
In practice, however, the function Gj(·) is unknown a priori, which prevents us
from directly generating latent variables Zj that satisfy the desired rank-consistency
condition. To remedy this, we first draw an initial sample Z from Np+1(0, Ωe d), and
then transform it to ensure the rank structure matches that of X.
Note that Zj being a non-decreasing transformation of Xj implies the equivalence
of rank ordering: Xij < Xi′j ⇔ Zij < Zi′j. Define the event
D(X) :=
(
Z ∈ RN×(p+1) : max
{i′:Xi′j <Xij }
Zi′j < Zij < min
{i′:Xij <Xi′j }
Zi′j, ∀i ̸= i′, 0 ≤ j ≤ p
)
.
When Z ∈ D(X), the rank ordering of each variable in the original dataset X is
preserved in Z. Specifically, for each Zij, its value lies within the interval determined by
the latent variables corresponding to the adjacent ranks of Xij. Thus, any Z satisfying
Z ∈ D(X) is suitable for subsequent marginal distribution estimation.
Since the initial draw Z ∼ Np+1(0, Ωe d) generally does not satisfy Z ∈ D(X), a naive
approach is to reorder Z dimension-wise according to the ranks of X. However, it only
17

preserves the marginal order of each variable, but destroys the dependence structure
between variables. To overcome this, we perform a sample-wise adjustment on each Zj
to obtain Z′ such that Z′ ∈ D(X) while preserving as much of the original dependence
structure as possible. Specifically, for each j and sample i, we determine the interval
zl = max
n
Zi′j : Re(Xi′j) < Re(Xij), i′ ̸= i
o
, zu = min
n
Zi′j : Re(Xi′j) > Re(Xij), i′ ̸= i
o
,
(2.8)
where Re(·) is the perturbed rank. Then, we sample from the truncated conditional
normal distribution to obtain Z′
ij ∼ N (μij, σ2
j ) I(zl, zu), where the conditional mean
and variance are given by
μij = Ωe d
j,−j (Ωe d)−1
−j,−j Zi,−j , σ2
j = Ωe d
j,j − Ωe d
j,−j (Ωe d)−1
−j,−j Ωe d
−j,j .
This adjustment guarantees that the corrected latent matrix Z′ preserves the rank
structure of X while restoring and retaining as much of the original multivariate normal
dependence structure as possible. In practice, this is implemented sequentially by first
sorting Z1 to match the rank of X1, then sampling each subsequent Z′
j conditionally
on the previously adjusted variables Z′
1, . . . , Z′
j−1. The adjusted latent variables Z′ are
then combined with the perturbed ranks to construct Fepriv
j.
The EVCDS Algorithm. As illustrated in Figure 2, the extended VCDS (EVCDS)
method retains the core components of the original VCDS framework, including rank
perturbation and correlation estimation in Step 1, and the privatization of estimated
marginal distributions in Step 3. Compared with VCDS, EVCDS refines the procedure
in Step 2 by avoiding independent marginal estimation for each variable. Instead, it
explicitly incorporates correlation information into the nonparametric estimation of the
18

cumulative distribution functions (CDFs). This is achieved by introducing Gaussian
latent variables that share the same dependence structure as the original variables. The
marginal distributions are then estimated jointly using these latent variables together
with the perturbed ranks. Such a design can yield consistent estimators of {Fj}p
j=0
even under MAR mechanisms.
The detailed procedure is summarized in Algorithm 2. Following the same local
client processing and server-side aggregation/correlation estimation steps as in Algo
rithm 1, the server generates a Gaussian latent matrix Z′ that is necessary for marginal
CDF estimation. Based on the estimated copula correlation Ωe d
obs obtained from the
observed data (for notational simplicity, we omit the subscript obs and denote it as
Ωe d), the server draws an initial latent sample Z ∼ Np+1(0, Ωe d). These latent vari
ables are then reordered and sequentially adjusted to satisfy rank constraints derived
from the privatized ranks. The adjustment is performed by sampling each element Z′
ij
from a truncated conditional normal distribution with parameters computed based on
previously adjusted variables, thereby ensuring consistency with the rank information
while approximately preserving the original correlation structure. Then the adjusted
latent matrix Z′ is partitioned and sent back to the respective clients for marginal dis
tribution estimation. During synthetic data generation, unlike Algorithm 1 where the
newly drawn latent sample Znew is directly fed into the inverse marginal CDFs, EVCDS
applies the same adjustment procedure to Znew to ensure rank consistency, resulting in
higher-quality synthetic data. Note that the sample size of synthetic dataset produced
by Algorithm 2 can be a multiple of the original dataset size.
Corollary 3 establishes that the EVCDS method satisfies rigorous differential pri
vacy guarantees. Notebaly, the additional procedure introduced to consistently es
timate marginal distributions under the MAR mechanism does not incur any extra
19

privacy cost. Hence, EVCDS shares the same privacy budget as the VCDS method.
Theorem 6 further characterizes the utility of EVCDS under client-wise MAR missing
ness by evaluating the KL divergence between the density fitted on the complete data
(without missingness) and that fitted on the privatized data generated by Algorithm 2.
The theorem shows that EVCDS achieves asymptotic fidelity up to the MAR bias, with
the discrepancy arising from the MAR bias induced by the estimation of the correlation
matrix Ωe d based on the observed data. To mitigate this bias, we further propose the
Iterated EVCDS Algorithm 3, which iteratively refines the correlation estimation and
thereby enhances the overall performance of EVCDS.
Figure 2: Illustration of the Extended Vertical Copula-based Data Sanitization (EVCDS) method under MAR, where gray cells represent missing entries.
The Iterated EVCDS (IEVCDS) Algorithm. The EVCDS method inevitably
suffers from bias under MAR missingness because the dependency structure Ω in the
20

Algorithm 2: The EVCDS Algorithm
Input: Local raw observed data Xk,obs for clients k = 1, 2, . . . , K
1 and Y Output: Privatized pseudo data Xe priv
k for clients k = 1, 2, . . . , K and Ye priv 2 for each client k ∈ {1, . . . , K} do
3 Perturb the ranks of each local variable to obtain eRk,obs, then apply the
debiased RR mechanism to obtain eRd
k,obs;
4 Send eRd
k,obs to the server;
5 Server side:
6 Aggregate rank matrices as eRd
obs := ( eRd
1,obs, . . . , eRd
K,obs);
7 Compute the copula correlation matrix estimator eΩd from eRd
obs;
8 Draw a sample Z ∈ RN×(p+1) from Np+1(0, eΩd);
9 Sort Z0 to match the order of Red
0,obs;
10 for j = 1 to p do
11 Sort Zj according to Red
j,obs;
12 for i = 1 to N do
13 Compute the truncated interval (zl, zu) on the observed data as defined in Equation (2.8); 14 Compute conditional mean and variance:
μij = eΩd
j,1:(j−1) eΩd
1:(j−1),1:(j−1)
−1z(seq), σ2
j = eΩd
j,j − eΩd
j,1:(j−1) eΩd
1:(j−1),1:(j−1)
−1
eΩd
1:(j−1),j ,
where z(seq) = (Z′
i1, . . . , Z′
i(j−1)) and Z′
i0 = Zi0;
15 Sample Z′
ij ∼ N (μij , σ2
j )I(zl, zu) ;
16 Obtain the adjusted latent sample matrix Z′, then distribute the corresponding submatrices Z′
k back to each client k; 17 for each client k ∈ {1, . . . , K} do
18 Estimate marginal distributions by Fej(x ̃) = Φ Zej(x ̃) , where Zej(·) and x ̃ are defined in Equations (2.6) and (2.7);
19 Approximate each Fej using privatized Bernstein polynomials:
Fepriv
j (x ̃) = Be(h)
l (Fbj)(x ̃).
20 Server side:
21 Draw a new sample Znew ∼ Np+1(0, eΩd), rearrange Znew following steps similar to lines 8–14, and distribute submatrices Znew
k to clients k = 1, . . . , K; 22 for each client k ∈ {1, . . . , K} do
23 Generate privatized synthetic data for each variable as
Xe priv
j = (Fepriv
j )−1 Φ(Znew
j ).
copula model is estimated from rank correlations, where the ranks are computed in
dependently for each covariate using only observed values. To mitigate this bias,
we impute missing entries via Gaussian latent variables: Xej,mis = (Fej)−1 Φ(Z′
j,mis) .
21

This yields a pseudo-complete dataset for each client with missingness, denoted by
Xe k = (Xk,obs, Xe k,mis). Based on this dataset, each client can compute complete lo
cal ranks, which are then privatized using the debiased randomized response (RR)
mechanism and transmitted to the server.
The server aggregates these privatized complete ranks to estimate Ω. A latent
sample is drawn from N (0, Ωe d) and subsequently adjusted according to Re d to produce
Z
′. The partitioned matrices Z′
k are then distributed back to the clients for estimating
the marginal distributions Fj with the aid of the perturbed complete ranks.
This process is iterated for T rounds. If the privacy cost per iteration is ε1 for
rank perturbation and ε2 for marginal privatization, the total privacy budget by the
composition property of DP is T ε1 + ε2 (Corollary 4). Here, only the ranks shared
with the server are perturbed at each iteration, while the margins used for imputation
remain unprivatized, since the intermediate pseudo-complete datasets Xe (t)
k are never
transmitted. The marginal privatization is performed only in the final iteration to
ensure the synthetic data are privacy-preserving.
A technical detail concerns the initialization of Z′(0)
mis . We set Re d(0) = Re d
obs and first
obtain Z′(0)
obs following Steps 7-14 in Algorithm 2. The missing part Z′(0)
mis is then sampled
from the conditional normal distribution given Z′(0)
obs . Specifically, for each subject i,
sample Z′
i,mis ∼ N (μi,mis|obs, Ωi,mis|obs), where μi,mis|obs = Ωe d(0)
Ii,mis,Ii,obs (Ωe d(0)
Ii,mis,Ii,obs )−1Z′
i,obs,
Ωi,mis|obs = Ωe d(0)
Ii,mis,Ii,mis − Ωe d(0)
Ii,mis,Ii,obs (Ωe d(0)
Ii,obs,Ii,obs )−1Ωe d(0)
Ii,obs,Ii,mis , with Ii,obs and Ii,mis de
noting the observed and missing variable indices for subject i.
Finally, Theorem 7 analyzes the utility of synthetic data generated by Algorithm 3.
It shows that the discrepancy between the copula models fitted on the true dataset
and on the privatized dataset converges to a stable limit determined jointly by the
privatization mechanism and the missingness mechanism.
22

Algorithm 3: The IEVCDS Algorithm
Input: Local raw data Xk for clients k = 1, 2, . . . , K and Y , and the initialization Xe (0)
k,mis = ∅. Output: Privatized pseudo data Xe priv
k for clients k = 1, 2, . . . , K and Ye priv 1 for each iteration t ∈ {1, · · · , T } do 2 for each client k ∈ {1, . . . , K} do
3 Form the pseudo-complete dataset Xe (t)
k = (Xk,obs, Xe (t−1)
k,mis ); 4 Perturb the ranks of each column of Xe (t)
k to obtain eR(t)
k , then apply the debiased RR mechanism
to obtain eRd(t)
k; 5 Send Re d(t)
k to the server; 6 Server side:
7 Aggregate rank matrices as eRd(t) := ( eRd(t)
1 , . . . , eRd(t)
K );
8 Compute the copula correlation matrix estimator eΩd(t) from eRd(t); 9 Draw a sample Z(t) ∈ RN×(p+1) from Np+1(0, Ωe d(t));
10 Sort Z(t)
0 to match the order of Red(t)
0; 11 for j = 1 to p do 12 Sort Z(t)
j according to Red(t)
j; 13 for i = 1 to N do
14 Compute the truncated interval (z(t)
l , z(t)
u ) as defined in Equation (2.8); 15 Compute conditional mean and variance:
μ(t)
ij = eΩd(t)
j,1:(j−1) eΩd(t)
1:(j−1),1:(j−1)
−1 z(seq) ,
σ2(t)
j = eΩd(t)
j,j − Ωe d(t)
j,1:(j−1) eΩd(t)
1:(j−1),1:(j−1)
−1
eΩd(t)
1:(j−1),j ,
where z(seq) = Z
′ (t)
i1 , . . . , Z
′ (t)
i(j−1) and Z
′ (t)
i0 = Z(t)
i0 ;
16 Sample Z
′ (t)
ij ∼ N μ(t)
ij , σ2(t)
j I z(t)
l , z(t)
u;
17 Obtain the adjusted latent sample matrix Z′(t), then distribute the corresponding submatrices Z
′ (t) k back to each client k;
18 for each client k ∈ {1, . . . , K} do
19 Estimate marginal distributions by Fe(t)
j (x ̃) = Φ Ze(t)
j (x ̃) and smooth it using monotone spline,
where Ze(t)
j (·) and x ̃ are defined in Equations (2.5) and (2.7);
20 Obtain pseudo values for missing variable as Xe(t)
j,mis = (Fe(t)
j )−1 Φ(Z
′ (t)
j,mis) . 21 Server side:
22 Draw a new sample Znew ∼ Np+1(0, Ωe d(T )), rearrange Znew following steps similar to lines 8–14, and distribute submatrices Znew
k to clients k = 1, . . . , K; 23 for each client k ∈ {1, . . . , K} do 24 Approximate each Fe(T )
j using privatized Bernstein polynomials: Fe(T )priv
j (x ̃) = Be(h)
l (Fb(T )
j )(x ̃);
25 Generate privatized synthetic data for each variable as Xepriv
j = (Fe(T )priv
j )−1 Φ(Znew
j ).
3. Theoretical Justification
In this section, we establish the theoretical foundations of the privatized copula esti
mator constructed via the RR mechanism and the nonparametric approach. Building
on these preliminaries, we then analyze the theoretical properties of Algorithms 1–3,
focusing on both privacy and utility guarantees. The privacy guarantee represents
the fundamental requirement of any differentially private algorithm, while the util
23

ity guarantee characterizes the effectiveness of the proposed methods relative to their
non-private counterparts.
3.1 Preliminary Results
Theorem 1. Suppose there are K clients in a vertical federated system, collectively
holding p + 1 variables and N samples, with the variables uniformly distributed across
the clients. Let ε1 denote the total privacy budget allocated to the rank perturbation
step. Define the noise parameter as θ = 1 + exp ε1K
p+1
−1
. Then, with probability at
least 1 − δ, the following bounds hold:
∥
Ωb − Ωe ∥F
∥
Ωb ∥F
= OP θ +
pp log(1/δ)
N
!
, (3.1)
Ωb − Ωe d
F
= OP
(2θ2 − 2θ + 1)p
(1 − 2θ)2N
s
log 2p2
1−δ
!
. (3.2)
Theorem 1 shows that Ωe obtained from the original perturbed ranks is incon
sistent, whereas Ωe d derived from the debiased perturbed ranks is consistent. Let
a = ε1K/(p + 1) and denote f (a) = (e2a + 1)/(ea − 1)2, then the bound (3.2) scales
as OP (p/N )f (a)plog(2p2/(1 − δ)) . As a → ∞ (i.e. ε1 is large), f (a) → 1 and the
error reduces to the usual OP(p/N ) rate (up to logarithmic factors). In contrast, when
a → 0 (i.e., ε1 is very small), f (a) diverges like 2/a2, implying that the estimation error
scales approximately as OP (p(p + 1)2/(N ε2
1K2)) (up to plog(·)). Thus, in the strong
privacy regime, the bound has an ε−2
1 dependence, making it necessary to substantially
increase N to counteract the resulting amplification effect.
Corollary 1. Assume that Fbpriv
j is the privatized version of Fbj obtained via the Iterated
Bernstein operator in Eq. (2.4) with privacy parameter ε. If Fbj is (2h, T )-smooth, then
24

with probability at least 1 − δ, there exists l = max 1, εN
log(1/δ)
1
h+1 such that
mxax
Fbpriv
j (x) − Fbj(x) = OP
l+1
N ε log(1/δ)
h h+1
.
Corollary 1 is a direct consequence of Theorem 3 in Alda and Rubinstein (2017),
and its proof is omitted for brevity.
Theorem 2. Suppose {Zi}N
i=1
i.i.d.
∼ N (0, 1) and define {Xi}N
i=1 = {G(Zi)}N
i=1 ∼ FX ,
where G is a monotone increasing function. For any x ∈ R, define
Ze(x) = max {Zi : Re(Xi) ≤ Re(x)} ∪ {Zi : Re(Xi) = min
1≤i≤N
Re(Xi)}, i = 1, · · · , N .
where R(·) and Re(·) denote the true and perturbed rank functions, respectively. Define
the privatized estimator of FX(x) as Fe(x) := Φ(Ze(x)). Denote θ = 1/(1 + eε). Then
we have the following results:
1. For any x ∈ R, it holds that
Fe(x) − FX(x) = OP
1
(1 − 2θ)√N . (3.3)
2. The function Fe(x) is not a valid cumulative distribution function in the strict
sense. Let {Xei}N
i=1 denote the perturbed version of {Xi}N
i=1, obtained by reordering
{Xi}N
i=1 according to their perturbed ranks. Then, the function Fe(xe) is a valid
distribution function and satisfies: for any x ∈ R,
Fe(xe) − FX(x) = OP
1
(1 − 2θ)√N , (3.4)
25

where xe := X(Re(x)).
Theorem 2 states that the proposed privatized marginal estimator, constructed
using the latent Gaussian variables and the perturbed ranks, is consistent, although its
convergence rate is reduced by a privacy factor due to the added noise. Furthermore,
Theorem 3 shows that the proposed marginal CDF estimator remains consistent under
MAR missingness, maintaining the same convergence rate.
Theorem 3. Let {Zi}N
i=1 = {(Zi1, Zi2)}N
i=1
i.i.d.
∼ Φ, where Φ is a bivariate normal
distribution with standard normal marginals Φ. Suppose {Xi}N
i=1 = {(Xi1, Xi2)}N
i=1 =
F −1
1 (Φ(Zi1)), F −1
2 (Φ(Zi2)) N
i=1, which has joint distribution function F with marginals
F1 and F2. Assume that X2 is fully observed while X1 is MAR. For j ∈ {1, 2}, define
Zej(x) = max
(
{Z ′ obs
ij : Re(Xobs
ij ) ≤ Re(x)} ∪ {Z′obs
ij : Re(Xobs
ij ) = min
1≤i≤N
Re(X obs
ij )}, i = 1, . . . , N
)
.
Denote the privatized marginal distribution of X1 as Fe1(x) := Φ(Ze1(x)). Let θ =
1/(1 + eε). Then, for all x ∈ R, we have
Fe1(x) − F1(x) = OP
1
(1 − 2θ)√N .
Corollary 2. Define ∆Fej := supXj∼X′
j
Fej(x ̃) − Fej(x ̃′) , where Xj and X′
j differ in
at most one record. Let Fepriv
j denote the privatized version of Fej obtained via the
Iterated Bernstein operator in Eq. (2.4) with privacy parameter ε. Then ∆Fej =
O1
N . If Fej is (2h, T )-smooth, then with probability at least 1 − δ, there exists
l = max 1, εN
log(1/δ)
1
h+1 such that
mx ̃ax
Fepriv
j (x ̃) − Fej(x ̃) = OP
l+1
N ε log(1/δ)
h h+1
.
26

3.2 Privacy Guarantee and Utility Guarantee
First, we define Vertical Distributed Attribute Differential Privacy (VDADP) for ver
tical federated learning. The classical differential privacy (Dwork, 2006) is defined over
pairs of datasets that differ in only one individual, i.e., with a Hamming distance of
one. This formulation ensures that the output of a randomized algorithm does not
significantly change with the inclusion or exclusion of any single individual, thereby
protecting individual-level participation. However, in the context of VFL, the set of
individuals across all participating clients is aligned and fixed. Thus, it is not neces
sary to protect the presence or absence of individuals. Instead, the primary privacy
concern lies in ensuring that the attributes of a particular individual held by one client
cannot be inferred, even when all other attributes of that individual (and of all other
individuals) held by other clients are known. Therefore, it is natural to extend the
standard DP to VFL scenario as follows.
Definition 1 (Vertical Distributed Attribute Differential Privacy). In a VFL system,
define the attribute-level distance between two datasets X and X′ as:
∆(X, X′) = |{(i, k) : Xi,k ̸= X′
i,k, 1 ≤ i ≤ N, 1 ≤ k ≤ K}|.
A randomized algorithm A : X N → A is (ε, δ)-vertical distributed attribute differen
tially private ((ε, δ)-VDADP) if for any pair of datasets X ∈ X N and X′ ∈ X N with
∆(X, X′) = 1, the following holds
P{A(X ∈ A)} ≤ eεP{A(X′ ∈ A)} + δ,
for every measurable subset A ∈ A.
27

The parameters ε and δ are privacy budgets indicating the strength of privacy
protection from the mechanism. Smaller ε or δ indicates better privacy protection.
When δ = 0, the definition reduces to pure VDADP, which provides a stricter privacy
guarantee. Note that, when K = 1, (ε, δ)-VDADP recovers the classical (ε, δ)-DP.
In this work, we focus on the pure privacy setting and adopt δ = 0 throughout the
analysis.
Remark 1. Classical DP (i.e., sample-level DP) protects the presence or absence of an
entire individual in the dataset. In contrast, VDADP in the VFL setting provides client
wise, attribute-level protection, ensuring that the local features of an individual held by
a particular client cannot be inferred. From the perspective of privacy strength, clas
sical DP is stricter, as it safeguards the participation of the entire individual, whereas
VDADP only protects a subset of features from a single client. Conceptually, VDADP
can be viewed as a localized relaxation of classical DP: any mechanism satisfying clas
sical DP automatically satisfies VDADP, but the converse does not hold. Moreover,
through the composition theorem, multiple VDADP guarantees can be aggregated to
achieve sample-level DP. Specifically, if each client applies an independent VDADP
mechanism with privacy budget εk, then the overall mechanism satisfies (P
k εk)-DP at
the sample level.
Theorem 4 (Differential Privacy of VCDS). The proposed VCDS mechanism in Al
gorithm 1 returns a privacy-preserving dataset Dek = Xe priv
k for each client 2 ≤ k ≤ K
and De1 = (Xe priv
1 , Ye priv) for the server k = 1. Suppose that for client k, the privacy
budgets allocated to the rank perturbation and marginal distribution privatization steps
are ε1k and ε2k, respectively. Then the privatized dataset Dek (1 ≤ k ≤ K) satisfies
(ε1k + ε2k)-VDADP, and the aggregated privatized dataset across all clients, denoted by
De = SK
k=1 Dek, satisfies PK
k=1(ε1k + ε2k)-DP.
28

Theorem 4 formally guarantees that the VCDS mechanism enforces rigorous pri
vacy protection at both the local and global levels. Specifically, for each client k, a
personalized privacy budget εk is partitioned into two components: ε1k is dedicated
to the perturbation of rank information, while ε2k is allocated to the noise injection
into the latent variables. This decomposition enables fine-grained control over privacy
leakage in different stages of the data transformation process.
Under the VDADP framework, the privacy guarantee ensures that, even if an ad
versary possesses complete knowledge of all attributes of all individuals except for a
single attribute vector locally stored by client k, the adversary cannot reliably infer
the protected attribute from the privatized output. Additionally, the mechanism inher
ently protects against attribute inference and membership inference attacks, ensuring
that the presence or absence of a specific value or sample has a limited impact on the
sanitized output.
Corollary 3 (Differential Privacy of EVCDS). The EVCDS mechanism described in
Algorithm 2 satisfies (ε1k + ε2k)-VDADP for each client k (1 ≤ k ≤ K), where ε1k and
ε2k denote the privacy budgets allocated to the rank perturbation step and the marginal
distribution privatization step, respectively. For the entire VFL system, the EVCDS
mechanism guarantees PK
k=1(ε1k + ε2k) -DP.
Corollary 3 follows directly from the privacy guarantee of Algorithm 1 and the
composition property of differential privacy. In Corollary 4, since the ranks of the
completed variables are re-perturbed at each iteration, the privacy cost of rank pertur
bation accumulates. Consequently, the result is derived from the privacy guarantee of
Algorithm 2 combined with the composition property of differential privacy.
Corollary 4 (Differential Privacy of IEVCDS). Suppose that for client k, the rank
perturbation and marginal privatization incurs a privacy cost of ε1k and ε2k, respectively.
29

Then, at each iteration, Algorithm 3 satisfies ε1k-VDADP for client k (1 ≤ k ≤ K).
After T iterations, it outputs Xe priv
k for each client and Ye priv for the server, which
together satisfy PK
k=1(T ε1k + ε2k) -DP.
Theorem 5 (Utility of VCDS). Let (X, Y ) be a vertically partitioned dataset of N
i.i.d. samples, with p covariates distributed across K clients, where client k contains
pk covariates. Assume that X suffers from client-wise MCAR missingness with missing
rate ρk on client k, and denote ρmax := maxk ρk. Let (Xe priv, Ye priv) be the privatized
version produced by the VCDS mechanism (Algorithm 1) under total privacy budget ε1
for rank perturbation and ε2 for marginal distribution privatization.
Let d(x, y) and d ̃(x, y) denote the Gaussian copula densities fitted on the original
full data and privatized data, respectively, with copula correlation matrices Ωb and Ωe d
obs.
Assume Ωb is positive definite with λmin(Ωb ) > κ > 0. Let h ∈ N+. Denote θ =
1 + exp Kε1
p+1
−1
, and C(θ) = 2θ2−2θ+1
(1−2θ)2 . denote ρI := PK
k=1
p2
k
1−ρk +P
k̸=l
pk pl
(1−ρk)(1−ρl) , ρII :=
PK k=1
p2
k
(1−ρk)2 + P
k̸=l
pk pl
(1−ρk)2(1−ρl)2 , Then, with high probability at least 1 − δ, the KL di
vergence between the two densities satisfies:
DKL(d(x, y) ∥ d ̃(x, y)) = OP


κ2 ρI
N + κ2C(θ)2ρII
N 2 log p
δ+ p
√N (1 − ρmax) + p2
N K(1 − ρmax)ε2
log 1
δ
h h+1

.
Theorem 5 establishes a non-asymptotic upper bound on the Kullback-Leibler
(KL) divergence between two Gaussian copula models: one fitted on the original full
dataset, and the other on the privatized dataset generated by the proposed VCDS
mechanism. This result quantifies the impact of privacy-preserving perturbations and
MCAR missingness on the fidelity of the estimated data distribution. The bound is
mainly composed of four components: the estimation error of the rank correlation ma
trix due to missing data, the error introduced by rank perturbation, the marginal
distribution estimation error due to finite sample size, and the error arising from
30

marginal distribution privatization. As N → ∞, the dominant terms vanish, indi
cating that VCDS remains effective in preserving data utility for large samples. In
particular, when ρk = ρ and pk are identical across clients, the bound reduces to
OP
κ2 p2 (K −ρ)
KN (1−ρ)2 + κ2C(θ)2p2[(1−ρ)2+K−1]
KN2(1−ρ)4 log p
δ+ p
√N (1−ρ) + p2
NK(1−ρ)ε2 log 1
δ
h
h+1 .
This result confirms that the VCDS mechanism achieves a meaningful privacy
utility trade-off under fixed missing rates: the divergence between the estimated distri
butions decreases as (i) the privacy budgets ε1 and ε2 increase (i.e., less perturbation),
or (ii) the sample size N grows. In addition, the dependence on κ shows that the
bound tightens when the original copula correlation matrix is well-conditioned. Over
all, the theorem demonstrates that VCDS provides a close approximation of the joint
distribution under reasonable privacy budgets and sample sizes.
Theorem 6 (Utility of EVCDS). Consider a vertically partitioned dataset (X, Y ) of
N i.i.d. samples with p covariates distributed across K clients, where client k holds
pk covariates. Suppose X is subject to client-wise MAR missingness, with missing rate
ρk on client k, and let ρmax := maxk ρk. Denote by πkl ≥ π > 0 the probability that
covariates on clients k and l (k ̸= l) are simultaneously observed.
Let (Xe priv, Ye priv) be the privatized data generated by the EVCDS mechanism (Algo
rithm 2) under privacy budgets ε1 (rank perturbation) and ε2 (marginal privatization).
Denote by d(x, y) and d ̃(x, y) the Gaussian copula densities fitted on the original full
data and privatized data, with correlation matrices Ωb and Ωe d, respectively.
Assume Ωb is positive definite with λmin(Ωb ) > κ > 0. Let h ∈ N+. Denote θ =
1 + exp Kε1
p+1
−1
, and C(θ) = 2θ2−2θ+1
(1−2θ)2 . Denote ρ′
I := PK
k=1
p2
k
1−ρk + P
k̸=l
pk pl
πkl , ρ′
II :=
PK k=1
p2
k
(1−ρk)2 + P
k̸=l
pk pl
π2
kl
. Define Emarg := p log(1/δ)
N K(1−ρmax)ε2
h
h+1 + 1
(1−2θ)
√
N(1−ρmax) . Then,
31

with high probability at least 1−δ, the KL divergence between the two densities satisfies:
DKL(d(x, y) ∥ d ̃(x, y)) ≤ OP
κ2ρ′
I log p
N + κ2B2
MAR + κ2C(θ)2ρ′
II
N 2 log p
δ + pEmarg .
Theorem 6 presents a utility guarantee for EVCDS under client-wise MAR missing
ness and differential privacy constraints. Specifically, it shows that the KL divergence
between the copula density estimated from the original full data (without missing
ness) and the privatized data is bounded by four terms: (1) sampling error term of
order ρ′
I log p
N ; (2) a bias term B2
MAR caused by the MAR mechanism when estimating
the correlation based on the observed data, its explicit formula is given in Appendix;
(3) a higher-order variance term ρ′
II C (θ)2
N2 due to privacy-induced perturbations, where
C(θ) is the variance inflation factor associated with debiased randomized response; (4)
a marginal error term Emarg arising from privatization of the marginal distributions.
While the first, third, and fourth terms decay with larger sample size or looser privacy
budgets, the MAR bias term persists and represents an intrinsic limitation of learning
under MAR. Thus, EVCDS guarantees asymptotic fidelity up to the MAR bias, which
cannot be eliminated without additional measures.
Theorem 7 (Utility of IEVCDS). Consider a vertically partitioned dataset (X, Y ) of
N i.i.d. samples with p covariates distributed across K clients, where client k holds
pk covariates. Suppose X is subject to client-wise MAR missingness, with missing rate
ρk on client k, and let π := 1 − maxk ρk. Denote by πkl ≥ π > 0 the probability that
covariates on clients k and l (k ̸= l) are simultaneously observed.
Let (Xe priv, Ye priv) be the privatized data generated by the IEVCDS mechanism (Algo
rithm 3) under privacy budgets ε1 (rank perturbation) and ε2 (marginal privatization).
Denote by d(x, y) and d ̃(x, y) the Gaussian copula densities fitted on the original full
32

data and privatized data, with correlation matrices Ωb and Ωe d(T ), respectively.
Assume Ωb is positive definite with λmin(Ωb ) > κ > 0. Let h ∈ N+. Suppose
Algorithm 3 runs for T iterations. Denote θ = 1 + exp Kε1
T (p+1)
−1
, and C(θ) =
2θ2−2θ+1
(1−2θ)2 . Then, with high probability at least 1 − δ, the KL divergence between the two
densities is upper bounded as:
DKL(d(x, y) ∥ d ̃(x, y)) ≤ OP

 
κ2 C (θ)2 p2
(1 − αΩ)2N 2π2 log p
δ+ p
1 − αF

 
q log(1/δ) Nπ
(1 − 2θ) + p log 1
δ
N Kε2
!h
h+1

 


,
where αΩ and αF are contraction coefficients satisfying 0 < αΩ < 1 and 0 < αF < 1.
Compared with EVCDS (Theorem 6), the key difference lies in how IEVCDS ad
dresses the MAR-induced bias. In EVCDS, the correlation matrix is estimated once
from the observed ranks, which introduces a persistent MAR bias term B2
MAR that
cannot be eliminated. IEVCDS mitigates this limitation by iteratively imputing miss
ing values using latent Gaussian variables and updating the perturbed ranks in each
iteration, effectively generating pseudo-complete datasets that allow more accurate cor
relation estimation. The KL divergence bound in Theorem 7 reflects this improvement.
Unlike EVCDS, where the MAR bias contributes a non-vanishing term, the IEVCDS
bound depends on contraction coefficients αΩ and αF associated with the iterative
adjustment procedure. These coefficients capture the shrinkage effect of repeated im
putation and rank updates, ensuring that the discrepancy between the privatized and
full-data copula densities decreases with the number of iterations T . Moreover, the
other terms, corresponding to privacy-induced perturbations and marginal errors, are
similar to EVCDS but scaled by 1/T factors in the rank perturbation, reflecting that
repeated iterations distribute the privacy budget across multiple updates.
33

4 Application to GLM Parameter Estimation with
Variable Selection
In this section, we consider the problem of parameter estimation and variable selection
for the VFL GLM model under privacy constraints and client-wise missingness. This is
a challenge that has not been addressed in the literature to our knowledge. In the clas
sical VFL setting, although raw data are not directly shared when optimizing the GLM
model, the exchange of linear embeddings of the original data (e.g., xk⊤
i βk) exposes
participants to potential risks of privacy leakage. A mainstream approach to addressing
this problem is the application of differential privacy (DP) techniques. By introducing
random noise into local parameters (Hu et al., 2020) or into local embeddings (Wang
et al., 2020), the associated privacy risks can be possibly mitigated. However, these
methods are not designed to address the client-wise missingness problem. In addition,
applying noise post hoc to the outputs of non-private variable selection procedures fails
to preserve the statistical properties necessary for selection consistency, highlighting
the need for specialized privacy-aware regularization mechanisms. In the following, we
investigate the utility of the proposed privatized data for parameter estimation and
variable selection in the VFL GLM model, beginning with the development of the
estimation procedure.
Assume that the response variable Y follows a generalized linear model (GLM):
E(Y |X) = g(β⊤X) = g
K
X
k=1
Xk βk
!
, (4.1)
where β = (β1, β2, . . . , βp)⊤ is the vector of unknown regression coefficients, and βk ∈
Rpk denotes the subset of coefficients associated with the covariates held by client k.
34

The function g(·) represents a known link function; for instance, g(a) = a corresponds
to the Gaussian linear model, whereas g(a) = ea/(1 + ea) characterizes the logistic
regression model.
Here we consider the problem of parameter estimation and variable selection of
GLM under VFL framework, assuming the complete and privatized data. Suppose
that yi|xi has a density in the exponential class with the form
p(yi|xi) = c ̃exp yix⊤
i β∗ − ψ(x⊤
i β∗)
a(τ ) = c ̃exp
(
yi
PK
k=1 xk⊤
i β∗
k − ψ(PK
k=1 xk⊤
i β∗
k) a(τ )
)
,
where c ̃ and a(τ ) are scale constants, β∗ = (β∗⊤
1 , · · · , β∗⊤
K ) denotes the true sparse
model parameter vector. ψ(·) is the integral of the link function g(·) defined in (4.1).
We define S = {1 ≤ j ≤ p : β∗
j ̸= 0} as the support of β∗ and s = |S| as the
sparsity level. To estimate β∗, the most straightforward estimator is the solution of
the (empirical) negative log-likelihood function
f (X, y, β) = − 1
N
N
X
i=1
yi
K
X
k=1
xk⊤
i βk + 1
N
N
X
i=1
ψ
K
X
k=1
xk⊤
i βk
!
. (4.2)
Furthermore, to pursue the sparsity structure of β∗, we adopt a regularization term on
the parameters and obtain the sparse estimated parameters as
βb = arg min
β∈Rp f (X, y, β) + Pλ(|β|),
where λ > 0 is the regularization hyper-parameter, and Pλ(|β|) = P
j Pλ(|βj|) is
a general folded concave penalty defined on β ∈ (−∞, ∞) satisfying: (i) Pλ(β) is
increasing and concave in β ∈ [0, ∞) with Pλ(0) = 0; (ii) Pλ(β) is differentiable in
β ∈ (0, ∞) with P ′
λ(0) := P ′
λ(0+) ≥ a1λ; (iii) P ′
λ(β) ≥ a1λ for β ∈ (0, a2λ]; (iv)
35

P′
λ(β) = 0 for β ∈ [aλ, ∞) with the pre-specified constant a > a2, where a1 and a2 are
two fixed positive constants. The definition includes the two widely used nonconvex
penalties: the smoothly clipped absolute deviation (SCAD; Fan and Li, 2001) and
the minimax concave penalty (MCP; Zhang, 2010). For SCAD, its first derivative is
defined as
P′
λ(|β|) = λ{I(|β| ≤ λ) + (aλ − |β|)+
(a − 1)λ I(|β| > λ)}
with P ′
λ(0) := P ′
λ(0+) = λ and a = 3.7 as suggested in (Fan and Li, 2001). For MCP,
its first derivative takes the form:
P′
λ(|β|) = 1
a (aλ − |β|)+, a > 1.
It is easy to see that a1 = a2 = 1 for the SCAD, and a1 = 1 − a−1, a2 = 1 for the MCP.
To facilitate optimization, we adopt the local linear approximation (LLA; Zou and Li,
2008) strategy, which approximate the penalty function Pλ(|βj|) by first order Taylor’s
series expansion centered at β(t), the updated estimate from the t-th step in the course
of iterations:
Pλ(|βj|) ≈ Pλ(|β(t)
j |) + P ′
λ(|β(t)
j |)(|βj| − |β(t)
j |).
Using this approximation, the nonconvex objective function resembles a reweighted l1
penalized objective function.
In the VFL context, the covariates are distributed across K clients such that each
client k holds only Xk. We introduce an auxiliary variable η to coordinate the com
putation across clients, leading to the following constrained optimization problem:
L(β) = − 1
N y⊤
K
X
k=1
Xkβk+ 1
N
N
X
i=1
ψ
K
X
k=1
xk⊤
i βk
!
+λ
K
X
k=1
∥αk◦βk∥1, s.t.
K
X
k=1
Xkβk = η,
(4.3)
36

where αk is an adaptive weight vector with elements αkj = λ−1P ′
λ(|β(t)
kj |) ≥ 0, and ◦
denotes the Hadamard (element-wise) product. The auxiliary variable η corresponds
to the aggregated intermediary results PK
k=1 Xkβk derived from the K clients.
Typically, the above problem (4.3) can be solved by adopting ADMM based algo
rithm on its augmented Lagrangian:
Lφ(β, η; γ) = − 1
N y⊤η+ 1
N
N
X
i=1
ψ(ηi)+λ
K
X
k=1
∥αk ◦βk ∥1 +γ ⊤
K
X
k=1
Xkβk − η
!
+φ
2
K
X
k=1
Xkβk − η
2
2
,
where γ is the Lagrange multiplier and φ is the penalty parameter. The augmented
Lagrangian function Lφ(β, η; γ) can be recursively minimized to obtain β, η, and
γ in a distributed manner. Specifically, at (t + 1)-th iteration, β, η, and γ can be
sequentially updated as
βb(t+1)
k = arg mβikn
Lφ βk, {βb(t)
k′ }k′̸=k, ηb(t); γb(t)
= arg mβikn
λ∥αk ◦ βk∥1 + ⟨γb(t), Xkβk⟩ + φ
2
K
X
k′=1,k′̸=k
Xk′ βb(t)
k′ + Xkβk − ηb(t)
2
2
, (4.4)
η(t+1) = arg mηin Lφ βb(t+1), η; γb(t)
= arg mηin − 1
N y⊤η + 1
N
N
X
i=1
ψ(ηi) − γb(t)⊤η + φ
2
K
X
k=1
Xk βb(t+1)
k −η
2
2
, (4.5)
γb(t+1) = γb(t) + φ
K
X
k=1
Xk βb(t+1)
k − ηb(t+1)
!
. (4.6)
The above updating formulas imply that all the K clients can compute β1, · · · , βK
locally in parallel. Then the server updates auxiliary variable η and dual variable γ
by collecting intermediary results ζk = Xkβk.
Algorithm 4 elaborates the implementation for the ADMM-based federated mini
mization of (4.3), referred to as VFL-GLM-VS (Vertical Federated Learning for Gener
alized Linear Models with Variable Selection). The model parameters can be computed
37

locally for each client based on the received auxiliary variable η and dual variable γ
using Eq. (4.4). When βk is obtained, the client only needs to exchange the aggregated
results ζk = Xkβk with the server. With the aggregated results {ζk}K
k=1 collected from
the K clients, the server is able to update η and γ, which are sent back to clients for
subsequent update at the next iteration. This iterative process continues until both
the primal residual rt = PK
k=1 Xkβ(t)
k − η(t) and the dual residual s(t) = φ(η(t) − η(t−1))
fall below their respective tolerances, i.e., ∥r(t)∥2 ≤ εpri, ∥s(t)∥2 ≤ εdual. Specifically,
εpri = √N εabs + εrel max{∥ PK
k=1 Xkβ(t)
k ∥2, ∥η(t)∥2}, and εdual = √pεabs + εrel∥γ(t)∥2. In
practice, the absolute and relative tolerances can be set as εabs = εrel = 0.001.
Algorithm 4: The VFL-GLM-VS Algorithm
Input: βb(0) = 0, ηb(0) = 0, γb(0) = 0 Output: βb
1 while the stopping criterion is not satisfied do 2 for client k = 1, · · · , K do
3 Computes P
k′̸=k Xk′ βb(t)
k′ − ηb(t) = h(t) − Xkβb(t)
k;
4 Obtain βb(t+1)
k based on Eq. (4.4);
5 Sends ζ(t+1)
k = Xkβb(t+1)
k to the server;
6 Server computes ηb(t+1) according to (4.5);
7 Server computes γb(t+1) according to (4.6);
8 Server broadcasts h(t+1) = PK
k=1 ζ(t+1)
k − ηb(t+1) and γb(t+1) to all clients.
Theorem 8. Consider the GLM model with true s-sparse parameter β∗ under vertical
federated context. Let βb be the estimator obtained by VFL-GLM-VS algorithm 4 that
satisfies KKT conditions. Define Sb = {1 ≤ j ≤ p : βˆj ̸= 0}. Under Assumptions 1 in
the Appendix, if λ ≥ 2σ
q
2 log p
N and the signal satisfies βmin := minj∈S |β∗
j | ≥ 4C1
√s λ
κmin
for a suitable constant Csig where C1 ≥ 1 is any fixed constant. Then with probability
at least 1 − p−c0, we have
1. (Estimation error) ∥βb − β∗∥2 ≤ 2C1
√s λ
κmin .
2. (Support recovery) Pr(Sb = S) → 1.
38

3. (Asymptotic normality) If additionally maxj∈S αj ≤ εn with εn → 0 and √N εn →
0, then √N (βbS − β∗
S) −d→ N (0, I−1
S ).
Theorem 9. Let (X, Y ) be the original data satisfying Y | X ∼ GLM(β∗) and let
(
Xe priv, Ye priv) be the privatized data produced by the VCDS/IEVCDS mechanism. Sup
pose the fitted joint copula densities satisfy DKL d(X, Y ) ∥ d ̃(Xe priv, Ye priv) ≤ εN , with
εN → 0. Assume Assumption 1 in the Appendix holds for the original model and that
the same RSC/Hessian bounds hold locally for the privatized population.
Let βbpriv be any output of VFL-GLM-VS on the privatized data that satisfies the
KKT conditions. Set Sbpriv = {j : βˆpriv
j ̸= 0}. Take λ ≥ 2σ
q
2 log p
N + Cpriv
√εN , where σ
is from (A0) and Cpriv is a constant depending on the Lipschitz properties of the score.
If the signal obeys βmin := minj∈S |β∗
j | ≥ 4C1
√s λ
κmin for some constant C1 ≥ 1, then with
probability at least 1 − p−c0 the estimator βbpriv satisfies
1. (Estimation error) ∥βbpriv − β∗∥2 ≤ 2C1
√s λ
κmin
.
2. (Support recovery) Pr(Sbpriv = S) → 1 as N → ∞.
3. (Asymptotic normality) If furthermore maxj∈S αj = o(N −1/2), then √N (βbpriv
S−
β∗
S) −d→ N (0, (Ipriv
S )−1), where Ipriv
S is the Fisher information matrix under the
privatized population; in particular Ipriv
S → IS as εN → 0.
Following Hu et al. (2020), the VFL-GLM-VS algorithm 4 converges to a primal
dual stationary point. Let βb denote the estimator obtained on the full, nonprivate
dataset, and βbpriv the estimator obtained on the privatized dataset via the VCDS/IECVDS
mechanisms. Theorem 8 guarantees that βb achieves estimation consistency, variable
selection consistency, and asymptotic normality, in accordance with classical high
dimensional theory. Theorem 9 shows that, if the KL divergence between the copula
39

densities of the original and privatized data is bounded by εN , then by choosing the
regularization parameter λ to account for sample size N , dimension p, and εN , the
privatized estimator βbpriv retains the same statistical guarantees. In particular, substi
tuting the bounds on εN derived in Theorems 5 and 7 yields explicit rates under both
MCAR and MAR missingness.
5. SIMULATION
In this section, we assess the statistical properties of the proposed data privatization
methods through comprehensive numerical experiments. We first generate privatized
datasets from simulated original data, and then compare the results of parameter
estimation and variable selection obtained from the privatized datasets with those
from the original data. It is worth noting that the proposed algorithms, VCDS and
EVCDS, can also be applied to complete datasets without missing values. Since there
are currently no existing methods capable of addressing the VFL missingness problem
under privacy constraints, our simulation study is organized into two parts. In the
first part 5.1, we evaluate the performance of VCDS and EVCDS against competing
methods on complete datasets; in the second part 5.2, we investigate the performance
of the proposed methods under MCAR and MAR missingness mechanisms.
5.1 Simulation Studies on Fully Observed Data
Data Generation We generate N samples {(xi, yi)}N
i=1, where the p-dimensional
covariates xi are distributed across K clients. To simulate mixed-type data with com
plex dependencies, we first sample latent continuous variables U ∈ RN×p from a finite
mixture of multivariate normal distributions, and then transform U into different data
types.
40

Specifically, let ui
i.i.d.
∼
P3
j=1 πjNp(μj, Σj), where the mixing weights are π =
(0.4, 0.3, 0.3)⊤, and the component means are μ1 = 0p, μ2 = −1p, and μ3 = 1p.
The component covariance matrices are defined as follows: (i) Σ1: off-diagonal ele
ments are 0.1 for k ̸= k′ ∈ {1, . . . , K}; diagonals and off-diagonals within blocks are
1 and 0.3, respectively. (ii) Σ2: a Toeplitz matrix with entries σj1j2 = 0.5|j1−j2|. (iii)
Σ3: an AR(2)-type structure with σj1j2 = 0.5 if |j1 − j2| = 1, 0.25 if |j1 − j2| = 2, 1 if
j1 = j2, and 0 otherwise.
Given the latent matrix U, we construct a mixed-type covariate matrix X =
(X1, X2, X3, X4) ∈ RN×p, where X1 ∈ RN×q1, X2 ∈ RN×q2, X3 ∈ RN×q3, and X4 ∈
RN×q4 correspond to continuous, multinomial, ordinal, and binary covariates, respec
tively. The generation mechanisms for each type of covariate are specified as follows:
X1j = Uj, 1 ≤ j ≤ q1;
P(X2ij = c | Uij) = exp(wcUij)
PC
c′ =1 exp(wc′ Uij) , c = 1, . . . , C, q1 < j ≤ q1 + q2;
X3ij | Uij ∼ Poisson(2 + 0.3, Uij), q1 + q2 < j ≤ q1 + q2 + q3;
P(X4ij = 1 | Uij) = {1 + exp(−0.5Uij)}−1 , q1 + q2 + q3 < j ≤ p.
To evenly distribute variable types across clients, we randomly shuffle the variable
indices and partition the covariates into K = 5 groups, each of dimension pk = 20,
assuming a total number of covariates p = 100. The sparsity level is set as s = 0.6.
For each client k, the true local regression coefficients are generated as β∗
j = (−1)j/3
for 1 ≤ j ≤ ⌈spk⌉, and β∗
j = 0 otherwise. The global regression coefficient vector is
then constructed as β∗ = (β∗⊤
1 , . . . , β∗⊤
K )⊤.
For the response variable Y , we consider two regression settings. In the first setting,
Y is generated from a linear regression model as Yi = x⊤
i β∗ + εi, where εi denotes
independent random noise drawn from the standard normal distribution N (0, 1). In
41

the second setting, Y is generated from a logistic regression model, where the success
probability is given by P(Yi = 1) = 1 + exp(−x⊤
i β∗)−1.
Compared Methods To gain comparative insights, we consider three alternative
methods. The first method, referred to as “VFL-ADMM-DP,” follows the approach
proposed by Hu et al. (2020), where calibrated noise is injected into the local coefficient
estimates during Algorithm 4 to perturb sensitive local linear embeddings and ensure
privacy. The second method, termed “Vertigan” (Jiang et al., 2023b), involves the
generation of synthetic datasets on each client through a combination of local discrim
inators and a global generator; Algorithm 4 is then applied to the synthetic data for
parameter estimation and variable selection. As performance benchmarks, we also in
clude two additional settings based on unprotected data: (i) the “Original-C” scenario,
where all data are stored and analyzed on a single client, and (ii) the “Original-VFL”
scenario, where data remain distributed across clients without privacy mechanisms.
These serve as upper-bound baselines for comparison.
Performance Measurements The privacy budget takes values in {1, 3, 5}, each of
which is evenly divided between ε1 and ε2. For each simulation setting, a total of
100 replications are applied. In each replication, the tuning parameter λ is chosen
by BIC criterion: BIC(λ) = f (βb) + dfλ · log(N ), where f (βb) is defined in Eq. (4.2),
and dfλ is the number of nonzero estimated coefficients in βb. We consider three cri
teria to compare the performance of different methods. (1) Root Mean Square Error
(RMSE) of the coefficient estimation, RMSE =
q
∥βˆ − β∗∥2
2/p. (2) The geometric
mean of sensitivity and specificity, which gives an overall variable selection perfor
mance measure, G-Means = √SEN × SPE, where sensitivity measures the proportion
of selected important covariates with SEN = Pp
j=1 I(βˆj ̸= 0, β∗
j ̸= 0)/(Pp
j=1 I(β∗
j ̸= 0)),
42

while specificity measures the proportion of nonselected unimportant covariates with
SPE = Pp
j=1 I(βˆj = 0, β∗
j = 0)/(Pp
j=1 I(β∗
j = 0)). The value of G-Means ranges from
0 to 1. This implies that a variable selection method works better if its value is closer
to 1. (3) The false discovery rate (FDR), which represents the proportion of selected
covariates that are actually irrelevant, with its definition being FDR = Pp
j=1 I(βˆj ̸=
0, β∗
j = 0)/ max(Pp
j=1 I(βˆj ̸= 0), 1). We say that a method has better model selection
performance if the FDR is smaller.
Simulation Results Tables 1-3 report the RMSE of parameter estimates, the G
Means, and the FDR of variable selection for the competing methods under both linear
and logistic regression in the VFL setting. Several conclusions can be drawn. First,
for the Original-VFL approach, the RMSE and FDR converge to zero while the G
Means approaches one as the sample size increases, demonstrating that the proposed
VFL-GLM-VS algorithm is consistent in both parameter estimation and support re
covery, in accordance with Theorem 8. Second, both the proposed VCDS and EVCDS
methods substantially outperform the competing approaches. The poor performance
of VFL-ADMM-DP indicates that simply injecting noise into standard optimization
algorithms fails to achieve effective variable selection, while the inferior performance of
the Vertigan method highlights the importance of exploiting interdependencies among
variables across clients when constructing privatized data. Third, the estimation er
ror and variable selection error of VCDS and EVCDS decrease as the sample size or
privacy budget increases, approaching the results of Original-VFL. Nevertheless, a per
formance gap remains, reflecting the inevitable cost of privatization. Finally, VCDS
and EVCDS generally perform comparably on complete datasets, with EVCDS show
ing a slight advantage, particularly in the logistic regression setting. This advantage
can be attributed to its additional step of rearranging the sampled latent variables
43

Znew to preserve the rank information of the original data, thereby yielding privatized
data of higher quality than that produced by VCDS.
Table 1: The average RMSE of different methods for the linear and logistic regression coefficients based on 100 simulations, with standard error reported in parentheses.
N ε Original-C Original-VFL VFL-ADMM-DP Vertigan VCDS EVCDS
Results of the linear model
1000
1 0.0651 (0.0111) 0.0714 (0.0133) 0.4383 (0.1551) 0.3241 (0.0685) 0.1490 (0.0098) 0.1487 (0.0169)
3 0.0651 (0.0111) 0.0714 (0.0133) 0.2366 (0.0371) 0.3172 (0.0732) 0.1374 (0.0117) 0.1391 (0.0171)
5 0.0651 (0.0111) 0.0714 (0.0133) 0.2111 (0.0171) 0.3153 (0.0705) 0.1244 (0.0112) 0.1331 (0.0602)
3000
1 0.0355 (0.0073) 0.0374 (0.0119) 0.2794 (0.0565) 0.3278 (0.0766) 0.0871 (0.0158) 0.0796 (0.0068)
3 0.0355 (0.0073) 0.0374 (0.0119) 0.2141 (0.0102) 0.3231 (0.0841) 0.0707 (0.0098) 0.0676 (0.0063)
5 0.0355 (0.0073) 0.0374 (0.0119) 0.1848 (0.0048) 0.3280 (0.0758) 0.0741 (0.0152) 0.0572 (0.0143)
5000
1 0.0247 (0.0047) 0.0246 (0.0065) 0.2524 (0.0368) 0.3206 (0.0704) 0.0674 (0.0068) 0.0629 (0.0094)
3 0.0247 (0.0047) 0.0246 (0.0065) 0.2134 (0.0069) 0.3182 (0.0752) 0.0516 (0.0044) 0.0547 (0.0224)
5 0.0247 (0.0047) 0.0246 (0.0065) 0.1924 (0.0034) 0.3183 (0.0648) 0.0522 (0.0075) 0.0502 (0.0076)
Results of the logistic model
1000
1 0.1132 (0.0210) 0.1163 (0.0172) 0.9639 (0.1247) 0.3498 (0.3285 ) 0.1888 (0.0040) 0.1639 (0.0096)
3 0.1132 (0.0210) 0.1163 (0.0172) 0.3750 (0.0388) 0.3482 (0.3279) 0.1882 (0.0136) 0.1467 (0.0219)
5 0.1132 (0.0210) 0.1163 (0.0172) 0.2793 (0.0214) 0.2913 (0.1714) 0.1811 (0.0071) 0.1385 (0.0296)
3000
1 0.0412 (0.0077) 0.0511 (0.0086) 0.4923 (0.0611) 0.3276 (0.2209) 0.1468 (0.0217) 0.1315 (0.0204)
3 0.0412 (0.0077) 0.0511 (0.0086) 0.2570 (0.0173) 0.3301 (0.3153) 0.1425 (0.0143) 0.1000 (0.0238)
5 0.0412 (0.0077) 0.0511 (0.0086) 0.2279 (0.0096) 0.2784 (0.0961) 0.1398 (0.0122) 0.0832 (0.0209)
5000
1 0.0312 (0.0067) 0.0391 (0.0091) 0.3772 (0.0383) 0.2799 (0.0947) 0.1413 (0.0187) 0.1096 (0.0093)
3 0.0312 (0.0067) 0.0391 (0.0091) 0.2349 (0.0113) 0.2779 (0.1083) 0.1325 (0.0141) 0.0908 (0.0119)
5 0.0312 (0.0067) 0.0391 (0.0091) 0.2195 (0.0066) 0.2830 (0.1146) 0.1328 (0.0172) 0.0798 (0.0093)
5.2 Simulation Studies on Missing Dataset
We next investigate the performance of the proposed methods under client-wise miss
ing data scenarios. Complete datasets are first generated following the procedure in
Section 5.1, and missingness is then introduced according to two mechanisms: MCAR
and MAR, described below.
(1) Missing-completely-at-random (MCAR). Under MCAR, the missing
probabilities for the five clients are set to ρ1 = 0.95, ρ2 = 0.90, ρ3 = 0.85, ρ4 =
0.80, ρ5 = 0.75. For each sample i and client k, the missing indicator Mik ∈ {0, 1} (with
44

Table 2: The average G-Means of different methods for the linear regression coefficients based on 100 simulations, with standard error reported in parentheses.
N ε Original-C Original-VFL VFL-ADMM-DP Vertigan VCDS EVCDS
Results of the linear model
1000
1 0.9231 (0.0011) 0.8740 (0.0012) 0.1761 (0.0061) 0.4939 (0.0028) 0.6938 (0.0019) 0.7193 (0.0030)
3 0.9231 (0.0011) 0.8740 (0.0012) 0.3142 (0.0052) 0.4974 (0.0023) 0.7618 (0.0022) 0.7992 (0.0020)
5 0.9231 (0.0011) 0.8740 (0.0012) 0.3924 (0.0030) 0.5022 (0.0026) 0.7817 (0.0027) 0.7959 (0.0483)
3000
1 0.9712 (0.0004) 0.9416 (0.0009) 0.2575 (0.0043) 0.4842 (0.0023) 0.8911 (0.0005) 0.9079 (0.0031)
3 0.9712 (0.0004) 0.9416 (0.0009) 0.4137 (0.0022) 0.4958 (0.0027) 0.9300 (0.0006) 0.9546 (0.0003)
5 0.9712 (0.0004) 0.9416 (0.0009) 0.4880 (0.0021) 0.4899 (0.0023) 0.9318 (0.0004) 0.9661 (0.0004)
5000
1 0.9800 (0.0002) 0.9623 (0.0003) 0.2961 (0.0031) 0.4908 (0.0022) 0.9463 (0.0006) 0.9356 (0.0009)
3 0.9800 (0.0002) 0.9623 (0.0003) 0.4581 (0.0026) 0.4947 (0.0023) 0.9511 (0.0005) 0.9621 (0.0010)
5 0.9800 (0.0002) 0.9623 (0.0003) 0.5135 (0.0024) 0.4952 (0.0020) 0.9477 (0.0003) 0.9707 (0.0001)
Results of the logistic model
1000
1 0.8519 (0.0031) 0.7594 (0.0042) 0.1193 (0.0047) 0.1369 (0.0115) 0.6909 (0.0199) 0.7218 (0.0061)
3 0.8519 (0.0031) 0.7594 (0.0042) 0.1981 (0.0055) 0.1595 (0.0106) 0.7023 (0.0123) 0.7522 (0.0099)
5 0.8519 (0.0031) 0.7594 (0.0042) 0.2604 (0.0030) 0.1341 (0.0110) 0.7333 (0.0067) 0.7563 (0.0120)
3000
1 0.9703 (0.0003) 0.9253 (0.0005) 0.1616 (0.0047) 0.1445 (0.0081) 0.6909 (0.0199) 0.8716 (0.0037)
3 0.9703 (0.0003) 0.9253 (0.0005) 0.2938 (0.0032) 0.1680 (0.0088) 0.7333 (0.0073) 0.9229 (0.0017)
5 0.9703 (0.0003) 0.9253 (0.0005) 0.3647 (0.0029) 0.1642 (0.0085) 0.7023 (0.0218) 0.9379 (0.0007)
5000
1 0.9864 (0.0005) 0.9516 (0.0003) 0.2050 (0.0039) 0.1618 (0.0088) 0.8311 (0.0045) 0.9430 (0.0006)
3 0.9864 (0.0005) 0.9516 (0.0003) 0.3379 (0.0024) 0.1567 (0.0106) 0.8264 (0.0045) 0.9414 (0.0006)
5 0.9864 (0.0005) 0.9516 (0.0003) 0.4113 (0.0025) 0.1709 (0.0087) 0.8268 (0.0023) 0.9466 (0.0007)
Mik = 1 indicating that xk
i is missing) is drawn independently as Mik ∼ Bernoulli(ρk)
for 1 ≤ i ≤ N, 1 ≤ k ≤ K.
(2) missing-at-random (MAR). Under MAR, conditional on the observed data
(xi,obs, yi), the missingness of xk
i,mis is independent of its own unobserved value but
may depend on observed covariates and on the missingness indicators of other clients.
To generate MAR patterns, we first draw a client-level mask M = (M 1, . . . , M K)⊤
with M k ∼ Bernoulli(0.5), where M k = 1 indicates that the covariates on client k
may be missing and M k = 0 indicates they are always observed. Define ∆obs = {k :
M k = 0}, ∆mis = {k : M k = 1}. For each client k ∈ ∆mis, we model the missingness
probability by logistic regression. We consider two cases.
Simple case. The missingness model is logit Pr(Mik = 1) = 1+P
j∈∆obs (−1)j ζ⊤
j xj
i, k ∈
45

Table 3: The average FDR of different methods for the linear regression coefficients based on 100 simulations, with standard error reported in parentheses.
N ε Original-C Original-VFL VFL-ADMM-DP Vertigan VCDS EVCDS
Results of the linear model
1000
1 0.0115 (0.0002) 0.0345 (0.0005) 0.4275 (0.0828) 0.3997 (0.0029) 0.1651 (0.0014) 0.1716 (0.0053)
3 0.0115 (0.0002) 0.0345 (0.0005) 0.3622 (0.0279) 0.3952 (0.0024) 0.1018 (0.0009) 0.0609 (0.0023)
5 0.0115 (0.0002) 0.0345 (0.0005) 0.1415 (0.0183) 0.3885 (0.0028) 0.0849 (0.0024) 0.1184 (0.0346)
3000
1 0.0010 (0.0000) 0.0089 (0.0002) 0.3768 (0.0415) 0.4105 (0.0026) 0.0274 (0.0001) 0.0325 (0.0006)
3 0.0010 (0.0000) 0.0089 (0.0002) 0.3817 (0.0077) 0.3977 (0.0030) 0.0254 (0.0001) 0.0141 (0.0002)
5 0.0010 (0.0000) 0.0089 (0.0002) 0.1622 (0.0044) 0.4025 (0.0025) 0.0250 (0.0004) 0.0067 (0.0002)
5000
1 0 (0) 0.0006 (0.0000) 0.3940 (0.0181) 0.4007 (0.0024) 0.0213 (0.0002) 0.0215 (0.0000)
3 0 (0) 0.0006 (0.0000) 0.3895 (0.0059) 0.3975 (0.0026) 0.0142 (0.0002) 0.0108 (0.0001)
5 0 (0) 0.0006 (0.0000) 0.2068 (0.0031) 0.3960 (0.0026) 0.0142 (0.0002) 0.0103 (0.0001)
Results of the logistic model
1000
1 0.0574 (0.0031) 0.0330 (0.0021) 0.4031 (0.1547) 0.3998 (0.0000) 0.3452 (0.0006) 0.2097 (0.0036)
3 0.0574 (0.0031) 0.0330 (0.0021) 0.3901 (0.0671) 0.3997 (0.0001) 0.3188 (0.0085) 0.1576 (0.0111)
5 0.0574 (0.0031) 0.0330 (0.0021) 0.3922 (0.0290) 0.4006 (0.0000) 0.3126 (0.0030) 0.1523 (0.0135)
3000
1 0.0012 (0.0000) 0.0073 (0.0001) 0.3713 (0.0951) 0.4011 (0.0001) 0.1114 (0.0125) 0.0964 (0.0047)
3 0.0012 (0.0000) 0.0073 (0.0001) 0.3938 (0.0237) 0.3993 (0.0001) 0.1024 (0.0045) 0.0532 (0.0020)
5 0.0012 (0.0000) 0.0073 (0.0001) 0.4003 (0.0137) 0.4000 (0.0001) 0.0923 (0.0103) 0.0338 (0.0011)
5000
1 0.0003 (0.0000) 0.0050 (0.0001) 0.3934 (0.0578) 0.3991 (0.0001) 0.0676 (0.0058) 0.0107 (0.0002)
3 0.0003 (0.0000) 0.0050 (0.0001) 0.3930 (0.0141) 0.4002 (0.0001) 0.0310 (0.0046) 0.0112 (0.0001)
5 0.0003 (0.0000) 0.0050 (0.0001) 0.4023 (0.0079) 0.3999 (0.0001) 0.0512 (0.0040) 0.0111 (0.0001)
∆mis, where ζj = (ζj1, . . . , ζjpj )⊤ with ζja = 1/(ja) for 1 ≤ a ≤ pj.
Complex case. The missingness probability depends on observed covariates, the re
sponse, and the missingness of other clients: logit Pr(Mik = 1) = 1+P
j∈∆obs (−1)j ζ⊤
j xj
i−
yi +P
j ′ ∈∆mis
j′<k
(−1)j′ Mij′, k ∈ ∆mis. Here the last term introduces dependence on prior
clients’ missingness (indexed by j′ < k) to mimic more intricate cross-client missing
patterns.
After datasets with missing values are generated, we apply VCDS/EVCDS/IEVCDS
to obtain complete synthetic datasets, and then perform parameter estimation and
variable selection using the VFL-GLM-VS algorithm. For comparison, we consider two
baseline strategies: the Complete Case (CC) method, which uses only samples with
no missing values, and the Mean Imputation (Impute) method, which fills missing en
46

tries with column means prior to analysis. For both baselines we also apply VCDS or
EVCDS to produce privacy-protected versions, denoted CC-VCDS/CC-EVCDS and
Impute-VCDS/Impute-EVCDS, respectively. For IEVCDS we set the number of iter
ations to T = 10 to balance privacy cost and data utility. The privacy budget is set as
ε = 1.
Simulation Results Tables 4 and 5 report the performance of the competing meth
ods based on the VCDS approach for the linear and logistic regression models under
the two missing mechanisms, respectively. Tables 6 and 7 summarize the results for
EVCDS and IEVCDS. Overall, the proposed methods generally achieve superior vari
able selection and estimation performance: they produce smaller RMSE and FDR
and higher G-Means than the Complete Case (CC) and Mean Imputation (Impute)
baselines. This advantage is especially pronounced under MAR, where the missing
mechanism induces complex cross-client dependencies. The proposed approaches re
main competitive even at high missing rates because they can better accommodate
such dependencies and thus extract more information from incomplete samples. We
also note that, under MCAR, the Impute method combined with VCDS or EVCDS
attains comparable performance, which suggests that our privacy-preserving proce
dures can be applied on top of standard missing-data treatments without degrading
the original method’s effectiveness.
Comparing VCDS, EVCDS and IEVCDS yields several additional insights. First,
VCDS performs very well for linear regression under MCAR: both selection and es
timation errors decrease as sample size increases. However, VCDS deteriorates for
logistic regression and under MAR, indicating its limitations when facing more com
plex response types or complicated missing mechanisms. Second, EVCDS produces
47

results comparable to VCDS, with VCDS holding a slight advantage under MCAR.
This is intuitive: the empirical CDF used by VCDS (based on original ranks) already
yields consistent marginal estimates, whereas EVCDS relies on perturbed ranks and
therefore incurs some loss in marginal estimation accuracy. Under MAR, however,
EVCDS substantially outperforms VCDS in both model selection and coefficient es
timation, which agrees with our theoretical analysis. Third, IEVCDS substantially
improves upon EVCDS by iteratively exploiting the pseudo-complete data imputed
during successive iterations, particularly under MAR. Under MCAR, iterations bring
little improvement because the copula parameters are already consistently estimated
from the original sample; under MAR, the initial copula estimates are biased, and iter
ative imputation combined with re-estimation of copula parameters can mitigate this
bias, thereby improving the quality of the final privatized data and the performance of
downstream inference.
6 Real Data Application
In this section, we apply the proposed method to a case study on regulatory risk
assessment for Small and Medium-sized Enterprises (SMEs). SMEs are businesses
whose employee numbers, revenues, or assets fall below specific thresholds defined
by national or regional standards. They account for a significant proportion of all
enterprises in industrialized economies and contribute substantially to job creation
and economic resilience.
Compared to larger firms, SMEs tend to exhibit distinct operational characteristics.
Notably, they often show lower compliance rates with health, safety, and environmen
tal regulations. Effectively regulating SMEs presents a substantial policy challenge
48

Table 4: The average results of VCDS methods for the linear regression model based on 100 simulations, with standard error reported in parentheses.
N CC-VCDS Impute-VCDS VCDS
RMSE G-Means FDR RMSE G-Means FDR RMSE G-Means FDR
MCAR
1000 0.1815 0.5754 0.2424 0.1706 0.6620 0.1785 0.1536 0.6573 0.1745
(0.0171) (0.0046) (0.0042) (0.0135) (0.0039) (0.0028) (0.0136) (0.0017) (0.0011)
3000 0.1211 0.8121 0.0474 0.1196 0.8754 0.0561 0.0868 0.8901 0.0188
(0.0126) (0.0009) (0.0012) (0.0153) (0.0016) (0.0010) (0.0131) (0.0004) (0.0010)
5000 0.0965 0.8926 0.0156 0.0932 0.8902 0.0223 0.0727 0.9249 0.0151
(0.0051) (0.0001) (0.0003) (0.0138) (0.0004) (0.0004) (0.0138) (0.0008) (0.0003)
MAR Simple
1000 0.2599 0.4897 0.2889 0.1701 0.5921 0.2234 0.1863 0.5555 0.2071
(0.1466) (0.0084) (0.0232) (0.0077) (0.0359) (0.0031) (0.0499) (0.0232) (0.0120)
3000 0.1310 0.4640 0.0545 0.1385 0.7247 0.0613 0.1061 0.6881 0.0247
(0.0334) (0.0250) (0.0149) (0.0060) (0.0104) (0.0004) (0.0070) (0.0202) (0.0008)
5000 0.1214 0.5353 0.0250 0.1367 0.7783 0.0295 0.0781 0.8487 0.0228
(0.0209) (0.0152) (0.0098) (0.0115) (0.0176) (0.0032) (0.0075) (0.0004) (0.0004)
MAR Complicated
1000 0.2310 0.3635 0.4238 0.1762 0.5402 0.2607 0.2100 0.4425 0.1381
(0.0712) (0.0196) (0.0525) (0.0111) (0.0339) (0.0163) (0.0994) (0.0459) (0.0219)
3000 0.1829 0.5312 0.2213 0.1386 0.6600 0.1062 0.1227 0.6146 0.0617
(0.0516) (0.0184) (0.0152) (0.0277) (0.0052) (0.0058) (0.0666) (0.0054) (0.0019)
5000 0.1665 0.5499 0.0745 0.1250 0.6991 0.1057 0.0832 0.8202 0.0400
(0.0428) (0.0275) (0.0195) (0.0332) (0.0628) (0.0079) (0.0253) (0.0036) (0.0020)
for regulatory agencies, primarily due to several inherent constraints that limit the
applicability of conventional regulatory approaches. These include a general lack of
environmental awareness and technical expertise, low public visibility, and their sheer
volume, which results in infrequent inspections and leaves many SMEs beyond the
reach of policy initiatives. Given the limited resources of most regulatory bodies, it
is crucial to design strategies that can bring the majority of SMEs into regulatory
compliance in an efficient and scalable manner.
A primary goal of this study is to assess the regulatory risk faced by SMEs and to
identify key factors that influence such risk. To achieve this, we integrate five com
plementary sources of SME-related information, which were originally maintained in
49

Table 5: The average results of VCDS methods for the logistic regression model based on 100 simulations, with standard error reported in parentheses.
N CC-VCDS Impute-VCDS VCDS
RMSE G-Means FDR RMSE G-Means FDR RMSE G-Means FDR
MCAR
1000 0.2020 0.4832 0.3694 0.2026 0.4708 0.3458 0.1954 0.5456 0.3546
(0.0072) (0.0046) (0.0007) (0.0068) (0.0407) (0.0037) (0.0065) (0.0042) (0.0024)
3000 0.1722 0.6226 0.2839 0.1835 0.6157 0.1998 0.1751 0.7076 0.2374
(0.0224) (0.0172) (0.0104) (0.0159) (0.0192) (0.0070) (0.0140) (0.0067) (0.0042)
5000 0.1479 0.7639 0.1928 0.1438 0.7717 0.1877 0.1384 0.7944 0.1599
(0.0087) (0.0039) (0.0028) (0.0119) (0.0080) (0.0059) (0.0147) (0.0067) (0.0062)
MAR Simple
1000 0.2023 0.4963 0.3683 0.2037 0.5205 0.3664 0.1917 0.5673 0.3357
(0.0045) (0.0017) (0.0006) (0.0081) (0.0359) (0.0031) (0.0092) (0.0032) (0.0023)
3000 0.1777 0.6010 0.1432 0.1734 0.5957 0.2999 0.1579 0.6693 0.1726
(0.0137) (0.0118) (0.0052) (0.0228) (0.0185) (0.0048) (0.0167) (0.0080) (0.0036)
5000 0.1554 0.6542 0.0442 0.1624 0.6824 0.1707 0.1426 0.7991 0.1666
(0.0146) (0.0164) (0.0023) (0.0160) (0.0086) (0.0036) (0.0175) (0.0039) (0.0047)
MAR Complicated
1000 0.2052 0.5383 0.3218 0.2037 0.5356 0.3583 0.1973 0.5948 0.3184
(0.0145) (0.0044) (0.0048) (0.0083) (0.0017) (0.0006) (0.0138) (0.0006) (0.0004)
3000 0.1722 0.5314 0.1477 0.1888 0.5756 0.3143 0.1623 0.6970 0.1852
(0.0080) (0.0040) (0.0020) (0.0130) (0.0099) (0.0024) (0.0236) (0.0107) (0.0055)
5000 0.1593 0.7602 0.1680 0.1773 0.6857 0.2531 0.1394 0.8171 0.1495
(0.0169) (0.0030) (0.0041) (0.0143) (0.0092) (0.0036) (0.0186) (0.0053) (0.0068)
separate departments or institutions. These data sources include: (1) financial records
from the Credit Agency; (2) annual inspection data from the Market Supervision and
Administration Bureau; (3) records of business anomalies from the Judicial Authority;
(4) registration details from the Bureau of Industry and Commerce; and (5) adminis
trative penalty records from the Law Enforcement Agency. This integration yields a
dataset comprising 55 variables for 71,827 SMEs across various industries. A summary
of the SMEs dataset is provided in Table 8, and a detailed description of all variables
is available in Appendix of the supplementary materials.
Since the dataset is compiled from five distinct institutions, it is not feasible to
centralize the data for traditional analysis due to data security and privacy concerns.
50

Table 6: The average results of EVCDS and IEVCDS methods for the linear regression model based on 100 simulations, with standard
error reported in parentheses.
N CC-EVCDS Impute-EVCDS EVCDS IEVCDS
RMSE G-Means FDR RMSE G-Means FDR RMSE G-Means FDR RMSE G-Means FDR
MCAR (full obs. = 77.32%)
1000 0.2009 0.5659 0.3181 0.1682 0.6771 0.2127 0.1673 0.6928 0.2179 0.1907 0.6908 0.2178
(0.0069) (0.0031) (0.0004) (0.0192) (0.0010) (0.0015) (0.0148) (0.0023) (0.0064) (0.0135) (0.0037) (0.0034)
3000 0.1455 0.7501 0.1533 0.1146 0.8814 0.0308 0.0987 0.8612 0.0230 0.1823 0.8216 0.1323
(0.0294) (0.0096) (0.0111) (0.0188) (0.0040) (0.0007) (0.0220) (0.0055) (0.0010) (0.0159) (0.0038) (0.0045)
5000 0.1142 0.8764 0.0388 0.1064 0.9265 0.0254 0.0904 0.8510 0.0590 0.1675 0.8775 0.0652
(0.0152) (0.0013) (0.0005) (0.0218) (0.0005) (0.0001) (0.0329) (0.0249) (0.0115) (0.0020) (0.0049) (0.0029)
MAR Simple (full obs. = 44.38%)
1000 0.2135 0.5631 0.3040 0.1669 0.6788 0.2054 0.1905 0.6451 0.2544 0.1831 0.6911 0.2196
(0.0218) (0.0051) (0.0065) (0.0104) (0.0031) (0.0018) (0.0168) (0.0249) (0.0239) (0.0114) (0.0025) (0.0025)
3000 0.1515 0.7331 0.1526 0.1553 0.8037 0.1554 0.1479 0.7925 0.1210 0.1511 0.8343 0.0854
(0.0325) (0.0087) (0.0103) (0.0122) (0.0023) (0.0013) (0.0539) (0.0053) (0.0038) (0.0296) (0.0027) (0.0055)
5000 0.1376 0.7892 0.0964 0.1389 0.8531 0.0895 0.1240 0.8743 0.0327 0.1355 0.9026 0.0587
(0.0501) (0.0318) (0.0243) (0.0241) (0.0033) (0.0084) (0.0248) (0.0014) (0.0005) (0.0107) (0.0001) (0.0005)
MAR Complicated (full obs. = 23.79%)
1000 0.2723 0.5006 0.3612 0.1719 0.6705 0.2428 0.1787 0.6167 0.2362 0.1843 0.6854 0.1759
(0.0606) (0.0085) (0.0073) (0.0036) (0.0004) (0.0004) (0.0194) (0.0060) (0.0076) (0.0222) (0.0049) (0.0054)
3000 0.1770 0.6914 0.2196 0.1477 0.7944 0.1651 0.1340 0.8386 0.0910 0.1318 0.8855 0.0357
(0.0224) (0.0091) (0.0112) (0.0178) (0.0045) (0.0055) (0.0358) (0.0018) (0.0010) (0.0268) (0.0008) (0.0009)
5000 0.1542 0.7421 0.1633 0.1518 0.7897 0.1711 0.1156 0.8857 0.0487 0.1332 0.9468 0.0096
(0.0353) (0.0079) (0.0100) (0.0322) (0.0112) (0.0096) (0.0308) (0.0015) (0.0010) (0.0024) (0.0055) (0.0041)
51

Table 7: The average results of EVCDS and IEVCDS methods for the logistic regression model based on 100 simulations, with standard
error reported in parentheses.
N CC-EVCDS Impute-EVCDS EVCDS IEVCDS
RMSE G-Means FDR RMSE G-Means FDR RMSE G-Means FDR RMSE G-Means FDR
MCAR (full obs. = 77.32%)
1000 0.2041 0.5694 0.3206 0.1927 0.5605 0.2959 0.1785 0.6351 0.2823 0.1942 0.6833 0.2489
(0.0155) (0.0029) (0.0040) (0.0099) (0.0029) (0.0022) (0.0058) (0.0020) (0.0015) (0.0061) (0.0030) (0.0021)
3000 0.1620 0.7722 0.1633 0.1561 0.8230 0.1442 0.1238 0.8529 0.1090 0.1677 0.8500 0.1053
(0.0080) (0.0054) (0.0056) (0.0066) (0.0015) (0.0015) (0.0191) (0.0023) (0.0019) (0.0121) (0.0040) (0.0032)
5000 0.1372 0.8377 0.0928 0.1322 0.9268 0.0322 0.1106 0.8942 0.0419 0.1650 0.8746 0.0727
(0.0073) (0.0006) (0.0009) (0.0064) (0.0005) (0.0001) (0.0067) (0.0012) (0.0003) (0.0108) (0.0036) (0.0023)
MAR Simple (full obs. = 44.38%)
1000 0.2139 0.6019 0.2863 0.1848 0.6111 0.3070 0.1759 0.6145 0.2980 0.1635 0.6693 0.2513
(0.0262) (0.0014) (0.0014) (0.0107) (0.0006) (0.0003) (0.0065) (0.0022) (0.0022) (0.0014) (0.0014) (0.0009)
3000 0.1474 0.7585 0.1805 0.1605 0.7861 0.1806 0.1311 0.8095 0.1448 0.1365 0.8545 0.0937
(0.0166) (0.0027) (0.0036) (0.0172) (0.0046) (0.0035) (0.0175) (0.0042) (0.0046) (0.0121) (0.0006) (0.0011)
5000 0.1193 0.8406 0.0757 0.1457 0.8540 0.1186 0.1130 0.8657 0.0751 0.1165 0.9022 0.0413
(0.0185) (0.0011) (0.0022) (0.0108) (0.0021) (0.0014) (0.0106) (0.0024) (0.0008) (0.0171) (0.0012) (0.0014)
MAR Complicated (full obs. = 23.79%)
1000 0.2490 0.5345 0.3614 0.1819 0.6082 0.3102 0.1842 0.6179 0.2944 0.1776 0.6659 0.2534
(0.0496) (0.0107) (0.0118) (0.0097) (0.0047) (0.0031) (0.0056) (0.0056) (0.0043) (0.0060) (0.0021) (0.0021)
3000 0.1415 0.7600 0.1499 0.1634 0.7684 0.1927 0.1275 0.8098 0.1485 0.1291 0.8665 0.0909
(0.0137) (0.0039) (0.0026) (0.0178) (0.0111) (0.0059) (0.0261) (0.0049) (0.0053) (0.0134) (0.0002) (0.0019)
5000 0.1281 0.7964 0.0894 0.1470 0.8444 0.1285 0.1082 0.8612 0.0632 0.1185 0.9025 0.0553
(0.0101) (0.0010) (0.0004) (0.0106) (0.0040) (0.0028) (0.0156) (0.0011) (0.0010) (0.0136) (0.0005) (0.0009)
52

Table 8: Summaries of the SMEs dataset.
Client index Source of information Number of variables Missing proportion
1 Credit Agency 13 72.34%
2 Market Supervision and Administration Bureau 6 83.53%
3 Judicial Authority 6 87.33%
4 Bureau of Industry and Commerce 19 27.11%
5 Law Enforcement Agency 11 0.00%
Therefore, we adopt the VFL framework, in which each institution is treated as an
independent client. A notable feature of the dataset is the presence of client-wise miss
ingness across nearly all clients, with missing rates ranging from 27.11% to 87.33%.
This type of missingness arises due to the high cost of data acquisition or institu
tional limitations. For example, the sheer number of SMEs vastly exceeds the capacity
of inspectors, making it impractical to conduct comprehensive inspections. As a re
sult, many SMEs lack records in the Market Supervision and Administration Bureau.
Consequently, only 184 enterprises in the dataset have complete covariate information
across all five institutions.
In our analysis, we treat the variable “whether an enterprise receives administrative
penalties by the end of the year”, provided by the fifth client, as the binary response
variable Y ∈ {0, 1}. Our objective is to identify important covariates associated with
Y that may help predict future non-compliance behavior among SMEs. To this end, we
construct a vertically federated logistic regression model under the sparsity assumption
to analyze regulatory risk.
Before building the model, we conduct a descriptive analysis of the data. Due to the
presence of missing values, we compute the marginal Kendall’s rank correlation between
the response and each covariate using all available pairs of observations. Figure 3
illustrates the correlation structure among covariates across different clients. While
53

covariates within the same client generally have stronger correlations, there remains
substantial cross-client dependency, which we aim to exploit to improve both prediction
accuracy and variable selection performance.
Figure 3: The rank correlation map between covariates across five clients.
We consider three competing methods. The first is the “Single” method, in which
the analysis is conducted solely on the fifth client, where the response variable resides.
The second is the “CC” (Complete Case) method, which uses only the samples that
are fully observed across all institutions for vertically federated learning. The third
is the “Impute” method, where missing values are imputed using the mean of the
observed entries, and the resulting dataset is then used for downstream analysis. To
enhance data privacy, we apply the proposed VCDS/EVCDS approach to each method
to generate privatized datasets. To align with the simulation study, the privacy budget
is fixed at 1 and the iteration step at 10. The SCAD regularizer is adopted to induce
sparsity in the estimated coefficients. For performance comparison, we randomly split
54

the data into training and test sets 10 times. In each split, the test set consists of 92
randomly selected complete observations, while the training set includes the remaining
complete cases along with samples that contain missing covariates.
Table 9: Average prediction and variable selection results for the vertically federated logistic regression model based on 10 simulations. Standard errors are reported in parentheses.
Method VCDS EVCDS IEVCDS
Single CC Impute VCDS Single CC Impute EVCDS
Recall 0.0194 0.2761 0.6348 0.8190 0.5772 0.5945 0.7857 0.9113 0.9533
(0.0254) (0.1482) (0.0825) (0.0769) (0.0652) (0.1722) (0.0564) (0.0288) (0.0493)
AUC 0.5446 0.5202 0.5414 0.6607 0.5304 0.5534 0.5837 0.7156 0.7173
(0.0461) (0.0259) (0.0442) (0.0503) (0.0360) (0.0737) (0.0502) (0.0227) (0.0247)
NS 8 8 33 17 6 7 27 14 13 Note: The “NS” represents the average number of selected variables.
For the assessment of model prediction performance, we calculate Recall and Area
Under the Receiver Operating Characteristic Curve (AUC) for each test set corre
sponding to each method. The Recall is defined as Recall = TP/(TP + FN), where TP
denotes the number of risky SMEs correctly predicted as risky, and FN is the number
of risky SMEs wrongly predicted as compliant. Recall measures the model’s ability to
identify all truly positive instances. In the context of predicting regulatory violations
among SMEs, a higher recall indicates that the model can successfully detect the ma
jority of potentially non-compliant enterprises. This is particularly important in the
early-stage risk screening phase, where large-scale identification of high-risk entities is
prioritized, typically followed by manual review and further investigation. In addition,
we report the AUC, a standard evaluation metric that quantifies the model’s over
all ability to discriminate between risky and compliant enterprises across all possible
classification thresholds.
Table 9 reports the performance of all methods based on 10 replications. The com
peting methods shown in the left panel of Table 9 are incorporated into VCDS, while
55

those in the right panel are incorporated into EVCDS. Overall, the proposed methods
achieve higher Recall and AUC values with substantially smaller model sizes, suggest
ing that they deliver superior variable selection and prediction accuracy compared with
all other methods for the SMEs data, owing to their ability to incorporate correlation
information from incomplete observations. Comparing VCDS, EVCDS, and IEVCDS,
we observe that EVCDS outperforms VCDS, indicating that the missingness mecha
nism is more complex than MCAR, and that the MCAR-based VCDS method cannot
fully address such complex missing patterns. Furthermore, IEVCDS further improves
upon EVCDS, which is consistent with the theoretical analysis and simulation results.
The CC method consistently selects 7–8 variables, as there are only 92 complete obser
vations in the training sets. In contrast, the Impute method selects considerably more
variables than all other methods.
Table 2 in the supplementary materials lists the top NS variables most frequently
selected by each method across the 10 training sets, where NS denotes the average
number of variables selected by the corresponding method. The 13 variables selected
by the IEVCDS method include: financial variables such as ROE (return on equity)
and Scale from the Credit Agency; FOI-3y (number of inspections received in the past
three years) and CI-3y (number of compliant inspections in the past three years) from
the Market Supervision and Administration Bureau; ABNAP (frequency of not sub
mitting annual reports) and Removed (frequency of being removed from the abnormal
business record) from the Judicial Authority; SCOPE-1y and SCOPE-3y (frequency of
short- and long-term changes in business scope), and Industry of SMEs from the Bu
reau of Industry and Commerce; as well as Punished (whether administrative penalties
were received), FP2-3y (frequency of mild penalties in the past three years), FP3-3y
(frequency of severe penalties in the past three years), and FAP (frequency of adminis
56

trative penalties) from the Law Enforcement Agency. Most of these variables are also
selected by EVCDS and VCDS. These covariates are important indicators of SMEs’
compliance behavior, as confirmed in prior studies (Mohamad et al., 2014; Valaskova
et al., 2018; Zhou et al., 2021). Notably, the proposed methods can select variables
from clients with high missing rates, whereas the CC method tends to select variables
with more complete information, mostly from clients 1, 4, and 5, whose missing rates
are relatively lower. By contrast, the Impute method selects many redundant variables.
In summary, the proposed methods achieve higher Recall and AUC in test sets than
other competing approaches, while selecting fewer variables. This demonstrates their
advantage in both variable selection and predictive performance. Moreover, the selected
covariates are indeed relevant to the response variable, which is further supported by
findings in economics and management research.
7 Conclusion
Vertical Federated Learning has emerged as a promising paradigm for collaborative
learning with distributed data. In practice, data across clients in VFL often suffer
from client-wise missingness, where entire covariate blocks held by certain clients are
unobserved for some samples, resulting in a large proportion of unaligned data. Mean
while, conventional modeling and analysis under the VFL framework are prone to
privacy leakage risks. To fully exploit unaligned samples while safeguarding sensitive
information, it is essential to incorporate data privatization under the missingness con
straint. In this work, we develop a VFL data privatization framework that addresses
client-wise missingness using a Gaussian copula model.
We first introduce a private estimation procedure for the copula correlation struc
57

ture and the marginal distributions. Building on these components, we address data
privatization under both MCAR and MAR mechanisms. Specifically, under MCAR,
the correlation matrix and ECDFs privately estimated from the observed data are
consistent. In this setting, complete privatized data can be generated by resampling
Gaussian scores and transforming them back to the original data domain, a method we
term VCDS. However, VCDS is not applicable under MAR. To tackle this challenge,
we propose a nonparametric marginal estimation technique that yields consistent CDF
estimates even under MAR. This leads to the EVCDS algorithm, which generates pri
vatized data based on observed samples. Nevertheless, EVCDS still suffers from bias
caused by MAR, as the initial correlation matrix estimate remains biased. To address
this issue, we further introduce the IEVCDS algorithm, which iteratively refines the
copula parameter estimates using pseudo-complete data, and generates the final priva
tized dataset based on the updated parameters. We then investigate the utility of the
privatized data for GLM coefficient estimation and variable selection under VFL.
From a theoretical perspective, we establish the relationship between privacy guar
antees and estimation errors for both the correlation matrix and marginal distributions
in the copula model. We formally define Vertical Distributed Attribute Differential Pri
vacy (VDADP) for VFL and show that, under this definition, the proposed methods
provide rigorous differential privacy guarantees as well as utility guarantees measured
by the KL divergence between the original and privatized distributions. Furthermore,
we prove asymptotic normality, estimation consistency, and variable selection consis
tency for VFL-GLMs fitted to the privatized data. The effectiveness of our methods is
demonstrated through extensive simulations and real data analysis.
58

References
Abowd, J. M., Rodriguez, I. M., Sexton, W. N., Singer, P. E., and Vilhuber, L. (2020),
“The Modernization of Statistical Disclosure Limitation at the US Census Bureau,”
Tech. rep., US Census Bureau.
Alda, F. and Rubinstein, B. (2017), “The bernstein mechanism: Function release un
der differential privacy,” in Proceedings of the AAAI Conference on Artificial Intel
ligence, vol. 31.
Dai, W., Jiang, X., Bonomi, L., Li, Y., Xiong, H., and Ohno-Machado, L. (2020),
“VERTICOX: Vertically Distributed Cox Proportional Hazards Model Using the
Alternating Direction Method of Multipliers,” IEEE Transactions on Knowledge
and Data Engineering, 34, 996–1010.
Ding, B., Kulkarni, J., and Yekhanin, S. (2017), “Collecting Telemetry Data Privately,”
Advances in Neural Information Processing Systems, 30.
Dwork, C. (2006), “Differential Privacy,” in International colloquium on automata,
languages, and programming, Springer, pp. 1–12.
Erlingsson, U ́ ., Pihur, V., and Korolova, A. (2014), “Rappor: Randomized Aggregat
able Privacy-preserving Ordinal Response,” in Proceedings of the 2014 ACM SIGSAC
conference on computer and communications security, pp. 1054–1067.
Fan, J. and Li, R. (2001), “Variable selection via nonconcave penalized likelihood and
its oracle properties,” Journal of the American statistical Association, 96, 1348–1360.
Fan, Y., Li, J.-S., and Lin, N. (2023), “Residual Projection for Quantile Regression
in Vertically Partitioned Big Data,” Data Mining and Knowledge Discovery, 37,
710–735.
59

Fang, F. and Bao, S. (2024), “FragmGAN: Generative Adversarial Nets for Fragmen
tary Data Imputation and Prediction,” Statistical Theory and Related Fields, 8,
15–28.
Fang, W., Zhao, D., Tan, J., Chen, C., Yu, C., Wang, L., Wang, L., Zhou, J., and
Zhang, B. (2021), “Large-scale secure XGB for vertical federated learning,” in Pro
ceedings of the 30th ACM international conference on information & knowledge man
agement, pp. 443–452.
Feldman, J. and Kowal, D. R. (2024), “Nonparametric Copula Models for Multivariate,
Mixed, and Missing Data,” Journal of Machine Learning Research, 25, 1–50.
Fu, C., Zhang, X., Ji, S., Chen, J., Wu, J., Guo, S., Zhou, J., Liu, A. X., and Wang,
T. (2022), “Label Inference Attacks Against Vertical Federated Learning,” in 31st
USENIX security symposium (USENIX Security 22), pp. 1397–1414.
Gambs, S., Ladouceur, F., Laurent, A., and Roy-Gaumond, A. (2021), “Growing Syn
thetic Data through Differentially-Private Vine Copulas,” Proceedings on Privacy
Enhancing Technologies.
He, Y., Kang, Y., Zhao, X., Luo, J., Fan, L., Han, Y., and Yang, Q. (2024), “A
Hybrid Self-Supervised Learning Framework for Vertical Federated Learning,” IEEE
Transactions on Big Data.
Hu, Y., Liu, P., Ge, K., Kong, L., Jiang, B., and Niu, D. (2020), “Learning Privately
over Distributed Features: An ADMM Sharing Approach,” in 34th Conference on
Neural Information Processing Systems (NeurIPS 2020).
Huang, L., Li, Z., Sun, J., and Zhao, H. (2022), “Coresets for Vertical Federated
60

Learning: Regularized Linear Regression and K-Means Clustering,” Advances in
Neural Information Processing Systems, 35, 29566–29581.
Jiang, B., Raftery, A., Steele, R., and Wang, N. (2023a), “Privacy-Preserved and
High-Utility Synthesis Strategy for Risk-Based Stratified Subgroups of Canadian
Scleroderma Patient Registry Data,” Annals of Applied Statistics.
Jiang, X., Zhang, Y., Zhou, X., and Grossklags, J. (2023b), “Distributed Gan-Based
Privacy-Preserving Publication of Vertically-Partitioned Data,” Proceedings on Pri
vacy Enhancing Technologies.
Jin, X., Chen, P.-Y., Hsu, C.-Y., Yu, C.-M., and Chen, T. (2021), “Cafe: Catastrophic
Data Leakage in Vertical Federated Learning,” Advances in neural information pro
cessing systems, 34, 994–1006.
Kairouz, P., McMahan, H. B., Avent, B., Bellet, A., Bennis, M., Bhagoji, A. N.,
Bonawitz, K., Charles, Z., Cormode, G., Cummings, R., et al. (2021), “Advances
and Open Problems in Federated Learning,” Foundations and trends® in machine
learning, 14, 1–210.
Kalloori, S., Ricci, F., and Gennari, R. (2018), “Eliciting Pairwise Preferences in Rec
ommender Systems,” in Proceedings of the 12th ACM Conference on Recommender
Systems, pp. 329–337.
Kang, Y., Liu, Y., and Liang, X. (2022), “Fedcvt: Semi-Supervised Vertical Federated
Learning with Cross-View Training,” ACM Transactions on Intelligent Systems and
Technology (TIST), 13, 1–16.
Li, H., Xiong, L., and Jiang, X. (2014), “Differentially Private Synthesization of Multi
Dimensional Data Using Copula Functions,” in Advances in database technology:
61

proceedings. International conference on extending database technology, vol. 2014, p.
475.
Li, Y., Yang, X., Wei, Y., and Liu, M. (2024), “Adaptive and Efficient Learning with
Blockwise Missing and Semi-Supervised Data,” arXiv preprint arXiv:2405.18722.
Little, R. J. and Rubin, D. B. (2019), Statistical Analysis with Missing Data, John
Wiley & Sons.
Liu, Y., Kang, Y., Zou, T., Pu, Y., He, Y., Ye, X., Ouyang, Y., Zhang, Y.-Q., and Yang,
Q. (2024), “Vertical Federated Learning: Concepts, Advances, and Challenges,”
IEEE Transactions on Knowledge and Data Engineering, 36, 3615–3634.
Liu, Y., Liu, Y., Liu, Z., Liang, Y., Meng, C., Zhang, J., and Zheng, Y. (2020),
“Federated Forest,” IEEE Transactions on Big Data, 8, 843–854.
Micchelli, C. (1973), “The saturation class and iterates of the Bernstein polynomials,”
Journal of Approximation Theory, 8, 1–18.
Mohamad, Z. Z., Salleh, H. M., Ismail, N. D., and Chek, I. T. (2014), “Does Quality of
Non-financial Information Disclosure Influence Firms’ Profitability in Malaysia,” In
ternational Journal of Academic Research in Accounting, Finance and Management
Sciences, 4, 297–306.
Mohammed, N., Alhadidi, D., Fung, B. C., and Debbabi, M. (2013), “Secure Two
party Differentially Private Data Release for Vertically Partitioned Data,” IEEE
transactions on dependable and secure computing, 11, 59–71.
Phillips, G. M. (2003), “Bernstein polynomials,” in Interpolation and Approximation
by Polynomials, Springer, pp. 247–290.
62

Ren, Z., Yang, L., and Chen, K. (2022), “Improving Availability of Vertical Federated
Learning: Relaxing Inference on Non-Overlapping Data,” ACM Transactions on
Intelligent Systems and Technology (TIST), 13, 1–20.
Song, S., Lin, Y., and Zhou, Y. (2024), “Semi-Supervised Inference for Block-Wise
Missing Data without Imputation,” Journal of Machine Learning Research, 25, 1
36.
Tang, J., Korolova, A., Bai, X., Wang, X., and Wang, X. (2017), “Privacy Loss in
Apple’s Implementation of Differential Privacy on Macos 10.12,” arXiv preprint
arXiv:1709.02753.
Tang, P., Cheng, X., Su, S., Chen, R., and Shao, H. (2019), “Differentially Private
Publication of Vertically Partitioned Data,” IEEE transactions on dependable and
secure computing, 18, 780–795.
Team, A. e. a. (2017), “Learning with Privacy at Scale,” Apple Machine Learning
Journal, 1, 1–25.
Valaskova, K., Kliestik, T., Svabova, L., and Adamko, P. (2018), “Financial Risk
Measurement and Prediction Modelling for Sustainable Development of Business
Entities Using Regression Analysis,” Sustainability, 10, 2144.
Wang, C., Liang, J., Huang, M., Bai, B., Bai, K., and Li, H. (2020), “Hybrid Differ
entially Private Federated Learning on Vertically Partitioned Data,” arXiv preprint
arXiv:2009.02763.
Wang, G., Gu, B., Zhang, Q., Li, X., Wang, B., and Ling, C. X. (2023), “A Unified
Solution for Privacy and Communication Efficiency in Vertical Federated Learning,”
Advances in Neural Information Processing Systems, 36, 13480–13491.
63

Wang, T., Blocki, J., Li, N., and Jha, S. (2017), “Locally Differentially Private Pro
tocols for Frequency Estimation,” in 26th USENIX security symposium (USENIX
Security 17), pp. 729–745.
Warner, S. L. (1965), “Randomized Response: A Survey Technique for Eliminating
Evasive Answer Bias,” Journal of the American Statistical Association, 60, 63–69.
Xu, S., Sun, W. W., and Cheng, G. (2025), “Rate-Optimal Rank Aggregation with
Private Pairwise Rankings,” Journal of the American Statistical Association, 120,
737–750.
Xue, F., Ma, R., and Li, H. (2025), “Statistical Inference for High-Dimensional Linear
Regression with Blockwise Missing Data,” Statistica Sinica, 35, 431–456.
Xue, F. and Qu, A. (2021), “Integrating Multisource Block-Wise Missing Data in Model
Selection,” Journal of the American Statistical Association, 116, 1914–1927.
Yang, M., Chi, C.-H., Lam, K.-Y., Feng, J., Guo, T., and Ni, W. (2024a),
“Tabular Data Synthesis with Differential Privacy: A Survey,” arXiv preprint
arXiv:2411.03351.
Yang, M., Guo, T., Zhu, T., Tjuawinata, I., Zhao, J., and Lam, K.-Y. (2024b), “Lo
cal Differential Privacy and Its Applications: A Comprehensive Survey,” Computer
Standards & Interfaces, 89, 103827.
Yang, Y., Ye, X., and Sakurai, T. (2022), “Multi-View Federated Learning with Data
Collaboration,” in Proceedings of the 2022 14th International Conference on Machine
Learning and Computing, pp. 178–183.
Zhang, C. H. (2010), “Nearly unbiased variable selection under minimax concave
penalty,” Annals of Statistics, 38, 894–942.
64

Zhang, Y., Xu, Q., Tang, N., and Qu, A. (2024), “Differentially Private Data Release for
Mixed-type Data via Latent Factor Models,” Journal of Machine Learning Research,
25, 1–37.
Zhao, F., Li, Z., Ren, X., Ding, B., Yang, S., and Li, Y. (2024), “VertiMRF: Differen
tially Private Vertical Federated Data Synthesis,” in Proceedings of the 30th ACM
SIGKDD Conference on Knowledge Discovery and Data Mining, pp. 4431–4442.
Zhao, Z., Wu, H., Van Moorsel, A., and Chen, L. Y. (2023), “Gtv: Generating Tabular
Data via Vertical Federated Learning,” arXiv preprint arXiv:2302.01706.
Zhou, D., Qiu, Y., and Wang, M. (2021), “Does Environmental Regulation Promote
Enterprise Profitability? Evidence from the Implementation of China’s Newly Re
vised Environmental Protection Law,” Economic Modelling, 102, 105585.
Zhu, L., Liu, Z., and Han, S. (2019), “Deep Leakage from Gradients,” Advances in
neural information processing systems, 32.
Zou, H. and Li, R. (2008), “One-step Sparse Estimates in Nonconcave Penalized Like
lihood Models,” Annals of statistics, 36, 1509–1533.
65

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:45.103Z
- **Text Length:** 120129 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 65 of 65
