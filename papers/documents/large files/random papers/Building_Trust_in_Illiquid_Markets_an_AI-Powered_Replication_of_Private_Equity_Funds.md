# PDF Document: Benhamou et al. - 2025 - Building Trust in Illiquid Markets an AI-Powered Replication of Private Equity Funds.pdf

**File Path:** Benhamou et al. - 2025 - Building Trust in Illiquid Markets an AI-Powered Replication of Private Equity Funds.pdf

**Processed Date:** 2026-02-10T18:13:36.216Z

**File Size:** 355.22 KB

**Total Pages:** 8

**Extracted Pages:** 8

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3496

**Title:** Building Trust in Illiquid Markets: an AI-Powered Replication of Private Equity Funds

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Building Trust in Illiquid Markets: an AI-Powered Replication of Private Equity Funds
E. Benhamou1,2 , JJ. Ohana1 , B. Guez1 , E. Setrouk1 , T. Jacquot1
1Ai for Alpha 2Dauphine PSL
{first name.last name}@aiforalpha.com
Abstract
In response to growing demand for resilient and transparent financial instruments, we introduce a novel framework for replicating private equity (PE) performance using liquid, AI-enhanced strategies. Despite historically delivering robust returns, private equity’s inherent illiquidity and lack of transparency raise significant concerns regarding investor trust and systemic stability, particularly in periods of heightened market volatility. Our method uses advanced graphical models to decode liquid-
 PE proxies and incorporates asymmetric risk adjustments that emulate private equity’s unique performance dynamics. The result is a liquid, scalable solution that aligns closely with traditional quarterly PE benchmarks like Cambridge Associates and Preqin. This approach enhances portfolio resilience and contributes to the ongoing discourse on safe asset innovation, supporting market stability and investor confidence. Keywords: Safe assets, Private equity replication, Liquidity, AI in finance, Syst-
emic trust, Risk transformation
1 Introduction
Trust in financial markets is increasingly tied to the ability of institutions to manage risk transparently, especially in illiquid asset classes. Among these, private equity (PE) has emerged over the past two decades as a dominant source of long-term returns. As highlighted by leading consultancy reports BCG (2020); McKinsey (2020, 2023), global assets under management (AUM) in private equity exceeded $13 trillion as of June 2023, growing steadily at nearly 2% annually since 2018. Major instituti-
onal investors have responded by heavily allocating capital to this space: CalPERS recently raised its private market target allocation from 33% to 40%, contributing over $15 billion to co-investments in just 18 months. Other major players such as Singapore’s GIC, Harvard University, CPPIB, and Yale have similarly committed between 32% and 39% of their portfolios to private markets. While the long-term return potential of private equity is undisputed, its illiquidity raises systemic concerns. PE i-
nvestments require extended capital lock-up periods, lack stan
dardized pricing, and depend on exit timing that can be misaligned with investor liquidity needs. In periods of market stress or when institutional liabilities increase, these characteristics render private equity portfolios especially burdensome to rebalance or unwind. The inability to liquidate holdings at fair value undermines both portfolio resilience and investor confidence. This illiquidity paradox—high-return potential at the cost of low liquidity—has led to significant interest in developi-
ng liquid alternatives that can replicate the economic exposures of PE without its structural constraints. However, as argued by Kaplan and Schoar (2005); Ang et al. (2014b,a); Franzoni et al. (2012), private equity’s outperformance may be intrinsically linked to its illiquidity premium. Investors are often compensated for the lack of liquidity with higher returns, raising the question of whether these returns can truly be replicated using liquid instruments. Nonetheless, academic and industry res-
earchers have proposed various liquid proxies and replication strategies. Stafford (2021) developed a method based on small public stocks with PE-like characteristics, while Thomson Reuters (2014) introduced a sector-based approach for greater scalability. These strategies partially address the liquidity issue, but they struggle to capture essential features of PE value creation—such as operational improvements, governance changes, and the discretion over exit timing—emphasized in Kaplan and Stro -
̈mberg (2009). Moreover, many of these proxies use assets that are themselves not very liquid or scalable. A key insight emerging from recent literature is the importance of asymmetric return patterns in private equity replication. PE returns tend to be positively skewed, in part due to downside smoothing and the avoidance of forced exits in declining markets. Studies such as Ang et al. (2014b) and Franzoni et al. (2012) demonstrate that incorporating these asymmetries—particularly those arising i-
n risk-off environments—can enhance replication fidelity. Capturing this behavior is essential to producing not only accurate, but trustworthy and resilient, synthetic exposures. This paper explores how advanced AI techniques and financial engineering can be used to create liquid instruments that approximate the performance of private equity funds while enhancing market transparency and stability. By doing so, we contribute to the ongoing discussion around con

structing ”safe assets” that meet the dual objectives of return generation and systemic resilience.
1.1 Innovation
Our contributions to the literature on private equity replication are threefold:
• Liquidity Transformation: We propose a strategy that uses highly liquid equity index futures to replicate the performance of private equity portfolios, thereby addressing institutional liquidity constraints without sacrificing scalability.
• AI-Based Precision: We apply advanced machine learning techniques, specifically graphical models, to decode the dynamics of liquid PE proxies. This enhances replication fidelity compared to traditional linear or Kalman-based models.
• Asymmetric Risk Adjustment: Our framework introduces asymmetry in the return modeling process to account for private equity’s reduced downside volatility, manager discretion in exit timing, and strategic value creation, resulting in a return profile that more closely mirrors actual PE funds.
1.2 Structure of the Paper
This paper is structured to address the central question of how AI can be leveraged to replicate private equity (PE) in a manner that enhances trust, transparency, and liquidity in financial markets—especially during periods of systemic stress. Section 2 reviews the foundational literature on private equity, with particular emphasis on institutional demand, the three pillars of PE value creation (corporate governance, operational optimization, and financial engineering), and the challenges that ar-
ise from the asset class’s inherent illiquidity. We also examine recent advances in liquid replication strategies and their implications for market trust and accessibility. Section 3 introduces our AI-powered framework for replicating PE performance. We detail a two-step process that decodes liquid proxies using graphical models and incorporates asymmetric return dynamics to better match the behavior of traditional PE funds. This section also explains how our methodological choices directly addres-
s issues of scalability, transparency, and systemic resilience. Section 4 presents empirical results demonstrating how our approach compares to traditional benchmarks. We assess performance metrics such as Sharpe ratio, drawdown, and correlation to evaluate the fidelity and robustness of the replication. Special attention is given to how our approach mitigates downside risk and enhances liquidity. Finally, Section 5 concludes with a summary of key contributions and discusses the broader implicatio-
ns of our findings for financial stability and safe asset design. We also outline future research directions, including the extension of our methodology to other illiquid asset classes and its potential role in macroprudential policy.
2 Literature Review
2.1 Private Equity, Value Creation, and the Trust-Liquidity Trade-Off
Private equity (PE) has long been recognized as a highperforming asset class due to its unique approach to value creation. Unlike venture capital, PE typically involves acquiring controlling stakes in mature companies, applying targeted strategies across three central pillars: corporate governance, operational optimization, and financial engineering Kaplan and Str ̈omberg (2009). These mechanisms empower PE sponsors to introduce strong managerial incentives, streamline operations, and enhance capi-
tal efficiency. Managerial alignment is particularly notable in private equity. As documented in Kaplan and Schoar (2005) and Acharya et al. (2009), transitioning from public to private ownership often results in executives acquiring significant equity stakes. This illiquid compensation structure aligns longterm interests and discourages short-term value manipulation, thereby contributing to sustained performance gains. Financial engineering, another key component, involves optimizing capital stru-
ctures and utilizing leverage to extract value. Jensen (1986) highlights how debt imposes discipline by limiting excess free cash flows, though this benefit is tempered by the risk of overleveraging Axelson et al. (2013). Meanwhile, operational improvements have become increasingly sophisticated since the 1990s, with top-performing PE firms bringing sector-specific knowledge and active portfolio support to enhance productivity and profitability Kaplan and Schoar (2005); Acharya et al. (2009). Thes-
e pillars of value creation help explain PE’s superior risk-return profile. However, this performance comes at the cost of liquidity and transparency. The long-term, illiquid nature of PE investments introduces significant challenges, especially in times of market stress when exit opportunities vanish and valuations become opaque. As Do ̈skeland and Str ̈omberg (2018) argue, this illiquidity necessitates a premium, particularly because it hinders portfolio rebalancing and liability management for -
institutions. Diversification across vintage years Robinson and Sensoy (2016) helps, but the core trust challenge remains: how can institutions maintain exposure to PE-like returns without sacrificing liquidity and transparency?
2.2 Replicating PE: Toward Liquid and Trustworthy Alternatives
To address this trust-liquidity paradox, researchers have explored how public market instruments might replicate PE returns while preserving liquidity. These efforts align with the broader objective of designing financial products that promote transparency and systemic stability. Rasmussen and Chinono (2015) were early contributors to this field, developing a public equities-based approach using small, leveraged, undervalued stocks. Their portfolios—focused on factors such as debt reduction and as-
set turnover—achieved high alphas under both CAPM and Fama-French models. Notably, their results reflected the potential to reproduce aspects of PE returns using disciplined, rules-based public strategies. However, volatility remained
2

elevated compared to private equity, revealing a core limitation: daily marked-to-market pricing cannot fully replicate the smoothed return profile of illiquid assets. Building on this, Stafford (2021) proposed a more structured replication using portfolios of small, low-multiple public companies with added leverage and extended holding periods. While this approach effectively mimics buyout fund exposures, it suffers from limitations in data quality, execution scalability, and the challenge of mo-
deling discretionary capital deployment. In parallel, the Thomson Reuters Private Equity Index Thomson Reuters (2014) offered a sector-based proxy for PE performance, improving scalability by relying on industrylevel trends rather than individual security selection. However, the loss of granularity may reduce its ability to capture the nuanced drivers of PE value creation—such as governance interventions or sales timing discretion Kaplan and Stro ̈mberg (2009). Gupta and Van Nieuwerburgh (2021) ad-
ded further perspective by decomposing PE performance into cash flow components and constructing replicating portfolios from listed equity and fixed income exposures. Their ”strip-bystrip” valuation framework sheds light on the macro and micro risk drivers of PE but stops short of producing daily liquid strategies that institutions can deploy at scale. Despite these advances, a central challenge persists: how to engineer daily tradable instruments that are not only returnaligned with private equit-
y but also exhibit lower drawdowns, smoother performance, and trustworthy signals in times of stress. Many replication models rely on backward-looking regressions or linear mappings, which fail to capture the nonlinear, asymmetric dynamics of private equity returns Franzoni et al. (2012); Ang et al. (2014b). This paper builds on these efforts by introducing a framework that uses AI and graphical modeling to replicate PE exposures through liquid instruments while explicitly incorporating return asy-
mmetries and performance smoothing. In doing so, we contribute to the design of transparent, resilient financial products—ones capable of serving as safe assets in portfolios that require both yield and trust.
3 Methodology
3.1 Goal
This study aims to develop a daily liquid replication framework that can emulate the performance of leading private equity (PE) benchmarks such as Cambridge Associates, Preqin, and Bloomberg’s Private Equity Buyout and All Indexes. These benchmarks are characterized by superior Sharpe ratios (typically around 1.5 or higher), low drawdowns, and annualized returns between 11% and 15%. However, their quarterly reporting frequency and illiquid nature make them unsuitable for real-time portfolio implem-
entation. This disconnect poses a challenge to institutional investors who seek the performance benefits of private equity while maintaining liquidity, transparency, and trust—especially during periods of systemic stress.
3.2 Performance of Private Equity Benchmarks
Tables 1 and 4 present a summary of key risk-return characteristics for established PE benchmarks. Notably, these benchmarks consistently outperform traditional equity indexes on a risk-adjusted basis. Their low volatility and drawdowns, along with high Sharpe and Sortino ratios, exemplify the traits of a ”safe asset” class—yet one currently inaccessible for daily liquid replication. While the Cambridge Associates benchmark shows relative independence, the Preqin, PEALL, and PEBUY benchmarks are c-
losely correlated (Table 2), reinforcing the consistency of their risk-return profiles across methodologies.
Table 1: Performance of Traditional Private Equity Indexes
Cambridge Associates (CA) Preqin
Start Date 31/03/2011 31/03/2011 End Date 29/12/2023 29/12/2023 Annual Return 13.9% 14.2% Annual Volatility 8.9% 7.5% Skew -0.27 0.06 Kurtosis 1.64 1.46 Sharpe Ratio 1.56 1.89 Sortino Ratio 2.18 2.66 Max DD 9.5% 7.3% 10% Worst DD 3.7% 1.7% Return/maxDD 1.5 1.9 Return/Worst 10% DD 3.8 8.5 Sampling quarterly quarterly
Table 2: Correlation between quarterly benchmarks
CA Prequin PEBUY PEALL
CA 100%
Prequin 61% 100%
PEBUY 75% 91% 100% PEALL 70% 96% 97% 100%
3.3 Challenges and Alternatives with Daily Indexes
Efforts to develop daily proxies for private equity have led to the emergence of indices such as Erik Stafford’s SHPEISM, the Thomson Reuters Private Equity Benchmark, and the S&P Listed Private Equity Index. These proxies offer daily quotations but suffer from substantially lower Sharpe ratios (below 0.55) and extreme drawdowns exceeding 40% (Table 3). Their return profiles are noisier and more vulnerable to tail events—undermining trust and their viability as substitutes for quarterly PE benchma-
rks in institutional settings. This trade-off between liquidity and performance remains a central barrier to building trustworthy PE replication products. Bridging this gap requires innovations that address both the volatility exposure and structural asymmetries in PE returns.
3.4 Objective of This Study
In response, this study proposes a replication methodology that leverages AI-powered graphical models and asymmetry
3

Table 3: Performance of Daily Liquid Indexes
Stafford TR Listed PE
Start Date 31/03/2011 31/03/2011 31/03/2011 End Date 21/01/2025 21/01/2025 21/01/2025 Annual Return 10.90% 12.50% 10.90% Annual Volatility 25.90% 24.80% 20.20% Skew -0.33 -0.64 -0.78 Kurtosis 3.02 1.55 18.2 Sharpe Ratio 0.42 0.5 0.54 Sortino Ratio 0.52 0.62 0.63 Max DD 47.20% 41.70% 50.40% 10% Worst DD 21.10% 33.40% 24.80% Return/maxDD 0.2 0.3 0.2 Return/Worst 10% DD 0.5 0.4 0.4 Sampling daily daily daily
aware adjustments to mimic the stable, smoothed performance of quarterly PE benchmarks. The goal is to construct a liquid, scalable solution that meets institutional needs for transparency, capital efficiency, and resilience—while maintaining alignment with private equity’s superior long-term characteristics.
3.5 Two-Step Approach
Our methodology follows a two-step process designed to enhance both replication accuracy and performance robustness:
• Step 1: Decoding with Graphical Models. We begin by estimating the composition of a liquid PE proxy (e.g., Stafford, TR, or Listed PE index) using graphical models. These probabilistic techniques generalize traditional regression and filtering approaches by modeling the dynamic relationships between asset weights and returns more accurately Roncalli and Teiletche (2007); Benhamou et al. (2024); Ohana et al. (2022).
• Step 2: Asymmetry Adjustment. Next, we introduce a return transformation that reflects private equity’s downside smoothing behavior. Specifically, negative returns are reduced by an adjustment factor (e.g., 0.9), capturing the drawdown mitigation commonly observed in PE NAVs.
The transformation is defined as:
R′
t = Rt, if Rt ≥ 0,
AF · Rt, if Rt < 0,
where AF = 0.9. This simple nonlinear mapping helps align the replicated performance with the asymmetric characteristics of traditional PE benchmarks. To ensure model stability and scalability, additional constraints are introduced on asset weights based on historical boundaries. The overall process is summarized in Algorithm 1. By integrating these steps, the methodology offers a trustenhancing solution for replicating private equity in daily tradable form—balancing performance fidelity with liqu-
idity and systemic reliability.
Algorithm 1 AI-Based Replication of Private Equity with Asymmetry Adjustment
1: Decode daily liquid PE proxy using equity index futures (Stafford, TR, or Listed PE) 2: Introduce asymmetry: scale down negative returns using adjustment factor (AF) 3: Train graphical model with maximum likelihood optimization 4: Conduct backtesting with continuous prediction correction 5: Apply sanity checks on historical weights 6: Enforce min/max constraints on weight evolution
Table 4: Performance of Bloomberg Private Equity Indexes
Bloomberg PEALL Bloomberg PEBUY
Start Date 31/03/2011 31/03/2011 End Date 29/12/2023 29/12/2023 Annual Return 11.4% 13.2% Annual Volatility 5.9% 7.6% Skew -0.29 -0.54 Kurtosis 0.82 1.75 Sharpe Ratio 1.95 1.73 Sortino Ratio 4.07 2.34 Max DD 5.2% 8.9% 10% Worst DD 2.% 2.1% Return/maxDD 2.2 1.5 Return/Worst 10% DD 5.6 6.2 Sampling quarterly quarterly
3.6 Graphical Model Primer
In building trust-enhancing frameworks for illiquid asset replication, it is essential to apply methodologies that combine transparency, adaptability, and interpretability. Graphical models serve as a powerful tool in this context. They offer a probabilistic framework for decoding daily return dynamics and asset weights in a way that accommodates nonlinearity and time-varying interactions—features characteristic of private equity performance. Graphical models represent variables (such as asset wei-
ghts or NAVs) as nodes in a network and dependencies as directed edges. This structure enables dynamic Bayesian inference, where latent states evolve over time and are continuously updated based on observed data. This is particularly important for creating replicable, transparent instruments that reflect the underlying mechanisms of private equity returns while being liquid and trustworthy. To replicate the net asset value (NAV) of a private equity proxy, we define a model where asset weights evol-
ve dynamically and determine the return at each time step. Suppose N AVt is the observed net asset value at time t, and
rEq
t , rtF x, rtIr, rtCo are the returns of equity, foreign exchange, interest rate, and commodity assets. The predicted NAV at time t, denoted Nd AV t, is given by:
Nd AV t = Nd AV t−1 1 + wEq
t−1rEq
t + . . . + wCo
t−1rCo
t (1)
This formulation highlights how portfolio dynamics are governed by prior weights and current returns. Unlike static
4

regression approaches, graphical models account for dependencies across both time and asset types. Key components of this approach include:
1. State Space Representation: Asset weights are treated as latent variables evolving over time, influenced by past allocations and current market conditions. This statespace formulation supports dynamic modeling akin to, but more expressive than, Kalman filters.
2. Dynamic Inference: Bayesian algorithms, including message passing, are used to estimate hidden states at each time step. This enables continuous recalibration of weights as new return observations arrive.
3. Cross-Asset Interaction: Unlike traditional filtering methods, graphical models capture interdependencies across asset classes (e.g., FX volatility affecting equity allocations), reflecting the interconnected nature of market risks.
4. Self-Correcting Mechanisms: The framework supports ongoing updates to the probability distribution of weights, making it highly adaptive and minimizing drift, which is crucial for institutional trust.
Graphical models offer an interpretable and scalable method for decoding PE proxy behavior, providing a significant improvement over traditional linear regressions. Though underutilized in finance, they are foundational in machine learning and signal processing Murphy (2012), and have powered early natural language and speech recognition systems (e.g., Siri). Figure 1 illustrates a simplified version of the graphical model architecture. Each time step includes observed NAVs and latent weights acro-
ss different asset categories. The model dynamically updates these weights while maintaining consistency over time, enabling robust real-time inference for daily liquid replication strategies.
3.7 Asymmetric Factors
One of the defining features of private equity benchmarks is their asymmetric return profile: strong upside potential paired with subdued downside volatility. This smoothing effect—attributed to infrequent valuation updates, discretionary pricing, and long investment horizons—presents a key challenge for liquid replication. To build trust in such proxies, we introduce asymmetry-aware components that capture these nonlinear characteristics, enhancing the realism and institutional viability of daily-
-traded replication strategies. We incorporate two types of asymmetric overlays to emulate this behavior:
1. Tail Risk Overlay Using Volatility Instruments: To mitigate drawdowns, we integrate a tail risk strategy based on volatility futures—specifically, dynamic long exposure to short-term (ST VIX) and medium-term (MT VIX) VIX futures. A machine learning framework identifies asymmetric risk environments by scanning three indicators:
(a) The 20-day Volatility-Adjusted Return of the VIX Future,
Time
t=1 t=2 t=3 t=4
NAV1 NAV2 NAV3 NAV4
Eq1
Fx1
Ir1
Co1
Eq2
Fx2
Ir2
Co2
Eq3
Fx3
Ir3
Co3
Eq4
Fx4
Ir4
Co4
Latent node (Eq, Fx, Ir, Co)
Observed node (NAVt)
Simplified Graphical Model for Time Inference
Figure 1: Simplified graphical model showing the relationship between observed NAv and inferred allocation as time goes by. For illustration purpose, we use different assets, with one being an Equity shortened in Eq, a second one an exchange rate shorted in Fx, a third one, an interest rates instrument shortened in Ir and finally a commodity asset shortened in Co.
(b) The VIX Curve Ratio (forward vs. spot), and
(c) The level of the VIX index, signaling deviations from historical norms.
When the signals align, the model allocates capital across ST and MT VIX futures to hedge against market stress.
Empirically, this approach boosts Sharpe ratios by over 70% and improves drawdown-to-return ratios by a factor of 2.5 when applied to equity portfolios over the 2007–2024 period. Annual returns improve from 9% to 12%, while drawdowns are halved. This illustrates the benefit of explicitly embedding tail protection into a liquid replication framework.
2. Momentum with a Risk-Off Filter: To complement tail risk hedging, we implement a momentum-based overlay inspired by CTA trend-following models. A hysteresis-based filter identifies prolonged negative equity trends and activates cross-asset long positions (e.g., in bonds, FX, or commodities) that typically exhibit negative correlation with equities.
Backtested over 2010–2024, this risk-off momentum strategy displays a -36% correlation with the S&P 500 and delivers positive returns in 88% of months when eq
5

uities fall more than 5%. It achieves an average monthly gain of 3.6% during such drawdowns—outperforming traditional CTA benchmarks by a factor of two.
Together, these asymmetric overlays serve dual purposes: they reduce maximum drawdowns and increase the fidelity of the replication relative to the smoothed performance of quarterly PE benchmarks. Most importantly, they help establish trust in daily liquid proxies by reducing vulnerability to shocks and creating a more stable, resilient investment experience—thereby advancing the broader goal of safe, transparent asset construction in illiquid markets.
4 Results and Statistics
4.1 Data Description
To assess the validity and scalability of AI-driven private equity replication, we construct a comprehensive dataset of liquid proxies and industry benchmarks. Three daily liquid indexes are used as replication targets: the Erik Stafford proxy (Bloomberg: SHPEI Index), the Thomson Reuters Refinitiv Private Equity Benchmark (Bloomberg: TRPEI Index), and the S&P Listed Private Equity Index (Bloomberg: SPLPEQNT Index). These represent real-time investable proxies for PE-like exposures. The training p-
eriod spans from 2005 to the end of 2010, while the out-of-sample test period begins in March 2011 to align with the availability of quarterly private equity benchmarks, including the Cambridge Associates, Preqin, Bloomberg Private Equity Buyout (PEBUY), and Bloomberg Private Equity All (PEALL) indexes. These quarterly benchmarks serve as performance anchors, reflecting the core return and risk characteristics institutional investors aim to replicate.
4.2 Replication Accuracy and Trust Metrics
To evaluate the effectiveness of AI-powered replication in building a transparent, high-frequency proxy for illiquid private equity exposure, we examine return characteristics, risk-adjusted performance, and benchmark alignment. Table 5 presents the performance of the three decoded strategies. All exhibit robust annualized returns (17.1%–17.7%) with volatility levels significantly below their original benchmarks. Sharpe ratios exceed 1.2 across the board—demonstrating considerable improvement over-
 raw liquid proxies (Table 3)—while preserving the essential return premia observed in traditional PE indexes.
Table 5: Performance of AI-Decoded Strategies: Listed PE, TR, and Stafford
Listed PE TR Stafford
Annual Return 17.1% 17.7% 17.4% Annual Volatility 13.6% 14.0% 14.2% Sharpe Ratio 1.26 1.27 1.23 Max Drawdown 17.6% 19.2% 19.2% Return / Max DD 1.0 0.9 0.9
The decoding approach captures the core performance patterns while reducing tail risks—an essential element for trust in liquid replication. Table 6 confirms strong fidelity with benchmark trends. All strategies exceed 89% correlation on a one-year horizon and maintain long-run correlations above 63%. This validates the method’s capacity to deliver persistent exposure with high transparency.
Table 6: Correlation with Original Benchmarks
Strategy Lifetime 1Y 3Y 5Y 7Y 10Y
Stafford 64% 94% 68% 81% 73% 71% Listed PE 63% 89% 65% 79% 75% 72% TR 69% 97% 71% 81% 78% 76%
4.3 Cross-Strategy Consistency and Robustness
The three decoding strategies exhibit strong internal coherence (Table 7), indicating methodological stability across diverse input benchmarks. This supports their scalability and reliability in institutional settings.
Table 7: Cross-Correlation Among Decoded Strategies
Stafford Listed PE TR
Stafford 100% 83% 74% Listed PE 83% 100% 83% TR 74% 83% 100%
4.4 Downside Mitigation and Temporal Consistency
Table 8 and Figure 2 display annual returns versus benchmarks, illustrating how the AI-replicated strategies maintain performance in strong equity years and reduce losses in crisis periods (e.g., 2022, 2018). These features enhance institutional confidence in the strategy’s robustness and capital preservation.
Figure 2: Comparison of AI-Decoded Strategies and Benchmarks
6

Table 8: Yearly returns
Benchmark Decoding
Years Listed PE TR Stafford Listed PE TR Stafford
2025 4.5% 4.6% 3.2% 2.2% 1.8% 1.6% 2024 24.0% 31.3% 2.7% 16.0% 16.1% 16.2% 2023 39.0% 4.4% 23.1% 22.5% 21.3% 20.6% 2022 -29.0% -31.1% -11.1% -4.2% -4.0% -1.1% 2021 41.8% 29.8% 43.4% 13.2% 12.8% 10.3% 2020 4.5% 25.6% 17.1% 52.3% 53.2% 52.2% 2019 44.6% 37.4% 12.6% 31.6% 32.0% 30.3% 2018 -14.0% -11.9% -14.7% -8.9% -7.9% -8.4% 2017 24.3% 31.5% 7.5% 13.8% 14.3% 12.2% 2016 13.6% 8.6% 28.5% 9.3% 10.2% 11.2% 2015 -3.2% 6.7% -9.4% 7.7% 9.8% 8.0% 2014 -1.6% 20.6% 7.8% 32.5% 39.6% 40.2% 2013 35.3% 42.6% 47.0-
% 32.2% 30.7% 31.7% 2012 29.0% 20.4% 17.9% 16.0% 15.4% 16.0%
Together, these results reinforce the thesis that artificial intelligence, when combined with return asymmetry and robust dynamic modeling, can serve as a credible and scalable solution for replicating private equity. The consistency across time, benchmarks, and metrics builds the transparency and trust necessary for adoption in risk-aware and liquidityconstrained portfolios.
5 Conclusion
This study proposes a novel and scientifically grounded framework for replicating private equity (PE) fund performance in liquid markets, addressing a critical challenge at the intersection of institutional demand, market stability, and asset accessibility. Motivated by the structural illiquidity of traditional PE investments and the rising need for transparency and scalability, we develop an AI-powered approach that combines dynamic graphical models with asymmetric return conditioning. Our empiri-
cal results demonstrate that this methodology not only improves alignment with established quarterly benchmarks—such as those from Cambridge Associates and Preqin—but also mitigates drawdowns and enhances Sharpe ratios relative to existing liquid proxies. The framework captures key characteristics of private equity returns, including their asymmetric risk profile and crisis resilience, while providing daily liquidity and scalability through the use of public market instruments. By introducing inte-
rpretable, probabilistic inference via graphical models and systematically incorporating tail-risk and momentum overlays, this work contributes to the growing literature on asset class replication and offers a pathway toward democratizing access to PE-like exposures. In doing so, it bridges the gap between trust in illiquid markets and the operational realities of modern portfolio construction. Future research may extend this framework to other illiquid asset classes, such as real estates, infrast-
ructure or private credit, and examine its integration into macroprudential policy design. By facilitating the construction of synthetic, liquid analogues to traditionally illiquid investments, this work contributes to a broader conversation about how financial inno
vation can support trust, stability, and accessibility in modern capital markets.
References
Viral V Acharya, Conor Kehoe, and Michael Reyner. Private equity vs. plc boards in the uk: A comparison of practices and effectiveness. Journal of Applied Corporate Finance, 21(1):45–56, 2009.
Andrew Ang, Bingxu Chen, William Goetzmann, and Ludovic Phalippou. Estimating private equity returns from limited partner cash flows. Technical Report 13-83, Columbia Business School Research Paper, 2014.
Andrew Ang, Dimitris Papanikolaou, and Mark M. Westerfield. Portfolio choice with illiquid assets. Management Science, 60(11):2737–2761, 2014.
Ulf Axelson, Tim Jenkinson, Per Stro ̈mberg, and Michael Weisbach. Borrow cheap, buy high? the determinants of leverage and pricing in buyouts. The Journal of Finance, pages 2223–2269, 2013.
BCG. Global Asset Management 2020, May 2020. Retrieved from Boston Consulting Group.
Eric Benhamou, Jean-Jacques Ohana, and Beatrice Guez. GRIP: Graphical models revealing insights for portfolio replication - a learning approach. SSRN Electronic Journal, April 2024.
Trond Do ̈skeland and Per Stro ̈mberg. Evaluating investments in unlisted equity for the norwegian government pension fund global (gpfg). Swedish House of Finance Research Paper, 1(23-03), 2018.
Francesco Franzoni, Eric Nowak, and Ludovic Phalippou. Private equity performance and liquidity risk. The Journal of Finance, 67(6):2341–2373, 2012.
Arpit Gupta and Stijn Van Nieuwerburgh. Valuing private equity investments strip by strip. The Journal of Finance, 76(6):3255–3307, 2021.
Michael Jensen. Agency costs of free cash flow, corporate finance, and takeovers. The American Economic Review, pages 323–329, 1986.
Steven N. Kaplan and Antoinette Schoar. Private equity performance: Returns, persistence, and capital flows. The Journal of Finance, 60(4):1791–1823, 2005.
Steven Kaplan and Per Stro ̈mberg. Leveraged buyouts and private equity. Journal of Economic Perspective, 23:121146, 2009.
McKinsey. McKinsey’s Private Markets Annual Review, February 19 2020. Retrieved from McKinsey.
McKinsey. Mckinsey’s private markets annual review 2023. McKinsey Insights, 2023. Accessed online at https://www.mckinsey.com/industries/private-capital/ our-insights/mckinseys-private-markets-annual-review.
Kevin P Murphy. Machine learning: a probabilistic perspective. MIT press, 2012.
7

Jean-Jacques Ohana, Eric Benhamou, David Saltiel, and Beatrice Guez. Deep decoding of strategies. SSRN Electronic Journal, June 2022.
Daniel Rasmussen and Brian Chinono. Leveraged small value equities. Available at SSRN 2639647, 2015. Retrieved from SSRN.
David T. Robinson and Berk A. Sensoy. Cyclicality, performance measurement, and cash flow liquidity in private equity. Journal of Financial Economics, 122(3):521–543, 2016.
Thierry Roncalli and Jerome Teiletche. An alternative approach to alternative beta. Available at SSRN 1035521, 2007.
Erik Stafford. Replicating private equity with value investing, homemade leverage, and hold-to-maturity accounting. The Review of Financial Studies, 35(1):299–342, 02 2021.
Thomson Reuters. Thomson Reuters Private Equity Buyout Index Methodology, 2014. Available at https://www.thomsonreuters.com/content/dam/ openweb/documents/pdf/tr-com-financial/methodology/ private-equity-buyout-index-methodology.pdf.
8

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:36.216Z
- **Text Length:** 34964 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 8 of 8
