# PDF Document: Beck et al. - Measuring economic outlook in the news timely and efficientlya.pdf

**File Path:** Beck et al. - Measuring economic outlook in the news timely and efficientlya.pdf

**Processed Date:** 2026-02-10T18:14:55.277Z

**File Size:** 1290.29 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3144

**Title:** Measuring economic outlook in the news timely and efficientlya

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Measuring economic outlook in the news timely and efficientlya
Elliot Beck, Franziska Eckert, Linus Kühne, Helge Liebert, Rina Rosenblatt-Wischb
August 2025
Abstract
We introduce a novel indicator that combines machine learning and large language models with
traditional statistical methods to track sentiment regarding the economic outlook in Swiss news.
The indicator is interpretable and timely, and it significantly improves the accuracy of GDP
growth forecasts. Our approach is resource-efficient, modular, and offers a way of benefitting
from state-of-the-art large language models even if data are proprietary and cannot be stored or
analyzed on external infrastructure – a restriction faced by many central banks and public
institutions.
JEL classification: E66, C45, C55
Keywords: Sentiment analysis, economic outlook, big data, large language models,
natural language processing, neural networks
a For this publication, use was made of media data made available via Swissdox@LiRI by the Linguistic Research Infrastructure of the University of Zurich (see https://www.liri.uzh.ch/en/services/swissdox.html for more information). We would like to thank Simone Auer, Vincent Barthe, Simon Beyeler, Matthias Gubler, Matthias Lutz, Jonas Meier and participants of the EDS Workshop for their valuable comments. The views expressed in this paper are those of the authors and do not necessarily reflect tho-
se of the Swiss National Bank.
b Swiss National Bank, Börsenstrasse 15, CH-8022 Zürich, Switzerland. Corresponding author: rina.rosenblatt@snb.ch

2
1. Introduction
In times of crises and high uncertainty, timely information about economic conditions is crucial for policymakers and financial market participants. The advantages of high-frequency and unstructured data over traditional lower-frequency macroeconomic data in these situations are increasingly recognized (see, e.g., Hirschbühl et al., 2021; Woloszko, 2024).
In this paper, we develop the News-based Economic Outlook for Switzerland (NEOS), a novel indicator for economic outlook based on a representative and comprehensive sample of Swiss newspaper articles. Because newspaper articles capture economic changes as they happen, NEOS enables a near real-time assessment of the economic outlook. In contrast, traditional sentiment indicators rely on surveys with fixed release schedules and are typically published with a delay. In addition, NEOS reflects the wid-
e range of economic topics covered in the news and the importance of each topic based on media attention. In terms of performance, NEOS significantly improves the accuracy of Swiss GDP growth forecasts.
In recent years, both lexicon-based approaches and more recently large language models (LLMs) have been used to measure sentiment from news (see, e.g., Barbaglia et al., 2025; Binsbergen et al., 2024). LLMs are able to capture semantic meaning, however, they can be very resource intensive. Constraints such as limited computing resources or cloud restrictions
hinder the deployment of LLMs, especially for institutions that work with proprietary or confidential data that cannot be stored or analyzed on external infrastructure.
To construct NEOS, we combine machine learning methods, smaller embedding models and LLMs with traditional statistical methods. Compared to other LLM-based approaches, our approach only requires limited resources for computation. The results are transparent and interpretable, a critical requirement for policy applications.
2. Data and methods
Chart 1 gives an overview of the different steps necessary to compute NEOS.
Chart 1: Overview of computation steps for NEOS
(5.b) Compute indicator
(1) Newspaper articles (3) Filter relevant articles
(4) Generate example articles
(2) Get document embeddings
jina-embeddings-v3
--??
--??
(5.a) Logistic regression
0.3
0.8
0.3 0.8
...
per month
0.68
+

Ø
LiRI – Linguistic Research Infrastructure Swissdox@LiRI

3
(1) Swissdox@LiRI offers a comprehensive database of Swiss newspaper articles. The database contains almost all Swiss media coverage in German and French in terms of publication volume. We use newspaper articles from January 1999 until May 2025 from 158 different print and online media outlets.1 This yields 22.0 million articles in German and 4.2 million articles in French. The Swissdox@LiRI database is updated continuously, and the data are available almost in real time. On average, new newspaper-
 articles are available in the database with a lag of two days.
(2) We use the embedding model jina-embeddings-v3 by JinaAI (Sturua et al., 2024) to generate document embeddings, i.e., transforming the articles into a numerical representation (a vector of dimension 1024). The model preserves semantic meaning, which means that the overall message and tone of a document is captured in the embedding. It is multilingual, i.e., it can embed German and French documents, and it is able to process comparably long documents (8192 input tokens).
(3) We identify all articles that broadly relate to economics. Some media outlets in the Swissdox@LiRI database record the section in which the article was published. We assume that articles published in sections like “Business”, “Markets”, “Economics” cover some area of economics. We use the embeddings of articles published in these sections to train a neural
network to classify whether an article is about economics or not. We then use this model to identify articles related to economics in the data. We keep the articles related to economics and discard the others, leaving us with 2.7 million relevant newspaper articles in German and 0.4 million in French. The number of relevant articles per month increased from around 3000 articles in January 1999 to a peak of around 17,000 articles per month during the COVID-19 pandemic and to roughly 13,000 articles-
 in May 2025.
(4) To avoid time-intensive and potentially biased manual labelling of each article’s outlook as positive or negative, we generate synthetic example articles conveying positive or negative economic outlook using the LLM Claude 3.5 Sonnet (Anthropic, 2024). We generate articles with a positive or negative outlook for different economic areas, e.g., financial markets, the labor market or trade. For an example prompt (the instruction given to the LLM) and a generated example article see Appendix A.1.
We generate 256 articles, 128 with a stereotypically positive and 128 with a negative economic outlook, and convert them into document embeddings.
1 Swissdox@LiRI offers even more sources. However, we discard some very specific media outlets that presumably do not contain any relevant articles (e.g. TV guides and various magazines). In addition, we only concentrate on print and online newspaper articles, excluding other sources like radio and TV transcripts.

4
Chart 2
Swiss industrial sector struggles with slump in orders and strong franc
The situation in Swiss industry continues to worsen. According to a recent survey by the industry association Swissmem, 68% of the companies surveyed reported a significant drop in orders compared to the previous year. ...
Swiss financial center benefits from new regulation
The latest regulatory changes in the Swiss financial sector are beginning to have a positive impact: Swiss banks' assets under management rose by 8.2% in the last quarter, while profitability increased significantly. ...
Each embedded article is a 1024-dimensional vector. To display the embedded articles in a
chart, we use the unsupervised dimension reduction algorithm UMAP (McInnes et al., 2020) to project the high-dimensional data onto a two-dimensional space. Chart 2 shows the UMAP visualization of the 256 embedded, synthetic articles. The embedded articles clearly separate into two distinct clusters (positive and negative economic outlook), which indicates that the embeddings effectively capture differences in sentiment.
(5.a) The clear separation into two clusters in Chart 2 suggests that a linear model can be used to distinguish between positive and negative outlook. We fit a logistic regression model to the embedded, synthetic articles. Since we have more input variables (1024) than observations (256), we use logistic regression with regularization (Le Cessie and Van Houwelingen, 1992). (5.b) We then apply the fitted logistic regression to the embeddings of the relevant news articles (see Buckmann et al., 2025)-
. This procedure results in a probability score between zero and one for each of the relevant articles. A probability score closer to one (zero) reflects that the article conveys a more positive (negative) outlook. In a final step we compute our indicator by averaging all probability scores in each month. At this stage, other aggregation methods for the predicted probabilities are possible. We also compute timelier variants of NEOS using just the articles released during the first 7, 14, or 21 day-
s of each month, providing sentiment signals up to three weeks ahead of traditional indicators.
The resulting indicator is transparent and interpretable: We can measure the influence of each article and retrieve its content. From the content of influential articles, we can gain insights into what drives the economic outlook at any given time.

5
(1)
3. Results
Chart 3 presents our indicator together with real Swiss GDP growth and survey-based indicators. NEOS correlates well with GDP growth and catches turning points similarly to other indicators (see Appendix A.2 for correlations of NEOS and other indicators with GDP growth for different lags).
Chart 3
Following the approach of Kalamara et al. (2022), we evaluate the ability of NEOS to improve forecasts of real Swiss GDP growth in a pseudo-out-of-sample experiment from Q1 1999 to Q1 2025. We consider the common scenario where a policymaker towards the end of
quarter t forecasts GDP for the quarters t, t + 1, and t + 2 with GDP data being available
only up to t − 1. We examine whether NEOS can improve these forecasts and compare its performance to that of other indicators. For each indicator, we estimate the following regression model:
yt+h = α + βyt−1 + γxt
(m) + εt,
where yt is year-on-year GDP in quarter t, h ∈ {0, 1, 2} the forecast horizon, xt
(m) the
indicator in month m of quarter t, and εt is a mean-zero error.
We compare NEOS to other indicators: the manufacturing and service PMIs, the KOF Business Situation Indicator, the SECO Consumer Sentiment Index, and a lexicon-based indicator derived from the same newspaper articles as NEOS. The lexicon-based indicator serves as a text-based baseline using the same data as NEOS (see Appendix A.3 for details). All indicators are available/released at the end of each month or shortly after. Accordingly,
for NEOS and all other indicators xt
(m) we use the value for the second month (m = 2) of
quarter t, reflecting the information that would be available to a policymaker towards the end
of that quarter. The early-release variants of NEOS, using just the first 7, 14, or 21 days of
each month, allow us to use the value for the third month (m = 3) of quarter t in the forecasting exercise.

6
We evaluate the forecast performance of each indicator by comparing the regression model in
Equation (1) to an AR(1) model, i.e., Equation (1) with γ = 0. We report the RMSE ratios
(Equation (1) / AR(1) model); values below one indicate improved accuracy. We assess statistical significance by applying a modified Diebold-Mariano test.2 We use an expanding window starting with eight quarters. Table 1 presents the results.
Table 1: Forecasting Swiss year-on-year GDP growth for the period from Q1 1999 until Q1 2025
Indicator h = 0 h = 1 h = 2
NEOS 0.864 (0.054) 0.802 (0.055) 0.818 (0.077) NEOS (first 7 days in third month) 0.911 (0.067) 0.835 (0.069) 0.837 (0.085)
NEOS (first 14 days in third month) 0.910 (0.061) 0.797 (0.040) 0.812 (0.066)
NEOS (first 21 days in third month) 0.920 (0.049) 0.780 (0.032) 0.803 (0.072)
Lexicon-based approach 0.925 (0.148) 0.911 (0.164) 0.919 (0.218) Manufacturing PMI for Switzerland 0.826 (0.051) 0.800 (0.063) 0.817 (0.042)
Service PMI for Switzerlanda 0.851 (0.119) 0.963 (0.127) 0.953 (0.124)
KOF Business Situation Indicatorb 0.996 (0.452) 1.017 (0.904) 1.017 (0.828)
SECO Consumer Sentiment Indexc 0.965 (0.387) 0.989 (0.439) 0.969 (0.362)
RMSE ratios with Diebold-Mariano p-values in parentheses for three different horizons (in quarters). Best RMSE ratios written in bold. Source(s): KOF Swiss Economic Institute, procure.ch, SECO, SNB, Swissdox@LiRI, UBS
a Evaluation limited to the period from Q1 2014 until Q1 2025 due to availability of the indicator. b Evaluation limited to the period from Q2 2009 until Q1 2025 due to availability of the indicator. c For this quarterly indicator, we regress GDP in quarter t + h on the indicator value for quarter t, released in the middle of quarter t.
NEOS and its early-release variants consistently improve forecasts across all horizons, with RMSE ratios considerably below one and Diebold-Mariano p-values statistically significant at the 10% level. The early-release variants sometimes even outperform NEOS, demonstrating that gains in forecast accuracy can be obtained weeks before traditional data releases. NEOS is especially valuable during crises, notably the global financial crisis and COVID-19, when it markedly reduces forecast errors (see A-
ppendix A.4). The other indicators perform worse than NEOS except the manufacturing PMI, which outperforms NEOS in some cases but is costlier to produce and comes with a fixed release schedule. Overall, NEOS offers a strong combination of predictive value and timeliness.
To illustrate the advantage of timeliness for policy in times of crises, Chart 4 shows the daily month-to-date evolution of NEOS between February and April 2025. Blue diamonds mark month-end values, matching Chart 3. The chart illustrates how sentiment in Switzerland shifted with US tariffs announcements.
2 We follow Beck et al. (2025) and implement a modified version of the Diebold and Mariano (1995) test, using heteroskedasticity- and autocorrelation-consistent (HAC) standard errors to account for serial correlation in the forecast errors.

7
Chart 4
4. Conclusion
NEOS provides a complementary perspective to traditional survey indicators and demonstrates significant predictive value for forecasting GDP growth. In contrast to traditional indicators, NEOS can be computed and updated in near real time, offering a timely advantage to indicators with fixed release schedules.
Our indicator is transparent and interpretable. It is based on a single data source and if required, each article’s influence on the indicator can be measured and the content can be retrieved for interpretation. Moreover, the structure of our approach is modular and flexible. We can adjust the constituent embedding model or LLM to keep track of technical developments. The modularity of our approach also makes it straightforward to build new indicators to track developments in other variables or to-
 use different data sources. Finally, our approach requires few computational resources compared to other LLM-based approaches. This is a major advantage when using proprietary data that cannot be stored or analyzed on external infrastructure.
References
Anthropic (2024). Claude 3.5 Sonnet [Large language model]. Accessed on February 10, 2025. https://www.anthropic.com/news/claude-3-5-sonnet.
Luca Barbaglia, Sergio Consoli, Sebastiano Manzan, Luca Tiozzo Pezzoli and Elisa Tosetti (2025). Sentiment analysis of economic text: A lexicon‐based approach. Economic Inquiry,
Western Economic Association International, 63(1), pages 125-143.
Elliot Beck and Michael Wolf (2025). Forecasting Inflation with the Hedged Random Forest. https://ssrn.com/abstract=5162541.

8
Jules H. van Binsbergen, Svetlana Bryzgalova, Mayukh Mukhopadhyay and Varun Sharma (2024). (Almost) 200 Years of News-Based Economic Sentiment. NBER Working Paper 32026, National Bureau of Economic Research, Inc.
Marcus Buckmann and Ed Hill (2025). Improving text classification: logistic regression
makes small LLMs strong and explainable ‘tens-of-shot’ classifiers. Bank of England, Staff Working Paper No. 1,127.
Saskia le Cessie and Johannes C. van Houwelingen (1992). Ridge Estimators in Logistic
Regression. Journal of the Royal Statistical Society. Series C (Applied Statistics), 41(1), pages 191-201.
Francis X. Diebold and Roberto S. Mariano (1995). Comparing Predictive Accuracy. Journal of Business & Economic Statistics, 13(3), pages 253-263.
Luyu Gao, Xueguang Ma, Jimmy Lin and Jamie Callan (2022). Precise Zero-Shot Dense Retrieval without Relevance Labels. https://arxiv.org/abs/2212.10496.
Dominik Hirschbühl, Luca Onorante and Lorena Saiz (2021). Using machine learning and big data to analyse the business cycle. ECB Economic Bulletin, Issue 5, pages 90-108. https://www.ecb.europa.eu/pub/pdf/ecbu/eb202105.en.pdf.
Eleni Kalamara, Arthur Turrell, Chris Redl, George Kapetanios and Sujit Kapadia (2022). Making text count: Economic forecasting using newspaper text. Journal of Applied Econometrics, 37(5), pages 896-919.
Tim Loughran and Bill Mcdonald (2011). When is a Liability not a Liability? Textual Analysis, Dictionaries, and 10-Ks. The Journal of Finance, 66(1), pages 35-65.
Leland McInnes, John Healy and James Melville (2020). UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction. https://arxiv.org/abs/1802.03426.
Saba Sturua, Isabelle Mohr, Mohammad Kalim Akram, Michael Günther, Bo Wang, Markus Krimmel, Feng Wang, Georgios Mastrapas, Andreas Koukounas, Nan Wang and Han Xiao (2024). jina-embeddings-v3: Multilingual Embeddings With Task LoRA. https://arxiv.org/abs/2409.10173.
Nicolas Woloszko (2024). Nowcasting with panels and alternative data: The OECD weekly tracker. International Journal of Forecasting, 40(4), pages 1302-1335.

9
Appendix
A.1 Example of a prompt and output
As an example, to generate a synthetic news article covering financial markets we used the prompt below in Claude 3.5 Sonnet. All prompts were formulated in such a way that the generated articles convey a positive or negative outlook/assessment.
[Translated from German]
I want to classify newspaper articles from the business sections of Swiss newspapers (e.g., NZZ, Tagesanzeiger, Handelszeitung) according to whether they give a rather negative or positive outlook for developments on the financial markets. To do this, I use high-dimensional embeddings of the newspaper articles calculated with BERT. I then compare these embeddings with the embeddings of artificially generated newspaper articles that are prototypically positive or negative in terms of the outlook fo-
r the financial markets, using cosine similarity.
For this assignment, write three business articles each on financial and stock markets with a positive and negative outlook (six articles in total) that differ in content. Each article should be approximately 400-500 words long. These articles should simulate realistic business journalism and be diverse in content.
Requirements:
Variety of topics: Choose different topics related to the financial markets (e.g., stock and stock market developments (e.g., SMI, SPI, Dow Jones, DAX, etc.), bonds, commodities (e.g., gold, oil), and regulation in the financial sector).
Style & structure: The articles should be written like realistic journalistic articles, similar to texts from NZZ or Handelszeitung. Use a factual, fact-based writing style with typical business journalism phrasing.
Clear polarization: The positive articles should present optimistic economic developments. The negative articles should highlight pessimistic developments. The economic perspective (positive or negative) must be clearly recognizable without appearing exaggerated or unrealistic.
Embedding-friendly wording: Use key economic terms and technical terminology to achieve the highest possible selectivity of embeddings between positive and negative articles. Use a mixture of quantitative data (figures, statistics) and qualitative economic assessments. Vary sentence structures and wording between positive and negative articles to avoid bias in the classification.
These articles should serve as reference points to better classify real newspaper articles using cosine similarity.
Sample text for positive outlook generated by Claude 3.5 Sonnet:
[Translated from German]
Swiss stock market on track for record high: SMI breaks through important mark
The Swiss Market Index (SMI) continues its impressive upward trend, yesterday exceeding the psychologically important mark of 11,800 points for the first time. This positive development is being driven in particular by heavyweights Nestlé, Novartis, and Roche, all of which presented solid quarterly figures.
Analysts at Credit Suisse are optimistic about the further development of the Swiss benchmark index. “The fundamental data of the SMI companies are extremely robust, and we see further upside potential,” explains Martha Bernhard, chief strategist at the major bank. The defensive orientation of the index is proving to be an advantage in the current market phase.
The positive momentum is supported by persistently low inflation in Switzerland. With an inflation rate of 1.2 percent, Switzerland is well below the European average. This gives the Swiss National Bank (SNB) more monetary policy leeway than other central banks.
Small and medium-sized companies are also benefiting from this environment. The Swiss Performance Index (SPI) also reached a new all-time high, underscoring the broad base of the upturn.

10
Sample text for negative outlook generated by Claude 3.5 Sonnet:
[Translated from German]
Investors concerned: Tech stocks experience historic sell-off
Technology stocks on Wall Street are currently experiencing their longest losing streak since the dot-com bubble. The technology-heavy Nasdaq index has plummeted by an alarming 28 percent since the beginning of the year. Former highflyers have been hit particularly hard: shares in Meta, Facebook's parent company, have lost more than 60 percent of their value within six months.
Analysts at Credit Suisse are warning of further price losses. “The combination of rising interest rates, high inflation, and declining consumer spending is hitting the technology sector hard,” explains Thomas Müller, chief strategist at the major bank. The aggressive tightening of monetary policy by the US Federal Reserve is weighing particularly heavily on highgrowth companies whose profits are only expected in the future.
The Swiss benchmark index SMI is also suffering from the weakness in tech. Shares in semiconductor manufacturer AMS Osram have lost over 40 percent since the beginning of the year. Market observers expect a sustained correction that could also spread to other sectors.
Note: Instead of using an LLM for text generation, we first experimented with short statements written by ourselves conveying positive or negative economic outlook, embedded them and used these embeddings to compute the indicator. We found, however, that our indicator improves significantly if the generated texts resemble real newspaper articles in terms of length, style, structure etc. These findings are in line with Gao et al. (2022).
A.2 Correlations with GDP growth
Table 2 benchmarks NEOS and its early-release variants against other indicators for economic outlook. The table shows the average correlations of the indicators with real year-on-year (yoy) and quarter-on-quarter (qoq) GDP growth for different lags over the period Q1 1999 until Q1 2025. Since GDP is a quarterly time series, we transform all monthly indicators to quarterly time series by taking three-month averages over the respective quarter. For instance,
a lag of three quarters means that we compare GDP growth at time t with the respective
indicator at time t − 3. As an additional benchmark we compute a second indicator based on newspaper articles, which uses a simpler lexicon-based approach (described in Appendix A.3). NEOS correlates with GDP growth in a similar way to the other indicators and outperforms for certain lags. The correlations with quarter-on-quarter GDP growth are much lower for all indicators.3 NEOS shows the highest correlation for a lag of one quarter with respect to yearon-year GDP. The contemporaneous correlatio-
ns (lag 0) can still be interpreted as a lead of the indicator since GDP is released with a delay of two months.4 Note that Table 2 shows ex post comparisons and does not account for actual data availability of the other indicators in the past and GDP revisions. Not all indicators are released immediately at the end of the month and historically, some indicators are only available quarterly.
3 If qoq correlations with GDP growth are positive over multiple lags, yoy correlations will be higher by construction. Yoy GDP growth contains not only contemporaneous information but also information up to 12 months ago.
4 The flash estimate is delayed by less than two months (t + 45 days).

11
Table 2: Analysis from Q1 1999 until Q1 2025
0 1 2 3 4 AVG(0:1) AVG(0:4)
lag of indicator (quarters) average over lags Correlations with yoy GDP
NEOS 0.62 0.68 0.64 0.50 0.20 0.65 0.53 NEOS (first 7 days in month) 0.59 0.62 0.60 0.50 0.19 0.61 0.50 NEOS (first 14 days in month) 0.60 0.66 0.63 0.51 0.19 0.63 0.52 NEOS (first 21 days in month) 0.59 0.67 0.64 0.52 0.21 0.63 0.53 Lexicon-based approach 0.56 0.56 0.46 0.35 0.11 0.56 0.41 Manufacturing PMI for Switzerland 0.75 0.73 0.60 0.39 0.11 0.74 0.51 Service PMI for Switzerlanda 0.67 0.43 0.26 0.16 -0.35 0.55 0.23 KOF Business Situation Indicatorb 0.62 0.18 -0.06 -0.39 -0.64 0.40 -0.06 SEC-
O Consumer Sentiment Index 0.51 0.45 0.38 0.24 0.00 0.48 0.32
Correlations with qoq GDP
NEOS 0.45 0.23 0.08 0.11 -0.07 0.34 0.16 NEOS (first 7 days in month) 0.48 0.16 0.13 0.11 -0.07 0.32 0.16 NEOS (first 14 days in month) 0.48 0.20 0.12 0.10 -0.08 0.34 0.16 NEOS (first 21 days in month) 0.46 0.22 0.10 0.12 -0.09 0.34 0.17 Lexicon-based approach 0.35 0.16 -0.01 0.09 -0.04 0.26 0.11 Manufacturing PMI for Switzerland 0.41 0.16 0.08 0.02 -0.09 0.28 0.12 Service PMI for Switzerlanda 0.47 -0.13 -0.14 -0.01 -0.23 0.17 -0.01 KOF Business Situation Indicatorb 0.10 -0.39 -0.13 -0.18 -0.23 -0-
.14 -0.17 SECO Consumer Sentiment Index 0.32 0.01 0.07 0.00 -0.09 0.16 0.06
Highest average correlations written in bold. Source(s): KOF Swiss Economic Institute, procure.ch, SECO, SNB, Swissdox@LiRI, UBS
a Correlations computed from Q1 2014 until Q1 2025 due to availability of the indicator. b Correlations computed from Q2 2009 until Q1 2025 due to availability of the indicator.
A.3 Lexicon-based approach to measure sentiment from newspaper articles
Another approach to measure sentiment regarding economic outlook conveyed by newspaper articles is the lexicon-based approach where one relies on a predefined list of words that are associated with positive, negative, or neutral sentiment (see, e.g., Loughran and Mcdonald, 2011). Occurrences of these words are counted in a text and a sentiment score based on these occurrences is assigned. We use the lexicon developed by Barbaglia et al. (2025). The lexicon is in English and consists of more than s-
ix thousand words. We translated it to German and applied it to the German newspaper articles only. We could translate the lexicon to French as well, but the results with German articles already show that the approach is less promising. Simple word-count techniques face challenges in recognising context and detecting negations
in texts, for example “not happy” (see, e.g., Binsbergen et al., 2024). Thus, we refrain from the extra effort.
A.4 Forecast improvement during crises
Table 1 shows that including NEOS in the regression model in Equation (1) improves the accuracy of GDP growth forecasts compared to the AR(1) model. To reveal whether the

12
improvements are due to consistent gains across many quarters or due to large gains during a
few key episodes, for the case of forecasting with horizon h = 0, we first compute the
squared errors for each quarter made by both the regression model in Equation (1) and the AR(1) model using the same pseudo-out-of-sample expanding window framework as for Table 1. Second, we subtract the squared errors of the AR(1) model from those of the regression model in Equation (1) and plot the cumulative sum of these differences in Chart 5. Declines in the cumulative series indicate periods in which the regression model in Equation (1) outperforms the AR(1) model.
Chart 5
Chart 5 shows that including NEOS as a predictor for forecasting GDP growth is particularly valuable during periods of economic stress and quickly unfolding events, i.e., the global financial crisis and the COVID-19 pandemic. This aligns with the qualitative evidence in Chart 4, illustrating NEOS’s usefulness in capturing shifts in sentiment during rapidly evolving situations that are not yet reflected in the lagged GDP data.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:55.277Z
- **Text Length:** 29035 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
