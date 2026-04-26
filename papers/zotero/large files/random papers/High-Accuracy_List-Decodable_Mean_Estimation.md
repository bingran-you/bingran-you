# PDF Document: Chen et al. - 2025 - High-Accuracy List-Decodable Mean Estimation.pdf

**File Path:** Chen et al. - 2025 - High-Accuracy List-Decodable Mean Estimation.pdf

**Processed Date:** 2026-02-10T18:18:28.200Z

**File Size:** 861.38 KB

**Total Pages:** 40

**Extracted Pages:** 40

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3469

**Title:** High-Accuracy List-Decodable Mean Estimation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

High-Accuracy List-Decodable Mean Estimation
Ziyun Chen∗ Spencer Compton† Daniel Kane ‡ Jerry Li§
Abstract
In list-decodable learning, we are given a set of data points such that an α-fraction of these points come from a “nice” distribution D, for some small α ≪ 1, and the goal is to output a short list of candidate solutions, such that at least one element of this list recovers some non-trivial information about D. By now, there is a large body of work on this topic; however, while many algorithms can achieve optimal list size in terms of α, all known algorithms must incur error which decays, in some -
cases quite poorly, with 1/α. In this paper, we ask if this is inherent: is it possible to trade off list size with accuracy in list-decodable learning? More formally, given ε > 0, can we can output a slightly larger list in terms of α and ε, but so that one element of this list has error at most ε with the ground truth? We call this problem high-accuracy list-decodable learning.
Our main result is that non-trivial high-accuracy guarantees, both information-theoretically and algorithmically, are possible for the canonical setting of list-decodable mean estimation of identity-covariance Gaussians. Specifically, we demonstrate that there exists a list of candidate
means of size at most L = exp O log2 1/α
ε2 so that one of the elements of this list has l2
distance at most ε to the true mean. We also design an algorithm that outputs such a list with runtime and sample complexity n = dO(log L) + exp exp(Oe(log L)). In particular, our results demonstrate that in the natural regime where α and ε are both small constants, it is possible to achieve error ≤ 0.01 in fully-polynomial time, where all prior work suffered error which was much larger than 1. We do so by demonstrating a completely novel proof of identifiability, as well as a new algorithmic way -
of leveraging this proof without the sum-of-squares hierarchy, which may be of independent technical interest.
1 Introduction
Learning in the presence of outliers is a central challenge in statistics and machine learning. One of the most challenging, but important, formulations of this problem is the setting of list-decodable learning [BBV08, CSV17]. Here, the learner is given a dataset of n points where all but an αfraction of the data is corrupted, for α ≪ 1, so that the vast majority of the dataset is complete noise. In this setting, it is easy to see that it is generally impossible to recover the ground truth answer.-
 However, the influential work of [CSV17] demonstrated that it is possible to output a short list of candidate solutions, one of which must achieve non-trivial closeness to the ground truth.
∗University of Washington, ziyuncc@cs.washington.edu. Supported by a Simons investigator award 928589, and an NSF grant CCF-2203541. †Stanford University, comptons@stanford.edu. Supported by the NDSEG Fellowship Program, Tselil Schramm’s NSF CAREER Grant no. 2143246, and Gregory Valiant’s Simons Foundation Investigator Award and NSF award AF-2341890. ‡University of California, San Diego, dakane@ucsd.edu. Supported by NSF Medium Award CCF-2107547. §University of Washington, jerryzli@cs.washington.e-
du.
1
arXiv:2511.17822v1 [cs.LG] 21 Nov 2025

While these results are very interesting, they run into a fundamental bottleneck: namely, that the quantitative guarantees these estimates can attain are quite bad. Consider the canonical setting of list-decodable mean estimation: given a dataset of points where an α-fraction of the samples are drawn from a well-behaved distribution (say, an isotropic Gaussian) and the remaining (1 − α)fraction are arbitrary outliers, all known efficient algorithms incur estimation error at least on the order of -
plog(1/α). In particular, the statistical distance of the best estimate in the list and the ground truth Gaussian approaches 1 as α goes to zero. Moreover, it is known that such error is unavoidable, assuming the algorithm outputs a list of size at most poly(1/α) [DK23]. However, these lower bounds leave open an intriguing possibility: namely, that we could potentially achieve significantly higher accuracy—indeed, even arbitrarily good error—if we are willing to tolerate a slightly larger list siz-
e. For instance, suppose that α is some small constant, say α = 0.25. Then, current algorithmic results would only seek to output a constant-sized list, and the error of the best estimator in this list would have error Ω(1). But here, it is very reasonable to ask if, for ε > 0 (say another small constant, e.g. ε = 0.01), it is possible to output a list of slightly larger size that depends mildly on 1/ε, so that the error of the best guess in the list is ε. We call this problem high-accuracy list-d-
ecodable mean estimation. Despite the wealth of work on list-decodable learning, there are no non-trivial guarantees, even information-theoretically, for this natural question. Even basic questions in this vein are unresolved: for instance, prior to this work, it was not even known whether or not there exists a list of dimension-independent size which achieves such a guarantee. In particular, all known identifiability proofs (both efficient and inefficient) for list-decodable learning fundamentall-
y cannot achieve high-accuracy recovery guarantees. Motivated by this discussion, we ask:
What are the statistical and computational limits of high-accuracy list-decodable learning?
Not only is this question natural in its own right, it also has immediate applications to the question of semi-verified learning, first proposed by [CSV17]. Here, we are given a large dataset of noisy data, such that an (1 − α)-fraction of it is arbitrary noise, and in addition, we are given a much smaller subset of k trusted data points, which are guaranteed to be from the true distribution, and the goal is to synthesize the combined information to obtain better guarantees than are achievable wit-
h just the noisy or the trusted data points alone. It is well-known that any algorithm for listdecodable learning implies non-trivial guarantees for this semi-verified setting, as we can use the list-decodable learning to output a small list of hypotheses, and then perform hypothesis selection on this list using our trusted data points. In particular, doing so allows us to obtain non-trivial guarantees for semi-verified learning when the number of trusted points is much smaller than the dimension.-
 However, because previous algorithms for list-decodable learning could only obtain a low-accuracy list, the resulting semi-verified learner also suffered bad error as a result. In contrast, if one could obtain a high-accuracy list-decodable learner, where the size of the list is sufficiently small, then one could hope to obtain significantly better error rates. Indeed, the difficulty of optimally combining information with different levels of error (even in the special case of semi-verified learn-
ing) was observed in [CLC25], where obtaining optimal statistical rates for semi-verified learning was posed as an interesting open question. From a technical perspective, this question is also very interesting. To somewhat oversimplify the state of affairs, all previous techniques for list-decodable learning sought to recover a subset of points that shares α2n points with the true set of good points, usually with some additional regularity conditions on the recovered subset. They then argued that-
 this overlap, plus the regularity
2

conditions, ensured that the statistics of the recovered set of points cannot deviate too far from the ground truth statistics. However, it is not hard to see that, except in very special cases, such an argument fundamentally cannot obtain high-accuracy guarantees, because it cannot distinguish between the ground truth distribution, and the ground truth distribution conditioned on an event of probability α, and the statistics of these two events can differ wildly. This is to all to say that conce-
ptually novel ideas are necessary to obtain any high-accuracy guarantees in the list-decodable learning setting.
1.1 Our Results
In this work, we obtain the first non-trivial guarantees for high-accuracy list-decodable learning. Specifically, we consider the canonical setting of list-decodable mean estimation for isotropic Gaussians in d-dimensions. Formally, we consider the following, standard noise model for list-decodable estimation:
Definition 1.1. We say a set of points S is an α-pure set of points with respect to a distribution D if it contains a subset Sgood ⊂ S so that |Sgood| = α|S|, and Sgood is a collection of independent samples from D.
Note that we make no assumptions about the other points in S; for instance, they could even be chosen adversarially depending on the points in Sgood. We also note that this is also equivalent to saying that S is a (1 − α)-additively corrupted dataset in the terminology of [DKS18], however, we find that for this setting it is slightly more intuitive to measure the fraction of inliers rather than the fraction of outliers.
Definition 1.2 (List-decodable Gaussian mean estimation). Let α, ε > 0, and let μ ∈ Rd. Given a dataset α-pure dataset S with respect to N (μ, I) of size n, output a list of L candidate means μ1, . . . , μL so that with high probability,
miin ∥μi − μ∥2 ≤ ε .
We refer to this quantity ε as the error of the list-decodable learning algorithm.
Our first result is a tight characterization of the information-theoretic limits of this problem. Specifically, we show:
Theorem 1.3 (informal, see Theorem 4.1 and Lemma 4.8). In the setting of Definition 1.2, there is an (inefficient) estimator which, for n sufficiently large, outputs a list of size
L = exp O log2(1/α)
ε2
candidate means, which achieves error ε with high probability. Moreover, any algorithm which
achieves error ε with constant probability must output a list of size exp Ω log2(1/α)
ε2 .
We pause to make several remarks about this result. First, note that the list size is completely independent of the dimension. Second, we observe that in the aforementioned setting where α, ε are both small constants, this is the first result that demonstrates that error which is significantly smaller than a large constant larger than 1 is possible for list-decodable mean estimation. The key
3

technical idea is a new identifiability proof which directly argues that the set of possible candidate means must have bounded size, using ideas from Gaussian process theory and isoperimetry. See Sections 3.1 and 4 for a more in-depth discussion of these ideas. The estimator which achieves the upper bound in Theorem 1.3 is inefficient, and moreover, works in the asymptotic setting, i.e. when n could be very large. Our second result is a new, efficient estimator with non-asymptotic guarantees, whi-
ch achieves the same error:
Theorem 1.4 (informal, see Theorem 5.1). In the setting of Definition 1.2, there is an algorithm which outputs a list of size at most
L = exp O log2(1/α)
ε2
candidate means, which achieves error ε with probability at least 0.99 when the sample size n ≥ dO(log L) + exp(L). The time complexity is dO(log L) + exp exp(O ̃(log L)).
In particular, in the regime where α, ε are small constants, our runtime and sample complexity are fully polynomial, demonstrating that it is possible to achieve small constant error efficiently in the list-learning setting. By combining this with standard hypothesis selection routines, an immediate implication of this is a new algorithm that achieves high-accuracy guarantees for semi-verified learning, with very few trusted points:
Corollary 1.5. Let α, ε > 0, and let μ ∈ Rd. Suppose we are given an α-pure dataset Snoisy for N (μ, I) of size n1, as well as a dataset of Strusted of n2 points drawn independently from N (μ, I). Suppose that
n1 ≥ dO(log(L)) + exp(L) , n2 ≥ Ω log L
ε2 ,
Then, there is an algorithm which runs in time dO(log L) + exp exp(O ̃(log L)), and which outputs μb so that ∥μb − μ∥2 ≤ ε with probability at least 0.99.
We outline a short proof in Section A.1. From a technical perspective, an interesting aspect of our algorithm is that it once again departs from the “standard” paradigm for algorithm design in the list-learning setting. To once again oversimplify, typically, after one has established a complex identifiability proof such as Theorem 1.3, the “standard” approach is to use techniques from SDP hierarchies such as the sum-of-squares hierarchy to convert the proof into an efficient algorithm, see e.g. [K-
SS18, KKK19, RY20, DKK+22a, BK21, IK22]. However, our identifiability proof uses somewhat sophisticated machinery, including the previously mentioned Gaussian isoperimetry, and does not seem to easily lift into SoS. Instead, we propose a two-step algorithm. First, we efficiently identify a low-dimensional subspace which must essentially contain all possible candidate means, by using a new filtering algorithm based on high-degree Hermite polynomials, which may be of independent technical interest. -
Then, within this subspace, we are able to prune the list of possible candidate means down to the correct size. Crucially, this second step appeals to our identifiability theorem (Theorem 1.3) in a black-box fashion, to demonstrate that the number of candidates our pruning procedure can return is small. See Sections 3.2 and 5 for a more detailed description of our algorithm.
4

1.2 Related work
List-decodable learning was first proposed in work of [BBV08, CSV17]. By now there is a rich literature on the topic, including efficient algorithms for list-decodable mean estimation [KSS18, DKS18, RY20, DKK+21, DKK+22b], sparse mean estimation [ZS22, DKK+22a], covariance estimation [IK22], linear regression [KKK19, RY20, BK21, DJKS23], and even more general settings [CP23, KSTV25], as well as computational lower bounds [DKP+21]. However, none of these works achieve high-accuracy guarantees simil-
ar to the ones we are interested in. List-decodable learning is also closely related to the larger literature on robust statistics [Hub92, Tuk60, Ans60, Tuk75], and in particular, the recent wave of interest in algorithmic robust statistics, beginning with work of [DKK+19, LRV16]; we defer the interested reader to [DK23] for a more detailed description of this literature. As described above, list-decodable learning is also closely related to the semi-verified learning problem [CSV17, MV18, ZS23, C-
LC25], however, none of these results bear any technical relevance to our setting.
2 Preliminaries
Throughout this work, for conciseness of exposition, c > 0 will denote any sufficiently small constant, and C > 0 will denote any sufficiently large constant. In different lines, the value of c, C may change. For a matrix M , we will let ∥M ∥2 denote its spectral norm, and we will let ∥M ∥F denote its Frobenius norm. Unless the base is otherwise specified, log refers to the natural log. We will also require the following classic result:
Theorem 2.1 (Sudakov’s Minoration Inequality [Sud69]). For a mean zero Gaussian process, for any ε ≥ 0 we have
E
"
sup
i∈[l]
Xt
#
≥ cεplog(N (T, d, ε))
2.1 Low-accuracy list-decodable mean estimation
As a preprocessing routine, we will first use the previous work that obtains efficiently obtains lowaccuracy list learning guarantees but with a small list size. Specifically, we will need:
Theorem 2.2 ([DKK+22a]). Let α > 0. There is an algorithm which, given an α-pure dataset S with respect to N (μ, I) of size n = dO(log(1/α)), outputs a list of L = O(1/α) candidate means μi, . . . , μL so that with probability at least 0.99, there exists i ∈ [L] so that ∥μi − μ∥2 ≤ O(plog 1/α).
3 Technical overview
The main contributions of our paper are an information-theoretic proof of the near-optimal list size, and an accompanying efficient algorithm. In this section, we highlight the key ideas for both.
5

3.1 Information-theoretic bound
In this section, we will discuss the existence of a small list for high-accuracy list-decodable learning in an infinite-sample setting. These techniques will later yield desired guarantees for the typical finite-sample list-decodable setting. Consider the infinite-sample regime for list-decodable learning: the inliers will be distributed according to the distribution N (μ, I), and the only power of the adversary is where to add the rest of the mass. Hence, in the infinite-sample limit, we expect t-
o see a distribution D where D(x) ≥ α[N (μ, I)](x) ∀x ∈ Rd. When we observe such a distribution, there may be many values of μ ∈ Rd for which a distribution D satisfies this condition. We similarly define a notion for whether a potential mean μ ∈ Rd is consistent with plausibly being an α-fraction of D:
Definition 3.1 (α-consistent). μ ∈ Rd is α-consistent if D(x) ≥ α · [N (μ, I)](x) ∀x ∈ Rd.
We desire to output a small list where every α-consistent μ is close to an item in our list. Our procedure for inefficiently constructing a list for D is simple: while there exists an α-consistent μ that is ε-separated from all previous items in our list, then add any such μ. In this sense, our task boils down to the core question: what is the maximum-size list μ1, . . . , μl of α-consistent and ε-separated μi? Warm-up: sketch for ε = 10plog(1/α). When ε is large enough, the work of Diakonikolas, -
Kane, and Stewart [DKS18] yields a simple yet illuminating answer to our core question. Here we present a proof implied by theirs. For sake of contradiction, consider a list μ1, . . . , μl of α-consistent and 10plog(1/α)-separated μi, where l = 4
α . Let us define the regions R1, . . . , Rl that correspond to regions where the density of N (μi, I) is larger than all other N (μj, I). Without proof, we give intuition that because the μi are all well-separated, at least half of the mass of each N (μi, I) must be in the region Ri where its density is the largest:
PrX∼N(μi,I)[X ∈ Ri] ≥ 1 −
X
j̸=i
PrX∼N(μi,I) [[N (μi, I)](x) ≤ [N (μi, I)](x)] ≥ 1
2
Yet, by definition of α-consistency, the density of D must always be at least α-fraction the density of any N (μi, I). We are then able to conclude a contradiction that the total mass of D must exceed 1, since too much mass must be in each region Ri:
1≥
l
X
i=1
PrX∼D[X ∈ Ri] ≥
l
X
i=1
α PrX∼N(μi,I)[X ∈ Ri] ≥ α · l
2 =2
Accordingly, this proves that any list μ1, . . . , μl of α-consistent and 10plog(1/α)-separated μi must have size at most O(1/α). In the actual proof of [DKS18], the analysis mostly goes as we have just described. Their conceptual emphasis is less explicitly about geometric regions Ri, and more about how each μi has an associated set, and these sets have limited overlap. In our upcoming proof, we will crucially use how our Ri are the Voronoi cells, meaning the regions where μi has the largest dens-
ity. Intuition for our result. Recall how Ri correspond to the regions where N (μi, I) has the
largest density, meaning Ri = {∥x − μi∥2 < ∥x − μj∥2 , ∀j ̸= i}. Let qi = Prx∼N(μi,I)[X ∈ Ri]. In this language, our analysis will follow a similar program to the warm-up but with sharper guarantees: we will closely analyze the qi, and then similarly conclude the sum of qi must exceed 1/α if there are too many α-consistent μi that are ε-separated.
6

Figure 1: The left figure illustrates the regions Ri where their density is the maximum for the points μ1, μ2, μ3, μ4. The right figure focuses on A1 and R′1, illustrating how R′1 contains a fattening of
A1. Since qi ≥ PrX∼N(0,I)[X ∈ R′1], this perspective will enable lower bounds for qi in terms of Ai.
Our first observation is that we find it helpful to localize our analysis to small balls. We use the initial warm-up result to reduce our task to O(1/α) subproblems, where after re-centering we may assume μ is in a bounded ball such that ∥μ∥2 ≤ O(plog(1/α)). We now introduce the following auxiliary probability sequence (pi)i∈[l], defined as pi = Prx∼N(0,I)[x ∈ Ai], where Ai = {x : ⟨x, μi⟩ > ⟨x, μj⟩, ∀j ̸= i}. This region Ai will be a surprisingly insightful reference for analyzing the mass in regi-
ons Ri. Let R′
i correspond to the region Ri translated by −μi. By definition,
qi = PrX∼N(μi,I)[X ∈ Ri] = PrX∼N(0,I)[X ∈ R′
i]
This indicates how relationships between Ai and R′
i may inform the value of qi. We initially
observe that qi ≥ pi via the following simple analysis that R′
i ⊇ Ai:
R′
i = {x : ∥x∥2 < ∥x + (μi − μj)∥2 , ∀j ̸= i} ⊇ {x : ⟨x, μi⟩ > ⟨x, μj⟩, ∀j ̸= i} = Ai
More consequentially, after a short calculation, we observe R′
i actually contains an ε/2-fattening of Ai (e.g. see Fig. 1). Combined with the Gaussian isoperimetry inequality, this will give us a favorable lower bound for qi in terms of pi. For example, in the regime where ε ∈ (0, 1], we use
qi ≥ pi · exp(cεplog(1/pi)). (1)
Let us describe intuition for how this bound leads us towards a proof. For simplicity, consider a list μ1, . . . , μl where the auxiliary probabilities pi happen to be uniform: p1, . . . , pl = 1
l . This is not generally true, but is an insightful example. In this case, using Eq. (1), we could conclude that for any list of size l > exp(C log2(1/α)/ε2), the sum of qi must exceed 1/α and cause a contradiction. Of course, the auxiliary probabilities pi need not be uniform. Moreover, the lower bound of Eq. (1) is not fruitful in many cases, such as an example where (p1, . . . , pl) = ( 1
2, 1
4, 1
8 , . . . ). A key observation, however, is that the values of p cannot be arbitrary. Indeed, p1, . . . , pl correspond to the distribution of the arg max for a Gaussian process supi∈[l]⟨x, μi⟩. With a careful technical argument, we show that the distribution p must be well-spread enough for Eq. (1) to yield a favorable bound, or otherwise the distribution p would cause a violation of Sudakov’s minoration inequality (and
7

hence is not consistent with the distribution of the optimizer of a Gaussian process). Eventually, this yields our desired information-theoretic guarantee.
3.2 Efficient list-decodable learning
Our plan will be to design an algorithm that efficiently leverages our information-theoretic proof. In that proof, our procedure was to simply choose ε-separated, α-consistent μi repeatedly until there were no more such μi. For this section, it is both impossible to know whether a μi is α-consistent from only finite samples, and also non-obvious how to efficiently find μi with our desired properties. As a remedy for this, we will choose μi for which there exists a collection of αn samples, where t-
hese samples centered around μi have empirical moments that are very close to the standard Gaussian N (0, I). Relaxing this slightly, we may look for a μi ∈ Rd and sample weights w1, . . . , wn ∈ [0, 1] with P
i wi = αn, where μi is ε-separated from the previously chosen list entries, and
1
αn
X
i
wi · ⟨Xi − μi, v⟩j ≈ E
X∼N (0,1)
[xj ]
for all ∥v∥2 = 1 and j ∈ {1, . . . , k} for some bounded k. First, we will employ prior work of [DKK+22a] to efficiently reduce our task to O(1/α) subproblems, where each has the restriction ∥μi∥2 ≤ O(plog 1/α). Finding a low-dimensional subspace. Next, we will find a low-dimensional subspace that is close to the true μ with high probability. Crucially, the dimension of this subspace will not depend on d. We will do so via a two-step process. The first step will be an iterative filtering algorithm-
 similar to those in the robust statistics literature [DKK+19] on the empirical high-order Hermite polynomial
tensors of the dataset. More specifically, let Ht(x) : Rd → Rdt denote the t-th order (probabilist’s) Hermite polynomial tensor (see Definition 5.6), for t appropriately chosen but independent of d. By standard results in high-dimensional probability, we know that if we take enough samples, the empirical statistics over the good samples of the Hermite polynomials concentrate very tightly around the population statistics, and the population statistics of the Hermite polynomials satisfies
E
X∼N (μ,I)
[Ht(X) ⊗ Ht(X)]
2
≤ t! · Ct exp √t ∥μ∥2 ,
which is in particular, much smaller than exp(L) for the list size L we are targeting. We show that these facts imply that we can use iterative filtering to remove samples from the dataset so that (1) we remove almost no good points, and (2) the l2-norm of the empirical Hermite polynomial (when treated as a dt-length vector) over the remaining data points is bounded. See Lemma 5.12 for the full analysis. Once we have this, the l2 bound on the degree t empirical Hermite polynomial implies that if w-
e flatten it into a (d × dt−1) matrix, this matrix must have bounded Frobenius norm, and so in particular, it has a small number of large singular values. As a final step, we demonstrate that if we take the union of the span of the left singular vectors with large singular values of these flattened matrices, this subspace must approximately contain μ. Intuitively, this is because our condition implies that in all directions orthogonal to this subspace, the the low-degree moments of dataset match t-
hat of a standard normal Gaussian. However, if there was a candidate mean that was not contained in this subspace, then this would necessarily induce a large moment, and thus we can conclude that no such candidate mean can exist.
8

Searching for moment-matching candidates. With a low-dimensional subspace in hand, we may now afford running times with exponential dependence in the dimension of the subspace. Thus, we may exhaustively search over a net for points that approximately match moments as desired. Checking whether a fixed center has sample weights w1, . . . , wn that match moments is an efficiently-solvable convex program. This subroutine produces an ε/2-separated list of points μ1, . . . , μl satisfying our moment-ma-
tching condition, and at least one of these points will be ε-close to the true μ with high probability. Bounding list size via fooling. The main remaining question is whether this list μ1, . . . , μl must be small. We will show any collection of ε/2-separated μi that satisfy this moment condition must have bounded size. Recall Ri ≜ {∥x − μi∥ < ∥x − μj∥}: the region where N (μi, I) has the largest density. In our information-theoretic proof, we showed that in the case where the ε-separated μi were -
all α-consistent, then for large enough l there is a contradiction
1≥
l
X
i=1
PrX∼D[X ∈ Ri] ≥
l
X
i=1
α · PrX∼N(μi,I)[X ∈ Ri] > 1.
In the original proof, most of the difficulty was in the last step of the inequality. When we adapt this argument for moment-matching μi, the main difficulty is the second inequality. For any moment-matching μi, let w(i) be the corresponding vector of sample weights in [0, 1], and let Di be the normalized empirical distribution over these samples: Di = 1
αn
Pn
j=1 w(i)
j · Xj. Our same information-theoretic proof will show that our list of moment-matching μi cannot be too large, if we prove
l
X
i=1
α · PrX∼Di [X ∈ Ri] ≈
l
X
i=1
α · PrX∼N(μi,I)[X ∈ Ri].
Meaning, we must prove the normalized empirical distribution from w(i) has approximately as many points in Ri as the distribution N (μi, I). In general, just because the lower-order moments of Di match the moments of N (μi, I), does not mean the proportion of their samples within some region will be approximately the same. However, observe that our particular region Ri is exactly the intersection of of l − 1 halfspaces. There is a rich body of work in pseudorandomness (e.g. [Baz09, Bra08, DGJ+10, -
DKN10, KM13, KKM13]) and more recently, testable learning (e.g. [RV23, GKK23, DKK+23, KSV24, STW24, DKLZ24]) studying how matching moments implies fooling concept classes like halfspaces; hence, distributions that match moments will have roughly the same proportion of samples within an intersection of halfspaces. The works of [DKN10, GKK23] guide us towards the technical fooling result we desire. However, we cannot immediately use either of these results without modification, since our application-
 only matches moments approximately (the statement of [DKN10] uses exact matching), and we desire tighter guarantees for super-constant numbers of halfspaces than given by [GKK23]. All together, since we efficiently find a list μ1, . . . , μl where each μi has a corresponding sample weights w(i) that match moments with N (μi, I), and since moment-matching fools the intersection of halfspaces, then our information-theoretic proof bounds the size of our list.
4 Information-theoretic bound
In this section, we will show the existence of a small list for high-accuracy list-decodable learning. We will discuss an infinite-sample setting, but this will later give us results that yield the desired
9

guarantee for the typical list-decodable setting. Recall the notion of α-consistency (Definition 3.1) describing whether a potential mean μ ∈ Rd is consistent with plausibly being an α-fraction of D. We now state our main information-theoretic result for list-decodable mean estimation:
Theorem 4.1. Consider any distribution D over Rd, inlier parameter α ∈ (0, 1/2], and accuracy parameter ε ∈ (0, 10plog(1/α)]. There exists a list L such that for any α-consistent μ ∈ Rd, there is a μ′ ∈ L such that ∥μ − μ′∥2 ≤ ε. Further, L has size at most exp(C log2(1/α)/ε2) for sufficiently large C > 0.
This is an information-theoretic version of our eventual goal; we will not worry about leveraging only a finite number of samples or having desirable runtime. Diakonikolas, Kane, and Stewart [DKS18] showed that you may learn a list of size O(1/α) with accuracy ∥μ − μ′∥2 ≤ O(plog(1/α)). Our improvement in this work is improving the accuracy beyond this barrier. The information-theoretic version of the classical result is quite simple, and we will present a sketch of a proof implied by theirs as a w-
arm-up.
4.1 Warm-up: sketch for learning up to accuracy O(plog(1/α))
Lemma 4.2. Consider any distribution D over Rd and an inlier parameter α ∈ (0, 1/2]. There exists a list L such that for any α-consistent μ ∈ Rd, there is a μ′ ∈ L such that ∥μ − μ′∥2 ≤ 10plog(1/α). Further, L has size at most 4
α.
Proof. Suppose there existed a list of means L = [μ1, . . . , μl], where all μi are α-consistent, and all pairs are 10plog(1/α)-separated (meaning, ∥μi − μj∥2 ≥ 10plog(1/α) for i ̸= j). We will show by contradiction that it is impossible for such a list to have size ⌈4/α⌉. Let us define regions R1, . . . , Rl that correspond to regions where the density of N (μi, I) is larger than all other N (μj, I) for i ̸= j. First, we observe how most of the density of N (μi, I) is contained within Ri:
PrX∼N(μi,I)[X ∈ Ri] ≥ 1 −
X
j̸=i
PrX∼N(μi,I) [[N (μi, I)](x) ≤ [N (μi, I)](x)]
=1−
X
j̸=i
PrZ∼N(0,1)[z ≥ ∥μi − μj∥] ≥ 1 − 4
α · PrZ∼N(0,1)
h
z ≥ 10plog(1/α)
i
≥1− 4
α · e−50 log(1/α) ≥ 1
2
After this observation, we may conclude by definition of α-consistency,
1≥
l
X
i=1
PrX∼D[X ∈ Ri] ≥
l
X
i=1
α · PrX∼N(μi,I)[X ∈ Ri] ≥ l · α · 1
2 = 2,
which is a contradiction. Let us define qi ≜ PrX∼N(μi,I)[X ∈ Ri]. In summary, we have shown that a list of too many well-separated means that are α-consistent would cause the sum of qi to be large enough to cause a contradiction.
10

This proof sketch is enough to easily show the information-theoretic existence of a small list. Let us construct the list iteratively, starting with an empty list L = []. At each step, if there is an α-consistent μ that it is at least 10plog(1/α) away from everything in L, then arbitrarily add any such μ. Otherwise, our list is finished. By our above proof, this will terminate in less than 4
α steps,
and hence yield a list of size ≤ 4
α.
4.2 Our result: learning up to accuracy ε
We will now detail how to get a list with better accuracy ε. First, we may use the previous warm-up as a subroutine, to give us a preliminary list L0 where |L0| ≤ 4
α , and any α-consistent μ will be
within 10plog(1/α) distance of some element in L0. This will let us consider separately learning within balls of radius 10plog(1/α). Focusing within these balls may not immediately seem helpful, but will prove useful later. Recall Ri = {∥x − μi∥2 < ∥x − μj∥2 , ∀j ̸= i} and qi = Prx∼N(μi,I)[X ∈ Ri]. Our analysis will follow a similar program to the warm-up but with sharper guarantees: we will closely analyze the qi, and then similarly conclude the sum of qi must exceed 1/α if there are too many α-c-
onsistent μ that are β-separated. (Using β = ε will clearly give some helpful guarantee, but later we will get sharper results by using this for general β.) First, we lower bound the sum of qi:
Theorem 4.3. Assume μ1 . . . , μl are β-separated and ∥μi∥ ≤ r, where l ≥ 2Cr4/β6 for sufficiently large C > 0, 0 < α ≤ 1
2 , and 0 < β ≤ Cplog(1/α). Then,
poly(1/α) ·
L
X
i=1
qi ≥ 2
cβ3 r2
√log l. (2)
Deferring the proof of Theorem 4.3 to Section 4.2.1, let us first see how this implies Theorem 4.1. Concluding Theorem 4.1. First, use Lemma 4.2 to obtain a list L0 of size at most 4
α such
that any α-consistent μ is within r0 ≜ 10plog(1/α) of some item in L0. For each μ′ ∈ L0, we will create a sub-list L′. Without loss of generality, translate the distribution so μ′ is the origin. We now aim for a list with error at most ε. Our goal will be complete if for any α-consistent μ where ∥μ − μ′∥ ≤ r0, there is a μ∗ ∈ L′ where ∥μ − μ∗∥ ≤ ε. A naive application of Theorem 4.3 would give some upper bound on the size of each list μ1, . . . , μl by setting r = 10plog(1/α) and β = ε. This would-
 yield a list upper bound of size exp(C log4(1/α)/ε6). However, we may apply Theorem 4.3 more carefully and do better. Consider the union of all sub-lists to be μ1, . . . , μl, where all μi are α-consistent and ε-separated. Let |Mi| denote the size of the smallest r0
2i -cover of the list μ1, . . . , μl. By construction, |M0| ≤ 4/α.
Claim 4.4. For any positive integer i, it holds that |Mi| ≤ |Mi−1| · exp(C log2(1/α)/r2
i ).
Proof. For constructing the ri ≜ r0
2i -cover, we may separately consider covering the list entries within
the ri−1-radius balls centered at the cover centers Mi−1. The covering number within each ri−1-ball is at most the size of the largest set of ri-separated μj in this ball. Suppose there were a collection of l′ items μj in our list that are ri-separated in this ri−1-radius ball. Then, using Theorem 4.3 with
11

r = ri−1 and β = ri, we conclude:
l′
X
i=1
α PrX∼D[X ∈ Ri] ≤ 1 ⇐⇒
l′
X
i=1
qi ≤ 1/α
=⇒ 2
cri3
ri2−1
√log l′
· poly(α) ≤ 1
⇐⇒ 2ri
√log l′ · poly(α) ≤ 1
=⇒ l′ ≤ exp(C log2(1/α)/r2
i)
Let i∗ ≜ ⌈log2( r0
ε/4 )⌉. Observe how it must hold that l = |Mi∗|, since the list μ1, . . . , μl is ε-separated and ri∗ < ε/2. Using Claim 4.4, we may conclude our proof by computing
l = |Mi∗ | = |M0| · Πi∗
i=1
|Mi|
|Mi−1|
≤4
α · Πi∗
i=1 exp(C log2(1/α)/r2
i)
≤ exp(C log2(1/α)/ε2).
This completes the proof of our information-theoretic result. Remark for finite samples. Let us roughly discuss how this proof technique would yield results for the typical list-decodable setting. (We only discuss roughly since the later result Theorem 5.1 will directly prove this.) Observe how the above proof mostly leverages that if some μ′ is α-consistent, then PrX∼D[X ∈ Ri] ≥ α PrX∼N(μ′,I)[X ∈ Ri]. Imagine if we defined a similar notion of being finitely-(α, η, l)-consistent: where a μ′ is fin-
itely-(α, η, l)-consistent on a normalized empirical distribution D′ if PrX∼D′[X ∈ H] ≥ α PrX∼N(μi,I)[X ∈ H] − η, for all H that are the intersection of at most l halfspaces. Since the intersection of l halfspaces is a concept class with bounded VC dimension, we may show that the true μ will be finitely-(α, η, l)-consistent for a sufficiently large n with high probability. Moreover, this condition is enough for our proof to work: we could follow a similar proof structure as before, repeatedly choo-
sing any μ′ that is ε-separated from the existing list and is finitely-(α, η, l)-consistent, until there is no such μ′. Employing this plan efficiently poses numerous challenges that we approach in Section 5.
4.2.1 Proof of Theorem 4.3
Proof. We now prove the main theorem for our identifiability result. We consider the following auxiliary probability sequence (pi)i∈[l], defined as pi = Prx∼N(0,I)[x ∈ Ai], where Ai = {x : ⟨x, μi⟩ > ⟨x, μj⟩, ∀j ̸= i}. Let R′
i correspond to the region Ri translated by −μi. By definition,
qi = PrX∼N(μi,I)[X ∈ Ri] = PrX∼N(0,I)[X ∈ R′
i] = PrX∼N(0,I)[∥x∥2 < ∥x − μj + μi∥, ∀j ̸= i].
We initially observe that qi ≥ pi via the following simple analysis that R′
i ⊇ Ai:
R′
i = {x : ∥x∥2 < ∥x + (μi − μj)∥2 , ∀j ̸= i} ⊇ {x : ⟨x, μi⟩ > ⟨x, μj⟩, ∀j ̸= i} = Ai
More consequentially, we may show R′
i actually contains an fattening of Ai; combined with the Gaussian isoperimetry inequality, this will give us a favorable lower bound for qi in terms of pi:
12

Lemma 4.5. qi ≥ αc′ · pi · exp(cβplog(1/pi)).
Proof. We show that R′
i contains a fattening of Ai:
Claim 4.6. (Ai)β/2 ≜ {x : dist(x, Ai) ≤ β} ⊆ {x : ∥x∥2 < ∥x − μj + μi∥2 , ∀j ̸= i} = R′
i
Proof. For y ∈ (Ai)β/2, write it as x + h, where x ∈ Ai and ∥h∥ ≤ β/2. Then for any j ̸= i
⟨y, μj − μi⟩ = ⟨x, μj − μi⟩ + ⟨h, μj − μi⟩ < ⟨h, μj − μi⟩ ≤ ∥h∥ ∥μi − μj∥ ≤ 1
2 ∥μj − μi∥2 ,
which implies ∥y∥2 < ∥y − μj + μi∥2 as we desired.
Since Prx∈N(0,I)[x ∈ Ai] = pi, we will use the Gaussian isoperimetry inequality to get a lower bound for the measure of the fattening Prx∈N(0,I)[x ∈ (Ai)β/2]. We use the following implication of the Gaussian isoperimetry inequality and defer the proof to Section A.2:
Lemma 4.7 (Gaussian isoperimetry). For a measurable set A in Rn under standard gaussian measure μ, let Aβ = {x ∈ Rn : dist(x, A) ≤ β}. If μ(A) ≤ 1/2, then
μ(Aβ) ≥ μ(A) · exp −c′(1 + β2) + cβplog(1/μ(A)) .
Using Claim 4.6, Lemma 4.7, β ≤ O(plog(1/α)), and that pi ≤ 1
2 by symmetry, we conclude
qi ≥ Prx∈N(0,I)[x ∈ (Ai)β/2] ≥ αc′ · pi · exp cβplog(1/pi) ,
which completes the proof of our lemma.
We now hope to use Lemma 4.5 to prove Theorem 4.3. We remark that if p1, . . . , pl could be any arbitrary non-negative values that sum to 1, then our approach would not yield Theorem 4.3. For example, if β = 1 and our vector p was the infinite-length vector 1
2, 1
4 , . . . , then the quantity
P
i pi · exp(cβplog(1/pi)) from Lemma 4.5 would converge to a constant, yet our desired bound for Theorem 4.3 will go to infinity as l → ∞. Luckily for our approach, the values of pi are not arbitrary. Each pi corresponds to probability that μi is the maximizer for a Gaussian process maxi⟨x, μi⟩ for X ∼ N (0, I). We will prove this distribution of maximizers is constrained in a way that enforces the distribution p must take values such that the quantity P
i pi · exp(cβplog(1/pi)) grows according to our desired theorem.
Warm-up intuition: infinite dyadic p = [1/2, 1/4, . . . ] is impossible. As a warm-up, let us quickly show why it is impossible for the vector p to take value [1/2, 1/4, . . . ]. By Sudakov’s minoration inequality (Theorem 2.1), we know the expected maximum E[supi∈[l]⟨x, μi⟩] ≥ cβplog(l) is infinite in this example where l is infinite. However, if p is dyadic and corresponds to the distribution of maximizers, then we may conclude this expected maximum is finite:
E
X∼N (0,I)
[sup
i∈[l]
⟨x, μi⟩] =
∞
X
i=1
E
X∼N (0,I)
[1μi maximizes · ⟨x, μt⟩]
≤
∞
X
i=1
r
E
X∼N (0,I)
[12
μi maximizes] · E
X∼N (0,I)
[⟨x, μi⟩2] (via Cauchy–Schwarz)
=
∞
X
i=1
q
2−i · ∥μi∥2 ≤ Cr
13

This contradicts the lower bound from Sudakov’s minoration inequality, and shows that p could not possibly take the value of this infinite dyadic distribution. In general, this gives some sense that the distribution of p must be well-spread in a way that hopefully gives us a favorable lower bound for P
i pi · exp(cβplog(1/pi)). In the remaining proof, we will judiciously apply Holder’s inequality in a way that attains our desired result. General proof. By Lemma 4.5, we know
X
i∈[l]
qi ≥ αc′ ·
X
i∈[l]
pi · exp(βplog(1/pi)).
We use Holder’s inequality on the expectation of the Gaussian process, using positive constants s, t that satisfy 1
s+1
t = 1 (we choose s, t later),
X
i∈[l]
E[1x∈Ai · ⟨x, μt⟩] ≤
X
i∈[l]
(E[1x∈Ai ])1/t · E[|⟨x, μt⟩|s]1/s =
X
i∈[l]
(pi)1−1/s · O r√s .
By Sudakov’s minoration inequality (Theorem 2.1) we know the left-hand side is at least
cβ√log l. We will choose s = c2β2 log l
9r2 , which satisfies s > 1 by our condition on l. Using this
choice of s:
cβplog l ≤
X
i∈[l]
(pi)1−1/s · O(r√s) =⇒
X
i∈[l]
(pi)1−1/s ≥ 3.
We observe this sum is still large even when restricting to S = {i ∈ [l] : pi ≥ 1/l2}:
X
i∈S
(pi)1−1/s =
X
i∈[l]
(pi)1−1/s −
X
i∈/S
(pi)1−1/s ≥ 3 −
X
i∈/S
(pi)1−1/s
≥3−
X
i∈/S
(pi)1/2 ≥ 3 −
X
i∈/S
1/l ≥ 2 (using s ≥ 2 from our condition on l)
Further, for i ∈ S, we have (pi)1−1/s ≤ pi · exp 18r2√log(1/pi)
c2β2√log l , this is because
(pi)1−1/s ≤ pi · exp 18r2plog(1/pi)
c2β2√log l
!
⇐= (1/pi)1/s ≤ exp 18r2plog(1/pi)
c2β2√log l
!
⇐= 9r2
c2β2 log l log(1/pi) ≤ 18r2plog(1/pi)
c2β2√log l
⇐= plog(1/pi) ≤ 2plog l
⇐= pi ≥ 1/l4.
Thus,
X
i∈[l]
pi · exp 18r2plog(1/pi)
c2β2√log l
!
≥
X
i∈S
pi · exp 18r2plog(1/pi)
c2β2√log l
!
≥
X
i∈S
p1−1/s
i ≥ 2. (3)
14

With this, we may conclude the proof of our theorem:
α−c′ ·
X
i∈[l]
qi ≥
X
i∈[l]
pi · exp(βplog(1/pi))
≥


X
i∈[l]
pi · exp 18r2plog(1/pi)
c2β2√log l
!


c2 β 3 18r2
√log l
(Jensen’s inequality; l chosen s.t. c2β3
18r2
√log l ≥ 1)
≥2
c2 β 3 18r2
√log l. (via Eq. (3))
4.3 List size lower bound
Theorem 1.5 of [DKS18] also shows how it is information-theoretically impossible to get better than Ω(plog 1/α) accuracy with a list of only size poly(1/α). For a general lower bound in terms of the list size required for ε accuracy, the same construction of [DKS18] will yield a lower bound qualitatively similar to our upper bound in the previous section. Interestingly, we note that for
list-decodable learning up to accuracy ε, list size of 2Ω(log2(1/α)/ε2) was necessary. Observe how when ε = Θ(plog(1/α)), this size is poly(1/α), as expected. The proof for this lower bound follows the proof strategy of Proposition 5.11 in [DK23]; we present this for completeness in Section A.3.
Lemma 4.8. Let 0 < ε <
√log(1/2α)
2 and 0 < α < 1/3. There exists a distribution D such that for any list containing an ε-close mean for all possible α-consistent means, the list must have size at least exp(c log2(1/α)/ε2).
5 Efficient list-decodable learning
In this section, we will design an algorithm that efficiently constructs a list of size comparable to our information-theoretic upper bound of Theorem 4.1, given access to a finite number of samples. We gave an overview of the proof in Section 3.2, and formally state our result here:
Theorem 5.1. In the setting of Definition 1.2, there is an algorithm which outputs a list of at most
L = exp O log2(1/α)
ε2
candidate means, which achieves error ε with probability at least 0.99 when n ≥ dC log2(1/α)/ε2 + exp(L). The time complexity is
dC log2(1/α)/ε2 + exp exp Oe log2(1/α)
ε2 .
In Section 5.1, we will find a low-dimensional subspace that is close to μ with high probability. In Section 5.2, we focus on this low-dimensional subspace and exhaustively search over a net for points that approximately match moments as desired. In Section 5.3, we will detail the required technical result for how approximately matching moments fools halfspaces. In Section 5.4, we finally combine these ingredients to conclude our algorithm.
15

5.1 Subspace learning
In this section, we give the first key algorithmic subroutine we will need for our efficient algorithm, namely, a method which allows us to recover a low-dimensional subspace which approximately contains all of the candidate means. More formally, we show:
Theorem 5.2. Let α, ε > 0. Let S be an α-pure dataset with respect to N (μ, I) of size
n = d log(1/α)
ε
Ω(log2(1/α)/ε2)
,
and assume that ∥μ∥2 ≤ Cplog(1/α). There is an algorithm which, given S, outputs a subspace
V ⊂ Rd of dimensionality kO(k), where k = 100 log2(1/α)/ε2, so that with probability at least 0.99, we have that ∥ΠV ⊥μ∥2 ≤ ε. Moreover, this algorithm runs in time poly(n).
We begin with preliminaries, then give an overview, and finally detail our analysis.
5.1.1 Tensor preliminaries
We will often have to work with high order tensors, so here we will record some useful notation for them.
Definition 5.3 (Tensor indexing). Let t be a positive integer. For any partition of [t] into sets S1, . . . , Sk, and any tensors T1, . . . , Tk of orders |S1|, . . . , |Sk| respectively, we let
T S1
1 ⊗ . . . ⊗ T Sk
k
to denote the order t tensor obtained by taking the tensor product of T1 in the indices S1 with T2 in the indices S2, etc.
Definition 5.4 (Tensor symmetrization). Let A, B be tensors of rank t1 and t2 respectively over Rd. We let the symmetrization of A ⊗ B, denoted Sym(A ⊗ B) be given by
Sym(A ⊗ B) = 1
t1+t2 t1
X
[t]=S1 ⊔S2 |S1|=t1,S2=t2
AS1 ⊗ BS2 ,
that is, we sum over all possible ways of combining A and B into a rank t1 + t2 tensor.
We note that we will be sometimes a bit loose, and associate a rank t tensor over Rd with a
vector in Rdt in the natural way. We will also need the following way of associating tensors with a canonical matrix:
Definition 5.5. Let t ≥ 1. For any order t tensor T , we let flat(T ) be the Rd × Rdt−1 flattening of
T on its first mode. That is, flat(u ⊗ H) = uH⊤ for any H ∈ Rdt−1, and we can linearly extend the definition of flat onto all rank-t tensors.
16

Hermite polynomial tensors Our algorithm will heavily leverage the structure of the Hermite polynomial tensors, the natural multivariate analog of the univariate Hermite polynomials.
Definition 5.6 (The (probabilist’s) Hermite polynomial tensor). For all non-negative integers k, let hk : R → R denote the degree-k (probabilist’s) Hermite polynomial, defined recursively by h0 = 1, h1(x) = x, and hk+1(x) = xhk(x) − khk−1(x) .
Similarly, The degree-k Hermite polynomial tensor Hk : Rd → Rd ⊗k is similarly defined recursively by H0 = 1, H1(x) = x, and
Hk+1(x) = Sym(x ⊗ Hk(x)) − kSym(I ⊗ Hk−1(x)) . (4)
The Hermite polynomials have several important properties, some of which we record below:
Claim 5.7 (Properties of Hermite polynomials). Fix any integer k ≥ 0. Then, we have the following:
• For any x, y ∈ R, we have that
hk(x + y) =
k
X
j=0
k
j yk−jhj(x) .
• For any v ∈ Rd, we have that ⟨Hk(x), v⊗k⟩ = hk(⟨v, x⟩).
• Let μ ∈ R. Then EX∼N(μ,1)[hk(X)] = μk. Similarly, for μ ∈ Rd, we have that
E
X∼N (μ,I)
[Hk(X)] = μ⊗k .
• For all k, l, we have that
E
X∼N (0,1)
[hk(x)hl(x)] = k! · δk=l .
The following is a useful identity for the second moment of Hermite polynomial tensor, which is a special case of the formula derived in [Kan21] (see also Claim 9.6 of [LL22] for this specialization):
Lemma 5.8. For all k ≥ 0, and for all μ ∈ Rd, we have
E
X∼N (μ,I)
[Hk(X) ⊗ Hk(X)] =
X
S1,S2⊂[k],|S1|=|S2|
X
Matchings P of S1,S2
O
{a,b}∈P
I(a,k+b) O
c∈/S1
μ(c) O
c∈/S2
μ(k+c). (5)
An important implication is the following pair of second moment bounds for Hermite polynomials under Gaussians with non-zero mean:
Lemma 5.9. For any μ ∈ R and integer k ≥ μ2, we have
E
X∼N (0,1)
h2
k(X + μ) = k! · exp(Θ(
√
k|μ|))
17

Proof. By explicit calculation, we have:
1
k! · E
X∼N (0,1)
h2
k(X + μ) =
k
X
j=0
k
j μk−j
2
· j!
k!
=
k
X
j=0
k!
((k − j)!)2 · j! μ2(k−j)
=
k
X
j=0
k!
(j!)2 · (k − j)! μ2j
=
k
X
j=0
k
j
1
j! · μ2j.
To show the upper bound, since k
j ≤ kj
j! , we have that
1
k! · E
X∼N (0,1)
h2
k(X + μ) ≤
k
X
j=0
(kμ2)j
(j!)2 ≤ I0(2
√
k|μ|).
where I0(x) = P∞
j=0
(1
4 x2)j
(j!)2 is the modified Bessel function of the first kind. Then, since I0(x) =
(1 + o(1)) ex
√2πx (see e.g. 10.30 of [Olv10]), this implies the upper bound.
To obtain the lower bound, we let j = ⌈
√k|μ|
2 ⌉(≤ k/2). Then, we have that
k
j
1
j! μ2j ≥ (k − j)j · μ2j
j2j ≥ kμ2
2j2
j
≥ 2j = exp(Ω(
√
k|μ|)),
which gives us the lower bound.
Lemma 5.10.
E
X∼N (μ,I)
[Hk(X) ⊗ Hk(X)]
2
= k! exp(O(
√
k ∥μ∥)).
Proof. By Lemma 5.8,
E
X∼N (μ,I)
[Hk(X) ⊗ Hk(X)] =
X
S1,S2⊂[k],|S1|=|S2|
X
Matchings P of S1,S2
O
{a,b}∈P
I(a,k+b) O
c∈/S1
μ(c) O
c∈/S2
μ(k+c).
Taking the operator norm on both sides, we get
E
X∼N (μ,I)
[Hk(X) ⊗ Hk(X)] ≤
k
X
j=0
X
S1,S2⊂[k],|S1|=|S2|=j
X
Matchings P of S1,S2
∥μ∥2(k−j)
=
k
X
j=0
k
j
2
j! · ∥μ∥2(k−j)
18

which is same to the term in Lemma 5.9 up to factor k!, so we get this is upper bounded by
k! · exp(Θ(√k ∥μ∥)) as desired.
5.1.2 Overview
Overview of Algorithm Let k = 100 log2(1/α)/ε2, γ = e−100k and λ = e−10k. Recall that Ht denotes the t-th Hermite polynomial tensor. For any set T ⊆ S, we define
Mt(T ) := 1
|T |
X
i∈T
Ht(Xi) .
Our algorithm proceeds in two steps. First, we perform an iterative filtering algorithm to obtain a subset T of S with the guarantee that (i) we have removed essentially no good points from T , and (ii) ∥Mt(T )∥2 ≤ 1
γ (Cplog(1/α))t, for all t ∈ [2k].
Once we have done this, we show that a simple spectral method applied on a flattening of the moment tensors allows us to extract the desired subspace. Formally, observe that every Mt can be written naturally as (d × dt−1)-sized matrix by flattening the first tensor mode, and denote this matrix flat(Mt(T )). Our algorithm will simply take the top left singular vectors of flat(Mt(T )) for all t = 1, . . . , 2k, and take the span of their union. We provide formal pseudocode for this algorithm in Algo-
rithm 1. In the remaining proof, may use Mt as shorthand for Mt(T ).
Algorithm 1 Subspace learning algorithm
Let T = [n]. while there exists a t ∈ {1, 2, ..., 2k} such that ∥Mt(T )∥2 > γ−3t!(Cplog(1/α))t do For every i ∈ T , let
τi = max 0, ⟨Ht(Xi), Mt(T )⟩ + γ−2t! Cplog 1/α
t
· ∥Mt∥2 .
Sample i ∝ τi, and remove i from T . end while
for t = 1, 2...2k do
Let Qt denote the set of the st left singular vectors of flat(Mt(T )), where
st = γ−6(t!)2(Cplog(1/α))2t/λ2 .
end for Return
V = span
2k
[
i=1
Qt
!
.
Regularity condition Before we analyze the algorithm, it will be convenient to establish the following regularity condition on the good set of points. Recall that by assumption, we know that there exists a set Sgood ⊂ S so that |Sgood| = αn, and Sgood is a set of independent draws from N (μ, I). We will require the following lemma, which follows by Lemma A.1, Lemma 5.10 (for Eq. (6)) and Lemma A.2 (for Eqs. (7) and (8)).
19

Lemma 5.11. Let X1, . . . , Xm ∼ N (μ, I), and let k be a positive integer. Then, for
n ≥ (dkplog(1/α))Ω(k) ,
with probability 0.99 the following holds: for all t ≤ 2k, and for all u ∈ Rdt, we have that
1
m
m
X
i=1
⟨u, Hk(Xi)⟩2 ≤ t! · Ct · exp √t ∥μ∥2 · ∥u∥2
2 , (6)
for some universal constant C, and for all unit vector w, we have that
1
m
m
X
i=1
h4
k(⟨Xi, w⟩) ≤ E
X∼N (μ,I)
[h4
k(⟨X, w⟩)] + O(1) (7)
1
m
m
X
i=1
h2
k(⟨Xi, w⟩) ≥ E
X∼N (μ,I)
[h2
k(⟨X, w⟩)] − O(1) (8)
For the rest of the proof, condition on the event that Lemma 5.11 holds for Sgood. By our condition on n, this happens with probability at least 0.999.
5.1.3 Analysis of the filter
First, observe that the filtering routine clearly runs in time which is polynomial in n, since each loop runs in time poly(n, dk) = poly(n), and we will run for at most n loops, since we remove one data point each time we run the filter. Our main result for the filtering subroutine is the following:
Lemma 5.12. For the output set T , we have ∥Mt(T )∥2 ≤ 1
γ (Cplog(1/α))t and with probability
1 − δ, we have |Sgood ∩ T | ≥ (1 − δ)|Sgood|, where δ = γ1/2
α = e−Ω(k).
Proof. By the termination condition of the filter, we have that ∥Mt(T )∥2 ≤ 1
γ (Cplog(1/α))t.
Thus, it remains to prove the second statement. We first observe that for any iteration for t, we have
1
|T |
X
i∈T
τi ≥ 1
|T |
X
i∈T
⟨Ht(Xi), Mt(T )⟩
= ∥Mt(T )∥2
2.
On other other hand, we claim that
1
|T |
X
i∈Sgood
τi ≤ γ ∥Mt(T )∥2
2 , (9)
where for simplicity, we say that τi = 0 for any i that has already been removed from the dataset. Given this, we have that P
i∈Sgood τi
P
i∈T τi
≤γ,
20

which implies that if we define the potential function
Φ := |T | + 1
γ (|Sgood| − |Sgood ∩ T |) ,
then this potential function is a super-martingale. Therefore, with probability 1 − γ1/2, at termination, Φ ≤ γ−1/2n, which implies that |Sgood ∩ T | ≥ (1 − γ1/2
α )|Sgood|, as claimed. Thus it suffices to prove (9). First, by Jensen’s inequality, we observe that
1
|Sgood|
X
i∈Sgood
⟨Mt, Ht(Xi)⟩ ≤


1
|Sgood|
X
i∈Sgood
⟨Mt, Ht(Xi)⟩2


1/2
≤ t!Ct exp √t ∥μ∥2
1/2
∥Mt∥2
≪γ
10 ∥Mt∥2
2.
Let At denote the set of points in Sgood satisfying ⟨Mt, Ht(Xi)⟩ ≤ −γ−2t! Cplog 1/α
t
∥Mt∥2. By Chebyshev’s inequality with Lemma 5.11,
|At|
|Sgood| ≤ t!Ct exp √t ∥μ∥2 · ∥Mt∥2
2
γ−2t!(Cplog 1/α)t 2
∥Mt∥2
2
≪ γ3 ,
by our choice of γ. In particular, this implies that
1
|Sgood|
X
i∈At
⟨Mt, Ht(Xi)⟩ ≤ γ1.5 · t!Ct exp √t ∥μ∥2
1/2
∥Mt∥2
≪γ
10 ∥Mt∥2
2.
Thus, overall, we have that
1
Sgood
X
i∈Sgood
τi = 1
|Sgood|
X
i∈Sgood \At
⟨Mt, Ht(Xi)⟩ + γ−2t!(Cplog 1/α)t ∥Mt∥2
≤γ
5 ∥Mt∥2
2 + γ−2t!(Cplog 1/α)t ∥Mt∥2
≪ γ ∥Mt∥2
2,
as claimed. This completes the proof.
5.1.4 Analysis of the spectral truncation
First, notice that since ∥Mt(T )∥2
2 ≤ γ−6t!(Cplog(1/α))2t, this implies that the (st + 1)-th singular value of flat(Mt(T )) is at most λ. By the definition of Qt, for any 1 ≤ t ≤ 2k, we have for any
u ∈ Rd : u ⊥ V and H ∈ Rdt−1 ,
⟨Mt(T ), u ⊗ H⟩ ≤ λ ∥u∥2 ∥H∥2 .
We next require the following lemma:
21

Lemma 5.13. For any unit vector w ∈ Rd that satisfies w ⊥ V , we have
1
|T |
X
i∈T
h2
k(⟨Xi, w⟩) ≤ 2 E
x∼N (0,1)
[h2
k(x)] = 2 · k!.
Proof. We decompose h2
k(x) by Hermite polynomials: h2
k(x) = P2k
t=0 ctht(x), then
c0 = E
x∼N (0,1)
[h2
k(x)] = k!.
Hence
1
|T |
X
i∈T
h2
k(⟨Xi, w⟩) = 1
|T |
X
i∈T
c0 +
2k
X
t=1
ctht(⟨Xi, w⟩)
!
= k! +
2k
X
t=1
ct |T |
X
i∈T
ht(⟨Xi, w⟩)
= k! +
2k
X
t=1
ct |T |
X
i∈T
⟨Ht(Xi), w⊗t⟩ (By Claim 5.7)
= k! +
2k
X
t=1
ct⟨Mt(T ), w⊗t⟩
≤ k! + λ
2k
X
t=1
ct. (by w ⊥ V )
We have following bound on P2k
t=1 ct:
2k
X
t=1
ct
!2
≤
2k
X
t=1
1
t! ·
2k
X
t=1
(t!)c2
t (Cauchy-Schwarz)
≤e E
x∈N (0,1)
[
2k
X
t=1
ctht(x) 2]
≤3 E
x∈N (0,1)
[h4
k(x)]
≤ 3 · 32k( E
x∈N (0,1)
[h2
k(x)])2 = 32k+1(k!)2, (By hypercontractivity)
and so the lemma follows by our choice of λ = e−10k.
Now we are ready to prove the main theorem of this section:
Proof of Theorem 5.2. Suppose the distance of μ to V is larger than ε. Let w be the unit vector parallel to ΠV ⊥ μ. On the one hand, by Lemma 5.13, we know that
1
|T |
X
i∈T
h2
k(⟨Xi, w⟩) ≤ 2 · k! .
22

On the other hand, we also have that:
1
|T |
X
i∈T
h2
k(⟨Xi, w⟩) ≥ α
|Sgood|
X
i∈Sgood ∩T
h2
k(⟨Xi, w⟩)
Since
E
i∼Sgood
[1i∈/Sgood∩T · h2
k(⟨Xi, w⟩)] ≤ E
i∼Sgood
[1i∈/Sgood∩T ]
1
2· E
i∼Sgood
[h4
k(⟨Xi, w⟩)]
1 2
(Cauchy-Schwarz)
≤ δ1/2 · E
X∼N (μ,I)
[h4
k(⟨X, w⟩)] + O(1)
1
2 (By Eq. (7))
≤ δ1/2 · E
x∼N (0,1)
h4
k(x + y)
1
2 + O(1)
≤ δ1/2 · 3k E
x∼N (0,1)
h2
k(x + y) + O(1) (By hypercontractivity)
≤ O(1),
and so we obtain that
1
|Sgood|
X
i∈Sgood ∩T
h2
k(⟨Xi, w⟩) ≥ E
i∼Sgood
[h2
k(⟨Xi, w⟩)] − O(1)
≥E
X∼N (μ,I)
[h2
k(⟨X, w⟩)] − O(1) (By Eq. (8))
=E
x∼N (0,1)
h2
k(x + ⟨μ, w⟩) − O(1)
≥ exp(Ω(
√
kε)) · k! − O(1) ≥ (3/α) · (k!) , (By Lemma 5.9)
which implies that 1
|T |
X
i∈T
h2
k(⟨Xi, w⟩) ≥ 3 · k!,
which contradicts to the upper bound 2 · (k!). This completes the proof.
5.2 Exhaustive search for moment-matching candidates
Suppose we receive an α-pure set of n samples where the inliers are distributed according to N (μ, I), and we know a bound ∥μ∥ ≤ r. In this section, we will focus on how to construct a set μ1, . . . , μl such that some μi is ε-close to μ, all μi have a subset of αn points where the centered moments are close to N (0, I), and all pairs μi, μj are ε/2-separated. Our ingredients from other sections will later imply that such a list has bounded size. Further, when we invoke the following theorem, we w-
ill be invoking it for a learned subspace of small dimension, so the dependence on d is not as concerning as it may appear at first glance.
Theorem 5.14. Suppose there are n samples X1, . . . , Xn ∈ Rd, αn of which are sampled according to Xi ∼ N (μ, I). Consider parameters 0 < α, δ, ∆ < 1, ∥μ∥ ≤ r, 0 < ε ≤ r, and a positive integer
23

k∗. There exists an algorithm that outputs a list μ1, . . . , μl such that the μi are ε/2-separated, each
μi has a corresponding vector w(i)
1 , . . . , w(i)
n ∈ [0, 1] such that Pn
j=1 w(i)
j = αn, and
1
αn
n
X
i=1
w(i)
j · (Xj − μi)⊗k − E
Z∼N (0,I)
[Z ⊗k ]
F
≤ ∆ ∀k ∈ {1, . . . , k∗}.
Moreover, with probability at least 1 − δ, there exists a μ∗ ∈ μ1, . . . , μl such that ∥μ − μ∗∥2 ≤ ε. The
algorithm has running time O( r
ε∆ )d · (2dk∗)Cdk∗ · ( 1
αδ∆ )C and uses n = ⌈ 4(k∗)1.5(8dk∗)k∗
αδ∆ ⌉ samples.
Proof. Overview. Our plan is to consider an ε′-cover N of the ball B in which μ is restricted, where ε′ << ε/2. For each center in the cover, we will check whether there exists a subset of samples where the moments around the center look sufficiently close to Gaussian (in terms of the Frobenius norm; this may be computed efficiently, we discuss later). For all possible centers that pass this test, we will iterate in an arbitrary order, and greedily add a center to our set if it is not ε/2-close to-
 any center already in our set. Clearly, our final set will consist of centers where their moments satisfy our condition, and the centers are ε/2-separated. What remains is to show that one of these centers will be ε-close to the true μ. Let μ∗ be an arbitrary point in N that is ε′-close to μ. We will show that with probability at least 1 − δ, μ∗ will satisfy the moment conditions. Hence, either μ∗ will be in our set, or μ∗ is ε/2-close to an item in our set. Since μ∗ itself is ε′-close to μ (wher-
e ε′ ≤ ε/2), this immediately implies μ is ε-close to an item in our set. ε′-cover construction. Let us define a simple ε′-cover N for B. Since each coordinate is within a bounded range of width 2r, for each coordinate let us consider possible values
{−r, . . . , −2ε′/√d, −ε′/√d, 0, ε′/√d, 2ε′/√d, . . . , r}; there are at most 1 + 2⌈r√d/ε′⌉ ≤ 5r√d/ε′
options. We will choose our net N to be the set of all ≤ (5r√d/ε′)d options that are within the ball. This is a valid ε′ net, because for any p ∈ B, consider the point p′ where each coordinate is rounded to the nearest value in the net that is closer to 0: we observe p′ ∈ B and ∥p − p′∥2 ≤ ε′.
Enumerating over this net takes O(r√d/ε′)d time. Moment-checking procedure. For any fixed μ′ ∈ N , we hope to find a collection of values w1, . . . , wn ∈ [0, 1] such that P
i wi = αn, and the following condition holds for the moment tensors:
1
αn
n
X
i=1
wi · (Xi − μ′)⊗k − E
Z∼N (0,I)
[Z ⊗k ]
F
≤ ∆ ∀k ∈ {1, . . . , k∗}
This condition would be implied by
k∗
X
k=1
1
αn
n
X
i=1
wi · (Xi − μ′)⊗k − E
Z∼N (0,I)
[Z ⊗k ]
2
F
≤ ∆2. (10)
This condition is quite convenient to check: the constraints on w are linear constraints, and the
objective is simply a least-squares regression task, so we may run in time poly(n, dk∗) for a fixed μ′. Showing μ∗ passes the moment-checking procedure. Recall μ∗ is an arbitrary point in our set N that is ε′-close to μ. We desire to show that with probability at least 1 − δ, μ∗ will pass the moment-checking procedure. Our plan is to show that choosing the wi corresponding to the αn inliers sampled from N (μ, I) will pass the test. Our moment-checking condition will certainly pass if for all k ∈ {-
1, . . . , k∗}, it holds:
1
αn
X
i∈αn inliers
(Xi − μ∗)⊗k − E
Z∼N (0,I)
[Z ⊗k ]
F
≤ ∆/
√
k∗ (11)
24

where Xi ∼ N (μ, I). This is equivalent to the following condition for Y1, . . . , Yαn ∼ N (μ − μ∗, I):
1
αn
αn
X
i=1
Y ⊗k
i− E
Z∼N (0,I)
[Z ⊗k ]
F
≤ ∆/
√
k∗ (12)
The following technical lemma allows us to show this condition (Eq. (12)) occurs with high probability when ∥μ − μ∗∥ is small enough (proof deferred to Section A.5).
Lemma 5.15. For parameters 0 < δ, γ < 1, suppose it holds that m ≥ 4(8dk)k
δγ and ∥μ∥∞ ≤ γ
2(4dk)k/2 .
Then,
PrX1,...,Xm∼N (μ,I)
"
1
m
m
X
i=1
X ⊗k
i− E
Z∼N (0,I)
[Z ⊗k ]
F
≥γ
#
≤ δ.
This immediately lets us conclude that Eq. (12) holds with probability at least 1 − δ:
Corollary 5.16. The moment-checking condition will hold for μ∗ with probability at least 1 − δ if
n ≥ 4(k∗)1.5(8dk∗)k∗
αδ∆ and ε′ ≤ ∆
2√k∗(4dk∗)k∗/2 .
Proof. We invoke Lemma 5.15 for each k ∈ {1, . . . , k∗} with γ = ∆/√k∗, δ′ = δ/k∗, ∥μ∥∞ ≤ ε′, and m = αn. The first condition holds since
m ≥ 4(8dk)k
δ′γ ⇐= n ≥ 4(k∗)1.5(8dk∗)k∗
αδ∆ .
The second condition holds since
∥μ∥∞ ≤ γ
2(4dk)k/2 ⇐= ε′ ≤ ∆
2√k∗(4dk∗)k∗/2 .
Concluding. Hence, our algorithm succeeds with probability at least 1 − δ with our choice of
parameters ε′ = min(ε/2, ∆
2√k∗(4dk∗)k∗/2 ) and n = ⌈ 4(k∗)1.5(8dk∗)k∗
αδ∆ ⌉. Our running time is O(r√d/ε′)d·
poly(n, dk∗) = O( r
ε∆ )d · (2dk∗)Cdk∗ · ( 1
αδ∆ )C. This concludes the proof of our theorem.
5.3 Sharper moment-matching fooling
The guarantees from Theorem 5.6 of [GKK23] are lossy in the setting where moments are subgaussian and the number of halfspaces are super-constant, as is the case in our application. We provide a sharper result (proof deferred to Section A.6):
Lemma 5.17. Suppose two distributions G, T over Rd match moments up to order k (which is even), meaning
GE[⟨G, v⟩i] − TE[⟨T, v⟩i] ≤ ∆
for all ∥v∥2 = 1 and i ∈ {1, . . . , k}. Moreover, suppose G has subgaussian moments where
GE[⟨G, v⟩i] ≤ (C1
√
i)i
25

and its linear projections are anticoncentrated such that
GE[⟨G, v⟩ ∈ [L, R]] ≤ C2 · (R − L).
for constants C1, C2 > 0. Consider any collection of halfspaces H1, . . . , Hm where Hi ≜ 1[⟨x, ai⟩ ≥
bi]. There exist constants C3, C4 ≥ 1 where if k ≥ C3 · max(m6/ε2, log8(1/ε)/ε2), ∆ ≤ 1
C4k
k
, and
0 < ε ≤ 1/2, then for the intersection H ≜ Tm
i=1 Hi it holds
|PrG[X ∈ H] − PrT [X ∈ H]| ≤ Cε.
5.4 Combining ingredients: proof of Theorem 5.1
Let us recall our general plan. First, we will use prior work of [DKK+22a] to reduce the task to O(1/α) subproblems where ∥μ∥2 ≤ O(plog(1/α)). Next, for each subproblem, we will learn the low-dimensional subspace via Section 5.1. Afterwards, we will exhaustively search over a net within this subspace via Section 5.2, where this subroutine returns μi satisfying the moment matching condition, and one of them is close to μ, yet we have not bounded the size of this output list. Finally, we will combin-
e our moment-matching fooling result in Section 5.3 with the ideas in our information-theoretic proof of Theorem 4.1 to prove the list must have bounded size. We now combine all the ingredients. Throughout this algorithm, we will need three groups of samples of size n1, n2, n3 such that n = n1 + n2 + n3. We will randomly distribute our n samples into these three groups, and since n is sufficiently large, the number of good inliers in each group will be at least αni/2 with high probability. For the-
 remaining description of our algorithm subroutines, we will leverage α/2 as our inlier parameter.
Using prior work of Diakonikolas, Kane, Karmalkar, Pensia, and Pittas [DKK+22a]. For any constant δ > 0, Theorem 1.2 of [DKK+22a] outputs a list of size O(1/α), that with probability at least 1 − δ contains a point within distance Cplog(1/α) of the true μ. Moreover, this algorithm runs in time (d log(1/α))C log(1/α) and uses n1 = (d log(1/α))C log(1/α) samples. From this output list, we will focus on O(1/α) subproblems, where after translation we may assume that ∥μ∥2 ≤ Cplog(1/α). We now focus on -
each of the subproblems separately.
Learning a low-dimensional subspace. We invoke Theorem 5.2 with α′ = α/2 and ε′ = ε/2. This gives a subspace with dimension at most exp(C log2(1/α)/ε2 · (log(log(1/α)/ε))), where μ is within ε/2 of the subspace with constant probability. We may run this constantly many times on different samples to boost the failure probability to any small constant, while keeping the subspace dimension at most exp(C log2(1/α)/ε2 · (log(log(1/α)/ε))). Learning the subspace has sample/time complexity (d log(1/α)/ε)-
C log2(1/α)/ε2 .
Exhaustively searching within the low-dimensional subspace. We now invoke Theo
rem 5.14 to search the low-dimensional subspace. We may use d′ = (C log2(1/α)/ε2)C log2(1/α)/ε2, ε = ε′/2, r ≤ Cplog(1/α), and δ to be a sufficiently small constant. We defer the choice of ∆ and k∗ until later. All n3 samples will be input to the algorithm after projecting to the subspace. Observe how with probability at least 1 − δ, the list contains a μ∗ in the subspace where ∥μ∗ − ΠV μ∥2 ≤ ε/2, and hence ∥μ − μ∗∥ ≤ ε. Moreover, all μi are ε/4-separated. The main remaining question is to bound t-
he size of this list. Bounding the list size. Let μ1, . . . , μl denote the output list from some call to the exhaustive search subroutine. We will show how the list size must be bounded by using similar ideas to
26

our information-theoretic proof Theorem 4.1, in addition to our moment-matching fooling technical result Lemma 5.17. Let r0 = Cplog(1/α) be the bound on the error from the algorithm of [DKK+22a]. For non-negative integer i, let |Mi| denote the minimum size ri ≜ r0
2i -cover of μ1, . . . , μl.
If we choose ∆ and k∗ appropriately, we may bound the ratio of consecutive |Mi|/|Mi−1|. Eventually, for some i∗ where ri∗ < ε/8, we may conclude |Mi∗| = l because all μi are ε/4-separated. Since the ratio bound will let us bound |Mi∗|, this will in turn bound l. We now prove the ratio bound:
Claim 5.18. For any positive integer i where ri ≥ ε
100 , it holds that |Mi|
|Mi−1| ≤ exp(C log2(1/α)/r2
i ).
Proof. This proof mirrors the proof of Claim 4.4, except we must adjust that our μi only satisfy moment-matching conditions, instead of the α-consistent property. We will construct a cover Mi by considering covering each ri−1-radius ball of Mi−1 separately. The size of the cover for each ball is bounded by the maximum-possible size subset μ1, . . . , μl′ such that all μi are ri-separated. We will prove that such a set cannot exist for l′ too large. After translating all such μi accordingly, recall-
 all ∥μi∥2 ≤ ri−1. Let us again define corresponding regions Ri where the density of μi is maximal: Ri ≜ {∥x − μi∥ < ∥x − μj∥}. Let D denote the normalized empirical distribution over the n3 samples. Similarly, let Di denote the normalized empirical distribution corresponding to each w(i). Since the total mass of D is 1, we know:
l′
X
i=1
PrX∼D[X ∈ Ri] ≤ 1 =⇒
l′
X
i=1
α′ PrX∼Di [X ∈ Ri] ≤ 1 =⇒
l′
X
i=1
α
2 PrX∼Di[X ∈ Ri] ≤ 1 (13)
We now want to show that PrX∼Di[X ∈ Ri] ≈ PrX∼N(μi,I)[X ∈ Ri]. Note how we may translate
the distribution Di by −μi (and similarly define R′
i as the region Ri with the same translation), so we instead study
| PrX∼Di [X ∈ Ri] − PrX∼N(μi,I)[X ∈ Ri]| = | PrX∼(Di−μi)[X ∈ R′
i] − PrN(0,I)[R′
i]|
This is a quantity that we may bound via our moment-matching fooling technical result of Lemma 5.17. Note how we are aiming to show contradiction for a sufficiently large l′; we will choose l′ so that is always at most exp(C log2(1/α)/r2
i ). We now want to use Lemma 5.17 such that each
Di will fool an intersection of at most l′ ≤ exp(C log2(1/α)/r2
i ) halfspaces with additive error
at most 1
l′ . In the language of Lemma 5.17, G = N (0, I), and H is the distribution Di translated by −μi. The subgaussian moments assumption and anticoncentration assumption follows immediately since G = N (0, I). The lemma implies fooling halfspaces up to error 1
l′ if we choose
k∗ = exp(C log2(1/α)/ε2) ≥ exp(C log2(1/α)/r2
i ) and ∆ = exp(C log2(1/α)/ε2)− exp(C log2(1/α)/ε2). Using this, we continue:
Eq. (13) ⇐⇒
l′
X
i=1
α
2 PrX∼N(μi,I)[X ∈ Ri] + PrX∼Di [X ∈ Ri] − PrX∼N(μi,I)[X ∈ Ri] ≤ 1
=⇒
l′
X
i=1
α
2 PrX∼N(μi,I)[X ∈ Ri] ≤ 1 + α
2
=⇒
l′
X
i=1
PrX∼N(μi,I)[X ∈ Ri] ≤ 4
α
27

⇐⇒
l′
X
i=1
qi ≤ 4
α (recalling the definition of qi)
=⇒ poly(α) · 2
cri3
ri2−1
√log l′
≤4
α (invoking Theorem 4.3 with r = ri−1 and β = ri)
⇐⇒ poly(α) · 2cri
√log l′ ≤ 4
α =⇒ l′ ≤ exp(C log2(1/α)/r2
i ).
This completes the proof of our claim, since the maximal size ri-separated set inside each ri−1-radius ball must have size at most exp(C log2(1/α)/r2
i ).
With this ratio bound in hand, the observation that l = |Mi∗|, and setting i∗ = ⌈log2(r0/(ε/16))⌉, we conclude
t = |Mi∗ | ≤ |M0| · Πi∗
i=1
|Mi|
|Mi−1| = Πi∗
i=1
|Mi|
|Mi−1|
≤ Πi∗
i=1 exp(C log2(1/α)/r2
i ) ≤ exp(C log2(1/α)/r2
i∗ )
≤ exp(C log2(1/α)/ε2).
This bounds the size of each of the list returned in each of the C/α subproblems, and in total we attain a list size bound of (C/α) · exp(C log2(1/α)/ε2) ≤ exp(C log2(1/α)/ε2). Concluding runtime and sample usage. Finally, we revisit runtime and sample complexity now that all parameters have been chosen (namely, ∆ and k∗). The algorithm of [DKK+22a] still has sample/time complexity of (d log(1/α))C log(1/α). Learning the subspace still has sample/time complexity (d log(1/α)/ε)C log2(1/α)/ε2. The e-
xhaustive search has sample complexity exp(exp(C log2(1/α)/ε2)) and time complexity exp(exp(C log2(1/α)/ε2 · (log(log(1/α)/ε)))). In total, the sample complexity is dC log2(1/α)/ε2 + exp(exp(C log2(1/α)/ε2)), and the time complexity is dC log2(1/α)/ε2 + exp(exp(C log2(1/α)/ε2 · (log(log(1/α)/ε)))).
References
[Ans60] Frank J Anscombe. Rejection of outliers. Technometrics, 2(2):123–146, 1960.
[Ban38] Stefan Banach. Über homogene polynome in (l2). Studia Mathematica, 7(1):36–44, 1938.
[Baz09] Louay MJ Bazzi. Polylogarithmic independence can fool dnf formulas. SIAM Journal on Computing, 38(6):2220–2272, 2009.
[BBV08] Maria-Florina Balcan, Avrim Blum, and Santosh Vempala. A discriminative framework for clustering via similarity functions. In Proceedings of the fortieth annual ACM symposium on Theory of computing, pages 671–680, 2008.
[BK21] Ainesh Bakshi and Pravesh K Kothari. List-decodable subspace recovery: Dimension independent error in polynomial time. In Proceedings of the 2021 ACM-SIAM Symposium on Discrete Algorithms (SODA), pages 1279–1297. SIAM, 2021.
28

[Bra08] Mark Braverman. Polylogarithmic independence fools ac 0 circuits. Journal of the ACM (JACM), 57(5):1–10, 2008.
[BS71] Jacek Bochnak and Józef Siciak. Polynomials and multilinear mappings in topological vector-spaces. Studia Mathematica, 39(1):59–76, 1971.
[CLC25] Syomantak Chaudhuri, Jerry Li, and Thomas A Courtade. Robust estimation under heterogeneous corruption rates. arXiv preprint arXiv:2508.15051, 2025.
[CP23] Moses Charikar and Chirag Pabbaraju. A characterization of list learnability. In Proceedings of the 55th Annual ACM Symposium on Theory of Computing, pages 17131726, 2023.
[CR19] Daniel Carando and Jorge Tomás Rodríguez. Symmetric multilinear forms on hilbert spaces: Where do they attain their norm? Linear Algebra and its Applications, 563:178–192, 2019.
[CSV17] Moses Charikar, Jacob Steinhardt, and Gregory Valiant. Learning from untrusted data. In Proceedings of the 49th annual ACM SIGACT symposium on theory of computing, pages 47–60, 2017.
[DGJ+10] Ilias Diakonikolas, Parikshit Gopalan, Ragesh Jaiswal, Rocco A Servedio, and Emanuele Viola. Bounded independence fools halfspaces. SIAM Journal on Computing, 39(8):3441–3462, 2010.
[Din12] Seán Dineen. Complex analysis on infinite dimensional spaces. Springer Science & Business Media, 2012.
[DJKS23] Abhimanyu Das, Ayush Jain, Weihao Kong, and Rajat Sen. Efficient list-decodable regression using batches. In International Conference on Machine Learning, pages 7025–7065. PMLR, 2023.
[DK23] Ilias Diakonikolas and Daniel M Kane. Algorithmic high-dimensional robust statistics. Cambridge university press, 2023.
[DKK+19] Ilias Diakonikolas, Gautam Kamath, Daniel Kane, Jerry Li, Ankur Moitra, and Alistair Stewart. Robust estimators in high-dimensions without the computational intractability. SIAM Journal on Computing, 48(2):742–864, 2019.
[DKK+21] Ilias Diakonikolas, Daniel Kane, Daniel Kongsgaard, Jerry Li, and Kevin Tian. Listdecodable mean estimation in nearly-pca time. Advances in Neural Information Processing Systems, 34:10195–10208, 2021.
[DKK+22a] Ilias Diakonikolas, Daniel Kane, Sushrut Karmalkar, Ankit Pensia, and Thanasis Pittas. List-decodable sparse mean estimation via difference-of-pairs filtering. Advances in Neural Information Processing Systems, 35:13947–13960, 2022.
[DKK+22b] Ilias Diakonikolas, Daniel M Kane, Daniel Kongsgaard, Jerry Li, and Kevin Tian. Clustering mixture models in almost-linear time via list-decodable mean estimation. In Proceedings of the 54th Annual ACM SIGACT Symposium on Theory of Computing, pages 1262–1275, 2022.
29

[DKK+23] Ilias Diakonikolas, Daniel Kane, Vasilis Kontonis, Sihan Liu, and Nikos Zarifis. Efficient testable learning of halfspaces with adversarial label noise. Advances in Neural Information Processing Systems, 36:39470–39490, 2023.
[DKLZ24] Ilias Diakonikolas, Daniel Kane, Sihan Liu, and Nikos Zarifis. Testable learning of general halfspaces with adversarial label noise. In The Thirty Seventh Annual Conference on Learning Theory, pages 1308–1335. PMLR, 2024.
[DKN10] Ilias Diakonikolas, Daniel M Kane, and Jelani Nelson. Bounded independence fools degree-2 threshold functions. In 2010 IEEE 51st Annual Symposium on Foundations of Computer Science, pages 11–20. IEEE, 2010.
[DKP+21] Ilias Diakonikolas, Daniel Kane, Ankit Pensia, Thanasis Pittas, and Alistair Stewart. Statistical query lower bounds for list-decodable linear regression. Advances in Neural Information Processing Systems, 34:3191–3204, 2021.
[DKS18] Ilias Diakonikolas, Daniel M Kane, and Alistair Stewart. List-decodable robust mean estimation and learning mixtures of spherical gaussians. In Proceedings of the 50th Annual ACM SIGACT Symposium on Theory of Computing, pages 1047–1060, 2018.
[GKK23] Aravind Gollakota, Adam R Klivans, and Pravesh K Kothari. A moment-matching approach to testable learning and a new characterization of rademacher complexity. In Proceedings of the 55th Annual ACM Symposium on Theory of Computing, pages 1657–1670, 2023.
[Hub92] Peter J Huber. Robust estimation of a location parameter. In Breakthroughs in statistics, pages 492–518. Springer, 1992.
[IK22] Misha Ivkov and Pravesh K Kothari. List-decodable covariance estimation. In Proceedings of the 54th Annual ACM SIGACT Symposium on Theory of Computing, pages 1276–1283, 2022.
[Kan21] Daniel M Kane. Robust learning of mixtures of gaussians. In Proceedings of the 2021 ACM-SIAM Symposium on Discrete Algorithms (SODA), pages 1246–1258. SIAM, 2021.
[KKK19] Sushrut Karmalkar, Adam Klivans, and Pravesh Kothari. List-decodable linear regression. Advances in neural information processing systems, 32, 2019.
[KKM13] Daniel Kane, Adam Klivans, and Raghu Meka. Learning halfspaces under log-concave densities: Polynomial approximations and moment matching. In Conference on Learning Theory, pages 522–545. PMLR, 2013.
[KM13] Adam Klivans and Raghu Meka. Moment-matching polynomials. arXiv preprint arXiv:1301.0820, 2013.
[KSS18] Pravesh K Kothari, Jacob Steinhardt, and David Steurer. Robust moment estimation and improved clustering via sum of squares. In Proceedings of the 50th Annual ACM SIGACT Symposium on Theory of Computing, pages 1035–1046, 2018.
30

[KSTV25] Adam R Klivans, Konstantinos Stavropoulos, Kevin Tian, and Arsen Vasilyan. The power of iterative filtering for supervised learning with (heavy) contamination. arXiv preprint arXiv:2505.20177, 2025.
[KSV24] Adam Klivans, Konstantinos Stavropoulos, and Arsen Vasilyan. Testable learning with distribution shift. In The Thirty Seventh Annual Conference on Learning Theory, pages 2887–2943. PMLR, 2024.
[LL22] Allen Liu and Jerry Li. Clustering mixtures with almost optimal separation in polynomial time. In Proceedings of the 54th Annual ACM SIGACT Symposium on Theory of Computing, pages 1248–1261, 2022.
[LRV16] Kevin A Lai, Anup B Rao, and Santosh Vempala. Agnostic estimation of mean and covariance. In 2016 IEEE 57th Annual Symposium on Foundations of Computer Science (FOCS), pages 665–674. IEEE, 2016.
[MV18] Michela Meister and Gregory Valiant. A data prism: Semi-verified learning in the small-alpha regime. In Conference On Learning Theory, pages 1530–1546. PMLR, 2018.
[Olv10] Frank WJ Olver. NIST handbook of mathematical functions hardback and CD-ROM. Cambridge university press, 2010.
[PST07] A Pappas, Y Sarantopoulos, and A Tonge. Norm attaining polynomials. Bulletin of the London Mathematical Society, 39(2):255–264, 2007.
[RV23] Ronitt Rubinfeld and Arsen Vasilyan. Testing distributional assumptions of learning algorithms. In Proceedings of the 55th Annual ACM Symposium on Theory of Computing, pages 1643–1656, 2023.
[RY20] Prasad Raghavendra and Morris Yau. List decodable learning via sum of squares. In Proceedings of the Fourteenth Annual ACM-SIAM Symposium on Discrete Algorithms, pages 161–180. SIAM, 2020.
[STW24] Lucas Slot, Stefan Tiegel, and Manuel Wiedmer. Testably learning polynomial threshold functions. Advances in Neural Information Processing Systems, 37:3781–3831, 2024.
[Sud69] Vladimir N Sudakov. Gaussian measures, cauchy measures and ε-entropy. In Soviet Math. Dokl, volume 10, pages 310–313, 1969.
[Tuk60] John W Tukey. A survey of sampling from contaminated distributions. Contributions to probability and statistics, pages 448–485, 1960.
[Tuk75] John W Tukey. Mathematics and the picturing of data. In Proceedings of the International Congress of Mathematicians, Vancouver, 1975, volume 2, pages 523–531, 1975.
[Ver18] Roman Vershynin. High-dimensional probability: An introduction with applications in data science, volume 47. Cambridge university press, 2018.
31

[ZS22] Shiwei Zeng and Jie Shen. List-decodable sparse mean estimation. Advances in Neural Information Processing Systems, 35:24031–24045, 2022.
[ZS23] Shiwei Zeng and Jie Shen. Semi-verified pac learning from the crowd. In International Conference on Artificial Intelligence and Statistics, pages 505–522. PMLR, 2023.
A Deferred proofs
A.1 Proof of Corollary 1.5
First, we run our list-decodable mean estimation algorithm from Theorem 5.1 and obtain a list μ1, . . . , μl where l ≤ L. Let μ∗ be any arbitrary item in the list where ∥μ − μ∗∥2 ≤ ε. Given this list, the rest of the proof follows from standard ideas. We now design a subroutine where, given two items μi, μj such that ∥μi − μj∥2 ≥ 4ε, we will output a “winner” between μi and μj. Our desired guarantee is that for all such pairwise tests, if one of μi, μj is μ∗, then μ∗ will always win. Our test is s-
imple. For each pairwise comparison, we use our n2 samples X1, . . . , Xn2, and
transform them into Yk = ⟨Xk − μi+μj
2 , μi−μj
∥μi−μj∥2 ⟩. Then, our test will output μi if the average
1 n2
Pn2
k=1 Yk > 0, and μj otherwise.
We will show that μ∗ wins all its tests with high probability. Without loss of generality, suppose μ∗ is μi, we prove that 1
n2
Pn2
k=1 Yk > 0 with probability at least δ/|L|. Observe how the Yk
are distributed according to N (⟨μ − μ∗+μj
2 , μ∗−μj
∥μ∗−μj∥2 ⟩, 1). The mean of this univariate Gaussian distribution is at least
⟨μ − μ∗ + μj
2 , μ∗ − μj
∥μ∗ − μj∥2
⟩ = ⟨μ∗ + (μ − μ∗) − μ∗ + μj
2 , μ∗ − μj
∥μ∗ − μj∥2
⟩
≥ ⟨ μ∗ − μj
2 , μ∗ − μj
∥μ∗ − μj∥2
⟩−ε
= ∥μ∗ − μj∥2
2 −ε≥ε
With probability at least 1 − δ/|L|, the empirical mean will concentrate within ε/2 of its true
mean from n2 ≥ C log(|L|/δ)
ε2 samples. By union bound, μ∗ will pass all its tests with probability at
least 1 − δ. Finally, we output any μi that passes all its tests. In the event where μ∗ was undefeated, this means μi is within 4ε of μ∗, and hence within 8ε of μ. If we rescale ε by a factor of 8, then we obtain the desired guarantee.
A.2 Proof of Lemma 4.7
Proof. Denote μ(A) by p(≤ 1/2). We define x(≥ 0) be the solution of R ∞
x
√12π e−t2/2 dt = p.
Gaussian isoperimetry inequality tells us,
μ(Aε) ≥
Z∞
x−ε
√12π e−t2/2 dt =
Z∞
x
√12π e−(t−ε)2/2 dt
32

We know that when p = 1/3, x ≈ 0.43, so when p ≥ 1/3, we have x ≤ 0.44, and when p ≤ 1/3,
we have x ≥ 0.42 and by Mills ratio, we know p ≥ x
1+x2
e−x2 /2
√2π ≥ e−x2/2
10x , so x ≥ Ω(plog(1/p)).
Therefore in either case we have x(p) = Ω(plog(1/p)) − O(1), so
μ(Aε)
μ(A) ≥ min
t≥x
e−(t−ε)2/2
e−t2/2 = e−(x−ε)2/2
e−x2/2 = e−ε2/2 · exε = exp(−ε2/2 − O(ε) + Ω(εplog(1/p))),
which right hand side is Ω(1) exp(Ω(εplog(1/p))) when ε = O(1) and is exp(−O(ε2)+Ω(εplog(1/p))) when ε = Ω(1), so the lemma follows.
A.3 Proof of Lemma 4.8
Proof. Let D0 be the distribution 1
2 N (0, I), and let ei be the d-dimensional vector that has a 1 in the i-th coordinate and 0 for all other coordinates. Additionally, for i ∈ {1, . . . , d}, let Di be the function Di(x) = max(0, α[N (2εei, I)](x) − D0(x)). Suppose the total mass of each Di is at most 1
2d . In this case, we could define our distribution
D such that its density is at least D(x) ≥ Pd
i=0 Di(x) everywhere, and any valid list must have size at least d since all 2εei are α-consistent and > 2ε-separated. Our plan is to analyze the total mass for any Di, and then choose d accordingly.
First, let us bound the region where Di is nonzero. This occurs when the ratio D0(x)
α[N (2εei,I)](x) < 1.
We analyze this ratio:
D0(x)
α[N (2εei, I)](x) = 1
2α e(−∥x∥2
2+∥x−2εei∥2
2)/2
=1
2α e−⟨x,2εei⟩+∥2εei∥2
2/2
=1
2α e−2εxi+ε2/2
Hence, we may observe conditions under which Di is nonzero:
Di(x) > 0 ⇐⇒ xi > ε2/2 + log(1/2α)
ε
From here, we may bound the total mass of Di:
Z
Rd
Di(x) ≤ PrX∼N(2εei,I) xi > ε2/2 + log(1/2α)
ε
= PrX∼N(0,1) x > ε2/2 + log(1/2α)
ε − 2ε
≤ PrX∼N(0,1) x > log(1/2α)
2ε (using ε <
√log(1/2α)
2)
≤ 2ε
log(1/2α) · e− log2(1/2α)
8ε2 ≤ e− log2(1/2α)
8ε2
Hence, we may choose any d (and thus force any list size) where
d ≤ max(1, ⌊e
log2 (1/2α)
8ε2 /2⌋).
This means we can force a list of size exp(c log2(1/2α)/ε2).
33

A.4 Omitted proofs from Section 5.1
Lemma A.1.
PrX1,...,Xm∼N (μ,1)
"
1
m
m
X
i=1
Hk(Xi) ⊗ Hk(Xi) − E
X∼N (μ,I)
[Hk(Xi) ⊗ Hk(Xi)]
F
≥a
#
≤ (dk max(1, ∥μ∥∞))O(k)
a2m ,
Proof of Lemma A.1. By
Hk(X) =
X
P Partition of set S
subset with size 1 and 2
O
{a,b}∈P
(−I)(a,b) O
{c}∈P
X(c). (14)
we know Hk(X) ⊗ Hk(X) can written as the sum of terms in the form of
O
{a,b}∈P
(−I)(a,b) O
{c}∈P
X(c) O
{a,b}∈P ′
(−I)(a+k,b+k) O
{c}∈P
X (c+k) .
For each such term, using concentrated Claim A.4 and let θ = max(1, ∥μ∥∞), we know the difference between empirical average and the expectation is at most a/(k!)2 with probability at
least 1 − (k!)4(8dkθ2)k
a2m = 1 − (dkθ)O(k)
a2m .
Since the number of summands is bounded by (k!)2, by union bound we complete the proof.
Lemma A.2. For μ ∈ R, and integer k ≥ 0, we have
PrX1,...,Xm∼N (μ,1)
"
1
m
m
X
i=1
f (Xi) − E
X∼N (μ,I)
[f (X)]
2
≥a
#
≤ exp(O(k + √k|μ|))
a2m ,
for f = h2
k and h4
k.
Proof. By Chebyshev’s inequality, it suffices to show Ex∼N(μ,1)[f 2(x)] ≤ exp(O(k + √k|μ|)). Indeed by hypercontractivity, we have
E
x∼N (μ,1)
[h8
k(x)]
1/8
≤ eO(k) E
x∼N (μ,1)
[h4
k(x)]
1/4
≤ eO(k) E
x∼N (μ,1)
[h2
k(x)]
1/2
which is at most exp(O(√k|μ|)) due to Lemma 5.9, so the lemma follows.
A.5 Proof of Lemma 5.15
Proof. We may bound the desired quantity by decomposing into two components:
1
m
m
X
i=1
X ⊗k
i− E
Z∼N (0,I)
[Z ⊗k ]
F
≤E
Z∼N (0,I)
[Z⊗k] − E
X∼N (μ,I)
[X ⊗k ]
F
+1
m
m
X
i=1
X ⊗k
i− E
X∼N (μ,I)
[X ⊗k ]
F
(15) We now bound the first term:
Claim A.3. ∥ Ez∼N(0,I)[(μ + z)⊗k] − Ez∼N(0,I)[z⊗k]∥2
F ≤ (4dk)k/2∥μ∥∞
34

Proof.
∥E
z∼N (0,I)
[(μ + z)⊗k] − E
z∼N (0,I)
[z ⊗k ]∥2
F
=
X
i1 ,...,ik ∈[d]
E
z∼N (0,I)
[Πk
j=1(μij + zij )] − E
z∼N (0,I)
[Πk
j=1zij ]
2
Consider each monomial separately. The monomials of only z terms will cancel out. Otherwise, a monomial will have at least one μ term. Since the expected value of a monomial of z with at most k − 1 terms is at most (k − 2)!!, then:
≤ dk · (2k − 1) · ∥μ∥∞ · (k − 2)!!
2
≤ (4dk)k∥μ∥2
∞
=⇒ ∥ E
z∼N (0,I)
[(μ + z)⊗k] − E
z∼N (0,I)
[z⊗k]∥F ≤ (4dk)k/2∥μ∥∞
We may also bound the second term of Eq. (15):
Claim A.4. PrX1,...,Xm∼N(μ,I)
h
∥1
m
Pm
i=1 X ⊗k
i − EX∼N(μ,I)[X⊗k]∥F ≥ a
i
≤ (8dk·max(1,∥μ∥2∞))k
a2m
Proof. Using Chebyshev’s inequality we observe
PrX1,...,Xm∼N (μ,I)
"
∥1
m
m
X
i=1
X ⊗k
i− E
X∼N (μ,I)
[X⊗k]∥F ≥ a
#
≤ VarX∼N(μ,I)(∥X⊗k∥F )
a2 .
Hence, we will bound
VarX∼N(μ,I)(∥X⊗k∥F ) ≤ E
X1,...,Xm∼N (μ,I)


X
i1 ,...,ik ∈[d]


1
m
m
X
j=1
Πk
l=1(Xj )il − E
X∼N (μ,I)
[Πk
l=1Xil ]


2


=1
m
X
i1 ,...,ik ∈[d]
E
X∼N (μ,I)
"
Πk
l=1Xil − E
Y ∼N (μ,I)
[Πk
l=1Yil ]
2
#
≤1
m
X
i1 ,...,ik ∈[d]
E
X∼N (μ,I)
Πk
l=1Xil
2
=1
m
X
i1 ,...,ik ∈[d]
E
Z∼N (0,I)
Πk
l=1(Zil + μil )
2
≤1
m
X
i1 ,...,ik ∈[d]
22k · (2k − 1)!! · max(1, ∥μ∥2k
∞)
≤ (8dk · max(1, ∥μ∥2∞))k
m.
All together, this implies our claim that
PrX1,...,Xm∼N (μ,I)
"
∥1
m
m
X
i=1
X ⊗k
i− E
X∼N (μ,I)
[X⊗k]∥F ≥ a
#
≤ (8dk · max(1, ∥μ∥2∞))k
a2m .
35

Concluding the proof of our lemma, we will set our parameters so that both terms of Eq. (15) are at most γ/2 with probability at least 1 − δ. Bounding the first term with Claim A.3, it is sufficient to set ∥μ∥∞ such that:
(4dk)k/2∥μ∥∞ ≤ γ/2 ⇐= ∥μ∥∞ ≤ γ
2(4dk)k/2
Bounding the second term with Claim A.4 and ∥μ∥∞ ≤ 1, it is sufficient to set m such that:
(8dk)k
(γ/2)2m ≤ δ ⇐= m ≥ 4(8dk)k
δγ .
This completes the proof of our lemma.
A.6 Proof of Lemma 5.17
Proof. The proof will mostly follow the structure of [DKN10], while making adjustments that allow for moments matching approximately instead of exactly in their work. Consider the transformation F : Rd → Rm where F (x)i = ⟨x, ai⟩. Then the region of intersection for halfspaces is 1[F (x)i ≥ bi ∀i ∈ [m]]. Without loss of generality, all ∥ai∥2 = 1.
Let IR : Rm → {0, 1} be the indicator of this region, and I ̃η
R : Rm → R is the FT-mollification of IR (you may think of it as a smoothed version of IR with smoothing parameter η; see Sections 3 and 4 of [DKN10] for an overview of FT-mollification, we will only use a few properties and will cite them clearly later). In this language, our desired guarantee is simply a bound on | EG[IR(F (X))] − ET [IR(F (X))]|. Set some parameters ρ = ε/m and η = m/ρ = m2/ε. The proof of this will entail three steps to show
GE[IR(F (X))] ≈(a) GE[I ̃η
R(F (X))] ≈(b) TE[I ̃η
R(F (X))] ≈(c) TE[IR(F (X))].
These are shown in parts (a), (b), and (c), respectively. Part (a). We will bound EG[IR(F (X))] ≈(a) EG[I ̃η
R(F (X))]. This part follows exactly as done in [DKN10]. We will provide it (almost copied exactly) for completeness. Let d2(x, ∂R) denote the L2 distance from some point x ∈ Rm to the boundary of R. Then,
| GE[IR(F (X))] − GE[I ̃η
R(F (X))]| (16)
≤ GE[|IR(F (X)) − I ̃η
R(F (X))|]
Using Theorem 4.10 of [DKN10], which states |IR(x) − I ̃η
R(x)| ≤ min 1, O m
η·d2(x,∂R)
2:
≤ PrG[d2(F (X), ∂R) ≤ 2ρ] + O
∞
X
s=1
m2
η222sρ2 · PrG[d2(F (X), ∂R) ≤ 2s+1ρ]
!
≤
m
X
i=1
PrG[|F (X)i − bi| ≤ 2ρ] + O
∞
X
s=1
m
X
i=1
2−2s · PrG[|F (X)i − bi| ≤ 2s+1ρ]
!
(17)
≤ 2mρC2 + O
∞
X
s=1
2−2s · (2s+1ρmC2)
!
(by anti-concentration)
= O(εC2) = O(ε)
36

Part (b). Let us introduce some notation for Taylor expansions around 0. Let p≤r denote
the degree-r Taylor expansion of I ̃η
R, let p=r denote the terms of p≤r with degree exactly r, and let
p>r(x) ≜ I ̃η
R(x) − p≤r(x). For any polynomial p and multi-index α, let p[α] denote the coefficient for this multi-index. We follow the plan of [DKN10] and decompose into two terms
| GE[I ̃η
R] − TE[I ̃η
R]| ≤ | EG[p>k−1] − TE[p>k−1]| + | GE[p≤k−1] − TE[p≤k−1]|.
We start by bounding the first term:
| GE[p>k−1] − TE[p>k−1]|
≤ GE[|p>k−1|] + TE[|p>k−1|]
Using Theorem 4.8 of [DKN10] to bound ∥∂βI ̃η
R∥∞ ≤ (2η)|β| for all β ∈ Nm, and Taylor’s theorem
|p>k−1(F (x))| ≤ sup|β|=k ∥∂βI ̃η
R∥∞ · ∥F (X)∥k
1
k! :
≤ GE
(2η)k
k! ∥F (X)∥k
1 + TE
(2η)k
k! ∥F (X)∥k
1
≤ (2ηm)k
k! GE[max
i∈[m]
(F (X)i)k] + TE[max
i∈[m]
(F (X)i)k]
≤ m(2ηm)k
k! max
i∈[m] GE[(F (X)i)k] + max
i∈[m] TE[(F (X)i)k]
≤ m(2ηm)k
k! 2 sup
∥v∥2=1
GE[⟨X, v⟩k] + sup
∥v∥2=1
EG[⟨X, v⟩k] − TE[⟨X, v⟩k]
!
≤ m(2ηm)k
k! 2(C1
√
k)k + ∆
≤ m · 2em3
kε
k
· 2(C1
√
k)k + ∆
This quantity is at most ε if we choose k ≥ Cm6/ε2 for sufficiently large C > 0, and ∆ ≤ 1, which are both satisfied by our choice in the theorem statement. For the remaining summand, bounding the difference in the expectation of p≤k−1 will leverage the lower-order moment bounds as you might expect. The following lemma will be helpful for bounding monomial moments in terms of moments for projections:
Lemma A.5 (Optimizer of symmetric k-linear form. Implied by Equation (2) in [CR19]; references proofs in [Ban38, BS71, PST07, Din12]). Consider any two random variables X, Y over Rd. Then,
sup
∥u1 ∥2 ,...,∥uk ∥2 =1
XE[Πk
j=1⟨X, uj⟩] − YE[Πk
j=1⟨Y, uj⟩] = sup
∥v∥2=1
XE[⟨X, v⟩k] − YE[⟨Y, v⟩k].
First, we may use this to get a bound in the moment projections for F (X) under G, H with only a blowup depending on k, m (not d):
37

Claim A.6. For any unit v ∈ Rj (∥v∥2 = 1) and k′ ∈ {0, . . . , k},
GE[⟨F (X), v⟩k] − TE[⟨F (X), v⟩k] ≤ mk/2∆
Proof.
GE[⟨F (X), v⟩k′] − TE[⟨F (X), v⟩k′]
= GE


m
X
i=1
⟨X, ai⟩ · vi
!k′ 
 − TE


m
X
i=1
⟨X, ai⟩ · vi
!k′ 

= GE


X
i1,...,ik′ ∈[m]
Πk′
j=1⟨X, aij ⟩ · vij

 − TE


X
i1,...,ik′ ∈[m]
Πk′
j=1⟨X, aij ⟩ · vij


≤
X
i1,...,ik′ ∈[m]
GE
h
Πk′
j=1⟨X, aij ⟩ · vij
i
− TE
h
Πk′
j=1⟨X, aij ⟩ · vij
i
=
X
i1,...,ik′ ∈[m]
Πk′
j=1|vij | · GE
h
Πk′
j=1⟨X, aij ⟩
i
− TE
h
Πk′
j=1⟨X, aij ⟩
i
≤ ∥v∥k′
1 sup
∥u1∥2,...,∥uk′ ∥2=1
GE[Πk′
j=1⟨X, uj⟩] − TE[Πk′
j=1⟨X, uj⟩]
≤ mk′/2∆ (using Lemma A.5)
Corollary A.7. For any k′ ∈ {0, . . . , k}
sup
i1,...,ik′ ∈[m]
GE[Πk′
j=1f (X)ij ] − TE[Πk′
j=1f (X)ij ] ≤ mk′/2∆
Proof. This follows immediately from Lemma A.5 and Claim A.6.
With these moment bounds in hand, we now bound
GE[p≤k−1(F (x))] − TE[p≤k−1(F (x))] (18)
≤ k max
i∈[k] GE[p=i(F (X))] − TE[p=i(F (X))] (19)
≤ k max
i∈[k]
X
α=(j1,...,ji),jl∈[m]
|p=i[α]| · GE[F (X)α] − TE[F (X)α] (20)
≤ k max
i∈[k]
mi · max
α=(j1,...,ji),jl∈[m]
|p=i[α]| · max
α=(j1,...,ji),jl∈[m] GE[F (X)α] − TE[F (X)α] (21)
38

Using Theorem 4.8 of [DKN10] to bound ∥∂βI ̃η
R∥∞ ≤ (2η)|β| for all β ∈ Nm:
≤ k max
i∈[k]
mi · (2η)i
i! · max
α=(j1,...,ji),jl∈[m] GE[F (X)α] − TE[F (X)α] (22)
≤ k max
i∈[k]
mi · (2η)i
i! · mi/2∆ (using Corollary A.7)
≤ k · (2m3.5/ε)k∆ ≤ (4k)k∆ (using k ≥ m6/ε2)
which is at most ε if we choose ∆ ≤ (8k)−k as is chosen in the theorem statement. Part (c). This will follow very similarly to part (a). We may identically argue using the steps from Eq. (16) to Eq. (17). What remains is to show H is sufficiently anti-concentrated in its one-dimensional projections. Note how this is implied if we could show the special case where H fools any pair of m = 2 halfspaces. One convenient way to prove this, is noting how the result of [GKK23] was only too lossy for super-
-constant m, so we may use the results after certifying how the conditions hold for moment-matching F (X) under G and F (X) under H. We rephrase Theorem 5.6 of [GKK23] (their result holds for arbitrary functions of the indicators of halfspaces, but for simplicity we just state their result for intersections of halfspaces).
Theorem A.8 (Theorem 5.6 of [GKK23]). Suppose D and D′ are distributions over Rd such that D satisfies
1. α-strictly subexponential tails: For all ∥u∥ = 1, PrD[|⟨x, u⟩| > t] ≤ exp(−C1t1+α) for some positive constant C1.
2. Anticoncentration: For all ∥u∥ = 1 and continuous intervals T ⊂ R, we have PrD[⟨x, u⟩ ∈ T ] ≤ C2|T | for some positive constant C2.
Moreover, for some k ∈ N, every j-moment tuple is close (for j ∈ {0, . . . , k}):
DE[Πj
l=1Xil ] − DE[Πj
l=1Xil ] ≤
√m
2k
j! dj
1
C5kα/(1+α)
j+1
for some positive constant C5. Let f : Rd → R be the indicator of the intersection of m halfspaces. Then, for some constant C > 0,
DE[f ] − DE′[f ] ≤ k−α/(1+α)√m(C log(√mkα/(1+α)))2m.
We will invoke this result simply with d = 1 and m = 2, using the following immediate corollary:
Corollary A.9. Suppose D and D′ are distributions over R where D has subexponential tails (with α = 1) and anticoncentration as stated in Theorem A.8. There exists some constant C∗ > 0 where if for some k ∈ N, every j-moment tuple is close (for j ∈ {0, . . . , k}):
DE[Πj
l=1Xil ] − DE′[Πj
l=1Xil ] ≤ j!
k
1
C ∗ √k
j+1
Then, for any 0 < ε ≤ 1
2 , as long as k ≥ C∗ · 1
ε2 · log8(1/ε), it holds that
|PrD[x ∈ [L, R]] − PrD′[x ∈ [L, R]]| ≤ ε.
39

Proof. This is just invoking Theorem A.8 with d = 1 and m = 2. The moment condition of Theorem A.8 follows trivially from the assumption of this corollary. We now simply compute
|PrD[x ∈ [L, R]] − PrD′ [x ∈ [L, R]]| ≤ k−α/(1+α)√m(C1 log(√mkα/(1+α)))2m
=
√√k2 (C1 log(√2) + 1
2 log(k))4
≤ C · log(k)4
√k
≤ C · log(C∗)4 + log(1/ε)4 · ε
C∗ log4(1/ε) (by monotonicity and k ≥ C∗ log8(1/ε)
ε2 )
≤ ε (for sufficiently large C∗)
We may invoke Corollary A.9 on F (X)i under G and T , with ε′ = ε/m. The anticoncentration property holds under G by the assumption of our theorem, and the subexponential tails property holds under G since it is equivalent (up to the choice of constant) to our theorem’s subgaussian moment assumption (e.g. see Proposition 2.5.2 of [Ver18]). Using Corollary A.7, the moment tuple difference condition holds as long as
mk/2∆ ≤ 1
k
1
C ∗ √k
k+1
⇐= ∆ ≤ 1
k · mk/2
1
C ∗ √k
k+1
⇐= ∆ ≤ 1
C · C∗ · k
k
(for sufficiently large C > 0, using k ≥ m, C∗ ≥ 1)
which follows from our choice of ∆. Hence, as long as k ≥ C∗ · 1
ε′2 · log8(1/ε′) = C∗ · m2
ε2 · log8(m/ε),
we may conclude, using the steps from Eq. (16) to Eq. (17) in part(a):
| TE[IR(F (X))] − TE[I ̃η
R(F (X))]|
≤
m
X
i=1
PrT [|F (X)i − bi| ≤ 2ρ] + O
∞
X
s=1
m
X
i=1
2−2s · PrH [|F (X)i − bi| ≤ 2s+1ρ]
!
By Corollary A.9:
≤ O(mε′) +
m
X
i=1
PrT [|F (X)i − bi| ≤ 2ρ] + O
∞
X
s=1
m
X
i=1
2−2s · PrH [|F (X)i − bi| ≤ 2s+1ρ]
!
≤ O(mε′) + O(ρmC2) = O(εC2) = O(ε)
40

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:28.200Z
- **Text Length:** 92851 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 40 of 40
