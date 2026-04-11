# PDF Document: Benny et al. - 2025 - Scalable Multisubject Vital Sign Monitoring With mmWave FMCW Radar and FPGA Prototyping.pdf

**File Path:** Benny et al. - 2025 - Scalable Multisubject Vital Sign Monitoring With mmWave FMCW Radar and FPGA Prototyping.pdf

**Processed Date:** 2026-02-10T18:18:09.468Z

**File Size:** 5984.70 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3729

**Title:** Scalable Multisubject Vital Sign Monitoring With mmWave FMCW Radar and FPGA Prototyping

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Scalable Multi-Subject Vital Sign Monitoring with
mmWave FMCW Radar and FPGA Prototyping
Jewel Benny, Narahari N. Moudhgalya, Graduate Student Member, IEEE, Mujeev Khan, Hemant Kumar Meena, Senior Member, IEEE, Mohd Wajid, Senior Member, IEEE and Abhishek Srivastava, Senior Member, IEEE
Abstract—In this work, we introduce an innovative approach to estimate the vital signs of multiple human subjects simultaneously in a non-contact way using a Frequency Modulated Continuous Wave (FMCW) radar-based system. Traditional vital sign monitoring methods often face significant limitations, including subject discomfort with wearable devices, challenges in calibration, and the risk of infection transmission through contact measurement devices. To address these issues, this research is motiva-
ted by the need for versatile, non-contact vital monitoring solutions applicable in various critical scenarios. This work also explores the challenges of extending this capability to an arbitrary number of subjects, including hardware and theoretical limitations. Supported by rigorous experimental results and discussions, the paper illustrates the system’s potential to redefine vital sign monitoring. An FPGA-based implementation is also presented as proof of concept for a hardware-based and portab-
le solution, improving upon previous works by offering 2.7x faster execution and 18.4% less Look-Up Table (LUT) utilization, as well as providing over 7400x acceleration compared to its software counterpart.
Index Terms—Breath-rate estimation, FMCW, FPGA, Healthcare, Heart-rate estimation, mmWave radar, multi-subject, noncontact, 77 GHz
I. INTRODUCTION
R
ECENT advancements in biomedical and bioelectric engineering have broadened the scope of monitoring human vitals such as Heart Rate (HR) and Breath Rate (BR) through direct or indirect methods utilizing algorithms that analyze data from photoplethysmography (PPG) [1], electrocardiography (ECG) [2], respiratory inductance plethysmography (RIP) [3], and CO2 measurement (capnography) [4]. However, these methods encounter limitations such as subject discomfort with wearables and calibration challenges-
. A promising solution to overcome these issues is radar sensing technology for HR and BR measurement, offering non-contact capabilities. This approach also extends to applications including sleep apnea detection [5], fall detection [6] and patient monitoring [7].
This work was supported by the Chips to Startup (C2S) program, Ministry of Electronics and Information Technology (MeitY), Govt. of India, IHub Mobility, IIIT Hyderabad, Kohli Center on Intelligent Systems (KCIS), IIIT Hyderabad and IHub Anubhuti-IIIT Delhi Foundation. Authors - Jewel Benny, Narahari N. Moudhgalya and Abhishek Srivastava are with the Centre for VLSI and Embedded Systems Technologies (CVEST), IIIT Hyderabad, India (e-mail: abhishek.srivastava@iiit.ac.in). Authors - Mujeev Khan and -
Mohd Wajid - are with the Department of Electronics Engineering, Aligarh Muslim University, Aligarh, India (e-mail: mohdwajid@zhcet.ac.in). Author Hemant Kumar Meena is with the Dept. of Electrical Engineering, MNIT Jaipur, India (e-mail: hmeena.ee@mnit.ac.in). Authors Narahari N. Moudhgalya and Mujeev Khan have contributed equally to this research.
Continuous-wave (CW) Doppler Radar systems have significantly advanced this field, addressing various technical challenges in HR and BR measurement [8] [9]. However, the fixed frequency of these radars limits their ability to measure the range of subjects, impacting HR and BR measurement in cluttered environments. In contrast, Ultra-Wideband (UWB) radars excel in accurate range measurement and mitigate the limitations of CW radars [10]–[12]. However, Frequency-modulated-continuous-wave (FMCW) outp-
erforms UWB radars in SNR and accuracy specifically at higher distances [13]. Fig. 1 depicts the operation principle
Fig. 1: Basic operation principle of FMCW radars for HR/BR measurement
of FMCW radars. FMCW radar continuously transmits a frequency-modulated signal and uses the frequency shift in the reflected signal to measure the target’s distance and speed based on delay and Doppler effects [14]–[20]. The superior SNR of FMCW radars is particularly beneficial for assessing vital signs, especially in scenarios involving multiple people, as outlined in [14]. Furthermore, UWB radars suffer from low SNR in HR detection due to spurious harmonics and mixed respiration and heartbeat s-
ignals, which can corrupt FFT spectrograms [10]. FMCW radars have several other advantages over UWB radars. While UWB radars are limited by pulse width and peak signal intensity [21]–[23] and require high power during short pulse periods [24], FMCW wideband radars combine the ranging capability of UWB radars with the sensitivity and robustness of Continuous Wave (CW) Doppler radars. This combination makes FMCW radars particularly effective for detecting micro-motions, such as chest wall oscillatio-
ns [25], and monitoring multiple targets at different ranges [26]. Moreover, FMCW radars are typically smaller, lighter, more power-efficient, and support real-time processing [27], which enhances their reliability in suboptimal environments like hospitals and homecare settings.
©2024 IEEE. Personal use of this material is permitted. Permission from IEEE must be obtained for all other uses, in any current or future media, including reprinting/republishing this material for advertising or promotional purposes, creating new collective works, for resale or redistribution to servers or lists, or reuse of any copyrighted component of this work in other works. Published in IEEE Sensors Journal. Final version available at: https://doi.org/10.1109/JSEN.2024.3507951
arXiv:2511.21314v1 [eess.SY] 26 Nov 2025

2
Fig. 2: Proposed algorithm integrating VMD, Comb Filter, and Regression Model for improved MAE in vital measurements.
Previous works have focused on HR and BR measurements for both single subjects [28] and multiple subjects [14]–[17], tackling challenges in signal processing and subject localization. Our previous work [29] achieved improved HR and BR measurement accuracy compared to these works by combining multiple measurements using a least squares approach to improve noise performance. The mentioned works position radar at chest level to maximize Doppler information (DI), which refers to the frequency shifts c-
aused by the movement of objects relative to the radar, essential for determining their speed and direction. However, this setup limits the vital measurements to one subject per azimuth, as subjects behind others remain obscured from the radar’s field of view. To overcome this challenge, in this work we strategically adjust radar’s height and tilt to ensure that multiple subjects can be within its field of view. However, these adjustments result in an increased Mean Absolute Error (MAE) in vital m-
easurement. Therefore, as depicted in Fig. 2, in this work we present a unique phase signal extraction algorithm to address the challenge of increased MAE in multi-subject vital measurement scenario. As shown in Fig. 2, the proposed algorithm integrates Variational Mode Decomposition (VMD) to filter out noise, and a comb filter to eliminate breathing harmonics, thus enhancing the quality of the heartbeat signal. Moreover, to further reduce MAE, features from these refined signals are fed into a re-
gression model, enabling more accurate predictions of HR and BR. Additionally, we also present the hardware implementation of the proposed algorithm on a Field Programmable Gate Array (FPGA), which achieves a significant improvement over prior methods [30]–[32]. Our design offers 2.7x faster execution, reduces Look-Up Table (LUT) utilization by 18.4%, and accelerates performance by over 7400x compared to its software counterpart.
This article is organized as follows - Section II delves into the fundamentals of FMCW radar signal processing and then outlines the proposed algorithm for extracting HR and BR features from multiple subjects within the radar’s field of view. Section III discusses the hardware constraints and empirical trade-offs in detecting the vitals for an arbitrary number of subjects. Section IV discusses the system implementation and comparative performance analysis of the proposed algorithm performance, and-
 finally, Section V concludes the article.
II. FUNDAMENTALS OF FMCW RADAR AND PROPOSED
ALGORITHM FOR HR AND BR EXTRACTION
Fig. 1 depicts the operation principle of FMCW radars. The radar sends a chirp signal at light speed c, which echoes off objects in its path and is then received by the radar. For a linear chirp with amplitude Atx, initial frequency fmin, chirp slope Kc, round trip time delay for reception td and attenuation factor α, the transmitted signal ytx(t) and received signal yrx(t) are defined by Eq. 1 and 2, respectively.
ytx(t) = Atx cos(2πfmint + Kcπt2) (1)
yrx(t) = αytx(t − td) (2)
As shown in Fig. 1, a mixer combines TX and RX chirps from multiple transmitters and receivers, followed by low-pass filtering. The mixer’s output, the intermediate frequency (IF) signal, is expressed by Eq. 3. The distance R of the object from the radar is directly related to td as R = c×td
2 . Since R is significantly less than c in magnitude, td is typically in microseconds, and hence the higher order term of the IF signal in Eq. 3 can be neglected, resulting in Eq. 4
yIF LP F (t) = LPF ytx(t) × yrx(t) (3)
= A cos(2πfmintd + 2πKcttd − πKct2
d)
≈ A cos(2πfmintd + 2πKcttd) (4)
The radar data is observed over time and digitized for processing. The quadrature phase shifted IF signal is also generated, resulting in the complex IF signal with IF frequency fb = Kctd, and can be given by Eq. 5. The term φR is the phase change associated with an object at range R. If i number of objects are present, the transmitted chirp will bounce off each of these, and the resulting IF signal will be the summation of the individual IF signals corresponding to each object given by Eq. 6, whi-
ch forms the basis of our proposed algorithm.
yIF Quadrature(t) = A exp j( 2πfmintd + 2πKcttd
= A exp j 2πfbt + 4πR
λmax
= A exp j 2πfbt + φR (5)
yIF (t) =
X
i
yIF Quadraturei (t)
=
X
i
Ai exp j 2πfbi t + φRi (6)
Static reflectors within the subject’s range or angular bin can affect the Doppler signal and introduce a direct current (DC) offset [33]. This offset merges with the intermediate frequency (IF) signal, as represented in Eq. 6, potentially causing signal distortion and lowering the precision of vital sign measurements. Therefore, correcting the DC offset is an essential pre-processing step in the algorithm. To achieve this, we employed the non-linear least squares (NLLS) estimation technique to mi-
nimize the geometric distance [28], as it provides the highest accuracy for mmWave radars [33].
Fig. 2 depicts the proposed algorithm using a multi-receiver radar for accurate localization and estimation of HR and BR of multiple subjects. The following sections describe each step in the proposed algorithm in detail.

3
A. IF Signal Sampling for Different Azimuths Using Beamforming
Azimuth information cannot be retained with the onedimensional IF signal from Eq. 6. A multi-antenna radar, utilizing multiple TX-RX pairs and beamforming [14], produces a two-dimensional IF signal matrix. This setup enables determination of azimuth and range for each subject. The matrix is derived by summing IF signals from all TX-RX pairs (J in total) as given in Eq. 7,
yIF,k(t) =
J
X
j=1
yj
IF (t)wj
k (7)
This is a one-dimensional IF signal for each azimuth bin, where j and k correspond to the index of azimuth and antenna pair, respectively.
B. Range FFT to Determine IF Signal Frequency Components
It is crucial to determine the IF signal frequency components for further steps in the algorithm, and can be computed from its magnitude spectrum for each IF signal sampled at a specific azimuth. As the frequency of the IF signal corresponds to the range of an object, the magnitude spectrum will exhibit peaks at Ri = cfbi
2Kc for each object situated in front of the radar. The argument for the maximum of magnitude spectrum, YIF,k(f ) = F yIF,k(t) , gives the range R0k as defined
by Eq. 8, where yIF,k(t) is the IF signal obtained from the kth azimuth bin and R0k is the range of an object present in this azimuth bin. The Range FFT can be defined by Eq. 9. So, the peak samples of Range FFT are given by Eq. 10.
Rk
0= c
2Kc
× arg max F yIF,k(t) (8)
Yk r) = F yIF,k(t) f= 2KcR
c
(9)
Yk Rk
0 ) ≈ F A exp(j(2πf t))
f =fb
exp 4π[R0k]
−jλmax
(10)
Interestingly, owing to the limited penetration capabilities of chirps, the magnitude of each peak will decrease as the range increases for a specific azimuth.
C. Phase Signal Extraction From Temporal Range FFT Information
The Range FFT spectrum Yk retains critical phase information linked with the IF signal as seen in Eq. 10. Since human chest movement ranges from ∼1 to 12 mm for respiration and ∼0.01 to 0.5 mm for heartbeat [34], the subject’s range information undergoes slight temporal variations, as expressed in Eq. 11, where x(t) is the chest displacement signal. So, the IF signal of the kth azimuth bin is expressed as shown in Eq. 12. The temporal phase change is hence given by Eq. 13.
R(t) = R + x(t) (11)
yIF,k(t) =
J
X
j=1
I
X
i=1
Aj
i exp j 2πf j
bi t + φj
Ri wj
k
=
J
X
j=1
I
X
i=1
Aj
i exp j 2πf j
bi t + 4π Rj
i + xj
i (t)
λmax
wj
k
(12)
∆φ(t) = 4π
λmax
x(t) (13)
Given the millimeter-scale wavelengths of FMCW radars, even small oscillations in x(t) cause significant phase changes. As |∆φ(t)| ≤ π, displacements exceeding λmax
4 wrap into the phase. Thus, phase unwrapping is crucial for preserving accurate phase information [35]. The true phase can be recovered from the wrapped phase by simply calculating the phase difference between every two consecutive samples in the wrapped phase signal and then adding/subtracting multiples of 2π where the phase has been accumulated.
D. Range-Azimuth Bin Selection for Localizing Subjects
The next step is to localize the subjects to extract only the required unwrapped phase signal samples. In range-azimuth bins without objects or with stationary clutter, ∆φ(t) is negligible. However, ∆φ(t) exhibits high variance in bins with subjects, resulting in significant DI variance in the Range FFT. This variance distinctly separates the frequency distribution of DI in azimuth bins with subjects from those lacking them. Fig. 3 and 4 show the DI variance plotted against range and azimuth, resp-
ectively. We observe that the DI variance peaks at the range and azimuth bins corresponding to the subjects’ locations. As a result, localizing the subjects involves identifying these peaks in the DI variance across the rangeazimuth space. For each azimuth bin, the Range FFT provides the DI variance for each range bin over time, simplifying the two-dimensional peak-finding problem into several onedimensional peak-finding tasks. Ideally, the number of peaks should correspond to the number of subjec-
ts, provided there are no other significant sources of DI variance in the environment. In cluttered environments, additional peaks may appear due to environmental noise and other factors. However, the DI associated with these noise peaks is typically much lower than that of human subjects, making it possible to filter them out using simple thresholding techniques. Fig. 5 shows the RangeAzimuth map, where two prominent peaks corresponding to the subjects’ locations are clearly visible, along with s-
ome noise peaks that have much lower DI variance amplitudes.
E. HR/BR Features Extraction and Measurement
Once the required unwrapped phase signal samples from the range-azimuth bins of the subjects are extracted, the next step involves extracting HR and BR features from these signals. The typical BR of a human is in the range 3-36 breaths per minute (BRPM) and the typical HR is in the range 48120 beats per minute (BPM), respectively [28]. The chest displacement signal x(t) can be expressed as shown in Eq. 14, where xbr(t) and xhr(t) are the breathing and heartbeat chest displacement signals, and η(t)-
 is the noise term containing a low-frequency band noise term ηl(t) and a high-frequency band noise term ηh(t).
x(t) = xbr(t) + xhr(t) + η(t) (14)
During a brief observation window, breathing and heartbeat signals exhibit predominantly deterministic behavior [36]. Utilizing this, the unwrapped phase signal can be decomposed into its components, i.e., breathing signal, heartbeat signal, and

4
Fig. 3: DI Spread vs. Azimuth - The plots (a)-(d) show the distribution of DI amplitude across azimuth bins, and plot (e) shows variance vs. azimuth.
Fig. 4: DI Spread vs. Range - The plots (a)-(d) show the distribution of DI amplitude across range bins and plot (e) shows variance vs. range.
noise using VMD. VMD splits a real signal into a discrete number of sub-signals or modes μk with center frequencies ωk, where k = 1, 2, ..., K. The solution to the problem is the optimization of Eq. 15 [37]. With the assumption that x(t) purely contains four modes, the VMD solution can be optimized for {μk(t)} = {xbr(t), xhr(t), ηl(t), ηh(t)}.
L(μk, ωk, λ) = α
K
X
k=1
d dt
h
δ(t) + j
πt ∗ μk(t)
i
e−jωkt 2 2
+ x(t) −
K
X
k=1
μk (t)
2
2
+
*
λ(t), x(t) −
K
X
k=1
μk (t)
+
(15)
Fig. 5: Range-Azimuth map showing DI variance - Two distinct peaks (subjects) are visible along with noise peaks with low DI variance.
Fig. 6: VMD Output - (a) Low Frequency Noise (b) Extracted raw BR signal (c) Extracted raw HR signal (b) High Frequency Noise
Fig. 6 shows the VMD of a sample unwrapped phase signal into its four modes. Breathing harmonics can overlap with true heartbeat frequencies, overshadowing them due to the significantly lower magnitude of the heartbeat signal. Appropriate comb filters with notches at the breathing harmonics can recover the true heartbeat signal. Fig. 7 illustrates the frequency spectra of the extracted signal, showing pronounced peaks at the breathing frequency and its harmonics, which appear as peaks in the heart-
beat signals. While extracting the breathing frequency is straightforward, extracting the heartbeat frequency is challenging. The noise term η(t), which includes environmental noise, electronic noise, and motion artifacts, has a power similar to xhr(t) and can harshly affect the heartbeat frequency spectrum even after decomposing the unwrapped phase signal. We propose the following three methods to extract the HR/BR features. 1) Welch Spectrum
The Welch method for frequency estimation provides improved frequency resolution, reduced spectral leakage, and ro

5
Fig. 7: Frequency spectrum of (a) unwrapped phase signal (b) breathing signal (c) heartbeat signal (d) filtered heartbeat signal, received over a 25.6 s observation period
bustness to noise compared to traditional spectrum estimation techniques [38], [39]. While the breathing signal predominantly has one major peak, the heartbeat signal may feature multiple peaks. Thus, the highest peak for the breathing signal and a weighted average of l highest peaks for the heartbeat signal and comb filtered heartbeat signal are taken as the Welch frequency estimates - brw, hrw, and hrwc, respectively. 2) Auto-correlation
Auto-correlation identifies consistent temporal patterns and reduces transient noise, effectively estimating the time period of the original signal. By taking the inverse of this period, we obtain auto-correlation frequency estimates - bra for the breathing signal, hra for the heartbeat signal, and hrac for the comb filtered heartbeat signal. 3) Peak Detection
Respiration and heartbeat cycles are characterized by peaks in their respective signals, mitigating low-frequency noise. The number of peaks in an observation window, divided by the total observation time, provides the peak detection frequency estimates brp, hrp, and hrpc for the breathing signal, heartbeat signal, and comb filtered heartbeat signal, respectively.
F. Regression Model Training for HR/BR Estimation
The three breathing frequency estimates brw, bra and brp, and the six heartbeat frequency estimates hrw, hra, hrp, hrwc, hrac, hrpc can be used as features to train a regression model against ground truth breathing rates and heart rates. Given the limitations in interpreting other metrics [40] and the common use of R2 score (coefficient of determination) and M AE in regression analysis for physiological measurements using radars [41]–[44], we selected these two metrics for evaluation, given by Eq.-
 16 and Eq. 17, respectively,
R2 = 1 −
X
i
(zi − zˆi)2 X
i
(zi − z ̄i)2 (16)
M AE = 1
n
n
X
i=1
|zi − zˆi| (17)
where zi is the actual label, zˆi is the predicted label and z ̄i is the mean of the actual labels. R2 score measures the
Fig. 8: System Setup for measuring HR and BR
linearity of the feature variables against the labels. A higher R2 score indicates that the features can more effectively explain or predict the labels than a model with a lower R2 score. M AE can measure how well the model predicts the target variable. A lower MAE indicates better model performance.
III. SYSTEM CONFIGURATION AND CONSTRAINTS
This section discusses the system setup for estimating HR and BR of a subject, along with the radar configuration. The radar configuration imposes inherent hardware limitations on subject detection, which are discussed next. After localizing the subjects, estimating HR and BR faces some empirical limitations, as discussed in the consequent section.
A. System Setup and Configuration
Fig. 8 shows the overall system setup to measure HR and BR of a subject, which includes the FMCW Radar IWR1642BOOST [45] and data capture evaluation module DCA1000EVM [46] from Texas Instruments (TI). TI’s mmWave Studio [47] software facilitates communication between radar and a PC, allows custom configuration of system and chirp parameters, and collects data for processing. Beurer PO 30 Oximeter [48] and Frontier X2 Chest Strap [49] are used to measure the subjects’ ground truth HR and BR. Additi-
onally, the subjects manually counted their breaths throughout the experiments for verification.
The proposed radar data processing pipeline is initially developed using MATLAB R2024a and Python v3.12.0. It is then successfully implemented on the ZedBoard FPGA [50] hardware platform, serving as a proof of concept for a portable and seamless integration solution. Table I shows our radar system configuration.
Based on this configuration, a slow time sampling frequency (1
Tc ) of 20 Hz allows for measuring chest displacement frequencies up to 10 Hz, well above typical human BR. The chosen number of chirps, M, sets the frequency resolution (1
MTc ) at 0.039 Hz, or 2.3 breaths per minute, an acceptable minimum for BR.

6
TABLE I: Radar Module Configuration
Radar Parameter Value Transmitters 2 Receivers 4 Start Frequency, fmin 77 GHz Stop Frequency, fmax 79.982 GHz RF Bandwidth, BW 2998.2 MHz Chirp Duration, Tm 100 μs Chirp Period, Tc 50 ms Chirp Slope, Kc 29.982 MHz/μs Number of Chirps, M 512 ADC Samples, N 512 ADC Sampling Frequency, fadc 6000 ksps
B. Hardware Limitations on Subject Detection
Given a specific radar configuration, several inherent limitations affecting subject detection come into effect, as outlined in the following subsections.
1) Maximum Detectable Range
Maximum detectable range Rmax is influenced by the radar’s bandwidth BW , chirp duration Tm, and sampling frequency fadc and can be calculated using Eq. 18. However, this range is constrained by frequencies aliased beyond half of the ADC sampling frequency, as per the Nyquist-Shannon sampling theorem [51]. Thus, the constrained maximum detectable range Rmax is given by Eq. 19.
Rmax = c Tm
2 (18)
R′
max = Rmax
fadc
2BW (19)
For the radar’s configuration in Table I, Rmax is calculated to be 15 m, beyond which a subject will not be detected.
2) Range Resolution Limit
Equation 20 gives the range resolution R′
min, which is limited by the number of ADC samples N .
R′
min = R′max
N/2 (20)
For the radar’s configuration given in Table I, R′
min is calculated to be 0.058 m. This is well within the accepted limit as the depth of a human body is much greater than the range resolution, ensuring that two subjects cannot be closer to each other than the range resolution. It also ensures that no static reflectors are present in the same bin, with static body parts being the sole potential source of DC offset contribution, which is negligible.
3) Angle Resolution Limit
The radar’s angle resolution depends on the number of TX-RX pairs used. Increasing this resolution distinguishes IF signals in the same range and nearby azimuth bins. In Single-Input-Multiple-Output (SIMO) radar, improving angle resolution often means doubling the receive antennas. Multiple-Input-Multiple-Output (MIMO) radar and techniques like Time-Division Multiplexing offer ways to further enhance resolution [14]. Our radar is a MIMO radar, and its configuration, as shown in Table I, provides a-
 15° angle resolution. Subjects with smaller angular separations are treated as a single entity. This limits subject density in crowded environments, crucial for accurately detecting subjects.
Fig. 9: Proposed setup with radar at an elevated height
4) Minimum Elevation for Line-of-Sight Measurement in Multi Subject Scenario
Millimeter waves have restricted penetration through human body [52]. When radar is positioned at the chest level, as seen in prior works [14]–[17], [29], it is challenging to detect signals from subjects obscured by the first subject in the azimuth bin. To overcome this, we propose to elevate the radar and tilt it towards the subjects as shown in Fig. 9. The minimum elevation hi required for unobstructed line of sight to the ith subject can be calculated using Eq. 21.
hi =
(
max lj Ri
Ri−Rj | i > j ≥ 1 i > 1
0 i = 1 (21)
Since this must hold for all i = 1, ...N , the minimum elevation is given by hmin = max(h1, h2, ...hN ). This allows the detection of obscured subjects but imposes empirical limitations on HR and BR estimation, discussed in the following subsection.
C. Empirical Limits of the proposed HR and BR Estimation Algorithm
In the previous subsection, we discussed hardware limitations specifically affecting subject detection. Post-subject detection, practical HR and BR estimation are impacted by environmental noise, multi-path reflection, and increased SNR [53]. We empirically establish algorithm thresholds for precise HR and BR estimation, defining it as BR MAE > 2. Details of these experiments are outlined below. 1) Subject Distance Variation
Fig. 10 shows the experimental setup to examine how subject distance variation affects HR and BR estimation, with the subject seated at distances from 1 to 7 m. Analysis of the phase signal plots and their frequency spectra shown in Fig. 10(a)-(d) shows increasing distortion with distance. The breathing peak becomes harder to distinguish amidst lowfrequency noise, especially at 7 m with BR MAE = 2.34, as shown in Table II. Notably, high-frequency noise, particularly in the heartbeat range, introdu-
ces unnecessary peaks in the phase signal, impacting the accuracy of HR estimation. 2) Subject Azimuth Variation
Fig. 11 shows the experimental scenario to study subject azimuth variation’s effect on HR/BR estimation. The subject was seated at a fixed distance of 1 m, but at azimuth increments of ±20° from 0° to ±60°. It is observed from Fig. 11(a)-(d) that the cleanest phase signal is captured when the subject

7
Fig. 10: Impact of subject distance variation on (a)-(b) phase signal and (c)-(d) frequency spectrum
Fig. 11: Impact of subject azimuth variation on (a)-(b) phase signal and (c)-(d) frequency spectrum
was at 0°. The signal spectrum becomes noisier as the subject azimuth increases. At higher azimuths, such as ±60°, the baseline wander and mid-frequency noise in the signal becomes very evident, significantly affecting phase signal quality and resulting in BR MAE = 3.39, as shown in Table II. 3) Subject Posture Variation
As shown in Fig. 12, subjects are made to sit, stand, and stand against a wall, across experiments, at a consistent distance of 1 m from the radar. As seen in Fig. 12(a)-(f) the cleanest phase signals are obtained when the subject is seated. In contrast, standing without support causes slight body movements that distort the phase signal significantly, resulting in the worst BR MAE = 4.44 as shown in Table II. However, standing with support increases stability, yielding cleaner phase signals, thoug-
h not as clean as sitting. 4) Radar Elevation Variation
As discussed in Subsection III-B4, an elevated radar system is crucial for unobstructed HR and BR measurement of multiple subjects. Fig. 13 illustrates the experiment to examine the trade-off between radar elevation and HR and BR measurement accuracy. The subject is seated 1 m away from the radar. As the radar’s elevation increases, the line-ofsight distance from the subject increases and the angle with the chest wall becomes steeper, both leading to a significant decrease in SNR and phase signal -
quality. As seen in Fig. 13(a)-(d), this effect is particularly noticeable when comparing phase signal quality between radar positions at chest level and
Fig. 12: Impact of subject posture variation on (a)-(c) phase signal and (d)-(f) frequency spectrum
Fig. 13: Impact of radar elevation variation on (a)-(b) phase signal and (c)-(d) frequency spectrum
20 cm above chest level. At 20 cm elevation, the phase signal shows significant white noise, due to the radar picking up additional environmental interference not focused on the chest wall, resulting in BR MAE = 3.65, as shown in Table II.
Fig. 14: Impact of radar tilt variation on (a)-(b) phase signal and (c)-(d) frequency spectrum
5) Radar Tilt Variation
Fig. 14 shows the experimental scenario to study the tradeoff between radar tilt and HR/BR measurement accuracy. The subject is seated at a fixed distance of 1 m, with radar tilt

8
TABLE II: MAE of BR/HR Welch Estimate Against Experiment Variables
Expt
Variable Value BR MAE
(BRPM)
HR MAE (BPM) 1 0.51 6.80 2 0.47 7.51 Subject 3 0.87 8.40 Distance 4 1.14 14.34 (m) 5 0.94 13.41 6 1.31 16.53 7 2.34 17.89 0 0.78 5.36 Subject Azimuth ±20 1.28 7.96 (°) ±40 1.24 12.13 ±60 3.39 11.90 Sitting 0.68 6.78 Subject Posture Standing against wall 1.45 10.81 Standing 4.44 15.33 0 0.53 5.33 Radar Elevation 10 0.93 7.98 (cm) 15 1.75 11.39 20 3.65 13.77 0 0.71 6.33 Radar Tilt 10 0.89 10.47 (°) 20 1.75 10.43 30 2.52 14.67
ranging from 0° to 30° in 10° increments. As the radar tilt increases, the angle between the radar and the chest wall of the subject increases. Similar to Subsection III-C4, as the radar faces further away from the chest wall, the effect of environmental white noise on the extracted phase signal increases. As seen in Fig. 14(a)-(d), the cleanest phase signal is obtained when the radar tilt is 0°, i.e., directly facing the chest wall of the subject. At 30° tilt, white noise is significant and this -
drastically affects the SNR of the phase signal, resulting in BR MAE = 2.52, as shown in Table II. Table II summarizes the results of the above-mentioned experiments. For each experimental variable, the results show an increasing trend in the MAE measured for the Welch estimate of BR and HR, and we have concluded the experiments in each case at the point where BR MAE > 2.
IV. SYSTEM IMPLEMENTATION AND PROPOSED
ALGORITHM PERFORMANCE
In this section, we begin by setting up a practical experimental setup, considering the constraints and trade-offs discussed in Section III, to study the algorithm’s performance. We then discuss the software implementation followed by proof-ofconcept hardware implementation on ZedBoard FPGA and evaluate our algorithm’s performance against prior works.
A. Experimental Setup for Evaluating the Proposed Algorithms
Fig. 15(a) illustrates the experimental setup used to evaluate the proposed algorithm in realistic scenarios. To mimic realworld situations, the following considerations were made:
1) Range: The empirical range of the algorithm limits the positioning of subjects to a maximum distance of 6 m, as discussed in Subsection III-C1.
2) Separation between subjects: The hardware limits the separation between subjects to a minimum of 15°, as
Fig. 15: (a) Experimental setup (b)-(f) phase unwrapped signals of corresponding subjects and (g) Range-Azimuth map
discussed in Subsection III-B3. 3) Elevation for Line-of-Sight: To address the limitation of subjects being obscured by others, the radar is elevated to a height of 2 meters, as discussed in Subsection III-B4. 4) Radar Tilt: With the radar elevated, we strategically tilt it towards the center of the subjects’ arrangement to mitigate elevation effects discussed in Subsection III-C4, minimizing inaccuracies.
5) Arrangement for High Density: To mimic high subject density seen in practical scenarios, subjects are arranged in a zig-zag pattern. 6) Subject Posture: Three subjects were seated, and two stood without wall support to reflect common postures in real-world scenarios.
Fig. 15(b)-(f) demonstrates that seated individuals produced cleaner signals, similar to observations in Subsection III-C3. Additionally, the farther the subjects were from the center, the more the radar tilt and distance affected signal quality, leading to more distorted signals. Fig. 15(g) displays the corresponding Range-Azimuth map, where five subjects arranged in a zig-zag pattern, are clearly distinguishable.
The following subsections show how our algorithm performed in these practical scenarios for estimating HR and BR of the subjects and provide a comparison with prior works.

9
TABLE III: HR/BR Prediction Performance of Various Regression Models
Model R2 (BR, HR) MAE (BR, HR) Linear regressor (0.95, 0.22) (0.98, 9.13) Random forest regressor (0.98, 0.72) (0.39, 3.64) Support vector regressor (0.96, 0.16) (1.00, 9.54) K-nearest neighbours regressor (0.95, 0.44) (0.83, 5.98)
Fig. 16: FPGA based signal processing flow
B. Software Implementation of the Proposed Algorithms
1) Implementation
As per Sections II-A to II-E, MATLAB is used to extract HR and BR features of subjects which are subsequently used to estimate the final HR and BR using regression models trained in Python. Fig. 15 shows the practical arrangement of subjects from which raw data samples were collected to facilitate the training of regression models. A dataset comprising around 400 samples of HR and BR features was created by processing this data in MATLAB. The ground truth (BR, HR) label pairs had a mean and standa-
rd deviation of (18.42±7.38, 91.98±9.88). Regression models such as linear regressor (LR), random forest regressor (RF), support vector regressor (SVR), and K-nearest neighbors regressor (KNN) were used to learn the data. To evaluate the performance of the models, we are using two metrics - R2 score and MAE. These models were trained on 80% of the dataset to maximize the R2 score and minimize the MAE. 2) Results
The regression model performance was tested on the remaining 20% of the HR/BR features dataset, with results summarized in Table III. The RF regressor showed the best performance across all metrics for both BR and HR. RF regressors use an ensemble of decision trees, averaging their predictions to produce a final prediction that is more accurate and resilient to noise and outliers compared to a single decision tree. All regressors performed very well for BR prediction, with an MAE of less than one -
breath, mainly because the breathing signal and its features are less affected by noise due to larger chest displacements. Table IV summarizes the performance of the RF regressor in estimating HR and BR across all experiment variables. The MAE for both HR and BR estimation increases as each variable’s value increases.S
C. FPGA Implementation of the Proposed Algorithms
1) Implementation
Fig. 16 outlines the design process from the acquisition of raw radar data to HR/BR measurement, with details of each step provided below.
(a) Data Pre-processing - Fig. 17 illustrates FPGA-based digitization of the IF signal from the DCA1000EVM
TABLE IV: MAE of BR/HR Random Forest Regression Model Estimate Against Experiment Variables
Expt
Variable Value BR MAE
(BRPM)
HR MAE (BPM) 1 0.22 2.11 2 0.27 2.19 Subject 3 0.33 3.24 Distance 4 0.48 5.38 (m) 5 0.69 8.75 6 0.85 10.39 7 1.43 12.26 0 0.31 2.72 Subject Azimuth ±20 0.34 3.01 (°) ±40 0.54 4.97 ±60 0.89 8.14 Sitting 0.20 2.45 Subject Posture Standing against wall 0.47 4.81 Standing 1.11 9.28 0 0.24 2.73 Radar Elevation 10 0.41 3.82 (cm) 15 0.41 6.57 20 0.69 10.08 0 0.27 2.31 Radar Tilt 10 0.32 5.93 (°) 20 0.85 9.72 30 1.47 9.57
Fig. 17: Radar Data Preprocessing Flow
board. We use 32-bit fixed-point representation to efficiently convert the analog signal to digital. Additionally, we pre-process the data to reduce sample size, addressing memory limitations and resource use. This processed data includes in-phase and quadrature-phase signals, and is given as input to Range FFT Module. (b) Range FFT Module - Fig. 18 shows a system-level overview of the RFFT module. The Range FFT (RFFT) module provides insights into the range or distance of subjects in the radar fi-
eld and identifies the most appropriate index to target for further processing, by executing on the pre-processed digital data [54]. The incoming IF signal from the radar is first stored in memory within the architecture. Then, the FFT operation is executed on this signal using the Xilinx FFT IP [55] block within the FPGA design. This IP block is a pre-designed module that accelerates FFT computations, taking advantage of the FPGA’s parallel processing capabilities [55]. The power spectral density-
 (PSD) of X and Range of the subject is calculated using Eq. 22 and 23, respectively.
Γ[k] = Re(X2[k]) + Im(X2[k]) (22)
R= 1
2× c
BW × Tm × fb = K × fb (23)
The PSD aids in identifying significant frequency components, and the frequency index of the peak amplitude of Γ, denoted by kˆ, is computed to estimate the peak frequency fb, with which the range of the object is estimated based on the known characteristics of the radar system.

10
Fig. 18: The architectural block diagram of the proposed RFFT module
Fig. 19: Phase Unwrapping Module Architecture
(c) Phase Extraction Module - At the range computed by the RFFT module, the phase information is extracted from X, which contains chest displacement information. The CORDIC (coordinate rotation digital computer) algorithm implemented via the Xilinx IP block [55] is used to extract phase information by efficiently computing trigonometric functions. The phase information is stored in a Block RAM (BRAM) to ensure highspeed and efficient storage, and is input to the Phrase Unwrapping Module. The metho-
d is customized for our system, involving specific configurations like setting the rotation angle, choosing appropriate data representation, and optimizing resource efficiency. (d) Phase Unwrapping Module - Fig. 19 shows the various components of unwrapping module architecture [56]. The phase information is fetched sample-by-sample from BRAM into an accumulator. A dedicated register retains the previous phase value, serving as a reference for comparing consecutive phase samples. The differentiatio-
n circuitry computes the rate of change between these samples by taking inputs from the previous value register and the current phase sample. The comparator evaluates this difference, checking whether it falls within the range of −π to π, failing which, adjustments are made to keep the phase values within the range of −π to π. This adjusted value is saved to the output register and fed back into the accumulator for continuous comparison until the difference between consecutive samples is less than-
 π. (e) Phase FFT and HR/BR Estimation Module - The output of the phase unwrapping module contains HR/BR information but may include noise and additional frequencies. The Phase FFT (pFFT) module computes the spectrum of the unwrapped phase signal. Next, HR/BR
TABLE V: Results for HR/BR Estimation Using ZedBoard FPGA
Result 1 Result 2 Result 3 Result 4 True HR (BPM) 87 105 104 77 Estimated HR (BPM) 82 101 98 73 True BR (BRPM) 18 21 12 10 Estimated BR (BRPM) 14 23 14 13
TABLE VI: Resources and latency comparison of FPGA based signal processing of radar signals.
This work [30] [31] [32] Type of radar FMCW Pulse CMOS impulse FMCW LUT 8889 168,619 207,267 10891 FF 13805 60,547 6535 6365 DSP 24 1,540 560 20 Clock 300 MHz 320 MHz 318 MHz 300 MHz Execution time 0.815ms - 35.4ms 3ms
is estimated by analyzing peaks of the spectrum. To conserve hardware resources, we skip FIR and IIR filters, opting to divide the FFT into bins and scan corresponding HR and BR bands. The normalized peak index in these bands multiplied by the sampling frequency gives the corresponding HR and BR.
2) Results
All the modules mentioned in Subsection IV-C1 have been integrated to implement the proposed algorithm on ZedBoard FPGA. Fig. 20 shows the HDL Simulation result for HR and BR estimation on Xilinx Vivado software. Fig. 21 shows the implementation results visualized on a Integrated Logic analyzer (ILA). Our extended investigation documented the power consumption outcomes, with reports showing a total dynamic power of 0.333W and a total on-chip power of 0.443W. Table V shows the results that demonstr-
ate effective real-time HR/BR measurement for single subject scenarios. We achieved much faster execution times for the ZedBoard FPGA based processing on 128 chirp data (≈ 7402 total acceleration) than our software based processing on 512 chirp data. Table VI presents a comparative analysis of hardware resource usage and latency against existing literature for our FPGAbased processing. Our system shows superior performance in
Fig. 20: HDL simulation results for HR and BR estimation in Xilinx Vivado

11
TABLE VII: Comparison of HR/BR Measurement Performance
This Work (MATLAB+Python)
This Work
(FPGA) [5] [7] [9] [8] [10] [11] [12] [13] [13] [28] [15] [16] [17] [14] [34]
Type of radar FMCW FMCW CW UWB CW CW UWB UWB UWB UWB FMCW FMCW FMCW FMCW FMCW FMCW FMCW Max no. of subjects 5 1 1 1 1 1 1 1 1 1 1 1 2 2 3 2 1 Max range reported (m) 6 6 1.5 3.5 1 2 0.8 0.55 2.76 2.5 2.5 2.14 0.5 0.8 2.6 4.3 1.5 Range resolution (m) 0.058 0.058 - - - - - - 0.36 - - 0.033 - 0.043 - 0.043 0.94 Angle resolution (°) 15 - - - - - - - - - - - 30 17.5 - 15 BR MAE (BRPM) 0.39 2.75 2.05 - - - - - - 0.46 0.48 1.10 1.29 - 1.65 - HR MAE (BPM) 3.64 4.75 5.06 2.29 - 0.46 1.56 - - 1.56 1.56 18.40-
 4.60 - 4.00 - 
Fig. 21: Hardware implementation results visualized on ILA
execution times and Look-Up Table (LUT) utilization, though with a slight increase in flip-flop (FF) and DSP block usage due to parallelism techniques.
D. Comparison with Existing Works
Table VII provides an extensive comparison of our work both software and FPGA-based processing against prominent works in literature for endpoint results on HR/BR measurement performance. The HR/BR MAE of the other works that were not available was estimated using the accuracy reported and the mean HR/BR ground truth of our dataset. Our implementation achieves remarkable performance for estimating HR/BR, tolerable for up to subject distances of 6 m. Our BR MAE of 0.39 is the best among all other w-
orks. While our HR MAE is comparable with leading works, the superior BR MAE offers a balanced and advantageous trade-off.
V. CONCLUSION
This work proposes an algorithm with a unique signal processing pipeline for simultaneous multi-subject HR and BR estimation using mmWave FMCW radar. Unlike prior works, it overcomes the limitation of measuring vital signs from only one subject per azimuth. It offers detailed insights into tradeoffs involving radar position, tilt, subject posture, range, and azimuth when the radar and subject’s chest are at different heights. The algorithm accurately measures HR and BR for up to five subjects simu-
ltaneously within a 6 m range, outperforming prior works. The software implementation using MATLAB and Python achieved a best-in-class BR MAE of 0.39, and HR MAE of 3.64. Additionally, we have developed an FPGA-based system, demonstrating a fully hardware-based, portable solution. This FPGA implementation executes 2.7 times faster, uses 18.4% fewer LUTs, and provides over 7400 times acceleration compared to its software counterpart, highlighting its potential as a superior alternative to tradition-
al CPU or general-purpose solutions.
ACKNOWLEDGEMENT
The authors would like to acknowledge the Chips to Startup (C2S) program, Ministry of Electronics and Information Technology (MeitY), Govt. of India, IHub Mobility, IIIT Hyderabad, Kohli Center on Intelligent Systems (KCIS), IIIT Hyderabad, and IHub Anubhuti-IIIT Delhi Foundation for supporting this research.
REFERENCES
[1] D. Biswas, N. Simo ̃es-Capela, C. Van Hoof, and N. Van Helleputte, “Heart ABC Rate Estimation From Wrist-Worn Photoplethysmography: A Review,” IEEE Sensors Journal, vol. 19, no. 16, pp. 6560–6570, 2019. [2] E. Spano`, S. Di Pascoli, and G. Iannaccone, “Low-Power Wearable ECG Monitoring System for Multiple-Patient Remote Monitoring,” IEEE Sensors Journal, vol. 16, no. 13, pp. 5452–5462, 2016. [3] Y. Retory, P. Niedzialkowski, C. de Picciotto, M. Bonay, and M. Petitjean, “New Respiratory Inducti-
ve Plethysmography (RIP) Method for Evaluating Ventilatory Adaptation during Mild Physical Activities,” PLoS ONE, vol. 11, no. 3, p. e0151983, 2016. [4] S. Sivaramakrishnan, R. Rajamani, and B. D. Johnson, “Dynamic Model Inversion Techniques for Breath-by-Breath Measurement of Carbon Dioxide from Low Bandwidth Sensors,” IEEE Sensors Journal, vol. 10, no. 10, pp. 1637–1646, 2010. [5] N. Du, K. Liu, L. Ge, and J. Zhang, “ApneaRadar: A 24GHz RadarBased Contactless Sleep Apnea Detection System,” in 20-
17 2nd International Conference on Frontiers of Sensors Technologies (ICFST), 2017, pp. 372–376. [6] B. Y. Su, K. C. Ho, M. J. Rantz, and M. Skubic, “Doppler Radar Fall Activity Detection Using the Wavelet Transform,” IEEE Transactions on Biomedical Engineering, vol. 62, no. 3, pp. 865–875, 2015. [7] I. Immoreev and T.-H. Tao, “UWB radar for patient monitoring,” IEEE Aerospace and Electronic Systems Magazine, vol. 23, no. 11, pp. 11–18, 2008. [8] M. Mercuri, Y.-H. Liu, I. Lorato, T. Torfs, A. Bour-
doux, and C. Van Hoof, “Frequency-Tracking CW Doppler Radar Solving SmallAngle Approximation and Null Point Issues in Non-Contact Vital Signs Monitoring,” IEEE Transactions on Biomedical Circuits and Systems, vol. 11, no. 3, pp. 671–680, 2017. [9] F.-K. Wang, T.-S. Horng, K.-C. Peng, J.-K. Jau, J.-Y. Li, and C.-C. Chen, “Single-Antenna Doppler Radars Using Self and Mutual Injection Locking for Vital Sign Detection With Random Body Movement Cancellation,” IEEE Transactions on Microwave Theory and T-
echniques, vol. 59, no. 12, pp. 3577–3587, 2011. [10] L. Ren, H. Wang, K. Naishadham, O. Kilic, and A. E. Fathy, “PhaseBased Methods for Heart Rate Detection Using UWB Impulse Doppler Radar,” IEEE Transactions on Microwave Theory and Techniques, vol. 64, no. 10, pp. 3319–3331, 2016. [11] K.-K. Shyu, L.-J. Chiu, P.-L. Lee, T.-H. Tung, and S.-H. Yang, “Detection of Breathing and Heart Rates in UWB Radar Sensor Data Using FVPIEF-Based Two-Layer EEMD,” IEEE Sensors Journal, vol. 19, no. 2, pp. 774–784-
, 2019. [12] H. Shen, C. Xu, Y. Yang, L. Sun, Z. Cai, L. Bai, E. Clancy, and X. Huang, “Respiration and Heartbeat Rates Measurement Based on Autocorrelation Using IR-UWB Radar,” IEEE Transactions on Circuits and Systems II: Express Briefs, vol. 65, no. 10, pp. 1470–1474, 2018. [13] D. Wang, S. Yoo, and S. H. Cho, “Experimental Comparison of IR-UWB Radar and FMCW Radar for Vital Signs,” Sensors, vol. 20, no. 22, 2020. [14] A. Ahmad, J. C. Roh, D. Wang, and A. Dubey, “Vital signs monitoring of multi-
ple people using a FMCW millimeter-wave sensor,” in 2018 IEEE Radar Conference (RadarConf), 2018, pp. 1450–1455.
[15] S. M. M. Islam, N. Motoyama, S. Pacheco, and V. M. Lubecke, “NonContact Vital Signs Monitoring for Multiple Subjects Using a Millimeter

12
Wave FMCW Automotive Radar,” in 2020 IEEE/MTT-S International Microwave Symposium (IMS), 2020, pp. 783–786.
[16] W. Wang, Y. Wang, M. Zhou, and W. Nie, “A Novel Vital Sign Sensing Algorithm for Multiple People Detection Based on FMCW Radar,” in 2020 IEEE Asia-Pacific Microwave Conference (APMC), 2020, pp. 1104–1106. [17] H. Lee, B.-H. Kim, J.-K. Park, S. W. Kim, and J.-G. Yook, “A Resolution Enhancement Technique for Remote Monitoring of the Vital Signs of Multiple Subjects Using a 24 Ghz Bandwidth-Limited FMCW Radar,” IEEE Access, vol. 8, pp. 1240–1248, 2020. [18] Y. Pratap Singh, A. Gupta, D. Chaudhar-
y, M. Wajid, A. Srivastava, and P. Mahajan, “Hardware Deployable Edge AI Solution for Posture Classification Using mmWave Radar and Low- Computational Machine Learning Model,” IEEE Sensors Journal, vol. 24, no. 16, pp. 26 83626 844, 2024. [19] P. Mahajan, D. Chaudhary, M. Khan, M. H. Khan, M. Wajid, and A. Srivastava, “A Point Cloud-Based Non-Intrusive Approach for Human Posture Classification by Utilizing 77 GHz FMCW Radar and Deep Learning Models,” in 2024 IEEE International Symposium on Circuit-
s and Systems (ISCAS), 2024, pp. 1–5.
[20] A. Mohan, H. Meena, and A. Srivastava, “Automatic in-vehicle occupancy detection using low-cost mm-wave radar,” in Proceedings of the 40th IEEE Conference on Robotics and Automation (ICRA@40), 2024, pp. 1–2, in press. [21] M. He, Y. Nian, and Y. Gong, “Novel signal processing method for vital sign monitoring using FMCW radar,” Biomedical Signal Processing and Control, vol. 33, pp. 335–345, 2017. [22] K. Mostov, E. Liptsen, and R. Boutchko, “Medical applications of shortwave FM radar: Remote m-
onitoring of cardiac and respiratory motion,” Medical physics, vol. 37, no. 3, pp. 1332–1338, 2010. [23] E. Pasqua, “UWB FMCW Radar for Concealed Weapon Detection: RF Front-end Development,” M.A. thesis, Delft University of Technology, Delft, Netherlands, 2012. [24] S. Wang, A. Pohl, T. Jaeschke, M. Czaplik, M. Ko ̈ny, S. Leonhardt, and N. Pohl, “A novel ultra-wideband 80 GHz FMCW radar system for contactless monitoring of vital signs,” in 2015 37th Annual International Conference of the IEEE Engi-
neering in Medicine and Biology Society (EMBC), 2015, pp. 4978–4981. [25] Ø. Aardal, Y. Paichard, S. Brovoll, T. Berger, T. S. Lande, and S.E. Hamran, “Physical working principles of medical radar,” IEEE Transactions on Biomedical Engineering, vol. 60, no. 4, pp. 1142–1149, 2012. [26] L. Anitori, A. de Jong, and F. Nennie, “FMCW radar for life-sign detection,” in 2009 IEEE Radar Conference, 2009, pp. 1–6. [27] D. Zhang, M. Kurata, and T. Inaba, “FMCW radar for small displacement detection of vital-
 signal using projection matrix method,” International Journal of Antennas and Propagation, vol. 2013, no. 1, p. 571986, 2013. [28] M. Alizadeh, G. Shaker, J. C. M. D. Almeida, P. P. Morita, and S. SafaviNaeini, “Remote Monitoring of Human Vital Signs Using mm-Wave FMCW Radar,” IEEE Access, vol. 7, pp. 54 958–54 968, 2019. [29] J. Benny, P. Mahajan, S. S. Chatterjee, M. Wajid, and A. Srivastava, “Design and Measurements of mmWave FMCW Radar Based NonContact Multi-Patient Heart Rate and Breath Rate-
 Monitoring System,” in 2023 IEEE Biomedical Circuits and Systems Conference (BioCAS), 2023, pp. 1–5. [30] M.-L. Tudose, A. Anghel, R. Cacoveanu, and M. Datcu, “Pulse Radar with Field-Programmable Gate Array Range Compression for Real Time Displacement and Vibration Monitoring,” Sensors, vol. 19, no. 1, 2019. [31] K.-C. Tsao, L. Lee, T.-S. Chu, and Y.-H. Huang, “A Two-Stage Reconstruction Processor for Human Detection in Compressive Sensing CMOS Radar,” Sensors, vol. 18, no. 4, 2018. [32] J. Heo, -
Y. Jung, S. Lee, and Y. Jung, “FPGA Implementation of an Efficient FFT Processor for FMCW Radar Signal Processing,” Sensors, vol. 21, no. 19, 2021. [33] M. Mercuri, T. Torfs, M. Rykunov, S. Laureti, M. Ricci, and F. Crupi, “Analysis of Signal Processing Methods to Reject the DC Offset Contribution of Static Reflectors in FMCW Radar-Based Vital Signs Monitoring,” Sensors, vol. 22, no. 24, 2022. [34] J.-M. Mun ̃oz-Ferreras, J. Wang, Z. Peng, R. G ́omez-Garc ́ıa, and C. Li, “From doppler to fmcw rada-
rs for non-contact vital-sign monitoring,” in 2018 2nd URSI Atlantic Radio Science Meeting (AT-RASC), 2018, pp. 1–4. [35] M. Alizadeh, G. Shaker, and S. Safavi-Naeini, “Experimental study on the phase analysis of FMCW radar for vital signs detection,” in 2019 13th European Conference on Antennas and Propagation (EuCAP), 2019, pp. 1–4.
[36] M. Gomes, A. Souza, H. Guimaraes, and L. Aguirre, “Investigation of determinism in heart rate variability, year=2000,” Chaos: An Interdisciplinary Journal of Nonlinear Science, vol. 10, no. 2, pp. 398–410.
[37] K. Dragomiretskiy and D. Zosso, “Variational Mode Decomposition,” IEEE Transactions on Signal Processing, vol. 62, no. 3, pp. 531–544, 2014. [38] A. V. Oppenheim and R. W. Schafer, Discrete-Time Signal Processing. Hoboken, NJ, USA: Pearson, 2010.
[39] M. H. Hayes, Statistical Digital Signal Processing and Modeling, 1st ed. USA: John Wiley & Sons, Inc., 1996. [40] D. Chicco, M. J. Warrens, and G. Jurman, “The coefficient of determination R-squared is more informative than SMAPE, MAE, MAPE, MSE and RMSE in regression analysis evaluation,” Peerj computer science, vol. 7, p. e623, 2021. [41] D. Kim, J. Choi, J. Yoon, S. Cheon, and B. Kim, “HeartBeatNet: Enhancing Fast and Accurate Heart Rate Estimation With FMCW Radar and Lightweight Deep Lear-
ning,” IEEE Sensors Letters, vol. 8, no. 4, pp. 1–4, 2024. [42] S. Iyer, L. Zhao, M. P. Mohan, J. Jimeno, M. Y. Siyal, A. Alphones, and M. F. Karim, “mm-Wave Radar-Based Vital Signs Monitoring and Arrhythmia Detection Using Machine Learning,” Sensors, vol. 22, no. 9, 2022. [43] J. Zhang, R. Hu, L. Chen, Y. Gao, and D.-D. Wu, “Contactless vital signs monitoring in macaques using a mm-wave FMCW radar,” Scientific Reports, vol. 14, no. 1, p. 13863, 2024. [44] N. Gillani, T. Arslan, and G. Mead, “An U-
nobtrusive Method for Remote Quantification of Parkinson’s and Essential Tremor Using mm-Wave Sensing,” IEEE Sensors Journal, vol. 23, no. 9, pp. 10 118–10 131, 2023. [45] TI IWR1642BOOST Evaluation Board. Accessed: Jul. 02, 2024. [Online]. Available: https://www.ti.com/tool/IWR1642BOOST. [46] TI DCA1000EVM. Accessed: Jul. 02, 2024. [Online]. Available: https: //www.ti.com/tool/DCA1000EVM. [47] TI MMWAVE-STUDIO. Accessed: Jul. 02, 2024. [Online]. Available: https://www.ti.com/tool/MMWAVE-STUDIO. [-
48] Beurer Pulse Oximeter PO 30. Accessed: Jul. 02, 2024. [Online]. Available: https://www.beurer.com/web/us/products/medical/ pulse-oximeter-old/pulse-oximeter/po-30.php. [49] Frontier X Fourth Frontier. Accessed: Jul. 02, 2024. [Online]. Available: https://fourthfrontier.com/products/frontier-x. [50] Avnet ZedBoard. Accessed: Jul. 05, 2024. [Online]. Available: https://www.avnet.com/wps/portal/us/products/avnet-boards/ avnet-board-families/zedboard/. [51] C. Shannon, “Communication in the presen-
ce of noise,” Proceedings of the IEEE, vol. 72, no. 9, pp. 1192–1201, 1984. [52] M. Zhadobov, N. Chahat, R. Sauleau, C. Le Quement, and Y. Le Drean, “Millimeter-wave interactions with the human body: State of knowledge and recent advances,” International Journal of Microwave and Wireless Technologies, vol. 3, no. 2, pp. 237–247, 2011. [53] P. S. Rose, A. C. Robinson, and T. Kinghorn, “A Novel, Graphical Representation of the Classical Radar Range Equation,” in 2020 IEEE International Radar Confere-
nce (RADAR), 2020, pp. 683–688.
[54] M. Khan, P. Mahajan, G. N. Khan, D. Chaudhary, J. Benny, M. Wajid, and A. Srivastava, “Design and Implementation of FPGA based System for Object Detection and Range Estimation used in ADAS Applications utilizing FMCW Radar,” in 2024 IEEE International Symposium on Circuits and Systems (ISCAS), 2024, pp. 1–5.
[55] AMD Technical Information Portal. Accessed: Jul. 02, 2024. [Online]. Available: https://docs.amd.com/v/u/en-US/xfft ds260. [56] M. Khan, A. Singhal, M. Wajid, and A. Srivastava, “VLSI Architecture for the Phase Unwrapping Module in Contactless Vibration Sensing for Biomedical Applications,” in Proc. IEEE Int. Symp. Smart Electron. Syst. (IEEE-iSES), 2024, pp. 1–2, in press.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:09.468Z
- **Text Length:** 56396 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
