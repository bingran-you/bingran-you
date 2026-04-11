# PDF Document: Mino and Williamson - 2025 - Sentiment and Volatility in Financial Markets A Review of BERT and GARCH Applications during Geopol.pdf

**File Path:** Mino and Williamson - 2025 - Sentiment and Volatility in Financial Markets A Review of BERT and GARCH Applications during Geopol.pdf

**Processed Date:** 2026-02-10T18:15:42.209Z

**File Size:** 844.14 KB

**Total Pages:** 23

**Extracted Pages:** 23

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3498

**Title:** Sentiment and Volatility in Financial Markets: A Review of BERT and GARCH Applications during Geopolitical Crises

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Sentiment and Volatility in Financial Markets:
A Review of BERT and GARCH Applications
during Geopolitical Crises
Domenica Mino∗ Cillian Williamson†
School of Mathematical Sciences, University College Cork
Abstract
Artificial intelligence techniques have increasingly been applied to understand the complex relationship between public sentiment and financial market behaviour. This study explores the relationship between the sentiment of news related to the Russia-Ukraine war and the volatility of the stock market. A comprehensive dataset of news articles from major US platforms, published between January 1 and July 17 2024, was analysed using a fine-tuned Bidirectional Encoder Representations from Transformers-
 (BERT) model adapted for financial language. We extracted sentiment scores and applied a Generalised Autoregressive Conditional Heteroscedasticity (GARCH) model, enhanced with a Student-t distribution to capture the heavytailed nature of financial returns data. The results reveal a statistically significant negative relationship between negative news sentiment and market stability, suggesting that pessimistic war coverage is associated with increased volatility in the S&P 500 index. This research-
 demonstrates how artificial intelligence and natural language processing can be integrated with econometric modelling to assess real-time market dynamics, offering valuable tools for financial risk analysis during geopolitical crises.
Keywords: artificial intelligence; sentiment analysis; BERT; GARCH; financial volatility; geopolitical news; NLP
JEL classification: G14; G41; C58; C55
∗Corresponding author: 123110733@umail.ucc.ie †CWilliamson@ucc.ie
1
arXiv:2510.16503v1 [q-fin.ST] 18 Oct 2025

1 Introduction
The influence of online news, social media, and television on public perception and investor sentiment is key to explaining the persistent fluctuations in financial markets [1, 2]. In this context, digital media has substantial influence over societal emotions, particularly in investors’ sentiment during geopolitical crises such as the armed conflict between Russia and Ukraine, which began on February 22, 2022. Understanding the dynamics of this influence is crucial to analysing how stock markets -
respond during periods of heightened global tension. The literature has shown that investor sentiment significantly influences stock prices and volatility of returns [3, 4]. However, analysing investor sentiment presents challenges due to the large volume of unstructured online data, such as news articles, social media posts and online forum discussions [5, 6]. Traditional sentiment analysis techniques such as lexicon-based methods and basic machine learning algorithms have encountered limitations-
 in handling complex and diverse data embedded in financial language. Recent advances in natural language processing (NLP), particularly through deep learning, have introduced powerful models capable of overcoming these limitations. An example is the Bidirectional Encoder Representations from Transformers model, which has significantly improved the capture of nuanced sentiment in text-based data [7, 8]. These improvements have transformed the field of AI through architectures capable of extracting-
 complex hierarchical representations from data [9]. BERT’s architecture, rooted in deep neural networks, enables it to interpret complex sentence structures and semantic relationships. This makes it particularly useful for sentiment analysis in finance, where the language can be technical, context sensitive, and subtle. This study aims to contribute to the growing knowledge of applied artificial intelligence and finance by examining how sentiment extracted from digital media influences financial -
markets during geopolitical instability. Specifically, it investigates the relationship between the sentiment in U.S. headlines news coverage of the Russia-Ukraine conflict and volatility in financial markets. Given the scale and complexity of unstructured textual data in digital media, this research uses the BERT model to quantify the sentiment from news articles, while a GARCH model enhanced with a Student t distribution is used to model the volatility in market returns. The structure of this pa-
per is as follows. Section 2 reviews the literature, Section 3 details the data and methodology employed in this research, Section 4 presents the results, Section 5 discusses the findings, and Section 6 offers conclusions and recommendations for future research.
2 Literature Review and Conceptual Framework
This section reviews the relevant literature on the influence of investor sentiment on financial markets, particularly during geopolitical crises. It evaluates traditional and advanced sentiment analysis techniques, focusing on their application in financial contexts, and outlines how such sentiment interacts with volatility modelling through GARCH-based approaches. The review also integrates recent studies on the Russia-Ukraine conflict to contextualise the current research.
2

2.1 Investor Sentiment and Financial Markets
Investor sentiment has been extensively studied for its influence on stock market fluctuations. Sentiment-driven trading can lead to mispricing and temporary deviations from fundamental values, as documented by [1]. Market participants often rely on sentiment indicators to anticipate potential price movements, making sentiment analysis a critical tool in financial research. Investor emotions, such as fear and optimism, drive market trends, and understanding these psychological factors is essential-
 for predicting asset price changes. Previous studies have highlighted the role of media coverage in shaping investor sentiment. [3] and [4] demonstrated that financial news and media play a significant role in influencing stock returns. The widespread dissemination of news through digital platforms has further amplified the impact of media-driven sentiment on market movements. However, quantifying sentiment from unstructured textual data remains a challenge, necessitating the use of sophisticated-
 natural language processing (NLP) techniques to capture its effects accurately. [5] and [6] explored various methodologies for measuring investor sentiment using social media and financial news. Their findings suggest that leveraging computational approaches to analyse textual data can provide meaningful insights into market behaviour. Despite advancements in sentiment quantification, limitations persist due to the complexity and context-dependent nature of financial texts, necessitating further -
research in this domain.
2.2 Limitations of Traditional Sentiment Analysis Methods
Lexicon-based sentiment analysis methods, while accessible and interpretable, are often too simplistic for financial contexts. These texts often involve domain-specific jargon, ambiguous phrasing, and implicit sentiment, making them difficult to interpret using standard techniques [2, 10]. Hence they can misclassify sentiment in nuanced financial statements, especially when domain-specific language is involved. Machine learning models, including support vector machines (SVM) and naive Bayes classi-
fiers, have been employed to improve sentiment classification accuracy. However, these models often require extensive labelled datasets for training, and their performance may degrade when applied to new or evolving financial texts [11]. On the other hand, Popular tools like VADER [12] have demonstrated improvements in handling informal texts, but still fall short when interpreting ambiguous financial expressions or negationheavy news articles. These limitations reduce their predictive accuracy in-
 high-stakes domains such as financial forecasting. Sentiment in a financial context is frequently influenced by implicit meanings, making it challenging to develop generalised models that perform well on different data sets. With the rise of social media platforms and real-time news dissemination, sentiment analysis models must adapt to the rapid influx of unstructured textual data [5]. The dynamic nature of market sentiment and the evolving language used in financial discussions underscores the -
need for more robust and context-aware NLP techniques. Advanced deep learning models offer promising solutions to these challenges by leveraging neural networks to better understand sentiment dynamics [9].
3

2.3 Deep Learning and Transformer Models
The development of deep learning and transformer-based models has revolutionised sentiment analysis. One of the most notable advances is the Bidirectional Encoder Representations from Transformers (BERT) model, which improves contextual understanding by leveraging bidirectional training [7]. Unlike traditional sentiment analysis techniques that rely on predefined lexicons or basic machine learning models, BERT can dynamically capture semantic nuances in financial texts. BERT’s ability to process e-
ntire sequences of words simultaneously enables it to interpret complex financial language more effectively. Studies have demonstrated that transformer-based models outperform conventional approaches in sentiment classification, particularly when dealing with domain-specific texts such as financial news and earnings reports. This improvement in precision is crucial for extracting actionable insights from large-scale financial datasets. Moreover, researchers have developed domain-specific variation-
s of transformer models, such as FinBERT, which is fine-tuned on financial text corpora. These specialised models further enhance the accuracy of sentiment classification by incorporating industryspecific semantics and contextual nuances [13]. By integrating such advanced NLP models with financial analytics, researchers can achieve a more precise understanding of investor sentiment and its implications for market behaviour. BERT and its derivatives mark a paradigm shift in how sentiment is modelle-
d, integrating pre-training on large corpora and fine-tuning on domain-specific tasks, making them highly adaptable [9, 14]. These capabilities are crucial for real-time applications in financial forecasting and market monitoring.
2.4 Geopolitical Events and Market Volatility
Geopolitical conflicts are among the most powerful exogenous shocks to market behaviour [15, 16]. Events such as wars, trade disputes and political crises introduce uncertainty into financial markets, prompting changes in investor sentiment and risk perception. [1] and [5] demonstrated that market reactions to geopolitical instability often manifest themselves as increased volatility and abrupt price movements. Studies such as [17] and [18] demonstrate how geopolitical news sentiment, especially h-
armful content, triggers abrupt market reactions, often independently of underlying fundamentals. Media tone thus acts as both a transmitter and amplifier of volatility [17]. Social media platforms, such as Twitter (now X), further intensify this dynamic. The real-time dissemination of emotional responses and rumors on online platforms has been shown to cause rapid changes in trading behaviour and asset pricing [5, 6]. A notable case study in this context is the Russia-Ukraine conflict, which bega-
n on 22 February 2022. The onset of the conflict caused widespread uncertainty, leading to significant market fluctuations. Investors responded to news updates and geopolitical developments with increased sensitivity, contributing to rapid changes in market sentiment. The role of the media in shaping perceptions of the crisis further amplified these market reactions. Understanding how geopolitical events influence market sentiment requires combining sentiment analysis techniques with financial mod-
els. By examining news articles, social media discussions and financial reports, researchers can assess the real-time impact of geopolitical events on investor sentiment and market dynamics. This approach provides valuable information for risk management and investment decision making.
4

2.5 Application of GARCH Models in Volatility Analysis
The Generalised Autoregressive Conditional Heteroscedasticity (GARCH) model has been widely employed in financial research to capture time-varying volatility patterns [19, 20]. Introduced by [19], the GARCH model enables researchers to analyse fluctuations in asset prices and assess the persistence of volatility shocks. The application of GARCH models is particularly relevant in periods of heightened uncertainty, such as geopolitical crises [21]. Integrating sentiment analysis with GARCH models al-
lows for a more comprehensive understanding of market dynamics. By incorporating sentiment-derived variables into volatility models, researchers can examine the extent to which sentiment fluctuations contribute to market instability. Studies have demonstrated that investor sentiment, as measured through financial news and social media, exhibits a strong correlation with market volatility, making it a valuable predictor of future price movements [4, 21]. Recent advances in computational finance hav-
e further enhanced the effectiveness of sentiment-based volatility modelling. By leveraging machine learning techniques alongside econometric models, researchers can refine volatility forecasts and improve risk assessment methodologies [7, 11]. This integration of sentiment analysis with GARCH models forms the foundation of our study, which explores the interplay between news sentiment and financial market volatility during the Russia-Ukraine conflict. To improve robustness, researchers have intro-
duced Student-t distributions in GARCH modeling to account for fat tails in financial data [22–24]. These enhancements are crucial for capturing the non-linear dynamics and extreme risks often present in geopolitical crises. This literature review establishes the theoretical framework for our research, which applies the BERT model for sentiment extraction and GARCH models for volatility analysis. The subsequent sections detail the methodology, empirical findings, and implications of our study for -
financial market forecasting and risk management. ¡hecho! Aquí tienes **toda la metodología** con los **cambios de estructura** (secciones numeradas + labels, tokens en monoespacio, guion protegido en *Student-t*), **sin cambiar el contenido**. “‘latex
3 Methodology
3.1 Data
This study explores the relationship between investor sentiment during geopolitical crises and financial market volatility by analysing U.S. news media coverage of the RussiaUkraine conflict. To understand the financial market’s reaction, news article headlines were collected from Goperigon, a platform that collects articles from the top 100 U.S. news sources. The data was compiled from January 1 to July 17, 2024, collecting over 10,000 headlines from major newspapers such as the New York Times, C-
NN and The Wall Street Journal, with emphasis on financial markets, politics, and global affairs. The data collection process consisted of three steps. First, we stored metadata such as title, author, publication date, and URL in a database. Second, we searched the URLs for references to the war, focusing on relevant keywords such as "war," "Russia," and "Ukraine." Then we gathered all text items (p-tags) of the remaining URLs (title, author,
5

date). To ensure the accuracy of the headlines, all text was converted to lowercase, special characters and unnecessary punctuation were removed, and common misspellings were corrected. These steps are essential in reducing noise and improving the performance of downstream NLP models [25]. The Python libraries utilised for this text clean-up included Natural Language Toolkit (NLTK), Regular Expression Operations (RE), and BeautifulSoup. Figure 1 illustrates the number of items collected:
Figure 1: Number of items collected over the sample period.
3.2 Sentiment Analysis Model
BERT is an advanced NLP model introduced by Devlin et al. [7]. It utilises a transformer architecture that enables bidirectional understanding of the text, meaning the model considers the context of a word by analysing both the words before and after it in a sentence. This bidirectional processing allows BERT to capture nuanced meanings and complex relationships within the text, making it a powerful tool for various natural language understanding tasks [26]. This study investigates whether a negat-
ive sentiment about the Russia-Ukraine war, as reflected in U.S. news headlines, is related to a decline in financial market performance. To achieve this goal, the BERT model is applied to classify the sentiment of the news headlines and generate a daily sentiment score. Using BERT in this context builds on prior research demonstrating the model’s effectiveness in financial and geopolitical contexts where language tends to be ambiguous and emotionally charged [26]. The initial stage requires separ-
ating a single sentence (news headlines) or two sentences together into a sequence of tokens. The first token in each sequence is a unique
6

classification token [CLS]. This token’s final hidden state is used as the aggregate sequence representation for classification tasks. Sentence pairs are clustered into a single sequence. As a result, we differentiate the sentences in two ways. First, we separate them with a special [SEP] token. Second, we add a learned embedding to each token indicating whether it belongs to phrases A or B. As shown in Figure 3, we denote the input embedding as E [7]. The input representation involves a comprehe-
nsive embedding system that includes token embeddings, segment embeddings, and position embeddings. A combination of these embeddings represents each token in the input text. Token embeddings provide the word’s semantic meaning, segment embeddings distinguish between different segments (such as sentences) in the input, and position embeddings encode the position of each token in the sequence. This combination shown in Figure 2 allows the model to understand the context and positional relationships-
 within the text [7]. The sum of these types of embeddings is represented by:
E(xi) = T (xi) + S(xi) + P (xi)
Where E(xi) is the final embedding of token xi, T (xi), S(xi) and P (xi) are the embeddings for token, segment and position, respectively. These embeddings are passed to the transformer layers, where multi-head attention computes contextual word representations [27].
Figure 2: Token, segment, and position embeddings composing the input representation E(xi).
Following the process described above, BERT initially pre-trained using a substantial corpus of unlabelled data by two principal tasks: Masked Language Modeling (MLM) and Next Sentence Prediction (NSP). MLM works by randomly masking a subset of the words in a sentence, requiring the model to predict these masked words based on the context of the other words, represented by the loss function:
LMLM = − ∑
i∈M
log P (xi | xmasked)
Where M is the set of masked positions, and P represents the probability of predicting the original token xi given the masked input. This task enables the model to learn
7

deep word representations considering both preceding and succeeding contexts, which is essential for capturing complex meanings and relationships within the text [7]. NSP involves training the model to determine whether a given sentence B logically follows another sentence A, enhancing its comprehension of sentence-level coherence:
LNSP = − log P (IsNext | A, B)
Where "IsNext" is a binary label indicating if sentence B follows sentence A. These processes, illustrated in Figure 3 are crucial in building a robust language understanding model [7].
Figure 3: BERT pre-training objectives: MLM and NSP.
After masking sentences to learn the underlying structure and meaning (pre-training), BERT can be fine-tuned for specific applications such as text classification, named entity recognition or question answering. Fine-tuning involves adjusting the model’s pre-trained weights using a smaller task-specific dataset. The fine-tuned loss function is the following:
Lfine-tune = − ∑ i
yi log P (yi | xi; θ)
Where yi is the true label for the instance xi, and θ represents the parameters of the model. The final output layer of the BERT model for sentiment analysis uses a softmax layer to classify the sentiments:
Sentiment = softmax(W · hCLS + b)
8

Where W y b are trainable parameters y hCLS es el output del token [CLS], usado como la representación agregada de toda la secuencia de entrada. The softmax function is commonly used in multi-class classification problems to convert raw model outputs (logits) into normalised probability distributions. Specifically, it ensures that each output lies between 0 and 1 and that the sum of all output values equals 1, allowing interpretation as class probabilities. Formally, for a given input vector z = -
(z1, z2, . . . , zK) representing the non-normalised logit scores for K classes, the softmax function is defined as:
softmax(zi) = ezi
∑K
j=1 ezj for i = 1, . . . , K
This transformation emphasises the highest logit while suppressing the others, facilitating probabilistic interpretation. The predicted class is then obtained by selecting the index of the maximum softmax value, using the arg max operator:
Predicted class = arg miax softmax(zi)
This step is crucial for classification tasks such as sentiment analysis, as it translates model output into interpretable predictions [14]. This flexibility is one of BERT’s strengths, as it can be fine-tuned to perform exceptionally well across a wide range of NLP tasks as depicted in Figure 4, which shows the model being adapted for tasks such as MNLI, NER, and SQuAD [7].
Figure 4: High-level view of BERT fine-tuning for downstream NLP tasks.
In the context of this study, the model was evaluated by dividing the data into 70% for training, 15% for testing, and 15% for validation. This ensures a proper calibration of the model and a robust assessment of its performance. The BERT model classifies all
9

tokenised sentences into sentiment categories: positive, negative, and neutral, and their respective probabilities known as logits. To calculate the sentiment, the following formula was used:
Sentiment = Logitpositive sentiment − Logitnegative sentiment
This calculation provides a quantitative measure of sentiment, reflecting the probability that the sentence is positive minus the probability that it is negative. This methodology follows similar approaches to the literature, such as that proposed by Andriotis et al. [28]. Relating detected sentiment changes to market dynamics influenced by geopolitical events is crucial.
3.3 Stock market and Russia-Ukraine war news sentiment
In this section, we explore the relationship between sentiment (as expressed in news headlines related to the Russia-Ukraine conflict) and financial markets. To quantify this relationship, an Ordinary Least Squares (OLS) regression model was initially employed (Appendix 1). This approach serves as a baseline estimation to examine whether variations in daily sentiment scores can explain changes in stock market returns. To ensure the robustness of the OLS estimation, a series of diagnostic tests wer-
e performed. These include calculation of Variance Inflation Factors (VIF) to assess multicollinearity among the explanatory variables, the Breusch-Pagan test to detect the presence of heteroscedasticity, and the Durbin-Watson test to evaluate autocorrelation in the model residuals. The results indicated heteroscedasticity in the error terms (Appendix 2), which can lead to inefficient and biased estimators [29]. To address heteroscedasticity and improve the reliability of the model, a Generalised -
Autoregressive Conditional Heteroscedasticity (GARCH) model was applied. GARCH is a well-established financial time series modelling technique for conditional heteroscedasticity, ensuring more accurate and robust estimates [20, 30]. In the context of financial data, it is crucial to model the time-varying volatility (heteroscedasticity) observed in asset returns, which the GARCH model captures by allowing the variance of the error terms to change over time. For this study, GARCH recognises that th-
e variance of errors in a regression model is not constant but varies over time, capturing the volatility that characterises financial returns. The model is based on the idea that the variance of the market returns is related to the past variance of the returns. In other words, if the market has been very volatile recently, the GARCH model expects it to remain volatile in the coming days. However, if the market has been stable in recent days, the model expects it to remain stable. GARCH improves t-
he accuracy of the estimate by modelling the conditional volatility of the data, resulting in more efficient estimators. Given the above, the following equation was proposed where the estimation method is considered:
Yt = μ + β1Sentimentt + β2VIXt + β3OFRt + β4EPUt + β5Bondt + εt
εt ∼ N (0, σ2
t)
σ2
t = α0 + α1ε2
t−1 + β1σ2
t−1
10

Where Yt represents the daily returns of the S&P 500 index at time t, μ is the constant term, Sentimentt is the average daily sentiment derived using the BERT model, VIXt, OFRt, EPUt, and Bondt are the explanatory variables, εt is the error term assumed to follow a normal distribution, and σ2
t is the conditional variance which depends on past squared errors. While the GARCH model assumes normally distributed residuals, many financial datasets exhibit fat tails, meaning the occurrence of extreme values is more frequent than expected under a normal distribution (Appendix 3). To address this, we opted to model the residuals using the Student-t distribution, which accounts for the heavier tails commonly seen in financial returns [22]. The Student-t distribution introduces degrees of freed-
om that help to adjust the tail heaviness, improving the model’s robustness in estimating volatility risks [20, 23]. By doing so, GARCH with a Student-t distribution enhances accuracy in volatile markets. The model can be written as:
σ2
t = α0 + α1ε2
t−1 + β1σ2
t−1
Where σ2
t is the conditional variance, ε2
t−1 is the lagged squared residual, and σ2
t−1 is
the lagged variance. The residuals εt follow a Student-t distribution:
f (εt) = Γ
( v+1 2
)
Γ
(v
2
)√
π(v − 2)σ2
(
1 + ε2
t
(v − 2)σ2
)− v+1
2
Where v represents the degrees of freedom, determining the heaviness of the tails. Lower values of v capture heavier tails, while higher values approach a normal distribution. This modification allows the model to more effectively capture tail risk, which is critical for analysing extreme market movements common in financial datasets. Furthermore, to calculate the daily returns of the S&P 500 index, the logarithmic returns formula was applied:
Rt = ln
( Pt
Pt−1
)
Where Rt represents the return of the S&P 500 at time t, Pt is the closing price at t, and Pt−1 is the closing price at t − 1. This calculation captures the percentage change in the index from one day to the next, enabling the analysis of volatility and trends in returns over the studied period. On the other hand, for the explanatory variables at time t, we include the Volatility Index (VIX), Financial Stress Index (OFR), Economic Policy Uncertainty Index (EPU), and the U.S. 10-year bond yield (Bo-
nd). Historical data for these variables were obtained for the same period as the online articles for the BERT sentiment analysis. Spline interpolation was applied to ensure the completeness and continuity of this financial data. This technique was employed to prevent data loss and ensure a more robust analysis by maintaining the integrity of the time series. To calculate the spline interpolation, the following formula was applied:
S(x) =
n
∑
i=1
aiBi(x)
Where Bi(x) are the basis functions that define the shape of the spline between control points. These basis functions are typically piecewise polynomial functions constructed to ensure smooth transitions and continuity at the knots. Spline interpolation was applied
11

to ensure that all required data points were available for subsequent analysis. This method provided a smooth and continuous approximation across missing or irregular time intervals, offering a reliable foundation for examining the relationship between geopolitical events and market reactions [31]. Prior to analysis, the statistical properties of each variable were evaluated to understand their distribution and variability, ensuring the robustness of the methodological approach.
4 Results
This section presents the empirical results examining the relationship between news sentiment surrounding the Russia-Ukraine conflict and market volatility in the U.S. stock market. Using the BERT sentiment scores and a GARCH model specification with a Student-t distribution, we tested whether a negative sentiment correlates with greater financial market instability. Figure 5 presents the average daily sentiment score derived from U.S. media headlines over the sample period (January 1 – July 17, 2-
024). The sentiment values generally exhibit a predominantly negative trajectory, consistent with ongoing geopolitical tension. The sentiment score is calculated as the difference between the logits of positive and negative classification outputs from the fine-tuned BERT model.
Figure 5: Average daily sentiment score derived from U.S. media headlines (Jan 1–Jul 17, 2024).
Figure 6 shows the distribution of sentiment categories across the dataset. The majority of headlines fall into the negative or neutral category, reinforcing the nature of the conflict as perceived by major U.S. media outlets.
12

Figure 6: Distribution of sentiment categories across the sample.
The sentiment scores, along with a set of control variables (VIX, 10-year bond yield, Financial Stress Index, and Economic Policy Uncertainty Index), were regressed against S&P 500 daily returns using a GARCH(1,1) model. GARCH enables the modelling of time-varying volatility, a critical characteristic of financial returns during periods of geopolitical uncertainty. Table 1 presents the estimation results. The coefficient for the Sentiment Score is -0.2275, statistically significant at the 1% level-
 (p = 0.0016). This indicates that negative news sentiment is significantly associated with increased stock market volatility. These findings support the hypothesis that investor pessimism driven by media coverage contributes to elevated uncertainty in financial markets. The VIX, widely recognised as a proxy for investor fear and forward-looking market volatility, also shows a significant negative relationship (coefficient = -0.2865, p = 0.0094). This confirms that periods with heightened expected-
 volatility (as reflected in the VIX) correspond to higher realised volatility in the market. By contrast, the remaining control variables, 10year bond yield, Financial Stress Index (OFR), and Economic Policy Uncertainty Index (EPU), were not statistically significant. These results suggest that, in the presence of media-driven sentiment and VIX, traditional macroeconomic indicators offer limited additional explanatory power for short-term market volatility during geopolitical crises.
13

Table 1: Coefficient Estimates from GARCH (1,1) Model for S&P 500 returns, incorporating News Sentiment and Control Variables.
Variable Coefficient Standard Error p-value Constant -0.2545 2.2398 0.9098 Sentiment Score -0.2275 0.0703 0.0016 VIX -0.2865 0.1083 0.0094 Bond 10-years 0.0016 0.0008 0.2022 OFR 0.3966 0.5022 0.4316 EPU -0.0012 0.0010 0.3249 Observations 105 Adjusted R2 0.1481 F-statistic 4.687 p-value 0.0006
Note: p-values reflect the probability of the coefficients being zero. Significance: p < 0.001, p < 0.01, p < 0.05, p < 0.1.
5 Discussion
The results obtained in this study align with previous findings in the literature that explore the relationship between geopolitical events and financial markets. [21] demonstrate that geopolitical risks heighten investor uncertainty and elevate perceived market risk, leading to pronounced volatility. Their analysis of international markets under geopolitical stress found that negative news sentiment contributes to increased price instability, particularly during periods of escalating conflict. Th-
is is consistent with the present study’s GARCH results, which show that the Sentiment Score derived using BERT is significantly and negatively associated with stock market volatility, reinforcing that investor psychology, shaped by media narratives, is a crucial determinant of short-term market dynamics during crises. [17] also emphasises the important role of sentiment during geopolitical conflicts. Their work shows that investors react more sharply to negative sentiment when uncertainty is high-
, mainly when such sentiment is from trusted news sources. These observations align closely with our findings, where negative sentiment extracted from major U.S. news headlines showed a statistically significant effect on volatility, independent of economic fundamentals. This confirms that sentiment extracted via advanced NLP models can be an early warning indicator of financial turbulence, particularly in conflict-driven markets. The results also confirm the important role of the VIX as a predict-
or of market volatility. As [32] highlighted, the VIX serves as both a forward-looking gauge of market expectations and a proxy for investor fear. In the present study, the VIX coefficient was statistically significant and negative, reinforcing its utility as a benchmark for market anxiety. By including both media-based sentiment and the VIX in the volatility model, this framework captures behavioural and anticipatory dimensions of investor perception. This dual mechanism enhances the model’s expl-
anatory power, particularly in environments where rational expectations frameworks fail to reflect the full extent of market stress. By contrast, traditional financial indicators such as bond yields, the Financial Stress Index (OFR), and the Economic Policy Uncertainty Index (EPU) were not found to be
14

statistically significant. These results suggest that sentiment-based and forward-looking measures dominate over macroeconomic fundamentals in explaining volatility during periods of geopolitical tension [33]. This observation aligns with [34], who argue that geopolitical shocks introduce non-linear, sentiment-driven responses that conventional indicators cannot adequately capture. As uncertainty becomes narrative-based rather than strictly data-driven, traditional indicators may lose predictive -
power in the short term. The empirical performance of the GARCH model with a Student-t distribution further supports the view that financial returns during crises are prone to heavy tails and extreme deviations. [24, 30] point out that financial markets are characterised by volatility clustering and non-Gaussian return distributions, particularly in response to exogenous shocks. By accounting for excess kurtosis and tail risk, the Student-t specification enhances model robustness, a feature suppor-
ted by [22], who show that this adjustment significantly improves volatility forecasts under crisis conditions. The model used in this study captures these statistical irregularities, reflecting a more realistic representation of financial market behaviour under stress. Importantly, the findings reinforce the growing importance of AI-driven sentiment analysis in financial research and forecasting. Traditional sentiment tools such as dictionarybased methods [10] or survey-based indicators often str-
uggle with context, sarcasm, or evolving language use. In contrast, as a transformer-based model, BERT captures semantic nuance, word order, and bidirectional context, making it well-suited for sentiment extraction from complex geopolitical narratives [7, 13]. The effectiveness of BERT in this study adds to the evidence from [26, 35] who found that transformer models outperform SVMs and recurrent networks in domain-specific text tasks, including finance. This study also speaks to a broader behavio-
ural shift in financial markets. The increasing sensitivity of asset prices to media sentiment and narrative framing suggests a trend toward sentiment-driven trading, where market behaviour is guided less by fundamentals and more by real-time emotional signals [4, 36]. This behavioural response is consistent with the theory of limited attention and bounded rationality, where investors, overwhelmed by information, rely on emotionally salient cues to make decisions [37]. The persistence of negative -
sentiment over the sample period and its predictive link to volatility offer strong evidence that financial markets are becoming more psychologically responsive, particularly in times of global tension. Additionally, the absence of explanatory power in the EPU index during this crisis highlights the growing mismatch between top-down macroeconomic indicators and bottom-up media narratives. As [38] observe, the tone of political news, not just the content, can significantly affect investor decisions-
. This divergence implies that quantitative models integrating AI-based textual analysis with market data can provide superior forecasting power compared to traditional econometric models that exclude unstructured information. Moreover, these insights carry clear, practical implications. Investment managers and risk officers can leverage AI-driven sentiment metrics to improve volatility forecasting and hedging strategies. Analysts can better detect inflexion points in investor sentiment by integra-
ting BERT sentiment signals into dashboard-based monitoring tools and calibrating their exposure accordingly. This approach is particularly valuable during crises when price movements are driven by uncertainty, expectation, and narrative rather than earnings reports or macroeconomic data [17]. The study offers policymakers a novel tool for assessing market sentiment and stability. In real-time crisis response, regulatory institutions can monitor sentiment-based indicators to gauge public perceptio-
n and its
15

effects on market liquidity and volatility. As financial markets become more intertwined with digital news flows and investor psychology, understanding media sentiment becomes vital to managing systemic risk. To conclude, this study’s findings support the view that financial markets are increasingly responsive to geopolitical developments and media narratives, reflecting a departure from models that assume rational behaviour under complete information. The significant impact of sentiment on volat-
ility, the robustness of the Student-t GARCH model, and the limitations of traditional indicators underscore the value of combining AI-based sentiment analysis with econometric modelling to better understand and predict market behaviour in uncertain times.
6 Conclusions and Recommendations
This study provides empirical evidence that advances our understanding of the relationship between media sentiment and financial market volatility during geopolitical crises. By integrating NLP techniques like the BERT transformer model with a Studentt GARCH econometric framework, the research demonstrates that sentiment extracted from news headlines can significantly predict stock market volatility. The results show that negative sentiment regarding the Russia-Ukraine conflict, as quantified thro-
ugh BERT, is strongly associated with increased volatility in the S&P 500 index. Including the Volatility Index (VIX) as a control variable further reinforces its role as a robust predictor of financial market stress, consistent with prior studies on volatility [21, 32]. In contrast, more traditional macroeconomic indicators, such as bond yields, the Financial Stress Index, and the Economic Policy Uncertainty Index, were not found to be significant, suggesting that during crises, market behaviour -
is impacted by realtime sentiment shifts and investor expectations, rather than by slow-moving economic fundamentals [17, 34]. This paper contributes to the growing literature on AI applications in finance, providing a framework for integrating deep learning-based sentiment extraction with timeseries volatility models. It highlights the importance of using transformer architectures like BERT to analyse specific text, particularly during periods of information overload and heightened uncertainty wh-
en traditional forecasting tools may underperform [7, 26]. The findings also underscore the behavioural transformation of financial markets, where media narratives and psychological responses increasingly influence asset prices and risk dynamics [4, 37]. Despite its contributions, the study has limitations that open avenues for further research. First, the sentiment model relies solely on news sources from the U.S., which may introduce a geographic or cultural bias in the sentiment signals. Future-
 research could expand the dataset to include international and multilingual news outlets, enabling a more comprehensive global sentiment analysis and cross-market spillovers. Second, the analysis operates on daily data, which may mask intraday sentiment swings that affect high-frequency trading and liquidity [5, 17]. Future studies could incorporate higher-frequency sentiment analysis, using timestamped headlines and realtime news feeds to explore sentiment volatility at hourly or minute-level gr-
anularity. Third, while this study applies the general BERT model, emerging transformer-based architectures such as FinBERT [13], RoBERTa [39], and DeBERTa [40] have shown superior performance in financial and domain-adapted text classification tasks. A comparative evaluation of these models within the same GARCH volatility framework could provide
16

additional insight into model selection and optimal design for sentiment-driven forecasting. Fourth, future work could explore sectoral or firm applications, examining whether sentiment impacts specific industries (e.g. energy, defence, technology) differently during geopolitical crises. This sector-level perspective would enhance understanding of heterogeneous investor responses and the cross-sectional implications of sentiment-driven trading behaviour [38]. Finally, this research invites explor-
ation into the development of automated dashboards and forecasting platforms that fuse sentiment data, market analytics, and risk signals in real-time. Such systems could serve as decision-support tools for portfolio managers, traders, and regulators, providing an integrated view of behavioural risk, market structure, and macro-political dynamics [17, 41]. To conclude, this study reinforces the value of combining AI-based sentiment models with econometric volatility modelling to enhance understand-
ing of financial market behaviour during crises. As geopolitical uncertainty and information intensity continue to shape global markets, sentiment analysis rooted in deep learning offers a powerful tool for navigating and forecasting volatility in real-time. This intersection of applied artificial intelligence, behavioural finance, and risk analytics marks a promising direction for future academic inquiry and practical implementation.
Data Availability
The data and code supporting the findings of this study are publicly available at the following GitHub repository:
https://github.com/DomSop/geopolitical-sentiment-volatility
The repository includes the cleaned sentiment dataset, the Python and R scripts used for analysis, and instructions for replicating the results. The original raw news data was obtained from Goperigon (https://goperigon.com/) under a non-commercial research license and cannot be redistributed. However, the transformed dataset used in the analysis is fully accessible.
Declaration of Interest Statement
The authors declare no conflict of interest.
17

A Appendices
A.1 OLS Model
Table 2: Estimates of S&P 500 returns using Russia–Ukraine war news sentiments plus a set of controls.
Variable Coefficient Standard Error p-value
Constant -0.2618 2.1996 0.9055 Sentiment Score -0.2310 0.0690 0.0011 VIX -0.3059 0.1063 0.0049 Bond 10-years 0.0011 0.0008 0.1666 OFR 0.4033 0.4932 0.4154 EPU -0.0009 0.0010 0.3593
Observations 105 Adjusted R2 0.166 F-statistic 5.216 p-value 0.0003
Note: p-values reflect the probability of the coefficients being zero. Significance: p < 0.001, p < 0.01, p < 0.05, p < 0.1.
A.2 Robustness Tests
Table 3: Breusch–Pagan Test Results
Statistic Value p-value
BP Statistic 15.213 0.0095 Degrees of Freedom 5 
Notes: p < 0.01 indicates significant heteroscedasticity.
Table 4: Durbin–Watson Test Results Statistic Value p-value
DW Statistic 1.6433 0.0164
Notes: p < 0.05 indicates significant autocorrelation.
18

Table 5: Variance Inflation Factor (VIF) Results
Variable VIF
Sentiment Score 1.066 VIX 2.955 Bond 10-years 3.170 OFR FSI 2.848 EPU 1.134
Notes: VIF > 10 suggests significant multicollinearity.
Figure 7: Residuals vs. Sentiment Score.
19

A.3 Q–Q Plot of GARCH Residuals
Figure 8: Q–Q plot for checking normality of GARCH residuals.
20

References
[1] M. Baker and J. Wurgler. Investor sentiment in the stock market. Journal of Economic Perspectives, 21(2):129–152, 2007. doi: 10.1257/jep.21.2.129.
[2] Andrew W. Lo and Alexander Remorov. Estimation and prediction for algorithmic models of investor behavior. Journal of Systematic Investing, 2(1), 2022.
[3] J. E. Engelberg and C. A. Parsons. The causal impact of media in financial markets. The Journal of Finance, 66(1):67–97, 2011. doi: 10.1111/j.1540-6261.2010.01626.x.
[4] P. C. Tetlock. Giving content to investor sentiment: The role of media in the stock market. The Journal of Finance, 62(3):1139–1168, 2007. doi: 10.1111/j.1540-6261. 2007.01232.x.
[5] J. Bollen, H. Mao, and X. Zeng. Twitter mood predicts the stock market. Journal of Computational Science, 2(1):1–8, 2011. doi: 10.1016/j.jocs.2010.12.007.
[6] T. O. Sprenger and I. M. Welpe. Tweets and trades: The information content of stock microblogs. European Financial Management, 20(5):926–957, 2010. URL http://dx.doi.org/10.2139/ssrn.1702854.
[7] J. Devlin, M. W. Chang, K. Lee, and K. Toutanova. BERT: Pre-training of deep bidirectional transformers for language understanding. arXiv preprint arXiv:1810.04805, 2018. URL https://arxiv.org/abs/1810.04805.
[8] B. Liu. Sentiment Analysis and Opinion Mining. Morgan and Claypool, 2012. doi: 10.2200/S00416ED1V01Y201204HLT016.
[9] J. Schmidhuber. Deep learning in neural networks: An overview. Neural Networks, 61:85–117, 2015. doi: 10.1016/j.neunet.2014.09.003.
[10] T. Loughran and B. McDonald. When is a liability not a liability? textual analysis, dictionaries, and 10-ks. The Journal of Finance, 66(1):35–65, 2011. doi: 10.1111/j. 1540-6261.2010.01625.x.
[11] B. Pang and L. Lee. Opinion mining and sentiment analysis. Foundations and Trends in Information Retrieval, 2(1-2):1–135, 2008. doi: 10.1561/1500000011.
[12] C. J. Hutto and Eric Gilbert. Vader: A parsimonious rule-based model for sentiment analysis of social media text. Proceedings of the International AAAI Conference on Web and Social Media, 8(1):216–225, 2014. doi: 10.1609/icwsm.v8i1.14550.
[13] D. Araci. FinBERT: Financial sentiment analysis with pre-trained language models. arXiv preprint arXiv:1908.10063, 2019. URL https://arxiv.org/abs/1908. 10063.
[14] I. Goodfellow, Y. Bengio, and A. Courville. Deep Learning. MIT Press, 2016.
[15] Md. Bashir Hasan, Md. Bakhtiar Mollah, and Md. Asadul Islam. War, uncertainty and oil prices: Evidence from the russia–ukraine conflict. Energy Economics, 107: 105859, 2022. doi: 10.1016/j.eneco.2022.105859.
21

[16] Shahriyar Mukhtarov, Murad Hasanov, and Yuriy Bilan. War, economic sanctions and stock market volatility: The case of the russia–ukraine conflict. Finance Research Letters, 51:103548, 2023. doi: 10.1016/j.frl.2022.103548.
[17] L. A. Smales. News sentiment and the investor fear gauge. Finance Research Letters, 11(2):122–130, 2014. doi: 10.1016/j.frl.2013.07.003.
[18] K. Drakos. Terrorism activity, investor sentiment, and stock returns. Review of Financial Economics, 19(3):128–135, 2010. doi: 10.1016/j.rfe.2010.01.001.
[19] Robert F. Engle. Autoregressive conditional heteroscedasticity with estimates of the variance of united kingdom inflation. Econometrica, 50(4):987–1007, 1982. doi: 10.2307/1912773.
[20] T. Bollerslev. Generalized autoregressive conditional heteroskedasticity. Journal of Econometrics, 31(3):307–327, 1986. doi: 10.1016/0304-4076(86)90063-1.
[21] A. K. Banerjee, A. Sensoy, and J. W. Goodell. Volatility connectedness between geopolitical risk and financial markets: Insights from pandemic and military crisis periods. International Review of Economics and Finance, 96:103740, 2024. doi: 10.1016/j.iref.2024.103740.
[22] W. Feng and Y. Shi. Modeling financial time series with GARCH models and heavytailed distributions. Computational Economics, 49(2):307–323, 2017. doi: 10.1093/ imaman/dpm024.
[23] Philippe Lambert and Sébastien Laurent. Modelling skewness dynamics in series of financial data using skewed distributions. International Journal of Forecasting, 17 (3):221–232, 2001. doi: 10.1016/S0169-2070(01)00084-1.
[24] T. Bollerslev. A conditionally heteroskedastic time series model for speculative prices and rates of return. The Review of Economics and Statistics, 69(3):542–547, 1987. doi: 10.2307/1925546.
[25] E. Cambria, B. Schuller, Y. Xia, and C. Havasi. New avenues in opinion mining and sentiment analysis. IEEE Intelligent Systems, 28(2):15–21, 2017. doi: 10.1109/MIS. 2013.30.
[26] L. Zhang, S. Wang, and B. Liu. Deep learning for financial sentiment analysis: A survey. Expert Systems with Applications, 143:113038, 2018. doi: 10.1002/widm. 1253.
[27] A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, and I. Polosukhin. Attention is all you need. In Advances in Neural Information Processing Systems, volume 30, pages 5998–6008, 2017. doi: 10.48550/arXiv.1706. 03762.
[28] P. Andriotis, D. P. Papadopoulos, G. Oikonomou, and T. Tryfonas. A study on usability and security features of the android pattern lock screen. Information Security Journal: A Global Perspective, 23(4–6):171–184, 2014. URL http: //dx.doi.org/10.1108/ICS-01-2015-0001.
22

[29] J. M. Wooldridge. Econometric Analysis of Cross Section and Panel Data. MIT Press, 2010.
[30] C. Francq and J. M. Zakoian. GARCH Models: Structure, Statistical Inference, and Financial Applications. Wiley, 2019.
[31] Carl de Boor. A Practical Guide to Splines, volume 27 of Applied Mathematical Sciences. Springer, revised edition, 2001.
[32] H. L. Shang, Y. Yang, and F. Kearney. Intraday forecasts of a volatility index: Functional time series methods with dynamic updating. Annals of Operations Research, 282:331–354, 2019. doi: 10.1007/s10479-018-3108-4.
[33] N. Bloom. The impact of uncertainty shocks. Econometrica, 77(3):623–685, 2009. doi: 10.3982/ECTA6248.
[34] H. Yilmazkuday. Geopolitical risk and stock prices. Technical Report Working Paper No. 2407, Florida International University, 2024. URL https://economics. fiu.edu/research/working-papers/2024/2407.pdf.
[35] A. Gupta, V. Dengre, H. A. Kheruwala, and M. Shah. Comprehensive review of text-mining applications in finance. Financial Innovation, 6:39, 2020. doi: 10.1186/ s40854-020-00205-1.
[36] M. Schmeling. Investor sentiment and stock returns: Some international evidence. Journal of Empirical Finance, 16(3):394–408, 2009. doi: 10.1016/j.jempfin.2009.01. 002.
[37] N. Barberis. Psychology-based models of asset prices and trading volume. In Handbook of Behavioral Economics: Applications, volume 1, pages 79–175. 2018. doi: 10.1016/bs.hesbe.2018.07.001.
[38] K. R. Ahern and D. Sosyura. Who writes the news? corporate press releases during merger negotiations. The Journal of Finance, 69(1):241–291, 2014. URL https: //www.jstor.org/stable/43611061.
[39] Y. Liu, M. Ott, N. Goyal, J. Du, M. Joshi, D. Chen, V. Stoyanov, et al. RoBERTa: A robustly optimized BERT pretraining approach. arXiv preprint arXiv:1907.11692, 2020. URL https://arxiv.org/abs/1907.11692.
[40] P. He, X. Liu, J. Gao, and W. Chen. DeBERTa: Decoding-enhanced BERT with disentangled attention. In International Conference on Learning Representations (ICLR), 2021. doi: 10.48550/arXiv.2006.03654.
[41] S. Gu, B. Kelly, and D. Xiu. Empirical asset pricing via machine learning. The Review of Financial Studies, 33(5):2223–2273, 2020. doi: 10.1093/rfs/hhaa009.
23

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:42.209Z
- **Text Length:** 52502 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 23 of 23
