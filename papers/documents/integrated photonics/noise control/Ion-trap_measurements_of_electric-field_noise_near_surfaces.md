# PDF Document: Brownnutt 等 - 2015 - Ion-trap measurements of electric-field noise near surfaces.pdf

**File Path:** Brownnutt 等 - 2015 - Ion-trap measurements of electric-field noise near surfaces.pdf

**Processed Date:** 2026-02-10T18:16:03.552Z

**File Size:** 2675.98 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 256

**Title:** Ion-trap measurements of electric-field noise near surfaces

**Collection:** Integrated Photonics > Noise control

---

## Extracted Text Content

Ion-trap measurements of electric-field noise near surfaces
M. Brownnutt* and M. Kumph
Institut für Experimentalphysik, Universität Innsbruck, Technikerstrasse 25, 6020 Innsbruck, Austria
P. Rabl
Atominstitut, TU Wien, Stadionallee 2, 1020 Wien, Austria
R. Blatt
Institut für Experimentalphysik, Universität Innsbruck, Technikerstrasse 25, 6020 Innsbruck, Austria, and Institut für Quantenoptik und Quanteninformation, Österreichische Akademie der Wissenschaften, Technikerstrasse 21A, 6020 Innsbruck, Austria
(published 11 December 2015)
Electric-field noise near surfaces is a common problem in diverse areas of physics and a limiting factor for many precision measurements. There are multiple mechanisms by which such noise is generated, many of which are poorly understood. Laser-cooled, trapped ions provide one of the most sensitive systems to probe electric-field noise at MHz frequencies and over a distance range 30 −3000 μm from a surface. Over recent years numerous experiments have reported spectral densities of electric-field n-
oise inferred from ion heating-rate measurements and several different theoretical explanations for the observed noise characteristics have been proposed. This paper provides an extensive summary and critical review of electric-field noise measurements in ion traps and compares these experimental findings with known and conjectured mechanisms for the origin of this noise. This reveals that the presence of multiple noise sources, as well as the different scalings added by geometrical considerations-
, complicates the interpretation of these results. It is thus the purpose of this review to assess which conclusions can be reasonably drawn from the existing data, and which important questions are still open. In so doing it provides a framework for future investigations of surface-noise processes.
DOI: 10.1103/RevModPhys.87.1419 PACS numbers: 07.50.Hp, 03.67.−a, 37.10.Ty, 68.47.De
CONTENTS
I. Introduction 1420 II. Field Noise and Ion Heating 1421 A. Introduction to ion traps 1421 B. Typical trap geometries 1423 C. Electric-field-noise-induced heating of ions 1424 1. Heating rate 1424 2. Master equation 1425 3. Heating of multiple ions 1425 4. Heating rates and decoherence 1426 D. Noise sensing with heating-rate measurements 1426 1. Sideband spectroscopy 1426 2. Doppler recooling 1427 3. Other methods 1428 E. Limits to measurement sensitivity 1428 III. Experimental Overview 1429 A. F-
requency scaling 1429 1. Frequency scaling at room temperature 1430 2. Frequency scaling at cryogenic temperatures 1432 B. Distance scaling 1432
1. Normalizing for frequency 1435 2. Normalizing for temperature 1435 3. Normalizing for geometry 1436 4. Other systematic effects 1437 5. Summary 1437 C. Temperature scaling 1438 IV. Selected Sources of Electric-field Noise 1440 A. Blackbody radiation 1440 1. Blackbody radiation in free space 1440 2. Blackbody radiation above surfaces 1441 B. Electromagnetic interference 1441 C. Electromagnetic pickup 1442 D. Johnson-Nyquist noise 1442 1. Frequency-dependent resistance 1443 2. Characteristic dist-
ances 1444 3. Temperature scaling of Johnson noise 1446 4. Absolute values of Johnson noise 1446 5. Johnson noise in a filter network 1447 6. Johnson noise in an rf resonator 1447 7. Technical noise 1449 E. Space charge 1449 V. Microscopic Models for Noise Above Nonideal Surfaces 1450 A. Patch-potential models 1450 1. Origin of patch potentials 1450 2. Electric-field noise from fluctuating patches 1451
*Present address: University of Hong Kong, Hong Kong. mikeb@hku.hk
REVIEWS OF MODERN PHYSICS, VOLUME 87, OCTOBER–DECEMBER 2015
0034-6861=2015=87(4)=1419(64) 1419 © 2015 American Physical Society

 3. Distance scaling for a planar trap 1451 4. Influence of the electrode geometry 1452 B. Two-level fluctuator models 1453 1. Electric-field noise from fluctuating dipoles 1453 2. Two-level fluctuators 1454 3. Thermally activated fluctuators 1454 4. Tunneling states 1455 5. Nonuniform distributions of activation energies 1456 C. Adatom dipoles 1456 1. Adatoms 1457 2. Phonon-induced dipole fluctuations 1457 3. Noise spectrum 1458 D. Adatom diffusion 1458 1. Adatom diffusion on surfaces 1459 2. Ada-
tom-diffusion-induced noise 1459 3. Diffusion on smooth surfaces 1460 4. Diffusion on corrugated surfaces 1460 VI. Heating Mechanisms Inferred in Experiments 1461 A. Patch potentials 1461 B. Electromagnetic pickup 1462 C. Technical noise 1462 D. Johnson noise 1463 E. Surface effects 1464 F. Contamination removed by laser cleaning 1464 G. Contamination removed by ion-beam cleaning 1464 H. Conclusion 1465 VII. Open Questions 1465 A. Cryogenic noise floor 1465 1. Johnson and technical noise 1465 2. M-
agnetic pickup 1466 3. Fluctuating adatom dipoles 1466 B. Noise above superconductors 1466 C. Frequency-independent heating rates 1467 D. Very low absolute heating rates 1467 VIII. Outlook 1467 A. Reduction of noise 1468 B. Investigation of noise in ion traps 1469 1. Frequency 1469 2. Distance 1469 3. Correlation length 1470 4. Temperature 1471 5. Equilibrium dynamics 1471 6. Noise combinations 1472 C. Further avenues for investigation of noise 1472 D. Conclusion 1473 List of Symbols and Abbreviat-
ions 1473 Acknowledgments 1476 Appendix A: Derivation of the Heating Rate Γh 1476 Appendix B: Excess Micromotion and Heating 1476 Appendix C: Summary of Noise Characteristics 1478 References 1478
I. INTRODUCTION
Electric-field noise above surfaces provides a significant challenge to many disparate areas of physics. Drift-tube experiments attempting to measure the effects of gravity on charged particles are affected by stray fields from metallic shielding which can be several centimeters away (Darling et al., 1992). The presence of static patch potentials also limits the measurement of Casimir forces at distances around 0.1 − 1 μm (Speake and Trenkel, 2003; Sushkov et al., 2011;
Garcia-Sanchez et al., 2012). In space-based gravitationalwave experiments, variations in the electrostatic surface potential are expected to be one of the largest contributors of noise at frequencies around 1 mHz, over distances of 1 mm (Pollack, Schlamminger, and Gundlach, 2008). Motion of nanocantilevers around 1 kHz is damped by field noise in the form of noncontact friction, acting over 10 nm (Stipe et al., 2001). Operating at around 1 MHz and at distances around 10 − 1000 μm from metallic el-
ectrodes, cold trapped ions are heated by electric-field noise. Moving from the ubiquity of electric-field noise in general to the specific mechanism giving rise to it in each instance, however, is complicated for two reasons. First, seemingly disparate effects in different systems may have a common root. For example, considering the scaling with the distance d to the electrodes, finite spatial correlation of noise can mean that the same underlying physical mechanism may present itself with a scal-
ing between d0 and d−6 at different distances (Dubessy, Coudreau, and Guidoni, 2009; Low, Herskind, and Chuang, 2011). Second, within a single system multiple effects may be significant and the measurement of electricfield noise over a small distance range or frequency range is often not sufficient to distinguish different sources of noise. Given such a complex and interrelated picture, knowing what the cause of noise is, or is not, in one particular system can inform how that system, and the rele-
vant noise sources, relate to other areas. Cold, trapped atomic ions can act as immensely sensitive probes of electric-field noise at frequencies around 1 MHz and for distances of a few tens to a few hundreds of μm from a surface. Ions, which are initially laser cooled to close to the quantum ground state of their motion, are heated by fluctuating electric fields. The spectral density of electric-field noise at the ions’ motional frequencies can be inferred by measuring the heating rate. Such heat-
ing represents a severe limitation for many trapped-ion applications, where the ion should stay near the quantum ground state. For example, trapped-ion quantum computers require ions to be near the motional ground state; even “thermal” gate operations require motional quantum numbers of  ̄n ≲ 20 (Kirchmair et al., 2009). In practical terms, with typical gate speeds, this necessitates ion-heating rates of _ ̄n ≲ 100 s−1. As another example, the effects of ion heating in optical clocks can contribut-
e fractional uncertainties at the 10−17 level due to second-order Doppler shifts (Rosenband et al., 2008). While ions in such experiments can be sympathetically cooled, the effects of external heating significantly complicate the process (Wübbena et al., 2012). Consequently, in addition to investigating the effects of electric-field noise for their own sake, there is significant interest within the trapped-ion community in understanding the sources of electric-field noise so that they can be mitig-
ated. The first systematic studies of trapped-ion heating found that the observed heating rates (and by implication the levels of electric-field noise) were very much greater than would be expected from a simple consideration of blackbody radiation or Johnson noise (Turchette et al., 2000). Dubbed “anomalous heating” (Monroe et al., 1995) there has subsequently been an increasing interest in identifying and eliminating the noise source underlying this effect. Questions have also been raised
1420 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 as to whether and how this heating could be related to the effects seen in other systems, such as noncontact friction in nanocantilever systems (Stipe et al., 2001; Volokitin and Persson, 2007), the ubiquitous 1=f noise encountered in many solid-state devices (Dutta and Horn, 1981; Paladino et al., 2014), or diffusion-induced noise observed in emission currents (Timm and Van der Ziel, 1966). Moreover, it has been suggested that understanding the heating observed in ions could shed light on crysta-
lline structure (Dubessy, Coudreau, and Guidoni, 2009; Low, Herskind, and Chuang, 2011), fluctuating patch potentials (Daniilidis et al., 2011), or surface adsorbates (Safavi-Naini et al., 2011). To this end, much has been done to investigate the heating observed in ion traps. In most studies it is assumed that the spectral density of electric-field noise SE, experienced by the trapped ion, varies—at least within a certain parameter range—as a power law with respect to the frequency ω, the distanc-
e of the ion from the surface d, and the trap temperature T, such that
SE ∝ ω−αd−βTþγ: ð1Þ
Such power-law behavior is also predicted, within certain parameter ranges, by many theoretical models. Models for different noise mechanisms give particular predictions for the frequency-scaling exponent α, the distance-scaling exponent β, and the temperature-scaling exponent γ. Experimental measurements of these exponents can therefore provide information about likely noise sources. It should be stressed at the outset that this review article does not set out to claim that the issues surrounding-
 heating of trapped ions have all been resolved. Despite an increasing amount of experimental data, ongoing theoretical work, and strengthened engagement with insight from disciplines beyond ion trapping, the dominant sources of noise and the physical mechanisms responsible for them are still not fully understood. A review of the topic should not be taken to indicate that the subject is closed, quite the opposite. Investigation of electric-field noise with trapped ions is a vibrant and active rese-
arch area, with numerous new avenues of investigation opening up. The aim of this article is therefore to take stock of the extensive literature which exists already, setting out what is known, what is conjectured, and what is unknown. Rather than being the conclusion of the matter, this review should therefore be seen as the starting point for future investigations. This article is structured as follows. Section II briefly summarizes the basics of ion trapping. It describes how trapped ions are a-
ffected by electric-field noise, and how they can thus be used to measure such noise. Section III gives an overview of the experiments carried out to characterize electric-field noise in ion traps, particularly noting what can be deduced regarding the values of the scaling exponents α, β, and γ. In this section the experimental results are presented without reference to possible heating mechanisms which may underlie the observations. Sections IV and V review a variety of fundamental, technical, an-
d surface-related sources of noise which can contribute to motional heating in ion traps. For each case the expected scaling laws and the magnitude of electric-field noise expected for typical ion-trapping
conditions are highlighted. By considering what has been observed experimentally in the light of theoretical considerations, Sec. VI then outlines a number of specific experiments in which particular heating mechanisms can be inferred. This demonstrates that there are multiple effects to be considered which can contribute noise at similar levels. Section VII then highlights some experiments in which the noise is well characterized but for which the noise source cannot yet be unambiguously identifi-
ed. Finally, Sec. VIII considers the implications of noise for ion traps and proposes ways in which the field might move forward.
II. FIELD NOISE AND ION HEATING
The development of ion traps more than 50 years ago opened up unique possibilities for experimenting with individual atomic and molecular ions (Paul, Osberghaus, and Fischer, 1958; Fischer, 1959; Dehmelt, 1990; Paul, 1990). Today it is a routine procedure to trap single or multiple ions and laser cool one or more of their motional modes to the quantum ground state. Quantum manipulations and detection schemes for internal (electronic) and external (motional) degrees of freedom can be implemented wi-
th high precision (Blatt and Wineland, 2008; Blatt and Roos, 2012). In the context of quantum information processing the goal of building scalable ion-trap architectures has recently led to a rapid progress in the design of microtraps, where planar electrodes are fabricated on a chip to allow smaller and more complex structures (Chiaverini et al., 2005; Wesenberg, 2008; Amini et al., 2010). As traps get smaller the ions are located closer to the surfaces and become more susceptible to small voltag-
e fluctuations on the electrodes. This leads to an increase in the rate at which ions are heated. While this is a hindrance for many experiments, it also makes trapped ions an exquisite probe to study such noise processes. This section provides a brief summary of the general principles of ion traps which are relevant for describing noise-induced heating processes in these systems. The discussion focuses on the operation of Paul traps, rather than Penning traps. While temperature measurements have -
been carried out in Penning traps (Djekic et al., 2004), as well as heating-rate measurements for large crystals (Jensen, Hasegawa, and Bollinger, 2004) and recently for single ions (Goodwin et al., 2014), it remains the case that the majority of noise investigations have been carried out in Paul traps. Much of this review remains relevant to Penning traps, although certain aspects of heating in Penning traps will be distinct from that in Paul traps. These differences may be fundamental (arising, -
for example, from the different trapping methods) or more technical in nature (for example, because the ionelectrode separation in Penning traps is often larger than is typical for Paul traps). For more details about the design and operation of Paul and Penning traps see work of Werth, Gheorghe, and Major (2009).
A. Introduction to ion traps
In most experiments used for the measurement of electricfield-noise-induced heating rates, individual atomic ions are confined using a Paul trap (Paul, Osberghaus, and Fischer,
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1421
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 1958; Paul, 1990). The basic principle of such traps is to use a combination of static and radio-frequency (rf) quadrupole potentials which, on time average, lead to the confinement of charged particles in all three spatial directions. Ideally, the field null of the static and rf potentials should coincide. In this case, and restricting consideration to the motion along the x axis and near the center of the trap, where the applied potentials are to a good approximation harmonic, the dynamics of a-
 singly charged ion of mass mI are described by the equation of motion
̈xðtÞ þ jej
mI
1⁄2Φ0d0c þ Φ0r0f cosðΩrf tÞxðtÞ 1⁄4 0: ð2Þ
Here Φ0d0c and Φ0r0f denote the second-order derivatives of the static electric potential and the rf potential oscillating at Ωrf, respectively. By introducing the dimensionless parameters ax 1⁄4 4jejΦ0d0c=mIΩr2f and qx 1⁄4 2jejΦ0r0f =mIΩr2f , and a rescaled
time ~t 1⁄4 tΩrf=2, Eq. (2) maps onto the well-known Mathieu equation (Leibfried et al., 2003). In the limit of interest, ax; qx ≪ 1, this exhibits bound solutions of the form
xðtÞ 1⁄4 X0 cosðωtt þ φ0Þ
h
1 þ qx
2 cosðΩrf tÞ þ      
i
; ð3Þ
where φ0 is a phase set by the initial conditions. The ion undergoes large-amplitude oscillations at a frequency ωt which, for ax; qx ≪ 1, is given by ωt ≈ ðΩrf =2Þ
ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
ax þ qx2=2
p . This is variously (and equivalently) termed the motional, secular, or trap frequency. Superimposed on this is a smaller motion (called “micromotion”) which has an amplitude qx=2 of the secular motion and oscillates at the trap-drive frequency Ωrf. Considering some typical numbers, for an rf voltage, VðtÞ 1⁄4 Vrf cosðΩrftÞ, applied to a trap with an ion-electrode spacing of d 1⁄4 500 μm, values of Vrf ∼ 500 V and Ωrf ∼ 2π × 20 MHz result in trap frequencies around ωt ≈ 2π × 2 MHz. Corrections d-
ue to micromotion become important for large-amplitude secular oscillations, for external perturbations at frequencies close to the trap-drive frequency Ωrf (Blakestad et al., 2009, 2011), for static offset fields that displace the ion from the rf null (Blümel et al., 1988, 1989), and for phase differences between the rf driving fields on different electrodes (Berkeland et al., 1998; Herskind et al., 2009). For some experiments such regimes are unavoidable. For example, in experiments with large t-
hree-dimensional ion crystals (Herskind et al., 2009) or clouds of ions (Hornekær and Drewsen, 2002), some ions are necessarily situated away from the rf null. Nonetheless, by careful minimization of micromotion (Berkeland et al., 1998) many experiments can be operated in a regime where micromotion can be neglected. Under such circumstances, a single trapped ion can be treated, to a good approximation, as a simple harmonic oscillator. Consideration of only the effective harmonic potential is terme-
d the pseudopotential approximation. In analogy to the classical case, a full quantum description of a trapped ion can be obtained under the assumption that near the trap center the potential is purely quadratic. The problem can then be separated into the motion along each of the three principal axes of the trap. The
dynamics of the ion along a single direction are described by the Hamiltonian
Hˆ tðtÞ 1⁄4 pˆ 2
2mI
þ jej
2 1⁄2Φ0d0c þ Φ0r0f cosðΩrf tÞxˆ2; ð4Þ
where ˆx and pˆ are the quantized position and momentum operators. It follows that the equation of motion for the position operator xˆðtÞ in the Heisenberg picture is equivalent to its classical counterpart given in Eq. (2). The resulting expression for xˆðtÞ and pˆ ðtÞ can be written as
xˆðtÞ 1⁄4
ffiffiffiffiffiffiffiffiffiffiffiffi ħ 2mIωt
s
1⁄2 ˆa†uðtÞ þ aˆ u ðtÞ; ð5Þ
ˆpðtÞ 1⁄4
ffiffiffiffiffiffiffiffi ħmI 2ωt
s
1⁄2aˆ † _uðtÞ þ ˆau_  ðtÞ; ð6Þ
where the dimensionless function uðtÞ is a solution of Eq. (2) satisfying uð0Þ 1⁄4 1 and _uð0Þ 1⁄4 iωt. The operator aˆ 1⁄4
i ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
mI=ð2ħωtÞ
p 1⁄2uðtÞx_ˆðtÞ − _uðtÞxˆðtÞ is constant in time (Leibfried et al., 2003) and for t 1⁄4 0 it can be identified with the usual harmonic-oscillator annihilation operator
ˆa 1⁄4 1⁄2mIωtxˆð0Þ þ ipˆ ð0Þ= ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
2ħmIωt
p . The annihilation operator ˆa and its adjoint creation operator aˆ † satisfy 1⁄2 ˆa; ˆa† 1⁄4 1 and, as in the case of a standard harmonic oscillator, a complete set of phonon number states can be constructed by
jni 1⁄4 ðaˆ †Þn=pffinffiffij0i, where j0i is the vibrational ground state of the ion defined by aˆ j0i 1⁄4 0. The general expression for uðtÞ is given by an infinite series
uðtÞ 1⁄4 eibΩrft=2 ∞ X
j1⁄4−∞
C2jeijΩrf t; ð7Þ
but under stable conditions and qx ≪ 1 only a few terms are
relevant. In this limit, the Floquet exponent b ≃ ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
ax þ qx2=2
p,
and C 2 ≃ qx=4. Equations (5) and (6) therefore resemble the dynamics of a quantum harmonic oscillator of frequency ωt, with the main corrections arising from additional sidebands at frequencies Ωrf   ωt. It should be emphasized that the number states jni defined at a specific time t 1⁄4 0 are in general not eigenstates of Hˆ tðtÞ and their corresponding wave functions and energies are periodically modulated in time. This does not by itself, however, constitute a source of heating sinceassuming a -
stable rf source, and in the absence of other perturbations at the micromotion-sideband frequency—the system returns to its original state after each period t 1⁄4 2π=Ωrf .
While the analysis here has been one dimensional, the single-ion case is readily generalized to three dimensions, where the motional modes are orthogonal (Leibfried et al., 2003). The motion of multiple ions in harmonic traps is more complicated (Steane, 1997; James, 1998). With each additional ion, there are three additional modes of oscillation. The center of mass (c.m.) motion is the lowest-frequency mode axially and the highest-frequency mode radially. In strings of multiple trapped ions the v-
ibrational modes are in general not
1422 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 strictly harmonic and are weakly coupled to each other via higher-order terms in the expansion of the Coulomb potential. Still, for sufficiently cold strings of ions a description in terms of orthogonal harmonic modes holds to a good approximation. In practice, usually a single mode is selected for a particular operation and all other “spectator” modes are neglected. The effects of multiple ion species and anharmonic potentials add still more complexity and have been treated by Morigi and Walther-
 (2001) and Home (2013).
B. Typical trap geometries
Having outlined the essential features of the potential used for trapping ions, we turn to a few common trap geometries used to create such a potential. A quadrupole field in two dimensions can be created by a set of hyperbolic electrodes, as depicted in Fig. 1(a). An oscillating quadrupole field can be created by applying an rf voltage ðVrf=2Þ cosðΩrftÞ to one pair of electrodes and an rf voltage of opposite sign −ðVrf =2Þ cosðΩrftÞ to the other pair. To create a threedimensional trap one may cre-
ate either a rotationally symmetric geometry to form a ring trap [Fig. 1(b)] or a translationally symmetric geometry to form the basis of a linear trap [Fig. 1(c)]. In the latter case the axial confinement of the ion is provided by additional direct current (dc) electrodes at either end of the trap, held at a positive potential [as shown in Fig. 1(f)]. Rather than applying rf voltages of opposite phases, it is often technically simpler to apply an rf voltage of amplitude Vrf to one set of electrod-
es and have the other set grounded. In a linear trap where the axial electrodes are long compared to
their radial separation, and in a ring trap where all other grounds are well shielded, this adds only a space-independent oscillating potential, which is of no consequence to the confining pseudopotential. If, however, the axial electrodes of a linear trap are sufficiently short that the end caps cannot be neglected, this adds an axial component to the pseudopotential and lifts the degeneracy of the radial secular motions. Perfectly hyperbolic electrodes are difficult to machine and leave relative-
ly little optical access. Fortunately, close to the rf null, the potential remains essentially harmonic even if the electrodes are deformed significantly from the ideal hyperbolic geometry. In this situation the basic physics of trapping remains unchanged, except that the voltage required to produce a given electric field at the trap center is increased by a geometry-dependent factor of typically around 1–3 (Madsen et al., 2004). It is common to form the electrodes of a ring trap from a simple wir-
e loop with a pair of wires for the end caps (Raab et al., 2000) [Fig. 1(d)]. The design can be deformed further so that the ring electrode is essentially bisected and moved to form a collar around each of the end caps (Schrama et al., 1993) [Fig. 1(e)]. Similarly, the electrodes of a linear trap are often made of simple rods (Nägerl et al., 1998) [Fig. 1(f)] or blades (Schmidt-Kaler et al., 2003). Such ring traps and linear traps are typical designs for ion traps with electrode spacings of ∼1 mm.-
 The goal of building scalable quantum-informationprocessing architectures with trapped ions has triggered substantial efforts in the development of chip-based traps. The trap electrodes can be placed in a single plane (Chiaverini et al., 2005; Seidelin et al., 2006) [Fig. 1(g)]. This creates a pseudopotential minimum above the surface. Such
(a) (b) (c)
(e) (f) (g)
(d)
(h)
FIG. 1 (color online). Various possible trap geometries. (a) The most basic geometry, of which all others are a variation, comprises perfectly hyperbolic electrodes, capable of creating a perfectly quadrupolar field. (b) In generating a three-dimensional structure, a rotationally symmetric geometry can create a pseudopotential which is confining in three dimensions. This is the basic design of a ring trap. (c) Alternatively, a translationally symmetric geometry can create a pseudopotential which i-
s confining in two dimensions. This is the basis of the design for a linear trap, where confinement in the third dimension is provided by the addition of electrodes held at a positive dc voltage. These basic designs can be deformed to depart significantly from the idealized hyperbolae, where (d), (e) are topologically ring traps and (f), (g) are topologically linear traps. (h) The axial electrodes of linear traps can also be segmented to form multiple trapping positions in a single device. See mai-
n text for further discussion.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1423
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 microfabricated planar traps prove useful for creating smaller and more complex structures (Amini et al., 2010; Wright et al., 2013), and the ions are typically held at distances of ∼100 μm from the nearest electrode. The electrodes of a linear trap (either a three-dimensional or a planar trap) can also be segmented (Rowe et al., 2002) as shown in Fig. 1(h). This allows a single trap structure to have multiple potential minima. By application of appropriate (quasi)static voltages ions can be move-
d between different trapping sites. This allows much greater flexibility to control the ions, although brings with it more degrees of freedom which must be controlled when considering heating. Finally, consideration must be given to electrode structures not directly required for trapping. In order to have the lowest possible micromotion the ions should be positioned on the rf null. With a ring trap in which all electrodes are held at dc ground this would occur automatically. Fields from stray char-
ges may, however, displace the ion from the rf null and thereby cause excess micromotion (Berkeland et al., 1998). In a linear-trap configuration the issue is compounded by the necessity of applying nonzero dc voltages: any residual field at the rf null—due to applying incorrect dc voltages—or imperfections in fabrication, can displace the ions and cause excess micromotion. This can be minimized by use of additional compensation electrodes which, for most practical purposes, can be subsequently ig-
nored in analyzing trap behavior. They should not, however, be neglected in the noise analysis of the system.
C. Electric-field-noise-induced heating of ions
Apart from the large electric fields which confine the ion, residual fluctuating electric fields from the environment couple to the motion of the ion and induce transitions between vibrational states. Even when cooled close to the quantum ground state, the corresponding electric transition dipole
moment is dI ≈ ea0, where a0 1⁄4 ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
ħ=ð2mIωtÞ
p ≈ 10 − 50 nm is the extent of the ground-state wave function. This dipole moment makes trapped ions susceptible to very small electricfield fluctuations. Adopting a one-dimensional description of the ion motion along a specific trap axis et, the total Hamiltonian for the ion in the presence of an additional fluctuating potential Φðt; xÞ is
Hˆ ðtÞ 1⁄4 Hˆ tðtÞ þ jejΦðt; rI þ etxˆÞ
1⁄4 Hˆ tðtÞ þ jejΦðt; rIÞ − jejEtxˆ þ       ; ð8Þ
where Et 1⁄4 −et · ∇Φðt; rIÞ is the electric-field component at the position of the ion rI and along the direction et. The global potential offset Φðt; rIÞ does not affect the motion of the ion. Higher-order terms in the expansion of Φ scale with additional powers of a0=d ≪ 1 and can be neglected. By changing into the interaction picture with respect to the bare trapping Hamiltonian Hˆ tðtÞ and using the representation of the position operator given in Eq. (5), the resulting ion-field coupling is
Hˆ ion-fieldðtÞ 1⁄4 −dI1⁄2uðtÞ ˆa† þ u ðtÞ ˆaδEtðtÞ: ð9Þ
In general the fluctuating part of the electric field δEtðtÞ 1⁄4 EtðtÞ − hEti. It is assumed in Eq. (9) that the average stray field has been compensated, so that hEti 1⁄4 0.
1. Heating rate
The quantity generally measured when considering noise in ion traps is the heating rate _ ̄n, where  ̄n 1⁄4 h ˆa† ˆai is the average phonon number. We begin here by considering the special case Γh, which is defined as the rate at which an ion in the motional ground state j0i is excited into the first vibrational state j1i. Using Eq. (9) and Fermi’s golden rule this rate is given by (Wineland, Monroe, Itano, King et al., 1998)
Γh 1⁄4 e2
4mIħωt
∞ X
j1⁄4−∞
jC2jj2SE1⁄2ðb=2 þ jÞΩrf ; ð10Þ
where
SEðωÞ 1⁄4 2
Z∞
−∞
dτhδEtðτÞδEtð0Þie−iωτ ð11Þ
is the single-sided spectral density of the electric-field noise.1 The derivation of this result is detailed in Appendix A. The heating rate in Eq. (10) contains contributions from all orders of the micromotion sidebands. However, the coefficients jC2jj ∼ qj
x ∼ ðωt=ΩrfÞj are usually small. In addition, most (although not all) known noise processes predict a spectrum which decreases at larger frequencies. In the limiting case where micromotion can be neglected, and noting that bΩrf=2 ≃ ωt, the ion’s heating rate then reduces to
Γh ≃ e2
4mIħωt
SEðωtÞ: ð12Þ
This result is most commonly cited in the literature and, unless otherwise stated, Eq. (12) is used to relate the measured heating rate and the electric-field noise throughout this review. If a static offset field Estat displaces the trap minimum from the rf null by an amount Δx 1⁄4 jejEstat=mIωt2, the assumption of negligible micromotion required for the validity of Eq. (12) may no longer hold. The ions displaced position is Δx þ xemmðtÞ þ xˆðtÞ, where xemmðtÞ ≃ Δxqx=2 cosðΩrftÞ for small qx. As -
a coherent and periodic modulation of the mean ion position, excess micromotion does not represent a source of heating per se. However, away from the rf null the electric field from the rf trapping electrodes is nonvanishing, and any noise component δVðtÞ of the trap-drive voltage directly couples to the ion. For example, the voltage VðtÞ 1⁄4 Vrf cosðΩrftÞ þ δVðtÞ applied to opposing rf electrodes pro
duces a fluctuating electric field δEðtÞ 1⁄4 ΔxΦ0r0fδVðtÞ=Vrf in addition to the usual trapping potential. Since δVðtÞ passes through the same filter electronics as the coherent driving
1Throughout we use this convention for the definition of the spectral density of the electric-field noise, which is generally used for reporting electric-field noise densities in ion traps. Most theoretical works use the double-sided spectral density which includes negative frequencies and is defined without the factor of 2.
1424 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 field, its noise spectrum SVðωÞ has a dominant contribution at ω ≈ Ωrf. This noise can directly affect the ion via the higherorder C 2 ≃ qx=4 terms in Eq. (10). In addition, the nonzero gradient of δEðtÞ induces a mixing between xemmðtÞ and ˆxðtÞ, which demodulates the rf noise components. As detailed in Appendix B, for a quadrupole field both mechanisms contribute equally and in phase to the effective fluctuating force seen by the ion and give rise to two additional heating-rate contributions (B-
lakestad et al., 2009):
Γrf; 
h ≃ 4 e2
4mIħωt
 qx 4
 2 ðΦ0r0f Þ2SV ðΩrf   ωtÞðΔxÞ2
V r2f
: ð13Þ
For a quadrupole field, Φ0r0f can be expressed in terms of the characteristic quadrupole distance Dq:
Φ0r0f 1⁄4 Vrf
D2q
: ð14Þ
2. Master equation
While the initial heating rate Γh is most commonly used to measure electric-field noise, a more general description of the ion motion in the presence of fluctuating electric fields is given in terms of the full master equation for the reduced ion density operator ρI. The master equation can be derived under the same conditions as has been assumed for the derivation of the heating rate (see also Appendix A) and can be written in the form (Henkel, Pötting, and Wilkens, 1999)
ρ_I 1⁄4 − iðωt þ δÞ1⁄2 ˆa†aˆ ; ρI
þΓ
2 ðN ̄ þ 1Þð2 ˆaρI ˆa† − ˆa† ˆaρI − ρI ˆa† ˆaÞ
þΓ
2 N ̄ ð2aˆ †ρI ˆa − ˆa ˆa†ρI − ρI ˆaaˆ †Þ: ð15Þ
This equation describes the evolution of a damped harmonic oscillator coupled to an effective bath with mean occupation number N ̄ . The frequency shift δ and the damping rate Γ, are given by
δ 1⁄4 e2
2mIħωt
Im
Z∞
0
dτh1⁄2δ ˆEtðτÞ; δEˆ tð0Þieiωtτ; ð16Þ
Γ 1⁄4 e2
mIħωt
Re
Z∞
0
dτh1⁄2δEˆ tðτÞ; δ ˆEtð0Þieiωtτ: ð17Þ
The total rate,
ΓN ̄ 1⁄4 e2
2mIħωt
Z∞
−∞
dτhδEˆ tðτÞδEˆ tð0Þie−iωtτ; ð18Þ
can be identified with the heating rate Γh. However, in contrast to the result presented in Eq. (12), the ion-field interaction used for the derivation of Eqs. (16)–(18) has been generalized to include quantized electric fields δ ˆEtðtÞ, which do not necessarily commute at different times. The resulting equation of motion for the average vibrational occupation number  ̄nðtÞ 1⁄4 ha†aiðtÞ is given by
_ ̄nðtÞ 1⁄4 −Γ  ̄nðtÞ þ ΓN ̄ ð19Þ
and shows that close to the ground state _ ̄nðtÞ 1⁄4 ΓN ̄ 1⁄4 Γh,
while for long times n ̄ ðtÞ approaches N ̄ . For an equilibrium noise process one obtains N ̄ ≡ Nth, where Nth 1⁄4 1=ðeħωt=kBT − 1Þ is the thermal equilibrium occupation number for a given bath temperature T. Typical trapping conditions of ωt 1⁄4 2π × 1 MHz and T 1⁄4 4 − 300 K correspond to Nth ≈ 105 − 107. Consequently,
only the combined rate ΓN ̄ ≡ Γh is usually accessible in experiments. However, should traps be operated at millikelvin temperatures it may be possible to measure Γ and N ̄ independently.
3. Heating of multiple ions
The analysis given in Secs. II.C.1 and II.C.2 for a single trapped ion can be generalized to multi-ion Coulomb crystals, assuming that the ions are sufficiently cold and can be modeled as a set of coupled harmonic modes (Morigi and Walther, 2001; Home, 2013). In this case the coupling of NI ions to the electric field is
Hˆ ion fieldðtÞ 1⁄4 −jej N XI
i1⁄41
δEðt; rI;iÞ · xˆiðtÞ; ð20Þ
where ˆxi is the position operator for an ion localized around its equilibrium position rI;i. Using a normal-mode decomposition
xˆ iðtÞ 1⁄4 3NXI−1
k1⁄40
ffiffiffiffiffiffiffiffiffiffiffiffiffi ħ 2mIωk
s
ckðiÞð ˆake−iωkt þ ˆa†
keþiωktÞ; ð21Þ
where ˆak ( ˆa†
k) is the annihilation (creation) operator for the kth phonon mode with frequency ωk and mode function ckðiÞ,
normalized to PNI
i1⁄41 ckðiÞ · ck0 ðiÞ 1⁄4 δk;k0 . As a result the mode expansion of the electric-field coupling in the interaction picture is
Hˆ ion-fieldðtÞ 1⁄4 − 3NXI−1
k1⁄40
dkðaˆ ke−iωkt þ aˆ †
keiωktÞδEkðtÞ; ð22Þ
where dk 1⁄4 jej ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
ħ=ð2mIωkÞ
p is the dipole moment of the kth
motional mode. δEkðtÞ 1⁄4 P
iδEi
kðtÞ is the projection of the electric-field noise onto the kth motional mode, where δEi
kðtÞ 1⁄4 δEðt; rI;iÞ · ckðiÞ. In analogy to the single-mode case
one can define a heating rate ΓðkÞ
h for each mode,
ΓðkÞ
h 1⁄4 e2
4mIħωk
SðkÞ
E ðωkÞ; ð23Þ
where
SðkÞ
E ðωÞ 1⁄4 2X
i;j
Z∞
−∞
dτhδEi
kðτÞδEj
kð0Þie−iωτ: ð24Þ
The heating rate of the individual modes depends on the correlation of the field noise at positions rI;i and rI;j. In the
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1425
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 limit of perfectly spatially correlated noise the c.m. mode
of a linear ion string with frequency ωc.m. 1⁄4 ωt and cc.m. 1⁄4
et= ffiffiNffiffiIffi
p the heating rate is Γðc.m.Þ
h 1⁄4 NIΓh, while ΓðkÞ
h ≈ 0 for all the other modes. In the opposite limit of completely
uncorrelated noise, the heating rates ΓðkÞ
h ≃ ðωt=ωkÞΓh depend only on the mode frequency.
4. Heating rates and decoherence
In applications of trapped ions for quantum information processing the vibrational state jni of a single vibrational mode can be used as a quantum bus to communicate between qubits encoded in the internal states of two ions in a onedimensional crystal (Cirac and Zoller, 1995; Sørensen and Mølmer, 1999). For such applications it is not only the heating of the ions which is important, but also the loss of coherence of a motional superposition state. To identify the relationship between heating and d-
ecoherence, one can study the evolution of a motional state initially prepared in a superposition
ρIðt 1⁄4 0Þ 1⁄4 ρ0 1⁄4 jψ0ihψ0j, where jψ 0i 1⁄4 ðjn0i þ jm0iÞ=pffi2ffiffi and m0 ≠ n0. In the presence of electric-field noise, i.e., under the evolution of the master equation (15), the coherence of this superposition ρcohðtÞ 1⁄4 jhn0jρIðtÞjm0ij degrades (for short times) as
ρ_cohðtÞ ≃ − Γ
2 1⁄2ð2N ̄ þ 1Þðn0 þ m0Þ þ 2N ̄ ρcohð0Þ: ð25Þ
That the overall scale of the motional decoherence rate is therefore set by Γh but, as usually observed in quantum mechanics, large superposition states (here meaning n0; m0 ≫ 1) decohere faster.
D. Noise sensing with heating-rate measurements
The direct relation between the ion-heating rate Γh and the spectral density of electric-field noise SE established in Eq. (12) allows SE to be inferred by measuring the heating rate of a laser-cooled ion. In general this is done by measuring the phonon number of the ion at different times and calculating from this the rate of change of the phonon number _ ̄n. As detailed in Sec. III, this has been used to infer values of the electric-field noise ranging over 9 orders of magnitude, from 10−15 to 1-
0−6 V2=m2 Hz. These were measured at frequencies in the range 0.1 MHz ≲ ωt=2π ≲ 20 MHz, and at distances from the electrodes of 30 μm < d < 3500 μm. Measurements have also been made with the electrodes held at temperatures in the range 4 K ≲ T ≲ 400 K. There are various techniques for measuring heating rates which differ in experimental complexity and their suitability for measuring in particular heating-rate regimes.
1. Sideband spectroscopy
One set of methods for measuring the heating rate relies on sideband-resolved cooling and manipulation techniques in the Lamb-Dicke regime (Leibfried et al., 2003). Sidebandresolved methods require the ion’s motional frequency to be greater than the linewidth of the transition between two internal atomic states, jgi and jei, being probed. Given
∼MHz trap frequencies, this is not generally possible on dipole-allowed transitions [although cf. Jefferts et al. (1995)]. Instead, either quadrupole (Diedrich et al., 1989) or Raman (Monroe et al., 1995) transitions are generally used. In the Lamb-Dicke regime the atomic wave packet is confined to a region much smaller than the wavelength of the transition being addressed. The Lamb-Dicke parameter η is defined equivalently as
η 1⁄4 kxa0 1⁄4
ffiffiffiffiffiffiffiffiffiffiffiffi ħkx2 2mIωt
s
1⁄4
ffiffiffiffiffiffiffiffi
ωrec
ωt
r
; ð26Þ
where kx is the projection of the incident light’s wave vector into the x direction and ωrec is the recoil frequency of the ion. In the Lamb-Dicke regime, defined as η2ð2  ̄n þ 1Þ ≪ 1, the coupling between internal and vibrational states of the ion is weak and the dominant contributions are phonon-assisted transitions jgijni↔jeijn   1i, which either add or subtract a single vibrational quantum. As illustrated in Fig. 2(a) the ion can be driven on either the red- or blue-detuned sidebands by approp-
riately choosing the laser frequency. From the excited state the ion predominantly decays on the carrier transition (i.e., without changing the motional state). The Rabi frequencies for these transitions depend explicitly on the vibrational state jni. For the red and blue sidebands they are, respectively,
given by Ωn;n−1 1⁄4 ηpffinffiffiΩL and Ωn;nþ1 1⁄4 η ffiffiffiffiffiffiffiffiffiffiffi
nþ1
p ΩL, where ΩL denotes the bare Rabi frequency of the atomic transition driven by the incident light, neglecting the effect of the motion. When driving Rabi flops on these transitions the excitation probability after driving red or blue sidebands for a time t is (Leibfried et al., 2003)
pRSB
jei ðtÞ 1⁄4 1
2
 
1 − ∞ X
n1⁄40
Pn cosðΩn;n−1tÞ
 
; ð27Þ
pBSB
jei ðtÞ 1⁄4 1
2
 
1 − ∞ X
n1⁄40
Pn cosðΩn;nþ1tÞ
 
; ð28Þ
where Pn is the population of the motional state jni at time t 1⁄4 0. Example data are given in Fig. 2(b). From this signal the Pn can be extracted from a Fourier transform of pjeiðtÞ (Meekhof et al., 1996) as illustrated in Fig. 2(c). The Fourier analysis additionally provides frequency information. However, since the frequencies of the Jaynes-Cummings ladder are generally known, this information can be used to infer the populations by simply fitting a sum of the known frequency components. Both -
of these methods (Fourier transform and fitting of known frequencies) are able to infer the values of Pn and consequently do not need to assume that the states are thermal. By repeating the measurement of Pn for different waiting times tw after ground-state cooling, the
heating rates Γh and _ ̄n can be found. This method works well for  ̄n ≲ 2 and low heating rates of up to about _ ̄n ∼ 100 s−1.
If it is sufficient to measure only  ̄n, rather than Pn, and assuming that the distribution of n is approximately thermal, a similar method, which requires less data taking, uses the
1426 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 asymmetry between red and blue sidebands (Monroe et al., 1995). This is illustrated in Fig. 2(d). Taking the ratio of the excitation probabilities on the red and blue sidebands [Eqs. (27) and (28)], the mean phonon number is given by
pRSB
jei =pBSB
jei 1⁄4 n ̄ =ð1 þ  ̄nÞ. This ratio (and so the inferred
phonon number) is independent of the exciting pulse length and of the Rabi frequency. The greatest signal to noise, however, is achieved for pulse lengths which correspond to the first maximum of the Rabi oscillations on the blue-sideband transition. By repeating this measurement for different values of tw the heating rate _ ̄n can be inferred. Again, this method works well for n ̄ ≲ 2 and low heating rates of up to about n_ ̄ ∼ 100 s−1. Because it assumes a thermal distribution of n, this sideban-
d comparison method can give incorrect results when the ions are not, or not always, in thermal states. Such nonthermal states can occur if the ion is coherently excited, such as occurs with update noise from digital-to-analog converter (DAC)
cards (Blakestad, 2010). Alternatively, the ions may sometimes be excited to nonthermal states by collisions with background-gas atoms. When a collision occurs the ion gains a significant amount of kinetic energy, so that the red and blue sidebands are approximately the same heights. Such events may not be immediately obvious as they are averaged with many collision-free events. However, for collision rates of a few per second or greater, this can nonetheless lead to a significantly higher apparen-
t heating rate than would be measured without the collisions (Chiaverini and Sage, 2014). For higher phonon numbers and higher heating rates higher-order sidebands can be compared. Generalizing to the kth-order red and blue sidebands, the ratio of the corresponding excitation probabilities pRSBk
jei and pBSBk
jei is
pRSBk
jei pBSBk
jei
1⁄4
  n ̄ 1 þ  ̄n
 k
: ð29Þ
This method is most sensitive for the sideband order k nearest to the value of  ̄n (Turchette et al., 2000). As the sidebands of the different motional modes are generally well resolved from each other, all of these sideband-spectroscopic methods allow independent measurement of the heating rates on different modes. The methods have the drawback, however, that they require access to the resolved-sideband and Lamb-Dicke regimes. This requires a narrow-linewidth laser and ground-state cooling. A rel-
ated method can be used in a regime with larger LambDicke parameters or higher phonon numbers η2  ̄n > 1. In this situation, increasing numbers of phonon sidebands contribute to the ion-laser interaction, leading to a corresponding suppression of the oscillator strength for the carrier transition. The reduced Rabi frequency for the carrier is
Ωc 1⁄4 ΩL
∞ X
n1⁄40
Pnhnjeiηðaˆþaˆ†Þjni 1⁄4 ΩLe−η2ðn ̄þ1=2Þ; ð30Þ
where for the second equality a thermal phonon distribution has been assumed. This can then be used to infer a value of  ̄n and thereby n_ ̄ (Rowe et al., 2002).
2. Doppler recooling
Another method for heating-rate measurements uses Doppler recooling in the weak-binding regime (i.e., in a regime where the motional sidebands are not resolved) (Epstein et al., 2007; Wesenberg et al., 2007). In the first step the ion is cooled. It is not, however, necessary that the ion be cooled to the motional ground state or even to the Dopplercooling limit. The cooling laser is turned off and, after a waiting period of duration tw during which the ion can heat up, the ion is Doppler cooled ag-
ain using a near-resonant beam. Evaluation of the heating rate is based on the fact that hot ions, being Doppler shifted farther from resonance with the cooling laser, scatter less light than cold ions. At the end of the waiting time, the hot ion initially scatters fewer cooling photons, but scatters progressively more as it is cooled, until the Dopplerlimited temperature is reached. During this recooling process the time-resolved fluorescence of the ion is recorded. From
|n-1
|n
|n+1
n0
n 10
(a)
(b)
(d)
Excitation
probability
1
0.5
0 0 50 100 150 200 250 300 350 Time, t (μs)
Phonon
pop., Pn
1
0.5
0
Phonon number, n
tw = 3 ms n = 0.66(3)
0 1234567
Detuning (MHz)
Excitation
probability
3.90
3.88 3.92
0.0
0.2
0.4
0.6
-3.90 -3.88
-3.92
(c)
e
g
L
L
Energy
FIG. 2 (color online). Heating-rate measurements by sidebandresolved methods. (a) Excitations of the ion to states with different phonon numbers have phonon-number-dependent coupling strengths. In the Lamb-Dicke limit, transitions of jΔnj > 1 can be neglected. (b) Rabi flops driven on the red sideband (open circles) and blue sideband (filled circles). The solid lines are fits to the data from Eqs. (27) and (28). (c) From these fits the populations Pn can be calculated. (d) Rather than driving Rabi-
 flops, the mean phonon number  ̄n can be calculated from the relative heights of the red and blue sidebands. (b), (c) Adapted from Harlander, 2012. (d) Adapted from Brownnutt, 2007.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1427
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 this, the mean phonon number of the ion before recooling  ̄nðtwÞ can be inferred. By repeating the measurement for
different waiting times tw, the heating rate _ ̄n can be found. This method has several distinct advantages over sidebandresolved methods: it works well at much larger phonon numbers, around  ̄n ∼ 104; it does not require ground-state cooling; and it does not require narrow-linewidth lasers. However, it also suffers a number of limitations: The waiting times required to measure low heating rates can become very long. It cannot provide information about the populations, only about the average phono-
n number, although this is normally not a problem as, to a good approximation, the states are thermal. More significantly, as the method is unable to resolve the separate motional sidebands, it is difficult to obtain information regarding the heating rates of different motional modes. For a single ion, information about the individual motional modes can be gained by aligning the cooling laser along the relevant principal motional axis, so that only that mode scatters photons. Failing this, the hea-
ting rate for a particular mode must be estimated by making certain assumptions about the way different modes might be heated. One option is to assume that one mode is heated predominantly and that only that one mode contributes to the change in fluorescence. In many experiments using linear ion traps the axial mode has a much lower frequency than the radial modes, and usually the noise spectrum is such that low-frequency modes are heated faster than high-frequency modes (see Sec. III.A). Under th-
ese conditions, neglecting heating of radial modes is a reasonable starting point, although it would be expected to slightly overestimate the heating rate (Wesenberg et al., 2007). At the opposite extreme, one may assume that all modes are heated equally. Simulations using some typical trap parameters have seen that this can give a result smaller by about a factor of 2 (Wesenberg et al., 2007). While there is not a consistent usage of a particular set of assumptions across the literature [cf., e.g-
., Daniilidis et al. (2011) and Allcock et al. (2012)], those using this method generally state what assumption they have made regarding this issue.
3. Other methods
Sideband spectroscopy and Doppler recooling are the most common methods for measuring heating rates, although not the only ones. Tamm, Engelke, and Bühner (2000) compared the linewidth broadening of the secularmotional sidebands relative to the carrier resonance. In their case, however, the heating rate was below the sensitivity of the method and thus only an upper bound to the heating could be inferred. Similar problems are encountered with simple ion-loss measurements (Splatt et al., 2009), wher-
e the heating rate is estimated from the ion-loss rate in a shallow trap. This method works for high temperatures and large heating rates. However, away from the trap center the harmonic-potential approximation, as well as the neglected influence of micromotion assumed in Eq. (12), is no longer justified. Consequently the relationship between the heating rate and SE can be difficult to determine. Using a phase Fresnel lens with a working distance of only 3 mm, Norton et al. (2011) were able to ima-
ge a trapped ion
with a resolution of ∼400 nm. They could then use the spatial extent of the ion’s position to estimate its temperature over the range 20 ≲  ̄n ≲ 105. A similar scheme was used by Knünz et al. (2012) using standard optics. This provided lower spatial resolution, but was still effective for low trap frequencies (tens of kHz). Such spatial thermometry has not yet been used to measure heating rates, although it may be a useful technique in certain regimes. Interference effects from light scattered by -
trapped ions can also be used to infer the ion temperature. This was first demonstrated by Eichmann et al. (1993), using the fringe patterns of light emitted from a two-ion crystal to infer a temperature of 2.5 mK, equivalent to  ̄n ∼ 50. Using a single ion, it is possible to create an interferometer by retroreflecting light scattered by the ion so that the reflected light interferes with directly scattered light from the ion. As the length of the interferometer arm is varied any motion of the ion-
 will reduce the visibility of the fringes. Slodićka et al. (2012) used this effect to measure ion phonon numbers in the range 1 < n ̄ < 40. Such methods are, however, rather involved and have not yet been used to measure heating rates.
E. Limits to measurement sensitivity
Given enough experimental time, measuring the heating rate of a trapped ion provides a sensitive way to measure the absolute electric-field noise strength at the location of the ion. For typical parameters, a heating rate of Γh 1⁄4 1 s−1 corresponds to an electric-field noise sensitivity of SE ≈ 10−14 V2=m2 Hz, and the detection of lower heating rates leads to a correspondingly greater sensitivity. In practice, a limit on the sensitivity can arise from other sources of heating, which are discussed-
 in detail by Wineland, Monroe, Itano, Leibfried et al. (1998) and outlined briefly here. The ion can be heated by collisions with background-gas atoms. At the typical pressures used in ion-trap experiments (∼10−11 mbar) and for single ions these can be expected to occur every few minutes, sufficiently infrequently that they can be neglected as a heating mechanism at the levels of heating currently observed. The effects of such collisions are even less concerning in cryogenic experiments which are-
 typically carried out at ∼4 K: while the heating rates from fluctuating fields are generally lower in such systems, the expected background pressures of ∼10−17 mbar (Antohi et al., 2009) rule out any significant effect from background collisions. One caveat to this is that the local pressure near the trap may be significantly higher than the measured background pressure in the chamber (Chiaverini and Sage, 2014). This is because the trap itself is a source of particles. These may desorb naturally-
 from the trap surface or be emitted when photoelectrons, initially ejected by scattered laser light, are accelerated by the rf fields and impact on the trap electrodes. The motional mode of interest can be heated by spectator modes. In an ideal harmonic potential the three modes of motion for a single ion are decoupled. However, in any real trap, higher-order terms in the trapping potential can couple these motions. If the spectator modes are not initially cold,
1428 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 they can heat the mode of interest. In most experiments, however, close to the motional ground state the traps can be considered harmonic to a good approximation, and ωx, ωy, and ωz are generally chosen to be separated so that parametric interconversion is negligible (Wineland, Monroe, Itano, Leibfried et al., 1998). A further issue arises with multiple ions in a single trap. The number of spectator modes increases with the number of ions in the crystal NI, scaling as 3NI − 1. This increases the -
possibility that one of the modes is not perfectly cooled and can couple to the mode of interest. This is all the more significant as radial modes in a chain can couple to the axial motion even in a perfectly harmonic trap. Nonetheless, most experiments select mode spacings such that this is not a problem. Most importantly for the purposes of this paper, almost all heating-rate measurements discussed here were taken with single ions. Finally, when dealing with multiple ions in the presence of an r-
f confining potential, effective collisions between the trapped ions are not conservative (as they would be for a static trap), but rather take energy from the rf field. This leads to rf heating (Ryjkov, Zhao, and Schuessler, 2005). The effect of such micromotion-interruption heating is most pronounced when the ions form a cloud, rather than a crystal. However, even for 14 ions in a linear crystal, under normal conditions, it is estimated that this mechanism could lead to sufficient heating to mel-
t the crystal after ∼15 minutes without cooling (Chen et al., 2013). In summary, the measurement of electric-field fluctuations in ion traps is usually based on a number of assumptions. First, it is assumed that the additional heating mechanisms listed in this section can be neglected. Second, it is assumed that heating from coupling to the micromotion sidebands can be neglected. Finally, it is assumed that the ion is initially sufficiently cold, implying that _ ̄n ≈ Γh and also that anharmonic te-
rms in the trapping potential or the Coulomb interaction can be ignored. Given these conditions, it is straightforward to convert between the heating rate _ ̄n and the spectral density of electric-field noise SE, using the relationship in Eq. (12). Note that the ωt term in the denominator of Eq. (12) means that the frequency exponents of _ ̄n and of SE differ by 1. Being able to measure noise in this way, the main limitation for ions as electric-field sensors comes simply from the fact that the io-
n measures only the total field noise (at the trap frequency) and cannot directly distinguish between noise from different sources. The interpretive step consists of measuring how the noise scales under different conditions, how it varies from day to day, or how it can be suppressed or exacerbated. Various models of possible heating mechanisms can then be compared to the observations and an attempt made to unpick which noise sources are likely to have been observed in any given experiment. This re-
view follows such a line: It considers in Sec. III the total levels of noise observed and how they change under various conditions. Sections IV and Voutline various models of heating mechanisms and what noise characteristics they predict. Section VI then attempts to interpret the experimental results by seeing which, if any, of the models considered describe the observed behavior.
III. EXPERIMENTAL OVERVIEW
The electric-field noise varies with a range of physical parameters. Some of these lend themselves relatively easily to quantitative consideration. A systematic investigation of the observed variations of the noise over a large range of these parameters could provide a promising method for identifying the dominant or limiting noise sources in trapped-ion systems. To this end, experimental data are often analyzed using the ansatz2
SE ∝ ω−αd−βTþγ: ð31Þ
While helpful, there is no a priori reason for this ansatz to hold. Moreover, even in systems exhibiting such power-law behavior, it is not necessarily that the behavior should be consistent over the entire accessible parameter space. Indeed, several models predict non-power-law behaviors and, in general, α, β, and γ must be interpreted as “local” scaling coefficients, which may themselves depend on the frequency, distance, and temperature regime under consideration. Given the variety of behaviors-
 which may be expected, the characterization of the noise scaling with respect to these basic parameters can already provide significant information about the source of the noise. That being noted, such diversity has the potential to make the picture rather complicated. The various scaling predictions of different theories are given in Secs. IV and V. At this point, however, we consider the scalings observed in experiments, unencumbered by theoretical models.
A. Frequency scaling
Many sources of noise are expected to follow a power-law scaling and give rise to 1=f noise. Strictly speaking, this would mean that SE ∝ ω−α, where α 1⁄4 1. However, “1=f noise” is something of a flexible term and is often used for any scalings in the range 0.9 ≲ α ≲ 1.4 (Dutta and Horn, 1981). Even allowing for flexible terminology, there are several possible noise sources which exhibit scalings significantly different to 1=f, and still others for which the spectrum does not even follow a power -
law. By measuring the ion-heating rate for different motional frequencies it is possible to see whether, for a particular experiment and over a particular frequency range, the noise does indeed follow a power law and, if so, what the scaling exponent α is in that particular instance. Given the fact that different noise mechanisms can give rise to various values of α (as discussed in Secs. IV and V) such measurements are of interest because the determination of α provides information about the poss-
ible mechanisms underlying the noise. During these discussions it should be kept in mind that α is the frequency-scaling exponent of SE; the ωt term in the denominator of Eq. (12) means that the heating rate then scales as n_ ̄ ∝ ω−ðαþ1Þ.
2While α, β, and γ are standardly used to denote the scaling exponents, there is currently no standardized convention in the literature regarding which of these letters represents the exponent for which variable. For clarity, the convention stated here will be used throughout this review, and results from publications using different conventions will be “translated” without further comment.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1429
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 1. Frequency scaling at room temperature
Many experiments have deduced a value of α for the electric-field noise they observe at room temperature, and these are shown in Fig. 3. It is clear from Fig. 3 that there is not an overall frequency-scaling law which holds for all systems. We now consider several specific cases for which power-law scaling behavior has been observed, and for which the measurements provide a relatively tightly constrained value of α for a particular experiment. Data points [39] (Allcock et al., 2011) and [40] (Allc-
ock et al., 2012) shown in Fig. 3 were measured in a single trap at Oxford University.3 The Doppler recooling method used for the heating-rate measurement (Allcock et al., 2010) cannot
distinguish between signals arising from heating of different modes. However, as ωax ≪ ωr (by at least a factor of 3.5) it was assumed that any heating of the radial modes could be neglected. The trap was a linear SiO2-on-Si surface trap with aluminum electrodes, in which the ion was 84 μm above the plane of the trap surface (98 μm from the nearest electrode). The electrodes were 2.4 μm thick, with a 2–3 nm native oxide and 8 nm rms (root-mean-square) roughness. Any exposed surfaces on the silicon-
 substrate were coated with 114 nm of gold. Any bare surfaces of the silica supporting the electrodes were recessed well below the electrode plane. Points [40] and [39] were measured before and after laser cleaning, respectively. Prior to cleaning the noise scaling was consistent with a 1=f source [α 1⁄4 0.93ð6Þ]. Following laser cleaning the scaling had changed to α 1⁄4 0.57ð3Þ. These results are discussed further in Sec. VI.F. Data points [7]g and [46]a,b were measured in different traps at the -
National Institute of Standards and Technology (NIST). Point [7]g (Turchette et al., 2000) shows the scaling for the axial component of the electric-field noise in a linear, three-dimensional, gold-on-alumina trap. The ion was 365 μm from the nearest electrodes, which were made of 0.75 μm of evaporated gold. The value of α 1⁄4 1.43ð1Þ is significantly different from 1, although consistent with 1.5. Points [46]a,b (Hite et al., 2012) show the scaling for the axial component of the electric-field no-
ise in a surface trap made of gold on crystalline quartz. The ion was 40 μm above the electrodes, which were made of 10 μm of electroplated gold. Point [46]a was measured in a trap for which the surface of the gold electrodes had been exposed to air. Point [46]b was measured in the same trap after it had been cleaned in vacuo by an argon-ion beam. The freshly revealed surface of the electrodes had therefore never been exposed to air. While the absolute value of the heating rate subsequent to clean-
ing was lower by 2 orders of magnitude, the frequency scaling of the electric-field noise did not change significantly between these two experiments; both exhibit α ≈ 1.5. This scaling is consistent with that seen in the other NIST trap considered above (point [7]g). These results are discussed further in Sec. VI.G. Data points [57]a,b were measured in a single trap at the University of California, Berkeley (Daniilidis et al., 2014). They show the scaling for the axial component of the electricfie-
ld noise in a linear surface trap. The ion was 100 μm above the electrodes, which were made of copper and aluminum on a fused-quartz substrate. Point [57]a was measured in a trap for which the copper surface of the electrodes had been exposed to air. The measured frequency scaling was α 1⁄4 1.27ð23Þ. Point [57]b was measured in the same trap after it had been cleaned in vacuo by an argon-ion beam. The freshly revealed surface of the electrodes had therefore never been exposed to air. Similar to th-
e work of Hite et al. (2012), the absolute value of the heating rate was reduced by about 2 orders of magnitude. The frequency scaling was measured to be α 1⁄4 0.95ð28Þ, not significantly different from the precleaning value. This work additionally indicates the presence of a broad resonance peak centered at around 800 kHz, which was visible following cleaning. These results are discussed further in Sec. VI.G. Data points [42]a,b were measured in a single trap at the University of Innsbruck (Harla-
nder, 2012) and show the
[18]
0.1 1 3 10 30
Frequency exponent,
0
0.3
3
2
1
Frequency, (MHz)
-1
7
6
5
4
[46]a
[16]a
[46]b
[7]f
[7]h
[7]i
[32]
[7]c
[7]e
[47]
[7]g
[42]b
[42]a
[40]
[57]a
-2
[64]
[39]
[57]b
[12]b
FIG. 3 (color online). Frequency exponent α as a function of the ion motional frequency ωt in room-temperature traps. The lateral extent of the bars gives the frequency range over which the noise was measured. The vertical extent of the bars indicates the uncertainty in α. Data are taken from the relevant references in Table I. For points marked with †, the uncertainty in α was not stated in the original paper and has been estimated from the published data. For points marked with  , neither the va-
lue of α nor its uncertainty were stated in the original paper, and they have been estimated from the published data. For experiments in which resonance peaks were observed [points [47] Poulsen, Miroshnychenko, and Drewsen (2012) and [57]b Daniilidis et al. (2014)] the regions over which the resonances occurred are indicated by a dotted line. Selected data are discussed in detail in the text and are highlighted here.
3The references from which all experimental data points in this review were taken are summarized in Table I.
1430 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 scaling for the axial component of the electric-field noise in a linear, three-dimensional, gold-on-alumina trap. The ion was 257 μm from the nearest electrodes, which were made of 10 − 15 μm of electroplated gold. Data point [42]a was measured when the dc lines to the trap were low-pass filtered using an RC filter with a cutoff frequency of 1 MHz, and the noise exhibited a frequency-scaling exponent of α 1⁄4 2.3ð2Þ. For point [42]b, an RC filter with a lower cutoff frequency of 370 kHz was used.-
 In this configuration the frequency-scaling exponent was measured to be α 1⁄4 2.7ð3Þ. The frequency scaling of the noise in both configurations implies that the mechanisms for the dominant sources of heating in these instances do not display a 1=f spectrum. These results are discussed further in Sec. VI.D. Data point [47] was measured at Aarhus University (Poulsen, Miroshnychenko, and Drewsen, 2012) and shows the axial component of the electric-field noise in a linear trap. The trap was made of s-
tainless-steel rods which were at a distance of 3500 μm from the ion and plated with 5 μm of gold. The heating rate was observed to be independent of the trap frequency, except for a narrow resonance at ω 1⁄4 295 kHz. The resonance was found to be caused by a switch-mode power supply in a neighboring experiment. The remaining noise would require a source for which SE ∝ f, which is significantly different from the oft-assumed 1=f spectrum. These results are discussed further in Sec. VII.C. Data poi-
nts [7]c,h were measured in a single trap at NIST (Turchette et al., 2000). They show the scaling for the radial component of the electric-field noise in a molybdenum ring trap. The ion was 125 μm away from the nearest electrode, which was a fork-shaped end cap. The trap initially had a frequency scaling of α 1⁄4 0ð2Þ, shown as point [7]c. The trap was removed from vacuum and cleaned with HCl to remove the Be coating deposited by the atomic source. It was then
electropolished in phosphoric acid and rinsed in distilled water followed by methanol. Following cleaning, the electric-field noise was significantly reduced (over the frequency range measured) and the frequency scaling had changed to α 1⁄4 6.0ð2Þ (point [7]h). This is significantly different from 1=f. These results are discussed further in Sec. VII.D. Finally, data point [7]i was measured in a ring trap at NIST (Turchette et al., 2000) in which the ion was 280 μm away from the nearest electrode, -
which was a fork-shaped end cap. The trap was made in the same piece of metal as trap [7]h and separated from it by 1.7 mm. The traps had therefore undergone exactly the same treatment and handling. Point [7]i in Fig. 3 shows the scaling for the radial component of the electric-field noise after the trap had been cleaned. The trap initially had a heating rate that was relatively “typical” (see point [7]d in Fig. 8), although the frequency scaling was not measured. Following the same cleaning proce-
dure already described for trap [7]h, the electric-field noise was significantly reduced (over the frequency range measured). The measured frequencyscaling exponent after cleaning was α 1⁄4 4.0ð8Þ. This is significantly different from 1=f. These results are discussed further in Sec. VII.D. While each of these cases is discussed in more detail in Secs. VI and VII it suffices at this point to note that it is simply not possible to assume a single universal scaling behavior which holds for all traps.-
 Some experimental results tightly constrain α and support a value of α 1⁄4 1; other experiments have scalings markedly different from α 1⁄4 1. Heating-rate reductions following cleaning are accompanied in some experiments by a change in α, while in others they are not. This lack of a universal frequency-scaling behavior implies that the higher-than-expected level of heating observed in iontrap experiments does not necessarily come from one single,
TABLE I. List of references for trapped-ion heating-rate measurements. The figures and text of this paper denote the traps using the reference numbers here. Where a single publication reports heating rates for several traps, or for one trap under markedly different conditions, these different results are labeled with a letter following the reference number.
[1] Diedrich et al. (1989) [23] Britton (2008) [45] Wilpers et al. (2012) [2] Monroe et al. (1995) [24] Poschinger et al. (2009) [46] Hite et al. (2012) [3] King et al. (1998) [25] Blakestad et al. (2009) [47] Poulsen, Miroshnychenko, and Drewsen (2012) [4] Roos et al. (1999) [26] Britton et al. (2009) [48] Brama et al. (2012) [5] Myatt et al. (2000) [27] Leibrandt et al. (2009) [49] Steiner et al. (2013) [6] Tamm, Engelke, and Bühner (2000) [28] Amini et al. (2010) [50] Allcock et al. (2013) [7] -
Turchette et al. (2000) [29] Allcock et al. (2010) [51] Warring et al. (2013) [8] Schmidt-Kaler et al. (2000) [30] Wang, Labaziewicz et al. (2010) [52] Vittorini et al. (2013) [9] Rohde et al. (2001) [31] Wang, Ge et al. (2010) [53] Arrington et al. (2013) [10] Rowe et al. (2002) [32] McLoughlin et al. (2011) [54] Mount et al. (2013) [11] DeVoe and Kurtsiefer (2002) [33] Daniilidis et al. (2011) [55] Hite et al. (2013) [12] Deslauriers et al. (2004) [34] Brown, Ospelkaus et al. (2011) [56] Chiaver-
ini and Sage (2014) [13] Home (2006) [35] Harlander et al. (2011) [57] Daniilidis et al. (2014) [14] Stick et al. (2006) [36] Ospelkaus et al. (2011) [58] Niedermayr et al. (2014) [15] Seidelin et al. (2006) [37] Herskind et al. (2011) [59] Kumph et al. (2014) [16] Deslauriers, Olmschenk et al. (2006) [38] Blakestad et al. (2011) [60] McKay et al. (2014) [17] Letchumanan et al. (2007) [39] Allcock et al. (2011) [61] Mehta et al. (2014) [18] Epstein et al. (2007) [40] Allcock et al. (2012) [62] Goo-
dwin et al. (2014) [19] Labaziewicz, Ge, Antohi et al. (2008) [41] Akerman et al. (2012) [63] Guise et al. (2015) [20] Schulz et al. (2008) [42] Harlander (2012) [64] Bruzewicz, Sage, and Chiaverini (2015) [21] Benhelm et al. (2008) [43] Wang (2012) [65] Weidt et al. (2015) [22] Labaziewicz, Ge, Leibrandt et al. (2008) [44] Doret et al. (2012) [66] McConnell et al. (2015)
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1431
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 universal effect, but rather has multiple sources, which may be different for different experiments.
2. Frequency scaling at cryogenic temperatures
It has been suggested (Labaziewicz, Ge, Leibrandt et al., 2008) that, in cases where the source of electric-field noise for ion traps is due to thermally activated processes, one could expect such sources to freeze out at low temperatures, leading to a temperature-dependent value of α. Labaziewicz et al. measured the value of α as a function of trap temperature for the lowest-frequency motional mode in a linear surface trap (trap [22]c-i). The ion was 75 μm above the electrodes, which were made of-
 gold on a crystal-quartz substrate. The results are shown in Fig. 4. These results suggest that in this experiment there may be some variation of the frequency scaling with temperature. The theory underlying possible temperaturedependent changes in α is outlined in Sec. V.B.5, and the experiment is discussed further in Sec. VII.A. Recently, Bruzewicz, Sage, and Chiaverini (2015) measured α as a function of temperature in niobium traps over a frequency range 0.6 MHz < ω=2π < 1.5 MHz, and a tempera-
ture range 4 K < T < 295 K. In these experiments the frequency-scaling exponent of α 1⁄4 0.6ð1Þ was found to be independent of ω and T over the entire parameter range measured.
B. Distance scaling
It is intuitively reasonable that the closer an ion is held to a source of electric-field noise, the more perturbed it would be by that source. By measuring the ion-heating rate for different trap sizes it should be possible to see how the heating rate scales with the distance from the electrodes and, potentially, to infer a scaling exponent β. As different noise mechanisms can give rise to various values of β (as discussed in Secs. IV and V) such measurements are of interest because the determina-
tion of β provides information about the possible mechanisms underlying the noise. This may at first seem similar to the procedure used in Sec. III.A to measure α. However, while it is
relatively simple to vary the trap frequency and leave all else unchanged, varying the trap size in a controlled way is more difficult. This section reviews some experiments which have varied the trap size while minimizing other uncontrolled differences in the setup. It also reviews what can and cannot be learned from a compilation of heating-rate data from many different experiments. The distance scaling of noise in ion traps was first discussed by Turchette et al. (2000). They considered nine tr-
aps in total (six ring traps and three linear traps) ranging in size from d 1⁄4 170 to 600 μm. For a controlled investigation of distance scaling they fabricated a pair of ring traps for which the rf electrodes of both traps were fabricated in a single piece molybdenum material. The traps’ end caps were made using a second, shared, piece of molybdenum. The two traps could be operated simultaneously, driven by the same electronics, and held in a single vacuum apparatus. They had ion-electrode separ-
ations of 125 and 280 μm, respectively. (The initial results from these traps are referred to as points [7]c,d in this review.) The heating-rate results obtained by Turchette et al. for 9Beþ ions in these two traps are shown in Fig. 5. The traps were not operated at the same frequency but, assuming α 1⁄4 0, Turchette et al. extrapolated the heating rate to deduce a distance scaling of β 1⁄4 3.8ð6Þ. The value of α 1⁄4 0 was taken from measurements made in trap [7]c, and it seems reasonable that tra-
p [7]d—being fabricated in the same piece of metal and run by the same electronics—might display similar behavior. While the uncertainty on the measurement of α is rather large, the general conclusion of Turchette et al. does not sensitively depend on assumptions about the frequency scaling: a value of α 1⁄4 1.5, as observed for trap [7]g, would imply a distance scaling (for the data shown in Fig. 5) of β ≈ 5. Considering the magnitude of the heating rates and the results of the sizescaling measur-
ements they concluded that the observed heating was inconsistent with a thermal electronic noise source. Deslauriers et al. (2004) measured the heating rates of 111Cdþ ions in a ring (quadrupole) trap and a linear trap. Compared to the noise they expected from a thermal
0.6
0.8
1.2
1.4
0 50 100 150 Temperature, T (K)
Frequency exponent,
1.0
FIG. 4 (color online). Frequency exponent α as a function of temperature for a gold-on-quartz surface trap. The values for the data points and error bars are taken from Fig. 4 of Labaziewicz, Ge, Leibrandt et al. (2008). The dotted line shows the theoretically expected dependence from the model proposed [Labaziewicz, Ge, Leibrandt et al., 2008, drawing on Dutta and Horn (1981)] with the dashed line showing temperatureindependent 1=f scaling.
FIG. 5. Heating rate n_ ̄ as a function of trap secular frequency ωm (≡ωt), for ring traps of two different sizes. The small trap (called 3a by Turchette et al., and [7]c in this review) had d 1⁄4 125 μm. The large trap (called 3b, or [7]d) had d 1⁄4 280 μm. The dashed lines show scaling of _ ̄n ∝ ω−1 (i.e., α 1⁄4 0). Assuming this frequency scaling, the data imply a distance scaling of β 1⁄4 3.8ð6Þ. From Turchette et al., 2000.
1432 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 (blackbody or Johnson) source, the absolute heating rates observed were higher than expected by several orders of magnitude for the ring trap, and by a factor of 20 for the linear trap. Because of this higher-than-expected absolute value they concluded that the heating they saw was due to a source other than thermal noise. In order to compare their results to other published heating rates they plotted their results along with those from 13 other traps (seven ring traps and six linear traps) rangi-
ng from d 1⁄4 80 to 600 μm in size,4 as reproduced here in Fig. 6. The inclusion of the d−4 scaling line on the plot was unrelated to any scaling trend exhibited by the experimental data, but rather predicated on the assumption that the nonthermal heating they observed was caused by fluctuating patch potentials. Despite the impression given in parts of the secondary literature (Brownnutt et al., 2006; Labaziewicz, Ge, Antohi et al., 2008; Allcock et al., 2011), Deslauriers et al. did not at any po-
int demonstrate, nor did they claim to demonstrate, that the combined data could be used to support a distance scaling of d−4. The conclusion they drew from the data shown in Fig. 6 was that the absolute heating rates measured using trapped 111Cdþ ions were significantly lower than those measured in other traps of similar dimension and trap frequency. To make a highly controlled investigation of distance scaling, Deslauriers, Olmschenk et al. (2006) used a trap which consisted of two needlelike, t-
ungsten rf electrodes with grounded sleeves. These were attached to axial translation
stages, allowing the tip-to-tip separation (and consequently the ion-electrode separation) to be controllably varied over a wide range with micrometer resolution. They measured the heating rate for seven different ion-electrode spacings in the range 38 μm < d < 216 μm. As they were able to vary the position of the trap electrodes in situ, this provides the only controlled measurement to date of heating as a function of electrode proximity which did not require a comparison across different trap st-
ructures, electrode materials, or surface qualities. Their plot is reproduced here in Fig. 7. The measurements fit well to a scaling of heating rate with ion-electrode separation of _ ̄n ∼ d−3.5 0.1. This corresponds to a scaling exponent of β 1⁄4 3.5ð1Þ. The distance scalings expected with a needle geometry for various noise sources are considered in Secs. IV.D.2 and V.D.3. Possible types of noise sources are discussed in Sec. VI.A. Following these investigations, several papers (Epstein et al., -
2007; Daniilidis et al., 2011; Hughes et al., 2011) compiled the results of multiple experiments into a single plot and indicated where a d−4 scaling would lie. On the assumption that the theoretical scaling indicated was related to the experimental data plotted, such plots have been widely invoked to claim that the experimental data show a d−4 scaling (Dubessy, Coudreau, and Guidoni, 2009; Herskind et al., 2011; Safavi-Naini et al., 2011; Herschbach et al., 2012; Poulsen, Miroshnychenko, and Drew-
sen, 2012; Pyka et al., 2014). The remainder of this section constructs comprehensive plots for all of the ion-trap heating-rate data currently available, highlighting the uses and the limitations of such plots. In particular, regarding the limitations of the plots, we observe that the full data set cannot be used to draw general conclusions about distance-scaling laws in ion traps. As a specific corollary to this, the full data set cannot be used to support the claim that, in general, heating in -
trapped-ion systems follows a d−4 scaling. Despite their limitations, such plots can be useful in that they provide a map by which to orient discussions and give a visual representation to aid comparisons of where different
FIG. 6. Spectral density of electric-field noise SE for different species of trapped ions. Data are from Deslauriers et al. (2004) (111Cdþ), Turchette et al. (2000) (9Beþ I and III), Rowe et al. (2002) (9Beþ II), Diedrich et al. (1989) (198Hgþ), Roos et al. (1999) (40Caþ), and DeVoe and Kurtsiefer (2002) (137Baþ). The dashed line shows the 1=d4 scaling predicted by a simple patchpotential model. From Deslauriers et al., 2004.
FIG. 7. Scaling of heating rates in a needle trap. Axial heating rate n_ ̄ as a function of the ion-electrode separation z0 (≡d). The dashed line, to which the measured data fit well, has a gradient of −3.5, corresponding to β 1⁄4 3.5. From Deslauriers, Olmschenk et al., 2006.
4The ring-trap result taken from DeVoe and Kurtsiefer (2002) had an ion-electrode separation of 80 μm. The measurement provides only an upper limit on the heating rate.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1433
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 experiments lie relative to one another. To this end, Fig. 8 shows the inferred spectral density of electric-field noise SE as a function of ion-electrode separation d in traps nominally operated at room temperature, for all available published data to date. To make it clear what is being displayed here, what the plot can be used to show, and what it cannot be used to show, we now discuss various aspects of the data compilation. In order to best compare like with like, when measurements were made-
 of several modes of motion in a single trap, the axial c.m. heating rate is plotted in Fig. 8. When heating rates were taken over a range of frequencies, with all else being constant, the result for ωt 1⁄4 2π × 1 MHz is plotted if the frequency range included this value or, if it did not, the measured result for the frequency closest to 1 MHz is plotted. To keep the presentation as clear as possible, for the instances in which repeated measurements were reported, where the measurements were taken-
 in a single trap under essentially similar conditions, only a single data point (the median) is included in Fig. 8. Similarly, if multiple publications include heating rates from the same trap under broadly similar conditions, only one result is included. If heating rates were measured in a single trap under markedly different conditions, a data point is shown for each of the various sets of conditions. For instance, Turchette et al. (2000) measured heating rates in two molybdenum ring traps whic-
h initially gave results which are plotted in Fig. 8 as points [7]c and [7]d. (The original data are also reproduced
here in Fig. 5.) Following venting of the chamber and recleaning of the traps the behavior of both traps changed dramatically. The frequency scaling in trap [7]c changed from α ≈ 0 to α 1⁄4 6.0ð2Þ. The heating rate over the frequency range measured also dropped, by around 2 orders of magnitude at 10 MHz. This is plotted as point [7]h in Fig. 8. (The values of the electric-field noise plotted for points [7]c and [7]h in Fig. 8 are similar due to the difference in α between the two traps and the dif-
ferent frequencies at which the measurements were taken.) Trap [7]d also underwent a significant reduction in heating rate, by around 3 orders of magnitude at 3 MHz. The electric-field noise is plotted as point [7]i in Fig. 8. After the change it was measured to have a frequency scaling of α 1⁄4 4.0ð8Þ. Given such unusual behavior, even without any clear understanding of exactly what it was which caused the behavior to change, two points have been plotted for each trap: before and after the change-
 in behavior, respectively. Despite plotting these points on a single graph, we note and stress the caveat, stated initially by Turchette et al., that it is difficult to draw general conclusions from the data for this particular trap. These data points are discussed in more detail in Sec. VII.D. Data points [20] and [24] were taken for heating rates in the same trap, with the difference being attributed to an improved voltage supply (Poschinger et al., 2009). These two measurements are discussed i-
n detail in Sec. VI.C. Data points [47]a,b were also measured in a single trap, with point [47]b being
10-10
Trap size, d (μm)
30 100 300 1000 3000
10-14
10-13
10-12
10-11
10-9
10-8
10-7
10-15
105
106
107
108
104
103
102
101
100
Traps at ~ 300 K
SE (V2m-2Hz-1)
Normalized heating rate (s-1)
10-16
10-17
10-18
10-1
10-2
10-3
[1]
[6]
[9]b
[21]
[40]
[50] [12]a
[22]
[41]
[51]
[60]
[13]
[23]a
[42]b
[24]
[33]a
[53]
[39] [15]
[25]
[44]
[54]
[20]
[45]
[56]b [17]
[27]
[18]
[28]b
[47]a
[29]
[28]a [16]a
[23]b
[46]b
[16]g
[16]f
[16]e
[16]d
[16]c
[16]b
[49]a
[49]b
[56]a
[57]a
[57]b
[9]a
[7]i
[7]g
[7]e
[7]d
[7]h
[7]b
[7]a
[10]c
[10]b
[10]a
[33]b
[12]b [42]a
[7]c
[46]a
[11]
[59]
[19]b
[19]a
[36]
[14]
[48]
[47]b [62]
[56]c
[7]f [32]
10000
[65]
[63]
[64]a [66]c
[66]b [66]d
[66]a
FIG. 8. Spectral density of electric-field noise SE as a function of the distance d from the ion to the nearest electrode for traps operated nominally at room temperature. Data points are taken from the relevant references in Table I. On the right, the ordinate scale is given as the equivalent heating rate of a 40Caþ ion with a motional frequency of ωt 1⁄4 2π × 1 MHz. The shaded regions indicate an envelope
scaling with d−4. The dotted lines indicate an envelope scaling with d−2. See Sec. III.B for discussion, including the uses and significant limitations of plotting such data on a single graph.
1434 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 measured on resonance with interference from other lab equipment, while point [47]a was measured away from any such resonances (Poulsen, Miroshnychenko, and Drewsen, 2012). Similarly, data points [32] and [65] were measured in the same trap, with the latter being better isolated from ambient and technical noise (McLoughlin et al., 2011; Weidt et al., 2015). This is discussed in Sec. VI.C. Surface treatment can make heating rates in a single trap higher (point [33]a,b) or lower (points [39] and [4-
0]). These are discussed in detail in Secs. VI.E and VI.F, respectively. Finally, Hite et al. (2012), Daniilidis et al. (2014), and McKay et al. (2014) showed that removal of surface contamination by ion-beam cleaning of the electrodes can greatly reduce the heating rate. Where this has been done in a single trap, Fig. 8 displays points for both the precleaning measurements (points [46]a and [57]a) and postcleaning measurements (points [46]b and [57]b). It may be considered that ion-beam cleaning -
is a sufficiently distinctive procedure that the heating rates from such traps should be analyzed separately. All points measured after some form of ion-beam cleaning are colored gray in Fig. 8. These measurements are discussed in detail in Sec. VI.G. It is worth additionally highlighting data point [62] (Goodwin et al., 2014). As well as being notable for the large trap size, the result is interesting as it is the only heating rate to date of a single ion in a Penning trap. This complicates any c-
omparison with the other data shown here: while considerations for some heating mechanisms (such as Johnson noise and adatom diffusion) are essentially the same in both Penning and Paul traps, other mechanisms (such as issues concerning coupling to micromotion) become moot for Penning traps. Additionally there may be effects [such as coupling between magnetron and cyclotron motions (Djekic et al., 2004)] which are not considered in this review, but which become important for Penning traps. A final-
 comment should be made regarding data points which have not been plotted. Measurements by Tamm, Engelke, and Bühner (2000), DeVoe and Kurtsiefer (2002), and Amini et al. (2010) are often included in compilations of heating rates. However, these results provide only an upper limit to the observed heating rate, not the heating rate itself. These are shown in Fig. 8 as points [6], [11], and [28]b, respectively, but are plotted as crosses. Any heating rates for which the trap electrodes were at tempe-
ratures significantly below 300 K have been excluded from this plot. (Results for cryogenic heating-rate measurements are shown in Fig. 12 and discussed in Sec. III.C.) Having accounted for the selection of the data displayed, it is worth discussing how the data should most clearly be presented. The data have been measured in many different experiments, under many different sets of conditions. We now discuss how the data might be standardized to best facilitate clear presentation and to allow, as -
far as possible, a meaningful comparison of like with like. Given the expected dependences of the noise [Eq. (31)], rather than plotting SEðdÞ it might be considered more
appropriate to plot ωþαT−γSEðDÞ. We therefore consider how the data might best be standardized and displayed to properly account for frequency scaling (Sec. III.B.1), for
temperature scaling (Sec. III.B.2), and for the geometry dependence of distance scaling (Sec. III.B.3). We then consider (Sec. III.B.4) a number of systematic effects which are not taken into account in a simple consideration of scalings. These may introduce apparent correlations where none exist. Alternatively they may mask or skew genuine correlations.
1. Normalizing for frequency
Given that traps are operated at different frequencies, and given that SE is frequency dependent, it may be desirable to take this dependence into account. This was first done by Epstein et al. (2007) who noted that there were several cases where the values of ωSE for a given trap were bunched together and concluded that SE ∝ 1=ω was a better assumption than SE being independent of ω. From the frequency dependences shown in Fig. 3, it can be seen that this is not unreasonable. For this review, how-
ever, we note that a significant number of data sets exist for which α ≠ 1. Additionally, for the majority of experiments, α has not been measured and is essentially unknown. In order to plot what is known, the figures throughout this paper show SEðdÞ, for the measured value closest to 1 MHz, but without any further normalization for frequency. There is no strong correlation between a trap’s size and the motional frequency at which it is operated, so the different operating frequencies would not -
systematically change any global trends in the data.
2. Normalizing for temperature
There are two broad temperature regimes in which ion-trap experiments operate: “room temperature” and cryogenic temperature. “Room-temperature” traps are not deliberately temperature controlled. However, the presence of high-voltage rf applied to the electrodes can deposit large amounts of energy into the trap, potentially raising their temperature. Exactly how much energy is deposited will vary as a function of the applied voltage, the construction of the trap, and the attendant electronics. In v-
acuum this energy cannot be convected away. The degree to which it can be conducted away depends strongly on the way the trap is mounted. The efficiency of radiative transport will vary with, for example, the geometry and the surface finish of the electrodes. Given the differences in such factors between different experiments, the exact operating temperatures might be expected to vary significantly. For most nominally roomtemperature experiments there are no data regarding the trap temperature und-
er normal operation. However, a number of experiments in which the electrode temperature has been measured can inform considerations. In a macroscopic trap (d 1⁄4 800 μm) with stainless-steel electrodes held in a Macor mount, a temperature rise of ΔT ∼ 100 K was observed for typical operating conditions (Chwalla, 2009). In a trap of nominally identical geometry, but made using titanium electrodes held in a sapphire mount, a temperature rise of ΔT ∼ 2 K was observed for typical operating conditions-
.5 In a
5P. Schmidt, 2012, Physikalisch-Technische Bundesanstalt (PTB) (personal communication).
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1435
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 gold-coated, SiO2-on-Si, microfabricated trap (d 1⁄4 240 μm) a temperature rise of ΔT ∼ 3 K was observed for typical operating conditions (Wilpers et al., 2012). Considering these three data points, there is not a particular correlation between a trap’s size and its operating temperature. For the sake of discussion, one may nonetheless wish to consider to what extent the data may be skewed if—the above results notwithstanding—there really were a strong correlation such that large traps (requiring-
 high rf voltages) were systematically hot, and small traps (with lower rf voltages and better thermal contact) were systematically closer to room temperature. Assuming a temperature scaling of γ 1⁄4 2 (see Sec. III.C) even a temperature rise of ∼140 K would lead only to a factor of 2 increase in the heating rate. This is comparable with the trap-to-trap variation seen between nominally identical traps and can be neglected for the purposes of most comparisons. For all intents and purposes traps wh-
ich are nominally at room temperature can therefore be reasonably considered to be at around 300 K. Cryogenic traps are typically held at around liquid-helium temperatures. Exceptions to this are the first ever cryogenic experiment, for which the electrodes were estimated to be at 150 K (Deslauriers, Olmschenk et al., 2006), and experiments which deliberately raise the trap temperature above 6 K (Labaziewicz, Ge, Leibrandt et al., 2008; Chiaverini and Sage, 2014; Bruzewicz, Sage, and Chiaverini, 2-
015). The effect of changing the temperature by around 2 orders of magnitude is significant (see Sec. III.C). Heating-rate measurements for which the electrodes are actively cooled below 300 K are therefore treated entirely separately from roomtemperature measurements and are not included in Fig. 8.
3. Normalizing for geometry
In the first paper considering a comparison of heating rates in multiple traps, Turchette et al. (2000) correctly stated that the resistances R in the trap electrodes and connecting circuits give rise to a spectral density of electric-field noise SEðωÞ 1⁄4 4kBTRðωÞ=D2, where D is the characteristic distance from the trap electrodes to the ion. They went on to consider an idealized trap geometry in which the electrodes form a spherical conducting shell of radius d around the ion. Making the associa-
tion that, for the particular geometry under consideration, D ∼ d, they showed that a thermal electronic noise model gives a scaling n_ ̄ ∝ D−2 while a patch-potential model gives _ ̄n ∝ D−4. The association D ∝ d is reasonable for a spherical ion trap. However, as discussed in detail in Sec. IV.D.2, it cannot be assumed for an arbitrary trap geometry. Indeed, in some situations, such as for the electric-field noise at the rf null due to correlated voltage noise on the rf electrodes, the character-
istic distance can tend to infinity. Nonetheless, in the subsequent literature it has often been claimed that thermal electronic noise models predict a scaling _ ̄n ∝ d−2, while the patch-potential model predicts _ ̄n ∝ d−4, where d is the distance between the ion and the closest trap electrode. The change from considering the characteristic distance D between the ion and the trap electrodes to considering the distance d between the ion and the closest trap electrode is a significant one and unwar-
ranted in the general case. While it
happens to be true for a spherical trap that D ∝ d, such a relationship does not generally hold for an arbitrary geometry. One may wonder, given the importance of the characteristic distance for scaling considerations, why SEðdÞ is predominantly discussed in the literature, rather than SEðDÞ. One reason for considering the ion-electrode separation is that it can be easily measured or calculated. By contrast, a trap’s characteristic distance cannot generally be analytically calculated but must be s-
imulated; moreover it can depend sensitively on the exact details of the geometry such as the curvature of the electrode edges which are, in practice, difficult to know accurately. As discussed in detail in Sec. IV.D.2, the characteristic distance Di;j is obtained by solving for the electric-field component along the i principal axis at the equilibrium ion position rI due to a voltage Vj on the jth trap electrode and
using EðjÞ
i ðrIÞ 1⁄4 Vj=Di;j (Leibrandt, Yurke, and Slusher, 2007). It is clear that if the heating originates from a particular feature in the trap (for example, the rf electrodes or the dc end caps) then the important figure is the characteristic distance of that particular electrode. Thus, for example, if the dominant noise source is a thin layer of thermally driven adsorbates evenly distributed across a surface trap then the jth electrode can be considered to be a uniform, infinite plane; the exact layo-
ut of the individual electrodes is irrelevant. This is in contrast to a situation in which the dominant heating is due to technical noise from voltage supplies for a segmented trap. Under such circumstances, at the position of the ion, the noise contributions originating from different places on a single electrode will be correlated, while the noise originating from different electrodes will be uncorrelated. In this instance the characteristic distance will therefore not only depend on the electro-
de geometry, but will even be different for different positions in the same trap (Leibrandt, Yurke, and Slusher, 2007). Even at a particular position, for a given geometry, and specified noise model, the characteristic distance may still not be uniquely constrained: in the case of fluctuating patches of finite size, for example, the characteristic distance is dependent on the patch size (Low, Herskind, and Chuang, 2011). It can thus be seen that the value of the characteristic distance D for any g-
iven trap depends on both the type and details of the noise model considered. Consequently, any attempt to infer a noise model from the scaling of SEðDÞ is, to a certain extent, circular: a particular noise model is necessarily already implicit in the calculation of D. Some papers include a trap’s characteristic distances (assuming a certain noise model) or sufficient information to calculate them. However, the vast majority give only the ion-electrode separation. For comparisons aimed at elucidat-
ing heating mechanisms, simply stating the ion-electrode separation has significant limitations. In an ideal world, the characteristic distance of all historic traps would be calculated for a number of noise models and plotted. In practice this is not feasible, although the contribution of future work to the discussion would be greatly enhanced by including the characteristic distances of each new trap for a selection of likely noise models. Aside from the practical and fundamental difficulties wi-
th plotting SEðDÞ, there are pragmatic reasons in favor of
1436 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 plotting SEðdÞ. When considering such issues as which fabrication techniques might be suitable for making a trap, how tightly a laser beam must be focused to avoid being clipped by electrodes, or what additional apparatus can be integrated near the trap structure, the ion-electrode separation provides a useful measure of the trap size. If one wishes to compare the usefulness of various traps for a particular application, and neglecting any attempt to understand the physics underlying the noise, t-
hen the ion-electrode separation is, pragmatically speaking, a sensible parameter to consider. For these reasons, and accepting the necessary limitations attendant with such a decision, the plots in this review show SEðdÞ.
4. Other systematic effects
In the considerations outlined previously, the additional variables for which one is attempting to control can be stated as some parameter. There exist, however, a number of other considerations which are not so simple to quantify. These are discussed in turn here. • Systematic differences by group: Some groups, for a variety of reasons, build systematically smaller traps than others. Different groups also see different sources of noise (as noted in Sec. III.A and elaborated upon in Sec. VI). If t-
he absolute levels of heating from the various sources are different (even taking all other scalings into account) then a systematic connection between the size of trap that a group uses and the type of noise they observe could give rise to, or alter, apparent trends in the scaling. Without knowing in advance what the different absolute levels are, it is difficult to even estimate the magnitude of the effect that this may have. • Material differences: It is possible, even likely, that different ma-
terials have different noise properties. This may be because the dominant noise mechanism varies between different materials, or because a single noise mechanism presents differently in different materials. For example, considering noise sources related to crystal grain boundaries in the electrodes, the grain structure in gold electrodes will be different from the grain structure in stainless-steel electrodes. Gold is commonly used as an electrode material for traps of d ∼ 100 μm, while stainless -
steel is commonly used for traps of d ∼ 1000 μm. A systematic connection between the trap size and trap material, coupled with a connection between trap material and noise, would potentially cause systematic shifts in the observed relationship between trap size and noise level. Without knowing in advance what the sources of noise for each material are, it is difficult to even estimate the magnitude of the effect that this may have. • Different reporting conventions: There are many issues which cou-
ld cause an increase in trap heating rates. In order to compare what is ultimately limiting the experiment, it can therefore be argued that one should compare the lowest heating rate from each experiment (Wang, 2012). Alternatively, it can be argued that given some distribution of results one should quote the average value (Britton, 2008). Given that some experiments observe a variation of several orders of magnitude from day to day
in a single trap (Wang, 2012), this difference in reporting methods is not necessarily insignificant. Without knowing the exact reporting method used for each experiment it is difficult to predict how this might affect the overall result, if at all. It would be helpful if future contributions to the literature would state which reporting convention was used or give both the lowest and the average (arguably the median) results. • The importance of the absolute heating rate: While it may be interest-
ing to say that one trap is better or worse than another “scaled for size,” in most applications it is the absolute heating rate that is important. For example, the implementation of a Mølmer-Sørensen gate made by Kirchmair et al. (2009) requires a heating rate below ∼100 s−1 in order to obtain a gate infidelity of less than 10−3. This requirement is independent of the size of the trap in which the gate is implemented. Groups using small traps may therefore be motivated to achieve heating rates wh-
ich are as low as possible, while groups using larger traps may have little need to improve over rates which are low enough. This may skew the reported heating rates to make any apparent scaling with distance exhibited by the full data set smaller than the actual scaling of the physical mechanisms involved. • Selection bias: It is often reported that a trap’s heating rate is “typical for traps of this size.” It is reasonable that a group whose central interest is not heating-rate studies will work-
 to improve a trap’s operation until it is “typical,” and then stop working so hard to improve it. However, such data may then be indicative of what was expected, rather than normative for what is possible. This does not rule out the eventuality that various groups may have reached fundamental limits; however, it is a reminder that not all reported results are necessarily at such a limit, nor do they all claim to be. A selection bias would skew the reported data toward whatever scaling trend is ex-
pected.
5. Summary
Two experiments have been performed which attempted controlled comparisons of heating rates as a function of trap size: Turchette et al. (2000) compared the heating rates of two similar traps which had different ion-electrode separations. These two traps exhibited heating rates which suggested β 1⁄4 3.8ð6Þ. Deslauriers, Olmschenk et al. (2006) measured heating rates in a single trap for which the ion-electrode separation d could be varied, while leaving the driving electronics, the electrodes’ mat-
erial, surface finish, etc., unchanged. This experiment had a distance-scaling exponent of β 1⁄4 3.5ð1Þ. Compilations of heating rates from other experiments provide a useful visual overview of the topic. However, they have a number of practical and fundamental limitations regarding their possible use to infer any scaling laws that would shed light on the mechanisms underlying the observed heating. As different experiments may be limited by different sources of noise, it is not necessarily expecte-
d, and has not been experimentally demonstrated, that there is a generally applicable distance-scaling law for heating in ion traps.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1437
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 C. Temperature scaling
Assuming that trapped ions are heated by thermal or thermally activated effects in the trap, it seems reasonable that reducing the temperature in the trap would reduce the ionheating rate. This is of interest for two reasons. First, because the change of the observed level of noise with temperature could shed light on the underlying mechanism. Second, because a reduction in the heating rate, without having to increase the trap frequency or the trap dimensions, would be useful in itself. This secti-
on considers experiments which measured the ion-heating rate over a range of temperatures and thereby determined values of the temperature-scaling exponent γ for particular traps. It then considers the difference in the heating rate observed between typical traps operated at room temperature and typical cryogenic traps. The first experiment to cool down the trap electrodes (Deslauriers, Olmschenk et al., 2006) showed that reduced electrode temperatures did indeed lead to reduced ion-heating rates.-
 The trap consisted of two needlelike rf electrodes with grounded sleeves. The needles were cooled to approximately 150 K through contact with a liquid-nitrogen reservoir. This reduced the heating rate of a single 111Cdþ ion by around an order of magnitude compared to room temperature. This suggests a temperature scaling of γ ∼ 3 in this instance. Since then, numerous experiments have been carried out at several institutions with traps operated at around 6 K. The traps are held in liquid 4He cryos-
tats, and the power dissipated by the trap typically raises the temperature of the trap itself a few degrees above 4 K. Labaziewicz, Ge, Leibrandt et al. (2008) studied four traps in detail. All four traps were made of gold electrodes on crystal-quartz substrates and had an ion-electrode separation of 75 μm. For one of the traps they also repeated measurements following various cleaning and handling procedures. In each case they measured both the temperature-scaling exponent γ and the absolute hea-
ting rate as a function of temperature over the range 7–100 K. They found that the electric-field noise was not simply proportional to some exponential increase of the form SE ∝ Tþγ as assumed in the naive ansatz proposed in Eq. (31). Rather, it (usually) took the form SE ∝ S01⁄21 þ ðT=T0Þþγ. The eight different measured values of γ are plotted in Fig. 9. The five fit curves for trap [22]c are plotted in Fig. 10. The four traps, prepared and operated in nominally identical fashion, initially had -
temperature exponents in the range 3 ≲ γ ≲ 4. These are similar to the results obtained by Deslauriers, Olmschenk et al. (2006). Beyond this, there are several points worth noting. First, γ varied as a function of processing. Not only did γ change following different processing steps for trap [22]c, but initially measured values γ for the four traps were different at a level significantly greater than the uncertainty on each individual point. This suggests that some, as yet unidentified, factors i-
n trap preparation play a role. Second, rather than a simple exponential decrease with decreasing temperature, the noise level plateaued below around 30 K, at a value of ∼0.1 × 10−12 V2=m2 Hz. All of the traps (with the exception of trap [22]c-v) reached this floor at similar temperatures. They also all (with the exception of trap [22]d) exhibited similar absolute
noise levels having reached this floor [in the range 0.02 × 10−12 < SE=ðV2=m2 HzÞ < 0.2 × 10−12]. It can thus be seen, at least in the instance of these traps, that the variation of several orders of magnitude in the heating rate at room temperature is less strongly reflected in the cold-temperature behavior. Possible causes of such a noise floor are discussed in Sec. VII.A. A third, related point is that traps which started with higher heating rates also had higher values of γ. Whatever effect ca-
used the reduction in heating rate at room temperature, there was a concomitant reduction in the strength with which heating rates scaled as a function of temperature. This means that one cannot necessarily expect to independently combine the expected improvements of cleaning with that of cryogenic temperatures. Consequently, while traps with very high heating rates at room temperature (see, e.g., points [19]a,b in Fig. 8) exhibit a large reduction in heating rates when cooled to cryogenic tempera-
tures (see points [19]e,f in Fig. 12), claims of improvement by 7 (Labaziewicz, Ge,
Temperature exponent,
[22]a
[22]b
[22]d
[22]c
1.5
2
2.5
3
3.5
4
4.5 i. ii. iii. iv. v.
Temp. cycling
Cleaning
FIG. 9 (color online). Measured values of the temperature exponent γ for four traps (Labaziewicz, Ge, Leibrandt et al., 2008). Traps [22]a,b,d were measured once at cryogenic temperatures. For trap [22]c five measurements were made. Following measurement i the trap was cycled from 7 to 130 K, without breaking vacuum. Following measurement ii the trap was cycled from 7 to 340 K without breaking vacuum. Following measurements iii and iv the trap was brought to room temperature, cleaned with lab solv-
ents in air, and then recooled.
Temperature, T (K)
S
E (V2 m-2 Hz-1)
10 -14
10 -13
10 -12
10 -11
10 -10
10 30 100 300
i.
iii.
v.
ii.
iv.
Temp. cycle
Clean & temp. cycle
FIG. 10 (color online). Spectral density of electric-field noise SE as a function of temperature T for a single trap ([22]c) following different treatments. SEðTÞ was inferred from ion-heating rates taken between 7 and 100 K (Labaziewicz, Ge, Leibrandt et al., 2008). The published fit parameters (Labaziewicz, Ge, Leibrandt et al., 2008, Table I) have been extrapolated here to room temperature (dotted lines).
1438 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 Antohi et al., 2008) or even 8 (Antohi et al., 2009) orders of magnitude are not likely to be the rule for most traps. Chiaverini and Sage (2014) studied three traps over the even larger temperature range of 4 K < T < 295 K. They measured the axial component of the electric-field noise acting on single 88Srþ ions. All three traps had ion-electrode separations of 50 μm and sapphire substrates. The electrodes of two traps were made of 2 μm of sputtered niobium, while those of the third were made of-
 500 nm of thermally evaporated gold. Their results are reproduced in Fig. 11. Similar to Labaziewicz, Ge, Leibrandt et al. (2008) they observed a reduction of around 2 orders of magnitude in the noise between room temperature and cryogenic temperatures. It is possible that the temperature-scaling behavior they observed was qualitatively different from that seen by Labaziewicz, Ge, Leibrandt et al. (2008), in that the lowtemperature behavior did not reach a plateaux, but rather scaled with an expo-
nent of γ 1⁄4 0.54ð4Þ below 70 K. Recent results, however, provide more data for the behavior of the niobium on sapphire traps (Bruzewicz, Sage, and Chiaverini, 2015). These indicate that in at least some cases the behavior may be similar to that observed by Labaziewicz, Ge, Leibrandt et al. (2008). Specifically, comparing the results of Bruzewicz, Sage, and Chiaverini (2015) with the cleaned and temperature cycled trap of Labaziewicz, Ge, Leibrandt et al. (2008) (point [22]c-v) the traps exhibite-
d high-temperature scaling exponents of γ 1⁄4 1.59ð3Þ and γ 1⁄4 1.8ð1Þ, respectively. Moreover they exhibited a characteristic “turn-on temperature” T0 at which the high-temperature behavior starts to play a significant role, of 18(2) and 17(3) K, respectively. Given both the similarities and differences between the temperaturescaling results, it is not currently clear whether the various experiments described share a dominant source of heating or not, in either the high- or low-temperature regime-
s. Possible
mechanisms which may give rise to behavior qualitatively similar to that observed are discussed in Sec. VII.A. Moving beyond measurements of scaling in specific experiments, it would be interesting to know, even without necessarily identifying the cause of heating in each instance, what degree of heating-rate reduction might be expected by operating a trap at cryogenic temperatures. Pragmatically speaking, such a number is particularly interesting when setting up an experiment: without knowing in -
advance what source of noise might limit the experiment at any given stage of development, it would be useful to estimate what improvement one might expect to gain by investing in a cryostat. The observed levels of noise for cryogenic traps as a function of ion-surface distance are shown in Fig. 12. The data were selected using similar criteria to the roomtemperature data selection shown in Fig. 8, as described in Sec. III.B. If a publication reports repeated measurements taken in a single trap un-
der essentially similar conditions, only a single data point (the median) has been plotted here. Similarly, if multiple publications include heating rates from the same trap under broadly similar conditions, only one result
FIG. 11 (color online). Spectral density of electric-field noise SE as a function of temperature T for traps made of different materials. The levels of heating are similar in the three traps, despite the different trap-electrode materials. The dotted lines are fits to power laws in temperature to all data. Above 70 K the scaling exponent is γ 1⁄4 2.13ð5Þ. Below 70 K it is 0.54(4). From Chiaverini and Sage, 2014.
10-10
Trap size, d (μm)
30 100 300
10-14
10-13
10-12
10-11
10-9
10-8
10-7
10-15
105
106
107
108
104
103
102
101
100
S
E (V2m-2Hz-1)
Normalized heating rate (s-1)
Traps at ~ 300 K
Traps at ~ 6 K
[58]e
[58]a
[58]d [58]c
[58]b
[58]f
[19]e
[19]f
[37]
[31]d
[19]d
[31]b
[31]c
[31]a [30]
[43]h
[43]j
[43]g
[43]k
[43]i
[19]g
[43]l
[22]b
[22]c
[22]a
[19]c
[43]m
[27]
[22]e
[22]d
[43]n
[52]
[56]b
[56]a
[56]c
[61]
[34]b
[34]a
[19]h [19]i
[64]b
[66]a [66]b [66]c [66]d
FIG. 12. Spectral density of electric-field noise SE as a function of the distance d from the ion to the nearest electrode, for traps at cryogenic temperatures (all nominally around 6 K). Data points are taken from the relevant references in Table I. The gray points are the same room-temperature data as shown in Fig. 8, for comparison. On the right, the ordinate scale is the equivalent heating rate of a 40Caþ ion with a motional frequency of ωt 1⁄4 2π × 1 MHz. The white area (40 μm ≤ d ≤ 230 μm) s-
hows the size range over which cryogenic measurements have been made. The solid black line marks S~ E for the cryogenic traps. The solid gray line marks ~SE for the room-temperature traps over the same size range.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1439
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 is included. If measurements were taken at different frequencies, the measurement result taken closest to 1 MHz has been shown. If measurements were taken at different temperatures, the measurement taken closest to 6 K has been shown. All of the caveats laid out in Sec. III.B regarding Fig. 8 also hold here for Fig. 12. The possibility of different physical mechanisms underlying the noise in the different traps, so that each experiment might be expected to exhibit a scaling which is essentially u-
nknown, means that any fit to the data is broadly meaningless. In order to obtain a quantitative comparison between the data sets for the two different temperatures, a heuristic way of identifying the typical level of noise seen in a cryogenic experiment must be used. To this end the median spectral density of the electric-field noise ~SE is considered. Given the traps are relatively evenly distributed across the size range, this is not an unreasonable measure. Considering all measurements to date-
, ~SEðT 1⁄4 6 KÞ 1⁄4 0.2 × 10−12 V2=m2 Hz, and is indicated in Fig. 12 by a solid black horizontal line. To compare this to a typical level of noise for roomtemperature traps of a similar size to cryogenic traps, the median spectral density of electric-field noise for all roomtemperature measurements made on traps in the range 40 μm ≤ d ≤ 230 μm is ~SEðT 1⁄4 300 KÞ 1⁄4 20 × 10−12 V2=m2 Hz. This change in noise level is in line with the estimate of 2 orders of magnitude for good traps which was mad-
e previously by considering the data of Labaziewicz, Ge, Leibrandt et al. (2008), Chiaverini and Sage (2014), and Bruzewicz, Sage, and Chiaverini (2015). There are, however, numerous possible noise sources which may limit experiments and different sources may scale differently with temperature. It is therefore not necessarily the case that the same reduction will be seen in all experiments. Very early work on cryogenic traps (Labaziewicz, Ge, Antohi et al., 2008) saw that, in two traps with very h-
igh heating rates at room temperature, noise was suppressed by 7 orders of magnitude by cooling the traps to 6 K. The absolute heating rates were then 2 orders of magnitude lower than the heating rates reported for typical traps of similar size operated at room temperature. This initial result is shown by subsequent data to be reasonably typical: bad traps may be improved dramatically, although good traps might only be expected to have an improvement of around 2 orders of magnitude. Certain specif-
ic noise sources may, however, behave differently.
IV. SELECTED SOURCES OF ELECTRIC-FIELD NOISE
Having presented in Sec. III an overview of the main results and trends observed experimentally, Secs. IV and V consider various sources of electric-field noise which may contribute to the heating of trapped ions. The current section considers several common sources of electric-field noise which are related to the electromagnetic (EM) environment and the trapping circuitry. Starting with arguably the most fundamental source of noise, Sec. IV.A addresses the effect of blackbody radiation; first in -
free space and then above surfaces. The level of noise actually observed in free space is generally very much higher than this blackbody value, due to electromagnetic interference (EMI) from
both man-made and natural sources. Direct coupling of the ion to such fields is considered in Sec. IV.B. Background EM radiation can also couple to parts of the experimental apparatus and from there perturb the ion. This can potentially couple noise into the system much more efficiently than by simple free-space coupling directly to the ion. This effect is termed EM pickup and is discussed in Sec. IV.C. Moving on to noise originating in the experimental components themselves, Sec. IV.D considers J-
ohnson-Nyquist noise. In the simplest case, this is the thermal noise of the electrons in resistive elements in the experiment, and this section considers a number of often-overlooked resistive elements. Additionally, Sec. IV.D.7 considers the effects of technical noise, taken here to mean noise from equipment such as power supplies, and coupled to the experiment through the wiring. While this is often not considered to be strictly Johnson noise, it is included here due to the similar distance sca-
ling that it shares with Johnson noise. Finally, Sec. IV.E considers the noise that can arise when the vacuum is no longer neutral. Specifically, it considers the effect of surface-emitted electrons which perturb the ion as they move through free space toward an anode. Inspired by the observations of Turchette et al. (2000) much recent work has been carried out on a class of models in which such electric-field noise arises from variations of the electrode potential on a microscopic scale. These ar-
e considered in Sec. V, together with a discussion of several microscopic mechanisms which have been suggested in the literature to explain the physical origin of this noise. The major results of Secs. IV and V are summarized in Appendix C. This is intended to help maintain an overview and shows indicative values only. The reader should always refer back to the discussions provided in the main paper.
A. Blackbody radiation
A charged particle in a trap is subject to heating by fluctuating EM fields. Even in the absence of nearby electrodes or noisy circuits, the ion is affected by freely propagating EM radiation. A fundamental source of such an EM background is blackbody radiation. While the level of this noise is far too low to play a significant role in ion-trap experiments, it is important to calculate as it provides the baseline used for calculating and discussing the level of noise due to other sources of EMI. T-
his section first considers blackbody radiation in free space and then considers how this noise is modified in the vicinity of conducting surfaces such as trap electrodes.
1. Blackbody radiation in free space
If the frequency of the EM radiation ω ≪ kBT=ħ then the single-sided spectral energy density of blackbody radiation in vacuum is uemðωÞ 1⁄4 2kBTω2=πc3 (Landau and Lifshitz, 1980), where kB is Boltzmann’s constant, T is the temperature, and c is the speed of light. The total energy of the field is shared equally between the electric and magnetic energy densities ε0hE2i=2 and hB2i=ð2μ0Þ, where ε0 and μ0 are the electric permittivity and magnetic permeability of free space, respectively. For an isotr-
opic system, each spatial component of the electric field provides one-third of the total power, so
1440 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 the (single-sided) spectral density of electric-field noise along a specific trap axis is (Henkel, Pötting, and Wilkens, 1999)
SðBBÞ
E 1⁄4 2kBTω2
3ε0πc3 : ð32Þ
At room temperature and frequencies of ω 1⁄4 2π × 1 MHz,
this gives a spectral density of electric-field noise of SðBBÞ
E≃
10−22 V2=m2 Hz. This is far below the observed level of noise in ion-trap experiments (cf. Fig. 8). It is nonetheless important to know this level, as blackbody radiation at room temperature is the reference point for EMI, as explained in Sec. IV.B.
2. Blackbody radiation above surfaces
Compared to blackbody radiation in free space, the presence of a nearby surface can substantially enhance the electricfield background, due to EM losses in dielectrics or metals. According to the dissipation-fluctuation theorem these losses are associated with a spectral density of electric-field noise
SðBBSÞ
E , which, in thermal equilibrium and for the conventions used in this review, can be expressed as (Agarwal, 1975; Henkel and Wilkens, 1999)
SðBBSÞ
E 1⁄4 4ħ
eħω=kBT − 1 ImGEðrI; rI; −ωÞ: ð33Þ
In this expression GEðr; r0; ωÞ 1⁄4 P
ij et;i et;j Gij
E ðr; r0; ωÞ, where
the electric Green’s function Gij
E ðr; r0; ωÞ determines the electric-field components Eiðr; ωÞ emitted from an oscillating dipole μj located at r0, i.e., Eiðr; ωÞ 1⁄4 Gij
E ðr; r0; ωÞμjðr0; ωÞ. For simple geometries the Green’s function can be evaluated analytically (Agarwal, 1975). For an ion trapped a distance d above an infinite plane having relative permittivity εðωÞ and in the quasistatic limit, the imaginary part of the Green’s function (neglecting the free space contribution) is given by (Henkel and Wilkens, 1999)
ImGEð−ωÞ ≃ sη
16πε0d3 Im εðωÞ − 1
εðωÞ þ 1 ; ð34Þ
for the field fluctuations perpendicular (s⊥ 1⁄4 1) and parallel (s∥ 1⁄4 1=2) to the surface. For a metallic surface the relative permittivity at frequencies below the electronic damping rate (which is the relevant regime for all ion-trap applications) can
be approximated by εðωÞ ≃ 2ic2=ðω2δs2Þ, where δsðωÞ 1⁄4
ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
2ε0c2ρe=ω
p is the skin depth for a metal with resistivity ρe. Under such conditions
Im εðωÞ − 1
εðωÞ þ 1 ≃ 2ωρeε0;
and the second term in Eq. (34) can be interpreted as the damping of the ion’s image dipole. The quasistatic limit given in Eq. (34) is valid only for distances d < δsðωÞ which, for gold at ω 1⁄4 2π × 1 MHz, corresponds to about 75 μm. An approximate result for the spectral density of electricfield noise which applies also for larger distances is given by (Henkel, Pötting, and Wilkens, 1999)
SðBBSÞ
E 1⁄4 kBTρe
2πd3
 
sη þ d
δs
 
; ð35Þ
where the high-temperature limit kBT ≫ ħω has been assumed. At a distance d 1⁄4 100 μm, temperature T 1⁄4 300 K, and electrode resistivity ρe 1⁄4 2.21 × 10−8 Ωm, the level of
electric-field noise is SðBBSÞ
E ≈ 10−17 V2=m2 Hz, scaling as
d−2 for larger distances and as d−3 for smaller distances. Although the presence of a surface significantly enhances blackbody radiation, the overall noise level is still significantly lower than the observed heating rates (cf. Fig. 8).
B. Electromagnetic interference
Radio-frequency engineers have long known that at low(30–300 kHz), medium- (0.3–3 MHz), and high-frequency (3–30 MHz) bands, the level of blackbody radiation is too low to be responsible for the noise observed on antennas. The ion’s motional frequency for most ion-trap experiments is in the medium-frequency (MF) band, and such radiation is pervasive: sources as diverse as lightning strikes in the tropics (Parrot et al., 2009), the solar wind hitting the ionosphere (Bunch and LaBelle, 2009), and da-
ta being sent along power transmission lines (Hansen, 2003) cause noise which is near the secular frequency of many ion-trap experiments. Moreover, MF radiation is hardly attenuated by the atmosphere, natural materials, or buildings, and not efficiently radiated into space as it is reflected by the ionosphere. The standard measure of this EMI is the external noise factor Fa: a dimensionless factor defined as the extra noise that a perfect antenna receives above the blackbody radiation noise at a t-
emperature of T 1⁄4 300 K. The spectral density of
the EMI is then SðEMIÞ
E 1⁄4 Fa × SðBBÞ
E . The external noise factor varies greatly, both spatially and temporally. In the MF band, outdoors, away from man-made structures, Fa is about 60 dB (ITU, 2009), and in cities it is approximately 80 dB, decreasing with frequency as ω−3. At 1 MHz, natural sources have an Fa range of 0–100 dB, 99.5% of the time. i.e., 0.5% of the time natural sources exceed 100 dB. The electricfield noise levels for Fa 1⁄4 80 dB at 1 MHz are then
SðEMIÞ
E ∼ 10−14 V2=m2 Hz, falling off with ω−1. Inside commercial buildings, where most laboratory experiments are carried out, the level of electric-field noise at these frequencies is even higher than outdoors (Fernández et al., 2010). The external noise factor in commercial buildings has been measured to be approximately 120 dB at 1 MHz and falls off with ω−5 (Landa et al., 2011). An unshielded ion trap exposed to typical levels of indoor noise would therefore see
SðEMIÞ
E ∼ 10−10 V2=m2 Hz falling off with ω−3. This absolute level of noise is seen in some ion-trap experiments (cf. Fig. 8). Of course, trapped ions are surrounded by electrodes, in a vacuum vessel made of metal, which shields them to some extent. Nonetheless, EMI from ambient noise in buildings cannot be ruled out as a source of direct ion heating and care must be taken to shield the ion trap so that EMI does not affect the experiment. Fa is measured relative to the blackbody background, which scales-
 as ω2 [see Eq. (32)]. This means that the
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1441
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 frequency-scaling exponents of Fa and SðEMIÞ
E differ by 2. For an indoor experiment, where the external noise factor Fa falls as ω−5, one might expect the spectral density of electric-field
noise SðEMIÞ
E to scale in free space as ω−3. However, the ion is partly shielded by the electrodes and also shielded by the vacuum chamber and other conductors, such as heat shields in cryogenic systems (Brown, Wilson et al., 2011). Electric-field shielding via conductors works best at lower frequencies (the opposite being true for magnetic-field shielding) and so, while shielding can provide substantial reductions in the expected heating rate, it would also change the expected frequency scaling of the electr-
ic-field noise. The effect of this EMI shielding should be taken into account (Miller and Bridges, 1966; Bridges, 1988; Rajawat, Kalghatgi, and Ron, 1995). Furthermore, strong sources at specific frequencies in the noise spectrum have not been included in this analysis: radio stations and electronic devices can emit strong signals which would be even further above the levels mentioned here. These would manifest themselves as peaks in the power spectrum and may be ephemeral or geography dependent. -
The heating due to direct EMI is expected to be independent of the trap size provided the shielding does not change as a function of trap geometry. In practice, however, changing the geometry of the electrodes generally changes the shielding at the ion, unless care is taken to shield the entire experiment from EMI. Some nonzero value of the distance-scaling exponent β may therefore be expected, but this would have to be calculated for each specific apparatus. The background blackbody radiation lev-
el scales linearly with temperature [see Eq. (32)]. However, the level of environmental EMI impinging on an experiment would not be expected to vary with temperature. That said, if the ion trap has metallic shielding which is cooled, the shielding’s effectiveness will change significantly as its conductance increases with decreasing temperature. At low temperatures this will eventually reach a plateau when the conductance no longer changes.
C. Electromagnetic pickup
As explained in Sec. IV.B, electric fields from EMI can directly interact with a trapped ion. As well as interacting with the ion directly, it is possible that EMI causes voltage noise on the wires and electronics of the experiment, which transmit this noise to the trap. Voltage fluctuations caused by EMI coupling to wires are referred to as electromagnetic pickup. The electric component of EMI can be well shielded by metallic conductors. However, the magnetic-field noise from EMI is not as easily-
 shielded and can be picked up by any conductive loops in the trap wiring. An example of where such loops may occur in ion traps is the wiring leading to the rf electrodes: in a linear-trap configuration a single rf source is usually split to drive two trap electrodes, with the capacitance between the two rf electrodes completing the loop. Any changing magnetic flux perpendicular to the surface formed by a loop induces an electromotive force (EMF) around the loop. Since the small capacitance betwe-
en the two trap electrodes has a large impedance, this is where the full voltage drop of the induced EMF will present itself.
The frequency scaling α of noise due to EM pickup would be dependent upon the scaling of the underlying EMI radiation. Beyond this, it must be taken into account that the voltage VL at frequency ω induced in a loop of wire by an incident magnetic field B, normal to the loop, also at frequency ω, is given by (Kanda, 1993)
VL 1⁄4 ωBAL; ð36Þ
where AL is the loop area. The spectral densities of magneticand electric-field noise are related by SB 1⁄4 ε0μ0SE. Using the results discussed previously, the spectral density of the
EM-pickup voltage noise SðPUÞ
V on the electrode is
SðPUÞ
V 1⁄4 Fa
2μ0 kB T A2L ω4
3πc3 : ð37Þ
Consequently, for the same free-field noise, α for EM pickup would be smaller by 2 than for direct coupling of the free fields to the ion [cf. Eq. (32)]. Thus, if the EMI scaled with α 1⁄4 3 (as is expected for noise indoors, see Sec. IV.B) then the EM pickup would scale with α 1⁄4 1. From Eq. (37) it would initially seem that γ 1⁄4 1. In addition to this basic dependence, the effectiveness of any shielding in the experiment will likely be temperature dependent. Typically, as temperature is lowere-
d, the resistance is lowered and the shield becomes more effective at damping magnetic fluctuations, so that for a typical experiment it would be expected that γ > 1. The discussion of EM pickup outlines what voltage noise can be expected on a trap electrode. This is related to the electric-field noise at the position of the ion as
SE 1⁄4 SV
D2 ; ð38Þ
where D is the characteristic distance from the ion to the trap electrode being considered on which there is voltage noise. At a given frequency and temperature, it is indistinguishable (from the ion’s point of view) from Johnson noise. This D−2 distance scaling is therefore discussed more fully under Johnson noise in Sec. IV.D. To estimate the absolute noise level that might be expected from EM pickup, consider an environment (typical office building) with Fa 1⁄4 120 dB. The voltage noise due to -
pickup at 1 MHz on an unshielded 10 cm diameter loop of wire will
be SðPUÞ
V ∼ 4 × 10−18 V2=Hz. This is equivalent to the Johnson noise of a 200 Ω resistor at room temperature. If this voltage noise were on a trap electrode with a characteristic distance of D 1⁄4 1000 μm, then the electric-field noise would be
SðPUÞ
E ∼ 10−12 V2=m2 Hz. This level of noise is comparable to that seen in some ion-trap experiments (cf. Fig. 8). This level will scale in proportion to the square of the area enclosed by the loop.
D. Johnson-Nyquist noise
Johnson-Nyquist noise (or Johnson noise) is the electrical noise generated by the thermal motion of charge carriers in a
1442 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 conductor. The spectral density of such voltage noise is given by (Johnson, 1928; Nyquist, 1928)
SðJNÞ
V 1⁄4 4kBTRðω; TÞ; ð39Þ
where Rðω; TÞ is the effective real resistance, at frequency ω, of the whole circuit from the two terminals across which the voltage noise is observed. What constitutes the whole circuit is broadly a matter of convention. Some analyses consider only the trap electrodes, others consider the associated passive electronics, and still others the full system up to and including active components such as power supplies. The Johnson noise due to the bulk resistance of the trap electrodes themselves is al-
most always negligibly low. However, as shown in Sec. IV.D.1, Johnson noise can arise due to losses in other elements in the experiment that are often overlooked. Here we consider Johnson noise only from electrical elements on the circuit which leads to the trap electrodes. For the purpose of analysis, some lump several noise sources together, modeling both technical noise (Sec. IV.D.7) and EM pickup (Sec. IV.C) as Johnson noise. This can be done by considering Eq. (39) and replacing the resistanc-
e R by a much larger effective resistance (Lamoreaux, 1997), or alternatively, by a resistance at a much higher effective temperature (Wineland, Monroe, Itano, Leibfried et al., 1998). The spectral density of the electric-field noise due to Johnson-Nyquist noise is
SðJNÞ
E 1⁄4 SðJNÞ
V
D2 1⁄4 4kBTRðω; TÞ
D2 ; ð40Þ
where D is the characteristic distance to a particular trap electrode. A simplistic interpretation of Johnson noise may assume that it exhibits an essentially flat noise spectrum (α 1⁄4 0) and that the D2 term in the denominator of Eq. (40) would imply β 1⁄4 2. Given that many metals have R ∝ T, one might also anticipate γ 1⁄4 2. Finally, assuming that trap electrodes have a resistance of ∼0.1 Ω, and that D ≃ d, one might expect the electric-field noise due to Johnson noise at 300 K, in a trap of -
d 1⁄4 100 μm to be around
SðJNÞ
E ∼ 10−13 V2=m2 Hz. Such an analysis is, however, rather too simplistic to describe the situation in realistic ion-trap experiments. In what follows we consider a number of physical effects which cause the Johnson-noise analysis to be more complex than the simple picture just presented. First, the frequency dependence of Johnson noise is considered (Sec. IV.D.1). We then consider the distance scaling (Sec. IV.D.2)—specifically, how the characteristic distance D relates to the ion-electrode separat-
ion d for various geometries. This is followed by discussions of the temperature scaling (Sec. IV.D.3) and absolute levels (Sec. IV.D.4) of Johnson noise. To root these ideas in experimental practice, two worked examples are given. These consider the effects of Johnson noise in a simple RC low-pass filter circuit (Sec. IV.D.5) and in an rf resonator circuit (Sec. IV.D.6). The latter example explicitly includes the effects of nonideal (lossy) components. Finally, a brief
discussion is provided to consider technical noise (Sec. IV.D.7).
1. Frequency-dependent resistance
It can be seen from Eq. (40) that the frequency scaling α of Johnson noise depends on the frequency scaling of RðωÞ, which is flat for standard ideal resistors, i.e., α 1⁄4 0. However, electrical circuits connected to the trap almost always contain frequency-dependent impedance elements such as filters. Such frequency dependences must be considered carefully as it is possible, in principle, to achieve any value of α. In considering ion heating due to the electric-field noise at the ion’s secular f-
requency, the Johnson-noise-induced heating would be dependent upon the real part of the impedance seen from the trap electrodes at that frequency (Leibrandt, Yurke, and Slusher, 2007). This resistance is nearly always much higher than the dc resistance of the circuit because frequency-dependent elements are always lossy; even superconductors have alternating current (ac) resistance (Zar, 1963). Idealized capacitors, inductors, and transmission lines (wires) have, as their main characteristics, on-
ly reactances (imaginary impedances). However, the materials which make up these devices are, in practice, not ideal and have losses. The impedance of a wire-wound inductor is an obvious example: a wire-wound inductor typically has a very low dc resistance, but if the (ac) current is kept constant while the frequency of the current is increased, the inductor will heat up. Real dielectrics are also lossy, characterized by a loss tangent tan θ. Any capacitance incorporating a dielectric has an equiv-
alent parallel resistance (EPR) given by (Vandamme et al., 2010)
EPR 1⁄4 1
ωC tan θ ; ð41Þ
where ω is the angular frequency and C is the capacitance. A large EPR is characteristic of a high-quality capacitor and has little associated noise. Calculation of the equivalent series resistance (ESR) requires analysis of the rest of the circuit in which the component is situated. (Worked examples calculating the ESR of an rf filter circuit and an LC resonator circuit are provided in Secs. IV.D.5 and IV.D.6, respectively.) The ESR is then easily understood as the resistance which goes into Eq. -
(40) to determine the Johnson noise. We now consider the ESR that might reasonably be expected from a number of discrete components. Capacitors used in the trap’s electronics may provide the most obvious instance of loss in dielectrics. However, the dielectrics which hold the trap must also be considered. Macroscopic traps often have their electrodes mounted on Macor (Rohde et al., 2001; Sinclair, Wilson, and Gill, 2001), which has relatively high dielectric losses. This may be a cause of the sign-
ificant dissipation observed in some ion-trap systems (Chwalla, 2009). Surface traps usually consist of thin (∼1 μm) metallic electrodes on dielectric substrates such as quartz (Seidelin et al., 2006), silica (Allcock et al., 2011), or sapphire (Daniilidis et al., 2011). Excellent low-loss dielectric materials have loss tangents of ∼10−5. Typically the ion-trap
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1443
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 electrodes have a capacitance of just a few picofarads, which means that at trap frequencies of 1 MHz, even in the best case, EPR ≲10 G Ω. If such a trap electrode were to be isolated from its voltage source at the trap frequency, this would give rise to an ESR ≳1 Ω. To keep Johnson noise below such a level requires careful attention to the drive electronics and filters so that they absorb this noise from the electrodes, while filtering out the noise invariably coming from the power supplies. Los-
ses from magnetic components can be treated in a similar manner (again, characterized by a loss tangent). For example, being magnetic, a layer of nickel, which can be used as a barrier layer between gold and copper, can cause substantial losses at microwave frequencies (Shlepnev and McMorrow, 2011). This is unlikely to be a significant issue for ion traps as magnetic materials are generally avoided due to concerns over magnetic-field instability affecting the ion’s electronic states. More commonly-
, magnetic components in ion-trap systems include wire-wound inductors inside filters or resonators which lead to the trap electrodes. The quality factor Q relates an inductor’s real and imaginary impedances as
Q 1⁄4 ωL
RL
; ð42Þ
where L is the inductance of the inductor and RL is the effective series resistance of the inductor. If a filter inductor L 1⁄4 100 μH is intended to work at ω 1⁄4 2π × 1 MHz, and has a quality factor of Q 1⁄4 20, then it has an ESR of ∼30 Ω at this frequency. This resistance would then need to be correctly accounted for in any Johnson-noise analysis. To illustrate how such resistances are included in a full circuit analysis, two worked example calculations are given in Secs. IV.D.5 and IV.D.6. Ed-
dy-current losses in conductors near a wire carrying an alternating current can also cause the effective resistance of the wire to increase substantially above that expected from the bulk dc resistance (Poritsky and Jerrard, 1954). As an example, at 1 MHz, and at a distance ≃100 μm away from a nonmagnetic stainless-steel conductor, this effect would give an ESR of order 10 mΩ per cm of wire. This effective resistance could be enhanced by several factors. It increases with the magnetic permeability-
 of the nearby conductor, with a saturation of about 20 mΩ=cm at 1 MHz. Multiple turns of the current-carrying wire would increase the effect with the square of the number of turns. Additionally, as the frequency is increased, the effective resistance due to eddy-current losses scales roughly proportionally. Details are given by Poritsky and Jerrard (1954). One situation in which this effect is of particular relevance to ion-trap experiments is when a shield is placed over a helical resonator or w-
ire-wound inductor. The resulting drop in the inductor’s Q is due to these eddy-current losses.
2. Characteristic distances
The characteristic distance of a system D, as given in Eq. (38), determines the conversion of voltage fluctuations on the electrode to electric-field fluctuations at the position of the
trapped ion. Electric-field-noise measurements in ion traps usually report the minimum ion-electrode distance d. While this is often much simpler to determine, it is generally quite different from the characteristic distance D. Indeed, for some noise sources and geometrical symmetries the characteristic distance can tend to infinity. This would, for instance, occur due to common-mode rejection in the case of perfectly correlated noise on the rf electrodes, provided the ion was perfectly localized -
on the rf null. In general, there can be several characteristic length scales, corresponding to the particular components of the electric field and to the particular trap electrode under consideration. If a voltage is applied to the jth electrode, and the ith component
of the resulting electric field EðjÞ
i is considered, then the corresponding characteristic distance is (Leibrandt, Yurke, and Slusher, 2007)
Di;j 1⁄4 Vj=EðjÞ
i : ð43Þ
Closely related to the characteristic distance is a dimensionless quantity called the dipole geometrical efficiency factor κi;j. This relates the ion-electrode separation to the characteristic distance as
κi;j 1⁄4 2dj
Di;j
1⁄4 2djEðjÞ
i
Vj
; ð44Þ
where dj is the distance of the ion from the jth electrode, and the factor of 2 ensures that the efficiency is equal to 1 for an ion held halfway between a pair of parallel plates.
The term geometrical efficiency factor is often used in the literature to refer to either the dipole efficiency factor (Deslauriers, Olmschenk et al., 2006) or the quadrupole efficiency factor (Madsen et al., 2004; Hughes et al., 2011). For clarity, we highlight the fact that the present discussion of κi;j concerns the dipole geometrical efficiency factor. For the simple geometries considered in this section (IV.D.2), symmetry dictates that there is only one direction in which the ion can be heate-
d. The heating is also entirely due to just one voltage (or voltage difference) of interest. For simplicity, the subscripts for κ, d, D, V, and E will therefore be omitted for the remainder of this section. The results, however, can be readily generalized to more complicated structures. If the geometry of a trap is uniformly scaled then κ is constant, D ∝ d, and β 1⁄4 2. If, however, some dimensions of a trap are changed while others remain constant, then one must solve for the electric field as a-
 function of the changing geometry to calculate κ, D, and β. There exist a limited number of geometries for which the characteristic distances can be analytically calculated; in general it must be found numerically. Three geometries are considered here: planar, spherical, and needle geometries. In the first instance they are all calculated analytically. A more complicated, and realistic, needle geometry is then calculated numerically. • Planar geometry: An often-used idealization for determining t-
he effects of voltage noise on the electrodes is to approximate the trap by two parallel and infinitely
1444 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 extended plates (Lamoreaux, 1997; James, 1998; Wineland, Monroe, Itano, King et al., 1998; Wineland, Monroe, Itano, Leibfried et al., 1998; Henkel, Pötting, and Wilkens, 1999). This configuration approximates the situation for an ion trapped above a planar microtrap, provided the spatial distribution of the noise on the surface is uncorrelated to the electrode geometry, and no other length scale enters the situation. It also describes the limit in which the ion-surface distance is much smaller th-
an any features on the trap such as the extent or curvature of the electrodes. The electric field normal to two plates separated by a distance s, and due to a voltage difference V, is simply V=s. In any real geometry consisting of large but finite planes there exists some far-field ground, such as the vacuum chamber. As the theoretical model at hand considers infinite planes there is no quadrupole term and no pseudopotential minimum in which an ion might be trapped. The position of the ion between-
 the plates is thus arbitrary. However, when considering the distance scaling of noise for the system the only distance scale present is the separation of the plates s. It follows that D ∝ s, and it might reasonably be assumed that d ∝ s. The distance-scaling exponent of the electric-field noise is then β 1⁄4 2. • Spherical geometry: Another idealized geometry consists of two spherical electrodes of equal radius Rel, held a distance s apart, and a far-field ground. In this geometry, given the appl-
ication of an appropriate rf voltage to both spheres, the ion would be trapped halfway between the two spheres. This configuration is sometimes used to approximate a needle trap or the end caps of a linear Paul trap. Provided s ≫ Rel, the charge distribution on the surface of the spheres gives the same electric field halfway between the two spheres as that of two point charges located at the spheres’ centers. Under such circumstances, and considering voltage noise for which there is a voltage diff-
erence V between the two spheres, the electric field at the center of the ion trap is
E 1⁄4 CV
4πε0d2 ; ð45Þ
where C is the capacitance of the two conducting spheres and d 1⁄4 s=2. The capacitance of one sphere in such a two-sphere system C ≃ 2πε0ðRel þ Re2l=sÞ (Lekner, 2012) allows for an analytical solution of the field to be found in the limit s ≫ Rel. With reference to Eq. (43),
the characteristic length scale is then D 1⁄4 2d2=Rel. The dipole geometrical efficiency factor is κ 1⁄4 Rel=d and the distance-scaling exponent is β 1⁄4 4. • Needle geometry: Another geometry which has been studied in ion-trap experiments is that of two needle electrodes (Deslauriers, Olmschenk et al., 2006). In the experimental realization, an ion is trapped halfway between the two needle tips. The distance d between the ion and the needle tip can be varied. The expected electric-field noise due-
 to voltage noise on the electrodes can be calculated by solving the Laplace equation
∇2Φ 1⁄4 0, where Φ represents the potential everywhere in space, and the voltages on the electrodes represent the boundary conditions for solving this differential equation. The electric field is then E 1⁄4 −∇Φ. If the needle electrodes are approximated by hyperbolic surfaces of revolution [see Fig. 13(a)], then the Laplace equation for the electric field can be solved in prolate spheroidal coordinates (Chen and Davies, 1996). This approximation has the advantage that it can be solved analytically-
, although it suffers from the limitation that the radius of curvature of the needle tips cannot be independently specified of the taper angle of the needle tips. As with the planar geometry, the absence of a far-field ground in the mathematical model means that no trap is formed with the application of an rf voltage to the electrodes. However, for the purpose of calculating the heating rate due to voltage noise on the needle tips, the model does provide some insight. Consider two hyperbolic needl-
e tips with radius of curvature Rel and separated by a distance 2d. The electric field halfway between them is given by
E1⁄4V
d
v0
ln 1⁄2ð1 þ v0Þ=ð1 − v0Þ ; ð46Þ
FIG. 13 (color online). Distance scaling of Johnson noise for a needle trap. (a) Electrode geometry considered for the analytic result given in Eq. (46). (b) Electrode geometry used for the numerical calculation of the electric field at the center of a needle trap. The taper angle is 4° and a conducting ground sleeve, 3 mm inside diameter, is recessed 2.3 mm from the tips. This geometry was chosen to approximate the experiment of Deslauriers, Olmschenk et al. (2006). (c) The dipole efficiency fact-
or κ defined in Eq. (44) plotted as a function of the tip separation.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1445
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 where v0 1⁄4 ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
1=ð1 þ Rel=dÞ
p and V is the potential difference between the two tips. With reference to Eq. (43), this simplified needle geometry has a characteristic distance
D 1⁄4 d ln
 1 þ v0 1 − v0
 =v0;
which can be fitted by a power law in order to estimate the distance-scaling exponent β for a particular trap geometry. Taking Rel 1⁄4 3 μm and approximating Eq. (46) over the range 30 μm < d < 200 μm with a power law of the form d−β gives β ≅ 2.4. This is sensitively dependent on parameters such as tip radius of curvature Rel and the exact range of distances d. For this example, if d has an uncertainty of  5 μm and Rel has an uncertainty of  1 μm, then β 1⁄4 2.4ð2Þ. For more realistic electrode g-
eometries the electric field due to a voltage difference between the two tips must be calculated numerically. Figure 13(b) shows a geometry similar to that described by Deslauriers, Olmschenk et al. (2006). The needle electrodes have a tip radius of curvature Rel 1⁄4 3 μm and a taper angle of 4°. Also included are ground sleeves of 3 mm inside diameter, recessed 2.3 mm from the needle tips and electrically isolated from the needles with an alumina tube. Considering the dipole efficiency factor κ, -
Fig. 13
(c) compares the numerically evaluated results6 to those obtained analytically from Eq. (46). This numerical example confirms the overall trend of κ for a realistic electrode configuration and, at least for this specific geometry, the absolute value deviates by no more than a factor of 2 from the analytic prediction. By fitting the numerically calculated characteristic distance D to a power law and assuming that the measured ion-electrode separation has an uncertainty of  5 μm [which is the uncert-
ainty claimed by Deslauriers, Olmschenk et al. (2006)] then the predicted value of β is 2.5(2). Comparison of these simulation results with experimental results is discussed in detail in Sec. VI.A. • Rough surfaces: An issue related to the distance scaling of Johnson noise concerns the effect of the electrode surface not being geometrically smooth. Small features on the electrode could give rise to a local enhancement of Johnson noise. For instance, if there is a small cylindrical cone with a sphe-
rical end tip protruding above the surface, then, assuming its tip radius rcc is much smaller than its height, its resistance is given by (Deslauriers, Olmschenk et al., 2006)
R 1⁄4 ρe
πrcc tan θcc
; ð47Þ
where ρe is the bulk resistivity and θcc is the angle of the cone. Therefore, a small crystal of gold with a radius of a
few nanometers at the tip, growing from the surface of an ion trap, could be equivalent to a nanometer-sized electrode having a resistance of several ohms. If the surface is populated with patches of a poor conductor, such as an oxide (Harlander et al., 2010; Steinhauer et al., 2011; Wang et al., 2011), then small patches with orders-of-magnitude higher resistances could be expected. The noise due to such patch potentials, while having its origin in Johnson noise, would have a different distance s-
caling. The distance scaling of patch potentials is discussed in Sec. V.
3. Temperature scaling of Johnson noise
From Eq. (40) it should be expected that the level of Johnson noise varies with temperature. The exact relationship is complicated by the temperature dependence of the various resistances involved. Many metals’ resistance varies as R ∝ T. This would suggest, in the simplest case, that γ 1⁄4 2. That being said, at low temperatures, materials can depart significantly from such simple behavior (Ekin, 2007). This applies both to the simple materials such as the trap electrodes and to any electronic co-
mponents which may be held at cryogenic temperatures. Finally, note that even if the trap itself is cooled, it may be that not all of the attendant electronics is at the same low temperature. This will further complicate the picture of any temperature scaling. Ultimately, each individual experiment must be modeled properly to check what value of γ would be expected and how that value might change in different temperature regimes.
4. Absolute values of Johnson noise
The expected noise above a surface due to Johnson noise in electrical circuits has been extensively modeled by Leibrandt, Yurke, and Slusher (2007). (Their main results for two specific examples are plotted in Fig. 23 as points [A] and [B].) Point [A]a, at ∼10 × 10−12 V2=m2 Hz, corresponds to the expected axial electric-field noise 60 μm above a surfaceelectrode segmented linear ion trap, due to the Johnson noise of the electrode material and attendant filter electronics. [A schematic of the kind -
of trap envisioned is shown in Fig. 1(h).] The calculation was made for an ion situated directly above the gap between two electrode segments, such that it is sensitive to the uncorrelated nature of the noise between the two electrodes. The calculated level of noise in this instance is comparable to the level of noise observed in a number of traps of similar size. Point [A]b, at ∼1 × 10−12 V2=m2 Hz, corresponds to the expected axial electric-field noise in the same trap as before, but at a positio-
n above the center of a segment. As the ion is above the center of an electrode, and Johnson noise on the electrode is correlated, the axial heating rate is lower. Point [B] in Fig. 23, at ∼2 × 10−14 V2=m2 Hz, indicates the expected level of axial electric-field noise due to the Johnson noise of the electrode material and filter electronics in a twolayer segmented linear ion trap. The geometry considered is similar to a segmented version of the trap shown in Fig. 1(f), with an ion-electrode separa-
tion of ∼300 μm. The calculation was modeled after the geometry and electronics used by Rowe et al. (2002). The noise is around a factor of 20 below the level
6Using COMSOL Multiphysics v3.4.
1446 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 measured experimentally by Rowe et al. (2002) (point [10]a in Fig. 23).
5. Johnson noise in a filter network
In the preceding sections the Johnson noise due to various individual electronic elements was discussed. In any given experiment, each such element forms part of a larger circuit, and it is the effect of the entire circuit on the ion which is important. By way of illustration, this section provides a worked example of how to calculate the expected Johnson noise from an RC filter network, shown in Fig. 14. The circuit considered consists of a dc voltage source Vdc, which has its technical noise fil-
tered by around 60 dB at 1 MHz using an RC filter network composed of resistors and capacitors. This is the same circuit as is used by Harlander (2012) to drive and filter dc electrodes in a segmented microscopic ion trap. The first capacitor C1 is simply a filter capacitor. For this analysis, the second capacitor C2 lumps together a second stage of filter capacitors with the capacitance of the trap and the wiring. It is assumed that all capacitors are ideal and lossless. The resistors in this mod-
el correspond to resistive components in the RC circuit. Neglecting any technical noise from the voltage source, under the assumption that the filter network is able to sufficiently attenuate it, we consider the Johnson noise from the components in the filter network itself. This is calculated by considering the effective real resistance of the circuit from the perspective of the ion. This is the effective real resistance across terminals 1 and 2 in Fig. 14. The impedance of the circuit across ter-
minals 1 and 2, Z12, at frequency ω is calculated using the usual rules for parallel and series lumped circuit elements:
Z12 1⁄4 −i
ωC2
∥
 
R2 þ
 
R1∥ −i
ωC1
  
; ð48Þ
where the notation a∥b denotes the impedance of two elements in parallel which have impedance a and b, respectively; i.e., a∥b 1⁄4 ab=ða þ bÞ. The effective real resistance R12 is then
R12 1⁄4 C21R21ω2R2 þ R2 þ R1
ω2fC221⁄2C21R21ω2R22 þ 2R2R1 þ R22 þ 1⁄2R1ðC2 þ C1Þ2g þ 1:
ð49Þ
Considering a circuit in which the frequency of interest is well above the cutoff of the first filter stage (ωR1C1 ≫ 1), and also in which R1 ≪ R2 and C1 ≫ C2, Eq. (49) can be approximated by
R12 ≃ R2
ðωR2C2Þ2 þ 1 : ð50Þ
This demonstrates that above the cutoff frequency of the RC filter, i.e., ωR2C2 > 1, the effective real resistance that the ion sees decreases as the second-stage filter resistance R2 is increased. Physically this can be understood by noting that, as the filter resistance is increased, the increase in noise from the resistors themselves is outweighed by the increased attenuation of thermal noise by the low-pass filter network. By way of an example, we consider the expected level of noise for the c-
omponents used in the experiment of Harlander (2012). With resistances of R1 1⁄4 160 Ω, R2 1⁄4 2.85 kΩ, and capacitances C1 1⁄4 1 μF, C2 1⁄4 55 pF, the level of Johnson noise at 1 MHz corresponds to that of a resistor of R12 ≃ 1.4 kΩ. From Eq. (39), the expected spectral density of
the voltage noise is SV ≃ 2 × 10−17 V2=Hz. Considering electrodes with a characteristic distance of D 1⁄4 2000 μm, by Eq. (40) this voltage noise corresponds to an electric-field noise at the position of the ion of SE ≃ 6 × 10−12 V2=m2 Hz per electrode. Assuming the noise is uncorrelated between the electrodes (as is the case if they are individually filtered), and assuming that the ion is predominantly heated by the nearest four electrodes, the total expected field noise is SE ≃ 24 × 10−12 V2=m2 -
Hz. Increasing the second-stage resistor to R2 1⁄4 7.95 kΩ would reduce the electric-field noise
at the ion to SE ≃ 14 × 10−12 V2=m2 Hz. These results are discussed further in Sec. VI.D. By way of caution, we stress the illustrative nature of this calculation. The details of the analysis, and particularly the approximations made for particular regimes of operation, are specific to this example. Consequently, Eq. (50) is not to be considered as a generally applicable solution for RC filter circuits; the ESR of a circuit must be calculated for each specific case.
6. Johnson noise in an rf resonator
This section provides a second worked example, calculating the Johnson noise expected from a resonator. Unlike Sec. IV.D.5, this example explicitly considers losses in inductive and capacitive elements. The resonator design, shown in Fig. 15(a), is typical of the kind of circuit used to provide rf voltages to an ion trap. The trap-drive signal at frequency Ωrf is provided by an rf source Vrf with a source resistance of RS. The source is impedance matched to an LC resonator using a lossless transfo-
rmer. The resistance RL 1⁄4 ωL=Q þ Rwires lumps together the losses from the inductor at frequency ω [see Eq. (42)] with any resistance of the trap electrodes or wires Rwires. The lumped capacitance of the trap’s electrodes and wires is represented by a single capacitor with capacitance C. The dielectric loss associated with this capacitance is represented by an EPR of RC 1⁄4 1=ðωC tan θÞ [see Eq. (41)], where tan θ is the effective loss tangent of the capacitor C. To analyze the circuit in Fig. 1-
5(a) a significant simplification can be made, as shown in Fig. 15(b). The voltage source Vrf, its source resistance RS, and the matching transformer can be replaced with an equivalent matched voltage source VMrf , that has a source resistance RMS. This
V
dc
R
1 R2
C1 C2
1
2
FIG. 14. Schematic representation of a second-order RC lowpass filter. Capacitor C2 lumps together the capacitance of the trap with that of the filter capacitors.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1447
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 can be understood by noting that on resonance, by definition, the inductance and capacitance of a resonator cancel, so that the resonator’s equivalent circuit impedance is purely real. The purpose of the matching transformer is to ensure that, on resonance, the matched source impedance is equal to the equivalent series impedance of the LC network. Consequently, the matched source impedance must be purely real. The equivalent series impedance of the LC network (including all losses) can be calcula-
ted using the usual rules for parallel and series lumped circuit elements:
ZESRðωÞ 1⁄4 RLðωÞ þ iωL þ
 
RCðωÞ∥ −i
ωC
 
: ð51Þ
On resonance the imaginary part of the impedance goes to zero and the inductance is
L1⁄4 1
Ωr2fCð1 þ tan2θÞ : ð52Þ
If tan θ ≪ 1, then Ωrf ≈ 1= ffiffiffiffiffiffiffi
LC
p . The matched source resistance RMS is equal to the ESR on resonance ZESRðΩrfÞ:
RMS 1⁄4 RLðΩrf Þ þ RCtan2θ
1 þ tan2θ : ð53Þ
For small loss angle θ, this gives
RMS 1⁄4 Ωrf L
Q þ Rwires þ θ
Ωrf C : ð54Þ
The first term in Eq. (54) is due to losses in the inductor. The second term corresponds to losses in the resistive elements in the circuit. The third term gives the dielectric losses. The impedance of the circuit across terminals 1 and 2 at frequency ω is then
Z12ðωÞ 1⁄4 RCðωÞ∥ −i
ωC∥ðRLðωÞ þ iωL þ RMSÞ: ð55Þ
Assuming, as before, that θ ≪ 1, the real part of this impedance is
R12 1⁄4 CθL2ω3 þ CθωðRL þ RMSÞ2 þ RL þ RMS
C2ω2ð1 þ θ2Þ1⁄2L2ω2 þ ðRL þ RMSÞ2 þ 2Cω1⁄2θðRL þ RMSÞ − Lω þ 1 : ð56Þ
To make physical sense of Eq. (56), two frequency regimes are now considered. The first regime considers noise at a much lower frequency than the drive circuit’s resonant frequency ω ≪ Ωrf. This regime is important because ions can be heated by noise at their secular frequency ωt ≪ Ωrf. Assuming that the capacitor does not low-pass filter the noise coming from the voltage source (i.e., ωRMSC; ωRLC ≪ 1), and that the resistance of the wires is much less than the effective resistance of the inductor-
 (Rwires ≪ Ωrf L=Q), the total effective resistance across terminals 1 and 2 is simply equal to the matched source resistance:
R12 ≈ RMS 1⁄4 Ωrf L
Q þ Rwires þ θ
Ωrf C : ð57Þ
Consider some reasonable experimental parameters for a resonator circuit: Ωrf 1⁄4 2π × 29 MHz, Q 1⁄4 200, θ 1⁄4 0.01, C 1⁄4 5 pF, and L 1⁄4 6 μH. For frequencies ω ≪ Ωrf , the
matched source resistance dominates over the resistances in the LC resonator itself, i.e., RMS ≫ RL; θ=Ωrf C. With a value of RMS ∼ 17 Ω this gives rise to a voltage noise of SV ≈ 3 × 10−19 V2=Hz. A second frequency regime of interest is when the frequency of the noise ω is close to the ion’s motional sideband frequencies Ωrf   ωt, where ωt=Ωrf ≪ 1. In this case, the presence of the resonator can considerably enhance the effective resistance across terminals 1 and 2. Using Eq. (56) and assuming, a-
s before, that ΩrfRMSC; ΩrfRLC ≪ 1 and Rwires ≪ ΩrfL=Q, the resistance across terminals 1 and 2 is
R12ðΔωÞ ≈ 2ΩrfL=Q þ θ=ΩrfC þ θΩrfL
4Δω2=Ωr2f þ 2ð2=Q þ θÞð1=Q þ θÞ ; ð58Þ
where Δω is the difference between the frequency of the noise ω and the trap-drive frequency Ωrf. Continuing with the experimental parameters listed, the effective resistance at each
R
S RL
C
V
rf
1
2
L
R
C
(a)
RMS RL
C
1
2
L
RC
(b)
Mrf
V
FIG. 15. Resonator circuit. (a) Schematic representation of a tank resonator which uses a perfect transformer to match the resonator’s resistance on resonance RL to that of the source impedance RS of the voltage source Vrf. (b) To simplify the analysis, the voltage source and matching transformer can equivalently be considered a perfectly impedance matched voltage source.
1448 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 of the sidebands R12ðωtÞ is around 1.6 kΩ, with an associated
voltage noise of SV ≃ 2 × 10−17 V2=Hz. The relationship between voltage noise on the electrodes near the trap-drive frequency and the level of heating in the presence of excess micromotion is given by Eq. (13), which is derived in Appendix B. Considering some indicative numbers, in a trap with a characteristic quadrupole distance of Dq 1⁄4 100 μm, where the ion is displaced by Δx 1⁄4 3 μm from the rf null, the stated level of voltage noise would contribute a heating rate of several phonons per sec-
ond. This heating rate increases with the square of the ion’s displacement from the rf null. The ðΦ0r0f Þ2 term in Eq. (13) means that, all other things being equal, excess-micromotion-induced heating scales with Γrf
h ∝ Dq−4.
7. Technical noise
Technical noise is defined for this review as noise coming from power supplies and other voltage sources such as DAC cards. Technical noise can be modeled as a resistor which is very hot (Wineland, Monroe, Itano, Leibfried et al., 1998) or very large (Lamoreaux, 1997). Considering the likely range of absolute values for the noise, many dc power supplies and DACs used for experiments have specifications which allow an upper limit to be put on the level of any such technical noise. A typical power s-
upply might have 5 mV of noise spread across 20 MHz (1 μV=Hz1=2) which, using Eq. (39), is equivalent to the Johnson noise on a 75 MΩ resistor at 300 K. This would require 80 dB of filtering at the trap frequency to reduce this technical noise to a level comparable with the Johnson noise expected from the bulk resistance of the trap electrodes (∼1 Ω). With such filtering and a characteristic distance D 1⁄4 1000 μm, the expected spectral density of electric-field noise at the position of the ion wo-
uld be of SE ∼ 10−14 V2=m2 Hz. Such aggressive filtering is possible, but not trivial. Moreover, it is easy for such filter electronics to have low-Q inductors [cf. Eq. (42)] or loops of wire subject to EM pickup (see Sec. IV.C) which can themselves become a more significant source of noise than the filtered technical noise. The frequency-scaling exponent α of technical noise could take any value as the device could exhibit resonances. Distance scaling of technical electric-field noise would go as-
 1=D2, since it is proportional to the voltage noise on the electrodes [cf. Eq. (38)]. It might be expected that the technical noise would not change with temperature (i.e., γ 1⁄4 0). That being said, if the filters change their response as the temperature changes, a nonzero value of γ would be expected.
E. Space charge
Most models of ion-trap experiments assume that the vacuum is neutral. However, if some mechanism produces moving charges within the vacuum, this would cause electricfield noise at the position of the trapped ion. A common source of charge in vacuum, which has been documented in ion traps (Wineland, Monroe, Itano, Leibfried et al., 1998), is electron emission from electrode surfaces.
The mechanism of electron emission in any instance depends on the details of the experiments: Field emission is made more likely by sharp points, rough electrode surfaces, or high voltages (Murphy and Good, 1956). Thermal emission is made more likely by high voltages or locally hot electrodes (Murphy and Good, 1956). Photoelectric emission is made more likely by use of short-wavelength laser light (Linford, 1933). Regardless of the emission mechanism, the effect on the trapped ion is similar. Elec-
trons escaping the surface of a cathode follow the field lines created by the high-voltage trap drive and terminate at an anode. These moving charges create electric-field noise at the position of the ion, leading to heating. Effects due to secondary charges which might be ejected by electron bombardment of the anode are not considered here. Under typical ion-trap conditions it takes ≲100 ps for an emitted electron to traverse the trapping region. The rf trap drive is therefore essentially static -
during the process. As the emitted electron follows the arc of the electric-field line from the cathodic to the anodic electrode its distance from the trapped ion varies. Even without solving for the exact electrostatic field of a particular trap geometry, a quantitative analysis of a single electron passing through an ion trap is instructive. The Coulomb force between an emitted electron and a trapped ion can be modeled as a Gaussian pulse of temporal width τe with an amplitude of e2=4πε0d2. Here-
 d is the average distance from the ion to the emitted electron as the electron travels from the cathode to the anode and is assumed to be equal to the distance from the ion to the nearest electrode. Fourier analysis shows that, below νe 1⁄4 1 GHz, the single-sided energy spectral density of the electric-field
noise SðSCÞ
EE during the electron emission is frequency independent and given by
SðSCÞ
EE 1⁄4 2π
  eτe 4πε0d2
 2
: ð59Þ
The spectral density of the electric-field noise SðSCÞ
E for an electron-emission rate of Γe is then
SðSCÞ
E 1⁄4 2πΓe
  eτe 4πε0d2
 2
: ð60Þ
Assuming τe 1⁄4 100 ps and d 1⁄4 100 μm, an average emission
current of 1 nA leads to noise of order SðSCÞ
E ∼ 10−11 V2=m2 Hz. This level of noise is comparable to that seen in some ion-trap experiments (cf. Fig. 8). Note that there are several factors which may enhance electron emission and increase the field noise in the vicinity of the ion (Murphy and Good, 1956), including coating the electrodes with low work-function materials (e.g., Ba, Sr, Yb, and Ca). As can be seen from Eq. (60), the point charges emanating from the surface of the electrodes would generate noise which exhibited a distance scal-
ing of β 1⁄4 4, provided all other operating parameters remain constant. An electron-emission current of the magnitude considered here, and the associated field noise, could be detected and engineered away (Wineland, Monroe, Itano, Leibfried et al., 1998). Nonetheless, the possibility of such
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1449
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 noise levels demonstrates the importance of checking for, and, where necessary, eliminating electron emission in ion traps. While this estimate assumes electron-emission events to be temporally uncorrelated, many electron-emission experiments have seen that electron-emission noise follows a periodic or oscillatory nature, which is not white noise in character (Tringides and Gomer, 1986; Dharmadhikari, Khairnar, and Joag, 1991). It is additionally possible that the time-dependent voltage of the tr-
ap drive at frequency Ωrf could give rise to periodic field-induced electron-emission currents at that frequency. The electron-emission current would then resemble a regular series of pulses, each of width τe, with an average temporal spacing at the period of the trap drive 2π=Ωrf . The noise estimate arising from Eq. (60) would hold at frequencies ω ≪ Ωrf, since the shot noise characteristics would dominate. However, the correlation of the electron-emission current at the trap-drive frequency wou-
ld enhance the field noise at harmonics of the trap-drive frequency.
V. MICROSCOPIC MODELS FOR NOISE ABOVE NONIDEAL SURFACES
In the analysis of Sec. IV it was usually assumed that, in the relevant frequency range of ωt=2π ∼ MHz, the whole trap electrode can be described as an ideal equipotential. This assumption is not in general true for real metallic surfaces, where regions of different crystal orientation, surface roughness, or adsorbed atoms and compounds lead to local variations of the potential (Herring and Nichols, 1949). These patch potentials play an important role in many areas of physics and represent, for ex-
ample, an experimental limitation for precision measurements of the Casimir-Polder force between closely spaced metallic plates (Sandoghdar et al., 1992; Harber et al., 2005) or gravity tests with charged elementary particles (Camp, Darling, and Brown, 1991; Darling et al., 1992). It was first conjectured by Turchette et al. (2000) that fluctuating patch potentials on the electrodes could also be the source of the unexpectedly high heating rates observed in ion traps. Turchette et al. (2000) showe-
d that, for a simplified spherical trap geometry, local rather than extended voltage fluctuations lead to a d−4 scaling and therefore a strong enhancement of heating rates for small trap dimensions. Subsequent studies have investigated in more detail how the distance scaling is affected by finite patch sizes and by the electrode geometry. The general theoretical framework and the main theoretical predictions for patch-potential heating are summarized in Sec. V.A. A class of models which may also b-
e invoked in consideration of the noise seen in ion traps involves two-level fluctuators (TLFs), in which a particle can occupy, and fluctuate between, one of two states. The instance in which TLFs are distributed in a thin layer on the electrode surface provides a special case of patch potentials which is considered in Sec. V.B. These models provide valuable predictions for distinguishing between, for example, noise sources which lead to global fluctuations of the electrode voltage and noise sour-
ces related to microscopic processes on the electrode surface which lead to local fluctuations. However, the patchpotential model itself does not make any predictions regarding the origin of these fluctuations. Sections V.C and V.D of this
review describe different microscopic processes, namely, fluctuating adatomic dipoles and adatom diffusion, which have been suggested as potential underlying mechanisms for localized field fluctuations. The analysis of these processes provides additional predictions for the frequency and temperature scaling of the noise.
A. Patch-potential models
1. Origin of patch potentials
The term “patch potential” refers quite generally to a local variation of the potential on an otherwise homogeneous, biased electrode surface. Different mechanisms are predicted to produce such microscopic potential variations. Most commonly patch potentials are attributed to regions of different crystal orientations and surface adsorbates (Antoniewicz, 1974; Gomer, 1990; Nonnenmacher, O’Boyle, and Wickramasinghe, 1992; Rossi and Opat, 1992; Speake and Trenkel, 2003). For a clean and regular surfa-
ce the otherwise homogeneous density of the electrons inside the metal is distorted at the surface, which creates an effective dipole layer at the metal-air interface. This dipole layer changes the work function W of the electrode by ΔW 1⁄4 eΦp. Here e is the charge of the electron and Φp is the patch potential, which is related to the dipole moment per unit area P by (Jackson, 1999)
Φp 1⁄4 P=ε0: ð61Þ
The value of P depends on the material’s surface properties, in particular, on the relative orientation of the crystal lattice and the surface. Consequently, small regions of different crystal orientation can lead to variations of Φp over microscopic distances. A similar effect arises from adsorbed atoms and molecules, which are polarized when approaching the surface and form additional dipole layers. The static potentials of metallic surfaces have been measured using various methods. From thermio-
nic-emissioncurrent experiments, it is known that the work function of metal surfaces can vary by several tens of millivolts, depending on the crystal orientation (Herring and Nichols, 1949). On gold surfaces patch potentials with sizes ranging from 10 nm to 10 μm and Φp ∼ meV have been measured using Kelvin probes (Camp, Darling, and Brown, 1992; Rossi and Opat, 1992). The surface dipoles created by adsorbates can be directly observed on the level of single atoms in precision experiments with col-
d trapped atoms. For example, Obrecht, Wild, and Cornell (2007) utilized a magnetically trapped Bose-Einstein condensate to measure the electric-field distribution emanating from a cluster of Rb atoms adsorbed on various surfaces. The measured induced dipole moment of μ ∼ 5 D (debye) per atom is consistent with theoretical predictions for alkaline atoms absorbed on metallic surfaces. (1 D ≈ 3.33 × 10−30 Cm.) Finally, trapped ions have been used to investigate laser-induced surface dipoles (Harland-
er et al., 2010) and the long-term variations of stray electric fields over several months (Härter et al., 2014). While static patch fields on metal surfaces are relatively well understood, little is known about their fluctuations, in
1450 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 particular, in the MHz frequency regime of interest. Sections V.C and V.D describe several mechanisms which have been suggested in the literature to explain the observed heating rates in ion traps in terms of microscopic atomic processes on the surface.
2. Electric-field noise from fluctuating patches
Figure 16 illustrates the general setting of an ion which is trapped a distance d above an electrode with a radius of curvature Rel. The electrode is considered in general to be an equipotential at Φ0, while surface imperfections cause the electrode potential within different areas on the surface (“patches”) to be enhanced or reduced by an amount Φpðr; tÞ. For the following discussion the physical origin of these voltage variations is left unspecified, but it is assumed that potential fluctuations-
 are correlated only over a length scale rc ≈ Rp, which corresponds to the characteristic patch radius Rp. In the absence of additional free charges7 and by assuming that the potential difference Φpðr; tÞ occurs within a layer that is thin compared to the ion distance d; the electrostatic potential at the position of the ion ΦðrI; tÞ is the solution of the Laplace equation with boundary conditions given by Φ0 þ Φpðr; tÞ on the electrode surface S. By setting Φ0 1⁄4 0 for simplicity, the potential -
can in general be expressed as (Jackson, 1999)
ΦðrI; tÞ 1⁄4 −
Z
S
d2r ∂GEðrI; rÞ
∂ns
Φpðr; tÞ: ð62Þ
Here GEðrI; rÞ is the electrostatic Green’s function satisfying the Dirichlet boundary conditions, GEðrI; rÞ 1⁄4 0 for r ∈ S, and ns is a unit vector normal to the surface. The electric field projected along the trap axis is then given by EtðtÞ 1⁄4 −et · ∇ΦðrI; tÞ and the resulting electric-field spectrum can be written as
SðPPÞ
E1⁄4
Z
S
d2r1
Z
S
d2r2GðrI; r1ÞGðrI; r2ÞCV ðr1; r2; ωÞ:
ð63Þ
In Eq. (63)
GðrI; rÞ 1⁄4 et · ∇
 ∂GEðrI; rÞ ∂ns
 
r∈S
ð64Þ
is a geometric factor describing the electric field produced at the position of the ion from a small patch located at r on the electrode. The correlation function
CV ðr1; r2; ωÞ 1⁄4 2
Z∞
−∞
dτhδΦpðr1; τÞδΦpðr2; 0Þie−iωτ; ð65Þ
where δΦpðr; τÞ 1⁄4 Φpðr; τÞ − hΦpðr; τÞi contains all of the information about temporal and spatial correlations of the fluctuating patch fields at positions r1 and r2. While the exact dependence of CVðr1; r2; ωÞ on frequency and distance requires detailed knowledge about the microscopic origin of the patch potentials, a reasonable approximation to a real surface potential can be obtained by assuming that the electrode is covered by Np separate patches (Low, Herskind, and Chuang, 2011):
Φpðr; tÞ 1⁄4 N Xp
i1⁄41
ViðtÞχiðrÞ: ð66Þ
Here the step function χiðrÞ 1⁄4 0; 1 has a nonvanishing support only for values of r within the area Ai of the ith patch, and ViðtÞ denotes the fluctuating potential of this patch. By assuming that the voltage fluctuations between different patches are uncorrelated and described by the spectral density Si
V, this model leads to a correlation function
CV ðr1; r2; ωÞ 1⁄4 N Xp
i1⁄41
Si
Vχiðr1Þχiðr2Þ: ð67Þ
This can be further simplified by assuming Si
V ≈ SV. The voltage correlations described by Eq. (67) are nonzero only over the extent of individual patches which, for a sufficiently
homogeneous distribution, implies a correlation length
rc ≈ ffiffiAffiffipffi
p , where Ap is the average patch area.
3. Distance scaling for a planar trap
The influence of a finite patch size on the distance scaling of electric-field noise experienced by the ion is most apparent by considering the idealized case where the ion is trapped above an infinitely extended planar electrode. In this case the electrode dimension Rel → ∞ is eliminated from the problem and the remaining length scales are the correlation length rc and the ion-surface distance d. For a single, perfectly conducting plane specified by r 1⁄4 ðx; y; z 1⁄4 0Þ the Green’s function is s-
imply that of a charge plus its image charge inside the metal:
FIG. 16 (color online). Length scales considered in the patchpotential model. The ion is trapped at a distance d above an electrode of characteristic dimension Rel. Patch fields on the electrode produce local potential fluctuations Φpðr; tÞ, which are correlated over a length scale rc ≈ Rp set by the typical radius of the patches Rp.
7This is typically the case for metallic electrodes. Here surface charges are compensated by their image charges and form effective dipoles. However, this is in general not the case for charges located on insulating parts of the trap, where a different field distribution can arise.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1451
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 GEðrI; rÞ 1⁄4 1
4π
 1
jrI − rj − 1
jrI − r − 2zezj
 
: ð68Þ
Therefore, the resulting potential defined in Eq. (62) is equivalent to a potential being produced by a layer of surface dipoles covering the electrode, with a local dipole moment dμðr; tÞ 1⁄4 2ε0Φpðr; tÞdS per surface element dS. Note that since this dipole layer is located symmetrically around z 1⁄4 0, there is a factor of 2 compared to a layer of dipoles on top of the surface. For an ion located at rI 1⁄4 ð0; 0; z 1⁄4 dÞ the geometric factor given in Eq. (64) is explicitly given by GðrI; rÞ 1⁄4-
 gDðx; yÞ=ð2πÞ, where
gDðx; yÞ 1⁄4 2d2 − x2 − y2
jd2 þ x2 þ y2j5=2 ; et 1⁄4 ez; ð69Þ
gDðx; yÞ 1⁄4 −3dx
jd2 þ x2 þ y2j5=2 ; et 1⁄4 ex ð70Þ
describes electric-field fluctuations perpendicular and parallel to the electrode surface, respectively. In the limit of small patches, rc ≪ d, and with a surface coverage fraction of σp the integrals in Eq. (63) can be evaluated in a straightforward manner. As a result one finds
SðPPÞ
E;η1⁄4⊥;∥ ≃ sη
3σpAp
16πd4 SV ð71Þ
for the field fluctuations perpendicular (s⊥ 1⁄4 1) and parallel ðs∥ 1⁄4 1=2Þ to the surface. Equation (71) shows that the microscopic structure of the electrode surface can substantially modify the distance scaling of the noise, and would lead, at least for this simple geometry, to the often-cited d−4 scaling of trapped-ion heating rates. On gold surfaces static patch potentials with sizes ranging from 10 nm to 10 μm have been experimentally measured using Kelvin probes (Camp, Darling, and Brown,-
 1992; Rossi and Opat, 1992). The sizes of patches which could fluctuate at radio frequencies are unknown. From the theory presented here, in the limit rc ≪ d, the predicted scaling of the electricfield noise given in Eq. (71) is insensitive to the exact details of the patch correlation function. This is not the case for moderate or large patch sizes d ≲ rc. For example, an exponential correlation CV ðr1; r2; ωÞ ∼ e−jr1−r2j=rc leads to a
divergent spectrum SE ∼ d−1 for rc ≫ d (Dubessy, Coudreau, and Guidoni, 2009). In contrast, a sharp cutoff CVðr1; r2; ωÞ ∼ Θðrc − jr1 − r2jÞ, where ΘðrÞ is the unit step
function, results in SE ∼ dþ1, and thus a vanishing spectrum for large patch sizes (Low, Herskind, and Chuang, 2011). The prediction of such qualitatively and unexpectedly different behavior for essentially minor changes to CV is a consequence of the rather unphysical configuration of an infinite plane without additional ground electrodes. As a more appropriate approximation to a real trap, an ion confined between two planar electrodes separated by 2d can be considered. The Green’s function for th-
is configuration can be evaluated analytically, by taking into account the additional image dipoles at the planes z 1⁄4  4jd, where j 1⁄4 1; 2; .... Therefore, the analysis of a single plane can be repeated by replacing
gDðx; yÞ → ∞ X
j1⁄40
2d2ð2j þ 1Þ2 − x2 − y2
jd2ð2j þ 1Þ2 þ x2 þ y2j5=2 ; ð72Þ
and the summation can be carried out after changing to a Fourier representation (Dubessy, Coudreau, and Guidoni, 2009). The resulting electric-field spectrum is plotted in Fig. 17(a) for the two types of correlation function CV given previously. Consistent with the discussion of Johnson-like noise in a parallel-plate configuration, SE exhibits a d−2 scaling at larger patch sizes or small electrode separations, where the ion essentially sees the constant homogeneous field of a plate capacitor. At r-
c ≈ d, this crosses over to the d−4 scaling derived in Eq. (71), with effective patch areas Ap 1⁄4 2πrc2 and πrc2 for the exponential and steplike cutoff, respectively. Therefore, the configuration of two parallel plates can be used as a minimal toy model to describe the crossover from Johnson noise to patch-potential noise in ion traps.
4. Influence of the electrode geometry
As discussed in Sec. IV.D.2 for the case of Johnson noise, the expected distance scaling of the electric-field noise in realistic traps can considerably differ from that of an infinite planar geometry when the shape and finite electrode size is taken into account. For patch-potential noise, this dependence
(a)
(b)
FIG. 17 (color online). Electric-field noise from patch potentials. (a) Distance dependence of the electric-field noise SE for an ion trapped between two infinite parallel plates (inset) assuming an exponential (solid line) and steplike (dashed line) cutoff for the spatial voltage correlation function CV ðr1; r2; ωÞ. (b) The local distance-scaling coefficient βðdÞ defined in Eq. (73) for an ion trapped above a sphere of radius Rel (inset). The solid lines represent the limits for pointlike patches-
 (PP) for which rc → 0, and infinite patches (IP) for which rc → ∞. The dotted lines show the results for intermediate values of rc=Rel as indicated in the plot. Adapted from Low, Herskind, and Chuang, 2011.
1452 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 is further complicated by the existence of a second length scale given by the patch size rc. Low, Herskind, and Chuang (2011) carried out a detailed analysis predicting the electricfield noise scaling for various planar, spherical, and spheroidal electrode geometries. They introduced a “local” scaling coefficient, such that SE ∝ d−βðdÞ. On a double logarithmic plot of SE against d, the local scaling coefficient βðdÞ is then (minus) the local slope:
βðdÞ 1⁄4 − ∂ lnðSEÞ
∂ ln d : ð73Þ
They then studied the dependence of βðdÞ on the electrode distance d, the electrode geometry, and the characteristic patch size rc ≈ Rp. An example of this analysis is shown in Fig. 17(b), where βðdÞ is plotted for an ion at a distance d above a spherical electrode of radius Rel. A similar plot for a needlelike electrode (Fig. 24) is discussed in more detail in Sec. VI.A. Figure 17(b) shows that, for d ≫ Rel, Johnson noise and patch-potential models lead to a similar scaling. In the case of heatin-
g in a direction normal to the sphere’s surface this gives β 1⁄4 4. Only for distances d ≲ Rel, do the predictions from the two types of noise start to deviate significantly. A note of caution must be added to the interpretation of this plot for distances d < rc. As shown previously for the example of a planar geometry, the scaling in this regime of an ion above a single electrode can significantly differ from that of an ion located symmetrically between two electrodes. Similarly, it is expected t-
hat the scaling of a more realistic trap configuration modeled by two spheres will differ from the values shown in Fig. 17(b). However, this does not significantly affect the scaling for d ≥ rc.
B. Two-level fluctuator models
The assumption of homogeneous lattices and surfaces is only a crude approximation for real solids, where surface corrugations or lattice dislocations create local minima in the otherwise periodic potential landscape. In highly disordered systems or amorphous solids, this can lead to the formation of TLFs (Phillips, 1987), where electrons, atoms, or groups of atoms become localized in one of two nearby potential minima. The scenario considered here is depicted in Fig. 18. The localization of charge-
 means that TLFs on a surface can be considered as a specific class of patch potentials. Quantum tunneling through the barrier or thermally activated transitions over the barrier induce random jumps between the minima, causing fluctuations of the local dipole moment associated with the two distinct configurations. Phenomenological models based on the existence of a large ensemble of TLFs have been successfully used to explain the unusual low-temperature properties of glasses (Anderson, Halperin, a-
nd Varma, 1972; Phillips, 1972) or the appearance of current and voltage fluctuations with a 1=f frequency scaling (Dutta and Horn, 1981; Paladino et al., 2014). More direct measurements of two-level systems have recently been performed with superconducting qubits, where TLFs in the insulating layer of a Josephson junction have been spectroscopically resolved (Martinis et al., 2005) and the coherent
manipulation of individual two-level defects has been demonstrated (Neeley et al., 2008; Lisenfeld et al., 2010). In ion traps TLFs can potentially form in a disordered insulating layer on top of the metal electrode and the noise they generate leads to heating of the ion. Even though the precise microscopic origin or the number of defects is unknown, general predictions for the temperature and frequency scaling of this noise process already follow from a few reasonable assumptions regarding the di-
stribution of energy scales and relaxation times of the TLFs. The following section first discusses the electric-field noise spectra expected from a random distribution of fluctuating dipoles (Sec. V.B.1), and more specifically that from two-state systems (Sec. V.B.2), located in the vicinity of the electrode surface. Sections V.B.3 and V.B.4 then review two basic physical processes: thermal activation and quantum tunneling. These are most commonly considered in the solid-state literature for the -
modeling of noise with a 1=f spectrum. A less-frequently discussed fact is that nonuniform distributions of barrier heights in these models can lead to nontrivial temperature dependences and deviations from a strict 1=f scaling of the noise. These effects could play a role in observed temperature variations of α (Labaziewicz, Ge, Leibrandt et al., 2008) and are briefly described in Sec. V.B.5.
1. Electric-field noise from fluctuating dipoles
For an ion which is trapped above a metallic electrode, charge fluctuations within the electrode are efficiently shielded and net charges on the surface are compensated by their respective image charges in the metal. It can therefore be assumed that the relevant microscopic noise processes on the electrode are well described by a distribution of pointlike dipoles μðri; tÞ located at position ri within a thin surface layer of thickness h ≪ d [see Fig. 18(a)]. At the position of the ion the componen-
t along the trap axis of the total field EtðtÞ 1⁄4 et · EðrI; tÞ is then given by
(a)
(b)
FIG. 18 (color online). (a) General setup considered in Secs. V.B–V.D for the analysis of the electric-field noise generated from microscopic processes above a planar electrode. The noise processes are modeled by a distribution of pointlike dipoles μðri; tÞ located within a small layer above the metal surface. (b) Double-well potential representing the energy of an atomic or electronic two-state system. Δ is the “classical” energy difference between the two wells and Δ0 is the tunnel coupling.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1453
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 EtðtÞ 1⁄4 1
4πε0
X
i
1⁄23ðet · niÞni − et · μðri; tÞ
jri − rIj3 ; ð74Þ
where ni 1⁄4 ðrI − riÞ=jrI − rij is the unit vector pointing from the ion to dipole i. For a planar electrode, and assuming a sufficiently homogeneous distribution of dipoles with surface density σd, the electric-field fluctuations parallel and
perpendicular to the surface are given by SðTLFÞ
E;∥ 1⁄4 SðTLFÞ
E;⊥ =2
and
SðTLFÞ
E;⊥ 1⁄4 3π
2
σd
ð4πε0Þ2d4 S ̄ μ: ð75Þ
Here
 ̄Sμ 1⁄4 1
NA
N XA
i1⁄41
Siμ ð76Þ
denotes the averaged dipole-fluctuation spectrum of a large number NA ≫ 1 of fluctuators located within an area
A ≪ πd2, where Siμ 1⁄4 R−∞∞ dτhδμiðτÞδμið0Þie−iωτ is the spectrum of a single dipole with fluctuating dipole moment δμiðtÞ perpendicular to the surface. Note that Eq. (75) corresponds to the zero-correlation-length limit of the patch-potential model and therefore leads to the same d−4 distance scaling in the limit of a flat trap geometry considered here.
2. Two-level fluctuators
A single TLF can be formed either by a particle trapped in two proximal potential minima or by an extended atomic complex or lattice dislocation which can switch between two energetically favorable configurations. Both cases can be modeled by an effective particle moving in a double-well potential, as shown in Fig. 18(b). For the temperature regime of interest the dynamics of the TLF can be restricted to the two states jψLi and jψRi, with the corresponding wave functions being localized in the lef-
t or right minimum, respectively. If the two stable configurations are associated with different dipole moments, the dipole operator for a single TLF is ˆμðtÞ 1⁄4 ðμ=2ÞσzðtÞ, where σz 1⁄4 jψ RihψRj − jψLihψLj is the Pauli operator for the population difference between the two states. For a charged particle the dipole moment is μ 1⁄4 jejzw, where zw ∼ Å is the separation between the wells. In general, μ must be evaluated from the charge density of the full atomic complex in the two stable configur-
ations. If the TLF is in contact with a thermal reservoir, the mean value of the population imbalance relaxes to a stationary value according to
d
dt hσzðtÞi 1⁄4 − ðhσzðtÞi − hσzieqÞ
T1
: ð77Þ
Here hσzieq 1⁄4 − tanh ðETLF=2kBTÞ is the equilibrium value for a two-level system with energy difference ETLF, and T1 is the characteristic relaxation time. With reference to Fig. 18,
ETLF 1⁄4 ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
Δ2 þ Δ20
p which is equal to Δ in the classical limit
where the tunneling Δ0 can be neglected. According to the quantum regression theorem (Gardiner and Zoller, 2004), the population fluctuations hδσzðtÞδσzð0Þi obey an exponential decay which, for a single TLF, results in a simple Lorentzian shape for the dipole-fluctuation spectrum:
Sμ 1⁄4 μ2
2cosh2ðETLF=2kBTÞ
T1
1 þ ω2T21
: ð78Þ
For a large ensemble of fluctuators this spectrum must be averaged over a distribution of parameters and
 ̄Sμ 1⁄4 μ2
2
Z
dEdT1
PðE; T1Þ
cosh2ðE=ð2kBTÞÞ
T1
1 þ ω2T21
: ð79Þ
Here PðETLF; T1Þ is the probability density (per energy and time interval) of finding a TLF with energy difference ETLF and relaxation time T1, assuming approximately the same dipole moment μ for all TLFs.
3. Thermally activated fluctuators
For high temperatures or large barrier widths, quantum tunneling events can be neglected and the switching of the TLF is mainly induced by thermally activated transitions over the potential barrier of height Vb. For ETLF ≪ kBT < Vb the switching rates between the two minima are approximately the same and the relaxation time is given by the Arrhenius law (Arrhenius, 1889; Hänggi, Talkner, and Borkovec, 1990):
T1ðVbÞ ≃ τ0eVb=kBT : ð80Þ
The time scale τ0 is approximately given by the oscillation period of the particle in a single well and typically assumes values in the range of τ0 ≈ 10−12 − 10−14 s (Gomer, 1990; Ovesson et al., 2001). The height of the potential barrier is determined by electronic energy scales in the range of Vb ∼ 0.1 − 1 eV (Gomer, 1990). The exponential dependence of the relaxation rate on Vb results in a large range of possible switching times which, particularly at room temperature or below, lie within the -
relevant range of the trapped-ion oscillation time. With no further knowledge regarding the physical origin of the TLF it is reasonable to consider, as a first approximation, TLFs with a uniform distribution of energies ETLF up to a maximum energy Emax < kBT. It is also reasonable to assume (at least initially) that they take a uniform distribution of activation energies PðVbÞ 1⁄4 const, within an interval ΔV between Vmin and Vmax. The corresponding distribution of relaxation times is (Phillips, 1-
987)
PðETLF; T1Þ 1⁄4 1
Emax
kBT ΔV
1
T1
: ð81Þ
Within the frequency range expð−Vmax=kBTÞ < ωτ0 < expð−Vmin=kBTÞ this distribution results in an averaged spectrum
S ̄ μ ≃ 1
ΔV
πkBT
4ω μ2; ð82Þ
1454 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 which exhibits an ω−1 dependence on the frequency and a linear scaling with temperature. Note that Eq. (82) has been derived under the assumption that ETLF ≪ kBT and that the number of TLFs is independent of temperature. Deviations from these assumptions or nonuniform distributions PðVbÞ for the activation energies can lead to a different temperaturescaling behavior, as discussed in Sec. V.B.5. To estimate some typical values, in amorphous solids the density of TLFs is found to be ∼1046 J−1 m−1 (-
Phillips, 1987). We consider a system at T 1⁄4 300 K with a contamination layer of height h 1⁄4 10 nm (Daniilidis et al., 2014), which corresponds to a few tens of monolayers of adsorbates on top of the metal electrode. Assuming only TLFs of energy Emax ≲ kBT are active one expects an areal TLF density of σd 1⁄4 4 × 1017 m−2. By assuming potential barriers of about Vb ∼ ΔV ∼ 1 eV and a characteristic dipole moment of μ ∼ 5 D (Martinis et al., 2005), the resulting spectral density of electric-field-
 noise at ωt 1⁄4 2π × 1 MHz and at a distance d 1⁄4 100 μm above the trap is SE ≈ 1 × 10−12 V2=m2 Hz. This value is around the level seen experimentally in good (lownoise) traps (cf. Fig. 8).
4. Tunneling states
At lower temperatures, thermally activated switching events are strongly suppressed and, particularly for a small barrier width or low effective particle mass mTLF, quantummechanical tunneling through the barrier becomes important. In this case the TLF must be described by a quantummechanical two-level system with Hamiltonian (Phillips, 1987)
Hˆ TLF 1⁄4 Δ
2 σz − Δ0
2 σx; ð83Þ
where σz and σx are the usual Pauli operators in the subspace of the localized states jψLi and jψRi. For a separation zw between the wells, the tunnel amplitude depends exponentially on the barrier height Vb and can be estimated as (Phillips, 1987)
Δ0 ≈ ħ
τ0
e−λ; ð84Þ
where τ0−1 is the attempt frequency and λ is the tunneling parameter, given by
λ≈
ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi 2mTLF z2w V b =ħ2
q
: ð85Þ
The Hamiltonian given in Eq. (83) can be diagonalized and written as
Hˆ TLF 1⁄4 ETLF
2 σ~ z; ETLF 1⁄4
ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi Δ2 þ Δ20
q
: ð86Þ
Here σ~ z denotes the Pauli operator in the rotated eigenbasis j0~i 1⁄4 cosðφ=2ÞjψLi þ sinðφ=2ÞjψRi and j~1i 1⁄4 cosðφ=2ÞjψRi − sinðφ=2ÞjψLi, where tanðφÞ 1⁄4 Δ0=Δ. The TLF is coupled to phonons via deformation-potential interactions, which induce transitions between the energy
eigenstates j0~i and j1~i. The resulting relaxation rate of the TLF can be written as
T1−1 1⁄4
  Δ0
ETLF
 2
T−mi1nðETLFÞ; ð87Þ
where TminðETLFÞ is the minimum relaxation time in the case of a symmetric double well Δ 1⁄4 0. This rate is given by (Phillips, 1987)
T−mi1nðETLFÞ 1⁄4 E3TLF
2πρħ4
 Ξ21
v5
l
þ 2Ξt2
vt5
 
coth
  ETLF
2kBT
 
; ð88Þ
where ρ is the density of the electrode material, Ξ1 (Ξt) and vl (vt) are the deformation-potential constants (∼1 eV) and the sound velocity for longitudinal (transverse) phonon modes, respectively. For ETLF 1⁄4 Δ0 Eq. (88) shows a quadratic dependence of the relaxation rate on the tunneling coupling Δ0, which in turn depends exponentially on the tunneling parameter λ, i.e., on the barrier height Vb and the well separation zw. Consequently, the phonon-assisted tunneling mechanism leads to a broad -
distribution of relaxation times T1 similar to the case of thermally activated TLFs. By assuming a flat distribution for the parameter λ and the double-well asymmetry Δ ∈ f−Δmax; Δmaxg, the resulting distribution of energies and relaxation rates for tunneling states is (Phillips, 1987)
PðETLF; T1Þ 1⁄4 P0
2T1
ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
1 − TminðETLFÞ=T1
p : ð89Þ
Here P0 1⁄4 1=Δmax logðΔ0;max=Δ0;minÞ is a normalization constant, where Δ0;min and Δ0;max are the minimum and maximum values of Δ0. Note that in the rotated eigenbasis the dipole operator is μˆðtÞ 1⁄4 ðμ=2Þ cosðφÞσ~ zðtÞ and when integrating over the distribution PðETLF; T1Þ
in Eq. (79) an additional factor cos2ðφÞ 1⁄4 ðΔ=ETLFÞ2 1⁄4 1 − TminðETLFÞ=T1 appears. For low temperatures it can be assumed that the maximum TLF energy Emax ≫ kBT. The evaluation of the resulting integrals over ETLF and T1 then leads to an averaged dipolefluctuation spectrum of the form
 ̄Sμ ≈ P0
πkBT
4ω μ2: ð90Þ
By assuming a similar range for the distributions of energy offsets Δmax and barrier heights ΔV, this result is similar to that in Eq. (82), which was derived for thermally activated TLFs. Note that for the same temperature similar noise levels for tunneling states and thermally activated TLFs are expected. However, it should be emphasized that the common linear scaling with T in Eqs. (82) and (90) is coincidental. In the low-temperature regime the factor T accounts for the number of TLFs that are-
 thermally occupied and contribute to the spectrum. In the high-temperature limit the scaling with T is related to the thermally activated switching rate.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1455
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 5. Nonuniform distributions of activation energies
In Eq. (82) the ω−1 scaling of the noise spectrum with frequency and its linear scaling with temperature follow from the assumption of a uniform distribution of activation energies PðVbÞ. To explain the deviations from this behavior which are observed in current- and voltage-noise spectra in metals, TLF models with nonuniform distributions of Vb have been proposed (Dutta and Horn, 1981). By rewriting Eq. (79) as an integral over PðVbÞ it can be shown that the dominant contribution to the averaged -
spectrum comes from TLFs with a barrier height Vb ≈ −kBT logðωτ0Þ and for a nonuniform PðVbÞ the modified spectrum is of the form
 ̄Sμ ≈ μ2
 πkBT 4ω
 
P(Vb 1⁄4 −kBT logðωτ0Þ): ð91Þ
This result shows that any PðVbÞ ≠ const leads to a nonlinear temperature scaling of the TLF noise combined with corrections to the strict ω−1 frequency dependence. By defining a local frequency-scaling exponent αðω; TÞ 1⁄4 −∂ ln  ̄Sμ=∂ ln ω, Eq. (91) predicts a general relation between frequency and temperature dependence of the noise (Dutta and Horn, 1981):
αðω; TÞ 1⁄4 1 − 1
lnðωτ0Þ
 ∂ ln  ̄Sμ
∂ ln T − 1
 
: ð92Þ
For example, a power-law distribution PðVbÞ ∼ Vγ−1
b of
activation energies results in Tγ scaling of the noise (Labaziewicz, Ge, Leibrandt et al., 2008), and
αðωÞ 1⁄4 1 − γ − 1
lnðωτ0Þ : ð93Þ
For the frequency range of interest logðωτ0Þ ≈ −10 and for γ > 1 a small increase in the scaling exponent α is expected. A more natural scenario involves a peaked distribution of barrier heights. Considering, for example, a Lorentzian distribution of barrier heights centered at V0 and with a width ΔV (Dutta and Horn, 1981),
PðVbÞ 1⁄4 1
π
ΔV
ΔV2 þ ðVb − V0Þ2 : ð94Þ
For this distribution, and a particular choice of some physically reasonable parameters (V0 1⁄4 0.3 eV, ΔV 1⁄4
0.15 eV, and ωτ0 ≈ 10−6), the temperature dependence of
 ̄Sμ is plotted in Fig. 19 together with the local scaling exponent αðω; TÞ. This example illustrates that an ensemble of TLFs with a peaked distribution of activation energies can exhibit a maximum as a function of temperature with a corresponding change of the scaling exponent from α > 1 to α < 1. For the present example the maximum value of  ̄Sμ occurs at T ≈ 300 K. Noise measurements in other systems at much lower frequencies are consistent with V0 ≈ 1 eV (Dutta and Horn, 1981). For ion-trap e-
xperiments where ω=2π ∼ MHz, the corresponding maximum would in this case occur at much higher temperatures of T ≈ 850 K.
In the case of tunneling states, a nonuniform distribution PðλÞ for the tunneling parameter can lead to modifications of the spectrum given in Eq. (90). In analogy to Eq. (91) one obtains a scaling  ̄Sμ ∼ Pðλ 1⁄4 λ0Þ, where λ0 determines the dominant contribution to the average in Eq. (79) and depends logarithmically on ω. However, since the tunneling amplitude Δ0 does not depend on temperature, the modifications are less pronounced than in the case of thermally activated TLFs and do not lead to a-
 significant change in the temperature scaling.
C. Adatom dipoles
Even on a very regular surface and at low background pressures, atoms or molecules in the atmosphere will stick to the metal electrodes and create extended layers, small patches, or individual defects. The induced dipole moments of adsorbed atoms locally lower the work function of the metal and provide one of the mechanisms that can lead to the formation of patch potentials described in Sec. V.A. For alkali atoms adsorbed on a gold surface the induced dipole moments are typically a few debye and i-
ndividual adatomic dipoles can be measured and visualized using field-emission microscopy (Gomer, 1961). This method also allows the observation of adatom diffusion, a process which is further analyzed in Sec. V.D. Surface contamination has been observed to have an influence on trapped-ion heating rates in several experiments (Turchette et al., 2000; Letchumanan et al., 2007; Hite et al., 2012; Daniilidis et al., 2014). This suggests that adatoms may play an important role in the electric-field no-
ise generated at small distances. The direct effect that a large, artificially created surface dipole has on trapped ions been observed by Harlander et al. (2010). Recently Safavi-Naini et al. (2011, and 2013) analyzed the electric-field noise spectrum which is expected from a random distribution of adatomic dipoles on a planar electrode. This model, which is briefly summarized
(a)
(b)
FIG. 19 (color online). Temperature-dependent behavior of nonuniformly distributed TLFs. (a) Temperature dependence of
the averaged dipole-fluctuation spectrum  ̄Sμ (in arbitrary units) produced by an ensemble of TLFs with a Lorentzian distribution of activation energies centered around V0 1⁄4 0.3 eV and with a width ΔV 1⁄4 0.15 eV. (b) The temperature dependence for the same parameters of the local scaling exponent αðω; TÞ.
1456 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 here, is predicated on the idea that random fluctuations of surface dipoles can arise from phonon-induced transitions between different bound vibrational states of the adatomsurface potential.
1. Adatoms
Atoms or molecules are attracted toward a nearby surface by the van der Waals potential UvdWðzÞ ∼ −C3=z3, where z is the distance to the surface and C3 is a function of the dynamic polarizability αpðωÞ of the particle. At short distances the electronic wave functions of the adatom and the surface constituents start to overlap and lead to a sharply repulsive potential wall. The resulting shape of the full adatom-surface potential UðzÞ is sketched in Fig. 20 and can be calculated for specific adatom-
s using ab initio numerical methods. For many studies of adatom-surface interactions it is sufficient to replace the actual potential by an approximate analytic model, for example, of the form (Hoinkes, 1980)
UðzÞ 1⁄4 ~w
~w − 3 U0
 3
~w e ~wð1−z=z0Þ −
 z0
z
 3 
; ð95Þ
which is parametrized by the equilibrium adatom position z0, the depth of the potential U0, and the dimensionless parameter ~w ∼ 5 − 10 characterizing the width of the potential well. The potential depth U0 depends strongly on the surface and adatom species and can range from a few eV for strongly bound (chemisorbed) atoms like H to values of ∼10 meV for weakly bound (physisorbed) atoms like He or Ne (SafaviNaini et al., 2013). The potential minimum at z0 occurs at atomic distances of a few Å fro-
m the surface. The characteristic frequency is set by the frequency difference between the two lowest levels ν10 1⁄4 ν1 − ν0. Using a harmonic approximation of the potential well this can be estimated to be
ν10 ≈ ζ
ffiffiffiffiffiffiffiffiffiffiffiffi
U0
madz20
s
; ð96Þ
where ζ 1⁄4 ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
3ð ~w2 − 4 ~wÞ=ðw~ − 3Þ
p is a numerical factor and mad is the mass of the adatom. The attractive adatom-surface potential arises from a rearrangement of the electronic wave functions of the adatom and the electrons in the metal. This creates an induced dipole moment μðzÞ perpendicular to the surface, which depends on the adatom-surface distance z. At distances which are large compared to the extent of the adatom wave function a scaling μðzÞ ∼ 1=z4 is expected (Antoniewicz, 1974) and μðz ≈ z0Þ can reach several debye whe-
n the adatom touches the surface.
2. Phonon-induced dipole fluctuations
The potential UðzÞ supports several bound vibrational states jni with vibrational frequencies νn as indicated in Fig. 20. Because of the dependence of μðzÞ on the adatom-surface distance, each vibrational state acquires a different average dipole moment μn 1⁄4 hnjμðzÞjni. Safavi-Naini et al. (2011) suggested that at nonzero temperatures, phonon-induced transitions between different vibrational states jni lead to a fluctuating adatom dipole moment μðtÞ.
Phonon-induced transitions between two vibrational states jni and jmi arise from fluctuations of the closest surface atoms, which thereby modulate the potential UðzÞ. For n > m and a transition frequency νnm 1⁄4 νn − νm > 0 the resulting transition rates are given by (Safavi-Naini et al., 2011)
Γn→m 1⁄4 πg ̄ðνnmÞ
3ħMνnm
jhnjU0ðzÞjmij21⁄2nBðνnmÞ þ 1; ð97Þ
Γm→n 1⁄4 πg ̄ðνnmÞ
3ħMνnm
jhnjU0ðzÞjmij2nBðνnmÞ; ð98Þ
where M is the surface-atom mass and nBðωÞ 1⁄4 1=ðeħω=ðkBTÞ − 1Þ is the Bose-Einstein distribution for a particular temperature T. In Eqs. (97) and (98)  ̄gðωÞ denotes the partial (projected) phonon density of states (PDOS) of a surface atom (which takes into account the fact that different phonon modes can couple more efficiently or less efficiently to surface atoms than to bulk atoms). The decay rate from the first excited vibrational state to the ground state at zero temperature Γ0 ≡ Γ1→0ðT 1⁄4-
 0Þ defines a characteristic transition rate which, by using the bulk PDOS gðωÞ 1⁄4 3a3Lω2=ð2π2v3Þ as a reference, can be estimated as
Γ0 ≈ 1
4π
ν410mad
v3ρ : ð99Þ
Here ρ is the density of the bulk material, v is the velocity of sound in the material, and aL is the lattice constant. Considering typical numbers, for a gold surface (ρ 1⁄4 19.3 g=cm3 and v 1⁄4 3240 m=s) with an adsorbate covering of atomic mass mad 1⁄4 100 amu, and given a typical vibrational frequency ν10=2π 1⁄4 1 THz, Eq. (99) predicts val
ues around Γ0 ≈ 3 × 1010 s−1. Much lower values in the MHz regime are expected for very heavy or weakly bound adatoms, where vibrational frequencies are reduced. Furthermore, due to a mass mismatch, the presence of an additional monolayer of contaminants on the metallic electrode can considerably modify the surface PDOS (Safavi-Naini et al., 2013). This also significantly reduces Γ0 compared to the estimate in Eq. (99) and in general values of Γ0 ranging from a few
107 s−1 to a few 1010 s−1 can be expected.
0
FIG. 20 (color online). Sketch of the typical shape of the adatomsurface potential UðzÞ approximated by the model potential given in Eq. (95) for w 1⁄4 5.8. The dashed lines indicate the energies ħνn of the bound vibrational states with wave functions indicated by the thin solid lines. From Safavi-Naini et al., 2013.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1457
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 3. Noise spectrum
For a planar trap geometry the spectral density of electricfield noise produced by a homogeneous distribution of independent adatoms is given by Eq. (75), with  ̄Sμ being replaced by the dipole-fluctuation spectrum Sμ of a single adatom. The fluctuating dipole moment of a single adatom is
given by μðtÞ 1⁄4 P
nμnPnðtÞ, where the occupancies of the vibrational levels PnðtÞ evolve according to the rate equation
P_ nðtÞ 1⁄4 −X
m≠n
Γn→mPnðtÞ þ X
m≠n
Γm→nPmðtÞ: ð100Þ
From Eq. (100) the steady-state populations hPnðtÞi and correlation functions hPnðtÞPmð0Þi can be obtained numerically and used to calculate hδμðtÞδμð0Þi. Figure 21 shows the resulting noise spectrum as a function of frequency for different temperatures. For this specific example an intermediate binding energy of U0 1⁄4 0.25 eV (≈3000 K), an adatom height of z0 1⁄4 2 Å, and a mass of mad 1⁄4 100 amu has been assumed, where ν10=2π ≈ 1.3 THz. Note that hydrocarbon chains of similar mass have been i-
dentified as electrode contaminates in a recent experiment by Daniilidis et al. (2014). At low temperatures only the lowest two vibrational levels are occupied and Sμ can be approximated by a Lorentzian TLF spectrum [see Eq. (78)]:
Sμ ≃ ðμn1⁄40 − μn1⁄41Þ2 2Γ0
ω2 þ Γ20
e−ħν10=kBT : ð101Þ
The spectrum is flat for ω ≪ Γ0 and decays as ω−2 in the opposite limit of large frequencies. The fluctuations are thermally activated with a characteristic temperature T  1⁄4 ħν10=kB defined by vibrational frequencies. In the example shown in Fig. 21 this corresponds to a temperature of T  ≈ 60 K. Because of the multilevel structure of the bound adatom the full spectrum does not saturate at higher temperatures, but instead increases as Tγ, where γ ≈ 2.5. Considering typical numbers, assume a surf-
ace density of σd 1⁄4 1018 m−2 which, for an Au(111) surface, corresponds to a coverage fraction of approximately 10%. Assume also an induced dipole moment of μn1⁄40 1⁄4 5 D and characteristic
transition rate of Γ0 1⁄4 108 s−1. The predicted electric-field noise level at a distance d 1⁄4 100 μm above the trap is then
around SðADFÞ
E ≈ 10−13 V2=m2 Hz for temperatures T > T . Taking into account the distance scaling of β 1⁄4 4 [see Eq. (75)] this is comparable to the absolute level of heating seen in some small traps (see Fig. 8). The mechanism described by Safavi-Naini et al. (2011) shows that phonon-induced fluctuations of individual adatomic dipoles can contribute to the electric-field noise observed in good ion traps. It should be emphasized, however, that the predicted noise levels depend sensitively on the microscopic p-
arameters of the adatom-surface interaction. For many atoms or more complicated molecules these are not known. Equation (78) shows that to realize a noise level which can be seen in experiments and exhibits a finite frequency variation at ω=2π ∼ MHz requires low values for ν10 and Γ0. This is expected for weakly bound or heavy adatoms and
molecules. Most numerical studies in the literature focus on extreme cases of alkaline atoms or noble gases absorbed on metals, which either lead to strongly bound atoms or, in the latter case, lead to very shallow potentials which do not support binding at room temperatures. Therefore, the relevance of this noise mechanism for specific surface conditions found in ion-trap experiments remains a subject of future experimental and theoretical investigations.
D. Adatom diffusion
Apart from fluctuations in the magnitude of their induced dipole moment μðtÞ, adsorbed atoms and molecules can contribute to the electric-field noise by diffusing on the surface, thereby changing the spatial distribution of dipoles over time. Adatom-diffusion-induced noise processes have been studied, for example, in the context of field-emission microscopy (Gomer, 1961; Kleint, 1963; Timm and Van der Ziel, 1966), where the field-emission current depends sensitively on the total number of adatoms -
within a small area at the end of a sharp tip. Adatoms which diffuse in and out of that area change the average work function and lead to fluctuations of the emission current. The observed plateau of this noise at low frequencies and the scaling ∼ω−3=2 (Timm and Van der Ziel, 1966) for large frequencies agree well with predictions from simple diffusion models (Burgess, 1953; Van Vliet and Chenette, 1965; Gesley and Swanson, 1985). A related model for noise above metallic surfaces with diffusive ca-
rrier transport has been investigated by Henkel and Horowitz (2008). The diffusion of adatomic dipoles has been suggested as a potential mechanism for heating of trapped ions (Wineland, Monroe, Itano, Leibfried et al., 1998). This hypothesis is supported by the ∼ω−3=2 scaling of heating rates observed in experiments at NIST (Turchette et al., 2000; Hite et al., 2012).
10−8
10−6
10−4
10−2
10−10
0.01 0.1 1 10
10 −5
10 −10
10 0
10 −15 0.01 0.1 1 10
100
(a)
(b)
FIG. 21 (color online). Dipole-fluctuation spectrum Sμ of a single adatom. (a) Dependence of the full spectrum on the rescaled frequency ω=Γ0 for three different temperatures. The dashed lines show the corresponding spectrum under a two-level approximation. (b) Temperature dependence of Sμðω → 0Þ for the full multilevel model (solid line) and a two-level system (dashed line).
1458 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 1. Adatom diffusion on surfaces
The motion of individual adatoms on a planar surface is well described by a two-dimensional diffusion process with diffusion constant D 1⁄4 a2LΓhop=l (Gomer, 1961). Here aL is the lattice constant, Γhop is the hopping rate between neighboring adsorption sites which are separated by an energy barrier Vb, and l is the coordination number which depends on the lattice geometry, e.g., l 1⁄4 4 for a square lattice. The hopping of adatoms between adjacent minima of the surface potential can be thermally -
activated (Γhop ≈ τ0−1e−Vb=kBT ) or be due to quantum tunneling. The resulting diffusion constant can be approximated by
D ≃ Dt þ D0e−Vb=kBT ; ð102Þ
where the first term describes the diffusion due to quantum tunneling and the second term describes the thermally activated diffusion. For most surface diffusion processes one finds D0 ≈
10−7 m2 s−1 (Gomer, 1961; Ždanov, 1991), which is consistent with an attempt frequency of τ0−1 ≈ 1012 − 1013 s−1 and a
lattice spacing of a few Å. In the temperature range T 1⁄4 100 − 400 K and assuming a typical energy barrier of Vb ∼ 150 meV (∼1750 K) (Gomer, 1961; Ždanov, 1991) the resulting diffusion constants are D ≈ 10−15 − 10−9 m2 s−1. At very low temperatures thermally activated processes are strongly suppressed and the diffusion constant saturates at a value Dt, which is set by a finite probability to tunnel through the energy barrier. While a precise evaluation of Dt is rather involved and beyond the s-
cope of this review, an estimate for the saturation temperature can be obtained by comparing the thermally activated rate Γhop with the coherent tunneling amplitude Δ0=ħ, given in Eq. (84). Apart from hydrogen adatoms, for which quantum effects are important even at room temperature, the saturation of the hopping rate typically occurs at a few tens of kelvins.
2. Adatom-diffusion-induced noise
The diffusing adatoms can be modeled by a surface polarization density Pðr; tÞ 1⁄4 μσdðr; tÞ, where σdðr; tÞ is the areal density of adatoms with a fixed dipole moment μ. For an ion located at a distance d above a planar electrode [see Fig. 22(a)], the resulting electric-field noise spectrum is
SðADÞ
E 1⁄4 μ2
8π2ε20
Z
S
d2r1
Z
S
d2r2gDðr1ÞgDðr2ÞCσðr1; r2; ωÞ:
ð103Þ
Here the geometrical factors gDðrÞ describe the dipole pattern and are given in Eqs. (69) and (70) for trap axes perpendicular and parallel to the electrode surface, respectively, and
Cσðr1; r2; ωÞ 1⁄4 2Re
Z∞
0
dτhδσdðr1; τÞδσdðr2; 0Þie−iωτ
ð104Þ
is the correlation spectrum of the density fluctuations δσdðr; tÞ 1⁄4 σdðr; tÞ − hσdðr; tÞi. At low adsorbate densities
the diffusion of the individual dipoles is independent and the mean value of the density σdðr; tÞ obeys the twodimensional diffusion equation
ð∂t − D∇~ 2Þhσdðr; tÞi 1⁄4 0: ð105Þ
For a sufficiently homogeneous surface the adatom distribution relaxes to the stationary value σ ̄ d. For t1 > t2 fluctuations around this value are given by (Gesley and Swanson, 1985)
hδσdðr1; t1Þδσdðr2; t2Þi 1⁄4 σ ̄ d
4πDðt1 − t2Þ e−jr1−r2j2=4Dðt1−t2Þ:
ð106Þ
Under these idealized conditions the correlation function [Eq. (104)] can be evaluated analytically and the general expression for the electric-field fluctuation spectrum is
SðADÞ
E 1⁄4 μ2σ ̄ d
8π3ε20D
Z
S
d2r1
Z
S
d2r2
× gDðr1ÞgDðr2ÞKer0
  ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
jr1 − r2j2ω=D
q 
: ð107Þ
Here Ker0ðxÞ is the zeroth-order Kelvin function (Abramowitz and Stegun, 1972). In contrast to the patch-potential model or the fixed dipoles considered, the correlation function Cσðr1; r2; ωÞ is not separable into spatial and temporal correlations. The mean diffusion length of an adatom depends on the available time, which is inversely proportional to the frequency of the noise component considered. Consequently, the distance
and frequency scaling of SðADÞ
E are tightly connected.
FIG. 22 (color online). Adatom diffusion model. (a) Setup considered for the evaluation of electric-field noise generated by diffusing dipoles on a planar electrode. Within this model a needlelike electrode can be approximately described by considering only the electric field from dipoles within a small electrode area Ael. (b) Dependence of the normalized spectral function
Iη
R~ ðω~ Þ on the scaled frequency ω~ 1⁄4 ω=ωd, where ωd 1⁄4 D=d2. The dashed lines indicate the analytic limits given in Eqs. (110), (111), (113), (114), (116), and (117).
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1459
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 3. Diffusion on smooth surfaces
In the limit where adatoms diffuse freely over an infinite planar electrode the only relevant length scale is set by the ionsurface distance d, which defines a characteristic frequency scale ωd 1⁄4 D=d2. For a finite-sized trap, the electrode size Rel introduces a second length scale with a corresponding frequency scale ωR 1⁄4 D=Re2l. To obtain analytic estimates for diffusion-induced noise for both large and small trapping electrodes the full problem can be approximated by a scenario shown in Fig-
. 22(a). Here adatoms diffuse on an infinite planar surface but, to account for a finite electrode size, only adatoms within an area Ael 1⁄4 πRe2l contribute significantly to the noise seen by the ion. Using the dimensionless parameters ~ω 1⁄4 ω=ωd and R~ 1⁄4 Rel=d, Eq. (107) can be rewritten as
SðADÞ
E;η1⁄4⊥;∥ 1⁄4 μ2σ ̄ d
8πε20d2D I η
R~ ð ~ωÞ; ð108Þ
where Iη
R~ ð ~ωÞ is the dimensionless integral
Iη
R~ ð ~ωÞ 1⁄4 1
π2
Z
≤R~
d2r1d2r2
× g~Dðr1Þg~Dðr2ÞKer0
  ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
jr1 − r2j2 ~ω
q 
; ð109Þ
for which g~DðrÞ 1⁄4 gDðrdÞ. The dependence of Iη
R~ ðω~ Þ on ~ω is
plotted in Fig. 22(b) for the limiting cases ~R → ∞ and R~ ≪ 1. We now consider two extremes of geometry: planar and needle. In each instance the absolute value of SE is estimated as are the expected scalings α, β, and γ for reasonable trapping conditions. • Infinite planar electrode: In the limit of the electrode dimension Rel being large compared to the ion-surface distance d, Eq. (109) can be evaluated for ~R → ∞. In this case the parallel and perpendicular electric-field noise
spectra differ only by a factor of 2: I∥∞ðω~ Þ 1⁄4 I⊥∞ð ~ωÞ=2. The respective low- and high-frequency limits are given by
I⊥∞ð ~ω → 0Þ ≃ 1; ð110Þ
I⊥∞ð ~ω ≫ 1Þ ≃ 15
2ω~ 2 : ð111Þ
The crossover occurs at a frequency scale ω ≈ ωd 1⁄4 D=d2, which is set by the ion-electrode separation d. For an ion-electrode distance d 1⁄4 100 μm and a diffusion constant of D 1⁄4 10−10 m2 s−1, the trap frequencies of ωt=2π ∼ MHz are much larger than the frequency scale ωd=2π ≈ 10 Hz. In this regime the resulting diffusion-induced-noise spectrum is
SðADÞ
E;⊥ ≃ 15μ2σ ̄ dD
16πε20d6ω2 ; ð112Þ
and therefore β 1⁄4 6 and α 1⁄4 2. For adatom density of σ ̄ d 1⁄4 1018 m−2 and an induced dipole moment of μ 1⁄4 5 D, the overall noise level is around
SE ≈ 10−18 V2=m2 Hz. Since SE ∼ D, diffusion-induced noise is exponentially suppressed at lower temperatures. • Needle trap: In the opposite limit of a sharp needle trap the adatoms can still diffuse across the whole electrode, but the relevant contributions to the noise arise from adatoms within a small area Ael 1⁄4 πRe2l at the end of the tip. This situation is analogous to the diffusion processes studied in the context of field-emission-current noise (Van Vliet and Chenette, 1965; Gesley and Sw-
anson, 1985) and is approximately captured by restricting the integration area in Eq. (107) to a small disk of radius Rel ≪ d. In this limit the normalized electric-field fluctuations perpendicular to the surface scale as
IR~⊥ð ~ω → 0Þ 1⁄4 −4R~ 4 logðpffiffi~ωffiffiR~ Þ; ð113Þ
I R~⊥ð ~ω ≫ 1Þ 1⁄4
ffi3ffiffiffi2ffi
p ~R
~ω3=2 : ð114Þ
The crossover occurs at a frequency scale ω ≈ ωR 1⁄4 D=Re2l, which is set by the tip size Rel rather than the ionelectrode separation d. In the regime ω ≫ ωR, the overall noise spectrum for the small-tip geometry is
SðADÞ
E;⊥ ≃ μ2σ ̄ dRel
pffiffiDffiffi
pffi2ffiffiπε20d6ω3=2 : ð115Þ
For the field fluctuations parallel to the surface (which is to say, perpendicular to the axis of the needle) the respective limits are
I∥
R~ ðω~ → 0Þ 1⁄4 3R~ 6
4 ; ð116Þ
I∥
R~ ð ~ω ≫ 1Þ 1⁄4 9R~ 3
pffi2ffiffiω~ 3=2 : ð117Þ
Equations (114) and (117) show that for different trap geometries the frequency scaling of the diffusion-induced noise can change from ω−2 to ω−3=2. The distance dependence in this case is still SE ∼ d−6 for perpendicular fluctuations and SE ∼ d−8 for parallel fluctuations. For the same parameters and Rel=d 1⁄4 0.1 the resulting field noise is SE≈ 5 × 10−15 V2=m2 Hz.
In summary, analytical estimates show that adatom diffusion on a small electrode can lead to a ω−3=2 scaling of the field noise, but in these simple scenarios the expected overall noise level is rather small and decays quickly with increasing d. This is related to the fact that compared to a spatially fixed, but fluctuating dipole, a dipole which is just displaced on the surface by a small distance Δr changes the field at the position of the ion only by a fraction Δr=d ≪ 1.
4. Diffusion on corrugated surfaces
The different analytic scalings for SðADÞ
E presented in Secs. V.D.2 and V.D.3 have been derived under the idealized assumptions that adatoms diffuse freely and independently
1460 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 from each other. Under more realistic conditions, surface corrugations, potential steps between atomic layers, and also the mutual influence of adatoms at high densities can modify these results. In general, potential barriers as well as high densities of adatoms tend to suppress diffusion and further reduce the associated noise. However, diffusion-induced noise can be considerably enhanced when taking into account other microscopic mechanisms that change the magnitude of the induced dipole momen-
t μ. Consider, for example, an adatom diffusing over a surface covered by patches that have a different work function than the rest of the electrode, such that the induced dipole moment changes by Δμ when the adatom diffuses onto one of the patches. The noise originating from diffusion over a single patch is then similar to the small electrode limit discussed previously, with Rel replaced by the patch radius Rp and μ replaced by Δμ. The absolute level of noise, however, would be enhanced by the nu-
mber of patches Np ∼ d2=R2p. Overall, this generalized diffusion model predicts a scaling
SðADÞ
E;⊥ ∼ ðΔμÞ2pffiffiDffiffi
d4Rpω3=2 : ð118Þ
For Rp ∼ 1 − 10 μm, and assuming otherwise the same parameters for the estimate made in Sec. V.D.3, noise levels of about SE ∼ 10−12 − 10−14 V2=m2 Hz are expected. This is similar to the level of noise expected from other microscopic processes. Unless nonequilibrium processes are considered, the diffusion-induced noise is still exponentially suppressed with temperature and a strong reduction of this noise contribution below a few tens of kelvin is in general expected.
VI. HEATING MECHANISMS INFERRED IN EXPERIMENTS
Section III considered the observed electric-field noise in different trapped-ion experiments. It suggested that different experiments may well be limited by different sources of noise. It also underlined the problems of attempting to draw general conclusions either from specific experiments or from the full data set. Sections IV and V considered the theoretical expectations arising from models of different heating mechanisms. This section now considers a number of experiments in which it is possi-
ble to identify a specific (probable) heating mechanism. Each section heading gives a possible or even likely cause of heating which has been identified for specific experiments. The sources of heating in those cases where it can be identified are seen to be diverse. Consequently, the electric-field noise observed in ion traps should not be viewed as a single homogeneous phenomenon, but as many separate phenomena which can be different in different experiments. Despite such diversity, the case stu-
dies in this section shed light on a number of possible solutions to the heating seen in some ion traps, which might be beneficially implemented in other experiments.
A. Patch potentials
Deslauriers, Olmschenk et al. (2006) used a trap consisting of a pair of tungsten needle electrodes for which the tip-to-tip separation 2d could be controllably varied. Single trapped 111Cdþ ions were ground state cooled, and the axial heating rate was measured. Heating-rate measurements were made for seven different ion-electrode spacings in the range 38 μm < d < 216 μm. The results are reproduced in Fig. 7 and exhibited a distance-scaling exponent of β 1⁄4 3.5ð1Þ. An analysis of the evidence for-
 patch-potential heating mechanisms, over against Johnson noise, is provided here. For comparison with the other results discussed in this section, the heating rates measured by Deslauriers et al. are plotted as points [16]a–g in Fig. 23. As first calculated by Turchette et al. (2000), and discussed here in Sec. V.A, a patch-potential model that considers the ion to be trapped inside a sphere of radius d, with patches of radius Rp ≪ d, predicts a distance-scaling exponent for the electric-field no-
ise of β 1⁄4 4. Deslauriers, Olmschenk et al. (2006) pointed out that the exact value of β could vary depending on the details of the trap geometry. Low, Herskind, and Chuang (2011) approximated the needle trap by a single prolate spheroidal needle and showed the way in which, for that geometry, β varied as a function of both the trap geometry and the patch size. The approximation of a single prolate
10-10
Trap size, d (μm)
100 300
10-14
10-13
10-12
10-11
10-9
S
E (V2m-2Hz-1)
60
[2]
[16]g [16]f
[16]e
[16]d
[16]c
[16]b
[16]a
[23]a,b
[24]
[40]
[33]b
[33]a
[39]
[46]c
[46]d
[57]a
[57]b [B]
[A]a
[20] [42]a [42]b
[A]b [10]a
[32]
[65]
[66]c
[66]d
FIG. 23 (color online). Overview of traps for which the heating mechanisms are known. For comparison, the heating rate for the first use of “anomalous heating” in the literature is shown as point [2] (Monroe et al., 1995). Experimental data points are taken from the relevant references in Table I. Points [A] and [B] are calculated values from Leibrandt, Yurke, and Slusher (2007). The gray points (noise sources unknown) are the same as those in Fig. 8. For orientation, the gray shaded regions and d-
otted lines are the same as those shown in Fig. 8 and indicate slopes of −4 and −2, respectively. Despite the experiments being limited by many different sources of noise, the reported values of SE in the various experiments are broadly similar. Consequently, it is difficult to directly infer a particular noise source simply from the absolute level of noise.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1461
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 spheroid was chosen as it is analytically solvable. They showed that the observed distance scaling of β 1⁄4 3.5 might be explained by a patch-potential model, as illustrated in Fig. 24. When Deslauriers, Olmschenk et al. (2006) originally considered the possibility of Johnson noise, they assumed that Johnson noise would exhibit a distance-scaling exponent of β 1⁄4 2. Taking the geometry into account, the distance scaling for Johnson noise in their trap would be expected to exhibit β 1⁄4 2.5ð2Þ (s-
ee Sec. IV.D.2). This scaling prediction not only holds for Johnson noise specifically, but generally for any source of noise which generates a spatially homogeneous field at the position of the ion. This analysis provides a good indication that, in the experiment by Deslauriers, Olmschenk et al. (2006), the noise arose from localized potential fluctuations on the electrode. There remain numerous physical mechanisms, some of which are detailed in Sec. V, that could underlie such localized fluctuat-
ions and lead to the observed behavior. Investigations to identify the physical mechanism responsible could include a simultaneous measurement of distance and frequency dependence of the noise in both the axial and radial directions.
B. Electromagnetic pickup
Britton (2008) fabricated a segmented surface trap based on a silicon-on-insulator substrate, with the ion 41 μm above the surface. The design had two separate trapping zones: one had bare doped-silicon electrodes, 100 μm thick; the other had doped-silicon electrodes on which a 1 μm layer of gold was evaporated. The two different electrode surfaces were explicitly designed to demonstrate and characterize the effect of surface material on the “anomalous” heating rate. Heating-rate measurements were-
 made in the gold and baresilicon experimental zones. In both zones the spectral density
of electric-field noise was measured to vary in the range 50 × 10−12 < SE=ðV2=m2 HzÞ < 500 × 10−12. The results for the gold and silicon traps are shown as points [23]a,b in Fig. 23. This level of noise is relatively unremarkable, although it is around an order of magnitude higher than that seen in NIST’s best traps (Epstein et al., 2007; Ospelkaus et al., 2011). The significance of this higher absolute value is unclear, as trap-to-trap variations at this level are not uncommon, even for nearly id-
entical traps being investigated at NIST (Britton, 2008). What is significant, however, is that the heating rate varied across the stated range from day to day. While such fluctuations have been observed in other systems (Wang, 2012) it is uncommon for experiments at NIST. To identify the source of the heating, extensive investigations into a variety of possible sources were undertaken. The results of these investigations are summarized in Table II. The level of heating seen was consistent with th-
at expected if ambient field noise in the lab were coupled to the apparatus and happened to be on resonance with the trap motional frequency. (The theory of coupling to ambient field noise is discussed in Sec. IV.C.) This mechanism could also explain why the observed heating rate fluctuated from day to day, if the injected noise had a resonance which only sometimes overlapped with the trap frequency. EM pickup has been positively identified as the dominant source of heating in one other trap. The -
work of Poulsen, Miroshnychenko, and Drewsen (2012) identified pickup as a significant source of heating at a very specific frequency, corresponding to a switched-mode power supply. This is shown as point [47]b in Fig. 8. In this instance, having identified the source of noise, it was a relatively simple source to avoid, either by changing the power supply or by operating the trap at a different secular frequency. It is, however, interesting to note that minimizing pickup is not a concern restrict-
ed to traps in one particular size regime. Trap [47]b is the largest Paul trap for which heating rates have been measured, while traps [23]a,b are among the smallest.
C. Technical noise
Schulz et al. (2008) fabricated a three-dimensional, goldon-alumina, segmented trap with the ion 257 μm from the
FIG. 24 (color online). Distance-scaling exponent β as a function of dimensionless distance d=rprolate for both axial and radial modes above a spheroidal needle of radius rprolate and half length 100 rprolate. The solid lines are for the limit of a single patch covering the entire electrode. The dotted lines correspond to intermediate patch sizes of angular extent 0.4 and 0.04. The bar shows the approximate range of ion-electrode distances and the possible values of β (1σ) measured in this experim-
ent of Deslauriers, Olmschenk et al. (2006). Adapted from Low, Herskind, and Chuang, 2011.
TABLE II. Heating sources considered by Britton (2008). A comparison is given of the calculated or measured level of noise from different sources and the level of noise that would be required to account for the ion-heating rates observed. Britton ultimately concluded that pickup of environmental noise could cause considerable heating if it were to overlap with the ion’s motional frequencies. The relative magnitudes of the effects given here are specific to Britton’s experiment and could be differe-
nt for other apparatuses.
Source Magnitude
Imperfect micromotion compensation 10 times too low Noise from the DAC cards (after filtering) 100 times too low Noise from an improved battery source (after filtering)
1000 times too low
Johnson noise from filters 100 times too low Ambient laboratory fields coupled to trap apparatus
∼ required magnitude
1462 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 nearest electrode. The heating rate was measured for successive iterations of improving the drive electronics. The initial setup was limited by noise from analog-output cards, which were used to provide dc voltages to the segmented electrodes. These cards caused heating rates high enough to preclude sideband cooling. By way of improvement, the electronics was changed such that the dc electrodes were controlled using an op-amp circuit powered by lead-gel batteries.8 In this configuration, heating -
rates were measured corresponding to a spectral density of electric-field noise of SE 1⁄4 17ð3Þ × 10−12 V2=m2 Hz for ω 1⁄4 2π × 1.18 MHz. This is a rather unremarkable heating rate, given the trap size, as shown by point [20] in Fig. 23. Subsequent to this measurement, the dc voltage supply was further improved (Poschinger et al., 2009) by adding a transistor push-pull stage at the output of the dc voltage supply.9 This lowered the output impedance of the circuit, which may have made the system le-
ss prone to noise pickup in the wiring to the trap. The additional stage may also have provided some degree of low-pass filtering. Following this improvement, the heating rate was measured to be lower by a factor of 6, with a corresponding inferred noise level of SE 1⁄4 3ð1Þ × 10−12 at ω 1⁄4 2π × 1.35 MHz. The improved result is plotted as point [24] in Fig. 23. Technical noise has also been positively identified as the dominant source of heating in another set of experiments. McLoughlin et al. (2-
011) fabricated a three-dimensional trap with stainless-steel electrodes, electroplated by 5 μm of gold. The ion was trapped 310 μm from the nearest electrode. The heating rate was measured and corresponded to a spectral density of electric-field noise of SE ≈ 100 × 10−12 V2=m2 Hz at ω 1⁄4 2π × 355 kHz. This level of noise is relatively high but by no means exceptional and is plotted as point [32] in Fig. 23. Following this measurement, sources of EM noise in the vicinity of the experiment were id-
entified and reduced (Weidt et al., 2015). This included replacing noise-inducing electronics and using a well-separated ground for the relevant low-noise electronics. A low-noise multichannel voltage supply was developed for the trap’s static voltages, which were filtered with fourth-order low-pass RC filters having a cutoff frequency of 32 Hz. In addition, a Faraday cage was built around the entire vacuum system. Following these efforts, the heating rate in the trap was measured again and corres-
ponded to a spectral density of electric-field noise of SE 1⁄4 0.52ð7Þ × 10−12 V2=m2 Hz at ω 1⁄4 2π × 427 kHz. The improved result is plotted as point [65] in Fig. 23. Even accounting for the 20% increase in frequency at which the second heating rate was measured (cf. point [32] in Fig. 3), the care taken to reduce technical and environmental noise in this set of experiments delivered a reduction in the heating rate of more than 2 orders of magnitude. This unambiguously implicates technical and en-
vironmental noise as having been limiting sources of noise in the original experiment. It may initially seem surprising that such technical noise could cause problems. Early in the discussions about heating in ion traps, Wineland, Monroe, Itano, King et al. (1998)
highlighted the importance of static trap voltages being heavily filtered at the trap frequency, saying that heating due to power-supply noise and electrical pickup should be negligible for filter factors of F < 10−4. Since these early considerations, the introduction of ion shuttling in segmented traps has given cause to revisit the practicability of 80 dB filtering at the trap frequency. First proposed by Wineland, Monroe, Itano, Leibfried et al. (1998), and implemented by Rowe et al. (2002), io-
ns are shuttled by applying time-varying (quasistatic) voltages instead of static voltages. In the limit of fast shuttling, these voltages may need to be varied at frequencies close to the trap frequency (Bowler et al., 2012; Walther et al., 2012). While nontrivial, this is possible using more-involved filters (Blakestad, 2010) or novel switching methods (Alonso et al., 2013). Nonetheless, even in instances not requiring fast shuttling, heating from technical sources can be neglected only after gr-
eat care has been taken to make it negligible.
D. Johnson noise
Harlander (2012) used a three-dimensional, gold-onalumina, segmented trap with the ion 257 μm from the nearest electrode; the trap had the same essential design as that used by Schulz et al. (2008), described in Sec. VI.C. The initial 500 nm layer of evaporated gold was gold electroplated to a thickness of 10 − 15 μm (Splatt, 2009). Ion-heating rates were measured, initially for weak low-pass filtering with a high cutoff frequency, and then for more aggressive filtering. In both configurations the-
 observed level of noise was consistent with what would be expected from Johnson noise in the filters’ resistors. In the first configuration the trapping voltages were generated by lead batteries, referenced with a 10 V precision reference. These were filtered by out-of-vacuum RC filters with a cutoff frequency of 1 kHz and in-vacuum RC filters with a cutoff frequency of 1 MHz (shown in Fig. 25). As in the work of Schulz et al. (2008), the high cutoff was chosen to allow fast shuttling. The spectr-
al density of electric-field noise was measured to be SE 1⁄4 15ð1Þ × 10−12 V2=m2 Hz at 1 MHz (plotted as point [42]a in Fig. 23). The Johnson noise in this filter circuit is analyzed in Sec. IV.D.5. Neglecting any additional filtering effects from the capacitance of the trap itself, the electric-field noise at the position of the ion due to Johnson noise in the filter network at 1 MHz is estimated to be SE 1⁄4 24ð2Þ × 10−12 V2=m2 Hz. The stated uncertainty is due to uncertainty in the value of the-
 second-stage capacitor (Splatt, 2009). The electric-field noise observed in the experiment is at the same level as what would be expected from Johnson noise in the filters. A 5.1 kΩ resistor was added to the second filter stage, outside the vacuum (shown in Fig. 25). The spectral density of electric-field noise was then measured to be SE 1⁄4 11ð1Þ × 10−12 V2=m2 Hz at 1 MHz (plotted as point [42]b in Fig. 23). From the analysis in Sec. IV.D.5, the expected level of noise from the filters in this s-
econd configuration is estimated to be SE 1⁄4 15ð2Þ × 10−12 V2=m2 Hz at 1 MHz. The observed heating rate can therefore be fully accounted for by Johnson noise in the filters.
8U. Poschinger, 2012, Mainz (personal communication). 9U. Poschinger, 2012, Mainz (personal communication).
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1463
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 E. Surface effects
Daniilidis et al. (2011) fabricated a gold-on-sapphire, segmented surface trap with the ion 240 μm above the surface. The electrodes were made of 5 μm of electroplated gold with 17 nm root-mean-square (rms) roughness. Initially, heating rates were measured and used to infer a spectral density of electric-field noise of SE ≈ 10 × 100−12 V2=m2 Hz for ω 1⁄4 2π × 1 MHz at the trapping position where the ions were loaded. This noise level remained constant for several months, until the background press-
ure was briefly increased to 10−7 mbar. After this, the heating rates were measured along the entire length of the trap. They were found to have increased by around an order of magnitude in the region where the ions had been loaded. The results before and after the change are shown as points [33]a,b in Fig. 23. By contrast, the heating rates away from the loading zone were comparable to those originally measured in the “pristine” loading zone. The uncooled ion lifetimes also decreased by roughly 1-
 order of magnitude in the parts of the trap where increased heating rates were observed. The new heating behavior of the trap remained stable over more than six months. Given the behavior changed only in the loading region, it seems that the effects of noise sources such as technical noise and rf pickup are excluded in this experiment at the noise levels observed. It is also not considered likely that the change was due to coating from the Ca oven, as the atomic beam was directed along the axis o-
f the trap and would be expected to coat the trap evenly along its length. Daniilidis et al. conjectured several possible mechanisms, including bombardment of the trap electrodes by electrons created during trap loading or by 40Caþ ions which are created by photoionization outside the trapping volume. These can impinge on the gold surface with energies of up to 100 eV when accelerated by the rf field. 40Caþ ions with energies of a few eV could get physisorbed onto the trap electrodes and later for-
m chemical compounds, while ions at higher energies could sputter material from the trap surface. In addition, they note that it is possible that the laser light used for ion creation and detection locally alters the electrodes’ chemical composition.
F. Contamination removed by laser cleaning
The first systematic investigation of in situ cleaning of a trap (Allcock et al., 2011) used a SiO2-on-Si, segmented surface trap with aluminum electrodes. The ion was 84 μm
above the plane of the trap surface and 98 μm from the nearest electrode. The aluminum electrodes were 2.4 μm thick, with a 2–3 nm native oxide and 8 nm rms roughness. Any exposed surfaces on the silicon substrate were coated with 114 nm of gold. The heating of the trap was first characterized by measuring the absolute value of the heating rate and the frequency scaling α (Allcock et al., 2012). Part of the trap was then cleaned using nanosecond pulses of laser light at 355 nm. The heating rate wa-
s characterized again, measuring the absolute value and the frequency scaling both in the cleaned region and in an uncleaned region (Allcock et al., 2011). The heating rate was reduced when laser energy densities over 50 mJ=cm2 were used to clean the gold-covered sidewalls. The inferred spectral density of electric-field noise was reduced by around a factor of 2 from 380 × 10−12 to 180 × 10−12 V2=m2 Hz at 1 MHz. The frequency scaling α, before and after cleaning, also changed from 0.93(5) to 0.57(-
3). The heating rate and the frequency scaling in the uncleaned region did not significantly change over the measurement period. The results before and after cleaning are shown in Fig. 23 as points [40] and [39], respectively. Given the fact that the behavior changed only in the region being cleaned, the effects of noise sources such as technical noise and rf pickup are excluded in this experiment at the noise levels observed. It seems instead that the reduction in heating is directly linked to re-
moval of material from the electrode surfaces. The frequency scaling of heating due to fluctuating dipoles adsorbed on the trap surface varies as a function of the adsorbed atomic or molecular species (SafaviNaini et al., 2011, 2013); see Sec. V.C. Selective cleaning of a particular subset of adsorbates could therefore account for the change in α. Alternatively the heating rate may have been reduced due to changes in the surface topography of the electrode (Dubessy, Coudreau, and Guidoni, 2009; Lo-
w, Herskind, and Chuang, 2011). Allcock et al. (2011) raised both of these possibilities, and at present the data do not provide a basis to favor one option over another. The heating reduction described seemed to saturate at the levels stated and further cleaning did not lead to continued improvements. Allcock et al. suggested that this may implicate additional heating mechanisms which are limiting at this level. Subsequent to these measurements, higher energy densities of the cleaning laser were -
used. Energy densities of 180 mJ=cm2 removed parts of the gold coating over the silicon substrate and densities of 255 mJ=cm2 caused damage to the surface of the aluminum electrodes. This increased the absolute heating rate (although did not return it to as high as the precleaning values) and increased the frequency scaling to α 1⁄4 0.88ð3Þ.
G. Contamination removed by ion-beam cleaning
A different method of in situ trap cleaning was pioneered by Hite et al. (2012) using a gold-on-crystalline-quartz trap with the ion 40 μm above the trap surface. The gold of the electrodes was 10 μm thick. The trap surface was cleaned by bombardment with a beam of argon ions, which is a wellestablished cleaning technique in surface science. The rate at
Vdc
in vacuum
out of vacuum
160 2.8 k
1 F 55 pF trap
5.1 k
FIG. 25. Filters used by Harlander (2012). The network initially consisted of an RC filter outside vacuum (cutoff at 1 kHz) and a second RC filter inside vacuum (cutoff at 1 MHz). A resistor was subsequently added (shown in gray) to reduce the cutoff of the second stage to 370 kHz.
1464 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 which a trapped ion was heated was characterized before and after the trap surface was cleaned with argon-ion-beam bombardment. Initially, Auger-electron spectroscopy (AES) of a surface trap revealed it to have 2–3 monolayers of carbon on the surface. These were thought to be most likely from hydrocarbon deposition from the gas phase, where the presence of hydrogen is undetectable by AES. Following cleaning with an argon-ion beam, AES of the trap showed the surface to be contaminant-free gold. (T-
he method is sensitive to a coverage fraction of ∼1% and no impurities were seen at this level.) A duplicate trap was used to measure axial heating rates which, before cleaning, gave an inferred spectral density of electric-field noise of SE 1⁄4 40ð1Þ × 10−12 V2=m2 Hz for ω 1⁄4 2π × 3.6 MHz. The result is plotted as point [46]c in Fig. 23. The frequency scaling was measured to be α 1⁄4 1.53ð7Þ. The trap was then cleaned using an argon-ion beam and the heating rate was remeasured. This gave an infe-
rred spectral density of electric-field noise of SE 1⁄4 0.25ð1Þ × 10−12 V2=m2 Hz, a factor of 160 lower than before cleaning. The point is plotted as [46]d in Fig. 23. (Points [46]c,d in Fig. 23 are for improved cleaning parameters and at a higher trap frequency than points [46]a,b in Fig. 8.) The frequency dependence after cleaning remained essentially unchanged at α 1⁄4 1.57ð4Þ. It seems that the source of noise before cleaning was a few monolayers of (hydro)carbon on the surface of the gold, wh-
ich could be cleaned off by argon-ion-beam cleaning. This situation seems to match well to the adatom diffusion considered theoretically in Sec. V.D. The process was shown to be repeatable by reexposing the trap to air and then vacuum baking again. The field noise before cleaning was 90ð10Þ × 10−12 V2=m2 Hz, which returned to 0.75ð5Þ × 10−12 V2=m2 Hz after argon-ion-beam cleaning. With no further processing this rose slightly to 1.1 × 10−12 V2=m2 Hz but then remained constant. Subsequent experimen-
ts showed that the improvements obtained by argon-ion-beam cleaning persisted for at least ten weeks (Hite et al., 2013). The frequency scaling of this noise source (both before and after cleaning) is different to that observed by Allcock et al. (2011). The absolute level before cleaning was also lower than the level seen by Allcock et al. (2011) after cleaning. Despite the efficacy of surface cleaning in both instances, the difference of the absolute heating rates and frequency scalings suggests -
that Hite et al. (2012) may not be limited by the same heating mechanism as Allcock et al. (2011). Following the work of Hite et al., Daniilidis et al. (2014) performed similar investigations of in situ ion-beam cleaning. Using a trap with electrodes made of copper and aluminum on a fused-quartz substrate with d 1⁄4 100 μm they saw a similar decrease in the level of noise following argon-ionbeam cleaning: it was reduced from 1.2 × 10−12 to 0.02 × 10−12 V2=m2 Hz at frequencies just below 1 MHz. Thi-
s suggests that their experiment was also limited by surface contaminants. For comparison, these are plotted as points [57]a,b in Fig. 23. The value of α was measured to be 1.27(23) before cleaning, and 0.95(28) after cleaning. In contrast to Hite et al. (2012), they observed that—even after
cleaning—the trap surface was not atomically clean and oxide free. Nonetheless, they found that after cleaning they were no longer limited by these surface contaminants, but rather by technical noise, observing a resonance in the frequency spectrum around 800 kHz consistent with noise from their filter board.
H. Conclusion
In conclusion it can be seen that, in certain instances, it is possible to directly link the ion heating to specific aspects of the experiment or to specific changes made. While the absolute levels of heating observed in many of these experiments are rather similar, the sources of heating in those cases where it can be identified are seen to be diverse. This conclusion, which was first hinted at by the wide-ranging frequency-scaling behavior reported in Sec. III.A, has now been explicitly borne ou-
t. As such one cannot investigate the electric-field noise observed in ion traps as some homogeneous phenomenon, but rather as many different phenomena which must be carefully teased apart.
VII. OPEN QUESTIONS
Having looked at mechanisms which can be more or less established, there exist a number of experiments where the noise is well characterized, but which do not lend themselves to an unambiguous identification of the noise source. These are discussed next in turn.
A. Cryogenic noise floor
Cooling an ion trap to cryogenic temperatures reduces the ion-heating rate (see Sec. III.C)—and by implication reduces the electric-field noise. At MIT temperature scalings in the range 2 < γ < 4 have been observed, until a noise floor is reached below around 30 K. Labaziewicz, Ge, Leibrandt et al. (2008) suggested that the effect could be accounted for by a continuous spectrum of thermally activated random processes such as charge traps or adsorbate diffusion. (This is discussed further in Secs. -
V.B–V.D.) While such models may be able to account for the observed behavior, they are not the only mechanisms which could, in principle, explain the observed features. While the mechanisms suggested are speculative, they indicate that the observed effects do not conclusively or unambiguously point to a particular source, and that one or more of a number of mechanisms may be at work in cryogenic systems.
1. Johnson and technical noise
While every effort is usually made to keep cabling short, cryostats generally require longer wires between the trap-drive electronics and the trap. If the driving and control electronics are held at room temperature [which is often, although not always the case: cf. Poitzsch et al. (1996) and Gandolfi et al. (2012)], short wires would provide little thermal resistance and lead to a significant heat load at the cold stage (Ekin, 2007). Instead, longer wires are used, allowing the heat to be exchang-
ed between the wires and the cold finger. It is also advantageous, from the perspective of the thermal load, for
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1465
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 these wires to have a low thermal conductivity and consequently a higher Ohmic resistance. Using longer wires of higher resistance has the advantage of a much lower heat load at the cold stage. However, it also means that in addition to the basic resistance of the trap electrodes (which at cryogenic temperatures may be ∼10 mΩ) there is also Johnson noise from the cabling, which may have a resistance of ∼10 Ω. As the temperature is reduced the resistance of most cables scales approximately linearl-
y with T. This would lead to an expected value of γ 1⁄4 2 (see Sec. IV.D.3), as observed by Labaziewicz, Ge, Leibrandt et al. (2008) in experiments with good (i.e., low heating-rate) traps. The experiment used phosphor-bronze cables (Labaziewicz, 2008), for which the resistance changes only by around 20% between 300 and 4 K (Tuttle et al., 2010). If the experiment were limited by this resistance then one would expect a still smaller value of γ. However, if the experiment were limited by other resi-
stances, a value of γ 1⁄4 2 is unsurprising. At some temperature—which can vary significantly depending on the purity of the material (Ekin, 2007)—the resistivity would plateau, becoming independent of temperature and leading to an exponent of γ 1⁄4 1. Even if the resistance of the cabling were to go to zero, at some point the noise would be limited by the technical noise of the drive electronics. In this case, where the driving electronics is outside the cryostat, and where the rf and dc sources,-
 leads, and filters remain at a constant temperature throughout the measurement (Labaziewicz, Ge, Leibrandt et al., 2008), this noise level would be independent of the temperature at the trap and appear as a leveling off of SE.
2. Magnetic pickup
In order to adequately exchange heat between the electrical cabling and the cold finger, the cabling in a cryostat is wrapped several times around each heat stage in the cryostat (Ekin, 2007). This means that the level of EM pickup could be considerably higher than in typical room-temperature systems, where lengths of wire are generally kept to an absolute minimum (see Sec. IV.C for a discussion of EM pickup). The cryostat shrouds (at room temperature) provide a good level of shielding for electri-
c-field noise, although viewports, imperfect seams, and other defects can allow non-negligible amounts of EMI through (Miller and Bridges, 1966; Bridges, 1988; Rajawat, Kalghatgi, and Ron, 1995). As the temperature is reduced, the resistance of the copper heat shields decreases, and the magnetic-shielding effect increases. This effect has already been noted in connection with the improved coherence times of hyperfine qubits when shielded from variations in magnetic fields at hertz frequencies (Bro-
wn , Wilson et al., 2011). At radio frequencies, the improvement of shielding with reduced temperature might be expected to lead to a reduction in the ion-heating rate. Such an effect would also reach a plateau when the heating becomes limited by some effect other than EM pickup.
3. Fluctuating adatom dipoles
As discussed in detail in Sec. V.C.3, adatoms whose dipole moment undergoes thermally induced fluctuations can exhibit noise with similar characteristics to the behavior observed
by Labaziewicz et al. Considering a planar geometry, and choosing some reasonable parameters for the adsorbate properties, this mechanism might be expected to display γ ≈ 2.5 above an activation temperature of a few tens of kelvins. This is in broad agreement with the experimental observations. In trap [22]a [for which γ 1⁄4 3.0ð2Þ] the frequency scaling was measured at cryogenic temperatures and found to be α ≈ 1. The scaling predicted in Sec. V.C.3 for fluctuating adatom dipoles was α 1⁄4 0 at l-
ow frequencies and α 1⁄4 2 at high frequencies. The simple model here contains many unknown parameters, and it may be that—with the particular parameters of the contamination in this instance—the trap was being tested near the characteristic frequency. In summary, behavior observed by Labaziewicz, Ge, Leibrandt et al. (2008) does not immediately rule out the involvement of Johnson noise or EM pickup. Whether the appearance of a noise floor at T ≈ 30 K is due to an exponential suppression of therma-
lly activated fluctuators or set by a combination of different sources of electrical noise in the circuit is still an open question. Recently, Bruzewicz, Sage, and Chiaverini (2015) also observed and characterized a low-temperature plateau in γðTÞ. By considering the frequency and temperature scaling of the noise in their particular system they showed that—at least for the basic parameter estimates made in this reviewtheir results were not well described by the models presented here for Johnson no-
ise (Sec. IV.D), thermally activated TLFs (Sec. V.B.3), fluctuating adatom dipoles (Sec. V.C), or adatom diffusion (Sec. V.D). This result underscores the need for further work, experimental and theoretical, in understanding such behavior.
B. Noise above superconductors
The ion-heating rates above superconducting surfaces have been measured in niobium traps and niobium nitride traps (Wang, Ge et al., 2010). Nb (or NbN)-on-sapphire surface traps, with an ion height of 100 μm, were operated at around 6 K (TcNb 1⁄4 9.2 K, TcNbN 1⁄4 16 K). The inferred electric-field noise above both traps was comparable to the lowest value of electric-field noise measured in Au, Ag, and Al traps of the same design in the same apparatus. Furthermore, the temperature of a single niobi-
um trap was varied across the superconducting transition. The heating rates above and below Tc were comparable. Based on their observations, Wang, Ge et al. (2010) concluded that the heating observed in this experiment was not due to the buried defects in, or the resistance of, the trap electrodes. They further surmise that the only remaining option is that the observed heating is predominantly a surface effect. However, from the wide variety of possible mechanisms which may play a role in the hea-
ting observed in ion traps, there may be other possible explanations yet to be excluded, as discussed in Sec. VII.A: Johnson noise in cabling, technical noise from drive electronics, and EM pickup would all be expected to be independent of electrode material and remain essentially unchanged when the trap itself becomes superconducting.
1466 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 C. Frequency-independent heating rates
One of the largest traps in which heating rates have been measured—trap [47] (Poulsen, Miroshnychenko, and Drewsen, 2012)—which also had the lowest heating rate of any room-temperature ion trap, exhibited a heating rate which was independent of the motional frequency over the range 280–585 kHz, except for a narrow resonance at 295 kHz. The trap was made of stainless-steel rods at a distance of 3500 μm from the ion and plated with 5 μm of gold. The resonance was traced to a nearby switched-mode pow-
er supply (discussed in Sec. VI.B), although the cause of the underlying heating rate (indicating a noise which scaled with α 1⁄4 −1) is unclear. Understanding the situation in this trap may be of significance to quantum-information-processing experiments, particularly in the low-frequency regime: certain gates which use the ions’ motional dipole to mediate the interaction (Cirac and Zoller, 2000) work faster at lower trap frequencies, as the ions are less tightly localized. This, however, can cau-
se technical challenges (Kumph, Brownnutt, and Blatt, 2011) as the heating rate (normally) increases at lower trap frequencies which cancels or even outweighs any benefit of the increased gate speed. Should a regime be found in which this were not the case, there may be new options available for scalable quantum computing. Bare blackbody radiation noise, at the temperatures and frequencies of interest, would be expected to increase with frequency and scale with α 1⁄4 −2, as discussed in Sec. IV.A.-
 By additionally considering (conjectural) external sources of rf noise, or frequency-dependent shielding effects, the observed scaling may be consistent with technical noise. This verdict is not, however, definitive and further investigation would be required in order to draw firm conclusions. A few possible avenues are mentioned. First, and most obvious, the trap is large. It is almost a factor of 3 bigger than the next largest Paul trap in which a heating rate has been measured: trap [13] (Home-
, 2006). Moreover, it is almost a factor of 10 bigger than the next largest trap in which α has been measured: trap [7]g (Turchette et al., 2000). It would be interesting to know what happens between these sizes. A second interesting feature of the trap is that it is made of stainless steel. This is not a common trap material, having previously been used only for a few large traps (Rohde et al., 2001; Home, 2006; Benhelm et al., 2008), none of which have been used to measure α. Stainless steel has-
 the unusual property of having better magneticfield shielding at lower frequencies (over the range 0.110 MHz) (Kaye et al., 1995). While vacuum chambers are standardly made of stainless steel, it is not clear what shielding effect, if any, might be gained from traps made of stainless steel. A final unusual aspect of the Aarhus trap’s operation is noted. Almost all traps discussed in the literature, and all traps in which α has been measured, create the trapping potential by driving some electrode-
s with an alternating voltage Vrf cosðΩrftÞ, while keeping the remaining electrodes at rf ground. In the trap used by Poulsen et al. some electrodes were driven with an alternating voltage ðVrf =2Þ cosðΩrftÞ, while the remaining electrodes were driven 180° out of phase,
with −ðVrf=2Þ cosðΩrf tÞ. Provided the far-off ground (such as the vacuum chamber) is a long way away and well shielded from the ions by the trap electrodes, these two methods are identical but for the former having a quasiuniform field oscillating at the trap-drive frequency. In most traps, however, the end caps—being close to the ions and held at rf groundbreak the symmetry between the two situations. By applying rf voltages to the end caps Poulsen et al. preserved the idealized behavior even ag-
ainst such symmetry breaking. It is not immediately obvious why this would affect heating rates, but is mentioned for completeness.
D. Very low absolute heating rates
Trapping 9Beþ in a molybdenum ring trap with an ionelectrode distance of d 1⁄4 125 μm, Turchette et al. (2000) observed a spectral density of electric-field noise of 140 × 10−12 V2=m2 Hz at ω 1⁄4 2π × 7.9 MHz, with a frequency scaling of α ∼ 0. The trap was removed from vacuum and cleaned with HCl to remove the Be coating deposited by the atomic source. It was then electropolished in phosphoric acid and rinsed in distilled water followed by methanol. Following this treatment the noise was remeasur-
ed and found to be 0.7 × 10−12 V2=m2 Hz at around the same frequency. The trap also exhibited a frequency scaling of α 1⁄4 6.0ð2Þ (over the range measured 3.2 MHz < ω=2π < 8.2 MHz). The trap before and after cleaning is referred to in this review as [7]c,h, respectively. In a second, larger trap (d 1⁄4 280 μm), made in the same piece of metal as trap point [7]c, the spectral density of electric-field noise was measured to be 7.4 × 10−12 V2=m2 Hz at ω 1⁄4 2π × 3.5 MHz. Following the same cleaning t-
reatment as described previously, the noise was measured to be 0.014 × 10−12 V2=m2 Hz at ω 1⁄4 2π × 3.3 MHz, a factor of 500 reduction from the initial measurement. The trap also exhibited a frequency scaling of α 1⁄4 4.0ð8Þ (over the range measured 1.3 MHz < ω=2π < 3.5 MHz), suggesting that even lower heating rates might have been attainable at higher trap frequencies. The trap before and after and after cleaning is referred to in this review as [7]d,i, respectively. It is not clear why the ultim-
ate heating behavior in these traps was different from the initial heating behavior and also different from other traps. It was conjectured by Turchette et al. that the modified behavior for traps [7]h,i was due to a less-than-usual deposition of beryllium on the electrodes. However, even with the advent of photoionization loading, and the very low fluxes this requires (Kjærgaard et al., 2000; Deslauriers et al., 2006; Brownnutt et al., 2007), the effect has never been reproduced. Should the resul-
t be reproduced, it would be of significant interest to the ongoing search for low heating rates.
VIII. OUTLOOK
Given the present state of understanding in the literature, as summarized in this review, there are several ways in which ion-trap work, and more generally any work relating to fluctuating electric fields near surfaces, might proceed. The noise may be viewed as a problem to be removed, and steps can be taken to reduce it without further effort to
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1467
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 understand the exact causes. Alternatively, either for its own sake or in an attempt to be better able to minimize it, the noise may be further investigated. This could take the form of continued heating-rate measurements in ion traps, or of characterizing—experimentally or theoretically—particular parts of the system separately. In practice, any given project is likely to draw on a combination of these options, to differing degrees, depending on its specific aims. They are discussed here in turn-
.
A. Reduction of noise
Inasmuch as ion-trapping experiments wish to study the basic nature of light-matter interactions, probe the foundations of quantum mechanics, or build better clocks, electric-field noise—whatever its causes—is almost always a distraction from the physics under investigation. In this regard a pragmatic approach, which does not interest itself with what causes the noise beyond knowing how to suppress it, and which allows experiments to move forward, may be attractive. To this end, a number of things-
 should be considered. There are multiple sources of electric-field noise to be reckoned with, a number of which can contribute to heating at or near a level which can limit trapped-ion experiments. If great effort is taken to suppress one (and only one) effect it is likely that the experiment will be limited by a combination of the other effects. Consequently, every precaution should be taken to suppress all effects. Ideally, the laboratory environment should be kept as electronically quiet as po-
ssible. However, because it is impossible to know all the sources of rf radiation a priori, shielding is necessary to maintain a repeatable experiment. Ambient electric fields can be blocked by a Faraday cage, as used in the experiments of Daniilidis et al. (2014) and Weidt et al. (2015). Mu-metal shielding, as used by Monz (2011), attenuates both electric- and magnetic-field noise, although it has drawbacks due to its greater cost, weight, and bulk. At low temperatures the shielding effect of cop-
per shrouds in a cryostat can offer significant advantages (Brown, Wilson et al., 2011). Any electronic devices attached to the experiment, such as voltage sources for dc or rf electrodes, should be as low noise as possible. Noisy power supplies (Poschinger et al., 2009) and dc control (Britton, 2008) can contribute noise at a level which can limit experiments. Starting from initially quiet sources, these should be filtered as heavily as possible, noting also that nonoptimal filter design can also-
 introduce noise at a level which can limit experiments (Harlander, 2012). The filters should be situated as close to the trap as possible to limit pickup of noise from fluctuating electric or magnetic fields after the filters. It has been known for a long time (Wineland, Monroe, Itano, Leibfried et al., 1998), but bears repeating, that technical noise can be neglected in iontrap experiments if, and only if, great pains are taken to reduce it as far as possible. Any dielectrics present should be a-
s low loss as possible. This includes dielectrics in electronic components such as capacitors, as well as any other material which is exposed to rf radiation near the trap. These might include the trap substrate, mountings for the trap, and any in-vacuum optics.
The trap-electrode surfaces should be as clean as possible. In at least some cases, exposure of the electrodes to flux from the atomic oven has been linked to increased heating (Turchette et al., 2000; Letchumanan et al., 2007). This can be minimized by using more efficient ionization and loading methods (Kjærgaard et al., 2000; Cetina et al., 2007), by cleaner loading systems (DeVoe and Kurtsiefer, 2002; Brownnutt et al., 2007; Sage, Kerman, and Chiaverini, 2012), or by shielding the trap electro-
des from the flux (Britton et al., 2009; Allcock et al., 2011; Doret et al., 2012). These precautions may not ultimately prove sufficient as the act of ionizing atoms may degrade the trap surface (Daniilidis et al., 2011). This problem can be mitigated in a segmented trap by using separate zones for loading and for operations (Blakestad et al., 2009; Doret et al., 2012). A variety of noise mechanisms can be suppressed by operating traps at cryogenic temperatures. This could be expected to improve -
“typical” traps by 2 orders of magnitude, while traps with initially high heating rates may be improved even more. Cryostats have a number of advantages besides suppression of heating rates, including fast installation of new traps, ultralow background pressures, and the possibility of using novel materials. Weighed against this is their expense (both the initial costs of the cryostat and running costs related to cryogens) and possible increased vibration. To remove the causes of noise created by -
surface contaminants the traps may be cleaned in situ. Modest improvements have been demonstrated using laser ablation cleaning (Allcock et al., 2011). Improvements of around 2 orders of magnitude have been reported using cleaning by argon-ion bombardment (Hite et al., 2012; Daniilidis et al., 2014). Both methods should be used with care as they aggressively remove material from the trap surface and entail the possibility of damaging the trap. Once every effort has been made to reduce the sources -
of noise, there are still further options for reducing the heating rates. Almost all noise sources which are likely to limit ion traps have lower spectral densities at higher frequencies. Consequently, heating rates can be reduced by operating experiments so that ions have higher motional frequencies. An often-overlooked conclusion of Turchette et al. (2000) regards another rather obvious possibility for reducing the heating rate: bigger traps have smaller heating rates. Turchette et al. noted tha-
t with relatively little reduction in the trap secular frequency (which determined the fastest gate speed for many gate implementations) a significant decrease in the heating rate compared to the logic-gate speed appeared possible by using larger traps. The greater amount of data now available suggests that increasing the trap size will not necessarily bring the level of improvement initially anticipated by Turchette et al., although it will bring some. Moreover, given the possibility of ultrafast-
 gates (GarcíaRipoll, Zoller, and Cirac, 2003; Bentley et al., 2013) it may be that in the future the limit to gate speeds set by the motional frequency is relaxed. Thus, while it often seems to be anathema, unless there is some other specific reason for requiring small traps, larger ion-electrode separations could be advantageous.
1468 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 Finally, it has become common to plot and compare SEðdÞ, rather than _ ̄nðdÞ, as this removes the influence of the ion mass and therefore gives a fairer intertrap comparison of the noise. However, it should not be forgotten that it is often the heating rate _ ̄n and not the noise per se which is of interest for many trapped-ion applications. There are many considerations that go into the selection of the ion species to be used (Hughes et al., 1998; Lucas et al., 2003; Wineland et al., 2003). One -
aspect which may be added to the list of considerations is that the heating rate is inversely proportional to the ion mass. Were a heavier-mass ion to be used then, to maintain the same trap frequency and stability parameter, for a given size of trap, the rf voltage must be increased in proportion to the ion mass. In larger traps where high voltages are used already, further increases in voltage may not be feasible. However, for smaller traps, higher voltages may not be prohibitive. By way of illu-
stration, for the same level of electric-field noise, and assuming the motional frequency is unchanged, an 171Ybþ ion will be heated 19 times more slowly than a 9Beþ ion. All other things being equal, this is a similar equivalent benefit as might otherwise be expected by increasing the trap size by a factor of about 7, or by operating the trap at liquid-nitrogen temperatures. In conclusion, there is not one magic bullet which makes all of the problems go away, but rather steps must be taken to ens-
ure that the noise is reduced simultaneously on multiple fronts. In opting to implement multiple of these solutions, however, it should be noted that they may not all be independent. For example, if cryogenic operation reduces noise by freezing out the motion of surface contaminants, and if electrode cleaning reduces noise by removing surface contaminants, then the heating rate of a trap operated at cryogenic temperatures might not be further reduced by in situ cleaning of the electrodes. Recent r-
esults by McConnell et al. (2015) support this idea. However, for many combinations the effect on the heating rate is largely conjectural at this stage; suggestions for future experiments in this direction are given in Sec. VIII.B.6.
B. Investigation of noise in ion traps
Appreciation of the effects underlying electric-field noise in ion traps can aid in finding ways to minimize or mitigate the influence it has on experiments. As electric-field noise above surfaces plays a role in a wide variety of experiments beyond ion traps, an increased understanding in one system may serve to shed light on others. It is also possible that the noise may prove useful; it may, for example, offer new ways to analyze surfaces to complement or extend the existing surface-science too-
lbox. Whatever the reason, further systematic investigation of the noise may be of interest. As this review has pointed out, there are a number of qualifications which must be made concerning any use of trapped ions to characterize noise. The ion only provides information regarding the total noise: how this relates to the several mechanisms potentially causing it requires careful interpretation. Furthermore, characterizing the noise in one experiment does not necessarily say anything about the noi-
se
in an experiment across the hall. As such, while the experiments suggested here will fill in certain gaps in the literature, one should be cautious of claiming too general a result. Given the results may apply only to a particular experiment, all the more care should be taken in generalizing results beyond ion traps to, for example, nanocantilever systems or atom-trap systems. Given these caveats, we consider a number of parameters with respect to which electric-field noise in ion traps may be inv-
estigated.
1. Frequency
It may be expected that α varies between experiments and even takes different values for different parameter ranges in a single experiment. Many noise sources (such as EMI, EM pickup, Johnson noise from filter networks, technical noise, and TLFs) can give rise to resonances at particular frequencies. Some noise sources (such as filtered Johnson noise, fluctuating adatom dipoles, and adatom diffusion) exhibit a roll-off at higher frequencies. The characteristic frequencies at which such resonances -
or roll-offs occur can provide significant information about the underlying mechanism and go a long way to constraining theory. Most experimental results to date for frequency scaling infer that, within some range of uncertainty, over the frequency range measured, and at the resolution taken, α is constant for that experiment. Other experiments clearly show the presence of resonances in the spectrum (Poulsen, Miroshnychenko, and Drewsen, 2012; Daniilidis et al., 2014). Future work should be consid-
ered to search for changes in α. This may necessitate higher-resolution scans of the trap frequency and require measurements over a larger range of frequencies. This is more time consuming than taking a smaller number of points, but the information provided by any features in the spectrum provides much greater insight into possible mechanisms. The frequency scaling expected for EMI, EM pickup, Johnson, and technical noise can vary greatly depending on the details of the apparatus. These include th-
e details of the driving electronics, the wiring, and the filter design. Future investigations of heating which may either implicate or exclude such noise sources would benefit from including comprehensive details of the associated electronics.
2. Distance
As we have gone to pains to highlight, Figs. 8 and 12 are of limited use in elucidating distance-scaling laws for noise. To date, only one experiment has made a controlled measurement of the distance scaling (Deslauriers, Olmschenk et al., 2006). Given the complexity of the issues at hand, the case is clearly not closed for investigating distance-scaling behaviors. There are many different mechanisms at play and great care must be taken to tease these apart and understand them. Just as multiple ex-
periments measuring frequency scalings have shed light on the multifaceted nature of the noise (see Sec. III.A), so multiple distance-scaling measurements may provide a fuller picture. For ease of interpretation, such experiments could be carried out in traps with as simple a geometry as possible. Of the geometries which support an analytical solution to the
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1469
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 Laplace equation (Morse and Feshbach, 1953), two form a trapping potential, shown in Figs. 26(a) and 26(b). The toroidal solution is a ring trap, sometimes referred to as a Paul-Straubel trap (Yu, Nagourney, and Dehmelt, 1991). The bispherical solution has never been used in practice, although it is approximated by a needle trap without sleeves. The bispherical solution should be easier to scale in a controllable way, in a manner similar to the work of Deslauriers, Olmschenk et al. (2006), by mou-
nting the spheres on a pair of translation stages, as shown in Fig. 26(c). Another possibility for scaling the ion-electrode separation uses electrical, rather than mechanical, means to move the ion closer to the trap. This can be achieved by varying the amplitude of the rf voltage applied to some, but not all, electrodes. Using this method the position of the rf null, and thereby the position of the ion, can be moved. This was first used by Herskind et al. (2009) to move the ions small distances.-
 It was later proposed as a way to measure heating rates by Kim et al. (2010). In this latter proposal a surface ring trap has multiple concentric ring electrodes to which different rf voltages can be applied, thereby changing the ion height d. As there is no mechanical motion involved, and with sufficient control of the variable rf voltages, this can be done in a highly controlled and repeatable way. Also, being a planar trap, the geometry is—for certain noise mechanisms—simple to model. For a me-
chanism such as fluctuating adatom dipoles the trap can be treated as a near-infinite plane: the dimensions of the individual electrodes are unimportant. By contrast, Johnson noise would be correlated across each electrode, but be uncorrelated between electrodes. Consequently, the noise due to particular electrodes would need to be individually calculated and summed. Technical-noise sources may provide a more complicated picture as the noise they inject into the system may vary as a function of th-
e rf voltage being supplied. With careful design of the experiment it should be possible to distinguish between such sources. As stressed throughout this paper, while the ion-electrode separation is known relatively easily, and while it is an
important number for many practical purposes, it is not necessarily useful for elucidating heating mechanisms. Some papers provide characteristic distances (assuming a certain noise model), or provide sufficient detail that they may be calculated, although this is not always the case. It would be helpful for future literature to include traps’ characteristic distances, for a selection of likely noise models. Calculating the characteristic distances for arbitrary geometries is not trivial, and the -
results can depend sensitively on how well the model reflects, for example, slight imperfections in the real trap geometry. A simulation-independent experimental benchmark for characteristic distances of Johnson noise (or other noise sources which are correlated across the entire electrode) can be achieved by deliberately applying excess white noise to one or more trap electrodes and measuring the heating rate of the ion (Daniilidis et al., 2011). Using this method it is possible to measure the ch-
aracteristic distances to various trap features. This can either act as a benchmark against which simulation results are tested or be used to obviate the need for simulations. Given the complexity of modeling trap geometries, and of changing the distance to the trapping electrodes, it may be advantageous to characterize the heating due to external objects which are independent of the trap operation. It has been proposed that this could be achieved by using an ion trap with an open geometry and var-
ying the distance between it and some external object (Maiwald et al., 2009; Harlander et al., 2010; Brownnutt et al., 2012). At room temperature, heating-rate measurements have been performed in traps varying in size by over 2 orders of magnitude: 30 μm < d < 3500 μm. At cryogenic temperatures the range is much smaller: 40 μm < d < 230 μm. Given the ease and repeatability of fabricating surface traps, and the short times required to install new traps in cryogenic systems (Wang, 2012), it would be-
 straightforward to measure traps larger than d 1⁄4 230 μm. This could provide a reasonably standardized geometry to determine the distance scaling and, given the current paucity of data in this range, even a few results in larger traps would provide significant information.
3. Correlation length
Different mechanisms for electric-field fluctuations often result in significantly different spatial correlations of the noise. Systematic measurements of noise-correlation lengths with single- and multi-ion systems could shed further light onto the origin of the underlying physical processes. If the noise is correlated over distances of the order of the ion-electrode separation or larger, a single ion can be used to detect such correlations by measuring heating rates along different directions an-
d at different positions in the trap. For example, the Johnson noise considered by Leibrandt, Yurke, and Slusher (2007) is correlated across each electrode, but uncorrelated between electrodes. Consequently, the axial components of the noisy electric field from a single segment cancel near the center of the electrode and at this location the axial heating would be much lower than the heating observed near the edge of an
(a) (b)
(c) Rel
trans. trans.
2d
FIG. 26. Only two analytical solutions to the Laplace equation are capable of trapping: (a) toroidal solutions and (b) bispherical solutions. Toroidal solutions are already well known as ring traps, although bispherical solutions would be simpler to scale in a controllable way. This could be achieved in a manner similar to the work of Deslauriers, Olmschenk et al. (2006), by (c) mounting the spheres on a pair of translation stages. The vacuum chamber provides a far-off ground.
1470 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 electrode. Such a behavior could be relatively simple to measure experimentally. As discussed in Sec. VI.A, another method of inferring the correlation length of noise on surfaces can be performed using traps with movable electrodes. With reference to Fig. 24, in the limit of d ≫ Rel (in this example Rel ∼ rprolate) the value of β is the same for both Johnson noise (infinite patch size) and models with finite correlation lengths. For d ∼ Rel the ion-electrode separation at which β departs from th-
is value is related to the patch size. By measuring βðdÞ it is possible to determine the patch size or, more generally, the noise-correlation length rc. This method requires detailed modeling of the electrode configuration and will be limited by the minimum achievable ion-electrode distance. Noise-correlation effects appear in multi-ion systems, where the heating rates for different normal modes depend strongly on the correlations of the noise over the extent of the ion crystal (see Sec. II.C.3). -
The field correlations at the positions of the ions are different from the correlations on the surface and depend again on the trap-surface distance and details of the trap geometry. This is illustrated in Fig. 27 where, for a simple planar geometry, the heating of the common and the relative transverse mode for two ions separated by a distance x0 is considered. The two modes
couple to the symmetric δEð0Þ 1⁄4 1⁄2δEzðt; r1Þ þ δEzðt; r2Þ=pffi2ffiffi
and antisymmetric δEð1Þ 1⁄4 1⁄2δEzðt; r1Þ − δEzðt; r2Þ=pffi2ffiffi field combinations, respectively. The corresponding spectral den
sities of the electric-field noise Sð0Þ
E and Sð1Þ
E are compared at different ion-surface spacings. Noise sources with different correlations lengths become distinguishable for d ≲ x0, while for distances d ≫ x0 the noise always appears to be correlated. Traps where ions are confined in separate but proximate wells and x0 ∼ d (Brown, Ospelkaus et al., 2011; Harlander et al., 2011; Wilson et al., 2014) would be particularly suitable to search for such correlation effects.
4. Temperature
In the traps where it was measured, the electric-field noise scales less strongly at low temperatures (6 K < T ≲ 50 K) than at higher temperatures (50 K ≲ T < 300 K). Despite such qualitative similarities there may be multiple effects at
play. This would not necessarily be surprising, given the wide variety of noise sources in different experiments. Such measurements therefore bear repetition by other groups to see what happens in different experiments, possibly limited by different noise sources. If the noise floor is set by injected noise from sources outside the cryostat then, if the temperature were further reduced, these may remain the limiting factor. However, it may be that traps at millikelvin temperatures have new regimes-
 of operation. In such a case it may also be possible to separate out the damping rate Γ from the occupation number of the thermal bath N ̄ [see Eqs. (18) and (19)]. No controlled measurements have been made regarding the effects of elevated temperature on heating rates. It is feasible to operate ion traps at 400 K or hotter (Chwalla, 2009). By increasing the temperature in a controlled manner, even a modest change of ∼100 K above room temperature would be expected to increase the heating rate by -
a factor of 2–3 (assuming 2 < γ < 4). This should be easily resolved and would provide information on heating in a new regime. Interestingly, for some mechanisms it is also predicted that the heating rate may decrease at higher temperatures (see Fig. 19 and Sec. V.B.5). Combinations of heating or cooling different parts of the apparatus could also shed light on possible heating mechanisms (Chiaverini and Sage, 2014). For example, if the vacuum chamber were heated while the trap was held at a const-
ant temperature it may be expected that shielding of EMI will decrease, due to the increased resistance of the chamber. As a result the ion-heating rate may increase, despite the constant trap temperature. Alternatively, heating (or cooling) the electronics while leaving other parts of the apparatus at ambient temperature would change the heating rate if Johnson or technical noise were limiting factors, while leaving it unchanged if the experiment is limited by other heating mechanisms.
5. Equilibrium dynamics
Prior to the advent of laser cooling, hot ions (∼1 eV) were routinely cooled in Penning traps using resistive cooling (Wineland and Dehmelt, 1975; Itano et al., 1995). In principle, resistive cooling (where hot ions are cooled toward equilibrium with an electronic circuit) is the flip side of Johnsonnoise or technical-noise heating (where cold ions are heated toward equilibrium with an electronic circuit). Resistive cooling has been used and characterized in Penning traps for cooling clouds (N ∼ 1-
05) of electrons (Dehmelt and Walls, 1968; Wineland and Dehmelt, 1975). It is difficult to compare these results to the work at hand, however, as there exist thermalization mechanisms in a cloud which are not present in few-ion crystals or single trapped ions. Work on resistive cooling of single ions in Penning traps is much more scarce [although see Van Dyck, Jr., Farnham, and Schwinberg (1995) and Djekic et al. (2004)]. All such experiments (with either single ions or clouds) are performed in re-
latively large traps where d > 2 mm. Separate experiments implemented resistive cooling in Penning traps where the electronics was held
0.8
FIG. 27 (color online). Effect of noise correlations in multi-ion
traps. The ratio between the spectral noise densities Sð1Þ
E and Sð0Þ
E
evaluated at equal frequencies plotted as a function of the ionsurface distance for different correlation lengths rc. For this plot an exponential cutoff for the noise correlations on the surface has been assumed.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1471
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 at room temperature (Dehmelt and Walls, 1968), 80 K (Wineland and Dehmelt, 1975), and 4.2 K (Gabrielse et al., 1995; Djekic et al., 2004), although no systematic study has been made of the equilibrium behavior as a function of temperature. In Paul traps, characterization of resistive heating has been made by Church and Dehmelt (1969). This experiment cooled a cloud of 104 protons in a spherical Paul trap with d 1⁄4 1.6 mm. The initially hot ions (T 1⁄4 12 000 K) were cooled to 900 K by coupling t-
hem to a resonant tank circuit at 330 K. The discrepancy between the final ion temperature and the temperature of the circuit indicates the presence of some other heating mechanism. This was tentatively attributed to electron bombardment degassing producing sufficient distortion to cause heating of the ions by nonlinearities in the rf field. However, such rf heating has very different outworking in a cloud compared to an ion crystal (Chen et al., 2013). Despite the relevance for ion-heating discus-
sions, no experimental study has been made of resistive cooling—nor of the equilibrium dynamics of trapped-ion heating—for geometries differing significantly from hyperbolic surfaces (such as planar traps), or for small traps (d < 1 mm). Nor have characterizations been made in Paul traps for single ions or for few-ion crystals. Moreover, no consideration has been made regarding the adequacy of the resistive cooling model as a function of frequency, trap size, or temperature. Given the dearth of ex-
perimental data, experiments to characterize the equilibrium behavior of trapped ions—at either 300 or 6 K—should be considered. Beyond such regimes, it may be interesting to cool the external circuits farther: to millikelvin temperatures. Assuming there are no other effects to interfere with the resistive cooling process, it may be possible to reach the quantum regime of the ion’s motion with this method. From here one could measure Γ (and thereby the noncommuting part of the electric field) and -
N ̄ independently (see Sec. II.C.2). Work in Penning traps is not far from such low-temperature regimes (Wrubel et al., 2011). Knowledge about the stationary occupation number  ̄nðt → ∞Þ provides an additional analytic tool to distinguish between equilibrium and out-of-equilibrium noise processes, or to identify whether the noise arises from a low- or high-temperature source.
6. Noise combinations
Characterization of the observed noise as a particular change is made—such as varying the temperature, or cleaning the trap surface—can provide information about possible noise sources, although it is not without ambiguity. By changing several parameters in combination, each of which has been characterized separately, one can infer more than was possible from varying parameters individually. The combinations and permutations are many, but one set of experiments is outlined by way of an example. Cl-
eaning the electrodes with an Ar-ion beam reduces the ion-heating rate observed, an effect attributed to the removal of surface contaminants. Operating traps at cryogenic temperatures also reduces the ion-heating rates observed, possibly
due to suppression of thermally activated processes involving contaminants on the electrode surface. If the conjectured mechanisms are correct it would be expected that, having cleaned the surface, operation at cryogenic temperatures would bring no further improvement. A temperature scaling of γ 1⁄4 0 might then be expected. There are other possible causes for reduced noise at cryogenic temperatures. If the initial reduction in noise as the temperature is reduced from 300 to 30 K is due to improve-
d magnetic-field shielding then it would be expected that γ ≠ 0 when an ion-beam-cleaned trap is cooled. In this situation, however, a cryostat housed in Mu-metal shielding might be expected to exhibit γ 1⁄4 0.
C. Further avenues for investigation of noise
There are a number of aspects of electric-field noise near surfaces which have direct implications for ion traps, but which are not best solved at the trap level. These require a combination of experimental and theoretical investigation and are addressed in turn. • rf heating: Throughout most parts of this paper micromotion heating, or rf heating, has been neglected. This was implicit from disregarding the higher-order terms in Eq. (3). If qx is not sufficiently small (Blatt et al., 1986) or when -
the ion is displaced from the rf null (Blakestad et al., 2009) (see also Appendix B), these higher-order terms become more important. Targeted work in this direction could provide further insight into the role of micromotion on the observed heating and how to use it for measuring spectral densities of electric-field noise at rf frequencies. • Instabilities in small traps: While ion traps are generally operated in a nominally stable region of the solutions to the Mathieu equations, the effect of hi-
gher-order terms in the potential can cause the ions to become highly energetic or unstable (Wang, Franzen, and Wanczek, 1993; Alheit, Kleineidam, and Vedel, 1996). The microscopic surface structure of miniature ion traps has been found to affect the performance of ion traps in mass-spectrometer applications for ion-electrode distances ranging from 1 to several hundred micrometers (Xu et al., 2009). Also, if ion traps are made smaller so that the surface roughness is of a comparable scale to featu-
res of the trap geometry, then the quadrupole assumption made in Eq. (2) is not appropriate. Consequently, the condition qx ≪ 1 is not sufficient to ensure that the higher-order coefficients, C2j in Eq. (10), are small. A quantitative analysis of anharmonicities in small ion traps due to microscopic surface defects sheds light on another possible heating mechanism. This may become increasingly important as traps are miniaturized further. • Spectrum of space-charge noise: Section IV.E considered he-
ating due to space charges from electron emission. Electron emission can usually be treated as white noise. However, in ion traps, field-emitted electrons would be correlated with the applied rf. It may be worthwhile to calculate what effect this pulsed white noise has on the electric-field spectrum and
1472 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 thereby on the ion heating. It may also be useful to investigate the secondary effects of electron bombardment on the anode, so that this source of noise could also be eliminated. • Characterization of TLFs: When considering TLF models in Sec. V.B, a number of different cases were considered regarding the fluctuators’ spatial and energetic distribution. Different distributions lead to different predicted behavior. By experimentally measuring how, for example, the frequency-scaling exponent α vari-
es as a function of temperature, it may be possible to constrain certain aspects of the model. This could constrain, or shed light on, what the physical mechanisms might be that underlie the TLF behavior. • Characterization of adsorbates: When considering adsorbates in Secs. V.C and V.D a number of estimates had to be made regarding, for example, the types of adsorbate covering the surface and the way those adsorbates are bound. There are two respects in which these estimates could be greatly impr-
oved. First, it is not known experimentally exactly what kind of surface coverage occurs: what materials, in what conformations, etc. Materials-science experiments are required to characterize the surfaces of ion traps, as the ion sees them. Second, most theoretical studies of adsorbate behavior focused on extreme cases of either alkaline atoms (which are strongly bound to the surface) or noble gases (which are very weakly bound to the surface). Theoretical work is needed to develop models in the -
intermediate regime for atoms such as carbon and oxygen which are probably what contributes to ion-trap noise in practice. With this in mind, the investigation comes full circle in new experiments which integrate surface-analysis tools into iontrap experiments to allow the microscopic structure and composition of surfaces to be measured, while using the ion to measure the electric-field noise (Hite et al., 2012; Daniilidis et al., 2014). Ion traps can then contribute to the toolbox of ways to inve-
stigate the surface contamination which may have been limiting them.
D. Conclusion
In conclusion, it is clear that the topic of heating in ion traps is complex and multifaceted. Consequently, it necessarily draws on the insight of many diverse disciplines. At the same time, it can be expected to provide insight of interest to numerous disciplines. The picture provided by ions is complicated by the fact that numerous physically distinct heating mechanisms can generate similar levels of noise and may even manifest similar scaling behaviors in certain regimes. Equally, a single bas-
ic mechanism may manifest itself differently depending on values of particular characteristic frequencies, distances, and temperatures for the situation at hand. These characteristic scales may vary with the experimental apparatus, the trap material, or the type and coverage fraction of surface impurities. Nonetheless, particularly when taken together, and in collaboration with methods from other fields, such a diversity of behavior can potentially be turned into an advantage: ions
offer a multitude of ways via which the noise might be investigated. In laying out the current state of understanding for noise in ion traps, both experimental and theoretical, it is hoped that the way forward for ion-trap research will become clearer. First, in summarizing factors which may need to be considered, this review can provide a reference for those who have no interest in noise, other than to reduce it. Second, it provides an overview of what is known (and what is not known) to provide -
structure both to those who intend to study the noise further or use the noise to study other physical questions.
LIST OF SYMBOLS AND ABBREVIATIONS
Xk X of the kth mode
X ̄ Mean X δX Fluctuation of X A Area of interest on trap surface Ai Area of ith patch Ael Area of electrode contributing to noise AL Area of loop contributing to EM pickup Ap Average patch area aˆ Annihilation operator ˆa† Creation operator aL Lattice constant ax Mathieu stability parameter (in x direction) a0 Extent of ion’s ground-state wave function B Magnetic field B Magnetic-field strength normal to loop b Floquet exponent C Capacitance C2j Floquet expansion coefficients CV Voltage correlati-
on function Cσ Adsorbate-density correlation spectrum C1, C2 Capacitances in Sec. IV.D C3 van der Waals dynamic polarizability prefactor c Speed of light cc.m. Mode function of c.m. motional mode cn Amplitude of motional state jni, also for n ∈ 0; 1; ...
D Characteristic trap dimension D Diffusion constant Di;j Characteristic distance to jth electrode for E field in direction i Dq Characteristic quadrupole distance Dt Diffusion rate due to quantum tunneling D0 Prefactor for thermally activated diffusion d Ion-electrode separation dI Dipole moment of ion dj Distance from ion to jth electrode dk Dipole moment of kth motional mode E Electric field δEð0Þ Symmetric combination of δEiðrjÞ
δEð1Þ Antisymmetric combination of δEiðrjÞ Ei Component of E field in i direction
EðjÞ
i Ei due to jth electrode voltage Estat Static electric field Et Component of E field along trap axis
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1473
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 Emax Largest energy difference in TLF distribution ETLF Energy difference of a two-level system e Elementary charge jei Ion’s electronic excited state ei Unit vector along the i axis, i ∈ x; y; z et Unit vector along the trap axis Fa External noise factor F Filtering factor GE Green’s function of the electric field G Geometrical factor defined in Eq. (64) g Bulk phonon density of states g ̄ Partial phonon density of states jgi Ion’s electronic ground state gD Geometrical factor ∝ E field of a dip-
ole g~D Dimensionless version of gD
Hˆ Hamiltonian
Hˆ ion-field Ion-field interaction Hamiltonian Hˆ t Trap Hamiltonian
Hˆ TLF Hamiltonian of a TLF
h Thickness of a surface layer on electrodes
Iη
R~ Dimensionless integral defined in Eq. (109),
η ∈ ⊥; ∥
k Phonon mode number kx x component of laser wave vector L Inductance l Lattice coordination number M Mass of an atom in the electrode m Phonon number jmi Phonon number state of ion or adatom mad Mass of adatom mI Mass of ion mTLF Effective mass of a TLF m0 Phonon number at t 1⁄4 0 N ̄ Mean phonon occupation of heat bath NA Number of fluctuators within an area A NI Number of ions in a crystal Np Number of patches Nth Phonon occupation number in thermal equilibrium n Phonon number jni Phonon number-
 state of ion or adatom
n_ ̄ Heating rate nB Bose-Einstein distribution ni Unit vector from trapped ion to surface dipole i ns Unit vector perpendicular to the surface n0 Phonon number at t 1⁄4 0 P Used for various probability distributions P Surface polarization density Pn Occupation probability of vibrational level n P0 Normalization constant for P ˆp Quantized momentum of the ion pjei Excitation probability
pBSB
jei Excitation probability on blue sideband
pRSB
jei Excitation probability on red sideband
Q Resonator’s quality factor qx Mathieu stability parameter (in x direction) R Resistance
R~ Dimensionless electrode size for adatom diffusion
Rel Electrode size or radius of curvature RL Real part of inductor’s impedance Rp Patch radius RX Various resistances in Sec. IV.D; X ∈ C, L, MS, S, wires, 1, 2 R12 Effective real circuit resistance seen by ion r Position vector Δr Small displacement of a dipole rc Correlation length rcc Radius of a cylindrical cone on a surface rI Position of the ion (center of the trap potential) ri Position of dipole i on (or in) the trap surface rprolate Radius of spheroidal “needle” electrode S Electrode surf-
ace SB Spectral density of magnetic-field noise SE Power spectral density of electric-field noise
~SE Median spectral density of electric-field noise
SðADÞ
E SE due to adatom diffusion
SðADFÞ
E SE due to adatom dipole fluctuations
SðBBÞ
E SE due to blackbody radiation
SðBBSÞ
E SE due to blackbody radiation above a surface
SðEMIÞ
E SE due to electromagnetic interference
SðJNÞ
E SE due to Johnson noise
SðPPÞ
E SE due to patch potentials
SðPUÞ
E SE due to electromagnetic pickup
SðSCÞ
E SE due to space charge
SðTLFÞ
E SE due to two-level fluctuators
SðkÞ
E SE for kth motional mode Sð0Þ
E Symmetric component of SE Sð1Þ
E Antisymmetric component of SE SEE Energy spectral density of electric-field noise SV Spectral density of voltage noise
SðiÞ
V SV on the ith patch Sμ Dipole fluctuation spectrum due to single dipole
Siμ Spectrum of dipole i S0 SE at zero temperature (fit parameter) s Electrode-electrode separation sη Orientation-dependent constant, η ∈ ⊥; ∥ T Temperature Δt Time interval T  Characteristic temperature of adatom system Tc Critical temperature of superconductor Tmin Minimum relaxation time for symmetric double well T0 Turn-on temperature for noise T1 Characteristic relaxation time of a TLF t Time ~t Dimensionless time tw Waiting time after cooling the ion U Adatom-surface potential UvdW van der -
Waals potential U0 Depth of adatom-surface potential uem Spectral energy density of blackbody radiation u Dimensionless solution of Mathieu equation
1474 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 V Voltage applied to trap electrodes
ΔV Vmax − Vmin
Vb Potential-barrier height for TLFs or adsorbate hopping Vi Fluctuating voltage on the ith patch Vj Voltage on jth electrode VL EMI voltage induced in a loop Vmax Largest TLF barrier height Vmin Smallest TLF barrier height Vpot Potential forming a TLF Vrf rf voltage applied to trap electrode V0 Most-likely TLF barrier height v Sound velocity vl Longitudinal sound velocity vt Transverse sound velocity v0 Dimensionless tip radius in Eq. (46) W Work function ΔW Change in work function w~ Dimensionle-
ss width of surface-adatom potential X0 Amplitude of ion’s secular motion x Position of ion Δx Mean displacement of ion from rf null ˆx Quantized position ion, 3D ˆx Quantized position of ion, 1D xemm Amplitude of excess micromotion xinh Solution to inhomogeneous Mathieu equation x0 Equilibrium separation of two ions in a trap xˆ0 Quantized relative position of the ion y Space coordinate ZESR Equivalent series impedance Z12 Impedance of a circuit across terminals 1 and 2 z Distance from the trap s-
urface zw Separation between wells z0 Equilibrium position of adatom above a surface α Frequency-scaling exponent αp Dynamic polarizability of a particle β Distance-scaling exponent Γ Damping rate Γh Rate of heating from n 1⁄4 0 to n 1⁄4 1
ΓðkÞ
h Γh for the kth motional mode
Γlf
h Heating rate due to low-frequency noise ω ∼ ωt
Γrf
h Heating rate due to noise on rf drive
Γhop Hopping rate between adsorption sites Γn→m Transition rate from jni to jmi Γ0 Characteristic transition rate of adatom fluctuation γ Temperature-scaling exponent Δ Energy difference between two wells Δ0 Tunneling coupling between two wells Δmax Maximum value for Δ Δ0;max Maximum value for Δ0 Δ0;min Minimum value for Δ0 δ Frequency shift δs Skin depth ε Relative electric permittivity ζ Numerical factor in Eq. (96) η Lamb-Dicke parameter Θ Unit step function θ Dielectric loss
θcc Angle of a cylindrical cone on a surface κ Dipole geometrical efficiency factor κi;j Generalized κ for i direction and jth electrode λ Tunneling parameter λ0 Most-likely tunneling parameter μ Dipole on a surface μ Dipole moment Δμ Change in dipole moment on/off patch μˆ Dipole operator of a TLF δμi Fluctuating dipole moment ⊥ to surface μn Average dipole moment of adatom in state jni μ0 Permeability of free space νn Vibrational frequency of adatom in motional state jni, also for n ∈ 0; 1; ...
νnm νn − νm
ν10 Characteristic vibrational frequency 1⁄4 ν1 − ν0 Ξl Longitudinal deformation potential constant Ξt Transverse deformation potential constant ρ Density of electrode material ρcoh Coherence of a superposition state ρe Electrical resistivity ρI Reduced ion density operator ρ0 Reduced ion density operator at t 1⁄4 0 σd Areal density of surface dipoles σp Patch coverage fraction σx, σz Pauli operators σ~ z Pauli operator in a rotated eigenbasis hσzieq Equilibrium value of TLF population difference -
τe Temporal width of electron pulse τ0 Characteristic time of TLF switching or adsorbate hopping Φ Potential (in space) Φdc dc potential Φp Potential of a patch Φrf rf potential Φ0 Constant electrode potential
φ Angle used in the diagonalization of Hˆ TLF φ0 Initial phase of ion’s motion χi Step function defining patch i jψi Wave function of the motional state of the ion jψLi Wave function in left well jψRi Wave function in right well jψ0i Wave function at t 1⁄4 0 Ωc Rabi frequency on carrier transition ΩL Rabi frequency Ωn;m Coupling between states jg; ni and je; mi Ωrf Trap-drive frequency ω Angular frequency Δω ω − Ωrf
~ω Dimensionless frequency for adatom diffusion ωax Ion motional frequency in the axial direction ωc.m. Frequency of c.m. mode ωd Characteristic frequency set by d ωi Ion motional frequency in the i direction, i ∈ x; y; z
ωR Characteristic frequency set by Rel ωr Ion motional frequency in the radial direction ωrec Recoil frequency of a trapped ion ωt Ion motional frequency ac Alternating current
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1475
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 AES Auger-electron spectroscopy c.m. Center of mass DAC Digital-to-analog converter dc Direct current EPR Equivalent parallel resistance ESR Equivalent series resistance EM Electromagnetic EMF Electromotive force EMI Electromagnetic interference MF Medium frequency PDOS Partial density of states rf Radio frequency rms Root mean squared TLF Two-level fluctuator
ACKNOWLEDGMENTS
This work was supported by the European Research Council through the Advanced Research Project CRYTERION, Proof of Concept Grant CARAT, and the START Grant No. Y 591-N16; the European Union Project SIQS; the Austrian Science Fund (FWF) Project SFB FOQUS; Eranet NanoSci-E+ Project NOIs; and the Institute for Quantum Information GmbH. This research was also funded by the Office of the Director of National Intelligence (ODNI), Intelligence Advanced Research Projects Activity (IARPA), through the Army-
 Research Office Grant No. W911NF-10-1-0284. All facts, opinions, or conclusions contained herein are those of the authors and should not be construed as representing the official views or policies of IARPA, the ODNI, or the U.S. government. We owe a debt of gratitude for the patient assistance of the iontrapping community whose work we reviewed, particularly from current and past members in the groups of I. Chuang (MIT, Cambridge, MA), C. Monroe (University of Maryland, MD), and D. J. Wineland (N-
IST, Boulder, CO). We also thank H. Sadeghpour for insightful discussions on the theoretical aspects.
APPENDIX A: DERIVATION OF THE HEATING RATE Γh
This Appendix summarizes the derivation of the heating rate Γh, given in Eq. (10) using time-dependent perturbation theory. For the following derivation to be valid it must be assumed that the disturbance of the ion by the noisy electric field is weak jdIδEðtÞj ≪ ħωt, and that the correlation time of δEðtÞ is short compared to the resulting heating time 1=Γh. In the interaction picture with respect to the trap Hamiltonian Hˆ tðtÞ, the motional state of the ion can be
written as jψðtÞi 1⁄4 Pn∞1⁄40 cnðtÞjni, where the amplitudes
cnðtÞ evolve as
_cn 1⁄4 i dI
ħ 1⁄2pffinffiffiuðtÞcn−1 þ ffiffiffiffiffiffiffiffiffiffiffi
nþ1
p u ðtÞcnþ1δEðtÞ: ðA1Þ
The ion is initially prepared in the lowest vibrational state j0i, and for short times c0ðtÞ ≃ 1 and cn>1ðtÞ ≃ 0. By integrating
Eq. (A1) for _c1ðtÞ the probability P1ðΔtÞ 1⁄4 jc1ðΔtÞj2 of finding the ion in the first vibrational state after a time Δt is
P1ðΔtÞ 1⁄4 dI2
ħ2
  Z Δt
0
dt0uðt0ÞδEðt0Þ
2 
1⁄4 2dI2
ħ2 Re
Z Δt
0
dt1
Z t1
0
dt2u ðt1Þuðt2ÞhδEðt1ÞδEðt2Þi:
ðA2Þ
For times Δt, which are much longer than the correlation time of δEðtÞ, the lower integration bound for t2 can be shifted to −∞. The heating rate is defined as Γh 1⁄4 P1ðΔtÞ=Δt and using the expansion of uðtÞ given in Eq. (7) it can be written as
Γh 1⁄4 2dI2
ħ2 Re
X
i;j
C 2iC2j
 1
Δt
Z Δt
0
dt1e−iΩrf ði−jÞt1
 
×
Z∞
0
dτe−iΩrfðb=2þjÞτhδEðt1ÞδEðt1 − τÞi: ðA3Þ
For times Δt ≫ Ωr−f1 the integral over t1 averages approximately to zero for i ≠ j and it is equal to Δt for i 1⁄4 j. For a stationary noise process hδEðt1ÞδEðt1 − τÞi 1⁄4
hδEðτÞδEð0Þi 1⁄4 hδEð−τÞδEð0Þi  and Eq. (A3) reduces to the result given in Eq. (10).
APPENDIX B: EXCESS MICROMOTION AND HEATING
This Appendix discusses modifications of the heating rate Γh for an ion which is displaced from the rf null by a static electric field Estat. The following analysis is restricted to a onedimensional motion of the ion along the x axis and to small stability parameters qx and ax. While the current analysis uses a fully quantum-mechanical description of the ion, an equivalent conclusion can be obtain from a classical pseudopotential analysis (Blakestad et al., 2009). In the presence of a static offse-
t field, the quantized motion of the ion is described by the total trap Hamiltonian
Hˆ tðtÞ 1⁄4 pˆ 2
2mI
þ jej
2 1⁄2Φ0d0c þ Φ0r0f cosðΩrf tÞxˆ2 − jejEstatxˆ: ðB1Þ
The position operator ˆxðtÞ in the Heisenberg representation obeys the inhomogeneous Mathieu equation,
d2
dt2 ˆxðtÞ þ jej
mI
1⁄2Φ0d0c þ Φ0r0f cosðΩrf tÞˆxðtÞ 1⁄4 jej
mI
Estat; ðB2Þ
with general solution
ˆxðtÞ 1⁄4 xinhðtÞ þ xˆ0ðtÞ: ðB3Þ
Here xˆ0 1⁄4 ffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffiffi
ħ=ð2mIωtÞ
p 1⁄2uðtÞ ˆa† þ u ðtÞ ˆa is identical to the position operator defined in Eq. (5) for Estat 1⁄4 0 and xinhðtÞ is a particular solution of the inhomogeneous Mathieu equation. To lowest order in qx
xinhðtÞ ≃ Δx
 
1 þ qx
2 cosðΩrf tÞ
 
1⁄4 Δx þ xemmðtÞ; ðB4Þ
1476 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 where Δx 1⁄4 jejEstat=mIωt2 is the mean displacement of the ion from the rf null and xemmðtÞ ∼ Δx is the amplitude of the excess micromotion. Again, the quantum state of the ion can be expressed in terms of the number states jni 1⁄4
ð ˆa†Þn= ffinffiffi!ffiffi
p j0i of a reference oscillator with time-independent annihilation and creation operators ˆa and ˆa†. However, in the lab frame, the center of the wave function is modulated by xemmðtÞ. The coupling of the ion to an additional noisy potential is described by the Hamiltonian Hˆ ion-fieldðtÞ 1⁄4 jejδΦðt; xˆÞ. In
the interaction picture with respect to Hˆ tðtÞ and expanded around the mean position Δx, the resulting ion-field coupling is given by
Hˆ ion-fieldðtÞ ≃ jej1⁄2xemmðtÞ þ xˆ0ðtÞδΦ0ðt; ΔxÞ
þ jej
2 1⁄2xemmðtÞ þ xˆ0ðtÞ2δΦ00ðt; ΔxÞ: ðB5Þ
The first term represents the direct coupling of the noisy electric field δEtðtÞ 1⁄4 −δΦ0ðt; ΔxÞ to ˆx0ðtÞ. The second term is proportional to the gradient of the noisy electric field δE0tðtÞ 1⁄4 −ΔxδΦ00ðt; ΔxÞ. It contributes to heating via a mixing between xemmðtÞ and xˆ0 and is therefore relevant only
for a nonzero Δx. Explicitly, by expanding Hˆ ion-fieldðtÞ up to first order in qx,
Hˆ ion-fieldðtÞ ≃ −dI1⁄2 ˆa†eiωtt þ aˆ e−iωtt
×
 
δEtðtÞ þ qx
2 cosðΩrftÞðδEtðtÞ þ ΔxδE0tðtÞÞ
 
:
ðB6Þ
Using this form of the interaction Hamiltonian we can follow the same approach as taken in Eqs. (A2) and (A3),
TABLE III. Summary of theoretical predictions for different noise mechanisms. Unless otherwise stated, the values given are for ω 1⁄4 2π × 1 MHz, d 1⁄4 100 μm, and T 1⁄4 300 K. The values presented are given for the purpose of orientation only. Details and discussion of the circumstances under which they hold, and also circumstances under which the noise behavior may be significantly different, are given in the relevant portions of the main paper, to which the reader is referred.
Source Geometry α β γ
SE=
ðV2=m2 HzÞ Section Notes
Blackbody radiation −2 0 1 10−22 IV.A
Near-field blackbody Plane −0.5 2–3 1 10−17 IV.A Au electrodes: ρe 1⁄4 2.21 × 10−8 Ωm
EMI 1 0 a 10−14 IV.B Outdoors, near buildings
3 0 a 10−10 IV.B Indoors, unshielded
EM pickup 1 JNb > 1 10−12 IV.C Indoors, unshielded loop of area
100 cm2, D 1⁄4 1000 μm;
Johnson noise Plane ∼c 2 2 ∼c IV.D
Spheres ∼c 4 2 ∼c IV.D Rel ≪ d
Needles ∼c 2.5 2 ∼c IV.D Geometry approximating that of Deslauriers, Olmschenk et al. (2006), 30 μm < d < 200 μm
Surface ∼c Ud 2 10−12 IV.D Geometry from Leibrandt, Yurke, and Slusher (2007)
2 Level ∼c Ud 2 10−14 IV.D Geometry from Leibrandt, Yurke, and Slusher (2007)
Technical noise ∼c JNb ∼c 10−14 IV.D 80 dB of filtering, D 1⁄4 1000 μm
Space charge Point 0 4 ∼c 10−11 IV.E 1 nA electron emission
Patch potentials Plane Ee 4 Ud Ud V.A rc ≪ d
Plane Ud 2 Ud Ud V.A rc ≫ d
Sphere Ud 4(⊥), 6(∥) Ud Ud V.A rc ≪ d
Needle Ud 4(⊥), 6(∥) Ud Ud VI.A rc ≪ d
TLFs Plane 1 4 1 10−12 V.B Uniform TLF distribution
Adatom dipoles Plane 0 4 2.5 10−13 V.C γ 1⁄4 0 for T ≲ T  ≈ 60 K; α 1⁄4 2 for ω ≳ Γ0 ∼ 2π × 10 MHz
Adatom diffusion Plane 2 6 Ee 10−18 V.D.3
Needle 1.5 6(⊥), 8(∥) Ee 10−14 V.D.3
Patches 1.5 4(⊥), 6(∥) Ee 10−13 V.D.4
Excess micromotionf ∼c 4 ∼c 10−11 IV.D.6, Appendix B
3 μm from rf null;
SV 1⁄4 2 × 10−17 V2=Hz; Dq 1⁄4 100 μm
aIt is not necessarily physically meaningful to assign a temperature to EMI.
bJN: Scales in the same way as Johnson noise.
c∼: Can take such a wide range of values that it is not considered sensible to state a single number.
dU: Value not known.
eE: Follows an exponential scaling, rather than a power law.
fThe heating rate for this mechanism must be calculated using Eq. (13), rather than Eq. (12).
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1477
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 using Fermi’s golden rule to derive the total heating rate Γh ≃ Γlf
h þ Γrf;þ
h þ Γrf;−
h. Restricted to low frequency noise ω ∼ ωt, only the first term,
Γlf
h 1⁄4 2dI2
ħ2 Re
Z∞
0
dτe−iωtτhδEðτÞδEð0Þi; ðB7Þ
contributes. This is identical to the standard result for the heating rate given in Eq. (12). Therefore, the effect of low frequency noise on a displaced ion is the same as for an ion positioned at the rf null. For noise at frequencies ω ∼ Ωrf, and provided Δx ≠ 0, both the direct coupling and the effect of a nonzero field gradient become important. This provides two additional contributions to the heating rate:
Γrf; 
h 1⁄4 2dI2
ħ2
 qx 4
 2
Re
Z∞
0
dτe−iðΩrf  ωtÞτ
× hðδEtðτÞ þ ΔxδE0tðτÞÞðδEtð0Þ þ ΔxδE0tð0ÞÞi: ðB8Þ
Specifically, for noise applied via the trap electrodes ΔxδE0tðtÞ ≃ δEtðtÞ, the two noisy fields in Eq. (B8) add constructively. Therefore, the resulting rf heating rate for a displaced ion is 4 times as large as predicted by Eq. (A3) using C2 1⁄4 C−2 1⁄4 qx=4. The identification δEðtÞ 1⁄4
ΔxΦ0r0fδVðtÞ=Vrf, valid for a quadrupole potential near the center of the trap, then leads to the result in Eq. (13).
APPENDIX C: SUMMARY OF NOISE CHARACTERISTICS
One of the central messages of this paper is that the issues involved in trapped-ion heating are complex, and simplifications are made at one’s own peril. Even minor changes in certain details of the experiment can have significant impacts on the noise behavior. Weighed against this is a need to maintain some kind of overview. Table III summarizes some of the major theoretical results of this paper. The table is intended for orientation and as a guide to reading the main paper. In the interests of-
 summarizing material, the many caveats which go with these results have been omitted here. The absolute levels of the noise are to be treated with particular caution: they have been calculated (as described) to give indicative values of what may be seen. Depending on the details of the experiment the values actually observed, for any given source, might differ from these by many orders of magnitude.
REFERENCES
Abramowitz, M., and I. A. Stegun, 1972, National Bureau of Standards, Handbook of Mathematical Functions (U.S. GPO, Washington, DC) (10th Printing). Agarwal, G. S., 1975, Phys. Rev. A 11, 230. Akerman, N., Y. Glickman, S. Kotler, A. Keselman, and R. Ozeri, 2012, Appl. Phys. B 107, 1167.
Alheit, R., S. Kleineidam, and F. Vedel, 1996, Int. J. Mass Spectrom. Ion Process. 154, 155. Allcock, D. T. C., L. Guidoni, T. P. Harty, C. J. Ballance, M. G. Blain, A. M. Steane, and D. M. Lucas, 2011, New J. Phys. 13, 123023. Allcock, D. T. C., T. P. Harty, C. J. Ballance, B. C. Keitch, N. M. Linke, D. N. Stacey, and D. M. Lucas, 2013, Appl. Phys. Lett. 102, 044103. Allcock, D. T. C., et al., 2010, New J. Phys. 12, 053026. Allcock, D. T. C., et al., 2012, Appl. Phys. B 107, 913. Alonso, J., F. M-
. Leupold, B. C. Keitch, and J. P. Home, 2013, New J. Phys. 15, 023001. Amini, J. M., H. Uys, J. H. Wesenberg, S. Seidelin, J. Britton, J. J. Bollinger, D. Leibfried, C. Ospelkaus, A. P. VanDevender, and D. J. Wineland, 2010, New J. Phys. 12, 033031. Anderson, P. W., B. I. Halperin, and C. M. Varma, 1972, Philos. Mag. 25, 1.
Antohi, P., D. Schuster, G. M. Akselrod, J. Labaziewicz, Y. Ge, Z. Lin, W. S. Bakr, and I. L. Chuang, 2009, Rev. Sci. Instrum. 80, 013103. Antoniewicz, P. R., 1974, Phys. Rev. Lett. 32, 1424. Arrhenius, S., 1889, Z. Phys. Chem. 4, 226. Arrington, C. L., et al., 2013, Rev. Sci. Instrum. 84, 085001. Benhelm, J., G. Kirchmair, C. F. Roos, and R. Blatt, 2008, Phys. Rev. A 77, 062306. Bentley, C. D. B., A. R. R. Carvalho, D. Kielpinski, and J. J. Hope, 2013, New J. Phys. 15, 043006. Berkeland, D., J. M-
iller, J. C. Bergquist, W. Itano, and D. J. Wineland, 1998, J. Appl. Phys. 83, 5025. Blakestad, R. B., 2010, “Transport of Trapped-Ion Qubits within a Scalable Quantum Processor,” Ph.D. thesis (University of Colorado). Blakestad, R. B., C. Ospelkaus, A. P. VanDevender, J. M. Amini, J. Britton, D. Leibfried, and D. J. Wineland, 2009, Phys. Rev. Lett. 102, 153002. Blakestad, R. B., C. Ospelkaus, A. P. VanDevender, J. H. Wesenberg, M. J. Biercuk, D. Leibfried, and D. J. Wineland, 2011, Phys. Rev. A 8-
4, 032314. Blatt, R., and C. F. Roos, 2012, Nat. Phys. 8, 277. Blatt, R., and D. J. Wineland, 2008, Nature (London) 453, 1008. Blatt, R., P. Zoller, G. Holzmüller, and I. Siemers, 1986, Z. Phys. D 4, 121. Blümel, R., J. M. Chen, E. Peik, W. Quint, W. Schleich, Y. R. Shen, and H. Walther, 1989, Phys. Rev. A 40, 808. Blümel, R., C. Kappler, W. Quint, and H. Walther, 1988, Nature (London) 334, 309. Bowler, R., J. Gaebler, Y. Lin, T. R. Tan, D. Hanneke, J. Jost, J. Home, D. Leibfried, and D. J. Winela-
nd, 2012, Phys. Rev. Lett. 109, 080502. Brama, E., A. Mortensen, M. Keller, and W. Lange, 2012, Appl. Phys. B 107, 945. Bridges, J. E., 1988, IEEE Transactions on Electromagnetic Compatibility 30, 211. Britton, J., 2008, “Microfabrication Techniques for Trapped Ion Quantum Information Processing,” Ph.D. thesis (University of Colorado). Britton, J., D. Leibfried, J. A. Beall, R. B. Blakestad, J. H. Wesenberg, and D. J. Wineland, 2009, Appl. Phys. Lett. 95, 173102. Brown, K. R., C. Ospelkaus, Y. Col-
ombe, A. C. Wilson, D. Leibfried, and D. J. Wineland, 2011, Nature (London) 471, 196. Brown, K. R., A. C. Wilson, Y. Colombe, C. Ospelkaus, A. M. Meier, E. Knill, D. Leibfried, and D. J. Wineland, 2011, Phys. Rev. A 84, 030303.
1478 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 Brownnutt, M., 2007, “88Srþ Ion Trapping Techniques and Technologies for Quantum Information Processing,” Ph.D. thesis (Imperial College London). Brownnutt, M., M. Harlander, W. Hänsel, and R. Blatt, 2012, Appl. Phys. B 107, 1125. Brownnutt, M., V. Letchumanan, G. Wilpers, R. C. Thompson, P. Gill, and A. G. Sinclair, 2007, Appl. Phys. B 87, 411. Brownnutt, M., G. Wilpers, P. Gill, R. C. Thompson, and A. G. Sinclair, 2006, New J. Phys. 8, 232. Bruzewicz, C. D., J. M. Sage, and J. Chiaverini, 2015,-
 Phys. Rev. A 91, 041402. Bunch, N. L., and J. LaBelle, 2009, Geophys. Res. Lett. 36, L15104. Burgess, R. E., 1953, Proc. Phys. Soc. London Sect. B 66, 334. Camp, J. B., T. W. Darling, and R. E. Brown, 1991, J. Appl. Phys. 69, 7126. Camp, J. B., T. W. Darling, and R. E. Brown, 1992, J. Appl. Phys. 71, 783. Cetina, M., A. Grier, J. Campbell, I. L. Chuang, and V. Vuletić, 2007, Phys. Rev. A 76, 041401. Chen, G., and A. E. Davies, 1996, COMPEL - The International Journal for Computation and Mathemat-
ics in Electrical and Electronic Engineering;Multilingua 15, 40. Chen, K., S. T. Sullivan, W. G. Rellergert, and E. R. Hudson, 2013, Phys. Rev. Lett. 110, 173003. Chiaverini, J., R. B. Blakestad, J. Britton, J. D. Jost, C. Langer, D. Leibfried, R. Ozeri, and D. J. Wineland, 2005, Quantum Inf. Comput. 5, 419. Chiaverini, J., and J. M. Sage, 2014, Phys. Rev. A 89, 012318. Church, D. A., and H. G. Dehmelt, 1969, J. Appl. Phys. 40, 3421. Chwalla, M., 2009, “Precision Spectroscopy with 40Caþ Ions in a -
Paul Trap,” Ph.D. thesis (Universität Innsbruck). Cirac, J. I., and P. Zoller, 1995, Phys. Rev. Lett. 74, 4091. Cirac, J. I., and P. Zoller, 2000, Nature (London) 404, 579. Daniilidis, N., S. Gerber, G. Bolloten, M. Ramm, A. Ransford, E. Ulin-Avila, I. Talukdar, and H. Häffner, 2014, Phys. Rev. B 89, 245435. Daniilidis, N., S. Narayanan, S. A. Möller, R. J. Clark, T. E. Lee, P. J. Leek, A. Wallraff, S. A. Schulz, F. Schmidt-Kaler, and H. Häffner, 2011, New J. Phys. 13, 013032. Darling, T. W., G. I-
. Opat, F. Rossi, and G. F. Moorhead, 1992, Rev. Mod. Phys. 64, 237. Dehmelt, H. G., 1990, Rev. Mod. Phys. 62, 525. Dehmelt, H. G., and F. L. Walls, 1968, Phys. Rev. Lett. 21, 127. Deslauriers, L., P. Haljan, P. J. Lee, K.-A. Brickman, B. Blinov, M. J. Madsen, and C. Monroe, 2004, Phys. Rev. A 70, 043408. Deslauriers, L., S. Olmschenk, D. Stick, W. K. Hensinger, J. Sterk, and C. Monroe, 2006, Phys. Rev. Lett. 97, 103007. Deslauriers, L., et al., 2006, Phys. Rev. A 74, 063421. DeVoe, R., and C. Kur-
tsiefer, 2002, Phys. Rev. A 65, 063407. Dharmadhikari, C. V., R. S. Khairnar, and D. S. Joag, 1991, J. Phys. D 24, 1842. Diedrich, F., J. C. Bergquist, W. Itano, and D. J. Wineland, 1989, Phys. Rev. Lett. 62, 403. Djekic, S., J. Alonso, H.-J. Kluge, W. Quint, S. Stahl, T. Valenzuela, J. Verdú, M. Vogel, and G. Werth, 2004, Eur. Phys. J. D 31, 451. Doret, S. C., et al., 2012, New J. Phys. 14, 073012. Dubessy, R., T. Coudreau, and L. Guidoni, 2009, Phys. Rev. A 80, 031402. Dutta, P., and P. M. Horn,-
 1981, Rev. Mod. Phys. 53, 497. Eichmann, U., J. C. Bergquist, J. J. Bollinger, J. M. Gilligan, W. M. Itano, D. J. Wineland, and M. G. Raizen, 1993, Phys. Rev. Lett. 70, 2359.
Ekin, J. W., 2007, Experimental Techniques for Low-Temperature Measurements (Oxford University Press, New York). Epstein, R. J., et al., 2007, Phys. Rev. A 76, 033411. Fernández, I., P. Angueira, I. Landa, A. Arrinda, D. Guerra, and U. Gil, 2010, Electron. Lett. 46, 1162. Fischer, E., 1959, Z. Phys. 156, 1. Gabrielse, G., D. Phillips, W. Quint, H. Kalinowsky, G. Rouleau, and W. Jhe, 1995, Phys. Rev. Lett. 74, 3544. Gandolfi, D., M. Niedermayr, M. Kumph, M. Brownnutt, and R. Blatt, 2012, Rev. Sci. -
Instrum. 83, 084705. García-Ripoll, J. J., P. Zoller, and J. I. Cirac, 2003, Phys. Rev. Lett. 91, 157901. Garcia-Sanchez, D., K. Y. Fong, H. Bhaskaran, S. Lamoreaux, and H. X. Tang, 2012, Phys. Rev. Lett. 109, 027202. Gardiner, C. W., and P. Zoller, 2004, Quantum Noise (Springer, Heidelberg). Gesley, M. A., and L. W. Swanson, 1985, Phys. Rev. B 32, 7703. Gomer, R., 1961, Field Emission and Field Ionization (Harvard University Press, Cambridge, MA). Gomer, R., 1990, Rep. Prog. Phys. 53, 917. Goodwi-
n, J. F., G. Stutter, R. C. Thompson, and D. M. Segal, 2014, arXiv:1407.6121v2. Guise, N. D., et al., 2015, J. Appl. Phys. 117, 174901. Hänggi, P., P. Talkner, and M. Borkovec, 1990, Rev. Mod. Phys. 62, 251.
Hansen, D., 2003, in Proceedings of the IEEE International Symposium on Electromagnetic Compatibility (IEEE, New York), p. 184 [10.1109/ICSMC2.2003.1428226]. Harber, D., J. Obrecht, J. McGuirk, and E. Cornell, 2005, Phys. Rev. A 72, 033610. Harlander, M., 2012, “Architecture for a Scalable Ion-Trap Quantum Computer,” Ph.D. thesis (Universität Innsbruck). Harlander, M., M. Brownnutt, W. Hänsel, and R. Blatt, 2010, New J. Phys. 12, 093035. Harlander, M., R. Lechner, M. Brownnutt, R. Blatt, and W. Hä-
nsel, 2011, Nature (London) 471, 200. Härter, A., A. Krükow, A. Brunner, and J. Hecker Denschlag, 2014, Appl. Phys. B 114, 275. Henkel, C., and B. Horowitz, 2008, Phys. Rev. A 78, 042902. Henkel, C., S. Pötting, and M. Wilkens, 1999, Appl. Phys. B 69, 379. Henkel, C., and M. Wilkens, 1999, Europhys. Lett. 47, 414. Herring, C., and M. Nichols, 1949, Rev. Mod. Phys. 21, 185. Herschbach, N., K. Pyka, J. Keller, and T. E. Mehlstäubler, 2012, Appl. Phys. B 107, 891. Herskind, P. F., A. Dantan, M. Alber-
t, J. P. Marler, and M. Drewsen, 2009, J. Phys. B 42, 154008. Herskind, P. F., S. X. Wang, M. Shi, Y. Ge, M. Cetina, and I. L. Chuang, 2011, Opt. Lett. 36, 3045. Hite, D. A., Y. Colombe, A. Wilson, K. R. Brown, U. Warring, R. Jördens, J. Jost, D. P. Pappas, D. Leibfried, and D. J. Wineland, 2012, Phys. Rev. Lett. 109, 103001. Hite, D. A., Y. Colombe, A. C. Wilson, D. T. C. Allcock, D. Leibfried, D. J. Wineland, and D. P. Pappas, 2013, MRS Bull. 38, 826. Hoinkes, H., 1980, Rev. Mod. Phys. 52, 933. -
Home, J., 2006, “Entanglement of Two Trapped-Ion Spin Qubits,” Ph.D. thesis (Oxford University). Home, J., 2013, Adv. At. Mol. Opt. Phys. 62, 231. Hornekær, L., and M. Drewsen, 2002, Phys. Rev. A 66, 013412. Hughes, M. D., B. Lekitsch, J. A. Broersma, and W. K. Hensinger, 2011, Contemp. Phys. 52, 505. Hughes, R. J., 1998, Phil. Trans. R. Soc. A 356, 1853.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1479
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 Itano, W., J. C. Bergquist, J. J. Bollinger, and D. J. Wineland, 1995, Phys. Scr. T59, 106. ITU, 2009, International Telecommunications Union. Jackson, J. D., 1999, Classical Electrodynamics (Wiley, New York), 3rd ed. James, D. F. V., 1998, Appl. Phys. B 66, 181. Jefferts, S. R., C. Monroe, E. W. Bell, and D. J. Wineland, 1995, Phys. Rev. A 51, 3112. Jensen, M. J., T. Hasegawa, and J. J. Bollinger, 2004, Phys. Rev. A 70, 033401. Johnson, J. B., 1928, Phys. Rev. 32, 97. Kanda, M., 1993, IEEE Trans-
. Antennas Propag. 41, 1349. Kaye, G. W. C., T. H. Laby, J. G. Noyes, G. F. Phillips, O. Jones, and J. Asher, 1995, Tables of Physical and Chemical Constants (Longman, London). Kim, T. H., P. F. Herskind, T. Kim, J. Kim, and I. L. Chuang, 2010, Phys. Rev. A 82, 043412. King, B. E., C. S. Wood, C. J. Myatt, Q. A. Turchette, D. Leibfried, W. Itano, C. Monroe, and D. J. Wineland, 1998, Phys. Rev. Lett. 81, 1525. Kirchmair, G., J. Benhelm, F. Zähringer, R. Gerritsma, C. F. Roos, and R. Blatt, 2009, Ne-
w J. Phys. 11, 023002. Kjærgaard, N., L. Hornekær, A. M. Thommesen, Z. Videsen, and M. Drewsen, 2000, Appl. Phys. B 71, 207. Kleint, C., 1963, Ann. Phys. (Berlin) 465, 309. Knünz, S., M. Herrmann, V. Batteiger, G. Saathoff, T. W. Hänsch, and T. Udem, 2012, Phys. Rev. A 85, 023427. Kumph, M., M. Brownnutt, and R. Blatt, 2011, New J. Phys. 13, 073043. Kumph, M., P. Holz, K. Langer, M. Niedermayr, M. Brownnutt, and R. Blatt, 2014, arXiv:1402.0791v1. Labaziewicz, J., 2008, “High Fidelity Quantum Gates-
 with Ions in Cryogenic Microfabricated Ion Traps,” Ph.D. thesis (Massachusetts Institute of Technology). Labaziewicz, J., Y. Ge, P. Antohi, D. R. Leibrandt, K. R. Brown, and I. L. Chuang, 2008, Phys. Rev. Lett. 100, 013001. Labaziewicz, J., Y. Ge, D. R. Leibrandt, S. X. Wang, R. Shewmon, and I. L. Chuang, 2008, Phys. Rev. Lett. 101, 180602. Lamoreaux, S. K., 1997, Phys. Rev. Lett. 78, 5. Landa, I., A. Arrinda, I. Fernández, and P. Angueira, 2011, IEEE Antennas Wireless Propag. Lett. 10, 17. Landa-
u, L. D., and E. M. Lifshitz, 1980, Statistical Physics (Elvesier, Oxford), 3rd ed., Pt. 1. Leibfried, D., R. Blatt, C. Monroe, and D. J. Wineland, 2003, Rev. Mod. Phys. 75, 281. Leibrandt, D., B. Yurke, and R. Slusher, 2007, Quantum Inf. Comput. 7, 52. Leibrandt, D. R., et al., 2009, Quantum Inf. Comput. 9, 901. Lekner, J., 2012, Proc. R. Soc. A 468, 2829. Letchumanan, V., G. Wilpers, M. Brownnutt, P. Gill, and A. G. Sinclair, 2007, Phys. Rev. A 75, 063425. Linford, L. B., 1933, Rev. Mod. Phys. 5-
, 34. Lisenfeld, J., C. Müller, J. H. Cole, P. Bushev, A. Lukashenko, A. Shnirman, and A. V. Ustinov, 2010, Phys. Rev. Lett. 105, 230504. Low, G. H., P. F. Herskind, and I. L. Chuang, 2011, Phys. Rev. A 84, 053425. Lucas, D. M., C. J. S. Donald, J. P. Home, M. J. McDonnell, A. Ramos, D. N. Stacey, J.-P. Stacey, A. M. Steane, and S. C. Webster, 2003, Phil. Trans. R. Soc. A 361, 1401. Madsen, M. J., W. K. Hensinger, D. Stick, J. Rabchuk, and C. Monroe, 2004, Appl. Phys. B 78, 639.
Maiwald, R., D. Leibfried, J. Britton, J. C. Bergquist, G. Leuchs, and D. J. Wineland, 2009, Nat. Phys. 5, 551. Martinis, J. M., et al., 2005, Phys. Rev. Lett. 95, 210503. McConnell, R., C. Bruzewicz, J. Chiaverini, and J. Sage, 2015, Phys. Rev. A 92, 020302(R). McKay, K., D. Hite, Y. Colombe, R. Jördens, A. C. Wilson, D. H. Slichter, D. T. C. Allcock, D. Leibfried, D. J. Wineland, and D. P. Pappas, 2014, arXiv:1406.1778v1. McLoughlin, J. J., A. H. Nizamani, J. D. Siverns, R. C. Sterling, M. D. Hu-
ghes, B. Lekitsch, B. Stein, S. Weidt, and W. K. Hensinger, 2011, Phys. Rev. A 83, 013406. Meekhof, D. M., C. Monroe, B. E. King, W. M. Itano, and D. J. Wineland, 1996, Phys. Rev. Lett. 76, 1796. Mehta, K. K., A. M. Eltony, C. D. Bruzewicz, I. L. Chuang, R. J. Ram, J. M. Sage, and J. Chiaverini, 2014, Appl. Phys. Lett. 105, 044103. Miller, D. A., and J. E. Bridges, 1966, IEEE Transactions on Electromagnetic Compatibility EMC-8, 174. Monroe, C., D. M. Meekhof, B. E. King, S. R. Jefferts, W. Itano, -
D. J. Wineland, and P. Gould, 1995, Phys. Rev. Lett. 75, 4011. Monz, T., 2011, “Quantum Information Processing Beyond Ten IonQubits,” Ph.D. thesis (Universität Innsbruck). Morigi, G., and H. Walther, 2001, Eur. Phys. J. D 13, 261. Morse, P. M., and H. Feshbach, 1953, Methods of Theoretical Physics, Part I (McGraw-Hill, New York). Mount, E., S.-Y. Baek, M. Blain, D. Stick, D. Gaultney, S. Crain, R. Noek, T. Kim, P. Maunz, and J. Kim, 2013, New J. Phys. 15, 093018. Murphy, E. L., and R. H. Good, 195-
6, Phys. Rev. 102, 1464. Myatt, C. J., B. E. King, Q. A. Turchette, C. A. Sackett, D. Kielpinski, W. Itano, C. Monroe, and D. J. Wineland, 2000, Nature (London) 403, 269. Nägerl, H. C., W. Bechter, J. Eschner, and R. Blatt, 1998, Appl. Phys. B 66, 603. Neeley, M., M. Ansmann, R. C. Bialczak, M. Hofheinz, N. Katz, E. Lucero, A. O’Connell, H. Wang, A. N. Cleland, and J. M. Martinis, 2008, Nat. Phys. 4, 523. Niedermayr, M., K. Lakhmanskiy, M. Kumph, S. Partel, J. Edlinger, M. Brownnutt, and R. Blatt,-
 2014, New J. Phys. 16, 113068. Nonnenmacher, M., M. O’Boyle, and H. K. Wickramasinghe, 1992, Ultramicroscopy 42–44, 268. Norton, B. G., E. W. Streed, M. J. Petrasiunas, A. Jechow, and D. Kielpinski, 2011, New J. Phys. 13, 113022. Nyquist, H., 1928, Phys. Rev. 32, 110. Obrecht, J., R. Wild, and E. Cornell, 2007, Phys. Rev. A 75, 062903. Ospelkaus, C., U. Warring, Y. Colombe, K. R. Brown, J. M. Amini, D. Leibfried, and D. J. Wineland, 2011, Nature (London) 476, 181. Ovesson, S., A. Bogicevic, G. Wa-
hnström, and B. Lundqvist, 2001, Phys. Rev. B 64, 125423. Paladino, E., Y. M. Galperin, G. Falci, and B. L. Altshuler, 2014, Rev. Mod. Phys. 86, 361. Parrot, M., U. S. Inan, N. G. Lehtinen, and J. L. Pinćon, 2009, J. Geophys. Res. 114, A12318. Paul, W., 1990, Rev. Mod. Phys. 62, 531. Paul, W., O. Osberghaus, and E. Fischer, 1958, Forschungsberichte des Wirtschafts- und Verkehrsministeriums Nordrhein Westfalen (Westdeutscher Verlag, Opladen), Vol. 415. Phillips, W. A., 1972, J. Low Temp. Phys. 7, -
351. Phillips, W. A., 1987, Rep. Prog. Phys. 50, 1657. Poitzsch, M. E., J. C. Bergquist, W. Itano, and D. J. Wineland, 1996, Rev. Sci. Instrum. 67, 129.
1480 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 Pollack, S., S. Schlamminger, and J. Gundlach, 2008, Phys. Rev. Lett. 101, 071101. Poritsky, H., and R. P. Jerrard, 1954, Transactions of the American Institute of Electrical Engineers, Part I: Communication and Electronics 73, 97. Poschinger, U. G., et al., 2009, J. Phys. B 42, 154013. Poulsen, G., Y. Miroshnychenko, and M. Drewsen, 2012, Phys. Rev. A 86, 051402. Pyka, K., N. Herschbach, J. Keller, and T. E. Mehlstäubler, 2014, Appl. Phys. B 114, 231. Raab, C., J. Eschner, J. Bolle, H. Oberst, F-
. Schmidt-Kaler, and R. Blatt, 2000, Phys. Rev. Lett. 85, 538. Rajawat, R. K., R. S. Kalghatgi, and P. H. Ron, 1995, in Proceedings of the International Conference on Electromagnetic Interference and Compatibility (IEEE), pp. 153–160 [10.1109/ ICEMIC.1995.501576]. Rohde, H., S. T. Gulde, C. F. Roos, P. A. Barton, D. Leibfried, J. Eschner, F. Schmidt-Kaler, and R. Blatt, 2001, J. Phys. B 3, S34. Roos, C., T. Zeiger, H. Rohde, H. C. Nägerl, J. Eschner, D. Leibfried, F. Schmidt-Kaler, and R. Blatt, 1-
999, Phys. Rev. Lett. 83, 4713. Rosenband, T., et al., 2008, Science 319, 1808. Rossi, F., and G. I. Opat, 1992, J. Phys. D 25, 1349. Rowe, M. A., et al., 2002, Quantum Inf. Comput. 2, 257. Ryjkov, V., X. Zhao, and H. Schuessler, 2005, Phys. Rev. A 71, 033414. Safavi-Naini, A., E. Kim, P. F. Weck, P. Rabl, and H. R. Sadeghpour, 2013, Phys. Rev. A 87, 023421. Safavi-Naini, A., P. Rabl, P. F. Weck, and H. R. Sadeghpour, 2011, Phys. Rev. A 84, 023412. Sage, J. M., A. J. Kerman, and J. Chiaverini, 201-
2, Phys. Rev. A 86, 013417. Sandoghdar, C., C. Sukenik, E. A. Hinds, and S. Haroche, 1992, Phys. Rev. Lett. 68, 3432. Schmidt-Kaler, F., et al., 2000, J. Mod. Opt. 47, 2573. Schmidt-Kaler, F., et al., 2003, Appl. Phys. B 77, 789. Schrama, C. A., E. Peik, W. W. Smith, and H. Walther, 1993, Opt. Commun. 101, 32. Schulz, S. A., U. G. Poschinger, F. Ziesel, and F. Schmidt-Kaler, 2008, New J. Phys. 10, 045007. Seidelin, S., et al., 2006, Phys. Rev. Lett. 96, 253003. Shlepnev, Y., and S. McMorrow, 2011,-
 in Proceedings of the IEEE International Symposium on Electromagnetic Compatibility (IEEE, New York), p. 524 [10.1109/ISEMC.2011.6038368]. Sinclair, A. G., M. A. Wilson, and P. Gill, 2001, Opt. Commun. 190, 193. Slodićka, L., G. Hétet, N. Röck, S. Gerber, P. Schindler, M. Kumph, M. Hennrich, and R. Blatt, 2012, Phys. Rev. A 85, 043401. Sørensen, A., and K. Mølmer, 1999, Phys. Rev. Lett. 82, 1971. Speake, C., and C. Trenkel, 2003, Phys. Rev. Lett. 90, 160403. Splatt, F., 2009, “Development and Op-
eration of Miniaturised Ion Traps for Scalable Quantum Computation,” Ph.D. thesis (Universität Innsbruck). Splatt, F., M. Harlander, M. Brownnutt, F. Zähringer, R. Blatt, and W. Hänsel, 2009, New J. Phys. 11, 103008. Steane, A. M., 1997, Appl. Phys. B 64, 623. Steiner, M., H. M. Meyer, C. Deutsch, J. Reichel, and M. Köhl, 2013, Phys. Rev. Lett. 110, 043003.
Steinhauer, S., E. Brunet, T. Maier, G. C. Mutinati, A. Köck, W.-D. Schubert, C. Edtmaier, C. Gspan, and W. Grogger, 2011, Procedia Eng. 25, 1477. Stick, D., W. K. Hensinger, S. Olmschenk, M. J. Madsen, K. Schwab, and C. Monroe, 2006, Nat. Phys. 2, 36. Stipe, B. C., H. J. Mamin, T. D. Stowe, T. W. Kenny, and D. Rugar, 2001, Phys. Rev. Lett. 87, 096801. Sushkov, P. A. O., W. J. Kim, D. A. R. Dalvit, and S. K. Lamoreaux, 2011, Nat. Phys. 7, 230. Tamm, C., D. Engelke, and V. Bühner, 2000, Phys. Rev. -
A 61, 053405. Timm, G. W., and A. Van der Ziel, 1966, Physica (Utrecht) 32, 1333. Tringides, M., and R. Gomer, 1986, J. Chem. Phys. 84, 4049. Turchette, Q. A., et al., 2000, Phys. Rev. A 61, 063418. Tuttle, J., E. Canavan, M. DiPirro, and U. B. Balachandran, 2010, AIP Conf. Proc. 1219, 55. Vandamme, L. K. J., A. Khalfallaoui, G. Leroy, and G. Vélu, 2010, J. Appl. Phys. 107, 053717. Van Dyck, Jr., R. S., D. L. Farnham, and P. B. Schwinberg, 1995, Phys. Scr. T59, 134. Van Vliet, K. M., and E. R. Che-
nette, 1965, Physica (Utrecht) 31, 985. Vittorini, G., K. Wright, K. R. Brown, A. W. Harter, and S. C. Doret, 2013, Rev. Sci. Instrum. 84, 043112. Volokitin, A. I., and B. N. J. Persson, 2007, Rev. Mod. Phys. 79, 1291. Walther, A., F. Ziesel, T. Ruster, S. T. Dawkins, K. Ott, M. Hettrich, K. Singer, F. Schmidt-Kaler, and U. G. Poschinger, 2012, Phys. Rev. Lett. 109, 080501. Wang, S. X., 2012, “Quantum Gates, Sensors, and Systems with Trapped Ions,” Ph.D. thesis (Massachusetts Institute of Technolo-
gy). Wang, S. X., Y. Ge, J. Labaziewicz, E. Dauler, K. Berggren, and I. L. Chuang, 2010, Appl. Phys. Lett. 97, 244102. Wang, S. X., J. Labaziewicz, Y. Ge, R. Shewmon, and I. L. Chuang, 2010, Phys. Rev. A 81, 062332. Wang, S. X., G. H. Low, N. S. Lachenmyer, Y. Ge, P. F. Herskind, and I. L. Chuang, 2011, J. Appl. Phys. 110, 104901. Wang, Y., J. Franzen, and K. P. Wanczek, 1993, Int. J. Mass Spectrom. Ion Process. 124, 125. Warring, U., C. Ospelkaus, Y. Colombe, K. R. Brown, J. M. Amini, M. Carsjens-
, D. Leibfried, and D. J. Wineland, 2013, Phys. Rev. A 87, 013437. Weidt, S., J. Randall, S. C. Webster, E. D. Standing, A. Rodriguez, A. E. Webb, B. Lekitsch, and W. K. Hensinger, 2015, Phys. Rev. Lett. 115, 013002. Werth, G., V. N. Gheorghe, and F. G. Major, 2009, Charged Particle Traps II: Applications (Springer, Heidelberg). Wesenberg, J. H., 2008, Phys. Rev. A 78, 063410. Wesenberg, J. H., et al., 2007, Phys. Rev. A 76, 053416. Wilpers, G., P. See, P. Gill, and A. G. Sinclair, 2012, Nat. Nano-
technol. 7, 572. Wilson, A. C., Y. Colombe, K. R. Brown, E. Knill, D. Leibfried, and J. Wineland, 2014, Nature (London) 512, 57. Wineland, D. J., and H. G. Dehmelt, 1975, J. Appl. Phys. 46, 919. Wineland, D. J., C. Monroe, W. Itano, B. E. King, D. Leibfried, D. M. Meekhof, C. J. Myatt, and C. S. Wood, 1998, Fortschr. Phys. 46, 363. Wineland, D. J., C. Monroe, W. Itano, D. Leibfried, B. E. King, and D. M. Meekhof, 1998, J. Res. Natl. Inst. Stand. Technol. 103, 259.
M. Brownnutt et al.: Ion-trap measurements of electric-field noise ... 1481
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

 Wineland, D. J., et al., 2003, Phil. Trans. R. Soc. A 361, 1349. Wright, K., et al., 2013, New J. Phys. 15, 033004. Wrubel, J., et al., 2011, Nucl. Instrum. Methods Phys. Res., Sect. A 640, 232. Wübbena, J. B., S. Amairi, O. Mandel, and P. O. Schmidt, 2012, Phys. Rev. A 85, 043412.
Xu, W., W. J. Chappell, R. G. Cooks, and Z. Ouyang, 2009, J. Mass Spectrom. 44, 353. Yu, N., W. Nagourney, and H. G. Dehmelt, 1991, J. Appl. Phys. 69, 3779. Zar, J. L., 1963, Rev. Sci. Instrum. 34, 801. Ždanov, V. P., 1991, Surf. Sci. Rep. 12, 185.
1482 M. Brownnutt et al.: Ion-trap measurements of electric-field noise ...
Rev. Mod. Phys., Vol. 87, No. 4, October–December 2015

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:03.552Z
- **Text Length:** 356541 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
