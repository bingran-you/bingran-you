# PDF Document: Benny et al. - 2023 - Design and Measurements of mmWave FMCW Radar Based Non-Contact Multi-Patient Heart Rate and Breath R.pdf

**File Path:** Benny et al. - 2023 - Design and Measurements of mmWave FMCW Radar Based Non-Contact Multi-Patient Heart Rate and Breath R.pdf

**Processed Date:** 2026-02-10T18:14:44.550Z

**File Size:** 1336.52 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3759

**Title:** Design and Measurements of mmWave FMCW Radar Based Non-Contact Multi-Patient Heart Rate and Breath Rate Monitoring System

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Design and Measurements of mmWave FMCW
Radar Based Non-Contact Multi-Patient Heart Rate
and Breath Rate Monitoring System
Jewel Bennya, Pranjal Mahajana, Srayan Sankar Chatterjeea, Mohd Wajidb, Abhishek Srivastavaa aCentre for VLSI and Embedded Systems Technology (CVEST), IIIT Hyderabad, India bDepartment of Electronics Engineering, Z.H.C.E.T. Aligarh Muslim University, India
Abstract—Recent developments in mmWave radar technologies have enabled the truly non-contact heart-rate (HR) and breathrate (BR) measurement approaches, which provides a great ease in patient monitoring. Additionally, these technologies also provide opportunities to simultaneously detect HR and BR of multiple patients, which has become increasingly important for efficient mass monitoring scenarios. In this work, a frequency modulated continuous wave (FMCW) mmWave radar based truly non-contact mult-
iple patient HR and BR monitoring system has been presented. Furthermore, a novel approach is also proposed, which combines multiple processing methods using a least squares solution to improve measurement accuracy, generalization, and handle measurement error. The proposed system has been developed using Texas Instruments’ FMCW radar and experimental results with multiple subjects are also presented, which show >97% and >93% accuracy in the measured BR and HR values, respectively. Index Terms—FMC-
W, mmWave radar, heart-rate, breath-rate estimation, non-contact, multi-subject, 77 GHz, healthcare
I. INTRODUCTION
Millimeter wave (mmWave) technologies such as frequency modulated continuous wave (FMCW) radar near 77 GHz spectrum has gained great attention as a non-contact alternative to wearable devices for mass monitoring of vital signs. As depicted in Fig. 1(a) and Fig. 1(b), these radars can be used for mass monitoring vital signs such as breath-rate (BR) and heartrate (HR). FMCW radars are emerging as superior alternatives due to their ability to measure micro displacements associated with respiration (∼-
1-12 mm) and heartbeat (∼0.01-0.5 mm) [1], [2]. While previous studies [2]-[5] have demonstrated HR/BR monitoring using FMCW radars, they primarily focused on single-subject scenarios. Multi-subject measurement was shown in [6], however, it lacks simultaneous measurement of multiple subjects and require prior knowledge of subject azimuth to optimize signal-to-noise ratio (SNR). In this work, we present (i) design of a mmWave FMCW radar-based system with high accuracy to simultaneously measure BR/H-
R of multiple patients, (ii) a combination of multiple estimation methods using a least squares solution [7] for improved measurement accuracy, and (iii) measurement results of the proposed system prototype to validate the multipatient monitoring scenario. The paper is structured as follows: Section II provides a brief theoretical background on FMCW radars. Section III explains the proposed method for estimating
Fig. 1: (a) Heart rate and breath rate estimation using FMCW radar (b) Multi-subject HR & BR mesurement (c) F-T plot of FMCW chirps (d) Chest displacement due to breathing and heart beat
vital signs of multiple patients using FMCW radar in detail. Section IV discusses the experimental setup and results, and finally, Section V concludes the paper.
II. BACKGROUND OF FMCW RADARS
As shown in Fig. 1 (c), a chirp is a frequency modulated signal, where its instantaneous frequency changes continuously. Expression of a real-valued linear chirp (yT X (t)) transmitted by FMCW radar is given by,
yT X (t) = AT X cos(2πfmint + Kcπt2) (1) where AT X is the signal amplitude, fmin is the initial frequency of the chirp at t = 0 and Kc is the chirp rate [3], [8], [9]. Electromagnetic waves travel at the speed of light, c, therefore, distance, R, traveled by the wave in a time interval td/2 is given by R = ctd
2 , where td is the round trip delay. Expression for the chirp received by the radar (yRX (t)) is given by [8], [9],
yRX (t) = ARX cos 2πfmin(t − td) + Kcπ(t − td)2 . (2) Mixing of transmitted and received chirps followed by low pass filtering gives intermediate frequency (IF) signal (yMX (t)) as given by,
yMX (t) = A cos(2πfmintd + 2πKcttd − πKct2
d). (3) Since, R is few meters, td is very small, hence πKct2
d≈0 [3]. The IF beat signal (yIF,real(t)) can be given by,
yIF,real(t) ≈ A cos 2πfbt + 4πR
λmax
(4)
where fb = Kctd and λmax = c/fmin. A quadrature phase shifted version (yIF,imag(t)) of Eq. (4) is also an associated
©2023 IEEE. Personal use of this material is permitted. Permission from IEEE must be obtained for all other uses, in any current or future media, including reprinting/republishing this material for advertising or promotional purposes, creating new collective works, for resale or redistribution to servers or lists, or reuse of any copyrighted component of this work in other works. Presented at IEEE BioCAS 2023. Final version available at: https://doi.org/10.1109/BioCAS58349.2023.10388660
arXiv:2511.21255v1 [eess.SY] 26 Nov 2025

Fig. 2: Signal processing flow to measure HR & BR
signal, which can be given by,
yIF,imag(t) ≈ A sin 2πfbt + 4πR
λmax
. (5)
The combined mixed IF signal (yIF,real(t) + j.yIF,imag(t)) is represented as complex exponential as given by,
yIF (t) ≈ A exp(j(2πfbt + φR)), (6)
where φR = 4πR
λmax is the phase shift in the mixer output due
to an object present at a distance R from the radar.
III. PROPOSED METHOD FOR BREATH-RATE AND
HEART-RATE ESTIMATION OF MULTIPLE PATIENTS
The proposed method employs a multi-receiver radar, beamforming weights, and advanced signal processing techniques to achieve accurate localization and estimation of BR/HR for multiple patients within a room. Fig. 2 illustrates the proposed signal processing flow for estimating BR/HR. FMCW radars are better suited for BR/HR estimation since the chest displacements are in the millimeter order; this results in a significant change in the beat signal’s phase depending on the chest wall’s displacement-
 [3]. As depicted in Fig. 1(d), the phase signal (R(t)) can be captured as a function of the chest displacement (x(t)) with respect to time, R(t) = R0 + x(t) [3]. The phase shift (φR(t)) of the mixed signal is a function of time and given by,
φR(t) = 4πR(t)
λmax
. (7)
Simultaneous range and azimuth resolution of the multiple subjects can be done using a multi-receiver system and beamforming weights [10], [11]. Since the beat signals in Eq. (6) will contain frequencies and phase from all possible rangeazimuth bins (RABs), therefore it is critical to extract the phase from the specific RAB at which the subjects are located. For a specific azimuth direction γ, the beat signal (yIF,γ(t)) can be computed by applying beamforming as given by,
yIF,γ (t) =
no.of RX
X
i=1
yIF (t)iwi
k, (8)
where yIF (t)i is the beat signal corresponding to the ith receiver and wi
k are beamforming weights chosen such that the interference from other azimuth directions is minimised. For the specific azimuth, we can estimate the range by taking the Fast Fourier Transform (FFT) of yIF,γ(t) with frequency axis scaled to the range axis, called the Range FFT [3]. The
Fig. 3: Chest displacement signals extracted from the phase signal of a range-azimuth bin with a human subject (left) and without a human subject (right).
magnitude spectrum of the Range FFT for a particular azimuth direction, γ, gives a peak at Rγ
0 = cfb
2Kc ; and phase at Rγ
0 can also be extracted from this Range FFT. When evaluated at Rγ
0 + xγ(t), the Range FFT of yIF,γ(t) is given by, Yγ Rγ
0 +xγ (t) = F yIF,γ (t) R=Rγ
0 +xγ (t)
≈ F A exp(j(2πf t)) R=Rγ
0
. exp 4π[Rγ
0 + xγ (t)]
−jλmax
.
(9) This means that the phase of Yγ changes with the subject range. If a single chirp is transmitted, the range estimated using magnitude Range FFT is almost constant for a given subject. Consider when transmitting the sequence of M number of chirp pulses with chirp duration Tm and inter-chirp interval Tc, as shown in Fig. 1 (c); and assume estimated range from
magnitude of Range FFT is Rγ
0,m for the mth chirp & azimuth γ , the Eq. (9) is re-written as, Yγ Rγ
0,m + xγ
m(t)
≈ F A exp(j2πf t) R=Rγ
0,m
. exp 4π[Rγ
0,m + xγm(t)]
−jλmax
.
(10) After computing Range FFT for all possible RABs, the proposed vital sign activity detection and estimation algorithm is applied. Fig. 3 shows the extracted R(t) signals from RABs with and without human following the proposed flow of Fig. 2. Details of the proposed procedure is presented in the following subsections.
A. Detecting Temporal Activity
A sequence of M chirps is transmitted; each chirp produces a unique Range FFT for a RAB. The chest wall’s millimeter order displacements cause changes in the beat signal’s phase, resulting in variations in the Range FFTs across chirps in the RABs. The stationary clutters are easily eliminated since the Range FFTs across the chirps are not changing for the clutter bin. Also, for each azimuth direction, the average of Range FFT magnitude is computed across M chirps to create a combined Range FFT mag-
nitude, thereby, estimating the more accurate range of the patient. After checking the presence of temporal activity in all bins, we combine them into a matrix called the Vital Activity Map, where each row corresponds to

Fig. 4: (a) Extracted phase signal (b) Unwrapped phase signal (c) Extracted breathing signal (d) Extracted heartbeat signal
a range bin and each column corresponds to an azimuth bin. Then, a threshold-based elimination process removes RABs with minimal or no vital sign activity. This process creates a sparse matrix that roughly represents the RABs corresponding to the location of the patients.
B. Phase Extraction for Detected Patients
Taking Yγ Rγ
0,m +xγm(t) across M chirps over the selected RABs, then calculating its phase for every chirp gives the required phase signal, whose sampling interval is Tc. This phase signal is further processed by subtracting with its mean followed by phase unwrapping [12]. The phase signal is unwrapped beyond [−π, π] to ensure that the difference between two consecutive phase samples is less than π. The frequency band of human BR and HR signals are distinct and typically in the range of 3-36 per minute and 48-
-120 per minute, respectively [3]. So, the unwrapped phase signal is passed through specific bandpass filters to obtain the clean breathing signal φbr(m) and heartbeat signal φhr(m). Fig. 4 shows, (a) the extracted phase signal, (b) the unwrapped phase signal, and (c) the extracted breathing signal and (d) the extracted heartbeat signal. Signals φbr(m) and φhr(m) are
processed further to obtain BR and HR. C. BR and HR Estimation
BR and HR are estimated using Fourier transform, autocorrelation, and peak detection, followed by an optimal linear combination of the estimates. 1) Fourier Transform: The spectrum of φbr(m) is analyzed to determine the breath rate brf by identifying the frequency with the highest peak. Similarly, the spectrum of φhr(m) is analyzed to determine the heart rate hrf by averaging the frequencies of the l highest peaks (in this case l = 6). 2) Auto-Correlation: The auto-correlation of M length sequence-
 φ(m) is given by [13],
Rφφ[n] = 1
M
∞
X
m=−∞
φ[m]φ[n + m]. (11)
The auto-correlation function of a periodic signal has the property that it retains the period of the original signal, with a peak at n = 0. The auto-correlation functions of φbr(m) and φhr(m) are calculated and the time inverse of the second peak is taken as bra and hra respectively. 3) Peak Detection: The number of peaks in signals φbr(m) and φhr(m) above a particular threshold are calculated and divided by the time duration of the signals. The result is taken as brp and hrp, respectively. It is-
 critical to suppress the respiration harmonics in the signal φhr(m) as it can overshadow the actual heartbeat frequencies. Therefore, φhr(m) is also passed through a comb
filter [14]. After passing φhr(m) through the comb filter and again applying the three signal processing techniques processing methods, as discussed above, we obtain three more measurements, namely, hrfc, hrac, hrpc.
4) Optimal Linear Combination: Linear combinations of the estimates will further improve the accuracy. Hence, a linear combination of brf , bra and brp for BR, and hrf , hra, hrp, hrfc, hrac and hrpc for HR are taken as the final vital rates, br = cf brf + cabra + cpbrp (12)
and
hr = df hrf + dahra + dphrp+
dfchrfc + dachrac + dpchrpc
, (13)
where cf , ca, cp, df , da, dp, dfc, dac and dpc are scalars chosen to minimise the least square error between estimated values and ground truth values. Consider that P number of experiments have been performed with ground truth values of HR and BR are in the column vector b and h (each of order P × 1), respectively. If c = [cf ca cp]T and d = [df da dp dfc dac dpc]T , the ground truth values for BR and HR are given by the column vectors b and h, the measurements corresponding to brf , bra and brp-
 is given by matrix B of order P × 3, and the measurements corresponding to hrf , hra, hrp, hrfc, hrac and hrpc is given by matrix H of order P × 6. The least squares solution is given by,
c = (BT B)−1BT b (14) d = (HT H)−1HT h. (15)
In our study, we consider P=50 across different experiments. IV. EXPERIMENTAL SETUP AND RESULTS
Fig. 5(a) depicts the experimental setup used for measuring BR/HR using TI-IWR1642BOOST radar module (77-81 GHz) [15] along with TI DCA1000 EVM [16] for acquiring the in-phase and quadrature-phase data corresponding to the IF signal. mmWave Studio [17] by TI is used to control the radar module and acquire the signals. The acquired IF signals are transferred to a computer for further processing in MATLAB and BR/HR extraction. The radar uses 2 TX and 4 RX antennas for azimuth resolution via beam-for-
ming. By sequentially transmitting chirps, the TX antennas achieve time division multiplexing, creating a virtual RX array of 8 antennas, which provides an angle resolution of 15 degrees [11]. Each TX-RX pair of the proposed system in Fig. 5(a) is configured to record 512 chirps with Tc = 50 ms, resulting in an observation time of 25.6 seconds. This window length was chosen to balance accuracy in generating a Vital Activity Map and processing latency. Fig. 5(b) shows a single subject standing near-
 the radar with a glass obstacle for BR and HR detection wearing a pulse

Fig. 5: (a) The overall experiment setup (b) Single-subject HR & BR measurement (c) Multi-subject HR & BR measurement (d) Rangeazimuth map (e) Vital activity map after clutter removal TABLE I: Measurement Results
Exp. No.
Patient No.
Range (m) and Azimuth (°)
Breath Rate (per min) Heart Rate (per min)
brf bra brp br Manual
Counting Error (%) hrf hra hrp hrfc hrac hrpc hr Reading From
Beuerer PO 30
Error (%)
1 1 5, 0° 24.44 26.09 25.78 25.40 25.78 1.47 117.00 103.48 106.77 125.98 101.56 120.39 124.24 110 12.95 2 1 0.5, −15° 10.01 9.06 9.38 9.52 9.37 1.60 69.41 78.93 78.15 76.68 67.30 76.22 69.79 70 0.30 1 1, −30° 10.54 11.41 11.36 11.10 10.55 5.21 72.55 66.05 63.09 71.48 75.91 62.80 67.09 66 1.65
3 2 1, 30° 18.75 17.87 18.75 18.59 18.75 0.85 82.68 81.33 78.21 76.78 80.12 86.45 79.35 87 8.79 4 1 2, −45° 8.92 8.95 9.26 9.09 9.37 2.99 84.72 75.86 80.12 80.33 84.67 76.95 78.83 71 11.03
2 1.5, 60° 13.76 14.01 12.42 13.09 12.89 1.55 73.04 86.23 87.41 83.77 79.14 83.20 74.30 77 3.51 1 1, −45° 11.95 12.47 12.21 12.17 12.30 1.06 75.36 77.33 71.43 77.33 80.96 70.54 72.45 83 12.71 5 2 1.5, 0° 23.06 25.36 22.68 23.23 23.44 0.90 145.67 135.20 131.92 144.44 147.05 142.89 137.61 130 5.85 3 1.2, 45° 22.01 22.08 21.16 21.56 21.68 0.55 103.71 106.37 110.74 109.65 106.03 105.35 102.16 102 0.16
6
1 2, −60° 16.31 17.06 16.83 16.70 16.40 1.83 81.35 85.08 76.11 74.09 80.67 85.91 68.04 76 10.47 2 2, 15° 11.36 10.23 11.33 11.15 10.55 5.69 84.36 84.08 80.65 82.34 82.36 79.18 77.11 72 7.1 3 1.5, 60° 18.30 17.66 17.48 17.75 17.58 0.97 99.03 95.15 92.66 95.40 90.73 92.55 91.80 88 4.32 Average BR Error (%) 2.06 Average HR Error (%) 6.57
TABLE II: Comparison Table
Type of Radar
BR Accuracy (%)
HR Accuracy (%)
Maximum Range Reported (m)
Number of simultaneous patients reported
Our work FMCW 97.94 93.43 5 3 [2] CW 88.42 87.22 1.5 1 [3] FMCW 94 80 1.7 1 [4] FMCW 95.15 82.45 2 1 [5] FMCW > 93 > 93 0.7 1 [6] FMCW 93 95 0.5 2 [11] FMCW - - 1 2 [18] FMCW - - 1 2
oximeter [19] for validating the measured results. Fig. 5(c) shows three subjects near the radar who were detected in the range-azimuth map shown in Fig. 5(d). As shown in Fig. 5(d), the surrounding objects are also captured in the range-azimuth map which can be considered as noise. This noise is filtered by the proposed temporal vital activity detection, which generates the Vital Activity Map shown in Fig. 5(e) demonstrating the area with maximum signs of activity. Further processing was done to -
obtain their vital signs reported in Table I. As seen in Table I, an accuracy of 97.94% for BR and 93.43% for HR was achieved, demonstrating the effectiveness of the system in accurately measuring BR and HR. The accuracy decreased as the range of the subject increased due to the decrease
in SNR received by the radar as range increases [20]. The system accurately measures HR and BR up to a distance of 5 meters from the radar. Table II compares this work with similar studies, showing higher accuracy for BR and comparable accuracy for HR measurement.
V. CONCLUSION
In this work, a 77-81 GHz FMCW radar based truly noncontact measurement system for simultaneous detection of HR and BR of multiple subjects has been demonstrated. A novel approach is also proposed to improve BR/HR measurement accuracy by combining multiple signal processing methods. The proposed system prototype was developed using TI’s FMCW radar and experimental results with multiple subjects are also presented, which show >97% and >93% accuracy in the measured BR and HR values, respectively.
ACKNOWLEDGMENT
The authors would like to acknowledge Chips to Startup (C2S) program, Ministry of Electronics and Information Technology (MeitY), Govt. of India, Kohli Center on Intelligent Systems (KCIS) and IHub Mobility IIIT Hyderabad, India for supporting this research.

REFERENCES
[1] A. D. Droitcour, “Non-contact measurement of heart and respiration rates with single chip microwave Doppler radar,” Ph.D. dissertation, Stanford Univ., Stanford, CA, USA, 2006. [2] J. -M. Mu ̃noz-Ferreras, J. Wang, Z. Peng, R. G ́omez-Garc ́ıa and C. Li, ”From Doppler to FMCW Radars for Non-Contact Vital-Sign Monitoring,” 2018 2nd URSI Atlantic Radio Science Meeting (AT-RASC), Gran Canaria, Spain, 2018 [3] M. Alizadeh, G. Shaker, J. C. M. D. Almeida, P. P. Morita and S. SafaviNaeini, ”Remote M-
onitoring of Human Vital Signs Using mm-Wave FMCW Radar,” in IEEE Access, vol. 7, 2019 [4] S. Wang et al., ”A novel ultra-wideband 80 GHz FMCW radar system for contactless monitoring of vital signs,” 2015 37th Annual International Conference of the IEEE Engineering in Medicine and Biology Society (EMBC), Milan, Italy, 2015 [5] Wang, Yong, Wen Wang, Mu Zhou, Aihu Ren, and Zengshan Tian. 2020. ”Remote Monitoring of Human Vital Signs Based on 77-GHz mm-Wave FMCW Radar” Sensors 20, no. 10: 2999 [6] S.-
 M. M. Islam, N. Motoyama, S. Pacheco and V. M. Lubecke, ”NonContact Vital Signs Monitoring for Multiple patients Using a Millimeter Wave FMCW Automotive Radar,” 2020 IEEE/MTT-S International Microwave Symposium (IMS), Los Angeles, CA, USA, 2020 [7] Nocedal, Jorge ; Wright, Stephen J. / Numerical optimization. Springer Series in Operations Research and Financial Engineering. Springer Nature, 2006. pp. 1-664 (Springer Series in Operations Research and Financial Engineering). [8] M. Vespe, G. Jones,-
 and C. J. Baker, ”Lessons for radar” IEEE Signal Process. Mag., vol. 26, no. 1, pp. 65-75, Jan. 2009. [9] A. Meta, P. Hoogeboom and L. P. Ligthart, ”Signal Processing for FMCW SAR,” in IEEE Transactions on Geoscience and Remote Sensing, vol. 45, no. 11, pp. 3519-3532, Nov. 2007 [10] Johnson, Don H. and Dan E. Dudgeon. “Array Signal Processing: Concepts and Techniques.” (1993). [11] A. Ahmad, J. C. Roh, D. Wang and A. Dubey, ”Vital signs monitoring of multiple people using a FMCW millimeter-wave s-
ensor,” 2018 IEEE Radar Conference (RadarConf18), Oklahoma City, OK, USA, 2018 [12] M. Alizadeh, G. Shaker and S. Safavi-Naeini, ”Experimental study on the phase analysis of FMCW radar for vital signs detection,” 2019 13th European Conference on Antennas and Propagation (EuCAP), Krakow, Poland, 2019. [13] Alan V. Oppenheim, Alan S. Willsky, and S. Hamid Nawab. 1996. Signals & systems (2nd ed.). Prentice-Hall, Inc., USA. [14] K. J. Wu and C. -L. Yang, ”Heart Rate Extraction with VMD Algorithm in No-
n-Stationary Clutter Environment Based on FMCW Radar Systems,” 2021 IEEE International Symposium on Radio-Frequency Integration Technology (RFIT), Hualien, Taiwan, 2021 [15] TI IWR1642 BOOST - www.ti.com/lit/ds/swrs212b/swrs212b.pdf? ts=1687115002792&ref url=https%253A%252F%252Fwww.ti.com% 252Ftool%252FIWR1642BOOST [16] TI DCA1000 EVM - https://www.ti.com/lit/ug/spruij4a/spruij4a.pdf? ts=1687115617716&ref url=https%253A%252F%252Fwww.ti.com% 252Ftool%252FDCA1000EVM [17] mmWave Studio - https://www.-
ti.com/tool/MMWAVE-STUDIO [18] W. Wang, Y. Wang, M. Zhou and W. Nie, ”A Novel Vital Sign Sensing Algorithm for Multiple People Detection Based on FMCW Radar,” 2020 IEEE Asia-Pacific Microwave Conference (APMC), Hong Kong, Hong Kong, 2020 [19] Beurer PO 30 - https://www.beurer.com/web/gb/products/medical/ pulse-oximeter/po-30.php [20] A. D. Droitcour, O. Boric-Lubecke and G. T. A. Kovacs, ”Signalto-Noise Ratio in Doppler Radar System for Heart and Respiratory Rate Measurements,” in IEEE Transaction-
s on Microwave Theory and Techniques, vol. 57, no. 10, pp. 2498-2507, Oct. 2009

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:44.550Z
- **Text Length:** 21747 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
