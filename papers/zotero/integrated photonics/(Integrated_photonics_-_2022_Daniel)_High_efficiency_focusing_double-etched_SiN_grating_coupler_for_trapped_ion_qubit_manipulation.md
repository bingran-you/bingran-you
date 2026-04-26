# PDF Document: (Integrated photonics - 2022 Daniel) High efficiency focusing double-etched SiN grating coupler for trapped ion qubit manipulation.pdf

**File Path:** (Integrated photonics - 2022 Daniel) High efficiency focusing double-etched SiN grating coupler for trapped ion qubit manipulation.pdf

**Processed Date:** 2026-02-10T18:15:20.259Z

**File Size:** 1302.94 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 350

**Title:** (Integrated photonics - 2022 Daniel) High efficiency focusing double-etched SiN grating coupler for trapped ion qubit manipulation

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Japanese Journal of Applied Physics

REGULAR PAPER • OPEN ACCESS

You may also like

High efficiency focusing double-etched SiN grating coupler for trapped ion qubit manipulation
To cite this article: Mizuki Shirao et al 2022 Jpn. J. Appl. Phys. 61 SK1002
View the article online for updates and enhancements.

- Side pumping scheme with a dual-sided grating coupler Fan Zhang, Bo Yuan, Chun-can Wang et al.
- Demonstration of integrated polarization rotator based on an asymmetric silicon waveguide with a trench Yudeuk Kim, Dong Wook Kim, MoonHyeok Lee et al.
- Proposal and design of integrated probe based on silicon photonics for laser Doppler cross-sectional velocity distribution measurement Koichi Maru, Hirofumi Watanabe, Kei Yamashita et al.

This content was downloaded from IP address 136.152.214.100 on 29/03/2024 at 22:49

Japanese Journal of Applied Physics 61, SK1002 (2022) https://doi.org/10.35848/1347-4065/ac5b27

REGULAR PAPER

High efficiency focusing double-etched SiN grating coupler for trapped ion qubit manipulation
Mizuki Shirao1*†, Daniel Klawson1, Sara Mouradian2, and Ming C. Wu1
1Department of Electrical Engineering and Computer Sciences, University of California, Berkeley, California 94720, United States of America 2Department Electrical and Computer Engineering, University of Washington, Seattle, Washington 98195, United States of America *E-mail: Shirao.mizuki@db.mitsubishielectric.co.jp †Present address: Information Technology R & D Center, Mitsubishi Electric CorporationPresent address:
Received January 26, 2022; revised February 27, 2022; accepted March 7, 2022; published online June 16, 2022
A one-dimensional focusing grating coupler array based in silicon nitride (SiN) was proposed for trapped ion qubit manipulation. By applying inverse design optimization with a double-etched grating structure, a directionality of 98% was achieved. A small beam diameter of 2.5 μm on the target ion with a low crosstalk of −36 dB was attained. Additionally, the impact of fabrication errors was investigated through a Monte Carlo simulation; within the accuracy of an electron beam lithography-based proc-
ess, the output efficiency was maintained at 93%.
© 2022 The Author(s). Published on behalf of The Japan Society of Applied Physics by IOP Publishing Ltd

1. Introduction
Quantum computers have garnered much interest due to their
ability to solve optimization problems considered impractical with conventional von Neumann-type computers.1) They are particularly promising candidates in the ﬁelds of pharmaceuticals, materials science, machine learning, as well as others.2–5)
One of the most promising ways to construct quantum
gate-based computers is with a superconducting ring as a qubit.6–8) Another encouraging approach is through ion trap
quantum computing. In such a system, the energy levels of electrostatically trapped ions are used as qubit states.9–12) A
long coherence time can be achieved by choosing a suitable ion qubit, such as 40Ca+.13) To suspend the ions, a potential well Paul trap is created with an RF signal and an electrostatic ﬁeld in a high-vacuum chamber.14) Laser cooling is used to remove the kinetic energy of the ions, allowing for room temperature operation.15,16) State manipulation of the
qubit is achieved by irradiating laser light with a wavelength corresponding to the ion’s energy levels.17,18) Additionally, motional modes of trapped ion chains can be used for
computational purposes, necessitating trapping intervals of several microns.19) Therefore, ions located every few microns
must be individually irradiated for qubit state control.
To realize a scalable quantum computer capable of solving
real-world problems, monolithic integration of electrical and
optical components is necessary. Nanofabrication shows
promise for increasing system integration and scalability. A
surface electrode Paul trap, constructed with 2D conducting
plates rather than 3D bulk electrodes, has been demonstrated with trapping heights of tens of microns.20–22) Furthermore,
integrated photonic control with 2D focusing surface grating
couplers (GCs) has been used to diffract guided light from the chip to the ions captured in free space.23–25) Full coherent
control of a single trapped ion qubit has since been reported;
a chip with four GCs designed for four wavelengths demon-
strated fully integrated ion trapping, laser cooling, qubit initialization, and state control.26,27) However, for multi-qubit
control, tightly focused irradiation is needed for ions in a

tightly packed chain. This means that a large-footprint GC is required to improve the diffraction limit, making it challenging to place GCs with tight periodicity in a space limited by the ion qubits. In addition, the relatively low diffraction efﬁciency of GCs causes stray light within the system, resulting in crosstalk with neighboring ions.
In this paper, we report a high efﬁciency, low-crosstalk SiN GC array for irradiating 729 nm light to a chain of 40Ca + ion qubits.28) A double-etched GC was used to obtain high selectivity diffraction in the ion direction. An inverse design approach was adopted to design a optimized grating geometry for greater diffraction efﬁciency. This paper is an extended version of a 26th Microoptics Conference (MOC) paper.29) We have added a more comprehensive explanation of the theory and the design method-
, as well as a discussion of the device fabrication errors by way of new data.
2. Concept and design
For the chip architecture, a silicon photonics platform was chosen as it allows for integration of both surface electrodes and optical waveguides. Because 729 nm light is used to manipulate the state of the 40Ca+ ions, a SiN waveguide, transparent to visible light, was used for this study. A 2D focusing GC is difﬁcult to place on the wafer for the multiion case as a large, diffraction limited footprint is needed. To solve this problem, 1D focusing GCs are placed diagonally as shown in Fig. 1 to fo-
rm elliptical focusing spots without any overlap. By shifting the GCs by 5 μm in both the X- and Yaxes, it is possible to form focusing spots with a 7.07 μm period in a straight line tilted at 45 degrees.
To design the grating, a double-etched structure was used as shown in Fig. 2.30) Reﬂections are cancelled by providing a positional shift between the top and the bottom teeth, giving a half-wavelength phase difference as discussed in the previous report. In addition, by optimizing the thickness of the SiN waveguide and the depth of the grating teeth, it is possible to cancel the diffraction towards the bottom side of the substrate and to achieve high upward selectivity. As surface electrodes are n-
eeded on the surface of the wafer, a SiO2 cladding layer around the SiN waveguide was assumed.

Content from this work may be used under the terms of the Creative Commons Attribution 4.0 license. Any further distribution of this

work must maintain attribution to the author(s) and the title of the work, journal citation and DOI.

SK1002-1

© 2022 The Author(s). Published on behalf of
The Japan Society of Applied Physics by IOP Publishing Ltd

Jpn. J. Appl. Phys. 61, SK1002 (2022)

M. Shirao et al.

Fig. 1. (Color online) Layout of the proposed GC array for ion chain control.

For the design of the high-efﬁciency diffraction grating,

photonic inverse design was used to optimize the geometry of

the grating. Lumerical’s FDTD solver and LumOpt package were used for this study.30) The grating design was initially

designed through 2D simulation, then extruded to a 3D

simulation to conﬁrm the ﬁnal characteristics. Since the

grating parameters vary slowly but continuously, a ﬁfth-

order Fourier series expansion was used to deﬁne the grating

geometry. The following are the details of the design

procedure.

2.1. Basic parameter selection with a uniform GC

To obtain a high-efﬁciency GC, major parameters such as the

SiN layer thickness T, and the etching depth t were optimized

with a uniform grating model. The parameters of the top and

bottom gratings were the same but shifted by a constant

value.

2.2. Theoretical design of a focusing grating

The grating period Λ(n) was set to focus the light onto the

target position while keeping D, which is a duty factor of

grating, constant as shown in Fig. 3. As in the previous

section, the parameters of the top and bottom gratings were

made the same but shifted. As the GC is buried in SiO2, the diffraction angle at the ith grating teeth position θ1,n is obtained by solving the following system of equations,

n1 sin q1,i = n2 sin q2,i

(1)

xi - xt = H1 tan q1,i + H2 tan q2,i,

(2)

where n1 is the refractive index of the SiO2 cladding layer, n2 is the refractive index of air, θ1,i is the angle of incidence in the SiO2 cladding layer, θ2,i is the angle of incidence in air, xi is the position of the ith grating teeth and xt is the position of the focusing target in the X-axis. Here, xt is on the negative side. The deﬁnitions of these parameters are shown in Fig. 4.
When the top and bottom grating teeth do not overlap, and
θ1,i is obtained, the period of the ith grating teeth is calculated

Fig. 3. (Color online) Detailed structure of focusing GC.

Fig. 4. (Color online) Deﬁnition of parameters.

as:30)

Li

=

(1

-

D) (ne2

+

ne3)

lc + (2D

-

1) ne1

-

n1

sin

q1,i .

(3)

In this equation, λc is the design wavelength, ne2 and ne3 are the effective refractive indices of the cross-section of the
etched area, and ne1 is the effective refractive index of the cross-section of the unetched area. When the top and bottom
grating teeth do overlap, the grating period can be expressed in a similar manner.30) 2.3. Selection of the ion location In the ﬁrst inverse design step, a reference Gaussian light source was placed at the ion location and the geometry was optimized to maximize the coupling efﬁciency to the waveguide as shown in Fig. 5. To deﬁne the reference light source, the parameters such as the beam size, X-axis position, and angle were optimized such that the coupling efﬁciency was maximized for the focusing-
 GC designed in step (b). 2.4. Full optimization of grating geometry
While the previous steps determined the geometry with
theory, the inverse design optimizes the parameters with ﬁnite difference simulations to maximize the coupling efﬁciency. The duty factors of the top and bottom gratings Dtop,i and Dbot,i, the grating periods Λtop,i and Λbot,i, and the

Fig. 2. (Color online) Selective diffraction of double-etched GC.30)

SK1002-2

© 2022 The Author(s). Published on behalf of
The Japan Society of Applied Physics by IOP Publishing Ltd

Jpn. J. Appl. Phys. 61, SK1002 (2022)

M. Shirao et al.

Fig. 5. (Color online) 2D FDTD simulation model and apodized double-etched GC.

positional shift of the top and bottom gratings di were expressed in ﬁfth-order Fourier series expansion form as described in the previous report.30) Then, the Fourier
coefﬁcients of these parameters were optimized in this step.
The etching depths of the top grating ttop and the bottom grating tbot, as well as the x coordinate of the ﬁrst grating teeth x0 were also optimized. These parameters were obtained by gradient-based optimization using the adjoint method and
the Broyden–Fletcher–Goldfarb–Shannon algorithm.

3. Results and discussion

The procedures discussed in the previous section were used

to simulate and design the focusing GC. In this optimization,

no Si substrate was assumed, as a radiation boundary was

used instead as shown in Fig. 5. This means that light diffracted downwards was lost as radiation. A 227 nm thick

Fig. 6. (Color online) Light intensity proﬁle of focusing GC.

SiN layer with a refractive index of 2.0 was found to be

optimal. The heights comprising the trapped ion position, H1 and H2, were set to 1.0 μm and 29 μm, respectively (see
Fig. 3). The initial value of the duty factor in step (a) was set

to a relatively large value of 0.8 in order to reduce the

scattering efﬁciency per grating—this increased the aperture

size of the GC allowing for a small focused spot in free space.

In step (d), a reference light source with an 18° tilted

Gaussian distribution with a beam waist radius of 0.6 μm

was used.

3.1. 2D simulation

After the inverse design, in order to obtain a Gaussian light

intensity distribution at the waveguide surface, the duty factor

gradually decreases as the grating index increases. The duty

factor of the gratings after the optimization process con-

verged in the range from 50% to 90%. Figure 6 shows the

light intensity distribution of the optimized GC. High

directionality and tight focusing were successfully achieved.

The diffraction efﬁciency, or the ratio of the power detected

at the top boundary to the input power, was simulated to be 98.8%. The beam diameter (1/e2) and beam angle at the target

position were 1.7 μm and 20.8°, respectively. There was no

constraint on the duty factor in the inversed design process.

3.2. 3D beam shape

The 2D geometry of the GC was extruded to a 3D FDTD

model for a more realistic simulation. Assuming a grating shift along the X- and Y-axes of 5 μm, a GC width of 4.0 μm was used to prevent overlap of the GCs as shown in Fig. 1.

Fig. 7. (Color online) Light intensity proﬁle at target position by 3D FDTD simulation.

Figure 7 shows the light intensity distribution at the target

position. The beam diameter in the X-axis was measured to

be 2.0 μm, in good agreement with the 1.7 μm of the 2D SK1002-3

© 2022 The Author(s). Published on behalf of
The Japan Society of Applied Physics by IOP Publishing Ltd

Jpn. J. Appl. Phys. 61, SK1002 (2022)

M. Shirao et al.

Top 98.0%

Table II. Breakdown of output power.

Bottom

Reﬂection

0.7%

0.4%

Through 0.9%

Table III. Parameters for the Monte Carlo simulation.

Parameter

Symbol Variation (2σ: 95.4%) Unit

Top and bottom misalignment Δd

25

nm

SiN thickness

ΔT

10

nm

Etch depth (top)

Δttop

10

nm

Etch depth (bottom)

Δtbot

10

nm

Etch width (top)

Δwtop

10

nm

Etch width (bottom)

Δwbot

10

nm

Fig. 8. (Color online) Beam shape in cross section A–A′.

were assumed to be constant. Based on these assumptions, 3000 Monte Carlo simulation trials were run.

Figure 8 shows the results of the Monte Carlo simulation.

simulation. Since the grating is unfocused in the Y-axis The average beam diameter of 1.68 μm agreed with the

direction, the diameter was as large as 11.2 μm. The beam designed value of 1.7 μm. The beam diameter variation was

shape along a 45° cross section A–A′ is the most important in as small as 0.12 μm, and a maximum value of 1.80 μm was

this case, as the ion positions are located along a straight line obtained at 2σ variation. The beam position was also affected,

on this axis as shown in Fig. 8. The beam diameter in the A– laterally shifting the peak position. However, fabrication

A′ plane was estimated to be 2.5 μm, slightly larger than in errors are typically uniform across the die, suggesting that

the X-axis direction due to the elliptical beam shape. The the relative beam position would not change for the whole

crosstalk into the neighboring qubits is evaluated by mea- grating array. Such a simultaneous beam position shift can be

suring the power intensity 7.07 μm away from the main peak compensated by adjusting the bias conditions of the Paul trap,

in the A–A′ plane. This estimates the crosstalk into the shuttling the ion position along the trap axis. Similarly, the

neighboring qubits to be as low as −36 dB.

variation of the output efﬁciency is also shown in Fig. 9. It

Tables I and II show the summary of the 3D FDTD was found that even when fabrication errors occur, the

simulation result. Beam diameters of 1.7 μm, 11.2 μm and upward diffraction efﬁciency was still better than 93.0% in

2.5 μm were measured in the X-axis, the Y-axis and cross more than 95.4% of the cases. Although the fabrication errors

section A–A′ respectively. A low crosstalk of −36 dB was increase the reﬂection back into the waveguide, the reﬂection

obtained because of the tightly focused elliptical beam in the can be managed by inserting an optical isolator into the

X-axis. The breakdown grating cardinal directionality is system. The degradation in performance was mainly due to

shown in Table II. Thanks to the combination of the the misalignment Δd between the top and bottom gratings.

double-etched grating structure and the inverse design This is because the variation of Δd disrupts the selective light

technique, the downward radiation, reﬂection, and through diffraction conditions and signiﬁcantly reduces the efﬁciency

power were all suppressed to less than 1%–98% of the input of reﬂection and diffraction. Other parameters did not have a

light was diffracted upwards.

signiﬁcant effect on the characteristics. The transmission

3.3. Fabrication tolerance

through the grating could also be suppressed by increasing

Next, to evaluate the impact of fabrication errors on design the number of grating periods. Attention should be paid to the

performance, we performed a Monte Carlo simulation based downwards light, as this could cause unwanted manipulation

on the 2D simulation model. The error bounds are summar- of the neighboring ion qubits. The diffraction efﬁciency

ized in Table III. First, a variation of 10 nm was assumed for towards the bottom side was less than 3.8% for 2σ variation;

the SiN thickness. Since the designed grating contains a ﬁne this indicates that the stray light in this system is low even

pattern several tens of nanometers in size, fabrication errors when fabrication errors occur.

in the electron beam (EB) lithography-based process of The Damascene reﬂow process effectively fabricates

10 nm were assumed for each dimension. The double-etched double etched GC structure, speciﬁcally bottom grating teeth, structure requires multiple exposures for the top and bottom to obtain accurate and smooth grating structure.31) In this

grating teeth, so precise alignment during the lithography process, SiO2 is ﬁrstly etched, followed by SiN deposition process is required. In this case, a relative misalignment of and planarization. Top grating teeth are then fabricated by

the top and bottom gratings of 25 nm was assumed. The another SiN deposition and etching process. We can still

refractive index of the material and the pitch of the gratings adopt EB lithography for the damascene process, meaning

that accurate grating geometry is achievable, although atten-

tion should be paid to thickness control.

Table I. Beam diameter and crosstalk.

Finally, a 3D FDTD simulation was performed under the

X-axis 1.7

Beam diameter (μm)
Y-axis 11.2

A–A′ 2.5

Crosstalk (dB) condition where the beam diameter was the largest (1.77 μm) among the 3000 Monte Carlo trials to conﬁrm the beam

shape. Figure 10 shows the light intensity distribution at the

−36

target position. No clear difference was observed between

© 2022 The Author(s). Published on behalf of

SK1002-4 The Japan Society of Applied Physics by IOP Publishing Ltd

Jpn. J. Appl. Phys. 61, SK1002 (2022)

M. Shirao et al.

(a)

(b)

(c) Fig. 9. (Color online) Monte Carlo simulation results.

(a)

(b)

Fig. 10. (Color online) Comparison of beam shape with and without errors.

these two results in Fig. 10(a). Figure 10(b) shows the light will be studied in a future report, along with research on

intensity along cross-section A–A′. Low crosstalk values of improving the performance of ion trap quantum computers.

less than 36 dB were attained, regardless of fabrication errors. From these results, it is shown that the proposed 1D focusing 4. Conclusion

GC array can provide well isolated elliptical beams at the We proposed a 1D focusing GC array for trapped ion qubit

target position and suppress the stray light by upwards manipulation. A diagonally shifted array prevents the overlap

selective light diffraction.

of the beams at the target ion position. By leveraging inverse

In this report, we numerically demonstrated the proof of design optimization and a double-etched grating structure, the

concept of a well-isolated beam focuser. The device speci- output light highly directional, tightly focused, and low in

ﬁcations in an actual computer depend on the scale and the crosstalk. The fabrication tolerance was investigated through

noise tolerance of the computation, meaning that the grating a Monte Carlo simulation, and it was conﬁrmed that the

design and layout of the focusing GCs need to be optimized diffraction efﬁciency maintained a high value of 93% with no

depending on the system requirement. Such optimizations signiﬁcant increase in the crosstalk. These results suggest that © 2022 The Author(s). Published on behalf of
SK1002-5 The Japan Society of Applied Physics by IOP Publishing Ltd

Jpn. J. Appl. Phys. 61, SK1002 (2022)

M. Shirao et al.

the proposed 1D focusing GC array is a promising optical antenna for qubit manipulation in ion trap quantum computing.
Acknowledgments
This project is supported in part by National Science Foundation Challenge Institute for Quantum Computation (#2016245).
ORCID iDs
Ming C. Wu https://orcid.org/0000-0003-4808-6686
1) R. P. Feynman, “Simulating physics with computers,” Int. J. Theor. Phys. 21, 467 (1982).
2) A. Aspuru-Guzik, A. A. Dutoi, P. J. Love, and M. Head-Gordon, “Simulated quantum computation of molecular energies,” Science 309, 1704 (2005).
3) R. D. Somma, S. Boixo, H. Barnum, and E. Knill, “Quantum simulations of classical annealing processes,” Phys. Rev. Lett. 101, 130504 (2008).
4) E. Farhi and H. Neven, (2018), Classiﬁcation with quantum neural networks on near term processors arxiv:1802.06002.
5) D. J. Egger, C. Gambella, J. Marecek, S. McFaddin, M. Mevissen, R. Raymond, A. Simonetto, S. Woerner, and E. Yndurain, “Quantum computing for ﬁnance: state of the art and future prospects,” IEEE Trans. Quantum Eng. 1, 1 (2020).
6) F. Arute et al., “Quantum supremacy using a programmable superconducting processor,” Nature 574, 505 (2019).
7) A. Zulehner, A. Paler, and R. Wille, “An Efﬁcient Methodology for Mapping Quantum Circuits to the IBM QX Architectures,” IEEE Trans. Comput. Aided Des. Integr. Circuits Syst. 38, 1226 (2019).
8) P. Jurcevic et al., “Demonstration of quantum volume 64 on a superconducting quantum computing system,” Quantum Sci. Technol. 6, 025020 (2021).
9) H. Häffner, cf Roos, and R. Blatt, “Quantum computing with trapped ions,” Phys. Rep. 469, 155 (2008).
10) J. P. Home, D. Hanneke, J. D. Jost, J. M. Amini, D. Leibfried, and D. J. Wineland, “Complete methods set for scalable ion trap quantum information processing,” Science 325.5945, 1227 (2009).
11) C. Hempel et al., “Quantum chemistry calculations on a trapped-ion quantum simulator,” Phys. Rev. X 8, 031022 (2018).
12) C. D. Bruzewicz, J. Chiaverini, R. McConnell, and J. M. Sage, “Trapped-ion quantum computing: Progress and challenges,” Appl. Phys. Rev. 6, 021314 (2019).
13) P. A. Barton, C. J. S. Donald, D. M. Lucas, D. A. Stevens, A. M. Steane, and D. N. Stacey, “Measurement of the lifetime of the 3d2D5/2 state in 40Ca,” Phys. Rev. A 62, 032503 (2020).
14) W. Paul, “Electromagnetic traps for charged and neutral particles,” Rev. Mod. Phys. 62, 531 (1990).

15) K. Sugiyama and J. Yoda, “Laser cooling of a natural isotope mixture of Yb/ sup +/ stored in an RF trap,” IEEE Trans. Instrum. Meas. 44, 140 (1995).
16) F. Schmidt-Kaler, C. Roos, H. Rohde, S. Gulde, A. B. Mundt, D. Leibfried, J. Eschner, and R. Blatt, “Ground state cooling, quantum state engineering and study of decoherence of ions in Paul traps,” Conf. Digest. 2000 Int. Quantum Electronics Conf.2000 ieeexplore.ieee.org/document/
90815000TH8504. 17) I. Georgescu, “Trapped ion quantum computing turns 25,” Nat. Rev. Phys.
2, 278 (2020). 18) E. Beckert, C. A. Waechter, B. Hoefer, and U. Zeitner, “Laser-based
manipulation and readout for multi-ion traps in quantum computing,” Proc. SPIE 11699, spiedigitallibrary.org/conference-proceedings-of-spie/11699/ 116990I/Laser-based-manipulation-and-readout-for-multi-ion-traps-in/ 10.1117/12.2574608.full?SSO=1116990 (2021). 19) I. Pogorelov et al., “Compact ion-trap quantum computing demonstrator,” PRX Quantum 2, 020343 (2021). 20) S. Seidelin et al., “Microfabricated surface-electrode ion trap for scalable quantum information processing,” Phys. Rev. Lett. 96, 2-
53003 (2006). 21) J. Tao, N. P. Chew, L. Guidoni, Y. D. Lim, P. Zhao, and C. S. Tan, “Fabrication and characterization of surface electrode ion trap for quantum computing,” 2018 IEEE 20th Electronics Packaging Technology Conf. (EPTC), p. 3632018ieeexplore.ieee.org/document/8654328. 22) D. T. C. Allcock et al., “Implementation of a symmetric surface-electrode ion trap with ﬁeld compensation using a modulated Raman effect,” New J. Phys. 12, 053026 (2010). 23) K. Mehta et al., “Integrated optical add-
ressing of an ion qubit,” Nat. Nanotechnol. 11, 1066 (2016). 24) M. Ivory, W. J. Setzer, N. Karl, H. McGuinness, C. DeRose, M. Blain, D. Stick, M. Gehl, and L. P. Parazzoli, “Integrated optical addressing of a trapped ytterbium ion,” Phys. Rev. X 11, 041033 (2021). 25) Y. D. Lim, H. Y. Li, P. Zhao, J. Tao, L. Guidoni, and C. S. Tan, “Design and fabrication of grating couplers for the optical addressing of trapped ions,” IEEE Photonics J. 13, 2200306 (2021). 26) R. J. Niffenegger et al., “Integrate-
d multi-wavelength control of an ion qubit,” Nature 586, 538 (2020). 27) K. R. Brown, J. Chiaverini, J. M. Sage, and H. Häffner, “Materials challenges for trapped-ion quantum computers,” Nat. Rev. Mater. 6, 892 (2021). 28) C. Sorace-Agaskar et al., “Versatile silicon nitride and alumina integrated photonic platforms for the ultraviolet to short-wave infrared,” IEEE J. Sel. Top. Quantum Electron. 25, 8201515 (2019). 29) M. Shirao, D. Klawson, S. Mouradian, and M. C. Wu, “High-efﬁciency focusing dou-
ble-etched sin grating coupler for trapped ion qubit manipulation,” 2021 26th Microoptics Conf. (MOC), N-22021ieeexplore.ieee.org/ abstract/document/9598098/. 30) A. Michaels and E. Yablonovitch, “Inverse design of near unity efﬁciency perfectly vertical grating couplers,” Opt. Express 26, 4766 (2018). 31) M. Pfeiffer, J. Liu, A. S. Raja, T. Morais, B. Ghadiani, and T. J. Kippenberg, “Ultra-smooth silicon nitride waveguides based on the Damascene reﬂow process: fabrication and loss origins,” Optic-
a 5, 884 (2018).

SK1002-6

© 2022 The Author(s). Published on behalf of
The Japan Society of Applied Physics by IOP Publishing Ltd

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:20.259Z
- **Text Length:** 26585 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
