# PDF Document: Idir and Romary - 2025 - Efficient bayesian spatially varying coefficients modeling for censored data using the vecchia appro.pdf

**File Path:** Idir and Romary - 2025 - Efficient bayesian spatially varying coefficients modeling for censored data using the vecchia appro.pdf

**Processed Date:** 2026-02-10T18:17:55.049Z

**File Size:** 678.23 KB

**Total Pages:** 34

**Extracted Pages:** 34

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3429

**Title:** Efficient bayesian spatially varying coefficients modeling for censored data using the vecchia approximation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Efficient bayesian spatially varying coefficients
modeling for censored data using the vecchia
approximation
Idir Mohamed Yacinea, Romary Thomasa
aEcole des mines de Paris, 35 Rue Saint-Honoré, Fontainebleau, 77300, Ile de france, France
Abstract
Spatially varying coefficients (SVC) models allow for marginal effects to be non-stationary over space and thus offer a higher degree of flexibility with respect to standard geostatistical models with external drift. At the same time, SVC models have the advantage that they are easily interpretable. They offer a flexible framework for understanding how the relationships between dependent and independent variables vary across space. The most common methods for modelling such data are the Geographic-
ally Weighted Regression (GWR) and Bayesian Gaussian Process (BayesGP). The Bayesian SVC model, which assumes that the coefficients follow Gaussian processes, provides a rigorous approach to account for spatial nonstationarity. However, the computational cost of Bayes-GP models can be prohibitively high when dealing with large datasets or/and when using a large number of covariates, due to the repeated inversion of dense covariance matrices required at each Markov chain Monte Carlo (MCMC) iteratio-
n. In this study, we propose an efficient Bayes-GP modeling framework leveraging the Vecchia approximation to reduce computational complexity while maintaining accuracy. The proposed method is applied to a challenging soil pollution data set in Toulouse, France, characterized by a high degree of censorship (two-thirds censored observations) and spatial clustering. Our results demonstrate the ability of the Vecchia-based Bayes-GP model to capture spatially varying effects and provide meaningful ins-
ights into spatial heterogeneity, even under the constraints of censored data.
Keywords: Gaussian processes, Vecchia approximation, Bayesian modeling, Censored data, Spatially varying coefficients
arXiv:2511.21553v1 [stat.ME] 26 Nov 2025

2

1. Introduction
Soil pollution by various contaminants, including hydrocarbons, heavy metals and pesticides, poses significant dangers to both environmental and human health. These contaminants are highly persistent in the environment, bioaccumulate in food chains, and can be transported across different environmental compartments including groundwater, ultimately reaching humans through direct contact, inhalation of contaminated dust, or consumption of polluted food and water (Mekonnen et al., 2024; European Env-
ironment Agency, 2024) Exposure to hydrocarbon-polluted soils is linked to a range of adverse health effects, including genetic mutations, immunotoxicity, neurotoxicity, teratogenicity, and an increased cancer risk due to the carcinogenic nature of many hydrocarbon compounds (Venkatraman et al., 2024). Recent reviews highlight that soil pollution, often less visible than air pollution, contributes to cardiovascular diseases, respiratory illness, and other chronic health conditions through mechanis-
ms like oxidative stress and inflammation (Münzel et al., 2025). Given these substantial health risks, it is crucial that public agencies are provided with accurate, interpretable, uncertainty-aware information when assessing and managing soil hydrocarbon contamination. The factors influencing hydrocarbon distribution in soils operate across multiple scales, creating complex spatial patterns that challenge accurate mapping. At the microscale, soil physicochemical properties including organic matte-
r content, clay percentage, and pH strongly influence hydrocarbon retention and degradation rates (Shu et al., 2024). Mesoscale factors include hydrological processes, particularly in areas with shallow groundwater where contaminant transport can create dynamic pollution plumes (Lee et al., 2001). At the landscape scale, anthropogenic activities, especially industrial operations, transportation networks, and waste disposal practices, create distinctive spatial patterns that require specialized sam-
pling strategies (Froger et al., 2021). Accounting for cross-scale interactions to effectively map soil pollution is particularly challenging, especially in areas with sparse sampling. To compensate for the lack of direct pollutant measurements, covariates, available across the entire area, are commonly used. These covariates help enrich the data and, in some cases, reveal hidden relationships between hydrocarbon distribution and the covariates themselves. Various models incorporate such auxiliary-
 information with varying levels of interpretability, from krig
3

ing with external drift (De Fouquet, 2006), to machine learning approaches (Meng et al., 2023). Spatially Varying Coefficients (SVC) has regained recent interest (Comber et al., 2024; Finley and Banerjee, 2020; Mu et al., 2018), as it offers a nice middle ground between the two worlds, by letting the relationships between dependent and independent variables vary across space, it offers great flexibility and at the same time retains all the interpretability (Finley, 2011). The most common methods -
for modeling such data are the Geographically Weighted Regression (GWR) (Fotheringham et al., 2009) and Gaussian Process SVC (GP-SVC) (Dambon et al., 2021). The GP-SVC model, which assumes that the coefficients follow Gaussian processes, provides a rigorous approach to account for spatial non-stationarity. However, the computational cost of GP-SVC models can be prohibitively high when dealing with large datasets or/and when using a large number of covariates, due to the need for repeated inversion-
 of dense covariance matrices.
Uncertainty quantification using hierarchical Bayesian models has become a key component of modern soil pollution mapping, offering a comprehensive framework for risk assessment by jointly addressing measurement error, model parameter uncertainty, and spatial interpolation variability. This multi-level approach provides more reliable uncertainty estimates than singlescale methods, especially in areas with sparse sampling (Banerjee et al., 2003). Bayesian spatially varying coefficient models are po-
werful too ls due to their flexibility. However, this increased flexibility comes at a computational cost: "By far the greatest challenge to widespread adoption of these models is computational." concluded (Finley, 2011). While recent advances in the frequentist context have significantly improved scalability (Dambon et al., 2021; Murakami and Griffith, 2019), the Bayesian framework—where uncertainty quantification is most natural—remains hampered by prohibitive computational demands. Only a handf-
ul of studies have begun to tackle this bottleneck. Notable examples include (Finley and Banerjee, 2020), which implements parallelization and other computational enhancements to improve efficiency, and the more recent work of (Lei et al., 2024), which introduces a scalable framework based on low-rank decomposition techniques.
Since the problem comes from inverting large matrices, Vecchia approximation (Vecchia, 1988), which was originally proposed to approximate the
4

likelihood, can help to solve this problem by inverting matrices of maximum size M ≪ N (Datta et al., 2016). This approximation provides substantial computational gains while maintaining a high level of accuracy (Katzfuss and Guinness, 2021). The application of Vecchia’s approximation introduces some choices to be made, apart from the choice of M (the number of conditioning neighbors), it is necessary to order the observations before (Guinness, 2018) as well as to choose whether to apply this to -
the observations directly or to the latent process (Finley et al., 2019).
Measurements in the real world often come from instruments with bounded scales or from events observed over finite time periods. As a result, the problem of censored data arises: we only observe values up to a certain threshold. Frequentist models for censored data mostly consider the popular EM algorithm (Dempster et al., 1977) to obtain estimates of model parameters and a variation of the Tobit model (Basson et al., 2023) in the Bayesian framework. The Tobit model has since become a cornerstone -
of censored modeling in multiple research fields, including econometrics and survival analysis (Bewick et al., 2004). It has been extended through multiple variations (Greene, 2005), such as: multiple latent variables, e.g., one variable determines which observations are non-censored while another determines their values (Amemiya, 1984); Tobit-like models of censored count data (Terza, 1985); Tobit Quantile Regression (Powell, 1986); dynamic, autoregressive Tobit (Wei, 1999); and combination with -
Kalman Filter (Allik et al., 2015). As reflected in all the aforementioned works, research on censored modeling commonly decomposes the process into two components: a latent process representing the true underlying values, and an observation mechanism that yields a distorted version of this latent process. While the introduction of a latent process is perfectly interpretable and naturally aligns with real-world constraints, such as sensor limitations, it only exacerbates an already significant com-
putational burden in bayesian GP-SVC models. For instance, (Finley et al., 2019), who applied the Vecchia likelihood to a Bayesian Gaussian process (in a setting involving significantly fewer parameters than a Bayesian GP SVC model), noted: "We observed that, for very large spatial datasets, sequential updating of the random effects often leads to very poor mixing in the MCMC. The computational gains (using Vecchia) per MCMC iteration is thus offset by a slow converging MCMC" (Liu et al., 1994) sh-
owed that MCMC algorithms where one or more vari
5

ables are marginalized out tend to have lower autocorrelation and improved convergence behavior.
In summary, when dealing with difficult, sparse, and clustered data such as hydrocarbon contamination or soil pollution, we need a flexible model that can handle uncertainty and, crucially, remains interpretable. Because data is limited, it becomes essential to identify and incorporate relevant covariates. Therefore, the model must be able to handle covariates effectively and transparently. Bayesian GP-SVC models meet all these criteria, although they come with a high computational cost when N and-
/or p is large. Moreover, when working with censored data, the modeling task becomes even more challenging. While the Bayesian framework naturally accommodates censoring through latent variables, this further amplifies issues of identifiability and computational burden. This paper aims to address both of these challenges—censored data and computational cost—by proposing a Vecchia approximation of the Bayesian GP-SVC model that can handle censoring without introducing a latent field. The paper is o-
rganized as follows: Section 2 introduces the proposed model after a brief review of Bayesian SVC models. Section 3 validates the proposed approximation by means of a comparative analysis. Section 4 presents an illustrative case study on hydrocarbon soil pollution in Toulouse, France. The paper concludes with a summary of the findings and perspectives for future work.
2. Model
Let Z(si) and x(si) denote the response and the predictors observed at location si, i = 1, 2, . . . , n. The spatial location si ∈ D ⊂ Rd, d ≥ 1, lies within a domain D. In this work, we focus on the two-dimensional case (d = 2). This section outlines the logical development of a Bayesian SVC model tailored to censored data, following a brief reintroduction of the standard SVC formulation. We then describe two alternative strategies for incorporating the Vecchia approximation into this framework.
6

2.1. Review of Bayesian Spatially Varying Coefficients
2.1.1. Spatially Varying Coefficients (SVC) Model
The SVC framework extends the standard linear regression model with p predictors:
Zi = β1x(1)
i + · · · + βpx(p)
i + εi, εi
ii∼d N (0, τ 2), (1)
When the coefficients are allowed to vary across space, the model is expressed as:
Zi = β1(si)x(1)
i + · · · + βp(si)x(p)
i + εi, εi
ii∼d N (0, τ 2), (2)
Following (Gelfand et al., 2003) and more recently (Dambon et al., 2021), each spatially varying coefficient βj(·) is modeled by a Gaussian process (GP). For each covariate j, the associated coefficient βj(·) is decomposed into a fixed and a random effect:
βj(·) = αj + ηj(·) (3)
The fixed effect αj represents the global mean of the coefficient, and ηj(·) is a zero-mean Gaussian process with covariance matrix Σ derived from a stationary covariance function parametrized by Θj:
ηj(·) ∼ Nn(0n, ΣΘj ). (4)
Assuming mutual prior independence among the Gaussian processes ηj, the joint random effect vector
η = (η⊤
1 , . . . , η⊤
p )⊤ ∈ Rnp (5)
follows the distribution η ∼ Nnp(0np, Ση) with block-diagonal covariance matrix
Ση := diag(Σ(Θ1), . . . , Σ(Θp)). (6)
Let X ∈ Rn×p denote the design matrix with elements (X)ij = x(j)
i , representing the ith observation of the jth covariate. The fixed effect component is given by Xα, where α = (α1, . . . , αp)⊤ ∈ Rp. Further, we define W ∈ Rn×(np) as a sparse matrix structured as:
W := diag(x(1)) | . . . | diag(x(p)) . (7)
7

Using this notation, the random effect component is expressed as W η. The error term ε ∼ Nn(0n, τ 2In) is assumed independent of η. In summary, writing the response as an n-dimensional vector Z, we obtain the GP-based SVC model:
Z = Xα + W η + ε. (8)
This results in a compact Gaussian process formulation:
Z ∼ Nn(Xα, W ΣηW ⊤ + τ 2In). (9)
Note that the dependence of Ση on the covariance parameters Θ = (Θ1, . . . , Θp) has been suppressed for clarity.
2.1.2. Bayesian SVC
By assigning independent priors to the parameters in the model defined in Equation (9), we obtain the following Bayesian formulation:
Z | α, Θ, τ 2 ∼ Nn Xα, W Ση(Θ) W ⊤ + τ 2In ,
α, Θ, τ 2 ∼ p(α) p(Θ) p(τ 2). (10)
Posterior inference for the parameters can be performed using standard Markov Chain Monte Carlo (MCMC) methods (Robert et al., 1999), since the model remains a Gaussian process with a structured covariance matrix. However, in practice, for large numbers of observations (n) and/or predictors (p), the computational burden becomes substantial. This is primarily due to the need to repeatedly compute and invert the n × n covariance matrix at each MCMC iteration. The problem is further exacerbated by th-
e high-dimensional parameter space, as each coefficient-specific Gaussian process introduces its own set of covariance parameters. This contrasts with classical GP models, which typically involve only a small number of hyperparameters.
2.2. Bayesian SVC for censored data
Beyond computational challenges, the presence of left-censored observations—where the values fall below a known detection threshold L—introduces additional methodological complexities. A principled and interpretable approach introduces a latent spatial process representing the unobserved true contamination field, with the censoring interpreted as a limitation of the measurement system. This strategy, hereafter referred to as the *full latent approach*, aligns well with empirical realities and has -
been shown to yield superior performance, as will be illustrated in subsequent sections.
8

2.2.1. Full latent formulation
We first consider the case where all data are fully observed. Let wi denote the underlying spatial signal at location si, defined as
wi = β1(si)x(1)
i + · · · + βp(si)x(p)
i . (11)
The observed response is then modeled as
Zi = wi + εi, εi
ii∼d N (0, τ 2). (12)
This latent formulation is equivalent to the Bayesian hierarchical model in Equation (10), and can be rewritten as:
Z | w, τ 2 ∼ Nn(w, τ 2In),
w | α, Θ ∼ Nn Xα, W Ση(Θ) W ⊤ ,
α, Θ, τ 2 ∼ p(α) p(Θ) p(τ 2).
(13)
Here, w ∈ Rn represents the unobserved true latent process, while Z are noisy measurements of this process, corrupted by additive Gaussian noise with variance τ 2. In the presence of left-censored data, only partial information is available about some elements of Z. Let L ∈ R be the known detection threshold, and define the index sets
Io = {i : wi + εi > L}, Ic = {i : wi + εi ≤ L}, (14)
corresponding respectively to the observed and censored observations. The data then satisfy
Zi =
(
wi + εi, i ∈ Io,
L, i ∈ Ic. (15)
We define the partition Z = Zo ∪ Zc, with
Zo = {Zi : i ∈ Io}, Zc = {Zi : i ∈ Ic}.
The corresponding censored-data likelihood leads to the following extended model:
Zi | wi, τ 2 ∼

 
 
N (wi, τ 2), i ∈ Io,
Pr(Zi ≤ L | wi, τ 2) = Φ L − wi
τ , i ∈ Ic,
w | α, Θ ∼ Nn Xα, W Ση(Θ) W ⊤ ,
α, Θ, τ 2 ∼ p(α) p(Θ) p(τ 2),
(16)
9

where Φ(·) denotes the cumulative distribution function of the standard normal distribution.
While this formulation provides a coherent Bayesian treatment of censored spatially-varying coefficient models, it introduces significant computational burdens. The latent vector w must be treated as an additional parameter of dimension n, which substantially increases the parameter space and leads to slow mixing and strong autocorrelation in MCMC samplers. These challenges are well-documented in the literature, see e.g., (Finley et al., 2019; Liu et al., 1994). In particular, two main computation-
al bottlenecks arise: (i) the high dimensionality of the latent field w, and (ii) the repeated inversion of dense n × n covariance matrices needed to evaluate the full conditional distributions.
2.2.2. Latent Vecchia approximation
To address the computational bottleneck caused by the repeated inversion of the n × n covariance matrix, we propose applying the Vecchia approximation to the latent spatial process w. The Vecchia approximation is based on rewriting the joint density of the latent vector w as a product of conditional densities:
p(w) = p(w1)
n
Y
i=2
p(wi | w1, . . . , wi−1) = p(w1)
n
Y
i=2
p(wi | wv(i)), (17)
where v(i) = {1, . . . , i − 1} is the full conditioning set for the ith variable. The key idea behind the Vecchia approximation is to replace the full conditioning set v(i) with a smaller subset ve(i) of size at most M ≪ i − 1, often chosen to correspond to spatial neighbors of observation i. This yields the following approximation to the joint density:
pe(w) = p(w1)
n
Y
i=2
p(wi | wve(i)), (18)
which still defines a valid multivariate normal distribution. Under this approximation, the latent vector w follows:
pe(w) = N (Xα, (BF B⊤)−1), (19)
where F is a diagonal matrix and B is an upper-triangular matrix (with structure determined by the conditioning sets ve(i)). The explicit construction
10

of F and B is detailed in (Datta et al., 2016) and (Katzfuss et al., 2020), and depends on the original covariance structure Σ = W Ση(Θ)W ⊤. Unlike the full joint density p(w), the approximated density pe(w) depends on the ordering of the observations as well as the size M of the conditioning sets. If the full conditioning is used (i.e., ve(i) = v(i)), then the approximation becomes exact. However, by selecting a small number of conditioning neighbors, the computational cost can be dramatically r-
educed. In particular, this approximation avoids the need to invert a full n × n covariance matrix at each MCMC iteration. Instead, it only requires inversion of matrices of size M × M . Moreover, the use of conditional distributions in the Vecchia formulation facilitates parallel computation, making this approach highly scalable for large spatial datasets.
2.2.3. Latent-Free Vecchia approximation
We propose a novel model that leverages the Vecchia approximation not only to mitigate the computational cost of matrix inversion but also to eliminate the need for the latent spatial field w. This latent-free formulation allows for scalable Bayesian SVC modeling in the presence of censored data and high-dimensional predictors, even when the number of observations n is large. The likelihood of the observed and censored data Z can be written as:
p(Z) = p(Z1)
Y
i∈Io
p(Zi | Zv(i))
Y
i∈Ic
ZL
−∞
p(x | Zv(i)) dx, (20)
where v(i) denotes the conditioning set for observation i, and the censored indices Ic correspond to values below the detection limit L. We apply the Vecchia approximation directly to the observed vector Z, by replacing each conditioning set v(i) with a reduced neighbor set v ̃(i), constrained to include only previously ordered non-censored observations. That is, for each i, we require:
v ̃(i) ⊂ {j ∈ Io : j < i}.
This yields the approximate likelihood:
p(Z) ≈ p ̃(Z) = p(Z1)
Y
i∈Io
p(Zi | Zv ̃(i))
Y
i∈Ic
ZL
−∞
p(x | Zv ̃(i)) dx. (21)
11

Each term in this expression corresponds to a Gaussian or truncated Gaussian:
p ̃(Z) = N (Z1 | X1α, F11)
Y
i∈Io
N (Zi | Xiα + μi, Fii)
Y
i∈Ic
Φ L − (Xiα + μi)
√Fii
,
(22) where Fii and μi are computed based on the conditional structure implied by v ̃(i), as in (Datta et al., 2016). While max-min ordering often yields the best results in Vecchia approximations (Guinness, 2018), applying it directly in this censored-data context is problematic, since computing conditional expectations requires knowledge of the unobserved censored values. To circumvent this issue, we propose an ordering strategy that first places all non-censored observations—ordered via the max--
min criterion—followed by the censored ones in arbitrary order. Conditioning is then restricted to the nearest M preceding non-censored observations. A toy example is provided in Figure 1, where we consider n = 6 observations (3 observed and 3 censored), with M = 2. The non-censored observations are ordered first and each observation conditions on its M closest predecessors that are also non-censored.
Z2 Z4
Z1 Z3 Z6
Z5
Figure 1: Toy example illustrating the latent-free Vecchia approximation with 3 observed and 3 censored values. Conditioning is restricted to the two closest preceding non-censored observations.
This construction enables evaluation of the (approximated) data likelihood in a single pass over the data, given parameters α, τ 2, and Θ, without the need for a latent process and with matrix inversions of size at most M ×M .
12

This results in a highly scalable inference scheme for censored Bayesian SVC models.
2.3. Predictions
Following the MCMC sampling procedures described previously, we obtain L posterior samples (α, Θ, τ 2, w) for Full Latent model and Latent Vecchia, and (α, Θ, τ 2) for Latent-Free Vecchia model. We first introduce the notation for prediction locations, and then give for each of the three models :
1. The formula for the posterior mean for each vector of the posterior distribution of the parameters. 2. The formula for conditional simulation at unsampled locations.
Let
• Xo = {xi : i ∈ o} be the covariates at the nO observed sites.
• Xp = {xj : j ∈ p} be the covariates at the nP new (unsampled) sites.
• wo = (wi : i ∈ o) the latent Gaussian vector at observed sites.
• wp = (wj : j ∈ p) the latent Gaussian vector at prediction sites.
The joint distribution of the observations and the predictions remains a Gaussian process, with a covariance matrix denoted by K:
wo
wp
∼ N Xoα
Xpα , K = Koo Kop
Kpo Kpp
.
Let Q be the inverse of K,i.e the precision matrix, and U its Cholesky decomposition K−1 = Q = U U t. U is therefore a triangular matrix
U = Uoo Uop
0 Upp
.
13

2.3.1. Full-latent Gaussian-process
Because we sampled the latent vector wo, standard GP conditioning applies: The conditional mean :
μp = Xpα − Q−1
pp Qpo (wo − Xoα).
Conditional simulations can be obtained using :
Var(wp | wo) = Q−1
pp , wsim
p = μp + U −1
pp ε. ε ∼ N (0, I)
2.3.2. Vecchia-latent
Again we have a sample of wo, under the constraint that the prediction points are ordered after the observation points, we can use the results of (Katzfuss et al., 2020) to predict using the Vecchia approximation :
μp = Xpα − (U T
pp )−1 U T
op (wo − Xoα),
The prediction tasks can be carried out solely based on U•p, which is the sub-matrix formed by the last nP columns of U corresponding to wp. That is, the first nO columns of U corresponding to wo would then not be required for prediction, resulting in a prediction complexity that depends on nP , not on n = nO + nP . This computational simplification comes at the price of some loss of accuracy. The non zeros entries of U•p can be directly calculated knowing the covariance parameters and the number -
of neighbors M by following the algorithm available in (Katzfuss et al., 2020). And so a conditional draw is simply :
wsim
p = μp + U −1
pp ε, ε ∼ N (0, I).
2.3.3. Vecchia-latent-free
Here wo is not sampled. Prediction at unsampled locations is carried out in two steps: in the first step, we predict the response at censored locations using the non-censored observations and adjust these predictions with the Mills ratio (Heckman, 1979). In the second step, we predict at the truly unsampled locations using both the non-censored observations and the newly recovered values at the censored locations.
14

Step 1: predict at censored locations : After ordering Zo = (Zo\c, Zc) with Zo\c ordered via max-min ordering, and Zc condition on the M nearest Zo\c. We can build the Vecchia Cholesky factor U (1) of the precision matrix of (Zo\c, Zc). Next, we can compute
μc = Xcα − U (1)
cc
T −1 U (1)
(o\c), c
T (Zo\c − Xo\cα), Kc = U (1)
cc
T U (1)
cc
−1.
To compute μ∗
c = E[Zc|Zo\c, wc < L] we adjust using the Mills ratio. The Mills ratio adjustment arises naturally from truncated normal theory. For a normal variable Z ∼ N (μ, σ2) censored at L, the conditional expectation is E[Z|Z ≤ L] = μ − σλ((L − μ)/σ), where λ is the inverse Mills ratio (Heckman, 1979). The Vecchia approximation induces conditional independence among observations given their conditioning sets, allowing this univariate result to be applied componentwise to obtain the exact censored conditio-
nal mean μ∗
c under the approximated model.
μ∗
c = μc − diag(K1/2
c )λ L − μc
diag(K 1/2
c)
!
where λ(a) = φ(a)
Φ(a) is the inverse Mills ratio, with φ the standard normal den
sity and Φ the standard normal Cumulative distribution function, applied component-wise.
Stage 2: Predict at new sites :
We begin by augmenting the observed data through Zeo = ( Zo\c, μ∗
c ).
The augmented vector Zeo is then ordered, prediction last, using max-min approach, from which we construct the Vecchia Cholesky decomposition U (2).
Following the methodology established previously : U (2) = U (2)
oo U (2)
op 0 U (2)
pp
!
,
and set
μp = Xpα − U (2)
pp
T −1 U (2)
op
T (Zeo − Xoα),
with simulation wsim
p = μp + U (2) −1
pp ε.
Summary All three models yield a posterior mean μp and conditional simulations for wp. The "Full-latent" model uses the exact dense-GP formulas, "Latent Vecchia" uses a single Vecchia decomposition of (wo, wp), and
15

"Latent-Free Vecchia" uses two Vecchia steps with a Mills-ratio adjustment to handle the censored observations.
3. Validation and Performance Evaluation
This section presents a comprehensive validation of the proposed latentfree Vecchia approximation for Bayesian spatially varying coefficients (SVC) models with censored data. We address two primary objectives: (1) evaluating the accuracy of the approximated likelihood computation, and (2) comparing the performance of three Bayesian inference approaches across different censoring scenarios and computational settings.
3.1. Likelihood Approximation Accuracy
To assess the quality of our proposed likelihood approximation, we conduct a large-scale simulation study comparing the true likelihood with the Vecchia-approximated likelihood across various censoring levels and conditioning set sizes.
3.1.1. Simulation Setup
We simulate 10,000 independent datasets, each containing n = 200 spatial observations within a unit square. Each dataset follows the SVC model with p = 2 predictors, using the following parameter configuration:
• Fixed effects: α = (−5, 10)⊤
• Spatial range parameters: φ = (40, 15)⊤
• Variance parameters: σ2 = (15, 30)⊤
• Nugget variance: τ 2 = 0.1
For each simulated dataset, we compute both the true likelihood using Genz’s algorithm (Genz, 1992) for multivariate normal integrals and the proposed Vecchia approximation with conditioning set sizes M ∈ {10, 30, 50}. We consider five censoring scenarios: 0%, 5%, 25%, 50%, and 75% of observations falling below the detection threshold.
16

3.1.2. Results
Figure 2 presents the relative likelihood error across different values of M and censoring levels, defined as :
∆rel = | log p ̃(Z) − log p(Z)|
| log p(Z)| × 100%
The results demonstrate that the Vecchia approximation maintains high accuracy across most practical scenarios, with particularly strong performance for censoring levels below 75%. The approximation error remains consistently low (typically below 1%) for moderate censoring levels (50%), indicating that the proposed method provides a reliable alternative to exact likelihood computation. As expected, the approximation quality improves with larger conditioning sets, though the gains diminish beyond M-
 = 30 for most censoring scenarios.
0% censoring 5% censoring 25% censoring 50% censoring 75% censoring
10 30 50 10 30 50 10 30 50 10 30 50 10 30 50
0%
2.5%
5%
7.5%
10%
Number of Conditioning Neighbors (M)
Relative Log Likelihood Difference (∆rel)
M 10 30 50
Figure 2: Relative likelihood approximation error across different conditioning set sizes (M ) and censoring levels. The approximation demonstrates high accuracy for censoring levels below 75%, with diminishing returns beyond M = 30.
Figure 3 illustrates how the approximation quality evolves as a function of M for different censoring levels. This analysis reveals that lower censoring levels benefit more substantially from increased conditioning set sizes.
17

0.03
0.10
0.30
1.00
3.00
10 30 50 Number of Conditioning Neighbors (M)
Relative Difference (∆rel) − log scale
Censoring
Rate (%) 0% 5% 25% 50% 75%
Figure 3: Evolution of likelihood approximation accuracy as a function of conditioning set size M for different censoring levels. Higher censoring rates show greater improvement with increased M .
3.2. Bayesian Inference Comparison
We compare three Bayesian inference approaches for SVC models with censored data:
1. Full Latent: The complete latent formulation from Equation (16) 2. Latent Vecchia: Vecchia approximation applied to the latent field w 3. Latent-Free Vecchia: Our proposed method eliminating the latent field entirely
3.2.1. Simulation Design
Using a single representative dataset of n = 200 observations with the same parameter configuration as above, we implement MCMC sampling for each method across multiple scenarios:
• Conditioning set sizes: M ∈ {10, 30, 50} (for Vecchia-based methods)
• Censoring levels: 0%, 5%, 25%, 50%, and 75%
• Chain length: 6 chains of 10,000 iterations with 5,000 burn-in
18

All computations were performed on a Dell Latitude 5520 laptop equipped with an Intel Core i5-1145G7 processor (8 cores, up to 4.2 GHz) and 16 GB RAM, running Ubuntu 22.04 LTS. MCMC sampling was implemented using Stan version 2.36.0 (Stan Development Team, 2024) with parallel chain execution.
3.2.2. Parameter Estimation Accuracy
Figure 4 displays the posterior estimates for the first fixed effect parameter α1 across all methods, conditioning set sizes, and censoring levels. The results demonstrate remarkable consistency between the three approaches, with credible intervals showing substantial overlap across all scenarios. This consistency validates our theoretical expectation that the latent-free formulation preserves the inferential properties of the full latent approach while offering computational advantages. Even unde-
r high censoring (75%), all methods converge to similar posterior distributions, indicating robustness of the approximation scheme.
Full Vecchia_Free Vecchia_Latent
0 5 25 50 75 0 5 25 50 75 0 5 25 50 75
−10
−5
0
Censoring Level (%)
Parameter Estimate
Method
Full
Vecchia_Free (M=10)
Vecchia_Free (M=30)
Vecchia_Free (M=50)
Vecchia_Latent (M=10)
Vecchia_Latent (M=30)
Vecchia_Latent (M=50)
Figure 4: Posterior estimates (mean and 95% credible intervals) for parameter α1 across three Bayesian methods, different conditioning set sizes, and censoring levels. The remarkable consistency between methods validates the proposed approximation.
3.2.3. Computational Efficiency
Figure 5 presents the computational time comparison between the three methods for different values of M . The latent-free Vecchia approach demon
19

strates substantial computational advantages, achieving significant speedups compared to the full latent approach. Importantly, these timing differences represent a conservative assessment, as they are measured on relatively small datasets (n = 200). The computational advantages of the latent-free method are expected to become even more pronounced for larger spatial datasets, where the elimination of the n-dimensional latent field w from the parameter space yields increasingly significant efficie-
ncy gains.
Full Vecchia_Free Vecchia_Latent
0
5000
10000
15000
Elapsed Time (seconds)
Method
Full
Vecchia_Free (M=10)
Vecchia_Free (M=30)
Vecchia_Free (M=50)
Vecchia_Latent (M=10)
Vecchia_Latent (M=30)
Vecchia_Latent (M=50)
Figure 5: Computational time comparison across the three Bayesian methods for different conditioning set sizes. The latent-free Vecchia approach shows substantial speedups, with advantages expected to increase for larger datasets.
3.2.4. Predictive Performance Comparison
To evaluate the predictive capabilities of the three bayesian approaches, we assess their performance on a holdout test dataset consisting of 800 spatial locations. We compute out-of-sample predictions using 30,000 posterior samples from each fitted model and evaluate two distinct aspects of predictive performance using complementary metrics. For point prediction assessment, we use Root Mean Square Error (RMSE) to evaluate the quality of the conditional mean predictions. The conditional mean at ea-
ch test location is computed by averaging over all 30,000 krigings, providing a single point estimate that represents the expected value of the
20

response variable given the observed data and model parameters. For distributional prediction assessment, we employ the Continuous Ranked Probability Score (CRPS) to validate the quality of the conditional simulations. Rather than collapsing to a point estimate, this evaluation utilizes the full set of 30,000 posterior simulations to construct an empirical distribution of the response variable at each test location. The CRPS then measures how well this entire predictive distribution matches the o-
bserved test values, providing a comprehensive assessment of the model’s ability to quantify prediction uncertainty. Lower CRPS values indicate better probabilistic forecasting accuracy.
Figure 6 presents the RMSE performance for the three models across all censoring scenarios and conditioning set sizes. The results reveal several important patterns regarding the impact of censoring and approximation parameters on prediction accuracy.
1.9
2.0
2.1
2.2
2.3
0% 5% 25% 50% 75% Censoring Level
RMSE
M 10 30 50 Model Full Latent Latent free Vecchia Latent Vecchia
Figure 6: RMSE performance across censoring scenarios for the three Bayesian methods.
Figure 7 shows the corresponding CRPS results, which provide insight into the quality of the entire predictive distribution rather than just point
21

estimates. The CRPS results largely mirror the RMSE patterns, confirming that the methods’ relative performances are consistent across both point and distributional prediction metrics.
1.0
1.1
0% 5% 25% 50% 75% Censoring Level
CRPS
M 10 30 50 Model Full Latent Latent free Vecchia Latent Vecchia
Figure 7: CRPS performance across censoring scenarios for the three Bayesian methods.
Regarding the effect of censoring, as expected, all methods exhibit deteriorating prediction performance as the censoring level increases from 0% to 75%. This degradation reflects the fundamental challenge of making predictions when substantial portions of the training data are censored. However, the rate of deterioration varies across the methods, with model 3 performances deteriorating more in the 75% censoring scenario, as observed previously for the likelihood approximation accuracy in figure -
3. As for the impact of the conditioning set size, the results reveal that for the Vecchia-based approaches (Latent Vecchia and Latent-Free models), increasing the conditioning set size M from 10 to 50 leads to consistent improvements in prediction accuracy across all censoring scenarios. This enhancement becomes particularly evident under higher censoring levels, where the additional conditioning information proves more valuable for achieving accurate approximations.
22

Interestingly, we observe that Latent-Free model can outperform the Fulllatent model under certain censoring scenarios. While this might initially appear counterintuitive, the explanation lies in the nature of the prediction task, which incorporates the quality of parameter estimation. Since LatentFree model does not rely on a latent field, it converges considerably faster than the Full-latent model. This faster convergence allows the model to provide a more accurate representation of the posteri-
or parameter distribution within the same number of iterations. When we compare the models using an equal number of MCMC iterations, Latent-Free model emerges as both faster and more effective in terms of predictive performance, particularly when the censoring threshold remains below 50% and the conditioning set is relatively large (M=30 or 50). Taken together, our estimation and prediction results demonstrate that Free-Latent Vecchia model offers a practical and efficient framework for modeling B-
ayesian spatially varying coefficients in the presence of censoring. Its computational efficiency and robust performance under moderate to high censoring make it a compelling choice for applied spatial analysis.
3.3. Summary
The validation study demonstrates two key achievements of our proposed methodology:
Likelihood Approximation Quality: The relative error analysis confirms that the Vecchia approximation to the censored-data likelihood maintains high accuracy across practical censoring scenarios. The approximation performs exceptionally well for censoring levels up to 50%, with acceptable performance even at 75% censoring when appropriate conditioning set sizes are employed. Computational Scalability: The latent-free formulation successfully eliminates the primary computational bottlenecks associa-
ted with high-dimensional latent fields while preserving inferential accuracy. The dramatic reduction in computational time, combined with the maintained parameter estimation quality, makes this approach particularly attractive for large-scale spatial applications. The consistency of parameter estimates across all three methods provides strong evidence that the proposed approximations do not introduce substantial bias, while the computational gains position this methodology as a practical solution-
 for analyzing large censored spatial datasets with spatially varying coefficients.
23

These results establish the foundation for applying Bayesian SVC models to real-world problems where both computational efficiency and statistical rigor are essential, particularly in environmental and epidemiological applications where censored observations are commonplace.
4. Case Study: Hydrocarbon Contamination in Toulouse Metropolis
This section demonstrates the practical applicability of our proposed latent-free Vecchia approximation for Bayesian spatially varying coefficients models with censored data. The case study analyze hydrocarbon contamination data from the Toulouse Metropolis, France. It represents a typical environmental monitoring scenario where detection limits create substantial censoring challenges, and spatial heterogeneity necessitates flexible modeling approaches.
4.1. Data Description and Study Area
The dataset comprises soil samples collected across the Toulouse metropolitan area, with measurements of hydrocarbon concentrations (C10-C40) at various locations within the study region. The spatial domain covers approximately 31.25 km2 (555.46–586.71 km longitude, 6268.91–6294.11 km latitude) in the Lambert Conformal Conic projection system. The irregular sampling design reflects the practical constraints of environmental monitoring, with higher sampling density near urban areas and sparser cove-
rage in peripheral zones. Hydrocarbon contamination in urban environments typically originates from multiple sources including fuel storage facilities, industrial activities, vehicular emissions, and historical spills. The C10-C40 fraction represents medium to heavy petroleum hydrocarbons, which are particularly relevant for soil contamination assessment due to their persistence and potential environmental impacts. For confidentiality reasons, no numerical values of hydrocarbon concentrations are -
reported. Based on established environmental and urban development theory, we consider six spatially-referenced predictors that potentially influence hydrocarbon distribution patterns: Topographic Factor:
24

• Altitude (ALT): Elevation above sea level (meters), ranging from 107.2 to 281 meters. Topography influences drainage patterns, erosion processes, and pollutant transport mechanisms, with lower elevations potentially accumulating hydrocarbons through gravitational flow and surface runoff.
Distance-Based Proximity Measures:
• dist_basias: Distance to potentially contaminated sites (meters), based on the BASIAS database of potentially polluting activities, including fuel stations, industrial facilities, and historical contamination sources.
• dist_basol: Distance to confirmed polluted or remediated sites (meters), from the BASOL database of contaminated sites requiring monitoring, many of which involve hydrocarbon contamination.
• dist_center: Distance to the city center (meters), capturing urban development patterns and historical contamination sources, with city centers often having higher concentrations of potential hydrocarbon sources.
• dist_water: Distance to rivers and water bodies (meters), reflecting hydrological transport pathways and potential dilution effects for hydrocarbon contamination.
• dist_road: Distance to the nearest road (meters), representing trafficrelated hydrocarbon contamination sources including fuel spills, vehicle emissions, and road runoff.
An intercept term is included to account for the baseline level, resulting in a total of seven covariates. The dataset exhibits several characteristics that makes it particularly suitable for demonstrating our methodology: Left-Censoring Issues: Approximately 50% of observations fall below the detection limit, creating substantial censoring that must be appropriately handled to avoid biased parameter estimates and predictions. Importantly, the censored observations show no apparent spatial cluster-
ing pattern. Computational Scale: With n = 136 observations and p = 7 predictors, this dataset represents a moderately-sized spatial problem. While this
25

scale remains computationally feasible, implementing a full Bayesian inference with latent spatial fields would be prohibitively expensive due to the extensive MCMC sampling required. Moreover, the prediction grid contains 10,000 locations, making it computationally infeasible to perform kriging at each MCMC iteration without approximation. This computational constraint suggests the use of our proposed model without an explicit latent field specification, offering a more tractable approach to spa-
tial modeling at this scale
4.2. Model Specification and implementation details
We apply our latent-free Vecchia SVC model to the log-transformed hydrocarbon concentration data, using the following specifications: For each environmental covariate j ∈ {1, . . . , 7}, we model the spatially varying coefficients as:
βj(s) = αj + ηj(s) (23)
where αj represents the global mean effect and ηj(s) is a zero-mean Gaussian process with exponential covariance function :
Cov(ηj(s), ηj(s′)) = σ2
j exp (−φj∥s − s′∥) (24)
where σ2
j is the variance parameter, φj is the decay (or inverse range) parameter, and ∥s − s′∥ denotes the Euclidean distance between spatial locations s and s′. We employ weakly informative prior distributions: Gaussian priors for the global mean effects αj, inverse-gamma priors for the variance parameters
σ2
j and τ 2, and gamma priors for the spatial decay parameters φj. These choices reflect standard practice in spatial statistics while allowing the data to dominate posterior inference. Specific hyperparameter values were chosen to be weakly informative given the scale of the study area and the anticipated magnitude of covariate effects. We implement the latent-free Vecchia approximation with conditioning set size M = 40. The spatial ordering follows our proposed strategy: noncensored observations a-
re ordered using the max-min criterion, followed by censored observations, with conditioning restricted to the M nearest preceding non-censored neighbors. To generate spatial predictions across the study area, we construct a regular prediction grid containing approximately 10,000 locations, with covariate
26

values extracted at each grid point using the environmental predictors described in the previous subsection. MCMC sampling is implemented in Stan with 4 parallel chains, each running for 10,000 iterations (including 5,000 burn-in samples), resulting in 20,000 posterior samples. Consequently, we obtain 20,000 posterior predictive realizations at each of the 10,000 grid locations, enabling comprehensive uncertainty quantification for the spatial predictions.
4.3. Results and Spatial Patterns
The Bayesian spatially varying coefficients model with latent-free Vecchia approximation successfully converged after 10,000 MCMC iterations across 4 parallel chains. All parameters exhibited satisfactory mixing properties and convergence diagnostics (all Rˆ < 1.01). Figure 8 presents four complementary perspectives on the spatial analysis of hydrocarbon contamination.
Panel A displays the posterior mean predictions of log-transformed hydrocarbon concentrations (C10-C40) across the study area. The spatial pattern reveals substantial heterogeneity in contamination levels, with higher concentrations observed in the vicinity of Toulouse Airport and across the northwestern part of the region. The red points indicate the locations of observed soil samples, demonstrating the irregular sampling design with denser coverage in certain urban sectors. Panel B illustrates t-
he prediction uncertainty through the standard deviation of the posterior predictive distribution. The uncertainty map reveals an intuitive pattern: prediction variance is lowest near observed sample locations and increases progressively with distance from sampling points. Notably, regions with higher predicted contamination levels coincide with areas of high uncertainty, These high-value predictions in data-sparse regions reflect covariate-driven extrapolation, where the model identifies relation-
ships between contamination and environmental predictors. The spatial distribution of uncertainty provides valuable guidance for adaptive sampling strategies, identifying areas where additional measurements would most effectively reduce predictive uncertainty.
27

X Coordinate
Y Coordinate
LCo1g0−C40
A) Predicted Log Hydrocarbon C10−C40
X Coordinate
Y Coordinate
Std. Dev.
B) Prediction Standard Deviation
X Coordinate
Y Coordinate
Distance
(m)
2500
5000
7500
10000
C) Distance to Polluted Sites
X Coordinate
Y Coordinate
Coefficient
Value
0.09
0.12
0.15
0.18
D) Spatially Varying Coefficient (Distance to Polluted Sites)
Figure 8: Spatial analysis of hydrocarbon contamination in Toulouse Metropolis. (A) Posterior mean predictions of log-transformed C10-C40 concentrations with observed sample locations (red points). (B) Prediction uncertainty (posterior standard deviation). (C) Distance to confirmed polluted sites (BASOL database). (D) Spatially varying coefficient for distance to polluted sites, showing heterogeneous effects across the study area
28

Panel C presents one of the key environmental covariates: distance to confirmed polluted sites (BASOL database). The spatial pattern reveals that certain zones of the metropolis are in close proximity to known contamination sources, while peripheral areas are more distant from documented polluted sites. Panel D displays the spatially varying coefficient for this covariate (meancentered), revealing substantial spatial heterogeneity in how proximity to documented sites influences hydrocarbon concen-
trations. While conventional wisdom suggests proximity to known contaminated sites should correlate with higher pollution levels, the spatially varying coefficients demonstrate a more complex reality: the relationship varies considerably across the study area, with both positive and negative local effects. This heterogeneity likely reflects the interplay of multiple factors including site remediation history, incomplete database coverage of diffuse pollution sources, spatial confounding with other-
 environmental variables, and local-scale transport processes. The flexibility of the SVC framework proves essential here, as a global coefficient would mask these important spatial variations in the contamination-distance relationship.
5. Conclusion
This paper introduces an efficient Bayesian framework for spatially varying coefficients models that addresses two critical challenges in environmental monitoring: computational scalability and the presence of censored observations. Our proposed latent-free Vecchia approximation eliminates the highdimensional latent field from the parameter space while maintaining inferential accuracy, achieving substantial computational gains without sacrificing statistical rigor. Through comprehensive validation-
 studies, we demonstrated that the Vecchia approximation maintains high accuracy for censoring levels up to 75%, with optimal performance when the conditioning set size is appropriately chosen. The comparative analysis across three Bayesian approaches revealed that our latent-free formulation not only reduces the computational burden but also exhibits faster MCMC convergence, making it particularly attractive for large-scale spatial applications. The case study of hydrocarbon contamination in Toul-
ouse Metropolis illustrates the practical value of this methodology for real-world environmental
29

assessment. The model successfully captured spatially heterogeneous relationships between contamination levels and environmental predictors, providing interpretable insights into the complex processes governing pollutant distribution. Importantly, the spatially varying coefficients revealed that the influence of pollution sources is not uniform across the study area, highlighting the importance of flexible modeling frameworks that can accommodate spatial non-stationarity. Our approach offers seve-
ral advantages for practitioners: (1) it scales efficiently to moderately large datasets with multiple covariates, (2) it naturally handles censored observations without introducing additional latent variables, (3) it provides full uncertainty quantification through Bayesian inference, and (4) it maintains model interpretability through spatially explicit coefficient estimates. These features make the methodology particularly wellsuited for environmental risk assessment, where both statistical rig-
or and computational feasibility are essential. Future research directions include extending the framework to multivariate contamination modeling, incorporating temporal dynamics for monitoring data, and developing adaptive sampling strategies guided by predictive uncertainty maps. Additionally, investigating alternative spatial ordering schemes and conditioning strategies may further improve the approximation quality under extreme censoring scenarios. The proposed methodology establishes a founda-
tion for scalable Bayesian spatial analysis in settings where data limitations and computational constraints have traditionally hindered the application of flexible modeling approaches.
Acknowledgements: We acknowledge financial funding by ANR-HOUSES (grant number: ANR-22-CE56-0006).
References
Allik, B., Miller, C., Piovoso, M.J., Zurakowski, R., 2015. The tobit kalman filter: An estimator for censored measurements. IEEE Transactions on Control Systems Technology 24, 365–371.
Amemiya, T., 1984. Tobit models: A survey. Journal of econometrics 24, 3–61.
Banerjee, S., Carlin, B.P., Gelfand, A.E., 2003. Hierarchical modeling and analysis for spatial data. Chapman and Hall/CRC.
30

Basson, M., Louw, T.M., Smith, T.R., 2023. Variational tobit gaussian process regression. Statistics and Computing 33, 64.
Bewick, V., Cheek, L., Ball, J., 2004. Statistics review 12: survival analysis. Critical care 8, 1–6.
Comber, A., Harris, P., Brunsdon, C., 2024. Multiscale spatially varying coefficient modelling using a geographical gaussian process gam. International Journal of Geographical Information Science 38, 27–47.
Dambon, J.A., Sigrist, F., Furrer, R., 2021. Maximum likelihood estimation of spatially varying coefficient models for large data with an application to real estate price prediction. Spatial Statistics 41, 100470.
Datta, A., Banerjee, S., Finley, A.O., Gelfand, A.E., 2016. Hierarchical nearest-neighbor gaussian process models for large geostatistical datasets. Journal of the American Statistical Association 111, 800–812.
De Fouquet, C., 2006. La modélisation géostatistique des milieux anthropisés. Ph.D. thesis. Université Pierre et Marie Curie-Paris VI.
Dempster, A.P., Laird, N.M., Rubin, D.B., 1977. Maximum likelihood from incomplete data via the em algorithm. Journal of the royal statistical society: series B (methodological) 39, 1–22.
European Environment Agency, 2024. Soil pollution and health — european environment agency. URL: https://www.eea.europa.eu/publications/ zero-pollution/health/soil-pollution. accessed: 2025-04-17.
Finley, A.O., 2011. Comparing spatially-varying coefficients models for analysis of ecological data with non-stationary and anisotropic residual dependence. Methods in ecology and evolution 2, 143–154.
Finley, A.O., Banerjee, S., 2020. Bayesian spatially varying coefficient models in the spbayes r package. Environmental Modelling & Software 125, 104608.
Finley, A.O., Datta, A., Cook, B.D., Morton, D.C., Andersen, H.E., Banerjee, S., 2019. Efficient algorithms for bayesian nearest neighbor gaussian processes. Journal of Computational and Graphical Statistics 28, 401–414.
31

Fotheringham, A.S., Brunsdon, C., Charlton, M., 2009. Geographically weighted regression. The Sage handbook of spatial analysis 1, 243–254.
Froger, C., Saby, N.P., Jolivet, C.C., Boulonne, L., Caria, G., Freulon, X., de Fouquet, C., Roussel, H., Marot, F., Bispo, A., 2021. Spatial variations, origins, and risk assessments of polycyclic aromatic hydrocarbons in french soils. Soil 7, 161–178.
Gelfand, A.E., Kim, H.J., Sirmans, C., Banerjee, S., 2003. Spatial modeling with spatially varying coefficient processes. Journal of the American Statistical Association 98, 387–396.
Genz, A., 1992. Numerical computation of multivariate normal probabilities. Journal of Computational and Graphical Statistics 1, 141–149. URL: http: //www.jstor.org/stable/1390838.
Greene, W.H., 2005. Censored data and truncated distributions. Available at SSRN 825845 .
Guinness, J., 2018. Permutation and grouping methods for sharpening gaussian process approximations. Technometrics 60, 415–429.
Heckman, J.J., 1979. Sample selection bias as a specification error. Econometrica: Journal of the econometric society , 153–161.
Katzfuss, M., Guinness, J., 2021. A general framework for vecchia approximations of gaussian processes .
Katzfuss, M., Guinness, J., Gong, W., Zilber, D., 2020. Vecchia approximations of gaussian-process predictions. Journal of Agricultural, Biological and Environmental Statistics 25, 383–414.
Lee, J.Y., Cheon, J.Y., Lee, K.K., Lee, S.Y., Lee, M.H., 2001. Factors affecting the distribution of hydrocarbon contaminants and hydrogeochemical parameters in a shallow sand aquifer. Journal of contaminant Hydrology 50, 139–158.
Lei, M., Labbe, A., Sun, L., 2024. Scalable spatiotemporally varying coefficient modeling with bayesian kernelized tensor regression. Bayesian Analysis 1, 1–29.
32

Liu, J.S., Wong, W.H., Kong, A., 1994. Covariance structure of the gibbs sampler with applications to the comparisons of estimators and augmentation schemes. Biometrika , 27–40.
Mekonnen, B.A., Aragaw, T.A., Genet, M.B., 2024. Bioremediation of petroleum hydrocarbon contaminated soil: a review on principles, degradation mechanisms, and advancements. Frontiers in Environmental Science 12, 1354422.
Meng, F., Wang, J., Chen, Z., Qiao, F., Yang, D., 2023. Shaping the concentration of petroleum hydrocarbon pollution in soil: A machine learning and resistivity-based prediction method. Journal of Environmental Management 345, 118817.
Mu, J., Wang, G., Wang, L., 2018. Estimation and inference in spatially varying coefficient models. Environmetrics 29, e2485.
Münzel, T., Hahad, O., Lelieveld, J., Aschner, M., Nieuwenhuijsen, M.J., Landrigan, P.J., Daiber, A., 2025. Soil and water pollution and cardiovascular disease. Nature Reviews Cardiology 22, 71–89.
Murakami, D., Griffith, D.A., 2019. Spatially varying coefficient modeling for large datasets: Eliminating n from spatial regressions. Spatial Statistics 30, 39–64. URL: https://www.sciencedirect.com/ science/article/pii/S2211675318301416, doi:https://doi.org/10. 1016/j.spasta.2019.02.003.
Powell, J.L., 1986. Censored regression quantiles. Journal of econometrics 32, 143–155.
Robert, C.P., Casella, G., Casella, G., 1999. Monte Carlo statistical methods. volume 2. Springer.
Shu, A., Yang, Z., Cui, Q., Liu, Z., Liu, S., Zhang, M., Sun, H., Shang, J., Tian, H., Xiao, Y., et al., 2024. Spatial variations and vertical migration potentials of petroleum hydrocarbons with varying chain lengths in soils of different depths: Roles of solid and dissolved organic matters and soil texture. Science of The Total Environment 955, 176984.
Stan Development Team, 2024. Stan modeling language users guide and reference manual, version 2.36.0. URL: https://mc-stan.org.
33

Terza, J.V., 1985. A tobit-type estimator for the censored poisson regression model. Economics Letters 18, 361–365.
Vecchia, A.V., 1988. Estimation and model identification for continuous spatial processes. Journal of the Royal Statistical Society: Series B (Methodological) 50, 297–312.
Venkatraman, G., Giribabu, N., Mohan, P.S., Muttiah, B., Govindarajan, V.K., Alagiri, M., Rahman, P.S.A., Karsani, S.A., 2024. Environmental impact and human health effects of polycyclic aromatic hydrocarbons and remedial strategies: A detailed review. Chemosphere 351, 141227.
Wei, S.X., 1999. A bayesian approach to dynamic tobit models. Econometric Reviews 18, 417–439.
34

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:55.049Z
- **Text Length:** 59074 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 34 of 34
