# PDF Document: (Addressing laser - 2023 USTC) A low-crosstalk double-side addressing system using acousto-optic deflectors for atomic ion qubits.pdf

**File Path:** (Addressing laser - 2023 USTC) A low-crosstalk double-side addressing system using acousto-optic deflectors for atomic ion qubits.pdf

**Processed Date:** 2026-02-10T18:13:47.557Z

**File Size:** 844.71 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 609

**Title:** (Addressing laser - 2023 USTC) A low-crosstalk double-side addressing system using acousto-optic deflectors for atomic ion qubits

**Collection:** Ion Trap > Tweezer

---

## Extracted Text Content

A low-crosstalk double-side addressing system using acousto-optic deflectors for atomic ion qubits
A low-crosstalk double-side addressing system using acousto-optic
deflectors for atomic ion qubits
Rui-Rui Li,1, 2 Yi-Long Chen,1, 2 Ran He,1, 2 Shu-Qian Chen,1, 2 Wen-Hao Qi,1, 2 Jin-Ming Cui,1, 2, a) Yun-Feng Huang,1, 2, b) Chuan-Feng Li,1, 2 and Guang-Can Guo1, 2 1)CAS Key Laboratory of Quantum Information, University of Science and Technology of China, Hefei 230026, China 2)CAS Center For Excellence in Quantum Information and Quantum Physics, University of Science and Technology of China, Hefei 230026, China
(Dated: 5 June 2023)
The ability to individually and agilely manipulate qubits is crucial for the scalable trapped-ion quantum information processing. A plethora of challenging proposals have been demonstrated with the utilization of optical addressing systems, in which single ions is addressed exclusively by individual laser beam. However, crosstalk error in optical addressing systems limits the gate fidelity, becoming an obstacle to quantum computing, especially quantum error correction. In this work, we demonstrate-
 a low-crosstalk double-side addressing system based on a pair of acoustooptic deflectors (AODs). The AODs addressing method can flexibly and parallelly address arbitrary ions between which the distance is variable in a chain. We employ two 0.4 NA objective lenses in both arms of the Raman laser and obtain a beam waist of 0.95 µm, resulting in a Rabi rate crosstalk as low as 6.32 × 10−4 when the neighboring ion separation is about 5.5 µm. This agile and low-crosstalk double-side addressing system -
is promising for higher-fidelity gates and the practical application of the quantum error correction.

arXiv:2306.01307v1 [quant-ph] 2 Jun 2023

Trapped ion is one of the most promising platforms of the quantum information process (QIP) due to its longest coherent time1,2, high-fidelity state initialization, detection3 and logic manipulations4–7 among all candidates. The ability to individually and agilely manipulate an arbitrary qubit in trapped-ion systems brings a plethora of challenging proposals to reality, e.g., the parallel entangling operations8, the quantum Grover search9 algorithms, the quantum simulation in many-body systems10,1-
1, and the quantum error correction (QEC)12–15. However, the crosstalk error in individually addressing (IA) systems limits the fidelity of gate operation16, resulting in an obstacle for the QIP, especially the QEC, which has more stringent requirements17. Therefore, a low-crosstalk IA system is the key to realizing a universal error-corrected QIP platform.
The intensity crosstalk, resulting from the IA beam’s intensity distribution at its neighboring sites, is strongly related to the spacing of ions (typically 3 to 6 microns in the practical experiment) and spot sizes of IA beams (much smaller than the ion spacing). We list the intensity crosstalk in several previously reported IA systems, shown in Tab. I. The intensity crosstalks in those IA systems with 0.4 NA objective lens are typically on the level at 10−4. To reduce the intrinsic intensity cro-
sstalk of IA systems, one can employ a higher NA objective lens to reduce the spot sizes of IA beams. Some IA systems with 0.6 NA objective lens acquire an intensity crosstalk on the level at 10−6. However, the NA of the objective lens can’t be increased unboundedly and the employment of such a high NA objective lens often causes extra aberrations resulting from misalignment. Hence the intrinsic intensity crosstalk of IA systems is difficult to be further improved and is limited by optical enginee-
ring.
a)Electronic mail: jmcui@ustc.edu.cn b)Electronic mail: hyf@ustc.edu.cn

TABLE I. Parameters of different IA systems. The best SSA system
that employs 0.6 NA objective lens acquire a Rabi rate crosstalk as low as 0.2%, yielding a low intensity crosstalk of 4 × 10−6. Our
DAS system employs a lower NA objective lens to acquire the lowest
Rabi rate crosstalk, relaxing the requirement of intensity crosstalk. S. Crain, et. al. have reported a MEMS-based IA system with a Rabi rate crosstalk of 1.3 × 10−4 but the ion spacing is 7.4 µm18 hence we
don’t list it here.

IA system NA Intensity crosstalk Rabi crosstalk ion spacing

MCAOMs19 0.37

1e-4

1%-2%

5 µm

GLIAS20 0.37

1e-4

1%(estimate) 4 µm

AODs21 0.6

4e-6

0.2%

3.5 µm

MEMS22 0.6

4e-6

0.2%-0.6% 5 µm

This work 0.37×2

<1e-3

0.06%-0.1% 5.5 µm

Intensity crosstalk eventually leads to the crosstalk error, which is the unwanted Rabi drive of neighboring ions caused by the addressing laser. For those single-side addressing (SSA) systems, i.e. one configures a global beam on one side and tightly focusing IA beams on the other side, the Rabi rate crosstalk is proportional to the square root of the intensity crosstalk of IA beams, shown in Fig. 1(a). The SSA system with the best intensity crosstalk performance (on the level at 10−6) has a Rabi-
 rate crosstalk of 0.2%, shown in Tab. I. As a comparison, the Rabi rate crosstalk scales linearly with the intensity crosstalk of IA beams in the case of double-side addressing (DSA) methods, i.e. one configures tightly focusing IA beams on the two sides. Consequently, the DSA system can reach much lower crosstalk, breaking the limitation of optical engineering suffered by SSA systems. From Tab. I, in our DSA system, one can employ a lower NA objective lens and moderate optical system to achieve -
lower Rabi rate crosstalk than the best SSA system.
The previous demonstratations of the AOD-based SSA system have been used to manipulate 40Ca+ optical qubit21. In

A low-crosstalk double-side addressing system using acousto-optic deflectors for atomic ion qubits

2

(a) Global beams

(b) IA beams

IA beams Position

IA beams Position

FIG. 1. Schematic diagrams of different IA systems. (a) The singleside addressing (SSA) methods typically configure a global beam and IA beams to drive the SRT. Rabi frequency is proportion√al to√the square root of light field intensity of two Raman lasers, Ω ∝ I1 I2. The spot size of the global beam is sufficiently large to cover all the ion qubits hence its intensity distribution is uniform at different positions. In this case, we have CSSA ≡ IIA (x1) /IIA (x0). In particular, for optical qubits-
, the above equation also holds when using SSA methods. (b) The double-side addressing (DSA) method reported in this work configure tightly focusing IA beams on both sides of the Raman laser. In this case, we have CDSA ≡ IIA (x1) /IIA (x0), assuming the identical intensity distribution of IA beams from two sides. In this figure, the position of the addressed ion and neighboring ion is denoted as x0 and x1, respectively.

this work, we firstly demonstrate a low-crosstalk DSA system using a pair of 0.4 NA objective lenses and AODs to manipulate 171Yb+ hyperfine qubit via stimulated Raman transition (SRT)23–25. This free space AOD-based DSA system enables a flexible, reprogramming and low error-rate manipulation for atomic ion qubits. It addresses ions that are not evenly distributed in a long ion chain by flexibly tuning the driven frequencies of AODs. By moderate optical configuration and simple alignment procedure-
s, we obtain IA beams with beam waists of 0.95 µm. The intensity crosstalk measured by a high-dynamic range camera is below the level of 10−3 on the neighboring ion sites, and the Rabi-rate crosstalk of this DSA system is as low as 6 × 10−4. The intensity crosstalk can be further suppressed by eliminating the aberrations or employing a higher NA objective lens (up to 0.66 for our system), leading to a much lower Rabi crosstalk.
The optical setup of our experimental apparatus is shown in Fig. 2(a). For our experiment, the 171Yb+ qubits are confined in a glass cell Paul trap with high optical access (HOAT) in multi-directions26. The Raman laser is a continuous wave (CW) laser modulated by a fiber electro-optical modulator (FEOM) and its wavelength is 532 nm in the visible domain27. This visible Raman laser is fiber (a single mode and polarization-maintaining fiber) delivered to a beam splitter comprised of polarizing eleme-
nts and a mirror. Then the Raman laser is split on the beam splitter into two beams and the power of each beam can be adjusted optionally via a halfwave plate. The two portions of the Raman laser propagate through two symmetrically configured optical paths and are then recombined at the ion position, forming a Mach–Zehnder interferometer. Symmetrical configuration can reduce undesirable crosstalk caused by misalignment of the Raman beams from two sides.

To make the tightly focusing beams reach the diffraction limit, the beams are magnified by lens groups, which consist of achromatic lenses to suppress the aberration. Given that the optical paths on both sides are symmetrically configured, we would like to describe the optical path on one side here. The acousto-optic modulator (AOM) is placed between the first pair of lens groups. By tuning the driving frequencies of AOMs, we can shift the relative frequency of the Raman laser propagated on two si-
des to drive the carrier, blue-sideband or red-sideband transition. Then the Raman laser passes through a total reflection prism installed on a high-precision displacement stage (not shown in the figure) to precisely tune the length of the optical path without changing the orientation of the laser beam. The AOD is placed after the prism and driven by an arbitrary waveform generator (AWG). By reprogramming the amplitude, frequency and phase of the driving signal generated by AWG, the IA system allo-
ws for individual control of any ion qubit in the chain.
Diffractive beams from AOD are reflected by a piezoelectric mirror and are magnified by the second pair of lens groups. The piezoelectric mirror is utilized to fine-tune the position of tightly focusing beams to align them with the ions. The beams are finally demagnified by a 0.4 NA objective lens and focused on the plane of ions. The half and quarter-wave plate is utilized to rotate the polarization of the Raman laser.
The axis of the optical system for imaging is perpendicular to the plane of the Raman beam, shown in Fig. 2(c). Another 0.4 NA objective lens is employed to collect the fluorescence from the ion. The multi-channel photomultiplier (MCPMT) has 32 segmented channels. The interval between each channel is 200 µm while the width of each channel is 800 µm. The optical system for imaging can magnify the image of ions by 200 to 1000 times, depending on the distance between the last achromatic lens and MCPM-
T mounted on the moveable optical stage. For individual ion in the ion chain, its fluorescence will be steering to the corresponding channel of MCPMT after the magnification, enabling parallel state detection of multiple ions. The function of apertures in the optical path is optical filtering, which improves the imaging quality. Crosstalk from the imaging system is negligible in the case of good imaging quality and high magnification.
To characterize the intensity crosstalk between multiple beams diffracted from AOD, the laser beams focused on the ion plane are re-imaged onto a high-dynamic range camera. The AOD generates a single diffractive beam spot by applying a monochromatic drive signal. Then we sequentially increase the driving signal frequency to obtain ten diffractive spots. The driving frequencies array here equals those applied to the AOD when addressing multiple ions. We then eliminate the background noise and stitc-
h the images of each diffractive beam spot together, shown in Fig. 3(a). The arrows in Fig. 3(a) indicate the orientation of the ion chain and define a cross-section across the center of beam spots. Fig. 3(b) shows the profiles of IA beams in this cross-section. From Fig. 3(b), the intensity crosstalk of the neighboring site of ions is below the level of 10−3. We also notice the stray spots distributed along the ion chain direction in the optical system, which is highly likely to cause an increase-
 in intensity crosstalk.

A low-crosstalk double-side addressing system using acousto-optic deflectors for atomic ion qubits

(a)

(b)

HWP QWP 0.4 NA OL
x z

y HOAT

0.4 NA OL for imaging

248 THz

3
P 2 1/2
2.1 GHz

AOD Prism

AOM

HWP

AOM

AOD

532 nm

369.5 nm

S 2 1/2

AAA

Mirror

AL

(c)

z

RLB

x

f = 18 mm f = 300 mm

PBS QWP Mirror
f = 75 mm

y
HOAT

Aperture BL

f = 50 mm Movable

12.64 GHz
MCPMT
Movable

FIG. 2. (a) Schematic of optical setup of IA system. Only the trajectories of multiple laser beams are shown, while the profiles of the laser beams are not shown. (b) The relevant energy level of 171Yb+ qubits. The transition wavelength for Doppler cooling is 369.5 nm, which is marked with purple lines. The energy levels associated with the SRT are marked with green lines and the wavelength is 532 nm in the visible domain. (c) Schematic of optical setup of the imaging system. The distances between-
 each optical element are not drawn as the true scale. The optic axis of the imaging system is perpendicular to the plane of the Raman beam. HOAT: High optical access trap, HWP: Half-wave plate, PBS: Polarization beam splitter, QWP: Quarter-wave plate, AL: Achromatic lens, AOM: Acousto-optic modulator, AOD: Acousto-optic deflector, RLB: Raman laser beam, OL: objective lens, BL: Biconvex lens, MCPMT: Multi-channel photomultiplier.

The schematic diagram of energy level of 171Yb+ ion is shown in Fig. 2(b). The qubits are defined by the two hyperfine ground states of 171Yb+, namely, |0⟩ ≡ 2S1/2|F = 0, mF = 0⟩ and |1⟩ ≡ 2S1/2|F = 1, mF = 0⟩. Doppler cooling, electromagnetic induction transparency (EIT) cooling28,29, optical pumping and state-dependent fluorescence detection are implemented via 369.5 nm CW laser while the repump from 2D3/2 state is implemented via 935 nm CW laser30. The qubits are driven by the SRT using two coh-
erent laser fields of which the frequency gap between them equals the frequency splitting of the hyperfine ground states, namely, ωHF =12.64 GHz. When an ion is illuminated by the Raman laser beams, its quantum state will flip between |0⟩ and |1⟩. The Raman laser system used in this experiment has been detailedly described in our previous work27.
In the AOD-based IA system, each specific diffractive beam of AODs matches its corresponding addressed ion. The center frequency of AOD (DTSX-400, AA Opto Electronic) is 77.5 MHz and the -1st order diffractive beam’s angular direction is colinear with the incident laser beam. In preparation for the following experiments, we confine a single ion in the trap and set the drive frequency of AODs equal to the AODs’ center frequency. Taking advantage of single Raman beam flipping, we align the diffracti-
ve beam of both sides to the single ion by adjusting the voltage applied to the piezoelectric mirrors27.
For the first experiment, we confine two ions in the trap and

sweep the drive frequency of AOD to investigate the corresponding frequency of each ion. For convenience of description, we denote the two ions in the experiment as ion A and B, respectively. With the sweep of the drive frequency, the orientation of movement of the diffractive beam is parallel with the orientation of the ion chain. When an ion is overlapped with the scanning beam, its quantum state will oscillate between |1⟩ and |0⟩ state due to the SRT process. Depending on the overlap between th-
e ion and the diffractive beam, the ion experiences different laser intensity, resulting in a different Rabi frequency. In the case of that the interaction time is fixed, the excitation probability of |1⟩ state is positively proportional to the intensity experienced by the ion. Hence, the relationship between the drive frequency of AODs and the excitation probability is expected to be the intensity distribution curve of the diffractive. Fig. 4 shows a Gaussian distribution curve.
We utilize the function

∑ A (x) = Aie[−2((x−xi)/wi)2]

(1)

i

to fit the data, where A (i) is the peak intensity of each beam spot, xi is the center position of each beam spot, wi is the waist of each beam spot. The fit curve indicates that the profile of the addressing beam is Gaussian distribution but with stray spots, which is consistent with the result shown in Fig. 3. The ion A and B can be addressed by setting the drive frequency of AODs as 77.07 MHz and 78.03 MHz respectively, accord-

A low-crosstalk double-side addressing system using acousto-optic deflectors for atomic ion qubits

4

(a)

100 (b) 10-1

Intensity (Normalized)

10-2

10-3

0

20

40

60

Position m

FIG. 3. (a) Image of diffractive beam spots of AOD. The beams are focused on the plane of ions. The arrows in the figure indicate the orientation of the ion chain. The distance between beam spots is equal to the distance between the ions. This picture is recorded by a high-dynamic range camera. (b) The profiles of the corresponding beam spots. The result shows that the intensity crosstalk is below 10−3 when the addressing beam is illuminating on the nearest neighboring site.

FIG. 4. Scan of the addressing beam over a ion chain containing two ions. The fluorescence scattered by ion A and B is collected by two individually channels of MCPMT, respectively. Dashed lines are the Gaussian fits to data from corresponding channels. The Rabi frequencies of ion A and B are slightly different but they can be finetuned through changing the amplitude of the driving signal of AODs.

ing to the fitting result in Fig. 4. Given that the distance between ion A and B is approximately 5.5 µm, the beam waist is approximately 0.95 µm, which doesn’t reach the diffraction limit (0.8113 µm) of the optical system. For every date point we obtain in Fig. 4, the complete experimental sequence consists of Doppler cooling laser with 1 ms, EIT cooling lasers with 1 ms, pumping laser with 20 us, Raman addressing laser with a fixed interaction time and detecting laser with 1 ms. The sequence is -
repeated 100 times to obtain the probability.
For the further experiment, we investigate the Rabi rate crosstalk, which is defined by the ratio of Rabi frequency of adjacent ion and addressed ion, namely, Ωadjacent/Ωaddressed. To characterize the accurate Rabi frequency in the case of that the ion A or B is individually addressed, we set the drive frequency of AODs as the corresponding frequency of ion A or B and keep the time interval of interaction time short. For instance, by setting the drive frequency of AODs as 77.07 MHz, the Raman beam-
 will only focus on the position of ion A, and vice versa. Both ion A and B are cooled to the ground motional state and initialized to the |0⟩ state by optical pumping. Then ion A is illuminated by the Raman beam during a varying interaction time, leaving ion B being affected by the addressing beam of ion A. The final states of ion A and B versus interaction time are recorded as Fig. 5(a) and (b). The Rabi frequency of ion A or B when they are individually addressed is 2π × 43.78 kHz or 2π × 32.42-
 kHz respectively.
To characterize the crosstalk of the Rabi rate, we implement a similar experiment but we extend the maximum interaction time to 5 ms. The results are shown in Fig. 5(c) and (b). It is worth noting that the intensity of the Raman laser hasn’t been stabilized during our experiment, resulting in the decay of Rabi flopping. When ion A is illuminated by its addressing beam, ion B transitions from |0⟩ state to |1⟩ state with a very low Rabi frequency, and vice versa. The final excitation probability of -
|1⟩ state of unaddressed ion A and B after 5 ms is 0.38 and 0.11, respectively. The expression of excitation probability of |1⟩ state is

1

Pi,|1⟩ (t) = 2 [1 − cos (Ωit)] ,

(2)

where i denotes ion A or B. With Eq. 2, the crosstalk of Rabi rate for ion A and B is calculated as 6.32 × 10−4 and 9.66 × 10−4, respectively.
In this work, we demonstrate a low-crosstalk individual optical addressing system using a pair of AODs and investigate that the crosstalk of Rabi rate on the site of neighboring ion is on the level at 6 × 10−4 to 9 × 10−4. Taking advantage of the high optical access of our glass cell trap, we employ two 0.4 NA objective lenses on the double side of Raman laser and obtain a beam waist of 0.95 µm at the ion location. The crosstalk of our double-side addressing system is substantially lower than thos-
e of single-side addressing systems. The intensity crosstalk of our DSA system is below 10−3 and it is mainly caused by undesirable optical aberrations. Higher NA objective lenses (up to 0.66 NA for our system) and aberration elimination techniques can further reduce the crosstalk. By optionally reprogramming the frequency, amplitude and phase of the driving signal of AODs, the DSA

A low-crosstalk double-side addressing system using acousto-optic deflectors for atomic ion qubits

5

FIG. 5. The Rabi rate crosstalk between ion A and B. (a)&(b) The ion A (B) is illuminated by the Raman beam within short period to measure the accurate Rabi frequency (or the period of Rabi cycle). When ion A (B) is addressed, the period of Rabi cycle is 22.84 us (30.85 us). (c)&(d) The ion A (B) is illuminated by the Raman beam within long period to measure the crosstalk caused by addressing beam. When ion A (B) is addressed, ion B (A) will oscillate between |1⟩ and |0⟩ state with a very low Rabi-
 frequency due to the crosstalk.

system can offer an agile, flexible and low error-rate manipulation of atomic ion qubits. This low error-rate DSA system enables the implementation of high-fidelity two-qubit gates in a scalable trapped ion system and supports the realization of the error-corrected quantum computer.
ACKNOWLEDGMENTS
This work was supported by the National Key Research and Development Program of China (No. 2017YFA0304100), National Natural Science Foundation of China (Nos. 11774335, 11734015), the Key Research Program of Frontier Sciences, CAS (No. QYZDY-SSWSLH003), Innovation Program for Quantum Science and Technology (Nos. 2021ZD0301604, 2021ZD0301200). This work was partially carried out at the USTC Center for Micro and Nanoscale Research and Fabrication.

DATA AVAILABILITY STATEMENT

The data that support the findings of this study are available from the corresponding author upon reasonable request.

1Y. Wang, M. Um, J. Zhang, S. An, M. Lyu, J.-N. Zhang, L.-M. Duan,

D. Yum, and K. Kim, “Single-qubit quantum memory exceeding ten-

minute coherence time,” Nat. Photonics 11, 646–650 (2017).

2P. Wang, C.-Y. Luan, M. Qiao, M. Um, J. Zhang, Y. Wang, X. Yuan, M. Gu,

J. Zhang, and K. JKim, “Single ion qubit with estimated coherence time

exceeding one hour,” Nat. Commun. 12, 233 (2021).

3F. A. An, A. Ransford, A. Schaffer, L. R. Sletten, J. Gaebler, J. Hostetter,

and G. Vittorini, “High fidelity state preparation and measurement of ion

hyperfine

qubits

with

i

>

1 2

,”

Phys.

Rev.

Lett.

129,

130501

(2022).

4T. P. Harty, D. T. C. Allcock, C. J. Ballance, L. Guidoni, H. A. Janacek,

N. M. Linke, D. N. Stacey, and D. M. Lucas, “High-fidelity preparation,

gates, memory, and readout of a trapped-ion quantum bit,” Phys. Rev. Lett.

113, 220501 (2014). 5J. P. Gaebler, T. R. Tan, Y. Lin, Y. Wan, R. Bowler, A. C. Keith, S. Glancy,

K. Coakley, E. Knill, D. Leibfried, and D. J. Wineland, “High-fidelity universal gate set for 9Be+ ion qubits,” Phys. Rev. Lett. 117, 060505 (2016).

A low-crosstalk double-side addressing system using acousto-optic deflectors for atomic ion qubits

6

6C. J. Ballance, T. P. Harty, N. M. Linke, M. A. Sepiol, and D. M. Lu-
cas, “High-fidelity quantum logic gates using trapped-ion hyperfine qubits,” Phys. Rev. Lett. 117, 060504 (2016). 7C. R. Clark, H. N. Tinkey, B. C. Sawyer, A. M. Meier, K. A. Burkhardt,
C. M. Seck, C. M. Shappert, N. D. Guise, C. E. Volin, S. D. Fallek, H. T.
Hayden, W. G. Rellergert, and K. R. Brown, “High-fidelity bell-state preparation with 40ca+ optical qubits,” Phys. Rev. Lett. 127, 130505 (2021). 8C. Figgatt, A. Ostrander, N. M. Linke, K. A. Landsman, D. Zhu, D. Maslov,
and C. Monroe, “Parallel entangling operations on a universal ion-trap quantum computer,” Nature 572, 368–372 (2019). 9C. Figgatt, D. Maslov, K. A. Landsman, N. M. Linke, S. Debnath, and
C. Monroe, “Complete 3-qubit grover search on a programmable quantum computer,” Nat. Commun. 8, 1918 (2017). 10J. Smith, A. Lee, P. Richerme, B. Neyenhuis, P. W. Hess, P. Hauke, M. Heyl,
D. A. Huse, and C. Monroe, “Many-body localization in a quantum simulator with programmable random disorder,” Nat. Phys. 12, 907–911 (2016). 11E. A. Martinez, C. A. Muschik, P. Schindler, D. Nigg, A. Erhard, M. Heyl,
P. Hauke, M. Dalmonte, T. Monz, P. Zoller, and R. Blatt, “Real-time dy-
namics of lattice gauge theories with a few-qubit quantum computer,” Nature 534, 516–519 (2016). 12N. H. Nguyen, M. Li, A. M. Green, C. Huerta Alderete, Y. Zhu, D. Zhu,
K. R. Brown, and N. M. Linke, “Demonstration of shor encoding on a trapped-ion quantum computer,” Phys. Rev. Appl. 16, 024057 (2021). 13P. Schindler, J. T. Barreiro, T. Monz, V. Nebendahl, D. Nigg,
M. Chwalla, M. Hennrich, and R. Blatt, “Experimental repetitive quantum error correction,” Science 332, 1059–1061 (2011),
https://www.science.org/doi/pdf/10.1126/science.1203329. 14A. Erhard, H. Poulsen Nautrup, M. Meth, L. Postler, R. Stricker, M. Stadler,
V. Negnevitsky, M. Ringbauer, P. Schindler, H. J. Briegel, R. Blatt, N. Friis, and T. Monz, “Entangling logical qubits with lattice surgery,” Nature 589,
220–224 (2021). 15L. Egan, D. M. Debroy, C. Noel, A. Risinger, D. Zhu, D. Biswas, M. New-
man, M. Li, K. R. Brown, M. Cetina, and C. Monroe, “Fault-tolerant control of an error-corrected qubit,” Nature 598, 281–286 (2021). 16F. Schmidt-Kaler, H. Häffner, M. Riebe, S. Gulde, G. P. T. Lancaster,
T. Deuschle, C. Becher, C. F. Roos, J. Eschner, and R. Blatt, “Realization of the cirac–zoller controlled-not quantum gate,” Nature 422, 408–411
(2003). 17P. Parrado-Rodríguez, C. Ryan-Anderson, A. Bermudez, and M. Müller,
“Crosstalk Suppression for Fault-tolerant Quantum Error Correction with Trapped Ions,” Quantum 5, 487 (2021). 18S. Crain, E. Mount, S. Baek, and J. Kim, “Individual addressing of trapped
171Yb+ ion qubits using a microelectromechanical systems-based beam steering system,” Appl. Phys. Lett. 105 (2014).

19L. N. Egan, Scaling Quantum Computers With Long Chains Of Trapped Ions, Ph.D. thesis, University of Maryland (2021).
20A. Binai-Motlagh, M. Day, N. Videnov, N. Greenberg, C. Senko, and R. Islam, “A guided light system for agile individual addressing of ba+ qubits with 10−4 level intensity crosstalk,” (2023), arXiv:2302.14711 [quant-ph].
21I. Pogorelov, T. Feldker, C. D. Marciniak, L. Postler, G. Jacob,
O. Krieglsteiner, V. Podlesnic, M. Meth, V. Negnevitsky, M. Stadler,
B. Höfer, C. Wächter, K. Lakhmanskiy, R. Blatt, P. Schindler, and T. Monz, “Compact ion-trap quantum computing demonstrator,” PRX Quantum 2,
020343 (2021). 22Y. Wang, S. Crain, C. Fang, B. Zhang, S. Huang, Q. Liang, P. H. Le-
ung, K. R. Brown, and J. Kim, “High-fidelity two-qubit gates using a
microelectromechanical-system-based beam steering system for individual qubit addressing,” Phys. Rev. Lett. 125, 150505 (2020). 23K. Bergmann, H. Theuer, and B. W. Shore, “Coherent population transfer among quantum states of atoms and molecules,” Rev. Mod. Phys. 70, 1003–
1025 (1998). 24N. V. Vitanov, A. A. Rangelov, B. W. Shore, and K. Bergmann, “Stimulated
raman adiabatic passage in physics, chemistry, and beyond,” Rev. Mod. Phys. 89, 015006 (2017). 25J. L. Sørensen, D. Møller, T. Iversen, J. B. Thomsen, F. Jensen, P. Staanum,
D. Voigt, and M. Drewsen, “Efficient coherent internal state transfer in trapped ions using stimulated raman adiabatic passage,” New J. Phys. 8,
261 (2006). 26R. He, J.-M. Cui, R.-R. Li, Z.-H. Qian, Y. Chen, M.-Z. Ai, Y.-
F. Huang, C.-F. Li, and G.-C. Guo, “An ion trap apparatus with
high optical access in multiple directions,” Rev. Sci. Instrum. 92
(2021), 10.1063/5.0043985, 073201, https://pubs.aip.org/aip/rsi/article-
pdf/doi/10.1063/5.0043985/16016833/073201_1_online.pdf. 27R.-R. Li, R. He, J.-M. Cui, Y. Chen, W.-R. Ye, Y.-L. Chen, Y.-F. Huang,
C.-F. Li, and G.-C. Guo, “A versatile multi-tone laser system for manipu-
lating atomic qubits based on a fiber mach–zehnder modulator and second harmonic generation,” Opt. Express 30, 30098–30107 (2022). 28L. Feng, W. L. Tan, A. De, A. Menon, A. Chu, G. Pagano, and C. Mon-
roe, “Efficient ground-state cooling of large trapped-ion chains with an
electromagnetically-induced-transparency tripod scheme,” Phys. Rev. Lett. 125, 053001 (2020). 29M. Qiao, Y. Wang, Z. Cai, B. Du, P. Wang, C. Luan, W. Chen, H.-R. Noh,
and K. Kim, “Double-electromagnetically-induced-transparency ground-
state cooling of stationary two-dimensional ion crystals,” Phys. Rev. Lett. 126, 023604 (2021). 30S. Olmschenk, K. C. Younge, D. L. Moehring, D. N. Matsukevich, P. Maunz, and C. Monroe, “Manipulation and detection of a trapped yb+ hyperfine qubit,” Phys. Rev. A 76, 052314 (2007).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:47.557Z
- **Text Length:** 29069 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
