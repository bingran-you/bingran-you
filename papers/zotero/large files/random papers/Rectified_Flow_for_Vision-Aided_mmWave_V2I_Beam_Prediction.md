# PDF Document: Zheng et al. - 2025 - Rectified Flow for Vision-Aided mmWave V2I Beam Prediction.pdf

**File Path:** Zheng et al. - 2025 - Rectified Flow for Vision-Aided mmWave V2I Beam Prediction.pdf

**Processed Date:** 2026-02-10T18:18:06.161Z

**File Size:** 954.41 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3279

**Title:** Rectified Flow for Vision-Aided mmWave V2I Beam Prediction

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Rectified Flow for Vision-Aided mmWave V2I
Beam Prediction
Can Zheng∗, Jiguang He†, Chung G. Kang∗, Guofa Cai‡, Chongwen Huang§, Henk Wymeersch¶
∗School of Electrical Engineering, Korea University, Seoul, Republic of Korea †School of Computing and Information Technology, Great Bay University, Dongguan 523000, China ‡School of Information Engineering, Guangdong University of Technology, Guangzhou, China §College of Information Science and Electronic Engineering, Zhejiang University, Hangzhou 310027, China ¶Department of Electrical Engineering, Chalmers University of Technology, Gothenburg, Sweden
Abstract—This paper proposes a flow matching (FM) framework based on rectified flow for vision-aided beam prediction in vehicle-to-infrastructure (V2I) links. Instead of modeling discrete beam index sequences, the method learns a continuous latent flow governed by an ordinary differential equation (ODE)-based vector field, enabling smooth beam trajectories and fast sampling. A terminal flow constraint enforces global consistency under finite-step integration, stabilizing long-term prediction. The -
resulting FM-based model significantly improves top-K accuracy over RNN and LSTM baselines, approaches the performance of large language model–based approaches, and achieves inference speedups on the order of 10× and 104× on identical GPU and CPU deployments, respectively. Index Terms—Beam prediction, flow matching, V2I, deep learning.
I. INTRODUCTION
Millimeter-wave (mmWave) vehicle-to-infrastructure (V2I) links offer high throughput but suffer from frequent misalignment and blockage under mobility, making repeated beam training and sweeping costly in urban scenarios [1], [2]. Sensing-aided beam prediction mitigates this by using perceptual data, such as visual inputs from roadside cameras, to anticipate optimal beams without full channel state information (CSI) [3]. However, discrete sequence predictors (e.g., RNNs, LSTMs) accumulate errors a-
nd become unstable over long horizons [4], while recent multimodal and transformer-based methods require large paired datasets and heavy computation [5]–[7], limiting real-time deployment at resource-constrained RSUs. These limitations call for a modeling paradigm that treats beam evolution as a smooth continuous process and supports accurate, low-latency prediction with lightweight inference. Flow matching (FM) offers exactly such a paradigm: it has recently emerged as a framework for learning co-
ntinuous-time dynamics that combine high predictive fidelity with efficient sampling [8]. By modeling data evolution as a continuous conditional flow governed by ordinary differential equations (ODEs), FM enables fast and stable sampling with only a few integration steps. It has achieved competitive or faster generation across images, videos, speech, and molecular domains [8]–[10], and has recently been adapted to autonomous driving for trajectory generation and planning [11], showing its
Fig. 1: Illustration of the V2I system model, where the RSU is equipped with a monocular camera.
suitability for tasks with smoothly evolving states and stringent fast-sampling requirements.
Inspired by the effectiveness of FM, we design a visionconditioned beam prediction framework. The main contributions of this paper are summarized as follows: (i) Flow-based modeling for beam dynamics: We introduce a FM framework for vision-aided beam prediction based on rectified flow, enabling continuous-time modeling of beam evolution; (ii) Terminal flow constraint for stability: We design a terminal flow constraint that enforces long-horizon consistency and improves prediction stability; and (i-
ii) Efficient and practical edge deployment: The proposed FM model achieves superior prediction accuracy with lightweight computational cost, making it suitable for real-time deployment at the network edge.
Notations: Bold lowercase and uppercase letters denote vectors, matrices, and tensors. The superscripts (·)T and (·)H represent the transpose and Hermitian operations, respectively We define a sequence as Xa:b , {xτ }b
τ=a. Standard norms include the Euclidean norm |·|2 and the element-wise magnitude | · |. The primary operators used are the expectation E[·], the
indicator function 1{·}, and the maximizer index arg max(·). The SOFTMAX(·) function maps logits to probabilities, and IM [y] is the one-hot vector for class y. Furthermore,  ̇zτ = dzτ /dτ is the derivative with respect to normalized time τ (using step size ∆τ ), and the standard fields R and C denote the real and complex numbers.
arXiv:2511.20265v1 [eess.SP] 25 Nov 2025

A. System Description
We consider a roadside mmWave system where a roadside unit (RSU) is equipped with an N -element antenna array and employs a single radio frequency (RF) chain and a phase shifter-based analog beamformer. This RSU serves a singleantenna user equipment (UE), as illustrated in Fig. 1. The RSU applies analog beamforming using a predefined codebook W = {w1, . . . , wM }, where M is the size of the codebook, and each wm ∈ CN is unit norm. The downlink narrowband baseband model at time t is given by rt = -
hH
t wmst + nt, (1) where ht ∈ CN is the downlink channel vector, st is a unitpower symbol, and nt is complex Gaussian noise. The optimal beam index that maximizes the instantaneous receive power is m∗
t = arg max
m∈{1,...,M }
∣
∣hH
t wm
∣ ∣
2. (2)
A monocular RGB camera mounted on the RSU captures the roadway ahead. From each frame, a pre-trained object detector extracts the bounding box of the target vehicle, denoted as xt = [xc,t, yc,t, wt, ht]T, where (xc,t, yc,t) is the box center and (wt, ht) are its width and height of the box.
II. SYSTEM MODEL
A. Objective and Challenge
We define THist and TPred as the history length and prediction horizon (both in frames), respectively. For a reference time t, the RSU observes the past visual history of length THist and aims to predict the optimal beam indices for the current and future TPred time steps. We denote this mapping as
Yˆ t:t+TPred−1 = fΘ
(Xt−THist:t−1
), (3) where fΘ(·) is a learned predictor parameterized by Θ, Xt−THist:t−1 is the visual input sequence, and the model
output Yˆ t:t+TPred−1 is a sequence, where for each time step
t′ ∈ {t, t + 1, . . . , t + TPred − 1}, each column yˆt′ ∈ RM is a probability distribution vector over the available beams. The resulting predicted beam index sequence ˆmt:t+TPred−1 is derived by taking the index corresponding to the maximum probability element in each yˆt′ , and this sequence targets the ground-truth indices mt∗:t+TPred−1 defined in Section I-A. This vision-conditioned beam prediction task is challenging for several reasons: This vision-conditioned beam prediction task is challe-
nging for several reasons: First, the mapping from 2D bounding box trajectories to the future optimal beam indexes is highly complex and environment-dependent. Specifically, the underlying wireless channel evolution, and thus the mapping from visual state to optimal beam index, is fundamentally a non-linear, non-Gaussian, and non-Markovian process. Even though the channel is largely geometric, the inherent time-varying nature of V2I environments introduces channel complexity. In addition, the high-
 sensitivity of narrow beams to small angular changes results in a prediction output highly sensitive to the input’s spatio-temporal dynamics, making traditional methods inadequate. To tackle these challenges, we utilize a historical sensing data sequence for spatio-temporal prediction to capture the UE’s motion trend and the dynamic
...
Euler Sampling Step
Condi onal Flow Matching
...
Sample Step
...
...
...
...
...
Predic on Period
Fig. 2: Architecture of the proposed FM-based beam prediction framework. Modules with a spark icon participate in end-to-end training.
environmental context, which also aligns with the requirements for beam prediction outlined in 3rd generation partnership project (3GPP) artificial intelligence (AI)/machine learning (ML) for beam management (BM) Cases 1 and 2 [12]. Second, the predictor must generate a temporally consistent sequence mˆ t:t+TPred−1, and conventional sequence models (e.g., RNNs, LSTMs) suffer from error accumulation over long horizons [13]. Third, for high-mobility V2I scenarios, prediction must have extremely low -
latency to enable beam switching before channel conditions change [14]. This requires the inference process to remain lightweight for deployment on resourceconstrained RSUs. These considerations motivate a design that (i) models smooth beam dynamics in a continuous latent space, (ii) enforces global consistency over a finite horizon, and (iii) enables fast, stable inference. In the next section, we present a flow-matching-based beam prediction framework that meets these requirements.
III. VISION-AIDED BEAM PREDICTION VIA FLOW MATCHING
Fig. 2 illustrates the proposed FM-based beam prediction framework, which aims to learn a continuous conditional flow in the latent space, enabling the beam states to evolve smoothly over time. The framework is primarily composed of three key modules, FM training, a terminal flow constraint, and a vision-conditioned beam flow, each of which are detailed in the following subsections.
A. Flow Matching Training
We denote by T = THist + TPred the total window length (in frames). This temporal window normalized into a unittime parameter τ ∈ [0, 1]. For each discrete frame index t′, we define the corresponding normalized time coordinate τt′ = ∆τ × [t′ − (t − THist)] with ∆τ = 1
T −1 for t′ ∈ [t − THist, t +
TPred − 1] its discretized counterpart associated with frame t′, mapping all frames to the unit interval. The latent trajectory zτ is governed by the following ODE:
z ̇ τ = uθ(zτ , τ ), (4)

where uθ(·, τ ) is a learnable vector field parameterized by θ. Following [15], we construct an idealized linear interpolant between boundary embeddings as e0, e1 ∈ RM :
zτ = (1 − τ )e0 + τ e1,  ̇eτ = e1 − e0, (5) where e0 = IM [mt∗−THist ] and e1 = IM [mt∗+TPred−1] correspond to the one-hot embeddings of two reference beams chosen from the current window. This gives an analytic target velocity  ̇eτ to supervise uθ. The use of a rectified flow is justified by the extremely short duration of the total time interval T .1 Within such a short time frame, the underlying velocity field can be reasonably approximated as evolving at a constant rate. For training samples (-
e0, e1) and a random τ ∼ U(0, 1), we define the FM loss as the following divergence between the target field u(zτ , τ ) and the neural field uθ(zτ , τ ): LFM(θ) = E(e0,e1),τ [‖uθ(zτ , τ ) − u(zτ , τ )‖2]
= E(e0,e1),τ [‖uθ(zτ , τ ) − (e1 − e0)‖2]. (6) Minimizing LFM encourages uθ to approximate the mean transport field between feasible beam states.
B. Terminal Flow Constraint
In realistic vehicular scenes, beam evolution depends strongly on visual context. We first use a learnable embedding function gbox(·) to transform each bounding box vector xt′ ∈ R4 into a feature vector zˆτt′ ∈ RM . The historical feature
sequence Zˆ t−THist:t−1 = gbox(Xt−THist:t−1) is then input to a temporal–spatial condition encoder fcond(·) to extract the context feature c:
c = fcond
( ˆZt−THist:t−1
)
(7)
= fcond (gbox(Xt−THist:t−1)) ∈ Rdc .
Conditioning on c extends the latent dynamics in (4) as
 ̇zτ = uθ(zτ , τ, c), τ ∈ [0, 1]. (8) The latent trajectory is obtained through time-discretized integration using the Euler solver as follows:
zτt′+1 = zτt′ + ∆τ · uθ(zτt′ , τt′ , c), (9) which yields the terminal latent z1 at the end of the prediction horizon. Although the FM loss aligns local velocity along the interpolant, it cannot ensure that the integrated trajectory exactly reaches the target beam under finite-step solvers. To enforce global consistency, a terminal flow constraint, denoted as LTerm, that penalizes the endpoint deviation, is introduced as: LTerm = ‖z1 − e1‖2. (10) This term complements the local FM supervision by g-
uiding the latent trajectory to the correct destination, yielding smooth and stable beam evolution across the prediction horizon.
C. Vision-Conditioned Beam Flow
Under the conditioned dynamics in (8), each latent state ˆzτ′
t
is decoded into beam probabilities via a softmax layer:
yˆt′ = SOFTMAX(ˆzτ′
t
). (11)
1The data sampling rate of the dataset considered in this work is approximately 6-8 frames per second (FPS). [16].
TABLE I: Default parameter settings.
Parameters Value
Scenario 8 Codebook size (M ) 32 BS carrier frequency (fc) 60 GHz Batch size (B) 32 Training epochs 100 Initial learning rate 10−3 Decay mode 0.5 per 50 epochs
TABLE II: Model architecture summary.
Module Configurations Dim.
gbox MLP 4→16→64→128→M M fcond 2-layer Transformer, 4 heads 4M uθ MLP on [z, τ, c] M
Note: “Dim.” denotes the dimension of the output, and ‘MLP’ denotes “multilayer perceptron”, respectively.
The cross-entropy loss is then computed as
LCE = − 1
TPred
t+TPred −1
∑
t′ =t
log(yˆt′ )m∗
t′ , (12)
where (yˆt′ )mt′ is the predicted probability of selecting beam
m at time t′. The final objective combines local flow alignment, terminal consistency, and classification terms:
L = LFM + LTerm + LCE. (13)
D. Inference Process
At inference, the condition vector c is derived from the observed visual history. The bounding box observations Xt−THist:t−1 are first transformed into feature sequence ˆZ (7). The latent trajectory is initialized from the feature embedding of the earliest frame:
ˆz0 = gbox(xt−THist ). (14) Using the same time grid as in training, we integrate the conditional ODE (8) with the Euler solver (9) to obtain ˆzτt′ across the prediction horizon. Beam probabilities are then computed via (11), and the predicted index is ˆmt′ = arg maxm(yˆt′ )m. For clarity, the training and inference procedures are summarized in Algorithm 1.
IV. SIMULATION RESULTS
A. Scenario, Methods, and Metrics
We use the DeepSense 6G dataset for performance evaluation [16]. Supervised samples are constructed with a fixed window length T = 13, split into historical and prediction segments (THist, TPred). For each anchor time t, the
model predicts the future beam sequence {mt∗:t+TPred−1}. To prevent data leakage, sequence-level random partitioning is adopted before window sampling. We evaluate two configurations: configuration A (THist/TPred = 8/5) and configuration B (3/10). Vehicle bounding boxes are extracted using YOLO [16]. System parameters and training hyperparameters are listed in Tables I and II. We compare against classical sequence models (RNN and long short-term memory, LSTM) trained on the same visual inputs. We -
also include BeamLLM [6] as a recent large-model baseline. Ablations isolate the contribution of each objective

Algorithm 1 Vision-conditioned FM (training and inference)
Require: Codebook size M ; history THist; horizon TPred; T = THist+TPred; ∆τ = 1/(T −1); input visual data
Xt−THist:t−1.
// Training Objectives: Box embedding function gbox(·), condition encoder fcond(·), conditional vector field uθ. // Training Phase
1: for each minibatch B do
2: c ← fcond(gbox(Xt−THist:t−1))
3: e0 ← IM [yt−THist ], e1 ← IM [yt+TPred−1]
FM Loss 4: Sample τ ∼ U (0, 1); zτ ← (1−τ )e0 + τ e1 5: uθ ← uθ(zτ , τ, c) 6: LFM ← EB
[‖uθ − (e1−e0)‖22
]
Terminal Consistency Loss 7: z0 ← e0
8: for t′ = t−THist to t+TPred−2 do
9: τt′ ← ∆τ · [t′ − (t − THist)]
10: zτt′+1 ← zτt′ + ∆τ uθ(zτt′ , τt′ , c) 11: end for
12: LTerm ← EB
[‖z1 − e1‖22
]
Classification Loss
13: ˆz0 ← gbox(xt−THist );
14: for t′ = t−THist to t+TPred−2 do
15: τt′ ← ∆τ · [t′ − (t − THist)]
16: zˆτt′+1 ← ˆzτt′ + ∆τ uθ(ˆzτt′ , τt′ , c) 17: end for
18: yˆt′ ← SOFTMAX(ˆzτt′ )
19: LCE ← − 1
T
∑t+TPred −1
t′=t log(yˆt′ )m∗
t′
20: Update Θ to minimize L = LFM + LTerm + LCE 21: end for
// Inference Phase
22: c ← fcond(gbox(Xt−THist:t−1))
23: zˆ0 ← gbox(xt−THist )
24: for t′ = t−THist to t+TPred−2 do
25: τt′ ← ∆τ · [t′ − (t − THist)]
26: ˆzτt′+1 ← ˆzτt′ + ∆τ uθ(ˆzτt′ , τt′ , c) 27: end for
28: yˆt′ ← SOFTMAX(ˆzτt′ ) for t′ = t, . . . , t+TPred−1
29: Return Predicted beams mˆ t∗′ = arg maxm(yˆt′ )m.
(LFM, LTerm, LCE) and compare different condition encoders (Transformer versus RNN and LSTM).
Let m(n)
t′
∗ denote the index of the optimal beam (groundtruth label) for the n-th test sample at time t′. We compute the top-K accuracy at time t′ by averaging over all test samples:
ACCK (t′) = 1
NTest
NTest ∑
n=1
1
{
m(n)
t′
∗ ∈ QK
(yˆ(n)
t′
)
}
, (15)
where QK (·) returns the K beams with the highest predicted
probabilities from the score vector yˆ(n)
t′ for sample n. We report results for K ∈ {1, 3}; ACCK follows the common practice of scheduling a short candidate beam list and is less sensitive to small angular label noise [12], [17].
Fig. 3: Training loss curves over 100 epochs in Scenario 8 [16]. Blue curves (LFM, LTerm) are read from the left y-axis; orange curves (LCE, L) from the right y-axis.
Fig. 4: ACCK performance of the proposed method compared to several baselines under configuration A (THist = 8 and TPred = 5).
B. Results and Discussion
1) Training Dynamics and Convergence: Fig. 3 shows all objectives dropping sharply in the first 20–30 epochs and then gradually stabilizing after epoch 50. The FM loss LFM and terminal loss LTerm decay together, indicating that the learned vector field both matches local velocities and guides trajectories to the correct endpoint under few-step Euler integration. The cross-entropy loss LCE closely follows the total loss L, and no late-stage divergence or oscillation appears, suggesting a stable, we-
ll-conditioned training process.
2) Beam Prediction Performance: Under configuration A, Fig. 4 compares ACC1 and ACC3 over prediction steps. FM yields the best performance throughout. ACC1 for all models gradually decreases over time, but FM consistently keeps the highest values. ACC3 remains relatively stable with slight degradation, where FM also stays superior and its margin grows mildly with time. Among baselines, BeamLLM is closest to FM, followed by LSTM, while RNN performs worst in both metrics. Fig. 5 shows the model perf-
ormance across prediction steps under configuration B. BeamLLM demonstrates the strongest long-term robustness: although it is not the top performer

Fig. 5: ACCK performance of the proposed method compared to baselines in under configuration B (THist = 3 and TPred = 10) .
TABLE III: Average ACCK performance of FM under different environmental scenarios.
Scenarios Description # Samples Top-1 Top-3
Scenario 1 Day-time,
McAllister Ave 1
2411 0.62 0.91
Scenario 2 Night-time, McAllister Ave 1
2974 0.53 0.84
Scenario 5 Night-time, rainy, Tyler St.
2300 0.58 0.95
Scenario 8 Day-time,
McAllister Ave 1
4043 0.68 0.96
Note: “St.” denotes the “Street”. in the early stages, it consistently improves and eventually becomes the best-performing model, maintaining the most stable performance over time. FM attains strong early accuracy but degrades in later steps, particularly for ACC1. LSTM presents smoother but consistently lower, while RNN performs the worst throughout the horizon with the most substantial deterioration. Overall, BeamLLM is preferable for long-term prediction due to its higher and more stable late-s-
tep accuracy. 3) Ablation Studies: Table IV reports average ACCK under standard and long-term prediction. The full model performs best on nearly all metrics. Dropping LFM mainly degrades standard prediction, while removing LTerm chiefly harms long-term performance. Replacing fcond(·) with an LSTM or RNN of the same size yields only minor changes, with more noticeable drops only in long-term prediction. Overall, both loss terms are essential, whereas the conditional encoder choice has limited impac-
t. 4) Complexity Analysis: Inference experiments are conducted on an NVIDIA Tesla T4 GPU and Intel Xeon CPU available on Google Colab. Table V summarizes model complexity and latency. The proposed FM model achieves comparable computational cost to lightweight baselines while offering higher accuracy, making it well-suited for edge deployment. In comparison, BeamLLM incurs significantly higher CPU-side delay. Therefore, all evaluated models except BeamLLM on CPU are practically deployable, while FM-
-based model stands out as a more balanced option for performance
TABLE IV: Ablation study on average ACCK accuracy.
Metrics Base w/o LFM w/o LTerm
LSTM cond.
RNN cond. K 131313 1313 cfg. A 0.68 0.96 0.62 0.96 0.68 0.96 0.66 0.96 0.66 0.96 cfg. B 0.57 0.92 0.58 0.92 0.55 0.91 0.53 0.90 0.57 0.91
TABLE V: Comparison of the network parameters and the inference cost per test sample.
Model # Parameters Inf. Time
(GPU, sec)
Inf. Time (CPU, sec)
RNN 29,505 2.0 × 10−4 1.9 × 10−4
LSTM 104,385 2.2 × 10−4 2.8 × 10−4
FM 133,904 3.3 × 10−4 3.5 × 10−4
BeamLLM 178,303,798 2.2 × 10−3 1.31
Note: The object detector’s parameters and runtime are excluded to focus on the beam predictor’s complexity, since its visual features are shared and reusable for other tasks (e.g., vehicle statistics), incurring negligible additional cost for beam prediction.
critical edge inference scenarios.
V. CONCLUSION
We proposed a rectified flow-based FM framework for vision-aided mmWave beam prediction that models continuous beam dynamics for fast and stable inference. The method achieves higher prediction accuracy than traditional sequence models and performance comparable to BeamLLM, while requiring far lower computational complexity suitable for edge deployment. Future work includes improving perception robustness, e.g., addressing occlusion and bounding-box ambiguity via depth cues or multi-sensor fusion.-
 Furthermore, while the current rectified flow model’s assumption of uniformvelocity evolution yields good performance, we will explore using a more refined piecewise uniform-velocity evolution assumption, which would allow the model to more accurately capture the varying velocity of beam dynamics across different stages, potentially further enhancing prediction accuracy and stability. Finally, we aim to extend the FM framework to broader wireless tasks such as proactive channel prediction in high-
-mobility links (e.g., satellite channels with severe aging) and traffic or network load forecasting.
ACKNOWLEDGMENT
This work was supported by the National Research Foundation of Korea (NRF) grant funded by the Korea government (MSIT) (RS2025-00517140).
REFERENCES
[1] 3GPP TR 38.900 V15.0.0, “Study on channel model for frequency spectrum above 6 GHz,” Tech. Rep., Jul. 2018. [2] K. Ma, Z. Wang, W. Tian, S. Chen, and L. Hanzo, “Deep learning for mmwave beam-management: State-of-the-art, opportunities and challenges,” IEEE Wireless Commun., vol. 30, no. 4, pp. 108–114, 2023. [3] M. Alrabeiah, A. Hredzak, and A. Alkhateeb, “Millimeter wave base stations with cameras: Vision-aided beam and blockage prediction,” in Proc. IEEE Vehicular Technology Conference (VTC2-
020-Spring), 2020. [4] S. Jiang and A. Alkhateeb, “Computer vision aided beam tracking in A real-world millimeter wave deployment,” in Proc. IEEE Globecom Workshops (GC Wkshps), 2022, pp. 142–147.

[5] Y. Tian, Q. Zhao, Z. e. a. Kherroubi, F. Boukhalfa, K. Wu, and F. Bader, “Multimodal transformers for wireless communications: A case study in beam prediction,” ITU Journal on Future and Evolving Technologies, vol. 4, no. 3, pp. 461–471, 2023. [6] C. Zheng, J. He, G. Cai, Z. Yu, and C. G. Kang, “BeamLLM: Visionempowered mmwave beam prediction with large language models,” arXiv preprint arXiv:2503.10432, 2025.
[7] L. Cheng, H. Zhang, B. Di, D. Niyato, and L. Song, “Large language models empower multimodal integrated sensing and communication,” vol. 63, no. 5, pp. 190–197, 2025. [8] Y. Lipman, R. T. Q. Chen, H. Ben-Hamu, M. Nickel, and M. Le, “Flow matching for generative modeling,” in Proc. International Conference on Learning Representations (ICLR), May 2023.
[9] Y. Jin, Z. Sun, N. Li, K. Xu, K. Xu, H. Jiang, N. Zhuang, Q. Huang, Y. Song, Y. MU, and Z. Lin, “Pyramidal flow matching for efficient video generative modeling,” in Proc. International Conference on Learning Representations (ICLR), May 2025.
[10] A. H. Liu, M. Le, A. Vyas, B. Shi, A. Tjandra, and W.-N. Hsu, “Generative pre-training for speech with flow matching,” in Proc. International Conference on Learning Representations (ICLR), May 2024.
[11] T. Tan, Y. Zheng, R. Liang, Z. Wang, K. Zheng, J. Zheng, J. Li, X. Zhan, and J. Liu, “Flow matching-based autonomous driving planning with
advanced interactive behavior modeling,” in Proc. Annual Conference on Neural Information Processing Systems (NeurIPS), Dec. 2025.
[12] 3GPP TR 38.843 V18.0.0, “Technical specification group radio access network; Study on artificial intelligence (AI)/machine learning (ML) for NR air interface,” Tech. Rep., Dec. 2023. [13] S. Bengio, O. Vinyals, N. Jaitly, and N. Shazeer, “Scheduled sampling for sequence prediction with recurrent neural networks,” in Proc. Advances Neural Information Processing Systems (NIPS), 2015, p. 1171–1179. [14] A. Kose, H. Lee, C. H. Foh, and M. Dianati, “Beam-based mobility management in 5g millimetre -
wave v2x communications: A survey and outlook,” IEEE Open J. Intell. Transp. Syst., vol. 2, pp. 347–363, 2021. [15] X. Liu, C. Gong, and Q. Liu, “Flow straight and fast: Learning to generate and transfer data with rectified flow,” in Proc. International Conference on Learning Representations (ICLR), May 2023.
[16] A. Alkhateeb, G. Charan, T. Osman, A. Hredzak, J. Morais, U. Demirhan, and N. Srinivas, “DeepSense 6G: a large-scale real-world multi-modal sensing and communication dataset,” IEEE Commun. Mag., vol. 61, no. 9, pp. 122–128, Sept. 2023. [17] Q. Xue, J. Guo, B. Zhou, Y. Xu, Z. Li, and S. Ma, “AI/ML for beam management in 5G-Advanced: A standardization perspective,” IEEE Veh. Technol. Mag., vol. 19, no. 4, pp. 64–72, 2024.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:06.161Z
- **Text Length:** 25767 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
