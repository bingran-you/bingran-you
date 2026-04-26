# PDF Document: Díaz-Ruiz et al. - 2025 - CSI Prediction Frameworks for Enhanced 5G Link Adaptation Performance-Complexity Trade-offs.pdf

**File Path:** Díaz-Ruiz et al. - 2025 - CSI Prediction Frameworks for Enhanced 5G Link Adaptation Performance-Complexity Trade-offs.pdf

**Processed Date:** 2026-02-10T18:13:37.289Z

**File Size:** 725.98 KB

**Total Pages:** 13

**Extracted Pages:** 13

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3356

**Title:** CSI Prediction Frameworks for Enhanced 5G Link Adaptation: Performance-Complexity Trade-offs

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 1
CSI Prediction Frameworks for Enhanced 5G Link
Adaptation: Performance–Complexity Trade-offs
Francisco D ́ıaz-Ruiz, Francisco J. Mart ́ın-Vega, Jos ́e A. Cort ́es, Gerardo G ́omez and Mari Carmen Aguayo
Abstract—Accurate and timely channel state information (CSI) is fundamental for efficient link adaptation. However, challenges such as channel aging, user mobility, and feedback delays significantly impact the performance of adaptive modulation and coding (AMC). This paper proposes and evaluates two CSI prediction frameworks applicable to both time division duplexing (TDD) and frequency division duplexing (FDD) systems. The proposed methods operate in the effective signal to interference plus nois-
e ratio (SINR) domain to reduce complexity while preserving predictive accuracy. A comparative analysis is conducted between a classical Wiener filter and state-of-the-art deep learning frameworks based on gated recurrent units (GRUs), long short-term memory (LSTM) networks, and a delayed deep neural network (DNN). The evaluation considers the accuracy of the prediction in terms of mean squared error (MSE), the performance of the system, and the complexity of the implementation regarding floating -
point operations (FLOPs). Furthermore, we investigate the generalizability of both approaches under various propagation conditions. The simulation results show that the Wiener filter performs close to GRU in terms of MSE and throughput with lower computational complexity, provided that the second-order statistics of the channel are available. However, the GRU model exhibits enhanced generalization across different channel scenarios. These findings suggest that while learningbased solutions are wel-
l-suited for TDD systems where the base station (BS) handles the computation, the lower complexity of classical methods makes them a preferable choice for FDD setups, where prediction occurs at the power-constrained user equipment (UE).
Index Terms—CSI prediction, link adaptation, 5G, deep learning, GRU, LSTM, Wiener filter.
I. INTRODUCTION
A. Motivation and Scope
L
INK ADAPTATION (LA) is a fundamental mechanism in modern wireless communication systems, enabling the dynamic adjustment of transmission parameters based on accurate and timely channel state information (CSI) [1, 2]. By adapting the modulation and coding scheme (MCS) to instantaneous channel conditions, LA aims to maximize spectral efficiency while maintaining reliable communication within the operating constraints of the system [3]. In time division duplexing (TDD) systems, downlink CSI can be in-
ferred from uplink measurements due to the reci
Manuscript received April xx, 2025; revised XXX. This work has been supported by Grant PID2022-137522OB-I00 funded by MCIN/AEI/10.13039/501100011033 and by FEDER A way of making Europe, Keysight Technologies, Junta de Andalucı ́a, and University of Ma ́laga (UMA). The authors are with the Communications and Signal Processing Lab, Telecommunication Research Institute (TELMA), Universidad de M ́alaga, E.T.S. Ingenierı ́a de Telecomunicacio ́n, Bulevar Louis Pasteur 35, 29010 Ma ́laga (Spain). (e-mai-
l: {fdiaz, fjmv, jaca, ggomez, aguayo}@ic.uma.es)
procity of the wireless channel. In contrast, frequency division duplexing (FDD) systems lack such reciprocity, requiring the user equipment (UE) to estimate the downlink CSI and report it to the base station (BS), thus introducing additional signaling overhead. According to the 3GPP specification [4], the CSI report comprises three key indicators: the precoding matrix indicator (PMI), rank indicator (RI), and the channel quality indicator (CQI). Specifically, the PMI identifies the optimal precod-
ing matrix from a predefined codebook, the RI indicates the preferred multiple-input multiple-output (MIMO) transmission rank, and the CQI recommends the most suitable MCS based on the channel conditions. A major challenge in LA based on adaptive modulation and coding (AMC) is channel aging, which results from the temporal discrepancy between the estimation of CSI and its subsequent use for data transmission in future slots [5]. This mismatch is typically caused by user mobility and processing del-
ays, leading to degraded system performance, suboptimal MCS selection, and increased error rates [6]. Although transmitting reference signals more frequently mitigates channel aging, this solution incurs a significant overhead that reduces the overall system throughput. To mitigate the effects of channel aging without additional signaling overhead, predictive CSI frameworks have emerged as promising solutions. These approaches leverage temporal and spatial correlations in the wireless channel to p-
redict future channel states, enabling more accurate and timely LA decisions [7]. Predictive CSI has demonstrated significant potential to improve link reliability and spectral efficiency, particularly in highly dynamic environments. Classical channel prediction algorithms, such as Wiener filters and Kalman-based methods, have been widely explored due to their simplicity, interpretability, and low computational requirements. These techniques, while suboptimal for predicting either non-Gaussian or -
non-linear processes, may still yield an adequate performance for practical purposes and thus remain appealing for real-time or resource-constrained implementations. For example, the Kalman filter, which can be regarded as an adaptive linear predictor, has been applied for channel tracking in fading environments [8], and more recent studies have compared Kalman-based predictors against machine learning approaches in Rayleigh fading and massive MIMO systems [9, 10]. In parallel, traditional 5G syst-
ems often employ the outer loop link adaptation (OLLA) mechanism as a reactive link adaptation strategy. OLLA dynamically adjusts the selected MCS based on the observed block error rate (BLER) of previously transmitted blocks, compensating for inaccuracies
arXiv:2511.20160v1 [cs.IT] 25 Nov 2025

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 2
in the instantaneous CSI estimation. Although this approach enhances robustness by maintaining the target error rate, it reacts to past transmission outcomes rather than anticipating future channel variations. Consequently, under fast-varying or highly mobile conditions, OLLA may become suboptimal compared to predictive approaches that estimate future channel states [11]. Recent advances in artificial intelligence (AI) and machine learning (ML) are reshaping the design of link adaptation and chann-
el prediction in 5G and beyond. AI-based models are capable of learning complex, non-linear channel dynamics directly from data, enabling more adaptive and robust link management strategies. Deep learning architectures, such as convolutional neural networks (CNNs) and recurrent neural networks (RNNs), have shown promising results in tasks such as feedback reduction and mobility-aware channel prediction [12, 13]. In future wireless systems, AI is expected to be a key enabler for intelligent radio r-
esource management, end-to-end network optimization, and fully autonomous link adaptation under uncertain or dynamic conditions [14]. The increasing prevalence of AI-based solutions in the literature may stem from their non-linear nature, which allows them to outperform classical methods that are inherently suboptimal for predicting either non-Gaussian or non-linear processes. However, even in such cases, linear techniques may still yield competitive performance for the considered application. Thi-
s gap highlights the need for a systematic evaluation of both paradigms in terms of prediction accuracy, computational complexity, and generalization capabilities, to better inform practical deployment decisions in diverse network environments.
B. Related Work
The integration of AI into wireless communications has led to significant advancements in LA strategies. In particular, deep neural networks (DNNs) have been extensively employed to address various challenges in LA, such as optimizing the interval of CSI feedback reports to reduce signaling overhead [15]. RNNs, especially long short-term memory (LSTM) architectures, have demonstrated strong performance in timeseries prediction tasks and have been widely adopted for CSI prediction [16]. In [17], fo-
r instance, the authors focus on optimizing the trade-off between CSI accuracy and feedback overhead by introducing LSTM-based autoencoders for joint compression and prediction. Several deep learning-based predictive CSI techniques have been proposed to mitigate the adverse effects of channel aging in fast-fading environments. Most of these approaches operate directly on the channel matrix, which significantly increases prediction complexity. For instance, in [18], the authors address the challeng-
es of channel aging by proposing a prediction method based on Temporal Convolutional Networks (TCNs) to forecast future channel conditions and select the CQI. However, working with full channel matrices to infer CQI levels results in a higher computational cost. Similarly, [19] introduces a deep learning framework that
predicts future channel matrices and subsequently derives the corresponding PMI/RI values for link adaptation. Despite these advancements, a common limitation of existing deep learning approaches is their inherent computational complexity, often arising from operations conducted in the time-frequency domain or through intricate network architectures. Advanced models leveraging Transformers [20], TCNs [18], or emerging concepts like Kolmogorov-Arnold Networks (KANs) [21] often achieve impressive pr-
ediction accuracy but at the cost of significant computational resources, memory consumption, and increased inference latency, which might prevent their application to real-time deployments. Furthermore, a gap in the existing literature is the lack of direct comparisons between these sophisticated DNN-based solutions and classical prediction techniques. While some works, such as [22], aim to reduce complexity by operating in alternative domains (e.g., mutual information), they often fail to benchm-
ark their performance against conventional predictors that may offer competitive accuracy with substantially lower overhead. Moreover, many studies focus on specific system aspects, such as exploiting partial reciprocity in FDD systems [23] or integrating joint CSI compression and prediction [17], which, while valuable, represent specific optimizations rather than a general guide for framework selection.
C. Main Contributions
In this work, we address the aforementioned gaps by proposing a unified CSI prediction framework that operates in the effective signal to interference plus noise ratio (SINR) domain. This approach significantly reduces computational complexity compared to direct CSI matrix prediction and is fully compatible with standard exponential effective SINR mapping (EESM)-based LA, enabling low-complexity deployment across diverse scenarios (including terrestrial, vehicular, and non-terrestrial communicatio-
ns). We present a systematic comparison between deep learning frameworks and the classical Wiener filter, focusing on generalization capabilities and key performance metrics. The main contributions of this paper are summarized as follows:
• We propose a computationally efficient CSI prediction framework that operates in the effective SINR domain, making it directly compatible with standard 5G link adaptation procedures like EESM-based CQI selection. The framework is applicable to a wide range of deployment scenarios (including terrestrial, vehicular, and nonterrestrial communications) where CSI feedback latency or overhead is a limiting factor. • Two prediction approaches, which model complex channel dynamics, are developed and com-
pared: (i) a classical Wiener filter, and (ii) deep learning-based predictors using state-of-the-art models, including gated recurrent unit (GRU), LSTM, and delayed DNN. • A detailed investigation of key design aspects is presented, including input sampling, the influence of the Doppler-CSI reporting product ( fD ×TCSI), and the choice of prediction target (full CQI vector vs. best CQI).

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 3
• A comprehensive performance assessment is conducted under diverse mobility and channel conditions. The results reveal a clear trade-off: while the Wiener filter provides a competitive low-complexity baseline, the GRUbased framework offers enhanced prediction accuracy and superior generalization capabilities, particularly in dynamic and mismatched channel environments.
The rest of this paper is organized as follows: Section II explains the system model and the principle of CQI selection. The proposed prediction frameworks are introduced in Section III, while Section IV presents the numerical and simulation results. Finally, Section V provides the conclusions drawn from this research.
II. SYSTEM MODEL
We consider a MIMO-orthogonal frequency division multiplexing (OFDM) system with NTx transmit antennas and NRx receive antennas. The system supports both TDD and FDD CSI acquisition modes in 5G New Radio (NR) systems. The subcarrier spacing is set to 15 kHz, corresponding to numerology 0 in the 5G NR standard. The time-frequency resource grid is organized into slots of 1 ms duration, each composed of 14 consecutive OFDM symbols. The fundamental unit for resource allocation is the resource element -
(RE), defined by a single subcarrier in the frequency domain and a single OFDM symbol in the time domain. A resource block (RB) consists of 12 contiguous subcarriers. The total system bandwidth is determined by the number of RBs, denoted as NRB. The system model consists of the following key components and functionalities:
• BS: The BS is responsible for managing data and control signal transmissions. In FDD mode, it dynamically adapts link parameters based on feedback from the UE. In TDD mode, it leverages channel reciprocity to perform channel estimation (CE), acquire CSI, and adjust link parameters accordingly. • UE: In FDD mode, the UE receives the CSI reference signal (CSI-RS), performs downlink CE, and generates CSI feedback for the BS. In TDD mode, its primary role is to transmit sounding reference signal (SR-
S), which allow the BS to estimate the downlink channel via reciprocity. • Channel: In TDD systems, channel reciprocity is assumed between the uplink and downlink. In FDD systems, the downlink channel is explicitly modeled, while the uplink is considered ideal, i.e., error-free transmissions of CSI reports from the UE to the BS, as our focus is on downlink link adaptation. We consider the 3GPP tapped delay line (TDL) channel models that are recommended for link-level simulations in [24].
A. CSI acquisition framework in 5G
In this section, we describe the MCS selection process at the BS in a 5G system and highlight the operational differences between the TDD and FDD duplexing modes.
In TDD systems (see Fig. 1), channel reciprocity between the uplink and downlink is assumed, enabling the BS to estimate the downlink channel using SRSs transmitted by the UE. The process begins with the UE transmitting SRS sequences, which traverse the wireless channel and are received by the BS. Leveraging this reciprocity, the BS performs CE for the downlink directly from the uplink measurements.
UL Channel
UE
SRS
BS CE for CSI acquisition
EESM Comp.
CQI Select.
Fig. 1: CSI acquisition process in a TDD system.
Once the channel is estimated, the BS computes the effective channel quality using the EESM technique. Based on this value, the most suitable CQI index is selected to determine the MCS for the subsequent downlink transmission. Since the BS directly derives the required channel information, no explicit CSI feedback from the UE is needed, thus reducing signaling overhead and latency. The UE then demaps the received REs, applies channel equalization, and decodes the transmitted data. System performan-
ce is typically evaluated using throughput metrics, which account for successful data delivery after error correction and retransmissions. In contrast, FDD systems (see Fig. 2) lack inherent channel reciprocity. Consequently, a feedback loop is required to inform the BS of the downlink channel conditions. In this setup, the BS transmits CSI-RS signals, which the UE receives and uses to perform downlink CE. The UE then applies the EESM method to compress the channel information and generates CSI fe-
edback indicators, such as the CQI, PMI, and RI. These indicators are transmitted back to the BS via a dedicated uplink control channel. Critically, unlike in TDD where the BS has access to the continuous effective SINR, in FDD the BS only receives this quantized feedback. This distinction in data availability fundamentally influences the design of the prediction framework utilized for each mode.
CSI-RS
MCS Selection
BS
DL Channel
CE for CSI acquisition
EESM Comp.
CSI Feedback UE
Feedback Channel
Fig. 2: CSI acquisition process in an FDD system.
Upon receiving the CSI feedback, the BS selects the appropriate CQI and configures the downlink MCS accordingly. While this approach enables accurate adaptation to channel conditions, it introduces additional signaling overhead and latency. As in the TDD case, the UE performs demapping and equalization to recover the transmitted data, and overall performance is assessed using throughput metrics. As discussed in Fig. 3, the communication is divided into different transmission intervals where a CSI -
acquisition stage is performed prior of data transmission. If TCSI represents the CSI reporting period (in slot). The data transmission stage at the k-th transmission period lasts TCSI − 1 slots, and it uses the CSI information obtained from slot n = TCSIk. Therefore the

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 4
BS
UE
CSI acquisition
Downlink Data Transmission
SI SI + 1
⋮⋮
+2
⋮
CSI acquisition
( + 1) − 1 ( + 1)
-th transmission interval
Fig. 3: Timeline of the CSI acquisition and downlink data transmission process, illustrating the k-th transmission interval.
data transmission at slot, n = TCSIk +τ, with τ ∈ [1, TCSI −1] ⊂ N, uses outdated CSI by τ slots, which yields a suboptimal MCS selection for those data transmissions. During the CSI acquisition process, the SINR is calculated for each RB across the time-frequency grid. However, link adaptation decisions, such as CQI selection, require a single representative value that summarizes the overall channel quality at a given time instant. In MIMO systems, signal quality may vary not only across frequenc-
y (i.e., RBs) but also across spatial layers. To consolidate this multidimensional information into a scalar metric, the EESM technique is applied jointly across all layers and resource blocks. For each candidate CQI level i ∈ [1, NCQI] ⊂ N, being NCQI = 15 the number of CQIs, the effective SINR at time slot n is computed as [25]:
γ (i)
eff (n) = −β(i) ln 1
NL NRB
∑︁ NL
l=1
∑︁NRB
m=1
exp − γn (l, m)
β(i)
!
, (1)
where γn (l, m) denotes the instantaneous SINR at time slot n on the l-th spatial layer and m-th resource block, NL is the number of layers, NRB is the number of resource blocks, and β(i) is a CQI-dependent calibration parameter. The value of β(i) is determined via link-level simulations to ensure that the EESM output aligns with the BLER performance observed under additive white Gaussian noise (AWGN) [26].
Once γ (i)
eff (n) is computed for each CQI level at slot n, it is mapped to the corresponding BLER using precomputed AWGN reference curves. This establishes a one-to-one relationship between each candidate CQI index and its associated effective SINR value. The final CQI index for that slot, i∗ (n), is selected as the highest value whose effective SINR yields a BLER below a predefined threshold:
i∗ (n) = max
n
i : BLER γ (i)
eff (n) ≤ BLERtarget
o
. (2)
This procedure enables the BS to identify the most spectrally efficient CQI level—and therefore the corresponding MCS—that satisfies the reliability constraint. The se
lected index i∗ (n) implicitly defines a unique effective SINR,
γ(i∗ (n))
eff (n). The EESM-based method aggregates SINR values across the frequency and spatial domains into a single scalar metric, ensuring consistent and robust link adaptation in dynamic wireless environments.
B. Metrics
In this paper, we evaluate performance using two key metrics: mean squared error (MSE) and throughput.
• MSE: Used to quantify the accuracy of the model’s predictions against the ground-truth values. Measures the average of the squared differences between the predicted values and the actual values. The MSE is defined as:
MSE = 1
N
N ∑︁
i=1
(yi − yˆi)2, (3)
where yi represents the actual values, yˆi denotes the predicted values, and N is the total number of samples. • Throughput: Represents the effective data transmission rate achieved by the system. In this work, throughput refers to the volume of successfully delivered and usable data, excluding retransmissions and protocol overhead. Two forms of throughput are considered:
– Conditioned Throughput: The throughput measured τ slots after the last CSI acquisition slot, i.e., conditioned on slot kTCSI+τ. It captures the temporal evolution of system performance and reflects how prediction accuracy and channel aging affect link adaptation decisions in real time.
– Unconditioned Throughput: The average throughput computed over the entire simulation duration. It provides a global performance indicator of the prediction strategy’s long-term efficiency, integrating the effects of all transmission slots.
III. PROPOSED CSI PREDICTION FRAMEWORKS
The temporal evolution of wireless channels may exhibit correlation over time, enabling inference of future channel states from past observations. To exploit this property, we propose a unified prediction framework that estimates future CSI values based on historical data. Instead of operating directly on raw channel coefficients, our framework performs prediction in the effective SINR domain (γeff), using the compressed representation obtained through the EESM method. This approach yields a compa-
ct, standard-compatible, and computationally efficient input well-suited for both classical and learning-based prediction methods.
CSI Estim.
EESM
Comp. Predictor CQI
Map
∈R
a) TDD ∈ R(TCSI −1)×1
b) FDD e, 1×1
Fig. 4: Proposed CSI prediction framework.
Fig. 4 illustrates the overall prediction process. The procedure begins with CSI estimation and EESM compression, which generates an input vector xk for the predictor at each reporting instant k. To allow a fair comparison between models using the MSE, predictions are generated from a standardized
version of the effective SINR, γe (n) = γeff (n)−E[γeff (n) ]
σγeff
, where σγeff is the standard deviation of γeff. Hence, the vector xk

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 5
is constructed from a sequence of the P most recent SINR samples,
x
k = [γe (TCSIk), γe (TCSI (k − 1)), . . . , γe (TCSI (k − P + 1))]⊤ .
(4) The predictor’s output depends on the duplexing mode. In TDD systems, the framework forecasts a sequence of future effective SINR values for the upcoming slots until the next report:
γˆ e,k = [γˆe (TCSIk + 1), . . . , γˆe (TCSIk + TCSI − 1)]⊤ , (5)
which are subsequently mapped to their corresponding CQI levels for enhanced link adaptation. In FDD systems, the UE reports a feedback indicators (CQI, PMI, and RI) intended to guide transmission during the upcoming transmission interval. Consequently, the challenge lies in determining the most appropriate feedback parameters to be used over that future period. Therefore, the goal is to predict a single effective SINR value, γˆe (n + τ ̆), where the prediction horizon τ ̆ is a design parameter th-
at can be optimized to maximize system throughput. The predictor can operate on two different inputs, depending on the desired modeling granularity. The first approach uses the full vector of effective SINR values associated with all available CQI levels, providing a multidimensional view of the link quality. This option is referred to as by-CQI and involves performing prediction of the effective SINR associated with each CQI, γˆ (i)
e,k. Alternatively, the predictor can operate on a scalar input, using only the effective SINR corresponding to the best-performing CQI at each time instant. This latter formulation, which is referred to as best-CQI, is more compact and computationally efficient, highlighting a trade-off between predictive accuracy and computational cost.
A. Wiener Filter Prediction
As a classical baseline, we implement a discrete-time Wiener filter for linear CSI prediction [27]. Let γe (n) denote the effective SINR observed in the slot n, assuming that the process is stationary by a wide-sense and has zero mean. The goal is to predict a set of future values γe (n + τ) for
τ ∈ {1, 2, . . . , TCSI − 1}.
A bank of TCSI − 1 linear filters—one for each prediction horizon—is constructed. All filters share the same input vector x
k defined in (4). The τ-step SINR prediction is expressed as a linear combination of past samples:
γˆe (TCSI + τ) = a⊤
τ xk, (6)
where aτ ∈ RP×1 are the filter coefficients for horizon τ and (·)⊤ denotes the transpose. The optimal coefficients are found by solving the Wiener–Hopf equations:
a
τ = R−1rτ, (7)
where R = E xk · x⊤
k ∈ RP×P is the autocorrelation matrix of the input vector, whose elements can be expressed in terms of the autocorrelation function of γe (n), Rγe (m), as
[R]i, j = E[γe (TCSI · i) γe (TCSI · j )] = Rγe (TCSI · (i − j )), (8)
with i, j ∈ [0, P − 1]. The vector rτ ∈ RP×1 is the crosscorrelation between the input vector and the desired future value:
r
τ = E[xk γe (TCSIk + τ)] , (9)
whose elements can be also expressed in terms of the autocorrelation function of γe (n) as
[rτ]i = E[γe (TCSI (k − i))γe (TCSIk + τ)] = Rγe (−TCSIi + τ).
(10) The prediction error for horizon τ is given by
e(TCSIk + τ) = γe (TCSIk + τ) − γˆe (TCSIk + τ), (11)
and its mean-square value (the minimum MSE) is
E[|e(TCSIk + τ)|2] = σ2
γe − r⊤
τ R−1 rτ, (12)
where σ2
γe denotes the variance of γe (n). It is well known that as the prediction horizon increases (τ → ∞), the mean squared error of the Wiener predictor approaches the signal variance, σ2
γe [28, Sec. 5.7]. Therefore, even for long horizons, the Wiener filter outperforms a τsample zero-order hold (ZOH) predictor, whose error power converges to 2σ2
γe .
Since the second-order statistic of the process, Rγe (m), is unknown, it is estimated empirically from training data under the assumption of ergodicity, so that time averages approximate ensemble expectations. The computational complexity of the Wiener filter’s inference phase is defined by P, the filter order. Once the P coefficients of a filter aτ are known, the prediction γˆe (TCSI + τ) is generated by (6). This equation represents a single dot product. This operation for a single filter requir-
es P multiplications and P − 1 additions (totaling 2P − 1 FLOPs). Since a bank of (TCSI − 1) filters is used (one for each prediction step τ), the total number of floating point operations (FLOPs) for the complete inference phase is
FLOPsWienerbestCQI = (TCSI − 1) · (2P − 1), (13)
for the by-CQI case, where a prediction is made for each of the NCQI levels, the total complexity is NCQI times greater:
FLOPsWienerbyCQI = NCQI · FLOPsWienerbestCQI . (14)
B. AI-Based Prediction Networks
The proposed AI-based CSI prediction framework adopts the unified structure illustrated in Fig. 5, enabling a fair comparison among different learning architectures in terms of accuracy and computational complexity. It comprises three main components: 1) an input layer that receives a sequence of P past effective SINR samples; 2) a hidden layer that captures temporal or nonlinear dependencies using Dense, GRU, or LSTM units with a tanh activation function; and 3) an output layer that predicts the -
required effective SINR values.

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 6
Predictor
Dense/GRU/LSTM D , tanh
Input Layer P
Output Layer TCSI
e,
Fig. 5: Unified architecture of the proposed AI-based prediction networks.
1) DNN-Based Prediction Network: As a baseline, we implement a fully connected DNN with a single hidden layer that learns a nonlinear mapping between past and future SINR values. At each reporting instant k, the input is the vector xk from (4). The hidden layer computes its output h as
h
k = σ W(1) xk + b(1) , (15)
where σ(·) denotes a nonlinear activation function (e.g., ReLU), and W(1) , b(1) are the weights and biases. Since the input layer uses past samples of the input sequence γe (n) we named this network delayed DNN. The output layer then produces the predicted SINR vector
γˆ e,k = W(2) hk + b(2) . (16)
The model is trained by minimizing the MSE loss function
L= 1
TCSI − 1
TCSI −1
∑︁
τ=1
(γe (TCSIk + τ) − γˆe (TCSIk + τ))2 . (17)
The computational complexity of the inference phase for the DNN is determined by the operations in its hidden and output layers. Let P be the input sequence length and D be the number of units in the hidden layer. The hidden layer requiring 2PD FLOPs. The output layer then takes the hidden activation and projects it to the output size of TCSI − 1, which requires 2D (TCSI − 1) FLOPs. The total complexity for the best-CQI case is the sum of both:
FLOPsDNNbest−CQI = 2D (P + TCSI − 1), (18)
for the by-CQI case, where a prediction is made for each of the NCQI levels, the total complexity is NCQI times greater:
FLOPsDNNby−CQI = NCQI · FLOPsDNNbest−CQI . (19)
2) LSTM-Based Prediction Network: We also develop a RNN using LSTM units to capture long-term temporal dependencies in the channel. As shown in Fig. 6, each LSTM cell comprises three gating mechanisms—the input, forget, and output gates—each governed by a sigmoid activation that outputs values in the range [0, 1]. These gates regulate the flow of information by controlling how much of the input is retained, updated, or discarded at each time step. During training, the network adjusts the associate-
d weight matrices (Ux and Wx) to emphasize relevant temporal patterns, producing gate activations closer to one for informative features [29].
σ σ tanh tanh
−
−
Sigmoid
σ
σ
Forget Gate
Input Gate
Output Gate
Fig. 6: Internal structure of an LSTM unit.
At each time step m, the LSTM cell processes an input sample Im and maintains two internal state vectors: the hidden state vector Sm ∈ RD, representing the cell’s output at that step, and the cell state vector cm ∈ RD, which acts as a memory channel to preserve long-term dependencies. These states are dynamically updated through the interaction of the gating mechanisms, allowing the LSTM to retain or discard information based on its learned temporal relevance. A key advantage of LSTM over standard-
 RNN architectures is their ability to learn long-term correlations while mitigating the vanishing gradient problem [30], making them highly suitable for capturing the complex dynamics of wireless channels in CSI prediction tasks. Each LSTM cell (Fig. 6) contains four gate structures (forget, input, output, and candidate). We calculate the FLOPs per step by adding the cost of these gates and the subsequent elemental operations. The four gates contribute a total of 8D2 + 8D FLOPs. The elemental ope-
rations to update the cell state and hidden state add additional 4D FLOPs. The total FLOPs per time step is 8D2 + 12D.
The total complexity for the best-CQI case is the sum of P recurrent steps plus the linear output layer (which costs 2D (TCSI − 1) FLOPs):
FLOPsLSTMbest−CQI = P(8D2 + 12D) + 2D (TCSI − 1), (20)
for the by-CQI scenario, this entire complexity is scaled by the NCQI levels:
FLOPsLSTMby−CQI = NCQI · FLOPsLSTMbest−CQI . (21)
3) GRU-Based Prediction Network: As an alternative to the LSTM, we implement a prediction network based on GRU. The GRU architecture offers a simplified yet powerful recurrent structure by merging the input and forget gates into a single “update gate” and combining the cell state and hidden state. This streamlined design reduces parameters and computations, maintaining comparable temporal modeling capabilities [31]. Similar to the LSTM, the GRU-based predictor consists of an input layer, a hidden -
layer with GRU units, and an output layer that generates the required effective SINR values. Due to its reduced parameter count, the GRU typically exhibits

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 7
faster training times and lower inference latency compared to an LSTM of similar capacity. The GRU simplifies the LSTM architecture, reducing computational complexity. It consists of two main gates and a candidate state calculation, totaling three structures that perform matrix operations. The three gate-like structures contribute a total of 6D2 + 7D FLOPs, and the final elemental state update adds 4D FLOPs. The total FLOPs per time step sums to 6D2 + 11D. The total complexity for inference in the-
 best-CQI case is the sum of P recurrent steps plus the final linear layer:
FLOPsGRUbest−CQI = P · (6D2 + 11D) + 2D (TCSI − 1), (22)
for the by-CQI case, the complexity scales linearly with the number of CQI levels:
FLOPsGRUby−CQI = NCQI · FLOPsGRUbest−CQI . (23)
IV. NUMERICAL RESULTS
This section investigates the performance of the proposed CSI prediction frameworks under different propagation conditions and evaluating a diverse set of key performance indicators. The first subsection focuses on model design, analyzing how the model complexity, Doppler shift, and the CSI reporting period influence prediction accuracy for the Wiener predictor and the presented AI-based models, including LSTM, GRU and delayed DNN. The second subsection presents end-to-end system results, comparin-
g the performance of the GRU-based predictor with that of the classical Wiener filter. Additionally, we examine the generalization capabilities of both approaches under diverse channel conditions, including variations in delay profiles and Doppler frequencies. The simulation parameters used throughout this study are summarized in Table I.
TABLE I: Simulation Parameters
Parameter Value
Average SNR 12.5 dB Subcarrier Spacing (SCS) 15 kHz Number of RBs (NRB) 52 Bandwidth 10 MHz Doppler Shift ( fD) 1–50 Hz Delay Spread 300 ns MIMO Configuration 4 × 4 Transmission Layers 4 Channel Models TDL-A, B, C, D, E CSI Reporting Period (TCSI) {4, 32, 40} slots Transmission Interval 1 ms
The datasets used for training and evaluation were generated using a custom link-level simulator developed in MATLAB. This simulator emulates a MIMO-OFDM wireless system operating under standardized 3GPP conditions and supports multiple TDL channel profiles, including TDL-A, TDL-B, TDL-C, TDL-D, and TDL-E [24]. These profiles characterize a broad range of propagation environments, with TDL-A, TDLB, and TDL-C representing varying degrees of non line-ofsight (NLOS) conditions, and TDL-D and TDL-E co-
rresponding to line-of-sight (LOS) scenarios. Each dataset was generated for specific simulation parameters, including Doppler frequencies ranging from 1 Hz to
50 Hz and a delay spread of 300 ns. The simulator computes the time-varying channel response over multiple slots and calculates the corresponding effective SINR values using the EESM method. The resulting SINR sequences are then used to construct input-output pairs for training and testing the prediction models. A total of 510,000 samples were generated, divided into 78.4% for training, 19.6% for validation, and 2% for testing. Both models were trained for 200 epochs with a batch size of 2048 to e-
nsure convergence across diverse channel conditions.
A. Model design
We present a series of empirical tests performed to identify the optimal configuration of the proposed prediction models. Here, we describe the experimental design, such as dependence with Doppler and CSI reporting period, prediction based on real data, and study of the optimal model complexity.
1) Trade-off Between Performance and Complexity: This subsection analyzes the trade-off between prediction accuracy and computational complexity across different model architectures and identifies the optimal input sequence length for the proposed predictors. The goal is to determine a configuration that achieves high accuracy while maintaining low inference cost.
4 10 16 22 28
−12
−11
−10
−9
−8
Hidden Layer Size (D)
MSE (dB)
DNN LSTM GRU Wiener
1
2
3
4
5
Complexity log10(F LOP s)
Fig. 7: Trade-off between MSE (dB) and computational complexity (FLOPs) for different prediction frameworks as a function of hidden-layer size, for a Doppler frequency of 10 Hz and TCSI = 4 slots in the TDL-A channel.
Fig. 7 illustrates the relationship between model complexity and prediction accuracy (measured in MSE) for all evaluated frameworks. As the hidden-layer size increases, the MSE decreases, but the gain saturates beyond moderate model capacities. Among the learning-based approaches, both the LSTM and GRU achieve the lowest MSE values, outperforming the DNN and Wiener filter. However, the GRU offers a lower computational cost that of the LSTM while maintaining nearly identical accuracy. The DNN shows-
 limited temporal modeling capability, and the Wiener filter provides the simplest implementation, requiring only a few FLOPs per inference at the expense of slightly higher MSE. Based on these results, a GRU with D = 16 hidden units is selected as the representative learning-based predictor for

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 8
subsequent analyses, offering prediction accuracy comparable to the LSTM but with a lower computational cost. This configuration entails a complexity of approximately 6944 FLOPs. The Wiener filter is retained as a low-complexity benchmark, providing a fair basis for comparing classical and AI-based prediction strategies. We investigate the impact of model depth and input sequence length on prediction performance, summarizing the key observations in the following remark.
Remark 1 (Optimal Model Complexity). At higher Doppler frequencies, increasing model depth or input sequence length yields marginal or no improvement in prediction accuracy. Therefore, compact models achieve comparable performance with substantially lower computational requirements.
To further investigate the influence of input length on prediction performance, we evaluated the MSE obtained by GRU- and Wiener-based predictors for different sequence sizes and Doppler frequencies. For the GRU, the input length corresponds to the number of past effective SINR samples provided to the network, whereas in the Wiener filter it represents the filter order. Table II summarizes the results. Accuracy improves initially as the input window expands but saturates beyond four samples for bo-
th models. At higher Doppler frequencies, longer input sequences can even degrade performance due to redundancy or overfitting.
TABLE II: MSE (dB) versus input sequence length (for GRU) and filter order (for Wiener) under different Doppler frequencies, with TCSI = 4 slots.
Input Size / Filter Order
Model fD 1 2 3 4 5 6 7
GRU
10 Hz -7.8 -9.7 -10.5 -11.2 -11.5 -11.4 -11.4 20 Hz -3.4 -4.7 -5.0 -5.0 -5.0 -5.0 -5.0 40 Hz -0.5 -0.7 -0.6 -0.6 -0.7 -0.6 -0.6
Wiener
10 Hz -7.7 -8.9 -8.9 -9.0 -9.0 -9.0 -9.0 20 Hz -3.3 -4.1 -4.2 -4.2 -4.2 -4.2 -4.2 40 Hz -0.53 -0.6 -0.6 -0.6 -0.6 -0.6 -0.6
Based on these observations, an input length (or filter order) of four provides an effective trade-off between accuracy and complexity for both predictors. This configuration is adopted in the subsequent performance evaluations, ensuring robust and efficient operation across diverse channel conditions.
2) Dependence on Doppler and CSI reporting period: The prediction accuracy is significantly influenced by the channel’s temporal dynamics (Doppler frequency) and the periodicity of CSI acquisition. In prediction tasks, these two factors jointly affect the difficulty of accurately forecasting future channel states. This subsection investigates the impact of the fD ×TCSI product on prediction performance.
Remark 2 (Dependence on Doppler and CSI reporting period). Simulation results reveal that the performance of CSI prediction, as measured by MSE, is primarily determined by the product fD × TCSI. That is, different combinations of Doppler frequency fD and CSI reporting interval TCSI that yield the same product result in similar prediction accuracy.
Fig. 8 illustrates the prediction error in terms of MSE for both GRU and Wiener-based predictors, as a function of the product fD × TCSI. Each curve corresponds to a model trained
at a specific Doppler frequency ( fD = 5, 10, and 20 Hz), and evaluated across multiple values of TCSI to maintain different values of the product. The results exhibit a clear dependency of prediction performance on the value of fD × TCSI, supporting the hypothesis that this product effectively captures the temporal variability of the channel. Notably, for small values of fD × TCSI (i.e., low mobility and/or high CSI reporting rate), both predictors achieve very low MSE values, with the GRU predic-
tor reaching performance levels close to −17 dB, indicating highly accurate predictions. However, as the product increases, the prediction error also increases. This degradation follows a distinctive “waterfall” behavior: a relatively sharp transition occurs around fD × TCSI ≈ 150–200, beyond which the MSE rapidly deteriorates from highly accurate to values close to 0 dB. Importantly, the region where the MSE remains below −10 dB can be regarded as the operational range where the predicted CSI is -
sufficiently accurate for practical use in link adaptation. For fD × TCSI > 200, the MSE approaches the variance of the signal itself, thus leading to MSE ≃ 0 dB.
0 100 200 300 400
−15
−10
−5
0
fD × TCSI (Hz × slots)
MSE (dB)
Wiener, train fD = 5 Hz Wiener, train fD = 10 Hz Wiener, train fD = 20 Hz GRU, train fD = 5 Hz GRU, train fD = 10 Hz GRU, train fD = 20 Hz
Fig. 8: MSE (dB) performance of GRU and Wiener-based CSI predictors for different values of the product fD × TCSI in the TDL-A channel. Each curve corresponds to a model trained at a specific Doppler frequency ( fD = 5, 10, and 20 Hz) and evaluated at prediction horizons τ ∈ {1, 4, 8, 16, 32, 40, 64, 80} slots.
3) Processing of Past Samples: An important design decision in CSI prediction frameworks concerns how historical observations are processed at the model input. Reference signals are transmitted periodically, so the network input is available only at the slots where these signals occur. To address this, we consider two distinct approaches: interpolated inputs, where estimation techniques are applied to fill the missing slots and densify the sequence, and non-interpolated inputs, which utilize the o-
riginal, sparsely sampled data directly. Although interpolation intuitively suggests a richer input, it is unclear whether this improves prediction accuracy compared to using the raw sparse data. Therefore, the impact of such preprocessing is evaluated empirically.
Remark 3 (Input sampling). Simulation results indicate that using actual, non-interpolated input samples yields better

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 9
prediction performance than using interpolated inputs, particularly for higher values of fD × TCSI.
Fig. 9 compares the prediction error, expressed in MSE, for two GRU-based models: one using decimated input sequences composed only of actual pilot-based measurements spaced by TCSI, and another using interpolated inputs obtained via piecewise linear interpolation and linear MMSE (LMMSE) methods [27]. At low values of fD × TCSI (i.e., under slow channel variations or when predicting a short horizon into the future) the performance of all methods is comparable. This is expected as the channel exhib-
its limited variation between reference points, and simple interpolation suffices. However, as fD ×TCSI increases, the advantage of the decimated model becomes more evident. In these cases, the GRU network is able to perform a form of non-linear, interpolation that better captures the complex dynamics of the channel, outperforming classical linear methods. This behavior highlights a key distinction: when interpolation is performed explicitly as a pre-processing step, it may introduce smoothing or -
approximation artifacts that degrade prediction quality. In contrast, allowing the GRU to operate directly on sparse, real observations enables the model to learn and apply its own implicit interpolation strategy, which is more robust under high channel variability. Additionally, the decimated approach reduces computational overhead by avoiding interpolation altogether.
0 100 200 300 400
−12
−10
−8
−6
−4
−2
0
fD × TCSI (Hz × slots)
MSE (dB)
GRU Decimated GRU Linear Interpolation GRU LMMSE Interpolation
Fig. 9: Comparison of prediction error in terms of MSE (dB) between a GRU model using interpolated inputs (linear and LMMSE) and one using actual reference measurements only, evaluated in the TDL-A channel with fD = 10 Hz at prediction horizons τ ∈ {4, 8, 10, 16, 20, 32, 40} slots.
4) Prediction Target Strategy: Best-CQI vs By-CQI: An important design consideration when training CSI prediction models is the choice of the prediction target. Two main strategies are compared: (i) By-CQI, which predicts the effective SINR values for all possible CQI levels (i.e., a full CQI vector), and (ii) Best-CQI, which predicts only the effective SINR corresponding to the best CQI selected during link adaptation.
Remark 4. The simulation results show that the Best-CQI
technique exhibits a higher prediction error compared to the By-CQI technique. However, this improvement in accuracy with By-CQI entails a computational complexity increased by a factor of NCQI = 15.
Fig. 10 illustrates the trade-off introduced by the BestCQI strategy. While this approach reduces model complexity NCQI = 15 times by focusing on the effective SINR corresponding to the selected CQI level, it results in lower prediction accuracy compared to the By-CQI strategy. In highmobility scenarios, where the channel varies rapidly, prediction performance degrades for both techniques. In contrast, in lowmobility scenarios, where the channel evolves more slowly, there is a greater opportunity -
for accurate prediction, and the advantages of the By-CQI strategy become more evident. This highlights the trade-off between computational efficiency and prediction accuracy, which must be carefully considered depending on the mobility characteristics of the target environment.
0 5 10 15 20 25 30
−30
−20
−10
0
fD (Hz)
MSE (dB)
WienerBest-CQI WienerBy-CQI
GRUBest-CQI GRUBy-CQI
Fig. 10: MSE (dB) comparison between two prediction target strategies BestCQI vs. by-CQI for both Wiener and GRU predictors in the TDL-A channel, with TCSI = 4 slots and fD = 10 Hz.
B. Model evaluation
In this section, we evaluate the performance of the proposed CSI prediction frameworks in practical link adaptation scenarios. The evaluation addresses TDD and FDD systems separately due to their distinct CSI requirements. 1) CSI acquisition in TDD: This subsection demonstrates how the use of a prediction algorithm for CQI can enhance end-to-end performance in terms of throughput in TDD systems. It also evaluates the proposed CSI prediction models considering their generalizability under various s-
cenarios. End-to-end results: We compare below the performance of both the GRU and Wiener-based predictors in terms of downlink throughput. Fig. 11 illustrates the trade-off between throughput and prediction accuracy for various CSI acquisition strategies. The x-axis (τ ∈ [1, TCSI − 1]) represents the slot index within the CSI reporting interval, indicating the delay lag of each throughput or prediction error measurement relative to the last

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 10
CSI information that was acquired (see Fig. 3). The left y-axis shows the average downlink throughput, while the right y-axis reports the MSE associated with each prediction method. Four configurations are evaluated in terms of throughput: ideal CSI, ZOH, GRU-based prediction, and Wiener-based prediction. The MSE curves are only shown for the non-ideal schemes, since the ideal case assumes perfect channel knowledge and therefore has zero prediction error. The ideal CSI scenario achieves the highes-
t throughput, serving as an upper bound.
0 8 16 24 32
25
30
35
40 3dB MSE
τ
Conditioned throughput (Mbps)
Ideal ZOH
GRUBest-CQI WienerBest-CQI
−20
−15
−10
−5
0
5
MSE (dB)
Throughput MSE
Fig. 11: Comparison of conditioned throughput in Mbps (left y-axis) and MSE in dB (right y-axis) for different CSI acquisition strategies. Results are averaged over multiple channel realizations with TCSI = 32 slots and fD = 10 Hz.
The ZOH scheme shows notable degradation due to the outdated CSI, leading to mismatches in the selection of MCS. Both prediction-based schemes improve throughput over this baseline, confirming the value of anticipating channel variations. For small slot indices (e.g. τ < 6), the ZOH strategy performs comparably well, making the prediction unnecessary. However, for larger τ, both prediction methods significantly outperform the baseline ZOH. In this regime, the Wiener and GRU predictors achieve near-
ly identical throughput, with only a marginal difference. In addition, Fig. 11 highlights that applying the prediction, even with a MSE around 0 dB, leads to a higher throughput (and smaller MSE) than not predicting at all (i.e., ZOH). As discussed in section III-A and [28, Sec. 5.7], this is due to the accumulation of prediction error in the ZOH case as the horizon increases. As indicated below 12, when predicting τ → ∞ slots ahead without updating the CSI, the normalized error power converges to-
 approximately 3 dB. Fig. 12 analyzes the unconditioned throughput as a function of Doppler frequency fD for different reporting intervals. As shown in Fig. 12(a), using a CSI reporting interval of TCSI = 32 slots amplifies the performance gap between prediction-based schemes and the ZOH baseline. While the throughput gain from prediction is negligible at low Doppler frequencies (e.g., fD = 1 Hz), the benefit becomes substantial as fD increases and the channel varies more rapidly. In this setting,-
 both prediction algorithms significantly improve unconditioned throughput compared to the non-predictive approach.
On average, the GRU-based predictor achieves a throughput gain of 10.5%, while the Wiener-based predictor provides a comparable gain of 10.43%. Conversely, Fig. 12(b) examines the scenario with a frequent reporting interval of TCSI = 4 slots. When Doppler is low, the channel varies slowly between reports, resulting in similar performance for ZOH, Wiener, and GRU. However, as fD increases, prediction-based schemes progressively outperform the ZOH baseline, with the GRU model consistently achieving -
slightly higher throughput than the Wiener predictor. Quantitatively, the gains are more modest due to the quasi-static nature of the channel between frequent updates: at fD = 30 Hz, the GRU-based predictor achieves a throughput gain of 2.79%, while the Wiener-based predictor yields a gain of 2.21%, relative to the ZOH case. Crucially, this frequent reporting regime (TCSI = 4) incurs high signaling overhead and is precisely what efficient system design aims to avoid. The core value of CSI predicti-
on lies in enabling the use of longer reporting intervals (such as TCSI = 32) to drastically reduce overhead while maintaining high throughput, a balance that is unachievable with standard ZOH techniques.
Generalization capabilities: An important requirement for practical CSI prediction frameworks is the ability to generalize across different channel conditions without retraining. In this subsection, we analyze and compare the generalization capabilities of the GRU and Wiener-based predictors. First, we assess how well the models designed/trained for a specific Doppler frequency fD perform when tested under the same Doppler condition (model switch case) versus models trained using a mixture of Dopp-
ler values (generalized case). This allows us to evaluate whether a single generalized model can replace multiple Doppler-specific models without compromising performance. This latter approach is known as model life-cycle management and it considers that the network has different models that have been trained for different conditions [32]. Then, the network monitors the performance of the currently deployed model, and it might require a model switch to change the model that is being deployed for i-
nference. Therefore, the best model can be used for the current channel conditions. Second, we extend the evaluation to different channel models by testing both the specific and generalized models over various TDL profiles, including TDL-A through TDL-E. This step quantifies the robustness of each predictor to variations in delay spread and multipath richness, which are critical factors in real-world wireless environments. Fig. 13 analyzes the generalization of the model with respect to the variat-
ion of Doppler spreads. MSE values are compared for two training strategies: 1) model-switch training, where a separate model is trained for each Doppler frequency, and 2) generalized training, where a single model is trained on a dataset containing a mixture of Doppler conditions ranging from 1 to 50 Hz. The GRU-based predictor demonstrates superior generalization in this context, achieving consistent MSE performance across all Doppler scenarios using a unified model. In contrast, the Wiener filt-
er shows degraded performance under generalized training, indicating a stronger

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 11
0 5 10 15 20 25 30
28
30
32
34
36
38
fD (Hz)
Unconditioned throughput (Mbps)
Ideal ZOH
WienerBest-CQI
GRUBest-CQI
(a)
0 5 10 15 20 25 30
34
35
36
37
38
fD (Hz)
Unconditioned throughput (Mbps)
Ideal ZOH
WienerBest-CQI
GRUBest-CQI
(b)
Fig. 12: Unconditioned throughput as a function of Doppler frequency for different CSI prediction strategies in the TDL-A channel, considering reporting intervals of (a) TCSI = 32 slots and (b) TCSI = 4 slots.
dependency on Doppler-specific tuning. Fig. 14 illustrates the generalization performance of the prediction models when evaluated on different channel profiles. Both the Wiener and GRU models were trained on the TDL-A channel model and tested under three NLOS scenarios: TDLA, TDL-B, and TDL-C. MSE is reported as a function of Doppler frequency fD, for the best-CQI case. The results show that both predictors experience a performance degradation as fD increases, consistent with the greater temporal -
variability of the channel. However, the GRUbased model outperforms the Wiener predictor across most Doppler frequencies and channel profiles, with the largest gains observed in the low-to-moderate Doppler range (5 Hz ≤ fD < 15 Hz). At very low Doppler values (e.g., fD = 1 Hz), both predictors perform equally well. Interestingly, although both models were trained on the TDL-A profile, they generalize relatively well to TDL-B and TDL-C. The gap MSE between the profiles remains within
0 5 10 15 20 25 30
−20
−15
−10
−5
0
5
fD (Hz)
MSE (dB)
Model Switch WienerBest-CQI Generalized WienerBest-CQI Model Switch GRUBest-CQI Generalized GRUBest-CQI
Fig. 13: MSE performance of Wiener and GRU models under different Doppler shifts, comparing model-specific and generalized training strategies.
1–2 dB for each method, indicating that both frameworks are robust to moderate mismatches in the propagation environment. Among the three profiles, the TDL-A case produces the lowest MSE, followed by TDL-C and then TDL-B, suggesting that the predictor trained on TDL-A generalizes effectively to propagation conditions with similar delay spreads. These findings highlight the practical viability of using pretrained models in deployment scenarios with varying NLOS characteristics, and further confirm -
the enhanced robustness of GRU-based architectures for CSI prediction.
0 5 10 15 20 25 30
−20
−15
−10
−5
0
fD (Hz)
MSE (dB)
WienerBest-CQI GRUBest-CQI
20
−20
−15
−10
TDL-A TDL-B TDL-C
Fig. 14: Comparison of MSE prediction error (in dB) for the Wiener and GRU models trained on the TDL-A channel and evaluated on different NLOS channel profiles: TDL-A, TDL-B, and TDL-C.
Fig. 15 evaluates the generalization performance of the prediction models under different LOS channel conditions. Both the Wiener and GRU models were trained using the TDL-A profile and tested on three LOS channel models: TDLA, TDL-E, and TDL-D. The MSE is plotted as a function of Doppler frequency fD, and the prediction strategy corresponds to the best CQI. Among the channel profiles evaluated, TDL-D and TDLE achieve the lowest MSE values, especially at moderate to

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 12
0 5 10 15 20 25 30
−25
−20
−15
−10
−5
0
fD (Hz)
MSE (dB)
WienerBest-CQI GRUBest-CQI
20
−
−
−
−
D
TDL-A TDL-E TDL-D
Fig. 15: Comparison of MSE prediction error (in dB) for the Wiener and GRU models trained on the TDL-A channel and evaluated on different LOS channel profiles: TDL-A, TDL-E, and TDL-D.
high Doppler frequencies. This behavior can be attributed to their dominant line-of-sight components, which result in more predictable temporal channel variations. Surprisingly, the TDL-A profile leads to the highest prediction error, even though the models were trained on TDL-A. Its propagation characteristics appear less favorable for prediction compared to more structured profiles like TDL-D or TDL-E. Overall, this figure demonstrates that both predictors remain robust under LOS channel conditi-
ons, with the Wiener-based model outperforming the GRU. It also illustrates that models trained on general channel profiles, such as TDL-A, can generalize effectively to more deterministic environments. 2) CSI Acquisition in FDD: In FDD systems, downlink CSI must be explicitly estimated at the UE and reported back to the base station, typically in the form of a single quantized CQI value. In this subsection, we evaluate the performance of the proposed predictors in the FDD context. The primary goa-
l is to determine the optimal future time instant, or prediction horizon τ ̆, at which the CQI should be predicted to maximize system throughput. Our analysis reveals a counter-intuitive yet critical finding: the maximum average throughput is achieved not with a shortterm prediction, but with a horizon τ ̆ > TCSI/2. This behavior stems from a fundamental trade-off between immediate prediction accuracy and robustness against channel aging over the full transmission interval. This effect is clearly -
illustrated by the conditioned throughput shown in Fig. 16. For a short horizon (τ ̆ = 2), the throughput starts high but decays rapidly as the predicted CQI becomes outdated. Conversely, for longer horizons (τ ̆ = 16 or 32), the initial throughput is lower, but it remains remarkably stable across the entire reporting window. This stability prevents severe performance degradation in the later slots, ultimately resulting in a higher overall average throughput. The underlying reason for this stabili-
ty is revealed in Fig. 17, which shows the probability distribution of the CQI prediction error. For longer prediction horizons, the model learns to be conservative. Observe that for τ ̆ = 16 and 32,
0 4 8 12 16 20 24 28 32
28
30
32
34
36
38
τ
Conditioned throughput (Mbps)
τ ̆ = 2 τ ̆ = 16 τ ̆ = 32
Fig. 16: Instantaneous throughput per slot for the GRU-based predictor in FDD mode, shown for different prediction horizons τ ̆.
the probability of making a perfect prediction (error = 0) decreases, but the probability of underestimating the CQI by one level (a conservative error of +1) increases significantly. Crucially, the probability of overestimating the CQI (an aggressive error of -1) remains very low. This conservative bias leads to the selection of a slightly more robust, lower-order MCS. While this choice sub-optimally utilizes the channel in the initial slots (hence the lower initial throughput in Fig. 16), it pre-
vents link failures in the later slots, ensuring consistent performance throughout the transmission interval.
−2 −1 0 1 2
0
0.2
0.4
0.6
0.8
1
SNR (dB)
P r(CQIReal − CQIP redict)
τ ̆ = 2 τ ̆ = 16 τ ̆ = 32
Fig. 17: Probability distribution of the CQI prediction error (defined as CQIReal − CQIPredicted) for different prediction horizons.
V. DISCUSSION AND CONCLUSION
This paper has presented and evaluated two CSI prediction frameworks for TDD and FDD systems, operating in the effective SINR domain to maintain compatibility with standard EESM-based link adaptation while reducing computational complexity. A comparative analysis between a classical Wiener filter and a learning-based GRU predictor was conducted under

IEEE TRANSACTIONS ON VEHICULAR TECHNOLOGY, VOL. XXX, NO. XXX, MAY 2025 13
diverse channel conditions. The key findings and implications of this study are summarized as follows:
• Domain efficiency: Operating in the effective SINR domain significantly reduces dimensionality compared to predicting the full channel matrix, enabling efficient realtime implementation without compromising compatibility with 5G standards. • Optimal complexity: An input sequence length of just four samples was found to be sufficient for both predictors. Increasing model depth or input history yields diminishing returns, particularly at high Doppler shifts. • Generalization vs. complexity: The GR-
U-based predictor outperforms the Wiener filter in MSE and exhibits superior generalization capabilities across different channel profiles (e.g., training on TDL-A and testing on TDLB/C). However, this comes at a higher computational cost. Surprisingly, the Wiener filter remains a competitive, ultra-low-complexity alternative, especially in very low or very high mobility regimes where complex learning offers limited gains. • FDD prediction horizon: A counter-intuitive result was observed in FDD sy-
stems: predicting a distant horizon (e.g., τ ̆ > TCSI/2) yields a higher average throughput than short-term prediction. This is due to the predictor learning a conservative bias that stabilizes performance over the entire reporting interval, preventing link failures caused by channel aging. • Deployment strategy: The trade-off analysis suggests a split deployment strategy. The computationally intensive but robust GRU approach is well-suited for TDD BSs, where processing power is available. Convers-
ely, the lightweight Wiener filter is the preferable choice for FDD UEs, offering reasonable performance with minimal impact on device power consumption.
Overall, these findings provide practical guidelines for selecting CSI prediction strategies based on specific system constraints, supporting more efficient and adaptive link management in future wireless networks.
REFERENCES
[1] F. J. Mart ́ın-Vega, J. C. Ruiz-Sicilia, M. C. Aguayo, and G. G ́omez, “Emerging tools for link adaptation on 5G NR and beyond: Challenges and opportunities,” IEEE Access, vol. 9, pp. 126 976–126 987, 2021. [2] A. Goldsmith, Wireless Communications. Cambridge university press, 2005. [3] Y. Wang, W. Liu, and L. Fang, “Adaptive modulation and coding technology in 5G system,” in Proc. International Wireless Communications and Mobile Computing (IWCMC), 2020, pp. 159–164. [4] 3GPP, Technical Specif-
ication (TS); Physical layer procedures for data, 3rd Generation Partnership Project (3GPP) TS 38.214, Rev. 17.12.0, January 2025. [5] A. K. Papazafeiropoulos, “Impact of general channel aging conditions on the downlink performance of Massive MIMO,” IEEE Transactions on Vehicular Technology, vol. 66, no. 2, pp. 1428–1442, 2017. [6] K. T. Truong and R. W. Heath, “Effects of channel aging in massive MIMO systems,” Journal of Communications and Networks, vol. 15, no. 4, pp. 338–351, 2013. [7] C. Jian-
g and et al, “Machine learning paradigms for next-generation wireless networks,” IEEE Wireless Communications, vol. 24, no. 2, pp. 98–105, 2017. [8] Y. Liu and S. Blostein, “Identification of frequency non-selective fading channels using decision feedback and adaptive linear prediction,” IEEE
Transactions on Communications, vol. 43, no. 2/3/4, pp. 1484–1492, 1995. [9] W. Jiang and H. D. Schotten, “A comparison of wireless channel predictors: Artificial intelligence versus Kalman filter,” in Proc. IEEE International Conference on Communications (ICC), 2019, pp. 1–6.
[10] H. Kim and et al, “Massive MIMO channel prediction: Kalman filtering vs. machine learning,” IEEE Transactions on Communications, vol. 69, no. 1, pp. 518–528, 2021. [11] F. Blanquez-Casado and et al, “eOLLA: an enhanced outer loop link adaptation for cellular networks,” EURASIP Journal on Wireless Communications and Networking, vol. 2016, no. 1, p. 20, 2016.
[12] H. Ye, G. Y. Li, and B.-H. Juang, “Power of deep learning for channel estimation and signal detection in OFDM systems,” IEEE Wireless Communications Letters, vol. 7, no. 1, pp. 114–117, 2018. [13] Y. Liao and et al, “CSI feedback based on deep learning for Massive MIMO systems,” IEEE Access, vol. 7, pp. 86 810–86 820, 2019. [14] W. Saad, M. Bennis, and M. Chen, “A vision of 6G wireless systems: Applications, trends, technologies, and open research problems,” IEEE Network, vol. 34, no. 3, pp. -
134–142, 2020. [15] S. Hong and et al, “Machine learning-based adaptive CSI feedback interval,” ICT Express, vol. 8, no. 4, pp. 544–548, 2022. [Online]. Available: https://www.sciencedirect.com/science/article/pii/S2405959521001545 [16] Y. Li and et al, “EA-LSTM: Evolutionary attention-based LSTM for time series prediction,” Knowledge-Based Systems, vol. 181, p. 104785, 2019. [17] S. Kadambar and et al, “Deep learning based joint CSI compression and prediction for beyond-5G systems,” in Proc. IEEE-
 Global Communications Conference, 2023, pp. 4792–4797. [18] J. Gao and et al, “Fast time-varying wireless channel prediction based on deep learning,” in Proc. 9th International Conference on Computer and Communications (ICCC), 2023, pp. 940–945.
[19] Z. Yuan, K. Niu, and C. Dong, “Channel prediction and PMI/RI selection in MIMO-OFDM systems based on deep learning,” in Proc. IEEE 32nd Annual International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC), 2021, pp. 598–603.
[20] H. Jiang, M. Cui, D. W. K. Ng, and L. Dai, “Accurate channel prediction based on transformer: Making mobility negligible,” IEEE Journal on Selected Areas in Communications, vol. 40, no. 9, pp. 2717–2732, 2022. [21] C. J. Vaca-Rubio and et al, “Kolmogorov-arnold networks (kans) for time series analysis,” 2024. [Online]. Available: https://arxiv.org/abs/ 2405.08790 [22] S. Kadambar and et al, “Smart-CSI: Deep learning based low complexity CSI prediction for beyond-5G systems,” in Proc. IEEE 98t-
h Vehicular Technology Conference (VTC2023-Fall), 2023, pp. 1–5.
[23] Z. Qin and et al, “A partial reciprocity-based channel prediction framework for FDD Massive MIMO with high mobility,” IEEE Transactions on Wireless Communications, vol. 21, no. 11, pp. 9638–9652, 2022. [24] 3GPP, Technical Report (TR); Study on channel model for frequencies from 0.5 to 100 GHz, 3rd Generation Partnership Project (3GPP) TR 38.901, Rev. 17.0.0, April 2022. [25] T. L. Jensen, S. Kant, J. Wehinger, and B. H. Fleury, “Fast link adaptation for mimo ofdm,” IEEE Transactions on Vehic-
ular Technology, vol. 59, no. 8, pp. 3766–3778, 2010. [26] S. Lagen and et al, “New radio physical layer abstraction for systemlevel simulations of 5G networks,” in Proc. IEEE International Conference on Communications (ICC), 2020, pp. 1–7. [27] S. M. Kay, Fundamentals of statistical signal processing: estimation theory. Prentice-Hall, Inc., 1993. [28] P. J. Brockwell and R. A. Davis, Time series: Theory and Methods. Springer-Verlag, 1987. [29] S. R. Mattu and et al, “Deep Channel Prediction: A DN-
N Framework for Receiver Design in Time-Varying Fading Channels,” IEEE Transactions on Vehicular Technology, vol. 71, no. 6, pp. 6439–6453, 2022. [30] S. Hochreiter and J. Schmidhuber, “Long Short-Term Memory,” Neural Computation, vol. 9, no. 8, pp. 1735–1780, 1997. [31] J. Chung and et al, “Empirical evaluation of gated recurrent neural networks on sequence modeling,” 2014. [Online]. Available: https://arxiv.org/abs/1412.3555 [32] F. J. Martı ́n-Vega, M. C. Aguayo-Torres, G. Go ́mez, J. Campos, a-
nd J. Torrecilla, “R1-2300071, “Further discussions of AI/ML for CSI feedback enhancement”,” in 3GPP TSG RAN WG1 Meeting #112, Athens, Greece, February 27th – March 3rd, 2023, pp. 1–14. [Online]. Available: https://www.3gpp.org/ftp/tsg ran/WG1 RL1/ TSGR1 112/Docs/R1-2300071.zip

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:37.289Z
- **Text Length:** 69147 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 13 of 13
