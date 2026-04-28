# PDF Document: Ranjan - 2025 - Causal and Predictive Modeling of Short-Horizon Market Risk and Systematic Alpha Generation Using Hy.pdf

**File Path:** Ranjan - 2025 - Causal and Predictive Modeling of Short-Horizon Market Risk and Systematic Alpha Generation Using Hy.pdf

**Processed Date:** 2026-02-10T18:14:01.936Z

**File Size:** 1272.33 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3506

**Title:** Causal and Predictive Modeling of Short-Horizon Market Risk and Systematic Alpha Generation Using Hybrid Machine Learning Ensembles

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Causal and Predictive Modeling of Short-Horizon Market Risk and
Systematic Alpha Generation Using Hybrid Machine Learning
Ensembles
Aryan Ranjan University of Oxford United Kingdom
aryan.ranjan@stcatz.ox.ac.uk
October 28, 2025
Abstract
We present a systematic trading framework that forecasts short-horizon market risk, identifies its underlying drivers, and generates alpha using a hybrid machine learning ensemble built to trade on the resulting signal. The framework integrates neural networks with tree-based voting models to predict five-day drawdowns in the S&P 500 ETF (SPY), leveraging a cross-asset feature set spanning equities, fixed income, foreign exchange, commodities, and volatility markets. Interpretable feature attribut-
ion methods reveal the key macroeconomic and microstructural factors that differentiate high-risk (crash) from benign (non-crash) weekly regimes. Empirical results show a Sharpe ratio of 2.51 and an annualized CAPM alpha of +0.28, with a market beta of 0.51, indicating that the model delivers substantial systematic alpha with limited directional exposure during the 2005 ̆2025 backtest period. Overall, the findings underscore the effectiveness of hybrid ensemble architectures in capturing nonlinear-
 risk dynamics and identifying interpretable, potentially causal drivers, providing a robust blueprint for machine learning–driven alpha generation in systematic trading.
Keywords: systematic trading, alpha generation, short-horizon risk forecasting, neural networks, tree-based models, causal inference
1 Introduction
Recent equity market dynamics have exhibited short-term, irregular deviations and pronounced volatility clustering, often temporarily decoupling from established macro-financial drivers. Extreme market dislocations—such as the rapid deposit flight during the March 2023 regional bank failures, the spike in implied and realized volatility following President Trump’s Liberation Day tariffs in April 2025, and the persistent, sharp weekly drawdowns from all-time highs in 2024–2025—demonstrate the limit-
ed predictive power of conventional risk models in anticipating short-horizon shocks. As a result, the identification and forecasting of near-term market risk regimes has become a critical prerequisite for systematic alpha generation and adaptive portfolio risk management. Traditional econometric frameworks—such as Generalized Autoregressive Conditional Heteroskedasticity (GARCH) and linear factor models—are fundamentally limited in capturing the highly nonlinear and cross-asset dependencies that -
increasingly govern intramonth market
1
arXiv:2510.22348v1 [q-fin.CP] 25 Oct 2025

behavior. The necessity of modeling high-dimensional feature spaces and complex interaction effects motivates the deployment of modern machine learning techniques. Although prior hybrid approaches have primarily combined GARCH with Long Short-Term Memory (LSTM) networks, the significant computational burden imposed by LSTMs—due to their complex gating structures and large parameter space—limits their practicality in latency-sensitive financial forecasting applications. Instead, we posit that a hy-
brid architecture combining neural networks (NNs) and tree-based ensembles offers a particularly compelling solution. The deep neural layers are engineered to capture complex, non-linear mappings and latent state representations from multi-modal input features, while the tree ensembles (e.g., Extreme Gradient Boosted Trees, CatBoost) provide robust handling of sparse, non-Gaussian feature distributions and emphasize interpretable feature splits and threshold effects on large, noisy datasets. This -
study develops a predictive system that leverages such hybrid architectures to generate actionable signals for five-day SPY drawdowns, utilizing this metric as a granular proxy for shorthorizon systematic risk. We undertake extensive feature engineering, integrating data streams across five primary financial domains: equities, bonds, foreign exchange, commodities, and volatility products. The ensemble model is then trained on this feature-rich representation of the global market state to generate -
directional signals. Crucially, we position this effort not as a pursuit of pure probabilistic prediction but as a framework for systematic signal and alpha generation, where the capacity to produce persistent, risk-adjusted excess returns is rigorously grounded by causal inference analysis for true interpretability of weekly risk classifications (crash vs. non-crash regime). Our results demonstrate that a hybrid neural–tree ensemble possesses statistically significant predictive power in identify-
ing latent risk regimes and anticipating short-horizon corrections. This methodology successfully bridges the gap between traditional, interpretable macro-driven trading signals and modern, data-driven machine learning, providing both academic insight into non-linear market causality and practical utility for constructing robust, adaptive systematic trading strategies.
2 Methodology
2.1 Pipeline Flow
We split this work into two different phases: (1) predictive signal and (2) quintile-based strategy to trade on the signal systematically. The overall pipeline flow for each phase is illustrated below:
Xt−τ :t
} {{ }
Selected features
Model Prediction
−−−−−−−−−−−−−−→
MLP + Tree Ensemble Zt
}{{}
Pred. risk signal
Strategy Signal
−−−−−−−−−−−−−−−−−−−→
Rolling/Temporal Aggregation st
}{{}
Strategy Signal
st
Signal → Position
−−−−−−−−−−−→
Quintile Mapping pt = f (st) ∈ {−1, 1} Apply Positions
−−−−−−−−−−−−−→
Portfolio Construction Rstrategy
t
Evaluation
−−−−−−−−−−−−→
Performance Metrics Risk Score
2.2 Data and Features
Investment Universe. We construct our predictive framework using a broad cross-section of market instruments to capture equity, fixed income, volatility, commodity, and currency dynamics. Specifically, our universe U consists of:
2

Table 1: Investment Universe U used for feature engineering.
Asset Class Symbols / Proxies
Equities SPY, QQQ, IWM, TLT Volatility VIX Commodities GLD, CL=F Foreign Exchange DX-Y.NYB, EURUSD=X, JPYUSD=X Treasuries TNX, IRX
We denote the historical adjusted price series of each asset i ∈ U at time t as Pi,t, and compute logarithmic returns: ri,t = ln(Pi,t) − ln(Pi,t−1). (1)
Target Variable. The primary objective of our model is to predict the probability of a significant market drawdown for the SPY ETF over a short-term horizon. Formally, we define the binary target yt as:
yt = 1
{h
∑
k=1
rSPY,t+k ≤ −δ
}
, (2)
where h = 5 trading days, and δ = 1%. This definition captures extreme short-term downside risk over the next trading week.
Feature Engineering. Our feature space Xt is designed to capture both statistical characteristics of returns and economically motivated signals. We engineer features along multiple dimensions:
1. Time-Series Moments (Statistical Features): For each asset i, we compute rolling window statistics over multiple horizons w ∈ {21, 63} days to capture short- and medium-term dynamics:
Volatility: σ(w)
i,t = std(ri,t−w+1:t) (3)
Skewness: γ(w)
i,t =
1 w
∑w−1
s=0 (ri,t−s − r ̄(w)
i,t )3 (σ(w)
i,t )3 (4)
Kurtosis: κ(w)
i,t =
1 w
∑w−1
s=0 (ri,t−s − r ̄(w)
i,t )4 (σ(w)
i,t )4 − 3 (5)
Shannon Entropy: H(w)
i,t = −
B
∑
j=1
pj log pj (6)
where pj are normalized histogram counts over B = 30 bins. These features capture volatility, asymmetry, tail behavior, and uncertainty in return distributions.
2. Hurst Exponent (Persistence/Mean-Reversion Indicator): We estimate the Hurst
exponent H(τ)
i,t over multiple scales τ ∈ {short = 16, medium = 64, long = 256} using a vectorized rescaled range methodology centered on powers of two for numerical stability. This quantifies the degree of long-term memory in the price series.
3

3. Cross-Asset Relations: To capture dependencies between SPY and other assets:
β(w)
i,SPY,t = RollingOLS(ri ∼ rSPY, w) (7)
ρ(w)
i,SPY,t = Corr(ri,t−w+1:t, rSPY,t−w+1:t) (8)
4. Information-Theoretic Measures: Rolling Kullback-Leibler divergence quantifies shifts in return distributions relative to longer reference windows (21 days for short term, 126 days for long term):
KL(wcurr,wref)
i,t =
B
∑
j=1
pcurr
j log pcurr
j prjef
(9)
Feature Construction Summary. The resulting feature space Xt contains 178 engineered variables, spanning 5423 total observations over the 2005-2025 period. These features are carefully forward-filled and standardized to handle missing values and scale disparities.
Feature Selection via Mutual Information. Given the high-dimensional feature space, we apply an initial statistical filtration to reduce redundancy and remove low-informative variables. Specifically,
• Low variance removal: Features with near-zero variance (< 10−4) are removed because they carry little to no predictive information.
• High-correlation removal: We remove one variable from a pair of highly Pearson correlated features (≥ 0.95) to avoid multicollinearity issues.
This initial filtration narrows our feature space down to 134 filters. From here, we use mutual information (MI) to rank features based on their predictive relevance with respect to the target yt:
MI(Xj, y) = ∑
x∈Xj
∑
y∈{0,1}
p(x, y) log p(x, y)
p(x)p(y) (10)
After computing MI scores for all candidate features, we select the top 80 features that exhibit the strongest dependency with the target. Figure 1 illustrates the MI distribution across the full candidate set.
Figure 1: Mutual information scores for all candidate features.
4

From this graph, there is a steep drop-off in MI scores after the 13th feature. The top features are as follows:
Table 2: Top 13 Features by Mutual Information Score
Feature Mutual Information Score
CL=F_hurst_short 0.109211 JPYUSD=X_hurst_short 0.107575 IRX_hurst_short 0.107422 GLD_hurst_short 0.106937 TNX_hurst_short 0.104463 DX-Y.NYB_hurst_short 0.103586 EURUSD=X_hurst_short 0.103037 TLT_hurst_short 0.101677 VIX_hurst_short 0.100433 QQQ_hurst_short 0.098766 IWM_hurst_short 0.098508 IRX_vol_63d 0.095007 SPY_hurst_short 0.092049
Feature Insights A striking insight from the MI analysis is that short-horizon Hurst exponents across multiple asset classes exhibit the highest statistical dependence with 5-day SPY drawdowns, with only one medium-term volatility measure showing comparable dependence. This highlights two important aspects. First, the short time horizon captured by the Hurst exponents suggests that microstructure-level persistence or mean-reversion patterns contain meaningful information for anticipating short-ter-
m drawdowns. These dynamics likely encode subtle regime shifts that standard longer-horizon volatility or correlation measures would miss. Second, and perhaps more surprisingly, the features with the strongest MI are largely drawn from cross-asset classes—commodities, FX, and Treasuries—rather than SPY itself or other equity indices. Intuitively, one might expect SPY returns or other equity indices to dominate as predictors, especially during periods of strong upward trends or record highs. Yet, o-
ur MI analysis reveals that signals from oil prices, currencies, and interest rates show greater statistical association with shortterm SPY drawdowns than SPY itself. This implies that the equity market is often reactive rather than proactive: shocks in global macro or financial markets tend to precede equity declines, with equity indices following rather than leading. This provides a valuable lens for interpreting current AI-related equity hype and bubble concerns. Even as headline indices surge -
on AI enthusiasm, the cross-asset signals embedded in our top features suggest that latent macroeconomic pressures—shifts in oil, currency, or interest rate dynamics—often appear before equities decline. Put differently, while investors focus on soaring equity prices, important early warning signs may already exist elsewhere. This shows why monitoring multiple asset classes outside of the equity universe can give a better early signal of potential drawdowns.
Final Feature Selection To ensure that the model has access to potentially relevant signals beyond the most obvious ones, we retain the top 80 features rather than truncating at the steep drop-off after the 13th feature in Figure 1. There are several reasons for this choice:
5

• Non-linear interactions: MI captures individual feature-target dependency, but does not account for interactions between features. Features with low marginal MI may still contribute meaningfully in combination with other features through non-linear relationships captured by tree-based models or neural networks.
• SHAP explainability: For interpretability via SHapley Additive exPlanations (SHAP), it is beneficial to include a broader set of features. Weak predictors may help the model refine contributions of stronger features and reveal subtle dependencies in the market dynamics.
• Ensemble diversity: The ensemble incorporates multiple model types (MLP, RF, XGBoost, CatBoost). Some models can extract signal from weaker or correlated features, which would otherwise be ignored if we limited ourselves to the top 13 features.
This rigorous filtering ensures that the model is trained on features with the highest signal-to-noise ratio, combining both statistical and economically motivated signals while mitigating redundancy.
2.3 Ensemble Models
To leverage complementary strengths of different model classes, we construct a soft-voting ensemble composed of neural networks and tree-based gradient boosting models. Let the base learners be denoted as
M = {M1, M2, . . . , MK },
where M1 is a shallow Multi-Layer Perceptron (MLP) and M2, . . . , MK are gradient-boosted decision trees (XGBoost, CatBoost).
2.3.1 Base Learners
Multi-Layer Perceptron (MLP) The MLP is designed to capture temporal and non-linear interactions in the engineered feature set. For an input vector x ∈ Rd, the MLP computes:
h(1) = σ(W(1)x + b(1)), h(l) = σ(W(l)h(l−1) + b(l)), yˆ = softmax(W(L)h(L−1) + b(L)),
where L is the number of layers, σ(·) is an elementwise activation function (ReLU or tanh), and (W(l), b(l)) are trainable weights and biases. We intentionally hardcoded a shallow MLP architecture (1-3 hidden layers, moderate width) because our dataset, though rich in features, is limited in effective sample size (5,000–6,000 daily observations after filtering). A shallow network mitigates overfitting while still capturing temporal dependencies.
Gradient Boosted Trees (XGBoost, CatBoost) For structured tabular features, we use gradient boosting classifiers. A single tree Tm(x) outputs a prediction for the log-odds of a binary target:
fm(x) =
Jm
∑
j=1
wjI{x ∈ Rj},
where Rj are terminal regions (leaves) and wj are leaf weights learned via gradient descent on the logistic loss:
L=−
N
∑
i=1
[yi log pˆi + (1 − yi) log(1 − pˆi)] .
6

XGBoost and CatBoost sequentially fit M trees to residuals of the previous model, producing an additive ensemble:
F (x) =
M
∑
m=1
Tm(x).
CatBoost further handles categorical features and ordering bias, while XGBoost is optimized for speed and regularization.
2.3.2 Hyperparameter Optimization
Each base learner undergoes grid search with TimeSeriesSplit cross-validation to maximize ROCAUC. Formally, for model Mk and hyperparameter set Θk, we solve:
θˆk = arg max
θ∈Θk
1 S
S
∑
s=1
AUC(y(s), M (θ)
k (X(s))),
where S is the number of folds and (X(s), y(s)) are the train-test splits respecting temporal order.
2.3.3 Soft Voting Ensemble
The final ensemble aggregates base learner probabilities using soft voting:
pˆ(x) = 1
K
K
∑
k=1
pˆk(x),
where pˆk(x) is the predicted probability of a 5-day SPY drawdown ≥ 1% from base learner Mk. The binary prediction is then: yˆ = I{pˆ(x) ≥ 0.5}.
This ensemble approach leverages complementary strengths:
• The MLP captures non-linear temporal dynamics and interactions across features.
• Gradient-boosted trees model structured non-linearities and feature importance, providing interpretability via SHAP.
• Voting stabilizes predictions, reducing variance of individual learners and improving generalization.
By combining these learners mathematically, the model can capture both subtle temporal signals and robust tabular patterns in equity market dynamics, which is critical for generating accurate risk signals in financial time series.
3 Results
3.1 Model Performance
We evaluate the predictive performance of our ensemble model on the full feature set. While hyperparameter tuning employed rolling time-series cross-validation, the final ensemble is trained on the entire dataset. Metrics such as ROC-AUC, precision, and recall therefore reflect in-sample performance.
7

Table 3: Validation Set Classification Report
Class Precision Recall F1-score Support
0 0.95 0.99 0.97 4232 1 0.95 0.82 0.88 1191
Accuracy 0.95 5423 Macro Avg 0.95 0.90 0.92 5423 Weighted Avg 0.95 0.95 0.95 5423
Figure 2: Confusion matrix on the validation set. True non-crash weeks are in the first row/column, true crash weeks in the second.
Non-crash detection is extremely robust. Class 0 recall of 0.99 indicates that the model almost never mislabels normal weeks as crashes, minimizing false alarms—a critical property for any riskadjusted strategy. Crash detection is also strong but selective. Class 1 recall of 0.82 shows the ensemble correctly identifies the majority of high-risk weeks while maintaining high precision (0.95). This reflects a trade-off aligned with risk management: avoiding overreacting to noise while still capturing-
 genuine SPY drawdowns. Weighted averages show overall high accuracy (0.95) and F1score (0.95), suggesting the model captures the cross-asset and temporal patterns leading to SPY drawdowns without overfitting to either class. From Figure 2, we see that most misclassifications (93 false negatives) correspond to crash weeks not flagged by the model. Examining the corresponding dates reveals that these periods are typically mild drawdowns that, while exceeding the 1% threshold, do not exhibit systemi-
c signals captured by the ensemble (e.g., low volatility clustering, muted cross-asset correlation). Conversely, the 240 false positives often occur in weeks with transient market turbulence that did not materialize into a 5-day SPY drop. Overall, the model’s predictive output is consistent with a practical risk-management approach:
8

it emphasizes precision over recall for crashes, ensuring that actionable high-risk signals are credible, while normal weeks are rarely over-flagged. This aligns with how a quantitative trading desk would leverage risk signals: favoring reliability of alerts over exhaustive detection.
3.2 Feature Attribution and Causal Insights
To interpret the drivers of crash risk, we apply SHAP to the ensemble model. Figures 3 and 4 show the SHAP summary plots for crash and non-crash weeks, respectively. Interestingly, while MI analysis highlighted Hurst exponents across assets as among the strongest predictors, SHAP shows that these features play a minimal role in the model’s final predictions. This divergence arises because MI measures unconditional dependence between a feature and the target, capturing general market fragility sign-
als such as trending or mean-reverting regimes. In contrast, SHAP values reflect conditional contributions within the full feature set. Once short-term, cross-asset signals are included, the Hurst metrics’ predictive power is largely absorbed by more immediate drivers. Economically, this suggests that while long-term market autocorrelation sets the stage for fragility, the timing of crashes is dominated by short-term shocks and cross-asset interactions.
Figure 3: Crash weeks
During crash weeks, the model assigns significant weight to cross-asset measures, particularly in commodities, FX, and Treasuries. Features such as SPY returns, 63-day rolling beta of SPY returns with respect to the 3M Treasury Yield, oil higher-order moments (skew and kurtosis), and IWM returns and beta emerge as influential. These findings can be economically interpreted as follows:
• SPY returns: While MI suggested SPY returns alone are weakly predictive, SHAP reveals their conditional importance. SPY drawdowns amplify crash risk in the presence of systemic cross-asset stress, acting as a signal of broader market fragility.
9

• Interest rate sensitivity (IRX beta with SPY): Short-term rate movements interacting with equities signal changing monetary conditions. Rising rates or increased rate-equity correlation during crash weeks heighten systemic stress, consistent with historical episodes where monetary tightening contributed to equity drawdowns.
• Oil skew and kurtosis: Tail measures of oil prices capture the probability of extreme directional moves. Commodity extremes often coincide with market-wide risk-off events, making them leading indicators of macro-financial stress.
• IWM returns and beta: Small-cap equities are more sensitive to liquidity shocks and shifts in risk appetite than large-cap tech-heavy indices (e.g., QQQ). Their outsized contribution reflects the model’s detection of systemic market vulnerability beyond headline tech risk. Although QQQ and large-cap tech dominate headlines, especially during recent AI-driven market cycles, the 2005–2025 window includes multiple crises (e.g., 2008–09 GFC, 2011 Eurozone stress, 2020 COVID drawdown) where small- an-
d mid-cap equities historically led or amplified market stress. Their outsized SHAP contribution highlights that systemic vulnerability often manifests first in smaller, more liquidity-sensitive segments rather than the tech-heavy Nasdaq in this period of study.
Figure 4: Non-crash weeks
For non-crash weeks, the SHAP analysis identifies a partially overlapping but economically distinct set of influential features: SPY and IWM returns and beta, Treasury sensitivity (IRX beta), Dollar Index kurtosis, JPY/USD beta, and oil return skewness. Several key contrasts emerge compared with crash weeks:
• SPY and IWM returns: Still contribute meaningfully, but generally reduce predicted crash probability. Positive or stable equity performance across broad- and small-cap indices provides conditional reassurance against imminent market stress.
10

• Macro tail risk indicators: Crash weeks are dominated by commodity stress signals, but non-crash weeks emphasize FX market indicators. Stable or trending FX dynamics contribute to risk dampening rather than amplification. Thus, the FX market acts as a risk redistribution mechanism: orderly currency moves reflect healthy cross-border capital flows and monetary stability, stabilizing equities even when minor volatility arises elsewhere.
• Cross-asset interactions and regime asymmetry: Non-crash weeks reflect stable, trending dynamics, whereas crash weeks are triggered by extreme deviations in oil, Treasury yields, or equity returns. This asymmetry suggests the model captures the functional role of different asset classes under stress vs. calm regimes: commodities are key risk triggers, while FX provides stabilizing signals.
The SHAP analysis reveals a clear divergence between crash and non-crash regimes, highlighting the asymmetric roles of different asset classes in systemic risk propagation. During crashes, commodities and small-cap equities act as shock amplifiers, signaling liquidity stress and macro-financial fragility, whereas SPY returns act as a conditional amplifier in the context of these broader signals. In contrast, non-crash weeks show that FX and Treasury sensitivities provide stabilizing feedback, refl-
ecting orderly capital flows and well-functioning risk redistribution mechanisms. Economically, this suggests that systemic vulnerability is not just a function of asset volatility, but of cross-asset interactions and regime-dependent transmission channels. Long-term fragility indicators, such as Hurst exponents, set the backdrop for market susceptibility, but the realized timing and magnitude of crashes are driven by short-term shocks that propagate unevenly across assets. This nuanced understand-
ing can guide both predictive modeling and macro-financial risk monitoring, emphasizing that effective early-warning signals require attention to both which assets are stressed and how stress interacts across the financial ecosystem.
3.3 Risk Quantile Analysis
To translate model predictions into actionable signals, we rank all weeks by predicted crash probability and segment them into quintiles. Figures 5 and 6 illustrate the realized SPY returns conditional on predicted risk levels. Several key insights emerge:
11

Figure 5: Cumulative SPY returns stratified by predicted crash probability quintiles. High predicted risk weeks (Q5) tend to coincide with drawdowns, validating model utility for risk-adjusted positioning.
• Monotonic risk-return relationship: There is a clear and economically meaningful monotonic trend: weeks assigned higher predicted crash probability (Q5) systematically coincide with realized drawdowns, whereas the lowest-risk weeks (Q1) experience mostly positive or muted returns. This confirms that the model captures true conditional risk, not just statistical artifacts.
• Practical tactical implications: The pronounced divergence between extreme quintiles underscores the model’s potential for tactical allocation or protective hedging. A risk-aware investor could reduce equity exposure or hedge during Q5 weeks, while maintaining or even leveraging exposure during Q1–Q2 weeks, improving risk-adjusted performance without sacrificing upside participation.
Examining the distribution of cumulative returns within each quintile, Figure 6 reveals that the tail risk is concentrated in the highest-risk quintile (HIGH-risk period), while lower-risk quintiles Q1-Q4 (collectively denoted as LOW-risk period) exhibit tight, near-zero variance with modest positive skew. This asymmetry confirms that the model isolates extreme downside events while maintaining stable performance in normal market conditions, a key feature for systematic, riskmanaged strategies. To-
 quantify this difference even further: the average 5-day SPY return during HIGH-risk periods comes out to −1.89%, while the average 5-day SPY return during LOW-risk periods comes out to +0.75%.
12

Figure 6: Cumulative SPY returns stratified by LOW-risk and HIGH-risk periods.
3.4 Discussion of Results
The results validate both the ensemble methodology and the cross-asset, multi-horizon feature engineering pipeline. The combination of MLPs for temporal dependencies and tree-based learners for structured, non-linear interactions allows the model to detect subtle early warning signals not apparent from equity indices alone. SHAP analysis further elucidates causal patterns, indicating that macro and cross-asset stress indicators often precede equity drawdowns, even amid periods of strong headline i-
ndex momentum driven by factors such as AI hype. Risk quantile performance underscores the potential for systematic alpha generation and risk mitigation through informed position sizing or hedging strategies.
4 Trading Strategy
Building on the predictive model described in the previous sections, we implement a straightforward long/short trading strategy based on the probability of SPY drawdowns predicted by our ensemble model. Specifically, the strategy operates as follows:
• Long Position: Enter a long position in SPY when the predicted probability of a crash in the following week is below a pre-defined threshold of 0.5 (i.e., the model forecasts a low-risk environment).
• Short Position: Enter a short position when the predicted probability of a crash exceeds the threshold of 0.5, indicating elevated risk.
13

• Position Sizing: Positions are scaled according to the model’s predicted probability, creating a form of risk-adjusted allocation that increases exposure when confidence is high and decreases when uncertainty is elevated.
4.1 Strategy Performance Visualization
Figure 7 shows the evolution of the trading signal alongside realized SPY returns from 2021 to 2025, where green triangles indicate longs and red triangles indicate shorts based on 5-day risk prediction score. These trades are made daily.
Figure 7: Predicted drawdown probability signal generated by the ensemble model.
Figure 8 presents the distribution of daily returns from the long/short strategy relative to the SPY benchmark over the trained period. Several economically meaningful patterns emerge:
• Downside protection: The strategy exhibits a noticeably skinnier left tail compared with SPY’s left-side distribution, reflecting its directional accuracy in identifying forward crash weeks and reducing exposure/going short. This indicates effective capture of market stress episodes, limiting extreme losses and highlighting the model’s utility as a conditional crashprotection signal.
• Upside participation: The right tail of the strategy closely mirrors the positive return days of SPY, suggesting that the model preserves exposure during normal or bullish periods. In other words, the strategy does not sacrifice upside during calm markets, maintaining participation in standard equity rallies.
• Central peak near zero: The pronounced density at near-zero returns corresponds to days when the model adopts a neutral stance. This arises either when predicted crash probabilities are near the decision threshold or when market movements are small, yielding minimal P&L. Economically, this represents the strategy’s “resting state,” where it neither risks capital on marginal signals nor overreacts to minor market fluctuations.
14

Figure 8: Overlay of SPY daily returns vs. Strategy daily returns
Overall, the distribution highlights the strategy’s asymmetric performance: it systematically mitigates losses during market stress while retaining gains in normal conditions, achieving a balance between downside protection and upside participation—a hallmark of a robust predictive riskmanaged trading approach.
4.2 Strategy Performance Metrics
Table 4 summarizes key performance metrics for the long/short strategy constructed from the ensemble predictions over the full dataset. Metrics include risk-adjusted returns, CAPM parameters, and realized SPY returns during high- and low-risk periods identified by the model.
Table 4: In-sample trading strategy performance metrics (2005-2025).
Metric Value
Sharpe Ratio 2.51 Information Ratio vs SPY 1.73 Maximum Drawdown -18.12% Annualized Return 40.84% Annualized Volatility 13.23% CAPM Alpha (daily) 0.00111 CAPM Beta 0.51 T-stat Alpha 14.03
15

These in-sample metrics indicate strong conditional performance: the strategy effectively differentiates high versus low crash probability weeks. The high Sharpe and Information Ratios reflect substantial risk-adjusted returns in periods where the model correctly identifies elevated drawdown risk. The moderate beta (0.51) indicates partial decoupling from SPY, consistent with a hedged, long/short approach. Positive daily alpha and highly significant t-statistics further underscore that the ensemb-
le captures information beyond simple market exposure. Note: These metrics do not currently account for transaction costs nor have they been forward tested. This remains an active consideration for future work.
4.3 Discussion
Overall, the strategy underscores the predictive utility of cross-asset, Hurst-based features for short-term drawdown risk management. The exceptionally high ROC-AUC confirms strong model discrimination between crash and non-crash periods, while the performance metrics demonstrate both attractive risk-adjusted returns and effective mitigation of downside exposure. Notably:
• Risk-Aware Returns: High annualized return combined with moderate volatility results in a strong Sharpe ratio (2.51).
• Market Hedging: CAPM Beta below 1 and high information ratio indicate reduced exposure to overall SPY fluctuations while capturing alpha.
• Behavior During Stress: The average SPY return during high-risk periods is negative, validating the model’s early warning capability.
5 Conclusion and Future Work
In this study, we developed a hybrid machine learning ensemble to predict probabilities of > 1% weekly SPY drawdowns over the 2005 − 2025 period. By integrating tree-based voting models with neural networks, and leveraging cross-asset signals, we achieved strong in-sample classification performance. Feature attribution via SHAP revealed that short-term, conditional drivers—such as SPY and IWM returns, interest rate sensitivities, and commodity tail-risk measures—dominate crash predictions, whereas-
 FX market indicators contribute stabilizing information during calm periods. The divergence between mutual information and SHAP analyses highlights the importance of considering conditional, cross-feature effects when interpreting predictive models in financial markets. Translating predicted crash probabilities into actionable signals, the strategy demonstrates significant differentiation between high- and low-risk weeks, with elevated risk-adjusted returns, partial decoupling from SPY, and robus-
t conditional alpha. The monotonic relationship between predicted risk and realized returns underscores the practical utility of the model for tactical positioning and protective hedging, even when accounting for market regime dynamics over two decades. Future work will focus on several extensions: (i) forward-testing and out-of-sample validation to assess robustness in live market conditions; (ii) incorporation of transaction costs, slippage, and liquidity constraints to evaluate real-world feasi-
bility; (iii) exploration of alternative feature representations, including higher-frequency and alternative asset classes; and (iv) deeper causal analysis of cross-asset dynamics to improve interpretability and uncover additional structural market relationships. These directions aim to further enhance both predictive performance and economic interpretability, bridging the gap between machine learning insights and actionable risk management in equity markets.
16

References
[1] Lamoureux, C. G., & Lastrapes, W. D. (1990). "Persistence in Variance, Structural Change, and the GARCH Model," Journal of Business & Economic Statistics, 8(2), 225–234.
[2] Wei, J., Yang, S., & Cui, Z. (2025). Integrated GARCH-GRU in Financial Volatility Forecasting. School of Business, Stevens Institute of Technology, Hoboken, NJ, United States. https://arxiv.org/abs/2504.09380v1
[3] Bekaert, G., Hoerova, M., & Lo Duca, M. (2013). Risk, uncertainty and monetary policy. Journal of Monetary Economics, 60(7), 771–788.
[4] Fama, E. F., & French, K. R. (1993). Common risk factors in the returns on stocks and bonds. Journal of Financial Economics, 33(1), 3–56.
[5] Cont, R. (2001). Empirical properties of asset returns: Stylized facts and statistical issues. Quantitative Finance, 1(2), 223–236.
[6] Gu, S., Kelly, B., & Xiu, D. (2020). Empirical Asset Pricing via Machine Learning. Review of Financial Studies, 33(5), 2223–2273.
[7] Krauss, C., Do, X. A., & Huck, N. (2017). Deep neural networks, gradient-boosted trees, random forests: Statistical arbitrage on the S&P 500. European Journal of Operational Research, 259(2), 689–702.
[8] Cover, T. M., & Thomas, J. A. (2006). Elements of Information Theory. Wiley.
[9] Lundberg, S. M., & Lee, S.-I. (2017). A unified approach to interpreting model predictions. In Advances in Neural Information Processing Systems (NeurIPS).
[10] Breiman, L. (2001). Random Forests. Machine Learning, 45(1), 5–32.
[11] Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press.
17

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:01.936Z
- **Text Length:** 35587 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
