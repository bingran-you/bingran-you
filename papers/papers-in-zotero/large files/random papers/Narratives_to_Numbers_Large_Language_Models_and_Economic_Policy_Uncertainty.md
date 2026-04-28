# PDF Document: Hartley - 2025 - Narratives to Numbers Large Language Models and Economic Policy Uncertainty.pdf

**File Path:** Hartley - 2025 - Narratives to Numbers Large Language Models and Economic Policy Uncertainty.pdf

**Processed Date:** 2026-02-10T18:16:47.191Z

**File Size:** 8593.73 KB

**Total Pages:** 25

**Extracted Pages:** 25

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3155

**Title:** Narratives to Numbers: Large Language Models and Economic Policy Uncertainty

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Narratives to Numbers: Large Language Models and
Economic Policy Uncertainty
By Ethan Hartley∗
This study evaluates large language models as estimable classifiers and clarifies how modeling choices shape downstream measurement error. Revisiting the Economic Policy Uncertainty index, we show that contemporary classifiers substantially outperform dictionary rules, better track human audit assessments, and extend naturally to noisy historical and multilingual news. We use these tools to construct a new nineteenth-century U.S. index from more than 360 million newspaper articles and exploratory -
cross-country indices with a single multilingual model. Taken together, our results show that LLMs can systematically improve text-derived measures and should be integrated as explicit measurement tools in empirical economics. JEL: C45, C38, D8, E6 Keywords: large language models, deep learning, natural language processing, policy uncertainty
Uncertainty is fundamental. It shapes how firms invest, how households spend, and how policymakers design and time interventions. Policy-related uncertainty is especially central in current debates about trade tensions, unconventional monetary policy, and healthcare, yet it is not directly observed. It is a latent feature of the environment that we infer from behavior and from communication about policy. Text offers a natural way to make this latent object measurable: newspaper articles, governmen-
t communications, and other narratives record when policy is contested, delayed, or unexpectedly changed. Turning those narratives into statistically relevant data requires a mapping from high-dimensional text to scalars. We show that the design of this mapping materially affects the text-based indices used in empirical work and that modern, empirically driven methods yield markedly better measures. In macroeconomics and finance, the leading example is the Economic Policy Uncertainty (EPU) index o-
f Baker, Bloom and Davis (2016) (henceforth BBD), constructed by counting newspaper articles that mention a small dictionary of policy-related and uncertainty-related terms. That keyword-based design made it possible to measure policy uncertainty at scale and has been widely adopted,
∗ Hartley: University of Hawaii at Manoa (email: ehartley@hawaii.edu) Acknowledgements: The technical support and advanced computing resources from University of Hawaii Information Technology Services Cyberinfrastructure, funded in part by the National Science Foundation CC* awards #2201428 and #2232862 are gratefully acknowledged. The author is funded by the Department of Energy Innovation in Buildings Graduate Research Fellowship. There are no other sources of financial support or conflicts of i-
nterest to report.
1
arXiv:2511.17866v2 [econ.GN] 25 Nov 2025

2 11 2025
but it also hard-wires a particular, hand-crafted mapping from text to an index. This raises a basic question: how sensitive are the resulting series (and the empirical conclusions that rely on them) to the choice of text classifier, and what do economists gain by using modern language models instead? We address these questions within the BBD framework, comparing large language models (LLMs)high-dimensional models of natural language trained on massive text corpora to predict the next word—to the -
canonical keyword-based approach and show that the choice of classifier materially changes both article-level performance and the resulting index.
Our empirical analysis proceeds in three steps. We first compare keyword-based models, support vector machine (SVM) classifiers, and fine-tuned LLMs on the human-audited BBD corpus. We then embed these models in the standard EPU construction pipeline to study how classifier performance, decision threshold, and aggregation choices affect resulting indices. Finally, we apply these models to hundreds of millions of historical U.S. articles and millions of multilingual articles, constructing a ninetee-
nth-century U.S. index, a GDP-weighted African index, and a Bangladesh EPU index.
Three findings emerge. First, LLMs substantially outperform keyword-based models at the article level, delivering 46% relative improvements in F1 score and closer alignment with human auditor assessments. Second, these gains matter for the resulting indices. Alternative classifiers and aggregation choices produce noticeably different series, and these design decisions can be used by the econometrician to balance data quality against data scarcity and shape the resulting pattern of measurement erro-
r. Third, learned representations transfer well. They allow us to process noisy articles dating back to the 1800s and classify text in 29 languages using a single mapping learned from English articles.
Our analysis adds to the growing text-as-data literature in economics and finance. Classic applications map text to numbers using dictionaries and term frequencies (e.g., Tetlock, 2007; Gentzkow and Shapiro, 2010; Loughran and McDonald, 2011). Recent work uses machine learning to digitize and structure large corpora from newspapers and other textual sources, greatly expanding available datasets (Dell et al., 2023; Silcock et al., 2024). A more closely related strand applies LLMs to economic predic-
tion problems, such as forecasting labor market transitions from structured resumes (Vafa et al., 2022; Athey et al., 2024). We extend this agenda to measurement, using LLMs as calibrated classifiers that map text into policy-uncertainty labels and treating them as explicit, estimable components of the data-generating process for text-based indices.
Within the specific literature on measuring policy uncertainty, most indices continue to rely on static keyword sets or rule-based classifiers, sometimes augmented with sentiment weighting (Charemza, Makarova and Rybiski, 2022), cooccurrence constraints (Benguria et al., 2022), or topic models (Azqueta-Gavaldn et al., 2023). These approaches are attractive because they are transparent and easy to implement, but they embed strong assumptions about how uncertainty is

NARRATIVES TO NUMBERS 3
expressed in text and how it should be aggregated into a univariate series. Supervised methods, including SVMs trained on labeled articles (Tobback et al., 2018; Noailly, Nowzohour and van den Heuvel, 2022) and more recent work that uses fine-tuned or prompted language models to construct policy-related uncertainty indices (Trust, Zahran and Minghim, 2023; Ito, Sato and Ota, 2025; Audrino, Maly and Stalder, 2024), illustrate gains in performance but rely on narrow domains, automated or weak labels-
, and limited validation. By training directly on large-scale human labels and evaluating against the original audit design in Baker, Bloom and Davis (2016), we provide a transparent benchmark for what is achievable with modern, probabilistic, context-aware models and a methodology that can be ported to other policy domains and text-as-data applications. Finally, we contribute to the large empirical literature employing policy uncertainty indices (and other variables constructed from unstructured -
data) as regressors in macroeconomic and financial models (e.g., Caldara and Iacoviello, 2022; Jahan-Parvar et al., 2024; Kong et al., 2022). These indices are typically treated as observed covariates, even though they are generated by an underlying model and measured with error. LLM-based classifiers produce probabilistic article-level assessments, allowing researchers to evaluate how threshold and aggregation choices shape the resulting series and downstream measurement error. This focus on meas-
urement is complementary to recent work on robust inference with machine-learned predictions, such as the MARS framework of Carlson and Dell (2025) and the LLM analysis of Ludwig, Mullainathan and Rambachan (2025). We show that the choice of classifier and calibration can materially alter text-based signals that enter downstream models, and that recognizing this endows researchers with a transparent set of tuning parameters for measuring, decomposing, and mitigating the resulting uncertainty.
I. Identifying Policy Uncertainty
As proposed in BBD, constructing a text-based EPU index proceeds in two steps. First, articles are labeled using a simple bag-of-words (BOW) classifier: an article is labeled EPU-related if it contains at least one term from each of three keyword groups:
• Economic: economic or economy • Policy: Congress, deficit, Federal Reserve, legislation, regulation, or White House • Uncertainty: uncertain or uncertainty
Let aEPU
ijt denote the indicator that article j in newspaper i at time t meets this criterion. Second, these article-level labels are aggregated into a newspaper- and time-specific index. For each newspaper-period, define the share of EPU-related articles
Xit = 1
Jit
Jit
X
j=1
aEPU
ijt ,

4 11 2025
where Jit > 0 is the total number of articles. Let T0 denote the normalization window and
σi = sd{Xit : t ∈ T0}, Yit = Xit
σi
.
Averaging across newspapers active at time t,
Zt = 1
|It|
X
i∈It
Yit,
and rescaling to have mean 100 over T0 yields
Z= 1
|T0|
X
t∈T0
Zt, EPUt = Zt
Z × 100.
The resulting index captures deviations from typical media coverage; when outlets devote more space than usual to policy speculation, the uncertainty measure rises.
A. From Keywords to Context
In introducing methods for identifying policy uncertainty and characterizing the benefits of using LLMs, we follow the text-as-data framework of Gentzkow, Kelly and Taddy (2019). The index-generation procedure can be decomposed into three steps:
1) represent raw article text D as a numerical object C;
2) map C to predicted article-level labels Aˆ for the unobserved outcomes A (policy relevance and uncertainty) using a model M;
3) aggregate Aˆ into an index I using the procedure described above.
As Gentzkow, Kelly and Taddy (2019) note, the mapping M often receives little attention once predictive performance appears acceptable. Historically, the dimensionality of text and computational constraints left little opportunity for scalable, semantically rich mappings from C to Aˆ. Applied work therefore reverted to one of the earliest ideas in natural language processing (NLP), keywordbased heuristics (Weizenbaum, 1966). The guiding principle was straightforward: when modeling the full complex-
ity of language is infeasible, compress C, simplify M, and use methods that are transparent, fast to implement, and reasonably accurate. The BOW classifier in BBD is one among many keyword-based applications in economics and finance. In the policy-uncertainty setting, however, several limitations of a keyword-based M are first order.1 As Keith et al. (2020) emphasize,
1These issues are not unique to this context, and many improvements generalize across domains and

NARRATIVES TO NUMBERS 5
and as we illustrate below, BOW classifiers are highly sensitive to dictionary design. Even modest changes to term sets or modeling choices yield materially different classifications and indices. Appendix Figure I shows the instability that arises when varying dictionaries, allowing partial matches, and performing basic preprocessing. Beyond dependence on user-defined term sets and brittleness to noisy text, vocabulary drifts across space and time, limiting a classifiers applicability in longitudi-
nal analysis.2 More fundamentally, keyword-based heuristics reduce meaning to the co-occurrence of terms, even though policy discussion and uncertainty are highly contextual. As Loughran and McDonald (2011) demonstrate for financial filings, generic dictionaries can misclassify text when they ignore domain-specific meaning; the same issue arises for policy-uncertainty classifiers that rely only on the presence of particular terms.
The fundamental challenge for establishing a suitable model M is that classification errors at the article level propagate into the index and then into downstream econometrics. Recent work by Carlson and Dell (2025) develops a framework for inference when estimators depend on predictions from unstructured data, treating text-based indices as imputed structured regressors and adjusting standard errors accordingly. Our analysis instead focuses on upstream design choices (classifier architecture, thr-
esholds, and aggregation rules) that govern the magnitude and structure of this measurement error before it enters any econometric framework. Misclassification can mute true movements or create spurious spikes in indices, which enter estimation as nonclassical, time-varying measurement error that may differ across newspapers and topics. The resulting distortions to identification and inference are difficult to identify and, even when anticipated, are not easily remedied.
Modern probabilistic NLP offers a principled alternative. Context-aware classifiers learn from human-labeled data, use full-document context, and output calibrated probabilities rather than binary labels. These methods reduce reliance on ad hoc dictionaries, improve robustness to noisy text and drifting terminology, and allow uncertainty to be reflected directly in the scores. By making the text-to-index mapping an explicit, estimable object, they give econometricians more control over how measure-
ment error enters their regressors and more tools for diagnosing its implications. Yet systematic applications in economics remain scarce, and most widely used policy-uncertainty indices are still based on automated keyword rules. The next section introduces the contemporary tools we use to improve M and our minimal-intervention tuning protocol. We then embed these tools in the canonical EPU pipeline, document performance gains relative to BOW, and validate the resulting indices against human perc-
eptions of uncertainty.
applications. We focus on EPU because it is widely adopted and offers a clear lens on methodological trade-offs. 2For example, Baker, Bloom and Davis (2016) adjust their dictionary for historical coverage to include “business”, “industry”, “commerce”, and “commercial” to their economic term set.

6 11 2025
II. LLMs for EPU
LLMs are large neural networks pre-trained on broad text using simple predictive targets (for example, next-word prediction). Trained on vast corpora, they learn general language representations that transfer easily and can be adapted to new tasks with limited labeled data. Recent advances, most notably the Transformer and large-scale pretraining of LLMs, have made previously infeasible textas-data tasks routine (Vaswani et al., 2023; Devlin et al., 2019; Brown et al., 2020; Touvron et al., 2023).-
 As Gentzkow, Kelly and Taddy (2019) emphasize, the high dimensionality and unstructured nature of text long posed a barrier; LLMs address this through attention. Rather than building dependence through fixed local structure or recursion, attention forms a data-driven weighted average over the full context. For token t, the model outputs yt = PT
s=1 αtsvs, where the weights αts are nonnegative and sum to one (a learned, content-based weighting). Positional encodings supply order, and fully parallel computation enables scale. The result is a compact, context-aware representation of high-dimensional text that embeds each document in its broader linguistic context and helps overcome the curse of dimensionality. From the practitioners perspective, there are several ways to deploy LLMs to extract statistically useful signals from text.
In language modeling, the objective is next-token prediction and it is most useful for text generation or completion. A prominent applied example in economics is structured resume completion, where the LLM predicts an occupation from a finite set of options (Vafa et al., 2022; Athey et al., 2024). Formally, language modeling maximizes the likelihood of the next token given prior context.
In instruction use, an instruction-tuned model is held fixed and queried with a structured prompt to return schema-constrained outputs or labels. This is useful for information extraction and zero-shot classification when labeled data are scarce (Brown et al., 2020; Gilardi, Alizadeh and Kubli, 2023). This method of interfacing with LLMs has been increasingly adopted in economics to simulate agents in experimental and game theory contexts (Horton, 2023; Manning et al., 2024; Akata et al., 2025). A-
t the same time, instruction-based use raises concerns about prompt sensitivity, hallucinated content, calibration, and anthropomorphic interpretation (Brown et al., 2020; Lin, Hilton and Evans, 2022; Zhao et al., 2021; Bender and Koller, 2020; Bender et al., 2021; Ullman, 2023; Shapira et al., 2023).
In supervised adaptation, a pre-trained backbone (a general-purpose language model trained on massive text corpora that supplies reusable representations) is paired with a small task head (classification or regression) trained on labeled data. This lets the empiricist steer predictions toward domain-relevant cues, align output with human labels, and obtain calibrated probabilities for thresholding and downstream analysis, while eliminating sensitivity to user-determined prompts. In what follows, w-
e use this supervised adaptation strategy as our primary deployment regime. More concretely, we combine an LLM backbone MLLM with a classification head MCH. Given raw text C, the backbone produces a task

NARRATIVES TO NUMBERS 7
relevant representation
 ̃C = MLLM(C; θLLM).
The head MCH then maps  ̃C to a probability of the positive class (e.g., article reflects policy uncertainty) via a logistic link:
p(y=1 | C) = σ w⊤  ̃C + b ,
where σ(z) = 1/(1 + e−z) and (w, b) are the head parameters. Econometrically, this is a logit model on the learned representation  ̃C. Fine-tuning updates MCH and (optionally) the backbone parameters θLLM to minimize a supervised loss, typically cross-entropy. In our main specifications we fine-tune both the backbone and the classifier head. When we instead freeze the backbone and train only the head, performance deteriorates (Appendix Figure 4), highlighting the value of adapting the backbone so -
that the model places greater weight on the cues most informative about EPU.
A. Data
A central component of BBD is a comprehensive human audit study in which teams of researchers systematically reviewed and labeled approximately 12,000 news articles for their relation to policy uncertainty.3 The resulting dataset covers the period 1900-2012 and provides binary labels for EPU, supplemented by auditor certainty scores and policy category annotations. Within BBD, these data were used to construct the term sets for their BOW classifier. To maintain comparability, we rely exclusively o-
n the audited corpus for both model development and evaluation, noting that because the BOW dictionary was constructed using this audit, the BOW performance we report should be interpreted as an upper bound for this class of keyword-based methods. From this corpus, we remove duplicate entries and articles without full text, leaving 10,393 articles with human-designated labels, widely regarded as the gold standard in NLP. We randomly split the data into 70% training (n = 7,275), 20% validation (n =-
 2,078), and 10% test (n = 1,040). As a robustness check, we also use a temporal split: articles from 1900-2005 go to training (7,660) and validation (1,915), and articles from 2006-2012 form the held-out test set (818). For exploring additional policy categories, we restrict attention to 4,596 articles for which policy category labels can be reliably linked. In the original audit, coders could assign any combination of 16 policy categories. For our multitask models, we focus on seven categories w-
ith established BOW classifiers (monetary policy; fiscal policy and government spending; tax policy; entitlement programs; healthcare policy; financial regulation; and trade policy). Our main text results restrict this further to the four with more than 100 positive labels: monetary
3Auditors were carefully selected, closely supervised, and followed a standardized auditing guide, available at policyuncertainty.com.

8 11 2025
policy, fiscal policy and government spending, tax policy, and trade policy. In addition, we use 730 held-out test articles with auditor-reported certainty scores for each label, which we treat as a proxy for human perceptions of classification difficulty. We update model weights on the training set, tune model hyperparameters on the validation set, and report final performance on the held-out test set to limit overfitting.4 For the policy category subset, we construct a final split using an itera-
tive sampling procedure to balance class proportions across partitions. Details on our sampling procedure, full article counts, and model fitting appear in Appendix Sections II and III.
B. Methods
Our goal is to improve the mapping M from text to numerical labels, prioritizing predictive performance and out-of-sample generalizability while acknowledging practical constraints common in applied settings. We evaluate three open-source LLMs to quantify trade-offs in predictive performance, speed, transparency, and input flexibility: BERT, Longformer, and Llama 3.1 (8B). BERT (∼110M parameters) is a compact encoder introduced by Devlin et al. (2019); it trains and runs quickly on standard hardwa-
re but has a short context window (512 tokens) and lacks long-range attention. Longformer (∼149M parameters) was designed by Beltagy, Peters and Cohan (2020) for efficient long document processing via sliding-window attention, offering low computational cost for full-article inputs, though it is less flexible across languages and tasks than newer decoder-style LLMs. Llama 3.1 (8B) (∼8B parameters) is a decoder LLM (Llama Team, 2024) with stronger contextual representations and multilingual capacit-
y that can improve accuracy and generalization, at the cost of higher memory use and slower inference. Results from BERT, which performs consistently below the other two models, are omitted from the main text but reported in the Appendix. We therefore focus on Longformer and Llama 3.1. Compared to Llama 3.1, Longformer is much lighter computationally and more practical for researchers with limited compute. By contrast, Llama 3.1 adds key functionality, especially multilingual support, and continue-
s to be actively developed within the Llama family suggesting future research may find far better performance than reported in this work. All BOW classifiers use the term sets established by BBD, supplemented in some policy categories by updates officially hosted on policyuncertainty.com. As a traditional machine-learning benchmark, we also train SVMs, the most commonly deployed non-dictionary alternative in the existing EPU and text-as-data literature. SVMs are optimized via grid search.5 Unless -
otherwise noted, both BOW and SVM classifiers are trained and evaluated on the full available text.
4Hyperparameters are model-specific design parameters that shape the fitting procedure. 5SVMs are optimized via grid search in scikit-learn (Pedregosa et al., 2011). Parameter spaces can be found in Appendix Section III.

NARRATIVES TO NUMBERS 9
Language models are fine-tuned using maximum input sequence lengths of 1282048 tokens. To explore the informational content of headlines alone, additional models are trained with context lengths of 32 tokens comprised of article titles. For each architecture and context length, we train at least 15 hyperparameter configurations and select the model with the lowest validation loss. We release all selected models on the HuggingFace Hub and provide implementation details and example code in Appendix -
Section VI. We assess classifier performance using accuracy, precision, recall, and F1.
Accuracy = T P + T N
TP +FP +TN +FN
(1)
Precision = T P
TP +FP
(2)
Recall = T P
TP +FN
(3)
F1 Score = 2 · T P
(4) 2 · T P + F P + F N .
C. Classifier Performance
Probabilistic models return scores pˆ ∈ [0, 1] for each article, which we convert to binary labels using optimized decision thresholds. Figure 1A uses the threshold that maximizes Youden’s index (Youden, 1950),
τ ∗ = arg mτax{T P R(τ ) − F P R(τ )},
i.e., the threshold that maximizes sensitivity plus specificity minus one and thus balances true-positive and true-negative rates.6 Figures 1B, 1D, and 1E, instead use the validation-set threshold that maximizes the F1 score. Unless noted otherwise, performance for newly trained models is reported on the randomly drawn held-out test set, while BOW is evaluated on the full audited corpus. Figure 1A reports bootstrapped performance for the baseline BOW model, a SVM, and several LLM configurations. L-
LMs trained on article titles alone achieve F1 scores similar to BOW applied to full text. Using only the first 128 tokens, LLMs exceed BOW and match SVMs trained on full articles, while LLMs trained and evaluated on 2048 tokens deliver a 46% relative F1 improvement over BOW. LLMs also uniformly improve recall, with the best model raising it from 45% to 82%, a 37 percentage-point gain. Recall is particularly important in this setting as false negatives mechanically undercount uncertainty-related a-
rticles, flattening EPU spikes around policy events and attenuating estimated responses in downstream regressions. These results reflect minimal fine-tuning and model development; fuller tuning and larger training corpora would likely yield further
6Appendix Section III illustrates the ROC curves for each model.

10 11 2025
Figure 1. Article-level classification performance. Panel A plots accuracy, precision, re
call, and F1 for BOW, SVM, and LLM classifiers under different input lengths, with solid
and dashed lines indicating Longformer and Llama-3.1 models. Panel B shows that the Long
former (2048) model yields higher F1 scores than BOW and SVM in classifying fiscal, mon
etary, trade, and tax policy articles. Panels C and D examine the Longformer (2048) in
more detail: predicted EPU probabilities align with human certainty ratings (Panel C), and
misclassification rates are lower than for BOW, especially among clearly EPU-related ar
ticles (Panel D). Panel E shows that Longformer F1 scores increase with sequence length
and are higher when articles lie within the model’s context window.

NARRATIVES TO NUMBERS 11
gains. Full diagnostics and comparisons across splitting criteria and models appear in Appendix Section III. Given comparable performance, we use Longformer (2048) as our main specification, prioritizing accessibility and speed for researchers working with large corpora.
We next assess performance on multi-label policy category prediction. Figure 1B reports results for a Longformer model trained to assign multiple policy categories simultaneously. For categories with roughly 450 positive articles on average, F1 improves by 29-106% relative to BOW, and Longformer uniformly dominates both BOW and SVM. These results suggest that a single, well-trained classifier can serve as a foundation model for policy uncertainty, mapping each article into a rich set of policy cat-
egories that can be reused across applications and downstream econometric designs. Full results for all categories appear in Appendix Section IV.
A natural concern is that these gains come from sharp increases in parameter counts. Highly complex models can feel opaque, and it is hard to know what is driving predictions, prompting active work on opening the black box of LLMs (Lundberg and Lee, 2017; Cunningham et al., 2023; Dunefsky, Chlenski and Nanda, 2024). While we do not develop interpretability methods here, we aim to assuage some concerns by evaluating LLM performance from a more humancentric perspective. After all, if the aim is to q-
uantify what humans perceive as uncertainty, the real question is whether these models learn relationships that mirror human judgment.
Figure 1C plots kernel density estimates of EPU probabilities predicted by Longformer (2048), conditional on auditor-reported certainty for held-out test articles. As auditor certainty rises, probability mass shifts away from 0.5 toward the tails, indicating more decisive model assessments on the same texts. Consistent with this, Figure 1D reports misclassification rates by certainty: BOW is nearly flat at about 40% across all certainty levels, whereas Longformer (2048) falls from roughly 37% amon-
g uncertain articles to 18% among certain articles, a 51% relative reduction. Given the index is meant to proxy how news shapes perceived policy uncertainty and agents behavior, it is encouraging that the mapping from text to scores moves with human certainty, assigning more extreme scores to clearer, more informative articles.
We also examine how performance varies with the maximum sequence length L. If the model has learned the relevant signals of EPU, truncating the text at a short L should disproportionately harm performance for longer articles, while increasing L should narrow this gap and eventually deliver diminishing returns. Figure 1E documents exactly this pattern: at low values of L, long articles are penalized relative to short ones, but as L rises, performance converges across article lengths.

12 11 2025
III. From Better Classifiers to Better Indices
Up to this point, we have treated article-level classification as the object of interest. For economists, however, classification is only a means to an end. What ultimately enters regressions, forecasts, and policy debates are the indices built from those classifications. The fact that LLMs substantially outperform BOW is already a compelling reason to adopt: if we can label data with fewer mistakes, we should. This section provides further motivation for adoption, showing that LLMs deliver indice-
s that track human audit benchmarks more closely, sharpen threshold and aggregation choices, and extend naturally to noisy historical text and multilingual settings.
A. Measurement Error
Let Ut be the latent level of economic policy uncertainty and Itm the index con
structed from classifier m. Then Itm = Ut + etm, where etm captures the error from
misclassified articles in period t. Lower misclassification rates imply smaller etm, so better classifiers deliver indices closer to the underlying uncertainty process. Figure 2A illustrates this for models trained and evaluated under the temporal split. Regardless of whether we use binary or probabilistic constructions, all LLM-based indices track the human benchmark much more closely than the BOW index, with BOW correlations of 0.47 (in sample) and 0.24 (out of sample), compared with average LLM-
 correlations of 0.78 and 0.76, respectively. In other words, using the same audit data, LLMs convert article-level predictions into a substantially cleaner EPU signal.
Second, threshold and aggregation choices control how model probabilities translate into index values and shape the measurement error etm. Figure 2B shows how decision thresholds and probabilistic aggregation affect the index. The Youden index generates binary classifications at the threshold that maximizes Youden’s J. The high-recall and high-precision indices use thresholds chosen to bring the relevant performance metric as close as possible to 0.85. Within the audit sample, the probabilistic in-
dex—constructed by aggregating predicted probabilities rather than binary labels—performs best, with a correlation of 0.81 with the human audit series. From an applied perspective, however, what matters is less which construction marginally wins on a given metric and more how its implied error pattern suits the empirical question.
Each threshold choice corresponds to a simple, interpretable way of mapping scores into the index. A high-recall threshold lowers the bar for positives, capturing more true EPU articles but also admitting more false positives and raising the baseline. A high-precision threshold raises the bar, producing cleaner spikes and a lower baseline at the cost of missing some true EPU articles, while Youden’s rule provides a balanced trade-off between sensitivity and specificity. These choices also determin-
e how much of the corpus is available for empirical work. Shifting the threshold changes both the pattern of measurement error and the number of

NARRATIVES TO NUMBERS 13
Figure 2. From article-level performance to index-level measurement. Panel A compares
monthly EPU indices constructed from the audit sample using the canonical BOW classi
fier and LLM-based classifiers (Longformer and Llama), under binary versus probabilistic
aggregation and temporal versus random train–test splits; the black line shows the human
audit benchmark and the shaded region marks the held-out test period. Panel B holds the
Longformer classifier fixed and contrasts indices built using probabilistic aggregation and
three threshold rules (Youden, recall-optimized, and precision-optimized) on the same audit
data, again highlighting the held-out test set. Panel C applies these four Longformer-based
constructions to the full historical corpus from 1850–1870, drawn from 28.4 million articles
in the American Stories dataset, illustrating how threshold and aggregation choices change
the amplitude and baseline of the resulting EPU index.

14 11 2025
articles that enter the index. Relaxing the threshold can worsen metrics such as F1 but may be the only way to obtain enough positive observations in data-scarce settings, whereas a stringent, precision-optimized threshold sharpens spikes but can leave too few positives to study heterogeneity across regions, topics, or time. In practice, threshold optimization offers a transparent way to trade off data quality against data quantity, depending on whether the goal is to isolate only the clearest unc-
ertainty episodes or to work with a broader, noisier panel.
While these decisions appear relatively benign in the small audit sample, Figure 2C shows that in large samples they can generate markedly different indices. This is particularly true for the probabilistic index, which can both suppress and inflate the signal. Small background probabilities on largely non-EPU articles accumulate and dilute peaks. Conversely, a broad rise in media volume can inflate the index if average assignment probabilities tick up even slightly, producing spikes that may not b-
e policy driven.7 Looking ahead, probabilistic constructions may become more attractive if future audit designs provide graded or soft labels, such as the perceived strength or certainty of EPU in each article. The model outputs can then be interpreted as predictions of uncertainty intensity rather than only the probability that EP U = 1, in line with approaches that train on calibrated soft labels derived from human uncertainty.8
B. Historical Texts at Scale
Projects such as American Stories apply optical character recognition (OCR) to massive historical archives, converting scans into machine-readable corpora (Dell et al., 2023; Silcock et al., 2024). These initiatives make historical texts searchable and suitable for statistical modeling, allowing researchers to make empirically grounded claims about periods without clean administrative data. A central limitation of OCR is that it leaves digitized text riddled with artifacts and transcription errors-
. Keyword-based methods, which depend on exact string matches, are especially susceptible to misclassifications when characters are dropped, substituted, or split unexpectedly. LLMs, by contrast, can often recover meaning from noisy text by exploiting contextual patterns rather than exact spellings. As a result, more of this newly digitized historical text becomes usable with flexible classifiers. We do so by applying our fine-tuned Longformer (2048) model to more than 360 million newspaper articl-
es from the American Stories project (Dell et al., 2023), classifying articles from 1800-1964 as related to EPU. This extends news-based measurement a full century earlier than existing U.S. indices and, by pooling thousands of newspapers, yields what is, to our knowledge, the first policy uncertainty index for the nineteenth century.
7For example, if baseline per-article probabilities rise from 0.02 to 0.04 during a high-coverage period, the aggregate It can move substantially even without commensurate policy content; calibration and volume weighting help but do not eliminate this mechanism. 8See, for example, Epping et al. (2025), who use calibrated subjective judgments to construct probabilistic (soft) labels for training AI decision aids.

NARRATIVES TO NUMBERS 15
Figure 3A presents the resulting index for 1800-1900 using a precision-optimized threshold to generate binary classifications. This prioritizes labeling only clearly relevant articles as EPU-related and mitigates spurious spikes in the index. We annotate several historical events that could plausibly contribute to the observed spikes. However, this labeling, as in earlier work, remains an inherently ad hoc, ex post exercise of matching spikes to historical events. We provide a visualization of the-
 full historical index and comparisons with the original U.S. index of BBDwhich correlates at 0.33 over the overlapping period (1900-1964)—in Appendix Figures 5 and 6. The complete monthly series is available upon request and will be made public upon publication.
Figure 3. Historical U.S. economic policy uncertainty index, 1800–1900. Panel A shows the
monthly EPU index from OCR’d American Stories newspapers using a fine-tuned Longformer
classifier with a precision-optimized threshold; vertical dashed lines mark major wars, finan
cial crises, and policy episodes associated with spikes in the series. Panel B zooms in on four
episodes—the Embargo Act, the Second Bank, the Morrill Tariff, and the Dingley Tariff
plotting monthly topic counts from a Llama-based classifier (bars, left axis) alongside the
EPU index (line, right axis). Together, the panels show that large nineteenth-century spikes
largely reflect salient, topic-specific policy events.

16 11 2025
Figure 3B illustrates a further application of LLMs to noisy OCR text. Rather than assigning events to spikes purely by hand, we use Llama 3.1 8B Instruction in a zero-shot setting, prompting the model with "Does the article relate to the topic? Topic: {topic} Article: {article}?". For four illustrative events, the resulting topic-specific classifications suggest that, in these cases, the named event dominates the spike and can reasonably be interpreted as the source of elevated policy uncertainty-
. This provides a more systematic complement to ad hoc visual matching.
C. Multilingual Mappings
A second way in which modern text methods “unlock” new data is through the universal nature of language. Just as digitization and OCR bring historical newspaper text into quantitative work, multilingual models allow us to exploit textual data across countries. The policy uncertainty literature already includes many national and cross-country indices, typically built from keyword-based methods adapted or translated to each setting (e.g., Ahir, Bloom and Furceri, 2022; Hong, 2024; Mumtaz and Ruch, 2-
025; Diakonova, Ghirelli and Wu, 2025). These approaches face two related limitations. First, aggregating national indices built from different dictionaries, translations, and outlet choices creates an aggregated series from conceptually heterogeneous inputs, conflating differences in true policy uncertainty with differences in measurement technology. Second, because keyword methods and archives are richest for large, developed economies, most EPU indices have been built for English and other majo-
r languages, leaving smaller languages in developing countries on the sidelines, even when their textual data are the main systematic record of policy debates.
The emergence of multilingual foundation models offers a way to relax both comparability and coverage constraints. Rather than building separate keyword dictionaries and classifiers for each country, one can start from a single model trained on many languages and use it to apply a unified concept of policy uncertainty across them. Initiatives like No Language Left Behind show that highquality translation and representation learning are now possible even for lowresource languages (Costa-Juss et al.-
, 2022). We build on this progress by using Llama 3.1 (8B), a multilingual LLM, as our backbone and fine-tuning exclusively on English data. We then evaluate how this model behaves when ingesting articles in other languages and whether an LLM trained solely on English articles can still produce sensible EPU predictions when applied to content in other languages.
Our multilingual analysis raises two distinct performance questions. The first is mechanical: conditional on holding content fixed, can the model ingest otherwise identical articles written in different languages and produce sensible predictions? The second is substantive: does a classifier trained solely on English articles from U.S. newspapers embody a “universal” representation of EPU? Fully resolving the second question would require labeled EPU datasets from native speakers across many langua-
ges, which we view as an important direction for future work.

NARRATIVES TO NUMBERS 17
Here, we take a first step by examining how our fine-tuned LLM behaves under controlled multilingual perturbations and by making a conceptual exploration of multilingual index construction. The exercise should be read as illustrative rather than definitive; forthcoming LLMs trained on far broader multilingual corpora, will provide an even stronger foundation for the more systematic cross-country work that becomes possible with LLMs.
We isolate the mechanical dimension through a simple experiment. We translate the validation and held-out test sets into 29 target languages using an automated translation pipeline.9 Fine-tuned LLMs then generate EPU predictions for each article in every language. This exercise is not intended to recover the economic meaning of EPU in each country, but rather to stress-test the model’s ability to process non-English inputs. We find substantial shifts in the distribution of predicted probabilities -
across languages (Appendix Figure 10), but these are manageable once we re-optimize decision thresholds on the validation set for each language. Figure 4A reports bootstrapped F1 scores on the held-out test set by language using F1-optimized thresholds. Performance drifts downward in languages less represented in pretraining, such as Tigrinya and Khmer, and is highest for high-resource languages like English and Spanish. Even so, all 29 languages outperform the English BOW baseline applied to the -
original audit articles and deliver 21–46% relative increases in F1.
To move from controlled translations to real-world applications, we construct a provisional Africa-wide EPU index using news stories from Voice of America (VOA), a U.S.-funded international broadcaster that produces outward-facing news in many languages and maintains a publicly accessible online archive (PalenMichel, Kim and Lignos, 2022). We select articles in five target languages and use our multilingual classifier to generate country-level monthly EPU series, which we aggregate to a GDP-weight-
ed African index.10 The corpus contains 132,869 articles, but applying the precision-optimized threshold from the audit setting yields only 21 EPU-related articles, far too few for a meaningful monthly index. We therefore adopt a Youden-optimized threshold, trading some precision for recall so that the index rests on a larger panel of articles.
Figure 4B plots the resulting series and annotates selected events that plausibly drive policy uncertainty across the continent. Spikes around these dates coincide with major regional and global developments, but the event assignments are ad hoc and the index may be influenced disproportionately by countries that receive more VOA coverage. Moreover, even when reported in local languages, VOA articles reflect the perspective of an external Western outlet, so the series is best interpreted as captur-
ing how African policy developments are framed in that outlet rather than as a measure of domestic uncertainty.
9Implemented via the deep-translator Python package with the Google Cloud Translation (Google Translate) backend. 10We focus on widely spoken languages that can be tied to countries with sufficient GDP data: Nigeria, Rwanda, Zimbabwe, Somalia, and Ethiopia.

18 11 2025
Figure 4. Multilingual performance and cross-country EPU indices. Panel A plots boot
strapped F1 scores for our fine-tuned Llama 3.1 classifier on translations of the audit set
into 29 languages, using language-specific F1-optimized thresholds; the vertical dashed line
shows the English BOW baseline, the red bar is English, and green-labeled bars mark lan
guages used to construct the indices in Panels B and C. Panel B presents a GDP-weighted
Africa EPU index (2013–2024) based on Voice of America articles in five African languages
with a recall-oriented threshold, while Panel C shows a Bangladesh EPU index (2016–2024)
constructed from Bangla articles in nine local outlets with a precision-optimized thresh
old. Annotated events highlight salient policy and macroeconomic episodes. Together, the
panels suggest that a single multilingual LLM can support informative EPU measures across
diverse languages and settings.

NARRATIVES TO NUMBERS 19
To provide a cleaner, higher-volume example based on domestic media, we also construct an index using more than two million articles from nine local news outlets in Bangladesh (Saad et al., 2024). Applying the same classifier directly to Bangla-language text yields the Bangladesh EPU series in Figure 4C. Given abundant data, we use a precision-optimized threshold, prioritizing a cleaner set of peak assignments over expanding the pool of positive articles. The resulting series passes basic face-val-
idity checks, with spikes around salient domestic policy and macroeconomic events, but we treat it as an illustration of the multilingual machinery rather than a fully validated national index.
Taken together, Figure 4B and 4C show how a single multilingual classifier trained only on English articles can be deployed off the shelf to construct candidate EPU indices in both data-scarce and data-rich environments. In Africa, a balanced threshold extracts a usable signal from relatively thin coverage in multiple local languages; in Bangladesh, abundant local news supports a precisionoriented threshold with sharp, interpretable spikes. These indices remain exploratory, but they illustrate how-
 multilingual LLMs can lower the fixed costs of extending news-based uncertainty measures to new countries and low-resource languages.
IV. Conclusion
This paper asks what economists gain by replacing rudimentary text classifiers with explicitly estimated, AI-based data-generating processes for unstructured text. Using the Baker, Bloom, and Davis (2016) framework as a case study, we show that fine-tuned large language models (LLMs) deliver better article-level performance than the canonical keyword approach, that these gains translate into materially different EPU indices, and that the same tools unlock new sources of historical and multilingual-
 text.
At the micro level, upgrading the classifier matters. Holding the human labels and corpus fixed, LLMs substantially improve performance relative to the original BOW classifier and a strong SVM benchmark, and their probabilistic scores track auditor certainty in intuitive ways. These gains persist when we restrict attention to headlines or short text segments and extend to multi-label settings, suggesting that modern text models extract more relevant semantic information from the same text. Concept-
ually, the latent “policy uncertainty” entering an index is then inferred with fewer and less systematic mistakes.
Embedding these models in the standard EPU pipeline shows how improved classification propagates into the indices themselves. LLM-based series track the human audit benchmark more closely than the original BBD index. They highlight threshold and aggregation choices as substantive design parameters and help mitigate nonclassical, time-varying measurement error in downstream estimates. In practice, the same article-level probabilities can support high-precision indices emphasizing clearly uncertain -
episodes, high-recall indices that prioritize cover

20 11 2025
age, or probabilistic constructions that smooth across individual classifications. Our results suggest that empirical work using EPU should treat these indexconstruction choices the way it treats other modeling assumptions: as objects to be justified, varied, and reported.
At the macro level, modern text methods expand what can be measured. Because LLMs rely on contextual patterns rather than exact strings, they remain effective in noisy nineteenth-century U.S. newspapers where OCR errors undermine dictionary methods, allowing us to extend news-based policy uncertainty series back more than a century. In a complementary direction, a single multilingual backbone fine-tuned only on English labels produces sensible EPU predictions in translated text and supports provis-
ional indices based on Voice of America coverage in African languages and local newspapers in Bangladesh. These exercises are deliberately illustrative, but they show that a unified modeling framework can be ported across periods, countries, and languages without hand-crafting dictionaries for each setting.
Our analysis has limits. It is anchored in a single audit corpus, a small subset of model architectures, and a few historical and multilingual applications; it does not attempt to re-estimate the large empirical literature that uses EPU as a regressor, instrument, or calibration target. We view those tasks, along with building richer labeled datasets in multiple languages and incorporating classification uncertainty more formally into econometric designs, as natural next steps.
The central lesson from our analysis is that LLMs should be treated as estimable components of the data-generating process. They offer a general-purpose way to turn unstructured text into data, and should be integrated into empirical work as measured, testable objects rather than ad hoc utilities. Economists should deploy them broadly across text-as-data applications, vet their performance and robustness as carefully as any other statistical tool, and treat the design components that affect downst-
ream analysis–probability thresholds, aggregation schemes, and model architectures–as substantive assumptions to be justified and reported. This perspective allows us to bring more of the narrative record into quantitative analysis, with clearer discipline on how narratives are mapped into numbers and how those mapping choices shape our inferences about the world.

NARRATIVES TO NUMBERS 21
REFERENCES
Ahir, Hites, Nicholas Bloom, and Davide Furceri. 2022. “The World Uncertainty Index.” National Bureau of Economic Research Working Paper Series, No. 29763.
Akata, Elif, Lion Schulz, Julian Coda-Forno, Seong Joon Oh, Matthias Bethge, and Eric Schulz. 2025. “Playing repeated games with large language models.” Nature human behaviour, 9(7): 1380–1390.
Athey, Susan, Herman Brunborg, Tianyu Du, Ayush Kanodia, and Keyon Vafa. 2024. “LABOR-LLM: Language-Based Occupational Representations with Large Language Models.”
Audrino, Francesco, Jessica Maly, and Simon Stalder. 2024. “Quantifying Uncertainty: A New Era of Measurement through Large Language Models.” Swiss Finance Institute Research Paper, , (24-68).
Azqueta-Gavaldn, Andrs, Dominik Hirschbhl, Luca Onorante, and Lorena Saiz. 2023. “Sources of Economic Policy Uncertainty in the euro area.” European economic review, 152: 104373.
Baker, Scott R., Nicholas Bloom, and Steven J. Davis. 2016. “MEASURING ECONOMIC POLICY UNCERTAINTY.” The Quarterly journal of economics, 131(4): 1593–1636.
Beltagy, Iz, Matthew E. Peters, and Arman Cohan. 2020. “Longformer: The Long-Document Transformer.” arXiv.org.
Bender, Emily M., and Alexander Koller. 2020. “Climbing towards NLU: On Meaning, Form, and Understanding in the Age of Data.” Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, 51855198. Association for Computational Linguistics.
Bender, Emily M., Timnit Gebru, Angelina McMillan-Major, and Shmargaret Shmitchell. 2021. “On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? ?”
Benguria, Felipe, Jaerim Choi, Deborah L. Swenson, and Mingzhi Xu. 2022. “Anxiety or pain? The impact of tariffs and uncertainty on Chinese firms in the trade war.” Journal of international economics, 137: 103608. (Jimmy).
Brown, Tom B., Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Girish Sastry, Amanda Askell, Sandhini Agarwal, Ariel HerbertVoss, Gretchen Krueger, Tom Henighan, Rewon Child, Aditya Ramesh, Daniel M. Ziegler, Jeffrey Wu, Clemens Winter, Christopher Hesse, Mark Chen, Eric Sigler, Mateusz Litwin, Scott Gray,

22 11 2025
Benjamin Chess, Jack Clark, Christopher Berner, Sam McCandlish, Alec Radford, Ilya Sutskever, and Dario Amodei. 2020. “Language Models are Few-Shot Learners.”
Caldara, Dario, and Matteo Iacoviello. 2022. “Measuring Geopolitical Risk.” The American economic review, 112(4): 1194–1225.
Carlson, Jacob, and Melissa Dell. 2025. “A Unifying Framework for Robust and Efficient Inference with Unstructured Data.”
Charemza, Wojciech, Svetlana Makarova, and Krzysztof Rybiski. 2022. “Economic uncertainty and natural language processing; The case of Russia.” Economic analysis and policy, 73: 546–562.
Costa-Juss, Marta R, James Cross, Onur elebi, Maha Elbayad, Kenneth Heafield, Kevin Heffernan, Elahe Kalbassi, Janice Lam, Daniel Licht, and Jean Maillard. 2022. “No language left behind: Scaling humancentered machine translation.” arXiv preprint arXiv:2207.04672.
Cunningham, Hoagy, Aidan Ewart, Logan Riggs, Robert Huben, and Lee Sharkey. 2023. “Sparse autoencoders find highly interpretable features in language models.” arXiv preprint arXiv:2309.08600.
Dell, Melissa, Jacob Carlson, Tom Bryan, Emily Silcock, Abhishek Arora, Zejiang Shen, Luca D’Amico-Wong, Quan Le, Pablo Querubin, and Leander Heldring. 2023. “American Stories: A Large-Scale Structured Text Dataset of Historical U.S. Newspapers.”
Devlin, Jacob, Chang Ming-Wei, Kenton Lee, and Kristina Toutanova. 2019. “BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding.” arXiv.org.
Diakonova, Marina, Corinna Ghirelli, and Juan Quinez Wu. 2025. “Economic Policy Uncertainty in Central America and the Dominican Republic.” Latin American journal of central banking, 100166.
Dunefsky, Jacob, Philippe Chlenski, and Neel Nanda. 2024. “Transcoders find interpretable LLM feature circuits.”
Epping, Gunnar P., Andrew Caplin, Erik Duhaime, William Holmes, Daniel Martin, and Jennifer S. Trueblood. 2025. “Harnessing Human Uncertainty to Train More Accurate and Aligned AI Systems.” PsyArXiv.
Gentzkow, Matthew, and Jesse M. Shapiro. 2010. “What Drives Media Slant? Evidence From U.S. Daily Newspapers.” Econometrica, 78(1): 35–71.
Gentzkow, Matthew, Bryan Kelly, and Matt Taddy. 2019. “Text as Data.” Journal of economic literature, 57(3): 535–574.

NARRATIVES TO NUMBERS 23
Gilardi, Fabrizio, Meysam Alizadeh, and Mal Kubli. 2023. “ChatGPT outperforms crowd workers for text-annotation tasks.” Proceedings of the National Academy of Sciences - PNAS, 120(30): e2305016120.
Hong, Gee Hee. 2024. “The Economic Impact of Fiscal Policy Uncertainty: Evidence from a New Cross-Country Database.” IMF working paper, 2024(209): 1.
Horton, John J. 2023. “Large Language Models as Simulated Economic Agents: What Can We Learn from Homo Silicus?” National Bureau of Economic Research Working Paper Series, No. 31122. Author contact info: John J. Horton Massachusetts Institute of Technology Sloan School of Management 100 Main St Cambridge, MA 02142 E-Mail: john.joseph.horton@gmail.com.
Ito, Arata, Masahiro Sato, and Rui Ota. 2025. “A novel content-based approach to measuring monetary policy uncertainty using fine-tuned LLMs.” Finance Research Letters, 75: 106832.
Jahan-Parvar, Mohammad R., Yuriy Kitsul, Jamil Rahman, and Beth Anne Wilson. 2024. “Foreign economic policy uncertainty and U.S. equity returns.” International finance discussion papers, , (1401): 1–40.
Keith, Katherine A., Christoph Teichmann, Brendan O’Connor, and Edgar Meij. 2020. “Uncertainty over Uncertainty: Investigating the Assumptions, Annotations, and Text Measurements of Economic Policy Uncertainty.” arXiv.org.
Kong, Qunxi, Rongrong Li, Ziqi Wang, and Dan Peng. 2022. “Economic policy uncertainty and firm investment decisions: Dilemma or opportunity?” International review of financial analysis, 83: 102301.
Lin, Stephanie, Jacob Hilton, and Owain Evans. 2022. “TruthfulQA: Measuring How Models Mimic Human Falsehoods.”
Llama Team, AI @ Meta. 2024. “The Llama 3 Herd of Models.”
Loughran, T. I. M., and Bill McDonald. 2011. “When Is a Liability Not a Liability? Textual Analysis, Dictionaries, and 10-Ks.” The Journal of finance (New York), 66(1): 35–65.
Ludwig, Jens, Sendhil Mullainathan, and Ashesh Rambachan. 2025. “Large Language Models: An Applied Econometric Framework.” National Bureau of Economic Research Working Paper 33344.
Lundberg, Scott M., and Su-In Lee. 2017. “A unified approach to interpreting model predictions.”
Manning, Benjamin S., Research National Bureau of Economic, Kehang Zhu, and John J. Horton. 2024. Automated Social Science: Language

24 11 2025
Models as Scientist and Subjects. NBER working paper series no. w32381, Cambridge, Mass:National Bureau of Economic Research.
Mumtaz, Haroon, and Franz Ulrich Ruch. 2025. “Policy Uncertainty and Aggregate Fluctuations: Evidence from Emerging and Developed Economies.” The World Bank Economic Review.
Noailly, Joelle, Laura M. Nowzohour, and Matthias van den Heuvel. 2022. “Does Environmental Policy Uncertainty Hinder Investments Towards a Low-Carbon Economy?”
Palen-Michel, Chester, June Kim, and Constantine Lignos. 2022. “Multilingual open text release 1: Public domain news in 44 languages.” arXiv preprint arXiv:2201.05609.
Pedregosa, F., G. Varoquaux, A. Gramfort, V. Michel, B. Thirion, O. Grisel, M. Blondel, P. Prettenhofer, R. Weiss, V. Dubourg, J. Vanderplas, A. Passos, D. Cournapeau, M. Brucher, M. Perrot, and E. Duchesnay. 2011. “Scikit-learn: Machine Learning in Python.” Journal of Machine Learning Research, 12: 2825–2830.
Saad, Asif Mohammed, Umme Niraj Mahi, Md Shahidul Salim, and Sk Imran Hossain. 2024. “Bangla news article dataset.” Data in Brief, 57: 110874.
Shapira, Natalie, Mosh Levy, Alavi Seyed Hossein, Xuhui Zhou, Yejin Choi, Yoav Goldberg, Maarten Sap, and Vered Shwartz. 2023. “Clever Hans or Neural Theory of Mind? Stress Testing Social Reasoning in Large Language Models.”
Silcock, Emily, Abhishek Arora, Luca D’Amico-Wong, and Melissa Dell. 2024. “Newswire: A Large-Scale Structured Database of a Century of Historical News.”
Tetlock, Paul C. 2007. “Giving Content to Investor Sentiment: The Role of Media in the Stock Market.” The Journal of finance (New York), 62(3): 11391168.
Tobback, Ellen, Hans Naudts, Walter Daelemans, Enric Junqu de Fortuny, and David Martens. 2018. “Belgian economic policy uncertainty index: Improvement through text mining.” International journal of forecasting, 34(2): 355–365.
Touvron, Hugo, Thibaut Lavril, Gautier Izacard, Xavier Martinet, Marie-Anne Lachaux, Timothe Lacroix, Baptiste Rozire, Naman Goyal, Eric Hambro, Faisal Azhar, Aurelien Rodriguez, Armand Joulin, Edouard Grave, and Guillaume Lample. 2023. “LLaMA: Open and Efficient Foundation Language Models.”

NARRATIVES TO NUMBERS 25
Trust, Paul, Ahmed Zahran, and Rosane Minghim. 2023. “Understanding the influence of news on society decision making: application to economic policy uncertainty.” Neural computing & applications, 35(20): 14929–14945.
Ullman, Tomer. 2023. “Large Language Models Fail on Trivial Alterations to Theory-of-Mind Tasks.”
Vafa, Keyon, Emil Palikot, Tianyu Du, Ayush Kanodia, Susan Athey, and David M. Blei. 2022. “CAREER: A Foundation Model for Labor Sequence Data.”
Vaswani, Ashish, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, and Illia Polosukhin. 2023. “Attention Is All You Need.”
Weizenbaum, Joseph. 1966. “ELIZAa computer program for the study of natural language communication between man and machine.” Commun. ACM, 9(1): 3645.
Youden, W. J. 1950. “Index for rating diagnostic tests.” Cancer, 3(1): 32–35.
Zhao, Tony Z., Eric Wallace, Shi Feng, Dan Klein, Sameer Singh, M. Meila, and T. Zhang. 2021. “Calibrate Before Use: Improving Few-Shot Performance of Language Models.” Vol. 139. JMLR-JOURNAL MACHINE LEARNING RESEARCH.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:47.191Z
- **Text Length:** 60914 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 25 of 25
