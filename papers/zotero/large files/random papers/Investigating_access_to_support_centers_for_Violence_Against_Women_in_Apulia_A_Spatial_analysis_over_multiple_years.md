# PDF Document: Cefalo et al. - 2025 - Investigating access to support centers for Violence Against Women in Apulia A Spatial analysis ove.pdf

**File Path:** Cefalo et al. - 2025 - Investigating access to support centers for Violence Against Women in Apulia A Spatial analysis ove.pdf

**Processed Date:** 2026-02-10T18:17:25.773Z

**File Size:** 2271.13 KB

**Total Pages:** 20

**Extracted Pages:** 20

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3437

**Title:** Investigating access to support centers for Violence Against Women in Apulia: A Spatial analysis over multiple years

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Investigating access to support centers for
Violence Against Women in Apulia: A Spatial
analysis over multiple years
Leonardo Cefalo 1, Crescenza Calculli1, and Alessio Pollice1
1Department of Economics and Finance, Universita` degli Studi di Bari Aldo Moro, Bari, Italy
November 26, 2025
Abstract
In this study, we address the challenge of modelling the spatial variability in violence against women across municipalities in a Southern Italian region by proposing a Bayesian spatio-temporal Poisson regression model. Using data on access to Local Anti-Violence Centers in the Apulia region from 2021 to 2024, we investigate the impact of municipality-level socioeconomic characteristics and local vulnerabilities on both the incidence and reporting of gender-based violence. To explicitly account fo-
r spatial dependence, we compare four spatial models within the Integrated Nested Laplace Approximation framework for Bayesian model estimation. We assess the relative fit of the competing models, discussing their prior assumptions, spatial confounding effects, and inferential implications. Our findings indicate that access to support services decreases with distance from the residential municipality, highlighting spatial constraints in reporting and the strategic importance of support center loca-
tion. Furthermore, lower education levels appear to contribute to under-reporting in disadvantaged areas, while higher economic development may be associated with a lower incidence of reported violence. This study emphasises the critical role of spatial modelling in capturing reporting dynamics and informing policy interventions.
1 Introduction
Violence against women (VAW) is a widespread violation of human rights and a form of gender-based discrimination, encompassing acts that cause or risk causing physical, sexual, psychological, or economic harm. As recognised by the Istanbul Convention (Council of Europe, 2011), this structural issue is deeply tied to persistent gender inequalities worldwide, making accurate data essential for understanding its scale and developing
1
arXiv:2511.20481v1 [stat.AP] 25 Nov 2025

effective policies. Despite this need, tracking gender-based violence remains challenging. In Italy, legislative initiatives such as Law No. 53/2022 (Italian Official Journal n.120, 2022) underscore the importance of systematic data collection for prevention, yet data sources remain fragmented, often outdated, and not easily accessible. Stigma and under-reporting further hinder accurate quantification, as many survivors fear social repercussions, blame, or disbelief. Local Anti-Violence Centers (-
AVCs), established under Italian Law No. 119/2013 (Italian Official Journal n. 242, 2013), play a crucial role in supporting victims through a holistic array of services, starting from consultancy and including psychological support, legal assistance, and sheltering, while also documenting cases of abuse. As stressed by Toffanin et al. (2020), a distinctive feature of AVCs is establishing intimate trust and promoting the subjectivity and the active role of women seeking help, instead of substituti-
ng to them in their decisional processes. Taking into account also the exclusive participation of women as AVC workers and the outworks activities carried out, such as training activities for health and social operators, law enforcement and lawyers or cultural initiatives (Italian National Institute of Statistics, 2024), qualifies AVCs not as mere service providers, but as core political actors in the process of combating systematic gender-based violence. In addition, it is worthwhile to notice th-
at both aims and operating modes of AVCs belong to a different conceptual level than judicial measures; hence, we deem that the access to AVCs deserves a dedicated, standalone analysis, not to be confused with the well-developed debate on violence reporting. In 2017, the Italian National Institute of Statistics (ISTAT) started monitoring the activity of AVCs (Italian National Institute of Statistics, 2024), capturing the scope and characteristics of violence experienced by women seeking help acros-
s the national territory. From then until 2023, the number of AVCs active over the national territory increased by 43.8%, with 404 AVCs operative in 2023. Similarly, the number of women accessing them increased by 41.5% (ibidem). This information may suggest that the expansion of AVC activity encourages women victims of violence to seek help and find a way out of violence and abuse. Records from AVCs provide valuable information on victim demographics and violence patterns (Toffanin et al., 2020),-
 enabling investigation of the distribution of the phenomenon at the territorial level and allowing us to assess how local socioeconomic factors affect the occurrence and reporting of VAW. As the process of finding a way out of violence may start with seeking help from AVCs (Statistical Office of the Apulia Region, 2024) and, more generally, from sheltering structures, the importance of shelter accessibility emerges immediately. On the one hand, a solution is provided by the availability of local -
help desks, which operate under the control of the AVCs and are widely distributed across the territory. On the other hand, the isolation of peripheral areas and the resulting lower accessibility to shelters may be hindering help-seeking, as noticed by Peek-Asa et al. (2011). In addition, Denti and Iammarino (2022) found strong evidence that local support services in the United Kingdom have a positive impact on gender-based violence reporting, even when controlling for the implementation of nation-
wide measures. Similarly, in Italy, Bettin and Cias
2

chini (2025) examined the Codice Rosa initiative (a triage code dedicated to hospitalising VAW victims) and anti-stalking help desks, highlighting the significant impact of the former on violence reporting nationwide. Building on this evidence, we investigate how local disparities in the accessibility of AVCs may shape women’s capacity to seek help and escape situations of violence. To this end, we propose a territorial analysis of accesses to AVCs within the Apulia region (Southern Italy) in yea-
rs 2021–2024, detailed by the origin municipality of women seeking help, by means of a Bayesian hierarchical spatio-temporal Poisson regression model (Martı ́nez-Beneito et al., 2008). We investigate the association of AVC accesses with both the distance from AVCs and help desks, and a set of socio-economic indicators employed to define the Municipality Frailty Index provided by the ISTAT 1. The inherent spatial dependence in the data suggests us to consider a latent spatial process, explicitly mo-
delled through four competing spatial structures: the Intrinsic Conditional Autoregressive model (ICAR, Besag and Kooperberg, 1995), the Proper Conditional Autoregressive model (PCAR, Gelfand and Vounatsou, 2003), the Leroux Conditional Autoregressive model (LCAR, Leroux et al., 1999) and the Besag, York and Mollie ́ convolution model (BYM, Besag et al., 1991; Riebler et al., 2016). These spatial models depend in turn on an additional layer of hyperparameters, which require a prior distribution se-
tup. Here, following the principle of parsimony, we set hyperpriors in such a way to penalise departures from the corresponding non-spatial models. This can be done intuitively and flexibly through the Penalised Complexity prior (PC-prior) approach, developed by Simpson et al. (2017). Since, to the best of our knowledge, for the hyperparameters controlling the strength of spatial association in the PCAR and LCAR models the PC-prior has not been employed yet, we compare the results of the full PC-p-
rior specification with a hybrid setup in which only this parameter is assigned a Uniform distribution. Explicitly accounting for unmeasured spatial variability may cause confounding with some explanatory variables, when the latter show a spatial trend, as it implies some confounding bias in the estimation of the effects of such covariates (Reich et al., 2006). For those covariates whose effects mostly differ between a nonspatial and the corresponding spatial regression model, we mitigate this bia-
s by reducing the effect of the spatial trend. This is obtained by a simplified version of the Spatial+ method (Dupont et al., 2022) that captures the spatial trends through the lowest-frequency eigenvectors of the graph Laplacian matrix (Urdangarin et al., 2024). Model estimation is carried out within the Integrated Nested Laplace Approximation (INLA, Rue et al., 2009; Van Niekerk et al., 2023), which enables computationally efficient Bayesian inference and model selection based on the Watanabe-A-
kaike Information Criterion (WAIC, Gelman et al., 2014). The spatial patterns of reported violence related to access to AVCs in Apulia allow us to identify differences in prevalence rates and evaluate
1 Available on the ISTAT website https://www.istat.it/comunicato-stampa/ aggiornato-indice-di-fragilita-comunale/
3

the adequacy of available services. Specifically, the study region is characterised by significant socioeconomic disparities (Ottomano Palmisano et al., 2022), including variations in economic development, infrastructure, and service accessibility. This circumstance, together with the high level of territorial detail in available data provided by the Regional Statistical Office, makes Apulia an ideal case study to investigate how such factors affect the search for AVC assistance. The remainder of-
 this paper is structured as follows: section 2 introduces the data set of accesses to AVCs in Apulia and relevant explanatory variables, section 3 describes the Bayesian space-time statistical modelling framework and provides some generalities on the proposed PC-priors, section 4 accounts for some practical implementation issues and summarises the strategy to prevent spatial confounding, section 5 provides some results of posterior inferences and interpretative comments.
2 The Apulia Region data
This study focuses on the number of accesses to AVCs in the municipalities of the Apulia region over the years 2021 – 2024. Data are collected by the Statistical Section and the Welfare Department of the Apulia Region as part of a systematic monitoring program established under Regional Law No. 29/2014. Since 2013, all AVCs have been required to submit annual reports detailing women’s access to support services to monitor the effectiveness of the service and identify local problems. The resulting -
data collection and processing activities contribute to the Regional annual reports (Statistical Office of the Apulia Region, 2024). To avoid considering duplicate data records, we only retain reports of violence that are directly managed by each center, excluding those that are redirected to other services or centers. In Apulia, the total number of women supported by AVCs was 1477, 1516, 1822, 1778 over the four years in scope. Fig. 1 shows the incidence of AVC accesses (obtained as the count of -
accesses over the female population aged > 14 years) across Apulian municipalities in the 4 years on the logarithmic scale, alongside with the municipalities with at least one operating AVC. White areas correspond to zero counts (in 2022, the center in San Severo (FG) was active, but no access results by women residing there). This map suggests a heterogeneous spatial pattern of access, with slightly higher values for coastal municipalities, indicating potential differences in the population, infr-
astructure, and service availability between coastal and inland areas. To investigate the association of access rates with potential drivers at the municipal level, a set of candidate explanatory variables is considered. First, we employ the distance of women’s residence municipalities from the closest municipality hosting either an AVC or a help desk; betweenmunicipalities road distances are provided by ISTAT2. Considering the deep link between socio-economic vulnerability and both the occurrence-
 and reporting of gender-based violence, investigated in depth by Bettio and Ticci (2017), an additional set of explanatory variables has been se
2Data retrieved from https://www.istat.it/notizia/matrici-di-contiguita-distanza-e-pendolarismo/
4

40.0°N
40.5°N
41.0°N
41.5°N
42.0°N
15°E 16°E 17°E 18°E
Log_accesses
−9
−8
−7
−6
−5
Year: 2021
40.0°N
40.5°N
41.0°N
41.5°N
42.0°N
15°E 16°E 17°E 18°E
Log_accesses
−9
−8
−7
−6
−5
Year: 2022
40.0°N
40.5°N
41.0°N
41.5°N
42.0°N
15°E 16°E 17°E 18°E
Log_accesses
−9
−8
−7
−6
−5
Year: 2023
40.0°N
40.5°N
41.0°N
41.5°N
42.0°N
15°E 16°E 17°E 18°E
Log_accesses
−9
−8
−7
−6
−5
Year: 2024
Figure 1: Log-incidence of AVC accesses. White areas correspond to zero counts. Points correspond to municipalities hosting at least one AVC.
lected amid the components of the Municipality Index of Fragility (IFC) referring to year 2021 (source Istat1). These variables capture multiple dimensions of local vulnerability, such as economic deprivation, demographic imbalance, and social marginalisation. Including them in the analysis allows us to account for the contextual conditions that may influence both the risk of experiencing violence and the likelihood of seeking help. For instance, areas characterised by higher unemployment, ageing -
populations, or weaker social support networks may exhibit lower reporting rates or different help-seeking patterns. These aspects will be further discussed with the results of the proposed model estimation. However, among the available indicators, we excluded the distance of each municipality from the closest infrastructural pole due to the high correlation with the distance from AVCs (71%), which in the scope of this analysis appears to be a more informative variable. This high correlation is in-
tuitive, as AVCs are typically located in larger municipalities corresponding to in
5

frastructure hubs. The set of explanatory variables considered henceforth is summarised in Table 1.
Table 1: Relevant explanatory variables
Variable Unit Description AVC dist Minutes Road travel time to the closest municipality hosting an AVC Desk dist Minutes Road travel time to the closest municipality hosting a help desk ELI Ventile Share of employees in low productivity units in the fabric and services sectors. Labour productivity is given by the ratio of value added per employee and is considered low if smaller than its first quartile. PGR Rate Population growth rate in years 2011–2021, i.e. total net migration in 2011–2021 over -
resident population at the end of 2011. UIS Ventile Density of economic production units, i.e. the ratio between the stock of active business companies over the total population ELL Percentage Percentage of people aged 25–64 with low education level, i.e. no more than middle school or vocational schools PDI Percentage Structural dependency index, i.e. population aged [0 − 19] or > 64 over population aged 20–64 ER Percentage Employment rate among population aged 20–64
3 Space-time Poisson models
The counts of women residing in each Apulian municipality accessing AVCs within a given year are modelled via Poisson ecological regression. For a generic year t ∈ {2021, . . . , 2024}, we denote the count of women from municipality i ∈ {1, . . . , 256} accessing an AVC as yi,t, and model it as follows: yi,t ∼ Poisson(Pi,t eηi,t )
where Pi,t is the female population aged > 14 years3 and ηi,t := β0,t + X⊤
i,tβ + zi,t is the linear predictor; Xi,t is a vector of covariates described in Table 1. The only covariate changing over time is the distance from AVCs, as the components of the MFI are not computed yearly, and only the list of help desks in 2024 was available. Moreover, β is a vector of constant covariate effects, β0,t are time-dependent intercepts and zi,t is a realisation of a latent spatio-temporal field Z = (Z⊤
1 , . . . , Z⊤
T )⊤, modelled as a type IV interaction term, namely a latent field both spatially and temporally structured (Knorr-Held, 2000). Specifically, we assume a lag-1
3Data retrieved from ISTAT at: http://dati.istat.it/Index.aspx?DataSetCode=DCIS_ POPRES1
6

temporal dependence, and model Z as follows:

 
 
Zt = rZt−1 + νt for t = 2, . . . , T νt ∼ Nn 0, σ2
t Ωt for t = 2, . . . , T
Z1 ∼ Nn 0, 1
1−r2 σ2
1 Ω1
(1)
where νt is a spatially structured Gaussian random field taking values over a graph of order n, described by the symmetric and positive semi-definite variance-covariance matrix Ωt, σ2
t is a marginal variance parameter and r is a temporal correlation parameter. Here, the nodes of the reference graph are the n = 256 Apulian mainland municipalities, and its edges are the links between pairs of neighbouring municipalities. This rather general model formulation allows the Ωt matrices to depend on timevarying parameters, thus providing a special case of the more general multivariate M-models (Botella-Rocamora et al., 2015). If instead we assume σ2
1 = · · · = σ2
T = σ2 and Ω1 = · · · = ΩT = Ω, the model reduces to the stationary AR(1) spatio-temporal model outlined by Martı ́nez-Beneito et al. (2008). In this case, the joint distribution of Z then reduces to
Z ∼ NT ×n 0, σ2
1 − r2 R ⊗ Ω
where R is the AR(1) correlation matrix of size T ×T with elements Rst = rabs(s−t) for s, t ∈ [1, T ]. This constitutes a simplification of a more general multivariate spatial model in which k marginal variances and k(k − 1)/2 correlations are employed. Since we have no prior information justifying a temporal variation in the parameters of the spatial component of the latent field, we follow this latter approach and assume the distribution of νt in equation 3 is stationary over time. This spatio-t-
emporal model employs only one scale parameter σ2 and one correlation parameter r, resulting in a simplified between-years variance-covariance matrix and a sparse between-years precision.
3.1 Spatial structures
The regression model outlined in the previous section features a spatial component described by the matrix Ω. In this study, we compare four alternative spatial models, corresponding to as many specifications of the matrix Ω:
Intrinsic Conditional Auto Regressive (ICAR, Besag and Kooperberg, 1995) Ω := L+ = (D − W )+ (2)
where L+ is the Moore-Penrose pseudoinverse of the n × n Laplacian matrix of the graph D − W , W is the binary neighbourhood or adjacency matrix, with wij = 1 if municipalities i and j share a border and wij = 0 otherwise and by convention, wii = 0; D is the diagonal degree matrix, in which for each i = 1, ..., n, dii = Pn
j=1 wij. To make this model identifiable, we constrain Zt to sum to zero for each t.
7

Proper Conditional Auto Regressive (PCAR, Gelfand and Vounatsou, 2003) Ω := (D − ρW )−1 (3)
A more flexible extension of the ICAR in which the autocorrelation parameter ρ ∈ [0, 1] is introduced to control the strength of spatial association; the limit case for ρ = 1 is the ICAR, while ρ = 0 implies an independent but not identically distributed Gaussian random field. Even though this model does not require the sum-to-zero constraint, we apply it in analogy with other models to make results comparable.
Leroux proper Conditional Auto Regressive (LCAR, Leroux et al., 1999) Ω := (λL + (1 − λ)In)−1 (4)
Another extension of the ICAR introducing the precision mixing parameter λ ∈ [0, 1]; the limit case for λ = 1 is again the ICAR, while for λ = 0 the model reduces to an IID Standard Normal field. Even though this is not a singular model, we follow Goicoa et al. (2018) and apply the sum-zero constraint to ensure that the model is identifiable and that no confounding occurs with the intercept. Besag-York-Molli ́e (BYM, Besag et al., 1991; Riebler et al., 2016)
Zt = σpφUt + σp1 − φVt (5)
Here Ut is an ICAR process with precision matrix given by the scaled Laplacian matrix, say Ls Sørbye and Rue (2014); Riebler et al. (2016), obtained multiplying L by a constant factor. This is required to ensure that L+
s , representing the variance-covariance matrix of the ICAR component, is such that the geometric mean of the diagonal is equal to one; scaling allows σ2 to be correctly identifiable and interpretable. Vt is a standard IID process, such that Vt ∼ Nn(0, In). It can be seen that in this case Ω = φL+
s + (1 − φ)In. φ is the variance mixing parameter, and is interpreted as the share of variability explained by the spatial stochastic trend, while 1 − φ is the share of variability explained by random noise. This interpretation is made possible by the scaling of the Laplacian matrix. As for the LCAR, the limit cases for φ = 1 and φ = 0 are the ICAR and IID processes respectively. Although the spatial precision matrix Ω−1 is dense, it can be shown that the joint distribution of (Z, U ) has a sparse-
 and singular precision matrix (Riebler et al., 2016), and the sum-to-zero constraint is required on the ICAR components Ut for all t.
3.2 The PC-prior framework
The regression model outlined so far features a latent spatio-temporal effect, which implies a potentially high degree of complexity. In the context of Bayesian hierarchical models, an organic approach to measuring and penalising model complexity is provided by PC-priors (Simpson et al., 2017). The basic idea behind the PC-prior for a given parameter θ is to penalise a priori the departure of a flexible model M1 with random θ against a base model M0 in which θ is fixed. Simpson et al. (2017) propo-
se to measure the departure between two models with the distance function
8

p2KLD(M1||M0), where KLD (·||·) denotes the Kullback-Leibler divergence. Additionally, they propose to penalise the distance between the two models by assigning an exponential prior to the distance function. The exponential prior depends on a rate parameter ψ that can be tuned to assume a priori that θ is smaller than a boundary value U with a given probability α. For the case at hand, the KLD between two zero-mean T × n–variate Gaussian distributions differing in their variance-covariance matric-
es, namely Var0 and Var1 for the base and flexible formulation respectively, is given by the simple formula (Simpson et al., 2017):
KLD(M1||M0) = − 1
2 ln Var−1
0 Var1 − T n
2 +1
2 tr Var−1
0 Var1 (6)
Given the KLD expression in (6), the prior can be easily derived with a change of variable. In this paper, we define a joint PC-prior setup for the whole hyperparameter set. For the spatio-temporal ICAR model, hyperparameters are only the temporal autocorrelation r and the standard deviation σ. The latter three models employ an additional hyperparameter ξ ∈ {α, λ, φ}. To the best of our knowledge the PC-priors for the LCAR precision mixing parameter λ and for the PCAR spatial autocorrelation ρ con-
stitute a novelty; we then test the Uniform prior on ξ as a more familiar alternative. Overall, the joint prior on the whole hyperparameter set reads as:
π(r, σ, ξ) = π(r | σ, ξ)π(ξ | σ)π(σ)
As these hyperparameters prove to be independent a priori, it can be shown that using the PC-priors allows us to factor the joint prior into the three marginals. The PC-prior for σ has been described by Simpson et al. (2017) and proved to coincide with an Exponential prior. In the following sections, we provide some details on the computation of the KLD for r, ρ, and λ in the AR(1), PCAR, and LCAR cases, respectively. In the BYM case, where ξ = φ, the PC-prior has already been described by both Ri-
ebler et al. (2016) and Simpson et al. (2017).
3.2.1 AR(1) autocorrelation parameter
We obtain the KLD for the temporal autocorrelation parameter r in the AR(1) model (1) penalising r ∈ [−1, 1] against r = 0. Hence the KLD becomes:
KLD(r||r = 0) = n
2 ln(1 − r2) + T r2
1 − r2 (7)
The KLD is a U-shaped even function of r, with a minimum at 0 for r = 0 and tending to infinity for abs(r) approaching 1. These findings generalise the KLD of the purely temporal autocorrelation parameter developed and discussed by Sørbye and Rue (2017). Additionally, in the spatio-temporal case, the PC-prior can be proved to be independent of n. This is indeed a desirable property, as it would make no sense for the temporal autocorrelation parameter r to depend on the number of areas n. For the s-
cope, consider KLD(r||r = 0) = n
2 h(r) where h(r) does not depend on n; then, assuming an exp(ψ) distribution on p2KLD(r||r = 0) and parametrising
9

the PC-prior through the left-tail probability α and the upper boundary U ,we obtain ψ = ln 1
1−α
1
√
nh(U) . It follows that:
π(r) = ln 1
1−α
1
2
ph(U )h(r) eln(1−α)
√h(r)
√h(U) ∂h
∂r
3.2.2 PCAR spatial autocorrelation parameter
To define the KLD for the PCAR spatial autocorrelation parameter ρ in (3), we compare M1 : Ω = (D − ρW )−1, with ρ ∈ [0, 1] against M0 : ρ = 0, i.e. Ω = D−1, where D and W are the degree and neighbourhood matrices of the underlying graph. Notice that the base model is not the IID one, as the spatial variance-covariance matrix is D−1. In this case, assuming D is nonsingular, the KLD reads:
KLD(ρ||ρ = 0) = T
2
n
X
i=1
ln(1 − ρδi) + 1
1 − ρδi
− Tn
2 (8)
Where δ = (δ1, . . . , δn) is the array of eigenvalues of D−1W . Since D−1W is similar to D−1/2W D−1/2, all the elements of δ are real. Moreover, abs(δi) ≤ 1 ∀i, due to the Gershgorin circle theorem (Horn and Johnson, 2012, section 6.1) as D−1W is row-stochastic with null diagonal; the highest element of δ is always equal to 1 and is associated to a constant eigenvector. Given the domain of δ, the derivative of the KLD follows with some standard algebra. In this case, it can be shown that the KLD -
is monotonically increasing, with limits for ρ → 0 and ρ → 1 given by 0 and +∞, respectively. The PC prior can be derived from the expression obtained for the KLD through simple algebraic steps.
3.2.3 LCAR precision mixing parameter
In this case, we compare M1 : Ω = (λL + (1 − λ)In)−1, with λ ∈ [0, 1] against M0 : λ = 0, i.e. Ω = In. Then, the KLD is given by:
KLD(λ||λ = 0) = T
2
n
X
i=1
ln [λ(li − 1) + 1] + 1
λ(li − 1) + 1 − T n
2 (9)
Where l = (l1, . . . , ln) is the array of eigenvalues of the graph Laplacian L. In this case, since L is semipositive definite, all elements in l are non-negative, and the number of zero eigenvalues is equal to the number of connected components of the graph – one, in our application. Additionally, notice that, as L is singular, at least one eigenvalue is always null, hence with some algebra it is possible to show that the KLD tends to infinity as λ approaches one. As for the PCAR case, it is str-
aightforward to compute the derivative with respect to λ, showing that the KLD ranges over the entire non-negative real axis and is monotonically increasing. The PC prior can be derived from the expression obtained for the KLD through simple algebraic steps.
10

4 Model implementation
In this section, we first summarise the settings of the prior distributions of all model parameters, then we describe the practical procedure to estimate the space-time Poisson regression model described in section 3. Constant covariate effects in β and time-dependent intercepts β0,t are assigned independent N (0, 103) priors. For the marginal standard deviation σ and the temporal correlation parameter r, we follow the PCprior approach outlined in section 3.2. Specifically, for σ we assume Prob(σ2-
 ≤ 1/2) = 0.9, implying E[σ] ≈ 0.307 a priori. For the AR(1) autocorrelation r, we penalise the departure from the time-independent model while attempting not to be excessively restrictive, and assume Prob(r ≤ 0.4) = 0.8. This parametrisation was also used, though in a different context, by Fioravanti et al. (2021). We acknowledge, however, that in our context the posteriors of σ2 and r result to be scarcely sensitive to hyperparameter tuning. For the parameters ρ, λ and φ we tested three alternat-
ive prior specifications: the PC-prior with Prob{ξ ≤ 1/2} = 2/3, for ξ ∈ {ρ, λ, φ}, considered to be a reasonable standard for the BYM parameter φ and thus implemented by default in R-INLA (only for the BYM), the more restrictive PC-prior Prob{ξ ≤ 0.6} = 0.9, and the Uniform prior in [0, 1]. As is frequently the case in Bayesian applications, posterior inference cannot be obtained by analytical calculations. Therefore, we need to approximate the posterior distributions of all layers of model param-
eters. Considering that with the model at hand, covariate effects and the spatiotemporal latent field have a joint Gaussian prior and the predictor is linear, it is particularly convenient to employ the Integrated Nested Laplace Approximation (INLA Rue et al., 2009) for the purpose. First, the joint hyperparameter posterior is Laplace approximated. Then, a Gaussian approximation is applied to the joint posterior of β and Z, and the resulting posterior mean undergoes a Variational Bayes correction -
(Van Niekerk et al., 2023). this methodology is implemented in a dedicated R package (available at https://www.r-inla.org/). All spatio-temporal models are implemented within the rgeneric environment (Go ́mez-Rubio, 2020, chapter 11) using package version 2025-06-22.1. Spatial patterns are observed for some of the explanatory variables. Moreover, we notice some major changes in the posterior distribution of the effect of two covariates, i.e., ELI (share of low productivity workers) and ELL (low ed-
ucation incidence), as shown in the forest plot in Figure 2 and discussed in more detail in the next section. This suggests the presence of spatial confounding (Reich et al., 2006) between those covariates and unmeasured spatial effects. Therefore, following the simplified Spatial+ method developed by Urdangarin et al. (2024), we attempt to mitigate spatial confounding by filtering out these variables’ spatial trends represented by the eigenvectors of the Laplacian matrix associated with the small-
est eigenvalues (Von Luxburg, 2007). Part of the explanatory variables, i.e. the MFI components and the distance from help desks, are mapped in Appendix A. The four spatial structures for the space-time Poisson model presented in section 3, namely ICAR, PCAR, LCAR, and BYM, are compared us
11

ing the Watanabe-Akaike information criterion (WAIC hereinafter, Gelman et al., 2014), computed internally in R-INLA. The WAIC and its complexity component, i.e., the number of free parameters (P. eff), are shown in Table 2. For the α, λ, and φ parameters of PCAR, LCAR and BYM, respectively, we compare the uniform prior and two alternative parametrisations of the PC-prior: PC1 with α = 2/3 ∧ U = 1/2, and PC2 with α = 0.9 ∧ U = 0.6. Differences in model performances do not appear
Models Prior Base S+ 15 S+ 20 S+ 25
WAIC P. eff WAIC P. eff WAIC P. eff WAIC P. eff ICAR 3928.35 255.65 3928.15 255.58 3927.85 255.42 3928.54 255.88 PCAR Unif 3915.55 261.17 3914.08 261.02 3913.65 260.89 3914.69 261.33 PCAR PC1 3915.11 261.54 3913.43 261.40 3913.12 261.23 3914.10 261.71 PCAR PC2 3914.24 262.44 3912.51 262.19 3912.14 262.02 3913.15 262.52 LCAR Unif 3910.67 261.08 3908.45 260.83 3908.02 260.69 3909.38 261.13 LCAR PC1 3910.20 261.58 3907.86 261.28 3907.49 261.12 3908.83 261.57 LCAR PC2 3910.02 261.76 3907.47 261.47 390-
7.18 261.31 3908.48 261.76 BYM Unif 3907.66 255.83 3906.71 255.84 3906.40 255.67 3908.28 256.26 BYM PC1 3908.00 256.04 3907.24 255.97 3906.90 255.82 3908.79 256.41 BYM PC2 3908.37 256.23 3907.53 256.14 3907.22 255.97 3909.07 256.59
Table 2: Model diagnostics using the Watanabe-Akaike criterion for four spatial models with three possible Spatial+ adjustments, consisting of removing either 15, 20 or 25 Laplacian eigenvectors from the covariates ELI and ELL. For the parameter controlling the spatial association in the PCAR, LCAR, and BYM models, we compare the Uniform prior and the PC prior with left-tail probability values of either 2/3 and 0.9, associated with upper boundaries of 0.5 and 0.6, respectively. The P eff column co-
nsists of the number of free parameters, i.e., the complexity component.
relevant; the WAIC leads us to prefer the BYM model over the others. Neither does the treatment of spatial confounding change radically model performance, but a small improvement can be noticed if we filter out the 20 smallest-frequency eigenvectors.
5 Results
In this section, we display the main results of the alternative model specifications described in Section 4, focusing on the BYM with φ ∼ Unif(0, 1) after removing the 20 lowest-frequency Laplacian eigenvectors (applying the simplified Spatial+ correction proposed by Urdangarin et al., 2024) from two covariates: the share of employees in low-productivity firms (ELI) and the low education incidence (ELL). All explanatory variables have been scaled to zero mean and unit variance to facilitate the in-
terpretation of results. In Figure 2 we show a forest plot of the 95% posterior credible intervals of covariate effects using the non-spatial and spatial models before and
12

after removing the 20 lowest-frequency Laplacian eigenvectors from the covariates ELI and ELL. Such a correction is justified by the difference in the posterior distributions of these two variables between the non-spatial and spatial models, which suggests the potential confounding with the latent spatial field. In particular, including the spatial field shrinks the estimated effect of ELI towards zero, while it raises in absolute value the estimated effect of ELL. Generally speaking, the inclusi-
on of a spatial latent field increases uncertainty in the estimation of covariate effects, as can be seen from the wider credible intervals. The most noticeable differences among spatial models can be observed for ELL and the employment rate (ER); specifically, in both cases, controlling for the spatial confounding in ELI and ELL slightly reduces the covariate effect. Overall, the estimation of covariate effects does not appear to be sensitive to the spatial model choice or to spatial confounding -
treatment. In Table 3 we show more in
ER
PDI
ELL
UIS
PGR
ELI
AVC_dist
Desk_dist
−0.4 −0.2 0.0 0.2 β
Model .Nonspatial
base BYM
base ICAR
base LCAR
base PCAR
S+ BYM
S+ ICAR
S+ LCAR
S+ PCAR
Credible intervals of covariate effects
Figure 2: Forest-plot of the posterior credible intervals of covariate effects using either the non-spatial model and the four spatio-temporal models, before (”base” models) and after filtering out the 20 lowest-frequency Laplacian eigenvectors from covariates ELI and EL (”S+” models). For the ρ and λ parameters of the PCAR and LCAR models respectively, a PC-prior parametrised by boundary value and left-tail probability of 0.6 and 0.9 has been used, while a Uniform prior has been assigned to φ in -
the BYM model.
detail the posterior summaries for intercepts and covariate effects using the BYM model and filtering out 20 eigenvectors from ELI and EL. To assess the effects of explanatory variables on AVC accesses, it is needful to recall the twofold interpretation of the response variable, as it depends on both the frequency at which violence incidents occur and the frequency at which victims seek help when it occurs. The three strongest predictors
13

Effect mean sd 0.025quant 0.975quant Year 2021 -7.453 0.051 -7.555 -7.353 Year 2022 -7.583 0.055 -7.691 -7.477 Year 2023 -7.216 0.047 -7.310 -7.124 Year 2024 -7.328 0.051 -7.428 -7.229 AVC dist -0.196 0.042 -0.278 -0.113 Desk dist -0.061 0.038 -0.135 0.012 ELI -0.002 0.035 -0.069 0.067 PGR 0.071 0.042 -0.011 0.153 UIS 0.095 0.040 0.018 0.174 ELL -0.155 0.037 -0.229 -0.083 PDI -0.024 0.046 -0.114 0.065 ER -0.229 0.053 -0.333 -0.126
Table 3: Posterior summaries of year-specific intercepts and covariate effects when Z is modelled as a BYM process with a Uniform prior on the mixing parameter. Simplified spatial+ correction has been applied to ELI and ELL covariates by removing the 20 lowest-frequency Laplacian eigenvectors.
across the years in scope appear to be the travel time from the closest municipality hosting an AVC (AVC dist), the percentage of people with a low educational level (ELL), and the employment rate (ER), in all cases with a negative association. Additionally, the density of productive units (UIS) has a positive effect, and the credibility interval of such effect ranges entirely away from zero. The negative association between AVC accesses and distance from AVCs can be read as a symptom of the persi-
sting physical barrier to seeking help. The magnitude of the coefficient may be interpreted as follows: an increase in the travel time to the closest AVC by one standard deviation, i.e. approximately 13′40′′ is associated, ceteris paribus, with a decrease of about 17.7% in the frequency of accesses to AVCs (since exp{E [βAVC Dist|y]} = 0.823). The expected association with the distance from the closest help desk (Desk dist) is negative, consistent with the distance from the closest AVC, but the ma-
gnitude of such expected association is smaller, and, most importantly, the credible interval includes zero. This result may suggest that the distance from help desks is less prohibitive than the distance from AVCs in seeking assistance, which is not surprising considering how widespread help desks are. In light of the twofold process generating AVC accesses, a tentative yet intuitive interpretation of the negative association with both low education and employment rate could be that women victims-
 of violence have a lower propensity to access AVCs in poor educational contexts, but the incidence of violence may become lower in contexts of higher economic development. This latter consideration should be interpreted in light of the state-of-the-art evidence that both women’s and partners’ unemployment are associated with higher violence occurrence, as reviewed by (Bettio and Ticci, 2017, chapter 2). The positive association of accesses with
14

the density of productive units (UIS), instead, is less intuitive, as a higher number of firms does not imply per se higher economic development, even though it has a negative weight in determining the frailty index of Italian municipalities. Lastly, hyperparameter posterior summaries for the BYM–uniform model after ELI and ELL are corrected for spatial confounding are shown in Table 4. Residual variability is balanced between spatial autocorrela
param mean sd Q0.025 Median Q0.975 φ 0.602 0.117 0.358 0.609 0.808 σ 0.468 0.046 0.383 0.466 0.563 r 0.622 0.059 0.499 0.625 0.729
Table 4: Posterior summaries of the hyperparameters of the BYM latent effect when φ ∼ Unif(0, 1) a priori, where φ is the variance mixing parameter, σ is the marginal standard deviation, and r is the temporal autocorrelation.
tion and random noise, as the variance mixing parameter has a posterior expectation of ≈ 0.6, which means that the share of residual variability explained by the spatial structure is slightly larger. The standard deviation of the spatio-temporal latent field has a posterior expectation of ≈ 0.47. This can be interpreted as an increment of 1 standard deviation of the latent field in a municipality implies, ceteris paribus, a change of approximately exp(0.47) − 1 ≈ 59% in the frequency of AVC access-
es. Lastly, the temporal autocorrelation is positive, as one could expect by comparing the spatial patterns in AVC accesses in Figure 1.
6 Discussion and conclusions
The main limitation of this research is that we employ a unique predictor combining the two processes of violence occurring and help seeking after violence occurs, which cannot be disentangled with the available data. Consequently, the effects we estimate reflect both mechanisms at once. Additional limitations include the lack of individual-level information for privacy reasons, the unavailability of service-level performance indicators, and the constraints posed by aggregated data that can mask w-
ithin-area heterogeneity. A promising development would be the implementation of a Poisson-logistic regression model (Stoner et al., 2019), in line with the analysis of Polettini et al. (2024), to allow the explicit quantification of VAW under-reporting. To this end, more integrated datasets are required combining administrative, health, social-service and AVC-level information, thereby enabling the identification of respective contributions of structural incidence, help-seeking propensity and ter-
ritorial accessibility, and allowing the two processes of occurrence and help-seeking to be modelled separately. Overall, present results show that seeking support is far from a straightforward process: the negative association between access rates and proximity to the nearest AVC suggests that even modest distances can act as
15

barriers to help-seeking. Moreover, education-related vulnerability and local economic conditions appear to affect the likelihood of accessing AVCs, suggesting that structural factors, cultural attitudes, and service accessibility interact in shaping women’s behaviour. Even after adjusting for potential spatial confounding, a residual spatial effect remains, pointing to unobserved factors that may influence women’s ability to activate support pathways. Beyond the empirical findings, the methodolo-
gical contribution of this work lies in the derivation of PC-priors for the LCAR mixing parameter λ and the PCAR spatial autocorrelation parameter ρ. These priors, obtained via explicit KLD penalisation, may contribute to improving interpretability and stabilising the INLA-based inference.
Declarations
Code and data availability
Source R code can be found in this script: https://github.com/lcef97/ CAV_Puglia/blob/main/CAV_output.R. The exact reproducibility of results depends on R-INLA version employed; authors used the testing version 2025.06.22-1.
Acknowledgements
Leonardo Cefalo wishes to thank Professor Ha ̊vard Rue from the King Abdullah University of Science and Technology for his precious help in troubleshooting and initialising the INLA optimisation algorithm.
Funding
This study was partially funded by the European Union – NextGenerationEU, Mission 4, Component 2, in the framework of the GRINS – Growing Resilient, INclusive and Sustainable project (GRINS PE00000018 – CUP H93C22000650001 and CUP J33C22002910001). The study was also partially funded by the European Union – NextGenerationEU, Mission 4, Component 1, in the framework of the PRIN project “Violence against women: modelling misreported information in social data” (CUP H53D23006060006). This project ben-
efits from collaborating with the Statistical Section and the Welfare Department of the Apulia Region (Italy), which actively monitors gender-based violence and conducts an annual survey to analyse its trends and impacts. Their ongoing efforts in data collection and research have been essential to the development of this study. The views and opinions expressed are solely those of the authors and do not necessarily reflect those of the European Union, nor can the European Union be held responsible -
for them.
References
Besag, J. and Kooperberg, C. (1995). On conditional and intrinsic autoregressions. Biometrika, 82(4):733–746.
16

Besag, J., York, J., and Mollie ́, A. (1991). Bayesian image restoration with applications in spatial statistics (with discussion). Annals of the Institute of Statistical Mathematics, 44:1–59.
Bettin, G. and Ciaschini, C. (2025). The effectiveness of italian measures in facilitating complaints for domestic violence: a regional analysis. Kybernetes, pages 1–21.
Bettio, F. and Ticci, E. (2017). Violence and Economic Independence. Publication Office of the European Union.
Botella-Rocamora, P., Martinez-Beneito, M., and Banerjee, S. (2015). A unifying modeling framework for highly multivariate disease mapping. Statistics in Medicine, 34(9):1548–1559.
Council of Europe (2011). Convention on preventing and combating violence against women and domestic violence. volume 11.V.2011, Istanbul. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/ ?uri=CELEX:22023A0602(01).
Denti, D. and Iammarino, S. (2022). Coming out of the woods. do local support services influence the propensity to report sexual violence? Journal of Economic Behavior & Organization, 193:334–352.
Dupont, E., Wood, S. N., and Augustin, N. H. (2022). Spatial+: a Novel Approach to Spatial Confounding. Biometrics, 78(4):1279–1290.
Fioravanti, G., Martino, S., Cameletti, M., and Cattani, G. (2021). Spatio-temporal modelling of pm10 daily concentrations in italy using the spde approach. Atmospheric Environment, 248:118192.
Gelfand, A. E. and Vounatsou, P. (2003). Proper multivariate conditional autoregressive models for spatial data analysis. Biostatistics, 4(1):1115.
Gelman, A., Hwang, J., and Vehtari, A. (2014). Understanding predictive information criteria for Bayesian models. Statistics and Computing, 24(6):997–1016.
Goicoa, T., Adin, A., Ugarte, M., and Hodges, J. (2018). In spatiotemporal disease mapping models, identifiability constraints affect pql and inla results. Stochastic Environmental Research and Risk Assessment, 32(3):749–770.
Go ́mez-Rubio, V. (2020). Bayesian Inference with INLA. Chapman and Hall/CRC.
Horn, R. A. and Johnson, C. R. (2012). Matrix analysis. Cambridge university press.
Italian National Institute of Statistics (2024). I centri antiviolenza e le donne che hanno avviato il percorso di uscita dalla violenza. anno 2023 (italian).
17

Italian Official Journal n. 242 (2013). Disposizioni urgenti in materia di sicurezza e per il contrasto della violenza di genere, nonch`e in tema di protezione civile e di commissariamento delle province. Gazzetta Ufficiale 24.05.2022. Retrived from https://www.normattiva.it/. Accessed on 31 January 2025.
Italian Official Journal n.120 (2022). Disposizioni in materia di statistiche in tema di violenza di genere. Gazzetta Ufficiale 24.05.2022. Retrived from https://www.normattiva.it/. Accessed on 31 January 2025.
Knorr-Held, L. (2000). Bayesian modelling of inseparable space-time variation in disease risk. Statistics in medicine, 19(17-18):2555–2567. doi: 10.1002/1097-0258.
Leroux, B., Lei, X., and Breslow, N. (1999). Exact estimation of disease in small areas: A new mixed model for spatial dependence. In Halloran, M. and Berry, D., editors, Statistical Models in Epidemiology, the Environment and Clinical Trials, pages 135–178. Springer-Verlag, New York. doi: https://doi.org/10.1007/978-1-4612-1284-3_4.
Martı ́nez-Beneito, M. A., Lo ́pez-Quilez, A., and Botella-Rocamora, P. (2008). An autoregressive approach to spatio-temporal disease mapping. Statistics in medicine, 27(15):2874–2889.
Ottomano Palmisano, G., Sardaro, R., and La Sala, P. (2022). Recovery and resilience of the inner areas: identifying collective policy actions through promethee ii. Land, 11(8):1181.
Peek-Asa, C., Wallis, A., Harland, K., Beyer, K., Dickey, P., and Saftlas, A. (2011). Rural disparity in domestic violence prevalence and access to resources. Journal of women’s health, 20(11):1743–1749.
Polettini, S., Arima, S., and Martino, S. (2024). An investigation of models for under-reporting in the analysis of violence against women in italy. Social Indicators Research, 175(3):1007–1026.
Reich, B. J., Hodges, J. S., and Zadnik, V. (2006). Effects of Residual Smoothing on the Posterior of the Fixed Effects in Disease-Mapping Models. Biometrics, 62(4):1197–1206.
Riebler, A., Sørbye, S. H., Simpson, D., and Rue, H. (2016). An intuitive Bayesian spatial model for disease mapping that accounts for scaling. Statistical methods in medical research, 25(4):1145–1165.
Rue, H., Martino, S., and Chopin, N. (2009). Approximate bayesian inference for latent gaussian models by using integrated nested laplace approximations. Journal of the Royal Statistical Society Series B: (Methodological), 71(2):319–392.
Simpson, D., Rue, H., Riebler, A., Martins, T. G., and Sørbye, S. H. (2017). Penalising model component complexity: A principled, practical approach to constructing priors. Statistical Science, 32(1):1 – 28.
18

Sørbye, S. H. and Rue, H. (2017). Penalised complexity priors for stationary autoregressive processes. Journal of Time Series Analysis, 38(6):923–935.
Statistical Office of the Apulia Region (2024). Centri antiviolenza e Case rifugio in Puglia. L’accesso e l’accoglienza delle donne. Anno 2023 (EN: Anti-violence centers and shelters in Apulia. Women access and reception. Year 2023).
Stoner, O., Economou, T., and Drummond Marques da Silva, G. (2019). A hierarchical framework for correcting under-reporting in count data. Journal of the American Statistical Association, 114(528):1481–1492.
Sørbye, S. and Rue, H. (2014). Scaling intrinsic gaussian markov random field priors in spatial modelling. Spatial Statistics, 8:39–51.
Toffanin, A., Pietrobelli, M., Gadda, A., and Misiti, M. (2020). VAW Policy Regimes in Italy: An Analysis Across Regional Governments and Women’s Centres. Journal of Mediterranean Knowledge, 5(1):4772.
Urdangarin, A., Goicoa, T., Kneib, T., and Ugarte, M. D. (2024). A simplified spatial+ approach to mitigate spatial confounding in multivariate spatial areal models. Spatial Statistics, 59:100804.
Van Niekerk, J., Krainski, E., Rustand, D., and Rue, H. (2023). A new avenue for Bayesian inference with INLA. Computational Statistics and Data Analysis, 181.
Von Luxburg, U. (2007). A tutorial on spectral clustering. Statistics and computing, 17(4):395–416.
Appendix A Maps of Explanatory Vari
ables
In this section, we display some additional maps, i.e. the components of the Municipality Frailty Index (MFI) included as explanatory variables in the analytical model described in section 3, and the distance from municipalities hosting a help desk, which equals to zero for about 40% of municipalities (105 over 256), as they have at least one. The pupulation growth rate map does not include the municipality of Anzano di Puglia (FG) due to its extreme record (−311%)
19

40.0°N
40.5°N
41.0°N
41.5°N
42.0°N
15°E 16°E 17°E 18°E
ELI
5
10
15
20
Employees in low productivity units (ventile)
40.0°N
40.5°N
41.0°N
41.5°N
42.0°N
15°E 16°E 17°E 18°E
ELL
30
40
50
60
Incidence of low education levels (percentage)
40.0°N
40.5°N
41.0°N
41.5°N
42.0°N
15°E 16°E 17°E 18°E
ER
45
50
55
60
Employment rate (percentage)
40.0°N
40.5°N
41.0°N
41.5°N
42.0°N
15°E 16°E 17°E 18°E
PGR
−100
−50
0
50
Population growth rate (percentage)
40.0°N
40.5°N
41.0°N
41.5°N
42.0°N
15°E 16°E 17°E 18°E
UIS
5
10
15
20
Density of economic productie units (ventile)
40.0°N
40.5°N
41.0°N
41.5°N
42.0°N
15°E 16°E 17°E 18°E
DDist
10
20
30
40
Distance (minutes) from closest help desk
Figure 3: Additional explanatory variables: MFI components and distance from help desks. White areas in the last map correspond to municipalities in which a desk is available (distance is zero).
20

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:25.773Z
- **Text Length:** 50616 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 20 of 20
