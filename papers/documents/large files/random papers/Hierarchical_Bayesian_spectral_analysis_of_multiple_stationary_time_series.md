# PDF Document: Lee et al. - 2025 - Hierarchical Bayesian spectral analysis of multiple stationary time series.pdf

**File Path:** Lee et al. - 2025 - Hierarchical Bayesian spectral analysis of multiple stationary time series.pdf

**Processed Date:** 2026-02-10T18:17:01.537Z

**File Size:** 953.14 KB

**Total Pages:** 32

**Extracted Pages:** 32

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3366

**Title:** Hierarchical Bayesian spectral analysis of multiple stationary time series

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Hierarchical Bayesian spectral analysis of multiple
stationary time series
Rebecca Lee1, Alexander Coulter1, Greg J. Siegle2,
Scott A. Bruce1,∗, and Anirban Bhattacharya1
∗sabruce@tamu.edu
1Department of Statistics, Texas A&M University, College Station, Texas, U.S.A.
2Department of Psychiatry, University of Pittsburgh, Pittsburgh, Pennsylvania, U.S.A.
November 25, 2025
Abstract
The power spectrum of biomedical time series provides important indirect measurements
of physiological processes underlying health and biological functions. However, simultaneously
characterizing power spectra for multiple time series remains challenging due to extra spectral
variability and varying time series lengths. We propose a method for hierarchical Bayesian
estimation of stationary time series (HBEST) that provides an interpretable framework for
efficiently modeling multiple power spectra. HBEST models log power spectra using a truncated
cosine basis expansion with a novel global-local coefficient decomposition, enabling simultaneous
estimation of population-level and individual-level power spectra and accommodating time series
of varying lengths. The fully Bayesian framework provides shrinkage priors for regularized
estimation and efficient information sharing. Simulations demonstrate HBEST’s advantages
over competing methods in computational efficiency and estimation accuracy. An application
to heart rate variability time series demonstrates HBEST’s ability to accurately characterize
power spectra and capture associations with traditional cardiovascular risk factors.
Key words: Biomedical time series; Heart rate variability; Hierarchical Bayesian modeling;
Multiple time series; Spectral analysis.
1
arXiv:2511.19406v1 [stat.ME] 24 Nov 2025

1 Introduction
The frequency domain characteristics of biomedical time-series data, such as heart rate variability,
electroencephalography, and functional magnetic resonance imaging, provide important indirect
measurements of underlying physiological processes associated with health and functioning (Hall
et al., 2004; Knyazev, 2012; Yuen et al., 2019). To better understand health and functioning on
a broader scale, biomedical studies typically collect and analyze time series data from multiple
participants representing a specific population of interest. This allows researchers to develop both
population-level summary measures associated with health and functioning, as well as variability
in summary measures within the population. Frequency domain properties of time series data can
be characterized through the power spectrum, which has a direct physical interpretation (Priestley,
1981) and is a natural starting point for formulating models (Diggle and Al Wasel, 1997).
A prime example comes from our motivating longitudinal study on cardiovascular disease risk
factors in a diverse population of older adults (Zhang et al., 2018; Chen et al., 2015). The Multi
Ethnic Study of Atherosclerosis (MESA) recruited a diverse population-based sample of participants
age 45 and older to study subclinical cardiovascular disease progression and predictive markers as
sociated with disease progression (Bild et al., 2002). A subset of 2,060 participants also completed
a single-night unattended in-home sleep study in which heart rate variability (HRV), among other
signals, was collected to better understand the association between sleep characteristics and cardio
vascular risk factors. HRV is a measure of the elapsed time between consecutive heart beats, and its
power spectrum provides objective measures of stress and arousal (Hall et al., 2004). Lower HRV
high-frequency power is also associated with an increased risk of cardiovascular disease (Hillebrand
et al., 2013).
Figure 1 displays HRV time series and estimates of the power spectrum during the first onset of
non-rapid eye movement (NREM) sleep in three MESA participants. Our analysis seeks to provide
accurate estimation of both population-level and individual-level power spectra by sharing informa
tion about similarities in the shape of the power spectra across time series, improving accuracy for
shorter time series in particular, since they do not carry as much independent information about the
underlying power spectra. Additionally, we seek to provide appropriate uncertainty quantification
for estimates of the power spectra by properly characterizing variability within the population.
2

0 50 100 150 200 250
−0.05 0.00 0.05 0.10
nr = 268
ω 0 100 200 300 400
−0.08 −0.06 −0.04 −0.02 0.00 0.02 0.04 0.06
nr = 478
ω 0 200 400 600 800
−0.02 −0.01 0.00 0.01 0.02 0.03
nr = 899
ω (a)
0.0 0.5 1.0 1.5 2.0 2.5 3.0
−16 −14 −12 −10 −8 −6 −4
nr = 268
g(ω)
ω
log−perio HBEST Est. HBEST Global
0.0 0.5 1.0 1.5 2.0 2.5 3.0
−16 −14 −12 −10 −8 −6 −4
nr = 478
g(ω)
ω
log−perio HBEST Est. HBEST Global
0.0 0.5 1.0 1.5 2.0 2.5 3.0
−16 −14 −12 −10 −8 −6 −4
nr = 899
g(ω)
ω
log−perio HBEST Est. HBEST Global
(b)
Figure 1: (a) Standardized heart rate variability (HRV) time series with 1 Hz sampling rate during the first onset of non-rapid eye movement (NREM) sleep during a single night, unattended, in home sleep study for three participants from the MESA study. These participants represent the 25th, 50th, and 75th percentiles (left to right) of time series length. (b) Estimates of the HRV log power spectrum (g(ω)) are provided for each time series including the log-periodogram (blue), population-level esti-
mate of the log power spectrum from the proposed HBEST method (orange), and individual-level estimate of the log power spectrum from the proposed HBEST method (red).
Estimation of the power spectrum for a single time series has been well studied; see Shumway
and Stoffer (2017) for an overview of various parametric and nonparametric approaches. In par
ticular, basis expansion methods have been widely used for nonparametric estimation of the power
spectrum, using various bases including Bernstein polynomials (Choudhuri et al., 2004), second
order autoregressive kernels (Granados-Garcia et al., 2022), intrinsic mode functions (Huang et al.,
3

1998), and cosine functions (Rosen et al., 2009, 2012).
However, accurate estimation of power spectra from multiple time series is more challenging.
Power spectra typically exhibit similarities across the multiple time series, but they also carry
extra spectral variability and cannot be assumed to share a single common power spectrum (Diggle
and Al Wasel, 1997; Iannaccone and Coles, 2001; Krafty et al., 2011). Failing to account for
this extra variability will lead to poor uncertainty quantification at the population level, biased
estimation at the individual level, and overall faulty inference. On the other hand, modeling each
power spectrum independently, thus ignoring potential similarities in their shapes, precludes the
sharing of information and results in less efficient estimation (Hart et al., 2022). Second, time
series in practice often have different lengths, leading to different frequency grids over which the
estimates of the power spectrum are typically computed. This makes it difficult to share information
when estimating individual power spectra and to estimate the population-average power spectrum
(Caiado et al., 2009).
Although several recent methods have been developed, there remain important challenges and
opportunities for improvement. Cadonna et al. (2019) proposes a Gaussian mixture modeling
approach to approximate the likelihood for a collection of power spectra, which allows sharing of
information to improve individual estimates. However, this method does not model the population
level power spectra explicitly. Hart et al. (2022) proposes a method using a Bernstein polynomial
basis representation with an additional grouping structure to inform individual estimates of the
power spectra. However, this approach doesn’t allow for variation in the power spectra within
groups.
The proposed method provides an interpretable nonparametric framework for modeling power
spectra of multiple time series drawn from a population of interest. Our Hierarchical Bayesian
Estimation of Stationary Time series (HBEST) approach allows for sharing of information across
replicates and provides direct estimates of both population-level and individual-level power spectra
with appropriate uncertainty quantification for both. Using a Demmler-Reinsch basis expansion,
HBEST represents the log power spectra as a linear combination of cosine basis functions and further
decomposes the coefficients for each basis function as the sum of two parts: a population-level
component and an individual-level component for improved interpretability. Priors are imposed on
model parameters in a fully Bayesian hierarchical model that encourages regularized estimation of
4

power spectra for consistent estimation, and sharing of information across power spectra regarding
the shape of the spectra when appropriate for improved estimation accuracy.
The proposed method makes important contributions to the literature on spectral analysis of
multiple time series in three important ways. First, by explicitly modeling both population- and
individual-level power spectra, the model offers improved interpretability and estimation at both
levels. Second, the model allows for extra spectral variability commonly encountered in practice
(Diggle and Al Wasel, 1997), which is crucial for accurate uncertainty quantification. Lastly,
the truncated cosine basis representation for the log power spectra used in this work provides a
scalable and computationally efficient alternative to other basis representations (e.g. Bernstein
polynomials), which can require significantly more basis functions to achieve comparable accuracy
(Farouki, 2012), leading to increased computational complexity and slower run times.
Notation. We denote scalars as a, A, α ∈ R; vectors as d, βββ ∈ Rp; and matrices as B, ΣΣΣ ∈ Rn×p.
For consistency, we exclusively reserve l to index time series l = 1, . . . , L, and exclusively reserve b
to index Demmler-Reinsch basis functions and coefficients b = 1, . . . , B. We similarly use condensed
notation {db} ≡ {db}B
b=1, {ζl} ≡ {ζl}L
l=1, and {βl,b} ≡ {βl,b}L,B
l=1,b=1 to refer to collections of values
aggregating over the given index sets. We denote the indicator function 1{·} – that is, 1{true} = 1,
and zero otherwise – and we denote the imaginary unit iii.
2 Modeling Framework
2.1 Background
Consider a collection of L zero-mean stationary time series, {Xl,t}. The frequency domain char
acteristics of each series can be obtained from its spectral representation (Crame ́r, 1942; Priestley,
1981), Xl,t = R 2π
0 Al(ω) exp{iiiωt}dZl(ω), where Al(ω) is a complex-valued function of frequency
ω that is 2π-periodic and Hermitian Al(2π − ω) = Al(ω), and dZl(ω) is a zero-mean orthogonal
process with unit variance. Provided the autocovariance function of Xl,t is absolutely summable,
the power spectrum of the series is defined as fl(ω) = |Al(ω)|2 and can be interpreted as the con
tribution to the variance of Xl,t from oscillations at frequency ω, and is the primary tool used to
describe the frequency-domain properties of stationary time series.
Given a realization of the lth time series, xl,1, . . . , xlnl, the periodogram at frequency ω is Yl(ω) =
5

1
nl |Pnl
t=1 xl,t exp{−iiiωt}|2 . While the periodogram is an unbiased estimator of the true spectrum
and periodogram ordinates are asymptotically (nl → ∞) uncorrelated, the asymptotic variance
does not tend to zero. As such, smoothed estimators that share information across frequencies
are needed. Among many possible choices, we adopt the Bayesian penalized linear spline model
(Wahba, 1980; Ruppert et al., 2003) as a flexible modeling paradigm that can be seamlessly extended
to more complex settings like ours. In previous work, linear splines have been found to be more
accurate in capturing changes in the power spectra compared to higher order splines (Rosen et al.,
2012).
2.2 HBEST Model
With this background, we now lay down our proposed hierarchical model HBEST. Recall we have
a collection of L many zero-mean stationary time series, {Xl,t}, with realization {xl,t}nl
t=1 from the
lth series/replicate. We allow the lengths of the replicates nl to vary across l in the subsequent
development. Let gl(ω) := log fl(ω) denote the log-spectrum for the lth replicate. As in Rosen
et al. (2012), we consider expanding each gl over a (truncated) Demmler-Reinsch basis expansion
(Schwarz and Krivobokova, 2016),
gl(ω) = αl +
B
X
b=1
βl,bψb(ω), ψb(ω) := √2 cos(ωb), ω ∈ [0, 2π]. (1)
Here, αl is a replicate-specific intercept; βββl := (βl,1 · · · βl,B)⊤ is a replicate-specific vector of
basis coefficients, where B is the number of cosine basis functions employed (uniformly across all
replicates); and ψb( · ) denotes the bth cosine basis function. In light of (1), the task of hierarchically
modeling the gl’s boils down to the same for (αl, βββl) across l. To that end, we consider an additive
ANOVA-type global-local decomposition of the coefficients
αl = αglob + αloc
l , βl,b = βglob
b + βloc
l,b . (2)
The decomposition (2) expresses βl,b, the bth basis coefficient for the lth replicate, as the sum
of a global basis-specific term βglob
b and a local replicate plus basis specific term βloc
l,b . A similar
decomposition is employed for the replicate-specific intercept αl. Overall, (2) translates into an
6

additive global-local decomposition of the replicate-specific log-spectra gl as
gl(ω) = gglob(ω) + gloc
l (ω), ω ∈ [0, 2π], (3)
where gglob(ω) = αglob + PB
b=1 βglob
b ψb(ω) and gloc
l (ω) = αloc
l + PB
b=1 βloc
l,b ψb(ω). This amounts to
a multiplicative decomposition fl(ω) = f glob(ω) f loc
l (ω) for the untransformed spectra.
We now discuss priors on the constituent terms in (2). We assume independent Gaussian priors
αglob ∼ N (0, σ2α) and αloc
l
ii∼d N (0, δ2). Here, σ2α is typically set to a large value (e.g., 100) to
impose a diffuse prior on the global intercept αglob, while δ2 ≪ 1 is set to a small value to make
the priors on the local intercept terms αloc
l ’s more tightly concentrated around zero. Next, given
a global scale parameter τ > 0, basis-specific scale parameters db > 0, and replicate-specific scale
parameters ξl ∈ (1, ∞), we propose independent zero-mean conditional Gaussian priors for {βglob
b}
and {βloc
l,b } with a multiplicative decomposition of their respective variances
βglob
b | τ, db
in∼d N (0, τ 2db), βloc
l,b | τ, db, ζl
in∼d N 0, τ 2db(ζ2
l − 1) . (4)
In (4), {db} is a deterministic decreasing sequence that encourages higher degree of shrinkage for
higher-frequency basis functions; following Li and Krafty (2019) we set db := (4πb2)−1; when
modeling a single stationary time series, this choice of db leads to a τ 2χ2
B distribution on the
squared L2 norm of the log-spectra. The global scale parameter τ controls overall smoothness of
the spectra while the replicate specific local parameters ζl allow for additional variability at the
individual spectra level. We endow τ with a standard Half-t prior (Gelman, 2006; Polson and Scott,
2012) with degrees of freedom ντ , and place independent Half-t priors (with degrees of freedom νζ)
restricted to (1, ∞) on the ζl’s. A salient feature of our prior construction is that it induces a similar
prior on gglob as Rosen et al. (2012, Section 2.2), while allowing replicate-specific departures via gloc
l
that are simultaneously a priori strongly shrunk towards zero and possess heavy tails (Carvalho
et al., 2010). This adaptive shrinkage allows for borrowing of information across the replicates when
warranted. This completes the HBEST specification.
It follows from (4) that under HBEST, βl,b | τ, db, ζl ∼ N (0, τ 2dbζ2
l ) for any fixed l, b. The
multiplicative decomposition of the variance therefore provides a bi-directional shrinkage on the
7

matrix of basis coefficients βl,b which is exchangeable across l and more aggressively shrunk with
increasing b. To further investigate this, we study the row- and column-wise shrinkage profiles
induced by HBEST; see Appendix A for detailed derivations. We denote “row” vectors βββl• :=
(βl,1 · · · βl,b)⊤ and “column” vectors βββ•b := (β1,b . . . βL,b)⊤. The shared dependence on βglob
b
induces dependence between βl,b and βl′,b (l ̸= l′) given the hyperparameters, leading to a non
diagonal covariance matrix of βββ•b. Specifically, one obtains
βββl• | τ, ζl, {db} ∼ NB 000, τ 2ζ2
lD ,
βββ•b | τ, {ζl}, db ∼ NL 000, τ 2db(diag(ζ2
l − 1) + 111111⊤) ,
where D := diag(d1 · · · dB) and 111 ≡ 111L is an L-dimensional vector of ones. It follows the matrix
of coefficients B ≡ (βl,b) ∈ RL×B conditionally follows a matrix normal distribution
B | τ, {ζl}, {db} ∼ MN L,B 000, diag(ζ2
l − 1) + 11⊤, τ 2D .
2.3 Posterior Computation
For each l and jl = 1, . . . , ml := ⌊ nl
2 ⌋, let ω⋆
jl := 2πjl/nl denote the fundamental frequencies, and
Yjl ≡ Yl(ω⋆
jl) denote the corresponding periodogram ordinates. We assume the Yjl’s are condition
ally independent across l. Moreover, for each l, we use Whittle’s likelihood (Whittle, 1953) approx
imation to model the Yjl’s (across j) as conditionally independent exponential random variables,
each with mean fl(ω⋆
jl). The ensuing product Whittle likelihood is combined with the proposed
hierarchical prior on the model parameters. We sample from the resulting posterior distribution via
a highly efficient Metropolis-within-Gibbs sampler, which we elaborate in Appendix B; specific al
gorithms for steps of the sampler are provided in Appendix C. Briefly, we separately block-update
{βglob
b } and {βloc
l,b } using independence Metropolis proposals based on Gaussian approximations
to their respective (joint) conditional posteriors, which are conveniently derived exploiting log
concavity of the Whittle likelihood. We update global scale parameter τ using a Griddy Gibbs
sampler on a grid [τmin, τmax], and similarly update local scale parameters {ζl} on a common grid
[ζmin, ζmax].
8

3 Simulations
To assess finite-sample performance, we compare HBEST with the method of Hart et al. (2022),
herein referred to as the “Hart model”. The Hart model allocates time series to groups and
estimates shared within-group spectral densities using Bernstein polynomials in a fully Bayesian
model. Posterior inference on the number of groups and group membership is handled with a nested
Dirichlet process. The available Hart model implementation requires standardized (mean zero and
unit variance) time series of equal length. While HBEST can natively handle multiple time series
of different lengths without standardization, we adopt these constraints for a fair comparison.
We simulated S = 30 sets of data from two different settings. Each set of data contained L = 15
conditionally independent time series of equal length, nl ≡ n = 1000 for all l, standardized to have
zero mean and unit variance. This n was chosen since it is close to the average length of the HRV
time series from the MESA sleep study. We consider 5000 MCMC iterations with a burn-in period
of 500, and collect I = 4500 posterior samples post burn-in. For HBEST, we use B = 15 basis
functions. Lastly, we chose the following values for hyperparameters in the HBEST model: ντ = 2;
σ2α = 100; δ2 = 0.1; νζ = 5; ζmin = 1.001; ζmax = 15; τmin = 0.001; τmax = 100. The Hart model
adaptively determines the number of Bernstein polynomials used to represent approximate power
spectra. We set the maximum number of Bernstein polynomials to be 30.
Let K ≫ 0 and K := { a
K−1 : a = 0, 1, . . . , K − 1}, and let ωk = πk for k ∈ K. To measure
estimation accuracy, we compute the trimmed Approximate Expected Posterior Loss (AEPL) for
each data set as
AEP L = {LI|J |}−1
L
X
l=1
I
X
i=1
X
j∈J
[gˆi
l(ωj) − gl(ωj)]2, (5)
where J := K ∩ [0.05, 0.95) has cardinality |J |, gˆi
l(ω) is the estimate of the log power spectrum for
the lth time series from the ith iteration of the sampler, and gl(ω) is the true log power spectrum for
the lth time series. We trimmed the index set K to J for a fairer comparison since the estimation
accuracy using the Bernstein polynomial basis representation for frequencies near 0 and π is quite
unstable. We use K = 1000.
9

3.1 Conditional MA(4) with Multiple Levels of Variation
The first is a conditional MA(4) model used in Granados-Garcia et al. (2022) of the form Xl,t =
θl,1εl,t−1 +θl,2εl,t−2 +θl,3εl,t−3 +θl,4εl,t−4 +εl,t, where εl,t is a white noise process with unit variance.
For the first setting, we consider the case where all time series share a common underlying power
spectra such that (θl,1, θl,2, θl,3, θl,4) ≡ (θ1, θ2, θ3, θ4) = (−0.3, −0.6, −0.3, 0.6) for all L time series.
For the second and third setting, we add variation in the spectra among the time series by randomly
sampling the first coefficient θl,1 ∼ N (−0.3, 0.09α2), with α = 0.15 for the moderate variation
setting and α = 0.3 for the high variation setting. This allows for a more detailed comparison of
performance under different levels of variability within the population.
3.2 Conditional Mixture of AR(2) Processes
The second setting generates time series as conditional mixtures of AR(2) processes that allow
for moderate variation across replicates. Following Granados-Garcia et al. (2022), we generate
time series as the sum of two AR(2) processes Xl,t = Z1l,t + Z2l,t where Zil,t = φil,1Zil,t−1 +
φil,2Zil,t−2 + εil,t, i = 1, 2, and εil,t is a white noise process with unit variance. The coefficients
φil,1 = 2 cos(γil) exp{−κil} and φil,2 = − exp{−2κil} are parameterized with respect to the frequen
cies representing the localized peaks in the power spectrum (γil) and the bandwidths representing
the spreads (κil). We generated peaks and bandwidths for the two AR(2) processes for each time
series as follows: γ1l ∼ U (0.2, 0.23), κ1l ∼ U (0.1, 0.2), γ2l ∼ U (π/5−0.1, π/5+0.1), κ2l = 0.15. See
Figure 4 for the true population average log power spectrum. This particular setting was chosen
since it mimics the shape and variability in the HRV log spectra seen among MESA participants.
3.3 Results
Figure 2 shows examples of posterior mean estimators of the power spectrum for a single replicate
for the three levels of variation from the conditional MA(4) setting. Figure 3 shows the box-plot
of the AEPL ratio across datasets comparing the two methods for each setting. Across all levels
of variability, HBEST outperforms the Hart model as the log AEPL ratio exceeds 0 for nearly all
simulated datasets. We see that as variability within the population increases, the performance gap
between HBEST and the Hart model shrinks. This is expected since the Hart model can account
10

for some of the variability by grouping series with similar power spectra for improved estimation.
0.0 0.5 1.0 1.5 2.0 2.5 3.0
−4
−3
−2
−1
0
1
True log−SDF: MA(4) No Variation
ω
g(ω)
0.0 0.5 1.0 1.5 2.0 2.5 3.0
−4
−3
−2
−1
0
1
HBEST vs. Hart : MA(4) No Variation
ω
g(ω)
True HBEST Hart
(a)
0.0 0.5 1.0 1.5 2.0 2.5 3.0
−4
−3
−2
−1
0
1
True log−SDF: MA(4) Moderate Variation
ω
g(ω)
0.0 0.5 1.0 1.5 2.0 2.5 3.0
−4
−3
−2
−1
0
1
HBEST vs. Hart : MA(4) Moderate Variation
ω
g(ω)
True HBEST Hart
(b)
0.0 0.5 1.0 1.5 2.0 2.5 3.0
−4
−3
−2
−1
0
1
True log−SDF: MA(4) High Variation
ω
g(ω)
0.0 0.5 1.0 1.5 2.0 2.5 3.0
−4
−3
−2
−1
0
1
HBEST vs. Hart : MA(4) High Variation
ω
g(ω)
True HBEST Hart
(c)
Figure 2: True individual level log power spectra for the three conditional MA(4) settings (left) and comparison of estimates for an individual log power spectrum using the proposed HBEST method and the method from Hart et al. (2022) (right). Each row corresponds to a different level of variation in the true log power spectra: (a) no variation, (b) moderate variation, and (c) high variation.
Figure 4 shows examples of posterior mean estimates for the power spectrum of a single replicate
for the conditional AR(2) mixture setting, as well as AEPL ratios. HBEST better captures the
peaks in the log power spectrum leading to significantly improved estimation accuracy based on
the AEPL ratios across datasets.
11

−1
0
1
2
No Variation Moderate Variation High Variation
log(AEPL Ratio)
AEPL Ratio: Hart/HBEST
AEPL Hart et al. [2022] Comparison
Figure 3: Distribution of log ratios of the Approximate Expected Posterior Losses (AEPLs) (5) across simulated datasets for HBEST and Hart et al. (2022) for the conditional MA(4) settings. Median and mean AEPLs for each variation setting for each model (HBEST, Hart) with lowest AEPL bolded: No variation: median: (0.01
0.01
0.01, 0.03); mean: (0.01
0.01
0.01, 0.03). Moderate variation: median: (0.01
0.01
0.01, 0.04); mean: (0.02
0.02
0.02, 0.07). High variation: median: (0.02
0.02
0.02, 0.04); mean: (0.03
0.03
0.03, 0.05)
0.0 0.5 1.0 1.5 2.0 2.5 3.0
−4
−2
0
2
HBEST vs. Hart : Mixture AR(2)
ω
g(ω)
True HBEST Hart
0
1
2
3
Mixture AR(2)
log(AEPL Ratio)
AEPL Ratio: Hart/HBEST
AEPL Hart et al. [2002] Comparison
Figure 4: (left) Comparison of estimates for an individual log power spectrum using the proposed HBEST method and the method from Hart et al. (2022). (right) Distribution of log ratios of the Approximate Expected Posterior Losses (AEPLs) (5) across simulated datasets for HBEST and Hart et al. (2022) for the conditional AR(2) mixture setting. Median and mean AEPLs for each model (HBEST, Hart) with lowest AEPL bolded: median: (0.03
0.03
0.03, 0.08); mean: (0.03
0.03
0.03, 0.12).
In both cases, HBEST is significantly more computationally efficient than the Hart model with
mean effective sample sizes per second of 0.836-0.909 for HBEST and 0.302-0.844 for the Hart
12

model across all settings for estimating the population level log power spectrum.
3.4 Comparison with Common and Independent Methods
Next, we compare our model against the two extreme competitors: the common method and the
independent method. We simulated two levels of variability in gl across replicates l to investigate
the performance of HBEST under scenarios favorable to the common method (low variability) or
the independent method (high variability).
3.5 Hierarchical Data with Two Levels of Variation
In the hierarchical data setting, separately for each S = 30 data set, we generate L = 15 true
α∗
l = α∗glob + α∗loc
l , β∗
l,b = β∗glob
b + β∗loc
l,b coefficients and then generate Gaussian time series {Xl,t}
with autocovariance functions given by γl(h) = R 2π
0 exp{α∗
l +PB
b=1 ψb(ω)β∗
l,b +iiihω}dω. Specifically,
we simulate the global scale parameter, τ ∗ from U (3, 8), the local scale parameter ζ∗
l independently
from N (x; 0, 1)1(1 ≤ x ≤ 1.1), the global spline coefficients α∗glob from N (0, 50/3), and β∗glob
independently from N (0, τ ∗2db). We induce different levels of variation in the underlying spectral
densities by setting scaling factor κ > 0 and then simulating local spline coefficients α∗loc
l indepen
dently from N (0, κ · 0.005) and β∗loc
l,b independently from N 0, κτ ∗2db(ζ∗2
l − 1) . For the moderate
variation setting, we set κ = 0.1, and for the high variation setting we set κ = 1. Finally, we
generate the time series from N (000nl, ΓΓΓl), where ΓΓΓl is the (nl × nl) Toeplitz autocovariance matrix
formed from γl(h), for h = 0, . . . , nl − 1. Figure 5 shows examples of the generated true log power
spectra from each setting.
To showcase that these models can innately handle differing length time series, we set nl = 600
for 80% of the time series and nl = 1200 for the remaining 20%. These lengths were chosen as
they were close to the 1st and 3rd quartiles of the lengths from a sample of patients’ first instance
of non REM stage 3 sleep from the MESA data set. In the moderate variation setting, we set the
small time series lengths to nl = 300. We do this to explore how the HBEST model utilizes its
inherent sharing of information under a setting where the common should perform well and the
independent should suffer from smaller length time series.
13

0.0 0.5 1.0 1.5 2.0 2.5 3.0
−4 −2 0 2 4
Generated log−SDF: Moderate Variation Hierarchical Data Setting
ω
g(ω)
0.0 0.5 1.0 1.5 2.0 2.5 3.0
−4
−2
0
2
4
Generated log−SDF: High Variation Hierarchical Data Setting
ω
g(ω)
Figure 5: True individual level log power spectra for the two hierarchical data generation settings.
3.6 Results
Figure 6 shows the estimated individual log power spectra using the HBEST method and the
competing methods for both settings. Figure 7 visualizes the log of the non-trimmed AEPL ra
tio calculations as defined in Equation 5 and illustrates the competitiveness of the HBEST model
against the Common and Independent methods. When the time series contain less variation across
replicates, HBEST matches performance with the Common method and outperforms the Indepen
dent method. Likewise, when there is larger amounts of variation across the replicates, the HBEST
model easily outperforms the Common method and modestly outperforms the Independent method.
In both the moderate and high variation settings, HBEST had the lowest mean and median AEPL
across all methods.
4 Heart Rate Variability and Cardiovascular Risk
Returning to the motivating longitudinal study on cardiovascular disease (CVD) risk factors in a
diverse population of older adults (Zhang et al., 2018; Chen et al., 2015), we now seek to characterize
nocturnal HRV power spectra within this population and investigate associations with traditional
cardiovascular disease risk factors, age and smoking history. Our analysis considers 1,151 MESA
participants with a first onset of non-rapid eye movement sleep lasting at least 200 seconds and
with relevant covariate information available. Since lower HRV high-frequency power is associated
with an increased risk of cardiovascular disease (Hillebrand et al., 2013), we focus our analysis on
higher frequencies (0.15-0.4 Hz) (Malik et al., 1996). High frequency power reflects parasympathetic
14

0.0 1.0 2.0 3.0
−4
−3
−2
−1
0
1
ω
g(ω)
Time Series Length:300 Independent Comparison (Mod.)
0.0 1.0 2.0 3.0
−4
−3
−2
−1
0
1
ω
Time Series Length:1200 Independent Comparison (Mod.)
True HBEST Ind.
(a)
0.0 1.0 2.0 3.0
−4
−3
−2
−1
0
1
ω
g(ω)
Time Series Length:600 Common Comparison (High)
0.0 1.0 2.0 3.0
−4
−3
−2
−1
0
1
High Variation
ω
Time Series Length:1200 Common Comparison (High)
True HBEST Common
(b)
Figure 6: (a) Comparison of estimates for an individual log power spectra spectrum proposed HBEST method and the Independent method for the moderate variation hierarchical data generation setting. (b) Comparison of estimates for an individual log power spectrum proposed HBEST method and the Common method for the high variation hierarchical data generation setting.
AEPL Ratio Common/HBEST Independent/HBEST
−2
0
2
4
log(AEPL Ratio)
Moderate Variation
−2
0
2
4
log(AEPL Ratio)
High Variation
Figure 7: Hierarchical data setting: log of the AEPL ratio, where the AEPL is calculated with Equation 5. AEPLs for the median and mean for the moderate variation setting for each model (HBEST, Common, Independent) and lowest AEPL is bolded: median: (0.05
0.05
0.05, 0.06, 0.16); mean: (0.45
0.45
0.45, 0.48, 0.55). Statistics for the high variation setting: median: (0.06
0.06
0.06, 0.47, 0.08); mean: (0.39
0.39
0.39, 1.01 ,0.41).
nervous system activity responsible for bodily activities that occur while at rest, and its modulation
is inversely related to stress and arousal (Shaffer and Ginsberg, 2017). Figure 8 presents HBEST
estimates of subpopulation level log power spectra for 4 subgroups of MESA participants based on
smoking history (Smoked vs. Never Smoked) and age (< 70 vs. ≥ 70) and variability within these
subpopulations.
These views provide insight into the association between high frequency HRV power during
15

0.0 0.5 1.0 1.5 2.0 2.5 3.0
−10
−9
−8
−7
−6
−5
gglob(ω)
ω
< 70; Never Smoked < 70; Smoked ≥ 70; Never Smoked ≥ 70; Smoked
(a)
0.0 0.5 1.0 1.5 2.0 2.5 3.0
0.5
1.0
1.5
2.0
SD(gl
loc(ω))
ω
< 70; Never Smoked < 70; Smoked ≥ 70; Never Smoked ≥ 70; Smoked
(b)
Figure 8: (a) Posterior mean estimates of the subpopulation level log power spectra for 4 groups defined by smoking history (Never Smoked vs. Smoked) and age (<70 vs. ≥ 70). (b) Standard deviation of the local estimates of the log power spectra within each subpopulation across frequencies.
sleep and traditional risk factors for CVD. First, older adults tend to have lower high frequency
power reflecting their relatively higher CVD risk relative to their younger counterparts. Second,
younger smokers have less high frequency power than younger non-smokers, which aligns with
increased CVD risk associated with smoking. Lastly, older adults exhibit more variability in the
power spectra, especially among higher frequencies, which suggests that older adults exhibit more
variability in CVD risk levels compared to younger adults. Prior results from the scientific literature
have also found that variability in CVD risk levels increases with age (Tsai et al., 2020) thus aligning
with the findings in this analysis. Taken together, these findings using HBEST align with previous
studies (Hillebrand et al., 2013) suggesting that high frequency power in nocturnal HRV power
spectra may serve as an important predictive biomarker that is indicative of CVD risk.
Acknowledgments
Research reported in this publication was supported by the National Institute Of General Medical
Sciences (R01GM140476) and the National Science Foundation (CDS&E-MSS-2152950). The con
tent is solely the responsibility of the authors and does not necessarily represent the official views
of the National Institutes of Health or the National Science Foundation.
The Multi-Ethnic Study of Atherosclerosis (MESA) Sleep Ancillary study was funded by NIH
16

NHLBI Association of Sleep Disorders with Cardiovascular Health Across Ethnic Groups (RO1
HL098433). MESA is supported by NHLBI funded contracts HHSN268201500003I, N01-HC
95159, N01-HC-95160, N01-HC-95161, N01-HC-95162, N01-HC-95163, N01-HC-95164, N01-HC
95165, N01-HC-95166, N01-HC-95167, N01-HC-95168 and N01-HC-95169 from the National Heart,
Lung, and Blood Institute, and by cooperative agreements UL1-TR-000040, UL1-TR-001079, and
UL1-TR-001420 funded by NCATS. The National Sleep Research Resource was supported by the
National Heart, Lung, and Blood Institute (R24 HL114473, 75N92019R002).
17

References
Bild, D. E., Bluemke, D. A., Burke, G. L., Detrano, R., Roux, A. V. D., Folsom, A. R., Greenland,
P., Jr., D. R. J., Kronmal, R., Liu, K., Nelson, J. C., O’Leary, D., Saad, M. F., Shea, S., Szklo, M.,
and Tracy, R. P. (2002). Multi-ethnic study of atherosclerosis: Objectives and design. American
Journal of Epidemiology, 156(9):871–881.
Cadonna, A., Kottas, A., and Prado, R. (2019). Bayesian spectral modeling for multiple time
series. Journal of the American Statistical Association, 114(528):1838–1853.
Caiado, J., Crato, N., and Pen ̃a, D. (2009). Comparison of times series with unequal length in the
frequency domain. Communications in Statistics - Simulation and Computation, 38(10):1959
1970.
Carvalho, C. M., Polson, N. G., and Scott, J. G. (2010). The horseshoe estimator for sparse signals.
Biometrika, pages 465–480.
Chen, X., Wang, R., Zee, P., Lutsey, P. L., Javaheri, S., Alc ́antara, C., Jackson, C. L., Williams,
M. A., and Redline, S. (2015). Racial/ethnic differences in sleep disturbances: The multi-ethnic
study of atherosclerosis (MESA). SLEEP.
Choudhuri, N., Ghosal, S., and Roy, A. (2004). Bayesian estimation of the spectral density of a
time series. Journal of the American Statistical Association, 99(468):1050–1059.
Cram ́er, H. (1942). On harmonic analysis in certain function spaces. Arkiv f ̈or Matematik, As
tronomioch Fysik, 28B:1–7.
Diggle, P. J. and Al Wasel, I. (1997). Spectral analysis of replicated biomedical time series. Journal
of the Royal Statistical Society Series C: Applied Statistics, 46(1):31–71.
Farouki, R. T. (2012). The bernstein polynomial basis: A centennial retrospective. Computer Aided
Geometric Design, 29(6):379–419.
Gelman, A. (2006). Prior distributions for variance parameters in hierarchical models (comment
on article by browne and draper). Bayesian Analysis, 1(3):515–534.
18

Granados-Garcia, G., Fiecas, M., Babak, S., Fortin, N. J., and Ombao, H. (2022). Brain waves anal
ysis via a non-parametric Bayesian mixture of autoregressive kernels. Computational Statistics
& Data Analysis, 174:107409.
Hall, M., Vasko, R., Buysse, D., Ombao, H., Chen, Q., Cashmere, J., Kupfer, D., and Thayer, J.
(2004). Acute stress affects heart rate variability during sleep. Psychosomatic Medicine, 66:56–62.
Hart, B., Guindani, M., Malone, S., and Fiecas, M. (2022). A nonparametric Bayesian model for
estimating spectral densities of resting-state EEG twin data. Biometrics, 78(1):313–323.
Hillebrand, S., Gast, K. B., de Mutsert, R., Swenne, C. A., Jukema, J. W., Middeldorp, S.,
Rosendaal, F. R., and Dekkers, O. M. (2013). Heart rate variability and first cardiovascular
event in populations without known cardiovascular disease: meta-analysis and dose–response
meta-regression. EP Europace, 15(5):742–749.
Huang, N. E., Shen, Z., Long, S. R., Wu, M. C., Shih, H. H., Zheng, Q., Yen, N.-C., Tung, C. C., and
Liu, H. H. (1998). The empirical mode decomposition and the hilbert spectrum for nonlinear and
non-stationary time series analysis. Proceedings of the Royal Society A: Mathematical, Physical
and Engineering Sciences, 454(1971):903–995.
Iannaccone, R. and Coles, S. (2001). Semiparametric models and inference for biomedical time
series with extra-variation. Biostatistics, 2:261–276.
Knyazev, G. G. (2012). EEG delta oscillations as a correlate of basic homeostatic and motivational
processes. Neuroscience and Behavioral Reviews, 36:677–695.
Krafty, R. T., Hall, M., and Guo, W. (2011). Functional mixed effects spectral analysis. Biometrika,
98(3):583–598.
Li, Z. and Krafty, R. T. (2019). Adaptive Bayesian Time–Frequency Analysis of Multivariate Time
Series. Journal of the American Statistical Association, 114(525):453–465.
Malik, M., Bigger, J. T., Camm, A. J., Kleiger, R. E., Malliani, A., Moss, A. J., and Schwartz,
P. J. (1996). Heart rate variability. Standards of measurement, physiological interpretation, and
clinical use. European Heart Journal, 17(3):354-381.
19

Polson, N. G. and Scott, J. G. (2012). Local shrinkage rules, l ́evy processes and regularized regres
sion. Journal of the Royal Statistical Society Series B: Statistical Methodology, 74(2):287–311.
Priestley, M. B. (1981). Spectral analysis and time series. London: Academic Press.
Rosen, O., Stoffer, D. S., and Wood, S. (2009). Local spectral analysis via a Bayesian mixture of
smoothing splines. Journal of the American Statistical Association, 104(485):249–262.
Rosen, O., Wood, S., and Stoffer, D. S. (2012). AdaptSPEC: Adaptive spectral estimation for
nonstationary time series. Journal of the American Statistical Association, 107(500):1575–1589.
Ruppert, D., Wand, M. P., and Carroll, R. J. (2003). Semiparametric regression. Cambridge Press:
New York.
Schwarz, K. and Krivobokova, T. (2016). A unified framework for spline estimators. Biometrika,
103:121–131.
Shaffer, F. and Ginsberg, J. P. (2017). An overview of heart rate variability metrics and norms.
Frontiers in Public Health, 5:258.
Shumway, R. H. and Stoffer, D. S. (2017). Time series analysis and its applications: With R
examples. Springer, New York, 4th edition.
Tsai, M.-C., Lee, C.-C., Liu, S.-C., Tseng, P.-J., and Chien, K.-L. (2020). Combined healthy lifestyle
factors are more beneficial in reducing cardiovascular disease in younger adults: a meta-analysis
of prospective cohort studies. Scientific Reports, 10(1):18165.
Wahba, G. (1980). Automatic smoothing of the log-periodogram. Journal of the American Statis
tical Association, 75:122–132.
Whittle, P. (1953). Estimation and information in stationary time series. Arkiv fo ̈r Matematik,
2:423–434.
Yuen, N. H., Osachoff, N., and Chen, J. J. (2019). Intrinsic frequencies of the resting-state fMRI
signal: The frequency dependence of functional connectivity and the effect of mode mixing.
Frontiers in Neuroscience, 13:900.
20

Zhang, G.-Q., Cui, L., Mueller, R., Tao, S., Kim, M., Rueschman, M., Mariani, S., Mobley, D.,
and Redline, S. (2018). The National sleep research resource: Towards a sleep data commons.
Journal of the American Medical Informatics Association, 25(10):1351–1358.
21

Appendix A Derivations
Appendix A.1 Induced joint prior on spline coefficients
The conditional priors placed on βloc
lb and βglob
b by HBEST are given by eq. (4) in the main
manuscript, respectively
βglob
b | τ, db
in∼d N (0, τ 2db), βloc
lb | τ, db, ζl
in∼d N 0, τ 2db(ζ2
l − 1) . (A6)
The conditional element-wise independence and closure of the Gaussian family under convolution
implies βlb ≡ βglob
b + βloc
lb is also Gaussian, conditioned on the hyperparameters. The expectation
E(βlb) = 0 for all l, b; the covariance between βlb and βl′b′ is
Cov(βlb, βl′b′ ) = Cov(βglob
b + βloc
lb , βglob
b′ + βloc
l′b′ )
= Cov(βglob
b , βglob
b′ ) + Cov(βglob
b , βloc
l′b′ ) + Cov(βloc
lb , βglob
b′ ) + Cov(βloc
lb , βloc
l′b′ )
= Var(βglob
b )1{b = b′} + 0 + 0 + Var(βloc
lb )1{b = b′, l = l′}
= τ 2db1{b = b′} + τ 2db(ζ2
l − 1)1{b = b′, l = l′}.
When b ̸= b′, we have Cov(βlb, βl,b′) = 0; when b = b, l ̸= l′, we have Cov(βlb, βl,b′) = τ 2db;
and when b = b′, l = l′, we have Cov(βlb, βl,b′) = τ 2dbζ2
l . Correspondingly, let B ≡ (βlb) denote
the RL×B matrix of spline coefficients, where βββl• is the lth row of B and βββ•b is the bth column of
B. Entries within a row (where b differs) retain joint independence, and entries within a column
(where l differs) have non-diagonal covariance, with the off-diagonal covariances constant at τ 2db.
The induced conditional vector priors can thus be written
βββl• | τ, {db}, ζl ∼ N 000, τ 2(ζ2
l − 1)D ,
βββ•b | τ, db, {ζl} ∼ N 000, τ 2db(diag(ζ2
l − 1) + 111111⊤) .
Finally, note that W := τ 2D ⊗ diag(ζ2
l − 1) + 111111⊤ ∈ RLB×LB entry-wise consists of
WLb+l,Lb′+l′ = τ 2D b,b′
h
diag(ζ 2
l − 1) + 111111⊤i
l,l′ ,
22

where these evaluate to
WLb+l,Lb′+l′ = 0 ×
h
diag(ζ 2
l − 1) + 111111⊤i
l,l′ = 0, b ̸= b′,
WLb+l,Lb′+l′ = τ 2db × 1 = τ 2db, b = b′, l ̸= l′,
WLb+l,Lb′+l′ = τ 2db × [(ζ2
l − 1) + 1] = τ 2dbζ2
l , b = b′, l = l′.
This matches the covariance structure of B, implying the conditional prior of B is the matrix
normal distribution given by
B | τ, {db}, {ζl} ∼ MN 000, diag(ζ2
l − 1) + 111111⊤, τ 2D
23

Appendix B MCMC Sampling Steps
For computational simplicity we include the intercept terms, αglob and αloc
l , as the respective
zeroth entries in βloc
lb and βglob
b , for b = 0, 1, . . . , B and l = 1, . . . , L. The sampling steps for each
set of parameters {βloc
lb }, {βglob
b }, {ζl}, and τ will be presented in vector notation, for which we
adopt βββglob := (βglob
0 · · · βglob
B )⊤ and βββloc
l := (βloc
l0 · · · βloc
lB )⊤; where necessary, we use βββ−0
to denote βββ absent the intercept term. We denote {βloc} ≡ {βββloc
l }L
l=1, {β} ≡ {βββglob, {βloc}}, and
{ζ} ≡ {ζl}L
l=1. The corresponding priors are
βββglob | τ ∼ N (0B+1, ΣΣΣglob), ΣΣΣglob :=

 
σ2
glob 0
0 τ2D


;
βββloc
l | τ, ζl
in∼d N (0B+1, ΣΣΣloc
l ), ΣΣΣloc :=

 
δ2 0
0 τ 2(ζ2
l − 1)D


;
τ ∼ Half-tντ 1(0, ∞);
ζl
ii∼d Half-tνζ 1(1, ∞),
and the joint prior of our model is thus written
π ({β}, {ζ}, τ ) =
"L Y
l=1
π (ζl) π(βββloc
l | τ, ζl)
#
π βββglob | τ π(τ ). (A7)
The product Whittle likelihood utilizing the cosine basis expansion from eq. (1) is
L ({β} | {Yjl}) ∝ exp



−
L
X
l=1
111⊤ΨΨΨl(βββglob + βββloc
l )−
L
X
l=1
ml
X
jl=1
Yjl
exp
n
ψψψ⊤
jl (βββglob + βββloc
l)
o



, (A8)
where ml := ⌊ nl
2 ⌋, {Yjl } ≡ {Yjl : jl = 1, . . . , ml}L
l=1 is the collection of replicate-specific peri
odograms, and ΨΨΨl is the matrix with rows ψψψ⊤
jl = (1 √2 cos(1ωjl) · · · √2 cos(Bωjl)). Then the
joint posterior distribution is
π({β}, {ζ}, τ | Y ) ∝ L({β} | Y )π({β}, {ζ}, τ ). (A9)
24

We use a Metropolis-within-Gibbs sampler to sequentially sample parameter values, first sampling
the smoothing parameters and then the spline coefficient vectors.
Sampling global smoothing parameter, τ . We sample τ with a “Griddy Gibbs” sampler to
avoid degeneracy at the boundary. Let Fντ denote the cumulative distribution function (CDF)
for the t-distribution with degrees of freedom ντ (i.e. of the prior for τ ), and let Fν−τ1 denote the
corresponding quantile function. For fixed bound parameters 0 < τmin < τmax, we first construct
a uniform grid {pk} of length K between Fντ (τmin) and Fντ (τmax), and then construct a τ -grid
{τgrid} := {tk : tk = Fν−τ1(pk)}. This final grid is essentially a discretization of the prior support
for τ ; we sample from it with weights proportional to π(τ | −) to obtain a sample for τ . This
conditional posterior distribution is
π(τ | −) ∝
"L Y
l=1
π(βββloc
l | τ, ζl)
#
π(βββglob | τ )π(τ ),
log π(τ | −) = − B(L + 1)
2 log(τ 2) − 1
2τ 2 (βββglob
−0 )⊤D−1βββglob
−0 +
L
X
l=1
(βββloc
l,−0)⊤D−1βββloc
l,−0 ζ2
l −1
!
− ντ + 1
2 log 1 + τ 2
ντ
. (A10)
Then τ is sampled from the discrete distribution supported on {τgrid} with probabilities P[τ =
tk] = π(tk | −)/ P
k π(tk | −).
Sampling local smoothing parameter, ζl. For l = 1, . . . , L, we implement a Griddy Gibbs
sampler to sample ζl from an approximated conditional posterior. Let Fνζ denote the CDF of the
t-distribution with degrees of freedom νζ, and let Fν−ζ1 denote the corresponding quantile function.
For fixed bound parameters 0 < ζmin < ζmax, we first construct a uniform grid {pk} of length K′
between Fνζ (ζmin) and Fνζ (ζmax), and then construct a ζ-grid {ζgrid} := {zk : zk = Fν−ζ1(pk)}. We
sample from this discrete support with weights proportional to the conditional posterior distribution
π(ζl | −) to obtain a sample for ζl. This conditional posterior distribution is
π(ζl | −) ∝ π(βββloc
l | τ, ζl)π(ζl),
log π(ζl | −) ∝ − B
2 log(ζ2
l − 1) − (βββloc
l,−0)⊤D−1βββloc
l,−0
2τ 2(ζ2
l − 1) − νζ + 1
2 log 1 + ζ2
νζ
. (A11)
25

Then ζl is sampled from the discrete distribution supported on {ζgrid} with probabilities P[ζl =
zk] = π(zk | −)/ P
k π(zk | −).
Sampling local spline vector, βββloc
l . For l = 1, · · · , L, we propose a new local spline coefficient
vector with a scaled-Laplace approximation to the conditional posterior distribution for βββloc
l . We
numerically obtain the conditional posterior mode βββeloc
l through gradient ascent, and use the Hessian
H(βββeloc
l ) to determine the covariance of the Gaussian approximation. The conditional posterior
distribution is proportionally dependent on the prior’s Gaussian kernel and the Whittle likelihood
by
π(βββloc
l | −) ∝ exp



−111⊤ΨΨΨlβββloc
l−
ml
X
jl=1
Yjl
exp
n
ψψψ⊤
jl βββglob + βββloc
l
o−1
2 (βββloc
l )⊤(ΣΣΣloc
l )−1βββloc
l



;
log π(βββloc
l | −) = −111⊤ΨΨΨlβββloc
l−
ml
X
jl=1
Yjl
exp
n
ψψψ⊤
jl βββglob + βββloc
l
o−1
2 (βββloc
l )⊤(ΣΣΣloc
l )−1βββloc
l , (A12)
where we omit the normalizing constant. For brevity, let λjl := Yjl exp{−ψψψ⊤
jl (βββglob + βββloc
l )} denote
the summand entries, and let ΛΛΛl := diag(λ1 · · · λml). The gradient and Hessian with respect to
βββloc
l are
∇ log π(βββloc
l | −) = −ΨΨΨ⊤
l 111 − (ΣΣΣloc
l )−1βββloc
l+
ml
X
jl=1
ψψψjl λjl ; (A13)
H(βββloc
l ) := ∇2 log π(βββloc
l | −) = −(ΣΣΣloc
l )−1 −
ml
X
jl=1
ψψψjlψψψ⊤
jl λjl = −(ΣΣΣloc
l )−1 − ΨΨΨ⊤
l ΛΛΛlΨΨΨl. (A14)
Note the Hessian is negative definite. We find βββeloc
l := arg max{log π(βββloc
l | −)} numerically using
R’s stats::optim function, and sample proposal value βββl∗oc ∼ N (βββeloc
l , −ηH(βββeloc
l )−1), where η > 0
is a fixed scalar selected to improve mixing; typically η = 1 suffices. We then accept βββloc
l ← βββl∗oc
(or not) with a Metropolis-Hastings step.
Sampling global spline vector, βββglob. We also sample βββglob via Laplace approximation. The
conditional log posterior of βββglob is
log π(βββglob | −) = −
L
X
l=1
111⊤ΨΨΨlβββglob −
L
X
l=1
ml
X
jl=1
Yjl
exp{ψψψ⊤
jlβββglob} exp{ψψψ⊤
jlβββloc
l } , (A15)
26

where again the normalizing constant has been omitted. Using the condensed notation of λjl and
ΛΛΛl for each l = 1, . . . , L, the gradient and Hessian of the conditional log posterior with respect to
βββglob is
∇ log π(βββglob | −) = −
L
X
l=1
ΨΨΨ⊤
l 111 − (ΣΣΣglob)−1βββglob +
L
X
l=1
ml
X
jl=1
ψψψjl λjl ; (A16)
H(βββglob) := ∇2 log π(βββglob | −) = −(ΣΣΣglob)−1 −
L
X
l=1
ΨΨΨ⊤
l ΛΛΛlΨΨΨl. (A17)
We find βββeglob := arg max{log π(βββglob | −)} numerically using R’s stats::optim function, and
sample proposal value βββglob
∗ ∼ N (βββeglob, −ηH(βββeglob)−1). We then accept βββglob ← βββglob
∗ (or not) with
a Metropolis-Hastings step.
27

Appendix C MCMC Algorithms
Algorithm 1 MCMC Algorithm: Sampling Scheme
1: Initialize (i = 1) parameters τ , {ζl}, {βloc
l }, βββglob
2: for i ∈ {2, . . . , I} do ▷ MCMC iterations
3: Step 1: Griddy Gibbs for τ :
4: Sample τ using a Griddy Gibbs step (see Algorithm 2).
5: Update ΣΣΣglob ← diag(σ2
glob τ 2d1 · · · τ 2dB).
6: Step 2: Griddy Gibbs for each ζl:
7: for l ∈ {1, . . . , L} do
8: Sample ζl using a Griddy Gibbs step (see Algorithm 3).
9: Update ΣΣΣloc ← diag(δ2 τ 2(ζ2
l − 1)d1 · · · τ 2(ζ2
l − 1)dB).
10: end for
11: Step 3: Metropolis-Hastings for each βββloc
l:
12: for l ∈ {1, . . . , L} do
13: Sample proposal βββ∗loc
l using a Laplace approximation.
14: Accept/reject βββ∗loc
l with a Metropolis-Hastings step (see Algorithm 4).
15: end for
16: Step 4: Metropolis-Hastings for βββglob:
17: Sample proposal βββ∗glob using a Laplace approximation.
18: Accept/reject βββ∗glob with a Metropolis-Hastings step (see Algorithm 5).
19: Step 5: Store samples.
20: end for
28

Algorithm 2 Griddy Gibbs Sampler for τ
1: procedure SampleGlobalScale({β}, {ζl}, D, ντ > 0, 0 < τmin < τmax, K ∈ N)
2: pmin ← Fντ (τmin).
3: pmax ← Fντ (τmax).
4: {pgrid} ← {pk = pmin + (pmax − pmin) k−1
K−1 : k = 1, . . . , K}.
5: {τgrid} ← {tk = Fν−τ1(pk) : pk ∈ {pgrid}}.
6: for k ∈ {1, . . . , K} do
7: Compute log π(tk | −) using eq. (A10).
8: end for
9: for k ∈ {1, . . . , K} do
10: Compute log πek ← log π(tk | −) − maxj{log π(tj | −)}.
11: end for
12: for k ∈ {1, . . . , K} do
13: Compute p∗
k ← exp{log πek}/ P
j exp{log πej} (i.e. softmax).
14: end for
15: Sample τ ∼ Discrete({τgrid}, {p∗
k}).
16: return τ .
17: end procedure
29

Algorithm 3 Griddy Gibbs Sampler for ζl
1: procedure SampleLocalScale(βββglob, βββloc
l , τ, D, νζ > 0, 0 < ζmin < ζmax, K′ ∈ N)
2: pmin ← Fνζ (ζmin).
3: pmax ← Fνζ (ζmax).
4: {pgrid} ← {pk = pmin + (pmax − pmin) k−1
K′−1 : k = 1, . . . , K′}.
5: {ζgrid} ← {zk = Fν−ζ1(pk) : pk ∈ {pgrid}}.
6: for k ∈ {1, . . . , K′} do
7: Compute log π(zk | −) using eq. (A11).
8: end for
9: for k ∈ {1, . . . , K′} do
10: Compute log πek ← log π(zk) − maxj{log π(zj)}.
11: end for
12: for k ∈ {1, . . . , K′} do
13: Compute p∗
k ← exp{log πek}/ P
j exp{log πej} (i.e. softmax).
14: end for
15: Sample ζ ∼ Discrete({ζgrid}, {p∗
k}).
16: return ζ.
17: end procedure
30

Algorithm 4 Laplace Approximation Metropolis-Hastings Sampler for βββloc
l
1: procedure SampleLocalSpline({β}, τ, ζl, Y, D, {ΨΨΨl}L
l=1, η > 0)
2: Compute MAP estimate βββeloc
l ← arg max log π(βββloc
l | −); see eq. (A12)–(A14).
3: Compute Hessian H(βββeloc
l ) ← ∇2 log π(βββeloc
l | −); see eq. (A14).
4: Sample proposal βββ∗ ∼ N (βββeloc
l , −η · H(βββeloc
l )−1).
5: Compute acceptance ratio
α∗ ← min
(
1, π(βββ∗ | −)
π(βββloc
l,curr. | −)
)
; see eq. (A12).
6: Sample U ∼ unif(0, 1).
7: if U < α∗ then
8: Accept proposal βββloc
l ← βββ∗.
9: else
10: Reject proposal βββloc
l ← βββloc
l,curr..
11: end if
12: end procedure
31

Algorithm 5 Laplace Approximation Metropolis-Hastings Sampler for βββglob
1: procedure SampleGlobalSpline({β}, τ, Y, D, {ΨΨΨl}L
l=1, η > 0)
2: Compute MAP estimate βββeglob ← arg max log π(βββglob | −); see eq. (A15)–(A17).
3: Compute Hessian H(βββeglob) ← ∇2 log π(βββeglob | −); see eq. (A17).
4: Sample proposal βββ∗ ∼ N (βββeglob, −η · H(βββeglob)−1).
5: Compute acceptance ratio
α∗ ← min
(
1, π(βββ∗ | −)
π(βββglob
curr. | −)
)
; see eq. (A15).
6: Sample U ∼ unif(0, 1).
7: if U < α∗ then
8: Accept proposal βββglob ← βββ∗.
9: else
10: Reject proposal βββglob ← βββglob
curr..
11: end if
12: end procedure
32

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:01.537Z
- **Text Length:** 52138 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 32 of 32
