# PDF Document: Maciejowska et al. - 2025 - Statistical and economic evaluation of forecasts in electricity markets beyond RMSE and MAE.pdf

**File Path:** Maciejowska et al. - 2025 - Statistical and economic evaluation of forecasts in electricity markets beyond RMSE and MAE.pdf

**Processed Date:** 2026-02-10T18:15:06.545Z

**File Size:** 1700.31 KB

**Total Pages:** 21

**Extracted Pages:** 21

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3512

**Title:** Statistical and economic evaluation of forecasts in electricity markets: beyond RMSE and MAE

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Statistical and economic evaluation of forecasts in electricity
markets: beyond RMSE and MAE
Katarzyna Maciejowskaa, Arkadiusz Lipieckib, Bartosz Uniejewskia,∗
Wrocław University of Science and Technology, Poland
aDepartment of Operations Research and Business Intelligence bDepartment of Computational Social Science
Abstract
In recent years, a rapid development of forecasting methods has led to an increase in the accuracy of predictions. In the literature, forecasts are typically evaluated using metrics such as Root Mean Squared Error (RMSE) and Mean Absolute Error (MAE). While appropriate for statistical assessment, these measures do not adequately reflect the economic value of forecasts. This study addresses the decision-making problem faced by a battery energy storage system, which must determine optimal charging a-
nd discharging times based on day-ahead electricity price forecasts. To explore the relationship between forecast accuracy and economic value, we generate a pool of 192 forecasts. These are evaluated using seven statistical metrics that go beyond RMSE and MAE, capturing various characteristics of the predictions and associated errors. We calculate the dynamic correlation between the statistical measures and gained profits to reveal that both RMSE and MAE are only weakly correlated with revenue. In-
 contrast, measures that assess the alignment between predicted and actual daily price curves have a stronger relationship with profitability and are thus more effective for selecting optimal forecasts.
Keywords: Battery Energy Storage Systems, Electricity Price Forecasting, Forecast evaluation, Power Market, Trading Strategy
∗Corresponding author: Bartosz Uniejewski
Email addresses: katarzyna.maciejowska@pwr.edu.pl (Katarzyna Maciejowska), arkadiusz.lipiecki@pwr.edu.pl (Arkadiusz Lipiecki), bartosz.uniejewski@pwr.edu.pl (Bartosz Uniejewski)
arXiv:2511.13616v1 [q-fin.CP] 17 Nov 2025

Glossary
DFL Decision-Focused Learning ARX AutoRegressive model with eXogenous variables NARX Nonlinear AutoRegressive model with eXogenous variables LEAR LASSO-Estimated AutoRegressive model BESS Battery Energy Storage Systems RES Renewable Energy Sources DA Day-Ahead electricity market VST Variance Stabilizing Transformations E Battery energy capacity (MWh) Pow Battery power rating (MW) B Length of a charging block (hour) ηch Charging efficiency (%) ηdis Discharging efficiency (%) C Operating costs (EUR/-
MWh) RMSE Root Mean Square Error MAE Mean Absolute Error Cov-e Logarithm of a determinant of the covariance matrix of forecast errors Corr-f Average correlation between the observations and forecasts MHD Min-Max Hour Deviation MPD Min-Max Price Deviation
1. Introduction
Forecasting electricity prices is vital for the efficient functioning of modern energy markets. For producers, accurate forecasts support generation planning and trading strategies, while large consumers use them to optimize energy use and reduce costs. Methods range from simple regression and time-series models to advanced approaches such as decision trees and neural networks, often enhanced through combination or reconciliation techniques to improve accuracy and preserve data structure. Despite -
this variety, it remains unclear which forecasts deliver the greatest value for decision support. Forecast selection is commonly based on statistical accuracy measures such as Root Mean Square Error (RMSE) or Mean Absolute Error (MAE). Yet, studies show that higher accuracy does not always imply greater economic value (see [1, 2, 3, 4] among others). A key reason is the symmetry of conventional accuracy metrics, which fails to reflect the asymmetric costs of overversus under-prediction [5, 6, 7, 8-
]. To bridge this gap, decision-focused learning (DFL) incorporates cost or profit functions directly into estimation [9, 10, 4]. While value-oriented methods can offer advantages in practical applications, they also present a notable drawback: the resulting point forecasts often lack interpretability. Unlike RMSE- and MAE-based predictions (corresponding to the mean and median, respectively), the minimizer of a cost-oriented loss may not be intuitive [4]. Moreover, as noted by [10], some DFL meth-
ods yield lower economic value than traditional approaches and require substantially greater computational effort. In practice, many firms cannot adopt DFL because they rely on third-party forecasts and cannot
2

alter the prediction process. These forecasts also serve multiple departments – generation, trading, risk management – each with distinct objectives and cost structures, making a single cost function unsuitable. Furthermore, predictions are often utilized as inputs to decision-oriented optimization algorithms [? ? ]. Instead of calibration, firms often focus on selecting the most useful forecasts based on appropriate evaluation metrics. As noted by [11], forecasts can be assessed from three disti-
nct perspectives: consistency (the alignment between forecasters’ judgments and their forecasts), quality (the agreement between forecasts and actual outcomes), and value (the practical benefits gained from using the forecasts). The lack of a monotonic relationship between forecast quality and value can be attributed to the fact that certain forecast characteristics – those that influence decision-making – are often overlooked in conventional evaluation metrics. Forecast verification tends to emph-
asize statistical accuracy while neglecting other important dimensions, such as association, that may better reflect the forecast’s utility in a real-world context. This study analyzes the relationship between forecast quality and economic value in energy markets, focusing on the operation of Battery Energy Storage Systems (BESS). BESS enhance grid reliability and energy management by storing surplus renewable generation and discharging when supply is scarce or prices are high. This flexibility st-
abilizes prices, reduces renewable curtailment, and limits reliance on costly peaking plants. BESS revenues stem from energy arbitrage – optimizing charge and discharge decisions based on predicted price patterns [? ] – as well as participation in ancillary service markets, including frequency regulation and voltage support [12]. To capture forecast properties relevant for BESS arbitrage, we construct a pool of 192 hourly day-ahead price forecasts. These include predictions from three common model-
 types: AutoRegressive with eXogenous variables (ARX), its nonlinear variant based on artificial neural networks (NARX), and the regularized LASSO-Estimated AutoRegressive model (LEAR). The pool is further diversified through variations in model specifications, variance-stabilizing transformations, estimator types, and calibration window sizes. Forecast quality is then described by seven measures covering accuracy, error dispersion, association between predicted and actual prices, and the ability -
to correctly identify daily minimum and maximum hours. Finally, we relate these metrics to the economic value of forecasts, measured by profits from two exemplary BESS systems. The results provide new insights into the link between quality and value. Traditional accuracy measures are only weakly correlated with BESS profits, echoing [2], who showed that such metrics are poor indicators of practical utility. In contrast, dispersion- and association-based measures better capture how closely forecast-
s follow the shape of the daily price curve and, consequently, how effectively they identify profitable charging and discharging moments. Thus, restricting evaluation to accuracy alone limits the ability to select valuable models, while incorporating alternative metrics improves forecast selection and enhances BESS profitability. The paper is structured as follows. In Section 2, we present and describe the dataset; in Section 3, we explain the forecasting models applied in this study. Then, in Sec-
tion 4, we lay out the methodology for evaluating the forecasts, both in terms of economic values and statistical accuracy. Next, in Section 5, we present and discuss the empirical results of our forecasting and trading exercises. Finally, in Section 6, we summarize the main results and provide recommendations for forecasters aiming to capture profits in day-ahead electricity markets.
3

Figure 1: EPEX SPOT hourly day-ahead electricity prices (top), hourly day-ahead system load forecasts (upper middle), renewable generation from solar and wind sources (lower middle), and commodity prices are shown for the period from 2.1.2016 to 31.12.2024. The vertical dashed line marks the end of the 1460-day calibration window for the forecasting models and the beginning of the 2199-day out-of-sample test period.
2. Data
To examine the link between statistical forecast quality and economic value, we use the German electricity market—one of Europe’s largest and most active—as a case study. Specifically, we assess how day-ahead electricity price forecasts influence the profitability of a battery energy storage system (BESS) engaged in daily arbitrage. Our dataset combines key drivers of electricity prices and market behavior. The core series is the hourly day-ahead price for the Germany–Luxembourg bidding zone (Aust-
ria included until October 2018), sourced from the ENTSO-E transparency platform. To capture supply and demand fundamentals, we add ENTSO-E day-ahead forecasts of system load, solar generation, and aggregated wind generation (onshore and offshore), with solar and wind combined into a single renewable generation series. Broader market influences are represented by commodity futures prices for coal (API2), natural gas (TTF), crude oil (Brent), and EU emission allowances (EUA), obtained from Investin-
g.com. All series cover 2.1.2016–31.12.2024, with a five-year out-of-sample period starting 1.1.2020 (see Figure 1). Data were preprocessed for temporal and structural consistency. Variables originally reported at 15-minute resolution (e.g., load and renewables) were aggregated to hourly frequency. Daylight saving time transitions were also adjusted: missing values during the spring shift to CEST were imputed by averaging adjacent hours, while duplicated hours during the autumn return to CET were -
replaced with their mean.
4

3. Forecasting electricity prices
3.1. ARX model
In this research, we use the Autoregressive Model with Exogenous variables (ARX) popular in the EPF literature [13, 14, 15]. Since in the DA market, all prices are set at the same time via a simultaneous auction, the data does not have a typical time-series structure and therefore each hour is modeled separately. Let us denote by Yt,h the dependent variable on day t and at hour h, which differs across model specifications. We adopt the following structure:
Yt,h = Dtαh + X
p∈{1,2,7}
Yt−p,hρp,h + X(1)
t β1,h + X(2)
t,h β2,h + εt,h, (1)
where Dt is a (1 × 3) vector of deterministic variables that includes a constant and dummies for Weekends and Mondays. The variable Yt−p,h is a lagged endogenous variable at hour h from p-days
ago, and X(1)
t , X(2)
t,h are vectors of exogenous variables. X(1)
t is a (1 × 9) vector that summarizes information common to all hourly contracts:
• information on previous day prices: minh(Pt−1,h), maxh(Pt−1,h), P ̄ t−1
• information on the average forecasted level of RES and Load: RE ̄ S t and L ̄t
• fuel and CO2 allowance prices from day t − 2: gas (Gt−2), oil (Oilt−2), coal (Ct−2) and EUA (EU At−2).
The vector X(2)
t,h consists of information characteristic for an hour h. It includes information about the TSO predictions of Load and RES generation from the current and previous day: Lt,h, RES t,h, Lt−1,h, RES t−1,h. The selection of exogenous variables differs slightly from popular ARX model specification ([15]). The set is extended to accommodate recent results of [16], which show the importance of past information on generation structure in the price forecasting process.
3.1.1. Direct model of hourly prices
ARX model is fitted to the hourly electricity prices:
Pt,h = Dtαh + X
p∈{1,2,7}
Pt−p,hρp,h + X(1)
t β1,h + X(2)
t,h β2,h + εt,h.
The model is characterized by 16 parameters: θh = [α′
h, ρ1,h, ρ2,h, ρ3,h, β′
1,h, β′
2,h]′ and is estimated with the Ordinary Least Squares (OLS) method.
3.1.2. Model of deviation from daily mean
In this research, we consider also an alternative ARX-type model that describes separately the average daily price and the deviation of hourly prices from the daily mean. The approach is divided into two steps: forecasting the daily average (P ̄t) and predicting the deviation from the mean
P ̃ t,h = Pt,h − P ̄ t. (2)
The model for the daily average takes the following form:
P ̄ t = Dtα + X
p∈{1,2,7}
P ̄ t−pρp + X(1)
t β1 + X ̄ (2)
t β2 + εt,
5

where the vector X ̄ (2)
t includes the average daily values of the previous day’s generation structure:
L ̄ t−1, RE ̄ S t−1.
The model for deviation from the mean is designed analogously, but with hour resolution
P ̃ t,h = Dtαh + X
p∈{1,2,7}
P ̃ t−p,hρp,h + X(1)
t,h β1,h + X(2)
t,h β2,h + εt,h,
where the vector X(2)
t,h is the same as in the direct model of hourly prices and includes information on the generation structure from current and previous day: Lt,h, RES t,h, Lt−1,h, RES t−1,h. The final prediction is computed as the sum of forecasts of both components.
3.2. NARX
The relationship between the lagged prices, exogenous variables, and the future price does not need to be linear. To forecast the prices without an explicit assumption about the transformation between the regressors and the target, we resort to artificial neural networks. To ensure that the results of our study are relatable to popular forecasting practices, we employ a shallow network consisting of a single hidden layer of 5 neurons with hyperbolic tangent activation functions, an architecture us-
ed in many previous EPF studies [17, 18, 19]. The model is trained using a Levenberg-Marquardt algorithm [20] with a random 10% of the training window held out for early stopping. To reduce the uncertainty related to parameter estimation, the results presented in the paper correspond to the committee machine approach [17], in which a final prediction is an ensemble average of predictions obtained from ten independently trained neural networks. The regressors, calibration window lengths, and applie-
d variance stabilizing transformations are the same as in the case of ARX models.
3.3. LEAR model
The next model considered is the LASSO-Estimated AutoRegressive (LEAR) model. It employs the Least Absolute Shrinkage and Selection Operator (LASSO) introduced by Tibshirani [21] to automatically select the most relevant predictors for forecasting Yd,h. While numerous regularization techniques have been proposed in the literature, Uniejewski [22] identified LASSO as a particularly parsimonious, robust, and high-performing method in a comprehensive evaluation of electricity price forecasting (EPF) -
models. The LEAR model (both direct and for modeling the deviation from the mean) is designed to capture extensive cross-hour dependencies, enhancing its ability to represent the temporal structure of electricity prices. In contrast to the ARX model defined in Eq. (1), which includes only three autoregressive terms, the LEAR specification expands this component to include past prices from all 24 hours of the previous day, two days prior, and one week prior—replacing three regressors with a total o-
f 72. A similar expansion is applied to the exogenous input vector X(2)
t,h . Instead of four regressors (two each for load and RES day-ahead forecasts), the LEAR model incorporates 96 predictors, capturing values for every hour of both the forecasted day and the previous day. This comprehensive treatment of temporal dependencies makes the LEAR model well-suited for capturing the complex dynamics of electricity price formation. Lastly, the model is expanded to include all seven dummy variables, one for each day of the week.
6

3.4. Model specifications and forecast averaging
To develop our forecasting methodology, we begin with three core model structures: ARX, NARX, and LEAR. Each model is estimated across multiple variants to account for different modeling assumptions and data transformations. These variants differ in the choice of the dependent variable, the level of parameter estimation (either pooled across all hours or separate for each hour, already describe above), the size of the calibration window, and the application of a variance stabilizing transformation-
. The specific choices and their implementation are described in detail in the following sections.
3.4.1. Size of a calibration window
We consider seven estimation window sizes: three long windows (one, two, and four years), a medium window of 182 days, and three short windows of six, twelve, and sixteen weeks. As shown by [23], no single calibration window is universally optimal in electricity markets. Long windows reduce estimator variance and, under stationarity, improve precision. However, structural changes (e.g., rising RES shares) and exogenous shocks (COVID-19, the war in Ukraine) often break stationarity, while price–fun-
damental relationships are frequently nonlinear. In such cases, short windows can be advantageous. Prior studies [18, 24] further suggest that combining forecasts across different window lengths yields the best accuracy.
3.4.2. VST data transformation
Electricity price spikes are typically driven by unpredictable weather conditions, power outages, or transmission failures [25]. These extreme events can significantly distort electricity price forecasts, as outliers tend to pull model coefficients toward values that fit the spikes, often at the expense of forecast accuracy during normal periods. Variance stabilizing transformations (VSTs) aim to reduce the overall variability in the data [26], and less variable—or less spiky—input data generally -
enable forecasting models to produce more accurate predictions [27]. Following the approach of [28], the electricity price and load time series are first standardized by subtracting the sample median a and dividing by the sample median absolute deviation b. The area hyperbolic sine (asinh) transformation is then applied to the standardized data. After forecasting in the transformed space, the inverse transformation and standardization are applied to obtain the final electricity price forecasts.
3.4.3. Heterogeneous vs. pooled estimator
In this research, two types of estimators are considered. Firstly, each hour is modeled and predicted individually, so estimators of θh and θ ̃h change throughout the day. In the remaining part of the article, it is called a heterogeneous estimator as it is able to accommodate differences in price behavior across hours. Next, a pooled estimator is used that assumes that the response of prices to explanatory variables is constant during a day, so θ = θ1 = . . . = θ24. The vector of parameters is es-
timated using market information from all 24 hours at once. It is particularly suitable for short estimation windows as it provides more data to the calibration algorithm. Note that the LEAR model, which incorporates observations for all 24 hours of the day, uses the same set of input variables regardless of the hour being forecasted. As a result, the pooled estimation approach must be supplemented with additional variables that capture hour-specific dynamics. Compared to the heterogeneous estimat-
ion (which estimates separate models for each hour), the pooled model is augmented with seven additional regressors: electricity prices lagged by 24, 48, and 168 hours, and load and RES forecasts lagged by 0 and 24 hours.
7

3.4.4. Forecast averaging
Forecast averaging is a very powerful post-processing method that improves the accuracy of predictions [29, 30, 31]. In the energy price forecasting literature, many different approaches have been discussed. In [32, 33] authors combine predictions obtained with different models, in [24] and [18] a single model is used and fitted to calibration windows of different sizes. Finally, [16] computes the average across outcomes of different realizations of neural networks. Here, we adopt the second appro-
ach and include in the pool of predictions averages of forecasts over different sizes of estimation windows.
3.4.5. Summary
For each hour in the evaluation period, we prepare a pool of predictions that come from different models, model specifications, and forecast averaging. There are three models (ARX, NARX, LEAR) and eight model specifications that differ in terms of the dependent variable (models of hourly prices, Pt,h, or deviation from the daily mean, P ̃t,h), VST transformation, and type of estimator (heterogeneous, pooled). Finally, parameters of each model are estimated with data belonging to windows of differe-
nt lengths: 56, 84, 112, 182, 365, 730, and 1460 days. In this research, we consider four different pools of predictions. The first one is based on the results of ARX models and consists of 56 individual predictions and 8 forecast averages. Hence, it is built up from 64 different predictions. Analogously, pools based on NARX and LEAR models are constructed. Finally, a large pool that consists of predictions obtained with all analyzed models, model specifications and corresponding forecast averages-
 is analyzed. It consists of 192 forecasts and captures the diversity stemming from both, the type of a model and its specification.
4. Forecast evaluation
According to [11], there are three distinct types of forecast goodness: consistency (Correspondence between forecasters’ judgments and forecasts), quality (Correspondence between the forecasts and observations), and value (benefits from using the forecasts). The goal of this research is to evaluate the link between the quality and the value of electricity price point forecasts. The study is based on the analysis of the economic performance of a Battery Storage System (BESS).
4.1. Economic value of forecasts
In order to assess the economic value of predictions, we analyze the performance of a BESS system that places orders in the DA market. Similar to [3], we assume that the BESS system is based on the grid-scale Lithium-ion batteries. The specification of an exemplary BESS is summarized by Table 1 that shows parameter values for two hypothetical systems: BESS-a and BESS-b. Both batteries are assumed to have the same energy capacity of 3 MWh. They differ in terms of the power ratings that are 3 MW and-
 1 MW, for BESS-a and BESS-b respectively. It influences the charging and discharging speed of BESS. The first system needs one hour, whereas the second one requires three hours to fully charge or discharge. The operating costs and battery efficiency are taken after [3]. It is assumed that BESS earns income from the arbitrage in DA market. It aims at buying energy in periods of low prices and selling at hours of high prices. In order to plan the operation, BESS needs to choose one day ahead when t-
o trade the electricity. In this analysis, it is assumed that the charging or discharging is processed in consecutive hours (blocks of 1-3 hours). The hours are
8

Table 1: Specification of BESS
BESS-a BESS-b Unit Energy capacity E 3 3 MWh Power rating Pow 3 1 MW Charging block B 1 3 hour Charging efficiency ηch 98 98 % Discharging efficiency ηdis 97 97 % Operating costs C 11.63 11.63 EUR/MWh
selected using the forecast of DA prices. Let us denote by hch and hdis the selected first hour of charging and discharging blocks, respectively. Then the profit earned on the day t can be calculated as
πE
t = ηdis
B−1
X
i=0
Powdis
i+hdis Pt,i+hdis − 1
ηch
B−1
X
i=0
Powch
i+hch Pt,i+hch − 2CE, (3)
where Powch
h and Powdis
h is power charged and discharged within a particular hour, and B is the length of a charging block. Notice that due to the BESS specification, following constraints need to be satisfied Powch
h ≤ Pow, Powdis
h ≤ Pow and
B−1
X
i=0
Powch
h+i ≤ E,
B−1
X
i=0
Powdis
h+i ≤ E.
Finally, it is assumed that the battery runs a full cycle within a day; hence, no extra energy is carried over night to be used the next day. Additionally, since the level of profits depends on the energy capacity of the battery, in the following part of the article, we report a profit per 1 MWh of trade, which is calculated as πt = πE
t /E.
4.2. Quality of forecasts
In the literature, the quality of electricity price forecasts is typically described by metrics that focus on forecast accuracy such as Root Mean Squared Errors (RMSE) or Mean Absolute Errors (MAE). They are based on forecast errors of predictions from individual hours, et,h = Pt,h − Pˆt,h. In order to obtain a single measure that describes the performance across 24 hours, results are usually combined into daily quantities. Let us denote by et = [et,1, . . . , et,24] a (1 × 24) vector of forecast -
errors on day t. Then
RMSE =
vt 1
24T
T X
t=1
||et||2
2 , MAE = 1
24T
T X
t=1
||et||1
These two traditional accuracy metrics indicate the average discrepancy between predicted and actual values. They are commonly used because they align with widely adopted loss functions in model calibration. For instance, RMSE corresponds to the loss function associated with the Least Squares estimation method, while MAE aligns with the loss function in quantile regression (specifically for estimating the median). Despite their popularity, accuracy metrics capture only a narrow dimension of foreca-
st performance. Fig. 2 illustrates this with two day-ahead forecasts that achieve identical values (RMSE =
9

Figure 2: Examples of DA price forecasts. Setup 1 (left panel): forecasts with low dispersion and high association, leading to π(1) = 24.68 EUR profit. Setup 2 (right panel): forecasts with high dispersion and low association, leading to π(2) = 0.16 EUR profit. Both predictions are characterized by the same RMSE and MAE values.
10, MAE = 9) but lead to very different profits: π(1) = 24.68 in the first panel versus π(2) = 0.16 in the second. From a battery owner’s perspective, their economic value is therefore fundamentally different. The forecasts in Fig. 2 differ markedly. While their errors have similar magnitudes, their variability is not. The left panel tracks the daily pattern of day-ahead (DA) prices more closely than the right, making it more useful for identifying optimal charging and discharging hours. To captur-
e such differences, we introduce three additional classes of metrics: those assessing forecast error variability, the association between forecasts and actual prices, and the ability to correctly identify the daily minimum and maximum price hours.
4.2.1. Dispersion measures
Dispersion measures show how diversified the forecast errors are within a day. If all errors share the same sign, as illustrated in Fig. 2, the predictions might not be precise, yet they are closely related to actual values. At an extreme, when errors are uniform, predictions can be simply viewed as shifted true observations. Although not accurate, such forecasts may be highly beneficial in determining the optimal time for charging and discharging BESS. In this research, we measure the dispersion -
using the variance-covariance matrix of forecast errors. It is calculated as Cov-e = log det ˆΣ,
where
Σˆ = 1
T
T X
t=1
e′
t et.
Notice that if the predictions Pˆt,h are unbiased and forecast errors have zero expected value, then ˆΣ is a consistent estimator of the errors’ variance-covariance matrix. Moreover, Cov-e decreases as forecast errors decline and as the correlation between errors increases. Thus, it reflects not only the dispersion but also, to some extent, the overall forecast accuracy.
10

4.2.2. Association measure
According to [11], the association is the relationship between individual pairs of forecasts and observations. For instance, the daily price curve in left panel in Fig. 2 more closely mirrors the actual price fluctuation pattern compared to the curve shown in right panel in Fig. 2. In this analysis, it is measured as the average correlation between actual and predicted electricity prices. It is computed as follows
Corr-f = 1
T
T X
t=1
ρ(Pt, Pˆ t),
where Pt and Pˆt are (1 × 24) vectors of electricity prices and their forecasts on day t and ρ(.) is the Spearman correlation coefficient.
4.2.3. Selection of an hour of the minimum and maximum price
The final two measures capture forecast properties directly relevant for BESS operation: the
correct identification of daily minimum and maximum price hours using point forecasts Pˆt. Let
ˆh(min)
t and ˆh(max)
t denote the forecasted hours of the lowest and highest prices on day t, and h(min)
t,
h(max)
t their actual counterparts from observed prices Pt. The first measure, the Min-Max Hour Deviation (MHD), computes the average absolute difference between forecasted and actual hours:
MHD = 1
T
T X
t=1
|h(min)
t − ˆh(min)
t | + |h(max)
t − ˆh(max)
t |.
From the perspective of BESS, the incorrect selection of the moment of charging or discharging has a significant impact on income only when there are substantial differences of prices in actual and the predicted hours. Therefore, we propose a second measure, based on the difference between the real maximum/minimum of price and the maximum/minimum indicated by forecasts called Min-Max Price Deviation (MPD):
MPD = 1
T
T X
t=1
|Pt,h(min)
t
− Pt,ˆht(min) | + |Pt,h(max)
t
− Pt,ˆh(max)
t
|.
Since Pt,h(max)
t
≥ Pt,h(min)
t and Pt,h(min)
t
≤ Pt,h(max)
t , MPD can be interpreted as the average deviation in
daily price spreads. It is closely related to profit loss from misidentifying charging and discharging hours, though not identical. MPD ignores storage inefficiencies and does not capture the broader dependence of profits on multiple hours for systems with a C-rating E/Pow < 1. Thus, while strongly correlated with income, MPD does not measure profit loss directly. A related concept was introduced by [34], who proposed d-RMSE, based on the difference between actual peak demand and demand at the pre-
dicted peak hour. Unlike d-RMSE, MPD uses absolute errors instead of squared errors, directly reflecting lost profits from misidentifying daily extrema, and jointly evaluates both peak and trough values. In Fig. 2, red and green bars indicate the charging and discharging hours, respectively. To assess the accuracy of hour selection, full bars represent hours chosen using actual prices, while empty bars correspond to those selected based on forecasts. The height of the bars indicates the actual pri-
ce at the selected hour. It is evident that neither forecast perfectly identifies the optimal charging and discharging times. When examining the deviation from the optimal hours, the first
11

set of predictions shows greater discrepancies: MHD(1) = 6.5 whereas MHD(2) = 1.5. Since the profit depends on the level of prices more than on the time of trade, we calculate also the second measure: MPD(1) = 0.91 and MPD(2) = 13.50 for the first and second panels, respectively. The results indicate that the second approach aligns more closely with actual profits, making it a more appropriate choice for forecast evaluation.
5. Empirical results
5.1. Profits
Let us first analyze the level of profits across the years. The BESS income depends on the price spread within a day and the ability to select the charging and discharging hours, which in turn builds upon the quality of forecasts. In order to disentangle these two features, we calculate first the profits of a BESS under the assumption of known future prices. The outcomes are called Oracle and are presented in the first column of Table 2. Next, we consider the income of a storage utility that uses -
imperfect forecasts from the pool in its decision process. Table 2 presents descriptive statistics of profits per 1 MWh of traded electricity.
Table 2: Average daily profit per 1 MWh of traded electricity: descriptive statistics
Year Oracle Max Min Mean Std BESS-a 2020 6.23 4.32 0.45 3.38 0.80 2021 47.43 43.57 33.63 40.62 2.16 2022 143.18 134.05 115.52 129.45 3.97 2023 65.44 60.22 52.32 58.31 1.80 2024 109.05 102.57 83.38 94.37 3.81 BESS-b 2020 1.70 0.67 -1.73 0.24 0.36 2021 38.38 35.97 31.59 34.40 1.07 2022 122.98 117.25 107.89 114.91 2.12 2023 52.91 50.29 45.25 48.81 1.03 2024 86.33 81.00 71.74 77.56 1.58
For both systems, BESS-a and BESS-b, the findings indicate a strong correlation between profit levels and general electricity prices. In 2020, with relatively low prices, storage utilities found it difficult to generate any profit. In a case of known prices, BESS-a achieved 6.23 EUR/MWh, whereas BESS-b managed only 1.70 EUR/MWh. The average income level is even lower when the imperfect forecasts are used. In such a case, the average earnings decreased to 3.38 EUR/MWh and 0.24 EUR/MWh, respectively-
. On the contrary, in 2022 when the electricity prices reached their peak, the Oracle profits jumped to 143.18 EUR/MWh for the BESS-a system. Furthermore, when evaluating both types of systems, it’s apparent that BESS-a generates greater profits compared to BESS-b. When the battery can be charged or discharged within one hour, it allows for achieving a lower buy- and higher sell price. Hence, the profits of Oracle and the average income of the pool decrease together with the battery power rating. -
Finally, one could observe significant discrepancies between the highest and the lowest profits in the pool. In year 2020, the most profitable forecasts brought income higher by 3.87 EUR/MWh than
12

the worst ones. In the following years, this gap for BESS-a widened, reaching 18.53 EUR/MWh and 19.19 EUR/MWh in 2022 and 2024, respectively. In these two years, the additional earnings represented between 16-23% of the minimum income. The outcomes for BESS-b exhibit the same pattern, highlighting the critical role of accurate forecast selection in the BESS decision-making.
5.2. Forecast evaluation and its relationship to profits
As demonstrated earlier, the selection of predictions used in the decision-making process significantly influences the profitability of BESS. This choice can be based on traditional accuracy metrics, such as RMSE and MAE, or other measures associated with the behavior of forecast errors (Cov-e) or the association between the predictions and true values (Corr-f). In this section, the relationship between measures of forecast quality and battery profits is evaluated. It can be noticed that using ind-
ividual predictions, we can calculate both the income level and a measure value. Hence, there are 192 (for a big pool) or 64 (for model-based pools) pairs of values that describe the outcomes. Using this information, we calculate the Spearman correlation, which is robust to outliers and any monotonic transformation of data. In Table 3, correlation coefficients between forecast quality measures and the average level of profits calculated for the whole evaluation period are presented. The first bloc-
k of outcomes shows the results for BESS-a, whereas the second block represents BESS-b. The results are displayed for three sub-pools and for a big pool separately. The findings indicate that all correlations, apart from Corr-f, are negative. This implies that an increase in, for instance, Cov-e, is associated with a reduction in profits. Unlike other metrics, Corr-f is interpreted positively, meaning that a higher value of this measure corresponds to a greater income.
Table 3: The absolute value of an average Spearman correlation coefficient between profits and forecast quality measures; rolling window of 365 days
Measure ARX NARX LEAR All BESS-a RMSE -0.401 -0.277 -0.060 -0.169 MAE -0.378 -0.377 -0.002 -0.172 Cov-e -0.728 -0.861 -0.739 -0.780 Corr-f 0.896 0.843 0.865 0.802 MHD -0.820 -0.791 0.794 -0.755 MPD -0.969 -0.965 -0.962 -0.964 BESS-b RMSE -0.473 -0.344 -0.192 -0.347 MAE -0.453 -0.446 -0.138 -0.372 Cov-e -0.712 -0.756 -0.671 -0.641 Corr-f 0.903 0.861 0.909 0.886 MHD -0.836 0.786 -0.841 -0.835 MPD -0.927 -0.851 -0.915 -0.897
Because the sign of the correlation coefficient varies across measures, we refer to its absolute value when comparing the strength of correlations in the following sections of the article. Let us first analyze the results for BESS-a system and the big pool of forecasts. It becomes evident that widely used accuracy metrics, such as RMSE and MAE, show weak correlation with
13

profits, with the absolute correlation coefficient being less, in absolute terms, than 0.20. At the same time, correlation with dispersion and association measures approaches 0.80. This highlights a substantial difference between these evaluation methods. The performance of Corr-f measure, which shows how well the forecasts reflect the within-day fluctuations of electricity prices, is worth emphasizing. The value of the correlation between Corr-f and average profits reaches 0.802. When examining -
small model-based pools, becomes evident that while the overall correlation pattern is similar across pools, the strength of the correlation varies. The highest correlation is observed for the ARX and NARX models, which, notably, generate the most diverse set of predictions. For NARX, the correlation coefficient ranges from 0.27 to 0.97. In contrast, the weakest association is found with the LEAR models, where the correlation between RMSE or MAE and profits is nearly zero. The results for BESS-b c-
losely resemble those of BESS-a. Traditional accuracy metrics, such as RMSE and MAE, show only a weak correlation with profits; however, this relationship is slightly stronger compared to BESS-a. The overall outcomes suggest that the decision-making process in BESS-b is more complex than in BESS-a case. As a result, the financial performance of BESS-b is more dependent on accurately capturing the shape of the daily price curve – an aspect measured by Corr-f. Finally, we examine the correlation bet-
ween profits and two specialized measures designed to assess the accuracy of selecting the minimum and maximum price hours within a day: MHD and MPD. The MHD metric penalizes deviations from the optimal charging and discharging hours. While it ranks among the better-performing indicators, its correlation with profits is weaker than that of Corr-f and comparable to Cov-e. In contrast, MPD demonstrates a significantly stronger relationship with profits, showing an average correlation of 0.96 for BES-
S-a and 0.90 for BESS-b. Unlike MHD, which measures time-based discrepancies, MPD assesses the difference of electricity prices between the selected and optimal hours. Given that profits are directly tied to price differences – and that the daily price curve often exhibits a "duck" shape – MPD proves to be a more effective performance metric than MHD. A more detailed illustration of the relationship between forecast quality measures and profitability is presented in Fig. 3. The figure depicts scat-
ter plots of average daily income per 1 MWh of trade (π) against various forecast evaluation metrics for the BESS-a energy storage system. In these plots, colors denote different models (blue - ARX, red - NARX, green - LEAR), shapes indicate the estimator type and model specification, and marker size reflects the length of the calibration window. Finally, a cross indicates the average of forecasts across different estimation windows. The results confirm earlier findings of a weak correlation betwe-
en RMSE/MAE and profits (top row, Fig. 3). The scatter plots form diffuse clouds with no clear monotonic relationship, with one noticeable feature: a cluster of red points corresponding to NARX models. These results indicate that NARX provides the most accurate forecasts; however, its associated income is comparable to – or in some cases lower than – that of alternative models. In contrast, the Cov-e and Corr-f measures (middle row, Fig. 3) demonstrate a substantially stronger and nearly linear re-
lationship with income. For the Corr-f metric in particular, outcomes cluster distinctly by model, with LEAR consistently yielding the highest profits. Finally, when comparing model specifications, the pooled estimator consistently outperforms the heterogeneous estimator, generating forecasts that achieve both high predictive accuracy and strong profitability.
14

Figure 3: Scatter plots of average daily profits for the BESS-a energy storage calculated for the entire testing set with respect to different error measures.
5.2.1. Time evolution of correlation
To account for changes in correlation over time, a rolling window method is applied. The process begins by selecting the initial 365 days in the evaluation window. Within this set, the average profit is computed along with six different forecast quality metrics and their corresponding corre
15

BESS-a
BESS-b
Figure 4: Spearman correlation between forecast quality measures and profits for the BESS-a (top panel) and BESS-b (bottom panel) energy storage. The grey line marks the average daily price of electricity.
lation coefficients. Next, the window is shifted by one day, and the whole procedure is repeated. The time evolution of the resulting correlation coefficients is illustrated in Fig. 4 for BESS-a (upper panel) and BESS-b (lower panel), respectively. For visualization purposes, the coefficients of all metrics except Corr-f are multiplied by –1. The results reveal a clear downward trend in the correlation between RMSE or MAE and profits. Not only is the relationship between these traditional accuracy-
 measures and income the weakest overall, but it also deteriorates over time. At the start of the evaluation period, which includes data from 2020, the correlation between MAE and profit oscillated around -0.45. By 2021, it drops for BESS-a to around -0.06, and in the final two years, it fluctuates between -0.24 and 0.12. RMSE exhibits a similar trend, with a noticeable decline in correlation over the years. This progression supports earlier conclusions that RMSE and MAE are poor indicators of pro-
fitability. When examining the performance of a measure that captures error dispersion, several similar patterns emerge. The correlation between profits and Cov-e declined in absolute terms as electricity prices began to rise in 2021. Subsequently, these correlations recovered, even slightly surpassing their initial levels. For the BESS-a specification, the strength of correlation remained relatively strong, whereas for the BESS-b specification, it fluctuates and declines slightly over time. In co-
ntrast to the accuracy and dispersion measures, the performance of the association measure
16

remains stable over most of the evaluation period, oscillating around the average value reported in Table 3. Only from 2023H2 the correlation between Corr-f and profits starts to fall below 0.75. On the plot it is visible as a drop in rolling correlation in 2024H2. This weakening is particularly pronounced for BESS-a, where the coefficient declines to 0.26 by the end of the sample, while for BESS-b it remains consistently above 0.62. Finally, let us consider the results for MHD and MPD, which con-
firm earlier findings of the inferior performance of the hour-based metric. The correlation between MHD and profits consistently remains lower than that of MPD. Notably, there is a sharp decline in MHD performance toward the end of the sample period – dropping from 0.75 to 0.1 within a single year for BESS-a. This decline is associated with the changing shape of daily price curves. As more and more solar energy enters the system, the midday reduction of electricity prices becomes more pronounced, -
resulting in not just two peaks (morning and evening), but also two low-price periods (night and midday). Consequently, the lowest and highest prices are not clustered closely to each other. For example, if the actual minimum price occurs at night and the forecasted minimum is during midday, despite similar price levels, the time-based error is heavily penalized. Thus, evaluating performance based on price differences rather than hours proves to be a more robust method. The absolute value of the c-
orrelation between MPD and profits remains above 0.76 throughout the evaluation period for both BESS-a and BESS-b, and for BESS-a, it consistently exceeds 0.90. A comparison of the upper and the lower panel in Fig. 4 reveals that both battery systems exhibit a similar overall pattern in correlation coefficients. However, some subtle differences can be observed. For BESS-b, the correlation coefficients related to dispersion and association measures tend to be more stable compared to BESS-a. Additio-
nally, the performance of Corr-f improves in BESS-b, approaching the level of MPD, unlike in the first system. Lastly, as indicated in Table 3, while traditional accuracy measures still show the weakest correlation with profits, their relationship is slightly stronger in BESS-b than in BESS-a.
6. Conclusions
Managing battery storage systems requires active participation in electricity markets. The most important of these is the DA market, where bids are submitted around noon on the day prior to delivery. Consequently, BESS must make charging and discharging decisions without knowing the exact market prices in advance. In this study, we consider two hypothetical BESS configurations that have the same energy capacity but differ in power ratings. This difference significantly affects financial outcomes, -
as a battery with a lower power rating requires more time to fully charge or discharge, potentially forcing it to operate during less favorable price periods. Since trading decisions are made one day ahead, they must rely on price forecasts. In this article, we construct a pool of 192 forecasts based on three widely used model types: ARX, LEAR, and NARX, which together encompass a broad family of linear and nonlinear approaches. Additionally, we consider eight different model specifications that v-
ary according to the choice of the endogenous variable, the use of variance-stabilizing transformations, and the type of estimator (heterogeneous vs. pooled). Model parameters are estimated using rolling windows of seven different lengths. The pool is further enriched with ensemble forecasts, which average predictions across different window sizes. The primary goal of this research is to analyze and evaluate the relationship between various measures of forecast quality and the resulting economic p-
rofit. We extend the analysis beyond
17

traditional accuracy metrics such as RMSE and MAE, incorporating a dispersion measure (Cov-e) and an association measure (Corr-f). The dispersion measure, Cov-e, captures the variability of forecast errors throughout the day – lower dispersion indicates more consistent forecasts, which simplifies the selection of optimal charging and discharging hours. The association is assessed via the intra-day correlation between forecasted and actual prices (Corr-f). A high correlation implies that the forec-
ast closely replicates the shape of the actual price curve, allowing the BESS to identify more accurately when to buy and sell electricity. Finally, we include two additional measures directly related to the identification of the daily minimum and maximum price hours: MHD and MPD. The first quantifies the temporal distance between predicted and actual peak/trough hours, while the second evaluates the accuracy of hour selection based on the difference in Corresponding prices. The results of the exp-
eriment indicate that
• The choice of forecasting model has a substantial influence on BESS profitability. Selecting the best-performing model can increase profits by 10–30% during 2021–2024 compared with the poorest-performing model.
• The weak correlations between MAE and RMSE and profits, spanning –0.002 to –0.473, indicate that these metrics are insufficient for reliably differentiating forecast performance.
• The correlation between dispersion measure, Cov-e, and profits ranges from -0.641 to -0.861, substantially outperforming traditional accuracy metrics.
• The association metric, Corr-f, shows a strong correlation with profits, exceeding 0.8 in all considered pools.
• Among the two measures designed to assess the accuracy of identifying hours of minimum and maximum prices, MPD exhibits a stronger correlation with profits than MHD.
The performance of the proposed evaluation metrics demonstrates that forecast properties beyond traditional accuracy significantly impact profit generation. Certain measures, such as Cov-e and Corr-f, are smooth and differentiable, making them suitable candidates for inclusion in loss functions to enhance the estimation process. Others, like MPD, can enrich model evaluation, especially when assessing newly developed forecasting methods. These findings contribute to the ongoing discussion on foreca-
st evaluation by emphasizing the necessity of linking the quality and economic value of predictions, particularly within electricity markets.
CRediT authorship contribution statement
Katarzyna Maciejowska: Conceptualization, Formal analysis, Methodology, Software, Investigation, Funding acquisition, Supervision, Validation, Writing – original draft Arkadiusz Lipiecki: Formal analysis, Methodology, Software, Investigation, Visualization, Writing – original draft Bartosz Uniejewski: Formal analysis, Methodology, Software, Investigation, Funding acquisition, Supervision, Validation, Writing – original draft
Declaration of competing interests
The authors declare no competing interests.
18

Acknowledgements
The study was partially supported by the National Science Center (NCN, Poland) through grant no. 2018/30/A/HS4/00444 (to AL), grant no. 2023/49/N/HS4/02741 (to BU) and grant no. 2019/34/E/HS4/00060 (to KM).
References
[1] A. Stratigakos, S. Camal, A. Michiorri, G. Kariniotakis, Prescriptive trees for integrated forecasting and optimization applied in trading of renewable energy, IEEE Transactions on Power Systems 37 (6) (2022) 4696–4708.
[2] H. Zareipour, C. A. Canizares, K. Bhattacharya, Economic impact of electricity market price forecasting errors: A demand-side analysis, IEEE Transactions on Power Systems 25 (1) (2010) 254–262.
[3] O. Lindberg, R. Zhu, J. Widén, Quantifying the value of probabilistic forecasts when trading renewable hybrid power parks in day-ahead markets: A nordic case study, Renewable Energy 237 (2024) 121617.
[4] T. Carriere, G. Kariniotakis, An integrated approach for value-oriented energy forecasting and data-driven decision-making application to renewable energy trading, IEEE Transactions on Smart Grid 10 (6) (2019) 6933–6944.
[5] H. Kebriaei, B. N. Araabi, A. Rahimi-Kian, Short-term load forecasting with a new nonsymmetric penalty function, IEEE Transactions on Power Systems 26 (4) (2011) 1817–1825.
[6] G. Li, H.-D. Chiang, Toward cost-oriented forecasting of wind power generation, IEEE Transactions on Smart Grid 9 (4) (2018) 2508–2517.
[7] J. Zhang, Y. Wang, G. Hug, Cost-oriented load forecasting, Electric Power Systems Research 205 (2022) 107723.
[8] T. Serafin, R. Weron, Loss functions in regression models: Impact on profits and risk in dayahead electricity trading, Energy Economics 148 (2025) 108596.
[9] Y. Zhang, M. Jia, H. Wen, Y. Bian, Y. Shi, Toward value-oriented renewable energy forecasting: An iterative learning approach, IEEE Transactions on Smart Grid (2023).
[10] J. Mandi, J. Kotary, S. BErden, M. Mulamba, V. Bucarey, T. Guns, F. Fiorett, Decisionfocused learning: foundations, state of the art, benchmark and future opportunities, Journal of Artificial Intelligence Research 81 (2024) 1623–1701.
[11] A. H. Murphy, What is a good forecast? an essay on the nature of goodness in weather forecasting, Weather and Forecasting 8 (2) (1993) 281 – 293.
[12] O. Schmidt, I. Staffell, Monetizing energy storage, Oxford University Press, 2023.
[13] F. Ziel, R. Weron, Day-ahead electricity price forecasting with high-dimensional structures: Univariate vs. multivariate modeling frameworks, Energy Economics 70 (2018) 396–420.
19

[14] J. Lago, G. Marcjasz, B. De Schutter, R. Weron, Forecasting day-ahead electricity prices: A review of state-of-the-art algorithms, best practices and an open-access benchmark, Applied Energy 293 (2021) 116983.
[15] K. Maciejowska, B.Uniejewski, R. Weron, Forecasting electricity prices, Oxford research encyclopedia of economics and finance (2023).
[16] G. Marcjasz, M. Narajewski, R. Weron, F. Ziel, Distributional neural networks for electricity price forecasting, Energy Economics 125 (2023) 106843.
[17] G. Marcjasz, B. Uniejewski, R. Weron, On the importance of the long-term seasonal component in day-ahead electricity price forecasting with NARX neural networks, International Journal of Forecasting 35 (2019) 1520–1532.
[18] K. Hubicka, G. Marcjasz, R. Weron, A note on averaging day-ahead electricity price forecasts across calibration windows, IEEE Transactions on Sustainable Energy 10 (1) (2019) 321–323.
[19] G. Marcjasz, B. Uniejewski, R. Weron, Probabilistic electricity price forecasting with NARX networks: Combine point or probabilistic forecasts?, International Journal of Forecasting 36 (2020) 466–479.
[20] M. Hagan, M. Menhaj, Training feedforward networks with the marquardt algorithm, IEEE Transactions on Neural Networks 5 (6) (1994) 989–993.
[21] R. Tibshirani, Regression shrinkage and selection via the lasso, Journal of the Royal Statistical Society B 58 (1996) 267–288.
[22] B. Uniejewski, Regularization for electricity price forecasting, Operations Research and Decisions 34 (2024).
[23] G. Marcjasz, T. Serafin, R. Weron, Selection of calibration windows for day-ahead electricity price forecasting, Energies 11 (2018) 2364.
[24] T. Serafin, B. Uniejewski, R. Weron, Averaging predictive distributions across calibration windows for day-ahead electricity price forecasting, Energies 12 (13) (2019) 256.
[25] A. Gianfreda, L. Grossi, Forecasting Italian electricity zonal prices with exogenous variables, Energy Economics 34 (6) (2012) 2228–2239.
[26] A. Ciarreta, P. Muniain, A. Zarraga, Do jumps and cojumps matter for electricity price forecasting? evidence from the german-austrian day-ahead market, Electric Power Systems Research 212 (2022) 108144.
[27] J. Janczura, S. Trück, R. Weron, R. Wolff, Identifying spikes and seasonal components in electricity spot price data: A guide to robust modeling, Energy Economics 38 (2013) 96–110.
[28] B. Uniejewski, R. Weron, F. Ziel, Variance stabilizing transformations for electricity spot price forecasting, IEEE Transactions on Power Systems 33 (2018) 2219–2229.
20

[29] J. Armstrong, Principles of Forecasting: A handbook for researchers and practitioners, Springer, 2001.
[30] A. G. Timmermann, Forecast combinations, in: G. Elliott, C. W. Granger, A. Timmermann (Eds.), Handbook of economic forecasting, Elsevier, 2006, pp. 135–196.
[31] A. F. Atiya, Why does forecast combination work so well?, International Journal of Forecasting 36 (1) (2020) 197–200.
[32] K. Maciejowska, J. Nowotarski, R. Weron, Probabilistic forecasting of electricity spot prices using Factor Quantile Regression Averaging, International Journal of Forecasting 32 (3) (2016) 957–965.
[33] A. Lipiecki, B. Uniejewski, R. Weron, Postprocessing of point predictions for probabilistic forecasting of day-ahead electricity prices: The benefits of using isotonic distributional regression, Energy Economics 139 (2024) 107934.
[34] Y. Amara-Ouali, M. Fasiolo, Y. Goude, H. Yan, Daily peak electrical load forecasting with a multi-resolution approach, International Journal of Forecasting 39 (3) (2023) 1272–1286.
21

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:06.545Z
- **Text Length:** 55638 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 21 of 21
