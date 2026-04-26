# PDF Document: Cho et al. - 2025 - Diffolio A Diffusion Model for Multivariate Probabilistic Financial Time-Series Forecasting and Por.pdf

**File Path:** Cho et al. - 2025 - Diffolio A Diffusion Model for Multivariate Probabilistic Financial Time-Series Forecasting and Por.pdf

**Processed Date:** 2026-02-10T18:17:54.541Z

**File Size:** 1351.93 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3247

**Title:** Diffolio: A Diffusion Model for Multivariate Probabilistic Financial Time-Series Forecasting and Portfolio Construction

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Diffolio: A Diffusion Model for Multivariate Probabilistic Financial Time-Series Forecasting and Portfolio Construction
So-Yoon Cho∗ Dept. of Statistics Sungkyunkwan University Seoul 03063 Republic of Korea
Jin-Young Kim∗
Independent Researcher Seoul Republic of Korea
Kayoung Ban School of Physics Korea Institute for Advanced Study Seoul 02455 Republic of Korea
Hyeng Keun Koo
Dept. of Financial Engineering Ajou University Gyeonggi-do 16499 Republic of Korea
Hyun-Gyoon Kim†
Dept. of Financial Engineering & Dept. of Artificial Intelligence Ajou University Gyeonggi-do 16499 Republic of Korea
Abstract
Probabilistic forecasting is crucial in multivariate financial time-series for constructing efficient portfolios that account for complex cross-sectional dependencies. In this paper, we propose Diffolio, a diffusion model designed for multivariate financial time-series forecasting and portfolio construction. Diffolio employs a denoising network with a hierarchical attention architecture, comprising both asset-level and market-level layers. Furthermore, to better reflect cross-sectional correlation-
s, we introduce a correlation-guided regularizer informed by a stable estimate of the target correlation matrix. This structure effectively extracts salient features not only from historical returns but also from asset-specific and systematic covariates, significantly enhancing the performance of forecasts and portfolios. Experimental results on the daily excess returns of 12 industry portfolios show that Diffolio outperforms various probabilistic forecasting baselines in multivariate forecasting -
accuracy and portfolio performance. Moreover, in portfolio experiments, portfolios constructed from Diffolio’s forecasts show consistently robust performance, thereby outperforming those from benchmarks by achieving higher Sharpe ratios for the mean-variance tangency portfolio and higher certainty equivalents for the growth-optimal portfolio. These results demonstrate the superiority of our proposed Diffolio in terms of not only statistical accuracy but also economic significance.
∗These authors contributed equally to this work. †Corresponding author
Preprint.
arXiv:2511.07014v1 [cs.CE] 10 Nov 2025

1 Introduction
Multivariate time-series forecasting is a crucial problem across various domains such as traffic, energy, and weather, and it is particularly critical in finance for the construction of multi-asset portfolios. As initiated by [26], modern portfolio theory is founded on the principle of strategically allocating assets to diversify risk and maximize risk-adjusted returns by taking the cross-sectional dependencies into account. Consequently, accurately predicting both individual asset returns and the-
ir complex joint dynamics is crucial for constructing efficient investment portfolios.
However, relying solely on point estimates of these multivariate returns is insufficient. Widely-used portfolio optimization strategies, such as the mean-variance efficient portfolio or utility maximization portfolio, require estimates of the expected returns, the covariance matrix, and often the entire joint distribution of returns to determine optimal portfolio weights. This necessitates density estimation rather than point estimation, emphasizing the need for probabilistic forecasting to charac-
terize the distribution of future returns.
Probabilistic forecasting, in contrast to deterministic forecasting, is an approach that predicts the probability distribution of future outcomes rather than a single point value. While traditional methods for this task include parametric modeling, bootstrapped residuals, and quantile regression, more recent deep learning approaches have predominantly utilized generative models such as generative adversarial networks (GANs) [12], variational autoencoders (VAEs) [20], diffusion models [29, 15], and-
 flow matching [25]. In this work, we employ a diffusion model, which is renowned for its ability to generate high-fidelity and diverse samples, to accurately forecast financial time-series. These approaches are discussed further in Section 2.
The necessity for probabilistic forecasting in financial time-series also stems from its inherent uncertainty of the future. Deterministic forecasting can be viewed as predicting the expectation marginalized over this uncertainty (e.g., [10]), resulting in a loss of valuable information. In finance, this uncertainty manifests as risk, a central component in portfolio management, risk hedging, and derivative pricing. By adopting a probabilistic approach, we aim to implicitly characterize this uncer-
tainty. However, this characterization is inherently challenging; it is infeasible to know all the factors or covariates that influence future returns, let alone the distribution of the residual uncertainty that remains after accounting for them. Nevertheless, extensive research has identified several covariates that exhibit predictability for asset returns (e.g., [37, 13]). Therefore, designing a model architecture capable of effectively incorporating these covariates is paramount to refine the p-
redictive distribution.
Many time-series forecasting models (e.g., [18, 33, 1, 19, 21, 9]) generate predictions conditioned solely on the historical sample. This approach can be considered to be based on the stationary assumption that temporal patterns observed in the past will recur. However, financial time-series exhibit time-varying characteristics conditioned on dynamic asset-specific and systematic environments [4, 37, 13], rather than merely reproducing fixed temporal patterns. Consequently, relying only on histori-
cal data often fails to yield consistent forecasting results for financial time-series, and it is more appropriate to incorporate the effects of the time-varying economic environment through covariates. While approaches that model stock returns using these covariates have been explored [17, 13, 14], studies that leverage such information for probabilistic forecasting of return distributions and its integration into portfolio construction remain scarce, highlighting the need for further research.
To this end, a model architecture is required that can effectively incorporate the two distinct types of covariates: asset-specific and systematic. We adopt an architecture inspired by the hierarchical attention network [39], a structure widely used in natural language processing. In language models, this architecture operates on two levels. First, at a lower word-level, attention is applied within each sentence to identify important words and compute weighted representations, thereby creating a s-
entence vector. Then, at a higher sentence level, attention is applied to these individual sentence vectors within a paragraph or document to perform the final task. We adapt this hierarchical structure to financial time-series forecasting as follows. At the lower, asset-level hierarchy, we process each asset individually. Specifically, for each asset, we employ cross-attention to infuse information from its his
2

torical returns and asset-specific covariates–which together form the context vector–into a corresponding individualized latent tensor. Subsequently, at the higher, market-level hierarchy, these asset-level latent tensors are aggregated. We then apply self-attention to this collection of tensors along with the systematic covariates. While the lower stage does not directly mix information across assets, this market-level self-attention mechanism allows the model to elaborately capture the complex -
cross-sectional dependencies to forecast future returns. This hierarchical approach allows the model to effectively extract the salient features implied in both types of covariates, thereby significantly enhancing predictability.
Furthermore, to better capture the cross-sectional dependency that may not be fully explained by the covariates (e.g., due to cascading effects arising from supply chain relationships), we introduce a correlation-guided regularizer. This regularizer is applied during the market-level self-attention stage and is designed to guide the attention probabilities between asset-level latent tensors to align with a stable estimate of the correlation matrix among assets. This mechanism enhances the model’s -
ability to capture cross-sectional dependencies and potentially improve portfolio performance.
We name our proposed probabilistic forecasting model, designed as described above, Diffolio. The primary objectives for Diffolio are twofold: achieving accurate probabilistic forecasts and ensuring strong economic performance. Accordingly, we evaluate its performance from these two corresponding perspectives: statistical forecasting accuracy and portfolio performance. As demonstrated in Section 5, Diffolio exhibits strong performance in both aspects. Notably, in terms of portfolio performance, our-
 model significantly outperforms all baseline models considered and consistently achieves performance superior or comparable to the market benchmark. These results demonstrate that our proposed model architecture allows for the construction of stable and efficient portfolios.
The remainder of this paper is organized as follows. We begin by briefly reviewing related literature in Section 2 and providing the necessary background on diffusion models and probabilistic time-series forecasting in Section 3. We then detail the architecture of our proposed model in Section 4. Section 5 presents the experimental setup and analyzes the empirical results of our proposed model against several baselines. Section 6 concludes the paper.
2 Related Works
The application of deep generative models, including GANs, VAEs, and diffusion models, has significantly advanced the field of probabilistic time-series forecasting. GAN-based approaches, with TimeGAN [40] being a representative example, employ an adversarial training process to learn temporal dynamics and generate realistic time-series samples. Models applied in the financial domain (e.g., FIN-GAN [31] and QuantGAN [38]) focus on generating univariate financial data to reproduce stylized facts. F-
or multivariate conditional generation, Fin-GAN [36] introduces an economics-driven loss function for forecasting, and SigCWGAN [24] integrates Wasserstein GANs with path signature transforms. On the other hand, VAE-based models are developed to learn probabilistic latent representations of sequential data. An example application in finance is FactorVAE [7], which integrates a VAE with a dynamic factor model to learn latent factors for predicting stock returns.
Diffusion models [29, 15] have emerged as a powerful approach for generative tasks, renowned for their ability to produce high-fidelity samples; this strength has also shown to be effective in the time-series domain. DiffWave [22], originally for audio synthesis, utilizes 1-dimensional dilated convolutions in its denoising network εθ. TSDiff [21] proposes a flexible approach for conditional forecasting by training an unconditional model and applying self-guidance at inference time. Work on multiva-
riate conditional diffusion models has also been extensive. TimeGrad [28] adopts an autoregressive recurrent neural network (RNN) to encode historical information. Models such as CSDI [33] and SSSD [1] utilize different backbones–transformer and structured state space models, respectively–to focus on imputation and forecasting. MG-TSD [9] is proposed to enhance training stability by using multigranularity data as targets. Diffusion-TS [41] trains an unconditional transformer-based model to predict-
 the clean sample x0 directly, and then employs classifier-free guidance at
3

inference time to generate conditional forecasts. For financial applications, FTS-Diffusion [16] is proposed to capture irregular and scale-invariant patterns in univariate financial data. A recent diffusion model by [32] also targets multivariate financial data, but focuses on synthetic data generation rather than forecasting.
While many existing models demonstrate strong performance on general time-series tasks, their architectures are often generic. As mentioned above, research on diffusion models for multivariate financial time-series forecasting remains particularly scarce. Moreover, both the generic models and those tailored for finance are often not explicitly designed to incorporate the two distinct types of covariates–asset-specific and systematic–crucial for financial forecasting [37, 13], thereby limiting thei-
r ability to fully exploit this significant predictive information. Furthermore, while these models implicitly capture cross-sectional dependencies, they often lack explicit mechanisms designed to model and refine the intricate relationships paramount for efficient portfolio construction. Diffolio addresses these gaps as a multivariate conditional diffusion model tailored for financial time-series forecasting, utilizing a hierarchical attention architecture and a correlation-guided regularizer.
A related strand of research also leverages attention mechanisms to jointly model temporal and cross-sectional dependencies for portfolio construction. In particular, [6] propose AlphaPortfolio, which uses a historical attention module at the individual asset level and a cross-asset attention network to directly learn portfolio weights through deep reinforcement learning. While both approaches share the architectural intuition of employing distinct attentions on individual assets and across assets-
, their detailed backbone architectures and handling of covariates diverge. Unlike AlphaPortfolio’s network, which considers asset-specific covariates only, Diffolio’s architecture is designed to hierarchically incorporate both assetspecific and systematic covariates. Beyond these architectural differences, their objectives also fundamentally differ. AlphaPortfolio optimizes investment performance by maximizing a reward function over portfolio returns, effectively learning a policy for asset alloc-
ation. In contrast, Diffolio focuses on probabilistic multivariate forecasting–that is, modeling the conditional joint distribution of future returns–to provide calibrated uncertainty estimates and to enable risk-aware portfolio construction. Thus, whereas AlphaPortfolio represents a reinforcement learning approach to direct portfolio optimization, our model constitutes a generative approach that produces distributional forecasts applicable to a wide range of decision frameworks.
3 Backgrounds
This section provides an overview of the diffusion models that form the foundation of Diffolio. We denote the diffusion steps using the index τ ∈ {1, 2, · · · , T } to distinguish them from the real time index t.
3.1 Denoising Diffusion Probabilistic Models (DDPM)
Denoising diffusion probabilistic models (DDPMs) [15, 29] are a type of generative model characterized by two processes: a forward process and a reverse process. The forward process gradually corrupts an original data sample x0 ∼ q(x0) into Gaussian noise over T diffusion steps. This is defined as a fixed Markov chain that incrementally adds Gaussian noise according to a predefined variance schedule {βτ ∈ (0, 1)}τT=1:
q(xτ |xτ−1) := N (xτ ; √1 − βτ xτ−1, βτ I).
A key property of this formulation is that it allows sampling xτ at any arbitrary diffusion
step τ directly from x0 in closed form. Defining ατ := 1 − βτ and α ̄τ := ∏τ
i=1 αi, we have
q(xτ |x0) = N (xτ ; √α ̄τ x0, (1 − α ̄τ )I). (3.1)
Using the reparameterization trick, we can express xτ as
xτ = √α ̄τ x0 + √1 − α ̄τ ε, where ε ∼ N (0, I). (3.2)
4

Conversely, the reverse process aims to recover the original data x0 from the noise xT ∼ N (0, I). This is modeled as a parameterized Markov chain starting from p(xT ):
pθ(x0:T ) := p(xT )
T ∏
τ =1
pθ(xτ−1|xτ ),
where the transitions pθ(xτ−1|xτ ) are parameterized as Gaussian distributions
N (xτ−1; μθ(xτ , τ ), ￿θ(xτ , τ )). The model is trained by optimizing a variational lower bound
on the log-likelihood. [15] demonstrated that this optimization can be simplified by reparameterizing the mean μθ to predict the noise ε from (3.2) using a neural network εθ(xτ , τ ).
The simplified training objective is
LDDPM(θ) = Eτ,x0,ε
[∥ε − εθ(xτ , τ )∥2] . (3.3)
3.2 Conditional Diffusion Models
For time-series forecasting, the objective is not unconditional generation but rather to model the conditional distribution p(x0|c), where x0 represents the future time-series value and c denotes the conditioning information, such as historical observations or covariates. To adapt the diffusion model for this conditional task, the reverse process is modified to incorporate the conditioning information as
pθ(x0:T |c) := p(xT )
T ∏
τ =1
pθ(xτ−1|xτ , c).
This is achieved by modifying the denoising network to take the condition c as an additional input, εθ(xτ , τ, c). The forward process remains the same. The training objective is consequently adapted to the conditional setting:
LDDPM-cond(θ) = Eτ,x0,ε,c
[∥ε − εθ(xτ , τ, c)∥2] . (3.4)
In Diffolio, the architecture of εθ utilizes attention structures to extract salient features from the conditioning information c, thereby enhancing its predictive capability for conditional generation.
3.3 Denoising Diffusion Implicit Models (DDIM)
While DDPMs yield high-quality samples, the reverse process requires T sequential denoising steps, which can be computationally intensive. Denoising diffusion implicit models (DDIM) [30] accelerate the sampling process by defining a non-Markovian generative process that shares the same training objective as DDPM but allows for sampling using fewer steps.
During inference, DDIM first estimates the original data x0 from the noisy input xτ using the trained denoising network εθ as
ˆx0 = xτ − √1 − α ̄τ εθ(xτ , τ, c)
√α ̄τ
.
Then, DDIM generates the sample at a preceding step τ ′ (where τ ′ < τ ) using the following generalized update rule,
xτ′ = √α ̄τ′ xˆ0 + √1 − α ̄τ′ − (στ′ )2 · εθ(xτ , τ, c) + στ′ ε′, (3.5)
where ε′ ∼ N (0, I). The stochasticity is controlled by στ′ , which is defined as:
στ′ = η√(1 − α ̄τ′ )/(1 − α ̄τ )√1 − α ̄τ /α ̄τ′ .
The hyperparameter η ∈ [0, 1] interpolates between a deterministic process and a stochastic one. When η = 1, the process is equivalent to DDPM sampling. When η = 0, we have στ′ = 0, and the sampling process becomes deterministic. We employ this deterministic DDIM sampling procedure (i.e., η = 0) during inference, enabling faster generation by using a reduced number of steps while maintaining high sample quality.
5

3.4 Probabilistic Multivariate Time-Series Forecasting
In the context of this paper, our objective is the probabilistic forecasting of N -dimensional asset excess returns. Specifically, we aim to model the conditional distribution of the excess return vector at the next time step, rt+1 ∈ RN . Within our diffusion framework,
this target corresponds to the data sample at zero diffusion step, i.e., xt0+1 = rt+1. The
conditioning information c consists of two components: the historical excess returns over a lookback window of M steps, rt−(M−1):t, and a set of asset-specific and systematic covariates
over the same window. Our approach characterizes the conditional predictive distribution p(rt+1|rt−(M−1):t, ct−(M−1):t) by generating a large set of plausible future return trajectories
through a diffusion model. The resulting distribution is then utilized to optimize investment portfolios, a task for which accurately modeling the joint distribution of asset returns is paramount.
4 Diffolio
We propose Diffolio, a conditional diffusion model tailored for multivariate financial timeseries forecasting. The core of our proposed model lies within the denoising network, εθ, based on a hierarchical attention architecture. This design is intended to capture the complex joint dynamics of asset returns by utilizing historical data and two types of covariates: asset-specific covariates (e.g., asset characteristics) and systematic covariates (e.g., macroeconomic variables). Furthermore, we intro-
duce a correlation-guided regularizer for the attention mechanism to learn cross-asset dependencies, enhancing both the stability and predictive accuracy of the model.
4.1 Hierarchical Attention Denoising Network
The denoising network εθ takes a noisy data sample xtτ+1 at diffusion step τ and conditioning information c to predict the original noise ε that was added to the clean data xt0+1. The
conditioning information c is composed of data from a lookback window of M steps, including: (1) historical excess returns for N assets, rt−(M−1):t ∈ RM×N ; (2) a set of sequences of asset-specific covariates for each asset, {zi,t−(M−1):t}N
i=1; and (3) a sequence of system
atic covariates, yt−(M−1):t. The network processes this information through a two-stage
hierarchical attention mechanism.
Stage 1: Asset-Specific Feature Infusion via Cross-Attention. The first stage performs asset-level attention, where the model extracts relevant features for each asset from its own historical data and asset-specific covariates. For each asset i, we form a query vector qi ∈ RD by embedding the concatenation of its noisy future return xτ
i,t+1 and the diffusion
step embedding. The corresponding key and value tensors, Ki, Vi ∈ RM×D, are formed by embedding the concatenated sequence of the asset’s historical returns ri,t−(M−1):t and
the corresponding asset-specific covariates zi,t−(M−1):t. A cross-attention layer then infuses these inputs into an asset-specific latent vector hi ∈ RD.
For the specific architecture of this layer, we adopt the attention structure proposed by [3] and define our CrossAttentionBlock as follows:
hi := CrossAttentionBlock(qi, Ki, Vi) = CA(qi, Ki, Vi)+MLP(LayerNorm(CA(qi, Ki, Vi))), (4.1) where the intermediate representation CA is computed using the standard scaled dotproduct cross-attention [35],
CA(qi, Ki, Vi) = softmax
(
 ̃qi  ̃Ki⊤
√D
)
 ̃Vi, where q ̃i = qiWq, K ̃ i = KiWK , and  ̃Vi = ViWV .
Here, the learnable weight matrices Wq, WK , WV ∈ RD×D perform a linear transformation to project the input tensors. This CrossAttentionBlock applies a layer normalization (LayerNorm) [2] and a multi-layer perceptron (MLP) to the intermediate representation with a residual connection. The MLP is composed of two layers with a Gaussian error linear unit (GELU) activation function. This attention block allows the model to learn how each asset’s
6

future return is influenced by its individual historical patterns and characteristics. Note that the embedding layers for returns and asset-specific covariates and the cross-attention layer share parameters across all N assets, promoting generalization and model efficiency.
Stage 2: Cross-Asset and Systematic Feature Integration via Self-Attention. The second stage performs market-level attention to model the cross-sectional dependencies among all assets and their exposure to market-level systematic features. The asset-specific latent vectors from the first stage, {hi}N
i=1, are stacked into a single tensor. This tensor is
then concatenated with {hj}N+Ny
j=N+1, the embeddings of the systematic covariates yt−(M−1):t,
to form an integrated tensor h ∈ R(N+Ny)×D. Here, Ny is the number of systematic covariates.
To facilitate interaction between these features, we apply a self-attention mechanism. We define a SelfAttentionBlock analogous to the one in the first stage as
h′ := SelfAttentionBlock(h) = SA(h) + MLP(LayerNorm(SA(h))), (4.2)
where the intermediate representation SA is computed using scaled dot-product selfattention,
SA(h) = softmax
( QK⊤
√D
)
V, where Q = hUQ, K = hUK , and V = hUV ,
and the MLP block is composed of two layers with a GELU activation function. Here, UQ, UK , UV ∈ RD×D are the learnable weight matrices to perform a linear transformation to project the input tensor h for the query, key, and value roles. This self-attention structure allows for an all-to-all interaction between asset-specific representations and systematic covariates. We then slice the first N vectors from the output tensor h′, each vector corresponding to each asset. These vectors are then passed-
 through a decoding layer, which shares parameters across all assets, to produce the final noise prediction εˆ = {εˆi}N
i=1.
In summary, the first stage infuses the information of historical returns and asset-specific covariates for each asset into the corresponding latent tensor through the CrossAttentionBlock. As each latent tensor is formed individually, this stage prevents asset-specific information from leaking across assets. The second stage employs the SelfAttentionBlock to model the interdependencies among assets in the market-level hierarchy. This self-attention allows for capturing the intricate cross-asset de-
pendencies while simultaneously accounting for their exposure to systematic covariates. This hierarchical approach, which effectively incorporates both asset-level and market-level features, makes the model particularly well-suited for financial time-series forecasting.
4.2 Correlation-Guided Attention Training
In financial applications, particularly for asset return data, the correlation structure among assets is of paramount importance. To guide the model to learn the correlation structure more precisely, we introduce a correlation-guided regularization, Lcorr, which acts on the attention probabilities in the SelfAttentionBlock of the market-level hierarchy. The total training objective is then a weighted sum of the standard conditional denoising loss and the correlation-guided regularizer defined as
LDiffolio = LDDPM-cond + λcorrLcorr, (4.3)
where LDDPM-cond is the mean squared error between the true and predicted noise as defined in (3.4), and λcorr is a hyperparameter balancing the two terms.
The correlation-guided regularizer Lcorr is designed to align the asset-to-asset submatrix of
the attention probability matrix, say A ∈ RN×N , with a robustly estimated target correla
tion matrix, ￿target
t ∈ RN×N . The alignment is achieved by minimizing the average of the
negative cosine similarities between the corresponding row vectors of the two matrices,
Lcorr = −CosineSimilarity(A, ￿target
t ) := − 1
N
N ∑
i=1
Ai · ￿target
i,t
∥Ai∥2∥￿target
i,t ∥2
, (4.4)
7

Stage 1 asset-level
Stage 2 market-level
h1
h2
hN
hN+1:N+Ny
yt− M−1 :t
εො
Diffusion step embedding for τ
h
xiτ,t+1
qi
Cross Attention Block
Ki, Vi
ri,t− M−1 :t
zi,t− M−1 :t
Embedding hi
Embedding
Embedding
Decoder
Cross
Attention LayerNorm Linear
CrossAttentionBlock
qi
Ki, Vi
Linear
GELU
Self Attention Block
h′
hi
h′1
h′2
h′N
Slicing
Self Attention Block
h′1
h′2
h′N
hN+1:N+Ny
′
MLP
LayerNorm Linear
SelfAttentionBlock
Linear
GELU
MLP Self Attention
A
A
Figure 1: The structure of the hierarchical attention denoising network of Diffolio.
Algorithm 1: Diffolio Training Process
for step from 1 to TrainingSteps do
x0 ← rt+1; c ← {rt−(M−1):t, {zi,t−(M−1):t}N
i=1, yt−(M−1):t}
τ ∼ Uniform({1, 2, · · · , T }) ε ∼ N (0, I)
xτ ← √α ̄τ x0 + √1 − α ̄τ ε
εˆ, A ← εθ(xτ , τ, c) ▷ Hierarchical Attention Denoising Network
Σtarget
t ← Ledoit-Wolf Shrinkage(rt−(M−1):t, ￿train)
LDDPM-cond ← ∥ε − εˆ∥2
Lcorr ← −CosineSimilarity(A, ￿target
t)
LDiffolio ← LDDPM-cond + λcorrLcorr ▷ Calculate losses
Take a gradient descent step on ∇θLDiffolio end
where Ai and ￿target
i,t are the i-th row vectors of matrices A and ￿target
t , respectively.
An important consideration is the stable estimation of the time-varying target correlation
matrix ￿target
t . While it is crucial to use the most recent information to reflect the time
varying asset correlations, estimating the sample correlation matrix from only the recent input window (M steps) is prone to be unstable and can result in near-singular matrices, especially when M is not much larger than N . To mitigate this, we employ the Ledoit-Wolf shrinkage estimator [23]. This method provides a robust estimate of covariance matrix by shrinking an unstable sample covariance matrix towards a stable one. In our experiments, the sample covariance is calculated from the recent win-
dow of rt−(M−1):t, and we use the co
variance matrix pre-computed from the entire training period, ￿train, as the stable one. From this robust covariance estimate, we derive our well-conditioned and economically meaningful
target correlation matrix ￿target
t , which provides a stable guide for the self-attention.
The overall structure of the hierarchical attention denoising network and its training process are presented in Figure 1, and Algorithm 1, respectively. For inference, we employ the deterministic DDIM sampling procedure described in Section 3.3, which allows for efficient generation of return samples in a reduced number of steps.
8

5 Experiments
5.1 Experimental Setup
Datasets. In this study, we forecast the one-day-ahead daily excess returns of 12 industry
portfolios (N = 12), which serve as our target assets3. The use of industry portfolios allows for a purer signal by diversifying away asset-specific idiosyncratic risks. Moreover, this approach enables the stock market to be represented by a manageable number of distinct industries [8]. The total dataset spans from 1958 to 2023 (16,613 trading days). We partition this data into a training set (1958-1999), a validation set (2000-2004), and a test set (20052023). The constituents of these industry p-
ortfolios are determined from stocks listed on the NYSE, AMEX, and NASDAQ based on their four-digit SIC codes. A detailed list and description of these industries are provided in A.
For the model’s covariates, we employ asset characteristics as the asset-specific variables and macroeconomic variables as the systematic variables, both of which are widely used in machine learning-based financial applications (see, e.g., [13]). Specifically, we use a set of ten asset characteristics. To enhance the reproducibility and accessibility of our methodology, we select characteristics that can be constructed from the historical return and market data, such as momentum and volatility, wh-
ile excluding those that rely on data that is not freely available such as from accounting databases. This choice is also supported by the empirical literature, as notable studies [27, 13, 5] have documented that return-based predictors are often more significant in forecasting asset returns than accounting-based variables. These characteristics include mom1m, mom6m, mom12m, mom36m, chmom, retvol, maxret, beta, betasq, and idiovol.
For the systematic covariates, we employ eight macroeconomic variables known for their
predictive power for stock returns as identified by [37]4. These variables are tbl, d/p, e/p, b/m, tms, dfy, ntis, and svar. Since these are provided at a monthly frequency, we fill the daily values using the most recently available monthly observation. All covariates are normalized using the mean and standard deviation of the entire training set. The detailed definitions and descriptions for all covariates are given in A.
Evaluation Metrics. To reflect the two primary objectives of Diffolio–achieving accurate probabilistic forecasts and ensuring strong economic performance–we assess the performance of Diffolio across two perspectives: statistical forecasting accuracy, and portfolio performance. For all metrics requiring an empirical estimation of the predictive distribution, we generate 100 forecast samples from the model and then use them for computing metrics.
First, to measure the accuracy of the forecasted distributions, we use two proper scoring rules [11]: the continuous ranked probability score (CRPS) and the energy score (ES). The CRPS is a widely adopted metric that measures the discrepancy between the forecasted distribution and the ground truth observation [10]. As the CRPS is defined for univariate distributions, we apply it to each asset’s marginal distribution to assess their individual forecast quality. To evaluate the multivariate joint di-
stribution across all assets, we utilize the ES, which generalizes the CRPS to multi-dimensions. As a multivariate metric, the ES can somewhat capture the dependency structure among assets. For both metrics, lower values indicate a more accurate forecast.
Second, we assess the economic performance of the forecasts through portfolio experiments based on the forecast samples generated by Diffolio. We construct daily rebalanced long-only portfolios using two optimization strategies: the mean-variance tangency portfolio (MVP), which relies on the first and second moments to maximize the Sharpe ratio (SR), and the
growth-optimal portfolio (GOP)5, which maximizes the expected logarithmic utility, thereby implicitly accounting for the entire predictive distribution. By rebalancing the portfolios daily, the accuracy of the distributional forecast at each time step is directly compounded
3The data is sourced from Kenneth R. French’s data library: https://mba.tuck.dartmouth.edu/
pages/faculty/ken.french/data_library.html. 4The data is obtained from Amit Goyal’s website: https://sites.google.com/view/agoyal145. 5Here we consider the no-leverage GOP, that is, without short-selling the risk-free asset.
9

into the investment results, allowing the overall portfolio performance to serve as an integrated measure of the model’s ability to forecast time-varying distributions. To evaluate the portfolios, we focus on the annualized SR as the primary metric for the MVP and the annualized certainty equivalent (CE) for the GOP. While the GOP maximizes expected logarithmic utility, this value lacks a direct financial interpretation. The CE translates this abstract utility into an intuitive financial metric; -
it represents the return from a certain (risk-free) investment that would yield the same level of utility as the uncertain portfolio investment.
These portfolio-based evaluations not only offer a crucial economic perspective but also implicitly measure the consistency of a model’s performance unlike the static metrics such as CRPS and ES. If a model’s forecasting performance is inconsistent over time, the resulting portfolio returns will also be erratic, leading to higher volatility and, consequently, lower
SR and CE values6. Therefore, SR and CE are important because they inherently measure the consistency of a model’s performance over time, while also depending on both forecast accuracy and the modeling of cross-sectional correlations. Higher values indicate better performance for SR and CE. For a comprehensive view, we also report other summary statistics: annualized return (Ret), annualized volatility (Vol), and maximum drawdown (MDD).
These evaluation metrics described so far are centered on the core objectives of Diffolio, achieving accurate probabilistic forecasts and strong economic performance. Separately from this primary concern, we use the correlation score (CorrScore) as a supplementary diagnostic tool to assess how well the model reproduces the dependency structure among assets. Because this score measures neither predictive accuracy nor economic significance, it serves a supplementary role, helping to verify the cross-
-sectional correspondence of the generated synthetic data. The score is calculated as the Frobenius norm of the difference between the correlation matrices of the real data and mean of synthetic data, where a smaller score indicates closer correspondence. Detailed descriptions on evaluation metrics, summary statistics, and scores are provided in B.
Baselines. For a comprehensive evaluation, we compare Diffolio against six models for multivariate probabilistic time-series forecasting: TimeGAN [40], TimeGrad [28], CSDI [33], Diffusion-TS [41], MG-TSD [9] , and SigCWGAN [24]. This selection comprises a widely-recognized time-series generative model (TimeGAN), several prominent diffusionbased models (TimeGrad, CSDI, Diffusion-TS, MG-TSD), and a model tailored for asset return forecasting (SigCWGAN).
These models are employed for forecasting through conditional generation where future timeseries distributions are predicted based on historical observations. A distinctive feature of our proposed Diffolio is its architecture, particularly designed to incorporate both assetspecific covariates, and systematic covariates. Since the baseline models were not originally designed to accommodate such covariates, we implement and evaluate two versions of each to ensure a fair comparison. We denote the ori-
ginal version using only historical data as (H), and the modified version that includes the additional covariates as (H+C) (e.g., TimeGAN (H) and TimeGAN (H+C)).
The method of incorporating covariates is tailored to each baseline model, targeting the architectural component directly responsible for generating the predictive output. Specifically, for models that utilize a latent space embedding for prediction–TimeGAN, TimeGrad, and MG-TSD–we concatenate the covariate vector with their latent embeddings. For DiffusionTS, covariates were concatenated directly to the historical input data. In SigCWGAN, they were appended to the signature of the historical path-
, and for CSDI, they were integrated as side information following its prescribed mechanism for auxiliary features.
Implementation Details. We select the optimal hyperparameters based on the configuration that achieves the lowest ES on the validation set. This metric was chosen because, as a multivariate generalization of the CRPS, it provides a balanced evaluation of probabilistic accuracy while also somewhat reflecting cross-sectional dependencies. To be specific, we set
6SR decreases with higher volatility by definition. For CE, due to the concavity of the logarithmic
utility function, its expected value decreases as the volatility of portfolio returns increases.
10

2023-01 2023-04 2023-07 2023-10 Date
0.02
0.00
0.02
Return
NoDur
2023-01 2023-04 2023-07 2023-10 Date
0.05
0.00
0.05
Return
Durbl
2023-01 2023-04 2023-07 2023-10 Date
0.02
0.00
0.02
Return
Manuf
2023-01 2023-04 2023-07 2023-10 Date
0.050
0.025
0.000
0.025
0.050
Return
Enrgy
2023-01 2023-04 2023-07 2023-10 Date
0.02
0.00
0.02
Return
Chems
2023-01 2023-04 2023-07 2023-10 Date
0.02
0.00
0.02
0.04
Return
BusEq
2023-01 2023-04 2023-07 2023-10 Date
0.02
0.00
0.02
0.04
Return
Telcm
2023-01 2023-04 2023-07 2023-10 Date
0.04
0.02
0.00
0.02
0.04
Return
Utils
2023-01 2023-04 2023-07 2023-10 Date
0.02
0.00
0.02
Return
Shops
2023-01 2023-04 2023-07 2023-10 Date
0.02
0.00
0.02
Return
Hlth
2023-01 2023-04 2023-07 2023-10 Date
0.04
0.02
0.00
0.02
Return
Money
2023-01 2023-04 2023-07 2023-10 Date
0.02
0.00
0.02
Return
Other
10 90% Quantile True Returns Prediction Median Prediction Mean
Figure 2: Example of predicted excess returns for 12 assets in 2023 generated by Diffolio.
The plot shows the mean, median, and the 10%-90% quantile range from 100 generated
sample paths, along with the ground truth.
the input window size to 63, which corresponds to one quarter of trading days, to provide the model with sufficient historical context for capturing asset dynamics. The model architecture is further composed of a hidden dimension of 128 and 4 heads for all attention blocks, and the MLP within each attention block has a hidden dimension of 512. All embedding and decoding layers are implemented as linear layers. We set the total diffusion time steps to T = 1, 000 with a linear noise schedule ranging-
 from 10−4 to 0.02 as in [15]. A 32-dimensional sinusoidal positional embedding is used to encode each step. We train the model for a total of 100,000 steps using the AdamW optimizer and a batch size of 1024. The learning rate is set to a maximum value of 10−4 with a linear warmup for the first 1,000 steps followed by a cosine decay schedule for the remaining steps. The coefficient for the correlation-guided regularizer, λcorr, is set to 0.05. During inference, we use 50 steps for the DDIM samplin-
g process.
We keep the experimental setup for the baseline models consistent with Diffolio wherever applicable. We employ the same AdamW optimizer, a batch size of 1024, an input window size of 63, and the learning rate schedule. For all diffusion-based baselines, we utilize the same 32-dimensional sinusoidal embedding for the diffusion time steps. Consistent with the hyperparameter selection for Diffolio, the optimal values for key model-specific hyperparameters of each baseline are chosen from their respec-
tive search spaces to minimize the ES on the validation set. Detailed descriptions of the search spaces for Diffolio and the baselines are available in C.
5.2 Forecasting Performance
We begin with a qualitative figure of the generated forecast samples. As an illustrative example, Figure 2 shows the predicted excess returns for 12 assets during 2023, the most recent year of the test period. For each asset, the figure displays the mean, median, and the 10%-90% quantile range derived from 100 generated sample paths, plotted alongside the ground truth. Visually, the variation in the forecasts generated by Diffolio appears consistent with that of the actual data. Furthermore, the m-
ean and median of the predictions, while exhibiting less volatility than the true values, seem to capture the general directional movements of the market.
For a quantitative analysis, we summarize the performance of Diffolio and the baseline models across the entire test period in Table 1. The table presents four primary metrics:
11

Table 1: Comparison of evaluation metrics for Diffolio and the baselines models. CRPS is
reported as the mean (± standard deviation) calculated marginally for each of the 12 assets.
Lower values are better for CRPS, and ES, while higher values are better for MVP-SR and
GOP-CE. For each evaluation metric, the best result is shown in bold and the second-best
is underlined.
Model CRPS ES MVP-SR GOP-CE
TimeGAN (H) 0.009421 (± 0.002538) 0.038188 0.4080 0.0729
TimeGAN (H+C) 0.009544 (± 0.002004) 0.038601 0.3732 0.0527
TimeGrad (H) 0.007329 (± 0.001770) 0.029622 0.4312 0.0450
TimeGrad (H+C) 0.007363 (± 0.001754) 0.029721 0.4721 0.0527
CSDI (H) 0.007377 (± 0.001712) 0.029701 0.4886 0.0606
CSDI (H+C) 0.007409 (± 0.001667) 0.029903 0.3694 0.0367
Diffusion-TS (H) 0.007159 (± 0.001616) 0.029034 0.4565 0.1124
Diffusion-TS (H+C) 0.007343 (± 0.001739) 0.029854 0.2932 0.0533
MG-TSD (H) 0.007214 (± 0.001640) 0.029027 0.4155 0.1011
MG-TSD (H+C) 0.007244 (± 0.001627) 0.029157 0.4805 0.0826
SigCWGAN (H) 0.007213 (± 0.001624) 0.029132 0.4196 0.0720
SigCWGAN (H+C) 0.007338 (± 0.001686) 0.029534 0.3782 0.0993
Diffolio (Ours) 0.007169 (± 0.001601) 0.028960 0.7206 0.1611
CRPS for marginal accuracy, ES for multivariate accuracy, and MVP-SR and GOP-CE for portfolio performance.
The results show that Diffolio achieves superior performance across all metrics with the sole exception of CRPS, where it ranks as the second-best. Notably, the difference in CRPS between Diffolio and the top-performing model, Diffusion-TS (H), is slight, especially when compared to the gap between Diffolio and the third-best model, SigCWGAN (H). It is also worth noting that Diffolio exhibits the lowest standard deviation in CRPS across the 12 assets, which suggests a more robust forecasting capab-
ility across individual assets.
In contrast, for the metrics evaluating multivariate accuracy, Diffolio demonstrates a clear advantage. It achieves the best ES, indicating its effectiveness in capturing the joint distribution of multi-asset excess returns. This superior performance in modeling cross-sectional dependencies is further corroborated by the CorrScore. Figure 3 illustrates the CorrScores of each model, and shows that Diffolio drastically outperforms all baselines. We attribute this strong capability to three key desig-
n choices: (1) the hierarchical design for effectively incorporating covariates known to reflect cross-sectional dynamics; (2) the correlation-guided regularizer, Lcorr in (4.4), that guides the model to better learn the cross-asset dependency using a stable correlation matrix estimated via the Ledoit-Wolf shrinkage method; and (3) the self-attention mechanism adept at capturing cross-asset relationships. The results in Table 1 and Figure 3 indirectly highlight the effectiveness of our architectur-
al design. For many baseline models, the version trained only on historical data (H) often outperforms the version trained with both historical data and covariates (H+C), suggesting their model designs may not be suitable for effectively processing such information. To visually substantiate our model’s ability to capture the dependency structure, we present Figure 4 which compares the unconditional correlation matrices of the real data and Diffolio’s mean synthetic data, both estimated over the en-
tire test period. The figure clearly shows that our
12

01234567 CorrScore
TimeGAN (H)
TimeGAN (H+C)
TimeGrad (H)
TimeGrad (H+C)
CSDI (H)
CSDI (H+C)
Diffusion-TS (H)
Diffusion-TS (H+C)
MG-TSD (H)
MG-TSD (H+C)
SigCWGAN (H)
SigCWGAN (H+C)
Diffolio (Ours)
Model
3.0991
3.1025
6.6886
6.7158
5.6606
7.2040
2.0170
2.3362
2.7654
6.0587
1.5586
1.4706
1.0808
Figure 3: Comparison of CorrScores for Diffolio and the baselines. A lower CorrScore
indicates a better result.
00
00
00 0 0 0 0 0 0 0 0 0 0 0 0
0 00 0 0 0 0 0 0 0 0 0 0 0 0
0 0 00 0 0 0 0 0 0 0 0 0 0
0 0 0 00 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 00 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 00 0 0 0 0 0 0
0 0 0 0 0 0 0 0 00 0 0 0 0 0
0 0 0 0 0 0 0 0 0 00 0 0 0 0
0 0 0 0 0 0 0 0 0 00 0 0 0
0 0 0 0 0 0 0 0 0 00 0 0
0 0 0 0 0 0 0 0 0 0 00 0
0 0 0 0 0 0 0 0 0 0 0 0 00
00
00
00 0 0 0 0 0 0 0 0 0 0 0 0
0 00 0 0 0 0 0 0 0 0 0 0
0 0 00 0 0 0 0 0 0 0 0 0
0 0 0 00 0 0 0 0 0 0 0 0
0 0 0 0 00 0 0 0 0 0 0 0 0
0 0 0 0 0 00 0 0 0 0 0 0
0 0 0 0 0 0 00 0 0 0 0 0
0 0 0 0 0 0 0 0 0 00 0 0 0 0 0
0 0 0 0 0 0 0 0 00 0 0 0
0 0 0 0 0 0 0 0 0 0 00 0 0
0 0 0 0 0 0 0 0 0 0 00 0
0 0 0 0 0 0 0 0 0 0 0 00 00
0
00
0
0 00
0
00
0
00
00
0
00
0
0 00
0
00
0
00
Figure 4: Comparison of correlation matrices estimated via samples from real data (left)
and the mean sample path of Diffolio’s synthetic data (right).
proposed Diffolio accurately reproduces the complex dependency structure among assets. We analyze the impacts of the correlation-guided regularizer and covariates in further detail in the subsequent ablation study.
Beyond statistical accuracy, we now evaluate the economic significance of the forecasts. While CRPS and ES, as well as CorrScore, provide valuable insights, they are typically calculated as static averages over the entire test period. The evaluation based on daily rebalanced portfolios compounds the accuracy of the predicted time-varying joint distribution at each time step, and thus offers a more dynamic and integrated assessment.
Table 2 provides a comprehensive summary of the MVP and GOP strategies, including SR, Ret, Vol, MDD, and CE. For a chronological perspective, Figures 5 and 6 illustrate the cumulative returns of these portfolios, respectively, benchmarked against baseline models and a market portfolio. The market portfolio, proxied by the value-weighted return on all U.S. stocks listed on the NYSE, AMEX, or NASDAQ in our experiment, serves as a formidable benchmark. Grounded in modern portfolio theory, it represen-
ts the fully
13

Table 2: Comprehensive portfolio performance for the MVP and GOP strategies. All re
ported evaluation metrics and summary statistics are annualized. For each primary evalu
ation metric, MVP-SR and GOP-CE, higher values indicate better performance, and the
best result is shown in bold with the second-best underlined. As the remaining summary
statistics serve as supplements to the analysis, they are not highlighted.
MVP GOP
Model SR Ret Vol MDD SR Ret Vol MDD CE
TimeGAN (H) 0.4080 0.0872 0.2138 -0.6409 0.4747 0.0873 0.1840 -0.5264 0.0729
TimeGAN (H+C) 0.3732 0.0793 0.2124 -0.6401 0.3839 0.0663 0.1728 -0.4062 0.0527
TimeGrad (H) 0.4312 0.0872 0.2023 -0.5705 0.3075 0.0704 0.2290 -0.6443 0.0450
TimeGrad (H+C) 0.4721 0.0915 0.1938 -0.4648 0.3349 0.0799 0.2385 -0.4623 0.0527
CSDI (H) 0.4886 0.0955 0.1955 -0.5086 0.3724 0.0848 0.2278 -0.5701 0.0606
CSDI (H+C) 0.3694 0.0740 0.2003 -0.6083 0.2692 0.0657 0.2440 -0.5993 0.0367
Diffusion-TS (H) 0.4565 0.0950 0.2082 -0.4974 0.5960 0.1305 0.2189 -0.4344 0.1124
Diffusion-TS (H+C) 0.2932 0.0654 0.2229 -0.7072 0.3433 0.0773 0.2252 -0.6783 0.0533
MG-TSD (H) 0.4155 0.0969 0.2331 -0.5965 0.5239 0.1246 0.2378 -0.6139 0.1011
MG-TSD (H+C) 0.4805 0.0983 0.2045 -0.5113 0.4494 0.1088 0.2422 -0.6696 0.0826
SigCWGAN (H) 0.4196 0.1040 0.2479 -0.6636 0.4012 0.1018 0.2537 -0.6703 0.0720
SigCWGAN (H+C) 0.3782 0.0794 0.2100 -0.5817 0.5163 0.1235 0.2391 -0.6041 0.0993
Market 0.5119 0.1012 0.1977 -0.5565 0.5119 0.1012 0.1977 -0.5565 0.0850
Diffolio (Ours) 0.7206 0.1680 0.2332 -0.5577 0.7042 0.1833 0.2602 -0.4882 0.1611
2 2 2 2 2 2 2 2 2 2 2 22 2 2
'
("(! ' ) * && '(%#
C
$! $ " " "% "%
(& $# (& $#
%'
Figure 5: Cumulative excess returns of the MVP for Diffolio, baseline models, and the
market benchmark. The returns are plotted on a logarithmic scale.
14

2 2 2 2 2 2 2 2 2 2 2 22 2 2
'
("(! ' ) * && '(%#
C
$! $ " " "% "%
(& $# (& $#
%'
Figure 6: Cumulative excess returns of the GOP for Diffolio, baseline models, and the
market benchmark. The returns are plotted on a logarithmic scale.
diversified portfolio, which in principle cancels out the idiosyncratic risks of individual assets and thus contains only systematic risk. As such, consistently outperforming this highly efficient benchmark is known to be challenging.
As shown in the MVP cumulative return plot in Figure 5, Diffolio’s performance is comparable to the market until 2018, after which it begins to significantly outperform all other models and the market. Notably, from 2022 onwards, Diffolio is the only model to outperform the market benchmark in terms of cumulative return. The GOP cumulative return presented in Figure 6 shows an even more pronounced result, with Diffolio consistently and substantially outperforming all other methods and the market f-
rom mid-2010 onwards.
While cumulative return is an important indicator, a higher return often comes with increased risk. A more informative metric is the SR, which measures the excess return earned per unit of risk. In both MVP and GOP experiments, Diffolio achieves the highest SR, indicating that its forecasting ability allows for the construction of portfolios with superior risk-adjusted performance. Similarly, for the GOP strategy, which maximizes an investor’s expected logarithmic utility, we focus on the CE. The -
CE translates the abstract concept of utility into an intuitive financial value: the guaranteed risk-free return an investor would consider equivalent to the uncertain portfolio outcome. Diffolio has the highest CE value of 0.1611, meaning that for a growth-oriented risk-averse investor, this uncertain portfolio strategy yields a utility equivalent to an investment that guarantees a risk-free annual return of 16.11%.
Moreover, a closer look at the cumulative return plots reveals the robustness of our model’s performance over time. Unlike several baseline models that exhibit volatile performancefluctuating between outperforming and underperforming the market–Diffolio consistently maintains a strong performance relative to the market benchmark without experiencing significant periods of underperformance. Diffolio’s robust performance contrasts with that of models like Diffusion-TS (H) and MG-TSD (H), which, desp-
ite their strong results on static metrics like CRPS and ES, show erratic portfolio performance. This inconsistency amplifies their volatility and thus leads to lower risk-adjusted metrics like SR and CE.
To further investigate this robustness over time, we present the evolution of the evaluation metrics in Figure 7. Each metric is calculated each year on a 3-year rolling window to ensure a stable assessment, as portfolio performance can be distorted when evaluated over too short a period. While Diffolio’s statistical forecasting accuracy, CRPS and ES, shows a brief
15

2 2 2 2 2 2 2 2 2 2 22 "+%*!
2
'."
2 2 2 2 2 2 2 2 2 2 22 "+%*!
2
'."
2 2 2 2 2 2 2 2 2 2 22 "+%*!
'."
"+%*!
'."
*!"',
%##*'%*
%("
%("
%(" + !
%(" + !
%##.,%*)
%##.,%*)
%$
%$
+&"
Figure 7: The evolution of evaluation metrics over time for Diffolio and baseline models.
For a stable assessment, metrics are calculated each year based on a 3-year rolling window.
Lower values are better for CRPS, and ES, while higher values are better for MVP-SR and
GOP-CE.
period of weaker performance in the mid-to-late 2010s, it remains strong overall. Diffolio’ s robustness appears to be evident particularly during crises, where it demonstrates superior performance, such as during the 2008 global financial crisis and the 2020 COVID-19 pandemic. In terms of portfolio-based metrics, both MVP-SR and GOP-CE consistently remain comparable to or outperform the market. The MVP-SR shows particularly outstanding performance from the late 2010s onwards, and the GOP-CE exhib-
its significant outperformance around the 2008 global financial crisis and again in the post-pandemic era. This consistent strength contrasts sharply with most baseline models, which exhibit significant fluctuations. For instance, MG-TSD (H) temporarily led in MVP-SR during 2012-2014, but it subsequently underperformed the market in the next period and delivered the worst performance in the period that followed. Similarly, while several baselines showed strong GOP-CE results in 2019-2021, their pe-
rformance was followed by a sharp decline in the subsequent period, falling below Diffolio’s. In the following periods, most of these models significantly underperformed Diffolio and the market. This is a critical distinction from the perspective of risk-averse portfolio management: in contrast with the fluctuating baselines, Diffolio’s consistency in delivering robust results demonstrates a reliable and outstanding efficiency.
In summary, Diffolio’s superior ability to consistently capture the time-varying dynamics allows for the construction of more stable and efficient portfolios, leading to an outstanding risk-adjusted performance that is both economically and practically meaningful.
5.3 Ablation Study
We conduct an ablation study to investigate the individual contributions of Diffolio’s methodological components. We evaluate several configurations where specific components are individually removed or altered while holding all other hyperparameters unchanged: (1) without correlation-guided regularizer Lcorr, where the regularizer is removed (i.e., λcorr = 0); (2) without Ledoit-Wolf Shrinkage, where the regularizer’s target correlation matrix is computed using a simple sample-based estimate over-
 a 63-day window instead of the Ledoit-Wolf shrinkage estimator; (3) without asset-specific covariates, where all asset characteristics are replaced with zeros; (4) without systematic covariates, where all macroeconomic variables are replaced with zeros; and (5) without both covariates, where both types of covariates are replaced with zeros. The results are summarized in Table 3. Since this ablation study involves an investigation into the influence of the correlation-guided regularizer, we presen-
t the
16

Table 3: Ablation study of the Diffolio model. Each row shows the evaluation metrics after
removing or altering a specific component. For CRPS, ES, and CorrScore, lower values
are better. For MVP-SR and GOP-CE, higher values are better. The top row shows the
performance of the full Diffolio model for reference.
Evaluation Metrics Supplementary Diagnostic
Model Configuration CRPS ES MVP-SR GOP-CE CorrScore
Diffolio 0.007169 (± 0.001601) 0.028960 0.7206 0.1611 1.0808
w/o Correlation-Guided Regularizer Lcorr 0.007128 (± 0.001617) 0.028852 0.6232 0.1391 3.9200 w/o Ledoit-Wolf Shrinkage for Lcorr 0.007179 (± 0.001639) 0.029108 0.5678 0.1155 5.5998 w/o Asset-specific Covariates 0.007191 (± 0.001658) 0.029891 0.5374 0.0593 6.3558 w/o Systematic Covariates 0.007167 (± 0.001666) 0.029827 0.5970 0.0465 8.1487 w/o Both Covariates 0.007245 (± 0.001682) 0.030153 0.4991 0.0691 7.4334
CorrScore alongside the evaluation metrics to specifically observe its impact on capturing cross-sectional dependencies.
Interestingly, removing the correlation-guided regularizer Lcorr leads to an improvement in the metrics for the statistical predictive accuracy, CRPS and ES. However, this comes at the cost of a marked deterioration in the CorrScore and a noticeable drop in both portfolio performance metrics, MVP-SR and GOP-CE. This result appears to suggest a trade-off: the use of the correlation-guided regularizer involves trading a modest loss in statistical predictive accuracy for a considerable gain in captur-
ing cross-sectional dependencies, which is essential for constructing efficient multi-asset portfolios. The resulting improvement in portfolio performance underscores the economic significance of accurately modeling these dependencies in financial time-series.
The importance of a stable target for the regularizer is also evident. When the Ledoit-Wolf estimator is replaced with a sample-based correlation estimate, performance degrades across all metrics–even more so than when removing the regularizer entirely. This suggests that guiding the model with a noisy and unstable target correlation matrix can be rather detrimental to learning cross-sectional dependencies, emphasizing the need for careful selection of the target matrix.
The ablation study on the covariates elucidates their respective effects. Zeroing the influence of asset characteristics leads to a broad degradation across all metrics, demonstrating their importance in modeling both individual asset dynamics and their cross-sectional dependencies. On the other hand, zeroing macroeconomic variables shows an asymmetric effect; while the impact on the marginal predictive accuracy, CRPS, seems almost negligible, the performance on metrics sensitive to cross-sectiona-
l dependency, such as ES, MVP-SR, GOP-CE, and CorrScore, worsens considerably. This suggests that macroeconomic variables play a crucial role in capturing the dependencies among assets. Furthermore, removing the influence of both covariates results in a more significant performance deterioration in forecasting accuracy. These results demonstrate that both the asset-specific and systematic covariates in our experiments contain significant information about the time-varying joint distribution of ass-
et returns and, thus, our hierarchical attention network for leveraging both asset-specific and systematic information is essential for modeling multivariate financial time-series data.
6 Conclusion
In this paper, we propose Diffolio, a diffusion-based model for multivariate probabilistic financial time-series forecasting and portfolio construction. Diffolio incorporates a two-stage hierarchical attention architecture with separate asset-level and market-level layers. The first stage, asset-level attention, extracts salient features for each asset from its own historical data and asset-specific covariates, and the second stage, market-level attention, then models the cross-sectional dependenc-
ies across all assets and their exposure to systematic covariates.
17

To further improve the learning of these dependencies, we introduce a correlation-guided regularizer that employs a stable target correlation matrix estimated via the Ledoit-Wolf shrinkage method.
Experiments on 12 industry portfolios show that Diffolio achieves strong performance not only in terms of statistical probabilistic forecasting accuracy but also portfolio performance. In particular, portfolios constructed from Diffolio’s forecasts deliver superior risk-adjusted performance, achieving a Sharpe ratio of 0.7206–over 40% higher than the baseline models and the market–and a certainty equivalent of 0.1611, which implies a utility equivalent to a guaranteed 16.11% risk-free annual retur-
n. Moreover, in clear contrast to the fluctuating results of the baseline models, Diffolio exhibits consistency by matching or outperforming the market benchmark. These findings, also supported by the ablation studies, demonstrate that the effectiveness of our proposed Diffolio goes beyond multivariate time-series forecasting to enable the practical decision-making of constructing efficient portfolios.
For future work, our proposed Diffolio could be extended to a broader range of asset classes, including commodities and cryptocurrencies. This would allow for the construction of more highly diversified portfolios, potentially further reducing portfolio risk and enhancing riskadjusted returns across various market environments. Another promising application is the integration of its probabilistic forecasting capabilities with a deep reinforcement learningbased portfolio optimization methodologies.-
 This could lead to an end-to-end portfolio optimization framework overcoming the limitations of traditional optimization methods.
CRediT authorship contribution statement
So-Yoon Cho: Conceptualization, Software, Investigation, Writing - Original Draft. JinYoung Kim: Conceptualization, Methodology, Software. Kayoung Ban: Validation, Writing - Review & Editing. Hyeng Keun Koo: Conceptualization, Writing - Review & Editing, Supervision. Hyun-Gyoon Kim: Conceptualization, Methodology, Writing Original Draft.
Declaration of competing interests
The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.
Declaration of generative AI and AI-assisted technologies in the
writing process
During the preparation of this work the authors used Gemini in order to improve the grammatical quality and readability. After using this service, the authors reviewed and edited the content as needed and take full responsibility for the content of the publication.
Acknowledgement
So-Yoon Cho is supported by the National Research Foundation of Korea (NRF), South Korea grant funded by the Korea government (MSIT) (RS-2025-02216235). Kayoung Ban is supported by the KIAS Individual Grant. No. PG097601. Hyun-Gyoon Kim is supported by the National Research Foundation of Korea (NRF) grant funded by the Korea government (MSIT) (RS-2025-00513038), and by Institute of Information & communications Technology Planning & Evaluation (IITP) under the Artificial Intelligence Convergence In-
novation Human Resources Development (IITP-2025-RS-2023-00255968) grant funded by the Korea government (MSIT).
18

Data availability
Data will be made available on request.
References
[1] Alcaraz, J.M.L., Strodthoff, N.: Diffusion-based time series imputation and forecasting with structured state space models. arXiv preprint arXiv:2208.09399 (2022)
[2] Ba, J.L., Kiros, J.R., Hinton, G.E.: Layer normalization. arXiv preprint arXiv:1607.06450 (2016)
[3] Bolya, D., Huang, P.Y., Sun, P., Cho, J.H., Madotto, A., Wei, C., Ma, T., Zhi, J., Rajasegaran, J., Rasheed, H., et al.: Perception encoder: The best visual embeddings are not at the output of the network. arXiv preprint arXiv:2504.13181 (2025)
[4] Campbell, J.Y., Shiller, R.J.: The dividend-price ratio and expectations of future dividends and discount factors. The review of financial studies 1(3), 195–228 (1988)
[5] Chen, L., Pelger, M., Zhu, J.: Deep learning in asset pricing. Management Science 70(2), 714–750 (2024)
[6] Cong, L.W., Tang, K., Wang, J., Zhang, Y.: Alphaportfolio: Direct construction through deep reinforcement learning and interpretable ai. Available at SSRN 3554486 (2021)
[7] Duan, Y., Wang, L., Zhang, Q., Li, J.: Factorvae: A probabilistic dynamic factor model based on variational autoencoder for predicting cross-sectional stock returns. In: Proceedings of the AAAI conference on artificial intelligence. vol. 36, pp. 4468–4476 (2022)
[8] Fama, E.F., French, K.R.: Industry costs of equity. Journal of financial economics 43(2), 153–193 (1997)
[9] Fan, X., Wu, Y., Xu, C., Huang, Y., Liu, W., Bian, J.: Mg-tsd: Multi-granularity time series diffusion models with guided learning process. arXiv preprint arXiv:2403.05751 (2024)
[10] Gneiting, T., Katzfuss, M.: Probabilistic forecasting. Annual Review of Statistics and Its Application 1(1), 125–151 (2014)
[11] Gneiting, T., Raftery, A.E.: Strictly proper scoring rules, prediction, and estimation. Journal of the American statistical Association 102(477), 359–378 (2007)
[12] Goodfellow, I.J., Pouget-Abadie, J., Mirza, M., Xu, B., Warde-Farley, D., Ozair, S., Courville, A., Bengio, Y.: Generative adversarial nets. Advances in neural information processing systems 27 (2014)
[13] Gu, S., Kelly, B., Xiu, D.: Empirical asset pricing via machine learning. The Review of Financial Studies 33(5), 2223–2273 (2020)
[14] Gu, S., Kelly, B., Xiu, D.: Autoencoder asset pricing models. Journal of Econometrics 222(1), 429–450 (2021)
[15] Ho, J., Jain, A., Abbeel, P.: Denoising diffusion probabilistic models. Advances in neural information processing systems 33, 6840–6851 (2020)
[16] Huang, H., Chen, M., Qiao, X.: Generative learning for financial time series with irregular and scale-invariant patterns. In: The Twelfth International Conference on Learning Representations (2024)
[17] Kelly, B.T., Pruitt, S., Su, Y.: Characteristics are covariances: A unified model of risk and return. Journal of Financial Economics 134(3), 501–524 (2019)
19

[18] Kim, J.Y., Cho, S.B.: Explainable prediction of electric energy demand using a deep autoencoder with interpretable latent space. Expert Systems with Applications 186, 115842 (2021)
[19] Kim, J.Y., Cho, S.B.: Predicting residential energy consumption by explainable deep learning with long-term and short-term latent variables. Cybernetics and Systems 54(3), 270–285 (2023)
[20] Kingma, D.P., Welling, M.: Auto-encoding variational bayes. arXiv preprint arXiv:1312.6114 (2013)
[21] Kollovieh, M., Ansari, A.F., Bohlke-Schneider, M., Zschiegner, J., Wang, H., Wang, Y.B.: Predict, refine, synthesize: Self-guiding diffusion models for probabilistic time series forecasting. Advances in Neural Information Processing Systems 36, 28341–28364 (2023)
[22] Kong, Z., Ping, W., Huang, J., Zhao, K., Catanzaro, B.: Diffwave: A versatile diffusion model for audio synthesis. arXiv preprint arXiv:2009.09761 (2020)
[23] Ledoit, O., Wolf, M.: Improved estimation of the covariance matrix of stock returns with an application to portfolio selection. Journal of empirical finance 10(5), 603–621 (2003)
[24] Liao, S., Ni, H., Sabate-Vidales, M., Szpruch, L., Wiese, M., Xiao, B.: Sig-Wasserstein GANs for conditional time series generation. Mathematical Finance 34(2), 622–670 (2024)
[25] Lipman, Y., Chen, R.T., Ben-Hamu, H., Nickel, M., Le, M.: Flow matching for generative modeling. In: 11th International Conference on Learning Representations, ICLR 2023 (2023)
[26] Markowitz, H.: Portfolio selection. The Journal of Finance 7(1), 77–91 (1952)
[27] Moritz, B., Zimmermann, T.: Tree-based conditional portfolio sorts: The relation between past and future stock returns. Available at SSRN 2740751 (2016)
[28] Rasul, K., Seward, C., Schuster, I., Vollgraf, R.: Autoregressive denoising diffusion models for multivariate probabilistic time series forecasting. In: International conference on machine learning. pp. 8857–8868. PMLR (2021)
[29] Sohl-Dickstein, J., Weiss, E., Maheswaranathan, N., Ganguli, S.: Deep unsupervised learning using nonequilibrium thermodynamics. In: International conference on machine learning. pp. 2256–2265. pmlr (2015)
[30] Song, J., Meng, C., Ermon, S.: Denoising diffusion implicit models. arXiv preprint arXiv:2010.02502 (2020)
[31] Takahashi, S., Chen, Y., Tanaka-Ishii, K.: Modeling financial time-series with generative adversarial networks. Physica A: Statistical Mechanics and its Applications 527, 121261 (2019)
[32] Takahashi, T., Mizuno, T.: Generation of synthetic financial time series by diffusion models. Quantitative Finance pp. 1–10 (2025)
[33] Tashiro, Y., Song, J., Song, Y., Ermon, S.: Csdi: Conditional score-based diffusion models for probabilistic time series imputation. Advances in neural information processing systems 34, 24804–24816 (2021)
[34] Van Den Oord, A., Dieleman, S., Zen, H., Simonyan, K., Vinyals, O., Graves, A., Kalchbrenner, N., Senior, A., Kavukcuoglu, K., et al.: Wavenet: A generative model for raw audio. arXiv preprint arXiv:1609.03499 12, 1 (2016)
[35] Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A.N., Kaiser, Ł., Polosukhin, I.: Attention is all you need. Advances in neural information processing systems 30 (2017)
20

[36] Vuletić, M., Prenzel, F., Cucuringu, M.: Fin-gan: Forecasting and classifying financial time series via generative adversarial networks. Quantitative Finance 24(2), 175–199 (2024)
[37] Welch, I., Goyal, A.: A comprehensive look at the empirical performance of equity premium prediction. The Review of Financial Studies 21(4), 1455–1508 (2008)
[38] Wiese, M., Knobloch, R., Korn, R., Kretschmer, P.: Quant GANs: deep generation of financial time series. Quantitative Finance 20(9), 1419–1440 (2020)
[39] Yang, Z., Yang, D., Dyer, C., He, X., Smola, A., Hovy, E.: Hierarchical attention networks for document classification. In: Proceedings of the 2016 conference of the North American chapter of the association for computational linguistics: human language technologies. pp. 1480–1489 (2016)
[40] Yoon, J., Jarrett, D., Van der Schaar, M.: Time-series generative adversarial networks. Advances in neural information processing systems 32 (2019)
[41] Yuan, X., Qiao, Y.: Diffusion-ts: Interpretable diffusion for general time series generation. arXiv preprint arXiv:2403.01742 (2024)
A Data Description
A.1 Industry Portfolios
The target assets in our study are the 12 industry portfolios, which provide a standard and diversified representation of the U.S. stock market. The portfolios and their compositions are summarized in Table 1.
Table 1: Descriptions on the 12 Industry Portfolios.
Code Industry Portfolio Description
NoDur Consumer Nondurables (Food, Tobacco, Textiles, Apparel, Leather, Toys)
Durbl Consumer Durables (Cars, TVs, Furniture, Household Appliances)
Manuf Manufacturing (Machinery, Trucks, Planes, Office Furniture, Paper)
Enrgy Oil, Gas, and Coal Extraction and Products
Chems Chemicals and Allied Products
BusEq Business Equipment (Computers, Software, Electronic Equipment)
Telcm Telephone and Television Transmission
Utils Utilities
Shops Wholesale, Retail, and Some Services (Laundries, Repair Shops)
Hlth Healthcare, Medical Equipment, and Drugs
Money Finance
Other Other (Mines, Construction, Transportation, Hotels, Entertainment)
A.2 Asset Characteristics
We construct 10 asset characteristics for each asset using historical daily excess returns as follows.
21

• Momentum (mom1m, mom6m, mom12m, mom36m): The cumulative return over the past k trading days. We use k ∈ {21, 126, 252, 756}, corresponding to 1, 6, 12, and 36 months,
momkmi,t =
( ∏t
s=t−k+1
(1 + ri,s)
)
− 1.
• Change in momentum (chmom): The difference between the most recent 6-month momentum and the 6-month momentum from the preceding period.
chmomi,t = mom6mi,t − mom6mi,t−126.
• Return volatility (retvol): The standard deviation of daily excess returns over the past 21 trading days.
retvoli,t =
√ √ √ √ 1
20
t ∑
s=t−20
(ri,s −  ̄ri,t)2,
where  ̄ri,t is the mean return over the same period.
• Maximum return (maxret): The maximum daily excess return over the past 21 trading days.
maxreti,t = max
s∈[t−20,t]
ri,s.
• Beta (beta) and Beta squared (betasq): We estimate the market beta, βi, based on the Capital Asset Pricing Model (CAPM) by running a rolling regression of the asset’s excess return on the market excess return using data from the past 252 trading days:
ri,s = αi + βiF Mkt
s + ei,s, s ∈ [t − 251, t],
where F Mkt
t is the market excess return. The estimated factor loading βi at time t
serves as the betai,t characteristic, and its square, β2
i , as the betasqi,t characteris
tic.
• Idiosyncratic Volatility (idiovol): We obtain idiosyncratic volatility from a rolling Fama-French 3-factor model regression using data from the past 252 trading days:
ri,s = αi + βi,MktF Mkt
s + βi,SMB F SMB
s + βi,HMLF HML
s + ei,s, s ∈ [t − 251, t],
where F SMB
t and F HML
t are the size and value factors, respectively. The idiovoli,t
characteristic is then defined as the standard deviation of the resulting regression residuals, {ei,s}, over the estimation window.
A.3 Macroeconomic Variables
We use eight macroeconomic variables presented in [37], which are summarized in Table 2.
B Details of Evaluation Metrics
This appendix provides the detailed formulations for the evaluation metrics, score and statistics used in our experiments. Each metric is chosen to assess a particular aspect of the model’s performance, from the accuracy of the predicted probability distributions to their economic significance.
B.1 Statistical Forecasting Accuracy
First, we use proper scoring rules to evaluate the quality of the probabilistic forecasts, which assess the entire predictive distribution rather than just a point estimate.
Continuous Ranked Probability Score (CRPS). The CRPS is a widely-used score that generalizes the mean absolute error to probabilistic forecasts. It measures the integrated
22

Table 2: Macroeconomic Variables.
Variable Description
tbl Treasury Bill Rate (3-Month)
d/p Dividend-to-Price Ratio
e/p Earnings-to-Price Ratio
b/m Book-to-Market Ratio
tms Term Spread (Long-term yield minus T-bill rate)
dfy Default Yield Spread (BAA-rated minus AAA-rated corporate bonds)
ntis Net Equity Issuance
svar Stock Variance (computed as sum of squared daily returns on S&P 500)
squared difference between the cumulative distribution function (CDF) of the forecast, FDt ,
and the empirical CDF of the observation, which is a step function at the realized value rt. For a univariate prediction at a given time t, it is defined as:
CRP St := CRP S(Dt, rt) =
∫∞
−∞
(FDt (x) − H(x − rt))2 dx,
where rt ∈ R is the ground truth, FDt is the CDF of the predictive distribution Dt of a
generative model for time t, and H(·) is the Heaviside step function. A lower CRPS value indicates a more accurate forecast. The CRPS metric reported in this paper is obtained as follows. First, for each of the N assets, we compute its time-averaged CRPS over the test period. Then, we report the mean and standard deviation of these N scores.
Energy Score (ES). The ES is a multivariate generalization of the CRPS, making it suitable for evaluating the accuracy of the full joint distribution. It is defined as:
ESt := ES(Dt, rt) = E [∥Xt − rt∥2] − 1
2 E [∥Xt − X′
t∥2] ,
where rt ∈ RN is the N -dimensional ground truth, Xt and X′t are independent and identically
distributed random vectors drawn from the predictive distribution Dt, and ∥·∥2 denotes the Euclidean norm. The former term measures the distance between the forecast samples and the observation, rewarding forecasts that are close to the outcome. The latter term measures the spread within the forecast samples, rewarding diversity. The overall ES is the average of ESt over the test period.
B.2 Portfolio Performance
Second, we conduct investment experiments to assess the economic significance of the model’s forecasts. The performance of these portfolios serves as an integrated measure of the model’s predictive capabilities. At the end of each day t, we generate a one-dayahead forecast to determine the optimal portfolio weights wt+1 ∈ RN . The performance is then calculated based on the realized returns on the next day rt+1.
Mean-Variance Tangency Portfolio (MVP). The MVP is a classic portfolio optimization strategy that aims to find the portfolio with the highest possible SR. The optimization objective is defined as:
max
w∈RN
w⊤μˆt+1
√
w⊤Σˆ t+1w
subject to
N ∑
i=1
wi = 1, and wi ≥ 0, for i = 1, . . . , N,
23

where μˆt+1 and Σˆ t+1 are the predicted mean and covariance matrix of the excess returns
for time t + 1, respectively. The performance of this strategy relies on the accuracy of the estimated first two moments of the return distribution. Since the objective is to maximize the SR, it is considered the primary indicator of performance for this strategy.
We also report several other summary statistics: Ret, Vol, and MDD. Let rp,t = wt⊤rt be
the daily portfolio return. The statistics are defined as
Ret = E[rp,t] × 252, Vol = Std(rp,t) × √252,
SR = Ret
Vol , MDD = mtax
Pt − Vt
Pt
,
where Vt = Πts=1(1 + rp,s) is the cumulative portfolio value at time t (with initial value V0 =
1), and Pt = max0≤s≤t Vs is the peak portfolio value up to that time. Here, Ret represents
the annualized average return (profitability), and Vol measures the annualized volatility (risk) of the portfolio. SR is the risk-adjusted return, which is the primary optimization objective for the MVP strategy. MDD measures the largest peak-to-trough loss observed during the investment horizon, indicating downside risk. Generally, higher values are desirable for Ret and SR, while lower values are desirable for Vol and MDD. However, Vol tends to decrease as risk exposure is reduced, which often l-
eads to a corresponding decrease in Ret. Since the goal of the MVP strategy is to maximize the SR, the minimum possible Vol is neither necessarily the optimal outcome nor our objective.
Growth Optimal Portfolio (GOP). The GOP, also known as the log utility maximization portfolio, maximizes the expected logarithmic utility of the portfolio return. This is equivalent to maximizing the long-term growth rate of wealth. The objective of the optimization is given by max
w∈RN E [log(1 + w⊤ˆrt+1)]
subject to
N ∑
i=1
wi = 1, and wi ≥ 0, for i = 1, . . . , N.
The expectation is calculated empirically using the generated samples for the return rˆt+1. Unlike the mean-variance approach, maximizing the non-linear log utility function implicitly considers the entire predictive distribution, including higher-order moments like skewness and kurtosis. Given that the objective is to maximize utility, we consider the CE as the primary performance metric. The CE translates the expected utility into an economically meaningful risk-free rate of return that an inves-
tor would consider equivalent to the uncertain portfolio return. The expected utility U and the annualized CE are defined as:
U = E[log(1 + rp,t)], CE = (exp(U ))252 − 1.
In addition to CE, we also report SR, Ret, Vol, MDD for a comprehensive comparison.
B.3 Supplementary Diagnostic
We examine the model’s ability to replicate the cross-sectional correlation structure of the assets.
Correlation Score (CorrScore). The CorrScore quantifies the correspondence of the cross-sectional dependence structure among assets, which is regarded critical in portfolio optimization and risk management. Since estimating a time-varying conditional correlation matrix from single daily realizations is infeasible, we evaluate the unconditional correlation structure over the entire test period. The score is defined as the Frobenius norm of the difference between the empirical and synthetic correlat-
ion matrices,
CorrScore = ∥Creal − Csynth∥F ,
where ∥·∥F is the Frobenius norm, Creal is the sample correlation matrix estimated from the ground truth returns in the test set, and Csynth is the correlation matrix estimated from the mean paths of K synthetic sample paths generated by the model. A lower score indicates that the synthetic data more realistically replicates the correlations observed in the real market data.
24

C Hyperparameter Configuration
C.1 Hyperparameters of Diffolio
We performed a grid search to identify the optimal hyperparameter configuration for Diffolio. The selection was based on the best-performing setup on the validation set, as measured by the ES. The search space for the hyperparameters was as follows: window size was explored in {1, 5, 21, 63, 252, 756}, which correspond to periods of one day, one week, one month, one quarter, one year, and three years of trading days, respectively; hidden dimension in {32, 64, 128, 256}; number of attention heads i-
n {2, 4, 8}; the correlation-guided regularizer coefficient (λcorr) in {0.1, 0.05, 0.01, 0.005, 0.001, 0}; and the initial learning rate in {1e-3, 1e-4, 1e-5}.
C.2 Hyperparameters of Baseline Models
To ensure a fair and robust comparison, we conducted a comprehensive hyperparameter search for all baseline models. For hyperparameters that are shared with our proposed Diffolio model (e.g., learning rate scheduler, optimizer, window size, batch size), we adopted the same configurations unless specified otherwise. For model-specific parameters, we followed the methodologies and search spaces outlined in their original papers. The hyperparameter configuration for each baseline was selected based o-
n the best performance on the validation set, as measured by ES. The model-specific architectures and the corresponding hyperparameter search spaces explored are detailed below for each baseline.
TimeGAN TimeGAN is distinguished by its training process, which consists of three sequential stages: first, training an autoencoder for embedding and recovery; second, training the generator with a supervised loss; and third, jointly training the generator and discriminator in an adversarial manner. The search space for its hyperparameters in our experiments was defined as follows,
• Training steps (per stage) = {100, 300, 500, 1000, 10000}
• Hidden dimension = {64, 100, 128, 200, 256} • Supervised loss coefficient (stage 3) = {0.1, 1, 10} • Latent dimension for normal random variable z = {16, 32, 64}
TimeGrad The architecture of TimeGrad is based on WaveNet [34], which is composed of 1D convolutional networks with residual connections. We tuned its hyperparameters as follows,
• Hidden dimension = {64, 100, 128, 200, 256} • Number of residual channels = {4, 8, 16} • Number of layers per residual block = {2, 4, 8}
CSDI As CSDI is a Transformer-based model, we tuned its architectural components, such as the number of attention heads and the hidden dimension. The search space was defined as
• Training steps = {5 × 104, 1 × 105} • Hidden dimension (channels) = {64, 96, 128} • Number of attention heads = {4, 8}
Diffusion-TS A key feature of Diffusion-TS is its use of classifier-free guidance. Accordingly, we tuned the guidance strength parameter in addition to other hyperparameter settings as
• Training steps = {5 × 104, 1 × 105} • Guidance strength = {0.1, 0.05, 0.01} • Embedding hidden dimension = {64, 96}
25

MG-TSD The hyperparameter search for MG-TSD centered on the configuration of its residual block structure. The explored values were given as
• Training steps = {5 × 104, 1 × 105} • Number of residual layers: {2, 3, 4} • Residual block hidden dimension = {64, 96, 128}
• Number of residual channels = {16, 32}
SigCWGAN The tuning for SigCWGAN focused on the dimensions of its hidden and latent spaces along with the depth of the signature transform. The search space included the follwings,
• Training steps: {5 × 104, 1 × 105} • Hidden dimension: {64, 96, 128} • Signature truncation depth: {2, 3, 4} • Latent dimension: {10, 30, 50}
The adopted hyperparameter configurations for each baseline are summarized in Table 1.
Table 1: Adopted hyperparameter configurations for baseline models.
Model Adopted Hyperparameter Configuration
TimeGAN (H)
Training steps (Stage 1 / 2 / 3) = (100 / 500 / 1000) Hidden dimension = 128 Supervised loss coefficient = 10 Latent dimension = 32
TimeGAN (H+C)
Training steps (Stage 1 / 2 / 3) = (100 / 500 / 1000) Hidden dimension = 128 Supervised loss coefficient = 10 Latent dimension = 32
TimeGrad (H)
Hidden dimension = 128 Number of residual channels = 8 Number of layers per residual block = 8
TimeGrad (H+C)
Hidden dimension = 128 Number of residual channels = 8 Number of layers per residual block = 16
CSDI (H)
Training steps = 5 × 104 Hidden dimension = 64 Number of attention heads = 4
CSDI (H+C)
Training steps = 1 × 105 Hidden dimension = 64 Number of attention heads = 4
Diffusion-TS (H)
Training steps = 5 × 104 Embedding hidden dimension = 64 Guidance strength = 0.1
Diffusion-TS (H+C)
Training steps = 1 × 105 Embedding hidden dimension = 96 Guidance strength = 0.01
MG-TSD (H)
Training steps = 1 × 105 Number of residual layers = 4 Residual block hidden dimension = 64 Number of residual channels = 16
26

Table 1 – continued from previous page.
Model Adopted Hyperparameter Configuration
MG-TSD (H+C)
Training steps = 1 × 105 Number of residual layers = 2 Residual block hidden dimension = 128 Number of residual channels = 32
SigCWGAN (H)
Training steps = 1 × 105 Hidden dimension = 128 Signature truncation depth = 2 Latent dimension = 30
SigCWGAN (H+C)
Training steps = 1 × 105 Hidden dimension = 96 Signature truncation depth = 2 Latent dimension = 10
27

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:54.541Z
- **Text Length:** 84876 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
