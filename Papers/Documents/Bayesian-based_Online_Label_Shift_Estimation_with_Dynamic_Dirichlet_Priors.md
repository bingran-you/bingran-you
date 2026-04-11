# PDF Document: Hu and Barria - 2025 - Bayesian-based Online Label Shift Estimation with Dynamic Dirichlet Priors.pdf

**File Path:** Hu and Barria - 2025 - Bayesian-based Online Label Shift Estimation with Dynamic Dirichlet Priors.pdf

**Processed Date:** 2026-02-10T18:17:49.359Z

**File Size:** 3025.91 KB

**Total Pages:** 13

**Extracted Pages:** 13

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3467

**Title:** Bayesian-based Online Label Shift Estimation with Dynamic Dirichlet Priors

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Bayesian-based Online Label Shift Estimation with
Dynamic Dirichlet Priors
Jiawei Hu, Student Member, IEEE, Javier A. Barria, Member, IEEE
Abstract—Label shift, a prevalent challenge in supervised learning, arises when the class prior distribution of test data differs from that of training data, leading to significant degradation in classifier performance. To accurately estimate the test priors and enhance classification accuracy, we propose a Bayesian framework for label shift estimation, termed Full Maximum A Posterior Label Shift (FMAPLS), along with its online version, online-FMAPLS. Leveraging batch and online Expectation–Maximi-
zation (EM) algorithms, these methods jointly and dynamically optimize Dirichlet hyperparameters α and class priors π, thereby overcoming the rigid constraints of the existing Maximum A Posterior Label Shift (MAPLS) approach. Moreover, we introduce a linear surrogate function (LSF) to replace gradient-based hyperparameter updates, yielding closed-form solutions that reduce computational complexity while retaining asymptotic equivalence. The online variant substitutes the batch E-step with a stocha-
stic approximation, enabling real-time adaptation to streaming data. Furthermore, our theoretical analysis reveals a fundamental trade-off between online convergence rate and estimation accuracy. Extensive experiments on CIFAR100 and ImageNet datasets under shuffled long-tail and Dirichlet test priors demonstrate that FMAPLS and online-FMAPLS respectively achieve up to 40% and 12% lower KL divergence and substantial improvements in post-shift accuracy over state-ofthe-art baselines, particularly u-
nder severe class imbalance and distributional uncertainty. These results confirm the robustness, scalability, and suitability of the proposed methods for large-scale and dynamic learning scenarios.
Index Terms—Label shift, online expectation-maximization algorithm, surrogate function, streaming data.
I. INTRODUCTION
A. Context and Scope
D
UE to the inherent complexity and heterogeneity of large-scale datasets, the statistical properties of training datasets in supervised learning tasks often fail to accurately represent those of the test datasets encountered in practice, thereby violating the common assumption that both training and test data are drawn from the same underlying distribution in real-world applications [1]. This discrepancy in data distributions, commonly referred to as distribution shift [2], has been widely recogniz-
ed as one of the main factors leading to performance degradation of supervised classification models once they are deployed beyond the training environment. Specifically, when the data distribution encountered during test inference differs from that of the training phase, the learned decision boundaries may no longer align well with the characteristics of the unseen data, thereby reducing the generalization ability of the model.
The authors are with the Department of Electrical and Electronic Engineering, Imperial College London, London SW7 2AZ, U.K. (e-mail: j.hu24@imperial.ac.uk; j.barria@imperial.ac.uk).
As a common type of distribution shift, label shift occurs in scenarios where the prior distribution of the class labels P (Y ) changes between training and test datasets, while the likelihood distribution of the features given the labels, P (X|Y ), remains unchanged [3]. This phenomenon is particularly relevant in applications such as medical diagnosis [4], spam email detection [5], and text topic classification [6], where the prevalence of certain classes may vary significantly over time or acro-
ss environments, making it crucial to develop strategies that can explicitly account for label distribution mismatches. A straightforward strategy to address label shift is to retrain separate classification models for different data distributions. However, retraining demands substantial computational resources and time [7], making it impractical in many real-world applications. Therefore, it is necessary to develop approaches that mitigate the adverse effects of label shift without modifying the -
trained model. Leveraging Bayes’ theorem [8], [9], the test prior can be employed to reweight the soft posterior probabilities produced by the trained classification model, thereby improving predictive performance on unseen test data while preserving the model architecture. This correction can enhance model adaptability under label shift, highlighting the critical importance of accurately estimating the test dataset prior probability. With the rapid development of Internet of Things (IoT), termina-
l devices are increasingly deployed in various application scenarios, yet they typically operate under stringent constraints in terms of computational capacity, memory, and energy consumption [10], [11]. When such devices are required to handle large-scale datasets or continuous data streams, traditional batch-based offline algorithms become infeasible, as they demand substantial resources and are unable to meet real-time processing requirements [12], [13]. To address this limitation, it is essent-
ial to design lightweight and efficient online schemes for prior probability estimation that can operate effectively on streaming data. Such approaches not only reduce computational and storage overhead but also ensure adaptive correction of label shift in dynamic environments, thereby improving robustness and reliability of learning systems. As illustrated in Fig. 1, this paper introduces a Bayesianbased label shift estimation framework, called Full Maximum A Posterior Label Shift (FMAPLS), toget-
her with its online variant, online-FMAPLS. The proposed approach employs a high-dimensional Dirichlet distribution to model test dataset class priors, thereby offering a probabilistic and flexible representation for prior estimation. To accurately and iteratively estimate test priors, the framework employs the Expectation–Maximization (EM) algorithm in offline settings and its online counterpart (online-EM) for streaming scenarios,
arXiv:2511.18615v1 [cs.LG] 23 Nov 2025

2
Training domain
0
0.1
0.2
0.3
0.4
Prior probability
Dog Cat Cow Tiger
Test domain
0
0.1
0.2
0.3
0.4
0.5
Prior probability
Dog Cat Cow Tiger
Offline model
Online model
FMAPLS
online-FMAPLS
Classifier model Training soft probability
Test soft probability
data n dog cat cow tiger
data m dog cat cow tiger Classifier model
Label shift
data 1 dog cat cow tiger
data N dog cat cow tiger
data n dog cat cow tiger
...
...
Input streaming data
dog cat cow tiger
...
M test data
Input batch data 0
0.1
0.2
0.3
0.4
0.5
Prior probability
Dog Cat Cow Tiger
0
0.1
0.2
0.3
0.4
0.5
Prior probability
Dog Cat Cow Tiger
π∗
πN
High-dimensional Dirichlet
High-dimensional Dirichlet
πoff αoff
πon αon
Fig. 1. System architecture of the proposed Bayesian-based label shift estimation framework. The offline algorithm (FMAPLS) and its online variant (onlineFMAPLS) estimate the class prior distribution of the test domain using high-dimensional Dirichlet modeling and EM-based inference, thus supporting both batch and streaming data processing.
thereby recalibrating soft probabilities produced by the classifier and enhancing its performance under label shift conditions.
B. Related Work
The EM algorithm was one of the earliest approaches to address label shift, which updates the test priors iteratively based on classifier outputs [14], [15]. To address the above EM algorithm’s explicit requirement for training likelihood probability problem, [16] utilized the kernel mean embedding of the marginal and conditional distributions. The Black Box Shift Estimation (BBSE) method later leverages the confusion matrix of a held-out training set to identify and correct distribution shifts, o-
utperforming previous kernel-based approaches that scale poorly with dataset size and struggle on highdimensional data [17]. Building upon BBSE, Regularized Learning of Label Shift (RLLS) incorporated a regularization framework to improve importance weight estimation between labeled training and unlabeled test data [18], and empirical studies showed that RLLS outperforms BBSE in both weight estimation precision and classification performance. Zhao et al. [19] further proposed Mediated Active Learn-
ing under Label Shift (MALLS) algorithm for label shift active learning. More recently, EM-based methods have been revisited and demonstrated superior performance in limited-data scenarios, outperforming both BBSE and RLLS on benchmark datasets such as CIFAR10 and MNIST [20], [21]. Despite these advances, existing techniques have primarily been evaluated on relatively small datasets and rarely account for the influence of class-imbalanced training data in label shift estimation. Ye et al. [22] rec-
ently proposed a Bayesian framework for label shift estimation that models class priors with a highdimensional Dirichlet distribution and implements Maximum A Posterior Label Shift (MAPLS) via EM-based offline optimization. While MAPLS outperforms BBSE and RLLS on large-scale datasets such as CIFAR100, ImageNet, and their long-tail variants, its Adaptive Prior Learning (APL) relies on two rigid assumptions: uniform Dirichlet hyperparameters α in each EM iteration and empirically defined update equ-
ations, limiting adaptability to complex or rapidly changing distributions [23], [24]. Building on MAPLS, our previous work [25] introduced FMAPLS, which dynamically adapts hyperparameters and jointly optimizes class priors through EM iterations. Numerical experiments demonstrated that FMAPLS
achieves superior effectiveness and robustness, particularly under highly imbalanced and highly uncertain prior scenarios. While the above approaches are able to mitigate label shift to some extent, they all rely on batch-based algorithm, which requires substantial computational resources and time, thereby restricting their applicability to offline scenarios [26]. With the increasing miniaturization of terminal devices and the growing prevalence of streaming data, there is a pressing need for onli-
ne label shift estimation methods that can process data sequentially and adapt model parameters immediately after the arrival of each new sample [27], [28]. In 2021, Wu et al. [29] were the first to address online label shift estimation by employing online gradient descent (OGD) and Follow the History (FTH) method. Building on this foundation, Bai et al. [30] introduced a reconstructed unbiased risk estimator and provided provable theoretical guarantees for online label shift estimation, thereby s-
trengthening the theoretical underpinnings of this line of research. More recently, Baby et al. [31] advanced this direction by reducing the adaptation problem to online regression and developing a novel algorithm that guarantee optimal dynamic regret, while simultaneously achieving both theoretical optimality and strong empirical performance. However, existing online methods do not address label shift estimation from a Bayesian perspective and, like offline solutions, fail to account for the impa-
cts of large-scale and class-imbalanced training data. C. Main Contributions
In this paper, we propose a Bayesian-based online label shift estimation algorithm, termed online-FMAPLS, developed within the online EM framework. In the online-FMAPLS algorithm, the E-step of the conventional EM procedure is replaced with a stochastic approximation step, allowing adaptation to streaming data while reducing computational complexity [32], [33]. Building upon this formulation, we further derive the Crame ́r–Rao bound (CRB) and analyze the convergence rate of the proposed online met-
hod. Finally, extensive experiments on large-scale CIFAR100 and ImageNet datasets are conducted to validate its estimation performance for test priors. The main contributions are summarized as follows:
Dynamic Dirichlet Hyperparameter Adaptation: We provide a theoretical characterization of the estimation performance for Bayesian label shift by deriving the CRB, alongside a novel estimation framework. Our proposed EM-based

3
method dynamically and jointly optimizes class priors π and Dirichlet hyperparameters α, relaxing the rigid constraints of conventional MAPLS algorithm. This adaptation significantly improves the model’s flexibility and expressivity, enabling the effective capture of high imbalance and high uncertainty priors in test datasets [25].
Online Variant for Streaming Data: We develop an online version, termed online-FMAPLS, which replaces the traditional E-step with a stochastic approximation step, thereby reducing the computational complexity from the batchdependent O(N K) to O(K) per iteration. This design enables sequential parameter updates in streaming environments and makes the method highly suitable for large-scale and realtime applications. Furthermore, we analyze the convergence behavior of the proposed online-FMAPLS algor-
ithm and reveal a fundamental trade-off between convergence rate and estimation precision.
Surrogate-Based Closed-Form Hyperparameter Updates: To overcome the absence of closed-form analytical updates for the Dirichlet hyperparameter α, we introduce a linear surrogate function (LSF) that reduces the computational complexity from O(TgradK) to O(K), thereby making the method suitable to large-scale settings. Beyond computational efficiency, the surrogate-based formulation removes the sensitivity of α updates to initialization and learning-rate tuning, ensuring stable convergence in both b-
atch and streaming scenarios. Moreover, our analytical results show that the LSFbased update is asymptotically equivalent to gradient ascent procedure [25], and the convergence–accuracy trade-off is governed by the LSF parameter c. Compared to our prior work [25], this paper improves mainly in four aspects: (1) Providing a detailed derivation of FMAPLS algorithm and establishing its corresponding CRB, thereby strengthening the theoretical guarantees of the proposed estimation framework. (2) Moreov-
er, [25] focused exclusively on offline scenarios, this paper further develops an online EM–based approach for online label shift estimation, enabling adaptation to sequential data with reduced computational complexity. (3) We analysis the convergence rate of online-FMAPLS algorithm and show a fundamental tradeoff between convergence rate and estimation precision. (4) In addition, we conduct more comprehensive experiments on CIFAR100 and ImageNet datasets to evaluate both the offline and online al-
gorithms, and perform ablation studies for a thorough comparative analysis.
D. Organization
The remainder of this paper is organized as follows. Section II formalizes the problem setting, defining label shift and the prior assumptions on training and test datasets. Section III introduces the batch EM-based FMAPLS algorithm, detailing its E-step and M-step updates. To handle the absence of a closed-form update for α, a surrogate replacement is proposed, and its convergence and asymptotic equivalence are analyzed. Section IV develops an online variant, termed onlineFMAPLS, which updates pa-
rameters in a online manner for large-scale or real-time applications. Section V compares computational complexity between offline and online algorithms as
well as between gradient ascent and surrogate-based updates. Section VI presents experimental results on CIFAR100 and ImageNet, demonstrating the proposed methods’ effectiveness and robustness under highly imbalanced and uncertain test priors. Finally, Section VII concludes the paper.
II. PROBLEM DEFINITION AND SETTING
A. Overall setting and label shift
Consider X denotes the input space and Y = {1, 2, . . . , K} the label space with K classes. A neural network-based classifier is trained to learn a mapping f : X → Y that outputs, for each sample X ∈ X, a soft posterior probability P (Y |X), and the predicted label Yˆ corresponds to its maximum value. This classifier models the relationship between features and labels under the training distribution. However, when the test distribution differs from the training one, the estimated posteriors may b-
ecome biased, leading to degraded performance. Therefore, accurately estimating and correcting distribution shifts is essential for maintaining robust prediction across mismatched training and testing environments. This work primarily focuses on the label shift setting, where the prior distributions of the training and test domains differ, while the conditional likelihood distribution P (X|Y ) is assumed to remain invariant:
(
P (Xs|Ys) = P (Xt|Yt)
P (Ys) ̸= P (Yt) (1)
where Xs and Ys denote the training domain input data and labels, respectively, while Xt and Yt represent the test domain counterparts. Such a shift alters the class proportions between training and test data without changing the feature–label relationship, thereby making it possible to adapt a pre-trained classifier by appropriately estimating test prior probabilities and reweighting the classifier’s output.
B. Training and test prior setting
To simulate the discrepancy between prior distributions of training and test data and to study the impact of imbalanced data on label shift estimation, the classification model is trained on data whose class priors follow a standard long-tail distribution with an imbalance ratio ρ [34], while the test data are constructed with priors following either a shuffled long-tail or a Dirichlet distribution [22]. The class frequency vector of the training dataset ns and test dataset nt can be written as:
ns = fLT (Ns, ρ, K) = ⌊Nsρ i
K ⌋ (2)
n(l)
t=
(
σ(fLT (Nt, ρ, K)) l = shuffle
⌊Nt ◦ Dir(α)⌋ l = Dirichlet (3)
where Ns and Nt denote the class sizes in the training and test domains, respectively. The operator σ(·) indicates a shuffling function, and Dir(α) denotes a sampled Dirichlet prior probability vector parameterized by a K-dimensional hyperparameter vector α. The symbol ◦ refers to the Hadamard (element-wise) product, and ⌊·⌋ denotes the floor operation. Notably, the shuffled long-tail prior is employed to evaluate the algorithm’s robustness under severe class imbalance, whereas the Dirichlet prior-
 is adopted to assess its adaptability in scenarios with high prior uncertainty.

4
C. Dirichlet distribution
The Dirichlet distribution Dir(π; α) can be regarded as the multivariate extension of the beta distribution [35]. It is parameterized by a M -dimensional hyperparameter α ∈ RM > 0, which controls the distribution’s shape, and is supported on the (M − 1)-dimensional standard simplex ∆M−1 = {π ∈ RM |πi ≥ 0, PM
i=1 πi = 1}. The probability density function (PDF) of Dirichlet distribution can be written as:
P (π; α) = Dir(π; α) = 1
B(α)
M
Y
j=1
παj −1
j (4)
B(α) =
QM
i=1 Γ(αi)
Γ(PM
j=1 αj ) (5)
where Γ(·) is the Gamma function. It is worth noting that when α = 1, the Dirichlet distribution degenerates to the uniform distribution. Due to its support on the probability simplex and its role as the conjugate prior for both categorical and multinomial distributions, the Dirichlet distribution is widely adopted in Bayesian statistics to model class priors [36]–[39]. Accordingly, this work employs the Dirichlet distribution and applies batch and online EM algorithms for offline and online estim-
ation of test priors, respectively.
III. BATCH EM METHOD
This section presents the batch EM-based test prior estimation algorithm, referred to as FMAPLS. The algorithm is capable of simultaneously utilizing N soft probability outputs {P (Y |Xt)}tN=1 produced by the classifier.
A. FMAPLS algorithm
Assume the neural network-based classifier has N input data X = {xi, x2, ..., xN }, the complete posterior probability of the Dirichlet hyperparameter and the test prior probability set θ : {α; π} can be written as [25]:
P (θ|X, Y ) = 1
Z P (θ)
N
Y
i=1
P (Xs = xi|Ys = yi)P (Yt = yi|θ)
(6)
where Z is a constant and P (θ) is the Dirichlet PDF Dir(π; α) given in (4) and (5). Based on this, the batch EM is applied to iteratively estimate the parameter set θ. In the E-step, the expected complete-data log-likelihood function conditioned on the parameter θ(t) at the t-th iteration is given by:
EY |X,θ(t) [log P (θ|X, Y )] (7)
= Const + log 1
B(α) +
K
X
j=1
(αj − 1) log πj
+
K
X
j=1
N
X
i=1
P (Yt = yi = j|Xt = xi, θ(t)) log πj
where Const includes all terms that are irrelevant to θ, such as 1/Z and PN
i=1 P (Xs = xi|Ys = yi). The detailed proof of (7) is given in Appendix A.
Based on Bayes’ theorem and the label shift assumption defined in (1), the conditional probability P (Yt = yi = j | Xt = xi, θ(t)) can be reformulated as [14]:
P (Yt =yi = j|Xt = xi, θ(t)) (8)
=
π(t)
j
εj P (Ys = yi = j|Xs = xi)
PK k=1
π(t)
k
εk P (Ys = yi = k|Xs = xi)
= B(t)
i π(t)
j
where ε = (ε1, . . . , εK ) denotes the training dataset’s class prior probability vector. For the update of π and α in the M-step, the closedformed π update function and the gradient ascent (GA)-based α update function can be respectively written as:
π(t+1)
j = α(t)
j − 1 + PN
i=1 B(t)
i π(t)
j
PK
k=1 α(t)
k − 1 + PN
i=1 B(t)
i π(t)
k
(9)
α(t+1)
j = α(t)
j +μ
"
−ψ(α(t)
j ) + ψ(
K
X
n=1
α(t)
n ) + log π(t+1)
j
#
(10)
where ψ(·) is digamma function, μ is the learning rate. The detailed proof and the concavity analysis are shown in our prior work [25]. Next, we consider the CRB for prior probability π estimation. Assume πˆ is the estimated value of true prior probability, the estimation covariance can be written as:
Cov (πˆ ) ≥ Coff
CRB(π) (11)
where Coff
CRB(π) denotes the CRB for π estimation using the batch EM algorithm. According to statistical signal processing theory [40], the CRB provides the theoretical lower bound on the covariance of unbiased estimator, which can be expressed as the inverse of the Fisher information matrix (FIM) F corresponding to the estimated parameters [41]:
C off
CRB(π) = F −1 (12)
F off
i,j = αi − 1 + PN
n=1 f xn
i
π2
i
δi,j + αK − 1 + PN
n=1 f xn
K
π2
K
(13)
where F off
i,j are the elements of FIM, f xn
i represents the posterior probability that the trained classifier classifies the input data xn as class i, δi,j is the Kronecker delta function. δi,j = 1 when i = j; otherwise, δi,j = 0. The detailed proof of FIM elements is shown in Appendix B. Therefore, the CRB of FMAPLS algorithm can be expressed as:
C off
CRB(π) = diag
"
αi − 1 + PN
n=1 f xn
i
π2
i
#
(14)
+ αK − 1 + PN
n=1 f xn
K
π2
K
11T
!−1
where diag[·] and 11T respectively represents a (K − 1)dimensional diagonal matrix and all-1 matrix.

5
B. Linear surrogate function (LSF)
Although GA can be employed to optimize α, its convergence speed and numerical stability are highly sensitive to both the choice of initialization and the learning rate μ [42]. To mitigate these issues, this work introduces a LSF to replace equation (10), thereby eliminating the sensitivity to the initialization and the learning rate of α update step:
αj = c
max(π(t+1)) π(t+1)
j = cˆπ(t+1)
j (15)
where LSF parameter c is a large constant. To demonstrate the rationality of the LSF method, it is necessary to prove that both GA and the surrogate scheme drive the partial derivative of the α-related term in equation (7) Lα to converge to zero:
Lα = log 1
B(α) +
K
X
j=1
(αj − 1) log π(t+1)
j (16)
Owing to the concavity of α update function, employing GA with an appropriately selected μ ensures convergence to the maximum point [25]. In the case of the LSF method, substituting (15) into the partial derivative equation of Lα leads to the following formula:
∂Lα ∂αj
= −ψ(cˆπ(t+1)
j ) + ψ(cˆ) + log π(t+1)
j (17)
=
h
log(cˆπ(t+1)
j ) − ψ(cˆπ(t+1)
j)
i
+ [ψ(cˆ) − log(cˆ)]
Based on the asymptotic expansion of the digamma function [43], equation (17) can be further expressed as:
h
log(cˆπ(t+1)
j ) − ψ(cˆπ(t+1)
j)
i
+ [ψ(cˆ) − log(cˆ)] (18)
∼ O(1
cˆ) − O( 1
cˆπ(t+1)
j
)
∼ O( 1
cˆπ(t+1)
j
)
It can be shown that equation (18) converges to zero as c → +∞. However, for practical implementations where c is finite, the approximation error introduced by the surrogate function can be rigorously bounded within O( 1
cˆπ(t+1)
j
). Con
sequently, the surrogate update rule is effectively equivalent to performing GA for maximizing Lα when c is sufficiently large. As a result, the batch EM procedure produces a parameter sequence {(π(t), α(t))} with monotonically non-decreasing log-likelihood values, and the iteration continues until the maximum loop number Tmax is reached. When FMAPLS finishes estimating, the final estimation of the test prior distribution, π∗, is then employed to reweight the classifier’s output soft posterior pro-
babilities according to (8). The overall procedure of FMAPLS is summarized in Algorithm 1.
IV. ONLINE EM METHOD
This section presents the online EM-based test prior estimation algorithm, referred to as online-FMAPLS. Particularly, at time τ , we can only observe classifier’s soft probability output P (Y |Xτ ), and the algorithm is able to process it in an online manner.
Algorithm 1 FMAPLS
Input: Test dataset X, training prior ε and classifier f Output: Test domain prior probability P (Yt) = π∗ 1: Initialization Step: Initialize Dirichlet parameter α(0) and test prior probability π(0) as uniform distribution:
α(0) = 1 π(0)
j =1
K 2: for t = 0 to Tmax do 3: E Step: Calculate EY |X,θ(t) [log P (θ|X, Y )] according to equation (7) 4: M Step: Obtain π(t+1) and α(t+1) via:
π(t+1)
j = α(t)
j − 1 + PN
i=1 B(t)
i π(t)
j
PK
k=1 α(t)
k − 1 + PN
i=1 B(t)
i π(t)
k
α(t+1)
j= c
max(π(t+1)) π(t+1)
j = cˆπ(t+1)
j
5: end for
6: return Test domain prior probability estimation: P (Yt) = πTmax = π∗
7: Reweight classifier output according to (8)
A. Problem setting and assumption validation
Assume the neural network-based classifier have an input data X = xτ at time t = τ . Similar to (6), the complete posterior probability of parameter set θ can be written as:
P (θ|X, Y ) = P (X, Y |θ)P (θ)
R
θ P (X, Y |θ)dθ (19)
=1
Z P (θ)P (Xt = xτ , Yt = yτ |θ)
=1
Z P (θ)P (Xt = xτ |Yt = yτ )P (Yt = yτ |θ)
=1
Z P (θ)P (Xs = xτ |Ys = yτ )P (Yt = yτ |θ)
Different from the batch EM, its online variant replaces the E-step by a stochastic approximation step, while maintaining the M-step unchanged [32]. According to the discussion in [44], the following three assumptions need to be satisfied:
(1) Exponential form complete posterior: We first prove that the complete posterior probability P (θ|X, Y ) belongs to the exponential family [45]:
P (θ|X, Y ) = h(X, Y ) exp{−ψ(θ) + ⟨S(X, Y ), φ(θ)⟩}
(20)

         
         
h(X, Y ) = 1
Z P (Xs = xτ |Ys = yτ )
ψ(θ) = log(B(α))
Si(X, Y ) = 1
δyτ ,i
φi(θ) = (αi − 1) log πi
log πi
(21)
where ⟨·, ·⟩ is the scalar product between two vectors, δyτ ,i is the indicator function: δyτ ,i = 1 if yτ = i and δyτ ,i = 0 otherwise. The detailed proof of (21) is given in Appendix C.

6
(2) Well-defined S(X, Y ) conditional expectation: The conditional expectation of sufficient statistic S(X, Y ) with input data xτ can be expressed as:
S ̄i(xτ ; θ) = Eθ[Si(X, Y )|X = xτ ] (22)
=1
Eθ[δyτ ,i|Xt = xτ ]
=1
P (Yt = yτ = i|Xt = xτ , θ)
=1
Bτ
i πi
where Bτ
i πi is defined in (8). Since the classifier structure remains fixed during testing phase and the parameter θ is treated as a known quantity in the expectation process, equation (22) is consequently well-defined. (3) Uniqueness of the maximum: Ensuring an unambiguous M-step in the iterative process requires proving the following function possesses a unique maximizer:
l(S, θ) = −ψ(θ) + ⟨S(X, Y ), φ(θ)⟩ (23)
= log 1
B(α) +
K
X
i=1
(αi − 1 + δyτ ,i) log πi
Since online-FMAPLS updates π and α sequentially, it is further necessary to prove that l(S, θ) is concave in π when α is fixed, and vice versa. The concavity with respect to π follows from the fact that log πi is strictly concave on the probability simplex with nonnegative coefficients (αi − 1 + δyτ ,i), while for fixed π, the term − log B(α) is strictly concave in α according to the discussion [25], [45], [46]. Therefore, l(S, θ) is separately concave in π and α, ensuring the uniqueness of the m-
aximum in each update step.
B. Online-FMAPLS algorithm
According to the procedure of the online EM [44], the online E-step takes the following form:
Sτ +1
i = Sτ
i + γ S ̄i(xτ+1; θτ ) − Sτ
i (24)
=1
(1 − γ)δyτ ,i + γBτ+1
i πτ
i
where γ denotes the confidence parameter of the online label shift estimation framework. As γ → 1−, the algorithm places greater emphasis on future data, whereas as γ → 0+, it focuses more heavily on the current data. In the procedure of the M step in online EM algorithm, the goal is to maximize the following equation:
{πτ+1, ατ+1} = arg max
θτ +1
l(Sτ+1, θ) (25)
= arg max
θτ +1
log 1
B(α)
+1
(1 − γ)δyτ + γBτ+1πτ
i
, (α − 1) log π
log π i
= arg max
θτ +1
log 1
B(α) +
K
X
i=1
(αi − 1) log πi
+ (1 − γ)δyτ ,i + γBτ+1
i πτ
i log πi
For the update of π, the goal is to maximize terms related to π in the maximize function with normalization constraint, which can be expressed as:

     
     
arg max
πτ +1
K
X
i=1
(ατ
i − 1) log πi
+ (1 − γ)δyτ ,i + γBτ+1
i πτ
i log πi
s.t. : PK
j=1 πj = 1, πj > 0
(26)
Using the Lagrange Multiplier Method, the Lagrangian equation Loπn(π, λ) can be written as:
Lon
π (π, λ) =
K
X
i=1
(ατ
i − 1) log πi + (1 − γ)δyτ ,i (27)
+ γBτ+1
i πτ
i log πi + λ 1 −
K
X
k=1
πk
!
where λ is a Lagrange multiplier. Computing the partial derivatives of (27) with respect to πi and λ leads to the following set of equations:
∂Loπn ∂πi
= (ατ
i − 1) + (1 − γ)δyτ ,i + γBτ+1
i πτ
i πi
− λ = 0 (28)
∂Loπn
∂λ = 1 −
K
X
k=1
πk = 0 (29)
Substituting (28) into (29), λ can be given as:
λ=
K
X
k=1
(ατ
k − 1) + (1 − γ)δyτ ,k + γBτ+1
k πτ
k (30)
Substituting (30) into (28), the update formula for πτ+1
i can finally be expressed as:
πτ +1
i = (ατ
i − 1) + (1 − γ)δyτ ,i + γBτ+1
i πτ
i
K
P
k=1
(ατ
k − 1) + (1 − γ)δyτ ,k + γBτ+1
k πτ
k
(31)
As for the update of α, the goal is to maximize the following equation:
arg max
ατ +1
log 1
B(α) +
K
X
i=1
(αi − 1) log πτ+1
i (32)
Notably, (32) has the same construct with the M-step of α in batch EM. Thus, the update procedure of α can also be replaced by LSF method:
ατ +1
i= c
max(πτ+1) πτ+1
i = cˆπτ+1
i (33)
where c is a sufficiently large constant. In summary, the pseudocode of online-FMAPLS is shown in Algorithm 2. Similar to the CRB analysis process in Section III-A, the FIM elements F on
i,j of online-FMAPLS can be given as:
F on
i,j =
ατ
i − 1 + (1 − γ)δyτ ,i + γ 1
τ +1
τ +1
P
t=1
f xt
i
π2
i
δi,j (34)
+
ατ
K − 1 + (1 − γ)δyτ ,K + γ 1
τ +1
τ +1
P
t=1
f xt
K
π2
K

7
Algorithm 2 online-FMAPLS Input: Test dataset X, training prior ε and classifier f Output: Test domain prior probability P (Yt = ·) = πN 1: Initialization Step: Initialize Dirichlet parameter α(0) and test prior probability π(0) as uniform distribution:
α(0) = 1 π(0)
j =1
K 2: for τ = 0 to N do 3: Online E Step: Calculate Sτ+1 function according to equation (24) 4: Online M Step: Obtain ατ+1 and πτ+1 via:
πτ +1
i = (ατ
i − 1) + (1 − γ)δyτ ,i + γBτ+1
i πτ
i
K
P
k=1
(ατ
k − 1) + (1 − γ)δyτ ,k + γBτ+1
k πτ
k
ατ +1
i= c
max(πτ+1) πτ+1
i = cˆπτ+1
i
5: end for
6: return Test domain prior probability estimation: P (Yt) = πN
7: Reweight classifier output according to (8)
where the detailed proof is shown in Appendix D. Thus, the CRB of online-FMAPLS is:
C on
CRB(π) = diag

  
ατ
i − 1 + (1 − γ)δyτ ,i + γ 1
τ +1
τ +1
P
t=1
f xt
i
π2
i

  
(35)
+
ατ
K − 1 + (1 − γ)δyτ ,K + γ 1
τ +1
τ +1
P
t=1
f xt
K
π2
K
11T
!−1
where diag[·] and 11T respectively represents a (K − 1)dimensional diagonal matrix and all-1 matrix.
C. Convergence rate analysis
In streaming environments, where data arrive sequentially and computational resources are limited, rapid convergence of estimation algorithms is critically important. The ability to quickly adapt to label shift with few samples directly affects the practical utility of online systems. This motivates a detailed analysis of online-FMAPLS convergence, with emphasis on parameter c, which governs the trade-off between convergence rate and estimation accuracy. Substituting the LSF into online π update f-
unction yields the following recursive form of the test prior πτ+1
i:
πτ +1
i = (cˆπτ
i − 1) + (1 − γ)δyτ ,i + γBτ+1
i πτ
i
K
P
k=1
(cˆπτ
k − 1) + (1 − γ)δyτ ,k + γBτ+1
k πτ
k
(36)
= cˆπτ
i + γBτ+1
i πτ
i + (1 − γ)δyτ ,i − 1
cˆ − K + 1 − γ + γ
K
P
k=1
Bτ +1
k πτ
k
Let M = PK
k=1 Bτ +1
k πτ
k , the increment |πτ+1
i − πτ
i | between two consecutive iterations can be consequently expressed as:
|πτ +1
i − πτ
i | (37)
= πτ
i (γBτ+1
i − γM + γ + K − 1) + (1 − γ)δyτ ,i − 1 cˆ − K + 1 − γ + γM
It is evident from (37) that the magnitude of the iterative increment is inversely proportional to the term cˆ. Therefore, when parameters K, M, γ are fixed during each iteration, the update step of πi satisfies:
|πτ +1
i − πτ
i | ∼ O(1
cˆ) (38)
This analytical result shows that larger c yields smaller update steps and consequently slower convergence, while smaller c produces faster convergence. However, as discussed in Section III-B, the LSF introduces considerable estimation errors when c is relatively small, causing a gradual drift in the estimated test priors. Therefore, online-FMAPLS exhibits a fundamental trade-off between convergence rate and estimation accuracy, which is governed by c. In streaming scenarios with sequential data a-
nd limited resources, rapid convergence is often prioritized to quickly adapt to distribution shifts. This necessitates accepting a certain level of estimation error in exchange for improved responsiveness.
V. COMPLEXITY ANALYSIS This section investigates the computational complexity of proposed methods in a single EM iteration. Each iteration requires the calculation of expectation formula followed by sequential updates of K-dimensional vectors π and α: (1) Offline expectation: As shown in equation (7), the computational cost of expectation formula requires O(N K) in total. (2) Offline π update: Equation (9) shows that, the complexity of update π(t+1)
j requires O(N K). (3) Offline α update with GA method: Equation (10) shows that, the complexity of update α(t+1)
j requires O(TgradK), where Tgrad is the iteration number of each GA. (4) Offline α update with LSF method: Due to the linear property, the computing complexity of equation (15) is O(K). (5) Online expectation: Since data is input in a streaming manner, the computational complexity of the online expectation formula as shown in equation (24) is O(K). (6) Online π update: Equation (31) shows that, the complexity of update πτ+1
i requires O(K). (7) Online α update: The same as the offline α update analysis, the computational complexity of the gradient ascent and LSF solutions are O(TgradK) and O(K) respectively. In summary, the computational complexities of the four proposed methods are listed in Table I. For updating α, GA requires Tgrad iterations, leading to a cost of O(TgradK), whereas TABLE I COMPUTATIONAL COMPLEXITY OF EACH ITERATION OF THE ALGORITHMS
Algorithm Computational Complexity FMAPLS+GA O(N K + TgradK) FMAPLS+LSF O(N K + K) online-FMAPLS+GA O(K + TgradK) online-FMAPLS+LSF O(K)

8
TABLE II KL DIVERGENCE AND CLASSIFICATION ACCURACY (“KL|ACC.”) ON SHUFFLED LONG-TAIL TEST DISTRIBUTIONS WITH TRAINING IMBALANCE RATIOS {0.2, 0.1, 0.05, 0.02} AND TEST RATIOS {0.02, 0.025, 0.04, 0.05, 0.1}. BEST PERFORMANCES ARE IN BOLD AND SECOND BEST IN BLUE.
Dataset CIFAR100-0.2-LT CIFAR100-0.1-LT
Imbalance ratio ρtest 0.02 0.025 0.04 0.05 0.1 0.02 0.025 0.04 0.05 0.1
MLLS 0.109|68.48 0.101|68.32 0.075|67.24 0.066|67.14 0.037|65.98 0.190|63.42 0.178|63.02 0.135|62.30 0.120|62.02 0.083|60.78 BBSE 0.069|68.31 0.062|68.15 0.057|67.10 0.050|67.05 0.036|66.00 0.145|63.25 0.131|63.00 0.102|62.24 0.098|62.01 0.067|60.91 RLLS 0.606|62.98 0.558|63.35 0.488|62.92 0.450|63.25 0.344|63.10 0.740|57.62 0.697|57.87 0.623|57.58 0.580|57.87 0.484|57.59 MAPLS 0.069|68.22 0.063|68.06 0.056|67.08 0.052|67.03 0.041|65.98 0.103|63.17 0.097|62.94 0.086|62.17 0.080|61.94 0.064|60.94
FMAPLS 0.053|68.32 0.048|68.16 0.041|67.18 0.038|67.09 0.028|66.05 0.079|63.32 0.073|63.03 0.063|62.34 0.058|62.07 0.046|60.96 online-FMAPLS 0.082|68.11 0.078|67.95 0.071|66.90 0.067|66.90 0.057|65.72 0.108|63.13 0.103|62.89 0.092|62.10 0.087|61.84 0.075|60.69
Dataset CIFAR100-0.05-LT CIFAR100-0.02-LT
Imbalance ratio ρtest 0.02 0.025 0.04 0.05 0.1 0.02 0.025 0.04 0.05 0.1
MLLS 0.196|60.75 0.181|60.21 0.156|58.76 0.118|58.91 0.091|57.85 0.339|52.93 0.308|52.73 0.307|51.41 0.293|51.20 0.231|50.38 BBSE 0.268|60.19 0.250|59.68 0.238|58.38 0.209|58.48 0.117|57.68 2.264|45.06 0.646|51.99 0.914|49.82 1.998|44.94 1.165|48.03 RLLS 0.909|52.35 0.860|52.29 0.803|51.59 0.770|51.79 0.652|52.17 1.152|44.38 1.129|44.08 1.074|43.55 1.015|44.07 0.931|44.12 MAPLS 0.129|60.25 0.122|59.71 0.109|58.47 0.104|58.53 0.079|57.78 0.182|52.24 0.171|51.97 0.151|50.88 0.138|50.74 0.102|50.19
FMAPLS 0.085|60.62 0.079|60.09 0.070|58.78 0.062|58.94 0.047|58.02 0.124|52.81 0.113|52.62 0.099|51.46 0.089|51.32 0.062|50.59 online-FMAPLS 0.122|60.26 0.115|59.78 0.106|58.44 0.099|58.50 0.085|57.52 0.161|52.66 0.149|52.32 0.138|51.19 0.130|50.95 0.101|50.38
TABLE III KL DIVERGENCE AND CLASSIFICATION ACCURACY (“KL|ACC.”) ON DIRICHLET TEST DISTRIBUTIONS WITH TRAINING IMBALANCE RATIOS {0.2, 0.1, 0.05, 0.02} AND TEST DIRICHLET HYPERPARAMETERS {1, 1.5, 2, 2.5, 3}. BEST PERFORMANCES ARE IN BOLD AND SECOND BEST IN BLUE.
Dataset CIFAR100-0.2-LT CIFAR100-0.1-LT
Dirichlet αtest 1 1.5 2 2.5 3 1 1.5 2 2.5 3
MLLS 0.082|68.05 0.067|66.83 0.057|66.06 0.045|65.91 0.046|65.33 0.144|62.84 0.122|61.72 0.120|60.62 0.098|60.32 0.102|60.20 BBSE 0.062|67.91 0.052|66.75 0.046|66.09 0.038|65.96 0.038|65.42 0.115|62.68 0.096|61.65 0.088|60.71 0.082|60.46 0.083|60.34 RLLS 0.541|63.23 0.423|63.16 0.368|63.07 0.320|63.52 0.300|63.12 0.689|57.53 0.564|57.67 0.500|57.45 0.461|57.58 0.431|57.74 MAPLS 0.065|67.77 0.054|66.69 0.047|66.08 0.041|65.96 0.038|65.43 0.097|62.57 0.080|61.66 0.068|60.81 0.061|60.52 0.056|60.45
FMAPLS 0.043|67.97 0.038|66.81 0.034|66.12 0.030|65.99 0.029|65.45 0.066|62.81 0.059|61.79 0.054|60.83 0.049|60.56 0.046|60.47 online-FMAPLS 0.076|67.61 0.061|66.61 0.054|65.97 0.044|65.92 0.042|65.36 0.100|62.53 0.084|61.61 0.073|60.70 0.064|60.50 0.059|60.45
Dataset CIFAR100-0.05-LT CIFAR100-0.02-LT
Dirichlet αtest 1 1.5 2 2.5 3 1 1.5 2 2.5 3
MLLS 0.146|60.08 0.130|58.56 0.108|58.16 0.110|57.35 0.104|57.17 0.267|52.69 0.289|51.31 0.360|50.31 0.262|49.80 0.279|49.64 BBSE 0.188|59.74 0.164|58.38 0.132|57.79 0.150|57.12 0.183|56.69 1.277|50.10 0.761|50.69 3.136|40.57 0.922|48.56 0.642|49.33 RLLS 0.858|52.23 0.738|51.93 0.672|52.31 0.637|52.01 0.613|52.16 1.124|44.22 0.994|44.33 0.937|44.37 0.904|44.04 0.883|43.94 MAPLS 0.123|59.54 0.100|58.31 0.084|58.13 0.073|57.48 0.067|57.48 0.165|51.98 0.134|50.98 0.109|50.36 0.095|50.03 0.084|49.72
FMAPLS 0.074|59.99 0.063|58.63 0.053|58.31 0.048|57.67 0.046|57.50 0.102|52.71 0.088|51.41 0.077|50.74 0.065|50.25 0.059|50.00 online-FMAPLS 0.114|59.59 0.091|58.29 0.077|58.07 0.071|57.37 0.065|57.35 0.149|52.27 0.131|51.06 0.110|50.57 0.094|50.06 0.085|49.84
LSF performs a single scaling operation with complexity O(K). Comparing batch-based FMAPLS with its streaming version, online-FMAPLS reduces the cost of expectation and π update steps from O(N K) to O(K) by replacing batch aggregation with streaming updates. Overall, LSF is more efficient than GA for updating α, and online-FMAPLS is better suited for large-scale or streaming applications.
VI. NUMERICAL EXPERIMENTS To evaluate the effectiveness of proposed batch and online frameworks, experiments are conducted on CIFAR100 [47] and ImageNet [48] datasets, employing ResNet32 and ResNet50 [49] as base classifiers. Training data follow standard long-tail imbalanced variants [50], while test priors employ both shuffled long-tail and Dirichlet-based imbalance settings to simulate realistic label shift. For both FMAPLS and
online-FMAPLS, we initialize algorithms with a uniform prior
(π(0)
j = 1/K, α(0) = 1), which is fair and widely accepted due to the true test prior is unknown for the classifier. The performance of all methods is quantitatively assessed using the Kullback–Leibler (KL) divergence [51] between the estimated and true label distributions:
DKL(πtrue∥π) =
K
X
j=1
πtrue
j log πtrue
j
πj
(39)
as well as the post-shift classification accuracy, where πtrue is the true prior distribution of test dataset. Comparisons are made against several representative baselines, including MLLS [14], BBSE [17], RLLS [18], and MAPLS [22]. All reported results are averaged over 100 independent Monte Carlo trials, each obtained through repeated random sampling of shuffled and Dirichlet-distributed test priors. A. Validation on CIFAR100
Table II demonstrates the label shift estimation KL divergence and post-shift classification accuracy of shuffled longtailed test distributions, where the test imbalance ratio ρtest and training imbalance ratio ρtrain are varied. From the perspective of KL divergence, the FMAPLS algorithm consistently achieves the lowest values across all parameter settings, with at least a 20% reduction compared to baseline methods, demonstrating its superior effectiveness and robustness in estimating prior proba-
bility distributions for test data. In addition, both the training and test imbalance ratios significantly affect estimation precision: when ρtest is fixed, KL divergence increases as ρtrain decreases, since a more imbalanced training set limits minority-class representation and thus degrades prior estimation; conversely, with fixed ρtrain, a smaller ρtest also raises KL due to the intensified label shift discrepancy from the uniform initialization. Nevertheless,

9
0 500 1000 1500 2000 2500 Iteration times
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0.4
0.45
0.5
KL Divergence
Shuffle-0.020 Shuffle-0.025 Shuffle-0.040 Shuffle-0.050 Shuffle-0.100
(a)
0 500 1000 1500 2000 2500 Iteration times
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0.4
0.45
0.5
KL Divergence
Shuffle-0.020 Shuffle-0.025 Shuffle-0.040 Shuffle-0.050 Shuffle-0.100
(b)
0 500 1000 1500 2000 2500 Iteration times
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0.4
0.45
0.5
KL Divergence
Shuffle-0.020 Shuffle-0.025 Shuffle-0.040 Shuffle-0.050 Shuffle-0.100
(c)
0 500 1000 1500 2000 2500 Iteration times
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0.4
0.45
0.5
KL Divergence
Shuffle-0.020 Shuffle-0.025 Shuffle-0.040 Shuffle-0.050 Shuffle-0.100
(d)
Fig. 2. KL divergence of online-FMAPLS algorithm evaluated on CIFAR100 dataset with varying shuffled long-tail test imbalance ratio ρtest and different training imbalance ratios ρtrain. (a) ρtrain = 5, (b) ρtrain = 10, (c) ρtrain = 20, (d) ρtrain = 50.
0 500 1000 1500 2000 2500 3000 Iteration times
0
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0.4
KL Divergence
Dirichlet-1.0 Dirichlet-1.5 Dirichlet-2.0 Dirichlet-2.5 Dirichlet-3.0
(a)
0 500 1000 1500 2000 2500 3000 Iteration times
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0.4
0.45
KL Divergence
Dirichlet-1.0 Dirichlet-1.5 Dirichlet-2.0 Dirichlet-2.5 Dirichlet-3.0
(b)
0 500 1000 1500 2000 2500 3000 Iteration times
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0.4
0.45
KL Divergence
Dirichlet-1.0 Dirichlet-1.5 Dirichlet-2.0 Dirichlet-2.5 Dirichlet-3.0
(c)
0 500 1000 1500 2000 2500 3000 Iteration times
0.05
0.1
0.15
0.2
0.25
0.3
0.35
0.4
0.45
KL Divergence
Dirichlet-1.0 Dirichlet-1.5 Dirichlet-2.0 Dirichlet-2.5 Dirichlet-3.0
(d)
Fig. 3. KL divergence of online-FMAPLS algorithm evaluated on CIFAR100 dataset with varying test prior Dirichlet hyperparameter α and different training imbalance ratios ρtrain. (a) ρtrain = 5, (b) ρtrain = 10, (c) ρtrain = 20, (d) ρtrain = 50.
the relative improvement of FMAPLS over baselines grows as ρtrain decreases, indicating that the dynamic adaptation of the Dirichlet parameter α enables more accurate targetprior approximation under severe imbalance. Moreover, under extremely imbalanced conditions (ρtrain ≤ 0.05), onlineFMAPLS, which updates priors in a single pass, consistently attains the second-lowest KL, confirming its dynamic adaptive scheme remains effective in streaming scenarios.
From the perspective of classification accuracy, the proposed FMAPLS method consistently achieves top-tier performance, achieving the highest or second-highest accuracy across nearly all combinations of training and test imbalance ratios. This consistent superiority demonstrates FMAPLS’s strong generalization capability under distribution shifts. While MLLS exhibits competitive, and occasionally superior, accuracy under severe test-time imbalance conditions (particularly when ρtest ≤ 0.025), FMAPL-
S maintains superior overall robustness across the entire spectrum of test shifts. It preserves high accuracy not only in challenging training settings but also across most testing distributions, whereas the performance of MLLS declines more noticeably, and BBSE exhibits significant instability, as test conditions vary. Therefore, despite MLLS’s situational advantage, FMAPLS establishes itself as a more universally reliable and high-performing approach for shuffled long-tailed label shift estimati-
on.
Table III summarizes the KL divergence and classification accuracy of each algorithm under the Dirichlet test prior distribution. The experiments were conducted with the total number of test samples, Ntest, fixed at 3000, and the Dirichlet hyperparameter αtest set identically across all dimensions for simplicity. It is noteworthy that a smaller αtest corresponds to higher uncertainty in the test prior distribution.
In terms of KL divergence, the proposed FMAPLS consistently achieves the lowest values across all training imbalance ratios and Dirichlet test hyperparameters αtest, while online
FMAPLS ranks second under highly imbalanced training conditions (ρtrain ≤ 0.05). This trend aligns with the shuffled long-tail results in Table II, confirming the effectiveness of dynamic Dirichlet parameter adaptation for test prior estimation. Moreover, as test uncertainty decreases (i.e., with larger αtest), all methods exhibit reduced KL divergence, indicating that more balanced and predictable test distributions ease label shift estimation. Notably, the performance gap between FMAPLS and base-
lines widens as αtest decreases, highlighting that the proposed dynamic adaptation scheme is especially beneficial under challenging and uncertain test conditions.
In terms of classification accuracy, FMAPLS consistently achieves the best performance across almost all experimental conditions. Its robustness is particularly pronounced under severe training imbalance (e.g., 0.02-LT), where it significantly outperforms other methods. Furthermore, the performance gap between FMAPLS and other methods widens as the training imbalance intensifies. In contrast, the online-FMAPLS variant substantially reduces computational complexity while maintaining comparable accu-
racy to baseline algorithms, demonstrating its efficiency and scalability for large-scale and streaming data applications, albeit with a slight trade-off in predictive precision compared to the FMAPLS model.
To demonstrate the effectiveness of online-FMAPLS’s incremental prior updates, Fig. 2 and Fig. 3 depict the evolution of the KL divergence between the estimated and true test priors for the shuffled long-tailed and Dirichlet settings, respectively. At each iteration, the algorithm refines its prior estimates using the classifier’s soft outputs. By examining the curve profiles, the KL divergence decreases initially and then stabilizes as the iterations proceed, with convergence occurring around 150-
0 iterations for the shuffled long-tail and 2000 iterations for the Dirichlet distribution. These results confirm that onlineFMAPLS achieves stable and accurate convergence through incremental updates.

10
B. Validation on ImageNet
Table IV and Table V present the KL divergence and classification accuracy on the large-scale long-tailed ImageNet dataset under shuffled and Dirichlet-distributed test priors. The proposed FMAPLS consistently achieves the lowest KL divergence across all settings, indicating its strong ability to estimate test priors accurately under highly imbalanced and uncertain conditions. The online-FMAPLS ranks second, highlighting the robustness of its incremental updates and the effectiveness of dynamic Di-
richlet adaptation for large-scale streaming data. Moreover, the consistent improvements of FMAPLS and online-FMAPLS over all baselines demonstrate that relaxing restrictive assumptions in MAPLS enhances flexibility in modeling complex prior variations. Overall, these results validate the proposed frameworks’ scalability and generalization across diverse distributional scenarios. Regarding the classification accuracy results in Tables IV and V, FMAPLS consistently achieves the highest performance -
across nearly all configurations, indicating that precise estimation of test priors directly enhances post-shift performance. The online-FMAPLS attains comparable accuracy (only about 0.5% lower in Table IV and occasionally best in Table V) while requiring far less computation, underscoring its practicality for large-scale and streaming scenarios. Furthermore, both methods maintain stable accuracy as ρtest or αtest increases, confirming robustness to varying degrees of imbalance and uncertainty. I-
nterestingly, most methods exhibit a slight accuracy drop when ρtest or αtest grows. This phenomenon arises because the classifier, trained on a long-tailed source, tends to align its decision boundaries with skewed class priors; when the test prior becomes more uniform and less uncertain, large calibration mismatch leads to a marginal degradation in overall accuracy. Similar to Figs. 2 and 3, Figs. 4(a) and 4(b) depict the evolution of KL divergence between the estimated and true test priors for -
online-FMAPLS on the large-scale ImageNet-LT dataset. In the shuffled long-tailed setting, the KL divergence TABLE IV KL DIVERGENCE AND CLASSIFICATION ACCURACY (“KL|ACC.”) ON SHUFFLED LONG-TAIL TEST PRIORS WITH TEST RATIOS {0.02, 0.025, 0.04, 0.05}. BEST PERFORMANCES ARE IN BOLD AND SECOND BEST IN BLUE.
Dataset ImageNet-LT
Imbalance ratio ρtest 0.02 0.025 0.04 0.05
MLLS 1.584|46.02 1.494|46.08 1.582|44.82 1.545|44.43 BBSE 0.351|50.93 0.340|50.59 0.313|50.17 0.300|50.18 RLLS 0.967|45.81 0.936|45.75 0.865|45.79 0.818|46.08 MAPLS 0.229|51.20 0.220|51.20 0.197|50.28 0.193|50.07
FMAPLS 0.180|52.78 0.171|52.49 0.148|51.77 0.142|51.68 online-FMAPLS 0.224|52.22 0.213|51.95 0.187|51.22 0.175|51.21
TABLE V KL DIVERGENCE AND CLASSIFICATION ACCURACY (“KL|ACC.”) ON DIRICHLET TEST PRIORS WITH HYPERPARAMETERS {1, 1.5, 2, 2.5}. BEST PERFORMANCES ARE IN BOLD AND SECOND BEST IN BLUE.
Dataset ImageNet-LT
Dirichlet αtest 1 1.5 2 2.5
MLLS 1.504|45.03 1.554|44.06 1.534|43.49 1.595|42.49 BBSE 0.335|50.73 0.299|50.06 0.281|49.51 0.267|49.28 RLLS 0.935|45.81 0.812|45.98 0.750|45.89 0.712|45.92 MAPLS 0.227|50.41 0.191|49.90 0.163|49.64 0.164|48.95
FMAPLS 0.173|52.07 0.143|51.52 0.123|50.89 0.109|50.76 online-FMAPLS 0.202|51.90 0.159|51.51 0.133|51.04 0.113|50.86
0 2000 4000 6000 8000 10000 12000 Iteration times
0.15
0.2
0.25
0.3
0.35
0.4
0.45
KL Divergence
Shuffle-0.020 Shuffle-0.025 Shuffle-0.040 Shuffle-0.050
(a)
0 5000 10000 15000 Iteration times
0.1
0.15
0.2
0.25
0.3
0.35
0.4
KL Divergence
Dirichlet-1.0 Dirichlet-1.5 Dirichlet-2.0 Dirichlet-2.5
(b)
Fig. 4. KL divergence of online-FMAPLS algorithm evaluated on long-tail ImageNet dataset with (a) varying shuffled long-tail test imbalance ratio ρtest, (b) varying test Dirichlet hyperparameter α. gradually decreases and stabilizes after about 10000 iterations, while in the Dirichlet prior case, convergence occurs around 11000 iterations. Although the convergence rate is slower compared with CIFAR100 dataset, primarily due to the increased data volume and the much larger number of classes, the on-
line algorithm still exhibits clear convergence behavior. These results confirm that online-FMAPLS effectively handles highdimensional streaming data and accurately estimates complex label-shifted priors in large-scale recognition tasks.
C. Ablation comparison and trade-off analysis
In this subsection, we perform an ablation study comparing three Bayesian-based variants to examine the impact of model assumptions and algorithmic design choices. The baseline MAPLS algorithm employs fixed Dirichlet hyperparameters α, imposing rigid prior constraints. FMAPLS relaxes these constraints and enables dynamic adaptation of α for more flexible prior modeling. Building upon FMAPLS, the onlineFMAPLS algorithm further extends this framework to support streaming data processing through incr-
emental updates. It is worth noting that the ablation analysis focuses solely on the KL divergence results under the most challenging experimental settings, namely the most imbalanced test prior (ρtest = 0.02) and the highest uncertainty case (αtest = 1). Fig. 5 illustrates the KL divergence performance of the above three algorithms on the CIFAR100 dataset. When the training imbalance ratio is relatively large (ρtrain ≥ 0.1), the proposed FMAPLS reduces KL divergence by about 23% and 33% under the-
 shuffled and Dirichlet test settings, respectively, compared with MAPLS. However, the KL performance of online-FMAPLS algorithm is slightly inferior to that of MAPLS in both test environments. This degradation arises due to the online version relies on single-pass updates, which limit the utilization of global statistical information and thereby increase estimation variance compared with batch-based methods. When ρtrain < 0.1, the proposed FMAPLS algorithm achieves reductions of about 33% and 40%-
 in KL divergence under above two environments, while the final convergence performance of the online-FMAPLS algorithm also surpasses that of MAPLS. These results further confirm the effectiveness of dynamic parameter adaptation in enhancing prior estimation accuracy under severely imbalanced conditions. Fig. 6 presents the ablation comparison results on the longtailed ImageNet dataset. The experimental data indicate that, regardless of whether the test scenario involves extreme imbalance or high -
uncertainty, both FMAPLS and its online variant outperform the batch-based MAPLS method. Specifically,

11
↓23.2%
↓23.3% ↓34.1%
↓31.9%
↑18.8%
↑4.9%
↓5.4%
↓11.5%
0
0.02
0.04
0.06
0.08
0.1
0.12
0.14
0.16
0.18
0.2
0.2 0.1 0.05 0.02
KL divergence
ρtrain
FMAPLS online-FMAPLS MAPLS
(a)
↓33.8%
↓32.0%
↓40.0%
↓38.2%
↑16.9%
↑3.1%
↓7.3%
↓9.7%
0
0.02
0.04
0.06
0.08
0.1
0.12
0.14
0.16
0.18
0.2 0.1 0.05 0.02
KL divergence
ρtrain
FMAPLS online-FMAPLS MAPLS
(b)
Fig. 5. Ablation comparison of FMAPLS, online FMAPLS, and MAPLS under different training prior distributions. (a) Shuffled long-tail imbalance ratio ρtest = 0.02, (b) Test Dirichlet hyperparameter αtest = 1.
↓21.4% ↓23.8%
↓2.2%
↓11.0%
0
0.05
0.1
0.15
0.2
0.25
0.02 1
KL divergence
ρtest=
FMAPLS online-FMAPLS MAPLS
αtest=
Fig. 6. Ablation comparison of FMAPLS, online FMAPLS, and MAPLS under long-tail ImageNet training dataset.
when ρtest = 0.02, FMAPLS achieves a 21.4% reduction in KL divergence compared with MAPLS, while the online-FMAPLS maintains comparable performance with a 2.2% degradation. Under the Dirichlet prior with αtest = 1, FMAPLS attains a 23.8% improvement and the online version exhibits an 11.0% decrease in KL divergence relative to MAPLS. These results confirm that the proposed dynamic parameter adaptation mechanism effectively enhances estimation robustness and maintains stable performance under Image-
Net dataset.
VII. CONCLUSION
In this paper, we developed a Bayesian-based framework for label shift estimation that integrates dynamic hyperparameter adaptation and efficient online learning mechanisms. The proposed FMAPLS algorithm extends the conventional MAPLS approach by jointly optimizing Dirichlet hyperparameters α and class priors π, thereby enhancing flexibility in modeling complex test distributions. To further improve scalability, the LSF method is introduced to provide closed-form Dirichlet hyperparameter updates, -
which effectively reducing computational complexity. The online-FMAPLS algorithm further
extends this framework to streaming environments by incorporating stochastic approximation, thereby enabling realtime and efficient adaptation to sequentially arriving data. Furthermore, we analyze and demonstrate a fundamental tradeoff between the online convergence rate and estimation accuracy. Extensive experiments and ablation comparisons on CIFAR100 and ImageNet datasets confirm that the proposed methods achieve superior estimation KL divergence and postshift classification accuracy across va-
rious label shift scenarios, maintaining robustness and stability even under severe imbalance and uncertain test distributions.
APPENDIX A
PROOF OF EQUATION (7)
Substitute the PDF of the Dirichlet distribution Dir(π; α) into equation (6), the complete log probability can be expressed as:
log P (θ|X, Y ) = log 1
Z + log 1
B(α)
K
Y
j=1
παj −1
j (40)
+ log
N
Y
i=1
P (Xs = xi|Ys = yi)P (Yt = yi|θ)
= Const + log 1
B(α) +
K
X
j=1
(αj − 1) log πj
+
N
X
i=1
log P (Yt = yi|θ)
= Const + log 1
B(α) +
K
X
j=1
(αj − 1) log πj
+
N
X
i=1
log
K
Y
j=1
π δyi ,j
j
= Const + log 1
B(α) +
K
X
j=1
(αj − 1) log πj
+
N
X
i=1
K
X
j=1
δyi,j log πj
where δyi,j is the Kronecker delta function. In the E step, given parameter θ(t) at t-th iteration, the expectation of completedata logarithm function can be written as:
EY |X,θ(t) [log P (θ|X, Y )] (41)
= Const + log 1
B(α) +
K
X
j=1
(αj − 1) log πj
+
N
X
i=1
K
X
j=1
EY |X,θ(t)
h
δyi,j log πj
i
= Const + log 1
B(α) +
K
X
j=1
(αj − 1) log πj
+
K
X
j=1
N
X
i=1
P (Yt = yi = j|Xt = xi, θ(t)) log πj

12
APPENDIX B
PROOF OF THE FIM ELEMENTS ESTIMATED BY
FMAPLS ALGORITHM FOR π
Rewrite the π log-likelihood function with normalization constraint:

        
        
K
X
j=1
(α(t)
j − 1) log πj +
K
X
j=1
N
X
n=1
P (yn = j|xn, θ(t)) log πj
| {z }
Lπ
s.t. :
K
X
j=1
πj = 1 and πj > 0
(42)
Due to the prior probability π is distributed in a (K − 1)dimensional standard simplex, Lπ can further be written as:
Lπ = Lπk + LπK 1 ≤ k ≤ K − 1 (43)
πK = 1 −
K −1
X
k=1
πk (44)
Thus, the elements of Lπ Hessian matrix can be expressed as:
∂Lπ ∂πi
= ∂Lπk
∂πi
+ ∂LπK
∂πi
(45)
= mi
πi
+
∂ mK log(1 − PK
k=1 πk)
∂πi
= mi
πi
− mK
πK
∂2Lπ ∂πi∂πj
= − mi
π2
i
δi,j − ∂
∂πj
( mK
πK
) (46)
= − mi
π2
i
δi,j − ∂
∂πK
( mK
πK
) ∂πK
∂πj
= − mi
π2
i
δi,j − mK
π2
K
(K − 1) × (K − 1)
where mi = α(t)
i −1+PN
n=1 P (yn = i|xn, θ(t)). On the basis of Hessian matrix, the elements of FIM can be given as:
Fi,j = −E
h ∂2Lπ ∂πi∂πj
i
(47)
=E
h α(t)
i − 1 + PN
n=1 P (yn = i|xn, θ(t))
π2
i
δi,j
+ α(t)
K − 1 + PN
n=1 P (yn = K|xn, θ(t))
π2
K
i
= α(t)
i − 1 + PN
n=1 Exn [P (yn = i|xn, θ(t))]
π2
i
δi,j
+ α(t)
K − 1 + PN
n=1 Exn [P (yn = K|xn, θ(t))]
π2
K = α(t)
i − 1 + N EX [f X
i]
π2
i
δi,j + α(t)
K − 1 + EX [f X
K]
π2
K
where f X
i denotes the posterior probability that the classifier assigns the input sample X to class i. However, in practical
scenarios, the expectation EX [f X
i ] is typically unavailable; therefore, we use the sample mean to approximate it:
EX [f X
i ]≈ 1
N
N
X
n=1
f xn
i (48)
Substituting (48) into (47) leads to the equation (14).
APPENDIX C
PROOF OF (21) BELONGS TO EXPONENTIAL FAMILY
Substituting the PDF of the Dirichlet distribution Dir(π; α) into equation (21) yields the following expression:
P (θ|X, Y ) (49)
= elog 1
Z
1 B(α)
QK
i=1 παi−1
i P (Xs=xτ |Ys=yτ ) QK
j=1 πδyτ ,j
j
= elog( 1
Z P (Xs=xτ |Ys=yτ ))+log 1
B(α)
QK
i=1 παi−1
i
QK
j=1 πδyτ ,j
j
= Aelog( 1
B(α) )+PK
i=1(αi−1+δyτ ,i) log πi
= Ae
log( 1
B(α) )+


1
δyτ ,i


i
,


(αi − 1) log πi log πi


i
A = elog( 1
Z P (Xs=xτ |Ys=yτ )) (50)
Based on the derivation of (49), it is easy to see that the complete posterior takes the form of equation (21).
APPENDIX D
PROOF OF THE FIM ELEMENTS ESTIMATED BY
ONLINE-FMAPLS ALGORITHM FOR π
According to the online algorithm’s π log-likelihood function (26) and the derive in Appendix B, the elements of Hessian matrix can be expressed as:
∂2Lπ ∂πi∂πj
= − ni
π2
i
δi,j − ∂
∂πj
( nK
πK
) (51)
= − ni
π2
i
δi,j − nK
π2
K
(K − 1) × (K − 1)
where ni = ατ
i −1+(1−γ)δyτ ,i+γP (yτ+1 = i|xτ+1, θτ ). On the basis of Hessian matrix, the elements of Fisher information matrix can be further written as:
Fi,j = −E ∂2Lπ
∂πi∂πj
(52)
= ατ
i − 1 + (1 − γ)δyτ ,i + γEX [f X
i]
π2
i
δi,j
+ ατ
K − 1 + (1 − γ)δyτ ,K + γEX [f X
K]
π2
K
Using the sample mean to replace EX [f X
i ] leads to (34):
EX [f X
i ]≈ 1
τ
τ
X
t=1
f xt
i (53)

13
REFERENCES
[1] A. Storkey, “When training and test sets are different: characterizing learning transfer,” Dataset Shift Mach. Learn., vol. 30, nos. 3–28, p. 6, 2009. [2] S. Kulinski, and D. I. Inouye, “Towards explaining distribution shifts,” in Proc. Int. Conf. Mach. Learn. (ICML), 2023, pp. 17931–17952.
[3] J. G. Moreno-Torres, T. Raeder, R. Alaiz-Rodrı ́guez, N. V. Chawla, and F. Herrera, “A unifying view on dataset shift in classification,” Pattern Recognit., vol. 45, no. 1, pp. 521–530, 2012. [4] W. Ma, C. Chen, S. Zheng, J. Qin, H. Zhang, and Q. Dou, “Test-time adaptation with calibration of medical image classification nets for label distribution shift,” in Proc. Int. Conf. Med. Image Comput. Comput. Assist. Interv (MICCAI), 2022, pp. 313–323. [5] F. J ́an ̃ez-Martino, R. Alaiz-Rodrı ́guez, -
V. Gonz ́alez-Castro, E. Fidalgo, E. Alegre, “A review of spam email detection: analysis of spammer strategies and the dataset shift problem,” Artif. Intell. Rev., vol. 56, pp. 1145–1173, 2023. [6] A. V. Costache, S. F. Gheorghe, E. G. Poesina, P. Irofti, and R. T. Ionescu, “A survey of text classification under class distribution shift,” 2025, arXiv:2502.12965.
[7] A. Mahadevan, and M. Mathioudakis, “Cost-effective retraining of machine learning models,” 2023, arXiv:2310.04216.
[8] K. P. Murphy, Machine Learning: A Probabilistic Perspective. Cambridge, MA: MIT Press, 2012. [9] C. M. Bishop, and N. M. Nasrabadi, Pattern Recognition and Machine Learning. New York, NY, USA: Springer, 2006. [10] X. Xie, H. Wang, L. Yu, and M. Weng, “Online algorithms for optimizing age of information in the IoT systems with multi-slot status delivery,” IEEE Wireless Commun. Lett., vol. 10, no. 5, pp. 971–975, 2021. [11] E. Olfat, and M. Bengtsson, “Joint channel and clipping level estimation-
 for OFDM in IoT-based networks,” IEEE Trans. Signal Process., vol. 65, no. 18, pp. 4902–4911, 2017. [12] L. Bottou, “Online learning and stochastic approximations,” Online Learn. Neural Netw., vol. 17, no. 9, p. 142, 1998. [13] J. Gama, I. Zˇ liobait ̇e, A. Bifet, M. Pechenizkiy, and A. Bouchachia, “A survey on concept drift adaptation,” ACM Comput. Surv., vol. 46, no. 4, pp. 1–37, 2014. [14] M. Saerens, P. Latinne, and C. Decaestecker, “Adjusting the outputs of a classifier to new a priori proba-
bilities: A simple procedure,” Neural Comput., vol. 14, no. 1, pp. 21–41, 2002. [15] Y. S. Chan, and H. T. Ng, “Word sense disambiguation with distribution estimation,” in Proc. 19th Int. Joint Conf. Artif. Intell. (IJCAI), 2005, pp. 1010–1015. [16] K. Zhang, B. Scho ̈lkopf, K. Muandet, and Z. Wang, “Domain adaptation under target and conditional shift,” in 30th Int. Conf. Mach. Learn. (ICML), 2013, pp. 819–827. [17] Z. Lipton, Y. X. Wang, and A. Smola, “Detecting and correcting for label shift wi-
th black box predictors,” in Proc. 35th Int. Conf. Mach. Learn. (ICML), 2018, pp. 3122–3130. [18] K. Azizzadenesheli, A. Liu, F. Yang, and A. Anandkumar, “Regularized learning for domain adaptation under label shifts,” in Proc. 7th Int. Conf. Learn. Representations (ICLR), 2019, pp. 1–13.
[19] E. Zhao, A. Liu, A. Anandkumar, Y. Yue, “Active learning under label shift,” in Proc. Int. Conf. on Artificial Intelligence and Statistics, 2021, pp. 3412–3420. [20] A. Alexandari, A. Kundaje, and A. Shrikumar, “Maximum likelihood with bias-corrected calibration is hard-to-beat at label shift adaptation,” in Proc. 37th Int. Conf. Mach. Learn. (ICML), 2020, pp. 222–232.
[21] S. Garg, Y. Wu, S. Balakrishnan, and Z. Lipton, “A unified view of label shift estimation,” in Proc. 34th Adv. Neural Inf. Process. Syst. (NIPS), 2020, pp. 3290–3300. [22] C. Ye, R. Tsuchida, L. Petersson, and N. Barnes, “Label shift estimation for class-imbalance problem: A bayesian approach,” in Proc. IEEE/CVF Winter Conf. Appl. Comput. Vis., 2024, pp. 1073–1082.
[23] H. Zhang, Q. Lin, Y. Li, L. Cheng, and Y.-C. Wu, “Activity detection for massive connectivity in cell-free networks with unknown large-scale fading, channel statistics, noise variance, and activity probability: A Bayesian approach,” IEEE Trans. Signal Process., vol. 72, pp. 942—957, 2024. [24] Y. Meng, X. Yao, K. Chen, Y. Wu, L. Zhang, Z. Bing, and A. Knoll, “Pretrained Bayesian non-parametric knowledge prior in robotic longhorizon reinforcement learning,” 2025, arXiv:2503.21975. [25] J. Hu, -
and J. A. Barria, “FMAPLS: Bayesian label shift estimation based on dynamic Dirichlet parameter adaptation,” IEEE Signal Process. Lett., vol. 32, pp. 4074–4078, 2025.
[26] Y. Shen, B. Baingana, and G. B. Giannakis, “Tensor decompositions for identifying directed graph topologies and tracking dynamic networks,” IEEE Trans. Signal Process., vol. 65, no. 14, pp. 3675–3687, 2017. [27] A. Jenkins, T. Variddhisai, A. El-Medany, F. S. Ng, and D. Mandic, “Online graph topology learning via time-vertex adaptive filters: From theory to cardiac fibrillation,” IEEE Trans. Signal Inf. Process. Netw., vol. 11, pp. 965–979, 2025. [28] P. Chen, X. Chen, B. Jin, and X. Zhu, “On-
line EM algorithm for background subtraction,” Procedia Eng., vol. 29, pp. 164–169, 2012. [29] R. Wu, C. Guo, Y. Su, and K. Q. Weinberger, “Online adaptation to label distribution shift,” in Proc. 35th Adv. Neural Inf. Process. Syst. (NIPS), 2021, pp. 11340–11351. [30] Y. Bai, Y. J. Zhang, P. Zhao, M. Sugiyama, and Z. H. Zhou, “Adapting to online label shift with provable guarantees,” in Proc. 36th Adv. Neural Inf. Process. Syst. (NIPS), 2022, pp. 29960–29974.
[31] D. Baby, S. Garg, T. C. Yen, S. Balakrishnan, Z. Lipton, Y. X. Wang, “Online label shift: Optimal dynamic regret meets practical algorithms,” in Proc. 37th Adv. Neural Inf. Process. Syst. (NIPS), 2023, pp. 6570365742. [32] Q. Wang, G. Guo, G. Qian, and Jiang X, “Distributed online expectationmaximization algorithm for Poisson mixture model,” Appl. Math. Model., vol. 124, pp. 734–748, 2023. [33] Y. He, and H. T. Wai, “Online inference for mixture model of streaming graph signals with sparse ex-
citation,” IEEE Trans. Signal Process., vol. 19, no. 70, pp. 6419–6433, 2023. [34] K. Cao, C. Wei, A. Gaidon, N. Arechiga, and T. Ma, “Learning imbalanced datasets with label-distribution-aware margin loss,” in Proc. 33rd Adv. Neural Inf. Process. Syst. (NIPS), 2019, pp. 1567–1578.
[35] T. Pham-Gia, “The multivariate Selberg beta distribution and applications,” Statistics, vol. 43, no. 1, pp. 65–79, 2009. [36] F. Tahsin, H. Ennajari, and N. Bouguila, “Author dirichlet multinomial allocation model with generalized distribution (ADMAGD),” in Proc. Int. Symp. Netw. Comput. Commun. (ISNCC), 2024, pp. 1–7.
[37] I. Olkin and R. Liu, “A bivariate beta distribution,” Statist. Probab. Lett., vol. 62, no. 4, pp. 407–412, 2003. [38] H. Steck, and T. Jaakkola, “On the Dirichlet prior and Bayesian regularization,” in Proc. 15th Adv. Neural Inf. Process. Syst. (NIPS), 2002. [39] C. Xu, J. Si, Z. Guan, W. Zhao, Y. Wu, and X. Gao, “Reliable conflictive multi-view learning,” in Proc. AAAI Conf. Artif. Intell., vol. 38, no. 14, 2024, pp. 16129–16137.
[40] S. Kay, Fundamentals of Statistical Signal Processing: Estimation Theory, Englewood Cliffs, NJ, USA: Prentice-Hall, 1993. [41] Z. Zhao, L. Zhang, R. Jiang, X. P. Zhang, X. Tang, and Y. Dong, “Joint beamforming scheme for ISAC systems via robust Cram ́er–Rao bound optimization,” IEEE Wireless Commun. Lett., vol. 13, no. 3, pp. 889893, 2024. [42] G. McLachlan, and T. Krishnan, The EM Algorithm and Extensions, vol. 382. Hoboken, NJ, USA: Wiley, 2007. [43] J. M. Bernardo, “Psi (digamma) function,-
” J. Royal Statist. Soc. Ser. C (Appl. Statist.), vol. 25, no. 3, pp. 315–317, 1976. [44] O. Capp ́e, and E. Moulines, “On-line expectation–maximization algorithm for latent data models,” J. Roy. Stat. Soc.: Ser. B. (Stat. Methodol.), vol. 71, no. 3, pp. 593–613, 2009. [45] F. Nielsen, and R. Nock, “Entropies and cross-entropies of exponential families,” in Proc. IEEE Int. Conf. Image Process. (ICIP), 2010, pp. 3621–3624. [46] J. Huang, “Maximum likelihood estimation of Dirichlet distribution para-
meters,” Robot. Inst., Carnegie Mellon Univ., Pittsburgh, PA, USA, Tech. Rep., 2005. [47] A. Krizhevsky, and G. Hinton, “Learning multiple layers of features from tiny images,” Dept. Comput. Sci., Univ. Toronto, Toronto, ON, Canada, Tech. Rep., 2009. [48] O. Russakovsky, J. Deng, H. Su, J. Krause, S. Satheesh, S. Ma, Z. Huang, A. Karpathy, A. Khosla, M. Bernstein, and A. C. Berg, “Imagenet large scale visual recognition challenge,” Int. J. Comput. Vis., vol. 115, no. 3, pp. 211–252, 2015. [49] K. -
He, X. Zhang, S. Ren, and J. Sun, “Deep residual learning for image recognition,” in Proc. IEEE/CVF Conf. Comput. Vis. Pattern Recognit., 2016, pp. 770–778. [50] Z. Liu, Z. Miao, X. Zhan, J. Wang, B. Gong, S. X. Yu, “Large-scale longtailed recognition in an open world,” in Proc. IEEE/CVF Conf. Comput. Vis. Pattern Recognit., 2019, pp. 2537–2546.
[51] I. Csiszar, “I-divergence geometry of probability distributions and minimization problems,” Ann. Probab., vol. 3, no. 1, pp. 146–158, 1975.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:49.359Z
- **Text Length:** 69514 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 13 of 13
