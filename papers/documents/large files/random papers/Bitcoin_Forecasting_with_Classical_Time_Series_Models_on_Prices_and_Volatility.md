# PDF Document: Kareem and Aue - 2025 - Bitcoin Forecasting with Classical Time Series Models on Prices and Volatility.pdf

**File Path:** Kareem and Aue - 2025 - Bitcoin Forecasting with Classical Time Series Models on Prices and Volatility.pdf

**Processed Date:** 2026-02-10T18:17:50.116Z

**File Size:** 1116.21 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3502

**Title:** Bitcoin Forecasting with Classical Time Series Models on Prices and Volatility

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Bitcoin Forecasting with Classical Time Series
Models on Prices and Volatility
Anmar Kareem — Dr. Alexander Aue
Department of Statistics and Data Science
University of California, Davis
September 11, 2025
Abstract
This paper evaluates the performance of classical time series models in forecasting Bitcoin
prices, focusing on ARIMA, SARIMA, GARCH, and EGARCH. Daily price data from 2010 to
2020 were used, with each model trained on the first 90% and tested on the final 10%. Forecast
accuracy was assessed using MAE, RMSE, AIC, and BIC. The results show that ARIMA
provided the strongest forecasts for short-run log-price dynamics, while EGARCH offered the
best fit for volatility by capturing asymmetry in responses to shocks. These findings suggest
that although Bitcoin’s extreme volatility remains difficult to fully capture, classical time series
models can still provide valuable short-run forecasts. The study contributes to understanding
cryptocurrency forecasting and sets the stage for future work that incorporates machine learning
methods and broader macroeconomic or blockchain variables.
Keywords: Bitcoin, Time Series Forecasting, ARIMA, GARCH, Volatility
1
arXiv:2511.06224v1 [q-fin.ST] 9 Nov 2025

1 Introduction
Bitcoin has become the most widely known cryptocurrency and one of the most volatile
financial assets in the world. Over the past decade, its price has grown from just a few dollars to
thousands, with large swings that make it both attractive and risky for investors (Pichl and Kaizoji,
2017). This volatility has drawn attention not only from traders but also from researchers who see
Bitcoin as an important case for testing forecasting methods, making it a growing focus in statistics
and data science (Yenidog ̆an et al., 2018). Understanding how to predict its price is important
because sharp movements in value affect not only individual investors but also the broader financial
system, where cryptocurrencies are playing a growing role.
Bitcoin data often displays two important challenges for forecasting: stationarity and season
ality. Stationarity means that the statistical properties of a process, such as its mean and variance,
remain constant over time, while seasonality refers to repeating cycles that can occur daily, weekly,
or at other intervals. To address these issues, researchers frequently apply classical time series
techniques such as the Autoregressive Integrated Moving Average (ARIMA) model, which is de
signed to capture autocorrelation, differences, and seasonal patterns in the data (Yenidog ̆an et al.,
2018). In addition to these concerns, Bitcoin prices also exhibit volatility clustering, where periods
of large price changes are followed by more large changes. This feature motivates the use of models
such as the Generalized Autoregressive Conditional Heteroskedasticity (GARCH) family, which
focus on capturing and forecasting changing levels of volatility (Pichl and Kaizoji, 2017).
This study builds on these insights by applying a set of classical time series models to Bitcoin
price data. Specifically, we employ the ARIMA, the Seasonal ARIMA (SARIMA), the GARCH,
and the Exponential GARCH (EGARCH) models, training each model on the first 90% of the
2

dataset and forecasting the remaining 10% to allow for an out-of-sample assessment of predictive
accuracy. The performance of these approaches is evaluated using four widely applied forecasting
metrics: the Mean Absolute Error (MAE), which measures the average magnitude of prediction
errors in absolute terms; the Root Mean Squared Error (RMSE), which emphasizes larger errors
by squaring them before averaging; the Akaike Information Criterion (AIC); and the Bayesian
Information Criterion (BIC), both of which provide measures of model fit that penalize complexity.
Despite Bitcoin’s complexity and volatility, classical time series models can still provide meaningful
short-run forecasts when carefully applied, and by comparing ARIMA, SARIMA, GARCH, and
EGARCH on a consistent dataset and evaluation framework, the study highlights both the strengths
and limitations of traditional statistical methods for cryptocurrency forecasting while offering a
foundation for future research that may incorporate more advanced machine learning techniques.
2 Literature Review
Research on Bitcoin forecasting has expanded as the asset’s volatility continues to attract
attention from both finance and data science. This study is most directly related to the work
of Mudassir et al. (2020), who applied a range of machine learning models such as artificial
neural networks (ANN), long short-term memory (LSTM), and support vector machines (SVM)
to Bitcoin data. Their analysis evaluated performance across several horizons, showing that
machine learning methods can sometimes outperform traditional approaches reported in the broader
literature. Building on this, my research applies purely classical time series techniques such as
ARIMA, SARIMA, GARCH, and EGARCH, while differing in design by training on the first 90%
of the dataset and forecasting the final 10%. This approach allows for a focused evaluation of how
3

each method performs at the end of the observed period.
3 Methodology
3.1 Data
The dataset used in this study is publicly available on GitHub (btc data.csv). It covers daily
Bitcoin activity from July 17, 2010 to February 2, 2020, with 3,488 rows of observations. The
data includes a wide range of blockchain and market features, organized into columns that track
Bitcoin price, mining difficulty, hashrate, daily transactions, transaction fees, active addresses,
and block size. While the dataset contains hundreds of technical indicators derived from moving
averages, variance, momentum, and similar calculations, only the raw prefix metrics were used in
this analysis. To focus on meaningful price movements, the dataset was also filtered to include
only Bitcoin values of $100 or higher. This filter was applied to remove the earliest period when
Bitcoin traded at extremely low values, which could distort the analysis and reduce the reliability
of the forecasting results.
4

3.2 Preprocessing
3.2.1 Log Transformation
2014 2016 2018 2020 Date
0
2500
5000
7500
10000
12500
15000
17500
20000
Price (USD)
Bitcoin Price (Filtered for > $100)
2014 2016 2018 2020 Date
0.4
0.3
0.2
0.1
0.0
0.1
0.2
Log Return
Bitcoin Log Returns
Figure 1: Bitcoin price series (left) and log returns (right).
The raw Bitcoin price series in Figure 1 shows a steady upward trend over time, with clear
explosive growth in later years. The increase is not smooth, however, as there are sharp jumps
and sudden drops that reflect the volatile nature of the asset. From simple observation, the series
appears highly unstable, with long upward trends and sudden corrections, making it challenging to
analyze in its raw form.
Δ ln(Pt) = ln(Pt) − ln(Pt−1) (1)
The log return series is defined in equation (1). In Figure 1, the log return series provides a
clearer view of the underlying behavior. Unlike the raw prices, the log returns fluctuate around a
constant mean and highlight specific periods of high volatility. In particular, large swings can be
seen in 2013–2014 and again in 2017–2018, which align with the major Bitcoin bull run in 2017
and the subsequent crash in 2018. On average, the log return over the full dataset is approximately
0.001837, which suggests small positive daily returns but with substantial variation from day to
5

day. This transformation produces a series more suitable for forecasting because it better reflects
the short-term changes in Bitcoin’s value.
0.4 0.3 0.2 0.1 0.0 0.1 0.2 Log Return
0
100
200
300
400
500
600
Frequency
Histogram of Bitcoin Log Returns
12.5 10.0 7.5 5.0 2.5 0.0 2.5 5.0 Theoretical Quantiles
12.5
10.0
7.5
5.0
2.5
0.0
2.5
5.0
Sample Quantiles
QQ Plot of Bitcoin Log Returns
Figure 2: Histogram of Bitcoin log returns (left) and QQ plot (right).
The histogram of Bitcoin log returns in Figure 2 shows that most values are tightly concentrated
around zero, but the distribution has noticeable outliers on both tails. This suggests that while small
daily changes are common, extreme positive or negative returns occur more frequently than would
be expected under a normal distribution.
The QQ plot in Figure 2 further confirms this pattern. If the returns were normally distributed,
the points would fall along the straight reference line. Instead, the observed quantiles diverge
strongly in both tails, especially in the lower tail, indicating heavy-tailed behavior. In practical
terms, this means Bitcoin returns exhibit a higher probability of extreme events compared to a
normal distribution, which is consistent with the volatility characteristics noted in prior studies.
Together, these results support the use of log returns rather than raw prices as the input for the
time series models applied in the next sections.
6

3.2.2 Stationarity and Heteroskedasticity Tests
0 5 10 15 20 25 30 35 40
1.00
0.75
0.50
0.25
0.00
0.25
0.50
0.75
1.00 ACF of Bitcoin Price
0 5 10 15 20 25 30 35 40
1.00
0.75
0.50
0.25
0.00
0.25
0.50
0.75
1.00 PACF of Bitcoin Price
Figure 3: ACF and PACF plots for the Bitcoin price series.
The ACF and PACF plots in Figure 3 for the raw Bitcoin price show strong, persistent positive
correlations that decay very slowly. This is typical of a random-walk type process, where past
values strongly influence future ones and shocks do not fade quickly. Such behavior suggests the
series is not stationary in its raw form. To make the data more suitable for modeling, we apply
differencing, which means subtracting the previous value from the current value to remove trends
and stabilize the mean.
0 5 10 15 20 25 30 35 40
1.00
0.75
0.50
0.25
0.00
0.25
0.50
0.75
1.00 ACF of Log Returns
0 5 10 15 20 25 30 35 40
1.00
0.75
0.50
0.25
0.00
0.25
0.50
0.75
1.00 PACF of Log Returns
Figure 4: ACF and PACF plots for Bitcoin log returns.
The ACF and PACF plots in Figure 4 for Bitcoin log returns show values much closer to zero
beyond the first lags, with only small, scattered spikes. This indicates that the log return series
7

behaves more like white noise, where past values provide little information about the future. While
the mean dynamics appear weak, there are still signs of volatility clustering, meaning periods of
large and small changes tend to group together. This motivates the use of models that explicitly
capture and forecast volatility.
Test p-value
Augmented Dickey–Fuller (ADF) 3.86 × 10−25 Engle’s ARCH 1.60 × 10−84
Table 1: Summary of stationarity and heteroskedasticity test results for Bitcoin log returns.
In Table 1, the ADF test produced a very low p-value, which allows us to reject the null
hypothesis of a unit root. This indicates that the log return series is stationary, meaning it fluctuates
around a constant mean without a persistent trend. Stationarity is a key requirement for autoregres
sive models, and this result justifies the use of ARIMA-type models to capture the autocorrelation
structure in the data.
The Engle’s ARCH test in Table 1 also reported a highly significant p-value, providing strong
evidence of conditional heteroskedasticity in the log returns. In other words, periods of high
volatility tend to cluster together rather than appearing randomly. This behavior cannot be modeled
adequately by ARIMA alone, which assumes constant variance in the residuals. Instead, it motivates
the use of GARCH-type models, which are designed to explicitly capture and forecast volatility
clustering in financial time series.
3.2.3 Autocorrelation and Cointegration Diagnostics
During the exploratory phase of the analysis, three sets of regression models were estimated
using the raw price, the logarithm of price, and the log-differenced price of Bitcoin as the depen
dent variable. Each specification included blockchain-related predictors such as transaction fees,
8

hashrate, and mining difficulty. The strongest regression from each category was selected based on
adjusted R2, and the resulting models are presented in the tables below. While these regressions
provide some explanatory power, a major issue is that their residuals exhibit autocorrelation, which
violates the assumptions of ordinary least squares and undermines stationarity. The next step is
therefore to examine how this problem can be addressed and why more advanced time series models
are needed.
Regression DW Before DW After
priceUSD ∼ di f f icult y + transaction f eesUSD 0.04 1.50
log( priceUSD) ∼ log(hashrate) + log(di f f iculty)
+ log(transaction f eesUSD) 0.09 0.99
Δ log( priceUSD) ∼ Δ log(transaction f eesUSD) 1.56 1.90
Table 2: Durbin–Watson statistics before and after Cochrane–Orcutt correction for selected regression models.
The Cochrane–Orcutt procedure corrects for autocorrelation in Table 2 by transforming the
regression model so that the error terms no longer depend strongly on their past values. In practice,
this adjustment moves the Durbin–Watson statistic much closer to the desired value of 2, with the
best model reaching 1.90, which indicates that residual autocorrelation has been largely removed.
However, this approach only patches the problem rather than fully modeling the time-dependent
structure of the data, which gives another reason to rely on classical time series models that can
capture autocorrelation and volatility more systematically.
Cointegration tests were also conducted between Bitcoin prices and key blockchain variables
such as hashrate, mining difficulty, and transaction fees. The Johansen procedure suggested
the presence of at least one cointegrating relationship, implying that these variables share some
degree of long-run equilibrium. However, since the focus of this study is on forecasting short
run dynamics using univariate time series methods, cointegration plays only a limited role in the
9

analysis. Nevertheless, the results provide supporting evidence that Bitcoin prices and network
fundamentals are linked over the long run, even though short-run modeling is better addressed by
classical time series approaches.
3.3 Models
3.3.1 ARIMA and SARIMA
Parameter Estimate Std. Error p-value AR(1) -0.1203 0.041 0.004 MA(1) 0.4103 0.040 0.000
Table 3: Coefficient estimates for ARIMA(1,1,1).
In this study, the ARIMA(1,1,1) model was chosen as a baseline because it is a simple
yet flexible specification that combines one autoregressive term, one differencing step to ensure
stationarity, and one moving average term. This structure is widely used in financial time series as it
captures both short-run dependence and shock effects in a parsimonious way. In Table 3, the AR(1)
coefficient of –0.1203 suggests that Bitcoin’s daily price changes show a slight tendency to reverse
direction, meaning an increase on one day is often followed by a small decrease the next, and vice
versa. At the same time, the MA(1) coefficient of 0.4103 indicates that unexpected shocks in price
tend to carry over into the following day in the same direction. Taken together, these results show
that while Bitcoin prices sometimes correct themselves after a change, short-term shocks have a
lingering effect that continues to influence movements from one day to the next.
The AR(1) coefficient of –0.0881 in Table 4 indicates that Bitcoin’s daily price changes have
a slight tendency to reverse direction from one day to the next, although the effect is weak. The
MA(1) coefficient of 0.3811 shows that short-term shocks continue to influence the following day
10

Parameter Estimate Std. Error p-value AR(1) -0.0881 0.043 0.041 MA(1) 0.3811 0.043 0.000 Seasonal AR(7) -0.0090 0.014 0.521 Seasonal MA(7) -0.9949 0.007 0.000
Table 4: Coefficient estimates for SARIMA(1,1,1)(1,1,1,7).
in the same direction, similar to the ARIMA results. The seasonal AR(7) term is very close to zero
and not statistically significant, suggesting that weekly price changes do not strongly depend on the
previous week’s values. However, the seasonal MA(7) coefficient of –0.9949 is highly significant,
implying that unexpected shocks in one week are almost completely offset by opposite shocks in the
following week. Taken together, these results suggest that while day-to-day dynamics are similar
to the ARIMA model, the main seasonal pattern is not in the prices themselves but in how shocks
are corrected over weekly cycles.
3.3.2 GARCH and EGARCH
Parameter Estimate
ω 2.7147 × 10−5 α1 0.2000 β1 0.7800 α1 + β1 0.9800
Table 5: Estimated parameters of the GARCH(1,1) volatility equation.
In Table 5, the parameter ω = 2.7147 × 10−5 represents the long-run average volatility of
Bitcoin returns. Although the value is small, it serves as the baseline level around which volatility
fluctuates. The coefficient α1 = 0.2000 shows that short-term shocks, such as sudden price jumps
or drops, have an immediate and meaningful effect on volatility. The coefficient β1 = 0.7800
indicates strong persistence, meaning periods of high volatility tend to be followed by more high
volatility, and calm periods by more calm periods. Together, α1 + β1 = 0.98 is very close to 1,
11

which confirms that Bitcoin returns exhibit strong volatility clustering—large price swings are not
isolated events but tend to come in waves, a common feature in financial markets.
log(σ2
t ) = ω + β1 log(σ2
t−1) + α1
| εt −1 |
σt−1
−
√︂
2
π
!
+ γ1
εt−1
σt−1
(2)
Parameter Estimate ω −0.6317 α1 0.4407 β1 0.9054 γ1 (negative, captures asymmetry)
Table 6: Estimated parameters of the EGARCH(1,1) volatility equation.
Equation (2) specifies the EGARCH(1,1) model, which allows volatility to respond asymmet
rically to positive and negative shocks. The parameter estimates are reported in Table 6. The
intercept ω = −0.6317 is negative, which is typical in EGARCH since the equation is expressed in
logarithmic form. The coefficient α1 = 0.4407 indicates that short-run shocks have a substantial
impact on volatility, capturing the immediate effect of sudden price movements. The persistence
parameter β1 = 0.9054 is very close to one, showing that volatility is highly persistent and that
periods of high or low volatility tend to last over time. Finally, the asymmetry parameter γ1 is
negative, which means that negative shocks or bad news increase volatility more than positive
shocks of the same size. This asymmetric response is a realistic feature of financial data, especially
in cryptocurrency markets where downturns are often accompanied by heightened uncertainty and
larger swings in price.
12

3.4 Evaluation Metrics
Model MAE RMSE ARIMA(1,1,1) 0.1366 0.1634 SARIMA(1,1,1)(1,1,1,7) 0.2635 0.3228
Table 7: Forecast accuracy metrics for ARIMA and SARIMA.
Between the two models in Table 7, ARIMA(1,1,1) performed better with lower MAE and
RMSE values, showing that a simpler specification captured the short-run dynamics of Bitcoin
more effectively than SARIMA. The SARIMA process added a seasonal component to account for
weekly cycles, and the weekly period was found to be the best choice compared to biweekly or
monthly alternatives. Longer seasonal periods of 30 days or more were not only less accurate but
also computationally intensive, making the weekly model the most practical among the seasonal
options.
Model AIC BIC
GARCH(1,1) -9347.49 -9324.74 EGARCH(1,1) -9368.50 -9345.74
Table 8: Model selection criteria for GARCH and EGARCH.
Table 8 shows that the EGARCH(1,1) model achieves lower AIC and BIC values compared
to GARCH(1,1), indicating a better overall fit. This suggests that allowing for asymmetric effects
in volatility provides a more accurate description of Bitcoin’s return dynamics. In particular,
EGARCH captures the fact that negative shocks tend to increase volatility more than positive
shocks, a pattern consistent with financial and cryptocurrency markets. By contrast, the inclusion
of seasonal terms in SARIMA may have overfit noise, reducing forecast accuracy.
13

4 Results
Figure 5: Actual vs forecasted volatility using EGARCH(1,1).
Figure 5 presents the one-step-ahead volatility forecasts from the EGARCH(1,1) model com
pared to the actual absolute returns. At the start of the test period, the forecasts appear somewhat
rough, but the model quickly adjusts and begins to track the overall volatility dynamics more
closely. The forecasted volatility rises during turbulent periods and falls during calmer ones, which
is consistent with expectations from an EGARCH specification. While the model does not fully
capture the largest spikes in returns, this is normal since GARCH-type models are designed to
smooth volatility rather than replicate every extreme jump. Overall, the forecasts reflect the clus
tering and persistence of volatility in Bitcoin returns, providing a reasonable fit for the purpose of
this analysis.
14

Figure 6: Actual vs Forecasted Log-Price using ARIMA(1,1,1).
As shown in Figure 6, the ARIMA(1,1,1) model captures the dynamics of the Bitcoin log-price
reasonably well. The forecasted values (red line) track the actual log-prices (blue line) closely,
especially in capturing both upward and downward trends. While the model smooths out sudden
jumps and extreme volatility, a common limitation of ARIMA models, it is effective in modeling
the gradual changes and short-term dependencies of the data. Overall, the forecast demonstrates
that ARIMA(1,1,1) provides a strong approximation of Bitcoin’s log-price movements, offering
useful insights into its short-term behavior.
5 Conclusion
This study evaluated the performance of classical time series models in forecasting Bitcoin
prices by applying ARIMA, SARIMA, GARCH, and EGARCH to daily data. Each model was
trained on the first 90% of the dataset and tested on the final 10%, allowing for a clear assessment of
out of sample predictive accuracy. The results showed that ARIMA(1,1,1) provided the strongest
15

forecasts for short term log price dynamics, outperforming SARIMA in terms of MAE and RMSE,
while SARIMA’s seasonal terms did not deliver notable improvements. On the volatility side,
the EGARCH(1,1) model achieved the best fit, as reflected in lower information criteria values
compared to the basic GARCH model, and successfully captured the asymmetric response of
volatility to negative and positive shocks. These findings highlight that even simple and well
established statistical models can capture meaningful features of Bitcoin’s behavior, including both
price dynamics and volatility clustering.
At the same time, the analysis revealed the limitations of these methods. ARIMA forecasts
tended to smooth extreme price jumps, and GARCH models, while effective at modeling volatility
persistence, were less able to fully reflect sudden spikes in risk. This underlines the challenge of
forecasting an asset as volatile and rapidly evolving as Bitcoin. Nevertheless, the study demonstrates
that classical models remain useful for short run forecasting and provide a strong foundation for
further research. Future studies may build on these results by incorporating machine learning
techniques or by extending the analysis to include macroeconomic and blockchain variables. While
no model can perfectly predict Bitcoin, continued investigation will help move closer to more
reliable forecasting strategies for highly volatile financial assets.
16

References
Pichl, L., & Kaizoji, T. (2017). Volatility analysis of Bitcoin price time series. Quantitative
Finance and Economics, 1(4), 474–485. https://doi.org/10.3934/QFE.2017.4.474
Yenido ̆gan, I ̇.,  ̧Cayir, A., Kozan, O., Da ̆g, T., & Arslan, C ̧ . (2018, September). Bitcoin fore
casting using ARIMA and PROPHET. In 2018 3rd International Conference on Computer Science
and Engineering (UBMK) (pp. 621–624). IEEE. https://doi.org/10.1109/UBMK.2018.8566413
Mudassir, M., Bennbaia, S., Unal, D., & Hammoudeh, M. (2020). Time-series forecasting of
Bitcoin prices using high-dimensional features: A machine learning approach. Neural Computing
and Applications, 33(15), 9155–9177. https://doi.org/10.1007/s00521-020-05129-6
17

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:50.116Z
- **Text Length:** 24068 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
