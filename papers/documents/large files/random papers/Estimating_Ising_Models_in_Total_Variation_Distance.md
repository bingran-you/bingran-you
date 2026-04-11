# PDF Document: Daskalakis et al. - 2025 - Estimating Ising Models in Total Variation Distance.pdf

**File Path:** Daskalakis et al. - 2025 - Estimating Ising Models in Total Variation Distance.pdf

**Processed Date:** 2026-02-10T18:15:59.891Z

**File Size:** 774.37 KB

**Total Pages:** 49

**Extracted Pages:** 49

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3363

**Title:** Estimating Ising Models in Total Variation Distance

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

ESTIMATING ISING MODELS IN TOTAL VARIATION DISTANCE
Constantinos Daskalakis EECS Department MIT
costis@csail.mit.edu
Vardis Kandiros Data Science Institute Columbia University ak5484@columbia.edu
Rui Yao
EECS Department MIT
rayyao@mit.edu
November 27, 2025
ABSTRACT
We consider the problem of estimating Ising models over n variables in Total Variation (TV) distance, given l independent samples from the model. While the statistical complexity of the problem is well-understood [DMR20], identifying computationally and statistically efficient algorithms has been challenging. In particular, remarkable progress has occurred in several settings, such as when the underlying graph is a tree [DP21, BGPV21], when the entries of the interaction matrix follow a Gaussian d-
istribution [GM24, CK24], or when the bulk of its eigenvalues lie in a small interval [AJK+24, KLV24], but no unified framework for polynomial-time estimation in TV exists so far. Our main contribution is a unified analysis of the Maximum Pseudo-Likelihood Estimator (MPLE) for two general classes of Ising models. The first class includes models that have bounded operator norm and satisfy the Modified Log-Sobolev Inequality (MLSI), a functional inequality that was introduced to study the convergenc-
e of the associated Glauber dynamics to stationarity. In the second class of models, the interaction matrix has bounded infinity norm (or bounded width), which is the most common assumption in the literature for structure learning of Ising models. We show how our general results for these classes yield polynomial-time algorithms and optimal or near-optimal sample complexity guarantees in a variety of settings. Our proofs employ a variety of tools from tensorization inequalities to measure decompos-
itions and concentration bounds.
1 Introduction
Undirected graphical models are a widely used framework for capturing conditional independence structure in a highdimensional distribution. One of the earliest and most prominent instances of these models are Ising models, a family of distributions over n binary variables specified by a symmetric interaction matrix J* ∈ Rn×n, with zero diagonal, and a vector of external fields h ∈ Rn. In terms of these parameters, a probability distribution is defined over {−1, 1}n, assigning to each vector x ∈ {−-
1, 1}n probability
JP*,rh[x] = 1
ZJ * ,h
· exp
(︂1
2 x⊤J *x + h⊤x
)︂
, (1)
where the normalizing constant
ZJ*,h :=
∑︁
x∈{−1,1}n
exp
(︂1
2 x⊤J *x + h⊤x
)︂
is called the partition function of the model. We will focus on the case h = 0, so we drop the dependence on h whenever that happens. The matrix J* can also be thought of as the weighted adjacency matrix of a graph with n nodes. This gives rise to the interpretation of an Ising model as a Markov Random Field (MRF) [KF09, WJ+08], where conditional independence relations between variables are encoded as connectivity properties between nodes in the graph defined by J*. Since its introduction in stati-
stical physics [Len20], the Ising model has been studied intensely in probability theory, and has found profound applications in a variety of fields, including computer vision, economics, computational biology, and the social sciences; see e.g. [GG86, Ell93, Fel04, DMR06, MS10]. Motivated
arXiv:2511.21008v1 [cs.LG] 26 Nov 2025

Estimating Ising Models in Total Variation Distance
in part by these applications, a common challenge is estimating an Ising model given a number of observations that are assumed to be distributed according to some Ising model, e.g. capturing opinions of individuals in a social network, or traits of species in some phylogenetic tree.
The problem of learning the structure of the underlying graph, i.e. the non-zero entries of J*, given access to l independent samples from an Ising model has received significant attention, due to its importance in capturing conditional independence properties. Under the assumption that the degree of the graph is bounded by d and the non-zero entries of J* are both upper and lower bounded in absolute value, a breakthrough result by Bresler [Bre15] provided a polynomial-time algorithm for identifyi-
ng the graph topology, albeit with doubly exponential dependence of the sample-size requirements in the degree d. A flurry of subsequent works [HKM17, VMLC16, LVMC18, KM17, WSD19, ZKKW20] have culminated in polynomial-time algorithms that estimate every entry of J* up to error ε, given l = Θ(eΘ(d) log n/ε4) samples from the model, under the assumption that each row of J* has infinity norm that is upper-bounded. This matches the information-theoretic lower bound of [SW12]. Thus, the problem of esti-
mating the graph structure of an Ising model is by now well understood under relatively general assumptions.
However, often the purpose of estimation is to make predictions of events for various downstream uses of the model [BK20, DP21, BGPV21]. It is clear that the right metric to capture this property is not graph similarity, but the total variation (TV) distance (formal definition in Section 2) between the true and the estimated distribution. Information-theoretically, Devroye et al. [DMR20] show that O ̃(n2/ε2) samples from some Ising model are both necessary and sufficient for estimating an Ising mo-
del that is ε-close in TV. The algorithm proposed in [DMR20] involves exhaustive search over all models and is thus computationally infeasible. This motivates the following natural question.
Is there a polynomial-time algorithm that uses independent samples from an Ising model and outputs some Ising model that is close to the one providing samples in TV distance?
While for the problem of structure recovery, there has been significant progress towards computationally efficient and statistically optimal algorithms under fairly general settings, attaining similar guarantees for the TV estimation problem has been challenging. Remarkable progress has occurred across several different directions, such as when the graph is a tree [DP21, BGPV21], when the interaction matrix is sampled from a Gaussian ensemble [GM24, CK24], or when most of the spectrum of the matri-
x lies in a small interval [AJK+24, KLV24], but no unified framework exists for statistically and computationally efficient procedures for this task. The main contribution of this work is to provide a refined understanding of a natural, polynomial-time algorithm for Ising model estimation, under broad conditions, and derive from our understanding near-optimal (and in some cases optimal) sample-complexity guarantees in a variety of important, specific settings. In particular, we focus on the so-cal-
led Maximum Pseudo-Likelihood Estimator (MPLE) (formally defined in Section 4), which was introduced in [Bes74] and is often employed for statistical estimation of autoregressive models. We study the performance of this polynomial-time computable estimator for two general classes of Ising models, which we review in the next couple of paragraphs.
(i) Modified Log-Sobolev Condition: One common way of obtaining information about the distribution of an Ising model is by studying the properties of an associated Markov Chain, called Glauber dynamics, that has this model as its stationary distribution. We say that an Ising model satisfies a Modified Log-Sobolev Inequality (MLSI), if the KL-divergence of any distribution from this model contracts at a constant rate after a single step of the Glauber dynamics [BT06] (for formal definitions, see Se-
ction 5). This condition has been shown to hold for a variety of Ising models under different assumptions [AJK+21, AKV24, CMT15, CE22, BCC+22, CLV21]. It is also known to imply many structural properties for the Ising model distribution, such as fast mixing [Cap23] and concentration of measure [Mar15, SS19, GSS21]. We prove a general result about the performance of MPLE for estimating Ising Models that satisfy MLSI, which implies optimal or near-optimal sample complexity for learning a variety of -
Ising models, improving results from prior work.
(ii) Bounded Width Condition: The second class of models we study are bounded-width models, where ‖J*‖∞ = O(1). This has been the canonical class of models considered in most studies of the structure learning problem [SW12, Bre15, HKM17, VMLC16, KM17, WSD19]. For this class of models, [KM17] give a polynomial-time algorithm that uses O(n8/ε4) samples and learns an ε-multiplicative approximation of PrJ* , which implies ε-closeness in TV. We provide a refined analysis of MPLE, which involves a conve-
x objective that can be optimized efficiently. As a consequence, we show how one could obtain sample complexity guarantees within a single O(n) factor from optimal, assuming the model satisfies a suitable regularity condition that we appropriately define.
Our improved general bounds can be applied in a variety of models, yielding comparable or superior sample complexity to that of prior work. For simplicity, we only discuss examples of models where we get improved complexity guarantees. Table 1 contains a detailed comparison.
2

Estimating Ising Models in Total Variation Distance
At a technical level, our improvements are made possible by using a connection to the problem of single-sample estimation of Ising models, which was formulated in [DDDK21] and implicitly studied elsewhere before; for some references see e.g. [Cha07, BM18, DDP19, DDDK21, MNH+21, KDD+21]. This line of work assumes that we are only given a single sample from an Ising model whose interaction matrix lies in some low-dimensional subspace, and our goal is to estimate this matrix. These works manage to ex-
tract a useful signal from a single sample from the model, even in the presence of strong dependencies within the sample. In contrast, algorithms that rely on multiple samples make strong use of the independence across different samples to employ generalization bounds from learning theory within the estimation procedure. In [DDDK21], the authors show how to leverage their single-sample estimation methods to obtain a polynomial-time algorithm for learning the structure of an Ising model in the mult-
iple-sample regime. However, their sample complexity is far from optimal. In this paper, we improve upon this single-sample-based approach to obtain various state-of-the-art results in the multiple-sample regime. It is crucial for our development to establish tight upper and lower bounds for the first and second derivatives of the pseudolikelihood function, which we do by using a variety of tools from high-dimensional probability and statistics, such as tensorization inequalities, measure decompos-
itions, and concentration of measure. Along the way, we provide refined guarantees for pseudolikelihood estimation, which could be of independent interest. We believe the connection between single-sample and multiple-sample learning could be more broadly applicable to a variety of estimation problems for Markov Random Fields. Thus, our work serves as a first step towards obtaining efficient and sample-optimal algorithms for TV learning of high-dimensional distributions with complex dependencies.
General Class of
Models Applications Our Work Prior Work
MLSI + bounded 2-norm
Spectrally-bounded models
O ̃(n2/ε2)
(Corollary 2, optimal) O(n3/ε4)
SK/diluted SK model (β < 0.295...)
O ̃(n4/ε2)
(Corollaries 3 and 4) O ̃(n9/ε8)
Antiferromagnetic expanders
O ̃(n2/ε2)
(Corollary 5, optimal) O ̃(n5/ε4)
Bounded-width (1/√n, 1)-regular
models
O ̃(n3/ε2)
(Corollary 10) O ̃(n8/ε4) Table 1: This table contains the sample complexity bound implied by our work, as well as the best known bound from prior work, for the problem of estimating an Ising model to within ε > 0 in TV. The best-known prior bound is discussed, where these results are stated.
2 Results
Let S0n denote the set of all symmetric matrices A ∈ Rn×n with zeroes on the diagonal. We will make use of the
infinity norm of a matrix A ∈ S0n, which is defined as ‖A‖∞ := maxi∈[n]
∑︀
j |Aij|, as well as the operator norm of A, defined as ‖A‖2 := supx̸=0 ‖Ax‖2/‖x‖2. We will occasionally denote this operator norm by ‖A‖op. Also, the Frobenius norm is defined as ‖A‖F := ∑︀
i
∑︀
j A2
ij. For A ∈ S0n, we denote by Ai the i-th row of A. For a vector x ∈ Rn and i ∈ [n], we denote by x−i the sub-vector obtained by removing the value of coordinate i from the vector. In general, we will use lowercase letters for deterministic quantities and uppercase letters for random quantities. When we refer to an Ising model with interaction matrix J and the external field hhh is the zero vector, we will write PrJ for convenience and simply omit the external field. If we sample X ∼ PrJ , we refe-
r to Xi ∈ {−1, 1} as the spin of
node i. For two probability measures P, Q supported on {−1, 1}n, their Total Variation (TV) Distance is defined to be TV(P, Q) := supA⊆{−1,1}n |P(A) − Q(A)| , where A ranges over all subsets of {−1, 1}n.
In this work, we are given l independent samples from an Ising model PrJ* as in (1). Our goal will be to properly learn the model in distribution, i.e., to estimate some matrix Jˆ ∈ S0n so that PrJ* and PrJ^ are close in TV. Additionally,
we would like an algorithm that runs in polynomial time. We now state the results of this investigation for the two different classes of Ising models that we consider.
2.1 Estimating Ising Models that satisfy MLSI
A considerable amount of work has focused on identifying classes of Ising models where sampling and inference from the model are computationally tractable. In particular, it is now well understood that these tasks are easy when the
3

Estimating Ising Models in Total Variation Distance
Glauber dynamics associated with the model converge quickly to the stationary distribution. Indeed, in that case, one could run the chain many times independently to produce ”approximate samples” from the distribution and use these to evaluate relevant quantities such as marginal or conditional probabilities of the model.
Therefore, a large part of the literature is devoted to the study of the mixing time properties of the Glauber dynamics for various Markov Chains, resulting in a deep and beautiful theory. It has been shown that the Glauber dynamics converge exponentially fast to the stationary distribution in KL divergence if and only if the model satisfies a Modified Log-Sobolev Inequality (MLSI), a functional inequality that is weaker than the usual Log-Sobolev inequality in discrete spaces [BT06]. The MLSI has-
 been established for a variety of Ising models under different constraints [Mar15, AJK+21, CE22, BCC+22, AKV24].
Our first main Theorem establishes estimation guarantees for Ising models that satisfy MLSI, when running the MPLE over some set of interaction matrices. Crucially, the only properties that this set needs to satisfy are that J* belongs to that set and that the matrices in the set have bounded operator norm, which is a mild requirement that holds for almost all classes of Ising models where MLSI has been shown. This flexibility with respect to the optimizing set enables us to obtain polynomial-time-
 algorithms in various cases, particularly when the set is convex and admits efficient projections (see Section 2.1.2 for more discussion). The estimation guarantees are phrased in terms of Frobenius norm closeness to the matrix J*, but we will see in Sections 2.1 and 2.1.2 how these can be easily translated to bounds on the TV distance. Also, in the formal version of the theorem, we have included the case of a non-zero external field, which doesn’t change the analysis in any significant way and i-
s omitted here for simplicity.
Theorem 1 (informal, see Theorem 28). Suppose we are given l independent samples X(1), . . . , X(l) ∼ PrJ* and
PrJ* satisfies MLSI. Let R ⊆ S0n be a subset of matrices such that supA∈R ‖A‖2 = O(1) and J* ∈ R. Then, running MPLE with optimizing set R produces an estimate Jˆ ∈ R, such that with high probability over the choice of samples ‖J* − Jˆ‖F ≤ ε, as long as l = Ω ̃ (n2/ε2).
As far as we know, a result of this generality has not appeared in the literature. The most related prior result is Theorem 5.2 from [AJK+24], where they obtain an elegant result for TV estimation using MPLE. However, their result assumes that the Ising model satisfies Approximate Tensorization of Entropy (ATE), which is a stronger functional inequality than MLSI. Moreover, they require that every matrix in the optimizing set of MPLE satisfies ATE, which places strong constraints on the choice of -
this set. Finally, they require the matrices to be of bounded-width, which is a stronger assumption than bounded operator norm and results in the loss of additional polynomial factors. We provide more details about precise sample complexity guarantees in Section 2.1. We next present a variety of applications of the main result for TV learning in classes of Ising models that satisfy MLSI.
2.1.1 Application: Estimating Spectrally-Bounded Ising Models in TV
Perhaps the most widely-studied condition that enables computationally efficient sampling and inference in Ising models is Dobrushin’s Uniqueness Condition [Dob68], which asserts that ‖J‖∞ < 1, or equivalently ∑︀
j |Jij | < 1 for all rows i. This condition has been shown to imply a variety of structural properties for the Ising measure, such as fast mixing [LP17], correlation decay [Kün82], and concentration inequalities [GSS21, AKPS19, Mar15].
Unfortunately, this condition is sometimes too strict and does not capture the tractable regime of an Ising model. A notable example is the celebrated Sherrington-Kirkpatric (SK) model, where J* is a random matrix with each J*
ij
sampled independently from N (0, β2/n), where β > 0 is a parameter called the inverse temperature of the model. It
is straightforward to observe that the expected l1-norm of each column is Θ(β√n), thus Dobrushin’s condition is only
satisfied if β = O(1/√n). However, it is expected that the model exhibits weak interactions for all sufficiently small constant β.
Motivated by this gap, [EKZ22] introduced an alternative condition for fast mixing. In particular, we say that an Ising model as in (1) is spectrally bounded if λmax(J*) − λmin(J*) < 1(note that J* is symmetric, hence diagonalizable).
In [AJK+21], they prove that if a model is spectrally bounded, then MLSI holds and the Glauber dynamics mix in polynomial time. Thus, we can apply Theorem 1 for this class of Ising models, which results in informationtheoretically optimal sample complexity O ̃(n2/ε2) for estimating spectrally bounded Ising models in TV.
Corollary 2 (informal, see Corollary 45). Suppose we are given l independent samples X(1), . . . , X(l) ∼ PrJ* , where
λmax(J*) − λmin(J*) < 1 − α and J* has zero-diagonal. Then, there is a polynomial time algorithm (MPLE) that produces an estimate Jˆ ∈ S0n, such that with high probability over the choice of samples we have TV(PrJ^, PrJ* ) ≤ ε,
as long as l = Ω ̃ (n2/ε2).
The implicit constant in the sample complexity contains a factor of the form exp(1/α2) and additional sub-polynomial factors of the form e
√log n. As far as we know, the most relevant prior work is [AJK+24], where they prove that MPLE
4

Estimating Ising Models in Total Variation Distance
succeeds in finding a model that is ε-close to the true Ising model PrJ* using O(n3+C /ε4) samples for some C < 1, by establishing ATE with an inverse polynomial constant. Subsequent work [Lee23] has shown that, in fact, ATE holds with a Θ(1) constant in this setting, which can be used to remove the C from the exponent, yielding O(n3/ε4) sample complexity. Our result thus improves over this bound, by showing that the MPLE actually achieves the information theoretically optimal sample complexity O(-
n2) for estimating Ising models in TV [DMR20]. We should remark, though, that the implicit constant in the sample complexity of Corollary 2 contains a factor that is exponential in 1/α2, while the bound in [AJK+21] is free of such dependence. As noted above, spectrally bounded models do not
necessarily have bounded width (see Section 2.2 for definition) e.g. for the SK model, ‖J‖∞ could be Θ(√n), so the prior work [KM17] would give exponential sample complexity.
2.1.2 Application: Estimating the SK-model in TV
As mentioned in Section 2.1, the SK model is one of the canonical examples of a mean-field model in statistical physics, exhibiting fascinating phase transition phenomena that have been the subject of extensive study in probability theory [Pan12, Tal10]. The relevant parameter is the inverse temperature β > 0. Standard results from random matrix theory imply that if β < 1/4, then with high probability the interaction matrix has spectrum inside an interval of size < 1, which means the model is spec-
trally bounded. Thus, in this regime, Corollary 2 can be used to learn the model optimally with O ̃(n2/ε2) samples.
However, it turns out that efficiently learning the model in TV distance is possible for much larger values of β. In particular, in [GM24], the authors remarkably prove that a polynomial time algorithm introduced in [WSD19] actually estimates the SK model in TV as long as β < 1. In a subsequent work, [CK24] shows that the same algorithm succeeds
even when β = O(√n), which extends well into the low-temperature region of the model.
While these works greatly push the frontiers of efficient learnability, the sample complexity arising from these results is of the order of O ̃(n9/ε8). In the next Corollary, we use Theorem 1 and recently established MLSI in [AKV24] to obtain O ̃(n4/ε2) sample complexity for learning the SK-model up to β ≈ 0.295, which is beyond the threshold of spectrally-bounded models.
Corollary 3 (informal, see Corollary 43). Suppose we are given l independent samples X(1), . . . , X(l) ∼ PrJ* ,
where J* is sampled according to the SK-model with β < C, where C ≈ 0.295. Then, there is a polynomial time algorithm (MPLE) that produces an estimate Jˆ ∈ S0n, such that with high probability over the choice of samples and
the choice of matrix J* we have TV(PrJ^, PrJ* ) ≤ ε, as long as l = Ω ̃ (n4/ε2).
Closely related to the SK-model are diluted versions, where the matrix is supported on a sparse graph. One such version, which we call for simplicity the diluted SK-model, arises from sampling a random d-regular graph G, where the matrix J* will be supported. Every non-zero entry of J* is then sampled independently and uniformly from
{−β/√d, β/√d}. Standard results from random matrix theory again imply that if β < 0.25, then the model is spectrally bounded with high probability and O ̃(n2/ε2) samples suffice by Corollary 2. [CK24] show that TV learning
in polynomial time is possible if β = O(√log n), with O ̃(n8d/ε8) samples. We use the recently established MLSI for diluted SK up to β ≈ 0.295 [AKV24] to establish that O ̃(n4/ε2) samples suffice in that regime if we run MPLE.
Corollary 4 (informal, see Corollary 44). Suppose we are given l independent samples X(1), . . . , X(l) ∼ PrJ* ,
where J* is sampled according to the diluted SK-model with β < C, where C ≈ 0.295. Then, there is a polynomial time algorithm (MPLE) that produces an estimate Jˆ ∈ S0n, such that with high probability over the choice of samples
and the choice of matrix J* we have TV(PrJ^, PrJ* ) ≤ ε, as long as l = Ω ̃ (n4/ε2).
Note that in this setting ‖J*‖∞ = O(√d), so one could use the result of [DDDK21] about learning in Frobenius
norm together with Lemma 40 that connects TV and Frobenius norms to prove that O(eΘ(√d)n4) samples suffice for TV learning using MPLE. However, notice that even if the degree grows mildly with the number of nodes, i.e., d = ω(log n), the sample complexity suffers from additional polynomial factors (or worse). In contrast, the sample
complexity in Corollary 44 only contains a sub-polynomial exp(√log n) factor, regardless of the value of d.
2.1.3 Application: Antiferromagnetic Expanders
Another prominent class of models is the ones where there is a gap between the largest and second-largest eigenvalue of the adjacency matrix. When the model is antiferromagnetic, then the spectrum essentially consists of a very negative eigenvalue and a bulk that is concentrated on a small interval. Prior work [AKV24, KLR22] has shown that one can “ignore” this very negative eigenvalue and establish MLSI in this case. Thus, if we can efficiently project on this set
5

Estimating Ising Models in Total Variation Distance
of matrices, then MPLE runs in polynomial time and has the optimal sample complexity. We show that this is indeed possible, which gives rise to the following Corollary.
Corollary 5 (informal, see Corollary 46). Let α ∈ (0, 1), c > 0 be constants and 1 the all-ones vector. Define the set R ⊆ S0n of matrices that have 1 as an eigenvector with eigenvalue −c and the rest of the spectrum is on an
interval of size α around 0. Suppose J* ∈ R. Then, given l independent samples from PrJ* , the MPLE over R can be implemented in polynomial time and returns Jˆ such that TV(PrJ^, PrJ* ) ≤ ε with high probability, as long as
l = Ω ̃ (n2/ε2).
For a canonical example in this set, consider the adjacency matrix AG of a random d-regular graph G and take
J* = −βAG. Then, from [Fri03] if follows that J* belongs in the set R with c = βd and α = 4β√d − 1, as long
as we take β < 1/(4√d − 1). Thus, we can learn this model in TV distance optimally and efficiently. The most relevant prior work in this case is [KLV24], which covers this class of models since it allows some eigenvalues to be very negative. However, the sample complexity is O ̃(n4R2/ε4), where R is the width of the model, which could be
Θ(√n) in that case (see Remark 47 for an example). Since R = Θ(√n) in the worst case, the bounded width result of [DDDK21] does not apply.
2.2 Estimating Bounded-Width Ising Models in TV
We say that an Ising model has bounded width, if the interaction matrix is assumed to have infinity norm bounded by some constant M > 0, i.e. ‖A‖∞ ≤ M . Note that M could be an arbitrary constant, which means the model could exhibit long-range correlations, Glauber dynamics might mix exponentially slowly (see e.g. [MWW09]), and concentration of measure in general fails to hold. Our first contribution involves an improved analysis of the MPLE estimator, which results in the following guarantee for -
estimating the model PrJ* .
Theorem 6 (informal, see Theorem 38). Suppose we are given l independent samples X(1), . . . , X(l) ∼ PrJ* , where ‖J*‖∞ ≤ M . Then, if Jˆ is the MPLE estimator(4), with high probability over the choice of samples we have
JE*[‖(Jˆ − J *)X‖2
2] ≤ ε, (2)
as long as l = Ω ̃ (n2/ε).
The implicit constant in the bound above contains a factor exp(M ). The guarantee provided by Theorem 6 might seem non-standard, but we will see that it is well-suited for estimation in TV distance in the following Section.
2.2.1 Applications
First, as a direct corollary of Theorem 6 (proved in Section 10), we can obtain the following.
Corollary 7 (informal). Suppose we are in the setting of Theorem 6. Then, with high probability over the choice of samples, we have
‖Jˆ − J *‖2
F ≤ ε, (3)
as long as l = Ω ̃ (n2/ε).
Corollary 7 also appears as Corollary 6 in [DDDK21], hence we recover the previously established guarantees for learning in the Frobenius norm. Note that in general, if J* is in low temperature, EJ* [‖(Jˆ − J*)X‖22] could be
significantly larger than ‖Jˆ− J*‖2
F (we also give such examples in Section 10), so Theorem 6 is a strict improvement over the result of [DDDK21].
Now we are ready to state the implications of our results for learning in TV. First, we note that without imposing any additional assumptions, we can obtain a sample complexity of O ̃(n4) from the Frobenius norm approximation. The reason is that one can show that an O(ε) approximation in Frobenius norm implies an O(nε) approximation in TV, using similar arguments to Theorem 7.3 in [KM17]. For completeness, we give a self-contained proof of this fact in Section 9. Thus, the following result follows-
 from this connection together with Corollary 7.
Corollary 8 (informal). Suppose we are in the setting of Theorem 6. Then, if l = Ω(n4/ε2), with high probability over the choice of sample TV(PrJ^, PrJ* ) ≤ ε.
We now show how we can improve on the O(n4) sample complexity of Corollary 8 using the refined analysis of Theorem 6. To do that, we will assume that the second moments of the true model are “robust” to small perturbations of the matrix. Intuitively, we expect this to happen whenever J* is away from the critical temperature where a phase transition occurs. Formally, let us introduce the following regularity assumption.
6

Estimating Ising Models in Total Variation Distance
Definition 9. We say an Ising Model PrJ* satisfies (γ, C)-regularity for some γ, C > 0 if the following holds: for
any J ∈ S0n such that EJ* [‖(J − J *)X‖22] ≤ γ, we have EJ [‖(J − J *)X‖22] ≤ C · EJ* [‖(J − J *)X‖22].
Of course, the crucial part of this definition is the scaling relation between γ and C > 0. We show as a Corollary of Theorem 6 that if a model is (1/n, 1)-regular, then O(n3) samples suffice for TV learning.
Corollary 10 (informal, see Corollary 39). Suppose we are in the setting of Theorem 6. Additionally, assume there exist constants γ, C > 0 such that PrJ* satisfies (γ/n, C)-regularity. Then, for any ε > 0, if l = Ω(n3/ε2), with high probability over the choice of samples TV(PrJ^, PrJ* ) ≤ ε.
Note that the sample complexity of Corollary 10 is only a factor O(n) away from the optimal sample complexity of [DMR20]. This regularity condition covers a wide range of models that do not necessarily need to be in high temperature. In particular, in Section 11, we prove that the Curie-Weiss model in low temperature satisfies the condition. Of course, we can also show that models satisfying more familiar conditions such as Dobrushin’s condition and spectrally-bounded models also satisfy this regu-
larity condition (see Section 11).
3 Related Work
Learning MRFs from multiple samples. The problem of estimating a Markov Random Field (MRF) from multiple independent samples from the model has a rich history, starting from the seminal work [CL68] from the 1960s, showing that for the Ising model, if the graph structure of the model is a tree, then Maximum Likelihood Estimation (MLE) can be solved in polynomial time. Information theoretically, [DMR20] establishes the minimax rate for estimating Ising models in TV as Θ(|E|/ε2), where |E| is the num-
ber of non-zero entries of the interaction matrix (see also [BCD20] for an alternative argument using linear programming). For the task of estimating the structure of Ising models with arbitrary graph topology and bounded degree d, the breakthrough work of [Bre15] provided the first polynomial time algorithm, where the sample complexity is doubly exponential in d. Subsequent works [HKM17, VMLC16, KM17, WSD19] proposed new algorithms with improved guarantees. In particular, [KM17] obtains the first-
 polynomial time algorithm for learning the structure of bounded-width models, while only requiring O(ed log n) independent samples using l2-regularized per-node logistic regression. This matched the information-theoretic lower bound from [SW12]. In the case of latent variables, [BKM19] gives a polynomial-time algorithm for learning ferromagnetic Restricted Boltzmann Machines. Beyond bounded width, a recent line of work studies Ising models under spectral constraints on the interaction matrix. [AJ-
K+24] shows that for spectally bounded models, MPLE succeeds in TV learning with O(n3+C) samples for some constant C. For the SK model, this implies efficient learning for all β < 1/4. [GM24] is the first work to obtain a polynomial time algorithm for learning the SK-model all the way up to β < 1, and [CK24]
extends the range of efficient learning for all β = o(√log n).
A related line of work studies the problem of learning the structure of MRFs using samples from the trajectory of Glauber dynamics [BGS17, GM24, GMM25]. The recent work of [GMM24] provides a near-linear time algorithm that learns the structure of a t-th order MRF using O(n log n) updates of Glauber dynamics, bypassing fundamental barriers for efficient higher order MRF estimation from independent samples. The work [JLMV24], which studies learning from independent samples of a metastable state of t-
he Glauber dynamics, is also close in spirit.
The particular case of MRFs with tree structure has also received attention, starting with [CL68]. [BGPV21, DP21] establish that the Chow-Liu algorithm is information-theoretically optimal for finite samples. For the related problem of estimating the low-dimensional marginals of the model, [BK20, BABK22] give polynomial-time and sample-optimal algorithms, and [NKS21] studies the setting where noisy labels of the nodes are observed. Finally, [KDDC23] provides guarantees for polynomial-time estimati-
on of latent tree Ising models in TV.
Finally, a recent line of work aims at estimating Ising models using score matching [KHR22, KV23, KLV24]. In particular, as noted in [KLV24], they focus on a class of low-complexity Ising models. Remarkably, they obtain sample complexity bounds that scale polynomially with the width of the model, in contrast to the exponential dependence in most prior work on MRF estimation.
Learning MRFs from a single sample. In this line of work, it is usually assumed that the true model belongs in a class of “low-dimensional” models and the task is to estimate it given a single n-dimensional observation from the model. In the case of an Ising model whose interaction matrix is known up to a scalar parameter β, [Cha07] initially
showed that MPLE is √n-consistent for β using the technique of exchangeable pairs. [BM18] extended these results under general conditions on the log-partition function. [GM20] studied the problem when, in addition to β, there is also an unknown scalar parameter in the external field, and [DDP19] generalized the result for logistic regression with dependencies. [DDDK21] provided estimation guarantees when the interaction matrix lies in a low-dimensional subspace. Several variations of these setting-
s have been studied, including optimal joint estimation of parameters for
7

Estimating Ising Models in Total Variation Distance
logistic regression with dependencies [KDD+21, MNH+21], estimation of tensor Ising models [DDP20, MSB22], estimation of hard-constrained models [BR21, GKK24a], inference on dense graphs [XM23].
Sampling Ising models. There is a vast literature in probability theory that focuses on proving fast sampling of Ising models under different constraints. Here, we focus on reviewing the results that are most relevant to the classes of Ising models that we study. Modified Log-Sobolev inequalities were introduced in [BT06] to prove fast mixing of Markov Chains in discrete spaces. The classical Dobrushin’s condition has been known to imply MLSI [LP17] and is tight in the case of the Curie-Weiss mode-
l. The class of spectrally bounded models, where λmax(J) − λmin(J) < 1, was introduced in [EKZ22] to capture relevant models from statistical physics, such as the SK-model. They established the Poincaré inequality when β < 1/4, complementing the result of [BB19] that proved a version of the log-Sobolev inequality in the same regime. Subsequently, [AJK+21] established the MLSI for spectrally bounded models, which implies optimal mixing of the Glauber dynamics. A different proof using localization s-
chemes was given in [CE22]. In the work [Lee23], they establish the stronger ATE property for these models. The condition of spectrally bounded models was shown to be tight for polynomial time sampling in [Kun24, GKK24b]. A polynomial time algorithm for sampling from the SK model in Wasserstein distance using algorithmic stochastic localization was given for β < 1/2 in [EAMS22] and extended to all β < 1 in [Cel24]. The recent work of [AKV24] established an MLSI for the SKmodel for β < 0.295. Final-
ly, the class of bounded-width Ising models includes many examples where sampling from the model is NP-hard. Indeed, for d-regular graphs with β > βc, where βc is the Kesten-Stigum threshold, [Sly10, SS12, GŠV15] show that approximate sampling from the distribution is NP-hard.
4 Technical Contributions
We first describe the algorithm that is employed for all results. The most common approach for obtaining an estimate Jˆ is to compute the Maximum Likelihood Estimator (MLE) given the samples. In the case of Ising models, to compute the MLE, one has to calculate the probability of the observed samples under different models. However, this involves computing the partition function of the model ZJ , which is NP-hard even to approximate in many interesting regimes [Sly10, SS12, GŠV15, GKK24b].
An attractive alternative, first proposed in [Bes74], is the so-called Maximum Pseudo-Likelihood Estimator (MPLE). Computing the Pseudo-Likelihood of a given model involves computing the conditional probability of the spin of a node i conditioned on the spins of all the other nodes. Formally, suppose we get independent samples X(1), . . . , X(l) ∼ PrJ* . Then, the MPLE over a set of matrices R ⊆ S0n is defined as
Jˆ := arg max
J∈R P L(J ; X(1), . . . , X(l)) := arg max
J ∈R
l
∏︁
k=1
n
∏︁
i=1
PJr[X (k)
i |X(k)
−i ] (4)
The set R will be chosen depending on the particular class of Ising models we are trying to estimate. One useful property of this objective function is that it is a concave function of J, which makes it easy to optimize using firstorder methods whenever R is a convex set that admits efficient projections. To make calculations more convenient, we will consider instead minimizing the negative log pseudolikelihood, which in the case of Ising models can be written as
φ(J ) := − log P L(J ; X(1), . . . , X(l)) =
l
∑︁
k=1
n
∑︁
i=1
(︁
log cosh(JiX(k)) − X(k)
i JiX(k) + log 2
)︁
(5)
In the above, we have omitted the dependence of φ on the samples X(1), . . . , X(l) for convenience. Thus, the objective in MPLE has a simple closed form that does not involve the partition function, which is why it is preferred over MLE. Since the optimization takes place in a high-dimensional space, we will be interested in computing the first and second derivatives of φ at a point J ∈ S0n and at direction A ∈ S0n. These are given by the formulas (see also Section(5))
∂φ(J *)
φA =
l
∑︁
k=1
n
∑︁
i=1
(AiX(k))(tanh(JiX(k)) − X(k)
i ) , ∂2φ(J )
∂A2 =
l
∑︁
k=1
n
∑︁
i=1
(AiX(k))2 sech(JiX(k))2 (6)
The standard way of analyzing the MPLE in the single sample literature [Cha07, BM18, DDP19, DDDK21] is to upper bound the first derivative at J* for all directions A and to lower bound the second derivative for all J and for all directions A. This, combined with a union bound argument, suffices for obtaining estimation guarantees for Jˆ. Since these derivatives are random quantities that depend on the samples, in order to bound them, we introduce a number of technical novelties, as well as combine-
 a variety of tools from high-dimensional probability. We now highlight these contributions for the two settings that we study.
8

Estimating Ising Models in Total Variation Distance
4.1 Models Satisfying MLSI
The work that is closest to the level of generality we are aiming for is [AJK+24], where they show that the Approximate Tensorization of Entropy (ATE) inequality implies closeness in KL (and thus in TV by Pinsker’s inequality) for the MPLE estimator. ATE is a stronger functional inequality than MLSI. Furthermore, the argument results in a dependence of the sample complexity on the width of the model, which could incur additional polynomial factors in the regime where only the operator norm is boun-
ded. For these reasons, the sample complexity obtained in [AJK+24] is suboptimal, even in the special case of spectrally-bounded models, where improved ATE was later established by [Lee23].
We bypass these obstacles by instead showing that a Modified Log-Sobolev Inequality (MLSI) (formally defined in Section 5) and boundedness of the operator norm are enough to analyze the pseudolikelihood function φ. The work that is closest in spirit to our goal in that regard is [DDDK21], where they analyze the MPLE when the infinity norm of the matrix is O(1)(bounded-width). As we shall see, establishing tight upper and lower bounds for the first and second derivatives of the pseudolikelihood fun-
ction φ when the infinity norm is unbounded poses additional challenges, which we now describe.
The first step towards that goal is to establish upper bounds for ∂φ(J*)/∂A for all directions A ∈ R, where R is the optimizing set. Notice by (6) that this is not a polynomial function of the samples X. Despite that, in [DDDK21], the authors use second-level concentration inequalities from [AKPS19] together with a linearization argument of the tanh to get the correct concentration radius of O(l · ‖A‖2
F ) for the first derivative. Unfortunately, the bounds in [AKPS19] rely on ATE. Instead, we show that MLSI suffices by using a general result about two-level concentration from [SS19]. The concentration radius in [SS19] is given with respect to the expected l2-norm of a version of the discrete derivative of the function (for more details see Section 5). In the proof, we show that even if we only know that the operator norm of the matrix A is bounded, this concentration radius can be bounded by O(-
l · ‖A‖2
F ). Since the expectation of
the first derivative is 0 when evaluated by J*, this implies that with high probability O|∂φ(J*)/∂A| = O(l · ‖A‖2
F ).
The next step is to lower bound the second derivative ∂2φ(J)/∂A2 for all J and all directions A. Ignoring the term involving sech momentarily, which comes with additional challenges, the second derivative in (6) is a second-degree polynomial of the Ising model. Using again the machinery from [SS19], we can show that this polynomial concentrates at an O(l · ‖A‖2
F ) radius with high probability. To conclude that the second derivative is large, we need to establish
that, on expectation, this polynomial is Ω(l · ‖A‖2
F ). This lower bound would certainly hold if we had a product distribution instead of an Ising model. Motivated by that, we use the well-known Hubbard-Stratonovich transform to decompose the model into a mixture of product distributions with external fields. The distribution of the external fields in this mixture is well known, and we use it to lower bound the expectation of this polynomial for the majority of these product measures, which suffices to obtain the desired lower bound on the expecta-
tion.
Finally, if we wish to lower bound the second derivative, we have to lower bound the term involving sech in (6). If the infinity norm of the matrices was bounded, as in [DDDK21], then this step is trivial, as |JiX(k)| = O(1)
always. In contrast, with an operator norm bound, this term could be as large as Θ(√n), which would result in an exponentially small lower bound for the second derivative in the worst case. One idea would be to use the concentration of linear functions of models satisfying MLSI, in order to bound JiX(k) by o(log n), which holds with probability 1 − 1/poly(n). Unfortunately, since we have to establish this for all matrices J, the probability of error does not decay fast enough to take a union bound-
 over this high-dimensional set of matrices. Our solution is to instead write JiX(k) = J *
i X(k) + (Ji − J *
i )X(k). Since J* is now fixed, we can use the preceding argument to bound J*
i X(k) with high probability. For (Ji−J*
i )X(k), we can also use the preceding concentration bounds to bound it by ‖J −J*‖F with
high probability. However, since we are considering an arbitrary matrix J, we cannot know a priori that ‖J − J*‖F
will be small. Intuitively, J is any matrix we wish to show satisfies φ(J) > φ(J*). To address this issue, we instead focus the analysis of the second derivative only on a ring of matrices (Figure 1)
Rε := {J ∈ R : ε ≤ ‖J − J *‖F ≤ 2ε}
The reason we take a ring is that on the one hand we would like ‖J − J*‖F to be upper bounded in order to lower
bound the sech term, but on the other hand we would like ‖J − J*‖F to be lower bounded, so that we are guaranteed that with high probability the second derivative dominates the first. Indeed, using all the previous observations and some careful union bound arguments over a suitable discrete net of points, we can establish that with high probability ∀J ∈ Rε we have φ(J) > φ(J*). It turns out that this also implies that φ(J) > φ(J*) for all J with ‖J − J*‖F > 2ε, by using a convexity argument, as sh-
own in Figure 1. Thus, we can conclude that ‖Jˆ − J*‖F will be small.
9

Estimating Ising Models in Total Variation Distance
Figure 1: The set Rε naturally partitions the whole space into three regions, I, II, and III. We know that all J in region
II satisfy φ(J) > φ(J*). If we consider an arbitrary J in region III, then by appropriate scaling, we can find J′ in region II that lies on the line connecting J and J*. The assumption about J* combined with the convexity of the pseudolikelihood φ allows us to conclude that φ(J) > φ(J*). Thus, J^ lies in region I.
4.2 Bounded Width Models
In [KM17], they obtain TV learning guarantees by using the guarantees for structure learning, which ensures that maxij |Jij − J *
ij| ≤ ε using O(log n/ε4) samples. They subsequently set the accuracy to ε/n2, so that it guarantees
closeness in TV. However, requiring accuracy for each entry of J* is a very strict condition, which results in sample complexity O(n8). In this work, we instead obtain guarantees of closeness to J* through different metrics, which, while counterintuitive at first, are more suitable for implying closeness in TV.
We first discuss how to get the improved guarantee of Theorem 6. Since bounded-width models could be in low temperature, we cannot, in general, rely on concentration bounds for the original distribution PrJ* . We follow the strategy presented in [DDDK21], which involves finding a small (O(log n)) collection of subsets Ij ⊆ [n], such that conditioned on each subset the model satisfies Dobrushin’s condition, and every node i ∈ [n] is contained in a constant fraction of the subsets. For the second de-
rivative, we notice that it can be lower bounded by a larger quantity than that in [DDDK21], without breaking it into parts, by simply conditioning on one of the subsets Ij. Indeed, using (6) and the bounded-width property, we can lower bound the conditional expectation of the second derivative by the variance of a linear function of the model as follows.
E
[︂ ∂2φ(J ) ∂A2
⃒ ⃒ ⃒ ⃒
X−Ij
]︂
≥ sech(M )2
l
∑︁
k=1
n
∑︁
i=1
E
[︂ (︁
AiX(k))︁ 2⃒
⃒ ⃒ ⃒
X (k)
−Ij
]︂
= sech(M )2
l
∑︁
k=1
n
∑︁
i=1
(︂
Var
(︁
Ai X (k)
⃒ ⃒
⃒ X(k)
−Ij
)︁
+E
[︁
Ai X (k)
⃒ ⃒
⃒ X(k)
−Ij
]︁ 2)︂
In the above, we have used the definition of the conditional variance. We can show that the conditional variance summed over all nodes is of the order Θ(‖AIj ‖2
F ), since the conditional model satisfies Dobrushin’s condition. For the variance of the conditional expectation, there is no general formula, so we would like to approximate it by its expectation E[‖E[AX|X−Ij ]‖22]. Simply using the Chernoff bound for the independent samples does not suffice, because we would like this lower bound to hold uniformly for all directions A, and the union bound will incur additional polynomial factors. We avoid this union bounding argument by a careful application of-
 matrix Bernstein’s inequality. This enables us to approximate the second term in the sum by E[‖E[AX|X−Ij ]‖22] uniformly over all matrices. These insights result in a lower bound of Ω(l · EJ* [‖AX‖22]) for the second derivative.
For the first derivative, we can upper bound it by O(l · EJ* [‖AX‖22]) uniformly for all matrices A by using the technique of splitting it into parts and a similar application of matrix Bernstein’s inequality. Since both the first and second derivatives are upper and lower bounded by the same quantity, we can proceed as previously using a Taylor expansion for φ and establish that EJ* [‖(Jˆ − J*‖22X] ≤ ε with high probability.
10

Estimating Ising Models in Total Variation Distance
To obtain the improved sample complexity of O(n3/ε2), we use the improved estimation guarantees provided by Theorem 6. Again using Pinsker’s inequality, it is enough to upper bound KL(PrJ^, PrJ* ), which using standard
manipulations for exponential families and Taylor’s theorem can be expressed as VarJξ (X⊤(Jˆ − J*)X), where Jξ
is a matrix lying in the line connecting Jˆ and J*. Using the Cauchy-Schwarz inequality, we can upper bound it as VarJξ (X⊤(Jˆ − J*)X) ≤ n · EJξ [‖(Jˆ − J*)X‖22], which connects KL with the guarantee obtained by Theorem 6.
However, the expectation is now with respect to Jξ instead of J*. This is where we make use of the regularity
assumption 9, which ensures that this expectation is robust to perturbing the measure from J* to Jξ. Choosing accuracy ε/n for Theorem 6 then concludes the claim.
5 Preliminaries
In this Section, we collect useful definitions, notations, and facts. Throughout the proofs, we will use generic constant notations such as C, C′, K, K′. These refer to absolute constants that could be different from place to place, unless it is specified that some constant depends on some other quantity. For some matrix A ∈ S0n, we denote by A(l) ∈ Rln×ln the corresponding block diagonal matrix with each block equal to A and a total of l blocks. Similarly, for some set of matrices R ⊆ Rn×n, we de-
note R(l) := {J(l) : J ∈ R}. For a symmetric matrix J ∈ S0n and a subset I ⊆ [n], we denote by JI ∈ R|I|×n the matrix consisting only of the rows of J that are indexed by elements in I. We also denote JII ∈ R|I|×|I| the submatrix with rows and columns indexed by I.
We start by reviewing properties of the pseudolikelihood function φ, as defined in (5). We define the first and second derivatives of φ at a matrix J ∈ S0n in the direction of a matrix A ∈ S0n as in [DDDK21]
dφ(J + tA) dt
⃒ ⃒ ⃒
⃒ t=0
=1
2
n
∑︁
i=1
(Aix)(tanh(Jix + hi) − xi) (7)
d2φ(J + tA) d2t
⃒ ⃒ ⃒
⃒ t=0
=1
2
n
∑︁
i=1
(AiX + hi)2 sech(JiX + hi)2 (8)
Since the second derivative is always non-negative, we conclude that φ is a convex function. We have included a known external field h ∈ Rn in the expression, since the general result does not require 0 external field.
We now introduce some important functional inequalities that will be used in this work. The definitions below are standard and can be found, e.g., in [VH14]. For a measure μ in the hypercube {−1, 1}n, we write Eμ, Varμ for the expectation and variance with respect to this measure μ. The Dirichlet form associated with the Glauber dynamics for a measure μ can be defined as the following operator on two arbitrary functions f, g : {−1, 1}n ↦→ R
E(f, g) := 1
n Eμ
[︃n ∑︁
i=1
(︂
μE[f (X)|X−i] − f (X)
)︂
·
(︂
Eμ [g(X)|X−i] − g(X)
)︂
]︃
(9)
We define the entropy of a positive function f : {−1, 1}n ↦→ R+ as
Entμ (f ) := Eμ [f (X) log f (X)] − μE[f (X)] · log μE[f (X)] (10)
We will need two notions of a modified log-Sobolev inequality. To define the first one, let G be the set of all functions {−1, 1}n ↦→ R and G′ the subset of all positive functions. Let Γ : G ↦→ G′ be a so-called difference operator. We say a measure μ supported on the hypercube satisfies a Γ-MLSI(ρ), for some ρ > 0, if and only if for all f ∈ G
Entμ
(︀ ef )︀ ≤ ρ
2 μE
[︀ Γ(f )2ef ]︀ ,
This notation is a classical notion of the Modified Log-Sobolev inequality and has been used in prior work for proving concentration inequalities [BG99, SS19].
There is a related notion of MLSI based on the Glauber dynamics. We say μ satisfies the modified log-Sobolev inequality for the Glauber dynamics with constant C > 0 and write Glauber-MLSI(C), if for every function f : {−1, 1}n ↦→ R
Entμ
(︀ ef )︀ ≤ C · n · E(ef , f )
This version of the Modified Log-Sobolev inequality arises naturally when considering the rate of contraction of the KL-divergence between the distribution of a Markov Chain at a given time and the stationary distribution of the chain [BT06].
11

Estimating Ising Models in Total Variation Distance
Also, we say a measure μ satisfies a Poincare inequality with constant ρ > 0 and write Po(ρ), if for every function f : {−1, 1}n ↦→ R
Vμar(f ) ≤ ρ · n · E(f, f ) (11)
Both the Poincaré inequality and Glauber-MLSI have been established in prior work for spectrally bounded Ising models.
Lemma 11 ([EKZ22]). If λmax(J *) − λmin(J *) < 1 − α, then PrJ* satisfies Po(1/α).
Lemma 12 ([AJK+21, CE22]). If λmax(J *) − λmin(J *) < 1 − α, then PrJ* satisfies Glauber-MLSI(1/α).
Furthermore, it is a well-known identity (for example, [BT06]) that, in general, the Glauber MLSI implies the Poincaré inequality with a slightly worse constant. For completeness, we give a proof below.
Lemma 13. If for some μ, Glauber-MLSI(C) satisfies, then it also satisfies Po(2C).
Proof. Consider F (t) = CnE(etf , tf ) − Entμ
(︀ etf )︀ . We know that F (0) = 0. Since we have F ≥ 0, if we have F ′(0) = 0, we must have F ′′(0) ≥ 0. Taking the derivative, we have
d2
dt2 nE(etf , tf ) = d2
dt2
(︃
C Eμ
[︃n ∑︁
i=1
(︂
Eμ [etf |X−i] − etf
)︂(︂
Eμ [tf |X−i] − tf
)︂
]︃)︃
=C d
dt
(︃
μE
[︃n ∑︁
i=1
(︂
Eμ [f etf |X−i] − f etf
)︂(︂
μE[tf |X−i] − tf
)︂
+
(︂
μE[etf |X−i] − etf
)︂(︂
Eμ [f |X−i] − f
)︂]︂
=C
(︃
Eμ
[︃n ∑︁
i=1
(︂
μE[f 2etf |X−i] − f 2etf
)︂(︂
μE[tf |X−i] − tf
)︂
+2
(︂
Eμ [f etf |X−i] − f etf
)︂(︂
μE[f |X−i] − f
)︂]︂
When we set t = 0, we have
d2
dt2 E(etf , tf )
⃒ ⃒ ⃒
⃒ t=0
= 2 Eμ
(︂[︂
Eμ [f |X−i] − f
)︂(︂
Eμ [f |X−i] − f
)︂]︂
= 2nE(f, f )
Also, we have
d2
dt2 Entμ
(︀ etf )︀ = d2
dt2
(︂
μE[etf · tf ] − Eμ [etf ] log Eμ [etf ]
)︂
=d
dt
(︂
Eμ [etf · f + etf · tf 2] − Eμ [f etf ] log Eμ [etf ] − Eμ [f etf ]
)︂
=
(︂
μE[2etf · f 2 + etf · tf 3] − Eμ [f 2etf ] log Eμ [etf ] − Eμ[f etf ]2
Eμ[etf ]2 − Eμ [f 2etf ]
)︂
Therefore, we have
d2
dt2 Entμ
(︀ etf )︀
⃒ ⃒ ⃒
⃒ t=0
=
(︂
2 μE[f 2] − Eμ [f 2]2 − Eμ [f ]2
)︂
= Vμar(f )
Therefore, we have F ′′(0) = 2CnE(f, f ) − Varμ(f ) ≥ 0, which means that Po(2C) holds.
The reason Γ-MLSI is useful is that concentration results for second-order polynomials are proven in [SS19] when the distribution μ satisfies this property. On the other hand, Glauber-MLSI is usually the property that follows from results about fast mixing [EKZ22, CE22, AJK+21]. It would thus be desirable to connect the two notions of MLSI in
12

Estimating Ising Models in Total Variation Distance
order to establish concentration results for the Ising model. To facilitate that connection, following [SS19] we define the operator d+ as follows
d+f (X) =
⎯ ⎸ ⎸ ⎷
n
∑︁
i=1
E
[︁
((f (X) − f (X′
i, X−i))2
+
⃒
⃒
⃒ X−i
]︁
. (12)
In the above, we use (X′
i, X−i) be a shortened random vector (X′1, X′2, . . . , X′n) that has all other coordinate j, X′
j= Xj, and X′
i is sampled independently of everything else according to the distribution conditioning on X′
−i = X−i.
Also, we have used the shorthand notation x+ := max(0, x). The quantity d+f (x) can be thought of as the l2-norm of a discrete derivative of f at x. It is therefore capturing the Lipschitzness of f in some appropriate sense and will thus be important for proving that f (X) concentrates. The connection between the two definitions is that Glauber-MLSI(ρ) implies d+-MLSI(2ρ), since by direct calculation we can get that Eμ[d+f · ef ] ≥ nE(f, ef ) [SS19]. Indeed, in the
following lemma, we use this fact and derive a generic concentration result involving d+.
Lemma 14. Suppose that μ satisfy Glauber-MLSI(ρ). Then, for any functions f, g : {−1, 1}n ↦→ R and constant b > 0 such that d+f ≤ g and d+g ≤ b, we have for any t > 0
Pr [|f (X) − E[f (X)]| > t] ≤ 8
3 exp
(︂
−1
16ρ min
(︂ t2
E[g]2 , t
b
)︂
.
Proof. By Proposition 2.18 in [SS19], if μ satisfies Glauber-MLSI(1/α), it follows that the same Ising model also satisfies d+−MLSI(2/α). Thus, we can apply Corollary 1.2 from [SS19] and the result immediately follows.
We now state a useful lemma for upper-bounding second moments of the model.
Lemma 15. Let A be any matrix, and x ∼ μ be an Ising model satisfying Po(ρ). We have the following:
E
(︁
‖Ax‖2)︁
≤ ‖ E[Ax]‖2 + 1
α ‖A‖2
F
Proof. By the Poincaré Inequality, we have that
E[(Aix)2] − (E[Aix])2 = Var(Aix) ≤ ρ Eμ
n
∑︁
j=1
(E[Aix|x−j] − Aix)2 ≤
n
∑︁
j=1
A2
ij .
Therefore, we have in total
E(‖Ax‖2) ≤
n
∑︁
i=1
(E[Aix])2 + ρ
n
∑︁
i=1
n
∑︁
j=1
A2
ij = ‖ E[Ax]‖2 + ρ‖A‖2
F.
Another useful consequence of MLSI is the simpler concentration of Lipschitz functions, which is well known. Below is one version of this implication from [CGM19].
Lemma 16 (Lemma 15 in [CGM19]). Let P be the transition matrix of a reversible Markov Chain with stationary distribution π on a finite set Ω, and f : Ω → R be some observable function. Then,
xP∼rπ(f (x) − πE f ≥ a) ≤ exp(− a2
2n · ρ · v(f ) )
where a ≥ 0 and
v(f ) := max
x∈Ω
⎧
⎨
⎩
∑︁
y∈Ω
P (x, y)(f (x) − f (y))2
⎫
⎬
⎭
,
if π satisfies Glauber-MLSI(ρ(P )).
13

Estimating Ising Models in Total Variation Distance
Finally, we also require the Hubbard-Stratonovich transform, which is a way to decompose any Ising model distribution into a mixture of product distributions. Formally, suppose X ∼ PrJ* and G ∼ N (0, In). Let us consider the random variable
Y = X + J −1/2G (13)
An easy calculation now shows that the distribution of X conditioned on Y is an Ising model with zero interaction matrix and external field J*Y (for details see e.g. Theorem 3.12 in [LMRW24]). Thus, if πy is the distribution of Y , we can decompose any Ising measure as
JP*r[x] =
∫︁
y∈Rn
π(y) Pr
0,J*y[x]dy (14)
6 Learning Ising Models that satisfy MLSI
In this Section, we study Ising models of the form (1) with h = 0 that satisfy the modified log-Sobolev Inequality. In particular, throughout the section, we will make the following assumption.
Assumption 17. The set of all candidate matrices, R ⊆ S0n, contains J*. The Ising model, as in (1) with h a known
external field, satisfies Glauber-MLSI(ρ). Also, max1≤i≤n |hi| ≤ hmax. Also, J * satisfies ‖J *‖op ≤ λ for some constant λ > 0.
Without loss of generality, we assume ρ, λ ≥ 1.
6.1 Concentration of the first derivative
The first derivative of the pseudolikelihood is given by the formula in (7). Even though this function is not a polynomial, intuitively it behaves similarly to a second-degree polynomial if we linearize the tanh function. Indeed, our goal in this section will be to prove that it concentrates similarly to a second-degree polynomial. This was shown to hold in [DDDK21] in the case where ‖J*‖∞ < 1, using the Approximate Tensorization of Entropy (ATE) and the bound on the infinity norm. Here, we will s-
how that it still holds under MLSI and bounded operator norm, using Lemma 14.
Theorem 18. Suppose X ∈ {−1, 1}n is sampled from an Ising model with interaction matrix J* satisfying Assumption 17. For a fixed vector b ∈ Rn and fixed symmetric matrix A ∈ Rn×n with zero diagonal, let us define the function
f (X) =
n
∑︁
i=1
(AiX + bi)(tanh(J *
i X + hi) − Xi) .
Then, we can take C = 1
221λ4ρ2 > 0, such that for all t > 0
Pr [|f (X)| > t] ≤ 8
3 exp
(︃
−C min
(︃
t2
‖A‖2
F + ‖E[AX + b]‖2
2
,t
‖A‖op
)︃
.
Proof. Let us define for a vector X ∈ {−1, 1}n the vector X(i) ∈ {−1, 1}n, where the i-th coordinate is flipped.
Also, define vectors X(k+), X(k−) which X(k+)
j = X (k−)
j = Xj holds for all coordinates j = 1, . . . , n, j ̸= k, while
X (k+)
k = 1, X(k−)
k = −1. Moreover, let us define the matrix W = W (X) ∈ Rn×n, where the element in the jth row,
kth column is equal to
Wjk = tanh(J *
j X(k+) + h) − tanh(J *
j X(k−) + h) − 2J *
jk,
In the sequel, we might omit the dependence of W on X for brevity. Note that W is not necessarily symmetric. We denote by Wk the kth column and W k the k-th row of W . First, Let us bound ‖W ‖op, where ‖W ‖op = √︀ ‖W W ⊤‖op Note the well-knownn fact that for all a, b ∈ R
| tanh(a) − tanh(b) − (a − b)| ≤ 1
2 (a − b)2 (15)
Then using (15), we can bound each entry Wjk of the matrix as
|Wjk| ≤ 1
2 (2J *
jk)2 = 2(J *
jk)2 ,
14

Estimating Ising Models in Total Variation Distance
Thus, the l1 norm of every column j of W (X) can be bounded as follows
‖Wj ‖1 =
n
∑︁
k=1
Wjk ≤ 2
n
∑︁
k=1
(J *
jk)2 = 2‖J *
j ‖2
2 ≤ 2λ2 .
The last inequality follows from the fact that the l2 norm of every row of J* is bounded by ‖J*‖op. Thus ‖W ‖∞ ≤ 2λ2. Similarly, we can get that ‖W ‖1 ≤ 2λ2, which implies that
‖W ‖op =
√︁
‖W W ⊤‖op ≤
√︁
‖W W ⊤‖1 ≤ √︀ ‖W ‖∞ · ‖W ‖1 ≤ 2λ2 .
We start by bounding d+f . We first notice that for any given X (again, E in the following expression is same as Equation (12): X′
i is sampled according to the conditional distribution with fixed X−i),
(d+f (X))2 =
n
∑︁
i=1
E
[︁
((f (X) − f (X′
i, X−i))2
+
⃒
⃒
⃒ X−i
]︁
=
n
∑︁
i=1
Pr[X ′
i = 1 − Xi|X−i](f (X) − f (X−i, 1 − Xi))2
+
≤
n
∑︁
i=1
(︁
f (X) − f (X(i))
)︁2
We also define the vector functions
g(x) := Ax + b , h(x) := tanh(J*x + b) − x ,
which allows us to write f (x) = g(x)⊤h(x). Here, we write h(x) as a vector, with h(x)i = tanh(J*
i x + b) − xi. Therefore, we can calculate that
h(x)j − h(x(i))j = tanh(J *
j x + b) − tanh(J *
j x(i) + b) − 2xi1(i = j).
So, we have
h(x) − h(x(i)) = tanh(J *x + b) − tanh(J *x(i) + b) − 2xiei = xiWi + 2xiJ *
i − 2xiei = xi(Wi + 2J *
i − 2ei),
where ei is the standard basis vector with all coordinates 0 except for the i-th that is 1. With that, we can further bound
the discrete derivative as follows. For all x ∈ {−1, 1}n, we have
(d+f (x))2
≤
n
∑︁
i=1
(︁
g(x)⊤h(x) − g(x(i))⊤h(x(i))
)︁2
=
n
∑︁
i=1
(︂ (︁
g(x) − g(x(i))
)︁⊤
h(x) +
(︁
g(x(i)) − g(x)
)︁ ⊤(︁
h(x) − h(x(i))
)︁
+ g(x)⊤ (︁
h(x) − h(x(i))
)︁
)︂2
=
n
∑︁
i=1
(︀ 2xiA⊤
i h(x) + 2xiA⊤
i · xi (2J *
i + Wi − 2ei) + (Ax + b)⊤ · xi (2J *
i + Wi − 2ei))︀ 2 .
By Cauchy-Schwartz inequality, (x + y + z)2 ≤ 3(x2 + y2 + z2), and we know that xi = ±1, we have the above expression is no larger than
3
n
∑︁
i=1
(︁
4
(︀ A⊤
i h(x))︀ 2 + 4 (︀ A⊤
i (2J *
i + Wi − 2ei))︀ 2 + (︀ (Ax + b)⊤ (2J *
i + Wi − 2ei))︀ 2)︁
First, we deal with the middle term (︀ A⊤
i (2J *
i + Wi − 2ei))︀ 2. Using Cauchy-Schwartz inequality for vectors (x⊤y ≤ ‖x‖ · ‖y‖), for the middle term, we have
(︀ A⊤
i (2J *
i + Wi − 2ei))︀ 2 ≤ ‖Ai‖2
2 · ‖2J *
i + Wi − 2ei‖2
2
≤‖Ai‖2
2 · (2‖J *
i ‖2 + ‖Wi‖2 + 2)2 ≤ (2 + 2λ + 2λ2)2‖Ai‖2.
15

Estimating Ising Models in Total Variation Distance
Here, the last inequality is because ‖Ji‖2 ≤ λ and ‖Wi‖2 ≤ 2λ2. Therefore, summing over i, we have
3
n
∑︁
i=1
4
(︀ A⊤
i (2J *
i + Wi − 2ei))︀ 2 ≤ 3
n
∑︁
i=1
4 · (2 + 2λ + 2λ2)2‖Ai‖2 = 48(1 + λ + λ2)2‖A‖2
F.
Now, we deal with the last term. (︀ (Ax + b)⊤ (2J*
i + Wi − 2ei))︀ 2 By Cauchy-Schwartz inequality again, for the last term, we have
(︀ (Ax + b)⊤ (2J *
i + Wi − 2ei))︀ 2
≤12 (︀ A⊤
i x + bi
)︀ 2 + 12 (︀ (Ax + b)⊤J *
i
)︀ 2 + 3 (︀ (Ax + b)⊤Wi
)︀2
Again, after summing over i, then using the fact that ‖J*‖op ≤ λ and ‖W ‖op ≤ 2λ2, we can deduce that
n
∑︁
i=1
12 (︀ A⊤
i x + bi
)︀ 2 + 12 (︀ (Ax + b)⊤J *
i
)︀ 2 + 3 (︀ (Ax + b)⊤Wi
)︀2
=12‖(Ax + b)⊤J *
i ‖2 + 3‖(Ax + b)⊤W ‖2 + 12‖Ax + b‖2
2
≤12λ2‖Ax + b‖2
2 + 12λ4‖Ax + b‖2
2 + 12‖Ax + b‖2
2
=12(1 + λ2 + λ4)‖Ax + b‖2 = 12(1 + λ2 + λ4)
n
∑︁
i=1
(A⊤
i x + bi)2
Combining them together, we have
(d+f (x))2 ≤3
n
∑︁
i=1
(︁
4
(︀ A⊤
i h(x))︀ 2 + 4 (︀ A⊤
i (2J *
i + Wi − 2ei))︀ 2 + (︀ (Ax + b)⊤ (2J *
i + Wi − 2ei))︀ 2)︁
≤48(1 + λ + λ2)2‖A‖2
F + (3 · 12)(1 + λ2 + λ4)
n
∑︁
i=1
(A⊤
i x + bi)2 + 3
n
∑︁
i=1
4
(︀ A⊤
i h(x))︀ 2
≤48(1 + λ + λ2)2‖A‖2
F + 36(1 + λ2 + λ4)
n
∑︁
i=1
(A⊤
i x + bi)2 + (︀ A⊤
i h(x))︀ 2
Let
q(x) =
⎯ ⎸
⎸
⎷48(1 + λ + λ2)2‖A‖2
F + 36(1 + λ2 + λ4)
n
∑︁
i=1
(A⊤
i x + bi)2 + (︀ A⊤
i h(x))︀ 2. (16)
We thus have d+f (x) ≤ q(x) for all x ∈ {−1, 1}n. Let us first bound E [q(X)]2 ≤ E[q(x)2]. First, notice that
E[h(X)] = E[X − tanh(J*X + h)] = 0 .
This enables us to write.
E[(A⊤
i h(X))2] = Var[A⊤
i h(X)]
We can now use the Poincaré inequality to bound the above variance. Note that by Lemma 13, if μ satisfies Glauber MLSI(ρ), then it also satisfies Po(2ρ). So we get
Var[A⊤
i h(X)] ≤ 2ρ
n
∑︁
k=1
E
[︀ Var [︀ A⊤
i h(X)|X−k
]︀
≤ 2ρ
n
∑︁
k=1
E
[︁
(︀ A⊤
i (h(Xk+) − h(Xk−)))︀ 2]︁
We have that
A⊤
i (h(Xk+) − h(Xk−)) = A⊤
i (tanh(J *Xk+ + h) − tanh(J *Xk− + h) − 2ek)
= −2Aik + A⊤
i (2J *ek) + A⊤
i Wk
= −2Aik + 2A⊤
i J*
k + A⊤
i Wk
16

Estimating Ising Models in Total Variation Distance
Applying the Cauchy-Schwarz inequality now yields
(︀ A⊤
i (h(Xk+) − h(Xk−)))︀ 2 ≤ 3 (︀ 4A2
ik + 4(A⊤
i J*
k )2 + (A⊤
i W k)2)︀
Summing over all k now gives
n
∑︁
k=1
(︀ A⊤
i (h(Xk+) − h(Xk−)))︀ 2 ≤ 3
n
∑︁
k=1
(︀ 4A2
ik + 4(A⊤
i J*
k )2 + (A⊤
i W k)2)︀
= 12‖Ai‖2
2 + 12‖J *Ai‖2
2 + 3‖W ⊤Ai‖2
2
≤ 12‖Ai‖2
2 + 12‖J *⊤‖2
op‖Ai‖2
2 + 3‖W ⊤‖2
op‖Ai‖2
2.
Using the fact that ‖J *‖op < λ and ‖W ‖op ≤ 2λ2, we have
n
∑︁
k=1
(︀ A⊤
i (h(Xk+) − h(Xk−)))︀ 2 ≤ 12(1 + λ2 + λ4)‖Ai‖2
2.
Therefore, we have
E[(A⊤
i h(X))2] ≤ 24ρ(1 + λ2 + λ4)‖Ai‖2 .
For the second term, the analysis follows along similar lines if we apply a suitable centering to make the variance appear. In particular, we can write
E[(A⊤
i X + bi)2] − E [︀ A⊤
i X + bi
]︀ 2 = Var[A⊤
i X]
≤ 2ρ
n
∑︁
k=1
E
[︀ Var[A⊤
i X|X−i]]︀
≤ 2ρ
n
∑︁
k=1
A2
ik
= 2ρ‖Ai‖2
2
Summing over all i and using (16) gives
E[q(X)]2 ≤ 48(1 + λ + λ2)2‖A‖2
F + 36(1 + λ2 + λ4)
n
∑︁
i=1
(A⊤
i x + bi)2 + (︀ A⊤
i h(x))︀ 2
≤ 48(1 + λ + λ2)2‖A‖2
F
+ 36(1 + λ2 + λ4)
n
∑︁
i=1
24ρ(1 + λ2 + λ4)‖Ai‖2 + 2ρ(‖Ai‖2 + E[A⊤
i X + b]2)
≤ 211(1 + λ4)(1 + ρ)
(︁
‖A‖2
F + ‖E[Ax + b]‖2
2
)︁
. (17)
We will now focus on bounding d+q(x). We have
q(x) =
⎯ ⎸
⎸
⎷48(1 + λ + λ2)2‖A‖2
F + 36(1 + λ2 + λ4)
n
∑︁
i=1
(A⊤
i x + bi)2 + (︀ A⊤
i h(x))︀ 2
≤√48(1 + λ + λ2)‖A‖F + 6
√︀
1 + λ2 + λ4
⎯ ⎸ ⎸ ⎷
n
∑︁
i=1
(A⊤
i x + bi)2 + (︀ A⊤
i h(x))︀ 2.
Let r(x) =
√︁
∑︀n
i=1(A⊤
i x + bi)2 + (︀ A⊤
i h(x))︀ 2. Then we define
K(i)(x) = A⊤
i h(x); L(i)(x) = A⊤
i x + b.
17

Estimating Ising Models in Total Variation Distance
We first notice that d+q(x) ≤ 6√1 + λ2 + λ4 · d+r(x). This is because for all positive a, b, c, we have |√a + b −
√a + c| ≤ |√b − √c|. We define the vector function s = s(x) ∈ R2n, with s(x)i = K(i)(x) if i ≤ n and s(x)i = L(i−n)(x) if i > n. We then have that
r(x) = ‖s(x)‖2 = sup
v ∈S 2n−1
⟨s(x), v⟩ .
Let us denote v ̃ = (v ̃1, v ̃2) := argmaxv∈S2n−1 ⟨s(x), v⟩ the unit vector (in R2n, where v ̃1, v ̃2 ∈ Rn) that is in the direction of s(x). Then, we can write
(d+‖r(x)‖)2 ≤
n
∑︁
k=1
(︁
‖s(x)‖ − ‖s(x(k))‖
)︁2
+
=
n
∑︁
k=1
(︂
⟨s(x), v ̃⟩ − sup
v∈S 2n−1
⟨s(x(k)), v⟩
)︂2
+
≤
n
∑︁
k=1
(︁
⟨s(x), v ̃⟩ − ⟨s(x(k)), v ̃⟩
)︁2
+
≤ ‖S · v ̃‖2 ,
where S ∈ Rn×2n is the matrix with k-th row equal to s(x) − s(x(k)). We can write in block form S = (S1|S2),
where S1, S2 ∈ Rn×n. Let us bound ‖S1‖op, ‖S2‖op. We have that
(S1)ki = s(i)
1 (x) − s(i)
1 (x(k))
= A⊤
i (h(x) − h(x(k)))
= xkA⊤
i (2J *
k + Wk − 2ek)
= xk(2(J *A)ki + (W A)ki − 2Aki)
For a vector x ∈ Rn, we denote diag(x) the diagonal matrix with diagonal entries equal to x. Then, we can write in matrix form
‖S1‖op = ‖diag(x)(2J *A + W A − 2A)‖op
≤ ‖diag(x)‖op · ‖2J *A + W A − 2A‖op
≤ 2‖A‖op + ‖J *‖op · ‖A‖op + ‖W ‖op · ‖A‖op
≤ (2 + λ + 2λ2)‖A‖op .
For S2 the situation is similar and we can write
(S2)ki = A⊤
i (x − x(k))
= 2xkAki .
Thus
‖S2‖op = 2 ‖diag(x)A‖op ≤ 2‖A‖op
We can now conclude
‖S · v ̃‖2 = ‖S1v ̃1 + S2v ̃2‖2
≤ 2‖S1v ̃1‖2 + 2‖S2v ̃2‖2
≤ 2‖S1‖2
op‖‖v ̃1‖2 + 2‖S2‖2
op‖v ̃2‖2
≤ 2 max(‖S1‖2
op, ‖S1‖2
op) ≤ (2 + λ + 2λ2)2‖A‖2
op ,
where we used the fact that ‖v ̃1‖2 + ‖v ̃2‖2 ≤ 1.
To summarize, we have shown that d+f (x) ≤ q(x) for all x. Furthermore, by (17) we proved that
E[q]2 ≤ 211(1 + λ4)(1 + ρ)
(︁
‖A‖2
F + ‖E[Ax + b]‖2
2
)︁
‖A‖2
F , d+q(x) ≤ (2 + λ + 2λ2)2‖A‖op
We also know that
E
[︂ ∂φ(J *) ∂A
]︂
=0
18

Estimating Ising Models in Total Variation Distance
Thus, applying Lemma 14, take C = 1
16ρ
1
215(1+λ4)(1+ρ) ≥ 1
221λ4ρ2 we obtain that for every t > 0
Pr
[︂⃒ ⃒ ⃒ ⃒
∂φ(J *) ∂A
⃒ ⃒ ⃒ ⃒
>t
]︂
≤8
3 exp
(︂
−C min
(︂ t2
‖A‖2
F
,t
‖A‖op
)︂
.
We are now ready to establish the concentration of the first derivative for Ising models satisfying MLSI. This basically follows as a direct Corollary of Theorem 18
Lemma 19. Suppose X ∈ {−1, 1}n is sampled from an Ising model satisfying Assumption 17. Then, if φ is the pseudolikelihood function evaluated at X and A ∈ S0n, then there is a constant C′ = 1
221λ4ρ2 such that for any t > 0:
⃒ ⃒ ⃒ ⃒
∂φ(J *) ∂A
⃒ ⃒ ⃒ ⃒
≤ t‖A‖F
with probability at least
1− 8
3 exp
(︂
−C′ min
(︂
t2, t‖A‖F
‖A‖op
)︂
Proof. We apply Theorem 18 and substitute t‖A‖F for t, completing the proof.
6.2 Anti-Concentration of the Second Derivative
We want to show that the second derivative is lower bounded with high probability. First, we present the lemma, as the second form of Corollary 1.2 in [SS19] (the inequality right after Corollary 1.2 in [SS19], which does not have a specific number)
Lemma 20 (Corollary 1.2 in [SS19]). Assume that μ satisfies a Γ-MLSI(ρ) for some difference operator Γ and ρ > 0. Let f, g be two measurable functions such that Γ(f ) ≤ g and Γ(g) ≤ b. Then there is a universal constant c such that for all t ≥ 0 we have
Pr[f − Eμ [f ] ≥ t] ≤ exp
(︂
−c min
(︂ t2
ρ(Eμ g)2 + 2b2ρ2 , √2tρb
)︂
. (18)
From (8), it is clear that the second derivative is almost equal to a second-degree polynomial, up to a factor that involves the sech function. We thus start by stating a concentration bound for second-degree polynomials that essentially follows from [SS19].
Lemma 21. Suppose X ∈ {−1, 1}n is sampled from an Ising model with interaction matrix J* satisfying GlauberMLSI(ρ) and external field h ∈ Rn. Also, let S ∈ S0n. Then, there exists an absolute constant c > 0, such that for any t > 0,
Pr[x⊤Sx − E[x⊤Sx] ≥ t] ≤ exp
(︂
−c
ρ2 min
(︂ t2
‖S‖2
F + ‖ E[Sx]‖2 , t
‖S‖op
)︂
.
For the other side, it is analogous.
Proof. As remarked in the proof of Lemma 14, combining Theorem 12 from [AJK+21] and Proposition 2.18 from [SS19] yields that our model satisfies Glauber-MLSI(ρ), d+-MLSI(2ρ) and Po(2ρ). Thus, we can use the second form of Corollary 1.2 in [SS19]:
Let f (x) = x⊤Sx. By the proof of Lemma 2.17 in [SS19], we know that we can take Γ = d+, g(x) = 4‖Sx‖, and b = 8‖S‖op. It now remains to upper bound E[‖SX‖])2. To do that, we can again use the Poincaré inequality
19

Estimating Ising Models in Total Variation Distance
(Lemma 11).
E[‖SX‖]2 ≤ E [︀ ‖SX‖2]︀ )
=
n
∑︁
i=1
E[(S⊤
i X)2]
=
n
∑︁
i=1
(︀ E[S⊤
i X]2 + Var[S⊤
i X])︀
= ‖ E[SX]‖2
2+
n
∑︁
i=1
Var[S⊤
i X]
≤ ‖ E[SX]‖2
2 + 2ρ
n
∑︁
i=1
‖Si‖2
2
= ‖ E[SX]‖2
2 + 2ρ‖S‖2
F
By substituting this upper bound into (18), and notice that ‖S‖op ≤ ‖S‖F and ρ ≥ 1 by assumption, we obtain the desired inequality.
Having obtained this concentration result, showing that the second derivative is large with high probability boils down to the following two tasks.
(a) First, we need to establish that the second derivative is lower bounded by a degree 2 polynomial. To do this, we need to show that the terms sech(JiX)2 are lower bounded by a constant with high probability.
(b) Second, we need to show that the degree 2 polynomial that lower bounds the second derivative is large enough on expectation.
We next show how to establish each of these two properties. We start by addressing (b), namely establishing a lower bound for the expectation of the second moment part of the second derivative, which will prove useful later. The proof involves using the Hubbard-Stratonovich transform to decompose the Ising model into a mixture of product measures. For each product measure, lower-bounding the second moment is a much simpler problem. However, some product measures in the decomposition will have larg-
e external fields, giving weak lower bounds. We use properties of this decomposition to establish that with at least a constant probability, the external field in the decomposition will be bounded.
Lemma 22. Let x ∼ μ be an Ising model satisfying Assumption 17. Let A be any matrix. Then, we have the following anti-concentration bound:
E(x⊤A⊤Ax) − ‖ E[Ax]‖2 ≥ 1
2
(︀ 1 − tanh2(4λ√ρ))︀ ‖A‖2
F.
Proof. We use the decomposition described in (14) and (13). In particular, let π be the distribution of vector y and Pr0,J*x(x) ∼ exp(⟨J*y, x⟩) the corresponding product measure. We can have that
E(x⊤A⊤Ax) − ‖ E[Ax]‖2 =
n
∑︁
i=1
Var(Aix) ≥
n
∑︁
i=1
y∼Eπ Var
x∼ν(y)
(Aix) =
n
∑︁
i=1
n
∑︁
j=1
y∼Eπ A2
ij(sech2((J *y)j))
We know that (J*y) = (J*x) + ((J*)1/2g) is a multivariate Gaussian distribution with means J*x and covariance matrix J*. So for each (J*y), we have mean J*
i x and variance is J *
ii. Therefore, our plan is to prove that J*
i x and
N (0, J *
ii) are small with high probability.
Consider P to be the Glauber Dynamics of the Ising model. Consider f (x) = ∑︀ n
j=1 J *
ijxj. So, because of the
distribution, we know that J*
i x has zero mean. Also, we can calculate that
v(f ) ≤ 1
n
n
∑︁
i=1
4(J *
ij )2 ≤ 4λ2
n.
20

Estimating Ising Models in Total Variation Distance
We know that μ satisfies Glauber-MLSI(ρ). Therefore, by Lemma 16, we can bound the probability that yj is large:
P((J*y)j > a) ≤ P(f (x) > a/2) + P(N (0, Jii) > a/2)
≤ exp(− a2
8ρλ2 ) + exp(− a
8 ) ≤ 2 exp(− a2
8ρλ2 ).
Therefore, we take a = 4√ρλ, we can get that the probability that (J*y)j ≤ 4√ρλ is at least 1 − 2/e2 > 1/2. Therefore, we have
n
∑︁
i=1
Var(Aix) =
n
∑︁
i=1
n
∑︁
j=1
y∼Eπ a2
ij(1 − tanh2((J *y)j)) ≥ 1
2
(︀ 1 − tanh2(4λ√ρ))︀ ‖A‖2
F.
We are now ready to prove our main Lemma about lower-bounding the second derivative of the pseudolikelihood. The proof essentially involves addressing (a), i.e., showing that sech(JiX)2 is lower bounded by a constant with high probability. Since we only know a bound on ‖J‖op, in general, this quantity could be very small. We use
concentration results for second-degree polynomials to relate sech(JiX) with sech(J*
i X), which does not depend on the matrix direction J. The result is stated for one sample for simplicity, but we’ll see how to apply it for multiple samples in the sequel.
Lemma 23. Suppose X ∈ {−1, 1}n is a sample drawn from an Ising model satisfying Assumption 17. Let A ∈ S0n be a symmetric matrix with √︀ ‖A‖2
F + ‖ E[Ax]‖2 ≤ M for some constant M > 0. Let us also denote J′ = J* + A.
Then, for any J that lies in the line segment connecting J* and J′, we have
∂2φ(J )
∂A2 ≥ K2 · (‖A‖2
F + ‖ E[Ax]‖2) · min
i∈[n]
sech2(|J *
i X(k)| + hi + K1M )
with probability at least
1 − exp(− c
ρ2 · min(t2
1, t1)) − exp(− c
ρ2 · min(t2
2, t2)),
where c is an absolute constant as in Lemma 21, and the expression K1, K2 are as follows:
K1 = √︀ t1 + 2ρ
K2 = 1
2
(︀ 1 − tanh2(4λ√ρ))︀ − t2
Proof. We have that
∂2φ(J )
∂A2 =
n
∑︁
i=1
(AiX)2 sech2(JiX)
≥
n
∑︁
i=1
(AiX)2 sech2(|J *
i X| + |(Ji − J *
i )X|)
=
n
∑︁
i=1
(AiX)2 sech2(|J *
i X| + |AiX|)
The last inequality follows since |(Ji − J*
i )X| ≤ |((J′)i − Ji)X| = |AiX|, since J lies in the segment connecting
J′, J*. Now, let us use Lemma 21 for the quadratic form x⊤A⊤Ax. When substituting t ← t(‖A‖2
F + ‖ E[AX]‖2), this gives
X⊤A⊤AX − E[X⊤A⊤AX] =
n
∑︁
i=1
(AiX)2 − E[X⊤A⊤AX] ≤ t(‖A‖2
F + ‖ E[AX]‖2). (19)
This bound of X means in particular that
n
∑︁
i=1
(AiX)2 ≤ E[X⊤A⊤AX] + t(‖A‖2
F + ‖ E[AX]‖2).
21

Estimating Ising Models in Total Variation Distance
By Lemma 21, this happens with probability at least
1 − exp(−c/ρ2 min( t2(‖A‖2
F + ‖ E[AX]‖2)2 ‖A⊤A‖2
F + ‖ E[A⊤AX]‖2 , t(‖A‖2
F + ‖ E[AX]‖2) ‖A⊤A‖op
)).
Using the well known properties ‖A⊤A‖op = ‖A‖o2p, ‖ E[A⊤AX]‖2 = ‖A⊤ E[AX]‖2 ≤ ‖A‖op‖ E[AX]‖2 and ‖A⊤A‖F ≤ ‖A‖F ‖A‖op, we can lower bound the probability by
1 − exp(−c/ρ2 min( t2(‖A‖2
F + ‖ E[AX]‖2)2 ‖A⊤A‖2
F + ‖ E[A⊤AX]‖2 , t(‖A‖2
F + ‖ E[AX]‖2) ‖A⊤A‖op
))
≥1 − exp(−c/ρ2 min( t2(‖A‖2
F + ‖ E[AX]‖2)2 ‖A‖o2p(‖A‖2
F + ‖ E[AX]‖2) , t(‖A‖2
F + ‖ E[AX]‖2) ‖A‖o2p
))
=1 − exp(−c/ρ2 ‖A‖2
F + ‖ E[AX]‖2 ‖A‖o2p
min(t, t2)).
To deal with upper bound of E[X⊤A⊤AX], we use lemma 15 (since μ satisfy Glauber-MLSI(ρ), hence also Po(2ρ)).
n
∑︁
i=1
(AiX)2 ≤ E[X⊤A⊤AX] + t(‖A‖2
F + ‖ E[AX]‖2)
≤(1 + t)(‖ E[AX]‖2) + (t + 2ρ) ‖A‖2
F ≤ (t + 2ρ)(‖ E[AX]‖2 + ‖A‖2
F)
with probability at least 1 − exp(− c(‖A‖2
F +‖ E[AX]‖2) ρ2 ‖A‖2op
· min(t2, t)). Denote K1 = √t + 2ρ. It follows that with the
same probability we have |AiX| ≤ K1M for all i. Thus, we have that
∂2φ(J )
∂A2 ≥
n
∑︁
i=1
(AiX)2 sech2(|J *
i X| + |AiX|)
≥
n
∑︁
i=1
(AiX)2 sech2(|J *
i X| + K1M )
≥ min
i∈[n]
sech2(|J *
i X| + K1M )
n
∑︁
i=1
(Ai X )2
We now need to lower bound E[X⊤A⊤AX] in order to get a high probability lower bound for ∑︀ n
i=1(AiX)2. Using Lemma 21 we have
X⊤A⊤AX ≥ E[X⊤A⊤AX] − t(‖A‖2
F + ‖ E[AX]‖2)
≥ (1
2 (1 − tanh2(4λ2√ρ)) − t)(‖A‖2
F + ‖ E[AX]‖2)
with probability at least 1 − exp(− c(‖A‖2
F +‖ E[AX]‖2) ρ2 ‖A‖2op
· min(t2, t)). Denote K2 = 1
2
(︀ 1 − tanh2(︀ 4λ√ρ)︀ − t2. Using
the union bounds, and noticing that ‖A‖F > ‖A‖op, we can finish the proof.
We now use Lemma 23 to lower-bound the second derivative when we have multiple independent samples. The main issue is that we need to choose the parameters t1, t2 to ensure K2 is bounded away from 0, while at the same time obtaining a probability of failure that decays exponentially with the number of samples l. As we see, the particular block structure of the matrix in that case is crucial for the argument to go through.
Theorem 24. Suppose X(1), . . . , X(l) ∈ {−1, 1}n are independent samples from an Ising model satisfying Assumption 17. Let A ∈ Rn×n be a symmetric matrix with √︀ ‖A‖2
F + ‖ E[Ax]‖2 ≤ M ≤ 1 for some constant 0 < M < 1.
Let us also denote J1 = J* + A. Then, for any J that lies in the line segment connecting J* and J1, we have
∂2φ(J (l))
∂(A(l))2 ≥ r(λ, ρ) · l · (‖A‖2
F + ‖ E[Ax]‖2) · min
k∈[l],i∈[n]
sech2(|J *
i X (k)
i | + K(λ, ρ)M + hi)
22

Estimating Ising Models in Total Variation Distance
with probability at least 1 − exp(−C(λ, ρ) · l), where r(λ, ρ), C(λ, ρ) are constants that depend only on λ, ρ. More specifically,
r(λ, ρ) = C(λ, ρ)2/4; C(λ, ρ) = c
48ρ2 · sech(4λ√ρ)4; K(λ, ρ) = 10ρ5/4√λ
c
where c is the constant defined in Lemma 21.
Proof. Using the block structure of the matrix, we can write
∂2φ(J (l))
∂(A(l))2 =
l
∑︁
k=1
n
∑︁
i=1
(AiX(k))2 sech2(JiX(k) + hi)
⏟⏞
Gk
The random variables G1, . . . , Gk are independent and identically distributed. We use Lemma 23 with the substitution
t2 = sech(4λ√ρ)2
4 , t1 =
log( 2ρ2
ct2
2
)ρ2 c.
We can clearly see that t2 < 1/4 and t1 > 1 (we, without loss of generality, take the absolute constant c in Lemma 21 smaller than 1). Therefore, we have
1 − exp(−c/ρ2 · min(t2
1, t1)) − exp(−c/ρ2 min(t2
2, t2))
=1 − exp(−c/ρ2 · t1) − exp(−c/ρ2 · t2
2)
=1 − exp(−c/ρ2 ·
log( 2ρ2
ct2
2
)ρ2
c ) − exp(−c/ρ2 · t2
2)
=1 − c/ρ2 · t2
2/2 − exp(−c/ρ2 · t2
2)
We know that for small x < 1/4, 1 − e−x − x/2 ≥ x/3. So, for all k, with probability at least
p := c/ρ2 · t2
2/3 = c/ρ2 · sech(4λ√ρ)4
16 · 1
3 ≥ c/ρ2 · sech(4λ√ρ)4/48,
the following holds
Gk ≥ K2 · (‖A‖2
F + ‖ E[Ax]‖2) · min
i∈[n]
sech2 (︁
|J *
i X(k)| + K1M + hi
)︁
,
where K1, K2 are defined in Lemma 23. We have
K2 = 1
2 sech2(4λ√ρ) − t2 ≥ sech2(4λ√ρ)/4,
and
K1 = √︀ t1 + 2ρ ≤ 2√t1 = 2√ρc ·
√︃
log( 2ρ2
ct22
) ≤ 10ρ5/4√λ
c.
We will now use the independence of the different samples. Let’s call the above event Ek, then 1{Ek} is a Bernoulli random variable with probability at least p. By the standard Chernoff bound for Bernoulli random variables, we have that for all δ ∈ (0, 1)
Pr
[︃l ∑︁
k=1
1{Ek} ≤ (1 − δ)lp
]︃
≤ exp(−δ2lp/2),
23

Estimating Ising Models in Total Variation Distance
Choosing δ = 1/2 yields that with probability at least 1 − exp(−lp/8) at least an lp/4 fraction of the events Ek will be satisfied. We conclude that with the same probability
∂2φ(J (l))
∂(A(l))2 ≥
∑︁
k:1{Ek }=1
Gk
≥p2/4 · l · (‖A‖2
F + ‖ E[Ax]‖2) · min
k∈[l],i∈[n]
sech2 (︁
|J *
i X (k)
i | + K1M + hi
)︁
Plugging in p, K1, M yields the result.
6.3 Learning in Frobenius norm
After establishing the concentration of the first derivative and anti-concentration of the second derivative, we now combine them to show that we can learn in the Frobenius norm.
The precise statement is given in the following lemma. Its purpose is to show that if for some matrix J1 the norm
‖J* − J1‖F is large, then with high probability J1 will have a lower pseudo-likelihood value than J*, which means that it will not be selected as the maximizer of the pseudolikelihood. The proof essentially combines the concentration and anticoncentration properties of the two derivatives for a single matrix J1.
Lemma 25. Let X be a sample drawn from an Ising model with interaction matrix J* satisfying Assumption 17 and let J1 ∈ R be a different matrix, with A = J1 − J*. Assume √︀ ‖A‖2
F + ‖ E[Ax]‖2 ≤ M < 1, for some M > 0.
Then, there exist constants C, C′, r, K that depend only on ρ, λ, such that for any t > 0, with probability at least
1 − exp(−C · l) − 8/3 exp (︀ −C′ · l · min(t2, t) · M 2)︀ ,
holds
φ(J1) ≥ φ(J*)+r · l · M 2 · min
k∈[l],i∈[n]
sech2(|J *
i X (k)
i | + KM + hi) − t · l · M 2.
Here, C, r, K are the constants C(ρ, λ), r(ρ, λ), K(ρ, λ) defined in Theorem 24, and C′ = 1
221ρ2λ4 is the constant defined in Theorem 18.
Proof of Lemma 25. We begin as in Lemma 1 in [DDDK21] by defining the function J : [0, 1] ↦→ Rn×n as J(t) = (1 − t)J* + tJ1. Let A = J1 − J*. By definition, then we have
dφ(J (t))
dt = ∂φ(J)
∂A
⃒ ⃒ ⃒
⃒ J=J(t)
, d2φ(J(t))
dt2 = ∂2φ(J )
∂A2
⃒ ⃒ ⃒
⃒ J=J(t)
.
Now define
α = min
t∈[0,1]
d2 φ(J (t))
dt2 , γ = dφ(J(t))
dt
⃒ ⃒ ⃒
⃒ t=0
By Taylor’s theorem, we have that
φ(J(1)) ≥ φ(J(0)) + γ + α
2 By the definition of J(t), this is equivalent to
φ(J1) ≥ φ(J*) + γ + α
2.
Now, using Theorem 24 immediately gives
α ≥ r · l · ‖A‖2
F · min
k∈[l],i∈[n]
sech2(|J *
i X (k)
i | + KM)
with probability at least 1 − exp(−C · l), where r, C, K are constants that depend only on ρ, λ, as in Theorem 24. At the same time, we can apply Lemma 18, where A is now A(l) and so instead of t ← t(‖A‖2
F + ‖ E[Ax]‖2) we have
t ← tlM 2. After replacing t with t‖A‖F and notice that ‖A‖op ≤ ‖A‖F ≤ 1 we obtain
Pr[|γ| > tlM 2] ≤ 8
3 exp (︀ −C′ · l · min(t, t2) · M 2)︀
24

Estimating Ising Models in Total Variation Distance
Where C′ is the constant in Lemma 19. Thus, with probability at least 1 − exp(−C · l) − 8/3 exp (︀ −C′ · l · min(t, t2) · M 2)︀ we have that
φ(J1) ≥ φ(J*)+r · l · M 2 · min
k∈[l],i∈[n]
sech2(|J *
i X (k)
i|
+KM ) − t · l · M 2.
And the proof is complete.
We now have to establish a similar property as in Lemma 25 but across all directions J1 with high probability. If we had this property, we could conclude that whatever matrix is returned from maximizing the pseudolikelihood function, it needs to be close to the true matrix J* in Frobenius norm. To do this, we utilize the fact that φ is Lipschitz with respect to the spectral norm.
Lemma 26 (Lemma 10, [DDDK21]). For any symmetric matrices J1, J2 ∈ Rn×n, and for l samples,
|φ(J1) − φ(J2)| ≤ n · l · ‖J1 − J2‖op
We next define the important notion of an ε-net.
Definition 27. Given a metric space (U , d) and ε > 0, we say that a subset N ⊆ U is an ε-net for U if for every u ∈ U there exists a v ∈ N such that d(u, v) ≤ ε. The cardinality of the smallest possible ε-net is denoted by N (U , d, ε). We also refer to N (U , d, ε) as the ε-covering number of the set J .
The strategy now will be to show that all matrices that are far from J* in Frobenius norm will have a higher pseudolikelihood value with high probability. Arguing simultaneously over all such matrices is a daunting task, since this is an infinite set. The strategy that was employed in [DDDK21] was the following: first, we construct an ε-net to cover the entire space of matrices. By choosing ε sufficiently small and using the Lipschitzness property, we can show that any point in the space has a pse-
udolikelihood value close to some point in the net. Consequently, if we can guarantee that with high probability all points in the net have pseudolikelihood value smaller than that of J*, then the same should be true for all points in the set as well.
However, this approach cannot work in our case, because by Lemma 25 we can only argue about the value of φ for points that are close to J* in Frobenius norm. Thus, our goal will be to show that there is a shell of matrices of the form {J : ε ≤ ‖J* − J‖F ≤ M }, such that all points in this shell have a higher pseudolikelihood value than J*. It will then follow from the convexity of φ that the same is true for points outside of this shell as well. It would then follow that the true minimizer Jˆ shou-
ld satisfy ‖Jˆ − J*‖F ≤ ε, which is our final estimation bound. The challenge is to show that for ε taking a relatively small value, this property will hold, as this will result in a small estimation error. To argue about that, we are aided by the fact that we can choose l large enough to make ε smaller than M , so this shell is not empty. The details are given below.
Theorem 28. Let X1, . . . , Xl be independent samples drawn from an Ising model with interaction matrix J* satisfying Assumption 17. Let Jˆ ∈ Rn×n be the estimate of J* that is obtained by maximizing the pseudo-likelihood function (5), i.e.
Jˆ(l) := argmax
J (l)∈R(l)
φ(J; X) .
Then, for any ε ∈ (0, 1), if
l = O ̃
(︂ n2 log(1/(δε)) ε2
)︂
then with probability at least 1 − δ
√︁
‖J − J *‖2
F + ‖ E[(J − J *)X]‖2 ≤ ε ,
where O ̃ hides sub-polynomial factors of n, and other terms about λ, ρ and hmax.
Proof. Let ε ∈ (0, 1/2) and set M = 2ε. Let us define the shell
Rε := {J ∈ R : ε ≤
√︁
‖J − J *‖2
F + ‖ E[(J − J *)X]‖2 ≤ 2ε}
Our goal will be to choose l such that with high probability Jˆ ∈/ Rε. First of all, since Rε ⊆ R, we have that for any θ>0
N (Rε, ‖ · ‖op, θ) ≤ N (R′
ε, ‖ · ‖op, θ)
25

Estimating Ising Models in Total Variation Distance
Here, we have defined the set R′ε := {J ∈ R : ‖J − J*‖F ≤ 2ε}.
Thus, it suffices to bound N (R, ‖ · ‖op, θ). To that end, we can view R as a subset of n2-dimensional Euclidean space,
where the basis vectors are matrices {Eij}n
i,j=1, where Eij has the i, j entry 1 and the rest 0. Thus, we seek to cover the ball of matrices with spectral radius at most 1 with balls of radius θ. Notice that the ball with spectral radius θ is contained inside the ball with Frobenius radius θ. Since the ball of spectral radius 1 is a centrally symmetric convex body, we can apply Corollary 4.1.15 from [AAGM21], which is based on a standard volume argument, to obtain
N (Rε, ‖ · ‖op, θ) ≤ N (R′
ε, ‖ · ‖op, θ) ≤ N (R′
ε, ‖ · ‖F , θ) ≤
(︂
1 + 2ε
θ
)︂ n2
(20)
Let U ⊆ R be an θ/n-net of Rε of cardinality N (Rε, ‖ · ‖op, θ/n), where θ will be chosen in the sequel. Then, applying Lemma 25 and a union bound gives that for all t > 0, with probability at least
1 − N (R′
ε, ‖ · ‖op, θ/n) (︀ exp(−C · l) + 8/3 exp (︀ −C′ · l · min(t2, t) · ε2))︀ .
We have that the following event occurs.
E := {φ(J) ≥ φ(J*) + l · (r · min
k∈[l],i∈[n]
sech2(|J *
i X (k)
i | + 2Kε + hi) − 4t) · M 2 , ∀J ∈ U } .
Here, C, C′, r, K are the constants in Lemma 25. Now let us assume E happens. We now upper bound |J*
i X(k)|. Indeed, using Lemma 16 we have that for each k
Pr[|J *
i X(k)| ≥ a] ≤ exp
(︂
−1
8ρλ2 a2
)︂
By union bound over all i ∈ [n], k ∈ [l], we have
Pr[ max
i∈[n],k∈[l]
|J *
i X(k)| ≥ a] ≤ l · n · exp
(︂
−1
8ρλ2 a2
)︂
Thus, by choosing a = C′′λ√︀ ρ log(n/δ) for some suitable constant C′′, we get that with probability at least 1 − δ/2 (we remind the readers that hmax is the maximum value of |hi|)
min
k∈[l],i∈[n]
sech2(|J *
i X (k)
i | + 2Kε) ≥ sech2 (︁
C′′λ√︀ ρ log n + 2Kε + hmax
)︁
:= ξ(n)−1 .
We notice that ξ(n) grows sub-polynomially, i.e. ξ(n) = o(nr) for any r > 0. Thus, we conclude that with probability at least
1 − N (R′
ε, ‖ · ‖op, θ/n) (︀ exp(−C · l) + 8/3 exp (︀ −C′ · l · min(t2, t) · ε2))︀ − δ
2,
we have that
φ(J) ≥ φ(J*) + r · l · ε2 · ξ(n)−1 − 4t · l · ε2 , ∀J ∈ U .
Now, choosing t ≤ rξ(n)−1/8. Notice that r is really small compare to C and C′, we have exp(−C · l) ≤ exp (︀ −C′ · l · min(t2, t) · ε2))︀ = exp (︀ −C′ · l · t2 · ε2))︀ and we have that with probability at least
1 − 11
3 N (R′
ε, ‖ · ‖op, θ/n) exp (︀ −C′ · r2 · ξ(n)−2 · l · ε2/64)︀ − δ
2,
the following event holds
E′ :=
{︂
φ(J) ≥ φ(J*) + 1
2 r · l · ε2 · ξ(n)−1 , ∀J ∈ U
}︂
.
Let us now see how we should choose l so that
N (R′
ε, ‖ · ‖op, θ/n) exp (︀ −C′ · r2 · ξ(n)−2 · l · ε2/64)︀ < δ
2.
Using the covering number bound (20), it suffices to pick
l ≥ 64ξ(n) (︀ n2 log(1 + 2εn/θ) + log(10/δ))︀
C′r2ε2 (21)
26

Estimating Ising Models in Total Variation Distance
Finally, let us see how to choose θ. We would like to show that, if event E′ holds, then for an arbitrary element J ∈ Rε we have φ(J) > φ(J*). By definition, there exists J ∈ U with ‖J − J‖op ≤ θ/(2n). This, combinined with Lemma 26, implies that
φ(J) ≥ φ(J) − θ
2 ≥ φ(J*) + 1
2 r · l · ε2 · ξ(n)−1 − θ
2 ·l
The last quantity is > φ(J*) if we pick θ = 1
2 r · ε2 · ξ(n)−1. Thus, (21) becomes
l ≥ ξ(n) (︀ n2 log(1 + 2n · ξ(n)/(rε)) + log(10/δ))︀
C ′ r2 ε2
Thus, with this choice of l, we know that with probability at least 1 − δ/2
φ(J) > φ(J*) , ∀J ∈ Rε .
Call the above event E′′. We argue that if E′′ holds, then for all J with ‖J − J*‖F > 2ε we have φ(J) > φ(J*).
Indeed, for any such J, the line segment connecting J to J* intersects Rε in at least one point, call it J′. This is
because the inequalities defining Rε scale by a constant as we move from J to J* (see also Figure 1). Thus, for some
t ∈ (0, 1) we can write J′ = (1 − t)J* + tJ. Now, since φ is a convex function, it holds
φ(J′) ≤ (1 − t)φ(J*) + tφ(J) < (1 − t)φ(J′) + tφ(J)
The last inequality holds by definition of event E′′. By rearranging we get φ(J) > φ(J*). Thus, Jˆ can only lie inside the Frobenius norm sphere of radius ε around J*, which concludes the proof.
Remark 29. If the reader is curious about the precise form of l, we can express l as (C0 is a universal constant)
l ≥ exp
(︁
C0
(︁
λ
√︀ log(n/δ) · ρ + ρ5/4λε
)︁
· e2hmax · hmax · n2 log(1/(δε)
ε2 .
7 Learning Ising Models with Bounded Width
In this section, our goal will be to establish sample complexity guarantees for learning Ising Models of bounded width in TV distance. We say an Ising Model has width bounded by M > 0, if and only if ‖J*‖∞ ≤ M . This enables us to handle the second derivative more easily since the sech terms are always lower bounded by a constant that depends on M.
Assumption 30. In this section, we assume h = 0 and R = {J* ∈ S0n : ‖J*‖∞ ≤ M } for some M > 0.
For this Section, R ⊆ S0n will denote the set of matrices with ‖A‖∞ ≤ M . In [DDDK21], it was established that we can learn the interaction matrix in the Frobenius norm. Here, we will need a more refined analysis, which will result in stronger guarantees that will enable us to bound the total variation distance between the estimated and the true model.
For the reader’s convenience, we remind some important notation that will be used in this section. For a symmetric matrix J ∈ Rn×n and a subset I ⊆ [n], we denote by JI ∈ R|I|×n the matrix consisting only of the rows of J that are indexed by elements in I. We also denote JII ∈ R|I|×|I| the submatrix with rows and columns indexed by I. For non-square matrices, the Frobenius norm extends in the usual fashion
‖JI ‖2
F=
∑︁
i∈I
n
∑︁
j=1
J2
ij .
We start by briefly highlighting some of the technical tools used in [DDDK21], as they will prove useful in our case as well. An important observation is that we can select O(log n) subsets of nodes, such that each submatrix of J* satisfies Dobrushin’s condition. Furthermore, we require that each node belongs to a constant fraction of these subsets. Formally, the following result was proven in [DDDK21].
Lemma 31 (Lemma 2 from [DDDK21]). Let J* ∈ Rn×n be a symmetric matrix with ‖J*‖∞ ≤ M and let η ∈ (0, M ).
Then, there exist subsets I1, . . . , Ir with r ≤ CM 2 log n/η2, such that the following properties hold.
1. For all i ∈ [n]
|j ∈ [r] : i ∈ Ij| =
⌈︁ ηr 8M
⌉︁
.
27

Estimating Ising Models in Total Variation Distance
2. For all j ∈ [r], ‖J*
Ij Ij ‖∞ ≤ η.
This Lemma will allow us to split the first derivative sum into terms, where each term is a sum over the nodes of each subset. Then, for each subset Ij, by property 2, conditioned on the values X−Ij , the model is in high temperature, so we can apply concentration bounds that are valid in that case. For simplicity, for j ∈ [r] we use the notations
φj(J ) =
l
∑︁
k=1
∑︁
i∈Ij
(︁
log cosh(JiX(k))X(k)
i JiX(k) + log 2
)︁
∂φj(J *)
∂A :=
l
∑︁
k=1
∑︁
i∈Ij
(AiX(k))(tanh(J *
i X(k)) − X(k)
i)
∂2φj(J )
∂A2 :=
l
∑︁
k=1
∑︁
i∈Ij
sech2 (Ji X (k) )(Ai X (k) )2
The above are random variables, but we omit the dependence on X for simplicity. We will argue about each component φj separately, conditioned on the variables X−Ij . By property 1, we have that
φ(J) = 8M
ηr
r
∑︁
j=1
φj(J) (22)
Our goal will be to show that this bound of the first derivative is of the same order as l·E[‖AX‖2] with high probability, which is a quantity independent of the conditioning. To do that, we will bound the deviation between the empirical and true mean of the variable ‖ E[AX(k)|X(k)
−I ]‖2, uniformly over all matrices A with small Frobenius norm. The challenge
here is that X−Ij comes from a model at low temperature, so we do not have information about its concentration
properties. If we naively use the Chernoff bound, then the large magnitude of ‖ E[AX(k)|X(k)
−I ]‖2 will incur a large concentration radius, which, combined with a union bound over a high-dimensional subset of matrices, will result in high sample complexity. Instead, we notice that because of the special structure of the random variable, it is enough to upper bound the deviation of the random matrix E[X|X(k)
−Ij ] E[X|X(k)
−Ij ]⊤ from its mean, which can be done using matrix concentration results. This avoids the costly union bound over the set of matrices and results in a polynomial reduction in the number of samples required. Let us introduce the set of matrices of small Frobenius norm
Aε := {J ∈ Rn×n : ‖A‖F ≤ ε},
The details are given in the following Lemma.
Lemma 32. Suppose X(1), . . . , X(l) ∈ {−1, 1}n are independent samples from an Ising model with interaction matrix J* satisfying ‖J*‖∞ ≤ M and zero external field. Then, for any t > 0 we have that with probability at least
1 − 2n exp
(︂
− lt2/2
4n2 + 2nt/3
)︂
,
the following holds
⃒ ⃒ ⃒ ⃒ ⃒
1 l
l
∑︁
k=1
‖ E[AX(k)|X(k)
−I ]‖2 − E [︀ ‖ E[AX|X−I ]‖2]︀
⃒ ⃒ ⃒ ⃒ ⃒
≤ t‖A‖2
F , ∀A
Proof. We first notice that we can write
‖ E[AX|X−I ]‖2 = E[X|X−I ]⊤A⊤A E[J X|X−I ] = Tr (︀ E[X|X−I ]⊤A⊤A E[J X|X−I ])︀
= Tr(A E[X|X−I ] E[X|X−I ]⊤A⊤) .
Let S = E[X|X−I ] E[X|X−I ]⊤ be this random matrix and denote by S(k) := E[X|X(k)
−I ] E[X|X(k)
−I ]⊤ and S = E
[︀ E[X|X−I ] E[X|X−I ]⊤]︀ the l independent samples from the distribution of S. Then, we can write the difference between the empirical and the true mean as follows
⃒ ⃒ ⃒ ⃒ ⃒
1 l
l
∑︁
k=1
‖ E[AX(k)|X(k)
−I ]‖2 − E [︀ ‖ E[AX|X−I ]‖2]︀
⃒ ⃒ ⃒ ⃒ ⃒
=
⃒ ⃒ ⃒ ⃒ ⃒
Tr
(︃
A
(︃
1 l
l
∑︁
k=1
S(k) − E[S]
)︃
A⊤
)︃⃒ ⃒ ⃒ ⃒ ⃒
28

Estimating Ising Models in Total Variation Distance
Assume momentarily that we somehow know that
⃦ ⃦ ⃦ ⃦ ⃦
1 l
l
∑︁
k=1
S(k) − E[S]
⃦ ⃦ ⃦ ⃦ ⃦2
≤ t (23)
Then, by the previous calculation and the definition of A ∈ Aε, we would have
⃒ ⃒ ⃒ ⃒ ⃒
Tr
(︃
A
(︃
1 l
l
∑︁
k=1
S(k) − E[S]
)︃
A⊤
)︃⃒ ⃒ ⃒ ⃒ ⃒
≤
n
∑︁
i=1
⃒ ⃒ ⃒ ⃒ ⃒
A⊤
i
(︃
1 l
l
∑︁
k=1
M (k) − E[M ]
)︃
Ai
⃒ ⃒ ⃒ ⃒ ⃒
≤t·
n
∑︁
i=1
‖Ai‖2
2 = t · ‖Jˆ − J *‖2
F.
In the above, we have used Ai to denote the i-th row of matrix A, together with the fact that A is symmetric. Thus, to prove the claim, it suffices to establish (23) with high probability. We turn our attention to that task now.
First of all, we notice that S(k) are sampled independently from the same distribution of matrices. Since X is a binary vector, each entry of the random vector E[AX|X−Ij ] lies within [−1, 1]. Thus, so each S(k) is a symmetric rank-1 matrix with all its entries bounded by 1 in absolute value. Therefore we know that ‖S(k) − E[S]‖2 ≤ 2n. And finally, ‖ E[(S(k) − E[S])2]‖2 ≤ 4n2. Therefore, if we use the matrix Bernstein concentration inequality (see Theorem 1.6.2
in [T+15]), we can have
Pr
⎡
⎣
⃦ ⃦ ⃦ ⃦ ⃦
1 l
l
∑︁
k=1
S(k) − E[S]
⃦ ⃦ ⃦ ⃦
⃦ op
>t
⎤
⎦ = 2n exp
(︂ −lt2/2 4n2 + 2nt/3
)︂
.
This concludes the proof.
The next step will be to use this concentration property to obtain a uniform upper bound for the first derivative of the pseudo-likelihood. We start by proving such a bound for a single direction. Let us define the following event, which depends on the values of X(k)
−Ij for k = 1, . . . , l.
Ej,u :=
{︃⃒ ⃒ ⃒ ⃒ ⃒
1 l
l
∑︁
k=1
‖ E[(Jˆ − J *)X(k)|X(k)
−Ij ]‖2 − E
[︁
‖ E[(Jˆ − J *)X|X−Ij ]‖2]︁
⃒ ⃒ ⃒ ⃒ ⃒
≤ u · ‖A‖2
F , ∀A
}︃
Lemma 33. Suppose X(1), . . . , X(l) ∈ {−1, 1}n are independent samples from an Ising model with interaction matrix J* satisfying Assumption 30. Let A ∈ Rn×n be a symmetric matrix with ‖A‖∞ ≤ M . Suppose we condition
on the values of X(k)
−Ij for all k and that these values are such that Ej,u holds. Then we have that with probability at least
1 − exp (︀ −c min(t, t2) (︀ l · (︀ E[‖AX‖2
2])︀ ,
we have that ⃒
⃒ ⃒ ⃒
∂φj(J *) ∂A
⃒ ⃒ ⃒ ⃒
≤ Ct · l · (︀ E[‖AX‖2
2])︀ .
Proof. We know that if we choose η = 1/3 the distribution XIj |X−Ij satisfy ‖AIj ‖op ≤ 1, satisfy Glauber-MLSI(6) and Po(6). First, we use Theorem 18. Consider a large Ising model, with diagonal matrix blocks AIj , and also external
fields A−Ij,−Ij X(k)
−Ij . This large Ising model is a tensor product of i.i.d. Ising models of XIj |X(k)
−Ij . Therefore, we have, with at least
1− 8
3 exp(−C min(t, t2)(l · ‖AIj ‖2
F+
l
∑︁
i=1
‖ E[AIj X(k)|X(k)
ij ]‖2))
probability, we have
⃒ ⃒ ⃒ ⃒
∂φj(J *) ∂A
⃒ ⃒ ⃒ ⃒
≤t·
(︃
l · ‖AIj ‖2
F+
l
∑︁
i=1
‖ E[AIj X(k)|X(k)
ij ]‖2
)︃
.
If Ej,u holds, we have, with at least probability
1 − exp (︀ −c min(t, t2) (︀ l · (︀ ‖AIj ‖2
F + E[‖ E[AX|X−Ij ]‖]2 − u · ‖A‖2
F
)︀,
29

Estimating Ising Models in Total Variation Distance
we have that ⃒
⃒ ⃒ ⃒
∂φj(J *) ∂A
⃒ ⃒ ⃒ ⃒
≤ t · l · (︀ ‖AIj ‖2
F + E[‖ E[AX|X−Ij ]‖]2 + u · ‖A‖2
F
)︀
We now use the following Lemma, which connects the variance of linear functions of Ising models in high temperature with the Frobenius norm and has been repeatedly used in our analysis so far.
Thus, we can write
E[‖AX ‖2
2] =
n
∑︁
i=1
E[(A⊤
i X)2]
=
n
∑︁
i=1
E
[︀ E[(A⊤
i X)2|X−Ij ]]︀
=
n
∑︁
i=1
(︁
E
[︀ Var[(A⊤
i X)2|X−Ij ]]︀ + E
[︁
(︀ E[A⊤
i X|X−Ij ])︀ 2]︁)︁
=
n
∑︁
i=1
(︀ E [︀ Var[(A⊤
i X)2|X−Ij ]]︀)︀ + E
[︁⃦
⃦ E[AX|X−Ij ]⃦
⃦
2 2
]︁
Now, we can apply Lemma 22 and Poincaré Inequality to the conditional Ising model conditioned on the values of X−Ij , there are absolute constants cM , CM such that
cM ‖AIj ‖2
F≤
n
∑︁
i=1
(︀ E [︀ Var[(A⊤
i X)2|X−Ij ]]︀)︀ ≤ CM ‖AIj ‖2
F.
Thus, the preceding bound implies
E[‖AX ‖2
2] = Θ (︀ ‖AIj ‖2
F + ‖ E[AX|X−Ij ]‖2)︀
Thus, by adjusting the constants, we know that for any A ∈ Rn×n, with probability at least
1 − exp (︀ −c min(t, t2) (︀ l · (︀ E[‖AX‖2
2] − u · ‖A‖2
F
)︀
we have that ⃒
⃒ ⃒ ⃒
∂φj(J *) ∂A
⃒ ⃒ ⃒ ⃒
≤ t · l · (︀ E[‖AX‖2
2] + u · ‖A‖2
F
)︀.
Notice also that by Lemma 22, we can absorb the term ‖A‖2
F inside E[‖AX‖2] in the upper bound, with the possibility of incurring an extra constant factor. Also, by choosing u to be a small enough constant, again by Lemma 22 we can write
E[‖AX ‖2
2] − u‖A‖2
F≥1
2 E[‖AX‖2
2]
Thus, under even Ej,u for this choice of constant u, we have that with probability at least
1− 8
3 exp (︀ −c min(t, t2) (︀ l · (︀ E[‖AX‖2
2])︀
we have that ⃒
⃒ ⃒ ⃒
∂φj(J *) ∂A
⃒ ⃒ ⃒ ⃒
≤ Ct · l · (︀ E[‖AX‖2
2])︀ .
We would like to prove that the bound of Lemma 33 holds uniformly for all matrices A in a given set. To do that, we first establish a Lipschitzness property of the first derivative of the pseudo-likelihood, similar to the one that was established for the pseudolikelihood itself in [DDDK21].
Lemma 34. Let A, B be two symmetric matrices with ‖A‖∞, ‖B‖∞ ≤ M . Then
⃒ ⃒ ⃒ ⃒
∂φj(J *)
∂A − ∂φj(J *)
∂B
⃒ ⃒ ⃒ ⃒
≤ 2 · l · n · ‖A − B‖2
30

Estimating Ising Models in Total Variation Distance
Proof. We have that
⃒ ⃒ ⃒ ⃒
∂φj(J *)
∂A − ∂φj(J *)
∂B
⃒ ⃒ ⃒ ⃒
=
⃒ ⃒ ⃒ ⃒ ⃒ ⃒
l
∑︁
k=1
∑︁
i∈Ij
(︁
(Ai − Bi) X(k))︁
(tanh(J *
i X(k)) − X(k)
i)
⃒ ⃒ ⃒ ⃒ ⃒ ⃒
≤2
l
∑︁
k=1
n
∑︁
i=1
⃒ ⃒
⃒ (Ai − Bi)X(k)
⃒ ⃒ ⃒
≤ 2√n
l
∑︁
k=1
⎯ ⎸ ⎸ ⎷
n
∑︁
i=1
⃒
⃒ (Ai − Bi)X(k)⃒
⃒
2
≤ 2 · l · n · ‖A − B‖2 .
In the last step, we used the fact that ‖X(k)‖2 ≤ √n for all k and the definition of the operator norm.
Our method of bounding the first derivative uniformly is similar to the one employed in [DDDK21]. In particular, we construct a net over the set of matrices and then take a union bound over all the elements of the set to bound the first derivative for all these points. If the radius is chosen small enough, then the upper bound of the first derivative extends to all elements in our set.
Since the probability of failure is governed by E[‖AX‖2], we need to choose a set of matrices for which this quantity is large, if we wish to prove high probability bounds. Thus, we define the following set of matrices.
Rs := {A : E[‖AX‖2] ≥ s}
Lemma 35. Suppose X(1), . . . , X(l) ∈ {−1, 1}n are independent samples from an Ising model with interaction matrix J* satisfying Assumption 30. Let A ∈ Rn×n be a symmetric matrix with ‖A‖∞ ≤ M . Consider the net Us := N (Rs, ‖ · ‖2, θ). Then,
⃒ ⃒ ⃒ ⃒
∂φ(J *) ∂A
⃒ ⃒ ⃒ ⃒
≤ 8CM
η · t · l · E[‖AX‖2
2] + 2 · l · n · θ , ∀A ∈ Rs
with probability at least
1− 8
3 (log n) · |Us| · exp (︀ −c min(t, t2) · l · s)︀ − 2n(log n) · exp
(︂
− l · u2/2
4n2 + 2u · n/3
)︂
Proof. By taking a union bound over the elements of Us, by definition of the set Rs we know that
⃒ ⃒ ⃒ ⃒
∂φj(J *) ∂A
⃒ ⃒ ⃒ ⃒
≤ C · t · l · (︀ E[‖AX‖2
2])︀ , ∀A ∈ Us
with probability at least
1 − |Us| · exp (︀ −c min(t, t2) · l · s)︀ .
Using the Lipschitzness of the first derivative, this implies that with the same probability, we have
⃒ ⃒ ⃒ ⃒
∂φj(J *) ∂A
⃒ ⃒ ⃒ ⃒
≤ C · t · l · E[‖AX‖2
2] + 2 · l · n · θ , ∀A ∈ Rs
This bound holds conditional on X(1), . . . , X(l), assuming they have values that satisfy the event Ej,u. But we have already bounded the probability that this event occurs in Lemma 32. Thus, for the choice of constant u that we have made, we have established that with probability at least
1 − |Us| · exp (︀ −c min(t, t2) · l · s)︀ − 2n exp
(︂
− l · u2/2
4n2 + 2u · n/3
)︂
,
it holds ⃒
⃒ ⃒ ⃒
∂φj(J *) ∂A
⃒ ⃒ ⃒ ⃒
≤ C · t · l · E[‖AX‖2
2] + 2 · l · n · θ , ∀A ∈ Rs.
31

Estimating Ising Models in Total Variation Distance
We will see in the sequel what the optimal way is to adjust these parameters. Finally, by taking another union bound with respect to all different subsets Ij and using (22), we have that
⃒ ⃒ ⃒ ⃒
∂φ(J *) ∂A
⃒ ⃒ ⃒ ⃒
≤ 8CM
η · t · l · E[‖AX‖2
2] + 2 · l · n · θ , ∀A ∈ Rs,
with probability at least
1 − (log n) · |Us| · exp (︀ −c min(t, t2) · l · s)︀ − 2n(log n) · exp
(︂
− l · u2/2
4n2 + 2u · n/3
)︂
.
This is the uniform bound on the first derivative that we were aiming for. We will see how to pick the value of s later.
We now focus on the second derivative. We start with a Lipschitzness property for the second moment in the second derivative.
Lemma 36. Let A, B be two symmetric matrices with ‖A‖∞, ‖B‖∞ ≤ M . Then
⃒ ⃒ ⃒ ⃒ ⃒
l
∑︁
k=1
(︁
‖AX (k) ‖2
2 − ‖BX(k)‖2
2
)︁
⃒ ⃒ ⃒ ⃒ ⃒
≤ M · l · n · ‖A − B‖2
Proof. We have that
⃒ ⃒ ⃒ ⃒ ⃒
l
∑︁
k=1
(︁
‖AX (k) ‖2
2 − ‖BX(k)‖2
2
)︁
⃒ ⃒ ⃒ ⃒ ⃒
=
⃒ ⃒ ⃒ ⃒ ⃒
l
∑︁
k=1
n
∑︁
i=1
(︁
(AiX(k))2 − (BiX(k))2)︁
⃒ ⃒ ⃒ ⃒ ⃒
≤
l
∑︁
k=1
n
∑︁
i=1
|(Ai − Bi)X(k)| · |(Ai + Bi)X(k)|
≤
l
∑︁
k=1
⎯ ⎸ ⎸ ⎷
n
∑︁
i=1
|(Ai − Bi)X(k)|2 ·
⎯ ⎸ ⎸ ⎷
n
∑︁
i=1
|(Ai + Bi)X(k)|2
≤ M · l · n · ‖A − B‖2
We are now ready to state the uniform guarantee for the second derivative. The proof will again be based on Lemma 32 to avoid unnecessary union bounds.
Lemma 37. Suppose X(1), . . . , X(l) ∈ {−1, 1}n are independent samples from an Ising model with interaction matrix J* satisfying Assumption 30. Let A ∈ Rn×n be a symmetric matrix with ‖A‖∞ ≤ M . Consider the net Us := N (Rs, ‖ · ‖2, θ). Then, with probability at least
1 − |Us| exp (−c · l · s) − 2n · exp
(︂
− l · u2/2
4n2 + 2u · n/3
)︂
we have
∂2φ(J )
∂A2 ≥ C · l · E[‖AX‖2] − M · l · n · θ , ∀A ∈ Rs
Proof. We use the same argument as the first derivative. If we take η = 1/3, take any j, the distribution of each XIj |X−Ij is Glauber MLSI(6) and Po(6). When we do the tensor product of all the samples, the same Glauber MLSI and Poincaré inequality holds. By Lemma 23, we have that there exists absolute constants c, C such that
∂2φ(J )
∂A2 ≥ C
(︃
l‖AIj ‖2
F+
l
∑︁
k=1
‖ E[AX(k)|X(k)
−Ij ]‖2
)︃
with probability at least
1 − exp
(︃
−c ·
(︃
l · ‖AIj ‖2
F+
l
∑︁
k=1
‖ E[AX(k)|X(k)
−Ij ]‖2
)︃
32

Estimating Ising Models in Total Variation Distance
The previous arguments have already established that
‖AIj ‖2
F + ‖ E[AX|X−Ij ]‖2
2 = Θ(E[‖AX‖2]).
Using the concentration of Lemma 32 as before, we can establish that if event Ej,u holds for a small enough constant
u, then conditional on X(k)
−Ij for k = 1, . . . , l we have, there exists absolute constants c, C such that
∂2φ(J )
∂A2 ≥ C · l · E[‖AX‖2]
with probability at least
1 − exp (︀ −c · l · E[‖AX‖2])︀
We can now implement the exact same union bound argument that we had for the first derivative. The only thing we need to check is the Lipschitzness of the second derivative, which will determine the size of our net.
Now, again by considering the net Us := N (Rs, ‖ · ‖2, θ), taking a union bound over its elements and using the lipschitzness of the second derivative, in exactly the same fashion as with the first derivative, we get that conditioned on Ej,u
∂2φ(J )
∂A2 ≥ C · l · E[‖AX‖2] − M · l · n · θ , ∀A ∈ Rs (24)
with probability at least
1 − |Us| exp (−c · l · s)
Removing the conditioning and using Lemma 32, we have that (24) holds with probability at least
1 − |Us| exp (−c · l · s) − 2n · exp
(︂
− l · u2/2
4n2 + 2u · n/3
)︂
We are now ready to use the above lemmas to argue about the value of the pseudolikelihood for matrices that are “far” from J *.
Theorem 38. Let X1, . . . , Xl be independent samples drawn from an Ising model with interaction matrix J* satisfying Assumption 30. Let Jˆ ∈ Rn×n be the estimate of J* that is obtained by maximizing the pseudo-likelihood function (5), i.e.
Jˆ(l) := argmax
J (l)∈R(l)
φ(J; X) ,
where R = {J ∈ S0n : ‖J‖∞ ≤ M . Then, for any ε ∈ (0, 1) and δ > 0, if
l = Ω ̃
(︂ n2 (log(1/(δε)) + log n) ε
)︂
then with probability at least 1 − δ
JE*[‖(Jˆ − J *)X‖2
2] ≤ ε ,
where O ̃ hides exp(M ) factors.
Proof. For any matrix J ∈ JM , an application of Taylor’s Theorem yields
φ(J) = φ(J*) + ∂φ(J*)
∂A |A=J−J* + 1
2
∂ 2 φ(Jξ )
∂A2 |A=J−J*
where Jξ belongs in the line segment connecting J, J*. Thus, using the preceding arguments, we know that with probability at least
1 − (log n) · |Us| · exp (︀ −c min(t, t2) · l · s)︀ − 2n(log n) · exp
(︂
− l · u2/2
4n2 + 2u · n/3
)︂
,
we have
φ(J) ≥ φ(J*) + C · l · E[‖(J − J*)X‖2
2] − C′ · t · l · E[‖(J − J *)X‖2
2] − C′′ · l · n · θ , ∀J : J − J * ∈ Rs. (25)
33

Estimating Ising Models in Total Variation Distance
We now show how to choose the various parameters. First, we choose t to be a small enough constant so that C′t < C/4. We also choose θ = O(s/n) so that C′′ · l · n · θ ≤ Cs/4. These choices mean that (25) can be written as
φ(J) ≥ φ(J*) + C
4 · l · s , ∀J : J − J* ∈ Rs (26)
This means that all matrices J such that J − J* ∈ Us have a higher negative pseudolikelihood value than J*, which means that they will not be selected by the optimization procedure. Thus, this allows us to conclude that Jˆ− J* ∈/ Rs, which implies that E[‖(Jˆ − J*)X‖22] ≤ s. We now turn to analyze the probability that this event occurs. Let us set s = ε. We would like to have
(log n) · |Us| · exp (︀ −c min(t, t2) · l · ε)︀ ≤ δ
2 (27)
for the specified error probability δ > 0. As we argued in the previous section, using Corollary 4.1.15 from [AAGM21] gives
|Us| ≤
(︂
M+2
θ
)︂ n2
=O
(︃ (︂
M + 2n
ε
)︂ n2 )︃
Thus, if we choose
l ≥ C n2 log(n/ε) + log log n + log(1/δ)
ε (28)
for some constant C > 0 that depends on M , we can satisfy (27). We would also like to have
2n(log n) · exp
(︂
− l · u2/2
4n2 + 2u · n/3
)︂
≤δ
2 (29)
In the above, u is a sufficiently small constant. To satisfy (29), it suffices to choose
l ≥ C (︀ n2 log n + n2 log(1/δ))︀ (30)
samples. The conditions (28) and (30) give us the final sample complexity.
7.1 Proof of Proof of Corollary 10
Finally, we give a formal version of Corrolary 10 and then its proof.
Corollary 39. Suppose we are in the setting of Theorem 38. Additionally, assume there exist constants γ, C > 0, such that PrJ* satisfies (γ/n, C)-regularity regularity. Then, for any ε > 0, if l = Ω ̃ (n3/ε2), with probability 1 − o(1) over the choice of samples TV(PrJ^, PrJ* ) ≤ ε.
Proof. Using the same representation for KL between Ising models as Lemma 20 of [DDDK21], we get that for some matrix Jξ = ξJ* + (1 − ξ)Jˆ
KL (︀ PJ^
⃦
⃦ PJ*
)︀ =1
2 Var
X ∼Jξ
[︁
X⊤ (︁
J * − Jˆ
)︁
X
]︁
,
where in the above, the notation X is sampled from an Ising model with interaction matrix Jξ. The Cauchy-Schwarz inequality now implies that
Var
X ∼Jξ
[︁
X⊤ (︁
J * − Jˆ
)︁
X
]︁
≤ JEξ
[(X⊤ (︁
J * − Jˆ
)︁
X )2 ]
≤ n · JEξ
[‖(Jˆ − J *)X‖2
2]
= n · EJξ [‖(Jξ − J *)X‖22]
(1 − ξ)2
Without loss of generality, assume that ε2 < γ. By Theorem 38, we know that if l = Ω ̃ (n3/ε2), we have with probability 1 − o(1)
JE*[‖(Jˆ − J *)X‖2
2] ≤ ε2
n Then, by scaling, this implies
JE*[‖(Jξ − J *)X‖2
2] ≤ ε2
n · (1 − ξ)2 ≤ ε2
n
34

Estimating Ising Models in Total Variation Distance
Thus, since we know J* satisfies (γ/√n, C)-regularity, we have that
JEξ
[‖(Jξ − J *)X‖2
2] ≤ C ε2 · (1 − ξ)2
n
which implies
KL (︀ PJ^
⃦
⃦ PJ*
)︀ ≤ C · ε2
Using Pinsker’s inequality as in Lemma 41 concludes the proof.
8 Applications of Learning with MLSI
In this Section, we present the proofs for the applications of Theorem 28. The step that remains is to bound the total variation distance between two Ising models by the Frobenius norm of the difference of their interaction matrices. We give two such bounds. The first is cruder and makes no additional assumptions about the matrices.
Lemma 40. Suppose μ, μ* are the distributions corresponding to two Ising models with interaction matrices J, J* ∈ S0n and zero external fields. Then, we have the following property:
‖μ − μ*‖T V ≤ n‖J − J *‖F .
We give our version of the proof in Section 9. Note that an alternative proof can be given using the technique in [KM17] Lemma 7.3.
The second Lemma additionally assumes that both matrices, as long as any matrix in the line that contains them, satisfy MLSI. In that case, we can obtain much more precise guarantees without losing polynomial factors.
Lemma 41. Suppose J1, J2 ∈ S0n are such that for every t ∈ [0, 1], PrJt satisfies MLSI(ρ), where Jt = tJ1+(1−t)J2. Then,
TV(PJ1 , PJ2 ) ≤ ρ · ‖J1 − J2‖F
Proof. First, using Pinsker’s inequality, we get
T V (PJ1 , PJ2 ) ≤
√︂
KL (PJ1 ‖PJ2 )
2.
Thus, it suffices to bound KL (PJ1 ‖PJ2 ). For this, we rely on a standard calculation for exponential families that connects the KL divergence to the variance of the sufficient statistic. In particular, following the derivation in Lemma 20 of [DDDK21], we get that for some matrix Jξ contained in the line segment connecting J1 and J2
KL (PJ1 ‖PJ2 ) = 1
2 Var
X ∼Jξ
[︀ X⊤ (J1 − J2) X]︀ ,
where in the above, the notation X is sampled from an Ising model with interaction matrix Jξ. Since Jξ satisfy MLSI(ρ), it also satisfies Po(2ρ)), which yields
Var
X ∼S
[︀ X⊤ (J1 − J2) X]︀ ≤ 2ρ XE∼S
[︀ ‖(J1 − J2)X‖2
2
]︀
= 2ρ
n
∑︁
i=1
Var
X ∼S
[︁
(J1 − J2)⊤
iX
]︁
≤ 4ρ2
n
∑︁
i=1
‖(J1 − J2)i‖2
2
= 4ρ2 ‖J1 − J2‖2
F
This concludes the proof.
We are now ready to present the proof of the applications.
35

Estimating Ising Models in Total Variation Distance
8.1 Application: SK/diluted SK model
First, using Lemma 40 and Theorem 28, we can derive the following corollary:
Corollary 42. Let X1, . . . , Xl be independent samples drawn from an Ising model with interaction matrix J* satisfying Assumption 17. Let Jˆ ∈ Rn×n be the estimate of J* that is obtained by maximizing the pseudo-likelihood function (5) for a set of matrices R ⊆ S0n, which is convex and admits efficient projections in Frobenius norm. Then, for any
ε ∈ (0, 1), if l = O ̃
(︁ n4 log(1/(δε)) ε2
)︁
then with probability at least 1 − δ, T V (PJ^, PJ* ) ≤ ε, where O ̃ hides sub
polynomial factors of n, and other terms involving λ, ρ and hmax. Moreover, we can implement MPLE in polynomial time.
Proof. The proof follows immediately by setting ε = ε′/n in the guarantees of Theorem 28. The optimal value of the pseudolikelihood can be found in polynomial time using projected gradient descent.
Corollary 42 says that if we can find a set R that is convex and admits efficient projections, we can solve the pseudolikelihood estimation problem in polynomial time. We instantiate this fact in the cases of SK/diluted SK model now.
Corollary 43. Suppose we are given l independent samples X(1), . . . , X(l) ∼ PrJ* , where J* is sampled according
to the SK-model with β < C, where C ≈ 0.295. That is, every Jij = Jji is chosen i.i.d. from N (0, β2/n). Then, there is a polynomial time algorithm (MPLE) that produces an estimate Jˆ ∈ S0n , such that with probability 1 − o(1)
over the choice of samples and the choice of matrix J* we have TV(PrJ^, PrJ* ) ≤ ε, as long as l = Ω ̃ (n4/ε2).
Proof. By [AKV24], when β < C, with 1 − o(1) probability over the choice of random matrix J* it satisfies ATE, which by [CLV21] means it also satisfies MLSI. Therefore, we can run MPLE on the set of matrices R = {J ∈ S0n :
‖J‖op ≤ 4}. We know that J* ∈ R with probability 1 − o(1). Also, it is clear we can efficiently project to R by eigenvalue clipping. Thus, applying Corollary 42 finishes the proof.
Similar guarantees can be obtained for the diluted SK model.
Corollary 44. Suppose we are given l independent samples X(1), . . . , X(l) ∼ PrJ* , where J* is sampled according to the diluted SK-model with β < C, where C ≈ 0.295. That is, consider a random d-regular graph G. If i and j are not connected, Jij = 0. If i and j are connected, then Jij = Jji is chosen from { √dβ−1 , − √dβ−1 } with the same probability, independently for all such pairs. Then, there is a polynomial-time algorithm (MPLE) that produces an estimate Jˆ ∈ S0n , such that with probabilit-
y 1 − o(1) over the choice of samples and the choice of matrix J* we have
TV(PrJ^, PrJ* ) ≤ ε, as long as l = Ω ̃ (n4/ε2).
Proof. The proof is similar to Corollary 43. By [AKV24], when β < C, with 1 − o(1) probability it satisfies ATE, thus also MLSI with a constant that depends on the distance of β from C. Thus, we can use Corollary 42 to obtain the result.
8.2 Application: Spectrally Bounded Models
For spectrally bounded models, the set R can be naturally restricted to only include matrices that satisfy MLSI. We thus get optimal guarantees for TV learning.
Corollary 45. Let X1, . . . , Xl be independent samples drawn from an Ising model with interaction matrix J* ∈ S0n
that belongs in the set R = {J ∈ S0n : λmax(J ) − λmin(J ) ≤ 1 − α}, for some α ∈ (0, 1). Let Jˆ ∈ Rn×n be the estimate of J* that is obtained by maximizing the pseudo-likelihood function (5) over R(l), given l independent samples from J*. Then, for any ε < 1, with probability at least 1 − δ
T V (PJ^, PJ* ) ≤ ε ,
whenever
l ≥ O ̃
(︂ n2 + log(1/δ) ε2
)︂
,
where O ̃ hides sub-polynomial factors of n and constant that depends on α, λ. Moreover, the algorithm can be implemented in polynomial time.
36

Estimating Ising Models in Total Variation Distance
Proof. First, let us argue that R is a convex set. We know that for two symmetric matrices, using the Rayleigh quotient, we can derive that for any t ∈ (0, 1)
λmax(tA1 + (1 − t)A2) ≤ tλmax(A1) + (1 − t)λmax(A2)
λmin(tA1 + (1 − t)A2) ≥ tλmin(A1) + (1 − t)λmin(A2)
so if A1, A2 ∈ R, tA1 + (1 − t)A2 ∈ R.
By Lemma 12, every J ∈ R satisfies MLSI(1/α). Also, clearly ‖J‖op < 1 for every J ∈ R, since the zero diagonal implies J will have both positive and negative eigenvalues. Thus, combining Theorem 28 and Lemma 41 gives the desired guarantee in TV.
Now, let us argue about the computational efficiency of the method. Since the pseudolikelihood function is convex, to find Jˆ we can use the projected gradient descent algorithm as in Theorem 3.2 of [B+15]. Thus, we only need to argue that at every step we can efficiently project on the set R.
We have shown that R is a convex set, and the distance from it, which is measured in Frobenius norm, is a convex function. Thus, one way of computing the projection would be using the result in [LSV18], where they optimize the distance in polynomial time using only a membership oracle for R, which is, of course, easy to implement in our case. Alternatively, one could write the projection as a semi-definite program (SDP) [BV04] and then solve it efficiently using [JKL+20]. For convenience, we spell-
 out the details of the SDP approach below.
The SDP in standard form minimizes ⟨C, X⟩ subject to ⟨Ai, X⟩ ≤ bi and X ⪰ 0. We can use a diagonal block matrix X so that X ⪰ 0 is equivalent to X1, X2, . . . , Xk ⪰ 0, and furthermore, using the linear constraints ⟨Ai, X⟩ ≤ bi (both ⟨A, X⟩ ≤ b and ⟨−A, X⟩ ≤ b to build an equation) we can encode linear relationships between matrices X1, X2, . . . , Xk. Therefore, we can actually write several, rather than one, positive semi-definite constraints of matrices, where each element has a linear relation-
 to the other.
Therefore, we can first encode two matrices J (the matrix that needs to be projected) and J′ (the projected matrix), and three values λ1, λ2, t in X1’s off-diagonal and put free variables on the diagonal of X1 so that X1 ⪰ 0 if we can
make the diagonal large enough. In the linear constraints, we encode the information that J and J′ are both zerodiagonal symmetric matrices. Then, we encode λ1I − J′ ⪰ 0 and J′ − λ2I ⪰ 0 and λ1 − λ2 ≤ 1 − α to make the
constraint λmax(J′) − λmin(J′) ≤ 1 − α. Finally, we flatten the elements in J − J′ into a column vector v, and we
add the constraint
(︂I v v⊤ t
)︂
⪰ 0 which is equivalent to t ≥ ‖J − J′‖2
F . Finally, we optimize t to make it as small
as possible. We solve this SDP to find J′, which is the projection from J to R. This SDP has a polynomial size in n and a polynomial number of constraints. By [JKL+20] (the main result), we can get an efficient algorithm solving the SDP, thus we can project on R efficiently.
8.3 Application: Antiferromagnetic Expanders
Corollary 46. Given 0 < α < 1 and c > 0. Let 1 be the all-one vector. Let A be the set of matrices such that for all A ∈ A, A1 = 0 and 0 ⪯ A ⪯ (1 − α)I. Suppose we are given l independent samples X(1), . . . , X(l) ∼ PrJ* , where
J* is from
R = Sn
0 ∩ {∃r ∈ R, 0 ≤ t ≤ c, A ∈ A, s.t. J* + rI = − t
n 11⊤ + A}.
Then, there is a polynomial time algorithm (MPLE) that produces an estimate Jˆ ∈ R, such that with high probability over the choice of samples and the choice of matrix J* we have TV(PrJ^, PrJ* ) ≤ ε, as long as l = Ω ̃ (n2/ε2).
Proof. First, we know that, from [AKV24], any matrix in R satisfies ATE, and thus satisfies modified-LSI. Following the previous recipe, we just need to prove that R is convex. First, we know that A is convex. Since the average of two positive semi-definite (PSD) matrices is PSD, for any A1, A2 ∈ A, (A1 +A2)/2 ⪰ 0, and (1−α)I −(A1 +A2)/2 ⪰ 0. Therefore, (A1 + A2)/2 ∈ A. Therefore, for J1, J2 ∈ R, there exists real numbers r1, r2, t1, t2, A1, A2, such that Ji + riI = ti
n 11⊤ + Ai for i = 1, 2. Therefore, we have (J1 + J2)/2 + r1+r2
2 I = (t1+t2)/2
n 11⊤ + (A1 + A2)/2, and
thus (J1 + J2)/2 ∈ R, and thus R is convex.
Again, we have shown that R is a convex set, and we are optimizing a convex function. And the constraints of being a matrix in R are spectral or linear, as in the proof of Corollary 45. Thus, we can formulate the problem as an SDP again and solve it efficiently [JKL+20]. As in the proof of Corollary 45, we encode matrices J (matrix need to be projected) and J′ (the projected matrix) and scalars λ1, λ2, t/n, v. We also encode M = J′ − t/n · 11⊤ and 0 ≤ t ≤ c in the linear constraint. We make M = M -
⊤, M has equal-diagonal, and M 1 = 0 in the linear constraints as well. In
37

Estimating Ising Models in Total Variation Distance
addition, we have λ1I − M ⪰ 0, M − λ2I ⪰ 0 as a positive semi-definite constraint and λ1 − λ2 ≤ 1 − α as a linear constraint. Finally, we repeat the steps in Corollary 45 for the final step of the Frobenius norm. As we can write the SDP like that, we can get an efficient projection algorithm.
Remark 47. We should mention that in this antiferromagnetic expanders model, despite the constraints, it could still be that ‖J*‖∞ is unbounded. Indeed, consider a Paley graph G of a 4k + 1 type prime p (that is, i and j are connected if and only if i − j is a quadratic residue), and consider J − I − 2G, where J is the all-one matrix. We know that G
has all the eigenvalues 0 once with the all-one vector, and ±√p appears (p − 1)/2 times. Then, we know that if we consider J * = 1−α
2√p (J − I − 2G) − t · (J − I) for 0 < t < c − 1, it will be in R.
9 Bounding the TV distance by the Frobenius norm (Proof of Lemma 40)
Suppose we have two Ising models with interaction matrices J, J* ∈ S0n respectively and zero external fields. The
following lemma bounds their TV distance in terms of ‖J − J*‖F .
Lemma 48. Suppose μ, μ* are the distributions corresponding to two Ising models with interaction matrices J, J* ∈ S0n and zero external fields. Then, we have the following property:
‖μ − μ*‖T V ≤ n‖J − J *‖F .
Proof. We consider the TV distance of the Xi conditioning on μ, μ*. By Pinsker’s inequality, we have
2‖μ − μ*‖2
T V ≤ KL(μ‖μ*)
Consider the symmetric KL distance, we have
4‖μ − μ*‖2
T V ≤ KL(μ‖μ*) + KL(μ*‖μ) = XE∼μ(X⊤(J − J *)X) + X∼Eμ*(X⊤(J * − J )X)
We expand one of them, and the second one is analogous.
We can write
XE∼μ(X⊤(J − J *)X) = 2
∑︁
i<j
(Jij − J *
ij ) XE∼μ(XiXj ) = 2
∑︁
i<j
(Jij − J *
ij)(2 Pr
X∼μ(XiXj = 1) − 1).
Therefore, after we group them, we have
XE∼μ(X⊤(J − J *)X) + X∼Eμ*(X⊤(J * − J )X) = 4
∑︁
i<j
(Jij − J *
ij )( Pr
X∼μ(XiXj = 1) − Pr
X∼μ*(XiXj = 1))
The probability of XiXj = 1 can be upper-bounded by coupling. First, we consider the distribution of X and X′
according to μ and μ*, respectively. We couple X and X′ to achieve the probability X−i−j ̸= X′
−i−j as small as possible. We call the event X−i−j ̸= X′
−i−j to be E1, and X−i−j = X′
−i−j to be E2. Therefore, we can split the difference in probability to be
XE∼μ(X⊤(J − J *)X) + X∼Eμ*(X⊤(J * − J )X)
=4
∑︁
i<j
(Jij − J *
ij )( Pr
X∼μ(XiXj = 1) − Pr
X∼μ*(XiXj = 1))
≤4
∑︁
i<j
|Jij − J *
ij| · | Pr
X∼μ(XiXj = 1) − Pr
X∼μ*(XiXj = 1)|
≤4
∑︁
i<j
|Jij − J *
ij | ·
(︂
Pr(E1) ·
⃒ ⃒ ⃒ ⃒
Pr
X∼μ(XiXj = 1|E1) − Pr
X∼μ*(XiXj = 1|E1)
⃒ ⃒ ⃒ ⃒
+ Pr(E2) ·
⃒ ⃒ ⃒ ⃒
Pr
X∼μ(XiXj = 1|E2) − Pr
X∼μ*(XiXj = 1|E2)
⃒ ⃒ ⃒ ⃒
)︂
For E1 case, We have Pr(E1) ≤ ‖μ − μ*‖T V along with the naive bound
| Pr(XiXj = 1|E1) − Pr(XiXj = 1|E1)| ≤ 1.
38

Estimating Ising Models in Total Variation Distance
For the E2 case, we bound Pr(E2) ≤ 1, and we upper bound the probability difference by the largest possible difference of the conditional probability. That is:
⃒ ⃒ ⃒ ⃒
Pr
X∼μ(XiXj = 1|E2) − Pr
X∼μ*(XiXj = 1|E2)
⃒ ⃒ ⃒ ⃒
≤ max
X−i−j
⃒ ⃒ ⃒ ⃒
Pr
X∼μ(XiXj = 1|X−i−j ) − Pr
X∼μ*(XiXj = 1|X−i−j )
⃒ ⃒ ⃒ ⃒
.
To sum up, we have the following inequality:
XE∼μ(X⊤(J − J *)X) + X∼Eμ*(X⊤(J * − J )X)
≤4
∑︁
i<j
|Jij − J *
ij | ·
(︂
Pr(E1) ·
⃒ ⃒ ⃒ ⃒
Pr
X∼μ(XiXj = 1|E1) − Pr
X∼μ*(XiXj = 1|E1)
⃒ ⃒ ⃒ ⃒
+ Pr(E2) ·
⃒ ⃒ ⃒ ⃒
Pr
X∼μ(XiXj = 1|E2) − Pr
X∼μ*(XiXj = 1|E2)
⃒ ⃒ ⃒ ⃒
)︂
≤4
∑︁
i<j
|Jij − J *
ij | ·
(︂
‖μ − μ*‖T V + max
X−i−j
⃒ ⃒ ⃒ ⃒
Pr
X∼μ(XiXj = 1|X−i−j ) − Pr
X∼μ*(XiXj = 1|X−i−j )
⃒ ⃒ ⃒ ⃒
)︂
For Ising model μ with interaction matrix J, denote hi = ∑︀
k̸=i,j Jik, and hj = ∑︀
k̸=i,j Jjk we can calculate that
Pr(XiXj = 1)
= exp(Jij + hi + hj) + exp(Jij − hi − hj)
exp(Jij + hi + hj) + exp(Jij − hi − hj) + exp(−Jij + hi − hj) + exp(−Jij − hi + hj) .
Denote v = hi + hj and w = hi − hj. So, we have the following
Pr(XiXj = 1) = exp(Jij) cosh(v)
exp(Jij) cosh(v) + exp(−Jij) cosh(w) =: F (Jij, u, w).
Denote v* = ∑︀
k̸=i,j J *
ik + ∑︀
k̸=i,j J *
jk and w* = ∑︀
k̸=i,j J *
ik − ∑︀
k̸=i,j J *
jk. Our target is to upper bound |F (Jij, u, w) − F (J *
ij, u*, w*)|. We take the derivative to show the Lipschitzness of F to achieve this. By taking the derivative directly, we have
∂F
∂Jij
= 2 cosh(v) cosh(w)
(exp(Jij) cosh(v) + exp(−Jij) cosh(w))2 .
∂F
∂v = sinh(v) cosh(w)
(exp(Jij) cosh(v) + exp(−Jij) cosh(w))2 .
∂F
∂v = − sinh(w) cosh(v)
(exp(Jij) cosh(v) + exp(−Jij) cosh(w))2 .
By AM-GM ineqiality, we have | ∂F
∂Jij | ≤ 1
2 . By furthermore | sinh(x)| ≤ | cosh(x)|, we have both | ∂F
∂v | and | ∂F
∂w | ≤ 1
4. Therefore, we have the bound:
|F (Jij, u, w) − F (J *
ij , u*, w*)| ≤ 1
2 |Jij − J *
ij | + 1
4 |v − v*| + 1
4 |w − w*|
Plugging back the expression of v, w, v*, w*, we use the triangle inequalty, we have
|v − v*| =
⃒ ⃒ ⃒ ⃒ ⃒ ⃒
∑︁
k̸=i,j
Jik +
∑︁
k̸=i,j
Jjk −
∑︁
k̸=i,j
J*
ik −
∑︁
k̸=i,j
J*
jk
⃒ ⃒ ⃒ ⃒ ⃒ ⃒
=
⃒ ⃒ ⃒ ⃒ ⃒ ⃒
∑︁
k̸=i,j
Jik − Jik + Jjk − J *
jk
⃒ ⃒ ⃒ ⃒ ⃒ ⃒
≤
∑︁
k̸=i,j
|Jik − Jik| + |Jjk − J *
j k |.
39

Estimating Ising Models in Total Variation Distance
And, we can get the same for w − w*. Therefore, we can deduce that
|F (Jij, u, w) − F (J *
ij , u*, w*)| ≤ 1
2 |Jij − J *
ij | + 1
2
∑︁
k̸=i,j
|Jik − J *
ik| + |Jik − J *
j k |.
Therefore, we can have the following inequality:
XE∼μ(X⊤(J − J *)X) + X∼Eμ*(X⊤(J * − J )X)
≤4
∑︁
i<j
|Jij − J *
ij | ·
(︂
‖μ − μ*‖T V + max
X−i−j
⃒ ⃒ ⃒ ⃒
Pr
X∼μ(XiXj = 1|X−i−j ) − Pr
X∼μ*(XiXj = 1|X−i−j )
⃒ ⃒ ⃒ ⃒
)︂
≤4
∑︁
i<j
|Jij − J *
ij | ·
⎛
⎝‖μ − μ*‖T V + 1
2 |Jij − J *
ij | + 1
2
∑︁
k̸=i,j
|Jik − J *
ik| + |Jik − J *
jk|
⎞
⎠
By the Cauchy-Schwarz inequality, we have
∑︁
i<j
|Jij − J *
ij | = 1
2
∑︁
i̸=j
|Jij − J *
ij | ≤ n
2 ‖J − J *‖F .
Also, the rest of that is
∑︁
i<j
|Jij − J *
ij | ·
⎛
⎝
1
2 |Jij − J *
ij | + 1
2
∑︁
k̸=i,j
|Jik − J *
ik| + |Jik − J *
jk|
⎞
⎠
=
n
∑︁
i=1
∑︁
j̸=i
|Jij − J *
ij | ·
⎛
⎝
1
4 |Jij − J *
ij | + 1
2
∑︁
k̸=i,j
|Jik − J *
ik |
⎞
⎠
<
n
∑︁
i=1
∑︁
j̸=i
|Jij − J *
ij | ·
⎛
⎝
1
2 |Jij − J *
ij | + 1
2
∑︁
k̸=i,j
|Jik − J *
ik |
⎞
⎠=
n
∑︁
i=1
1 2
⎛
⎝
∑︁
j̸=i
|Jij − J *
ij |
⎞
⎠
2
.
By the Cauchy-Schwarzartz inequality, we know that
⎛
⎝
∑︁
j̸=i
|Jij − J *
ij |
⎞
⎠
2
≤n
∑︁
j̸=i
|Jij − J *
ij |2
Thus, we can have
∑︁
i<j
|Jij − J *
ij | ·
⎛
⎝
1
2 |Jij − J *
ij | + 1
2
∑︁
k̸=i,j
|Jik − J *
ik| + |Jik − J *
jk|
⎞
⎠
<
n
∑︁
i=1
1 2
⎛
⎝
∑︁
j̸=i
|Jij − J *
ij |
⎞
⎠
2
≤
n
∑︁
i=1
n 2
∑︁
j̸=i
|Jij − J *
ij |2 = n
2 ‖J − J *‖2
F.
So, in summary, we have
XE∼μ(X⊤(J − J *)X) + X∼Eμ*(X⊤(J * − J )X)
≤4
∑︁
i<j
|Jij − J *
ij | ·
⎛
⎝‖μ − μ*‖T V + 1
2 |Jij − J *
ij | + 1
2
∑︁
k̸=i,j
|Jik − J *
ik| + |Jjk − J *
jk|
⎞
⎠
≤2n‖μ − μ*‖T V · ‖J − J *‖F + 2n‖J − J *‖2
F
40

Estimating Ising Models in Total Variation Distance
Because in the beginning we have established
4‖μ − μ*‖2
T V = XE∼μ(X⊤(J − J *)X) + X∼Eμ*(X⊤(J * − J )X),
We have the quadratic formula
2‖μ − μ*‖2
T V ≤ n‖μ − μ*‖T V · ‖J − J *‖F + n‖J − J *‖2
F,
which yields that ‖μ − μ*‖T V ≤ n‖J − J *‖F .
10 Discussion of guarantee from Theorem 38
Notice that for Ising model with bounded with, Lemma 6 in [DDDK21] has established that (also in the proof of Theorem 49) there is a constant (depending only on M ) that EJ* [‖(J − J*)X‖] ≥ CM ‖J − J*‖2
F and thus we know
that the condition E[‖(J − J*)X‖2] ≤ ε2 implies that ‖J − J*‖2
F ≤ ε2/CM . Therefore, the Corollary 7 follows from Theorem 6.
Now, we use an example to show that in some cases, it is strictly stronger. Let β1, β2 > 1 be two numbers and
J * = β1
n 11⊤, and J = β2
n 11⊤.
It is well known that (see e.g [Ell07]) for Curie Weiss model with inverse temperature β > 1, we have with probability
at least 1 − exp(−C√n) that
1 n
n
∑︁
i=1
Xi = ±(2s(β) − 1) + O(n−1/4) ,
where s(β) is the (larger) maximum in the optimization problem
s(β) = argmax
s
−s log(s) − (1 − s) log(1 − s) + 2βs(1 − s).
Now, the condition given in Theorem 6 for matrices J, J* says that EJ* [‖(J − J*)X‖2] ≤ ε2 . This implies that
(β1 −β2 )2
n EJ* [(∑︀ n
i=1 Xi)2] ≤ ε2, or, (β1 − β2) ≲ ε
√n·(2s(β1)−1) . Therefore, this implies ‖J − J *‖F ≲ √εn , stricter
than ‖J − J *‖F ≲ ε.
11 Verifying the regularity condition
In this section, we will demonstrate how the regularity condition of Theorem 38 can be verified whenever our model satisfies two natural high-temperature conditions. These include the following two cases: (1) Dobrushin’s condition holds, (2) the model is spectrally bounded. We also show that it can be true even in low temperature settings, with the notable example being the Curie-Weiss model.
We start with the first claim.
Theorem 49. Suppose J* ∈ S0n satisfies ‖J*‖∞ < 1 − δ, where δ > 0. Then, there is some ε0 > 0 that depends on
δ, such that the Ising model with interaction matrix J* satisfies (ε20, C)-regularity, where C depends on δ and ε.
Proof. We compare E[‖(J − J*)X‖2] with ‖(J − J*)X‖2
F . Specifically, because ‖J*‖∞ < 1 − δ, we can show
that, by Lemma 6 in [DDDK21], there exists a universal constant C1 such that for all a ∈ Rn, EJ* [‖a⊤X‖] = Var[a⊤X] ≥ C1‖a‖2. Therefore, we know that E[‖(J − J*)X‖2] ≤ ε20 implies that
‖J − J *‖2
F ≤ C−1
1 JE*[‖(J − J *)X‖2] ≤ C−1
1 ε2
0,
which then implies that ‖J − J*‖∞ ≤
√︁
C −1
1 ε0. So, we know that ‖J‖∞ ≤ 1 − δ +
√︁
C −1
1 ε0. Thus, if we take
ε0 ≤ √C1δ/2, we know that ‖J‖∞ ≤ 1 − δ/2.
Then, by Theorem 3.7 in [AKPS19], we know that for the Ising model with interaction matrix J, there exists a constant C2 such that the Poincaré inequality holds with coefficient C2
δ . Therefore, we know that
JE[‖(J − J *)X‖2] =
n
∑︁
i=1
Var[(J − J *)⊤
i X] ≤ C2
δ
n
∑︁
i=1
‖(J − J *)‖2
2 = C2
δ ‖J − J *‖2
F
41

Estimating Ising Models in Total Variation Distance
We conclude that
JE[‖(J − J *)X‖2] ≤ C2
δ ‖J − J *‖2
F ≤ C2
δC1
· JE*[‖(J − J *)X‖2].
Theorem 50. Let J * ∈ S0n satisfy λmax(J *) − λmin(J *) < 1 − δ. Then, there exists ε0 > 0 that depends on δ, such
that the Ising model with interaction matrix J* satisfies (ε20, C)-regularity, where C > 0 is a constant that depends on δ.
Proof. Like the previous lemma, we compare E[‖(J − J*)X‖2] with ‖(J − J*)X‖2
F . Specifically, because
λmax(J *) − λmin(J *) < 1 − δ, we can show that, by Lemma 22, we have
‖J − J *‖2
F ≤ 2 cosh
(︃
4
√︃
1
1 − ‖J *‖op
)︃2
ε2
0 ≤ 2 cosh
(︃
4
√︂1
δ
)︃2
ε2
0,
which then implies that ‖J − J*‖F ≤ √2 cosh(4√︀ 1/δ)ε0. So, we know that
λmax(J *) − λmin(J *) ≤ 1 − δ + 2√2 cosh(4√︀ 1/δ)ε0 .
Then, if we take ε0 ≤ δ/(4√2 cosh(4√︀ 1/δ)), we know that λmax(J *) − λmin(J *) ≤ 1 − δ/2.
We can then apply Lemma 15, which says that there exists an absolute constant C2, such that the Ising model with interaction matrix J satisfies the Poincare inequality with coefficient C2
δ . Therefore, we know that
JE[‖(J − J *)X‖2] ≤ C2
δ ‖J − J *‖2
F
We conclude that
JE[‖(J − J *)X‖2] ≤ C2
δ ‖J − J *‖2
F ≤ 2C2
δ cosh
(︃
4
√︃
1
1 − ‖J *‖op
)︃2
JE*[‖(J − J *)X‖2] .
This finishes the proof.
We conclude the section by showing that the Curie-Weiss model satisfies the regularity condition even at low temperatures.
Theorem 51. Let J* be the matrix for the Curie-Weiss model. That is, J* = β
n (J − I) where J is the all-one matrix
and β > 1. Then, we have J* satisfies (c1/n, c2) regularity, where c1, c2 are constants that depends on β.
Proof. We know that the distribution is symmetric for all Xi. Therefore, the covariance matrix of X1, . . . , Xn, denoted by Σ, is a matrix of the form aJ + (1 − a)I for some 0 < a < 1. By [DM23], we can calculate that a converges to (2s − 1)2 where s > 1/2 is the solution of the equation 2(2s − 1) = log( s
1−s ). Therefore, for any A, we can calculate that
JE*[‖AX‖2] = Tr(A E[XX⊤]A) = Tr(A(aI + (1 − a)J )A) = (1 − a)‖A‖2
F + a‖A1‖2
Now, suppose EJ* [‖AX‖2] = ε
n , where ε < c1. We will prove that
JE[‖AX‖2] ≤ c2 · JE*[‖AX‖2] ,
for some constant c2 > 0.
First of all, by assumption we have a·(‖A1‖2)+(1−a)‖A‖2
F=ε
n . Therefore, we have ‖A‖op ≤ ‖A‖F ≤
√︁ε
(1−a)n ,
and ‖A1‖ ≤ √︀ ε
an .
Also, we can calculate the following:
JE*[X⊤AX] = Tr(A E[XX⊤]) = Tr(A(aI + (1 − a)J )) = (1 − a)1⊤A1 ,
since A has zero diagonal.
42

Estimating Ising Models in Total Variation Distance
Thus, we can derive that
|1⊤A1| ≤ √n · ‖A1‖ ≤ √n ·
√︂ε
an = √︀ ε/a.
The quantity X⊤AX is important, since it represents the difference in Hamiltonians of J and J*.
First, we show an inequality: for some universal constant c (without loss of generality c ≤ 1)
JP*r
[︀⃒
⃒ X⊤AX − |1⊤A1|⃒
⃒ ≥ t]︀ ≤ 2 exp
(︂
−c min
(︂ t2
‖A‖2
F
,t
‖A‖op
)︂
This means that the difference in Hamiltonians is upper-bounded with high probability.
To do that, we can use [DM23] and the Hanson-Wright inequality. By Proposition 4.2 in [DM23], the Curie Weiss model can be written as a mixture of i.i.d. distributions of Xi. Importantly, each of these mixtures has the property that all variables have the same mean. Therefore, by Hanson-Wright inequality for each product measure μ, there exists a universal constant c (for all μ) such that
Pμr[|X⊤AX − μE[X⊤AX]| ≥ t] ≤ 2 exp
(︂
−c min
(︂ t2
‖A‖2
F + [Eμ ‖AX‖]2 , t
‖A‖op
)︂
.
Therefore, if we denote bμ = 1 − Eμ[X2
i ] (remember this value is the same for all i by [DM23]), then
μE[X⊤AX] = Tr(A Eμ [XX⊤]) = Tr(A μE(bμI + (1 − bμ)J )) .
Therefore, we have for all i.i.d. measures μ in the decomposition
μE[X⊤AX] = Tr(A(bμI + (1 − bμ)J)) = (1 − bμ)Tr(AJ) = (1 − bμ)(1⊤A1) ≤ |1⊤A1|,
Also, we can calculate that for any i.i.d. μ, Eμ[XX⊤] = bμJ + (1 − bμ)I ⪯ I + J and therefore,
mμax Eμ [|‖AX‖2] ≤ ‖A1‖2 + ‖A‖2
F ≤ ε/n
a(1 − a) ,
where the maximum is with respect to all product measures in the decomposition. Let u = |1⊤A1| and v = ε/n
a(1−a) .
Then, for all μ, by Hanson-Wright inequality
Pμr[X⊤AX − |1⊤A1| ≥ t] ≤ Pμr[X⊤AX − μE[X⊤AX] ≥ t] ≤ 2 exp
(︂
−c min
(︂ t2
‖A‖2
F +v, t
‖A‖op
)︂
.
Taking expectation with respect to the random choice of measure μ in the decomposition, we can derive the tail bound
JP*r[X⊤AX − |1⊤A1| ≥ t] ≤ 2 exp
(︂
−c min
(︂ t2
‖A‖2
F +v, t
‖A‖op
)︂
,
which is what we wished to show. Similarly, we can prove for the lower tail,
JP*r[X⊤AX + |1⊤A1| ≤ −t] ≤ 2 exp
(︂
−c min
(︂ t2
‖A‖2
F +v, t
‖A‖op
)︂
.
Now let A = J − J*, so we can write that
JE[‖AX‖2] = JE*
[︃
Z(J *) exp( 1
2 X⊤AX)
Z(J) ‖AX‖2
]︃
.
We first lower bound Z(J)
Z(J*) . We have
Z (J )
Z(J *) = JE*
[︂
exp( 1
2 X⊤AX)
]︂
.
43

Estimating Ising Models in Total Variation Distance
We note that, for a bounded random variable Z and a differentiable increasing function f (x) such that f (0) = 1, if we want to lower bound E[eZ], we can do the following: let Y = min(Z, 0). Therefore, we have
E[f (Z)] ≥ E[f (Y )] = E[1 −
∫︁0
Y
f ′(t)dt] = 1 − E[
∫︁0
−∞
1[t ≥ Y ]f ′(t)dt]
=1−
∫︁0
−∞
f ′(t) E[1[t ≥ Y ]]dt = 1 −
∫︁0
−∞
f ′(t) Pr[Z ≤ t]dt.
The second line is by Fubini. By the above inequality and the tail bound, when we view Z to be X⊤AX + u and f (x) = ex/2, we can calculate that
JE*
[︂
exp
(︂1
2 X⊤AX
)︂]︂
= e−u/2 JE*
[︂
exp( 1
2 (X⊤AX + u))
]︂
≥e−u/2 ·
(︂
1− 1
2
∫︁∞
0
e−t/2 JP*r[X⊤AX + u ≤ −t]dt
)︂
≥e−u/2 ·
(︂
1−
∫︁∞
0
exp
(︂
−t
2 − c min
(︂ t2
‖A‖2
F +v, t
‖A‖op
)︂
dt
)︂
.
Since we know ‖A‖op ≤ ‖A‖F ≤ v, we have that
JE*[exp( 1
2 X⊤AX)] = e−u/2 JE*
[︂
exp
(︂1
2 (X⊤AX + u)
)︂]︂
≥e−u/2 ·
(︂
1−
∫︁∞
0
exp
(︂
−t
2 − c min
(︂ t2
‖A‖2
F +v, t
‖A‖op
)︂
dt
)︂
≥e−u/2 ·
(︂
1−
∫︁∞
0
exp
(︂
−t
2 − c min
(︂ t2
2v , √tv
)︂
dt
)︂
=e−u/2 ·
(︃
1−
∫︁ 2√v
0
exp
(︂
−t
2 − c t2
2v
)︂
dt −
∫︁∞
2√v
exp
(︂
−t
2 − c √tv
)︂
dt
)︃
≥e−u/2 ·
(︃
1−
∫︁ 2√v
0
1dt −
∫︁∞
0
exp
(︂
−t
2 − c √tv
)︂
dt
)︃
=e−u/2 ·
(︂
1 − 2√v − 1
c/√v + 1/2
)︂
.
We choose the ε small enough such that √v =
√︁ε
na(1−a) ≤ c/8, so we have
JE*[exp(X⊤AX)] ≥ e−u/2 ·
(︂
1 − ‖A‖F − 1
c/‖A‖F + 1/2
)︂
≥e−u/2 · (1 − 1/4 − 1/4) ≥ e−
√
ε/a/2/2.
Finally, we upper bound the expectation as follows
JE*
[︂
exp
(︂1
2 X⊤AX
)︂
‖AX ‖2
]︂
≤ JE*
[︂
exp
(︂ √n
2 ‖AX‖
)︂
‖AX ‖2
]︂
Using the Hanson-Wright inequality as before, replacing A with A2, we have
JP*r[‖AX‖2 − mμax μE[|‖AX‖2] ≥ t] ≤ 2 exp
(︂
−c min( t2
‖A2‖2
F + maxμ Eμ[‖A2X‖]2 , t
‖A2‖op
)
)︂
≤2 exp
(︂
−c min
(︂ t2
‖A‖4
F + ‖A‖2
F maxμ Eμ[‖AX‖2] , t
‖A‖2
F
)︂
.
Here, as before, maxμ is taking max function for all i.i.d. measure in the decomposition of the Curie Weiss model [DM23].
44

Estimating Ising Models in Total Variation Distance
Similar to the proof of the lower bound from before, if Z is a bounded random variable and f is an increasing differentiable function such that f (0) = 0, if we want to upper bound E[f (Z)], we can let W = max(Z, 0) and have
E[f (Z)] ≤ E[f (W )] = E[
∫︁W
0
f ′(t)dt] = E[
∫︁∞
0
1[t ≤ W ]f ′(t)dt]
=
∫︁∞
0
f ′(t) E[1[W ≥ t]]dt =
∫︁∞
0
f ′(t) Pr[Z ≥ t]dt.
Let f (t) = te
√nt/2, and f ′(t) = exp(
√nt
2 )(1 +
√nt
2 ). The random variable Z will be ‖AX‖2. We will now use the
concentration result for ‖AX‖2 to upper bound the expectation. Below, we will use the simple observation that we
made before maxμ Eμ[‖AX‖2] ≤ v. Using the identity exp(
√nt
2 )(1+
√nt
2 ) ≤ exp(√nt) in the rest of the calculation,
we can calculate that
JE*
[︂
exp
(︂ √n
2 ‖AX‖
)︂
‖AX ‖2
]︂
≤
∫︁∞
0
exp
(︂ √nt
2
)︂(︂
1+
√nt 2
)︂
Pr(‖AX‖2 ≥ t)dt
≤
∫︁∞
0
exp
(︁ √nt
)︁
Pr(‖AX‖2 ≥ t)dt
≤
∫︁ 2v+‖A‖2
F
0
exp(√nt)dt +
∫︁∞
2v+‖A‖2
F
exp(√nt) · 2 exp
(︂
−c min
(︂ (t − v)2 ‖A‖4
F + ‖A‖2
Fv, t−v
‖A‖2
F
)︂
dt
=
∫︁ 2v+‖A‖2
F
0
exp(√nt)dt +
∫︁∞
2v+‖A‖2
F
exp(√nt) · 2 exp
(︂
−c t − v
‖A‖2
F
)︂
dt
Here, the first inequality is by taking Z to be ‖AX‖2 and f (x) = xe
√nx. The second one is because of the inequality we mentioned, the third one is by the following: if t ≤ 2v + ‖A‖2
F , the probability of ‖AX‖2 ≥ t is at most 1. Otherwise, we use the concentration tail bound and get the upper bound.
We know that nv = ε/(a(1 − a)), and ‖A‖2
F ≤ ε/(n(1 − a)) ≤ v, so we have
∫︁ 2v+‖A‖2
F
0
exp(√nt)dt ≤ (2v + ‖A‖2
F )e
√n(2v+‖A‖2
F ) ≤ 3ε
a(1 − a)n exp
(︂ 3ε
a(1 − a)
)︂
.
Also, if we take ε < 1 − a, we have
∫︁∞
2v+‖A‖2
F
exp
(︁ √nt
)︁
· 2 exp
(︂
−c t − v
‖A‖2
F
)︂
dt ≤
∫︁∞
v+‖A‖2
F
exp(√nt) · 2 exp
(︂
−c t − v
‖A‖2
F
)︂
dt
≤
∫︁∞
v+‖A‖2
F
exp(1/(4c) + cnt) · 2 exp
(︂
−c t − v
‖A‖2
F
)︂
dt
= exp
(︂1
4c + (v + ‖A‖2
F ) · c · n − ‖A‖2
F· c
‖A‖2
F
)︂
· 1/c
1 ‖A‖2
F
−n
≤ exp
(︂1
4c + (v + ‖A‖2
F )cn − c
)︂
· 1/c
1−a−ε · ε
n ≤ exp
(︂1
4c + ε · (2 − a)
a(1 − a) − c
)︂
· 1/c
1−a−ε · ε
n.
Therefore, summing up all the things above, we have
JE[‖AX‖2] ≤ ε
n
(︂3
a(1 − a) exp
(︂ 3ε
a(1 − a)
)︂
+ exp
(︂1
4c + ε · (2 − a)
a(1 − a) − c
)︂
· 1/c
1−a−ε
)︂
· 2e
√
ε/a/2.
Since a is a constant depending on β, and we can take ε as a sufficiently small constant depending on β, the result follows.
References
[AAGM21] Shiri Artstein-Avidan, Apostolos Giannopoulos, and Vitali D Milman. Asymptotic geometric analysis, Part II, volume 261. American Mathematical Society, 2021. 26, 34
45

Estimating Ising Models in Total Variation Distance
[AJK+21] Nima Anari, Vishesh Jain, Frederic Koehler, Huy Tuan Pham, and Thuy-Duong Vuong. Entropic independence i: Modified log-sobolev inequalities for fractionally log-concave distributions and hightemperature ising models. arXiv preprint arXiv:2106.04105, 2021. 2, 4, 5, 8, 12, 19
[AJK+24] Nima Anari, Vishesh Jain, Frederic Koehler, Huy Tuan Pham, and Thuy-Duong Vuong. Universality of spectral independence with applications to fast mixing in spin glasses. In Proceedings of the 2024 Annual ACM-SIAM Symposium on Discrete Algorithms (SODA), pages 5029–5056. SIAM, 2024. 1, 2, 4, 7, 9
[AKPS19] Radosław Adamczak, Michał Kotowski, Bartłomiej Polaczyk, and Michał Strzelecki. A note on concentration for polynomials in the ising model. 2019. 4, 9, 41
[AKV24] Nima Anari, Frederic Koehler, and Thuy-Duong Vuong. Trickle-down in localization schemes and applications. In Proceedings of the 56th Annual ACM Symposium on Theory of Computing, pages 1094–1105, 2024. 2, 4, 5, 8, 36, 37
[B+15] Sébastien Bubeck et al. Convex optimization: Algorithms and complexity. Foundations and Trends® in Machine Learning, 8(3-4):231–357, 2015. 37
[BABK22] Enric Boix-Adsera, Guy Bresler, and Frederic Koehler. Chow-liu++: Optimal prediction-centric learning of tree ising models. In 2021 IEEE 62nd Annual Symposium on Foundations of Computer Science (FOCS), pages 417–426. IEEE, 2022. 7
[BB19] Roland Bauerschmidt and Thierry Bodineau. A very simple proof of the lsi for high temperature spin systems. Journal of Functional Analysis, 276(8):2582–2588, 2019. 8
[BCC+22] Antonio Blanca, Pietro Caputo, Zongchen Chen, Daniel Parisi, Daniel Štefankovicˇ, and Eric Vigoda. On mixing of markov chains: Coupling, spectral independence, and entropy factorization. In Proceedings of the 2022 Annual ACM-SIAM Symposium on Discrete Algorithms (SODA), pages 3670–3692. SIAM, 2022. 2, 4
[BCD20] Johannes Brustle, Yang Cai, and Constantinos Daskalakis. Multi-item mechanisms without itemindependence: Learnability via robustness. In Proceedings of the 21st ACM Conference on Economics and Computation, pages 715–761, 2020. 7
[Bes74] Julian Besag. Spatial interaction and the statistical analysis of lattice systems. Journal of the Royal Statistical Society: Series B (Methodological), 36(2):192–225, 1974. 2, 8
[BG99] Sergej G Bobkov and Friedrich Götze. Exponential integrability and transportation cost related to logarithmic sobolev inequalities. Journal of Functional Analysis, 163(1):1–28, 1999. 11
[BGPV21] Arnab Bhattacharyya, Sutanu Gayen, Eric Price, and NV Vinodchandran. Near-optimal learning of treestructured distributions by chow-liu. In Proceedings of the 53rd annual acm SIGACT symposium on theory of computing, 2021. 1, 2, 7
[BGS17] Guy Bresler, David Gamarnik, and Devavrat Shah. Learning graphical models from the glauber dynamics. IEEE Transactions on Information Theory, 64(6):4072–4080, 2017. 7
[BK20] Guy Bresler and Mina Karzand. Learning a tree-structured ising model in order to make predictions. The Annals of Statistics, 48(2):713–737, 2020. 2, 7
[BKM19] Guy Bresler, Frederic Koehler, and Ankur Moitra. Learning restricted boltzmann machines via influence maximization. In Proceedings of the 51st Annual ACM SIGACT Symposium on Theory of Computing, pages 828–839, 2019. 7
[BM18] Bhaswar B Bhattacharya and Sumit Mukherjee. Inference in ising models. 2018. 3, 7, 8
[BR21] Bhaswar B Bhattacharya and Kavita Ramanan. Parameter estimation for undirected graphical models with hard constraints. IEEE Transactions on Information Theory, 67(10):6790–6809, 2021. 8
[Bre15] Guy Bresler. Efficiently learning ising models on arbitrary graphs. In Proceedings of the forty-seventh annual ACM symposium on Theory of computing, pages 771–782, 2015. 2, 7
[BT06] Sergey G Bobkov and Prasad Tetali. Modified logarithmic sobolev inequalities in discrete settings. Journal of Theoretical Probability, 19(2):289–336, 2006. 2, 4, 8, 11, 12
[BV04] Stephen Boyd and Lieven Vandenberghe. Convex optimization. Cambridge university press, 2004. 37
[Cap23] Pietro Caputo. Lecture notes on entropy and markov chains. Preprint, available from: http://www. mat. uniroma3. it/users/caputo/entropy. pdf, 2023. 2
[CE22] Yuansi Chen and Ronen Eldan. Localization schemes: A framework for proving mixing bounds for markov chains. In 2022 IEEE 63rd Annual Symposium on Foundations of Computer Science (FOCS), pages 110–122. IEEE, 2022. 2, 4, 8, 12
46

Estimating Ising Models in Total Variation Distance
[Cel24] Michael Celentano. Sudakov–fernique post-amp, and a new proof of the local convexity of the tap free energy. The Annals of Probability, 52(3):923–954, 2024. 8
[CGM19] Mary Cryan, Heng Guo, and Giorgos Mousa. Modified log-sobolev inequalities for strongly log-concave distributions. In 2019 IEEE 60th Annual Symposium on Foundations of Computer Science (FOCS), pages 1358–1370. IEEE, 2019. 13
[Cha07] Sourav Chatterjee. Estimation in spin glasses: A first step. 2007. 3, 7, 8
[CK24] Gautam Chandrasekaran and Adam Klivans. Learning the sherrington-kirkpatrick model even at low temperature. arXiv preprint arXiv:2411.11174, 2024. 1, 2, 5, 7
[CL68] CKCN Chow and Cong Liu. Approximating discrete probability distributions with dependence trees. IEEE transactions on Information Theory, 14(3):462–467, 1968. 7
[CLV21] Zongchen Chen, Kuikui Liu, and Eric Vigoda. Optimal mixing of glauber dynamics: Entropy factorization via high-dimensional expansion. In Proceedings of the 53rd Annual ACM SIGACT Symposium on Theory of Computing, pages 1537–1550, 2021. 2, 36
[CMT15] Pietro Caputo, Georg Menz, and Prasad Tetali. Approximate tensorization of entropy at high temperature. In Annales de la Faculté des sciences de Toulouse: Mathématiques, volume 24, pages 691–716, 2015. 2
[DDDK21] Yuval Dagan, Constantinos Daskalakis, Nishanth Dikkala, and Anthimos Vardis Kandiros. Learning ising models from one or multiple samples. In Proceedings of the 53rd Annual ACM SIGACT Symposium on Theory of Computing, pages 161–168, 2021. 3, 5, 6, 7, 8, 9, 10, 11, 14, 24, 25, 27, 30, 31, 34, 35, 41
[DDP19] Constantinos Daskalakis, Nishanth Dikkala, and Ioannis Panageas. Regression from dependent observations. In Proceedings of the 51st Annual ACM SIGACT Symposium on Theory of Computing, pages 881–889, 2019. 3, 7, 8
[DDP20] Constantinos Daskalakis, Nishanth Dikkala, and Ioannis Panageas. Logistic regression with peer-group effects via inference in higher-order ising models. In International Conference on Artificial Intelligence and Statistics, pages 3653–3663. PMLR, 2020. 8
[DM23] Nabarun Deb and Sumit Mukherjee. Fluctuations in mean-field ising models. The Annals of Applied Probability, 33(3):1961–2003, 2023. 42, 43, 44
[DMR06] Constantinos Daskalakis, Elchanan Mossel, and Sébastien Roch. Optimal phylogenetic reconstruction. In Proceedings of the thirty-eighth annual ACM symposium on Theory of computing, pages 159–168, 2006. 1
[DMR20] Luc Devroye, Abbas Mehrabian, and Tommy Reddad. The minimax learning rates of normal and ising undirected graphical models. 2020. 1, 2, 5, 7
[Dob68] PL Dobruschin. The description of a random field by means of conditional probabilities and conditions of its regularity. Theory of Probability & Its Applications, 13(2):197–224, 1968. 4
[DP21] Constantinos Daskalakis and Qinxuan Pan. Sample-optimal and efficient learning of tree ising models. In Proceedings of the 53rd Annual ACM SIGACT Symposium on Theory of Computing, pages 133–146, 2021. 1, 2, 7
[EAMS22] Ahmed El Alaoui, Andrea Montanari, and Mark Sellke. Sampling from the sherrington-kirkpatrick gibbs measure via algorithmic stochastic localization. In 2022 IEEE 63rd Annual Symposium on Foundations of Computer Science (FOCS), pages 323–334. IEEE, 2022. 8
[EKZ22] Ronen Eldan, Frederic Koehler, and Ofer Zeitouni. A spectral condition for spectral gap: fast mixing in high-temperature ising models. Probability theory and related fields, 182(3):1035–1051, 2022. 4, 8, 12
[Ell93] Glenn Ellison. Learning, local interaction, and coordination. Econometrica: Journal of the Econometric Society, pages 1047–1071, 1993. 1
[Ell07] Richard S Ellis. Entropy, large deviations, and statistical mechanics. Springer, 2007. 41
[Fel04] Joseph Felsenstein. Inferring phylogenies. Sunderland; Sinauer Associates, 2004. 1
[Fri03] Joel Friedman. A proof of alon’s second eigenvalue conjecture. In Proceedings of the thirty-fifth annual ACM symposium on Theory of computing, pages 720–724, 2003. 6
[GG86] Stuart Geman and Christine Graffigne. Markov random field image models and their applications to computer vision. In Proceedings of the international congress of mathematicians, volume 1, page 2. Berkeley, CA, 1986. 1
47

Estimating Ising Models in Total Variation Distance
[GKK24a] Andreas Galanis, Alkis Kalavasis, and Anthimos Vardis Kandiros. Learning hard-constrained models with one sample. In Proceedings of the 2024 Annual ACM-SIAM Symposium on Discrete Algorithms (SODA), pages 3184–3196. SIAM, 2024. 8
[GKK24b] Andreas Galanis, Alkis Kalavasis, and Anthimos Vardis Kandiros. On sampling from ising models with spectral constraints. arXiv preprint arXiv:2407.07645, 2024. 8
[GM20] Promit Ghosal and Sumit Mukherjee. Joint estimation of parameters in ising model. 2020. 7
[GM24] Jason Gaitonde and Elchanan Mossel. A unified approach to learning ising models: Beyond independence and bounded width. In Proceedings of the 56th Annual ACM Symposium on Theory of Computing, pages 503–514, 2024. 1, 2, 5, 7
[GMM24] Jason Gaitonde, Ankur Moitra, and Elchanan Mossel. Bypassing the noisy parity barrier: Learning higher-order markov random fields from dynamics. arXiv preprint arXiv:2409.05284, 2024. 7
[GMM25] Jason Gaitonde, Ankur Moitra, and Elchanan Mossel. Better models and algorithms for learning ising models from dynamics. arXiv preprint arXiv:2507.15173, 2025. 7
[GSS21] Friedrich Götze, Holger Sambale, and Arthur Sinulis. Concentration inequalities for bounded functionals via log-sobolev-type inequalities. Journal of Theoretical Probability, 34:1623–1652, 2021. 2, 4
[GŠV15] Andreas Galanis, Daniel Štefankovicˇ, and Eric Vigoda. Inapproximability for antiferromagnetic spin systems in the tree nonuniqueness region. Journal of the ACM (JACM), 62(6):1–60, 2015. 8
[HKM17] Linus Hamilton, Frederic Koehler, and Ankur Moitra. Information theoretic properties of markov random fields, and their algorithmic applications. Advances in Neural Information Processing Systems, 30, 2017. 2, 7
[JKL+20] Haotian Jiang, Tarun Kathuria, Yin Tat Lee, Swati Padmanabhan, and Zhao Song. A faster interior point method for semidefinite programming. In 2020 IEEE 61st annual symposium on foundations of computer science (FOCS), pages 910–918. IEEE, 2020. 37
[JLMV24] Abhijith Jayakumar, Andrey Y Lokhov, Sidhant Misra, and Marc Vuffray. Discrete distributions are learnable from metastable samples. arXiv preprint arXiv:2410.13800, 2024. 7
[KDD+21] Vardis Kandiros, Yuval Dagan, Nishanth Dikkala, Surbhi Goel, and Constantinos Daskalakis. Statistical estimation from dependent data. In International Conference on Machine Learning, pages 5269–5278. PMLR, 2021. 3, 8
[KDDC23] Vardis Kandiros, Constantinos Daskalakis, Yuval Dagan, and Davin Choo. Learning and testing latenttree ising models efficiently. In The Thirty Sixth Annual Conference on Learning Theory, pages 16661729. PMLR, 2023. 7
[KF09] Daphne Koller and Nir Friedman. Probabilistic graphical models: principles and techniques. MIT press, 2009. 1
[KHR22] Frederic Koehler, Alexander Heckett, and Andrej Risteski. Statistical efficiency of score matching: The view from isoperimetry. arXiv preprint arXiv:2210.00726, 2022. 7
[KLR22] Frederic Koehler, Holden Lee, and Andrej Risteski. Sampling approximately low-rank ising models: Mcmc meets variational methods. In Conference on Learning Theory, pages 4945–4988. PMLR, 2022. 5
[KLV24] Frederic Koehler, Holden Lee, and Thuy-Duong Vuong. Efficiently learning and sampling multimodal distributions with data-based initialization. arXiv preprint arXiv:2411.09117, 2024. 1, 2, 6, 7
[KM17] Adam Klivans and Raghu Meka. Learning graphical models using multiplicative weights. In 2017 IEEE 58th Annual Symposium on Foundations of Computer Science (FOCS), pages 343–354. IEEE, 2017. 2, 5, 6, 7, 10, 35
[Kün82] H Künsch. Decay of correlations under dobrushin’s uniqueness condition and its applications. Communications in Mathematical Physics, 84:207–222, 1982. 4
[Kun24] Dmitriy Kunisky. Optimality of glauber dynamics for general-purpose ising model sampling and free energy approximation. In Proceedings of the 2024 Annual ACM-SIAM Symposium on Discrete Algorithms (SODA), pages 5013–5028. SIAM, 2024. 8
[KV23] Frederic Koehler and Thuy-Duong Vuong. Sampling multimodal distributions with the vanilla score: Benefits of data-based initialization. arXiv preprint arXiv:2310.01762, 2023. 7
[Lee23] Holden Lee. Parallelising glauber dynamics. arXiv preprint arXiv:2307.07131, 2023. 5, 8, 9
48

Estimating Ising Models in Total Variation Distance
[Len20] Wilhelm Lenz. Beitršge zum verstšndnis der magnetischen eigenschaften in festen kšrpern. Physikalische Z, 21(613-615):1, 1920. 1
[LMRW24] Kuikui Liu, Sidhanth Mohanty, Amit Rajaraman, and David X Wu. Fast mixing in sparse random ising models. In 2024 IEEE 65th Annual Symposium on Foundations of Computer Science (FOCS), pages 120–128. IEEE, 2024. 14
[LP17] David A Levin and Yuval Peres. Markov chains and mixing times, volume 107. American Mathematical Soc., 2017. 4, 8
[LSV18] Yin Tat Lee, Aaron Sidford, and Santosh S Vempala. Efficient convex optimization with membership oracles. In Conference On Learning Theory, pages 1292–1294. PMLR, 2018. 37
[LVMC18] Andrey Y Lokhov, Marc Vuffray, Sidhant Misra, and Michael Chertkov. Optimal structure and parameter learning of ising models. Science advances, 4(3):e1700791, 2018. 2
[Mar15] Katalin Marton. Logarithmic sobolev inequalities in discrete product spaces: a proof by a transportation cost distance. arXiv preprint arXiv:1507.02803, 2015. 2, 4
[MNH+21] Somabha Mukherjee, Ziang Niu, Sagnik Halder, Bhaswar B Bhattacharya, and George Michailidis. High dimensional logistic regression under network dependence. arXiv preprint arXiv:2110.03200, 2021. 3, 8
[MS10] Andrea Montanari and Amin Saberi. The spread of innovations in social networks. Proceedings of the National Academy of Sciences, 107(47):20196–20201, 2010. 1
[MSB22] Somabha Mukherjee, Jaesung Son, and Bhaswar B Bhattacharya. Estimation in tensor ising models. Information and Inference: A Journal of the IMA, 11(4):1457–1500, 2022. 8
[MWW09] Elchanan Mossel, Dror Weitz, and Nicholas Wormald. On the hardness of sampling independent sets beyond the tree threshold. Probability Theory and Related Fields, 143(3):401–439, 2009. 6
[NKS21] Konstantinos E Nikolakakis, Dionysios S Kalogerias, and Anand D Sarwate. Predictive learning on hidden tree-structured ising models. Journal of Machine Learning Research, 22(59):1–82, 2021. 7
[Pan12] Dmitry Panchenko. The sherrington-kirkpatrick model: an overview. Journal of Statistical Physics, 149(2):362–383, 2012. 5
[Sly10] Allan Sly. Computational transition at the uniqueness threshold. In 2010 IEEE 51st Annual Symposium on Foundations of Computer Science, pages 287–296. IEEE, 2010. 8
[SS12] Allan Sly and Nike Sun. The computational hardness of counting in two-spin models on d-regular graphs. In 2012 IEEE 53rd Annual Symposium on Foundations of Computer Science, pages 361–369. IEEE, 2012. 8
[SS19] Holger Sambale and Arthur Sinulis. Modified log-sobolev inequalities and two-level concentration. arXiv preprint arXiv:1905.06137, 2019. 2, 9, 11, 12, 13, 19
[SW12] Narayana P Santhanam and Martin J Wainwright. Information-theoretic limits of selecting binary graphical models in high dimensions. IEEE Transactions on Information Theory, 58(7):4117–4134, 2012. 2, 7
[T+15] Joel A Tropp et al. An introduction to matrix concentration inequalities. Foundations and Trends® in Machine Learning, 8(1-2):1–230, 2015. 29
[Tal10] Michel Talagrand. Mean field models for spin glasses: Volume I: Basic examples, volume 54. Springer Science & Business Media, 2010. 5
[VH14] Ramon Van Handel. Probability in high dimension. Lecture Notes (Princeton University), 2(3):2–3, 2014. 11
[VMLC16] Marc Vuffray, Sidhant Misra, Andrey Lokhov, and Michael Chertkov. Interaction screening: Efficient and sample-optimal learning of ising models. Advances in neural information processing systems, 29, 2016. 2, 7
[WJ+08] Martin J Wainwright, Michael I Jordan, et al. Graphical models, exponential families, and variational inference. Foundations and Trends® in Machine Learning, 1(1–2):1–305, 2008. 1
[WSD19] Shanshan Wu, Sujay Sanghavi, and Alexandros G Dimakis. Sparse logistic regression learns all discrete pairwise graphical models. Advances in Neural Information Processing Systems, 32, 2019. 2, 5, 7
[XM23] Yuanzhe Xu and Sumit Mukherjee. Inference in ising models on dense regular graphs. The Annals of Statistics, 51(3):1183–1206, 2023. 8
[ZKKW20] Huanyu Zhang, Gautam Kamath, Janardhan Kulkarni, and Steven Wu. Privately learning markov random fields. In International conference on machine learning, pages 11129–11140. PMLR, 2020. 2
49

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:59.891Z
- **Text Length:** 155342 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 49 of 49
