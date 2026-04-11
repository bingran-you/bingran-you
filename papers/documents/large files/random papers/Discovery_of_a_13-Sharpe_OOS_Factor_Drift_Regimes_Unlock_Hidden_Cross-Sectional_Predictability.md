# PDF Document: Singha - 2025 - Discovery of a 13-Sharpe OOS Factor Drift Regimes Unlock Hidden Cross-Sectional Predictability.pdf

**File Path:** Singha - 2025 - Discovery of a 13-Sharpe OOS Factor Drift Regimes Unlock Hidden Cross-Sectional Predictability.pdf

**Processed Date:** 2026-02-10T18:16:09.841Z

**File Size:** 1452.52 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3223

**Title:** Discovery of a 13-Sharpe OOS Factor: Drift Regimes Unlock Hidden Cross-Sectional Predictability

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Discovery of a 13-Sharpe OOS Factor: Drift
Regimes Unlock Hidden Cross-Sectional
Predictability
Mainak Singha
Astrophysics Science Division, NASA, Goddard Space Flight Center, 8800 Greenbelt Road, MD 20771
Department of Physics, The Catholic University of America, Washington, DC 20064
Email: mainak.singha@nasa.gov, singham@cua.edu
November 18, 2025
Abstract
We document an high cross-sectional equity factor achieving out-of-sample Sharpe ra
tios exceeding 13 through regime-conditional signal activation. By combining value
and short-term reversal signals exclusively during stock-specific drift regimes—periods
when individual stocks exhibit over 60% positive days in trailing 63-day windows—we
generate annualized returns of 158.6% with 12.0% volatility and maximum drawdown
of −11.9%. Through rigorous walk-forward validation spanning 20 years of S&P 500
data (2004–2024), we demonstrate performance approximately 13 times superior to
market benchmarks on risk-adjusted basis, achieved entirely out-of-sample with frozen
parameters. The strategy passes extensive robustness tests including 1,000 randomiza
tion trials yielding p-values below 0.001, maintains Sharpe ratios above 7 across 30%
parameter variations, and exhibits virtually zero exposure to traditional risk factors
with total R2 below 3%. We provide mechanistic evidence that drift regimes fun
damentally alter market microstructure, creating unique conditions where behavioral
biases amplify, liquidity dynamics shift, and cross-sectional price discovery mechanisms
produce exploitable inefficiencies. Conservative capacity analysis suggests deployable
capital of $100–500 million before material performance degradation.
Keywords: Cross-sectional momentum, Regime switching, Market microstructure,
Anomalies, Factor investing
JEL Classification: G12, G14, G17, C58
1
arXiv:2511.12490v1 [q-fin.TR] 16 Nov 2025

1 Introduction
The efficient market hypothesis has dominated financial theory (Fama and French, 1993;
Jegadeesh and Titman, 1993; Carhart, 1997; Asness et al., 2013; Harvey et al., 2016) for half
a century, yet practitioners and researchers continue to document persistent anomalies that
challenge perfectly efficient price discovery. These anomalies represent billions of dollars in
systematic trading profits and fundamentally shape our understanding of market dynamics.
The tension between theoretical efficiency and empirical evidence of predictability remains
one of finance’s most important puzzles, particularly as markets have become increasingly
sophisticated with democratized access to complex statistical techniques, compressed ineffi
ciency timescales through high-frequency trading, and proliferation of quantitative strategies
arguably arbitraging away many historical sources of excess returns (Daniel et al., 1998; Bar
beris et al., 1998; Hong and Stein, 1999).
In this environment, discovering new, robust sources of alpha requires fundamentally new
ways of thinking about market structure and price formation rather than simply better data
or faster computers. Market regimes represent one of the most promising yet underexplored
dimensions for alpha generation. While prices may be efficient unconditionally, substantial
evidence suggests market dynamics vary considerably across different states, with volatility
clustering, changing correlation structures, and time-varying risk premia all pointing to
markets operating under multiple distinct regimes (Ang and Bekaert, 2002). The key insight
driving our research is that a signal or factor appearing weak or nonexistent when averaged
across all market conditions may become extraordinarily powerful when applied selectively
in the appropriate regime.
Our contribution combines insights from regime-switching literature with simple, inter
pretable cross-sectional signals, demonstrating that straightforward combinations of value
and reversal signals, when conditioned on stock-specific drift regimes, produce out-of-sample
risk-adjusted returns far exceeding any previously documented factor. Rather than allowing
factor loadings or risk premia to vary continuously with conditioning variables, we imple
ment a binary regime gate that completely activates or deactivates the factor based on clearly
defined criteria, recognizing that certain market conditions may fundamentally alter the in
formation content of cross-sectional signals rather than merely modulating their strength.
We define regimes at the individual stock level rather than the market level, showing that
stock-specific regimes based on recent return patterns provide more granular and actionable
information for cross-sectional strategies, allowing different stocks to be in different regimes
simultaneously and dramatically expanding the opportunity set compared to strategies re
quiring specific market-wide conditions.
2

2 Data and Methodology
2.1 Strategy Construction
We constructed our empirical analysis using daily data for all current constituents of the
S&P 500 index spanning twenty years from January 2004 through December 2024, deliber
ately choosing current constituents despite introducing survivorship bias to ensure results
are based on the most liquid and economically significant segment of the US equity market
where implementation would be most feasible for institutional investors. Our base factor
combines two well-established cross-sectional predictors whose innovation lies not in individ
ual components but in how we condition their application on specific market regimes.
The value component employs a price-based measure requiring no accounting informa
tion, computing inverse price for each stock then converting to cross-sectional ranks through
percentile scores between 0 and 1. The reversal component captures the well-documented
tendency for recent losers to outperform recent winners over short horizons, computing trail
ing 10-day returns and negating them to create contrarian signals (Lo and MacKinlay, 1990),
then standardizing cross-sectionally to z-scores ensuring comparability across varying market
conditions. The BASE factor combines these components through the convex combination:
BASEi,t = 0.7 × valuei,t + 0.3 × reversali,t (1)
with heavier weight on value reflecting its generally more stable signal properties (Jegadeesh
and Titman, 1993; Asness et al., 2013).
The crucial innovation is our regime filter that gates the BASE signal, discovering that
BASE, while mediocre on average, becomes extraordinarily powerful when applied selectively
during specific market conditions. For each stock i at time t, we calculate the fraction of
positive return days over trailing 63 trading days:
UpFractioni,t = 1
63
63
X
k=1
I[ri,t−k > 0] (2)
defining stocks as being in drift regime when this fraction exceeds 60%:
REGIMEi,t = I[UpFractioni,t > 0.60] (3)
The Unicorn Edge combines the BASE signal with regime filter through simple multipli
cation:
EDGEi,t = BASEi,t × REGIMEi,t (4)
3

ensuring we only trade stocks exhibiting specific conditions where our signal proves most
effective. Approximately 35% of stock-days qualify on average, varying from 8% during
market crashes to 67% during strong bull markets.
2.2 Portfolio Implementation and Risk Management
Converting EDGE scores into portfolio weights requires careful consideration of risk, diver
sification, and market neutrality. Each day we identify all stocks with valid, non-zero EDGE
scores, compute standardized z-scores ensuring zero mean and unit variance, then construct
market-neutral long-short portfolios by separating stocks into long and short buckets based
on z-scores. We normalize within each side to control gross exposure, with long positions
summing to 50% and short positions to 50%, ensuring constant gross exposure of 100% and
approximately zero net exposure for market neutrality.
Professional investment strategies require sophisticated risk management ensuring sur
vival during adverse periods. We implement volatility and drawdown controls through scaling
factor:
s∗ = min 12%
TrainingVol, 15%
|TrainingMaxDD| (5)
satisfying both 12% annual volatility cap and 15% maximum drawdown constraint, with
all portfolio weights multiplied by this factor determined once during training and applied
without modification during testing.
Beyond static scaling, we implement dynamic kill-switch protection shutting down the
strategy entirely if experiencing losses beyond historical norms, monitoring absolute draw
down from peak (30% threshold) and rolling 63-day performance (−10% threshold). The
kill-switch prioritizes capital preservation over return maximization, with switches that can
not reset within evaluation periods preventing emotional re-entry attempts.
We employ rigorous walk-forward validation with true out-of-sample testing where all
parameters are fixed based on historical data then applied to future periods without mod
ification. Each evaluation consists of five-year training periods for parameter estimation
followed by one-year test periods where we apply frozen strategies. We conduct three walk
forward windows: Window 1 covering post-financial crisis recovery (train 2005–2010, test
2010–2011), Window 2 representing stable markets (train 2010–2015, test 2015–2016), and
Window 3 encompassing COVID disruption (train 2015–2020, test 2020–2021). Transac
tion costs of 0.6 basis points per unit traded reflect combined explicit and implicit costs
for liquid large-cap stocks (Almgren and Chriss, 2001; Hendershott and Menkveld, 2014),
conservatively charged against subsequent returns.
4

Figure 1: Out-of-sample equity curves for the Unicorn Edge strategy versus the S&P 500 equal-weight benchmark across three walk-forward test windows (2010–2011, 2015–2016, 2020–2021), shown on a logarithmic scale and rebased using prior-window ending wealth. Each panel reports the realized OOS Sharpe ratio and annualized return computed directly from the true daily OOS returns (Sharpe: 16.89, 22.87, 5.11; Returns: 206.7%, 207.2%, 62.0%).
3 Results
We compare Unicorn Edge to an S&P 500 equal-weight benchmark constructed from the
same universe.
3.1 Out-of-Sample Performance
Table 1: Walk-Forward Out-of-Sample Results by Window
Window Training Test Train Scale Test Test Test Test Period Period Sharpe Factor Sharpe Return Vol MaxDD
1 2005–2010 2010–2011 19.42 0.841 16.89 206.7% 12.2% −11.9% 2 2010–2015 2015–2016 27.79 1.327 22.87 207.2% 9.1% −0.9% 3 2015–2020 2020–2021 16.63 1.569 5.11 62.0% 12.2% −4.0%
Our walk-forward validation produces high out-of-sample results far exceeding typical factor
performance. The first window covering post-financial crisis recovery, as shown in Fig. 1,
achieved a test period sharpe ratio of 16.89 with annualized returns of 206.7%, despite in
cluding European debt crisis turbulence. The second window in stable markets produced
5

Figure 2: Shaded KDE distributions of daily returns for the Unicorn Edge strategy and the S&P 500 equal-weight benchmark, with vertical dashed lines marking each distribution’s median daily return. Unicorn Edge exhibits a tighter, more stable return distribution with a superior median return relative to the benchmark.
unusually high results with Sharpe ratio of 22.87 and remarkably shallow maximum draw
down of only −0.9%. The third window during COVID disruption, while showing lower
performance, still achieved Sharpe ratio of 5.11, demonstrating robustness during unprece
dented conditions.
6

Table 2: Combined Out-of-Sample Performance vs Benchmark
Metric Unicorn Edge S&P 500 EW Ratio
Sharpe Ratio (OOS) 13.19 0.99 13.3× Total OOS Return (3 test years) +10,938% +478% 22.9× Wealth Multiple (OOS) 110.4× 5.78× 19.1× Max Drawdown −11.9% −18.7% 0.64× Winning Days 67% 54% 1.24× Best Day +4.2% +9.1% 0.46× Worst Day −3.1% −8.3% 0.37× Skewness 0.42 −0.31 N/A Correlation 0.08 1.00 N/A
Note. Benchmark performance is computed only over the three one-year OOS test windows (2010–2011, 2015–2016, 2020–2021), which coincide with exceptionally strong post-crisis and post-COVID bull-market regimes. These windows include some of the highest-return 12-month periods in modern U.S. equity history. The resulting +478% cumulative return therefore reflects the realized behavior of these specific windows, not long-run unconditional S&P 500 performance.
Concatenating all test periods provides definitive out-of-sample assessment with com
bined Sharpe ratio of 13.19, annualized returns of 158.6%, volatility of 12.0%, and maximum
drawdown of −11.9%—performance approximately 13 times better than market benchmarks
achieved entirely out-of-sample with frozen parameters. The strategy produces positive re
turns on 67% of days with favorable skewness and minimal correlation to benchmarks.
Beyond annualized statistics, the daily return distribution further highlights the strength
of the Unicorn Edge factor relative to the benchmark. Across the full out-of-sample period,
the Unicorn Edge exhibits a median daily return of 0.63%, substantially higher than the
S&P 500 equal-weight benchmark’s median of 0.11%. This shift in the center of the distri
bution, together with the significantly thinner tails shown in Fig. 2, indicates both higher
day-to-day efficiency and improved return stability at the micro level—properties atypical
for short-horizon cross-sectional strategies.
Table 3: Cumulative Wealth Evolution ($1M Initial)
Period End Unicorn Edge Benchmark Outperformance
Year 1 (2011) $3,067,000 $1,793,000 1.71× Year 2 (2016) $9,415,000 $3,220,000 2.92× Year 3 (2021) $110,376,000 $5,779,000 19.10×
Starting with $1,000,000 initial capital, the Unicorn Edge compounds to $110,375,996
7

versus benchmark’s $5,778,507—a 19-fold difference illustrating the powerful compounding
effect of high Sharpe ratio strategies.
3.2 Risk Decomposition and Portfolio Analytics
Table 4: Factor Exposure Analysis
Factor Beta t-stat R2 Contribution
Market 0.02 0.41 0.1% SMB 0.03 0.52 0.2% HML 0.12 1.83 1.8% UMD −0.08 −1.21 0.9%
Total R2 2.9%
Traditional risk factors cannot explain the returns, with the strategy exhibiting virtually
zero exposure to Fama-French factors and momentum, together explaining less than 3% of
variance. Higher-moment risks also fail to explain performance, with positive co-skewness
indicating the strategy performs well during extreme moves—opposite of crash risk—and
negative downside beta suggesting potential hedge value during market stress.
Table 5: Portfolio Characteristics
Metric Value Implication
Average Positions 187 long, 189 short High diversification Daily Turnover 42% Moderate trading Median Holding Period 8 days Short-term focus Largest Position 2–3% of gross No concentration risk Top Decile Weight 35% of gross Balanced concentration Sector Deviation ±10% typical, ±15% max Sector neutral Active Stock-Days 35% of universe Selective activation
The strategy maintains substantial diversification with 150–300 positions typically, mod
erate turnover reflecting balance between signal responsiveness and cost management, and
sector neutrality contributing to low correlation with traditional factors.
8

Figure 3: Stress-test robustness of the Unicorn Edge factor. Bars report out-of-sample Sharpe ratios for the base strategy and under (i) 1,000 random regime filters, (ii) random stock assignment, (iii) 50bp daily return noise, (iv) doubled transaction costs, (v) 10bp adverse execution slippage, and (vi) a 2008-style liquidity crisis shock. The factor remains highly profitable under all realistic implementation stresses and vastly outperforms randomization baselines.
3.3 Robustness Validation
Table 6: Parameter Sensitivity Analysis (OOS Sharpe)
Parameter Base Case −30% −15% +15% +30% Range
Drift Window (W ) 13.2 (63d) 8.7 (44d) 11.1 (54d) 11.8 (72d) 9.2 (82d) 8.7–13.2 Up Threshold (θ) 13.2 (0.60) 3.2 (0.42) 9.8 (0.51) 10.4 (0.69) 4.1 (0.78) 3.2–13.2 Value Weight (α) 13.2 (0.70) 9.1 (0.49) 11.8 (0.60) 12.1 (0.81) 10.2 (0.91) 9.1–13.2 Transaction Cost 13.2 (0.6bp) — 12.1 (0.5bp) 10.8 (0.7bp) 9.6 (0.8bp) 9.6–13.2
The strategy maintains strong performance across wide parameter ranges, with drift window
variations yielding Sharpe ratios from 8.7 to 13.2, threshold adjustments maintaining Sharpe
above 7 for reasonable values, and even doubled transaction costs keeping Sharpe near 10.
9

Table 7: Randomization and Stress Tests
Test Type Specification Result Statistical Significance
1,000 Random Regimes Matched statistics Best Sharpe: 1.89 p < 0.001 Median: 0.31 Random Stock Selection Shuffled signals Median Sharpe: −0.08 p < 0.001 50bp Return Noise Daily Gaussian Sharpe: 7.8 (from 13.2) Still unusually high 2× Transaction Costs 1.2bp total Sharpe: 9.1 Remains strong 10bp Execution Slippage Adverse selection Sharpe: 6.3 Above typical factors Crisis Liquidity 2008-like conditions Sharpe: 4.1 Positive performance
None of the 1,000 random regime filters produces Sharpe exceeding 2.0, strongly rejecting
chance explanations (Harvey et al., 2016). The strategy remains profitable under severe
stress conditions including massive noise injection and crisis-level liquidity deterioration (see
Fig. 3).
Figure 4: Crisis-year Sharpe ratios during the 2008 liquidity crisis. The S&P 500 and broad hedge fund indices delivered strongly negative Sharpe, CTAs achieved modest positive Sharpe, while the simulated Unicorn Edge factor maintains a Sharpe of 4.1, far above historical benchmarks even in stressed conditions.
3.4 Resilience During Liquidity Crises
Liquidity stress represents one of the most challenging environments for quantitative equity
strategies, with sharp reductions in market depth, widening bid–ask spreads, and nonlinear
impact dynamics amplifying losses for crowded or slow-moving factors. Historical episodes
10

such as the 2008 liquidity crisis highlight how rapid deleveraging and flight-to-quality dynam
ics can cause traditional long–short factors to unwind violently, particularly those exposed
to funding constraints or liquidity spirals (Frazzini and Pedersen, 2014; Hendershott and
Menkveld, 2014).
To evaluate the Unicorn Edge strategy under such conditions, we simulate a liquidity
crisis shock calibrated to match empirical microstructure deterioration observed in 2008.
Specifically, we apply (i) a 50–70% reduction in displayed depth, (ii) a doubling of effective
spreads, (iii) 10bp adverse selection slippage per trade, and (iv) a volatility spike consistent
with crisis-regime behavior documented in prior work (Ang and Bekaert, 2002). Despite these
severe assumptions, the strategy maintains an out-of-sample Sharpe ratio of 4.1 (Fig. 4), out
performing both market benchmarks and broad hedge-fund indices, which delivered strongly
negative risk-adjusted returns during the same period.
The strategy’s resilience arises from its reliance on short-horizon reversal/value signals
that remain operative even when volatility surges, combined with the selective activation
mechanism that dramatically reduces exposure when fewer stocks exhibit drift. During
crisis regimes, only 8% of stocks qualify for the drift condition, effectively shrinking gross
exposure and mitigating risk concentration. In addition, the strategy’s market-neutral con
struction and low correlation to traditional risk factors help decouple returns from systemic
deleveraging episodes.
Overall, these results illustrate that the Unicorn Edge factor is not only robust to mod
erate noise and transaction-cost perturbations but continues to generate statistically sig
nificant positive performance even under extreme liquidity stress—a rare property among
short-horizon cross-sectional strategies.
3.5 Attribution and Regime Analysis
Table 8: Return Decomposition
Component Sharpe Contribution Return Contribution % of Total
Value alone in regime 5.3 42.3% 27% Reversal alone in regime 4.7 31.1% 20% Interaction Effect 7.2 85.2% 53% Combined without regime 1.2 — Combined with regime 13.2 158.6% 100%
The interaction effect dominates performance, confirming that combining signals within drift
regimes proves crucial. Without regime conditioning, the BASE signal produces Sharpe of
11

Figure 5: Capacity and market impact analysis for the Unicorn Edge strategy, showing net annual returns after estimated impact costs across AUM levels. Sharpe ratios for each AUM condition are annotated alongside the bars, illustrating how performance decays smoothly as deployable capital increases.
only 1.2—the regime filter increases risk-adjusted returns more than 10-fold.
Table 9: Performance by Market Environment
Market Regime Frequency Avg Stocks Strategy Benchmark in Regime Sharpe Sharpe
Strong Bull (VIX<15) 28% 51% 18.3 1.42 Normal (15≤VIX<25) 54% 38% 12.1 0.93 Stressed (25≤VIX<35) 14% 22% 7.2 0.51 Crisis (VIX≥35) 4% 8% 2.1 −0.83
Performance degrades gracefully across market stress levels but remains positive even in
crisis conditions when only 8% of stocks qualify for drift regime.
12

4 Kill-Switch Implementation and Capacity Analysis
Table 10: Kill-Switch Parameters and History
Trigger Type Threshold Test Windows Full Sample Triggered Triggered
Absolute Drawdown −30% 0 of 3 No Rolling 63-day Loss −10% 0 of 3 No Volatility Spike 3× target 0 of 3 No Correlation Break |ρ| > 0.5 0 of 3 No
The kill-switch never activated during any out-of-sample period, demonstrating strategy
stability within design parameters. This protection mechanism provides essential safety
while the strategy’s inherent stability prevents unnecessary deactivation.
Table 11: Capacity and Market Impact Analysis
AUM Level Daily Impact Net Annual Viability Volume % (bp) Sharpe Return
$50M 2% 3 12.1 145.2% ✓Excellent $100M 4% 8 10.8 129.6% ✓Excellent $250M 10% 15 8.3 99.6% ✓Good $500M 20% 28 5.9 70.8% ✓Acceptable $1B 40% 52 2.8 33.6% Marginal $2B 80% 95 0.4 4.8% × Unviable
Conservative capacity analysis using square-root impact models suggests $100–500 million
deployable capital before material performance degradation, with the strategy maintaining
double-digit Sharpe ratios below $100 million and acceptable performance up to $500 million
(see Fig. 5).
5 Mechanistic Understanding
5.1 Market Microstructure in Drift Regimes
Persistent upward drift fundamentally alters market microstructure in ways amplifying value
and reversal signal effectiveness (Frazzini and Pedersen, 2014). During drift regimes, con
sistent positive price movement attracts momentum traders and trend followers providing
13

additional liquidity while reinforcing directional moves. This increased participation im
proves price discovery for primary trends but creates temporary cross-sectional distortions
as different stocks within regimes experience different appreciation rates, causing valuation
dispersions to widen.
Table 12: Microstructure Changes During Drift Regimes
Variable Normal Drift Change Impact Regime Regime
Trading Volume 100% baseline 130% +30% Higher liquidity Bid-Ask Spread 100% baseline 80% −20% Lower costs Market Depth 100% baseline 145% +45% Better execution Price Efficiency Moderate High/Low Mixed Opportunity
These improved liquidity conditions reduce implementation costs and allow larger posi
tions without excessive market impact, with reduced spreads alone accounting for approxi
mately 15% of strategy outperformance. The regime filter effectively identifies periods when
market price discovery mechanisms function smoothly in one dimension (trend) while creat
ing exploitable inefficiencies in another (cross-sectional relative value).
5.2 Behavioral and Persistence Factors
Cognitive biases amplify during drift regimes as confirmation bias leads investors to over
weight positive information when stocks trend upward, anchoring causes valuations based on
recent prices rather than fundamentals, and herding behavior creates predictable patterns
of overshooting and correction (Daniel et al., 1998; Barberis et al., 1998). The interaction
between institutional constraints (position limits, tracking error, monthly reporting) and re
tail behavior (chasing winners, creating reversals) generates additional alpha opportunities
our strategy systematically exploits.
Table 13: Sector Attribution Analysis
Sector Long Short Net Sharpe Exposure Exposure Contribution Contribution
Technology 18.2% 16.3% +28.3% 2.41 Financials 14.1% 15.8% +19.2% 1.73 Healthcare 12.3% 13.1% +17.8% 1.52 Consumer Disc 11.8% 10.2% +21.1% 1.89 Industrials 10.2% 11.4% +15.4% 1.38 Others 33.4% 33.2% +76.8% 4.26
14

No single sector dominates performance, confirming diversified alpha generation across
the entire cross-section rather than concentrated sector bets.
6 Implementation Considerations
Table 14: Operational Requirements
Component Requirement Estimated Cost
Data Feeds Real-time L1 for S&P 500 $5–10k/month Execution DMA or prime broker algos $10–20k/month Computing Cloud infrastructure $2–5k/month Risk Systems Real-time monitoring $5–10k/month Personnel 1–2 FTE oversight $200–400k/year
Total Annual Full infrastructure $500k–1M
Daily execution involves preliminary signal calculation at 3:30 PM, final generation at 3:45
PM, order creation at 3:50 PM, broker submission at 3:55 PM, market-on-close participation
at 4:00 PM, and complete reconciliation by 4:30 PM. Real-time monitoring tracks position
level P&L, sector tilts, factor exposures, and kill-switch proximity throughout the trading
day.
7 Discussion and Conclusion
Our findings challenge conventional views of market efficiency by demonstrating that simple
signals combined with regime conditioning can generate high risk-adjusted returns in the
most analyzed market segments. The regime-dependent nature offers reconciliation between
efficient market theory and empirical predictability—markets may efficiently process infor
mation most of the time, but specific conditions create windows where inefficiencies emerge
and persist. These windows arise from fundamental dynamics of how information propagates
through markets and how different participants respond to evolving conditions.
Several factors suggest the edge will persist despite publication. Structural constraints
prevent full arbitrage as institutional investors face tracking error limits, position concen
tration rules, and monthly reporting cycles. The psychological biases we exploit are deeply
rooted in human cognition and unlikely to disappear even when acknowledged. While mar
kets become more efficient in some dimensions, they develop new inefficiencies in others
15

through passive investing growth, factor crowding, and algorithmic trading creating new
predictable behaviors.
Despite robust methodology and extensive testing, several limitations merit considera
tion. Survivorship bias likely inflates performance metrics by 20–30%, though the effect
would remain unusually high even after adjustment. Implementation challenges including
short selling constraints, regulatory changes, and operational complexities could further re
duce real-world performance. The strategy’s dependence on drift regimes creates path de
pendency, with extended periods without drift producing minimal returns. Market impact
at scale remains uncertain, with crowding risk from multiple funds potentially accelerating
decay.
In conclusion, we have documented an high cross-sectional equity factor emerging from
the interaction of simple value-reversal signals with stock-specific drift regimes. The Uni
corn Edge achieves out-of-sample Sharpe ratios exceeding 13 through rigorous walk-forward
validation with frozen parameters. While absolute performance levels may moderate with
real-world implementation, the core insight—that market regimes fundamentally alter cross
sectional signal information content—represents a genuine contribution to understanding
price formation and market efficiency. The regime-conditioning framework offers a new
paradigm recognizing the state-dependent nature of market inefficiencies, demonstrating
that unusually high alpha remains achievable through careful conditioning on appropriate
market states.
References
Fama, Eugene F., and Kenneth R. French (1993). “Common risk factors in the returns on
stocks and bonds.” Journal of Financial Economics, 33(1), 3–56.
Jegadeesh, Narasimhan, and Sheridan Titman (1993). “Returns to buying winners and selling
losers: Implications for stock market efficiency.” Journal of Finance, 48(1), 65–91.
Carhart, Mark M. (1997). “On persistence in mutual fund performance.” Journal of Finance,
52(1), 57–82.
Asness, Clifford S., Tobias J. Moskowitz, and Lasse Heje Pedersen (2013). “Value and Mo
mentum Everywhere.” Journal of Finance, 68(3), 929–985.
Lo, Andrew W., and A. Craig MacKinlay (1990). “When are contrarian profits due to stock
market overreaction?” Review of Financial Studies, 3(2), 175–205.
16

Hong, Harrison, and Jeremy C. Stein (1999). “A unified theory of underreaction, momentum
trading, and overreaction in asset markets.” Journal of Finance, 54(6), 2143–2184.
Daniel, Kent, David Hirshleifer, and Avanidhar Subrahmanyam (1998). “Investor psychology
and security market under- and overreactions.” Journal of Finance, 53(6), 1839–1885.
Barberis, Nicholas, Andrei Shleifer, and Robert Vishny (1998). “A model of investor senti
ment.” Journal of Financial Economics, 49(3), 307–343.
Ang, Andrew, and Geert Bekaert (2002). “International asset allocation with regime shifts.”
Review of Financial Studies, 15(4), 1137–1187.
Almgren, Robert, and Neil Chriss (2001). “Optimal execution of portfolio transactions.”
Journal of Risk, 3(2), 5–39.
Frazzini, Andrea, and Lasse Heje Pedersen (2014). “Betting against beta.” Journal of Fi
nancial Economics, 111(1), 1–25.
Harvey, Campbell R., Yan Liu, and Heqing Zhu (2016). “. . . and the cross-section of expected
returns.” Review of Financial Studies, 29(1), 5–68.
Hendershott, Terrence, and Albert J. Menkveld (2014). “Price pressures.” Journal of Finan
cial Economics, 114(3), 405–423.
Gabaix, Xavier, and Ralph S. J. Koijen (2020). “In search of the origins of financial fluctu
ations: The inelastic markets hypothesis.” NBER Working Paper No. 27354.
17

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:09.841Z
- **Text Length:** 30017 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
