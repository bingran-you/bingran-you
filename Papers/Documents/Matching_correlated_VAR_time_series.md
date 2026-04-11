# PDF Document: Araya and Tyagi - 2025 - Matching correlated VAR time series.pdf

**File Path:** Araya and Tyagi - 2025 - Matching correlated VAR time series.pdf

**Processed Date:** 2026-02-10T18:13:40.974Z

**File Size:** 1510.35 KB

**Total Pages:** 52

**Extracted Pages:** 52

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3405

**Title:** Matching correlated VAR time series

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Matching correlated VAR time series∗
Ernesto Araya1
araya@math.lmu.de
Hemant Tyagi†2
hemant.tyagi@ntu.edu.sg
1Department of Mathematics, Ludwig-Maximilians-Universita ̈t Mu ̈nchen 2Division of Mathematical Sciences, SPMS, NTU Singapore 637371
Abstract
We study the problem of matching correlated VAR time series databases, where a multivariate time series is observed along with a perturbed and permuted version, and the goal is to recover the unknown matching between them. To model this, we introduce a probabilistic framework in which two time series (xt)t∈[T ], (x#
t )t∈[T ] are jointly generated, such that x#
t = xπ∗(t) + σx ̃π∗(t), where (xt)t∈[T ], (x ̃t)t∈[T ] are independent and identically distributed vec
tor autoregressive (VAR) time series of order 1 with Gaussian increments, for a hidden π∗. The objective is to recover π∗, from the observation of (xt)t∈[T ], (x#
t )t∈[T ]. This generalizes the classical problem of matching independent point clouds to the time series setting. We derive the maximum likelihood estimator (MLE), leading to a quadratic optimization over permutations, and theoretically analyze an estimator based on linear assignment. For the latter approach, we establish recovery guarantees, identifying thresholds for σ that allow for perfect or partial recovery. Additionally, we propose solving the MLE by considering convex relaxations of the s-
et of permutation matrices (e.g., over the Birkhoff polytope). This allows for efficient estimation of π∗ and the VAR parameters via alternating minimization. Empirically, we find that linear assignment often matches or outperforms MLE relaxation based approaches.
Keywords: geometric planted matching, vector autoregressive models, linear assignment estimator, non-sequence samples
Contents
1 Introduction 2 1.1 Correlated VAR model for planted matching . . . . . . . . . . . . . . . . . . . . . . . 4 1.2 Contributions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 1.3 Related work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 1.4 Notation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
2 MLE and the linear assignment estimator 7 2.1 MLE for recovering π∗ and A∗ when σ is known . . . . . . . . . . . . . . . . . . . . . 7 2.2 Linear assignment approach for estimating π∗ . . . . . . . . . . . . . . . . . . . . . . 10
∗Authors are listed alphabetically †HT was supported by a Nanyang Associate Professorship (NAP) grant from NTU Singapore
1
arXiv:2511.18553v1 [math.ST] 23 Nov 2025

3 Analysis for the linear assignment estimator 12 3.1 Augmenting cycles in the analysis of (2.7) . . . . . . . . . . . . . . . . . . . . . . . 12 3.2 Warm-up: augmenting 2-cycles . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 3.3 General augmenting t-cycles . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15 3.4 Proof of Proposition 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16 3.5 Proof of Proposition 2 . . . . . . . . . . . . . . . . .-
 . . . . . . . . . . . . . . . . . . 21
4 Algorithms for solving the MLE 25 4.1 Relaxed MLE strategy for estimating Π∗ given A . . . . . . . . . . . . . . . . . . . . 25 4.2 Iterative algorithm for estimating Π∗ . . . . . . . . . . . . . . . . . . . . . . . . . . . 27
5 Numerical experiments 28 5.1 Algorithmic implementation details . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28 5.2 Relaxed MLE with known A∗ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30 5.3 Algorithms with unknown A∗ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33
6 Conclusion and open questions 37
A Proof of Lemma 2 41
B Proof of Lemma 3 42
C Auxiliary lemmas for proof of Proposition 2 44 C.1 Proof of Lemma 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44 C.2 Proof of Lemma 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44 C.3 Proof of Lemma 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45 C.4 Proof of Lemma 10 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45 C.5 Proof of Lemma 11 . . . . . . . . . . . . . . . . . . . -
. . . . . . . . . . . . . . . . . . 48
D Proof of Theorem 1 49
E Additional experiments 51 E.1 Estimate A∗ first . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51 E.2 Other algorithms for the Birkhoff relaxation . . . . . . . . . . . . . . . . . . . . . . . 52
1 Introduction
We consider the problem of matching two point clouds in Rd. Let X, X# ∈ Rd×T denote the matrices corresponding to the two point clouds, each containing T points in Rd. We say that the point clouds are correlated if there exists a permutation1 map π∗ : [T ] → [T ] such that every column x#
π∗(t) of X# is correlated with the column xt of X. Given X and X#, the goal then is to recover
the unknown permutation π∗. This problem has a rich history with applications in computational geometry and computer vision, multi-object tracking etc. On the theoretical front, this has received attention recently when the columns of X, X# are assumed to be random i.i.d vectors [32, 10]. Specifically, [32] considered the setup where we first (a)
1Extensions for which this holds only for a subset of [m], considering sub-permutations, can be formulated analogously.
2

draw x1, . . . , xT ∼ N (0, Id) independently, then (b) draw the noise vectors x ̃1, . . . , x ̃T ∼ N (0, Id) independently, and finally (c) obtain x#
t as
x#
t = xπ∗(t) + σx ̃π∗(t) for t = 1, . . . , T.
It was shown that the maximum likelihood estimator (MLE), which is essentially a linear assignment problem, provably recovers π∗ provided the noise level σ is less than a threshold. This was shown for different recovery criteria such as exact recovery and partial recovery (with sublinear number of errors). The setting in [10] extended these results to more general distributions, along with information-theoretic lower bounds; see Section 1.3 for a more detailed overview of related work.
Motivation for matching time series data. The assumption that the points within a point cloud are drawn independently was motivated in [32] by a stylized model for multi-target tracking involving T independent standard Brownian motions. Here, x1, . . . , xT correspond to the position
of the (unlabeled) particles at a given time instant, and x#
1 , . . . , x#
T corresponds to their positions at the next time instant. In this paper, we consider a generalization of this setting to one where (x1, . . . , xT ) and (x ̃1, . . . , x ̃T ) are the realization of a stochastic process, hence the individual xt’s and x ̃t’s will be respectively dependent. The motivation for studying this time-series setting comes from the following applications.
• Time stamp shuffling as a privacy mechanism. One natural way to obfuscate temporal data is to release values while discarding or shuffling their time stamps. This was recently considered in the context of differential privacy for sensitive time series data such as health care records, financial transactions etc. [49, 48]. The intuition is that the resulting data remains useful for certain aggregate statistics (e.g., mean) while concealing the temporal structure. Consider wage data: observing a p-
erson’s monthly income over several years without the ordering allows one to compute their average salary, but conceals whether their earnings followed a steady upward trend or fluctuated seasonally. From the shuffled sequence alone, these scenarios may look indistinguishable. This raises the question of whether timestamp shuffling offers meaningful privacy protection: if an adversary has access to an auxiliary, correlated time series, they may be able to partially reconstruct the original orderin-
g and recover sensitive temporal information.
• Sensor fusion and lost timestamps. In distributed sensing networks (seismology, wireless sensors, Internet of Things), different sensors may not be synchronized. One sensor provides a clean signal with timestamps, while another provides a noisy but related signal without ordering (e.g. due to packet loss, buffering, or asynchronous sampling). For e.g., in the Internet of Things context, one may have many cheap sensors scattered around, each with limited processing power and no global clock synch-
ronization. The data streams can arrive out of order, delayed, or with missing timestamps, as reported in [30] when analyzing data from a real time system [6]. A natural goal then would be to align unordered sensor readings with the reference signal by exploiting temporal correlations, thus improving reconstruction accuracy.
• Time series alignment. A fundamental problem in time series analysis is to align different, potentially misaligned sequences that reflect the same underlying phenomenon. Misalignment may be caused by temporal stretching, delays, or nonlinear warping. In the classical formulation, each series preserves its internal temporal structure, and the task is to find an appropriate monotone correspondence between time indices. In contrast, a shuffled timestamp setting can model more severe distortions suc-
h as measurement defects, packet loss, or
3

corrupted logging systems, where the ordering of observations is partially lost. This makes the alignment problem more challenging and closer in spirit to matching under unknown permutations. Applications of time series alignment are widespread, e.g., in neuroscience [29], speech and gesture recognition [39], and bioinformatics [2] to name a few.
1.1 Correlated VAR model for planted matching
Given a matrix A∗ ∈ Rd×d, where d ∈ N, suppose (xt)t∈[T ] is generated as follows.
xt+1 = A∗xt + ξt+1, for t = 1, . . . , T − 1, (1.1)
x1 = ξ1, (1.2)
where (ξt)t∈[T ] is a sequence of i.i.d. standard Gaussian vectors in Rd. The above model is a Vector Autoregressive model of order 1, hereby referred to as VAR(1, d, T ). The matrix A∗ contains the coefficients that determine this temporal relationship and is referred to as the system matrix.
CVAR: A model for correlated time series. Let (x ̃t)t∈[T ] be an independent copy of the “base” time series (xt)t∈[T ], drawn from VAR(1, d, T ), but with an independent sequence of i.i.d.
standard Gaussian vectors (ξ ̃t)t∈[T ]. Given a noise parameter σ ≥ 0, we first construct the perturbed time series
x′
t = xt + σx ̃t, for all t ∈ [T ]. (1.3)
Here, (x′t)t∈[T ] is a noisy version of (xt)t∈[T ], with σ controlling the noise magnitude. Finally, given
a permutation π∗, we define
x#
t = x′
π∗(t), for all t ∈ [T ].
The above model is referred to as the correlated VAR model with parameters A∗, π∗ and σ, or CVAR(1, d, T ; A∗, π∗, σ) in short. The pair (xt)t∈[T ], (x#
t )t∈[T ] is then a realization from this
model. Our goal is to recover the planted matching π∗ given the observations ((xt)t∈[T ], (x#
t )t∈[T ]),
where the matrix A∗ is unknown. Before delving into strategies for estimating π∗, the following remarks are worth noting.
1. The above setup is a generalization of the point clouds matching problem, presented in [32]. Indeed, if A∗ = 0, we have, for all t ∈ [T ],
xt = ξt and x ̃t = ξ ̃t.
In this case, x′t = ξt + σξ ̃t, which is identical to the setting in [32].
2. In the noiseless case (σ = 0) the permutation can be perfectly recovered with a simple algorithm. It suffices to match xt with x#
t′ such that xt = x#
t′ . Given that, for any s, t ∈ [T ] with t ̸= s, P(xt = xs) = 0, the algorithm returns the correct permutation almost surely.
3. Notice that we assumed that the base time series is presented with its temporal ordering known. Hence, one may interpret the matching problem as that of recovering the temporal ordering of the unordered series (x#
t )t∈[T ] using information available from (xt)t∈[T ]. We touch upon this point briefly below, see Remarks 3 and 4 for a more detailed explanation.
Remark 1. Interpreting the time-stamps as labels for each data point in the time series, the assumption that the correct temporal order is known for the base time series corresponds to a standard assumption in data privacy applications. Specifically, in data de-anonymization settings,
4

one database is assumed to be public with known labels, while the other must remain private. The goal in this context is to recover the private labels using the public database as a reference (see, e.g., [37] for a seminal work in this area).
1.2 Contributions
Our contributions are outlined below.
1. We propose, to our knowledge, a novel statistical model for planted matching in the context of time series data. For this model, we derive the MLE estimator for estimating A∗, π∗ which amounts to minimizing a biconvex objective subject to nonconvex constraints (due to the set of permutations). We formulate several methods to solve it based on the alternating minimization framework, by considering different convex relaxations of the set of permutation matrices. The empirical performance of these-
 relaxations are compared through several experiments on synthetic data. Interestingly, the linear assignment (LA) estimator performs comparably to the best MLE relaxations even under high noise levels, when ∥A∗∥2 ≤ 1, raising the question of whether it achieves optimal, or near-optimal, performance in this regime. Experimentally, we found that for some values ∥A∗∥2 > 1, MLE relaxations slightly outperform the LA estimator.
2. On the theoretical front, we analyze the statistical performance of the LA estimator for recovering π∗, which is well studied for geometric matching problems in the i.i.d setting [32, 10]. This estimator is model agnostic and also does not need the base time series to be temporally ordered (see Remark 4). Assuming ∥A∗∥2 < 1, we derive bounds on the number of mismatched points by following the technique of counting augmenting paths, considered recently in [32] (and later in [10]); see Theorem 1.-
 Theorem 1 shows various thresholds on the noise level σ which imply different levels of recovery of π∗ (e.g., exact recovery, partial recovery). It’s statement is analogous to that obtained in [32], up to an additional factor proportional to (1 − ∥A∗∥2)5 appearing in the bounds; see Remark 5. The proof, while along the lines of that in [32] is considerably more challenging – not simply in the sense of more tedious calculations, but also in terms of technical difficulties imposed by the CVAR model-
; see Remark 7 for details.
1.3 Related work
Matching point clouds. As discussed earlier, our statistical model generalizes the i.i.d setting (within a point cloud) in [32] to the dependent setup, where each point cloud is a VAR time series. The work [10] extended the setup in [32] to handle more general classes of distributions, and also provides information-theoretic lower bounds on the expected error for any estimator. The latter was achieved by making a connection with matchings in random geometric graphs. Some of the results in [32] wer-
e shown to be information theoretically optimal in [47]. While we do not study lower bounds for the CVAR model, it is an interesting and non-trivial direction to pursue for future work.
Feature matching. A closely related problem referred to as the feature matching problem was studied in [9]. Here the goal is to match two sets of points in Rd (of potentially unequal size), and the proposed statistical model assumes all the points to be independently generated Gaussian’s. The means of the Gaussian distributions for one point cloud are denoted (θ∗
i )i while that of the
other point cloud are (θ∗
π∗(i))i, with π∗ the latent permutation. The performance of different
5

estimators, including the LA estimator (referred therein as the least sum of squares estimator) was studied theoretically with aim of establishing the minimax rate of separation between the θi’s for consistent recovery of π∗. This result was extended in [17] to the setting where the second point set can contain outliers.
Covariance alignment. In [20], the authors, motivated by the feature matching problem, study the task of covariance matrix alignment. Specifically, two independent samples of i.i.d points are observed: one distributed as N (0, Σ), and the other as N (0, Π∗ΣΠ∗⊤), where Π∗ is a hidden permutation matrix. In this setting, Σ can be viewed as a nuisance parameter, and the goal is to align the sample covariance matrices of the two datasets. To recover Π∗, the authors derive a quasi–maximum likelihood es-
timator, which reduces to solving a quadratic optimization problem over the permutation set—an instance of the Quadratic Assignment Problem (QAP) (known to be NP-hard). They propose a relaxation over the Birkhoff polytope, referred to as the Gromov–Wasserstein estimator, due to its connection with optimal transport, and show that this estimator is minimax optimal.
Graph matching. In the graph matching problem, the goal is to find an assignment between the vertices of two graphs such that their edges are maximally aligned. This problem has found many applications in computer vision [14], data de-anonymization [37] and protein-protein interactions [50], to name a few. In the statistical version of the problem, the pair of graphs are realizations of a probabilistic model for correlated random graphs. The most popular models are the correlated Erd ̋os-R ́enyi m-
odel [38] and the correlated Gaussian Wigner model [11]. For both models, the MLE corresponds solving a QAP problem. Many algorithms rely on convex relaxations [3, 35, 15, 4], and some of our proposed relaxations for MLE in our setting draw inspiration from those of graph matching. A related line of work exists for recovering planted matchings in weighted bipartite graphs, without a latent geometric structure [12, 41, 36].
Learning dynamical systems from non-sequenced data. The problem of learning dynamical systems from non-sequenced data has received significantly less attention than the setting of sequenced observations. This was first proposed in [23] for linear VAR models where it was assumed that multiple i.i.d realizations of the model are first generated and then a single state is sampled at random from each trajectory. An Expectation-Maximization (EM) algorithm was proposed and tested on synthetic data. This-
 was extended to non-linear VAR models in [26] where the singletrajectory setting was also considered. For this setup, [26] proposed a convex program over the Birkhoff polytope for estimating the latent ordering of the points. The work [24] considered linear VAR models where a small amount of non-sequenced data drawn from the stationary distribution of the model is also available. A penalized least-squares method was proposed where the penalization is based on the Lyapunov equation concerning the -
covariance matrix of the stationary distribution. Finally, [25] considered learning (first order or Hidden) Markov models from non-sequenced data, and proposed methods based on tensor decomposition along with theoretical guarantees.
1.4 Notation
We reserve lowercase letters for vectors and uppercase letters for matrices. For x ∈ Rd, we write ∥x∥2 for the standard Euclidean (l2) norm. Similarly, for a matrix X ∈ Rk×k′, ∥X∥F denotes its
Frobenius norm while ∥X∥2 denotes its spectral norm. Given matrices M ∈ Rk×k′ and N ∈ Rl×l′,
the standard Kronecker product between M and N is denoted by M ⊗N ∈ Rkl×k′l′. For a symmetric matrix M ∈ Rk×k, its eigenvalues are denoted by λ1(M ) ≥ λ2(M ) ≥ · · · ≥ λk(M ).
6

Given T ∈ N, we let ST denote the set of permutation maps on {1, . . . , T } and PT the set of corresponding permutation matrices. Sets will be usually denoted by calligraphic letters. The notation x ∼ N (μ, Σ) specifies that x is a Gaussian random vector with mean μ and covariance matrix Σ. For negative functions f, g, we will often write f (x) = O(g(x)) if there exists c > 0 and x0 such that f (x) ≤ cg(x) for all x ≥ x0. Moreover, we write f (x) = Ω(g(x)) if g(x) = O(f (x)) holds, and write f (-
x) = Θ(g(x)) if both f (x) = O(g(x)) and g(x) = O(f (x)) hold. Finally, we write
f (x) = o(g(x)) if limx→∞
f (x)
g(x) = 0 and f (x) = ω(g(x)) if limx→∞
f (x)
g(x) = ∞.
2 MLE and the linear assignment estimator
2.1 MLE for recovering π∗ and A∗ when σ is known
We first derive the MLE for π∗ and A∗, given the observations (xt)t∈[T ], (x#
t )t∈[T ] generated from
CVAR(1, d, T ; A∗, π∗, σ). Notice that although our main goal is to recover π∗, in principle, the parameters A∗ and σ are also unobserved. For convenience, we will assume that σ is known. As we will see shortly, this assumption only enters the picture for obtaining the MLE of A∗. If A∗ is known, then the MLE of π∗ does not require σ to be known. In the work [32] where A∗ = 0, the MLE for π∗ (which is a linear assignment problem) was obtained for σ unknown.
Lemma 1 (MLE for CVAR given σ). Given σ, the MLE for (π∗, A∗) is found by solving
min
π∈ST ,A∈Rd×d
(T X
t=1
∥xt − Axt−1∥2
2+ 1
σ2 ∥(x#
π−1(t) − Ax#
π−1(t−1)) − (xt − Axt−1)∥2
2
)
, (2.1)
where we set π−1(0), x#
0 , x0 ≡ 0 for notational convenience.
Proof. Let (ξt)t∈[T ], (ξ ̃t)t∈[T ] be two sequences of iid standard Gaussian vectors in dimension d. If
(xt)t∈[T ], (x#
t )t∈[T ] were generated according to the CVAR(1, d, T ; A, π, σ) model, we would have
xt = Axt−1 + ξt and x ̃t = Ax ̃t−1 + ξ ̃t for t = 2, . . . , T,
with x1 = ξ1 and x ̃1 = ξ ̃1. On the other hand, x′t = xt + σx ̃t and x#
t = x′
π(t). Define the negative log-likelihood function, including σ as unobserved, by
L(A, π, σ) := − log fA,π,σ(x1, x#
1 , x2, x#
2 , . . . , xT , x#
T ),
where fA,π,σ denotes the joint density of x1, x#
1 , x2, x#
2 , . . . , xT , x#
T , under the CVAR(1, d, T ; A, π, σ) model. We use a similar notation to denote the density of marginals, e.g., fA,π,σ(xt) denotes the (marginal) density of xt. First, note that
x′
t = xt + σx ̃t = Axt−1 + ξt + σAx ̃t−1 + σξ ̃t
= Ax′
t−1 + ξt + σξ ̃t
= Ax′
t−1 + xt − Axt−1 + σξ ̃t.
7

Denoting2 fA,π,σ(xt, x′t|xt−1, x′t−1) the density of (xt, x′t) given xt−1, x′t−1, we have for t = 2, . . . , T ,
fA,π,σ(xt, x′
t|xt−1, x′
t−1) = fA,π,σ(xt|xt−1, x′
t−1)
| {z }
∼N (Axt−1,Id)
fA,π,σ (x′
t|xt, xt−1, x′
t−1)
| {z }
∼N (Ax′
t−1 +xt −Axt−1 ,σ 2 Id )
=C
σd exp − ∥xt − Axt−1∥22
2 exp − ∥x′t − Ax′t−1 − (xt − Axt−1)∥22
2σ2 ,
where C > 0 is a constant. The above is also valid for t = 1, with the notation x0 = x′0 = 0. With
that in mind, we have fA,π,σ = QT
t=1 fA,π,σ(xt, x′t|xt−1, x′t−1) which implies
− log fA,π,σ(x1, x′
1, . . . , xT , x′
T ) =dT log σ + 1
2
T
X
t=1
∥xt − Axt−1∥2
2 +TC
+1
2σ2
T
X
t=1
∥(x′
t − Ax′
t−1) − (xt − Axt−1)∥2
2.
Since x#
t = x′
π(t), for t = 1, . . . , T , we obtain
L(A, π, σ) =dT log σ + 1
2
T
X
t=1
∥xt − Axt−1∥2
2 +TC
+1
2σ2
T
X
t=1
∥(x#
π−1(t) − Ax#
π−1(t−1)) − (xt − Axt−1)∥2
2.
For a given σ, we arrive at the formulation in (2.1) for finding the optimal A, π.
Remark 2 (MLE when σ = 0). In the case σ = 0, the negative log-likelihood simplifies to
L(A, π, 0) =
T
X
t=1
∥xt − Axt−1∥2
2−
T
X
t=1
log 1{xt=x#
π−1 (t) } .
As a result, the optimization problem
mπ,iAn L(A, π, 0)
is separable. Consequently, the maximum likelihood estimate (MLE) for π∗ can be determined independently of A∗ using the simple algorithmic approach described in Section 1.1. On the other hand, the MLE for A∗ is obtained by solving
min
A∈Rd×d
T
X
t=1
∥xt − Axt−1∥2
2,
which corresponds to the problem of estimating the system matrix from a single observed realization of a time series. This is a well-known system identification problem, which has been extensively studied in the literature (see e.g., [42, 43, 40, 27]). To obtain recovery guarantees for that problem, A∗ is commonly assumed to be stable, i.e., its spectral radius lies within the unit circle. This is ensured by the stricter condition ∥A∗∥2 < 1. Such a condition will also be needed in our analysis lat-
er on, for the estimation of π∗.
2Given that x′
t = x#
t , we keep the notation fA,π,σ for the density of x1, x′
1, . . . , xT , x′
T.
8

For notational convenience, we consider in the sequel the following optimization problem
min
π∈ST ,A∈Rd×d
(T X
t=1
∥xt − Axt−1∥2
2+ 1
σ2 ∥(x#
π(t) − Ax#
π(t−1)) − (xt − Axt−1)∥2
2
)
, (2.2)
which given the one-to-one relation between π ∈ ST and its inverse, is equivalent (for all practical purposes) to (2.1).
Notation. In order to rewrite (2.2) in a more convenient form, the following notation will be useful.
• The shift operator S ∈ {0, 1}T ×T ,
S := 0 IT −1
0 0.
• The data matrices X, X# ∈ Rd×T , where
X = [x1 x2 . . . xT ] and X# = [x#
1 x#
2 . . . x#
T ].
• The permutation matrix Π ∈ PT corresponding to the map π,
Π=

    
e⊤
π(1)
e⊤
π(2)
...
e⊤
π(T )

    
,
where we recall that et corresponds to the t-th canonical (column) vector in RT .
With this notation, (2.2) can be rewritten as
min
Π∈PT ,A∈Rd×d ∥X − AXS∥2
F+ 1
σ2 ∥X#Π − AX#ΠS − (X − AXS)∥2
F . (2.3)
The following points are useful to note.
1. For a given A, observe from (2.3) that the optimal Π is given by
Πb MLE(A) ∈ argmin
Π∈PT
∥X#Π − AX#ΠS − (X − AXS)∥2
F . (2.4)
This formulation defines an optimization problem with a convex quadratic objective function in Π (as it corresponds to the squared norm of a linear function), subject to permutation constraints. Note that it does not require the knowledge of σ. While problem (2.4) is combinatorial in nature, it is unclear whether it is NP-hard. Later on in Section 4.1, we will consider solving its convex relaxations (see Algorithm 1) which can be solved efficiently and also perform well empirically. Note that if A-
 = 0 then (2.4) reduces to the linear assignment problem (studied in [32]) which is efficiently solvable.
9

2. For a given Π, observe from (2.3) that the optimal A is given by
AbMLE(Π) ∈ argmin
A∈Rd×d
∥X − AXS∥2
F+ 1
σ2 ∥X#Π − AX#ΠS − (X − AXS)∥2
F , (2.5)
which can be solved in closed form. This is proven in the following lemma, whose proof is deferred to Appendix A. Note that (2.5) requires knowledge of σ.
Lemma 2. For a given Π ∈ PT , define AbMLE(Π) as in (2.5). Then, it holds,
AbMLE(Π) = X(XS)⊤ + 1
σ2 X#Π − X X#ΠS − XS
⊤
× (XS)(XS)⊤ + 1
σ2 (X#ΠS − XS)(X#ΠS − XS)⊤
†
.
As discussed in Section 4.2, one can formulate an efficient alternating minimization heuristic (see Algorithm 2) for solving (2.3), by iteratively solving (i) an efficiently solvable relaxation of (2.4) to first obtain bΠ, and (ii) then using Πb in (2.5) to obtain AbMLE(Πb).
Remark 3 (Unordered base time-series). Suppose that the temporal ordering of the base time series (xt)tT=1 was unknown, which simply means that we are presented with a sequence (yt)tT=1 where
yt = xπ∗
1(t) for an unknown permutation π1∗. Then, the unknown parameters are π1∗, π∗ ∈ ST and
A∗. Denote Y = [y1 · · · yT ], so that Y = XΠ∗1, with Π∗1 ∈ PT the permutation matrix corresponding
to the map π1∗. Then it is easy to verify that the MLE (2.3) changes to
min
Π1,Π∈PT A∈Rd×d
∥Y Π1 − AY Π1S∥2
F+ 1
σ2 ∥X#Π − AX#ΠS − (Y Π1 − AY Π1S)∥2
F . (2.6)
As before, we can attempt solving (2.6) by alternating between updates to A and (Π, Π1); note that for a given A the objective in (2.6) is convex in (Π, Π1). Clearly, the estimated maps πb1, πb can then be used to recover the correspondence between (yt)tT=1 and (x#
t )tT=1.
2.2 Linear assignment approach for estimating π∗
Given the difficulties of provably solving (and analyzing) the MLE given in (2.3), we consider estimating Π∗ via linear assignment (LA). This consists in solving the (linear) optimization problem
Πb LA ∈ argmax
Π∈PT
⟨X#Π, X⟩F = ⟨Π, (X#)⊤X
| {z }
=:W
⟩F , (2.7)
which does not require A∗ or σ to be known. Recall that even if A∗ was known, finding ΠbMLE(A∗) would involve solving the quadratic problem (2.4), which in general appears to be a hard problem, as discussed earlier. In contrast, the problem (2.7) can be efficiently solved, using the Hungarian method [31], for instance. The matrix W can be viewed as a similarity matrix, whose entry (t, t′), defined as ⟨x#
t , xt′⟩, represents the similarity between x#
t and xt′ . As remarked earlier, (2.7) was recently used in the problem of matching point clouds (see for instance [32, 10]) which corresponds to our setup with A∗ = 0. In particular, (2.7) is the MLE for π∗ in that case for a fixed (not necessarily known) σ. As we will see below, this method is also meaningful in our more general setup where A∗ ̸= 0 necessarily. This is not obvious as the temporal correlation in our problem distinguishes it from the uncorrelated (i.e., A∗ = 0) case. Also note tha-
t (2.7) does not require knowledge of A∗. In that sense, our main guiding question is
10

“Under what conditions on A∗ and σ can guarantees be established for the linear assignment estimator Πb, defined in (2.7), to solve the VAR permutation regression problem?”
We now give our main result regarding the recovery guarantees of the LA estimator. Following [32], we distinguish three regimes of recovery, ordered from stronger to weaker: perfect recovery, constant error, and sublinear error. For the upper bounds presented here, the applicable regime depends on the assumptions imposed on the noise level σ.
Remark 4. Continuing Remark 3, note that LA is agnostic to the temporal nature of the data in terms of its formulation – it simply finds a correspondence between the columns of X and X#. This means that LA run on the matrices Y and X# (where Y is an unknown column-shuffling of X) would find a matching between the columns of Y and X#. It will not recover the underlying temporal ordering for the respective time-series (unless of course π1∗ is known to be identity).
Theorem 1. Let s0 := 21/d, and let A∗ ∈ Rd×d be such that ∥A∗∥2 < 1. Let X, X# ∈ Rd×T be observed data from the CVAR(1, d, T ; A∗, π∗, σ) model, and denote πbLA, the permutation map corresponding to the linear assignment estimator defined in (2.7). Define,
E := {t ∈ [T ] : πbLA(t) ̸= π∗(t)}
the set of mismatched indices by πbLA. Then the following three statements hold.
(i) If
σ2 ≤ (1 − ∥A∗∥2)5
4(sω(1)
0 T 4/d − 1)
.
Then we have E[|E|] → 0, when T → ∞. In particular, |E| = 0 with high probability.
(ii) If
σ2 ≤ (1 − ∥A∗∥2)5
4(sO(1)
0 T 4/d − 1)
.
Then, E[|E|] = O(1). In particular, for any function f (T ) = w(1), we have |E| ≤ f (T ) with high probability.
(iii) If
σ2 ≤ (1 − ∥A∗∥2)5
4(sω(1)
0 T 2/d − 1)
Then,
E[|E|] = O (1 − ∥A∗∥2)5
4σ2 + 1
−d
2
T2
!
.
Interestingly, the theorem recovers the results of [32], up to a multiplicative factor proportional
to (1 − A∗
2
)5. In particular, when ∥A∗∥2 = 0, parts (i) and (ii) yield the same noise condition
as in their work, except for a factor of 4 in the denominator. In the case of part (iii), our condition is also of the same order as theirs. We present the proof of Theorem 1 in the next section. As we will see, the time-series case introduces additional technical challenges, some of which lead to results that may be of independent interest.
11

Remark 5 (On the factor (1 − ∥A∗∥2)5). Theorem 1 requires ∥A∗∥2 < 1, which is stronger than requiring ρ(A∗) < 1. Such stability assumptions on A∗ are common for parameter estimation problems for VAR models. While recent results have tackled this under weaker conditions – such as that of marginal stability wherein ρ(A∗) ≤ 1 (see [43, 40]), or even unstable systems (e.g., [42, 40]) – a number of prior results consist of estimation error bounds which tend to worsen as ∥A∗∥2 approaches one (e.g., [19-
, 34]). In that sense, we believe that the condition ∥A∗∥2 < 1 needed in our results is an artefact of the proof, and can be weakened as well. Establishing this is an interesting direction for future work.
Remark 6 (Gaussian assumption on (ξt)tT=1). The assumption that ξt
i.i∼.d N (0, Id) is mainly for convenience for the theoretical analysis in Section 3, and also to be able to formulate the MLE as described already. This assumption was also made in [32] (for the i.i.d setting where A∗ = 0), but was relaxed in [10] to the more general class of sub-Gaussian distributions. We believe it should be similarly possible to extend our setup to the sub-Gaussian setting.
3 Analysis for the linear assignment estimator
In this section, we present the key techniques used to prove Theorem 1. Section 3.1 introduces the first moment method and the counting of augmenting paths, techniques commonly used in matching problems [32, 10].
3.1 Augmenting cycles in the analysis of (2.7)
The technique used in [32, 10] to obtain upper bounds on the error of the LA estimator Πb consists of counting the number of augmenting cycles. A cycle Ct of length t ≤ T is a sequence Ct = (i1, . . . , it) consisting of distinct indices i1, . . . , it ∈ [T ]. We say that Ct is an augmenting t-cycle, if and only if (recall W = (X#)⊤X)
t
X
k=1
Wikik+1 ≥
t
X
k=1
Wikik , (3.1)
where it+1 := i1. To see the importance of the augmenting cycles for upper bounding3 |E|, assume without loss of generality4 π∗ = id. It is easy to see that the elements of E belong to a union of disjoint augmenting t-cycles of πb, for different t ∈ {2, . . . , T }. This then implies
|E| ≤
T
X
t=2
tNt where Nt :=
X
(i1,...,it)is t-cycle
1{(i1,...,it) is augmenting}
represents the number of augmenting t-cycles. To guarantee perfect recovery, we will rely on the first moment method, which involves bounding the expected value of the error. For that, we have
E[|E|] ≤
T
X
t=2
tE[Nt] =
T
X
t=2
t
X
(i1,...,it)is t-cycle
P (i1, . . . , it) is augmenting . (3.2)
Therefore, a fundamental step is to bound the probability that a cycle Ct is augmenting. Section 3.2 analyzes this step for the case t = 2 to provide intuition for the general case in Section 3.3.
3Recall the definition of E as the set of mismatched indices in Theorem 1, and note that |E| corresponds to the Hamming distance between πb and π∗. 4This is common in the analysis of matching problems.
12

3.2 Warm-up: augmenting 2-cycles
We begin by tackling the case of augmenting 2-cycles, since it already contains the core of the argument. According to (3.1), a 2-cycle C = (a , b), for a given pair a, b ∈ [T ], is augmenting if
Wab + Wba ≥ Waa + Wbb, (3.3)
or equivalently
(x#
a )⊤xb + (x#
b )⊤xa ≥ (x#
a )⊤ + (x#
b )⊤xb. (3.4)
Recall that
x#
a = A∗x#
a−1 + ξa + σξ ̃a and xa = A∗xa−1 + ξa,
where we use the convention x#
0 = x0 = 0. Hence,
(x#
a )⊤xb = A∗x#
a−1 + ξa + σξ ̃a
⊤
(A∗xb−1 + ξb)
(x#
a )⊤xa = A∗x#
a−1 + ξa + σξ ̃a
⊤
(A∗xa−1 + ξa).
It is easy to see that (3.4) it is equivalent to
∥ξa − ξb∥2
2 ≤ σ⟨ξ ̃a − ξ ̃b, ξb − ξa⟩ + ⟨A∗x#
a−1 − A∗x#
b−1, ξb − ξa⟩
+ ⟨A∗x#
a−1 − A∗x#
b−1, A∗xb−1 − A∗
a−1⟩
+ ⟨ξb + σξ ̃b, A∗xa−1 − A∗xb−1⟩ + ⟨ξa + σξ ̃a, A∗xb−1 − A∗xa−1⟩.
(3.5)
Notice that when A∗ = 0, we obtain ∥ξa − ξb∥22 ≤ σ⟨ξ ̃a − ξ ̃b, ξb − ξa⟩, which appears in the upper bound argument in [32, 10]. In comparison, here we have to deal with more complicated expressions. Since xa# = xa + σx ̃a, we have (after some algebra) that (3.4) is equivalent to
σ⟨A∗(x ̃a−1 − x ̃b−1) + (ξ ̃a − ξ ̃b)
| {z }
=:y ̃ab
, A∗(xb−1 − xa−1) + ξb − ξa
| {z }
=:yab
⟩ ≥ ∥A∗(xa−1 − xb−1) − (ξb − ξa)∥2
2.
(3.6)
Assuming w.l.o.g that a > b, we have that conditioned on ξ1, . . . , ξa (so that yab is fixed) the left hand side of (3.6) is a Gaussian random variable. The following lemma more specifically characterizes this distribution. Its proof can be found in Appendix B.
Lemma 3. Let (xt)t∈[a],(x ̃t)t∈[a], (ξt)t∈[a] and (ξ ̃t)t∈[a] be as in CVAR(1, d, T ; A∗, π∗, σ). For a > b, define the variables
yab := A∗(xb−1 − xa−1) + (ξb − ξa),
y ̃ab := A∗(x ̃a−1 − x ̃b−1) + (ξ ̃a − ξ ̃b).
Then, conditional on (ξi)a
i=1, we have σ⟨y ̃ab, yab⟩ ∼ N (0, σ2 σ ̃12 + σ ̃22) , where
σ ̃2
1 = y⊤
ab
b−1
X
i=0
(A∗)i h
(A∗)a−b − Id
ih
(A∗)a−b − Id
i⊤
(A∗⊤)i
!
yab
σ ̃2
2 = y⊤
ab
a−b
X
i=1
(A∗)a−b−i(A∗⊤)a−b−i
!
yab.
13

If ∥A∗∥2 < 1, we further have that
σ2(σ ̃2
1 + σ ̃2
2) ≤ 5σ2∥yab∥22
1 − ∥A∗∥22
. (3.7)
From (3.6) and Lemma 3 we have that
P (C = (a, b) is augmenting)
= Eξ1,...,ξa
h
P σ⟨y ̃ab, yab⟩ ≥ ∥yab∥2
2 (ξi)a
i=1
i
= Eξ1,...,ξa

   
P

   
⟨y ̃ab, yab⟩
pσ ̃12 + σ ̃22
| {z }
=:g
≥ ∥yab∥22
σ
pσ ̃12 + σ ̃22
(ξi)a
i=1

   

   
≤ Eξ1,...,ξa
"
P g≥
r
1 − ∥A∗∥22
5σ2 ∥yab∥2
2 (ξi)a
i=1
!#
(using (3.7))
≤ Eξ1,...,ξa exp − (1 − ∥A∗∥22)
10σ2 ∥yab∥2
2 . (conditional on (ξi)a
i=1, g ∼ N (0, 1) by Lemma 3)
Denoting ξ1:a := (ξ1⊤, ξ2⊤, . . . , ξa⊤)⊤, we have that ∥yab∥22 = ξ1⊤:aBB⊤ξ1:a where
B :=

              
(A∗)a−b − Id
⊤ (A∗⊤)b−1
...
(A∗)a−b − Id
⊤ (A∗⊤)
(A∗)a−b − Id
⊤
(A∗)a−b−1
...
A∗⊤
Id

              
.
Thus,
Eξ1:a exp − (1 − ∥A∗∥22)
10σ2 ξ⊤
1:aBB⊤ξ1:a = 1
(2π) ad
2
Z
Rad
exp − ξ⊤ξ
2 exp


− (1 − ∥A∗∥22)
10σ2
| {z }
=:α
ξ⊤BB⊤ξ


 dξ
=1
(2π) ad
2
Z
Rad
exp − ξ⊤
2 (2αBB⊤ + Iad)ξ dξ
= det(2αBB⊤ + Iad)− 1
2
and we obtain the bound
P (C = (a, b) is augmenting) ≤ det (1 − ∥A∗∥22)
5σ2 BB⊤ + Iad
−1
2
. (3.8)
14

3.3 General augmenting t-cycles
The analysis of the general case t ≥ 2 is similar to that of t = 2, but involves cumbersome calculations. The following proposition, whose proof can be found in Section 3.4 summarizes our findings in this case. For t = 2, note that the bound stated in Proposition 1 is not necessarily always worse than that in (3.8).
Proposition 1. For t ≥ 2, let Ct = (i1, . . . , it) be a t-cycle with i1 the largest amongst the ik’s (w.lo.g). Then if ∥A∗∥2 < 1, it holds that
P(Ct is augmenting) ≤ det (1 − ∥A∗∥2)3
4σ2 L + Ii1d
−1
2
, (3.9)
where
L :=
t
X
k=1
B(αk, βk)B⊤(αk, βk),
with B⊤(αk, βk) ∈ Rd×(i1d) defined as the matrix
(A∗)αk−1 − (A∗)βk−1 . . . (A∗)αk−βk − Id (A∗)αk−βk−1 . . . A∗ Id 0 . . . 0 .
Moreover, αt := i1, βt := it, and
αk := max{ik, ik+1}, βk := min{ik, ik+1}, for 1 ≤ k ≤ t − 1.
Equipped with Proposition 1 and equation (3.2), it remains only to bound the right-hand side of (3.9) in order to obtain an upper bound on the expected error E[|E|]. The next proposition establishes the required estimate.
Proposition 2. Under the assumptions and notation of Proposition 1, we have that
det (1 − ∥A∗∥2)3
4σ2 L + Ii1d
−1
2
≤ (1 − ∥A∗∥2)5
4σ2 + 1
−(t−1) d
2
. (3.10)
The proof of Proposition 2 is outlined in Section 3.5. Theorem 1 is then proved by combining Propositions 1 and 2 with (3.2). The reader is referred to Appendix D for a complete derivation.
Remark 7 (Comparison with the analysis in [32]). Although our analysis for the LA estimator (in the VAR setting) is inspired by [32], it is useful to elaborate on the technical challenges arising here as compared to [32].
1. The proof of Proposition 1 follows, in spirit, along the same lines as that of [32, Prop. 3.1]. However the underlying calculations in our case are considerably more involved and tedious, due to the VAR structure on the model.
2. Secondly, Proposition 2 has a considerably easy analogue in [32] – indeed, if A∗ = 0, then the spectrum of L is known in closed form and bounding the det term is straightforward. In our setting, however, the spectrum of L is not known in closed form, and therefore, bounding the det term requires additional technical details. In particular, our argument relies only on information about the pseudo determinant of L.
3. Finally, once Propositions 2 and 1 are established, the remaining calculations needed to obtain Theorem 1 are essentially along the same lines as in [32].
15

3.4 Proof of Proposition 1
To ease notation, we sometimes use A instead of A∗ in this proof; especially during a long sequence of calculations. Suppose t ≥ 2 and Ct = (i1, i2, . . . , it), where we assume w.l.o.g that i1 is the largest among the indices in Ct. In this case, Ct is augmenting, if and only if
x#
it
⊤xi1 +
t−1
X
k=1
x#
ik
⊤xik+1 ≥
t
X
k=1
x#
ik
⊤xik . (3.11)
Recalling that
(
x#
ik = Ax#
ik−1 + ξik + σξ ̃ik
xik = Axik−1 + ξik ,
we have
x#
ik
⊤xik+1 = ⟨Ax#
ik−1 , Axik+1−1⟩ + ⟨Ax#
ik−1 , ξik+1 ⟩ + ⟨ξik + σξ ̃ik , Axik+1−1⟩ + ⟨ξik + σξ ̃ik , ξik+1 ⟩.
Then (3.11) is equivalent to
⟨Ax#
it−1 , Axi1−1⟩ + ⟨Ax#
it−1, ξi1 ⟩ + ⟨ξit + σξ ̃it , Axi1−1⟩ + ⟨ξit + σξ ̃it , ξi1 ⟩
+
t−1
X
k=1
⟨Ax#
ik−1 , Axik+1−1⟩ +
t−1
X
k=1
⟨Ax#
ik−1, ξik+1 ⟩ +
t−1
X
k=1
⟨ξik + σξ ̃ik , Axik+1−1⟩ +
t−1
X
k=1
⟨ξik + σξ ̃ik , ξik+1 ⟩
≥ ⟨Ax#
it−1, Axit−1⟩ + ⟨Ax#
it−1, ξit ⟩ + ⟨ξit + σξ ̃it , Axit−1⟩ + ⟨ξit + σξ ̃it , ξit ⟩
+
t−1
X
k=1
⟨Ax#
ik−1, Axik−1⟩ +
t−1
X
k=1
⟨Ax#
ik−1, ξik ⟩ +
t−1
X
k=1
⟨ξik + σξ ̃ik , Axik−1⟩ +
t−1
X
k=1
⟨ξik + σξ ̃ik , ξik ⟩.
The previous inequality is equivalent to
⟨Ax#
it−1, A(xi1−1 − xit−1)⟩ +
t−1
X
k=1
⟨Ax#
ik−1, A(xik+1−1 − xik−1)⟩ + ⟨Axit−1, ξi1 − ξit ⟩ +
t−1
X
k=1
⟨Ax#
ik−1, ξik+1 − ξik ⟩
+ ⟨ξit + σξ ̃it , A(xi1−1 − xit−1)⟩ + σ⟨ξ ̃it , ξi1 − ξit ⟩ + σ
t−1
X
k=1
⟨ξ ̃ik , ξik+1 − ξik ⟩ +
t−1
X
k=1
⟨ξik + σξ ̃ik , A∗(xik+1−1 − xik−1)⟩
≥1
2 ∥ξit − ξi1 ∥2
2+
t−1
X
k=1
∥ξik − ξik+1 ∥2
2
!
.
Writing x#
k = xk + σx ̃k, for k ∈ [t], we obtain after some re-shuffling and simple algebra, that (3.11) is equivalent to
σ⟨Ax ̃it−1 + ξ ̃it , A(xi1−1 − xit−1) + ξi1 − ξit ⟩ + σ
t−1
X
k=1
⟨Ax ̃ik−1 + ξ ̃ik , A(xik+1−1 − xik−1) + ξik+1 − ξik ⟩
≥1
2 ∥A(xit−1 − xi1−1) − (ξi1 − ξit )∥2
2+
t−1
X
k=1
∥A(xik−1 − xik+1−1) − (ξik+1 − ξik )∥2
2
!
.
16

Now, denoting
yt := A(xit−1 − xi1−1) − (ξi1 − ξit ),
yk := A(xik+1−1 − xik−1) − (ξik+1 − ξik ), for k = 1, . . . , t − 1,
we have that (3.11) is equivalent to
σ
t−1
X
k=1
⟨Ax ̃ik−1 + ξ ̃ik , yk⟩ ≥ 1
2 ∥yt∥2
2+
t−1
X
k=1
∥yk ∥2
2
!
. (3.12)
Note that, conditioned on ξ1, . . . , ξi1 the LHS above is a zero mean real Gaussian. To find its variance, we define π : {2, . . . , t} → {2, . . . , t} be the permutation that defines the ordering i1 > iπ(2) > iπ(3) > . . . > iπ(t), i.e., iπ(2) and iπ(t) are, respectively, the largest and the smallest indices among i2, i3, . . . , it. With this, we have
g := σ
t
X
k=1
⟨Ax ̃ik−1 + ξ ̃k, yk⟩ = σ
t
X
k=1
ik
X
j=1
y⊤
k Aik−j ξ ̃j
=σ
t
X
k=2
iπ(k)
X
j=1
y⊤
π(k)Aiπ(k)−j ξ ̃j + σ
i1
X
j=1
y⊤
1 Ai1−j ξ ̃j
=σ
" iπ(t)
X
j=1
y⊤
1 Ai1−j +
t−2
X
k=0
y⊤
π(t−k)Aiπ(t−k)−j
!
ξ ̃j
+
t−3
X
l=0


iπ(t−l−1)
X
j =iπ(t−l) +1
y⊤
1 Ai1−j +
t−2
X
k=l+1
y⊤
π(t−k)Aiπ(t−k)−j
!
ξ ̃j


+
i1 −iπ(2)
X
k=1
y⊤
1 Ai1−iπ(2)−kξ ̃iπ(2)+k
#
.
Hence, g ∼ N (0, σ2σ ̄2), where
σ ̄2 =
iπ(t)
X
j=1
y⊤
1 Ai1−j +
t−2
X
k=0
y⊤
π(t−k)Aiπ(t−k)−j
2
2
| {z }
=:σ ̄2
1
+
t−3
X
l=0
iπ(t−l−1)
X
j =iπ(t−l) +1
y⊤
1 Ai1−j +
t−2
X
k=l+1
y⊤
π(t−k)Aiπ(t−k)−j
2
2
| {z }
=:σ ̄2
2
+
i1 −iπ(2)
X
k=1
y⊤
1 Ai1−iπ(2)−k 2
2
.
| {z }
=:σ ̄2
3
We will now bound σ ̄2, with the help of the following result. From now onwards, we will consider π(1) = 1.
17

Lemma 4. For σ ̄ as defined above, it holds that
σ ̄2 ≤ 1
1 − ∥A∗∥2
3t
X
k=1
∥yk ∥2
2.
Proof. The proof consists in bounding the terms σ ̄12, σ ̄22, σ ̄32 separately, in three stages.
Bound on σ ̄12. We define
M0 := Aiπ(1)−iπ(t) Aiπ(2)−iπ(t) . . . Aiπ(t)−iπ(t)
| {z }
=Id
.
With this, we can rewrite and bound σ ̄12 as follows.
σ ̄2
1=
iπ(t)
X
j=1
Aj−1M0

     
yπ(1)
yπ(2)
...
yπ(t−1)
yπ(t)

     
2
2
≤

      
iπ (t)
X
j=1
∥A∥2(j−1)
2 M0

     
yπ(1)
yπ(2)
...
yπ(t−1)
yπ(t)

     
2
2

      
≤1
1 − ∥A∥22
M0

     
yπ(1)
yπ(2)
...
yπ(t−1)
yπ(t)

     
2
2
.
Bound on σ ̄22. For l = 1, . . . , t − 2, let
Ml := Aiπ(1)−iπ(t−l) Aiπ(2)−iπ(t−l) . . . Aiπ(t−l)−iπ(t−l) .
Then we have that
σ ̄2
2,l :=
iπ(t−l) −iπ(t−l+1) −1
X
k=0
Ak Ml

     
yπ(1)
yπ(2)
...
yπ(t−1)
yπ(t−l)

     
2
2
≤1
1 − ∥A∥22
Ml

     
yπ(1)
yπ(2)
...
yπ(t−1)
yπ(t−l)

     
2
2
.
Notice that Pt−2
l=1 σ ̄2
2,l = σ ̄22. Hence,
σ ̄2
2≤ 1
1 − ∥A∥22
t−2
X
l=1
Ml

     
yπ(1)
yπ(2)
...
yπ(t−1)
yπ(t−l)

     
2
2
.
18

Bounding σ ̄32. We have
σ ̄2
3=
iπ(1) −iπ(2)
X
j=1
y⊤
1 Aiπ(1)−iπ(2)−j 2
2
≤ ∥y1∥2
2
iπ(1) −iπ(2)
X
j=1
∥A∥2(iπ(1)−iπ(2)−j)
2
≤ ∥y1∥22
1 − ∥A∥22
=1
1 − ∥A∥22
∥ Mt−1
| {z }
=Id
y1∥2
2.
Summarizing, we have
σ ̄2 ≤ 1
1 − ∥A∥22
t−1
X
k=0
Mk

     
yπ(1)
yπ(2)
...
yπ(t−1)
yπ(t)

     
2
2
.
Now,
t−1
X
k=0
Mk

     
yπ(1)
yπ(2)
...
yπ(t−1)
yπ(t)

     
2
2
=

      
Aiπ(1)−iπ(t) Aiπ(2)−iπ(t) · · · · · · Id
Aiπ(1)−iπ(t−1) Aiπ(2)−iπ(t−1) · · · Id 0
... . . . 0
... . . . ...
Id 0 · · · 0

      
| {z }
:=Γ1

      
yπ(1)
yπ(2)
...
...
yπ(t)

      
2
2
.
Denote j1 = iπ(1), j2 = iπ(2), . . . , jt = iπ(t). Then Γ1 is a submatrix of Γ2, where
Γ2 =

      
Aj1−jt Aj1−jt−1 · · · · · · Id
Aj1−jt−1 Aj1−jt−2 · · · Id 0
... . . . 0
... Id
...
Id 0 · · · 0

      
.
Hence, ∥Γ1∥2 ≤ ∥Γ2∥2 holds. In addition, Γ2 = ΠΓ3, where
Γ3 =

   
Id A Id
... . . .
Aj1−jt · · · · · · Id

   
, Π=

   
Id
Id
...
Id

   
.
Thus, we have
∥Γ2∥2 = ∥Γ3∥2 ≤ sup
x∈[0,1]
j1−jt
X
s=0
Aseι2πsx
2
≤
j1−jt
X
s=0
∥As∥2 ≤ 1
1 − ∥A∥2
,
19

where the first inequality follows from a known result for banded Toeplitz matrices (see [28, Lemma 5] which in turn uses results from [7, Chapter 6]). This means we have shown that
∥Γ1∥2 ≤ 1
1 − ∥A∥2
which implies
σ ̄2 ≤ 1
1 − ∥A∥22
∥Γ1∥2
2
t
X
k=1
∥yπ(k)∥2
2≤ 1
1 − ∥A∥22
1
1 − ∥A∥2
2t
X
k=1
∥yπ(k)∥2
2
≤1
1 − ∥A∥2
3t
X
k=1
∥yk ∥2
2.
Recall from (3.12) and the definition of g that (3.11) is equivalent to g ≥ 1
2
Pt
k=1 ∥yk∥22 . Hence, we have
P g≥1
2
t
X
k=1
∥yk ∥2
2
!!
=P g
σσ ̄ ≥ 1
2σσ ̄
t
X
k=1
∥yk ∥2
2
!
≤P

g′ ≥ 1
2σ
t
X
k=1
∥yk ∥2
2
!1
2
(1 − ∥A∥2) 3
2

 (since g
σσ ̄ =: g′ ∼ N (0, 1))
≤ exp − 1
8σ2
t
X
k=1
∥yk ∥2
2(1 − ∥A∥2)3
!
.
Thus,
P (Ct = (i1, . . . , it) is augmenting) ≤ Eξ1,...,ξi1
"
exp − (1 − ∥A∥2)3
8σ2
t
X
k=1
∥yk ∥2
2
!#
.
Now, note that
yt = A(xi1−1 − xit−1) + ξi1 − ξit
= Ai1−1 − Ait−1 ξ1 + . . . + Ai1−it − I ξit + (Ai1−it−1ξit+1 + · · · + Aξi1−1) + ξi1 ,
y1 = A (xi2−1 − xi1−1) + ξi2 − ξi1
= − Ai1−1 − Ai2−1 ξ1 + . . . + Ai1−i2 − I ξi2 + Ai1−i2−1ξi2+1 + . . . + Aξi1−1 + ξi1 .
For k = 1, . . . , t − 1, we can write yk as follows. Define
αk := max{ik, ik+1}, βk := min{ik, ik+1} and sk =
(
1 if ik+1 > ik
−1 if ik+1 < ik
.
Then, yk can be written as
yk = A(xik+1−1 − xik−1) + ξik+1 − ξik
= sk Aαk−1 − Aβk−1 ξ1 + . . . + Aαk−βk − I ξβk + Aαk−βk−1ξβk+1 + . . . + Aξαk−1 + ξαk .
20

In fact, defining αt = i1, βt = it and st = 1, the above expression holds for k ∈ [t]. Let
B⊤(αk, βk)
:= (A∗)αk−1 − (A∗)βk−1 . . . (A∗)αk−βk − I (A∗)αk−βk−1 . . . A∗ I 0, 0, · · · 0,
| {z }
i1−αk times
,
and ξ := (ξ1⊤, ξ2⊤, · · · , ξ⊤
i1 )⊤ ∈ Ri1d. Then, we can write yk = skB⊤(αk, βk)ξ and
=⇒
t
X
k=1
∥yk ∥2
2 = ξ⊤
t
X
k=1
B(αk, βk)B⊤(αk, βk)
!
ξ = ξ⊤Lξ
for L as defined in Proposition 1. Hence we have (analogous to the case t = 2),
E exp − 1
8σ2 (ξ⊤Lξ)(1 − ∥A∗∥2)3 = det 1
4σ2 (1 − ∥A∗∥2)3L + Ii1d
−1
2
,
since ξ ∼ N (0, Ii1d).
3.5 Proof of Proposition 2
To prove Proposition 2, we need to control the spectrum of the matrix L. To this end, we begin by expressing L in a more convenient form. Observe that
B(αk, βk) = Pαk − Pβk ,
where each Pr ∈ Ri1d×d is a block matrix (with i1 vertically stacked blocks of size d × d) defined as
Pr =

            
(A∗)r−1
(A∗)r−2
...
A∗
Id 0
...
0

            
∈ R(i1d)×d,
with the final i1 − r blocks consisting of zero matrices. Using this representation, we can write L = M M ⊤, where
M := Pα1 − Pβ1 Pα2 − Pβ2 · · · Pαt − Pβt .
Assume, without loss of generality (see Remark 8), that the indices in the cycle Ct = (i1, i2, . . . , it) are ordered such that i1 > i2 > · · · > it. In this case, we can write
M = P (D ⊗ Id),
where P := Pi1 Pi2 . . . Pit and D is the incidence matrix of the directed cycle C−→t, which corresponds to Ct with the orientation i1 → i2 → . . . → it and i1 → it. With this representation, we obtain
L = M M ⊤ = P (DD⊤) ⊗ Id P ⊤ = P (LCt ⊗ Id
| {z }
=:L ̃ Ct
)P ⊤,
21

where LCt denotes the graph Laplacian of the cycle Ct. This decomposition enables us to view
L as a multiplicative perturbation of L ̃Ct, whose spectrum is explicitly known (it coincides with that of LCt, up to multiplicity). Indeed, it is well known (see e.g., [44]) that the eigenvalues of Ct correspond to the (unordered) values
2 1 − cos 2π(t − k)
t ; k = 1, . . . , t.
Denote s := rank(L),
that is, L has s non-zero eigenvalues (later, we will determine s). The following general lemma helps us to lower-bound the quantity
log det (1 − ∥A∗∥2)3
4σ2 L + Ii1d .
Lemma 5. Let Z ∈ Rq×q be symmetric and p.s.d with rank p ≤ q, and let λ1(Z), . . . , λp(Z) be its non-zero eigenvalues. Then, for any γ > 0,
log
p
Y
k=1
(γλk(Z) + 1) ≥ p log

γ
p
Y
k=1
λk (Z )
!1
p
+1

.
To prove this, we need the following elementary classic result, whose proof can be found in Appendix C.1.
Lemma 6 (Super-additivity of geometric means). Let (ak)1≤k≤n, (bk)1≤k≤n be two sequences of non-negative real numbers, then
n
Y
k=1
ak
!1/n
+
n
Y
k=1
bk
!1/n
≤
n
Y
k=1
(ak + bk)
!1/n
.
Lemma 5 follows directly from Lemma 6, by considering the sequences (ak)1≤k≤p and (bk)1≤k≤p defined as
ak = γλk(Z), bk = 1, for k ∈ {1, . . . , p},
and then applying the logarithm. Applying Lemma 5 with Z = L (so p = s) and γ = (1−∥A∗∥2)3
4σ2 ,
noting that λk(L) ≥ 0, for all k ∈ [i1d], we get
log det (1 − ∥A∗∥2)3
4σ2 L + Ii1d ≥ s log


(1 − ∥A∗∥2)3
4σ2
s
Y
k=1
λk(L)
!1
s
+1

. (3.13)
To complete the proof of the lower bound, two ingredients are required. First, we must determine the value of s. Second, we need to obtain a lower bound for
det∗(L) :=
s
Y
k=1
λk(L),
known as the pseudo determinant of L.
The following lemma gives the value of s and the rank of P (which will be needed later).
22

Lemma 7. Let P and L as defined above, and s = rank(L). Then s = (t − 1)d and rank(P ) = td.
Proof. The claim rank(P ) = td follows directly from the structure of the matrices Pi1, . . . , Pit. Indeed, for each k ∈ [t], the matrix Pik has column rank d, since it is a tall matrix containing Id as one of its blocks. Moreover, the Id blocks corresponding to different Pik are disjoint.
To see s = (t − 1)d, recall L = M M ⊤ where M = P (D ⊗ Id). Since P ∈ R(i1d)×(td) is full column-rank (as i1 ≥ t) and D ⊗ Id ∈ R(td)×(t−1)d is also full column-rank, hence it readily follows that s = (t − 1)d.
From Lemma 7 and (3.13), it follows that
log det (1 − ∥A∗∥2)3
4σ2 L + Ii1d ≥ (t − 1)d log

 
(1 − ∥A∗∥2)3
4σ2


(t−1)d
Y
k=1
λk(L)


1 (t−1)d
+1


. (3.14)
From the previous lemma, it also follows that rank(P ⊤P ) = td, which will be used in the lower bound for det∗(L).
Bound for the pseudo determinant of L. To obtain a bound on det∗(L), we require a sequence of auxiliary lemmas. The first, stated in a more general form, shows that the pseudo determinant of L = P (LCt ⊗ Id)P ⊤ can be factorized into the product of two terms, each depending exclusively on LCt or P , respectively. The proof can be found in Appendix C.2.
Lemma 8. Let Z ∈ Rq×q be a symmetric p.s.d matrix of rank p ≤ q, and let W ∈ Rq′×q, with q′ ≥ q. Assume that W has rank q. Then,
det∗(W ZW ⊤) = det∗(Z) det (W Up)⊤(W Up) ,
where Up ∈ Rq×p is the matrix whose columns are the eigenvectors of Z associated to its non-zero eigenvalues.
Given Lemma 7, the assumptions of Lemma 8 are satisfied with Z = (LCt ⊗ Id), W = P , p = (t − 1)d, q = td, q′ = i1d. Consequently, by these lemmas, we get
det∗ P (LCt ⊗ Id)P ⊤ = det∗(LCt ⊗ Id) det (P U(t−1)d)⊤(P U(t−1)d)
= det∗(LCt )d det (P U(t−1)d)⊤(P U(t−1)d)
By the Kirchoff’s matrix tree theorem [18, Lemma 13.2.4], we know that
1
t det∗(LCt) = |{spanning trees in Ct}|.
Since the number of spanning trees in the t-cycle graph is equal to t, we obtain
det∗(LCt ) = t2.
From this, we obtain,
det∗(L) = det∗ P (LCt ⊗ Id)P ⊤ = t2d det (P U(t−1)d)⊤(P U(t−1)d) . (3.15)
The following lemma helps us bound the right-hand side of the previous expression. Its proof is deferred to Appendix C.3.
23

Lemma 9. We have
det (P U(t−1)d)⊤(P U(t−1)d) ≥ det P ⊤P
Qd
k=1 λk (P ⊤P ) .
By the previous lemma, in order to obtain a lower bound on det∗(P LP ⊤), there are two ingredients left: a lower bound on det(P ⊤P ), and an upper bound on Qd
k=1 λk(P ⊤P ). For the latter,
we will use that
d
Y
k=1
λk(P ⊤P ) ≤ λ1(P ⊤P )d,
for which an upper bound on λ1(P ⊤P ) suffices.
Determinant of P ⊤P . The following lemma, whose proof is given in Appendix C.4, provides a formula of the explicit value of det P ⊤P , which could be of independent interest. The proof relies on decomposing the matrix P ⊤P into the product of square block lower triangular matrices and a Gram matrix whose determinant is straightforward to compute.
Lemma 10. For any cycle Ct = (i1, . . . , it), where t ≥ 2, it holds for P = Pi1 Pi2 . . . Pit that
det P ⊤P =


t−1
Y
k=1
det
ik −ik−1 −1
X
l=0
((A∗)l)⊤(A∗)l

 det
it−1
X
l=0
((A∗)l)⊤(A∗)l
!
≥ 1.
From the previous lemma, we obtain det(P ⊤P ) ≥ 1. Although simple, this bound is already nontrivial from the definition of P . Moreover, it allows us to identify the cases of equality: indeed, the bound is tight when ∥A∗∥2 = 0 or when the cycle is Ct = (t, t − 1, . . . , 2, 1).
Upper bound on λ1 P ⊤P . We will use a generalization of Gershogorin’s theorem for block matrices (see [45, Theorem 1.13.1]) to bound the largest eigenvalue of P ⊤P . The proof of the next result is deferred to Appendix C.5.
Lemma 11. For P defined as above, it holds
λ1 P ⊤P ≤ 1
(1 − ∥A∗∥2)2 .
Putting it together. From (3.15), and Lemmas 9, 10 and 11 we deduce
det∗(L) ≥ t2d(1 − ∥A∗∥2)2d,
which together with (3.14) gives
log det (1 − ∥A∗∥2)3
4σ2 L + Ii1d
−1
2
≤ −(t − 1) d
2 log (1 − ∥A∗∥2)3
4σ2 t2d(1 − ∥A∗∥2)2d
1
(t−1)d + 1
≤ −(t − 1) d
2 log (1 − ∥A∗∥2)5
4σ2 + 1 .
In the last line we used that t 2
t−1 ≥ 1 for t ≥ 2, and that (1 − ∥A∗∥2) 2
t−1 ≥ (1 − ∥A∗∥2)2, for t ≥ 2. From this, Proposition 2 follows.
24

Remark 8 (About the assumption i1 > i2 > . . . > it). In the proof of Proposition 2, we assumed i1 > i2 > . . . > it for convenience. More generally, for any t-cycle Ct = (i1, i2, . . . , it) with i1 being the largest element, we always have (α1, β1) = (i1, i2) and (αt, βt) = (i1, it). This allows us to consistently orient the edges i1 → i2 and i1 → it. The orientation of the remaining edges—namely, {i2, i3}, {i3, i4}, . . . , {it−1, it}—depends on the relative ordering of i2, i3, . . . , it. For-
 the purposes of the analysis, this implies that we can express M = P (DΠ ⊗ Id), where Π is a permutation matrix. Clearly, the matrix L = M M ⊤ remains unchanged compared to the case where i1 > i2 > . . . > it.
4 Algorithms for solving the MLE
Given the hardness of solving the joint optimization problem (2.3), we now describe an alternating minimization based heuristic for solving (2.3) consisting of the following two main steps, which will be iteratively applied.
• Step 1: Estimation of A∗ for fixed Π. For a fixed Π, we can estimate A∗ by solving (2.5). This has a closed form solution outlined in Lemma 2.
• Step 2: Estimation of Π∗ for fixed A. For a fixed A, we consider the problem (2.4). Since the objective function is convex, we propose several relaxations of the permutation constraints, resulting in convex optimization problems.
We start by introducing algorithms for estimating Π∗, for a fixed A, in Section 4.1. Later, in Section 4.2 we introduce an iterative algorithm based on alternating optimization. Recall that we assume σ is known.
4.1 Relaxed MLE strategy for estimating Π∗ given A
Recall the estimator for estimating Π∗, for a fixed A, introduced in (2.4) – the MLE
bΠMLE(A) ∈ argmin
Π∈PT
∥X#Π − AX#ΠS − (X − AXS)∥2
F,
where, S denotes the shift operator introduced in Section 2.1. Since a general quadratic program with permutaion constraints is hard in the worse case, it is not clear whether Πˆ MLE can be found efficiently. For this reason, we study a two-step strategy: (1) first solving a relaxed MLE problem, and (2) then rounding the relaxed solution to a valid permutation.
Relaxed MLE. The objective in (2.4) is convex (the square norm of a linear function in Π), but the set of constraints is discrete. We will consider a convex set K ⊆ RT ×T , containing the set of permutations matrices, to obtain the relaxed convex optimization problem
min
Π∈K ∥X#Π − AX#ΠS − (X − AXS)∥2
F
| {z }
=:f (Π;X,X#,A,S)
. (4.1)
In what follows, we will consider specific relaxations induced by particular choices of K. Although these relaxations can be solved using general-purpose convex optimization methods (e.g., interior point methods), for the sake of efficiency we will implement gradient-based algorithms in the numerical experiments (see Section 5 for details).
25

1. Hyperplane. This corresponds to the choice (where 1 denotes the all ones vector)
K = {Z ∈ RT ×T : 1⊤Z1 = T },
which is a hyperplane constraint in the space RT 2 (with the obvious identification of a matrix with a vector). The main motivation for this relaxation comes from its success in the graph matching problem, as studied in [15] (with an additional regularization term) where performance guarantees were obtained under specific planted matching models.
2. Simplex. A tighter relaxation than the hyperplane constraint is given by the simplex
K = {Z ∈ RT ×T : 1⊤Z1 = T, Z ≥ 0}.
The addition of positivity constraints, in comparison to the simplex relaxation, has proven beneficial in the context of graph matching, as demonstrated recently in [4]. There, this relaxation was shown to outperform the hyperplane formulation experimentally.
3. Birkhoff polytope. The tightest convex relaxation of (2.4) is given by the Birkhoff polytope (the set of doubly stochastic matrices)
K = {Z ∈ RT ×T : 1⊤Z = 1⊤, Z1 = 1, Z ≥ 0}.
Indeed, by the Birkhoff–von Neumann theorem, the Birkhoff polytope is precisely the convex hull of the set of permutation matrices.
Rounding procedure. The solutions of the relaxed problem (4.1) are, in general, not guaranteed to be permutation matrices. Therefore, an additional rounding step is required. This can be achieved by solving a linear assignment problem using the relaxed solution (denoted by Πbrel) as the cost matrix; that is, we solve
max
Π∈PT
⟨Π, Πb rel⟩F . (4.2)
As previously mentioned, the linear assignment problem can, in general, be solved by the Hungarian algorithm with cubic complexity.
Algorithm 1 Relaxed MLE + LA rounding (RelaxMLE-Round)
Require: Time series matrices X, X# ∈ Rd×T , system matrix A ∈ Rd×d, a convex set K ⊇ PT
1: Set S = 0 IT −1
0 0. 2: Solve the relaxed MLE problem in (4.1)
bΠrel = argmin
Π∈K
f (Π; X, X#, A, S).
3: Round with linear assignment
Πb = argmax
Π∈PT
⟨Π, Πb rel⟩F .
4: return Πb
26

Remark 9 (Other relaxations). We choose to present Algorithm 1 in a general form, which allows, in principle, the use of other convex relaxations. Our implementation in Section 5 will be based on the choices of K discussed above, which are motivated by their success in other quadratic optimization problems over the set of permutations, as well as by the availability of efficient algorithms based on gradient descent, mirror descent, and the alternating direction method of multipliers (ADMM). It is-
 worth noting that in related problems, such as graph matching, non-convex relaxations have also been considered. For example, in the classic work [46], relaxing the graph matching problem to the set of orthogonal matrices yields a closed-form solution based on spectral information. In the case of (4.1), however, it is not clear that a closed-form solution exists when K is taken to be the set of orthogonal matrices.
4.2 Iterative algorithm for estimating Π∗
To recover Π∗, we propose an iterative algorithm that alternates between Steps 1 and 2 discussed at the beginning of this section. In Algorithm 2, we present the proposed procedure in the general case, where any of the strategies based on convex relaxation for estimating Π given A, as discussed in Section 4.1, can be used. We choose to write it in this abstract form, using RelaxMLE-Round, which serves as a subroutine for estimating Π given A.
Algorithm 2 Alternating minimization method for matching VAR time series
Require: Time series matrices X, X# ∈ Rd×T , noise parameter σ > 0, initial estimate Π(0) ∈ PT , max iterations K, a convex set K ⊇ PT .
1: Set S = 0 IT −1
0 0. 2: for k = 1 to K do 3: A-update: Set
A(k) = X(XS)⊤ + 1
σ2 X#Π(k−1) − X X#Π(k−1)S − XS
⊤
× (XS)(XS)⊤ + 1
σ2 (X#Π(k−1)S − XS)(X#Π(k−1)S − XS)⊤
†
4: Π-update: Use sub-routine RelaxMLE-Round to obtain
Π(k) := RelaxMLE-Round(X, X#, A(k), K)
5: end for 6: return Π(K)
Initialization. Algorithm 2 requires an initial estimate Π(0) of the optimal matching. Several strategies can be used for this initialization. One option is to set the initial permutation to the linear assignment estimator, i.e., Π(0) = bΠLA. In this case, Algorithm 2 can be seen as an iterative refinement of the linear assignment solution. This raises the natural question of how much improvement the algorithm provides over linear assignment—a question we explore experimentally in Section 5. Anoth-
er approach is to initialize randomly, for example by drawing Π(0) uniformly from the set PT , which we also investigate empirically. A central question is the extent to which the initial estimate of the permutation influences the outcome.
27

Remark 10 (Another strategy: estimate A∗ first). Notice that Algorithm 2 does not require prior knowledge of the system matrix A∗, as it is updated iteratively (specifically in line 4). If enough data is available—that is, sufficiently long time series—an alternative strategy is to first estimate the system matrix using only the time series X, and then address the problem of estimating the permutation Π, without further updating the estimate of A∗. The intuition is that the estimate of A∗ would n-
ot change significantly, since the amount of information about A∗ contained in (X, Xb) should be asymptotically similar to that contained in X alone. On the other hand, an interesting question is wether one can consistently estimate the matching (or achieve non-trivial recovery), even if the system matrix cannot be consistently estimated.
Remark 11 (Complexity). The computational complexity of the A-update step in Algorithm 2 is dominated by matrix multiplications involving matrices of sizes d × d, d × T , and T × T . In the worst case, this yields a complexity of O(max{d, T }ω), where ω ≤ 3 (see e.g. [33]) denotes the matrix multiplication exponent. The complexity of the Π-update step depends on the specific optimization method employed. For instance, when using a gradient-based method for the hyperplane relaxation with log T iter-
ations, the cost is approximately O(max{d, T }ω log T ), as the most expensive operation—gradient computation—also reduces to matrix multiplications. The rounding step incurs an additional O(T 3) cost in the worst case when solved via the Hungarian algorithm [31]. Therefore, the overall computational complexity of the alternating scheme is O(max{d, T }ωK log T ), where K denotes the number of outer iterations. This complexity can be reduced in practice under structural assumptions. For example, if-
 some of the matrices involved are sparse, matrix multiplications become more efficient. Alternatively, replacing the linear assignment rounding step with a greedy method reduces the rounding cost to O(T 2), see [4, Algorithm 1], for example.
5 Numerical experiments
In this section, we empirically test the recovery algorithms discussed in Section 4, and the linear assignment estimator analyzed in Section 3. We focus on synthetic data generated under the CVAR model, introduced in Section 2. In Section 5.1, we provide some details about the implementation of the relaxed-MLE strategy (Algorithm 1) for different choices of K. In Section 5.2, we test the relaxed MLE algorithms under the assumption that A∗ is known. In Section 5.3, we assume that A∗ is unknown and -
evaluate the alternating optimization approach of Algorithm 2, as well as the linear assignment (LA) estimator.
5.1 Algorithmic implementation details
To solve the relaxed MLE problem (4.1), we use different approaches depending on the convex set K considered. Although this problem could be solved with general purpose convex optimization algorithms, for the sake of efficiency, we focus on first-order methods as described below.
• Hyperplane. In the case K = {Z ∈ RT ×T : 1⊤Z1 = T }, we will use a projected gradient descent (PGD) strategy to optimize. More specifically, we consider a learning rate γk > 0,
and an initial vector bΠ(0)
rel = 1
T JT , where JT is the T × T all-ones matrix. This choice can be considered agnostic, since JT is at the same distance with respect to all the permutation matrices. Each iteration is described by
bΠ(k)
rel = PK Πb (k−1)
rel − γk∇f Πb (k−1)
rel ; X, X#, A, S , for k ≥ 1,
28

where f is the relaxed MLE objective defined in (4.1), S is the shift matrix defined in Section 2, and PK is the Euclidean projection onto K. We use an adaptive learning rate strategy, given
by γk = γ log (k + 1)
∇f Πb (k−1)
rel 2
∨ 10−4 √k + 1
, (5.1)
where γ > 0 is a user-specified constant, and the small term 10−4 is included arbitrarily to prevent numerical blow-up. This strategy is commonly used in practice; see [5, Chapter 8] for this and other related learning rate schemes.
• Simplex. When K = {Z ∈ RT ×T : 1⊤Z1 = T, Z ≥ 0}, we use the Entropic Mirror Descent algorithm (see [5, Chapter 9]), which results in a multiplicative weights update algorithm. As
in the case of the simplex, we use a learning rate γk > 0 and Πb(0)
rel = 1
T JT as the initial point. The iterative step is, for each k ≥ 1,
Πb (k)
rel = T
Πb (k−1)
rel ⊙ exp −γk∇f Πb (k−1)
rel ; X, X#, A, S
Πb (k−1)
rel ⊙ exp −γk∇f Πb (k−1)
rel ; X, X#, A, S
1
,
where, for a matrix A ∈ RN×N , ∥A∥1 := P
i,j∈[N] |Aij|. The learning rate is chosen as follows,
γk = γ log (k + 1)
∇f Πb (k−1)
rel ∞
∨ 10−4 √k + 1
. (5.2)
• Birkhoff Polytope. Consider K = {Z ∈ RT ×T : 1⊤Z = 1⊤, Z1 = 1, Z ≥ 0}. To solve the relaxed MLE problem on the Birkhoff polytope, we employ a projected gradient descent strategy (which we call Birkhoff PGD). We consider the same initialization as the previous
algorithms Πb (0)
rel = 1
T JT , and the iterations are of the form
bΠ(k)
rel = PK Πb (k−1)
rel − γk∇f Πb (k−1)
rel ; X, X#, A, S , for k ≥ 1.
Similar as before, here f is the relaxed MLE objective defined in (4.1), S is the shift matrix defined in Section 2, and PK is the Euclidean projection onto K (the Birkhoff polytope). We use the Dykstra algorithm [13] to approximate this projection. The learning rate follows (5.1), with the constant γ adjusted as needed. We refer to this algorithm as Birkhoff PGD.
Error metrics. To quantify the success of the proposed methods in the recovery of Π∗ ∈ PT we consider the recovery fraction, defined for any matrix Π ∈ PT as
Recovery fraction(Π) := ⟨Π, Π∗⟩F /T.
Notice that in the previous definition the ground truth Π∗ is implicit. Even if our goal is mainly recovery of Π∗, the alternating optimization method proposed in Algorithm 2 allows us to jointly recover Π∗ and A∗. We measure the error for the estimation of A∗ ∈ Rd×d with the MSE, defined for a matrix A ∈ Rd×d as follows,
MSE(A) := ∥A − A∗∥2
F /d.
29

Parametric assumption on A∗. Throughout our experiments, we consider a random A∗, constructed as follows. First, we sample a A′ with iid standard Gaussian entries. Then we set
A∗ = θ A′
∥A′∥2
, (5.3)
where the parameter θ ∈ R helps to control ∥A∗∥2.
5.2 Relaxed MLE with known A∗
We begin by evaluating the performance of the RelaxMLE-Round subroutine, see Algorithm 1, when the system matrix A∗ is known. We generate time series following the CVAR(1, d, T ; A∗, π∗, σ) model under different noise levels σ, with A∗ satisfying the parametric assumption in (5.3). To unravel the influence of θ and σ, we fix one parameter and vary the other, reporting the recovery
accuracy of Π∗. We choose Π∗ = IT , and for all methods we initialize with bΠ(0)
rel = 1
T JT . In addition, we consider two contrasting regimes: (d, T ) = (5, 50), where the ambient dimension is small relative to the number of observations, and (d, T ) = (50, 5), where the opposite holds. Figure 1 illustrates the effect of the scale parameter θ on recovery. Interestingly, in both regimes considered for d, T the estimation error remains essentially unaffected by θ, suggesting that for these algorithms the problem does not become more difficult at larger scales. It should be noted that-
, in the case d = 50, T = 5, the considered σ is higher, since for smaller values of σ perfect recovery is achieved for all the algorithms for most random realizations. Intuitively, the problem becomes easier in this regime, as discussed in more detail below. In terms of performance, the relaxation to the Birkhoff polytope generally outperforms the simplex and hyperplane relaxations, particularly in high-noise settings (e.g., in the case d = 50, T = 5 considered here). Interestingly, the overall d-
ifferences between the relaxations are not drastic—the simplex relaxation performs comparably to the Birkhoff relaxation across most conditions. One advantage of the hyperplane and simplex relaxations is their comparatively lower computational complexity relative to the Birkhoff relaxation. In Figure 2 we plot the recovery fraction versus the noise level to highlight the effect of σ on the recovery level for the same pairs (d, T ). This is a complementary plot to Figure 1, which allows us to read -
how the recovery decays with the noise level. We obtain similar conclusions: the scale does not seem to affect the recovery fraction and while Birkhoff PGD performs slightly better, the difference in performance remains moderate (expect for high noise scenarios in d = 50 , T = 5). In addition, we notice that the performance of Birkhoff PGD is very close to the LA estimator. This is expected for small scales, since for A = 0 solving (4.1) on the Birkhoff polytope is equivalent to the linear assignm-
ent solution in (2.7). On the other hand, for larger scales it is not obvious from (4.1) that both approaches would have a similar performance. These plots suggest that case d = 50, T = 5 is easier for all algorithms considered, compared to case d = 5, T = 50 (notice that we considered higher levels of noise in case d = 50, T = 5). This is expected since in the case d = 50, T = 5 we have few points in a high dimension, which implies a higher separation between them. More surprising is the fact tha-
t the LA estimator performs on par with the best-performing MLE relaxation: the one on the Birkhoff polytope. It seems that the model information, used by the MLE relaxations, does not lead to a noticeable advantage in terms of the matching performance. A natural question is whether LA is optimal in terms of recovery for time series matching, at least in the regime ∥A∗∥2 < 1. We explore the case ∥A∗∥2 ≥ 1 below.
30

0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=0 = 0.25 = 0.5 = 0.75 =1
(a) Hyperplane relaxed MLE d = 5, T = 50.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=2 =4 =6
(b) Hyperplane relaxed MLE d = 50, T = 5.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=0 = 0.25 = 0.5 = 0.75 =1
(c) Simplex relaxed MLE d = 5, T = 50.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=2 =4 =6
(d) Simplex relaxed MLE d = 50, T = 5.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=0 = 0.25 = 0.5 = 0.75 =1
(e) Linear assignment estimator d = 5, T = 50.
0.0 0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=2 =4 =6
(f) Linear assignment estimator d = 50, T = 5.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=0 = 0.25 = 0.5 = 0.75 =1
(g) Birkhoff relaxed MLE d = 5, T = 50.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=2 =4 =6
(h) Birkhoff relaxed MLE d = 50, T = 5.
Figure 1: Recovery fraction vs. scale θ using Algorithm 1. We assume known A∗ of the form (5.3), and consider different values for θ. For each (θ, σ) pair, the plotted value corresponds to the average over 30 Monte Carlo samples of the CVAR(1, d, T ; A∗, π∗, σ) model. The error bars reflects one standard deviation above and below the mean.
31

0.0 0.2 0.4 0.6 0.8 1.0 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(a) Hyperplane relaxed MLE d = 5, T = 50.
012345 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(b) Hyperplane relaxed MLE d = 50, T = 5.
0.0 0.2 0.4 0.6 0.8 1.0 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(c) Simplex relaxed MLE d = 5, T = 50.
012345 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(d) Simplex relaxed MLE d = 50, T = 5.
0.0 0.2 0.4 0.6 0.8 1.0 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(e) Linear assignment estimator d = 5, T = 50.
012345 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(f) Linear assignment estimator d = 50, T = 5.
0.0 0.2 0.4 0.6 0.8 1.0 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(g) Birkhoff relaxed MLE d = 5, T = 50.
012345 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(h) Birkhoff relaxed MLE d = 50, T = 5.
Figure 2: Recovery fraction vs. noise σ using Algorithm 1. The setting is analogous to Fig.1.
32

5.3 Algorithms with unknown A∗
We now evaluate the proposed alternating optimization procedure in Algorithm 2 and the linear assignment estimator in (2.7), in terms of Π∗ recovery. In these experiments, we assume that σ is known, while A∗ remains unknown. We initialize Π(0) uniformly at random and use K = 5 alternating minimization steps. In Appendix E we include some experiments for the strategy of estimating A∗ first, discussed in Remark 10. In Figure 3, we present the recovery fraction as a function of the scale parameter θ -
for (d, T ) ∈ {(5, 50), (50, 5)}. As in the case where A∗ is known, the recovery fraction remains fairly stable across scales. In this case, all algorithms based on MLE relaxations have a similar performance in the case d = 5, T = 50, while the LA estimator slightly outperform them. On the other hand, linear assignment outperforms relaxed MLE-based algorithms in the case d = 50, T = 5, achieving perfect recovery for the considered values of σ. This suggests that random initialization performs poor-
ly for estimating A∗, particularly with small T . It should be noted that the variance, reflected in the error bars, is relatively high for this choice of parameters d, T . Interestingly, for d = 5 and T = 50, the Birkhoff relaxation achieves an average recovery performance comparable to linear assignment. This is somewhat surprising, as one might expect that an initial random permutation would adversely affect the A-update step in Algorithm 2. Similar conclusions can be obtained from the compleme-
ntary plots, in Figure 4, where the recovery fraction is plotted against the noise level.
Remark 12 (Number of alternating optimization iterations). We observe that often after one or two alternating optimization iterations in Algorithm 2, the estimator for the permutation converges. This suggest that estimating A∗ first, as discussed in Remark 10, is a viable alternative. We evaluate this in Appendix E.1.
Estimation of A∗. Although the estimation of A∗ is not our primary objective, Algorithm 2 jointly estimates both Π∗ and A∗. To assess the performance of the algorithm for the estimation of A∗, we fix d = 5, θ = 0.5, and vary the time horizon T ∈ {10, 20, 30, 50, 100}. We plot the performance of the Birkhoff-based relaxation, but in our experiments the hyperplane and the simplex performs similarly for this task. We report the estimation error for σ = 0.5, since other values produce qualitatively si-
milar results. In Figure 5a, we plot the MSE for the estimation of A∗ for different values of T . As expected, MSE(A) decreases as T increases, indicating that Algorithm 2 successfully estimates A∗. Figure 5b shows a scatterplot of the estimation errors of A∗ and Π∗ (in terms of the recovery fraction) over 50 samples with T = 100. Although there is a tendency for better estimation of A∗ to correspond to improved recovery of Π∗, similar estimation errors for A∗ can still lead to markedly different -
recovery fractions.
Recovery vs. T . We examine the recovery performance of the LA estimator and Birkhoff PGD in function of the time horizon T . In Figure 6 we show the average recovery of these estimators for the scale θ = 0.5 and d ∈ {5, 25}. We observe that the performance of both estimators is very similar for both dimensions. It should be noted that while we report only the scale θ = 0.5, similar results were obtained for other values θ < 1. This supports the hypothesis that LA is already optimal, or near optim-
al, in this regime. In addition, we observe that the recovery worsens as T grows, as predicted by Theorem 1. As we will see next, the situation is slightly different for θ > 1.
The case θ ≥ 1. This case is interesting, since the processes (xt)t∈[T ], (x#)t∈[T ] become unstable, from the dynamical systems perspective. A natural question is if its possible to non-trivially recover the hidden permutation Π∗ in this regime, and does the problem becomes easier from the
33

0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=0 = 0.25 = 0.5 = 0.75 =1
(a) Hyperplane relaxed MLE d = 5, T = 50.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=0 = 0.25 = 0.5 = 0.75 =1
(b) Hyperplane relaxed MLE d = 50, T = 5.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=0 = 0.25 = 0.5 = 0.75 =1
(c) Simplex relaxed MLE d = 5, T = 50.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=0 = 0.25 = 0.5 = 0.75 =1
(d) Simplex relaxed MLE d = 50, T = 5.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=0 = 0.25 = 0.5 = 0.75 =1
(e) Linear assignment estimator d = 5, T = 50.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=0 = 0.25 = 0.5 = 0.75 =1
(f) Linear assignment estimator d = 50, T = 5.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=0 = 0.25 = 0.5 = 0.75 =1
(g) Birkhoff relaxed MLE d = 5, T = 50.
0.2 0.4 0.6 0.8 1.0 Scale
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Scale
=0 = 0.25 = 0.5 = 0.75 =1
(h) Birkhoff relaxed MLE d = 50, T = 50.
Figure 3: Recovery fraction vs. scale θ using Algorithm 2 with K = 5. A∗ (unknown) is of the form (5.3). We average 30 Monte Carlo samples of the CVAR(1, d, T ; A∗, π∗, σ) model. The error bars reflects one standard deviation above and below the mean.
34

0.0 0.2 0.4 0.6 0.8 1.0 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(a) Hyperplane relaxed MLE d = 5, T = 50.
0.0 0.2 0.4 0.6 0.8 1.0 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(b) Hyperplane relaxed MLE d = 50, T = 5.
0.0 0.2 0.4 0.6 0.8 1.0 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(c) Simplex relaxed MLE d = 5, T = 50.
0.0 0.2 0.4 0.6 0.8 1.0 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(d) Simplex relaxed MLE d = 50, T = 5.
0.0 0.2 0.4 0.6 0.8 1.0 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(e) Linear assignment estimator d = 5, T = 50.
012345 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(f) Linear assignment estimator d = 50, T = 5.
0.0 0.2 0.4 0.6 0.8 1.0 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(g) Birkhoff relaxed MLE d = 5, T = 50.
0.0 0.2 0.4 0.6 0.8 1.0 Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise
= 0.1 = 0.3 = 0.5 = 0.7 = 0.9
(h) Birkhoff relaxed MLE d = 50, T = 5.
Figure 4: Recovery fraction vs. noise σ with A∗ unknown. This figure is complementary to Fig. 3, under an analogous setting.
35

20 40 60 80 100 Time T
0.00
0.02
0.04
0.06
0.08
0.10
0.12
0.14
MSE(A)
Error of A vs Time Horizon
(a) Estimation MSE for A∗
0.004 0.006 0.008 0.010 0.012 MSE(A)
0.45
0.50
0.55
0.60
0.65
0.70
Recovery fraction( )
Estimation Error Scatterplot
(b) Error for estimating Π∗ and A∗
Figure 5: Estimation error for A∗. We fix d = 5, σ = 0.5, θ = 0.5. In Fig.5a we plot MSE(A) for T ∈ {10, 20, 30, 50, 100} averaged over 30 Monte Carlo samples (the error bars reflect one standard deviation above and below the mean). Fig.5b is a scatter plot, over 50 samples, for the error of estimating Π∗ and A∗. The dashed line represent the linear trend.
20 40 60 80 100
Time horizon T
0.0
0.1
0.2
0.3
0.4
0.5
Recovery fraction
Recovery vs T
LA Birk
(a) θ = 0.5, d = 5
10 20 30 40 50
Time horizon T
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs T
LA Birk
(b) θ = 0.5, d = 25
Figure 6: Comparison of recovery performance for the LA and Birkhoff PGD estimators for different time horizons. The recovery fraction is the average over 30 samples, and the error bars reflect one standard deviation above and below the average.
matching perspective. Intuitively, the problem might become easier if the individual points are more separated. We evaluate this by considering the scales θ ∈ {1.5, 2, 2.5, 3}. In Figure 7, we plot the average recovery fraction for the estimated permutation as a function of T . The comparison includes the performance of the LA estimator and the Birkhoff PGD method. We observe a transition in recovery performance as the scale parameter θ increases: for θ = 1.5, the Birkhoff-based estimator slightly-
 outperforms LA, whereas for θ = 3, LA achieves better recovery. A similar trend appears when varying T : for smaller T , Birkhoff PGD performs slightly better, while for larger T , LA tends to outperform it in average. It should be noted that the LA estimator has larger variance at the considered scales. Intuitively, as T grows, the underlying unstable processes evolve for longer periods, leading to more separated trajectories and hence an easier matching task. The same argument applies for large-
r scales, as the separation between points increases quickly.
36

10 20 30 40 50
Time horizon T
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs T
LA Birk
(a) θ = 1.5
10 20 30 40 50
Time horizon T
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs T
LA Birk
(b) θ = 2
10 20 30 40 50
Time horizon T
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs T
LA Birk
(c) θ = 2.5
10 20 30 40 50
Time horizon T
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs T
LA Birk
(d) θ = 3
Figure 7: Comparison of recovery performance across different values of θ. Here d = 25 and the recovery fraction is the average over 30 samples. The error bars reflect one standard deviation above and below the average.
6 Conclusion and open questions
In this paper, we studied the problem of matching correlated VAR time series, extending the point-cloud matching framework of [32] to a temporal setting. We introduced a model in which a base VAR process (xt)t∈[T ] is perturbed by a σ-scaled independent copy and then permuted by an
unknown π∗, yielding (x#
t )t∈[T ].
We derived the MLE for recovering π∗, from the observation of (xt)t∈[T ], (x#
t∈[T ]) , and showed
that it leads to a quadratic assignment problem, which is NP-hard in general. To obtain tractable alternatives, we theoretically analyzed the linear assignment estimator and established conditionsexpressed as thresholds on σ—under which perfect or partial recovery is guaranteed. We also developed an alternating minimization based framework for solving the MLE, where the latent permutation is iteratively estimated by solving a suitable convex relaxation of the set of permutation matrices, thus enab-
ling efficient first-order algorithms. Finally, we evaluated both the linear assignment estimator and the MLE relaxations on synthetic datasets, demonstrating their practical performance. There are several promising directions for future work.
• Information-theoretic limits. A natural open question is to determine the fundamental limits for recovering π∗. While related bounds are known for point-cloud matching [10], it remains unclear whether those techniques extend to settings with temporal correlations.
37

• Extending the analysis. It would be interesting to extend our results to the regime ρ(A∗) ≤ 1, or even ρ(A∗) > 1, where the spectral radius ρ(·) characterizes the stability of linear dynamical systems. In the system identification literature for learning VAR models from a single trajectory, these two regimes have been studied recently for the setting ρ(A∗) ≤ 1 [43, 40] where non-asymptotic error bounds for recovering A∗ were obtained. These were also studied for the case ρ(A∗) > 1 in [40] where-
 the results hold for “regular” matrices5 A∗.
• Alternative problem formulations. Our analysis focused on permutations of time indices, i.e., column permutations of the d×T matrix X′ (whose columns are the elements of (x′t)t∈[T ],
defined in (1.3)). Another meaningful variant permutes the rows of X′, effectively shuffling the coordinates of the time series. This has potential applications in problems such as dynamic time warping and time-series alignment, and may require different analytical tools.
References
[1] Distributed optimization and statistical learning via the alternating direction method of multipliers. Found. Trends Mach. Learn., 3:1–122, 2011.
[2] John Aach and George M. Church. Aligning gene expression time series with time warping algorithms. Bioinformatics, 17(6):495–508, 06 2001.
[3] Yonathan Aflalo, Alexander Bronstein, and Ron Kimmel. On convex relaxation of graph isomorphism. Proceedings of the National Academy of Sciences, 112(10):2942–2947, 2015.
[4] Ernesto Araya and Hemant Tyagi. Graph matching via convex relaxation to the simplex. Foundations of Data Science, 7(2):464–501, 2025.
[5] Amir Beck. First-Order Methods in Optimization, volume 25 of MOS-SIAM Series on Optimization. SIAM, 2017.
[6] Jan Beutel, Stephan Gruber, Andreas Hasler, Roman Lim, Andreas Meier, Christian Plessl, Igor Talzi, Lothar Thiele, Christian Tschudin, Matthias Woehrle, and Mustafa Yuecel. Permadaq: A scientific instrument for precision sensing and data recovery in environmental extremes. In 2009 International Conference on Information Processing in Sensor Networks, pages 265–276, 2009.
[7] A. Bottcher and B. Silbermann. Introduction to Large Truncated Toeplitz Matrices. Springer New York, NY, 1999.
[8] Richard H. Byrd, Peihuang Lu, Jorge Nocedal, and Ciyou Zhu. A limited memory algorithm for bound constrained optimization. SIAM Journal on Scientific Computing, 16(5):1190–1208, 1995.
[9] Olivier Collier and Arnak S. Dalalyan. Minimax rates in permutation estimation for feature matching. J. Mach. Learn. Res., 17(1):162–192, January 2016.
[10] Lucas da Rocha Schwengber and Roberto Imbuzeiro Oliveira. Geometric planted matchings beyond the gaussian model. arXiv:2403.17469, 2024.
5Matrices for which the geometric multiplicity of eigenvalues lying outside the unit circle, is one.
38

[11] Jian Ding, Zongming Ma, Yihong Wu, and Jiaming Xu. Efficient random graph matching via degree profiles. Probability Theory and Related Fields, 179(1-2):29–115, 2021.
[12] Jian Ding, Yihong Wu, Jiaming Xu, and Dana Yang. The planted matching problem: sharp threshold and infinite-order phase transition. Probability Theory and Related Fields, 187:1–71, 2021.
[13] Richard L. Dykstra. An algorithm for restricted least squares regression. Journal of the American Statistical Association, 78(384):837–842, 1983.
[14] Frank Emmert-Streib, Matthias Dehmer, and Yongtang Shi. Fifty years of graph matching, network alignment and network comparison. Information Sciences, 346-347:180–197, 2016.
[15] Zhou Fan, Cheng Mao, Yihong Wu, and Jiaming Xu. Spectral graph matching and regularized quadratic relaxations i: Algorithm and gaussian analysis. Foundations of Computational Mathematics, 23(5):1511–1565, June 2022.
[16] Marguerite Frank and Philip Wolfe. An algorithm for quadratic programming. Naval Research Logistics Quarterly, 3(1-2):95–110, 1956.
[17] Tigran Galstyan, Arshak Minasyan, and Arnak S. Dalalyan. Optimal detection of the feature matching map in presence of noise and outliers. Electronic Journal of Statistics, 16(2):5720 5750, 2022.
[18] Chris Godsil and Gordon Royle. Algebraic Graph Theory, volume 207 of Graduate Texts in Mathematics. Springer, 2001.
[19] Fang Han, Huanran Lu, and Han Liu. A direct estimation of high dimensional stationary vector autoregressions. Journal of Machine Learning Research, 16(97):3115–3150, 2015.
[20] Yanjun Han, Philippe Rigollet, and George Stepaniants. Covariance alignment: From maximum likelihood estimation to gromov–wasserstein. SIAM Journal on Mathematics of Data Science, 7(3):1491–1513, 2025.
[21] Nicholas J. Higham and Sheung Hun Cheng. Modifying the inertia of matrices arising in optimization. Linear Algebra and its Applications, 275-276:261–279, 1998. Proceedings of the Sixth Conference of the International Linear Algebra Society.
[22] Roger A. Horn and Charles R. Johnson. Matrix Analysis. Cambridge University Press, Cambridge, 2nd edition, 2012.
[23] Tzu-Kuo Huang and Jeff Schneider. Learning linear dynamical systems without sequence information. In Proceedings of the 26th Annual International Conference on Machine Learning, page 425–432, 2009.
[24] Tzu-Kuo Huang and Jeff Schneider. Learning auto-regressive models from sequence and nonsequence data. Advances in Neural Information Processing Systems, 24, 2011.
[25] Tzu-Kuo Huang and Jeff Schneider. Learning hidden markov models from non-sequence data via tensor decomposition. Advances in Neural Information Processing Systems, 26, 2013.
[26] Tzu-Kuo Huang, Le Song, and Jeff Schneider. Learning nonlinear dynamic models from nonsequenced data. In Proceedings of the Thirteenth International Conference on Artificial Intelligence and Statistics, pages 350–357, 2010.
39

[27] Yassir Jedra and Alexandre Proutiere. Finite-time identification of stable linear systems optimality of the least-squares estimator. In 2020 59th IEEE Conference on Decision and Control (CDC), pages 996–1001, 2020.
[28] Yassir Jedra and Alexandre Proutiere. Finite-time identification of stable linear systems: Optimality of the least-squares estimator. arxiv:2003.07937, 2020.
[29] Keisuke Kawano, Takuro Kutsuna, and Satoshi Koide. Neural time warping for multiple sequence alignment. In ICASSP 2020 - 2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 3837–3841, 2020.
[30] Matthias Keller, Lothar Thiele, and Jan Beutel. Reconstruction of the correct temporal order of sensor network data. In Proceedings of the 10th ACM/IEEE International Conference on Information Processing in Sensor Networks, pages 282–293, 2011.
[31] Harold W. Kuhn. The hungarian method for the assignment problem. Naval Research Logistics Quarterly, 2(1-2):83–97, 1955.
[32] Dmitriy Kunisky and Jonathan Niles-Weed. Strong recovery of geometric planted matchings. In Proceedings of the 2022 Annual ACM-SIAM Symposium on Discrete Algorithms (SODA), pages 834–876, 2022.
[33] Franc ̧ois Le Gall. Algebraic complexity theory and matrix multiplication. In Proceedings of the 39th International Symposium on Symbolic and Algebraic Computation, ISSAC ’14, page 23, New York, NY, USA, 2014. Association for Computing Machinery.
[34] Po-Ling Loh and Martin J. Wainwright. High-dimensional regression with noisy and missing data: Provable guarantees with nonconvexity. The Annals of Statistics, 40(3):1637 – 1664, 2012.
[35] Vince Lyzinski, Donniell E. Fishkind, Marcelo Fiori, Joshua T. Vogelstein, Carey E. Priebe, and Guillermo Sapiro. Graph matching: Relax at your own risk. IEEE Transactions on Pattern Analysis and Machine Intelligence, 38(1):60–73, 2016.
[36] Mehrdad Moharrami, Cristopher Moore, and Jiaming Xu. The planted matching problem: Phase transitions and exact results. The Annals of Applied Probability, 31(6):2663 – 2720, 2021.
[37] Arvind Narayanan and Vitaly Shmatikov. Robust de-anonymization of large sparse datasets. 2008 IEEE Symposium on Security and Privacy (sp 2008), pages 111–125, 2008.
[38] Pedram Pedarsani and Matthias Grossglauser. On the privacy of anonymized networks. In Proceedings of the 17th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, KDD ’11, page 1235–1243, 2011.
[39] H. Sakoe and S. Chiba. Dynamic programming algorithm optimization for spoken word recognition. IEEE Transactions on Acoustics, Speech, and Signal Processing, 26(1):43–49, 1978.
[40] Tuhin Sarkar and Alexander Rakhlin. Near optimal finite time identification of arbitrary linear dynamical systems. In Proceedings of the 36th International Conference on Machine Learning, ICML, volume 97, pages 5610–5618, 2019.
40

[41] Guilhem Semerjian, Gabriele Sicuro, and Lenka Zdeborov ́a. Recovery thresholds in the sparse planted matching problem. Phys. Rev. E, 102:022304, 2020.
[42] Mohamad Kazem Shirani Faradonbeh, Ambuj Tewari, and George Michailidis. Finite time identification in unstable linear systems. Automatica, 96:342–353, 2018.
[43] Max Simchowitz, Horia Mania, Stephen Tu, Michael I. Jordan, and Benjamin Recht. Learning without mixing: Towards a sharp analysis of linear system identification. In Proceedings of the 31st Conference On Learning Theory, volume 75, pages 439–473, 2018.
[44] D.A Spielman. Spectral and algebraic graph theory. incomplete draft (2025), available at http://cs-www.cs.yale.edu/homes/spielman/sagt/sagt.pdf, 2025.
[45] Christiane Tretter. Spectral Theory of Block Operator Matrices and Applications. Imperial College Press, London, 2008.
[46] Shinji Umeyama. Least-squares estimation of transformation parameters between two point patterns. IEEE Transactions on Pattern Analysis and Machine Intelligence, 13(4):376–380, 1991.
[47] Haoyu Wang, Yihong Wu, Jiaming Xu, and Israel Yolou. Random graph matching in geometric models: the case of complete graphs. In Proceedings of Thirty Fifth Conference on Learning Theory, volume 178, pages 3441–3488, 2022.
[48] Qingqing Ye, Haibo Hu, Kai Huang, Man Ho Au, and Qiao Xue. Stateful switch: Optimized time series release with local differential privacy. In IEEE INFOCOM 2023 - IEEE Conference on Computer Communications, pages 1–10, 2023.
[49] Qingqing Ye, Haibo Hu, Ninghui Li, Xiaofeng Meng, Huadi Zheng, and Haotian Yan. Beyond value perturbation: Local differential privacy in the temporal setting. In IEEE INFOCOM 2021 - IEEE Conference on Computer Communications, pages 1–10, 2021.
[50] Mikhail Zaslavskiy, Francis Bach, and Jean-Philippe Vert. Global alignment of protein-protein interaction networks by graph matching methods. Bioinformatics, 25(12):i259–i267, June 2009.
A Proof of Lemma 2
The solution to (2.5) can be found in closed form. Indeed, note that
∥X − AXS∥2
F = ∥ vec(X) − (XS)⊤ ⊗ I vec(A)∥2
2,
∥X#Π − AX#ΠS − (X − AXS)∥2
F = ∥ vec(X#Π − X) − (X#ΠS)⊤ ⊗ I vec(A) + (XS)⊤ ⊗ I vec(A)∥2
2
Define,
v := vec(X),
V := (XS)⊤ ⊗ I,
u := vec(X#Π − X),
U := (X#ΠS)⊤ ⊗ I + (XS)⊤ ⊗ I,
a := vec(A).
41

So (2.5) can be rewritten as
vec AbMLE(Π) = argmin
a∈Rd2
∥v − V a∥2
2+ 1
σ ̄2 ∥u − U a∥2
2.
Define g(a) := ∥v − V a∥22 + 1
σ ̄2 ∥u − U a∥22. Then,
∇g(a) = 2V ⊤V a − 2V ⊤v + 1
σ ̄2 2U ⊤U a − 2U ⊤u
= 2 (V ⊤V + 1
σ ̄2 U ⊤U )a − (V ⊤v + 1
σ ̄2 U ⊤u) .
Hence, the condition ∇g(a) = 0 is equivalent to
V ⊤V + 1
σ ̄2 U ⊤U a = V ⊤v + 1
σ ̄2 U ⊤u,
Now,
V ⊤V + 1
σ ̄2 U ⊤U = (XS)(XS)⊤ + 1
σ ̄2 (X#ΠS − XS)(X#ΠS − XS)⊤ ⊗ I.
Also,
V ⊤v = ((XS) ⊗ I) vec(X)
U ⊤u = (X#ΠS − XS) ⊗ I vec(X#Π − X).
This translates to
V ⊤V + 1
σ ̄2 U ⊤U vec(A) = A (XS)(XS)⊤ + 1
σ ̄2 (X#ΠS − XS)(X#ΠS − XS)⊤ ,
and
V ⊤v + 1
σ ̄2 U ⊤u = X(XS)⊤ + 1
σ ̄2 X#Π − X X#ΠS − XS
⊤
.
So, if Ab satisfies (2.5), then
Ab (XS)(XS)⊤ + 1
σ ̄2 (X#ΠS − XS)(X#ΠS − XS)⊤ = X(XS)⊤+ 1
σ ̄2 X#Π − X X#ΠS − XS
⊤
.
From this, the result follows.
B Proof of Lemma 3
To ease notation, we use A instead of A∗. Note that, for a, b ∈ N, with a > b, we have
x ̃a = Aa−1ξ ̃1 + Aa−2ξ ̃2 + . . . + Aa−bξ ̃b + Aa−b−1ξ ̃b+1 + . . . + ξ ̃a,
x ̃b = Ab−1ξ ̃1 + Ab−2ξ ̃2 + . . . + ξ ̃b,
42

from which we obtain
A(x ̃a−1 − x ̃b−1) =Ab−1 Aa−b − I ξ ̃1 + Ab−2 Aa−b − I ξ ̃2 + . . . + A Aa−b − I ξ ̃b−1
+ Aa−bξ ̃b + . . . + Aξ ̃a−1 .
With some algebra, we get
y ̃ab := A(x ̃a−1 − x ̃b−1) + ξ ̃a − ξ ̃b =
b−1
X
i=0
Ai Aa−b − I ξ ̃b−i +
a−b
X
i=1
Aa−b−iξ ̃b+i.
Recalling the definition of yab, y ̃ab, it is clear that
⟨y ̃ab, yab⟩ =
*
yab,
b−1
X
i=0
Ai Aa−b − I ξ ̃b−i
+
| {z }
=:ζ1
+
*
yab,
a−b
X
i=1
Aa−b−iξ ̃b+i
+
| {z }
=:ζ2
.
Conditioned on ξ1, . . . , ξa, note that ζ1 and ζ2 are (independent) Gaussians (being linear combination of jointly Gaussian variables) of the form ζ1 ∼ N (0, σ ̃12), ζ2 ∼ N (0, σ ̃22), with
σ ̃2
1 = y⊤
ab
b−1
X
i=0
Ai Aa−b − I (Aa−b − I)Ai⊤
!
yab
σ ̃2
2 = y⊤
ab
a−b
X
i=1
Aa−b−iAa−b−i⊤
!
yab.
Furthermore, it holds
σ ̃2
1 ≤ ∥yab∥2
2∥Aa−b − I∥2
2
b−1
X
i=0
∥Ai∥2
2 ≤ ∥yab∥2
2∥Aa−b − I∥2
2
b−1
X
i=0
∥A∥2i
2
≤ ∥yab∥22∥Aa−b − I∥22
1 − ∥A∥22
,
and also
σ ̃2
2 ≤ ∥yab∥2
2
a−b
X
i=1
Aa−b−iAa−b−i⊤
2
≤ ∥yab∥2
2
a−b
X
i=1
∥A∥2(a−b−i)
2
= ∥yab∥2
2
1
1 − ∥A∥22
.
From this, we deduce that if A
2
< 1, then
σ2(σ ̃2
1 + σ ̃2
2) ≤ σ2∥yab∥22
1 − ∥A∥22


1 + ∥Aa−b − I∥2
2
| {z }
≤4


 ≤ 5σ2∥yab∥22
1 − ∥A∥22
.
This completes the proof.
43

C Auxiliary lemmas for proof of Proposition 2
C.1 Proof of Lemma 6
We have
Qn
k=1 ak
Qn
k=1(ak + bk)
1/n
+
Qn
k=1 bk
Qn
k=1(ak + bk)
1/n
=
n
Y
k=1
ak ak + bk
!1/n
+
n
Y
k=1
bk ak + bk
!1/n
≤1
n
n
X
k=1
ak ak + bk
+1
n
n
X
k=1
bk ak + bk
= 1,
where we used the AM-GM inequality in the second line. Multiplying both sides by (Qn
k=1(ak + bk))1/n gives the result.
C.2 Proof of Lemma 8
Consider the eigenvalue decomposition of Z,
Z=U Λ 0
0 0 U⊤,
where Λ ∈ Rp×p is a diagonal matrix with positive entries. Let Up ∈ Rq×p be the matrix whose columns are the first p columns of U (i.e., the columns are the eigenvectors associated with non-zero eigenvalues). Then,
Z = UpΛUp,
and
W ZW ⊤ = (W Up)Λ(W Up)⊤.
This implies that,
det∗(W ZW ⊤) = det∗ (W Up)Λ 1
2Λ1
2 (W Up)⊤
(=1)det∗ Λ 1
2 (W Up)⊤(W Up)Λ 1
2
(=2) det Λ 1
2 (W Up)⊤(W Up)Λ 1
2
= det(Λ) det (W Up)⊤(W Up)
= det∗(L) det (W Up)⊤(W Up) .
In (1) we used that det∗(AB) = det∗(BA), which holds because AB and BA have the same nonzero eigenvalues, counting multiplicities, for any matrices A, B such that the products AB, BA are well
defined. To obtain (2), we used that the p × p matrix Λ 1
2 (W Up)⊤(W Up)Λ 1
2 has full rank p, which holds because W ⊤W has rank p (i.e., it is full rank) by assumption. In the last two lines we used well-known properties of the determinant and the fact that det∗(L) = det(Λ), by definition.
44

C.3 Proof of Lemma 9
To prove this lemma, we use a generalized version of Ostrowski’s inequality [21, Thm.3.2] to rectangular matrices. By that result, we get
λk U ⊤
(t−1)dP ⊤P U(t−1)d = ηkμk, for k ∈ [(t − 1)d],
where
λtd−k+1 P ⊤P ≤ μ(t−1)d−k+1 ≤ λ(t−1)d−k+1 P ⊤P ,
and
λ(t−1)d U ⊤
(t−1)dU(t−1)d ≤ ηk ≤ λ1 U ⊤
(t−1)dU(t−1)d .
But, λ1 U ⊤
(t−1)dU(t−1)d = λ(t−1)d U ⊤
(t−1)dU(t−1)d = 1, which implies that ηk = 1, for all k ∈
[(t − 1)d]. From this, we deduce that
det (P U(t−1)d)⊤(P U(t−1)d) =
(t−1)d
Y
k=1
λk (P U(t−1)d)⊤(P U(t−1)d)
=
(t−1)d
Y
k=1
μk
≥
(t−1)d
Y
k=1
λtd−k+1 P ⊤P
=
td
Y
k=d+1
λk P ⊤P = det P ⊤P
Qd
k=1 λk (P ⊤P ) .
C.4 Proof of Lemma 10
We will use A instead of A∗ to ease notation. Note that, by definition,
P=

                    
Ai1−1 Ai2−1 · · · · · · Ait−1
... ... · · · · · · ...
... ... · · · · · · Id
... A · · · · · · 0
Ai1−i2 Id · · · · · · ...
Ai1−i2−1 0 · · · · · · ...
... ... · · · · · · ...
A ... · · · · · · ... Id 0 · · · · · · 0

                    
.
45

We now define the following matrices in Ri1d×d
V1 =

                   
0
...
...
0
...
0
Ai1−i2−1
...
A
Id

                   

        
        
i2 d×d zero blocks
, V2 =

                  
0
...
0
Ai2−i3−1
...
A
Id 0
...
0

                  



i3 d×d zero blocks



(i1−i2) d×d zero blocks
, · · · , Vt =

                 
Ait−1
...
Id 0
...
...
0
...
0

                 

        
        
(i1−it) d×d zero blocks
.
In other words, for l ∈ [i1d], and j ∈ [d],
(V1)lj =
(
0 if 1 ≤ l ≤ i2d
Ai1−⌈l/d⌉
lj if i2d + 1 ≤ l ≤ i1d, ,
(Vk)lj =

 
 
0 if 1 ≤ l ≤ ik+1d
Aik −⌈l/d⌉
lj if ik+1d + 1 ≤ l ≤ ikd
0 if ikd + 1 ≤ l ≤ i1d
, for k ∈ {2, . . . , t − 1},
(Vt)lj =
(
Ait−⌈l/d⌉
lj if 1 ≤ i ≤ it
0 if it + 1 ≤ i ≤ i1
.
From this definition, it is clear that the matrices V1, . . . , Vt are pairwise orthogonal, i.e., ⟨Vk, Vk′ ⟩F = 0, for k, k′ ∈ [t]. We define the following shifting matrices, {Sk,j−1}2≤k≤t,2≤j≤t in Rt×t,
(Sk,j−1)ll′ =
(
1 for l = k, l′ = j − 1
0 otherwise .
To see the effect of post-multiplying by this matrices, consider U = u1 u2 . . . ut ∈ Ri1×t. Then
U Sk,j−1 = 0 · · · 0 uk
|{z}
j−1 position
0 ··· 0 .
In words, post-multiplying U by Sk,j−1 forms a new matrix with the same dimensions of U , with its (j − 1)-th columns equal to the k-th column of U , and the rest of the columns are zero. With this, we express P as follows,
P = V1 V2 · · · Vt +
t
X
k=2
(Ii1 ⊗ Ai1−ik ) Vk 0 · · · 0 +
t
X
k=3
(Ii1 ⊗ Ai2−ik ) 0 Vk 0 · · · 0
+ . . . + (Ii1 ⊗ Ait−1−it ) 0 · · · 0 Vt 0
=V +
t
X
j=2
t
X
k=j
(Ii1 ⊗ Aij−1−ik )V (Sk,j−1 ⊗ Id),
46

where V := V1 V2 · · · Vt . On the other hand, for all k, j ∈ [t],
(Ii1 ⊗ Aij−1−ik )V (Sk,j−1 ⊗ Id) = V (Sk,j−1 ⊗ Id)(It ⊗ Aij−1−ik ),
which implies,
P =V +
t
X
j=2
t
X
k=j
V (Sk,j−1 ⊗ Id)(It ⊗ Aij−1−ik )
=V +
t
X
j=2
t
X
k=j
V Sk,j−1 ⊗ Aij−1−ik
=V

Itd +
t
X
j=2
t
X
k=j
Sk,j−1 ⊗ Aij−1−ik

.
With this, we have
P⊤P =

Itd +
t
X
j=2
t
X
k=j
Sk,j−1 ⊗ Aij−1−ik


⊤
V ⊤V

Itd +
t
X
j=2
t
X
k=j
Sk,j−1 ⊗ Aij−1−ik

.
Given that Itd + Pt
j=2
Pt
k=j Sk,j−1 ⊗ Aij−1−ik and V ⊤V are square matrices, we have
det P ⊤P = det(V ⊤V ) det

Itd +
t
X
j=2
t
X
k=j
Sk,j−1 ⊗ Aij−1−ik


2
.
The term Pt
j=2
Pt
k=j Sk,j−1 ⊗ Aij−1−ik only contains matrices of the form Sk,j−1, with k ≥ j,
which are all strictly lower triangular. Then it is easy to see that Itd + Pt
j=2
Pt
k=j Sk,j−1 ⊗ Aij−1−ik is a block-lower triangular matrix with Id’s on its main block-diagonal. On the other hand, the determinant of a block-lower triangular matrix equals the determinant of the block-diagonal matrix formed by its diagonal blocks (see [22, Section 0.9.4]). This implies that
det

Itd +
t
X
j=2
t
X
k=j
Sk,j−1 ⊗ Aij−1−ik

 = det (Itd) = 1.
On other hand, by the orthogonality of the blocks V1, . . . , Vt that form V , it is easy to see that V ⊤V is block diagonal, of the form,
V ⊤V = blkdiag V ⊤
1 V1, V ⊤
2 V2, . . . , V ⊤
t Vt =

   
V1⊤V1 0 · · · · · · 0
0 V2⊤V2 0 · · · 0
... ... . . . · · · 0
0 . . . . . . . . . Vt⊤Vt

   
.
Given that the determinant of a block diagonal matrix is the product of the determinant of its blocks, we obtain
det P ⊤P = det(V ⊤V ) =
t
Y
k=1
det(V ⊤
k Vk),
47

where we note that
V⊤
k Vk =
(Pik −ik−1 −1
l=0 (Al)⊤Al, for k ∈ [t − 1]
Pit−1
l=0 (Al)⊤Al, for k = t.
In particular, since V ⊤
k Vk ⪰ Id for each k, this implies det P ⊤P ≥ 1.
C.5 Proof of Lemma 11
We will again use A instead of A∗ to ease notation. Notice that P ⊤P has the following block structure
P⊤P =

      
P⊤
i1 Pi1 P ⊤
i1 Pi2 · · · P ⊤
i1 Pit
P⊤
i2 Pi1 P ⊤
i2 Pi2 · · · P ⊤
i2 Pit
... . . . · · · ...
P⊤
it Pi1 P ⊤
it Pi2 · · · P ⊤
it Pit

      
.
In order to bound the eigenvalues of P ⊤P we use [45, Theorem 1.13.1] which generalizes the Gershgorin disk theorem to the block matrix case. In particular, it says that
spec(P ⊤P ) ∈ ∪t
k=1 Gk ,
where
Gk := spec(P ⊤
ik Pik ) ∪

  
  
λ ∈/ spec(P ⊤
ik Pik ) : dist λ, spec(P ⊤
ik Pik ) ≤
t
X
k′=1
k′̸=k
∥P ⊤
ik Pik ∥2

  
  
.
Using the above result, we have the following estimates (we use A instead of A∗ to ease notation).
(a) For k ∈ [t], we have
P⊤
ik Pik =
ik −1
X
j=0
(Aj)⊤Aj = Id +
ik −1
X
j=1
(Aj)⊤Aj, and
ik −1
X
j=1
(Aj )⊤ Aj
2
≤
ik −1
X
j=1
∥A∥2j
2 = ∥A∥22
1 − ∥A∥22
=: δ(A).
Then, spec(P ⊤
ik Pik ) ∈ [1 − δ(A), 1 + δ(A)].
(b) For k′, k ∈ [t], with k ̸= k′, we distinguish the following two cases.
(b.1) For k′ such that ik′ < ik, we have
P⊤
ik Pik′ = Aik−ik′ I + A2 + A4 + . . . + A2(ik′ −1) ,
which implies that
∥P ⊤
ik Pik′ ∥2 ≤ ∥A∥ik−ik′
2
1 − ∥A∥2ik′
2
1 − ∥A∥22
!
≤ ∥A∥ik−ik′
2
1 − ∥A∥22
.
From above, we obtain
X
k′:ik′ <ik
∥P ⊤
ik Pik′ ∥2 ≤ ∥A∥2
(1 − ∥A∥2)(1 − ∥A∥22) .
48

(b.2) For k′ such that ik′ > ik, we have
P⊤
ik Pik′ = Aik′ −ik I + A2 + A4 + . . . + A2(ik−1) ,
from which we obtain
∥P ⊤
ik Pik′ ∥2 ≤ ∥A∥ik′ −ik
2
1 − ∥A∥2ik
2
1 − ∥A∥22
!
≤ ∥A∥ik−ik′
2
1 − ∥A∥22
.
Hence,
X
k′:ik′ >ik
∥P ⊤
ik Pik′ ∥2 ≤ ∥A∥2
(1 − ∥A∥2)(1 − ∥A∥22) .
Combining the estimates in (b.1) and (b.2), we obtain
X
k′:ik′ ̸=ik
∥P ⊤
ik Pik′ ∥2 ≤ 2∥A∥2
(1 − ∥A∥2)(1 − ∥A∥22) := κ(A).
From the above calculations, we see that (let λ(k)
j lie in spec(P ⊤
ik Pik ))
Gk ⊆ [1 − δ(A), 1 + δ(A)] ∪
n
∪d
j=1{λ ̸= λ(k)
j ∈ spec(P ⊤
ik Pik ) : |λ − λ(k)
j | ≤ κ(A)}
o
⊆ [1 − δ(A) − κ(A), 1 + δ(A) + κ(A)]
= 1 − ∥A∥22
1 − ∥A∥22
− 2∥A∥2
(1 − ∥A∥2)(1 − ∥A∥22) , 1 + ∥A∥22
1 − ∥A∥22
+ 2∥A∥2
(1 − ∥A∥2)(1 − ∥A∥22)
Now,
1 + ∥A∥22
1 − ∥A∥22
+ 2∥A∥2
(1 − ∥A∥2)(1 − ∥A∥22) ≤ 1
1 − ∥A∥22
+ 2∥A∥2
(1 − ∥A∥2)(1 − ∥A∥22)
≤ 1 − ∥A∥22
(1 − ∥A∥22)(1 − ∥A∥2)
≤1
(1 − ∥A∥2)2 .
Then,
λ1 P ⊤P ≤ 1
(1 − ∥A∥2)2 .
D Proof of Theorem 1
The proof of Theorem 1 follows directly from the next three lemmas.
Lemma 12. Let s0 := 21/d, and assume A∗ satisfies ∥A∗∥2 < 1. Suppose that
σ2 ≤ (1 − ∥A∗∥2)5
4(sω(1)
0 T 4/d − 1)
.
Then we have E[|E|] → 0, when T → ∞. In particular, |E| = 0 with high probability.
49

Proof. From Proposition 2, we get
log det (1 − ∥A∗∥2)3
4σ2 L + Ii1d
−1
2
≤ −d
2 (t − 1) log (1 − ∥A∗∥2)5
4σ2 + 1
≤ −d
4 t log (1 − ∥A∗∥2)5
4σ2 + 1 ,
where the last inequality follows from the fact that 2(t − 1) ≥ t, for t ≥ 2. From this, we deduce,
t log T + log det (1 − ∥A∗∥2)5
4σ2 L + Ii1d
−1
2
≤ (t log T ) 1 − d
4 log T log (1 − ∥A∗∥2)5
4σ2 + 1
≤ (t log T ) 1 − d
4 log T log sω(1)
0 T4
d
≤ (t log T ) −ω(1) log 2
log T
≤ −tω(1). (D.1)
From (3.2), (3.9) and the fact that number of t-cycles in [T ] is bounded by T t/t, we obtain,
E[|E|] ≤
T
X
t=2
exp t log T + log det (1 − ∥A∗∥2)5
4σ2 L + Ii1d
−1
2
!
≤
T
X
t=2
(e−ω(1))t = o(1),
where in the second line we used (D.1). The high probability statement follows directly from Markov’s inequality.
When ∥A∗∥2 = 0, our result recovers up-to-constants the results in [32]. Similarly, we have an analogous result to [32, Lemma 3.4], which leads to a constant error upper bound.
Lemma 13. Let s0 = 21/d, and assume A∗ satisfies ∥A∗∥2 < 1. Suppose that
σ2 ≤ (1 − ∥A∗∥2)5
4(sO(1)
0 T 4/d − 1)
.
Then, E[|E|] = O(1). In particular, for any function f (T ) = w(1), we have |E| ≤ f (T ) with high probability.
Proof. The proof mimics the argument in the proof of Lemma 12, but exchanging ω(·) by O(·). This shows that E[|E|] = O(1), and the rest of the argument follows from an application of Markov’s inequality.
We now establish an analogue of [32, Lemma 3.5]. Our proof proceeds in the same manner as the previous lemmas. Interestingly, in [32] the argument for this lemma differs slightly from the others, whereas in our case no such modifications are required.
Lemma 14. Let s0 = 21/d, and assume A∗ satisfies ∥A∗∥2 < 1. Suppose that
σ2 ≤ (1 − ∥A∗∥2)5
4(sω(1)
0 T 2/d − 1)
.
50

Then,
E[|E|] = O (1 − ∥A∗∥2)5
4σ2 + 1
−d
2
T2
!
.
Proof. Recall that by Proposition 2, we have
t log T + log det (1 − ∥A∗∥2)5
4σ2 L + Ii1d
−1
2
≤ t log T − d
2 (t − 1) log (1 − ∥A∗∥2)5
4σ2 + 1
= 2 log T + (t − 2) log T − d
2 (t − 2) log (1 − ∥A∗∥2)5
4σ2 + 1
−d
2 log (1 − ∥A∗∥2)5
4σ2 + 1
≤ 2 log T − d
2 log (1 − ∥A∗∥2)5
4σ2 + 1 − ω(1)(t − 2).
Then,
E[|E|] ≤
T
X
t=2
exp t log T + log det (1 − ∥A∗∥2)5
4σ2 L + Ii1d
−1
2
!
≤
T
X
t=2
(1 − ∥A∗∥2)5
4σ2 + 1
−d
2
T 2(e−ω(1))t−2
= O (1 − ∥A∗∥2)5
4σ2 + 1
−d
2
T2
!
.
E Additional experiments
In this section, we include additional experiments that complement the experiments in the main paper. In Section E.1 we show the performance of the estimation method described in Remark 10. Finally, in Section E.2 we implement other algorithms for the Birkhoff polytope relaxation and show that they all have similar performance.
E.1 Estimate A∗ first
One natural approach for estimating Π consists in the two-step strategy described in Remark 10. Here, first A∗ is estimated using only the time series (xt)t∈[T ], for which the right order is known,
via least-squares (the MLE for estimating A∗ under the VAR model). Call this estimator AbMLE. Then we solve (4.1) replacing A with AbMLE. We show the results in the regimes d = 5, T = 50 and d = 50, T = 5, in Figure 8 using the Mirror Descent (MD) algorithm for the simplex relaxation. We observe that in the regime d = 5, T = 50, the performance under the true and the estimated A∗ are very similar, likely because the time series is long enough so that AbMLE is already close to A∗. On the other hand-
, for d = 50, T = 5, the performance of RelaxMLE-Round with AbMLE degrades as the noise increases. In the considered regime, the LA estimator and RelaxMLE-Round with A∗ both achieve perfect recovery.
51

0.0 0.2 0.4 0.6 0.8 1.0
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
Recovery fraction
Comparison of A_true vs A_est (25 trials)
MD (A_true) MD (A_est) LA
(a) d = 5, T = 50
0.0 0.2 0.4 0.6 0.8 1.0
0.6
0.7
0.8
0.9
1.0
Recovery fraction
Comparison of A_true vs A_est (25 trials)
MD (A_true) MD (A_est) LA
(b) d = 50, T = 5
Figure 8: Recovery fraction vs. σ for the MD algorithm, which solves the simplex relaxation. Here θ = 0.5 and the average is computed over 30 Monte Carlo runs. In Fig. 8b both the MD estimator with access to A∗ and the LA estimator achieve perfect recovery.
0.0 0.2 0.4 0.6 0.8 1.0
Noise
0.0
0.2
0.4
0.6
0.8
1.0
Recovery fraction
Recovery vs Noise (T=50)
Birkhoff_PGD LA FW Newton ADMM
Figure 9: Comparison between different algorithms to solve (4.1) on the Birkhoff polytope. We evaluate them in the setting of Algorithm 1. Here we consider the setting of known d = 5, T = 50, θ = 0.5 and different levels of noise σ.
E.2 Other algorithms for the Birkhoff relaxation
We consider different optimization schemes for the Birkhoff relaxation, including a Frank–Wolfe method, an ADMM-based approach, and a quasi-Newton variant. The Frank–Wolfe algorithm [16] performs iterative linear minimization over the Birkhoff polytope using the gradient of the objective and a line search step, offering a projection-free alternative particularly suited for large-scale problems. The ADMM algorithm [1] enforces the Birkhoff constraints via alternating updates of primal and dual vari-
ables, with efficient projections implemented through Dykstra’s algorithm. Finally, the quasi-Newton method [8] applies an L-BFGS step on the flattened permutation matrix followed by projection onto the Birkhoff polytope, providing a curvature-aware but more computationally demanding alternative. In Figure 9, we compare all three methods for d = 5, T = 50, and θ = 0.5. We run algorithm 1, assuming a known A∗, which is sampled at random according to (5.3). In this setting, all algorithms achieve si-
milar recovery performance, and this pattern remains consistent across the different parameter combinations we tested.
52

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:40.974Z
- **Text Length:** 111433 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 52 of 52
