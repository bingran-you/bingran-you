# PDF Document: Say et al. - 2025 - Fairness Meets Privacy Integrating Differential Privacy and Demographic Parity in Multi-class Class.pdf

**File Path:** Say et al. - 2025 - Fairness Meets Privacy Integrating Differential Privacy and Demographic Parity in Multi-class Class.pdf

**Processed Date:** 2026-02-10T18:17:51.589Z

**File Size:** 764.75 KB

**Total Pages:** 35

**Extracted Pages:** 35

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3377

**Title:** Fairness Meets Privacy: Integrating Differential Privacy and Demographic Parity in Multi-class Classification

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Fairness Meets Privacy: Integrating Differential Privacy and
Demographic Parity in Multi-class Classification
Lilian Say(1), Christophe Denis(2), Rafael Pinot(1)
(1) Sorbonne Universite ́, LPSM, UMR 8001 (2) Universit ́e Paris 1 Panth ́eon-Sorbonne, SAMM
Abstract
The increasing use of machine learning in sensitive applications demands algorithms that simultaneously preserve data privacy and ensure fairness across potentially sensitive sub-populations. While privacy and fairness have each been extensively studied, their joint treatment remains poorly understood. Existing research often frames them as conflicting objectives, with multiple studies suggesting that strong privacy notions such as differential privacy inevitably compromise fairness. In this work,-
 we challenge that perspective by showing that differential privacy can be integrated into a fairness-enhancing pipeline with minimal impact on fairness guarantees. We design a postprocessing algorithm, called DP2DP, that enforces both demographic parity and differential privacy. Our analysis reveals that our algorithm converges towards its demographic parity objective at essentially the same rate (up logarithmic factor) as the best non-private methods from the literature. Experiments on both synt-
hetic and real datasets confirm our theoretical results, showing that the proposed algorithm achieves state-of-the-art accuracy/fairness/privacy trade-offs.
Keywords. Multi-class classification, Fairness, Privacy, Demographic parity.
1 Introduction
Machine learning is nowadays at the core of many data-oriented high-stakes applications such as medicine, finance, heavy industry, or recommendation systems on the internet. However, many studies over the last decade have identified major shortcomings of machine learning models, especially in terms of model bias (Angwin et al., 2016) and violation of data privacy (Shokri et al., 2017). These issues raise questions about the legal liability of model providers and lead practitioners to reevaluate th-
e trust they place in such systems. They call for algorithms that simultaneously meet strong privacy and fairness requirements.
Fairness. On the one hand, learning algorithms often inherit bias from training data, leading to undesirable effects on future decisions. In particular, algorithms optimized solely for accuracy on historical data can conflict with modern ethical principles, as they tend to perpetuate existing societal biases. To address this, algorithmic fairness has emerged as a framework for mitigating bias and limiting the influence of sensitive attributes (e.g., gender or ethnicity) on model predictions (Calde-
rs et al., 2009; Hardt et al., 2016; Calmon et al., 2017; Agarwal et al., 2018; Chiappa et al., 2020; Yang et al., 2023). Over the past few years, several notions of fairness have been investigated in the classification setting, including demographic parity (Calders et al., 2009), equalized odds, and equal opportunity (Hardt et al., 2016). Similarly, various algorithmic solution have been proposed to enforce one (or more) of them. These methods are typically grouped into three categories: preproce-
ssing (Calmon et al., 2017), in-processing (Agarwal et al., 2018), and post-processing (Hardt
1
arXiv:2511.18876v1 [stat.ML] 24 Nov 2025

et al., 2016). The effectiveness of each approach depends not only on the chosen fairness criterion but also on the application context, and all methods inevitably involve a trade-off between fairness and model accuracy.
Privacy. Besides, protecting the confidentiality of training data has also become a major concern in machine learning, particularly as models are increasingly trained on sensitive information. Accordingly, several notions have been introduced to formalize privacy guarantees, among which differential privacy has emerged as the dominant standard (Dwork et al., 2006; Dwork and Roth, 2014). In practice, differential privacy can be implemented through different strategies. Early approaches perturbed ei-
ther the output of the learning algorithm or its objective function (Chaudhuri et al., 2011), while more recent methods rely on gradient perturbation during training (Abadi et al., 2016; Altschuler and Talwar, 2022). These techniques provide strong theoretical guarantees, but often degrade model performance, since injecting noise inevitably reduces accuracy. This persistent trade-off underscores the challenge of designing algorithms that are simultaneously private and accurate.
Integrating Fairness & Privacy. Over the past decade, both the challenges of reducing model bias and protecting data privacy in machine learning have been extensively studied. However, integrating these objectives into a single framework and designing algorithms that are simultaneously fair, private, and accurate remains poorly understood, as recently surveyed in (Fioretto et al., 2022; Ferry et al., 2023). Most existing work focused on empirically observing that privacy and fairness can sometimes-
 conflict (Bagdasaryan et al., 2019; Farrand et al., 2020; Uniyal et al., 2021; Chang and Shokri, 2021). These observations, however, lacked theoretical justification, leaving open questions about why and when such conflicts occur. Along similar lines, some theoretical studies have suggested that fairness and privacy can be incompatible, showing that enforcing one constraint may prevent the other from being satisfied or lead to trivial accuracy (Cummings et al., 2019; Sanyal et al., 2022). Yet, th-
ese results often rely on unrealistic assumptions that seldom hold in practice. In short, although much of the literature suggests that differential privacy and algorithmic fairness may be at odds, a detailed analysis of how to integrate them remains lacking.
Our contributions. In this work, we challenge viewpoint that differential privacy and algorithmic fairness are inherently at odds. We show that privacy can be integrated into a fairness-enhancing pipeline with minimal impact on fairness guarantees. Building on recent advances in fair multi-class classification (Denis et al., 2024), we design a post-processing algorithm, called DP2DP, that enforces both demographic parity and differential privacy under very mild technical assumptions on the problem-
 setting. Our analysis shows that the algorithm converges to its demographic parity objective
at a rate of O (log(N)/√N), where N is the number of points used in the post-processing procedure. This rate matches, up to a logarithmic factor, the best non-private methods in the literature. Experiments on both synthetic and real datasets confirm our theoretical results, demonstrating that the proposed algorithm achieves state-of-the-art trade-offs between accuracy, fairness, and privacy. We emphasize that our approach is not a mere adaptation of existing results. In (Denis et al., 2024), the p-
ost-processing step involves minimizing a non-smooth objective, and while a smooth surrogate is used for practical purposes, no theoretical guarantees are provided for it. In contrast, to integrate differential privacy, we adopt a smooth surrogate (specifically, a parametrized log-sum-exp) and our fairness guarantees are established for this proxy. Consequently, our results extend existing results in a non-trivial way, demonstrating that approximate demographic parity can be achieved under both sm-
oothing and privacy constraints.
2

Closely Related Work. Very few prior works have theoretically addressed the integration of fairness and privacy. Jagielski et al. (2019) was the first to propose a post-processing algorithm combining these notions in binary classification, targeting the Equalized Odds fairness goal. However, their scheme only guarantees differential privacy w.r.t. the protected attributes, and its extension to the multi-class setting is unclear. Later, Lowy et al. (2023) introduced an in-processing approach to me-
rge fairness and differential privacy, but as in (Jagielski et al., 2019), only the sensitive attribute is privatized, and no theoretical fairness guarantees are provided More recently, Mangold et al. (2023) presented one of the most promising theoretical results for multi-class classification, showing that differential privacy can have a bounded impact on algorithmic fairness. Yet, this work still lacks explicit fairness guarantees, since it only bounds the fairness loss of the empirical risk min-
imizer, which has no inherent fairness properties. Finally, Tran et al. (2025) proposed very recently a novel scheme that combines differential privacy with a new fairness criterion based on bounding the distribution of features across sensitive groups. However this approach does not provide a closed-form analysis of privacy, and its fairness notion is hard to connect to established fairness metrics
2 Preliminary on Fairness & Privacy
This section is devoted to the introduction of the general framework, as well as the definition of approximate demographic parity constraint, and differential privacy. Specifically, we consider the fair multi-class classification setting where every observation is in the form of a random tuple (X, S, Y ) with unknown distribution P. The input random features (X, S) respectively take their values in Rd and S, where S = {−1, 1} is called the set of sensitive attributes. The output Y belongs to [K], -
with K the number of classes. Within this framework, a classifier g is a function that maps Rd × S onto [K], and its accuracy is evaluated through the misclassification risk R(g) = P (g(X) ̸= Y ).
Demographic parity constraint. As discussed in Section 1, fairness can be formalized in many ways. In this paper, we focus on the notion of demographic parity first introduced in (Dwork et al., 2012). This definition, which captures a form of group fairness, is designed around a notion of unfairness that measures the disparity in terms of prediction between the sensitive attributes. More formally, the unfairness of a classifier g, denoted U(g), is defined as
U(g) = max
k∈[K] P1 [g(X, S) = k] 9 P91 [g(X, S) = k] , (1)
where for any s ∈ S, Ps denote the probability conditioned to S = s. Using the above, we can define the notion of ρ-demographic parity as follows.
Definition 2.1. Let ρ ≥ 0 and U as defined in (1). A classifier g is said to satisfy ρ-demographic parity if its unfairness is bounded above by ρ, i.e., U(g) ≤ ρ.
To enforce demographic parity, we move from simply minimizing the misclassification risk to solving the constrained problem min{R(g) | U(g) ≤ ρ}. As in standard classification, we assume access to labeled observations sampled i.i.d. from P. However, a distinctive advantage of demographic parity is that its unfairness measure depends only on the features and sensitive attributes, not on the labels. Accordingly, unlike other fairness notions, this makes it possible to check or enforce demographic pa-
rity without labeled data, see, e.g., (Chzhen et al., 2020). Hence, we assume access to a training dataset of n labeled examples Dn = {(xi, si, yi) | i ∈ [n]} sampled i.i.d. from P, together with an additional set of N unlabeled examples DN = {(x ̃j, s ̃j) | j ∈ [N ]} sampled i.i.d. from PX ×S , the marginal of P on X × S. The labeled data is used to train the model and optimize accuracy, while the unlabeled data serves to enforce demographic parity.
3

Differential Privacy. Privacy in machine learning is most commonly formalized through the notion of differential privacy (Dwork et al., 2006). Intuitively, a learning algorithm is differentially private if its output does not change significantly when a single individual in the training set is replaced by another. At the dataset level, two datasets D and D′ of the same size are said to be adjacent (denoted D ≈ D′) if they differ in exactly one element. Based on this notion of adjacency, different-
ial privacy is defined as follows.
Definition 2.2. Let ε ≥ 0 and δ ∈ [0, 1]. Consider two arbitrary spaces Z and V, and let m ∈ N. A randomized mechanism M, that takes as input a dataset D ∈ Zm and outputs a random variable with values in V, is said to be (ε, δ)-differentially private if, for any two adjacent datasets D ≈ D′ ∈ Zm and for all measurable subsets V ⊆ V, we have
P[M(D) ∈ V ] ≤ eε P[M(D′) ∈ V ] + δ.
Although widely adopted, (ε, δ)-differential privacy can be challenging to analyze directly, especially for advanced mechanisms. To overcome this limitation, Re ́nyi differential privacy was introduced as a relaxation of differential privacy, based on the Re ́nyi divergence (Mironov, 2017). The R ́enyi divergence of order α > 1 between two probability distributions P and Q with probability densities p and q w.r.t. the Lebesgues measure λ is defined as
Dα(P ∥ Q) = 1
α − 1 log
Z
X
p(x)αq(x)1−αdλ(x).
As α → 1, the R ́enyi divergence converges towards the Kullback-Leibler divergence. Conversely, as α → ∞, it approaches the maximum divergence, commonly used in the differential privacy literature (Dwork and Roth, 2014). Based on this definition, R ́enyi differential privacy can then be formalized as follows.
Definition 2.3. Let α ≥ 1 and ε ≥ 0. A randomized mechanism M satisfies (α, ε)-R ́enyi differential privacy if, for all neighboring datasets D ≈ D′,
Dα Law (M(D)) ∥ Law M(D′) ≤ ε,
where Law(M(D)) and Law(M(D′)) are the reference probability distributions of M(D) and M(D′).
When designing a differentially private mechanism to estimate a function f : Zn → Rp, it is essential to quantify how much the output of f can change when a single data point in the dataset is modified. This sensitivity is captured by the l2 norm of the difference between outputs on adjacent datasets, i.e., ∆(f ) = max
D≈D′ ∥f (D) − f (D′)∥2, (2)
Once the sensitivity is known, f (D) can be released privately using the Gaussian mechanism, which adds Gaussian noise to any output of f . More precisely, for any D ∈ Zn, the mechanism is defined as M(D) = f (D) + Z with Z ∼ N (0, σ2Ip), and with Ip denoting the identity matrix of dimension p.
Then, it can be shown that M satisfies (α, α∆(f)2
2σ2 )-R ́enyi differential privacy for any α ≥ 1 (Mironov, 2017). The Gaussian mechanism is a fundamental building block of privacy-preserving algorithms, and its usefulness extends well beyond one-shot releases. In practice, it is often combined with more advanced techniques. For example, together with the privacy amplification by subsampling phenomenon Balle et al. (2018), it enables the design of iterative private learning algorithms such as differentially private stochastic gradient descent, a-
.k.a., DP-SGD (Abadi et al., 2016; Altschuler and Talwar, 2022).In this context, the R ́enyi differential privacy framework plays a crucial role, as it allows for tight privacy accounting in iterative settings like DP-SGD. Moreover, guarantees expressed under this definition be seamlessly converted back into standard (ε, δ)-differential privacy guarantees, making it one of the gold-standard approaches for analyzing privacy in modern training pipelines.
4

3 DP2DP: Integrating Fairness & Privacy at Minimal Cost
We propose a two-phase training pipeline that integrates demographic parity with differential privacy. In the first phase, we use the labeled training set to build a private classifier. At this stage, the classifier provides privacy guarantees w.r.t. the labeled data Dn but does not yet satisfy the fairness. In the second phase, we introduce a privacy-preserving post-processing step, called DP2DP, which exploits the unlabeled data to enforce demographic parity while maintaining differential privac-
y w.r.t. the unlabeled data DN .
Phase 1. The first phase consists of obtaining a differentially private probit-based classifier that estimates the conditional probabilities
P [Y = k | (X, S) = (x, s)] ,
for every k ∈ [K] and (x, s) ∈ X × S. A natural approach to do so is to train the model from scratch on the labeled dataset Dn using a state-of-the-art differentially private methods such as DP-SGD. This ensures that the estimated probabilities, denoted by (p ̄k(x, s))k∈[K], are computed in a privacypreserving manner. Since no modifications are made to the training algorithm at this stage, the privacy guarantees follow directly from existing DP-SGD accounting methods (Altschuler and Talwar, 2022).-
 Alternatively, if the training process cannot be modified, or if an already trained model is available, differential privacy can still be enforced through output perturbation (Chaudhuri et al., 2011). In this case, a typical strategy is to apply the Gaussian mechanism to the estimated probabilities at the end of training. As explained in Section 2, the strength of the resulting privacy guarantee depends on the sensitivity of the computed probabilities to the modification of a single point in the -
dataset. Without additional information about the probit-based model, one may need to adopt a pessimistic estimate of the sensitivity, which limits the achievable privacy guarantees. However, if additional structural assumptions are available, tighter guarantees can be obtained. For instance, when the classifier is linear and the loss function is strongly convex and Lipschitz in the parameters, the sensitivity of the estimated probabilities is of order O(1/n) (Chaudhuri et al., 2011). Consequently-
, the amount of noise required by the Gaussian mechanism diminishes as n increases, leading to tighter privacy guarantees. In both cases, the outcome of Phase 1 is a set of differentially private conditional probability estimators (p ̄k)k∈[K] w.r.t. Dn, which serve as inputs for our fairness enhancing mechanism in Phase 2.
Phase 2. We now describe our post-processing procedure, called DP2DP, which leverages the unlabeled dataset DN to enforce demographic parity while preserving the privacy guarantees established in Phase 1. Our objective is to recalibrate the fairness of the probit-based classifier so that it satisfies ρ-demographic parity via Lagrangian regularization. Concretely, we build a classifier of the form
gˆρ(x, s) = arg max
k∈[K ]
π ̄sp ̄k(x, s) − s(λ ̄(1)
k −  ̄λ(2)
k ),
where π ̄s denotes a privacy-preserving estimate of the frequency of each sensitive attribute in the unlabeled dataset DN , and the Lagrange multipliers (λ ̄(1), λ ̄(2)) ∈ [0, Cλ]2K , for a fixed parameter Cλ ∈ R∗+, are obtained as the (privatized) solution to the Lagrangian relaxation of the empirical risk minimization problem under the ρ-demographic parity constraint. At a high level, DP2DP operates in two steps: (i) it privatizes the group proportions, enabling privacy-preserving estimation of -
fairness constraints, and (ii) it optimizes the corresponding Lagrange multipliers through a smoothed and privatized objective.
5

i) First, observe that the empirical frequencies, defined as πˆs = 1
N
PN
i=1 1(s ̃i = s), for all s ∈ S depend directly on the unlabeled dataset DN . To prevent any information leakage, we privatize these quantities using the Gaussian mechanism, i.e., we set
π ̄s = πˆs + Z, with Z ∼ N (0, σ2
π), (3)
where σπ2 is the amount of noise used to privatize the probabilities. Then, all subsequent computations rely exclusively on the privatized proportions π ̄s. ii) After obtaining the privatized proportions π ̄s, the next step is to compute the Lagrange multipliers (λ ̄(1), λ ̄(2)) by solving an empirical contrast problem. Carrying out this optimization in a privacy-preserving way is non-trivial, mainly because the objective is non-smooth: it involves a sum of max operators, which prevent the direct -
use of gradient-based methods. To address this difficulty, we adopt the smoothing technique of Nesterov (2005), where non-differentiable convex functions are approximated by smooth surrogates defined via so called strongly convex prox-functions. In particular, choosing the negative entropy Ω(z) = PK
k=1 zk log(zk) as prox-function yields the well-known log-sum-exp (LSEβ) smoothing, for β > 0, defined as
LSEβ(z) = β log
K
X
k=1
exp(zk/β)
!
, ∀z ∈ RK .
This approximation is particularly useful because the negative entropy is 1-strongly convex w.r.t. ∥ · ∥1, which implies that LSEβ is 1/β-smooth w.r.t. ∥ · ∥∞ (Niculae and Blondel, 2017). Moreover, its gradient admits a simple closed form see Section 5 for more details. Plugging this smoothing into the empirical risk minimization yields the surrogate objective
Hˆβ(λ(1), λ(2)) = 1
|S |
X
s∈S
1
Ns
X
x∈DN|X ,s
ˆh(λ; x, s), (4)
where for each s ∈ S, DN|X ,s = {x ∈ X | (x, s) ∈ DN } is the set of non-sensitive features of DN whose
sensitive attribute is s, Ns is the size of DN|X ,s. Furthermore, the per-sample loss ˆh is defined, for any
(x, s) ∈ X × S and λ ∈ [0, Cλ]2K , as
ˆh(λ; x, s) = |S| LSEβ(ls(x; λ)) + ρ
K
X
k=1
λ(1)
k + λ(2)
k , (5)
In the above ls(x; λ) simply abbreviates the vector filled with corrected probabilities estimations, i.e.,
ls(x; λ) = (π ̄sp ̄k(x, s) − s(λ(1)
k − λ(2)
k ))k∈[K]. Using this surrogate objective Hˆ , the multipliers are computed through a differentially private stochastic gradient scheme. At each iteration, a mini-batch {(x ̄1, s ̄1), . . . , (x ̄b, s ̄b)} of size b ∈ [n] is drawn from DN . Each element of this mini-batch (x ̄j, s ̄j) is sampled by first sampling a group s ̄j ∈ S uniformly at random, and then sampling an example x ̄j from DN|X ,s ̄j , i.e., the set of non-sensitive features of DN whose sensitive attribute is s ̄j. The stochastic g-
radient of the smoothed loss is averaged over the minibatch and perturbed with Gaussian noise, yielding a noisy update direction u ̄t. The update rule is then
λt+1 ← Π[0,Cλ]2K λt − ηtu ̄t ,
where ηt is called the learning rate at step t, and ΠK is the Euclidean projection operator on a convex set K. After T iterations, the algorithm outputs the final private and fair classifier, using λT as regularization. The entire post-processing method, called DP2DP, is summarized in Algorithm 1 below. To improve readability, we color-code privacy related steps in purple and fairness related computations in orange.
6

Algorithm 1: DP2DP algorithm
Input: Let DN = {(x ̃1, s ̃1), . . . , (x ̃N , s ̃N )} be the unlabeled dataset, and p ̄1, . . . , p ̄K the probability estimators designed during Phase 1. Furthermore, let ρ ≥ 0 be the target unfairness level, ˆh the associated per-sample loss as defined in (5), and (σπ, σsgd) be the privacy noises. Finally, let β be the smoothing constant, T be the total number of iterations, (ηt)t∈[T ] be the sequence of learning rates, b ∈ [N ] the batch size per iteration, and Cλ > 0 the projection threshold.
i) Compute empirical frequencies
for s ∈ S do
π ̄s ← 1
N
PN
i=1 1 (s ̃i = s) +Z,
with Z ∼ N 0, σπ2 .
ii) Compute Lagrange parameters
for t ∈ [T ] do
Sample minibatch {(x ̄j, s ̄j)}b
j=1 where s ̄j ∼ Unif(S) and x ̄j ∼ Unif(DN|X ,s ̄j )
Compute gradients
For each j ∈ [b], compute the update direction ut(x ̄j, s ̄j) ← ∇λt ˆh(λt; x ̄j, s ̄j)
Add noise
u ̄t ← 1
b
Pb
j=1 ut(x ̄j, s ̄j)+Zt , with Zt ∼ N (0, σs2gdI2K )
Descent
λt+1 ← Π[0,Cλ]2K λt − ηtu ̄t
λ ̄(1) ← λ1T , . . . , λT
K ; λ ̄(2) ← λT
K+1, . . . , λT
2K
Output: gˆρ ← arg max
k∈[K ]
n
π ̄sp ̄k − s λ ̄(1)
k −  ̄λ(2)
k
o
4 Privacy guarantees
We begin by analyzing the privacy cost of our method. The privacy guarantees of the probit computations in Phase 1 depend on the differentially private training procedure employed, and therefore directly follow from either Altschuler and Talwar (2022) or Chaudhuri et al. (2011). Importantly, Phases 1 and 2 are independent from a privacy perspective: Phase 1 only accesses samples from Dn, while Phase 2 can be viewed as a post-processing step that operates solely on DN . Consequently, if Phase 1 sat-
isfies (ε1, δ1)-differential privacy, then to obtain a global privacy guarantee it suffices to show that Phase 2 satisfies (ε2, δ2)-differential privacy. By parallel composition, the entire pipeline then enjoys (max{ε1, ε2}, max{δ1, δ2})-differential privacy. In this section, we establish the privacy guarantees of Phase 2 (i.e., for the DP2DP algorithm), and leave the complete composition to Section 6.
Privacy for DP2DP. The privacy guarantees of DP2DP stem from two independent sources of randomness: i) the privatization of the group frequencies (πˆs)s∈S , and ii) the Gaussian perturbations introduced in the DP-SGD updates when optimizing the smoothed objective Hˆβ. These two components jointly determine the overall privacy cost of Phase 2. In Theorem 4.1, we establish a R ́enyi privacy bound that accounts for both contributions and thereby characterizes the privacy guarantees of DP2DP. The full-
 proof of this theorem can be found in the Appendix.
7

Theorem 4.1. Consider the DP2DP scheme, as in Algorithm 1. If the step-size sequence is such that ηt = η ≤ 2β for all t ∈ [T ], then DP2DP satisfies (α, ε)-R ́enyi differential privacy for all α ≥ 1, where
ε≤ α
2N 2σπ2
+ Ψ (T, b, N, η, σSGD)
where Ψ := Ψ (T, b, N, η, σSGD) is defined as
Ψ = min

 
 
T Q, min
σ1,σ2>0
σ12 +σ22 =σ2
sgd
min
M ∈[T −1]
M Q + α2KC2
λ
2η2σ12M

 
 
,
Q = Sα b
N , bσ2
4 , and for any (q, σ) ∈ [0, 1] × R+ we define Sα(q, σ) as the R ́enyi divergence of level
α between a Gaussian distribution N (0, σ2) and a mixture of Gaussian (1 − q)N (0, σ2) + qN (1, σ2).
Skecth of Proof. The privacy loss of DP2DP naturally decomposes into two components. The first arises from the release of the privatized group proportions (π ̄s)s∈S . Since modifying a single individual in the dataset changes these proportions by at most 1/N , the sensitivity is small. By adding Gaussian noise scaled to this sensitivity, we obtain a R ́enyi differential privacy guarantee for this step. The second source of privacy loss comes from the DP-SGD optimization of the smoothed objective f-
unction Hˆ . Here, each per-sample gradient has sensitivity at most 4, and the resulting privacy bound follows from including this sensitivity computation in (Altschuler and Talwar, 2022, Theorem 3.1). To conclude, the two contributions are combined using standard R ́enyi differential privacy version of the composition rule, yielding the overall privacy bound stated in Theorem 4.1.
Discussion. Theorem 4.1 provides a general R ́enyi differential privacy guarantee, offering a relatively tight quantification of the privacy loss. Such a bound is particularly useful for precise privacy accounting in practice. However, it is often more convenient to express guarantees in the standard (ε, δ)-differential privacy framework. A key implication of Theorem 4.1 that, under suitable conditions on the order α of R ́enyi divergence and on the noise σsgd, the guarantee can be specialized to -
yield (ε, δ)-differentially private guarantees with explicit noise calibrations. In particular, setting noise parameters as follows
σπ < √2N plog(1/δ) + ε − plog(1/δ) , and
σ2
sgd =
16 min
n
T,
l √2KCλN 4β
mo
N 2 plog(1/δ) + ε − plog(1/δ)
2
−1
2 σπ2
,
one recovers (ε, δ)-differential privacy (see the Appendix for details). We stress that this parametrization is provided as an interpretative tool to make Theorem 4.1 more transparent. However, the resulting bounds are significantly looser than those obtained directly from the theorem. Therefore, in practice, privacy guarantees should always be computed using the exact R ́enyi differential privacy results and converted to standard (ε, δ)-DP numerically rather than relying on this simplified analyt-
ical form.
5 Fairness guarantees
Having established the privacy properties of our approach, we now turn to its fairness guarantees. Recall that our objective is not only to preserve individual privacy but also to enforce demographic
8

parity in the resulting classifier. The theorem below formalizes this by providing a bound on the expected unfairness of the classifier produced by our method.
Theorem 5.1. Consider DP2DP scheme, as defined in Algorithm 1 with a fixed stepsize ηt = η ≤ 2β for all t ∈ [T ]. Let us also denote by πmin = min{P [S = s] | s ∈ S} the minimum group size within sensitive attributes w.r.t. P. Then, there exist constants C1 > 0 depending on K and πmin, γ > 0, and C2 > 0 that depends on K, and γ, such that for any conditional probabilities p ̄k computed in Phase 1, one has
E[U (gˆρ)] ≤ ρ + C1
√N + C2e− γ
β +4
r √2KCλ log T
β√T 2√2 + ρ
√
2K + σsgd
√2K
b.
In the above, the expectation is taken over the sampling of DN and the randomness of the algorithm (mini-batch sampling and Gaussian noise).
Proof sketch. The fairness bound can be understood as the combination of three distinct contributions. First, the baseline term ρ + √C1N reflects the intrinsic constraint relaxation present even in the non
private fair classifier, and therefore captures the best achievable approximation to demographic parity in this setting. The control of this term essentially sums up to bounding the deviation between a cumulative distribution function and its empirical counterpart. Second, the use of the LSEβ smoothing introduces an additional approximation error. This approximation of the max operator, induces an exponential term C2e−γ/β, vanishes as the smoothing parameter β decreases. Finally, the privatization-
 step contributes a further error term. This term, alike existing bounds in private non-fair optimization such as Bassily et al. (2014), depends explicitly on the number of iterations T , the smoothing parameter β, and the noise level σsgd. Carefully combining these components yiedls the result.
This theorem establishes that the unfairness of our method remains close to the target level ρ. To make this guarantee more interpretable, Corollary 5.1 presents a simplified version of Theorem 5.1 derived under natural parameter choices.
Corollary 5.1. Let ρ ≥ 0, and fix T = N 2 and β = 2γ/ log N . Then there exists a constant C∗, depending on K ,πmin, Cλ ,b ,ρ, and σsgd such that
E[U (gˆρ)] ≤ ρ + C∗
log N
√N .
As before, the expectation is taken jointly over the sampling of DN and the randomness of the algorithm, including mini-batch selection and Gaussian noise.
Discussion. The above shows that, under natural parameter choices, the unfairness gap to the target ρ decays at rate C∗
log(N )
√N . Importantly, the constant C∗ depends explicitly on the noise parameter
σsgd, as we have C∗ ∈ O(√σsgd). This dependence directly connects the fairness analysis to the privacy calibration in Section 4. In particular, when the noise level is chosen to ensure (ε, δ)-differential privacy
and T, β are fixed appropriately, we obtain σsgd ∈ O plog N/N . Substituting this into C∗ shows
that privatization does not affect the asymptotic convergence rate more than a factor log(N ) compared to the state-of-the-art non-private result from Denis et al. (2024). Taken together, the results of Section 4 and Section 5 demonstrate that privacy-preserving mechanisms can be integrated into fairness pipelines with only minimal overhead. In fact, the additional fairness cost induced by privatization vanishes as N grows, ensuring that the algorithm approaches the target level ρ at rate log(N)
√N while remaining differentially private. It is important to note that the
bound obtained in Theorem 5.1 does not depend either on the sampling of the labels dataset Dn nor on the privacy preserving mechanism applied in Phase 1. Notably, our fairness result is distribution-free
9

which is a clear advantage w.r.t. the in-processing algorithm proposed in (Lowy et al., 2023). Indeed, in-processing methods involve the minimization, over a suitable family of predictors, of an empirical risk. Therefore, theoretical guarantees on the resulting classifier require assumptions on the considered set of predictors. In contrast, we do not demand any assumption on the set (p ̄k)k∈[K].
6 Experimental Results
We now present empirical results supporting our theoretical analysis. We begin with controlled synthetic experiments, which allow us to investigate the line between privacy and fairness across different regimes. We then turn to real-world datasets, where we compare our method against two baselines to demonstrate its effectiveness in practical settings. The predictive performance is measured by empirical accuracy on a held-out test set that we denote T . Fairness is quantified using empirical demog-
raphic parity, i.e.,
Uˆ(g) = max
k∈[K ]
νg|1(k) − νg|−1(k) ,
where νg|s(k) is the empirical distribution of the predicted labels conditional on S = s, i.e., g(X, s) =
k. Smaller values of Uˆ(g) indicate stronger fairness guarantees. For privacy accounting, across all experiments, we fix δ = o(1/N ) and compute the corresponding ε bounds given the noises using the dp-accounting library with exact privacy computation (Google, 2020).
Bounded impact of privacy on fairness. The objective of our first experiment is to validate the fact that our scheme does not suffer an important fairness loss compared to a non-private scheme. To do so, we compare our fairness performance against the state-of-the-art in fair multiclass classification from (Denis et al., 2024) across several unfairness regimes. We follow the data generation procedure of this paper which allows explicit control over the degree of unfairness via a parameter p ∈ [0, -
1]. Setting p = 0.5 produces fair data, while p ∈ {0, 1} yields maximally unfair distributions. Data are sampled from a Gaussian Mixture Model with 10 components, feature dimension d = 20, and 6 classes. We generate 10,000 samples split into 60% training, 20% unlabeled, and 20% test subsets, and vary the unfairness parameter across p ∈ {0.5, 0.6, 0.7, 0.8, 0.9, 0.99}. In line with Denis et al. (2024), the classifier is trained only on the non-sensitive attribute. We use a multiclass logistic regre-
ssion model to estimate conditional class probabilities. Output perturbation is then applied to obtain p ̄k as described in Section 3. DP2DP is ran with smoothing parameter β = 10−5, and DP-SGD is used with batch
size b = 128 over T = 100 iterations, with learning rate ηt = 1/√t. Results are averaged over 30 independent runs. For details and additional experiments, refer to Appendix. Figure 1 (left) reports the performance of the our method as the fairness tolerance ρ varies. We observe that even with the LSEβ smoothing, our non-private DP2DP essentially matches the fairness/accuracy profile of Denis et al. (2024), indicating that the approximation error induced by smoothing is negligible in practice. More-
 importantly, the private DP2DP with ε = 0.46 remains very close to both non-private baselines. This illustrates the privacy/fairness/accuracy trade-off predicted by Theorem 5.1: the privatization step induces only a controlled degradation, while the expected unfairness of the resulting classifier stays within the theoretical guarantees around the target ρ. Figure 1 (right) investigates the effect of the intrinsic unfairness of the data, controlled by parameter p. Since our non-private DP2DP alrea-
dy tracks Denis et al. (2024) method closely, we adopt it as the reference baseline. The results show that even in highly biased regimes (e.g., p = 0.99), our private DP2DP remains close to its non-private counterpart. This empirical observation aligns with Theorem 5.1 and Corollary 5.1, which guarantee that the unfairness gap to ρ remains bounded and converges at rate log(N)
√N , despite the additional noise required for privacy.
10

0.05 0.10 0.15
Unfairness
0.650
0.675
0.700
0.725
0.750
0.775
0.800
0.825
Accuracy
= 0.15
= 0.0
Non-Private Unfair Denis et al. (2024) Non-Private DP2DP DP2DP
0.0 0.1 0.2 0.3
Unfairness
0.5
0.6
0.7
0.8
Accuracy
p = 0.99
p = 0.5
p = 0.99
p = 0.99
Non-Private Unfair Non-Private DP2DP ( =0.0) Non-Private DP2DP ( =0.1) DP2DP ( =0.0) DP2DP ( =0.1)
Figure 1: Synthetic experiments with d = 20 features, K = 6 classes, 10,000 samples. Left: varying fairness tolerance ρ (p = 0.75). Right: varying unfairness parameter p. The combination of Phase 1 and Phase 2 satisfy (0.46, 10−5)-differential privacy.
0.16 0.18 0.20 0.22
Misclassification Error
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.200
Fairness Violation
Tran et al. (2021a) Tran et al. (2021b) Lowy et al. (2023) Non-Private Unfair Non-Private DP2DP DP2DP
0.16 0.18 0.20 0.22
Misclassification Error
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.200
Fairness Violation
Tran et al. (2021a) Tran et al. (2021b) Lowy et al. (2023) Non-Private Unfair Non-Private DP2DP DP2DP
Figure 2: Comparison of our method (in terms of fairness/misclassification) with previous work on the Adult dataset under (ε, δ)-differential privacy with δ = 10−5. The left panel shows ε = 0.5, and the right panel for ε = 1.0.
Comparing to state-of-the-art of real data. The objective of our second experiment is to demonstrate our experimental superiority w.r.t. the state of the art. To do so, we compare our method to 2 baselines attempting to merge privacy and fairness in classification tasks existing private baselines (Tran et al., 2021a,b; Lowy et al., 2023) on the fairness-aware benchmark Adult Income dataset (Becker and Kohavi, 1996). This dataset contains 48,842 records from the U.S. Census, each described by 14 de-
mographic attributes such as age, gender, education, and occupation. We designate gender as the sensitive attribute and focus on the binary classification task of predicting whether an individual earns more than $50k per year. Following the preprocessing pipeline of Lowy et al. (2023), categorical and numerical features are transformed into 102 quantitative variables. The data are split into 55% training, 20% unlabeled, and 25% test sets. We employ a binary logistic regression, applying output per-
turbation to the class probabilities to obtain p ̄k. As in the synthetic setting, DP2DP is run with β = 10−5 and DP-SGD with batch size b = 128 for T = 100 iterations, with learning rate
ηt = 1/√t. Results are averaged over 15 independent runs. For details and additional experiments, refer to Appendix.
11

Figures 2 reports the fairness/accuracy trade-offs on the Adult dataset under two different privacy budgets, ε = 0.5 and ε = 1.0 for the methods we consider. In both regimes, our DP2DP method consistently outperforms existing baselines achieving strictly better misclassification error at comparable or lower demographic parity violations. This demonstrates that combining fairness post-processing with differential privacy, as proposed in DP2DP, leads to significantly improved practical trade-offs c-
ompared to prior approaches. Note that the gap between DP2DP and its non-private counterpart is small across both privacy levels. This observation directly reflects Theorem 5.1: as N grows large, the fairness cost of privatization diminishes at rate log(N)
√N , ensuring that the private classifier converges to
the non-private one. On the Adult dataset, which contains nearly 50,000 examples, this asymptotic effect is already clearly visible in practice. Similar observation hold on the Parkinson (Tsanas and Little, 2009) and the Credit Card dataset (Yeh, 2009) (see Appendix details on additional experiments).
7 Perspectives
In future work, we plan to extend our procedure in several directions. First, handling multiple sensitive attributes is a natural next step, as it would broaden the applicability of our method. Second, we aim to generalize our approach to other fairness notions, such as Equalized Odds, which necessitate the use of labeled data in Phase 2. Finally, addressing the unawareness setting (where only the feature vector X is available at prediction time) remains an important and challenging open direction-
 for future work.
12

References
Martin Abadi, Andy Chu, Ian Goodfellow, H. Brendan McMahan, Ilya Mironov, Kunal Talwar, and Li Zhang. Deep learning with differential privacy. In Proceedings of the 2016 ACM SIGSAC Conference on Computer and Communications Security, pages 308–318. Association for Computing Machinery, 2016. ISBN 9781450341394. doi: 10.1145/2976749.2978318.
A. Agarwal, A. Beygelzimer, M. Dudik, J. Langford, and H. Wallach. A reductions approach to fair classification. In Proceedings of the 35th International Conference on Machine Learning, 2018.
Jason Altschuler and Kunal Talwar. Privacy of noisy stochastic gradient descent: More iterations without more privacy loss. In S. Koyejo, S. Mohamed, A. Agarwal, D. Belgrave, K. Cho, and A. Oh, editors, Advances in Neural Information Processing Systems, volume 35, pages 3788–3800. Curran Associates, Inc., 2022.
Julia Angwin, Jeff Larson, Surya Mattu, and Lauren Kirchner. Machine bias, 05 2016.
Eugene Bagdasaryan, Omid Poursaeed, and Vitaly Shmatikov. Differential privacy has disparate impact on model accuracy. In H. Wallach, H. Larochelle, A. Beygelzimer, F. d'Alch ́e-Buc, E. Fox, and R. Garnett, editors, Advances in Neural Information Processing Systems, volume 32. Curran Associates, Inc., 2019.
Borja Balle, Gilles Barthe, and Marco Gaboardi. Privacy amplification by subsampling: tight analyses via couplings and divergences. In Proceedings of the 32nd International Conference on Neural Information Processing Systems, NIPS’18, page 6280–6290. Curran Associates Inc., 2018.
Raef Bassily, Adam Smith, and Abhradeep Thakurta. Private empirical risk minimization: Efficient algorithms and tight error bounds. In 2014 IEEE 55th Annual Symposium on Foundations of Computer Science, pages 464–473, 2014. doi: 10.1109/FOCS.2014.56.
Barry Becker and Ronny Kohavi. Adult. UCI Machine Learning Repository, 1996. DOI: https://doi.org/10.24432/C5XW20.
Stephen Boyd and Lieven Vandenberghe. Convex Optimization. Cambridge University Press, 2004.
T. Calders, F. Kamiran, and M. Pechenizkiy. Building classifiers with independency constraints. In IEEE international conference on Data mining, 2009.
Flavio Calmon, Dennis Wei, Bhanukiran Vinzamuri, Karthikeyan Natesan Ramamurthy, and Kush R Varshney. Optimized pre-processing for discrimination prevention. In Advances in Neural Information Processing Systems, volume 30, 2017.
Hongyan Chang and Reza Shokri. On the Privacy Risks of Algorithmic Fairness . In 2021 IEEE European Symposium on Security and Privacy (EuroSP), pages 292–303, Los Alamitos, CA, USA, September 2021. IEEE Computer Society. doi: 10.1109/EuroSP51992.2021.00028.
Kamalika Chaudhuri, Claire Monteleoni, and Anand D. Sarwate. Differentially private empirical risk minimization. J. Mach. Learn. Res., 12:1069–1109, July 2011. ISSN 1532-4435.
S. Chiappa, R. Jiang, T. Stepleton, A. Pacchiano, H. Jiang, and J. Aslanides. A general approach to fairness with optimal transport. In AAAI, 2020.
13

Evgenii Chzhen, Christophe Denis, Mohamed Hebiri, Luca Oneto, and Massimiliano Pontil. Fair regression via plug-in estimator and recalibration with statistical guarantees. In H. Larochelle, M. Ranzato, R. Hadsell, M.F. Balcan, and H. Lin, editors, Advances in Neural Information Processing Systems, volume 33, pages 19137–19148. Curran Associates, Inc., 2020.
Rachel Cummings, Varun Gupta, Dhamma Kimpara, and Jamie Morgenstern. On the compatibility of privacy and fairness. In Adjunct Publication of the 27th Conference on User Modeling, Adaptation and Personalization, UMAP’19 Adjunct, page 309–315, New York, NY, USA, 2019. Association for Computing Machinery. ISBN 9781450367110. doi: 10.1145/3314183.3323847.
C. Denis, R. Elie, M. Hebiri, and F. Hu. Fairness guarantees in multi-class classification with demographic parity. Journal of Machine Learning Research, 25(130):1–46, 2024.
Cynthia Dwork and Aaron Roth. The algorithmic foundations of differential privacy. Foundations and Trends® in Theoretical Computer Science, 9(3–4):211–407, 2014. ISSN 1551-305X. doi: 10.1561/ 0400000042.
Cynthia Dwork, Frank McSherry, Kobbi Nissim, and Adam Smith. Calibrating noise to sensitivity in private data analysis. In Theory of Cryptography, Third Theory of Cryptography Conference, TCC 2006, volume 3876 of Lecture Notes in Computer Science, pages 265–284. Springer, 2006. doi: 10.1007/11681878 14.
Cynthia Dwork, Moritz Hardt, Toniann Pitassi, Omer Reingold, and Richard Zemel. Fairness through awareness. In Proceedings of the 3rd Innovations in Theoretical Computer Science Conference, ITCS ’12, page 214–226, New York, NY, USA, 2012. Association for Computing Machinery. ISBN 9781450311151. doi: 10.1145/2090236.2090255.
Tom Farrand, Fatemehsadat Mireshghallah, Sahib Singh, and Andrew Trask. Neither private nor fair: Impact of data imbalance on utility and fairness in differential privacy. In Proceedings of the 2020 Workshop on Privacy-Preserving Machine Learning in Practice, PPMLP’20, page 15–19, New York, NY, USA, 2020. Association for Computing Machinery. ISBN 9781450380881. doi: 10.1145/3411501.3419419.
Julien Ferry, Ulrich Aı ̈vodji, S ́ebastien Gambs, Marie-Jos ́e Huguet, and Mohamed Siala. Sok: Taming the triangle – on the interplays between fairness, interpretability and privacy in machine learning, 2023.
Ferdinando Fioretto, Cuong Tran, Pascal Van Hentenryck, and Keyu Zhu. Differential privacy and fairness in decisions and learning tasks: A survey. In Lud De Raedt, editor, Proceedings of the Thirty-First International Joint Conference on Artificial Intelligence, IJCAI-22, pages 5470–5477. International Joint Conferences on Artificial Intelligence Organization, 7 2022. doi: 10.24963/ijcai. 2022/766. Survey Track.
Google. dp accounting: Differential privacy accounting library, 2020. URL https://github.com/ google/differential-privacy/tree/main/python/dp_accounting.
L ́aszl ́o Gy ̈orfi, Michael Kohler, Adam Krzyzak, and Harro Walk. A Distribution-Free Theory of Nonparametric Regression. Springer series in statistics. Springer, 2002.
Moritz Hardt, Eric Price, and Nathan Srebro. Equality of opportunity in supervised learning. In Proceedings of the 30th International Conference on Neural Information Processing Systems, NIPS’16, page 3323–3331, 2016. ISBN 9781510838819.
14

Matthew Jagielski, Michael Kearns, Jieming Mao, Alina Oprea, Aaron Roth, Saeed Sharifi Malvajerdi, and Jonathan Ullman. Differentially private fair learning. In Kamalika Chaudhuri and Ruslan Salakhutdinov, editors, Proceedings of the 36th International Conference on Machine Learning, volume 97 of Proceedings of Machine Learning Research, pages 3000–3008. PMLR, 09–15 Jun 2019.
Andrew Lowy, Devansh Gupta, and Meisam Razaviyayn. Stochastic differentially private and fair learning. In Awa Dieng, Miriam Rateike, Golnoosh Farnadi, Ferdinando Fioretto, Matt Kusner, and Jessica Schrouff, editors, Proceedings of the Workshop on Algorithmic Fairness through the Lens of Causality and Privacy, volume 214 of Proceedings of Machine Learning Research, pages 86–119. PMLR, 12 2023.
Paul Mangold, Micha ̈el Perrot, Aure ́lien Bellet, and Marc Tommasi. Differential privacy has bounded impact on fairness in classification. In Andreas Krause, Emma Brunskill, Kyunghyun Cho, Barbara Engelhardt, Sivan Sabato, and Jonathan Scarlett, editors, Proceedings of the 40th International Conference on Machine Learning, volume 202 of Proceedings of Machine Learning Research, pages 23681–23705. PMLR, 23–29 Jul 2023.
P. Massart. The Tight Constant in the Dvoretzky-Kiefer-Wolfowitz Inequality. The Annals of Probability, 18(3):1269 – 1283, 1990. doi: 10.1214/aop/1176990746.
Ilya Mironov. Re ́nyi differential privacy. In 2017 IEEE 30th Computer Security Foundations Symposium (CSF), page 263–275. IEEE, August 2017. doi: 10.1109/csf.2017.11.
Yu. Nesterov. Smooth minimization of non-smooth functions. Mathematical Programming, 103(1): 127–152, May 2005. ISSN 1436-4646. doi: 10.1007/s10107-004-0552-5. URL https://doi.org/ 10.1007/s10107-004-0552-5.
Yurii Nesterov. Lectures on Convex Optimization, volume 137 of Springer Optimization and Its Applications. Springer International Publishing, 2018. ISBN 978-3-319-91577-7 978-3-319-91578-4. doi: 10.1007/978-3-319-91578-4.
Vlad Niculae and Mathieu Blondel. A regularized framework for sparse and structured neural attention. In I. Guyon, U. Von Luxburg, S. Bengio, H. Wallach, R. Fergus, S. Vishwanathan, and R. Garnett, editors, Advances in Neural Information Processing Systems, volume 30. Curran Associates, Inc., 2017.
Amartya Sanyal, Yaxi Hu, and Fanny Yang. How unfair is private learning ? In The 38th Conference on Uncertainty in Artificial Intelligence, 2022.
Reza Shokri, Marco Stronati, Congzheng Song, and Vitaly Shmatikov. Membership inference attacks against machine learning models. In 2017 IEEE Symposium on Security and Privacy (SP), pages 3–18. IEEE, 2017.
Cuong Tran, My Dinh, and Ferdinando Fioretto. Differentially private empirical risk minimization under the fairness lens. In M. Ranzato, A. Beygelzimer, Y. Dauphin, P.S. Liang, and J. Wortman Vaughan, editors, Advances in Neural Information Processing Systems, volume 34, pages 2755527565. Curran Associates, Inc., 2021a.
Cuong Tran, Ferdinando Fioretto, and Pascal Van Hentenryck. Differentially private and fair deep learning: A lagrangian dual approach. Proceedings of the AAAI Conference on Artificial Intelligence, 35(11):9932–9939, May 2021b. doi: 10.1609/aaai.v35i11.17193.
15

Khang Tran, Ferdinando Fioretto, Issa Khalil, My T. Thai, Linh Thi Xuan Phan, and NhatHai Phan. Fairdp: Achieving fairness certification with differential privacy. In 2025 IEEE Conference on Secure and Trustworthy Machine Learning (SaTML), pages 956–976, 2025. doi: 10.1109/SaTML64287. 2025.00058.
Athanasios Tsanas and Max Little. Parkinsons Telemonitoring. UCI Machine Learning Repository, 2009. DOI: https://doi.org/10.24432/C5ZS3N.
Archit Uniyal, Rakshit Naidu, Sasikanth Kotti, Sahib Singh, Patrik Joslin Kenfack, FatemehSadat Mireshghallah, and Andrew Trask. Dp-sgd vs pate: Which has less disparate impact on model accuracy? ArXiv, abs/2106.12576, 2021.
J. Yang, A. Soltan, D. Eyre, and D. Clifton. Algorithmic fairness and bias mitigation for clinical machine learning with deep reinforcement learning. Nature Machine Intelligence, 5(8):884–894, 2023.
I-Cheng Yeh. Default of Credit Card Clients. UCI Machine Learning Repository, 2009. DOI: https://doi.org/10.24432/C55S3H.
16

APPENDIX
ORGANIZATION OF THE APPENDIX
Appendix A recalls standard analytical definitions. Appendix B gathers auxiliary technical results useful for the following proofs. Appendix C provides the complete privacy analysis of the proposed DP2DP algorithm. Appendix D contains the fairness proofs. Finally, Appendix E presents additional experimental details, including the synthetic data generation procedure and extended empirical results on benchmark datasets.
A COMPLEMENTARY DEFINITIONS
This section recalls a few standard definitions and results used in the analysis, in particular regarding Lipschitz continuity and smoothness of differentiable functions. Throughout, we denote by ∥·∥ a norm on Rn, and by ∥·∥∗ its associated dual norm.
Definition A.1 (L-Lipschitz continuity). A function f : Rn → R is said to be L-Lipschitz with respect to ∥·∥ if for all x, y ∈ Rn,
|f (x) − f (y)| ≤ L∥x − y∥.
Equivalently, when f is differentiable, this is implied by ∥∇f (x)∥∗ ≤ L for all x ∈ Rn.
Definition A.2 (β-smoothness). A differentiable function f : Rn → R is said to be β-smooth with respect to ∥·∥ if its gradient is β-Lipschitz, i.e.,
∥∇f (x) − ∇f (y)∥∗ ≤ β∥x − y∥, ∀x, y ∈ Rn.
Equivalently, when f is twice differentiable, this is implied by ∥∇2f (x)∥op ≤ β for all x ∈ Rn, where the operator norm is induced by ∥·∥ and ∥·∥∗.
Proposition A.1 (Descent lemma (Nesterov, 2018, Theorem 2.1.5)). If f is β-smooth with respect to ∥·∥, then for all x, y ∈ Rn,
f (y) ≤ f (x) + ⟨∇f (x), y − x⟩ + β
2 ∥y − x∥2.
Equivalently, in dual form,
f (x) + ⟨∇f (x), y − x⟩ + 1
2β ∥∇f (x) − ∇f (y)∥2
∗ ≤ f (y).
Lemma A.1 (Gradient–function gap inequality). Let f : Rn → R be a differentiable and β-smooth function. Suppose there exists a global minimizer x∗ ∈ Rn such that x∗ ∈ arg minx∈Rn f (x). Then, for all x ∈ Rn,
∥∇f (x)∥2
∗ ≤ 2β f (x) − f (x∗) .
Proof. Let x ∈ Rn, since f is β-smooth, Proposition A.1 gives
f (x∗) + ⟨∇f (x∗), x − x∗⟩ + 1
2β ∥∇f (x∗) − ∇f (x)∥2
∗ ≤ f (x).
Rearranging terms and use the first order condition ∇f (x∗) = 0 yields
∥∇f (x)∥2
∗ ≤ 2β(f (x) − f (x∗)).

Definition A.3 (Operator norms). Let ∥·∥p and ∥·∥q be vector norms on Rn and Rm, respectively. For A ∈ Rm×n, the operator norm is
∥A∥p,q := sup
v̸=0
∥Av∥q
∥v∥p
= inf{c > 0 : ∥Av∥q ≤ c∥v∥p ∀v ∈ Rn}.
We use the following shorthands:
∥A∥2 := ∥A∥2,2 =
q
λmax(A⊤A), ∥A∥1 := ∥A∥1,1 = max
j=[n]
m
X
i=1
|aij|, ∥A∥∞ := ∥A∥∞,∞ = max
i=[m]
n
X
j=1
|aij |.
B TECHNICAL LEMMAS
In this section, we collect several auxiliary mathematical results that are used throughout the privacy and fairness analyses. These lemmas formalize basic probability result, regularity properties of the per-sample loss, and existence results for the optimization problem introduced in the main paper.
Lemma B.1 (Gy ̈orfi et al., 2002, Lemma 4.1). Let Z ∼ Bin(N, p) and adopt the convention 0
0 = 0.
Then
E 1 (Z ≥ 1)
Z ≤2
(N + 1)p .
Proof. We first compute the auxiliary identity
E1
Z+1 =
N
X
k=0
1
k+1
N
k pk(1 − p)N−k = 1 − (1 − p)N+1
(N + 1)p . (6)
Indeed, using 1
k+1
N
k= 1
N +1
N +1
k+1 ,
N
X
k=0
1
k+1
N
k pk(1 − p)N−k = 1
N +1
N
X
k=0
N +1
k + 1 pk(1 − p)N−k.
Write pk = pk+1/p and change index j = k + 1:
N
X
k=0
1
k+1
N
k pk(1 − p)N−k = 1
(N + 1)p
N +1
X
j=1
N +1
j pj (1 − p)(N+1)−j .
Now using the binomial formula (x + y)n = Pn
k=1
n
k xk(y)n−k + yn, ∀x, y ∈ R, n ∈ N:
N
X
k=0
1
k+1
N
k pk(1 − p)N−k = 1
(N + 1)p 1 − (1 − p)N+1 ,
which proves (6). Next, for each integer z ≥ 0 we have the pointwise bound
1(z ≥ 1)
z ≤ 21(z ≥ 1)
z+1 ≤ 2
z + 1 . (7)
Taking expectations in (7) and using (6),
E 1 (Z ≥ 1)
Z ≤ 2E 1
Z + 1 = 2 · 1 − (1 − p)N+1
(N + 1)p ≤ 2
(N + 1)p ,
since 1 − (1 − p)N+1 ≤ 1.
18

The next result establishes key regularity properties of the per-sample loss function used in our fairness objective.
Lemma B.2. For all (x, s) ∈ X × S, the per-sample loss ˆh(·; x, s) as defined in (5) is convex, (2√2 +
ρ√2K)-Lipschitz with respect to ∥·∥2 and 8/β-smooth with respect to ∥·∥∞.
Proof. Denote λ = (λ(1), λ(2))⊤ ∈ R2K and μ = (μ(1), μ(2))⊤ ∈ R2K . For all (x, y) ∈ X × S, note we can rewrite
ls(x; λ) = as(x) + Jsλ, Js = −sIK sIK ∈ RK×2K , as(x) = (π ̄sp ̄1(x, s), . . . , π ̄sp ̄K (x, s))⊤ .
1. Convexity. Let (x, y) ∈ X × S, LSEβ is convex on RK (Boyd and Vandenberghe, 2004, Examples 3.1.5) and ls(x; ·) is affine in λ. Therefore LSEβ ◦ ls(x; ·) is convex in λ. The linear
regularizer is convex as well, so ˆh(·; x, s) is convex.
2. Lipschitzness. By the chain rule, for all (x, y) ∈ X × S,
∇λLSEβ(ls(x; λ)) = J ⊤
s softmaxβ(ls(x; λ)).
Hence
∇λˆh(λ; x, s) = |S|J⊤
s softmaxβ(ls(x; λ)) + ρ
"
1K
1K
#
.
Since JsJs⊤ = 2s2IK , by Definition A.3 we have ∥Js∥2 = ∥Js⊤∥2 = |s|√2. Also, ∥softmaxβ(ls(x; λ))∥2 ≤ 1, and s ∈ {−1, 1}. Thus for all (x, y) ∈ X × S we have
∥|S|J ⊤
s softmaxβ(ls(x; λ))∥2 ≤ |S| ∥J ⊤
s ∥2∥softmaxβ(ls(x; λ))∥2 ≤ |S||s|√2 = 2√2.
The regularizer contributes ρ 1K
1K 2
= ρ√2K. Combining gives the stated Lipschitz constant.
∇λˆh(λ; x, s)
2
= |S|J ⊤
s softmaxβ(ls(x; λ)) + ρ
"
1K
1K
#
2
≤ |S|J ⊤
s softmaxβ(ls(x; λ))
2
+ ρ 1K
1K 2
≤ 2√2 + ρ
√
2K .
3. Smoothness. Throughout, recall that LSEβ is 1
β -smooth, i.e., its gradient, softmaxβ, is 1
βLipschitz from (RK , ∥·∥∞) to (RK , ∥·∥1). Moreover, by Definition A.3, ∥Js∥∞= 2|s| and ∥Js⊤∥1= ∥Js∥∞= 2|s|. Therefore, we have for all (x, y) ∈ X × S,
∇λˆh(λ; x, s) − ∇λˆh(μ; x, s) = |S|J⊤
s (softmaxβ(ls(x; λ)) − softmaxβ(ls(x; μ))) .
Taking l1 norms and using ∥Av∥1 ≤ ∥A∥1∥v∥1 ∀v,
∇λˆh(λ; x, s) − ∇λˆh(μ; x, s)
1
≤ |S|∥J⊤
s ∥1 ∥softmaxβ(ls(x; λ)) − softmaxβ(ls(x; μ))∥1 .
By 1
β -Lipschitzness of softmaxβ,
∥softmaxβ(ls(x; λ)) − softmaxβ(ls(x; μ))∥1 ≤ 1
β ∥ls(x; λ) − ls(x; μ)∥∞ .
19

Since ls(x; ·) is linear with Js, we have
∥ls(x; λ) − ls(x; μ)∥∞ = ∥Js(λ − μ)∥∞ ≤ ∥Js∥∞∥λ − μ∥∞.
Combining the above,
∇λˆh(λ; x, s) − ∇λˆh(μ; x, s) 1 ≤ |S|
β ∥J ⊤
s ∥1 ∥Js∥∞ ∥λ − μ∥∞.
Using ∥Js⊤∥1 = ∥Js∥∞ = 2|s| and |S| = 2 with |s| = 1,
∇λˆh(λ; x, s) − ∇λˆh(μ; x, s)
1
≤8
β ∥λ − μ∥∞.
Thus, ∇λˆh(·; x, s) is 8
β -Lipschitz.
The following lemma establishes the existence of a solution to the empirical objective Hˆβ.
Lemma B.3 (Existence of a minimizer). There exists at least one solution, that lies in a compact
subset [0, Cλ]2K ⊂ R2+K for some Cλ > 0, to the problem minλ∈R2K
+
Hˆβ(λ), where
Hˆβ(λ(1), λ(2)) =
X
s∈S
1
Ns
X
x∈DN|X ,s
LSEβ (ls(x; λ)) + ρ
K
X
k=1
λ(1)
k + λ(2)
k.
Proof. First, Hˆβ is continuous and convex in (λ(1), λ(2)) from Lemma B.2. We now show that Hˆβ is coercive. Recall that for any x ∈ Rn,
max
i∈[n]
xi ≤ LSEβ(x) ≤ max
i∈[n]
xi + log n.
Therefore,
X
s∈S
1
Ns
X
x∈DN|X ,s
LSEβ (ls(x; λ)) ≥
X
s∈S
1
Ns
X
x∈DN|X ,s
max
k∈[K ]
n
π ̄sp ̄k(x, s) − s λ(1)
k − λ(2)
k
o
.
Using that averages of maxima dominate maxima of averages and then exchanging the order of max and P,
X
s∈S
1
Ns
X
x∈DN|X ,s
mkax{π ̄sp ̄k(x, s) − s(λ(1)
k − λ(2)
k )} ≥
X
s∈S
mkax



1
Ns
X
x∈DN|X ,s
π ̄sp ̄k(x, s) − s(λ(1)
k − λ(2)
k)



≥ mkax



X
s∈S


π ̄s
Ns
X
x∈DN|X ,s
p ̄k(x, s) − s(λ(1)
k − λ(2)
k)





Since s ∈ {−1, 1} we have
X
s∈S
1
Ns
X
x∈DN|X ,s
mkax{π ̄sp ̄k(x, s) − s(λ(1)
k − λ(2)
k )} ≥ mkax



X
s∈S
π ̄s
Ns
X
x∈DN|X ,s
p ̄k(x, s)



≥ 0.
20

Hence,
Hˆβ(λ(1), λ(2)) ≥ ρ
K
X
k=1
λ(1)
k + λ(2)
k,
which shows that Hˆβ is coercive on R2+K. By standard results for lower semicontinuous, coercive,
convex functions, a minimizer (λˆ(1), λˆ(2)) exists and lies in a compact subset [0, Cλ]2K ⊂ R2+K for some Cλ > 0.
B.1 DP-SGD
We recall below the standard DP-SGD algorithm and two key theoretical guarantees used in our analy
sis.
Algorithm 2: Differentially Private Stochastic Gradient Descent (DP-SGD)
Input: Examples {(x1, y1), . . . , (xn, yn)} = {z1, . . . , zn}, loss function L(θ) = 1
n
Pn
i=1 l(θ; zi). Parameters: learning rate ηt, noise scale σ, group size b. Initialize θ0 randomly for t ∈ [T ] do
Take a random sample bt with sampling probability b/n Compute gradient
For each i ∈ bt, compute gt(zi) ← ∇θtl(θt; zi) Add noise g ̃t ← 1
b
P
i∈bt gt(zi) + N (0, σ2Ip) Descent
θt+1 ← ΠΘ(θt − ηtg ̃t) Output: θT
Theorem B.1 (RDP for DP-SGD Altschuler and Talwar (2022)). Let Θ ⊂ Rp be a convex set of diameter bounded by D, and consider optimizing convex losses l over Θ that are M -smooth and have a l2-sensitivity ∆2 < ∞. For any number of iterations T , dataset size n ∈ N, batch size b ≤ n, stepsize η ≤ 2/M , noise parameter σ > 0, and initialization θ0 ∈ Θ, DP-SGD satisfies (α, ε)-RDP for all α ≥ 1 and
ε ≤ min

 
 
T Q, min
σ1,σ2>0 σ12 +σ22 =σ2
min
T ̃∈[T −1]
T ̃Q + αD2
2η2σ12T ̃

 
 
with Q = Sα b
n , bσ2
∆2 where Sα(q, σ) := Dα(N (0, σ2)∥(1 − q)N (0, σ2) + qN (1, σ2)).
Theorem B.2 (Utility guarantees for DP-SGD Bassily et al. (2014)). Let Θ ⊂ Rp be a convex domain of diameter bounded by D, and let the loss function l be convex and L-Lipschitz over Θ. For T > 0 and γt = D
s
t L2+ σ2
b2 p
, there exists a constant C such that DP-SGD guarantees:
E[L(θT )] − min
θ∈Θ L(θ) ≤ C D log T
√T (L + σ
b p)
C DETAILS ON THE PRIVACY ANALYSIS
In this section, we provide the detailed privacy guarantees supporting Theorem 4.1. We begin by quantifying the sensitivity of the quantities released, then combine them via R ́enyi differential privacy composition.
21

C.1 Proof Outline
The overall privacy proof proceeds in three stages:
1. Bounding the sensitivity and privacy cost of the privatized group proportions;
2. Deriving the R ́enyi differential privacy guarantee for the DP-SGD updates in Phase 2;
3. Combining both mechanisms through standard Re ́nyi differential privacy composition.
C.1.1 Group Proportions
We first analyze the sensitivity and privacy guarantees of the group proportion estimates (π ̄s)s∈S .
Lemma C.1. The l2-sensitivity of φs : DN → πˆs is 1/N for each s ∈ S.
Proof. For all s ∈ S, recall that πˆs = 1
N
PN
i=1 1(s ̃i = s). Let DN = {(x ̃j, s ̃j) | j ∈ [N ]} and
D′
N = {(x ̃′
j, s ̃′
j) | j ∈ [N ]} be two neighboring datasets that differ in exactly one entry, say at index j. All terms cancel in the difference of the two estimates except the j-th term, i.e.,
∆2(φs) = 1
N
N
X
i=1
1(s ̃i = s) − 1
N
N
X
i=1
1(s ̃′
i = s)
=1
N 1(s ̃j = s) − 1(s ̃′
j = s) .
Since the indicator takes values in {0, 1}, the absolute difference is at most 1, and this bound is attained when the changed record switches membership. Hence ∆2(φs) ≤ 1/N , with equality in the worst case.
Lemma C.2. Releasing (π ̄s)s∈S satisfies (α, α
2N2σ2π )-R ́enyi differential privacy for all α ≥ 1.
Proof. For each s ∈ S, Lemma C.1 and (Mironov, 2017, Corollary 3) imply that π ̄s satisfies (α, α
2N 2σ2π )
R ́enyi differential privacy. Let εs denote the RDP parameter of π ̄s for each s ∈ S. Since the {π ̄s}s∈S are computed on disjoint subsets of DN , the parallel composition property applies: releasing the tuple (π ̄s)s∈S is (α, maxs∈S εs)-R ́enyi differential private. In our case εs = α
2N2σ2π for all s, hence the joint
release is (α, α
2N2σ2π )-R ́enyi differential private.
C.1.2 DP-SGD
We now turn to the DP-SGD procedure used to optimize the smoothed fairness objective. We first bound the sensitivity of the per-sample gradient.
Lemma C.3. Let λ ∈ [0, Cλ]K. The l2-sensitivity of the per-sample gradient ∇ˆh(λ; ·) is at most 4.
Proof. Fix two distinct samples (x, s) ∈ X × S and (x′, s′) ∈ X × S and consider the gradient with respect to λ(l) ∈ [0, Cλ]K with l ∈ {1, 2}. By definition, the l2-sensitivity is
∆2(∇λ(l) ˆh(λ; ·)) = ∇λ(l) ˆh(λ; x, s) − ∇λ(l) ˆh(λ; x′, s′)
2
.
Since for any (x, s) ∈ X × S,
∇λ(l) ˆh(λ; x, s) = (2l − 3)|S| s softmaxβ(ls(x; λ)) + ρ1K .
22

The l2-sensitivity reduces to a scaled difference of two softmax probability vectors:
∆2(∇λ(l) ˆh(λ; ·)) = (2l − 3)|S| s softmaxβ(ls(x, λ)) − (2l − 3)|S| s′ softmaxβ(ls′(x′, λ))
2
= |S| s softmaxβ(ls(x, λ)) − s′ softmaxβ(ls′(x′, λ))
2
.
Applying the triangle inequality and homogeneity of the norm, with s ∈ {−1, 1}, yields
∆2(∇λ(l) ˆh(λ; ·)) ≤ |S| ∥softmaxβ(ls(x, λ)∥2 + ∥softmaxβ(ls′(x′, λ))∥2 .
Since softmaxβ(·) lies in the simplex, ∥softmaxβ(x)∥1 ≤ 1 for all x ∈ R. Thus, using ∥x∥2 ≤ ∥x∥1 for all x ∈ R, each term has l2-norm at most 1. Therefore,
∆2(∇λ(l) ˆh(λ; ·)) ≤ 2 |S|.
With |S| = 2, we conclude ∆2(∇λ(l) ˆh(λ; ·)) ≤ 4.
C.1.3 Composition
Lemma C.4 (R ́enyi differential privacy composition, Mironov (2017)). Let α ≥ 1 and ε1, ε2 ≥ 0. Let M1 : Zm → V1 and M2 : V1 × Zm → V2 be two randomized mechanisms such that:
M1 is (α, ε1)-R ́enyi differential private, M2 is (α, ε2)-R ́enyi differential private.
Then the composition M2 ◦ M1 is (α, ε1 + ε2)-R ́enyi differential private.
C.2 Proof of Theorem 4.1
We recall the theorem statement below for convenience.
Theorem C.1. Consider the DP2DP scheme, as in Algorithm 1. If the step-size sequence is such that ηt = η ≤ β/4 for all t ∈ [T ], then DP2DP satisfies (α, ε)-R ́enyi differential privacy for all α ≥ 1, where
ε≤ α
2N 2σπ2
+ Ψ (T, b, N, η, σSGD)
where Ψ := Ψ (T, b, N, η, σSGD) is defined as
Ψ = min

 
 
T Q, min
σ1,σ2>0 σ12 +σ22 =σs2gd
min
M ∈[T −1]
M Q + α2KC2
λ
2η2σ12M

 
 
,
Q = Sα b
N , bσ2
4 , and for any (q, σ) ∈ [0, 1] × R+ we define Sα(q, σ) as the R ́enyi divergence of level
α between a Gaussian distribution N (0, σ2) and a mixture of Gaussian (1 − q)N (0, σ2) + qN (1, σ2).
Proof. The release of the privatized group proportions (πˆpriv
s )s∈S satisfies (α, α
2N2σ2π )-R ́enyi differential
privacy by Lemma C.2. For the DP-SGD component, we directly apply the general result of Theorem B.1(Altschuler and Talwar, 2022), which provides an (α, ε)-R ́enyi differential privacy bound for convex losses with l2sensitivity ∆2. In our setting, Lemma B.3 ensures that Θ = [0, Cλ]2K, so the domain diameter is
D = √2KCλ, Lemma B.2 gives M = 8/β, and Lemma C.3 obtains ∆2 = 4. Substituting these quantities into Theorem B.1 yields the term Ψ(T, b, N, η, σSGD) defined above. Finally, by the composition property of R ́enyi differential privacy (Lemma C.4), combining the release of (πˆpriv
s )s∈S with the DP-SGD updates results in the overall guarantee
(α, α
2N2σ2π + Ψ(T, b, N, η, σSGD))-R ́enyi differential privacy.
This completes the proof.
23

C.3 Details on the Discussion
From Lemma C.2, releasing (πˆpriv
s )s∈S satisfies (α, α
2N2σ2π )-R ́enyi differential privacy guarantee. Next,
applying (Altschuler and Talwar, 2022, Theorem 3.1), we find that our DP-SGD procedure satisfies
α, 16α
N 2σs2gd
min
n
T,
l Cλ
√2K N 4β
mo
-R ́enyi differential privacy. By the composition Lemma C.4, Algo
rithm 1 therefore satisfies (α, εα)-R ́enyi differential privacy with
εα = α
N2
1
2σπ2
+ 16
σs2gd
min
(
T,
&
Cλ
√2K N
4β
')!
.
Applying (Mironov, 2017, Proposition 3), we convert this to an (εδ, δ)-DP guarantee for any δ > 0,
where εδ = minα>1 εα + log(1/δ)
α−1 . Solving this optimization yields εδ = K + 2pK log(1/δ) where
K= 1
N2
1
2σπ2
+ 16
σs2gd
min
(
T,
&
Cλ
√2K N
4β
')!
.
Finally, by substituting
σ2
sgd =
16 min
n
T,
l Cλ
√2K N 4β
mo
N 2 plog(1/δ) + ε − plog(1/δ)
2
− 1/2σπ2
we obtain εδ = ε.
D FAIRNESS PROOFS
In this section, we provide the detailed proofs supporting the fairness guarantees. We begin by introducing a series of intermediate lemmas that capture the smoothing, probabilistic, and optimization properties used in the analysis. Throughout, we rely on several auxiliary results established in Appendix B, which describe regularity and boundedness properties of the function Hˆβ underlying our fairness constraints. For completeness, we recall several notational conventions used in this section. Th-
roughout, we will work with expectations over the sampling process, and therefore treat the dataset as random. To simplify notation, we denote by DN = {(Xi, Si)}N
i=1 the collection of N i.i.d. random variables drawn from the joint distribution P(X,S) over X × S. With a slight abuse of notation, we use the same symbol DN to denote both the random sample and a particular realization of it. For each sensitive attribute value s ∈ S, let PX|S=s denote the conditional distribution of X given S = s, and define the corresponding subset of the sample DN|X ,s = {Xi ∈ X | (Xi, Si) ∈ DN , Si = s}. Its empirical counterpart is written, for any measurable set A ⊆ X ,
ˆPX|S=s(A) = 1
Ns
X
Xi∈DN|X ,s
1 (Xi ∈ A) ,
and the corresponding empirical expectation as ˆEX|S=s[f (X)] = 1
Ns
P
Xi∈DN|X,s f (Xi), where Ns =
PN
i=1 1 (Si = s) denotes the number of samples in group s. Under i.i.d. sampling with group prior πs = P(S = s), each Ns follows a binomial distribution Bin(N, πs), and we define the smallest group size as Nmin := min{N−1, N1}. The deviation between the population and empirical conditional measures is written, for any measurable set A ⊆ X ,
PX|S=s − ˆPX|S=s (A) := PX|S=s(A) − ˆPX|S=s(A).
24

Finally, for each x ∈ X , s ∈ S, and k ∈ [K], we recall that ls
k(x; λ) = π ̄sp ̄k(x, s) − s λ(1)
k − λ(2)
k,
and ls(x; λ) = ls
k(x; λ) k∈[K].
D.1 Proof Outline
The proof of Theorem 5.1 follows three main steps:
1. Controlling the smooth approximation error introduced by the LSEβ relaxation;
2. Bounding the deviation of empirical quantities from their population counterparts;
3. Accounting for the optimization and privacy noise due to the DP-SGD procedure.
We detail each step below.
D.1.1 Smooth Approximation
First, we control the approximation error introduced by replacing the maximum operator with its LSEβ relaxation. This lemma implies that as β → 0, the softmax converges exponentially fast to the argmax in sup-norm, with the rate controlled by the margin γ.
Lemma D.1. Let x ∈ Rn, define A = arg maxj∈[n] xj, M = maxj∈[n] xj, and for β > 0 set
γ(x) :=
(
minj∈/A M − xj , if A ̸= [n],
+∞, if A = [n].
Then for every i ∈ [n],
softmaxβ(x)i − 1
|A| 1(i ∈ A) ≤ max 1
|A| , n − |A|
|A|2 e−γ(x)/β.
Proof. Let x ∈ Rn and β > 0. By definition of the softmax function, for every i ∈ [n], we have
softmaxβ(x)i = exp(xi/β)
Pn
j=1 exp(xj/β)
= exp(xi/β)
P
j∈A exp(xj/β) + P
j∈/A exp(xj/β) .
Since each j ∈ A satisfies xj = M , this becomes
softmaxβ(x)i = exp(xi/β)
|A| exp(M/β) + P
j∈/A exp(xj/β)
By multiplying by exp(−M/β) on the denominator and the numerator we get
softmaxβ(x)i = exp((xi − M )/β)
|A| + P
j∈/A exp((xj − M )/β)
=
exp − M−xi
β
|A| + P
j∈/A exp − M−xj
β
.
Let us now distinguish two cases: (i) the case when i ∈ A and (ii) the case when i ∈/ A.
25

(i) If i ∈ A, then M − xi = 0, hence
softmaxβ(x)i = 1
|A|+P
j∈/A exp − M −xj
β
.
Therefore
1
|A| − softmaxβ(x)i =
P
j∈/A exp − M −xj
β
|A| |A|+P
j∈/A exp − M −xj
β
. (8)
Recall that we defined γ as γ(x) :=
(
minj∈/A M − xj , if A ̸= [n]
+∞, if A = [n] . Then, by definition of
γ, for any j ∈/ A, M − xj ≥ γ(x) > 0 and β > 0, we have that 0 ≤ P
j∈/A exp − M−xj
β≤
(n − |A|)e−γ(x)/β. This also means that 0 ≤ 1
|A| |A|+P
j∈/A exp − M −xj
β
≤1
|A|2 .
Finally, substituting these in (8), we obtain
softmaxβ(x)i − 1
|A| ≤ n−|A|
|A|2 e−γ(x)/β .
(ii) If instead i ∈/ A, the denominator |A| + P
j∈/A exp − M−xj
β is lower bounded by |A|, hence
0 ≤ softmaxβ(x)i ≤
exp − M−xi
β
|A| .
Similar to (i), we note that M − xi ≥ γ(x) > 0, therefore, since β > 0
0 ≤ softmaxβ (x)i ≤ e−γ(x)/β
|A| ⇐⇒ |softmaxβ(x)i − 0| ≤ e−γ(x)/β
|A| .
Combining the two cases yields
softmaxβ(x)i − 1
|A| 1(i ∈ A) ≤ max 1
|A| , n − |A|
|A|2 e−γ(x)/β.
D.1.2 Empirical Deviation Bounds
We next control the deviation between the empirical and population-level quantities appearing in the fairness criterion. Lemma D.2 directly follows from similar arguments as in the proof of Lemma C.2 in Denis et al. (2024).
Lemma D.2. For each k ∈ [K], let us suppose that p ̄k : X × S → [0, 1] be any mapping such that for all (x, s) ∈ X × S, (p ̄k(x, s))k∈[K] lies in the simplex. For each k ∈ [K], define
Aˆk =
X
s∈S
s PX|S=s − ˆPX|S=s ∀j ̸= k : ls
k(X; λ ̄) > ls
j(X; λ ̄) .
Then there exists a constant C > 0, independent of any parameter, such that
E
hAˆk1(Nmin ≥ 1) DN
i
≤ C1(Nmin ≥ 1)
√Nmin
. (9)
26

Proof. Let k ∈ [K], p ̄k as defined in Section 3, and Aˆk as define above. We reason on the event {Nmin ≥ 1}. Recall that S = {−1, 1}, hence for all s ∈ S, |s| = 1. Then by the triangle inequality,
Aˆk ≤
X
s∈S
PX|S=s − ˆPX|S=s ∀j ̸= k : ls
k(X;  ̄λ) > ls
j(X; λ ̄) . (10)
We now study each term of the sum independently. For each s ∈ S, by definition of ls
i , we have
PX|S=s − ˆPX|S=s ∀j ̸= k : ls
k(X;  ̄λ) > ls
j(X; λ ̄)
= PX|S=s − ˆPX|S=s

∀j ̸= k : p ̄k(X, s) − p ̄j(X, s) >
s ( ̄λ(1)
k − λ ̄(2)
k ) − (λ ̄(1)
j −  ̄λ(2)
j)
π ̄s


where π ̄s is defined for each s ∈ S in (3). Let us denote tkj = s (λ ̄(1)
k −λ ̄(2)
k )−(λ ̄(1)
j −λ ̄(2)
j)
π ̄s , then
PX|S=s − ˆPX|S=s ∀j ̸= k : ls
k(X;  ̄λ) > ls
j(X; λ ̄) = PX|S=s − ˆPX|S=s [∀j ̸= k : p ̄k(X, s) − p ̄j(X, s) > tkj] .
Since
PX|S=s − ˆPX|S=s [∀j ̸= k : p ̄k(X, s) − p ̄j(X, s) > tkj] ≤ sup
t∈R
PX|S=s − ˆPX|S=s [∀j ̸= k : p ̄k(X, s) − p ̄j(X, s) >
we obtain
PX|S=s − ˆPX|S=s ∀j ̸= k : ls
k(X;  ̄λ) > ls
j(X; λ ̄) ≤ sup
t∈R
PX|S=s − ˆPX|S=s [∀j ̸= k : p ̄k(X, s) − p ̄j(X, s) > t] .
Observing that {∀j ̸= k : p ̄k(X, s) − p ̄j(X, s) > t} = {p ̄k(X, s) − maxj̸=k p ̄j(X, s) > t}, we get
PX|S=s − ˆPX|S=s ∀j ̸= k : ls
k(X;  ̄λ) > ls
j(X; λ ̄) ≤ sup
t∈R
PX|S=s − ˆPX|S=s p ̄k(X, s) − max
j̸=k p ̄j(X, s) > t .
Hence,
Aˆk ≤
X
s∈S
sup
t∈R
PX|S=s − ˆPX|S=s p ̄k(X, s) − max
j̸=k p ̄j(X, s) > t . (11)
For every u > 0, the Dvoretzky–Kiefer–Wolfowitz inequality (Massart, 1990) yields
P sup
t∈R
(PX|S=s − ˆPX|S=s)[p ̄k(X, s) − max
j̸=k p ̄j(X, s) > t] > u DN ≤ 2e−2Nsu2 . (12)
Using the tail–integral formula for non negative random variables, E[X] = R ∞
0 P(X > u) du, we have
E sup
t∈R
PX|S=s − ˆPX|S=s p ̄k(X, s) − max
j̸=k p ̄j(X, s) > t DN
=
Z∞
0
P sup
t∈R
PX|S=s − ˆPX|S=s p ̄k(X, s) − max
j̸=k p ̄j(X, s) > t > u DN du.
27

By (12), the integrand is bounded by 2e−2Nsu2, hence
E sup
t∈R
PX|S=s − ˆPX|S=s p ̄k(X, s) − max
j̸=k p ̄j(X, s) > t DN ≤
Z∞
0
2e−2Nsu2 du.
Since 2 R ∞
0 e−ax2 dx = pπ/a, we conclude that
E sup
t∈R
PX|S=s − ˆPX|S=s p ̄k(X, s) − max
j̸=k p ̄j(X, s) > t DN ≤
rπ
2Ns
. (13)
Combining (11) and (13), we obtain
E
hAˆk | DN
i
≤
X
s∈S
rπ
2Ns
≤
r 2π
Nmin
. (14)
Setting C = √2π yields the desired bound
E
hAˆk1(Nmin ≥ 1) DN
i
≤ C1(Nmin ≥ 1)
√Nmin
. (15)
D.1.3 Private Optimization
Finally, we analyze the optimization error induced by running the differentially private stochastic gradient descent (DP-SGD) algorithm on the smoothed fairness objective. Lemma D.3 provides a quantitative guarantee on the expected gradient norm of the privatized objective, which directly controls the stability of the fairness constraint under DP optimization noise.
Lemma D.3. Let (λ ̄(1),  ̄λ(2)) be the parameters output by DP2DP. Denote by B the random mini -batch sequence and by Z = (Z1, . . . , ZT ) the Gaussian noises added at each step. Then, for Hˆβ defined in (4), we have
EB,Z
h
∇Hˆβ( ̄λ(1),  ̄λ(2))
∞
i
≤4
q
1 β
Cλ log T
√T (2√2 + ρ
√
2K + 2Kσsgd
b ).
where the expectation is taken over the algorithmic randomness (B, Z).
Proof. Let (x, s) ∈ X × S. Lemma B.2 show that the per-sample ˆh(·; x, s) loss is 8
β -smooth with
respect to the l∞-norm, thus Hˆβ(λ(1), λ(2)) := 1
|S |
P
s∈S
1 Ns
P
x∈DN|X ,s
ˆh(λ; x, s) is also 8
β -smooth with
respect to the l∞-norm by triangle inequality and homogeneity of the norm. Applying Lemma A.1, for all (λ(1), λ(2)) ∈ R2K one has the inequality
∇Hˆβ(λ(1), λ(2))
2
1
≤ 16
β Hˆβ(λ(1), λ(2)) − Hˆβ(λˆ(1), λˆ(2)) ,
where (λˆ(1), λˆ(2)) ∈ arg min
(λ(1) ,λ(2) )∈R2K
+
Hˆβ(λ(1), λ(2)).
In particular, considering (λ ̄(1), λ ̄(2)) as in Algorithm 1, we have
∇Hˆβ(λ ̄(1), λ ̄(2))
2
1
≤ 16
β Hˆβ(λ ̄(1), λ ̄(2)) − Hˆβ(λˆ(1), λˆ(2)) .
28

Using Lemma B.2 we obtain the Lipschitz constant L = 2√2 + ρ√2K, and Lemma B.3 further implies that the diameter of the λ-space is Cλ
√2K. Taking expectation with respect to the randomness of the minibatch and the Gaussian noise, and using Theorem B.2, yields
EB,Z ∇Hˆβ( ̄λ(1), λ ̄(2))
2
1
≤ 16
β
Cλ log T
√T (2√2 + ρ
√
2K + σsgd
√2K
b ). (16)
Applying Jensen’s inequality to (16) we obtain
EB,Z
h
∇Hˆβ( ̄λ(1),  ̄λ(2))
1
i
≤
s
EB,Z ∇Hˆβ(λ ̄(1), λ ̄(2))
2
1
≤4
r
Cλ log T
β√T (2√2 + ρ
√
2K + σsgd
√2K
b ).
Finally, since
∇Hˆβ(λ ̄(1), λ ̄(2))
∞
≤ ∇Hˆβ(λ ̄(1), λ ̄(2))
1
,
we get the expected result
EB,Z
h
∇Hˆβ(λ ̄(1), λ ̄(2))
∞
i
≤4
r
Cλ log T
β√T (2√2 + ρ
√
2K + σsgd
√2K
b ).
D.2 Proof of Theorem 5.1
Lemma D.4 (Lemma C.1 (Denis et al., 2024)). With respect to the data DN , we have that, for all λ ∈ R2+K , for each s ∈ S and k ∈ [K],
PˆX|S=s[∃j ̸= k : ls
k(X; λ) := ls
j(X; λ)] := 1
Ns
X
X∈DN|X ,s
1(∃j ̸= k : ls
k(Xi; λ) = ls
j(Xi; λ)) ≤ K − 1
Ns
a.s.
We now combine the previous lemmas to establish the main fairness bound.
Theorem D.1. Consider DP2DP scheme, as defined in Algorithm 1 with a step size ηt define for all t ∈ [T ] in Lemma B.2. Let us also denote by πmin = min{P [S = s] | s ∈ S} the minimum group size within sensitive attributes w.r.t. P. Then, there exist constants C1 > 0 depending on K and πmin, γ > 0, and C2 > 0 that depends on K, and γ, such that for any conditional probabilities p ̄k computed in Phase 1, one has
EDN ,B,Z[U (gˆρ)] ≤ ρ + C1
√N + C2e− γ
β +4
r √2KCλ log T
β√T 2√2 + ρ
√
2K + σsgd
√2K
b.
In the above, the expectation is taken over the sampling of DN and the randomness of the algorithm (mini-batch sampling and Gaussian noise).
Proof. We begin by recalling that the decision rule gˆρ is defined for all (x, s) ∈ X × S by
gˆρ(x, s) = arg max
k∈[K ]
n
π ̄sp ̄k(x, s) − s(λ ̄(1)
k − λ ̄(2)
k)
o
,
where (λ ̄(1), λ ̄(2)) are the parameters obtained by running DP-SGD on Hˆβ. The strategy of the proof is to show that the calibration of the Lagrange parameters leads directly to the announced upper bound on the unfairness.
29

For each k ∈ [K] and l ∈ {1, 2}, set
η ̄(l)
k,β := ∇λ(l)
k
Hˆβ  ̄λ(1),  ̄λ(2) .
A direct differentiation gives
∇λ(l)
k
Hˆβ  ̄λ(1),  ̄λ(2) =
X
s∈S
Eˆ X|S=s
h
∇λ(l)
k
LSEβ ls(X; λ ̄)
i
+ρ
= (2l − 3)
X
s∈S
sˆEX|S=s softmaxβ ls(X; λ ̄) k + ρ,
where
softmaxβ (ls(X; λ))k := exp{ls
k(X; λ)/β}
PK
j=1 exp{ls
j(X; λ)/β} .
Decomposing according to whether class k is the unique maximizer or ties with others,
η ̄(l)
k,β = (2l − 3)
X
s∈S
s ˆEX|S=s softmaxβ ls(X; λ ̄) k1 ∀j ̸= k : ls
k(X; λ ̄) > ls
j(X; λ ̄)
+ ˆEX|S=s softmaxβ ls(X;  ̄λ) k1 ∀j ̸= k : ls
k(X;  ̄λ) ≥ ls
j(X;  ̄λ), ∃j ̸= k : ls
k(X;  ̄λ) = ls
j(X;  ̄λ)
!
+ρ.
By Lemma D.1, there exist constants C2s > 0 (depending on K and s), γs > 0, and numbers
us
k ∈ [0, 1] such that
η ̄(l)
k,β ≤ (2l − 3)
X
s∈S
s
"
ˆPX|S=s ∀j ̸= k : ls
k(X; λ ̄) > ls
j(X;  ̄λ)
+ us
k ˆPX|S=s ∀j ̸= k : ls
k(X;  ̄λ) ≥ ls
j(X;  ̄λ), ∃j ̸= k : ls
k(X;  ̄λ) = ls
j(X; λ ̄) + Cs
2 e−γs/β
#
+ ρ.
Since the event {∀j ̸= k : ls
k(X;  ̄λ) ≥ ls
j(X;  ̄λ), ∃j ̸= k : ls
k(X;  ̄λ) = ls
j(X;  ̄λ)} is contained in
{∃j ̸= k : ls
k(X;  ̄λ) = ls
j(X; λ ̄)}, we may apply Lemma D.4. It follows that the second probability
on the right-hand side is bounded almost surely with respect to DN by K−1
Ns , and therefore by K−1
Nmin .
Hence, for each s ∈ S,
0 ≤ ˆPX|S=s ∀j ̸= k : ls
k(X; λ ̄) ≥ ls
j(X; λ ̄), ∃j ̸= k : ls
k(X; λ ̄) = ls
j(X;  ̄λ) ≤ K − 1
Nmin
.
Consequently, for each s ∈ S,
0 ≤ us
k ˆPX|S=s ∀j ̸= k : ls
k(X;  ̄λ) ≥ ls
j(X; λ ̄), ∃j ̸= k : ls
k(X; λ ̄) = ls
j(X; λ ̄) ≤ K − 1
Nmin
.
Taking the difference with the signs s ∈ {−1, 1} yields the symmetric bound
−K − 1
Nmin
≤
X
s∈S
sus
k ˆPX|S=s ∀j ̸= k : ls
k(X;  ̄λ) ≥ ls
j(X; λ ̄), ∃j ̸= k : ls
k(X; λ ̄) = ls
j(X; λ ̄) ≤ K − 1
Nmin
.
Hence
η ̄(l)
k,β ≤ (2l − 3)
X
s∈S
sPˆX|S=s ∀j ̸= k : ls
k(X; λ ̄) > ls
j(X; λ ̄) + K − 1
Nmin
+ (2l − 3)
X
s∈S
sC s
2 e− γs
β + ρ.
30

Specializing to l = 1 and l = 2, this yields the inequalities
η ̄(1)
k,β ≤ −
X
s∈S
sˆPX|S=s ∀j ̸= k : ls
k(X;  ̄λ) > ls
j(X;  ̄λ) + K − 1
Nmin
−
X
s∈S
sC s
2 e− γs
β + ρ,
η ̄(2)
k,β ≤
X
s∈S
sˆPX|S=s ∀j ̸= k : ls
k(X;  ̄λ) > ls
j(X;  ̄λ) + K − 1
Nmin
+
X
s∈S
sC s
2 e− γs
β + ρ.
Therefore
X
s∈S
sˆPX|S=s ∀j ̸= k : ls
k(X; λ ̄) > ls
j(X; λ ̄) ≤ −η ̄(1)
k,β + K − 1
Nmin
−
X
s∈S
sC s
2 e− γs
β + ρ,
X
s∈S
sˆPX|S=s ∀j ̸= k : ls
k(X; λ ̄) > ls
j(X; λ ̄) ≥ η ̄(2)
k,β − K − 1
Nmin
−
X
s∈S
sC s
2 e− γs
β − ρ.
Combining both gives the interval bound
X
s∈S
sˆPX|S=s ∀j ̸= k : ls
k(X;  ̄λ) > ls
j(X;  ̄λ) ≤ max |η ̄(1)
k,β|, |η ̄(2)
k,β| + K − 1
Nmin
+ 2C2e− γ
β + ρ. (17)
where C2 = max{C21, C−1
2 } and γ = min{γ1, γ−1}. As in Denis et al. (2024), we turn to the unfairness of gˆρ:
X
s∈S
sPX|S=s gˆρ(X, S) = k =
X
s∈S
sPX|S=s ∀j ̸= k : ls
k(X;  ̄λ) > ls
j(X; λ ̄)
By using the triangle inequality, and the random variable Aˆk introduce in Lemma D.2,
X
s∈S
sPX|S=s gˆρ(X, S) = k ≤ Aˆk +
X
s∈S
sˆPX|S=s ∀j ̸= k : ls
k(X; λ ̄) > ls
j(X; λ ̄)
With (17), we get
X
s∈S
sPX|S=s gˆρ(X, S) = k ≤ Aˆk + ρ + max
l∈{1,2}
|ηˆ(l)
k,β | + K−1
Nmin + 2C2e− γ
β.
Maximizing over k ∈ [K] gives
U (gˆρ) := max
k∈[K ]
X
s∈S
sPX|S=s gˆρ(X, S) = k ≤ max
k∈[K ]
Aˆk + ρ + ∥∇Hˆβ( ̄λ(1),  ̄λ(2))∥∞ + K−1
Nmin + 2C2e− γ
β.
Applying Lemma D.2 we deduce that conditional on DN ,
E [U (gˆρ) | DN ] = E [U (gˆρ)1(Nmin ≥ 1) | DN ] + E [U (gˆρ)1(Nmin = 0) | DN ]
≤ ρ + ( √NCmin + K−1
Nmin )1(Nmin ≥ 1) + 2C2e− γ
β
+E
h
∥∇Hˆβ(λ ̄(1),  ̄λ(2))∥∞ DN
i
+ E [U (gˆρ)1(Nmin = 0) | DN ]
On the event {Nmin ≥ 1}, 1
√Nmin ≥ 1
Nmin , thus there exists a non negative constant c1 such that
E [U (gˆρ) | DN ] ≤ ρ + c1
√Nmin 1(Nmin ≥ 1) + 2C2e− γ
β
+E
h
∥∇Hˆβ( ̄λ(1),  ̄λ(2))∥∞ DN
i
+ E [U (gˆρ)1(Nmin = 0) | DN ]
31

Now since all the terms of the r.h.s. unless ∥∇Hˆβ(λ ̄(1), λ ̄(2))∥∞ and U (gˆρ) are independent from the minibatch sampling and the Gaussian noise vectors of DP-SGD, Lemma D.3 gives
EB,Z [E [U (gˆρ) | DN ]] ≤ ρ + c11(Nmin≥1)
√Nmin + EB,Z [E [U (gˆρ)1(Nmin = 0) | DN ]]
+ 2C2e− γ
β +4
q Cλ log T
β√T (2√2 + ρ
√
2K + 2Kσsgd
b ).
Taking the expectation over DN and by definition of the conditional expectation there exists a non negative constant CK that depend on K such that
EDN ,B,Z [U (gˆρ)] ≤ ρ+E
h c11(Nmin≥1)
√Nmin
i
+CK P(Nmin = 0)+2C2e− γ
β +4
q Cλ log T
β√T (2√2 + ρ
√
2K + 2Kσsgd
b ).
Finally, since P(Nmin = 0) ≤ (1 − π−1)N + (1 − π1)N , there exists a constant C1 that depend on πmin such that P(Nmin = 0) ≤ √C1N , and by applying Lemma B.1 with Jensen inequality, we obtain
EDN ,B,Z U (gˆρ) ≤ ρ + √C1N + 2C2e− γ
β +4
q Cλ log T
β√T (2√2 + ρ
√
2K + 2Kσsgd
b ).
This concludes the proof.
D.3 Proof of Corollary 5.1
Corollary D.1. Let ρ ≥ 0, and fix T = N 2 and β = 2γ/ log N . Then there exists a constant C∗, depending on K ,πmin, Cλ ,b ,ρ, and σsgd such that
E[U (gˆρ)] ≤ ρ + C∗
log N
√N .
As before, the expectation is taken jointly over the sampling of DN and the randomness of the algorithm, including mini-batch selection and Gaussian noise.
Proof. This result follows immediately from Theorem D.1 by substituting the specific choices T = N 2 and β = 2γ/ log N . Under these parameters, the dominant terms in Theorem D.1 scale as O( lo√gNN ),
while the exponential term e−γ/β becomes negligible when N ≥ e. All constants are aggregated into C∗, which depends on K, πmin, Cλ, b, ρ, and σsgd.
32

E ADDITIONAL EXPERIMENTAL DETAILS AND RESULTS
E.1 Synthetic Data Generation
We describe here the procedure used to generate the synthetic dataset employed in Section 6. We define the synthetic data as (X, S, Y ). For all k ∈ [K], we assume a uniform class distribution: P (Y = k) = 1/K. Given Y = k, the features X ∈ Rd follow a Gaussian mixture model with m components:
(X | Y = k) ∼ 1
m
m
X
i=1
Nd(ck + μk
i , Id)
where ck ∼ Ud(−1, 1) and μ1k, . . . , μkm ∼ Nd(0, Id). The sensitive attribute S ∈ {−1, +1} is generated via a Bernoulli contamination process that depends on the class label k:
(S | Y = k) ∼
(
2B(p) − 1 if k ≤ ⌊K/2⌋
2B(1 − p) − 1 if k > ⌊K/2⌋
E.2 Experimental Setup
This section details the experimental configuration used to produce the results in Section 6 and Appendix E. We describe privacy parameters, and implementation details, and we summarize the key hyperparameters per dataset in Table 1.
Privacy Parameters The standard deviations σSGD used to achieve a target (ε, δ)-DP guarantee vary across datasets, as they depend on both the sample size N and the number of optimization iterations T , whereas σπ is fixed. For each experiment, we calibrate these noise levels individually to satisfy (ε, δ = 10−5) using the R ́enyi DP accountant from the dp-accounting library (Google, 2020). The resulting ε values reported in the figures correspond to the exact privacy guarantees derived from this a-
ccounting procedure.
Implementation and Hardware All experiments are implemented in Python using scikit-learn, PyTorch, and joblib for parallelization. Experiments were run on a MacBook Pro 13-inch (M1, 2020), 8 GB RAM without GPU acceleration. Each configuration is repeated 15 times with different random seeds, and results are reported as mean ± standard deviation. For all real datasets, baseline results are retrieved directly from the public repository of Lowy et al. (2023) to ensure faithful comparison. Table 1 sum-
mary of the experiments for each dataset.
Parameter Synthetic Adult Credit Card Parkinson’s
Model type Logistic Regression Logistic Regression Logistic Regression Logistic Regression
Model regularization l2, C = 1.0 l2, C = 1.0 l2, C = 1.0 l2, C = 1.0
DP2DP iter 100 100 1000 1000
Batch size 128 128 128 128
Parameter β 10−5 10−5 10−5 10−5
Fairness ρfair [0.0, 0.2] [0.0, 0.2] [0.0, 0.025] [0.0, 0.08]
Train/Pool/Test split 60/20/20 55/20/25 55/20/25 55/20/25
Table 1: Hyperparameter configuration per dataset.
33

E.3 Additional Experimental Results
In this section, we present complementary empirical results to those reported in Section 6, including extended comparisons on real-world benchmarks.
E.3.1 Results on Default-CCC dataset
Figure 3 reports the trade-off between demographic parity violation and misclassification error achieved by our method compared to existing approaches, under (ε, δ)-differential privacy with δ = 10−5. We observe that DP2DP consistently achieves improved fairness-accuracy trade-offs, especially in the low-privacy regime (ε = 0.5), while remaining competitive in terms of classification performance.
0.18 0.20
Misclassification Error
0.005
0.010
0.015
0.020
0.025
Fairness Violation
Tran et al. (2021a) Tran et al. (2021b) Lowy et al. (2023) Non-Private Unfair Non-Private DP2DP DP2DP
0.18 0.20
Misclassification Error
0.005
0.010
0.015
0.020
0.025
Fairness Violation
Tran et al. (2021a) Tran et al. (2021b) Lowy et al. (2023) Non-Private Unfair Non-Private DP2DP DP2DP
Figure 3: Comparison of our method (in terms of fairness/misclassification) with previous work on the Default-CCC dataset under (ε, δ)-differential privacy with δ = 10−5. The left panel shows ε = 0.5, and the right panel for ε = 1.0.
E.3.2 Results on Parkinson’s dataset
We report in Figure 4 additional results on the Parkinson dataset under the same privacy settings. Similar trends are observed: our method outperforms prior baselines in terms of fairness while maintaining accuracy, particularly in the low-privacy regime. These results further confirm the robustness of our approach across heterogeneous datasets with different statistical structures.
34

0.04 0.06 0.08 0.10 0.12
Misclassification Error
0.01
0.02
0.03
0.04
0.05
0.06
0.07
0.08
Fairness Violation
Tran et al. (2021a) Tran et al. (2021b) Lowy et al. (2023) Non-Private Unfair Non-Private DP2DP DP2DP
Figure 4: Comparison of our method (in terms of fairness/misclassification) with previous work on the Parkinson dataset under (ε, δ)-differential privacy with δ = 10−5.
35

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:51.589Z
- **Text Length:** 85028 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 35 of 35
