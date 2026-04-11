# PDF Document: Roth and Avella-Medina - 2025 - Differential privacy with dependent data.pdf

**File Path:** Roth and Avella-Medina - 2025 - Differential privacy with dependent data.pdf

**Processed Date:** 2026-02-10T18:13:33.413Z

**File Size:** 1534.80 KB

**Total Pages:** 74

**Extracted Pages:** 74

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3439

**Title:** Differential privacy with dependent data

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Differential Privacy with Dependent Data
Valentin Roth∗ Marco Avella-Medina†
November 2025
Abstract
Dependent data underlies many statistical studies in the social and health sciences, which often involve sensitive or private information. Differential privacy (DP) and in particular userlevel DP provide a natural formalization of privacy requirements for processing dependent data where each individual provides multiple observations to the dataset. However, dependence introduced, e.g., through repeated measurements challenges the existing statistical theory under DP-constraints. In i.i.d. settings-
, noisy Winsorized mean estimators have been shown to be minimax optimal for standard (item-level ) and user-level DP estimation of a mean μ ∈ Rd. Yet, their behavior on potentially dependent observations has not previously been studied. We fill this gap and show that Winsorized mean estimators can also be used under dependence for bounded and unbounded data, and can lead to asymptotic and finite sample guarantees that resemble their i.i.d. counterparts under a weak notion of dependence. For this,-
 we formalize dependence via log-Sobolev inequalities on the joint distribution of observations. This enables us to adapt the stable histogram by Karwa and Vadhan (2018) to a non-i.i.d. setting, which we then use to estimate the private projection intervals of the Winsorized estimator. The resulting guarantees for our item-level mean estimator extend to user-level mean estimation and transfer to the local model via a randomized response histogram. Using the mean estimators as building blocks, we p-
rovide extensions to random effects models, longitudinal linear regression and nonparametric regression. Therefore, our work constitutes a first step towards a systematic study of DP for dependent data.
1 Introduction
Differential privacy (DP) tools have been deployed at scale in numerous applications in industry and government agencies (Erlingsson et al., 2014; Ding et al., 2017; Tang et al., 2017; Garfinkel et al., 2019). The standard DP framework seeks to release statistics while protecting single data points as it assumes every individual contributes a single data point to a dataset of size n. We will follow the literature and call this standard approach item-level DP. In this framework, privacy is achieved-
 by releasing randomized outputs that are calibrated in a way which guarantees that the effect that any single data point can have in the computation of this output is hidden by the randomization (Dwork et al., 2006; Dwork and Roth, 2014).
A recent line of work called user-level differential privacy (uDP) has studied the setting where each person/user contributes multiple observations to a dataset (Liu et al., 2020; Levy et al., 2021; Narayanan et al., 2022; Acharya et al., 2023; Bassily and Sun, 2023; Ghazi et al., 2023; Asi and Liu, 2024). For simplicity, we assume that every user contributes T data points. Naturally, the goal now is to protect all T points that a user contributes to the dataset. The challenge is that standard DP
∗Institute of Science and Technology Austria †Department of Statistics, Columbia University
1
arXiv:2511.18583v2 [stat.ML] 25 Nov 2025

techniques protect only individual data points and either yield privacy guarantees that degrade as the users contribute more points or get the right privacy guarantee by adding too much noise if the algorithms are built using the group property of DP (Dwork and Roth, 2014, Theorem 2.2).
In this work, we introduce DP tools for dependent data and are particularly interested in longitudinal data, also commonly called panel data, consisting of multiple dependent observations collected from the same individuals over some time frame. Longitudinal data are immensely important in the social sciences and in medical applications (Diggle, 2002; Baltagi, 2008; Fitzmaurice et al., 2012; Hsiao, 2022). While user-level DP seems to be the natural definition of privacy for longitudinal data, this-
 connection has not been exploited in the literature. In fact, there is relatively little work on modeling dependent data under differential privacy constraints.
We were mainly inspired by Karwa and Vadhan (2018), as their algorithm serves as building block for all our procedures, as well as recent work in the emerging field of uDP, in particular Levy et al. (2021) and Kent et al. (2024).
Our main contributions can be summarized in the following key points:
(a) DP for dependent and unbounded data: our work seems to be the first to study multiple DP algorithms on dependent observations. In particular, we introduce log-Sobolev dependence, a notion of dependence using log-Sobolev inequalities on the joint distribution of observations that replaces typical i.i.d. assumptions. The building block of our methodology is a Winsorized mean estimation algorithm inspired by the one of Karwa and Vadhan (2018), developed for Gaussian i.i.d. data. While additionall-
y handling dependence, our algorithm inherits two appealing features from their work: it enable estimation with unbounded observations and does not require any knowledge about the unknown mean.
(b) DP for longitudinal data: we introduce various algorithms for uDP estimation for dependent and in particular longitudinal data, allowing for dependence across both users and time. This is a significant departure from the overwhelming majority of the theoretical analysis of DP algorithms which are designed and analyzed leveraging i.i.d. assumptions, even in uDP settings (Levy et al., 2021; Kent et al., 2024; Agarwal et al., 2025). Our algorithms are shown to lead to optimal finite-sample error -
rates under log-Sobolev dependence. Thereby, the condition proves to be general enough to cover a wide range of interesting statistical models that had not been studied previously in the literature, including nonparametric regression, simple random effects models and linear regression for longitudinal data with dependent errors.
(c) Histogram learning: we extend the analysis of the histogram estimator by Vadhan (2017) to log-Sobolev dependent data using a Dvoretzky-Kiefer-Wolfowitz-type inequality by Bobkov and G ̈otze (2010). This is a critical intermediate result in the construction of our mean estimation, because the private histogram is called as a first step when crudely estimating the midpoint of a private projection interval of length O(log n) that is used by our Winsorized mean estimator. This slight adjustment si-
gnificantly extends the scope of the techniques introduced in Vadhan (2017) beyond i.i.d. Gaussians and enables dependence even in the item-level setting.
(d) Item-level and user-level DP: a conceptually interesting contribution is to highlight how all the existing uDP algorithms are built on a known item-level DP algorithm. This connection allows us to give more perspective on the existing in-expectation minimax DP and uDP lower bounds. To do so, we provide an in-expectation analysis for projection estimators `a la Karwa-Vadhan that seems to be novel even for i.i.d. Gaussian data. The bound suggests that an impossibility result in uDP, saying that -
learning is impossible if only the number of observations per users T → ∞ (Levy et al., 2021, Theorem 8), is connected to the impossibility of learning in the item-level setting when the variance tends to 0 too quickly. We thereby identify a disconnect
2

between existing item- and user-level lower bounds (Cai et al., 2021; Levy et al., 2021).
(e) Local DP: while the focus of our presentation is on the central model of DP that assumes the existence of a trusted data curator, we extend all our results to the local model of DP where the central server is not trusted and the privacy mechanism is enforced in the data collection phase (Kasiviswanathan et al., 2011; Duchi et al., 2018). In particular, we show how replacing the histogram in our central DP algorithms with a local analog leads to near-optimal estimators under the local model whi-
le keeping all the desirable properties that we highlighted in the previous points. This means, we can again allow for unbounded observations, dependence between users and among their observations in a user-level local DP (uLDP) framework.
1.1 Related Work
Private estimation of location parameters like mean and median is a core statistical question frequently investigated in the DP literature. The first DP mean estimator can be traced back to an application of noisy sums in Dwork et al. (2006) and asymptotic guarantees for private trimmed mean and median estimators were obtained in Dwork and Lei (2009). Smith (2011) seem to have been the first work to propose and study the asymptotic properties of a noisy two-step Winsorized mean estimator similar t-
o the one we consider, i.e., one that first crudely estimates the mean, projects the data onto an interval around this estimate and then adds noise for privacy calibrated to the resulting finite sensitivity. Lower-bounds for mean estimation were derived in Bun et al. (2013); Steinke and Ullman (2017); Foygel Barber and Duchi (2014); Steinke and Ullman (2017); Bun and Steinke (2019); Cai et al. (2021). In particular, Cai et al. (2021) provided in-expectation minimax upper and lower bounds matching -
the rate due to Steinke and Ullman (2017), for a Winsorized mean estimator lacking a data-driven projection interval. In contrast, Karwa and Vadhan (2018) started a line of work on in-probability guarantees for Winsorized mean estimators that neither impose boundedness assumptions on observations nor on the mean. Their algorithm is based on a (ε, δ)-DP “stable” histogram estimator that is used to find a private confidence interval for the mean of univariate Gaussians. Subsequently, Kamath et al. (-
2019) leveraged this approach to multivariate Gaussians with unknown covariance matrix and Kamath et al. (2020) extended this approach to heavy-tailed distributions.
We note that there are also numerous other works studying the problem of private mean and median estimation, in particular aiming to avoid assuming a bounded sample space, and in many cases making connections to robustness in the statistics community (Avella-Medina and Brunel, 2020; Avella-Medina, 2020, 2021; Avella-Medina et al., 2023; Li et al., 2023; Yu et al., 2024; Ramsay et al., 2022) as well as in computer science venues (Tzamos et al., 2020; Liu et al., 2021, 2022; Hopkins et al., 2023; Al-
abi et al., 2023; Chhor and Sentenac, 2023). These constructions are not as closely related to our work.
User-level DP was first introduced by McMahan et al. (2017) to ensure privacy in the context of federated training of language models. Subsequently, the definition spread to other work in this context (Wang et al. (2019); Augenstein et al. (2020)) and user-level private data-aggregation in SQL-databases (Wilson et al. (2020)). Statistical results investigating the interplay between the number of users n, the number of observations per user T and the magnitude of the noise necessary for user-level -
privacy in the context of empirical risk minimization were obtained in Amin et al. (2019); Epasto et al. (2020); Levy et al. (2021); Narayanan et al. (2022); Kent et al. (2024). Recently, Agarwal et al. (2025) and Zhao et al. (2024) derived the first user-level mean estimators for independent users with independent unbounded observations in the central model.
The problem of estimation under local differential privacy has been explored in a wide range of
3

statistical problems including mean estimation, density estimation, nonparametric regression and hypothesis testing, just to cite a few Wasserman and Zhou (2010); Duchi et al. (2018); Gaboardi and Rogers (2018); Butucea et al. (2020); Berrett and Butucea (2020); Berrett et al. (2021); Sart (2023); Pensia et al. (2024). In particular user-level local differential privacy has recently been studied in Girgis et al. (2022); Acharya et al. (2023); Kent et al. (2024).
Finally, we note that there is some incipient literature on differential privacy with special temporal structure. This includes data problems such as change point detection (Zhang et al., 2021; Berrett and Yu, 2021; Li et al., 2022) and multi-armed bandits (Mishra and Thakurta, 2015; Sajed and Sheffet, 2019; Hu and Hegde, 2022; Ou et al., 2024) which are typically studied under item-level DP and independent observation assumptions. There is also some initial work on time series with DP that again -
has tackled the problem from an item-level DP perspective. For example, Zhang et al. (2022) considered a parametric approach with sequential AR(1) data, Amorino et al. (2025) studied diffusion processes and Kroll (2024); Butucea et al. (2025) considered the problem of nonparametric spectral density estimation.
2 Preliminaries
We first present notation that will be used throughout this work and give basic background on differential privacy and log-Sobolev inequalities. At the end of this section we introduce the main dependence assumption that we use to model dependent and especially longitudinal data.
2.1 Notation
We define [μ ± b] := [μ − b, μ + b], [μ ± b) := [μ − b, μ + b) and (μ ± b] := (μ − b, μ + b]. Moreover, [n] = {1, 2, . . . , n}, R≥ := [0, ∞) and 1{A} is the indicator function for a set A. For the minimum and maximum of a, b ∈ R we write a ∧ b and a ∨ b. When a sequence of random variables X1, X1, X2, . . . converges in probability to a random variable X∗, we write Xn
p → X∗. When ξ1, . . . , ξd ∼ Lap(l, s) i.i.d., we say Ξ := (ξ1, . . . , ξd) ∼ Lap(l1d, sId). Here, let 1d be the all ones vector in Rd. For
matrices A, B ∈ Rd×d we denote their positive definite and positive semi-definite order as A ≺ B and A ⪯ B and refer to them as Loewner orderings. Further, ∥A∥op and ∥A∥F are the operator and Frobenius norm of A. For a matrix M = [M1⊤, . . . , Mn⊤]⊤ ∈ Rn×d we denote its column
vectors by M·j for j ∈ [d]. We write the L2-projection of a vector x ∈ Rd onto a convex set C as ΠC (x) := arg miny∈R ∥x − y∥2. For two sequences (an)n∈N and (bn)n∈N we use the following order
symbols: bn = O(an) or an ≲ bn if ∃C > 0 and n0 ∈ N such that ∀n ≥ n0, | bn
an | ≤ C; if this holds
up to log-factors we write O ̃ or an ⪅ bn; bn = o(an) if limn→∞ | bn
an | = 0. We write an ≍ bn if
an ≲ bn and bn ≲ an. For x, y ∈ X n, their Hamming distance is dH (x, y) := Pn
i=1 1{xi ̸= yi}, i.e., the number of elements which differ. Throughout the text we let κ, c > 0 denote absolute constants.
2.2 Differential Privacy
There are several competing notions of DP (See Mironov (2017); Dong et al. (2022); Dwork and Rothblum (2016); Bun and Steinke (2016); Dwork et al. (2006)), but we will work with the most common notion (ε, δ)-DP introduced in Dwork et al. (2006). In its definition below, we denote the Borel σ-algebra on Rp by B(Rp).
Definition 2.1. (ε, δ)-Differential Privacy (Central Model). Let ε, δ > 0 and let A : X n → Rd be a randomized algorithm, mapping x ∈ X n to a B(Rd)-measurable random variable A(x). Then, A is
4

(ε, δ)-DP if for all x, y ∈ X n s.t. dH (x, y) ≤ 1 we have
P (A(x) ∈ S) ≤ eε · P (A(y) ∈ S) + δ, for all S ∈ B(Rp).
Furthermore, we say that
1. A is item-level-DP if xi, yi ∈ R1×d for all i ∈ [n],
2. A is user-level-DP if xi, yi ∈ RT ×d for all i ∈ [n].
Remark 2.2. The parameters (ε, δ) control the noise in the randomized algorithm and are commonly referred to as privacy budget parameters. If an estimator is (ε, δ)-user-level DP, we write (ε, δ)-uDP.
The so-called Laplace mechanism described in Algorithm 1 is one of the most common ways to randomize an estimator to make it (ε, 0)-DP.
Theorem 2.3. (Theorem 3.6, Dwork and Roth (2014)). Algorithm 1 is (ε, 0)-DP.
Algorithm 1 LaplaceMechanism(f, x, ε):
Require: f : X n → Rd, x ∈ X n ⊂ Rn, ε > 0 1: D ← {(x, y) : x, y ∈ X n, dH (x, y) ≤ 1} 2: ∆ ← max(x,y)∈D ∥f (x) − f (y)∥1 3: return f (x) + Ξ where Ξ ∼ Lap(0, ∆
ε Id)
The Laplace mechanism above and further mechanisms presented in Dwork and Roth (2014) are the foundation of DP. They can be combined to form more complex DP algorithms by composing the output of simple DP algorithms. The effective privacy budget of an algorithm that outputs a composition of various DP algorithms can be quantified by the composition theorems below.
Theorem 2.4. (Corollary 3.21, Corollary B.2, Dwork and Roth (2014)). Let A be a privacy mechanism that composes d mechanisms that are each (ε′, δ/d)-DP.
(Basic Composition) If ε, δ > 0 and ε′ = ε/d, then A is (ε, δ)-DP. (Advanced Composition) If ε, δ, ρ ∈ (0, 1) and ε′ = ε/p8d log(1/ρ), then A is (ε, δ + ρ)-DP.
2.3 Log-Sobolev Inequalities
Our work uses log-Sobolev inequalities to control dependence along the columns of the data matrix Xn ∈ Rn×d. Log-Sobolev inequalities are functional inequalities extensively studied in the fields of optimal transport, Markov diffusions and concentration of measure (cf. Villani (2009); Bakry et al. (2014); Ledoux (2001); Boucheron et al. (2013)). Log-Sobolev inequalities impose sub-Gaussian taildecay and thus imply concentration as stated in Theorem 2.6. Moreover, a log-Sobolev inequality controls -
the variance of any test function f : Rd → R, because it implies a Poincar ́e inequality (Proposition 5.1.3, Bakry et al. (2014)). To be more precise in the treatment of log-Sobolev inequalities to follow, we define them below.
Definition 2.5. (Log-Sobolev Inequality). Let ν be a probability measure on Rd. For an integrable function f : Rd → R≥ s.t. R
Rd f | log(f )|dν < ∞ define the entropy of f as the following functional:
Entν(f ) :=
Z
Rd
f log(f )dν −
Z
Rd
f dν log
Z
Rd
f dν .
Then, the probability measure ν fulfills a log-Sobolev inequality with constant ρ > 0 and we write ν ∈ LSI(ρ) if for all f : Rd → R s.t. Entν(f 2) < ∞ and ∇f ∈ L2(ν) we have
Entν (f 2) ≤ 2ρ · E[∥∇f (X)∥22].
5

A generic approach to establish a log-Sobolev inequality is through its relation to the curvature of the density of a probability measure with respect to the Lebesgue measure. Specifically, strong log-concavity immediately implies a log-Sobolev inequality through the Bakry-Emery Criterion that can be found in Appendix A; see Theorem A.1.
The following Lipschitz concentration inequality will be the main probabilistic workhorse for the derivation of our algorithms under dependence.
Theorem 2.6. (Log-Sobolev Lipschitz Concentration; Theorem 5.3, Ledoux (2001)). Let the probability measure ν on Rd have log-Sobolev constant ρ. Further, let f : Rn → R be an L-Lipschitz function. Then, when X ∼ ν and t ≥ 0 we have:
P (|f (X) − E[f (X)]| ≥ t) ≤ 2 exp − t2
2ρL2 .
2.4 Log-Sobolev Dependence
To the best of our knowledge, all the existing theoretical analysis of item-level differentially private estimators has relied on simplifying i.i.d. assumptions similar or stronger to the one we state next.
Assumption 2.7. The matrix Xn = (X1⊤, . . . , Xn⊤)⊤ ∈ Rn×d has i.i.d rows.
Observe that Assumption 2.7 does not impose a known bounded domain for the data as is frequently the case in the differential privacy literature. We will see that our estimators will allow for this relaxed i.i.d. assumption and show that slight modifications of existing methods can be shown to work well for unbounded data domains. This is an interesting side product of our analysis. However, our main contribution will be to explicitly allow for dependent data.
We introduce a log-Sobolev dependence condition on the data matrix Xn that imposes log-Sobolev inequality constraints to model the dependence of the entries of Xn. To capture the dependence between n observations across d dimensions we could require that Xn ∼ D for some joint probability measure D that fulfills a log-Sobolev inequality. However, this would be an unnecessarily rigid condition for our purposes as we only need to control the variance and concentration of the column vectors X·n1, . . -
. , X·nd for the design of our algorithms for histogram learning and mean estimation. This motivates our formulation of Assumption 2.8.
Assumption 2.8. (Log-Sobolev dependence). A matrix Xn ∈ Rn×d fulfills this assumption with constants (ρ, M ) if for every column X·nj:
(a) X·nj ∼ Dj on Rn where Dj fulfills LSI(ρ),
(b) The average marginal cdf F ̄j(x) := 1
n
Pn
i=1 P(Xij ≤ x) is M -Lipschitz,
Remark 2.9. Lipschitzness of F ̄j is implied by Xij having marginal densities bounded by M . When we use constants (ρ, ∞), we specify M = ∞ and mean that Condition (b) does not have to hold.
Assumption 2.8 allows us to use a Dvoretzky-Kiefer-Wolfowitz-type inequality in the analysis of the histogram estimator of Section 3. This is a key subroutine for our main mean estimators in Section 4. Interested readers may find this inequality due to Bobkov and G ̈otze (2010) in Theorem C.2 in the appendix. Assumption 2.8(b) is a technicality required in the proof of Bobkov and G ̈otze (2010)’s result. Besides its role in Theorem C.2, we use Assumption 2.8(a) as a model of dependence within the -
columns X·nj ∈ Rn. Corollary 2.10 shows that imposing it for all columns X·nj is enough to control each column’s covariance and the variance of their mean. The proof can be found in Appendix B.
Corollary 2.10. For Xn ∈ Rn×d fulfilling Assumption 2.8 with constants (ρ, ∞),
Cov(X·nj) ⪯ ρIn, and E[∥X ̄n − E[X ̄n]∥22] ≤ dρ
n , where X ̄n := 1
n X⊤1n.
6

When ρ ≍ 1, the variance of X ̄n qualitatively behaves as if the X1, . . . , Xn were independent and
each had variance bounded by ρ. Since X ̄n is unbiased, its MSE vanishes as n → ∞ as long as ρ = o(n). The next lemma shows that Assumption 2.8(a) implies sub-Gaussian concentration of the mean X ̄n ∈ Rd over the n observations. The result is well know but we give a proof for completeness in Appendix B.
Lemma 2.11. Let Xn ∈ Rn×d fulfill Assumption 2.8 with constants (ρ, ∞) and E[Xi] = μ. Then,
P X ̄n − μ 2 ≤
r
2dρ log(2d/α) n
!
≥ P X ̄n − μ ∞ ≤
r
2ρ log(2d/α) n
!
≥ 1 − α.
We will repeatedly exploit the L∞-norm concentration of Lemma 2.11 to derive our multivariate mean estimators. This lemma shows that, for the empirical mean, Assumption 2.8 trades off dependence and concentration via the log-Sobolev constant ρ. If ρ ≍ 1, the concentration in Lemma 2.11 resembles that of i.i.d. sub-Gaussian random variables. In turn, if ρ ≍ n there is no effect of averaging and the mean X ̄n behaves like each single Xi.
3 Histogram Estimator
We now turn to histogram learning which is one of the building blocks of our mean estimator. The main feature of our histogram estimator is that it allows for dependent observations with an unbounded domain. The estimator in Algorithm 2 is a stable histogram that estimates the probability mass in possibly infinitely many non-overlapping bins (Bk)k∈Z. It was introduced by Korolova et al. (2009) and first fully described by Bun et al. (2016). To fix ideas, in later sections we will work with bins of-
 the form Bk = (2hk ± h] for k ∈ Z and some given bin width parameter h. In the current section we allow for general non-overlapping bins1.
Algorithm 2 StableHistogram(Xn, (Bk)k∈Z, ε, δ):
Require: Xn ∈ Rn, ε, δ > 0 1: for all k ∈ Z do 2: pˆk ← 1
n
Pn
i=1 1{Xi ∈ Bk}
3: ξk ← ξ where ξ ∼ Lap(0, 2
εn )
4: p ̃k ←

 
 
0 if pˆk = 0
0 if pˆk + ξk < 2
εn log( 2
δ)+ 1
n
pˆk + ξk, otherwise
5: return p ̃ := (. . . , p ̃−1, p ̃0, p ̃1, p ̃2, . . . )
3.1 Privacy and Utility Guarantees
We note that while the privacy of Algorithm 2 is known in the literature, we provide a proof of this result in the continuous setting for completeness; see Lemma C.1. Indeed, this case is not formally covered in Theorem 7.3.5 Vadhan (2017).
Karwa and Vadhan (2018) seem to have been the first authors to use stable histograms for DP mean estimation. More specifically they use this idea to privately estimate the mean and variance of i.i.d. Gaussian random variables. Their results rely on the following histogram utility guarantee.
1Note that Aliakbarpour et al. (2024, Lemma 2.4) considered an alternative to stable histograms which relies on truncated Laplace noise. We do not explore this approach in this work.
7

Lemma 3.1. (Adjusted from Lemma 2.3, Karwa and Vadhan (2018)). Let η, ε, δ > 0. Further, let Xn ∈ Rn have i.i.d. entries, a (Bk)k∈Z be a collection of disjoint bins covering R, and pk := P(X1 ∈ Bk). Then, the output p ̃ of Algorithm 2 satisfies
P max
k∈Z |p ̃k − pk| ≤ η ≥ 1 − 1 + eε
δ n exp − εnη
4 − exp − nη2
2.
Our analysis of the stability-based histogram estimator generalizes the one by Karwa and Vadhan (2018) to dependent observations. Concretely, we extend their Lemma 2.3 for observations Xn ∈ Rn whose joint distribution fulfills a log-Sobolev inequality following essentially their proof strategy. This leads to Lemma 3.2 below that is proven in Appendix C.
Lemma 3.2. Let η, ε, δ > 0 and the random matrix Xn ∈ Rn fulfill Assumption 2.8 with constants (ρ, M ). Let (Bk)k∈Z be a collection of disjoint bins covering R and pk := 1
n
Pn
i=1 P(Xi ∈ Bk). Then, the output p ̃ of Algorithm 2 satisfies
P max
k∈Z |p ̃k − pk| ≤ η ≥ 1 − 1 + eε
δ n exp − εnη
4 − 16
η exp − 1
864
nη3
ρM 2 .
The critical difference between the proof of Lemma 3.1 and 3.2 is that we replace the DvoretskyKiefer-Wolfowitz (DKW) inequality used by Karwa and Vadhan (2018) with the DKW-type inequality obtained by Bobkov and G ̈otze (2010) which allows for dependent observations. We restate the DKW-type inequality of Bobkov and Go ̈tze (2010) in Theorem C.2. It ensures ensures that pˆk approximates well pk uniformly over all bins. When computing the private estimates p ̃k from pˆk, the stability mechanism acc-
umulates at most n errors of the form |p ̃k − pˆk| that have fast exponential tail-decay. We note that the deviation in Lemma 3.2 suggests a slower estimation error rate of O(n−1/3) which can be sub-optimal in some dependent settings. However, this slower error will suffice for our purposes in the mean estimation algorithm described in the next section.
3.2 Finding Private Data-Driven Projection Intervals
Our main application of the histogram learning algorithm is to find data-driven projection intervals that will be used by our main mean estimator. The idea is to find a slowly diverging interval that contains all the observations with high-probability. This follows the blueprint of Karwa and Vadhan (2018). The projection interval will be the bin containing most of the mass and its two neighboring bins. This simple algorithm fits within a broader family of private midpoint algorithms used in the ce-
ntral and local item- and user-level DP mean estimation literature (Smith, 2011; Kamath et al., 2020; Levy et al., 2021; Kent et al., 2024; Agarwal et al., 2025).
Algorithm 3 ProjectionInterval(Xn, τ, ε, δ):
Require: Xn ∈ Rn, τ, ε, δ > 0
1: Bk ← (2τ k ± τ ] ∀k ∈ Z 2: p ̃ ← StableHistogram(Xn, (Bk)k∈Z, ε, δ) p ̃ = (. . . , p ̃−1, p ̃0, p ̃1, p ̃2, . . . ) 3: kˆ ← arg maxk∈Z p ̃k
4: ˆm ←
(
2τ kˆ if ∃k ∈ Z : p ̃k > 0
0 otherwise
5: return Iˆ := [ ˆm ± 3τ ]
8

Our theoretical analysis will work with a notion of (τ, γ)-concentration that is similar to the one introduced by Levy et al. (2021) in the context of user-level privacy. While this is not really needed, it makes it easier to compare our results to previous work. It will also help highlighting how more observations per user can improve the estimation error even under the more stringent user-level DP setting. This will become very clear in the applications of Section 5.
Assumption 3.3. ((τ, γ)p-Concentration, Adjusted from Definition 2, Levy et al. (2021)). A matrix Xn ∈ Rn×d is (τ, γ)px0 -concentrated or (τ, γ)p-concentrated around x0 ∈ Rd if for all i ∈ [n] with probability at least 1 − γ/n we have ∥Xi⊤ − x0∥p ≤ τ . We call τ the concentration radius.
Algorithm 3 returns an interval whose midpoint is the center of the bin of a stable histogram with the biggest estimated mass (cf. Karwa and Vadhan (2018), Algorithm 1). Our innovation is in the analysis of the algorithm which leads to Lemma 3.4 below, proven in Appendix C.2. The lemma generalizes Theorem 3.1 by Karwa and Vadhan (2018) using (τ, γ)∞-concentration and Lemma 3.2 enabled by the DKW-type inequality due to Bobkov and G ̈otze (2010). Most importantly, this allows for dependence between -
observations within the model of log-Sobolev dependence, but also enables non-identically distributed observations. Moreover, using the original DKW inequality, our proof strategy also generalizes the analysis of Karwa and Vadhan (2018) for i.i.d. Gaussians to general i.i.d. and (τ, γ)∞-concentrated observations.
Lemma 3.4. Algorithm 3 is (ε, δ)-DP for ε, δ > 0. Let γ ∈ (0, 1 ∧ n
4 ), let Xn ∈ Rn be (τ, γ)∞
concentrated around x0 ∈ R and fulfill Assumption 2.7 or 2.8 with constants (ρ, M ) s.t. ρM 2 ≲ 1. Let ˆm denote the midpoint of the interval returned by Algorithm 3. Then, with probability at least 1 − O(n
δ · e−κnε ∨ e−κ′n) for absolute constants κ, κ′ > 0,
ˆm ∈
h
x0 ± 2τ
i
.
Remark 3.5. We state Lemma 3.4 in terms of (τ, γ)x∞0 -concentration of Xn ∈ Rn, because the analysis to follow heavily relies on this notion of concentration. However, note that the proof permits relaxing to (τ ′, γ)x∞0 -concentration of each single Xi, which can have considerably smaller τ ′. This is exploited in our numerical experiments in Section 7.1.2 to sharpen rates.
Since (τ, γ)∞-concentration is an abstract notion of concentration, we instantiate Lemma 3.4 for n
i.i.d. σ2-sub-Gaussian random variables with mean μ ∈ R to give an example. These are (τ, γ)μ∞
concentrated with τ = p2σ2 log(2n/γ), yielding Corollary 3.6 that is proven in Appendix C.2.
Corollary 3.6. Let ε, δ > 0 and Xn ∈ Rn have i.i.d. and sub-Gaussian entries with variance proxy σ2 and mean μ ∈ R. Let ˆm denote the midpoint of the interval returned by Algorithm 3. Then, for γ ∈ (0, 1 ∧ n
4 ) and with absolute constants κ, κ′ > 0 we have
P ˆm ∈
h
μ ± 2p2σ2 log(2n/γ)
i
≥1−O n
δ · e−κnε ∨ e−κ′n .
The corollary exemplifies that we can estimate the true mean μ ∈ R using the private midpoint mˆ up to an error of size ≍ σ with high probability, ignoring log-factors in n, γ.
4 Item-Level DP Estimation with Dependent Data
We are ready to present our main algorithm. Our proposal follows a popular idea for private mean estimation: compute a Winsorized mean estimator and make it private with the Laplace mechanism. This approach is common both in the item- and user-level mean estimation literature (See, e.g., Smith (2011); Karwa and Vadhan (2018); Levy et al. (2021); Kent et al. (2024); Agarwal et al. (2025)).
9

Estimators within this framework restrict their global sensitivity by projecting observations onto an interval of fixed length. Given observations X1, . . . , Xn ∈ R, we follow the one-dimensional item-level mean estimator construction of Karwa and Vadhan (2018) given in three steps:
1. Compute a private crude mean estimator ˆm and range Iˆ := [ ˆm ± ς], 2. Project observations Xi onto Iˆ and average them, 3. Privatize the projected average by adding Laplace noise with variance ≍ ς/(εn).
In this construction, the choice of ˆm and the parameter ς are critical for the theoretical analysis and empirical performance of the estimator. We will find both simultaneously using the private histogram-based projection estimator from the previous section. Item-level mean estimators in Rd can be obtained through coordinate-wise application of the one-dimensional estimator. Conceptually this is equivalent to first constructing an L∞-ball around a rough mean estimator ˆm ∈ Rd, projecting observat-
ions X1, . . . , Xn ∈ Rd onto this hypercube, averaging them and adding isotropic Laplace noise in Rd. The theory worked out in this section will be presented for dependent data in the item-level setting, but it will also be the cornerstone for all the user-level estimators in Section 5.
Our main theoretical results are the finite-sample error and in-expectation MSE bounds in Theorems 4.2 and 4.3. These main results as well as all the guarantees derived for intermediate algorithms are obtained under log-Sobolev dependence. An interesting side product of our analysis is that we generalize some known results even in the i.i.d. setting by allowing for both unbounded data domains and unbounded parameter spaces.
4.1 Mean Estimators
Algorithm 4 presents our main mean estimation routine. It is a one-dimensional noisy Winsorized mean estimator that is shown to work well under log-Sobolev dependence. The estimator relies on projecting the data to the private range Iˆ := [ ˆm ± 3τ ] provided by Algorithm 3.
Algorithm 4 WinsorizedMean1D(X, τ, ε, δ, . . . )
Require: X ∈ Rn, τ, ε, δ > 0
1: Iˆ ← ProjectionInterval(X, τ, ε
2 , δ, . . . ) where Iˆ = [ ˆm ± 3τ ] and |Iˆ| = 6τ
2: return 1
n
Pn
i=1 ΠIˆ(Xi) + ξ with ξ ∼ Lap(0, 12τ
nε )
By construction, all observations X1, . . . , Xn ∈ R lie in the private projection interval Iˆ with high probability. This guarantees that with high probability the noisy Winsorized mean estimator behaves like a noisy empirical mean. Lemma 4.1 formalizes this behavior and is proven in Appendix D.
Lemma 4.1. Algorithm 4 denoted by A is (ε, δ)-DP for ε, δ > 0. Assume Xn ∈ Rn is (τ, γ)x∞0 
concentrated and make Assumption 2.7 or 2.8 s.t. ρM 2 ≲ 1. Then, for absolute constants κ, κ′ > 0
the event E := {∀i ∈ [n] : ΠIˆ(Xi) = Xi} has probability at least 1 − γ − O(n/δ · e−κnε ∨ e−κ′n) and
A(Xn) · 1{E} = X ̄n + ξ · 1{E}, where ξ ∼ Lap 0, 12τ
nε .
While Lemma 4.1 does not itself provide a statistical error guarantee, it is helpful for deriving the finite-sample result of Subsection 4.2.1 as it lets us analyze Algorithm 4 via the proxy X ̄n + ξ.
A multivariate version of Lemma 4.1 is presented in Lemma D.1 in Appendix D. It is analogous to Theorem 2 by Levy et al. (2021) and obtained through our multivariate mean estimator given in Algorithm 5. The estimator is a simple coordinate-wise application of Algorithm 4. Therefore, the assumptions of (τ, γ)∞-concentrated data Xn ∈ Rn×d around a point x0 ∈ Rd in combination
10

with log-Sobolev dependence or i.i.d. data are again natural in this context. Note that (τp, γ)pconcentration for all p ∈ N are equivalent in R but not in Rd since for a fixed γ the order of τp as a function of d might differ significantly (cf. Levy et al. (2021); Kent et al. (2024)).
Algorithm 5 WinsorizedMeanHD(Xn, τ, ε, δ, ρ, . . . )
Require: Xn ∈ Rn×d, τ > 0, δ, ρ, ε ∈ (0, 1) 1: ε′ ← ε/p8d log(1/ρ) 2: δ′ ← δ/d
3: X ̄j ← WinsorizedMean1D(X·j, τ, ε′, δ′, . . . ) ∀j ∈ [d]
4: return (X ̄1, . . . , X ̄d)⊤
4.2 Theoretical Guarantees
4.2.1 High-Probability Bound
We translate the utility guarantee of Theorem D.1 into a finite-sample upper bound on the MSE of the estimator in Algorithm 5. The estimation error in Theorem 4.2 below is quantified by the sum of two terms: the statistical error and the cost of privacy. The theorem is proven in Appendix D.1.1.
Theorem 4.2. Algorithm 5 denoted by A is (ε, δ + ρ)-DP for δ, ρ, ε ∈ (0, 1). Furthermore, let γ ∈ (0, 1∧ n
4 ) and Xn ∈ Rn×d be (τ, γ)μ∞-concentrated and fulfill Assumption 2.7 or 2.8 s.t. ρM 2 ≲ 1.
Then, for absolute constants κ, κ′ > 0, with probability at least 1 − 2dγ − O(d2n/δ · e−κnε′ ),
∥A(Xn) − μ∥2 ≲ X ̄n − μ 2 + τ
r
d2 log(1/ρ) log(3/(dγ))2
n2ε2 .
As shown in Lemma 2.11, under log-Sobolev dependence with constant ρ, the statistical rate ∥X ̄n − μ∥2 is upper bounded by p2dρ log(2d/α)/n. Thus, up to constants and logarithmic terms Theorem
4.2 yields an MSE bound for mean estimation of order d/n + d2/(nε)2 in probability. Expressing the theorem in terms of sample complexity bounds recovers Kamath et al. (2019, Theorem 4.1) in the i.i.d. Gaussian setting when Xn ∼ N (0, σ2In). It is tempting to apply the integral identity of the expectation to translate an in-probability bound like Theorem 4.2 into an in-expectation bound.
However, this will not work becuase of the term O(d2n/δ · e−κnε′ ) in the probability. Alternatively, splitting the expectation on the event in Theorem 4.2 and its complement is equally troublesome, since we cannot easily control the MSE on the low probability event.
4.2.2 In-Expectation Analysis
While the main focus of this work is on non-asymptotic bounds like the finite-sample guarantee of Theorem 4.2 and instantiations thereof in Section 5, we also give an in-expectation MSE upper bound in Theorem 4.3. We do so to provide an analysis of our estimator that is comparable to the existing upper and in particular also lower bounds in the user-level DP literature like Corollary 5 in Levy et al. (2021), and Theorem 3.1 or Theorem 3.2 of Cai et al. (2021) in the item-level DP literature. This -
allows us to make direct comparisons to known results in the i.i.d. setting. In particular, we can match the i.i.d. rates under weak dependence as shown in Theorem 4.3.
The procedure used for the in-expectation and consistency result in Theorem 4.3 is again Algorithm 5. However, we employ a sample splitting technique like in the proof of Theorem 6 by Kent et al. (2024). For simplicity, we assume that we have 2n samples instead of just n that are split into two independent halves Zn := [Z1, . . . , Zn]⊤ and Xn := [X1, . . . , Xn]⊤. We estimate the private midpoint
11

ˆm := ˆm(Zn) with Algorithm 3 using only the first half and project the second half onto the hypercube Iˆd := Iˆ1 × · · · × Iˆd where Iˆj = [ ˆmj ± 3τ ] to then estimate the mean using ΠIˆd (X1), . . . , ΠIˆd (Xn).
This lets us prove the statement conditional on Iˆd. Through this conditioning, Iˆd is deterministic which makes ΠIˆd (Xi) a contraction and significantly simplifies controlling the estimator’s variance. More concretely, we propose the estimator:
Amˆ (Zn)(Xn) = 1
n
n
X
i=1
ΠIˆd (Xi) + Ξ, where Ξ ∼ Lap 0, 12τ
εn Id . (1)
Theorem 4.3. The estimator (1) is (ε, δ + ρ)-DP for ε, δ, ρ ∈ (0, 1). Further, let Xn, Zn ∈ Rn×d have rows with mean μ ∈ Rd. Make Assumption 2.7 with ρ-sub-Gaussian entries or alternatively Assumption 2.8 s.t. ρM 2 ≲ 1. Then, choosing τ 2 ≍ ρ log(4n) we have
E[∥Amˆ (Zn)(Xn) − μ∥22] ≲ dρ log(4n) 1
n + d log(1/ρ)
n2ε2 + dn
δeκnε′/2 + d∥μ∥22
δeκnε′ .
Theorem 4.3 is proven in Appendix D.1.2. In the i.i.d. setting where the rows have ρ-sub-Gaussian entries, the upper bound in Theorem 4.3 recovers the error rates obtained in prior work such as Theorem 3.2 by Cai et al. (2021) or Corollary 5 by Levy et al. (2021). However, note that the construction of our estimator does not need to assume a known bound on ∥μ∥22. Unlike other results
in the literature, ∥μ∥22 only shows up in the analysis of our estimator.
4.3 Minimax Optimality
To assess the optimality of our mean estimators, we compare our upper bounds to the statistical minimax lower bound given in Cai et al. (2021). Their results were obtained for i.i.d. observations X1, . . . , Xn ∈ Rd each with i.i.d. ρ-sub-Gaussian entries in the item-level DP setting. For sake of exposition, we restate their theorem below. We will see that this bound implies that our mean estimator is minimax optimal in the i.i.d. setting of item-level DP.
Theorem 4.4. (Theorem 3.1, Cai et al. (2021)). Let Xn ∈ Rn×d fulfill Assumption 2.7, have ρ-sub-Gaussian entries and rows with mean ∥μ∥2∞ < ρ. Call the class of such distributions P. Let
ε ∈ (0, 1) and δ ∈ ((neεn)−1, n−(1+ω)) for ω > 0. Assume log(δ)/ log(n) is non-increasing in n, and d ≳ log(1/δ). Then, if nε ≳
pd log(1/δ) it holds that
inf
A∈Aitem
(ε,δ)
sup ν∈P
E[∥A(Xn) − μ∥22] ≳ dρ 1
n + d log(1/δ)
n2ε2 ,
where Ai(tεe,δm) is the family of all (ε, δ)-DP estimators.
Under Assumption 2.7 which subsumes Assumption 2.8 with i.i.d. rows, the distributional conditions of Theorem 4.3 are more general than those of Theorem 4.4, because the latter restricts the
population mean to satisfy ∥μ∥2∞ < ρ. To see this, note that if we assume ∥μ∥2∞ ≲ ρneκnε′/2 and
δ ∈ (nε′/eκnε′ , n−1], the upper bound of Theorem 4.3 will match the lower bound of Theorem 4.4 up to logarithmic terms. This is slightly more restrictive than the condition on δ required in the lower bound, but given that our analysis does not need a known bound on the norm of μ and even allows the norm to grow exponentially in n, we consider this a minor inconvenience. For a formal statement of this discussion see Corollary D.7 in Appendix D.1.2.
Remark 4.5. Interestingly, the rate in Theorem 4.3 also matches the lower bound up to a O(log n)factor under log-Sobolev dependence of Assumption 2.8 as long as ρ ≍ 1. Therefore, in this weak
12

dependence scenario, the rate of differentially private mean estimation in n, d, ε, δ is unchanged relative to i.i.d. sub-Gaussian observations. However, as soon as ρ ≳ nω for ω > 0, dependence decreases the rate in the upper bound and Theorem 4.3 is not tight anymore. We leave deriving lower bounds under dependence incorporating the log-Sobolev constant ρ as an open problem.
Remark 4.6. The lower bound in Theorem 4.4 requires the condition ∥μ∥2∞ < ρ which connects the mean and sub-Gaussian variance proxy ρ. In particular, the lower bound is not very interesting when ρ → 0. In contrast, our upper bound suggests that the MSE does not vanish as ρ → 0 but n stays constant when we do not connect the norm of μ to ρ. Indeed, the fourth term in the upper bound of Theorem 4.3 is exponentially small in n but does not vanish when ρ → 0. While this limit might not seem practicall-
y relevant in the item-level setting, it has important implications for user-level estimation related to the impossibility of learning if only the number of observations T per user goes to infinity. See also Remark 5.7.
4.4 Extension to Nonparametric Regression
Nonparametric regression aims to estimate a function f : [0, 1] → R from n noisy observations of the form Yi = f (xi) + εi with εn = (ε1, . . . , εn) ∼ N (0, Σn). Commonly, the function f is assumed to be part of a family of functions F such as a Hilbert, H ̈older, Sobolev or Besov space. While the xi may be random, we make a fixed design assumption and view xi as fixed points on a grid on [0, 1].
We note that the problem of private nonparametric regression has been considered for i.i.d. data in Awan et al. (2020); Golowich (2021); Cai et al. (2023) in the central DP model and in Berrett et al. (2021); Gy ̈orfi and Kroll (2025) in the local DP model. We permit correlated observations and want to focus on their effect on estimation. For simplicity, we restrict ourselves to F being the space of bounded Lipschitz functions. This setting is formalized in Definition 4.7.
Definition 4.7. (Fixed Design Nonparametric Regression). Suppose f : [0, 1] → R is Lf -Lipschitz and ∥f ∥∞ < ∞ and define the equidistant design points xi = i/n for 0 ≤ i ≤ n−1. Let εn ∼ N (0, Σn)
be noise with σ2minIn ⪯ Σn ⪯ σ2maxIn and 0 < σ2min ≤ σ2max. We define the nonparametric fixed design regression model through the observations Yi = f (xi) + εi.
Given observations, the underlying function f is commonly estimated using classical kernel-based estimators like the nearest neighbor, Priestley-Chao, Nadaraya-Watson, Gasser-Mu ̈ller or local polynomial estimators. Alternatively, the task is translated into mean estimation using Fourier or wavelet transforms, or linear regression via smoothing splines (See Tsybakov (2008)). Nonparametric estimation under DP mainly relies on such reformulations as can be seen, e.g., in Subsection 5.2.2 of Duchi et-
 al. (2018), Cai et al. (2025) or Section 6 of Cai et al. (2023). Here we show that, in our fixed design setting, we can construct optimal pointwise DP estimators of f building on the classical nonparametric Priestley-Chao regression estimator in Definition 4.8 that was introduced by Priestley and Chao (1972).
Definition 4.8. Let xn, Y n ∈ Rn contain design points and responses. Let K : R → R≥ be a kernel and let μ1(K) := R |s|K(s)ds. Suppose K is LK -Lipschitz, R
R K(u)du = 1 and μ1(K), ∥K∥∞ < ∞.
Let b > 0 be the bandwidth. Then, we define the Priestley-Chao estimator as
fˆn(·) :=
n−1
X
i=0
xi+1 − xi
b K · − xi
b Yi.
Since the Priestley-Chao regression estimator with equidistant xi s.t. xi+1 − xi = 1/n is an average of fˆn
i (·) := Yi 1
b K( ·−xi
x ), we can easily privatize it using our Algorithm 4. In order to apply Theorem 4.2 to obtain a finite-sample generalization bound for the privatized estimator, we first need to
13

establish (τ, γ)∞-concentration of the non-private fˆn
i (x) around f (x) for a fixed x. We state this intermediate result formally in the following lemma. It is proven in Appendix D.2.
Lemma 4.9. Let fˆn be the estimator of Definition 4.8 with a kernel that is a 1-sub-Gaussian density with LK , ∥K∥∞ < ∞. Assume the model of Definition 4.7 with constants Lf and σ2max. Then, for all n ∈ N, bandwidths b > 0 and x ∈ [ζ, 1 − ζ] where ζ = bp2 log(2/b) with probability at least 1 − α,
fˆn(x) − f (x) ≤ b (Lf μ1(K) + ∥f ∥∞) + Lf ∥K∥∞ + ∥f ∥∞LK
nb +
r
2σ2max∥K∥∞ log(2/α)
nb .
Further, fˆn(x) ∈ Rn with fˆn
i (x) := Yi 1
b K xi−x
b is (τ, γ)∞-concentrated around f (x) where
τ = b (Lf μ1(K) + ∥f ∥∞) + 1
b Lf ∥K∥∞ + ∥f ∥∞LK + p2σ2max∥K∥∞ log(2n/γ) .
The proof idea behind Lemma 4.9 is to decompose the mean absolute error into bias and mean absolute deviation. The bias is bounded deterministically leveraging the Lipschitzness of f , while the mean absolute deviation is controlled using the L2-Lipschitzness of fˆn in the errors εn ∈ Rn and Gaussian-Lipschitz concentration. While such an approach is common when showing in-expectation bounds for kernel estimators, the literature contains only few finite-sample bounds for kernel estimators. The aut-
hors are not aware of another one for a Priestley-Chao regression estimator, in particular for correlated Gaussian noise. The closest results we found in the literature are the following: a finite-sample bound for a distance-based kernel regressor for estimating a functions first derivative Kpotufe and Boularias (2012, Theorem 1) and generalization bound for a Nadaraya-Watson estimator assuming a uniformly bounded function as we do, but also bounded noise (Srivastava et al., 2021; Wang et al., 202-
4).
The following lemma shows that besides their concentration, the summands defining fˆn(x) are log-Sobolev dependent. A proof is given in Appendix D.2.
Lemma 4.10. Let fˆn be the estimator of Definition 4.8 with kernel K on the model of Definition 4.7.
Then, fˆn(x) ∈ Rn with fˆn
i (x) = Yi 1
b K xi−x
b fulfills Assumption 2.8 with ρM 2 ≲ σ2max/σ2min·∥K∥∞.
Now, by Theorem 4.2 under Assumption 2.8 we get the finite-sample generalization bound in Corollary 4.11 in whose display we suppress the constants Lf , LK , ∥f ∥∞, ∥K∥∞ and logarithmic terms for clarity. Corollary 4.11 is proven in Appendix D.2.
Corollary 4.11. Let fˆn(x) ∈ Rn with fˆn
i (x) = Yi 1
b K xi−x
b , and denote by A Algorithm 5 taking
as input fˆn(x) for x ∈ [0, 1]. Then, A is (ε, δ)-DP for ε, δ ∈ (0, 1). Furthermore, if γ ∈ (0, 1 ∧ n
4 ),
σ2max ≳ 1 and x ∈ [ζ, 1 − ζ] where ζ = bp2 log(2/b) and b > 0. Then, if Y n is as in Definition 4.7,
with probability at least 1 − 3γ − O(n/δ · e−κnε) where κ > 0 is an absolute constant,
A(fˆn(x)) − f (x) ⪅ b + σmax
r1
nb +
r1
n2b2ε2
!
.
For an optimally chosen b ≍ (σ2max/n)1/3 ∨ pσmax/nε this becomes
A(fˆn(x)) − f (x) ⪅ σ2max
n
1/3
∨
r σmax
nε ≲ σ2max
n
1/3
+
r σmax
nε .
Albeit the result is given in probability instead of in expectation, the error rate in the second statement of Corollary 4.11 resembles that of integrated and pointwise in-expectation lower bounds such as Corollary 1, Corollary 2 in Cai et al. (2024) or Theorem 6.1 of Cai et al. (2023) in the i.i.d. setting, i.e., when Σn ≍ In.
14

5 User-Level DP Estimators for Dependent Data
Remember that in the user-level DP setting each of the n users contribute T observations that shall be protected as a whole. While all the theoretical work in user-level DP that we are aware of assumes independent bounded data across both users and time, our results simultaneously cover unbounded observations and enable dependence both across the n users and their T observations.
The user-level DP estimators that we introduce in this section will showcase the versatility of the theoretical analysis of our item-level DP Winsorized mean estimator of the previous section. The construction of the user-level estimators will follow from the same 3 steps. Namely, given a data matrix X ∈ Rn×d we will need to show that:
1. X is (τ, γ)μ∞-concentrated, 2. X fulfills Assumption 2.7 or 2.8, 3. The sample average X ̄n, fulfills ∥X ̄n − μ∥2 ≤ Rμ
stat(n, α) with probability at least 1 − α.
In the longitudinal problems that we will consider below, the data matrix Xn will be a collection of n statistics computed from the T observations of each individual user. In particular, by constructing specific data matrices Xn, we will reduce user-level mean estimation, a simple random effects model and longitudinal linear regression to item-level mean estimation. This reduction allows us to obtain finite-sample statistical guarantees for all these models from Theorem 4.2.
5.1 User-Level Mean Estimation
Similar to the item-level case, we control dependence by Assumption 2.8 but applied to a data matrix Xn ∈ RnT ×d consisting of nT observations as defined next.
Definition 5.1. (User-Level Data). Collect the observations Xu ∈ RT ×d of users u ∈ [n] over time points t ∈ [T ] in the data matrix Xn := [X1⊤, . . . Xn⊤]⊤ ∈ RnT ×d. Define a user-average as
μˆu := 1
T Xu⊤1T for u ∈ [n] and collect them in μˆn := [μˆ1, . . . , μˆn]⊤ ∈ Rn×d. We call Xn a user-level
data matrix and μˆn the user-level averages.
Our user-level mean estimator feeds the matrix μˆn ∈ Rn×d to Algorithm 5, which then computes a private counterpart to the following empirical mean over the nT observations:
X ̄nT := 1
nT
nT
X
i=1
Xij = 1
n
n
X
u=1
μˆu = 1
n (μˆn)⊤1n.
Feeding the user-level averages μˆn to Algorithm 5 ensures privacy for each single μˆu and thus all observations of a user at once, which is exactly what user-level DP requires. Utility also follows by that of Algorithm 5 with the main difference being that the T observations per user essentially make
μˆu concentrate with a shrinking radius of order O(1/√T ). The main ingredient needed to make these claims rigorous is Theorem 4.2. For this we need to show that μˆn is (τ, γ)∞-concentrated around the mean μ. This is established in Lemma 5.2 which additionally gives a non-asymptotic deviation error rate for the non-private X ̄nT . The proof of is given in Appendix E.1.
Lemma 5.2. Let Xn ∈ RnT ×d be a user-level data matrix. Assume E[Xn] = 1nT μ⊤, with mean μ ∈ Rd and let Xn fulfill Assumption 2.8 s.t. ρM 2 ≲ 1. Then, μˆn is (τ, γ)μ∞-concentrated with
τ = p2ρ log(2dn/γ)/T and with probability at least 1 − α,
X ̄nT − μ 2 ≤
r
2dρ log(2d/α) nT
15

Remark 5.3. The concentration radius in Lemma 5.2 is actually τ = p2ρ⋆ log(2dn/γ)/T where ρ⋆ = maxu∈[n],j∈[d] ρuj and ρuj ≤ ρ are the marginal log-Sobolev constants of (Xu)·j. If ρ⋆ is known, this τ is constant in n up to logarithms if ρuj ≲ 1 even under strong dependence, i.e., ρ ≍ nω, ω ≥ 0.
Now, Lemma 5.2 directly implies an error bound for our Winsorized mean estimator through Theorem 4.2. We state this guarantee next and prove it in Appendix E.1.
Corollary 5.4. Let A denote Algorithm 5 taking input μˆn as in Definition 5.1. Then, A is (ε, δ +ρ)uDP for δ, ρ, ε ∈ (0, 1). Further, let γ ∈ (0, 1∧ n
4 ) and assume the user-level data matrix Xn ∈ RnT ×d
is s.t. E[Xn] = 1nT μ⊤ and fulfills Assumption 2.8 s.t. ρM 2 ≲ 1. Then, with probability at least
1 − 3dγ − O(d2n/δ · e−κnε′ ) for an absolute constant κ > 0,
∥A(μˆn) − μ∥2 ≲
r
dρ log(2/γ)
nT +
r
d2ρ log(2dn/γ) log(1/ρ) log(3/(dγ))2
T n2ε2 .
The rate in Corollary 5.4 is additive in the statistical rate of order d/(nT ) and a cost of privacy term of order d2/(T n2ε2). Both also arise in the user-level in-expectation bound in Levy et al. (2021, Corollary 1) which was derived for bounded data. Moreover, when limiting our finite-sample result to the i.i.d. setting, our rates match those present in the upper and lower bounds of Theorem 1.2 and Theorem 1.4 by Agarwal et al. (2025) in the limit when k → ∞ directional moments are bounded.
Remark 5.5. While the error in Corollary 5.4 goes to 0 as T → ∞, the probability of this event cannot be made arbitrarily small unless n → ∞. This is analogous to the impossibility result Levy et al. (2021, Theorem 8) which shows that learning under user-level DP is impossible in general if only T → ∞ but the number of users n stays constant.
5.1.1 In-Expectation Analysis
Theorem 4.3 also immediately implies an MSE upper bound in the user-level setting. We obtain it by running the item-level mean estimator (1) on observations μˆn = [μˆ1⊤, . . . , μˆn⊤]⊤ ∈ Rn×d like in
Definition 5.1. This construction assumes an additional independent copy μˆn
Z of μˆn which is used to
estimate a crude private midpoint ˆm := ˆm(μˆn
Z) with Algorithm 3. We then project the second half
μˆn onto the hypercube Iˆd := Iˆ1 × · · · × Iˆd where Iˆj = [ ˆmj ± 3τ ] to then estimate the mean using ΠIˆd (μˆ1), . . . , ΠIˆd (μˆn).
Corollary 5.6. Construct μˆn and μˆn
Z from user-level data matrices Xn and Zn as in Definition 5.1. Let Amˆ (μˆn
Z) denote the estimator (1) computed on μˆn, with midpoint ˆm(μˆn
Z ). Then, Amˆ (μˆn
Z ) is
(ε, δ + ρ)-uDP for ε, δ, ρ ∈ (0, 1). Further, let Xn = [X1⊤, · · · , Xn⊤]⊤ ∈ RnT ×d have rows with mean
μ ∈ Rd and satisfy Assumption 2.7 with ρ-sub-Gaussian entries or Assumption 2.8 s.t. ρM 2 ≲ 1. Let μˆn
Z be an independent copy of μˆn and choose τ 2 ≍ ρ log(4n) in Algorithm 3. Then,
E[∥Amˆ (μˆn
Z)(μˆn) − μ∥22] ≲ dρ log(4n) 1
nT + d log(1/ρ)
T n2ε2 + dn
δT eκnε′/2 + d∥μ∥22
δeκnε′ .
Corollary 5.6 is proven in Appendix E.1. For reasonable choices of δ and ε the estimator is consistent
as n → ∞ and if ∥μ∥22 = o(δeκnε′ ). As the μˆu themselves are averages, their variances are of order
ρ/T and thus by analogy with X ̄nT we expect an MSE that is smaller by order 1/T compared to the item-level case. However, the fourth term in Corollary 5.6 shows that this is not the case.
Remark 5.7. We see from Corollary 5.6 that for δ ∈ (nε′/eκnε′ , n−1] the rate in n and ε is the same as in the item-level setting of Theorem 4.3. Furthermore, the fourth term does not vanish for a fixed n as T → ∞, so our bound exhibits the same impossibility of learning in the T → ∞ limit
16

that was established in Levy et al. (2021) even though a closer look at Levy et al. (2021, Theorem 8) reveals that their lower bound is realized for δ < (2nenε)−1 which is excluded by Corollary 5.6. Still, our rates are comparable to the best existing estimators under i.i.d. assumptions. Note also that Theorem 4.4 is not applicable because the local mean estimators μˆu are ρ
T -sub-Gaussian which
makes the condition ∥μ∥2∞ < ρ
T that would be required by Theorem 4.4 excessively stringent.
5.2 Random Effects Location Model
Random effects models are commonly used for the analysis of clustered or correlated data (Pinheiro and Bates, 2000; Fahrmeir and Tutz, 2001; Demidenko, 2013). We restrict our presentation here to a simple one-dimensional user-level random effects location model presented in Definition 5.8. We do so to fully focus on the dependence between users introduced by random effects and investigate their impact on the convergence rate of our Winsorized mean estimator. Note, however, that our theoretical gua-
rantees of Section 4 are powerful enough to also handle random effects in linear regression settings like the one in Subsection 5.3.
Definition 5.8. (Random Effects Location Model). Let μ ∈ R and σ2U , σ2 < ∞. Assume inde
pendent noise Ug ∼ N (0, σ2U ) and εu ∼ N (0, Σu) with Σu ∈ RT ×T and Σu ⪯ σ2. For all users u ∈ [n], groups g ∈ [G] and times t ∈ [T ], define a random effects model through observations Ygut := μ + Ug + εut collected in Y n ∈ RnT .
In addition to the random effects that introduce dependence between users of the same group g, the model in Definition 5.8 also contains noise that is independent between users but correlated across a user’s observations over time. Hence, it contains both, inter- and intra-user dependence. Nevertheless, we will see that the analysis of the model in Definition 5.8 is simple because it can be viewed as an instance of the user-level mean estimation problem covered in Subsection 5.1. Hence, we only ne-
ed to show that the resulting user-level data matrix fulfills log-Sobolev dependence. We do that in the following lemma.
Lemma 5.9. Let Y n ∈ RnT be the design of the random effects model in Definition 5.8. Writing ng for the group sizes, define ρ := maxg∈[G] σ2U ngT + σ2 and M 2 := (2π(σ2U + σ2))−1. Then, Y n is a user-level log-Sobolev data matrix and Assumption 2.8 holds with constants (ρ, M ).
Our proof of Lemma 5.9 can be found in Appendix E.2. It exploits the joint Gaussian distribution of observations Ygut in Definition 5.8. The next result is a direct consequence of Corollary 5.4. It gives an upper bound on the estimation error of privately estimating the location parameter μ.
Corollary 5.10. Construct μˆn ∈ Rn from Y n ∈ RnT and denote by A the output of Algorithm 5 with input μˆn. Then A is (ε, δ)-uDP for δ, ε ∈ (0, 1). Furthermore, let γ ∈ (0, 1 ∧ n
4 ) and Y n ∈ RnT
be the design of Definition 5.8 with mean μ ∈ R and maximum group size ng⋆ . Then, if ρM 2 ≲ 1, with probability at least 1 − 3γ − O(n/δ · e−κnε) for an absolute constant κ > 0,
∥A(μˆn) − μ∥2 ⪅
r
σ2U · ng⋆ T + σ2
nT +
r
σ2U · ng⋆ T + σ2
T n2ε2 .
Remark 5.11. The rate in the error bound only matches the baseline of independent users with uncorrelated noise if σ2U ng⋆ T + σ2 ≍ 1. Note that σ2 ≍ 1 can be realized, e.g., through sparse correlations, a Toeplitz covariance structure with fast decay or equicorrelated noise with variance σ2 ≍ 1/T . However, σ2U ≍ 1/(ng⋆ T ) is stringent and will hold for instance when the maximum
group size ng⋆ ≍ 1 and σ2U ≍ 1/T . Otherwise, the latter example results in slower rates relative to the i.i.d. case, but the rates are sharp in this case as shown in the next example.
Example 5.12. (Slow Rates for the Empirical Mean). The behavior of the error rate in Corollary
17

5.10 as a function of ng∗ is not due to a loose bound when deriving the log-Sobolev dependence of Y n. To see this, assume εu = 0. Then, in the derivation of Lemma 5.9 the operator norm of the covariance matrix Σn ∈ RnT ×nT of the joint is exactly
∥Σn∥op = max
g∈[G] ∥ΣU
g ∥op = max
g∈[G] ∥σ2
U 1ngT 1⊤
ngT ∥op = σ2
U · T · max
g∈[G] ng.
This suggests that already one group with ng ≍ n kills the MSE-rate for user-level mean estimation.
Note that this phenomenon is due to the nature of this statistical model and not the user-level setting. To show this, let Xn ∈ Rn with Xn ∼ N (μ, Σn) where μ ∈ Rd and
Σn := 1ng 1n⊤g 0
0 0 + In.
As X ̄n is unbiased for g(μ) = 1
n 1n⊤μ, the MSE reduces to the variance that we may compute exactly:
MSE(X ̄n) = Var(X ̄n) = 1
n2 Var
n
X
i=1
Xi
!
=1
n2
n
X
i,j
Cov(Xi, Xj) = 1
n2


ng
X
i,j
1+n

 = ng2
n2 + 1
n.
Here, the asymptotic rate of X ̄n is also constant if ng ≍ n. This is optimal for unbiased estimators by the Cram ́er-Rao Lower Bound. For any unbiased estimator T of g(μ),
Var(T ) ≥ ∇μg(μ)⊤I(μ)−1∇μg(μ) = 1
n 1n
⊤
Σn 1
n 1n = ng2
n +1
n.
Note also that assuming μ = μ ̃1n with μ ̃ ∈ R as in Corollary 5.10 there is potential for improvement
through additional information. For instance, an unbiased estimator can do better than X ̄n if it knows which observations belong to the equi-correlated group. Whether and how such information can be obtained privately to construct better estimators is unclear to the authors at this point.
5.3 User-level DP Linear Regression for Longitudinal Data
While the body of literature on item-level differentially private linear regression is growing Wang (2018); Alabi et al. (2020); Liu et al. (2023); Avella-Medina et al. (2023); Brown et al. (2024); Bombari et al. (2025), little work addresses linear regression in user-level DP and nothing has been worked out for dependent longitudinal data. Here, we apply our Winsorized mean estimator to show that it can be used to estimate the regression coefficients β ∈ Rp in a user-level linear regression model-
 as formalized in Definition 5.13.
Definition 5.13. (User-Level Linear Model). Let u ∈ [n] be users and t ∈ [T ] time points. Let β ∈ Rp, Xn = [X1⊤, . . . , Xn⊤]⊤ ∈ RnT ×p and εn ∈ RnT where εn ∼ N (0, Σn). Assume Σn is block
diagonal with blocks Σu ∈ RT ×T . Define the user-level linear regression model through observations Y n := [Y1⊤, . . . , Yn⊤]⊤ = Xnβ + εn.
When T = 1 this user-level linear model reduces to the standard linear model with i.i.d. Gaussian errors. When T > 1 each user provides several observations that can be correlated due to the block-diagonal structure of the covariance matrix Σn. When T is reasonably large, a simple idea for privately estimating β is to estimate β locally for each user and combine these estimates by privately averaging the local non-private estimates over the n users. This strategy amounts to a divide and conquer al-
gorithm that reduces the problem of user-level linear regression under DP to item-level
18

differentially private mean estimation. Since the non-private counterpart of the uDP estimator we have in mind is no longer a standard least squares estimator, it is natural to wonder how efficient this estimator is relative to standard and generalized least squares. The next lemma clarifies this point. Its proof can be found in Appendix E.3.
Lemma 5.14. Let Xn = [X1⊤, . . . , Xn⊤]⊤, Y n = [Y1⊤, . . . , Yn⊤]⊤, Σn = diag(Σ1, . . . , Σn) be the design, observations and covariance matrix in Definition 5.13. Define the following estimators of β:
1. βˆ := 1
n
Pn
u=1 βˆu with βˆu = (Xu⊤Xu)−1Xu⊤Yu,
2. βˆw := 1
n
Pn
u=1 βˆwu with βˆwu := (Xu⊤Σu−1Xu)−1Xu⊤Σu−1Yu,
3. βˆOLS := (Pn
u=1 Xu⊤Xu)−1 Pn
u=1 Xu⊤Yu,
4. βˆwOLS := (Pn
u=1 Xu⊤Σu−1Xu)−1 Pn
u=1 Xu⊤Σu−1Yu.
Then, βˆ, βˆu, βˆw, βˆwu are unbiased for β and have the following variance relations:
(i) Cov(βˆOLS) ̸⪯ Cov(βˆ), (ii) Cov(βˆOLS) ⪯ Cov(βˆ) if Σu = σ2IT , ∀u ∈ [n] (iii) Cov(βˆOLS) = Cov(βˆ) if Xu⊤Xu = D for some constant D ⪰ 0, ∀u ∈ [n]
(iv) Cov(βˆwOLS) ⪯ Cov(βˆw) ⪯ Cov(βˆ).
Recall that by the Gauss-Markov Theorem βˆwOLS is the most efficient unbiased linear estimator;
more precisely for all unbiased linear estimator θˆ we have Cov(βˆwOLS) ⪯ Cov(θˆ). However, βˆwOLS and its unweighted version βˆOLS are not distributed estimators and cannot be privatized as easily
as βˆ and βˆw. Lemma 5.14 shows that having access to Σu, we should use βˆw as it is a better
divide-and-conquer estimator than βˆ. Yet, if we only have access to an upper bound on Σu and
therefore cannot reweigh, using βˆ is in some cases equally efficient as βˆOLS and generally neither one dominates the other in the general case when Σu ̸= σ2IT . For a simple counterexample with Σu ≍ IT but with heterogeneous variances see the proof of Lemma 5.14 in Appendix E.3. Hence,
even in some non-private settings βˆ is a reasonable distributed estimator. We work with a private counterpart of this estimator that is straightforward to compute and analyze using our private mean estimator. The following lemma establishes the concentration result of the local per user estimators βˆ1, . . . , βˆn that we need to get a finite sample guarantee for our private estimator. The proof of Lemma 5.15 is given in Appendix E.3.
Lemma 5.15. Let Xn = [X1⊤, . . . , Xn⊤]⊤ and Y n = [Y1⊤, . . . , Yn⊤]⊤ be as in Definition 5.13. Define
Mˆ u := 1
T Xu⊤Xu and assume θIp ⪯ Mˆ u ⪯ Ipθ and Σu ⪯ σ2IT . Then, for the estimator βˆ =
1 n
Pn
u=1 βˆu with βˆu = (Xu⊤Xu)−1Xu⊤Yu, with probability at least 1 − α,
βˆ − β 2 ≤
r
pθσ2
nT θ2 +
r
2θσ2 log(1/α)
nT θ2 .
Further, βˆn := [βˆ1, . . . , βˆn]⊤ ∈ Rn×p is (τ, γ)β∞-concentrated with τ = p2(θ/θ2)σ2 log (2dn/γ) /T .
Lemma 5.15 allows us to instantiate Theorem 4.2, which immediately yields the following result.
Corollary 5.16. Algorithm 5 is (ε, δ + ρ)-uDP on input βˆn for δ, ρ, ε ∈ (0, 1). Let γ ∈ (0, 1 ∧ n
4 ),
and let Xn ∈ RnT ×p and Y n ∈ RnT be as in Definition 5.13. Construct βˆn ∈ Rn as in Lemma 5.15
from Xn, Y n. Then, with probability at least 1 − 3pγ − O(p2n/δ · e−κε′n) where κ > 0,
A(βˆn) − β 2 ⪅
r
pθσ2
nT θ2 +
r
p2θσ2
θ2T n2ε2 .
19

6 Extensions to Local Differential Privacy
The central model of DP considered up to now requires that items/users trust a central server to aggregate and privatize their data. Whenever such trust is not given, items or users themselves have to privatize their data instead. Such a setting is called the local model of DP (Kasiviswanathan et al., 2011; Duchi et al., 2018).
Definition 6.1. ((ε, δ)-Differential Privacy, Local Model). Let ε, δ > 0 and let A : X → Rd be a randomized algorithm, mapping x ∈ X to a B(Rd)-measurable random variable A(x). Then, A is (ε, δ)-LDP in the local model if for all x, y ∈ X n we have
P (A(xi) ∈ S) ≤ eε · P (A(yi) ∈ S) + δ, for all S ∈ B(Rp) and i ∈ [n].
Furthermore, we say that
1. A is item-level-LDP if xi, yi ∈ R1×d for all i ∈ [n],
2. A is user-level-LDP if xi, yi ∈ RT ×d for all i ∈ [n].
The randomized response mechanism in Algorithm 6 was the first randomized algorithm used to ensure this local notion of data privacy. It was already introduced by Warner (1965) in the context of survey sampling long before local DP was formalized. The randomized response mechanism is well-known to be (ε, 0)-LDP; see Dwork and Roth (2014, Section 3.2).
Theorem 6.2. Algorithm 6 is (ε, 0)-LDP.
Algorithm 6 RandomizedResponse(x, ε):
Require: x ∈ {0, 1}, ε > 0 1: u ← U ∼ Unif[0, 1] 2: π ← eε/(1 + eε) 3: x ̃ ← x · 1{U ≤ π} + (1 − x) · 1{U > π} 4: return x ̃, π
In the rest of this section we use the randomized response mechanism in conjunction with the Laplace mechanism of Algorithm 1 to lift the theory on Winsorized mean estimation under dependence developed so far to the local model – albeit under slightly stronger assumptions. In addition to (τ, γ)∞-concentration of the data and log-Sobolev dependence or i.i.d. rows of the data matrix, we need to assume that ∥μ∥∞ ≤ B. This is because we replace the stable histogram underlying our private midpoints by -
a histogram estimator based on randomized responses that cannot handle an infinite number of bins. Besides this replacement our approach remains unchanged and therefore proves to be substantially more general than existing techniques as we allow for unbounded dependent data. In particular, in the case of bounded i.i.d. observations we recover the upper bound in Theorem 6 by Kent et al. (2024). Modulo histogram estimation, the proofs of our results in the central and local model all build on genera-
l statements that we instantiate for both cases.
6.1 Histogram Estimator
Our local histogram estimator again allows for dependent observations. The estimator in Algorithm 7 is a histogram estimator that relies on the randomized response mechanism for privacy also in the local model. The histogram’s construction is similar to that used by Kent et al. (2024). However, we do not require merging multiple neighboring bins and include a debiasing step that ensures that it is consistent. Unlike Algorithm 2 intended for the central model, this histogram can only handle
20

finitely many disjoint bins but it is (ε, 0)-LDP. Remember that the stable histogram is (ε, δ)-DP with δ > 0.
Algorithm 7 RandomizedHistogram(X, (Bk)k∈[Nbins], ε, δ):
Require: X ∈ Rn, ε, δ = 0 1: for all k ∈ [Nbins] do
2: cik ← 1{Xi ∈ Bk} ∀i ∈ [n] 3: c ̃ik, π ← RandomizedResponse(cik, ε/2) ∀i ∈ [n]
4: p ̃k ← 1
n
Pn
i=1 c ̃ik 5: p ̃debiased
k ← p ̃k−(1−π)
2π−1
6: return p ̃ := (p ̃debiased
1 , p ̃debiased
2 , . . . , pdebiased
Nbins )
In Lemma 6.3 we provide a privacy and utility guarantee for Algorithm 7 when estimating the true probability mass p1, p2, . . . , pNbins of bins (Bk)k∈[Nbins] given log-Sobolev dependent or i.i.d. data. The proof can be found in Appendix F.2
Lemma 6.3. Algorithm 7 is (ε, 0)-LDP for ε > 0. Let η > 0, and Xn ∈ Rn fulfill Assumption 2.7 (A1) or Assumption 2.8 (A2) with constants (ρ, M ). Further, let (Bk)Nbins
k=1 be a finite collection of
disjoint bins covering [−B, B] ⊂ R and define pk := P(X1 ∈ Bk). Then, for the output p ̃ we have
P max
k∈Nbins
|p ̃k − pk| ≥ η ≤ 2Nbins · exp − nη2
4 tanh2 ε
4+



2 exp − nη2
8 (A1),
16
η exp − 2
27
nη3
43ρM2 (A2).
.
Lemma 6.3 is a local DP counterpart of Lemma 3.2 in Section 3. The lemma mainly differs in that it assumes a finite number of bins, and provides a (ε, 0)-LDP guarantee instead of the (ε, δ)-DP guarantee of the stable histogram. Since both lemmas are shown by decomposing the error |p ̃k − pk| into the privacy loss |p ̃k − pˆk| and the estimation error |pˆk − pk|, the second term in the right hand side of both statements is identical. Their first terms, obtained by bounding the privacy loss with hig-
h probability differs in that the 1/δ factor in front of the exponential is replaced by the number of bins Nbins and the privacy budget parameter ε shows up as tanh2(ε) instead of just ε. When ε ≲ 1, we bound this instead by ε2 which gives minimax optimal rates for the local Winsorized mean estimator as we will see below.
6.2 Mean Estimators
The construction of our local mean estimators are analogous to their central model counterparts in Section 4. Here, the only difference is that we use the randomized histogram when estimating the private midpoint of the projection interval and every item or user privatize their projected observation by adding Laplace noise before sending it to the central server. Algorithm 8 formalizes this protocol. Remember that the randomized histogram can only handle a finite number of bins and thus the algori-
thm requires B ∈ (0, ∞) s.t. ∥μ∥∞ ≤ B as input.
Algorithm 8 WinsorizedMean1D(Xn, τ, ε, δ, B)
Require: Xn ∈ Rn, τ, ε, δ > 0
1: Iˆ ← ProjectionInterval(X, τ, ε
2 , δ, B) where Iˆ = [ ˆm ± 3τ ] Algorithm 9
2: return 1
n
Pn
i=1 ΠIˆ(Xi) + ξi with i.i.d. ξi ∼ Lap(0, 12τ
ε)
21

In Lemma F.5 we show that A(Xn) = X ̄n +  ̄Ξn with high probability, where  ̄Ξn = 1
n
Pn
i=1 Ξi
with Ξi ∼ Lap 0, 12τ
ε′ Id and ε′ = ε/p8d log(1/ρ). We exploit this equivalence to provide the finite-sample error bound in Theorem 6.4. The proof is given in Appendix F.5.
Theorem 6.4. Let A denote Algorithm 5 calling Algorithm 8 in line 3. A is (ε, ρ)-LDP for ε, ρ ∈ (0, 1). Let κ > 0, γ ∈ (0, 1∧ n
4 ) and let Xn ∈ Rn×d be (τ, γ)μ∞-concentrated with ∥μ∥∞ ≤ B and make
Assumption 2.7 or 2.8 s.t. ρM 2 ≲ 1. Then, with probability at least 1 − 2dγ − O(B/τ + 1) · de−κn(ε′)2 ,
∥A(Xn) − μ∥2 ≲ X ̄n − μ 2 + τ
r
d2 log(1/ρ) log(3/(dγ))2
nε2 .
As is typical also for local DP, the error rate in Theorem 6.4 is additive in the statistical rate and a cost of privacy term. Here, classical statistical rates of order pdρ/n are dominated by the cost of privacy even for fixed ε > 0 due to the dependence in d and log(1/ρ). Further, the dependence on ε differs significantly from our result in the central model, because any dependence of the form ε ≍ 1/nω for ω > 0 immediately affects the error rate in n.
In the local model, the high probability event A(Xn) = X ̄n +  ̄Ξn easily translates into a MSE inexpectation bound. This is, because we can control the error in the complement event using that ∥ ˆm∥∞ ≤ B+τ . This inequality holds by design of the local private midpoint estimation in Algorithm 9. The next result is proven in Appendix F.5
Theorem 6.5. Let A denote Algorithm 5 calling Algorithm 8 in Line 3. A is (ε, ρ)-LDP for ε, ρ ∈ (0, 1). Further, assume Xn ∈ Rn×d is (τ, γ)∞-concentrated around μ ∈ Rd with ∥μ∥∞ ≤ B.
Make Assumption 2.7 or Assumption 2.8 s.t. ρM 2 ≲ 1. Then,
E[∥A(Xn) − μ∥22] ≲ E
h X ̄n − μ 2
2
i
+ d2τ 2 log(1/ρ)
nε2 +



d2B2 · γ + B/τ
eκn(ε′)2 if B ≥ τ
d2τ 2 · γ + 1
eκn(ε′)2 if B ≤ τ .
The interpretation of this result is the same as for the in-probability bound. Statistical rates of order dρ/n are dominated by the cost of privacy term if we choose γ ≍ 1/(nε2). To give a clean interpretation we instantiate the theorem in the user-level setting that subsumes the item-level one. The resulting statement is given in Corollary 6.6 below.
Corollary 6.6. Let A denote Algorithm 5 calling Algorithm 8 in Line 3. Then, A is (ε, ρ)-uLDP for ε, ρ ∈ (0, 1). Further, let Xn ∈ RnT ×d and μˆn be as in Definition 5.1. Let Xn have rows with mean μ ∈ Rd s.t. ∥μ∥∞ ≤ B and fulfill Assumption 2.7 with ρ-sub-Gaussian entries or Assumption
2.8 s.t. ρM 2 ≲ 1. Then, choosing τ 2 ≍ ρ log(2dT n2ε2)/T ,
E[∥A(Xn) − μ∥22] ≲ d2ρ log(2dT n2ε2) log(1/ρ)
T nε2 +
(
d2B2 · 1
T nε2 + √Bρ
√T
eκn(ε′)2 if B ≥ τ
0 if B ≤ τ .
Above, we again distinguish the cases of whether or not our apriori bound ∥μ∥∞ ≤ B localizes the mean more than the concentration radius τ or not. Whether we are in the item- or user-level setting plays an interesting role in this distinction. In the item-level setting where T = 1 the concentration radius τ grows in n and at some point will surpass B. Thus, B ≤ τ is the more relevant case there and when d = 1 our bound attains the 1/(nε2)-rate that Corollary 1 Duchi et al. (2018) predicts for boun-
ded random variables. More interestingly, Corollary 6.6 generalizes this result to ρ-subGaussian random variables with potentially unbounded domain and bounded first moment. For small T , the user-level setting behaves the same as the item-level one. However, as T grows beyond
22

ρ log(2dT n2ε2)/B2 we pay the second term in the upper bound which corresponds to the prize of estimating the projection interval. If we specialize to observations that are bounded in L∞-norm,
for which ρ = B2 and we set B = 1, our result recovers Theorem 6 by Kent et al. (2024) up to logarithmic factors.
6.2.1 Extensions beyond Item-Level Mean Estimation
Instantiating Theorem 6.4 immediately yields finite-sample risk bounds for item-level nonparametric regression, user-level mean estimation, random effects location estimation and linear regression with longitudinal data. The following gives a brief overview on these results, starting with nonparametric regression in Corollary 6.7. This result is a local DP analog of Corollary 4.11.
Corollary 6.7. Let A denote Algorithm 5 taking fˆn(x) as input with x ∈ [0, 1]. A is (ε, 0)-DP for ε ∈ (0, 1). Let γ ∈ (0, 1 ∧ n
4 ) and assume Y n is as in Definition 4.7 and σ2max ≳ 1. Then, for all x ∈
[ζ, 1−ζ] where ζ = bp2 log(2/b) and b > 0, with probability at least 1−3γ −O(∥f ∥∞/(Lf b)·e−κnε2 ),
A(fˆn(x)) − f (x) ⪅ b + σmax
1
nb +
r1
nb +
r1
nb2ε2
!
.
For an optimally chosen b ≍ (σ2max/n)1/3 ∨ (σmax/√nε)1/2 this becomes
A(fˆn(x)) − f (x) ⪅ σ2max
n
1/3
∨
r σmax
√nε ≲ σ2max
n
1/3
+
r σmax
√nε .
The pointwise error rate in Corollary 6.7 shown in Appendix F.6 resembles the almost optimal integrated in-expectation rate in Theorem 3.1 and Theorem 4.1 by Gy ̈orfi and Kroll (2025) obtained with basis transformation estimators. Our result privatizes the Priestley-Chao regression estimator of Definition 4.8 and thus complements their approach (See also Subsection 2.2.3, Kent et al. (2024)).
The next three results concern user-level estimation for mean estimation, location random effects models and longitudinal regression. We first give a general user-level mean estimation result that is the local counterpart of Corollary 5.4.
Corollary 6.8. Let A denote Algorithm 5 calling Algorithm 8 in Line 3 with input μˆn ∈ Rn×d in Definition 5.1. Then A is (ε, ρ)-uLDP for ε, ρ ∈ (0, 1). Further, let γ ∈ (0, 1 ∧ n
4 ) and let
Xn ∈ RnT ×d be a user-level data matrix with mean s.t. ∥μ∥∞ ≤ B that fulfills Assumption 2.8 s.t. ρM 2 ≲ 1. Then, with probability at least 1 − 3dγ − O ̃(pT /ρ · B · de−κn(ε′)2 ),
∥A(μˆn) − μ∥2 ≲
r
dρ log(4d/γ)
nT +
r
d2ρ log(2dn/γ) log(1/ρ) log(3/(dγ))2
T nε2 .
Note that the cost of privacy here always dominates the statistical rate of order pd/(nT ). While we have an exponentially quickly decaying exponential term in the probability like in the central model, the probability now grows in T . Parallel to the user-level mean estimator in Kent et al. (2024), it is therefore sensible to only consider T ≤ eκn(ε′)2 many observations per user to prevent the probability from blowing up as only T → ∞ while n stays fixed. The same holds for the direct corollary b-
elow that applies Corollary 6.8 in the setting of a user-level random effects location model.
Corollary 6.9. Let A denote Algorithm 5 calling Algorithm 8 in Line 3 on input μˆn. A is (ε, 0)uDP for ε ∈ (0, 1). Let γ ∈ (0, 1∧ n
4 ), ng⋆ be the maximum group size and let Y n ∈ RnT and μˆn be as
23

in Definition 5.8. Assuming that ∥μ∥∞ ≤ B, with probability at least 1 − 3γ − O ̃(pT /ρ · B · e−κnε2 ),
∥A(μˆn) − μ∥2 ⪅
r
σ2U · ng⋆ T + σ2
nT +
r
σ2U · ng⋆ T + σ2
T nε2 .
Beware that we suppress log-factors and the cost of privacy again dominates, even when d = 1 and ε ≍ 1. Clearly, any privacy budget ε ≍ n−ω with ω > 0 decreases the rate below 1/n. The effect of dependence on estimation is the same as discussed in Remark 5.11 covering the central model.
Lastly, we revisit user-level linear regression in Corollary 6.10.
Corollary 6.10. Let A denote Algorithm 5 calling Algorithm 8 in Line 3 on input βˆn constructed as in Lemma 5.15 from Xn, Y n. Then, A is (ε, ρ)-uLDP for ε, ρ ∈ (0, 1). Further, let γ ∈ (0, 1 ∧ n
4 ).
Assume that Xn, Y n follow the model in Definition 5.13 with true regression parameter β s.t. ∥β∥∞ ≤
B. Then, with probability at least 1 − 3pγ − O ̃(√T ρ · B · pe−κn(ε′)2 ),
A(βˆn) − β 2 ⪅
r
pθσ2
nT θ2 +
r
p2θσ2
θ2T nε2 .
Note that to keep the probability of the error bound small in Corollary 6.10 we should use only
T ≤ eκn(ε′)2 many observations per user. This is again similar to the results in Kent et al. (2024).
7 Simulations
We examine empirically the finite sample guarantees of our noisy Winsorized mean estimator. While our simulations focus on item-level mean estimation in the central model, we also briefly discuss userlevel mean estimation and mean estimation under the model of local DP.
7.1 Item-Level Mean Estimation
For our item-level simulations we consider a random sample of dependent univariate Gaussian random variables representing univariate observations of n dependent individuals. More precisely, we have observations of the form Xn ∼ N (μ1n, Σn) with μ ∈ R and Σn ∈ Rn×n. In this case, Xn is log-Sobolev dependent with constant ρ = ∥Σn∥op. Hence, we can easily consider both i.i.d. observations where Σn ≍ In, and weak and strongly dependent Xi where ∥Σn∥op ≍ 1 and ∥Σn∥op ≍ nω for ω > 0. As in our theoretic-
al analysis, we mostly assume the log-Sobolev constant ρ = ∥Σn∥op to be known. On top, without loss of generality, we assume that Σn
ii = 1 for all i ∈ [n] to fix a scale.
7.1.1 Cost of Privacy in Small Samples
It is well known that for a privacy parameter ε ≳ 1/√n the statistical rate dominates the cost of
privacy in mean estimation in the central model. Hence, for ε ≳ 1/√n and in particular for constant ε we expect the MSE rate of our Winsorized mean estimator to be of order 1/n. This suggests that privacy can be obtained almost for free in this regime. However, when considering real world applications constants enter the picture and especially on small samples the concrete choice of ε expresses itself in substantially different MSEs for fixed n. To showcase this, Figure 1 compares the non-private -
empirical mean estimator X ̄n with our private estimator A of Algorithm 4 parametrized
with privacy budget parameters ε ∈ {1/√n, 0.1, 0.5, 1} and δ = 1/n2. The two subfigures on the left depict functionals of the squared errors over 2000 replications of the empirical measure at increasing sample sizes n. Concretely, the upper part depicts the MSE, the median squared error and the
24

0.0
0.2
0.4
0.6
Squared Error
Metric Mean Median IQR
0 2000 4000 6000 8000 10000 Observations n
0.0
0.2
0.4
0.6 Metric MSE Variance Bias2
0 1000 2000 Observations n
0.0
0.2
0.4
0.6
0.8
1.0
Failure Rate
Estimator X ̄n
X ̄n + ξ
A(0.1,1/n2)
A(0.5,1/n2)
A(1,1/n2)
A(3/√n,1/n2)
Figure 1: Comparison of the empirical mean X ̄n with Algorithm 4, denoted A(ε,δ).
interquartile range (IQR) of squared errors. The lower part shows a bias-variance decomposition where the bias squared is given as the pointwise distance between the solid and dashed line for fixed n. As expected, increasing ε lets the private estimators approach the non-private X ̄n. As theory
predicts, the estimator with ε ≍ 1/√n has a 1/n rate throughout. In contrast, when ε ∈ {0.1, 0.5, 1} The cost of privacy is of order 1/n2 stemming from the added Laplace noise, but for small sample sizes the privacy error can dominate the statistical error of order 1/n. This interpretation is supported by the non-private X ̄n + ξ that does not experience truncation but still behaves like A(0.1,1/n2) and the bias-variance decomposition that shows that the MSE of A is almost entirely driven by varia-
nce. In fact, the bias is not even visible for A. The right half of Figure 1 presents the empirical failure rate of the stable histogram underlying A, i.e., the percentage of times Algorithm 3 outputs 0. We observe that this rate rapidly goes to 0 and few non-zero values occur for n ≥ 1000.
7.1.2 Improving Constants Theoretically and Empirically
We revisit our projection interval construction in order to further reduce the cost of privacy. In Remark 3.5 we noted that (τ, γ)∞-concentration of Xn ∈ Rn is not necessary for Lemma 3.4 to hold. Instead, for the private midpoint algorithm to output a crude mean estimate not further than 2τ ′ from μ, it suffices that each Xi is (τ ′, γ)∞-concentrated with γ ∈ (0, 1
4 ). More concretely, if Xn is
log-Sobolev dependent with constant ρ, (τ ′)2 ≍ ρ log(2/γ) is ρ log(n) smaller than τ 2 ≍ ρ log(2n/γ). Such a decrease in the size of the projection interval immediately yields privacy noise with smaller variance and therefore smaller constants in the MSE upper bounds and also simulations as can be seen in Figure 2. This is obtained through bins of width 2τ ′ in the histogram. Carrying this change through the analysis leads to Iˆ = [ ˆm ± τ + 2τ ′] instead of Iˆ = [ ˆm ± 3τ ] in Algorithm 4 to ens-
ure that no Xi is affected by the projection with high probability. On top, we also exploit Remark 5.3 and use the marginal log-Sobolev constants.
25

0.00
0.02
0.04
0.06
0.08
0.10
Squared Error
Metric Mean Median IQR
2500 5000 7500 10000 12500 15000 Observations n
0.000
0.002
0.004
0.006
0.008 Metric MSE Variance Bias2
20000 30000 40000 50000 Observations n
0.0000
0.0002
0.0004
0.0006
0.0008
0.0010
0.0012
0.0014
0.0016
Metric MSE Variance Bias2
Estimator X ̄n
Aτ0.′2τ
Aτ0.′5τ
A1τ +2τ ′
τ′
Aτ1′τ Aτ1τ
Aτ3τ
Figure 2: Comparison of (0.1, 1/n2)-DP estimators Aκ
h where κ is the radius of the projection interval
and h the length of the histogram bins. Note that here τ ′ ≍ plog(2/γ) and τ ≍ plog(2n/γ).
We further optimize constants empirically. For this, we fix privacy budget parameters (ε, δ) = (0.1, 1/n2) and run Algorithm 4 with different projection intervals Iˆ and potentially adjusted binwidths for the underlying histogram estimator. Firstly, this lets us empirically assess the impact of choosing the projection interval Iˆ = [ ˆm ± τ + 2τ ′] instead of Iˆ = [ ˆm ± 3τ ]. Secondly, we experiment with different combinations of binwidths for the stable histogram and even smaller projection inte-
rvals. In Figure 2 we compare Winsorized mean estimators Aκ
h where κ > 0 indicates the radius of the
projection interval Iˆ and h the binwidth used by the histogram. Note that the resulting algorithms are not necessarily grounded in theory, but Aτ3τ and Aτ+2τ′
τ′ are. Comparing these two, we observe that our theoretical approach to reducing constants already considerably decreases the MSE. Our experiments go beyond our theory with the private Winsorized estimators Aκ
τ′ for κ ∈ {1τ, 0.5τ, 0.2τ }. The subfigure on the lower left of Figure 2 suggests that an interval length of 1τ still works empirically and results in even smaller MSE. For an interval length of 0.5τ , the same subfigure suggests that introducing reasonable bias through a more aggressive projection decreases the MSE for the n ≤ 50, 000 we consider, but for 0.2τ the bias already dominates for small n and cannot be offset by the decreased variance. The right hand side of the figure suggests that in-
troducing bias by shrinking the length of Iˆ is particularly beneficial for small sample sizes. Yet, for bigger n even bias that is at first reasonable ends up pushing the MSE above that of estimators with small or no bias.
Our empirical results indicate that our bounds are sharp in the sense that shrinking the bin width aggressively beyond our theory eventually worsens the rate. Indeed, Algorithm Aτ1τ shows that a less principled approach where we simply shrink the length of the projection interval without adjusting the bin width fails as it introduces excess bias and variance. As the edge between some bins Bk and Bk+1 approaches the true mean μ from the left as n grows, the midpoint of Bk+1 that initially contains -
μ moves away from μ and for symmetric distributions like our Gaussian, up to 50% of the data are eventually projected. This explains that the bias first increases and then decreases again
26

when Bk has more mass and its midpoint approaches μ from the left. When the edge is almost exactly at μ, the estimator’s variance explodes because single observations let the midpoint ˆm jump between the midpoints of Bk and Bk+1.
7.1.3 Cost of Dependence in Small Samples
0.0
0.1
0.2
0.3
0.4
0.5
Squared Error
Metric Mean Median IQR
Estimator
A(0.1,1/n2) [1, iid]
A(0.1,1/n2) [2, toep]
A(0.1,1/n2) [3, equi]
A(0.1,1/n2) [4, equi]
1000 2000 3000 4000 5000 Observations n
0.00
0.02
0.04
0.06
0.08
0.10
Squared Error
Metric Mean Median IQR
Estimator
A(1,1/n2) [1, iid]
A(1,1/n2) [2, toep]
A(1,1/n2) [3, equi]
A(1,1/n2) [4, equi]
−2.5
0.0
2.5
−2.5
0.0
2.5
−2.5
0.0
2.5
0 50 100 Observations n
−2.5
0.0
2.5
Figure 3: (ε, δ)-DP estimators A(ε,δ) on Xn ∈ Rn with different covariances Σn ∈ Rn×n.
Our theory predicts that the main driving factor of the MSE rate under log-Sobolev dependence is the log-Sobolev constant ρ = ∥Σn∥op. Thus, whenever ∥Σn∥op is constant, our estimators should have the same 1/n or 1/(n2ε2) but MSEs differing in constants. At the same time, when ∥Σn∥op ≍ n we expect the MSE to converge to a non-zero value. To verify this, Figure 3 depicts the MSE, median squared error and IQR of squared errors for (ε, δ)-DP estimators A(ε,δ) on observations Xn with Σn = In, Σn a Toep-
litz covariance matrix with decay 0.95, i.e., Σn = (0.95|j−i|)i,j∈[n] and two equicovariance matrices Σn with variance and covariance pairs (1, 1/(n − 1)) and (1, 1/4), respectively. We depict two samples from each of these models in the four subfigures on the right of Figure 3. On the left, the upper subplot depicts a high privacy regime where (ε, δ) = (0.1, 1/n2). Here, we see that the three weakly dependent settings where ∥Σn∥op ≍ 1 behave similarly and have comparable squared errors. In turn, -
in the lower subplot where (ε, δ) = (1, 1/n2), the three weakly dependent settings have considerably different squared errors and the Toeplitz model far exceeds the others. To understand this note that Remark 5.3 implies that the cost of privacy term only depends on the marginal log-Sobolev constants, which here are the Σn
ii = 1. The statistical rate, in turn, always
depends on ∥Σn∥op which, e.g., for the Toeplitz model is ≈ 38. When ε = 0.1, the privacy term seems to dominate whereas for ε = 1, it is small enough so that the different constants in the statistical rate are visible. In both subplots, the strongly dependent observations in the second equi-covariance model have MSE converging to 1/4 with rate 1/n.
27

7.1.4 Central versus Local Model
0.0000
0.0001
0.0002
0.0003
0.0004
Squared Error
Metric Mean Median IQR
Metric MSE Variance Bias2
Estimator X ̄n
A(c1,1/n2)
Ac
(√1/n,1/n2)
Al(1,1/n2)
Al
(√1/n,1/n2)
5000 10000 15000 20000 Observations n
0.0000
0.0001
0.0002
0.0003
0.0004
Squared Error
5000 10000 15000 20000 Observations n
0.0
0.2
0.4
0.6
0.0
0.2
0.4
0.6
Figure 4: Comparison of (ε, δ)-DP and LDP estimators Ac
(ε,δ) and Al
(ε,δ).
In the central and the local model, the privacy budget parameter ε directly impacts the MSE-rate. Ignoring constants and logarithmic terms our theory predicts that the cost of privacy is 1/(n2ε2) and 1/(nε2), respectively. Thus, when ε is constant in n, both models of privacy have the same 1/n-estimation rate. This changes as ε ≍ 1/nω for ω > 0. Then, our theory predicts that in the central model for 0 ≤ ω ≤ 1/2 the statistical rate dominates the cost of privacy. In the local model, however, for a-
ny ω > 0 the cost of privacy should immediately dominate the statistical rate. We investigate this difference in the simulations in Figure 4. The left hand side of the plot uses two different axes where X ̄n and the central estimators Ac use the left axis and the local estimators Al are plotted on the middle axis that is shared with the right hand side of the figure. There, we plot the estimators on their true scale. This layout allows us to compare the rate and the magnitude of the MSEs. We use ε-
 = 1 in the two subfigures on top. While we observe a rate of 1/n in both models of DP, the right hand side shows that constants are substantially larger when privatizing locally. In the bottom, ε ≍ p1/n and we still observe an MSE-rate of 1/n in the central model whereas the MSE in the local model is constant or even slightly increasing due to logarithmic terms.
7.1.5 Plug-in Variance Estimation
So far we assumed that ρ = ∥Σn∥op or more precisely the Σii are known a priori. To make our estimator more applicable, we now present a way to estimate the concentration radius of the data τ in a private and data-driven way. For this, we rely on Remark 5.3 which tells us that to compute τ it is enough to know the marginal sub-Gaussian variance proxies or log-Sobolev constants ρi corresponding to the distribution of Xi ∈ R for all i ∈ [n]. For Gaussian observations that we
28

0.000
0.005
0.010
0.015
0.020
Squared Error
Metric Mean Median IQR
0.00
0.01
0.02
0.03
0.04
0.05 Metric MSE Variance Bias2
Estimator X ̄n [1, iid] A [1, iid] Abi [1, iid] Acoin [1, iid]
2000 4000 6000 8000 10000 Observations n
0.000
0.005
0.010
0.015
0.020
Squared Error
Metric Mean Median IQR
2000 4000 6000 8000 10000 Observations n
0.00
0.01
0.02
0.03
0.04
0.05 Metric MSE Variance Bias2
Estimator A [2, equi] Abi [2, equi] Acoin [2, equi] A [3, toep] Abi [3, toep] Acoin [3, toep]
Figure 5: Comparison of the empirical mean X ̄n with (1, 1/n2)-DP estimator A using known variance and (2, 1/n2)-DP estimators Abi and Acoin using plug-in variance estimators.
investigate here, these constants are the marginal variances. We therefore introduce two private variance estimators that we use as plug-ins for the ρi = Σii. Both get a very rough estimate of the first moment, and upper and lower bounds of the variance as input and iteratively and alternatingly refine them. For the variance step, Algorithm 10 in Appendix G implements a bisection that starts with the upper bound on the variance and halves it unless the lower bound is reached or a confidence interv-
al around the first moment has too low coverage. The variance step of Algorithm 13 in Appendix G is that of the CoinPress Algorithm due to Biswas et al. (2020). We call the resulting Winsorized mean estimators with these plug-in variance estimators Abi and Acoin, respectively. Figure 5 showcases their performance with privacy budget parameters (ε, δ) = (1, 1/n2) each for the mean and the variance estimation. For the true mean and variance we use μ = 100 and σ2 = 1 whereas the provided rough first -
moment estimate is 300 and the upper and lower bounds on the variance are (0.1, 10000). We use three dependence models once with an i.i.d., equi-covariance and Toeplitz covariance matrix: Σn = In, Σn = 3/4 · In + 1/4 · 1n1n⊤ and Σn = (0.95|j−i|)i,j∈[n]. The
small difference between X ̄n and the (1, 1/n2)-DP estimator A using the known variance suggests that we are in a regime with low cost of privacy for mean estimation. Keeping in mind that we allow for an additional privacy budget for the variance estimation, the adjusted CoinPress clearly outperforms the bisection for smaller 1000 ≤ n ≤ 6000. For large enough n ≥ 6000, the performance of the plug-in estimators is almost indistinguishable from that of A. This suggests that there the cost of privacy-
 paid for variance estimation is low.
29

7.2 User-Level Mean Estimation
In our user-level simulations we assume that n users each contribute T observations collected in Xu ∈ RT . For the resulting user-level data matrix Xn := [X1⊤, . . . , Xn⊤]⊤ ∈ RnT we want to
assume log-Sobolev dependence. For our simulations we therefore suppose that Xn ∼ N (μ1nT , Σn) where Σn ∈ RnT ×nT . Throughout, we assume that Σn = diag(Σ1, · · · , Σn) where Σu are Toeplitz covariance matrices with decay 0.95. This means that we model users to be independent but their repeated measurements to have decaying covariances over time. The results are depicted in Figure 6. The plot’s left hand side shows the MSEs over k = 1000 simulations of the (0.1, 1/n2)-DP estimator A(0.1,1/n2) as -
a function of n for three different numbers of timepoints T ∈ {1, 10, 100} per user. The right hand side, in turn, fixes the number of users as n = 1000 and plots the MSE as a function of 100 ≤ T ≤ 1000. Here, we also consider the estimator A(ε,1/n2) for three different privacy budgets ε ∈ {0.1, 0.5, 1}. As expected, the left hand side in this weakly dependent setting shows that increasing T by one order of magnitude has a similar effect on reducing the MSE as decreasing the variance in an item-le-
vel setting by one order of magnitude. In the right, we observe the 1/T rate of our Winsorized estimator we expect when n is held constant.
1000 2000 3000 4000 5000 Users n
0.00
0.05
0.10
0.15
0.20
Squared Error
Metric Mean IQR
Estimator
A(0.1,1/n2), T = 1
A(0.1,1/n2), T = 10
A(0.1,1/n2), T = 100
200 400 600 800 Timepoints T
0.00
0.02
0.04
0.06
0.08
0.10
Squared Error
Metric Mean IQR
Estimator X ̄n
A(0.1,1/n2)
A(0.5,1/n2)
A(1,1/n2)
Figure 6: MSE of user-level estimators as a function of users and timepoints.
8 Final remarks
We have provided some first differentially private estimation tools for dependent data. The core procedure is a mean estimation algorithm based on noisy Winsorized means that had been introduced by Karwa and Vadhan (2018) in the context of item-level DP for univariate i.i.d. Gaussian data. Our work shows that simple variants of this algorithm cannot only handle dependent data, but can also lead to optimal estimation rates in the context of user-level DP and local DP for various estimation problems-
 such as nonparametric regression, random effects models and longitudinal linear regression. In this sense, our work also provides a simple unifying estimation framework for a wide range of problems in DP that tend to be studied separately.
From a technical perspective, the key tool allowing for log-Sobolev dependent observations is a DKWtype inequality due to Bobkov and G ̈otze (2010). It provides us a way to control the performance of our intermediate histogram estimators which are essential for adaptively finding appropriate projection intervals for our Winsorized mean estimators. Further relaxing the log-Sobolev dependence
30

assumption would require DKW-inequalities under weaker conditions.
Our work opens numerous natural future research directions. Perhaps the most pressing one in practice is to develop inference tools that work well with moderate sample sizes under dependence. For this it will be important to develop good private variance estimators and we believe that ideas based on the CoinPress procedure of Biswas et al. (2020) are promising. Finally, some of the many important statistical questions that naturally involve dependent data include multi-armed bandits, online learni-
ng, federated learning and in general noisy DP optimization procedures. We hope to address some of these in future work.
A Auxiliary Results
Theorem A.1. (Bakry-Emery, Theorem 21.2, Villani (2009), Corollary 5.7.2, Bakry et al. (2014)). Let the probability measure ν on Rn have density p(x) ∝ exp(−V (x)) for all x ∈ Rn. Suppose there is α > 0 s.t. ∇2V (x) ⪰ αIn for all x ∈ Rn. Then, the following log-Sobolev inequality holds:
Entν (f 2) ≤ 2
α · E[∥∇f (X)∥22].
Theorem A.1 states a sufficient condition for a log-Sobolev inequality. It is not a necessary condition as illustrated, e.g., by the Holley-Stroock Perturbation Theorem (Chewi (2025, Proposition 2.3.1)).
Example A.2. (Gaussian Log-Sobolev Inequality via Bakry-Emery). Let μ ∈ Rd and Σ ∈ Rd×d s.t. Σ ⪯ βId. A multivariate Gaussian measure with mean μ and covariance matrix Σ has the following density p with respect to Lebesgue measure
p(x) ∝ exp − 1
2 (x − μ)⊤Σ−1(x − μ) .
Computing the negative log-Hessian now yields ∇2xV (x) = −∇2x log(p(x)) = Σ−1 ⪰ 1/βId due to the covariance bound Σ ⪯ βId. Hence, by Theorem A.1, the measure N (μ, Σ) fulfills LSI(β).
The following stability result for log-Sobolev inequalities is useful for our purposes as it implies that marginals of distributions fulfilling a log-Sobolev inequality also fulfill one with the same constant.
Lemma A.3. (Lipschitz Contractions for Log-Sobolev Inequality, Colombo et al. (2017, p. 1492)). Let ν on Rd fulfill LSI(ρ) and T : Rd → Rn be L-Lipschitz. Then, for the push-forward measure ν = T#μ on Rn and φ : Rn → R s.t. Entν (φ2) < ∞ and ∇φ ∈ L2(ν) we have
Entν (φ) ≤ 2ρL2 · Eν [∥∇yφ(Y )∥2
2].
Remark A.4. Let T : Rd → Rk be the map corresponding to marginalization, i.e., dropping d − k coordinates. Let the set of indices of the remaining coordinates be M. Then, T is 1-Lipschitz:
∥T (x) − T (y)∥2 =
s X
i∈M
(xi − yi)2 ≤
s X
i∈[d]
(xi − yi)2 = ∥x − y∥2, ∀x, y ∈ Rd.
Hence, any marginal of a measure fulfilling a log-Sobolev inequality has the same ρ.
The next two results follow from Gaussian and Laplace Lipschitz concentration respectively.
Lemma A.5. Let X1, . . . , Xn ∈ Rd and Xi ∼ N (μ, Σi) independently. Then, with Σ ̄ n := 1
n
Pn
i=1 Σi,
P1
n
n
X
i=1
Xi − μ
2
≥
r
tr(Σ ̄ n)
n+
r
2∥Σ ̄ n∥op log(1/α) n
!
≤ α.
31

Proof. This well-known result immediately follows from the affine transformation property of Gaussians combined with Gaussian Lipschitz concentration (Boucheron et al., 2013, Theorem 5.6) applied to the L2-norm.
Lemma A.6. Let Ξ1, . . . , Ξn ∼ Lap(0, bId) independently. Then, it holds that
P1
n
n
X
i=1
Ξi
2
≥b
r 2d
n+
r
4 log(3/α)2 n
!!
≤ α.
Proof. This proof collects Ξ := [Ξ1, . . . , Xh]⊤ ∼ Lap(0, bIdh) and expresses the average in terms of Ξ. This allows us to apply Poincare ́ Lipschitz concentration (Chewi, 2025, Theorem 2.4.3).
Concretely, we write Ξ ̄n = AΞ where A = 1
n [Id, . . . , Id] ∈ Rd×dn and ∥A∥op = 1/√n. We now show
that ∥ ̄Ξn∥2 is Lipschitz. For Ξ, Ξ′ ∈ Rdn and by the reverse triangle inequality,
∥ ̄Ξn∥2 − ∥ ̄Ξ′
n∥2 = |∥AΞ∥2 − ∥AΞ′∥2| ≤ ∥A(Ξ − Ξ′)∥2 ≤ ∥A∥op∥Ξ − Ξ′∥2 ≤ √1n ∥Ξ − Ξ′∥2.
Further, by concave Jensen’s E[∥ ̄Ξn∥2 ≤ pE[∥ ̄Ξn∥22] ≤ bp2d/n where the last inequality holds since
E ∥ ̄Ξn∥22 = E


1 n
n
X
i=1
Ξi
2
2

=E


d
X
j=1
1 n
n
X
i=1
Ξij
!2
= d
n2 · E


n
X
i=1
Ξi1
!2

=d
n2 ·
n
X
i=1
n
X
k=1
E [Ξi1Ξk1] = d
n2 ·
n
X
i=1
E Ξ2
i1 = d
n · Var(Ξi1) = d
n · 2b2.
Note that the distribution of Ξ is a product distribution with Poincar ́e constant 4b2 (Boucheron et al., 2013, Exercise 3.22 + Theorem 3.1). Hence, for t ≥ 0 Poincare ́ Lipschitz concentration yields
P ∥ ̄Ξh∥2 ≥ b
r 2d
h +t
!
≤ P ∥ ̄Ξh∥2 ≥ E[∥ ̄Ξh∥2] + t ≤ 3 exp −
√ht 2b
!
.
A choice of t = √2bn log(3/α) then recovers the statement.
B Proofs of Section 2
Proof of Corollary 2.10.
The LSI(ρ) condition on X·nj’s distribution implies a Poincare ́ constant ρ. Thus, for φ : Rn → R,
Var(φ(X·nj)) ≤ ρ · E[∥∇φ(X·nj)∥22].
For the first statement we use the test function φ(X·nj) = θ⊤X·nj with θ ∈ Rn. Hence, for all θ ∈ Rn:
θ⊤ Cov(X·nj)θ ≤ ρ · E[θ⊤θ] = θ⊤(ρIn)θ.
The Loewner ordering follows by definition. To show the second statement we evaluate with another test function. For each j ∈ [d] define f (X·nj) := (X ̄n)j = 1
n
Pn
i=1 Xij . For x, y ∈ Rn,
|f (x) − f (y)| ≤ 1
n
n
X
i=1
xi − yi ≤ 1
n
n
X
i=1
|xi − yi| ≤ √1n ∥x − y∥2.
32

Hence, f is 1/√n-Lipschitz. By definition of the variance of a random vector, we have
E[∥X ̄n − E[X ̄n]∥22] =
d
X
j=1
E[|(X ̄n)j − E[(X ̄n)j]|2] =
d
X
j=1
Var ((X ̄n )j ).
Evaluating the Poincar ́e inequality with the test function f yields
Var((X ̄n)j) = Var(f (X·nj)) ≤ ρ · E[∥∇f (X·nj)∥22] ≤ ρ
n.
Proof of Lemma 2.11.
The proof relies on log-Sobolev Lipschitz concentration applied to a dimension-wise estimator (X ̄n)l = 1
n
Pn
j=1 Xjl = 1
n 1⊤X·nl =: f (X·nl ) of μ and union bounding over dimensions.
To apply Lipschitz concentration, we first compute the mean of f that is E[f (X·nl )] = 1
n
Pn
i=1 E[Xil] =
μl. Second, f is 1/√n-Lipschitz as shown in the proof of Corollary 2.10.
By Assumption 2.8 for all l ∈ [d], the vector X·nl is distributed according to a distribution that is LSI(ρ). By log-Sobolev Lipschitz concentration of Theorem 2.6 we have:
P (X ̄n)l − μl ≥ t = P (|f (X·l) − E[f (X·l)]| ≥ t) ≤ 2 exp − nt2
2ρ .
Through the choice t := p2ρ log(2d/α)/n and a union bound over dimensions we obtain:
P X ̄n − μ ∞ ≥
r
2ρ log(2d/α) n
!
= P ∃l ∈ [d] : |(X ̄n)l − μl| ≥
r
2ρ log(2d/α) m
!
≤ α.
Using that √1d ∥x∥2 ≤ ∥x∥∞ for all x ∈ Rd on the complement event yields the statement.
C Proofs of Section 3
C.1 Proofs for Stable Histogram
We briefly describe the main idea behind the proof of the privacy guarantee stated in Lemma C.1. The stability mechanism of the histogram estimator releases all p ̃ = (. . . , p ̃−1, p ̃0, p ̃1, p ̃2, . . . ) which by construction contains at most n non-zero elements. This is not trivial since if we only add noise to the bins Bk with pˆk > 0, even though we protect the counts, we release information about where these bins are. We cannot fix this by adding unbounded noise to all bins (Bk)k∈Z, as th-
is blows up the estimation error. Therefore, the algorithm zeroes out the unstable bins whose noisy count is comparable to one plus the (1 − δ/2)-quantile of a standard Laplace. This stability mechanism prevents leaking the location of non-zero bins at the cost of a δ > 0 in the privacy guarantee.
Lemma C.1. (Adjusted from Theorem 7.3.5, Vadhan (2017)). Algorithm 2 is (ε, δ)-DP for ε, δ > 0.
Proof. The proof exploits that for two neighboring datasets only two empirical frequencies pˆk can be affected. If the corresponding bins both contain at least one data point, a Laplace mechanism is used contributing the ε and otherwise thresholding yields the δ.
33

Let A denote the histogram learner of Algorithm 2. For two non-random x, x′ ∈ Rn with dH (x, x′) ≤ 1 we want to show that A is (ε, δ)-DP, i.e., for all measurable S,
P (A(x) ∈ S) ≤ eεP (A(x′) ∈ S) + δ. (2)
Remember pˆk = pˆk(x) = 1
n
Pn
i=1 1{xi ∈ Bk} and p ̃k is the corresponding noisy estimate for all
k ∈ Z. We write also pˆ′k := pˆk(x′) and p ̃′k for the noisy estimate. Let M := {k ∈ Z : pˆk ̸= pˆ′k} be
the set of bins affected by the change of the single entry between x and x′. As only one pair (xj, x′j) differs, we have |M | ≤ 2. For k, l ∈ M three cases occur:
Case 1: xj, x′j are in the same bin Bk. Case 2: xj, x′j are in different bins Bk, Bl where pˆk = 1
n , pˆ′k = 0 and pˆl = 0, pˆ′l = 1
n.
Case 3: xj, x′j are in different bins Bk, Bl where pˆk, pˆ′k, pˆl, pˆ′l > 0.
For all other k ∈ M c, p ̃k and p ̃′k are equal in distribution implying constants (0, 0) in Equation (2) for this part of the output of A. It hence suffices to show DP for the remaining k in the three cases.
For Case 1 the output of A is unchanged and we have P (A(x) ∈ S) = P (A(x′) ∈ S) for all measurable sets S. This yields Equation (2) with constants (0, 0).
For Case 2 when pˆl = 0, by definition of A, p ̃l = 0. With t = 2
εn log( 2
δ)+ 1
n we then have
P (p ̃l ̸= p ̃′
l) = P (p ̃′
l ̸= 0) = P ({p ̃′
l ̸= 0} ∩ {pˆ′
l + ξk < t}) + P ({p ̃′
l ̸= 0} ∩ {pˆ′
l + ξk ≥ t})
= 0 + P pˆ′
l + ξk ≥ 2
εn log 2
δ +1
n
= P ξk ≥ 2
εn log 2
δ ≤δ
2.
By a symmetry argument we also have P (p ̃k ̸= p ̃′k) ≤ δ
2 . A union bound yields P(A(x) ̸= A(x′)) =
P({p ̃l ̸= p ̃′l} ∪ {p ̃k ̸= p ̃′k}) ≤ δ. Now, we can show Equation (2) with constants (0, δ) as follows:
P (A(x) ∈ S) = P ({A(x) ∈ S} ∩ {A(x) = A(x′)}) + P ({A(x) ∈ S} ∩ {A(x) ̸= A(x′)})
≤ P (A(x′) ∈ S) + δ.
For Case 3 we first note that the sensitivity of pˆk(·) is 1/n. Indeed, for all k ∈ Z and dH (x, x′) ≤ 1:
∆ = sup
x,x′
|pˆk(x) − pˆk(x′)| = sup
x,x′
1
n 1{xj ∈ Bk} − 1{x′
j ∈ Bk} ≤ 1
n.
The noisy statistic pˇk = pˆk + ξk ensures that Equation (2) holds for pˇk with constants (ε, 0) by the
Laplace mechanism, because ξk ∼ Lap(0, b) and b = 2∆
ε =2
εn . Therefore,
p ̃k = pˇk · 1{pˇk ≥ 2
εn log( 2
δ)+ 1
n}
also fulfills Equation (2) with constants (ε, 0) by post-processing.
Proof of Lemma 3.2.
Algorithm 2 is (ε, δ)-DP by Lemma C.1.
34

For utility, we adapt the proof of Lemma 2.3 by Karwa and Vadhan (2018). The triangle inequality and the law of total probability yield the upper bound
P max
k∈Z |p ̃k − pk| > η ≤ P max
k∈Z |p ̃k − pˆk| > η
2 + P max
k∈Z |pˆk − pk| > η
2
= E P max
k∈Z |p ̃k − pˆk| > η
2 Xn + P max
k∈Z |pˆk − pk| > η
2 . (3)
By conditioning on Xn in the first term, we isolate the estimation error due to privacy of the stability-based histogram given a specific realization. Hence, by Lemma C.4 we have
E P max
k∈Z |p ̃k − pˆk| ≥ η
2 Xn ≤ n 1 + eε
δ exp − εnη
4.
For the estimation error of pˆk we then invoke Lemma C.3 under Assumption 2.8. This yields
P max
k∈Z |pˆk − pk| ≥ η
2 ≤ 16
η exp − 2
27
nη3
43ρM 2 .
Plugging both bounds into the inequality (3) shows the desired result.
Proof of Lemma 3.1.
Analogous to the proof of Lemma 3.2. Uses Lemma C.3 under the i.i.d. assumption on the entries of Xn ∈ Rn. Thus, it uses the Dvoretzky-Kiefer-Wolfowitz inequality of Corollary 1 in Massart (1990) instead of Theorem 1.2 by Bobkov and G ̈otze (2010).
Auxiliary Results for Stable Histogram
Theorem C.2. (Theorem 1.2, Bobkov and G ̈otze (2010)) Let X ∼ ν on Rn where ν is a probability
measure fulfilling LSI(ρ). Assume that the average marginal cumulative distribution function F ̄(x) = 1 n
Pn
i=1 P(Xi ≤ x) is M -Lipschitz. Then, for any r > 0
P sup
x∈R
|F ̄(x) − Fˆn(x)| ≥ r ≤ 4
r exp − 2
27
nr3
ρM 2 .
Lemma C.3. Let η > 0 and (Bk)k∈Z be disjoint bins covering [−B, B] ⊆ R. Assume X ∈ Rn
has i.i.d. entries or fulfills Assumption 2.8 with constants (ρ, M ). Let pˆk := 1
n
Pn
i=1 1{Xi ∈ Bk}
be the empirical mass of bin Bk. Then, when estimating the pk = E[pˆk] uniformly over k ∈ Z, the estimation error is
P max
k∈Z |pˆk − pk| ≥ η ≤



2 exp − nη2
2 if X1, . . . , Xn are i.i.d.,
8
η exp − 2
27
nη3
23ρM2 if X fulfills Assumption 2.8.
Proof. Let Fˆn(x) = 1
n
Pn
i=1 1{Xi ≤ x} be the empirical cdf and F ̄(x) = E[Fˆn(x)] the average
marginal cdf. As Xn fulfills Assumption 2.8, Theorem C.2 yields:
P sup
x∈R
|F ̄(x) − Fˆn(x)| ≥ r ≤ 4
r exp − 2
27
nr3
ρM 2 .
35

Let −∞ = x0 < x1 < · · · < x∞ = ∞ be the endpoints of the bins (Bk)k∈Z. Then,
pk = F ̄(xk) − F ̄(xk−1) and pˆk = Fˆn(xk) − Fˆn(xk−1).
Using these relations and a triangle inequality, for all k ∈ Z:
|pˆk − pk| = |F ̄(xk) − F ̄(xk−1) − (Fˆn(xk) − Fˆn(xk−1))|
≤ |F ̄(xk) − Fˆn(xk)| + |F ̄(xk−1) − Fˆn(xk−1))|.
Therefore, Theorem C.2 shows that
P max
k∈Z |pˆk − pk| ≥ η ≤ P ∃k ∈ Z : |F ̄(xk) − Fˆn(xk)| + |F ̄(xk−1) − Fˆn(xk−1))| ≥ η
≤ P sup
x∈R
|F ̄(x) − Fˆn(x)| ≥ η
2 ≤8
η exp − 2
27
nη3
23ρM 2 .
The proof for Xn ∈ Rn with i.i.d. entries is analogous but uses the Dvoretzky-Kiefer-Wolfowitz inequality of Corollary 1 Massart (1990) instead of Theorem C.2 by Bobkov and G ̈otze (2010).
Lemma C.4. Let η, ε > 0 and let (Bk)k∈Z be a disjoint set of bins covering R. Then, for input vector xn ∈ Rn, Algorithm 2 is (ε, δ)-DP and the histogram output p ̃ satisfies:
P max
k∈Z |p ̃k − pˆk| ≥ η ≤ n 1 + eε/2
δ exp − εnη
2.
Proof. Algorithm 2 is (ε, δ)-DP by Lemma C.1.
For utility, we follow the proof of Lemma 2.3 in Karwa and Vadhan (2018) to bound the privacy loss of the stability-based histogram. We perform a case distinction on whether or not pˆk = 0.
Case 1: We have p ̃k = 0 for all k ∈ A := {k ∈ Z : pˆk = 0} by design of Algorithm 2. This yields the trivial bound P (maxk∈A |p ̃k − pˆk| ≥ η) = 0.
Case 2: For the indices k ∈ Ac where pˆk > 0 we have:
P (|p ̃k − pˆk| ≥ η)
= P ({|p ̃k − pˆk| ≥ η} ∩ {pˆk + ξk ≥ t}) + P ({|p ̃k − pˆk| ≥ η} ∩ {pˆk + ξk < t})
= P ({|ξk| ≥ η} ∩ {pˆk + ξk ≥ t}) + P ({|pˆk| ≥ η} ∩ {pˆk + ξk < t})
≤ P (|ξk| ≥ η) + P (ξk < t − η)
= P (|ξk| ≥ η) + P (ξk > η − t) .
Above, the first equality holds as we split the event into two disjoint sets. By definition of Algorithm 2 we have that p ̃k = pˆk + ξk and p ̃k = 0 if p ̃k < t, which justifies the second equality. The inequality holds by inclusion. The last equality holds as the distribution of ξk is symmetric
around zero. Using that ξk ∼ Lap(0, 2
εn ) we see that
P (|ξk| ≥ l) = exp − εnl
2,
36

Furthermore, choosing t = 2
εn log 2
δ +1
n we see that
P (ξk > l − t) = 1
2 exp − εn(l − t)
2
=1
2 exp − εnl
2 exp εn
2
2
εn log 2
δ +1
n
= eε/2
δ exp − εnl
2
Plugging both into the bound, we have
P (|p ̃k − pˆk| ≥ η) ≤ 1 + eε/2
δ exp − εnη
2.
By a union bound over all k ∈ Z and using that only n of the probabilities can be non-zero,
P max
k∈Z |p ̃k − pˆk| > η ≤ X
k∈Z
P (|p ̃k − pˆk| > η) ≤ n 1 + eε/2
δ exp − εnη
2.
C.2 Proofs for Private Projection Interval
Proof of Lemma 3.4.
The privacy of Algorithm 3 follows from that of Algorithm 2, shown in Lemma C.1.
For utility, by Lemma 3.2 with η = 1/16 we have that
P max
k∈Z |p ̃k − pk| ≤ 1
16 ≥ 1 − 1 + eε
δ n exp − εn
4 · 16 − 16
η exp − 1
864
n
163ρM 2
=1−O n
δ · e−κnε ∨ e−κ′n .
Here, we suppress the constant ρM 2 in the big-O notation, use that δ ≤ eε for all ε > 0. Combining the guarantee above with the (τ, γ)∞-concentration of Xn allows us to call Lemma C.5 to get
P ˆm ∈
h
x0 ± 2τ
i
≥1−O n
δ · e−κnε ∨ e−κ′n .
The proof under Assumption 2.7 is analogous but uses Lemma 3.1 instead of Lemma 3.2.
Proof of Corollary 3.6.
As Xi are sub-Gaussian with variance proxy σ2
P (|Xi − μ| > t) ≤ 2 exp − t2
2σ2 =: γ
n.
Hence, Xn is (τ, γ)μ∞-concentrated with τ = p2σ2 log(2n/γ). Under Assumption 2.7 by Lemma 3.4
P ˆm ∈
h
μ ± 2p2σ2 log(2n/γ)
i
≥1−O n
δ · e−κnε ∨ e−κ′n .
This holds under the condition that γ ∈ (0, 1 ∧ n
4 ).
37

Auxiliary Results for Private Projection Intervals
Lemma C.5. Let γ ∈ (0, 1 ∧ n
4 ) and let Xn ∈ Rn be (τ, γ)x∞0 -concentrated. Assume there is a
histogram estimator A that outputs (. . . , p ̃−2, p ̃−1, p ̃0, p ̃1, p ̃2, . . . ) s.t. w.p. at least 1 − α we have maxk∈Z |p ̃k − pk| ≤ 1/16. Then, with probability at least 1 − α the midpoint ˆm in Algorithm 3 fulfills
ˆm ∈
h
x0 ± 2τ
i
.
Proof. By (τ, γ)∞-concentration, for all i ∈ [n] with probability at least 1 − γ/n =: 1 − α we have Xi ∈ I := [x0 ± τ ]. We construct a set S of bin-indices k ∈ Z whose bins cover I:
S := {k ∈ Z : I ∩ Bk ̸= ∅}.
Note that given the binwidth 2τ we have |S| ≤ 2. Since bins in S cover I, by a union bound
X
k∈S
pk = 1
n
n
X
i=1
X
k∈S
P(Xi ∈ Bk) ≥ 1
n
n
X
i=1
P(
[
k∈S
{Xi ∈ Bk})
=1
n
n
X
i=1
P(Xi ∈ [
k∈S
Bk) ≥ 1
n
n
X
i=1
P(Xi ∈ I) = 1
n
n
X
i=1
P(|Xi − x0| ≤ τ ) ≥ 1 − α. (4)
By the pigeon hole principle, i.e., a lower bound by the uniform distribution over the |S| bins,
∃k⋆ ∈ S such that pk⋆ ≥ 1 − α
|S| ≥ 1 − α
2 . (5)
At the same time for all k ∈ Sc
pk = 1
n
n
X
i=1
P(Xi ∈ Bk) ≤ 1
n
n
X
i=1
P(Xi ∈ R \ I) ≤ 1
n
n
X
i=1
P(|Xi − x0| ≥ τ ) ≤ α. (6)
We now translate the bounds on pk above into bounds on p ̃k. If there is an η such that
P (∀k ∈ Z : p ̃k ∈ [pk ± η]) = P max
k∈Z |p ̃k − pk| ≤ η ≥ 1 − α,
then using (5) and (6) we have p ̃k⋆ ≥ pk⋆ − η ≥ 1−α
2 − η for k∗ ∈ S and p ̃k ≤ pk + η ≤ α + η for all
k ∈ Sc. To ensure that any such k⋆ is selected in the arg max, we need p ̃k⋆ > p ̃k for all k ∈ Sc. This holds if:
1−α
2 − η > α + η ⇔ α < 1 − 4η
3.
Since by assumption η = 1/16, the last condition becomes α < 1/4 and it holds as α = γ/n and we assume that γ < n/4. Hence, with probability at least 1 − α we select kˆ ∈ S. The center of Bk for any k ∈ S can at most be τ away from I. The distance from I’s endpoints to x0 is also at most τ . A triangle inequality recovers | ˆm − x0| ≤ 2τ .
38

D Proofs of Section 4
Proof of Lemma 4.1.
The private midpoint estimator of Algorithm 3 is ( ε
2 , δ)-DP by Lemma 3.4 as we call it with ε
2
in Algorithm 4. Further, the Laplace mechanism therein is ( ε
2 , 0)-DP by Theorem 2.3. Therefore,
algorithm A is (ε, δ)-DP through basic composition in Theorem 2.4.
For utility, by Lemma 3.4 under Assumption 2.7 or 2.8 we have
P ( ˆm ∈ [x0 ± 2τ ]) ≥ 1 − O(n/δ · e−κnε ∨ e−κ′n).
Hence, by an application of Lemma D.2 with C = 2, the event E := {∀i ∈ [n] : Π[ ˆm±3τ](Xi) = Xi}
has probability at least 1 − γ − O(n/δ · e−κnε ∨ e−κ′n) and
A(X) · 1{E} = X ̄n + ξ · 1{E}, almost surely.
Lemma D.1. Algorithm 5 denoted by A is (ε, δ + ρ)-DP for δ, ρ, ε ∈ (0, 1). Let γ ∈ (0, 1 ∧ n
4 ) and
Xn ∈ Rn×d be (τ, γ)x∞0 -concentrated. Make Assumption 2.7 or 2.8 s.t. ρM 2 ≲ 1. Then, the event
E := {∀i ∈ [n], j ∈ [d] : ΠRj (Xij) = Xij} has probability at least 1 − dγ − O(d2n/δ · e−κnε′ ) and a.s.
A(X) · 1{E} = X ̄n + Ξ · 1{E}, where Ξ ∼ Lap 0, 12τ
nε′ Id and ε′ = ε/p8d log(1/ρ).
Proof. Since the d one-dimensional mean estimators fulfill (ε, δ)-DP, the coordinate-wise multidimensional estimator is private by advanced composition in Theorem 2.4. Thus, we use the privacy parameters ε′, δ′, ρ defined in Algorithm D.1. Note that this is where ρ occurs.
Xn is (τ, γ)x∞0 -concentrated. Applying Algorithm 4 per dimension with (X·nj, τ, ε′, δ′), by Lemma 4.1
Ej := {∀i ∈ [n] : ΠRj (Xij) = Xij} has probability at least 1 − γ − O(n/δ · e−κnε′ ∨ e−κ′n) and
A1(X·nj) · 1{Ej} = 1
n
n
X
i=1
Xij + ξj
!
· 1{Ej}, almost surely,
where we denote the output of Algorithm 4 by A1. By Lemma D.3 with h = 1 and b = 12τ
nε′ ,
E := {∀j ∈ [d], i ∈ [n] : ΠRj (Xij) = Xij} has probability at least 1 − dγ − O(dn/δ′ · e−κnε′ ) and a.s.
A(Xn) · 1{E} = 1
n
n
X
i=1
X⊤
i· + Ξ
!
· 1{E}, with Ξ := (ξ1, ..., ξd)⊤.
Because the ξj are i.i.d. Laplace random variables, Ξ ∼ Lap(0, 12τ
nε Id). We now recover the statement
using that X ̄n = 1
n
Pn
i=1 Xi⊤· and δ′ = δ/d.
Auxiliary Results for Mean Estimators
The statements of the following Lemma D.2 and Lemma D.3 are general enough to incorporate both the central and local model, with h = 1 and h = n, respectively. We provide these general versions to highlight that both models of DP can be treated in a unified way.
39

Lemma D.2. Let Xn ∈ Rn be (τ, γ)∞-concentrated around x0 ∈ R. Let algorithm A ̃ output a
midpoint ˆm s.t. ˆm ∈ [x0 ± Cτ ′] with probability at least 1 − α. Denote Algorithm 4 calling A ̃ in Line 1 of A. Then, the event E := {∀i ∈ [n] : Π[ ˆm±τ+Cτ′](Xi) = Xi} has probability at least 1 − γ − α and
A(Xn) · 1{E} = X ̄n + ξ ̄h · 1{E}, almost surely.
Proof. To prove the statement, we note that Xi is only projected if it is more than τ + Cτ ′ away from the midpoint. The triangle inequality gives
|Xi − ˆm| = |Xi − x0 + x0 − ˆm| ≤ |Xi − x0| + |x0 − ˆm|.
Note that (τ, γ)x∞0 -concentration of Xn and a union bound imply that with probability at least 1 − γ
we have that |Xi − x0| ≤ τ for all i ∈ [n]. Furthermore, by our assumption mˆ ∈ [x0 ± Cτ ′] with probability at least 1 − α. Therefore, a union bound shows that with probability at least 1 − γ − α,
|Xi − ˆm| ≤ |Xi − x0| + |x0 − ˆm| ≤ τ + Cτ ′, ∀i ∈ [n].
In other words, P(E) ≥ 1 − γ − α. The almost sure equality on E holds since there
A(Xn) = 1
n
n
X
i=1
ΠIˆ(Xi) + ξ ̄h = X ̄n + ξ ̄h.
Lemma D.3. Let A1 : Rn → R be an estimator of x0 ∈ R with arguments (X·nj, τ, ε, δ) for any
j ∈ [d] where τ, ε, δ > 0 and Xn ∈ Rn×d. Assume that for h ∈ N, on an event Ej that has probability at least 1 − α, we almost surely have
A1(X·nj) · 1{Ej} = 1
n
n
X
i=1
Xij + 1
h
h
X
l=1
ξlj
!
· 1{Ej}, with i.i.d. ξlj ∼ Lap(0, b).
Let A be Algorithm 5 calling A1 in Line 3. Then, E = Td
j=1 Ej has probability at least 1 − dα and
A(Xn) · 1{E} = 1
n
n
X
i=1
X⊤
i· + 1
h
h
X
l=1
Ξl
!
· 1{E}, with Ξl = (ξl1, ...ξld)⊤.
Proof. By assumption the one-dimensional mean estimator applied to X·nj is a noised version of the
empirical mean on Ej. We apply the mean estimator A1 per dimension with arguments (X·nj, τ, ε, δ)
to form the multivariate estimator A. We then combine the guarantees per coordinate through a union bound over j ∈ [d]. Concretely, on the event Ej with P(Ej) ≥ 1 − α:
A(X·nj ) = 1
n
n
X
i=1
Xij + 1
h
h
X
l=1
ξlj .
Letting E = Tn
j=1 Ej we see that an union bound over E1c, . . . , Ec
d gives P(E) ≥ 1 − dα. Due to the coordinate-wise construction of A this recovers the statement.
40

Remark D.4. Lemma D.3 is essentially analogous to Levy et al. (2021, Theorem 2) by Lemma D.5 which implies that A(Xn) ∼β X ̄n + Ξ, where X ∼β Y means that the total variation distance between the distributions of X and Y is smaller or equal to β.
Lemma D.5. Let X, Y be two random variables on (Ω, Σ, μ) and (Ω, Σ, ν), respectively. Let there be an event E on which X = Y and P(E) ≥ 1 − β. Then, X ∼β Y , i.e., X and Y are β-close.
Proof. To show that X ∼β Y we need to show the inequality below:
dT V (μ, ν) = sup A∈Σ
|μ(A) − ν(A)| = sup A∈Σ
|P(X ∈ A) − P(Y ∈ A)| ≤ β.
We know that X(ω) = Y (ω) for all ω ∈ E ⊂ Ω. Hence, for all A ∈ Σ we have P({X ∈ A} ∩ E) = P({Y ∈ A} ∩ E). To use this equality, we decompose the probabilities in the TV-distance as follows:
P(X ∈ A) = P({X ∈ A} ∩ E) + P({X ∈ A} ∩ Ec),
P(Y ∈ A) = P({Y ∈ A} ∩ E) + P({Y ∈ A} ∩ Ec).
Plugging the decompositions into dT V (μ, ν) and we get
dT V (μ, ν) = sup A∈Σ
|P({X ∈ A} ∩ E) + P({X ∈ A} ∩ Ec) − P({Y ∈ A} ∩ E) − P({Y ∈ A} ∩ Ec)|
= sup A∈Σ
|P({X ∈ A} ∩ Ec) − P({Y ∈ A} ∩ Ec)|
≤ sup A∈Σ
max {P({X ∈ A} ∩ Ec), P({Y ∈ A} ∩ Ec)}
≤ P(Ec) ≤ β.
D.1 Proofs of Theoretical Guarantees
D.1.1 Proof of Finite Sample Bound
Proof of Theorem 4.2.
The privacy guarantee follows from Lemma D.1. This proof directly follows from Lemma D.6. To apply it, we use that by Lemma D.1 there is an event E that has probability at least 1 − dγ −
O(d2n/δ · e−κnε′ ∨ e−κ′n) s.t. almost surely,
A(Xn) · 1{E} = X ̄n + Ξ · 1{E}, where Ξ ∼ Lap 0, 12τ
nε′ Id .
Applying Lemma D.6 with h = 1, with probability at least 1 − α − dγ − O(d2n/δ · e−κnε′ ∨ e−κ′n),
∥A(Xn) − μ∥2 ≤ X ̄n − x0 2 + 12τ
nε′
√2d + p4 log(3/α)2
= X ̄n − x0 2 + 12τ
r
16d2 log(1/ρ)
n2ε2 +
r
32d log(1/ρ) log(3/α)2 n2ε2
!
≲ X ̄n − x0 2 + τ
r
d2 log(1/ρ) log(3/α)2
n2ε2 .
The statement is obtained using that e−κ′n ≤ e−κ′nε′ as ε < 1 and setting α = dγ.
41

Lemma D.6 below is general enough to handle both the central and local model of DP with h = 1 and h = n, respectively.
Lemma D.6. Let A : Rn×d → Rd be an estimator of x0 ∈ Rd, Xn := [X1⊤, . . . , Xn⊤]⊤ ∈ Rn×d and i.i.d. Ξj ∼ Lap(0, bId) for all j ∈ [h]. Assume that on an event E having probability at least 1 − υ,
A(Xn) · 1{E} = (X ̄n +  ̄Ξh) · 1{E}, almost surely.
Then, with probability at least 1 − α − υ
∥A(Xn) − x0∥2 ≤ X ̄n − x0 2 + b
r 2d
h+
r
4 log(3/α)2 h
!
.
Proof. With t = b(p2d/h + p4 log(1/α)2/h), define the events
A := {∥A(Xn) − x0∥2 ≤ ∥X ̄n − x0∥2 + t}) and L := {∥Ξ ̄h∥2 ≤ t}.
Then, on E ∩ L, by a triangle inequality
∥A(Xn) − x0∥2 = ∥X ̄n + Ξ ̄h − x0∥2 ≤ ∥X ̄n − x0∥2 + ∥ ̄Ξh∥2 ≤ ∥X ̄n − x0∥2 + t.
Thus, E ∩ L ⊆ A and by a union bound and Lemma A.6 it holds that
P(A) ≥ P(E ∩ L) = 1 − P(Ec ∪ Lc) ≥ 1 − P(Ec) − P(Lc) ≥ 1 − υ − α.
D.1.2 Proof of In-Expectation Bound
As Amˆ (Zn) is constructed per coordinate, the proof reduces to the one-dimensional case of Lemma D.8 where Xn, Zn ∈ Rn. Therein, by iterated expectation and a bias-variance decomposition conditional on Iˆ that collects Zn and the randomness of Algorithm 3:
E[|Amˆ (Zn)(Xn) − μ|2] ≤ E[Var(Amˆ (Zn)(Xn)|Iˆ) + Bias(Amˆ (Zn)(Xn)|Iˆ)2].
The conditional variance is bounded easily, because Iˆ, Xn and Ξ are independent and the projection is a contraction. Our main technical innovation is a bound on the conditional bias. This is straightforward for Xi ∈ [−B, B], since then similar to Appendix B.1 in Duchi et al. (2018),
E[Bias(Amˆ (Zn)(Xn)|Iˆ)2] ≲ E[E[|Xi − ˆm|2|Iˆ] · P(Xi ∈/ Iˆ|Iˆ)] ≤ B2 · P(Xi ∈/ Iˆ).
Our contribution is to avoid the boundedness assumption in the argument above. In particular, this involves handling the failure event of the private midpoint estimator in Algorithm 3 caused by the stable histogram outputting p ̃ = 0. On this event with exponentially small probability in nε as shown in Lemma D.10 in Appendix D.1.2, the MSE is bounded by ∥μ∥22. When the private midpoint algorithm does not fail, we exploit the design of the stable histogram estimator in Algorithm 2 to bound the bias-
. Concretely, we use that the midpoint mˆ (Zn) can at most be of order τ away from one of the Xi and can thus be controlled using maximal inequalities.
42

Proof of Theorem 4.3.
The estimator Amˆ (Zn) used in this theorem differs from the one in Algorithm 5 only by computing the midpoint ˆm := ˆm(Zn) ∈ Rd using an additional independent dataset Zn instead of Xn.
The estimator Amˆ (Zn) is private by reasoning analogous to Theorem D.1.
By definition of the MSE of an estimator, we have the first line in the following:
MSE(Amˆ (Zn)) := E[∥Amˆ (Zn)(Xn) − μ∥22] =
d
X
j=1
E[|A1,mˆ (Zn
·j)(X·nj ) − μj |2]
≲
d
X
j=1
ρ log(4n) 1
n+ 1
n2(ε′)2 + n
δ′ecnε′/(2·43) + μj2
δ′ecnε′
!
≲ dρ log(4n) 1
n + d log(1/ρ)
n2ε2 + dn
δecnε′/(2·43) + d∥μ∥22
δecnε′
≲ dρ log(4n) 1
n + d log(1/ρ)
n2ε2 + dn
δecnε′/(2·43) + d∥μ∥22
δecnε′/43 .
The first inequality holds by Lemma D.8 that is applicable as Amˆ (Zn) is constructed from coordinatewise estimators A1,mˆ (Zn
·j) specified in Algorithm 4 with the midpoints ˆmj computed on Z·nj and the
Winsorized means computed on X·nj. The privacy parameters
ε′ = ε/p8d log(1/ρ) < 1 and δ′ = δ/d
are adjusted according to advanced composition in Theorem 2.4, which yields the second to last inequality. Finally, the last inequality holds, because c ≥ c/43. In the statement κ := c/43.
Corollary D.7. Let Amˆ (Zn) denote Algorithm 5 with midpoint ˆm(Zn). Amˆ (Zn) is (ε, δ)-DP for
ε, δ ∈ (0, 1). Let Xn, Zn ∈ Rn×d have rows with mean μ ∈ Rd s.t. ∥μ∥2∞ ≲ ρneκnε′/2. Make As
sumption 2.7 with ρ-sub-Gaussian entries or Assumption 2.8 s.t. ρM 2 ≲ 1. For δ ∈ (nε′/eκnε′ , 1/n],
E[∥Amˆ (Zn)(Xn) − μ∥22] ≲ dρ log(4n) 1
n + d log(2/δ)
n2ε2 .
Proof. By Theorem 4.3 with ρ = δ and using that ∥μ∥22 ≤ d∥μ∥2∞ ≲ dρneκnε′/2 we have
E[∥Amˆ (Zn)(Xn) − μ∥22] ≲ dρ log(4n) 1
n + d log(1/ρ)
n2ε2 + dn
δeκnε′/2 + d∥μ∥22
δeκnε′
≲ dρ log(4n) 1
n + d log(1/ρ)
n2ε2 + dn
δeκnε′/2 + d2ρn
δeκnε′/2
≲ dρ log(4n) 1
n + d log(1/ρ)
n2ε2 + d
δ2eκnε′/2 .
Here, for the last inequality we use that δ ≤ 1/n and 1 ≤ log(4n). We now choose δ s.t. the second dominates the third term. Note that ε′ ≍ ε/pd log(1/ρ) and thus we require
d
δ2eκnε′/2 ≲ d
(nε′)2 ⇔ δ ≳ nε′
eκnε′/4 .
The statement then follows by setting ρ = δ and δ is replaced by δ/2 to obtain (ε, δ)-DP.
43

Lemma D.8. Let Amˆ (Zn) denote Algorithm 4 with midpoint ˆm computed on Zn ∈ Rn. Amˆ (Z) is (ε, δ)-DP for ε, δ ∈ (0, 1). Let Xn ∈ Rn fulfill Assumption 2.7 and have ρ-sub-Gaussian entries or Assumption 2.8 s.t. ρM 2 ≲ 1. If Zn is an independent copy of Xn and choosing τ 2 ≍ ρ log(4n),
E[|Amˆ (Zn)(Xn) − μ|2] ≲ ρ log(4n) 1
n+ 1
n2ε2 + n
δecnε/(2·43) + μ2
δecnε .
Proof. Algorithm 5 is private by reasoning analogous to Lemma 4.1.
Let the the output of Algorithm 3 on Zn be the projection interval Iˆ := Iˆ(Zn). For brevity, define the estimator T and its noise-free version T0 as
T := Amˆ (Zn)(Xn) = 1
n
n
X
i=1
ΠIˆ(Xi) + ξ and T0 := 1
n
n
X
i=1
ΠIˆ(Xi).
This construction of T ensures that Xn and Iˆ are independent and simplifies the analysis. By definition of MSE(T ), iterated expectation and a bias-variance decomposition applied to the conditional mean squared error E[|T − μ|2|Iˆ] we obtain
MSE(T ) := E[|T − μ|2] = E[E[|T − μ|2|Iˆ]] = E[E[|T − E[T |Iˆ]|2|Iˆ] + |E[T |Iˆ] − μ|2]
= E[Var(T |Iˆ) + Bias(T |Iˆ)2].
We now bound the conditional variance and bias of T separately. For the conditional variance, by the mutual independence of ξ, Xn and Iˆ and the variance of a Laplace random variable
Var(T |Iˆ) = Var(T0 + ξ|Iˆ) = Var(T0|Iˆ) + Var(ξ)
= Var(T0|Iˆ) + 2b2 ≤ ρ
n + 2b2 ≲ ρ
n + τ2
n2ε2 .
Above, the inequality holds by Corollary D.12 or D.11 which are both applicable, because we condition on Iˆ that is independent of Xn. Further, we use that b ≍ τ /(nε).
It remains to upper bound the conditional bias of T . For the following we use that E[ξ] = 0, ξ, Iˆ are independent and Jensen’s inequality:
Bias(T |Iˆ)2 := |E[T |Iˆ] − μ|2 = |E[T0|Iˆ] + E[Ξ] − μ|2
= |E[T0 − X ̄n|Iˆ]|2 = E
"
1 n
n
X
i=1
(ΠIˆ(Xi) − Xi)|Iˆ
#2
≤1
n
n
X
i=1
E[|ΠIˆ(Xi) − Xi||Iˆ]2.
Note that the distance between Xi and ΠIˆ(Xi) is upper bounded as
|ΠIˆ(Xi) − Xi| ≤

 
 
0 if Xi ∈ Iˆ
Xi − ( ˆm + 3τ ) if Xi ∈/ Iˆ and Xi > ˆm
ˆm − 3τ − Xi if Xi ∈/ Iˆ and Xi < ˆm.
These three cases can be combined into the following bound
|ΠIˆ(Xi) − Xi| ≤ (|Xi − ˆm| − 3τ ) · 1{Xi ∈/ Iˆ} ≤ |Xi − ˆm| · 1{Xi ∈/ Iˆ}.
44

We introduce the event Ezero := {∀k ∈ Z : p ̃k = 0} on which the histogram fails. On Ezero we have
that Iˆ := [±3τ ] and otherwise Iˆ := [ ˆm ± 3τ ]. Distinguishing both cases, for each index i ∈ [n],
E[|ΠIˆ(Xi) − Xi||Iˆ]2 ≤ E[|Xi − ˆm| · 1{Xi ∈/ Iˆ}|Iˆ]2
= E[|Xi| · 1{Xi ∈/ Iˆ} · 1{Ezero} + |Xi − ˆm| · 1{Xi ∈/ Iˆ} · 1{Ec
zero}|Iˆ]2
≤ E[|Xi| · 1{Ezero} + |Xi − ˆm| · 1{Ec
zero} · 1{Xi ∈/ Iˆ}|Iˆ]2
≲ E[|Xi| · 1{Ezero}|Iˆ]2
| {z }
T1
+ E[|Xi − ˆm| · 1{Ec
zero} · 1{Xi ∈/ Iˆ}|Iˆ]2
| {z }
T2
.
Using the Cauchy-Schwarz inequality, the independence of Xi, Iˆ and Var(Xi) ≤ ρ which holds for ρ-sub-Gaussian random variables (Vershynin, 2025, Exercise 2.40), we obtain the bound
T1 = E[|Xi| · 1{Ezero}|Iˆ]2 ≤ E[|Xi|2] · E[1{Ezero}2|Iˆ] ≤ (ρ + μ2) · P(Ezero|Iˆ).
Taking expectation, using Lemma D.10 and that δ, ε < 1 with c > 0 that remains the same throughout the whole proof, we have
E[T1] ≤ (ρ + μ2) · E[P(Ezero|Iˆ)] = (ρ + μ2) · P (Ezero) ≲ (ρ + μ2) · 1/δ · e−cnε.
Similarly, for T2 the Cauchy-Schwarz inequality yields
T2 = E[|Xi − ˆm| · 1{Ec
zero} · 1{Xi ∈/ Iˆ}|Iˆ]2 ≤ E[(|Xi − ˆm| · 1{Ec
zero})2|Iˆ]
| {z }
T3
· E[1{Xi ∈/ Iˆ}2|Iˆ]
| {z }
T4
.
We bound T3 via a triangle inequality. By independence of Xi, Iˆ and because ρ ≲ τ 2 we have
Var(Xi|Iˆ) = Var(Xi) ≤ ρ ≤ 2τ 2. Therefore,
T3 := E[|Xi − ˆm|2 · 1{Ec
zero}|Iˆ] ≤ E[(|Xi − μ| + |μ − ˆm|)2|Iˆ] · 1{Ec
zero}
≲ (E[|Xi − μ|2|Iˆ] + E[|μ − ˆm|2|Iˆ]) · 1{Ec
zero}
≤ Var(Xi|Iˆ) + E[|μ − ˆm|2|Iˆ] · 1{Ec
zero}
≤ ρ + |μ − ˆm|2 · 1{Ec
zero}
≲ τ 2 + max
i∈[n] |μ − Zi|2.
Above, the last inequality holds for the following reason. By design of Algorithm 3 and Algorithm 2 that compute ˆm, on Ezcero any bin Bk with p ̃k > 0 must have at least one Zi inside. Bins have width 2τ . Hence, the midpoint mk must be less than τ away from any Zi ∈ Bk. The same holds for ˆm, the center of Bk with the biggest p ̃k. This reasoning deterministically yields the last inequality:
min
i∈[n] Zi − τ ≤ ˆm ≤ max
i∈[n] Zi + τ, ⇒ |μ − ˆm| ≤ max
i∈[n] |μ − Zi| + τ,
⇒ |μ − ˆm|2 ≤ 2 max
i∈[n] |μ − Zi|2 + 2τ 2.
To bound T4 we again use that Xi and Iˆ are independent. Observe that under Assumption 2.8, by Theorem 2.6 applied with f (x) := xi that is 1-Lipschitz, the Xi are sub-Gaussian. Hence, we have
45

P(|Xi − μ| ≥ τ ) ≤ γ/n for τ 2 ≍ ρ log(2n/γ). Then, by a triangle inequality
T4 = E[1{Xi ∈/ Iˆ}|Iˆ] = P |Xi − ˆm| > 3τ |Iˆ
≤ P |Xi − μ| ≥ τ |Iˆ + P |μ − ˆm| > 2τ |Iˆ
≤ P (|Xi − μ| ≥ τ ) + 1{ ˆm ∈/ [μ ± 2τ ]}
≤ γ/n + 1{ ˆm ∈/ [μ ± 2τ ]}.
For convenience, define Ebad := { ˆm ∈/ [μ ± 2τ ]} and Mnp := maxi∈[n] |Zi − μ|p for p ≥ 1. As the
maximum is monotone, (Mn1)p = Mnp for such p. To control E[Bias(T |Iˆ)2] we now bound T3T4 in
expectation using the Cauchy-Schwarz inequality and the fact that 1{·} = 1{·}2:
E[T3T4] ≲ E (τ 2 + M 2
n) · (γ/n + 1{Ebad})
= γ/n · τ 2 + E[M 2
n] + τ 2 · P (Ebad) + E[M 2
n · 1{Ebad}]
≤ τ 2 · (γ/n + P (Ebad)) + γ/n · E[M 2
n] + pE[Mn4] · P(Ebad).
Again, using that the Xi are sub-Gaussian, by Corollary D.13, Lemma 3.4 and since ε < 1 we have
E[M 2
n] ≲ ρ log(2n), E[M 4
n] ≲ ρ2 log(2n)2 and P(Ebad) ≲ n
δecnε/43 .
Plugging the above bounds into E[T3T4] and using that 1 ≤ n/δ and e−κnε ≤ e−κnε/2 yields
E[T3T4] ≲ τ 2 · γ
n+ n
δecnε/43 + γ
n · ρ log(2n) + ρ log(2n) ·
rn
δecnε/43
≲ τ2 · γ
n+ n
δecnε/(2·43) .
Collecting terms we have thus obtained the conditional bias bound to follow:
E[Bias(T |Iˆ)2] ≤ 1
n
n
X
i=1
E[E[|ΠIˆ(Xi) − Xi||Iˆ]2] ≤ 1
n
n
X
i=1
E[T1] + E[T3T4]
≲ μ2
δecnε + τ 2 γ
n+ n
δecnε/(2·43) .
The bounds on the conditional variance and bias then imply that
MSE(T ) = E[Var(T |Iˆ) + Bias(T |Iˆ)2]
≲ρ
n + τ2
n2ε2 + τ 2 γ
n+ n
δecnε/(2·43) + μ2
δecnε
≲ τ2 γ + 1
n +1
n2ε2 + n
δecnε/(2·43) + μ2
δecnε .
Plugging in τ 2 ≍ ρ log(2n/γ) and choosing γ = 1/2 recovers the statement.
46

Proofs for Failure of Stable Histogram
Lemma D.9. Fix observations x ∈ Rn and bins (Bk)k∈Z. Define pˆk := 1
n
Pn
i=1 1{xi ∈ Bk} and
assume that pˆk ≥ α with α > 0. Then, the output p ̃k of Algorithm 2 fulfills
P ({p ̃k = 0} ∩ {pˆk ≥ α}) ≤ eε/2
δ · exp − αnε
2.
Proof. By design of Algorithm 2, when p ̃k = 0, straightforward calculations yield
P ({p ̃k = 0} ∩ {pˆk ≥ α}) = P ξk < 2
εn log 1
δ +1
n − pˆk ∩ {pˆk ≥ α}
≤ P ξk < 2
εn log 1
δ +1
n −α
= P ξk > α − 1
n− 2
εn log 1
δ
≤ exp − εn
2 α− 1
n− 2
εn log 1
δ
= eε/2
δ · exp − αnε
2.
Here, we use that −ξk = ξk in distribution and we apply a standard Laplace tail bound.
Lemma D.10. Let γ ∈ (0, 1 ∧ n
4 ) and let Xn ∈ Rn be (τ, γ)x∞0 -concentrated. Then, for Algorithm 2
P (∀k ∈ Z : p ̃k = 0) ≤ eε/2
δ · exp − nε
8+
(2 exp − n
128 if Xn fulfills Assumption 2.7,
64 exp − 2n
483ρM2 if Xn fulfills Assumption 2.8.
Proof. We start by reducing the problem of bounding the probability that all bins are zero to bounding the probability that a bin with high empirical mass is thresholded.
Define Ezero := {p ̃k = 0, ∀k ∈ Z} and Ezkero := {p ̃k = 0}. Note that
P (Ezero) = P (∀k ∈ Z : p ̃k = 0) ≤ P (p ̃l = 0) = P El
zero , for all l ∈ Z.
As we want to apply Lemma D.9, we want to use this for a bin with high mass and accordingly also high empirical mass. By (τ, γ)∞-concentration, for all i ∈ [n] with probability at least 1−γ/n =: 1−α we have Xi ∈ I := [x0 ± τ ]. We construct a set S of bin-indices k ∈ Z that cover I:
S := {k ∈ Z : I ∩ Bk ̸= ∅}.
Note that |S| ≤ 2, (4) and (5) hold, and take k⋆ as in (5).
We will now bound P(Ek⋆
zero) assuming that Xn fulfills the i.i.d. Assumption (2.7). We split it on the event where pˆk⋆ estimates pk⋆ well and where it does not:
P Ek⋆
zero = P E k⋆
zero ∩ max
k∈Z |pˆk − pk| < η + P E k⋆
zero ∩ max
k∈Z |pˆk − pk| ≥ η
≤ P Ek⋆
zero ∩ max
k∈Z |pˆk − pk| < η + P max
k∈Z |pˆk − pk| ≥ η
≤ P Ek⋆
zero ∩ {|pˆk⋆ − pk⋆ | < η} + 2 exp − nη2
2.
47

Here, the last inequality holds by Lemma C.3. On the event Ek⋆
zero ∩ {|pˆk⋆ − pk⋆ | < η} we know that
there is k⋆ ∈ Z s.t. pk⋆ ≥ 1−α
2 and therefore pˆk⋆ > pk⋆ − η ≥ 1−α−2η
2 . When 1−α−2η
2 > 0 we know
that pˆk⋆ > 0 and hence p ̃k⋆ can only be 0 through thresholding. Formally, by Lemma D.9
P Ek⋆
zero ∩ {|pˆk⋆ − pk⋆ | ≤ η} ≤ E P {p ̃k⋆ = 0} ∩ pˆk⋆ ≥ 1 − α − 2η
2 Xn
≤ eε/2
δ · exp − (1 − α − 2η)nε
4
≤ eε/2
δ · exp − (3/4 − 2η)nε
4.
For the last inequality we use that α < 1/4 by assumption. We set η = 1/8 and collect terms:
P (Ezero) ≤ P E k⋆
zero ≤ eε/2
δ · exp − nε
4 · 2 + 2 exp − n
2 · 82 .
The proof under Assumption 2.8 is analogous.
Auxiliary Results for Asymptotic Analysis
Corollary D.11. Let Xn ∈ Rn fulfill Assumption 2.8 with constants (ρ, ∞). For a fixed closed convex set C ⊆ R and the L2-projection ΠC (x) := arg miny∈C |x − y|2 we have
Var 1
n
n
X
i=1
ΠC (Xi)
!
≤ρ
n.
Proof. Since Xn fulfills Assumption 2.8 with constants (ρ, ∞), the distribution of Xn fulfills LSI(ρ). The non-expansiveness of the L2-projection shows that for all x, y ∈ Rn we have
1 n
n
X
i=1
ΠC (xi) − 1
n
n
X
i=1
ΠC (yi) ≤ 1
n
n
X
i=1
|ΠC (xi) − ΠC (yi)| ≤ 1
n
n
X
i=1
|xi − yi| ≤ √1n ∥x − y∥2.
Thus, f (x) := 1
n
Pn
i=1 ΠC (xi) is 1/√n-Lipschitz. By a Poincar ́e inequality
Var 1
n
n
X
i=1
ΠC (Xi)
!
= Var(f (X)) ≤ ρ · E[∥∇f (X)∥22] ≤ ρ
n.
Corollary D.12. Let Xn ∈ Rn fulfill Assumption 2.7 and have σ2-sub-Gaussian entries. For a fixed closed convex set C ⊆ R and the L2-projection ΠC (x) := arg miny∈C |x − y|2 we have
Var 1
n
n
X
i=1
ΠC (Xi)
!
≤ σ2
n.
Proof. By independence of X1, . . . , Xn we have the equality in the following:
Var 1
n
n
X
i=1
ΠC (Xi)
!
=1
n2
n
X
i=1
Var(ΠC (Xi)) ≤ 1
n2
n
X
i=1
Var(Xi) ≤ σ2
n.
The last inequality holds as Var(Xi) ≤ σ2 for sub-Gaussian Xi (Vershynin, 2025, Exercise 2.40).
48

Corollary D.13. Let Z1, . . . , Zn have mean μ and be σ2-sub-Gaussian. Then,
E[max
i∈[n] |Zi − μ|4] ≲ σ4 log(2n)2 and E[max
i∈[n] |Zi − μ|2] ≲ σ2 log(2n).
Proof. First note that a union bound leads to the following tail-bound:
P max
i∈[n] |Zi − μ| ≥ t = P


[
i∈[n]
{|Zi − μ| ≥ t}

≤ X
i∈[n]
P (|Zi − μ| ≥ t) ≤ 2n exp − t2
2σ2 .
Taking the 4-th power, the change of variables a = t4 ⇔ t2 = √a immediately give us
P max
i∈[n] |Zi − μj |4 ≥ a ≤ 2n exp −
√a
2σ2 .
The desired in-expectation results follows from the integral identity and the tails bounds we have established. Indeed,
E[max
i∈[n] |Zi − μ|4] =
Z∞
0
P max
i∈[n] |Zi − μ|4 ≥ a da ≤ 2n
Z∞
0
exp −
√a
2σ2 da = 16nσ4
The order of this bound can be improved as follows:
E[max
i∈[n] |Zi − μ|4] =
Z∞
0
P max
i∈[n] |Zi − μ|4 ≥ a da
≤
Zb
0
1da +
Z∞
b
2n exp −
√a
2σ2 da
≤ b + 2n 8σ4 + 4σ2√b e−
√b 2σ2
Minimizing over b then yields b = 4σ4 log(2n)2 and the maximal inequality becomes
E[max
i∈[n] |Zi − μ|4] ≤ b + 2n 8σ4 + 4σ2√b e−
√b
2σ2 = 4σ4 log(2n)2 + 8σ4 + 8σ4 log(2n)
2n .
The first statement follows as the above is bounded in order by σ4 log(2n)2. The second statement follows because higher moment bounds imply lower moment bounds by Jensen’s inequality.
D.2 Proofs for Nonparametric Regression
Proof of Lemma 4.9.
Throughout, we extend f by 0 outside of its support [0, 1]. The proof starts with a triangle inequality that lets us decompose the mean absolute error of f, fˆn into bias and mean absolute deviation,
|f (x) − fˆn(x)| ≤ |f (x) − E[fˆn(x)]|
| {z }
Bias(fˆn )
+ |E[fˆn(x)] − fˆn(x)|
| {z }
Mad(fˆn )
.
49

Introducing the integral I := R
R f (t) 1
b K( x−t
b )dt , the bias can be further decomposed by adding and subtracting I and using a triangle inequality:
Bias(fˆn) = |f (x) − E[fˆn(x)]| ≤ |f (x) − I| + |I − E[fˆn(x)]|
(⋆≤) b (Lf μ1(K) + ∥f ∥∞) + Lf ∥K∥∞ + ∥f ∥∞LK
nb .
Here, it remains to establish (⋆). We handle both terms separately, starting as follows:
|f (x) − I| =
Z
R
(f (x) − f (t)) 1
bK t−x
b dt
≤
Z1
0
|f (x) − f (t)| 1
bK t−x
b dt +
Z
R\[0,1]
|f (x)| 1
bK t−x
b dt =: T + Ttail.
By Lipschitzness of f , we obtain the following bound on T :
T=
Z1
0
|f (x) − f (t)| 1
bK t−x
b dt ≤ Lf
Z1
0
|x − t| 1
bK t−x
b dt ≤ bLf μ1(K).
Given the assumption that x ∈ [ζ, 1 − ζ] and the 1-sub-Gaussian tails,
Ttail ≤ ∥f ∥∞
Z
R\[− x
b , 1−x
b]
K(u)du ≤ ∥f ∥∞ · P (|X| ≥ ζ/b) ≤ 2eζ2/b2 ∥f ∥∞ ≤ b∥f ∥∞.
Above, the last inequality holds assuming ζ = bp2 log(2/b). For the second term we need to bound to obtain (⋆), our choice of the Kernel and the zero mean of εi yield
T2 = I − E[fˆn(x)] = 1
b
Z1
0
f (t)K t − x
b dt − 1
nb
n
X
i=1
E[Yi]K xi − x
b
=1
b
Z1
0
f (t)K t − x
b dt − 1
n
n
X
i=1
f (xi)K xi − x
b ≤ Lf ∥K∥∞
nb + ∥f ∥∞LK
nb .
Here, the last inequality is by Lemma D.14. Unlike the deterministic bias bound, bounding the mean absolute deviation requires a probabilistic argument:
Mad(fˆn) = |E[fˆn(x)] − fˆn(x)| = 1
n
n
X
i=1
(f (xi) − Yi) 1
b K xi − x
b =1
n
n
X
i=1
εi
1
b K xi − x
b.
We now show that the Mad(fˆn) is an l-Lipschitz function of εn := (ε1, . . . , εn) with l = O((nb)−1/2).
By the triangle and Cauchy-Schwarz inequality, for all ε, ε′ ∈ Rn we have
1 n
n
X
i=1
ε′
i
1
b K xi − x
b−
n
X
i=1
εi
1
b K xi − x
b ≤1
n
n
X
i=1
(ε′
i − εi) 1
b K xi − x
b
≤1
n
n
X
i=1
|ε′
i − εi|2
!1/2 n
X
i=1
1
b K xi − x
b
!1/2
≤1
n ∥ε′ − ε∥2
pn∥K ∥∞
√b =
r ∥K∥∞
nb ∥ε′ − ε∥2.
50

By log-Sobolev Lipschitz concentration of 2.6 with constants l = p∥K∥∞/nb and σ2max,
P Mad(fˆn) ≥
r
2σ2max∥K∥∞ log(2/α) nb
!
= P Mad(fˆn) ≥ t = exp − t2
2l2σ2max
= α.
On the complement and therefore with probability 1 − α, combining this with our deterministic bound on the bias, we obtain the following bound
|f (x) − fˆn(x)| ≤ b (Lf μ1(K) + ∥f ∥∞) + Lf ∥K∥∞ + ∥f ∥∞LK
nb +
r
2σ2max∥K∥∞ log(2/α)
nb .
We now obtain (τ, γ)∞-concentration from the general statement. As it holds for n = 1 and since fˆi(x) = Yi 1
b K xi−x
b , for any single (xi, Yi) with probability at least 1 − α
|f (x) − fˆ1(x)| ≤ b (Lf μ1(K) + ∥f ∥∞) + Lf ∥K∥∞ + ∥f ∥∞LK
b+
r
2σ2max∥K∥∞ log(2/α)
b.
Since b ≤ 1 ⇔ 1 ≤ 1/b, the statement above yields (τ, γ)∞-concentration of fˆn(x). Thereby,
τ = b (Lf μ1(K) + ∥f ∥∞) + 1
b Lf ∥K∥∞ + ∥f ∥∞LK + p2σ2max∥K∥∞ log(2n/γ) .
Finally, we note that since K is a 1-sub-Gaussian density we have μ1(K) ≤ 1.
Proof of Lemma 4.10.
Define f n := (f (x1), . . . , f (xn))⊤ and D := 1
b diag(Kb(x1), . . . , Kb(xn)), with Kb(t) := K( x−t
b ).
Note that Dii = 1
b Kb(xi) ≤ ∥K∥∞
b . By assumption εn ∼ N (0, Σn) in LSI(σ2max). As the xi are fixed,
Zε := DY = D(f n + εn) = Df n + Dεn, E[Zε] = Df n and Cov(Zε) = DΣnD⊤.
By Gaussian invariance under affine transformations Zε is Gaussian and more concretely Zε ∼ N (Df n, DΣnD⊤). Now, by Example A.2 the log-Sobolev constant of this distribution is given by the operator norm of the covariance matrix which we bound as follows
∥ Cov(Zε)∥op ≤ ∥DΣnD∥op ≤ ∥D∥2
op∥Σn∥op ≤ σ2max∥K∥∞
b2 =: ρ.
Any marginal of Zε is Gaussian with variance σi2 := Var((Zε)i) = Σii/b2 ≥ σ2min/b2. Thus,
dN (x; μi, σ2
i ) ≤ (2πσ2
i )−1/2 ≤ (2πσ2min/b2)−1/2 =: M.
Accordingly, ρM 2 ≲ σ2max/σ2min · ∥K∥∞.
Proof of Corollary 4.11.
In Lemma 4.9 we derived (τ, γ)∞-concentration of fˆn(x) around f (x) with
τ ≲b+ 1
b 1 + pσ2max∥K∥∞ log(2n/γ) ≲ 1
b
pσ2max∥K∥∞ log(2n/γ) =: C
b.
51

There, we also derived a finite sample error bound showing that with probability at least 1 − α,
fˆn(x) − f (x) ≲ b + 1
nb +
r
σ2max∥K∥∞ log(2/α)
nb .
Moreover, we showed in Lemma 4.10 that fˆn(x) fulfills Assumption 2.8. This makes Theorem 4.2 with d = 1 applicable under Assumption 2.8. Thus, via a union bound and setting α = γ, with probability at least 1 − 3γ − O(n/δ · e−κnε),
A(fˆn(x)) − f (x) ≲ fˆn(x) − f (x) + τ
r
log(1/ρ) log(3/γ)2 n2ε2
≲ fˆn(x) − f (x) +
r
C2 log(1/ρ) log(3/γ)2 b2n2ε2
≲b+ 1
nb +
r
σ2max∥K∥∞ log(2/γ)
nb +
r
C2 log(1/ρ) log(3/γ)2
n2b2ε2 .
Modulo logarithms, assuming σ2max ≳ 1 and as 1 ≤ 1/ε matching the second with the fourth term,
A(fˆn(x)) − f (x) ⪅ b + 1
nb + σmax
r1
nb +
r1
n2b2ε2
!
≲ b + σmax
r1
nb +
r1
n2b2ε2
!
.
We call the three terms in the right hand side T1, T2 and T3. To choose the bandwidth b, we balance T1, T2 and T1, T3 separately. For this, we perform a case distinction on whether T2 or T3 dominate:
Case 1: If T2 ≳ T3, i.e., when ε ≳ 1/√nb we balance T1 and T2 as follows:
T1 ≍ T2 ⇔ b ≍ σmax
√nb ⇔ b ≍ σ2max
n
1/3
⇒ ε≳ 1
nσmax
1/3 .
Case 2: If T3 ≳ T2, i.e., when ε ≲ 1/√nb we balance T1 and T3 as follows:
T1 ≍ T3 ⇔ b ≍ σmax
√n2b2ε2 ⇔ b ≍
r σmax
nε ⇒ ε ≲ 1
nσmax
1/3 .
Hence, T2 dominates when ε ≲ (nσmax)−1/3 and otherwise T3. To incorporate both cases, we choose
b ≍ (σ2max/n)1/3∨(σmax/nε)1/2 and plug this into the bound on the rMSE. Doing the case distinction, we obtain the statement by bounding the maximum by the sum of both terms.
Auxiliary Results for Nonparametric Regression
Lemma D.14. (Adjusted from Lemma A.1, Gugushvili and Klaassen (2012)). Let f : [0, 1] → R be Lf -Lipschitz. Further, assume that the kernel K : R → R≥ is LK -Lipschitz. Then, with the mesh xi := i/n for 0 ≤ i ≤ n, for all x ∈ [0, 1],
1 b
Z1
0
f (t)K x − t
b dt − 1
n
n−1
X
i=0
f (xi)K x − xi
b ≤ Lf ∥K∥∞
nb + LK ∥f ∥∞
nb .
If instead of Lipschitzness K(u) := 1
2 1{|u| ≤ 1} then the same holds with LK = 1.
52

Proof. For brevity of notation denote the left hand side of the statement by I and Kb(u) := K x−u
b.
To bound I we use that the xi are a grid on [0, 1] and |xi+1 − xi| = 1/n. Concretely, we first split the integral into intervals [xi, xi+1]. Second, we add and subtract f (t)K(xi) to use a triangle inequality:
I=1
b
n−1
X
i=0
Z xi+1
xi
f (t)Kb(t)dt − 1
n
n−1
X
i=0
f (xi)Kb(xi) ≤ 1
b
n−1
X
i=0
Z xi+1
xi
|f (t)Kb(t) − f (xi)Kb(xi)| dt
≤1
b
n−1
X
i=0
Z xi+1
xi
|f (t)Kb(t) − f (t)Kb(xi)| dt + 1
b
n−1
X
i=0
Z xi+1
xi
|f (t)Kb(xi) − f (xi)Kb(xi)| dt
≤1
b
n−1
X
i=0
Z xi+1
xi
|f (t)| |Kb(t) − Kb(xi)| dt + 1
b
n−1
X
i=0
Z xi+1
xi
|Kb(xi)| |f (t) − f (xi)| dt
≤ LK ∥f ∥∞
b
n−1
X
i=0
Z xi+1
xi
|t − xi| dt + Lf ∥K∥∞
b
n−1
X
i=0
Z xi+1
xi
|t − xi| dt
≤ LK ∥f ∥∞
nb + Lf ∥K∥∞
nb .
Here, the last inequality holds because |t − xi| ≤ 1/n and |xi+1 − xi| = 1/n, and thus
n−1
X
i=0
Z xi+1
xi
|t − xi|dt ≤ 1
n
n−1
X
i=0
[t]xi+1
xi = 1
n
n−1
X
i=0
xi+1 − xi ≤ 1
n
n−1
X
i=0
|xi+1 − xi| = 1
n.
For the special case when K(u) = 1
2 1{|u| ≤ 1} we have
I≤1
b
n−1
X
i=0
Z xi+1
xi
|f (t)| |Kb(t) − Kb(xi)| dt + 1
b
n−1
X
i=0
Z xi+1
xi
|Kb(xi)| |f (t) − f (xi)| dt
≤ ∥f ∥∞
b
n−1
X
i=0
Z xi+1
xi
|Kb(t) − Kb(xi)| dt + Lf ∥K∥∞
nb .
Since K is neither Lipschitz nor continuous we have to make a more direct argument. Note that
1(t, xi) := |Kb(t) − Kb(xi)| = 1
2 |1{x − b ≤ t ≤ x + b} − 1{x − b ≤ xi ≤ x + b}|
=1
2 1{{x − b ≤ t ≤ x + b} or {x − b ≤ xi ≤ x + b}}.
This can only evaluate to 1 at the boundary x − b or x + b and hence 1(t, xi) ̸= 0 only for two xl and xu such that x − b ∈ [xl, xl+1] and x + b ∈ [xu, xu+1]. Thus,
n−1
X
i=0
Z xi+1
xi
|Kb(t) − Kb(xi)| dt ≤
Z xl+1
xl
K(t, xl)dt +
Z xu+1
xu
1(t, xu)dt
≤1
2
Z xl+1
xl
dt +
Z xu+1
xu
dt = 1
n.
Plugging into our bound on I we recover the statement I ≤ ∥f∥∞
nb + Lf ∥K∥∞
nb .
53

E Proofs of Section 5
E.1 Proofs for User-Level Mean Estimation
Proof of Lemma 5.2.
First, we show that μˆn is (τ, γ)∞-concentrated. To justify Remark 5.3, this proof is more elaborate
than necessary, involving marginal log-Sobolev constants. Second, we show the bound on ∥X ̄nT −μ∥2.
By Assumption 2.8 the distribution of X·nj is LSI(ρ) for all j ∈ [d]. For all u ∈ [n] and j ∈ [d], the
(Xu)·j are sub-matrices of X·nj and thus have distributions Duj that are marginals of the distributions
of X·nj. By Lemma A.3 Duj fulfills a log-Sobolev inequality with constant ρ too.
However, because log-Sobolev constants are defined as the smallest constant s.t. a log-Sobolev inequality holds, the log-Sobolev constants ρuj of Duj can be smaller than ρ. Using these and noting
that (μˆu)j = 1
T (Xu)·⊤j 1T , by Lemma 2.11 we have
P |(μˆu)j − μj| ≤
r
2ρuj log(2/α) T
!
≥ 1 − α.
Union bounding over j ∈ [d] and setting α = γ/dn yields (τ, γ)∞-concentration with
τ = max
u∈[n] max
j∈[d]
r
2ρuj log(2dn/γ)
T≤
r
2ρ log(2dn/γ)
T.
The characterization X ̄nT = 1
n (μˆn)⊤1n allows us to invoke the L2-norm result of Lemma 2.11:
P X ̄nT − μ 2 ≤
r
2ρ log(2d/α) nT
!
≥ 1 − α.
Proof of Corollary 5.4.
This result is a direct consequence of Theorem 4.2 under Assumption 2.8. By Lemma 5.2 μˆn is (τ, γ)μ∞-concentrated with τ = p2ρ log(2dn/γ)/T and with probability at least 1 − α
X ̄nT − μ 2 ≤
r
2dρ log(2d/α)
nT .
Setting α = dγ and combing this with Theorem 4.2 via a union bound, with probability at least
1 − 3dγ − O(d2n/δ · e−κnε′ ) we have
∥A(μˆn) − μ∥2 ≲ X ̄nT − μ 2 + τ
r
d2 log(1/ρ) log(3/(dγ))2 n2ε2
≲
r
2dρ log(2/γ)
nT +
r
2ρ log(2dn/γ) T
r
d2 log(1/ρ) log(3/(dγ))2 n2ε2
≲
r
dρ log(2/γ)
nT +
r
d2ρ log(2dn/γ) log(1/ρ) log(3/(dγ))2
T n2ε2 .
54

Proof of Corollary 5.6.
By definition of the per-user means collected in μˆn we have
(μˆu)j = 1
T X⊤
u 1T j = 1
T (Xu)·⊤j 1T = 1
T
T
X
i=1
(Xu)ij .
Under Assumption 2.7 the entries (Xu)ij are ρ-sub-Gaussian and independent. Hence, the mean
(μˆu)j is ρ/T -sub-Gaussian. Under Assumption 2.8 we can use that (μˆu)j is 1/√T -Lipschitz in (Xu)·j and thus by Lemma A.3 its distribution has log-Sobolev constant ρ/T . The same holds for the entries of μˆn
Z. The result then follows immediately from Theorem 4.3 with ρ replaced by ρ/T .
E.2 Proofs for Random Effects Location Model
Proof of Lemma 5.9.
As the noise terms Ug and εut are independent and have zero-mean,
E[Ygut] = E[μ + Ug + εut] = μ,
Var(Ygut) = Var(Ug + εut) = Var(Ug) + Var(εut) = σ2
U + (Σu)tt.
To show that D fulfills a Log-Sobolev inequality, we show that it is Gaussian and derive a bound on the operator norm of its covariance matrix Σn. Entry-wise, Y n is a sum of Gaussian random variables. Since the random variables Ug, εu are mutually independent for all u ∈ [n], g ∈ [G], the joint is Gaussian. It has mean μ1nT and its covariance matrix Σn has the following entries:
Cov(Ygut, Yijk) = Cov(Ug + εut, Ui + εjk)
= Cov(Ug, Ui) + Cov(Ug, εjk) + Cov(εut, Ui) + Cov(εut, εjk)
= Cov(Ug, Ui) + Cov(εut, εjk)
Here, we index with tuples (gut) and (ijk). Depending on the indices there are then four cases:
Case 1: If (gut) ̸= (ijk) we have Cov(Ygut, Yijk) = 0. Case 2: If (gut) = (ijk) we have Cov(Ygut, Yijk) = σ2U + (Σu)tt.
Case 3: If g = i, u ̸= j we have Cov(Ygut, Yijk) = Cov(Ug, Ug) = σ2U . Case 4: If g = i, u = j, t ̸= k we have
Cov(Ygut, Yijk) = Cov(Ug, Ug) + Cov(εut, εuk) = σ2
U + (Σu)tk.
Hence, the covariance matrix Σn and the submatrix ΣgU for a group g of size ng have the form
Σn =

   
Σ1U 0 · · · 0
0 Σ2U · · · 0
0 0 . . . ... 0 0 · · · ΣU
G

   
, ΣU
g = σ2
U 1ngT 1⊤
ngT +

   
Σ1 0 · · · 0 0 Σ2 · · · 0
0 0 . . . ...
0 0 · · · Σng

   
.
Together with the mean μ1nT this explicit form of Σn specifies the Gaussian distribution D := N (μ1nT , Σn). By Example A.2 the log-Sobolev constant of D is therefore ∥Σn∥op or an upper bound thereof. As the operator norm of a block-diagonal matrix is the maximum norm of its blocks,
∥Σn∥op = max
g∈[G] ∥ΣU
g ∥op ≤ max
g∈[G] ∥σ2
U 1ngT 1⊤
ngT ∥op + max
u∈Gg
∥Σu∥op ≤ max
g∈[G] σ2
U · T ng + σ2 .
55

Here, Gg is the collection of users in group g. Now, we show that the marginal densities are bounded. Above we derived E[Ygut] = μ and Var(Ygut) = σ2U + (Σu)tt ≤ σ2U + σ2 =: σY2 . We further know that any marginal of a Gaussian is also Gaussian. Therefore, for all x ∈ R the density of any Ygut is
1
p2πσY2
exp − (x − μ)2
2σY2
≤1
p2πσY2
=: M.
Hence, d
dx F ̄(x) = 1
nT
Pn
u=1
PT
t=1
d
dx P(Ygut ≤ x) ≤ M for all x ∈ R and Assumption 2.8 holds. As a
consequence the matrix Y n ∈ RnT fulfills the user-level log-Sobolev design of Definition 5.1 because it has the required block structure and its entries Ygut have identical mean μ.
Proof of Corollary 5.10.
The result is a direct consequence of Corollary 5.4 enabled by Lemma 5.9.
E.3 Proofs for Longitudinal Linear Regression
Proof of Lemma 5.14.
First, we derive the bias and covariance matrix for a general weighted OLS estimator. Based on this, we show unbiasedness of βˆ, βˆu, and βˆw, βˆwu. Second, we prove the claims for the variances.
We begin reminding the reader of some properties of generalized least squares estimators. Note that for observations Υ = Zθ + ε with noise ε ∈ Rl where ε ∼ N (0, Λ), the generalized least squares estimator θˆ := (Z⊤W Z)−1Z⊤W Υ with weight matrix W ∈ Rp×p and design Z ∈ Rl×p is unbiased for θ. Indeed, for fixed W and Z we have that
E[θˆ] = (Z⊤W Z)−1Z⊤W E[Zθ + ε] = (Z⊤W Z)−1Z⊤W Zθ = θ. (7)
Its covariance matrix can be computed as
Cov(θˆ) = Cov((Z⊤W Z)−1Z⊤W Υ) = (Z⊤W Z)−1Z⊤W ΛW Z(Z⊤W Z)−1. (8)
We note that all the estimators we are interested in can be written in this form, so they are all unbiased. It remains to compute their variance.
Write εn = [ε1, . . . , εn]⊤ ∈ RnT . Since βˆu is an OLS estimator with weight W = IT , design Xu, observations Yu and noise εu ∼ N (0, Σu) we have
E[βˆu] = β, and E[βˆ] = E
"
1 n
n
X
u=1
βˆu
#
=1
n
n
X
u=1
E[βˆu] = 1
n
n
X
u=1
β = β.
Similarly, βˆwu is a weighted OLS estimator with weight W = Σu and therefore
E[βˆwu] = β and E[βˆ] = E
"
1 n
n
X
u=1
βˆwu
#
=1
n
n
X
u=1
E[βˆwu] = 1
n
n
X
u=1
β = β.
We can again apply the general result to obtain the variance of βˆu and βˆwu,
Cov(βˆu) = (X⊤
u Xu)−1X⊤
u ΣuXu(X⊤
u Xu)−1,
Cov(βˆwu) = (X⊤
u Σ−1
u Xu)−1X⊤
u Σ−1
u ΣuΣ−1
u Xu(X⊤
u Σ−1
u Xu)−1 = (X⊤
u Σ−1
u Xu)−1.
56

For u, v ∈ [n], by the independence of εu, εv due to the block-diagonal structure of Σn we have Cov(βˆu, βˆv) = 0. Hence, we can compute the variance of the estimator βˆ as
Cov(βˆ) = Cov 1
n
n
X
u=1
βˆu
!
=1
n2
n
X
u=1
Cov(βˆu) = 1
n2
n
X
u=1
(X ⊤
u Xu)−1X⊤
u ΣuXu(X⊤
u Xu)−1.
A similar variance calcualtion for βˆw leads to
Cov(βˆw) = Cov 1
n
n
X
u=1
βˆwu
!
=1
n2
n
X
u=1
Cov βˆwu = 1
n2
n
X
u=1
X⊤
u Σ−1
u Xu
−1 .
Invoking the general result for the variance of βˆOLS
Cov(βˆOLS) =
n
X
u=1
X⊤
u Xu
!−1 n
X
u=1
X⊤
u ΣuXu
!n X
u=1
X⊤
u Xu
!−1
.
With weight W = (Σn)−1 the same result yields
Cov(βˆwOLS) =
n
X
u=1
X⊤
u Σ−1
u Xu
!−1
.
We are now ready to find the desired variance relations.
(i) Generally, for Σu ̸= σ2Id the Loewner ordering Cov(βˆOLS) ⪯ Cov(βˆ) does not hold, i.e.,
n
X
u=1
X⊤
u Xu
!−1 n
X
u=1
X⊤
u ΣuXu
!n X
u=1
X⊤
u Xu
!−1
̸⪯ 1
n2
n
X
u=1
X⊤
u Xu
−1 X ⊤
u ΣuXu X⊤
u Xu
−1 .
Already when n = 2, T = 3 and p = 2, the inequality above fails for the following example:
X1 =


10 01 00

 , X2 =


√2 0
0 √2 00

 , B1 = I3, B2 = 4 · I3.
We have that X1⊤X1 = I2, X2⊤X2 = 2 · I2, X1⊤B1X1 = I2 and X2⊤B2X2 = 8 · I2. Thus,
Cov(βˆOLS ) = (X1⊤X1 + X2⊤X2)−1(X1⊤B1X1 + X2⊤B2X2)(X1⊤X1 + X2⊤X2)−1
= (3 · I2)−1(I2 + 8 · I2)(3 · I2)−1
= (1/3 · I2)(9 · I2)(1/3 · I2) = I2.
Moreover, we can explicitly compute
Cov(βˆ) = 1/22 · ((X1⊤X1)−1X1⊤B1X1(X1⊤X1)−1 + (X2⊤X2)−1X2⊤B2X2(X2⊤X2)−1)
= 1/4 · (I2I2I2 + (1/2 · I2)(8 · I2)(1/2 · I2))
= 1/4 · (I2 + 2 · I2) = 3/4 · I2.
Overall, we have I2 = Cov(βˆOLS) ̸⪯ Cov(βˆ) = 3/4 · I2.
57

(ii) When restricting to the case Σu = σ2Id, Jensen’s inequality shows that
Cov(βˆOLS) =
n
X
u=1
X⊤
u Xu
!−1 n
X
u=1
X⊤
u ΣuXu
!n X
u=1
X⊤
u Xu
!−1
= σ2
n
X
u=1
X⊤
u Xu
!−1
⪯1
n2
n
X
i=1
σ2 X⊤
u Xu
−1 =
n
X
u=1
X⊤
u Xu
−1 X ⊤
u ΣuXu X⊤
u Xu
−1 = Cov(βˆ).
(iii) When Xu⊤Xu = D ⪰ 0 for all users, we see that
Cov(βˆOLS) = (nD)−1
n
X
u=1
X⊤
u ΣuXu
!
(nD)−1 = 1
n2
n
X
u=1
D−1 X ⊤
u ΣuXuD−1 = Cov(βˆ).
(iv) Applying the Gauss-Markov Theorem to βˆwu as the weighted OLS and βˆu as the other linear unbiased estimator, we have Cov(βˆwu) ⪯ Cov(βˆu). Thus,
Cov(βˆw) = 1
n2
n
X
u=1
Cov(βˆwu) ⪯ 1
n2
n
X
u=1
Cov(βˆu) = Cov(βˆ).
Moreover, Jensen’s inequality shows that
Cov(βˆwOLS) =
n
X
u=1
X⊤
u Σ−1
u Xu
!−1
⪯1
n2
n
X
u=1
X⊤
u Σ−1
u Xu
−1 = Cov(βˆw).
Proof of Lemma 5.15.
We first prove that βˆu is (τ, γ)β∞-concentrated. Second, we derive the concentration of βˆ.
Since βˆu is a linear map of Yu ∼ N (Xuβ, Σu), it follows from (7) and (8) that βˆu ∼ N (β, Σβˆu ) where
Σβˆu = (Xu⊤Xu)−1Xu⊤ΣuXu(Xu⊤Xu)−1. We now bound the operator norm of Σβˆu .
∥Σβˆu ∥op = ∥(X⊤
u Xu)−1X⊤
u ΣuXu(X⊤
u Xu)−1∥op ≤ ∥(X⊤
u Xu)−1∥2
op · ∥X⊤
u ΣuXu∥op
≤ ∥(X⊤
u Xu)−1∥2
op · ∥X⊤
u Xu∥op · ∥Σu∥op ≤ λmax(X⊤
u Xu)/λ2min(X⊤
u Xu) · λmax(Σu).
Writing this in terms of the empirical second moment Mˆu = 1
T Xu⊤Xu and using the bounds θ ⪯
Mˆu ⪯ θ and Σu ⪯ σ2 we obtain an upper bound on the operator norm
∥Σβˆu ∥op ≤ 1
T
λmax(Mˆ u)λmax(Σu)
λ2min(Mˆ u) ≤ θσ2
T θ2 =: ρ.
To show (τ, γ)β∞-concentration we use that βˆu is Gaussian. Example A.2 then implies that its
distribution is LSI(ρ). Hence, using the upper bound on the operator norm, βˆu⊤ ∈ R1×d fulfills
Assumption 2.8 with constants (ρ, ∞) and by Lemma 2.11 we have (τ, γ)β∞-concentration as
P βˆu − β ∞ ≤
r
2θσ2 log(2dn/γ) mθ2
!
≤ γ/n.
58

The desired result follows from Lemma A.5 applied to βˆ1, . . . , βˆn combined with ∥Σβˆu ∥op ≤ ρ.
Concretely, we use that 1
n
Pn
u=1 Σβˆu ⪯ ρ. On top, we exploit that tr(Σβˆu ) ≤ p∥Σβˆu ∥op to obtain
P βˆ − β 2 ≥
r
pθσ2
nT θ2 +
r
2θσ2 log(1/α) nT θ2
!
≤P

 βˆ − β 2 ≥
s
tr(Σβˆu )
n+
r
2ρ log(1/α) n

 ≤ α.
Proof of Corollary 5.16.
By Lemma 5.15 βˆn is the matrix (τ, γ)β∞-concentrated with τ = p2θσ2 log(2pn/γ)/(T θ2) and with probability at least 1 − α it holds that
βˆ − β 2 ≤
r
pθσ2
nT θ2 +
r
2θσ2 log(1/α)
nT θ2 .
Furthermore, assumption 2.7 holds for βˆn as the rows βˆu are independent of each other due to the block structure of Σn. Thus by the concentration derived above with α = pγ combined with
Theorem 4.2 via a union bound, with probability at least 1 − 3pγ − O(p2n/δ · e−κnε′ ),
A(βˆn) − β 2 ≲ βˆ − β 2 + τ
r
p2 log(1/ρ) log(3/(pγ))2 n2ε2
≲
r
pθσ2
nT θ2 +
r
θσ2 log(1/(pγ))
nT θ2 +
r
p2θσ2 log(2dn/γ) log(1/ρ) log(3/(pγ))2
θ2T n2ε2 .
F Proofs of Section 6
F.1 Finding Private Data-Driven Projection Intervals (Local)
Algorithm 9 ProjectionInterval(Xn, τ, ε, δ, B):
Require: Xn ∈ Rn, τ, ε > 0, δ = 0 1: S ← {k ∈ Z : |2τ k| ≤ B}
2: B+
k ← (2τ k ± τ ] ∀k ∈ S
3: p ̃ ← RandomizedHistogram(X, (B+
k )k∈S, ε/2, 0)
4: kˆ ← arg maxk∈S p ̃k
5: ˆm ← 2τ kˆ
6: return [ ˆm ± 3τ ]
Our main application of the randomized histogram is to compute private data-driven projection intervals that we use in our local Winsorized mean estimator. Our approach hereby resembles the one in the central model. In Algorithm 9 we again choose the projection interval as the bin of the histogram that has the highest estimated mass and its two neighboring bins. Because the randomized histogram requires finitely many bins as input, we cannot search for the bin with highest mass over the entirety o-
f R anymore. Instead we restrict ourselves to the interval [−B, B] ⊂ R. For mean estimation, this will impose the assumption that the mean μ ∈ Rd to be estimated fulfills ∥μ∥∞ ≤ B.
59

This boundedness assumption relaxes boundedness assumptions on the single observations Xi as they are made, e.g., by Kent et al. (2024). Yet, it is more restrictive than the boundedness we assume for our in-expectation bound in the central model, because the constant B actually has to be known for the construction of the algorithm and not just during its analysis in expectation. Hence, this peculiarity of the private projection interval estimator shows up in the finite sample MSE-risk bounds for -
our local estimators. These build on top of the estimation guarantee for the center of the projection interval that is given in Lemma F.1 below whose proof we defer for now.
Lemma F.1. Let ε > 0, γ ∈ (0, 1 ∧ n
4 ). Suppose Xn ∈ Rn is (τ, γ)∞-concentrated around x0 ∈
[−B, B] ⊂ R and fulfills Assumption 2.7 or Assumption 2.8 with ρM 2 ≲ 1. Then, Algorithm 9 is (ε, 0)-DP and with probability at least 1 − O(B/τ + 1) · e−κn tanh2(ε/4) ∨ e−κ′n with κ, κ′ > 0:
ˆm ∈
h
x0 ± 2τ
i
.
F.2 Proofs for Randomized Histogram
Proof of Lemma 6.3.
The randomized histogram is private by the reasoning in Lemma F.2.
For the proof of utility, define pˆk := 1
n
Pn
i=1 1{Xi ∈ Bk}. An application of the triangle inequality
|p ̃k − pk| ≤ |p ̃k − pˆk| + |pˆk − pk| and the total law of probability yield:
P max
k∈Z |p ̃k − pk| ≥ η ≤ E P max
k∈Z |p ̃k − pˆk| ≥ η
2 Xn + P max
k∈Z |pˆk − pk| ≥ η
2.
The above isolates the privacy loss of the randomized histogram due to conditioning on Xn. This makes Lemma F.2 applicable and we obtain
E P max
k∈Z |p ̃k − pˆk| ≥ η
2 Xn ≤ 2Nbins · exp − nη2
4 tanh2 ε
4.
The estimation error can now be bounded using Lemma C.3, which gets us
P max
k∈Z |pˆk − pk| ≥ η
2≤



2 exp − nη2
8 if X1, . . . , Xn are i.i.d.,
16
η exp − 2
27
nη3
43ρM2 if X fulfills Assumption 2.8.
The statement is then recovered by collecting terms.
Lemma F.2. Let η, ε > 0. Moreover, let (Bk)k∈[Nbins] be disjoint bins covering [−B, B] ⊂ R. Then,
on input of a fixed vector x ∈ Rn, Algorithm 7 is (ε, 0)-DP and its output p ̃ fulfills:
P max
k∈Z |p ̃k − pˆk| ≥ η ≤ 2Nbins · exp −nη2 tanh2 ε
4.
Proof. The privacy follows from that of the randomized response mechanism. Concretely, for x, x′ ∈ Rn s.t. d(x, x′) ≤ 1 at most two bins can be affected. Basic composition and the (ε, 0)-DP guarantee of Algorithm 6 in Theorem 6.2 yield the claimed privacy. The debiasing step does not affect the privacy guarantee by post-processing.
60

For utility, we first show that the p ̃debiased
k are indeed unbiased for pˆk. For this, let π be the probability that the randomization keeps the data unchanged in Algorithm 6. Then,
E p ̃debiased
k = E p ̃k − (1 − π)
2π − 1 = E [p ̃k] − (1 − π)
2π − 1
(a=) (2π − 1)pˆk + (1 − π) − (1 − π))
2π − 1 = pˆk.
Above, equality (a) holds by linearity of the expectation since
E [p ̃k] = E
"
1 n
n
X
i=1
c ̃ik
#
=E
"
1 n
n
X
i=1
cik · 1{Ui ≤ π} + (1 − cik) · 1{Ui > π}
#
=1
n
n
X
i=1
h
cik · P (Ui ≤ π) + (1 − cik) · P (Ui > π)
i
=1
n
n
X
i=1
h
cik · π + (1 − cik) · (1 − π)
i
=1
n
n
X
i=1
cik(2π − 1) + (1 − π)
= (2π − 1)pˆk + (1 − π).
Note also that
p ̃debiased
k − pˆk = p ̃debiased
k − E p ̃debiased
k = p ̃k − (1 − π))
2π − 1 − E [p ̃k] − (1 − π))
2π − 1 = p ̃k − E[p ̃k]
2π − 1 .
Here, the numerator is a sum of independent terms c ̃ik ∈ [0, 1] minus their expectation since
p ̃k − E[p ̃k] = 1
n
n
X
i=1
c ̃ik − E [c ̃ik] = 1
n
n
X
i=1
cik · 1{Ui ≤ π} + (1 − cik) · 1{Ui > π} − E[c ̃ik].
As the Ui and the c ̃ik are i.i.d., an application of Hoeffding’s inequality yields
P p ̃debiased
k − pˆk ≥ η = P p ̃k − E[p ̃k]
2π − 1 ≥ η = P
Pn
i=1 c ̃ik − E[c ̃ik]
2π − 1 ≥ nη ≤ 2e−nη2(2π−1)2 .
Using that (2π−1)2 = tanh2(ε/4) and union bounding over the Nbins bins recovers the statement.
F.3 Proofs for Private Projection Interval (Local)
Proof of Lemma F.1.
The privacy of Algorithm 9 follows directly from that of Algorithm 7 shown in Lemma F.2.
Algorithm 7 uses bins Bk := (2τ k ±τ ] of width 2τ to cover the interval [−B, B]. Hence, the collection of bins (Bk)k∈S used is of size Nbins ≤ ⌈B/τ ⌉+1 ≤ B/τ +2. With this, under Assumption 2.8 Lemma 6.3 yields the following guarantee:
P max
k∈Z |p ̃k − pk| ≥ 1
16 ≤ B
τ + 2 2 exp − n
4 · 16 tanh2 ε
4 − 162 exp − 1
864
n
163ρM 2
≲B
τ + 1 e−κn tanh2( ε
4 ) ∨ e−κ′n.
61

Above, we suppress the constant ρM 2 ≲ 1. Given that Xn is (τ, γ)x∞0 -concentrated, Lemma C.5 translates this guarantee into one for the midpoint ˆm:
P ˆm ∈
h
x0 ± 2τ
i
≥1−O B
τ + 1 e−κn tanh2( ε
4 ) ∨ e−κ′n .
The proof is analogous and instead uses Lemma 6.3 under Assumption 2.7.
F.4 Proofs for Mean Estimators (Local)
Lemma F.3. Algorithm 8 denoted by A is (ε, 0)-DP with ε > 0. Assume Xn ∈ Rn is (τ, γ)x∞0 
concentrated with ∥x0∥∞ ≤ B and fulfills Assumption 2.7 or 2.8 s.t. ρM 2 ≲ 1. Then, the event E := {∀i ∈ [n] : ΠIˆ(Xi) = Xi} has probability at least 1 − γ − O(B/τ + 1) · e−κn tanh2(ε/4) ∨ e−κ′n and
A(Xn) · 1{E} = X ̄n + ξ ̄n · 1{E}, almost surely.
Proof. The private midpoint estimator of Algorithm 3 is ( ε
2 , 0)-DP by Lemma F.1 as we call it with
ε
2 in Algorithm 8. Further, the Laplace mechanism therein is ( ε
2 , 0)-DP by Theorem 2.3. Therefore,
algorithm A is (ε, 0)-DP through basic composition in Theorem 2.4.
For utility, by Lemma F.1 under Assumption 2.7 or 2.8 we have
P ( ˆm ∈ [x0 ± 2τ ]) ≥ 1 − O (B/τ + 1) · e−κn tanh2(ε/4) ∨ e−κ′n.
Hence, by an application of Lemma D.2 with C = 2, the event E := {∀i ∈ [n] : Π[ ˆm±3τ](Xi) = Xi}
has probability at least 1 − γ − O(B/τ + 1) · e−κn tanh2(ε/4) ∨ e−κ′n and
A(Xn) · 1{E} = X ̄n + ξ ̄n · 1{E}, almost surely.
Remark F.4. If we assume ε ∈ (0, 1) we can make the bound above exponential in the quadratic of ε instead of the hyperbolic tangent. This holds as tanh(1/2)x ≤ tanh(x/2) for x ∈ [0, 1] and thus,
tanh2 ε
4 ≤ − tanh2 1
4 ε2 =: −κ′′ε2.
As a result, for ε ∈ (0, 1) and E as above, with probability 1 − γ − O(B/τ · e−κ′′′nε2 ) for κ′′′ > 0,
A(Xn) · 1{E} = X ̄n + ξ ̄n · 1{E}, almost surely.
Lemma F.5. Let ε, ρ ∈ (0, 1) and γ ∈ (0, 1 ∧ n
4 ). Algorithm 5 denoted by A calling Algorithm 8 in
Line 3 is (ε, ρ)-LDP. Suppose Xn ∈ Rn×d is (τ, γ)x∞0 -concentrated with ∥x0∥∞ ≤ B. Further, let Xn
fulfill Assumption 2.7 or 2.8 s.t. ρM 2 ≲ 1. Then, the event E := {∀i ∈ [n], j ∈ [d] : ΠRj (Xij) = Xij}
has probability at least 1 − dγ − O(B/τ + 1) · de−κn(ε′)2 with ε′ = ε/p8d log(1/ρ). Moreover, a.s.
A(Xn) · 1{E} = X ̄n +  ̄Ξn · 1{E}, where Ξi ∼ Lap 0, 12τ
ε′ Id .
62

Proof. Since the d one-dimensional mean estimators fulfill (ε, 0)-DP, the coordinate-wise multidimensional estimator is private by composition. We use the privacy parameters ε′, δ′ = 0, ρ defined in Algorithm D.1 governed by advanced composition in Theorem 2.4. This introduces ρ.
Xn is (τ, γ)x∞0 -concentrated. Applying Algorithm 8 denoted by A1 with (X·nj, τ, ε′, δ′) per dimension,
by Lemma F.3, Ej := {∀i ∈ [n] : ΠIˆ(Xi) = Xi} has P(Ej) ≥ 1 − γ − O(B/τ + 1) · e−κn tanh2(ε) and
A1(X·j) · 1{E} = 1
n
n
X
i=1
Xij + ξij
!
· 1{E}, almost surely.
Using the remark above and by Lemma D.3 with h = n and b = 12τ
ε′ , on the event E = T
j∈[d] Ej
that has probability at least 1 − dγ − O(B/τ + 1) · de−κn(ε′)2 it holds that, almost surely
A(X) · 1{E} = 1
n
n
X
i=1
X⊤
i· + Ξi
!
· 1{E}, with Ξi = (ξi1, ..., ξid)⊤.
Note that by definition it holds that X ̄n + Ξ ̄n = 1
n
Pn
i=1 Xi⊤· + Ξi. The statement is then recovered
as the the Ξij are i.i.d. and therefore Ξi ∼ Lap(0, 12τ
ε′ ).
F.5 Proofs of Theoretical Guarantees (Local)
Proof of Theorem 6.4.
This proof directly follows from Lemma D.6. By Lemma F.5 there is an event E that has probability
at least 1 − γ − O(B/τ + 1) · de−κn(ε′)2 s.t. almost surely,
A(Xn) · 1{E} = X ̄n + Ξ ̄n · 1{E}, where Ξ ∼ Lap 0, 12τ
ε′ Id .
Applying Lemma D.6 with h = n, with probability at least 1 − α − dγ − O(B/τ + 1) · de−κn(ε′)2 ,
∥A(X) − μ∥2 < X ̄n − μ 2 + 12τ
ε′
r 2d
n+
r
4 log(3/α)2 n
!
≤ X ̄n − μ 2 + 12τ
r
16d2 log(1/ρ)
nε2 +
r
32d log(1/ρ) log(3/α)2 nε2
!
.
The statement follows by omitting absolute constants in ≲-notation and bounding
p16d2 log(1/ρ) + p32d log(1/ρ) log(3/α)2 ≲
pd2 log(1/ρ) log(3/α)2.
Finally, the statement is obtained by setting α = dγ.
Proof of Theorem 6.5.
Define the noiseless estimator T0 := 1
n
Pn
i=1 ΠIˆd (Xi) where ΠIˆd (Xi) := [ΠIˆ1 (Xi1), . . . , ΠIˆ1 (Xij )]⊤
stems from the coordinate-wise application of Algorithm 8. Then, by independence of  ̄Ξn and T0
E
h
∥A(Xn) − μ∥2
2
i
=E
h
T0 +  ̄Ξn − μ 2
2
i
=E
h  ̄Ξn
2 2
i
+E
h
∥T0 − μ∥2
2
i
.
63

Here, E[∥ ̄Ξn∥22] ≤ 2db2/n as  ̄Ξn is an average of Ξ1, . . . , Ξn
ii∼d Lap(0, bId). We now bound the second term. For this, define the event on which the projections in Algorithm 5 don’t have an effect:
E := {∀i ∈ [n], j ∈ [d] : ΠIˆj (Xij) = Xij}.
By Lemma F.5 we have then have P T0 = X ̄n ≥ P (E) ≥ 1 − dγ − O(B/τ + 1) · de−κn(ε′)2 . Thus,
on E it holds that T0 = X ̄n and we may split the expectation as follows
E
h
∥T0 − μ∥2
2
i
=E
h
∥T0 − μ∥2
2 · 1{E}
i
+E
h
∥T0 − μ∥2
2 · 1{Ec}
i
≤E
h X ̄n − μ 2
2
i
+ 2E ∥T0∥22 + ∥μ∥22 · 1{Ec} .
By Assumption we have ∥μ∥22 ≤ d∥μ∥2∞ ≤ dB2. Further, by Jensen’s inequality
∥T0∥2
2≤
d
X
j=1
1 n
n
X
i=1
ΠRj (Xij )2 ≤
d
X
j=1
1 n
n
X
i=1
( ˆmj + τ )2 ≤ 2d(B2 + τ 2).
Combining both now yields the following upper bound
E ∥T0∥22 + ∥μ∥22 · 1{Ec} ≲ d(B2 + τ 2) · P (Ec)
≲ d(B2 + τ 2) · dγ + B
τ + 1 · de−κn(ε′)2
≲ d2γ(B2 + τ 2) + d2
eκn(ε′ )2
B3
τ + B2 + Bτ + τ 2 .
Collecting terms and plugging in b ≍ τ /(ε′) we then obtain
E
h
∥A(Xn) − μ∥2
2
i
≤E
h  ̄Ξn
2 2
i
+E
h
∥T0 − μ∥2
2
i
≲E
h X ̄n − μ 2
2
i
+ dτ 2
n(ε′)2 + d2(B2 + τ 2) · γ + B/τ + 1
eκn(ε′)2 .
The statement follows as ε′ ≍ ε/pd log(1/ρ) and considering the cases B ≥ τ and B ≤ τ .
Proof of Corollary 6.6.
Given that Assumption 2.8 holds, by Corollary 2.10 we have E[∥X ̄nT − μ∥22] ≤ dρ/(nT ). Combining this with Theorem 6.5 we thus obtain
E[∥A(Xn) − μ∥22] ≲ E
h X ̄n − μ 2
2
i
+ d2 τ 2 log(1/ρ)
nε2 + (B2 + τ 2) · γ + B/τ + 1
eκn(ε′ )2
≤ dρ
nT + d2τ 2 log(1/ρ)
nε2 + d2(B2 + τ 2) · γ + B/τ + 1
eκn(ε′)2 =: T1 + T2 + T3.
Again using Assumption 2.8, Xn is (τ, γ)μ∞-concentrated with τ = p2ρ log(2dn/γ)/T by Lemma
2.11. We specify γ ≍ (T nε2)−1 which yields τ 2 ≍ ρ log(2dT n2ε2)/T . The term T2 then becomes
T2 = d2τ 2 log(1/ρ)
nε2 = d2ρ log(2dT n2ε2) log(1/ρ)
T nε2 .
64

Note that T1 is always dominated by T2 since ε ≲ 1 by assumption. For the third term T3 we get
T3 = d2(B2 + τ 2) · γ + B/τ + 1
eκn(ε′ )2
= d2 B2 + ρ log(2dT n2ε2)
T ·1
T nε2 +
s
B2T
ρ log(2dT n2ε2) + 1
!
1
eκn(ε′ )2
!
.
In the setting when B ≥ τ and hence B/τ ≥ 1 , collecting terms yields
E[∥A(Xn) − μ∥22] ≲ d2ρ log(2dT n2ε2) log(1/ρ)
T nε2 + d2B2 · 1
T nε2 +
s
B2T
ρ log(2dT n2ε2)
1
eκn(ε′ )2
!
≲ d2ρ log(2dT n2ε2) log(1/ρ)
T nε2 + d2B2 · 1
T nε2 + √Bρ
√T
eκn(ε′ )2
!
.
Instead if B ≤ τ it holds that B/τ ≤ 1 and therefore
E[∥A(Xn) − μ∥22] ≲ d2ρ log(2dT n2ε2) log(1/ρ)
T nε2 + d2ρ log(2dT n2ε2)
T ·1
T nε2 + 1
eκn(ε′ )2
≲ d2ρ log(2dT n2ε2)
T · log(1/ρ)
nε2 + 1
eκn(ε′ )2
≲ d2ρ log(2dT n2ε2) log(1/ρ)
T nε2 .
Under Assumption 2.7 we exploit that the rows of Xn are i.i.d. with ρ-sub-Gaussian entries. This yields E[∥X ̄n − μ∥22] ≤ dρ/n and (τ, γ)μ∞-concentration with the same τ . The rest is analogous.
F.6 Proofs for Nonparametric Regression (Local)
Proof of Corollary 6.7.
This proof is analogous to the proof of Corollary 4.11 covering the central model.
We want to combine the concentration results of Lemma 4.9 with Theorem 6.4 for d = 1. Note fˆn(x) is concentrated around f (x) and supx∈[0,1] |f (x)| ≤ ∥f ∥∞ and thus the theorem’s boundedness condition holds. Further, by Lemma 4.10 we may call the theorem under Assumption 2.8.
In Lemma 4.9 we derived (τ, γ)∞-concentration of fˆn(x) around f (x) with
τ ≍b+ 1
b 1 + pσ2max∥K∥∞ log(2n/γ) ≲ 1
b
pσ2max∥K∥∞ log(2n/γ) =: C
b.
There, we also derived a statistical rate for the rMSE, meaning that with probability at least 1 − α
fˆn(x) − f (x) ≲ b + 1
nb +
r
σ2max∥K∥∞ log(2/α)
nb .
Setting α = γ and combining this with Theorem 6.4 via a union bound, with probability at least
65

1 − 3γ − O(M/τ · e−κnε2 ) we have
A(fˆn(x)) − f (x) ≲ fˆn(x) − f (x) + τ
r
log(1/ρ) log(3/γ)2 n2ε2
≲ fˆn(x) − f (x) +
r
C2 log(1/ρ) log(3/γ)2 b2nε2
≲b+ 1
nb +
r
σ2max∥K∥∞ log(2/γ)
nb +
r
C2 log(1/ρ) log(3/γ)2
nb2ε2 .
Note that by the expression for τ above we have τ ≳ b, which lets us bound the big-O in the probability. Modulo logarithms, and using 1 ≤ 1/b, 1 ≲ 1/ε, 1/n ≤ 1 and 1 ≲ σ2max to merge the second and fourth term yields
A(fˆn(x)) − f (x) ⪅ b + 1
nb + σmax
r1
nb +
r1
n2b2ε2
!
≲ b + σmax
r1
nb +
r1
nb2ε2
!
.
We call the three terms on the right hand side above T1, T2 and T3. Finally, to balance T1, T3 and T2, T3, we perform the following case distinction:
Case 1: If T2 ≳ T3, i.e., when ε ≳ 1/√b we balance T1 and T2 as follows:
T1 ≍ T2 ⇔ b ≍ σmax
√nb ⇔ b ≍ σ2max
n
1/3
⇒ ε≳ n
σ2max
1/6 .
Case 2: If T3 ≳ T2, i.e., when ε ≲ 1/√b we balance T1 and T3 as follows:
T1 ≍ T3 ⇔ b ≍ σmax
√nb2ε2 ⇔ b ≍
r σmax
√nε ⇒ ε ≲ n
σ2max
1/6 .
We therefore know that T2 dominates when ε ≲ εc := (n/σ2max)1/6 and otherwise T3 does. Choosing
b ≍ (σ2max/n)1/3 ∨ (σmax/(√nε))1/2 incorporates both cases. We then recover the statement by plugging in b and bounding the resulting maximum by a sum of both terms.
Proof of Corollary 6.8.
The proof is analogous to that of Corollary 6.8. As in the central model, Assumption 2.8 holds and we also assume ∥μ∥∞ ≤ B. We then combine Lemma 5.2 with Theorem 6.4 instead of Theorem 4.2.
The statement follows by plugging τ ≍ pρ log(2dn/γ)/T into the bound on the probability.
Proof of Corollary 6.9.
The result is a direct consequence of Corollary 6.8 enabled by Lemma 5.9.
Proof of Corollary 6.10.
The proof is analogous to that of Corollary 5.16. Because of the block structure of Σn and since ∥β∥∞ ≤ B by assumption, we use Theorem 6.4 under Assumption 2.7 instead of Theorem 4.2.
66

G Variance Estimation Algorithms
Lastly, we present the plug-in variance estimators used in Subsection 7.1.5. They both take σ2min, σ2max and ˆm as input, i.e., a lower and upper bounds on the variance as well as a potentially very rough estimate for the first moment. The algorithms iteratively update the upper bound and the first moment estimate, and eventually output an estimate of the variance.
G.1 Variance Estimation by Bisection
Our first plug-in variance estimator repeatedly halves the provided upper bound on the variance as long as the coverage of the resulting confidence interval has high enough empirical coverage.
Algorithm 10 VarianceBisection(Xn, ε, δ, ρ, σ2min, σ2max, ˆm, γ):
Require: Xn ∈ R, ε, δ, ρ > 0, σ2minσ2max ∈ (0, ∞), ˆm ∈ R, γ > 0
1: Niter ← ⌈log2(σ2max/σ2min)⌉
2: ε′ ← ε/p16Niter log(1/ρ) 3: while Coverage(Xn, ε′, σmax, ˆm) ≥ 1 − γ do
4: ˆm ← RefineMidpoint(Xn, ε′, σmax, ˆm)
5: σ2max ← σ2max/2
6: return σ2max
The intervals coverage is computed privately in Algorithm 11 using a Laplace mechanism and will by design tend to give a conservative large variance estimate. Algorithm 12 is used to refine the mean estimator using the current variance upper bounds and privacy is ensured by the Laplace mechanism.
Algorithm 11 Coverage(Xn, ε, σ, ˆm):
Require: Xn ∈ R, ε > 0, σ ∈ (0, ∞)
1: τˆ ← √2σ
2: Iˆ ← [ ˆm ± τˆ] 3: pˆ ← 1
n
Pn
i=1 1{Xi ∈ Iˆ}
4: return pˆ + ξ with ξ ∼ Lap(0, 2
nε )
Algorithm 12 RefineMidpoint(Xn, ε, σ, ˆm):
Require: Xn ∈ R, ε > 0, σ ∈ (0, ∞), ˆm ∈ R
1: τˆ ← √2σ
2: Iˆ ← [ ˆm ± τˆ] 3: return 1
n
Pn
i=1 ΠIˆ(Xi) + ξ with ξ ∼ Lap(0, 2τ
nε )
G.2 Variance Estimation via CoinPress
The second plug-in variance estimator we employ is an adjusted version of Algorithms 4 and 8 (CoinPress) by Biswas et al. (2020). Their original implementation assumes a zero mean and argues that under i.i.d. samples non-zero means this is not restrictive since one can always work with an i.i.d. sample of size n/2 symmetrized observations Yi := Xi+1 − Xi and just double the variance.
67

Under dependence, however, differencing observations biases the variance estimate. Algorithm 13 avoids this issue by centering observations using the current estimate of the first moment ˆm.
Algorithm 13 AdaptiveCoinPress(Xn, ε, δ, ρ, σ2min, σ2max, ˆm, γ):
Require: Xn ∈ R, ε, δ, ρ > 0, σ2minσ2max ∈ (0, ∞), ˆm ∈ R, γ > 0
1: Niter ← ⌈log2(σ2max/σ2min)⌉
2: ε′ ← ε/p16Niter log(1/ρ) 3: σ ← σmax
4: for t ∈ [Niter] do
5: ˆm ← RefineMidpoint(Xn, ε′, σmax, ˆm)
6: (σ, σ2max) ← RefineVariance(Xn, ε′, σ, ˆm)
7: return σ2max
The variance estimation `a la CoinPress is then performed on centered observations in Algorithm 14. The algorithm implements a one-dimensional version of Biswas et al. (2020, Algorithm 3).
Algorithm 14 RefineVariance(Xn, ε, σ, ˆm, γ):
Require: Xn ∈ R, ε > 0, σ ∈ (0, ∞), ˆm ∈ R, γ > 0 1: β ← (1 + 2plog(1/γ) + 2 log(1/γ))1/2 2: w ← Π[±β]n ((Xn − ˆm · 1n)/σ)
3: z ← 0 ∨ ( 1
n ∥w∥22 + ξ) with ξ ∼ Lap(0, 2β2
nε )
4: σ ← σ · (z + p1/n + 1/(2n))1/2 5: return (σ, z · σ2)
References
Jayadev Acharya, Yuhan Liu, and Ziteng Sun. Discrete distribution estimation under user-level local differential privacy. In Conference on Artificial Intelligence and Statistics (AISTATS), pages 8561–8585, 2023.
Sushant Agarwal, Gautam Kamath, Mahbod Majid, Argyris Mouzakis, Rose Silver, and Jonathan Ullman. Private mean estimation with person-level differential privacy. In Symposium on Discrete Algorithms (SODA), pages 2819–2880, 2025.
Daniel Alabi, Audra McMillan, Jayshree Sarathy, Adam D. Smith, and Salil P. Vadhan. Differentially private simple linear regression. Proceedings on Privacy Enhancing Technologies (PoPETs), 2022, 2020.
Daniel Alabi, Pravesh K Kothari, Pranay Tankala, Prayaag Venkat, and Fred Zhang. Privately estimating a gaussian: Efficient, robust, and optimal. In Symposium on Theory of Computing (STOC), pages 483–496, 2023.
Maryam Aliakbarpour, Rose Silver, Thomas Steinke, and Jonathan Ullman. Differentially private medians and interior points for non-pathological data. In Innovations in Theoretical Computer Science Conference (ITCS), 2024.
Kareem Amin, Alex Kulesza, Andres Munoz, and Sergei Vassilvtiskii. Bounding user contributions: a bias-variance trade-off in differential privacy. In International Conference on Machine Learning (ICML), 2019.
68

Chiara Amorino, Arnaud Gloter, and H ́el`ene Halconruy. Evolving privacy: drift parameter estimation for discretely observed iid diffusion processes under LDP. Stochastic Processes and their Applications, 181:104557, 2025.
Hilal Asi and Daogao Liu. User-level differentially private stochastic convex optimization: Efficient algorithms with optimal rates. In Conference on Artificial Intelligence and Statistics (AISTATS), pages 4240–4248, 2024.
Sean Augenstein, H. Brendan McMahan, Daniel Ramage, Swaroop Ramaswamy, Peter Kairouz, Mingqing Chen, Rajiv Mathews, and Blaise Aguera y Arcas. Generative models for effective ml on private, decentralized datasets. In International Conference on Learning Representations (ICLR), 2020.
Marco Avella-Medina. The role of robust statistics in private data analysis. Chance, 33(4):37–42, 2020.
Marco Avella-Medina. Privacy-preserving parametric inference: a case for robust statistics. Journal of the American Statistical Association, 116(534):969–983, 2021.
Marco Avella-Medina and Victor-Emmanuel Brunel. Propose, test, release: Differentially private estimation with high probability. arXiv preprint arXiv:2002.08774, 2020.
Marco Avella-Medina, Casey Bradshaw, and Po-Ling Loh. Differentially private inference via noisy optimization. Annals of Statistics, 51(5):2067 – 2092, 2023.
Jordan Awan, Matthew Reimherr, and Aleksandra Slavkovi ́c. Formal privacy for modern nonparametric statistics. Chance, 33(4):43–49, 2020.
Dominique Bakry, Ivan Gentil, and Michel Ledoux. Analysis and Geometry of Markov Diffusion Operators, volume 1. Springer Cham, 2014.
Badi H Baltagi. Econometric Analysis of Panel Data. John Wiley, 2008.
R. Bassily and Z. Sun. User-level private stochastic convex optimization with optimal rates. In International Conference on Machine Learning (ICML), 2023.
Thomas Berrett and Cristina Butucea. Locally private non-asymptotic testing of discrete distributions is faster using interactive mechanisms. Advances in Neural Information Processing Systems (NeurIPS), 33:3164–3173, 2020.
Thomas B Berrett, L ́aszl ́o Gy ̈orfi, and Harro Walk. Strongly universally consistent nonparametric regression and classification with privatised data. Electronic Journal of Statistics, 15:2430–2453, 2021.
Tom Berrett and Yi Yu. Locally private online change point detection. Advances in Neural Information Processing Systems (NeurIPS), 34:3425–3437, 2021.
Sourav Biswas, Yihe Dong, Gautam Kamath, and Jonathan Ullman. Coinpress: practical private mean and covariance estimation. In Advances in Neural Information Processing Systems (NeurIPS), volume 33, pages 14475–14485, 2020.
Sergey Bobkov and Friedrich G ̈otze. Concentration of empirical distribution functions with applications to non-i.i.d. models. Bernoulli, 16(4):1385 – 1414, 2010.
Simone Bombari, Inbar Seroussi, and Marco Mondelli. Better rates for private linear regression in the proportional regime via aggressive clipping. arXiv preprint, arXiv:2505.16329, 2025.
St ́ephane Boucheron, G ́abor Lugosi, and Pascal Massart. Concentration Inequalities: A Nonasymptotic Theory of Independence. Oxford University Press, 02 2013.
Gavin Brown, Krishnamurthy (Dj) Dvijotham, Georgina Evans, Daogao Liu, Adam Smith, and
69

Abhradeep Thakurta. Private gradient descent for linear regression: tighter error bounds and instance-specific uncertainty estimation. In International Conference on Machine Learning (ICML), 2024.
Mark Bun and Thomas Steinke. Concentrated differential privacy: Simplifications, extensions, and lower bounds. In Theory of Cryptography Conference (TCC), 2016.
Mark Bun and Thomas Steinke. Average-case averages: private algorithms for smooth sensitivity and mean estimation. In Advances in Neural Information Processing Systems (NeurIPS), 2019.
Mark Bun, Jonathan Ullman, and Salil P. Vadhan. Fingerprinting codes and the price of approximate differential privacy. Symposium on Theory of Computing (STOC), 2013.
Mark Bun, Kobbi Nissim, and Uri Stemmer. Simultaneous private learning of multiple concepts. In Conference on Innovations in Theoretical Computer Science (ITCS), page 369–380, 2016.
Cristina Butucea, Amandine Dubois, Martin Kroll, and Adrien Saumard. Local differential privacy: Elbow effect in optimal density estimation and adaptation over besov ellipsoids. Bernoulli, 26(3): 1727–1764, 2020.
Cristina Butucea, Karolina Klockmann, and Tatyana Krivobokova. Nonparametric spectral density estimation using interactive mechanisms under local differential privacy. arXiv preprint arXiv:2504.00919, 2025.
T. Tony Cai, Yichen Wang, and Linjun Zhang. The cost of privacy: Optimal rates of convergence for parameter estimation with differential privacy. Annals of Statistics, 49(5):2825 – 2850, 2021.
T. Tony Cai, Abhinav Chakraborty, and Lasse Vuursteen. Optimal federated learning for nonparametric regression with heterogeneous distributed differential privacy constraints. arXiv preprint, arXiv:2406.06755, 2024.
T. Tony Cai, Abhinav Chakraborty, and Lasse Vuursteen. Optimal federated learning for functional mean estimation under heterogeneous privacy constraints. arXiv preprint, arXiv:2412.18992, 2025.
Tony T Cai, Yichen Wang, and Linjun Zhang. Score attack: A lower bound technique for optimal differentially private learning. arXiv preprint, arXiv:2303.07152, 2023.
Sinho Chewi. Log-Concave Sampling. 2025. URL https://chewisinho.github.io/main.pdf. Version: June 29, 2025.
Julien Chhor and Flore Sentenac. Robust estimation of discrete distributions under local differential privacy. In International Conference on Algorithmic Learning Theory (ALT), pages 411–446, 2023.
Maria Colombo, Alessio Figalli, and Yash Jhaveri. Lipschitz changes of variables between perturbations of log-concave measures. Annali Scuola Normale Superiore - Classe di Scienze, pages 1491–1519, 2017.
Eugene Demidenko. Mixed Models: Theory and Applications with R. John Wiley & Sons, Hoboken, New Jersey, 2013.
Peter Diggle. Analysis of Longitudinal Data. Oxford University Press, 2002.
B. Ding, J. Kulkarni, and S. Yekhanin. Collecting telemetry data privately. In Advances in Neural Information Processing Systems (NeurIPS), 2017.
Jinshuo Dong, Aaron Roth, and Weijie J. Su. Gaussian differential privacy. Journal of the Royal Statistical Society, Series B, 84(1):3–37, 02 2022.
John C. Duchi, Michael I. Jordan, and Martin J. Wainwright. Minimax optimal procedures for locally private estimation. Journal of the American Statistical Association, 113(521):182–201, 2018.
70

Cynthia Dwork and Jing Lei. Differential privacy and robust statistics. In Symposium on Theory of Computing (STOC), 2009.
Cynthia Dwork and Aaron Roth. The algorithmic foundations of differential privacy. Foundations and Trends® in Theoretical Computer Science, 9(3–4):211–407, 2014.
Cynthia Dwork and Guy N. Rothblum. Concentrated differential privacy. arXiv preprint, arXiv:1603.01887, 2016.
Cynthia Dwork, Frank McSherry, Kobbi Nissim, and Adam Smith”. Calibrating noise to sensitivity in private data analysis. In Theory of Cryptography Conference (TCC), 2006.
Alessandro Epasto, Mohammed Mahdian, Jieming Mao, Vahab Mirrokni, and Lijie Ren. Smoothly bounding user contributions in differential privacy. In Advances in Neural Information Processing Systems (NeurIPS), 2020.
 ́U. Erlingsson, V. Pihur, and A. Korolova. Rappor: Randomized aggregatable privacy-preserving ordinal response. In Conference on Computer and Communications Security, pages 1054–1067, 2014.
Ludwig Fahrmeir and Gerhard Tutz. Random Effects Models, pages 283–329. Springer, New York, 2001.
Garrett M Fitzmaurice, Nan M Laird, and James H Ware. Applied Longitudinal Analysis. John Wiley & Sons, 2012.
Rina Foygel Barber and John C. Duchi. Privacy and statistical risk: formalisms and minimax bounds. arXiv preprint, arXiv:1412.4451, 2014.
Marco Gaboardi and Ryan Rogers. Local private hypothesis testing: chi-square tests. In International Conference on Machine Learning (ICML), pages 1626–1635, 2018.
Simson Garfinkel, John M. Abowd, and Christian Martindale. Understanding database reconstruction attacks on public data. Communications of the ACM, 62(3):46–53, 2019.
Badih Ghazi, Pritish Kamath, Ravi Kumar, Pasin Manurangsi, Raghu Meka, and Chiyuan Zhang. User-level differential privacy with few examples per user. In Advances in Neural Information Processing Systems (NeurIPS), 2023.
Antonious M. Girgis, Deepesh Data, and Suhas Diggavi. Distributed user-level private mean estimation. In International Symposium on Information Theory (ISIT), pages 2196–2201, 2022.
Noah Golowich. Differentially private nonparametric regression under a growth condition. In Conference on Learning Theory (COLT), 2021.
Shota Gugushvili and Chris A.J. Klaassen. √n-consistent parameter estimation for systems of ordinary differential equations: bypassing numerical integration via smoothing. Bernoulli, 18(3), 2012.
L ́aszl ́o Gyo ̈rfi and Martin Kroll. On rate optimal private regression under local differential privacy. Statistica Sinica, 35:613–627, 2025.
Samuel B Hopkins, Gautam Kamath, Mahbod Majid, and Shyam Narayanan. Robustness implies privacy in statistical estimation. In Symposium on Theory of Computing (STOC), pages 497–506, 2023.
Cheng Hsiao. Analysis of Panel Data. Cambridge University Press, 2022.
Bingshan Hu and Nidhi Hegde. Near-optimal Thompson sampling-based algorithms for differentially private stochastic bandits. In Uncertainty in Artificial Intelligence (UAI), pages 844–852. PMLR, 2022.
71

Gautam Kamath, Jerry Li, Vikrant Singhal, and Jonathan Ullman. Privately learning highdimensional distributions. In Conference on Learning Theory (COLT), pages 1853–1902, 2019.
Gautam Kamath, Vikran Singhal, and Jonathan Ullman. Private mean estimation of heavy-tailed distributions. In Conference on Learning Theory (COLT), volume 125, pages 2204–2235, 2020.
Vishesh Karwa and Salil Vadhan. Finite Sample Differentially Private Confidence Intervals. In Innovations in Theoretical Computer Science Conference (ITCS), 2018.
Shiva Prasad Kasiviswanathan, Homin K Lee, Kobbi Nissim, Sofya Raskhodnikova, and Adam Smith. What can we learn privately? SIAM Journal on Computing, 40(3):793–826, 2011.
Alexander Kent, Thomas B. Berrett, and Yi Yu. Rate optimality and phase transition for user-level local differential privacy. arXiv preprint, arXiv:2405.11923, 2024.
Aleksandra Korolova, Krishnaram Kenthapadi, Nina Mishra, and Alexandros Ntoulas. Releasing search queries and clicks privately. In International Conference on World Wide Web, page 171–180, 2009.
Samory Kpotufe and Abdeslam Boularias. Gradient weights help nonparametric regressors. Advances in Neural Information Processing Systems (NeruIPS), 2012.
Martin Kroll. Nonparametric spectral density estimation under local differential privacy. Statistical Inference for Stochastic Processes, 27(3):725–759, 2024.
Michel Ledoux. The Concentration of Measure Phenomenon. American Mathematical Society, 2001.
Daniel Levy, Ziteng Sun, Kareem Amin, Satyen Kale, Alex Kulesza, Mehryar Mohri, and Ananda Theertha Suresh. Learning with user-level privacy. In Advances in Neural Information Processing Systems (NeurIPS), volume 34, pages 12466–12479, 2021.
Mengchu Li, Tom Berrett, and Yi Yu. Network change point localisation under local differential privacy. Advances in Neural Information Processing Systems (NeurIPS), 35:15013–15026, 2022.
Mengchu Li, Thomas B Berrett, and Yi Yu. On robustness and local differential privacy. Annals of Statistics, 51(2):717–737, 2023.
Xiyang Liu, Weihao Kong, Sham Kakade, and Sewoong Oh. Robust and differentially private mean estimation. Advances in Neural Information Processing Systems (NeurIPS), 34:3887–3901, 2021.
Xiyang Liu, Weihao Kong, and Sewoong Oh. Differential privacy and robust statistics in high dimensions. In Conference on Learning Theory (COLT), pages 1167–1246, 2022.
Xiyang Liu, Prateek Jain, Weihao Kong, Sewoong Oh, and Arun Sai Suggala. Label robust and differentially private linear regression: computational and statistical efficiency. In Advances in Neural Information Processing Systems (NeurIPS), 2023.
Yuhan Liu, Ananda Theertha Suresh, Felix Yu, Sanjiv Kumar, and Michael Riley. Learning discrete distributions: user vs item-level privacy. In Advances in Neural Information Processing Systems (NeurIPS), 2020.
Pascal Massart. The tight constant in the Dvoretzky-Kiefer-Wolfowitz inequality. Annals of Probability, 18(3):1269 – 1283, 1990.
H. B. McMahan, Daniel Ramage, Kunal Talwar, and Li Zhang. Learning differentially private recurrent language models. In International Conference on Learning Representations (ICLR), 2017.
Ilya Mironov. R ́enyi Differential Privacy. In Computer Security Foundations Symposium (CSF), pages 263–275, 2017.
Nikita Mishra and Abhradeep Thakurta. (nearly) optimal differentially private stochastic multi-arm
72

bandits. In Conference on Uncertainty in Artificial Intelligence (UAI), pages 592–601, 2015.
Shyam Narayanan, Vahab Mirrokni, and Hossein Esfandiari. Tight and robust private mean estimation with few users. In International Conference on Machine Learning (ICML), volume 162, pages 16383–16412, 7 2022.
Tingting Ou, Rachel Cummings, and Marco Avella Medina. Thompson sampling itself is differentially private. In Conference on Artificial Intelligence and Statistics (AISTATS), pages 1576–1584. PMLR, 2024.
Ankit Pensia, Amir R Asadi, Varun Jog, and Po-Ling Loh. Simple binary hypothesis testing under local differential privacy and communication constraints. IEEE Transactions on Information Theory, 2024.
Jos ́e C Pinheiro and Douglas M Bates. Mixed-Effects Models in S and S-PLUS. Springer, 2000.
Maurice B Priestley and MT Chao. Non-parametric function fitting. Journal of the Royal Statistical Society, Series B, 34(3):385–392, 1972.
Kelly Ramsay, Aukosh Jagannath, and Shoja’eddin Chenouri. Differentially private multivariate medians. arXiv preprint arXiv:2210.06459, 2022.
Touqir Sajed and Or Sheffet. An optimal private stochastic-mab algorithm based on optimal private stopping rule. In International Conference on Machine Learning (ICML), pages 5579–5588. PMLR, 2019.
Mathieu Sart. Density estimation under local differential privacy and hellinger loss. Bernoulli, 29 (3):2318–2341, 2023.
Adam Smith. Privacy-preserving statistical estimation with optimal convergence rates. In Symposium on Theory of Computing (STOC), 2011.
Prateek R Srivastava, Yijie Wang, Grani A Hanasusanto, and Chin Pang Ho. On data-driven prescriptive analytics with side information: a regularized nadaraya-watson approach. arXiv preprint arXiv:2110.04855, 2021.
Thomas Steinke and Jonathan Ullman. Between pure and approximate differential privacy. Journal of Privacy and Confidentiality, 7(2), 2017.
Jun Tang, Aleksandra Korolova, Xiaolong Bai, Xueqiang Wang, and Xiaofeng Wang. Privacy loss in Apple’s implementation of differential privacy on MacOS 10.12, 2017.
Alexandre B. Tsybakov. Introduction to Nonparametric Estimation. Springer Publishing Company, Incorporated, 2008.
Christos Tzamos, Emmanouil-Vasileios Vlatakis-Gkaragkounis, and Ilias Zadik. Optimal private median estimation under minimal distributional assumptions. Advances in Neural Information Processing Systems (NeurIPS), 33:3301–3311, 2020.
Salil Vadhan. The Complexity of Differential Privacy. Springer International Publishing, 2017.
Roman Vershynin. High-Dimensional Probability - An Introduction with Applications in Data Science. Cambridge University Press, 2025.
C ́edric Villani. Optimal Transport - Old and New, volume 1. Springer Berlin, Heidelberg, 2009.
Yijie Wang, Grani A Hanasusanto, and Chin Pang Ho. Generalization bounds for contextual stochastic optimization using kernel regression. arXiv preprint, arXiv:2407.10764, 2024.
Yu-Xiang Wang. Revisiting differentially private linear regression: optimal and adaptive prediction & estimation in unbounded domain. In Conference on Uncertainty in Artificial Intelligence (UAI), 2018.
73

Zhibo Wang, Mengkai Song, Zhifei Zhan, Yang Song, Qian Wang, and Hairon Qi. Beyond inferring class representatives: user-level privacy leakage from federated learning. In IEEE Conference on Computer Communications, page 2512–2520, 2019.
Stanley L. Warner. Randomized response: a survey technique for eliminating evasive answer bias. Journal of the American Statistical Association, 60(309):63–69, 1965.
Larry Wasserman and Shuheng Zhou. A statistical framework for differential privacy. Journal of the American Statistical Association, 105(489):375–389, 2010.
Royce Wilson, Celia Yuxin Zhang, William Lam, Damien Desfontaines, Daniel Simmons-Marengo, and Bryant Gipson. Differentially private sql with bounded user contribution. In Proceedings on Privacy Enhancing Technologies (PoPETs), 2020.
Myeonghun Yu, Zhao Ren, and Wen-Xin Zhou. Gaussian differentially private robust mean estimation and inference. Bernoulli, 30(4):3059–3088, 2024.
Wanrong Zhang, Sara Krehbiel, Rui Tuo, Yajun Mei, and Rachel Cummings. Single and multiple change-point detection with differential privacy. Journal of Machine Learning Research, 22(29): 1–36, 2021.
Xueru Zhang, Mohammad Mahdi Khalili, and Mingyan Liu. Differentially private real-time release of sequential data. ACM Transactions on Privacy and Security, 26(1):1–29, 2022.
Puning Zhao, Lifeng Lai, Li Shen, Qingming Li, Jiafei Wu, and Zhe Liu. A huber loss minimization approach to mean estimation under user-level differential privacy. In Advances in Neural Information Processing Systems (NeurIPS), 2024.
74

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:33.413Z
- **Text Length:** 188483 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 74 of 74
