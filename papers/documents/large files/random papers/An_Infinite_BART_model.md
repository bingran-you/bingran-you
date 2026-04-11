# PDF Document: Battiston and Luo - 2025 - An Infinite BART model.pdf

**File Path:** Battiston and Luo - 2025 - An Infinite BART model.pdf

**Processed Date:** 2026-02-10T18:16:55.426Z

**File Size:** 755.70 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3369

**Title:** An Infinite BART model

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

An Infinite BART Model
Marco Battiston,∗ Yu Luo†
Abstract
Bayesian additive regression trees (BART) are popular Bayesian ensemble models used in regression and classification analysis. Under this modeling framework, the regression function is approximated by an ensemble of decision trees, interpreted as weak learners that capture different features of the data. In this work, we propose a generalization of the BART model that has two main features: first, it automatically selects the number of decision trees using the given data; second, the model allows -
clusters of observations to have different regression functions since each data point can only use a selection of weak learners, instead of all of them. This model generalization is accomplished by including a binary weight matrix in the conditional distribution of the response variable, which activates only a specific subset of decision trees for each observation. Such a matrix is endowed with an Indian Buffet process prior, and sampled within the MCMC sampler, together with the other BART parame-
ters. We then compare the Infinite BART model with the classic one on simulated and real datasets. Specifically, we provide examples illustrating variable importance, partial dependence and causal estimation.
Keywords: Bayesian Additive Regression Trees, Non-parametric Bayesian Regression, Indian Buffet Process, Variable Importance, Casual Estimation.
∗School of Mathematical Sciences, Lancaster University, UK †Department of Mathematics, King’s College London, U.K.
1
arXiv:2511.20087v1 [stat.CO] 25 Nov 2025

1 Introduction
Bayesian Additive Regression Trees (BART) are popular Bayesian ensemble methods used in regression and
classification analysis. They were initially introduced in Chipman et al. (2010) as the generalization of Bayesian
classification and regression tree (CART) models (Chipman et al., 1998; Denison et al., 1998). The CART model
fits a single, usually deep, decision tree to the data, which is endowed with a prior distribution and then learned
from the data through Markov chain Monte Carlo (MCMC). On the other hand, BART uses a sum-of-trees to
approximate the regression function, averaging over a set of many shallow decision trees. These can be interpreted
as weak learners and capture different features of the data. Therefore, BART provides a flexible Bayesian approach
to regression analysis, with often strong predictive capabilities, without any stringent parametric assumptions.
There are numerous variants of the classic BART model in the literature, each designed to handle different data
types and tailored to a wide range of applications. For example, in Chipman et al. (2010), an extension of the
classic regression model was proposed to accommodate binary outcomes, using the probit augmentation of Albet
and Chib (1993). Murray (2021) explains how BART can be adapted for categorical and count outcomes, in
cluding extensions based on log-linear models, multinomial logistic formulations, and count regression approaches
that account for zero-inflation and over-dispersion. Heteroskedastic BART is examined in George et al. (2019).
Extensions of the classic BART framework that incorporate priors on split rules designed for high-dimensional
settings have been proposed in Linero (2018) and Linero and Yang (2018). Applications of BART to survival
analysis are presented in Bonato et al. (2010) and Sparapani et al. (2016), while its use in causal inference is dis
cussed in Hill (2011) and Hill (2013). For a comprehensive overview of BART and its broad range of applications,
see Hill et al. (2020).
In this work, we propose an extension of BART, termed as infinite BART, which is characterized by two main
characteristics. Firstly, it does not require practitioners to pre-specify the number of trees in the model; instead,
the appropriate number is automatically determined based on the observed data. Secondly, it enables (soft)
clustering among data points, allowing different clusters to have heterogeneous regression functions. This is
achieved by permitting a potentially infinite number of decision trees in the regression function, along with a
binary weight matrix that activates only a subset of trees for each data point, determined by the observed data.
The unknown weight matrix is assigned with an Indian Buffet Process (IBP), a nonparametric prior for binary
matrices that is widely used in machine learning and was originally proposed by Ghahramani and Griffiths (2005)
for factor analysis.
The proposed infinite BART model employs the three-parameter version of the IBP, introduced in Teh and Gorur
(2009), as the prior for the weight matrix. Given this prior choice, we introduce a MCMC sampler to perform
posterior inference for model parameters. The proposed model can address common regression statistical tasks
in a similar fashion as in classic BART framework. Specifically, we will discuss: point estimation and credible
intervals for the regression function f pxq, prediction of out-of-sample observations, variable selection and variable
importance, estimation of partial dependence and average casual effects. For clarity, we focus here on extending
2

classic BART for regression with Gaussian noise; however, similar extensions can be applied to other BART
variants, such as BART for binary outcomes.
The remainder of the paper is organized as follows. Section 2 provides a brief background, with the classic BART
model in subsection 2.1 and the IBP in subsection 2.2. It also establishes the notation used throughout the rest
of the paper. Section 3 describes the Infinite BART model. Specifically, subsection 3.1 introduces the model and
its priors, subsection 3.2 describes the MCMC sampler for posterior inference, and subsection 3.3 explains how
common statistical tasks can be addressed using infinite BART. Section 4 presents some examples of applications
of infinite BART in both simulated and real datasets. Finally, Section 5 presents some concluding remarks and
future research directions.
2 Background
2.1 BART model
BART is a popular Bayesian model for regression and classification analysis, initially introduced in Chipman
et al. (2010). It models the regression function using an ensemble of decision regression trees and extends the
Bayesian CART model (Chipman et al., 1998). In this section, we provide a brief review of the classic BART
model and establish the notation used throughout. In particular, we focus on the continuous response variable
with Gaussian errors setting.
Let Y “ pY1, . . . , Ynq denote the Rn-dimensional response vector, including the dependent variable of n observa
tions. Each response variable, Yi, is associated to a vector of explanatory variables Xi “ pXi,1, . . . , Xi,pq, which
may include both continuous and categorical variables.
In the BART model, the conditional distribution of the response observation Yi, given its explanatory variables
Xi, is modeled through a non-parametric regression model,
Yi “ f pXiq ` εi (1)
with εi
ii„d N p0, σ2q. The unknown regression function f : Rp Ñ R in (1) is assumed to be, or at least well
approximated by, an ensemble of K decision trees,
f pXiq “
K
ÿ
k“1
gpXi; Tk, μμμkq (2)
where gpXi; Tk, μμμkq is the regression function of a decision tree with tree Tk and leaves parameters μμμk. More
specifically,
1. Let Tk denote as a Decision Tree, i.e. a binary rooted tree with a ‘Decision Rule’ (see next bullet point)
associated to each node;
3

2. A Decision Rule is a pair pn1, p1q, with n1 P t1, . . . , nu and p1 P t1, . . . , pu, corresponding to the partitioning
of Rn induced by the value of observation n1 at variable p1, i.e. the partitioning of Rn into two subsets
tX P Rp : Xp1 ď Xn1,p1 u and tX P Rp : Xp1 ą Xn1,p1 u. A decision rule cannot produce empty cells or
contradict any Decision Rules from its ancestor nodes;
3. Let Ak “ tAk,1, . . . , Ak,Lk u denote as the corresponding partition of Rp induced by Tk and X, where Lk
denotes the number of leaves in the k-th tree Tk;
4. μμμk “ tμk,1, . . . , μk,Lk u denotes the vector of leaf parameters, associated to each leaf node of tree Tk.
With this notation, the k-th Regression Tree function in (2) (assuming a step function) is
gpXi; Tk, μμμkq “
Lk
ÿ
j“1
μk,j IpXi P Ak,j q.
2.2 Indian Buffet Process
The IBP is a distribution for binary matrices with a finite number of rows and an infinite number of columns. It
was first introduced in Ghahramani and Griffiths (2005) and widely applied for factor analysis in machine learning
applications. In this subsection, we specifically describe the three-parameter version of the IBP introduced in
Teh and Gorur (2009).
In Bayesian non-parametric setting, the IBP can be used as a prior distribution, πpWnq, for random binary
matrices Wn with n rows and infinite number of columns, i.e. the state space of Wn is t0, 1unˆ8. A sample from
πpWnq has, with probability one, only finitely many non-zero columns, with all remaining columns consisting
entirely of zeros. The three parameter version of the IBP has three hyper-parameters, denoted as pγ, δ, ηq. The
parameter γ ą 0 regulates the total number of active columns (i.e. columns containing at least one 1); larger
values of γ lead to more active columns. η P p8, 1q regulates the proportion of 1s and 0s in each column, with
smaller values of η resulting in a higher proportion of 1s in active columns. Finally, δ P p ́η, 8q governs the
amount of sharing of 1s values across columns, thereby controlling the sparsity of the matrix: values of δ close
to  ́η produce similar columns, while larger values of δ ` η (i.e., δ far from  ́η) generate sparse matrices, where
columns have 1s in different row positions.
Let Wi, ̈ be the i-th row of Wn. The distribution πpWnq can be specified by defining the marginal distribution of
the first row, πpW1, ̈q and the conditional distribution πpWi, ̈|W1, ̈, . . . , Wi ́1, ̈q of the i-th row given the previous
ones, as expressed by
πpWnq “ πpW1, ̈qπpW2, ̈|W1, ̈q  ̈  ̈  ̈ πpWn, ̈|W1, ̈, . . . , Wn ́1, ̈q.
Under an IBP prior for πpWnq, the corresponding marginal and conditional distributions are given by:
1. πpW1, ̈q: Sample K1 „ Poissonpγq, and set the first K1 entries of W1, ̈ to 1 and all remaining entries to 0;
that is, W1,j “ 1 for j ď K1, and W1,j “ 0 otherwise.
4

2. πpWi`1, ̈|W1, ̈, . . . , Wi, ̈q, for i “ 1, . . . , n  ́ 1: Given W1, ̈, . . . , Wi, ̈, Wi`1, ̈ is sampled in the following two
steps:
(a) Let Ki denote the number of columns containing at least one 1 among the first i rows, that is, all
columns k such that ři
j“1 Wj,k ą 0. The first Ki entries of row i ` 1 are sampled from
PpWi`1,k “ 1|W1, ̈, . . . , Wi, ̈q “ mk  ́ η
i ` δ , (3)
where mk :“ ři
j“1 Wj,k and is the number of 1s in column k up to row i (for ease of notation, we
avoid the subscript i in mk).
(b) A random number Knew
i`1 „ Poissonpγ Γp1`δqΓpi`δ`ηq
Γpi`1`δqΓpδ`ηq q of 1s is added to the pi`1q-th row, i.e. Wi`1,k “ 1
for k “ Ki ` 1, . . . , Ki ` Knew
i`1 . Finally, all remaining entries in row i ` 1 are set to 0, i.e. Wi`1,k “ 1
for k ą Ki ` Knew
i`1 .
Under this construction, we can derive the distribution of πpWnq, given the hyper-parameters pγ, δ, ηq, commonly
referred to as the Exchangeable Feature Probability Function. This distribution depends on the realized value of
Wn only through the number of active columns Kn and the columns counts pm1, . . . , mKn q, i.e. mk :“ řn
j“1 Wj,k
the number of ones in column k among all n rows, and can be written as
1 Kn!
ˆγ
p1 ` δqn ́1Ò
 ̇Kn
exp
 ̃
 ́γ
n
ÿ
i“1
pη ` δqi ́1Ò
pδ ` 1qi ́1Ò
 ̧ Kn
ź
l“1
p1  ́ ηqml ́1Òpδ ` ηqn ́mlÒ (4)
where pxqnÒ :“ xpx ` 1q  ̈  ̈  ̈ px ` n  ́ 1q and is the rising factorial.
3 The Infinite BART
3.1 Model and Priors
In this section, we aim to bridge the BART model with an IBP prior, which allows for an infinite collection of
potential weak learners while using a binary weight matrix W to select a finite subset of them in the regression
function. In addition, due to the inclusion of the matrix W, different observations may select different subsets of
weak learners. The regression function of Infinite BART extends that of classic BART in Equation (1), by letting
K “ 8 and adding the n ˆ 8 binary weight matrix W,
Yi “
8
ÿ
k“1
Wi,kgpXi; Tk, μμμkq ` εi. (5)
with εi
ii„d N p0, σ2q. The classic BART model with K trees is recovered as a special case by setting Wi,k “ 1 for
k ď K and Wi,k “ 0 for k ą K, for all i “ 1, . . . , n.
The unknown parameters of the model are the binary matrix W, the trees Tk and associated leaf parameters μμμk,
and the error variance σ2. We assign a three-parameter IBP prior to the weight matrix W, and for the remaining
5

Algorithm 1: The MCMC sampler for πpTTT , μμμ, W, Θ|Y, Xq
for m in 1:L (number of MCMC iterations) do
for k in 1:Kn do
Update Tk|TTT  ́k, Θ, W, X, Y as described in Step 1;
Update μk|μμμ ́k, Tk, Θ, W, X, Y as described in Step 2;
end
for i in 1:n do
Update Wi, ̈|W ́iTTT , μμμ, Θ, X, Y as described in Step 3;
end
Update Θ|TTT , μμμ, W, X, Y as described in Step 4;
end
parameters we adopt the same priors used in the BART model of Chipman et al. (2010). Specifically, all trees are
assumed a priori independent, each following a binary-split branching-process prior in which the probability that
a node at depth d is non-terminal is given by αp1 ` dq ́β, for some hyper-parameters α P p0, 1q and β P r0, 8q.
Conditionally on the tree Tk, the leaf parameters μkj are assumed independent with prior N p0, σ2μq. The error
variance is assigned prior σ2 „ pνλq{χ2ν. In the simulations of Section 4, the hyper-parameters α, β, σ2μ, ν, λ are
set to the default values recommended in Chipman et al. (2010).
The shape of W sampled from an IBP is sensitive to the choice of the hyper-parameters pγ, δ, ηq. For this
reason, these three hyperparameters are assigned hyper-priors and are learned a posteriori within the MCMC
sampler described in subsection 3.2. Specifically, in the simulations of Section 4, we use the following hyper-priors:
γ „ Gammapaγ, bγq; since η has support p ́8, 1q, we place a prior on 1  ́ η „ Gammapaη, bηq prior; and because
δ takes values in p ́η, 8q, we assign a conditional prior on η ` δ, namely η ` δ „ Gammapaδ, bδq.
3.2 The MCMC Sampler
A schematic description of the MCMC sampler used to perform posterior inference on the model parameters is
provided in Algorithm 1. In the following, Θ “ pσ2, γ, δ, ηq denotes the vector of unknown hyper-parameters of
the model. TTT  ́k denotes the list of all currently active trees, excluding the k-th one. Similarly, W ́i denotes the
matrix W without the i-th row.
Specifically, each of the steps outlined in Algorithm 1 can be implemented as follows:
• Step 1 (Update Tk): The k-the tree can be updated using the backfitting algorithm described in Chipman
et al. (2010), which is also employed in generalized additive models (Hastie and Tibshirani, 2000). The only
modification in our setting is that the update for tree k uses only those observations Yi for which the tree
is active, i.e., those satisfying Wi,k “ 1. Therefore, we can define the mk-dimensional vector, where mk “
6

řn
i“1 Wi,k, of residuals Rpkq
Rpkq
i “ Yi  ́
ÿ
k1 ‰k
Wi,k1 gpXi; Tk1 , μk1 q
for all i “ 1, . . . , n such that Wi,k “ 1. Given the mk-vector of residuals, Tk|Rpkq, σ2 is then updated using the
Metropolis-Hastings (MH) proposal of Chipman et al. (1998), which proposes a new tree configuration using
one of the four possible moves: Grow, Prune, Change, Swap (see subsection 5.1 of Chipman et al. (1998) for
more details).
• Step 2 (Update μk): The update of μk is obtained from a conjugate Normal distribution, as in Chipman
et al. (1998) and Chipman et al. (2010). For the tree structure Tk, the update follows the same procedure as in
Chipman et al. (2010) with the only difference that it is based only on the mk observations currently assigned
to tree k.
• Step 3 (Update Wi, ̈): Due to the exchangeability of the rows of W, Wi, ̈ can be treated as if it were the
last row. Its update combines the IBP prior conditional on W ́i (see bullet point 2 in subsection 2.2) with the
likelihood in (5). After removing the zero columns in W ́i, the update Wi, ̈ can be proceeded in two steps:
1. Let Kn ́i denote the number of non-zero columns in W ́i, for k “ 1, . . . , Kn ́i, the entry Wi,k P t0, 1u is
updated by sampling from PrWik “ w |rests9
$
’ ’ &
’ ’ %
m ́i
k  ́η
i`δ  ̈ φ `Yi; ř
k1‰k Wi,k1 gpXi; Tk1 , μk1 q ` gpXi; Tk, μkq, σ2 ̆ for w “ 1
i`δ ́m ́i
k `η
i`δ  ̈ φ `Yi; ř
k1‰k Wi,k1 gpXi; Tk1 , μk1 q, σ2 ̆ for w “ 0
where φpy; μ, σ2q denotes the density of a Normal distribution with mean μ and variance σ2 evaluated at
y, and m ́i
k “ř
j‰i Wj,k.
2. A total of Kpiq new trees are introduced, where Kpiq is sampled from
PpKpiq “ kpiq|restq 9 Poisson
ˆ
kpiq; γ Γp1 ` δqΓpn  ́ 1 ` δ ` ηq
Γpn ` δqΓpδ ` ηq
 ̇
ˆ
φ
 ̈
 ̋Yi;
K  ́i
n ÿ
k1 “1
Wi,k1 gpXi; Tk1 , μk1 q `
kpiq ÿ
k“1
gpXi; T piq
k , μpiq
k q, σ2
 ̨
‚.
A total of kpiq columns are added in W, each initialized with all entries equal to 0 except for a single 1
in row i. Additionally, kpiq new trees and their associated leaf parameters, T piq
k , μpiq
k , are introduced and
sampled following Step 1 and 2, using only the observation Yi.
• Step 4 (Update Θ): The full conditional distributions of σ2 and γ are available in closed form, following an
Inverse-Gamma and a Gamma distribution (using (4) with the prior for γ). In particular, γ|rest „ GapKn `
aγ , řn
i“1
pη`δqi ́1Ò
pδ`1qi ́1Ò ` bγq. The parameters η and δ, are updated using slice sampling (Neal, 2003) with their
respective priors.
7

3.3 Some statistical tasks
The Infinite BART model can be used to solve the same statistical tasks as BART, with only minor modifications.
In this subsection, we outline several of these tasks, while illustrative applications are deferred to Section 4.
Point and interval estimation of f pxq: The model can be used to infer the unknown regression function f .
Specifically, it is possible to perform point estimation for the regression function f pxq, both for in-sample and
out-of-sample values of x by averaging over posterior draws. For an in-sample point x, an estimator of f pxq is
f  ̊pxq “ 1
L
L
ÿ
l“1
K plq
n ÿ
k“1
W plq
 ̈,k gpx; T plq
k , μplq
k q, (6)
where L is the number of iterations of MCMC (after discarding burn-in, and possibly applying thinning). For
out-of-sample x, W plq
 ̈,k in (6) is replaced by EpW plq
 ̈,k |restq “ PpW plq
 ̈,k “ 1|restq, which can be computed from (3)
using the posterior sample of pγplq, δplq, ηplqq and the corresponding posterior counts mplq
k from the l-th MCMC
iteration. Alternatively, it can be approximated through an additional Monte Carlo step, similar to the procedure
used for prediction Y. Credible posterior regions for f pxq can be derived in a similar manner, using empirical
quantiles from the MCMC output.
Prediction: The model can predict N new responses, Ypred :“ Ypn`1q:pn`Nq, within the MCMC sampler, given
additional values of the explanatory variables, Xpn`1q:pn`Nq, ̈ P RNˆp. To predict Ypred, at the end of each
MCMC iteration l, the sampler draws Wplq
pn`1q:pn`Nq from πpWplq
pn`1q:pn`N q|Yˆ pl ́1q
pn`1q:pn`Nq, restq, using the same
update for W described in subsection 3.2. It then sets
Yˆ plq
i“
K plq
n`N ÿ
k“1
W plq
i,k gpXi; T plq
k , μplq
k q,
for all i “ n ` 1, . . . , n ` N . An alternative approach, used in the simulations, is to initialize Wplq
pn`1q:pn`Nq from
the IBP conditional on Wplq
1:n and pγplq, δplq, ηplqq. After that, Yˆ plq
pn`1q:pn`Nq is generated by alternately sampling
from πpYpn`1q:pn`Nq|restq and πpWpn`1q:pn`Nq|restq a few times, retaining the final draw of Y as Yˆ plq
pn`1q:pn`N q.
This approach has the advantage that the prediction step needs to be performed only at thinned iterations.
Variable selection: As in the classic BART model, the importance of each explanatory variable can be esti
mated by computing
vj “ 1
L
L
ÿ
l“1
zplq
j , (7)
for j “ 1, . . . , p, where zplq
j is the proportion of splitting rules using variable j, among all Kpnlq trees that are active
at iteration l, pT plq
1 , . . . , T plq
K plq
n
q.
8

Estimation of partial dependence function: The partial dependence function (Friedman, 2001) summarizes
the marginal effects of one or more explanatory variables on the response variable. Specifically, the partial
dependence function of the explanatory variable xs on Y is defined as
f pxsq :“ 1
n
n
ÿ
i“1
f pxs, X ́s
i q, (8)
where the vector X has been partitioned into the variable of interest, xs, and the remaining p  ́ 1 explanatory
variables X ́s. Estimation of such a quantity can be performed in a similar way as in BART. Specifically, for a
grid of values for xs, we can estimate f p{ xsq “ 1
n
řn
i“1 f  ̊pxs, X ́s
i q, where f  ̊ is defined in (6).
Estimation of casual effects: Estimating causal effects in observational studies often involves complex data
structures and unknown confounding mechanisms. Traditional propensity score–based methods rely heavily on
correct model specification, and when these assumptions are violated, the resulting estimates can be biased
or inefficient. Bayesian approaches offer a principled alternative for causal inference, particularly when prior
knowledge is available or when rigorous uncertainty quantification is needed. While some work has examined
incorporating propensity scores into a fully Bayesian framework (see e.g., Luo et al., 2023), there is growing
interest in flexible parametric models, such as BART, for outcome regression (for example, Hill, 2011; Hahn
et al., 2020), as there are typically highly effective for estimating average treatment effects (ATEs). Let us denote
T P t0, 1u as the treatment variable, Y as the outcome and X as a set of confounders. We can estimate the ATE
by evaluating the difference of the regression function at T “ 1 and T “ 0 using the posterior predictive. That
is, for each posterior draw, we canhe individual treatment effect for unit i as τi “ f  ̊p1, Xiq  ́ f  ̊p0, Xiq, and then
average over all subjects to obtain one draw of the posterior predictive ATE. Repeating this across all posterior
draws provides the posterior distribution of the ATE.
4 Experiments
In this section, we test the performance of Infinite BART on both simulated and real data. Specifically, in
subsection 4.1, we test the capabilities of Infinite BART to perform variable selection and estimate the partial
dependence function. In subsection 4.2, we compare the out-of-sample predictive performances of Infinite and
classic BART in different simulated and real data scenarios. Finally, subsection 4.3 provides an illustration of
casual effects estimation with Infinite BART.
In all experiments, the hyper-parameters in BART are set to the following default values, consistent with those
recommended in Chipman et al. (2010), for both the classic and Infinite BART models: α “ 0.95, β “ 2,
ν “ 3, λ “ 0.74. The prior hyper-parameters for pγ, δ, ηq are chosen to yield large prior variances, following the
reparameterization described in subsection 2.2: aη “ 0.05, bη “ 0.01, aδ “ 0.1, bδ “ 0.01, aγ “ 0.05, bγ “ 0.01.
The classic BART is implemented using the code supplied in Sarti et al. (2023), publicly available in the two Github
folders: https://github.com/ebprado/AMBARTI and https://github.com/ebprado/ExtensionsBART. The In
9

finite BART implementation used in the experiments is a modification of this code, and it is available at
https://github.com/yumcgill/Infinite-BART. This allows for a fair comparison of the two models’ performance,
independent of differences in their implementations.
4.1 Variable Selection and Partial Dependence
In this subsection, we evaluate Infinite BART for variable selection and partial dependence function estimation
using the benchmark Friedman regression function. Specifically, for each observation, p explanatory variables are
simulated from a Uniform distribution, i.e. Xi,1, . . . , Xi,p
ii„d Unifp0, 1q. The response variable Yi is simulated
from
Yi “ 10  ̈ sinpπxi,1xi,2q ` 20pxi,3  ́ 0.5q2 ` 10xi,4 ` 5xi,5 ` εi (9)
where εi „ N p0, 1q, for i “ 1, . . . , n. This example features a true regression function that includes both linear
and nonlinear components, an interaction term, and irrelevant variables when p ą 5.
We generated 9 synthetic datasets with n “ 300 and p “ 30 according to (9). For each dataset, the Infinite
BART model was fitted for 5,000 iterations, following a burn-in of 1,000 iterations and without any thinning.
Figure 1 shows the estimated variable importance (formula (7)) for all 30 variables across the 9 runs. In all cases,
the model successfully identifies the first five variables as important, while assigning near-zero importance to the
remaining 25 irrelevant variables that are not included in (9).
A comparison with Figure 5 of Chipman et al. (2010) might be relevant. That figure shows that in the classic
BART model, variable importance estimates are highly sensitive to the number of trees. When a large number
of trees is used (e.g., 100 or 200, which are default values in most BART packages), the estimates deteriorate:
irrelevant variables may receive importance scores comparable to those of the true predictors, even with only
p “ 10 variables. On the contrary, using only 10 trees yields very accurate estimates, correctly identifying the
important variables. However, in real-world applications, the true important variables are unknown, making
it difficult to choose the appropriate number of trees for variable selection. Instead, the Infinite BART model
automatically selects the number of trees from the data. In the 9 replicates of the Friedman example, the estimated
number of active trees were 7.00, 6.03, 8.01, 9.01, 7.02, 12.01, 6.01, 8.03, 7.03, which explains the high accuracy of
variable importance in Figure 1.
Figures 2 and 3 display the in-sample predictions and partial dependence function estimates. Specifically, Figure 2
plots the estimated values of f  ̊pXiq, using formula (6), against the true values of Yi, including 95% credible regions
for f pXiq. Across all replicates, the fitted values closely match the true values, and their credible intervals have
reasonable width. Figure 3 shows the estimated partial dependence function (formula (8)) for the first run and the
first 10 explanatory variables. The plots (not shown) of the remaining 20 variables are nearly identical to those
of the 5 irrelevant variables (variables 6-10) shown in the bottom row. The partial dependence estimates capture
the true functional relationships: variables 1 and 2 have identical effects, reflecting their identical contribution
in (9); variable 3 decreases before 0.5 and increases afterward, consistent with (9); variables 4 and 5 plots are
10

0 5 10 15 20 25 30
0.00 0.10 0.20
variable
0 5 10 15 20 25 30
0.00 0.10 0.20
variable
0 5 10 15 20 25 30
0.00 0.10 0.20
variable
0 5 10 15 20 25 30
0.00 0.10 0.20 0.30
variable
0 5 10 15 20 25 30
0.00 0.05 0.10 0.15 0.20
variable
0 5 10 15 20 25 30
0.00 0.10 0.20 0.30
variable
0 5 10 15 20 25 30
0.00 0.10 0.20
variable
0 5 10 15 20 25 30
0.00 0.10 0.20 0.30
variable
0 5 10 15 20 25 30
0.00 0.10 0.20
variable
Figure 1: Important variables for Friedman’s example of nine replicates
both strictly increasing, with the slope of variable 4 roughly twice that of variable 5; all other variables show flat,
near-zero dependence on the response.
Finally, Figure 4 shows the trace plots of the hyperparameters Θ “ pσ2, γ, δ, ηq, which indicate reasonably good
mixing (without any thinning) using slice sampling and full conditional updates.
4.2 Out-of-sample Prediction
To evaluate the out-of-sample performance of Infinite BART, we compare it with classic BART in three settings:
simulated data, real data, and ‘clustered’ data. For each dataset (synthetic or real), we generate 10 independent
train-test splits, using 4/5 of the data for training and 1/5 for testing, and assess prediction accuracy using the
mean squared error.
Simulated Data: 10 samples of synthetic data of size n “ 100 were simulated from the model for different
values of pγ, δ, ηq. These hyper-parameters control the number of trees and the sparsity of the matrix W (see
subsection 2.2). Specifically, when  ́η and δ are both large and similar in value (so that δ ` η is small), the
resulting matrix W is very dense, with most entries equal to 1 (the probability in formula (3) approaches 1).
Conversely, small values of  ́η combined with large values of δ ` η yield sparse matrices, with reduced sharing
11

−2 −1 0 1
−2 −1 0 1 2
in−sample f(x)
prediction interval
−1 0 1 2
−2 −1 0 1 2
in−sample f(x)
prediction interval
−2 −1 0 1
−2 −1 0 1 2
in−sample f(x)
prediction interval
−2 −1 0 1
−2 −1 0 1 2
in−sample f(x)
prediction interval
−2 −1 0 1 2
−2 −1 0 1 2
in−sample f(x)
prediction interval
−2 −1 0 1
−2 −1 0 1 2
in−sample f(x)
prediction interval
−2 −1 0 1 2
−2 −1 0 1 2
in−sample f(x)
prediction interval
−2 −1 0 1 2
−2 −1 0 1 2
in−sample f(x)
prediction interval
−1.5 −1.0 −0.5 0.0 0.5 1.0 1.5
−2 −1 0 1 2
in−sample f(x)
prediction interval
Figure 2: In sample inference about Friedman’s example of nine replicates.
−1.0 −0.5 0.0 0.5 1.0
X1
partial dependence
0.1 0.3 0.5 0.7 0.9
−1.0 −0.5 0.0 0.5 1.0
X2
partial dependence
0.1 0.3 0.5 0.7 0.9
−1.0 −0.5 0.0 0.5 1.0
X3
partial dependence
0.1 0.3 0.5 0.7 0.9
−1.0 −0.5 0.0 0.5 1.0
X4
partial dependence
0.1 0.3 0.5 0.7 0.9
−1.0 −0.5 0.0 0.5 1.0
X5
partial dependence
0.1 0.3 0.5 0.7 0.9
−1.0 −0.5 0.0 0.5 1.0
X6
partial dependence
0.1 0.3 0.5 0.7 0.9
−1.0 −0.5 0.0 0.5 1.0
X7
partial dependence
0.1 0.3 0.5 0.7 0.9
−1.0 −0.5 0.0 0.5 1.0
X8
partial dependence
0.1 0.3 0.5 0.7 0.9
−1.0 −0.5 0.0 0.5 1.0
X9
partial dependence
0.1 0.3 0.5 0.7 0.9
−1.0 −0.5 0.0 0.5 1.0
X10
partial dependence
0.1 0.3 0.5 0.7 0.9
Figure 3: Partial dependence for the first 10 predictors in the Friedman data, one replicate.
12

0 1000 2000 3000 4000 5000
10 12 14 16 18 20
Index
σ2
0 1000 2000 3000 4000 5000
−500 −400 −300 −200 −100 0
Index
η
0 1000 2000 3000 4000 5000
0 100 200 300 400 500
Index
δ
0 1000 2000 3000 4000 5000
5 10 15 20
Index
γ
Figure 4: Trace plots for Θ “ pσ2, η, δ, γq in the Friedman data.
2 4 6 8 10
0 50 100 150 200 250 300 350
(100,101,−100)
Index
MSE
2 4 6 8 10
0 5 10 15 20
(10,101,−100)
Index
MSE
2 4 6 8 10
10 15 20 25 30
(10,20,−5)
Index
MSE
2 4 6 8 10
50 100 150 200
(50,20,−5)
Index
MSE
2 4 6 8 10
5 10 15 20 25 30
(5,5,−2)
Index
MSE
2 4 6 8 10
10 20 30 40
(20,5,−2)
Index
MSE
BART BART−IBP
Figure 5: Synthetic data from the model. MSEs on 10 runs for different values of pγ, δ, ηq
of trees among observations. The parameter γ regulates the overall number of trees as each observation has a
marginal number of active trees distributed as Poissonpγq.
Figure 4.2 displays the MSEs for each of the 10 runs and Table 4.2 reports the corresponding average MSEs for
the different choices of hyperparameters. For pγ, δ, ηq “ p100, 101,  ́100q (or p10, 101,  ́100q), the resulting W
matrix has around 100 (or 10) columns, with all entries equal to 1. Hence, it closely resembles the structure in
BART, and the MSEs of classic and Infinite BART are similar. In contrast, for larger values of of δ ` η, the
matrix W becomes sparse, introducing more heterogeneity among observations, and the MSE of BART tends to
be consistently higher than that of Infinite BART.
Real Data: The out-of-sample prediction performance of BART and Infinite BART was evaluated on the
following publicly available regression datasets: Airquality (153 observations, 6 variables), Boston Housing (506
13

pγ, δ, ηq p100, 101,  ́100q p10, 101,  ́100q p10, 20,  ́5q p50, 20,  ́5q p5, 5,  ́2q p20, 5,  ́2q
BART 95.7289 7.1167 15.9950 89.9138 7.6508 21.1942
BART-IBP 96.7894 5.0902 10.4435 52.9209 5.2807 18.3212
Table 1: Synthetic data from the model. Average MSE over 10 replicates.
2 4 6 8 10
0.2 0.3 0.4 0.5 0.6 0.7
Air Quality
Index
MSE
2 4 6 8 10
0.05 0.10 0.15 0.20
Toxicity
Index
MSE
2 4 6 8 10
0.01 0.02 0.03 0.04 0.05 0.06 0.07
Car Test
Index
MSE
2 4 6 8 10
0.045 0.050 0.055 0.060 0.065 0.070 0.075
Motor
Index
MSE
2 4 6 8 10
0.03 0.04 0.05 0.06 0.07 0.08
Boston
Index
MSE
2 4 6 8 10
0.10 0.12 0.14 0.16 0.18 0.20 0.22
Iris
Index
MSE
BART BART−IBP
Figure 6: Real datasets. MSEs on 10 runs.
observations, 14 variables), Iris (150 observations, 5 variables), Motor (626 observations, 7 variables), Mtcars (32
observations, 11 variables), Toxicity (546 observations, 9 variables). These datasets contain both covariate and
categorical variables; for the latter, dummy variables were added for each level. Apart from removing missing
values, no further pre-processing was applied. The MSEs over 10 train-test splits for each dataset are shown in
Figure 2, and Table 2 reports the corresponding average MSEs. In most cases, Infinite BART achieves predictive
performance comparable to or better than classic BART. For the Airquality, the improvement is quite substantial
with nearly a 50% decrease in MSE, and for Boston, Iris and Mtcars datasets, the reduction is approximately
20-30% .
Air Quality Toxicity Mtcars Motor Boston Iris
BART 0.4973 0.1389 0.03429 0.0588 0.0441 0.1768
BART-IBP 0.2600 0.1141 0.02335 0.0632 0.0348 0.1380
Table 2: Real Datasets. Average MSE over 10 replicates.
Clustered Data: Finally, we consider simulated and real data, having some (soft) clustering in the regression
function, with groups of responses having different regression functions.
A (soft) clustered extension of the Friedman example is as follows. We sample explanatory variables as Xi,j
in„d
14

Betapαj, βjq, with parameters αj “ p j
p`1 q2 and βj “ αj p p`1
j  ́ 1q, for i “ 1, . . . , n and j “ 1, . . . , p. The mean
and variance of variable j are EpXi,jq “ j
p`1 and VarpXi,jq “ 1. We assume n “ 200 and K “ 5 groups of
observations, all equally sized n{K “ 40 . The responses of observations in the k-th group are sampled from
Y pkq
i “ 10  ̈ sinpπxi,1`pk ́1qxi,2`pk ́1qq ` 20pxi,3`pk ́1q  ́ 0.5q2 ` 10xi,4`pk ́1q ` 5xi,5`pk ́1q ` εi
for i “ 1, . . . , n{K, and k “ 1, . . . , K. Each of the K groups has a Friedman regression function, but depending
on different subsets of explanatory variables. Specifically, the first group uses variables X1:5, the second group
variables X2:6, the third group variables X3:7, and so on.
Heterogeneity and (soft) clustering naturally occur in real datasets when one or more categorical or count variables
that strongly influence the response are unobserved. Different levels of these variables induce distinct regression
functions, effectively creating clusters of observations with varying responses. To illustrate this, we removed one
significant factor or count variable in two real-data examples: ‘Species’ variable was dropped from the Iris dataset,
and ‘Constitutional indices’ were removed from the Toxicity dataset.
For both the reduced datasets and the Clustered Friedman example, BART and Infinite BART were run for 5,000
iterations, following a burn-in of 1,000 iterations, over 10 replicates. The average MSEs are reported in Table 3.
In the Clustered Friedman example, Infinite BART outperforms classic BART. For the two reduced real datasets,
on the one hand, the average MSE of classic BART deteriorates compared to that obtained using the full datasets
(Table 2), with an increase of 10-15%, which can be explained by a reduction in predictability after dropping
significant variables. On the other hand, the MSEs of Infinite BART remain nearly unchanged, highlighting its
robustness to unobserved heterogeneity.
Clust. Friedman Toxicity Iris
BART 38.1386 0.1523 0.2070
BART-IBP 29.7981 0.1116 0.1430
Table 3: Real Datasets. Average MSE over 10 replicates.
4.3 Casual effects example
We consider a causal effect example, which includes nonlinearity and heterogeneous treatment effect in the
regression function. The data is generated as follows:
Xi,1 „ N p0, 1q , Xi,2 „ Bernoulli p0.5q , Xi,3, Xi,4, Xi,5 „ U r0, 1s
Ti|Xi „ Bernoulli pexpit p0.5 ` Xi,1  ́ 0.7Xi,2  ́ 0.3 sinp2πXi,3qqq
Yi|Ti, Xi „ Ti ˆ p1 ` 0.5Xi,1q ` 2 ` 0.3X2
i,1  ́ 0.5Xi,2 ` sinp2πXi,3q ` εi
15

where Ti P t0, 1u is the treatment variable, and εi
ii„d Np0, 1q. In this case, the true ATE is ErYi|Ti “ 1, Xis  ́
ErYi|Ti “ 0, Xis “ 1 ` 0.5 ˆ ErXi,1s “ 1. For each sample, we fit both Infinite BART and regular BART
models for 5000 iterations, after 1000 iterations of burn-in, and without any thinning. The posterior predictive
distribution of the ATE is obtained by comparing predictions of the outcome when setting T “ 1 and T “ 0,
following the procedure described in subsection 3.3. As in the previous examples, we generated 10 independent
replicates and computed the MSE of the ATE for each replicate, then averaged the MSEs across all runs. The
average MSE is 0.44 for BART and 0.18 for Infinite BART, indicating that Infinite BART provides substantially
more accurate treatment effect estimates in this causal setting. As demonstrated in Hill (2011), BART is able
to recover nonlinear relationships and higher-order interactions without requiring explicit model specification in
the causal setting. Its structure enables it to adapt to complex response surfaces and capture heterogeneous
treatment effects, while our proposed method further improves upon standard BART, yielding more accurate
recovery of the underlying response surface.
5 Discussion
In this work, we proposed an extension of the classic BART model that allows the data to automatically determine
the number of trees. The model further enables each observation to utilize only a subset of weak learners,
capturing different features of the data and inducing (soft) clustering, where groups of observations can have
distinct regression functions. The overall number of trees and their allocation across observations is governed by
a weight matrix, which is inferred from the data via MCMC. Most statistical tasks can be addressed using Infinite
BART in a manner similar to the classic BART. Numerical experiments demonstrate the promising performance
of the proposed method across variable selection, prediction, partial dependence estimation, and causal inference
tasks.
In terms of future research, the proposed model could be improved computationally and methodologically. From
a computational perspective, the MCMC sampler in Algorithm 1 has two main steps: 1) updating the trees and
their parameters, and 2) updating the weight matrix W. The computational cost of Step 1 per iteration depends
on the number of active trees Kn, which, in our illustrative examples, concentrates around values usually smaller
than the default number of trees in BART. As a result, step 1 is generally less expensive in Infinite BART.
However, Step 2 introduces additional computational cost, which does not scale well with the sample size n (the
number of rows in W). An important computational improvement would be to implement the update of W
more efficiently, for instance via sub-sampling or parallelization. Parallelization might be feasible by replacing
the sequential representation of the IBP with its conditional Beta process representation (Thibaux and Jordan,
2007), and exploiting a stick-breaking representation to update W across rows simultaneously. Another potential
improvement would be to develop a data-dependent initialization for the hyper-parameters pγ, δ, ηq. As discussed
in subsection 2.2 and Section 4, the structure of W depends on these hyper-parameters. While a default choice
produces dense matrices similar to classic BART, heterogeneous response surfaces may require longer burn-in
16

periods if W is sparse. Therefore, data-informed initializations could possibly reduce convergence time and
improve mixing.
Methodological improvements are also possible. In Section 4, Infinite BART performed well at in-sample tasks,
particularly in variable selection. However, out-of-sample performance on real datasets showed improvements
over classic BART only in some cases, and was comparable in others. One possible explanation is that the
prior on matrix W does not directly depend on the explanatory variables, and these only influence the posterior
updates of Wi, ̈ in Step 3 of Section 3.2. Incorporating a covariate-dependent prior for W could improve predictive
performance and capture structure more effectively. Finally, while Infinite BART was proposed as an extension
of the classic BART model, the idea of introducing a weight matrix to allow the data to select the number of
trees could potentially be applied to other generalizations of BART.
Code Accessibility
The code for the examples is publicly available at https://github.com/yumcgill/Infinite-BART.
References
Albet, J. H. and S. Chib (1993). Bayesian analysis of binary and polychotomous response data. Journal of the
American Statistical Association 88, 669–679.
Bonato, V., V. Baladandayuthapani, B. M. Broom, E. P. Sulman, K. D. Aldaoe, and K. A. Do (2010). Bayesian
ensemble methods for survival prediction in gene expression data. Bioinformatics 27, 359–367.
Chipman, H. A., E. I. George, and R. E. McCulloch (1998). Bayesian CART model search. Journal of the
American Statistical Association 93 (443), 935–948.
Chipman, H. A., E. I. George, and R. E. McCulloch (2010). BART: Bayesian additive regression trees. Annals
of Applied Statistics 4 (1), 266–298.
Denison, D. G., B. K. Mallick, and A. F. Smith (1998). A Bayesian CART algorithm. Biometrika 85, 363–377.
Friedman, J. H. (2001). Greedy function approxiamtion: A gradient boosting machine. Annals of Statistics 29,
1189–1232.
George, E., P. Laud, B. Logan, M. R, and S. R (2019). Fully nonparametric Bayesian additive regression trees.
Advances in Econometrics 40B, 89–110.
Ghahramani, Z. and T. Griffiths (2005). Infinite latent feature models and the Indian buffet process. In Advances
in neural information processing systems, Volume 18.
Hahn, P. R., J. S. Murray, and C. M. Carvalho (2020). Bayesian regression tree models for causal inference:
Regularization, confounding, and heterogeneous effects (with discussion). Bayesian Analysis 15 (3), 965–1056.
17

Hastie, T. and R. Tibshirani (2000). Bayesian backfitting (with discussion). Statistical Science 15, 196––223.
Hill, J. (2011). Bayesian nonparametric modeling of casual inference. Journal of Computational and Graphical
Statistics 20, 217––240.
Hill, J. (2013). Assessing lack of common support in casual inference using Bayesian nonparametrics: Implications
for evaluating the effects of breastfeeding on children’s cognitive outcomes. Annals of Applied Statistics 7, 1386
–1420.
Hill, J., A. Linero, and J. Murray (2020). Bayesian additive regression trees: a review and look forward. Annual
Reviews of Statistics and its Applications 7, 251––278.
Linero, A. R. (2018). Bayesian regression trees for high-dimensional prediction and variable selection. Journal of
the American Statistical Association 113, 626––636.
Linero, A. R. and Y. Yang (2018). Bayesian regression trees ensembles that adapt to smoothness and sparsity.
Journal of the Royal Statistical Society, Series B 80, 1087––1110.
Luo, Y., D. A. Stephens, D. J. Graham, and E. J. McCoy (2023). Assessing the validity of Bayesian inference
using loss functions. arXiv preprint arXiv:2103.04086 .
Murray, J. S. (2021). Log-linear Bayesian additive regression trees for multinomial logistic and count regression
models. Journal of the American Statistical Association 116 (534), 756––769.
Neal, R. M. (2003). Slice sampling. Annals of Statistics 31 (3), 705–767.
Sarti, D. A., E. B. Prado, A. N. Inglis, A. A. dos Santos, C. B. Hurley, R. A. Moral, and A. C. Parnell (2023).
Bayesian additive regression trees for genotype by environment interaction models. Ann. Appl. Stat. 17 (3),
1936–1957.
Sparapani, R. A., B. R. Logan, R. E. McCulloch, and P. W. Laud (2016). Nonparametric survival analysis using
Bayesian additive regression trees (BART). Stat. Med. 35 (16), 2741––2753.
Teh, Y. and D. Gorur (2009). Indian buffet processes with power-law behavior. In Advances in neural information
processing systems, Volume 22.
Thibaux, R. and M. I. Jordan (2007). Hierarchical Beta processes and the Indian buffet process. Proceedings of
the Eleventh International Conference on Artificial Intelligence and Statistics 2, 564–571.
18

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:55.426Z
- **Text Length:** 44276 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
