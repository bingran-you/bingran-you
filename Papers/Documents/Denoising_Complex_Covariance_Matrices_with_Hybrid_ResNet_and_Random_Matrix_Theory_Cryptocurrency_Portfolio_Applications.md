# PDF Document: Garcia-Medina - 2025 - Denoising Complex Covariance Matrices with Hybrid ResNet and Random Matrix Theory Cryptocurrency Po.pdf

**File Path:** Garcia-Medina - 2025 - Denoising Complex Covariance Matrices with Hybrid ResNet and Random Matrix Theory Cryptocurrency Po.pdf

**Processed Date:** 2026-02-10T18:18:06.823Z

**File Size:** 6862.66 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3575

**Title:** Denoising Complex Covariance Matrices with Hybrid ResNet and Random Matrix Theory: Cryptocurrency Portfolio Applications

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Denoising Complex Covariance Matrices with Hybrid ResNet and
Random Matrix Theory: Cryptocurrency Portfolio Applications
Andrés García-Medina∗
Faculty of Sciences, Autonomous University of Baja California, Ensenada, 22860, Mexico
Abstract
Covariance matrices estimated from short, noisy, and non-Gaussian financial time series—particularly cryptocurrencies—are notoriously unstable. Empirical evidence indicates that these covariance structures often exhibit power-law scaling, reflecting complex and hierarchical interactions among assets. Building on this insight, we propose a power-law covariance model to characterize the collective dynamics of cryptocurrencies and develop a hybrid estimator that integrates Random Matrix Theory (RMT) -
with Residual Neural Networks (ResNets). The RMT component regularizes the eigenvalue spectrum under highdimensional noise, while the ResNet learns data-driven corrections to recover latent structural dependencies. Monte Carlo simulations show that ResNet-based estimators consistently minimize both Frobenius and minimum-variance (MV) losses across diverse covariance models. Empirical experiments on 89 cryptocurrencies (2020–2025), using a training period ending at the local BTC maximum in November-
 2021 and testing through the subsequent bear market, demonstrate that a two-step estimator combining hierarchical filtering with ResNet corrections yields the most profitable and balanced portfolios, remaining robust under market regime shifts. These findings highlight the potential of combining RMT, deep learning, and powerlaw modeling to capture the intrinsic complexity of financial systems and enhance portfolio optimization under realistic conditions.
Keywords: RMT, ResNets, Power-law, Cryptocurrencies, Non-linear shrinkage PACS: 89.65.Gh, 89.75.Da
1 Introduction
Random Matrix Theory (RMT) has played a pivotal role in elucidating complex interactions in nuclear physics [1], revealing quantum chaos signatures [2], and describing quantum transport phenomena [3]. More recently, RMT has been successfully applied to denoise empirical covariance matrices and enhance optimal asset allocation in portfolio theory [4, 5, 6, 7]. Within this framework, several methodologies have been proposed to identify meaningful signals and suppress noise originating from the finit-
e size of empirical samples [4, 8]. Furthermore, renewed attention has arisen in mathematical statistics, where advanced techniques grounded in free probability and deterministic equivalents have provided rigorous analytical tools for high-dimensional covariance estimation [9, 6, 10]. These approaches share the common characteristic of focusing primarily on the eigenvalues of the covariance matrix, whose empirical distribution asymptotically converges to a deterministic function. In contrast, the -
role of eigenvectors has been largely secondary within these frameworks. In essence, RMT-based estimators improve covariance estimation by applying nonlinear shrinkage transformations to the eigenvalues while keeping the eigenvectors fixed [11, 5, 12]. However, it has been demonstrated that the distance between the leading sample eigenvectors and their true population counterparts diverges without bound in high-dimensional settings [13]. Therefore, this work proposes to exploit information contain-
ed in the eigenvectors to improve covariance matrix estimation. Our approach performs a spectral decomposition of the covariance matrix, estimating the eigenvectors through a state-of-the-art deep neural network model, while the eigenvalues are obtained via the nonlinear shrinkage method based on Random Matrix Theory (RMT) [7]. In particular, we employ the Residual Neural Network (ResNet) architecture [14, 15], which is well-suited for deep architectures as it mitigates computational challenges by-
 introducing shortcut connections that facilitate efficient gradient propagation toward optimal solutions. This proposal is benchmarked against two alternative covariance estimators: one entirely based on the ResNet architecture and another fully derived from Random Matrix Theory (RMT). Additionally, we include the twostep estimator introduced in [16], which incorporates the nested hierarchical organization of financial markets
∗Email: andgarm.n@gmail.com
arXiv:2510.19130v1 [q-fin.CP] 21 Oct 2025

into advanced covariance estimation techniques. Since the main goal of this study is to enhance covariance matrix estimation for financial systems, we first introduce models designed to reproduce the stylized facts of market interactions. To the best of our knowledge, this is the first work to propose a power-law covariance model whose scree plot of eigenvalues follows a scaling behavior, thereby capturing the complex dynamics of financial markets. For comparison, we also consider a fully hierarc-
hical model [17] and a block-diagonal model [16]. To validate the models in practice, we have considered a dataset composed of financial instruments known as cryptocurrencies. These assets are characterized by complex features that push traditional statistical methods to their limits. Specifically, cryptocurrencies do not follow a Gaussian distribution, exhibit heavy tails, abrupt jumps, asymmetry, and overall complex dynamics [18]. Here, we carefully excluded pseudo-cryptocurrencies—i.e., coins t-
hat are merely replicas of fiat money—and retained only genuine blockchain projects or those that replicate exchange rates. Additionally, we pushed the estimators, particularly the deep learning ones, to their limits by training on a bull market period and testing on a bear market. This setup allows us to evaluate the model’s ability to handle structural changes and market regime shifts. We find that both the nested hierarchy and power-law models adequately characterize the complex interactions wi-
thin cryptocurrency markets. Moreover, both in simulations and in empirical cryptocurrency data, hybrid models—and more generally, deep learning-based models—significantly improve the estimation of the population covariance matrix on one hand, and, on the other, enhance financial metrics in out-of-sample walkforward analyses. Although the covariance matrix is not the only element involved in an investment strategy, its accurate estimation enables better control of volatility under different scenar-
ios—not only within portfolio theory. For instance, one of the most recent and prestigious forecasting competitions found that the main determinant of predictive accuracy was the ability to control volatility, regardless of model complexity [19]. On the other hand, while recent studies have explored the use of deep learning for estimating eigenvalues within invariant estimator frameworks [20], or through reinforcement learning approaches to shrinkage estimation [21], to the best of our knowledge, -
this is the first work to propose a hybrid method that integrates the theoretical robustness of RMT with the representational power of deep neural networks applied to eigenvectors, specifically leveraging the ResNet architecture. Section 2 presents the investment strategy used to allocate capital across the set of cryptocurrencies. In Section 3, we introduce the covariance matrix estimators derived from both RMT and deep learning (ResNet), as well as the proposed hybrid and two-step estimators. Se-
ction 4 details the proposed covariance matrix models used in the simulations, highlighting that the power-law model represents a novel contribution not previously discussed in the literature. Section 5 presents and discusses the results of the simulations, while Section 6 analyzes the findings related to the cryptocurrency dataset. Finally, Section 7 concludes the study and discusses potential avenues for future research.
2 Asset allocation models
2.1 Portfolio Theory
Consider p assets observed over n trading days, and let si,t denote the price of asset i = 1, . . . , p at time t = 1, . . . , n. The logarithmic return ri,t is defined as
ri,t = log si,t
si,t−1
. (1)
The amount of capital invested in asset i is represented by its portfolio weight, collected in the vector
w = (w1, . . . , wp)⊤. (2)
A positive weight corresponds to a long position, i.e., ownership of an asset, whereas a negative weight indicates a short position, meaning that the investor sells a borrowed asset, expecting to repurchase it later at a lower price. Then, the portfolio return R is given by the dot product
R = w⊤r. (3)
The expected return of the portfolio, denoted by μR, is defined as
μR = E[R] = w⊤E[r] = w⊤μ, (4)
where μ is the vector of expected returns for the individual assets.
2

The portfolio variance is expressed as a quadratic form of the population covariance matrix Σ of the asset returns:
σ2
R = w⊤Σw. (5)
Accordingly, the portfolio volatility is obtained as the square root of the variance:
σR =
√
w⊤Σw. (6)
2.2 Minimum Variance Portfolio (MVP)
The mean–variance allocation strategy proposed by Markowitz [22] seeks to solve the following quadratic optimization problem in order to minimize portfolio risk for a given level of expected return [23]:
max
w(φ)∈Rp w⊤μ − φ
2 w⊤Σw subject to 1⊤w = 1, (7)
where φ is interpreted as the risk-aversion parameter. When φ → ∞, the problem reduces to minimizing portfolio variance regardless of expected return:
min
w(∞)∈Rp
1
2 w⊤Σw subject to 1⊤w = 1. (8)
The reduced problem minimizes portfolio volatility and is referred to as the Minimum Variance Portfolio (MVP). Moreover, it is possible to incorporate a no short-selling constraint by formulating the standard quadratic programming (QP) problem. In this case, the portfolio weights satisfy w ≥ 0, and a numerical solution is required [24]. This constrained portfolio is also known as the long-only MVP, as it does not permit short positions or negative weights. In the following analysis, we will denote-
 this portfolio as MVP+.
3 Covariance estimators
3.1 Random matrix denoising
A naive estimator of the population covariance matrix Σ, given the empirical or sample covariance matrix S, is simply
Ξnaive = S, (9)
which is an unbiased estimator of Σ when the number of variables p is fixed and the number of observations n → ∞ [25]. A non-linear shrinkage formula that minimizes the Frobenius loss has been proposed by Ledoit and Péché [5], based on principles from RMT [26]. In high-dimensional settings, the covariance matrix is estimated as
ΞLP =
p
X
k=1
ξLP
k vkv⊤
k , where (10)
ξLP
k = lim
ε→0+
λk
1 − q + qλkGS(λk − iε) 2 , (11)
and (λk, vk) denote the eigenvalue–eigenvector pairs of S, and GS is the Stieltjes transform of S.
3.2 Residual Neural Network denoising
An estimator based on machine learning is proposed, employing the Residual Neural Network (ResNet) architecture [14]. The implementation builds upon Convolutional Neural Networks (CNNs) [27], which are designed to process grid-structured inputs and exploit strong spatial dependencies within local regions of the grid. ResNet improves CNNs by introducing a novel neural architecture that incorporates skip connections [28], allowing information from one layer to propagate to non-contiguous layers. Spe-
cifically, ResNet contains connections between layer i and layer (i + r) for r > 1, where i is an arbitrary layer and r denotes the skip length. Figure 1(a) illustrates the architecture of the residual block used for the covariance matrix denoising, setting r = 2. The CNN learning process operates as follows: a filter is applied to the input layer to detect patterns, producing a feature map as the output. An activation function is then applied element-wise after each layer to introduce nonlinearit-
y, regulate signal propagation, and constrain the output within a desired range of values. In the residual module, the input layer consists of 64 filters of size 3 × 3, producing 64 feature maps with rectified linear unit (ReLU) nonlinearity. This base representation is then refined by two subsequent stacked 2D convolutional layers (Conv2D) to extract deeper features. The first Conv2D layer employs a ReLU activation
3

(a) (b)
Figure 1: Network architecture. (a) Residual block with r = 2. (b) ResNet with 10 basic residual blocks.
function, whereas the second uses a linear activation function. The add block implements the skip connection, combining the input (residual) with the output of the two Conv2D layers. In this way, the network learns only the residual correction rather than the full mapping, mitigating the vanishing gradient problem. The practical purpose of the skip connections is to enable effective gradient flow, allowing the learning algorithm to adaptively choose the level of nonlinearity applied to a given inp-
ut. Finally, the last block of the residual module applies a ReLU activation. The complete network architecture, shown in Figure 1(b), is constructed by repeating this loop and stacking ten basic residual blocks. Using this ResNet architecture, and applying appropriate symmetrization along with a positive semidefinite (PSD) transformation, it becomes possible to learn and remove the noise present in the empirical covariance matrix. We denote the resulting estimator as ΞCNN, reflecting the CNN-base-
d structure of its inner layers. We further propose a hybrid approach that leverages both the learning capabilities of the ResNet model and the theoretical properties of high-dimensional covariance estimation. The core idea is first to perform a spectral decomposition of the empirical covariance matrix:
S = VΛVT (12)
Here, V denotes the p × p matrix whose k-th column is the eigenvector vk of S, and Λ is the diagonal matrix containing the corresponding eigenvalues λs. The hybrid estimator applies the ResNet learning model to the eigenvectors (without symmetrization or PSD transformation), while the eigenvalues are processed using the nonlinear shrinkage RMT-based formula in Eq. (11). Formally, the hybrid estimator is defined as
ΞH = ΞCNN(V) Ξ(Λ) ΞCNN(V)⊤, (13)
where Ξ(V) and Ξ(Λ) denote the application of the operator Ξ to the matrix of eigenvectors and the diagonal matrix of eigenvalues, respectively. This hybrid approach combines the data-driven flexibility of ResNet to capture complex dependencies in the eigenvectors, while exploiting the theoretical guarantees of RMT for consistent eigenvalue estimation in high-dimensional settings.
3.3 Hierarchical clustering denoising
A novel approach to covariance matrix estimation was proposed by Tumminello et al. [29] using a hierarchical clustering algorithm. The procedure begins by transforming the empirical covariance matrix S into the corresponding correlation matrix C. Next, the transformation
D = 11⊤ − C (14)
4

is applied, which satisfies the axioms of a distance measure, where 1 is a p-dimensional vector of ones. A dendrogram is then constructed from D using Average Linkage Clustering Analysis (ALCA) [25], and the distance ρ between clusters at each hierarchical level is computed. This procedure yields a dissimilarity matrix D(ρ) as a function of ρ, from which the filtered covariance matrix is recovered via the inverse transformation:
ΞALCA = H1/2 (11⊤ − D(ρ)) H1/2, (15)
where H is the diagonal matrix of variances used to rescale the correlation matrix back to the original covariance scale. A state-of-the-art estimator designed to address both the heterogeneous structure of financial markets and the challenges of high-dimensional settings was proposed in [16]. The core idea is to first apply our proposed single-step estimators, followed by a hierarchical filtering step. We consider the following combinations:
Ξ2S(LP) := ΞALCA ΞLP , (16)
Ξ2S(CNN) := ΞALCA ΞCNN , (17)
Ξ2S(H) := ΞALCA ΞH . (18)
The mathematical justification for this two-step estimator is discussed in [16] and is based on the following arguments: (i) applying an RMT-based estimator in the first step reduces the noise and estimation error associated with the largest eigenvalues, and (ii) applying a subsequent filtering step via hierarchical clustering mitigates the inconsistency of the top eigenvectors, which is inherently present in RMT covariance estimators [13]. Here, this reasoning is extended to the newly proposed es-
timators ΞCNN and ΞH , where the second step can be interpreted as a regularization procedure to avoid overfitting.
4 Covariance models
To evaluate the performance of the proposed covariance matrix estimators, we consider the following datagenerating process:
Y=
√
Σ X, (19)
where X is a p × n random matrix whose entries are independent and identically distributed according to a standard Gaussian distribution, and Σ is a p × p population covariance matrix. Given a model specification for Σ, we can obtain the sample covariance realization as
S= 1
n YYT = 1
n
√
Σ XXT √
Σ, (20)
which represents the noisy empirical counterpart of the true covariance matrix. In this study, we analyze the following population models for Σ.
(1) A block-diagonal correlation structure defined as
Σ = LLT , (21)
where L is a rectangular matrix of dimension p × k, with k denoting the number of blocks. In particular, we set p = 100 and k = 12, with heterogeneous block sizes given by [3, 3, 4, 5, 6, 7, 7, 9, 11, 13, 15, 17], but with equal intra-block correlation intensity γ = 0.3. To ensure a proper correlation matrix, the diagonal entries are set to one. Figure 2(a) displays the population model under these specifications (left) and a finite-sample realization with n = 200 (right). This block-independent a-
nd homogeneous structure model has been previously examined in [16].
(2) A completely nested hierarchical covariance model, where using the same general structure of eq. 21, the heterogeneity is integrated through the matrix L of dimension p × p is given by
L=

     
γ γ ... γ γ γ γ ... γ 0
... ... . . . ... ...
γ γ ... 0 0 γ 0 ... 0 0

     
. (22)
Here, we set γ = 0.1. Figure 2(b) presents the population model under these specifications (left) with p = 100, and a finite-sample realization with n = 200 (right). This system was originally proposed in [17] as a model to characterize the complex interaction structure of financial markets. In particular, the population eigenvalues of this system correspond to the solutions of a symmetric tridiagonal matrix and exhibit deep mathematical connections with Fibonacci and Lucas numbers [30].
5

(3) A power-law model of the form
Σ = OΛOT , (23)
where O is a random orthogonal matrix of dimension p × p, and Λ is a diagonal matrix of the same dimension with entries
λi = i−α, i = 1, . . . , p, (24)
representing the eigenvalues of Σ. By construction, these eigenvalues follow a power-law decay. Figure 2(c) displays the population model under these specifications (left), considering p = 100 and α = 1.5, along with a finite-sample realization for n = 200 (right). To the best of our knowledge, this formulation is presented here for the first time as a covariance matrix representation of power-law interactions.
(a)
(b)
(c)
Figure 2: Covariance models. (a) Block diagonal correlation model. (b) Nested hierarchical model. (c) Powerlaw model. Left: population covariances. Right: sample realization.
Figure 3 presents the log-log scree plot of the eigenvalues for each model. Model 1 exhibits k = 12 nondegenerate eigenvalues, whose magnitudes correspond to the size of each of the k blocks (see [16]). Model 2 displays the intriguing property that its eigenvalue spectrum approximately follows a power-law decay. Due to this property, it has been conjectured in [17] that it can capture the stylized facts underlying the complex interactions of financial markets. In the case of Model 3, the power-law-
 behavior is imposed by construction with a slope of α = 1.5, providing a further step toward characterizing the complex interactions of financial markets through their covariance structure. Figure 4 displays the dendrograms associated with each covariance model, constructed using the same methodology as the hierarchical estimator but employing the Single Linkage Clustering Algorithm (SLCA).
6

(a)
(b)
(c)
Figure 3: Scree plot of eigenvalues for (a) model 1, (c) model 2, and (e) model 3.
7

Model 1 exhibits a homogeneous hierarchical structure that successfully recovers the k = 12 blocks of the population model. In contrast, Model 2 reveals hierarchies of increasing size, consistent with the structure imposed in the population model. Finally, the dendrogram corresponding to Model 3 also displays an increasing degree of nested hierarchies; however, its block structure is heterogeneous due to the random signatures inherited from the orthogonal eigenvectors (see Eq. 23).
(a)
(b)
(c)
Figure 4: Associated dendrogram of (a) model 1, (b) model 2, and (c) model 3. For illustrative purposes, the descendant links below a cluster node k are equally colored if k is the first node below the cut threshold t(= 0.7).
5 Simulations
We conduct a Monte Carlo simulation consisting of m = 1000 realizations of the sample covariance matrix for each of the three population covariance models. The sample covariance matrices are generated from finite data matrices of dimensions p = 100 and n = 200. For each realization, the noise is filtered by applying the covariance matrix estimators introduced in Section 3. Subsequently, we evaluate the performance of the estimators using the Frobenius (F ) and Minimum Variance (M V ) loss function-
s, computed between the filtered matrix Ξ and the true population covariance matrix Σ. These loss functions are defined as follows:
F (Ξ, Σ) = 1
p Tr (Ξ − Σ)(Ξ − Σ)T , (25)
M V (Ξ, Σ) = Tr(Σ−1ΞΣ−1)/p
[Tr(Σ−1)/p]2 − 1
Tr(Ξ−1)/p . (26)
Tables 1, 2, and 3 summarize the performance of the estimators in terms of the average F and M V loss functions over the m = 1000 Monte Carlo replications, corresponding to each covariance model, respectively.
8

For the estimators based on the machine learning approach, the ResNet architecture was trained using the Adam optimizer with an initial learning rate of 10−3. The internal loss function used to penalize the difference between the predicted and target matrices was the mean squared error (MSE). Training was performed with a batch size of 16 over 10 epochs, using a training dataset of 100 samples, with 20% reserved for validation.
Table 1: Block diagonal correlation (model 1). Performance of estimators in terms of ⟨F (Σ, Ξ)⟩ and ⟨M V (Σ, Ξ)⟩, where ⟨·⟩ represents the average over m = 1000 realizations of data samples with dimensions p = 100, n = 200.
Estimator ⟨F ⟩ ⟨M V ⟩ Ξnaive 0.507937 0.486611 ΞLP 0.065429 0.026864 ΞCNN 0.035051 0.032022 ΞH 1.054531 0.003001 ΞALCA 0.099357 0.057769 Ξ2S(LP ) 0.056593 0.017976 Ξ2S(CNN) 0.034521 0.030575 Ξ2S(H) 1.054501 0.002551
Table 2: Completely nested hierarchical covariance (model 2). Performance of estimators in terms of ⟨F (Σ, Ξ)⟩ and ⟨M V (Σ, Ξ)⟩, where ⟨·⟩ represents the average over m = 1000 realizations of data samples with dimensions p = 100, n = 200.
Estimator ⟨F ⟩ ⟨M V ⟩ Ξnaive 0.204916 0.002551 ΞLP 0.215718 0.001520 ΞCNN 0.186761 0.000607 ΞH 3.410518 0.000249 ΞALCA 0.361030 0.009575 Ξ2S(LP ) 0.370093 0.009559 Ξ2S(CNN) 0.349912 0.007677 Ξ2S(H) 3.414401 0.000499
Table 3: Power-law (model 3). Performance of estimators in terms of ⟨F (Σ, Ξ)⟩ and ⟨M V (Σ, Ξ)⟩, where ⟨·⟩ represents the average over m = 1000 realizations of data samples with dimensions p = 100, n = 200.
Estimator ⟨F ⟩ ⟨M V ⟩
Ξnaive 0.000356 0.001254 ΞLP 0.000356 0.000844 ΞCNN 0.004365 0.001281 ΞH 0.006345 0.000239 ΞALCA 0.001992 0.010246 Ξ2S(LP ) 0.001973 0.010202 Ξ2S(CNN) 0.004852 0.002135 Ξ2S(H) 0.006345 0.000238
For Model 1, the best-performing estimator in terms of the F loss is Ξ2S(CNN), whereas the best performance in terms of the M V loss is achieved by Ξ2S(H). In the case of Model 2, the estimators ΞCNN and ΞH exhibit the lowest F and M V losses, respectively. The results for Model 3 are particularly intriguing. In this case, none of the estimators significantly outperform the naive estimator in terms of the F loss, while in terms of the M V loss, most estimators struggle to improve upon it. The only-
 estimators that surpass the naive benchmark are ΞLP , ΞH , and Ξ2S(H), with the latter showing the overall best performance. On the other hand, it can be observed that, in general, both ΞH and Ξ2S(H) perform poorly in terms of the F loss but substantially reduce the M V loss. This behavior can be explained by the fact that the F loss accounts for errors in all individual entries of the covariance matrix, making it highly sensitive to small residual noise. In contrast, the M V loss captures deviat-
ions along the principal directions of variance, and can therefore exhibit significant improvement even when minor entry-wise noise remains. Consequently, the hybrid estimators are more effective at suppressing noise in the dominant eigendirections of the covariance matrix. This phenomenon becomes more pronounced as the degree of underlying structure increases, as observed in Models 2 and 3.
9

6 Empirical data
We analyze the daily returns of the p = 89 major (non-stable) cryptocurrencies by market capitalization over a five-year period, from 2020-08-02 to 2025-07-31, yielding a total of n = 1825 observations. The data are retrieved using the yfinance API. The preprocessing pipeline begins by querying the top 400 cryptocurrencies by market capitalization. We then remove all coins with more than 1% of missing values and impute the remaining gaps using the last observed price (forward fill). To enhance dat-
aset reliability, we further exclude the top 10% most volatile cryptocurrencies. This filtering step aims to mitigate distortions caused by herding behaviors such as pump-and-dump schemes or trader confusion arising from typographical errors in coin identifiers. Finally, we exclude all stablecoins (a total of 21), such as USDT or EURS, as their values are designed to remain pegged to fiat currencies or commodities (e.g., gold) and thus do not reflect the intrinsic dynamics of cryptocurrency market-
s. In Figure 5(a), we present the empirical covariance matrix of the cryptocurrency dataset. The assets have been ordered using the seriation algorithm proposed by [31] with a twofold objective: (i) to enhance the graphical representation by positioning assets with similar covariance patterns closer to each other, and (ii) to improve the ability of deep learning estimators to detect and learn the structural dependencies within the noisy covariance matrices. The resulting ordered covariance matrix -
exhibits patterns that closely resemble those generated by the power-law model, suggesting that the empirical structure of the cryptocurrency market may share similar scaling properties. Figure 5(b) displays the scree plot of the eigenvalues of the empirical covariance matrix. The observed behavior closely resembles that of Models 2 and 3, with the exception of a few outliers in the tails. Moreover, the dendrogram presented in Figure 5(c) exhibits a hierarchical pattern qualitatively consistent wi-
th the structures observed in these two models. These results indicate that our proposed covariance models effectively capture the stylized facts present in the empirical cryptocurrency dataset. We split our dataset into training and testing periods. The splitting point is set to 2021-11-09, corresponding to the maximum closing value of Bitcoin (BTC) during the pandemic turmoil.1 Following this date, prices began to decline, reaching a local minimum in November 2022 during the FTX crisis. This par-
tition enables the model to learn under bull market conditions and to be subsequently evaluated under bear market dynamics, thereby facilitating an assessment of its robustness across contrasting market regimes. Starting from 2021-11-09, we conducted a walk-forward analysis (rolling-window backtesting) using in-sample and out-of-sample covariance matrices computed over N = 182 trading days, with portfolio rebalancing performed at the same frequency. In total, the portfolio was rebalanced seven tim-
es, covering the investment period from 2021-11-09 to 2025-05-05. Thus, we obtain the optimal portfolio allocations w by applying the MVP+ investment strategy, using as input each of the covariance estimators presented in Section 3, computed over the in-sample data. For the ResNet-based estimators (ΞCNN , Ξ2S(CNN), ΞH , and Ξ2S(H)), the model is retrained at each rebalancing point using an extended training dataset that includes the in-sample period plus approximately one additional preceding year-
 (282 days). The rationale is to initiate training with the first observation of the complete dataset and subsequently apply a consistent rolling-window scheme, maintaining a constant number of training observations across all rebalancing scenarios. Using a stride of 1, we thus obtain a training sample of 100 datasets, each of dimension p × N , to apply the learning process. The ResNet algorithm is configured using the same settings as in the simulation study. Next, portfolio returns are computed -
by multiplying the in-sample allocations win with the out-of-sample returns Rout. Figure 6(a) displays the cumulative returns for each estimator throughout the walk-forward analysis, with the rebalancing dates indicated by grey dashed vertical lines. Figure 6(b) shows the performance of the top 12 individual cryptocurrencies over the same period. The returns of individual cryptocurrencies exhibit greater volatility, reflecting higher risk, and consequently they can achieve higher cumulative return-
s compared to the diversified portfolios. Table 4 presents the walk-forward portfolio performance across various financial metrics for each of the covariance estimators. As a benchmark, we also include the performance of a uniform portfolio (U ), in which capital is equally allocated across all assets. It can be observed that the highest cumulative portfolio return is achieved using the Ξ2S(CNN) estimator. By examining annualized returns, computed as the geometric mean of portfolio returns scaled -
by a factor of 365 to approximate yearly performance, we find that only the ResNet-based estimators and the ALCA estimator generate positive returns (see third column). The annual portfolio volatility is measured by eq. 6 and also multiplied by the factor 365 to obtain a proxy. Interestingly, the naive estimator reaches the minimum value under this metric. Thus, an increase in mean return does not necessarily imply a decrease in standard deviation. The Sharpe Ratio, defined as the ratio between th-
e mean and standard deviation of the portfolio return, gives us a fairer number to compare different investments. Under this measure, the most equilibrated portfolio is obtained again by the Ξ2S(CNN) estimator. The maximum drawdown measures the largest peak-to-trough decline in the cumulative return of the investment portfolio expressed as a percentage. This measure represents the maximum loss presented in the
1The absolute peak occurred on November 10, 2021; however, we consider the midnight value as the closing price.
10

(a)
(b)
(c)
Figure 5: Cryptocurrency empirical data (a) Covariance matrix of ordered elements. (b) Scree plot of eigenvalues. (c) Dendrogram under the same methodology as the hierarchical estimator with single linkage (SLCA). For illustrative purpose the descendant links below a cluster node k are equally colored if k is the first node below the cut threshold t(= 0.7)
11

(a)
(b)
Figure 6: (a) Walk-forward cumulative returns on empirical data for MVP+. The weights are optimized with Tin = 182 days, applied over Tout = 182, and rebalancing every ∆T = 182 days. (b) Cumulative returns of the top 12-performing individual cryptocurrencies under the buy-and-hold strategy. The vertical axis is on a logarithmic scale for better visualization.
12

Estimator Cumulative Return
Annual Return
Annual Volatility
Sharpe Ratio
Maximum Drawdown
Turnover
U 0.25 -33.00% 66.52% -0.5 -84.56% 0 Ξnaive 0.88 -3.66% 39.10% -0.09 -65.63% 1.02 ΞLP 0.71 -9.24% 43.75% -0.21 -73.35% 1.13 ΞCNN 1.54 13.19% 46.79% 0.28 -63.74% 1.3 ΞH 1.4 10.17% 54.44% 0.19 -76.43% 0 ΞALCA 1.09 2.46% 40.71% 0.06 -66.24% 1 Ξ2S(LP ) 0.75 -7.78% 43.99% -0.18 -73.75% 1.22 Ξ2S(CNN) 1.74 17.14% 46.60% 0.37 -63.63% 1.34 Ξ2S(H) 1.4 10.17% 54.44% 0.19 -76.43% 0
Table 4: Walk-forward portfolio performance for the cryptocurrency market under the MVP+ investment strategy. The weights are optimized with Tin = 182 days, applied over Tout = 182, and rebalancing every ∆T = 182 days.
investment. Also, the Ξ2S(CNN) improve the loss to −63.63%. Yet, the improvement is marginal in relation to the naive estimator, which is of −65.65%. Finally, turnover measures the absolute difference between the asset weights at consecutive periods, normalized by the number of periods. A high value is associated with high transaction fees. This number ranges between 0 and 2, with 1 meaning that half of the assets reallocate in every rebalancing. In this case, the ΞH and Ξ2S(H) estimators do not i-
nvolve any reallocation. In fact, this particular strategy allocates 100% of the portfolio to BTC-USD at all times. Figure 5 shows the equivalent financial metrics but for the buy & hold strategy of investing in individual cryptocurrencies through the walk-forward period. Notice that here, the turnover metric is not measured because we never rebalance. Interestingly, several coins surpass the performance of the combination of a state-of-the-art covariance estimator and the classical investment str-
ategy MVP+. Even accounting for the trade-off measured by the Sharpe Ratio and the Maximum Drawdown, crypto like GT-USD outperforms all strategies. Therefore, an important direction for future research is to integrate asset selection into the overall covariance estimation and portfolio allocation framework.
Cryptocurrency Cumulative Return
Annual Return
Annual Volatility
Sharpe Ratio
Maximum Drawdown
ZANO-USD 3.28 40.50% 134.62% 0.30 -92.06% GT-USD 2.90 35.61% 53.50% 0.67 -62.41% LEO-USD 2.64 32.13% 52.74% 0.61 -55.67% VRSC-USD 2.44 29.09% 132.76% 0.22 -84.75% TRX-USD 2.26 26.28% 65.97% 0.40 -59.52% RENDER-USD 2.11 23.87% 129.75% 0.18 -95.83% XRP-USD 1.67 15.73% 84.43% 0.19 -75.53% OKB-USD 1.62 14.91% 67.45% 0.22 -68.81% XCN-USD 1.54 13.10% 52.05% 0.25 -76.42% MX-USD 1.49 12.17% 66.73% 0.18 -78.22% WBTC-USD 1.40 10.19% 54.27% 0.19 -76.55% BTC-USD 1.40 10.17% 54.44% 0.19 -76.43%
Table 5: Walk-forward portfolio performance for the top 12 individual cryptocurrencies under the buy & hold strategy.
7 Conclusion
We found that the two-step estimator based on the ResNet architecture (Ξ2S(CNN)) minimizes the Frobenius loss function for the block-diagonal model. For the same model, the two-step hybrid estimator (Ξ2S(H)) attains the minimum value of the MV loss function. As the complexity of the covariance model increases, we observe that applying the second filtering step becomes unnecessary; in such cases, the single-step estimators (ΞCNN ) and (ΞH ) are sufficient to minimize noise with respect to the Frobe-
nius and MV losses, respectively. On the other hand, an interesting phenomenon arises when the covariance model follows a power-law structure: in this case, none of the state-of-the-art estimators outperform the naive one in terms of the Frobenius loss. However, regarding the MV loss, the two-step hybrid estimator achieves the lowest noise level. Overall, a consistent pattern emerges MV loss systematically decreases across all models when using the ResNet-based estimators. The distinctive point he-
re is that the MV loss captures deviations along the principal directions of variance and, as such, is more suitable for portfolio optimization applications. On the other hand, when considering empirical data from the cryptocurrency market, we observe that the
13

covariance structure, the scree plot, and the dendrogram exhibit stylized facts similar to those found in both the fully hierarchical model and the power-law model. Thus, we initially confirm the conjecture proposed in [17], which states that the first model adequately characterizes the complex dynamics of financial instruments—this time applied to a set of cryptocurrencies. Furthermore, we extend this conjecture to a new model based on power-law behavior. Focusing on the specific dataset analyze-
d, we find that the best financial metrics were generally obtained using the (Ξ2S(CNN)) estimator within the MVP+ portfolio framework. This result holds even under the challenging configuration of our experiment, where the training set corresponded to a bull market period, while the testing set covered a heterogeneous phase that began with a bear market trend. Nevertheless, although these results are promising in terms of adequately characterizing the complex dynamics of cryptocurrencies and propo-
sing a hybrid estimator that combines the advantages of state-of-the-art neural network models with the analytical foundations of random matrix theory, they are not sufficient to achieve the maximum cumulative return. When comparing with the performance of individual assets, we find that there are instruments capable of nearly tripling the initial capital while offering a better balance between risk exposure and profitability (Sharpe Ratio). Therefore, from a practical standpoint, there is still r-
oom for improvement in the search for more profitable strategies. In this regard, it would be interesting to continue combining methodologies and to incorporate the last missing ingredient—one that is uncommon within the econophysics field: asset selection and valuation from a fundamental analysis perspective [32]. However, the challenge is substantial, as cryptocurrencies generally lack traditional fundamental metrics available in conventional financial markets.
Declaration of generative AI and AI-assisted technologies in the manuscript preparation process.
During the preparation of this work, the author used ChatGPT to assist with readability improvements and proofreading. After using this tool/service, the author reviewed and edited the content as needed and takes full responsibility for the content of the published article.
References
[1] Madan Lal Mehta. Random matrices. Vol. 142. Elsevier, 2004.
[2] Oriol Bohigas, Marie-Joya Giannoni, and Charles Schmit. “Characterization of chaotic quantum spectra and universality of level fluctuation laws”. In: Physical review letters 52.1 (1984), p. 1.
[3] Carlo WJ Beenakker. “Random-matrix theory of quantum transport”. In: Reviews of modern physics 69.3 (1997), p. 731.
[4] Laurent Laloux et al. “Noise dressing of financial correlation matrices”. In: Physical review letters 83.7 (1999), p. 1467.
[5] Olivier Ledoit and Sandrine Péché. “Eigenvectors of some large sample covariance matrix ensembles”. In: Probability Theory and Related Fields 151.1 (2011), pp. 233–264.
[6] Joël Bun, Jean-Philippe Bouchaud, and Marc Potters. “Cleaning large correlation matrices: tools from random matrix theory”. In: Physics Reports 666 (2017), pp. 1–109.
[7] Olivier Ledoit and Michael Wolf. “Analytical nonlinear shrinkage of large-dimensional covariance matrices”. In: The Annals of Statistics 48.5 (2020), pp. 3043–3065.
[8] Marc Potters, Jean-Philippe Bouchaud, and Laurent Laloux. “Financial applications of random matrix theory: Old laces and new pieces”. In: arXiv preprint physics/0507111 (2005).
[9] Liusha Yang, Romain Couillet, and Matthew R McKay. “A robust statistics approach to minimum variance portfolio optimization”. In: IEEE Transactions on Signal Processing 63.24 (2015), pp. 6684–6697.
[10] Zdzislaw Burda and Andrzej Jarosz. “Cleaning large-dimensional covariance matrices for correlated samples”. In: Physical Review E 105.3 (2022), p. 034136.
[11] Olivier Ledoit and Michael Wolf. “A well-conditioned estimator for large-dimensional covariance matrices”. In: Journal of multivariate analysis 88.2 (2004), pp. 365–411.
[12] Olivier Ledoit and Michael Wolf. “The power of (non-) linear shrinking: A review and guide to covariance matrix estimation”. In: Journal of Financial Econometrics 20.1 (2022), pp. 187–218.
[13] David L Donoho, Matan Gavish, and Iain M Johnstone. “Optimal shrinkage of eigenvalues in the spiked covariance model”. In: Annals of statistics 46.4 (2018), p. 1742.
[14] Kaiming He et al. “Deep residual learning for image recognition”. In: Proceedings of the IEEE conference on computer vision and pattern recognition. 2016, pp. 770–778.
14

[15] Fengxiang He, Tongliang Liu, and Dacheng Tao. “Why resnet works? residuals generalize”. In: IEEE transactions on neural networks and learning systems 31.12 (2020), pp. 5349–5362.
[16] Andrés García-Medina, Salvatore Miccichè, and Rosario N Mantegna. “Two-step estimators of highdimensional correlation matrices”. In: Physical Review E 108.4 (2023), p. 044137.
[17] Andrés García-Medina. “High-dimensional covariance matrix estimators on simulated portfolios with complex structures”. In: Physical Review E 111.2 (2025), p. 024316.
[18] Marcin Wątorek et al. “Multiscale characteristics of the emerging global cryptocurrency market”. In: Physics Reports 901 (2021), pp. 1–82. doi: 10.1016/j.physrep.2020.10.005.
[19] Spyros Makridakis, Evangelos Spiliotis, and Maria Michailidis. “Avoiding overconfidence: Evidence from the M6 financial competition”. In: International Journal of Forecasting (2024).
[20] Christian Bongiorno, Efstratios Manolakis, and Rosario Nunzio Mantegna. “End-to-End Large Portfolio Optimization for Variance Minimization with Neural Networks through Covariance Cleaning”. In: arXiv preprint arXiv:2507.01918 (July 2025). Submitted 2 Jul 2025. eprint: 2507.01918 (q-fin.PM).
[21] Giulio Mattera and Raffaele Mattera. “Shrinkage estimation with reinforcement learning of large variance matrices for portfolio selection”. In: Intelligent Systems with Applications 17 (2023), p. 200181.
[22] Harry Markowitz. “Portfolio selection”. In: The journal of finance 7.1 (1952), pp. 77–91.
[23] Thierry Roncalli. Introduction to risk parity and budgeting. CRC Press, 2013.
[24] Stephen Boyd and Lieven Vandenberghe. Convex optimization. Cambridge university press, 2004.
[25] Richard Arnold Johnson and Dean W Wichern. Applied multivariate statistical analysis. Pearson Prentice Hall, 2002.
[26] Marc Potters and Jean-Philippe Bouchaud. A First Course in Random Matrix Theory: For Physicists, Engineers and Data Scientists. Cambridge University Press, 2020.
[27] Jason Brownlee. Deep learning for time series forecasting: predict the future with MLPs, CNNs and LSTMs in Python. Machine Learning Mastery, 2018.
[28] Michael A Nielsen. Neural networks and deep learning. Vol. 25. Determination press San Francisco, CA, USA, 2015.
[29] Michele Tumminello, Fabrizio Lillo, and Rosario N Mantegna. “Kullback-Leibler distance as a measure of the information filtered from multivariate data”. In: Physical Review E 76.3 (2007), p. 031123.
[30] Nathan D Cahill and Darren A Narayan. “Fibonacci and Lucas numbers as tridiagonal matrix determinants”. In: The Fibonacci Quarterly 42.3 (2004), pp. 216–221.
[31] Jonathan E Atkins, Erik G Boman, and Bruce Hendrickson. “A spectral algorithm for seriation and the consecutive ones problem”. In: SIAM Journal on Computing 28.1 (1998), pp. 297–310.
[32] Benjamin Graham and Jason Zweig. The intelligent investor. HarperBusiness Essentials New York, 2003.
15

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:06.823Z
- **Text Length:** 43325 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
