# PDF Document: You et al. - Temporally multiplexed ion-photon quantum interface via fast ion-chain transport.pdf

**File Path:** You et al. - Temporally multiplexed ion-photon quantum interface via fast ion-chain transport.pdf

**Processed Date:** 2026-02-10T18:16:01.713Z

**File Size:** 2907.01 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 292

**Title:** Temporally multiplexed ion-photon quantum interface via fast ion-chain transport

**Collection:** TEST

---

## Extracted Text Content

Temporally multiplexed ion-photon quantum interface via fast ion-chain transport
Bingran You,1, 2 Qiming Wu,1, 2, ∗ David Miron,1, 2 Wenjun Ke,1 Inder Monga,2 Erhan Saglamyurek,1, 2 and Hartmut Haeffner1, 2, †
1Department of Physics, University of California, Berkeley, CA 94720, USA 2Lawrence Berkeley National Laboratory, Berkeley, CA 94720, USA (Dated: September 29, 2025)
High-rate remote entanglement between photon and matter-based qubits is essential for distributed quantum information processing. A key technique to increase the modest entangling rates of existing long-distance quantum networking approaches is multiplexing. Here, we demonstrate a temporally multiplexed ion-photon interface via rapid transport of a chain of nine calcium ions across 74 μm within 86 μs. The non-classical nature of the multiplexed photons is verified by measuring the second-order cor-
relation function with an average value of g(2)(0) = 0.060(13). This indicates low crosstalk between the multiplexed modes, and can be reduced to negligible level once fiber coupling of single photons is incorporated. In addition, we characterize the motional degree-of-freedom of the ion crystal after transport and find that it is coherently excited to  ̄nα ≈ 110 for the center-of-mass mode. Our proof-of-principle implementation paves the way for large-scale quantum networking with trapped ions, b-
ut highlights some challenges that must be overcome.
Remote entanglement across distant quantum nodes [1, 2] may be used for long-distance quantum key distribution [3, 4], modular quantum computer architectures [5, 6], as well as quantum enhanced metrology and sensing [7–9]. Light-matter quantum interfaces are a fundamental building block for such applications, and allow for distributed entanglement between stationary matter qubits by using "flying" photons. For practical purposes, these quantum interfaces need to be capable of establishing remote e-
ntanglement at high rates across a large-scale network of quantum nodes. However, in widely adopted probabilistic schemes based on heralded photon detection [10–12], it is infeasible to distribute entanglement at useful rates over a few kilometers, as the attempt rate is limited by the round-trip travel-time of photons in a single mode. For example, for a communication distance of 100 km, photon-travel time will be around 1 ms, such that the attempt rate cannot be larger than 103 s−1. even with us-
e of a state-of-the-art photon-matter interface that can yield close to unity photon extraction efficiency [13], the long-distance matterphoton entanglement rate would be limited to sub 10 s−1 with total loss more than 20 dB after considering the collection probability of generated photons, quantum frequency conversion efficiency, photon detector efficiency, and the optical fiber loss [14, 15]. A key solution to this challenge is multiplexing: to combine multiple signals into a single channel and -
therefore increase the attempt rate [16, 17]. Multiplexing has become a mature technology for ensemble-based quantum interfaces, both in atomic gases and rare-earth ion doped solid-state systems [18–21]. However, large-scale local quantum information processing is technically challenging in these platforms [22]. In contrast, single emitters, including trapped ions and neutral atoms, offer excellent local quantum information processing capability beside their natural interface with
light at convenient wavelengths for quantum frequency conversion (QFC) [23, 24], and the possibility of longlived storage of entanglement [25, 26]. On the other hand, implementing a multiplexed light-matter interface with these systems is technically challenging. Towards overcoming this problem, a few multiplexing schemes have already been proposed for ion and atom-based quantum processors [27–30]. The only reported experimental work, we are aware of, is the demonstration of multiplexing using a s-
tatic three-ion chain [15], where the uneven ion spacing in the Coloumb crystal and the Gaussian cavity field introduces inherent challenges to scalability. In view of the recent advances of the QCCD(quantum charge-coupled device) architecture [31–33], a complementary approach to multiplexing is the process of iontransport through a specific spatial location with maximized photon coupling efficiency.
In this work, we demonstrate a temporal multiplexing scheme based on the transport of an ion-chain for improving the rate of ion-photon entanglement over long distances. In our experiments, we generate on-demand single photons by shuttling a nine-ion chain across the focus of a single-ion addressing beam. This scheme is expected to lead to a nearly nine-fold increase in attempt rate of the entanglement generation for quantum repeater nodes separated by >100 km. We verify the single-photon nature o-
f the photon trains by measuring a second-order time correlation of g(2)(0) = 0.060(13) without background subtraction. Furthermore, we address the problem of motional excitation during the transport, which is detrimental to local entangling operations [34] and in the case of using a cavity for stimulating the photons would lead to uncertainty in the coupling strength. [35]. Using a shuttling function designed to mitigate motional excitation, we find coherent excitation as high as of  ̄nα ∼ 110 on-
 the center-of-mass (COM) mode during one round of ion chain transport. These results show that the pro

 2
74 um
397 nm single photons
SPD
TDC
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
z
i zf
SPD
z
x
y
Reverse
FIG. 1. Schematics of multiplexed ion-photon interface. (a) A nine-ion chain is confined in an RF Paul trap. Controlling DC endcap voltages allows for ion transport. A beam of 397 nm and 866 nm light illuminating all ions is used for Doppler cooling. An objective collects the 397 nm single photons and guides them to a 50/50 beamsplitter, followed by a photomultiplier tube on each exit port for photon detection. An 866 nm beam individual addressing beam counter-propagates with the single photons. (-
b), (c) Excitation scheme and pulse sequence for the 397 nm single-photon generation. First, a global 397 nm beam prepares the ions to the 32D3/2 state. Then, the 866 nm addressing beam (resonant with 32D3/2 ↔ 42P1/2) is stroboscopically switched on during the transport to extract photons from the target ions.
posed multiplexing scheme can be scaled up to higher rates provided that more optimal transport methods are applied.
(a)
(b)
FIG. 2. Temporal profile of single-photon generation. (a) The black (red) line is the programmed (measured) voltage ramp on endcap 1 during the forward transport, showing negligible latency effect. The voltage on endcap 2 is an inverse function of endcap 1 with an offset of +2.51 V. Not shown is the ramp shuttling the ions back to the original position. (b) Detection time of the photons (bin width 16 ns) color coded with the associated ion (temporal mode).
The schematics of the experimental procedures is illustrated in Fig. 1(a). Our experiment is conducted using an RF Paul trap, composed of four RF blades for generating radial pseudopotential and two DC endcap electrodes for providing an axial harmonic confinement. We typically trap a string of nine 40Ca+ ions in a linear configuration with the COM mode frequency of ωx,z/(2π) = {1.15, 0.179} MHz on the radial and axial directions. Two global laser beams at 397 nm and 866 nm (not shown in the figure-
) evenly illuminate the entire ion chain for Doppler cooling and optical pumping, and a tightly focused 866 nm addressing beam with beam waist ≈ 6.0 μm allows for resonant excitation to extract the 397 nm single photons from individual ions. The generated single photons are collected by an objective with a numerical aperture of NA = 0.3 (collection efficiency Pc ≈ 2.5%) and directed to a 50/50 beam splitter (BS). At the exit port of the BS, photons are detected by two photomultiplier tube (PMT)-ba-
sed single-photon detectors (SPD), and their arrival times are recorded with a time-to-digital converter (TDC) for subsequent analysis. We generate on-demand single-photons based on a background-free scheme, as illustrated in Fig. 1(b) [36]. In this process, we first perform Doppler cooling (detuning ∆ = −Γ/2) of the ion chain for 200 μs, with the first 100 μs assisted by another beam −500 MHz detuned from the 42S1/2 ↔ 42P1/2 transition (not shown) to mitigate collision induced ion chain melting i-
n the Paul trap [37]. Then we begin the photon generation sequences with optical pumping to the 32D3/2 state (lifetime τ ≈ 1.2 s) for

 3
3 μs, followed by transport of the chain to position each ion in the tight focus of the 866 nm addressing beam resonant with 32D3/2 ↔ 42P1/2 transition to generate 397 nm single photons (see Fig. 1(c)). The ion transport and photon generation sequences are repeated twice between each Doppler cooling cycle.
In the ion-chain transport process, the endcap voltages are controlled by an arbitrary waveform generator (AWG) amplified by a custom-made, low-noise amplifier circuit with a gain of ten through low-pass filters and a vacuum feedthrough. The low-pass filters have cutoff frequencies of 1.9 MHz to allow fast transport of the ion chain close to the speed of the COM mode frequency. The programmed and the measured waveform show a negligible latency effect from the filters (Fig. 2(a)). The forward shutt-
ling function has eight steps, during each of which a different ion is placed in the focus of the addressing beam for 1.7 μs with the beam turned on simultaneously. After completing this sequence, we move the entire ion chain back to the original position in 35 μs using the same function form in one step. The voltage ramping function on the two endcaps V1,2(t) is in the form of a sigmoid-like polynomial function such that the first and second order derivative at the beginning and the end of the tr-
ansport
FIG. 3. Two-photon correlation measurements. Blue bars represent g(2) measurement when shuttling a nine-ion chain, g(2)(0) = 0.060(13). The horizontal axis indicates delay time, quantified by the number of attempts in between. The shuttling function in Fig. 2 is repeated twice before the next cooling cycle (see Fig. 1). Black bars represent g(2) measurement when addressing the fifth ion in a static nine-ion chain with g(2)(0) = 0.062(20). There are 25 attempts after each cooling cycle. White bars -
represent g(2) measurement of a single ion with the addressing beam using the same pulse sequence. The measured g(2)(0) = 0.010(6).
vanish [38]
VDC1(t) = VDC1 + ∆V
(
10 ( t
T
)3 − 15 ( t
T
)4 + 6 ( t
T
)5)
VDC2(t) = VDC2 − ∆V
(
10 ( t
T
)3 − 15 ( t
T
)4 + 6 ( t
T
)5) ,
(1) where ∆V is the voltage difference between the beginning and the end of a step, t is the time after the end of the previous step, and T = 9.1 μs is the total time of each transport. The details of voltage optimization and numerical simulation of motional excitation can be found in [39]. We reconstruct the temporal profile of 397 nm photons during transport using the recorded arrival times of photons on the PMTs. Fig 2(b) shows the emission from individual ions (modes). Data is accumulated for -
40 min, during which around 9.36 × 107 attempts were made to the whole string, corresponding to an attempt rate of 39.0 × 103/s, single photons count rate of 187 counts per second and an average photon extraction efficiency of 0.48 %. The total insertion loss to the detector accounts for the quantum efficiency of the detector ∼ 30%, single-photon generation efficiency using the 866 nm addressing beam ∼ 60%. Next, we perform a two-photon correlation experiment to test the non-classical characterist-
ics of our multiplexed photon source [40]. The probability of two-photon correlation when detecting a correlation event on two detectors at different times is given by
ρc(τ ) = ρ1(τ )ρ2(τ + n × δT ), (2)
where ρ1(τ ) and ρ2(τ + n × δT ) are the probability of detecting a photon at t = τ and τ + n × δT on detector 1 and 2. Here, n × δT represents the time delay between detection events separated by n photon generation attempts (modes). We define the second-order correlation function g(2)(n × δT ) as the coincidence count rate between the two detectors with a delay of n × δT delay in the entire measurement time, normalized such that the maximum value among all g(2)(m × δT ), for m ∈ {n}, is equal to-
 1. In Fig. 3, the blue lines shows the normalized correlation counts as a function of the delay mode window. We choose a coincidence window of 300 ns in each mode and measure 8 coincident counts at zero delay in 4.8 hours, corresponding to g(2)(0) = 0.060(13). The residual correlation can be explained by excitation of neighboring ions, i.e., crosstalk of the addressing beam, which is separately characterized to be 0.99 % using fluorescence of the nine-ion chain on the camera, corresponding to exp-
ected average g(2)
exp(0) = 0.049(8) (see Supplemental [39]). To further verify this hypothesis, we repeat the measurement with a single ion and compare it to addressing only the fifth ion in a static nine-ion chain, as shown by the black and white bars. Here in contrast to the multiplexing experiment, recooling is performed after every 25 singlephoton generation attempts. The two experiments yield

 4
(c)
(b)
FIG. 4. |↓⟩ ↔ |↑⟩ carrier excitation of nine-ion chain before and after shuttling. The horizontal axis is the global 729 nm beam probe time, and the vertical axis is the average ion excitation on the |↑⟩ state. Error bars denote one standard deviation of the quantum projection noise. (a) Rabi oscillations of the sideband-cooled ions (red dots). The red line is a numerical simulation of thermal distribution with n ̄th = 4 ± 3. (b) Rabi oscillation after the transport at half speed of the transport -
function in Fig. 2(a). The blue line is a numerical simulation with with n ̄th = 4, n ̄α = 50 ± 5. (c) Rabi oscillation after the transport at full speed. The green line is a numerical simulation with with  ̄nth = 4,  ̄nα = 110 ± 5.
g(2)(0) = 0.010(6) and g(2)(0) = 0.062(20) with 6.0 and 4.8 hours of data accumulation, respectively. The raw data of the g(2) measurements can be found in [39]. While the single ion g(2) is limited by the detector dark counts and ambient light, the measurement of the static 9-ion chain g(2) is limited by the crosstalk of the addressing beam. The results indicate the major source of residual correlation is addressing crosstalk [39]. The residual crosstalk is likely due to ion shuttling which the a-
ddressing beam can become misaligned with the position target ion due to lag in endcap voltage ramps or miscalibration. Similar to what is reported in [41], this crosstalk can be suppressed to <10−5 by coupling the single photons into a single-mode fiber [42] or improving the optical quality of the addressing beam. Although the single-photon results demonstrate that the shuttling scheme implemented in this work is effective for stable single-photon generation, it is essential to investigate the mo-
tional excitation induced by ion transport, which low amplitude is a key requirement for subsequent quantum operations on the atomic states. We assume that the motional excitation resulting from the transport follows a coherent state distribution. To characterize the motional state, we drive motion-sensitive Rabi oscillations on the 729 nm qubit transition with an ion chain and use a PMT to record the average spin excitation. We only consider the COM mode for computational simplicity, which we exp-
ect to be excited most because the absence of electric field gradient over the ion string. Therefore, the average qubit excitation can be written as
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
, (3)
where Pn is the occupation on the nth number state and encodes a convolution between a thermal and a coherent
phonon distribution [43]. Ω(i)
n is the Rabi frequency of the ith ion on the nth number state, considering the Gaussian beam so that the intensity on each on is slightly different. Fig. 4(a) shows the sideband cooled carrier Rabi flopping before the ion transport with a fitted thermal distribution  ̄nth = 4.0 ± 3.0. (b) shows the Rabi flopping after ion transport twice as slow as in Fig. 2(c). From numerical simulations (blue line), we find that the data can be explained by a coherent state  ̄nα = |α|2 ≈ 50 on the COM mode afte-
r the transport. Similarly, we perform the full-speed transport and the Rabi flopping matches with COM coherent excitation of  ̄nα ≈ 110 (Fig. 4(c)). We note that the mismatch between the experimental data and numerical simulation at full speed could be due to thermal and coherent occupation of other modes and will require additional investigation. For example, one can use an individual 729 nm addressing beam to probe the blue sideband transition of different modes [44].
Using this method, we measure the transport induced motional excitation at different shuttling time and find the optimal tranport time coincident with the simulation, albeit with substantial higher excitation (see Supplemental [39]). One of the explanations is mixing between axial and radial modes caused by a stray field, thus may excite the higher order modes. The optimal fast transport of a long ion chain remains an open question and is beyond the scope of this work. However, further optimizatio-
n can be done by energy self-neutral shuttling [31, 43], implementing closed-loop optimization of the shuttling function [45], etc.
To summarize, we have presented a multiplexed ionphoton interface by transporting a nine-ion chain with

 5
synchronized excitation in sub-hundred μs.The transport speed is limited by the axial frequency, which can be increased—potentially by an order of magnitude—using a 3D-printed ion trap [46] that achieves radial frequencies above 20 MHz. Higher radial confinement allows for increased axial frequencies while preserving a linear ion chain of the same size, thereby enabling faster ion transport. The 397 nm photon can be converted to the telecommunication band via a two-step QFC [24, 47, 48]. Once inte-
grated with state preparation on 32D3/2 Zeeman sublevel and photon collection with a single mode fiber, we expect a faster photon extraction rate [49] and negligible ion crosstalk while achieving high fidelity ionphoton entanglement [42, 50]. Our system can also be combined with a miniature cavity [35] for much higher photon extraction efficiency without sacrificing the photon generation rate, while the ion’s positional spread caused by coherent excitation can be mitigated by aligning the cavity a-
long the radial direction or further optimization of the shuttling function. These results stimulate the research of fast shuttling of a chain of tens of ions as a unit cell of logical qubit with heralded entanglement [28] and high-rates entanglement of quantum processors across large distances. During the resubmission of the manuscript, we became aware of related works on multiplexing schemes for scalable quantum networks [51–53]. B.Y and Q.W have contributed equally to this work. We thank Jiarui-
 Liu, Alp Sipahigil, Ben Lanyon, Tracy Northup, You-Wei Hsieh, and Wenji Wu for their helpful discussion. Additionally, we are grateful to Dietrich Leibfried for valuable comments on diabatic ion chain transport. Q.W. and H.H. acknowledge funding by the U.S. Department of Energy, Office of Science, Office of Basic Energy Sciences under Awards No. DESC0023277. This work is supported by the Office of Science (S.C.) in Advanced Scientific Computing Research (ASCR) through FOA - Quantum Internet to Ac-
celerate Scientific Discovery (LAB 21-2495) and by NSF Grant No. 2016245.
∗ qiming.wu@berkeley.edu † hhaeffner@berkeley.edu [1] H. J. Kimble, The quantum internet, Nature 453, 1023 (2008). [2] L.-M. Duan, M. D. Lukin, J. I. Cirac, and P. Zoller, Longdistance quantum communication with atomic ensembles and linear optics, Nature 414, 413 (2001). [3] T. van Leent, M. Bock, F. Fertig, R. Garthoff, S. Eppelt, Y. Zhou, P. Malik, M. Seubert, T. Bauer, W. Rosenfeld, et al., Entangling single atoms over 33 km telecom fibre, Nature 607, 69 (2022). [4] D. P. Nadlinger, P. Drmota, -
B. C. Nichol, G. Araneda, D. Main, R. Srinivas, D. M. Lucas, C. J. Ballance, K. Ivanov, E.-Z. Tan, et al., Experimental quantum key
distribution certified by bell’s theorem, Nature 607, 682 (2022). [5] C. Monroe, R. Raussendorf, A. Ruthven, K. R. Brown, P. Maunz, L.-M. Duan, and J. Kim, Large-scale modular quantum-computer architecture with atomic memory and photonic interconnects, Physical Review A 89, 022317 (2014). [6] J. P. Covey, H. Weinfurter, and H. Bernien, Quantum networks with neutral atom processing nodes, npj Quantum Information 9, 90 (2023). [7] P. Komar, E. M. Kessler, M. Bishof, L. Jiang, A. S. Sørensen, J. Ye, -
and M. D. Lukin, A quantum network of clocks, Nature Physics 10, 582 (2014). [8] B. Nichol, R. Srinivas, D. Nadlinger, P. Drmota, D. Main, G. Araneda, C. Ballance, and D. Lucas, An elementary quantum network of entangled optical atomic clocks, Nature 609, 689 (2022). [9] X. Guo, C. R. Breum, J. Borregaard, S. Izumi, M. V. Larsen, T. Gehring, M. Christandl, J. S. NeergaardNielsen, and U. L. Andersen, Distributed quantum sensing in a continuous-variable entangled network, Nature Physics 16, 281 (202-
0). [10] D. L. Moehring, P. Maunz, S. Olmschenk, K. C. Younge, D. N. Matsukevich, L.-M. Duan, and C. Monroe, Entanglement of single-atom quantum bits at a distance, Nature 449, 68 (2007). [11] J. Hofmann, M. Krug, N. Ortegel, L. Gérard, M. Weber, W. Rosenfeld, and H. Weinfurter, Heralded entanglement between widely separated atoms, Science 337, 72 (2012). [12] H. Bernien, B. Hensen, W. Pfaff, G. Koolstra, M. S. Blok, L. Robledo, T. H. Taminiau, M. Markham, D. J. Twitchen, L. Childress, et al., Her-
alded entanglement between solid-state qubits separated by three metres, Nature 497, 86 (2013). [13] J. Schupp, V. Krcmarsky, V. Krutyanskiy, M. Meraner, T. Northup, and B. Lanyon, Interface between trappedion qubits and traveling photons with close-to-optimal efficiency, PRX quantum 2, 020331 (2021). [14] V. Krutyanskiy, M. Canteri, M. Meraner, J. Bate, V. Krcmarsky, J. Schupp, N. Sangouard, and B. P. Lanyon, Telecom-wavelength quantum repeater node based on a trapped-ion processor, Physical Revi-
ew Letters 130, 213601 (2023). [15] V. Krutyanskiy, M. Canteri, M. Meraner, V. Krcmarsky, and B. Lanyon, Multimode ion-photon entanglement over 101 kilometers, PRX Quantum 5, 020308 (2024). [16] T. Pittman, B. Jacobs, and J. Franson, Single photons on pseudodemand from stored parametric down-conversion, Physical Review A 66, 042303 (2002). [17] F. Kaneda, B. G. Christensen, J. J. Wong, H. S. Park, K. T. McCusker, and P. G. Kwiat, Time-multiplexed heralded single-photon source, Optica 2, 1010 (2015-
). [18] Y. Pu, N. Jiang, W. Chang, H. Yang, C. Li, and L. Duan, Experimental realization of a multiplexed quantum memory with 225 individually accessible memory cells, Nature communications 8, 15359 (2017). [19] N. Sinclair, E. Saglamyurek, H. Mallahzadeh, J. A. Slater, M. George, R. Ricken, M. P. Hedges, D. Oblak, C. Simon, W. Sohler, et al., Spectral multiplexing for scalable quantum photonics using an atomic frequency comb quantum memory and feed-forward control, Physical review letters 113, 05-
3603 (2014). [20] E. Saglamyurek, M. Grimau Puigibert, Q. Zhou, L. Giner, F. Marsili, V. B. Verma, S. Woo Nam,

 6
L. Oesterling, D. Nippa, D. Oblak, et al., A multiplexed light-matter interface for fibre-based quantum networks, Nature communications 7, 11202 (2016). [21] S. Zhang, J. Shi, Y. Liang, Y. Sun, Y. Wu, L. Duan, and Y. Pu, Fast delivery of heralded atom-photon quantum correlation over 12km fiber through multiplexing enhancement, arXiv preprint arXiv:2403.13623 (2024). [22] C. E. Bradley, J. Randall, M. H. Abobeih, R. Berrevoets, M. Degen, M. A. Bakker, M. Markham, D. Twitchen, and T. H. Taminiau, A -
ten-qubit solid-state spin register with quantum memory up to one minute, Physical Review X 9, 031045 (2019). [23] V. Krutyanskiy, M. Meraner, J. Schupp, and B. Lanyon, Polarisation-preserving photon frequency conversion from a trapped-ion-compatible wavelength to the telecom c-band, Applied Physics B 123, 228 (2017). [24] U. Saha, J. D. Siverns, J. Hannegan, Q. Quraishi, and E. Waks, Low-noise quantum frequency conversion of photons from a trapped barium ion to the telecom o-band, ACS Photonics 1-
0, 2861 (2023), https://doi.org/10.1021/acsphotonics.3c00581. [25] P. Wang, C.-Y. Luan, M. Qiao, M. Um, J. Zhang, Y. Wang, X. Yuan, M. Gu, J. Zhang, and K. Kim, Single ion qubit with estimated coherence time exceeding one hour, Nature communications 12, 233 (2021). [26] P. Drmota, D. Main, D. Nadlinger, B. Nichol, M. Weber, E. Ainley, A. Agrawal, R. Srinivas, G. Araneda, C. Ballance, et al., Robust quantum memory in a trapped-ion quantum network node, Physical Review Letters 130, 090803 (2023). [2-
7] W. Huie, S. G. Menon, H. Bernien, and J. P. Covey, Multiplexed telecommunication-band quantum networking with atom arrays in optical cavities, Physical Review Research 3, 043154 (2021). [28] Y. Li and J. Thompson, High-rate and high-fidelity modular interconnects between neutral atom quantum processors, arXiv preprint arXiv:2401.04075 (2024). [29] P. Dhara, N. M. Linke, E. Waks, S. Guha, and K. P. Seshadreesan, Multiplexed quantum repeaters based on dual-species trapped-ion systems, Physical Re-
view A 105, 022623 (2022). [30] J. Ramette, J. Sinclair, Z. Vendeiro, A. Rudelis, M. Cetina, and V. Vuletić, Any-to-any connected cavitymediated architecture for quantum computing with trapped ions or rydberg arrays, PRX Quantum 3, 010344 (2022). [31] R. Bowler, J. Gaebler, Y. Lin, T. R. Tan, D. Hanneke, J. D. Jost, J. Home, D. Leibfried, and D. J. Wineland, Coherent diabatic ion transport and separation in a multizone trap array, Physical review letters 109, 080502 (2012). [32] J. M. Pino, J. M. -
Dreiling, C. Figgatt, J. P. Gaebler, S. A. Moses, M. Allman, C. Baldwin, M. Foss-Feig, D. Hayes, K. Mayer, et al., Demonstration of the trapped-ion quantum ccd computer architecture, Nature 592, 209 (2021). [33] S. Moses, C. Baldwin, M. Allman, R. Ancona, L. Ascarrunz, C. Barnes, J. Bartolotta, B. Bjork, P. Blanchard, M. Bohn, et al., A race track trapped-ion quantum processor, arXiv preprint arXiv:2305.03828 (2023). [34] A. E. Webb, S. C. Webster, S. Collingbourne, D. Bretaud, A. M. Lawrence, S. -
Weidt, F. Mintert, and W. K. Hensinger, Resilient entangling gates for trapped ions, Physical review letters 121, 180501 (2018). [35] H. Takahashi, E. Kassa, C. Christoforou, and M. Keller,
Strong coupling of a single ion to an optical cavity, Physical review letters 124, 013602 (2020). [36] H. Takahashi, A. Wilson, A. Riley-Watson, F. Oručević, N. Seymour-Smith, M. Keller, and W. Lange, An integrated fiber trap for single-ion photonics, New Journal of Physics 15, 053011 (2013). [37] M. W. van Mourik, P. Hrmo, L. Gerster, B. Wilhelm, R. Blatt, P. Schindler, and T. Monz, rf-induced heating dynamics of noncrystallized trapped ions, Physical Review A 105, 033101 (2022). [38] A. Tobalina-
, E. Torrontegui, I. Lizuain, M. Palmero, and J. G. Muga, Invariant-based inverse engineering of time-dependent, coupled harmonic oscillators, Physical Review A 102, 063112 (2020). [39] See supplemental materials. [40] F. Diedrich and H. Walther, Nonclassical radiation of a single stored ion, Physical review letters 58, 203 (1987). [41] C. D. Herold, S. D. Fallek, J. T. Merrill, A. M. Meier, K. R. Brown, C. Volin, and J. M. Amini, Universal control of ion qubits in a scalable microfabricated plana-
r trap, New Journal of Physics 18, 023048 (2016). [42] J. O’Reilly, G. Toh, I. Goetting, S. Saha, M. Shalaev, A. L. Carter, A. Risinger, A. Kalakuntla, T. Li, A. Verma, et al., Fast photon-mediated entanglement of continuously cooled trapped ions for quantum networking, Physical Review Letters 133, 090802 (2024). [43] A. Walther, F. Ziesel, T. Ruster, S. T. Dawkins, K. Ott, M. Hettrich, K. Singer, F. Schmidt-Kaler, and U. Poschinger, Controlling fast transport of cold trapped ions, Physical review-
 letters 109, 080501 (2012). [44] G.-X. Wang, Y.-K. Wu, R. Yao, W.-Q. Lian, Z.-J. Cheng, Y.-L. Xu, C. Zhang, Y. Jiang, Y.-Z. Xu, B.-X. Qi, et al., Simulating the spin-boson model with a controllable reservoir in an ion trap, arXiv preprint arXiv:2402.07461 (2024). [45] J. D. Sterk, H. Coakley, J. Goldberg, V. Hietala, J. Lechtenberg, H. McGuinness, D. McMurtrey, L. P. Parazzoli, J. Van Der Wall, and D. Stick, Closed-loop optimization of fast trapped-ion shuttling with sub-quanta excitation, npj Qu-
antum Information 8, 68 (2022). [46] S. Xu, X. Xia, Q. Yu, S. Khan, E. Megidish, B. You, B. Hemmerling, A. Jayich, J. Biener, and H. Häffner, 3dprinted micro ion trap technology for scalable quantum information processing, arXiv preprint arXiv:2310.00595 (2023). [47] T. A. Wright, R. J. Francis-Jones, C. B. Gawith, J. N. Becker, P. M. Ledingham, P. G. Smith, J. Nunn, P. J. Mosley, B. Brecht, and I. A. Walmsley, Two-way photonic interface for linking the sr+ transition at 422 nm to the telecommunic-
ation c band, Physical Review Applied 10, 044012 (2018). [48] S. Kasture, F. Lenzini, B. Haylock, A. Boes, A. Mitchell, E. W. Streed, and M. Lobino, Frequency conversion between uv and telecom wavelengths in a lithium niobate waveguide for quantum communication with yb+ trapped ions, Journal of Optics 18, 104007 (2016). [49] C. Crocker, M. Lichtman, K. Sosnova, A. Carter, S. Scarano, and C. Monroe, High purity single photons entangled with an atomic qubit, Optics express 27, 28143 (2019). [50] L. -
Stephenson, D. Nadlinger, B. Nichol, S. An, P. Drmota, T. Ballance, K. Thirumalai, J. Goodwin, D. Lucas, and C. Ballance, High-rate, high-fidelity entanglement of qubits across an elementary quantum network, Physical

 7
review letters 124, 110501 (2020). [51] L. Hartung, M. Seubert, S. Welte, E. Distante, and G. Rempe, A quantum-network register assembled with optical tweezers in an optical cavity, Science 385, 179 (2024). [52] M. Canteri, Z. Koong, J. Bate, A. Winkler, V. Krutyanskiy, and B. Lanyon, A photon-interfaced ten qubit
quantum network node, arXiv preprint arXiv:2406.09480 (2024). [53] Z.-B. Cui, Z.-Q. Wang, P.-C. Lai, Y. Wang, J.-X. Shi, P.-Y. Liu, Y.-D. Sun, Z.-C. Tian, Y.-B. Liang, B.-X. Qi, et al., A metropolitan-scale trapped-ion quantum network node with hybrid multiplexing enhancements, arXiv preprint arXiv:2503.13898 (2025).

 Supplemental material: Temporally multiplexed ion-photon quantum interface via fast ion-chain transport
Bingran You,1, 2 Qiming Wu,1, 2, ∗ David Miron,1, 2 Wenjun Ke,1 Inder Monga,2 Erhan Saglamyurek,1, 2 and Hartmut Ha ̈ffner1, 2, †
1Department of Physics, University of California, Berkeley, CA 94720, USA 2Lawrence Berkeley National Laboratory, Berkeley, CA 94720, USA (Dated: September 29, 2025)
CONTENTS
I. Crosstalk of addressing laser 1 A. Intensity crosstalk 1 B. Analysis of correlation counts at zero delay 2 C. Raw experimental data for the two-photon correlation measurements 2
II. Ion chain transport 2 A. Voltage levels setting for ions position control 2 B. Numerical simulation of shuttling process 3
III. Sideband cooling for the nine-ion chain 4 A. Cooling scheme 4 B. Spectrum scan 4 C. Carrier Rabi flop after sideband cooling 5
References 5
I. CROSSTALK OF ADDRESSING LASER
In this section, we discuss the characterization of the intensity crosstalk of the 866 nm addressing beam and corresponding correlation counts at zero delay time of our multiplexed photon source. We also show the raw experimental data of Fig. 3 in the main text with 50 ns time bins.
A. Intensity crosstalk
Single ion addressing technique with 729 nm light has been demonstrated for quantum information processing [S1]. In this experiment, we use the objective that is optimized for 729 nm (S6ASS2241, Sill Optics) to focus the 866 nm light to generate single photons from individual ions. To quantify the intensity crosstalk of the nine-ion chain, we position each ion at the center of the addressing beam, optimize the power of the beam, and record the fluorescence of individual ions using an Electron Mult-
iplying CCD (EMCCD) camera. The correlation between photon scattering rate Rs and laser power P for a two-level system is
∗ qiming.wu@berkeley.edu † hhaeffner@berkeley.edu
Rs = γ · s
2(1 + s) , (S1)
where s = k · P = P
Ps·(1+(2δ/γ)2) is the saturation parameter, Ps is the saturation power, δ is the laser detuning from atomic resonance, and γ is the decay rate of the excited state [S2]. With 397 nm laser power and detuning fixed, we use this function to co-fit the fluorescence data of center ions and neighbor ions as functions of 866 nm addressing laser power. Therefore, the intensity crosstalk equals kn/k1, with k1 being the fitted parameter for the center ions and kn being the fitted parameter for a nth nearest-
-neighbor ion.
We characterize the crosstalk when the beam is centered on each ion. Fig. S1 illustrate the ratio of laser intensity on the non-addressed (neighbor) ions to the addressed (center) ion of the nine-ion chain. The average intensity crosstalk between the center and the nearest-neighbor ions is calculated to be 0.99 %. We note that the crosstalk is higher on one side of the addressing beam, which could be due to the positional mismatch of the ion string relative to our addressing beam, or residual aber-
rations within the addressing beam itself.
123456789
987654321
Crosstalk heatmap
0.000
0.005
0.010
0.015
0.020
0.025
0.030
FIG. S1: Heatmap of crosstalk measurement of a nine-ion chain. The average nearest-neighbor intensity crosstalk is around 0.99 %.

 2
B. Analysis of correlation counts at zero delay
With the 866 nm addressing beam crosstalk characterization, we estimate the expected residual correlation counts at zero delay time, corresponding to g(2)(0) in the second-order correlation function. We assume for each trial with 866 nm addressing light, the probability of getting one photon from the center ion is ρ0, the probability of getting one photon from the two nearest neighbor ions is ρs1 and ρs2, and the combined contribution of limited collection efficiency and loss along the optical pat-
h is ρloss. For convenience, we use ρ ̃ = ρ·(1−ρloss). Then, for non-zero delay time, if all other noise sources are ignored, we have correlation probability
ρc(n) = ( ρ ̃0 + ρ ̃s1 + ρ ̃s2
2 )2, n ̸= 0
in which there is a factor of 2 in the denominator coming from the BS. For zero delay time, we have
ρc(0) = [2 ( ρ ̃0
2 ) · ( ρ ̃s1 + ρ ̃s2
2 ) + 2 ( ρ ̃s1
2 ) · ( ρ ̃s2
2 )].
Therefore in the limit of small crosstalk, we have
g(2)
exp (0) ≈ 2 · ρ ̃s1 + ρ ̃s2
ρ ̃0
+ g(2)
0 (0),
in which g(2)
0 (0) = 0.010(6) corresponds to the contribution of other noise sources other than crosstalk, e.g., detector dark counts and ambient light, that have been characterized by single ion correlation measurement. Therefore, we expect
g(2)
exp (0) = 0.050(13), which is the average g(2)(0) value for nine ions as nine single photon sources. It agrees well with our measurement result of g(2)(0) = 0.060(13) in the multiplexed single-photon generation.
C. Raw experimental data for the two-photon correlation measurements
Figure 3 in the main text presents a bar-like plot comparing the g(2) measurements across three experimental scenarios: shuttling a nine-ion chain, addressing the fifth ion in a stationary nine-ion chain, and a single static ion. In that figure, the coincidence data are displayed as a function of relative pulse offsets (modes) rather than absolute detection times. This representation accounts for the different timescales of photon generation sequences among the experiments. For example, in the sta-
tic ion case, the repetition rate is higher, with shorter time intervals between modes. However, this approach omits certain temporal details of coincidence measurement, such as the linewidth of the coincidence peak, which are informative about the photon wave packet. To provide this additional context, we present the raw experimental data from Fig. 3 in Fig. S2 using a time bin of 50 ns.
(a)
(b)
(c)
Shuttling nine-ion chain
Fifth ion in a static nine-ion chain
Static single ion
FIG. S2: Raw experimental data for g(2) measurement with 50 ns time bin for (a) shuttling a nine-ion chain (b) fifth ion in a static nine-ion chain and (c) a static single ion.
II. ION CHAIN TRANSPORT
In this section, we illustrate the voltage levels for ion position control and numerical simulation of the shuttling process. Based on the simulation, the center of mass mode has the dominant motional excitation during the ion transport. We experimentally characterize the transport induced motional excitation as a function of transport time and compare it with numerical simulation.
A. Voltage levels setting for ions position control
Control of ion positions during fast shuttling is crucial since misaligned ion positions may lead to insufficient photon extraction and increased crosstalk. To precisely align each ion directly at the center of the addressing beam for every voltage step, it is important to understand the ion-ion spacings in the chain. Then, we need to make sure the change in voltage levels matches the corresponding spacing between the ions. In this experiment the two DC endcaps provide the axial confinement. With -
average voltages of around 24.24 V on the

 3
endcaps, the axial trap frequency is around 179 kHz. Combining the Coulomb force and the harmonic potential, the relative equilibrium positions of ions are shown in Fig. S3.
12345678
Ion index
9
10
11
Distance ( m)
Distance between adjacent ions
FIG. S3: Nearest-neighbor ion spacing of a nine-ion chain under axial trap frequency of 179 kHz, with average endcap voltage 24.24 V.
To facilitate the transport of ion chains from one end to the other, we modulate the voltages by increasing voltage on one endcap and decreasing voltage on another while the average voltage remains unchanged. Fig. S4 shows the axial displacement of the trap potential’s center as a function of voltage change on both endcaps, indicating a near linear relationship between the trap center position and ∆V (t). Therefore, we program the voltage level changes for each step referring to the ion-ion spacin-
g, as shown in Fig. S3. Each voltage ramp follows the function form with zero first and secondorder derivatives at the beginning and end (Eq. 1 in the main text [S3]).
012345
Voltage change ( V)
75
50
25
0
Trap center position ( m)
Potential vs voltage change ( V)
Simulation Linear fit
FIG. S4: Relation between axial trap center and endcap voltage change ∆V (t) with average endcap voltage 24.24 V.
B. Numerical simulation of shuttling process
The nine-ion chain transport can be described by ordinary differential equations (ODE) as
d2zi
dt2 = −ω2
0zi + kq2
m
N
X
j=1 j̸=i
1
(zi − zj)2 · sgn (zi − zj) (S2)
for i = 1, 2, 3, . . . , N . In the expression zi is the position of each ion, ω0 the trap frequency along the axial direction, k the Coulomb’s constant, q the charge of the electron, and m is the mass of 40Ca+. To simulate this, we calculate the trajectory of each ion by considering a time-dependent trap potential and Coulomb interaction with all other ions. For initial states, the equilibrium positions of each ion are solved using the Newton method. The equilibrium positions of the nine-ion chai-
n at the beginning are shown in Fig. S3. Then, by simulating the trap potential with finite element method, the temporal function of trap frequency and trap center can be obtained. With the programmed half-speed shuttling function, the positions of all the ions during the transport are shown in Fig. S5. The expected relative  ̄n from transport-induced coherent excitation of 9 motional modes along axial direction at the end of the half-speed shuttling process are shown in Fig. S6, showing the COM m-
ode is dominantly excited in our simulation.
FIG. S5: The positions of 9 ions chain as functions of time. The first 9 narrow blue areas are the time windows where voltage levels stay static. The last blue window is used to measure the motional excitation of all 9 modes at the end of shuttling.
To better understand the coherent excitation during the ion transport, we experimentally measure and numerically simulate the phonon number excitation on the COM mode as a function of the total transport time (Fig. S7).
Need to discuss the results of transport induced heating after finishing the simulation and data processing In the future, using a micro-fabricated trap with multiple segmented DC electrodes can help to mitigate this issue.

 4
123456789
Mode Number
10 12
10 8
10 4
100
Relative excitation
Motianl excitation of different modes
FIG. S6: Calculated excitation of 9 motional modes along the axial direction at the end of the half-speed shuttling process. The COM mode has the dominant motional excitation.
150 200 250
Shuttling time ( s)
10 1
100
101
102
103
104
COM mode phonon number
Coherent excitation vs shuttling time
FIG. S7: Numerical simulation for COM mode coherent excitation at the end of shuttling process. Blue, red and green lines are corresponding to different trap frequency with
ωCOM/(2π) ≈ 180 kHz, 189 kHz, and 198 kHz. The black dash lines mark measurement results for full-speed and half-speed shuttling.
III. SIDEBAND COOLING FOR THE NINE-ION CHAIN
In this section, we discuss the cooling scheme in this experiment and how thermal heating and coherent excitation influence carrier Rabi flopping with 9 ions.
A. Cooling scheme
We use 42S1/2, mJ = +1/2 ↔ 32D1/2, mJ = −3/2 for optical pumping, 42S1/2, mJ = −1/2 ↔ 32D1/2, mJ = −1/2 to probe the carrier transition,
0 50 100 150 200
nth motional state
0.0
0.2
0.4
0.6
Relative coupling strength
Sideband cooling coupling strength
Order 1 Order 2 Order 3 Order 4
FIG. S8: Relative coupling strength on the carrier and first three orders red sideband for η = 0.23.
and 42S1/2, mJ = −1/2 ↔ 32D1/2, mJ = −5/2 for sideband cooling. Since the axial COM frequency is as low as 179 kHz, the Doppler cooling limit is around 43 quanta, placing the ions beyond the Lamb-Dicke regime before starting the sideband cooling. So we need to consider the change of red sideband coupling strength at different motional states
Ωn−s,n = Ω0
D
n − s eiη(a+a†) n
E
= Ω0e−η2/2ηs
r
(n − s)!
n! Ls
(n−s) η2 ,
(S3)
in which s (> 0) is the order of red sideband [S4]. As shown in Fig. S8, after Doppler cooling, the first-order sideband cooling may have inefficient coupling in a certain range of motional states. Therefore, we first conduct sideband cooling on the second-order red sideband of the three lowest frequency modes and then the first-order red sideband for all the modes. We also use additional cycles for sideband cooling on the COM mode since we found this is the dominant mode for thermal motions by sc-
anning the motional spectrum. All these sideband cooling cycles are performed relative to carrier transition 42S1/2, mJ = −1/2 ↔ 32D1/2, mJ = −5/2 . On resonance, optical pumping cycles are inserted between and performed at the end.
B. Spectrum scan
After the sideband cooling and optical pumping cycles, we run a full spectrum scan covering the frequency range of all the first-order motional modes along the axial direction. As shown in Fig. S9, even though additional cycles are added for COM mode, it dominates the motional excitation of the crystal after sideband cooling, similar to what has been observed in previous research [S5].

 5
FIG. S9: Motional spectrum after sideband cooling covering carrier, all the 9 RSBs and BSBs.
0 50 100 150 200 250
nth state
0.00
0.01
Population
Population distribution on the number states
n = 50.0, nth = 4.0 n = 0.0, nth = 54.0 n = 110.0, nth = 4.0 n = 0.0, nth = 114.0
FIG. S10: Population distribution on the number of states under thermal heating, coherent excitation, and both.
C. Carrier Rabi flop after sideband cooling
The carrier Rabi frequency is modulated according to motional state occupation. In theory, all motional modes need to
be taken into consideration since they have different LambDicke parameters. However, in this experiment, both spectrum scan and shuttling simulation show COM mode dominating the motional excitation. Therefore, we only consider the COM mode for fitting carrier Rabi flops to reduce computational complexity. The carrier Rabi frequency is [S6]
Ωnn = Ω e−|α|2/2Ln |α|2 , (S4)
in which α = iη ̃eiνt, ν is the trap frequency along the axial direction, η ̃ is the effective Lamb-Dicke parameter, which for
the COM mode η ̃ = η/√N ≈ 0.077 with N being the number of ions. So the dependence of carrier Rabi frequency on the Lamb-Dicke parameter is
Ωnn = Ω e−η ̃2/2Ln η ̃2
≈ 1 − (n + 1
2 )η ̃2 + ( 1
8+n
4 + n2
4 )η ̃4
−( 1
48 + n
18 + n2
24 + n3
36 )η ̃6 + ...
(S5)
Here, we expand the carrier Rabi frequency to the 6th order because of the low trap frequency and high motional excitation so that the ions are out of the Lamb-Dicke regime.
While noise sources like surface noise and technical noise will lead to a thermal state, fast shuttling causes coherent excitation. Fig. S10 shows that for coherent excitation, motional states will distribute around the  ̄nα = |α|2 number state, while thermal heating leads to a Boltzmann distribution of the number states. In the presence of both mechanisms, The phonon probability follows a convolution of coherent and thermal distribution, which has a much wider distribution over different number s-
tates [S7, S8].
[S1] H. C. N ̈agerl, D. Leibfried, H. Rohde, G. Thalhammer, J. Eschner, F. Schmidt-Kaler, and R. Blatt, Laser addressing of individual ions in a linear ion trap, Phys. Rev. A 60, 145 (1999). [S2] P. Van der Straten and H. Metcalf, Atoms and molecules interacting with light: Atomic physics for the laser era (Cambridge University Press, 2016). [S3] A. Tobalina, E. Torrontegui, I. Lizuain, M. Palmero, and J. G. Muga, Invariant-based inverse engineering of time-dependent, coupled harmonic oscillators,-
 Physical Review A 102, 063112 (2020). [S4] D. Leibfried, R. Blatt, C. Monroe, and D. Wineland, Quantum dynamics of single trapped ions, Reviews of Modern Physics
75, 281 (2003). [S5] Q. Wu, Y. Shi, and J. Zhang, Continuous raman sideband cooling beyond the lamb-dicke regime in a trapped ion chain, Physical Review Research 5, 023022 (2023). [S6] K. E. Cahill and R. J. Glauber, Ordered expansions in boson amplitude operators, Physical Review 177, 1857 (1969). [S7] A. Walther, F. Ziesel, T. Ruster, S. T. Dawkins, K. Ott, M. Hettrich, K. Singer, F. Schmidt-Kaler, and U. Poschinger, Controlling fast transport of cold trapped ions, Physical review letters 109, 0-
80501 (2012).
[S8] F. Ziesel, Quantum State Manipulation and Dynamics in Micro Ion Traps, Ph.D. thesis, Universita ̈t Ulm (2013).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:01.713Z
- **Text Length:** 47152 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
