# PDF Document: Sebastian and Minin - 2025 - Gaussian process priors with Markov properties for effective reproduction number inference.pdf

**File Path:** Sebastian and Minin - 2025 - Gaussian process priors with Markov properties for effective reproduction number inference.pdf

**Processed Date:** 2026-02-10T18:18:13.813Z

**File Size:** 1491.79 KB

**Total Pages:** 31

**Extracted Pages:** 31

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3385

**Title:** Gaussian process priors with Markov properties for effective reproduction number inference

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Gaussian Process Priors with Markov Properties for Effective Reproduction
Number Inference
Jessalyn N. Sebastian1 and Volodymyr M. Minin1
1Department of Statistics, University of California, Irvine
Abstract
Many quantities characterising infectious disease outbreaks — like the effective reproduction number (Rt), defined as the average number of secondary infections a newly infected individual will cause over the course of their infection — need to be modelled as time-varying parameters. It is common practice to use Gaussian random walks as priors for estimating such functions in Bayesian analyses of pathogen surveillance data. In this setting, however, the random walk prior may be too permissive, as -
it fails to capture prior scientific knowledge about the estimand and results in high posterior variance. We propose several Gaussian Markov process priors for Rt inference, including the Integrated Brownian Motion (IBM), which can be represented as a Markov process when augmented with its corresponding Brownian Motion component, and is therefore computationally efficient and simple to implement and tune. We use simulated outbreak data to compare the performance of these proposed priors with the G-
aussian random walk prior and another state-of-the-art Gaussian process prior based on an approximation to a Mat ́ern covariance function. We find that IBM can match or exceed the performance of other priors, and we show that it produces epidemiologically reasonable and precise results when applied to county-level SARS-CoV-2 data.
1 Introduction
Careful real-time monitoring of infectious disease outbreaks is key to enabling policymakers to implement effective mitigation strategies (Cori et al., 2017; Niu et al., 2021; Van Kerkhove and Ferguson, 2012). While surveillance data like time series of cases, hospitalisations, or deaths are revealing in of themselves, mathematical modelling that incorporates multiple data streams and available prior knowledge provides deeper insights into the current dynamics of the outbreak’s spread. In this pap-
er, we propose and contrast several smoothing models for doing inference on time-varying transmission, and we assess their implications for retrospective and real-time epidemic monitoring. Measuring whether an outbreak is growing or subsiding can be of particular interest to public health officials when assessing the current intensity of the disease’s spread, as well as the impact of interventions like masking and school closures. The effective reproduction number, Rt, is one such measure. The eff-
ective reproduction number is the expected number of individuals a newly infected individual will subsequently infect; when Rt is less than 1, it indicates that the outbreak is diminishing, and when it exceeds 1, the outbreak is worsening. This makes Rt a straightforward, interpretable indicator of the current state of an epidemic. As a consequence, many methods for estimating Rt from surveillance data like cases and diagnostic tests already exist and are being used in public health response aroun-
d the world (Cori and Kucharski, 2024). Most of these methods operate within a fully Bayesian framework. Regardless of the structure of the likelihood connecting the observed data to the underlying model, all of these methods require defining a prior distribution over possible Rt trajectories. Since Rt is inherently a function of time, these priors effectively determine the temporal correlation structure of the function. A common approach is to use a first-order Gaussian random walk (RW1) (Conway -
and Mueller, 2024; Parag, 2021; Goldstein et al., 2023; Jin et al., 2024; Abbott et al., 2024a,b; Scott et al., 2020), a discretised and scaled Wiener process, in which each successive Rt (typically with some link function due to nonnegativity constraints) is modelled as a Gaussian distribution with mean at the previous Rt and a variance proportional to the amount of time elapsed between observations. The RW1 is an appealing prior because it is flexible, easy to implement, and has interpretable hy-
perparameters.
1
arXiv:2511.18797v1 [stat.ME] 24 Nov 2025

In the setting of Rt inference, the data involved can be particularly noisy. Although the RW1 is flexible, it may be too permissive for Rt inference. There is plenty of prior knowledge about the structure of Rt, so using the RW1 may be leaving information that could sharpen inference on the table; models using the RW1 prior can suffer from wider-than-necessary Bayesian credible intervals (BCIs) due to the roughness of its sample paths. These issues have prompted some modellers to look elsewhere f-
or appropriate Rt priors. Gaussian process priors commonplace in Bayesian spatio-temporal statistics and machine learning, like those with a squared exponential or Mat ́ern kernel, can be used to impose smoothness. Bayesian computation with these functional priors, however, is significantly more costly than when using the simple RW1. Numerous approximations have been developed to make Gaussian process priors more tractable, like reduced-rank approximations using the Nystr ̈om method or local appro-
ximations with model averaging like mixture of experts (see, for example, Liu et al. (2020) and Rasmussen and Williams (2008) for an overview). Popular epidemic modelling package EpiNow2 (Abbott et al., 2024a) employs a Hilbert space approximation for stationary covariance kernels (HSGP), as developed by Solin and S ̈arkk ̈a (2019) and extended for easier application in oft-used modelling software like Stan by Riutort-Mayol et al. (2022). A potential downside of this method, and other Gaussian pro-
cess approximation methods like it, is the need to choose settings for the approximation in addition to priors for the parameters of the Gaussian process. These settings can be difficult to interpret practically, and may therefore be challenging to practitioners without significant mathematical background. The purpose of this study is to investigate potential priors that have the benefits of both types of priors discussed above. From the perspective of infectious disease monitoring, desirable prio-
rs for Rt balance several considerations: computational tractability, epidemiological plausibility, interpretability, and ease of implementation. We turn to Gaussian process priors with Markov properties, or conditional independence properties, meaning that the value of the process at any point in time conditional on the rest of the time points only depends on its value at neighbouring points. This structure allows for the joint density to be expressed as a product of conditional transition densit-
ies between neighbouring points, which simplifies the evaluation of the probability density and circumvents the need for computationally expensive matrix inversions. We compare the Ornstein-Uhlenbeck (OU), Second-Order Gaussian Random Walk (RW2), and Integrated Brownian Motion (IBM) priors with the RW1 and the HSGP with a Mat ́ern kernel, within the framework of a simple hierarchical Bayesian model that takes counts of cases as data. We consider both retrospective and real-time inference, comparin-
g the distinct effects of smoothing assumptions on the entire inferred time-varying Rt curve and on only the latest Rt inference. In simulations, we find that the IBM and RW2 priors match or outperform the RW1 and HSGP in both accuracy and precision of retrospective Rt posterior inference. The IBM prior additionally produces inference comparable to the HSGP and more precise than the RW1 in real time, and is more likely to correctly identify increasing transmission. We compare the results of models-
 using these priors on California COVID-19 data collected at the county level, and we demonstrate that they produce reasonable results, but that posterior uncertainty around Rt is higher with the RW1 than with smoother priors like the HSGP and IBM.
2 Methods
2.1 Likelihood of Observed Cases
The effective reproduction number is typically inferred using surveillance data like cases, hospitalisations, diagnostic tests, and/or deaths. The public health threat posed by the COVID-19 pandemic drove the production of types of datasets that have not historically been available, such as pathogen concentration in wastewater or in some cases digital contact tracing data, from which Rt can also be estimated (Cori and Kucharski, 2024). While these emerging data sources have expanded the scope of i-
nfectious disease modelling, traditional surveillance data remain popular for real-time outbreak monitoring, due primarily to their widespread public availability. The California Open Data Portal (2024), for example, is a statewide data portal hosting data from many local government agencies, including COVID-19 surveillance data, like time series of observed cases, at the county level. Suppose we want to use these data to generate Rt inference for several counties in California through Summer-Fall-
-Winter of 2020–2021 (Figure 1). Speaking more generally, we assume that we want to infer Rt for some pathogen over a discretely-indexed time frame t = 1, ..., T , and the data contain a time series of observed cases O = (O1, O2, ..., OT ). Each element in O gives the number of newly observed cases of an infectious disease in the time interval given by the subscript. The effective reproduction number governs changes in latent incidence, or the true, unobserved counts of infected individuals. Obser-
ved cases, in turn, should be modelled as some noisy realisation of a function of
2

0
300
600
900
Aug 2020 Oct 2020 Dec 2020 Feb 2021 Date
Cases per 100,000
County
Los Angeles San Francisco
Observed COVID−19 Cases
Figure 1: Time series of COVID-19 cases in the counties of San Francisco and Los Angeles, California, from June of 2020 through February of 2021.
that latent incidence. This structure lends itself well to a hierarchical Bayesian model. Following Abbott et al. (2024a), Scott et al. (2020), and Systrom et al. (2020), among others, we use a negative binomial distribution to model observed cases O conditional on current and prior incidence (It and I−n:t, respectively, where n is the number of weeks of seeded incidence, discussed below). The use of the negative binomial likelihood is conventional, as it allows for modelling overdispersed counts.-
 The expectation of observed cases is a function of true underlying incidence and the ascertainment rate ρ, or the fraction of latent incidence which is observed. The overdispersion of the negative binomial distribution at each time t is given by κ. We then have
Ot | It, I−n:t, ρ, κ ∼ Neg-Binom(ρ × Dt, κ), t = 1, . . . , T,
with
Dt =
t
X
j=−n
Ij dt−j ,
where dt−j are probabilities from a discretised delay distribution, and delays represent the time between infection of an individual and the subsequent detection of their case. In this study, we will treat delays as being the time between infection and testing, with no additional delay for reporting the results of the test. This is a reasonable modelling choice for the data we analyze in this paper, as it gives counts of cases by the date of their test, rather than the date of their ultimate repor-
ting. We make the additional simplifying assumption that individuals test around the time they become infectious. This means that the dt−j are discretised probabilities from the latent period distribution, or the distribution of times between infection and becoming infectious. Then, the joint density for observed cases over the observational period takes the form
P (O | I, ρ, κ) =
T
Y
t=1
P (Ot | It, I−n:t, ρ, κ),
3

since observed cases in each time interval are modelled as conditionally independent given true unobserved incidence. Parameter ρ is given a log-normal prior based on a plausible range of proportions of true incidence that are observed, and κ is given a truncated-normal prior. Poor choices of κ result in poor Markov chain Monte Carlo (MCMC) convergence. This can be addressed in several ways; we follow Goldstein et al. (2023) in using a Bayesian thin plate regression spline to build a prior for κ -
(see Appendix D.1). To be philosophically sound, the spline model should use data from a time and location that is expected to be similar to, but not the same as, the data to be modelled. The model for unobserved incidence connects the time series of observed cases to the primary target of inference, the effective reproduction number. It is common to model seeded incidence, or incidence prior to the observational period, drawn from an exponential distribution (Scott et al., 2020). For t = −n, . . -
. , 0, we draw It from an exponential distribution with mean λ, which itself is given an exponential prior. During the observational period, that is, t = 1, . . . , T , we follow Goldstein et al. (2023) and model current incidence conditional on previous incidence and Rt as a gamma distributed random variable:
It | I−n:t, Rt, ν ∼ Gamma Rt
t−1
X
j=−n
gt−jIjν, ν , t = 1, . . . , T,
where gt are probabilities from the discretised generation time distribution, or distribution of times between infection of an individual and the preceding infection of their infector, and ν represents the linear meanvariance relationship for the distribution of incidence. The mean of the gamma distribution comes from the well-known renewal equation (Fraser, 2007). The renewal equation is used in outbreak modelling to express the mode of propagation of a disease as a function of average transmissi-
bility, infectious period length, and current incidence. In many cases, incidence is modelled deterministically with the renewal equation; we believe it is desirable to have some stochasticity in incidence, especially in small- and medium-sized populations (Goldstein et al., 2023). The joint model for incidence is then
P (I | R, ν, λ) =
0
Y
t=−n
P (It | λ)
T
Y
t=1
P (It | I−n:t, Rt, ν) .
We have discussed our modelling choices for observed cases and latent incidence, and what remains is the prior for Rt, the primary subject of this paper. The model we have presented above is fairly generic, where most of our modelling choices are common, and their implications are well-understood in the field. We do not expect that minor changes to this likelihood structure will substantially change the relative impacts of each of the Rt priors on the estimated posterior distributions.
2.2 Priors for the Effective Reproduction Number
In this paper, we treat R(t) as a continuous-time latent function, and we construct our priors based on the real-valued Γ(t) = log R(t), since the effective reproduction number is strictly nonnegative. We write Rt for the value of R(t) at a given observation time t, and similarly Γt for the value of Γ(t) at time t. The model works with the discretised vector:
Γ = (Γ1, Γ2, . . . , ΓT ).
A Gaussian process is a type of stochastic process where any finite collection of random variables drawn from the process follows a multivariate normal distribution. Continuous-time GP priors induce a multivariate normal distribution for Γ when evaluated on this grid, while discrete-time models specify the distribution of Γ directly. A Gaussian Markov process is a specific case of a Gaussian process that additionally satisfies a Markov property. Conceptually, this property of conditional independe-
nce states that given the current state of the process, the future state is independent of prior states (Rue and Held, 2005, p. 13-17). The Markov property is particularly useful in simplifying computations, as it allows for computationally efficient modelling of dependencies over time or space. Using a general Gaussian process prior without a Markov property requires high-cost manipulations of the full covariance matrix of the discretised trajectory. When the prior has Markov structure, the joint-
 density of the process can be computed more efficiently by simply multiplying conditional densities. It is because of their ease of implementation and computational benefits that we focus on Gaussian Markov processes in this paper. Below we introduce some specific priors and discuss them in further detail.
4

2.2.1 Gaussian Random Walk (RW1)
The Gaussian Random Walk is a time-homogeneous, first-order Gaussian Markov process, obtained by discretising and scaling a Wiener process, or Brownian Motion. This prior is given as
Γ1 ∼ Normal(μ1, σ2
1 ),
Γt | Γt−1 ∼ Normal Γt−1, σ2
T − 1 , t = 2, ..., T,
where the choice of prior distribution of σ corresponds to practical beliefs about the amount of fluctuation in Rt over time. We have chosen to represent the conditional variance as σ2/(T − 1) for ease of prior elicitation. If Var(Γt | Γt−1) = σ2/(T −1), then Var(Γt | Γ1) = PT −1
1 σ2/(T −1) = σ2, by properties of Gaussian random walks. Then, the prior on σ can be chosen based on the expected total possible fluctuation in Γt over the observational period. The joint density of Γ for t = 1, . . . , T is then given by the product of conditional densities
P (Γ | μ1, σ1, σ) = P (Γ1 | μ1, σ1)
T
Y
t=2
P (Γt | Γt−1, σ).
The RW1 and its variants are common choices of Rt prior. Some, like Conway and Mueller (2024), place the random walk directly on Rt. This makes it difficult to enforce nonnegativity; Parag (2021) does so by scaling the error by a factor proportional to the square root of the previous Rt. It is more typical to use some kind of link function. A log-link, as we use for all priors in this paper, is a common choice (Goldstein et al. (2023), Jin et al. (2024)). Similarly, modelling tools like EpiNow2 (A-
bbott et al., 2024a) and Epinowcast (Abbott et al., 2024b) provide the option to use a random walk prior on Rt with a log-link. A log-link implies no so-called carrying capacity; in other words, it is not bounded above. Scott et al. (2020) view this as a downside and account for it using a scaled logit link instead.
2.2.2 Ornstein-Uhlenbeck Process (OU)
In practice, Rt is generally known to drift toward and fluctuate around the critical value 1, especially for infectious diseases that become endemic (Anderson, 2016). This prior knowledge can be reflected by the Ornstein-Uhlenbeck (OU) process, which is a modified Brownian Motion that approaches its long-term mean with drift proportional to distance from the mean. The process XtOU is defined by the stochastic differential equation
dX OU
t = −θ(XOU
t − μ)dt + σBt,
where Bt is a Brownian motion, μ ∈ R is the stationary mean, σ scales the driving Brownian motion, and θ ∈ (0, ∞) controls the strength of reversion to the mean (Gardiner, 1985, p. 74-77). Brownian motion is then a special case of the OU process where θ = 0. The OU process has a closed-form transition density given by
X OU
t | XOU
0 ∼ Normal μ + (XOU
0 − μ)e−θt, σ2
2θ (1 − e−2θt) ,
as stated in (Gardiner, 1985, p. 74-77). The OU process is temporally homogeneous, so the transition density above can be extended to any pair XtO+Us | XsOU . We let the prior for Γt be an OU process on the log scale, with long-term mean μ set equal to 0 (thereby asserting that we expect Rt to revert to e0 = 1). The OU prior is then given by
Γ1 ∼ Normal(μ1, σ2
1 ),
Γt | Γt−1 ∼ Normal Γt−1e−θ, σ2
2θ (1 − e−2θ) , t = 2, ..., T.
As with RW1, the joint density of Γ for t = 1, . . . , T can be given by the product of conditional densities
P (Γ | μ1, σ1, σ, θ) = P (Γ1 | μ1, σ1)
T
Y
t=2
P (Γt | Γt−1, σ, θ).
5

Hyperprior selection for the OU prior is more difficult than for the other Gaussian Markov processes presented here. The OU prior as given above takes two parameters: θ, the strength of reversion to the mean, and σ, which scales the driving Brownian motion process. Since θ appears in both the mean and variance of the transition density, it is perhaps easiest to place a prior on θ based on the mean and then use the prior on σ to scale the variance to reflect expected week-to-week (or day-to-day, d-
epending on the timescale) variation in Γt. The parameter θ is theoretically interpretable as the strength of the process’s attraction to the limiting mean, but in practice it is not an easy task to give this parameter a concrete meaning. We consider e−θ, the term in the mean of the transition density that controls the change in mean compared to the prior log Rt value (which, in the RW1, would be taken as the mean itself). The prior on θ can then be constructed by proposing a range of plausible va-
lues for how much closer we would expect each successive Γt to be to 0. Letting θ ∼ Exp(1), for example, gives e−θ a Uniform(0, 1) distribution. Then, using this, we can construct a prior on σ based on conditional variance of Γt.
2.2.3 Second-Order Gaussian Random Walk (RW2)
Neither of the processes discussed above encourage smoothness of the sample paths. Both the RW1 and the OU processes are rough; their use as smoothing priors is rooted in the rescaling of time or conditional variance such that the discretely observed processes appear smooth. In general, we expect Rt to vary smoothly with time, because it takes time for changes in susceptibility, mitigation measures, and emergence of new genetic variants to have an effect on transmission. This motivates the desire -
for a smooth, computationally inexpensive prior that maintains the ease of implementation and interpretability of the RW1 and OU priors. A smooth prior with Markov structure can be obtained in discrete time by using a higher order model; that is, conditioning on multiple previous states rather than only one. Here we consider a Second-Order Gaussian Random Walk (RW2). While the idea behind the first-order RW1 is that increments, or successive differences, are zero-mean normal distributions, the RW2-
 gives increments of increments zero-mean normal distributions. This makes the process second-order Markov, as each successive state is dependent on the previous two; it is then a smoother process than the first-order RW1 since it holds more memory at each step. RW2 models are interpretable and computationally inexpensive for observations at regular time intervals, but they are not appropriate for irregularly spaced data, which is not uncommon in infectious disease surveillance. To account for une-
venly spaced data, some reweighting or other approximation can be done (Fahrmeir and Knorr-Held, 1997; Lindgren and Rue, 2008). For the purposes of this paper, we consider only regularly spaced time series data. The RW2 prior for Γt is then given by
Γ1 ∼ Normal(μ1, σ2
1 ),
Γ2 | Γ1 ∼ Normal(Γ1, σ2),
Γt | Γt−1, Γt−2 ∼ Normal(2Γt−1 − Γt−2, σ2), t = 2, ..., T,
(Rue and Held, 2005, p. 133-140). The joint density of Γ under this second-order Markov prior becomes
P (Γ | μ1, σ1, σ) = P (Γ1 | μ1, σ1)P (Γ2 | Γ1, σ)
T
Y
t=3
P (Γt | Γt−1, Γt−2, σ).
2.2.4 Integrated Brownian Motion (IBM)
Integrated Brownian Motion (IBM), also known as the integrated Wiener process, is the time integral of Brownian motion:
XIBM
t=
Zt
0
Bsds,
where XIBM
t represents the IBM process and Bt represents its corresponding Brownian motion (Rue and Held, 2005, p. 134). Since IBM is by definition the integral of a non-differentiable stochastic process, its sample paths are once differentiable, so this prior encourages smoothness like the RW2. IBM is, in fact, the continuous-time analogue of the RW2. This can be seen intuitively by considering the relationship between derivatives and differences: the time derivative of IBM is a Wiener process, while diffe-
rencing a RW2 gives a RW1, which is a Wiener process in discrete time. Since IBM, unlike RW2, is defined in continuous time, the extension to irregularly spaced observations is natural.
6

Though IBM itself is not a Markov process, when augmented with the corresponding Brownian motion, the two can be modelled together as a two-dimensional process that is both Gaussian and Markov (Wecker and Ansley, 1983). This Markov representation of IBM lends itself well to being a smoothing prior, and its use can be motivated by the connection to smoothing splines as shown by Wahba (1978). In spite of this, exact IBM has not been widely adopted as a smoothing prior; instead, some approximations -
are usually used
(see, for example, Lindgren and Rue (2008) and Zhang et al. (2024)). The transition density for Bt
XIBM
t
is:
Bt XIBM
t
Bs XIBM
s
∼ Normal2
Bs XIBM
s + (t − s)Bs
, t−s 1
2 (t − s)2
1
2 (t − s)2 1
3 (t − s)3
!
for s ≤ t. We once again place the IBM prior on log Rt, or Γt, rather than Rt directly. Letting Γ′t be the time derivative of Γ(t) at time t, the prior becomes
Γ′1 Γ1
∼ Normal2
μ′1 μ1
, σ12 σ14/2
σ14/2 σ16/3
!
,
Γ′t Γt
Γ′t−1 Γt−1
∼ Normal2
Γ′t−1
Γt−1 + σ2Γ′t−1
, σ2 σ4/2
σ4/2 σ6/3
!
t = 2, ..., T,
where σ2 scales time. We use a log-normal prior on σ, where the parameters are chosen based on expected week-to-week (day-to-day) variation in Rt. While the joint density of Γ can still be expressed as a simple product of conditional densities, we must keep in mind that we are now modelling an additional vector of parameters: Γ′, the time derivative of Γ. We then have the joint density of both Γ and Γ′:
P (Γ, Γ′ | σ) = P (Γ1, Γ′
1 | μ′
1, μ1, σ1)
T
Y
t=1
P (Γt, Γ′
t | Γt−1, Γ′
t−1, σ).
2.2.5 Hilbert Space Approximation to Gaussian Process with Mate ́rn Kernel (HSGP)
The Hilbert Space Gaussian Process approximation (HSGP), developed by Solin and S ̈arkk ̈a (2019), can approximate a Gaussian process with a stationary kernel function. Their method is a part of a class of methods that aim to approximate the covariance matrix with a lower rank matrix via approximate eigendecomposition. The general idea is to treat the stationary covariance function as a pseudo-differential operator and approximate it using Hilbert space methods that are used in partial differentia-
l equations. This computation scales linearly with the number of data points, as opposed to cubically as in the case of using the GP with its exact covariance function. We include the HSGP prior in our comparison because it underpins the default smoothing prior used by EpiNow2 (Abbott et al., 2024a). In EpiNow2, a multivariate normal prior is placed on the vector of first-order differences of the latent log reproduction number, ∆Γ = (Γ2 − Γ1, . . . , ΓT − ΓT −1), with mean zero and a covariance st-
ructure motivated by a Mat ́ern 3/2 kernel. This covariance is obtained via the HSGP approximation, which provides a low-rank representation of the Mat ́ern 3/2 structure on this finite set of differences. We will compare our models to EpiNow2 directly, but we will also use the HSGP prior with a Mat ́ern 3/2 kernel under our likelihood directly on the latent function Γt for comparability with the other priors in this study. Evaluating this approximate GP prior on the grid of observations gives
Γ ·∼ NormalT (0, K),
where covariance entries Kij ≈ k(| ti − tj |), with
k(∆t) = α2 1 +
√3∆t
l exp −
√3∆t
l,
where l > 0 represents the length scale and α > 0 represents the magnitude of the kernel. Unlike the priors with a Markov property, this specification does not admit a simple product of low-order conditional densities; the implied joint density is determined by the full covariance structure,
P (Γ | α, l) ∝ |K|−1/2 exp − 1
2 ΓT K−1Γ ,
7

though the HSGP approximation represents this covariance in low rank and avoids inverting the full, exact covariance matrix. When using the GP with exact Mat ́ern covariance, priors would need to be placed on the marginal variance α2 and the length scale l which controls the smoothness, or the strength of correlation at distances ∆t. Approximating this Mate ́rn GP with the HSGP necessitates setting a few more hyperparameters: the number of basis functions to use in the approximation and the bound-
ary condition. Riutort-Mayol et al. (2022) give practical guidance on choosing these settings, a two-phase process which involves iteratively guessing the length scale, setting the boundary condition and basis functions based on a provided set of equations, running the model and checking conditions, then iteratively increasing the number of basis functions, running the model, and checking on the stability of the predictive accuracy. Though this guidance is very helpful to the user, the inconvenien-
ce of the process along with the difficulty of the underlying mathematics may be enough to deter practitioners from using the HSGP. Practitioners may alternatively be inclined to apply the HSGP prior without properly choosing settings, leading to invalid inference. It is reasonable to believe that many users of EpiNow2 may rely on the default settings for the HSGP prior, rather than making modifications based on a thorough evaluation of the approximation accuracy.
2.3 Posterior Inference
For models using the RW1, OU, RW2, and HSGP priors, the posterior distribution of incidence, log effective reproduction number, and other nuisance parameters can be represented by
P (I, Γ, ξ, ρ, κ, ν, λ | O) ∝ P (O | I, ρ, κ)
| {z }
observed cases
P (I | Γ, ν, λ)
| {z }
latent cases
P (Γ | ξ)
| {z }
log Rt prior
P (ξ, ρ, κ, ν, λ)
| {z }
other priors
,
where ξ is the vector of parameters that the given Γ prior relies on. This posterior form needs to be altered for the models which use the IBM prior, since an additional latent process is modelled and the state space is therefore larger:
P (I, Γ, Γ′, ξ, ρ, κ, ν, λ | O) ∝ P (O | I, ρ, κ)
| {z }
observed cases
P (I | Γ, ν, λ)
| {z }
latent cases
P (Γ, Γ′ | ξ)
| {z }
IBM prior
P (ξ, ρ, κ, ν, λ)
| {z }
other priors
.
To approximate these posterior distributions, we use Hamiltonian Monte Carlo with the No-U-Turn Sampler (NUTS) as implemented in the R package rstan (Stan Development Team, 2025; Hoffman and Gelman, 2014). All code needed to reproduce the results below is available at https://github.com/ jessalynnsebastian/gauss-markov-rt.
3 Results
3.1 Application to Simulated Respiratory Virus Circulation
3.1.1 Simulation Protocol
We simulated circulation of a respiratory virus from a stochastic Susceptible-Exposed-Infected-RemovedSusceptible (SEIRS) model in R. The SEIRS model is a compartmental model, a class of models that divides a population into compartments between which individuals can transition according to a continuous time Markov chain with certain rate parameters. In this case, the population is divided into susceptible, exposed (infected but not yet infectious), infectious, and removed (recovered, but not yet -
susceptible again). SEIRS dynamics are appropriate here because they capture waning immunity, which is important for realistically simulating case trajectories consistent with respiratory virus circulation. The use of SEIRS, rather than a renewal equation–based simulation, is also relevant: while SEIRS generates realistic epidemic dynamics, these dynamics differ from the renewal equation models we fit, meaning that we introduce a realistic degree of model misspecification. This simulation design a-
llows us to benchmark each prior against known groundtruth Rt trajectories under realistic epidemic dynamics. The simulated scenario lasted one year. The time-varying basic reproduction number, R0(t), which gives the average number of individuals an infected person will go on to infect assuming an entirely susceptible population, was given a fixed trajectory. True Rt for each simulation is obtained by multiplying R0(t) with the time-varying proportion of susceptible individuals in that simulation.-
 Observed case data was generated from a negative binomial distribution with mean proportional to the number of transitions from the E to the I compartment. Note that, as discussed in Section 2.1, this assumes no delay between the transition to
8

the infectious stage and observation of the case; the only delay in observation comes from the time between being infected and becoming infectious. We simulated 100 realisations from this scenario to compare models across a variety of stochastic variations in individual scenarios. Simulation parameters are given in Table B1. The five models described in Section 2.2 were fit to each of these 100 simulated outbreaks and their Rt inference was compared. We additionally fit EpiNow2, using its default-
 prior (HSGP on successive differences in Γt), as it is a commonly used method for Rt inference. It should be noted that their likelihood is very similar to the likelihood used by our other models, though with a few differences. Details on EpiNow2 implementation can be found in Appendix A. We assessed the relative performance of the models using several metrics: the mean absolute deviation (MAD), envelope, and mean credible interval width (MCIW). Taking Rˆt to be the posterior median of Rt, with a-
 time series of length T , these summary statistics are defined as
MAD = 1
T
T
X
i=1
| Rˆi − Ri |,
envelope = 1
T
T
X
i=1
1{Ri ∈ (Rˆi,p1 , Rˆi,p2 )},
MCIW = 1
T
T
X
i=1
(Rˆi,p2 − Rˆi,p1 ),
where 1{·} is the indicator function and Rˆi,pj represents the pjth quantile of the posterior distribution of Ri. This gives us a measure of distance between the point estimate and the truth (MAD), coverage of BCIs (envelope), and precision of inference (MCIW). Here, we take quantiles that yield envelope and MCIW metrics for 80% (p1 = 0.1, p2 = 0.9) and 95% (p1 = 0.025, p2 = 0.975) BCIs.
3.1.2 Simulation Results
All models were fit using rstan v.2.32.7 (Stan Development Team, 2025). For each model, we ran 4 chains of 6000 iterations each and dispensed the first 2000 as burn-in. Each model was fit once to each of the 100 simulated datasets. Table 1 summarises the retrospective performance of the six models across 100 simulated outbreaks. The RW1 prior behaves as expected, producing comparatively wide posterior intervals that almost always contain the truth. Its 95% envelopes approach 1 (99.4% on average), -
and this high coverage comes at the cost of precision: its average MCIW is 1.5–2 times as large as that of many of the other models. RW1’s 80% envelopes cover at a rate even further above nominal, at about 93.8%, and its 80% BCIs are correspondingly wide, at over double the width of those for some of the other models. The RW1 prior allows the posterior to cover the true Rt trajectory but dilutes the usefulness of the inference. The performance of the OU model is quite similar, with high 95% envelo-
pes (99.3% on average) and similar MAD and MCIW to RW1. Though the epidemiological significance of the OU prior’s mean reversion made it seem appealing, it appears to suffer from the same problems as the RW1, and with unneccessary extra complexity. By contrast, the IBM and RW2 priors achieve a better balance between coverage and precision. Both yield coverage close to nominal (93.8% and 95.3%, respectively, for 95% intervals; 79.2% and 82.5% for 80% intervals) while producing substantially narrowe-
r BCIs (95% MCIW 0.22–0.25, 80% MCIW 0.14-0.16) and lower MADs than RW1 or OU. This suggests that their added smoothness relative to RW1 is effective in constraining the posterior without sacrificing coverage. The two HSGP-based approaches also perform well. The HSGP prior produces intervals narrower than RW1 and OU, with average coverage near nominal (92.9% for 95% BCIs, 79.2% for 80% BCIs). EpiNow2 performs especially well in this setting: it achieves the highest average coverage among the smoot-
her priors (97.1% for 95% BCIs, 86.5% for 80% BCIs) and the lowest MAD overall (0.038), with interval widths comparable to IBM. Figure 2 illustrates these differences for an example simulated outbreak. The RW1 and OU models yield broad, less informative intervals, whereas the IBM and RW2 priors constrain uncertainty more effectively while still following the trajectory of the truth. The HSGP and EpiNow2 models similarly provide smooth posterior trajectories with reasonably narrow intervals. Table -
C1, which gives CPU time comparisons for all models, is reported in the Appendix. Computation time was modest overall, with average runtimes between 3 and 6 minutes per fit. RW1, OU, and HSGP were
9

Envelope MAD MCIW
95% BCI 80% BCI 95% BCI 80% BCI
RW1 99.4% (1.3%) 93.8% (4.6%) 0.060 (0.011) 0.445 (0.023) 0.286 (0.015) OU 99.3% (1.3%) 93.7% (4.8%) 0.062 (0.011) 0.463 (0.025) 0.297 (0.016) RW2 95.3% (4.2%) 82.5% (8.0%) 0.047 (0.009) 0.247 (0.014) 0.158 (0.009) IBM 93.8% (5.1%) 79.2% (9.6%) 0.045 (0.009) 0.221 (0.013) 0.141 (0.008) HSGP 92.9% (7.5%) 79.2% (12.8%) 0.056 (0.017) 0.272 (0.016) 0.175 (0.010) EpiNow2 97.1% (5.1%) 86.5% (8.1%) 0.038 (0.009) 0.220 (0.014) 0.141 (0.009)
Table 1: Mean (SD) of three summaries for each model: the envelope (proportion of time the true curve lies inside the 95% or 80% intervals), the median absolute deviation between point estimates and truth (MAD), and the mean width of the 95% and 80% credible intervals (MCIW).
the fastest, followed by RW2, with IBM requiring slightly more time on average. These results demonstrate that the Markov IBM and RW2 combine the ease and speed of RW1 with inferential performance comparable to more complex Gaussian process approximations like HSGP, while remaining straightforward to implement. When inferring Rt in real time, modellers are generally most interested in the most recent Rt inference as opposed to retrospective inference, since current values are the most relevant for-
 informing policy decisions. To reflect this, we evaluated the real-time performance of the six priors separately from their retrospective performance. In reality, real-time inference of Rt is hindered by right truncation of case data; i.e., cases that have occurred by time t, but have not yet been reported and recorded. Estimating and accounting for delays is an active area of research with many creative approaches (Seaman et al., 2022). For the purposes of this project, since we are primarily in-
terested in the relative performances of only the priors of Rt, we treat right truncation as a separate problem outside the scope of this paper and assume no reporting delays are present. Our goal here is to isolate the behaviour of the prior itself, not the method used for delay correction, and omitting reporting delay handling allows us to avoid conflating two distinct sources of uncertainty. To compare the real-time performance of the six models, we first apply each model to the first ten weeks-
 of one of the simulated datasets. Then, we iteratively extend the dataset by adding one additional week of data, applying all models at each step to the progressively longer time series. At each iteration, only the posterior samples of Rt for the most recent time point are retained. In addition to computing the metrics we used in the retrospective analyses, we define a decision “score” motivated by a hypothetical policy setting in which real-time decisions are based on posterior credible interval-
s for Rt. The decision score, as we define it, is the proportion of weeks in which the credible interval correctly indicates whether transmission is increasing or decreasing,
Decision Score = 1
TN
N
X
i=0
1{RˆTi,p1 > 1}1{RTi > 1} + 1{RˆTi,p2 < 1}1{RTi < 1} ,
where N is the number of weeks for which real-time inference is considered, and Ti is the last week of the ith observational period. This measure does not capture the full distributional uncertainty, but instead provides a concise summary of the model’s performance for threshold-based decision making in real time. Figure 3 and Table 2 summarise the models’ real-time performance when applied iteratively to progressively longer simulated datasets as described above. All six priors achieved coverage -
close to or above nominal, with several models (HSGP, OU, and EpiNow2) reaching 100%. The relevant differences are in precision and, by extension, decision-making. The HSGP prior stood out with the lowest mean absolute deviation (MAD = 0.091), high coverage (100% for 95% BCIs, 84.1% for 80% BCIs), and the narrowest credible intervals (0.49 for 95% BCIs, 0.31 for 80% BCIs), reflecting its ability to deliver both accurate point estimates and efficient uncertainty quantification in real time. IBM per-
formed comparably, though not quite as outstandingly, with coverage near nominal (93.2% for 95% BCIs, 75.0% for 80% BCIs), credible intervals of the same size as the HSGP’s (0.50 for 95% BCIs, 0.31 for 80% BCIs), and the highest decision score of all models (84.1%). Retrospectively, posterior credible intervals produced by models using the RW1 and OU priors were the widest overall, leading to over-coverage and reduced precision. In the real-time setting, however, their intervals were still relativ-
ely wide but not nearly as extreme, and this translated into very strong coverage
10

0.0
0.5
1.0
1.5
2.0
2.5
0 20 40
Effective Reproduction
Number
RW1 Posterior
0.0
0.5
1.0
1.5
2.0
2.5
0 20 40
OU Posterior
0.0
0.5
1.0
1.5
2.0
2.5
0 20 40
RW2 Posterior
0.0
0.5
1.0
1.5
2.0
2.5
0 20 40 Week
Effective Reproduction
Number
IBM Posterior
0.0
0.5
1.0
1.5
2.0
2.5
0 20 40 Week
HSGP Posterior
0.0
0.5
1.0
1.5
2.0
2.5
0 20 40 Week
EpiNow2 Posterior
BCI Level 99% BCI 95% BCI 80% BCI Median True Rt
Figure 2: Example posterior Rt plots by prior for one simulated outbreak. True simulated Rt is given in red, and 99%, 95%, and 80% posterior Bayesian credible intervals are shaded in blue. The brown dashed line emphasises the critical value 1, where Rt > 1 implies the outbreak is growing, and Rt < 1 implies the outbreak is shrinking.
11

0
1
2
3
10 20 30 40 50
Effective Reproduction
Number
RW1
0
1
2
3
10 20 30 40 50
OU
0
1
2
3
10 20 30 40 50
RW2
0
1
2
3
10 20 30 40 50 Week
Effective Reproduction
Number
IBM
0
1
2
3
10 20 30 40 50 Week
HSGP
0
1
2
3
10 20 30 40 50 Week
EpiNow2
BCI Level 80% BCI 95% BCI Median True Rt
Figure 3: Visual representation of real-time inference by the six models. True Rt, posterior medians, and corresponding credible intervals are represented with step functions to emphasise that each estimate and its uncertainty correspond to a different iteration of the model, each relying on different data. The truth is given in red.
12

(98–100% for 95% BCIs, 77-82% for 80% BCIs) and reasonably high decision scores. In other words, the drawbacks of RW1 and OU are much more prominent when we are interested in inference on the entire Rt trajectory, whereas in real-time monitoring they perform somewhat competitively. EpiNow2 also presented an interesting contrast here; it achieved perfect coverage across simulations but with by far the widest intervals across models (0.72 for 95% BCIs, 0.46 for 80% BCIs). This suggests that the Epi-
Now2 approach of differencing, where the HSGP prior is placed on successive differences in Γt, is better-suited for retrospective inference than for real-time inference. The real-time performance of RW2 in some sense seconds this suggestion (as it is also a method of differencing: the RW2 is just the RW1 on differences in Γt), with real-time credible intervals wider than the OU or RW1 despite much higher precision in the retrospective study.
Real-Time Coverage MAD MCIW Decision Score
95% BCI 80% BCI 95% BCI 80% BCI 95% BCI 80% BCI
RW1 97.7% 77.3% 0.118 0.565 0.357 77.3% 88.6% OU 100.0% 81.8% 0.114 0.553 0.347 81.8% 88.6% RW2 95.5% 77.3% 0.112 0.577 0.367 81.8% 90.9% IBM 93.2% 75.0% 0.119 0.498 0.313 84.1% 93.1% HSGP 100.0% 84.1% 0.091 0.491 0.313 79.5% 90.9% EpiNow2 100.0% 86.4% 0.106 0.722 0.455 72.7% 84.1%
Table 2: Summary of real-time model performance for one simulated dataset. Refer to Table 1 for definitions of abbreviations. At each time point we evaluate only the most recent posterior Rt inference, so there is only one value of each metric per time point. Because these quantities are not sampled across replicated datasets, there is no Monte Carlo variability in the sense used in the 100-dataset simulation study; therefore we do not report standard deviations in this table.
Across both retrospective and real-time analyses, we see a consistent pattern. The RW1 and OU priors provide high coverage but at the cost of reduced precision. The HSGP delivers high coverage and precision retrospectively and in real time, but is more challenging to implement. IBM combines the strengths of both approaches: it is computationally efficient, straightforward to implement, and produces posterior inference that is precise, well-calibrated, and effective for monitoring transmission dyna-
mics both retrospectively and in real time.
3.2 Application to Data from the Counties of Los Angeles and San Francisco, California
We compare the results of applying the six models described in Section 2.2 to data from two California counties: Los Angeles and San Francisco. These two counties are major population hubs in the state, but their populations and densities are quite different. Los Angeles is the most populated county in the country, at around 10 million residents, who are spread over a wide area (over 12,000 square kilometers). San Francisco has a much smaller population, but it is much denser: all 800,000 resident-
s live within about 120 square kilometers. The data used in these analyses were time series of cases (ordered by the date of their polymerase chain reaction, or PCR, test) reported between mid-June of 2020 and mid-February of 2021, and available at the California Open Data portal (California Open Data Portal, 2024). To apply our renewal equation-based models to real case data, we need to choose a generation time distribution, a latent period distribution to use as a delay distribution, and priors -
for case overdispersion κ, ascertainment rate ρ, and the mean-variance relationship for latent incidence ν. The choice of generation time distribution is a challenge, partly because it is difficult to estimate, partly because different variants of the same pathogen may have different intrinsic generation times, and partly because in reality, generation time would change with depletion of susceptible individuals in the population. In renewal equation-based models, it is known that longer assumed me-
an generation times lead to greater amplitude of estimates away from 1; that is, Rt estimates larger than 1 are increased and Rt estimates less than 1 are decreased (Wallinga and Lipsitch, 2007). Based on the work of Hart et al. (2022), Park et al. (2023), and Manica et al. (2022), we use a Gamma generation time distribution with a mean of 4.6 days and a standard deviation of 1.2 days. For the latent period distribution, we take the estimate of Xin et al.
13

(2021), which has a mean of 5.5 days and a standard deviation of 2.5 days. Changing the mean latent period primarily affects the timing of the Rt inference, i.e., translates it forward or backward in time. We do not anticipate significant effects of the choice of these distributions of the relative differences between the Rt posteriors for the 6 models. The choice of κ is briefly discussed in Section 2.1, and is further discussed in Appendix D.1. A complete list of priors can be found in Table B2-
.
3.2.1 Retrospective Analyses
Los Angeles San Francisco
RW2
EpiNow2
21
ar2021
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
Date
GRW
95% BCI 80% BCI Median
IBM RW2
OU EpiNow2
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
Date
HSGP
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
Date
GRW
BCI Level 99% BCI 95% BCI 80% BCI Median
0.0
0.5
1.0
1.5
2.0
Effective Reproduction
Number
RW1 OU
0.0
0.5
1.0
1.5
2.0
Effective Reproduction
Number
RW2 IBM
0.0
0.5
1.0
1.5
2.0
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
Date
Effective Reproduction
Number
HSGP
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
Date
EpiNow2
BCI Level 99% BCI 95% BCI 80% BCI Median
RW1 OU
RW2 IBM
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
Date
HSGP
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
Date
EpiNow2
BCI Level 99% BCI 95% BCI 80% BCI Median
Figure 4: Posterior Rt inference for Los Angeles County and San Francisco County from June 2020 to February 2021 under six priors. Solid black lines show posterior medians, dashed brown lines denote the critical value 1, and shaded blue bands represent 80%, 95%, and 99% Bayesian credible intervals.
Figure 4 summarizes the retrospective analyses using all six models for each of Los Angeles and San Francisco counties. All models captured the broad features of the COVID-19 pandemic in Los Angeles during 2020–2021, including a period of relatively stable transmission through summer and early fall, followed by a steep increase in Rt during November and December 2020 that peaked at around 1.5 before declining in early 2021. Consistent with the simulation study, RW1 and OU produced the widest 95% c-
redible intervals, often spanning values well above and below one, while IBM and RW2 yielded narrower intervals that tracked a similar trajectory. The HSGP and EpiNow2 estimates were similar in smoothness to IBM and RW2 and produced similarly narrow credible intervals, to varying degrees. In San Francisco, where case counts were much smaller, the models again agreed on the major features; relatively modest transmission through summer and fall is seen, followed by a rise above one in December
14

2020 and a decline in early 2021. Differences across priors were more pronounced than in Los Angeles. RW1 and OU yielded very wide intervals that at times obscured the shape of the trajectory. IBM, RW2, HSGP, and EpiNow2 are more certain, to varying degrees. All models recovered the winter 2020–2021 surge, but EpiNow2 produced a visibly smaller peak than the other models. This could be related to a number of factors, including higher-order smoothing and a deterministic renewal specification (see -
Appendix A). A similar, though less extreme, difference is noticeable in the simulation study results. Importantly, despite the lower peak height for EpiNow2, all models agreed that Rt exceeded 1 during the surge. Ignoring differences in uncertainty, the priors gave a consistent narrative of transmission dynamics in this large-population setting.
3.2.2 Real-Time Analyses
RW2
EpiNow2
10 20 30 Week
RW1
Level 80% BCI 95% BCI
IBM RW2
OU EpiNow2
10 20 30 Week
HSGP
10 20 30 Week
RW1
Legend Median BCI Level 80% BCI 95% BCI
Los Angeles San Francisco
0.0
0.5
1.0
1.5
2.0
2.5
Effective Reproduction
Number
RW1 OU
0.0
0.5
1.0
1.5
2.0
2.5
Effective Reproduction
Number
RW2 IBM
0.0
0.5
1.0
1.5
2.0
2.5
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
Date
Effective Reproduction
Number
HSGP
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
Date
EpiNow2
Legend Median BCI Level 80% BCI 95% BCI
RW1 OU
RW2 IBM
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
Date
HSGP
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
Date
EpiNow2
Legend Median BCI Level 80% BCI 95% BCI
Figure 5: Real-time inference of Rt for Los Angeles County and San Francisco County, updated weekly through February 2021. Solid black lines show posterior medians, dashed brown lines denote the critical value 1, and shaded blue bands represent 80% and 95% Bayesian credible intervals.
Figure 5 gives a visual summary of the real-time inference of the six models in Los Angeles County and San Francisco County. In Los Angeles, the real-time analyses showed general consistency across all models, with the exception of EpiNow2, which maintains the more uncertain real-time behaviour observed in the simulation study. Each other model’s 95% credible interval for Rt rose above one by late November 2020 and remained there throughout December, clearly signaling growing transmission. The dif-
ferences that were more visible in retrospective fits were much less pronounced in the real-time setting. In practice, a policymaker relying on any of these priors would have received the same actionable signal, with the exception of possibly
15

the EpiNow2 model: transmission was increasing rapidly and Rt was well above threshold. This suggests that in large populations with high case counts, the choice of prior has less influence on real-time inference. The lower case counts in San Francisco made the decision problem across priors more interesting. IBM, RW2, and HSGP produced credible intervals that crossed the 1.0 threshold quickly in December, supporting early inference that the outbreak was growing. RW1 and OU again yielded wider in-
tervals, but during the surge their posteriors still lay mostly above one, which would have led to the same decision albeit with less certainty. EpiNow2 models, by contrast, produced trajectories with wider credible intervals that often overlapped the critical value 1 for longer time periods.
4 Discussion
We compared several Gaussian process priors with Markov properties for modelling Rt and evaluated their performance relative to widely used alternatives, including current state-of-the-art. In retrospective analyses, the IBM prior, HSGP approximation to a Gaussian process prior with a Mat ́ern kernel, and RW2 prior for Rt produced well-calibrated posterior inference that balanced coverage of the true simulated Rt trajectory with precision. The OU process prior and the widely-used RW1 prior over-co-
vered the truth with unnecessarily wide posterior credible intervals. Popular epidemic modeling package EpiNow2 performed well, with conservative inference that still managed to outperform other models in terms of precision. Interestingly, these results did not hold true when the focus is shifted to real-time Rt inference, where only the most recent Rt inference is of interest. In real time, while IBM and HSGP maintained near-nominal coverage and high precision, EpiNow2 and RW2 models suffered sli-
ghtly: though their coverage was nominal (or even above nominal, in the case of EpiNow2), their real-time inference had the lowest and second-lowest precision, respectively, across the models in this study. Both RW1 and OU performed comparably to, if not slightly better than, the RW2 in this setting, and far outperformed EpiNow2 in terms of precision. This is a complete reversal from the retrospective setting. The precise real-time inference using IBM and HSGP would have provided more information -
about transmission dynamics in the midst of an outbreak than the inference of EpiNow2, RW2, OU, and RW1. A key contribution of this work is to demonstrate the practical value of representing IBM jointly with its corresponding Brownian motion, both as a prior for Rt specifically and for Bayesian smoothing in general. The IBM prior yields performance on par with HSGP, but using the Markov formulation it is conceptually simpler and only modestly slower to fit; compared with exact Mat ́ern Gaussian pr-
ocesses, it is substantially more efficient. The Markov representation of IBM also lends itself easily to extensions that are either not possible or considerably more complex under other priors. For example, to allow IBM to be locally adaptive (adaptive to changes in the smoothness of the underlying function), we could let the parameter σ vary with time, similar to (Yue et al., 2014). RW2, IBM’s discrete-time counterpart, can be made locally adaptive, but because it is defined only on a regular gr-
id, extending it to allow a smoothly varying notion of local roughness is more cumbersome (Lindgren and Rue, 2008; Faulkner and Minin, 2018). The continuous-time formulation of IBM makes this type of extension more natural. A number of locally adaptive smoothing methods have been developed for time series analysis (Faulkner and Minin, 2018; Schafer and Matteson, 2023) with applications in economics, epidemiology, astronomy, and obstetrics (Elagin, 2008; Faulkner et al., 2020; Politsch et al., 2020-
; Elovitz et al., 2019). A locally adaptive IBM prior could provide a conceptually straightforward and computationally tractable addition to this toolkit. One limitation of this paper is that we only considered renewal models. Priors may behave differently under alternative model structures, such as ODE-based compartmental models (Kermack and McKendrick, 1927; Keeling and Rohani, 2008; Tang et al., 2020) or branching process formulations (Ball and Donnelly, 1995; Blumberg and Lloyd-Smith, 2013), f-
or example. This is also the case for other types of data streams: our simulations in this study only address reported case data, but Rt can also be inferred from hospitalization data and/or wastewater pathogen concentration data, among others (Sherratt et al., 2021; Huisman et al., 2022; Goldstein et al., 2024). It is not entirely clear whether our results in this paper will extend directly to other types of epidemic models or data streams. The models used in this paper also inherit the usual lim-
itations of discrete-time renewal approaches. Renewal models assume a fixed and known generation time, but in reality generation times vary and can and do change over the course of an epidemic (Xu et al., 2023). In addition, when significant probability mass of the generation time distribution is less than the time interval between observations, renewal models necessarily treat adjacent time points as close to independent, making it increasingly difficult to identify Rt as the generation time gets-
 shorter relative to the time step. Nonetheless, it is encouraging that in our simulation study, the renewal models performed well overall, a finding reflected in many other studies (Gostic et al., 2020; Nash et al., 2022; Bhatt et al., 2023).
16

Our findings emphasise that the choice of prior on Rt meaningfully shapes posterior inference and should not be treated only as a technical afterthought. Priors are a tool for embedding epidemiological knowledge into models, and careful prior selection is an essential component of robust Rt inference. The widely used RW1 prior remains a reasonable baseline when data are highly informative, but our results show that IBM yields more precise inference in noisier settings with only modest increase in-
 computational cost. IBM performs comparably to Gaussian process approximation methods such as HSGP, but it is easier to implement and extend, and it is substantially faster than an exact Mat ́ern formulation. These features make IBM a promising choice for practical Rt inference.
Acknowledgments
This work was supported in part by the National Institutes of Health grant R01-AI170204.
References
S. Abbott, J. Hellewell, K. Sherratt, K. Gostic, J. Hickson, H. S. Badr, M. DeWitt, J. M. Azam, and S. Funk. EpiNow2: Estimate Real-Time Case Counts and Time-Varying Epidemiological Parameters, 2024a. URL https://epiforecasts.io/EpiNow2/. Last accessed on: 2025-07-31.
S. Abbott, A. Lison, S. Funk, C. Pearson, H. Gruson, F. Guenther, and M. DeWitt. epinowcast: Flexible Hierarchical Nowcasting, 2024b. Last accessed on: 2025-03-31.
R. M. Anderson. The Impact of Vaccination on the Epidemiology of Infectious Diseases. Elsevier, 2 edition, 2016. doi: 10.1016/B978-0-12-802174-3.00001-1.
F. Ball and P. Donnelly. Strong approximations for epidemic models. Stochastic Processes and their Applications, 55(1):1–21, 1995. doi: 10.1016/0304-4149(94)00034-Q.
S. Bhatt, N. Ferguson, S. Flaxman, A. Gandy, S. Mishra, and J. A. Scott. Semi-mechanistic Bayesian modelling of COVID-19 with renewal processes. Journal of the Royal Statistical Society Series A: Statistics in Society, 186(4):601–615, 2023. doi: 10.1093/jrsssa/qnad030.
S. Blumberg and J. O. Lloyd-Smith. Inference of R0 and transmission heterogeneity from the size distribution of stuttering chains. PLoS Computational Biology, 9(5), 2013. doi: 10.1371/journal.pcbi.1002993.
California Open Data Portal, 2024. URL https://data.ca.gov/dataset/ covid-19-time-series-metrics-by-county-and-state-archived/resource/ 246e823b-4ce9-4258-a3cd-88aecd8744de. Last accessed on: 2025-02-07.
E. Conway and I. Mueller. Joint estimation of the effective reproduction number and daily incidence in the presence of aggregated and missing data, 2024. doi: 10.1101/2024.06.06.24308584.
A. Cori and A. Kucharski. Inference of epidemic dynamics in the COVID-19 era and beyond. Epidemics, 48:100784, 2024. doi: 10.1016/j.epidem.2024.100784.
A. Cori, C. A. Donnelly, I. Dorigatti, N. M. Ferguson, C. Fraser, T. Garske, T. Jombart, G. Nedjati-Gilani, P. Nouvellet, S. Riley, M. D. Van Kerkhove, H. L. Mills, and I. M. Blake. Key data for outbreak evaluation: building on the Ebola experience. Philosophical Transactions of the Royal Society B: Biological Sciences, 372(1721):20160371, 2017. doi: 10.1098/rstb.2016.0371.
M. Elagin. Locally adaptive estimation methods with application to univariate time series. arXiv, 2008. doi: 10.48550/arxiv.0812.0449.
M. A. Elovitz, P. Gajer, V. Riis, A. G. Brown, M. S. Humphrys, J. B. Holm, and J. Ravel. Cervicovaginal microbiota and local immune response modulate the risk of spontaneous preterm delivery. Nature Communications, 10(1):1305, 2019. doi: 10.1038/s41467-019-09285-9.
L. Fahrmeir and L. Knorr-Held. Dynamic and semiparametric models, 1997. Collaborative Research Center 386, Discussion Paper 76. doi: 10.5282/ubm/epub.1470.
17

J. R. Faulkner and V. N. Minin. Locally adaptive smoothing with Markov random fields and shrinkage priors. Bayesian Analysis, 13(1), 2018. doi: 10.1214/17-BA1050.
J. R. Faulkner, A. F. Magee, B. Shapiro, and V. N. Minin. Horseshoe-based Bayesian nonparametric estimation of effective population size trajectories. Biometrics, 76(3):677–690, 2020. doi: 10.1111/biom.13276.
C. Fraser. Estimating individual and household reproduction numbers in an emerging epidemic. PLoS ONE, 2(8):e758, 2007. doi: 10.1371/journal.pone.0000758.
C. W. Gardiner. The Ornstein-Uhlenbeck Process. Springer-Verlag, 2 edition, 1985.
I. H. Goldstein, J. Wakefield, and V. M. Minin. Incorporating testing volume into estimation of effective reproduction number dynamics. Journal of the Royal Statistical Society Series A: Statistics in Society, 187(2):436–453, 2023. doi: 10.1093/jrsssa/qnad128.
I. H. Goldstein, D. M. Parker, S. Jiang, and V. M. Minin. Semiparametric inference of effective reproduction number dynamics from wastewater pathogen surveillance data. Biometrics, 80(3):ujae074, 2024. doi: 10.1093/biomtc/ujae074.
K. M. Gostic, L. McGough, E. B. Baskerville, S. Abbott, K. Joshi, C. Tedijanto, R. Kahn, R. Niehus, J. A. Hay, P. M. De Salazar, J. Hellewell, S. Meakin, J. D. Munday, N. I. Bosse, K. Sherrat, R. N. Thompson, L. F. White, J. S. Huisman, J. Scire, S. Bonhoeffer, T. Stadler, J. Wallinga, S. Funk, M. Lipsitch, and S. Cobey. Practical considerations for measuring the effective reproductive number, Rt. PLOS Computational Biology, 16(12):e1008409, 2020. doi: 10.1371/journal.pcbi.1008409.
W. S. Hart, E. Miller, N. J. Andrews, P. Waight, P. K. Maini, S. Funk, and R. N. Thompson. Generation time of the Alpha and Delta SARS-COV-2 variants: An epidemiological analysis. The Lancet Infectious Diseases, 22(5):603–610, 2022. doi: 10.1016/s1473-3099(22)00001-9.
M. D. Hoffman and A. Gelman. The no-u-turn sampler: Adaptively setting path lengths in hamiltonian monte carlo. Journal of Machine Learning Research, 15(47):1593–1623, 2014.
J. S. Huisman, J. Scire, L. Caduff, X. Fernandez-Cassi, P. Ganesanandamoorthy, A. Kull, A. Scheidegger, E. Stachler, A. B. Boehm, B. Hughes, A. Knudson, A. Topol, K. R. Wigginton, M. K. Wolfe, T. Kohn, C. Ort, T. Stadler, and T. R. Julian. Wastewater-based estimation of the effective reproductive number of SARS-CoV-2. Environmental Health Perspectives, 130(5):057011, 2022. ISSN 0091-6765, 1552-9924. doi: 10.1289/EHP10050.
S. Jin, M. Tay, L. C. Ng, J. C. C. Wong, and A. R. Cook. Combining wastewater surveillance and case data in estimating the time-varying effective reproduction number. Science of The Total Environment, 928: 172469, 2024. doi: 10.1016/j.scitotenv.2024.172469.
M. J. Keeling and P. Rohani. Modeling Infectious Diseases in Humans and Animals. Princeton University Press, 2008. ISBN 978-0-691-11617-4.
W. Kermack and A. McKendrick. A contribution to the mathematical theory of epidemics. Proceedings of the Royal Society of London. Series A, Containing Papers of a Mathematical and Physical Character, 115 (772):700–721, 1927. doi: 10.1098/rspa.1927.0118.
F. Lindgren and H. Rue. On the second-order random walk model for irregular locations. Scandinavian Journal of Statistics, 35(4):691–700, 2008. doi: 10.1111/j.1467-9469.2008.00610.x.
H. Liu, Y.-S. Ong, X. Shen, and J. Cai. When Gaussian process meets big data: a review of scalable GPs. IEEE Transactions on Neural Networks and Learning Systems, 31(11):4405–4423, 2020. doi: 10.1109/ TNNLS.2019.2957109.
M. Manica, A. De Bellis, G. Guzzetta, P. Mancuso, M. Vicentini, F. Venturelli, A. Zerbini, E. Bisaccia, M. Litvinova, F. Menegale, and et al. Intrinsic generation time of the SARS-COV-2 Omicron variant: An observational study of household transmission. The Lancet Regional Health - Europe, 19:100446, 2022. doi: 10.1016/j.lanepe.2022.100446.
18

R. K. Nash, P. Nouvellet, and A. Cori. Real-time estimation of the epidemic reproduction number: Scoping review of the applications and challenges. PLOS Digital Health, 1(6):e0000052, 2022. doi: 10.1371/journal. pdig.0000052.
Y. Niu, Z. Li, L. Meng, S. Wang, Z. Zhao, T. Song, J. Lu, T. Chen, Q. Li, and X. Zou. The collaboration between infectious disease modeling and public health decision-making based on the COVID-19. Journal of Safety Science and Resilience, 2(2):69–76, 2021.
K. V. Parag. Improved estimation of time-varying reproduction numbers at low case incidence and between epidemic waves. PLOS Computational Biology, 17(9), 2021. doi: 10.1371/journal.pcbi.1009347.
S. W. Park, K. Sun, S. Abbott, R. Sender, Y. M. Bar-on, J. S. Weitz, S. Funk, B. T. Grenfell, J. A. Backer, J. Wallinga, and et al. Inferring the differences in incubation-period and generation-interval distributions of the Delta and Omicron variants of SARS-COV-2. Proceedings of the National Academy of Sciences, 120(22), 2023. doi: 10.1073/pnas.2221887120.
C. A. Politsch, J. Cisewski-Kehe, R. A. C. Croft, and L. Wasserman. Trend filtering – I. A modern statistical tool for time-domain astronomy and astronomical spectroscopy. Monthly Notices of the Royal Astronomical Society, 492(3):4005–4018, 2020. doi: 10.1093/mnras/staa106.
C. E. Rasmussen and C. K. I. Williams. Gaussian Processes for Machine Learning, chapter 8. MIT Press, 2008.
G. Riutort-Mayol, P.-C. Bu ̈rkner, M. R. Andersen, A. Solin, and A. Vehtari. Practical Hilbert space approximate Bayesian Gaussian processes for probabilistic programming. Statistics and Computing, 33(1), 2022. doi: 10.1007/s11222-022-10167-2.
H. Rue and L. Held. Gaussian Markov Random Fields Theory and Applications. Chapman & Hall/CRC, 2005. doi: 10.1201/9780203492024.
T. L. J. Schafer and D. S. Matteson. Locally adaptive shrinkage priors for trends and breaks in count time series. arXiv, 2023. doi: 10.48550/arxiv.2309.00080.
J. A. Scott, A. Gandy, S. Mishra, J. Unwin, S. Flaxman, and S. Bhatt. epidemia: Modeling of epidemics using hierarchical Bayesian models, 2020. URL https://imperialcollegelondon.github.io/epidemia/. R package version 1.0.0.
S. R. Seaman, A. Presanis, and C. Jackson. Estimating a time-to-event distribution from right-truncated data in an epidemic: A review of methods. Statistical Methods in Medical Research, 31(9):1641–1655, 2022. doi: 10.1177/09622802211023955.
K. Sherratt, S. Abbott, S. R. Meakin, J. Hellewell, J. D. Munday, N. Bosse, CMMID COVID-19 Working Group, M. Jit, and S. Funk. Exploring surveillance data biases when estimating the reproduction number: with insights into subpopulation transmission of COVID-19 in England. Philosophical Transactions of the Royal Society B: Biological Sciences, 376(1829), 2021. doi: 10.1098/rstb.2020.0283.
A. Solin and S. S ̈arkk ̈a. Hilbert space methods for reduced-rank Gaussian process regression. Statistics and Computing, 30(2):419–446, 2019. doi: 10.1007/s11222-019-09886-w.
Stan Development Team. RStan: the R interface to Stan, 2025. URL https://mc-stan.org/. R package version 2.32.7.
K. Systrom, T. Vladek, and M. Krieger. Rt.live. https://github.com/rtcovidlive/covid-model, 2020. Last accessed on: 2024-10-20.
L. Tang, Y. Zhou, L. Wang, S. Purkayastha, L. Zhang, J. He, F. Wang, and P. X. Song. A review of multi-compartment infectious disease models. International Statistical Review, 88(2):462–513, 2020. doi: 10.1111/insr.12402.
M. D. Van Kerkhove and N. M. Ferguson. Epidemic and intervention modelling–a scientific rationale for policy decisions? Lessons from the 2009 influenza pandemic. Bulletin of the World Health Organization, 90(4):306–310, 2012. doi: 10.2471/BLT.11.097949.
19

G. Wahba. Improper priors, spline smoothing and the problem of guarding against model errors in regression. Journal of the Royal Statistical Society Series B: Statistical Methodology, 40(3):364–372, 1978. doi: 10. 1111/j.2517-6161.1978.tb01050.x.
J. Wallinga and M. Lipsitch. How generation intervals shape the relationship between growth rates and reproductive numbers. Proceedings of the Royal Society B: Biological Sciences, 274(1609):599–604, 2007. doi: 10.1098/rspb.2006.3754.
W. E. Wecker and C. F. Ansley. The signal extraction approach to nonlinear regression and spline smoothing. Journal of the American Statistical Association, 78(381):81–89, 1983. doi: 10.2307/2287113.
H. Xin, Y. Li, P. Wu, Z. Li, E. H. Y. Lau, Y. Qin, L. Wang, B. J. Cowling, T. K. Tsang, and Z. Li. Estimating the latent period of coronavirus disease 2019 (COVID-19). Clinical Infectious Diseases, 74(9):1678–1681, 2021. doi: 10.1093/cid/ciab746.
X. Xu, Y. Wu, A. G. Kummer, Y. Zhao, Z. Hu, Y. Wang, H. Liu, M. Ajelli, and H. Yu. Assessing changes in incubation period, serial interval, and generation time of SARS-CoV-2 variants of concern: a systematic review and meta-analysis. BMC Medicine, 21(1):374, 2023. doi: 10.1186/s12916-023-03070-8.
Y. R. Yue, D. Simpson, F. Lindgren, and H. Rue. Bayesian adaptive smoothing splines using stochastic differential equations. Bayesian Analysis, 9(2), 2014. doi: 10.1214/13-BA866.
Z. Zhang, A. Stringer, P. Brown, and J. Stafford. Model-based smoothing with integrated Wiener processes and overlapping splines. Journal of Computational and Graphical Statistics, 33(3):883–895, 2024. doi: 10.1080/10618600.2023.2289532.
20

Appendices
A EpiNow2 Comparison Details
EpiNow2 estimates infections and the effective reproduction number Rt via a discrete renewal model, similar to the models defined in Section 2.1. Letting It denote true incidence on day t and gs the discretised generation time probability mass for lag s:
It = Rt
t−1
X
j=−n
gt−j Ij ,
where the most relevant difference as compared to the incidence model used in this paper is the use of deterministic incidence, as opposed to stochastic. Here, It is equal to Rt
Pt−1
j=−n gt−j Ij , whereas in the
model described in 2.1, Rt
Pt−1
j=−n gt−jIj is the mean of a gamma distribution. This likely did not make much of a difference for the examples in this paper, but would make for noticeably different inference in small-population settings. As in the other models described in this paper, observed counts Ot are linked to infections by discrete convolutions with delay distributions and a likelihood (by default, negative binomial with optional day-ofweek effects). The model includes an initial seeding window preceding the first obser-
vation in order to supply infection history for the renewal equation. By default, EpiNow2 places a multivariate normal prior on the first-order differences of the latent log reproduction number, ∆Γ = (Γ2 − Γ1, Γ3 − Γ2, . . . , ΓT − ΓT −1),
so that the vector of differences ∆Γ has mean zero and a covariance structure motivated by a Mat ́ern 3/2 kernel. This covariance matrix is not used in full; instead, EpiNow2 uses a Hilbert space Gaussian process (HSGP) approximation to represent the Mat ́ern covariance in low rank on a bounded domain. The initial reproduction number has a separate prior (by default, log-normal on the original scale, as with the models in Section 2.1). Probability densities for generation times and delays are disc-
retised and passed as vectors. Because EpiNow2’s discretised renewal equation excludes same-day transmission, the generation-time mass at day 0 must be set to zero and the distribution renormalised over s ≥ 1. We modelled Rt at a weekly time scale with Rt piecewise-constant by week. While it is possible to treat EpiNow2’s discrete time steps as weeks rather than days, the lack of support for probability mass at g0 causes problems here for almost all respiratory viruses, since their generation time-
s tend to be shorter than one week. Instead, to run EpiNow2 with weekly reports, we used their fill missing() function, which provides support for regular non-daily reporting patterns. This does, however, hinder EpiNow2 in terms of CPU time, since its latent time series to model are seven times as long as in the other models used in this paper. To compare EpiNow2’s daily inference to our weekly estimands, we aggregate their daily Rt to weekly. Let t index days and let TW be the set of days in week-
 W . Then IW = P
t∈TW It.
We then define the weekly effective reproduction number RW to be the value that preserves the renewal equation when collapsing multiple days to a single weekly bin: IW ≡ RW
P
t∈TW
Pt−1
j=−n gt−j Ij . Then RW
is given by
RW = IW
P
t∈TW
Pt−1
j=−n gt−j Ij
=
P
t∈TW It
P
t∈TW
Pt−1
j=−n gt−j Ij
=
P
t∈TW Rt
Pt−1
j=−n gt−j Ij
P
t∈TW
Pt−1
j=−n gt−j Ij
.
We compute RW per posterior draw using EpiNow2’s daily draws of (Rt, It) and the same gs. Under purely weekly data, EpiNow2’s daily Rt within a week is weakly identified and driven primarily by the stochastic process prior; aggregating via the weekly RW yields a fair basis for comparison that respects the renewal equation on a weekly timescale. For further details on EpiNow2’s modelling framework and default settings, see https://epiforecasts. io/EpiNow2/index.html.
21

B Simulation Study Parameters, Priors and Diagnostics
B.1 Simulation Parameters
Weekly simulated case data was generated from transitions from the E to the I compartment of a stochastic SEIRS model using a negative binomial distribution. The parameters of the SEIRS model were:
Parameter Interpretation Value
N Population Size 600,000 I0 Initial Infectious 50
βt
Time-Varying
Transmission Rate See figure below 1/σ Mean latent
period (weeks) 4/7 1/γ Mean infectious
period (weeks) 7.5/7 1/ω Mean duration of
immunity (weeks) 12
Table B1: Parameters used in the SEIRS simulation.
Transmission rate βt was given the time varying functional form displayed in Figure B1.
0
1000
2000
3000
4000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
RW1
0
1000
2000
3000
4000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
OU
0
1000
2000
3000
4000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
RW2
0
1000
2000
3000
4000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
IBM
0
1000
2000
3000
4000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
HSGP
Posterior Predictive Interval 99% BCI 95% BCI 80% BCI Median
Figure B1: Time-varying transmission rate in the simulation study.
Case data were generated from weekly counts of transitions from the E to the I compartment (E2I). Cases are generated by Ot ∼ Negative Binomial(μ, κ), where the mean μ is the ascertainment rate ρ multiplied by the E2I for time t, and κ = 5 is the overdispersion, where κ → ∞ implies a Poisson distribution.
22

Parameter Model Prior
ν All LogNormal(-2, 0.7) λ All Exponential(0.3) ρ All LogNormal(-3.00, 0.3) κ All Truncated-Normal(70, 80) log R1 All Normal(0, 0.5) σ RW1 LogNormal(-0.6, 0.6) σ OU LogNormal(-2.6, 0.6) θ OU Exp(1) σ IBM LogNormal(-0.5, 0.6) σ RW2 LogNormal(-2, 0.6) σ HSGP LogNormal(-0.6, 0.6) l HSGP Gamma(100, 20)
Table B2: Priors for hyperparameters in the simulation study.
B.2 Priors for Models Fit to Simulated Data
Table B2 gives the priors used for the models fit to the simulated data. The number of basis functions M and boundary scale c for the HSGP were chosen using the procedure from (Riutort-Mayol et al., 2022). They were checked once for one simulation and then again for each county. Letting lmean be the mean length scale and d be the length of the time series, we had c = max{4.5 · lmean/(d/2), 1.2} and M = 3.45 · c · (d/2)/lmean.
B.3 MCMC Convergence for Models fit to Simulated Data
We evaluated MCMC convergence primarily through traceplots, minimum ESS, and maximum Rhat. Convergence was deemed satisfactory if Rhat values were below 1.05, and an effective sample size greater than 250 was considered sufficient. Figure B2 summarises the minimum ESS and Rhat values for all MCMC runs in the simulation study, as traceplots are space-inefficient.
23

0
10
20
30
40
50
0
20
40
60
0
25
50
75
0
20
40
60
RW1 OU RW2 IBM HSGP
0 250 500 750 0 250 500 750 0 250 500 750 0 250 500 750 0 250 500 750
0
20
40
60
Min ESS
0
50
100
150
200
0
50
100
150
200
0
50
100
150
200
0
50
100
150
RW1 OU RW2 IBM HSGP
1.00 1.04 1.08 1.12 1.00 1.04 1.08 1.12 1.00 1.04 1.08 1.12 1.00 1.04 1.08 1.12 1.00 1.04 1.08 1.12
0
50
100
150
Max Rhat
Figure B2: Histograms of minimum effective sample size (ESS) and maximum R-hat for the 100 simulated dataset fits.
24

C CPU Time Comparisons for Models fit to Simulated Data
Average Time [Minimum Time, Maximum Time]
RW1 3.08 [1.65, 6.10] OU 3.34 [1.79, 5.08] RW2 4.06 [2.15, 5.95] IBM 6.41 [2.05, 9.82] HSGP 3.48 [1.97, 5.10] EpiNow2 227.97 [81.15, 276.90]
Table C1: Mean (minimum, maximum) of CPU time (in minutes) for each model fit in the simulation study (100 models each). These models were fit on a time series of length 53 (weeks), with the exception of EpiNow2, which had to be fit to a time series of length 371 (see Appendix Section A for details.)
25

D Real Data Analysis Details
D.1 Prior for κ in the Analysis of San Francisco and Los Angeles Counties
The priors used in the real data analyses were mostly retained from the simulation study, with the exception of κ, the overdispersion of the negative binomial observation model. We follow the method of Goldstein et al. (2023). Using brms, a Bayesian thin plate regression spline is fit to the time series of cases. The prior for κ is then constructed using the 2.5% and 97.5% quantiles of posterior samples by minimising the squared difference between those quantiles and quantiles from a candidate tru-
ncated normal distribution, optimising the mean and standard deviation. Using synthetic data, the spline model can be fit to simulated data that are not directly used in the analysis. With real data, the spline can be fit to a location which is expected to be similar to the one for which the models will be run. For the purposes of this analysis, the spline model was fit to time series data from the same counties, but from a different time period for each.
D.2 Prior vs. Posterior Plots for Time-Invariant Parameters
D.2.1 Prior vs. Posterior Plots for Los Angeles County Analysis
26

0
2
4
0.0 0.5 1.0 1.5 2.0 2.5
Density
ν
0
5
10
15
0.1 0.2
ρ
0.000
0.005
0.010
0 50 100 150 200 250
κ
0
1
2
3
−2 −1 0 1 2
log(R_1)
0
1
2
0246
σ
RW1
0
2
4
0.0 0.5 1.0 1.5 2.0
Density
ν
0
5
10
15
0.1 0.2
ρ
0.000
0.005
0.010
0 100 200
κ
0
1
2
3
−2 −1 0 1 2
log(R_1)
0
5
10
15
0.0 0.2 0.4 0.6 0.8
σ
0.0
2.5
5.0
7.5
0.00 0.25 0.50 0.75
θ
OU
0
1
2
3
4
5
0123
Density
ν
0
5
10
15
0.1 0.2 0.3
ρ
0.000
0.005
0.010
0.015
0 100 200
κ
0
1
2
3
4
5
−2 −1 0 1 2
log(R_1)
0
10
20
30
0.0 0.5 1.0 1.5
σ
RW2
0
2
4
0.0 0.5 1.0 1.5 2.0
Density
ν
0
5
10
15
0.1 0.2 0.3
ρ
0.000
0.005
0.010
0.015
0 100 200
κ
0
1
2
3
4
5
−2 −1 0 1 2
log(R_1)
0
5
10
02468
σ
IBM
0
2
4
0.0 0.5 1.0 1.5
Density
ν
0
5
10
15
0.050.100.150.200.25
ρ
0.000
0.005
0.010
0.015
0 100 200
κ
0
1
2
3
4
−2 −1 0 1 2
log(R_1)
0
2
4
012345
α
0.0
0.2
0.4
0.6
0.8
45678
l
Posterior Prior
HSGP
Figure D1: Prior vs. posterior plots for retrospective Los Angeles county analysis from Section 3.2.
D.2.2 Prior vs. Posterior Plots for San Francisco County Analysis
27

0
2
4
0.0 0.5 1.0 1.5 2.0
Density
ν
0
5
10
15
0.1 0.2 0.3
ρ
0.00
0.02
0.04
0.06
0 20 40 60
κ
0
1
2
−1 0 1 2
log(R_1)
0.0
0.5
1.0
1.5
2.0
0246
σ
RW1
0
1
2
3
4
5
0.0 0.5 1.0 1.5 2.0
Density
ν
0
5
10
15
0.050.100.150.200.25
ρ
0.00
0.02
0.04
0.06
0 20 40 60
κ
0.0
0.5
1.0
1.5
2.0
−2 −1 0 1 2
log(R_1)
0
5
10
0.0 0.5 1.0
σ
0
2
4
6
8
0.00 0.25 0.50 0.75 1.00
θ
OU
0
2
4
0.0 0.5 1.0 1.5
Density
ν
0
5
10
15
0.05 0.10 0.15 0.20 0.25
ρ
0.00
0.02
0.04
0.06
0 20 40 60
κ
0
1
2
3
−2 −1 0 1
log(R_1)
0
5
10
15
20
0.0 0.5 1.0 1.5
σ
RW2
0
2
4
0123
Density
ν
0
5
10
15
0.1 0.2
ρ
0.00
0.02
0.04
0.06
0 20 40 60
κ
0
1
2
3
4
−2 −1 0 1 2
log(R_1)
0.0
2.5
5.0
7.5
02468
σ
IBM
0
1
2
3
4
5
0.0 0.5 1.0 1.5 2.0
Density
ν
0
5
10
15
0.05 0.10 0.15 0.20 0.25
ρ
0.00
0.02
0.04
0.06
0 20 40 60
κ
0
1
2
3
−2 −1 0 1 2
log(R_1)
0
1
2
3
4
0246
α
0.0
0.2
0.4
0.6
0.8
45678
l
Posterior Prior
HSGP
Figure D2: Prior vs. posterior plots for retrospective San Francisco county analysis from Section 3.2.
D.3 MCMC Convergence
D.3.1 Traceplots for Log Posteriors
Los Angeles San Francisco
RW1 OU
−400
−300
−200
−100
−200
−100
28

Figure D3: Traceplots of the log posterior for the retrospective analyses of Los Angeles and San Francisco counties from Section 3.2. Here we display only the log posterior traceplots due to space constraints, but all other parameters displayed similarly good mixing and fast convergence.
D.3.2 Table of MCMC Diagnostics for Los Angeles and San Francisco Analyses
Table D1 summarises MCMC diagnostics for the real data analyses. All chains had fewer than 5 divergent transitions, and most had zero.
County Prior Divergent Transitions Max Treedepth Hit Max R-hat Min ESS
Los Angeles
RW1 0 3 1.007 913.277 OU 3 0 1.009 502.898 RW2 0 2 1.010 724.825 IBM 0 3 1.004 822.890 HSGP 0 1 1.002 742.175
San Francisco
RW1 0 0 1.007 704.265 OU 1 34 1.013 572.900 RW2 0 0 1.008 722.933 IBM 0 0 1.003 506.352 HSGP 0 0 1.003 711.496
Table D1: MCMC diagnostics for each prior and county.
D.4 Posterior Predictive Plots for Los Angeles and San Francisco Analyses
29

0
50000
100000
150000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
RW1
0
50000
100000
150000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
OU
0
50000
100000
150000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
RW2
0
50000
100000
150000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
IBM
0
50000
100000
150000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
HSGP
Posterior Predictive Interval 99% BCI 95% BCI 80% BCI Median
Figure D4: Posterior predictive plots for retrospective Los Angeles county analysis from Section 3.2. Red points are observed case counts for Los Angeles county.
30

0
1000
2000
3000
4000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
RW1
0
1000
2000
3000
4000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
OU
0
1000
2000
3000
4000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
RW2
0
1000
2000
3000
4000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
IBM
0
1000
2000
3000
4000
Jul2020
Aug2020
Sep2020
Oct2020
Nov2020
Dec2020
Jan2021
Feb2021
Mar2021
HSGP
Posterior Predictive Interval 99% BCI 95% BCI 80% BCI Median
Figure D5: Posterior predictive plots for retrospective San Francisco county analysis from Section 3.2. Red points are observed case counts for San Francisco county.
31

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:13.813Z
- **Text Length:** 83379 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 31 of 31
