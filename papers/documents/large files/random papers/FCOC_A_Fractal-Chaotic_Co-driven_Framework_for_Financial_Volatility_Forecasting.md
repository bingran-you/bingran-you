# PDF Document: Zeng et al. - 2025 - FCOC A Fractal-Chaotic Co-driven Framework for Financial Volatility Forecasting.pdf

**File Path:** Zeng et al. - 2025 - FCOC A Fractal-Chaotic Co-driven Framework for Financial Volatility Forecasting.pdf

**Processed Date:** 2026-02-10T18:17:25.844Z

**File Size:** 3531.97 KB

**Total Pages:** 29

**Extracted Pages:** 29

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3581

**Title:** FCOC: A Fractal-Chaotic Co-driven Framework for Financial Volatility Forecasting

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Highlights
FCOC: A Fractal-Chaotic Co-driven Framework for Financial Volatility Forecasting
Yilong Zeng, Boyan Tang, Xuanhao Ren, Sherry Zhefang Zhou, Jianghua Wu, Raymond Lee
• Proposes a novel FCOC framework to resolve dual bottlenecks in volatility forecasting.
• Introduces a Fractal Feature Corrector (FFC) for high-fidelity market signals.
• Deploys a Chaotic Oscillation Component (COC) to resolve model complexity mismatch.
• Establishes a co-driven paradigm synergizing fractal features and chaotic dynamics.
arXiv:2511.10365v2 [q-fin.RM] 17 Nov 2025

FCOC: A Fractal-Chaotic Co-driven Framework for
Financial Volatility Forecasting
Yilong Zenga, Boyan Tangc,a, Xuanhao Rena, Sherry Zhefang Zhoua,b,∗, Jianghua Wuc, Raymond Leea,b,∗
aFaculty of Science and Technology, Beijing Normal-Hong Kong Baptist University, Zhuhai, 519087, China bGuangdong Provincial Key Laboratory of Interdisciplinary Research and Application for Data Science, Beijing Normal-Hong Kong Baptist University, Zhuhai, 519087, China cThe Shenzhen Research Institute of Big Data, The Chinese University of Hong Kong, Shenzhen, Shenzhen, 518000, China
Abstract
This paper introduces the Fractal-Chaotic Oscillation Co-driven (FCOC) framework, a novel paradigm for financial volatility forecasting that systematically resolves the dual challenges of feature fidelity and model responsiveness. FCOC synergizes two core innovations: our novel Fractal Feature Corrector (FFC), engineered to extract high-fidelity fractal signals, and a bio-inspired Chaotic Oscillation Component (COC) that replaces static activations with a dynamic processing system. Empirically val-
idated on the S&P 500 and DJI, the FCOC framework demonstrates profound and generalizable impact. The framework fundamentally transforms the performance of previously underperforming architectures, such as the Transformer, while achieving substantial improvements in key risk-sensitive metrics for stateof-the-art models like Mamba. These results establish a powerful co-driven approach, where models are guided by superior theoretical features and powered by dynamic internal processors, setting a new-
 benchmark for risk-aware forecasting.
Keywords: Volatility Forecasting, Intelligent Systems, Deep Learning, Multifractal Analysis, Chaotic Activation Function
∗Corresponding author
Email addresses: sherryzhou@uic.edu.cn (Sherry Zhefang Zhou), raymondshtlee@uic.edu.cn (Raymond Lee)

1. Introduction
The forecasting of financial market volatility, as the second moment of asset returns, is a cornerstone of modern finance, crucial for risk management, option pricing, and portfolio allocation [1]. While deep learning methods have shown immense potential in this domain due to their powerful nonlinear pattern recognition capabilities [2, 3], their full potential remains constrained by two fundamental and often-overlooked bottlenecks in the standard modeling pipeline. The first bottleneck is feature-
 fidelity. Financial time series, as typical complex systems, possess an intrinsic structure that traditional statistical features cannot fully capture. The Fractal Market Hypothesis (FMH) from econophysics [4] points out that long-range memory and multifractal properties are key dynamical characteristics of the market. This makes fractal analysis a powerful and theoretically grounded tool for our investigation. However, the application of these advanced tools faces significant limitations. First,-
 their analytical framework is often limited to a single time series, largely failing to consider the cross-asset risk transmission mechanisms, thus ignoring the asymmetric cross-correlation phenomenon that is at the core of systemic risk [5, 6, 7]. Second, the standard implementation of these methods has inherent instability, is prone to introducing spurious noise, and thus harms the fidelity of the extracted features [8]. These two problems together lead to a situation where the input informatio-
n the model relies on is, at its source, a distorted representation of the market’s true state. The second, and more fundamental, bottleneck lies in model responsiveness. The core processing units widely adopted in deep learning models—static activation functions such as ReLU—reveal their inherent design limitations when processing highly dynamic and non-stationary financial signals. This limitation stems from a complexity mismatch [9]: a simple, fixedlogic processor is used to analyze an essentia-
lly chaotic and dynamic complex signal. This bottleneck means that even with perfect input features, the model’s rigid internal processing mechanism cannot provide an effective dynamic response, ultimately leading to information decay and loss during internal transmission [10]. In fact, these two bottlenecks are not mutually independent; they are two facets of the same underlying challenge posed by chaotic systems. In non
2

linear dynamics, the long-term behavior of a chaotic system is governed by a strange attractor, which possesses an intricate fractal geometry. From this perspective, the challenge of feature fidelity is about accurately quantifying the geometric properties (i.e., the multifractal spectrum) of the market’s underlying strange attractor. The challenge of model responsiveness, in turn, is about having an internal processor that can dynamically react to this geometric information. This intrinsic link -
between chaos and fractals provides the theoretical backbone for our proposed solution. To systematically address these two theoretically unified challenges, this paper proposes the Fractal-Chaotic Oscillation Co-driven (FCOC) framework, a novel paradigm for volatility forecasting. The FCOC framework is built upon two synergistic innovative pillars:
• A Fractal Feature Corrector (FFC), designed to provide a highfidelity market complexity metric by capturing systemic asymmetric cross-correlations and rectifying the stability deficiencies of standard fractal analysis.
• A Chaotic Oscillation Component (COC), which replaces static activation functions with a bio-inspired dynamic system to resolve the critical complexity mismatch within the model.
The core contributions of this study can be summarized as follows:
• We propose the FCOC, a new framework that systematically addresses the dual bottlenecks at both the feature level and the model level in financial forecasting.
• We introduce the FFC, centered on a robust OSW-MF-ADCCA implementation, which significantly improves the stability and fidelity of multifractal feature extraction.
• We deploy the COC, a dynamic activation system which, through a systematic exploration of the parameter space, includes two novel configurations (T9 and T10) proposed to adapt to financial dynamics.
• Through systematic empirical analysis, we demonstrate that the codriven synergy between FFC and COC achieves significant performance gains over a range of benchmark models and establishes a new design philosophy for intelligent systems in complex financial environments.
3

The remainder of this paper is structured as follows. Section 2 reviews the related work. Section 3 provides a detailed exposition of the FCOC framework’s methodology. Section 4 outlines the problem formulation and the experimental setup. Section 5 presents the empirical results and provides an in-depth discussion of the findings. Finally, Section 6 concludes the paper.
2. Related Work
Our research is situated at the intersection of deep learning for finance, econophysics, and computational neuroscience.
2.1. Deep Learning Models for Financial Time Series Forecasting
Modern financial forecasting methods have widely adopted deep learning architectures. Recurrent Neural Networks (RNNs), particularly Long ShortTerm Memory (LSTM) [2, 3] and Gated Recurrent Units (GRU) [11], are commonly used for their ability to handle temporal dependencies. In recent years, more advanced architectures such as the Transformer [12] and statespace models like Mamba have also been explored. For instance, Lu and Xu [13] proposed an efficient Time-series Recurrent Neural Network (TRNN)-
 to improve training efficiency. Chen et al. [14] developed a hybrid model combining a Temporal Convolutional Network (TCN) with BiGRU for new energy stock index forecasting. While these works have made significant progress in model architecture, they almost universally rely on traditional static activation functions, thus failing to fundamentally address the internal model responsiveness problem.
2.2. Multifractal Analysis of Financial Time Series
To overcome the informational limitations of raw time series, a more theoretically profound approach originates from econophysics. This discipline aims to uncover the intrinsic physical laws of the market, with the multifractal nature of financial time series being a key insight that reveals the non-uniformity of volatility across different time scales [15]. In response, econophysics has developed an evolving toolkit of methods, progressing from Detrended Fluctuation Analysis (DFA) [4] to Multifra-
ctal DFA (MF-DFA) [15]. A significant advance came with the recognition of market asymmetry, leading to Asymmetric MF-DFA (A-MFDFA) [16, 17].
4

However, these methods were long confined to single-asset analysis, overlooking the systemic interactions of the market as a whole. In fact, asymmetric cross-correlations between different assets are a key driver of systemic market risk, especially during downturns [5, 6, 7]. Recent work has continued to validate this, with Yu et al. [18] successfully combining multifractal analysis with GRU networks and Wang and Lee [19] applying modified MF-ADCCA to forecast stock index volatility. Although sub-
sequent research began to address cross-correlations with more complex techniques, they commonly inherited a persistent technical flaw from earlier methods: the use of non-overlapping segmentation, which has been shown to introduce spurious fluctuations and compromise the stability of fractal measurements [8]. Our Fractal Feature Corrector (FFC) is designed to solve both of these historical problems simultaneously. By using Multifractal Asymmetric Detrended Cross-Correlation Analysis (MF-ADCCA) [2-
0] as its core to capture systemic interactions, and employing a robust Overlapping Sliding Window (OSW) implementation to correct for instability [21], the FFC aims to provide a more reliable and higher-fidelity set of complexity features than previously available.
2.3. Dynamic and Chaotic Activation Functions
The concept of enhancing neural networks with internal dynamic components originates from computational neuroscience. Unlike standard neural networks, the biological brain is believed to operate based on continuous and chaotic neural oscillations [22]. Inspired by this, academia has begun to explore replacing static activation functions with dynamic systems [9]. This direction also aligns with cutting-edge paradigms in econophysics, which posit that financial markets can be viewed as a dynamic ene-
rgy field where assets behave like interacting, chaotic oscillators. From this perspective, an oscillator with excitatory and inhibitory mechanisms is not merely a computational tool but a physical analogy for the fundamental push-pull dynamics of market forces. Therefore, our adoption of the Chaotic Oscillation Component (COC) is dually motivated: computationally, it solves the complexity mismatch problem; physically, it provides a more plausible model for the phenomena we aim to forecast. Our CO-
C is built upon the foundational work on the Lee oscillator [23]. While generative models like the VAR-VAE proposed by Leushuis [24] have started to incorporate probabilistic dynamics in latent spaces, our
5

work focuses on a different, complementary goal: embedding dynamics directly into the neuron’s fundamental activation process. Our core contribution in this area is not only the systematic application of this concept to financial volatility forecasting but also the engineering of two novel oscillator configurations (T9 and T10) through parameter space exploration, specifically to better capture the unique dynamics of financial markets, such as abrupt regime switching.
3. The FCOC Framework and Methodology
The proposed FCOC framework addresses the dual challenges of robust feature extraction and dynamic model responsiveness. The overall architecture of the framework is depicted in Figure 1. This section provides a comprehensive technical exposition of the two innovative pillars that constitute the framework. First, we detail the FFC, whose core is our novel OSW-MF-ADCCA algorithm, designed to generate high-fidelity fractal features. Second, we elaborate on the COC, which fundamentally upgrades the n-
etwork’s internal processing units from static activation functions to a dynamic chaotic system.
Figure 1: Conceptual Architecture of the FCOC Framework.
6

3.1. Fractal Feature Corrector (FFC)
The Fractal Feature Corrector is designed to address the feature fidelity bottleneck by resolving the two fundamental limitations of prior fractal analyses identified in our introduction: their confinement to single-asset analysis and their inherent measurement instability. At its core is our robust OSWMF-ADCCA algorithm, a technique that quantifies the asymmetric and multifractal cross-correlations between two non-stationary time series. Its core procedure involves analyzing the cumulative deviat-
ion profiles of the series through systematically overlapping sub-intervals. For two time series, rx(t) and ry(t) (for t = 1, . . . , N ), the detailed implementation steps are as follows: Step 1: Profile Construction
The cumulative deviation series, denoted as profiles Px(k) and Py(k), are first generated from the original series:
Px(k) =
k
X
t=1
(rx(t) − μx), k = 1, . . . , N (1)
Py(k) =
k
X
t=1
(ry(t) − μy), k = 1, . . . , N (2)
where μx and μy represent the mean values of the entire series rx and ry, respectively. To facilitate the asymmetry analysis, the primary market return series, rx(t), is designated as the proxy for the local market trend. Step 2: Overlapping Segmentation
The profiles are partitioned into segments of length s using a sliding window. The window advances with a stride of sstep, which is governed by an overlap ratio ρ (0 ≤ ρ < 1):
sstep = ⌊s · (1 − ρ) + 0.5⌋ (3)
This process yields Nseg = ⌊(N − s)/sstep⌋ + 1 overlapping segments. In this work, an overlap ratio of ρ = 1/3 is used, a choice that strikes a balance between enhancing statistical stability and maintaining computational efficiency, consistent with practices in related studies [21].
Step 3: Local Detrending and Trend Discrimination
For each segment j (j = 1, . . . , Nseg), a polynomial of order m = 2 is fitted to remove the local trend. The choice of a quadratic polynomial (m = 2) offers a robust balance, effectively removing complex non-linear local trends
common in financial series without overfitting to short-term noise. Let p(j)
x (i)
7

and p(j)
y (i) be the polynomial fits for the segment. The local detrended fluctuation, F 2
seg(s, j), is calculated as:
F2
seg(s, j) = 1
s
s
X
i=1
|(Px(i) − p(j)
x (i)) · (Py(i) − p(j)
y (i))| (4)
Within the same segment, the slope of a linear fit to the index proxy series, denoted as βj, is used to identify the trend’s direction. A positive trend corresponds to βj > 0, and a negative trend otherwise.
Step 4: Directional q-order Fluctuation Functions
Fluctuation functions are then computed by averaging over segments with positive and negative trends separately. For a given order q, these directional functions are defined as:
F+
q (s) =
"
1
Npos
Nseg X
j=1
1 + sgn(βj)
2 [F 2
seg(s, j)]q/2
#1/q
(5)
F−
q (s) =
"
1
Nneg
Nseg X
j=1
1 − sgn(βj)
2 [F 2
seg(s, j)]q/2
#1/q
(6)
where Npos and Nneg are the total counts of segments with positive and negative trends, respectively. The separation is achieved using the sign function, sgn(βj), which returns +1 for a positive local trend slope (βj > 0), −1 for a negative slope, and 0 otherwise. This makes the term (1 + sgn(βj))/2 an indicator that equals 1 only for positive-trend segments, while (1−sgn(βj))/2 acts as an indicator for negative-trend segments. For the special case of q = 0, the averaging is performed in the logar-
ithmic domain to avoid singularities. The fluctuation function is calculated as:
F0(s) = exp 1
2Nseg
Nseg X
j=1
ln[F 2
seg(s, j)]
!
(7)
with analogous definitions for the directional cases F +
0 (s) and F −
0 (s) by applying the respective indicator functions within the summation. Step 5: Estimation of Generalized Hurst Exponents
The existence of long-range power-law cross-correlations is indicated if the fluctuation functions scale with the segment size s as follows:
Fq(s) ∝ sH(q); F +
q (s) ∝ sH+(q); F −
q (s) ∝ sH−(q) (8)
8

where the exponents H(q), H+(q), and H−(q) are the generalized Hurst exponents. They are determined from the slope of a log-log plot of the fluctuation function versus segment size s. Our analysis focuses on the case of q = 2. This choice is standard in the econophysics literature for analyzing volatility persistence, as it directly relates to the second moment (variance) of the fluctuations and provides a measure analogous to the classical Hurst exponent for long-range correlations [15, 25]. Her-
e, H(2) > 0.5 suggests persistent cross-correlations and H(2) < 0.5 suggests anti-persistent crosscorrelations.
Step 6: Rolling Window Feature Generation
To capture the temporal dynamics of market correlations, the Hurst exponents are calculated not once, but continuously over time. A rolling-window approach is implemented, where the exponent is calculated for each day using data from the preceding T days. This methodology generates time-varying feature vectors. The entire procedure is formalized in Algorithm 1.
3.2. Chaotic Oscillation Component (COC)
The second pillar of the FCOC framework, the Chaotic Oscillation Component, addresses a fundamental limitation within deep learning models: the dynamic inertness of conventional activation functions. To overcome this deficiency, we fundamentally upgrade the activation function to a dynamic chaotic micro-system. The process involves two primary stages: first, distilling the complex behavior of multiple oscillators into a library of candidate functions, and second, adaptively selecting from this lib-
rary to produce a final activation value.
3.2.1. Core Engine: Lee Oscillator with Retrograde Signaling (LORS)
The decision to replace a static activation function with a dynamic oscillator represents a fundamental paradigm shift grounded in both econophysics and neuroscience. Classical neural networks, with their simple neuron models, have been criticized for being far simpler than their biological counterparts. Modern neuroscience reveals that the brain does not operate on a simple feed-forward firing of static units; rather, it functions on a substrate of continuous and chaotic oscillations known as bra-
inwaves [22]. It is this underlying oscillatory dynamic that gives rise to complex cognitive functions like memory and perception. Inspired by this, we consider that financial markets, as complex adaptive systems driven by collective human behavior, are
9

Algorithm 1 Rolling Window Feature Generation via OSW-MF-ADCCA
Require:
1: Primary time series rX of length N 2: Secondary time series rY of length N 3: Rolling window size T 4: Step size for window sliding k 5: Overlap ratio ρ Ensure:
6: Hurst exponent series Hoverall, Hpositive, Hnegative
7: function Generate_Hurst_Features(rX, rY , T, k, ρ) 8: Initialize Hall, Hpos, Hneg ← empty lists 9: Nw ← ⌊(N − T )/k⌋ + 1 ▷ Number of windows 10: for i = 0 to Nw − 1 do 11: start ← i × k 12: end ← start + T 13: sX ← rX[start . . . end] 14: sY ← rY [start . . . end]
15: ▷ Calculate exponents for the sub-window 16: H, H+, H− ← Calc_Hurst(sX, sY , q = 2, ρ) 17: Append H to Hall 18: Append H+ to Hpos 19: Append H− to Hneg 20: end for
21: return Hall, Hpos, Hneg
22: end function
more faithfully modeled as a field of interacting oscillators than as a system mapped by static functions. The Lee oscillator, with its design rooted in emulating biologically plausible neural dynamics such as Progressive Memory Recall [26], provides the ideal computational primitive for this paradigm. It allows a system to perform gradual feedback and self-correction when faced with incomplete or noisy inputs through transient chaotic behavior, a mechanism strikingly similar to how market partici-
pants adapt to new information. Specifically, this study employs an advanced variant: the Lee Oscillator with Retrograde Signaling. This model enhances the original design [23] by incorporating retro
10

grade signaling mechanisms observed in neuroscience [27, 28], further boosting its biological plausibility. The neural architecture of the LORS is depicted in Figure 2.
Figure 2: Neural architecture of the Lee Oscillator with Retrograde Signaling (LORS).
Its dynamic behavior is strictly governed by the following set of equations:
f (μ; x) = tanh(μx) (9)
Et+1 = f (a1LORSt + a2Et − a3It + a4St − ξE) (10)
It+1 = f (b1LORSt − b2Et − b3It + b4St − ξI ) (11)
St = i + e · tanh(i) (12)
Ωt+1 = f (St) (13)
LORSt = [Et − It] · e−kSt2 + Ωt (14)
where Et and It represent the states of the excitatory and inhibitory neurons, respectively. The term i is the base input stimulus (i.e., the pre-activation value from the neural network layer), which is modulated into the external stimulus St via the ratio e. The term Ωt represents the retrograde signal itself.
11

The parameters ai and bi are weights governing the internal connections, while ξE and ξI are the corresponding threshold biases. k is an attenuation factor, μ is a gain parameter, and LORSt is the oscillator’s final output at time step t. The hyperbolic tangent (tanh) is used as the base non-linearity f (μ; x) due to its bounded and sigmoidal nature, which is well-suited for modeling neural firing rates. A key aspect of our work is the utilization of a diverse set of ten parameterized Lee oscilla-
tors. The initial eight types, rigorously derived from systematic studies of the oscillator’s bifurcation behavior [10], already provide a broad range of dynamics. These include simple bifurcations (e.g., T1, T4), dense chaotic regions (T2, T3), and more complex structures with periodic windows (T5, T7). To better capture the specific topological features inherent in financial market dynamics, we extend this set through a systematic exploration of the parameter space. This leads to the design of t-
wo additional configurations, T9 and T10, which were empirically identified through parameter space exploration to better capture the unique dynamics of financial markets. The most notable feature of T9 is its multi-modal and highly complex structure around the center, which appears not as a single chaotic cloud but as multiple distinct "lobes" or sub-regimes (see Figure 3). This is specifically designed to be analogous to a market that not only exhibits volatility but can abruptly switch between -
different types of volatile behavior. Conversely, the main characteristic of T10 is its extremely wide and dense chaotic region around the zero-input stimulus. Compared to T2 or T3, it represents a state of generalized and persistent uncertainty, where a much wider range of small input perturbations results in highly unpredictable outcomes. The inclusion of these two targeted configurations enriches the COC’s library, providing a more comprehensive set of dynamic responses to better model the vari-
ed and shifting states of financial volatility. The specific parameter settings are detailed in Table 1, and their corresponding bifurcation patterns are visually illustrated in Figure 3.
3.2.2. Stage 1: Distillation into a Meta-Activation Library
While the LORS provides a wealth of dynamic information, its 100-step temporal trajectory output is architecturally incompatible with standard neural network layers. To bridge this gap, we design a critical processing stage: Max-over-Time (MoT) Pooling. This process is not a mere dimensionality reduction but a fundamental distillation. It transforms the entire
12

Table 1: Parameter settings for the 10 types of Lee Oscillators used in experiments.
T1 T2 T3 T4 T5 T6 T7 T8 T9 T10
a1 0.0 0.5 0.5 -0.5 -0.9 -0.9 -5.0 -5.0 1.0 3.0 a2 5.0 0.55 0.6 0.55 0.9 0.9 5.0 5.0 -1.0 3.0 a3 5.0 0.55 0.55 0.55 0.9 0.9 5.0 5.0 -1.0 3.0 a4 1.0 -0.5 0.5 -0.5 -0.9 -0.9 -5.0 -5.0 -1.0 2.0
b1 0.0 0.5 -0.5 -0.5 0.9 0.9 1.0 1.0 -1.0 0.45 b2 -1.0 -0.55 -0.6 -0.55 -0.9 -0.9 -1.0 -1.0 2.0 -0.45 b3 1.0 -0.55 -0.55 -0.55 -0.9 -0.9 -1.0 -1.0 2.0 -0.45 b4 0.0 -0.5 0.5 0.5 0.9 0.9 1.0 1.0 -1.0 1.0
μ5 1 1 1 1 1 1 1 1 1 k 500 50 50 50 50 300 50 300 50 50 e 0.001 0.001 0.001 0.001 0.001 0.001 0.001 0.001 0.001 0.001
Figure 3: Bifurcation diagrams for the ten LORS types, showcasing the diverse dynamic behaviors.
13

dynamic trajectory of an oscillator into a single and salient scalar value, effectively creating a unique, static, yet highly nonlinear meta-activation function. The procedure, formalized in Algorithm 2, is applied to each of the ten oscillator types for a given pre-activation value x. The result is a library of ten distinct meta-activation functions, {fT1(x), . . . , fT10(x)}, as visualized in Figure 4. This library forms the foundation for the subsequent adaptive selection stage.
Algorithm 2 Meta-Activation Generation via Max-over-Time (MoT) Pooling
Require:
1: Pre-activation value x ∈ R 2: Set of M = 10 Lee oscillator parameter configurations, C 3: Number of oscillator steps, N = 100 Ensure:
4: A vector of M scalar meta-activation values A(x)
5: function GenerateMetaActivations(x, C) 6: Initialize A(x) ← empty vector of size M 7: for i = 1 to M do
8: Ctype ← C[i]
9: LORSraw_traj ← Run_Oscillator(x, Ctype, steps = N )
10: LORSdynamics ← LORSraw_traj[1 :] 11: ftype(x) ← max(LORSdynamics) 12: A(x)[i] ← ftype(x) 13: end for 14: return A(x) 15: end function
3.2.3. Stage 2: Final Activation via Maximum Response Selection
Once the library of ten meta-activation functions is generated for a given input x (producing the vector A(x) as per Algorithm 2), the final step is to produce a single activation output. For this, we adopt the Maximum Response Selection (Max-Select) strategy. This choice is not arbitrary but is deliberately grounded in the Winner-Takes-All (WTA) principle, a computational mechanism with deep roots in theoretical neuroscience and continued relevance in modern cognitive science. The WTA concept, fo-
undational to
14

Figure 4: The ten distinct meta-activation functions, ftype(x), generated by applying Maxover-Time (MoT) pooling.
the theory of efficient neural coding [29], posits that from a group of competing processing units, only the one with the strongest response should determine the final output. This principle is considered a cornerstone of models explaining decision-making and perception [30]. The theoretical justification for using Max-Select is twofold. First, from a neuro-computational perspective, each of our ten oscillators represents a distinct potential dynamic regime (e.g., stable, bifurcating, wide-band ch-
aotic). For any given input stimulus x, it is plausible that one specific dynamic regime is predominantly responsible for the system’s subsequent behavior. The Max-Select strategy, by implementing a hard form of WTA, identifies and propagates the response from this single, most dominant regime. An alternative like averaging would dilute this salient signal by mixing it with weaker, less relevant dynamic responses, thereby obscuring the critical information. Second, from a modeling perspective, Max-
-Select offers a robust, parameter
15

free alternative to more complex, learnable mechanisms like an attention layer. While an attention mechanism could learn to weigh the oscillators, it would introduce additional parameters and computational overhead, increasing the risk of overfitting. In contrast, our principled, biologically-inspired approach is both efficient and highly effective, as confirmed by our extensive empirical validation.
fLee(x) = max (A(x)) = max (fT1(x), . . . , fT10(x)) (15)
This approach allows us to leverage a diverse set of dynamic behaviors through a decisive selection mechanism rather than a blended compromise.
4. Problem Formulation and Experiments
This section formally defines the volatility forecasting problem and details the empirical validation of the FCOC framework. We begin by describing the dataset and feature generation process, and subsequently outline the complete experimental setup, including model configurations, evaluation metrics, and training protocols.
4.1. Data Description and Feature Generation
In this study, we use the 5-minute intraday returns and daily log-returns for two major U.S. stock market indices: the Standard & Poor’s (S&P) 500 Index and the Dow Jones Index (DJI). The data are obtained from the Wind Economics Database of China. The sample data consists of calculated RV data for the S&P 500 and the DJI, spanning from December 13, 2005 to February 7, 2025, and from October 9, 2009 to February 7, 2025, respectively, which reflects the availability of the sampled high-frequency da-
ta for both indices. This combined time frame allows for a comprehensive analysis covering a wide range of market conditions, including the aftermath of the 2008 financial crisis, the subsequent period of quantitative easing, and the 2020 COVID-19 crash. We employ the daily realized volatility (RV) as the proxy of the true latent volatility, as it is nearly unbiased and efficient [31]. For a given trading day t with M intraday returns, RV is formally defined as:
RVt =
M
X
j=1
r2
t,j (16)
16

where rt,j is the j-th intraday log return in percentage on day t. The use of high-frequency data to construct RV offers a significant advantage over traditional low-frequency estimators (e.g., squared daily returns), as it provides a much more precise and less noisy measure of daily price variation. In this analysis, our primary objective is to forecast the one-day-ahead RV for both indices. To generate the fractal features via OSW-MF-ADCCA for each index, we construct two primary input series f-
rom the high-frequency data. The first is the daily log return (rt) in percentage:
rt = 100 × (ln(Pt) − ln(Pt−1)) (17)
where Pt is the closing price on day t. The second input series is the volatility increment (vt), which captures the dynamics of volatility changes. It is constructed using the realized bipower variation (BP Vt), a measure known for its robustness to price jumps [32]. For a day t with M intraday returns rt,j, BPV is defined as:
BP Vt = μ−2
1
M
X
j=2
|rt,j||rt,j−1| (18)
where μ1 = p2/π. We then define the volatility increment vt as the logdifference of the square root of BPV:
vt = ln(pBP Vt) − ln(pBP Vt−1) (19)
The distinction between using a BPV-derived measure for feature engineering and RV as the forecast target is a deliberate methodological choice. While BPV and RV are closely related, BPV’s jump-robust nature allows our fractal analysis to capture the underlying persistence of the continuous component of volatility, providing a cleaner and more stable signal of the market’s memory state. Our forecast target, however, is the RV, as it represents the complete price variation, including jumps, and is -
therefore of greater practical and economic importance for risk management and option pricing. This approach avoids trivializing the forecasting task while leveraging the best possible signal for feature extraction. The characteristics of these key time series are presented visually in Figure 5 and statistically in Table 2. The plots visually confirm the rationale
17

for focusing on RV; while log returns appear highly noisy, the RV series for both indices exhibit clear structural patterns like volatility clustering, making them more statistically tractable targets. The descriptive statistics further confirm the stylized facts of financial data. For both indices, the RV and rt series exhibit extremely high kurtosis and significant Jarque-Bera (JB) statistics, rejecting normality and indicating fat-tailed distributions. Furthermore, the Augmented Dickey-Fuller -
(ADF) and KPSS tests confirm that the input series (rt and vt) are stationary, validating their direct use in our models. These properties motivate the use of advanced architectures for capturing such complex dynamics.
(a) S&P 500 Daily Log Return (rt). (b) DJI Daily Log Return (rt).
(c) S&P 500 Realized Volatility (RV). (d) DJI Realized Volatility (RV).
Figure 5: Comparison of Log Return and Realized Volatility series for the S&P 500 and DJI.
Table 2: Descriptive statistics for key time series of the S&P 500 and DJI
Index Variable Mean Max Min Std. Dev. Kurtosis JB ADF KPSS
S&P 500
RV 0.8538 59.4474 0.0088 2.2696 175.02 5903183.63*** -7.326*** 0.5817 rt 0.0317 10.7811 -12.7652 1.2453 12.01 27556.77*** -17.113*** 0.2214 vt 0.0002 1.4818 -1.1975 0.3375 0.55 72.84*** -16.745*** 0.0167
DJI
RV 0.5665 40.1264 0.0155 1.6341 266.12 10733939.86*** -10.191*** 0.2405 rt 0.0380 10.7639 -13.8418 1.0431 21.06 66928.69*** -12.722*** 0.0173 vt 0.0001 1.4191 -1.4339 0.3281 0.60 67.66*** -15.807*** 0.0159
Note: *, **, and *** denote rejection of the null hypothesis at the 10%, 5%, and 1% significance levels, respectively.
Using the OSW-MF-ADCCA algorithm, we compute the time-varying asymmetric Hurst exponents for each index by applying a rolling window of
18

T = 252 days (i.e., number of trading days in a year) to their respective (rt, vt) pairs. This process generates the core feature set for our models.
4.2. Experimental Setup
Our experimental design is structured to rigorously evaluate the performance and generalizability of the FCOC framework. The primary objective is to forecast the one-day-ahead realized volatility (RVt+1) for both the S&P 500 and DJI indices. To ensure a robust out-of-sample evaluation, each dataset is chronologically divided into training, validation, and test sets according to an approximate 7:1:2 ratio, respectively. This results in three distinct and non-overlapping periods dedicated to model l-
earning, hyperparameter optimization, and final performance assessment. Prior to training, all input features undergo Min-Max normalization to scale them into a consistent [0, 1] range, a standard procedure to stabilize the learning process. The transformation is defined by the formula:
x′ = x − xmin
xmax − xmin
(20)
where xmin and xmax represent the minimum and maximum values of a feature over the training set, respectively. Crucially, for each dataset, these scaling parameters are computed only on its respective training set and are then applied to its validation and testing sets to prevent any data leakage. For the training process, all models are optimized by minimizing the Mean Squared Error (MSE) loss function using the Adam optimizer. The MSE is chosen as the training objective due to its stability and -
its property of heavily penalizing large prediction errors. For hyperparameter tuning on the validation set, we adopt a holistic evaluation approach. While all four performance metrics - MSE, Mean Absolute Error (MAE), the Coefficient of Determination (R2), and the Quasi-Likelihood (QLIKE) - are considered to ensure a well-rounded performance, we place a particular emphasis on the QLIKE loss [33]. As a robust loss function for comparing volatility models under noisy conditions, QLIKE serves as a k-
ey criterion for final model selection, ensuring that our chosen configurations are both accurate and superior from a risk-management perspective. Key hyperparameters, such as the learning rate (with a primary value of 0.001) and number of hidden neurons, are tuned via the grid search, with a fixed look-back window of 60 days and a batch size of 64.
19

To ensure the robustness of our findings, we apply the Model Confidence Set (MCS) procedure [34] to identify an optimal set of models with predictive advantages, considering that multiple models can be considered the best with the equal predictive accuracy. The MCS test is applied to a pool of models comprising the benchmark models and their variants enhanced with either the standard MF-ADCCA or our proposed OSW-MF-ADCCA features. This comparison allows us to statistically validate the effectiven-
ess of our feature engineering approach before integrating it into the final FCOC framework. At a 25% significance level, we conduct the procedure with 10,000 bootstrap resamples and a block length of 30 to generate the MCS p-values.
5. Empirical Analysis
To validate the robustness and generalizability of the FCOC framework, we conduct a comprehensive study on forecasting the RV of two of the world’s most prominent stock market indices: the S&P 500 and the DJI. While both represent the mature U.S. market, they differ significantly in their composition and weighting methodology, providing a robust testbed for our methodology. All experiments are implemented in Python 3.10 using the PyTorch 2.0 framework with CUDA 11.8 acceleration on a system equipp-
ed with an NVIDIA RTX 3060 GPU, an Intel i7-11800H CPU, and 32GB of RAM.
5.1. Performance of the Fractal Feature Corrector (FFC)
We first evaluate the effectiveness of the FFC component by comparing benchmark models against variants enhanced with fractal features. Table 3 details the performance of models augmented with standard MF-ADCCA and our proposed OSW-MF-ADCCA. The results consistently show that enriching models with fractal features improves forecasting accuracy. Notably, the OSW-MF-ADCCA variant, which mitigates spurious fluctuations through overlapping segmentation, generally yields the best performance across all-
 model families and datasets. For example, it boosts the Transformer’s R2 on the S&P 500 from 0.1234 to 0.3829, a 210% increase. To statistically validate this choice, we conducted a Model Confidence Set (MCS) test, with results presented in Table 4. The OSW-MF-ADCCA configuration achieves a p-value of 1.0000 across all scenarios, indicating that it is the sole member of the superior set of models at a 25% significance level. This confirms the robustness of our feature extraction method and justif-
ies its use as the core of the FFC.
20

Table 3: Comparative performance of FFC-enhanced models on the S&P 500 and DJI indices. Best results within each model family and index are in bold.
Model Family Method S&P 500 Dow Jones Industrial Average R2 (↑) QLIKE (↓) MAE (↓) MSE (↓) R2 (↑) QLIKE (↓) MAE (↓) MSE (↓)
LSTM
Benchmark 0.4460 0.2238 0.2782 0.3030 0.4618 0.1687 0.1936 0.1453 MF-ADCCA 0.4556 0.2064 0.2784 0.2978 0.4794 0.1602 0.1922 0.1405 OSW-MF-ADCCA 0.4643 0.2066 0.2774 0.2930 0.4968 0.1508 0.1906 0.1358
GRU
Benchmark 0.4335 0.2371 0.2787 0.3099 0.3549 0.2062 0.2113 0.1741 MF-ADCCA 0.4121 0.2590 0.2850 0.3216 0.3948 0.2095 0.2059 0.1633 OSW-MF-ADCCA 0.4687 0.2056 0.2757 0.2906 0.4051 0.1867 0.2037 0.1606
Mamba
Benchmark 0.4099 0.2686 0.2861 0.3228 0.2632 0.1602 0.2648 0.1989 MF-ADCCA 0.4176 0.2616 0.2864 0.3186 0.3197 0.1529 0.2193 0.1836 OSW-MF-ADCCA 0.4593 0.2159 0.2811 0.2958 0.4365 0.1498 0.2080 0.1521
Transformer
Benchmark 0.1234 0.1993 0.3793 0.4816 0.3700 0.1693 0.2698 0.1701 MF-ADCCA 0.1411 0.2034 0.3824 0.4719 -1.0111 0.2194 0.4321 0.5428 OSW-MF-ADCCA 0.3829 0.1995 0.3083 0.3375 0.4045 0.1445 0.2188 0.1607
Table 4: Model Confidence Set (MCS) p-values at 25% Significance Level.
Index Model Benchmark MF-ADCCA OSW-MF-ADCCA
S&P 500
LSTM 0.0130 0.0430 1.0000 GRU 0.0130 0.0130 1.0000 Mamba 0.0090 0.0060 1.0000 Transformer 0.0120 0.0130 1.0000
DJI
LSTM 0.0250 0.0250 1.0000 GRU 0.0480 0.0600 1.0000 Mamba 0.0130 0.1510 1.0000 Transformer 0.2480 0.0200 1.0000
5.2. Ablation Study and Synergistic Gains of the FCOC Framework
Having validated the effectiveness of the FFC, we now conduct a comprehensive ablation study to dissect the individual contribution of the Chaotic Oscillation Component (COC) and demonstrate the synergistic power of the full FCOC framework. We compare four configurations: (1) Benchmark (Base Features + ReLU), (2) COC-only (Base Features + COC), (3) FFConly (Fractal Features + ReLU), and (4) the Full FCOC framework (Fractal Features + COC). The complete results are presented in Table 5. The results-
 provide direct and powerful evidence for our central thesis. The "COC-only" configuration demonstrates significant performance gains over the benchmark across all tested architectures, strongly validating our hypothesis of a fundamental complexity mismatch between static processors and dynamic financial signals. This effect is most pronounced in the case of the Transformer on the S&P 500, where merely replacing the static ReLU with our dynamic COC causes its R2 to surge from a dismal 0.1234 to a
21

competitive 0.4413—a dramatic improvement of over 250%. This proves the standalone novelty and value of the COC. Ultimately, the full FCOC framework consistently delivers the best overall performance, revealing a powerful synergistic effect. In nearly every case, the full framework (4) outperforms not only the benchmark (1) but also both single-component configurations (2 and 3). For example, on the DJI, the FCOC-Mamba achieves an R2 of 0.5066, substantially higher than both the FFC-only (0.4365)-
 and COC-only (0.4913) versions. This confirms that the highest-fidelity signals from the FFC are most effectively leveraged by the commensurately complex processor of the COC, validating our co-driven design philosophy. The visual forecasts in Figure 6 further corroborate the superior accuracy of the full FCOC models.
Table 5: Comprehensive Ablation Study of FCOC Framework Components on S&P 500 and DJI Test Sets.
Dataset Model (1) Benchmark (2) COC-only
R2 (↑) QLIKE (↓) MAE (↓) MSE (↓) R2 (↑) QLIKE (↓) MAE (↓) MSE (↓)
S&P 500
LSTM 0.4460 0.2238 0.2782 0.3030 0.4738 0.1920 0.2713 0.2591 GRU 0.4335 0.2371 0.2787 0.3099 0.4633 0.2032 0.2652 0.2643 Mamba 0.4099 0.2686 0.2861 0.3228 0.4726 0.2008 0.2668 0.2597 Transformer 0.1234 0.1993 0.3793 0.4816 0.4413 0.1912 0.2866 0.2751
DJI
LSTM 0.4618 0.1687 0.1936 0.1453 0.4849 0.1512 0.1941 0.1401 GRU 0.3549 0.2062 0.2113 0.1741 0.4339 0.1953 0.2008 0.1540 Mamba 0.2632 0.1602 0.2648 0.1989 0.4913 0.1506 0.1959 0.1384 Transformer 0.3700 0.1693 0.2698 0.1701 0.4717 0.1595 0.1990 0.1437
Dataset Model (3) FFC-only (4) Full FCOC Framework
R2 (↑) QLIKE (↓) MAE (↓) MSE (↓) R2 (↑) QLIKE (↓) MAE (↓) MSE (↓)
S&P 500
LSTM 0.4643 0.2066 0.2774 0.2930 0.4950 0.1872 0.2822 0.2774 GRU 0.4687 0.2056 0.2757 0.2906 0.4848 0.1906 0.2877 0.2831 Mamba 0.4593 0.2159 0.2811 0.2958 0.4762 0.1899 0.2921 0.2865 Transformer 0.3829 0.1995 0.3083 0.3375 0.4733 0.1920 0.2980 0.2881
DJI
LSTM 0.4968 0.1508 0.1906 0.1358 0.5061 0.1400 0.1946 0.1333 GRU 0.4051 0.1867 0.2037 0.1606 0.4621 0.1545 0.2053 0.1452 Mamba 0.4365 0.1498 0.2080 0.1521 0.5066 0.1384 0.2031 0.1332 Transformer 0.4045 0.1445 0.2188 0.1607 0.4851 0.1590 0.1919 0.1390
* Note: Best results for each metric within each (Dataset, Model) group are highlighted in bold.
5.3. Discussion
The comprehensive empirical results do more than simply demonstrate superior forecasting accuracy; they provide deep insights into the architectural synergies of our co-driven framework and reveal fundamental limitations in current deep learning approaches to financial forecasting. The framework’s
22

(a) Mamba-FCOC Forecast (S&P 500) (b) Transformer-FCOC Forecast (S&P 500)
(c) Mamba-FCOC Forecast (DJI) (d) Transformer-FCOC Forecast (DJI)
Figure 6: Comparative out-of-sample forecasting performance for representative FCOC models on the S&P 500 and DJI test sets.
impact is perhaps most vividly demonstrated by resolving what we term the Transformer Paradox. While the benchmark Transformer fails on noisy financial data due to its unconstrained attention mechanism, the FCOC framework orchestrates a dramatic recovery. The ablation study proves unequivocally that the Chaotic Oscillation Component (COC) is the decisive factor, as its introduction alone is sufficient to fix the Transformer’s core weakness by providing a dynamic processing unit whose complexity ma-
tches the signal. While the framework serves as a corrective measure for such architectures, for models with strong sequential priors like LSTM and Mamba, it acts as a powerful empowerment layer. Here, the synergy of our framework’s two pillars shines: the Fractal Feature Corrector (FFC) provides a direct, highfidelity signal of the market’s memory state, which is then processed by the COC’s dynamic engine. The spectacular 92.5% R2 improvement for the FCOC-Mamba model on the DJI dataset is the def-
initive evidence of this co-driven synergy, unlocking the full potential of advanced architectures. Beyond these performance gains, our findings point toward deeper principles and promising new research frontiers. An intriguing finding is the models’ architectural affinity for specific chaotic dynamics, such as the preference of S&P 500 models for the multi-modal T9 oscillator. We speculate
23

that this is not arbitrary, but rather evidence of a "dynamic resonance" between the model’s internal structure and the data’s topological properties. This suggests a future research direction beyond one-size-fits-all activations toward architecture-dynamics co-design. From a practical standpoint, the nuanced behavior of the error metrics further underscores the framework’s value. The marked improvements in MSE and QLIKE, even with slight degradation in MAE in some cases, are not a trade-off but -
a desirable feature for risk management. It demonstrates that our framework excels at mitigating catastrophic risk during market turmoil by heavily penalizing large errors, a highly favorable characteristic for any real-world financial application.
6. Conclusion
This paper introduces the FCOC framework, a novel architecture designed to address the dual bottlenecks of feature fidelity and model responsiveness in volatility forecasting. By synergistically combining our novel Fractal Feature Corrector with a dynamic Chaotic Oscillation Component, our framework significantly enhances the predictive power of advanced deep learning models. Our comprehensive empirical study on the S&P 500 and DJI demonstrates the framework’s robustness and generalizability. The -
findings reveal that FCOC not only empowers sequential models like LSTM by providing explicit market-state information but also offers a path to resolving the Transformer Paradox by equipping its attention mechanism with a crucial inductive bias. This work validates a new co-driven paradigm, showing that the synergy between superior theoretical features and dynamic internal processors is a key factor in unlocking the full potential of deep learning in complex financial environments. Future researc-
h should focus on both deepening the theoretical underpinnings of this approach—for instance, by using nonlinear time series and topological data analysis to quantitatively compare the market’s attractor reconstruction with the oscillators’ phase space structures—and extending its practical applications to extreme settings like cryptocurrency markets and domains such as algorithmic trading and portfolio optimization.
Declaration of Competing Interest
The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.
24

CRediT authorship contribution statement
Yilong Zeng: Conceptualization, Methodology, Software, Validation, Formal analysis, Investigation, Writing – Original Draft. Boyan Tang: Methodology, Software, Data Curation. Xuanhao Ren: Visualization, Investigation. Sherry Zhefang Zhou: Conceptualization, Supervision, Writing – Review & Editing, Funding acquisition. Jianghua Wu: Supervision, Project administration. Raymond Lee: Conceptualization, Supervision, Writing – Review & Editing, Funding acquisition.
Acknowledgments
This work was supported in part by the Guangdong Provincial Key Laboratory of IRADS (2022B1212010006) and the Shenzhen Research Institute of Big Data (J00220240006).
Data availability statement
The data that support the findings of this study are available from Wind. Restrictions apply to the availability of these data, which are used under license for this study. Data are available from https://www.wind.com.cn/
References
[1] S. J. Taylor, Asset price dynamics, volatility, and prediction, Princeton university press, 2011.
[2] H.-Y. Kim, C.-H. Won, Forecasting the volatility of stock price index: A hybrid model integrating lstm with multiple garch-type models, Expert Systems with Applications 103 (2018) 25–37.
[3] Y. Liu, Novel volatility forecasting using deep learning–long short term memory recurrent neural networks, Expert Systems with Applications 132 (2019) 99–109.
[4] E. E. Peters, Fractal market analysis: applying chaos theory to investment and economics, John Wiley & Sons, 1994.
[5] F. Longin, B. Solnik, Extreme correlation of international equity markets, The Journal of finance 56 (2) (2001) 649–676.
25

[6] A. Ang, J. Chen, Asymmetric correlations of equity portfolios, Journal of Financial Economics 63 (3) (2002) 443–494.
[7] L. Ding, H. Miyake, H. Zou, Asymmetric correlations in equity returns: a fundamental-based explanation, Applied Financial Economics 21 (6) (2011) 389–399.
[8] A. Bashan, R. Bartsch, J. W. Kantelhardt, S. Havlin, Comparison of detrending methods for fluctuation analysis, Physica A: statistical mechanics and its applications 387 (21) (2008) 5080–5090.
[9] J. Wang, R. Lee, Chaotic recurrent neural networks for financial forecast, American Journal of Neural Networks and Applications 7 (1) (2021) 714.
[10] R. S. T. Lee, Chaotic type-2 transient-fuzzy deep neuro-oscillatory network (ct2tfdnn) for worldwide financial prediction, IEEE Transactions on Fuzzy Systems 28 (4) (2019) 731–745.
[11] S. Chen, Z. Zhang, Forecasting implied volatility smile surface via deep learning and attention mechanism, arXiv preprint arXiv:1912.11059 (2019).
[12] A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, I. Polosukhin, Attention is all you need, Advances in neural information processing systems 30 (2017).
[13] M. Lu, X. Xu, Trnn: An efficient time-series recurrent neural network for stock price prediction, Information Sciences 657 (2024) 119951.
[14] W. Chen, N. An, M. Jiang, L. Jia, An improved deep temporal convolutional network for new energy stock index prediction, Information Sciences 682 (2024) 121244.
[15] J. W. Kantelhardt, S. A. Zschiegner, E. Koscielny-Bunde, S. Havlin, A. Bunde, H. E. Stanley, Multifractal detrended fluctuation analysis of nonstationary time series, Physica A: Statistical Mechanics and its Applications 316 (1-4) (2002) 87–114.
[16] M.-C. Lee, J.-W. Song, J.-H. Park, W. Chang, Asymmetric multifractality in the us stock indices using index-based model of a-mfdfa, Chaos, Solitons & Fractals 97 (2017) 28–38.
26

[17] M.-C. Lee, J.-W. Song, S. Kim, W. Chang, Asymmetric market efficiency using the index-based asymmetric-mfdfa, Physica A: Statistical Mechanics and its Applications 512 (2018) 1278–1294.
[18] X. Yu, D. Zhang, T. Zhu, X. Jiang, Novel hybrid multi-head selfattention and multifractal algorithm for non-stationary time series prediction, Information Sciences 613 (2022) 541–555.
[19] L. Wang, R. S. Lee, Stock index return volatility forecast via excitatory and inhibitory neuronal synapse unit with modified mf-adcca, Fractal and Fractional 7 (4) (2023) 292.
[20] G.-X. Cao, J. Cao, L.-b. Xu, L.-y. He, Detrended cross-correlation analysis approach for assessing asymmetric multifractal detrended crosscorrelations and their application to the chinese financial market, Physica A: Statistical Mechanics and its Applications 393 (2014) 460–469.
[21] Y. Tang, P. Zhu, Research of long memory, risk and efficiency of bull and bear based on csi300 index futures: From the perspective of multifractality, Mange. Rev 8 (2019) 59–70.
[22] W. Freeman, Neurodynamics: an exploration in mesoscopic brain dynamics, Springer Science & Business Media, 2000.
[23] R. S. Lee, A transient-chaotic autoassociative network (tcan) based on lee oscillators, IEEE Transactions on Neural Networks 15 (5) (2004) 1228–1243.
[24] R. M. Leushuis, Probabilistic forecasting with var-vae: Advancing time series forecasting under uncertainty, Information Sciences 713 (2025) 122184.
[25] B. Podobnik, H. E. Stanley, Detrended cross-correlation analysis: A new method for analyzing two nonstationary time series, Physical review letters 100 (8) (2008) 084102.
[26] R. S. T. Lee, Lee-associator–a transient chaotic auto-associative network for progressive memory recalling, Neural Networks 19 (6-7) (2006) 644666.
27

[27] I. B. Levitan, L. K. Kaczmarek, The neuron: cell and molecular biology, Oxford University Press, USA, 2002.
[28] M. H. Wong, R. S. Lee, J. N. K. Liu, Wind shear forecasting by chaotic oscillatory-based neural networks (conn) with lee oscillator (retrograde signalling) model, in: 2008 IEEE International Joint Conference on Neural Networks (IEEE World Congress on Computational Intelligence), IEEE, 2008, pp. 2040–2047.
[29] H. B. Barlow, Single units and sensation: a neuron doctrine for perceptual psychology?, Perception 1 (4) (1972) 371–394.
[30] A. Heathcote, D. Matzke, Winner takes all! what are race models, and why and how should psychologists use them?, Current Directions in Psychological Science 31 (1) (2022) 80–87.
[31] T. G. Andersen, T. Bollerslev, F. X. Diebold, P. Labys, Modeling and forecasting realized volatility, Econometrica 71 (2) (2003) 579–625.
[32] O. E. Barndorff-Nielsen, N. Shephard, Power and bipower variation with stochastic volatility and jumps, Journal of financial econometrics 2 (1) (2004) 1–37.
[33] A. J. Patton, Volatility forecast comparison using imperfect volatility proxies, Journal of econometrics 160 (1) (2011) 246–256.
[34] P. R. Hansen, A. Lunde, J. M. Nason, The model confidence set, Econometrica 79 (2) (2011) 453–497.
28

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:25.844Z
- **Text Length:** 54143 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 29 of 29
