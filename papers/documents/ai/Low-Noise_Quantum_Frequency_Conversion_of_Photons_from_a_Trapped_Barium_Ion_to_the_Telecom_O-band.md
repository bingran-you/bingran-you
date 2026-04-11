# PDF Document: Saha et al. - 2023 - Low-Noise Quantum Frequency Conversion of Photons from a Trapped Barium Ion to the Telecom O-band.pdf

**File Path:** Saha et al. - 2023 - Low-Noise Quantum Frequency Conversion of Photons from a Trapped Barium Ion to the Telecom O-band.pdf

**Processed Date:** 2026-02-10T18:16:13.694Z

**File Size:** 1756.67 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 344

**Title:** Low-Noise Quantum Frequency Conversion of Photons from a Trapped Barium Ion to the Telecom O-band

**Collection:** Courses > LLM

---

## Extracted Text Content

Temporally multiplexed ion-photon quantum interface via fast ion-chain transport
Bingran You,1, 2 Qiming Wu,1, ∗ David Miron,1 Wenjun Ke,1 Inder Monga,2 Erhan Saglamyurek,1, 2 and Hartmut Haeffner1, 2, †
1Department of Physics, University of California, Berkeley, CA 94270, USA 2Lawrence Berkeley National Laboratory, Berkeley, CA 94720, USA (Dated: April 16, 2024)
Trapped single ions are amongst the most advanced platforms for distributed quantum information processing with photonic interconnects. The scalability of such systems require multiplexing. However, existing proposals present substantial challenges. Here, we demonstrate a temporally multiplexed ion-photon interface via rapid transport of a chain of nine calcium ions across 74 μm within 86 μs. We verify the non-classical nature of the multiplexed photons by measuring the second-order correlation fu-
nction with an average value of g(2)(0) = 0.059(5) and find negligible crosstalk between the multiplexed modes. In addition, we characterize the motional degree-of-freedom of the ion crystal after transport and find that is coherently excited to as much as  ̄nα ≈ 110. Our proof-ofprinciple implementation paves the way for large-scale quantum networking with trapped ions but also highlight some of the challenges which must be overcome.
Remote entanglement across distant quantum nodes [1, 2] may be used to implement revolutionary applications such as quantum enhanced metrology and sensing [3–5], long-distance quantum key distribution [6, 7] and modular quantum computer architectures [8, 9]. Light-matter quantum interfaces are a fundamental building block for such networks, and allow for distributed entanglement between stationary matter qubits by using "flying" photons.
Trapped ions are among the promising platforms for a light-matter interface due to their natural single photon emission at convenient wavelengths for quantum frequency conversion (QFC) [10, 11], excellent local quantum information processing capability [12] and the possibility of long-lived storage of entanglement [13, 14]. However, in widely adopted remote entanglement generation schemes based on heralded photon detection [15–17], it is infeasible to distribute entanglement at practically useful -
rates over a few kilometers with single mode, as the attempt rate is limited by the round-trip travel time of photons. For communication distance around 10 km, photons travel time will be around 100 μs for each attempt, which means the attempt cannot be higher than 10 kHz For instance, when using a state-of-the-art ionbased system with close to optimal photon extraction efficiency [18], the ion-photon entanglement rate beyond tens of kilometers is limited to sub 10 s−1, considering the collective -
probability of generating and detecting telecom photons at each node, along with the fiber optic loss [19, 20].
Such challenges are indeed common to all quantum repeater technologies, and a key solution is multiplexing: to combine multiple signals into a single channel and therefore increase the attempt rate [21, 22]. Multiplexing has become a mature technology for atomic ensemble-based quantum memories and solid state systems [23–26]. Still, large-scale local quantum information processing could be technically challenging in these platforms [27]. Such
an approach can also be deployed in a superconducting system [28]. However, its lack of direct light-matter interface presents a significant technical overhead on the microwave to optical transduction [29, 30]. On the other hand, theory proposals of using multiplexing to mitigate similar constraints with ion or atom quantum processors have also raised a strong interest recently [31–34]. However, the only experimental demonstration was made on a three-ion chain [20], where the uneven ion spacing in-
 the Coloumb crystal and the Gaussian cavity field pose a fundamental limitation for scaling. Considering the recent advancement of the quantum CCD architecture [35, 36], the complementary approach is transporting the ions through a specific spatial location with maximized photon coupling efficiency.
In this work, we propose and demonstrate a novel scheme for improving the rate of ion-photon entanglement over long distances with the aid of temporal multiplexing. We generate on-demand single photons by shuttling a nine-ion chain across the focus of an addressing beam, which is expected to increase the entanglement generation attempt rate nine-folds with quantum repeater nodes separated by ∼100 km. We experimentally verify the single-photon nature of the photon trains by measuring a second-order-
 time correlation of g(2)(0) = 0.059(5). Furthermore, we address the problem of motional heating during the transport, which is detrimental to local entangling operations [37] and causes uncertainty in the coupling strength of the atom-cavity interaction [38]. Using a shuttling function optimized to mitigate motional excitation, we determine the coherent heating of  ̄nα ∼ 50 on the center-of-mass (COM) mode during one round of ion chain transport. These results show that our scheme is viable to sc-
ale up the trapped ions based quantum network.
The experiment is conducted in an RF Paul trap, with four RF blades generating the radial pseudopotential and two DC endcaps to provide an axial harmonic confine

 2
74 um
397 nm single photons
SPD
&
Objective
866 nm addressing
BS
(a)
(b)
397 nm 397 nm
866 nm 866 nm
Doppler
cooling ...
200 μs Photon generation sequence × 2
10.8 μs
...
Repeat attempts
(c)
mode 1
866 addressing
Transport
Delay
Delay
mode 9
866 addressing
Transport
Delay
Delay
397 pumping
3 μs
GND
V
RF
V
RF
GND
V
DC1 + ΔVDC1(t)
V
DC2 - ΔVDC2(t)
x
i xf
SPD
FIG. 1. Schematics of multiplexed ion-photon interface. (a) A nine-ion chain is confined in an RF Paul trap. Controlling DC endcap voltages allows for ion transport. A beam of 397 nm and 866 nm light illuminating all ions is used for Doppler cooling. An objective collects the 397 nm single photons and guides them to a 50/50 beamsplitter, followed by a photomultiplier tube on each exit port for photon detection. An 866 nm beam is focused down to ≈ 7.5 μm waist to address individual ions. (b), (c) E-
xcitation scheme and pulse sequence for the 397 nm single-photon generation. First, a global 397 nm beam prepares the ions to the 32D3/2 state. Then, the 866 nm addressing beam (resonance with 32D3/2 ↔ 42P1/2) is stroboscopically switched on during the transport to extract photons from the target ions.
ment. Fig. 1(a) shows the schematics of the experimental procedure. We typically trap a string of nine 40Ca+ ions in a linear configuration with the COM mode fre
21.0
22.5
24.0
25.5
Voltage (V)
Programmed waveform Measured waveform
0 20 40 60 80 100
Time (μs)
102
103
Counts
FIG. 2. Temporal profile of single-photon generation. (a) The black (red) line is the programmed (measured) voltage ramp on endcap 1 during the forward transport, showing negligible latency effect. The voltage on endcap 2 is an inverse function of endcap 1 with an offset of +2.51 V. Not shown is the ramp shuttling the ions back to the original position. (b) Detection time of thephotons (bin with 250 ns) color coded with the associated temporal mode.
quency ωx,z = 2π × {1.15, 0.179} MHz, with LambDicke (LD) parameters of all the axial modes range between 0.09 and 0.23 on the 42S1/2 ↔ 32D5/2 transition. Global 397 nm and 866 nm beams evenly illuminate the ion chain for Doppler cooling and optical pumping, and another tightly focused 866 nm addressing beam is used for resonant excitation, extracting 397 nm single photons from individual ions. The photons are collected by an objective with numerical aperture NA = 0.3 (collection efficiency Pc ≈ 2-
.5%) and detected by two photomultiplier tubes (PMTs) through a 50/50 beam splitter (BS) for single-photon detection (SPD) and the following analysis using the recorded photon arrival times. We use a background-free scheme to generate on-demand single photons as illustrated in Fig. 1(b) [39]. We first Doppler cool (detuning ∆ = −Γ/2 = −2π × 11.2 MHz) the ion chain for 200 μs, with the first 100 μs assisted by another beam −500 MHz detuned from the 42S1/2 ↔ 42P1/2 transition (not shown) to mitigate-
 collision induced ion chain melting in the Paul trap [40]. Then we begin the photon generation sequences as follows with optical pumping to the 32D3/2 state for 3 μs , followed by transport of the chain to position each ion in the tight focus of the 866 nm addressing beam resonant with 32D3/2 ↔ 42P1/2 transition to generate 397 nm single photons (see Fig. 1(c)). The endcap voltages are controlled by an arbitrary waveform generator (AWG) amplified by a custom-made, lownoise amplifier circuit with -
a gain of ten through low-pass filters and a vacuum feedthrough. The low-pass filters have cutoff frequencies of 1.9 MHz to allow fast trans

 3
port of the ion chain close to the speed of the COM mode frequency. The programmed and the measured waveform show a negligible latency effect from the filters (Fig. 2(a)). The forward shuttling function has eight steps; during each, a different ion is placed in the focus of the addressing beam for 1.7 μs with the beam turned on simultaneously. After the forward shuttling, we move the entire ion chain back to the original position in 35 μs using the same function form in one step. We use an inverse-
 engineering method [41] to optimize the transport function of each step, with the voltage ramp on the two endcaps V1,2(t) in the form of a sigmoid-like polynomial
(a)
(b)
(c)
Shuttling nine-ion chain
Fifth ion in a static nine-ion chain
Static single ion
FIG. 3. Two-photon correlation measurements. (a) g(2) measurement when shuttling a nine-ion chain, g(2)(0) = 0.059(5). The horizontal axis represents the delay between individual photons, which corresponds to the voltage ramping time between shuttling steps. The shuttling function in Fig. 2 is repeated twice before the next cooling cycle (see Fig. 1). (b) g(2) measurement when addressing the fifth ion in a static nine-ion chain shows g(2)(0) = 0.061(9). There are 25 attempts after each cooling cyc-
le. The horizontal axis represents the delay time between attempts on the same ion. (c) g(2) measurement of a single ion with the addressing beam using the same pulse sequence as (b). The measured g(2)(0) = 0.010(2). The horizontal axis is the same as (b).
function such that the first and second order derivative at the beginning and the end of the transport vanish.
V1(t) = V1 + ∆V
(
10 ( t
T
)3 − 15 ( t
T
)4 + 6 ( t
T
)5)
V2(t) = V2 − ∆V
(
10 ( t
T
)3 − 15 ( t
T
)4 + 6 ( t
T
)5) , (1)
where ∆V is the voltage difference between the beginning and the end of a step, t is the time after the end of the previous step, and T = 9.1 μs is the total time of each transport. The details of voltage optimization and numerical simulation of motional heating can be found in [42]. We reconstruct the temporal profile of 397 nm photons during transport using the recorded arrival times of photons on the PMTs. Fig 2(b) shows the emission from individual ions (modes). Data is accumulated for 40 min -
with an attempt rate 39.0 kHz, yielding an average single photon extraction efficiency of 0.21 % and single photons count rate of around 71 cps. Next, we perform a two-photon correlation experiment to test the non-classical characteristics of our multiplexed single-photon source [43]. The probability of two-photon correlation when detecting a correlation event on two detectors at different times is given by
ρc(τ ) = ρ1(τ )ρ2(τ + δT ), (2)
where ρ1(τ ) and ρ2(τ + δT ) are the probability of detecting a photon at t = τ and τ + δT on detector 1 and 2. Fig. 3(a) shows the normalized correlation counts as a function of the delay mode window. We choose a coincidence window of 300 ns in each mode and measure 8 coincident counts at zero delay in 4.8 hours, corresponding to g(2)(0) = 0.059(5). The residual correlation can be explained by excitation of neighboring ions, i.e., crosstalk of the addressing beam, which is separately characterize-
d to be 0.99 % using fluorescence of the nineion chain on the camera, corresponding to expected average g(2)
exp(0) = 0.049(8) (see Supplemental [42]). To further verify this hypothesis, we repeat the measurement with a single ion (Fig. 3(c)) and compare it to addressing only the fifth ion in a static nine-ion chain (Fig. 3(b)). The two experiments yield g(2)(0) = 0.010(2) and g(2)(0) = 0.061(9) with 6.0 and 4.8 hours of data accumulation, respectively. While the single ion g2 is limited by the detector dark counts and ambient light, the measurement of the static 9-ion chain g2 is limited by the crosstal-
k of the addressing beam. The results indicate the major source of residual correlation is addressing crosstalk [42] and that can be mitigated by coupling the single photons into a single-mode fiber or improving the optical quality of the excitation beam. After characterizing the single-photon nature of the transport-multiplexing scheme, we characterize the motion of the ions introduced by shuttling. This is important as the quality of subsequent quantum opera

 4
(c)
(b)
(a)
FIG. 4. |↓⟩ ↔ |↑⟩ carrier excitation of nine-ion chain before and after shuttling. The horizontal axis is the global 729 nm beam probe time, and the vertical axis is the average ion excitation on the |↑⟩ state. Error bars denote one standard deviation of the quantum projection noise. (a) Rabi oscillations of the sideband-cooled ions (red dots). The red line is a numerical simulation of thermal distribution with  ̄nth = 4.0 ± 3.0. (b) Rabi oscillation after the transport at half speed of the transp-
ort function in Fig. 2(a). The blue line is a numerical simulation with with n ̄th = 4, n ̄α = 50 ± 5. (c) Rabi oscillation after the transport at full speed. The green line is a numerical simulation with with n ̄th = 4,  ̄nα = 110 ± 5.
tions on the ions or ion-photon entanglement will depend on the ions’ motional states. Building on this foundation, we further explore the system performance by measuring the motional heating from the ion transport. To do this, we first perform sideband cooling for all the axial modes sequentially using the method similar to that in [44] and prepare the ion in the state |↓⟩ = |42S1/2, mJ = −1/2⟩. Before and after the transport, we probe the |↓⟩ ↔ |↑⟩ = |32D1/2, mJ = −1/2⟩ carrier transition with a-
 global 729 nm beam along the axial direction to determine how the transport affects the ion-motion (Fig. 4). The carrier Rabi flopping is motional state sensitive, and the Hamiltonian has the form of [45, 46]
Hi,M = (ħ/2)Ω(i)σ(i)
x
M
∏
m=1
exp [iηi,m
[am + a†
m
)] , (3)
where Ω(i) is the Rabi frequency of the ith ion, am and a†m are the creation and annihilation operators on the mth mode, and ηi,m is the LD parameter of the ith ion and the mth mode. Considering the computational difficulty of including all motional modes in the simulation, we only consider the COM mode which we expect to be excited most because the electric fields, both from the transport and surface noise, are correlated over the whole ion string (see Supplemental [42]). Therefore, the average c-
arrier Rabi flopping can be simplified to
Pe(t) = 1
2N
[
1−
∞
∑
n=0
N
∑
i=0
Pn cos
(
Ω(i)
nt
)
]
, (4)
where Pn is the occupation on the nth number state and encodes a convolution between a thermal and a coherent
phonon distribution [47]. Ω(i)
n is the Rabi frequency of the ith ion on the nth number state [48]. To verify the effectiveness of our approximation, we probe the sidebandcooled motional spectrum of the nine-ion chain before the tranport and verify that only the COM mode is not cooled to near the ground state [42]. We also measure the electric-field noise induced heating and find a heating rate of 20 quanta / ms and a cooling limit of n ̄th = 4.0 ± 3.0 at t = 0 (Fig. 4(a)), indicating that the remaining thermal population is li-
kely limited by the COM mode heating which scales as ion number N [49]. Fig. 4(b) shows the carrier Rabi flopping after ion transport with the half speed of the shuttling function in Fig. 2(a). We assume a coherent state  ̄nα = |α2| ≈ 50 on the COM mode after the transport, as illustrated by the numerical simulation (blue line). Similarly, we perform the full-speed tranport and the carrier Rabi flopping matches with COM coherent state with  ̄nα ≈ 110 (Fig. 4(c)). The mismatch between these experim-
ental data and numerical simulation could be due to thermal and coherent occupation on other modes and will require additional investigation. For example, one can use an individual 729 nm addressing beam to probe the blue sideband transition of different modes [50]. The optimal fast transport of a long ion chain remains an open question and is beyond the scope of this work. And further optimization can be done by energy self-neutral shuttling [35, 47], implementing closed-loop optimization of the -
shuttling function [51], etc.
To summarize, we have presented a scalable multiplexed ion-photon quantum interface by transporting a nine-ion chain with synchronized photon excitation in sub-hundred μs. The speed is restricted by the motional frequency and can be increased by an order of magnitude, for instance, using a 3D-printed ion trap [52] with

 5
radial frequency beyond 10 MHz. The 397 nm photon can be converted to the telecommunication band via a twostep QFC [11]. Once integrated with a single mode fiber for photon collection and state preparation on 32D3/2 Zeeman sublevel, we expect a faster photon extraction rate [53] and negligible ion crosstalk while achieving high fidelity ion-photon entanglement [54]. Our system can combine with a miniature cavity [38] for much higher photon extraction efficiency without sacrificing the photon gener-
ation rate, while the ion’s positional spread caused by coherent excitation can be mitigated by aligning the cavity along the radial direction or further optimization of the shuttling function. These results stimulate the research of fast shuttling of a chain of tens of ions as a unit cell of logical qubit with heralded entanglement [32, 55] and high-rates entanglement of quantum processors across large distances. B.Y and Q.W have contributed equally to this work. We thank Alp Sipahigil, Ben Lanyo-
n, Tracy Northup, and Wenji Wu for their helpful discussion. Q.W. and H.H. acknowledge funding by the U.S. Department of Energy, Office of Science, Office of Basic Energy Sciences under Awards No. DE-SC0023277. This work is supported by the Office of Science (S.C.) in Advanced Scientific Computing Research (ASCR) through FOA - Quantum Internet to Accelerate Scientific Discovery (LAB 212495) and by NSF Grant No. 2016245.
∗ qiming.wu@berkeley.edu † hhaeffner@berkeley.edu [1] H. J. Kimble, The quantum internet, Nature 453, 1023 (2008). [2] L.-M. Duan, M. D. Lukin, J. I. Cirac, and P. Zoller, Longdistance quantum communication with atomic ensembles and linear optics, Nature 414, 413 (2001). [3] P. Komar, E. M. Kessler, M. Bishof, L. Jiang, A. S. Sørensen, J. Ye, and M. D. Lukin, A quantum network of clocks, Nature Physics 10, 582 (2014). [4] B. Nichol, R. Srinivas, D. Nadlinger, P. Drmota, D. Main, G. Araneda, C. Bal-
lance, and D. Lucas, An elementary quantum network of entangled optical atomic clocks, Nature 609, 689 (2022). [5] X. Guo, C. R. Breum, J. Borregaard, S. Izumi, M. V. Larsen, T. Gehring, M. Christandl, J. S. NeergaardNielsen, and U. L. Andersen, Distributed quantum sensing in a continuous-variable entangled network, Nature Physics 16, 281 (2020). [6] T. van Leent, M. Bock, F. Fertig, R. Garthoff, S. Eppelt, Y. Zhou, P. Malik, M. Seubert, T. Bauer, W. Rosenfeld, et al., Entangling single atoms over-
 33 km telecom fibre, Nature 607, 69 (2022). [7] D. P. Nadlinger, P. Drmota, B. C. Nichol, G. Araneda, D. Main, R. Srinivas, D. M. Lucas, C. J. Ballance, K. Ivanov, E.-Z. Tan, et al., Experimental quantum key distribution certified by bell’s theorem, Nature 607, 682 (2022). [8] C. Monroe, R. Raussendorf, A. Ruthven, K. R. Brown,
P. Maunz, L.-M. Duan, and J. Kim, Large-scale modular quantum-computer architecture with atomic memory and photonic interconnects, Physical Review A 89, 022317 (2014). [9] J. P. Covey, H. Weinfurter, and H. Bernien, Quantum networks with neutral atom processing nodes, npj Quantum Information 9, 90 (2023). [10] V. Krutyanskiy, M. Meraner, J. Schupp, and B. Lanyon, Polarisation-preserving photon frequency conversion from a trapped-ion-compatible wavelength to the telecom c-band, Applied Physics B 12-
3, 228 (2017). [11] U. Saha, J. D. Siverns, J. Hannegan, Q. Quraishi, and E. Waks, Low-noise quantum frequency conversion of photons from a trapped barium ion to the telecom o-band, ACS Photonics 10, 2861 (2023), https://doi.org/10.1021/acsphotonics.3c00581. [12] S. Moses, C. Baldwin, M. Allman, R. Ancona, L. Ascarrunz, C. Barnes, J. Bartolotta, B. Bjork, P. Blanchard, M. Bohn, et al., A race track trapped-ion quantum processor, arXiv preprint arXiv:2305.03828 (2023). [13] P. Wang, C.-Y. Luan, M. -
Qiao, M. Um, J. Zhang, Y. Wang, X. Yuan, M. Gu, J. Zhang, and K. Kim, Single ion qubit with estimated coherence time exceeding one hour, Nature communications 12, 233 (2021). [14] P. Drmota, D. Main, D. Nadlinger, B. Nichol, M. Weber, E. Ainley, A. Agrawal, R. Srinivas, G. Araneda, C. Ballance, et al., Robust quantum memory in a trapped-ion quantum network node, Physical Review Letters 130, 090803 (2023). [15] D. L. Moehring, P. Maunz, S. Olmschenk, K. C. Younge, D. N. Matsukevich, L.-M. Duan, and-
 C. Monroe, Entanglement of single-atom quantum bits at a distance, Nature 449, 68 (2007). [16] J. Hofmann, M. Krug, N. Ortegel, L. Gérard, M. Weber, W. Rosenfeld, and H. Weinfurter, Heralded entanglement between widely separated atoms, Science 337, 72 (2012). [17] H. Bernien, B. Hensen, W. Pfaff, G. Koolstra, M. S. Blok, L. Robledo, T. H. Taminiau, M. Markham, D. J. Twitchen, L. Childress, et al., Heralded entanglement between solid-state qubits separated by three metres, Nature 497, 86 (2013). [-
18] J. Schupp, V. Krcmarsky, V. Krutyanskiy, M. Meraner, T. Northup, and B. Lanyon, Interface between trappedion qubits and traveling photons with close-to-optimal efficiency, PRX quantum 2, 020331 (2021). [19] V. Krutyanskiy, M. Canteri, M. Meraner, J. Bate, V. Krcmarsky, J. Schupp, N. Sangouard, and B. P. Lanyon, Telecom-wavelength quantum repeater node based on a trapped-ion processor, Physical Review Letters 130, 213601 (2023). [20] V. Krutyanskiy, M. Canteri, M. Meraner, V. Krcmarsky, and B. -
Lanyon, Multimode ion-photon entanglement over 101 kilometers, PRX Quantum 5, 020308 (2024). [21] T. Pittman, B. Jacobs, and J. Franson, Single photons on pseudodemand from stored parametric down-conversion, Physical Review A 66, 042303 (2002). [22] F. Kaneda, B. G. Christensen, J. J. Wong, H. S. Park, K. T. McCusker, and P. G. Kwiat, Time-multiplexed heralded single-photon source, Optica 2, 1010 (2015). [23] Y. Pu, N. Jiang, W. Chang, H. Yang, C. Li, and L. Duan, Experimental realization of a mul-
tiplexed quantum memory with 225 individually accessible memory cells, Nature communications 8, 15359 (2017). [24] N. Sinclair, E. Saglamyurek, H. Mallahzadeh, J. A.

 6
Slater, M. George, R. Ricken, M. P. Hedges, D. Oblak, C. Simon, W. Sohler, et al., Spectral multiplexing for scalable quantum photonics using an atomic frequency comb quantum memory and feed-forward control, Physical review letters 113, 053603 (2014). [25] E. Saglamyurek, M. Grimau Puigibert, Q. Zhou, L. Giner, F. Marsili, V. B. Verma, S. Woo Nam, L. Oesterling, D. Nippa, D. Oblak, et al., A multiplexed light-matter interface for fibre-based quantum networks, Nature communications 7, 11202 (2016).-
 [26] S. Zhang, J. Shi, Y. Liang, Y. Sun, Y. Wu, L. Duan, and Y. Pu, Fast delivery of heralded atom-photon quantum correlation over 12km fiber through multiplexing enhancement, arXiv preprint arXiv:2403.13623 (2024). [27] C. E. Bradley, J. Randall, M. H. Abobeih, R. Berrevoets, M. Degen, M. A. Bakker, M. Markham, D. Twitchen, and T. H. Taminiau, A ten-qubit solid-state spin register with quantum memory up to one minute, Physical Review X 9, 031045 (2019). [28] R. Acharya, S. Brebels, A. Grill, J. -
Verjauw, T. Ivanov, D. P. Lozano, D. Wan, J. Van Damme, A. Vadiraj, M. Mongillo, et al., Multiplexed superconducting qubit control at millikelvin temperatures with a low-power cryo-cmos multiplexer, Nature Electronics 6, 900 (2023). [29] A. Kumar, A. Suleymanzade, M. Stone, L. Taneja, A. Anferov, D. I. Schuster, and J. Simon, Quantumenabled millimetre wave to optical transduction using neutral atoms, Nature 615, 614 (2023). [30] S. Borówka, U. Pylypenko, M. Mazelanik, and M. Parniak, Continuous wi-
deband microwave-to-optical converter based on room-temperature rydberg atoms, arXiv preprint arXiv:2302.08380 (2023). [31] W. Huie, S. G. Menon, H. Bernien, and J. P. Covey, Multiplexed telecommunication-band quantum networking with atom arrays in optical cavities, Physical Review Research 3, 043154 (2021). [32] Y. Li and J. Thompson, High-rate and high-fidelity modular interconnects between neutral atom quantum processors, arXiv preprint arXiv:2401.04075 (2024). [33] P. Dhara, N. M. Linke, E. Wa-
ks, S. Guha, and K. P. Seshadreesan, Multiplexed quantum repeaters based on dual-species trapped-ion systems, Physical Review A 105, 022623 (2022). [34] J. Ramette, J. Sinclair, Z. Vendeiro, A. Rudelis, M. Cetina, and V. Vuletić, Any-to-any connected cavitymediated architecture for quantum computing with trapped ions or rydberg arrays, PRX Quantum 3, 010344 (2022). [35] R. Bowler, J. Gaebler, Y. Lin, T. R. Tan, D. Hanneke, J. D. Jost, J. Home, D. Leibfried, and D. J. Wineland, Coherent diabatic io-
n transport and separation in a multizone trap array, Physical review letters 109, 080502 (2012). [36] J. M. Pino, J. M. Dreiling, C. Figgatt, J. P. Gaebler, S. A. Moses, M. Allman, C. Baldwin, M. Foss-Feig, D. Hayes, K. Mayer, et al., Demonstration of the trapped-ion quantum ccd computer architecture, Nature 592, 209 (2021). [37] A. E. Webb, S. C. Webster, S. Collingbourne, D. Bretaud, A. M. Lawrence, S. Weidt, F. Mintert, and W. K. Hensinger, Resilient entangling gates for trapped ions, Physical-
 review letters 121, 180501 (2018). [38] H. Takahashi, E. Kassa, C. Christoforou, and M. Keller, Strong coupling of a single ion to an optical cavity, Physical review letters 124, 013602 (2020).
[39] H. Takahashi, A. Wilson, A. Riley-Watson, F. Oručević, N. Seymour-Smith, M. Keller, and W. Lange, An integrated fiber trap for single-ion photonics, New Journal of Physics 15, 053011 (2013). [40] M. W. van Mourik, P. Hrmo, L. Gerster, B. Wilhelm, R. Blatt, P. Schindler, and T. Monz, rf-induced heating dynamics of noncrystallized trapped ions, Physical Review A 105, 033101 (2022). [41] A. Tobalina, E. Torrontegui, I. Lizuain, M. Palmero, and J. G. Muga, Invariant-based inverse engineering of t-
ime-dependent, coupled harmonic oscillators, Physical Review A 102, 063112 (2020). [42] See supplemental materials. [43] F. Diedrich and H. Walther, Nonclassical radiation of a single stored ion, Physical review letters 58, 203 (1987). [44] Y. Yu, N. R. Hutzler, J. T. Zhang, L. R. Liu, J. D. Hood, T. Rosenband, and K.-K. Ni, Motional-ground-state cooling outside the lamb-dicke regime, Physical Review A 97, 063423 (2018). [45] D. J. Wineland, C. Monroe, W. M. Itano, D. Leibfried, B. E. King, and D.-
 M. Meekhof, Experimental issues in coherent quantum-state manipulation of trapped atomic ions, Journal of research of the National Institute of Standards and Technology 103, 259 (1998). [46] Q. Wu, Y. Shi, and J. Zhang, Continuous raman sideband cooling beyond the lamb-dicke regime in a trapped ion chain, Physical Review Research 5, 023022 (2023). [47] A. Walther, F. Ziesel, T. Ruster, S. T. Dawkins, K. Ott, M. Hettrich, K. Singer, F. Schmidt-Kaler, and U. Poschinger, Controlling fast transport o-
f cold trapped ions, Physical review letters 109, 080501 (2012). [48] D. Leibfried, R. Blatt, C. Monroe, and D. Wineland, Quantum dynamics of single trapped ions, Reviews of Modern Physics 75, 281 (2003). [49] M. Joshi, A. Fabre, C. Maier, T. Brydges, D. Kiesenhofer, H. Hainzer, R. Blatt, and C. Roos, Polarization-gradient cooling of 1d and 2d ion coulomb crystals, New Journal of Physics 22, 103013 (2020). [50] G.-X. Wang, Y.-K. Wu, R. Yao, W.-Q. Lian, Z.-J. Cheng, Y.-L. Xu, C. Zhang, Y. Jiang, Y.-
-Z. Xu, B.-X. Qi, et al., Simulating the spin-boson model with a controllable reservoir in an ion trap, arXiv preprint arXiv:2402.07461 (2024). [51] J. D. Sterk, H. Coakley, J. Goldberg, V. Hietala, J. Lechtenberg, H. McGuinness, D. McMurtrey, L. P. Parazzoli, J. Van Der Wall, and D. Stick, Closed-loop optimization of fast trapped-ion shuttling with sub-quanta excitation, npj Quantum Information 8, 68 (2022). [52] S. Xu, X. Xia, Q. Yu, S. Khan, E. Megidish, B. You, B. Hemmerling, A. Jayich, J. Bie-
ner, and H. Häffner, 3dprinted micro ion trap technology for scalable quantum information processing, arXiv preprint arXiv:2310.00595 (2023). [53] C. Crocker, M. Lichtman, K. Sosnova, A. Carter, S. Scarano, and C. Monroe, High purity single photons entangled with an atomic qubit, Optics express 27, 28143 (2019). [54] L. Stephenson, D. Nadlinger, B. Nichol, S. An, P. Drmota, T. Ballance, K. Thirumalai, J. Goodwin, D. Lucas, and C. Ballance, High-rate, high-fidelity entanglement of qubits across an -
elementary quantum network, Physical review letters 124, 110501 (2020). [55] D. Bluvstein, S. J. Evered, A. A. Geim, S. H. Li, H. Zhou, T. Manovitz, S. Ebadi, M. Cain, M. Kalinowski,

 7
D. Hangleiter, et al., Logical quantum processor based on reconfigurable atom arrays, Nature , 1 (2023).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:13.694Z
- **Text Length:** 29748 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
