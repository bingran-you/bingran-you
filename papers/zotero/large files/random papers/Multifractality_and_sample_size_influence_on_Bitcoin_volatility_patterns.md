# PDF Document: Takaishi - 2025 - Multifractality and sample size influence on Bitcoin volatility patterns.pdf

**File Path:** Takaishi - 2025 - Multifractality and sample size influence on Bitcoin volatility patterns.pdf

**Processed Date:** 2026-02-10T18:16:52.418Z

**File Size:** 198.05 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3563

**Title:** Multifractality and sample size influence on Bitcoin volatility patterns

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Multifractality and sample size influence on Bitcoin
volatility patterns
Tetsuya Takaishi
Hiroshima University of Economics, , Hiroshima, 731-0192, , JAPAN
Abstract
The finite sample effect on the Hurst exponent (HE) of realized volatility time series is examined using Bitcoin data. This study finds that the HE decreases as the sampling period ∆ increases and a simple finite sample ansatz closely fits the HE data. We obtain values of the HE as ∆ → 0, which are smaller than 1/2, indicating rough volatility. The relative error is found to be 1% for the widely used five-minute realized volatility. Performing a multifractal analysis, we find the multifractality i-
n the realized volatility time series, smaller than that of the price-return time series.
Keywords: Rough volatility, Hurst exponent, Finite sample effect, Multifractality
1. Introduction
Volatility as a measure of risk is of great importance in empirical finance, especially in the risk management sector. Forecasting future volatility is an essential task for financial institutions and practitioners to manage financial assets safely and avoid unacceptable losses in the future. Practically forecasting volatility is implemented by assuming models that mimic the properties of price dynamics. It is well-known that universal properties exist across various assets, denoted as "stylized f-
acts" (Cont, 2001). One of main universal properties is "volatility clustering". Engle (1982) introduced the autoregressive conditional heteroscedasticity (ARCH) model that captures the property of volatility clustering. Later the ARCH model was generalized to GARCH
Email address: tt-taka@hue.ac.jp (Tetsuya Takaishi)
arXiv:2511.03314v1 [q-fin.ST] 5 Nov 2025

model by Bollerslev (1986). Another notable property is that volatility is long-correlated, which is also related to the fact that the absolute return |r| (as a proxy of volatility) displays long autocorrelations (Ding et al., 1993). A more precise measure of volatility, realized volatility (RV) (Andersen and Bollerslev, 1998), shows long-memory behavior (Andersen et al., 2001). According to these empirical findings, it is natural to include long-memory characteristics in volatility modelings. Si-
nce long-memory time series are characterized by the Hurst exponent (HE) of H > 1/2, the fractional volatility model (FVM) is introduced using the fractional Brownian motion with H > 1/2(Comte and Renault, 1998). A new paradigm on volatility dynamics suggests that "volatility is rough." Gatheral et al. (2018) argue that the H of RV time series is approximately 0.1, less than 1/2. This observation implies that volatility time series exhibit rough or anti-persistent behavior. Considering this observ-
ation, they suggest the rough FVM (RFVM) with H < 1/2 and show that the RFVM improves volatility forecasts. Furthermore, several advantages to use rough volatility are indicated. One is the volatility surface issue. In particular, it is empirically observed that the term structure of at-the-money skew is described by a negative power law, which is not easily explained by conventional stochastic volatility models(Carr and Wu, 2003; Fouque et al., 2003; Lee, 2005). To this issue, it is shown that mo-
dels based on fractional Brownian motion are capable of explaining the negative power law(Alos et al., 2007; Fukasawa, 2011). Another issue is the Zumbach effect(Zumbach, 2003, 2009) implying that the cross-correlation function between the daily variance and squared returns has the time-reversal asymmetry which is not derived from conventional volatility models. Interestingly, El Euch et al. (2020) shows that the rough Heston model could explain the Zumbach effect. Since there exist several issues-
 that can be explained by the rough volatility, it can be interesting to further seek evidence solved by rough volatility. There also exist further developments to use rough volatility models for such as option pricing(Bayer et al., 2016) and perfect hedging(Euch and Rosenbaum, 2018) and investigations of origins of roughness by the market microstructure(El Euch et al., 2018; Jusselin and Rosenbaum, 2020; Rosenbaum and Tomas, 2021). Various empirical studies, using data from the RVs of various ass-
ets, imply that volatilities confirm the roughness of volatility (Bennedsen et al., 2022; Livieri et al., 2018; Takaishi, 2020; Floc’h, 2022). Contrary to these empirical findings, the roughness of volatility remains a controversial issue. For example, Cont and Das (2024) show that the HE is different from spot and
2

integrated (realized) volatilities and infer that this may arise due to measurement errors of RV. Fukasawa et al. (2019) find that the RV is still rough using an improved estimator; even more so than the observations of previous researchers. Brandi and Di Matteo (2022) argue that the rough Bergomi model proposed for rough volatility is inconsistent with multi-scaling properties. In this study, we address the finite sample effect on the HE obtained from RV. RV is constructed by summing the squared-
 returns sampled at a certain frequency; generally, the number of samples to construct the RV is finite. When the number of samples is finite, the RV receives the finite sample effect and, consequently, the distribution of returns standardized by the RV deviates from a Gaussian distribution (Peters and De Vilder, 2006). Owing to the absence of previous research on this topic, we examine impact of the finite size effect on the HE estimation of RV time series. The HE relates to the scaling behaviour-
 of 2nd order fluctuations or variance. For the random time series, H = 1/2. For H > 1/2(< 1/2), the time series is said to be persistent (ant-persitent). The HE can be generalized for q-th order fluctuations and it is referred to as the generalized Hurst exponet (GHE) h(q). When h(q) is constant for any q, such time series is said to be monofractal. Conversely, when h(q) varies for q, it is multifractal. The GHE can capture the non-linear time-correlations that can not be measured in the HE alone-
. Numerous studies on the GHE have been conducted for price-return time series and it is found that the multifractal nature is usually present in price-return time series, e.g. see Jiang et al. (2019). In the literature, the RV time series is considered to be monofractal (Gatheral et al., 2018) and there is little attention in multifractality. However, the possibility of multifractality in the RV is pointed out by Takaishi (2020). Small multifractality in the RV of stock returns is also observed (-
Brandi and Di Matteo, 2022). In this study, we perform a multifractal analysis for the RV time series to clarify the existence of the multifractality in the RV.
2. Data and Methodology
Our data consists of Bitcoin tick data traded on Bitstamp exchange from January 2, 2014, to June 01, 2023. We do not use data prior to 2014 because, in the early stages of the Bitcoin market, liquidity was low (Takaishi and Adachi, 2020), and we can observe different market properties in ill-liquid markets. The HE of the return time series in the early stages of the Bitcoin
3

market was less than 1/2, indicating the anti-persistence of the time series(Urquhart, 2016). Subsequently, the HE increased to 1/2 as the liquidity increased (Takaishi and Adachi, 2020). It is argued that the anti-persistence of returns seen in the cryptocurrency market can be attributed to the low liquidity of the market (Wei, 2018). We construct the daily RV on day t with ∆-minute period by
RVt,∆ =
n
∑
i
r2
t,i,∆, (1)
where rt,i,∆, i = 1, 2, . . . , n are intraday returns and n = 1440/∆ is the number of samples in one day. At finite ∆, the RV receives the finite sample effect that could lower the accuracy of the RV estimate. Let us assume that the observed daily return rt is described by rt = σtǫt, where ǫt ∼ N (0, 1) and σt is the standard deviation. Under this assumption, the distribution of rt/σt should be the standard normal distribution. Using the RV as a proxy of σt, Andersen
et al. (2000) show that the distribution of r ̄t ≡ rt/RV 1/2
t is nearly Gaussian. However, when n is small, the distribution of r ̄t deviates from the Gaussian distribution. Peters and De Vilder (2006) provide the finite sample formula of the probability distribution P (r ̄t):
P (r ̄) = Γ(n/2)
√πnΓ((n − 1)/2)
(
1 − r ̄2
n
)(n−3)/2
. (2)
Empirical observations confirm Eq.(2) (Takaishi, 2012). The 2k-th order moments of the standardized returns are also affected by the finite sample
effect as
E[r ̄2k] = nk(2k − 1)(2k − 3) . . . 1
(n + 2k − 2)(n + 2k − 4) . . . n. (3)
From Eq.(3), the kurtosis at finite n is given by
E[r ̄4]
E[r ̄2]2 = 3n
n + 2 . (4)
The RV time series is defined by log-volatility increments as follows.
Vt = log RVt − log RVt−1. (5)
4

We determine the HE (= h(2)) of the time series Vt using the multifractal detrended fluctuation analysis (MDFA), suitable for non-stationary processes (Kantelhardt et al., 2002) and widely used for investigations of time series properties (Jiang et al., 2019). The MFDFA is described as follows. For a more detailed description, see, e.g., Kantelhardt et al. (2002). First, we determine the profile Y (i) from Vt
Y (i) =
i
∑
j=1
(Vj − 〈V 〉), (6)
where 〈V 〉 stands for the average of Vt. Then, we divide the profile Y (i) into Ns non-overlapping segments of an equal length s, where Ns ≡ int(N/s). Since the length of the time series is not always a multiple of s, we repeat the same procedure, starting from the end of the profile. Next, we calculate the variance F 2.
F 2(ν, s) = 1
s
s
∑
i=1
(Y [(ν − 1)s + i] − Pν(i))2, (7)
for each segment ν, ν = 1, . . . , Ns and
F 2(ν, s) = 1
s
s
∑
i=1
(Y [N − (ν − Ns)s + i] − Pν(i))2, (8)
for each segment ν, ν = Ns + 1, . . . , 2Ns. Pν(i) is the fitting polynomial to remove the local trend in segment ν. Averaging all segments, we obtain the qth order fluctuation function
Fq(s) =
{
1 2Ns
2Ns
∑
ν=1
(F 2(ν, s))q/2
}1/q
. (9)
If the time series is long-range power-law correlated, Fq(s) is expected to be the following functional form for large s:
Fq(s) ∼ sh(q). (10)
h(q) is called the GHE and h(2) corresponds to the HE.
5

2022/01 2022/07 2023/01 2023/06
0
0.05
0.1
0.15
Hurst exponent
1 min
5 min
30 min
120 min
240 min
360 min
720 min
1440 min
Figure 1: Time evolution of the HE (h(2)) for various sampling frequencies.
3. Results
We determine the HE in eight-year window data using the rolling window method. The eight-year window is rolled every five days; in each window, we determine the HE by the MDFA for the RV sampled at ∆ = 1, 2, . . . 1440, where ∆ is chosen so that 1440/∆ becomes an integer. Fig.1 displays the time evolution of the HE for various ∆. We identify how HE tends to decrease as ∆ increases. Such decreasing behavior is also observed in (Garcin and Grasselli, 2022)’s study of exchange rates. To investigate t-
he frequency dependence of the HE, we select three representative data periods (see Table 1) and plot the HE as a function of ∆ in Fig.2, indicating that the HE decreases as ∆ increases. Although we do not know the finite sample formula for the HE, inspired by the form of Eq.(3), we examine the following ansatz and find that the ansatz fits the HE results well.
H(∆) = H0
n
n + a , (11)
where H0 and a are fitting parameters. The fitting results (see also Table 1 for the fitting parameters) are shown as red lines in Fig.2, indicating that Eq.(11) fits the HE data well, except for the slight deviation at ∆ = 1-minute. The deviation at 1-minute could be related to the microstructure noise that manifests at very high frequencies.
6

10 100 1000
0
0.05
0.1
0.15
0.2
10 100 1000
0
0.05
0.1
0.15
0.2
10 100 1000 ∆ ( minute )
0
0.05
0.1
0.15
0.2
Period I
Period II
Period III
Figure 2: HE as a function of ∆. Red solid lines show fitting results.
7

Fleming et al. (2003) finds that the kurtosis of standardized returns from US stocks exhibits a divergent behavior at very high frequencies and state that the divergent is caused by the leptokurtic distribution as a mixture of normals originated from the microstructure noise (Hansen and Lunde, 2006; Alexander and Narayanan, 2001). However, the microstructure noise effect in Bitcoin data that we observe seems small until about ∆ =1-min. When the microstructure noise considerably affects the HE res-
ults, we need to fit the HE data while excluding such affects. The parameter H0 corresponds to H at ∆ → 0. The obtained values of H0 listed in Table 1 are around 0.12 − 0.14 and exhibit a slight decreasing behavior as a function of time. It is interesting to see that the parameter a is close to an integer 3 as similar equations in Eq.(3) although there is no reason that a should be an integer. The relative error to H0 at finite ∆ is given by a/(n + a), shown in Fig.3. Three lines from different pe-
riods are very similar and difficult to distinguish visually. In empirical analyses, the sampling frequency for the RV is often ∆ = 5-minute since the five-minute RV gives a reasonable balance between the bias and the efficiency(Andersen and Bollerslev, 1997) and has better performance than other RV estimates (Liu et al., 2015). The relative errors at five-minute ∆ are found to be around 1%, suggesting that the finite size effect on the HE for the widely used fiveminute RV is reasonably small . He-
reafter, we use the five-minute RV for the MFDFA. Fig.4(a) shows the time evolution of h(q) for q = −3, 2, 3, obtained using the five-minute RV time series. It indicates that h(q) as a function of q is not constant, suggesting the multifractality of the time series. To quantify the strength of multifractality, we define the following quantity(Zunino et al., 2008):
∆h(k) = h(−k) − h(k), (12)
which goes to zero for the monofractal time series. We also define the strength of multifractality by the Taylor coefficient of h(q). The function h(q) is approximated linearly around q = 0 as
h(q) = B0 + B1q, (13)
where B0 and B1 are Taylor coefficients and the strength of multifractality is measured by B1, which also takes zero for the monofractal time series. Here, we approximately obtain B1 by −∆h(3)/6.
8

1 10 100 1000
∆ (minute)
0.001
0.01
0.1
1
Relative error
Period I Period II Period III
Figure 3: Relative errors to H0 as a function of ∆.
Fig.4(b) and (c) display ∆h(3) and −B1 as a function of time and indicate that the strength of multifractality is finite and time-varying, meaning the existence of multifractality in the RV time series. The average value of ∆h(3) for whole period is 0.034. We also perform the multifractal analysis for the price-return time series and obtain ∆h(3) ≃ 0.12, indicating a stronger multifractality than that of the RV time series. Similarly, the average value of −B1 for whole period is obtained to be 0.0-
057, which is consistent with the similar strength of B1 obtained for the stock RV time series(Brandi and Di Matteo, 2022).
Table 1: Three periods selected for analysis and fitting parameters.
Period H0 a I: 20014/1/2-2022/1/2 0.1379(8) 2.93(11) II: 2015/1/1-2023/1/1 0.1308(4) 3.02(6) III: 2015/5/27-2023/5/27 0.1262(3) 3.15(6)
4. Conclusion
We examine the finite sample effect on the HE using Bitcoin data and find that the HE decreases as ∆ increases.
9

2022/01 2022/07 2023/01 2023/06
0.12
0.14
0.16
0.18 h(-3) h(2) h(3)
2022/01 2022/07 2023/01 2023/06
0.02
0.03
0.04
0.05 ∆h(3)
2022/01 2022/07 2023/01 2023/06
0.004
0.005
0.006
0.007
0.008
-B1
(a)
(b)
(c)
Figure 4: (a) Time evolution of h(−3), h(2) and h(3). (b) Multifractal strength ∆h(3). (c) Multifractal strength −B1.
10

We provide a simple two-parameter ansatz that obtains the HE at ∆ → 0 and use ansatz to obtain the HE ∼ 0.12 − 0.14, indicating the roughness of the RV time series. We also find that the relative error of the HE for the five-minute RV is small (1%); thus, we conclude that the five-minute RV can be used for the HE estimate without considering the finite sample effect. Analyzing the five-minute RV time series, we find that its multifractality is smaller than that of price-return and the strength of-
 the multifractality varies over time. Two sources of the multifractality are considered (i) non-linear time correlations and (ii) shape of distribution (Kantelhardt et al., 2002). The previous study suggests the multifractality originates in part from the shape of distribution(Takaishi, 2020). It is important to understand which source dominates the multifractality in the time series when we model the RV time series. If the dominant source is the shape of distribution, one may need to introduce t-
he stochastic process from the distribution. This might be similar to the scheme of the GARCH-type models in which to accommodate the fat-tailed return distribution, non-normal distributions are introduced to the innovations of the GARCH model(Bollerslev, 1987; Nelson, 1991). If the non-linear time correlations dominate, one may need a dynamical process that generates the multifractality in time series. Future researchers can investigate and clarify the origin of the multifractality in the RV time-
 series. A limitation of the study is that we examine only Bitcoin data. Future research could investigate whether our findings hold for other assets. If we confirm the multifractality in the volatility time series, it could serve as a new property that can guide to construct a reliable volatility modeling.
Acknowledgements
The numerical calculations for this study were performed using the Yukawa Institute Computer Facility and facilities at the Institute of Statistical Mathematics. This study was supported by the Yu-cho Foundation (Grant-inAid for Research , 2024) and in part by JSPS KAKENHI, grant number JP21K01435.
References
Alexander, C., Narayanan, S., 2001. Option Pricing with Normal Mixture Returns: Modelling Excess Kurtosis and Uncertanity in Volatility. Technical Report. Henley Business School, University of Reading.
11

Alos, E., León, J.A., Vives, J., 2007. On the short-time behavior of the implied volatility for jump-diffusion models with stochastic volatility. Finance and stochastics 11, 571–589.
Andersen, T.G., Bollerslev, T., 1997. Intraday periodicity and volatility persistence in financial markets. Journal of empirical finance 4, 115–158.
Andersen, T.G., Bollerslev, T., 1998. Answering the skeptics: Yes, standard volatility models do provide accurate forecasts. International economic review , 885–905.
Andersen, T.G., Bollerslev, T., Diebold, F.X., Labys, P., 2000. Exchange rate returns standardized by realized volatility are (nearly) gaussian. Multinational Finance Journal 4, 159–179.
Andersen, T.G., Bollerslev, T., Diebold, F.X., Labys, P., 2001. The distribution of realized exchange rate volatility. Journal of the American statistical association 96, 42–55.
Bayer, C., Friz, P., Gatheral, J., 2016. Pricing under rough volatility. Quantitative Finance 16, 887–904.
Bennedsen, M., Lunde, A., Pakkanen, M.S., 2022. Decoupling the short-and long-term behavior of stochastic volatility. Journal of Financial Econometrics 20, 961–1006.
Bollerslev, T., 1986. Generalized autoregressive conditional heteroskedasticity. Journal of Econometrics 31, 307–327.
Bollerslev, T., 1987. A conditionally heteroskedastic time series model for speculative prices and rates of return. The review of economics and statistics , 542–547.
Brandi, G., Di Matteo, T., 2022. Multiscaling and rough volatility: An empirical investigation. International Review of Financial Analysis 84, 102324.
Carr, P., Wu, L., 2003. The finite moment log stable process and option pricing. The journal of finance 58, 753–777.
Comte, F., Renault, E., 1998. Long memory in continuous-time stochastic volatility models. Mathematical finance 8, 291–323.
12

Cont, R., 2001. Empirical properties of asset returns: Stylized facts and statistical issues. Quantitative Finance 1, 223–236.
Cont, R., Das, P., 2024. Rough volatility: fact or artefact? Sankhya B , 1–33.
Ding, Z., Granger, C.W., Engle, R.F., 1993. A long memory property of stock market returns and a new model. Journal of empirical finance 1, 83–106.
El Euch, O., Fukasawa, M., Rosenbaum, M., 2018. The microstructural foundations of leverage effect and rough volatility. Finance and Stochastics 22, 241–280.
El Euch, O., Gatheral, J., Radoičić, R., Rosenbaum, M., 2020. The zumbach effect under rough heston. Quantitative finance 20, 235–241.
Engle, R.F., 1982. Autoregressive conditional heteroscedasticity with estimates of the variance of united kingdom inflation. Econometrica: Journal of the Econometric Society , 987–1007.
Euch, O.E., Rosenbaum, M., 2018. Perfect hedging in rough heston models. The Annals of Applied Probability 28, 3813–3856.
Fleming, J., Kirby, C., Ostdiek, B., 2003. The economic value of volatility timing using “realized” volatility. Journal of Financial Economics 67, 473509.
Floc’h, F.L., 2022. Roughness of the implied volatility. arXiv preprint arXiv:2207.04930 .
Fouque, J.P., Papanicolaou, G., Sircar, R., Solna, K., 2003. Multiscale stochastic volatility asymptotics. Multiscale Modeling & Simulation 2, 22–42.
Fukasawa, M., 2011. Asymptotic analysis for stochastic volatility: martingale expansion. Finance and Stochastics 15, 635–654.
Fukasawa, M., Takabatake, T., Westphal, R., 2019. Is volatility rough. arXiv: Statistics Theory URL: https://api.semanticscholar.org/CorpusID:152282243.
13

Garcin, M., Grasselli, M., 2022. Long versus short time scales: the rough dilemma and beyond. Decisions in economics and finance 45, 257–278.
Gatheral, J., Jaisson, T., Rosenbaum, M., 2018. Volatility is rough. Quantitative Finance 18, 933–949.
Hansen, P.R., Lunde, A., 2006. Realized variance and market microstructure noise. Journal of Business & Economic Statistics 24, 127–161.
Jiang, Z.Q., Xie, W.J., Zhou, W.X., Sornette, D., 2019. Multifractal analysis of financial markets. Rep. Prog. Phys. 82, 125901.
Jusselin, P., Rosenbaum, M., 2020. No-arbitrage implies power-law market impact and rough volatility. Mathematical Finance 30, 1309–1336.
Kantelhardt, J.W., Zschiegner, S.A., Koscielny-Bunde, E., Havlin, S., Bunde, A., Stanley, H.E., 2002. Multifractal detrended fluctuation analysis of nonstationary time series. Physica A 316, 87–114.
Lee, R.W., 2005. Implied volatility: Statics, dynamics, and probabilistic interpretation. Recent advances in applied probability , 241–268.
Liu, L.Y., Patton, A.J., Sheppard, K., 2015. Does anything beat 5-minute RV? a comparison of realized measures across multiple asset classes. Journal of Econometrics 187, 293–311.
Livieri, G., Mouti, S., Pallavicini, A., Rosenbaum, M., 2018. Rough volatility: evidence from option prices. IISE transactions 50, 767–776.
Nelson, D., 1991. Conditional heteroskedasticity in asset returns: A new approach. Econometrica 59, 347–370.
Peters, R.T., De Vilder, R.G., 2006. Testing the continuous semimartingale hypothesis for the s&p 500. Journal of Business & Economic Statistics 24, 444–454.
Rosenbaum, M., Tomas, M., 2021. From microscopic price dynamics to multidimensional rough volatility models. Advances in Applied Probability 53, 425–462.
14

Takaishi, T., 2012. Finite-sample effects on the standardized returns of the Tokyo Stock Exchange. Procedia-Social and Behavioral Sciences 65, 968973.
Takaishi, T., 2020. Rough volatility of Bitcoin. Finance Research Letters 32, 101379.
Takaishi, T., Adachi, T., 2020. Market efficiency, liquidity, and multifractality of Bitcoin: A dynamic study. Asia-Pacific Financial Markets 27, 145–154.
Urquhart, A., 2016. The inefficiency of Bitcoin. Economics Letters 148, 80–82.
Wei, W.C., 2018. Liquidity and market efficiency in cryptocurrencies. Economics Letters 168, 21–24.
Zumbach, G., 2003. Volatility processes and volatility forecast with longmemory. Quantitative Finance 4, 70.
Zumbach, G., 2009. Time reversal invariance in finance. Quantitative Finance 9, 505–515.
Zunino, L., Tabak, B.M., Figliola, A., Pérez, D., Garavaglia, M., Rosso, O., 2008. A multifractal approach for stock market inefficiency. Physica A 387, 6558–6566.
15

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:52.418Z
- **Text Length:** 24041 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
