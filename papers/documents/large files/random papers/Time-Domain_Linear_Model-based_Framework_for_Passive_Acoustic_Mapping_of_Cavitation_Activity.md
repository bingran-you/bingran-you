# PDF Document: Gelvez-Barrera et al. - 2025 - Time-Domain Linear Model-based Framework for Passive Acoustic Mapping of Cavitation Activity.pdf

**File Path:** Gelvez-Barrera et al. - 2025 - Time-Domain Linear Model-based Framework for Passive Acoustic Mapping of Cavitation Activity.pdf

**Processed Date:** 2026-02-10T18:18:31.551Z

**File Size:** 2247.45 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3314

**Title:** Time-Domain Linear Model-based Framework for Passive Acoustic Mapping of Cavitation Activity

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Time-Domain Linear Model-based Framework for
Passive Acoustic Mapping of Cavitation Activity
Tatiana Gelvez-Barrera, Barbara Nicolas, Denis Kouam ́e, Bruno Gilles, Adrian Basarab
Abstract—Passive acoustic mapping enables the spatial mapping and temporal monitoring of cavitation activity, playing a crucial role in therapeutic ultrasound applications. Most conventional beamforming methods, whether implemented in the time or frequency domains, suffer from limited axial resolution due to the absence of a reference emission onset time. While frequency-domain methods, the most efficient of which are based on the cross-spectral matrix, require long signals for accurate estimation-
, time-domain methods typically achieve lower spatial resolution. To address these limitations, we propose a linear model-based beamforming framework fully formulated in the time domain. The linear forward model relates a discretized spatiotemporal distribution of cavitation activity to the temporal signals recorded by a probe, explicitly accounting for time-offlight delays dictated by the acquisition geometry. This model is then inverted using regularization techniques that exploit prior knowledg-
e of cavitation activity in both spatial and temporal domains. Experimental results show that the proposed framework achieves enhanced or competitive cavitation map quality while using only 20% of the data typically required by frequencydomain methods. This highlights the substantial gain in data efficiency and the flexibility of our spatiotemporal regularization to adapt to diverse passive cavitation scenarios, outperforming state-of-the-art techniques. Index Terms—Passive acoustic mapping, Model-
-based beamforming, Linear forward model, Regularized inversion.
I. INTRODUCTION
Cavitation activity refers to the acoustic emissions produced by gas or vapor microbubbles within a liquid medium [1]. The microbubbles form in biological tissues or originate in situ as a result of rapid pressure variations induced by an ultrasound field [2]. Depending on acoustic pressure and physical properties of the medium, microbubbles may either oscillate non-destructively over multiple cycles, known as noninertial cavitation, or collapse violently within a few microseconds, known as inerti-
al cavitation [3], [4]. Each regime
This work was supported by the LABEX CELYA (ANR-10- LABX-0060) and LABEX PRIMES (ANR-11-LABX-0063) of Universit ́e de Lyon, within the program “Investissements d’Avenir” (ANR-11-IDEX-0007) operated by the French National Research Agency (ANR), as well as the “CAVIIAR” Project (ANR-22-CE19-0006), operated by the French National Research Agency (ANR). T. Gelvez-Barrera is with IRIT, Universit ́e de Toulouse, CNRS, Toulouse, France, and Universit ́e Claude Bernard Lyon 1, INSA Lyon, CNRS, Inserm, CRE-
ATIS UMR 5220, U1294, F-69100, Lyon, France. (e-mail: tatiana.gelvez@creatis.insa-lyon.fr). B. Nicolas and A. Basarab are with Universit ́e Claude Bernard Lyon 1, INSA-Lyon, CNRS, Inserm, CREATIS UMR5220, U1294, F-69100, Lyon, France. (e-mail: barbara.nicolas@creatis.insa-lyon.fr, adrian.basarab@creatis.insa-lyon.fr). D. Koum ́e is with IRIT, Universit ́e de Toulouse, CNRS, Toulouse, France. (e-mail: denis.kouame@irit.fr). B. Gilles is with LabTau, Inserm, U1032, Universite ́ Claude Bernard Lyon 1-
, F-69003, Lyon, France. (e-mail: bruno.gilles@inserm.fr).
(a) Passive Acoustic Mapping
Probe
Microbubbles
Cavitation maps
(b) Linear Forward Model y = Ax + η
yA x
(c) Regularized Inversion
minx ∥y − Ax∥2
2 + R(x)
Sparsity Smoothness
Fig. 1: Time-Domain Linear Model for Passive Acoustic Mapping (TD-LM-PAM) framework. (a) Cavitation monitoring, where a probe passively records acoustic emissions from clouds of microbubbles, followed by beamforming to display cavitation maps. (b) Forward model relying in a linear operator A, linking the spatiotemporal distribution of cavitation activity, x, to the recorded radio-frequency signals, y. (c) General scheme of regularized inversion enabling the incorporation of prior knowledge, such a-
s sparsity or smoothness.
connotes distinct nature, which is closely related to therapeutic outcomes, bio-effects, or pathological conditions [5]. Passive Acoustic Mapping (PAM), depicted in Fig. 1 maps the cavitation activity by beamforming radio-frequency (RF) signals passively recorded by a probe. This technique has proven effective for monitoring and guiding ultrasound-based therapies that induce cavitation, such as high-intensity focused ultrasound and ultrasound-enhanced drug delivery [6]. Ultrasound beamforming tech-
niques can be broadly categorized into time-domain (TD) and frequency-domain (FD) approaches, depending on the domain in which RF signals are processed. TD methods operate directly on raw temporal data, while FD methods analyze signals in the Fourier domain [7][9]. These beamforming paradigms have been adapted for cavitation map reconstruction. One of the earliest approaches extended Time-Exposure Acoustics (TEA) to localize cavitation regions, giving rise to TEA-PAM [10]. Subsequently,
arXiv:2511.20551v1 [eess.SP] 25 Nov 2025

the spatial resolution was enhanced in [11] by sparsifying RF signals prior to beamforming. Building on this foundation, the Robust Capon Beamformer (RCB) was adapted in [12], introducing RCB-PAM to improve artifact suppression. Later, the Phase Coherence Factor (PCF) was incorporated in [13], developing PCF-PAM to suppress incoherent noise. In parallel, [14] applied Compressive Sensing (CS) theory, proposing CS-PAM that models cavitation emissions as sparse signals for high-resolution reconstruc-
tion from few measurements. Complementarily, [15]–[17] showed that using the Cross Spectral Matrix (CSM) enables adaptive beamforming in PAM, improving resolution and contrast at low computational cost. More recently, an increasing number of studies have demonstrated the effectiveness of linear model-based formulation and regularized inversion techniques that formulate beamforming as an inverse problem in related applications, including active ultrasound imaging [18], [19] and room acoustics [20].-
 In the context of PAM, the most recent contribution adapts the CSM Fitting method, leveraging a FD linear model-based approach to improve spatial resolution [21]. However, current PAM approaches still face inherent limitations. In particular, achieving high resolution along the axial dimension, perpendicular to the probe, remains challenging due to the absence of a reference emission time. Additionally, while TD methods are well-suited for non-stationary phenomena, they provide lower spatial reso-
lution [22]. In contrast, FD methods, though efficient, are limited by assumptions of stationarity that may not hold in dynamic conditions [23]. Therefore, this work proposes a beamforming framework for PAM, based on a linear forward model fully formulated in the time domain and employing regularized inversion, as illustrated in Fig. 1. This framework is hereafter referred to as Time-Domain Linear Model-based Passive Acoustic Mapping (TD-LM-PAM). To this end, we introduce an original linear forwar-
d model that incorporates the time-of-flight delays dictated by the acquisition geometry, linking the distribution of cavitation activity to the recorded RF signals. The proposed TD-LM-PAM framework opens the possibility to incorporate prior knowledge through regularization, effectively capturing spatial and temporal characteristics of acoustic emissions generated by cavitation activity. Accordingly, we investigate several regularization strategies, including sparsity, total-variation, and regular-
ization by denoising. We perform comparative experiments against state-of-theart TD and FD methods, showing that our TD-LM-PAM framework achieves enhanced or competitive performance with appropriate regularizers, even while relying on only 20% of the data required by FD approaches. These results highlight the benefits of incorporating spatiotemporal regularization to improve cavitation map quality, exploiting prior knowledge of cavitation activity and adapting to different scenarios. The main cont-
ributions of this paper include: • An original linear forward model, operating in the time domain, of the acoustic propagation of the cavitation emissions based on the geometry of the acquisition setup, in Section II-A.
• A general TD-LM-PAM framework that is flexible and can be adapted to different scenarios through the choice of appropriate spatiotemporal regularization terms, in Section II-B. • An improved or comparable quality of reconstructed cavitation maps using only 20% of data typically used for state-of-the-art methods, in Section III.
II. TIME DOMAIN LINEAR MODEL-BASED BEAMFORMING
FRAMEWORK FOR PASSIVE ACOUSTIC MAPPING
This section presents the discrete formulation of the proposed TD-LM-PAM framework for estimating cavitation source activity. The framework builds on the proposed linear forward model in Section II-A, and addresses beamforming through regularized inversion as in Section II-B. Figure 2 schematizes the notation convention used throughout the paper. In what follows, (x, y, z) refer to the lateral, azimuthal, and axial spatial dimensions, respectively, while (t) represents the temporal dimension. Let -
Y ∈ RNm×Nt be the matrix containing the RF signals recorded by an ultrasound linear array with Nm sensors located at ⃗rm = (xm, 0, 0), sampled at Nt temporal samples with a sampling frequency fs, so that, the kth temporal sample refers to the time instant tk = k/fs. For notational clarity:
• Y:,k ∈ RNm denotes the signal recorded by all sensors at the fixed time instant tk, for k = 1, . . . , Nt. • Ym,: ∈ RNt denotes the signal recorded by sensor m, over all time instants, for m = 1, . . . , Nm.
The RF signals can be expressed in vectorized form as:
y ∈ RNmNt = y1⊤ . . . y⊤m . . . y⊤
Nm
⊤ , (1)
where ym ∈ RNt denotes the vector form of the signal Ym,:. Let X ∈ RNx×Nz×Nt be the datacube representing cavitation activity in terms of amplitude within a 2D spatial plane evolving in time. The cube is defined along the lateral, axial,
ym ∈ RNt , m = 1, . . . Nm
X :,:,k ∈ RNx×Nz , k = 1, . . . Nt
X :,j,: ∈ RNx×Nt , j = 1, . . . Nz
(x, z, t) : lateral, axial, and temporal dimensions.
x
z
t
Y : RF signal
Nm
Nt
X cavitation datacube
Nz
Nx
Nt
Fig. 2: Mathematical notation scheme. Y ∈ RNm×Nt denotes the RF signals, and X ∈ RNx×Nz×Nt represents the cavitation spatiotemporal datacube.

and temporal dimensions (x, z, t), where Nx, Nz, and Nt denote the numbers of lateral pixels, axial pixels, and temporal samples, respectively. For notational clarity: • X :, :, k ∈ RNx×Nz denotes the spatial distribution of the source activity at time instant tk. • X i, j, : ∈ RNt denotes the temporal waveform at spatial position (xi, zj), for i = 1, . . . , Nx and j = 1, . . . , Nz. • X i, j, k ∈ R represents the instantaneous pressure emitted by the bubbles at position (xi, zj), and time insta-
nt tk. Using a flattened index n ∈ {1, . . . , N }, N = NxNz linked to coordinate (in, jn), the datacube can be vectorized as:
x ∈ RNNt = x1⊤ · · · xn⊤ · · · x⊤
N
⊤ , (2)
where xn ∈ RNt is the vector form of the temporal waveform located at position ⃗rn = (xn, 0, zn).
A. Linear Forward Model for Passive Acoustic Mapping
Model-based methods rely on a forward model describing the physical relationship between the observed data and the underlying source distribution. Hence, we adopt this perspective to originally formulate beamforming for PAM as a linear model-based inverse problem, under the assumption of the following linear forward model:
y = Ax + η, (3)
where A ∈ RNmNt×NNt denotes a linear operator that relates the recorded RF signal y ∈ RNmNt , to the spatiotemporal distribution of cavitation activity x ∈ RNNt , and η ∈ RNmNt accounts for additive acquisition Gaussian noise. Assuming a homogeneous, non-attenuating medium with negligible sensor directivity and system response, the acoustic propagation of a wave recorded by the mth sensor and emitted from the nth pixel is fully determined by the acoustic timeof-flight, i.e., the time required for -
the wavefront to reach the sensor at location ⃗rm after propagating from pixel at position ⃗rn. Hence, we define the operator A exclusively in terms of the acoustic time-of-flight determined by the geometric configuration of the acquisition setup. Under a far-field wavefront propagation model, which implies planar wavefront behavior, the discrete propagation sample delay δm,n is given by:
δm,n := ∥⃗ rm − ⃗ rn∥2
c · fs , (4)
where c denotes the speed of sound in the medium, assumed to be constant and known, and ⌊·⌉ represents the rounding operator to the nearest integer, ensuring that the propagating wavefront aligns with a discrete temporal sample. We model the operator A as a block matrix composed of Nm × N blocks Am,n ∈ RNt×Nt , relating the mth sensor to the nth spatial position over Nt discrete temporal samples as:
A :=

      
A1,1 . . . A1,n . . . A1,N
... . . . ... . . . ...
Am,1 . . . Am,n . . . Am,N
... . . . ... . . . ...
ANm,1 . . . ANm,n . . . ANm,N

      
. (5)
The signal recorded at the mth sensor, ym, is then expressed as the superposition of contributions from sources at all pixels:
ym =
N
X
n=1
Am,nxn. (6)
In passive acquisition, a source located at the position n cannot theoretically contribute to the signal recorded by sensor m before the corresponding propagation delay δm,n. Once this delay has elapsed, the source at position n remains a persistent potential contributor to the signal recorded by sensor m during subsequent temporal samples. This property is exploited to construct each block Am,n as an identity matrix whose main diagonal is shifted downward by δm,n − 1 rows. In this form, the first-
 nonzero entry appears in row δm,n, column 1, and subsequent ones follow along the subdiagonal. Equivalently:
Am,n[k1, k2] =
(1, k1 = k2 + δm,n − 1,
0, otherwise,
(7)
for k1, k2 = 1, . . . , Nt. Thus, each block Am,n ∈ {0, 1}Nt×Nt corresponds to a sparse binary matrix. Figure 3 shows a toy example of constructing the operator A from the delay samples δm,n, which link each sensor m to each pixel n and are stored in ∆ ∈ RNm×N . A zoomed view illustrates the downward diagonal shifts imposed by the sample delays, highlighting its structured and sparse nature.
B. Regularized Inversion for Passive Acoustic Mapping
The proposed linear forward model introduced in Sec. II-A, serves as the foundation for TD-LM-PAM framework via regularized inversion strategies. The reconstruction of the spatiotemporal cavitation activity signal, x, is then formulated as the following inverse problem:
minimize
x∈RN Nt
1
2 ∥y − Ax∥2
2 + λ R(x), (8)
where the first term represents the data fidelity term, ensuring agreement with the recorded RF signals, and the second term is the regularization function, encoding prior knowledge about the structure of the cavitation activity signal, addressing the ill-posedness of the inverse problem. The parameter λ balance the influence of the regularization term. In this work, we explore multiple regularization strategies, selected to reflect physical and statistical characteristics of cavitation activity. -
To name, 1) Sparsity (Sp) Prior: It promotes the recovery of sparse signals under the assumption that only a few spatial locations contain cavitation activity contributing significantly to the recorded RF signal [14]. Moreover, the time domain formulation captures the transient nature of cavitation, where sources may appear and disappear depending on the considered cavitation regime. This leads to sparsity being enforced not only across spatial dimensions but also over time.
2) Total-Variation (TV) Prior: It encourages the recovery of smooth coherent regions, considering that cavitation microbubbles are spatially localized and form compact clouds with smooth interiors and sharp boundaries [21].

3) Regularization by Denoising (ReD): It incorporates denoisers as implicit priors to guide the reconstruction process. Such ReD approach is useful to promote realistic, highquality reconstructions, enhancing source localization while effectively suppressing noise and artifacts [24].
Nx × Nz = 3 × 5
Fig. 3: Linear forward operator toy example. The image plane consists of Nx × Nz = 3 × 5 pixels, observed over Nt = 10 time instants and recorded with a probe of Nm = 3 sensors. The structure of the operator A is determined by the sample delays stored in the matrix ∆. The zoomed-in figure shows the sub-blocks corresponding to the relationship between the third sensor and the lateral pixels for the second axial pixel.
Specifically, we developed three approaches that leverage individual and combined regularizations, exploiting the complementary strengths of sparsity, smoothness, and denoising priors. The mathematical formulation for each approach is summarized in Table I. These inverse problems can be solved using well-established optimization techniques with appropriate proximal operators tailored to each regularization. Specifically, the approach promoting sparsity is solved using the Fast Iterative ShrinkageT-
hresholding Algorithm (FISTA) [25], which efficiently handles the l1-norm term. For the combined regularization problems, we employ the Alternating Direction Method of Multipliers (ADMM) [26], which enables flexible splitting of the optimization terms. In particular, the Block-Matching and 4D filtering (BM4D) algorithm [27] is used as the implicit denoiser in the sparsity + ReD approach. The Supplementary Material for this paper provides the pseudo-code of the implemented algorithms, whose source -
code is publicly available at: https://github.com/TatianaGelvez/TD-LM-PAM. After estimating the signal ˆx, we construct a beamformed 2D spatial map X ∈ RNx×Nz representing the power of the cavitation activity, by summing the squared values for each spatial position across the temporal dimension, i.e.,
Xin,jn =
X
xˆ2
n, (9)
where the index tuple (in, jn) ↔ n corresponds to the 2D coordinates associated with the flattened index n.
III. EXPERIMENTS AND RESULTS
This section presents the experiments conducted to evaluate the proposed TD-LM-PAM framework. The performance is assessed over simulated scenarios, including point sources and microbubble clouds.
Comparative Benchmarking Methods
For benchmarking purposes, the three proposed approaches, TD-LM-PAMSp, TD-LM-PAMSpTV, and TD-LM-PAMSpReD, summarized in Table I, are evaluated against state of the art beamforming techniques operating in both the time and frequency domains, including TD-DAS [10], FD-DAS [8], FDRCB [7], FD-CMF-ElNet [21], and FD-CMF-SpTV [21].
TABLE I: Regularized Optimization Approaches Formulation
Approach Abbreviation Inverse Problem Formulation
Sparsity TD-LM-PAMSp xˆ ∈ arg min
x∈RN Nt
n1
2 ∥y − Ax∥2
2 + λ ∥x∥1
o
, l1-norm: ∥x∥1 = P
i,j,k |Xi,j,k|.
Sparsity + TV
TD-LM-PAMSpTV
xˆ ∈ arg min
x∈RN Nt
n1
2 ∥y − Ax∥2
2 + λ ∥x∥1 + γ ∥x∥TV
o
,
TV-norm: ∥x∥TV := P
i,j,k |Xi+1,j,k − Xi,j,k| + |Xi,j+1,k − Xi,j,k| + |Xi,j,k+1 − Xi,j,k| = ∥Dx∥1. Here, D denotes the discrete differences operator.
Sparsity +
ReD TD-LM-PAMSpReD xˆ ∈ arg min
x∈RN Nt
n1
2 ∥y − Ax∥2
2 + λ ∥x∥1 + μRD(x)
o
, ReD-term: RD(x) = 1
2 x⊤ (x − f (x)).

In all cases, the observations are corrupted by Gaussian noise corresponding to an SNR of 10 dB. For the frequencydomain (FD) methods, the hyperparameters are chosen as described in [21], using K = 130 and an overlap of 90% for estimating the CSM. For the proposed TD-LM-PAM approaches, the hyperparameters λ, γ, and μ are selected as detailed in the Supplementary Material of this paper.
Quantitative Evaluation Metrics
The performance across the simulated scenarios was quantitatively assessed using well-established metrics detailed below. For point source configurations with single microbubbles, the axial and lateral lobes were characterized using the Full Width at Half Maximum (FWHM) metric, expressed in millimeters [mm] [28]. The localization accuracy was assessed as the mean Euclidean distance between the true and estimated positions of each cavitation microbubble, expressed in millimeters [mm]. Specifically,-
 the estimated positions were defined as the points of maximum amplitude in the estimated envelope. Finally, the separation capability between two sources was quantified using the peak-to-center intensity difference (PCID) metric [29]. This metric measures the intensity difference, expressed in decibels [dB], between the minimum value along the line connecting two sources and their maxima, and is defined as:
PCID = 20 log10
Imin
Imax
, (10)
where Imax represents the amplitude at the maxima associated with the two sources, and Imin denotes the minimum amplitude between them. Note that, in sparse images, where the minimum between peaks approaches zero, the PCID can theoretically reach minus infinity. In this work, two point sources are considered unresolved when PCID > −6 dB [30]. For cloud configurations containing grouped microbubbles, the classical Contrast-to-Noise Ratio (CNR) [31], [32] was employed to quantify the separability be-
tween the cavitation cloud and the surrounding background. It is calculated as:
CNR = 20 log10
|μi − μo|
pσ2
i + σo2
!
, (11)
where μi, μo and σi, σo are the means and standard deviations of the signal and noise zones, respectively, taken from the estimated power map of the cavitation activity. The signal zone corresponds to the area inside the cavitation cloud, while the noise zone is defined as a 2 mm margin surrounding the cloud. To evaluate the fidelity of estimated cavitation cloud shapes, we used the Dice coefficient computed at −3 dB. True positives (TP) are defined as pixels with power greater than or equal to −3-
 dB located within the signal zone. False negatives (FN) are pixels within the signal zone with power below −3 dB. False positives (FP) are pixels with power greater than or equal to −3 dB located in the noise zone. The Dice coefficient, which quantifies the overlap between the detected and ground-truth cavitation zones, is defined as:
Dice = 2|X ∩ Y |
|X| + |Y | , (12)
where X represents the binary image corresponding to the signal power zone (i.e., TP + FN), and Y denotes the binary image corresponding to all pixels above −3 dB (i.e., TP + FP).
A. Validation of the Linear Forward Model
To validate the consistency of the proposed forward model and its ability to capture time-delay effects during RF signal acquisition in a linear array, we compare its output with reference observations obtained using the simulation scheme presented in [33]. The comparison is conducted in a noise-free scenario using a discretized setup to minimize numerical errors. The resulting error, expressed as the normalized mean square error (NMSE) between the observations obtained from the reference simulati-
on scheme, ysim, and those obtained from the proposed operator, yA, is evaluated over 100 experiments using different input images. Across these realizations, the NMSE exhibits a mean of 1.83×10−15 and a standard deviation of 3.11×10−16, confirming that the operator is consistent with the literature simulation scheme.
B. Quantitative Results on Point Source Configuration
This experiment follows the two point-source configurations described in [21] to assess the performance of the proposed TD-LM-PAM framework in separating closely spaced sources. Specifically, we evaluate the spatial resolution and source separation capabilities, including axially distributed point sources, which typically represent the most challenging scenario. The first configuration consists of two laterally distributed inertial cavitation point-sources located at (−5, 72) mm and (−3, 72) mm in-
 the (x, 0, z) plane. The second configuration involves two axially distributed inertial cavitation point sources positioned at (−3, 64) mm and (−3, 72) mm. The RF signals are recorded over a duration of Nt = 200 μs using a linear probe equipped with Nm = 128 sensors. Note that, the TD methods use only 20% (40 μs) of the observed RF signal, whereas the FD methods use the entire signal (200 μs), required to accurately estimate the CSM. Tables II and III present the average performance computed over-
 fifty independent realizations of the same scenario for the lateral and axial configurations, respectively. The best result for each metric is highlighted in bold, while the second-best result is underlined. The results demonstrate that TD-LM-PAM, with appropriate regularization, outperforms state-of-the-art methods. In particular, the sparsity-regularized approach (TD-LM-PAMSp) proves to be the most effective. This behavior is expected, as sparsity serves as a prior consistent with the assumptio-
n of point-like sources emitting signals, whereas the smoothing and denoising priors employed by the SpTV and SpRed approaches are less suitable for isolated, point-like sources. TDLM-PAMSp achieves the narrowest axial lobes, as evidenced

by the smallest FWHM (below or equal to 1 mm), highlighting its superiority for axially distributed point sources. Moreover, despite using significantly fewer measurements, TD-LM-PAMSp achieves comparable accuracy in localizing microbubble positions, as reflected by the position error, typically exhibiting a similar average performance but with slightly higher variance compared to the best result. For a qualitative comparison, Figs. 4 and 5 depict representative examples of the reconstructed spat-
ial maps, illustrating the reconstructed microbubble distributions for each method and configuration. Furthermore, Figs. 6 and 7 show the corresponding lateral and axial profiles, allowing for a detailed evaluation of both resolution and localization accuracy. Notably, the axial profiles demonstrate that the lobe generated by TD-LM-PAMSp is the narrowest, underscoring its superior capability for source discrimination compared to TD and other FD state-of-the-art approaches. In addition, we observed-
 that the main localization errors for axially distributed point sources predominantly arise from sources located at greater depths, where the problem is more ill-posed and the accuracy of their reconstruction is consequently limited.
C. Quantitative Results on Cloud Configuration
Building on the point-source scenario, we next evaluate the TD-LM-PAM framework under a more challenging cloud configuration, in which individual microbubbles are grouped to better approximate realistic conditions. This experiment follows the same setup as the circular cloud scenario described in [21], consisting of a circular source with a diameter of 2 mm, centered at (−7, 70) mm, with a density of 100 point sources/mm2. Table IV reports the quantitative results showing that TDLM-PAM consistentl-
y outperforms benchmark methods, yielding sharper reconstructions. In particular, based on CNR, TD-LM-PAMSpRed proves to be the most effective method,
TABLE II: Average Quantitative Performance over 50 Replicas of Two Laterally Distributed Point Sources
Method
Axial FWHM [mm]
Lateral FWHM [mm]
Position Error [mm]
Separation Power [dB]
FD-DAS 7.4 (0.5) 0.61 (0.01) 1.1 (0.4) −13.9 (0.7)
FD-RCB 3.3 (0.2) < 0.2 0.10 (0.01) < −20
FD-CMFElNet
1.3 (0.2) < 0.2 0.1 (0.1) < −20
FD-CMFSpTV
1.4 (0.1) 0.44 (0.01) 0.2 (0.1) < −20
TD-DAS 12.6 (2.6) 0.40 (0.01) 0.74 (0.04) −13.5(0.5)
TD-LMPAMSp
0.8 (0.2) < 0.1 0.1 (0.2) < −20
TD-LMPAMSpTV
2.4 (0.3) < 0.2 0.4 (0.1) < −20
TD-LMPAMSpRed
1.4 (0.2) < 0.2 0.4 (0.2) < −20
TABLE III: Average Quantitative Performance over 50 Replicas of Two Axially Distributed Point Sources
Method
Axial FWHM [mm]
Lateral FWHM [mm]
Position Error [mm]
Separation Power [dB]
FD-DAS 14.0 (2.0) 0.67 (0.01) 1.7 (0.3) −1.6 (0.7)
FD-RCB 3.5 (0.5) < 0.2 0.6 (0.6) < −5.7(0.6)
FD-CMFElNet
1.3 (0.2) < 0.2 0.3 (0.2) < −20
FD-CMFSpTV
1.7 (0.5) 0.45 (0.01) 0.4 (0.3) < −20
TD-DAS 15.7 (0.2) 0.4 (0.01) 0.6 (0.1) < −3.4(0.8)
TD-LMPAMSp
1.0 (0.2) < 0.02 0.3 (0.3) < −20
TD-LMPAMSpTV
2.3 (0.3) < 0.1 0.6 (0.1) < −20
TD-LMPAMSpRed
1.7 (0.3) < 0.1 0.4 (0.1) < −20
enabling the recovery of dense microbubble clouds while preserving their shape and effectively suppressing surrounding noise. Overall, TD-LM-PAM with appropriate regularizers demonstrates the ability to preserve fine-scale structural information even in dense regions. Figure 8 shows typical examples of the reconstructed spatial maps, visually evidencing that the proposed approach provides satisfactory estimation while avoiding artifacts and preserving contrast. Notably, TD-LM-PAMSpRed preserves th-
e cloud shape, as further supported by the DICE metric. In contrast, the methods TD-LM-PAMsp and TD-LM-PAMSpTV provide comparable results to the ones obtained with FD methods.
TABLE IV: Circular Cloud Setup Quantitative Performance
Method CNR [dB] DICE [mm]
FD-DAS 2.39 (0.08) 0.49 (0.01)
FD-RCB 3.06 (0.01) 0.54 (0.02)
FD-ENet 4 (4) 0.2 (0.1) FD-SpTV 7 (4) 0.8 (0.1)
TD-DAS 2.9 (0.4) 0.35 (0.11)
TD-LM-PAMSp 1.3 (2.6) 0.25 (0.3)
TD-LM-PAMSpTV 3.8 (3.5) 0.36 (0.29) TD-LM-PAMSpRed 7.2(2.4) 0.76 (0.15)
IV. CONCLUSIONS
We proposed TD-LM-PAM, a time-domain linear model framework for passive acoustic mapping that formulates beamforming as a regularized inverse problem. Unlike existing methods, our approach introduces for the first time a linear forward model consistent with the acquisition dynamics, enabling the use of diverse regularized inverse approaches. Experiments with point sources and microbubble clouds demonstrate improved axial resolution, higher contrast and comparable localization accuracy compared to -
state-of-the-art TD and FD methods. In perspective, the performance is competitive

to FD methods, with the advantage of using only 20% of the data. Besides, FD approaches typically impose a fixed reconstruction frequency. These results highlight the potential of TD-LM-PAM as an efficient and versatile tool for cavitation activity beamforming.
ACKNOWLEDGMENT
REFERENCES
[1] F. Denner and S. Schenke, “Modeling acoustic emissions and shock formation of cavitation bubbles,” Physics of Fluids, vol. 35, no. 1, 2023. [2] S. K. Gharat, S. C. Godiyal, P. P. Malusare, K. R. Jadhav, and V. J. Kadam, “Microbubbles contrast agents: general overview as diagnostics and therapeutic agent,” Current Drug Targets, vol. 23, no. 10, pp. 960977, 2022. [3] Z. Q. Tan, E. H. Ooi, Y. S. Chiew, J. J. Foo, Y. K. Ng, and E. T. Ooi, “Modelling the dynamics of microbubble undergoing stable an-
d inertial cavitation: Delineating the effects of ultrasound and microbubble parameters on sonothrombolysis,” Biocybernetics and Biomedical Engineering, vol. 44, no. 2, pp. 358–368, 2024.
GT FD-DAS FD-RCB
FD-CMF-ElNet FD-CMF-SpTV TD-DAS
TD-LM-PAMSp TD-LM-PAMSpTV TD-LM-PAMSpReD
Amplitude
Fig. 4: Estimated power maps of two laterally distributed inertial bubbles simulated at (-5,72) mm and (-3, 72) mm.
[4] C. C. Coussios and R. A. Roy, “Applications of acoustics and cavitation to noninvasive therapy and drug delivery,” Annu. Rev. Fluid Mech., vol. 40, no. 1, pp. 395–420, 2008. [5] I. Saletes, B. Gilles, V. Auboiroux, N. Bendridi, R. Salomir, and J.C. Be ́ra, “Research article in vitro demonstration of focused ultrasound thrombolysis using bifrequency excitation.” [6] C. T. Moonen, J. P. Kilroy, and A. L. Klibanov, “Focused ultrasound: Noninvasive image-guided therapy,” Investigative Radiology, v-
ol. 60, no. 3, pp. 205–219, 2025. [7] S. Lu, H. Hu, X. Yu, J. Long, B. Jing, Y. Zong, and M. Wan, “Passive acoustic mapping of cavitation using eigenspace-based robust capon beamformer in ultrasound therapy,” Ultrasonics sonochemistry, vol. 41, pp. 670–679, 2018. [8] K. J. Haworth, K. B. Bader, K. T. Rich, C. K. Holland, and T. D. Mast, “Quantitative frequency-domain passive cavitation imaging,” IEEE transactions on ultrasonics, ferroelectrics, and frequency control, vol. 64, no. 1, pp. 177–191, 2-
016. [9] S. H. Abadi, K. J. Haworth, K. P. Mercado-Shekhar, and D. R. Dowling, “Frequency-sum beamforming for passive cavitation imaging,” The Journal of the Acoustical Society of America, vol. 144, no. 1, pp. 198209, 2018. [10] M. Gyongy and C.-C. Coussios, “Passive spatial mapping of inertial
GT FD-DAS FD-RCB
FD-CMF-ElNet FD-CMF-SpTV TD-DAS
TD-LM-PAMSp TD-LM-PAMSpTV TD-LM-PAMSpReD
Amplitude
Fig. 5: Estimated power maps of two axially distributed inertial bubbles simulated at (-3, 64) mm and (-3, 72) mm.

cavitation during hifu exposure,” IEEE Transactions on Biomedical Engineering, vol. 57, no. 1, pp. 48–56, 2009.
GT FD-DAS FD-RCB FD-CMF-ElNet FD-CMF-SpTV TD-DAS TD-LM-PAMSpTV TD-LM-PAMSpReD TD-LM-PAMSp
Fig. 6: Estimated axial and lateral profiles of two laterally distributed inertial microbubbles simulated at (-5, 72) mm and (-3, 72) mm across all evaluated methods.
GT FD-DAS FD-RCB FD-CMF-ElNet FD-CMF-SpTV TD-DAS TD-LM-PAMSpTV TD-LM-PAMSpReD TD-LM-PAMSp
Fig. 7: Estimated axial and lateral profiles of two axially distributed inertial microbubbles simulated at (-3, 64) mm and(-3, 72) mm across all evaluated methods.
[11] M. Gy ̈ongy and C. M. Coviello, “Passive cavitation mapping with temporal sparsity constraint,” The Journal of the Acoustical Society of America, vol. 130, no. 5, pp. 3489–3497, 2011. [12] C. Coviello, R. Kozick, J. Choi, M. Gy ̈ongy, C. Jensen, P. P. Smith, and C.-C. Coussios, “Passive acoustic mapping utilizing optimal beamforming in ultrasound therapy monitoring,” The Journal of the Acoustical Society of America, vol. 137, no. 5, pp. 2573–2585, 2015. [13] P. Boulos, F. Varray, A. Poizat, A-
. Ramalli, B. Gilles, J.-C. Bera, and C. Cachard, “Weighting the passive acoustic mapping technique with the phase coherence factor for passive ultrasound imaging of ultrasoundinduced cavitation,” IEEE transactions on ultrasonics, ferroelectrics, and frequency control, vol. 65, no. 12, pp. 2301–2310, 2018. [14] C. Crake, S. Finn, L. Marsac, M. Gray, R. Carlisle, C. Coussios, and C. Coviello, “Passive acoustic mapping and b-mode ultrasound imaging utilizing compressed sensing for real-time monitori-
ng of cavitationenhanced drug delivery,” The Journal of the Acoustical Society of America, vol. 143, no. 3 Supplement, pp. 1872–1872, 2018. [15] M. Polichetti, F. Varray, B. Gilles, J.-C. Be ́ra, and B. Nicolas, “Use of the cross-spectral density matrix for enhanced passive ultrasound imaging of cavitation,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 68, no. 4, pp. 910–925, 2020. [16] A. Sivadon, M. Polichetti, J.-C. B ́era, F. Varray, B. Nicolas, and B. Gilles, -
“Pisarenko class beamformer applied to passive acoustic mapping of ultrasound cavitation,” in Forum Acusticum, 2020, pp. 1061
GT FD-DAS FD-RCB
FD-CMF-ElNet FD-CMF-spTV TD-DAS
TD-LM-PAMSp TD-LM-PAMSpTV TD-LM-PAMSpReD
Amplitude
Axial z [mm]
Axial z [mm]
Axial z [mm]
Axial z [mm]
Axial z [mm]
Axial z [mm]
Axial z [mm]
Axial z [mm]
Axial z [mm]
Lateral x [mm] Lateral x [mm] Lateral x [mm]
Lateral x [mm] Lateral x [mm] Lateral x [mm]
Lateral x [mm] Lateral x [mm] Lateral x [mm]
Fig. 8: Estimated power maps of clouds. The white dotted zone corresponds to the noise area and the magenta zone corresponds to the signal area for CNR and Dice computation.

1064. [17] L. Du, T. Yardibi, J. Li, and P. Stoica, “Review of user parameter-free robust adaptive beamforming algorithms,” Digital Signal Processing, vol. 19, no. 4, pp. 567–582, 2009. [18] T. Szasz, A. Basarab, and D. Kouam ́e, “Beamforming through regularized inverse problems in ultrasound medical imaging,” IEEE transactions on ultrasonics, ferroelectrics, and frequency control, vol. 63, no. 12, pp. 2031–2044, 2016. [19] S. Goudarzi, A. Basarab, and H. Rivaz, “A unifying approach to inverse pr-
oblems of ultrasound beamforming and deconvolution,” IEEE Transactions on Computational Imaging, vol. 9, pp. 197–209, 2023. [20] T. Gelvez-Barrera, Q. Leclere, B. Nicolas, J. Antoni, and A. Basarab, “Time-domain beamforming for room acoustics analysis based on reverberant field estimation,” in ICASSP 2025-2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2025, pp. 1–5. [21] C. Lachambre, A. Basarab, J.-C. B ́era, B. Nicolas, F. Varray, and B. Gilles, “An-
 inverse method using cross spectral matrix fitting for passive cavitation imaging,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, 2024.
[22] M. Polichetti, F. Varray, J.-C. B ́era, C. Cachard, and B. Nicolas, “Advanced beamforming techniques for passive imaging of stable and inertial cavitation,” in 2018 IEEE International Ultrasonics Symposium (IUS). IEEE, 2018, pp. 1–4. [23] A. K. Singh, P. Warbal, K. F. Basterrechea, K. B. Bader, and H. Shekhar, “Enhancing passive cavitation imaging using p th root compression delay, sum, and integrate beamforming: In vitro and in vivo studies,” IEEE Transactions on Biomedical Engineering, 2025-
.
[24] R. by Denoising, Y. Romano, M. Elad, and P. Milanfar, “A denoiser can do much more than just clean noise,” Collections, vol. 54, no. 02, 2021. [25] A. Beck and M. Teboulle, “A fast iterative shrinkage-thresholding algorithm with application to wavelet-based image deblurring,” in 2009 IEEE International Conference on Acoustics, Speech and Signal Processing. IEEE, 2009, pp. 693–696. [26] S. Boyd, N. Parikh, E. Chu, B. Peleato, J. Eckstein et al., “Distributed optimization and statistical learni-
ng via the alternating direction method of multipliers,” Foundations and Trends® in Machine learning, vol. 3, no. 1, pp. 1–122, 2011. [27] M. Maggioni, G. Boracchi, A. Foi, and K. Egiazarian, “Video denoising, deblocking, and enhancement through separable 4-d nonlocal spatiotemporal transforms,” IEEE Transactions on image processing, vol. 21, no. 9, pp. 3952–3966, 2012. [28] Z. R. S. Alomari, “Plane wave imaging beamforming techniques for medical ultrasound imaging,” Ph.D. dissertation, University-
 of Leeds, 2017. [29] N. Laroche, S. Bourguignon, E. Carcreff, J. Idier, and A. Duclos, “An inverse approach for ultrasonic imaging from full matrix capture data: Application to resolution enhancement in ndt,” IEEE transactions on ultrasonics, ferroelectrics, and frequency control, vol. 67, no. 9, pp. 1877–1887, 2020. [30] C. Xu, Y. Luo, G. Xu, S. Zhang, and B. Xu, “A comparative study on the accuracy and resolution of das and dort-music damage imaging method based on ultrasonic guided waves,” App-
lied Sciences, vol. 15, no. 12, p. 6380, 2025. [31] H. Liebgott, A. Rodriguez-Molares, F. Cervenansky, J. A. Jensen, and O. Bernard, “Plane-wave imaging challenge in medical ultrasound,” in 2016 IEEE International ultrasonics symposium (IUS). IEEE, 2016, pp. 1–4. [32] A. Rodriguez-Molares, O. M. H. Rindal, J. D’hooge, S.-E. M ̊asøy, A. Austeng, M. A. L. Bell, and H. Torp, “The generalized contrastto-noise ratio: A formal definition for lesion detectability,” IEEE transactions on ultrasonics, ferro-
electrics, and frequency control, vol. 67, no. 4, pp. 745–759, 2019. [33] W. Lauterborn and T. Kurz, “Physics of bubble oscillations,” Reports on progress in physics, vol. 73, no. 10, p. 106501, 2010.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:31.551Z
- **Text Length:** 39004 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
