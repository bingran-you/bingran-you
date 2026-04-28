# PDF Document: Palacio et al. - 2025 - Inferring Transmission Dynamics of Respiratory Syncytial Virus from Houston Wastewater.pdf

**File Path:** Palacio et al. - 2025 - Inferring Transmission Dynamics of Respiratory Syncytial Virus from Houston Wastewater.pdf

**Processed Date:** 2026-02-10T18:17:41.389Z

**File Size:** 1734.34 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3435

**Title:** Inferring Transmission Dynamics of Respiratory Syncytial Virus from Houston Wastewater

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Inferring Transmission Dynamics of Respiratory
Syncytial Virus from Houston Wastewater
Jose R. Palacio∗1, Katherine B. Ensor1, Sallie A. Keller2, Rebecca
Schneider3, Kaavya Domakonda3, Loren Hopkins1,3, and Lauren
B. Stadler4
1Department of Statistics, Rice University, 6100 Main St, Houston, TX,
USA
2Biocomplexity Institute, University of Virginia, Charlottesville, VA,
USA
3Houston Health Department, Houston, TX, USA
4Department of Civil and Environmental Engineering, Rice University,
Houston, TX, USA
November 25, 2025
Abstract
Wastewater-based epidemiology (WBE) is an effective tool for tracking community circulation of respiratory viruses. We address estimating the effective reproduction number (Rt) and the relative number of infections from wastewater viral load. Using weekly Houston data on respiratory syncytial virus (RSV), we implement a parsimonious Bayesian renewal model that links latent infections to measured viral load through biologically motivated generation and shedding kernels. The framework yields estimat-
es of Rt and relative infections, enabling a coherent interpretation of transmission timing and phase. We compare two input strategies—(i) raw viral-load measurements with a log-scale standard deviation, and (ii) state-space–filtered load estimates with time-varying variances—and find no practically meaningful differences in inferred trajectories or peak timing. Given this equivalence, we report the filtered input as a pragmatic default because it embeds week-specific variances while leaving epide-
miological conclusions unchanged.
Keywords
Respiratory Syncytial Virus (RSV), Wastewater-based Epidemiology, Renewal Model, Effective Reproduction Number (Rt), Bayesian Inference
∗Corresponding author: jrp16@rice.edu
1
arXiv:2511.17816v1 [stat.AP] 21 Nov 2025

1 Introduction
Wastewater-based epidemiology (WBE) has established itself as a crucial tool for populationlevel surveillance of infectious diseases. By quantifying viral genetic material in wastewater, WBE provides a non-invasive and cost-effective monitoring system that can capture early signals of community transmission, independent of medical care-seeking or clinical testing capacity. However, translating these signals into absolute infection counts is challenging due to substantial variability in viral shedd-
ing, biological and physical delays in the sewer network, and measurement uncertainty. In practice, it is therefore more informative and robust to focus on relative transmission metrics—most notably the effective reproduction number (Rt), which captures temporal changes in transmission dynamics (Huisman et al., 2022; Champredon et al., 2024). To date, much of the literature has centered on SARS-CoV-2, for which wastewater data have demonstrably supported the public health response. Extending WBE t-
o other pathogens poses additional challenges. For respiratory syncytial virus (RSV)—a leading cause of severe respiratory illness in infants, older adults, and immunocompromised individuals (Mayo Clinic Staff, 2023)—clinical surveillance is affected by underreporting and reporting delays. Many RSV cases are managed at home without hospitalization, so clinical records may not fully reflect community circulation. In wastewater, signal interpretation is further complicated by heterogeneity across tr-
eatment plants and the populations they serve (Haak et al., 2022), as well as by incubation, shedding dynamics, and transport processes in the sewer system (He et al., 2020; Hart and Halden, 2020). Despite these challenges, RSV is consistently detectable in wastewater, and recent studies highlight its potential as a complement to clinical surveillance (Hughes et al., 2021). Large-scale, systematic analyses in dense urban networks remain scarce, however, leaving open questions about the robustness,-
 comparability, and epidemiological value of wastewater signals (Wade et al., 2022). Multi-stage models are common in environmental epidemiology. In a typical twostage setup, stage one fits separate models for each unit (e.g., locations or studies) to produce unit-level summaries of the association of interest; stage two then aggregates those summaries to obtain an overall estimate (Sera and Gasparrini, 2022). Related Bayesian approaches follow the same spirit: analyze each unit independently, the-
n pass those unit-level posteriors or estimates into a second-stage model that treats them as draws from a common population, allowing for uncertainty propagation (Lunn et al., 2013). In this vein, we adopt a two-stage strategy: outputs from a hierarchical state-space model serve as inputs to a Bayesian model, and we use the resulting posterior to derive downstream epidemiological metrics. The emphasis is on the workflow—separating estimation tasks into modules and carrying forward uncertainty—rat-
her than on any specific implementation detail from prior papers. Here we outline the structure of the manuscript. Section 2 (Methodology) details the data, the renewal model with generation and shedding kernels, the latent dynamics of Rt and It, the estimation procedure in nimble (de Valpine et al., 2024), and the modular integration with the Kalman filter (SSM). Section 3 (Results) presents convergence diagnostics and parameter estimates, and compares Rt and It trajectories across three input/no-
ise specifications (A–C), with an emphasis on the 69th Street plant and sensitivity analyses. Section 4 (Discussion) interprets the key findings—including practical invariance to input choice and stability across unit changes—and their implications for
2

WBE. Finally, Section 5 (Conclusions) summarizes contributions and recommendations.
2 Statistical Framework and Methodology
In this work, we analyze weekly RSV viral load expressed in billions of genome copies per day (B gc/day) for a single wastewater treatment plant, the 69th Street WWTP in Houston. Loads are constructed by multiplying observed concentrations (gc/L) by the plant’s median daily influent flow (L/day) and rescaling by 109:
yt = Ct F × 10−9, t = 1, . . . , T,
where Ct is the RSV concentration in week t (gc/L), and F is the median daily influent flow for the wastewater treatment plant (L/day). The resulting yt denotes viral load in B gc/day. The City of Houston operates 38 facilities serving populations from > 600 to > 500, 000 residents (Houston Public Works, 2023); serving 2.2 million residents. Twentyfour-hour composite samples were collected weekly each Monday between January 16, 2023, and December 30, 2024; values below the laboratory limit of dete-
ction (LOD) are treated as missing. We focus on the 69th Street WWTP, the largest facility in Houston, which serves an estimated 551,150 residents. Its size, broad catchment area, and consistent sampling make it one of the city’s most reliable wastewater signals. By concentrating on this plant, we reduce cross-plant heterogeneity and create a clearer setting to test and refine our modeling framework, establishing a methodological benchmark for future extensions across Houston’s network. We adopt a-
 Bayesian renewal-based framework widely used in wastewater epidemiology (Fraser, 2007; Huisman et al., 2022; Champredon et al., 2024). These models link latent infections to wastewater viral loads through two key temporal processes: the generation interval, which governs the renewal of infections, and the shedding profile, which maps past infections to the viral RNA signal. Whereas pipelines such as EpiSewer adopt a modular structure to incorporate incubation, shedding, and generation dynamics in-
 detail (Lison et al., 2023), our version is deliberately less complex. This simplification facilitates interpretation of both the latent transmission process and the plant-specific scaling parameters, while retaining the ability to capture epidemic dynamics from wastewater signals. We complement the renewal framework with information from a state-space model estimated via the MARSS package (Holmes et al., 2012). These filtered signals are propagated into the renewal model, allowing us to evaluate-
 robustness and provide an additional perspective on how to evaluate infection dynamics. Transmission and observation delays are represented by two kernels: the generation interval and the shedding profile. Both are modeled as Gamma distributions in continuous time and discretized into weekly lags using cumulative distribution function differences. This construction is standard in renewal-based epidemic models (Fraser, 2007; Huisman et al., 2022; Champredon et al., 2024). The generation interval g-
overns the renewal of infections. Following (Vink et al., 2014), we assume a mean of 7.5 days and a standard deviation of 2.1 days for RSV infections. These values are expressed through a Gamma distribution whose parameters are derived from the reported mean and variance. To obtain weekly weights, we discretize the continuous distribution into intervals centered at integer lags. The support is truncated
3

at G weeks, where G denotes the maximum lag retained in the kernel. Probability mass beyond G is not used, and the retained weights are renormalized to sum to one, following a similar construction to that in (Bracher and Held, 2022). For the generation interval, support is therefore g = 1, . . . , G, excluding lag zero to reflect the biological delay between primary and secondary infections (Fraser, 2007; Huisman et al., 2022):
wgen
g ∝ FΓ g + 1
2 ; κGI, θGI − FΓ g − 1
2 ; κGI, θGI . (1)
The shedding profile maps latent infections to RNA viral loads in wastewater. Based on clinical evidence synthesized by (Cevik et al., 2023), we assume a mean of 4.6 days and a standard deviation of 2.0 days for the duration of viral shedding. These values are expressed through a Gamma distribution whose parameters are derived from the reported mean and variance. Because our data are aggregated weekly, the interpretation of lag zero differs from daily formulations: here, d = 0 corresponds to contr-
ibutions occurring within the same calendar week as infection, which is biologically plausible given that RSV shedding can begin within the first few days of illness (Hall et al., 2001; DeVincenzo et al., 2005). As in (1), we use a finite support d = 0, . . . , D; the mass beyond D is omitted and the remaining weights are renormalized to sum to one.
wshed
d ∝ FΓ d + 1
2 ; κSH, θSH − FΓ max{d − 1
2 , 0}; κSH, θSH . (2)
2.1 Latent Transmission Process
The effective reproduction number Rt is modeled through a scaled softplus transformation of an unconstrained latent link–scale process zt (a unitless transmission-intensity index) (Scott et al., 2021; Lison et al., 2023). This transformation guarantees positivity of Rt and behaves approximately like the identity in the epidemiologically relevant neighborhood of Rt ≈ 1, while remaining numerically stable:
Rt = log 1 + exp(kzt)
k , k > 0.
The parameter k controls the curvature of the link between zt and Rt. Larger values yield a sharper response (approaching a rectified-linear mapping for positive zt), amplifying short-lived increases in transmission, whereas smaller values produce a smoother, more graded mapping. Thus, k regulates how strongly fluctuations in the latent process translate into changes in transmissibility. The latent process {zt} evolves according to a Gaussian random walk, providing a parsimonious yet flexible repr-
esentation of temporal changes in transmission:
z1 ∼ N (1, σ2
ε ), zt ∼ N (zt−1, σ2
ε ), t ≥ 2,
with σε > 0 controlling week-to-week volatility. Let It denote the number of new infections during week t. Following the renewal formulation (Fraser, 2007), expected incidence is expressed as a convolution of past infections with the generation-interval distribution:
λt = Rt
G
X
g=1
wgen
g It−g, where It ∼ Poisson(λt), t ≥ 2,
4

and wgen
g are the generation-interval weights normalized to sum to one and G is their maximum support. Because absolute infections cannot be identified from wastewater alone, the magnitude of It depends on the initial condition, which we set to the citywide average weekly RSV healthcare encounter data multiplied by the share of the city’s population in the service area (Houston Health Department, 2025).
2.2 Viral Load Process
We link latent infections to RNA viral loads through the shedding kernel {wshed
d }D
d=0,
which encodes the timing of viral release after infection. Using (2), the expected load is
πt = β
D
X
d=0
It−d wshed
d,
where β > 0 converts infections into billions of genome copies per day per infection. The viral loads are modeled by a log-normal likelihood:
μt = log πt − 1
2 σ2
y, yt ∼ LogNormal μt, σ2
y,
where σy > 0 captures measurement variability on the log scale. This parametrization implies E[yt | πt] = πt and is standard in wastewater applications with multiplicative experimental and sampling variability.
2.3 State-space model
We also obtain filtered trajectories from a non-linear Gaussian state–space model (SSM) and propagate their time-varying variances as known observation uncertainty. This alternative input is used to check whether inferences are sensitive to prefiltering, while allowing week-specific variances to be carried into the renewal likelihood. Our methodologies account for noise and missing data in the wastewater time series while separating persistent structure from high-frequency variability. We implemen-
t this step with the MARSS package in R (Holmes et al., 2012). Following the approach in (Ensor et al., 2025), let xt denote the latent wastewater RNA viral load on a log-scale at time t with initial state x0 ∼ N (ψ, 1) where ψ is unknown. The state equation is the first difference twice or
xt = 2xt−1 − xt−2 + wt, wt ∼ N (0, σ2
w),
where wt is a Gaussian innovation with mean zero and variance σ2
w. The observation equation is given by
yt = xt + vt, vt ∼ N (0, σ2
v ),
where yt denotes the measured viral load on a log scale in week t, and vt represents measurement error; assumed Gaussian with mean zero and variance σ2
v.
The parameters of the SSM namely σv, σw, and ψ via maximum likelihood, yielding filtered estimates of the latent trend and its pointwise uncertainty:
xbt|t = E [xt|y1:t] , Pbt|t = Var [xt | y1:t] .
5

These variances are later used to construct uncertainty bands and to propagate measurement uncertainty into subsequent modeling layers. Importantly, estimation is performed on the log-10 scale and subsequently converted to the natural measurement scale (gc/L), ensuring consistency with the log-normal likelihood adopted in the measurement layer of the renewal model. Finally, to assess robustness to measurement noise, we first fit the renewal model to the viral-load measurements yt while injecting -
week-specific observation variances from the Kalman filter. We then replace yt with the SSM filtered trajectories ybt, again using Pbt as known variances. As shown in Section 3, the resulting trajectories are practically equivalent; accordingly, we present the SSM-filtered input as the default and treat the direct-measurement fit as a robustness check. We estimated the parameters of the Bayesian renewal model in nimble via MCMC. The sampler jointly sampled the latent trajectories and the key param-
eters, producing posterior draws for all unknown quantities. We run multiple chains and discard the warmup iterations. We assessed convergence using the rank-normalized split Rb and verified well-mixed chains using the relative Monte Carlo standard error (relMCSE). Finally, for the state-space model, we performed the estimations using maximum likelihood with the BFGS as our optimization option in the MARSS package, which utilizes Kalman filtering for efficient likelihood evaluation. In the Bayesia-
n layer of the renewal model, the latent driver zt follows a Gaussian random walk with a diffuse normal prior for z1 and a log-normal prior on the innovation scale σε. The softplus curvature parameter k is assigned a truncated log-normal prior to ensure positivity and a stable mapping between zt and Rt. When β is estimated, we place a normal prior on log β, inducing a log-normal prior on the natural scale. The observation standard deviation, σy, is either supplied externally as a time-varying sequ-
ence or treated as a single unknown parameter with a truncated normal prior. All priors are moderately informative, providing reasonable regularization while allowing the likelihood to dominate the inference. The mean of the initial state ψ in the state-space model is estimated separately via maximum likelihood.
3 Results
In this section, we present results from applying the Bayesian renewal model to RSV data from the WWTP under two specifications: (A) viral-load measurements transformed to billions of copies per day (BCPD) with a homoscedastic observation variance σy estimated; and (B) state-space–model (SSM) filtered trajectories ybt used as the observation
input, with week-specific variances Pbt treated as known. Results are organized as follows:
1. Convergence diagnostics and parameter estimates, summarizing stability and consistency across fits; and
2. Latent trajectories of incidence (It) and effective reproduction number (Rt), comparing the raw viral-load input versus the filtered input.
3.1 Diagnostics
Table 1 summarizes posterior estimates and convergence diagnostics for the scalar parameters under two specifications: (A) viral-load measurements as input with homoscedastic
6

noise (a single σy); and (B) SSM-filtered estimates of the viral load with heteroscedas
tic noise (Pbt). Convergence is strong in both cases: rank-normalized split Rb values lie between 1.003 and 1.018, and relative Monte Carlo standard errors (relMCSE) are small (≈ 0.002–0.023), indicating well-mixed chains for all parameters. The link-curvature
parameter k centers around 8 with Rb ≤ 1.007 (relMCSE ≤ 0.009), consistent with a moderately sharp softplus mapping from zt to Rt. The innovation standard deviation σε is small in both specifications (A: 0.073; B: 0.078), suggesting gradual week-to-week changes in transmission. In specification A, dispersion is summarized by σby ≈ 0.385
(
Rb = 1.003, relMCSE = 0.002), whereas in specification B the observation heteroscedas
ticity is encoded via the time-varying Pbt. Overall, posterior summaries are broadly similar across specifications: point estimates differ slightly, but credible intervals overlap and convergence metrics are comparable. For the plant-specific scale, β is 13.827 (SD 3.646; 95% CI [7.838, 22.273]) in A and 14.737 (SD 3.969; 95% CI [8.591, 23.945]) in B; the credible intervals overlap, indicating no practical difference in scale across the two specifications. All parameters are well identified, and t-
he diagnostics (Rb and relMCSE) show comparable sampling performance in
A–B. Conceptually, using filtered inputs with time-varying variances Pbt provides an alternative to the homoscedastic model without changing the qualitative conclusions about transmission dynamics.
A
Mean SD 95% CI Rb/relMCSE
β 13.827 3.646 [7.838, 22.273] 1.008 / 0.020
k 8.238 4.691 [2.122, 18.681] 1.007 / 0.008
σε 0.073 0.028 [0.030, 0.135] 1.008 / 0.023
σy 0.385 0.038 [0.316, 0.466] 1.003 / 0.002
B
Mean SD 95% CI Rb/relMCSE
β 14.737 3.969 [8.591, 23.945] 1.018 / 0.021
k 8.026 4.727 [1.765, 18.600] 1.005 / 0.009
σε 0.078 0.027 [0.032, 0.137] 1.017 / 0.019
σy — — — 
Table 1: Posterior means, standard deviations, 95% credible intervals, and convergence diagnostics (Rb/relMCSE) for scalar parameters under two specifications: (A) BCPD with homoscedastic σy estimated; (B) SSM-filtered viral-load inputs with week-specific
variances Pbt treated as known.
3.2 Latent infections and transmission dynamics from wastew
ater
Figure 1 displays posterior means and 95% credible bands for latent incidence (It) overlaid with wastewater viral load. Across both specifications (A–B), It rises sharply in late 2023, drops in January 2024, remains low through mid-2024, and shows a moderate uptick in
7

autumn 2024. Timing is coherent: the It peak precedes the load maximum by roughly one week in each case. Phase, peak timing, and overall It trajectories are practically indistinguishable across inputs. Because the absolute scale of It is not identified from wastewater alone, we interpret It in relative terms and anchor its level via the initial condition.
Figure 1: Latent incidence (It) with viral load on the right axis. Blue line: posterior mean of It; blue band: 95% credible interval; gray line: viral load (B gc/day). Panels A–B correspond, respectively, to: (A) BCPD with homoscedastic observation variance
σy estimated; and (B) SSM-filtered trajectories with week-specific variances Pbt treated as known. Gray vertical bands represent periods with missing wastewater measurements.
Figure 2 reports the effective reproduction number (Rt). Across both specifications (A–B), Rt is subcritical (< 1) in early 2023, becomes clearly supercritical in autumn 2023, and drops below 1 around December–January; a smaller episode appears in autumn 2024. For 69th Street (October 2023–February 2024), the peaks occur on October 23 and 30 for Rt, November 20 and 27 for It, and November 27 and December 4 for the load (top and bottom panels, respectively). In both specifications, the Rt maximum l-
eads the load maximum by about five weeks. The ordering Rt → It → load holds and is consistent with the generation and shedding kernels (about 1–2 weeks) and weekly aggregation. The inferred Rt trajectories are practically indistinguishable across the two modeling specifications.
8

Figure 2: Effective reproduction number (Rt) with viral load on the right axis. Orange line: posterior mean of Rt; orange band: 95% credible interval; horizontal line at Rt = 1; gray line: viral load (B gc/day). Panels A–B correspond, respectively, to: (A) BCPD with homoscedastic observation variance σy estimated; and (B) SSM-filtered trajectories
with week-specific variances Pbt treated as known. Gray vertical bands represent periods with missing wastewater measurements.
To assess practical differences across specifications, Figure 3 contrasts weekly posterior means for Rt and It under (A) BCPD with homoscedastic noise and (B) SSM-filtered
inputs with week-specific variances Pbt. For Rt, points fall close to the identity with minimal dispersion, indicating that estimates are largely insensitive to using filtered inputs with heteroscedastic variances. For It, dispersion is slightly larger—most visibly near peak weeks—but without a consistent bias. Overall, systematic differences are negligible and the inferred transmission trajectories are practically indistinguishable across the two specifications.
4 Discussion
We used a renewal framework with biologically motivated generation and shedding kernels to infer RSV transmission from wastewater. In contrast to more elaborate pipelines (e.g., EpiSewer) that couple multiple modules and assumptions, and ERN, which adds structural complexity to estimate Rt, our approach is intentionally parsimonious and transparent. Latent infections and observed load are linked through two kernels and a small set of identifiable parameters. We evaluated two input/noise specificat-
ions that differ only in how the signal and its uncertainty enter the likelihood: (A) viral-load measurements in billions of copies per day (BCPD) with homoscedastic noise; and (B) SSM-filtered load estimates (FE)
with week-specific Kalman variances Pbt treated as known. Convergence diagnostics were satisfactory in both cases (acceptable Rb and low relative MCSE). Model comparison and pairwise scatter plots show that Rt is essentially invariant across A–B. For It, using
9

Figure 3: Comparison of weekly posterior means under specifications A (BCPD, ho
moscedastic σy) and B (SSM-filtered inputs with week-specific variances Pbt): left, Rt; right, It. Points are weekly posterior means; the dashed line is the identity y = x.
FE with Pbt (A vs. B) increases dispersion primarily in the upper tail; outside peak periods, trajectories are effectively equivalent. Given this pattern, the filtered input with Pbt is attractive for routine reporting—because it carries week-specific observation variance—without altering the qualitative epidemiological interpretation. Timing is consistent across the model specifications. The Rt maximum leads the wastewater maximum by about five weeks, and the It peak precedes the wastewater maxim-
um by approximately one week. This ordering aligns with the generation and shedding kernels (on the order of 1–2 weeks) and the weekly aggregation of the series, supporting the renewal-based interpretation. We also refit the model using concentration in copies per liter rather than flownormalized copies per day. Dimensionless parameters were essentially unchanged, whereas the plant-specific scale β shifted to absorb the unit change. Because switching units multiplies the observed signal by a const-
ant, the model compensates by rescaling β while leaving shape and timing intact. In practice, the coefficients are scale-invariant except for β; the inferred Rt trajectory is unaffected, and It changes only by a constant multiplicative factor tied to the measurement scale. The absolute scale of It is not identified from wastewater alone, so we anchor it with I1 ∼ Poisson(61), motivated by the fraction of Houston’s population served by the selected sewershed and the city-wide mean weekly RSV cases.-
 Sensitivity checks using alternative anchors for the initial condition confirm that peak timing and the ordering Rt → It → load are preserved and that the Rt trajectory is robust; as expected, the level of It shifts nearly proportionally to the chosen anchor with compensating adjustments in β. Accordingly, we interpret It in relative terms.
10

5 Conclusions
Using a parsimonious renewal framework with generation and shedding kernels, we inferred RSV transmission from wastewater. We obtained the relative number of infections and the effective reproduction number with coherent timing: Rt leads It, and It leads the wastewater signal. Comparing two input choices—(A) measurements in billions of copies per day with homoscedastic noise; and (B) SSM-filtered load estimates with week-specific
variances from the Kalman filter (Pbt)—we find Rt to be essentially invariant across spec
ifications. For It, using filtered inputs with Pbt (A vs. B) increases dispersion primarily in the upper tail; outside peak periods, trajectories are effectively equivalent. Results are also robust to the measurement scale (gc/L vs. billions of copies per day): parameters are effectively unchanged except for the plant-specific scaling factor β, which absorbs unit changes. Overall, wastewater data coupled with a simple renewal structure provide stable estimates of It (in relative terms) and Rt with-
out the need for complex preprocessing. When available, we therefore recommend using the SSM-filtered input as the default, with direct measurements retained as a robustness check.
Funding and Acknowledgments
The authors disclosed receipt of the following financial support for the research, authorship, and/or publication of this article: This work was supported by the Centers for Disease Control and Prevention (ELC-ED grant no. 6NU50CK000557-01-05 and ELCCORE grant no. NU50CK000557). The authors acknowledge Houston Public Works for their contributions to the HHD WBE system. The authors would like to acknowledge the CDC National Wastewater Surveillance System (NWSS) scientific community. For more inform-
ation on the Houston Wastewater Epidemiology Center of Excellence see
https://www.hou-wastewater-epi.org.
Notes on contributor(s)
Palacio is the corresponding author, representing both intellectual leadership and implementation of the methodologies. He presented the team with a complete first draft for editorial comments. Ensor, Rice Co-PI of this project, led the technical development and draft writing. Keller consulted on developing the two-stage implementation with specific attention to uncertainty quantification. Schneider oversees the day-to-day implementation of the HHD WBE system and represents the team in national da-
ta analysis conversations. Domakonda serves as HHD manager for this project. Hopkins, serves as HHD PI for this project. Stadler, Rice Co-PI of this project, oversees all aspects of laboratory analyses, and brings the essential expertise in WBE. All authors contributed to the scientific discussion and edited the manuscript.
References
Johannes Bracher and Leonhard Held. Endemic-epidemic models with discrete-time serial interval distributions for infectious disease prediction. International Journal of Forecasting, 38(3):1221–1233, 2022. doi: 10.1016/j.ijforecast.2020.07.002.
11

Muge Cevik, Pedro A. Piedra, Vittorio Demicheli, Cristina Cantarelli, Donatella Manno, Stefano Vergnano, Steve Pullan, and Rachel Harwood. Virology, transmission, and clinical features of respiratory syncytial virus in adults. BMJ, 380:e072292, 2023. doi: 10.1136/bmj-2022-072292.
David Champredon, Irena Papst, and Warsame Yusuf. ern: An R package to estimate the effective reproduction number using clinical and wastewater surveillance data. PLOS ONE, 19(6):e0305550, 2024. doi: 10.1371/journal.pone.0305550.
Perry de Valpine, Christopher Paciorek, Daniel Turek, Nick Michaud, Cliff AndersonBergman, Fritz Obermeyer, Claudia Wehrhahn Cortes, Abel Rodrı ́guez, Duncan Temple Lang, Wei Zhang, Sally Paganin, Joshua Hug, Paul van Dam-Bates, Jagadish Babu, Lauren Ponisio, and Peter Sujan. nimble: MCMC, Particle Filtering, and Programmable Hierarchical Modeling, 2024. URL https://CRAN.R-project.org/ package=nimble. R package version 1.3.0.
John P. DeVincenzo, Chadi M. El Saleeby, and Andrew J. Bush. Respiratory syncytial virus load predicts disease severity in previously healthy infants. Journal of Infectious Diseases, 191(11):1861–1868, 2005. doi: 10.1086/430008.
Katherine B. Ensor, Jacob C. Schedler, Jose Palacio, Rebecca Schneider, Karthik Domakonda, Loren Hopkins, and Lauren B. Stadler. A nonlinear hierarchical time series approach to citywide trend assessment of viruses, hot spot signals, and right-sizing system. Data Science in Science, 4(1), 2025. doi: 10.1080/26941899.2025.2559690. URL
https://doi.org/10.1080/26941899.2025.2559690.
Christophe Fraser. Estimating individual and household reproduction numbers in an emerging epidemic. PLoS ONE, 2(8):e758, 2007. doi: 10.1371/journal.pone.0000758.
Laura Haak, Blaga Delic, Lin Li, Tatiana Guarin, Lauren Mazurowski, Niloufar Gharoon Dastjerdi, Aimee Dewan, and Krishna Pagilla. Spatial and temporal variability and data bias in wastewater surveillance of SARS-CoV-2 in a sewer system. Science of The Total Environment, 805:150390, 2022. doi: 10.1016/j.scitotenv.2021.150390.
Caroline B. Hall, Caroline E. Long, and Katherine C. Schnabel. Respiratory syncytial virus infections in previously healthy working adults. Clinical Infectious Diseases, 33 (6):792–796, 2001. doi: 10.1086/322657.
Oliver E. Hart and Rolf U. Halden. Computational analysis of SARS-CoV-2 surveillance by wastewater-based epidemiology locally and globally: Feasibility, economy, opportunities and challenges. Science of The Total Environment, 730:138875, 2020. doi: 10.1016/j.scitotenv.2020.138875.
Xi He, Eric H. Y. Lau, Peng Wu, Xilong Deng, Jian Wang, Xinxin Hao, Yiu Chung Lau, Jessica Y. Wong, Yu Guan, Xinghua Tan, Xiaoneng Mo, Yanqing Chen, Baolin Liao, Weilie Chen, Fengyu Hu, Qing Zhang, Mingqiu Zhong, Yanli Wu, Zijian Zhao, Fuchun Zhang, Benjamin J. Cowling, Fang Li, and Gabriel M. Leung. Temporal dynamics in viral shedding and transmissibility of COVID-19. Nature Medicine, 26:672–675, 2020. doi: 10.1038/s41591-020-0869-5.
12

Elizabeth E. Holmes, Eric J. Ward, and Kasper Wills. Marss: Multivariate autoregressive state-space models for analyzing time-series data. The R Journal, 4
(1):11–19, 2012. URL https://journal.r-project.org/archive/2012-1/
RJournal_2012-1_Holmes ̃et ̃al.pdf.
Houston Health Department. Respiratory diseases surveillance report: 2024–2025 influenza season, MMWR week 2025-02, 2025. URL https://www.houstonhealth.
org/media/11526/download?inline=. Accessed 2025-09-30.
Houston Public Works. City of houston wastewater operations report. https://www.
publicworks.houstontx.gov/, 2023.
Bridgette Hughes, Dorothea Duong, Bradley J. White, Krista R. Wigginton, Elana M. G. Chan, Marlene K. Wolfe, and Alexandria B. Boehm. Respiratory syncytial virus (RSV) RNA in wastewater settled solids reflects RSV clinical positivity rates. medRxiv
preprint, 2021. URL https://doi.org/10.1101/2021.12.01.21267014.
Posted December 5, 2021.
Jana S. Huisman, Je ́r ́emie Scire, Lea Caduff, Xavier Fernandez-Cassi, Pravin Ganesanandamoorthy, Anina Kull, Andreas Scheidegger, Elyse Stachler, Alexandria B. Boehm, Bridgette Hughes, Alisha Knudson, Aaron Topol, Krista R. Wigginton, Marlene K. Wolfe, Tamar Kohn, Christoph Ort, Tanja Stadler, and Timothy R. Julian. Wastewater-based estimation of the effective reproductive number of SARS-CoV-2. Environmental Health Perspectives, 130(5):057011, 2022. doi: 10.1289/EHP10050.
Adrian Lison, Hans-Michael Kaltenbach, Johannes S. Huisman, Tanja Stadler, Alessandra Rinaldo, Mathias Ackermann, and Niko Beerenwinkel. Estimating transmission dynamics from wastewater data using a bayesian generative modeling framework. Nature Computational Science, 3(6):540–548, 2023. doi: 10.1038/s43588-023-00466-6.
David Lunn, Jessica Barrett, Michael Sweeting, and Simon Thompson. Fully bayesian hierarchical modelling in two stages, with application to meta-analysis. Journal of the Royal Statistical Society: Series C (Applied Statistics), 62(4):551–572, 2013. doi:
10.1111/rssc.12007. URL https://doi.org/10.1111/rssc.12007.
Mayo Clinic Staff. Respiratory syncytial virus (rsv)—symptoms & causes,
2023. URL https://www.mayoclinic.org/diseases-conditions/
respiratory-syncytial-virus/symptoms-causes/syc-20353098. Ac
cessed 2025-09-30.
James Scott, Seth Flaxman, Swapnil Mishra, Samir Bhatt, H. Juliette T. Unwin, Axel Gandy, et al. epidemia: An r package for semi-mechanistic bayesian modeling of
epidemics. arXiv, 2021. URL https://arxiv.org/pdf/2110.12461.
Francesco Sera and Antonio Gasparrini. Extended two-stage designs for environmental research. Environmental Health, 21(41), 2022. doi: 10.1186/s12940-022-00853-z. URL
https://doi.org/10.1186/s12940-022-00853-z.
M. A. Vink, M. C. J. Bootsma, and J. Wallinga. Serial intervals of respiratory infectious diseases: A systematic review and analysis. American Journal of Epidemiology, 180 (9):865–875, 2014. doi: 10.1093/aje/kwu209.
13

Matthew J. Wade, Anna Lo Jacomo, Elena Armenise, Mathew R. Brown, Joshua T. Bunce, Graeme J. Cameron, Zhou Fang, Kata Farkas, Deidre F. Gilpin, David W. Graham, Jasmine M. S. Grimsley, Alwyn Hart, Till Hoffmann, Katherine J. Jackson, David L. Jones, Chris J. Lilley, John W. McGrath, Jennifer M. McKinley, Cormac McSparron, Behnam F. Nejad, Mario Morvan, Marcos Quintela-Baluja, Adrian M. I. Roberts, Andrew C. Singer, Ce ́lia Souque, Vanessa L. Speight, Chris Sweetapple, David Walker, Glenn Watts, A-
ndrew Weightman, and Barbara Kasprzyk-Hordern. Understanding and managing uncertainty and variability for wastewater monitoring beyond the pandemic: Lessons learned from the united kingdom national COVID19 surveillance programmes. Journal of Hazardous Materials, 424:127456, 2022. doi: 10.1016/j.jhazmat.2021.127456.
14

Appendix
1 Introduction
This appendix presents two scenarios that complement the main manuscript and use the same modeling specifications A–B: (A) BCPD with homoscedastic observation variance
estimated; and (B) SSM-filtered trajectories with week-specific variances Pbt treated as known. We re–fit the model using copies per liter (gc/L) instead of billions of copies per day (BCPD). This example isolates the role of units and flow normalization. As shown below, dimensionless parameters and inferred trajectories (Rt, It) are effectively unchanged, while the plant–specific scale β adjusts to absorb the unit change.
2 Analysis using gc/L
For Rt, the viral concentration panels in Fig. 4 sit essentially on top of their counterparts based on viral load: same autumn-2023 maximum, the dip around December–January, and the minor late-2024 rise. The concentration–load scatterplots in Fig. 6 reinforce this invariance—points hug the identity with correlations of 0.999 and very small MAE (0.002–0.003; Table 2). Parameter summaries are consistent with this picture: the dynamic/shape parameters (k, σε) remain stable across A–B and across data -
types (Table 3). In short, Rt is unit-invariant: switching from viral load to viral concentration leaves the epidemiological signal unchanged.
Figure 4: Effective reproduction number (Rt) with viral load on the right axis. Orange line: posterior mean of Rt; orange band: 95% credible interval; horizontal line at Rt = 1; gray line: viral concentration (gc/L). Panels A–B correspond, respectively, to: (A) viral concentrations with homoscedastic observation variance σy estimated; and (B) SSM
filtered trajectories with week-specific variances Pbt treated as known.
For It, the viral concentration panels in Fig. 5 reproduce the same seasonality and peak timing as viral load (late-2023 peak, January decline, mild autumn-2024 uptick).
15

Concentration-based trajectories track load-based ones closely, with only small differences in magnitude during the peak and the late-2024 uptick. These differences are consistent with the modest MAE values for It (0.287–3.364 infections; Table 2) and reflect the expected β–It scale trade-off once flow is removed from the observation map. Timing is preserved and level shifts are minor, indicating that changes in data type affect units rather than the underlying epidemic pattern.
Figure 5: Latent incidence (It) with viral load on the right axis. Blue line: posterior mean of It; blue band: 95% credible interval; gray line: viral concentration (gc/L). Panels A–B correspond, respectively, to: (A) viral concentrations with homoscedastic observation
variance σy estimated; and (B) SSM-filtered trajectories with week-specific variances Pbt treated as known.
Metric Model Correlation MAE
It A 0.999 0.287
Rt A 0.999 0.003
It B 0.999 3.364
Rt B 0.999 0.002
Table 2: Agreement between viral concentration and viral load estimates (correlation and MAE) for It and Rt across models A–B.
Table 3 shows that k and σε are empirically stable across data types. For example, the posterior means of k under load (A/B: 8.24/8.03) and under concentration (A/B: 8.48/8.02) are close, and their 95% credible intervals strongly overlap (e.g., model A k: [2.12, 18.68] in load vs. [2.37, 18.83] in concentration; model A σε: [0.030, 0.135] vs. [0.025, 0.131]; similarly for model B with σε: [0.032, 0.137] vs. [0.037, 0.132]). Mean shifts are small relative to posterior spreads, supporting the view t-
hat these parameters are invariant to the data type. By design, β changes scale and absorbs unit effects.
16

Figure 6: Pairwise scatterplots comparing estimates from viral concentration (CPL) and viral load (CPD) for It (left) and Rt (right) under models A–B. Points are weekly posterior means; the dashed line is y = x.
17

For the observational noise σy, posteriors are also close across data types (e.g., σy,load = 0.385 [0.316, 0.466] vs. σy,conc = 0.387 [0.319, 0.466]).
Parameter Model Mean St.Dev. 95% CI
k A 8.483 4.685 [2.367, 18.829]
σε A 0.069 0.027 [0.025, 0.131]
β A 54.847 12.572 [34.224, 82.537]
σy A 0.387 0.037 [0.319, 0.466]
k B 8.018 4.680 [1.974, 18.596]
σε B 0.079 0.024 [0.037, 0.132]
β B 59.988 15.416 [36.055, 96.459]
Table 3: Posterior summaries for models A–B using viral concentration (gc/L).
18

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:41.389Z
- **Text Length:** 39750 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
