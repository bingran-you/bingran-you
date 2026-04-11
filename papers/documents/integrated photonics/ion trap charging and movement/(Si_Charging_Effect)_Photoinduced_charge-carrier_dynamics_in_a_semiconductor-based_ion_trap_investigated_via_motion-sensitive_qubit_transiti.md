# PDF Document: (Si Charging Effect) Photoinduced charge-carrier dynamics in a semiconductor-based ion trap investigated via motion-sensitive qubit transitions.pdf

**File Path:** (Si Charging Effect) Photoinduced charge-carrier dynamics in a semiconductor-based ion trap investigated via motion-sensitive qubit transitions.pdf

**Processed Date:** 2026-02-10T18:18:45.034Z

**File Size:** 5659.97 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 10241

**Title:** (Si Charging Effect) Photoinduced charge-carrier dynamics in a semiconductor-based ion trap investigated via motion-sensitive qubit transitions

**Collection:** Integrated Photonics > Ion Trap Charging and Movement

---

## Extracted Text Content

Photo-induced charge carrier dynamics in a semiconductor-based ion trap investigated via motion-sensitive qubit transitions
Woojun Lee,1, 2, 3, ∗ Daun Chung,1, 2, ∗ Honggi Jeon,1, 2 Beomgeun Cho,1, 2 KwangYeul Choi,1, 2, 4 SeungWoo Yoo,1, 2, 4 Changhyun Jung,2, 4, 5 Junho Jeong,2, 4, 5 Changsoon Kim,4, 6 Dong-Il “Dan” Cho,2, 4, 5 and Taehyun Kim1, 2, 3, 4, 7, †
1Dept. of Computer Science and Engineering, Seoul National University, Seoul 08826, South Korea 2Automation and Systems Research Institute, Seoul National University, Seoul 08826, South Korea 3Institute of Computer Technology, Seoul National University, Seoul 08826, South Korea 4Inter-University Semiconductor Research Center, Seoul National University, Seoul 08826, South Korea 5Dept. of Electrical and Computer Engineering, Seoul National University, Seoul 08826, South Korea 6Dept. of Intelligence -
and Information, Seoul National University, Seoul 08826, South Korea 7Institute of Applied Physics, Seoul National University, Seoul 08826, South Korea
Ion trap systems built upon microfabricated chips have emerged as a promising platform for quantum computing to achieve reproducible and scalable structures. However, photo-induced charging of materials in such chips can generate undesired stray electric fields that disrupt the quantum state of the ion, limiting high-fidelity quantum control essential for practical quantum computing. While crude understanding of the phenomena has been gained heuristically over the past years, explanations for the -
microscopic mechanism of photo-generated charge carrier dynamics remains largely elusive. Here, we present a photo-induced charging model for semiconductors, whose verification is enabled by a systematic interaction between trapped ions and photo-induced stray fields from exposed silicon surfaces in our chip. We use motion-sensitive qubit transitions to directly characterize the stray field and analyze its effect on the quantum dynamics of the trapped ion. In contrast to incoherent errors arising -
from the thermal motion of the ion, coherent errors are induced by the stray field, whose effect is significantly imprinted during the quantum control of the ion. These errors are investigated in depth and methods to mitigate them are discussed. Finally, we extend the implications of our study to other photo-induced charging mechanisms prevalent in ion traps.
I. INTRODUCTION
Ion trap systems are rapidly scaling up as platforms for universal quantum computing by incorporating semiconductor fabrication technologies [1–5]. Compact, miniaturized chips enable greater ion densities, increased flexibility in ion configurations via ion transport [6], and serve as test-beds for on-chip integrated optics [7–9]. However, the proximity of the ions with surrounding materials causes the ions to be significantly susceptible to stray electric fields. Stray fields can be primarily cat-
egorized based on their underlying sources. First, there is field noise originating from thermal fluctuation and dissipation of charges on the material surface, which primarily causes ion heating and motional dephasing [10–15]. On the other hand, stray fields may arise from the excitation and subsequent dynamics of unpaired/excess charge carriers in the material, for instance, through photogeneration by scattered light. These fields cause ion displacement, leading to phase-modulated interactions w-
ith lasers due to excess micromotion [16], drifts in secular frequencies [9], and fluctuations in the Rabi frequency attributed to motion within finite beam widths, which are all detrimental to the motion-sensitive quantum operations.
∗ These authors contributed equally to this work. † taehyun@snu.ac.kr
Describing photo-induced charging processes at the microscopic level is a non-trivial task. It requires understanding the optical excitation channel and subsequent carrier dynamics in the chip’s constituent materials, which can be crudely categorized as conductors, insulators, and semiconductors. Among these, the most frequently observed form of charging, commonly termed as dielectric charging, typically occurs in insulators or insulator/conductor structures [9, 17–22]. Boundaries defined by the s-
urfaces and interfaces between materials, along with inhomogeneities within a single material, both complicate the dynamics and contribute significantly to the overall process [17, 23]. Moreover, since ions can experience stray fields from merely 10 – 1000 elementary charges on the chip surface [17, 22], numerous processes can occur simultaneously, making it challenging to identify the dominant mechanism. Due to such difficulties, the primary emphasis has been on mitigating these effects based on -
phenomenological observations rather than fully comprehending the carrier dynamics. Approaches include selecting materials with lower charging properties [24] or shielding materials prone to charging with metal coatings [21, 25–27]. To scale up ion trap chips with increasingly sophisticated features, however, a deeper understanding of these effects is essential as they require integration of heterogeneous materials into more intricate structures. Among the least understood phenomena is the carrier-
 dynamics in semiconductors, particularly silicon [27–29], which is
arXiv:2312.00059v1 [quant-ph] 29 Nov 2023

2
FIG. 1. Ion displacement by photo-induced electric field. (a) Simplified scheme of our chip trap structure near trap region with 935-nm laser. (b) An enlarged view of the trapping region with a schematic description of the photo-induced electric field. (c)-(f) Images of the ion displaced by the stray field from silicon substrate induced by scattered light as the power of the 935-nm laser was increased. (Color scale for each image was adjusted for better visibility.)
increasingly favored as the substrate for these chips. Our in-house fabricated micro-electromechanical systems (MEMS) chip and experimental setup serves as an excellent environment for directly investigating the stray fields generated from photo-induced charge carriers in silicon. A strong, systematic interaction between the ions and stray fields was first encountered with a near-infrared (NIR) laser at a wavelength of 935 nm. This observation alone sharply contrasts with numerous experimental rep-
orts on charging in ion traps, where the charging lasers typically lie in the ultraviolet (UV) or possibly visible (VIS) wavelengths [8, 9, 17–22], emphasizing the need for a novel model. To demonstrate the NIR charging of silicon, we inject a repumping 935-nm laser (with a maximum power of 1.8 mW and a waist of 45 μm, traveling along xˆ + zˆ) as shown in Fig. 1 (a). We then capture images of the ion while progressively ramping up the intensity of the laser, which consequently increases the scatte-
red light. The images of the ion with different injected powers are shown from Fig. 1 (c)–(f), where defocus of the ion image caused by vertical displacement can be seen, especially between P935 nm = 300 μW and 1 mW. We estimate the ion displacement by translating the electron-multiplying charge-coupled device (EMCCD) until the ion is in focus again. For a laser power of 1.8 mW, we measure an ion displacement of 8 μm. The ion undergoes rapid displacement synchronized with the switching of the inci-
dent laser and immediately returns to its equilibrium position in the absence of light, with identical characteristic time scales for both processes. A comparable observation with blue lasers has been reported, but its underlying mechanism is unexplained [30].
In this study, we introduce a photo-induced charging model for semiconductors and utilize it to assess the surface conditions of the silicon substrate in our chip by using a 171Yb+ ion as a quantum sensor. The spectral characteristics, photon flux dependence, and temporal evolution of the stray fields are measured and analyzed with motion-sensitive qubit transitions, and are accurately replicated through numerical simulations based on the proposed model. Then, the effect of the stray fields on the-
 quantum dynamics of the trapped ion is analyzed through theoretical calculations using the Lindblad master equation. Our analysis confirms that stray fields induce coherent errors in the evolution of the ion, which is distinct from incoherent errors associated with the ion’s thermal motion. Quantum control sequences to mitigate this error is presented. Finally, we extend the insights of our model to the more commonly reported dielectric charging phenomena and some studies on silicon charging in i-
on traps [8, 29, 31], along with implications of the model in the context of fabrication.
II. SEMICONDUCTOR CHARGING MODEL
We present a model for the generation and distribution of carriers in a semiconductor under illumination, which describes the stray field experienced by the ion. The model is established within the framework of surface photovoltage (SPV) theory [23, 32–35], utilizing the semiconductor equations to analyze the modification of surface potentials induced by light [36] (see Appendix D). Our model does not assume local charge neutrality, which allows us to compute the steady state distribution of car

3
(a)
EF
EC
EV
Ei
Eb
φ0 > 0
Σss
x
x=0
(b)
x
x=0
(c)
x
x=0
δφ < 0
EC
EV
Ei
Eb
Σss
EC
EV
Ei
Eb
Σss
(d)
EF
EC
EV
Ei
Eb
φ0 > 0
Σss
x
x=0
(e)
x
x=0
(f)
x
x=0
δφ > 0
EC
EV
Ei
Eb
Σss
EC
EV
Ei
Eb
Σss
Σfs
Efs
Σfs
Σfs
FIG. 2. Band diagram representation of the photoconductive charging model. The semiconductor has surfaces at x = 0 and x = l, while the layer to the left of x = 0 represents a native oxide layer. (a)–(c) Charging in the presence of fixed surface charges only (super-bandgap SPV). (a) The system in thermal equilibrium. The filled (empty) circles represent electrons (holes). (b) Carrier dynamics in (thermal) non-equilibrium. Photo-generated electrons (blue) are attracted to the surface and holes (red-
) are repelled into the bulk. (c) The steady state of the system in non-equilibrium. A negative SPV is formed as a result of the charge distribution. (d)–(f) Charging in the presence of both fixed surface charges and interface states (SPV inversion). (d) The system in thermal equilibrium. The blue color bar represents the electron occupation probability of the interface state. (e) Carrier dynamics in (thermal) non-equilibrium. In addition to the charge distribution process explained in (b), electr-
ons optically excited from the interface state can diffuse into the bulk and recombine with free holes via bulk defect states. (f) The steady state of the system in non-equilibrium. A positive SPV is developed as a result of the depletion of holes at the surface. EC and EV indicate the conduction and valence band edges, Ei and EF the mid-bandgap and Fermi level, and Eb and Efs the energy levels of the bulk defect state and the interface state.
riers that is responsible for the SPV. Let us first consider the most common semiconductor charging mechanism where electrons and holes are photogenerated in the bulk through band-to-band transitions, and separated by an electric field set up by fixed surface charges (also addressed as slow surface states [34]) located at the exterior of the semiconductor body (see Fig. 2 (a)–(c)). Linear bulk photo-generation occurs with the rate Gb(x) = N0αb exp(−αbx), where N0 is the incident photon flux, αb is-
 the absorption coefficient, and the illuminated surface is located at x = 0. Silicon surfaces can easily become oxidized, acting as sites for hosting fixed oxide charges with a typical surface density of Σss = +1 × 1011 cm−2 [37, 38]. In order to reflect such realistic surface conditions into our model, a native oxide layer is presumed to have formed on the exposed surfaces of our substrate shown in Fig. 1 (b) by exposure to the atmosphere. In particular, this produces a surface potential of φ0 ≈-
 +0.64 V [39] for a p-type doping concentration of 1015 cm−3 (Fig. 2 (a)). When the substrate is illu
minated, photo-generated electrons are attracted to the surface and holes are repelled into the bulk due to drift under the surface electric field (Fig. 2 (b)). Such distribution of charges screens the field (reduced downward band bending), leading to a change in SPV δφ that diminishes the initial surface potential φ0 (Fig. 2 (c)). For p-type silicon, this SPV is usually negative and eventually saturates at δφ = −φ0 for a sufficiently high photon flux [23, 32]. This is typically referred to as sup-
er-bandgap SPV [23]. However, the SPV observed in our system is positive and can surpass φ0 in magnitude. Therefore, the described mechanism is not compatible with the experimental results. To better account for the observation, we introduce interface states (or fast surface states [34, 40]) originating from surface defects localized near the silicon and oxide interface, which can act as centers for photoinduced defect-to-band transitions and surface recombination [41–44] (see Fig. 2 (d)–(f)). Unl-
ike typical interface states formed at the Si-SiO2 interface [38], these

4
defect states are presumed to have formed by a deep reactive ion etching (RIE) process through which the silicon substrate was etched by bombardment of highly energetic plasma composed of various chemical gases such as carbon fluoride, sulfur fluoride, and argon [26]. Such mechanically modified surfaces are known to host numerous surface states [40]. Moreover, many types of surface defects have been reported in deep-level transient spectroscopy studies with samples etched by RIE processes [45, 46]-
, and some have been directly related to SPV effects [47]. The interface state in our system is assumed to be donor-type (defined in Appendix F) with a surface density Σfs and an effective single energy level Efs below the Fermi level EF, as shown in Fig. 2 (d). The interface exhibits a charge density of +e(1 − fs)Σfs, where fs is the electron occupation probability of the interface states. Under illumination, electrons in the interface states are optically excited to the conduction band to form a-
 highly localized concentration near the interface. While some electrons are captured back into the defects (surface recombination), others diffuse into the bulk due to a large gradient in the density. In the bulk, they recombine with free holes via bulk defect states through the ShockleyRead-Hall recombination process, extending the surface depletion range (see Fig. 2 (e)). The depletion of holes in the bulk is balanced by positive charging of the surface (enhanced downward band bending). Given a-
 sufficiently high Σfs, the positive charging enhances with stronger absorption of light and lower recombination of carriers occurring at these defects. A positively charged steady state is then established by the balance between the diffusion of electrons from the surface into the bulk, and the screening behavior of photo-generated bulk electrons. This can result in a large and positive SPV (denoted as δφ > 0 in Fig. 2 (f)), and is referred to as SPV inversion [23, 35, 48]. The steady state value-
 of the occupation probability of the interface state f ̄s is determined by the electron and hole densities n and p at the surface, and parameters that characterize optical absorption and surface recombination (see Appendix F) [43, 49, 50]:
f ̄s = n + (sp0/sn0)p1,s
n + n1,s + (sp0/sn0) (p + p1,s) + N0αn/sn0 x=0 (1) where sn0 = σcn,sΣfsvn and sp0 = σcp,sΣfsvp are the surface recombination velocities with the carrier capture cross sections σcn,s, σcp,s, and the bulk thermal velocities vn, vp. Also, n1,s = niexp(Efs/kT ), p1,s = niexp(−Efs/kT ) where ni is the intrinsic carrier concentration, Efs is the energy level of the interface state, k is the Boltzmann constant, and T is the temperature of the system. The most significant parameter is αn, the surface abso-
rption coefficient, defined as αn = σnoΣfs. It is proportional to
the optical cross section, σno, whose value and spectral dependence can result in very different SPV effects as compared to when only bulk absorption is present. There are many theories on the microscopic origin of
the optical cross section of impurities in semiconductors [41, 42, 51–57]. The common objective is to find a suitable potential for the bound state |i⟩ that best reproduces the observed spectral response through the dipole transition (i.e., electric field polarized in the z direction)
σo
n∝
X
f ⟨f | zˆ |i⟩
2
δ(E − Eio) (2)
where |f ⟩’s are the continuum states in the conduction bands, and Eio = Ef − Ei is the ionization energy between the relevant conduction band and the defect level. Here, we apply the Hulthe ́n potential [56]
V (x) = − e2
ε
λ a
e−λx/a
1 − e−λx/a (3)
which is basically a screened Coulomb potential, appropriate for describing shallow bound states, |i⟩. The reason for choosing this potential will become evident in Sec. III where fitted values for the parameters Eio, a, and λ are presented along with experimental data. ε is the dielectric constant of the material. Note that Eq. (1) describes the optical excitation of electrons only. For the complete formalism also involving excitation of holes into the interface state (band-to-defect transition),-
 see Appendix F. In the bulk, the dominant bulk recombination process in indirect semiconductors such as silicon is the ShockleyRead-Hall type, described by the rate
Rb = np − n2
i
τn0(p + p1,b) + τp0(n + n1,b) (4)
where n1,b = ni exp(Eb/kT ), p1,b = ni exp(−Eb/kT ), with Eb denoting the energy level of the bulk defect. The lifetime parameters τn0 = (σc
n,bNbvn)−1 and τp0 = (σc
p,bNbvp)−1 characterize properties of the bulk defect
recombination center. Here, σc
n,b and σc
p,b are the capture cross sections of the bulk defect state for electrons and holes, respectively, and Nb is its density. The contribution of Rb is significant to the observed SPV effect, as it determines the degree to which holes are depleted. Numerical simulations to verify the proposed charging mechanism were performed by solving the semiconductor equations (see Appendix D). Bulk conditions were set in accordance with our chip substrate, which is ptype silicon doped at a concentration of 1015 c-
m−3. The results are shown in Fig. 3. A positive SPV occurs as predicted, increasing in magnitude with larger depopulation of electrons from the interface state, δfs = f ̄s − f ̄s0 < 0,
where f ̄s0 is the electron occupation probability in thermal equilibrium. The carrier densities are decomposed as n = n0 + δn, p = p0 + δp where n0, p0 are thermal equilibrium densities and δn, δp are the excess densities. Fig. 3 (a)–(c) display the effect of an increasing interface state density Σfs under a fixed surface charge density Σss = 1 × 1011 cm−2 and constant photon flux. A noticeable inversion in the SPV takes place as Σfs increases,

5
(a) (b) (c)
(d) (e) (f)
FIG. 3. Numerical simulation results of the photoconductive charging model. (a)–(c) Spatial profiles of (a) δφ (dark cyan), φ0 (black dashed), (b) δn (blue), δp (red), (c) n = n0 + δn (blue), p = p0 + δp (red), and n0, p0 (black dashed), for various Σfs with fixed photon flux N0 = 1 × 1015 cm−2· s−1. Values of Σfs are denoted in the legends in units of 1010 cm−2. Inset in (a) shows values of δφ at x = 0 for different Σfs’s. From (b)–(c), it can be seen that the distinctive characteristic of a posi-
tive (negative) SPV is the widening (narrowing) of the surface depletion range in comparison to its range in thermal equilibrium. The orange vertical lines at x = 0.129 μm correspond to the Debye-screening length (defined as r+ in Appendix E 1), which indicates that excess electrons in the bulk are mostly involved in screening. (d)–(e) Spatial profiles of (d) δφ (darkcyan), φ0 (black dashed),
(e) f ̄s (circle), f ̄s0 ≈ 1 (dashed), (f) n (blue), and p (red), for various photon fluxes N0’s and fixed Σfs = 8 × 1010 cm−2. Inset
in (d) shows values of δφ at x = 0 for different N0’s. Saturation of SPV and surface depletion range appear as f ̄s approaches 0. Dotted horizontal lines in (c) and (f) indicate n0 = 105 cm−3 (inset) and p0 = 1015 cm−3, for the case when surface charges and interface states are absent (flat initial bands). Throughout (a)–(f), Σss = 1 × 1011 cm−2, while the remaining parameter values were chosen and fixed to best illustrate the described effects.
when charging from surface absorption outweighs that from bulk absorption. Fig. 3 (d)–(f) show the effect of an increasing photon flux while the charge densities were kept constant at Σfs = 8 × 1010 cm−2 and Σss = 1 × 1011 cm−2. The correlation between the enhancement in SPV, depopulation of electrons δf ̄s < 0, and the increasing depth of surface depletion verifies our charging model. In the following section, we briefly explain how the experimental value of the SPV can be determined using the io-
n as a quantum sensor for detecting stray fields arising from the SPV, and then display theoretical results, along with experimental data.
III. MEASUREMENT OF SPV AND ITS DEPENDENCE ON OPTICAL POWER AND WAVELENGTH
The magnitude of the SPV at the exposed surface of the silicon substrate is estimated using a micromotion compensation scheme. This scheme involves dc-scanning [16], through which the stray field can be directly measured in terms of a compensation voltage. We can either measure the qubit transition rate with Raman beams 1 and 2 in Fig. 4 (a) where the relevant energy levels are
shown in Fig. 4 (b), or the absorption rate of a weak 935nm laser injected vertically to the chip. Both methods utilize motion-sensitive responses of the ion that display a Bessel-like profile where the maximum occurs at the compensation voltage that cancels out the stray field in the scanning direction. The voltages of the inner dc electrode pair, shown in Fig. 1 (b) are scanned to search for the optimal compensation field (refer to Ref. [26] for more details of the chip). Since our experimental -
configuration enables the generation and compensation of stray fields only in the direction normal to the chip surface, the theoretical model is greatly simplified. First, the dependence of the SPV on the power of illumination is presented. A 1055-nm laser beam is shone to uniformly illuminate the backside of the chip, as shown in Fig. 4 (a). The qubit-flipping probabilities p1 are measured with the dc voltages scanned under various powers of the laser from 0 – 2.1 μW, as shown in Fig. 5 (a). The -
extracted compensation voltages for various laser powers P1055 nm are plotted in Fig. 5 (b). The absolute value of compensation voltage grows linearly with increasing laser power. To estimate the internally generated SPV from the measured compensation voltage, the COMSOL Multiphysics® software is employed for electrostatic analysis which shows that a compensation volt

6
p-type Si substrate
Cooling &
repumping lasers Trapped ion
Charging lasers (355, 399, 635, 1055, 1300, 1550 nm)
Raman beam 2 (global, upward)
Raman beam 3 (global, le�ward)
Raman beam 1 (individual, downward)
500 μm
Imaging
(a) (b) x
y
z
355 nm pulse laser (Raman 2,3)
355 nm pulse laser (Raman 1)
|0⟩
|1⟩ F=1
F=0
FF==10
2P1/2
2S1/2
369.5 nm
12.643 GHz
171Yb+
FIG. 4. Experimental configuration. (a) Schematic cross-sectional illustration of the microfabricated chip with parallel and perpendicularly incident laser beams. (b) Energy level diagram of 171Yb+ with Raman transition for qubit control by pulsed laser beams.
TABLE I. Parameter values used in the numerical simulation
Surface
Σfs
[cm−2]
σc
n,s = σc
p,s = σc
s
[cm2]
Efs
[eV]
Σss
[cm−2]
σo
n(1300) [cm−2]
σo
n(1055) [cm2]
σo
n(635) [cm2]
σo
n(399) [cm2]
σo
n(355) [cm2] 2.7×1011 6.48×10−24 − 0.39 1.0×1011 1.1×10−19 3.24×10−15 3.6×10−16 3.6×10−17 1.95×10−17
Bulk
Nb [cm−3]
σc
n,b
[cm2]
σc
p,b
[cm2]
Eb [eV]
ni [cm−3]
vn = vp = vth [cm· s−1]
μn
[cm2· V−1· s−1]
μp
[cm2· V−1· s−1] 1.0×1013 1.0×10−15 1.0×10−15 0.0 1.0×1010 1.0×107 1340 284
age of ∆Vdc ≈ −0.1 V is required to cancel the stray field generated by an SPV of φ ≈ +0.273 V at the silicon surface (see Appendix H). The strength of the corresponding field is 288 V·m−1 at the position of the ion, which can displace the ion by 1.6 μm for a harmonic oscillator with a secular frequency of 1.6 MHz. This implies that an SPV of merely several mV is strong enough to deteriorate the fidelity of quantum operations of trapped ions, where coherent displacements typically employed in Mølm-
er–Sørensen gates is a few times the ground state wave packet width which is around 4 nm [58]. Next, the general spectral dependence of the SPV is obtained from the photo-induced response of the exposed silicon surface to six wavelengths: two in the UV range (355, 399 nm), one in the visible range (635 nm), and three in the NIR range (1055, 1300, and 1550 nm). The lasers are shone onto the backside of the chip with diameters of 1.9 – 2.7 mm, fully illuminating the exposed silicon surface as in Fig-
. 4 (a). The compensation voltages against the photon fluxes of 355, 399, 635, 1055 and 1300-nm lasers are shown in Fig. 5 (c). Note that no measurable displacement of the ion was observed up to the maximum power of our 1550-nm laser (1.5 mW). It can be clearly seen that the SPV is positive as indicated by the negative sign of the compensation voltage, which implies the occurrence of SPV inversion from a p-type silicon. Moreover, this behavior persists throughout all wavelengths, that is, not only-
 at sub-bandgap but also super-bandgap wavelengths. To our knowledge, SPV inversion in silicon and SPV inversion at superbandgap wavelengths have not been reported to date. The two phenomena, however, are simultaneously repro
ducible according to our semiconductor charging model under the hypothesized surface conditions from Sec. II. In particular, the unique dependence on the wavelength is largely determined by the optical cross section, as will be discussed in the following paragraph. The observation range of the ion displacement is bound from below by the measurement sensitivity of |∆Vdc| ≈ 5 mV (from Ref. [16], with consideration of probe laser intensity fluctuation; indicated by a dashed horizontal line in Fig. 5 -
(c)), and from above by the voltage that is required to stably confine the ion within the trap, which is |∆Vdc| ≈ 1 V (shown as a shaded region in Fig. 5 (c)). The limited available powers of the diode lasers used in our experiments also set the upper bound for maximum displacement. The theoretical curves of the SPV’s fitted to experimental data are shown as dashed lines in Fig. 5 (c). The numerical values of the parameters used in the computation are listed in Table I. Typical values reported els-
ewhere [59–61] were used for the bulk parameters, while the surface parameters were fitted to explain the experimental data. One exception is the fixed surface charge density, Σss = 1 × 1011 cm−2, which is the typical value observed in real oxidized silicon surfaces [37]. The parameters μn and μp are the electron and hole mobilities that are necessary to solve the semiconductor equations (see Appendix D). The bulk absorption coefficient values used in simulation are, αb(1300) = 2.7 × 10−5 cm−1, αb-
(1055) = 1.63 × 101, cm−1, αb(399) = 9.52 × 104 cm−1 [62]. The optical cross sections are determined from the empirical spectral response of the SPV. The cutoff wave

7
1 1.5 2 2.5 3 3.5 Photon energy (eV)
0
0.2
0.4
0.6
0.8
1
Rel. opt. cross section
3 3.5
0
0.01
0.02
1300 nm 1055 nm 635 nm 399 nm 355 nm
Hulthén
Hydrogenic
Delta
(a) (b)
(d)
(c)
FIG. 5. Measurement for laser power and wavelength dependence of the laser-induced field magnitude. (a) Raman transition probabilities vs. inner dc voltage shift for a range of 1055-nm laser power. (b) Inner dc compensation voltage vs. 1055-nm laser power. (c) Spectral response of laser-induced electric fields with respect to the compensation voltage (left) and the SPV (right). The shaded region indicates the unstable trapping condition of the ion. (d) Normalized optical cross section vs. photon e-
nergy. The solid circles are the values used to fit the experimental data in (c), with each color corresponding to the respective wavelength. The solid line corresponds to the fitted curve for the Hulthe ́n potential in Eq. (3) while the dashed lines indicate the two limiting cases from the quantum defect model [42, 52]. The vertical error bars in (a)–(c) indicate the 95 % confidence intervals of the fit and the horizontal error bars indicate ±50 % of the photon flux values which reflects their ov-
erall uncertainties.
length is found to be near 1300 nm (Eio ≈ 0.95 eV). With Ei = 0 eV and the intrinsic bandgap of silicon being 1.12 eV, we have Efs ≈ −0.39 eV, which lies lower than the Fermi level EF ≈ −0.3 eV, determined by the doping concentration of our substrate. Lasers of wavelengths between 1055 – 1300 nm will allow us to measure the cutoff more accurately, but the current estimation is sufficient for our purposes. According to numerical simulations, the magnitude of the SPV at a particular wavelength is ne-
arly proportional
to the value of the optical cross section at that wavelength. The experimental values of the relative strengths between the optical responses at different wavelengths are plotted in Fig. 5 (d) as solid circles. The theoretical optical cross section, whose analytical expression can be found in Appendix G, is fitted to these data points and overlaid on them. It is normalized relative to the peak value that occurs near the bandgap energy of silicon ∼ 1.12 eV. The fitted values for the Hulthe ́n poten-
tial parameters are a = 6.4 × 10−8 cm, a/λ = 1 × 10−7 cm.

8
The absolute values of the optical cross section listed in Table I were obtained from this curve, and then used to numerically compute the theoretical SPV in Fig. 5 (c). Note that the optical cross section at 1300 nm is not exactly zero, but smaller than the peak value by several orders of magnitudes. The effectiveness of the semiconductor charging model in explaining the observed spectral dependence of the SPV is mainly enabled by the Hulth ́en potential, which is suitable for describing shallow -
defects. A characteristic feature of the optical response of shallow defects in semiconductors is a narrow absorption spectra near the bandgap energy [63], which is indeed in agreement with experiment. The sharp contrast in the optical cross section between wavelengths in the NIR/VIS and UV ranges cannot be reproduced by the more common quantum defect models [42, 52]. The normalized optical cross section of two limiting cases in the quantum defect model, the delta-function and hydrogenic defects, -
are shown in Fig. 5 (d) for comparison. Also, for a fixed set of parameters, the optical cross section tends to become larger for shallower defects. In particular, the peak value of the optical cross section derived from the Hulth ́en potential is larger than that predicted by the quantum defect models by 1 – 2 orders in magnitude. The density and carrier capture cross sections of the interface state can then be determined as the set of values that best reproduce both the observed magnitude and sl-
ope of the SPV for a broad range of incident photon flux. Conditions for SPV inversion are found to favor identical or comparable values for the capture cross sections of electrons and holes, hence, σcn,s = σcp,s = σsc. Under this condition, the last term in the denominator of Eq. (1) becomes proportional to σno/σscvth. This ratio determines the sensitivity of the optical response, i.e., σno(1055)/σscvth = 50 cm−1 · s. Given the optical cross section values, the capture cross section is fitted to -
the very small value listed in Table I, which is also a property consistent with shallow defects [64]. The large sensitivity is the primary reason for the peculiar SPV inversion observed in our system [65]. The experimental data can also be fitted well to the model in which an oxide layer is absent at the surface (Σss = 0), with minor corrections to the parameter values. This condition is actually more favorable to the proposed surface charging process since bulk screening effects arising from car-
rier drift are reduced in the absence of positive fixed oxide charges. Therefore, the model’s capability to effectively account for the two distinct surface conditions with relatively small adjustments to the parameter values demonstrates that the overall mechanism remains applicable to a broad range of uncertainties in the surface conditions.
IV. TIME-RESOLVED DOPPLER SHIFT
The characteristic time scale of the semiconductor charging is investigated by measuring the velocity of the ion driven by the photo-induced stray field originating from the scattering of the Raman beams used for quantum operations. In particular, the time-resolved Doppler shift of the resonant frequency of the Raman transition caused by Raman beam 3 (global) is measured. A schematic of the sequence is shown in Fig. 6 (a). After state initialization, we turn on only Raman beam 3, which has a power-
 of 360 mW (pre-turn-on as we call) and wait for varying time intervals ∆T . Then we turn on Raman beam 1 whose power is 12 mW, to drive the Raman transition along with Raman beam 3, for a fixed time of 80 μs which is close to the π-pulse duration. Finally, the qubit state of the ion is detected, and the average transition probability from repeated sequences is recorded. The Doppler shift between the ion and the Raman lasers is monitored by repetitions of the experiment for a range of detuning val-
ues δ of Raman beam 1 (by varying the rf frequency applied to the acousto-optic modulator).
Initialization Detection
Δ T 80 μs
(a)
(b) (c)
Beam 3 (global) Beam 1 (individual)
FIG. 6. Raman beam pre-turn-on measurement. (a) Operation sequence of pre-turn-on measurement for Raman beam 3. After state initialization, the global beam is first turned on, and then the individual beam is turned on after a time interval of ∆T . Raman transition is driven for 80 μs, followed by state detection. (b) Result of pre-turn-on measurement for Raman beam 3. Transition probability is plotted with varying ∆T and the laser detuning δ. (c) Result of pre-turn-on measurement for Raman beam 1.-
 The orange dashed lines serve as guides for the maximum values at each time interval.
The result of pre-turn-on measurement (for Raman beam 3) is shown in Fig. 6 (b). It clearly reveals a continuous change of the resonance frequency of the transition in time and saturation after frequency shift of roughly 13 kHz. The gradual change in the qubit frequency implies that it is caused by the Doppler shift due to the movement of the ion. Assuming the following form of Doppler shift, ∆ωo = ∆⃗k ·v⃗ , where ∆⃗k is the momentum difference of the two Raman beams andv⃗ is the ion velocity, the-
 velocity is estimated to be 3.3 nm/μs, which

9
is significant considering that the width of the zero-point wavefunction is 4.3 nm for a secular frequency of 1.6 MHz of our trap and the wavelength of the Raman beatnote is 251 nm. In contrast, when Raman beam 1 is pre-turned on instead of Raman beam 3, no shift in the qubit frequency is observed as depicted in Fig. 6 (c). The different results can be explained by the relatively low power of Raman beam 1 and the fact that it does not irradiate the exposed silicon directly. Note that the actual di-
rection of the ion’s velocity can be deviated from the chip’s perpendicular direction, depending on the spatial profile of the SPV. Therefore, only the order of the speed was our consideration. Both the rise and fall time of the stray fields lie within the order of 1 – 100 μs, with slight variations depending on the laser alignment and power conditions. These time scales are comparable to that of the time evolution of the ion, capable of causing significant infidelity in operations involving motio-
nal quantum states. In uniform materials, the characteristic time scale of neutralization is determined by the dielectric relaxation time τ+ which is estimated to be on the order of several pico-seconds for our substrate given the doping concentration of 1015 cm−3 (see Appendix E 2). The measured time scales clearly do not agree with this value, but are instead on the order of carrier lifetimes associated with defects in semiconductors [66]. This strongly supports our assertion that the observed S-
PV originates from charging processes associated with impurities throughout the surface and bulk of the semiconductor (see Appendix E 2). We will also use the dielectric relaxation time to interpret dielectric charging and other silicon charging phenomena in Sec. VI.
V. EFFECTS ON QUANTUM CONTROL
The motion of the ion in the presence of a rapidly developing stray field significantly modifies the motionsensitive Rabi oscillation. According to our simulations, the main effect of the stray field is to induce coherent errors during quantum control. The error is coherent because the qubit state retains its purity but undergoes unintended unitary evolution, differing from the more common incoherent error originating from the thermal motion of the ion [11]. We use the term thermal decoherence in -
a broad sense, involving dephasing arising from the thermal distribution of phonons, and heating from the environment. The Rabi oscillation and trajectory of evolution on the Bloch sphere are simulated by solving the Lindblad master equation (see Appendix J 1) whose system Hamiltonian is given as [67]
Hsys(t) = ħΩ
2 ei∆kx(t)e−iδtσ† + e−i∆kx(t)eiδtσ (5)
where Ω is the Rabi frequency, σ†(σ) is the two level system raising (lowering) operator. The Lindblad operator for amplitude damping L = Γa is used where Γ is the
ion heating rate, a†(a) the raising(lowering) operator of the oscillator, with the temperature of the environment is assumed to be T=300 K. The one-dimensional Hamiltonian is consistent with the experimental configuration of the counter-propagating beam setup in Fig. 4. Assuming a stray field with an exponential temporal profile Estr(1 − exp(−t/τstr)) and a static compensation field Ecom, we can define the force exerted on the ion as
F (t) = e Estr 1 − e−(tpre+t)/τstr − Ecom (6)
where tpre is a pre-turn-on time that can be adjusted to control the initiation of the evolution. This stray field originates from the scattered light from Raman beam 2 (global) in the counter-propagating configuration. The effect of these fields have been absorbed into the position operator x(t) as [68, 69] (see Appendix J 2)
x(t) ≈ x0 eiωxta† + e−iωxta + 2x0Re(α(t)) (7)
where
α(t) ≈ e−iωxtα(0)
+i
ħ
Zt
0
dt′e−iωx(t−t′) 1 + qx
2 cos(ωrf t′)
1 + qx
2
x0F (t′). (8)
Here, x0 is the size of the ground state, ωx, ωrf indicate the secular and rf trap frequencies, respectively, and qx is the q-parameter associated with the trap stability [67]. This expression results from directly solving the quantum equations of motion for the time-dependent oscillator in the presence of external fields [69]. In particular, Eq. (8) represents the excess micromotion. The approximations in the above equations result from omitting a squeezing factor that describes intrinsic micromo-
tion, which does not compromise the generality of the results. The Rabi frequency and heating rate of our system are Ω = 2π × 78 kHz and Γ ≈ 104 quanta/s. The detuning is set to δ = 0, so that the carrier transition is driven. Also, ωrf = 2π × 22.21 MHz and ωx = 2π × 1.6 MHz, from which we obtain qx ≈ 0.2. The Lamb-Dicke factor is ∆kx0 ≈ 0.152. In the Doppler limit, the mean phonon number n ̄0 is calculated to be n ̄0 ≈ 10. This value may vary depending on the compensation of the stray field, due -
to modification of the cooling efficiency in the presence of excess micromotion [70], as is also observed in our experiments. Simulations are performed by treating τstr, Estr, Ecom, and  ̄n0 as fitting parameters, while the experimental parameters Ω, Γ, ωx and qx are fixed. In Fig. 7, experimental data and numerical results are shown for cases with different levels of compensation of the stray fields. Compensation methods include the pre-turn-on sequence and field compensation through dc scans [16-
], along with precise alignment of the control lasers to minimize semiconductor charging (see Appendix B). The simulated trajectories of the evolution is drawn on the Bloch sphere for each case, and the purity

10
FIG. 7. Rabi oscillation and Bloch sphere trajectory under the influence of coherent errors induced by semiconductor charging and incoherent errors due to thermal decoherence. (a) Simulated Rabi oscillations for thermal states with the average phonon number  ̄n0 = 0 (light grey, dashed), 10 (grey, dotted), and 20 (black, solid). The trajectory on the Bloch sphere and the purity of the qubit state for each case is depicted, with the color map representing the flow of time (blue to red). Traces of t-
he purity and their corresponding Rabi oscillations for identical n ̄0’s are represented using the same line styles. (b) Pre-turn-on applied, fully compensated (tpre ≫ τstr, Ecom = Estr). The initial mean phonon number is fitted to n ̄0 = 6. Comparing with the simulation for n ̄0 = 0, the main source of damping occurs from motional decoherence. (c) Pre-turn-on applied, uncompensated (tpre ≫ τstr, Ecom − Estr = 47 V · m−1). The initial mean phonon number is fitted to n ̄0 = 14. (d) Pre-turn-on not -
applied, uncompensated (tpre = 0, τstr = 6 μs, Estr = 9 V · m−1, Ecom = 34 V · m−1). The initial mean phonon number is fitted to n ̄0 = 11. (e) Pre-turn-on not applied, uncompensated (tpre = 0, τstr = 19 μs, Estr = 27 V · m−1, Ecom = 57 V · m−1). The initial mean phonon number is fitted to n ̄0 = 13. (f) Sideband spectra depending on the application of the pre-turn-on sequence. The top (bottom) plot is obtained when pre-turn-on is utilized (not utilized). Throughout (b) – (e), the solid lines are -
fitted to data, while the grey dashed (solid) lines indicate simulation results corresponding n ̄0 = 0 in (b) – (c) ((d) – (e)). The purity is represented in solid (dashed) lines for the fitted ( ̄n0 = 0) data. The experimental Rabi frequency and heating rate are Ω = 2π × 78 kHz and Γ ≈ 104 quanta/s, respectively, for all cases. The simulated ion displacements are on the order of 10 nm – 100 nm, comparable to the wavelength of the driving laser.
of the state is plotted along with the Rabi oscillation. The purity γpur is defined as
γpur = Tr ρ2
qubit (9)
where ρqubit is the reduced density matrix describing the qubit state of the trapped ion (see Appendix J 1). The simulation data displayed in Fig. 7 (a) serves as a reference case where there are no background fields and only thermal decoherence is present, for various values of  ̄n0. Fig. 7 (b) shows the case where both pre-turn-on (tpre ≫ τs) and complete compensation (Ec = Es) have been applied. Resolved sideband cooling has been uti
lized to cool the ion below the Doppler limit,  ̄n0 ≈ 6 < 10. Note that the relatively large heating rate of our system (Γ ≈ 104 quanta/s) prevented us from reaching the motional ground state. Moreover, for the cases where the stray fields were not compensated, corresponding to Fig. 7 (c) – (e), sideband cooling was completely ineffective. In Fig. 7 (c), pre-turn-on is applied but the stray field is not compensated. Despite using the same laser parameters as in (b), the observed Rabi frequency is -
reduced by nearly a factor of 2.5. Note that this reduction cannot be attributed to thermal decoherence. For instance,

11
as shown in Fig. 7 (a), the simulated Rabi frequency is only slightly reduced even with n ̄0 = 20, and increasing  ̄n0 further will result in a decreased visibility before a substantial reduction in the Rabi frequency occurs. On the other hand, our simulations confirm that this phenomenon directly results from the effective modulation of the Raman transition in the presence of excess micromotion [16], with thermal decoherence mostly being responsible for the decay of the oscillation and purity. No-
te that the rotational axis of the Rabi oscillation is also modified due to this effective phase modulation. Fig. 7 (d) and (e) show the situations where neither pre-turn-on nor compensation is utilized. The temporal development of the field drastically modifies the Rabi oscillation, giving an impression of substantial thermal decoherence taking place. Again, we emphasize that such patterns in the Rabi oscillation cannot be reproduced by merely adding more phonons or increasing the heating rate. I-
nstead, simulation results show that the apparent decay in the Rabi oscillation is actually a consequence of coherent rotational errors in the Bloch sphere rather than incoherent dephasing or damping. Indeed, these errors are pronounced even when the ion is in its motional ground state ( ̄n0 = 0). Interpretation of the Bloch sphere trajectory is given as follows. The motion of the ion causes a continuous transformation of the rotational axis of the Rabi oscillation, through the time-dependent spat-
ial phase ∆kx(t). Once F (t) in Eq. (6) converges to F (t ≫ τstr) = e(Estr − Ecom), Rabi oscillation proceeds around the axis on the equator of the Bloch sphere, as determined by this value. Despite the distinct Rabi oscillation patterns shown in Fig. 7 (d) and (e), in both cases, the purity only decreases during the rise time of the stray field (τstr), and shows little sign of decoherence afterwards. To understand this, it is helpful to picture the thermally damped Rabi oscillation on the Bloch s-
phere. In Fig. 8, a crosssectional view of the Bloch sphere is shown where an initial state |i⟩ undergoes within Rabi oscillation around the rotation axis (purple). The circle C is the trajectory that an ideal coherent quantum state would traverse at the Rabi frequency. In the presence of thermal decoherence, however, the state (orange) will spiral into the circle C, eventually reaching the center of the circle. The state becomes a mixed state as it evolves into the interior of the Bloch sphere. T-
he purity, however, does not simply fall to 0.5, but has a lower bound given by γpur,min = 0.5(1 + sinθ). The geometrical representation for the term sinθ is provided in Fig. 8. The larger the radius of the circle C, rc = cosθ (red), the larger the decoherence, with γpur,min = 0.5 for |i⟩ = |0⟩ (θ = 0). This is because the incoherent sum of Rabi frequencies arising to the phonon distribution is largest when the radius rc is at its maximum (see the captions of Fig. 8). This explains the traces of t-
he purity simulated in Fig. 7 (d) and (e). In both cases, the purity is significantly reduced as the state |i⟩ = |0⟩ is initially rotated about an axis on the equator of the Bloch sphere, due
to the maximal radius rc = 1 (θ = 0). During the rise time of the stray field, the rotational axis transforms as well, eventually reaching a new orientation on the equator. If the state is near the new rotational axis by the time that F (t) converges, the subsequent trajectory will be confined within a smaller circle C. This prevents the qubit state from moving further into the interior of the Bloch sphere. Ironically, although their Rabi oscillations seems to occur in an incoherent manner, the st-
ates are actually more coherent than those in Fig. 7 (b) and (c), where the dynamical effects of the stray field have been compensated. These observations demonstrate that photo-induced stray fields and excess micromotion mainly induce coherent errors, and do not necessarily increase thermal decoherence.
t = ti
t = ti + Δt
|n⟩ |m⟩
|n⟩
|m⟩
Ωn,n
Ωm,m
|0⟩
|1⟩
i
|0⟩
|1⟩
i
θ
C
C
sin θ
cos θ
rc
rc x
y
FIG. 8. Geometric interpretation of thermal decoherence on the Bloch sphere. An initial state |i⟩ that undergoes thermally damped Rabi oscillation around a rotational axis on the equator of the Bloch sphere will spiral in towards the center of the circle C with radius rc (the rotational axis, quantum state, and radius rc are colored in purple, orange, and red, respectively). This is because components of the state with different Rabi frequencies originating from the phonon distribution will spread-
, adding up incoherently during the evolution. This process is schematically depicted in the left figure, where carrier Rabi frequencies for the oscillator states |n⟩ and |m⟩ are denoted as Ωn,n and Ωm,m, respectively. The vector in orange represents the quantum state losing purity within a time interval ∆t. The extent of the spread is proportional to the radius rc = cosθ, thus, resulting in a greater loss of purity as rc increases. In the right figure, the vector in orange represents the qubit st-
ate with the lowest purity given by γpur,min = 0.5 + sinθ, assuming |i⟩ and the specified rotational axis.
The effect of the pre-turn-on sequence on the sideband spectra is shown in Fig. 7 (e). When the evolution is initiated only after the stray field reaches its steady state, the sideband spectrum exhibits just the carrier and secular motion transition peaks. On the other hand, when the pre-turn-on sequence is not applied, we observe numerous transition peaks due to the convolution of the ion oscillation at the motional frequency with the trap frequency and the temporal profile of the stray field (se-
e Eq. (8)). Again, such a spectrum cannot be obtained by merely heating up the ion as only transitions at higher order motional frequencies will occur with a decaying profile.

12
VI. DISCUSSION
Our model provides insight into previous studies on dielectric charging [9, 17–22] and reported issues on silicon charging [8, 29, 31]. The conventional explanation for the charging of insulators in ion traps is attributed to the photoelectric effect, encompassing direct photoemission from insulators or the capturing of photoelectrons emitted from interfacing conductors into insulators [17]. On the other hand, internal carrier dynamics or phenomena that arise due to boundaries or inhomogeneities h-
ave largely been neglected. According to our study, such factors can have significant impact in the overall response of the system. Here, we enumerate potential mechanisms that can enhance our understanding of dielectric charging, aiming to shed light on previously unexplained observations, such as the wide range of time scales manifest in the relaxation process and irregularities in the spectral response [9, 17–19, 22]. Considering that the lasers commonly used in ion traps operate within an ener-
gy range of 1 – 4 eV, and typical solids have work functions ranging from 4 – 6 eV [71] (also see Table II where insulators are characterized by the bandgap energy Eg and electron affinity χ, while conductors are specified by the work function φm, respectively), external photoemission should mainly occur through nonlinear processes involving multiphoton absorption. Note, there are exceptional cases in which a linear photoelectric response is observed below 4 eV from aluminum [72], or when certain -
lasers used for photoionization exceed 5 eV, such as in 9Be+ systems. In photoemission spectroscopy studies, multiphoton photoemission has been primarily demonstrated for conductors where the free carrier concentration is large, mostly using pulsed lasers [73, 74], and rarely with continuouswave lasers [75]. However, this has been accepted as the main cause for dielectric charging in ion trap systems, even with weak continuous lasers, due to the extreme sensitivity of ions to sense sources as smal-
l as 10 – 1000 elementary charges and the enhancement of charging correlated with UV light. Nevertheless, this assumption is simplified and requires careful examination. Let us consider the dielectric relaxation times τ+ of commonly used insulators in ion trap chips listed in Table II (see Appendix E 2). They typically fall within the order of hours, which is compatible with long-term charging measured in Ref. [19], but distinct to transient responses on the order of 10 – 100 s reported in Refs. [-
9, 17, 22]. Characteristic time scales significantly distinct from the dielectric relaxation time indicate the existence of underlying carrier dynamics in the presence of inhomogeneities throughout the bulk and boundaries (see Appendix E 2). Specifically, internal carrier dynamics induced by linear or nonlinear absorption of light in such solids [76–78], associated with microscopic bond and defect structures [79, 80] has been largely overlooked in the context of dielectric charging. Considering th-
at photo-induced re
sponse from localized electronic states in silica has been observed, where the associated time scales are on the order of 10 – 100 s [81], it may not be reasonable to neglect this phenomena. Moreover, even photoemission involves carrier dynamics as energetic electrons experience inelastic scattering as a function of kinetic energy during their transport to the surface [82], in conjunction with the relaxation and recombination of holes.
TABLE II. Properties of commonly occurring insulators and conductors in ion trap chips
Insulator Conductor
Material SiO2 Al2O3 Si3N4 Cu Au
Eg [eV] 9 7 5.3 – 
χ, φm [eV] 1.1 2 2.1 4.6 5.5
ε 3.9 9 7 – 
σ [Ω−1 · s−1] 10−15 10−14 10−14 107 107
τ+ 9.6 h 2.2 h 1.7 h 10−15 s 10−15 s
References [83, 84] [84–86] [84, 87] [88, 89] [90–92]
Boundaries in a system, such as the surfaces or interfaces between materials, are particularly important because defects and barriers form at the boundaries [93], which can introduce various types of carrier emission and capturing mechanisms [94–96]. Indeed, certain reports on dielectric charging pertain to insulator/conductor structures [17, 18, 22], where the net effect actually arises as a joint process involving the two materials. In fact, multiphoton photoemission has been utilized to investi-
gate surface states on conductors [97], interface states of insulator/conductor structures [98–102], and transfer of electrons from conductors into insulators [103]. These are all probable microscopic processes that have been grouped into a single mechanism in the context of dielectric charging. In contrast to the relatively fast response time of our silicon substrate, a slower charging process on the order of 1 – 10 s has been reported in a cryogenic silicon-based chip [29]. This is intriguing be-
cause a chip fabricated earlier under similar conditions showed no such issues [31]. This implies that fabrication conditions have significant impact on the surface quality of the chip. Both chips used the deep RIE procedure, which is suspected to be the cause of the defect states on the surface of our substrate. A difference between our chip and the one discussed in Ref. [29] is that the latter operates at cryogenic temperatures, utilizes intrinsic silicon, and creates a thermal dioxide layer on -
the silicon surface, which presumably results in different surface conditions that are responsible for the different characteristic time scale. Based on the simulation results of our semiconductor charging model, we list some implications for the development of semiconductor-based ion trap chip fabrication. First, increasing the bandgap or bulk doping concentration may not necessarily reduce SPV effects significantly as long as the influence of surface defects or interface

13
TABLE III. Categorization of stray electric fields in ion trap chips.
Electric-field noise Photo-induced electric field
Electrode noise
Thin layer on metal
Patch potential, two-level fluctuators, adatoms, ...
Dielectric charging
Semiconductor charging
Mechanisms Noise from resistance
Thermal noise from dissipation
Phonon-induced fluctuation of charges
Photoemission Charge capture Internal dynamics
Surface photovoltage Bulk response (Dember effect)
Material Electrode conductor or semiconductor
Insulating layer on conductor
Conductor surface (also semiconductor for two-level fluctuators)
Insulator (including boundaries)
Semiconductor (including boundaries)
Effect on ion
Heating, motional dephasing, incoherent errors
Displacement, coherent errors
References Turchette 2000 [10]
Kumph 2016 [14] Boldin 2018 [15]
Turchette 2000 [10] Schriefl 2006 [12] Safavi-Naini 2011 [13] Boldin 2018 [15]
Harlander 2010 [17] Wang 2011 [18] Ha ̈rter 2014 [19] Ivory 2021 [9]
This work Lakhmanskiy 2020 [29] Mehta 2020 [8]
states cannot be controlled. SPV can be drastically reduced only when the substrate behaves like an insulator (low free carrier density, low mobility) or a conductor (high free carrier density, high mobility) [104]. Second, the charging mechanism introduced in our study is not likely to disappear by merely changing the substrate to n-type silicon. For example, if the surface is oxidized so that the electron density is high at the surface in thermal equilibrium (accumulation layer), optical excitat-
ion from defect states into the conduction band may be suppressed. Even if this is the case, there can exist more defect states within the bandgap due to the elevated Fermi level. The net effect of these mechanisms must be scrutinized carefully in order to predict the resultant SPV. Third, decreasing the substrate temperature is not necessarily beneficial unless the temperature is lowered to sub-Kelvin levels. This is because the diffusion of carriers, which is proportional to the product of the t-
emperature and carrier mobility (see Appendix D), may not be greatly reduced as the mobility actually increases by orders of magnitude [105]. Also, even when the temperature of the surface is substantially low, generationrecombination noise at the illuminated surface may lead to residual heating of the ion. Finally, while techniques like surface passivation can be employed to mitigate unwanted surface states [106, 107], this is not always feasible. For ion trap systems, it seems best to optically -
block the exposed surfaces completely using reflective metal layers [27]. A categorization of the stray fields that have been reported in ion traps is presented in Table III. Our study is summarized in the column for semiconductor charging. As mentioned in Sec. I, field noise mainly contributes to ion heating. The reported heating rates of the ion in mi
crofabricated ion traps so far mostly follow the distance scaling of ∼ d−4, frequency scaling of ∼ ω−2 and temperature scaling of ∼ T 1.2 [108, 109], but there exists some inconsistency in their absolute levels. When comparing heating rates measured in silicon-based traps and glassbased traps [15, 27, 29–31, 108–112], the latter typically appears to reach lower heating rates for all relevant scaling factors, although the trend is not perfectly clear. We speculate that the difference may be partial-
ly ascribed to an unexplored aspect of photo-induced charging, involving the fluctuation or generation-recombination noise of unpaired/excess charges, which may act as additional noise sources. It remains intriguing to validate this conjecture through a more controlled measurement assessing the dependence of the heating rate on the substrate material.
VII. CONCLUSION
We have observed and analyzed the photo-induced charging process of the silicon substrate in a microfabricated chip by direct measurement of the stray field through motion-sensitive transitions of a trapped ion. A semiconductor charging model based on the SPV theory has been presented. The dominant charging mechanism is identified as SPV inversion in silicon, which occurs irrespective of incident wavelength, primarily attributed to surface defects introduced during the microfabrication process. We-
 have characterized the stray field in multiple ways, including direct imaging, measurement of micromotion-modified transition probability [16], and the time-resolved Doppler shift measurement. Analysis of motion-sensitive qubit transitions revealed that coherent errors are induced by stray fields, which could

14
be mitigated using well-tuned control procedures. Finally, the implications of our model with respect to other photo-induced charging mechanisms and the fabrication of semiconductor-based chips have been discussed. Limitations of our semiconductor charging model and possible alternatives are discussed in Appendix I.
ACKNOWLEDGEMENT
This work was supported by the Institute for Information & communications Technology Planning & Evaluation (IITP) grant (No. 2022-0-01040), the National Research Foundation of Korea (NRF) grant (No. 2020R1A2C3005689, No. 2020M3E4A1079867), and the Samsung Research Funding & Incubation Center of Samsung Electronics (No. SRFC-IT1901-09).
W.L. and D.C. developed the theoretical model and performed the experiments. D.C. selected theories from the literature and carried out the numerical simulations. C.K. examined and refined the theory. W.L and H.J constructed the Raman laser setup and made a first observation. B.C. conducted chip simulation. K.Y. and S.Y. conducted test fabrication. C.J., J.J., D.D.C. and T.K were involved in chip fabrication and setup construction. T.K. supervised the project. W.L., D.C., and T.K. conceived the pr-
oject and wrote the paper. All authors discussed the results and commented on the manuscript.
Appendix A: Experimental system
A schematic cross-sectional illustration of the trap chip and incident laser beams is shown in Fig. 4. (More detailed descriptions of the chip architecture can be found in Ref. [26].) The trap chip was fabricated on a silicon substrate which is boron-doped with a concentration of 1015 cm−3, through MEMS technology. The electrodes are made of aluminum alloy with 1% copper and they are extended to the sidewalls of the underneath pillars to prevent the charging effect of dielectrics induced by lasers-
. The electrodes near the trapping region are additionally coated by gold to avoid oxidation. There is also a loading slot with a width of 80 μm in the middle of the trap chip running along the trap axis (zˆ) direction, originally made for the purpose of backside loading of atoms. 171Yb+ ions are trapped on the chip at a height of 80 μm in an ultrahigh vacuum of < 1 × 10−10 mbar. A trapped ion is tightly confined along the transverse directions (xˆ, yˆ) in a pseudo-potential generated by rf voltag-
es with a frequency of 22.21 MHz, and loosely confined along the trap axial direction (zˆ) in a static potential generated by a set of dc voltages. The trap secular frequencies are 1.6 MHz, 1.5 MHz, and 450 kHz for the three principal axes. A 369-nm cooling beam and a 935-nm repumping beam are injected in a counter-propagating configuration, 45◦
to the trap axis and parallel to the trap chip surface (xˆ + zˆ). The powers of these lasers are 3 μW and 30 μW, and the beam waists of the lasers at the ion position are 15 μm and 45 μm, respectively. The fluorescence of the trapped ion is imaged by a high-NA imaging lens (Photon Gear 15470-S, NA 0.6) and detected by an EMCCD or a photomultiplier tube (PMT). For Raman transition between |0⟩ = |2S1/2, F = 0, mF = 0⟩ and |1⟩ = |2S1/2, F = 1, mF = 1⟩, a 355-nm picosecond pulse laser with a repetitio-
n rate of 120.127 MHz is split into two beams and separately modulated with AOM’s to become a pair of beatnotelocked Raman beams (beam 1 and 2, or beam 1 and 3), for control of the qubit and motional states of the ions. Raman beam 1 is assigned for individual addressing of ions, so is tightly focused by the imaging lens to a waist of 2 μm and is directed to the ions in a direction perpendicular to the chip. Raman beam 2 (or 3) is assigned for global addressing of the entire ion chain and had two a-
lternative configurations. For the diagnosis of the laser-induced field in out-of-plane direction to the trap chip as described in Sec. III, and for later mitigation of laser-induced field, the global beam (Raman beam 2) was incident from the backside of the trap chip, in counter-propagating configuration with Raman beam 1, with a waist of 15 μm. On the other hand, for the measurement of frequency shift described in Sec. IV, the global beam (Raman beam 3) was incident on the ion in a direction per-
pendicular both to the trap axis and to Raman beam 1 (xˆ). The waist was 41 μm along the trap axis direction and 26 μm along the out-of-plane direction. The alternative 935-nm probe laser used for measurement in Sec. III was vertically injected from the backside of the chip to penetrate through the loading slot with a diameter of 60 μm. The intensity of the laser beam at the ion position was fixed at around 50 mW/cm2.
Appendix B: Scheme for optimization of quantum control under effects of semiconductor charging
Several treatments have been applied to suppress the effect of the photo-induced stray field. The first was minimization of the excess micromotion, by means of the described compensation voltage measurement. The maximum Rabi frequency of the Raman transition guarantees that the excess micromotion was truly minimized. Second, we employed the pre-turn-on scheme, as described in Sec. IV, in our actual quantum control sequences as well. One of the beams, which causes the largest stray field (usually t-
he global Raman beam), was turned on tens of milliseconds prior to the control of the qubit. This mitigates the rapid drift of the resonance frequency at laser turn-on, by delaying the actual evolution from the initial transient drift. This reduced the change in the frequency of the ion qubit and improved its coherence, although not to a sufficiently high level, probably due to abun

15
dance of thermal charge carriers generated and heated by long irradiation. Third, the direction of the global Raman laser injection was changed from side-injection (perpendicular) to back-injection (counter-propagating), as we discovered it improves the coherence (increase in the peak probability of the Rabi oscillation by around 0.1). Additionally, the alignment was further optimized to minimize the stray field effect in the quantum control as much as possible. The Raman beams passing through the-
 chip slot were kept as far as possible from the both inner sides of the substrate, and exactly perpendicular to the chip surface. The global Raman beam from the backside was aligned with this criterion by imaging the beam when they are at the edges of the chip slot and then positioning the beam at the exact center of the slot, while maintaining the maximum Rabi frequency.
Appendix C: Theoretical background of the photoconductive charging model
The dynamics of the charge density and potentials in semiconductors is completely described by simultaneously solving the continuity and Poisson equations, also known as the semiconductor equations [36]. Obtaining analytical solutions to these equations is a formidable task due to the highly coupled nature of the equations and nonlinearity present in numerous terms.
Three types of approximations are often applied to circumvent this problem [113, 114]. The first is to limit the analysis to doped or extrinsic semiconductors which partially decouples the equations, i.e., the minority and majority carrier equations. The second is to consider the low excitation regime where the system is not very far from thermal equilibrium so that nonlinear terms are negligible. Finally, local charge neutrality or quasi-neutrality is assumed in order to fully linearize and decou-
ple the equations. As will be explained in the following section, local charge neutrality, despite its practicality in limiting cases, is problematic in general situations. Therefore, it will be replaced by the global charge neutrality condition [115], which is the physically correct constraint with respect to total charge conservation. Note that external static fields and lattice heating effects are assumed to be negligible throughout the analysis.
We consider a semiconductor slab of thickness l across whose surfaces (x = 0, l) flow of charge carriers is inhibited. Light is shone on surface x = 0 while surface x = l is electrically grounded. The photoconductive charging model can be classified into two cases depending on 1) the absence of surface charges (the uniform bulk) and 2) the presence of surface charges. It is important to understand 1) because the bulk response of an illuminated semiconductor contains valuable information about the -
natural dynamics of carriers in non-equilibrium. Analytical solutions for the full spatiotemporal structure of the charge density and potential can be obtained by us
ing only the low excitation regime approximation. In real semiconductor surfaces, 2) is usually the dominant source of photovoltage, whose exact treatment is often challenging and hence requires a numerical approach.
Appendix D: Semiconductor equations without local charge neutrality
The semiconductor equations describe the dynamics of three quantities: the electron (n) and hole (p) densities, and the electrostatic potential φ. We use a dimensionless quantity, u = βφ, where β−1 = kT /e is the thermal energy evaluated in volts. It can be interpreted as the potential evaluated in units of β−1 or equivalently, as the energy measured in units of kT . The electron and hole carrier flux, jn and jp, are defined through the relations
jn
Dn
= −∂n
∂x + n∂u
∂x , jp
Dp
= −∂p
∂x − p∂u
∂x (D1)
Here, Dn = μnβ−1, Dp = μpβ−1 are the diffusion coefficients where μn, μp are the carrier mobilities. We adopt definitions for the carrier densities from the references [33, 34],
n = n0 + δn = nieu−uFn , p = p0 + δp = nieuFp −u (D2)
where n0, p0 are the carrier densities in thermal equilibrium, δn, δp the excess carrier densities in nonequilibrium, and ni is the intrinsic carrier concentration. We have used uFn = βφFn , uFp = βφFp where φFn , φFp are the quasi-Fermi potentials of electrons and holes. Unless stated otherwise, the subscript 0 stands for a quantity evaluated in thermal equilibrium (δn = δp = 0), where the equilibrium temperature is assumed as T =300 K. Note that uFn,0 = uFp,0 = uF = βφF where φF is the Fermi pot-
ential of the semiconductor that is determined by the bulk doping concentration which is assumed to be uniform. This implies the following expressions for uFn , uFp , which can in turn be interpreted as their definitions
uFn = uF + δu − ln 1 + δn
n0
uFp = uF + δu + ln 1 + δp
p0
(D3)
The quantity δu = u − u0 = β(φ − φ0) represents the difference between potentials in non-equilibrium and thermal equilibrium. Conversely, u = u0 + δu. We will call u0 (δu) the equilibrium (excess) potential. A graphical representation of the potentials is provided in the energy band diagrams in Fig. 9. Scaling the intrinsic Fermi potential to zero, uFi = βφFi = 0, the sign convention is that the value of a potential is positive when it lies below uFi = 0, and negative when it is above. Provided th-
e definitions listed above, the set of semiconductor equations is obtained as [36, 39]

16
−1
Dn
∂n
∂t = ∂
∂x
jn
Dn
+ Rb − Gb
Dn
→1
Dn
∂n
∂t = ∂2δn
∂x2 − ∂u
∂x
∂δn
∂x − ∂2u
∂x2 δn − n0
∂u0 ∂x
∂δu
∂x + ∂2δu
∂x2 − Rb − Gb
Dn
−1
Dp
∂p
∂t = ∂
∂x
jp
Dp
+ Rb − Gb
Dp
→1
Dp
∂p
∂t = ∂2δp
∂x2 + ∂u
∂x
∂δp
∂x + ∂2u
∂x2 δp − p0
∂u0 ∂x
∂δu
∂x − ∂2δu
∂x2 − Rb − Gb
Dp
(D4)
∂2u
∂x2 = −β e
ε0ε (p − n − pb + nb) →



∂ 2 u0
∂x2 = 2
λ2
Di
[sinh(u0 − uF) + sinh(uF)]
∂2δu
∂x2 = −β e
ε0ε (δp − δn) = − 1
λ2
DX
δp−δn nXb
where Rb and Gb are the net recombination and generation rates of charge carriers occurring within the bulk, 0 < x < l. ε0, ε are the permittivity of free space and the dielectric constant of the semiconductor, and nb = nie−uF , pb = nieuF the carrier densities in thermal equilibrium when u0 = 0. Finally, λDi = (ε0ε/βeni)1/2
is the intrinsic Debye length, and λDX = (ε0ε/βenXb )1/2 the Debye length associated with density nXb . We can use nXb = ni for an intrinsic type or nXb = pb (nb) for extrinsic p-type (n-type) semiconductors.
EF
EC
EV
Ei
Eb
φ0 > 0
Σss
x
x=0
FIG. 9. Band diagram of a semiconductor in thermal equilibrium. Note that the energy level is defined as E = −βφ for the corresponding potentials φ. EC and EV indicate the conduction and valence band edges.
The local charge neutrality assumption identifies the excess electron and hole densities throughout the body of the semiconductor (δn = δp), hence, ∂2δu/∂x2 = 0. Since the total charge density is defined as ρ = δp − δn, this amounts to removing the Poisson equation from the semiconductor equations, and nulling any effects occurring from the total charge distribution. This hinders one from evaluating the exact solution for δu which is the focus of our study. Therefore, the global charge neutrality -
condition, which states that the total charge be conserved within the semiconductor as a whole, is introduced. In order
to express this statement quantitatively, we present the appropriate boundary conditions for the free surfaces of a semiconductor. The boundary conditions at the surfaces are determined by the charge carrier flux across the surfaces
jn
−Dn x=0,l
= ∂δn
∂x − ∂u0
∂x δn − ∂δu
∂x n
x=0,l
= Us,n
Dn
jp
−Dp x=0,l
= ∂δp
∂x + ∂u0
∂x δp + ∂δu
∂x p
x=0,l
= Us,p
Dp
(D5) These equations determine the gradients of δn and δp, or equivalently, the diffusion of excess electrons and holes, at the boundaries. The potential gradients, ∂u0/∂x|x=0,l and ∂δu/∂x|x=0,l are non-zero only in the presence of surface charges or equivalently, surface states. In particular, the excess potential gradient is determined from the general relation
∂δu
∂x x=a
= ∂δu
∂x x=0
−β e
ε0ε
Za
0
dx′ [p(x′, t) − n(x′, t)]
(D6) for 0 ≤ a ≤ l. Then the global charge neutrality condition is stated as ∂δu/∂x|x=l = 0. In the absence of surface charges at x = 0, we have ∂δu/∂x|x=0 = ∂δu/∂x|x=l = 0. Also, Us,n = Rs,n − Gs,n, Us,n = Rs,n−Gs,n are the net recombination and generation rates of charge carriers occurring at the surface due to certain surface states, if there exist any. We discuss the meaning of these terms thoroughly in section F. Throughout the report, surface charges are assumed to exist only at x = 0.
Appendix E: The uniform bulk
Assuming no surface effects, the following conditions hold.
u0 = ∂u0
∂x → n0 = nb, p0 = pb
∂u0
∂x x=0
= 0, Us,n = Us,p = 0
(E1)

17
We define the bulk recombination rate suitable for the low excitation regime, Rb = Beff (np − n2
i ) = Beff (nbδp +
pbδn + δnδp), where Beff = (niτeff )−1 is the recombination coefficient for the semiconductor in its intrinsic state. τeff is interpreted as the effective intrinsic lifetime of charge carriers (in the sense that it is the net effect of the band-to-band, Auger, and Shockley-Read-Hall type recombination processes) and can be treated as a constant for low excitations. Though not completely accurate, this is a good approximation for cases where surface effects are absent, and it can provide sufficient-
 information about how bulk properties of the semiconductor are modified under different effective recombination rates without having to resort to numerical evaluation. The bulk (photo)generation process is assumed to be of Beer-Lambert type, Gb = N0αbexp(−αbx), with the incident photon flux N0 and wavelength-dependent bulk absorption coefficient αb. In the low excitation regime, the homogeneous semiconductor equations (Gb = 0) for the uniform bulk are reduced to
1
Dn
∂δn
∂t = ∂2δn
∂x2 − ∂δu
∂x
∂δn
∂x − ∂2δu
∂x2 δn − nb
∂2δu
∂x2 − Rb
Dn ≈ ∂2δn
∂x2 − nb
∂2δu
∂x2 − Rb
Dn
= ∂2δn
∂x2 − δn
Sn2
+ δp
Kn2
1
Dp
∂δp
∂t = ∂2δp
∂x2 + ∂δu
∂x
∂δp
∂x + ∂2δu
∂x2 δp + pb
∂2δu
∂x2 − Rb
Dp
≈ ∂2δp
∂x2 + pb
∂2δu
∂x2 − Rb
Dp
= ∂2δp
∂x2 − δp
Sp2
+ δn
Kp2
(E2) with the new length parameters introduced in the final equations defined in Table IV.
TABLE IV. Definition of the length parameters in the low excitation regime for different types of semiconductors.
Parameter General Intrinsic p-type n-type
1 Sn2
1 λ2
Dn
+1
l′n2
1 λ2
Dn
+1
l2n
1 l′n2
1 λ2
Dn 1 Kn2
1 λ2
Dn
−1
χn l2n
1 λ2
Dn
−1
l2n
01
λ2
Dn
−1
χn l2n
1 Sp2
1 λ2
Dp
+1
l′p2
1 λ2
Dp
+1
l2p
1 λ2
Dp
1 l′p2
1 Kp2
1 λ2
Dp
−1
χp l2p
1 λ2
Dp
−1
l2p
1 λ2
Dp
−1
χp l2p
0
The semiconductor type is determined according to the following relation: intrinsic – O(δn, δp) ≪ nb = pb = ni, p (n)-type – nb (pb) ≪ O(δn, δp) ≪ pb (nb) where the big-O notation denotes the order of magnitude of the excess carrier densities. The definition for the intrinsic diffusion lengths is ln = (Dnτeff )1/2, lp = (Dpτeff )1/2. The
extrinsic diffusion lengths l′n, l′p are defined as
l′
n = (Dn(χnτeff ))1/2, l′
p = (Dp(χpτeff ))1/2 (E3)
where χn = ni/nb, χp = ni/pb may be interpreted as weight factors that modify the intrinsic diffusion lengths to their extrinsic values in doped cases. Note that the Poisson equation has not been removed, but rather absorbed into the continuity equations. Therefore, the equations fully account for charge distribution effects. The solutions of Eq. (E2) can be solved using separation of variables with respect to space and time. Using the ansatz, δn(x, t) = δnxδnt, δp(x, t) = δpxδpt, we get
1
Dn
1 δnt
∂δnt
∂t = 1
δnx
∂2δnx
∂x2 − 1
Sn2
+1
Kn2
δpx δnx
δpt δnt
1
Dp
1 δpt
∂δpt
∂t = 1
δpx
∂2δpx
∂x2 − 1
Sp2
+1
Kp2
δnx δpx
δnt δpt
(E4)
Now, we substitute nt = pt = exp(−γt) into the above equation. Then, δpt/δnt = δnt/δpt = 1. Defining En, Ep as the constants associated to the separated variables, we obtain a set of equations
∂δnt
∂t = −DnEnδnt
∂δpt
∂t = −DpEpδpt
∂2δnx
∂x2 − 1
Sn2
− En δnx = − δpx
Kn2
∂2δpx
∂x2 − 1
Sp2
− Ep δpx = − δnx
Kp2
En = γ
Dn
, Ep = γ
Dp
(E5)
Let us consider two limiting cases where we can develop intuition about the general solutions that are to be derived shortly.
1. Temporally stationary case
The stationary spatial density of charge carriers may be obtained under the condition, ∂δnt/∂t = ∂δpt/∂t = 0 ⇔ γ = 0. Recovering Gb = N0αbexp(−αbx) in the right-hand side of the equations, we obtain
∂2δnx
∂x2 − δnx
Sn2
= − δpx
Kn2
+ Gb
Dn
∂2δpx
∂x2 − δpx
Sp2
= − δnx
Kp2
+ Gb
Dp
(E6)
The homogeneous solutions are found with the ansatz, δnx,h = δnx(0)exp(−x/r), δpx,h = δpx(0)exp(−x/r), while the particular solutions can be calculated with the ansatz, δnx,p = Cnexp(−αbx), δpx,p = Cpexp(−αbx).

18
The boundary conditions used to determine the coefficients in the homogeneous solution are
∂δn
∂x x=0
= ∂δp
∂x x=0
= ∂δn
∂x x=l
= ∂δp
∂x x=l
= 0. (E7)
where global charge neutrality ∂δu/∂x|x=0 = ∂δu/∂x|x=l = 0 is implicit in the above expression. Through some algebra, the total solution is obtained as
"
δnx δpx
#
=
"
δnx δpx
#
h
+
"
δnx δpx
#
p
=
"
v1 u1
v2 u2
#


A+cosh x
r+ + B+sinh x
r+
A−cosh x
r− + B−sinh x
r−

+
"
Cnexp(−αbx) Cpexp(−αbx)
#
(E8)
A+ = N0
W (u1Cp − u2Cn) r+αb
sinh l
r+
cosh l
r+
− e−αbl , B+ = − N0
W (u1Cp − u2Cn)r+αb
A− = − N0
W (v1Cp − v2Cn) r−αb
sinh l
r−
cosh l
r−
− e−αbl , B− = N0
W (v1Cp − v2Cn)r−αb
Cn = Y
DnDp
1 Kn2
Dn + 1
Sp2
− α2
b Dp , Cp = Y
DnDp
1 Sn2
− α2
b Dn + 1
Kp2
Dp
W = v1u2 − v2u1, Y = N0αb
1 Sn2
− α2
b
1 Sp2
− α2
b− 1
Kn2 Kp2
−1
where r± = 1/pξ± are the spatial mode eigenvalues with
ξ± = 1
2


1 Sn2
+1
Sp2
±
s
1 Sn2
−1
Sp2
2
+4
Kn2Kp2


(E9) and v+ = [v1 v2]T , u− = [u1 u2]T are the corresponding eigenvectors. These spatial modes are inherent bulk properties of the semiconductor with distinct physical significance. Borrowing terminologies from the reference [115], where such spatial densities have been studied in the context of the Dember effect [23], r+ corresponds to the Debye-screening mode and r− the diffusionrecombination mode. Note that the total charge density δpx − δnx is non-zero, which cannot be derived from local charg-
e neutrality. This implies that even in the absence of externally applied fields, illumination of light can charge a semiconductor. In general, this bulk charging increases with larger absorption coefficients αb and varies as a function of the material properties such as the intrinsic carrier concentration, carrier mobility, and doping concentration.
2. Spatially flat case
The temporal evolution of a spatially flat density can be solved under the condition, ∂2δnx/∂x2 = ∂2δpx/∂x2 = 0. We consider the case where Gb = 0 with initially finite carrier densities, δnt, δpt. The solutions can be solved for in a similar fashion as the temporally
stationary case, which are obtained as
"
δnt δpt
#
=
"
η1 σ1
η2 σ2
#"
T+e−γ+t
T−e−γ−t
#
(E10)
where γ± are the temporal mode eigenvalues,
γ± = 1
2


Dn Sn2
+ Dp
Sp2
±
s
Dn Sn2
− Dp
Sp2
2
+ 4DnDp
Kn2Kp2


(E11) and η+ = [η1 η2]T , σ− = [σ1 σ2]T are the corresponding eigenvectors. The total charge density can then be expressed as
δpt − δnt = (η2 − η1)T+e−γ+t + (σ2 − σ1)T−e−γ−t
(E12) Again, such an expression cannot be derived under the local charge neutrality condition. As in the temporally stationary case, the time constants associated with the eigenvalues τ± = 1/γ± have distinct physical meanings, τ+ being the dielectric relaxation time, and τ− the carrier lifetime [116]. This is because the total charge density δpt − δnt relaxes to zero in a characteristic time τ+, whereas the individual charge carrier densities δnt, δpt diminish through diffusion and recombination o-
ver the characteristic time τ−. It can be interpreted that local charge neutrality (δnt = δpt) is achieved in time τ+, and that the system returns to thermal equilibrium (δnt = δpt = 0) in time τ−. Given the relation Eq. (D6), the electric field reaches a constant value after τ+. In the absence of surface charges, the field is exactly zero,

19
which means that the system completely neutralizes in the dielectric relaxation time. This is not true in the presence of surface charges. Non-uniform carrier trapping sites in the bulk can also complicate the dynamics. The additional charge equilibration processes introduced by material inhomogeneities or discontinuities of the material can modify the neutralization time from that of a uniform bulk.
Fig. 10 shows a plot of τ+ and τ− defined in Eq. (E11) for a hypothetical material as a function of the intrinsic carrier concentration ni, with the effective carrier lifetime and carrier mobility values set to τeff = 1 s and μn (μp) = 1000 (300) cm2· V−1· s−1, respectively. The left and right regions of the plot correspond to the insulator (small ni) and conductor (large ni), while the middle region is indicative of the semiconductor (intermediate ni). The maximum value of τ+ is set by τeff , ind-
icated as the horizontal dashed line. Values of μn and μp determine the location of the crossing point (or degenerate point) between τ+ and τ−, shifting the location of the vertical line.
FIG. 10. Plot of τ+ and τ− for varying ni. The horizontal dashed line is set by τeff = 1 s, while the vertical dashed line indicates the near-degenerate point of τ+ and τ−.
Note that the dielectric relaxation of an unpaired charge density ρu in conductors and insulators is described by the equation
∂ρu
∂t + ρu
ε0ε/σ = ∂φ
∂x
∂σ
∂x − σ
ε
∂ε
∂x (E13)
which is basically the continuity equation for inhomogeneous ohmic materials [117]. When the dielectric constant ε and conductivity σ is homogeneous throughout the material, the right-hand side of the equation vanishes and the dielectric relaxation time is obtained as τ+ = ε0ε/σ. In these systems, there are no dynamics of mobile carriers, in the sense that an initial density relaxes to the boundary without generating a net charge density beyond the initially occupied volume. [117].
3. General spatiotemporal solutions
Solving the coupled homogeneous equations Eq. (E5) for both space and time, it can be shown that the spatial and temporal modes, 1) the Debye-screening mode (r+) and the dielectric relaxation time (τ+), and 2) the diffusion-recombination mode (r−) and the carrier lifetime (τ−), are directly coupled. This presents a consistent framework for the bulk response of a semiconductor in non-equilibrium. The general solutions are obtained as
"
δn(x, t) δp(x, t)
#
=
X
m+,m−
"
v1,m+ u1,m−
v2,m+ u2,m−
#"
e−γ+t Am+ cosh m+π
l + Bm+ sinh m+π
l
e−γ−t Am− cosh m−π
l + Bm− sinh m−π
l
#
(E14)
γ± =

    
    
γ+ = 1
2
(
h Dn Sn2
+ Dp
Sp2
+ m+π
l
2 (Dn + Dp)
i
+
r
h Dn Sn2
− Dp
Sp2
+ m+π
l
2 (Dn − Dp)
i2
+ 4DnDp
Kn2 Kp2
)
γ− = 1
2
(
h Dn Sn2
+ Dp
Sp2
+ m−π
l
2 (Dn + Dp)
i
−
r
h Dn Sn2
− Dp
Sp2
+ m−π
l
2 (Dn − Dp)
i2
+ 4DnDp
Kn2 Kp2
)

20
where m± ∈ Z. This expression is a generalization of the limiting case solutions presented in the previous sections. The spatial modes are split into the Debyescreening (m+) and diffusion-recombination (m−) modes to which are associated the characteristic time constants τ+ = 1/γm+ (generalized dielectric relaxation time) and τ− = 1/γm− (generalized carrier lifetime), respectively. In order to describe the most general charge carrier dynamics, including a generation process Gb, we can use the Fouri-
er series analysis using the homogeneous solutions [δn(x, t) δp(x, t))]T and determine the coefficients, A±, B±.
Appendix F: The presence of surface charges
Analytical solutions are not obtainable in the presence of surface charges because space charge quantities in thermal equilibrium are not constant, i.e., u0, ∂u0/∂x ̸= 0, hence rendering the semiconductor equations nonlinear even in the low excitation regime. Therefore, the semiconductor equations Eq. (D4) must be solved numerically. Surface charges typically originate from surface states, and can largely be classified into two categories [33, 34]. The first is fixed surface charge, which is long--
term fixed charge that remains stationary during the dynamics of excess charge carriers in non-equilibrium, commonly associated with the slow surface state. The second is charge that originates from the interface state (or fast surface state) which is basically a Shockley-Read-Hall type defect state within the bandgap of the semiconductor localized at the surface that can be exchanged with the bulk. We denote the charge densities associated with the fixed surface charge and interface state as Σss -
and Σfs, respectively. Since nonzero surface charge density gives rise to a potential gradient at the surface, boundary condition values (see equation Eq. (D5)) that were nulled in the uniform bulk problem must be recovered. The potential gradient can be decomposed into the equilibrium and excess potential gradients, and then into the contributions from the fixed surface charge and interface state as
∂u
∂x x=0
= ∂u0
∂x x=0
+ ∂δu
∂x x=0
∂u0
∂x x=0
= ∂uss
∂x x=0
+ ∂ufs,0
∂x x=0
∂δu
∂x x=0
= ∂δufs
∂x x=0
(F1)
where we used uss = uss,0, and δufs = ufs − ufs,0. A fixed surface charge of ±eΣss results in the equilibrium potential gradient
∂uss
∂x x=0
= ∓β e
εε0
Σss (F2)
On the other hand, the interface state is characterized by numerous parameters. Let us consider two types of
discrete interface states: an acceptor-type and a donortype. The acceptor-type is negative (neutral) when occupied by an electron (a hole), whereas the donor-type is neutral (positive) when occupied by an electron (a hole). The potential gradient is given as
∂ufs
∂x x=0
= ±β e
εε0
Σfs ×
(
fs acceptor-type
1 − fs donor-type (F3)
where ffs is the electron occupation probability of the interface state. We focus on two processes that may occur through these states, 1) surface recombination and 2) surface absorption (also known as photoionization), in the presence of which the general rate equation associated with fs is given as [43, 49, 50]
∂fs
∂t = Us,n − Us,p, Us,n = Rs,n − Gs,n, Us,p = Rs,p − Gs,p
Rs,n = sn0n(1 − fs), Gs,n = (sn0n1 + no)fs
Rs,p = sp0pfs, Gs,p = (sp0p1 + po)(1 − fs)
(F4) Recall Us,n, Us,p from section D. The trap parameters sn0 = σcnΣfsvn, sp0 = σcpΣfsvp are the electron and hole surface recombination velocities with dimensions [sn0] = [sp0] = cm·s−1. σcn, σcp and vn, vp are the capture cross sections and thermal velocities of electrons and holes whose dimensions are [σcn] = [σcp] = cm2 and [vn] = [vp] = cm·s−1, respectively. The concentrations n1 = niexp(−ufs), p1 = niexp(ufs) are determined by the energy level of the defect ufs = βφfs within the bandgap. In-
troducing the dimensionless surface absorption coefficients αon = σnoΣfs, αop = σpoΣfs where σno, σpo are the optical cross sections for electrons and holes, we define the corresponding surface flux quantities, no = αonN0, po =
αopN0 where N0 is the incident photon flux used previously in the bulk generation process Gb. The theory of optical cross sections is presented in the next section. The terms Rs,n, Rs,p describe surface recombination, or capturing of free charge carriers from the bulk into the interface states, whereas Gs,n, Gs,p denote the release of captured charge carriers into the bulk. In particular, the first and second terms in Gs,n, Gs,p indicate thermal emission and optical generation rates, respectively,-
 where the latter corresponds to surface absorption or photoionization [43]. Here, we limit our analysis to steady state solutions, ∂δn/∂t = ∂δp/∂t = ∂fs/t = 0, which results in a steady state value for the electron occupation probability f ̄s and net charge carrier flow rate Us,n = Us,p = Us as
f ̄s =
(n
sp0 + p∗
1
sn0 ) 1
sp0 (n + n1∗) + 1
sn0 (p + p1∗) x=0
Us = (np − n1∗p1∗)
1
sp0 (n + n1∗) + 1
sn0 (p + p1∗) x=0
(F5)
where n1∗ = n1+no/sn0, p1∗ = p1+po/sp0. In the presence of the interface states, then, the boundary value of the

21
excess potential gradient is modified as
∂δu
∂x x=0
=β e
εε0
Σfsδfs (F6)
with δfs = f ̄s − f ̄s0. Fixed surface charges do not contribute to this quantity since they are stationary and thus cancel out. Global charge neutrality ∂δu/∂x|x=l = 0 must apply in order to balance charge transfer between the surface and bulk. This is naturally embedded in the relation
∂δu
∂x x=a
=β e
ε0ε Σfsδfs −
Za
0
dx′ [p(x′, t) − n(x′, t)]
(F7) which is just equation Eq. (D6) expressed in terms of equation Eq. (F6). Equipped with the extended boundary conditions for ∂u0/∂x|x=0 and ∂δu/∂x|x=0, the steady state solutions of the semiconductor equations can be readily obtained using numerical methods.
Appendix G: Surface absorption and the optical cross section
Here, we briefly summarize the theoretical results presented in Ref. [56, 57]. The ground state wave function of the Hulth ́en potential Eq. (3) is
⟨x|i⟩ = ψ(x) = 4 − λ2
4πλ2a
1/2
e−x/a ex/2a − e−x/2a
x (G1)
The photoionization cross section, in terms of the photon energy ħω, is obtained as
σ(ħω) =
"
Eeff
E0
2 n(ħω) ε
#
16πα 3
ħω
Eio
ħω
Eio
−1
3/2
a2
× c5/2a5 4 − λ2
λ2
("
1− λ
2
2
+ ca2 ħω
Eio
−1
#−2
−
"
1+ λ
2
2
+ ca2 ħω
Eio
−1
#−2)2
(G2)
where Eeff /E0 is the effective field ratio, n(ħω) the frequency-dependent refractive index, ε the dielectric constant of the material, α the fine structure constant, and Eio is the ionization energy between the defect level and the conduction band edge. We assume Eeff /E0 ∼ 2 [52], and replace n(ħω) with an approximate average value of 4 for the experimental wavelengths [118, 119]. The parameter c is defined as c = 2m∗Eio/ħ2 where m∗ is the effective mass of the optically excited particle, which -
in our case, is the electron, m0. In our calculations, we use m∗ = 0.26m0 [60].
Appendix H: The simulation geometry and estimation of the SPV
In order to estimate the magnitude and sign of the stray field generated at the position of the trapped ion due to the SPV, an electrostatic analysis was performed using the COMSOL software by imposing voltages on the inclined surfaces of the exposed silicon substrate of the ion trap (see Fig. 11 (b)). The geometry for COMSOL simulations was extracted from the Scanning-electronmicroscope (SEM) image shown in Fig. 11 (a). A voltage of +1 V at the silicon surface generated an electric field of +1055-
 V·m −1 at the position of the ion. On the other hand, +1 V applied to the inner dc electrode pairs produced an electric field of +2880 V·m −1 at the ion position. The experimental values of the SPV could be estimated systematically by multiplying this ratio, 2880/1055≈2.73, to the absolute value of the compensation voltages.
(a) (b)
l
-100 0 100 μm
0
80
40
-40
-80
μm
FIG. 11. SEM image and COMSOL geometry for numerical simulations. (a) An SEM image of the cross section of the ion trap near the trapping region. (b) COMSOL simulation geometry corresponding to (a) with equi-potential lines plotted when a voltage of +1 V is formed on the inclined surface of the silicon substrate (in red). Yellow arrows represent incident light and l the semiconductor slab thickness.
Appendix I: Alternative mechanism for the observed ion displacement and limitations of the model
Here we discuss an 1) alternative mechanism for the ion displacement and 2) the limitations of our photoconductive charging model.
1. Alternative mechanism
We consider an additional SPV mechanism that can produce a positive stray field at the position of the ion. Positive photovoltage can be induced by a purely bulk response of the semiconductor (see section E). In particular, when the carrier mobilities satisfy μn > μp, which is true for silicon, the underlying charge density resembles that of a dipole with the positive side facing the surface of illumination (the Dember effect). The magnitude of the

22
photovoltage, however, is small and decreases with increasing doping concentration due to enhanced screening (reduction in the Debye-screening length). In addition, the dielectric relaxation time, which is the characteristic time at which the semiconductor bulk neutralizes when light is turned off, is much shorter than the observed time scale at which the ion returns to its equilibrium position (1 to 100 μs). For p-type silicon doped with a concentration of 1015 cm−3, the magnitude and relaxation -
time of the photovoltage are on the order of 10 mV and 10 ps, respectively. Moreover, numerical simulations show that any mechanism dominated by bulk absorption predicts larger magnitudes of SPV at shorter wavelengths in accordance with the bulk absorption spectrum of silicon, failing to explain the spectral response of the observed SPV. Only in the presence of the proposed interface states can the magnitude, sign, and wavelength dependence of the SPV be comprehended consistently. Although this ef-
fect is small in our system, the photovoltage may still be problematic in others depending on doping concentration and the proximity of the trapped ion to the charged volume.
2. Limitations of the photoconductive charging model
The following list states some limitations of our photoconductive charging model. 1. Interface states have been assumed to occupy a single discrete energy level, while in more realistic systems, they would more likely form a distribution within the bandgap, in which case the observations would be more of a collective response. Although the former assumption allows for an effective explanation and a more tractable computation, future work may be devoted to studying more generalized surface conditio-
ns involving a distribution of interface states. 2. The theory of photoionization from bulk defects has been applied to surface defects. Although a complete theory for the optical excitation of surface defects is lacking [23], the optical cross section of a delta-function defect as a function of the distance from a surface has been studied in Ref. [120], showing a tendency in the optical cross section spectrum to broaden, while its peak value is shifted to larger photon energies, as the defect bec-
omes closer to the surface. The fitted values of a and λ in the
Hulth ́en potential may be slightly modified if such effects are included in the model. Since the overall spectral dependence of the SPV observed in our experiments are explained well by that derived for bulk defects, we suspect the optically responsive interface states to have originated from RIE-induced defects that penetrated deep enough into the substrate to have spectral properties resembling that of the bulk defect, but sufficiently localized at the surface (i.e., within a few atomic layers -
to several nm’s, which is much smaller than the Debye-screening length and the absorption depth of any incident light) so that their effects are manifest as boundary conditions in the context of the semiconductor equations. 3. We have assumed a slab model, but this may not be able to fully describe the real exposed surface of the silicon substrate which is a more complicated threedimensional structure. One justification for using the slab model was based on the numerical simulation results that we-
re insensitive to a variation of the slab thickness l as long as it was much larger than the initial surface depletion layer (∼1 μm). However, even in this case, edge effects or diffusion and drift in spatial dimensions other than in the direction of incidence of light were neglected. 4. External field effects have been neglected from the model. This was justified by the experimental fact that the sign and magnitude of the SPV were independent of the changes in voltages applied to the dc electrode-
s in the vicinity of the exposed semiconductor surface.
Appendix J: Simulation of the quantum dynamics
Here, the theory used for simulations of the Rabi oscillation and Bloch sphere trajectory is presented.
1. Lindblad master equation
The trapped ion is a composite system, involving the qubit and oscillator degrees of freedom. Its density matrix can be expressed as ρ(t) = P
m,nρ(m,n)(t) ⊗ |m⟩ ⟨n|
where ρ(m,n)(t) is the qubit state corresponding to the subspace formed by the oscillator eigenstates |m⟩ and |n⟩. When the oscillator is coupled to a phonon bath via an amplitude damping channel described by the Lindblad operator, L = Γa, the Lindblad master equation can be formulated as [121]
dρ(m,n) = − i
ħ
X
r
Hsysm,rρ(r,n) −
X
l
ρ(m,l)Hsysl,n
!
−Γ
2 ((2 ̄nT + 1)(m + n) + 2 ̄nT) ρ(m,n) + Γ( ̄nT + 1)p(m + 1)(n + 1)ρ(m+1,n+1) + Γ√mnρ(m−1,n−1)
(J1)
where Hsys is the system Hamiltonian, Γ is the heating rate, and  ̄nT is the mean phonon number of the phonon

23
bath evaluated in terms of the oscillator states. We set the initial condition as ρ(0) = |0⟩ ⟨0| ⊗ P
nPn( ̄n0) |n⟩ ⟨n| where the qubit state is initialized to |0⟩ and the oscillator state has a thermal distribution Pn( ̄n0) =  ̄n0n/ (1 +  ̄n0)n+1 about the mean phonon number n ̄0. We propagate the state through time using the update rule, ρ(m,n)(t + dt) = ρ(m,n)(t) + dρ(m,n)(t), and obtain the reduced density matrix describing the qubit state by taking the partial trace over the oscillator states, ρqubit(t) = P
nρ(n,n)(t).
2. Position operator of the time-dependent oscillator
The theory of forced time-dependent oscillators presented in Refs.[68, 69] is applied to the linear Paul trap. The Hamiltonian for the oscillator degree of freedom of the trapped ion is given as
H(t) = H0(t) + V (t)
H0(t) = p2
2M + 1
2 M W 2(t)x2
V (t) = −F (t)x
(J2)
where H0(t) describes the dynamically trapped ion, and F (t) is an externally driven force. M is the mass of the ion. In the subsequent derivations, the Planck constant is set to ħ = 1, but recovered in the final expressions. In this system, the position operator in the Heisenberg picture is obtained as
x(t) =
s
g−(t) 2ωI
eiω(t)a† + e−iω(t)a + 2Re(α(t)) (J3)
where a†(a) are the raising(lowering) operators of a reference oscillator defined at t = 0, and ωI is an invariant of motion, defined as
ωI =
q
g+(t)g−(t) − g02(t). (J4)
The parameters g±(t), g0(t) are determined from the coupled first-order differential equations
g ̇− = − 2
M g0
g ̇0 = −M W 2(t)g− − g+
M g ̇+ = 2M W 2(t)g0.
(J5)
The time-dependent frequency ω(t) is obtained as
ω(t) =
Zt
0
dt′ ωI
M g−(t′) (J6)
while the displacement α(t) is derived as
α(t) = e−iω(t)α(0) + i
Zt
0
dt′e−i(ω(t)−ω(t′))
s
g−(t′) 2ωI
F (t′).
(J7) With the definition of W 2(t) for the linear Paul trap
W 2(t) = ω2
rf
4 (ax + 2qxcos(ωrf t)) (J8)
where ax, qx are Mathieu equation parameters [67], we obtain the solutions for g±(t), g0(t) in terms of a single function f as
g−(t) = |f |2
M , g0(t) = − |f ̇|2
2 , g+(t) = M f ̇
2
. (J9)
The function f1 = f and its conjugate f2 = f ∗ are solutions to the Mathieu equation
f ̈i + ω2
rf
4 (ax + 2qxcos(ωrf t)) fi = 0 (J10)
subject to the initial conditions f (0) = 1 and f ̇(0) = iωx [122]. It follows that ωI = ωx, which is interpreted as the secular frequency of the trapped ion. The lowest order solution (|ax|, qx2 ≪ 1) is found to be
f ≈ eiωxt 1 + qx
2 cos(ωrf t)
1 + qx
2
(J11)
which can be substituted into Eq. (J9) to obtain
g−(t) = 1
M
1 + qx
2 cos(ωrf t)
1 + qx
2
2
. (J12)
Recovering ħ, we obtain
x(t) = 1 + qx
2 cos(ωrf t)
1 + qx
2
x0 eiω(t)a† + e−iω(t)a
+ 1 + qx
2 cos(ωrf t)
1 + qx
2
2x0Re(α(t))
(J13) with
ω(t) = ωx
Zt
0
dt′ 1 + qx
2 cos(ωrf t)
1 + qx
2
2
(J14)
and
α(t) = e−iω(t)α(0)
+i
ħ
Zt
0
dt′e−i(ω(t)−ω(t′)) 1 + qx
2 cos(ωrf t)
1 + qx
2
x0F (t′).
(J15)
Finally, we neglect the squeezing factor linked to intrinsic micromotion by making the approximation
1 + qx
2 cos(ωrf t)
1 + qx
2
≈ 1 (J16)
in Eqs. (J13) and (J14). This cannot be applied to the factor in the integral in Eq. (J15) since it would amount to removing the effects of excess micromotion as well.

24
[1] D. Stick, W. K. Hensinger, S. Olmschenk, M. J. Madsen, K. Schwab, and C. Monroe, Ion trap in a semiconductor chip, Nat. Phys. 2, 36 (2006). [2] A. Bermudez, X. Xu, R. Nigmatullin, J. O’Gorman, V. Negnevitsky, P. Schindler, T. Monz, U. G. Poschinger, C. Hempel, J. Home, et al., Assessing the Progress of Trapped-Ion Processors Towards FaultTolerant Quantum Computation, Phys. Rev. X 7, 041061 (2017). [3] S. Jain, J. Alonso, M. Grau, and J. P. Home, Scalable Arrays of Micro-Penning Traps for Quant-
um Computing and Simulation, Phys. Rev. X 10, 031027 (2020). [4] Z. D. Romaszko, S. Hong, M. Siegele, R. K. Puddy, F. R. Lebrun-Gallagher, S. Weidt, and W. K. Hensinger, Engineering of microfabricated ion traps and integration of advanced on-chip features, Nat. Rev. Phys. 2, 285 (2020). [5] M. Akhtar, F. Bonus, F. R. Lebrun-Gallagher, N. I. Johnson, M. Siegele-Brown, S. Hong, S. J. Hile, S. A. Kulmiya, S. Weidt, and W. K. Hensinger, A highfidelity quantum matter-link between ion-trap microchip mod-
ules, Nat. Commun. 14, 531 (2023). [6] J. M. Pino, J. M. Dreiling, C. Figgatt, J. P. Gaebler, S. A. Moses, M. S. Allman, C. H. Baldwin, M. FossFeig, D. Hayes, K. Mayer, et al., Demonstration of the trapped-ion quantum CCD computer architecture, Nature 592, 209 (2021). [7] R. J. Niffenegger, J. Stuart, C. Sorace-Agaskar, D. Kharas, S. Bramhavar, C. D. Bruzewicz, W. Loh, R. T. Maxson, R. McConnell, D. Reens, et al., Integrated multi-wavelength control of an ion qubit, Nature 586, 538 (2020). [8] K. -
K. Mehta, C. Zhang, M. Malinowski, T.-L. Nguyen, M. Stadler, and J. P. Home, Integrated optical multi-ion quantum logic, Nature 586, 533 (2020). [9] M. Ivory, W. J. Setzer, N. Karl, H. McGuinness, C. DeRose, M. Blain, D. Stick, M. Gehl, and L. P. Parazzoli, Integrated Optical Addressing of a Trapped Ytterbium Ion, Phys. Rev. X 11, 041033 (2021). [10] Q. A. Turchette, Kielpinski, B. E. King, D. Leibfried, D. M. Meekhof, C. J. Myatt, M. A. Rowe, C. A. Sackett, C. S. Wood, W. M. Itano, et al., Heatin-
g of trapped ions from the quantum ground state, Phys. Rev. A 61, 063418 (2000). [11] Q. A. Turchette, C. J. Myatt, B. E. King, C. A. Sackett, D. Kielpinski, W. M. Itano, C. Monroe, and D. J. Wineland, Decoherence and decay of motional quantum states of a trapped atom coupled to engineered reservoirs, Phys. Rev. A 62, 053807 (2000). [12] J. Schriefl, Y. Makhlin, A. Shnirman, and G. Schn, Decoherence from ensembles of two-level fluctuators, New J. Phys. 8, 1 (2006). [13] A. Safavi-Naini, P. Rabl, P-
. F. Weck, and H. R. Sadeghpour, Microscopic model of electric-field-noise heating in ion traps, Phys. Rev. A 84, 023412 (2011). [14] M. Kumph, C. Henkel, P. Rabl, M. Brownnutt, and R. Blatt, Electric-field noise above a thin dielectric layer on metal electrodes, New J. Phys. 18, 023020 (2016). [15] I. A. Boldin, A. Kraft, and C. Wunderlich, Measuring Anomalous Heating in a Planar Ion Trap with Variable Ion-Surface Separation, Phys. Rev. Lett. 120, 023201
(2018). [16] W. Lee, D. Chung, J. Kang, H. Jeon, C. Jung, D.-I. D. Cho, and T. Kim, Micromotion compensation of trapped ions by qubit transition and direct scanning of dc voltages, Opt. Express 31, 33787 (2023). [17] M. Harlander, M. Brownnutt, W. Ha ̈nsel, and R. Blatt, Trapped-ion probing of light-induced charging effects on dielectrics, New J. Phys. 12, 093035 (2010). [18] S. X. Wang, G. Hao Low, N. S. Lachenmyer, Y. Ge, P. F. Herskind, and I. L. Chuang, Laser-induced charging of microfabricate-
d ion traps, J. Appl. Phys. 110, 104901 (2011). [19] A. Ha ̈rter, A. Krkow, A. Brunner, and J. Hecker Denschlag, Long-term drifts of stray electric fields in a Paul trap, Appl. Phys. B 114, 275 (2014). [20] S. C. Doret, J. M. Amini, K. Wright, C. Volin, T. Killian, A. Ozakin, D. Denison, H. Hayden, C. Pai, and R. E. Slusher, Controlling trapping potentials and stray electric fields in a microfabricated ion trap through design and compensation, New J. Phys. 14, 073012 (2012). [21] S. Hong, Y. Kwon,-
 C. Jung, M. Lee, T. Kim, and D.-i. D. Cho, A new microfabrication method for iontrap chips that reduces exposure of dielectric surfaces to trapped ions, J. Microelectromechanical Syst. 27, 28 (2017). [22] C. Jung, J. Jeong, S. Yoo, T. Kim, and D. D. Cho, Method for Estimating Locations of Laser-Induced Stray Charges on Surface-Electrode Ion Traps Using Secular Frequency Shift at Multiple Ion Positions, Phys. Rev. Appl. 20, 014032 (2023).
[23] L. Kronik, Surface photovoltage phenomena: theory, experiment, and applications, Surf. Sci. Rep. 37, 1 (1999). [24] K. R. Brown, J. Chiaverini, J. M. Sage, and H. Hffner, Materials challenges for trapped-ion quantum computers, Nat. Rev. Mater. 6, 892 (2021). [25] D. Stick, K. Fortier, R. Haltli, C. Highstrete, D. Moehring, C. Tigges, and M. Blain, Demonstration of a microfabricated surface electrode ion trap, arXiv preprint arXiv:1008.0990 (2010). [26] C. Jung, W. Lee, J. Jeong, M. Lee, Y. Pa-
rk, T. Kim, and D.-I. ”Dan” Cho, A microfabricated ion trap chip with a sloped loading slot to minimize exposing trapped ions to stray charges, Quantum Sci. Technol. 6, 044004 (2021). [27] M. G. Blain, R. Haltli, P. Maunz, C. D. Nordquist, M. Revelle, and D. Stick, Hybrid MEMS-CMOS ion traps for NISQ computing, Quantum Sci. Technol. 6, 034011 (2021). [28] M. Niedermayr, Cryogenic surface ion traps, Ph.D. thesis, Universita ̈t Innsbruck (2015).
[29] K. Lakhmanskiy, On heating rates in cryogenic surface ion traps, Ph.D. thesis, Universita ̈t Innsbruck (2019). [30] K. K. Mehta, A. M. Eltony, C. D. Bruzewicz, I. L. Chuang, R. J. Ram, J. M. Sage, and J. Chiaverini, Ion traps fabricated in a CMOS foundry, Appl. Phys. Lett. 105, 044103 (2014). [31] M. Niedermayr, K. Lakhmanskiy, M. Kumph, S. Partel, J. Edlinger, M. Brownnutt, and R. Blatt, Cryogenic surface ion trap based on intrinsic silicon, New J. Phys. 16, 113068 (2014).

25
[32] D. K. Schroder, Surface voltage and surface photovoltage: history, theory and applications, Meas. Sci. Technol. 12, R16 (2001). [33] C. G. B. Garrett and W. H. Brattain, Physical Theory of Semiconductor Surfaces, Phys. Rev. 99, 376 (1955). [34] E. O. Johnson, Large-Signal Surface Photovoltage Studies with Germanium, Phys. Rev. 111, 153 (1958). [35] J. Lagowski, C. L. Balestra, and H. C. Gatos, Photovoltage inversion effect and its application to semiconductor surface studies: CdS, Surf. Sci. -
27, 547 (1971).
[36] W. Van Roosbroeck, Theory of the flow of electrons and holes in Germanium and other semiconductors, Bell System Tech. J. 29, 560 (1950). [37] E. H. Nicollian and A. Goetzberger, The Si-SiO2 Interface Electrical Properties as Determined by the MetalInsulator-Silicon Conductance Technique, Bell System Tech. J. 46, 1055 (1967).
[38] Y. C. Cheng, Electronic states at the silicon-silicon dioxide interface, Prog. In Surf. Sci. 8, 181 (1977). [39] R. H. Kingston and S. F. Neustadter, Calculation of the Space Charge, Electric Field, and Free Carrier Concentration at the Surface of a Semiconductor, J. Appl. Phys. 26, 718 (1955). [40] C. G. B. Garrett and W. H. Brattain, Distribution and cross-sections of fast states on Germanium surfaces, Bell System Tech. J. 35, 1041 (1956). [41] H. B. Bebb and R. A. Chapman, Application of q-
uantum defect techniques to photoionization of impurities in semiconductors, J. Phys. Chem. Solids 28, 2087 (1967).
[42] S. Chaudhuri, Optical-transition cross sections involving impurities in semiconductors, Phys. Rev. B 26, 6593 (1982). [43] Y. K. Hsieh and H. C. Card, Limitation to ShockleyRead–Hall model due to direct photoionization of the defect states, J. Appl. Phys. 65, 2409 (1989). [44] M. Leibovitch, L. Kronik, E. Fefer, and Y. Shapira, Distinction between surface and bulk states in surfacephotovoltage spectroscopy, Phys. Rev. B 50, 1739 (1994). [45] H. Matsumoto and T. Sugano, Characterization of Rea-
ctive Ion Etched Silicon Surface by Deep Level Transient Spectroscopy, J. Electrochem. Soc. 129 (1982). [46] C. Gatzert, A. W. Blakers, P. N. K. Deenapanray, D. Macdonald, and F. D. Auret, Investigation of reactive ion etching of dielectrics and Si in CHF3/O2 or CHF3/Ar for photovoltaic applications, J. Vac. Sci. Technol. A 24, 1857 (2006).
[47] S. S. Mohammed, Investigation of surface states and device surface charging in nitride materials using scanning Kelvin probe microscopy, Ph.D. thesis, Virginia Commonwealth University (2005). [48] J. Maltby, C. Reed, and C. Scott, Analysis of the surface photovoltaic effect in photoconductors: CdS, Surf. Sci. 51, 89 (1975). [49] W. Shockley and W. T. Read, Statistics of the Recombinations of Holes and Electrons, Phys. Rev. 87, 835 (1952).
[50] R. N. Hall, Electron-Hole Recombination in Germanium, Phys. Rev. 87, 387 (1952).
[51] G. Lucovsky, On the photoionization of deep impurity centers in semiconductors, Solid State Commun. 3, 299 (1965).
[52] W. W. Anderson, Shallow impurity states in semiconductors: Absorption cross-sections, excitation rates, and capture cross-sections, Solid-State Electron. 18, 235 (2008).
[53] A. M. Stoneham, Phonon coupling and photoionisation cross-sections in semiconductors, J. Phys. C: Solid State Phys. 12, 891 (1979). [54] B. Olejnkova ́, . Hrivn ́ak, and M. Kedro, The model potential for charged centres in semiconductors, Phys. Status Solidi B 107, 451 (1981). [55] D. D. Coon and R. P. G. Karunasiri, Green’s-functionquantum-defect treatment of impurity photoionization in semiconductors, Phys. Rev. B 33, 8228 (1986).
[56] K. Ilaiwi and M. Tomak, Impurity photoionization in semiconductors, J. Phys. Chem. Solids 51, 361 (1990).
[57] M. Tomak, On the photo-ionization of impurity centres in semiconductors, Tech. Rep. (International Centre for Theoretical Physics, 1982). [58] W. C. Campbell, J. Mizrahi, Q. Quraishi, C. Senko, D. Hayes, D. Hucul, D. N. Matsukevich, P. Maunz, and C. Monroe, Ultrafast Gates for Single Atomic Qubits, Phys. Rev. Lett. 105, 090502 (2010).
[59] S. Siegfried, Analysis and Simulation of Semiconductor Devices (Springer Vienna, 2011).
[60] C. H. Chenming, Modern Semiconductor Devices for Integrated Circuits (Pearson, 2009).
[61] N. Arora, J. Hauser, and D. Roulston, Electron and hole mobilities in silicon as a function of concentration and temperature, IEEE Trans. on Electron Devices 29, 292 (1982).
[62] M. A. Green, Self-consistent optical parameters of intrinsic silicon at 300K including temperature coefficients, Sol. Energy Mater. Sol. Cells 92, 1305 (2008). [63] K. W. Bo ̈er and U. W. Pohl, Semiconductor Physics (Springer Nature, 2023).
[64] O. Z. Alekperov, Capture of carriers by screened charged centres and low-temperature shallow-impurity electric field breakdown in semiconductors, J. Physics: Condens. Matter 10, 8517 (1998). [65] K. Y. Tong and Y. W. Lam, Difficulties in observing direct optical excitation of Si-SiO2 interface states, J. Phys. D: Appl. Phys. 9, L9 (1976). [66] J. Jiang, C. Ling, T. Xu, W. Wang, X. Niu, A. Zafar, Z. Yan, X. Wang, Y. You, L. Sun, et al., Defect Engineering for Modulating the Trap States in 2D P-
hotoconductors, Adv. Mater. 30, 1804332 (2018). [67] D. Leibfried, R. Blatt, C. Monroe, and D. Wineland, Quantum dynamics of single trapped ions, Rev. Modern Phys. 75, 281 (2003). [68] J.-Y. Ji, J. K. Kim, and S. P. Kim, Heisenbergpicture approach to the exact quantum motion of a timedependent harmonic oscillator, Phys. Rev. A 51, 4268 (1995). [69] H.-C. Kim, M.-H. Lee, J.-Y. Ji, and J. K. Kim, Heisenberg-picture approach to the exact quantum motion of a time-dependent forced harmonic oscillator, -
Phys. Rev. A 53, 3767 (1996). [70] D. J. Berkeland, J. D. Miller, J. C. Bergquist, W. M. Itano, and D. J. Wineland, Minimization of ion micromotion in a Paul trap, J. Appl. Phys. 83, 5025 (1998). [71] S. Halas and T. Durakiewicz, Work functions of elements expressed in terms of the Fermi energy and the

26
density of free electrons, J. Physics: Condens. Matter 10, 10815 (1998). [72] I. D. Baikie, A. C. Grain, J. Sutherland, and J. Law, Ambient pressure photoemission spectroscopy of metal surfaces, Appl. Surf. Sci. 323, 45 (2014). [73] J. H. Bechtel, W. Lee Smith, and N. Bloembergen, Two-photon photoemission from metals induced by picosecond laser pulses, Phys. Rev. B 15, 4557 (1977). [74] A. Damascelli, G. Gabetta, A. Lumachi, L. Fini, and F. Parmigiani, Multiphoton electron emission from Cu and W: -
An angle-resolved study, Phys. Rev. B 54, 6031 (1996). [75] M. Sivis, N. Pazos-Perez, R. Yu, R. Alvarez-Puebla, F. J. Garc ́ıa de Abajo, and C. Ropers, Continuous-wave multiphoton photoemission from plasmonic nanostars, Commun. Phys. 1, 13 (2018). [76] H. S. Brandi and C. B. de Araujos, Multiphoton absorption coefficients in solids: a universal curve, J. Phys. C: Solid State Phys. 16, 5929 (1983). [77] R. DeSalvo, A. A. Said, D. J. Hagan, E. W. V. Stryland, and M. Sheik-Bahae, Infrared to ultravio-
let measurements of two-photon absorption and n2 in wide bandgap solids, IEEE J. Quantum Electron. 32, 1324 (1996). [78] K. Tanaka, N. Yamada, and M. Oto, Two-photon optical absorption in PbO-SiO2 glasses, Appl. Phys. Lett. 83, 3012 (2003).
[79] R. Salh, Defect related luminescence in silicon dioxide network: a review, Cryst. Silicon-Properties Uses , 135 (2011). [80] L. Skuja, N. Ollier, K. Kajihara, I. Bite, M. Leimane, K. Smits, and A. Silins, Optical Absorption of Excimer Laser-Induced Dichlorine Monoxide in Silica Glass and Excitation of Singlet Oxygen Luminescence by Energy Transfer from Chlorine Molecules, Phys. Status Solidi A 218, 2100009 (2021).
[81] A. Trukhin, Photoelectric response of localized states in silica glass, J. Non-Crystalline Solids 511, 161 (2019). [82] M. P. Seah and W. A. Dench, Quantitative electron spectroscopy of surfaces: A standard data base for electron inelastic mean free paths in solids, Surf. Interface Anal. 1, 2 (1979). [83] T. Cook Jr, C. Fulton, W. Mecouch, K. Tracy, R. Davis, E. Hurt, G. Lucovsky, and R. Nemanich, Measurement of the band offsets of SiO2 on clean n- and p-type GaN(0001), J. Appl. Phys. 93, 399-
5 (2003).
[84] J. Robertson, High dielectric constant oxides, Eur. Phys. J. Appl. Phys. 28, 265 (2004). [85] V. Afanas’ Ev, M. Houssa, A. Stesmans, C. Merckling, T. Schram, and J. Kittl, Influence of Al2O3 crystallization on band offsets at interfaces with Si and TiNx, Appl. Phys. Lett. 99, 072103 (2011). [86] E. O. Filatova and A. S. Konashuk, Interpretation of the Changing the Band Gap of Al2O3 Depending on Its Crystalline Form: Connection with Different Local Symmetries, J. Phys. Chem. C 119, 20755 (2015-
). [87] T. Cook Jr, C. Fulton, W. Mecouch, R. Davis, G. Lucovsky, and R. Nemanich, Band offset measurements of the Si3N4/GaN (0001) interface, J. Appl. Phys. 94, 3949 (2003). [88] E. W. J. Mitchell, J. W. Mitchell, and N. F. Mott, The work functions of copper, silver and aluminium, Proc. Royal Soc. A 210, 70 (1951). [89] P. B. Johnson and R. W. Christy, Optical constants of copper and nickel as a function of temperature, Phys.
Rev. B 11, 1315 (1975).
[90] R. A. Matula, Electrical resistivity of copper, gold, palladium, and silver, J. Phys. Chem. Ref. Data 8, 1147 (1979). [91] R. L. Olmon, B. Slovick, T. W. Johnson, D. Shelton, S.-H. Oh, G. D. Boreman, and M. B. Raschke, Optical dielectric function of gold, Phys. Rev. B 86, 235147 (2012). [92] Y. Ishida, J. K. Jung, M. S. Kim, J. Kwon, Y. S. Kim, D. Chung, I. Song, C. Kim, T. Otsu, and Y. Kobayashi, Work function seen with sub-meV precision through laser photoemission, Commun. Phys. 3, 158 (202-
0). [93] Y.-C. Yeo, T.-J. King, and C. Hu, Metal-dielectric band alignment and its implications for metal gate complementary metal-oxide-semiconductor technology, J. Appl. Phys. 92, 7266 (2002).
[94] R. Williams, Photoemission of Electrons from Silicon into Silicon Dioxide, Phys. Rev. 140, A569 (1965). [95] J. L. Lauer, J. L. Shohet, and R. W. Hansen, Measuring vacuum ultraviolet radiation-induced damage, J. Vac. Sci. Technol. A 21, 1253 (2003). [96] V. V. Afanas’ev, J. Schubert, A. Neft, G. Delie, I. Shlyakhov, V. Trepalin, M. Houssa, and A. Stesmans, Determination of energy thresholds of electron excitations at semiconductor/insulator interfaces using trap-related displacement currents,-
 Microelectron. Eng. 215, 110992 (2019). [97] K. Giesen, F. Hage, F. J. Himpsel, H. J. Riess, and W. Steinmann, Two-photon photoemission via imagepotential states, Phys. Rev. Lett. 55, 300 (1985). [98] D. F. Padowitz, W. R. Merry, R. E. Jordan, and C. B. Harris, Two-photon photoemission as a probe of electron interactions with atomically thin dielectric films on metal surfaces, Phys. Rev. Lett. 69, 3583 (1992).
[99] M. Weinelt, Time-resolved two-photon photoemission from metal surfaces, J. Physics: Condens. Matter 14, R1099 (2002). [100] M. Rohleder, W. Berthold, J. Gu ̈dde, and U. Ho ̈fer, Time-Resolved Two-Photon Photoemission of Buried Interface States in Ar/Cu(100), Phys. Rev. Lett. 94, 017401 (2005). [101] K. Gillmeister, M. Kiel, and W. Widdra, Image potential states at transition metal oxide surfaces: A timeresolved two-photon photoemission study on ultrathin NiO films, Phys. Rev. B 97, 085424 (20-
18). [102] M. Reutzel, A. Li, and H. Petek, Above-threshold multiphoton photoemission from noble metal surfaces, Phys. Rev. B 101, 075409 (2020).
[103] J. Johns, Watching Electrons Transfer from Metals to Insulators using Two Photon Photoemission, Ph.D. thesis, University of California, Berkeley (2010).
[104] L. Hans, Solid Surfaces, Interfaces and Thin Films (Springer Berlin, Heidelberg, 2012). [105] S. Reggiani, M. Valdinoci, L. Colalongo, M. Rudan, and G. Baccarani, An Analytical, Temperature-dependent Model for Majority- and Minority-carrier Mobility in Silicon Devices, VLSI Design 10, 467 (2000). [106] L. Meiners and H. Wieder, Semiconductor surface passivation, Mater. Sci. Rep. 3, 139 (1988).
[107] J. Mizsei, Fermi-level pinning and passivation on the oxide-covered and bare silicon surfaces and interfaces, Vacuum 67, 59 (2002). [108] S. Auchter, C. Axline, C. Decaroli, M. Valentini, L. Purwin, R. Oswald, R. Matt, E. Aschauer, Y. Colombe,

27
P. Holz, et al., Industrially microfabricated ion trap with 1 eV trap depth, Quantum Sci. Technol. 7, 035015 (2022). [109] J. A. Sedlacek, A. Greene, J. Stuart, R. McConnell, C. D. Bruzewicz, J. M. Sage, and J. Chiaverini, Distance scaling of electric-field noise in a surface-electrode ion trap, Phys. Rev. A 97, 020302 (2018). [110] D. An, C. Matthiesen, E. Urban, and H. Hffner, Distance scaling and polarization of electric-field noise in a surface ion trap, Phys. Rev. A 100, 063405 (2019). [111] -
P. C. Holz, S. Auchter, G. Stocker, M. Valentini, K. Lakhmanskiy, C. Rssler, P. Stampfer, S. Sgouridis, E. Aschauer, and Y. Colombe, 2D linear trap array for quantum information processing, Adv. Quantum Technol. 3, 2000031 (2020). [112] R. F. Spivey, I. V. Inlek, Z. Jia, S. Crain, K. Sun, J. Kim, G. Vrijsen, C. Fang, C. Fitzgerald, and S. Kross, Highstability cryogenic system for quantum computing with compact packaged ion traps, IEEE Trans. on Quantum Eng. 3, 1 (2021).
[113] O. von Roos, A note on photocurrents in extrinsic semiconductors, Solid-State Electron. 22, 229 (1979).
[114] S. R. in ’t Hout, Quasineutrality in semiconductors, J. Appl. Phys. 79, 8435 (1996). [115] M. Krcˇmar and W. M. Saslow, Exact surface solutions for semiconductors: The Dember effect and partial cur
rents, Phys. Rev. B 65, 233313 (2002).
[116] W. van Roosbroeck, Current-Carrier Transport with Space Charge in Semiconductors, Phys. Rev. 123, 474 (1961). [117] H. A. Haus and J. R. Melcher, Electromagnetic fields and energy (Prentice Hall, 1989). [118] D. T. Pierce and W. E. Spicer, Electronic Structure of Amorphous Si from Photoemission and Optical Studies, Phys. Rev. B 5, 3017 (1972). [119] D. E. Aspnes and A. A. Studna, Dielectric functions and optical parameters of Si, Ge, GaP, GaAs, GaSb, InP, InAs, and InSb from 1.5 to 6.0 eV, P-
hys. Rev. B 27, 985 (1983). [120] J.-N. Chazalviel and A. Venkateswara Rao, Optical Absorption by Surface States and Atomic Reorganization Effects at the Semiconductor/Electrolyte Interface, J. Electrochem. Soc. 134, 1138 (1987). [121] C. Gardiner and P. Zoller, The Quantum World of Ultra-Cold Atoms and Light Book II: The Physics of Quantum-Optical Devices (IMPERIAL COLLEGE PRESS, 2014).
[122] R. J. Glauber, in Foundations of Quantum Mechanics (Santa Fe, New Mexico, 1992) pp. 23–39.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:45.034Z
- **Text Length:** 120947 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
