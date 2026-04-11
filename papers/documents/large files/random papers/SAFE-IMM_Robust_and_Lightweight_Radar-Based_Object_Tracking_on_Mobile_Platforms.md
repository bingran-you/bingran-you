# PDF Document: Mandaokar and Rinner - 2025 - SAFE-IMM Robust and Lightweight Radar-Based Object Tracking on Mobile Platforms.pdf

**File Path:** Mandaokar and Rinner - 2025 - SAFE-IMM Robust and Lightweight Radar-Based Object Tracking on Mobile Platforms.pdf

**Processed Date:** 2026-02-10T18:17:35.667Z

**File Size:** 2427.70 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3258

**Title:** SAFE-IMM: Robust and Lightweight Radar-Based Object Tracking on Mobile Platforms

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

SAFE-IMM: ROBUST AND LIGHTWEIGHT RADAR-BASED OBJECT TRACKING ON MOBILE PLATFORMS
Dnyandeep Mandaokar and Bernhard Rinner
University of Klagenfurt Institute of Networked and Embedded Systems Klagenfurt, Austria
ABSTRACT
Tracking maneuvering targets requires estimators that are both responsive and robust. Interacting Multiple Model (IMM) filters are a standard tracking approach, but fusing models via Gaussian mixtures can lag during maneuvers. Recent winnertakes-all (WTA) approaches react quickly but may produce discontinuities. We propose SAFE-IMM, a lightweight IMM variant for tracking on mobile and resource-limited platforms with a safe covariance-aware gate that permits WTA only when the implied jump from the -
mixture to the winner is provably bounded. In simulations and on nuScenes front-radar data, SAFE-IMM achieves high accuracy at real-time rates, reducing ID switches while maintaining competitive performance. The method is simple to integrate, numerically stable, and clutterrobust, offering a practical balance between responsiveness and smoothness.
Index Terms— Interacting Multiple Models, Multi-Object Tracking, Radar-based Tracking
1. INTRODUCTION
Abrupt maneuvers degrade tracking performance with singlemodel Kalman Filters (KF) and nonlinear filters. The Interacting Multiple Model (IMM) approach addresses this by running multiple motion models and fusing them through a Markovian Transition Probability Matrix (TPM) [1, 2]. Therefore, IMM is widely applied in RADAR, UAV, and multi-sensor systems because it balances accuracy and robustness. However, IMM fusion is computationally expensive. The Gaussian mixture outputs remain continuous, but a-
t a rather low rate due to the computational complexity, with limited applicability on resource-limited platforms. Lightweight α–β and α–β–γ filters support fast IMM, reducing runtime by more than 60% compared to KF-IMM while maintaining similar accuracy [3]. fastIMM-EV extends this idea by adding Viterbi selection for efficient maneuver recognition [4]. Nonlinear variants such as EKF, strong-tracking square-root CKF [5], or random-weighted CKF [6] improve convergence under abrupt motion. More rec-
ently, machine learning-enhanced IMMs with online parameter adaptation in UAV tracking avoid hard
tuning [7]. These methods improve accuracy but further increase computational cost compared with lightweight filters or linear sub-filter models. Beyond efficiency, IMM is also sensitive to corrupted measurements. This has motivated robust likelihood designs. Huber-based derivative-free KFs improve resilience to contaminated Gaussian noise [8], while Student-t formulations provide heavy-tailed robustness in Bayesian filtering and smoothing [9]. Another key challenge is TPM adaptation. Lee and Park-
 [10] proposed dual correction functions to polarize or activate transitions depending on the maneuvering state. Whereas, Gai and Wang [11] combined probability-difference corrections with a time-window discriminator to accelerate switching. Additionally, the structural variants include variablestructure IMM with smoothing (AVSIMMFS), which dynamically prunes model sets while maintaining accuracy [12]. All these extensions either fuse models (IMM) or enforce hard selection (WTA), risking discontin-
uities. Yet, none of the above approaches explicitly control the output continuity when switching from mixture fusion to single-model selection. To our knowledge, no prior IMM variant enforces an explicit tolerance on WTA discontinuity. This work introduces a safe covariance-aware gate that bounds drift whenever WTA is selected, thereby preserving continuity without modifying IMM internals. This addresses a gap left by existing methods, improving overall performance. Building on this, the proposed-
 SAFE-IMM combines Student-t likelihoods and lightweight TPM adaptation to deliver a tracker that is faster and more robust than conventional IMM, while maintaining accuracy. In addition, SAFE-IMM is integrated with Global Nearest Neighbor (GNN) association, providing a simple yet efficient end-to-end Multi-Object Tracking (MOT) framework [13].
2. METHODOLOGY
2.1. Conventional IMM
The conventional IMM with M models {Mi}M
i=1, each producing a Gaussian posterior N (μi, Pi) after correction, returns
arXiv:2511.20294v2 [eess.SY] 26 Nov 2025

the single-Gaussian mixture [2]
μmix =
M
X
i=1
ci μi
Pmix =
M
X
i=1
ci Pi + (μi − μmix)(μi − μmix)⊤
(1)
where ci = Pr(Mi | Z1:k) denotes the posterior model probabilities at time k. Model priors are ck|k−1 = Π⊤ck−1|k−1; mixing into model j uses c ̄j = P
i Πij ci and weights αi→j =
Πij ci
c ̄j , yielding mixed (μ0,j, P0,j) via the standard IMM formulas (state-space mapped by Ti→j). Each model likelihood under Gaussian innovation is [2]
Lj ∝ |Sj |−1/2 exp − 1
2 v⊤
j S−1
j vj (2)
Sj = Hj P −
j H⊤
j + Rj (3)
where Sj, Hj, and Rj denote the innovation covariance, measurement matrix, and measurement noise covariance of model j, respectively.
2.2. SAFE-IMM
We integrate a post-fusion, covariance-aware gate that provably bounds the drift when the output follows a WTA model. In addition, the method hardens the pipeline with robust Student-t likelihoods and simple TPM adaptations based on generalized likelihood ratio (GLR), entropy, and winner streak. Let w = ck|k denote the posterior model-probability vector, with w⋆ = arg maxi wi the index of the winning model, ww = maxi wi the winning probability, and the tail mass t = 1 − ww. Map each rival model i -
̸= w⋆ into the winner’s state space via Ti→w⋆ defined as
μi→w = Ti→w⋆ μi (4)
Pi→w = Ti→w⋆ PiT ⊤
i→w⋆ (5)
∆i = μi→w − μw (6)
where (μw, Pw) is the winner’s mean and covariance, with w standing for w⋆. If t > 0, the normalized rival weights are defined as w ̃i = wi/t (so P
i̸=w w ̃i = 1). The reference
covariance matrix P ̄ and weighted Mahalanobis spread of rival means d2 are defined as
P ̄ = 1
2 Pw +
X
i̸=w
w ̃i Pi→w , (7)
d2 =
X
i̸=w
w ̃i ∆⊤
i P ̄−1∆i. (8)
We assume P ̄ ≻ 0 so that P ̄−1 exists. Applying the Cauchy–Schwarz inequality in the P ̄−1 inner product yields the following rank-one PSD (Loewner) inequality:
vv⊤ ⪯ (v⊤P ̄−1v) P ̄ (for all v),
which yields the drift bound (Euclidean norm)
μmix − μw ≤ B = t
q
tr(P ̄) d2. (9)
If B ≤ εWTA, we permit WTA and output (μw, Pw); else we output the conventional mixture (1). Thus, WTA is permitted whenever (WTA gate)
μmix − μw ≤ εWTA. (10)
Fig. 1 left and middle show the WTA pass and rejected cases, and Fig. 1 right presents a close rival case. This demonstrates how the WTA gate not only accounts for the mean distances between the mixture and the winner, but also for the underlying covariance geometry (Mahalanobis distance) that shapes the safe boundary. In particular, even when a rival mean appears close in Euclidean space, an elongated covariance can imply a large Mahalanobis separation. Thus, the bound guarantees that WTA is perm-
itted only when both the probability mass and the geometry of uncertainty will remain within the tolerance εWTA. In such cases, its cost approaches that of a single-model KF, while retaining IMM-level robustness when WTA is not triggered. Algorithm 1 outlines one iteration of our SAFE-IMM:
Algorithm 1 One IMM iteration with ε-gate SAFE WTA
1: ck|k−1 = Π⊤ck−1|k−1 (priors) 2: for j = 1, . . . , M do
3: Mix into j: (μ0,j, P0,j); predict & update; 4: Compute vj, Sj 5: Likelihood Lj (Gaussian or robust) (2) 6: end for
7: Posterior w = ck|k; identify winner w⋆, t = 1 − maxi wi 8: Compute (μmix, Pmix) via (1)
9: Build P ̄, d2; compute B (9) 10: if B ≤ εWTA then
11: Output (μw, Pw) ▷ WTA fires; mean drift ≤ εWTA 12: else 13: Output (μmix, Pmix) ▷ No WTA 14: end if
Fig. 1: Illustration of the SAFE WTA rule with covariance geometry. The panels demonstrate when WTA is permitted (left), rejected (center), or permitted with a close rival (right).

2.3. Hardening Strategies
In addition to the theoretical SAFE WTA gate, the SAFE-IMM integrates the following modifications that improve robustness and stability. Data Association: There are various methods for tracking, such as Joint Probabilistic Data Association (JPDA) or PDA, and the Multiple Hypothesis Theorem (MHT). The JPDA and MHT are effective in cluttered environments but are much slower and computationally heavier [14]. Thus, to support the aim of our method for lightweight tracking, we use a GNN tracker for ass-
ociation with SAFE-IMM to perform multi-object tracking. Robust Likelihoods: We replace the Gaussian likelihood Lj in (2) with robust Student-t. These heavy-tailed distributions down-weight large residuals, tempering the effect of clutter and outliers [8, 9]. Adaptive Transition Matrix: Instead of a fixed TPM, we apply online corrections: a probability cap, GLR/entropy-based blending, winner-streak self-transition bias, and small boosts for CA/CV maneuver models (cf. [11, 12, 10]). These adjustmen-
ts accelerate switching to the appropriate model while maintaining robustness to noise.
3. EXPERIMENTS
The SAFE-IMM is assessed in simulations under maneuvers and noise. Additionally, it is validated on the nuScenes validation split [15] using the front-radar (70◦ FoV, ≤70 m) with dynamic-only ground truth from the aligned front camera. Comparisons are made against conventional IMM baselines, linear KF, and nonlinear EKF with Constant Velocity (CV), Constant Acceleration (CA), Constant Turnrate (CT) models, and published monocular front-view trackers [16, 17, 18]. Against these baselines, SAFE-IMM -
employs only two KFs (CV and CA) to remain lightweight without sacrificing robustness. The baseline IMMs and SAFE-IMM are combined with the GNN tracker. All runs were executed CPU-only on a laptop (Intel Core Ultra 7 155H @1.40 GHz, 32 GB RAM, 64-bit OS), ensuring results reflect real-time performance without GPU support. The model is designed and validated in MATLAB. All parameters discussed further were fixed across all experiments.
3.1. Simulation Setup
The proposed SAFE IMM is tested and evaluated in MOT scenarios. The simulation runs ∆t = 0.1 s with total durations of T = 30 s. We use two models CV (nx = 6) and CA (nx = 9) with process noise intensities qCV = 0.5 and qCA = 0.2. The base TPM is:
Πbase = 0.992 0.008
0.015 0.985 ,
which is adaptive TPM using GLR- and entropy-based blending with αmax = 0.7, gGLR = 0.10, gEnt = 0.50, winner bias
0.10, CA boost 0.15, CV boost 0.05. Robust likelihoods are enabled via Student-t (ν = 5) with stronger tail under jamming (νjam = 2). For gating, we set εWTA = 0.5, margin δ = 0.05, and hysteresis streak length 2. The truth MOT is three targets with: (T1) with nearly constant velocity, (T2) with moderate maneuvers to assess switching responsiveness, and (T3) with sharp accelerations to stress the robustness of SAFE-IMM under aggressive dynamics. The GNN tracker is set with assignment threshold 30 -
and confirmation thresholds [2, 5].
Evaluation Metrics: The Root-Mean-Square Error (RMSE) is computed for state estimation accuracy. For MOT performance, the Optimal Sub-Pattern Assignment (OSPA) distance quantifies both localization error and cardinality mismatch. The details of the used RMSE and OSPA metric are found in [6, 19].
3.2. Simulation Result
SAFE -IMM
T1
T3
T2
T1
T3
T2
PROFLE 1 PROFLE 2
Fig. 2: Ground truth vs. simulated tracks of targets T1-T3 under profiles 1 (high position noise) and 2 (high velocity noise).
PROFILE 1 T2
PROFILE 2 T2
Fig. 3: Model probabilities (CV:1, CA:2) and WTA decisions for T2. The orange spike shows WTA fire, and the blue spike shows the winner change.

Table 1: Profile 1 Per-target x, y RMSE and OSPA.
Target Tracker RMSEx,y [m] ↓ OSPA (mean — loc — card) ↓ T1 SAFE-IMM [0.173, 0.242] 0.994 — 0.327 — 0.667 Nonlinear [0.230, 0.237] 1.034 — 0.367 — 0.667 Baseline [0.819, 0.714] 1.963 — 1.297 — 0.667 T2 SAFE-IMM [0.125, 0.358] 1.334 — 0.334 — 1.000 Nonlinear [0.218, 0.303] 1.064 — 0.398 — 0.667 Baseline [0.653, 0.820] 1.988 — 1.321 — 0.667 T3 SAFE-IMM [0.108, 0.118] 0.884 — 0.217 — 0.667 Nonlinear [0.160, 0.264] 1.003 — 0.337 — 0.667 Baseline [0.707, 0.740] 1.926 — 1.259 — 0.667
Table 2: Profile 2 Per-target x, y RMSE and OSPA.
Target Tracker RMSEx,y [m] ↓ OSPA (mean — loc — card) ↓ T1 SAFE-IMM [0.010, 0.009] 0.681 — 0.014 — 0.667 Nonlinear [0.010, 0.009] 0.682 — 0.015 — 0.667 Baseline [0.010, 0.009] 0.682 — 0.015 — 0.667 T2 SAFE-IMM [0.025, 0.010] 0.685 — 0.020 — 0.667 Nonlinear [0.009, 0.010] 0.682 — 0.016 — 0.667 Baseline [0.009, 0.010] 0.682 — 0.016 — 0.667 T3 SAFE-IMM [0.017, 0.016] 0.686 — 0.022 — 0.667 Nonlinear [0.010, 0.011] 0.683 — 0.016 — 0.667 Baseline [0.010, 0.011] 0.683 — 0.016 — 0.667
The SAFE-IMM is evaluated with two noise profiles for Profile 1 (2.0 m, 0.01 m/s) and Profile 2 (0.01 m, 2.0 m/s). For Profile 1, SAFE-IMM yields the lowest overall RMSEs [0.135, 0.179] m (pos) and [0.120, 0.014] m/s (vel), mean OSPA 1.070; and follows the same trend for localization 0.292 and cardinality 0.667. It outperforms nonlinear and baseline IMMs in position RMSE and OSPA with 100% ε-gate compliance. Table 1 summarizes per-target scores. Under Profile 2, SAFE-IMM preserves 100% ε-gate comp-
liance; Fig. 2 shows MOT tracks for both profiles. In this case, overall RMSE close to [0.017, 0.012]m (pos) and [0.180, 0.117]m/s (vel), mean OSPA 0.683. The OSPA localization and cardinality are also similar. The RMSE for T2 and T3 is higher than that of baseline models. When velocity noise dominates, SAFE-IMM’s conservative WTA triggers more switches and sacrifices a bit of RMSE; nuScenes still shows net MOT gains (see Fig. 3). The overall OSPA metrics for baseline, nonlinear, and SAFE-IMM are -
close. SAFE-IMM has better localization and cardinality for T1 and slightly lower for T2 and T3 against the other two trackers. Table 2 reports per-target values. In Fig. 3, T2 shows the per-step model probabilities, winner index, and WTA events in SAFE-IMM. For profile 1, model 1 dominates with only brief switching near t≈11s; the blue stem markers indicate WTA fires, which consistently selected Model 1 in 299/300 frames (min margin 1.99). In profile 2, more frequent switching occurs around t≈10--
15s, where model 2 intermittently wins, resulting in higher RMSE; the WTA mechanism still fired in 299/300 frames, ultimately committing to model 2 (min margin 1.62), ensuring 100% compliance. Ablation Study: The IMM without the SAFE gate yields mean RMSEs of [0.133, 4.929]m (pos), with mean OSPA 2.895,
Table 3: NuScenes Front-Radar Validation.
Model AMOTA
(%)↑
AMOTP (m)↓
MOTA (%)↑
MOTP (m)↓
MOTAR ↑
Recall ↑
IDS ↓ SAFE-IMM 7.24 0.178 18.5 1.261 0.480 0.386 37 Nonlinear 6.01 0.146 17.1 1.150 0.427 0.400 91 Baseline 6.28 0.169 16.1 1.208 0.409 0.395 105
notably degraded on T2. With the SAFE gate, performance is markedly improved (see Table 1). We also evaluated the impact of the SAFE gate under two likelihood models with higher noise of (0.30 m, 8.00 m/s). Gaussian showed larger bound excursions of max 22.5 againt Student-t, which was more robust to outliers, with max 18.3. The SAFE gate for Profile 1 shows that the fixed TPM yielded slightly lower mean OSPA (0.975 vs. 1.080) and marginally lower velocity RMSEs, while the adaptive TPM improved T2-
 position along x/y (0.148/0.143 vs. 0.270/0.199). The fixed TPM suffices, reserving adaptive TPM for maneuver-rich scenarios.
3.3. Evaluation with NuScenes Dataset
For the evaluation, dynamic-only ground truth aligned with the front camera [15]. Following the MoMA-M3T protocol [18, 15], result reports class-agnostic AMOTA/AMOTP. SAFEIMM+GNN uses a sliding-window radar object detector [20] to keep the pipeline efficient. The multi-sensor and categoryaware extensions are left to future work. SAFE-IMM surpasses both conventional IMM variants, improving AMOTA/MOTA and sharply reducing IDS switches (see Table 3), while running in real time. Compared to monocular -
front-view baselines on the same split (CenterTrack [16]: 4.6% AMOTA; TraDeS [17]: 5.9%; PermaTrack [18]: 6.6%), SAFE-IMM achieves higher AMOTA. While AMOTA values are modest due to the radar-only modality, SAFE-IMM improves +1.0–1.5% AMOTA over baselines and reduces ID switches by 60%. Although the modalities differ, numbers are offered only for a rough context. SAFE-IMM yields slightly lower recall because its covariance-aware gating and conservative WTA suppress marginal tracks, trading coverag-
e for greater consistency, robustness, and ID stability. All models share the same GT set (∼13.8k objects). SAFE-IMM achieves 17.9FPS end-to-end and 229.6FPS IMM-only (Baseline: 9.3FPS/198.1FPS; Nonlinear: 8.8FPS/187.9FPS).
4. CONCLUSION
SAFE-IMM combines a covariance-aware gate, robust likelihoods, and adaptive TPM to guarantee bounded drift under WTA. Simulations and nuScenes experiments show accuracy, robustness, and real-time performance versus conventional and nonlinear IMM baselines. The SAFE-IMM is computationally inexpensive with a WTA single model output for interaction and prediction. SAFE-IMM is a practical, principled tracker for maneuvering targets under resource constraints.

5. REFERENCES
[1] H.A.P. Blom and Y. Bar-Shalom, “The interacting multiple model algorithm for systems with markovian switching coefficients,” IEEE Transactions on Automatic Control, vol. 33, no. 8, pp. 780–783, 1988.
[2] A.F. Genovese, “The interacting multiple model algorithm for accurate state estimation of maneuvering targets,” Johns Hopkins APL Technical Digest (Applied Physics Laboratory), vol. 22, no. 10, pp. 614–623, 2001.
[3] Dahmani Mohammed, M. Keche, Abdelaziz Ouamri, and Meche Abdelkrim, “A new imm algorithm using fixed coefficients filters (fastimm),” Aeu-international Journal of Electronics and Communications - AEU-INT J ELECTRON COMMUN, vol. 64, pp. 1123–1127, 2010.
[4] Yi Di, Hao Tian, Jia Guo, Binghua Shi, Zheng Wang, Ke Yan, and Yueheng Liu, “A maneuvering target tracking based on fastimm-extended viterbi algorithm,” Neural Computing and Applications, vol. 37, pp. 7925–7934, 2023.
[5] Bo Han, Hanqiao Huang, Lei Lei, Changqiang Huang, and Zhuoran Zhang, “An improved imm algorithm based on stsrckf for maneuvering target tracking,” IEEE Access, vol. 7, pp. 57795–57804, 2019.
[6] Jian Ma and Xiaoting Guo, “Combination of imm algorithm and astrwckf for maneuvering target tracking,” IEEE Access, vol. 8, pp. 143095–143103, 2020.
[7] Yuan Zeng, Wenbin Lu, Bo Yu, Shifei Tao, Haosu Zhou, and Yu Chen, “Improved imm algorithm based on support vector regression for uav tracking,” Journal of Systems Engineering and Electronics, vol. 33, no. 4, pp. 867–876, 2022.
[8] Lubin Chang, Baiqing Hu, Guobin Chang, and An Li, “Robust derivative-free kalman filter based on huber’s m-estimation methodology,” Journal of Process Control, vol. 23, pp. 1555–1561, 2013.
[9] Michael Roth, Tohid Ardeshiri, Emre  ̈Ozkan, and Fredrik K. Gustafsson, “Robust bayesian filtering and smoothing using student’s t distribution,” ArXiv, vol. abs/1703.02428, 2017.
[10] In Ho Lee and Chan Gook Park, “An improved interacting multiple model algorithm with adaptive transition probability matrix based on the situation,” International Journal of Control, Automation and Systems, vol. 21, no. 10, pp. 3299–3312, 2023.
[11] Gai Hang and Jianwei Wang, “Adaptive modified transition probability imm algorithm for maneuvering target
tracking,” in Proc International Conference on Electronic Technology and Information Science (ICETIS), 2024, pp. 427–431.
[12] Kai-Yu Hu, Jiaming Wang, Yuqing Cheng, and Chunxia Yang, “Adaptive filtering and smoothing algorithm based on variable structure interactive multiple model,” Scientific Reports, vol. 13, 2023.
[13] Julian Smith, Florian Particke, Markus Hiller, and J ̈orn Thielecke, “Systematic analysis of the pmbm, phd, jpda and gnn multi-target tracking filters,” in Proc International Conference on Information Fusion (FUSION), 2019, pp. 1–8.
[14] G. De Feo, M. Graziano, A. Miglioli, and A. Farina, “Immjpda versus mht and kalman filter with nn correlation: Performance comparison,” IEE Proc. Radar, Sonar Navig., vol. 144, no. 2, pp. 49–54, 1997.
[15] Holger Caesar, Varun Bankiti, Alex H. Lang, Sourabh Vora, Venice Erin Liong, Qiang Xu, Anush Krishnan, Yu Pan, Giancarlo Baldan, and Oscar Beijbom, “ nuScenes: A Multimodal Dataset for Autonomous Driving ,” in Proc IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2020, pp. 1161811628.
[16] Xingyi Zhou, Vladlen Koltun, and Philipp Kr ̈ahenb ̈uhl, “Tracking objects as points,” in Proc European Conference, 2020, number 17, p. 474–490.
[17] Jialian Wu, Jiale Cao, Liangchen Song, Yu Wang, Ming Yang, and Junsong Yuan, “Track to detect and segment: An online multi-object tracker,” in Proc IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2021, pp. 12347–12356.
[18] Kuan-Chih Huang, Ming-Hsuan Yang, and Yi-Hsuan Tsai, “ Delving into Motion-Aware Matching for Monocular 3D Object Tracking ,” in Proc IEEE/CVF International Conference on Computer Vision (ICCV), 2023, pp. 6886–6895.
[19] Branko Ristic, Ba-Ngu Vo, Daniel Clark, and Ba-Tuong Vo, “A metric for performance evaluation of multi-target tracking algorithms,” IEEE Transactions on Signal Processing, vol. 59, no. 7, pp. 3452–3457, 2011.
[20] Dnyandeep Mandaokar and Bernhard Rinner, “Evaluating millimeter-wave radar for resource-efficient drone perception,” in Proc International Conference on Distributed Computing in Smart Systems and the Internet of Things (DCOSS-IoT), 2025, pp. 352–359.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:35.667Z
- **Text Length:** 21432 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
