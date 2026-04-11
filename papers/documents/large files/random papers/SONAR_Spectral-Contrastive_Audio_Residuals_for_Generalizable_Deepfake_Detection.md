# PDF Document: HIdekel et al. - 2025 - SONAR Spectral-Contrastive Audio Residuals for Generalizable Deepfake Detection.pdf

**File Path:** HIdekel et al. - 2025 - SONAR Spectral-Contrastive Audio Residuals for Generalizable Deepfake Detection.pdf

**Processed Date:** 2026-02-10T18:13:31.299Z

**File Size:** 1693.76 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3781

**Title:** SONAR: Spectral-Contrastive Audio Residuals for Generalizable Deepfake Detection

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

SONAR: SPECTRAL-CONTRASTIVE AUDIO RESIDU
ALS FOR GENERALIZABLE DEEPFAKE DETECTION
Ido Nitzan Hidekel Tel Aviv University Israel
idon@mail.tau.ac.il
Gal Lifshitz & Khen Cohen Tel Aviv University Israel
{lifshitz,khencohen}@mail.tau.ac.il
Dan Raviv
Tel Aviv University Israel
darav@tauex.tau.ac.il
ABSTRACT
Deepfake (DF) audio detectors still struggle to generalize to out of distribution inputs. A central reason is spectral bias, the tendency of neural networks to learn low-frequency structure before high-frequency (HF) details, which both causes DF generators to leave HF artifacts and leaves those same artifacts under-exploited by common detectors. To address this gap, we propose Spectral-cONtrastive Audio Residuals (SONAR), a frequency-guided framework that explicitly disentangles an audio signal i-
nto complementary representations. An XLSR encoder captures the dominant low-frequency content, while the same cloned path, preceded by learnable SRM, value-constrained high-pass filters, distills faint HF residuals. Frequency cross-attention reunites the two views for long- and short-range frequency dependencies, and a frequency-aware Jensen–Shannon contrastive loss pulls real content–noise pairs together while pushing fake embeddings apart, accelerating optimization and sharpening decision bound-
aries. Evaluated on the ASVspoof 2021 and in-the-wild benchmarks, SONAR attains state-of-the-art performance and converges four times faster than strong baselines. By elevating faint high-frequency residuals to first-class learning signals, SONAR unveils a fully data-driven, frequency-guided contrastive framework that splits the latent space into two disjoint manifolds: natural-HF for genuine audio and distorted-HF for synthetic audio, thereby sharpening decision boundaries. Because the scheme ope-
rates purely at the representation level, it is architecture-agnostic and, in future work, can be seamlessly integrated into any model or modality where subtle high-frequency cues are decisive.
1 INTRODUCTION
Why deepfake detection matters. Generative AI now enables the creation of photorealistic images, video, and speech. In 2024, political deepfakes flooded social media during global elections, while voice-cloning scams caused multimillion-dollar losses, including a 25M$ transfer [1, 2]. The FBI warns of AI-powered vishing [6]. More broadly, synthetic media erodes trust in journalism, markets, and legal evidence, making robust detection essential.
Prior work, and why it falls short. Most forensic research still centers on ever-deeper classifiers, overlooking how deepfake artifacts disturb the joint statistics of content and noise. Early SRM-style detectors either use fixed high pass filters [30, 18] or, in the case of Bayar & Stamm’s constrained convolution [32], learnable prediction-error kernels that deliberately suppress content. Yet all of these methods operate on high frequency (HF) residuals in isolation, ignoring their correlation wi-
th the underlying signal. Han et al. [48] add a second, content branch with learnable SRM filters, but the two streams are only fused at the top and no constraint enforces statistical coupling, Zhu
1
arXiv:2511.21325v1 [cs.SD] 26 Nov 2025

RFE XLS-R
XLS-R
Content Feature Extractor (CFE)
Noise Feature Extractor (NFE)
CA Classifier Real / Fake
Audio x
Figure 1: SONAR overview. Audio is processed in parallel by the Content Feature Extractor (CFE) and the Noise Feature Extractor (NFE). Their embeddings are fused via cross-attention (CA) and classified as real/fake.
et al. [33] similarly boost noise for image forgery detection, treating it as an auxiliary cue that still requires pixel-level masks. None of these approaches capture the higher-order dependency between HF noise and semantic content an interplay that isolated filtering or late fusion cannot model.
In audio forensics, the field has progressed from handcrafted spectral features combined with GMM or LCNN classifiers [47] to fine-tuned self-supervised encoders such as HuBERT and XLSR [50, 57, 51, 35]. However, frequency-aware approaches have not yet been explored in this domain. Moreover, neither line of work models the alignment between semantic content and high frequency noise.
We state that all the previous work both in images and in audio suffers from a common limitation: spectral bias, also known as the frequency principle (F-principle) [7, 8, 9, 10, 11]. Whereby deep networks favor low frequency structure first and leave subtle HF cues under-represented. Although image methods partly address this by routing HF residuals through a separate branch, they stop at mere separation, they never model how low and high frequency information should co-vary in the same feature s-
pace during the learning process. There is no existing detector, visual or auditory that actively aligns genuine content–noise pairs while repelling their fake counterparts in latent space. This alignment gap is especially detrimental in audio, where high frequency artifacts are easily masked by perceptual post-processing, and, to date, no audio (or image) deepfake detector has explicitly addressed this issue in a data-driven application.
To better understand these limitations and motivate our solution, we conducted an exploratory statistical analysis of real vs. fake utterances across our train and test datasets. Our findings confirm that deepfakes differ from real audio not only in energy, but also in higher-order frequency statistics. Specifically, we observed a breakdown of natural low↔high co-modulation patterns (Fig. 2a), together with systematic shift in the contrast between low- and high-frequency energy bands (Fig. 2b). Th-
ese cues cannot be exploited by fixed filters alone and strongly justify SONAR’s use of learnable, distribution-level alignment.
Our approach: SONAR and the gap it fills. We close this gap with SONAR, a frequency guided, dual path framework that learns a bank of data-driven SRM filters to isolate high frequency (HF) residuals and imposes a Jensen–Shannon divergence loss to pull real content–noise pairs together while pushing fake pairs apart in latent space. By transforming HF residuals from a nuisance into a supervisory signal and learning their alignment with semantic content in feature space, SONAR directly combats spect-
ral bias, accelerates convergence, and sets new state-of-the-art performance on both controlled benchmarks (ASVspoof 2021) and challenging “in the wild” audio. To our knowledge, it is the first audio deepfake detector to exploit learnable, distributional alignment between low and high frequency embeddings.
Our contributions are threefold.
2

real fake
1.00
0.75
0.50
0.25
0.00
0.25
0.50
0.75
1.00
Pearson r (frame¤wise)
ASVspoof-2019
fake real
1.00
0.75
0.50
0.25
0.00
0.25
0.50
0.75
1.00
Pearson r (frame¤wise)
In-the-Wild
(a) (b)
(a) LF–HF correlation.
real fake
30
25
20
15
10
5
0
HF LF (dB)
ASVspoof-2019
fake real
40
30
20
10
0
HF LF (dB)
In-the-Wild
(a) (b)
(b) HF/LF energy contrast.
Figure 2: Low–high frequency structure reveals spoofing artifacts. (a) Pearson correlation between low- (0–4 kHz) and high-frequency (7–8 kHz) bands shows real speech with strong comodulation (r ≈ 0.6), while fakes collapse toward zero or negative values. (b) The energy difference ∆E = EHF − ELF is systematically shifted for fakes across corpora, exposing a consistent HF/LF imbalance. These second-order cues motivate SONAR’s distributional alignment objective.
• SONAR: frequency-contrastive dual path. We introduce SONAR, the first audio deepfake detector to jointly model low-frequency content and high-frequency residuals, turning spectral bias into a discriminative signal.
• Learnable SRM & JS frequency alignment loss. A learnable SRM filter bank with a Jensen–Shannon alignment loss explicitly aligns real content–noise pairs and separates fake ones, a formulation not used in prior work.
• State-of-the-art with fast convergence. SONAR achieves new SOTA EERs on ASVspoof 2021 and In-the-Wild, converging in as few as 12 epochs while remaining robust to codecs and bandwidth shifts.
2 RELATED WORK
High frequency cues in deep learning. Fourier features markedly reduce spectral bias in MLPs [17]. Successors such as Wave NN [19], BiHPF [27], and ADD [28] insert explicit high pass branches or filters, showing that frequency-aware modules consistently sharpen detail capture.
Frequency domain image forgery detection. Two stream, high pass pipelines detect manipulation artifacts by pairing low pass content with residual branches [25, 18, 32, 30]. Denoising-guided schemes [33] and compact frequency blocks [4] further improve generalization with fewer parameters.
Audio deepfake detection. Classic systems combine handcrafted cepstral features with GMM/LCNN backends [47]. Modern approaches leverage SSL encoders (HuBERT, Wav2Vec, XLSR, Whisper, WavLM) [50, 46, 43, 45, 44], yet often falter on out of distribution (OOD) audio [56]. Tak et al. fine tuned XLSR with an AASIST head and augmentation for strong OOD results [57], later work fused XLSR layers with specialized classifiers to push performance further [51, 34, 35].
Our contribution. Building on [57] and [35], we add a learnable dual path filter that explicitly aligns content and noise embeddings, boosting sensitivity to subtle high frequency artifacts. The result is faster convergence and state-of-the-art robustness across both benchmark and in the wild tests.
3 MATHEMATICAL MOTIVATION
Spectral bias as a coupling defect. A spoken frame X contains low-frequency formants L and high frequency micro-structure H, produced by the same vocal–tract event, hence jointly distributed: preal(L, H) ̸= p(L) p(H). Deep learning training is spectrally biased: it first fits the high energy LF error then runs out of budget, leaving an HF “hole” [7]. This provides us motivation for the assumption of approximate factorization pfake(L, H) ≃ p(L) p(H) and, critically, a mismatch in the joint LF–HF st-
atistics, an empirically validated assumption, see Figures 2a and 2b.
3

Audio x
SRM Filter 1
SRM Filter 2
···
SRM Filter M
1 × 1 Conv xnoise
SRM Filter Bank
Figure 3: Rich Feature Extractor (RFE). Audio x is processed by a bank of M SRM-inspired filters, concatenated, and passed through a 1 × 1 learnable convolution layer to produce the noise residual representation xnoise.
Dual-path embeddings. We split X with an ideal band-pass filter, L = FlowX, H = FhighX, feed each band to the same encoder φθ to obtain
zcontent = φθ(L), znoise = φHF
θ SRM(H) ,
and treat the softmaxed frames as empirical distributions p(zcontent), p(znoise).
Alignment loss. For label y ∈ {0 = fake, 1 = real} we minimize
Lalign = y JS p(zcontent) ∥ p(znoise) + (1−y) 1 − JS , (1)
pulling LF and HF embeddings together for real speech and pushing them apart for fakes.
Error bound. Pinsker’s inequality turns the Jensen–Shannon divergence DJS =
JS[p(zcontent) ∥ p(znoise)] into a Bayes error bound Pe ≤ 1
2
√2 DJS. Thus equation 1 shrinks Pe for genuine pairs (DJS ↓) and widens the margin for fakes (DJS ↑), with the HF encoder acting as a targeted regularizer on the generator’s weak band.
The HF “hole” is not merely an energy dip, it breaks the natural LF ↔ HF dependency of real speech. SONAR restores this dependency for genuine audio and accentuates its absence for forgeries, turning a fundamental spectral-bias flaw into a reliable discriminative signal.
4 METHODOLOGY
From Mathematical Motivation to Real-Life Application. Our statistical analysis (Fig. 2) confirmed that fakes break the natural LF–HF co-modulation of real speech, supporting the factorization assumption pfake(L, H) ≈ p(L)q(H). The mathematical motivation in Sec. 3 showed that aligning LF and HF embeddings via the JS loss directly tightens the Bayes error bound. SONAR operationalizes this by: (i) splitting each input X into content (L) and noise (H) with an SRM-constrained filter bank, (ii) encodi-
ng both with twin XLSR paths to obtain zc, zn, and (iii) regulating their JS divergence through equation 1. For reals the loss minimizes divergence, restoring LF–HF dependency, for fakes it maximizes it, amplifying artifacts and widening the decision margin predicted by theory. We implement this dual-path head on AASIST [57], and in SONAR-Finetune attach it to XLSRMamba [35], training only the frequency-enhancing head for efficiency.
4.1 SONAR FEATURE EXTRACTION
The SONAR architecture consists of:
• Content Feature Extractor (CFE): A Wav2Vec2.0 XLSR Encoder.
• Noise Feature Extractor (NFE): A module based on constrained SRM filters followed by a Wav2Vec2.0 XLSR Encoder.
• Fusion via Cross-Attention: This merges the two feature streams into a unified representation.
Figure 1 illustrates the overall system.
4

4.1.1 CONTENT FEATURE EXTRACTION (CFE)
Given an input signal x ∈ RT , we extract content features as:
zcontent = CFE(x) ∈ RF ×D, (2)
with F time steps and feature dimension D.
4.1.2 NOISE FEATURE EXTRACTION (NFE)
The Noise Feature Extractor (NFE) builds on a Rich Feature Extraction (RFE) module (Figure 3). This module leverages constrained SRM filters to emphasize high-frequency components, which are then processed by the Wav2Vec2.0 XLSR Encoder [43]. The XLSR encoder weights were not shared across branches, allowing the model to learn disentangled representations of noise and content. A discussion of the resulting computational cost is provided in Appendix A.
Constrained SRM Filters: We initialize M (hyperparameter for number of filters) learnable filters, each of length 5, with two key constraints:
wi[m] = −1, (central coefficient) (3)
X
k
wi[k] = 0, (zero-sum constraint) (4)
where wi[m] is the i-th filter at index m and we initialize the weights from N (0, I). To ensure these are hard constraints, after every optimizer step we project the filters back to the constraint set: each filter is divided by the negative of its center coefficient (fixing the middle entry to −1), and then its mean is subtracted to enforce strict zero-sum. This guarantees that the constraints hold exactly throughout training without requiring reparameterization or relaxation.
These enforced constraints force each filter to act as a high-pass operator, suppressing low-frequency (content) information and highlighting high-frequency noise, consistent with prior work [32, 33, 48]. Given an input signal x, convolving with these filters yields:
Fnoise = Conv1DSRM(x), (5)
where Fnoise ∈ RM×T contains the intermediate noise feature maps.
Extracting these high frequency features enables the network to detect subtle discrepancies in fake audio.
4.1.3 FUSION AND CLASSIFICATION
The content and noise embeddings, zcontent and znoise, are fused using a cross-attention mechanism. We conducted all experiments with an embedding dimension of 1024 and 8 attention heads.
eout = CA(zcontent, znoise) ∈ RF ×D. (6)
The fused representation is then fed to the AASIST classifier [42]:
yˆ = AASIST(eout) ∈ R2, (7)
where yˆ is the score vector for the real/fake decision.
The architecture of XLSR and AASIST models are detailed in the appendix.
4.2 TRAINING OBJECTIVE
4.2.1 JS-BASED LOSS FOR REAL VS. SPOOF EMBEDDED FREQUENCY DISTRIBUTIONS
Let Zcontent ∈ RF ×D and Znoise ∈ RF ×D denote the content and noise embeddings extracted from the dual path feature extractor for an audio example x. Our goal is to increases the probability distance between the frequency embeddings of fake data while simultaneously reducing the distance among those of real data.
5

To achieve this, we employ the Jensen–Shannon (JS) divergence [21] as a metric for comparing distributions. First, we apply a frame-wise softmax to each embedding, converting them into probability distributions. Then, we compute a single JS divergence score, JS zcontent, znoise , using log2 as the logarithmic base. This ensures that the divergence is normalized to the range [0, 1], facilitating stable comparison across samples.
Frame-wise JS Divergence: At each frame i, we can treat zcontent[i] and znoise[i] as two embeddings
in RD. By applying softmax to each and get two discrete distributions pcontent[i] and pnoise[i] , where the final score for audio x with embeddings Zcontent, Znoise will be:
JS Zcontent, Znoise) = 1
F
F
X
i=1
JS pcontent[i], pnoise[i]
We label the example with y = 1 if it is real, and y = 0 if it is spoof.
JS-Based Loss:
With these settings, we define the custom loss function for each sample (x, y):
Where Zcontent, Znoise are the embeddings from our SONAR feature extraction.
LJS(x, y) = y · JS(zc, zn) + (1 − y) · 1 − JS(zc, zn) (8)
We combine the above LJS (align loss as in equation 1) with a weighted cross-entropy (WCE) loss, which handles the real/fake classification in a more conventional way and accounts for class imbalance: L(x, y) = WCE yˆ, y + λJS · LJS zcontent, znoise), (9)
where yˆ ∈ [0, 1] is the classifier’s predicted probability of being real. The scalar λJS balances how strongly the network must enforce the JS-based criterion. After ablation study, we chose to be λJ S =1.
4.3 SONAR-LITE SETUP
We propose SONAR-Lite to evaluate the intrinsic discriminative power of our frequency-guided backbone. Replacing AASIST with a lightweight two-layer MLP isolates the contribution of the dual-path features, which alone suffice to robustly separate real and spoofed inputs. Despite its simplicity, SONAR-Lite still attains state-of-the-art performance. Let zcontent, znoise ∈ RB×T ×D denote the dual-path embeddings, aggregated by mean pooling over time:
z ̃content = 1
T
T
X
t=1
zcontent,t,  ̃znoise = 1
T
T
X
t=1
znoise,t,
and concatenated into a single vector x = [ ̃zcontent,  ̃znoise]. This vector is then fed into a lightweight two-layer fully connected classifier.
This simplified design demonstrates that the dual path features alone provide robust discriminative power, as validated by our experimental results (see Table 1).
4.4 SONAR-FINETUNE
To address the computational overhead of training dual XLSR encoders from scratch, we explored a finetuning strategy leveraging the pre-trained XLSR-Mamba pipeline [35]. Under the assumption that the original XLSR model, inherently favors low frequency (content) information, we designate it as the content path. To complement this, We then insert our NFE module into the pipeline to extract complementary high frequency cues. These content and noise embeddings are fused via the crossattention and pas-
sed into the mostly-frozen Mamba classifier, with only the noise XLSR, fusion module, and the final two Mamba layers updated during training. The training process started from the best reported checkpoint of the paper and was stopped once the alignment loss (1) plateaued, which in our experiments consistently occurred within 6 epochs. This efficient setup allows us to retain most of the pre-trained model’s capacity while enriching it with high frequency information with low effort. Remarkably, thi-
s finetuned configuration achieves state-of-the-art performance, as detailed in Table 1.
6

Model LA↓ DF↓ ITW↓ WavLM-Large+MFA [36] 5.08 2.56 XLSR+AASIST [57] 1.90 3.69 10.46 XLSR+MoE [41] – – 9.17 XLSR+Conformer [55] 0.97 2.58 8.42 XLSR+Conformer+TCM [34] 1.18 2.25 7.79 XLSR-SLS [51] 2.87 1.92 7.46 XLSR-Mamba [35] 0.93 1.88 6.71 SONAR-Lite (M=30, λJS = 1) 1.78 (2.03) 2.11 (2.5) 6.98 (7.2) SONAR-Full (M=30, λJS = 1, enhancing [57]) 1.55 (1.68) 1.57 (1.95) 6.00 (6.8) SONAR-Finetune (M=30, λJS = 1) on [35] 1.20 (1.30) 1.45 (1.62) 5.43 (5.8)
Table 1: EER (%) on ASVspoof 2021 LA, DF, and In The Wild datasets. Bold entries are best per column. Results from prior work are single-run values, SONAR variants report best (mean) over 3 runs. Statistical significance: SONAR-Full vs. AASIST on ITW (t = 19.4, p = 0.0026) and SONAR-Finetune vs. XLSR-Mamba on ITW (t = 4.73, p = 0.0419) both confirm robust improvements (p < 0.05).
5 EXPERIMENTS & RESULTS
5.1 DATASETS & TRAINING CONFIGURATION
For our experiments, in the same manner that all audio DF detection models are trained, we utilized the ASVspoof 2019 Logical Access (LA) training set [47] for model training and the corresponding LA validation set for tuning. The model wasn’t expose to any other data set in the process. For evaluation, we used the ASVspoof 2021 competition datasets [40] that were designed only for testing. They are covering both Logical Access (clean TTS and VC) and Deep Fake scenarios. Since the ASVspoof 2019 LA-
 training set is highly imbalanced (approximately 1:9 real to fake ratio), we employed a weighted cross-entropy (WCE) loss with class priors estimated from the training split. This ensured that the model avoided bias toward the majority class during optimization. To further assess generalization, we also evaluated on the In The Wild dataset introduced by [56], which contains diverse, real world audio samples. This comprehensive protocol ensures robustness in both controlled and uncontrolled enviro-
nments. Audio data were segmented into approximately 4-second clips (64,600 samples).As in prior work [57, 35, 55], we applied RawBoost [49]. We tested several setups with consistent trends and adopted the standard config for fairness. SONAR-Full and SONAR-Lite training we optimized our model using the AdamW optimizer with an learning rate of 10−5, decaying to 10−8 via cosine annealing. For the finetune version we did the same but only optimized the NFE, fusion layer, and the last two layers of th-
e mamba classifier. For speed purposes, training was performed on 4 NVIDIA L40 GPUs with an effective batch size of 28 × 4. The proposed model can fit inside a single L-40. Each experiment was run three times with different random seeds, employing early stopping (patience of three epochs) and selecting the model with the lowest validation EER. All results are reproducible using our open source code that will be released upon acceptance. Audio deepfake detection is evaluated using the Equal Error R-
ate (EER), which is the point where the false acceptance rate equals the false rejection rate. Despite having nearly double the number of parameters, SONAR-Full introduces only a marginal increase in inference time compared to latest SOTA XLSR-Mamba [35], as shown in Fig. 6.
5.2 RESULTS
SONAR achieves new state-of-the-art performance across DF, LA, and IN THE WILD (Table 1):
• DF: SONAR-Full and SONAR-Finetune reach 1.57% and 1.45%, surpassing all prior methods.
• LA: Both achieve competitive performance (1.20%–1.55%) and are the strongest models trained with a single run.
• In The Wild: SONAR-Full and SONAR-Finetune set a new benchmark at 6.00% and 5.43%.
7

Method / Augmentation DF ↓ LA↓ ITW ↓ Architectural Ablations
SONAR-Full w/o RFE, JS 2.54 2.93 8.91 SONAR-Full w/o RFE 2.40 2.48 8.44 SONAR-Full w/o JS 2.65 2.90 8.50 SONAR-Full w/ non-learnable RFE (M=30) 2.30 2.36 8.20 SONAR-Full w/ M =1 SRM 2.83 2.91 8.00 SONAR-Full w/ M =10 SRM 2.43 2.51 7.40 SONAR-Full w/ λJS=0.5 2.42 2.61 7.91 SONAR-Full w/ λJS=0.8 1.90 1.78 7.02 SONAR-Full w/ SRM and λJS=1 (best configuration) 1.57 1.55 6.00 Robustness to Sampling Rates / Codecs (ITW only)
Resample → 44.1 kHz ≈ 0 Resample → 48 kHz ≈ 0 MP3 (64 kbps) medium jitter (|∆p| ≤ 0.1) Opus (32 kbps) medium jitter (|∆p| ≤ 0.1) Vorbis (q3) small jitter (|∆p| ≤ 0.05)
Table 2: Ablation study (SONAR-Full). Top: pooled EER (%) on DF, LA, and ITW sets under different architectural ablations. Bottom: robustness analysis of SONAR-Full (trained on the standard ASVspoof2019 dataset at 16 kHz) evaluated on the ITW test set becuase its difficulty under different resampling and codec augmentations. Results are reported as probability shifts in the softmax outputs.
The LA decrease against models like XLSR-Mamba [35] and XLSR-Conformer [34],[55] is explained by a key evaluation difference: their reported results rely on checkpoint averaging or runsmoothing, while SONAR is evaluated strictly under single training runs. Our reported values are means over three independent seeds, ensuring that improvements reflect genuine convergence rather than post-hoc stabilization. This distinction naturally accounts for the apparent advantage of XLSRMamba on LA (0.93% vs. 1-
.55% for SONAR-Full). Under a fair single-run protocol, SONAR achieves SOTA performance on LA, DF and ITW. Thus, the small LA difference is not a weakness but an expected outcome of different evaluation protocols, and SONAR’s frequency-guided alignment offers stronger and more robust generalization in out-of-distribution settings.
Convergence speed. SONAR also converges rapidly: while Tak et al. [57] trained for 100 epochs, SONAR-Full stabilizes in 12, and SONAR-Finetune in only 4–6. Despite the added branch, SONAR attains higher accuracy with nearly an order-of-magnitude faster training, thanks to the alignment loss (Eq. 8) which tightens LF–HF coupling and accelerates separation of real and fake embeddings.
5.3 ABLATION & ANALYSIS
Table 2 summarizes the ablation results for SONAR-Full. Both the RFE and JS alignment are essential: removing either leads to clear drops, with the absence of JS alone being particularly harmful on LA. Interestingly, removing both RFE and JS together performs slightly better than removing JS alone, since the simplified architecture avoids unstable, unconstrained noise embeddings. Varying M and λJS shows consistent robustness, with λJS=1 yielding the strongest overall results in the ablation. The c-
odec and resampling tests further confirm that SONAR remains stable under common degradations what is making it practical usability.
Embedding Analysis. To assess latent separation, we evaluated SONAR-Full on the In-The-Wild set. Figure 4 shows that the alignment loss preserves strong LF–HF coupling in real speech (cosine similarity near 1), while fakes collapse toward negative values (≈ −0.2). t-SNE further reveals a much clearer real/fake split than the XLSR baseline, confirming that disentangling and aligning content and noise yields a more discriminative latent space.
8

(a) Cosine similarity. Reals cluster near 1 (LF–HF aligned), while fakes center around −0.2, indicating dissimilarity.
(b) t-SNE embeddings. SONAR-Full features yield clear separation between real and fake samples, unlike the single-XLSR baseline.
Figure 4: Latent representation analysis of SONAR. (a) t-SNE shows that SONAR’s dual-path embeddings separate real and fake audio more distinctly than the baseline. (b) Cosine similarity histograms confirm that real speech preserves LF–HF coupling, while fakes exhibit disjoint embeddings.
6 CONCLUSION
SONAR reframes audio–deepfake detection as a frequency-guided, contrastive representation task. By splitting speech into complementary low- and high-frequency paths and regulating their latent divergence with a Jensen–Shannon loss, SONAR turns the generator’s persistent “HF hole” into a decisive discriminative cue. Entirely data-driven, it requires no hand-crafted filters and offers a new lens for robust deepfake detection.
Empirically, SONAR-FULL and SONAR-FINETUNE achieve single-run state-of-the-art EERs with convergence up to 8× faster than reported in strong baselines, while maintaining robustness to codecs and realistic bandwidth shifts. SONAR transforms spectral bias into a discriminative signal through a frequency-contrastive dual-path design, setting a new standard for audio deepfake detection. Key Breakthroughs.
• SONAR: frequency-contrastive dual path. The first audio deepfake detector to jointly model low-frequency content and high-frequency residuals, transforming spectral bias into a discriminative signal.
• Learnable SRM & JS alignment. A learnable SRM filter bank with a Jensen–Shannon loss explicitly aligns LF–HF embeddings for real audio while repelling fake pairs, producing disjoint latent manifolds.
• State-of-the-art with fast convergence. SONAR sets new SOTA with EERs of 1.57% (DF), 6.00% (ITW), and 1.55% (LA) in 12 epochs, while SONAR-Finetune improves further to 1.45% / 5.43% (DF/ITW) and 1.20% (LA) in 4 epochs. It is the best single-run system on LA and the overall SOTA on DF and In-the-Wild.
REPRODUCIBILITY STATEMENT
We have taken several steps to ensure that the findings reported in this paper are reproducible. All datasets used are publicly available: ASVspoof 2019 and 2021 (Sec. 5.1, 4) and the In-the-Wild corpus [56], 4. Our preprocessing and segmentation procedure (4-second clips, Default settings of RawBoost augmentation) is described in Sec. 5.1 and the source in 4. The full architecture of SONAR, including the constrained SRM filters, dual-path XLSR encoders, and cross-attention fusion, is detailed in -
Sec. 4, with additional implementation details provided in the Appendix (A). Training objectives, including the Jensen–Shannon alignment loss and weighted cross-entropy, are specified in Eq. 1–8. All experiments were run three times with different seeds, and statistical significance tests are reported in Table 1. An anonymous code repository containing source code training scripts accompanies this submission in the supplementary materials.
9

REFERENCES
[1] United Nations Development Programme. A “Super Year” for Elections – Strengthening Democracy and Good Governance in 2024. 2024. Available at https://www.undp.org/ blog/super-year-elections-2024. Accessed: 2025-07-27.
[2] TRM Labs. AI-Enabled Fraud: How Scammers Are Exploiting Generative AI. 2025. Available at https://www.trmlabs.com/post/ ai-enabled-fraud-how-scammers-are-exploiting-generative-ai. Accessed: 2025-07-27.
[3] G. Noto. Scammers Siphon $25M from Engineering Firm Arup via AI Deepfake “CFO”. 2024. Available at https://www.cfodive.com/news/ arup-scammer-deepfake-cfo/715302/. Accessed: 2025-07-27.
[4] C. Tan et al. Frequency-Aware Deepfake Detection: Improving Generalizability Through Frequency Space Domain Learning. In Proceedings of the AAAI Conference on Artificial Intelligence, 38(5):5976–5984, 2024. AAAI Press.
[5] Z. K. Abdul and A. K. Al-Talabani. Mel Frequency Cepstral Coefficient and Its Applications: A Review. IEEE Access, 10:122136–122158, 2022.
[6] Cybersecurity Dive. FBI Warns Senior US Officials Are Being Impersonated Using Texts, AI Voice Messages. 2025. Available at https://www.cybersecuritydive. com/news/fbi-warns-senior-us-officials-being-impersonated-ai/ 716824/. Accessed: 2025-07-27.
[7] N. Rahaman, A. Baratin, D. Arpit, F. Draxler, M. Lin, F. Hamprecht, Y. Bengio, and A. Courville. On the Spectral Bias of Neural Networks. In Proceedings of the 36th International Conference on Machine Learning (ICML), volume 97, pages 5301–5310. PMLR, 2019.
[8] R. Basri, D. Jacobs, Y. Kasten, and S. Kritchman. The Convergence Rate of Neural Networks for Learned Functions of Different Frequencies. In Advances in Neural Information Processing Systems 32 (NeurIPS), pages 4761–4771. Curran Associates, Inc., 2019.
[9] Y. Cao, Z. Fang, Y. Wu, D.-X. Zhou, and Q. Gu. Towards Understanding the Spectral Bias of Deep Learning. arXiv:1912.01198, 2019.
[10] Z.-Q. J. Xu, Y. Zhang, and T. Luo. Overview Frequency Principle/Spectral Bias in Deep Learning. Communications on Applied Mathematics and Computation, pages 1–38, 2024. Early access.
[11] S. Fridovich-Keil, R. G. Lopes, and R. Roelofs. Spectral Bias in Practice: The Role of Function Frequency in Generalization. In Advances in Neural Information Processing Systems 35 (NeurIPS), pages 7368–7382, 2022.
[12] R. Shwartz-Ziv and N. Tishby. Opening the Black Box of Deep Neural Networks via Information. arXiv:1703.00810, 2017.
[13] Y. Li and Y. Yuan. Convergence Analysis of Two-layer Neural Networks with ReLU Activation. In Advances in Neural Information Processing Systems (NeurIPS), pages 597–607, 2017.
[14] Z. Allen-Zhu, Y. Li, and Z. Song. A Convergence Theory for Deep Learning via Overparameterization. In Proceedings of the 36th International Conference on Machine Learning (ICML), volume 97, pages 242–252. PMLR, 2019.
[15] V. Monga, Y. Li, and Y. C. Eldar. Algorithm Unrolling: Interpretable, Efficient Deep Learning for Signal and Image Processing. IEEE Signal Processing Magazine, 38(2):18–44, 2021.
[16] N. Shlezinger, Y. C. Eldar, M. Goldenbaum, P. Schniter, Y. Murin, D. Gesbert, and G. Leus. Model-based Deep Learning. Proceedings of the IEEE, 111(5):465–499, 2023.
10

[17] M. Tancik, P. P. Srinivasan, B. Mildenhall, S. Fridovich-Keil, N. Raghavan, U. Singhal, R. Ramamoorthi, J. T. Barron, and R. Ng. Fourier Features Let Networks Learn High Frequency Functions in Low Dimensional Domains. In Advances in Neural Information Processing Systems 33 (NeurIPS), pages 7537–7547, 2020.
[18] Y. Qian, G. Yin, L. Sheng, Z. Chen, and J. Shao. Thinking in Frequency: Face Forgery Detection by Mining Frequency-aware Clues. In Computer Vision – ECCV 2020, volume 12367 of LNCS, pages 86–103. Springer, 2020.
[19] M. Yang, Y. Ren, Z. Tang, Z. Lin, X. Qie, and Z. Zhao. WaveGAN: Frequency-aware GAN for High-fidelity Few-shot Image Generation. In Computer Vision – ECCV 2022, volume 13677 of LNCS, pages 567–584. Springer, 2022.
[20] K. Schwarz, Y. Liao, and A. Geiger. On the Frequency Bias of Generative Models. In Advances in Neural Information Processing Systems (NeurIPS), 2021.
[21] B. Fuglede and F. Topsøe. Jensen–Shannon Divergence and Hilbert Space Embedding. In Proceedings of the 2004 IEEE International Symposium on Information Theory (ISIT), page 31. IEEE, 2004.
[22] H. Maltby, J. Wall, C. Glackin, M. Moniri, N. Cannings, and I. Salami. A Frequency Bin Analysis of Distinctive Ranges Between Human and Deepfake Generated Voices. arXiv:2403.01766, 2024.
[23] W. Yang, J. Feng, J. Yang, F. Zhao, J. Liu, Z. Guo, and S. Yan. Deep Edge Guided Recurrent Residual Learning for Image Super-resolution. IEEE Transactions on Image Processing, 26(12):5895–5907, 2017.
[24] S. Liu, W. Ding, C. Liu, Y. Liu, Y. Wang, and H. Li. ERN: Edge Loss Reinforced Semantic Segmentation Network for Remote Sensing Images. Remote Sensing, 10(9):1339, 2018.
[25] I. Masi, A. Killekar, R. M. Mascarenhas, S. P. Gurudatt, and W. AbdAlmageed. Two-Branch Recurrent Network for Isolating Deepfakes in Videos. In European Conference on Computer Vision (ECCV), pages 667–684. Springer, 2020.
[26] F. Chollet. Xception: Deep Learning with Depthwise Separable Convolutions. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pages 12511258. IEEE, 2017.
[27] Y.-J. Jeong, M.-G. Kim, H.-U. Jang, H.-T. Lim, and H.-J. Kim. BIHPF: Bilateral High-pass Filters for Robust Deepfake Detection. In Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), pages 5049–5058. IEEE, 2022.
[28] S. Woo. ADD: Frequency Attention and Multi-view Based Knowledge Distillation to Detect Low-quality Compressed Deepfake Images. In Proceedings of the AAAI Conference on Artificial Intelligence, 36(1):1153–1160, 2022.
[29] A. Hertz, O. Perel, R. Giryes, O. Sorkine-Hornung, and D. Cohen-Or. SAPE: Spatiallyadaptive Progressive Encoding for Neural Optimization. In Advances in Neural Information Processing Systems, volume 34, pages 8820–8832, 2021.
[30] J. Fridrich and J. Kodovsky ́. Rich Models for Steganalysis of Digital Images. IEEE Transactions on Information Forensics and Security, 7(3):868–882, 2012.
[31] P. Zhou, X. Han, V. I. Morariu, and L. S. Davis. Learning Rich Features for Image Manipulation Detection. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pages 1053–1061. IEEE, 2018.
[32] B. Bayar and M. C. Stamm. A Deep Learning Approach to Universal Image Manipulation Detection Using a New Convolutional Layer. In Proceedings of the 4th ACM Workshop on Information Hiding and Multimedia Security, pages 5–10. ACM, 2016.
11

[33] J. Zhu, C. Wang, Y. Zhao, and C. Shen. Learning Discriminative Noise Guidance for Image Forgery Detection and Localization. In Proceedings of the AAAI Conference on Artificial Intelligence, 38(7):7913–7921, 2024.
[34] D.-T. Truong, R. Tao, T. Nguyen, H.-T. Luong, K. A. Lee, and E. S. Chng. Temporal-Channel Modeling in Multi-head Self-Attention for Synthetic Speech Detection. In Proceedings of Interspeech 2024, pages 537–541, 2024.
[35] Y. Xiao and R. K. Das. XLSR-Mamba: A Dual-column Bidirectional State Space Model for Spoofing Attack Detection. IEEE Signal Processing Letters, 31:1045–1049, 2024.
[36] Y. Guo, H. Huang, X. Chen, H. Zhao, and Y. Wang. Audio Deepfake Detection with Selfsupervised WavLM and Multi-fusion Attentive Classifier. In Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 12702–12706. IEEE, 2024.
[37] X. Wang and J. Yamagishi. Investigating Self-supervised Front Ends for Speech Spoofing Countermeasures. In Proceedings of Odyssey 2022 – The Speaker and Language Recognition Workshop, pages 100–106. ISCA, 2022.
[38] Y. Yang, H. Qin, H. Zhou, C. Wang, T. Guo, K. Han, and Y. Wang. A Robust Audio Deepfake Detection System via Multi-view Feature. In Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 13131–13135. IEEE, 2024.
[39] A. Pianese, D. Cozzolino, G. Poggi, and L. Verdoliva. Deepfake Audio Detection by Speaker Verification. In Proceedings of the IEEE International Workshop on Information Forensics and Security (WIFS), pages 1–6. IEEE, 2022.
[40] H. Delgado, N. Evans, T. Kinnunen, K. A. Lee, X. Liu, A. Nautsch, J. Patino, M. Sahidullah, M. Todisco, X. Wang, and J. Yamagishi. ASVspoof 2021: Automatic Speaker Verification Spoofing and Countermeasures Challenge Evaluation Plan. arXiv:2109.00535, 2021.
[41] Z. Wang, R. Fu, Z. Wen, J. Tao, X. Wang, Y. Xie, X. Qi, S. Shi, Y. Lu, Y. Liu, C. Li, X. Liu, and G. Li. Mixture of Experts Fusion for Fake Audio Detection Using Frozen wav2vec 2.0. arXiv:2409.11909, 2024.
[42] J.-W. Jung, H. Tak, V. M. Patel, J. Yamagishi, and N. Evans. AASIST: Audio Anti-spoofing Using Integrated Spectro-temporal Graph Attention Networks. In Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 63696373. IEEE, 2022.
[43] A. Babu, C. Wang, A. Tjandra, K. Lakhotia, Q. Xu, N. Goyal, K. Singh, P. von Platen, Y. Saraf, J. Pino, A. Baevski, A. Conneau, and M. Auli. XLS-R: Self-supervised Cross-lingual Speech Representation Learning at Scale. arXiv:2111.09296, 2021.
[44] S. Chen, Y. Cheng, Z. Wang, Y. Qian, J. Wu, D. Yu, and S. Liu. WavLM: Large-scale Selfsupervised Pre-training for Full Stack Speech Processing. IEEE Journal of Selected Topics in Signal Processing, 16(6):1505–1518, 2022.
[45] A. Radford, J. W. Kim, T. Xu, G. Brockman, C. McLeavey, and I. Sutskever. Robust Speech Recognition via Large-scale Weak Supervision. arXiv:2212.04356, 2022.
[46] A. Baevski, H. Zhou, A. Mohamed, and M. Auli. wav2vec 2.0: A Framework for Selfsupervised Learning of Speech Representations. In Advances in Neural Information Processing Systems 33 (NeurIPS), pages 12449–12460, 2020.
[47] J. Yamagishi, M. Todisco, M. Sahidullah, H. Delgado, X. Wang, N. Evans, T. Kinnunen, K. A. Lee, V. Vestman, and A. Nautsch. ASVspoof 2019: Automatic Speaker Verification Spoofing and Countermeasures Challenge Evaluation Plan. In ASVspoof 2019 Workshop, volume 13, 2019.
[48] B. Han, X. Han, H. Zhang, J. Li, and X. Cao. Fighting Fake News: Two Stream Network for Deepfake Detection via Learnable SRM. IEEE Transactions on Biometrics, Behavior, and Identity Science, 3(3):320–331, 2021.
12

[49] H. Tak, M. Kamble, J. Patino, M. Todisco, and N. Evans. RawBoost: A Raw Data Boosting and Augmentation Method Applied to Automatic Speaker Verification Anti-spoofing. In Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 6382–6386. IEEE, 2022.
[50] W.-N. Hsu, B. Bolte, Y.-H. H. Tsai, K. Lakhotia, R. Salakhutdinov, and A. Mohamed. HuBERT: Self-supervised Speech Representation Learning by Masked Prediction of Hidden Units. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 1418–1427. IEEE, 2021.
[51] Q. Zhang, S. Wen, and T. Hu. Audio Deepfake Detection with Self-supervised XLS-R and SLS Classifier. In Proceedings of the 32nd ACM International Conference on Multimedia (ACM MM), pages 6765–6773. ACM, 2024.
[52] H. Tak, J. Pati ̃no, M. Todisco, A. Nautsch, N. Evans, and A. Larcher. End-to-end Anti-Spoofing with RawNet2. In Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 6369–6373. IEEE, 2021.
[53] X. Liu, M. Liu, L. Wang, K. A. Lee, H. Zhang, and J. Dang. Leveraging Positional-related Local-global Dependency for Synthetic Speech Detection. In Proceedings of the IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 1–5. IEEE, 2023.
[54] Y. Chen, J. Yi, J. Xue, C. Wang, X. Zhang, S. Dong, S. Zeng, J. Tao, L. Zhao, C. Fan, and others. RawBMamba: End-to-end Bidirectional State Space Model for Audio Deepfake Detection. arXiv:2406.06086, 2024.
[55] E. Rosello, A. Gomez-Alanis, A. M. Gomez, and A. Peinado. A Conformer-Based Classifier for Variable-Length Utterance Processing in Anti-Spoofing. In Proceedings of Interspeech, pages 5281–5285, 2023.
[56] N. M. Mu ̈ller, P. Czempin, F. Dieckmann, A. Froghyar, and K. Bo ̈ttinger. Does Audio Deepfake Detection Generalize? In Proceedings of Interspeech, pages 2973–2977. ISCA, 2022.
[57] H. Tak, M. Todisco, X. Wang, J.-W. Jung, J. Yamagishi, and N. Evans. Automatic Speaker Verification Spoofing and Deepfake Detection Using Wav2Vec 2.0 and Data Augmentation. arXiv:2202.12233, 2022.
A APPENDIX
XLSR ARCHITECTURE OVERVIEW
XLSR (Cross-Lingual Speech Representations) is a large-scale multilingual model based on the Wav2Vec 2.0 architecture, trained on over 400,000 hours of speech across 128 languages. It is designed to learn universal speech representations that generalize well across languages and tasks. XLSR extends Wav2Vec 2.0 with larger model capacity and multilingual pretraining.
CORE COMPONENTS
• Feature Encoder. The input waveform x ∈ RT is first passed through a series of temporal convolutional layers that output a latent representation:
z = ConvEncoder(x) ∈ RT ′×d
where T ′ ≪ T due to downsampling, and d is the channel dimension.
• Quantization Module (Pretraining Only). A Gumbel-softmax quantizer maps z to discrete latent codes q(z) sampled from a learned codebook. This discrete representation is used as a target in contrastive learning. The quantization module is discarded after pretraining.
13

• Transformer Encoder. The encoded sequence z is fed into a multi-layer Transformer:
c = Transformer(z)
For XLSR 300M, the Transformer consists of 24 layers, each with hidden size 1024, 16 self-attention heads, and feed-forward networks of dimension 4096.
• Contrastive Objective (Pretraining). The model is trained to distinguish the true quantized target q(z) from a set of distractors using a contrastive loss, encouraging the model to learn meaningful representations without labels.
DOWNSTREAM USAGE
After pretraining, the quantizer and contrastive heads are removed. The contextualized features c are used as inputs to downstream tasks such as speech recognition, speaker verification, or deepfake detection. In our work, we extract c either in frozen mode or via finetuning, and feed it into a task-specific classifier.
AASIST ARCHITECTURE OVERVIEW
AASIST (Audio Anti-Spoofing using Integrated Spectra-Temporal Modeling) is a deep learning model designed for detecting spoofed audio in speaker verification systems. It combines spectratemporal modeling with attention-based mechanisms to robustly capture discriminative features between genuine and fake audio, particularly under real world conditions.
CORE COMPONENTS
• Learnable Frontend: The raw waveform x ∈ RT is first passed through a 1D convolutional frontend that acts as a learnable filterbank:
xspec = Conv1D(x)
This mimics handcrafted feature extraction (e.g., STFT or filterbanks) in a data-driven way and outputs time-frequency like representations.
• Graph Attention Layer (GAT): The core innovation of AASIST is to treat the spectrotemporal representation as a graph where each node corresponds to a time-frequency patch. A Graph Attention Network (GAT) models the structured relationships between these patches:
h′
i=
X
j∈N (i)
αij Whj
where αij are attention weights learned over neighbors N (i), and W is a shared linear transform.
• Spectro-Temporal Blocks: A series of convolutional blocks capture local patterns in both time and frequency domains. These are alternated with GAT layers to jointly model local and global context.
• Global Aggregation and Classification: After the GAT and convolutional layers, the model aggregates features via global average pooling and passes them through fully connected layers for binary classification:
yˆ = σ(MLP(GAP(H)))
ADVANTAGES
• Spectro-Temporal Awareness: By combining CNNs and GATs, AASIST captures both fine-grained local patterns and long-range spectral dependencies.
• Fully Learnable Pipeline: From waveform to classification, the architecture is end-to-end trainable without handcrafted features.
• Strong Benchmarks: AASIST achieves state-of-the-art performance on ASVspoof 2019 and 2021 logical access (LA) and deepfake (DF) subsets, especially under noisy and real world conditions.
14

Figure 5: Impact of resampling on detection accuracy. Equal-Error Rate (EER) rises as the sampling rate (SR) of the test set is lowered, confirming that the model relies on high-frequency artifacts introduced during deep-fake synthesis.
USAGE IN OUR WORK
We adopt AASIST as a strong baseline in our experiments on SONAR-Full model.Its ability to detect both TTS and VC-based attacks makes it a competitive model for evaluating deepfake detection methods.
LIMITATIONS
Sensitivity to resampling and reliance on high-frequency cues. Figure 5 reveals that the Equal-Error Rate increases monotonically when the input audio is down-sampled for example, from 16 kHz to 4 kHz, thereby stripping energy above the new Nyquist frequency. The degradation from a state-of-the-art 6demonstrates that SONAR exploits high-frequency noise artifacts introduced during deep-fake synthesis. While this helps on clean, full-bandwidth recordings, it also exposes a limitation: the detector b-
ecomes less robust when real-world pipelines or codecs apply aggressive low-pass filtering or resampling. However, we note that most audio found in the wild is sampled at 16,kHz or higher, meaning this sensitivity is less likely to affect practical deployments. Moreover, our model maintained strong performance across a range of common codecs, including high-quality MP3 compression, indicating robustness to realistic encoding conditions. Practitioners should therefore (i) preserve as high a capture-
 sample-rate as feasible, or (ii) retrain / fine-tune the model on data that reflect the target bandwidth and compression conditions. Model size and compute. Although the dual-path design roughly doubles the parameter count to 650 M (with XLSR large), it remains feasible to train for 12 epochs on a single L40 GPU standard for real world remote server deployments. We leave further optimization via parameter sharing and pruning for future work.
Modality scope. Experiments are confined to audio. While the frequency-guided principle is generic, porting SONAR to images or video will require modality-specific high-pass filtering and fusion schemes, which we have not yet explored.
Dataset coverage. Evaluation spans ASVspoof 2021 (LA/DF) and the M ̈uller in-the-wild corpus, although these are the academic benchmarks for spoofing detection, unseen spoof mechanisms or languages may still degrade performance.
False positives/negatives. Like any detector, SONAR can misclassify highly compressed real speech or exceptionally well-crafted fakes, which could erode user trust, threshold calibration for different deployment domains remains an open question.
15

Model License URL
XLSR (fairseq) MIT https:
//github.com/ facebookresearch/ fairseq XLSR-Mamba MIT https:
//github. com/swagshaw/ XLSR-Mamba AASIST MIT https:
//github. com/clovaai/ aasist
Table 3: Licenses for pretrained models.
Dataset License URL / Terms
In The Wild Apache 2.0 https://
deepfake-total. com/in_the_ wild ASVspoof 2019 (LA/DF)
ODC-By v1.0 https://
datashare.ed. ac.uk/handle/ 10283/3336 ASVspoof 2021 (LA/DF)
ODC-By v1.0 https:
//doi.org/10. 5281/zenodo. 4837263
Table 4: Licenses for datasets.
LICENSING OF THIRD-PARTY ASSETS
All third-party assets used in this work, including models and datasets, are listed in Table 3, along with their license terms and usage conditions. We ensure that all included components comply with their respective open source or research use licenses.
All third-party assets used in this work are listed below, including pretrained models and datasets, along with their license terms and URLs.
BROADER IMPACT
The rapid commoditisation of neural voice cloning poses concrete risks in day-to-day life from account-takeover attempts at banks and call-centre fraud, to automated disinformation in political campaigns and social media. SONAR contributes a stronger line of defence: it is a detection-only model that neither synthesises nor enhances fake audio. Wider deployment could therefore help journalists, financial institutions and platform moderators to flag spoofed content early, limiting downstream harm. -
On the negative side, ever-stronger detectors may escalate an adversarial arms-race, encouraging attackers to craft subtler manipulations. We mitigate this by (i) releasing code and evaluation scripts to foster transparent benchmarks, and (ii) encouraging periodic re-training on newly emerging spoof methods. The model uses only publicly available speech data collected with consent, and stores no personal attributes beyond the embeddings required for classification.
We build directly on the publicly released AASIST and XLS-R reference implementations, adopting the CUDA-optimised training framework of Tak et al. All experiments were run end-to-end on a single NVIDIA L40 (48 GB) GPU under PyTorch 2.2 with CUDA 12.2. The complete source code, Hydra configs, pretrained checkpoints, and the shell scripts used to reproduce every table and figure accompany this paper in the supplementary package.
16

Figure 6: Inference latency scales linearly with audio length. We compare inference times (in seconds) for the XLSR-Mamba and SONAR-Full models across increasing audio durations from 1 to 10 seconds. SONAR introduces only a minimal overhead relative to XLSR-Mamba, while delivering improved detection performance (cf. Table 1).
COMPUTATIONAL COST.
We analyzed the additional cost of SONAR relative to a single-stream XLSR baseline. The extra components are: (i) the Rich Feature Extractor (RFE), (ii) a second encoder branch, and (iii) a cross-attention fusion.
RFE and fusion are negligible. For a 4 s clip at 16 kHz with M =10 filters, the RFE adds only ∼8M FLOPs (< 0.01G), and the cross-attention adds ∼0.16G FLOPs. Both are < 1% of a single XLSR pass.
Encoders dominate. SONAR-Full essentially doubles the encoder cost, giving ≈ 2× the parameters and FLOPs of XLSR. However, since the two streams run concurrently on GPU, the measured wall-clock latency increases by only 15–25% (Fig. 6), not 100%.
17

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:31.299Z
- **Text Length:** 51287 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
