# PDF Document: Chen et al. - 2025 - Data-Driven Post-Event Analysis with Real-World Oscillation Data from Denmark.pdf

**File Path:** Chen et al. - 2025 - Data-Driven Post-Event Analysis with Real-World Oscillation Data from Denmark.pdf

**Processed Date:** 2026-02-10T18:17:42.042Z

**File Size:** 9534.16 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3264

**Title:** Data-Driven Post-Event Analysis with Real-World Oscillation Data from Denmark

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Data-Driven Post-Event Analysis with Real-World
Oscillation Data from Denmark
Youhong Chen
University of Bath, Bath, UK yc2930@bath.ac.uk
Debraj Bhattacharjee Balarko Chaudhuri Mark O’Malley
Imperial College London, London, UK d.bhattacharjee22@imperial.ac.uk
Nan Qin Adrian Pilkaer Expethit Energinet, Fredericia, Denmark naq@energinet.dk; aex@energinet.dk
Abstract—This paper demonstrates how Extended Dynamic Mode Decomposition (EDMD), grounded in Koopman operator theory, can effectively identify the main contributor(s) to oscillations in power grids. We use PMU data recorded from a real 0.15 Hz oscillation event in Denmark for post-event analysis. To this end, the EDMD algorithm processed only voltage and current phasors from nineteen PMUs at different voltage levels across the Danish grid. In such a blind-test setting with no supplementary system -
information, EDMD accurately pinpointed the location of the main contributor to the 0.2 Hz oscillation, consistent with the location of the problematic IBR plant later confirmed by Energinet, where the underlying cause was a control system issue. Conventional approaches, such as the dissipating energy flow (DEF) method used in the ISO-NE OSL tool did not clearly identify this plant. This joint validation with Energinet, reinforcing earlier studies using simulated IBR-dominated systems and real PMU-
 data from ISO-NE, highlights the potential of EDMD-based post-event analysis for identifying major oscillation contributors and enabling targeted SSO mitigation. Index Terms—Oscillation source location, Extended Dynamic Mode Decomposition, Data-Driven, Real-world oscillation event
I. INTRODUCTION
Poorly damped oscillations induced by inverter-based resources (IBRs) have become a major concern. Identifying the main contributors to such oscillations is essential for effective mitigation. However, this is challenging in IBR-dominated grids because vendor-specific IBR models are opaque, and perturbation-based model estimation is not feasible for postevent analysis. The Dissipating Energy Flow (DEF) method performs well for forced oscillations involving synchronous machines [1] but is less effe-
ctive for IBR-induced oscillations [2]. A modified SSO-Complex Dissipating Energy Flow (SSO-CDEF) method [2] has been proposed, though its performance remains systemdependent. Using oscillation amplitude at IBR terminals as an indicator of participation [3] lacks theoretical grounding. NREL’s GIST tool [4] relies on electromagnetic transient (EMT)-based impedance scans across multiple operating conditions and is therefore unsuitable for post-event analysis. Dynamic Mode Decomposition (DMD) is a da-
ta-driven, model-free method for extracting spatio-temporal patterns and has recently been applied in power systems for oscillation
This work is supported by the Engineering and Physical Science Research Council, UK [grant number EP/Y025946/1].
analysis and control [5]–[7]. However, existing DMD-based approaches have not been validated for IBR-driven oscillations, where dynamics are highly nonlinear and less transparent. To address this, an Extended DMD (EDMD) framework was developed to identify major contributors to oscillations [8]. Although [8] validated EDMD with simulated data and real data from synchronous machine-based ISO-NE system, it has not been tested on real IBR-driven events. This paper provides the first validation of EDMD-
 using a real oscillation event from the Danish grid. This demonstrates its effectiveness in identifying the main contributors to poorly damped IBRdriven oscillations for post-event analysis.
II. METHODOLOGY
A. Extended Dynamic Mode Decompression (EDMD)
This section provides a brief outline of the proposed EDMD-based methodology and further details can be found in [8]. The Extended Dynamic Mode Decomposition is the core of this framework. Its essential components and properties are summarised here following the developments in [9]. Consider the discrete-time nonlinear system
xk+1 = F (xk), (1)
with x ∈ M ⊆ Rn and F : M → M. The associated Koopman operator K acts on observables ψ ∈ F as
Kψ = ψ ◦ F, (2)
yielding the infinite-dimensional linear evolution
ψk+1 = Kψk. (3)
These representations describe the same dynamics, and future system states may be expressed through the Koopman mode expansion [10]:
F (x) =
Nj
X
j=1
μjvjφj(x), (4)
where μj, φj, and vj denote the Koopman eigenvalues, eigenfunctions, and modes, respectively. Approximating this linear but infinite-dimensional operator from data has become an effective means for analysing nonlinear systems.
arXiv:2511.20939v1 [eess.SY] 26 Nov 2025

EDMD provides such an approximation by projecting the action of K onto a finite dictionary of observables. Given snapshot pairs xi, yi ∈ M with yi = F (xi), construct
X = x1 x2 . . . xM , Y = y1 y2 . . . yM .
(5) Let D = {ψ1, . . . , ψnd } be the dictionary, and define
Ψ(x) = ψ1(x); ψ2(x); . . . ; ψnd (x) . (6)
The finite-dimensional approximation of the Koopman operator is obtained as
K ≜ G†H, (7)
with
G= 1
M
M
X
j=1
Ψ(xj)Ψ(xj), H = 1
M
M
X
j=1
Ψ(xj)Ψ(yj). (8)
This completes the concise summary of the standard EDMD procedure used to approximate the Koopman operator in a finite-dimensional subspace. An alternative formulation of the Koopman operator K, introduced in [11], defines MK = K⊤ and is adopted in this work. This representation, also employed in [12], offers a more convenient structure for computing datadriven participation factors and is used here for consistency.
B. Data-driven algorithm
1) Selection of observables: The EDMD lifts the voltage and current phasors V ∠θV and I∠θI from PMUs into a higher-dimensional space Ψ using a dictionary of observables to capture nonlinear system behavior [13]. Polynomial and trigonometric functions of voltage and current phasors, particularly active and reactive power, P = V I cos(θV − θI ), Q = V I sin(θV − θI ) at the point of interconnection are used as lifted observables in this study.
2) Filtered mode of interest: The dominant poorly damped frequency fs is identified via FFT. The data are band-pass filtered with a 4th-order Butterworth filter at [0.9, 1.1]fs. To reduce boundary effects, only the central 50–80% of the filtered signal is used, improving EDMD accuracy by isolating the main mode and lowering the required model order.
3) Calculation of reduced-order M ̃K: Filtered data are used to compute the finite-dimensional Koopman operator MK using EDMD. Although an appropriate set of observables spanning a Koopman-invariant subspace would yield an accurate MK, in practice only an approximately invariant set Ψ(x) can be identified. As a result, inappropriate observable selection may introduce spurious eigenvalues, and the dimension of MK can be large in power system applications. To address this, MK is projected onto a red-
uced subspace via truncated SVD of G = U ΣR∗. Retaining the r dominant singular values yields Ur = U (:, 1:r), Σr = Σ(1:r, 1:r), Rr = R(:, 1:r), and the reduced Koopman operator
M ̃ K = U ∗
r HRrΣ−1
r . (9)
This reduced-order operator retains the slow dynamical subspace while suppressing fast transients, aligning naturally with
the objective of analysing low-frequency oscillations. The truncation order is determined by detecting elbow points in the singular value curve. The eigen-decomposition
M ̃K Φ ̃ = M ̃ Φ ̃ (10)
provides the reduced eigenvectors (Φ ̃ ) and eigenvalues, from which the full-space right and left eigenvectors are reconstructed as
Φˆ = UrΦ ̃ , ˆΞ = Φˆ †. (11)
4) Data-Driven modal analysis: The discrete-time eigenvalues μi obtained from (10) are converted to continuous-time
values using
λi = ln(μi)
∆t ,
from which the damping ratio and oscillation frequency are derived. The participation factors of the observables in mode i are computed from the left and right eigenvectors as [12]
psi = φˆsiξˆis, (12)
where psi denotes the participation of sth state variable to mode i. The overall participation factors follow from summing over all associated stable variables, and is normalized for comparison across plants. Therefore, power plants exhibiting large absolute participation factor values are identified as the primary contributors to the poorly damped oscillation.
III. CASE STUDY WITH EDMD-BASED METHOD
A. PMU data from oscillation event in Denmark
The oscillation event in Denmark was captured by PMUs at 19 locations with voltage and current phasors recorded at 50 Hz sampling rate. A 120-second dataset is available, within which pronounced oscillations occur between 60–110 seconds. Figures 1 and 2 show the full recordings, out of which 60–110 second window is selected for data-driven post-event analysis. Since the dominant oscillation is below 1 Hz, a 3 Hz low-pass filter is applied to suppress high-frequency noise.
B. Observables in EDMD
As discussed in Section II-B1, the active and reactive power components, P and Q, which are polynomial functions of the measured voltage and current phasors from PMU data, are more effective in capturing the system nonlinear dynamics. Hence, P and Q are employed in this study. The derived active and reactive power for each location are shown in Fig. 3.
C. Top oscillation contributor
The FFT reveals a clear spectral peak at 0.158 Hz indicating the dominant oscillatory mode. Singular value analysis yields an EDMD truncation order of 7. The EDMD participation analysis (Fig. 4) identifies location 19 as the main contributor. This is consistent with Energinet’s post-event finding that an IBR plant at location 19 caused the oscillation due to improper control settings. This alignment demonstrates the effectiveness

Location 1
0 20 40 60 80 100
360
370
380
I (A)
200
400
600
800
3I (deg)
Location 2
0 20 40 60 80 100
205
210
I (A)
0
500
1000
3I (deg)
Location 3
0 20 40 60 80 100
210
215
I (A)
0
500
3I (deg)
Location 5
0 20 40 60 80 100
820
825
830
I (A)
200
400
600
800
3I (deg)
Location 6
0 20 40 60 80 100
888888999980246
I (A)
0
500
3I (deg)
Location 7
0 20 40 60 80 100
645.2
645.3
645.4
I (A)
0
500
3I (deg)
Location 8
0 20 40 60 80 100
160
165
170
I (A)
0
500
3I (deg)
Location 9
0 20 40 60 80 100
160
170
I (A)
0
500
3I (deg)
Location 10
0 20 40 60 80 100
0
10
20
I (A)
0
1000
3I (deg)
Location 11
0 20 40 60 80 100
553
554
555
I (A)
0
500
3I (deg)
Location 12
0 20 40 60 80 100
710
710.5
711
I (A)
0
500
3I (deg)
Location 13
0 20 40 60 80 100
705
710
715
I (A)
0
500
3I (deg)
Location 14
0 20 40 60 80 100
1019
1019.5
1020
I (A)
200
400
600
800
3I (deg)
Location 15
0 20 40 60 80 100
1018.5
1019
1019.5
I (A)
200
400
600
800
3I (deg)
Location 16
0 20 40 60 80 100
100
120
140
I (A)
0
500
3I (deg)
Location 17
0 20 40 60 80 100 Time (s)
85
90
95
I (A)
0
500
3I (deg)
Location 18
0 20 40 60 80 100 Time (s)
7888880246
I (A)
0
500
3I (deg)
Location 19
0 20 40 60 80 100 Time (s)
200
400
I (A)
0
500
3I (deg)
Fig. 1. Time-series phasor current magnitude and angle measurements from PMUs across selected locations in the Danish transmission system.(Location 4 is not included due to bad data quality)
Location 1
0 20 40 60 80 100
413.5
414
414.5
V (kV)
0
500
3V (deg)
Location 2
0 20 40 60 80 100
416
416.5
V (kV)
0
500
1000
3V (deg)
Location 3
0 20 40 60 80 100
410
411
412
V (kV)
0
500
3V (deg)
Location 5
0 20 40 60 80 100
414
414.5
415
V (kV)
0
500
3V (deg)
Location 6
0 20 40 60 80 100
232
233
234
V (kV)
0
500
3V (deg)
Location 7
0 20 40 60 80 100
414
414.5
V (kV)
0
500
3V (deg)
Location 8
0 20 40 60 80 100
412
413
414
V (kV)
0
500
3V (deg)
Location 9
0 20 40 60 80 100
411.5
412
412.5
413
V (kV)
0
500
3V (deg)
Location 10
0 20 40 60 80 100
164.5
165
165.5
V (kV)
0
500
3V (deg)
Location 11
0 20 40 60 80 100
221.5
222
222.5
V (kV)
0
500
3V (deg)
Location 12
0 20 40 60 80 100
412
413
414
V (kV)
0
500
3V (deg)
Location 13
0 20 40 60 80 100
65.9
65.95
66
V (kV)
200
400
600
3V (deg)
Location 14
0 20 40 60 80 100
410
410.5
411
V (kV)
0
500
3V (deg)
Location 15
0 20 40 60 80 100
410
410.5
411
V (kV)
0
500
3V (deg)
Location 16
0 20 40 60 80 100
164
165
166
V (kV)
0
500
3V (deg)
Location 17
0 20 40 60 80 100 Time (s)
164
165
166
V (kV)
0
500
3V (deg)
Location 18
0 20 40 60 80 100 Time (s)
165
166
V (kV)
0
500
3V (deg)
Location 19
0 20 40 60 80 100 Time (s)
160
165
V (kV)
0
500
3V (deg)
Fig. 2. Time-series phasor voltage magnitude and angle measurements from PMUs across selected locations in the Danish transmission system.

Location 1
0 20 40 60 80 100
-110
-105
P (MW)
-120
-110
-100
Q (MVAr)
Location 2
0 20 40 60 80 100
-84
-83
-82
P (MW)
-----2222244333....2864
Q (MVAr)
Location 3
0 20 40 60 80 100
80
82
P (MW)
-32
-31.5
-31
-30.5
Q (MVAr)
Location 5
0 20 40 60 80 100
-341
-340.5
-340
P (MW)
0
50
Q (MVAr)
Location 6
0 20 40 60 80 100
190
192
P (MW)
80
85
Q (MVAr)
Location 7
0 20 40 60 80 100
243.36
243.38
243.4
243.42
243.44
P (MW)
110
110.5
111
Q (MVAr)
Location 8
0 20 40 60 80 100
60
65
70
P (MW)
1112246802
Q (MVAr)
Location 9
0 20 40 60 80 100
60
65
70
P (MW)
1112246802
Q (MVAr)
Location 10
0 20 40 60 80 100
-0.05
0
0.05
P (MW)
-4
-2
0
2
Q (MVAr)
Location 11
0 20 40 60 80 100
69.3
69.4
69.5
P (MW)
101
101.5
102
Q (MVAr)
Location 12
0 20 40 60 80 100
292
293
294
P (MW)
0
0.1
0.2
Q (MVAr)
Location 13
0 20 40 60 80 100
46.5
47
P (MW)
2
2.5
3
Q (MVAr)
Location 14
0 20 40 60 80 100
-420
-419
-418
P (MW)
0
5
10
Q (MVAr)
Location 15
0 20 40 60 80 100
-419
-418.5
-418
-417.5
P (MW)
0
5
10
Q (MVAr)
Location 16
0 20 40 60 80 100
18
20
22
P (MW)
0
1
2
Q (MVAr)
Location 17
0 20 40 60 80 100 Time (s)
14
15
P (MW)
-5
-4.5
-4
Q (MVAr)
Location 18
0 20 40 60 80 100 Time (s)
13
13.5
14
P (MW)
-0.2
0
0.2
0.4
Q (MVAr)
Location 19
0 20 40 60 80 100 Time (s)
15
20
25
P (MW)
-100
-50
0
50
Q (MVAr)
Fig. 3. Active and reactive power P and Q calculated from PMU measurements at selected locations in the Danish transmission system.
of the proposed EDMD method in pinpointing oscillation contributors from PMU data from a real event.
Mode freq 0:15 Hz
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 Location ID #
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
PN
Fig. 4. Data-driven participation factors obtained via EDMD for the Danish transmission system. Location 19 is the top contributor to 0.15 Hz oscillation.
IV. CASE STUDY WITH OTHER METHODS
A. Dissipating Energy Flow (DEF)
For comparison, the widely used DEF method is applied using ISO New England’s OSLp software [14], [15] on the same PMU dataset from Denmark. Fig. 5 shows that locations 14 and 15 have the largest positive injecting oscillating energy,
while location 9 absorbs energy. Based on the DEF method, locations 14 and 15 would be incorrectly identified as the primary oscillation sources, contradicting the actual post-event findings.
78 80 82 84 86 88 90 92 Time(s)
-1
-0.8
-0.6
-0.4
-0.2
0
0.2
0.4
WD, p.u.
Location ID: 19 Location ID: 5 Location ID: 1
Location ID: 14 Location ID: 15 Location ID: 9
Fig. 5. Top six locations in terms of highest dissipating energy flow in Danish transmission system. Locations 14 and 15 show highest positive energy injection, while location 9 has highest energy absorption.
B. Q-V phase-based method
Energinet identifies the main oscillation contributors primarily by determining the phase alignment between Q–V at the oscillation frequency. Fig. 6 shows that locations 7, 11, and 19 exhibit in-phase Q–V patterns. When combined with practical information (e.g., new plants undergoing testing), this

Location 1
0 20 40 60 80 100
-0.2
0
0.2
V (kV)
-10
0
10
Q (MVAr)
Location 2
0 20 40 60 80 100
-0.02
0
0.02
V (kV)
-0.05
0
0.05
Q (MVAr)
Location 3
0 20 40 60 80 100
-0.5
0
0.5
V (kV)
-0.2
0
0.2
Q (MVAr)
Location 5
0 20 40 60 80 100
-0.2
0
0.2
V (kV)
-20
0
20
Q (MVAr)
Location 6
0 20 40 60 80 100
-0.2
0
0.2
V (kV)
-0.5
0
0.5
Q (MVAr)
Location 7
0 20 40 60 80 100
-0.2
0
0.2
V (kV)
-0.5
0
0.5
Q (MVAr)
Location 8
0 20 40 60 80 100
-1
0
1
V (kV)
-5
0
5
Q (MVAr)
Location 9
0 20 40 60 80 100
-1
0
1
V (kV)
-5
0
5
Q (MVAr)
Location 10
0 20 40 60 80 100
-0.2
0
0.2
V (kV)
-2
0
2
Q (MVAr)
Location 11
0 20 40 60 80 100
-0.5
0
0.5
V (kV)
-0.5
0
0.5
Q (MVAr)
Location 12
0 20 40 60 80 100
-1
0
1
V (kV)
-0.02
0
0.02
Q (MVAr)
Location 13
0 20 40 60 80 100
-0.05
0
0.05
V (kV)
-0.5
0
0.5
Q (MVAr)
Location 14
0 20 40 60 80 100
-1
0
1
V (kV)
-5
0
5
Q (MVAr)
Location 15
0 20 40 60 80 100
-1
0
1
V (kV)
-5
0
5
Q (MVAr)
Location 16
0 20 40 60 80 100
-1
0
1
V (kV)
-0.1
0
0.1
Q (MVAr)
Location 17
0 20 40 60 80 100 Time (s)
-1
0
1
V (kV)
-0.05
0
0.05
Q (MVAr)
Location 18
0 20 40 60 80 100 Time (s)
-1
0
1
V (kV)
-0.02
0
0.02
Q (MVAr)
Location 19
0 20 40 60 80 100 Time (s)
-2
0
2
V (kV)
-50
0
50
Q (MVAr)
Fig. 6. Phase alignment of reactive power Q and voltage magnitude V at the oscillation frequency (band-pass filtered) for selected Danish transmission system locations. Locations 7, 11, 19 show Q-V in-phase (marked with a green box).
approach suggests location 19 as the major contributor. While this method is effective for detecting forced oscillations, as in the case presented, it is less reliable for natural oscillations because the results are highly sensitive to the selected window.
V. CONCLUSION
This paper demonstrates that Extended Dynamic Mode Decomposition (EDMD) can effectively identify the dominant contributor to oscillations using limited PMU data, without any network information. Its successful application to a real 0.2 Hz oscillation event in Denmark, carried out as a blind test, confirms its accuracy in real-world post event analysis. Unlike conventional dissipating energy flow (DEF) or phasebased methods, EDMD correctly reveals the top contributor to the oscillation even in IBR--
dominated grids. These results highlight EDMD’s potential as a powerful data-driven tool for post-event event analysis to ensure the effective mitigation.
REFERENCES
[1] S. Maslennikov and E. Litvinov, “Iso new england experience in locating the source of oscillations online,” IEEE Transactions on Power Systems, vol. 36, no. 1, pp. 495–503, 2021. [2] L. Fan, Z. Wang, Z. Miao, and S. Maslennikov, “Oscillation source detection for inverter-based resources via dissipative energy flow,” Authorea Preprints, 2023.
[3] S. Dong, B. Wang, J. Tan, C. J. Kruse, B. W. Rockwell, and A. Hoke, “Analysis of november 21, 2021, kaua‘i island power system 18-20 hz oscillations,” 2023. [Online]. Available: https://arxiv.org/abs/2301.05781 [4] National Renewable Energy Laboratory (NREL), “Grid impedance scan tool (gist),” n.d., accessed: 2025-03-17. [Online]. Available: https://www.nrel.gov/grid/impedance-measurement.html
[5] W. Han and A. M. Stankovi ́c, “Model-predictive control design for power system oscillation damping via excitation – a data-driven approach,” IEEE Transactions on Power Systems, vol. 38, no. 2, pp. 11761188, 2023. [6] A. Alassaf and L. Fan, “Randomized dynamic mode decomposition for oscillation modal analysis,” IEEE Transactions on Power Systems, vol. 36, no. 2, pp. 1399–1408, 2021. [7] M.-S. Ko, W. Shin, K. Sun, and K. Hur, “Locating the source of oscillation with two-tier dynamic mode decomp-
osition integrating earlystage energy,” IEEE Transactions on Power Systems, vol. 39, no. 4, pp. 5535–5547, 2024. [8] Y. Chen, D. Bhattacharjee, and B. Chaudhuri, “A data-driven method to identify major contributors to low-frequency oscillations,” 2025. [Online]. Available: https://arxiv.org/abs/2505.14267 [9] M. O. Williams, I. G. Kevrekidis, and C. W. Rowley, “A data–driven approximation of the koopman operator: Extending dynamic mode decomposition,” Journal of Nonlinear Science, vol. 25, pp. 130-
7–1346, 2015. [10] I. Mezic ́, “Spectral properties of dynamical systems, model reduction and decompositions,” Nonlinear Dynamics, vol. 41, no. 1, pp. 309–325, 2005. [11] C. Sch ̈utte, P. Koltai, and S. Klus, “On the numerical approximation of the perron-frobenius and koopman operator,” Journal of Computational Dynamics, vol. 3, no. 1, p. 1–12, Sep. 2016. [12] M. Netto, Y. Susuki, and L. Mili, “Data-driven participation factors for nonlinear systems based on koopman mode decomposition,” IEEE Contr-
ol Systems Letters, vol. 3, pp. 198–203, 1 2019. [13] L. Zheng, X. Liu, Y. Xu, W. Hu, and C. Liu, “Data-driven estimation for a region of attraction for transient stability using the koopman operator,” CSEE Journal of Power and Energy Systems, vol. 9, no. 4, pp. 14051413, 2023. [14] ISO New England Inc., “Request software,” https://www.isone.com/participate/support/request-software, accessed: 2025-11-13. [15] S. Maslennikov, B. Wang, and E. Litvinov, “Dissipating energy flow method for locating th-
e source of sustained oscillations,” International Journal of Electrical Power & Energy Systems, vol. 88, pp. 55–62, 2017.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:42.042Z
- **Text Length:** 20610 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
