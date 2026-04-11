# PDF Document: Wu et al. - 2025 - Aligning Multilingual News for Stock Return Prediction.pdf

**File Path:** Wu et al. - 2025 - Aligning Multilingual News for Stock Return Prediction.pdf

**Processed Date:** 2026-02-10T18:15:22.478Z

**File Size:** 1234.76 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3543

**Title:** Aligning Multilingual News for Stock Return Prediction

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Aligning Multilingual News for Stock Return Prediction
Yuntao Wu winstonyt.wu@mail.utoronto.ca University of Toronto Toronto, Ontario, Canada
Lynn Tao lynnyl.tao@mail.utoronto.ca University of Toronto Toronto, Ontario, Canada
Ing-Haw Cheng inghaw.cheng@rotman.utoronto.ca University of Toronto Toronto, Ontario, Canada
Charles Martineau charles.martineau@rotman.utoronto.ca University of Toronto Toronto, Ontario, Canada
Yoshio Nozawa yoshio.nozawa@rotman.utoronto.ca University of Toronto Toronto, Ontario, Canada
John Hull john.hull@rotman.utoronto.ca University of Toronto Toronto, Ontario, Canada
Andreas Veneris veneris@eecg.toronto.edu University of Toronto Toronto, Ontario, Canada
Abstract
News spreads rapidly across languages and regions, but translations may lose subtle nuances. We propose a method to align sentences in multilingual news articles using optimal transport, identifying semantically similar content across languages. We apply this method to align more than 140,000 pairs of Bloomberg English and Japanese news articles covering around 3500 stocks in Tokyo exchange over 2012-2024. Aligned sentences are sparser, more interpretable, and exhibit higher semantic similarity. R-
eturn scores constructed from aligned sentences show stronger correlations with realized stock returns, and long-short trading strategies based on these alignments achieve 10% higher Sharpe ratios than analyzing the full text sample.
CCS Concepts
• Computing methodologies → Natural language processing; • Applied computing → Economics.
Keywords
international markets, natural language processing, multilingual analysis, optimal transport, return predictions
ACM Reference Format:
Yuntao Wu, Lynn Tao, Ing-Haw Cheng, Charles Martineau, Yoshio Nozawa, John Hull, and Andreas Veneris. 2025. Aligning Multilingual News for Stock Return Prediction. 6 pages.
1 Introduction
Financial markets increasingly reflect a complex interplay of global information flows. News about firms, policy decisions, or macro conditions often appears first in local languages and subsequently in global reporting. Translating this multilingual content into English or a single canonical language may obscure subtle inflections, domain-specific nuances, or phrasing differences that carry predictive value. When multilingual sources independently cover similar topics, they may emphasize differen-
t angles or priorities, so treating them as direct translations risks losing information. Finding sementic alignment across different languages could better capture shared meaning, and potentially uncover predictive structure.
Recent advances in natural language processing (NLP) of transformer based large language models (LLMs), especially bidirectional encoder representations from transformers (BERT), suggest a path forward [5, 19]. Chen et al. [4] demonstrate that embeddings from LLMs can extract nuanced, contextual features from news text that outperform traditional bag-of-words and sentiment models in return prediction tasks. They show that across 16 global equity markets and 13 languages, LLM-based representations -
generate superior performance in forecasting returns. Their findings underscore that rich text representations, beyond surface counts or sentiment scores, can capture incremental predictive information. Nevertheless, LLM embeddings typically operate at the document level, and do not explicitly connect content across languages. In multilingual news corpora, matching semantically similar passages remains a challenge: naive cosine similarity-based methods tend to be dense and uninformative, and stati-
stical alignments may fail when the coverage diverges across languages. In this paper, we propose a sentence-level alignment method based on optimal transport, enabling more interpretable and sparse maps between languages. Concretely, we embed sentences from English and foreign language articles using a multilingual encoder (LaBSE [8]), then compute an optimal transport plan to align semantically close sentences. The resulting sparse alignment highlights which sentence pairs truly share similar me-
anings. We then aggregate aligned, unaligned, and full-text embeddings to build return scores and test them in long-short strategies. The long-short portfolios based on aligned embeddings yield an idealized Sharpe ratios of 4.36, outperforming the embeddings based on full or unaligned texts.
2 Related Work
The most closely related study is Durand et al. [7], which uses precalculated sentiment scores from Thomson Reuters News Analytics for English and Japanese news to examine how language-specific sentiment predicts movements in the Japanese stock market. In contrast, we provide interpretable, sentence-level alignments and link English and Japanese news content to the cross-section of Japanese stock returns.
arXiv:2510.19203v1 [q-fin.CP] 22 Oct 2025

AI for Finance Symposium’25, November 2025, Singapore Y. Wu, L. Tao, I. Cheng, C. Martineau, Y. Nozawa, J. Hull, A. Veneris
Statistical machine translation (SMT) explicitly aligns words or phrases to facilitate translation. Early methods perform alignments at various granularities—word, phrase, or sentence [1, 2, 9, 10]—but typically assume one-to-one correspondences. In contrast, multilingual news about the same company may cover different aspects and lack direct correspondence. Our goal is not translation, but to identify semantically similar or distinct content that is informative for stock return prediction. Ideas -
from SMT, however, motivate our approach to sentence-level alignment. Recently, Dou and Neubig [6] use optimal transport to align words across languages for improved translation and cross-lingual transfer learning, fine-tuning models on short parallel sentences. We extend this approach to sentence-level alignment in longer documents. Longer articles often contain many stopwords, which can dilute word-level embeddings, whereas sentence-level alignment better captures semantic meaning. A major chall-
enge is the lack of “gold standard” alignments at scale, which we address by leveraging optimal transport for unsupervised, interpretable sentence alignment applicable to financial prediction.
3 Data
We collect global news articles from the Bloomberg terminal news feed covering the period 2008–2024.1 For each unique story identifier, we retain only the final update published within 24 hours of its initial appearance on Bloomberg. We then align news articles with stock prices and returns based on release times: articles published between 30 minutes before market open on day t −1 and 30 minutes before market open on day t are associated with day t’s prices and returns. For example, the Tokyo mar-
ket opens at 9:00 am, an article released at 8:28 am on day t is linked to the stock price and return on day t, while an article released at 8:50 am on day t is associated with the stock price and return on day t + 1. In our experiments, we include English and foreign-language articles that are explicitly associated with a single stock ticker with a ticker score ≥ 75, indicating medium-to-high relevance to that stock. For each stock s and trading day t, we concatenate all associated English articl-
es into a single composite article Et,s , and all associated foreign-language articles into Ft,s . We focus primarily on the Japanese market, which has the richest foreign-language coverage in the news feed. In the preprocessed dataset, this corresponds on average to approximately 35,000 English articles and 27,000 Japanese articles annually, spanning about 3,500 stocks traded on the Tokyo Stock Exchange. By comparison, the Hong Kong, Taiwan, and mainland Chinese exchanges yield fewer than 10,000 -
English articles and 3,700 Chinese (simplified or traditional) articles annually, covering fewer than 1,000 stocks in each exchange, starting from 2012, while the Chinese coverage ranks the second among non-English news in the dataset. After concatenation in the Japanese market, we obtain an average of 17,807 stock-days2 per year with both English and Japanese news available. Stock return data are obtained from Compustat Global using WRDS for the period 2008–2024.
1Bloomberg provided us access to the data under a non-disclosure agreement. 2A stock-day is defined as a trading day for a given stock.
4 Methodology
Our objective is to align English and foreign-language articles at the sentence level for each stock-day. We seek to identify pairs of sentences that capture similar semantic content, while minimizing misalignments, thereby enhancing interpretability of the results.
Text Preprocessing. Starting from the raw dataset, we retain only articles whose body text is updated within 24 hours of their initial publication on Bloomberg. For each article, we remove Bloombergspecific headers and footers, keeping only the main body. Within each paragraph, line breaks are removed to ensure continuous text. We do not remove numbers or stopwords, since they may help preserve sentence structure when processed by machine learning models. Articles shorter than 100 characters or lo-
nger than 100,000 characters in any language are excluded.
Sentencizing and Embedding. We use spaCy [11] monolingual models to split each article into sentences, yielding E
t,s = Et,s,1, ..., Et,s,n for English articles and Ft,s = Ft,s,1, ..., Ft,s,m
for foreign-language articles. Each sentence is then embedded using the pre-trained LaBSE model [8], a language-agnostic encoder that assigns similar embeddings to semantically equivalent text across languages. The resulting embeddings are normalized and stacked into matrices X E
t,s ∈ Rn×768 and X F
t,s ∈ Rm×768 for English and foreign language articles, respectively.
Optimal Transport for Alignments. Optimal transport (OT) [12, 13, 16] provides a principled way to map probability mass from one distribution to another while minimizing transport cost. The original Monge formulation [13] is often intractable and may not even admit a solution unless restrictive conditions are met [3]. Instead, we adopt the Kantorovich formulation [12], and in particular its discrete version as described in [6, 15]. Let {xi }n
i=1 and yj
m
j =1
denote two point sets with associated probability distributions px and py, where Ín
i=1 pxi = 1 and Ím
j=1 pyj = 1. The cost of moving mass from xi to yj is given by ci j = c (xi, yj ). The optimal transport problem seeks a transport plan γi j ≥ 0 that minimizes the total cost of moving probability mass:
min
γ
( ∑︁
ij
ci jγi j : γi j ≥ 0,
∑︁
i
γi j = pyj ,
∑︁
j
γi j = pxi
)
The resulting transport plan is self-normalized and sparse [6, 18], making it more effective than pure cosine similarities. In practice, the optimal γ is approximated via entropic regularization using the Sinkhorn algorithm [17]. Computational efficiency can be further improved by exploiting sparse and low-rank matrix structures [20], yielding up to a tenfold speedup in our setting and making largescale analysis feasible. A large value of γi j indicates that xi and yj are likely to have similar se-
mantics. In this paper, we follow Dou and Neubig [6] but extend the method from word-level to sentence-level alignments. Specifically, the English and foreign-language articles, X E
t,s and X F
t,s , are treated as two high-dimensional point sets consisting of n and m each. Sentences are assigned equal probability mass, i.e., uniformly distributed. The cost matrix is defined using pairwise cosine distance,
cij = 1 − X E
t,s,i · X F
t ,s, j
and scaled to [0, 1] with min-max normalization.

Aligning Multilingual News for Stock Return Prediction AI for Finance Symposium’25, November 2025, Singapore
We compute transport plans in both directions: source-to-target (foreign to English) and target-to-source (English to foreign), denoted γ and γ′. For each row i in γ, we identify the maximum element γi jmax . If γi jmax falls within the top 5% of column jmax , we mark a forward alignment, producing the binary forward alignment matrix A ∈ {0, 1}n×m. The backward alignment matrix B ∈ {0, 1}m×n is computed analogously.3 Because news coverage varies across languages, it is possible that for a given st-
ock-day, content reported in one language is not covered in the other. In such cases, OT may still produce spurious alignments. To filter these out, we use the raw pairwise cosine similarity matrix ξi j = X E
t,s,i · X F
t,s,j ,
and retain only alignments where ξi j ≥ ξthres , where ξthres is a hyperparameter that is dependent on the distribution of cosine similarities of the embedding model. We choose ξthres = 0.6 for LaBSE. The final alignment matrix is obtained as the intersection of three matrices:
A = A ∗ BT ∗ (ξi j ≥ ξthres ),
where ∗ denotes elementwise multiplication.
Aggregating Embeddings. Once the alignment matrix A is obtained, we aggregate sentence embeddings based on alignment status. Specifically, we average the embeddings of aligned sentences (Ai j = 1) in each language to obtain the aligned embeddings X
E,A t ,s
and X
F ,A
t,s , and similarly average unaligned senteces (Ai j = 0) to obtain X
E,U A
t,s and X
F,U A
t,s . We also compute the average embeddings
over all sentences to produce global embeddings X
E,Full
t,s and X
F ,F ull
t,s .
Each aggregated embedding is a 768-dimensional vector. For notation, we denote these aggregated embeddings by X
l,k
t,s , where l ∈ {E, F } indicates the language and k ∈ {A, U A, Full } indicates the aggregate type. The superscript Full may be omitted.
Return Score Constructions. Let RetOC
t,s denote the open-close return for stock s on day t. We use Ridge regression with weights w to associate return scores to the embeddings, following [4]:
arg min
w
X
l,k
t,s w − RetOC
t ,s
2
2
+ λ ∥w ∥2
2,
with regularization parameter λ selected by cross validation over the search space [10, 20, 30, ..., 100], with optimal values typically chosen as 90 or 100. We adopt a rolling window framework: for each year y, the model is trained on data from year y − 5 through
y and then used to generate return scores RˆetOC,l,k
t,s = X
l,k
t,s w (de
noted Softl,k
t,s ) for day t in year y + 1. This procedure, repeated for years 2012–2024, ensures that return scores are always computed using past data, avoiding look-ahead bias. The analysis period for evaluation is 2018–2024.
5 Results
Alignment Sparsity. Figure 1 illustrates the sparsity of different alignment methods applied to news articles discussing the Bank of Japan (8301.T) on 2023-01-04. We compare pure cosine similarities, normalized via Softmax or Entmax [14], and optimal transport. Both Softmax and Entmax produce dense transport plan matrices, whereas optimal transport yields a sparse matrix with non-zero
3Due to sparsity, one could instead apply a global threshold to directly enforce one-toone mappings.
values concentrated in relatively few locations. This sparsity facilitates the selection of a global threshold for filtering aligned sentence pairs. Some examples of aligned sentences are provided in the Appendix. In the dataset, updates to a single news article may be reported as several stories with slight rephrasing, resulting in multiple possible alignments. Figure 2(a) reports the average proportion of aligned and unaligned sentences within each article, where “JP” refers to Japanese news and-
 “EN” to English news. Overall, approximately 30–50% of sentences are aligned in more recent years. Note that spaCy’s sentencizing may occasionally be inaccurate, particularly for articles containing bullet points, which can affect the total sentence count. Figure 2(b) shows the number of stock-days with aligned and unaligned sentences. Most stock-days contain at least one aligned and one unaligned sentence pair.
Similarity of Semantics and Return Scores. Table 1 summarizes the distribution of cosine similarities for embeddings of aligned (X
E,A
t,s and X
F ,A
t,s ), unaligned (X
E,U A
t,s and X
F,U A
t,s ) and full articles (X E
t ,s
and X F
t,s ) across the entire data sample from 2012 to 2024. As one would expect: (1) Aligned embeddings exhibit the highest average cosine similarity 0.8, with low variance, reflecting strong semantic similarity. (2) Unaligned embeddings generally show lower cosine similarities, averaging around 0.53 with higher standard deviation. Potentially, the current alignment parameters may be too strict, producing false negatives. (3) Full-article embeddings fall in between, with an average similarity of 0.75. -
Varying the cosine similarity cutoff thresholds has minimal impact, indicating that the optimal transport-based alignment robustly identifies semantically similar content. Table 2 reports correlations between return scores computed from different aggregated embeddings. Given that we work with daily returns across more than 70,000 observations from 2018 to 2024, it is challenging to achieve high correlations with realized returns. Nevertheless, consistent patterns emerge: return scores derived from-
 aligned embeddings (Softl,A) tend to exhibit higher correlations, while scores from unaligned embeddings (Softl,U A) show lower correlations.
Table 1: Sentence Level Cosine Similarity
Alignment mean std 5% 50% 95%
Aligned 0.79 0.06 0.66 0.81 0.87 Unaligned 0.53 0.20 0.18 0.54 0.81 Full 0.75 0.09 0.59 0.76 0.86
Impact on Trading Strategy. To assess whether commonly discussed information influences investor behavior and market performance, we implement a long-short trading strategy based on the constructed return scores. On each trading day with at least 20 traded stocks, we rank the stocks by their predicted return scores Softl,k
t,s , and divide them into quantiles. Long the stocks in the top
quantile and short the stocks in the bottom-quantile. Let RetOC,L,l,k
t
and RetOC,S,l,k
t denote the average long and short returns on day t, for each language l and alignment type k. The long-short return is

AI for Finance Symposium’25, November 2025, Singapore Y. Wu, L. Tao, I. Cheng, C. Martineau, Y. Nozawa, J. Hull, A. Veneris
(a) Softmax (Cosine Similarity) (b) Entmax (Cosine Similarity) (c) Optimal Transport
Figure 1: Sparsity of Different Alignment Methods
(a) Proportion of Sentences Aligned (b) Number of Stock-days with Aligned and Unaligned Sentences
Figure 2: Alignments Found for Japanese News Articles
Table 2: Return Score Correlations
Ret SoftEN,A SoftEN,U A SoftEN SoftJ P,A SoftJ P,U A SoftJ P
Ret 1.00 0.02 0.03 0.03 0.02 0.01 0.03 SoftEN,A 0.02 1.00 0.41 0.67 0.67 0.38 0.57 SoftEN,U A 0.03 0.41 1.00 0.76 0.49 0.47 0.50 SoftEN 0.03 0.67 0.76 1.00 0.62 0.41 0.62 SoftJ P,A 0.02 0.67 0.49 0.62 1.00 0.44 0.72 SoftJ P,U A 0.01 0.38 0.47 0.41 0.44 1.00 0.71 SoftJ P 0.03 0.57 0.50 0.62 0.72 0.71 1.00
defined as
LSl,k
t = RetOC,L,l,k
t − RetOC,S,l,k
t.
We compute the distributional statistics of LSl,k
t , as well as Sharpe ratios for the resulting portfolios. Table 3 summarizes the results. The geometric mean of the daily long-short returns is calculated as
T Ö
t =1
(1 + LSl,k
t)
! 1/T
− 1,
where T is the total number of trading days from 2018 to 2024. The
daily Sharpe ratio is computed as mean(LSl,k
t) std ( LSl ,k
t ) , and the annualized
Sharpe ratio is daily Sharpe ratio multiplied by
√
252. In the Japanese market, the full embedding of Japanese news generates higher Sharpe than English news. This means that Japanese news typically have higher association with the returns in Tokyo exchange. In the Japanese market, portfolios based on the full embeddings of Japanese news achieve higher Sharpe ratios than those based on English news, indicating that Japanese news generally has stronger predictive power for returns on the Tokyo Stock Exchange. Portfolios constructed from aligned emb-
eddings exhibit even higher Sharpe ratios for both Japanese and English texts, suggesting that sentences capturing common themes across languages provide clearer signals of stock performance. In contrast, unaligned embeddings tend to be noisier and less informative.

Aligning Multilingual News for Stock Return Prediction AI for Finance Symposium’25, November 2025, Singapore
Table 3: Strategy Summary
Alignment Lang Geo Mean Mean Std 5% 50% 95% Sharpe Ann. Sharpe
Aligned JP 0.35% 0.36% 1.32% -1.76% 0.39% 2.31% 0.27 4.36 EN 0.28% 0.29% 1.34% -1.86% 0.23% 2.46% 0.22 3.42 Unaligned JP 0.17% 0.18% 1.34% -1.98% 0.16% 2.29% 0.13 2.12 EN 0.23% 0.24% 1.29% -1.66% 0.16% 2.45% 0.18 2.91 Full JP 0.30% 0.31% 1.23% -1.59% 0.27% 2.38% 0.25 3.98 EN 0.24% 0.25% 1.16% -1.65% 0.17% 2.20% 0.21 3.40
6 Conclusion
In this paper, we use optimal transport to align semantically similar sentences in multilingual news articles. Compared to pure cosine similarities, optimal transport produces sparser and more interpretable alignments. Sentences identified as aligned exhibit high semantic similarity, and return scores derived from these aligned sentences show stronger correlations with realized returns. In a long-short trading strategy, portfolios based on aligned sentences achieve higher Sharpe ratios, indicating-
 that commonly discussed themes across languages provide more informative signals for predicting stock returns. Future directions for this research include: (1) extending the approach to additional markets and languages, and (2) improving thresholding techniques to reduce false negatives in the alignment process.
Acknowledgments
This research was carried out at Rotman School of Management, FinHub Financial Innovation Lab, University of Toronto. We gratefully acknowledges financial support and insightful discussions from Royal Bank of Canada (RBC) Capital Markets. New York, NY and Toronto, ON, Canada.
References
[1] 2015. IBM Models. https://smt.wiki/IBM_Models. SMT Research Survey Wiki, accessed 26 Oct 2015. [2] Peter F. Brown, John Cocke, Stephen A. Della Pietra, Vincent J. Della Pietra, Frederick Jelinek, Robert L. Mercer, and Paul S. Roossin. 1988. A Statistical Approach to Language Translation. In Proceedings of the 12th International Conference on Computational Linguistics (COLING 1988), Volume 1. Budapest, Hungary, 71–76. [3] Luis A. Caffarelli, Mikhail Feldman, and Robert J. McCann. 2002. Construc-
ting Optimal Maps for Monge’s Transport Problem as a Limit of Strictly Convex Costs. Journal of the American Mathematical Society 15, 1 (2002), 1–26. http: //www.jstor.org/stable/827090 [4] Yifei Chen, Bryan Kelly, and Dacheng Xiu. 2022. Expected Returns and Large Language Models. https://ssrn.com/abstract=4416687 [5] Jacob Devlin, Ming-Wei Chang, Kenton Lee, and Kristina Toutanova. 2019. BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. In Proceedings of the 2019 C-
onference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (Long and Short Papers), Jill Burstein, Christy Doran, and Thamar Solorio (Eds.). Association for Computational Linguistics, Minneapolis, Minnesota, 4171–4186. https://doi. org/10.18653/v1/N19- 1423 [6] Zi-Yi Dou and Graham Neubig. 2021. Word Alignment by Fine-tuning Embeddings on Parallel Corpora. In Proceedings of the 16th Conference of the European Chapter of the Assoc-
iation for Computational Linguistics: Main Volume, Paola Merlo, Jorg Tiedemann, and Reut Tsarfaty (Eds.). Association for Computational Linguistics, Online, 2112–2128. https://doi.org/10.18653/v1/2021.eacl-main.181 [7] Robert B. Durand, Joyce Khuu, and Lee A. Smales. 2023. Lost in translation. When sentiment metrics for one market are derived from two different languages. Journal of Behavioral and Experimental Finance 39 (2023), 100825. https://doi. org/10.1016/j.jbef.2023.100825 [8] Fangxiaoyu Fe-
ng, Yinfei Yang, Daniel Cer, Naveen Arivazhagan, and Wei Wang. 2022. Language-agnostic BERT Sentence Embedding. In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), Smaranda Muresan, Preslav Nakov, and Aline Villavicencio (Eds.). Association for Computational Linguistics, Dublin, Ireland, 878–891. https://doi.org/10.18653/v1/2022.acl- long.62
[9] Yarin Gal and Phil Blunsom. 2013. A Systematic Bayesian Treatment of the IBM Alignment Models. Technical Report. University of Cambridge. https: //arxiv.org/pdf/1306.4082.pdf Archived from the original (PDF) on 4 Mar 2016. [10] William A. Gale and Kenneth W. Church. 1993. A Program for Aligning Sentences in Bilingual Corpora. Computational Linguistics 19, 1 (1993), 75–102. https: //aclanthology.org/J93- 1004/ [11] Matthew Honnibal, Ines Montani, Sofie Van Landeghem, and Adriane Boyd. 2020. spa-
Cy: Industrial-strength Natural Language Processing in Python. Zenodo (2020). https://doi.org/10.5281/zenodo.1212303 [12] Leonid V. Kantorovich. 1942. On the Translocation of Mass. Doklady Akademii Nauk SSSR 37, 7–8 (1942), 199–201. In Russian: “O peremeschenii mass”. [13] Gaspard Monge. 1781. Mémoire sur la théorie des déblais et des remblais. Histoire de l’Académie Royale des Sciences de Paris (1781).
[14] Ben Peters, Vlad Niculae, and André FT Martins. 2019. Sparse Sequence-toSequence Models. In Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics, Anna Korhonen, David Traum, and Lluís Màrquez (Eds.). Association for Computational Linguistics, Florence, Italy, 1504–1519. https://doi.org/10.18653/v1/P19- 1146 [15] Gabriel Peyré and Marco Cuturi. 2020. Computational Optimal Transport. arXiv:1803.00567 [stat.ML] https://arxiv.org/abs/1803.00567
[16] Filippo Santambrogio. 2015. Optimal Transport for Applied Mathematicians: Calculus of Variations, PDEs, and Modeling. Progress in Nonlinear Differential Equations and Their Applications, Vol. 87. Birkhäuser Cham. https://doi.org/10. 1007/978âĂŘ3âĂŘ319âĂŘ20828âĂŘ2 [17] Richard Sinkhorn. 1964. A Relationship Between Arbitrary Positive Matrices and Doubly Stochastic Matrices. The Annals of Mathematical Statistics 35, 2 (1964), 876–879. http://www.jstor.org/stable/2238545 [18] Kyle Swanson, Lili -
Yu, and Tao Lei. 2020. Rationalizing Text Matching: Learning Sparse Alignments via Optimal Transport. In Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, Dan Jurafsky, Joyce Chai, Natalie Schluter, and Joel Tetreault (Eds.). Association for Computational Linguistics, Online, 5609–5626. https://doi.org/10.18653/v1/2020.acl-main.496 [19] Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Ł ukasz Kaiser, and Illia Polosukhin-
. 2017. Attention is All you Need. In Advances in Neural Information Processing Systems, I. Guyon, U. Von Luxburg, S. Bengio, H. Wallach, R. Fergus, S. Vishwanathan, and R. Garnett (Eds.), Vol. 30. Curran Associates, Inc. https://proceedings.neurips.cc/paper_files/paper/ 2017/file/3f5ee243547dee91f bd053c1c4a845aa- Paper.pdf [20] Chenrui Wang and Yixuan Qiu. 2025. The Sparse-Plus-Low-Rank Quasi-Newton Method for Entropic-Regularized Optimal Transport. In Forty-second International Conference on Ma-
chine Learning. https://openreview.net/forum?id= WCkMkMcqpb
A Sample Aligned Sentences
In this appendix, we compare the sentence alignments produced by Softmax, Entmax, and Optimal Transport for a Japanese news article about the Bank of Japan (8301.T) published on 2023-01-04. For Softmax and Entmax, we select alignments corresponding to the top 5% probabilities across the entire matrix. The results are summarized in Table 4, where correct alignments are manually identified and highlighted in bold. We also observe that semantic similarity plays the key role: aligned pairs may differ -
in numerical values, or in some cases, involve sentences that are not direct translations but still convey related meanings.

AI for Finance Symposium’25, November 2025, Singapore Y. Wu, L. Tao, I. Cheng, C. Martineau, Y. Nozawa, J. Hull, A. Veneris
Table 4: Sample Aligned Sentences

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:22.478Z
- **Text Length:** 27802 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
