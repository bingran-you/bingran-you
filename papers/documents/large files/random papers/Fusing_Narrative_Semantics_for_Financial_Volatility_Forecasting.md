# PDF Document: Kong et al. - 2025 - Fusing Narrative Semantics for Financial Volatility Forecasting.pdf

**File Path:** Kong et al. - 2025 - Fusing Narrative Semantics for Financial Volatility Forecasting.pdf

**Processed Date:** 2026-02-10T18:17:11.863Z

**File Size:** 1235.98 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3522

**Title:** Fusing Narrative Semantics for Financial Volatility Forecasting

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Fusing Narrative Semantics for Financial Volatility Forecasting
Yaxuan Kong∗
University of Oxford
United Kingdom
yaxuan.kong@eng.ox.ac.uk
Yoontae Hwang∗
Pusan National University
Republic of Korea
yoontae.hwang@pusan.ac.kr
Marcus Kaiser
Deutsche Bank AG
London, United Kingdom
marcus.kaiser@db.com
Chris Vryonides
Deutsche Bank AG
London, United Kingdom
chris.vryonides@db.com
Roel Oomen
Deutsche Bank AG
London, United Kingdom
roel.oomen@db.com
Stefan Zohren
University of Oxford
United Kingdom
stefan.zohren@eng.ox.ac.uk
Abstract
We introduce M2VN: Multi-Modal Volatility Network, a novel deep
learning-based framework for financial volatility forecasting that
unifies time series features with unstructured news data. M2VN
leverages the representational power of deep neural networks to
address two key challenges in this domain: (i) aligning and fus
ing heterogeneous data modalities, numerical financial data and
textual information, and (ii) mitigating look-ahead bias that can
undermine the validity of financial models. To achieve this, M2VN
combines open-source market features with news embeddings gen
erated by Time Machine GPT, a recently introduced point-in-time
LLM, ensuring temporal integrity. An auxiliary alignment loss is in
troduced to enhance the integration of structured and unstructured
data within the deep learning architecture. Extensive experiments
demonstrate that M2VN consistently outperforms existing baselines,
underscoring its practical value for risk management and financial
decision-making in dynamic markets.
CCS Concepts
• Computing methodologies → Artificial intelligence.
Keywords
Multimodal fusion, Temporal alignment, Look-ahead bias mitiga
tion, Heterogeneous data integration, Representation learning
ACM Reference Format:
Yaxuan Kong, Yoontae Hwang, Marcus Kaiser, Chris Vryonides, Roel Oomen,
and Stefan Zohren. 2025. Fusing Narrative Semantics for Financial Volatility
Forecasting. In 6th ACM International Conference on AI in Finance (ICAIF ’25), November 15–18, 2025, Singapore, Singapore. ACM, New York, NY, USA,
9 pages. https://doi.org/10.1145/3768292.3771256
Disclaimer
The opinions expressed in this article are those of the authors
alone and do not necessarily represent the views of Deutsche Bank
AG. This article is not intended to be comprehensive, nor does it
constitute financial or other advice.
∗Both authors contributed equally to this research.
This work is licensed under a Creative Commons Attribution 4.0 International License.
ICAIF ’25, Singapore, Singapore
© 2025 Copyright held by the owner/author(s). ACM ISBN 979-8-4007-2220-2/2025/11 https://doi.org/10.1145/3768292.3771256
Fusing Narrative Semantics for Financial Volatility Forecasting
I know the information in the past! I also know the information in the future!!
Textual
Information Time Series
Look-ahead Bias
Textual Information Time Series
Two Different Modalities
Human: I’m only going to feed your knowledge up to a certain point in time. Time Machine GPT: Understood. No insider trading on future data, I promise!
Alignment & Modality Fusion
M2VN: Multi-Modal Volatility Network
Figure 1: Illustration of two challenges: data fusion across modalities and mitigation of look-ahead bias.
1 Introduction
Forecasting financial market volatility is a critical task in quantita
tive finance, with broad applications in risk management, derivative
pricing, and portfolio optimization [1, 3]. Traditionally, volatility
forecasting methods have relied primarily on features extracted
directly from time series data, such as historical prices, returns, and
various statistical measures [8]. However, recent advances in natu
ral language processing (NLP) and the emergence of large language
models (LLMs) have opened new possibilities for incorporating
external textual information such as news articles into predictive
models [22, 23]. While text-enhanced time series forecasting (TSF)
has been explored in related domains [18, 20, 25], research that
specifically leverages LLM-derived textual features for volatility
forecasting remains limited.
Most existing studies incorporate textual data through word
embeddings and use linear or NLP models for realized volatility
(RV) forecasting [5, 29, 30]. In contrast, the integration of rich,
context-aware information extracted by LLMs with deep learning
based time series models in a unified framework is still largely
underexplored. Deep learning models, with their ability to capture
complex, nonlinear relationships and to integrate heterogeneous
data sources, are particularly well-suited for modeling the intricate
dynamics between financial time series and textual information.
Nevertheless, progress in this area has been relatively limited to
date.
This limited exploration can largely be attributed to several in
herent challenges unique to the intersection of financial time series
and textual data (as illustrated in Figure 1). Firstly, financial news
and time series data represent distinct modalities, making their
arXiv:2510.20699v1 [q-fin.CP] 23 Oct 2025

ICAIF ’25, November 15–18, 2025, Singapore, Singapore Yaxuan Kong, Yoontae Hwang, Marcus Kaiser, Chris Vryonides, Roel Oomen, and Stefan Zohren
alignment and integration non-trivial. Specifically, learning how to
effectively embed and fuse the intersection of textual information
and numerical time series data into a unified embedding space is
a significant challenge. Secondly, utilizing news information with
LLMs for financial prediction tasks often introduces look-ahead
bias, whereby models inadvertently incorporate future knowledge,
compromising their applicability and reliability.
To address these challenges, we propose M2VN: Multi-Modal
Volatility Network. M2VN innovatively combines traditional time
series features - derived from open-sourced end-of-day price infor
mation (open, high, low, close, and volume) - with news data, where
news content is embedded using Time Machine GPT (TiMaGPT)
[15], a series of point-in-time language models specifically designed
to mitigate look-ahead bias. To effectively align these two modal
ities, we introduce an auxiliary alignment loss function, which
significantly enhances the model’s ability to coherently fuse textual
and time series information within a unified framework. Through
this design, M2VN can leverage both structured financial data and
unstructured textual data to improve volatility forecasting perfor
mance. We validate the effectiveness of M2VN through extensive
experiments, demonstrating its superior performance compared to
existing baselines.
In summary, our paper makes the following key contributions:
(1) We propose M2VN: Multi-Modal Volatility Network, a novel
framework to align and fuse news embeddings with time
series data for the task of financial volatility forecasting.
(2) We assess the incremental value of incorporating rich news
articles for RV forecasting, providing quantitative evidence
for the benefits of augmenting time series models with con
textual textual information.
(3) To the best of our knowledge, this is the first work to apply
TiMaGPT [15] for mitigating look-ahead bias in financial
volatility forecasting with LLMs.
2 Related Works
We review related works on financial volatility forecasting and
text-enhanced TSF.
2.1 Financial Volatility Forecasting
This section first reviews the main models used in volatility fore
casting, then discusses recent advances in incorporating exogenous
variables to enhance forecast accuracy.
Typical Volatility Forecasting Models. Traditional volatil
ity forecasting has been dominated GARCH [2, 16] models, which
rely on daily squared returns to capture the dynamics of financial
time series. While straightforward, these models are often ham
pered by the noisiness of daily return-based volatility proxies. The
emergence of RV models, built on high-frequency intraday data,
significantly improved predictive accuracy, especially with the in
troduction of the Heterogeneous Auto-Regressive (HAR) model
[6, 11, 13]. The HAR framework models current volatility using
lagged daily, weekly, and monthly volatility, capturing volatility
persistence in a simple linear structure [8]. Despite the advantages
of high-frequency data, its limited accessibility and higher cost
have led researchers to explore range-based estimators — such as
Garman-Klass [17], Parkinson [28], and Rogers-Satchell [31] — that
utilize daily open, high, low, and close prices. Recent empirical
work [26] demonstrates that, while high-frequency-based models
outperform low-frequency ones for very short-term forecasts, the
difference in forecast accuracy becomes negligible for longer hori
zons (e.g., one month), making low-frequency approaches both
practical and effective in real-world settings.
Exogenous Variables in Volatility Forecasting. To further
enhance volatility forecasting performance, recent studies have
introduced exogenous variables into HAR models, leading to the
HAR-X framework [8, 13]. These exogenous predictors typically
include implied volatility indices, economic policy and equity mar
ket uncertainty indices, geopolitical risk measures, macroeconomic
indicators, and asset-specific momentum. By introducing external
information that is not captured by historical volatility alone, these
additional features — many of which are available at daily frequen
cies — have been shown to enhance out-of-sample forecast accuracy
[24]. Remarkably, several studies find that low-frequency HAR-X
models can, in some cases, rival the forecasting performance of
traditional high-frequency approaches [8]. Nevertheless, the litera
ture [7, 9] remains primarily focused on structured numerical data
or linear models, with relatively few efforts devoted to combining
unstructured text sources with these related time series features
[29, 30]. The question of how to effectively align and fuse these
disparate modalities remains largely unexplored, motivating the
need for systematic research into multi-modal volatility forecasting.
2.2 Text-Enhanced Time Series Forecasting
This section reviews recent advances in integrating textual infor
mation into TSF, with a focus on applications of LLMs and the
challenge of look-ahead bias in financial contexts.
LLMs for TSF. Effectively integrating external textual informa
tion has been shown to enhance TSF, for instance by correlating
financial news sentiment with market movements [34]. More re
cently, research has shown that LLMs can significantly advance
this approach. For instance, [19, 40] demonstrated the versatility
of LLMs across a range of time series tasks by employing a GPT-2
backbone capable of capturing temporal dependencies. Similarly,
[4, 18] highlighted the zero-shot forecasting capabilities of pre
trained LLMs, showing that appropriate tokenization allows these
models to implicitly learn temporal patterns without the need for
explicit task-specific training. Furthermore, [20] proposed a repro
gramming approach that converts time series data into formats
more interpretable by LLMs, achieving state-of-the-art forecast
ing results. Their patch reprogramming method aligns time series
patch embeddings with natural language representations, enhanc
ing the model’s ability to understand and reason about time series
data. Collectively, these studies underscore the promise of LLMs in
advancing the field of TSF.
Look-Ahead Bias in Financial Forecasting. Despite their suc
cess in general domains, the application of LLM-based methods
to financial time series is complicated by the risk of look-ahead
bias. Look-ahead bias arises when models inadvertently access
future information during training or evaluation, leading to un
realistically optimistic results and compromising the reliability of
real-world forecasts [32]. To address this challenge, [21] propose

Fusing Narrative Semantics for Financial Volatility Forecasting ICAIF ’25, November 15–18, 2025, Singapore, Singapore
using anonymized data to prevent LLMs from exploiting memo
rized future information; however, this approach may restrict the
richness and specificity of textual data available to the model, po
tentially limiting its forecasting performance. To more robustly
mitigate look-ahead bias while preserving the utility of external
information, [15] introduced TiMaGPT, a series of point-in-time
LLMs specifically trained to maintain strict temporal integrity. By
ensuring that models remain uninformed about future events or
language changes during training, TiMaGPT provides a robust
foundation for reliable TSF in dynamic financial contexts.
3 Methodology
We propose M2VN: Multi-Modal Volatility Network, which is graph
ically illustrated in Figure 2.
3.1 Problem Formulation
This subsection presents the formal problem formulation for multi
modal volatility forecasting and establishes the mathematical no
tation employed throughout our methodological exposition. We
frame the task as a supervised, sequence-to-one learning problem,
where the objective is to predict a future financial volatility measure
by leveraging a historical look-back window of heterogeneous data
streams. Our temporal domain consists of discrete trading days,
indexed by t = 1, . . . , T . The core task is, at the close of day t, to
predict the realized volatility for a future day t + H , where H ≥ 1 is
the prediction horizon. To achieve this, our model is provided with
data spanning a look-back window of T preceding days, covering
the interval [t − T + 1, t]. The input at each time t is a multi-modal
tuple Zt = (Xt , Nt , Mt ) ∈ X, where X is the input space. Each
component of this tuple represents a distinct data modality.
First, Xt = (xt −T +1, . . . , xt ) ∈ RT ×dx represents the quantita
tive market state. Each feature vector xτ ∈ Rdx is a concatenation
of indicators designed to capture different facets of market dynam
ics, including historical volatility, price trends, and aggregate news
information. Its composition is formally expressed as:
x
τ = [ RV (d )
τ , RV (w)
τ , RV (m)
τ
| {z }
Realized Volatility
, M (w)
τ , M (m)
τ , M (q)
τ | {z }
Momentum
,
V (d )
τ |{z}
Volume
, VIX(d )
τ | {z }
VIX
, C (d )
τ |{z}
News Count
]⊤
(1)
Here, RV (d )
τ , RV (w)
τ , and RV (m)
τ denote the daily, weekly (5-day
average), and monthly (22-day average) RVs observed up to day τ.
The terms M (w)
τ , M (m)
τ , and M (q)
τ are weekly, monthly, and quarterly
momentum indicators. The trading volume is V (d)
τ . Finally, VIX(d )
τ
is the value of the VIX index, and C (d)
τ is the count of relevant news
articles for day τ.
Second, Nt = (nt −T +1, . . . , nt ) ∈ RT ×dn constitutes the qualita
tive information state. Each vector nτ ∈ Rdn is a dense embed
ding derived from the titles and bodies of news articles published
on day τ, generated by a pre-trained transformer-based language
model. The dimensionality dn corresponds to the output dimension
of this language model. Finally, Mt = (mt −T +1, . . . , mt ) ∈ RT ×dm
contains temporal markers, where each mτ ∈ Rdm encodes
calendar-related information (e.g., day of the week, month of the
year) that captures known market seasonality. The prediction tar
get, or ground truth, is a robust volatility estimator for day t + H ,
denoted as yt+H ∈ Y ⊆ R≥0. Following established financial liter
ature, we define this target as an aggregation of multiple volatil
ity estimators to yield a more stable and comprehensive measure.
Specifically, let V P
τ , V GK
τ , and V RS
τ represent the Parkinson [28],
Garman-Klass [17], and Rogers-Satchell [31] volatility estimators
for day τ, respectively. The target variable is then constructed as
yt+H = fagg (V P
t +H
, V GK
t +H
, V RS
t+H ), where fagg (·) is a weighted averag
ing function [8].
Our model is a learnable function Φ with parameters θ , which
maps an input instance Zt from the input space X to a volatility
prediction yˆt+H ∈ Y. The learning process is governed by a dual
objective function, designed to not only ensure predictive accuracy
but also to foster a meaningful semantic alignment between the
quantitative and qualitative data streams. The primary objective
is the prediction loss, which we define using the standard Mean
Squared Error (MSE) to penalize deviations between the predicted
and actual volatility:
L
pred (θ ) = E(Zt ,yt+H ) [(Φ(Zt ; θ ) − yt+H )2] (2)
To enhance the model’s ability to fuse information, we introduce
an auxiliary alignment loss, Lalign, based on the principles of
contrastive learning. This objective encourages the intermediate
representations of the market state and the news state for the same
timestep within the look-back window to be similar, while being
dissimilar to representations from other timesteps (cf.[25]). Let
h
quant
τ and hqual
τ be the latent representations for the quantitative
and qualitative modalities at timestep τ ∈ [t − T + 1, t], respec
tively, derived from intermediate layers of Φ. The alignment loss
is formulated using an InfoNCE objective, which minimizes the
cross-entropy between aligned pairs over a set of negative samples.
The final optimization problem is thus to find the parameters θ★
that minimize a weighted sum of these two objectives:
θ★ = arg min θ
L (θ ) where L (θ ) = Lpred (θ ) + λ Lalign (θ ) (3)
Here, λ > 0 is a scalar hyperparameter that controls the relative im
portance of the alignment task. This multi-task learning paradigm
is crucial for guiding the model to discover the complex, non-linear
interactions between market dynamics and the narrative content
of financial news.
The notations for the input data (Xt , Nt , Mt ), the model function
(Φ), its parameters (θ ), and the dual-objective function (Lpred, Lalign)
will be used consistently in the following sections. We will now
proceed to detail the specific architectural components of our pro
posed model, Φ, explaining how its design is tailored to effectively
address the learning problem defined herein.
3.2 M2VN: Multi-Modal Volatility Network
Forecasting the aggregated RV yt+H from the heterogeneous history
Z
t = (Xt , Nt , Mt ) requires a representation that is simultaneously
faithful to the statistical regularities of price trajectories, sensi
tive to the semantic content of financial narratives, and aware of
calendar-driven seasonality. The proposed architecture therefore
processes the three modalities in a tightly coupled pipeline whose
transformations preserve temporal coherence and promote cross
modal alignment, ultimately producing a single forecast yˆt+H ∈ Y.

ICAIF ’25, November 15–18, 2025, Singapore, Singapore Yaxuan Kong, Yoontae Hwang, Marcus Kaiser, Chris Vryonides, Roel Oomen, and Stefan Zohren
Input Data
Jan 19
Time Series Price Data
News Articles
Jan 19 Jan 30 Feb 02
Temporal Markers
Feb 03
dd
Alignment Loss (InfoNCE)
Time Series Backbone Model (TimesNet)
Gated cross-modal fusion layer news embedding
Pre-trained LLM Embedder (Time Machine GPT)
Projection
Layer
Projection
Layer
price embedding Volatility Projection Head
Prediction Loss
Some Analysts
Figure 2: The architecture of M2VN, a multi-modal volatility network for financial volatility forecasting.
Formally, let Xt ∈ RT ×dx , Nt ∈ RT ×dn and Mt ∈ RT ×dm denote
the input tensors for a given prediction time t. The network is
parametrized by θ and is organized into exactly three interacting
components that operate sequentially on these inputs.
Multi-Modal Feature Encoder. The first component trans
forms each modality into a common latent space of width d while
retaining the full temporal resolution T . Concretely, a learnable map
E
price : RT ×dx → RT ×d embeds quantitative signals, using affine
normalization followed by a periodic-spectral operator that decom
poses the trajectory into its dominant frequency channels. In par
allel, a projection ELLM
news : RT ×dn → RT ×d distills the transformer
derived news embeddings; its weights are shared across dates so
that semantic drift, rather than scale variance, drives the dynamics.
Finally, a harmonic embedding Etime : RT ×dm → RT ×d encodes
calendar features [37, 39]. The encoder outputs three sequences
h
price
1:T = Eprice (Xt ) hnews
1:T = ELLM
news (Nt ) htime
1:T = Etime (Mt ) (4)
and each belonging to (Rd )T . For brevity, we denote their joint
concatenation as h1:T ∈ RT ×3d . This tensor constitutes the raw
material on which temporal reasoning is performed.
Note that employing a modern language model such as GPT-4.1
to embed the news stream Nt can spuriously inflate forecasting ac
curacy, because the model’s training corpus may already contain fu
ture articles or hindsight knowledge. To neutralize this look-ahead
bias, we adopt TiMaGPT [15]. For every date τ, the embedding
n
τ is generated with TiMaGPT weights whose knowledge cut-off
has been rolled back to exactly one year before τ. In practice, we
advance the cutoff year-by-year during training, freeze the corre
sponding parameters, and feed the day’s news content — obtained
by concatenating all articles published on τ — through this frozen
model to obtain a temporally faithful vector representation.
Latent Dynamics Module. The second component models long
range dependencies and cross-modal interactions over the horizon
T + H without resorting to causal truncation [36]. Let h(0)
1:T = h1:T .
A stack of L identical blocks iteratively refines these embeddings,
each block Tl : (RT ×3d ) → (RT ×3d ) being defined as
T
l (h) = h + Gl (Cl (h)), (5)
where Cl is a spectral–convolution operator that exploits the dis
crete Fourier transform to isolate the k most energetic periods of the
price trajectory before applying an inception-style two-dimensional
convolution across the period–channel grid.
A key difficulty in volatility forecasting is teasing apart informa
tive, low-frequency rhythms (e.g. weekly or monthly cycles) from
high-frequency stochastic noise. To address this, proceeds in two
steps (See [36]):
• Spectral filtering. Transform the latent trajectory to the Fourier
domain and keep the modes with the highest energy, isolating
the most structurally significant components.
• Inception-style 2D convolution. Apply multi-scale kernels
to the filtered signal to capture residual cross-temporal interac
tions.
The choice to select the top energy modes in the backbone is a
principled decision, not a heuristic. As proven in Proposition 3.1,
this yields the best k-term approximation that minimizes the Frobe
nius reconstruction error. This approach is a well-established prin
ciple in fields such as Fourier analysis, nonlinear approximation,
and compressed sensing, where it has been shown that selecting the
k largest transform coefficients provides an optimal approximation
[10, 12]. Consequently, this method imposes a strong inductive bias
that encourages the network to focus on robust, periodic structures
rather than overfitting to incidental noise. This built-in denoising
mechanism can materially improve generalization and stability.
It is instructive to provide the following result, the proof of which
follows from standard results [10, 12]:
Proposition 3.1 (Best k-term Fourier approximation). Let
h = (h0, . . . , hT −1) ∈ (Cd )T and denote by hb = F h its unitary discrete Fourier transform
hbω = 1
√
T
T −1 ∑︁
t =0
ht e −2πiωt/T , ω = 0, . . . , T − 1. (6)
For 1 ≤ k ≤ T let Ik ⊆ {0, . . . ,T − 1} collect the k indices of largest energy ∥hbω ∥2 (ties broken arbitrarily) and set
(Pk hb)ω =
(
hbω, ω ∈ Ik,
0, ω ∉ Ik .
h
k = F −1 (Pk hb). (7)

Fusing Narrative Semantics for Financial Volatility Forecasting ICAIF ’25, November 15–18, 2025, Singapore, Singapore
Then hk minimises the approximation error
h
k = arg min
 ̃h∈ (Cd )T
{∥h −  ̃h∥2
F | ∥F  ̃h∥0 ≤ k }, (8)
where ∥ · ∥F is the Frobenius norm and ∥ · ∥0 counts non-zero Fourier coefficients.
Proof. Parseval’s identity for the unitary DFT gives
∥h − h ̃ ∥2
F=
T −1 ∑︁
ω =0
∥
hbω −  ̃hbω ∥2
2 (∀h ̃ ∈ (Cd )T ). (9)
If a candidate h ̃ has spectral support S = {ω : hb ̃ ω ≠ 0} with |S | ≤ k,
the summand for ω ∈ S in (9) is minimised by  ̃hbω = hbω , while the
optimal choice for ω ∉ S is hb ̃ ω = 0. Consequently the minimal
achievable error for this support equals
E(S) =
∑︁
ω ∉S
∥
hbω ∥2
2. (10)
Because E (S) decreases when Í
ω ∈S ∥hbω ∥2
2 increases, a support of
cardinality k is optimal only when it captures the k largest energies
— namely S = Ik - yielding the value Í
ω∉Ik ∥hbω ∥2
2. Reconstructing
via the inverse DFT produces the minimiser hk declared above. □
And then, the function Gl performs gated cross-modal fusion.
Given the price representation r1:T and the news representation
t
1:T isolated from the input of the block, it computes a gate a1:T =
σ (Wg [r1:T ; t1:T ]) ∈ (0, 1)T ×1 and returns
z
1:T = a1:T ⊙ r1:T + (1 − a1:T ) ⊙ t1:T , (11)
together with bilinear and absolute-difference interactions, concate
nated and linearly projected back to Rd . The entire sequence h(L)
1:T emerging from the final block therefore contains price-aware news
semantics and news-aware price spectra. To encourage semantic
consistency across modalities, we extract aligned embeddings
r
1:T = Pprice (h(L)
1:T ), t1:T = Pnews (h(L)
1:T ), (12)
where P∗ : (RT ×3d ) → (RT ×da ) are linear projections into an
alignment space of width da. The InfoNCE loss [27] introduced in
the Preliminary subsection is then realized as
L
align (θ ) = E[− log
exp(⟨rτ, tτ ⟩/τ)
Í
τ′ exp(⟨rτ , tτ′ ⟩/τ) ], (13)
where ⟨·, ·⟩ denotes the inner product in Rda and τ > 0 is a learned
temperature parameter.
Volatility Projection Head. The final component converts the
fused latent sequence into a point prediction yˆt+H . A temporal
projection Wp ∈ R(T +H )×T is applied to the price-channel slice
of h(L)
1:T
, yielding an extended sequence h ̃ 1:T +H ∈ R(T +H )×d that
extrapolates the learned dynamics up to the horizon H . We retain
the last position and pass it through an affine map Wo : Rd → Y,
obtaining
yˆt+H = Wo (h ̃T +H ). (14)
A deterministic output is appropriate because the target yt+H is
defined as a smoothed aggregation of three volatility estimators
and therefore concentrates most of its uncertainty in the inputs
rather than in the measurement.
The network parameters are trained by minimizing the joint
objective
J (θ ) = E(Zt ,yt+H ) [(Φ(Zt ; θ ) − yt+H )2] + λ Lalign (θ ), (15)
where the first term is the mean-squared prediction loss Lpred de
fined earlier and λ > 0 controls the relative weight of cross-modal
alignment. Stochastic gradient descent with automatic differentia
tion is employed to solve θ★ = arg minθ J (θ ).
4 Experiments
Now we present experiment results to thoroughly demonstrate the
performance of M2VN on real-world benchmark datasets. The pre
processed dataset, raw news article data, and implementation code
are publicly accessible at https://github.com/Yoontae6719/M2VN
Multi-Modal-Learning-Network-for-Volatility-Forecasting
4.1 Implementation Details
We present the details of datasets, baseline models, training details
and evaluation metrics.
Data Sources. We construct a unified daily panel comprising
seven large-capitalization U.S. equities — Coca-Cola (KO), Comcast
(CMCSA), ConocoPhillips (COP), Gilead Sciences (GILD), Merck
& Co. (MRK), Nike (NKE) and Oracle (ORCL). For each ticker, we
extract both end-of-day price information (open, high, low, close
and volume) and the full text of associated news articles from
FNSPID [14]. The FNSPID dataset [14] is an open-source resource
that integrates financial news articles with corresponding time
series data. All news articles are temporally aligned on a daily basis
in a structured format. Owing to the limited availability of news
data, above seven tickers were selected according to the volume of
associated articles.
Data Processing. Both news and time series data are partitioned
chronologically into a training span from 1 January 2013 to 31 De
cember 2017, a validation span from 1 January 2018 to 31 December
2020, and a strictly held-out test span from 1 January 2021 to 15
December 2023. News documents are temporally aligned so that
only articles published on the calendar day before as the corre
sponding price record enter the model’s input for that day, thereby
precluding any forward-looking leakage.
Baseline models. To evaluate the contribution of M2VN, we com
pare it against ten strong baselines spanning both classical econo
metrics and contemporary deep learning. The classical group con
tains Standard HAR, HAR-X (OLS), HAR-X (Lasso) and HAR
X (Ridge), variants of the Heterogeneous AutoRegressive model
widely used in volatility forecasting [8]. The modern deep learning
group encompasses Informer[39], Autoformer[37], DLinear[38],
TimesNet[36], TimeXer[35] and the PAttn [33] architecture. For
all three HAR-X baselines, we first reduce the dimensionality of the
daily news embeddings via principal-component analysis (PCA),
retaining the top components that explain 95% of variance. This
mitigates the curse of dimensionality while keeping the economet
ric specification parsimonious. All deep learning baselines ingest
the raw news embeddings directly.
Training detail. The model is trained using a sequence length of
12 time steps, where the last 2 steps serve as contextual labels, and
it forecasts 1 step into the future. All deep learning baselines and

ICAIF ’25, November 15–18, 2025, Singapore, Singapore Yaxuan Kong, Yoontae Hwang, Marcus Kaiser, Chris Vryonides, Roel Oomen, and Stefan Zohren
Method KO CMCSA COP GILD MRK NKE ORCL
QLike MAPE QLike MAPE QLike MAPE QLike MAPE QLike MAPE QLike MAPE QLike MAPE
HAR 0.0775 0.2932 0.0937 0.3317 0.0749 0.2982 0.0674 0.3290 0.0804 0.3106 0.0766 0.3179 0.0972 0.3219
HAR-X (OLS) 0.0658 0.3507 0.0746 0.3317 0.0779 0.2889 0.0961 0.4447 0.1060 0.3705 0.0889 0.2946 0.1068 0.3185
HAR-X (Ridge) 0.0638 0.3484 0.0723 0.3388 0.0746 0.2873 0.0764 0.3942 0.0762 0.3361 0.0713 0.2946 0.0926 0.3082
HAR-X (Lasso) 0.0627 0.3535 0.0692 0.3216 0.0594 0.2818 0.0716 0.4043 0.0685 0.3475 0.0646 0.2873 0.0809 0.3047
Informer 0.1629 0.4028 0.1125 0.3403 0.1399 0.3519 0.1007 0.4035 0.1959 0.3311 0.1453 0.3017 0.2443 0.4125
Autoformer 0.1095 0.3756 0.1558 0.4036 0.1480 0.3625 0.1089 0.3622 0.0906 0.3420 0.1120 0.3297 0.2119 0.4302
DLinear 0.0845 0.3371 0.0928 0.3355 0.0665 0.3083 0.0688 0.2977 0.0792 0.3174 0.0744 0.3103 0.1006 0.3614
TimesNet 0.0666 0.2943 0.0833 0.3177 0.0652 0.2839 0.0660 0.2852 0.0760 0.3065 0.0679 0.2905 0.0864 0.3182
PAttn 0.0699 0.3046 0.0805 0.3127 0.0603 0.2888 0.0678 0.2853 0.0699 0.3031 0.0695 0.3038 0.0959 0.3099
TimeXer 0.0661 0.3040 0.0807 0.3162 0.0589 0.3035 0.0673 0.2760 0.0797 0.2909 0.0671 0.2865 0.0849 0.3255
M2VN (Ours) 0.0589 0.2771 0.0769 0.3025 0.0552 0.2722 0.0630 0.2838 0.0679 0.3005 0.0594 0.2747 0.0696 0.3092
Table 1: Out-of-sample forecasting accuracy of ten statistical and deep learning models for daily volatility of seven U.S. stocks. Results are for quasi-likelihood loss (QLike) and mean absolute percentage error (MAPE). For each stock–metric pair, the best model is in red, second-best in blue. Values are averages of three runs; standard deviations are sufficiently small and omitted.
Ablation KO CMCSA COP GILD MRK NKE ORCL
QLike MAPE QLike MAPE QLike MAPE QLike MAPE QLike MAPE QLike MAPE QLike MAPE
M2VN 0.0589 0.2771 0.0769 0.3025 0.0552 0.2722 0.0630 0.2838 0.0679 0.3005 0.0594 0.2747 0.0696 0.3092
M2VN W/O V (d)
τ 0.0610 0.2783 0.0812 0.3105 0.0580 0.2822 0.0659 0.2877 0.0701 0.3100 0.0648 0.3039 0.0774 0.3076
M2VN W/O Nτ 0.0641 0.2904 0.0866 0.3184 0.0599 0.3000 0.0632 0.2851 0.0692 0.3169 0.0638 0.2912 0.0780 0.3251
Table 2: Ablation study on the impact of the daily volume feature (V (d)
τ ) in M2VN forecasting, as well as impact of news modality on M2VN volatility forecasting performance. Bold indicates the best result for each stock-metric pair.
our M2VN model are optimized with Adam, an initial learning rate
of 3 × 10−4, and cosine decay. Early stopping on the validation set
prevents over-fitting. In our models, hyper-parameters are selected
by random search, drawing 100 configurations from the following
grids: latent dimension d ∈ {12, 24, 32, 64}, alignment dimension
dα ∈ {32, 64, 128, 256}, temperature τ ∈ {0.01, 0.03, 0.07}, Inception
hidden width di ∈ {24, 32, 64, 128, 256, 512} and top-k signal k ∈
{4, 5, 6} . Equivalent searches (with architecture-specific ranges)
are conducted for every deep baseline to ensure a fair comparison.
Each experiment is repeated with three random seeds. we report
the mean across runs.
Evaluation metrics. Model performance is quantified with
Mean Absolute Percentage Error (MAPE) and the Quasi-Likelihood
loss (QLIKE). MAPE delivers an easily interpretable, scale-free per
centage error that treats over- and under-predictions symmetrically.
QLIKE, rooted in the quasi-log-likelihood of a Gaussian volatil
ity model, places extra weight on under-forecasting during high
volatility episodes. For a forecast yˆt of the realised volatility yt over
n test points, they are defined as
MAPE = 100% n
n ∑︁
t =1
| yt − yˆt
yt
|, (16)
QLIKE = 1 n
n ∑︁
i =1
yi
yˆi
− ln
yi
yˆi
− 1 . (17)
As our model directly forecasts volatility, we define both yt and yˆ
in terms of standard deviation for the QLIKE calculation. While the
QLIKE metric is conventionally applied to variance, this consistent
application to standard deviation allows it to serve as a robust
tool for the internal ranking of model performance. It preserves
the essential characteristic of penalizing under-prediction more
heavily, which is crucial for our comparative study.
4.2 M2VN is Useful for Volatility Forecasting?
To answer the central research question of whether our proposed
multi-modal framework improves volatility forecasting, we conduct
a comprehensive empirical evaluation against a suite of strong
classical and deep learning baselines. This section details the out
of-sample performance of M2VN, whose architecture and learning
objectives are described in Section 3, on seven real-world equity
datasets.
The quantitative results are presented in Table 1. Our proposed
model, M2VN, demonstrates consistently strong performance, out
performing eight out of ten baselines in the majority of stock-metric
settings. Specifically, M2VN achieves either the best (highlighted in
red) or second-best (in blue) result in 12 out of 14 evaluation set
tings (across 7 stocks and 2 metrics). Notably, it secures the top
rank in ten cases (71.4%) and places within the top two in the vast
majority of settings. While the HAR-X (Lasso) baseline yields some
competitive results, obtaining the best performance in two settings
(CMCSA–QLike and ORCL–MAPE), M2VN either matches or ex
ceeds Lasso’s accuracy in most other stock–metric combinations,
highlighting its overall superiority. Relative to TimesNet [36], an

Fusing Narrative Semantics for Financial Volatility Forecasting ICAIF ’25, November 15–18, 2025, Singapore, Singapore
2021-01
2021-02
2021-03
2021-04
2021-05
2021-06
2021-07
2021-08
2021-09
2021-10
2021-11
2021-12
2022-01
2022-02
2022-03
2022-04
2022-05
2022-06
2022-07
2022-08
2022-09
2022-10
2022-11
2022-12
2023-01
2023-02
2023-03
2023-04
2023-05
2023-06
2023-07
2023-08
2023-09
2023-10
2023-11
2023-12
0.005
0.010
0.015
0.020
0.025
0.030
Value
KO Dataset
2021-01
2021-02
2021-03
2021-04
2021-05
2021-06
2021-07
2021-08
2021-09
2021-10
2021-11
2021-12
2022-01
2022-02
2022-03
2022-04
2022-05
2022-06
2022-07
2022-08
2022-09
2022-10
2022-11
2022-12
2023-01
2023-02
2023-03
2023-04
2023-05
2023-06
2023-07
2023-08
2023-09
2023-10
2023-11
2023-12
0.01
0.02
0.03
0.04
0.05
0.06
Value
CMCSA Dataset
Ground Truth TimeXer HAR(Lasso) M2VN(Ours)
Figure 3: Visual comparison of out-of-sample forecast quality for the KO (top) and CMCSA (bottom) datasets over the test period of 2021-2023 . The M2VN model’s predictions (green) are plotted against the ground truth realized volatility (black), alongside forecasts from the HAR-X (Lasso) (orange) and TimeXer (blue) baselines. The M2VN demonstrates a superior ability to track the fluctuations and sharp peaks of the ground truth data compared to the other models.
ablation of our backbone that omits the cross-modal alignment loss
L
align, mean QLike and MAPE fall by 11.7 % and 3.6 %, respectively.
The superior performance of M2VN can be attributed to several
key architectural innovations. First, the explicit fusion of quantita
tive market data and qualitative news narratives, enforced by the
auxiliary contrastive alignment loss (Lalign), enables the model to
learn a richer, more robust representation of the underlying market
state than models relying on price data alone. Second, the latent
dynamics module, which leverages spectral filtering to isolate the
dominant periodic components of the volatility signal (cf. Proposi
tion 3.1), effectively denoised the input sequences. This structural
inductive bias may encourages the model to focus on persistent,
predictable patterns rather than overfitting to stochastic noise, a
common pitfall in financial TSF. These empirical results suggest
that the architectural choices embodied in M2VN are suitable for the
complex task of volatility forecasting.
4.3 Is Volume a Proxy for News Information?
To investigate the intricate relationship between market activity
and narrative information, we examine whether trading volume
can serve as a proxy for news. According to the efficient market
hypothesis, news is rapidly incorporated into prices, with trading
volume often reflecting the arrival and processing of such informa
tion. This raises the question of whether the information contained
in news is subsumed by the more readily available quantitative
volume data.
To test this hypothesis, we conduct a targeted ablation study
on our M2VN model. Specifically, we compare the performance of
the full model — which leverages both daily trading volume (V (d)
τ)
from the quantitative market state (Xt ) and news embeddings (Nt ) 
against an identical model with the volume feature ablated. In this
alternative configuration, the model relies on news embeddings
and other market variables to capture information flow. If trading
volume were merely a proxy for news, removing it from a model
already equipped with rich news representations should yield only
marginal changes in performance.
The results of this experiment are summarized in Table 2. Ex
cluding trading volume results in a statistically significant and
consistent reduction in forecasting accuracy across all seven equi
ties. The complete model (with volume, standard M2VN) outperforms
its ablated counterpart (without volume, M2VN W/O V (d)
τ ) on 27 out
of 28 stock-metric pairs. On average, incorporating volume reduces
MAPE by 2.86±3.06% and QLike by 5.64±2.40% across all stocks.
These findings suggest that trading volume is not merely a proxy
for news but rather a source of complementary information.
The substantial improvement in predictive accuracy achieved by
including volume — even alongside rich textual news features 
indicates that volume captures unique aspects of market dynamics.
These may capture investor disagreement, liquidity, or the intensity
of market attention, which are not fully reflected in the semantic
content of news alone. Therefore, to develop high-fidelity financial
forecasting models, it is crucial to regard both news narratives and
trading volume as essential, non-redundant sources of information.

ICAIF ’25, November 15–18, 2025, Singapore, Singapore Yaxuan Kong, Yoontae Hwang, Marcus Kaiser, Chris Vryonides, Roel Oomen, and Stefan Zohren
4.4 Is News Embedding Predictive?
To ascertain the direct contribution of news embeddings to the
predictive capability of the M2VN model, an ablation study was
conducted by comparing the model’s performance with and with
out the news modality (Nt ). Table 2 presents the out-of-sample
forecasting accuracy for all seven U.S. stocks across two key met
rics: Quasi-Likelihood Loss (QLike) and Mean Absolute Percent
age Error (MAPE). The results unequivocally demonstrate that the
inclusion of news embeddings consistently enhances forecasting
performance.
Across all evaluated stocks and both metrics, the M2VN model
with news embeddings (standard M2VN) significantly outperforms
its counterpart without news embeddings (W/O Nt ). For instance,
in the case of Coca-Cola (KO), the QLike decreased from 0.0641 to
0.0589 and MAPE from 0.2904 to 0.2771 when news was incorpo
rated. Similar improvements are observed for Comcast (CMCSA),
where QLike dropped from 0.0866 to 0.0769 and MAPE from 0.3184
to 0.3025. Notably, for stocks like ConocoPhillips (COP) and Oracle
(ORCL), the performance gaps are particularly pronounced, with
substantial reductions in both QLike and MAPE, indicating that
news content provides highly meaningful signals for these equities.
For COP, QLike improved from 0.0599 to 0.0552 and MAPE from
0.3000 to 0.2722. Similarly, for ORCL, QLike went from 0.0780 to
0.0696 and MAPE from 0.3251 to 0.3092.
While the benefit of news integration is universal, the magnitude
of improvement varies across stocks. For example, Gilead Sciences
(GILD) shows a comparatively smaller performance gain (0.0632 vs.
0.0630 for QLike, and 0.2851 vs. 0.2838 for MAPE), suggesting that
its volatility dynamics might be less influenced by publicly available
news narratives, or that its price movements are predominantly
driven by other factors captured within the quantitative market
state. Conversely, stocks exhibiting larger gains, such as COP and
ORCL, may have volatility profiles more responsive to specific news
events or broader market sentiment conveyed through news. This
differentiation could arise from factors like sector-specific news
impact, company-specific event frequency, or the general informa
tion efficiency of the stock. News embeddings likely contribute by
providing timely, qualitative insights into market-moving events or
shifts in sentiment that are not immediately captured by historical
price data alone. Their effectiveness in certain cases, and their less
pronounced impact in others, underscore the interconnected rela
tionship between qualitative information and asset price dynamics.
Overall, the consistent outperformance of the model incorporat
ing news embeddings provides strong evidence that this modality
contributes meaningful predictive signals for volatility forecasting
within the M2VN multi-modal architecture.
4.5 Showcasing Forecast Quality
To supplement the aggregate metrics in Table 1, this section quali
tatively compares M2VN’s out-of-sample forecasts against ground
truth and two strong baselines — HAR-X (Lasso) and TimeXer 
on the CMCSA and KO datasets (2021–2023), as shown in Figure 3.
Notably, while all models struggle to predict the exact magnitude
of extreme, single-day volatility shocks (e.g., the CMCSA spike in
early 2022), M2VN more effectively captures these peaks compared
to the baselines. In contrast, HAR-X (Lasso) and TimeXer tend to
produce overly smoothed forecasts that underestimate sharp spikes,
with HAR-X (Lasso) particularly weak in tracking the post-event
decay. This results in persistent over-prediction during calmer pe
riods, as seen with HAR-X (Lasso) in KO dataset from August 2022
to January 2023 and April to June 2023. Although M2VN may un
derestimate the absolute height of extreme movements, it reliably
identifies the direction and timing of sharp upward shifts, while the
baselines often produce muted or delayed responses. This qualita
tive improvement is significant, as forecasting rare volatility shocks
is a well-known challenge in financial modeling due to their un
derrepresentation in training data, and M2VN’s ability to anticipate
such events marks a notable advance over existing methods.
5 Conclusion
This study introduced M2VN, a novel deep learning framework that
effectively unifies structured financial time series with unstructured
news narratives for volatility forecasting. By leveraging temporally
faithful news embeddings from TiMaGPT and cross-modal align
ment through a contrastive loss, M2VN tackles key challenges of data
modality fusion and look-ahead bias. Experiments on large-cap U.S.
equities show that M2VN consistently outperforms both classical
econometric models and deep learning baselines, achieving higher
accuracy in both MAPE and QLike metrics. Ablation studies further
confirm that both trading volume and news embeddings provide
unique, complementary predictive signals. These findings high
light the value of cross-modal integration for improved volatility
modeling and financial risk management.
Acknowledgments
The authors would like to thank the reviewers for their insight
ful and detailed comments. Y.K. gratefully acknowledges financial
support from Deutsche Bank AG.
References
[1] Carol Alexander. 2008. Market risk analysis, practical financial econometrics. Vol. 2.
John Wiley & Sons. [2] Torben G Andersen and Tim Bollerslev. 1998. Answering the skeptics: Yes, standard volatility models do provide accurate forecasts. International economic review (1998), 885–905. [3] Torben G Andersen, Tim Bollerslev, Peter F Christoffersen, and Francis X Diebold. 2006. Volatility and correlation forecasting. Handbook of economic forecasting 1 (2006), 777–878. [4] Abdul Fatir Ansari, Lorenzo Stella, Caner Turkmen, Xiyuan Zhang, Pedro Mercado, Huibin Shen, Oleksandr Shchur, Sy-
ama Sundar Rangapuram, Sebastian Pineda Arango, Shubham Kapoor, et al. 2024. Chronos: Learning the language
of time series. arXiv preprint arXiv:2403.07815 (2024).
[5] Adam Atkins, Mahesan Niranjan, and Enrico Gerding. 2018. Financial news predicts stock market volatility better than close price. The Journal of Finance and Data Science 4, 2 (2018), 120–137. [6] Francesco Audrino, Fabio Sigrist, and Daniele Ballinari. 2020. The impact of sentiment and attention measures on stock market volatility. International Journal of Forecasting 36, 2 (2020), 334–357. [7] Kim Christensen, Mathias Siggaard, and Bezirgen Veliyev. 2023. A machine learning approach to volati-
lity forecasting. Journal of Financial Econometrics 21, 5 (2023), 1680–1727. [8] Adam Clements, Daniel Preve, and Clarence Tee. 2024. Harvesting the HAR-X Volatility Model. Available at SSRN 4733597 (2024). [9] Adam Clements and Daniel PA Preve. 2021. A practical guide to harnessing the har volatility model. Journal of Banking & Finance 133 (2021), 106285. [10] Albert Cohen, Wolfgang Dahmen, and Ronald DeVore. 2006. Compressed Sensing and Best k-Term Approximation. Technical Report IGPM Report 260-
. RWTH Aachen University. https://www.igpm.rwth-aachen.de/Download/reports/pdf/ IGPM260.pdf Technical report, later published in J. Amer. Math. Soc. 22(1):211231, 2009.

Fusing Narrative Semantics for Financial Volatility Forecasting ICAIF ’25, November 15–18, 2025, Singapore, Singapore
[11] Fulvio Corsi. 2009. A simple approximate long-memory model of realized volatil
ity. Journal of Financial Econometrics 7, 2 (2009), 174–196.
[12] Mark A Davenport, Marco F Duarte, Yonina C Eldar, and Gitta Kutyniok. 2012. Introduction to compressed sensing. Cambridge University Press. 1–64 pages. [13] Stavros Degiannakis and George Filis. 2017. Forecasting oil price realized volatility using information channels from other asset classes. Journal of International Money and Finance 76 (2017), 28–49.
[14] Zihan Dong, Xinyu Fan, and Zhiyuan Peng. 2024. Fnspid: A comprehensive financial news dataset in time series. In Proceedings of the 30th ACM SIGKDD
Conference on Knowledge Discovery and Data Mining. 4918–4927.
[15] Felix Drinkall, Eghbal Rahimikia, Janet B Pierrehumbert, and Stefan Zohren. 2024.
Time machine GPT. arXiv preprint arXiv:2404.18543 (2024).
[16] Robert F Engle and Tim Bollerslev. 1986. Modelling the persistence of conditional variances. Econometric reviews 5, 1 (1986), 1–50. [17] Mark B Garman and Michael J Klass. 1980. On the estimation of security price volatilities from historical data. Journal of business (1980), 67–78. [18] Nate Gruver, Marc Finzi, Shikai Qiu, and Andrew G Wilson. 2023. Large language models are zero-shot time series forecasters. Advances in Neural Information Processing Systems 36 (2023), 19622–19635. [19] Yoon-
tae Hwang, Yaxuan Kong, Stefan Zohren, and Yongjae Lee. 2025. Decisioninformed Neural Networks with Large Language Model Integration for Portfolio
Optimization. arXiv preprint arXiv:2502.00828 (2025).
[20] Ming Jin, Shiyu Wang, Lintao Ma, Zhixuan Chu, James Y Zhang, Xiaoming Shi, Pin-Yu Chen, Yuxuan Liang, Yuan-Fang Li, Shirui Pan, et al. 2023. Time-llm: Time series forecasting by reprogramming large language models. arXiv preprint
arXiv:2310.01728 (2023).
[21] Alex Kim, Maximilian Muhn, and Valeri V Nikolaev. 2024. Financial Statement
Analysis with Large Language Models. Chicago Booth Research Paper Forthcoming, Fama-Miller Working Paper (2024).
[22] Yaxuan Kong, Yuqi Nie, Xiaowen Dong, John M Mulvey, H Vincent Poor, Qingsong Wen, and Stefan Zohren. 2024. Large Language Models for Financial and Investment Management: Applications and Benchmarks. Journal of Portfolio Management 51, 2 (2024).
[23] Yaxuan Kong, Yuqi Nie, Xiaowen Dong, John M Mulvey, H Vincent Poor, Qingsong Wen, and Stefan Zohren. 2024. Large Language Models for Financial and Investment Management: Models, Opportunities, and Challenges. Journal of
Portfolio Management 51, 2 (2024).
[24] Burak Korkusuz. 2024. Beyond the S&P 500: examining the role of external volatilities in market forecasting. Review of Economic Design (2024), 1–28. [25] Haoxin Liu, Shangqing Xu, Zhiyuan Zhao, Lingkai Kong, Harshavardhan Prabhakar Kamarthi, Aditya Sasanur, Megha Sharma, Jiaming Cui, Qingsong Wen, Chao Zhang, et al. 2024. Time-mmd: Multi-domain multimodal dataset for time
series analysis. Advances in Neural Information Processing Systems 37 (2024),
77888–77933. [26] Štefan Lyócsa, Peter Molnár, and Tomáš V`yrost. 2021. Stock market volatility forecasting: Do we need high-frequency data? International Journal of Forecasting 37, 3 (2021), 1092–1110. [27] Aaron van den Oord, Yazhe Li, and Oriol Vinyals. 2018. Representation learning with contrastive predictive coding. arXiv preprint arXiv:1807.03748 (2018). [28] Michael Parkinson. 1980. The extreme value method for estimating the variance of the rate of return. Journal of business (1980), 61–65-
. [29] Navid Parvini and Hirbod Assa. 2025. Textual Regression for Realized Volatility: A Model for Long-Term Forecasting. Available at SSRN (2025). [30] Eghbal Rahimikia, Stefan Zohren, and Ser-Huang Poon. 2021. Realised volatility forecasting: Machine learning via financial word embedding. arXiv preprint
arXiv:2108.00480 (2021).
[31] L Christopher G Rogers and Stephen E Satchell. 1991. Estimating variance from high, low and closing prices. The Annals of Applied Probability (1991), 504–512. [32] Suproteem K Sarkar and Keyon Vafa. 2024. Lookahead bias in pretrained language
models. Available at SSRN (2024).
[33] Mingtian Tan, Mike Merrill, Vinayak Gupta, Tim Althoff, and Tom Hartvigsen. 2024. Are language models actually useful for time series forecasting? Advances
in Neural Information Processing Systems 37 (2024), 60162–60191.
[34] Xingchen Wan, Jie Yang, Slavi Marinov, Jan-Peter Calliess, Stefan Zohren, and Xiaowen Dong. 2021. Sentiment correlation in financial news networks and associated market movements. Scientific reports 11, 1 (2021), 3062. [35] Yuxuan Wang, Haixu Wu, Jiaxiang Dong, Yong Liu, Yunzhong Qiu, Haoran Zhang, Jianmin Wang, and Mingsheng Long. 2024. Timexer: Empowering transformers for time series forecasting with exogenous variables. Advances in Neural
Information Processing Systems (2024).
[36] Haixu Wu, Tengge Hu, Yong Liu, Hang Zhou, Jianmin Wang, and Mingsheng Long. 2023. TimesNet: Temporal 2D-Variation Modeling for General Time Series
Analysis. In International Conference on Learning Representations.
[37] Haixu Wu, Jiehui Xu, Jianmin Wang, and Mingsheng Long. 2021. Autoformer: Decomposition transformers with auto-correlation for long-term series forecasting.
Advances in neural information processing systems 34 (2021), 22419–22430.
[38] Ailing Zeng, Muxi Chen, Lei Zhang, and Qiang Xu. 2023. Are transformers effective for time series forecasting?. In Proceedings of the AAAI conference on
artificial intelligence, Vol. 37. 11121–11128.
[39] Haoyi Zhou, Shanghang Zhang, Jieqi Peng, Shuai Zhang, Jianxin Li, Hui Xiong, and Wancai Zhang. 2021. Informer: Beyond efficient transformer for long se
quence time-series forecasting. In Proceedings of the AAAI conference on artificial
intelligence, Vol. 35. 11106–11115. [40] Tian Zhou, Peisong Niu, Liang Sun, Rong Jin, et al. 2023. One fits all: Power general time series analysis by pretrained lm. Advances in neural information processing systems 36 (2023), 43322–43355.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:11.863Z
- **Text Length:** 52661 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
