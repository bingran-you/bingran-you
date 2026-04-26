# PDF Document: Cárdenas-Hurtado et al. - 2025 - A Generalized Additive Partial-Mastery Cognitive Diagnosis Model.pdf

**File Path:** Cárdenas-Hurtado et al. - 2025 - A Generalized Additive Partial-Mastery Cognitive Diagnosis Model.pdf

**Processed Date:** 2026-02-10T18:16:06.956Z

**File Size:** 633.24 KB

**Total Pages:** 39

**Extracted Pages:** 39

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3367

**Title:** A Generalized Additive Partial-Mastery Cognitive Diagnosis Model

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A Generalized Additive Partial-Mastery Cognitive Diagnosis Model
Camilo C ́ardenas-Hurtado∗ Yunxiao Chen† Irini Moustaki‡
Abstract
Cognitive diagnosis models (CDMs) are restricted latent class models widely used
for measuring attributes of interest in diagnostic assessments in education, psychol
ogy, biomedical sciences, and related fields. Partial-mastery CDMs (PM-CDMs) are
an important extension of CDMs. They model individuals’ status for each attribute
to be continuous for measuring the partial mastery level, which relaxes the restrictive
discrete-attribute assumption of classical CDMs. As a result, PM-CDMs often yield
better fits for real-world data and refined measurement of the substantive attributes
of interest. However, these models inherit some strong parametric assumptions from
the traditional CDMs about the item response functions and, thus, still suffer from a
significant risk of model misspecification. This paper proposes a generalized additive
PM-CDM (GaPM-CDM) that substantially relaxes the parametric assumptions of
PM-CDMs. This proposal leverages model parsimony and interpretability by model
ing each item response function as a mixture of nonparametric monotone functions
of attributes. A method for the estimation of GaPM-CDM is developed, which com
bines the marginal maximum likelihood estimator with a sieve approximation of the
nonparametric functions. The new model is applicable under both confirmatory and
exploratory settings, depending on whether prior knowledge is available about the
relationship between observed variables and attributes. The proposed method is ap
plied to two measurement problems from educational testing and healthcare research,
respectively, and further evaluated and compared with PM-CDMs through extensive
simulation studies.
Key words: Semiparametric model, latent variable model, monotone function, non
parametric item response theory, exploratory data analysis
∗Department of Statistics, LSE. Contact: c.a.cardenas-hurtado@lse.ac.uk
†Department of Statistics, LSE. Contact: y.chen186@lse.ac.uk
‡Department of Statistics, LSE. Contact: i.moustaki@lse.ac.uk
1
arXiv:2511.20191v1 [stat.ME] 25 Nov 2025

1. Introduction
Diagnostic assessments are commonly used in education, psychology, biomedical science,
and related fields to identify individuals’ attribute profiles based on their observed re
sponses to assessment items. An attribute refers to an individual’s latent dimension, such
as a problem-solving skill, a knowledge component, a personality trait, or a mental health
disorder. An attribute profile typically involves multiple attributes that are likely corre
lated. Measuring attribute profiles is a non-trivial task due to the potentially complex
relationship between attributes and items, as well as the dependence between attributes.
Cognitive diagnostic models (CDMs), with roots in the rule-space model (Tatsuoka,
1983) and latent class analysis (Lazarsfeld and Henry, 1968), have been proposed to tackle
the measurement challenge with diagnostic assessments. Various CDMs have been devel
oped under different assumptions about the cognitive process or characteristics of the
latent attributes (e.g., Junker and Sijtsma, 2001, von Davier, 2008, Henson et al., 2009,
de la Torre, 2011, Chen and de la Torre, 2013, Zhang and Chen, 2020, Ma, 2022); see Rupp
et al. (2010) and von Davier and Lee (2019) for a comprehensive review. The attributes
in the traditional CDMs are assumed to be discrete. Early developments of CDMs typ
ically consider binary attributes, under which an individual either fully masters or does
not master an attribute. In subsequent developments of CDMs, the binary-attribute as
sumption has been relaxed in several models. These models allow each attribute to have
a small number of ordered levels, which, however, still may not be sufficient to support
fine-grained inference on individuals’ partial mastery levels on attributes. To fill this gap,
Shang et al. (2021) proposed a flexible family of partial-mastery CDMs (PM-CDMs),
which assumes the attributes to be continuous rather than discrete. More specifically, an
individual is assumed to have a set of continuous partial mastery scores between 0 and
1 that measure their mastery level for each attribute, where a larger score represents a
higher level of partial mastery, and the extreme scores of zero and one represent com
plete non-mastery and mastery, respectively. It was found in Shang et al. (2021) that
the use of continuous partial-mastery scores tends to yield better fits for real-world data
than classical CDMs and refined measurement of the substantive attributes of interest.
Technically, the PM-CDMs are developed by combining parametric assumptions of tradi
tional CDMs with modeling techniques from the grade-of-membership model (Erosheva,
2002), also known as the mixed-membership model (Airoldi et al., 2014), a general family
of models that have been widely used to model complex multivariate data in computer
sciences, social surveys, genetics, among other fields (see, e.g., Blei et al., 2003, Erosheva
et al., 2007, Airoldi et al., 2008). By assuming the mastery level to be continuous, PM
CDMs also establish a link between CDMs and multidimensional item response theory
2

(IRT) models (see, e.g., Chen et al., 2025, for a review), a general family of latent variable
models tailored for analyzing item response data.
Although the PM-CDMs have demonstrated significant advantage, they are still re
stricted in the sense that they inherit relatively strong parametric assumptions from clas
sical CDMs about the item response functions (IRFs), i.e., the conditional distribution
of the manifest variables given the partial mastery scores. To mitigate this restriction,
Shang et al. (2021) gave multiple options for the parametric IRFs. However, selecting
the IRF is a model selection problem, which is typically a challenge for practitioners, es
pecially when different items are allowed to have different parametric forms for the IRF.
On the other hand, it has long been observed in the IRT literature that conventional
parametric families sometimes fail to capture patterns in many real-world item response
data, and nonparametric and semiparametric IRT models have been proposed as a rem
edy (Ramsay, 1988, Ramsay and Winsberg, 1991, Sijtsma and Molenaar, 2002). However,
all the existing nonparametric and semiparametric IRT models are unidimensional, in the
sense that only one-dimensional latent trait/attribute is modeled. Extending them to the
multidimensional setting of PM-CDMs is the focus of this paper. Such extension is not
straightforward, as it will be discussed in the sequel.
This paper proposes a Generalized Additive Partial-Mastery CDM (GaPM-CDM) as
a semiparametric PM-CDM. Instead of a fully nonparametric multivariate function, the
new model is kept parsimonious by assuming each IRF to have a semiparametric gener
alized additive form, similar to the generalized additive model used in regression analysis
(Hastie and Tibshirani, 1990). More specifically, each IRF is assumed to be a mixture of
nonparametric monotone functions of the partial mastery scores of attributes with non
negative mixture weights. Both the monotone assumption and the nonnegative weights
play important roles in interpreting the IRFs. The former captures the monotone rela
tionship between an attribute and an item, conditioning on the rest of the attributes.
Similar monotone assumptions are imposed in parametric CDMs (Henson et al., 2009,
Fang et al., 2019, Shang et al., 2021) as well as IRT models (e.g., Ramsay, 1988, Ramsay
and Winsberg, 1991). The nonnegative weights of an item capture the contributions of
the attributes to the response, generalizing the concept of Q-matrix in classical CDMs.
Specifically, a zero weight indicates the conditional independence between the correspond
ing attribute and item response, given the remaining attributes. The use of the nonnega
tive weights also allows us to apply the GaPM-CDM in an exploratory setting when the
item-attribute relationship, i.e., the Q-matrix, is unknown, while Shang et al. (2021) only
considered a confirmatory setting with a known Q-matrix. The proposed model is also
a multidimensional extension of the semiparametric IRT model proposed in Ramsay and
Winsberg (1991).
3

To estimate the GaPM-CDM, we propose a sieve marginal maximum likelihood es
timator that combines the ‘method of sieves’ (Shen, 1997) for infinite-dimensional non
parametric functions with the standard marginal maximum likelihood estimator for latent
variable models (Skrondal and Rabe-Hesketh, 2004, Bartholomew et al., 2011). In partic
ular, we use piecewise linear functions to approximate the monotone IRFs. To handle the
computational challenge posed by the integrals with respect to the latent variables (i.e.,
attributes) in the marginal likelihood, a computationally efficient Markov chain Monte
Carlo stochastic-approximation (MCMC-SA) algorithm (Robbins and Monro, 1951, Gu
and Kong, 1998, Zhang and Chen, 2022) is developed. This algorithm iteratively con
structs stochastic gradients of the marginal log-likelihood by sampling the latent variables
using a Markov chain Monte Carlo (MCMC) sampler and updates the unknown parame
ters using the stochastic gradients.
The proposed model is applied to two real-world datasets. The first application is
in educational testing and uses the classic English test dataset in the CDM literature
for which the Q-matrix is known. The proposed model fits this data better than the
traditional PM-CDMs and produces interpretable and informative IRFs, without affecting
the ranking of the test takers on their latent abilities. The second application is in
clinical healthcare research using patient-reported outcomes data. We study patients’
self-reported social-role performance, a hypothesized multidimensional latent construct
believed to measure an individual’s ability to engage with and participate in different
daily life activities. This analysis is exploratory in nature, as both the Q-matrix and
the number of attributes are unknown. We show that the proposed model recovers a
reasonable number of interpretable attributes related to the individual’s social, work, and
family functioning capacity.
The rest of the paper is organized as follows. Section 2 gives a brief review of PM
CDMs and then introduces the GaPM-CDM framework and discusses the estimation of
the model parameters. Section 3 presents extensive simulation studies comparing the
performance of GaPM-CDM against comparable PM-CDMs and CDMs in terms of IRF
recovery and latent attribute scoring. Section 4 presents analyses of the English test and
patient-reported outcomes data sets. Section 5 concludes and provides further discussion.
We also provide Online Supplementary Materials, including implementation and techni
cal details on the estimation strategy, simulation studies, and additional results on the
empirical applications.
4

2. A Generalized Additive Partial-Mastery CDM
2.1 Review of PM-CDM
Following Shang et al. (2021), consider a diagnostic setting where individuals respond to
a set of J binary items, denoted by Y = (Yj : j = 1, . . . , J)⊤ ∈ {0, 1}J . The PM-CDM
assumes that the distribution of the responses is determined by a vector of continuous
latent variables U = (Uk : k = 1, . . . , K)⊤ ∈ [0, 1]K that indicate the partial mastery levels
for K attributes of interest, where Uk = 0 and 1 denote the lowest and highest mastery
levels for attribute k, respectively. It further assumes a known matrix Q = (qjk)J×K
that characterizes the item-attribute relationship, where qjk = 1 indicates that the j
th item directly measures the k-th attribute and qjk = 0 otherwise. We further use
qj = (qj1, . . . , qjK )⊤ to denote the j-th row of Q.
A PM-CDM is a parametric model with the following structure. The observed re
sponses satisfy the local independence assumption, which states that item responses are
independent conditional on the latent variables. Moreover, responses are distributed
Yj | U ∼ Bernoulli(πj(U)), where the probability πj(U) := P(Yj = 1 | U) is a parametric
function of the latent variable scores U that inherits assumptions of classical CDMs. For
example, Example 2.1 below gives the additive Partial-Mastery CDM (aPM-CDM), also
referred to as the partial-mastery additive CDM in Shang et al. (2021), whose IRF follows
from the additive CDM (ACDM; de la Torre, 2011). This model is closely related to the
GaPM-CDM, which will be introduced in the sequel. Other parametric forms of πj(U)
are given in Shang et al. (2021) based on other classical CDMs, such as the Deterministic
Input Noisy output “And” gate model (DINA; Junker and Sijtsma, 2001), the Determin
istic Input Noisy output “Or” gate model (DINO; Templin and Henson, 2006), and the
generalized DINA model (G-DINA; de la Torre, 2011).
Example 2.1. The IRF of the aPM-CDM takes a linear form:
πj(U) = δj0 +
K
∑
k=1
δjkqjkUk, j = 1, . . . , J, (1)
where δj = (δj0, δj1, . . . , δjK )⊤ are item-specific parameters. The IRF πj(U) in (1) de
pends on the latent attribute k when qjk = 1. For these dimensions, the parameters δjk are
typically assumed to be nonnegative to impose a monotone relationship between the par
tial mastery scores and the item response probabilities. Consequently, it is guaranteed that
πj(U) ≥ πj(U ̃ ), when Uk ≥ U ̃k for all the relevant dimensions k, a monotone constraint
commonly assumed in PM-CDMs. Moreover, as πj(U) takes a value between 0 and 1, the
parameters are naturally subject to the constraints δj0 ≥ 0 and δj0 + ∑K
k=1 δjkqjk ≤ 1.
5

The latent mastery scores are assumed to follow a Gaussian copula model. That is,
each Uk ∼ Uniform(0, 1), and their joint cumulative distribution function is:
D(U; μ, Σ) = Φ(Φ−1(U1), . . . , Φ−1(UK ); μ, Σ) ,
where Φ−1 denotes the inverse of the standard Normal cumulative distribution function,
and Φ(·; μ, Σ) is the multivariate Normal cumulative distribution function with mean
vector μ ∈ RK and positive semi-definite covariance matrix Σ = (σkk′)K×K . The specifi
cations above lead to a joint distribution for the item responses Y and latent variables U,
from which we can write down the marginal likelihood function and estimate the model
parameters.
2.2 Model Specification of GaPM-CDM
We now propose a GaPM-CDM, which has the same assumptions as the PM-CDMs
reviewed previously, except that its IRF is assumed to take a generalized additive form
as in Hastie and Tibshirani (1990). That is,
πj(U) =
K
∑
k=1
αjkqjkgjk(Uk) , j = 1, . . . , J , (2)
where gjk : [0, 1] → [0, 1] are continuous, monotone non-decreasing functions, and αjks
are the associated nonnegative weights. To ensure αjk and gjk are identifiable, we impose
the boundary conditions gjk(0) = 0 and gjk(1) = 1, and the constraint ∑K
k=1 αjkqjk = 1.
Moreover, we set μ to be a zero vector and the diagonal entries of Σ to take values of
one in the Gaussian copula model, as they cannot be identified due to the flexibility of
the monotone functions gjk. As a result, each partial-mastery score Uk now marginally
follows a uniform distribution on the interval [0, 1]. We shall note that the off-diagonal
entries of Σ are still estimated to learn the dependence between the attributes.
Remark 2.1 (Comments on the IRF of GaPM-CDM). First, the IRF in (2) satisfies the
same monotone constraint as the aPM-CDM and many other PM-CDMs in that πj(U) ≥
πj(U ̃ ), when Uk ≥ U ̃k for all k such that qjk = 1. Second, this IRF also enforces some
boundary conditions. That is, πj(U) = 0 when Uk = 0 for all k such that qjk = 1, and
πj(U) = 1 when Uk = 1 for all k such that qjk = 1. That means, when an individual
does not master any of the attributes required to solve an item, they have zero chance of
correctly answering it. On the other hand, when an individual fully masters all the relevant
attributes, then it is 100% certain that they can correctly answer the item. Compared to
the aPM-CDM and some other PM-CDMs, our IRF does not model the guessing and
slipping probabilities, which are the probabilities of correctly answering the item when an
6

individual does not master any relevant attributes, and incorrectly answering it when the
individual fully masters all the relevant attributes, respectively. However, the guessing and
slipping probabilities can be accurately approximated by the nonparametric functions gjk.
Third, we note that many PM-CDMs, such as the partial-mastery DINA model, model the
interactions between attributes, which the IRF of the GaPM-CDM cannot fully mimic. We
believe it is possible to further incorporate interaction terms in a semiparametric fashion
into (2). However, as the current model is already complicated, we leave this extension
for future research; see Section 5 for further discussions.
Remark 2.2 (Confirmatory versus exploratory settings). When introducing the IRF for
the GaPM-CDM, we follow the confirmatory setting as in Shang et al. (2021). However,
the proposed model can also be applied under exploratory data analysis settings when the
Q-matrix is unknown. In that case, the IRF takes the form
πj(U) =
K
∑
k=1
αjkgjk(Uk) , j = 1, . . . , J , (3)
which is equivalent to setting qjk = 1 for all j and k in (2). Unlike certain multidimen
sional IRT models and CDMs that have indeterminacy issues when the Q-matrix imposes
no constraint (see, e.g., Chen et al., 2020, Gu and Xu, 2021), the GaPM-CDM does
not seem to suffer from similar indeterminacy under the exploratory setting, as found in
the simulation study in Section 3.2. The “empirical” identifiability of the GaPM-CDM
is probably due to the boundary conditions and nonnegative constraints imposed in our
model. In fact, the proposed model has a similar structure to models based on nonneg
ative matrix factorization, which are automatically identified under suitable conditions
and without knowing a Q-matrix (e.g., Donoho and Stodden, 2003, Chen and Gu, 2024).
In the models based on nonnegative matrix factorization, certain nonnegative constraints
and the presence of items that only measure single dimensions exclude the rotational in
determinacy that many latent variable models suffer (Bartholomew et al., 2011), which
further ensures the identifiability of the entire model. Establishing an identifiability result
for the GaPM-CDM under the exploratory setting requires dedicated analysis to combine
the proof strategy for these models and techniques for analyzing nonparametric functions,
under an asymptotic regime when both the sample size N and the number of items J
diverge simultaneously.1 We leave this problem for future investigation.
Remark 2.3 (Connection to semiparametric IRT models). The proposed GaPM-CDM
is an extension of the semiparametric IRT model in Ramsay and Winsberg (1991) to a
multidimensional setting. In fact, it can be shown that the model in Ramsay and Wins
1A double asymptotic regime is necessary as the identification of the infinite-dimensional functions gjk
requires the number of items to go to infinity; see Remark 2.4 for further discussions.
7

berg (1991) is mathematically equivalent to the proposed GaPM-CDM when the latent
dimension K = 1 and qj1 = 1 for all j = 1, . . . , J.
2.3 Estimation
In what follows, we consider the estimation of GaPM-CDM, given observed data from N
individuals, denoted by yij, i = 1, . . . , N , j = 1, . . . , J. To handle the infinite-dimensional
functions gjk in the model, we propose an estimator that combines the marginal maximum
likelihood estimator with a sieve approximation of the infinite-dimensional functions, in
which each gjk is approximated by a piecewise linear function, gs
jk. More specifically, let
κ = (κl : l = 1, . . . , L)⊤ be a vector of fixed grid points such that 0 < κ1 < · · · < κL < 1.
We approximate the continuous, monotone non-decreasing function gjk by:
gs
jk(x; θjk, κ) =

      
      
θjk,1
κ1
x if x ∈ [0, κ1),
θjk,1 + θjk,2
κ2 − κ1
(x − κ1) if x ∈ [κ1, κ2),
...
(
∑L−1
l=1 θjk,l
)
+ θjk,L
1 − κL
(x − κL) if x ∈ [κL, 1],
(4)
where θjk = (θjk,l : l = 1, . . . , L)⊤ is a vector of unknown approximation parameters
satisfying the constraints θjk,l ≥ 0 for all l = 1, . . . , L and ∑L
l=1 θjk,l = 1. Figure 1 shows
an example of a continuous monotone function gjk and its piecewise linear approximation
gs
jk.
Given this function approximation, an approximate marginal log-likelihood can be
written as
l(Θκ) =
N
∑
i=1
log

 
∫
[0,1]K
J
∏
j=1
πj(U; αj, θj, κ)yij (1 − πj(U; αj, θj, κ))1−yij dD(U; Σ)


,
(5)
where αj = (αjk : k = 1, . . . , K)⊤ and θj = (θjk : k = 1, . . . , K)⊤ are the weights and
parameters in the sieve approximation of the IRF for item j given by πj(U; αj, θj, κ) =
∑K
k=1 αjkqjkgs
jk(Uk; θjk, κ), D(U; Σ) = D(U; 0, Σ) denotes the cumulative distribution
function for the Gaussian copula model, for which the mean and covariance matrix satisfy
the constraints introduced in Section 2.2, and Θκ is introduced as a generic notation for
the vector of unknown parameters. For computational convenience, we parameterize Σ
through its Cholesky decomposition Σ = LL⊤, where L = (lkk′)K×K is a lower triangular
matrix with rows denoted by l⊤
k . Thus, Θκ = (αj, θjk, lk : j = 1, . . . , J ; k = 1, . . . , K)⊤.
We include κ as a subscript to emphasize its dependence on the grid points.
8

Figure 1: Example of a continuous monotone function gjk (solid line, ) and its sieve
piecewise linear approximation gs
jk (dashed line, ), evaluated on equally spaced knots
κ = (0, 0.2, 0.4, 0.6, 0.8, 1)⊤.
Note that all the unknown parameters are subject to constraints. In particular, αjk
and θjk,l are nonnegative and αj⊤qj = 1 and θ⊤
jk1 = 1, where 1 is a vector of appropriate
dimension with all elements being 1. In addition, rows of L must satisfy ||lk||22 = 1,
where || · ||2 denotes the Euclidean norm, to ensure Σ is a positive definite correlation
matrix. We denote the constrained parameter space of Θκ by Ξκ. We estimate Θκ by
the sieve marginal maximum likelihood estimator (SMMLE), obtained by maximizing the
approximate marginal log-likelihood,
Θˆ κ = arg max
Θ
κ ∈ Ξκ
l(Θκ). (6)
Remark 2.4 (Comment on the asymptotic consistency of SMMLE). We note that the
standard asymptotic theory for sieve estimators (Shen, 1997) is not directly applicable to
the SMMLE (6) under the conventional asymptotic regime where the number of items J
is fixed and the sample size N goes to infinity. This is because the data we consider here
are binary. As the individuals are assumed to be independent and identically distributed
in our model, the maximum number of parameters that can be estimated is 2J − 1. When
J is fixed, it is impossible to estimate the infinite-dimensional functions consistently.
As a large sample size is also required to estimate nonparametric functions, this implies
that the proposed model is more suitable for large-scale data when both the number of
items, J, and the sample size, N , are large. In fact, we believe that it is possible to
establish the consistency of the SMMLE under a double asymptotic regime where both N
and J grow to infinity, a setting commonly considered in the analysis of nonparametric
item response theory models (Douglas, 1997) and high-dimensional latent variable models
(Chen et al., 2020, Chen and Gu, 2024). Such a consistency result requires extending the
9

existing theory for sieve estimators to this double asymptotic regime and carefully letting
the number of grid points in κ increase with N and J at a suitable speed. We leave it for
future investigation.
2.4 Computation
Solving the maximization problem (6) is computationally nontrivial. There are two chal
lenges. First, the approximate marginal log-likelihood involves a K-dimensional integral
in the K-dimensional cube. The computational complexity of a standard expectation
maximization (EM) algorithm (Dempster et al., 1977) grows exponentially fast with the
latent dimension, which quickly becomes computationally infeasible when K ≥ 5. Sec
ond, the unknown parameters live in a constrained parameter space Ξκ. Therefore, care
needs to be taken to ensure the updated parameters always stay in Ξκ. To tackle both
issues, we propose a stochastic-approximation mirror descent (SA-MD) algorithm that
combines the stochastic-approximation algorithms for latent variable models (De Bor
toli et al., 2021, Zhang and Chen, 2022) with mirror gradient descent (Nemirovski and
Yudin, 1983, Beck and Teboulle, 2003). This algorithm iterates between two steps – 1)
a stochastic-approximation (SA) step that constructs an approximate stochastic gradient
of l(Θκ) by generating approximate samples of the latent variables from their posterior
distributions, and 2) a mirror-descent (MD) step that updates Θκ using the approximate
stochastic gradient from the SA step within the constrained space Ξκ. Due to space
constraints, we reserve technical and implementation details of the SA-MD algorithm to
the Online Supplementary Materials. The proposed method has been implemented in the
R package gapmCDM, available online at https://github.com/ccardehu/gapmCDM.
Remark 2.5 (Factor scores). The latent attributes for individual i are sampled from the
approximate posterior distribution U(t)
i ∼ f (U | yi; Θ(t)
κ ) at iterations t = 1, . . . , T of the
proposed SA-MD algorithm. Thus, the expected a-posteriori (EAP) factor scores can be
computed as the Polyak-Ruppert average Uˆ i = 1
T −ω
∑T
t=ω+1 U(t)
i , for all i = 1, . . . , N ,
where ω < T is a fixed burn-in period.
3. Simulation Studies
In what follows, we evaluate the proposed model via two simulation studies. The first
study concerns a confirmatory setting, for which the Q-matrix and the number of la
tent attributes are known. The proposed model is evaluated in terms of model fitting
and parameter estimation, and further compared with the aPM-CDM. The second study
10

considers an exploratory setting where the Q-matrix is unknown. Under this setting, we
examine whether the attributes can be accurately measured without knowing a Q-matrix.
3.1 Study I: Confirmatory Setting
3.1.1 Data Generation
We present two simulation settings, one in which the data is generated from an aPM
CDM, and one from the GaPM-CDM. In both cases, we consider a fixed-length test
with J = 20 items, two sample sizes N ∈ {1000, 3000}, and number of latent attributes
K ∈ {3, 5}. To make models comparable, latent attributes are generated from a Gaussian
copula with mean μ = 0K and correlation matrix Σ = σ1K1⊤K + (1 − σ)IK, where IK
is the K-dimensional identity matrix, for σ ∈ {0, 0.7}. Thus, in total we consider 16
simulation scenarios, 8 per model. In each case, we generate R = 100 datasets. The
Q-matrices used in this study are included in the Online Supplementary Materials.
When the data comes from the aPM-CDM, we fix the guessing and slipping prob
abilities to be at most 0.2 on all IRFs. More specifically, we generate intercepts from
δj0 ∼ Uniform(0, 0.2) and random slopes such that 1 − ∑K
k=1 δjkqjk ≤ 0.2 for all items.
When the true data generating process is a GaPM-CDM, we set the weights to values
such that ∑K
k=1 αjkqjk = 1 for all items. For the IRFs, we assume the true gjks to be one
of the Beta(3, 3), Beta( 1
3, 1
3 ), Beta(1, 3), or Beta(3, 1) cumulative distribution functions.
3.1.2 Evaluation Criteria
On each simulated dataset, we fit the aPM-CDM and the GaPM-CDM and compare them
in terms of parameters, IRF, and factor scores recovery, as well as model fit on unobserved
data.
When the fitted model is the same as the true model (i.e., no model misspecification),
we evaluate parameter recovery through the mean squared error (MSE). Let θ ∈ Θκ
denote a generic parameter under the GaPM-CDM and θˆ(r) ∈ Θˆ (r)
κ its estimate for the
r-th replication. For the aPM-CDM, we simply drop the subscript and write Θ and Θˆ (r)
for the true and estimated parameters, respectively. The MSE is calculated as:
MSE(θˆ) = 1
R
R
∑
r=1
(θˆ(r) − θ)2 .
For simplicity, we report the average MSE (AvMSE) across all items for δˆjks in the
11

aPM-CDM and αˆjks in the GaPM-CDM such that qjk = 1 in the Q-matrix, along with
the AvMSE for the vector of free parameters in Σˆ = LˆLˆ⊤. For the aPM-CDM we also
report the AvMSE for the estimated means μˆ.
To evaluate IRF accuracy, we compute the integrated squared error (ISE):
ISE(πˆ(r)
j )=
∫
[0,1]K
(
πˆ(r)
j (U) − πjM(U)
)2 dU , j = 1, . . . , J,
where πˆ(r)
j (U) denotes the estimated IRF for item j at replication r, and πjM(U) is
the corresponding true IRF under model M ∈ {aPM-CDM, GaPM-CDM}. When the
estimated model is the GaPM-CDM, we write ISEκ(πˆ(r)
j ) to emphasize the dependence of
the approximation on the grid points. We report the average ISE (AvISE) across items
and replications.
Lastly, for each k = 1, . . . , K, we compare latent attribute recovery by computing the
Spearman’s rank correlation between the EAP scores from the r-th replication and the
true scores. We denote this correlation by Ck. The average rank correlation (AvC) across
latent attributes and replications is reported.
To compare model fit, we compute the difference between marginal log-likelihoods
of the GaPM-CDM and aPM-CDM evaluated on data that has not been used in the
estimation process. More specifically, after computing Θˆ (r)
κ for the GaPM-CDM and Θˆ (r)
for the aPM-CDM, we generate 500 new observations from the true model and evaluate
the corresponding marginal log-likelihoods l(Θˆ (r)
κ ) and l(Θˆ (r)) as in (5) but on the new
sample. An importance sampling approach for computing the marginal log-likelihood is
described in the Online Supplementary Materials. The difference D(r) = l(Θˆ (r)
κ ) − l(Θˆ (r))
is then used for model comparison. If D(r) > 0, the GaPM-CDM has better fit on new
data at replication r than the aPM-CDM. The opposite is true if D(r) < 0, and D(r) ≈ 0
implies similar fit. We report the average marginal log-likelihood difference D ̄ across all
replications. We use this measure of model fit because the GaPM-CDM and the aPM
CDM are not directly comparable due to the complex parametrization of our model,
and information criteria are not well-defined in the context of infinite-dimensional latent
variable models.
3.1.3 Results
The aPM-CDM and GaPM-CDM were estimated using the SA-MD algorithm in Section
2.4. When the data is generated from the aPM-CDM, in the GaPM-CDM we use knots
κ0 = (0.05, 0.1, 0.2, ..., 0.9, 0.95)⊤, for which the added grid points near the boundary
allow for better approximation of IRFs with guessing and slipping probabilities. When the
12

Estimated Model
aPM-CDM GaPM-CDM
σ K N AvMSE AvISE AvC AvISEκ AvCκ D ̄
δˆj σˆkk′ μˆ
0.0
3 1000 0.48 13.19 1.90 0.16 76.12 0.40 75.60 −4.25
3000 0.20 3.68 0.59 0.07 76.35 0.21 76.16 −1.72
5 1000 0.82 18.06 6.78 0.32 65.26 0.47 65.07 −0.98
3000 0.31 4.12 2.63 0.14 66.09 0.26 66.01 −0.18
0.7
3 1000 0.89 10.05 1.13 0.25 83.30 0.50 82.90 −7.79
3000 0.34 2.76 0.39 0.10 83.67 0.23 83.50 −3.75
5 1000 1.66 14.20 3.02 0.49 79.55 0.61 79.25 −9.53
3000 0.59 4.11 0.81 0.17 80.34 0.27 80.23 −2.97
Table 1: Simulation Study I (true model aPM-CDM). The AvMSE, AvISE, and AvC
have been multiplied by 100 to allow for better numerical comparison.
data follows an GaPM-CDM, we use a set of equally spaced knots κ1 = (0.05, ..., 0.95)⊤.
Further details on selection of tuning parameters and initial values are given in the Online
Supplementary Materials.
Table 1 shows that when the true data generating process follows an aPM-CDM, the
GaPM-CDM can still perform relatively well, not far behind from the aPM-CDM. The
AvISE for the GaPM-CDM is not much higher than that of the aPM-CDM, and, while the
differences between marginal log-likelihoods on new data are on average negative across
all simulation settings, the value of D ̄ is not large. Moreover, comparison of the AvC
between models suggest that the GaPM-CDM is able to recover the latent attributes
and the ranking of individuals just as well as the aPM-CDM. We conclude that, under
model misspecification, the GaPM-CDM has slightly less generalization power and is less
efficient than the aPM-CDM in terms of IRF and latent attributes recovery, but the gap
between models is not large.
However, when data are generated from a GaPM-CDM, the aPM-CDM is highly mis
specified, as suggested by the results in Table 2. Comparison of the AvISE and AvC
between the GaPM-CDM and aPM-CDM show how the latter fails to recover the true
13

Estimated Model
aPM-CDM GaPM-CDM
σ K N AvISE AvC AvMSEκ
AvISEκ AvCκ D ̄
αˆ j σˆkk′
0.0
3 1000 1.62 83.58 0.72 0.23 0.32 84.61 18.99
3000 1.59 83.70 0.49 0.07 0.15 84.92 23.94
5 1000 1.60 76.33 0.66 0.32 0.35 77.55 13.90
3000 1.54 76.69 0.44 0.10 0.18 77.82 16.56
0.7
3 1000 1.59 88.11 1.71 0.14 0.48 89.09 53.53
3000 1.48 88.29 0.83 0.04 0.20 89.42 60.89
5 1000 1.96 83.76 2.10 0.31 0.57 85.92 51.26
3000 1.81 84.06 0.97 0.10 0.24 86.39 55.57
Table 2: Simulation Study I (true model GaPM-CDM). The AvMSE, AvISE, and AvC
have been multiplied by 100 to allow for better numerical comparison.
IRFs and the latent variables scores. Moreover, the values of D ̄ are significantly larger
than zero, suggesting high impact of model misspecification in the aPM-CDM on gener
alizability to out-of-sample data, particularly when the latent attributes are correlated.
3.2 Study II: Exploratory Setting
This simulation study extends the previous one by fitting exploratory GaPM-CDMs (i.e.,
assuming the Q-matrix is not known) when the data is generated from the GaPM-CDM.
Data generation details are the same as before. The simulation exercise consists of R =
100 replications.
3.2.1 Evaluation Criteria
We report the same evaluation criteria as before. This time, however, we do not consider
the information encoded in the Q-matrix when computing such metrics. That is, the
AvMSE is computed over all estimated weights αˆj and not only over those indicated to
be positive by the Q-matrix. Similarly, the AvISE includes the contribution of estimated
14

functions gˆs
jk for which qjk = 0 in the true IRF. This also applies to the recovered factor
scores, and thus a similar caveat holds for the AvC. Therefore, the AvMSE, AvISE,
and AvC for the exploratory GaPM-CDMs should reflect the lack of information, if any,
coming from not incorporating the design of the Q-matrix into the measurement model.
Results discussed below hold up to a permutation of the ordering of the latent attributes,
adjusting accordingly the columns of the estimated weights and the columns and rows of
the latent variables correlation matrix.
3.2.2 Results
We fit two exploratory GaPM-CDMs on each simulated data, one using knots κ1 from
Study I and the other using a coarser set of evenly spaced knots κ2 = (0.1, . . . , 0.9)⊤.
Results in Table 3 show that exploratory GaPM-CDMs do not perform significantly worse
than the confirmatory model, even without the information from the Q-matrix. The
AvMSE for weights and factor correlations are comparable between models, sometimes
smaller for the exploratory models, and, according to the AvISE and AvC, there is not
much loss of information in exploratory settings in terms of IRF and latent attributes
recovery. The average difference between the marginal log-likelihoods on test data is
negative in most cases, but the gap closes with the sample size.
Our simulation results thus provide substantial evidence for empirical identifiability of
the GaPM-CDM, even when no constraints are imposed in the model parameters through
the design Q-matrix. That is, we are able to recover IRFs and, more importantly, factor
scores, in scenarios where the Q-matrix is not available or misspecified.
4. Real Data Applications
We apply the proposed method to two real-world datasets. The first application con
cerns data from an English test designed to assess three attributes. In this application,
the item-attribute relationship is predefined. The second application concerns patient
reported outcomes from clinical and healthcare research. In this application, the number
of attributes and the item-attribute relationship are unknown and will be learned by using
the proposed model.
15

ρ = 0 ρ = 0.7
K=3 K=5 K=3 K=5
N 1000 3000 1000 3000 1000 3000 1000 3000
AvMSEκ (αˆ j)
C
κ1 0.72 0.49 0.66 0.44 1.71 0.83 2.10 0.97
E
κ1 0.61 0.39 0.56 0.36 1.68 0.85 3.30 0.96
E
κ2 0.60 0.39 0.56 0.35 1.65 0.84 3.30 0.94
AvMSEκ (σˆkk′ )
C
κ1 0.23 0.07 0.32 0.10 0.14 0.04 0.31 0.10
E
κ1 0.35 0.16 0.57 0.27 0.82 0.49 2.50 2.07
E
κ2 0.36 0.17 0.57 0.27 0.95 0.59 2.86 2.20
AvISEκ
C
κ1 0.32 0.15 0.35 0.18 0.48 0.20 0.57 0.24
E
κ1 0.38 0.19 0.54 0.34 0.65 0.30 1.95 0.58
E
κ2 0.40 0.20 0.56 0.35 0.67 0.31 1.99 0.59
AvCκ
C
κ1 84.61 84.92 77.55 77.82 89.09 89.42 85.92 86.39
E
κ1 84.39 84.80 76.99 77.54 88.74 89.25 83.54 85.56
E
κ2 84.41 84.79 77.01 77.54 88.72 89.22 83.34 85.50
D ̄
(Cκ1 vs.)
E
κ1 −2.74 −1.10 −6.71 −2.27 −1.51 0.08 −14.69 −2.80
E
κ2 −2.51 −1.00 −6.47 −2.20 −1.22 −0.07 −14.92 -2.66
Table 3: Simulation Study II. Rows denoted by Cκ⋆ and Eκ⋆ correspond to the results for
the confirmatory and exploratory GaPM-CDMs with knots κ⋆, respectively. The AvMSE,
AvISE, and AvC have been multiplied by 100 to allow for better numerical comparison.
16

4.1 English Test Data
We consider data from the 2003-2004 grammar section of the Examination for the Cer
tificate of Proficiency in English (ECPE) test, designed and collected by the University
of Michigan English Language Institute. The dataset contains responses for a sample
of N = 2922 individuals to J = 28 items evaluating three (K = 3) latent attributes,
namely knowledge of morphosyntactic rules (Morph.), cohesive rules (Cohes.), and lexical
rules (Lexic.) of the English language grammar. The same dataset has been analyzed in
Templin and Bradshaw (2014), Chiu et al. (2016) and Shang et al. (2021) using classical
CDMs and PM-CDMs.
A Q-matrix is available based on the design of the test, which can be found in Shang
et al. (2021). According to this Q-matrix, 19 items measure a single attribute and 9
measure two attributes. No item requires all three attributes. In the current analysis, the
Q-matrix is assumed to be known and incorporated in the models.
We apply the GaPM-CDM, aPM-CDM, ACDM, and GDINA models to the data.
For the GaPM-CDM, we use knots κ1 = (0.025, 0.05, 0.1, 0.2, . . . , 0.9, 0.95, 0.975)⊤, where
the additional knots near the boundaries allow for modeling IRFs with guessing and
slipping probabilities. Details on tuning parameters and initial values are discussed in the
Online Supplementary Materials. As in Simulation Study I, we compare the generalization
power of these models by computing the difference between marginal log-likelihoods on
unobserved data. In this case, we perform a cross-validation (CV) exercise in which
the observed data is randomly split into training (80%) and testing sets (20%). At the
r-th CV replication, we fit the models to the training data and evaluate the marginal
log-likelihood on the test data. We then compute the difference D(r), as defined earlier,
for r = 1, . . . , 100. Model comparison is based on the average difference D ̄ across all CV
replications. The average marginal log-likelihood difference between the GaPM-CDM and
the aPM-CDM is D ̄ = 1.99 (with (0.60, 3.37) as the 95% confidence interval), showing
that the GaPM-CDM with knots near the boundary performs better than the aPM-CDM
in terms of out-of-sample prediction.
In what follows we discuss the estimation results of the GaPM-CDM with knots κ1
on the full dataset. Figure 2 shows some examples of the estimated monotone functions
gˆjk(Uk) and the corresponding IRF surfaces πˆj(U ). These items were selected from those
that require two latent attributes according to the Q-matrix. For instance, item 1 (Figure
2a) has a high guessing probability at the lower end of the Morph. and Cohes. scales,
with comparable contributions from both attributes (αˆ1,M = 0.50 and αˆ1,C = 0.50). The
IRF is then increasing in Morph. and Cohes., with high probabilities of correct response
17

across the full range of both attribute values.
(a) Item 1
(b) Item 3
(c) Item 12
Figure 2: Estimated weights (αˆjk), estimated monotone functions (gˆjk(Uk)), and esti
mated IRF surface (πˆj(U )) under the GaPM-CDM, for selected items 1, 3, and 12 in the
ECPE dataset.
The estimated functions gˆ3,M and gˆ3,L (Figure 2b) indicate that item 3 has high
guessing and moderate slipping probabilities, consistent with benchmark model estimates.
Unlike these models, the GaPM-CDM captures the non-linear relationships between latent
attributes and response probabilities. The estimated weights (αˆ3,M = 0.93 and αˆ3,L =
0.07) show that the IRF surface πˆ3(U ) is driven mainly by Morph., with low contribution
from Lexic., further suggesting possible misspecification in the corresponding row of the
Q-matrix. Item 12 (Figure 2c) shows low guessing and moderate slipping probabilities.
The estimated functions gˆ12,M and gˆ12,L (and corresponding weights αˆ1,M = 0.47 and
18

αˆ12,L = 0.53) yield a highly non-linear IRF surface with low response probabilities for
Morph. and Lexic. below 0.5, rising above that threshold.
Table 4 shows the estimated covariance and correlation matrices of the latent at
tributes for the aPM-CDM and the GaPM-CDM, respectively. The diagonal entries of
the covariance matrix are close to one and the estimated means for the Gaussian copula in
the aPM-CDM are all relatively small. For comparison, we also present the correlations
for the aPM-CDM (above diagonal) and the means in the 0-1 scale.
aPM-CDM† GaPM-CDM‡
Morph. Cohes. Lexic. Morph. Cohes. Lexic.
Morph. 1.26 0.79 0.88 1.0 0.83 0.86
Cohes. 0.92 1.09 0.82 1.0 0.82
Lexic. 0.98 0.85 0.97 1.0
μˆ −0.37 0.42 0.82 0 0 0
μˆ (0-1 scale) 0.36 0.66 0.79 0.5 0.5 0.5
Table 4: Estimated covariance (for aPM-CDM) and correlation (for GaPM-CDM) ma
trices for the latent attributes. ECPE dataset. †Entries in italics above the diagonal are
correlations in aPM-CDM. ‡Underlined entries are fixed parameters in the GaPM-CDM.
Figure 3 shows the estimated EAP factor scores for both models. The scatterplots for
the aPM-CDM factor scores (Figure 3a) are consistent with those in Shang et al. (2021).
In the GaPM-CDM (Figure 3b) we are constrained by the fixed means in the Gaussian
copula. However, the factor scores produced by the two models are largely consistent in
terms of their rank order. In fact, the Spearman’s rank correlations between factor scores
are 0.99 for all for three attributes.
4.2 Patient-reported Outcomes
This application concerns data from the Patient-Reported Outcomes Measurement Infor
mation System (PROMIS, Cella et al., 2010), where the PROMIS emerged as an inter
disciplinary university consortium initiative advocating for standardized, precise, and
efficient measurement of patient-reported symptoms. The PROMIS network collected
self-reported data on physical, mental, and social health from a representative sample
of the general United States population and multiple populations with chronic diseases.
Here, we study a PROMIS module on social health, which focuses on the patient’s social
19

(a) EAP factor scores for aPM-CDM
(b) EAP factor scores for GaPM-CDM
Figure 3: Estimated EAP factor scores. ECPE data.
function, defined as the participation in and satisfaction with usual social roles in daily
life situations and activities (Castel et al., 2008, Hahn et al., 2010). This module contains
J = 56 items. The attributes that these items measure and their relationship with the
items are unknown. We analyze a sub-sample from wave 1 of PROMIS, consisting of
N = 737 non-clinical patients who responded to all the items. The median age for the
respondents in our sample is 51 (min = 18, q25 = 39, q75 = 64, max = 87), and sex
was evenly distributed (49.9% male, 50.1% female). Observed responses were originally
measured on a 5-point Likert scale and were positively oriented (i.e., higher values mean
better social role performance, SRPPER). However, for the purpose of this paper, we
dichotomized the original responses.2 We apply the GaPM-CDM and aPM-CDM to this
dataset under an exploratory setting.
We first learn the number of attributes by cross-validation, as follows. Let the number
2Values greater or equal than 4 in the original 5-point Likert scale were assigned a value of 1, and 0
otherwise.
20

of latent attributes K iterate over a set of candidate values K = {1, . . . , 7}. For a given
K, we randomly split the observed data into training (80%) and testing (20%) sets r =
1, . . . , R = 100 times. At each replication, we fit both aPM-CDM and GaPM-CDM
on the training data to obtain the (S)MMLEs Θˆ (r) and Θˆ (r)
κ , respectively, and then
we evaluate the marginal log-likelihood on the testing data. The cross-validation ‘error’
for a given K is then computed as CVE(K) = 1
R
∑R
r=1 l(Θˆ (r)) for the aPM-CDM and
CVEκ(K) = 1
R
∑R
r=1 l(Θˆ (r)
κ ) for the GaPM-CDM. For each model, we select the latent
dimension by Kˆ = arg maxK∈K {CVE(K)}, giving Kˆ = 5 in both cases (Figure 4). An
important result is that the GaPM-CDM fits the testing data better than the aPM-CDM
across all potential dimensions of the latent attribute space. For the selected Kˆ , we fit
the models on the whole dataset with knots κ = (0.05, . . . , 0.95)⊤, and discuss results
below. Implementation details are reserved to the Online Supplementary Materials.
Figure 4: Cross-validation test-data marginal log-likelihood for the GaPM-CDM and
aPM-CDM. Error bars correspond to the standard error of the average test-data marginal
log-likelihood for each level of K = 1, . . . , 7.
In the absence of a design Q-matrix, model interpretation is based on the recovered
structure of the matrix of estimated weights with rows αˆj⊤ for all 56 items and the
estimated correlation matrix in the Gaussian copula model for the five latent attributes.
Figure 5 shows a sparse (transpose) matrix of estimated weights which allows for clear
interpretation of the recovered latent attributes. We implement an arbitrary permutation
of the items and the latent attributes for better visualization. Most items mostly measure
one of the latent attributes, while a small subset of them are related more than one.
The first attribute (U1) is measured by items associated with personal and social
leisure functioning. Questions loading on this attribute relate to the patient’s perceived
21

Figure 5: Matrix of estimated weights (transposed) for the Kˆ = 5 dimensional GaPM
CDM on the PROMIS dataset.
capacity to engage in recreational and community activities, particularly with friends, and
to fulfill social roles and responsibilities. Some examples of items with large contributions
are SRPPER20 (“I am able to do all of the activities with friends that are really important
to me”), SRPPER45 (“I can keep up with my social responsibilities”), and SRPPER50
(“I am able to do all of the community activities that are really important to me”).
The second latent attribute (U2) focuses on the individual’s perceived personal and
social leisure functioning capacity. Items with large estimated weights on this attribute
are mostly negatively worded questions on restrictions, constraints, or barriers that affect
their degree of autonomy, freedom, and satisfaction about their ability to engage in per
sonal leisure and recreational activities. Recall that negatively worded items have been
already reverse coded in the data, meaning that high scores on these items are associ
ated with higher personal and social leisure functioning. However, the emergence of two
attributes (U1 and U2) about essentially the same construct of social function reflects
the nuance of item wording. Some examples of items measuring this latent attribute are
SRPPER29 (“I have to do my hobbies or leisure activities for shorter periods of time
than usual (Reversed)”) and SRPPER41 (“I have to limit my hobbies or leisure activities
(Reversed)”).
The third recovered latent attribute (U3) is related to the individual’s perceived family
and household role functioning capacity. Items loading on this latent attribute are neg
atively worded questions on the person’s restrictions in fulfilling personal and domestic
22

roles, including time and capacity limitations. As before, items were reverse coded so
higher scores on these items reflect higher family and household role functioning. Note
how some items load similarly on U2 and U3, revealing close similarities between latent
constructs and reflecting the nuance of item wording. Some examples include items SRP
PER30 (“I feel limited in my ability to visit relatives (Reversed)”), SRPPER56 (“I feel
limited in the amount of time I have to visit relatives (Reversed)”).
The fourth latent attribute (U4) can be interpreted as the individual’s work func
tioning, broadly defined to include both formal employment and domestic labor. Items
weighing heavily on this dimension reflect the individual’s both perceived ability and
limitations in meeting work-related expectations and responsibilities. Some examples in
clude items SRPPER06 (“I am accomplishing as much as usual at work, including work
at home”), SRPPER23 (“I am able to do all of my usual work, including work at home”),
and SRPPER47 (“I can keep up with my work responsibilities, including work at home”).
The underlying concept of the fifth latent attribute (U5) is family role functioning.
This dimension relates to the individual’s perceived ability to engage in and meet family
related obligations and activities. Items with large estimated weights include SRPPER10
(“I am able to do all of my regular family activities”) and SRPPER05 (“I can do every
thing for my family that I feel I should do”). Similarly, the presence of two attributes (U3
and U5) about essentially the same construct of family role function reflects the influence
of item wording.
The recovered latent attributes are highly correlated, as reported in Table 5. This
explains why some items load on more than one attribute. Indeed, closer inspection
reveals how these items involve social role performance in areas that overlap with the
identified attributes. For example, item SRPPER33 (“I am able to run errands as much
as usual”) loads on personal and social leisure (U1 and U2), work (U4), and family (U5)
functioning capacity; and item SRPPER53 (“I am able to do all of the work that people
expect me to do, including work at home”) measures the individuals’ work (U4) and family
role (U5) functioning, while also tapping into the personal and social leisure functioning
(U1) dimension.
5. Discussions
This paper presents a semiparametric extension of the PM-CDM proposed by Shang et al.
(2021) and further develops a sieve-based estimator for model estimation and a stochastic
optimization method for its computation. Simulation studies and two real data examples
23

U1 U2 U3 U4 U5
U1 1.0 0.78 0.76 0.75 0.86
U2 1.0 0.76 0.73 0.69
U3 1.0 0.61 0.68
U4 1.0 0.83
U5 1.0
Table 5: Estimated correlation matrix for the five recovered latent attributes. PROMIS
dataset. Underlined entries are fixed parameters in the GaPM-CDM.
demonstrate that the proposed model is more flexible than its parametric counterpart,
which yields better fits to the data. In particular, the second simulation study and the
application to PROMIS data suggest that the proposed model is identifiable under an
exploratory setting when there is no prior knowledge about the Q-matrix of the item
attribute relationship, which substantially expands the scope of PM-CDMs in terms of
their application.
The current model focuses on binary item responses. However, other response types
may appear in cognitive diagnosis, including ordinal responses, continuous responses such
as response times, and count-valued responses from tests with repetitive tasks or eye
tracking sensors. We believe that a general framework of GaPM-CDMs can be developed
for different types of multivariate responses by extending the parametric framework of
Lee and Gu (2024). For example, for ordinal responses, we can model the conditional
probabilities of adjacent categories with the monotone generalized additive form that we
introduce in the current model.
Many CDMs and PM-CDMs model the interaction effects between attributes, which
may be useful for uncovering complex psychological processes underlying the item re
sponses. We anticipate it is possible to incorporate interaction terms in a semiparametric
fashion into the current framework. However, the identifiability of such a model is more
complicated, and more constraints are required for the model parameters during the pa
rameter estimation. We leave it for future investigation.
Finally, some theoretical properties still need to be established. In particular, although
our simulation results provide strong evidence for the identifiability of the model, we did
not formally establish the model’s identifiability or further investigate the consistency of
the proposed estimator. As discussed earlier, these results cannot be established when
the number of items, J, is kept fixed, but are possible under a double asymptotic regime
24

where both J and the sample size, N , grow to infinity. The analysis under the dou
ble asymptotic regime is nontrivial. First, the dimension of the parameter space grows
together with J, for which many asymptotic tools are not directly applicable. Second,
the marginal likelihood is not easy to analyze, as it involves analytically non-trackable
integrals. Third, the model involves infinite-dimensional functions that are approximated
by a set of basis functions. We need to carefully choose the number of basis functions
based on both N and J to ensure the consistency of the sieve-based estimator and further
optimize its convergence speed. Besides model identifiability and estimation consistency,
it also remains unclear how model comparison should be formally performed, for example,
for selecting the number of attributes under the exploratory setting. A new information
criterion may be designed with a penalty function that accounts for the dimensional
ity of the sieve approximations and their bias. These problems are also left for future
investigation.
References
Airoldi, E. M., Blei, D. M., Erosheva, E. A., and Fienberg, S. E., editors (2014). Handbook
of Mixed Membership Models and Their Applications. Handbooks of Modern Statistical
Methods. Boca Rat ́on, FL, US: Chapman & Hall / CRC, 1st edition.
Airoldi, E. M., Blei, D. M., Fienberg, S. E., and Xing, E. P. (2008). Mixed Membership
Stochastic Blockmodels. Journal of Machine Learning Research, 9(65):1981–2014.
Bartholomew, D. J., Knott, M., and Moustaki, I. (2011). Latent Variable Models and
Factor Analysis: A Unified Approach. Wiley Series in Probability and Statistics. New
York, NY, US: John Wiley & Sons, Ltd, 3rd edition.
Beck, A. and Teboulle, M. (2003). Mirror descent and nonlinear projected subgradient
methods for convex optimization. Operations Research Letters, 31(3):167–175.
Blei, D. M., Ng, A. Y., , and Jordan, M. I. (2003). Latent Dirichlet allocation. Journal
of Machine Learning Research, 3(Jan):993–1022.
Castel, L. D., Williams, K. A., Bosworth, H. B., Eisen, S. V., Hahn, E. A., Irwin, D. E.,
Kelly, M. A. R., Morse, J., Stover, A., DeWalt, D. A., and DeVellis, R. F. (2008).
Content validity in the PROMIS social-health domain: a qualitative analysis of focus
group data. Quality of Life Research, 17(5):737–749.
Cella, D., Riley, W., Stone, A., Rothrock, N., Reeve, B., Yount, S., Amtmann, D., Bode,
R., Buysse, D., Choi, S., Cook, K., DeVellis, R., DeWalt, D., Fries, J. F., Gershon, R.,
Hahn, E. A., Lai, J.-S., Pilkonis, P., Revicki, D., Rose, M., Weinfurt, K., and Hays, R.
25

(2010). The Patient-Reported Outcomes Measurement Information System (PROMIS)
developed and tested its first wave of adult self-reported health outcome item banks:
2005-2008. Journal of Clinical Epidemiology, 63(11):1179–1194.
Chen, J. and de la Torre, J. (2013). A General Cognitive Diagnosis Model for Expert
Defined Polytomous Attributes. Applied Psychological Measurement, 37(6):419–437.
Chen, L. and Gu, Y. (2024). A Spectral Method for Identifiable Grade of Membership
Analysis with Binary Responses. Psychometrika, 89(2):626–657.
Chen, Y., Li, X., Liu, J., and Ying, Z. (2025). Item Response Theory —- A Statisti
cal Framework for Educational and Psychological Measurement. Statistical Science,
40(2):167–194.
Chen, Y., Li, X., and Zhang, S. (2020). Structured Latent Factor Analysis for Large-scale
Data: Identifiability, Estimability, and Their Implications. Journal of the American
Statistical Association, 115(532):1756–1770.
Chiu, C.-Y., K ̈ohn, H.-F., Zheng, Y., and Henson, R. (2016). Joint Maximum Likelihood
Estimation for Diagnostic Classification Models. Psychometrika, 81(4):1069–1092.
De Bortoli, V., Durmus, A., Pereyra, M., and Vidal, A. F. (2021). Efficient stochastic
optimisation by unadjusted Langevin Monte Carlo: Application to maximum marginal
likelihood and empirical Bayesian estimation. Statistics and Computing, 31(29):1–18.
de la Torre, J. (2011). The Generalized DINA Model Framework. Psychometrika,
76(2):179–199.
Dempster, A. P., Laird, N. M., and Rubin, D. B. (1977). Maximum Likelihood from
Incomplete Data via the EM Algorithm. Journal of the Royal Statistical Society: Series
B (Methodological), 39(1):1–38.
Donoho, D. and Stodden, V. (2003). When Does Non-Negative Matrix Factorization
Give a Correct Decomposition into Parts? In Proceedings of the 17th International
Conference on Neural Information Processing Systems (NIPS 2003), page 1141–1148.
Cambridge, MA, USA: MIT Press.
Douglas, J. (1997). Joint consistency of nonparametric item characteristic curve and
ability estimation. Psychometrika, 62(1):7–28.
Erosheva, E. A. (2002). Grade of membership and latent structure models with application
to disability survey data. PhD thesis, Carnegie Mellon University.
26

Erosheva, E. A., Fienberg, S. E., and Joutard, C. (2007). Describing disability through
individual-level mixture models for multivariate binary data. The Annals of Applied
Statistics, 1(2):502–537.
Fang, G., Liu, J., and Ying, Z. (2019). On the Identifiability of Diagnostic Classification
Models. Psychometrika, 84(1):19–40.
Gu, M. G. and Kong, F. H. (1998). A stochastic approximation algorithm with Markov
chain Monte-Carlo method for incomplete data estimation problems. Proceedings of the
National Academy of Sciences of the United States of America, 95:7270–7274.
Gu, Y. and Xu, G. (2021). Sufficient and Necessary Conditions for the Identifiability of
the Q-matrix. Statistica Sinica, 31(1):449–472.
Hahn, E. A., Cella, D., Bode, R. K., and Hanrahan, R. T. (2010). Measuring Social
Well-Being in People with Chronic Illness. Social Indicators Research, 96:381–401.
Hastie, T. J. and Tibshirani, R. J. (1990). Generalized Additive Models. Number 43 in
Chapman & Hall/CRC Monographs on Statistics and Applied Probability. Boca Rat ́on,
FL, US: Chapman & Hall / CRC.
Henson, R. A., Templin, J. L., and Willse, J. T. (2009). Defining a Family of Cognitive
Diagnosis Models Using Log-Linear Models with Latent Variables. Psychometrika,
74(2):191–210.
Junker, B. W. and Sijtsma, K. (2001). Cognitive Assessment Models With Few Assump
tions, and Connections With Nonparametric Item Response Theory. Applied Psycho
logical Measurement, 25(3):258–272.
Lazarsfeld, P. F. and Henry, N. W. (1968). Latent Structure Analysis. Boston, MA, US:
Houghton Mifflin, 1st edition.
Lee, S. and Gu, Y. (2024). New Paradigm of Identifiable General-response Cognitive
Diagnostic Models: Beyond Categorical Data. Psychometrika, 89(4):1304–1336.
Ma, W. (2022). A Higher-Order Cognitive Diagnosis Model with Ordinal Attributes for
Dichotomous Response Data. Multivariate Behavioral Research, 57(2-3):408–421.
Nemirovski, A. S. and Yudin, D. B. (1983). Problem Complexity and Method Efficiency in
Optimization. Number 15 in Wiley-InterScience Series in Discrete Mathematics. New
York, NY, US: John Wiley & Sons, Ltd, 1st edition.
Ramsay, J. O. (1988). Monotone Regression Splines in Action. Statistical Science,
3(4):425–461.
27

Ramsay, J. O. and Winsberg, S. (1991). Maximum marginal likelihood estimation for
semiparametric item analysis. Psychometrika, 56(3):365–379.
Robbins, H. and Monro, S. (1951). A Stochastic Approximation Method. The Annals of
Mathematical Statistics, 22(3):400–407.
Rupp, A. A., Templin, J., and Henson, R. A. (2010). Diagnostic measurement: Theory,
methods, and applications. New York, NY, US: Guilford Press, 1st edition.
Shang, Z., Erosheva, E. A., and Xu, G. (2021). Partial-Mastery Cognitive Diagnosis
Models. The Annals of Applied Statistics, 15(3):1529–1555.
Shen, X. (1997). On Methods of Sieves and Penalization. The Annals of Statistics,
25(6):2555–2591.
Sijtsma, K. and Molenaar, I. W. (2002). Introduction to Nonparametric Item Response
Theory, volume 5 of Measurement Methods for the Social Science. Thousand Oaks, CA,
US: SAGE Publications, Inc.
Skrondal, A. and Rabe-Hesketh, S. (2004). Generalized Latent Variable Modeling: mul
tilevel, longitudinal, and structural equation models. Interdisciplinary Statistics. Boca
Rat ́on, FL, US: Chapman & Hall, CRC.
Tatsuoka, K. K. (1983). Rule space: An approach for dealing with misconceptions based
on item response theory. Journal of Educational Measurement, 20(4):345–354.
Templin, J. L. and Bradshaw, L. (2014). Hierarchical Diagnostic Classification Models:
A Family of Models for Estimating and Testing Attribute Hierarchies. Psychometrika,
79(2):317–339.
Templin, J. L. and Henson, R. A. (2006). Measurement of Psychological Disorders Using
Cognitive Diagnosis Models. Psychological Measurement, 11(3):287–305.
von Davier, M. (2008). A general diagnostic model applied to language testing data.
British Journal of Mathematical and Statistical Psychology, 61(2):287–307.
von Davier, M. and Lee, Y.-S., editors (2019). Handbook of Diagnostic Classification
Models. Springer Series in Methodology of Educational Measurement and Assessment.
New York, NY, US: John Wiley & Sons, Ltd, 1st edition.
Zhang, S. and Chen, Y. (2020). A Partial Mastery, Higher-Order Latent Structural
Model for Polytomous Attributes in Cognitive Diagnostic Assessments. Journal of
Classification, 37(2):328–351.
Zhang, S. and Chen, Y. (2022). Computation for Latent Variable Model Estimation: A
Unified Stochastic Proximal Framework. Psychometrika, 87(4):1473–1502.
28

Online Supplementary Material for: ‘A Generalized Additive
Partial-Mastery Cognitive Diagnosis Model’
Camilo C ́ardenas-Hurtado∗ Yunxiao Chen†
Irini Moustaki‡
This supplementary material includes details for the proposed stochastic-approximation
mirror descent (SA-MD) algorithm in Section A, details on the importance sampling algo
rithm used for computing the marginal log-likelihood in Section B, implementation details
of the simulation studies in Section C, and further results for the empirical applications
in Section D.
A. Computational and implementation details of the SA
MD algorithm
In what follows, we elaborate further on the stochastic approximation (SA) and mirror
descent (MD) steps. Let t denote the iteration number and Θ(t)
κ be the parameter value at
the t-th iteration. We then discuss in detail the Metropolis-Adjusted Langevin algorithm
(MALA) and the analytical forms of the MD update rules.
A1. SA step
In the t-th iteration, the SA step constructs an approximate stochastic gradient for l(Θκ),
which takes the form of
G(Θ(t−1)
κ , U(t)
1 , . . . , U(t)
N)=
N
∑
i=1
∇Θκ log f (yi, U(t)
i ; Θκ)|Θκ=Θ(t−1)
κ
, (A.1)
where, for an individual i, yi = (yij : j = 1, . . . , J)⊤ is the vector of observed responses,
f (yi, Ui) is the complete-data density function, and U(t)
i is an approximate sample of the
∗Department of Statistics, LSE. Contact: c.a.cardenas-hurtado@lse.ac.uk
†Department of Statistics, LSE. Contact: y.chen186@lse.ac.uk
‡Department of Statistics, LSE. Contact: i.moustaki@lse.ac.uk
1

partial-mastery scores under the posterior density
f (U | yi; Θ(t−1)
κ ) ∝ f (yi, U; Θ(t−1)
κ)
=


J
∏
j=1
πj (U; α(t−1)
j , θ(t−1)
j , κ)yij (1 − πj (U; α(t−1)
j , θ(t−1)
j , κ))1−yij

×
dD(U; L(t−1)) . (A.2)
It can be shown that, when U(t)
i is an exact sample from (A.2), then G(Θ(t−1)
κ , U(t)
1 , . . . , U(t)
N)
is an exact stochastic gradient of l(Θκ), in the sense that
E
(
G(Θ(t−1)
κ , U(t)
1 , . . . , U(t)
N)
)
= ∂l(Θκ)
∂Θκ
∣ ∣ ∣
∣Θκ =Θ(t−1)
κ
,
where the expectation is with respect to U(t)
1 , . . . , U(t)
N under the posterior distribution
(A.2).
Since the posterior distribution (A.2) has a relatively complex form, sampling exactly
from this distribution is difficult. In our implementation, we perform MCMC sampling
of the latent attributes from the posterior distribution based on the Metropolis-Adjusted
Langevin algorithm (MALA, Roberts and Tweedie, 1996, Oliviero-Durmus and Moulines,
2024), following its computational efficiency and fast convergence in high dimensional
settings (Roberts and Rosenthal, 1998).
A2. MD step
The MD step is a stochastic version of the mirror descent algorithm (Beck and Teboulle,
2003) in which the model parameters are updated based on the stochastic gradient in
(A.1). The MD update rule takes the form
Θ(t)
κ = arg min
Θ
κ ∈Ξκ
{
G(Θ(t−1)
κ , U(t)
1 , . . . , U(t)
N )⊤Θκ + 1
γ(t) Dψ(Θκ, Θ(t−1)
κ)
}
, (A.3)
where γ(t) > 0 is a decaying step size and
Dψ(Θκ, Θ(t−1)
κ ) = ψ(Θκ) − ψ(Θ(t−1)
κ ) − (Θκ − Θ(t−1)
κ )⊤∇Θκ ψ(Θ(t−1)
κ)
is known as the Bregman divergence based on the distance-generating function
ψ(Θκ) =
J
∑
j=1
K
∑
k=1
αjk log(αjk) +
J
∑
j=1
K
∑
k=1
L
∑
l=1
θjk,l log(θjk,l) + 1
2
K
∑
k=1
||lk ||22
The Bregman divergence in (A.3) acts as a penalty term that prevents the update rule
to produce parameters that are ‘too far’ from the current point based on some distance
2

determined by ψ which is adapted to the local geometry of the parameter space. In
particular, the weights αj and sieve approximation parameters θjk live in the K- and L
dimensional probability simplexes, respectively, and therefore we use the negative entropy
to derive this distance. In this case, the update for these parameters in (A.3) has a closed
analytic form, which can be easily computed. For the parameters in the k-th row of L
we use the Euclidean distance and thus (A.3) becomes the proximal operator used in the
proximal stochastic gradient descent (Zhang and Chen, 2022, Atchad ́e et al., 2017). In
fact, since each row l⊤
k in L satisfies ||lk||22 = 1, the update for lk becomes a projected
gradient descent update, which has an analytic closed form solution. Consequently, the
MD step (A.3) can be computed with a low computational cost.
Convergence of the sequence Θ(t)
κ , t = 1, 2, . . ., to a stationary point Θ∗
κ ∈ Ξκ de
pends on an appropriate choice of the step sizes such that limt→∞
∑
t(γ(t))2 < ∞ and
limt→∞
∑
t γ(t) = ∞ (Robbins and Monro, 1951). Following theoretical results in Zhang
and Chen (2022), our choice of step size is γ(t) = μ t−0.5−ε for some constant μ > 0 and
arbitrarily small ε > 0. To improve performance of the proposed algorithm, we can let μ
to depend on the specific type of parameter in Θκ.
We further comment on the implementation of the SA-MD algorithm. First, our stop
ping criteria is based on a fixed but large number of iterations T . This avoids bias resulting
from premature stopping, and aligns better with the convergence of stochastic approxi
mation methods when T → ∞. Second, we compute the SMMLE as the Polyak-Ruppert
trajectory average (Polyak and Juditsky, 1992, Ruppert, 1988) of the parameter updates
at iterations beyond a fixed burn-in period ω < T . That is, Θˆ κ = (∑T
t=ω+1 Θ(t)
κ )/(T − ω).
This approach improves convergence speed and stability of the SMMLE and reduces sen
sitivity to noisy updates. The pseudo-code of the estimation procedure is described in
Algorithm 1 and it has been implemented in the R package gapmCDM, available online at
https://github.com/ccardehu/gapmCDM.
A3. Metropolis-Adjusted Langevin Algorithm (MALA)
For computational simplicity, we formulate the GaPM-CDM in terms of the transformed
latent attributes Z = (Zk : k = 1, . . . , K)⊤, with Zk = Φ−1(Uk). The multidimensional
integral in the marginal log-likelihood thus is taken over RK with respect to the measure
defined by the K-variate Normal distribution f (Z; Θκ) ∼ NK(0, Σ). The complete-data
and conditional density functions in (A.1) and (A.2) are also expressed in terms of Z.
A basic description of the Metropolis-Adjusted Langevin algorithm (MALA, Roberts
and Tweedie, 1996, Oliviero-Durmus and Moulines, 2024) is as follows. The MALA is
3

Algorithm 1 Pseudo-code for SA-MD Settings: Iteration limit T , burn-in period ω, step-size constant μ > 0.
Input: Complete data (yi, U(0)
i : i = 1, . . . , N ) and starting values Θ(0).
for t = 1, . . . , T do
SA step, eqs. (A.1) and (A.2):
for i = 1, . . . , N do
Sample: U(t)
i ∼ f (U | yi; Θ(t−1)
κ)
Compute: G(Θ(t−1)
κ , U(t)
1 , . . . , U(t)
N)=
N
∑
i=1
∇Θκ log f (yi, U(t)
i ; Θ(t−1)
κ)
MD step, eq. (A.3):
Update: Θ(t)
κ = arg minΘκ∈Ξκ
{
G(Θ(t−1)
κ , U(t)
1 , . . . , U(t)
N )⊤Θκ + 1
γ(t) Dψ(Θκ, Θ(t−1)
κ)
}
Output: Θˆ κ = (∑T
t=ω+1 Θ(t)
κ )/(T − ω)
an efficient MCMC sampler that requires minimal tuning in practice and has satisfactory
empirical performance in high-dimensional settings. The MALA uses information from the
local geometry of the target distribution, f (Z | yi; Θκ), to explore areas around the mode
of such distribution faster and more efficiently than other MCMC samplers. The MALA
is based on the Langevin dynamics solution of the following K-dimensional stochastic
differential equation:
dZ(t) = −∇Z log f (yi, Z; Θκ) dt + √2dB(t) , i = 1, . . . , N , (A.4)
where B(t), t = 1, 2, . . ., is a standard K-dimensional Brownian motion. Under mild
assumptions on f (Z | yi; Θκ), it is known that the continuous-time stochastic process Z(t)
has a strong solution with f (Z | yi; Θκ) as its invariant probability measure (Roberts and
Tweedie, 1996, Durmus and Moulines, 2017).
In practice, sampling Z(t+1)
i ∼ f (Z | yi; Θ(t)) from the continuous-time process is
not feasible, and thus a discrete-time approximation is required. The Euler-Maruyama
discretization of (A.4) gives the following update rule:
Z (∗)
i = Z(t)
i + h ∇Z log f (yi, Z(t)
i ; Θ(t)
κ ) + √2h ξ(t)
= Z(t)
i +h
(
∇Z log f (yi | Z(t)
i ; Θ(t)
κ ) + ∇Z log f (Z(t)
i ; Θ(t)
κ)
)
+ √2h ξ(t) , (A.5)
where h ∝ O(K1/3) is a fixed discretization step, and ξ(t) is a sequence of K-dimensional
standard Normal random variables.
The discretization of the continuous-time process introduces bias and makes the sam
pling inexact. To address this issue, the proposal Z(∗)
i in (A.5) is accepted or rejected
according to the Metropolis-Hastings algorithm, thereby ensuring ergodicity and exact
4

preservation of the invariant measure targeting p(Z | yi; Θ(t)
κ ). Namely, for each unit
i = 1, . . . , N in the sample, we set Z(t+1)
i = Z(∗)
i with probability
αh (Z (∗)
i , Z(t)
i ) = min
{
1, f (yi, Z(∗)
i ; Θ(t)
κ ) qh(Z(t)
i | Z(∗)
i)
f (yi, Z(t)
i ; Θ(t)
κ ) qh(Z(∗)
i | Z(t)
i)
}
,
where qh(Z′
i | Zi) is the transition kernel given by
qh (Z ′
i | Zi) = 1
(4πh)K/2 exp
(
−1
4h
∣ ∣
∣
∣Z ′
i − Zi − h ∇Z log f (yi, Z; Θ(t)
κ )|Z=Zi
∣ ∣
∣ ∣
2 2
)
In this paper we set h = μz K−1/3 for some constant μz > 0 such that the acceptance
rates are, on average, between 40% and 80% (Roberts and Rosenthal, 1998). Convergence
of parameter estimates obtained via the MALA-based SA-MD algorithm to MMLE can
be established following the theoretical results in De Bortoli et al. (2021).
A4. Mirror Descent (MD) update rules
For simplicity, we write G(Θ(t−1)
κ ) as an alias for the approximate stochastic gradient
vector G(Θ(t−1)
κ , U(t)
1 , . . . , U(t)
N ) in (A.1). Moreover, we write G(α(t−1)
j ) to denote the
sub-vectors corresponding to the derivatives with respect to weights αj:
G(α(t−1)
j )=
N
∑
i=1
∇
αj log f (yi, U(t)
i ; Θκ)|Θκ=Θ(t−1)
κ
;
and a similar notation holds for the vector of sieve approximation parameters θjk and the
row-vector lk.
The analytical solutions for the projection in the MD update rule in (A.3) are as
follows. For weights αjk ∈ αj the update rule has a closed form solution (Kivinen and
Warmuth, 1997, Beck and Teboulle, 2003):
α(t+1)
jk = qjk α(t)
jk exp(γ(αt)
[G(α(t)
j )]
k)
∑K
k′=1 qjk′ α(t)
jk′ exp(γ(αt)
[G(α(t)
j )]
k′ ) ,
where [x]i denotes the i-th entry of a vector/matrix x, qjk ∈ qj is the kth entry in the jth
row of the Q-matrix, and γ(αt) = μα t−0.51 is the weights-specific step size with constant
μα > 0. In vector notation, we have:
α(t+1)
j = α(t)
j ⊙ exp(γ(αt)G(α(t)
j ))
exp(γ(αt)G(α(t)
j ))⊤α(t)
j
⊙ qj ,
where exp(·) is element-wise and ⊙ denotes the entry-wise product.
5

A similar update rule is derived for sieve parameters θjk,l ∈ θjk:
θ(t+1)
jk,l = θ(t)
jk,l exp(γ(t)
θ
[G(θ(t)
jk )]
l)
∑L
l′=1 θ(t)
jk,l′ exp(γ(t)
θ
[G(θ(t)
jk
]
l′ ) ,
with similar expression in vector notation:
θ(t+1)
jk = θ(t)
jk ⊙ exp(γ(t)
θ G(θ(t)
jk ))
exp(γ(t)
θ G(θ(t)
jk ))⊤θ(t)
jk
.
For non-zero entries in the k-th row lk of the lower triangular matrix L, the MD
update rule becomes a projected gradient descent update with closed form solution:
l(t+1)
kk′ = (l(t)
kk′ + γ(t)
l
[G(l(t)
k )]
k′ )
∑
k<k′
(l(t)
kk′ + γ(t)
l
[G(l(t)
k )]
k′ )2 ,
or in vector notation:
l(t+1)
k = l(t)
k + γ(t)
l G(l(t)
k) ||l(t)
k + γ(t)
l G(l(t)
k )||22
,
B. Computing the marginal log-likelihood via Importance
Sampling
The marginal log-likelihood is a central quantity used for model comparison and assessing
goodness-of-fit. In general, marginal (log-)likelihoods are analytically intractable and
difficult to compute for most LVMs, especially in models with a large number of latent
attributes. In this paper, we compute the marginal log-likelihood using a Monte-Carlo
integration approach via importance sampling (IS).
The IS approximation of the marginal likelihood contribution for an individual i eval
uated at the SMMLE Θˆκ is:
∫
RK
f (yi | Z; Θˆ κ) p(Z; Θˆ κ) dZ ≈ 1
M
M
∑
m=1
f (yi | zm; Θˆ κ) p(zm; Θˆ κ)
qi(zm) ; zm ∼ qi(Z) ,
where qi(Z) is the importance distribution (indexed by i) and M is the number of IS
iterations. The marginal likelihood computed via IS will have lower variance than the
naive Monte-Carlo estimate for an appropriately chosen qi(Z). This can be achieved by
sampling from an importance distribution with heavier tails than p(Z; Θˆ κ). For conve
nience, we choose qi(Z) = MVN(μˆi, Σˆ i + IK), where μˆi and Σˆ i are the Polyak-Ruppert
trajectory averages of the posterior mean and posterior covariance matrix of the latent
attributes for unit i, computed via the online estimators μ(t+1)
i = μ(t)
i +(z(t)
i −μ(t)
i )/(t+1)
for the mean, and Σ(t+1)
i = (t Σ(t)
i )/(t + 1) + (t (z(t)
i − μ(t)
i )(z(t)
i − μ(t)
i )⊤)/(t + 1)2 for the
covariance matrix, respectively (see, Dasgupta and Hsu, 2007).
6

C. Additional Material on Simulation Studies
We now describe details and implementation settings for the confirmatory and exploratory
simulation studies. In both settings, we consider following Q-matrices:
Q⊤
3=

   
10010010011011011111
01001001010110110111
00100100101101101111

   
Q⊤
5=

          
10000100001000110011
01000010001100011001
00100001000110011100
00010000100011001110
00001000010001100111

          
For the IRFS in the aPM-CDM, the true guessing probabilities (intercepts) are drawn
from δj0 ∼ Unif(0, 0.2) for all j = 1, . . . , J. The slipping probabilities, denoted by sj,
is also drawn from sj ∼ Unif(0, 0.2) for all items. The non-zero factor loadings in the
aPM-CDM {δjk : qjk ̸= 0 , k = 1, . . . , K} are generated from δjk ∼ Unif(0, 1 − δj0 − sj)
and then adjusted such that 1 − ||δj||1 = sj.
The starting values for the intercepts (guessing probability) are δ(0)
j0 = 0.1, but can be
adjusted by the control arguments in the apmCDM function in the accompanying R package
gapmCDM. The starting values for the non-zero factor slopes are set to equal values such
that 1 − ∑K
k=0 δ(0)
jk = 0.1, a starting user-defined slipping probability, also subject to
adjustment. For example, when K = 3, the first row of the Q3-matrix is q1 = (1, 0, 0)⊤
and thus the initial values for the aPM-CDM IRF for item 1 are δ(0)
1 = (0.1, 0.8, 0, 0)⊤.
For item 10, we have q10 = (1, 1, 0)⊤, and therefore δ(0)
10 = (0.1, 0.4, 0.4, 0)⊤. Likewise, for
item 20, the corresponding row is q20 = 1⊤
3 and thus the IRF for this item is parametrized
by θ20 = (0.1, 0.3, 0.3, 0.3)⊤. We follow a similar strategy when K = 5.
For the IRFs in the GaPM-CDM, the true weights are set to equal values such that
q⊤
j αj = 1. In the confirmatory setting we follow the same approach. For example, when
K = 3, the first row of the Q3-matrix is q1 = (1, 0, 0)⊤ and thus the true and initial
values for the weights in the GaPM-CDM IRF for item 1 are α(0)
1 = (1, 0, 0)⊤. For
item 10, we have q10 = (1, 1, 0)⊤, and thus α(0)
10 = (0.5, 0.5, 0)⊤, etc. In the exploratory
setting, the starting weights are set to equal values such that ||αj||1 = 1 for all items.
The same approach holds for K = 5. For both confirmatory and exploratory GaPM
7

CDMs, the starting values for the sieve approximation parameters are set to values such
that gjsk(Uk; θ(0)
jk , κ) is the identity function defined on [0, 1], for all j = 1, . . . , J and
k = 1, . . . , K.
For both models and settings, the initial vector of means for the latent attributes is set
to μ(0)
K = 0K and the covariance matrix to Σ(0)
K = IK, with K ∈ {3, 5}. Recall that, for
model identification in the GaPM-CDM, μK = 0K is fixed and ΣK is a constrained to be
a correlation matrix. The starting values for the latent attributes, (Z(0)
i : i = 1, . . . , N ) are
the regression-based factor scores from an exploratory factor analysis on the tetrachoric
correlation of the observed (binary) data, after performing the oblimin rotation.
When estimating both GaPM-CDM and PM-ACDM models, we set the number of
iterations for the SA-MD algorithm to T = 90000, with a burn-in period of ω = 45000.
The constants in the decaying step size (see Section A) were fine-tuned for different types
of parameters under different settings. We set μδ and μl to 1/N for the confirmatory
aPM-CDM when the true model was the aPM-CDM, but set to μδ = μl = 0.3/N when
the true model was the GaPM-CDM. For the GaPM-CDM, we fixed μα, μθ, and μl to
1/N in in both the confirmatory and exploratory settings. The discretization step in the
MALA sampler is set to h = 0.2 if K = 3, and h = 0.1 if K = 5. This results in average
acceptance rates between 60% and 90% on the training sample across all models and
simulation settings.
D. Additional Material on Empirical applications
D1. English data example
We follow a similar strategy as in the simulation studies when defining the starting values
for the parameters and latent attributes in the ECPE dataset. Similarly, we run the
SA-MD algorithm for T = 90000 iterations, with a burn-in period of ω = 45000. The
discretization step is set to h = 0.1 for both the aPM-CDM and the GaPM-CDM, which
leads to average acceptance rates between 70% and 85% on the training sample in the
cross-validation exercise across both models.
For completeness and model comparison, we present the results for the computed
deviance (defined as −2lN (Θˆ κ) for the GaPM-CDM, and −2lN (Θˆ ) for the aPM-CDM,
ACDM, and GDINA). We see how the GaPM-CDM fits the ECPE data better than the
competing aPM-CDM and traditional CDMs.
8

Model GaPM-CDM (κ1) aPM-CDM ACDM GDINA
−2lN (Θˆ ) 84866.84 85037.85 85491.10 85479.54
Table A1: Deviance results for the ECPE dataset.
D2. PROMIS example
We use the same initialization strategy for defining the starting values for the parameters
and latent attributes in the PROMIS dataset. We run the SA-MD algorithm for T =
90000 iterations, with a burn-in period of ω = 45000. The discretization step is set to
h = 0.1 for both the aPM-CDM and the GaPM-CDM across all potential values for the
latent attributes, which leads to average acceptance rates between 15% and 70% on the
training sample in the cross-validation exercise for both models and across K = 1, . . . , 7.
The acceptance rate for K = 1 is around 30% in both cases, peaks at around 70% when
K = 5, and decreases rapidly to 15% when K = 7.
For the GaPM-CDM, the constants in the decaying step size are set to μα = μθ = 1/N ,
and μl = 0.75/N for K = 3 and μl = 0.5/N when K = 5. For the aPM-CDM, we set
μδ = 0.3/N , and μl = 0.65/N for K = 3 and μl = 0.35/N when K = 5. These values are
chosen for computational stability based on extensive experimentation.
For completeness, we also include the matrix of intercepts and factor loadings from
the exploratory aPM-CDM with K = 5 (Figure A1). The structure is sparse and inter
pretable, but the model fit is considerably worse than the GaPM-CDM (Table A2).
Model GaPM-CDM aPM-CDM
−2lN (Θˆ ) 26564.60 27434.34
Table A2: Deviance results for the PROMIS dataset.
References
Atchade ́, Y. F., Fort, G., and Moulines, E. (2017). On Perturbed Proximal Gradient
Algorithms. Journal of Machine Learning Research, 18(10):1–33.
Beck, A. and Teboulle, M. (2003). Mirror descent and nonlinear projected subgradient
methods for convex optimization. Operations Research Letters, 31(3):167–175.
9

Figure A1: Matrix of estimated factor loadings (transposed) for the K = 5 dimensional
aPM-CDM on the PROMIS dataset.
Dasgupta, S. and Hsu, D. (2007). On-Line Estimation with the Multivariate Gaussian
Distribution. In Bshouty, N. H. and Gentile, C., editors, Learning Theory: Proceed
ings of the 20th Annual Conference on Learning Theory (COLT 2007), pages 278–292.
Berlin, DE: Springer-Verlag.
De Bortoli, V., Durmus, A., Pereyra, M., and Vidal, A. F. (2021). Efficient stochastic
optimisation by unadjusted Langevin Monte Carlo: Application to maximum marginal
likelihood and empirical Bayesian estimation. Statistics and Computing, 31(29):1–18.
Durmus, A. and Moulines, E. (2017). Nonasymptotic convergence analysis for the unad
justed Langevin algorithm. The Annals of Applied Probability, 27(3):1551–1587.
Kivinen, J. and Warmuth, M. K. (1997). Exponentiated Gradient versus Gradient Descent
for Linear Predictors. Information and Computation, 132(1):1–63.
Oliviero-Durmus, A. and Moulines, E. (2024). On geometric convergence for the
Metropolis-adjusted Langevin algorithm under simple conditions. Biometrika,
111(1):273–289.
Polyak, B. T. and Juditsky, A. B. (1992). Acceleration of stochastic approximation by
averaging. SIAM Journal of Control and Optimization, 30(4):838–855.
Robbins, H. and Monro, S. (1951). A Stochastic Approximation Method. The Annals of
Mathematical Statistics, 22(3):400–407.
10

Roberts, G. O. and Rosenthal, J. S. (1998). Optimal Scaling of Discrete Approximations to
Langevin Diffusions. Journal of the Royal Statistical Society: Series B (Methodological),
60(1):255–268.
Roberts, G. O. and Tweedie, R. L. (1996). Exponential convergence of Langevin distri
butions and their discrete approximations. Bernoulli, 2(4):341–363.
Ruppert, D. (1988). Efficient Estimations from a Slowly Convergent Robbins-Monro Pro
cess. Technical Report 781, School of Operations Research and Industrial Engineering,
College of Engineering, Cornell University.
Zhang, S. and Chen, Y. (2022). Computation for Latent Variable Model Estimation: A
Unified Stochastic Proximal Framework. Psychometrika, 87(4):1473–1502.
11

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:06.956Z
- **Text Length:** 83468 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 39 of 39
