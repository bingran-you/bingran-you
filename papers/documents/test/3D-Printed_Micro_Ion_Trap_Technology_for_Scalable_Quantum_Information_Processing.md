# PDF Document: Xu et al. - 2023 - 3D-Printed Micro Ion Trap Technology for Scalable Quantum Information Processing.pdf

**File Path:** Xu et al. - 2023 - 3D-Printed Micro Ion Trap Technology for Scalable Quantum Information Processing.pdf

**Processed Date:** 2026-02-10T18:17:02.376Z

**File Size:** 3838.27 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 317

**Title:** 3D-Printed Micro Ion Trap Technology for Scalable Quantum Information Processing

**Collection:** TEST

---

## Extracted Text Content

3D-Printed Micro Ion Trap Technology for Scalable Quantum Information Processing
Shuqi Xu,1, 2, ∗ Xiaoxing Xia,3, ∗ Qian Yu,1, 2 Sumanta Khan,1, 2 Eli Megidish,1, 2, † Bingran You,1, 2 Boerge Hemmerling,4 Andrew Jayich,5 Juergen Biener,6, ‡ and Hartmut H ̈affner1, 2, 7, §
1Department of Physics, University of California, Berkeley, Berkeley, CA 94720, USA 2Challenge Institute for Quantum Computation, University of California, Berkeley, Berkeley, CA 94720, USA 3Engineering Directorate, Lawrence Livermore National Laboratory, Livermore, CA 94550, USA 4Department of Physics and Astronomy, University of California, Riverside, Riverside, CA 92521, USA 5Department of Physics, University of California, Santa Barbara, Santa Barbara, CA 93106, USA 6Physical and Life Science -
Directorate, Lawrence Livermore National Laboratory, Livermore, CA 94550, USA 7Computational Research Division, Lawrence Berkeley National Laboratory, Berkeley, CA 94720, USA
Trapped-ion applications, such as in quantum information, precision measurements, optical clocks, and mass spectrometry, rely on specialized high-performance ion traps. The latter applications typically employ traditional machining to customize macroscopic 3D Paul traps, while quantum information processing experiments usually rely on photo-lithographic techniques to miniaturize the traps and meet scalability requirements. Using photolithography, however, it is challenging to fabricate the complex-
 three-dimensional electrode structures required for optimal confinement. Here we address these limitations by adopting a high-resolution 3D printing technology based on twophoton polymerization supporting fabrication of large arrays of high-performance miniaturized 3D traps. We show that 3D-printed ion traps combine the advantages of traditionally machined 3D traps with the miniaturization provided by photolithography by confining single calcium ions in a small 3Dprinted ion trap with radial trap-
 frequencies ranging from 2 MHz to 24 MHz. The tight confinement eases ion cooling requirements and allows us to demonstrate high-fidelity coherent operations on an optical qubit after only Doppler cooling. With 3D printing technology, the design freedom is drastically expanded without sacrificing scalability and precision so that ion trap geometries can be optimized for higher performance and better functionality.
MAIN
Ion traps are an important tool in a wide range of fields [1] such as mass spectroscopy [2], precision metrology [3–6], optical ion clocks [7], and quantum information science [8]. Until about a decade ago, charged particles have been typically confined in macroscopic ion traps [9]. These macro 3D traps feature a near harmonic trapping potential, high trapping efficiency, and large trap depth that keeps the particles in a deep potential well (see Fig. 1a). However, machining constraints limit fabr-
ication of miniaturized, complex electrode structures that are required for building large-scale trapped ion quantum processors. Furthermore, the relatively large ionto-electrode distance of macro 3D traps (∼1 mm) also limits the electric field strength for a given voltage and thus trap frequency. These difficulties motivate the development of surface traps based on planar electrode structures amenable to microfabrication [10, 11] (see Fig. 1b). Surface traps are compatible with well-established m-
icroelectromechanical systems (MEMS) and complementary metal-oxide semiconductor (CMOS) microfabrication techniques and thus allow for miniaturization and
∗ These two authors contributed equally. † Current address: Atom Computing, Inc., Berkeley, CA 94710, USA. ‡ biener2@llnl.gov § hhaeffner@berkeley.edu
scaling to large arrays with complex 2D structures, while also enabling integrated photonic ion-light interfaces. Compared to 3D geometries, the arrangement of surface trap electrodes in a single plane leads to large anharmonicities in the potential and reduces the trap depth substantially [10, 12]. In addition, the deviation from the quadrupole potential for 2D geometries reduces the trap frequency, which in turn requires trapping the ions closer to the electrodes to maintain reasonable trap freq-
uencies. The proximity of the ion to the electrode surfaces exposes the ion to electric field noise caused by the electrodes. This noise heats up the ion motion and can be a major source of errors for quantum gates [13, 14]. In order to overcome these challenges, there have been efforts to build 3D ion traps compatible with microfabrication techniques using stacked wafers [15–17], but the design flexibility remains limited [18, 19].
Here we demonstrate a novel approach to fabricate miniaturized 3D Paul traps (Fig. 1c) that combines the efficiency of macro 3D traps with the scaling advantages of surface traps [20, 21]. In particular, we use high-resolution 3D printing based on two-photon polymerization [22] which enables complex, micro- and nanoarchitected designs with sub-micron resolution for a variety of applications [23–26]. Compared to surface traps, 3D-printed Paul traps achieve a larger trap depth, a more harmonic trapp-
ing potential and higher trap frequencies.
As the main performance criteria for 3D and surface traps, we use the depth and curvature of their confining effective potential. For a sufficiently large drive fre
arXiv:2310.00595v2 [quant-ph] 5 Oct 2023

 2
(a) Conventional Paul trap (b) Surface trap (c) 3D-printed trap
100 μm
DC RF
1 mm 100 μm
+ Large trap depth − Low trap frequency − Not scalable
− Small trap depth − Low trap frequency + Scalable
+ Large trap depth + High trap frequency + Scalable
FIG. 1. Paul trap comparison. Schematics and representative pictures of a conventional 3D Paul trap a, a surface trap b, and a 3D-printed vertical Paul trap c. The basic structure of a conventional 3D Paul trap (a) consists of four RF electrodes and two end cap DC electrodes, with a characteristic length scale of 1 mm. It requires precision machining and is thus challenging to scale. Surface traps (b) usually have two RF electrodes with a characteristic length scale on the order of 100 μm and can -
be produced by microfabrication techniques allowing for large and scalable trap arrays. However, constraining electrodes to a single plane distorts the desired quadrupole potential reducing its efficiency. 3D-printed Paul traps (c) can have four RF electrodes creating a quadrupole field while of similar size and scalability as surface traps.
quency of the rapidly oscillating trapping RF field, the confinement can be described by a static ponderomotive potential (pseudopotential) [27]. Figure 2a compares the pseudopotential of a miniaturized 3D trap to a surface trap, keeping the ion-to-electrode distance, the drive frequency, and the amplitude of the oscillating trapping RF field constant. Especially visible is the dramatic reduction in the pseudopotential depth of surface traps. Further, we find that the pseudopotential of the 3D con-
figuration is much more harmonic and provides a larger trap frequency than its planar counterpart.
To evaluate the expected performance gain, we must also account for the trapping mechanism for Paul traps. In particular, the pseudopotential fails to describe the motional frequencies of the ion in the effective trap potential when the motional frequency approaches one fifth of the frequency of the applied trapping RF field. This breakdown is characterized by the so-called stability parameter, q (see Eq. 5 in the Methods), and occurs at approximately q = 0.5. While micro 3D traps with their harmo-
nic potential are expected to tolerate a larger stability parameter q than surface traps, the higher motional frequency may lead to trap instabilities. To compensate for this, one may increase the drive frequency to maintain a constant q. In Fig. 2b, we illustrate the associated trade-offs assuming the same RF voltage amplitude
Ue, for both surface and 3D configurations. Under this assumption, we compare the calculated trap frequency holding either the drive frequency or q (diagonal dashed lines) constant. We see that for the same Ue, micro 3D traps offer indeed larger trap frequencies. In particular, assuming typical parameters for a surface trap indicated by Point 1, the same drive frequency will lead to a fivefold increase in trap frequency for the 3D trap (Point 3 vs. Point 1). If one keeps the stability parameter q -
constant, the trap frequency is doubled for the micro 3D trap (Point 2 vs. Point 1). Increasing the trap frequency is beneficial in many aspects as it reduces motional heating, allows for faster ion movement, and reduces cooling complexity. Alternatively, one may prioritize power consumption, which is important for large arrays of traps. Here, the micro 3D trap configuration achieves the same trapping parameters (trap frequency and stability parameter) with about an order of magnitude less power t-
han surface trap designs. Another option to utilize the higher efficiency of 3D traps is to increase the ion-toelectrode distance, d, to reduce surface noise while maintaining a similar trap frequency.

 3
40 20 0 20 40 Position (μm)
0.0
0.2
0.4
0.6
0.8
1.0
Pseudopotential (eV)
(a)
3D trap Surface trap Quadratic fit
20 40 60 80 100 120 140 160 180 Drive frequency (MHz)
0
5
10
15
20
25
Trap frequency (MHz)
1
2
3
q = 0.1
q = 0.3
q = 0.5
q = 0.7
q = 0.9
(b)
3D trap Surface trap
FIG. 2. Performance comparison between 3D and surface traps. We use the geometries sketched in Fig. 1a and b and set the ion-to-electrode distances to 100 μm. The two pairs of opposing RF electrodes of the 3D trap are driven with opposite polarity. a, Pseudopotential (see methods) for the 3D (blue) and surface trap (red) configurations with 80 MHz drive frequency and 150 V RF voltage amplitude. The dashed lines are harmonic fits. The 3D trap is much more harmonic than the surface trap and conseque-
ntly has a much larger trap depth. The confinement is also tighter for the 3D trap as compared to the surface trap. b, Trap frequencies as a function of drive frequency (solid lines), assuming that the RF voltage amplitude Ue = 150 V is constant. Dashed lines indicate a constant stability parameter q (see Eq. 5 in the Methods). The vertical dash-dotted line at 80 MHz indicates the parameter set used in Fig. 2a. Point 1 corresponds to a set of viable surface trap parameters. Point 2 (3) indicates p-
arameters when holding the stability parameter q (drive frequency) constant. For the 3D trap, we predict doubling of the trap frequency when holding q constant and a five-fold increase when keeping the drive frequency constant.
RESULTS
In this work, we design and fabricate a 3D-printed micro linear Paul trap using a commercial Nanoscribe twophoton lithography system (see Fig. 3a, Methods) and test its performance by confining 40Ca+ ions at room
temperature. The trap consists of four RF electrode pillars on a sapphire substrate with a total height of 300 μm (see Fig. 3b). The distance between opposing RF electrodes is 200 μm, resulting in a 100 μm ion-to-RFelectrode distance. As shown in Fig. 3e, nine planar DC electrodes are placed on the substrate surface for tuning the potential in a 600 μm × 600 μm square. We use a configuration where neighboring RF electrodes are driven out-of-phase, while opposing electrodes are in-phase with respec-
t to each other. By choosing an identical amplitude for all RF electrodes their vertical electric fields cancel out. The nine DC electrodes provide confinement in the vertical direction, allow one to cancel electric stray fields, and the ability to choose the orientation of the effective quadrupole potential.
The trap is fabricated by first creating 3D polymer structures using two-photon polymerization and then coating the polymer with a 1 μm-thick gold layer using electron-beam evaporation (Fig. 3a, Methods). To isolate individual electrodes, we use an undercut below the electrode top surfaces to keep them electrically isolated after gold coating. The undercut cross section is shown in Fig. 3c. The electrical pathways connecting the DC and RF electrodes are 3D-printed using a similar shadowing method -
to allow for routing flexibility. To increase the robustness for electrical isolation, we add an overhanging sidewall on both sides of the T-shaped cross section of the electrical paths as shown in Fig. 3d. The flexibility of printing trap structures and electrical paths in this maskless one-step process results in a turnaround time from design to a working device of one to two days. These short turnaround times enable us to iterate and improve trap designs rapidly.
For trapping, we drive the RF electrodes with frequency ωrf /2π = 51.6 MHz. Depending on the chosen RF voltage amplitude, we observe radial trap frequency ω/2π ranging from 2.09 MHz to 24.15 MHz (see Fig. 4). At 24.15 MHz, our highest measured trap frequency, q = 0.903 (see Methods), near the theoretical limit of 0.911 (a = 0.0018), demonstrating operation throughout the stability diagram.
We further characterize the cooling performance at various trap frequencies. For this, we measure the motional occupation of one of the two planar modes oriented 45 degrees with respect to the horizontal main cooling beam near 397 nm. The average harmonic oscillator quantum number  ̄n is determined via laser spectroscopy on the S ↔ D transition. If the ion is near the motional ground state, absorption on the red sideband (the laser detuning ∆ = −ω/2π) associated with annihilating a motional quantu-
m is suppressed as compared to absorption on the blue sideband (∆ = +ω/2π) which leads to the creation of a motional quantum [27]. Figure 5a explores the temperature after Doppler cooling for different radial trap frequencies. The data matches well with the theoretical Doppler cooling limit with no free parameters [1]. In particular, Fig. 5b shows the measured red and blue sideband spectra at ∆ = ±ω/2π = ±21.29 MHz

 4
(a)
(b)
RF+
RF+
RF
RF
DC
DC
DC
DC
DC
DC
DC
DC
DC
200μm
x
y
200 μm
Au
30 μm
Polymer
(e)
Sapphire
Sapphire
Ultrafast laser
Galvo mirrors
Objective
Sapphire
Resin
z
(d)
(c)
FIG. 3. 3D printing process and SEM images of fabricated traps. a: Illustration of the 3D printing method: an objective focuses pulsed femtosecond laser light at 780 nm (orange) into a liquid photoresist (yellow). Galvo mirrors are used to raster scan the focal point to print the designed trap geometry (green) which is subsequently coated with metal. b: the SEM image of a vertical linear Paul trap. c shows the cross section schematic of the shadow mask design between electrodes (highlighted via th-
e top red dashed rectangle in b). d shows the cross section schematic of the electrical pathways including side walls to improve robustness with respect to electrical isolation. e shows an SEM image of a trap from the top. The two “RF+” electrodes carry the same RF signal as the two “RF−” electrodes but with opposite polarity. Static voltages are applied to the “DC” electrodes.
after Doppler cooling revealing that an average quantum number of n ̄ = 0.5 is reached. For quantum control, small motional excitation is important as the motion modulates the laser frequency experienced by the ion thereby causing gate errors [28, 29]. For instance, the carrier Rabi frequency which determines the speed of single-qubit operations is [30]
Ω = Ω0 1 −
X
i
niη2
i
!
, (1)
where ηi is an effective Lamb-Dicke parameter, ni is the motional quantum number of mode i for the addressed ion, and Ω0 is the overall coupling strength. In existing trapped ion quantum computers this can cause gate errors on the order of 10−3. For this reason often a number of motional modes are cooled to the ground state to reduce the error rate [31]. The large trap frequencies of 3D-printed traps mitigates this problem. In particular, assuming a trap frequency of 20 MHz and the Ca+ optical qub-
it used here near the Doppler limit, this effect is expected to add only 2 × 10−7 to the error rate of π pulses.
Figure 5c shows Rabi oscillation measured at 21.29 MHz trap frequency after only Doppler cooling. The contrast of the Rabi oscillations decay from 0.994+0.006
−0.010 for the first oscillation to 0.993+0.007
−0.031 for the 11th oscillation implying error rates of ≲ 10−4 for a π-rotation. The reduction in contrast can be explained by laser intensity noise and residual overlap between the uncooled (vertical) axial motion and the 729 nm beam.
DISCUSSION
While very high trap frequencies have been achieved with lighter ions [32], our trap frequencies exceed typical values, both for macro 3D traps [33] and surface traps by a factor of four. As a result, the operational timescales such as splitting, merging and shuttling of ion crystals would be accelerated in such traps. Further, we expect that the impact of surface noise is reduced. In particular, motional heating is expected to scale as 1/ω(1+λ), with the frequency exponent λ of

 5
0.1 0.3 0.5 0.7 0.9
Stability parameter q
0 20 40 60 80 100 120 140 160 RF amplitude (V)
0
5
10
15
20
25
Radial trap frequency (MHz)
1D Mathieu Radial 1 Radial 2
FIG. 4. Radial trap frequencies. Blue circles and red triangles show the two measured radial trap frequencies split by a DC quadrupole field corresponding to α = 0.0018 (see Methods) as a function of the RF amplitude measured with a capacitive divider up to a scale factor. The black line is a numerical solution of the Mathieu differential equation (Methods, Eq. 4) for the trap frequency as a function of the stability parameter q. We use the fact that the measured voltage at the capacitive divider -
is proportional to q to determine the corresponding proportionality constant by fitting the numerical solution of the Mathieu equation to the data. This allows us then to plot the measured frequencies as a function of q. We measured trap frequencies for q ranging from 0.13 to 0.9 and derived the actual applied RF amplitude from electrostatic simulations and the stability parameter q.
electric field noise to be of order 1-1.5 [14]. Thus heating is expected to be substantially suppressed at higher trap frequencies.
In addition, higher trap frequencies also promise to reduce cooling requirements and thereby to accelerate the cooling process itself. In particular, both  ̄n as well as η are reduced with increasing trap frequency such that according to Eq. 1 the impact of a finite motional occupation on the gate fidelity is expected to scale with 1/ω2. We estimate that for the optical qubit in 40Ca+ axial trap frequencies of 10 MHz are sufficient to achieve error rates of below 10−5 solely with Doppler cooling. -
We believe that this regime is well within reach with miniaturized 3D traps. For instance, assuming an ion-to-RF-electrode distance of order 50 μm, a drive of amplitude 160 V and frequency 150 MHz (q = 0.5), yields a radial trap frequency of 30 MHz for Ca+-ions, sufficient to maintain linear orientation for a few ions at axial frequencies of 10 MHz. Thus, future quantum computers would not require sideband cooling, which reduces the cooling cycles from many milliseconds to a few 100 μs [1]. Since -
cooling, splitting, merging, and shuttling occupy most of the duty cycle of current trapped ion quantum computers based on a Quantum Charge-Coupled Device (QCCD)
0 5 10 15 20 Radial frequency (MHz)
100
101
Doppler cooled n
(a)
Doppler limit Data
21.31 21.27 Detuning (MHz)
0.0
0.2
0.4
0.6
Excitation probability
(b)
Doppler cooled
n = 0.50+/-0.08
21.27 21.31 Detuning (MHz)
0 10 20 30 40 50 60 Excitation time (μs)
0.0
0.5
1.0
Excitation probability
(c)
FIG. 5. Cooling and gate operations. The black dots in a, b, and c are data. a, the resulting occupation number,  ̄n, at different radial trap frequencies. The red line is the theoretical Doppler cooling limit, taking into account the 45◦ overlap between the cooling laser ⃗k-vector and the motional mode direction. Error bars are calculated from the χ2-fit of the amplitude. b, the harmonic oscillator occupation n ̄ after Doppler cooling is extracted via spectroscopy of the motional sidebands at ω/2-
π = ±21.29 MHz, where the lines are Gaussian fits. c, single qubit Rabi oscillations performed at a radial trap frequency of 21.29 MHz with only Doppler cooling where the fit gives a Rabi frequency of 2π×185 kHz. Error bars in b and c indicate quantum projection noise.
architecture [34–36], such computers could be sped up significantly using 3D-printed ion traps.
The successful trapping of ions in a 3D-printed ion trap opens a new path towards flexible and scalable miniaturized ion traps. The novel design space allows one to explore trap designs that cannot be realized using traditional fabrication methods. In Fig. 6a, we show an example of a printed trap with significant reduction of the surface area near the ion. It would be interesting to study how such extreme geometries impact the electric surface noise experienced by the ion [37] and thus to learn mo-
re about the causes for surface electric field noise.
The driving motivation for our work is to enable highperformance trapped-ion quantum computers, especially based on the QCCD architecture (see Fig. 6b). The 3Dprinted ion trap platform offers multiple options towards this goal. One may leverage the higher trap efficiency to 1. increase confinement which reduces cooling require

 6
100 μm
(a) (b)
FIG. 6. Outlook. a, SEM image of a 3D-printed vertical linear Paul trap with meshed RF electrodes to reduce surface area and ion-to-RF-electrode distance. b, Schematic of 3D-printed QCCD architecture. RF electrodes are in yellow, while DC electrodes are in blue. It consists of multiple trapping zones connected via X-junctions. Each trapping zone is a micro horizontal linear Paul trap. Ions (red) can be shuttled between zones assisted by DC electrodes (blue) through X-junctions, as illustrated by g-
ray arrows.
ments and accelerates splitting and merging of ion crystals, 2. increase the ion-to-electrode distance and thus substantially reduce motional heating, or 3. reduce trap drive power to ease thermal management, which is especially relevant in future large-scale arrays. Finally, a weighted combination of 1., 2. and 3. might be beneficial for specific realizations. Thus, 3D-printed traps appear to be an attractive technology for large scale devices. In this context, we estimate that array densities in-
 excess of 1,000 traps per cm2 can be fabricated, ideally on substrates that house integrated photonic circuits to control the ions to allow for scalable optical control [38, 39]. Miniaturized 3D-printed traps may also impact other disciplines than quantum information processing. For instance, we envision that they may be used as ultracompact low-power mass spectrometers attractive for space applications. In precision metrology, 3D-printed trap arrays may improve the signal-to-noise ratio substant-
ially and thus would increase the stability of, for instance, optical ion clocks [7]. More fundamentally, the superior harmonicity of 3D traps allows for stable trap frequencies without laser cooling which is also a very
important consideration for precision metrology applications [3]. Trap anharmonicity has also been a major hurdle for past efforts for quantum information with trapped electrons in Penning traps [40, 41]. Here, the efficiency of harmonic 3D traps provides a critical component for current efforts to use trapped electrons for fast and highfidelity quantum information processing [42]. In summary, we have designed and fabricated 3Dprinted ion traps that combine high trap frequency and deep harmonic po-
tentials with miniaturization and scalability. With continuous improvement in resolution and speed, 3D printing opens a new vista of ion trap development with dramatically expanded geometric freedom and submicron control of features that may be optimized for functionality beyond the limits of photolithography. We envision that the 3D-printed ion trap platform with integrated photonics would accelerate the development of quantum information processing systems as well as onchip mass spectroscopy, pr-
ecision metrology, and optical clocks, especially if 3D printing can be integrated into foundry-based microfabrication workflow.
ACKNOWLEDGMENTS
The authors acknowledge Clemens Matthiesen’s inspiration at the start of the project and James Oakdale for printing the first demonstration objects. The authors thank Kristin Beck for helpful discussions. The authors would also like to acknowledge Nicole Greene for the help on chamber assembly, Wei-Ting Chen for the useful guidance on the measurements, Ben Saarel for providing the image in Fig. 1b, and Abhinav Parakh for rendering the illustration in Fig. 3a. This work is supported by the UC Multi-
campus-National Lab Collaborative Research and Training under Award No. LFR-20-653698. Part of this work was performed under the auspices of the U.S. Department of Energy by Lawrence Livermore National Laboratory under Contract DE-AC52-07NA27344. AJ acknowledges the support of ONR Grant No. N0001421-1-2597.
[1] D. Leibfried, R. Blatt, C. Monroe, and D. Wineland, Quantum dynamics of single trapped ions, Reviews of Modern Physics 75, 281 (2003). [2] D. J. Douglas, A. J. Frank, and D. Mao, Linear ion traps in mass spectrometry, Mass Spectrometry Reviews 24, 1 (2005). [3] L. Brown and G. Gabrielse, Geonium theory: Physics of a single electron or ion in a Penning trap, Reviews of Modern Physics 58, 233–311 (1986). [4] C. Smorra, S. Sellner, M. J. Borchert, J. A. Harrington, T. Higuchi, H. Nagahama, T. Tan-
aka, A. Mooser, G. Schneider, M. Bohman, K. Blaum, Y. Matsuda, C. Ospelkaus, W. Quint, J. Walz, Y. Yamazaki, and S. Ulmer,
A parts-per-billion measurement of the antiproton magnetic moment, Nature 2017 550:7676 550, 371 (2017). [5] N. D. Scielzo, G. Li, M. G. Sternberg, G. Savard, P. F. Bertone, F. Buchinger, S. Caldwell, J. A. Clark, J. Crawford, C. M. Deibel, J. Fallis, J. P. Greene, S. Gulick, A. A. Hecht, D. Lascar, J. K. P. Lee, A. F. Levand, M. Pedretti, R. E. Segel, H. Sharma, K. S. Sharma, I. Tanihata, J. Van Schelt, R. M. Yee, and B. J. Zabransky, The β-decay Paul trap: A radiofrequency-quadrupole ion trap fo-
r precision β-decay studies, Nuclear Instruments and Methods in Physics Research Section A: Accelerators, Spectrometers, Detectors and Associated Equipment 681, 94 (2012).

 7
[6] T. S. Roussy, L. Caldwell, T. Wright, W. B. Cairncross, Y. Shagam, K. B. Ng, N. Schlossberger, S. Y. Park, A. Wang, J. Ye, and E. A. Cornell, An improved bound on the electron’s electric dipole moment, Science 381, 46 (2023). [7] A. D. Ludlow, M. M. Boyd, J. Ye, E. Peik, and P. Schmidt, Optical atomic clocks, Reviews of Modern Physics 87, 637 (2015). [8] C. D. Bruzewicz, J. Chiaverini, R. McConnell, and J. M. Sage, Trapped-ion quantum computing: Progress and challenges, Applied Physics Reviews-
 6, 021314 (2019). [9] W. Paul, Electromagnetic traps for charged and neutral particles, Reviews of Modern Physics 62, 531 (1990). [10] J. Chiaverini, R. B. Blakestad, J. Britton, J. D. Jost, C. Langer, D. Leibfried, R. Ozeri, and D. J. Wineland, Surface-electrode architecture for ion-trap quantum information processing, Quantum Information and Computation 5, 419 (2005). [11] S. Seidelin, J. Chiaverini, R. Reichle, J. J. Bollinger, D. G. Leibfried, J. W. Britton, J. Wesenberg, R. B. Blakestad, R. -
Epstein, D. Hume, W. M. Itano, J. D. Jost, C. Langer, R. Ozeri, R, N. Shiga, and D. J. Wineland, Microfabricated Surface-Electrode Ion Trap for Scalable Quantum Information Processing, Physical Review Letters 96, 253003 (2006). [12] J. H. Wesenberg, Electrostatics of surface-electrode ion traps, Physical Review A 78, 063410 (2008). [13] M. Brownnutt, M. Kumph, P. Rabl, and R. Blatt, Iontrap measurements of electric-field noise near surfaces, Reviews of Modern Physics 87, 1419 (2015). [14] K. R. Br-
own, J. Chiaverini, J. M. Sage, and H. Ha ̈ffner, Materials challenges for trapped-ion quantum computers, Nature Reviews Materials 6, 1 (2021). [15] R. B. Blakestad, C. Ospelkaus, A. P. VanDevender, J. M. Amini, J. Britton, D. Leibfried, and D. J. Wineland, High-Fidelity Transport of Trapped-Ion Qubits through an X-Junction Trap Array, Phys. Rev. Lett. 102, 153002 (2009). [16] S. Ragg, C. Decaroli, T. Lutz, and J. P. Home, Segmented ion-trap fabrication using high precision stacked wafers, Review -
of Scientific Instruments 90, 103203 (2019). [17] C. Decaroli, R. Matt, R. Oswald, C. Axline, M. Ernzer, J. Flannery, S. Ragg, and J. P. Home, Design, fabrication and characterization of a micro-fabricated stacked-wafer segmented ion trap with two X-junctions, Quantum Science and Technology 6, 044001 (2021). [18] P. See, G. Wilpers, P. Gill, and A. G. Sinclair, Fabrication of a monolithic array of three dimensional si-based ion traps, Journal of Microelectromechanical Systems 22, 1180 (2013). [19]-
 S. Auchter, C. Axline, C. Decaroli, M. Valentini, L. Purwin, R. Oswald, R. Matt, E. Aschauer, Y. Colombe, P. Holz, T. Monz, R. Blatt, P. Schindler, C. R ̈ossler, and J. Home, Industrially microfabricated ion trap with 1 eV trap depth, Quantum Science and Technology 7, 035015 (2022). [20] J. Biener, H. HAEFFNER, C. MATTHIESEN, E. MAGIDASH, J. S. OAKDALE, and X. XIA, Miniature ion traps for fast, high-fidelity and scalable quantum computations (2022). [21] A. Quinn, M. Brown, T. J. Gardner, and D. -
T. C. Allcock, Geometries and fabrication methods for 3D printing ion traps (2022).
[22] T. Baldacchini, Three-Dimensional Microfabrication Us
ing Two-Photon Polymerization (William Andrew, 2016). [23] X. Xia, A. Afshar, H. Yang, C. M. Portela, D. M. Kochmann, C. V. Di Leo, and J. R. Greer, Electrochemically reconfigurable architected materials, Nature 573, 205 (2019). [24] H. Gao, G. F. R. Chen, P. Xing, J. W. Choi, H. Y. Low, and D. T. H. Tan, High-Resolution 3D Printed Photonic Waveguide Devices, Advanced Optical Materials 8, 2000613 (2020). [25] M. Oellers, F. Lucklum, and M. J. Vellekoop, On-chip mixing of liquids with swap structur-
es written by twophoton polymerization, Microfluidics and Nanofluidics 24, 4 (2019). [26] C. Fendler, C. Denker, J. Harberts, P. Bayat, R. Zierold, G. Loers, M. M ̈unzenberg, and R. H. Blick, Microscaffolds by Direct Laser Writing for Neurite Guidance Leading to Tailor-Made Neuronal Networks, Advanced Biosystems 3, 1800329 (2019). [27] D. Leibfried, R. Blatt, C. Monroe, and D. Wineland, Quantum dynamics of single trapped ions, Reviews of Modern Physics 75, 281 (2003). [28] D. J. Wineland, C. Monro-
e, W. M. Itano, D. Leibfried, B. E. King, and D. M. Meekhof, Experimental Issues in Coherent Quantum-State Manipulation of Trapped Atomic Ions, Journal of Research of the National Institute for Standards and Technology 103, 259 (1998). [29] R. T. Sutherland, Q. Yu, K. M. Beck, and H. Ha ̈ffner, One- and two-qubit gate infidelities due to motional errors in trapped ions and electrons, Physical Review A 105, 022437 (2022). [30] D. J. Wineland, C. Monroe, W. M. Itano, D. Leibfried, B. E. King, and D.-
 M. Meekhof, Experimental Issues in Coherent Quantum-State Manipulation of Trapped Atomic Ions, Journal of Research of the National Institute of Standards and Technology 103, 259 (1998). [31] P. Schindler, D. Nigg, T. Monz, J. T. Barreiro, E. Martinez, S. X. Wang, S. Quint, M. F. Brandl, V. Nebendahl, C. F. Roos, M. Chwalla, M. Hennrich, and R. Blatt, A quantum information processor with trapped ions, New Journal of Physics 15, 123012 (2013). [32] S. R. Jefferts, C. Monroe, E. W. Bell, and D. J. W-
ineland, Coaxial-resonator-driven rf (Paul) trap for strong confinement, Physical Review A 51, 3112 (1995). [33] P. Schindler, D. Nigg, T. Monz, J. T. Barreiro, E. Martinez, S. X. Wang, S. Quint, M. F. Brandl, V. Nebendahl, C. F. Roos, M. Chwalla, M. Hennrich, and R. Blatt, A quantum information processor with trapped ions, New Journal of Physics 15, 123012 (2013). [34] J. P. Home, M. J. McDonnell, D. M. Lucas, G. Imreh, B. C. Keitch, D. J. Szwer, N. R. Thomas, S. C. Webster, D. N. Stacey, and A. -
M. Steane, Deterministic entanglement and tomography of ion spin qubits, New J. Phys. 8, 188 (2006). [35] J. M. Pino, J. M. Dreiling, C. Figgatt, J. P. Gaebler, S. A. Moses, M. S. Allman, C. H. Baldwin, M. Foss-Feig, D. Hayes, K. Mayer, C. Ryan-Anderson, and B. Neyenhuis, Demonstration of the trapped-ion quantum CCD computer architecture, Nature 592, 209 (2021). [36] S. A. Moses, C. H. Baldwin, M. S. Allman, R. Ancona, L. Ascarrunz, C. Barnes, J. Bartolotta, B. Bjork, P. Blanchard, M. Bohn, J. G. -
Bohnet, N. C. Brown, N. Q. Burdick, W. C. Burton, S. L. Campbell, J. P. Campora III, C. Carron, J. Chambers, J. W. Chan,

 8
Y. H. Chen, A. Chernoguzov, E. Chertkov, J. Colina, J. P. Curtis, R. Daniel, M. DeCross, D. Deen, C. Delaney, J. M. Dreiling, C. T. Ertsgaard, J. Esposito, B. Estey, M. Fabrikant, C. Figgatt, C. Foltz, M. FossFeig, D. Francois, J. P. Gaebler, T. M. Gatterman, C. N. Gilbreth, J. Giles, E. Glynn, A. Hall, A. M. Hankin, A. Hansen, D. Hayes, B. Higashi, I. M. Hoffman, B. Horning, J. J. Hout, R. Jacobs, J. Johansen, L. Jones, J. Karcz, T. Klein, P. Lauria, P. Lee, D. Liefer, C. Lytle, S. T. Lu, D. Lucc-
hetti, A. Malm, M. Matheny, B. Mathewson, K. Mayer, D. B. Miller, M. Mills, B. Neyenhuis, L. Nugent, S. Olson, J. Parks, G. N. Price, Z. Price, M. Pugh, A. Ransford, A. P. Reed, C. Roman, M. Rowe, C. Ryan-Anderson, S. Sanders, J. Sedlacek, P. Shevchuk, P. Siegfried, T. Skripka, B. Spaun, R. T. Sprenkle, R. P. Stutz, M. Swallows, R. I. Tobey, A. Tran, T. Tran, E. Vogt, C. Volin, J. Walker, A. M. Zolot, and J. M. Pino, A Race Track Trapped-Ion Quantum Processor (2023). [37] G. H. Low, P. F. Herskind-
, and I. L. Chuang, Finitegeometry models of electric field noise from patch potentials in ion traps, Physical Review A 84, 53425 (2011). [38] R. J. Niffenegger, J. Stuart, C. Sorace-Agaskar, D. Kharas, S. Bramhavar, C. D. Bruzewicz, W. Loh, R. T. Maxson, R. McConnell, D. Reens, G. N. West, J. M. Sage, and J. Chiaverini, Integrated multi-wavelength control of an ion qubit, Nature 586, 538 (2020). [39] K. K. Mehta, C. Zhang, M. Malinowski, T.-L. Nguyen, M. Stadler, and J. P. Home, Integrated optica-
l multi-ion quantum logic, Nature 586, 533 (2020). [40] P. Bushev, S. Stahl, R. Natali, G. Marx, E. Stachowska, G. Werth, M. Hellwig, and F. Schmidt-Kaler, Electrons in a cryogenic planar Penning trap and experimental challenges for quantum processing, The European Physical Journal D 50, 97 (2008). [41] J. Goldman and G. Gabrielse, Optimized planar Penning traps for quantum-information studies, Physical Review A 81, 052335 (2010). [42] Q. Yu, A. M. Alonso, J. Caminiti, K. M. Beck, R. T. Sutherland-
, D. Leibfried, K. J. Rodriguez, M. Dhital, B. Hemmerling, and H. Ha ̈ffner, Feasibility study of quantum computing using trapped electrons, Physical Review A 105, 022420 (2022). [43] D. An, C. Matthiesen, A. Abdelrahman, M. Berlin-Udi, D. Gorman, S. Mo ̈ller, E. Urban, and H. H ̈affner, Surface trap with dc-tunable ion-electrode distance, Review of Scientific Instruments 89, 093102 (2018).

 9
METHODS
Paul trap equations
In Paul traps, ions experience a static potential plus a time-dependent potential [1]:
Φ(x, y, z, t) = Φstatic + Φrf
=U
2 Ax2 + By2 + Cz2
+
Ue cos (ωrf t)
2 A′x2 + B′y2 + C′z2 .
(2)
The coefficients A, B, C (A′, B′, C′) satisfy the Laplace equation ∆Φstatic = 0 (∆Φrf = 0). The motion of a particle with mass m and charge Ze in the x-direction is described by the following equation:
x ̈ = − Ze
m
∂Φ
∂x = −Ze
m
h
U A + Ue cos (ωrf t) A′i
x . (3)
Further simplification leads to the standard Mathieu differential equation:
d2x
dξ2 + [a − 2q cos(2ξ)] x = 0 (4)
with ξ = ωrf t/2, a = 4Z|e|U A/mω2
rf and
q = −2Z|e|UeA′/mω2
rf . (5)
Without loss of generality, we can set q ≥ 0. The stable solution of the Mathieu equation has a characteristic exponent β which depends on a and q leading to trap frequency solution ν = βξ/2π. In the lowest-order approximation where |a|, q2 ≪ 1,
β ≈ pa + q2/2 . (6)
The ion’s motion can be described by a ponderomotive potential, which is also known as the pseudopotential:
Ups = 1
4mω2
rf
(Frf )2 . (7)
Frf is the magnitude of the RF force acting on the ion. When the lowest-order approximation is no longer valid, i.e. when q ≈ 0.5, the characteristic exponent β can be extracted numerically.
Trap fabrication and characteristics
We use sapphire substrates of size 5 mm × 5 mm × 2 mm. During the printing process, a negative-tone acrylate-based photoresist (IP-S, Nanoscribe GmbH & Co. KG) is placed on top of the substrate. A femtosecond laser of 780 nm is focused inside the liquid photoresist through a directly immersed 25× objective (numerical aperture 0.8). The laser focal spot is scanned in 3D to cross-link the photoresist in the designed trap geometry. After 3D printing, the remaining liquid photoresist is washed off by -
soaking in a developer (propylene glycol methyl ether acetate, Sigma-Aldrich) for four hours and rinsed with isopropanol. After fully drying, the samples are coated with a nominally 1 μm thick Au-film using an evaporation angle of 30 degrees with respect to the normal of the rotating substrate surface. From the observed storage times of a few hours, we deduce that the pressure in the trap center is well below 10−10 mbar. Considering that the apparatus was baked for only 4 days at 180◦C, we conclud-
e that outgassing of the photoresist is sufficiently well suppressed. We also simulate the structural response of the trap electrodes to the electrostatic forces from the applied voltages and find that deformation of the trap electrodes should be well below 0.2 nm at 200 V DC voltage.
Measurements
Ions are created in the trap by photoionizing neutral Ca atoms thermally evaporated from a Ca oven. We confine single 40Ca+ ions 130 μm above the DC electrode plane. The planar motional modes are cooled using a horizontal (parallel to the substrate surface) 397 nm beam detuned by 20 MHz to the red from the 42S1/2 − 42P1/2 cooling transition while a vertically oriented 866 nm repumper beam on the 32D3/2 − 42P1/2 transition provides some partial cooling of the vertical axial mode. The planar trap fr-
equencies are measured by sideband spectroscopy on the |42S1/2, mj = −1/2⟩ ↔ |32D5/2, mj = −5/2⟩ Zeeman transition using 729 nm light in a horizontal configuration. We measure the amplitudes of each RF electrode pair with capacitive dividers, each with a ratio of 3 pF:100 pF, and balance them using additional tunable capacitors [43]. DC electrodes are configured to create vertical confinement as well as removing the degeneracy between the two planar motional modes parallel to the substrate.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:02.376Z
- **Text Length:** 38655 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
