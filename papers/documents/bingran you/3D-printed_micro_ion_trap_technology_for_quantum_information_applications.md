# PDF Document: 3D-printed micro ion trap technology for quantum information applications.pdf

**File Path:** 3D-printed micro ion trap technology for quantum information applications.pdf

**Processed Date:** 2026-02-10T18:15:43.163Z

**File Size:** 28293.86 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 325

**Title:** 3D-printed micro ion trap technology for quantum information applications

**Collection:** Bingran You

---

## Extracted Text Content

362 | Nature | Vol 645 | 11 September 2025
Article
3D-printed micro ion trap technology for quantum information applications
Shuqi Xu1,2,8✉, Xiaoxing Xia3,8✉, Qian Yu1,2, Abhinav Parakh3, Sumanta Khan1,2, Eli Megidish1,2, Bingran You1,2, Boerge Hemmerling4, Andrew Jayich5, Kristin Beck6, Juergen Biener6✉ & Hartmut Häffner1,2,7 ✉
Trapped-ion applications, such as in quantum information processing1, precision measurements2–5, optical clocks6 and mass spectrometry7, rely on specialized highperformance ion traps. The last three of these applications typically use traditional machining to customize macroscopic 3D Paul traps8, whereas quantum information processing experiments usually rely on photolithographic techniques to miniaturize the traps and meet scalability requirements9,10. Using photolithography, however, it is chall-
enging to fabricate the complex 3D electrode structures required for optimal confinement. Here we demonstrate a high-resolution 3D printing technology based on two-photon polymerization (2PP)11 that is capable of fabricating large arrays of high-performance miniaturized 3D traps. We show that 3D-printed ion traps combine the advantages, such as strong radial confinement, of traditionally machined 3D traps with on-chip miniaturization. We trap calcium ions in 3D-printed ion traps with radial trap f-
requencies ranging from 2 MHz to 24 MHz. The tight confinement eases ion cooling requirements and allows us to implement high-quality Rabi oscillations with Doppler cooling only. Also, we demonstrate a two-qubit gate with a Bell-state fidelity of 0.978 ± 0.012. With 3D printing technology, the design freedom is greatly expanded without sacrificing scalability and precision, so that ion trap geometries can be optimized for higher performance and better functionality.
Ion traps12 are an important tool in a wide range of fields, such as mass spectroscopy7, precision metrology2–5, optical ion clocks6 and quantum information science1. Until about a decade ago, charged particles have typically been confined in macroscopic ion traps8. These macro 3D traps feature a near-harmonic trapping potential, high trapping efficiency and a large trap depth, which keeps particles in a deep potential well (Fig. 1a). However, machining constraints limit the fabrication of miniatu-
rized, complex electrode structures that are required to build large-scale trapped-ion quantum processors. Furthermore, the relatively large ion–electrode distance of macro 3D traps (approximately 1 mm) limits the electric field strength for a given voltage and thus the trap frequency. These difficulties motivate the development of surface traps based on planar electrode structures amenable to microfabrication9,10 (see Fig. 1b). Surface traps are compatible with well-established microelectromechan-
ical systems (MEMS) and complementary metal–oxidesemiconductor (CMOS) microfabrication techniques, thus allowing for miniaturization and scaling to large arrays with complex 2D structures, as well as enabling integrated photonic ion–light interfaces. Compared with 3D geometries, the arrangement of surface trap electrodes in a single plane leads to large anharmonicities in the potential and reduces the trap depth substantially9,13,14. Also, the deviation from the quadrupole potential for 2D geometr-
ies reduces the trap
frequency14, which, in turn, requires trapping ions closer to the electrodes to maintain reasonable trap frequencies for quantum computing operations. The proximity of the ion to the electrode surfaces exposes the ion to electric field noise caused by the electrodes. This noise heats up the ion motion and can be a notable source of errors for quantum gates15,16. To overcome these challenges, there have been efforts to build 3D ion traps compatible with microfabrication techniques using stacked waf-
ers17–19, but the design flexibility remains limited20,21. Here we demonstrate a new approach to fabricate miniaturized 3D Paul traps (Fig. 1c) that combines the efficiency of macro 3D traps with the scaling advantages of surface traps22,23. In particular, we use high-resolution 3D printing based on 2PP (ref. 11), which enables complex, microarchitected and nanoarchitected designs with submicron resolution for a variety of applications24–27. Compared with surface traps, 3D-printed Paul traps achie-
ve a larger trap depth, a more harmonic trapping potential and higher trap frequencies. As the main performance criteria for 3D and surface traps, we analyse the depth and curvature of their effective confining potential. For a sufficiently large drive frequency of the rapidly oscillating radio frequency (RF) trapping field, confinement can be described by a static ponderomotive potential–pseudopotential12. Figure 2a compares the pseudopotential of a miniaturized 3D trap with that of a surface tra-
p,
https://doi.org/10.1038/s41586-025-09474-1
Received: 17 October 2023
Accepted: 29 July 2025
Published online: 3 September 2025
Check for updates
1Department of Physics, University of California, Berkeley, CA, USA. 2Challenge Institute for Quantum Computation, University of California, Berkeley, CA, USA. 3Engineering Directorate, Lawrence Livermore National Laboratory, Livermore, CA, USA. 4Department of Physics and Astronomy, University of California, Riverside, CA, USA. 5Department of Physics, University of California, Santa Barbara, CA, USA. 6Physical and Life Sciences Directorate, Lawrence Livermore National Laboratory, Livermore, CA, US-
A. 7Computational Research Division, Lawrence Berkeley National Laboratory, Berkeley, CA, USA. 8These authors contributed equally: Shuqi Xu, Xiaoxing Xia. ✉e-mail: sqxu@berkeley.edu; xia7@llnl.gov; biener2@llnl.gov; hhaeffner@berkeley.edu

 Nature | Vol 645 | 11 September 2025 | 363
while holding the ion–electrode distance, drive frequency and RF voltage amplitude constant. Especially visible is the substantial reduction in the pseudopotential depth of the surface trap. Further, we find that the pseudopotential of the 3D configuration is more harmonic (seeSupplementary Information) and provides a larger trap frequency than its planar counterpart. To evaluate the expected performance gain, we must also account for the trapping mechanism of Paul traps. In particular, the pseudo-
potential fails to describe the motional frequencies of the ion in the effective trap potential when the motional frequency approaches one-fifth of the frequency of the applied trapping RF field. This breakdown is characterized by the so-called stability parameter q (see equation (6) in Methods) and occurs at approximately q = 0.5. Although micro 3D traps with their harmonic potential are expected to tolerate a larger stability parameter q than surface traps, the higher motional frequency may lead-
 to trap instabilities. To compensate for this, we may increase the drive frequency to maintain a constant q. In Fig. 2b, we illustrate the associated trade-offs assuming the same RF voltage amplitude U͠ for both surface and 3D configurations. Under this assumption, we compare the calculated trap frequency holding either the drive frequency or q constant. We see that, for the same U͠ , micro 3D traps indeed offer larger trap frequencies. In particular, assuming typical parameters for a surface tra-
p indicated by point 1 in Fig. 2b, the same drive frequency will lead to a five-fold increase in trap frequency for the 3D trap (point 3 versus point 1 in Fig. 2b). If we keep the stability parameter q constant, the trap frequency is doubled for the micro 3D trap (point 2 versus point 1 in Fig. 2b). Increasing the trap frequency is beneficial in many aspects, as it reduces motional heating, allows faster ion movement and reduces cooling complexity. Alternatively, we may assign priority to power co-
nsumption, which is important for large arrays of traps. Here the micro 3D trap configuration achieves the same trapping parameters, that is, trap frequency and stability parameter, with about an order of magnitude less power than surface trap designs. Another option to use the higher efficiency of 3D traps is to increase the ion–electrode distance, d, to reduce the effects of surface-induced electric field noise while maintaining a similar trap frequency. Finally, we note that trap anharmonicity,-
 combined with shifts in the trap minimum—for instance, those induced by dielectric
charging—leads to changes in trap frequencies. We find that the harmonic potential in 3D-printed traps suppresses this effect by orders of magnitude compared with surface traps (see Supplementary Information). In this work, we design and fabricate 3D-printed micro linear Paul traps using a commercial Nanoscribe two-photon lithography system (see Fig. 3a,b and Methods) and characterize their performances by confining 40Ca+ ions at room temperature. The first trap, labelled 3D-100-Au-V, consists of -
four gold-coated RF electrode blades on a sapphire substrate with a height of 300 μm between the top of the RF electrodes and the substrate (see Fig. 3c). The distance between opposing RF electrodes is 200 μm, resulting in an ion–RF electrode distance of 100 μm. The second trap, labelled 3D-75-Al-V, is of similar geometry but with a reduced ion–RF electrode (aluminium-coated) distance of 75 μm (see Methods). As shown in Fig. 3f, nine planar direct current (DC) electrodes of trap 3D-100-Au-V are pl-
aced on the substrate surface to adjust the potential in a 600 μm × 600 μm square. We use a configuration in which neighbouring RF electrodes are driven out-of-phase, whereas opposing electrodes are in-phase with respect to each other. By choosing an identical amplitude for all RF electrodes, their vertical electric fields cancel out. The nine DC electrodes provide confinement in the vertical direction, allowing us to cancel stray fields, and make it possible to choose the orientation of the effec-
tive quadrupole potential. The traps are fabricated by first creating 3D polymer structures using 2PP and then coating the polymer with a 1-μm-thick Au or Al layer using electron-beam evaporation (Fig. 3a,b and Methods). To isolate individual electrodes, we print undercut features below the top surfaces of the electrode to keep them electrically isolated after the metal coating. The undercut cross-section is shown in Fig. 3d. The electrical paths connecting the electrodes to wire-bonding pads are -
3D-printed using a similar shadowing method to allow routing flexibility. To increase the robustness for electrical isolation, we add overhanging sidewalls on both sides of the T-shaped cross-section of the electrical paths, as shown in Fig. 3e. The flexibility of printing trap structures and electrical paths in this maskless one-step process results in a turnaround time from design to a working device of one to two days. These short turnaround times enable us to rapidly iterate and improve trap d-
esigns.
Conventional Paul trap Surface trap 3D-printed trap
DC RF
+ Large trap depth − Low trap frequency − Not scalable
− Small trap depth − Low trap frequency + Scalable
+ Large trap depth + High trap frequency + Scalable
ab c
Fig. 1 | Comparison of Paul trap variants. Schematics and representative pictures of a conventional 3D Paul trap (a), a surface trap (b) and a 3D-printed vertical Paul trap (c). The basic structure of a conventional 3D Paul trap (a) consists of four RF electrodes and two end-cap DC electrodes, with a characteristic length scale of 1 mm. It requires precision machining and is thus challenging to scale. A surface trap (b) usually has two RF electrodes with a characteristic
length scale on the order of 100 μm and can be produced by microfabrication techniques, allowing for large and scalable trap arrays. However, constraining electrodes to a single plane distorts the desired quadrupole potential, reducing its efficiency. A 3D-printed Paul trap (c) can have four RF electrodes creating a quadrupole field while being of similar size and scalability as surface traps. Scale bars, 1 mm (a); 100 μm (b,c).

 364 | Nature | Vol 645 | 11 September 2025
Article
For trapping in trap 3D-100-Au-V, we apply RF drive to the RF electrodes at ωrf/2π = 51.6 MHz. Depending on the chosen RF voltage amplitude, we observe radial trap frequencies ωr/2π ranging from 2.09 MHz to 24.15 MHz (see Fig. 4). At 24.15 MHz, our highest measured trap frequency, q = 0.903 (see Methods), is near the theoretical limit of 0.911 (a = 0.0018; Methods), demonstrating operation throughout the stability diagram. We further characterize the cooling performance at various trap frequencies-
. For this, we measure the mean phonon number of one of the two planar modes oriented 45° with respect to the horizontal main cooling beam near 397 nm. The mean phonon number n is determined through laser spectroscopy on the S ↔ D transition. If the ion is near the motional ground state, absorption on the red sideband (the laser detuning Δ = −ωr/2π) associated with annihilating a phonon is suppressed compared with absorption on the blue sideband (Δ = +ωr/2π), leading to the creation of a phonon12.-
 Figure 5a explores the temperature after Doppler cooling for different radial trap frequencies. The data match well with the theoretical Doppler cooling limit with no free
parameters12. In particular, Fig. 5b shows the measured red and blue sideband spectra at Δ = ±21.29 MHz after Doppler cooling, revealing that an average phonon number of n = 0.5 is reached. Achieving small motional excitation is important, as motion modulates the laser frequency experienced by the ion, thereby causing gate errors28,29. For instance, the carrier Rabi frequency that determines the speed of single-qubit operations is28






∑
Ω = Ω 1 − n η , (1)
i
ii
0
2
in which ηi is an effective Lamb–Dicke parameter, ni is the phonon number of motional mode i for the addressed ion and Ω0 is the overall coupling strength. In existing trapped-ion quantum computers, this can cause gate errors on the order of 10−3. For this reason, often, several motional modes are cooled to the ground state to reduce the error rate30 using, for example, resource-intensive resolved sideband cooling. The large trap frequencies of 3D-printed traps mitigate this issue. In particular, -
assuming a trap frequency of 20 MHz and using the 40Ca+ optical qubit near the Doppler limit, this effect is expected to add only 2 × 10−7 to the error rate of π-pulses. Figure 5c shows Rabi oscillations measured at 21.29 MHz trap frequency after only Doppler cooling. The contrast of the Rabi oscillations decay from 0.994−0.010
+0.006 for the first oscillation to 0.993−0.031
+0.007 for the 11th oscillation, implying an error rate of ≲10−4 for a π-pulse. The reduction in contrast can be explained by laser intensity noise and residual overlap between the uncooled vertical axial motion and the 729 nm beam. However, we also point out here that a reduction of the Lamb–Dicke parameter increases the laser power requirements for driving sideband transitions. Having demonstrated single-qubit operations, we are also interested in whether these traps support multi-qubit operatio-
ns. We test this in trap 3D-75-Al-V with a smaller ion–electrode distance of 75 μm (see Methods) and implement a Mølmer–Sørensen two-qubit gate31 with a gate time of 100 μs using the axial centre-of-mass (COM) mode (ωa/2π = 3 MHz) as the bus. Measuring populations and analysing coher ence using single-qubit rotations (see Fig. 5), we deduce a Bell-state fidelity of 0.978 ± 0.012. The fidelity is not limited by motional heating of 0.1 quanta ms−1 at a trap frequency of 3 MHz (see the heating rate d-
ata in Supplementary Information) but rather by the coherence of the qubit states {S1/2, mJ = −1/2} and {D5/2, mJ = −1/2}. Finally, it is important that ions can be stored for extended periods of time. Using trap 3D-75-Al-V, we find that two-ion crystals of 40Ca+ and 44Ca+ can be stored for hours, whereas the ions exchange positions roughly every 7 min, corresponding to a pressure of 4 × 10 −11 Torr (see Supplementary Information).
Discussion
Although very high trap frequencies have been achieved with lighter ions32, our trap frequencies exceed typical values, for both macro 3D traps30 and surface traps, by a factor of four. As a result, operational timescales such as splitting, merging and shuttling of ion crystals would be accelerated in such traps. We also note that the impact of surface noise is reduced at high trap frequencies (see Supplementary Information). Furthermore, higher trap frequencies also promise to reduce cooling requ-
irements and, thereby, to accelerate the cooling process itself. In particular, both n and η are reduced with increasing trap frequency ω such that, according to equation (1), the impact of a finite phonon number on gate fidelity is expected to scale with 1/ω2. We estimate that, for the optical qubit in 40Ca+, trap frequencies of 10 MHz are sufficient to achieve error rates below 10−5 only with Doppler cooling. This regime is well within reach of miniaturized 3D traps. For instance, assuming an io-
n–RF electrode distance on the order of 50 μm, a drive of amplitude
−40 −20 0 20 40 Position (μm)
0
0.2
0.4
0.6
0.8
1.0
Pseudopotential (eV)
a
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
b
3D trap Surface trap
Fig. 2 | Performance comparison of 3D trap versus surface trap. We use the geometries sketched in Fig. 1a,b and fix the ion–electrode distances at 100 μm for both traps. In the 3D trap, the two pairs of opposing RF electrodes are driven with opposite polarity. a, Pseudopotential for the 3D (blue) and surface (red) traps at an 80-MHz drive frequency and 150-V RF voltage amplitude. Black dashed lines show quadratic fits. b, Trap frequency versus drive frequency (solid lines), assuming a constant RF -
voltage amplitudeU = 150 V
͠ . Grey dashed lines mark a constant stability parameter q (see equation (6) in Methods). Vertical grey dashed-dotted line at 80 MHz denotes the parameter set used in a. Point 1 identifies viable surface trap parameters; point 2 (point 3) corresponds to holding the stability parameter q (drive frequency) constant. For the 3D trap, maintaining constant q predicts doubling of the trap frequency compared with the surface trap, whereas keeping the drive frequency constant yields a fivefold increase.

 Nature | Vol 645 | 11 September 2025 | 365
160 V and frequency 150 MHz (q = 0.5) yields a radial trap frequency of 30 MHz for 40Ca+ ions, sufficient to maintain linear orientation for several ions at axial frequencies of 10 MHz. Thus, future quantum computers would not require sideband cooling, which reduces cooling cycles from many milliseconds to several hundred microseconds12. Because cooling, splitting, merging and shuttling occupy most of the duty cycle of present trapped-ion quantum computers based on a quantum charge-coupled device -
(QCCD) architecture33–35, such computers could be greatly sped up using 3D-printed ion traps. The successful trapping of ions in a 3D-printed ion trap opens a new path towards flexible and scalable miniaturized ion traps. In view of large-scale applications, we investigate the reproducibility of the 3D printing method (Fig. 6a–c). We print 200 central regions of the same trap design. The 2.2% variation in the in-plane and out-ofplane directions is probably dominated by measurement errors owing to -
the uncertainty of the small-angle tilt when mounting samples for scanning electron microscope (SEM) imaging (see Methods). Figure 6d shows the surface roughness of the Au coating on the 3D-printed polymer DC electrodes. The average surface roughness measured is 6.5 nm, with a peak-to-valley roughness of 30.6 nm, compared with the control measurements of 9.1 nm and 58.5 nm, respectively, for the Au-coated sapphire substrate surface of the same sample. Common types of fabrication defect are summari-
zed in Methods. Most fabrication defects such as stitching inaccuracies, dust particles and residual solvents can be alleviated by printing only the RF electrodes
on microfabricated Si substrates with pre-patterned DC electrodes and electrical paths, as shown in Fig. 6e. This hybrid approach increases the yield and reduces the printing time from 14 h for the entire designincluding the electrical paths and wire-bonding pads—to 30 min for only the RF electrodes. Also, the expanded fabrication freedom allows the research community to explore trap designs that cannot be realized using traditional fabrication methods. In Fig. 6f, we show an example of a 3D-print-
ed trap with a substantial reduction in the surface area near the ion. It would be interesting to study how such extreme geometries affect the electric surface noise experienced by the ion36 and thus to learn more about the causes of surface electric field noise. The motivation for our work is to enable high-performance trappedion quantum computers, especially based on the QCCD architecture (see Fig. 6h). The 3D-printed ion trap platform offers several options towards this goal. We may make use of-
 the higher trap efficiency to: (1) increase confinement, which reduces cooling requirements and accelerates splitting and merging of ion crystals; (2) increase the ionelectrode distance and thus substantially reduce motional heating; or (3) reduce trap drive power to ease thermal management, which is especially relevant in future large-scale arrays. Finally, a weighted combination of (1), (2) and (3) might be beneficial for specific realizations. Thus, 3D-printed traps seem to be an attractive te-
chnology for large-scale devices. In this context, we estimate that array densities in excess of 1,000 traps per cm2 can be fabricated, ideally on
a
c
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
Au Polymer
f
Sapphire
Sapphire z
e
d
Motor stage
CCD
DM
Galvo mirrors
AOM
Ultrafast laser
Photoresist
Objective
b
xy
z
Fig. 3 | 3D printing process and SEM images of a 3D-printed trap (3D-100-Au-V). a, Simplified illustration of the 2PP set-up used for 3D printing micro ion traps. A femtosecond laser (780 nm) is focused into a liquid photoresist by a microscopy objective. Galvo mirrors raster-scan the focal spot in the horizontal (x–y) plane to polymerize the designed trap geometry in a layer-by-layer fashion and a motorized three-axis stage translates the substrate in the vertical axis (z). The motion stage also -
moves laterally to extend the writing area by stitching together individual sections printed within the field of view of the objective. An acousto-optic modulator (AOM) gates the laser on and off and a dichroic mirror (DM) reflects the 780 nm beam, yet allows a charge-coupled device (CCD) camera to monitor the printing process. The 3D-printed trap structure is later
metal-coated after the developing, cleaning and drying processes. b, Enlarged view of the trap structure during 2PP printing, corresponding to the region highlighted by the black rectangle in a. c, SEM image of a 3D-printed vertical linear Paul trap (3D-100-Au-V). Scale bar, 200 μm. d, Cross-sectional schematic of the shadow mask design between electrodes, highlighted by means of the top red dashed rectangle in c. e, Cross-sectional schematic of the electrical paths including side walls to improve-
 the robustness of electrical isolation, highlighted by means of the bottom red dashed rectangle in c. Scale bar, 30 μm. f, Top-view SEM image of trap 3D-100-Au-V. The two RF+ electrodes carry the same RF signal as the two RF− electrodes but with opposite polarity. Static voltages are applied to the DC electrodes.

 366 | Nature | Vol 645 | 11 September 2025
Article
substrates that house integrated photonic circuits to control the ions to allow scalable optical control37,38. As a first step towards the goal, we fabricate traps with horizontal RF electrodes that can trap ion strings parallel to the substrate (Fig. 6g and Supplementary Information).
Miniaturized 3D-printed traps may also influence other disciplines than quantum information processing. For instance, we predict that they may be used as ultracompact low-power mass spectrometers attractive for space applications. In precision metrology, 3D-printed trap arrays may substantially improve the signal-to-noise ratio and thus would increase the stability of, for instance, optical ion clocks6. More fundamentally, the superior harmonicity of 3D traps allows stable trap frequencies without-
 laser cooling, which is also a very important consideration for precision metrology applications2. Trap anharmonicity has also been a substantial hurdle for previous efforts to realize quantum information processing with trapped electrons in Penning traps39,40. Here the efficiency of harmonic 3D traps provides a critical component for present efforts to use trapped electrons for fast and high-fidelity quantum information processing41. In summary, we have designed and fabricated 3D-printed ion tra-
ps that combine high trap frequency and deep harmonic potential with miniaturization and scalability. With continuous improvement in resolution and speed, 3D printing opens a new path of ion trap development with greatly expanded geometric freedom and submicron control of features that may be optimized for functionality beyond the limits of photolithography. We predict that the 3D-printed ion trap platform with integrated photonics would accelerate the development of quantum information processing-
 systems as well as on-chip mass spectroscopy, precision metrology and optical clocks, especially if 3D printing can be integrated into the foundry-based microfabrication workflow.
Online content
Any methods, additional references, Nature Portfolio reporting summaries, source data, extended data, supplementary information, acknowledgements, peer review information; details of author contributions and competing interests; and statements of data and code availability are available at https://doi.org/10.1038/s41586-025-09474-1.
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
Fig. 4 | Radial trap frequency scan. Blue dots and red triangles show the trap frequencies of two radial modes, split by a DC quadrupole field corresponding to a = 0.0018 (see Methods), plotted against the RF voltage amplitude measured by means of a capacitive divider (up to a scale factor). Black line is a numerical solution of the Mathieu differential equation (equation (4) in Methods) for the trap frequency as a function of the stability parameter q. The proportionality between the divider volt-
age and q is determined by fitting the numerical solution to the data, allowing the trap frequencies to be replotted versus q. Data span from q = 0.13 to 0.90, with actual RF voltage amplitudes derived from electrostatic simulations and the fitted q.
0 5 10 15 20 Radial frequency (MHz)
100
101
Doppler-cooled n
a
Doppler limit Data
−21.31 −21.27 Detuning (MHz)
0
0.2
0.4
0.6
Excitation probability
b
Doppler-cooled n = 0.50 ± 0.08
21.27 21.31 Detuning (MHz)
0 10 20 30 40 50 60 Excitation time (μs)
0
0.5
1.0
Excitation probability
c
0 50 100 150 200 250 300 350 Analysis phase (°)
−1
0
1
Parity
d
Fig. 5 | Cooling and gate operations. Blue dots in a–c and red dots in d are
measured data. a, Mean phonon number n at different radial trap frequencies. Light blue line is the theoretical Doppler cooling limit, taking into account the 45° angle between wavevector k and the motional-mode direction of the cooling laser. b, Extraction of n after Doppler cooling by means of spectroscopy of motional sideband at ωr/2π = ±21.29 MHz. Light blue lines show Gaussian fits. c, Single-qubit Rabi oscillations at ωr/2π = ±21.29 MHz with only Doppler cooling. The first oscillation contra-
st is 0.994−0.010
+0.006, decaying to 0.993−0.031
+0.007
on the 11th (last) oscillation. d, Parity oscillation for a Bell state (fidelity 0.978 ± 0.012) generated by means of a Mølmer–Sørensen gate using the axial COM mode (ωa/2π = 3 MHz) as quantum bus. Data for a–c are taken in trap 3D-100-Au-V; data for d are taken in trap 3D-75-Al-V. Error bars in a are derived from the χ2 fit of the sideband peak amplitude; error bars in b–d are from quantum projection noise. All error bars represent one standard deviation.

 Nature | Vol 645 | 11 September 2025 | 367
1. Bruzewicz, C. D., Chiaverini, J., McConnell, R. & Sage, J. M. Trapped-ion quantum computing: progress and challenges. Appl. Phys. Rev. 6, 021314 (2019). 2. Brown, L. & Gabrielse, G. Geonium theory: physics of a single electron or ion in a Penning trap. Rev. Mod. Phys. 58, 233–311 (1986). 3. Smorra, C. et al. A parts-per-billion measurement of the antiproton magnetic moment. Nature 550, 371–374 (2017). 4. Scielzo, N. D. et al. The β-decay Paul trap: a radiofrequency-quadrupole ion trap for preci-
sion β-decay studies. Nucl. Instrum. Methods Phys. Res. A 681, 94–100 (2012). 5. Roussy, T. S. et al. An improved bound on the electron’s electric dipole moment. Science 381, 46–50 (2023). 6. Ludlow, A. D., Boyd, M. M., Ye, J., Peik, E. & Schmidt, P. Optical atomic clocks. Rev. Mod. Phys. 87, 637–701 (2015). 7. Douglas, D. J., Frank, A. J. & Mao, D. Linear ion traps in mass spectrometry. Mass Spectrom. Rev. 24, 1–29 (2005).
8. Paul, W. Electromagnetic traps for charged and neutral particles. Rev. Mod. Phys. 62, 531–540 (1990). 9. Chiaverini, J. et al. Surface-electrode architecture for ion-trap quantum information processing. Quantum Inf. Comput. 5, 419–439 (2005). 10. Seidelin, S. et al. Microfabricated surface-electrode ion trap for scalable quantum information processing. Phys. Rev. Lett. 96, 253003 (2006).
11. Baldacchini, T. Three-Dimensional Microfabrication Using Two-Photon Polymerization (William Andrew, 2016). 12. Leibfried, D., Blatt, R., Monroe, C. & Wineland, D. Quantum dynamics of single trapped ions. Rev. Mod. Phys. 75, 281–324 (2003). 13. Wesenberg, J. H. Electrostatics of surface-electrode ion traps. Phys. Rev. A 78, 063410 (2008). 14. Nguyen, L. M. A., Bowers, B. & Mouradian, S. The effect of trap design on the scalability of trapped-ion quantum technologies. Entropy 27, 576 (2025).
ab
cd e
f gh
Height (μm)
0 μm 0.5 μm 1.0 μm 1.5 μm 0 μm
0.5 μm
1.0 μm
1.5 μm
27 nm
−20 nm
−15 nm
−10 nm
−5 nm
0 nm
5 nm
10 nm
15 nm
20 nm
306 274
225
176
126
77
28
−22
−71
In-plane Out-of-plane Angular
−2
−1
0
1
2
Variation (%)
Fig. 6 | Outlook. a, Optical profilometry measurement of an array of 20 × 10 printed ion trap central regions—consisting of RF and DC electrodes—showing the dimensional accuracy and reproducibility of the 3D printing process. Each region fits within a single printer field of view. Colour bar indicates out-of-plane height. b, Inset showing a stitched SEM image of an array of 6 × 6 ion trap central regions. Slight contrast variations between each 2 × 2 block reflect the stitching process. c, Variati-
on in measured in-plane, out-of-plane and angular dimensions of selected trap features relative to the CAD model across 90 samples (reproduced from Extended Data Fig. 3b). In-plane measurements (blue) correspond to DC electrode dimensions parallel to the sapphire substrate; out-of-plane measurements (red) to RF electrode heights; angular measurements (yellow) to angles between RF electrodes. Grey bars denote the minimum and maximum values of each feature and coloured area outlined in grey show ker-
nel density
estimation. d, AFM image of a 1-μm-thick Au coating deposited on 3D-printed polymer DC electrodes (reproduced from Extended Data Fig. 5d). e, SEM image of RF electrodes printed on a microfabricated Si wafer with etched DC electrodes and electrical paths. f, SEM image of a 3D-printed mesh-electrode ion trap in which the RF blades have been replaced by meshed structures to minimize material near the trapping region. g, SEM image of a printed horizontal ion trap, featuring RF electrodes parallel to t-
he substrate and off-plane DC electrodes extending to the trapping height. h, Schematic of a 3D-printed QCCD architecture. RF electrodes are shown in yellow and DC electrodes in blue. The design comprises several trapping zones—each a horizontal linear Paul trapinterconnected by X-junctions. Ions (red) are shuttled between zones by means of DC electrodes (blue) through X-junctions, as indicated by grey arrows. Scale bars, 200 μm.

 368 | Nature | Vol 645 | 11 September 2025
Article
15. Brownnutt, M., Kumph, M., Rabl, P. & Blatt, R. Ion-trap measurements of electric-field noise near surfaces. Rev. Mod. Phys. 87, 1419–1482 (2015). 16. Brown, K. R., Chiaverini, J., Sage, J. M. & Häffner, H. Materials challenges for trapped-ion quantum computers. Nat. Rev. Mater. 6, 892–905 (2021). 17. Blakestad, R. B. et al. High-fidelity transport of trapped-ion qubits through an X-junction trap array. Phys. Rev. Lett. 102, 153002 (2009). 18. Ragg, S., Decaroli, C., Lutz, T. & Home, J. P. Segm-
ented ion-trap fabrication using high precision stacked wafers. Rev. Sci. Instrum. 90, 103203 (2019). 19. Decaroli, C. et al. Design, fabrication and characterization of a micro-fabricated stackedwafer segmented ion trap with two X-junctions. Quantum Sci. Technol. 6, 044001 (2021). 20. See, P., Wilpers, G., Gill, P. & Sinclair, A. G. Fabrication of a monolithic array of three dimensional Si-based ion traps. J. Microelectromech. Syst. 22, 1180–1189 (2013). 21. Auchter, S. et al. Industrially microf-
abricated ion trap with 1 eV trap depth. Quantum Sci. Technol. 7, 035015 (2022). 22. Biener, J. et al. Miniature ion traps for fast, high-fidelity and scalable quantum computations. US patent US20230274174A1 (2023). 23. Quinn, A., Brown, M., Gardner, T. J. & Allcock, D. T. C. Geometries and fabrication methods for 3D printing ion traps. Preprint at http://arxiv.org/abs/2205.15892 (2022). 24. Xia, X. et al. Electrochemically reconfigurable architected materials. Nature 573, 205–213 (2019). 25. Gao,-
 H. et al. High-resolution 3D printed photonic waveguide devices. Adv. Opt. Mater. 8, 2000613 (2020). 26. Oellers, M., Lucklum, F. & Vellekoop, M. J. On-chip mixing of liquids with swap structures written by two-photon polymerization. Microfluid. Nanofluidics 24, 4 (2019). 27. Fendler, C. et al. Microscaffolds by direct laser writing for neurite guidance leading to tailor-made neuronal networks. Adv. Biosyst. 3, 1800329 (2019). 28. Wineland, D. J. et al. Experimental issues in coherent quantum-sta-
te manipulation of trapped atomic ions. J. Res. Natl Inst. Stand. Technol. 103, 259–328 (1998). 29. Sutherland, R. T., Yu, Q., Beck, K. M. & Häffner, H. One- and two-qubit gate infidelities due to motional errors in trapped ions and electrons. Phys. Rev. A 105, 022437 (2022). 30. Schindler, P. et al. A quantum information processor with trapped ions. New J. Phys. 15, 123012 (2013).
31. Mølmer, K. & Sørensen, A. Multiparticle entanglement of hot trapped ions. Phys. Rev. Lett. 82, 1835–1838 (1999). 32. Jefferts, S. R., Monroe, C., Bell, E. W. & Wineland, D. J. Coaxial-resonator-driven rf (Paul) trap for strong confinement. Phys. Rev. A 51, 3112–3116 (1995). 33. Home, J. P. & Steane, A. M. Electrode configurations for fast separation of trapped ions. Quantum Inf. Comput. 6, 289–325 (2006).
34. Pino, J. M. et al. Demonstration of the trapped-ion quantum CCD computer architecture. Nature 592, 209–213 (2021). 35. Moses, S. A. et al. A race-track trapped-ion quantum processor. Phys. Rev. X 13, 041052 (2023). 36. Low, G. H., Herskind, P. F. & Chuang, I. L. Finite-geometry models of electric field noise from patch potentials in ion traps. Phys. Rev. A 84, 53425 (2011). 37. Niffenegger, R. J. et al. Integrated multi-wavelength control of an ion qubit. Nature 586, 538–542 (2020). 38. Mehta,-
 K. K. et al. Integrated optical multi-ion quantum logic. Nature 586, 533–537 (2020). 39. Bushev, P. et al. Electrons in a cryogenic planar Penning trap and experimental challenges for quantum processing. Eur. Phys. J. D 50, 97–102 (2008). 40. Goldman, J. & Gabrielse, G. Optimized planar Penning traps for quantum-information studies. Phys. Rev. A 81, 052335 (2010). 41. Yu, Q. et al. Feasibility study of quantum computing using trapped electrons. Phys. Rev. A 105, 022420 (2022).
Publisher’s note Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.
Springer Nature or its licensor (e.g. a society or other partner) holds exclusive rights to this article under a publishing agreement with the author(s) or other rightsholder(s); author selfarchiving of the accepted manuscript version of this article is solely governed by the terms of such publishing agreement and applicable law.
© The Author(s), under exclusive licence to Springer Nature Limited 2025

 Methods
Paul trap equations
In Paul traps, ions experience a static potential plus a time-dependent potential12:
͠ (2)
′ ′′
Φxyzt Φ Φ
U Ax By Cz U ω t A x B y C z
( , , , )= +
= 2 ( + + ) + cos( )
2 ( + + ).
static rf
2 2 2 rf 2 2 2
Here we assume that the static and time-dependent potentials share the same principal axes. The coefficients A, B, C and A′, B′, C′ satisfy the Laplace equations ΔΦstatic = 0 and ΔΦrf = 0. The motion of a particle with mass m and charge Ze in the x-axis is described by the following equation:
͠
x Ze
m
Φ x
Ze
 ̈ = − ∂ m UA U ω t A x
∂ = − [ + cos( ) ′ ] . (3)
rf
Further simplification leads to the standard Mathieu differential equation:
dx
dξ + [a − 2qcos(2ξ)] x = 0 (4)
2
2
with ξ = ωrft/2 and
a = 4ZeUA/mω , (5)
rf
2
͠
q = −2ZeU A′ /mω . (6)
rf
2
Without loss of generality, we can set q ≥ 0. The stable solution of the Mathieu equation has a characteristic exponent β that depends on a and q, leading to the trap frequency ω = βξ. In the lowest-order approximation in which (|a|, q2) ≪ 1,
β ≈ a + q /2 . (7)
2
The motion of the ion can thereby be described by a ponderomotive potential, which is also known as the pseudopotential:
U = m1ω F
4 ( ) . (8)
ps rf
2 rf
2
Frf is the magnitude of the RF force acting on the ion. When the lowest-order approximation is no longer valid, that is, when q ≈ 0.5, the characteristic exponent β can be extracted numerically.
Additive manufacturing of micro ion trap
We use a commercial 3D printing system Nanoscribe GT2 to print trap electrodes, electrical paths and wire-bonding pads in one process on sapphire substrates of size 5 mm × 5 mm × 2 mm. During the printing process, a negative-tone acrylate-based photoresist (IP-S, Nanoscribe GmbH & Co. KG) is placed on top of the substrate. A 780nm femtosecond laser is focused inside the liquid photoresist through a directly immersed 25× objective (numerical aperture 0.8). The laser focal spot is scanned in 3D to c-
ross-link the photoresist in the designed trap geometry. After 3D printing, the remaining liquid photoresist is washed off by soaking in a developer (propylene glycol methyl ether acetate, Sigma-Aldrich) for 4 h and rinsed with isopropanol. After fully drying, the samples are coated with a nominally 1-μm-thick metal film using an evaporation angle of 30° with respect to the normal of the substrate surface, which is mounted on a rotating chuck.
Repeatability and accuracy. We test our final design iteration for repeatability and accuracy in the printing process. 200 (20 × 10) ion
trap central regions are printed using 2PP 3D printing, with each region of 455 μm × 455 μm in-plane and 300 μm out-of-plane. The ion trap array is printed on Si wafer and then developed and post-processed. The ion traps are then sputter-coated with approximately 60 nm of Au and imaged using SEM. For best resolution, a composite SEM image is prepared by stitching 50 individual images each showing a 2 × 2 central region of the trap array (Extended Data Fig. 1). Optical profilometry results for the -
same 200 printed ion traps are shown in Fig. 6a and Extended Data Fig.2. The image shows the reproducibility of the 2PP printing process. A Zygo profilometer is used with a 20× objective and green light for imaging. The sample tilt owing to mounting is corrected using the Zygo software and the results are coloured for different z-heights. We also characterize the printing accuracy by measuring the dimensions of selected features in SEM images and comparing them with the computer-aided design (CAD)-
 model. Extended Data Fig.3a compares the experimentally measured dimensions of various features—trenches, electrodes, electrical paths—in a single trap with their CAD-derived dimensions. The near one-to-one correspondence between CAD and measured dimensions for both in-plane and out-of-plane features reflects the excellent print quality. Extended Data Fig. 3b depicts the variation in experimentally measured feature dimensions relative to their CAD values across 90 ion trap samples. Width of a DC -
electrode, height of RF electrodes and angle between RF electrodes are selected as representative in-plane, out-of-plane and angular features, respectively. Across 90 ion trap samples, we observe very low variation in each measured feature relative to its CAD dimension. The non-zero average in-plane variation is probably a result of imperfect mounting of the trap samples inside the SEM, which leads to a slightly tilted horizontal plane and lower-than-expected in-plane length measurements. To valid-
ate this hypothesis, Extended Data Fig. 3c presents results from several remounting attempts: in-plane dimensions of the same feature are measured across ten ion trap samples. This systematic variation is attributed to imperfect mounting. Each time the sample is remounted, a slight tilt is introduced, biasing in-plane measurements in a way that is difficult to correct. All measurements are taken using the SEM and analysis is performed using the ImageJ software.
Common fabrication defects. We encounter several fabrication defects during our manufacturing process. Surface roughness on the RF electrodes (Extended Data Fig. 4a) originates from the 0.4-μm layer-by-layer printing, producing periodic out-of-plane ripples. It can be reduced by using a finer layer height when processing the CAD model for printing, at the cost of printing speed. Stitching defects arise from combining several fields of view when printing large features (Extended Data Fig.4b). Each -
field of view is 455 μm × 455 μm and there is an overlap of 5 μm between adjacent fields. The stitch line appears as a result of a combination of overcuring in the overlapped regions, variability in stage movement and substrate height variations or tilt. Such defects can be reduced by using a higher-precision 3D printer. Dust particles may adhere to the traps during fabrication, potentially causing electrode shorts (Extended Data Fig. 4c). We have developed several in-house cleaning protocols to m-
inimize dust and debris on ion traps during printing and processing. Operating in a cleanroom environment further reduces these defects. Residues from drying solvents are another source of contamination during post-processing after printing (Extended Data Fig. 4d). These defects can be mitigated by using cleanroom-grade, high-purity solvents and incorporating further rinse steps. We further characterize the surface roughness of metal coating. An SEM image of the zoomed-in Au coating on a 3D-printe-
d structure is shown in Extended Data Fig. 4e. Further characterization is performed using atomic force microscopy (AFM). AFM images of 1-μm-thick Au coatings on the surface of the sapphire substrate and on the 2PP-printed polymer are shown in Extended Data Fig.5. The average roughness is 9.1 nm for Au on sapphire and 6.5 nm for Au on polymer.

 Article
The peak-to-valley roughness is 58.5 nm for Au on sapphire and 30.6 nm for Au on polymer. From these values, we conclude that the Au coating roughness is dominated by the grain structure from electron-beam evaporation and that substrate waviness from 3D printing contributes negligibly to the surface texture of the coating.
Au coating uniformity on 3D-printed RF electrodes. High-aspect-ratio structures are hard to coat conformally using line-of-sight vapour deposition techniques. We use electron-beam evaporation to deposit Au on 3D-printed traps at an evaporation angle of 30° relative to the substrate surface normal, with the traps mounted on a rotating chuck. X-ray micro-computed tomography (XCT) imaging is used to characterize the coating uniformity and coverage on the RF electrodes (Extended Data Fig.6). We use a -
ZEISS Versa 510 XCT machine with 80-keV energy X-rays and 3,201 projections are taken with a 60-s exposure time. The effective voxel size is 0.39 μm. We observe that the Au coating is very uniform and completely covers the RF electrodes.
Electrical isolation of the 3D-printed trenches. Focused ion beam (FIB) SEM cross-sectional images of the printed trenches are shown in Extended Data Fig. 7. Extended Data Fig. 7a,b depicts the trench geometry isolating electrical paths outside the central region of the trap and Extended Data Fig. 7c,d illustrates the trenches beneath the central DC electrodes. Before milling, a protective carbon layer (dark layer in Extended Data Fig. 7 on top of the bright Au layer) is deposited to minimize FIB -
damage. The backscattered electron (BSE) SEM images (Extended Data Fig.7b,d) enhance the contrast of the nominal 1-μm-thick Au layer. The brighter BSE SEM signal in the trenches is an artefact of the FIB process, which results in some redeposition of Au–C in the inner trenches. These results confirm that the double-overhang trench design provides robust electrical isolation between electrodes, signal paths and the substrate.
Fabrication scalability of 3D-printed ion traps. A fully 3D-printed trap design, including the centre trap electrodes, electrical paths and wire-bonding pads, takes about 14 h to print, whereas the centre RF electrodes only take 30 min. Present microfabrication technologies can easily produce surface electrodes and electrical paths, but producing high-aspect-ratio RF electrodes with high surface smoothness and suspended horizontal structures (see Supplementary Information) is challenging. Therefor-
e, a hybrid fabrication route could be used to increase fabrication throughput and yield. Figure 6e and Extended Data Fig. 8 demonstrate that we can accurately align and 3D-print RF electrodes on prefabricated Si substrates featuring defined surface DC electrodes, electrical paths and wire-bonding pads using microfabricated trenches with undercut—a straightforward and well-established process in microfabrication facilities. Thousands of prepatterned substrates can be fabricated on a single wafer a-
nd diced before 3D printing the trap structures directly on them. This hybrid method combining traditional microfabrication and 2PP-based 3D printing can reduce the 3D printing time to 30 min and increase the fabrication yield. Moreover, it can also allow the possibility of printing on advanced substrates with through-substrate vias, so high-density electrical connectivity can be achieved by flip-chip bonding for future quantum computing architectures, such as a QCCD. Printing directly on chips wi-
th integrated photonics is also feasible.
Vertical 3D-printed ion traps
Designing and fabricating micro 3D ion traps require great engineering effort. The 14th design iteration refers the trap shown in Fig. 3 (ionelectrode distance 100 μm, Au-coated). We denote it 3D-100-Au-V. The 17th design iteration is shown in Extended Data Fig. 9, with ionelectrode distance of 75 μm, Al-coated. We denote it 3D-75-Al-V. The short fabrication turnaround time of our 2PP-based 3D printing approach allows us to rapidly iterate trap and electrical path design.
During these iterations, we learned design rules that allow us to increase manufacturability and improve the full trap performance. The RF and DC electrode design changed little during the iterations, indicating the reliability of the electromagnetic simulations. Changes were made to overcome the challenges associated with printability, electrical isolation and fabrication yield. We explored hollow traces, for which only the sidewalls of the traces were printed, and found that these had poorer fab-
rication quality than filled-in ones but took longer to print; flat and tapered undercuts of different dimensions; different electrode spacings; and different supports for undercuts at corners. The design motifs and fabrication protocols that allow us to generate reliable electrical routes can be easily translated to future trap designs. There were no changes in the geometry near the ion trapping location until the 16th design iteration. Trap 3D-100-Au-V is well covered in Fig. 3. Compared with tr-
ap 3D-100-Au-V, we have made several changes to trap 3D-75-Al-V: (1) the ion–RF electrode distance is reduced from 100 μm to 75 μm; (2) the coating material is changed from Au to Al; (3) the sidewall structure on the substrate is optimized to give a higher yield; (4) the lead to the centre DC electrode is removed so that the DC electrode layout is more symmetric. The electrical connection to the centre electrode is instead established by the whole metal plane on the substrate. In this configuratio-
n, there is no ground plane in the trap because every electrode can be biased relative to the true ground. With a more symmetric DC layout, some higher-order DC potential multipole expansion terms can be eliminated even in the presence of small errors in electrostatic simulation while simultaneously increasing the voltage efficiency to generate the axial confinement, that is, achieving a higher axial frequency at the same maximum applied voltage.Supplementary Information includes contour plots of -
voltage solutions in the top view of trap 3D-75-Al-V for each first-order multipole (x, y and z) and for the multipole governing the axial confinement.
Trap structural response. We also simulate the structural response of the trap electrodes to the electrostatic forces from the applied voltages and find that deformation of the trap electrodes should be well below 0.2 nm at 200 V DC voltage.
Measurement scheme
Ions are created in the trap by photoionizing neutral Ca atoms thermally evaporated from a Ca oven. We confine 40Ca+ ions at heights of 130–190 μm above the DC electrode plane in both traps 3D-100-Au-V and 3D-75-Al-V. The planar motional modes are cooled using a horizontal (parallel to the substrate surface) 397nm beam detuned by 20 MHz to the red from the 42S1/2–42P1/2 cooling transition, whereas a vertically oriented 866 nm repumper beam on the 32D3/2–42P1/2 transition provides some partial cool-
ing of the vertical axial mode. The planar trap frequencies are measured by sideband spectroscopy on the |42S1/2, mJ = −1/2⟩ ↔ |32D5/2, mJ = −5/2⟩ Zeeman transition using 729 nm light in a horizontal configuration. We use capacitive dividers to measure the RF voltage amplitudes of two RF electrode pairs, with electrodes within each pair driven in phase. Each capacitive divider has a ratio of 3 pF:100 pF. We balance two out-of-phase amplitudes using tunable capacitors42. DC electrodes are configure-
d to create vertical confinement, compensate stray electric fields and remove the degeneracy between the two planar motional modes parallel to the substrate.
Two-qubit gate. To demonstrate multi-qubit operations of trapped ions in a 3D-printed trap, we implement a Mølmer–Sørensen gate31 on the optical transition {S1/2, mJ = −1/2} to {D5/2, mJ = −1/2} in trap 3D-75-Al-V, in which the shared axial COM motional mode is used as a quantum bus to generate entanglement. To increase the coupling to the gate transition and eliminate Δm = ±1 transitions, the magnetic field is 45° to the axial direction. The 729nm

 laser beam is parallel to the axial mode and is focused through our imaging objective. The set-up configuration is shown in Extended Data Fig. 10. The two ions are illuminated with a bichromatic 729 nm laser light with frequencies of ω± = ω0 ± (δg + ωc), here ω0 is the qubit transition frequency, ωc/2π = 3 MHz is the axial COM mode frequency and δg/2π = 10 kHz is the gate detuning. Changing to an interaction picture and performing the rotating-wave approximation, in the Lamb–Dicke regime, the tim-
e-dependent Hamiltonian is
H = −ħηΩ S (ae + a e ).
y
δt δt 0
i † −i
gg
Here η is the Lamb–Dicke factor (≈0.04), Ω0 is the Rabi frequency on the carrier transition, S = σ + σ
yy y
(1) (2) is the collective spin operator and a and a† are the phonon annihilation and creation operators on the axial COM mode. After the gate time tg = 2π/δg = 100 μs, the spin and motion decouple and this Hamiltonian yields the unitary operation U = exp(i(π/4)σy ⊗ σy) that creates maximally entangled states when Ω0 = δg/2η. The phase coherence of the entangled state can be verified by applying an analysis pulse at the end of the gate, which has a variable phase φ relative to the entangling intera-
ction, and the parity can be calculated as Π(φ) = P(|DD⟩) + P(|SS⟩) − P(|DS⟩) − P(|SD⟩), as shown in Fig. 5d. Knowing the contrast C of the parity scan, a lower limit of the gate fidelity can be established asF = (P(∣DD⟩) + P(∣SS⟩))/2 + C /2. The fitting of the parity scan gives a contrast of C = 0.975 ± 0.014 and, using the population P(|DD⟩) + P(|SS⟩) = 0.980 ± 0.019 at the gate time 100 μs, we obtain a lower limit on the Bell-state fidelity of 0.978 ± 0.012. The main sources of gate error in ou-
r experiment are spin decoherence owing to magnetic field fluctuations and laser frequency noise (1.3%) and motional heating (0.6%). Motional-heating-induced error can be reduced by increasing the trap frequency, switching to the stretch mode, which is expected to have a much smaller heating rate than the COM mode, or cooling the ion trap to cryogenic temperatures.
Data availability
Source data are provided with this paper. All other data supporting the plots in this paper and other findings of this study are available from the corresponding authors on request.
42. An, D. et al. Surface trap with dc-tunable ion-electrode distance. Rev. Sci. Instrum. 89, 093102 (2018).
Acknowledgements We acknowledge the inspiration of C. Matthiesen at the start of the project and J. Oakdale for printing the first demonstration objects. We would also like to acknowledge N. Greene for the help on chamber assembly, W.-T. Chen for the useful guidance on the measurements, B. Saarel for providing the surface trap image, M. Brzeczek and J. Philips for providing preliminary trapping results on horizontal traps, A. L. Castillo for electron-beam deposition, W. L. Smith for creating CAD m-
odels, M. M. Biener for the AFM surface roughness measurements and X. Liu for performing the XCT experiments. This work is supported by the UC Multicampus-National Lab Collaborative Research and Training under award no. LFR-20653698, as well as the Army Research Laboratory under award no. W911NF-23-1-0323, by the U.S. Department of Energy, Office of Science, National Quantum Information Science Research Centers, Quantum Systems Accelerator (QSA), by the Noyce Initiative and received some instituti-
onal support by NSF grant no. 2016245. Part of this work was performed under the auspices of the U.S. Department of Energy by Lawrence Livermore National Laboratory under contract DE-AC52-07NA27344 and was supported by the LLNL-LDRD Program under project no. 23-ERD-021. A.J. acknowledges the support of ONR grant nos. N00014-21-1-2597 and N00014-21-1-2720.
Author contributions J.B., H.H., X.X., S.X. and E.M. conceived the project. X.X., A.P. and S.X. fabricated and prepared the traps. S.X., Q.Y. and S.K. performed the ion trap measurements. B.Y. carried out structural simulations. K.B., J.B., H.H., B.H. and A.J. coordinated research and provided scientific guidance. All authors participated in interpreting and planning of the experiments. All authors participated in writing the manuscript.
Competing interests J.B., H.H., E.M. and X.X. are named inventors on US patent no. US20230274174A1 and the corresponding PCT application no. WO2022046306A2, titled ‘Miniature ion traps for fast, high-fidelity and scalable quantum computations’.
Additional information
Supplementary information The online version contains supplementary material available at https://doi.org/10.1038/s41586-025-09474-1. Correspondence and requests for materials should be addressed to Shuqi Xu, Xiaoxing Xia, Juergen Biener or Hartmut Häffner. Peer review information Nature thanks Rajibul Islam and the other, anonymous, reviewer(s) for their contribution to the peer review of this work. Peer reviewer reports are available. Reprints and permissions information is available at http://w-
ww.nature.com/reprints.

 Article
Extended Data Fig. 1 | SEM image of an array of 200 3D-printed ion trap central regions. Each region contains RF and DC electrodes only, with no electrical paths. This image is created by stitching together 50 individual 2 × 2 ion trap section images; slight contrast variations between panels reflect the composite assembly.

 Extended Data Fig. 2 | Optical profilometry measurement on 200 3D-printed ion trap central regions. Colour bar represents height in the out-of-plane direction (z-axis).

 Article
Extended Data Fig. 3 | Repeatability of 3D-printed feature dimensions in ion trap central regions. a, Measured dimensions of printed structures in an ion trap compared with the CAD model dimensions. Blue dots (red triangles) represent in-plane (out-of-plane) dimensions. Grey line represents the ideal one-to-one relationship between the measured dimension to the CAD dimension. b, Variation in measured in-plane, out-of-plane and angular dimensions of selected trap features relative to the CAD model -
across 90 samples. In-plane measurements (blue) correspond to DC electrode dimensions parallel to the
sapphire substrate; out-of-plane measurements (red) to RF electrode heights; angular measurements (yellow) to angles between RF electrodes. Grey bars denote the minimum and maximum values of each feature and coloured area outlined in grey show kernel density estimation. c, Variation in feature dimensions along two orthogonal in-plane directions (x and y) over ten repeated measurements per axis for four independent experiments, each involving sample repositioning, mounting and imaging. Blue (red) d-
ots denote measurements along the x-axis (y-axis).

 Extended Data Fig. 4 | SEM images of fabrication defects. a, SEM image of the RF electrode surface at a 45° angle, revealing layer-by-layer 2PP-printinginduced roughness. b, Stitch lines between adjacent fields of view on DC electrodes and electrical paths. c, Dust particle on an electrical path, potentially
shorting to the ground plane. d, Residual solvent-impurity contamination on 3D-printed structures. e, Surface roughness of the 3D-printed polymer after electron-beam Au deposition.

 Article
Extended Data Fig. 5 | AFM images of Au coatings. a,b, 1-μm-thick Au coating deposited on a sapphire substrate. c,d, 1-μm-thick Au coating deposited on a 3D-printed polymer DC electrode. Average roughness is 9.1 nm on sapphire and
6.5 nm on polymer. Peak-to-valley roughness is 58.5 nm on sapphire and 30.6 nm on polymer.

 Extended Data Fig. 6 | XCT images. Reconstructed 3D XCT image (top left) of the RF electrode structure, with a horizontal slice (top right) and vertical slices (bottom row) through the electrodes. Bright regions denote the Au coating and
colour scales represent the local coating thickness. The low atomic number polymer substrate is not detected, so only the metal layer appears.

 Article
Extended Data Fig. 7 | FIB SEM cross-sections of two trench designs used in trap 3D-100-Au-V. a, Secondary electron SEM image of the trench design for the electrical paths. b, The corresponding BSE SEM image. Surface roughness and curtaining artefacts arise from FIB milling and the lighter-grey layer at the
trench base reflects Au–C redeposition during the milling process. c,d, Secondary electron SEM image (c) and BSE SEM image (d) of the trench design used in the central region of the ion trap. The thin top layer is a protective carbon coating applied before FIB milling.

 Extended Data Fig. 8 | 3D-printed RF electrodes on microfabricated substrates. a,b, Photographs of microfabricated Si substrates featuring surface DC electrodes, electrical paths and wire-bonding pads. The substrates
are processed on 6-inch wafers and diced into individual chips. c,d, SEM images (top-down and angled views) of a 3D-printed ion trap mounted on these substrates.

 Article
Extended Data Fig. 9 | Vertical trap iteration 17 (3D-75-Al-V). a, SEM image of the ion trap central region. The electrodes are annotated in the image. The distance between each pair of opposite RF electrodes is 150 μm, which
leads to 75 μm ion–RF electrode distance. b, Design showing the CAD model of printed structures, including electrical paths.

 Extended Data Fig. 10 | Configuration for two-qubit gate measurement. Magnetic field is tilted by 45° relative to the substrate. 397 nm laser beam propagates parallel to the substrate, whereas 729 nm and 866 nm beams propagate perpendicular to it. Two ion images are overlaid on the SEM image of trap 3D-75-Al-V.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:43.163Z
- **Text Length:** 61289 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
