# PDF Document: Ordoñez et al. - 2025 - A Unified Spatiotemporal Framework for Modeling Censored and Missing Areal Responses.pdf

**File Path:** Ordoñez et al. - 2025 - A Unified Spatiotemporal Framework for Modeling Censored and Missing Areal Responses.pdf

**Processed Date:** 2026-02-10T18:14:42.297Z

**File Size:** 1706.11 KB

**Total Pages:** 39

**Extracted Pages:** 39

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3393

**Title:** A Unified Spatiotemporal Framework for Modeling Censored and Missing Areal Responses

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A UNIFIED SPATIOTEMPORAL FRAMEWORK FOR MODELING
CENSORED AND MISSING AREAL RESPONSES
Jose A. Ordon ̃ ez
Department of Statistics Pontificia Universidad Cato ́lica de Chile Santiago, PA 782 0436 jose.ordonez@uc.cl
Tsung-I Lin
Institute of Statistics, National Chung Hsing University Department of Public Health, China Medical University tilin@nchu.edu.tw
Victor H. Lachos
Department of Statistics University of Connecticut hlachos@uconn.edu
Luis M. Castro
Department of Statistics Pontificia Universidad Cato ́lica de Chile Santiago, PA 782 0436 lmcastro@uc.cl
November 26, 2025
ABSTRACT
We propose a new Bayesian approach for spatiotemporal areal data with censored and missing observations. The method introduces a flexible random effect that combines the spatial dependence structures of the Simultaneous Autoregressive (SAR) and Directed Acyclic Graph Autoregressive (DAGAR) models with a temporal autoregressive component. We demonstrate that this formulation extends both spatial models into a unified spatiotemporal framework, expressing them as Gaussian Markov random fields in thei-
r innovation form. The resulting model captures spatial, temporal, and joint spatiotemporal correlations in an interpretable way. Simulation studies show that the proposed model outperforms common ad hoc imputation strategies, such as replacing censored values with the limit of detection (LOD) or imputing missing data by the sample mean. We further apply the method to carbon monoxide (CO) concentration data from Beijing’s air quality network, comparing the proposed DAGAR–AR model with the traditio-
nal Conditional Autoregressive (CAR) approach. The results indicate that while the CAR model achieves slightly better predictive performance, the DAGAR–AR specification offers clearer interpretability and a more coherent representation of the spatiotemporal dependence structure.
1 Introduction
According to the U.S. Environmental Protection Agency (EPA), carbon monoxide (CO) is a colorless, odorless, tasteless, poisonous, and flammable gas produced by the incomplete oxidation of carbon during combustion. Common community sources of CO include chimneys, gas stoves, space heaters, water heaters and wood stoves. Low-level exposure to CO may cause fatigue and chest pain in individuals with pre-existing heart disease, whereas higher levels of exposure can lead to headaches, dizziness and conf-
usion. At sufficiently elevated concentrations, CO exposure can be fatal [13].
From a public health perspective, CO pollution is of particular concern because short-term exposure is significantly associated with daily mortality [7]. Furthermore, as noted by Raub [15], in some regions, CO levels are strongly correlated with particulate matter, such as PM101, especially during winter months. These particles are detrimental to health, contributing to an increased risk of cardiovascular mortality and hospitalization [1].
1PM10 and PM2.5 denote particulate matter suspended in the air with a diameter of 10 micrometers or less, and 2.5 micrometers or less, respectively, which is sufficiently small to be inhaled and reach deep into the pulmonary system.
arXiv:2511.17725v2 [stat.ME] 25 Nov 2025

A PREPRINT - NOVEMBER 26, 2025
In the statistical literature, several proposal have addressed the modeling of CO or pollution components within a spatio-temporal framework. For instance, de Luna and Genton [9] introduced a novel family of predictive spatiotemporal models tailored explicitly for environmental data, focusing on CO concentrations in Venice, which are characterized by spatial sparsity and temporal richness. The core methodology employs a vector autoregressive (VAR) specification, treating each monitoring station as-
 a time series, and a distinctive model-building strategy that facilitates the identification of spatial dependencies.
Wang and Sun [20] presented a penalized local polynomial regression model developed for spatial data analysis, intending to address spatial heterogeneity in regression coefficients. The authors proposed a methodology for examining environmental variables, such as PM2.5 concentrations and various pollutant gases in China, by representing spatially varying parameters as a combination of local polynomials at designated “anchor points”. This approach employs a penalized least-squares procedure to esti-
mate these parameters, promoting local homogeneity.
In contrast, Deb and Tsay [10] introduced a spatiotemporal model tailored to analyze air pollution data, focusing on PM2.5 concentrations and identifying space–time interactions. In this framework, an interaction implies that temporal pollution trends are more similar among sites in close spatial proximity. The study applied this model to a ten-year dataset collected from 66 monitoring stations across Taiwan, addressing a gap in the literature on air pollution in Asian contexts.
Recently, Valeriano et al. [18] extended the spatiotemporal modeling framework by introducing separable correlation structures and implementing the Stochastic Approximation Expectation–Maximization (SAEM) algorithm for parameter inference. The SAEM procedure facilitates the maximum likelihood estimation in complex settings by iteratively approximating the expectation step through stochastic simulations. Missing and censored data are accommodated by augmenting the complete data formulation and mode-
ling the unobserved values using truncated normal distributions. Although their empirical application did not involve CO or particulate matter, the methodology was illustrated using ozone concentration data from New York.
A key component in assessing the health impacts of CO pollution within a given city is the statistical modeling of ambient CO concentrations. However, this process entails several methodological challenges. These include accounting for the temporal and spatial variability in pollutant levels, addressing potential censored and missing data, and selecting appropriate covariates to capture meteorological and seasonal effects. Including these particulars in the analysis is necessary to obtain valid an-
d coherent conclusions.
Our proposal intends to provide a novel spatiotemporal model that considers censoring and missingness mechanisms, treating them as informative features rather than nuisance features. Moreover, because the data we analyzed are areal data, we considered the use of direct acyclic graph autoregressive (DAGAR) models [see 8]. This model provides a novel framework for the study of areal spatial models using a direct acyclic graph (DAG).The advantage of using a DAG is that it allows us to represent the s-
patial correlation structure of zones in a particular city in a simple and sparse manner. More precisely, a DAG provides a natural scheme to determine the neighbors of each zone, allowing us to establish the dependency structures of the observations over the location of interest. It is important to stress that one of the essential features of DAGAR models is that they are more robust than other competitive models, such as the conditional autoregressive [CAR; 6] and simultaneous autoregressive [SAR-
; 22] models. The DAGAR approach builds spatial correlation matrices generating positive definite and sparse matrices compared to popular tools such as CAR and SAR models.
The remainder of this paper is organized as follows. Section 3 introduces the model and defines a new spatiotemporal effect based on the DAGAR model. Section 4 presents the Bayesian inference under specified priors, where the missing and censored values are treated as latent random variables. Section 5 reports a simulation study that evaluates the estimation and prediction performance. Section 6 illustrates the methodology using a real dataset. Finally, some concluding remarks are presented in 7.
2 The Beijing multi-station air quality dataset
The dataset analyzed in this study originated from the Beijing air pollution monitoring network, which was established in January 2013 as part of a nationwide environmental surveillance program. Between 2013 and 2017, hourly observations of multiple air pollutants, including carbon monoxide (CO), and key meteorological variables, such as temperature and wind speed, were collected from 12 monitoring stations distributed across Beijing. Notably, this dataset provides a comprehensive spatiotemporal r-
ecord of urban air quality dynamics. The dataset is publicly accessible through the UCI Machine Learning Repository (https://archive.ics.uci.edu).
One of the earliest studies to analyze this dataset was conducted by Zhang et al. [23], who investigated the temporal behavior of PM2.5 concentrations in Beijing. Their results indicated that air pollution levels in 2016 had likely been
2

A PREPRINT - NOVEMBER 26, 2025
underestimated, as previous reports suggested a 9.9% decline in the annual PM2.5 concentrations. More recently, Wardana et al. [21] employed the same dataset to develop an autoencoder-based model incorporating spatiotemporal components to estimate missing air pollutant observations.
In this study, we modeled CO concentrations (μg/m3) collected twice daily at 09:00 and 19:00, which correspond to peak traffic periods. The analysis covered the period from November 25, 2016, to February 28, 2017, and included observations from 12 monitoring sites, each recorded at 190 time points, resulting in a total of 2280 observations (12 × 190). There were 55 missing values. The final three days (26/02/2017–28/02/2017) were reserved as a test dataset for all stations to assess the predictive-
 performance of the proposed model. Accordingly, model training was conducted using 12 × 184 = 2208 observations, whereas testing involved 12 × 6 = 72 observations. This study period coincided with the winter season in Beijing, during which CO concentrations are typically elevated owing to increased heating demand and stable atmospheric conditions that restrict pollutant dispersion.
To mitigate the influence of extreme values and reduce issues related to variance heterogeneity, analysis was conducted using CO concentrations expressed on a logarithmic scale. A raw scatter plot of the log-transformed CO concentrations along the monitoring stations is shown in Figure 1. It can be seen that this variable fluctuates between 5 and 9, showing noticeable short-term fluctuations with frequent rises and drops. Urban stations such as Guanyuan, Gucheng, and Nongzhanguan displayed slightl-
y higher levels, likely influenced by heavier traffic and localized emission sources. In contrast, suburban sites such as Changping and Huairou tend to record lower concentrations.
Finally, in Table 1, we present summary statistics for the variables included in this dataset, namely log(CO), temperature (TEMP, °C), wind speed (WSP, m/s), and atmospheric pressure (PRES, Pa). These variables serve as suitable covariates for predicting CO concentrations.
Table 1: Beijing air pollutants data. Summary statistics of the variables of interest Variable Mean Median s.d Min Max log(CO) (response) 7.081 7.173 1.042 4.611 9.204 TEMP -0.551 -0.503 3.992 -12.521 10.502 PRES 10.216 10.219 5.830 99.740 1036.00 WSP 1.643 1.304 1.202 0.000 9.600
3 The model
Consider the spatiotemporal Gaussian process {Y (s, t) : s ∈ S, t ∈ T }, where S denotes a countable collection of spatial locations at which observations are available, T represents a countable and ordered set of time points, and s and t index space and time, respectively.
The spatiotemporal model is then specified as,
Y (si, tq) = μ(si, tq) + ω(si, tq) + εiq, i = 1, . . . , n, q = 1, . . . , Ti, (1)
where n is the number of sites, Ti is the number of temporal replicates at site si and N = Pn
i=1 Ti is the to
tal number of observations. In (1), the mean component is specified as μ(si, tj) = Pp
k=1 xk(si, tj )βk, where
x1(si, tj), . . . , xp(si, tj) are known covariates observed at (si, tj), and (β1, . . . , βp)⊤, is a vector of unknown regression coefficients to be estimated. The latent term ω(si, tj) denotes the spatiotemporal random effect, with ω = (ω(s1, t1), . . . , ω(s1, tT1 ), . . . , ω(sn, t1), . . . , ω(sn, tTn )) assumed to follow a multivariate normal distribution with zero mean and covariance matrix C. This component accounts for spatial and temporal dependence structures in the data. Finally, the m-
easurement error is modeled as εiq ∼ N (0, τ 2), an independent Gaussian white-noise process capturing variability not explained by the structured spatiotemporal component.
Note that model (1) can be expressed in matrix form as
Y = Xβ + ω + ε, (2)
where Y = (Y11, . . . , YnTn )⊤ with Yiq = Y (si, tq), and X is an (N × p) design matrix whose iq-th row is given by x⊤
iq = (xiq1, . . . , xiqp), with xiqk = xk(si, tq). From the model specification, the latent random effects are distributed
as ω ∼ NN (0, C), and the error term as ε ∼ NN (0, τ 2IN ), with ε = (ε11, . . . , εnTn )⊤, and Im denoting the m × m identity matrix. Consequently, the marginal distribution of Y is an N-variate normal with
E(Y) = Xβ, and Var(Y) = C + τ 2IN .
3

A PREPRINT - NOVEMBER 26, 2025
Shunyi Tiantan Wanliu Wanshouxigong
Guanyuan Gucheng Huairou Nongzhanguan
Aotizhongxin Changping Dingling Dongsi
Dec Jan Feb Mar Dec Jan Feb Mar Dec Jan Feb Mar Dec Jan Feb Mar
5
6
7
8
9
5
6
7
8
9
6
7
8
9
5
6
7
8
9
5
6
7
8
9
5
6
7
8
9
5
6
7
8
9
6
7
8
9
5
6
7
8
9
5
6
7
8
9
5
6
7
8
9
5
6
7
8
9
Date
Log(CO)
Figure 1: Time series of log(CO) concentrations at twelve air-quality monitoring stations in Beijing from December to March.
4

A PREPRINT - NOVEMBER 26, 2025
In some situations, and depending on the measurement instrument, observations may be subject to upper and/or lower detection limits, beyond which they cannot be quantified. Additionally, missing data may occur for various reasons. For example, in the case of CO measurements, Kim et al. [12] reports that missingness can arise from instrument calibration and verification procedures, equipment malfunctions, repairs or replacements, and outlier removal during data preprocessing.
In the presence of censoring, the observed response Yiq can be represented as (Ziq, Ciq), where Ziq denotes either an uncensored observation, meaning that Ziq = Ziq0 = Yiq, or a detection limit corresponding to the censoring level when the observation is censored or missing. In the latter case, Ziq takes the form [Ziq1, Ziq2], indicating the interval within which the true value lies. Ciq, on the other hand, is the censoring indicator, defined as,
Ciq = 1 if Ziq1 ≤ Yiq ≤ Ziq2,
0 if Yiq = Ziq0. (3)
As particular cases of (3), we have left censoring when Ciq = 1 and Ziq = [−∞, Ziq2], right censoring when Ciq = 1 and Ziq = [Ziq1, ∞], and missingness when Ciq = 1 and Ziq = [−∞, ∞]. The model defined by (2) and (3) will be referred to as the normal spatio-temporal censored linear model over graphs (NST-CLG).
3.1 Specification of ω
We assume that ω ∼ NN (0, C) with a separable covariance structure
C = σ2(Γ ⊗ Φ),
where σ2 > 0 is a variance (scale) parameter, Γ denotes the spatial correlation matrix, and Φ represents the temporal correlation matrix. The operator ⊗ denotes the Kronecker product, which induces the separable spatiotemporal dependence structure.
3.1.1 Spatial correlation matrix Γ
Because our model is based on areal data, it is necessary to construct a correlation structure from a proximity matrix. In this context, the proximity matrix is defined through a graph representation, where the neighboring relationships between regions are encoded as edges connecting the corresponding vertices. In this setting, let G = {S, E} denote a graph with vertex set (regions) S = {s1, . . . , sn} and edge set E = {(si, sj) : si, sj ∈ S}, with cardinality |E| = n−1. We write si ∼ sj to indic-
ate an edge connecting si and sj. Therefore, we consider
Γ = (In − Bn)⊤Fn(In − Bn) −1 (4)
under two cases.
1. The first structure is based on the SAR model. In this setup, Fn = κIn, with κ > 0 is an unknown parameter which is fixed equal to 1 to avoid idenfiability issues, and Bn = ρAS , with ρ a spatial autoregression
parameter, and AS a n × n proximity matrix, with elements as
ij = 1 if si ∼ sj and 0 elsewhere, for i, j = 1, . . . , n. As noted in Banerjee et al. [3], it is necessary to ensure the non-singularity of (I − Bn) in order for Γ to define a valid (positive definite) covariance matrix. This can be achieved by setting ρ ∈ (1/λ(1), 1/λ(n)), where λ(1) < λ(2) < . . . λ(n) are the ordered eigenvalues of AS . Alternatively, AS can be replaced by
the row stochastic matrix eAS = ( ̃as
ij), where  ̃as
ij = as
ij /as
i+ with as
i+ = P
j as
ij. Redefining Bn as αAe S , with α a spatial correlation parameter, the non-singularity condition is reduced to α ∈ (−1, 1) given that the eigenvalues of Ae S are less or equal than one.
2. The second structure is based on the DAGAR model. Consider NS (si) = {sj : sj ∼ si, with j < i} as the set of neighbors of si. Define,
bij =



0 for j such that sj ∈/ NS (si) ;
ρ
1+(nsi −1)ρ2 for i = 2, . . . , n and j such that sj ∈ NS (si)
fii = 1 + (n<i − 1) ρ2
1 − ρ2 ,
with a spatial correlation parameter ρ > 0, and nsi , the number of elements in NS (si). Here, the elements of the matrix Bn are denoted by bij, and the matrix Fn is diagonal with entries fii.
5

A PREPRINT - NOVEMBER 26, 2025
Note that we include only areal models whose covariance matrices can be expressed as in (4). The distributions of these models are induced through a noise term, analogous to the formulation of an autoregressive process of order p, AR(p). In contrast, conditional autoregressive (CAR) models specify the distribution directly on the variable of interest, leading to a covariance structure that differs from that of the SAR and DAGAR models. As our analysis focuses exclusively on models of the form (4),-
 the CAR specification is not considered further in this study.
3.1.2 Temporal correlation matrix Φ
In this setup, we assume that Ti = T for all i = 1, . . . , n. For the temporal component Φ, we adopt a correlation structure induced by an autoregressive process of order p, denoted AR(p). In this case, Φ takes the Toeplitz form
Φ=

  
φ0 φ1 · · · φT −1 φ1 φ0 · · · φT −2
... ... . . . ...
φT −1 φT −2 · · · φ0

  
, (5)
where φk denotes the correlation at lag k. These correlations are determined by the Yule-Walker equations [4], φk = γ1φk−1 + . . . + γpφk−p, with γ1, . . . , γp representing the autoregressive parameters. For this process, the stationarity
conditions depend on the roots of its characteristic polynomial A(z) = 1 − Pp
i=1 γizi. The process is stationary if
and only if all the roots of A(z) = 0 lie outside the unit circle in the complex plane. This condition guarantees that the process has a finite variance and an autocovariance function that depends only on the temporal lag rather than on the specific time index.
3.1.3 Innovation-form Gaussian Markov random field representation of ω
First, we introduce the following notations. For a fixed spatial location sj, we define ωsj = (ω(sj, t1), . . . , ω(sj, tT ))⊤. Similarly, for a fixed time point tj, with t1 < t2 < . . . < tk, we denote ωtj =
(ω(s1, tj), . . . , ω(sn, tj))⊤. Note that this notation allows us to express the process as a Gaussian Markov random field in its innovation form (GMRFI), as follows:
ωtj = Bnωtj + εtj , (6)
where εtj = (ε(s1, tj), . . . , ε(sn, tj))⊤ ∼ Nn(0, Fn).
The following results demonstrate that the Kronecker structure allows us to represent ω as a Gaussian Markov random field in its innovation form (GMRFI), which, through appropriate adjacency relations, captures both temporal and spatial dependencies. We begin by showing that when ωsj follows an AR(p) structure, it admits such a representation. In particular, it can be expressed as a DAGAR process, where each coefficient bij is defined in terms of the parameters of the corresponding autoregressive -
polynomial.
Proposition 3.1. Assuming an AR(p) structure, the random effect ωsj follows a T -variate normal distribution with zero mean and covariance matrix given by
[(IT − BT )⊤FT (IT − BT )]−1,
where BT has elements bij, with i, j ∈ {1, . . . , T }, given by
bij = 0 for tj ∈/ NT (ti) ;
γi−j for i = 2, . . . , T and tj ∈ NT (ti) ,
NT (ti) = (ti−1, . . . , ti−p), and FT = σ−2IT .
Proof: The proof of this proposition is provided in the Supplementary Material.
It is important to stress that the random effect ωsj admits a DAG representation, where the adjacency matrix is given by AT = P k = 1pJk, with Jk the k-th backward shift matrix, whose elements are (Jk)ij = 1 if j = i − k, and 0 otherwise. This matrix encodes a neighborhood structure by connecting each node t with its p predecessors (t − k), allowing ωsj to be defined as an AR(p) process. A graphical representation of this relationship is shown in Figure 2 for the cases p = 1, 2.
Next, we show that the random effect ω, under the specifications given above, can be expressed as a GMRFI, thus extending the SAR and DAGAR models to the spatiotemporal framework.
Theorem 3.1. The process ω ∼ NN (0, C) can be written as a GMRFI process. Specifically,
6

A PREPRINT - NOVEMBER 26, 2025
t−2 t−1 t t+1 t+2
(a) AR(1): Xt depends on Xt−1.
t−2 t−1 t t+1 t+2
(b) AR(2): Xt depends on Xt−1, Xt−2.
Figure 2: Directed acyclic graph representations of AR(1) and AR(2) processes.
1. Let A = In ⊗ AT + AS ⊗ IT + AS ⊗ AT denote the adjacency matrix, with elements a(ik,jl) = δS
ik aT
jl + aS
ik δ T
jl + aS
ik aT
jl, where i, k ∈ {1, . . . , n}, j, l ∈ {1, . . . , T }, and δS
ik and δT
jl are Kronecker delta functions representing the components of In and IT , respectively. We define the following relationship: (si, tj) ∼ (sk, tl) if a(ik,jl) = 1. Note that the relation ∼ defines a pair of neighbors in the spatiotemporal context. If Γ is chosen as the covariance matrix of a SAR process, then ω is a GMRFI with,
ω(si, tj) =
X
{(sk,tl):(si,tj )∼(sk,tl)}
b(ik,jl)ω(sk, tl) + ε(si, tj ) (7)
where ε(si, tj) ∼ N (0, σ2I) and
b(ik,jl) =

 
 
0 for (si, tj) ≁ (sk, tl); γj−l for si = sk and tl ∈ NT (tj ) ,
 ̃as
ikρ for tj = tl and si ∼ sk,
− ̃as
ikργj−l for si ∼ sk, tl ∈ NT (tj) , i ̸= k, j ̸= l
with  ̃as
ik being the element (i, k) of the matrix  ̃AS as defined in Section 3.1.1.
2. If Γ is chosen as the covariance structure of a DAGAR process, then ω is also a DAGAR process, i.e.,
ω(s1, t1) = ε(s1, t1) (8)
ω(si, tj) =
X
C
b(ik,jl)ω(sk, tl) + ε(si, tj ) (9)
where C = {(sk, tl) : (sk, tl) ∈ N(S,T )}, ε(si, tj) ∼ N (0, f −1
ii σ2), N(S,T )(si, tj ) = NS (si) × NT (tj ) and
b(ik,jl) =

  
  
0 for (sk, tl) ∈/ NS,T (si, tj);
γj−l for si = sk and tl ∈ NT (tj) ,
ρ
1+(n<i−1)ρ2 for ti = tj and sk ∈ NS (si) ,
−ρ
1+(n<i−1)ρ2 γj−l for sk ∈ NS (si) , tl ∈ NT (tj ) , k ̸= i, l ̸= j
Proof: The proof is provided in the Supplementary Material.
In the first statement of Theorem 3.1, the choice of  ̃as
ik is made purely for convenience when verifying the nonsingu
larity of the matrix (In − Bn). The statements continue to hold if as
ik, the (i, k)-th element of the matrix AS, is used
instead of  ̃as
ik. Using Γ as the SAR covariance structure, (7) allows us to rewrite the process as
ω(si, tj) =
p
X
q=1
γqω(si, tj−q)
| {z }
A
+
X
k̸=i
 ̃as
ikρω(sk, tj )
| {z }
B
−
X
k̸=i
p
X
q=1
 ̃as
ikγqρω(sk, tj−q)
| {z }
C
+ ε(si, tj). (10)
7

A PREPRINT - NOVEMBER 26, 2025
On the other hand, using Γ as the DAGAR covariance structure, equations (8)-(9) allow us to rewrite the process as
ω(si, tj) =
p
X
q=1
γqω(si, tj−q)
| {z }
A
+
X
sk ∈ NS (si)
ρ
1 + (nsi − 1) ρ2 ω(sk, tj)
| {z }
B
−
X
sk ∈Ns (si )
p
X
q=1
γq ρ
1 + (nsi − 1) ρ2 ω(sk, tj−q)
| {z }
C
+ ε(si, tj) (11)
Regarding equation (10), γq in component A denotes the autoregressive parameter for the fixed location si. Moreover, in component B, the parameter ρ, which is associated with spatial correlation, poses interpretational challenges similar to those documented for SAR models at a fixed time point [see 3, 19]. Note that component C incorporates both spatial and temporal parameters. However, the process form in (11) provides a more direct interpretation of the spatial and temporal parameters and their -
interactions, with the advantage that both parameters can be interpreted analogously to those in AR(p) and DAGAR models. The component A captures temporal dependence. Marginally, the coefficients γq can be interpreted as the conditional linear effect of ω(si, tj−q) on the current value ω(si, tj), holding the remaining lags constant. The component B captures spatial dependence, where ρ can be interpreted marginally as the correlation between ω(si, tj) and its spatial neighbors. Finally, the term C -
accounts for the spatiotemporal cross-dependence, and the product γqρ can be interpreted as a measure of dependence between ω(si, tj) and the past values of its spatial neighbors.
It is worth noting that, as in the purely spatial DAGAR model, the assumptions regarding ordering rely solely on the spatial dimension. Following Datta et al. [8], let π = π(1), . . . , π(n) denote any predetermined ordering of the spatial locations, and let π−1 be its corresponding inverse permutation. Under this ordering, for i ̸= π(1), define the set of neighboring observations ωNπS(si) as the collection {ω(sk, tl) : π−1(k) < π−1(i), tl ∈ NT (tj)}, where N π
S (si) = {sk : si ∼ sk, π−1(k) < π−1(i)}. Denote by Gπ(S, Eπ) the acyclic graph generated by these configurations, with Eπ
representing the collection of directed edges from all members of N π
S (si) to i, for every i ̸= π(1). Then,
ω(si, tj ) | ωNπ
(S,T ) ∼ N


X
(sk,tl) ∈ N π
(S,T )(si,tj )
b(ik,jl)ω(sk, tl), f −1
ii σ2

,
with N π
(S,T )(si, tj ) = N π
S (si) × NT (tj) and b(ik,jl) as defined in Theorem 3.1, but replacing nsi by nπ(i), the number of elements in N π
S (si). It is worth noting that Datta et al. [8] reported that the ordering of regions has a negligible influence on the results. Specifically, in their simulation studies, the mean squared errors, as well as the estimates and credible intervals for ρ, remained nearly identical across different orders.
4 Bayesian inference
To perform Bayesian inference for the NST-CLG model, we treat the censored responses Yc as latent variables and target the joint posterior π β, σ2, ρ, ψ, γ, Yc | yo . We first translate the results of Berger et al. [5] into the context of regression models defined over graphs. Denote β = (β0, . . . , βp) and γ = (γ1, . . . , γp)⊤, and assume that
π(β, σ2, ρ, ψ, γ) ∝ π(ρ, ψ, γ)
σ2 , (12)
We then obtain the following result for the augmented–data posterior distribution π(ρ, ψ, γ | y) under an arbitrary prior π(ρ, ψ, γ).
Proposition 4.1. Let Cov(Y) = Σ = σ2(Γ ⊗ Φ + ψI), where ψ = τ 2/σ2. Then, given the data augmented-data y = vec(yo, yc), and a prior density π(ρ, ψ, γ), the posterior π(ρ, ψ, γ | y) can be written as,
π(ρ, ψ, γ | y) ∝ |Σ|−1/2 Vβˆ
1/2
S2 −N−p/2 π(ρ, ψ, γ), (13)
where S2 = (y−Xβˆ)⊤Σ−1(y−Xβˆ)/N−p, Vβˆ = X⊤Σ−1X −1, and βˆ = (X⊤Σ−1X)−1X⊤y is the least square estimator of β.
8

A PREPRINT - NOVEMBER 26, 2025
A proof of this result can be found in the Supplementary Material. Because of standard properties of the multivariate normal distribution, together with the prior specification in (12), we also have
π(β, σ2 | ρ, ψ, γ, y) ∝ 1
|Vβˆ|1/2 exp

 
β − βˆ
⊤
V −1
βˆ β − βˆ
2σ2


×
S2 N−p/2 (σ2)−(N−p/2+1) exp − (N − p)S2
2σ2 . (14)
Consider reordering the vector Y such that it can be expressed as Y = vec(Yo, Yc), where vec(·) denotes the function that stacks vectors or matrices having the same number of columns, Yo is the N o-dimensional vector of observed responses, Yc is the N c-dimensional vector of censored/missing observations, and N = N o + N c. As with the response, consider the reorderings
X⊤ = Xo⊤ Xc⊤ , Z⊤ = Zo⊤ Zc⊤ , μ = Xoβ
Xcβ , Σ = Σoo Σoc
Σco Σcc ,
with Σ = C + τ 2IN . Given standard properties of the multivariate normal distribution, it follows that Yo ∼ NNo (Xoβ, Σoo) and Yc | Yo ∼ NNc (μc|o, Σc|o), where μc|o = Xcβ + Σco(Σoo)−1(Yo − Xoβ), Σc|o =
Σcc − Σco(Σoo)−1Σoc. Using the results above, the full conditional distribution of Yc is a multivariate truncated normal distribution, that is,
Yc | yo, β, σ2, ρ, ψ, γ ∼ T N Nc (μc|o, Σc|o, Zc), where
Zc =
n
Yc = Y c
11, . . . , Y c
ij
⊤ | Zc
111 ≤ Y c
11 ≤ Zc
112, . . . , Zc
ij1 ≤ Y c
ij ≤ Zc
ij2
o
and P (u ∈ Zc | Yo) is the conditional probability that u belongs in the set Zc given the observed response.
For a given vector yc, we have β | ρ, γ, y ∼ Np(βb, Vβb) and σ2 | ρ, ψ, γ, y ∼ χ2
ScI (N − p, S2), that is, the scale inverse chi-square distribution. Based on these results, we propose a Gibbs sampler in which the sampled yc and (13) are used in a Metropolis step to obtain samples from π(ρ, γ | y). Subsequently, (14) is used to generate samples from the full conditional posteriors β | ρ, ψ, γ, y and σ2 | ρ, ψ, γ, y. These steps are summarized in Algorithm 1.
Algorithm 1 Posterior Sampling Algorithm for the NST-CLG Model
1: Sample (ρ(s), ψ(s), γ(s)) :
• Initialize the parameters (ρ(0), ψ(0), γ(0)) and yc(0). Form the vector y(0) = (yo, yc(0)) • Generate a candidate (ρ⋆, ψ⋆, γ⋆) from an independent proposal q(ρ, ψ, γ) = q(ρ)q(γ)q(ψ).
• Calculate M = π(ρ⋆, ψ⋆, γ⋆ | y(s−1))q(ρ(s−1), ψ(s−1), γ(s−1))
π(ρ(s−1), ψ(s−1), γ(s−1) | y(s−1))q(ρ⋆, ψ⋆, γ⋆) .
• Sample U ∼ Uniform(0, 1).
• Set (ρ(s), ψ(s), γ(s)) = (ρ⋆, ψ⋆, γ⋆) if u < M or (ρ(s), ψ(s), γ(s)) = (ρ(s−1), ψ(s−1), γ(s−1)) otherwise.
2: Sample σ2(s) ∼ χ2
ScI N − p, S2 , with S2 = S2(ρ(s), ψ(s), γ(s)) as in Proposition 3.1. Recover τ 2(s) =
σ2(s)ψ(s).
3: Sample β(s) ∼ Np(βˆ, Vβˆ) with βˆ = βˆ(ρ(s), ψ(s), γ(s)) and Vβ = Vβ(ρ(s), ψ(s), γ(s)) as in Proposition 3.1.
4: Sample Yc(s) | Yo, β(s), σ2(s), ρ(s), ψ(s), γ(s) ∼ T N Nc μc|o, Σc|o, Z with μc|o =
μc|o(β(s), σ2(s), ρ(s), ψ(s), γ(s)) and Σc|o = Σc|o(β(s), σ2(s), ρ(s), ψ(s), γ(s)) as defined earlier.
4.1 Specification of π(ρ, ψ, γ)
We assume an independent joint prior of the form
π(ρ, ψ, γ) ∝ π(ρ)π(ψ)π(γ), (15)
where ρ ∼ Beta(aρ, bρ), ψ ∼ Beta(aψ, bψ), and γ ∼ Beta(aγ , bγ ). The beta distribution is a convenient choice due to its flexibility and computational advantages. Its support on a bounded interval ensures coherence with the parameter space. In contrast, its shape parameters (a, b) allow a wide range of prior specifications, from uniform to highly concentrated forms.
9

A PREPRINT - NOVEMBER 26, 2025
4.2 Bayesian prediction
Let si be a fixed location, T ̃ = t ̃1, t ̃2, . . . , t ̃npred be a set of times for predicting the response Y (si, t), and θ = (β, σ2, ρ, ψ, γ). Denote Ypred as the Npred × 1 random vector with jth component Y (si, t ̃j). Then, the posterior density of (Ypred, θ, Yc) can be written as,
P (Ypred, θ, Yc | yo) = P (θ, Yc | yo)P (Ypred | θ, Yc, yo). (16)
To get the predictive distribution P (Ypred | θ, Yc, yo), we can use the results of Section 4. Let Y⋆ = vec(Yobs, Ypred), where Yobs = (Yo, Yc) and X⋆ = (X,  ̃X) with  ̃X, the covariates matrix associated to the values we want to predict. Then Y⋆ | θ ∼ NN+Npred (μ⋆, Σ⋆), with,
μ⋆ = Xobsβ Xpredβ , Σ = Σobsobs Σobspred
Σpredobs Σpredpred ,
and Ypred | Yobs, θ ∼ NNpred μpred|obs, Σpred|obs , where
μpred|obs = Xpredβ + Σpredobs Σobsobs −1
Yobs − Xobsβ ,
Σpred|obs = Σpredpred − Σpredobs Σobsobs −1
Σobspred
Similar to Banerjee [2], to sample from (16) we first obtain a sample from π(θ, Yc | yo) using Algorithm 1. For each draw of (θ, Yc), we generate a draw of the Npred × 1 vector Ypred from P (Ypred | θ, Yc, yo). By computing summary measures such as the sample mean, median, or the 2.5% and 97.5% quantiles, we obtain posterior predictive inference for new values, conditional on the observed data and censoring information.
5 Simulation studies
In this section, we present two simulation studies. The first examines how censoring and missingness affect model fitting and demonstrates that our method accommodates them effectively. The second evaluates the out-of-sample predictive performance for future time points. To simulate the datasets, we independently generated x1ij ∼ N (0, 12) and x2ij ∼ N (1, 32), considering β = (1, 2, 2.5)⊤ and (σ2, ρ, γ, τ 2) = (2, 0.8, 0.7, 0.6). Using these values, we compute the linear predictor Xβ and the spat-
iotemporal covariance matrix C as specified in Section 3, for both the DAGAR and SAR processes. Finally, we simulate the response Y ∼ NN (Xβ, C). In total, k = 300 datasets were simulated for each study. After simulating the data, δ% of the values were artificially left censored, as in Schelin and de Luna [16]. We also generated missing values from the remaining 100 − δ% uncensored observations. The percentages of censored values were fixed at 15% and 35%, whereas the percentage of missing values -
was fixed at 5%. For comparison purposes, we compared our proposed approach with common techniques for dealing with partial information. The first method, the LOD method, consists of substituting the censored values with the limit of detection, whereas the second method, the LOD/2 method, substitutes these values with 0.5LOD. The missing values in these two methods were substituted by the sample mean of all the observations.
5.1 Simulation study I: Parameter estimation and model fitting
As mentioned above, our goal is to assess model fitting in the presence of censoring and missingness. In this case, we simulate the spatial structure using grids of sizes 3, 4, and 5, resulting in a total of n1 = 9, n2 = 16, and n3 = 25 vertices (regions), respectively. When estimating both the spatial and temporal structures, we simulate the latter, considering the number of temporal observations to be the same as the number of regions, that is, T1 = 9, T2 = 16, T3 = 25. This gives us the total n-
umber of observations of Ni = ni × Ti for i = 1, 2, 3.
Regarding the comparison criteria, we calculated (i) the length of the 95% credible interval and (ii) the coverage probability for each parameter. The first was computed as the difference between the upper and lower credible interval limits for each simulation; these limits were obtained as the 2.5% and 97.5% percentiles of the posterior distribution sample in each simulation. The second was computed as the proportion of simulations in which the true parameter was within the credible interval limi-
ts. Concerning the DAGAR correlation, Figure 3 and Table 2 present the distribution of the 300 interval lengths and coverage probabilities for the variance structure parameters obtained using the NST-CLG
10

A PREPRINT - NOVEMBER 26, 2025
model, LOD, and LOD/2 methods under a censoring level of 15% and a missingness rate of 5%. The corresponding distribution of the interval lengths for the mean structural parameters is shown in Figure S.4.1 of the Supplementary Material. Additional results for the mean and covariance parameters under 35% censoring and 5% missingness are provided in Figures S.4.2 and S.4.3, as well as in Tables S.4.1, S.4.2, and S.4.3 of the Supplementary Material. With respect to the SAR process, Tables S.4.4 and S-
.4.5, and Figures S.4.4 and S.4.6 of the Supplementary Material show the distribution of lengths and coverage probabilities for the mean parameters under both censoring scenarios. On the other hand, Tables S.4.6 and S.4.7, and Figures S.4.5 and S.4.7 of the Supplementary Material, show these measures for the covariance parameters.
For the regression coefficients β, when censoring/missingness is 15/5%, the NST-CLG model yields the shortest posterior intervals with empirical coverage close to the nominal 95% level for all sample sizes, and the same pattern holds at censoring/missing levels of 35/5%. This behavior is expected; the proposed model accounts for censored values through an appropriate truncated likelihood. In contrast, the credible intervals given by the LOD and LOD/2 substitutions narrow as n increases, yet exhibi-
t declining coverage. Constant replacements at the detection limit (or its half) and mean imputation for missingness shift the conditional mean and compress the residual spread, producing attenuation. As the sample size increases, the posterior concentrates around this biased center, so intervals become too tight and miss the target more often.
This pattern is consistent with covariance components. With 15% censoring and 5% missingness, the NST-CLG model produces the shortest posterior intervals and coverage closest to the nominal 95% for all the parameters and sample sizes. When censoring/missingness increases to 35%/40%, the intervals widen as expected, but the ranking does not change, and the NST-CLG model remains the best approach, while LOD and LOD/2 continue to under-cover. Similar results were observed for the SAR process, excepti-
ng for the intercept β0 where the NST-CLG model presents sligthly larger interval lengths but still, better coverage probabilities.
Table 2: Simulation study I. Coverage probabilities of the covariance structure parameters considering a level of censoring of 15%
N Parameter NST-CLG LOD LOD/2
81
σ2 0.997 0.253 0.093 ρ 0.997 0.990 0.990 τ 2 0.980 0.9930 0.963 γ 0.888 0.987 0.993
256
σ2 1.000 0.080 0.053 ρ 0.973 0.963 0.963 τ 2 0.930 0.863 0.800 γ 0.923 0.880 0.910
625
σ2 0.990 0.110 0.063 ρ 0.993 0.767 0.767 τ 2 0.947 0.670 0.553 γ 0.967 0.860 0.903
5.2 Simulation study II: Predictive perfomance in time domain
In this study, we evaluate the prediction performance of our method by comparing it with the traditional imputation techniques used in Subsection 5.1. For this purpose, we first simulated a spatiotemporal Gaussian process considering both DAGAR and SAR structures. We used a fixed grid of size 5 (25 regions), varying the temporal observations to T1 = 17, T2 = 27 and T3 = 37, leaving Test,i = 10, 20, 30, i = 1, 2, 3 temporal data points to estimate the process and use the remaining observations to a-
ssess the performance of our prediction proposal. The total number of observations considered for the estimation will then be Ni = 250, 500, 750 for i = 1, 2, 3 respectively. We considered the model parameters and levels of censoring/missingness to be the same as in Subsection 5.1.
With respect to the comparison criteria, we consider (i) the squared root of the mean square prediction error (MSPE), which, following the notation of Subsection 4.2 and for fixed regions s1, . . . , sK, , K ≤ n, is computed as,
√
MSPE =
v u u u t
1
K ∗ npred
K
X
i=1
X
t ̃j ∈T ̃
nY ̃ (si, t ̃j) − Y (si, t ̃j)
o2
,
11

A PREPRINT - NOVEMBER 26, 2025
0
10
20
30
40
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
σ2
(a)
,
0.25
0.50
0.75
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
ρ
(b)
,
0
2
4
6
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
τ2
(c)
0.25
0.50
0.75
1.00
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
γ
(d)
Figure 3: Simulation study I. Credible interval lengths for the covariance structure parameters considering a censoring level of 15% and a missing level of 5%
(ii) mean lengths of the 95% posterior predictive credible intervals for all predicted values. For each predicted value, this quantity is computed by obtaining the credible interval limits as the 2.5% and 97.5% percentiles of its predictive posterior distribution sample, and then calculating the interval length as the difference between the upper and lower credible interval limits for each simulation. We then computed the mean of the interval lengths across all predictions. Finally, we compute (ii-
i) the mean coverage probability for all predictions. This measure was computed by obtaining the proportion of simulations in which each real value Y (si, t ̃j) lies inside its credible interval limits, and then computing the mean of these proportions over all the predicted values.
For this simulation study, we created three scenarios by computing all the comparison criteria for one-, three-, and seven-step-ahead predictions. Regarding the DAGAR model, Figure 4 and Table 3 show the results for N = 500 and both censoring levels. The results for N = 250 and N = 750 are presented in Tables S.4.8 and S.4.9 and Figures S.4.8 and S.4.9 of the Supplementary Material. On the other hand, Figures S.4.10 - S.4.12 and Tables S.4.10 - S.4.12 show the simulation results for the SAR correl-
ation.
With respect to the DAGAR model, the √MSPE for the LOD method was the worst across all sample sizes, censoring levels, and prediction settings. The NST-CLG model and LOD/2 are broadly similar, with the former being slightly better. The gap is larger for the prediction-interval length: the NST-CLG model produces the narrowest intervals, while LOD yields the widest. Moreover, LOD/2 returns coverage near 1.0 in every setting, indicating overly wide intervals. The LOD improved as the sample size appro-
ached the 95% target at N = 750, after under- or overshooting
12

A PREPRINT - NOVEMBER 26, 2025
at smaller sample sizes. By contrast, our model stays close to 95% across all sample sizes, censoring levels, and
prediction scenarios. Overall, the NST-CLG model delivers the best balance, with the smallest √MSPE and shortest intervals, while maintaining coverage near the nominal 95% level. Regarding the SAR model, all three methods yield
comparable √MSPE values at the 15% and 5% levels of censoring and missingness, across all sample sizes. However, when the proportion of censored data increases to 35% (keeping a 5% proportion of missingness), the performance of the LOD approach deteriorates noticeably, whereas LOD/2 and our approach exhibit similar behavior, with the NSTCLG model performing slightly better overall. Regarding credible interval lengths and coverage probabilities, the LOD/2 method produces wider credible intervals bu-
t achieves coverage probabilities close to the nominal 95% level across all sample sizes. In contrast, the LOD method provides intervals of similar width to those of the NST-CLG model, but its coverage probabilities remain noticeably lower than the 95% nominal level. On the other hand, our proposed model maintains shorter intervals while still achieving coverage rates near the nominal level, demonstrating a clear advantage over the two ad hoc methods.
0
2
4
6
137 Predictions
MSPE
Method
LOD LOD/2 NST-CLG
Censoring = 15%, Missing = 5%
(a)
,
0
2
4
6
137 Predictions
MSPE
Method
LOD LOD/2 NST-CLG
Censoring = 35%, Missing = 5%
(b)
,
6
9
12
15
137 Predictions
Credible interval length
Method
LOD LOD/2 NST-CLG
Censoring = 15%, Missing = 5%
(c)
6
9
12
15
137 Predictions
Credible interval length
Method
LOD LOD/2 NST-CLG
Censoring = 35%, Missing = 5%
(d)
Figure 4: Simulation study II. √MSPE and credible interval length considering a censoring level of 15% and a missing level of 5%, for one, three and seven-step-ahead predictions for N = 500.
6 Beijing CO concentrations spatiotemporal modeling
In this section, we apply our spatiotemporal model proposals to the CO concentrations obtained from the Beijing multi-station air quality dataset described in Section 2. Figure S.5.17 of the Supplementary Material illustrates the neighborhood relationships among monitoring stations. Preliminary analyses suggested that temperature (TEMP, °C),
13

A PREPRINT - NOVEMBER 26, 2025
Table 3: Simulation study II. Average coverage probabilities of credible intervals as a function of the number of predicted observations, with N = 500.
Predicted time observations
Censoring/missignness Method One Three Seven
15%/5%
NST-CLG 0.966 0.963 0.966 LOD 0.983 0.999 0.999 LOD/2 0.996 1.000 1.000
35%/5%
NST-CLG 0.956 0.963 0.963 LOD 0.886 0.896 0.916 LOD/2 1.000 1.000 1.000
wind speed (WSP, m/s), and atmospheric pressure (PRES, Pa) are suitable covariates for predicting CO concentrations. All predictors were centered at zero to facilitate the interpretation of the parameters in the mean structure. We also consider a log-transformation of CO, denoted log(CO), to induce symmetry in the response variable.
To gain insights into the temporal and spatial correlations, we imputed missing data using the mean value per region. We computed the autocorrelation (ACF) and partial autocorrelation (PACF) for each of the twelve sites and Moran’s I at each time point (see Figures S.5.13, S.5.14 and S.5.15 in the Supplementary Material). Moran’s I series indicates a statistically significant positive spatial autocorrelation at several time points. Likewise, the ACF and PACF panels reveal temporal dependence acros-
s sites; the gradual ACF decay coupled with a dominant lag-1 spike in the PACF is consistent with the AR(1) specification for the temporal component.
After the descriptive analysis, model (1) was fitted considering the mean structure as,
μ(si, tq) = β0 + β1TEMP⋆(si, tq) + β2WSP⋆(si, tq) + β3PRES⋆(si, tq),
where TEMP⋆, WSP⋆, and PRES⋆, are the centered variables defined in the description of Table 1. We also consider five correlation structures: DAGAR-AR(1), DAGAR-AR(2), CAR, SAR-AR(1), and SAR-AR(2). The last two models failed to converge, whereas the CAR model was successfully fitted using Cov(Y) = Q−1 in Algorithm 1, where the precision matrix Q = Q(ρs, ρt, ρst) was defined in Prates et al. [14]. The models were estimated using three chains of 40,000 iterations each, with burn-in and thinning per-
iods of 10,000 and 50, respectively. For model comparison, we employed the expected Akaike and Bayesian information criteria (EAIC and EBIC) to assess goodness of fit, and the expected log predictive density (ELPD) to evaluate predictive performance.
Table 4 presents the posterior estimates and model selection criteria for the Beijing air pollutant dataset under the DAGAR–AR(1), DAGAR–AR(2), and CAR correlation structures. The estimated regression coefficients were similar for all models, with credibility intervals indicating their significance. However, the covariance parameters show differences. The DAGAR–AR(1) model achieves the lowest DIC and EAIC values, suggesting a better overall fit and a more parsimonious structure than the DAGAR–AR(2-
) model, whose second-order temporal parameter is not significant. By contrast, the CAR model presented the highest ELPD value, indicating better predictive performance, although at the cost of greater model complexity. Overall, the DAGAR–AR(1) model strikes a good balance between interpretability and estimation efficiency. The estimated temporal parameter γ1 = 0.529 captures the exponential decay pattern and pronounced peak observed in the empirical ACF and PACF, confirming the adequacy of the AR-
(1) temporal structure. Together, γ1 = 0.529 and ρ = 0.679 suggest a moderate temporal and spatial dependence between observations separated by 12 hours and among neighboring regions. The coefficient ργ1, on the other hand, indicates a moderate spatiotemporal association between neighbors and their past. By contrast, the CAR structure provides the best out-of-sample predictive performance. This improvement is illustrated in Figure 5 and Figure S.5.16 of the Supplementary Material. An enhanced pred-
iction accuracy can be seen when using the CAR correlation.
Regarding convergence and diagnostics, the DAGAR AR(1) model showed stable behavior with well-mixed MCMC chains, as illustrated in Figures S.5.19 and S.5.20 of the Supplementary Material. The Gelman and Rubin statistics in Table S.5.13 of the Supplementary Material further confirm this result, indicating that the posterior estimates are reliable and that the model assumptions are met adequately.
14

A PREPRINT - NOVEMBER 26, 2025
Table 4: Beijing air pollutant data. Estimated parameters and model selection criteria for the Beijing air pollutants dataset under different correlation structures.
DAGAR-AR(1) DAGAR-AR(2) CAR
β0 7.05 (6.957,7.124) 7.047 (6.965,7.118) 7.072 (6.787,7.367) β1 -0,037 (-0.047,-0.028) -0.038 (-0.047,-0.027) -0.039 (-0.047,-0.031) β2 -0.226 (-0.259,-0.191) -0.229 (-0.260,-0.197) -0.221 (-0.249,-0.191) β3 -5.588 (-6.728,-4.743) -5.742 (-6.602,-4.675) -5.754 (-6.575,-4.866) σ2 0.524 (0.484,0.560) 0,522 (0.482,0.562) 4.054 (3.812,4.334) ρ (ρs) 0.679 (0.617,0.734) 0.660 (0.592,0.735) 0.995 (0.982,0.999) γ1(ρt) 0.529 (0.446,0.604) 0.446 (0.311,0.581) 0.986 (0.958,0.996) γ2 —- 0.091 (-0.005,0.217) -
—ργ1 (ρst) 0.357 (0.288,0.430) 0.294 (0.197,0.402) 0.996 (0.989,0.999) ργ2 —- 0.060 (-0.003,0.140) —τ 2 0.149 (0.119,0.180) 0.139 (0.105,0.176) —DIC 4074.276 4073.508 4296.148 EAIC 4082.164 4078.842 4306.731 EBIC 4162.027 4168.689 4381.992 ELPD -97.779 -96.897 -82.502
Shunyi Tiantan Wanliu Wanshouxigong
Guanyuan Gucheng Huairou Nongzhanguan
Aotizhongxin Changping Dingling Dongsi
Feb 20 Feb 23 Feb 26 Feb 20 Feb 23 Feb 26 Feb 20 Feb 23 Feb 26 Feb 20 Feb 23 Feb 26
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
Date
Log(CO)
Observed Log(CO) Predicted Log(CO)
Figure 5: Beijing air pollutant data. Observed and predicted log(CO) concentrations for the CAR model across twelve monitoring stations. The shaded areas represent 95% predictive intervals.
15

A PREPRINT - NOVEMBER 26, 2025
7 Discussion
In this paper, we introduced a new methodology for analyzing spatiotemporal areal data with censored and missing responses. We propose a novel spatiotemporal random effect that jointly captures temporal autoregressive and spatial DAGAR dependencies, leading to an interpretable model structure in which the parameters can be directly understood as temporal, spatial, and spatiotemporal associations. Although our framework was developed under the multivariate normal assumption, the proposed random eff-
ect can readily be extended to non-Gaussian settings, such as count data.
Simulation studies demonstrated that our approach outperforms common ad hoc strategies for handling censored or missing data, such as replacing censored observations with LOD or LOD/2 and imputing missing values with the sample mean. Moreover, the proposed method achieved superior predictive accuracy for new observations compared to standard techniques that rely on partial information.
In the application of the log(CO) concentrations, the proposed model achieved a better fit according to the DIC, EAIC, and EBIC criteria, indicating improved interpretability and estimation efficiency. Conversely, the CAR model yielded a slightly better out-of-sample predictive performance, a trade-off that is not uncommon, as the choice between models often depends on whether the primary goal is explanation or prediction [see 11, 17].
Future research directions include extending the model to handle multiple variables, each with its own spatiotemporal correlation structure (MDAGAR), and developing analogous methods for non-Gaussian data that preserve the proposed spatiotemporal dependence. We are also interested in exploring non-separable spatiotemporal structures defined over graphs, which will be the primary focus of our forthcoming paper.
8 Acknowledgments
Jose A. Ordon ̃ez acknowledges the financial support from the Agencia Nacional de Investigacio ́n y Desarrollo ANID, FONDECYT Postdoctorado 3240170. The work of Luis M. Castro was partially supported by the Agencia Nacional de Investigacio ́n y Desarrollo ANID, FONDECYT Regular 117029.
References
[1] Anderson, J., Thundiyil, J., and Stolbach, A. (2011). “Clearing the air: a review of the effects of particulate matter air pollution on human health.” Journal of Medical Toxicology, 2(8): 166–175. 1
[2] Banerjee, S. (2021). “Modeling massive spatial datasets using a conjugate Bayesian linear regression framework.” Spatial Statistics, 41: 100498.
URL https://arxiv.org/abs/2109.04447 10
[3] Banerjee, S., Gelfand, A. E., and Carlin, B. P. (2025). Hierarchical modeling and analysis for spatial data. Boca Raton: Chapman and Hall/CRC, 3 edition.
URL https://doi.org/10.1201/9781003401728 5, 8
[4] Barndorff-Nielsen, O. and Schou, G. (1973). “On the parametrization of autoregressive models by partial autocorrelations.” Journal of Multivariate Analysis, 3(4): 408–419. 6
[5] Berger, O., J., De Oliveira, V., and Sanso ́, B. (2001). “Objective Bayesian Analysis of Spatially Correlated Data.” Journal of the American Statistical Association, 96(456): 1361–1374. 8
[6] Besag, J. (1974). “Spatial interaction and statistical analysis of lattice systems.” Journal of the Royal Statistical Society, Series B, 36: 192–225. 2
[7] Chen, K., Breitner, S., Wolf, K., Stafoggia, M., Sera, F., Vicedo-Cabrera, A. M., Guo, Y., Tong, S., Lavigne, E., Matus, P., Valde ́s, N., Kan, H., Jaakkola, J. J. K., Ryti, N. R. I., Huber, V., Scortichini, M., Hashizume, M., Honda, Y., Nunes, B., Madureira, J., Holobaˆca ̆, I. H., Fratianni, S., Kim, H., Lee, W., Tobias, A.,  ́In ̃iguez, C., Forsberg, B.,  ̊Astro ̈m, C., Ragettli, M. S., Guo, Y.-L. L., Chen, B.-Y., Li, S., Milojevic, A., Zanobetti, A., Schwartz, J., Bell, M. L., Gasparrini, -
A., and Schneider, A. (2021). “Ambient carbon monoxide and daily mortality: a global time-series study in 337 cities.” The Lancet Planetary Health, 5(4): e191–e199. 1
[8] Datta, A., Banerjee, S., Hodges, J. S., and Gao, L. (2019). “Spatial disease mapping using directed acyclic graph auto-regressive (DAGAR) models.” Bayesian Analysis, 14(4): 1221 – 1244. 2, 8
[9] de Luna, X. and Genton, M. G. (2005). “Predictive spatio-temporal models for spatially sparse environmental data.” Statistica Sinica, 15: 547–568. 2
[10] Deb, S. and Tsay, R. S. (2019). “Spatio-Temporal models with space-time Interaction and their applications to air pollution data.” Statistica Sinica, 29: 1181–1207. 2
16

A PREPRINT - NOVEMBER 26, 2025
[11] Gelman, A., Hwang, J., and Vehtari, A. (2014). “Understanding predictive information criteria for Bayesian models.” Statistics and Computing, 24(6): 997–1016. 16
[12] Kim, Y., Yi, S.-M., Heo, J., Kim, H., Lee, W., Kim, H., Hopke, P. K., Lee, Y. S., Shin, H.-J., Park, J., Yoo, M., Jeon, K., and Park, J. (2024). “Is replacing missing values of PM2.5 constituents with estimates using machine learning better for source apportionment than exclusion or median replacement?” Environmental Pollution, 354: 124165. 5
[13] McMahon, K. and Launico, M. V. (2025). “Carbon monoxide toxicity.” In StatPearls. Treasure Island, FL: StatPearls Publishing. 1
[14] Prates, M. O., Azevedo, D. R. M., MacNab, Y. C., and Willig, M. R. (2022). “Non-separable spatio-temporal models via transformed multivariate Gaussian Markov random fields.” Journal of the Royal Statistical Society: Series C (Applied Statistics), 71(5). 14
[15] Raub, J. (1999). “Health effects of exposure to ambient carbon monoxide.” Chemosphere: Global Change Science, (1): 331–351. 1
[16] Schelin, L. and de Luna, S. S. (2014). “Spatial prediction in the presence of left-censoring.” Computational Statistics & Data Analysis, 74: 125–141. 10
[17] Shmueli, G. (2010). “To explain or to predict?” Statistical Science, 25(3): 289–310. 16
[18] Valeriano, K. A. L., Lachos, V. H., Prates, M. O., and Matos, L. A. (2021). “Likelihood-based inference for spatiotemporal data with censored and missing responses.” Environmetrics, 32(3): e2663. 2
[19] Wall, M. M. (2004). “A close look at the spatial structure implied by the CAR and SAR models.” Journal of Statistical Planning and Inference, 121(2): 311–324. 8
[20] Wang, W. and Sun, Y. (2019). “Penalized local polynomial regression for spatial data.” Biometrics, 75(4): 1179–1190. 2
[21] Wardana, I. N. K., Gardner, J. W., and Fahmy, S. A. (2022). “Estimation of missing air pollutant data using a spatiotemporal convolutional autoencoder.” Neural Computing and Applications, 34: 16129–16154. 3
[22] Whittle, P. (1954). “On stationary process in the plane.” Biometrika, 41: 434–449. 2
[23] Zhang, S., Guo, B., Dong, A., He, J., Xu, Z., and Chen, S. X. (2017). “Cautionary tales on air-quality improvement in Beijing.” Proceedings of the Royal Society A: Mathematical, Physical and Engineering Sciences, 473. 2
9 Appendix
9.1 Proof of Proposition 3.1
Given the correlation matrix in equation (5) of the main manuscript, and a fixed position si, ωsi can be written as,
ω(si, tj) = γ1ω(si, tj−1) + γ2ω(si, tj−2) + . . . γpω(si, tj−p) + ε(si, tj),
with ε(si, tj) ∼ N (0, σ2), t > p, k = 1, . . . , p. Denote the backward shift matrices as J1, . . . , Jp, with [Jk](t,t−k) = 1, for t > k and 0 elsewhere. Then, we can write the process in its vectorial form,
ωsi = γ1J1ωsi + . . . + γpJpωsi + εsi ,
with εsi = (ε(si, t1), . . . , ε(si, tT )) ∼ N (0, D) and D = diag(σ2). Therefore,
(I − γ1J1 − . . . γpJp)ωsi = εsi . (17)
If we set BT = Pp
k=1 γkJk, and FT = diag(1/σ2), then, we can deduce from (17), that ωsi can be written as a
directed aciclyc graph and that ωsi ∼ NT (0, (IT − BT )⊤FT (IT − BT ) −1). Therefore, ωsi follows a T-variate normal distribution as settled in Proposition 3.1 of the main manuscript.
17

A PREPRINT - NOVEMBER 26, 2025
9.2 Proof of Theorem 3.1
From Proposition 3.1 of the main manuscript, we can represent σ2Φ = (IT − BT )⊤FT (IT − BT ) −1. Also, given
the SAR/DAGAR structure, we can represent the spatial covariance as Σ = (In − Bn)⊤Fn(In − Bn) with Bn and Fn defined for both cases in Subsection 3.1 of the main manuscript. Therefore, by the Kronecker product properties,
Σ ⊗ σ2Φ = (In − Bn)⊤Fn(In − Bn) −1 ⊗ (IT − BT )⊤FT (IT − BT ) −1
= (In − Bn)−1 ⊗ (IT − BT )−1 F−1
n ⊗ F−1
T (In − Bn)−1 ⊗ (IT − BT )−1 ⊤
= [(In − Bn) ⊗ (IT − BT )]−1(Fn ⊗ FT )−1{[(In − Bn) ⊗ (IT − BT )]−1}⊤
= {[(In − Bn) ⊗ (IT − BT )]⊤(Fn ⊗ FT )[(In − Bn) ⊗ (IT − BT )]}−1
Now,
(In − Bn) ⊗ (IT − BT ) = (In ⊗ IT − In ⊗ BT − Bn ⊗ IT + Bn ⊗ BT )
= InT − BnT ,
where InT is the identity matrix of order nT and BnT = In ⊗ BT + Bn ⊗ IT − Bn ⊗ BT . Then,
Σ ⊗ σ2Φ = [(InT − BnT )⊤FnT (InT − BnT )]−1
with FnT = Fn ⊗ FT . Then ω ∼ Nn×T (0, [(InT − BnT )⊤FnT (InT − BnT )]−1) and therefore, it can be expressed as a SAR/DAGAR process depending on the definition of Bn, Fn. Note that we can express equations (10) and (11) in its matrix form, i.e,
ω = (In ⊗ BT )ω + (Bn ⊗ IT )ω − (Bn ⊗ BT )ω + ε
9.3 Proof of Proposition 4.1
Let λ = (ρ, ψ, φ) the parameters associated to the covariance structure. The posterior π(β, σ2, λ | y) can be rewritten as,
π(β, σ2, λ | y) ∝ π(β, σ2 | λ, y)π(λ | y).
Also,
π(β, σ2 | λy)π(λ | y) ∝ π(β, σ2 | λ)π(λ)L(β, σ2, λ | y),
then,
π(λ | y) ∝ π(β, σ | λ)L(β, σ2, λ | y)
π(β, σ2 | λy) π(λ). (18)
For our particular case, we have,
18

A PREPRINT - NOVEMBER 26, 2025
π(β, σ2|λ, y) ∝ 1
|Vβˆ| 1
2
exp


−
β − βˆ
⊤
V −1
βˆ β − βˆ
2σ2


×
S2 n−p
2 (σ2)−( ν
2 +1) exp − (n − p)S2
2σ2 (19)
L(β, σ2, λ | y) ∝ 1
(σ2)n/2 |Σψ|1/2 exp − (y − Xβ)⊤Σψ−1(y − Xβ)
2σ2 (20)
π(β, σ2 | λ)π(λ) ∝ π(λ)
σ2 , (21)
with S2
ψ, Vβˆ and βˆ as defined at the end of Proposition 3.1. Substituting,
(y − Xβ)⊤Σψ−1(y − Xβ) = (β − βˆ)⊤V −1
βˆ (β − βˆ) + (y − Xβˆ)⊤Σψ−1(y − Xβˆ)
in equation (20), and then substituting (19), (20) and (21) in equation (18), the exponential terms in (19) and (20) will vanish. After some additional algebra we get,
π(λ | y) ∝ |Σψ|1/2 Vβˆ
1/2
S2 −n−p/2 π(λ)
10 Additional Simulation results
Table 5: Simulation study 1 - DAGAR model. Coverage probabilities of the mean structure parameters considering a level of censoring of 15%
N Parameter NST-CLG LOD LOD/2
81
β0 0.953 0.013 0.983 β1 0.970 0.030 0.907 β2 0.943 0.000 0.917
256
β0 0.937 0.000 0.880 β1 0.920 0.000 0.583 β2 0.930 0.000 0.600
625
β0 0.937 0.000 0.663 β1 0.957 0.000 0.240 β2 0.940 0.000 0.360
Table 6: Simulation study 1 - DAGAR model. Coverage probabilities of the mean structure parameters considering a level of censoring of 35%
N Parameter NST-CLG LOD LOD/2
81
β0 0.953 0.000 0.893 β1 0.933 0.003 0.973 β2 0.940 0.000 0.957
256
β0 0.917 0.000 1.000 β1 0.910 0.000 0.990 β2 0.937 0.000 0.533
625
β0 0.927 0.000 0.993 β1 0.920 0.000 0.477 β2 0.943 0.000 0.190
19

A PREPRINT - NOVEMBER 26, 2025
1
2
3
4
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
β0
(a)
,
0.2
0.4
0.6
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
β1
(b)
,
0.1
0.2
0.3
0.4
0.5
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
β2
(c)
Figure 6: Simulation study 1 - DAGAR model. Credible interval lenghts for the mean structure parameters considering a censoring level of 15% and missing level of 5%
Table 7: Simulation study 1 - DAGAR model. Coverage probabilities of the covariance structure parameters considering a level of censoring of 35%
N Parameter NST-CLG LOD LOD/2
81
σ2 1.000 0.010 0.000 ρ 0.993 0.980 0.980 τ 2 0.957 0.990 0.220 φ 0.997 0.860 1.000
256
σ2 1.000 0.000 0.000 ρ 0.993 0.870 0.870 τ 2 0.937 0.997 0.133 φ 0.943 0.4530 0.893
625
σ2 0.997 0.000 0.000 ρ 0.963 0.653 0.653 τ 2 0.920 0.983 0.107 φ 0.950 0.463 0.853
20

A PREPRINT - NOVEMBER 26, 2025
1
2
3
4
5
6
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
β0
(a)
,
0.25
0.50
0.75
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
β1
(b)
,
0.2
0.4
0.6
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
β2
(c)
Figure 7: Simulation study 1 - DAGAR model. Credible interval lengths for the mean structure parameters with censoring level c = 0.35 and missing level miss = 0.05.
Table 8: Simulation study 1 - SAR model. Coverage probabilities of the mean structure parameters considering a level of censoring of 15%
N Parameter NST-CLG LOD LOD/2
81
β0 0.903 0.133 0.903 β1 0.920 0.020 0.740 β2 0.950 0.000 0.847
256
β0 0.923 0.040 0.720 β1 0.933 0.000 0.520 β2 0.960 0.000 0.380
625
β0 0.923 0.000 0.800 β1 0.930 0.000 0.530 β2 0.933 0.000 0.280
21

A PREPRINT - NOVEMBER 26, 2025
0
20
40
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
σ2
(a)
,
0.25
0.50
0.75
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
ρ
(b)
,
0.0
2.5
5.0
7.5
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
τ2
(c)
0.25
0.50
0.75
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
γ
(d)
Figure 8: Simulation study 1 - DAGAR model. Credible interval lengths for the covariance structure parameters with censoring level c = 0.35 and missing level miss = 0.05.
Table 9: Simulation study 1 - SAR model. Coverage probabilities of the mean structure parameters considering a level of censoring of 35%
N Parameter NST-CLG LOD LOD/2
81
β0 0.937 0.007 0.770 β1 0.953 0.000 0.820 β2 0.960 0.000 0.927
256
β0 0.907 0.000 0.497 β1 0.957 0.000 0.043 β2 0.943 0.000 0.463
625
β0 0.950 0.000 0.463 β1 0.920 0.000 0.040 β2 0.933 0.000 0.117
22

A PREPRINT - NOVEMBER 26, 2025
0
20
40
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
β0
(a)
,
0.2
0.4
0.6
0.8
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
β1
(b)
,
0.2
0.4
0.6
0.8
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
β2
(c)
Figure 9: Simulation study 1 - SAR model. Credible interval lenghts for the mean structure parameters considering a censoring level of 15% and missing level of 5%
Table 10: Simulation study 1 - SAR model. Coverage probabilities of the covariance structure parameters considering a level of censoring of 15%
N Parameter NST-CLG LOD LOD/2
81
σ2 0.937 0.000 0.000 ρ 0.930 0.253 0.253 τ 2 0.990 0.897 0.740 φ 0.957 0.870 0.883
256
σ2 0.990 0.000 0.000 ρ 0.960 0.050 0.050 τ 2 0.990 0.673 0.590 φ 0.977 0.563 0.740
625
σ2 0.960 0.000 0.000 ρ 0.980 0.027 0.027 τ 2 0.973 0.187 0.027 φ 0.977 0.303 0.617
23

A PREPRINT - NOVEMBER 26, 2025
0
5
10
15
20
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
σ2
(a)
,
0.2
0.4
0.6
0.8
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
ρ
(b)
,
2
4
6
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
τ2
(c)
0.25
0.50
0.75
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
γ
(d)
Figure 10: Simulation study 1 - SAR model. Credible interval lengths for the covariance structure parameters considering a censoring level of 15% and missing level of 5%
Table 11: Simulation study 1 - SAR model. Coverage probabilities of the covariance structure parameters considering a level of censoring of 35%
N Parameter NST-CLG LOD LOD/2
81
σ2 0.923 0.003 0.000 ρ 0.933 0.067 0.067 τ 2 0.993 0.917 0.093 φ 0.970 0.437 0.767
256
σ2 0.980 0.000 0.000 ρ 0.953 0.830 0.013 τ 2 1.000 0.903 0.090 φ 0.973 0.213 0.330
625
σ2 0.983 0.000 0.000 ρ 0.970 0.000 0.000 τ 2 0.993 0.610 0.000 φ 0.977 0.027 0.200
24

A PREPRINT - NOVEMBER 26, 2025
0
10
20
30
40
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
β0
(a)
,
0.2
0.4
0.6
0.8
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
β1
(b)
,
0.25
0.50
0.75
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
β2
(c)
Figure 11: Simulation study 1 - SAR model. Credible interval lenghts for the mean structure parameters with censoring level c = 0.35 and missing level miss = 0.05.
Table 12: Simulation study 2 - DAGAR model. Average coverage probabilities of credible intervals varying the number of predicted observations, considering N = 250.
Predicted time observations
Censoring/missignness Method One Three Seven
20%
MTN 0.966 0.966 0.970 LOD 0.993 0.990 0.986 LOD/2 0.996 1.000 1.000
40%
MTN 0.983 0.980 0.980 LOD 0.956 0.963 0.960 LOD/2 1.000 1.000 1.000
25

A PREPRINT - NOVEMBER 26, 2025
0
10
20
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
σ2
(a)
,
0.2
0.4
0.6
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
ρ
(b)
,
0.0
2.5
5.0
7.5
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
τ2
(c)
0.25
0.50
0.75
81 256 625 N
Credible interval length
Method LOD LOD/2 NST−CLG
γ
(d)
Figure 12: Simulation study 1 - SAR model. Credible interval lengths for the covariance structure parameters with censoring level c = 0.35 and missing level miss = 0.05.
Table 13: Simulation study 2 - DAGAR model. Average coverage probabilities of credible intervals varying the number of predicted observations, considering N = 750.
Predicted time observations
Censoring/missignness Method One Three Seven
20%
MTN 0.953 0.960 0.966 LOD 0.990 0.990 0.990 LOD/2 0.996 1.000 1.000
40%
MTN 0.966 0.973 0.973 LOD 0.936 0.923 0.923 LOD/2 1.000 1.000 1.000
26

A PREPRINT - NOVEMBER 26, 2025
Table 14: Simulation study 2 - SAR model. Average coverage probabilities of credible intervals varying the number of predicted observations, considering N = 250.
Predicted time observations
Censoring/missignness Method One Three Seven
20%
MTN 0.940 0.940 0.946 LOD 0.926 0.920 0.923 LOD/2 0.963 0.966 0.970
40%
MTN 0.933 0.936 0.936 LOD 0.860 0.873 0.870 LOD/2 0.976 0.980 0.980
Table 15: Simulation study 2 - SAR model. Average coverage probabilities of credible intervals varying the number of predicted observations, considering N = 500.
Predicted time observations
Censoring/missignness Method One Three Seven
20%
MTN 0.940 0.940 0.943 LOD 0.930 0.930 0.940 LOD/2 0.956 0.960 0.963
40%
MTN 0.933 0.933 0.940 LOD 0.830 0.826 0.830 LOD/2 0.983 0.986 0.986
Table 16: Simulation study 2 - SAR model. Average coverage probabilities of credible intervals varying the number of predicted observations, considering N = 750.
Predicted time observations
Censoring/missignness Method One Three Seven
20%
MTN 0.950 0.943 0.940 LOD 0.936 0.930 0.930 LOD/2 0.960 0.963 0.966
40%
MTN 0.940 0.943 0.943 LOD 0.886 0.850 0.846 LOD/2 0.986 0.986 0.986
27

A PREPRINT - NOVEMBER 26, 2025
0
2
4
6
137 Predictions
MSPE
Method
LOD LOD/2 NST-CLG
Censoring = 15%, Missing = 5%
(a)
,
0
2
4
6
137 Predictions
MSPE
Method
LOD LOD/2 NST-CLG
Censoring = 35%, Missing = 5%
(b)
,
6
9
12
15
137 Predictions
Credible interval length
Method
LOD LOD/2 NST-CLG
Censoring = 15%, Missing = 5%
(c)
6
9
12
15
137 Predictions
Credible interval length
Method
LOD LOD/2 NST-CLG
Censoring = 35%, Missing = 5%
(d)
Figure 13: Simulation study 2 - DAGAR model. Comparison of our proposal (NST-CLG ) with methods that impute the censored observations by using the limit of detection. For this scenario, we consider N = 250.
28

A PREPRINT - NOVEMBER 26, 2025
0
2
4
6
137 Predictions
MSPE
Method
LOD LOD/2 NST-CLG
Censoring = 15%, Missing = 5%
(a)
,
0
2
4
6
137 Predictions
MSPE
Method
LOD LOD/2 NST-CLG
Censoring = 35%, Missing = 5%
(b)
,
6
9
12
15
137 Predictions
Credible interval length
Method
LOD LOD/2 NST-CLG
Censoring = 15%, Missing = 5%
(c)
6
9
12
15
137 Predictions
Credible interval length
Method
LOD LOD/2 NST-CLG
Censoring = 35%, Missing = 5%
(d)
Figure 14: Simulation study 2 - DAGAR model. Comparison of our proposal (NST-CLG ) with methods that impute the censored observations by using the limit of detection. For this scenario, we consider N = 750.
29

A PREPRINT - NOVEMBER 26, 2025
0
2
4
6
8
137 Predictions
MSPE
Method
LOD LOD/2 NST-CLG
Censoring = 15%, Missing = 5%
(a)
,
0
2
4
6
8
137 Predictions
MSPE
Method
LOD LOD/2 NST-CLG
Censoring = 35%, Missing = 5%
(b)
,
4
8
12
16
137 Predictions
Credible interval length
Method
LOD LOD/2 NST-CLG
Censoring = 15%, Missing = 5%
(c)
4
8
12
16
137 Predictions
Credible interval length
Method
LOD LOD/2 NST-CLG
Censoring = 35%, Missing = 5%
(d)
Figure 15: Simulation study 2 - SAR model. Comparison of our proposal (NST-CLG ) with methods that impute the censored observations by using the limit of detection. For this scenario, we consider N = 250.
30

A PREPRINT - NOVEMBER 26, 2025
0
2
4
6
8
137 Predictions
MSPE
Method
LOD LOD/2 NST-CLG
Censoring = 15%, Missing = 5%
(a)
,
0
2
4
6
8
137 Predictions
MSPE
Method
LOD LOD/2 NST-CLG
Censoring = 35%, Missing = 5%
(b)
,
4
8
12
16
137 Predictions
Credible interval length
Method
LOD LOD/2 NST-CLG
Censoring = 15%, Missing = 5%
(c)
4
8
12
16
137 Predictions
Credible interval length
Method
LOD LOD/2 NST-CLG
Censoring = 35%, Missing = 5%
(d)
Figure 16: Simulation study 2 - SAR model. Comparison of our proposal (NST-CLG ) with methods that impute the censored observations by using the limit of detection. For this scenario, we consider N = 500.
31

A PREPRINT - NOVEMBER 26, 2025
0
2
4
6
8
137 Predictions
MSPE
Method
LOD LOD/2 NST-CLG
Censoring = 15%, Missing = 5%
(a)
,
0
2
4
6
8
137 Predictions
MSPE
Method
LOD LOD/2 NST-CLG
Censoring = 35%, Missing = 5%
(b)
,
4
8
12
16
137 Predictions
Credible interval length
Method
LOD LOD/2 NST-CLG
Censoring = 15%, Missing = 5%
(c)
4
8
12
16
137 Predictions
Credible interval length
Method
LOD LOD/2 NST-CLG
Censoring = 35%, Missing = 5%
(d)
Figure 17: Simulation study 2 - SAR model. Comparison of our proposal (NST-CLG ) with methods that impute the censored observations by using the limit of detection. For this scenario, we consider N = 750.
32

A PREPRINT - NOVEMBER 26, 2025
11 Beijing data: Additional results
Shunyi Tiantan Wanliu Wanshouxigong
Guanyuan Gucheng Huairou Nongzhanguan
Aotizhongxin Changping Dingling Dongsi
1 6 11 16 1 6 11 16 1 6 11 16 1 6 11 16
0.0
0.2
0.4
0.0
0.2
0.4
0.0
0.2
0.4
Lag
ACF
Figure 18: Beijing air pollutants data. Autocorrelation function of log-transformed CO concentrations, with missing values imputed using the station-wise mean.
33

A PREPRINT - NOVEMBER 26, 2025
Shunyi Tiantan Wanliu Wanshouxigong
Guanyuan Gucheng Huairou Nongzhanguan
Aotizhongxin Changping Dingling Dongsi
1 6 11 16 1 6 11 16 1 6 11 16 1 6 11 16
−0.2
0.0
0.2
0.4
−0.2
0.0
0.2
0.4
−0.2
0.0
0.2
0.4
Lag
PACF
Figure 19: Beijing air pollutants data. Partial autocorrelation function of log-transformed CO concentrations, with missing values imputed using the station-wise mean.
Table 17: Beijing air pollutants data. Gelman and Rubin convergence test for the DAGAR model
R (point estimate) Upper CI
β0 1.00 1.00 β1 1.00 1.00 β2 1.00 1.00 β3 1.00 1.01 σ2 0.99 1.00 ρ 1.00 1.01 γ 0.99 1.00 τ 2 1.00 1.00
34

A PREPRINT - NOVEMBER 26, 2025
−0.3
0.0
0.3
0.6
0 50 100 150
Time
Moran’s I
Significance
Not sig. Significant
Figure 20: Beijing air pollutants data. Moran’s I statistics for log-transformed CO concentrations at different time points, with missing values imputed using the station-wise mean.
35

A PREPRINT - NOVEMBER 26, 2025
Shunyi Tiantan Wanliu Wanshouxigong
Guanyuan Gucheng Huairou Nongzhanguan
Aotizhongxin Changping Dingling Dongsi
Feb 20 Feb 23 Feb 26 Feb 20 Feb 23 Feb 26 Feb 20 Feb 23 Feb 26 Feb 20 Feb 23 Feb 26
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
2
4
6
8
Date
Log(CO)
Observed Log(CO) Predicted Log(CO)
Figure 21: Beijing air pollutants data. Observed and predicted Log(CO) concentrations for the DAGAR model across 12 monitoring stations. The shaded areas represent 95% predictive intervals.
Aot
Cha
Din
Don
Gua
Guc
Hua
Non
Shu Tia
Wan
Wan
Figure 22: Beijing air pollutants data. Spatial network of the twelve air-quality monitoring sites in Beijing. The nodes correspond to monitoring stations used in the pollutant analysis, and the edges represent spatial neighborhood relationships.
36

A PREPRINT - NOVEMBER 26, 2025
0.000
0.025
0.050
0.075
0.100
6.9 7.0 7.1 7.2 β0
Frequency
(a)
,
0.00
0.03
0.06
0.09
0.12
−0.05 −0.04 −0.03 −0.02 β1
Frequency
(b)
,
0.000
0.025
0.050
0.075
0.100
−0.28 −0.24 −0.20 β2
Frequency
(c)
0.000
0.025
0.050
0.075
−7 −6 −5 −4 β3
Frequency
(d)
0.00
0.03
0.06
0.09
0.45 0.50 0.55 0.60
σ2
Frequency
(e)
,
0.000
0.025
0.050
0.075
0.100
0.60 0.65 0.70 0.75 ρ
Frequency
(f)
,
0.000
0.025
0.050
0.075
0.100
0.4 0.5 0.6 γ
Frequency
(g)
0.00
0.02
0.04
0.06
0.08
0.100 0.125 0.150 0.175 0.200
τ2
Frequency
(h)
Figure 23: Beijing air pollutants data.. Posterior distribution of the parameters for the DAGAR -AR(1) model.
37

A PREPRINT - NOVEMBER 26, 2025
6.9
7.0
7.1
7.2
0 200 400 600 Index
β0
Chain Chain 1 Chain 2 Chain 3
(a)
,
−0.05
−0.04
−0.03
−0.02
0 200 400 600 Index
β1
Chain Chain 1 Chain 2 Chain 3
(b)
,
−0.275
−0.250
−0.225
−0.200
−0.175
0 200 400 600 Index
β2
Chain Chain 1 Chain 2 Chain 3
(c)
−7
−6
−5
−4
0 200 400 600 Index
β3
Chain Chain 1 Chain 2 Chain 3
(d)
0.48
0.52
0.56
0 200 400 600 Index
σ2
Chain Chain 1 Chain 2 Chain 3
(e)
,
0.60
0.65
0.70
0.75
0 200 400 600 Index
ρ
Chain Chain 1 Chain 2 Chain 3
(f)
,
0.4
0.5
0.6
0 200 400 600 Index
γ
Chain Chain 1 Chain 2 Chain 3
(g)
0.100
0.125
0.150
0.175
0.200
0 200 400 600 Index
τ2
Chain Chain 1 Chain 2 Chain 3
(h)
Figure 24: Beijing air pollutants data. Posterior chains of parameters for the DAGAR -AR(1) model.
38

A PREPRINT - NOVEMBER 26, 2025
0.00
0.25
0.50
0.75
1.00
0 10 20 Lag
ACF
β0
(a)
,
0.00
0.25
0.50
0.75
1.00
0 10 20 Lag
ACF
β1
(b)
,
0.00
0.25
0.50
0.75
1.00
0 10 20 Lag
ACF
β2
(c)
0.00
0.25
0.50
0.75
1.00
0 10 20 Lag
ACF
β3
(d)
0.00
0.25
0.50
0.75
1.00
0 10 20 Lag
ACF
σ2
(e)
,
0.00
0.25
0.50
0.75
1.00
0 10 20 Lag
ACF
ρ
(f)
,
0.00
0.25
0.50
0.75
1.00
0 10 20 Lag
ACF
γ
(g)
0.00
0.25
0.50
0.75
1.00
0 10 20 Lag
ACF
τ2
(h)
Figure 25: Beijing air pollutants data. ACF of the parameters for the DAGAR -AR(1) model.
39

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:42.297Z
- **Text Length:** 74388 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 39 of 39
