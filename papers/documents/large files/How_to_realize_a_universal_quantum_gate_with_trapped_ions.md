# PDF Document: Schmidt-Kaler et al. - 2003 - How to realize a universal quantum gate with trapped ions.pdf

**File Path:** Schmidt-Kaler et al. - 2003 - How to realize a universal quantum gate with trapped ions.pdf

**Processed Date:** 2026-02-10T18:17:07.448Z

**File Size:** 403.61 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2698

**Title:** How to realize a universal quantum gate with trapped ions

**Collection:** Large Files

---

## Extracted Text Content

arXiv:quant-ph/0312162v1 19 Dec 2003
1
e-mail: ferdinand.schmidt-kaler@uibk.ac.at, FAX: +435125072952
Key words Quantum computing, quantum bits, entanglement, single ions

Appl.Phys.B manuscript No. (will be inserted by the editor)
How to realize a universal quantum gate with trapped ions
Ferdinand Schmidt-Kaler ⋆, Hartmut H ̈affner, Stephan Gulde, Mark Riebe, Gavin P.T. Lancaster, Thomas Deuschle, Christoph Becher, Wolfgang H ̈ansel, J ̈urgen Eschner, Christian F. Roos, and Rainer Blatt
Institut fu ̈r Experimentalphysik, Universit ̈at Innsbruck, Technikerstraße 25, A-6020 Innsbruck, Austria
Received: date / Revised version: date
Abstract We report the realization of an elementary quantum processor based on a linear crystal of trapped ions. Each ion serves as a quantum bit (qubit) to store the quantum information in long lived electronic states. We present the realization of single-qubit and of universal two-qubit logic gates. The two-qubit operation relies on the coupling of the ions through their collective quantized motion. A detailed description of the setup and the methods is included.
1 Introduction
Quantum computers (QC) are known to perform certain computational tasks more efficiently than their classical counterparts. The theoretical concept of QC is highly developed. Most well-known among the quantum algorithms[1] is the efficient algorithm for the factorization of large numbers[2] which threatens the security of the commonly used RSA-encryption scheme. Furthermore, efficient quantum algorithms exist for searching entries in an unsorted data base[3], for simulating quantum spin systems[4]-
, and for quantum games. As in a classical computer, errors will necessarily occur. Although the nature of errors is different in quantum mechanical and in classical computers, algorithms have been developed which can correct qubit errors[5,6]. World-wide efforts aim at a scalable realization of a QC[7]. Already in 1995, J. I. Cirac and P. Zoller proposed to implement a scalable QC on a string of trapped ions, where each ion’s electronic state represents a qubit[8]. Quantum gates between any subse-
t of ions would be induced by laser-ion interactions, including the coupling of the ions to their collective quantized motion[9]. Today, a number of different proposals for quantum gates in an ion based QC are known. While the construction of a large scale QC might still be in remote future, we may already today perform
⋆ corresponding author
experiments with a small number of qubits, bringing into reality what used to be Gedanken experiments and thus enlightening the foundations of quantum mechanics. This will serve to further extend our knowledge of the puzzling quantum theory and its borderline to classical physics, given by decoherence and the measurement process[10]. The ion-trap system itself is fully understood theoretically, and equally well its interaction with a laser field. Any kind of quantum logic gate operation may thus b-
e predicted. Actual experiments are performed with few ions that are confined in a Paul trap, such that time scales for decoherence and for the dephasing of qubits due to fluctuations of external parameters are long as compared to the coherent qubit operation times. The detection of the ions’ internal states relies on electron shelving, leading to a detection efficiency near unity. In this kind of fully defined, text-book like setting, elementary quantum processors may be realized. Quantum logic g-
ate operations and entangled states may be studied. The most challenging experimental step towards achieving the Cirac&Zoller scheme (CZ) of a QC is to implement the controlled-NOT (CNOT) gate operation between two individual ions. The CNOT quantum logical gate corresponds to the XOR gate operation of classical logic which flips the state of a target bit conditioned on the state of a control bit. Taking the basis states |a, b〉 = {|0, 0〉, |0, 1〉, |1, 0〉, |1, 1〉} of two qubits, the CNOT operation re-
ads |a, b〉 → |a, a ⊕ b〉, where ⊕ represents an addition modulo 2. Only if the control qubit (first entry) is in |1〉, the quantum state of the control qubit changes. Here, we present the realization of a CNOT quantum gate [11] according to the original CZ proposal [8]. In our experiment, two 40Ca+ ions are held in a linear Paul trap and are individually addressed with focussed laser beams. Superpositions of long-lived electronic states represent a qubit. By initializing the control and target qubit-
 in all four basis states and performing the CNOT operation, we determine the desired truth table. To prove the quantum nature of the gate, we use a

How to realize a universal quantum gate with trapped ions 3
superposition state for the control qubit and generate an entangled output state. The paper gives a detailed description of the experimental apparatus and the required procedures in sections 2 and 3. In sect. 4, we discuss the realization of the universal two-ion CNOT gate, followed by a discussion of its current limitations and possible future improvements.
2 Experimental setup
2.1 Levels and transitions in the 40Ca+ ion
The Calcium ion (40Ca+) has a single valence electron and no hyperfine structure, see fig. 1a for the relevant levels and transitions. We have chosen 40Ca+ for several reasons: (a) The transition wavelengths for Dopplercooling and optical pumping are well suited for solidstate and diode laser sources. (b) Long-lived metastable states (τ ∼ 1 s) allow for the implementation of qubits. (c) The narrow-line quadrupole transition can also be used to implement sideband cooling to the vibrational ground s-
tate. We cool the ion on the S1/2 to P1/2 transition near 397 nm close to the Doppler limit. The UV-radiation is produced as the second harmonic of a Ti:Sapphire laser at 794 nm1. Grating stabilized diode lasers at 866 nm and 854 nm prevent pumping into the D3/2 and D5/2 states. Each of the above lasers is frequency-locked to its individual optical reference cavity using the Pound-DreverHall method [14]. With cavity linewidths of 2-5 MHz, we reach a laser frequency stability of better than 300 kHz-
. Frequency tuning of the lasers is achieved by scanning the length of the corresponding reference cavities using piezo-electric actuators. The electronic level S1/2(m = −1/2) ≡ |S〉 is identified with logic |0〉 and D5/2(m = −1/2) ≡ |D〉 with logic |1〉, respectively. To perform quantum logic operations, we excite the corresponding transition with a Ti:Sapphire laser near 729 nm. The complete laser system for the qubit manipulation is described in sect. 2.4 and 2.5. We detect the quantum state of the-
 qubit by applying the laser beams at 397 nm and 866 nm and monitoring the fluorescence of the ion at 397 nm on a photomultiplier and on a CCD camera (electron shelving technique[15]). The internal state of the ion is discriminated with an efficiency close to 100%, details of the detection are found in sect. 3.5. It is of advantage that pure 40Ca+ ion crystals can be loaded into the trap using a relatively simple photoionization scheme[16] that relies on a two step laser excitation: A weak beam of-
 neutral Ca is emitted by a resistantly heated oven[17]. Calcium atoms are excited on
1 The practicability of a grating stabilized UV-diode[12, 13] for single ion cooling and detection has been proven.
S1/2
P1/2
D3/2
729nm
D5/2
P3/2
866nm
393nm
397nm
854nm
|S>
|D>
wz
a) b)
nz=1
nz=0
Fig. 1 a)40Ca+ level scheme. A qubit is encoded in the S1/2, (m = −1/2) ground and D5/2, (m = −1/2) metastable state of a single trapped ion. b) The lowest two number states n of an axial vibrational motion in the trap are used as quantum bus.
Fig. 2 Construction of the linear trap[19] out of four blades (a) and two tips (b). The 3D-view (c) shows the arrangement of the RF-blades which generate the radial trapping potential. The closest distance between the blades is 1.6 mm. The tips are separated by 5.0 mm. All electrodes are mounted onto a Macor ceramics spacer. The typical machining precision of all parts is 5 to 10 μm. The RF-blades are fabricated by electro-erosion from stainless steel, the tips are made of molybdenum.
the 4s1S0 → 4p1P1 transition near 423 nm by a grating stabilized diode laser[18,17]. Ionization is reached with radiation at λ ≤ 390 nm using a UV-diode laser or even a simple UV-light emitting diode.
2.2 Linear Paul trap
For the experiments, 40Ca+ ions are stored in the harmonic potential of a linear Paul trap. The trap is made of four blades for radial confinement and two tips for axial confinement, see fig. 2. Under typical operating conditions we observe axial and radial motional frequencies (ωax, ωrad)/2π = (1.2, 5.0) MHz, respectively. The trap combines good optical access with relatively high trapping frequencies, even though the trap dimensions are comparatively large. Electrically insulating parts have no -
direct line of sight to the ions. We attribute the low heating rate (<1 phonon/50ms)[20] to the combination of a large distance between ions and trap electrodes (r0≈ 0.8 mm) and the clean loading scheme by photo-ionization. Both tips, typically at +1kV, are positioned in the symmetry axis with high precision. Small asymmetries are compensated by applying voltages of below 200 V to electrodes which are placed at a radial distance of 30 mm from the trap symmetry axis (fig. 2c). The radio frequency (-
RF) Ω/(2π) ≃ 23.5 MHz is applied

4 F. Schmidt-Kaler et al.
to two diagonally opposing blades (the other two being at 0 V). This creates an oscillating electrical quadrupole field which results in a radial trapping potential. The RF is generated by a synthesizer2 and amplified3 to 15 W. A helical λ/4-resonator (loaded Q-value ∼200) serves to match the capacitive load of the trap structure with the 50 Ω output of the amplifier and to enhance the drive voltage to a few kVpp. We typically operate the trap close to the stability parameter q≤0.6[21]. In order t-
o avoid RF pick-up on the DC-voltage leads we use separate feed-throughs and filter the DC voltages. The trap is mounted in a UHV housing, pumped by a Titanium sublimation and an ion getter pump4. The residual gas pressure is below 2 × 10−11 mbar.
2.3 Optical setup
The output of a Ti:Sapphire laser5 near 794 nm is frequencydoubled6 to obtain up to 50 mW light at 397 nm. We stabilize the UV power to 1%(rms) using an AOM in front of the doubling cavity. During a gate operation on the qubit transition, any residual UV-light has to be suppressed to a maximum. As the UV-light needs to be switched faster than mechanical shutters would allow, we pass it through an AOM7, couple into a single-mode polarization-maintaining fibre8 and transport it to the trap. After th-
e fiber output, the light is sent through a second AOM. Switching the RF-drive of both AOM’s yields an extinction of about 2 × 10−6. Additionally, due to the fibre, the UV-beam is spatially filtered such that its focus on the ion crystal (w0 ∼ 50μm, ≤100 μW) does not cause excessive stray-light on the trap electrodes. The UV-beam leaving the second AOM is split into two beams which are superimposed with light at 866 nm and 854 nm. These beams enter the vacuum system via UVAR coated windows, and in-
tersect at the ion trap under angles of {-22◦hor., 0v◦ert.} with respect to the axial trap
direction, and {22◦hor., 45v◦ert.}, respectively. The combi
nation of both light fields is used for Doppler cooling, ion detection, and the compensation of micro-motion. Another part of the UV-light transmitted through the fiber is controlled by a third AOM, enters along the axis of the magnetic field {22◦hor., 0v◦ert.}, and is applied
for optical pumping. The switching of the light field at 854 nm is controlled by an additional AOM in double-pass configuration to assure on/off-dynamics of about 2 × 10−4. The laser field at 866 nm does not couple to the qubit levels and is kept on continuously.
2 Marconi Inc., Signal gen. 2019A 3 Minicircuits Inc., LZY-1 4 Varian Inc., Starcell 20 5 Coherent Inc., 899-21 6 Spectra Inc., Wavetrain 7 Brimrose Inc., QZF-80-20 8 Sch ̈after Kirchhof Inc.
The fluorescence of the ions at 397 nm is collected through a viewport using a large collimating lens9 at a working distance of 65 mm and focused onto an intensified CCD camera10. This corresponds to a solid angle of 0.01 of 4π. A magnification of ×20 is chosen. In opposite direction, a similar lens with magnification of ×7 is used for single photon counting with a photomultiplier11 (PMT). We estimate an overall detection efficiency of 0.1 % and 0.2 % for the CCD and PMT, respectively. We typicall-
y obtain a PMT count rate of ∼30 kHz from a single ion, while the stray light level is below 2 kHz. The direction of the detection with respect to the trap symmetry axis is {-68◦hor., 0v◦ert.} and {112◦hor., 0v◦ert.}
for CCD and PMT, respectively.
2.4 Laser setup for the qubit transition
Qubit operations are performed with laser light near 729 nm, generated from a second Ti:Sapphire laser12. To obtain a high fidelity of gate operations this laser source has to be stabilized in frequency and intensity to a high degree. For frequency stability, we rely on a stable reference cavity. Its length stability is guaranteed by a spacer from ultra-low thermal expansion material (ULE) on which the cavity mirrors (super-mirrors with a few ppm loss and transmission, measured finesse of 2.4×105)-
 are optically contacted. For additional stability, the cavity is suspended on wires in a temperature stabilized UHV chamber. We derive a Pound-DreverHall error signal[14] and stabilize the laser frequency with a servo bandwidth of ≤2.5 MHz obtaining a laser linewidth ≤ 100 Hz [22]. The laser intensity is stabilized using an AOM to about 1%(rms). The qubit operations require laser pulses with well defined phase, frequency, intensity and duration. We modulate the output of the Ti:Sapphire laser (∼3-
50 mW) with an AOM13 (see fig. 3) in double-pass configuration. The radio frequencies and phases that are applied to the AOM transfer directly to the light field14. For maximum flexibility of the complex temporal pattern, we use the scheme depicted in fig. 3. Sideband ground state cooling is performed with sources F4 and F5 at frequencies resonant to the red sidebands ω0 and
√3 ω0. The specific quantum gate sequence is composed of pulses on the carrier and blue sideband of the bus mode, driven by the sources F1 and F2, while F3 is used for the AC-Stark compensation (see sect. 3.3). The computer digital output card15, temporal resolution 1 μs, 32
9 Nikon, MNH-23150-ED-Plan-1.5x 10 Princton Instum., Inc. I-Penta-MAX 11 Electron-Tubes Inc., P25 12 Coherent Inc., 899-21 13 Brimrose Inc.,TEF-270-100 14 Due to the double-pass configuration, the modulation of laser frequency and phase is twice the applied RF modulation. 15 J ̈ager Inc., ADwin

How to realize a universal quantum gate with trapped ions 5
F1
F2
F3
F4
F5
F6
s1
s2
s3
s4
s5
s6
s7
c1
c2
c3 m
∆φ
RF
LO
IF amp
AOM
Pol.
λ/4
mirror
729nm
to fiber
Fig. 3 RF setup for control of 729 nm laser: The output of RF-synthesizers F1 to F516 is controlled by switches (s1 to s7)17, added up with combiners (c1 to c3)18 and mixed19 with the output of the synthesizer F 6, which serves as local oscillator (LO). The phase of the LO is controlled via a digital phase shifter(DPS)20. The output (IF) is amplified and fed to an acousto-optical modulator, operated in doublepass configuration. The frequencies F1 to F6 are computer controlled via GPIB.
channels, serves to switch the frequency sources and the digital phase shifter. F6 compensates for the drift of the laser reference cavity. The linear drift component of ≤ 10 Hz/s is determined by comparison to the atomic resonance and anticipatively corrected for. As we saturate the LO input of the frequency mixer m, a small RFtransmission modulation of the phase shifter for different ∆φ does not convert into a RF-intensity modulation at IF. In addition, this RF-setup allows for the generation of-
 multi-chromatic light fields, as necessary e.g. for the compensation of the AC-Stark effect.
2.5 Single ion addressing optics
For addressing individual ions, light at 729 nm is spatially filtered and transported by an optical fibre. A twolens telescope expands the 729 nm beam while an electrooptic deflector(EOD)21 in front of the lenses controls the beam direction. We direct this expanded laser beam (w0 ∼1cm) counterpropagating to the emerging fluorescence towards the CCD, using a dichroic beam splitter and focus it onto individual ions by using the same lens22 as for imaging the fluorescence light. The focused beam of u-
p to 80 mW hits the ion crystal under an angle of {68◦hor.,0v◦ert.}. The corresponding single ion Lamb-Dicke
factors are ηaxial = 0.033 and ηradial = 0.040, respectively. By varying the voltage applied to the EOD we
16 Marconi Inc., Signal gen. 2023 17 Minicircuits Inc., ZYSW-2-50DR 18 Minicircuits Inc., ZSC-2-1 19 Minicircuits Inc., ZP-2 20 Lorch Inc., DP-1-8-370-5-77 21 LaserComponents Inc., ED2-730 22 Nikon, MNH-23150-ED-Plan-1.5x
steer the focus at the ion position by more than 10μm, large compared to the two-ion distance of 4.90μm23 for ωax/(2π)=1.2 MHz. Additionally, the high-voltage controller for the deflector can be preset to values which are selected through digital input lines. The digital signals are computer-generated by the same digital output board that controls the RF pulses. Between different addressing positions, we typically leave a settling time of 15 μs. The determination of the spatial resolution is discu-
ssed in sect. 3.2. In order to provide a quantization axis and to split the Zeeman components of the S1/2 to D5/2 transition, we compensate the ambient magnetic field and generate a constant magnetic field of 2.4 G under an angle
of {22◦hor., 0v◦ert.} which is thus perpendicular to the −k→
vector of the addressing light field. The geometry and polarization of the light field at 729 nm allows the excitation of ∆m = 0, ±1 and ± 2 transitions[23].
3 Preparative procedures and measurements
This section addresses the methods that are used to prepare and manipulate the ions for a typical experimental sequence. In a first step, the ions are initialized in a well defined state using sympathetic sideband cooling and optical pumping (sect. 3.1). Then, the ions are individually manipulated on the qubit transition. During manipulation on the sideband frequencies, the level-shifts due to the AC-Stark effect need to be counteracted by additional laser frequencies (sect. 3.3). Finally, the ind-
ividual states of the ions are detected by means of a CCD camera and a PMT (sect. 3.5).
3.1 Ground state cooling
Each experimental cycle starts with the preparation of the ions in a well defined initial state. The motional state of the two ion crystal can be described by 6 different vibrational modes[24]. The axial and two radial centerof-mass modes at ωax and ω(x,y)
rad coincide with the single
ion trap frequencies. The two radial rocking modes and one axial breathing mode have frequencies of ω(x,y)
R=
√
ω(x,y)
rad 2 − ωax2 and ωb = √3 ωax, respectively. In our
experiment, we have chosen the breathing mode as the ‘bus-mode’ for the quantum gate and we therefore need to prepare it in the ground state |nb = 0〉. For the radial spectator modes, Doppler cooling is sufficient as ηrad = 0.04 ≪124. However, the axial spectator mode[25] at ωax is sideband cooled in addition to the bus-mode. The cooling cycle starts with a 2 ms period of Doppler cooling on the S1/2 to P1/2 transition at 397 nm dur
23 Projection of the two-ion distance of 5.29μm under 22◦ 24 The final temperature is close to the Doppler cooling limit if the UV light intensity is below saturation

6 F. Schmidt-Kaler et al.
ing which the repumping laser on the D3/2 to P1/2 line (866 nm) is switched on. After a short period of optical pumping into the S1/2(mJ = −1/2) state (typically 30 μs), the bus-mode and the axial center of mass mode are sequentially sideband cooled using the quadrupole transition at 729 nm [20]. We switch the 729 nm-laser to one of the two ions and subsequently perform a cooling cycle for 2 ms and 6 ms on the red sideband of the center-of-mass mode and of the bus-mode, respectively. The cooling r-
ate is enhanced to several kHz by a quench laser on the D5/2 to P3/2 transition at 854 nm. During these periods, the σ−-beam is repeatedly pulsed on every 2 ms to recollect atoms that have been pumped to the S1/2(mJ = +1/2) state. With this procedure, we achieve a ground state population of the bus-mode of about 99%[26,20] and a coefficient of η2  ̄n ≪ 1 for all spectator modes. At the end of the cooling cycle, a last optical pumping pulse initializes the ion chain in the electronic ground state S-
1/2(mJ = −1/2).
3.2 Addressing single ions
As explained in section 2.5, the focus position of the manipulation laser at 729 nm is controlled by the EOD. The quality of the addressing can be evaluated from Rabi oscillations between the S1/2(mJ = −1/2) and the D5/2(mJ = −1/2) state, that are driven on one out of two ions. Residual laser light that reaches the second ion leads to a slow Rabi oscillation of the second ion. From such measurement, we infer the addressing error, i.e. the amount of unwanted qubit rotation on the second ion which i-
s present during a particular one-qubit manipulation on the first ion, and vice versa. Fig. 4 shows two typical excitation patterns for such Rabi flops. It is important to note that this addressing error does not fundamentally limit the accuracy of one-qubit rotations. For the current experiments, we have included this effect in the error budget[11]. It is, however, possible to counteract the unwanted rotation on the second ion by an additional laser pulse that is addressed to the second ion. The -
remaining error on the first ion would then be of second order, and even this contribution could be eliminated by a clever choice of pulses. To make such counteraction possible, one has to determine the phase difference between the laser light addressed directly to ion 1 and the residual light that generates the unwanted rotation on ion 1 while the beam is addressed to ion 2. We have measured this phase difference with only one ion in the trap. For this, we adjust the beam such that, without defle-
ction, the ion is centrally addressed. Figure 5a shows the dependence of the Rabi frequency on the beam deflection. The corresponding laser intensity is approximately given by a Gaussian with a waist of 2.5 μm[19]. We now perform a spin-echo experiment with the laser frequency tuned to the carrier transition.
0 20 40 60 80 100
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0 20 40 60 80 100 120 140
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
Excitation time t in μs
Excitation time t in μs
PD
PD a) b)
Fig. 4 Rabi oscillations on the carrier, performed on a twoion crystal after ground state sideband cooling of both the axial COM and the breathing mode. The plots show the average excitation into the |D〉 state ( (PD,1 + PD,2)/2) which is measured with the PMT. For the data shown in (a), the laser is addressed onto the first of the two ions, for (b) onto the second one. For the given adjustment of the optics, the addressing error is different for the two ions: (a) Ω1 = 2π · 35.5(1) kHz, Ω2 = 2π · 2-
.46(7) kHz. We find an addressing error Ω1/Ω2 = 6.9(1)%, and a ratio of light intensities of 1:210. (b) Ω1 = 2π ·39.7(2) kHz, Ω2 = 2π ·1.16(5) kHz, which corresponds to a ratio of Rabi frequencies of 2.9(1)%, and 1:1200 for the light intensities.
The two framing pulses are performed with a deflected beam and with the controlled phase set to 0 and π, respectively. Because of the beam deflection, the ion feels the laser phase ∆Φ and ∆Φ + π. The center pulse is directly addressed to the ion, with the controlled phase set to φ. If we define Rx(θ, Φ)[27] to be the qubit rotation by an angle θ about the horizontal axis characterized by the polar angle Φ, where x denotes the beam deflection, then the action on the atom can be described by:
Rexcho = Rx( π
2 , ∆Φ) R0(π, Φ) Rx( π
2 , ∆Φ + π). (1)
If the phase difference between the deflected and the addressed beam ∆Φ is equal to zero, then we expect no spin flip for a phase Φ = ±π/2. Moreover, scanning the phase Φ yields an excitation from the |S〉 to the |D〉 state of PD = cos2(Φ − ∆Φ) which can be fitted to infer the phase shift ∆Φ. The dependence of this phase shift on the beam deflection is shown in fig. 5b. We attribute the linear part of the phase shift to the elongation of the optical path within the EOD. Such behavior is expected if -
the laser beam is not ideally aligned with the EOD axis. For beam deflections larger than ±2 μm, ∆Φ depends no longer in a linear way on the deflection. We suppose that this is due to light which does not travel through the optical system along the ideal path and therefore has a phase different from the Gaussian part of the beam. Such a hypothesis is supported by the small pedestal below the Gaussian profile in fig. 5. As an important result we note that the phase difference between the deflected -
and the addressed beam is well defined and stable over long periods of time, even for large deflections. This offers the possibility to reduce the effect of the addressing error in future experiments.

How to realize a universal quantum gate with trapped ions 7
∆φ / 2π ΩRabi / 2π [kHz
beam deflection (μm)
0
10
20
30
-4 -2 0 2 4
-0,8
-0,6
-0,4
-0,2
0,0
0,2
0,4
a)
b)
Fig. 5 (a) Rabi frequency of the ion as a function of the deflector voltage Udefl. (b)Phase difference ∆Φ between the addressed (Udefl = 0) and the deflected beam, as perceived at the ion’s position. The different symbols represent independent measurements. The data stem from a measuring period of more than 4 hours.
3.3 AC Stark compensation
As the ions which represent the qubits are not ideal twolevel systems, the manipulation of the qubit states can be perturbed by non-resonant coupling to other levels. In particular, for manipulations on the vibrational sideband, the coupling to the carrier[28] is so strong that it induces important light shifts (AC Stark shifts) on the qubit levels. As this would perturb their phases, the light shift needs to be compensated by an additional laser frequency of appropriate power and detuning[29]. Th-
e compensating light field is generated by a frequency F3, also applied to the double-pass AOM in the 729 nm beam (see section 2.4). Using the same laser beam as a source, this setup ensures that laser power fluctuations or changes in the beam alignment are not converted into phase fluctuations.
3.4 Phase gate and composite laser pulses
The central quantum-logic operation in the Cirac-Zoller CNOT-gate is a one-ion phase gate where the sign of the electronic qubit is switched conditional on the vibrational state. In the computational subspace (|D, 0〉, |D, 1〉,|S, 0〉, |S, 1〉), this gate is described by a diagonal matrix with the entries (1,-1,-1,-1)25. Excitation on the blue motional sideband leads to a pairwise coupling between levels |S, n〉 ↔ |D, n + 1〉 except for the level |D, 0〉. For the phase gate we perform an effective 2π-pul-
se on the two two-level systems (|S, 0〉 ↔ |D, 1〉) and (|S, 1〉 ↔ |D, 2〉) which changes the sign of all computational basis states except for |D, 0〉). Since the Rabi frequency depends on n, we need to use a composite-pulse sequence[30] instead of a single blue
25 This transformation is the standard phase gate up to an overall phase factor of −1.
1
2
3
-1
0
1
-1
0 1
-1
0
1
x
y
z
2
2
3
1
4
-1
0
1
-1 01
-1
0
1
x
y
z
1
2
3
4
Fig. 6 Bloch sphere trajectories for the composite phase gate, Rphase. Left: Bloch sphere for the quasi-two-levelsystem |S, 0〉 ↔ |D, 1〉. The initial state is |S, 0〉, indicated by the black arrow. Pulse R1 of the sequence rotates the
state vector about the x-axis by π/√2. R2 accomplishes a π-rotation about the y-axis. It therefore transforms the state to its mirror image about the x-y-plane. Consequently, R3, which is identical to R1, rotates the state vector all the way down to the bottom of the sphere. R4, just like R2, represents a π-rotation about the y-axis. The final state identical to the initial one, except the acquired phase factor −1. Right: The same laser pulse sequence acting in the |S, 1〉 ↔ |D, 2〉 subspace. Again,-
 the final state identical to the initial one, except the acquired phase factor −1.
sideband pulse. The sequence is composed of four sideband pulses R4 R3 R2 R1 and can be described by
Rphase = R+(π√n + 1, 0) R+(π
√
n+1
2 , π/2)
·R+(π√n + 1, 0) R+(π
√
n+1
2 , π/2) (2)
where n denotes the lower vibrational quantum number of the two coupled states and R+[27], similar to R in equation 1, denotes a rotation induced by coupling to the upper motional sideband. Figure 6 illustrates the evolution of the Bloch vectors during the phase gate and provides a step-by-step picture of the process26. It may be helpful to interpret this evolution in terms of spin-echos. For the system (|S, 0〉 ↔ |D, 1〉), the first three pulses constitute a spin-echo experiment where the π-pulse i-
n the middle assures that the overall evolution is the one of a π-pulse, despite the rotation angle of
π/√2. This evolution is followed by an additional π pulse which completes the 2π-rotation. For the second twolevel system (|S, 1〉 ↔ |D, 2〉), the sequence starts with a π-pulse that is followed by the spin-echo-type π-rotation. The phase gate is transformed into a CNOT operation if it is sandwiched in between two π/2 carrier pulses, RCNOT = R(π/2, 0) Rphase R(π/2, π).
3.5 Qubit readout
For detection of the internal quantum states, we excite the S1/2 to P1/2 dipole transition near 397 nm and mon
26 The Bloch-sphere picture doesn’t give complete information on the phases picked up during the evolution. Those have to be computed using a matrix representation.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:07.448Z
- **Text Length:** 29843 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
