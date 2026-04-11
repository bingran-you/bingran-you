# PDF Document: Mi et al. - 2025 - Video Generation Models Are Good Latent Reward Models.pdf

**File Path:** Mi et al. - 2025 - Video Generation Models Are Good Latent Reward Models.pdf

**Processed Date:** 2026-02-10T18:15:11.999Z

**File Size:** 24384.44 KB

**Total Pages:** 16

**Extracted Pages:** 16

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3738

**Title:** Video Generation Models Are Good Latent Reward Models

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Video Generation Models Are Good Latent Reward Models
Xiaoyue Mi1,† Wenqing Yu2,∗ Jiesong Lian3 Shibo Jie4 Ruizhe Zhong5 Zijun Liu6 Guozhen Zhang7 Zixiang Zhou2 Zhiyong Xu2 Yuan Zhou2,‡ Qinglin Lu2 Fan Tang1,§ 1University of Chinese Academy of Sciences 2Tencent Hunyuan 3Huazhong University of Science and Technology 4Peking University 5Shanghai Jiao Tong University 6Tsinghua University 7Nanjing University
Figure 1. PRFL generates high-quality videos with enhanced motion quality. We show results on image-to-video (frames of different sizes) and text-to-video (frames of same size) generation tasks, showing the representative frames from each video.
Abstract
Reward feedback learning (ReFL) has proven effective for aligning image generation with human preferences. However, its extension to video generation faces significant challenges. Existing video reward models rely on visionlanguage models designed for pixel-space inputs, confining ReFL optimization to near-complete denoising steps after computationally expensive VAE decoding. This pixelspace approach incurs substantial memory overhead and increased training time, and its late-stage optimization la-
cks early-stage supervision, refining only visual quality rather than fundamental motion dynamics and structural coherence. In this work, we show that pre-trained video generation models are naturally suited for reward modeling in the noisy latent space, as they are explicitly designed to process noisy latent representations at arbitrary timesteps and inherently preserve temporal information through their sequential modeling capabilities. Ac
1† Work done during internship at Tencent Hunyuan. 2∗ Equal contribution. mxysdu@gmail.com 3‡ Project leader. 4§ Corresponding author. tfan.108@gmail.com
cordingly, we propose Process Reward Feedback Learning (PRFL), a framework that conducts preference optimization entirely in latent space, enabling efficient gradient backpropagation throughout the full denoising chain without VAE decoding. Extensive experiments demonstrate that PRFL significantly improves alignment with human preferences, while achieving substantial reductions in memory consumption and training time compared to RGB ReFL.
1. Introduction
Recent video generation models [10, 19, 21, 36] have demonstrated remarkable visual fidelity, producing photorealistic content across diverse applications [14, 25, 31]. Nevertheless, aligning these models with complex human preferences, particularly concerning motion quality [24], physical plausibility [1], and prompt following [4], remains a fundamental challenge [45]. Reward feedback learning (ReFL) [6, 32, 42] has emerged as a promising way for preference alignment in image generation. Neverthe-
less, its direct application to video generation encounters critical computational and optimization barriers that fundamentally limit its applicability.
1
arXiv:2511.21541v1 [cs.CV] 26 Nov 2025

VAE Decoder
Forward Backward
1) Sample t close to 0
DiTs VAE
Decoder
RGB Reward Model
DiTs
Latent Reward Model
2) Predict directly
3) Backpropagate gradients through the VAE
1) Sample random t 2) Take one denoising step
Time-consuming Late-step supervision Out-of-memory
Fast sampling All-step supervision Low memory cost
3) Backpropagate gradients
ReFL
PRFL
Figure 2. Comparison between RGB ReFL and our PRFL. RGB reward models require near-complete denoising and VAE decoding to RGB space, introducing evaluation delay, GPU memory bottleneck, and insufficient supervision of early denoising stages where structure and motion are formed. PRFL eliminates these limitations by performing reward modeling directly in latent space with timestep-aware training.
Typical ReFL approaches rely on outcome-based reward models built upon Vision-Language Models (VLMs) [12, 13, 24, 38, 42]. As shown in Fig. 2, such outcome-based reward models focus on videos in RGB space, which imposes three interconnected limitations due to their inherent post-hoc nature for diffusion-based video generation models (VGMs). Initially, the RGB inputs for VLMs require near-complete denoising, which introduces significant evaluation delay and drastically slows down training iteration-
s. Furthermore, this necessity leads to a GPU memory bottleneck, as backpropagation through the VAE decoder for all video frames frequently causes GPU memory overflow. Ultimately, the issue of insufficient supervision occurs because rewards are only applied at the final steps, failing to directly guide early generation stages when structure and motion are formed. Although some recent methods [11, 39] attempt to distribute gradient updates via gradient stopping or trajectory shortcuts, they still d-
epend on fully denoised frames and costly VAE decoding for reward model construction. ContentV [22] bypasses VAE decoding by optimizing only the first frame, yet sacrifices holistic video quality assessment, while DOLLAR [7] employs a VLMbased latent reward model but lacks fine-grained timestepwise supervision.
Alternatively, VGMs themselves have shown potential as reward sources, offering process-level supervision throughout the denoising trajectory. For instance, LPO [46] pioneered using diffusion models as noise-aware latent reward models for image generation, while VideoAlign [24] briefly mentioned using video generation models for inferencetime guidance. However, the use of video generation models as train-time reward models remains largely unexplored. We posit that VGMs possess unique properties fo-
r reward modeling: (1) inherent noise-aware feature extraction at arbitrary denoising step, (2) sensitivity to generation artifacts, and (3) native support for full-sequence processing without frame sampling. Through experimental analysis, we verify
that the latent features of VGMs are suitable for determining the quality of videos. Yet a critical question remains: how to repurpose VGMs into effective reward models that compress comprehensive spatiotemporal features while maintaining noise-level sensitivity.
In this study, we tackle these challenges through processlevel reward modeling and optimization, enlarging VGMs. First, we propose a Process-Aware Video Reward Model (PAVRM), which repurposes video generation models to evaluate quality directly from noisy latent representations at arbitrary timesteps. PAVRM employs learnable query vectors to compress variable-length spatiotemporal features into a compact video quality-aware token, inherently encouraging the model to learn quality-relevant patterns-
 rather than memorizing content-specific correlations. Furthermore, we develop Process Reward Feedback Learning (PRFL) to optimize generation quality. During training, PRFL randomly samples timesteps and maximizes process rewards through a single gradient, with no VAE decoding overhead and the full-trajectory learning signal distribution. Extensive experiments demonstrate that PRFL achieves substantial improvements (up to +56.00 in dynamic degree, +21.52 in human anatomy) with significant memory s-
avings and at least 1.4× faster training over RGB ReFL. Our contributions can be summarized as follows:
• We propose a process-aware video reward model (PAVRM), which employs query-based aggregation to efficiently handle variable-length videos with timestep sensitivity, and keep artifact awareness throughout the denoising process based on pre-trained video models.
• We introduce process reward feedback learning (PRFL), an efficient video post-training framework that operates in latent space by sampling random timesteps and optimizing through single denoising steps, without VAE decoding and distributing reward across the full denoising process. • Experiments show our approach improves motion quality while saving substantial GPU memory and at least accelerating training by 1.4× compared to RGB ReFL.
2. Related Work
2.1. Visual Reward Feedback Learning
Reward feedback learning has proven effective for improving visual generation quality. Early works [6, 32, 42] finetune diffusion models using differentiable reward signals from human preferences, but face a depth-efficiency dilemma: step-by-step backpropagation through extensive denoising steps incurs prohibitive memory costs, while training only final steps fails to optimize low-level objectives like symmetry. Recent approaches [11, 39] mitigate this through gradient stopping or trajectory-prese-
rving
2

0.0 0.2 0.4 0.6 0.8 1.0 Timestep t
−0.8
−0.7
−0.6
−0.5
−0.4
−0.3
−0.2
Metric Score (VideoAlign-MQ)
(a) VideoAlign-MQ Scores across Different Timesteps MQ
L8 L16 L24 L32 L40 Number of DiT Layers (L)
74
76
78
80
82
84
86
Accuracy (%)
78.83% 78.57% 78.06% 78.57% 78.83%
(b) Layer-wise Feature Quality Analysis
Setup: t=0.2, MLP-only VideoAlign (78.83%)
0.2 0.4 0.6 0.8 Timestep t
74
76
78
80
82
84
86
Accuracy (%)
(c) Timestep-wise Feature Quality Analysis
Fixed t (MLP-only) Random t (MLP-only) Random t (Full fine-tuning)
Figure 3. Analysis on VGM Features. (a) VLM-based reward model (VideoAlign-MQ) exhibits poor timestep generalization with fluctuating scores. (b) VGM features from any DiT layer uniformly achieve 78.8% accuracy, matching VLM baseline. (c) Timestep-aware fine-tuning unlocks VGM’s full potential, achieving 85.46% accuracy with peak performance at early timesteps (t=0.8).
shortcuts. However, these image-focused methods encounter severe computational barriers in video generation due to multi-frame synthesis and gradient-enabled VAE decoding overhead. ContentV [22] optimizes only the first frame but cannot capture comprehensive video quality. Critically, almost existing approaches require pixel-space rewards, necessitating VAE decoding. While DOLLAR [7] leverages a VLM as a latent reward model for distillation tasks to avoid costly VAE decoding, it lacks timestepwise-
 optimization capability. In this paper, we propose a timestep-wise latent reward model operating directly in latent space, enabling gradient backpropagation at arbitrary timesteps while maintaining computational tractability.
2.2. Reward Models for Video Generation
Reward models for RLHF [29] are typically trained on human preferences [34] and categorized into outcome models [33] supervising final results and process models [20, 37, 47] supervising intermediate steps. Current video reward models focus on outcome models. Early video reward models adapted image-based approaches [44] or introduced VLMs for quality assessment [12, 13, 24, 28, 40]. However, these outcome-based reward models operate only on near-complete outputs, lacking direct guidance for the cr-
itical early denoising stages where fundamental video attributes are established. However, these outcome-based reward models need almost fully denoising stages and lack direct guidance to early denoising stages. LPO [46] pioneered using diffusion models as noise-aware latent reward models for image generation, a promising process reward attempt. However, different from image generation, video generation introduces substantially greater complexity. VideoAlign [24] briefly mentioned using VGMs as gu-
idance during inference augmentation, while using VGMs as reward models during training remained unexplored. We comprehensively investigate VGMs as latent reward models, offering frame-continuous processing, artifact sensitivity, and timestep-aware rewards aligned with the generation process, with effective integration into the ReFL and other online reinforcement learning methods.
3. Preliminaries and Feasibility Analysis
Rectified Flow. Recently, video generation models [10, 19, 36] operate in rectified flow [23, 26], which establishes a continuous transport between data and noise distributions. Specifically, given clean data x0 sampled from distribution q(x0) and noise x1 from distribution p(x1), the framework defines a time-dependent interpolation path:
xt = (1 − t)x0 + tx1, t ∈ [0, 1]. (1)
A neural network (usually several DiT blocks) parameterized by θ predicts the velocity field vθ(xt, t) at each timestep, trained via the flow matching objective, which also as supervised fine-tuning (SFT) loss:
LFM(θ) = Et∼U(0,1), x0∼q(x0), x1∼p(x1) ∥vθ(xt, t) − v∥2 ,
(2) where v = x1 − x0 denotes the data-to-noise transport direction.
Reward Feedback Learning. Reward Feedback Learning (ReFL) [42] optimizes diffusion models by backpropagating reward signals through the denoising process. Given a reward model rφ and generated output x0, ReFL samples a timestep t from the late denoising stage and computes gradients from the reward score. To prevent reward over-optimization, the objective combines rewardbased loss with SFT regularization:
LReFL = −λEx0∼VGMθ [rφ(D(x0))] + LFM(θ), (3)
where D denotes the VAE decoder.
Feasibility Analysis of VGM-based Reward Models. We analyze whether VGMs can serve as effective reward models using motion quality as a case study.
VLM fails on noisy inputs (Fig. 3(a)). VideoAlign [24], a representative VLM-based video reward model trained on large-scale preference data, exhibits severe performance degradation across different denoising timesteps. When evaluating latents decoded to RGB space, the logit scores
3

Initialize
DiT Block
DiT Block
DiT Block
DiT Block
DiT Block
DiT Block
Text & Time Step
Text & Time Step
Attention
Head
Query
Key & Value
VGM PAVRM
Reward r PAVRM Training
PRFL
A man in a mexican outfit holding an acoustic guitar
VAE Encoder
T5
PAVRM
Time step t
r
T5
VGM
Time step t
r
PAVRM
Trainable Frozen
A man in a mexican outfit holding an acoustic guitar
Figure 4. Overview of our process-aware video generation alignment framework. Left: Architecture of the Video Generation Model (VGM) and Process-Aware Video Reward Model (PAVRM). Right: Two-stage training pipeline. PAVRM training with reward prediction from noisy latents. Process Reward Feedback Learning (PRFL) optimizing VGM through latent-space reinforcement learning at randomly sampled timesteps.
fluctuate dramatically between early and late timesteps, revealing poor generalization to high-noise regions.
VGM features encode motion efficiently (Fig. 3(b)). We employ a simple MLP as a linear probe to assess VGM feature quality. Remarkably, probing features from any DiT layer (L8 to L40) achieves uniform performance at 78.8%, matching the VideoAlign baseline. This confirms that motion dynamics are efficiently distributed throughout the network, enabling the use of only the first 8 layers for a more efficient reward model.
Timestep-aware fine-tuning unlocks VGM’s potential (Fig. 3(c)). While MLP-only probing (both fixed and random timestep) fails to surpass the VLM baseline, coupling full fine-tuning with random timestep sampling yields a dramatic leap to 85.46% (∼6.6% absolute gain), particularly when sampling features from earlier noisy states (t=0.8). This validates that fine-tuned VGMs provide superior, timestep-robust signals for learning motion quality rewards.
4. Method 4.1. Overview
We propose process reward feedback learning, a new ReFL framework in the video generation task to address GPU memory and training time limitations. As shown in Fig. 4, the full process consists of two stages: (1) training a Process-Aware Video Reward Model (PAVRM, Sec. 4.2) adapted from the VGM that evaluates video quality directly from noisy latents at arbitrary diffusion timesteps, and (2) optimizing the VGM using Process Reward Feedback Learning (PRFL, Sec. 4.3).
4.2. Process-Aware Video Reward Model
Architecture of PAVRM. PAVRM leverages features from a frozen pre-trained VGM to predict preference scores directly from noisy latents, as illustrated in Fig. 4 (left).
Algorithm 1 Process Reward Feedback Learning (PRFL)
1: Input: Velocity predictor vθ, PAVRM Fφ, VAE encoder E, datasets DPRFL, DSFT, reward weight λ, total timesteps T , timestep interval ∆t, learning rate η 2: for each training iteration do 3: // Supervised Fine-Tuning Regularization 4: Sample (V, I, p) ∼ DSFT and tsft ∼ U (0, 1) 5: Compute x0 = E(V ), sample x1 ∼ N (0, I) 6: Construct xtsft = (1 − tsft)x0 + tsftx1
7: Compute LFM = ∥vθ(xtsft , tsft) − (x1 − x0)∥2
2
8: Update θ ← θ − η∇θLFM 9: // Process Reward Feedback Learning 10: Sample (I, p) ∼ DPRFL, xT ∼ N (0, I), and t ∼ U (0, T − 1)
11: for j = T, T − 1, . . . , t + 1 do
12: no grad: xj−1 ← xj − ∆t · vθ(xj , j) 13: end for 14: with grad: xt ← xt+1 − ∆t · vθ(xt+1, t + 1)
15: Compute rt = Fφ(xt, t, I, p) and LPRFL = −λ · rt 16: Update θ ← θ − η∇θLPRFL 17: end for
Given a noisy latent video xt ∈ RF ×H×W ×C at timestep t and a text prompt p, we use the first eight DiT blocks of the backbone as spatiotemporal feature-extractor:
h = DiTφ(xt, t, T (p)) ∈ RF ×H×W ×D, (4)
where T (·) denotes the text encoder, and D denotes the feature dimension. These intermediate representations naturally encode motion quality signals at various noise levels, as demonstrated in Fig. 3. To handle variable-length video features and extract discriminative representations, we employ a query attention as query-based spatiotemporal aggregation that adaptively compresses spatiotemporal information into a fixedsize embedding. Specifically, we flatten the spatiotempo
4

ral features h ∈ RF ×H×W ×D into hˆ ∈ RN×D where N = F · H · W , and compute:
zobs = exp(q(hˆWK )T /√D)
P exp(q(hˆWK )T /√D) (hˆWV ) ∈ R1×D, (5)
where q ∈ R1×D is a learnable query vector, and WK , WV ∈ RD×D are projection matrices. The final representation z = zobs + q ∈ RD concatenates observation features with content-agnostic quality priors, enabling the model to reason about generation quality independent of content correlations. A three-layer MLP as head layer maps z to the reward score rφ(xt, t, p) ∈ R.
Training Objective. PAVRM is trained on a binary preference dataset DRM = {(Vi, pi, yi)}N
i=1 where yi ∈ {0, 1} indicates motion quality satisfaction. Following the rectified flow formulation (Eq. (1)), we construct noisy latents xt = (1 − t)x0 + tx1 with x1 ∼ N (0, I) and t ∼ U (0, 1), where x0 = E(V ). The training objective minimizes:
LPAVRM = − Et,(V,p,y) y log σ(rφ(xt, t, p))
+ (1 − y) log(1 − σ(rφ(xt, t, p))) ,
(6)
where t ∼ U (0, 1) and (V, p, y) ∼ DRM. We freeze the VAE encoder E while jointly optimizing the DiT blocks, query vector q, and MLP parameters. A critical design of PAVRM is the random sampling of timesteps t ∈ [0, 1] during training. Unlike outcome-based reward models that only evaluate clean outputs (t ≈ 0), PAVRM learns stage-appropriate quality assessment across the entire denoising trajectory. This is justified in rectified flow: since xt follows a deterministic linear interpolation from noi-
se to data, preference labels of final outputs naturally propagate to intermediate states. This process-aware training enables effective guidance throughout the generation process, as demonstrated in Sec. 5.
4.3. Process Reward Feedback Learning
As discussed in Sec. 3, vanilla RGB ReFL (Eq. (3)) optimizes only final denoised outputs x0, requiring VAE decoding D(x0) and pixel-space reward computation—prohibitively expensive for high-resolution videos. Moreover, sampling timesteps only from late denoising stages fails to improve early-stage motion planning, which critically determines overall physical coherence. PRFL addresses these limitations by performing reward optimization at arbitrary intermediate timesteps directly in latent space, e-
liminating VAE decoding while distributing learning signals across the entire generation trajectory.
Training Procedure. As shown in Alg. 1, we extend the ReFL framework by replacing outcome rewards with
0 20 40 60 80 100 Percentage (%)
SFT
RWR
RGB ReFL
22.13% 18.53% 59.33%
20.53% 16.27% 63.20%
18.80% 13.73% 67.47%
Competitor Wins Ties PRFL Wins
Figure 5. Human evaluation of PRFL model vs. other posttraining methods.
process-level rewards from PAVRM. Given the text prompt p from the dataset DPRFL, we sample the initial noise x1 ∼ N (0, I) and the target timestep s ∼ U(0, 1). In practice, we perform gradient-free denoising rollouts from t = 1 to t = s + ∆t, and then execute one gradient-enabled step:
xt−∆t = xt − ∆t · vθ(xt, t, p)(w./o. grad), (7)
xs = xs+∆t − ∆t · vθ(xs+∆t, s + ∆t, p)(w/. grad), (8)
where ∆t = 1
N denotes the discrete step size with N total denoising steps. The process reward loss directly maximizes PAVRM-predicted quality at intermediate timestep s: LPRFL = −λEs,p [rφ(xs, s, p)] , (9)
where λ controls optimization strength. Crucially, gradients ∇θLPRFL backpropagate through Eq. (8) and PAVRM rφ without requiring VAE decoding D(·), enabling memoryefficient training. Following the regularization strategy in Eq.( 3), we prevent reward over-optimization by alternating with supervised fine-tuning on curated dataset DSFT = {(Vi, pi)}M
i=1:
LSFT = Et,(V,p) ∥vθ(xt, t, p) − (x1 − x0)∥2
2 , (10)
where x0 = E(V ), t ∼ U (0, 1), and (V, p) ∼ DSFT. This balanced training strategy, alternating between LPRFL and LSFT at each iteration, maintains generation diversity while adapting to motion quality preferences.
5. Experiments
5.1. Experimental Setup
Dataset. We collected about 31,000 portrait videos from online sources and generated text prompts using a video caption model. The first frame and text prompt of each video are fed into the Wan2.1-14B-I2V model for inference. The generated videos are labeled by professional annotators based on motion quality as qualified, partially qualified, and unqualified. The partially qualified videos are filtered out to enhance distinctiveness. Detailed annotation and filtration guidelines are provided in th-
e supplementary
5

Table 1. Comprehensive comparison across video generation benchmarks on text-to-video generation task. Evaluation is conducted on Inner Test Set, VBench and VBench2. For Inner Test Set, we evaluate MS (motion smoothness), DD (dynamic degree), SC (subject consistency) from VBench, HA (human anatomy) from VBench2, and our proposed PAVRM. Base model is Wan2.1-T2V-14B. Bold denotes the best results. Blue values indicate absolute improvements of PRFL over Pretrain baseline. PRFL achieves significant i-
mprovements in dynamic degree and human anatomy.
Method Resolution Inner Test Set VBench VBench2 Avg
MS DD SC HA PAVRM MS DD SC PAVRM HA PAVRM
Pretrain [36] 480P 99.20 22.00 97.34 84.24 89.00 98.00 68.06 92.74 97.22 74.38 69.17 81.03 SFT 480P 98.96 44.00 96.61 92.79 92.00 97.87 62.50 93.21 95.83 84.80 74.17 84.79 RWR [24] 480P 98.99 60.00 95.93 91.85 88.00 98.06 65.28 92.48 93.06 79.67 62.50 84.17 RGB ReFL [22] 480P 99.20 38.00 92.26 91.68 92.00 98.64 62.50 90.60 97.22 84.87 76.67 83.97 PRFL 480P 99.05 68.00 96.34 94.73 92.00 98.18 76.39 94.16 100.00 89.84 76.67 89.58 vs. Pretrain -0.15 +46.00 -1.00 +10.49 +3.00 +0.18 +8.33 +1.42 +2.78 +-
15.46 +7.50 +8.55
Pretrain [36] 720P 99.09 25.00 96.69 78.73 94.00 97.70 61.11 90.63 98.61 68.88 62.10 79.32 PRFL 720P 98.85 81.00 96.09 90.89 95.00 98.06 84.72 95.46 100.00 90.40 66.13 90.60 vs. Pretrain -0.24 +56.00 -0.60 +12.16 +1.00 +0.36 +23.61 +4.83 +1.39 +21.52 +4.03 +11.28
Table 2. Comprehensive comparison across video generation benchmarks on image-to-video generation task. Evaluation is conducted on Inner Test Set and VBench. For Inner Test Set, we evaluate MS (motion smoothness), DD (dynamic degree), SC (subject consistency), IC (i2v subject) from VBench-I2V, and our proposed PAVRM. Bold denotes the best results. Blue values indicate absolute improvements of PRFL over Pretrain baseline. PRFL achieves significant improvements in dynamic degree.
Method Backbone Inner Test Set VBench-I2V Avg
MS DD SC IC PAVRM MS DD SC IC PAVRM
Pretrain [36] Wan2.1-I2V-14B-480P 98.66 57.00 91.73 96.86 87.00 97.86 40.65 93.86 97.21 92.28 85.31 PRFL Wan2.1-I2V-14B-480P 98.88 87.00 93.18 97.31 93.00 98.04 81.30 94.57 97.79 92.68 93.38 vs. Pretrain +0.22 +30.00 +1.45 +0.45 +6.00 +0.18 +40.65 +0.71 +0.58 +0.40 +8.07
Pretrain [36] Wan2.1-I2V-14B-720P 98.40 60.00 90.96 96.65 74.00 98.04 35.37 94.49 97.92 89.43 83.53 PRFL Wan2.1-I2V-14B-720P 99.03 76.00 92.83 98.26 90.00 98.65 68.42 95.62 98.73 95.53 91.31 vs. Pretrain +0.63 +16.00 +1.87 +1.61 +16.00 +0.61 +33.05 +1.13 +0.81 +6.10 +7.78
materials. This process yielded a dataset comprising 24,000 real videos and corresponding generated videos. For reward model, we utilized only the generated videos, and randomly selected 500 samples as the test set (100 for validation, 400 for testing). For video generation, we employed only real videos as SFT training data, and we randomly selected 100 input conditions as our test dataset from the 500-sample test set of the reward model. We also incorporated the existing open-source benchmark VBe-
nch [16] and VBench2 [49] to ensure a fair comparison with state-of-the-art methods.
Training Details. We adopt Wan2.1-I2V-14B [36] as our primary baseline. We employ the AdamW optimizer [27] with learning rates of 1e-5 for query attention and head of PAVRM, 1e-6 for the feature extraction of PAVRM, and 5e6 for PRFL. We utilize UniPCMultistepScheduler [48] with 1,000 training steps and 40 inference steps.
Comparison. For reward model, we select VideoAlign [24] and VideoPhy [1], a state-of-the-art RGBbased reward model. For video generation, we compare against four post-training methods, two offline methods: SFT [26] and reward weighted regression (RWR) [24], and one online RL method RGB ReFL [22], which only decodes the first frame and uses PickScore [18] as reward model. See details in supplementary materials.
Evaluation. For PAVRM evaluation, we conduct stratified random sampling of timestep t across five intervals: [0, 0.2], (0.2, 0.4], (0.4, 0.6], (0.6, 0.8], and (0.8, 1.0]. Each test sample is randomly sampled once within each interval, and the final average accuracy is computed. For video generation evaluation, generated videos are produced at 720P/480P resolution. For the text-to-video generation task, we employ evaluation metrics from the VBench series, including dynamic degree, motion smoothness-
, subject consistency, and Human Anatomy, as well as the qualified ratio across the whole test set estimated by PAVRM. Specifically, for each test sample, we random sample a timestep t across [0, 1.0] fed into PAVRM and get predictions 0 as unqualified or 1 as qualified. For the image-to-video generation task, additional i2v subject metric is used from the VBench i2v series.
5.2. Video Generation
Quantitative Results. As shown in Tables 1 and 2, we evaluate PRFL across different resolutions and tasks.
Text-to-Video Generation. In the T2V 480P setting, PRFL substantially outperforms other post-training methods (SFT, RWR, RGB ReFL) in dynamic degree (+46.00 on Inner Test Set) and human anatomy (+10.49), while maintaining high performance in motion smoothness (99.05) and subject con
6

A woman in a flowing white dress dances gracefully in a minimalist modern studio. Her wavy hair flows with soft light, camera shifts from full-body to close-up of her eyes.
Four people on ornate rug—exposed brick, guitar, sax, harmonica, casual clothes, one woman with dreadlocks.
Pretrain
SFT
RWR
RGB ReFL
PRFL
Figure 6. Qualitative results for different post-training methods on 480P text-to-video task. The red box highlights the generated artifacts. Zoom in for a better view. For the complete prompt, please see the supplementary materials.
Table 3. Analysis of the influence of different timestep-sampling strategies. Base model is Wan2.1-T2V-14B at 480P resolution. The early, middle, and late stages of the denoising process refer to the first third, middle third, and final third of the process, respectively.
Method Inner Test Set VBench VBench2 Avg
MS DD SC HA PAVRM MS DD SC PAVRM HA PAVRM
Pretrain 99.20 22.00 97.34 84.24 89.00 98.00 68.06 92.74 97.22 74.38 69.17 81.03 Early Stage 99.00 51.00 96.63 87.52 85.00 98.53 48.61 96.71 95.83 78.47 67.50 82.25 Middle Stage 99.11 51.00 96.69 89.38 92.00 98.32 76.39 94.84 98.61 80.92 80.00 87.02 Late Stage 99.26 44.00 96.29 91.54 93.00 98.60 58.33 93.94 98.61 84.07 77.50 85.01 Full Stage 99.05 68.00 96.34 94.73 92.00 98.18 76.39 94.16 100.00 89.84 76.67 89.58
Table 4. Comparison of training resource consumption and efficiency. PRFL achieves 1.4× speedup while processing full frames. Here † means without SFT loss, and bold means the best performance.
Method VRAM (GB) Time per Step (s) Speedup
RGB ReFL (full frames) OOM - RGB ReFL (first frame) 55.47 72.38 / 64.89† 1.00× PRFL (full frames) 66.81 51.11 / 43.69† 1.42× / 1.49×
sistency (96.34). The slight decreases in MS (-0.15) and SC (-1.00) are marginal given their already high baseline values (99.20 and 97.34). This suggests PRFL enhances motion dynamics without significantly compromising smoothness or consistency. Similar trends are observed at 720P resolution, with even larger improvements in dynamic degree (+56.00) and human anatomy (+12.16).
Image-to-Video Generation. PRFL generalizes well to the I2V task. At 480P, dynamic degree improves by +30.00 on Inner Test Set and +40.65 on VBench-I2V, while other metrics either improve or remain stable (MS: +0.22, SC: +1.45,
IC: +0.45). The 720P results confirm consistent improvements across metrics. These results indicate that PRFL’s effectiveness extends beyond T2V generation. The consistent improvements in motion-related metrics (dynamic degree, human anatomy) across different settings, combined with the preservation of high-level smoothness and consistency, demonstrate the effectiveness of PRFL. While automatic metrics have limitations in capturing perceptual quality, the quantitative results provide evidence that-
 PRFL successfully optimizes motion quality across diverse video generation scenarios.
User Study. To complement automatic metrics, we conduct a comprehensive human evaluation study. We randomly sample 25 prompts from the test set and generate videos using PRFL and three baseline methods (SFT, RWR, RGB ReFL). We recruit 2,250 pairwise comparisons based on overall video quality from 30 professional participants. Each participant evaluates video pairs and chooses A wins/tie/B wins based on comprehensive consideration of text
7

Table 5. Quantitative results for different architecture PAVRMs across different timesteps on T2V and I2V tasks under 480P and 720P. The metric is average accuracy calculated after randomly sampling a time step within each time step range for every test sample. Bold means best performance.
Method Base Model Task [0, 0.2] (0.2, 0.4] (0.4, 0.6] (0.6, 0.8] (0.8, 1.0] Avg
Resolution: 720P
VideoAlign [24] VLM I2V - - - - - 78.83 VideoPhy [1] VLM I2V - - - - - 77.04 Mean Pooling VGM I2V 82.40 82.91 83.67 85.46 82.40 83.37 Max Pooling VGM I2V 80.61 80.10 80.61 77.30 73.72 78.47 Attention w./o. query VGM I2V 80.36 84.44 84.95 84.18 83.16 83.42 Attention w./ query VGM I2V 83.42 84.95 84.69 84.44 83.42 84.18 Attention w./ query VGM T2V 82.40 84.69 84.69 84.44 84.44 84.13
Resolution: 480P
Attention w./ query VGM I2V 83.67 84.18 84.69 84.69 79.85 83.42
Attention w./ query VGM T2V 81.89 83.93 84.18 83.93 83.16 83.42
instruction adherence, visual quality, and motion quality. As shown in Fig. 5, PRFL consistently outperforms all baseline methods. These results demonstrate that PRFL’s process-level optimization effectively improves video quality as perceived by human evaluators.
Qualitative Results. As shown in Fig. 6, we visualize three representative frames (early, middle, and late stages) from generated videos to compare PRFL with baseline methods. In the dancing scenario with complex motion dynamics, baseline methods exhibit various artifacts: Pretrain generates a distorted environment and figure, SFT produces facial distortions in the close-up frame, RWR shows body deformations, and RGB ReFL generates a failed first frame. In contrast, PRFL generates consistent and a-
rtifact-free frames throughout the video while maintaining smooth motion transitions and accurately following the text prompt’s camera movement requirements. In the multi-person guitar scene, baseline methods struggle with anatomical correctness (e.g., distorted hands and faces highlighted in red boxes), whereas PRFL maintains visual quality and generates anatomically plausible human figures and objects across all frames. These qualitative comparisons demonstrate that PRFL effectively reduces gene-
ration artifacts while preserving motion coherence in challenging scenarios. We also provide many human and non-human video cases in the supplementary materials.
Sensitivity to Sampling Timesteps. We analyze how different denoising stages affect generation quality by training PRFL with timestep sampling restricted to early, middle, and late stages of the denoising process, comparing against full-range sampling. As shown in Table 3, early and middle stages primarily govern dynamic degree and motion quality—both achieve DD of 51.00 on Inner Test Set, with the middle stage showing stronger VBench improvements (76.39 vs. 48.61). Late-stage sampling contributes-
 less to dynamics (DD: 44.00) but substantially improves
human anatomy (HA: 84.24→91.54). Full-range sampling achieves optimal overall performance (Avg: 89.58, DD: 68.00, HA: 94.73), demonstrating that optimizing across all denoising stages is essential for balancing motion and structure quality.
Computational Efficiency. As shown in Table 4, we measure the peak VRAM consumption and average time per training step for different ReFL algorithms, both with and without the SFT loss component. The results demonstrate that PRFL can decode all 81 frames while maintaining peak VRAM usage within 67 GB, which is practical for most mainstream GPU clusters. Notably, RGB-ReFL encounters out-of-memory errors when attempting to process full 81-frame sequences and must resort to first-frame-only training.-
 Despite processing significantly more visual information (81 frames vs. 1 frame), PRFL achieves a 1.42× to 1.49× training speedup compared to the first-frame-only RGB-ReFL baseline.
5.3. Reward Model
Architecture Selection and Timestep Analysis. As shown in Table 5, we evaluate the accuracy of PAVRM across different denoising stages and compare various aggregation methods. Attention w./ query achieves the best average performance (84.18% for I2V at 720P) and maintains stable accuracy across all timestep ranges, while simpler methods like Max Pooling suffer significant degradation in later stages. Our reward model training approach demonstrates strong generalization across different tasks (T2V -
vs. I2V), resolutions (480P vs. 720P), and timestep ranges, maintaining over 83% average accuracy in all evaluated settings.
6. Conclusion
We present an RLHF framework for aligning video generation models with human preferences through process
8

level reward modeling and optimization. Our ProcessAware Video Reward Model (PAVRM) evaluates motion quality directly from noisy latent representations at arbitrary timesteps using query-based aggregation for variablelength videos. Process Reward Feedback Learning (PRFL) enables memory-efficient fine-tuning by operating in latent space, eliminating VAE decoding overhead. Experiments demonstrate substantial motion quality improvements with large memory reduction and at least 1.4× training speedup -
versus pixel-space methods.
Limitations and Future Work. Our method focuses on motion quality and may benefit from multi-aspect evaluation covering aesthetics and semantics. Future work could explore hybrid reward frameworks, richer preference signals, and extensions to controllable generation and video editing.
References
[1] Hritik Bansal, Zongyu Lin, Tianyi Xie, Zeshun Zong, Michal Yarom, Yonatan Bitton, Chenfanfu Jiang, Yizhou Sun, KaiWei Chang, and Aditya Grover. Videophy: Evaluating physical commonsense for video generation. In Workshop on Video-Language Models @ NeurIPS 2024, 2025. 1, 6, 8, 2
[2] Ralph Allan Bradley and Milton E Terry. Rank analysis of incomplete block designs: I. the method of paired comparisons. Biometrika, 39(3/4):324–345, 1952. 5 [3] Mathilde Caron, Hugo Touvron, Ishan Misra, Herve ́ J ́egou, Julien Mairal, Piotr Bojanowski, and Armand Joulin. Emerging properties in self-supervised vision transformers. In Proceedings of the IEEE/CVF international conference on computer vision, pages 9650–9660, 2021. 3 [4] Jiale Cheng, Ruiliang Lyu, Xiaotao Gu, Xiao Liu, Jiazheng Xu-
, Yida Lu, Jiayan Teng, Zhuoyi Yang, Yuxiao Dong, Jie Tang, Hongning Wang, and Minlie Huang. Vpo: Aligning text-to-video generation models with prompt optimization. In Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), pages 15636–15645, 2025. 1 [5] Tianheng Cheng, Lin Song, Yixiao Ge, Wenyu Liu, Xinggang Wang, and Ying Shan. Yolo-world: Real-time open-vocabulary object detection. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pag-
es 16901–16911, 2024. 3 [6] Kevin Clark, Paul Vicol, Kevin Swersky, and David J Fleet. Directly fine-tuning diffusion models on differentiable rewards. In The Twelfth International Conference on Learning Representations, 2024. 1, 2
[7] Zihan Ding, Chi Jin, Difan Liu, Haitian Zheng, Krishna Kumar Singh, Qiang Zhang, Yan Kang, Zhe Lin, and Yuchen Liu. Dollar: Few-step video generation via distillation and latent reward optimization. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pages 1796117971, 2025. 2, 3 [8] Guian Fang, Wenbiao Yan, Yuanfan Guo, Jianhua Han, Zutao Jiang, Hang Xu, Shengcai Liao, and Xiaodan Liang.
Humanrefiner: Benchmarking abnormal human generation and refining with coarse-to-fine pose-reversible guidance. In European Conference on Computer Vision, pages 201–217. Springer, 2024. 3 [9] Hiroki Furuta, Heiga Zen, Dale Schuurmans, Aleksandra Faust, Yutaka Matsuo, Percy Liang, and Sherry Yang. Improving dynamic object interactions in text-to-video generation with ai feedback. arXiv preprint arXiv:2412.02617, 2024. 3 [10] Yu Gao, Haoyuan Guo, Tuyen Hoang, Weilin Huang, Lu Jiang, Fangyuan Kong, H-
uixia Li, Jiashi Li, Liang Li, Xiaojie Li, et al. Seedance 1.0: Exploring the boundaries of video generation models. arXiv preprint arXiv:2506.09113, 2025. 1, 3 [11] Xiefan Guo, Miaomiao Cui, Liefeng Bo, and Di Huang. Shortft: Diffusion model alignment via shortcut-based finetuning. In Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), pages 678–687, 2025. 2
[12] Xuan He, Dongfu Jiang, Ge Zhang, Max Ku, Achint Soni, Sherman Siu, Haonan Chen, Abhranil Chandra, Ziyan Jiang, Aaran Arulraj, et al. Videoscore: Building automatic metrics to simulate fine-grained human feedback for video generation. In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing, pages 2105–2123, 2024. 2, 3 [13] Xuan He, Dongfu Jiang, Ping Nie, Minghao Liu, Zhengxuan Jiang, Mingyi Su, Wentao Ma, Junru Lin, Chun Ye, Yi Lu, et al. Videoscore2: Think b-
efore you score in generative video evaluation. In arXiv preprint arXiv:2509.22799, 2025. 2, 3 [14] Roberto Henschel, Levon Khachatryan, Hayk Poghosyan, Daniil Hayrapetyan, Vahram Tadevosyan, Zhangyang Wang, Shant Navasardyan, and Humphrey Shi. Streamingt2v: Consistent, dynamic, and extendable long video generation from text. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 2568–2577, 2025. 1
[15] Wenyi Hong, Ming Ding, Wendi Zheng, Xinghan Liu, and Jie Tang. Cogvideo: Large-scale pretraining for text-to-video generation via transformers. arXiv preprint arXiv:2205.15868, 2022. 3
[16] Ziqi Huang, Yinan He, Jiashuo Yu, Fan Zhang, Chenyang Si, Yuming Jiang, Yuanhan Zhang, Tianxing Wu, Qingyang Jin, Nattapol Chanpaisit, Yaohui Wang, Xinyuan Chen, Limin Wang, Dahua Lin, Yu Qiao, and Ziwei Liu. VBench: Comprehensive benchmark suite for video generative models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2024. 6, 1
[17] Ziqi Huang, Fan Zhang, Xiaojie Xu, Yinan He, Jiashuo Yu, Ziyue Dong, Qianli Ma, Nattapol Chanpaisit, Chenyang Si, Yuming Jiang, et al. Vbench++: Comprehensive and versatile benchmark suite for video generative models. arXiv preprint arXiv:2411.13503, 2024. 1, 3
[18] Yuval Kirstain, Adam Polyak, Uriel Singer, Shahbuland Matiana, Joe Penna, and Omer Levy. Pick-a-pic: An open dataset of user preferences for text-to-image generation. Advances in neural information processing systems, 36:3665236663, 2023. 6, 3
9

[19] Weijie Kong, Qi Tian, Zijian Zhang, Rox Min, Zuozhuo Dai, Jin Zhou, Jiangfeng Xiong, Xin Li, Bo Wu, Jianwei Zhang, et al. Hunyuanvideo: A systematic framework for large video generative models. arXiv preprint arXiv:2412.03603, 2024. 1, 3, 5 [20] Hunter Lightman, Vineet Kosaraju, Yuri Burda, Harrison Edwards, Bowen Baker, Teddy Lee, Jan Leike, John Schulman, Ilya Sutskever, and Karl Cobbe. Let’s verify step by step. In The Twelfth International Conference on Learning Representations, 2024. 3
[21] Bin Lin, Yunyang Ge, Xinhua Cheng, Zongjian Li, Bin Zhu, Shaodong Wang, Xianyi He, Yang Ye, Shenghai Yuan, Liuhan Chen, et al. Open-sora plan: Open-source large video generation model. arXiv preprint arXiv:2412.00131, 2024. 1
[22] Wenfeng Lin, Renjie Chen, Boyuan Liu, Shiyue Yan, Ruoyu Feng, Jiangchuan Wei, Yichen Zhang, Yimeng Zhou, Chao Feng, Jiao Ran, et al. Contentv: Efficient training of video generation models with limited compute. arXiv preprint arXiv:2506.05343, 2025. 2, 3, 6
[23] Yaron Lipman, Ricky T. Q. Chen, Heli Ben-Hamu, Maximilian Nickel, and Matthew Le. Flow matching for generative modeling. In The Eleventh International Conference on Learning Representations, 2023. 3
[24] Jie Liu, Gongye Liu, Jiajun Liang, Ziyang Yuan, Xiaokun Liu, Mingwu Zheng, Xiele Wu, Qiulin Wang, Wenyu Qin, Menghan Xia, et al. Improving video generation with human feedback. In The Thirty-ninth Annual Conference on Neural Information Processing Systems, 2025. 1, 2, 3, 6, 8
[25] Shaoteng Liu, Yuechen Zhang, Wenbo Li, Zhe Lin, and Jiaya Jia. Video-p2p: Video editing with cross-attention control. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 8599–8608, 2024. 1 [26] Xingchao Liu, Chengyue Gong, and qiang liu. Flow straight and fast: Learning to generate and transfer data with rectified flow. In The Eleventh International Conference on Learning Representations, 2023. 3, 6
[27] Ilya Loshchilov and Frank Hutter. Decoupled weight decay regularization. arXiv preprint arXiv:1711.05101, 2017. 6 [28] Zhun Mou, Bin Xia, Zhengchao Huang, Wenming Yang, and Jiaya Jia. Gradeo: Towards human-like evaluation for text-to-video generation via multi-step reasoning. In Forty-second International Conference on Machine Learning, 2025. 3 [29] Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida, Carroll Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, et-
 al. Training language models to follow instructions with human feedback. Advances in neural information processing systems, 35:2773027744, 2022. 3 [30] Xue Bin Peng, Aviral Kumar, Grace Zhang, and Sergey Levine. Advantage-weighted regression: Simple and scalable off-policy reinforcement learning. arXiv preprint arXiv:1910.00177, 2019. 3
[31] Adam Polyak, Amit Zohar, Andrew Brown, Andros Tjandra, Animesh Sinha, Ann Lee, Apoorv Vyas, Bowen Shi, ChihYao Ma, Ching-Yao Chuang, et al. Movie gen: A cast of
media foundation models. arXiv preprint arXiv:2410.13720, 2024. 1 [32] Mihir Prabhudesai, Anirudh Goyal, Deepak Pathak, and Katerina Fragkiadaki. Aligning text-to-image diffusion models with reward backpropagation, 2023. 1, 2 [33] Zhihong Shao, Peiyi Wang, Qihao Zhu, Runxin Xu, Junxiao Song, Xiao Bi, Haowei Zhang, Mingchuan Zhang, YK Li, Yang Wu, et al. Deepseekmath: Pushing the limits of mathematical reasoning in open language models. arXiv preprint arXiv:2402.03300, 2024. 3
[34] Hao Sun, Yunyi Shen, and Jean-Francois Ton. Rethinking reward modeling in preference-based large language model alignment. In The Thirteenth International Conference on Learning Representations, 2025. 3
[35] Zachary Teed and Jia Deng. Raft: Recurrent all-pairs field transforms for optical flow. In European conference on computer vision, pages 402–419. Springer, 2020. 3 [36] Team Wan, Ang Wang, Baole Ai, Bin Wen, Chaojie Mao, Chen-Wei Xie, Di Chen, Feiwu Yu, Haiming Zhao, Jianxiao Yang, Jianyuan Zeng, Jiayu Wang, Jingfeng Zhang, Jingren Zhou, Jinkai Wang, Jixuan Chen, Kai Zhu, Kang Zhao, Keyu Yan, Lianghua Huang, Mengyang Feng, Ningyi Zhang, Pandeng Li, Pingyu Wu, Ruihang Chu, Ruili Feng, Shiwei Z-
hang, Siyang Sun, Tao Fang, Tianxing Wang, Tianyi Gui, Tingyu Weng, Tong Shen, Wei Lin, Wei Wang, Wei Wang, Wenmeng Zhou, Wente Wang, Wenting Shen, Wenyuan Yu, Xianzhong Shi, Xiaoming Huang, Xin Xu, Yan Kou, Yangyu Lv, Yifei Li, Yijing Liu, Yiming Wang, Yingya Zhang, Yitong Huang, Yong Li, You Wu, Yu Liu, Yulin Pan, Yun Zheng, Yuntao Hong, Yupeng Shi, Yutong Feng, Zeyinzi Jiang, Zhen Han, Zhi-Fan Wu, and Ziyu Liu. Wan: Open and advanced large-scale video generative models. arXiv preprint arXiv:250-
3.20314, 2025. 1, 3, 6
[37] Peiyi Wang, Lei Li, Zhihong Shao, Runxin Xu, Damai Dai, Yifei Li, Deli Chen, Yu Wu, and Zhifang Sui. Mathshepherd: Verify and reinforce llms step-by-step without human annotations. In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), pages 9426–9439, 2024. 3 [38] Yibin Wang, Yuhang Zang, Hao Li, Cheng Jin, and Jiaqi Wang. Unified reward model for multimodal understanding and generation. arXiv preprint arXiv:2503.05236, 2025. 2 [39-
] Xiaoshi Wu, Yiming Hao, Manyuan Zhang, Keqiang Sun, Zhaoyang Huang, Guanglu Song, Yu Liu, and Hongsheng Li. Deep reward supervisions for tuning text-to-image diffusion models. In European Conference on Computer Vision, pages 108–124. Springer, 2024. 2 [40] Xun Wu, Shaohan Huang, Guolong Wang, Jing Xiong, and Furu Wei. Boosting text-to-video generative model with mllms feedback. Advances in Neural Information Processing Systems, 37:139444–139469, 2024. 3 [41] Zhenda Xie, Zheng Zhang, Yue Cao, Yut-
ong Lin, Jianmin Bao, Zhuliang Yao, Qi Dai, and Han Hu. Simmim: A simple framework for masked image modeling. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 9653–9663, 2022. 3 [42] Jiazheng Xu, Xiao Liu, Yuchen Wu, Yuxuan Tong, Qinkai Li, Ming Ding, Jie Tang, and Yuxiao Dong. Imagere
10

ward: Learning and evaluating human preferences for textto-image generation. Advances in Neural Information Processing Systems, 36:15903–15935, 2023. 1, 2, 3 [43] Zhuoyi Yang, Jiayan Teng, Wendi Zheng, Ming Ding, Shiyu Huang, Jiazheng Xu, Yuanming Yang, Wenyi Hong, Xiaohan Zhang, Guanyu Feng, et al. Cogvideox: Text-to-video diffusion models with an expert transformer. arXiv preprint arXiv:2408.06072, 2024. 3
[44] Hangjie Yuan, Shiwei Zhang, Xiang Wang, Yujie Wei, Tao Feng, Yining Pan, Yingya Zhang, Ziwei Liu, Samuel Albanie, and Dong Ni. Instructvideo: Instructing video diffusion models with human feedback. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 6463–6474, 2024. 3 [45] Ailing Zeng, Yuhang Yang, Weidong Chen, and Wei Liu. The dawn of video generation: Preliminary explorations with sora-like models. arXiv preprint arXiv:2410.05227, 2024. 1 [46] Tao Zh-
ang, Cheng Da, Kun Ding, Huan Yang, Kun Jin, Yan Li, Tingting Gao, Di Zhang, Shiming Xiang, and Chunhong Pan. Diffusion model as a noise-aware latent reward model for step-level preference optimization. In The Thirty-ninth Annual Conference on Neural Information Processing Systems, 2025. 2, 3 [47] Zhenru Zhang, Chujie Zheng, Yangzhen Wu, Beichen Zhang, Runji Lin, Bowen Yu, Dayiheng Liu, Jingren Zhou, and Junyang Lin. The lessons of developing process reward models in mathematical reasoning. arXiv -
preprint arXiv:2501.07301, 2025. 3
[48] Wenliang Zhao, Lujia Bai, Yongming Rao, Jie Zhou, and Jiwen Lu. Unipc: A unified predictor-corrector framework for fast sampling of diffusion models. Advances in Neural Information Processing Systems, 36:49842–49869, 2023. 6, 3
[49] Dian Zheng, Ziqi Huang, Hongbo Liu, Kai Zou, Yinan He, Fan Zhang, Yuanhan Zhang, Jingwen He, Wei-Shi Zheng, Yu Qiao, and Ziwei Liu. VBench-2.0: Advancing video generation benchmark suite for intrinsic faithfulness. arXiv preprint arXiv:2503.21755, 2025. 6, 1
11

Appendix
Video Generation Models are Good Latent Reward Models
A.1. Overview.
We provide detailed experimental settings in Sec. A.2, and more experimental analysis about our reward model in Sec. A.3.
A.2. More Details in Experimental Settings
A.2.1. Analysis Experiments
We selected the I2V task and the resolution of 720P for our analysis experiments, with the same dataset of our PAVRM training. The linear probe layer dimension matches the token dimension of the VGM (5120 for Wan2.1-I2V-14B). For Fig. 3(a), we performed standard 40-step inference on dataset samples, denoise each intermediate timestep noisy latent to clean latent by one step, and decoding clean latent of each intermediate timestep to RGB space for storage. We computed the average score of dataset s-
amples of each timestep using VideoAlign-MQ, a state-of-the-art VLM-based Video Reward Model. The results reveal substantial divergence between high-noise regions and clean videos, demonstrating that RGB-based video reward models fail to directly generalize as latent reward models. For Fig. 3(b), we fixed the timestep at t = 0.2 and analyzed the impact of varying DiT block counts on VGM performance as a reward model. To isolate the influence of VGM features on video quality assessment, we employed-
 mean pooling for feature aggregation. The linear probe was trained identically to our PAVRM using BCE loss. For accuracy calculation, we applied a threshold of 0 to the linear probe output: predictions pr ≥ 0 were classified as good videos, otherwise as bad videos. The VideoAlign test accuracy of 78.83% was obtained by setting a threshold on VideoAlign MQ reward scores—videos with scores above the threshold were labeled as good, otherwise bad—and computing accuracy against ground-truth labels. Th-
is threshold was selected to maximize test set accuracy. For Fig. 3(c), “Fixed t (MLP-only)” refers to training only the linear probe at fixed timesteps (t = 0.2/0.4/0.6/0.8), resulting in four separate models with test accuracy computed using the same way as (b), based on 8 DiT blocks. “Random t (MLP-only)” involves training a single model where timesteps are randomly sampled during training using UniPCMultistepScheduler with 1000 training steps. “Random t (Full fine-tuning)” fine-tunes both DiT
blocks and the linear probe (excluding text/image encoders and VAE), with all other settings identical to “Random t (MLP-only)”.
A.2.2. Open Source Test Set
We incorporated the existing open-source benchmark VBench [16] and VBench2 [49] to ensure a fair comparison with state-of-the-art methods. In this paper, we validate the effectiveness of our method in terms of motion quality, which requires the video generation process to be free of distortions, exhibit smooth motion, and comply with physical laws. For the text-to-video (T2V) task, we selected the subject consistency subset from VBench, a total of 72 prompts. Additionally, we employed the human an-
atomy subset from VBench2, which includes the human anatomy metric with 120 prompts specifically enhanced for the Wan model. For the image-to-video (I2V) task, we selected I2V Subject subset from VBench-I2V (in VBench++ [17]), a total of 246 prompts.
A.2.3. Inner Data Collection and Annotations
Data Generation Pipeline. Our inner dataset construction begins with an internal collection of 31000 high-quality human portrait videos. Using the first frame and corresponding text prompt from each video, we generated synthetic videos using the Wan2.1-14B-I2V model. Due to computational constraints, we generated one 720P video per input condition, with each video requiring approximately 30 minutes of inference time on a single GPU.
Annotation Protocol. The annotation process consists of two stages: automatic filtering and manual quality assessment. Stage 1: Coarse Filtering. We first removed videos exhibiting obvious defects, including black screens, or visible watermarks. Stage 2: Manual Quality Assessment. The remaining videos were manually annotated by professional annotators across two key dimensions: Physical Plausibility and Subject Deformity. Each dimension was rated using a three-level scale: qualified, partially qua-
lified, and unqualified. The specific criteria for each rating level are detailed in Table 6. For Physical Plausibility:
• Qualified: Motion appears smooth and natural, following real-world physics with realistic acceleration, deceleration, and interactions.
1

Table 6. Definitions of evaluation dimensions and assessment criteria used in our human annotation framework.
Evaluation Dimension Definition and Assessment Criteria
Physical Plausibility
Evaluates whether video dynamics adhere to real-world physical principles.
- Motion Dynamics: Assesses whether object motion exhibits realistic acceleration, deceleration, and inertia consistent with natural physics.
- Interaction Realism: Evaluates the plausibility of physical interactions, including gravitational effects (e.g., falling objects), collision dynamics, and force propagation (e.g., splashing water).
- Material Behavior: Examines the realistic deformation and dynamics of complex materials, including fluid motion (water, smoke) and soft body dynamics (cloth, skin).
Subject Deformity
Assesses structural integrity and temporal consistency of subjects (humans, animals, objects).
- Structural Integrity: Evaluates anatomical correctness and structural coherence, penalizing severe distortions, unnatural proportions, or implausible body parts (e.g., malformed faces, extra limbs).
- Temporal Consistency: Measures the stability of subject identity and form across frames, penalizing artifacts such as shape morphing, flickering, melting effects, or sudden appearance changes.
• Partially Qualified: Minor physical inconsistencies exist but do not severely impact overall believability.
• Unqualified: Significant violations of physical laws, such as objects defying gravity, unnatural motion trajectories, or implausible interactions.
For Subject Deformity:
• Qualified: Subjects maintain consistent structure and identity throughout the video with no visible artifacts.
• Partially Qualified: Minor temporal inconsistencies or subtle structural artifacts that do not fundamentally distort the subject.
• Unqualified: Severe anatomical distortions, identity shifts, or temporal artifacts such as melting, flickering, or morphing.
Label Construction. To enhance data distinctiveness and reduce annotation ambiguity, we applied the following labeling strategy: videos rated as qualified on both dimensions were labeled as good videos, while those rated as unqualified on both dimensions were labeled as bad videos. Videos with mixed ratings (e.g., qualified on one dimension but unqualified on another) or those marked as partially qualified on either dimension were excluded from the final dataset to ensure clear decision boundaries-
.
Validation and Test Set Construction. We randomly sampled 500 videos for evaluation purposes: 100 for validation and 400 for testing. To ensure annotation reliability,
each sample in both the validation and test sets was independently annotated by at least three professional annotators, with final labels determined by majority voting.
Final Dataset Statistics. After filtering and annotation, our final dataset comprises 24000 video pairs (real and generated), with the generated videos used for reward model training and the real videos used as supervised fine-tuning (SFT) data for video generation. The dataset distribution is as follows: approximately 23500 samples for training, 100 for validation, and 400 for testing the reward model.
A.2.4. Baseline Settings
For reward models, we select VideoAlign-MQ [24] and VideoPhy-PC [1], two state-of-the-art VLM-based reward models that excel particularly in assessing motion quality. Both models are employed in a zero-shot manner. The accuracy (Acc) metric is computed by establishing a threshold on the reward scores: videos with scores at or above the threshold are classified as “good”, while those below are classified as “bad”. The accuracy is then calculated against ground-truth labels, where the reported thres-
hold is selected to maximize accuracy on the test set. For post-training, we utilize approximately the same number of training samples across all methods, performing one epoch over the text-video pairs with a sequence parallel size of 4, with same learning rate of 5e-6 and a global batch size of 30 (i.e. batch size of 6 with gradient accumulation number of 5).
2

Supervised Fine-Tuning (SFT). SFT [26] is a widely adopted and effective post-training technique that offers high computational efficiency. From a reinforcement learning perspective, it can be viewed as an offline, off-policy algorithm, optimizing the loss function defined in Equation 2.
Reward Weighted Regression (RWR). Reward weighted regression (RWR) [24] is a prevalent and effective offline, off-policy RL method that has demonstrated success across traditional RL tasks [30], image generation [9], and video generation [24]. RWR directly learns from pre-sampled training data treated as experience samples, where a reward model scores each sample to determine its weight in the training loss. The loss function is given by:
LRWR(θ) = Et∼U(0,1), x0∼q(x0), x1∼p(x1)
exp(rφ(video, y))∥vθ(xt, t) − v∥2 , (A.2.1)
Following the VideoAlign framework, we utilize VideoAlign-MQ to provide reward signals with varying weight configurations.
RGB ReFL. For RGB ReFL, we adopt the implementation from ContentV [22], which performs VAE decoding only on the first frame and employs the image reward model PickScore [18]. The loss function is as follows:
LRGB ReFL = −λEx0∼VGMθ [rφ(D(x′
0))] + LFM(θ),
(A.2.2) where x′0 denotes the latent feature corresponding to the first frame.
A.2.5. Evaluation
Experimental Configuration. Following the standardized protocol recommended by Wan2.1, we generate evaluation videos at 720P/480P resolution. During the inference phase of video generation models, we maintain a classifierfree guidance (CFG) weight of 5.5. The sampling process employs the UniPCMultistepScheduler [48] over 40 iterative steps. The early, middle, and late stages of the denoising process correspond to steps 1-13, 14-26, and 27-40, respectively.
Automatic Evaluation Metrics. To assess the performance of our reward model, we implement a stratified sampling approach across the temporal dimension. The timestep t is partitioned into five uniform intervals: [0, 0.2], (0.2, 0.4], (0.4, 0.6], (0.6, 0.8], and (0.8, 1.0]. Within each interval, test samples undergo random sampling exactly once, and the reward accuracy metric is derived by averaging the accuracy across all intervals.
For text-to-video generation tasks, we adopt multiple evaluation dimensions inspired by the VBench framework, encompassing dynamic degree, motion smoothness, subject consistency, and human anatomy accuracy. In image-tovideo generation scenarios, we additionally incorporate the image-video subject consistency metric. Furthermore, we utilize the PAVRM score to quantify the proportion of qualified samples across the entire test set. Motion Smoothness. Following VBench, we evaluate motion fluidity usi-
ng frame interpolation priors. Given a video sequence [f0, f1, . . . , f2n], we remove odd-indexed frames to create [f0, f2, . . . , f2n], then reconstruct the missing frames [fˆ1, fˆ3, . . . , fˆ2n−1] via interpolation. The normalized MAE between reconstructed and original frames yields a score in [0, 1], with higher values indicating smoother motion. Dynamic Degree. To measure generation dynamism, we adopt VBench’s approach using RAFT [35] to estimate inter-frame optical flow. We compute the mea-
n of the top 5% flow magnitudes as a static/dynamic threshold, with the final score representing the proportion of non-static videos generated. Subject Consistency. We adopt VBench’s DINO-based [3] metric to assess subject identity preservation across frames. The consistency score is:
Ssubject = 1
T −1
T
X
t=2
1
2 (⟨d1, dt⟩ + ⟨dt−1, dt⟩) , (A.2.3)
where di is the normalized DINO feature of frame i, and ⟨·, ·⟩ computes cosine similarity. This jointly measures consistency with the first frame and temporal continuity. Human Anatomy. We use the VBench metric that they train three ViT-based [41] anomaly detectors for human torso, hands, and faces. Training data includes ∼1K real videos (YOLO-World [5] extracted patches as positives) and ∼1K synthetic videos from CogVideo [15, 43] and HunyuanVideo [19], plus HumanRefiner [8] negatives, totaling ∼-
150K annotated frames. The score is the percentage of frames without detected anomalies. I2V Subject Consistency. We use the VBench++ [17] metric to evaluate input image-to-video subject correspondence. DINOv1 [3] features are extracted from the input image and video frames. The final score combines weighted similarities between the input image and each frame, plus interframe similarities, addressing variations in how models handle input images. PAVRM Score. To estimate the qualified sample ratio -
across the test set, we adopt a randomized evaluation protocol. For each test sample, we randomly sample a timestep t from the interval [0, 1.0] and feed it to the PAVRM model, which produces a binary prediction: 0 for unqualified and 1 for qualified. The overall qualified ratio serves as the PAVRM score metric.
3

Complete Prompt in Fig.6 Case 1. A woman in a flowing white dress is dancing gracefully in a modern dance studio. Her movements are fluid and expressive, with arms sweeping widely and legs moving in elegant, rhythmic patterns. She has long wavy hair that flows freely with each movement, catching the soft lighting from above. The background is a minimalist setup with black walls and a few abstract paintings hanging on them. The camera follows her from a medium shot, capturing her full body as she -
dances, then moves to a close-up of her face, highlighting her joyful expression and the sparkle in her eyes. The video has smooth transitions and dynamic camera movements, including tracking shots and slow-motion sequences to emphasize her graceful movements.
Case 2. Four people are seated on an ornate rug in a room with exposed brick walls. One man holds an acoustic guitar. Instruments including a saxophone and harmonica rest on the floor near them. The individuals have varying hair colors and styles; one woman has long dreadlocks. They wear casual clothing like t-shirts, jeans, and sneakers.
Table 7. Ablation study on training objectives. The models are trained on Wan2.1 generated videos and evaluated on the held-out test set. The metric is classification accuracy (%). Bold indicates the best performance.
Loss [0, 0.2] (0.2, 0.4] (0.4, 0.6] (0.6, 0.8] (0.8, 1.0] Avg
BT 73.50 77.25 78.25 82.50 87.75 79.85 BCE 77.00 78.50 79.75 82.00 83.00 80.05
Table 8. Ablation study on the number of trainable DiT blocks. The metric is classification accuracy (%). Bold indicates the best performance.
Layer [0, 0.2] (0.2, 0.4] (0.4, 0.6] (0.6, 0.8] (0.8, 1.0] Avg
8 83.42 84.95 84.69 84.44 83.42 84.18 16 84.95 85.46 85.71 86.73 84.69 85.51 24 83.93 85.20 85.71 86.22 85.20 85.25 32 80.36 83.67 84.95 85.97 85.20 84.03 40 (Full) 79.85 81.12 84.95 85.46 84.95 83.27
User Study. We ask each evaluator: For each question, two options represent videos generated from the title text using two different models. Select the option with the higher overall quality (greater text-video consistency, more natural motion, and no human deformities or physically implausible elements). There are 100 questions in total. The page is shown in Fig. 7.
Figure 7. A case of user study page.
4

Table 9. Dataset analysis on PAVRMs, the model is based on Wan2.1. The metric is average accuracy. Task is I2V and resoluition is 720P.
Train Set Test Set [0, 0.2] (0.2, 0.4] (0.4, 0.6] (0.6, 0.8] (0.8, 1.0] Avg
Veo3&HunyuanVideo Veo3&HunyuanVideo 77.00% 86.00% 89.00% 89.00% 87.00% 85.60% Wan2.1 Veo3&HunyuanVideo 70.00% 72.00% 73.00% 76.00% 81.00% 74.40%
A.3. More Experiments on Process-Aware Video Reward Models
A.3.1. The Influence of Training Loss
To assess the robustness of our proposed method against different optimization objectives, we compare the standard binary cross-entropy (BCE) loss with the pairwise BradleyTerry (BT) loss [2]. Specifically, we construct preference pairs (xwin, xlose) by randomly sampling a positive sample (label 1) as xwin and a negative sample (label 0) as xlose. As shown in Table 7, the average accuracy gap between the two objectives is marginal (0.2%). Interestingly, we observe a trade-off across timesteps: BT -
loss performs better in high-noise regions (t > 0.6), while BCE demonstrates superior precision in the structure-forming and detailing stages (t ≤ 0.6). Given that BCE achieves a slightly higher overall average accuracy and eliminates the computational overhead of pair construction, we adopt BCE as our default training objective.
A.3.2. The Influence of the Number of DiT Blocks
In our feasibility analysis, we observed that fixed DiT features are effective. Here, we investigate the impact of model depth when the DiT blocks are fully fine-tuned. We vary the number of trainable DiT blocks (from the first 8 to the full 40 blocks) to determine the optimal capacity for the reward task. The results in Table 8 reveal a non-monotonic trend, contradicting a simple scaling law. The performance peaks at 16 blocks (85.51%) and subsequently degrades as more layers are added, with the -
full 40-block model performing worse than the 8-block baseline. This suggests that the critical semantic information for assessing motion quality is concentrated in the early-to-middle layers of the network. Using the full generation backbone for the reward task is not only computationally expensive but potentially leads to optimization difficulties or overfitting to high-frequency generation details rather than high-level quality. Consequently, using the first 8 or 16 blocks offers the best trade-
-off between efficiency and accuracy.
A.3.3. Cross-Model Generalization
To evaluate the generalization capability of PAVRM, we extend our evaluation beyond the source domain. While our reward model is initialized and trained solely on data generated by Wan2.1, we test its performance on samples from two other state-of-the-art video generation models: Hun
yuanVideo [19] and Veo3. The test sets for these models share the same annotation format but specifically focus on human structural deformities (e.g., limb distortions), a common challenge in video generation. The results in Tab. 9 reveal two key insights regarding transferability and timestep sensitivity:
Feasibility of Cross-Model Evaluation. First, PAVRM demonstrates strong zero-shot transferability. Despite being trained exclusively on Wan2.1 latents, it effectively identifies quality degradation in HunyuanVideo and Veo3. This suggests that the spatiotemporal features learned by the backbone VGM are not strictly model-specific but encode universal representations of motion and structure validity. Inverted Generalization across Timesteps. We observe a distinct behavior in performance distribution-
 across diffusion timesteps (t) between in-domain and out-of-domain (OOD) settings: • In-Domain (Wan2.1): The model achieves higher performance in the middle and last trajectory (t ∈ [0.2, 1]). This aligns with the intuition that intermediate states balance signal and noise, containing the most critical information for motion formation.
• Out-of-Domain (Hunyuan/Veo3): Surprisingly, generalization is stronger in high-noise regions (t → 1) compared to the near-data regions (t → 0). Analysis. We attribute this phenomenon to the nature of the denoising process. In the late stages of generation (t → 0), the latents are dominated by model-specific high-frequency details and “fingerprints” (unique texture patterns or artifact types inherent to the specific generator architecture). A reward model trained on Wan2.1 overfits to these speci-
fic patterns, leading to poor transfer when evaluating clean latents from other models. Conversely, at high noise levels (t → 1), the latent representation is dominated by Gaussian noise and low-frequency structural layouts. The “fingerprints” of the specific generative model are less pronounced, while fundamental structural errors (such as severe human deformities) remain detectable as gross geometric inconsistencies. Consequently, the reward model relies on these universal structural cues rather-
 than model-specific textures, resulting in superior generalization in high-noise regimes.
5

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:11.999Z
- **Text Length:** 68813 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 16 of 16
