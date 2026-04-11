# PDF Document: Rouzoumka et al. - 2025 - Latent-space metrics for Complex-Valued VAE out-of-distribution detection under radar clutter.pdf

**File Path:** Rouzoumka et al. - 2025 - Latent-space metrics for Complex-Valued VAE out-of-distribution detection under radar clutter.pdf

**Processed Date:** 2026-02-10T18:15:41.603Z

**File Size:** 3228.65 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3392

**Title:** Latent-space metrics for Complex-Valued VAE out-of-distribution detection under radar clutter

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

LATENT-SPACE METRICS FOR COMPLEX-VALUED VAE OUT-OF-DISTRIBUTION DETECTION UNDER RADAR CLUTTER
Y. A. Rouzoumka1,2 E. Terreaux1 C. Morisseau1 J.-P. Ovarlez1,2 C. Ren2
1 DEMR, ONERA, Universit ́e Paris-Saclay, 91120 Palaiseau, France 2 SONDRA, CentraleSupe ́lec, Universit ́e Paris-Saclay, 91190 Gif-sur-Yvette, France.
ABSTRACT
We investigate complex-valued Variational AutoEncoders (CVAE) for radar Out-Of-Distribution (OOD) detection in complex radar environments. We proposed several detection metrics: the reconstruction error of CVAE (CVAE-MSE), the latent-based scores (Mahalanobis, Kullback-Leibler divergence (KLD)), and compared their performance against the classical ANMF-Tyler detector (ANMF-FP). The performance of all these detectors is analyzed on synthetic and experimental radar data, showing the advantages and t-
he weaknesses of each detector.
Index Terms— Complex-Valued VAE, Out-Of-Distribution detection, Latent Metrics Detection, Radar Detection.
1. INTRODUCTION
Classical adaptive radar detectors (Kelly’s detector, AMF, ANMF) rely on Gaussian and SIRV clutter models and may degrade under non-Gaussian plus additive thermal noise backgrounds [1, 2, 3]. We therefore pursue a data-driven alternative based on complex-valued VAEs and latent-space OOD scores. In recent years, data-driven approaches have emerged to alleviate the need for precise clutter modeling. Among them, VAEs [4] have demonstrated promising capabilities for anomaly and OOD detection in divers-
e applications, including radar detection [5], speech enhancement [6], medical imaging [7], industrial monitoring [8], and acoustic signal analysis [9]. These models learn a latent representation of the training data and use reconstruction or probabilistic criteria to detect deviations. Despite their effectiveness, most VAEbased detectors operate in the real domain and often treat complex-valued radar data by separating real and imaginary components into distinct channels. Recent advances in Compl-
ex-Valued Neural Networks (CVNNs) have shown the benefits of directly modeling complex-valued signals [10, 11]. In radar signal processing, complex-valued models are particularly well-suited due to the
Part of this work was supported by ANR-ASTRID NEPTUNE 3 (ANR23-ASM2-0009).
inherent phase information contained in the data. ComplexValued VAEs (CVAEs) extend this paradigm, enabling phaseaware latent modeling and better structural encoding of radar signals. However, while CVAEs offer promising avenues for radar detection, the literature lacks a comprehensive evaluation of how different OOD detection strategies behave in the complex latent space. Most existing works rely on simple reconstruction error metrics (e.g., MSE) in the observation domain, without exploiting the -
statistical richness of the learned latent distribution. Moreover, it remains unclear whether latentbased scores such as Mahalanobis distance [12], KLD, or magnitude-based norms provide robust alternatives for radar detection, especially under challenging noise conditions (e.g., compound clutter or low SNR regimes). We present the study of complex-valued latent-space OOD scores learned by a CVAE for radar, and position them against a classical detector. Our contributions are (i) benchmark of CVAE -
latent-space OOD scores (Mahalanobis and empirical KLD) versus the reconstruction error (CVAE-MSE) and a strong classical baseline (ANMF-Tyler built with Tyler estimate) [13], all calibrated at Pfa = 10−2, (ii) evaluate across cGN+AWGN, cCGN+AWGN, and experimental CSIR data, reporting both the mean over cells (excluding Doppler 0) and the specific Doppler-0 cell, (iii) analyze robustness vs. SNR: (1) CVAE-MSE leads on synthetic data; (2) ANMF-FP is particularly effective under compound-Gaussian cl-
utter and on real data; (3) Hermitian Mahalanobis mitigates Doppler-0 degradation relative to CVAE-MSE, (iv) KLD is brittle in practice and (iv) give guidelines on selecting reconstruction, latent, or classical scores depending on clutter realism and cell-specific behavior (e.g., Doppler 0). Notations: Matrices are in bold and capital, vectors in bold. For any matrix A or vector, AT is the transpose of A, A∗ the (elementwise) complex conjugate, and AH = (A∗)T the Hermitian transpose of A. I is the-
 identity matrix. N (μ, Γ) and CN (μ, Γ) are respectively real and complex circular Normal distribution of mean μ and covariance matrix Γ. The matrix operator T (.) is the Toeplitz matrix operator ρ → {T (ρ)}i,j = ρ|i−j|. The symbols ⊙ and ⊘ denote the Hadamard element-wise product and division, respectively. On vectors, the operator ◦ acts on each of its com
arXiv:2511.19805v1 [eess.SP] 25 Nov 2025

ponents (power, log, modulus).
2. RELATED WORK
VAEs are widely used for unsupervised OOD detection. A common baseline flags samples with large reconstruction error (or reconstruction probability) as anomalies [14]. Beyond reconstruction, latent-space scores are often employed: the Kullback-Leibler divergence between the posterior q(z|x) and the prior p(z) [15], and the Mahalanobis distance computed from deep features or latent embeddings [16]. These methods remain foundational in recent comparisons of VAEbased anomaly/OOD detectors [17]. Compl-
ex-valued deep learning natively matches radar data. Foundational work on complex-valued networks established the building blocks and benefits for structured signals [10]. Despite this momentum, complex-valued VAEs applied to radar remain scarce. To the best of our knowledge, prior work in adjacent signal-processing domains (e.g., speech enhancement) demonstrates the practicality of complex-valued VAEs, but radar-specific CVAE detectors are still under-explored; our study fills this gap by benchma-
rking latent-space criteria in complex-valued settings. Latent-space scoring has a long pedigree: the Mahalanobis distance [18] adapted to deep features offers a classconditional statistical deviation measure [16], while the VAE’s KLD term provides a natural posterior-prior mismatch signal [15]. However, most of these investigations focus on real-valued latents; their behavior in complex-valued generative models (and in radar specifically) remains comparatively underexplored, motivating the contri-
butions of this work.
3. METHODOLOGY
This section presents our comprehensive framework for evaluating latent space detection methods in complex-valued VAEs. We first describe the complex-valued VAE architecture and its adaptations for radar signal processing [13], then provide detailed mathematical formulations and methodological developments for our two primary contributions: KL divergence-based detection and Hermitian Mahalanobis distance in complex latent spaces.
3.1. Complex-Valued VAE Architecture
Our approach builds upon the complex-valued VAE architecture specifically designed for radar signal processing applications. Unlike conventional real-valued VAEs that require separate processing of real and imaginary components, our model operates directly in the complex domain, preserving crucial phase information inherent in radar signals. The encoder maps high-dimensional complex radar signals x ∈ CN into a lower-dimensional latent representation through complex-valued convolutional layers with-
 complex
batch normalization and CReLU activation functions. The encoder outputs three key parameters: the mean vector μ ∈ Cq, the variance vector σ◦2 ∈ Rq+, and the pseudo-variance term δ ∈ Cq, which allows greater flexibility in modeling the latent space.
Fig. 1: Complex-Valued VAE network architecture
To enable efficient sampling in the complex latent space while maintaining differentiability, we introduce a novel reparameterization trick. Given the estimated parameters μ, σ, and δ, the latent variable z is sampled as follows [19]:
z = μ + kr ⊙ εr + i ki ⊙ εi, (1)
where



kr = √12 (σ + δ) ⊘ (σ + Re(δ))◦ 1
2,
ki = 1
2 σ◦2 − (|δ|◦)◦2 ◦ 1
2 ⊘ (σ + Re(δ))◦ 1
2.
Here, εr and εi are identically and independently distributed according to standard Gaussian noise vectors N (0, I). The decoder reconstructs the radar signal x ∈ CN from the latent variable z using transposed complex convolutions, complex batch normalization, and CReLU activations. It mirrors the encoder in reverse to upsample and restore the original signal structure. The model is trained by minimizing the complex-valued ELBO: LCVAE = Lrec + β DKL , (2)
where the reconstruction loss is Lrec = ∥x − xˆ∥2 and the KL divergence for complex latent spaces against a standard circular complex Gaussian prior is:
DKL = ∥μ∥2 + 1T
q σ−1
2 log◦ σ◦2 − (|δ|◦)◦2 . (3)
3.2. Detection Scores Considered
We compare three scores computed with a complex-valued VAE trained on clutter: (i) a reconstruction-based baseline (CVAE MSE), and two latent-space scores: (ii) an empirical complex KL divergence against the marginal H0, and (iii) a Hermitian Mahalanobis distance in the complex latent space.
3.2.1. Reconstruction-Based Detection (CVAE MSE)
Our baseline follows the standard CVAE paradigm: targets are identified through reconstruction error defined as

SMSE(x) = ∥x − xˆ∥2 with x, xˆ ∈ CN . The binary decision uses a threshold λMSE calibrated on clutter (H0) to meet a prescribed PFA:
SMSE(x)
H1
≷
H0
λMSE . (4)
3.2.2. KLD for Empirical H0 complex Gaussian distribution
Rather than enforcing a theoretical prior CN (0, I), we estimate in latent space an empirical complex Gaussian for clutter: CN ( ˆμ0, Σˆ 0, ∆ˆ 0), where Σˆ 0 captures second-order co
variance and ∆ˆ 0 (diagonal) models residual non-circularity. Deviations of qφ(z | x) from this law are used for detection. For clutter samples xi the encoder outputs (μi, σi, δi).
By setting ki,l = max(σ2
i,l − |δi,l|2, ε) (stability clip), we can define the per-sample circular covariance Σenc(xi) = diag(ki,1, . . . , ki,q) and :
μˆ 0 = 1
Nc
Nc
X
i=1
μi, Σˆ 0 = 1
Nc
Nc
X
i=1
Σenc(xi) , (5)
Algorithm 1 Empirical KL Detection
Require: Encoder Enc, clutter set D0, test sample x, target PFA α 1: For each xi ∈ D0, get (μi, σi, δi) ← Enc(xi); set
Σ1(xi) = diag(ki) with ki,l = max(σ2
i,l − |δi,l|2, ε) and ∆1(xi) = diag(δi)
2: Estimate (μˆ 0, ˆΣ0) via (5) and ∆ˆ 0 = diag( 1
Nc
P
i δi) 3: Calibrate λKL = Percentile {SKL(xi)}, 1 − α on D0 4: On x: compute (μ, σ, δ) ← Enc(x), form Σenc(x) and ∆enc(x), then SKL(x) via (7) 5: Decide H1 iff SKL(x) > λKL
We also estimate a diagonal pseudo-covariance as the average encoder output: ∆ˆ 0 = 1
Nc
P
i diag δi .
For any test posterior density CN (μenc, Σenc, ∆enc), the
KL distance to the empirical null CN ( ˆμ0, Σˆ 0, ∆ˆ 0) is
DKL = 1
2
h
log det K0
det Kenc
+ tr K−1
0 Kenc (6)
+ (m0 − menc)H K−1
0 (m0 − menc) − 2q
i
.
where the augmented mean and covariance are
mi = μi
μ∗
i
, Ki = Σi ∆i
∆∗
i Σ∗
i
, i ∈ {enc, 0}.
The detection score is then SKL(x)
H1
≷
H0
λKL where
SKL(x) ≡ DKL qφ(z | x) ∥ CN ( ˆμ0, Σˆ 0, ∆ˆ 0) , (7)
3.2.3. Mahalanobis Distance in Complex Latent Space
For z ∈ Cq with mean μref and Hermitian covariance Σref , we define the Mahalanobis distance as:
SMaha(z) = (z − μref )H Σ−1
ref (z − μref ) ∈ R+, (8)
which is unitarily invariant and fully accounts for complex correlations, and where the following statistical parameters are estimated from {zn}nN=1:
ˆμref = 1
N
X
n
zn , Σˆ ref = 1
N −1
X
n
(zn − ˆμref )(zn −μˆ ref )H ,
(9) and the decision uses a percentile threshold on SMaha calibrated on H0 to meet PFA α. For each score, λ is set on an independent H0 validation set to reach PFA = α: λ = Percentile Sclutter, 1 − α . We report Probability of Detection (PD) versus SNR, averaged over multiple Monte-Carlo trials, across Gaussian, compound Gaussian, and real data.
Algorithm 2 Mahalanobis Detection
Require: Encoder Enc, clutter set D0, test sample x, target PFA α 1: Build zi ← Enc(xi) for all xi ∈ D0 2: Estimate ( ˆμref , Σˆ ref ) via (9)
3: Calibrate λMaha = Percentile {SMaha(zi)}, 1 − α 4: On x: get ztest, compute SMaha(ztest) via (8) 5: Decide H1 iff SMaha(ztest) > λMaha
4. RESULTS AND DISCUSSION
We assess Probability of Detection Pd vs. SNR at fixed Pfa = 10−2 under three conditions: (a) cGN+AWGN, (b) cCGN+AWGN, and (c) real CSIR data. Figures report solid lines for the mean over all cells except Doppler 0, and dashed lines for the Doppler-0 cell.
4.1. Signal and Noise Characteristics
The target echo is modeled as α = √SNR exp (2iπφ) /√m, where φ ∈ [0, 1], and the steering vector is given by p = (1, exp (2iπd/m) , . . . , exp (2iπd(m − 1)/m))T for m = 16 bins, where d representing the target normalized Doppler bin index. The clutter covariance matrix follows Σc = T (ρ) with ρ = 0.5, while texture components τ and τk are sampled from a Gamma distribution Γ(μ, 1/μ) with μ = 1. For adaptive detectors, the covariance estimation uses SCM and Tyler estimators with K = 2 m independent-
 secondary samples. Concerning experimental data, we used the South Africa CSIR (Council for Scientific and Industrial Research) dataset, which comprises radar echoes from sea clutter and naval targets, collected during two campaigns: in 2006 at the Overberg

(a) cGN + AWGN (b) cCGN + AWGN (c) CSIR data
Fig. 2: Detection performance under different noise configurations, (Pfa = 10−2).
Fig. 3: On the left: range-slow time map. On the right: Doppler-pulse spectrogram for range bin 5605.
Test Range with the Fynment radar, and in 2007 on Signal Hill with an experimental monopulse radar. It spans diverse waveforms, azimuths, ranges, and environmental conditions (see Fig. 3).
4.2. CVAE Training Configuration
The VAE is trained on clutter-plus-noise Doppler profiles for each noise scenario. The dataset DH0 consists of 15,000 samples, two-thirds of which are allocated for training and the remaining third for validation. Training is performed over 50 epochs using the Adam optimizer [20] with a learning rate of 10−3. The loss function LCVAE incorporates a regularization parameter of α = 102 for the CVAE-MSE and α = 10−3. The latent space dimension is set to 12 for the VAE-MSE and to 32 for the Mahalanobis-
 and KLD latent detectors. Once trained, detection is performed using the reconstruction loss Lrec, with Pfa = 10−2, determined from a validation set of 5,000 independently generated samples.
4.3. Detection Performance
For cGN+AWGN, CVAE-MSE attains the earliest rise and saturation, yielding the smallest SNR needed to reach a target Pd. Among latent scores, Hermitian Mahalanobis outperforms KLD. ANMF-FP trails the latent Mahalanobis in this Gaussian setting. Doppler-0 behavior is broadly consistent with the mean, with minor shifts. For cCGN+AWGN, CVAE-MSE remains best overall.
However, ANMF-FP becomes the second-strongest detector under compound Gaussian clutter, surpassing latent Mahalanobis and clearly outperforming KLD. For several detectors (Mahalanobis, KLD), Doppler 0 is slightly easier than the mean (left-shifted curves), whereas VAE-MSE exhibits a very slight degradation at Doppler 0.
On experimental CSIR data, ANMF-FP provides the best performance for the Doppler 0, achieving the lowest SNR at moderate-to-high Pd. On the mean over cells, VAE-MSE ranks first, followed by ANMF-FP and Mahalanobis; KLD is the weakest. Crucially, on the Doppler-0 cell, VAE-MSE degrades markedly, while Mahalanobis remains significantly more robust (improved Pd at the same SNR), and ANMFFP retains the lead. This suggests that (i) classical matchedfiltering with Tyler robust covariance estimate (ANMF--
FP) handles structured, real clutter particularly well, and (ii) incorporating latent covariance geometry (Mahalanobis) alleviates the specific Doppler-0 failure mode observed with pure reconstruction.
All methods saturate near Pd ≈ 1 at sufficiently high SNR in synthetic settings, with VAE-MSE reaching saturation first. On real data, ANMF-FP saturates fastest, Mahalanobis catches up steadily, and KLD exhibits delayed growth.
5. CONCLUSION
We compared complex latent CVAE scores (Mahalanobis, KLD) with VAE-MSE and ANMF-FP across synthetic and real radar data at fixed Pfa.
On synthetic (cGN/cCGN) data, VAE-MSE is consistently the most SNR-efficient detector; under compoundGaussian clutter, ANMF-FP is the strongest non-reconstruction alternative, ahead of latent Mahalanobis, while KLD is the weakest. On CSIR data, ANMF-FP is best when considering both the mean and the Doppler-0 cell; if one looks only at the mean (excluding Doppler-0), VAE-MSE slightly leads, but it degrades at Doppler-0 where Mahalanobis is markedly more robust. KLD underperforms in all settings.

6. REFERENCES
[1] E. J. Kelly, “An adaptive detection algorithm,” IEEE Transactions on Aerospace and Electronic Systems, vol. AES-22, no. 2, pp. 115–127, 1986.
[2] F. C. Robey, D. R. Fuhrmann, E. J. Kelly, and R. Nitzberg, “A CFAR adaptive matched filter detector,” IEEE Transactions on Aerospace and Electronic Systems, vol. 28, pp. 208–216, 1992.
[3] L. L. Scharf and B. Friedlander, “Matched subspace detectors,” IEEE Transactions on Signal Processing, vol. 42, no. 8, pp. 2146–2157, 1994.
[4] D. P. Kingma and M. Welling, “An introduction to variational autoencoders,” Foundations and Trends® in Machine Learning, vol. 12, no. 4, pp. 307–392, 2019.
[5] Y. A. Rouzoumka, E. Terreaux, C. Morisseau, J.-P. Ovarlez, and C. Ren, “Out-of-distribution radar detection in compound clutter and thermal noise through variational autoencoders,” in IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2025.
[6] Y. Xie, T. Arildsen, and Z.-H. Tan, “Complex recurrent variational autoencoder for speech resynthesis and enhancement,” in International Joint Conference on Neural Networks (IJCNN), 2024, pp. 1–7.
[7] S. N. Marimont and G. Tarroni, “Anomaly detection through latent space restoration using vector quantized variational autoencoders,” in 2021 IEEE 18th International Symposium on Biomedical Imaging (ISBI), 2021, pp. 1764–1767.
[8] I. Mitiche, A. Salimy, F. Werner, P. Boreham, A. Nesbitt, and G. Morison, “OODCN: Out-of-distribution detection in capsule networks for fault identification,” in 2021 29th European Signal Processing Conference (EUSIPCO), 2021, pp. 1686–1690.
[9] Z. Bukhsh and A. Saeed, “On out-of-distribution detection for audio with deep nearest neighbors,” in 2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2023, pp. 1–5.
[10] C. Trabelsi, O. Bilaniuk, Y. Zhang, D. Serdyuk, S. Subramanian, J. F. Santos, S. Mehri, N. Rostamzadeh, Y. Bengio, and C. J. Pal, “Deep complex networks,” in International Conference on Learning Representations (ICLR), 2018.
[11] J. A. Barrachina, C. Ren, C. Morisseau, G. Vieillard, and J.-P. Ovarlez, “Comparison Between Equivalent Architectures of Complex-valued and Real-valued Neural Networks - Application on Polarimetric SAR Image
Segmentation,” Journal of Signal Processing Systems, July 2022.
[12] Y. Hou, Z. Chen, M. Wu, C.-S. Foo, X. Li, and R. M. Shubair, “Mahalanobis distance based adversarial network for anomaly detection,” in ICASSP 2020 - 2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2020, pp. 3192–3196.
[13] Y. A. Rouzoumka, E. Terreaux, C. Morisseau, J.-P. Ovarlez, and C. Ren, “Complex-Valued Variational Autoencoders for Radar Detection in Joint Compound Gaussian Clutter and Thermal Noise,” EUSIPCO, 2025.
[14] J. An and S. Cho, “Variational autoencoder based anomaly detection using reconstruction probability,” Tech. Rep., SNU Data Mining Center, Seoul National University, 2015.
[15] K. Sohn, H. Lee, and X. Yan, “Learning structured output representation using deep conditional generative models,” in Advances in Neural Information Processing Systems (NIPS), 2015.
[16] K. Lee, K. Lee, H. Lee, and J. Shin, “A simple unified framework for detecting out-of-distribution samples and adversarial attacks,” in Advances in Neural Information Processing Systems (NeurIPS), 2018.
[17] H. H. Nguyen, C. N. Nguyen, X. T. Dao, Q. T. Duong, D. P. Thi Kim, and M.-T. Pham, “Variational autoencoder for anomaly detection: A comparative study,” in ICCE 2024 - IEEE Tenth International Conference on Communications and Electronics, 2024.
[18] P. C. Mahalanobis, “On the generalised distance in statistics,” Proceedings of the National Institute of Sciences of India, vol. 2, pp. 49–55, 1936.
[19] T. Nakashika, “Complex-valued variational autoencoder: A novel deep generative model for direct representation of complex spectra,” in Interspeech 2020, 2020, pp. 2002–2006.
[20] D. Kingma and J. Ba, “Adam: A method for stochastic optimization,” in International Conference on Learning Representations (ICLR), San Diega, CA, USA, 2015.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:41.603Z
- **Text Length:** 20559 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
