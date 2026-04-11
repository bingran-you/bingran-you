# PDF Document: O'Connor et al. - 2025 - The Evolution of Probabilistic Price Forecasting Techniques A Review of the Day-Ahead, Intra-Day, a.pdf

**File Path:** O'Connor et al. - 2025 - The Evolution of Probabilistic Price Forecasting Techniques A Review of the Day-Ahead, Intra-Day, a.pdf

**Processed Date:** 2026-02-10T18:18:08.094Z

**File Size:** 813.04 KB

**Total Pages:** 40

**Extracted Pages:** 40

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3492

**Title:** The Evolution of Probabilistic Price Forecasting Techniques: A Review of the Day-Ahead, Intra-Day, and Balancing Markets

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

The Evolution of Probabilistic Price Forecasting Techniques: A
Review of the Day-Ahead, Intra-Day, and Balancing Markets
Ciaran O’Connor
SFI CRT in Artificial Intelligence, School of Computer Science & IT, University College Cork, Ireland
Mohamed Bahloul
Water & Energy Transition Unit, Vlaamse Instelling voor Technologisch Onderzoek, Mol, Belgium
Steven Prestwich, Andrea Visentin
SFI Insight Centre for Data Analytics, School of Computer Science & IT, University College Cork, Ireland
Abstract
Electricity price forecasting has become a critical tool for decision-making in energy markets, particularly as the increasing penetration of renewable energy introduces greater volatility and uncertainty. Historically, research in this field has been dominated by point forecasting methods, which provide single-value predictions but fail to quantify uncertainty. However, as power markets evolve due to renewable integration, smart grids, and regulatory changes, the need for probabilistic forecastin-
g has become more pronounced, offering a more comprehensive approach to risk assessment and market participation. This paper presents a review of probabilistic forecasting methods, tracing their evolution from Bayesian and distribution based approaches, through quantile regression techniques, to recent developments in conformal prediction. Particular emphasis is placed on advancements in probabilistic forecasting, including validity-focused methods which address key limitations in uncertainty esti-
mation. Additionally, this review extends beyond the Day-Ahead Market to include the Intra-Day and Balancing Markets, where forecasting challenges are intensified by higher temporal granularity and real-time operational constraints. We examine state of the art methodologies, key evaluation metrics, and ongoing challenges, such as forecast validity, model selection, and the absence of standardised benchmarks, providing researchers and practitioners with a comprehensive and timely resource for navig-
ating the complexities of modern electricity markets.
Keywords: Day-Ahead Market, Intra-Day Market, Balancing Market, Probabilistic Electricity Price Forecasting, Quantile Regression, Conformal Prediction.
Email
addresses: 119226305@umail.ucc.ie (Ciaran O’Connor), mohamed.bahloul@vito.be (Mohamed Bahloul), s.prestwich@cs.ucc.ie, andrea.visentin@ucc.ie (Steven Prestwich, Andrea Visentin)
arXiv:2511.05523v1 [q-fin.ST] 28 Oct 2025

1. Introduction
Electricity Price Forecasting (EPF) plays a pivotal role in energy markets, enabling market participants to optimise trading strategies, mitigate financial risks, and maintain grid stability. However, forecasting accuracy has become increasingly difficult due to the rapid expansion of renewable energy sources such as wind, solar, and hydroelectric power. While policy incentives, declining technology costs, and regulatory mechanisms like feed-in tariffs have accelerated renewable adoption [1, 2], t-
hese energy sources introduce significant variability and uncertainty into electricity markets. Unlike traditional commodities, electricity cannot be stored efficiently, requiring real-time balancing of supply and demand. As a result, short-term price fluctuations are highly sensitive to renewable generation patterns, regulatory interventions, and unforeseen disruptions such as generator outages or transmission constraints. These complexities make EPF particularly challenging, as prices exhibit hi-
gh volatility, non-linearity, and sudden spikes. Addressing these challenges requires robust forecasting methods capable of quantifying uncertainty, an area that has gained increasing attention in recent years.
1.1. Probabilistic Forecasting Methods
There are two major EPF schemes: point forecasts and probabilistic forecasts. Point forecasts provide single price predictions that are easy to interpret and establish parsimonious predictor-target relationships under the assumption of homoscedasticity. While point forecasting has long been the dominant approach in EPF, its inability to quantify uncertainty associated with predictions limits its effectiveness in volatile electricity markets. Price fluctuations driven by renewable energy variabilit-
y, sudden demand shifts, and regulatory interventions create forecasting challenges that traditional point estimates fail to capture. As a result, probabilistic forecasting has emerged as a key advancement, offering a way to quantify uncertainty by generating Prediction Intervals (PIs) that provide a range of possible future prices rather than a single deterministic value. By capturing the full spectrum of potential price variations, Probabilistic Electricity Price Forecasting (PEPF) enables impro-
ved decision-making in dynamic, non-linear markets [3, 4], addressing uncertainties in smart grids, supply-demand dynamics, and price fluctuations with a stronger emphasis on the operational impact of forecasts and risk management [5]. A variety of probabilistic forecasting methods have been explored in the literature. Traditional approaches include Bayesian models, Historical Simulation, bootstrapped PIs, and Quantile Regression (QR), all of which estimate probability distributions or quantiles o-
f future prices. These methods have been widely applied in electricity markets [3, 4] but often suffer from limitations in non-stationary environments, where price dynamics are constantly evolving. Since GEFCom2014, Quantile Regression Averaging (QRA) has gained popularity for its ability to combine multiple probabilistic forecasts, improving robustness in complex market conditions [5]. Despite these advancements, many probabilistic forecasting methods fail to provide coverage guarantees, particul-
arly in data-limited settings. Conformal Prediction (CP) has gained increasing attention for its ability to produce valid and adaptive PIs, ensuring predefined confidence levels are met regardless of the underlying data distribution [6, 7]. Recent advancements, such as Ensemble Batch Prediction Intervals (EnbPI) [8] and Sequential Predictive Conformal Inference (SPCI) [9], have extended CP to time-series applications, more effectively addressing forecasting challenges in dynamic markets.
2

1.2. Related Work and Literature Gap
EPF has been widely studied, with early research primarily focused on point forecasting techniques. Foundational reviews, such as those by [10, 11, 12, 13, 14, 15, 16, 17], catalogued the development of statistical, ML, DL, and hybrid models best suited for EPF. However, these reviews emphasise methodological innovation while largely overlooking the growing need to quantify uncertainty in increasingly volatile electricity markets. In contrast, probabilistic forecasting has received far less attent-
ion in EPF literature. The few existing reviews that address uncertainty quantification, such as those by [18] and [3], primarily focus on traditional techniques and remain largely confined to the Day-Ahead Market (DAM). They do not incorporate recent methodological advancements, particularly validity-focused approaches such as CP and its adaptations for time series forecasting. Another important gap in the literature is the under-representation of real-time electricity spot markets. While the DAM-
 has been extensively studied, the Intra-Day Market (IDM) and Balancing Market (BM) remain largely unexplored, despite their increasing relevance in renewable-heavy systems. These markets introduce unique forecasting challenges due to higher temporal granularity, greater price volatility, and shorter decision horizons. Addressing these complexities is critical for effective market participation, grid reliability, and operational risk management. Given the rapid evolution of probabilistic forecasti-
ng techniques and the growing importance of real-time electricity markets, there is a clear need for a comprehensive and up to date review. This paper addresses this gap by examining probabilistic forecasting methods across the DAM, IDM, and BM. We trace the methodological progression from parametric and regression based models to recent CP-based approaches that offer rigorous validity guarantees. In doing so, this review provides an up-to-date resource for researchers and industry practitioners n-
avigating the complexities of EPF. The structure of this paper is as follows. Section 2 provides a background on electricity spot markets, including the DAM, IDM, and BM. Section 3 reviews uncertainty quantification methods used in PEPF. In Section 4, we discuss the key findings for each market. Finally, Section 5 summarises the contributions and outlines future research opportunities in probabilistic electricity price forecasting.
2. Background: Electricity Market Structure
EPF is closely linked to market structure, as different electricity markets operate on distinct time frames (see Figure 1), settlement mechanisms, and exhibit varying levels of temporal granularity and price volatility. Short-term markets, including the DAM, IDM, and BM, are essential for maintaining real-time balance between supply and demand. Each presents unique forecasting challenges due to differences in trading horizons, data availability, volatility, and operational constraints. Understandi-
ng the structure and role of each market is essential for selecting appropriate forecasting methods tailored to their specific characteristics.
2.1. Day-Ahead Market
The DAM is a forward electricity market in which trades are scheduled one day in advance, typically in hourly blocks. Market participants submit bids and offers based on anticipated supply and demand, with market clearing conducted via optimisation
3

Financial Physical
Forwards/ Capacity/ FTR
Day-Ahead Intraday Balancing Dispatch
Years Months Weeks Days Hours Minutes Seconds Real-time
Figure 1: Contrasting granularity of markets
algorithms such as EUPHEMIA in European markets [19, 20]. While the DAM generally exhibits lower price volatility than real-time markets, forecasting remains challenging due to the increasing penetration of weather-dependent renewables. Wind and solar generation introduce forecast error and ramping uncertainty, complicating both supply and demand projections [21]. The DAM’s longer forecast horizon and lower volatility have historically favoured point forecasting methods, but the integration of int-
ermittent generation is driving greater interest in uncertainty-aware approaches.
2.2. Intra-Day Market
The IDM enables continuous trading in the hours leading up to physical delivery, allowing market participants to adjust their DAM positions in response to updated forecasts, asset availability, and real-time system conditions. Unlike the DAM, which clears once daily, the IDM features multiple gate closures, often 15 to 60 minutes ahead of delivery, making it a short lead-time, high-resolution market. The IDM is highly sensitive to short-term deviations in renewable output, outages, and intra-day d-
emand shifts [22]. Accurate and timely forecasts are therefore critical for imbalance mitigation, trading optimisation, and system reliability. The non-stationary nature of IDM prices and their frequent fluctuations limit the effectiveness of point forecasting, necessitating probabilistic models that can adapt to dynamic and uncertain conditions.
2.3. Balancing Market
The BM is a real-time market operated by the Transmission System Operator (TSO) to correct supply-demand imbalances that remain after IDM gate closure. Unlike other markets, the BM does not involve voluntary trading; instead, the TSO dispatches balancing energy based on real-time system needs, typically with settlement periods as short as 5 minutes [23, 24]. Price formation in the BM reflects the marginal cost of these lastminute corrections, leading to extreme volatility and frequent price spikes-
 [25]. Forecasting imbalance prices is especially difficult due to limited transparency, highly non-linear dynamics, and the need for fast reaction times. In this context, probabilistic forecasting methods are essential for quantifying risk and preparing for worst-case outcomes. Integrating real-time signals such as frequency deviations, forecast errors, and system constraints can significantly enhance forecasting accuracy and decision-making in the BM.
4

2.4. Other Electricity Markets
In addition to the DAM, IDM, and BM, several other electricity markets support long-term planning, system reliability, and financial hedging. Below is a brief overview of their roles and relevance from a forecasting perspective: • Forward Market: Enables market participants to hedge future positions in the DAM, IDM, and BM through contracts-for-difference [26]. These contracts lock in a strike price for a future delivery period, reducing exposure to spot price volatility. Forecasting in this conte-
xt involves long-term price trend analysis, typically using macroeconomic indicators, fuel price forecasts, and policy-driven demand models—distinct from the short-term, high-resolution focus of this review. • Ancillary Markets: Maintain grid stability by procuring services such as frequency regulation, spinning reserve, voltage support, and black start capabilities. Forecasting in these markets involves real-time operational signals (e.g., frequency deviations, ramping needs) and often relies on -
probabilistic or control-oriented models, rather than pure price forecasting [27]. • Capacity Market: Ensures system adequacy by compensating providers for committing firm capacity during peak periods. Participation is typically based on long-term commitments, and forecasting focuses on capacity availability and peak demand projections across seasonal or annual horizons [28]. These differ significantly from the short-term volatility and data cadence addressed in this review. • Financial Transmissi-
on Rights Auctions: Provide financial hedges against locational price differences caused by transmission congestion. FTRs entitle holders to payments based on the spread between nodal prices across network zones. Forecasting in this domain requires congestion modelling and transmission flow forecasting, often using power flow simulations and market coupling dynamics [29]. While forward, ancillary, capacity, and transmission rights markets are critical to the broader functioning of electricity syst-
ems, they fall outside the scope of this review. These markets operate on longer timescales, involve structural risk hedging or reliability assurance, and often require forecasting methodologies distinct from those used for short-term spot price prediction. This paper therefore focuses exclusively on the DAM, IDM, and BM, where short-term price volatility, renewable integration, and real-time trading decisions require probabilistic forecasts.
3. Uncertainty Estimation in Electricity Price Forecasting
Uncertainty in EPF can be broadly classified into two categories: epistemic uncertainty, arising from limited knowledge or data, and aleatoric uncertainty, reflecting inherent randomness in the system. This review focuses on aleatoric uncertainty, which, although irreducible, can be modelled probabilistically [30, 31, 32, 33, 34]. Thus, for addressing both epistemic and aleatoric uncertainty we look at various probabilistic forecasting methods, including Bayesian, Distribution Based, Monte Carlo, -
Bootstrap, Historical Simulation, QR [35], QRA [36], CP [6], EnbPI [8], SPCI [9], and Conformalised QR. All these approaches have received increasing attention for capturing uncertainties in energy markets as well as various other time series applications [3, 4]. Recent innovations have focused on offering more reliable PIs, including making CP methods applicable to time series data. This section reviews these techniques, emphasising their role in addressing market variability and uncertainty.
5

We approach EPF as a regression task, where the dataset Z ={(xt,yt)}tN=1 consists of predictor variables xt and corresponding response variables yt. Instead of providing single-value predictions, probabilistic forecasting methods estimate a range within which future prices are likely to fall. The conditional quantile function Qyt(α | xt) defines the value below which a proportion α of future price observations are expected, given the predictors xt. We denote the lower and upper quantiles at level-
s α and 1−α
as qˆtα and qˆ1−α
t , respectively. The PI produced by forecasting model f is defined as:
Γ1−2α(xt) = [qˆα
t ,qˆ1−α
t ], (1) quantifying forecast uncertainty by indicating that the future price yt is expected to fall within this range with a confidence level of 1−2α, as shown in Figure 2. For example, setting α=0.1 yields an 80% confidence interval (1−2α=0.8), meaning there is an 80% probability that yt will lie within the estimated range.
0 2 4 6 8 10 12
0
10
20
30
qˆtα
qˆ1−α
t
qˆtα+1
qˆ1−α
t+1
qˆtα+2
qˆ1−α
t+2
qˆtα+3
qˆ1−α
t+3
qˆtα+4
qˆ1−α
t+4
Time
e/MWh
Real Price Forecasted Price Quantile Region
Figure 2: Quantile forecast of electricity prices
3.1. Parametric Methods
Parametric methods assume that electricity price dynamics follow a specific probability distribution (e.g., Gaussian, Gamma) and estimate its parameters from historical data. These approaches facilitate the incorporation of prior knowledge and produce interpretable forecasts; however, their validity depends on the accuracy of the assumed distribution, which can limit their ability to consistently achieve nominal PI coverage. An outline of the methods can be seen in Figure 3.
3.1.1. Bayesian
Bayesian probabilistic forecasting provides a flexible framework for uncertainty quantification in PEPF, incorporating prior distributions to model uncertainty and updating beliefs as new data becomes available. At the core of Bayesian forecasting is the posterior distribution, obtained via Bayes’ theorem: p(θ|D)= p(D|θ)p(θ)
p(D) (2) where p(θ|D) is the posterior distribution of parameters given data D, p(D|θ) is the likelihood, p(θ) is the prior, and p(D) is the marginal likelihood. Bayesian models such
6

Parametric Methods
Bayesian Distribution-Based Monte Carlo
Predictive Distribution Density Estimation Scenario Generation
Applications in Optimisation - Trading strategies & bidding - Risk analysis (VaR, CVaR) - Stochastic scheduling & dispatch - Market simulation & policy testing
Figure 3: Parametric probabilistic forecasting methods: Bayesian, Distribution-Based, and Monte Carlo.
as Bayesian Neural Networks (BNNs), Gaussian Processes, and state-space models have been applied to EPF, leveraging Markov Chain Monte Carlo (MCMC), variational inference, and Bayesian model averaging (BMA) for enhanced predictive performance. These methods have demonstrated success in capturing time-varying market dynamics, modelling stochastic volatility, and refining probabilistic interval estimates. BNNs and other Bayesian modelling techniques have gained traction in DAM EPF, particularly for -
their ability to provide full predictive distributions while mitigating overfitting. [37] demonstrates the effectiveness of BNNs in DAM forecasting, highlighting their capacity to capture uncertainty in price predictions. Beyond electricity markets, BNNs and other Bayesian methods have also proven effective in cloud workload prediction [38, 39, 40], underscoring their adaptability in stochastic environments. Further developments in Bayesian inference have improved forecasting reliability by incorp-
orating market-specific characteristics. [41] explores Bayesian inference for Continuous-time Autoregressive Moving Average (CARMA) models, demonstrating improved probabilistic forecasts through volatility and seasonality modelling. Bayesian optimisation has also been employed to enhance hybrid forecasting frameworks, as shown by [42], where hyperparameter tuning improves predictive accuracy. [43] applies Bayesian stochastic volatility models with jumps, generating more precise PIs. Similarly, [44-
] integrates Bayesian learning into Recurrent Neural Networks (RNNs), improving the robustness of probabilistic forecasts. The use of Bayesian methodologies in deep learning (DL) is further demonstrated in [45], where Bayesian learning is incorporated into deep neural networks (DNNs) for DAM forecasting. In a comparative study, [46] evaluates BNNs against Mixture Density RNNs, illustrating Bayesian inference’s role in risk assessment. Additionally, [47] applies Bayesian bootstrap QR to photovoltai-
c power forecasting, leveraging resampled data for improved accuracy. BMA has emerged as another promising technique, as discussed by [48], where it improves forecast reliability by aggregating multiple predictive models. Hybrid Bayesian approaches, which integrate BNNs with Monte Carlo simulation and hierarchical frameworks, have further improved forecasting accuracy by capturing causal relationships and market uncertainties [49, 50].
7

[51] extends these methodologies by developing a Bayesian inference-based calibration framework for wholesale electricity price simulation, incorporating Bayesian Ridge Regression for extreme price spikes and Dual-head BNNs for more stable price periods. While Bayesian methods have been extensively studied in the DAM, their application in the IDM remains limited. [52] introduces a Bayesian framework for IDM price forecasting using multivariate skew t-distributions, effectively capturing key time -
series features such as skewness and heavy tails. In a separate study, [53] develops a Bayesian multi-equation regression model for IDM electricity load forecasting in New South Wales, employing Bayesian model selection and MCMC sampling to enhance predictive distributions and better quantify short-term uncertainty. More recently, [54] proposes a deep distributional time series model for probabilistic IDM forecasting in the Australian market, leveraging Bayesian Echo State Networks and Gaussian co-
pula processes to improve uncertainty quantification and tail risk estimation. [55] provides a comprehensive survey of deep Bayesian forecasting models, demonstrating improved calibration and sharpness in probabilistic predictions through the integration of epistemic and aleatoric uncertainty estimation. These studies suggest that Bayesian methods can be effectively adapted to the IDM, particularly for modelling price fluctuations in continuous trading environments. In contrast, Bayesian forecasti-
ng remains largely underexplored in the BM, with the only notable application by [56] demonstrating that while dynamic linear models did not consistently outperform GARCH variants at lower quantiles, their time-varying predictive densities showed superior average accuracy and stronger performance in capturing extreme values, highlighting Bayesian methods as a promising yet underutilised approach for robust PEPF in real-time markets. However, further research is needed to assess their computational-
 feasibility in real-time operations.
3.1.2. Distribution-Based Probabilistic Forecasts
Distribution-based probabilistic forecasting aims to model the full probability distribution of electricity prices. Formally, given historical observations D, distribution-based methods seek to estimate the conditional density function p(y |x), where y represents the electricity price and x denotes predictor variables. A common nonparametric approach is Kernel Density Estimation (KDE), which approximates the density as:
pˆ(y |x)= 1
Nh
N
X
t=1
K y−yt
h , (3)
where K(·) is a kernel function (e.g., Gaussian), and h is the bandwidth parameter controlling smoothness. Parametric methods, such as Generalized Additive Models for Location, Scale, and Shape (GAMLSS), estimate distribution parameters dynamically: yt ∼F (μt,σt,νt,τt), (4) where F represents a flexible parametric family (e.g., Gaussian, Beta, or Gamma), and μt,σt,νt,τt are time-varying parameters estimated using penalized likelihood methods. Recent advances integrate DL with distributional modell-
ing, leveraging QR with kernel smoothing, copula-based modelling, and Distributional DNNs (DDNNs) to generate predictive densities that adapt to market volatility. In the DAM, nonparametric and semi-parametric techniques have gained attention for their ability to model complex price distributions. [57] compares parametric and KDE-based models, finding that KDE produces smoother and more reliable probabilistic forecasts, particularly in capturing market fluctuations. Expanding on this, [58] introdu-
ces GAMLSS, dynamically modelling price distributions to generate
8

flexible and well-calibrated PIs. Beyond standard time series modelling, [4] extends the X-Model by incorporating supply and demand curves, simulating time-dependent distributions that capture extreme price events, offering improved risk assessment capabilities. [59] proposes a Nadaraya-Watson estimator, showing that its asymmetric predictive densities better capture price spikes than traditional models. Similarly, [60] applies KDE to estimate Beta PDFs, providing a comprehensive uncertainty prof-
ile for DAM prices. Further refining these techniques, [54] integrates echo state networks with Gaussian copula processes, generating well-calibrated probabilistic forecasts even in highly volatile price regimes. DL and hybrid models have further advanced distributionbased forecasting. [61] introduces DDNNs, modelling full electricity price distributions to improve risk assessment and forecasting accuracy. [62] combines QR and Long Short-Term Memory with KDE, effectively converting quantile foreca-
sts into full probabilistic distributions. Lastly, [63] employs Isotonic Distributional Regression as a postprocessing technique, refining probabilistic forecasts and outperforming traditional methods such as QRA and CP in volatile market conditions. Despite their extensive use in the DAM, distribution-based methods remain underexplored in the IDM, where capturing full price distributions is crucial for market participants navigating its higher volatility and continuous trading structure. [64] lev-
erages normalising flows to generate distributional forecasts for IDM prices, effectively modelling the price spread between DAM and IDM as a multivariate probability distribution. [54] extends their DAM work by applying deep distributional time series models in the Australian IDM, incorporating probabilistic demand predictions to improve upper-tail accuracy—an essential factor given the IDM’s heightened price fluctuations. Additionally, [65] explores a simulation-based probabilistic forecasting m-
odel, demonstrating that distribution-based forecasts substantially enhance tail risk estimation and volatility modelling, particularly in IDM settings where forecast updates, outages, and the merit-order effect drive price uncertainty. [66] unify marginal and multivariate dependency modelling in a single framework using a scoring rule-based generative approach to forecast full price paths in the German intraday market, evaluating both statistical accuracy and economic value in trading strategies.-
 Among all short-term electricity markets, the BM has received the least attention in the context of distribution-based forecasting. The only notable application is found in [67], where probabilistic forecasting methods, including GAMLSS and probabilistic neural networks (NNs), are applied to the German BM. While these models improve empirical coverage, the study finds that they do not significantly outperform simple intraday continuous price indices in predictive accuracy. This suggests that, whi-
le distribution-based models offer theoretical advantages in uncertainty quantification, their practical benefit in real-time markets remains uncertain, likely due to the BM’s extreme volatility and the difficulty of modelling rapid system imbalances.
3.1.3. Monte Carlo
Monte Carlo methods provide a powerful framework for probabilistic forecasting by simulating multiple possible future price trajectories. These methods approximate the probability distribution of electricity prices by generating a large number of random samples from an assumed or estimated stochastic process. Formally, given a probabilistic model for electricity prices yt conditioned on predictor variables xt, Monte Carlo methods approximate the expected forecast distribution by simulating M indep-
endent
9

realisations:
y(m)
t ∼p(yt |xt), m=1,...,M. (5) The empirical forecast distribution is then obtained as:
pˆ(yt |xt)= 1
M
M
X
m=1
δ(yt −y(m)
t ), (6)
where δ(·) denotes the Dirac delta function, representing the probability mass at each simulated outcome. Monte Carlo methods can be applied across various probabilistic models, including MCMC for Bayesian inference, Sequential Monte Carlo for real-time updates, and Monte Carlo Dropout in DL for uncertainty estimation. In the DAM, Monte Carlo methods are frequently integrated with time series and econometric models to improve probabilistic forecasts. [68] employs Monte Carlo simulations alongside -
ARMAX, GARCH, and Artificial Wavelet NNs, demonstrating that variance reduction techniques enhance forecasting accuracy. [69] extends this approach by incorporating Monte Carlo simulations into demand, fuel price, and renewable generation forecasting, generating multiple scenarios that refine medium-term price predictions. Similarly, [70] uses Monte Carlo-based risk factor simulations to construct a probabilistic risk profile for medium-term electricity prices, offering insights into uncertainty-d-
riven market fluctuations. Monte Carlo methods extend beyond traditional econometric models into machine learning (ML) and NNs, where they enhance demand forecasting reliability by adjusting weights through random sampling [71]. [72] utilises a mean-reverting Monte Carlo model to simulate price trends and spikes in Lithuania’s electricity market, effectively capturing short-term volatility. In hybrid modelling approaches, [73] combines Monte Carlo simulations with deterministic price models to gen-
erate multiple forecasted price paths, improving uncertainty management in short-term trading strategies. Monte Carlo methods optimize DAM bidding strategies by simulating multiple price trajectories, enabling market participants to refine decisions and develop risk-adjusted trading strategies under uncertainty [74]. In a related study, [75] applies Sequential MCMC techniques to forecast supply curves, enhancing adaptability to real-time price variations and improving volatility estimation. Meanwh-
ile, [49] integrates Bayesian networks with Monte Carlo simulation to capture interdependencies in electricity price distributions, demonstrating improved forecast reliability in volatile DAM conditions. [76] applies a Monte Carlo simulation framework to PEPF forecasting in Italy, demonstrating improved capture of extreme price fluctuations by incorporating stochastic renewables, demand uncertainty, and scenario-based system constraints. Despite their extensive use in DAM forecasting, Monte Carlo -
methods remain underdeveloped in real-time markets like the IDM, where dynamic probabilistic forecasting is crucial for capturing intraday fluctuations, with [52] being a notable example using MCMC for Bayesian density forecasting of IDM prices. MCMC-based inference effectively captures key time series properties like serial correlation, skewness, and heavy tails, improving probabilistic density estimation, but its 30-day testing period leaves its long-term IDM applicability uncertain, whereas the-
 BM has seen more direct Monte Carlo applications due to its extreme volatility and need for scenario-based forecasting. [77] uses Monte Carlo simulations to generate scenario trees that capture BM volatility and DAM price deviations, enhancing decision-support tools and helping market participants anticipate imbalance price fluctuations. More recently, [78] applies Monte Carlo Tree Search to BM EPF, achieving a 20.4% accuracy improvement under ideal conditions and 12.8% in realistic settings by i-
ncorporating system dynamics and implicit
10

demand responses, highlighting the potential of Monte Carlo methods when integrated with optimization-based approaches. Monte Carlo simulations effectively model uncertainty in the DAM for bidding and risk management but remain underexplored in real-time markets. While MCMC shows promise in the IDM, limited testing calls for further validation, whereas the BM has seen greater adoption in scenario-based forecasting and market optimisation.
3.2. Non-Parametric Methods
Non-parametric methods do not assume a specific distribution for the data. These methods, like bootstrap and historical simulation, provide flexibility and robustness in environments where data characteristics are unknown or complex. An outline of the methods can be seen in Figure 4.
Non-Parametric Methods
Bootstrap Historical Simulation
Empirical Intervals Residual Scenarios
Applications in Optimisation - Empirical risk calibration - Robust hedging & stress testing - Intraday bidding & adjustments - Fast benchmarking & validation
Figure 4: Non-parametric probabilistic forecasting methods: Bootstrap and Historical Simulation.
3.2.1. Bootstrap
Bootstrap methods provide a nonparametric approach to probabilistic forecasting by resampling observed data to approximate the sampling distribution of electricity price forecasts. Unlike traditional parametric models, bootstrap techniques require no explicit distributional assumptions, making them well-suited for capturing forecast uncertainty in volatile electricity markets. Given a historical dataset D, bootstrap methods generate probabilistic forecasts by drawing B bootstrap samples D(b), wher-
e each sample is obtained by resampling with replacement from D. For each bootstrap sample, a predictive model is trained, producing a set of forecasts {yˆ(b)
t }B
b=1. The final
predictive density is then estimated as:
pˆ(yt |xt)= 1
B
B
X
b=1
δ(yt −yˆ(b)
t ), (7)
where δ(·) represents the Dirac delta function, placing probability mass at each bootstrapped prediction. Variants of the bootstrap, such as residual-based bootstrapping, apply resampling to forecast residuals to improve PIs, while bagging reduces variance
11

in ensemble models by averaging multiple bootstrap-based forecasts. Bayesian bootstrap extends this approach by assigning random weights to resampled observations, improving robustness in Bayesian probabilistic forecasting. In the DAM, bootstrap techniques have been integrated into both traditional statistical models and ML frameworks to improve PEPF accuracy. [79] introduces bias-corrected bootstrap methods for AR models, effectively addressing small-sample biases and refining forecast PIs. Simi-
larly, [80] applies a bootstrap approach to seasonal dynamic factor models, demonstrating improved probabilistic forecasting in electricity markets by resampling residuals. ML-based approaches have further extended the use of bootstrap methods, particularly in hybrid and ensemble models. Bootstrapintegrated Extreme Learning Machines (ELM) have been widely applied to DAM EPF, with [81] and [82] showing significant improvements in both point forecasts and PIs in the Australian market. More recently,-
 [83] demonstrates the effectiveness of bootstrap-ELM in capturing both normal and extreme price fluctuations in the German and Finnish markets. Other NN-based approaches have also benefited from bootstrap enhancements, such as [84], which constructs PIs in NNs using bootstrap resampling. While this method produces narrower, more informative intervals, it occasionally underperforms in highly volatile conditions due to underestimated uncertainty. Beyond NNs, residual-based bootstrapping improves PE-
PF accuracy by resampling forecast residuals, with [85] demonstrating its superiority over traditional confidence interval methods in providing more reliable uncertainty quantification. Bayesian adaptations of bootstrap methods have also been explored, with [47] applying Bayesian bootstrap QR to improve probabilistic photovoltaic power forecasts, improving quantile estimation through resampled data. Bootstrap Aggregation (Bagging) enhances DAM EPF by reducing forecast variance and capturing non-li-
near dependencies, with [86] showing its consistent performance improvement over NNs and statistical models in the Italian market, while [48] demonstrates its role in stabilizing ensemble models for EPF applications. A comparative analysis by [87] evaluates bootstrap methods against QR, concluding that while both effectively capture non-linear dependencies, QR provides sharper PIs, suggesting that bootstrap methods may be better suited for capturing broader market uncertainties rather than fine-tu-
ning interval sharpness. Although bootstrap applications in the IDM are scarce, studies suggest they balance computational efficiency with forecasting accuracy in continuous trading, as [74] demonstrates by using bootstrapped errors to simulate price trajectories in electricity auctions across DAM and IDM, leading to improved profits in both markets. In a related study, [88] applies a bootstrap-based approach to construct prediction bands for intraday electricity price path forecasts, demonstratin-
g that bootstrap methods offer a practical tradeoff between accuracy and computational cost, making them well-suited for dynamic intraday forecasting where rapid price fluctuations demand adaptive probabilistic modelling. In the BM, bootstrap methods have been explored to a lesser extent, but they show promise in improving forecast stability under extreme market conditions, as [89] demonstrates by employing bootstrap in a hybrid ensemble framework to generate probabilistic forecasts for both DAM a-
nd BM, improving prediction stability in highly volatile trading periods. Similarly, [67] utilises bootstrap to generate probabilistic forecasts for German BM prices, showing that resampling techniques enhance empirical coverage under market uncertainty. Given the BM’s highly stochastic nature, the effectiveness of bootstrap methods in real-time imbalance price forecasting remains uncertain, as their computational feasibility may be challenged by the rapid adjustments required in balancing
12

markets. However, bootstrap methods have proven effective in the DAM by enhancing probabilistic accuracy and forecast reliability, are emerging in the IDM for constructing adaptive PIs, and show potential in the BM for improving empirical coverage, though further research is needed to assess their ability to handle extreme real-time price volatility.
3.2.2. Historical Simulation
Historical simulation is a direct method of constructing probabilistic forecasts. It takes different names in the literature and is sometimes referred to as an empirical error distribution approach. This method explores both point forecasts and forecast errors. It is constructed as follows:
P I1−α
hist =
hPˆd+1,h +γα/2,Pˆd+1,h +γ1−α/2
i
, (8)
where 1−α is the PI’s nominal coverage level. The variables γα/2 and γ1−α/2 represent the (α/2)-quantile and the (1−α/2)-quantile of εˆd,h, respectively. In the DAM, historical simulation has been used to generate probabilistic forecasts by leveraging past forecast errors to estimate empirical PIs. [57] applies this method to spot electricity prices, demonstrating that sample quantiles derived from one-step-ahead prediction errors effectively capture price uncertainty without relying on parametric-
 assumptions. Building on this, [36] employs historical simulation in combination with Autoregressive with Exogenous Features (ARX) and Semi-Nonparametric ARX (SNARX) residuals, showing that this approach is particularly effective in volatile market conditions where model-driven approaches may struggle. Further emphasising its practical advantages, [85] compares historical simulation with bootstrapping and finds that it achieves similar forecasting performance while offering a simpler and more com-
putationally efficient alternative. The robustness of historical simulation in capturing volatility and price spikes is also highlighted by [90], who demonstrates its effectiveness in modelling extreme price movements without requiring parametric distributions. While historical simulation has been widely explored in the DAM, its application in the IDM has also shown promise, particularly in modelling intraday price volatility. [91] and [92] apply historical simulation for DAM and IDM price forecas-
ting, with the former leveraging residual-based methods to enhance accuracy, while the latter shows it captures past volatility but underestimates uncertainty, particularly in the IDM with its erratic price dynamics. Further expanding on its multidimensional capabilities, [93] employs historical simulation in a multiple-output forecasting framework, constructing PIs by incorporating historical forecast errors into point forecasts. [94] develops a multivariate simulation-based forecasting framework-
 for the German IDM, integrating copula-based models to capture cross-product price dependencies, demonstrating that historical simulation can improve PEPF accuracy in high-volatility trading environments where electricity contract dependencies influence price formation. Despite its success in DAM and IDM, historical simulation remains unexplored in the BM, where its empirical approach to constructing PIs could offer a viable alternative to parametric methods, though its ability to capture rapid p-
rice fluctuations and BM settlement dynamics in a highly volatile, real-time environment remains uncertain.
3.3. Regression-Based Approaches
Quantile-based techniques, such as quantile regression and its extensions, focus on predicting the conditional quantiles of electricity prices, offering a straightforward way to estimate the uncertainty without relying on strong distributional assumptions. An outline of the methods can be seen in Figure 5.
13

Regression-Based Approaches
Quantile Regression (QR) Quantile Regression Averaging (QRA)
DL-Integrated QR
Adaptive / Non-Crossing QR
Ensemble Conformalised QR
Factor QRA
Lasso-Regularised QRA
Smoothing QRA
Hybrid QRA
Prediction Intervals
Aggregated Quantiles
Applications in Optimisation - Tail-risk trading & arbitrage - Portfolio & asset optimisation - Multi-market bidding strategies - Renewable & market design analysis
Figure 5: Regression-based approaches: Quantile Regression (QR) and Quantile Regression Averaging (QRA).
3.3.1. Quantile Regression (QR)
QR, introduced by [35], extends ordinary least squares by estimating conditional quantiles of the response variable, offering insights into uncertainty across different distribution points. Unlike traditional methods focused on the mean, QR models various parts of the distribution, making it particularly useful in capturing the impact of predictors on extreme price values, such as electricity price spikes during peak demand. Given a linear model:
yt =x⊤
t β+εt, (9) where yt is the dependent variable, xt are predictors, and εt is the error term, QR aims to estimate the conditional quantile function yˆtα, which represents the value below which a certain percentage α of yt falls, given xt. The QR estimator is obtained by solving:
βˆα =argmβin
N
X
t=1
ρα(yt −x⊤
t β), (10)
where ρα(u) is the check function defined as:
ρα(u) =
(
αu, if u≥0,
(α−1)u, if u<0. (11)
QR’s asymmetric penalty allows it to estimate different quantiles, providing flexibility in capturing price variability, especially during market extremes. The estimator is
14

consistent and asymptotically normal, with its covariance matrix Σα given by:
Σα =α(1−α) fyt|xt(qˆα
t )2·(X′X)−1 , (12) where fyt|xt(qˆtα) is the conditional density, and (X′X)−1 represents the design matrix inverse. In the DAM, QR has been used to enhance PEPF accuracy, particularly in modelling tail risks and non-linear price dependencies, with [95] introducing a time-adaptive QR approach that improves tail prediction by fitting exponential distributions, outperforming models like GARCH in capturing extreme price variations. Similarly, [96] applies QR to both price and demand forecasting, demo-
nstrating that the impact of market drivers varies across quantiles, reinforcing the complexity of electricity price dynamics. The effectiveness of QR in conditional price distribution modelling is further validated by [36], who finds that while QR provides informative PIs, its performance is generally enhanced when combined with model averaging techniques such as QRA. This is particularly evident in [70], where QR is integrated with a fundamental market equilibrium model for medium-term DAM price-
 forecasting in Spain, with the results showing that QR-based hybrid models improve risk estimation, particularly for extreme price variations influenced by high wind penetration. Beyond its role in probabilistic forecasting, QR has been widely used to analyse the sensitivity of electricity prices to market fundamentals, with [97] and [98] applying QR to UK electricity prices to quantify how factors such as gas and coal prices impact different quantiles, providing valuable insights for risk manage-
ment. Similarly, [99] examines the effect of renewable energy integration on German DAM prices, demonstrating how wind and solar generation influence both price levels and variability across different quantiles. More recently, DL frameworks have been integrated with QR to refine probabilistic forecasting accuracy, with [100] employing QR alongside a ResNet model to generate asymmetrical PIs that improve performance during price spikes. In a related study, [101] introduces Ensemble Conformalised QR-
, combining QR with CP to enhance forecast sharpness and reliability, particularly in volatile market conditions. Further methodological advancements include [102], who integrates QR with LSTNet and SHAP feature selection, refining probabilistic distributions using KDE, and [87], who applies QR to capture non-linear relationships in price forecasting, improving interval sharpness without imposing restrictive distributional assumptions. QR has also been utilised in wholesale market design, with [10-
3] demonstrating its effectiveness in modelling price uncertainty in pay-as-bid markets, where regional and climatic variations influence clearing prices. The application of QR in hybrid DL frameworks has further improved forecast efficiency, as seen in [62], where QR is combined with QR-LSTM and multi-objective tuna swarm optimisation to refine quantile forecasts under dynamic market conditions. In the UK market [104] develops a generalisable QR-based framework, demonstrating stable PEPF and low -
pinball loss even under operational constraints that exclude previous-day price. [105] develop an outlier-adaptive non-crossing QR model that integrates variational mode decomposition and conformal symmetry to enhance reliability, sharpness, and robustness of probabilistic forecasts under price spike conditions. While QR has been extensively applied in DAM PEPF, its use in real-time electricity markets remains less developed, with the IDM seeing one and the BM seeing several notable applications, -
particularly in hybrid forecasting and trading strategy optimization. In the IDM [106] propose a DL framework that processes raw order-book data and ensures quantile monotonicity via a hierarchical quantile head, outperforming traditional feature-based QR methods in intraday markets.
15

In the BM we see more, albeit concentrated applications. [93] enhances QR for PEPF in both DAM and BM by integrating it with multiple split CP, generating robust probabilistic forecasts that adapt to market uncertainties. The comparative study by [107] further evaluates QR’s performance relative to CP in the DAM, showing that while QR provides sharper forecasts, it struggles to maintain high empirical coverage, whereas CP ensures greater reliability. Extending this analysis, [108] explores QR’s r-
ole in hybrid ensembles for BM forecasting, finding that although QR effectively narrows interval width within CP-based approaches, it continues to face challenges in maintaining validity. A more applied perspective is offered by [109], which optimises quantile forecasts for use in heuristic and mixed-integer linear programming trading strategies for electricity arbitrage in DAM and BM, demonstrating the economic viability of battery energy storage systems when using quantile-based forecasts for m-
arket participation. Despite its strong presence in the DAM and emerging use in the BM, QR has yet to be extensively applied to the IDM, presenting a significant research gap. Given the IDM’s continuous trading structure, QR could offer valuable insights into price dynamics, particularly for modelling conditional price distributions and spreads relative to DAM prices. Its absence in IDM research highlights an important avenue for future exploration, especially in adaptive quantile-based methods fo-
r real-time forecasting.
3.3.2. Quantile Regression Averaging (QRA)
QRA, introduced by [36], utilises the combined outputs from M point forecasting
models, [f1(xt),f2(xt),...,fM (xt)], applying QR to to estimate quantiles qˆtα and qˆ1−α
t, defining the lower and upper bounds of the expected price distribution. By leveraging the entire set of model outputs, QRA is capable of capturing the impact of predictors across different regions of the price distribution. This method captures both central tendencies and tail behaviours, allowing it to adapt to market fluctuations and provide robust forecasts. The predictors xt can also include explanatory variables beyond point forecasts from these individual models. As such, QRA has gained p-
rominence in PEPF literature due to its ability to generate both accurate and more reliable PIs. In the DAM, QRA has been extensively applied to improve PEPF accuracy by aggregating point forecasts from diverse models. [36] first introduces QRA for PEPF, demonstrating that it consistently outperforms individual models by effectively capturing conditional price distributions. Building on this, [110] develops Factor QRA (FQRA), which reduces model complexity through principal component analysis whil-
e maintaining high forecasting accuracy. The effectiveness of QRA in volatile market conditions is further validated by [85], who finds that QRA outperforms traditional probabilistic forecasting methods by combining QRs from multiple base models. A comparative study by [111] evaluates QRA against QR Machine (QRM), showing that while QRM is computationally efficient, QRA provides more robust and reliable PIs, particularly under high market uncertainty. Several refinements have been introduced to im-
prove QRA’s forecasting performance. [91] highlights QRA’s ability to transform point forecasts into full probabilistic distributions, outperforming simpler methods such as historical simulation. The integration of DL models with QRA has further improved PI sharpness. [100] compares QRA against Residual NNs (ResNet-QR), noting that while QRA is effective, ResNetQR produces narrower PIs with higher empirical coverage. Regularization techniques have also been incorporated to refine QRA models. [112]-
 introduces Lasso-Regularized QRA (LQRA), demonstrating that penalizing irrelevant predictors reduces overfitting and improves forecast accuracy. [113] demonstrates QRA’s robustness in capturing
16

uncertainty and volatility in electricity markets, consistently providing accurate PIs. Similarly, [114] and [115] explore LQRA and Factor QRA, showing that they enhance probabilistic forecasts by improving predictor selection and capturing latent market factors. More recently, [116] introduces Smoothing QRA (SQRA) to address limitations in traditional QRA, improving both sharpness and reliability of probabilistic forecasts. In the German DAM [117] benchmarks QRA with multiple variants, finding t-
hat while QRA provides competitive sharpness, it underperforms isotonic QRA and LQRA in both efficiency and validity metrics, with poor tail balance at high confidence levels. While QRA has been widely adopted in the DAM, its presence in the IDM remains limited, with a few studies integrating it into hybrid forecasting approaches, such as [118], which combines QRA with CP to capture price variability while improving validity and empirical coverage. Similarly, [92] applies a hybrid Factor-QRA metho-
d for PEPF in both DAM and IDM, demonstrating improved forecast reliability in high-volatility trading environments, suggesting that while QRA can be adapted to continuous trading markets, further research is needed to assess its real-time forecasting accuracy. In the BM, QRA’s performance has been variable, with some studies highlighting its potential for improving probabilistic trading strategies, while others suggest that CP-based approaches provide superior performance in regards to validity. -
[119] applies QRA to optimize short-term trading strategies across the DAM, IDM, and BM, finding that QRA-based probabilistic forecasts improve decision-making by balancing risk and profitability in multi-market trading. However, [108] compares QRA with CP for PEPF in DAM and BM, showing that while QRA produces sharper forecasts, CP-based methods consistently outperform it in terms of probabilistic coverage and financial gains. Similarly, [120] applies QRA for probabilistic forecasting in the Aust-
ralian National Electricity Market, showing that ensemble QRA models outperform individual models, especially when combined with post-processing techniques like spike filtration and autoregression. While QRA remains a strong baseline for BM forecasting, its effectiveness depends on market volatility and may require calibration to improve empirical coverage. Hybrid approaches have extended QRA’s capabilities in EPF, as [61] demonstrates that integrating QRA with ensemble learning techniques, includ-
ing LASSO and DNNs, enhances probabilistic forecasts, though DDNNs outperform QRA when more flexible probabilistic distributions are needed. Similarly, [121] explores the integration of QRA with Quantile Random Forests (QRF) and Conformalised Quantile Estimators, showing that hybrid models improve PIs, particularly in volatile markets. [90] compares QRA with Expectile Regression Averaging, finding both methods improve forecast accuracy, with QRA offering robust probabilistic forecasts. More broadl-
y, [113] and [63] reaffirm QRA’s robustness in capturing uncertainty, particularly in ensemble forecasting frameworks. Further methodological enhancements have been explored in [122] and [123], who introduce nonconvex regularization techniques and dimensionality reduction methods to optimize QRA’s input selection and computational efficiency. [107] compare QRA with CP for DAM PEPF, showing that while QRA provides reliable PI, CP techniques such as EnbPI and SPCI outperform QRA in terms of financia-
l gains and coverage reliability in trading applications. Recent benchmarking studies, such as [124], compare QRA with DDNNs, finding that while QRA remains a strong baseline, DL models with conformalised recalibration achieve superior coverage reliability and sharper PIs. The economic implications of QRA are further examined in [125], who apply QRA to DAM prices in the Czech market, demonstrating that smoothing the QRA objective function enhances forecast reliability while incorporating Lasso pen-
alties improves input selection.
17

Having consistently outperformed individual models in DAM forecasting, QRA has evolved through factor-based variants, regularisation techniques, and integration with DL. However, its weaker empirical coverage in IDM and BM highlights the need for further refinement, particularly through hybrid and adaptive learning approaches, to enhance its real-time forecasting performance in more volatile, high-frequency markets.
3.4. Conformal Prediction Methods
CP offers a distribution-free framework for uncertainty quantification, providing a compelling alternative to QR and QRA. Originally introduced by [6] and later extended by [7] and [126], CP constructs PIs with valid coverage guarantees, regardless of the underlying data distribution. An outline of the methods can be seen in Figure 6. At the core of CP is the concept of a nonconformity measure, which quantifies how unusual or atypical a new data point (xt,yt) appears in relation to a dataset Z. Fo-
r regression tasks, a common nonconformity score is the absolute prediction error A(xt,yt)=|yt−f(xt)|, where f(xt) is the predicted value. The nonconformity score measures how far the predicted value deviates from the true value. Other measures may be used depending on the specific model or application. After computing nonconformity scores for all examples in Z, CP constructs a PI for a new observation xnew. For a candidate label ynew, the corresponding p-value is calculated as:
p(ynew)= |{(xt,yt)∈Z :A(xt,yt)≥A(xnew,ynew)}|+1
N +1 . (13)
This p-value reflects the proportion of past nonconformity scores that are greater or equal to the score for ynew. The PI for xnew is constructed by including all candidate labels ynew whose p-values exceed a predefined significance level α:
Γ1−2α(xnew)={ynew :p(ynew)>α}. (14) CP provides a rigorous validity guarantee, ensuring that with probability at least 1−2α, the true response ynew will lie within the PI, Γ1−2α(xt). This validity property holds regardless of the underlying data distribution, making CP effective when the distribution is unknown or difficult to model. The PI width is determined by the quantile λt of the nonconformity scores where λt =Quantileα(A1,A2,...,AN ), for the α quantile level, with λt corresponding to the (-
1−α)(N +1)-th smallest nonconformity score in the sorted list. In the DAM, CP has been leveraged to refine probabilistic forecasts by ensuring reliable uncertainty quantification across different price conditions. [127] extends the CP framework by introducing Weighted CP (WCP), which accounts for covariate shifts and ensures that PIs remain valid even under changing market distributions. Applying CP to electricity price forecasting, [128] demonstrates that seasonally adjusted price data significan-
tly enhances the sharpness and reliability of PIs in the Nord Pool DAM, particularly in markets characterized by lower variance and fewer extreme price events. The flexibility of CP in transforming point forecasts into probabilistic predictions is further emphasized by [129], who highlights its model-agnostic nature and ability to adapt to a wide range of forecasting methodologies. The integration of CP with other probabilistic forecasting techniques has further improved its forecasting performanc-
e. [101] combines CP with QR in Ensemble Conformalized QR (EnCQR), demonstrating that this hybrid approach enhances the sharpness of PIs while maintaining empirical validity. Similarly, [130] develops a general CP-based forecasting framework, incorporating methods such as split-CP and Conformalized QR (CQR) to dynamically adjust PIs for time series forecasting. DL-based approaches have also benefited from CP-based recalibration. [131] integrates CP with generative transformer models, producing rel-
iable and narrow
18

PIs for wind power forecasting—an approach that could be extended to electricity price forecasting in renewable-dominated markets. The postprocessing capabilities of CP have also been explored in [63], who apply CP Averaging (CPA) to DAM prices, demonstrating its ability to adaptively refine PIs and improve forecast reliability. Furthermore, [124] enhances CP by incorporating neural network ensembles and CQR, showing that these refinements significantly improve the robustness of PIs in volatile e-
lectricity markets. In the German market [117] benchmarks CP against several postprocessing methods, finding that while CP offers strong coverage, it underperforms isotonic QRA and LQRA in sharpness and tail balance, especially at lower confidence levels. While CP has been widely applied in the DAM, its role in real-time electricity markets is still emerging. In the IDM, [92] applies CP to the German EPEX DAM and IDM, demonstrating that it consistently produces reliable PIs that maintain empirical-
 coverage close to nominal levels. Their results show that CP-based forecasts frequently pass the Christoffersen test for conditional coverage, indicating that CP effectively captures price uncertainty in high-frequency intraday markets, though further work is needed to improve performance under extreme price swings. In the BM, CP remains underexplored, but [132] show it can effectively quantify uncertainty and improve risk-adjusted returns for energy storage arbitrage in the New York real-time ma-
rket, highlighting its potential for enhancing decision-making under extreme price volatility, though further work is needed to assess its integration with real-time signals and computational demands. Overall, CP has proven to be a robust probabilistic forecasting tool, offering guaranteed empirical coverage and adaptability across model types. While its effectiveness in the DAM is well established, its application in the IDM and BM remains limited, highlighting important opportunities for future -
research in real-time and high-frequency market settings.
Conformal Prediction Methods
Exchangeability Time-Series Adapted
Full CP SCP EnbPI SPCI
Prediction Intervals
Adaptive PIs
EnsembleCalibrated PIs
Dynamic/ Recalibrated PIs
Applications in Optimisation - Real-time trading & balancing - Storage & flexibility scheduling - Risk-aware bidding & hedging - Regulatory compliance via validity guarantees
Figure 6: Conformal Prediction methods: Full Conformal Prediction (Full CP), Split Conformal Prediction (SCP), Ensemble Batch Predictive Interval (EnbPI), and Sequential Predictive Conformal Inference (SPCI).
19

3.4.1. Split Conformal Prediction (SCP)
SCP is an inductive variant of CP that improves computational efficiency by dividing the dataset Z into a training set of size ntrain and a calibration set of size ncal, where N =ntrain+ncal. By restricting nonconformity score calculations to the calibration set, SCP reduces the need to recalculate scores across the entire dataset, significantly cutting computational time and making it ideal for larger datasets. First, a model is trained on the training set to estimate the conditional expectation -
f(xt). Nonconformity scores for the calibration set are then computed using the defined nonconformity score A(xt,yt)=|yt−f(xt)|. To construct PIs for a new input xnew, SCP selects λt corresponding to the (1−α)(N +1)-th smallest nonconformity score computed from the calibration set, such that the PI for a new input xt is given by:
Γ1−2α(xt)=[f(xt)−λt,f(xt)+λt] (15) providing a probabilistic guarantee that yt lies within this range with a confidence level of 1−2α, assuming data exchangeability. In cases where the exchangeability assumption is violated, such as in time-series data like electricity prices, adaptations EnbPI and SPCI can better handle temporal dependencies. In the DAM, SCP has been widely applied to enhance PEPF by constructing valid and adaptive PIs. Early studies, such as [118], apply SCP to DAM and IDM marke-
ts, demonstrating that SCP produces valid and sharp PIs, particularly in volatile trading conditions. However, the effectiveness of SCP depends on data partitioning strategies, with methods like One-Split SCP providing dynamically adjusted PIs for non-stationary electricity prices [133]. Recent advancements have focused on hybrid SCP approaches—for instance, [134] combines SCP with QR in a Temporal Convolutional Network framework for wind power forecasting, ensuring that PIs meet coverage requirem-
ents over time. Similarly, [121] introduces one split SCQR, a method integrating SCP with CQR, improving SCP’s adaptability in time-series forecasting. Beyond QR-based integrations, SCP has also been extended through ensemble and multidimensional approaches, with [93] developing Multiple-Split SCP to construct multidimensional PIs that enhance uncertainty quantification by leveraging multiple calibration sets. SCP has also been applied in distribution-based methods, with [135] introducing Split Co-
nformal Distribution Regression Forests to refine SCP’s efficiency in probabilistic forecasting. While SCP has been successfully implemented in PEPF for DAM, its performance relative to other CP methods remains mixed, as [107] demonstrates in the Irish DAM, showing that although SCP ensures valid coverage, it is outperformed by EnbPI and SPCI in sharpness and financial trading performance. Extending this analysis, [108] evaluates SCP in both DAM and BM, finding that while SCP maintains strong cove-
rage, it struggles in the highly volatile BM, where EnbPI and SPCI provide narrower PIs and hold superior financial performance due to their ability to overcome SCP’s reliance on exchangeability assumptions. Despite SCP’s success in the DAM, and to a lesser extent in the BM, it remains unexplored in the IDM, where continuous trading structures pose additional challenges. Its limited use in PEPF highlights the need for further refinements to improve its applicability in real-time and intraday setti-
ngs, particularly by addressing violations of the exchangeability assumption.
3.4.2. Ensemble Batch Predictive Interval (EnbPI)
EnbPI, introduced by [8], builds on the CP framework, providing PIs with finitesample coverage guarantees. Unlike traditional CP methods, EnbPI leverages ensemble
20

learning and bootstrap sampling to generate reliable PIs without the need for separate calibration sets, making it particularly effective in time-series forecasting applications with complex dependencies. Utilising the dataset Z, EnbPI generates B bootstrap samples Z(b), where each sample trains a predictive model f(b)(xt), resulting in multiple separate models {f(1)(xt),f(2)(xt),...,f(B)(xt)}, with residuals calculated as e(b)
t =|yt− f(b)(xt)|. Thus the interval λ(b)
t from these residuals, λ(b)
t =Quantileα(e(b)
1 ,e(b)
2 ,...,e(b)
N ), together with the average of the ensemble predictions f(b)(xt), forms the PI:
Γ1−2α(xt) =
"
1 B
B
X
b=1
f(b)(xt)− 1
B
B
X
b=1
λ(b)
t ,1
B
B
X
b=1
f(b)(xt)+ 1
B
B
X
b=1
λ(b)
t
#
, (16)
This construction allows EnbPI to offer valid coverage without retraining models, and by leveraging leave-one-out residuals, ensuring minimal computational. EnbPI has been widely adopted in PEPF due to its ability to generate reliable PIs without making strong distributional assumptions. [101] applies EnbPI as a CP method that leverages ensemble learning to improve forecast validity while dynamically adapting to market conditions. Expanding on this, [136] applies EnbPI to PEPF, demonstrating that -
its block bootstrap resampling enhances coverage stability by recalibrating PIs based on recent data, effectively capturing seasonality and trends. The methodological flexibility of EnbPI is further highlighted by [130], who incorporates EnbPI into the MAPIE library, emphasising its ability to maintain valid coverage in non-exchangeable time-series data. In market-specific applications, [137] evaluates EnbPI in the Mexican wholesale electricity market, showing that bootstrap-based ensemble estimat-
ors effectively capture price volatility and achieve the target 95% coverage level. Within European electricity markets, [107] applies EnbPI to the Irish DAM, demonstrating that it outperforms traditional QR and SCP methods by producing narrower PIs while maintaining consistent coverage. Extending this analysis, [108] evaluates EnbPI in the Irish BM, where its maintains valid PIs while delivers stronger financial performance in ensemble-based approaches compared to standalone QR or SPCI models. De-
spite its strengths, EnbPI’s reliance on bootstrap resampling can introduce notable computational overhead. Its effectiveness in high-frequency trading environments such as the IDM and BM also remains underexplored, highlighting important directions for future research.
3.4.3. Sequential Predictive Conformal Inference (SPCI)
SPCI, introduced by [9], improves on EnbPI by dynamically adjusting PIs to accommodate new observations in time-series data. SPCI uses a sequential updating mechanism that adapts to evolving data distributions, ensuring reliable uncertainty quantification even in non-stationary environments like EPF. Unlike static CP approaches, which recalibrate PIs using a fixed set of past data, SPCI updates non-conformity scores in realtime, leveraging the information from new residuals. For each new observati-
on (xt,yt), SPCI adjusts the PIs based on the residuals εt. This feedback loop enables SPCI to refine its predictions continuously, ensuring that the intervals remain accurate and informative. SPCI provides theoretical guarantees of asymptotic conditional coverage, ensuring that the probability of the true value yt+1 lying within the constructed interval converges to the desired confidence level 1−α over time, such that:
tli→m∞P(yt+1 ∈Γ1−α(xt+1)|Xt)≥1−2α, (17)
where Xt represents all information available up to time t.
21

The construction of the PI for a new input xt is given by:
Γ1−2α(xt)=[f(xt)−λt,f(xt)+λt], (18) where λt is the quantile of the residuals up to time t. By using a sliding window of recent residuals and modelling their quantiles through QR Forests, SPCI efficiently captures changes in data, advancing time-series forecasting with theoretical coverage guarantees and producing narrower, more responsive PIs for reliable uncertainty quantification. SPCI has emerged as a powerful extension of CP, offering dynamically recalibrated PIs that adapt to evolving market-
 conditions. [138] introduces MultiDimSPCI, extending SPCI to multivariate time series forecasting by constructing ellipsoidal prediction regions, ensuring valid coverage in high-dimensional, non-exchangeable settings. Further advancing its adaptability, [139] enhances SPCI with Conformal PID Control, enabling the method to adjust PIs in response to distribution shifts and long-term trends, thereby improving robustness in dynamic environments. Building on these refinements, [140] presents SPCI-T, -
integrating the Transformer decoder to capture long-range dependencies, significantly improving both interval accuracy and coverage, particularly in non-stationary and multi-step forecasting scenarios. In PEPF, [107] applies SPCI to the Irish DAM, demonstrating that it outperforms QR and SCP by offering superior empirical coverage and sharper PIs while effectively quantifying market uncertainty. In the BM we see one notable application from [108] who benchmarks SPCI in the Irish BM, showing that i-
t achieves narrower PIs with valid coverage more consistently than SCP and EnbPI. Its adaptive recalibration mechanism enhances reliability in non-stationary market conditions, leading to improved financial performance in trading strategies. Notably, when integrated into an ensemble with QR and EnbPI, SPCI provides the strongest financial returns, balancing interval efficiency with robust uncertainty quantification. Despite these advantages, much like CP, SCP, and EnbPI, further research is needed-
 to assess its applicability in IDM settings, where its ability to adapt to continuous trading environments again remains unexplored.
4. Discussion
The following section delves into key trends in the PEPF literature by systematically examining methodological preferences, market coverage, and empirical performance. Drawing on the studies discussed in 3 and outlined in Tables 2 & 3, we identify shifts in forecasting paradigms, including the growing adoption of CP, the continued use of quantile-based approaches, and the gradual decline of more traditional techniques such as Bayesian inference and Monte Carlo simulation. Particular attention is p-
aid to under-represented markets, namely the IDM and BM, and to emerging hybrid and ensemble frameworks that offer new avenues for handling forecast uncertainty in real time. This discussion also incorporates cross-market comparisons, validity-efficiency trade-offs, and implications for practical deployment, culminating in a set of targeted research directions for advancing the field.
4.1. Overview
Table 2 presents a structured overview of the literature on PEPF, categorising studies by forecasting methodology and market focus. It highlights the widespread use of key approaches such as QR, QRA, CP, and Bayesian methods, and their deployment
22

across electricity markets including the DAM, IDM, and RT/BM. The timeline of included studies reveals notable shifts in research priorities, particularly the growing adoption of CP in recent years. In Table 2 we see clear trends in methodological preferences and market coverage over time. Earlier studies, pre-2020, frequently relied on Bayesian inference and MC simulation, which were well-suited for capturing uncertainty distributions and scenario analysis. However, these methods have seen a mar-
ked decline, supplanted by more flexible, data-driven alternatives such as ensemble models, DL, and frequentist techniques like CP. Bootstrap and DB methods also appear in the literature but are largely confined to specialised use cases rather than serving as dominant forecasting tools. HS remains the least common, likely due to its reliance on static empirical distributions and poor adaptability to real-time changes. Since GEFCom2014, quantile-based models, particularly QR and QRA, have emerged a-
s leading approaches, with QRA now widely favoured for its ability to aggregate diverse model outputs and deliver more robust probabilistic forecasts.
Reference QR QRA CP BY BS DB MC HS DAM IDM RT
Panagiotelis et al. 2008 [52] ✓ ✓ ✓ Weron et al. 2008 [57] ✓ ✓ ✓ Janczura et al. 2010 [141] ✓ ✓ Vahidinasab et al. 2010 [37] ✓ ✓ ✓ Wu et al. 2010 [68] ✓ ✓ Brolin et al. 2010 [77] ✓ ✓ Serinaldi et al. 2011 [58] ✓ ✓ Alonso et al. 2011 [80] ✓ ✓ ✓ Chen et al. 2012 [81] ✓ ✓ Wan et al. 2013 [82] ✓ ✓ Khosravi et al. 2013 [84] ✓ ✓ Jonsson et al. 2014 [95] ✓ ✓ ✓ Nowotarski et al. 2015 [36] ✓ ✓ ✓ ✓ Do et al. 2015 [96] ✓ ✓ Maciejowska et al. 2016 [110] ✓ ✓ Hagfors et al. 2016 [97] ✓ ✓ Dudek et al. 2016 [142]-
 ✓ ✓ Bello et al. 2016 [70] ✓ ✓ ✓ Bello et al. 2016 [69] ✓ ✓ Tahmasebifar et al. 2017 [89] ✓ ✓ ✓ Tat et al. 2018 [72] ✓ ✓ Nowotarski et al. 2018 [3] ✓ ✓ ✓ ✓ ✓ ✓ ✓ Ziel et al. 2018 [4] ✓ ✓ ✓ Dudek et al. 2018 [59] ✓ ✓ Monteiro et al. 2018 [60] ✓ ✓ Osorio et al. 2018 [73] ✓ ✓ Dumas et al. 2019 [25] ✓ ✓ Kostrzewski et al. 2019 [43] ✓ ✓ Brusaferri et al. 2019 [45] ✓ ✓ Cheng et al. 2019 [42] ✓ ✓ Uniejewski et al. 2019 [85] ✓ ✓ ✓ ✓ Serafin et al. 2019 [111] ✓ ✓ ✓ Muller et al. 2019 [41] ✓ ✓ Ghayekhloo e-
t al. 2019 [44] ✓ ✓ Marcjasz et al. 2020 [91] ✓ ✓ ✓ Chaweewat et al. 2020 [100] ✓ ✓ ✓ Brusaferri et al. 2020 [46] ✓ Maciejowska et al. 2020 [99] ✓ ✓ Uniejewski et al. 2021 [112] ✓ Kath et al. 2021 [118] ✓ ✓ ✓ ✓ Bhatia et al. 2021 [48] ✓ ✓
Table 1: Literature on PEPF. Acronyms- Bayesian (BY), Bootstrap (BS), Distributional Based (DB), Monte Carlo (MC), Historical Simulation (HS), Real-Time (RT). The ✓is the approach presented herein.
CP has gained significant traction since 2021, particularly for its ability to provide
23

empirical coverage guarantees and adapt to non-stationary, time-series settings. Its role as a recalibration layer has been especially prominent in post-2020 hybrid frameworks that integrate CP with QRA, QR, or ensemble methods to balance sharpness and validity. Among these, QRA remains the most dominant technique, consistently outperforming standalone QR in recent benchmarks. Overall, the literature reflects a shift from rigid probabilistic assumptions to flexible, hybrid approaches capable of c-
apturing both model and distributional uncertainty in complex electricity markets, as well as meeting validity requirements.
Reference QR QRA CP BY BS DB MC HS DAM IDM RT
Narajewski et al. 2022 [67] ✓ ✓ ✓ Narajewski et al. 2022 [74] ✓ ✓ Maciejowska et al. 2022 [113] ✓ ✓ ✓ Gabrielli et al. 2022 [143] ✓ Yildirim et al. 2022 [75] ✓ Lima et al. 2022 [56] ✓ ✓ Tzallas et al. 2022 [98] ✓ ✓ Janczura et al. 2022 [119] ✓ ✓ ✓ ✓ Bellomi et al. 2022 [128] ✓ ✓ Yuanchen et al. 2023 [49] ✓ ✓ Klein et al. 2023 [54] ✓ ✓ ✓ ✓ Uniejewski et al. 2023 [116] ✓ ✓ Uniejewski et al. 2023 [114] ✓ ✓ Marcjasz et al. 2023 [61] ✓ ✓ ✓ Liu et al. 2023 [102] ✓ ✓ Zhang et al. 2023 [87] ✓ ✓ ✓ Maciejow-
ska et al. 2023 [115] ✓ ✓ Cramer et al. 2023 [64] ✓ ✓ ✓ Jiang et al. 2023 [122] ✓ ✓ ✓ Nickelsen et al. 2024 [50] ✓ ✓ Monjazeb et al. 2024 [103] ✓ ✓ De et al. 2024 [137] ✓ ✓ Xu et al. 2024 [62] ✓ ✓ ✓ Maciejowska et al. 2024 [93] ✓ ✓ ✓ ✓ ✓ ✓ Maciejowska et al. 2024 [92] ✓ ✓ ✓ ✓ Zakrzewski et al. 2024 [123] ✓ ✓ Feron et al. 2024 [121] ✓ ✓ ✓ ✓ Janczura et al. 2024 [90] ✓ ✓ ✓ Brusaferri et al. 2024 [124] ✓ ✓ ✓ Lipiecki et al. 2024 [63] ✓ ✓ ✓ ✓ Dutot et al. 2024 [133] ✓ ✓ ✓ Oconnor et al. 2024 [107] ✓ ✓-
 ✓ ✓ Hirsch et al. 2024 [65] ✓ ✓ Pavirani et al. 2024 [78] ✓ ✓ Loizidis et al. 2024 [83] ✓ ✓ Hirsch et al. 2024 [94] ✓ ✓ Cornell et al. 2024 [120] ✓ ✓ Alghumayjan et al. 2024 [132]
✓✓
Osone et al. 2025 [104] ✓ ✓ Lipiecki et al. 2025 [117] ✓ ✓ ✓ Chen et al. 2025 [66] ✓ ✓ Chen et al. 2025 [105] ✓ ✓ Yu et al. 2025 [106] ✓ ✓ Nickelsen et al. 2025 [55] ✓ ✓ Pavirini et al. 2025 [76] ✓ ✓ O’Connor et al. 2025 [109] ✓ ✓ ✓ Yang et al. 2025 [51] ✓ ✓ Le et al. 2025 [125] ✓ ✓ O’Connor et al. 2025 [108] ✓ ✓ ✓ ✓ ✓
Table 2: Literature on PEPF. Acronyms- Bayesian (BY), Bootstrap (BS), Distributional Based (DB), Monte Carlo (MC), Historical Simulation (HS), Real-Time (RT). The ✓is the approach presented herein.
Market coverage analysis shows that the DAM continues to dominate research,
24

reflecting its centrality in electricity trading and the availability of structured price data. By contrast, the IDM and BM remain under-represented, despite their rising operational importance and the increased forecast uncertainty driven by high renewable penetration and system volatility [23]. This gap is particularly notable for modern methods such as CP, which, although increasingly used in the DAM, are rarely applied to real-time markets, despite their theoretical advantages under non-excha-
ngeable, high-frequency conditions. While recent studies have begun to explore CP in the BM, the IDM remains largely overlooked, even as its role in managing intraday fluctuations becomes more critical. These gaps highlight a clear opportunity for methodological expansion beyond the DAM. Future work should prioritise extending adaptive PEPF methods to the IDM and BM, where participants must respond to rapid, uncertain changes in supply and demand. Techniques like SPCI and EnbPI are especially prom-
ising given their ability to dynamically recalibrate PIs while preserving empirical validity under distributional drift. At the same time, a systematic benchmarking of DL-based probabilistic models against traditional Bayesian and Monte Carlo methods could offer insights into trade-offs efficiency and validity, as well as computational cost. Hybrid strategies, particularly those combining QRA with CP, may offer a balanced path forward, combining sharpness, validity, and robustness across diverse m-
arket regimes.
Reference QR QRA CP BY BS DB MC HS PEPF Other
Cottet et al. 2003 [53] ✓ ✓ Clements et al. 2007 [79] ✓ ✓ ✓ Do et al. 2015 [96] ✓ ✓ ✓ Yong et al. 2017 [71] ✓ ✓ Tibshirani et al. 2019 [127] ✓ ✓ ✓ Bozorg et al. 2020 [47] ✓ ✓ ✓ Xu et al. 2021 [8] ✓ ✓ Jensen et al. 2022 [101] ✓ ✓ ✓ ✓ Hu et al. 2022 [134] ✓ ✓ ✓ Foygel et al. 2022 [144] ✓ ✓ Zaffran et al. 2022 [136] ✓ ✓ Cordier et al. 2023 [130] ✓ ✓ Xu et al. 2023 [9] ✓ ✓ Wang et al. 2023 [131] ✓ ✓ Subhankar et al. 2023 [145] ✓ ✓ Dewolf et al. 2023 [129] ✓ ✓ ✓ Xu et al. 2024 [138] ✓ ✓ Angelopoulos et-
 al. 2024 [139] ✓ ✓ Lee et al. 2024 [140] ✓ ✓ Jonkers et al. 2024 [135] ✓ ✓ ✓ Renkema et al. 2024 [146] ✓ ✓ ✓
Table 3: Literature on probabilistic applications beyond just EPF. Acronyms- Bayesian (BY), Bootstrap (BS), Distributional Based (DB), Monte Carlo (MC), Historical Simulation (HS). The ✓is the approach presented herein
Table 3 presents a targeted overview of probabilistic forecasting methodologies applied outside core EPF. These studies span diverse energy domains, such as load, wind, demand, and PV forecasting, as well as energy storage optimisation, where uncertainty quantification is critical. Across this broader context, CP emerges as the dominant method, appearing in 16 of the 21 studies, particularly after 2019. CP’s rise reflects a wider methodological shift toward adaptive, validity-guaranteed approaches-
 that are well-suited for high-variance, data-rich settings. Several papers, including [127] and [129], combine CP with Bayesian inference, underscoring its role as a recalibration tool for improving empirical reliability. Meanwhile, traditional techniques such as
25

Monte Carlo, bootstrap, and distribution methods have become less common. QR appears only in hybrid implementations, and QRA is notably absent, reinforcing its niche within EPF. The “Other” category, featured in 20 studies, captures the diversity of applications and hybrid modelling strategies explored in these works. Overall, this literature signals a methodological convergence around CP and ensemble-based techniques, offering compelling templates that could be adapted to EPF, particularly for u-
nder-represented, high-volatility markets like the IDM and BM.
4.2. Cross-Market Method Comparison
Probabilistic forecasting methods display distinct usage patterns across the DAM, IDM, and BM. The DAM remains the main target for methodological innovation, benefiting from abundant structured data and longer lead times. By contrast, the IDM and BM pose tougher challenges, scarce data, continuous trading, and extreme volatility, yet research in these markets is still sparse. This section consolidates how the main methodological classes, Bayesian and other parametric approaches, distribution, and -
simulation-based methods, and quantile or conformal techniques, perform across these these markets.
4.2.1. Parametric and Non-Parametric Methods
In the DAM, Bayesian models and distributional approaches have been widely tested. Early Bayesian inference and Monte Carlo simulation frameworks offered full predictive distributions and stress-testing capacity, but computational costs and prior sensitivity limited their uptake in real-time use. More recently, deep BNNs and hybrids with Monte Carlo have improved tail risk capture, while non-parametric techniques such as KDE, GAMLSS, and copulas have provided flexible distribution modelling [49, 5-
0]. These remain useful for DAM contexts with relatively stable data availability. In the IDM and BM, these approaches are far less established. Only a handful of IDM studies explore Bayesian DL or copula-based models, and their scalability to continuous high-frequency trading is unresolved. Distributional approaches (e.g., normalising flows, multivariate copulas [65, 66]) show promise for capturing evolving dependencies, but evidence is preliminary. In the BM, Bayesian and distribution-based meth-
ods have appeared sporadically, typically with modest gains over heuristics, suggesting limited practical impact without major adaptation. Overall, parametric and distributional techniques retain value in DAM but remain experimental in real-time markets. MC and bootstrap methods follow a similar pattern. In DAM, they are common for scenario generation and ensemble calibration, often improving empirical coverage. Bootstrap methods in particular strengthen ensemble and NN forecasts under volatile co-
nditions. Historical simulation, though simple, has also proved effective in DAM residual-based models [93, 94]. Yet in IDM/BM, evidence is fragmented: MC remains largely experimental, bootstrap shows some promise for real-time recalibration, and historical simulation is almost absent, likely reflecting its poor fit to fast-changing, non-stationary conditions.
4.2.2. Quantile Regression, Quantile Regression Averaging, and Conformal Prediction Quantile-based methods have dominated DAM research since GEFCom2014. QR captures non-linearities and tail risks, while QRA provides robustness through ensemble aggregation. Despite refinements (e.g., regularisation, dimensionality reduction), QRA often struggles with calibration in volatile regimes. By contrast, CP has risen sharply
26

since 2020, offering validity guarantees under minimal assumptions. DAM studies consistently show that CP, particularly sequential and ensemble variants such as SPCI and EnbPI, delivers more reliable coverage and, in some cases, superior economic value compared to QR and QRA [108, 124]. SCP remains in use but is generally too conservative for operational application. In IDM, only isolated studies apply QR or QRA [106], typically within hybrids [92, 118]. CP methods are just beginning to appear, a-
nd no studies have yet tested EnbPI or SPCI despite their potential for handling temporal drift. The BM has seen more experimentation: QR–CP hybrids combine sharpness with recalibration, and early results show SPCI outperforming both QR and QRA in validity and trading profitability. However, applications remain limited, and their scalability to ultra-low-latency settings and diverse geographical markets is largely untested.
Takeaways:
• DAM: QRA remains a strong baseline, but CP hybrids now offer the best balance of sharpness and validity. Bayesian and distributional approaches still add value for stress testing. • IDM: Evidence is thin. Distributional methods (copulas, flows) are promising, but adaptive CP is notably absent, a clear research gap. • BM: Ensembles and adaptive CP, especially SPCI, shows the most consistent gains in coverage and profitability. Other methods deliver only incremental improvements, highlighting CP’s-
 central role in this market.
4.3. Practical Considerations
Methodological progress in probabilistic forecasting is only valuable if it improves real-world decisions. Market participants, in particular Traders and grid operators, require forecasts that quantify uncertainty in a way that directly enhances bidding, scheduling, and risk management. This section highlights how different approaches translate into practice, with a focus on operational implications, evaluation criteria, and the persistent validity–efficiency trade-off for forecasters.
4.3.1. Implications for Traders & Grid Operators
For practitioners, the key question is not which method is most novel, but which delivers reliable, actionable information under market constraints. In the DAM, Bayesian models, distributional approaches, and Monte Carlo simulations are well established, supporting scenario-based bidding and stress testing. These techniques help capture both epistemic and aleatoric uncertainty, though computational burden limits their transferability to real-time markets [37, 49, 51]. In the IDM and BM, evidence i-
s thinner. Distributional methods (e.g., copulas, normalising flows) can model complex dependencies, and bootstrap resampling has shown promise for recalibrating real-time forecasts. Yet the most consistent gains for practitioners come from quantile-based models and their extensions. QR and QRA remain popular for decomposing price drivers and identifying asymmetric risks, while their DL-enhanced variants improve sharpness during spikes. Importantly, integrating QR with optimisation (e.g., Mixed-In-
teger Linear Programming (MILP) for storage trading) demonstrates measurable economic value [109].
27

Coverage, however, is QR’s Achilles heel, especially in high-volatility IDM and BM settings. CP offers an attractive solution, offering validity guarantees through model-agnostic recalibration [129, 101]. SCP provides conservative intervals, while ensemble-based EnbPI and sequential SPCI deliver sharper, adaptive bounds and consistently stronger trading gains. Recent BM studies show that CP hybrids outperform QR/QRA alone in both empirical coverage and profitability [107, 108]. The lesson for pra-
ctitioners is clear: DAM can rely on mature quantile and Bayesian approaches, but IDM and BM require adaptive CP to manage drift and preserve reliability in real time.
4.3.2. Evaluation Criteria: Validity vs Efficiency
The trade-off between validity, achieving nominal coverage, and efficiency, delivering sharp PIs, is the central tension in PEPF. In practice: • QR/QRA: Efficient and sharp, especially in DAM, but prone to under-coverage in volatile regimes [100, 62]. • CP- SCP, EnbPI, and SPCI: Consistently valid across markets, with evidence of improved trading outcomes, though often at the cost of wider PIs [107, 124]. • Bayesian/distributional: Balanced validity across regimes, but heavy computation and prior -
sensitivity limit adoption in IDM/BM [46, 49]. • Bootstrap/historical simulation: Useful for recalibration and stress testing, but risk conservatism or vulnerability to non-stationarity [82, 74]. Recent benchmarks suggest hybrid models offer the best compromise: QR/QRA provides sharpness, while CP layers restore validity. Ensemble designs that integrate SPCI or EnbPI with QR outperform standalone methods in both statistical and financial metrics [108]. For real-world application, validity must tak-
e precedence, intervals that are sharp but unreliable undermine trust and increase imbalance costs. The operational challenge is to minimise the efficiency penalty of validity-preserving methods.
Takeaways:
• DAM: Quantile-based models QR & QRA remain effective, especially when combined with DL or CP for recalibration. Bayesian methods add value for stress testing [90]. • IDM: Adaptive methods are scarce. Bootstrap and distributional models show promise, but scalable CP, EnbPI and SPCI, is the missing link for reliable real-time deployment. • BM: CP hybrids, particularly SPCI & QR, offer the most reliable coverage and strongest trading gains; standalone QR/QRA often fail under spikes [108, 124].
4.3.3. Real-Time Forecasting Challenges
The IDM and BM present challenges that extend beyond those of the DAM. In addition to the data being non-exchangeable, real-time data with higher temporal granularity is more sensitive to temporal drift, undermining the stationarity assumptions on which many traditional models rely. Consequently, methods that perform well in the DAM often degrade when applied to real-time markets with finer temporal resolution. QR and QRA, though dominant in DAM, show mixed results in IDM and BM. Only a handful of-
 IDM studies demonstrate their value, typically in hybrid settings. In the BM, QR-based ensembles can capture sharpness but often fail under spikes, while QRA’s calibration issues worsen in high-frequency trading. CP offers valid, model-agnostic recalibration [129, 118, 130], but standard
28

SCP struggles to produce sharp PIs in volatile BM settings, underscoring the limitations of its exchangeability assumption in temporal contexts. More advanced methods, EnbPI and SPCI, adapt better to non-stationarity by dynamically recalibrating PIs [138, 139]. Evidence from the Irish BM shows that SPCI delivers sharper PIs to EnbPI, stronger empirical coverage than QR and QRA, and improved trading profitability, particularly when combined with QR and EnbPI in an ensemble. Yet these methods remai-
n underexplored in the IDM, where continuous trading and lack of data and fixed settlement points exacerbate computational and design challenges. Complementary approaches (Bayesian inference, MC simulation, bootstrap, distributional learning) remain underdeveloped for real-time use. They can manage model uncertainty and tail risk but are limited by high computational cost or poor scalability [54, 65]. Collectively, the literature highlights the need for adaptive, lowlatency methods that explicitly-
 account for temporal drift and the breakdown of exchangeability, requirements that only the newest CP variants for time series begin to address.
Takeaways:
• QR/QRA: Effective in DAM but unreliable in IDM/BM without recalibration. • SCP: Valid but overly conservative in real time. • EnbPI/SPCI: Best current candidates for BM; IDM remains an open frontier. • Other methods: Bayesian, MC, and bootstrap tools show potential but lack scalable implementations for real-time deployment [78, 89, 88].
4.3.4. Implications for Robust and Stochastic Optimisation
Probabilistic forecasts do more than quantify uncertainty, they shape the optimisation problems underpinning trading, scheduling, and system balancing [147]. In stochastic optimisation, forecast distributions or scenarios from Bayesian, MC, or CP models are embedded into unit commitment, storage arbitrage, or bidding strategies. Performance depends directly on forecast calibration: under-dispersed intervals increase imbalance costs, while sharp but valid forecasts improve profits and reduce reserv-
e requirements [148]. Robust optimisation, by contrast, relies on uncertainty sets. Here, PIs from QR, bootstrap, or CP provide natural inputs. Heuristic intervals tend to be overly conservative, while CP-based sets retain statistical validity without unnecessary risk aversion. This is especially relevant in BM contexts, where overestimating uncertainty can inflate reserve procurement. A promising middle ground is distributionally robust optimisation (DRO). DRO defines ambiguity sets around probab-
ility distributions, and PEPF outputs (e.g., QRA or CP-calibrated distributions) can populate these sets [149]. This alignment of statistical validity with tractable optimisation is particularly attractive for IDM and BM, where decisions must adapt to drift and high-frequency updates.
Takeaways:
• Stochastic optimisation: Forecast distributions drive trading and scheduling outcomes; calibration quality is critical. • Robust optimisation: CP-based PIs provide risk protection without the inefficiency of heuristic sets. • DRO: An emerging bridge that uses PEPF distributions to balance validity with tractability, well suited to IDM and BM.
29

4.4. Future Research Directions
Progress in PEPF increasingly depends on methods that adapt to the realities of real-time markets. A first priority is the development of CP techniques that remain valid under non-exchangeability and temporal drift. Recent work shows that sequential and ensemble variants (e.g., EnbPI, SPCI) can deliver sharp PIs, while retaining coverage in volatile DAM and BM conditions. Among these, SPCI is especially promising, but its application in streaming intraday environments and high-frequency balancing -
remains largely unexplored. Research should focus on scaling these approaches, integrating drift detection, and expanding their application beyond a handful of European markets to establish broader benchmarks. A second priority is the systematic evaluation of economic value. Current literature demonstrates financial gains from CP-enhanced and quantile-based optimisation strategies, yet comprehensive cost–benefit analyses across markets are rare. Future studies should link forecast quality directly-
 to trading profits, storage arbitrage, and system balancing costs. Hybrid methods, such as QR combined with CP recalibration or embedded in mixed-integer optimisation, show potential but require stress-testing under extreme volatility and fast decision cycles. Improving the economic robustness of QRA, particularly under high-frequency conditions, remains another open challenge. Finally, reproducibility and comparability demand shared infrastructure. The field lacks standardised benchmark datasets-
 for IDM and BM, hindering fair evaluation. Curated datasets should capture intraday price granularity, renewable forecast errors, and operational metadata such as outages or reserve activation. Coupled with common probabilistic and economic metrics, such resources would enable transparent model comparison and accelerate methodological progress.
Takeaways:
• Methods: Advance adaptive CP for streaming and non-exchangeable settings; explore ensemble and drift-aware hybrids. • Economics: Prioritise cost–benefit evaluation of forecasts in trading, storage, and balancing contexts; refine QR/QRA hybrids for high volatility. • Data: Create open, standardised IDM/BM datasets with operational metadata to support reproducibility and benchmarking. In sum, the next phase of PEPF research must balance methodological rigour with operational relevance. Adaptive va-
lidity-preserving methods, rigorous economic evaluation, and shared benchmarks together form the foundation for reliable, actionable probabilistic forecasting in increasingly dynamic electricity markets.
5. Conclusion
This review has examined the evolution of PEPF methodologies, tracing the shift from early Bayesian and Monte Carlo approaches toward more flexible, data-driven techniques including QR, QRA, and CP. Among these, CP-based methods, particularly EnbPI and SPCI, stand out for their ability to deliver valid empirical coverage, adapt to non-stationarity, and improve financial performance. These capabilities reflect the growing need in electricity markets for forecasting tools that can combine statistica-
l rigour with real-time adaptability. While methodological advances have transformed DAM forecasting, penetration into the IDM and BM remains limited. These higher-frequency markets are becoming
30

strategically critical due to rising renewable penetration, declining system inertia, and the demand for rapid rebalancing in response to forecast errors and unforeseen outages. In such contexts, temporal drift and non-exchangeability undermine the assumptions of many conventional approaches, making adaptive probabilistic methods such as EnbPI and SPCI, capable of dynamically recalibrating PIs under shifting distributions, particularly well-suited, yet still underutilised. Notably, in markets his-
torically under-represented in the literature, there is growing interest in modern approaches such as DDNNs and CP, while DAM-focused research is transitioning more slowly from traditional paradigms. Closing this methodological and market gap will require not only adaptation of techniques but also more comprehensive evaluation of their economic value using metrics aligned with trading and system operations. Future progress in PEPF will require open benchmark datasets with higher temporal granulari-
ty, capturing key intraday volatility drivers, such as renewable forecast error, reserve activation, and market coupling flows, that are essential for achieving accurate and reliable forecasts in the IDM and BM, where more detailed features are needed than in the DAM. Alongside richer datasets, advances in scalable, low-latency probabilistic models are needed so that forecasts can be integrated directly into market participant and operator decision frameworks without compromising timeliness. Equal-
ly important is improving the interpretability and trustworthiness of these models, enabling their adoption in automated trading and control systems where transparency and reliability are essential. Together, these developments can bridge the gap between methodological innovation and operational use, aligning PEPF research with the realities of increasingly dynamic, decentralised, and renewable-dominated power systems.
31

List of Acronyms
EPF Electricity Price Forecasting PEPF Probabilistic Electricity Price Forecasting PI Prediction Interval ML Machine Learning DL Deep Learning DAM Day-Ahead Market IDM Intraday Market BM Balancing Market TSO Transmission System Operator AR Autoregressive ARIMA Autoregressive Integrated Moving Average
GARCH Generalised Autoregressive Conditional Heteroskedasticity LASSO Least Absolute Shrinkage and Selection Operator
NNs Neural Networks
DNN Deep Neural Network DDNNs Distributional Deep Neural Networks LSTM Long Short-Term Memory BNNs Bayesian Neural Networks ELM Extreme Learning Machines QRF Quantile Random Forests GEFCom Global Energy Forecasting Competition
GAMLSS Generalized Additive Models for Location, Scale, and Shape KDE Kernel Density Estimation MC Monte Carlo MCMC Markov Chain Monte Carlo HS Historical Simulation QRA Quantile Regression Averaging FQRA Factor Quantile Regression Averaging LQRA Lasso Quantile Regression Averaging
SQRA Smoothing Quantile Regression Averaging BMS Bayesian Model Averaging QRM Quantile Regression Machine QR Quantile Regression CP Conformal Prediction WCP Weighted Conformal Prediction CQR Conformalized Quantile Regression CPA Conformal Prediction Averaging EnCQR Ensemble Conformalized Quantile Regression ENBPI Ensemble Batch Prediction Intervals
SPCI Sequential Predictive Conformal Inference DRO Distributionally Robust Optimisation
MILP Mixed-Integer Linear Programming
Acknowledgments
This work was conducted with the financial support of Science Foundation Ireland under Grant Nos. 18/CRT/6223, 16/RC/3918 and 12/RC/2289-P2 which are co-funded under the European Regional Development Fund. For the purpose of Open Access, the author has applied a CC BY public copyright licence to any Author Accepted Manuscript version arising from this submission.
References
[1] M. T. Koecklin, G. Longoria, D. Z. Fitiwi, J. F. DeCarolis, J. Curtis, Public acceptance of renewable electricity generation and transmission network developments: Insights from Ireland, Energy Policy 151 (2021) 112185.
[2] T. H. Meles, L. Ryan, Adoption of renewable home heating systems: An agent-based model of heat pumps in Ireland, Renewable and Sustainable Energy Reviews 169 (2022) 112853.
[3] J. Nowotarski, R. Weron, Recent advances in electricity price forecasting: A review of probabilistic forecasting, Renewable and Sustainable Energy Reviews 81 (2018) 1548–1568.
[4] F. Ziel, R. Steinert, Probabilistic mid-and long-term electricity price forecasting, Renewable and Sustainable Energy Reviews 94 (2018) 251–266.
[5] H. Khajeh, H. Laaksonen, Applications of probabilistic forecasting in smart grids: A review, Applied Sciences 12 (4) (2022) 1823.
32

[6] A. Gammerman, V. Vovk, V. Vapnik, Learning by transduction, Proceedings of the 14th Conference on Uncertainty in Artificial Intelligence (UAI).
[7] V. Vovk, A. Gammerman, G. Shafer, Algorithmic learning in a random world, Vol. 29, Springer, 2005.
[8] C. Xu, Y. Xie, Conformal prediction interval for dynamic time-series, in: International Conference on Machine Learning, PMLR, 2021, pp. 11559–11569.
[9] C. Xu, Y. Xie, Sequential predictive conformal inference for time series, in: International Conference on Machine Learning, PMLR, 2023, pp. 38707–38727.
[10] S. K. Aggarwal, L. M. Saini, A. Kumar, Electricity price forecasting in deregulated markets: A review and evaluation, International Journal of Electrical Power & Energy Systems 31 (1) (2009) 13–22.
[11] F. Zhang, H. Fleyeh, A review of single artificial neural network models for electricity spot price forecasting, in: 2019 16th international conference on the European energy market (EEM), IEEE, 2019, pp. 1–6.
[12] J. Lago, G. Marcjasz, B. De Schutter, R. Weron, Forecasting day-ahead electricity prices: A review of state-of-the-art algorithms, best practices and an open-access benchmark, Applied Energy 293 (2021) 116983.
[13] H. Acaroğlu, F. P. García Márquez, Comprehensive review on electricity market price and load forecasting based on wind energy, Energies 14 (22) (2021) 7473.
[14] A. Jędrzejewski, J. Lago, G. Marcjasz, R. Weron, Electricity price forecasting: The dawn of machine learning, IEEE Power and Energy Magazine 20 (3) (2022) 24–31.
[15] C. O’Connor, J. Collins, S. Prestwich, A. Visentin, Electricity price forecasting in the irish balancing market, Energy Strategy Reviews 54 (2024) 101436.
[16] C. O’Connor, A. Visentin, S. Prestwich, Fundamentals of time series analysis in electricity price forecasting, Computer Sciences &; Mathematics Forum 11 (1) (2025) 16–0. doi:10.3390/cmsf2025011016. URL https://www.mdpi.com/2813-0324/11/1/16
[17] C. O’Connor, M. Bahloul, S. Prestwich, A. Visentin, A review of electricity price forecasting models in the day-ahead, intra-day, and balancing markets, Energies 18 (12) (2025) 3097.
[18] R. Weron, Electricity price forecasting: A review of the state-of-the-art with a look into the future, International journal of forecasting 30 (4) (2014) 1030–1081.
[19] D. Newbery, G. Strbac, I. Viehoff, The benefits of integrating european electricity markets, Energy Policy 94 (2016) 253–263.
[20] V. Ilea, C. Bovo, et al., European day-ahead electricity market coupling: Discussion, modeling, and case study, Electric Power Systems Research 155 (2018) 80–92.
[21] C. B. Martinez-Anido, G. Brinkman, B.-M. Hodge, The impact of wind power on electricity prices, Renewable Energy 94 (2016) 474–487.
[22] P. Shinde, M. Amelin, A literature review of intraday electricity markets and prices, 2019 IEEE Milan PowerTech (2019) 1–6.
[23] A. Ortner, G. Totschnig, The future relevance of electricity balancing markets in europe-a 2030 case study, Energy Strategy Reviews 24 (2019) 111–120.
[24] G. Zachmann, L. Hirth, C. Heussaff, I. Schlecht, J. Mühlenpfordt, A. Eicke, The design of the european electricity market–current proposals and ways ahead, European Parliament: Luxembourg.
33

[25] J. Dumas, I. Boukas, M. M. de Villena, S. Mathieu, B. Cornélusse, Probabilistic forecasting of imbalance prices in the belgian context, in: 2019 16th International Conference on the European Energy Market (EEM), IEEE, 2019, pp. 1–7.
[26] H. Peura, D. W. Bunn, Renewable power and electricity prices: The impact of forward markets, Management Science 67 (8) (2021) 4772–4788.
[27] G. Rancilio, A. Rossi, D. Falabretti, A. Galliani, M. Merlo, Ancillary services markets in europe: Evolution and regulatory trade-offs, Renewable and Sustainable Energy Reviews 154 (2022) 111850.
[28] P. Cramton, A. Ockenfels, S. Stoft, Capacity market fundamentals, Economics of Energy & Environmental Policy 2 (2) (2013) 27–46.
[29] V. Sarkar, S. A. Khaparde, A comprehensive assessment of the evolution of financial transmission rights, IEEE Transactions on Power Systems 23 (4) (2008) 1783–1795.
[30] A. Kendall, Y. Gal, What uncertainties do we need in bayesian deep learning for computer vision?, Advances in neural information processing systems 30.
[31] A. Der Kiureghian, O. Ditlevsen, Aleatory or epistemic? does it matter?, Structural safety 31 (2) (2009) 105–112.
[32] I. Hacking, The emergence of probability: A philosophical study of early ideas about probability, induction and statistical inference, Cambridge University Press, 2006.
[33] T. J. Sullivan, Introduction to uncertainty quantification, Vol. 63, Springer, 2015.
[34] E. Hüllermeier, W. Waegeman, Aleatoric and epistemic uncertainty in machine learning: An introduction to concepts and methods, Machine Learning 110 (2021) 457–506.
[35] R. Koenker, G. Bassett Jr, Regression quantiles, Econometrica: journal of the Econometric Society.
[36] J. Nowotarski, R. Weron, Computing electricity spot price prediction intervals using quantile regression and forecast averaging, Computational Statistics 30 (2015) 791–803.
[37] V. Vahidinasab, S. Jadid, Bayesian neural network model to predict day-ahead electricity prices, European Transactions on Electrical Power 20 (2) (2010) 231–246.
[38] A. Rossi, A. Visentin, S. Prestwich, K. N. Brown, Bayesian uncertainty modelling for cloud workload prediction, in: 2022 IEEE 15th International Conference on Cloud Computing (CLOUD), IEEE, 2022, pp. 19–29.
[39] A. Rossi, A. Visentin, S. Prestwich, K. N. Brown, Clustering-based numerosity reduction for cloud workload forecasting, in: International Symposium on Algorithmic Aspects of Cloud Computing, Springer, 2023, pp. 115–132.
[40] A. Rossi, A. Visentin, D. Carraro, S. Prestwich, K. N. Brown, Forecasting workload in cloud computing: towards uncertainty-aware predictions and transfer learning, Cluster Computing 28 (4) (2025) 258.
[41] G. Müller, A. Seibert, Bayesian estimation of stable carma spot models for electricity prices, Energy Economics 78 (2019) 267–277.
[42] H. Cheng, X. Ding, W. Zhou, R. Ding, A hybrid electricity price forecasting model with bayesian optimization for german energy exchange, International Journal of Electrical Power & Energy Systems 110 (2019) 653–666.
[43] M. Kostrzewski, J. Kostrzewska, Probabilistic electricity price forecasting with bayesian stochastic volatility models, Energy Economics 80 (2019) 610–620.
34

[44] M. Ghayekhloo, R. Azimi, M. Ghofrani, M. Menhaj, E. Shekari, A combination approach based on a novel data clustering method and bayesian recurrent neural network for day-ahead price forecasting of electricity markets, Electric Power Systems Research 168 (2019) 184–199.
[45] A. Brusaferri, M. Matteucci, P. Portolani, A. Vitali, Bayesian deep learning based method for probabilistic forecast of day-ahead electricity prices, Applied Energy 250 (2019) 1158–1175.
[46] A. Brusaferri, M. Matteucci, D. Ramin, S. Spinelli, A. Vitali, Probabilistic day-ahead energy price forecast by a mixture density recurrent neural network, in: 2020 7th International Conference on Control, Decision and Information Technologies (CoDIT), Vol. 1, IEEE, 2020, pp. 523–528.
[47] M. Bozorg, A. Bracale, P. Caramia, G. Carpinelli, M. Carpita, P. De Falco, Bayesian bootstrap quantile regression for probabilistic photovoltaic power forecasting, Protection and Control of Modern Power Systems 5 (3) (2020) 1–12.
[48] K. Bhatia, R. Mittal, J. Varanasi, M. Tripathi, An ensemble approach for electricity price forecasting in markets with renewable energy resources, Utilities Policy 70 (2021) 101185.
[49] W. Yuanchen, H. Yizhi, G. Tong, D. Lei, W. Ying, X. Wenbin, Electricity price forecasting based on bayesian network and monte carlo simulation, in: 2023 IEEE 6th International Conference on Automation, Electronics and Electrical Engineering (AUTEEE), IEEE, 2023, pp. 542–546.
[50] D. Nickelsen, G. Müller, Bayesian hierarchical probabilistic forecasting of intraday electricity prices, arXiv preprint arXiv:2403.05441.
[51] H. Yang, S. J. Plathottam, K. R. Schell, T. Levin, Z. Zhou, Data-driven electricity price calibration based on bayesian inference, Energy Systems (2025) 1–21.
[52] A. Panagiotelis, M. Smith, Bayesian density forecasting of intraday electricity prices using multivariate skew t distributions, International Journal of Forecasting 24 (4) (2008) 710–727.
[53] R. Cottet, M. Smith, Bayesian modeling and forecasting of intraday electricity load, Journal of the American Statistical Association 98 (464) (2003) 839–849.
[54] N. Klein, M. S. Smith, D. J. Nott, Deep distributional time series models and the probabilistic forecasting of intraday electricity prices, Journal of Applied Econometrics 38 (4) (2023) 493–511.
[55] D. Nickelsen, G. Müller, Bayesian hierarchical probabilistic forecasting of intraday electricity prices, Applied Energy 380 (2025) 124975.
[56] L. M. Lima, P. Damien, D. W. Bunn, Bayesian predictive distributions for imbalance prices with time-varying factor impacts, IEEE Transactions on Power Systems 38 (1) (2022) 349–357.
[57] R. Weron, A. Misiorek, Forecasting spot electricity prices: A comparison of parametric and semiparametric time series models, International journal of forecasting 24 (4) (2008) 744–763.
[58] F. Serinaldi, Distributional modeling and short-term forecasting of electricity prices by generalized additive models for location, scale and shape, Energy Economics 33 (6) (2011) 1216–1226.
[59] G. Dudek, Probabilistic forecasting of electricity prices using kernel regression, in: 2018 15th International Conference on the European Energy Market (EEM), IEEE, 2018, pp. 1–5.
[60] C. Monteiro, I. J. Ramirez-Rosado, L. A. Fernandez-Jimenez, M. Ribeiro, New probabilistic price forecasting models: Application to the iberian electricity market, International Journal of Electrical Power & Energy Systems 103 (2018) 483–496.
[61] G. Marcjasz, M. Narajewski, R. Weron, F. Ziel, Distributional neural networks for electricity price forecasting, Energy Economics 125 (2023) 106843.
[62] Y. Xu, J. Li, H. Wang, P. Du, A novel probabilistic forecasting system based on quantile combination in electricity price, Computers & Industrial Engineering 187 (2024) 109834.
35

[63] A. Lipiecki, B. Uniejewski, R. Weron, Postprocessing of point predictions for probabilistic forecasting of day-ahead electricity prices: The benefits of using isotonic distributional regression, Energy Economics (2024) 107934.
[64] E. Cramer, D. Witthaut, A. Mitsos, M. Dahmen, Multivariate probabilistic forecasting of intraday electricity prices using normalizing flows, Applied Energy 346 (2023) 121370.
[65] S. Hirsch, F. Ziel, Simulation-based forecasting for intraday power markets: Modelling fundamental drivers for location, shape and scale of the price distribution, The Energy Journal 45 (3) (2024) 87–124.
[66] J. Chen, S. Lerch, M. Schienle, T. Serafin, R. Weron, Probabilistic intraday electricity price forecasting using generative machine learning, arXiv preprint arXiv:2506.00044.
[67] M. Narajewski, Probabilistic forecasting of german electricity imbalance prices, Energies 15 (14) (2022) 4976.
[68] L. Wu, M. Shahidehpour, A hybrid model for day-ahead price forecasting, IEEE Transactions on Power Systems 25 (3) (2010) 1519–1530.
[69] A. Bello, J. Reneses, A. Muñoz, A. Delgadillo, Probabilistic forecasting of hourly electricity prices in the medium-term using spatial interpolation techniques, International Journal of Forecasting 32 (3) (2016) 966–980.
[70] A. Bello, J. Reneses, A. Muñoz, Medium-term probabilistic forecasting of extremely low prices in electricity markets: Application to the spanish case, Energies 9 (3) (2016) 193.
[71] B. Yong, Z. Xu, J. Shen, H. Chen, Y. Tian, Q. Zhou, Neural network model with monte carlo algorithm for electricity demand forecasting in queensland, in: Proceedings of the Australasian computer science week multiconference, 2017, pp. 1–7.
[72] A. N. Tat, Electricity price forecasting using monte carlo simulation: the case of lithuania, Ekonomika 97 (1) (2018) 76–86.
[73] G. J. Osório, M. Lotfi, M. Shafie-Khah, V. M. Campos, J. P. Catalão, Hybrid forecasting model for short-term electricity market prices with renewable integration, Sustainability 11 (1) (2018) 57.
[74] M. Narajewski, F. Ziel, Optimal bidding in hourly and quarter-hourly electricity price auctions: Trading large volumes of power with market impact and transaction costs, Energy Economics 110 (2022) 105974.
[75] S. Yıldırım, M. Khalafi, T. Güzel, H. Satık, M. Yılmaz, Supply curves in electricity markets: a framework for dynamic modeling and monte carlo forecasting, IEEE Transactions on Power Systems 38 (4) (2022) 3056–3069.
[76] F. Pavirani, J. Van Gompel, S. S. K. Madahi, B. Claessens, C. Develder, Predicting and publishing accurate imbalance prices using monte carlo tree search, Applied Energy 392 (2025) 125944.
[77] M. O. Brolin, L. Söder, Modeling swedish real-time balancing power prices using nonlinear time series models, in: 2010 IEEE 11th International Conference on Probabilistic Methods Applied to Power Systems, IEEE, 2010, pp. 358–363.
[78] F. Pavirani, J. Van Gompel, S. S. K. Madahi, B. Claessens, C. Develder, Predicting and publishing accurate imbalance prices using monte carlo tree search, arXiv preprint arXiv:2411.04011.
[79] M. P. Clements, J. H. Kim, Bootstrap prediction intervals for autoregressive time series, Computational statistics & data analysis 51 (7) (2007) 3580–3594.
[80] A. M. Alonso, C. García-Martos, J. Rodríguez, M. Jesús Sánchez, Seasonal dynamic factor analysis and bootstrap inference: application to electricity market forecasting, Technometrics 53 (2) (2011) 137–151.
36

[81] X. Chen, Z. Y. Dong, K. Meng, Y. Xu, K. P. Wong, H. Ngan, Electricity price forecasting with extreme learning machine and bootstrapping, IEEE transactions on power systems 27 (4) (2012) 2055–2062.
[82] C. Wan, Z. Xu, Y. Wang, Z. Y. Dong, K. P. Wong, A hybrid approach for probabilistic forecasting of electricity price, IEEE Transactions on Smart Grid 5 (1) (2013) 463–470.
[83] S. Loizidis, A. Kyprianou, G. E. Georghiou, Electricity market price forecasting using elm and bootstrap analysis: A case study of the german and finnish day-ahead markets, Applied Energy 363 (2024) 123058.
[84] A. Khosravi, S. Nahavandi, D. Creighton, Quantifying uncertainties of neural network-based electricity price forecasts, Applied energy 112 (2013) 120–129.
[85] B. Uniejewski, G. Marcjasz, R. Weron, On the importance of the long-term seasonal component in day-ahead electricity price forecasting: Part ii—probabilistic forecasting, Energy Economics 79 (2019) 171–182.
[86] M. Harasheh, et al., Forecasting the italian day-ahead electricity price using bootstrap aggregation method, EUROPEAN SCIENTIFIC JOURNAL 12 (28) (2016) 51–76.
[87] C. Zhang, Y. Fu, Probabilistic electricity price forecast with optimal prediction interval, IEEE Transactions on Power Systems 39 (1) (2023) 442–452.
[88] T. Serafin, G. Marcjasz, R. Weron, Trading on short-term path forecasts of intraday electricity prices, Energy Economics 112 (2022) 106125.
[89] R. Tahmasebifar, M. K. Sheikh-El-Eslami, R. Kheirollahi, Point and interval forecasting of real-time and day-ahead electricity prices by a novel hybrid approach, IET Generation, Transmission & Distribution 11 (9) (2017) 2173–2183.
[90] J. Janczura, Expectile regression averaging method for probabilistic forecasting of electricity prices, arXiv preprint arXiv:2402.07559.
[91] G. Marcjasz, B. Uniejewski, R. Weron, Probabilistic electricity price forecasting with narx networks: Combine point or probabilistic forecasts?, International Journal of Forecasting 36 (2) (2020) 466–479.
[92] K. Maciejowska, T. Serafin, B. Uniejewski, Probabilistic forecasting with a hybrid factor-qra approach: Application to electricity trading, Electric Power Systems Research 234 (2024) 110541.
[93] K. Maciejowska, W. Nitka, Multiple split approach–multidimensional probabilistic forecasting of electricity markets, arXiv preprint arXiv:2407.07795.
[94] S. Hirsch, F. Ziel, Multivariate simulation-based forecasting for intraday power markets: Modeling cross-product price effects, Applied Stochastic Models in Business and Industry 40 (6) (2024) 1571–1595.
[95] T. Jónsson, P. Pinson, H. Madsen, H. A. Nielsen, Predictive densities for day-ahead electricity prices using time-adaptive quantile regression, Energies 7 (9) (2014) 5523–5547.
[96] L. P. C. Do, Using quantile regression for modeling of electricity price and demand, Master’s thesis, NTNU (2015).
[97] L. I. Hagfors, D. Bunn, E. Kristoffersen, T. T. Staver, S. Westgaard, Modeling the uk electricity price distributions using quantile regression, Energy 102 (2016) 231–243.
[98] P. Tzallas, N. Bezas, I. Moschos, D. Ioannidis, D. Tzovaras, Probabilistic quantile multi-step forecasting of energy market prices: A uk case study, in: Artificial Intelligence Applications and Innovations. AIAI 2022 IFIP WG 12.5 International Workshops: MHDW 2022, 5G-PINE 2022, AIBMG 2022, ML@ HC 2022, and AIBEI 2022, Hersonissos, Crete, Greece, June 17–20, 2022, Proceedings, Springer, 2022, pp. 301–313.
37

[99] K. Maciejowska, Assessing the impact of renewable energy sources on the electricity price level and variability–a quantile regression approach, Energy Economics 85 (2020) 104532.
[100] P. Chaweewat, J. G. Singh, An electricity price interval forecasting by using residual neural network, International Transactions on Electrical Energy Systems 30 (9) (2020) e12506.
[101] V. Jensen, F. M. Bianchi, S. N. Anfinsen, Ensemble conformalized quantile regression for probabilistic time series forecasting, IEEE Transactions on Neural Networks and Learning Systems.
[102] H. Liu, X. Shen, X. Tang, J. Liu, Day-ahead electricity price probabilistic forecasting based on shap feature selection and lstnet quantile regression, Energies 16 (13) (2023) 5152.
[103] M. R. Monjazeb, H. Amiri, A. Movahedi, Wholesale electricity price forecasting by quantile regression and kalman filter method, Energy 290 (2024) 129925.
[104] Y. Osone, D. Kodaira, Quantile regression for probabilistic electricity price forecasting in the uk electricity market, IEEE Access.
[105] Z. Chen, B. Zhang, C. Du, C. Yang, W. Gui, Outlier-adaptive-based non-crossing quantiles method for day-ahead electricity price forecasting, Applied Energy 382 (2025) 125328.
[106] R. Yu, Y. Tao, F. Leimgruber, T. Esterl, J. L. Cremer, Orderfusion: Encoding orderbook for end-to-end probabilistic intraday electricity price prediction, arXiv preprint arXiv:2502.06830.
[107] C. O’Connor, S. Prestwich, A. Visentin, Conformal prediction techniques for electricity price forecasting, in: International Workshop on Advanced Analytics and Learning on Temporal Data, Springer, 2024, pp. 1–17.
[108] C. O’Connor, M. Bahloul, R. Rossi, S. Prestwich, A. Visentin, Conformal prediction for electricity price forecasting in the day-ahead and real-time balancing market, Energy and AI 21 (2025) 100571.
[109] C. O’Connor, J. Collins, S. Prestwich, A. Visentin, Optimising quantile-based trading strategies in electricity arbitrage, Energy and AI 20 (2025) 100476.
[110] K. Maciejowska, J. Nowotarski, R. Weron, Probabilistic forecasting of electricity spot prices using factor quantile regression averaging, International Journal of Forecasting 32 (3) (2016) 957–965.
[111] T. Serafin, B. Uniejewski, R. Weron, Averaging predictive distributions across calibration windows for day-ahead electricity price forecasting, Energies 12 (13) (2019) 2561.
[112] B. Uniejewski, R. Weron, Regularized quantile regression averaging for probabilistic electricity price forecasting, Energy Economics 95 (2021) 105121.
[113] K. Maciejowska, B. Uniejewski, R. Weron, Forecasting electricity prices, arXiv preprint arXiv:2204.11735.
[114] B. Uniejewski, Enhancing accuracy of probabilistic electricity price forecasting: A comparative study of novel quantile regression averaging generalization, in: 2023 19th International Conference on the European Energy Market (EEM), IEEE, 2023, pp. 1–5.
[115] K. Maciejowska, T. Serafin, B. Uniejewski, Probabilistic forecasting with factor quantile regression: Application to electricity trading, arXiv preprint arXiv:2303.08565.
[116] B. Uniejewski, Smoothing quantile regression averaging: A new approach to probabilistic forecasting of electricity prices, arXiv preprint arXiv:2302.00411.
[117] A. Lipiecki, B. Uniejewski, Isotonic quantile regression averaging for uncertainty quantification of electricity price forecasts, arXiv preprint arXiv:2507.15079.
[118] C. Kath, F. Ziel, Conformal prediction interval estimation and applications to day-ahead and intraday power markets, International Journal of Forecasting 37 (2) (2021) 777–799.
38

[119] J. Janczura, E. Wójcik, Dynamic short-term risk management strategies for the choice of electricity market based on probabilistic forecasts of profit and risk measures. the german and the polish market case study, Energy Economics 110 (2022) 106015.
[120] C. Cornell, N. T. Dinh, S. A. Pourmousavi, A probabilistic forecast methodology for volatile electricity prices in the australian national electricity market, International Journal of Forecasting 40 (4) (2024) 1421–1437.
[121] O. Féron, Probabilistic forecasting of electricity spot prices.
[122] H. Jiang, Y. Dong, J. Wang, Electricity price forecasting using quantile regression averaging with nonconvex regularization, Journal of Forecasting.
[123] G. Zakrzewski, K. Skonieczka, M. Małkiński, J. Mańdziuk, Remodels: Quantile regression averaging models, arXiv preprint arXiv:2405.11372.
[124] A. Brusaferri, A. Ballarino, L. Grossi, F. Laurini, On-line conformalized neural networks ensembles for probabilistic forecasting of day-ahead electricity prices, arXiv preprint arXiv:2404.02722.
[125] D. A. Le, Probablistic electricity forecasting in the czech market.
[126] G. Shafer, V. Vovk, A tutorial on conformal prediction., Journal of Machine Learning Research 9 (3).
[127] R. J. Tibshirani, R. Foygel Barber, E. Candes, A. Ramdas, Conformal prediction under covariate shift, Advances in neural information processing systems 32.
[128] L. Bellomi, Prediction interval estimation on seasonal adjusted electricity prices using conformal prediction theory.
[129] N. Dewolf, B. D. Baets, W. Waegeman, Valid prediction intervals for regression problems, Artificial Intelligence Review 56 (1) (2023) 577–613.
[130] T. Cordier, V. Blot, L. Lacombe, T. Morzadec, A. Capitaine, N. Brunel, Flexible and systematic uncertainty estimation with conformal prediction via the mapie library, in: Conformal and Probabilistic Prediction with Applications, PMLR, 2023, pp. 549–581.
[131] W. Wang, B. Feng, G. Huang, C. Guo, W. Liao, Z. Chen, Conformal asymmetric multi-quantile generative transformer for day-ahead wind power interval prediction, Applied Energy 333 (2023) 120634.
[132] S. Alghumayjan, M. Yi, B. Xu, Conformal uncertainty quantification of electricity price predictions for risk-averse storage arbitrage, arXiv preprint arXiv:2412.07075.
[133] G. Dutot, M. Zaffran, O. Féron, Y. Goude, Adaptive probabilistic forecasting of french electricity spot prices, arXiv preprint arXiv:2405.15359.
[134] J. Hu, Q. Luo, J. Tang, J. Heng, Y. Deng, Conformalized temporal convolutional quantile regression networks for wind power interval forecasting, Energy 248 (2022) 123497.
[135] J. Jonkers, D. N. Avendano, G. Van Wallendael, S. Van Hoecke, A novel day-ahead regional and probabilistic wind power forecasting framework using deep cnns and conformalized regression forests, Applied Energy 361 (2024) 122900.
[136] M. Zaffran, O. Féron, Y. Goude, J. Josse, A. Dieuleveut, Adaptive conformal predictions for time series, in: International Conference on Machine Learning, PMLR, 2022, pp. 25834–25866.
[137] J. De la Torre, L. R. Rodriguez, F. E. Monteagudo, L. R. Arredondo, J. B. Enriquez, Electricity price forecast in wholesale markets using conformal prediction: Case study in mexico, Energy Science & Engineering 12 (3) (2024) 524–540.
[138] C. Xu, H. Jiang, Y. Xie, Conformal prediction for multi-dimensional time series by ellipsoidal sets, arXiv preprint arXiv:2403.03850.
39

[139] A. Angelopoulos, E. Candes, R. J. Tibshirani, Conformal pid control for time series prediction, Advances in neural information processing systems 36.
[140] J. Lee, C. Xu, Y. Xie, Transformer conformal prediction for time series, arXiv preprint arXiv:2406.05332.
[141] J. Janczura, R. Weron, An empirical comparison of alternate regime-switching models for electricity spot prices, Energy economics 32 (5) (2010) 1059–1073.
[142] G. Dudek, Multilayer perceptron for gefcom2014 probabilistic electricity price forecasting, International Journal of Forecasting 32 (3) (2016) 1057–1060.
[143] P. Gabrielli, M. Wüthrich, S. Blume, G. Sansavini, Data-driven modeling for long-term electricity price forecasting, Energy 244 (2022) 123107.
[144] R. Foygel Barber, E. J. Candes, A. Ramdas, R. J. Tibshirani, Conformal prediction beyond exchangeability, arXiv e-prints (2022) arXiv–2202.
[145] S. Ghosh, Y. Shi, T. Belkhouja, Y. Yan, J. Doppa, B. Jones, Probabilistically robust conformal prediction, Proceedings of the 39th Conference on Uncertainty in Artificial Intelligence (UAI) 216 (2023) 681–690.
[146] Y. Renkema, N. Brinkel, T. Alskaif, Conformal prediction for stochastic decision-making of pv power in electricity markets, arXiv preprint arXiv:2403.20149.
[147] F. Garcia-Torres, C. Bordons, J. Tobajas, R. Real-Calvo, I. Santiago, S. Grieu, Stochastic optimization of microgrids with hybrid energy storage systems for grid flexibility services considering energy forecast uncertainties, IEEE Transactions on Power Systems 36 (6) (2021) 5537–5547. doi:10.1109/TPWRS.2021.3071867.
[148] T. Hai, A. K. Alazzawi, J. Mohamad Zain, H. Oikawa, A stochastic optimal scheduling of distributed energy resources with electric vehicles based on microgrid considering electricity price, Sustainable Energy Technologies and Assessments 55 (2023) 102879. doi:https://doi.org/10.1016/j.seta.2022.102879. URL https://www.sciencedirect.com/science/article/pii/S2213138822009274
[149] P. Zhao, C. Gu, D. Huo, Y. Shen, I. Hernando-Gil, Two-stage distributionally robust optimization for energy hub systems, IEEE Transactions on Industrial Informatics 16 (5) (2020) 3460–3469. doi:10.1109/TII.2019.2938444.
40

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:08.094Z
- **Text Length:** 128379 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 40 of 40
