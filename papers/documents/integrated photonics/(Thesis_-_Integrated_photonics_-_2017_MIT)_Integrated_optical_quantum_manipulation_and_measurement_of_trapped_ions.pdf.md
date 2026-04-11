# PDF Document: (Thesis - Integrated photonics - 2017 MIT) Integrated optical quantum manipulation and measurement of trapped ions.pdf

**File Path:** (Thesis - Integrated photonics - 2017 MIT) Integrated optical quantum manipulation and measurement of trapped ions.pdf

**Processed Date:** 2026-02-10T18:15:55.811Z

**File Size:** 29971.76 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 384

**Title:** (Thesis - Integrated photonics - 2017 MIT) Integrated optical quantum manipulation and measurement of trapped ions.pdf

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Integrated optical quantum manipulation and measurement of trapped ions
by
Karan K. Mehta
B.S., University of California, Los Angeles (2010) S.M., Massachusetts Institute of Technology (2012) Submitted to the Department of Electrical Engineering in partial fulﬁllment of the requirements for the degree of
Doctor of Philosophy in Electrical Engineering at the
MASSACHUSETTS INSTITUTE OF TECHNOLOGY February 2017
© Massachusetts Institute of Technology 2017. All rights reserved.
Author . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Department of Electrical Engineering December 22, 2016
Certiﬁed by . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Rajeev J. Ram
Professor of Electrical Engineering Thesis Supervisor
Accepted by . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Leslie A. Kolodziejski
Professor of Electrical Engineering Chair, Department Committee on Graduate Students

2

Integrated optical quantum manipulation and measurement of trapped ions by Karan K. Mehta
Submitted to the Department of Electrical Engineering on December 22, 2016, in partial fulﬁllment of the requirements for the degree of Doctor of Philosophy in Electrical Engineering
Abstract
Individual atomic ions conﬁned in designed electromagnetic potentials and manipulated via lasers are strong candidates as physical bases for quantum information processing (QIP). This is in large part due to their long coherence times, indistinguishability, and strong Coulomb interactions. Much work in recent years has utilized these properties to implement increasingly precise quantum operations essential for QIP, as well as to conduct increasingly sophisticated experiments on few-ion systems. Ma-
ny questions remain however regarding how to implement the signiﬁcant classical apparatus required to control and measure many ions (and indeed any physical qubit under study) in a scalable way that furthermore does not compromise qubit quality.
This work draws on techniques in integrated optics to address this question. Planar-fabricated waveguides and gratings integrated with planar ion traps are demonstrated to allow optical addressing of individual 88Sr+ions 50 µm above the chip surface with diﬀraction-limited focused beams, with advantages in stability and scalability. Motivated by the requirement for low crosstalk in qubit addressing, we show also that intuitively designed devices can generate precisely tailored intensity proﬁles at-
 the ion locations, with diﬀraction-limited sidelobe intensities characterized to the 5×10−6 level in relative intensity up to 25 µm from the focus. Such devices can be implemented alongside complex systems in complementary metal-oxide-semiconductor (CMOS) processes. We show in addition that the multiple patternable metal layers present in CMOS processes can be used to create complex planar ion traps with performance comparable to simple single-layer traps, and that CMOS silicon avalanche photodio-
des may be employed for scalable quantum state readout. Finally we show initial results on integrated electro-optic modulators for visible light.
These results open possibilities for experiments with trapped ions in the short term, and indicate routes to achieving large-scale systems of thousands or more ions in the future. Though ion qubits may seem isolated from scalable solid-state technologies, it appears this apparent isolation may uniquely allow a cooperation with complex planar-fabricated optical and electronic systems without introducing additional decoherence.
Thesis Supervisor: Rajeev J. Ram Title: Professor of Electrical Engineering

Acknowledgments
It is a pleasure to reﬂect on all the people I can thank for having somehow made possible the work below. I’m very grateful to have been able to work with Rajeev Ram, and for his guidance over these years; this project absolutely wouldn’t have happened without him, and I think I’m aware (but probably not completely) of the patience he’s had with me at various points along this course. His intuition and sense for problems and solutions has been valuable sometimes in ways that I would realize later,-
 and without his openness to discussion and criticism I’d have learned and done far less.
I’m fortunate also to have been able to work with John Chiaverini and Jeremy Sage. Their expertise in trapped-ion experiment and enthusiasm in the project was invaluable in getting the project going, and I’ve continued to learn from them over the last few years. I’m thankful to them for their welcoming me into their group. Colin Bruzewicz and Robert McConnell were great people to work alongside in the lab and very helpful when questions arose.
I owe big thanks to many members of our group, past and present. I learned a lot from Jason Orcutt early in graduate school, much of which has shaped this work in signiﬁcant ways. Parthiban Santhanam I had many good discussions with, technical and otherwise; I particularly remember some around the time when I was trying to deﬁne a thesis topic which were very meaningful. Amir Atabaki more recently has always been willing to discuss any problems that arise, and has helped me out many times with iss-
ues in fabrication. Peter Han, Bill Herrington, Huaiyu Meng, Luca Alloatti, Jin Xue, Zheng Li, and Neerja Aggarwal, have been great coworkers and always helpful labmates. It has been a privilege also to get to work with Gavin West and Kramnik Daniel in the last few months as they begin along some related lines.
Isaac Chuang helped us start to see the virtues of trapped ions early on and encouraged us to start along this path; I’m thankful to him for that, as well as many stimulating conversations at various points along the way since. I want to thank Amira Eltony as well, for many encouraging early discussions and work together on CMOS traps, and Michael Gutierrez for discussions and camaraderie throughout, not to mention help in several moves in Cambridge and many good dinners.
A number of people in neighboring groups also deserve mention for lending time to help at various points. Jie Sun and Ehsan Hosseini helped me get started fabricating waveguide devices, and their early pointers and willingness to spend time discussing were a big help. Faraz Najaﬁ spent much time with me getting the cryostat used for APD measurements here working; Adam McCaughan, also from Karl Berggren’s group was a great help in questions related to the cryostat as well. Min Sun and Tomas Palacio-
s deserve thanks as well for lending equipment used for the high-voltage DC breakdown tests of the ﬁrst CMOS trap.
Mark Mondol’s work on MIT’s e-beam lithography systems and willingness to discuss problems/solutions were invaluable for fabrication, as was James Daley’s work in keeping many parts of the NSL running. I’d also like to thank the MTL staﬀ, and in particular Bernard Alamariu, Bob Bicchieri, and Vicky Diadiuk for the constant eﬀort that goes into keeping these facilities and tools running well.

I am fortunate to have had support from a DOE Science Graduate Fellowship for the ﬁrst few years of my graduate work; an NSF grant that supported much of the work in this thesis; from the iQuISE IGERT program at MIT; as well as from the Integrated Quantum Initiative at Lincoln Labs/MIT.
Finally, I don’t think I could imagine any of this without the support and encouragement I’ve had from my mother, father, and brother during these years and before – thank you.
6

Contents

Cover page

1

Abstract

3

Acknowledgments

5

Contents

7

List of Figures

11

1 Introduction: quantum manipulations of individual ions

15

1.1 Physics of trapped ion qubits . . . . . . . . . . . . . . . . . . . . . . 16

1.1.1 Radio-frequency electromagnetic Paul traps for ions . . . . . . 16

1.1.2 Carrier electronic transitions, single qubit operations . . . . . 18

1.1.3 Coupling to a motional mode; the Lamb-Dicke regime . . . . . 20

1.1.4 Two-qubit operations . . . . . . . . . . . . . . . . . . . . . . . 22

1.1.5 Atomic structure of commonly used ions; hyperﬁne and quadrupole

qubits . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24

1.1.6 Fluorescence readout of qubit state . . . . . . . . . . . . . . . 27

1.1.7 Cooling of trapped ions . . . . . . . . . . . . . . . . . . . . . . 28

1.2 Experimental implementation and approaches to scalable optics . . . 28

1.2.1 Bulk trap experiments . . . . . . . . . . . . . . . . . . . . . . 29

1.2.2 Planar electrode trap experiments . . . . . . . . . . . . . . . . 29

1.2.3 Approaches to scalable optics in planar traps; overview of work

presented here . . . . . . . . . . . . . . . . . . . . . . . . . . . 31

1.3 Summary of scaling challenges and those addressed here . . . . . . . 32

1.3.1 Scalable control apparatus . . . . . . . . . . . . . . . . . . . . 33

1.3.2 Heating rates . . . . . . . . . . . . . . . . . . . . . . . . . . . 33

1.3.3 Limitations to two-qubit gate ﬁdelities, and addressing . . . . 34

1.3.4 Speed limitations on motional-mode coupling in multi-ion systems 35

1.3.5 General ion movement, interconnections between distant ions . 35

1.4 Concluding comments and thesis overview . . . . . . . . . . . . . . . 36

2 Overview of the proposed approach

37

2.1 Routing, shaping, beam-forming, and detecting light within a trap chip 38

2.2 Waveguide-based routing and ion addressing . . . . . . . . . . . . . . 39

7

2.2.1 Focusing couplers for ion addressing . . . . . . . . . . . . . . . 41 2.3 Advantages and limitations of waveguide-based routing and focusing . 42
2.3.1 Laser power . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42 2.3.2 Raman gate operation, detuning and spontaneous scattering . 43 2.3.3 Pointing instability . . . . . . . . . . . . . . . . . . . . . . . . 44 2.3.4 Phase stability . . . . . . . . . . . . . . . . . . . . . . . . . . 47 2.3.5 Individual addressing . . . . . . . . . . . . . . . . . . . . . . . 47 2.3.6 Wavelength ranges and polarizations . . . . . . . . . . . . . . 49 2.3.7 Power handling and self-phase modulation eﬀec-
ts . . . . . . . 49 2.4 Parallel modulation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51 2.5 CMOS integration and on-chip photodetection . . . . . . . . . . . . . 52 2.6 Summary and overview of chapters ahead . . . . . . . . . . . . . . . . 55

3 Design, fabrication, characterization of focusing waveguide grating

couplers

57

3.1 Overview and previous work . . . . . . . . . . . . . . . . . . . . . . . 57

3.2 Grating design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58

3.2.1 Dimensional considerations for ion addressing . . . . . . . . . 58

3.2.2 Longitudinal design . . . . . . . . . . . . . . . . . . . . . . . . 61

3.2.3 Transverse design . . . . . . . . . . . . . . . . . . . . . . . . . 64

3.2.4 Predicted focus distance and waist for a given design . . . . . 66

3.3 Layout, fabrication, and material characterization . . . . . . . . . . . 67

3.3.1 Silicon nitride deposition and loss . . . . . . . . . . . . . . . . 69

3.4 Optical characterization . . . . . . . . . . . . . . . . . . . . . . . . . 70

3.4.1 Detailed characterization at focus . . . . . . . . . . . . . . . . 72

3.4.2 Polarization purity . . . . . . . . . . . . . . . . . . . . . . . . 76

3.5 Discussion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78

3.5.1 Possible improvements to sidelobe suppression in present devices 78

3.6 Conclusion and future work . . . . . . . . . . . . . . . . . . . . . . . 80

4 Ion addressing with waveguide optics

81

4.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81

4.2 Integrated waveguide trap design and fabrication . . . . . . . . . . . 82

4.2.1 Choice of substrate . . . . . . . . . . . . . . . . . . . . . . . . 82

4.2.2 PECVD and LPCVD SiN deposition . . . . . . . . . . . . . . 83

4.2.3 Chip layout and design . . . . . . . . . . . . . . . . . . . . . . 84

4.2.4 Grating design . . . . . . . . . . . . . . . . . . . . . . . . . . 86

4.2.5 Device fabrication . . . . . . . . . . . . . . . . . . . . . . . . . 86

4.3 Grating optical properties . . . . . . . . . . . . . . . . . . . . . . . . 88

4.3.1 Input grating couplers . . . . . . . . . . . . . . . . . . . . . . 89

4.4 Individual ion experiments . . . . . . . . . . . . . . . . . . . . . . . . 90

4.4.1 Coherent manipulations . . . . . . . . . . . . . . . . . . . . . 93

4.4.2 Individual addressing . . . . . . . . . . . . . . . . . . . . . . . 95

4.4.3 Crosstalk quantiﬁcation and comparison to existing experiments 95

4.4.4 Optical losses . . . . . . . . . . . . . . . . . . . . . . . . . . . 98

8

4.4.5 Polarization purity . . . . . . . . . . . . . . . . . . . . . . . . 99 4.4.6 Photo-induced charging and stability . . . . . . . . . . . . . . 101 4.5 Conclusion and future work . . . . . . . . . . . . . . . . . . . . . . . 101 4.5.1 Direct ﬁber coupling . . . . . . . . . . . . . . . . . . . . . . . 102 4.5.2 Waveguide losses . . . . . . . . . . . . . . . . . . . . . . . . . 102

5 CMOS integration and silicon avalanche photodiodes

103

5.1 CMOS-fabricated ion trap . . . . . . . . . . . . . . . . . . . . . . . . 103

5.1.1 Design and implementation . . . . . . . . . . . . . . . . . . . 103

5.1.2 CMOS trap characterization . . . . . . . . . . . . . . . . . . . 109

5.2 Integrated silicon avalanche photodiodes . . . . . . . . . . . . . . . . 111

5.2.1 Trap-integrated device layout and design . . . . . . . . . . . . 112

5.2.2 CMOS APD designs and room temperature DC characteristics 113

5.2.3 STI-GR device characterization and low-temperature measure-

ments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117

5.2.4 Full device characterization . . . . . . . . . . . . . . . . . . . 125

5.3 Conclusion and summary . . . . . . . . . . . . . . . . . . . . . . . . . 126

6 Visible electro-optic modulation

127

6.1 Approaches to modulation . . . . . . . . . . . . . . . . . . . . . . . . 127

6.2 Silicon nitride/Lithium niobate hybrid waveguides . . . . . . . . . . . 128

6.2.1 Simulated waveguide properties . . . . . . . . . . . . . . . . . 128

6.2.2 Approximate expected electro-optic properties and modulator

designs . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132

6.3 Fabrication . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133

6.3.1 Electron-beam proximity eﬀect on LiNbO3 . . . . . . . . . . . 133 6.4 Sample 1: uncontacted waveguide devices . . . . . . . . . . . . . . . . 136

6.4.1 Designs included and brief background on ring resonators . . . 136

6.4.2 Characterization of IR ring resonators and MZIs . . . . . . . . 139

6.4.3 Visible waveguides . . . . . . . . . . . . . . . . . . . . . . . . 143

6.5 Sample 2: contacted MZ and ring devices . . . . . . . . . . . . . . . . 143

6.5.1 Fabrication . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144

6.5.2 674 nm Mach-Zehnder modulator . . . . . . . . . . . . . . . . 145

6.5.3 EO tunable infrared rings . . . . . . . . . . . . . . . . . . . . 147

6.6 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 148

7 Conclusion, future work, and outlook

149

7.1 WG devices for blue and UV wavelengths . . . . . . . . . . . . . . . . 149

7.1.1 Alumina as a core material for blue/UV wavelengths . . . . . 150

7.1.2 Materials for electro-optic modulators . . . . . . . . . . . . . . 151

7.1.3 Characterization of waveguide nonlinearities and damage thresh-

olds in the visible . . . . . . . . . . . . . . . . . . . . . . . . . 151

7.2 Direct ﬁber attaching, and silicon substrates . . . . . . . . . . . . . . 152

7.3 Short-term ion experiments . . . . . . . . . . . . . . . . . . . . . . . 153

7.3.1 High-ﬁdelity, fast two-qubit gates . . . . . . . . . . . . . . . . 153

9

7.3.2 Transport gates in a 2D geometry . . . . . . . . . . . . . . . . 153 7.3.3 Optical addressing of microwave operations . . . . . . . . . . . 154 7.4 APDs and devices for ion movement . . . . . . . . . . . . . . . . . . 154 7.5 Errors and scale . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 155 7.5.1 Noise/inﬁdelity sources and magnitudes in this approach . . . 155 7.5.2 Concluding remark, integration with isolated qubits . . . . . . 158

A Motivation for constraint on curvature radius in grating design 159

B E-beam write order and focusing grating sidelobe proﬁles

161

Bibliography

165

10

List of Figures
1-1 Electrode conﬁgurations and pseudopotential proﬁles for bulk and planar linear paul traps . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
1-2 Schematics of transition in two-qubit gates . . . . . . . . . . . . . . 23 1-3 Level structures of commonly used ions . . . . . . . . . . . . . . . . 25 1-4 Illustration of readout process and errors . . . . . . . . . . . . . . . . 28 1-5 Overview of some example scalable optics approaches . . . . . . . . . 30 1-6 Schematic of approach envisioned here . . . . . . . . . . . . . . . . . 32
2-1 Second detail schematic . . . . . . . . . . . . . . . . . . . . . . . . . 38 2-2 Example mode proﬁles of dielectric waveguides . . . . . . . . . . . . . 40 2-3 Bend-loss vs. bend radius for respresentative silicon nitride waveguides
at λ =674 nm and 1092 nm. . . . . . . . . . . . . . . . . . . . . . . 41 2-4 Pointing instability beneﬁts with waveguide coupling . . . . . . . . . 46 2-5 2 ion spacings for typical axial trap frequencies . . . . . . . . . . . . . 48 2-6 Phase shifts per unit length due to self-phase modulation vs. power . 50 2-7 Detector collection eﬃciency as a function of size . . . . . . . . . . . 53
3-1 Schematic and overview of focusing grating design . . . . . . . . . . . 59 3-2 Dimension considerations for integrated grating design . . . . . . . . 60 3-3 Coordinate deﬁnition for calculation of desired ﬁeld in the grating plane 62 3-4 Example calculation of grating parameters from 2D cross-section sim-
ulations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63 3-5 Focusing grating design parameters . . . . . . . . . . . . . . . . . . . 65 3-6 Cosine-proﬁle waveguide mode ﬁeld and maximally overlapping Gaus-
sian proﬁle . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 67 3-7 Mask layout for grating device, with inset showing discretization on a
5 nm rectangular grid. . . . . . . . . . . . . . . . . . . . . . . . . . . 68 3-8 SEM image of slightly underexposed grating feature, showing lines lift-
ing oﬀ (obtained using a 0.28 µs dwell time with a 2 nA beam current, equivalent to 0.11 µs with 5 nA for comparison to the numbers given in the text) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70 3-9 Prism coupling ﬁlm characterization . . . . . . . . . . . . . . . . . . . 71 3-10 SEM image of input ﬁber coupler . . . . . . . . . . . . . . . . . . . . 72 3-11 Measured beam proﬁles for fabricated grating device . . . . . . . . . 73
11

3-12 Experimental characterization of low-intensity sidelobes in radiated beam proﬁle at z = 50 µm. . . . . . . . . . . . . . . . . . . . . . . . . 75
3-13 Polarization purity characterization at focus . . . . . . . . . . . . . . 77 3-14 Expected improvement to sidelobe proﬁle using larger grating . . . . 79
4-1 Schematic of integrated waveguide and ion trap device . . . . . . . . 85 4-2 Schematic and optical characterization of focusing grating devices . . 87 4-3 Micrograph of input couplers used for input coupling to free-space
beams, with inset showing SEM image of curved grating lines near center. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 89 4-4 Relevant level structure of 88Sr+. . . . . . . . . . . . . . . . . . . . . 91 4-5 Experimentally observed spectra of the S-D manifold . . . . . . . . . 92 4-6 Coherent manipulations and ion addressing with the grating-generated beam . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 94 4-7 EMCCD images of 5 ions, with the center io-
n addressed and undergoing quantum jumps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95 4-8 Crosstalk quantiﬁcation via intensity measurements and via ion excitation probability using the grating-generated beam . . . . . . . . . . 96 4-9 Waveguide loss measurements before and after metal deposition . . . 99 4-10 SEM image of fabricated waveguide cross-section under metal electrodes, on quartz. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100
5-1 “Back-end” stackup of the 90-nm CMOS process used for the foundry trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104
5-2 CMOS trap chip micrograph and perspective . . . . . . . . . . . . . . 105 5-3 Images of mask layout for CMOS trap . . . . . . . . . . . . . . . . . 107 5-4 Micrograph of a diced and wirebonded CMOS trap, with inset showing
the image of a pair of ions trapped. . . . . . . . . . . . . . . . . . . . 108 5-5 Leakage current in DC HV measurement on CMOS trap chip . . . . . 109 5-6 Heating reate measurement in CMOS foundry trap . . . . . . . . . . 110 5-7 AFM measurement of CMOS trap surface roughness . . . . . . . . . 111 5-8 APD trap chip micrograph and mask layout of STI GR device . . . . 112 5-9 Layers involved in main APD designs attempted . . . . . . . . . . . . 114 5-10 Dark I-V Characteristics of main APD designs -
attempted . . . . . . . 115 5-11 Dark and illuminated I-V characteristics of STI GR devices . . . . . . 116 5-12 Schematic of passive quenching circuit used . . . . . . . . . . . . . . 118 5-13 Pulse traces observed in Si APD with current-mode quenching . . . . 119 5-14 Dark count rates at room temperature for STI GR devices of various
diameters . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120 5-15 Dark count rates with 10 µm-diameter STI GR APD at various tem-
peratures . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 120 5-16 DC photocurrent measurement as a function of temperature at 674 nm 121 5-17 Observed afterpulse bunches and dependence on quench resistance . . 122 5-18 Dark counts and response to low light 405 nm illumination at 90 K . 124
12

6-1 Eﬀective indices of TE modes for thin LiNbO3 slabs at λ = 674 nm and 1550 nm . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129
6-2 Simulated optical mode proﬁle at λ = 674 nm for a SiN/LiNbO3 hybrid waveguide, together with DC ﬁeld proﬁle from adjacent contacts on xcut LiNbO3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130
6-3 Simulated bend losses for hybrid waveguides at λ = 674 nm . . . . . . 131 6-4 Electron range plots for Si and LiNbO3 substrates . . . . . . . . . . . 134 6-5 SEMs of written features showing artifacts from proximity eﬀect . . . 135 6-6 Mode proﬁles of waveguides as fabricated . . . . . . . . . . . . . . . . 136 6-7 Optical micrograph of fabricated devices on LiNbO3 . . . . . . . . . . 137 6-8 Ring resonator transmission spectra after anneals . . . . . . . . . . . 140 6-9 Measured spectra of ri-
ng resonators at IR wavelengths, with theoretical
ﬁts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141 6-10 Transmission spectra of a high-Q ring as at various applied biases . . 142 6-11 Waveguide loss measurement at 674 nm . . . . . . . . . . . . . . . . . 143 6-12 Alignment mark patterned in SiN layer for e-beam registration . . . . 144 6-13 674 nm Mach-Zehnder modulator in SiN-on-LiNbO3 . . . . . . . . . . 146 6-14 LiNbO3-based ring resonator tuning . . . . . . . . . . . . . . . . . . . 147 7-1 Losses in single-mo-
de Si3N4 waveguides at various wavelengths . . . . 150 7-2 Schematic of multi-layer trap device (only ground plane shown for sim-
plicity), together with waveguides on a silicon substrate. . . . . . . . 152 A-1 Simulated and measured emission proﬁles in waveguide plane, showing
mode distortion in grating region . . . . . . . . . . . . . . . . . . . . 160 B-1 Illustration of write orders employed for focusing grating devices of Ch.
3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 162 B-2 Comparison of sidelobe proﬁles obtained with diﬀerent e-beam lithog-
raphy write orders . . . . . . . . . . . . . . . . . . . . . . . . . . . . 163
13

14

Chapter 1
Introduction: quantum
manipulations of individual ions
The ability to precisely engineer the quantum states of many-particle systems would oﬀer unprecedented abilities to study the behavior of large entangled and quantum coherent systems and the space between quantum and classical, simulate other quantum systems in ways that are intractable with classical computation, and solve certain problems with quantum computers for which no eﬃcient classical algorithms are known [NC10]. The experimental realization of such systems gained much traction in the mid-
 1990s and around the time of Shor’s discovery of the factoring algorithm [Sho97] and has been an ongoing eﬀort with increasing momentum for roughly 1520 years now. Individual ions conﬁned in electromagnetic potentials and controlled with laser light were among the ﬁrst studied physical systems for implementation [MMK+95], and a number of groups have made much progress honing the basic operations required for computation, reducing error rates to levels workable with error correcting codes [BHL+16,-
 GTL+16], and in experimental contexts which, with some imagination, can be envisioned to scale to larger systems [KMW02, MK13]. Many authors have indicated that no fundamental obstacles to building a large system for QIP are known – and the breadth of technical advances in the basic operations makes it look increasingly as though the practical situation may be tenable as well. But one of the major outstanding challenges, which has perhaps received less attention so far in communities focused on a-
ny physical qubit system, is reﬂected in the question of how exactly to implement the signiﬁcant classical control apparatus, both electrical and optical, required to interact with the multi-qubit quantum system.
In this thesis we present approaches to creating the optical and electronic systems required for quantum state control of trapped ions, as well as readout via ﬂuorescence detection; such approaches could be implemented in CMOS foundry processes, which would allow leveraging of a signiﬁcant established infrastructure for integrating complex electrical/optical systems. The approach here relies on new optical structures for implementing known physical processes in the ions in a scalable fashion, and -
aims to combine the scalable nature of planar fabricated waveguide devices and electronics with the uniformity and isolation from environment, essential to precise quantum manipulation, of individual atoms.

16

CHAPTER 1. INTRODUCTION: QUANTUM MANIPULATIONS OF INDIVIDUAL IONS

Before proceeding to discuss the approach taken in this work and the relevant devices, this chapter aims to review very generally the physics of the trapped ion system to facilitate discussion of the role of optics in constructing larger systems. The aim is primarily to establish the role of optics and the general state of the art in trapped-ion systems, and to point to the relevant literature, in a way that may be useful to readers with minimal background in trapped ions. We ﬁrst give an overview-
 of the physics of trapped-ion systems, starting with the basic ideas of RF Paul traps, and then give an overview of the theory of laser-ion interactions as used for quantum gates with trapped ions. The diﬀerent ion species used in various experiments are discussed, as well as the method for quantum state readout and laser cooling. Next the techniques for optics employed in present ion experiments are described, together with prior work on optics of some ﬂavor integrated with planar traps. Our app-
roach is brieﬂy summarized (Chapter 2 discusses it in far more detail), and ﬁnally we attempt to put into context the scope of the challenges to scaling trapped-ion QIP systems that may be addressed by this work.

1.1 Physics of trapped ion qubits
Quantum information processing with trapped ions relies on a variety of atomic techniques built up over decades, and comprising very generally the stable conﬁnement of individual atoms in vacuum, and the manipulation and measurement of their electronic states and vibrations. This section aims to describe the relevant techniques for ion qubits, to establish a context for the devices developed in this work.
1.1.1 Radio-frequency electromagnetic Paul traps for ions
Unlike traps for neutral atoms and particles that rely on electric or magnetic dipole forces, strong forces are exerted on ions via the Coulomb interaction, which oﬀers a strong conﬁnement mechanism and indeed presents a challenge to conﬁnement via optical dipole forces owing to inevitable stray ﬁelds in practice [SEHS10]. A stable potential extremum for a charged particle in vacuum and a static electric ﬁeld is prohibited by Gauss’ law (∇ · E = 0) and Earnshaw’s theorem in particularly, but stabl-
e orbits exist in both static electric/magnetic ﬁelds (Penning traps), or in quadrupole electric ﬁeld conﬁgurations oscillating at radio frequencies. The later approach forms the basis for Paul traps, as are most commonly used in quantum information experiments; such traps oﬀer very deep potentials (trap depths on the order of 100 K), and often lifetimes of days or longer, and with very small ﬁeld-induced level shifts on the trapped species. All of these features are beneﬁcial both for demonstrate-
d ion trap atomic clocks and early quantum processors. The most salient features of ion traps for quantum information experiments are very brieﬂy reviewed here.
The dynamics of charged particles moving in oscillating quadrupole ﬁelds are described by Matthieu equations [Gho95], which can be solved exactly, and whose solutions along each dimension include “secular” motion at a frequency governed by the steepness of the potential and (typically) small-amplitude “micromotion” at the

1.1. PHYSICS OF TRAPPED ION QUBITS

17

(a)

(b)

(c)

DC RF GND RF DC

Figure 1-1: (a) Schematic electrode conﬁguration of RF and DC control electrodes
for a bulk linear paul trap, and RF pseudopotential plots for a bulk linear paul trap (b) and a planar electrode paul trap (c); ﬁgures from [CBB+05].

frequency of the oscillating potential. When the ion mass is large enough for a given

spatial potential variation and temporal oscillation frequencies, its inertia is great

enough that the high-frequency micromotion can be neglected to a good approxi-

mation, and in this limit the dynamics are well described by the “pseudopotential”

[CBB+05]:

q2 U (r) = 2mωr2f

E2(r) ,

(1.1)

where q and m are the particle’s charge and mass, respectively, and ωrf denotes the angular RF oscillation frequency. For a quadrupole ﬁeld arrangement this potential is

harmonic; the ion’s low frequency “secular” motion in this harmonic pseudopotential

governs much of the dynamics.

In a typical “linear” trap, a quadrupole ﬁeld is generated in two dimensions x

and y, and ions are weakly bound along z only by static potential produced by DC

voltages on control segments, as illustrated schematically in Fig. 1-1(a). Typical RF

frequencies are of order a few 10s of MHz, and secular oscillation frequencies in the

radial directions (x and y in these ﬁgures) determined by the RF voltage applied

are typically a few MHz. Along the direction of the trap axis (z), the oscillation

frequency is set by the DC control voltages applied. Conﬁnement is usually weaker in

this direction to allow multiple ions to arrange into a “Coulomb crystal”, where the

spacing between ions is set by the balance between the conﬁning potential and their

mutual Coulomb repulsion. N ions in such a crystal then oscillate according to 3N

normal modes, each with its own phonon frequency; importantly, the center-of-mass

(COM) mode of motion is, in a purely harmonic potential, independent of N . This

frequency can be widely tuned in experiments based on the DC control voltages, and

is usually in the range of a few 2π × 100 kHz to 1 MHz. For many of the interactions

with a single motional mode, such a selected mode of the ion or ion crystal is referred

to as the “trap frequency” ωt. The ion spacing in a linear crystal depends of course on the ion mass, and conﬁning

potential, and is nonuniform for N ≥ 4; for two ions, an analytic solution exists for the spacing between 2 ions s2 = 21/3s and between 3 ions s3 = (5/4)1/3s, where the

18

CHAPTER 1. INTRODUCTION: QUANTUM MANIPULATIONS OF INDIVIDUAL IONS

characteristic spacing s is [WMI+97]:

q2

1/3

s=

;

4π 0mωz2

(1.2)

numerical values corresponding to this spacing are plotted later on in Fig. 2-5 for a few ion species.
The bulk linear traps have been used for many of the scientiﬁc experiments thus far, while planar electrode trap structures, with the potentials for multiple electrodes in complex geometries to manipulate large populations of ions, are recognized as promising candidates for large-scale systems. The reduced optical access, as well as diﬃculties posed by the proximity to surfaces, are some of the major additional challenges posed by such structures for current experiments though, to be discussed fur-
ther below.

1.1.2 Carrier electronic transitions, single qubit operations

In the following we review the quantum description of the interaction of a general electronic two-level system with a classical radiation ﬁeld. “Carrier” electronic transitions refers to transitions that leave the motional state of the ion unchanged, and which capture the physics of single qubit operations; the next section will include coupling to a motional mode of the trap in “sideband” transitions, essential for multi-qubit operations.
A two-level system coupled to a radiation ﬁeld is described by the Hamiltonian

Hˆ = Hˆ0 + HˆI,

(1.3)

where Hˆ0 gives the evolution of the system in the absence of the radiation, and HˆI represents the atom-ﬁeld interaction. For excited and ground states e| and g|, separated in energy by ωa, we can write

Hˆ0 = ωa|e e|,

(1.4)

where the labels are chosen to correspond to qubit notation and the energy of |g is 0. The interaction Hamiltonian represents coupling between the states at the Rabi frequency Ω; the expression for this frequency as a function of the ﬁeld(s) strength at the ion depend on the nature of the transition and the manner of addressing, and for now we suppose a dipole interaction, such that

HˆI = −dˆ· ˆrE(t),

(1.5)

with the dipole operator dˆ = erˆ (whose matrix elements are deﬁned as a|dˆ|b =
µa,bˆd), electric ﬁeld polarization unit vector ˆr, and oscillating electric ﬁeld E(t) = Ee−iωrt + E∗eiωrt. Writing the dipole operator in terms of its matrix elements and
assuming the ﬁeld and atomic dipole polarization are aligned, and letting µ = µg,e =

1.1. PHYSICS OF TRAPPED ION QUBITS

19

µ∗e,g, the interaction Hamiltonian is

HˆI = − (|g e|µ + |e g|µ∗) · E e−iωrt + E ∗eiωrt .

(1.6)

With the wavefunction |ψ = c0|g +c1|e and the Schro¨dinger equation Hˆ |ψ = i |ψ˙ , transforming the wavefunction so as to rotate at the radiation frequency so that the atomic wavefunction is described by c˜0 = c0 and c˜1 = c1eiωrt (the energy spacing in the rotating frame is now given by - δ with the detuning δ = ωr − ωa), and neglecting terms that oscillate as e2iωrt, results in the following two equations for the
wavefunction amplitudes:

i c˜˙1 = − δc˜1 − Eµc0(t) i c˜˙0 = −E∗µ∗c˜1.

(1.7) (1.8)

Deﬁning the Rabi frequency Ω = Eµ/ , and considering the resonant case δ = 0, we have simply

c˜˙1 = iΩc˜0, c˜˙0 = iΩ∗c˜0,

(1.9) (1.10)

and hence also

c¨˜1 = − |Ω|2 c˜1 c¨˜0 = − |Ω|2 c˜0.

(1.11) (1.12)

The neglecting of the fast varying term is commonly known as the “rotating wave
approximation” (RWA), valid for radiation ﬁelds near resonance δ ωa, ωr, and weak so that Ω ωr; under these conditions, if the state initially is |0 and we let Ω = |Ω| eiφ, we have

c˜0 = cos(|Ω| t) c˜1 = ieiφ sin(|Ω| t).

(1.13) (1.14)

This particular case illustrates that the magnitude of the applied ﬁeld sets the rate of transfer between the states, and that the phase φ of the applied ﬁeld is imprinted onto the excited state amplitude arising from the interaction.

In this derivation for explicitness the rotating frame transformation and rotating wave approximation were made after expanding the Hamiltonian into equations for the amplitudes – both could have been applied to the Hamiltonian to begin with, and the Hamiltonian describing the system in this frame and approximation would be

Hˆ˜ = − δ|e e| − i [Ω|e g| + Ω∗|g e|] ,

(1.15)

which will be the starting point for consideration of motional mode coupling in the next section.

20

CHAPTER 1. INTRODUCTION: QUANTUM MANIPULATIONS OF INDIVIDUAL IONS

Clearly a resonant ﬁeld can induce oscillations of probability amplitudes between the two electronic states; to see resonant ﬁelds of controlled phase and amplitude can map any initial state to any other state and thus carry out arbitrary single qubit operations, a more general picture based on the Bloch sphere representation is helpful. It is possible to express the movement of the state vector on the Bloch sphere as a rotation around the unit vector [HR13]

−δzˆ − |Ω| sin φxˆ + |Ω| cos φyˆ

nˆ =

,

δ2 + |Ω|2

(1.16)

with a degree of rotation controlled by the time of interaction (pulse length). The surface of the Bloch sphere being a two-dimensional one, rotations around two axes are suﬃcient to map between any pair of states; hence, with δ = 0, rotations about both x and y axes are possible, and hence arbitrary single qubit operations are possible with amplitude and phase control of resonant light.

1.1.3 Coupling to a motional mode; the Lamb-Dicke regime

In trapped ions, shared motional modes of multiple ions in a single harmonic potential

are crucial to the two-qubit operations to be discussed below, and which together with

the single qubit operations eﬀected by resonant light form a complete basis for state

manipulation [NC10]. This section describes the physics of the coupling between the

“internal” ion state (i.e. the valence electron level) and its external state, described by

the quantum state of the harmonic oscillators corresponding to its motional modes.

Considering near-resonant excitation of just a single motional mode illustrates the

essential physics.

Including the contribution from this motional mode, the Hamiltonian with radia-

tion turned oﬀ is now

Hˆ0 = ωa|e e| + ωta†a,

(1.17)

where a† and a are the creation and annihilation operators the motional mode har-

monic oscillator of trap frequency ωt, and the ground and excited states of the qubit are now labeled |g and |e to avoid confusion with the motional eigenstates

|0 , |1 , |2 , etc. The energy levels of this “bare” hamiltonian form a ladder of states

|g, n and |e, n , with energies equal simply to the sum of the internal and motional

energies.

A very similar Hamiltonian as in Eq. 1.15 is used to describe coupling between

these eigenstates, with the simple addition of phase seen by the ion depending on the

ion position. That is, if the ion oscillation is along zˆ and the electric ﬁeld of a classical beam propagating with angle θ to zˆ is E(z, t) = Eeikz cos θ−iωrt, the interaction Hamil-

tonian in the RWA (which corresponds to neglecting terms leading to oscillations at

2ωr) is

HˆI = − Ω|e g|eikzˆ cos θ−iωrt − Ω∗|g e|e−ikzˆ cos θ+iωrt,

(1.18)

where coupling between the classical electric ﬁeld and the quantized ion motion is

1.1. PHYSICS OF TRAPPED ION QUBITS

21

described via the atomic position operator zˆ = 2mωt aˆ + aˆ† , which has taken the place of z in the otherwise classical ﬁeld. Here a and a† are the annihilation and creation operators of the relevant motional harmonic oscillator mode.

Substituting the creation and annihilation operators in for zˆ, the exponentials are proportional to e±iη(aˆ+aˆ†), where

k2 η = 2mωt cos θ ≡ η0 cos θ

(1.19)

is known as the Lamb-Dicke parameter. η0 can be expressed equivalently as

η0 =

Er = 2πa0 ,

ωt

λ

(1.20)

where Er =

2k2 2m

is the recoil energy imparted to the ion of mass m after scattering a

photon of momentum k, and the ground state wavefunction extent is a0 = 2mωt , typically on the order of 10 nm. These two descriptions of the maximum (with beam

propagating along the trap axis) Lamb-Dicke parameter η0 show it describes both the extent of the ground state wavefunction relative to the wavelength and the ratio of the

recoil energy to the motional mode quanta; ion traps are typically quite tight and this

parameter is typically around 0.01 − 0.3, depending on the particular setup. When

η0 is much less than 1, the energy delivered to the ion by a scattering event is small compared to the quantum of energy in the motional mode, and so the probability for

a photon to excite a phonon is low in proportion to η (and tunable via the angle θ,

which reﬂects the photon momentum along the direction of ion oscillation) – and the

probability of multiple phonons even more so (by successive powers of η0).

The details of the derivation are presented elsewhere (e.g. in Ch. 8 of [HR06]), but here we want to note that, in an interaction picture with respect to the bare atom/motional mode Hamiltonian, by expanding the exponential as a power series of η, we obtain a series of terms, indexed by q (any integer), each term proportional to (iη)qei(ωa−ωr+qωt). When the laser frequency is resonant (ωr = ωa + qωt) such that one of these time dependencies vanishes, that single term is time-independent and the ot-
hers oscillate at at least ωt. When the dynamics are slow compared to the trap frequency (Ω << ωt), a second RWA allows neglecting these ωt time-scale oscillations. And in this case, we can consider separately the dominant term in each of the three situations, corresponding to q = 0, the carrier transition (when the laser is tuned to ωa, and q = ±1, the “red” and “blue” sideband transitions, in which the laser is tuned to a sideband of the carrier transition so as to excite or de-excite one motion-
al quantum.

The time-independent terms corresponding to these three resonance conditions,

22

CHAPTER 1. INTRODUCTION: QUANTUM MANIPULATIONS OF INDIVIDUAL IONS

to ﬁrst order in η (valid for η << 1), are:

Hc ≈ − Ω(|e g| + |g e|) Hr ≈ − Ωη(a|e g| − a†|g e|) Hb ≈ − Ωη(a†|e g| − a|g e|)

(1.21) (1.22) (1.23)

where Hc, Hr, and Hb represent the dominant terms when the laser frequency addresses transitions on the carrier, and red and blue sidebands.
When any of these terms operates on states |g, n , representing the atom in its internal ground state and the motional mode in a Fock state with n motional excitations, they drive transitions that excite the internal state to |e and preserve n (carrier transition), reduce n by 1 (red sideband) or increase n by 1 (blue sideband) at eﬀective Rabi frequencies Ωn,n, Ωn,n−1, and Ωn,n+1 that evaluate to (again to lowest order in η):

Ωn,n

≈

(1 − η2n)Ω √

Ωn,n−1 ≈ η√nΩ

Ωn,n+1 ≈ η n + 1Ω,

(1.24) (1.25) (1.26)

indicating the dependence of the transition strengths both on η and the motional mode occupancies.

1.1.4 Two-qubit operations
The coupling to collective motional modes described in the previous section oﬀers a powerful mechanism for coherent interaction and is the basis for two-qubit gates in trapped ions. The ﬁrst proposed such gate is the Cirac-Zoller gate [CZ95], which in fact sparked work on experimental quantum computation generally as the ﬁrst practical two-qubit gate proposal. The process is illustrated in the ﬁgure reproduced in the top panel of Fig. 1-2. Here, two ions are cooled to the ground state, and both ar-
e generally in a superposition of the |0, g and |0, e states, where the 0 indicates the number of motional quanta. A red sideband π-pulse (i.e. a pulse with time and amplitude chosen so that Ωn,n−1(t)tdt = π/2, and the population is wholly transferred on the resonant transition) applied to ion 1 transfers its population in |0, e 1 to |1, g 1; this motional quantum excited is of a mode shared by the two ions, and this now allows an operation on ion 2 that can be conditioned on the motional mode bei-
ng excited, namely in another red sideband coupling from the ground state to some auxiliary level. A 2π pulse applied to this transition does not alter population, but induces a π phase shift on the |1, g 2 state. On the other hand the |0, g 2 state would have been coupled to no red sideband transition, and would not have acquired this phase. Finally the ion 1 is returned to its original state by another π-pulse on

1.1. PHYSICS OF TRAPPED ION QUBITS

23

Figure 1-2: (Top) electronic/motional transitions involved in a two-qubit CiracZoller gate, and (bottom) in a Molmer-Sorensen gate. Images from [HRB08].

the red sideband, completing the conditional phase shift summarized in the mapping:

|g 1|g 2 → |g 1|g 2 |e 1|g 2 → −|e 1|g 2 |g 1|e 2 → |g 1|e 2 |e 1|e 2 → |e 1|e 2

(1.27) (1.28) (1.29) (1.30)

This technique relies on the ions being precisely in the ground state of motion – any excitation would allow the red sidebands to be addressed on the second ion to some extent regardless of ion 1’s state. This places considerable demands on ions being in the absolute ground state of motion prior to beginning the gate, and is a challenge in achieving high ﬁdelities with this gate technique [SKHR+03].

Another kind of interaction, used in what are referred to as Molmer-Sorensen

type gates, was later proposed which is less sensitive to ions being in the ground state

[SM99, SM00]. Here also the interaction is due to a shared motional mode, but both

ions are illuminated by two frequencies simultaneously, at frequencies ωa + (ωt + δ)

and ωa − (ωt + δ), where ωt is the motional mode frequency and δ a detuning. The

two frequencies sum to 2ωa, corresponding to the energy spacing between |g 1|g 2

and |e 1|e 2, and were shown to be able to generate the transformation |g 1|g 2 →

√1 2

(|g

1|g

2

−

i|e

1|e

2)in

a

time

π√ τ = K,
ηΩ

(1.31)

24

CHAPTER 1. INTRODUCTION: QUANTUM MANIPULATIONS OF INDIVIDUAL IONS

for

an

appropriate

detuning

such

that

ηΩ ωt−δ

=

√1 ,
2K

with

K

any

integer

and

Ω

the

single-qubit Rabi frequency [SM00]. In addition to relaxing the need for ground-state

cooling, this gate does not require individual addressing of each of the two so long as

those qubits involved in an operation can be addressed together. The highest-ﬁdelity

multi-qubit gates have employed this interaction, or the closely-related geometric

phase gate [SKK+00, LDM+03, BKRB08b, Bal14], which have various relative tech-

nical advantages and disadvantages [LBD+05]. Of course, though implementation of

this gate on two ions alone does not require individual addressing of either ion, to

implement this gate between any given two ions of a larger system would of course

require some form of addressing, whether purely optical, or together with appropriate

motion in and out of addressed sites.

1.1.5 Atomic structure of commonly used ions; hyperﬁne and
quadrupole qubits
Having summarized the quantum coherent operations fundamental to state manipulation, we now consider the particular features of real ions and the possibilities for implementing such interactions. Though our experiments will focus on the 88Sr+ ion, many of the concepts in this thesis are more generally applicable to diﬀerent ion species and qubit types, e.g. the 40Ca+ or 43Ca+ ions used by the Innsbruck and Oxford groups and the 9Be+ ion used by the Colorado group. We brieﬂy discuss the two major i-
mplementations of qubits – those based on narrow linewidth quadrupole transitions and those based on hyperﬁne ground state levels, each having diﬀerent advantages and disadvantages.
Fig 1-3 shows the valence electron level structures for the major experimentally investigated ions. Hyperﬁne qubits are encoded between particular Zeeman levels in the s-orbital manifold of the 9Be+ and 171Yb+ ions by the NIST groups and Maryland/Duke groups, respectively, with transition frequencies given by the hyperﬁne structure splitting of 1.25 GHz and 12.6 GHz. Optical qubits, on long-lived dipole-forbidden quadrupole transitions, are used in the 88Sr+ and 40Ca+ by the MIT/Lincoln Labs group-
s and the Innsbruck group; both of these species have 0 nuclear spin and thus no hyperﬁne structure. The 43Ca+ qubit oﬀers an accessible optical qubit in addition to having a nuclear spin, and has a complex level structure that would allow the combination of both qubits, for manipulations and memory separately; a major diﬃculty it poses is in pumping the ground-state electron into just a single state in the complex ground state manifold. In all cases, S-P transitions at wavelengths spanning 310 42-
0 nm are used for Doppler cooling and readout.
Hyperﬁne and optical qubits have diﬀerent advantages. Due to the ∝ ω3 scaling of the photon spontaneous emission rate, the GHz transitions in hyperﬁne qubits have very long intrinsic lifetimes as compared to the spontaneous emission-limited optical qubits (lifetimes of 390 ms and 1.2 s for Sr and Ca), and are instead limited in coherence primarily by magnetic ﬁeld noise (aside from inﬁdelities in gate operations). The diﬀerent mechanisms for addressing and manipulation however pose diﬀerent compro-
mises. For the hyperﬁne qubits, coupling between the qubit states,

1.1. PHYSICS OF TRAPPED ION QUBITS

25

(a)

(b)

(c)

(d)

(e)

Figure 1-3: Example level structures of experimentally investigated ions: (a) 9Be+ used by the NIST group, ﬁgure from [HRB08]; (b) 171Yb+ used by the Maryland and Duke groups [MBB+13]; (c) 88Sr+ by the MIT and Lincoln Labs groups [Wan12]; (d) 40Ca+ [HRB08]and (e) 43Ca+ [BKRB08a], used and considered by the Innsbruck,
Oxford, and Berkeley groups.

26

CHAPTER 1. INTRODUCTION: QUANTUM MANIPULATIONS OF INDIVIDUAL IONS

as well as to motional modes, are carried out with stimulated Raman transitions by pairs of laser beams, each detuned from the resonant transition and with diﬀerence frequency equal to the hyperﬁne splitting. Experimental complexity is not obviously much greater on one side or the other, because very narrow (Hz-level) linewidth is required for the optical qubits to preserve the spontaneous-emission limited coherence time; whereas although the Raman approach requires two diﬀerent frequencies, the f-
requency diﬀerence is the most important parameter in the technical noise, which can be low without great diﬃculty when both frequencies are derived from a single laser for the 9Be+ ion; for the 171Yb+ ion the larger hyperﬁne-structure splitting makes this somewhat diﬃcult (owing to the ﬁnite bandwidths of AOMs, although electrooptic modulators can address this [OYM+07]), though high ﬁdelity gates have been reported with this qubit as well [BKGN+16]. Optical frequency combs may allow convenient ad-
dressing of this diﬀerence frequency [CMQ+10, HMM+10] and with the possibility of faster gate times than those based on modulated CW lasers, but high ﬁdelity operations have yet to be demonstrated with such an approach.
Spontaneous emission from virtually excited states in the stimulated Raman process, however, can be a limitation to the ﬁdelity of such transitions, although the probability of excitation of such states can be decreased by increasing detuning of the lasers (and also the intensity, to maintain a given operation speed) [WMI+97, OIB+07]. The spontaneous emission probability of the D-levels in the optical qubits over a gate time can more easily be low (10−4 - 10−5) for reasonable gate times and lower -
intensities, making them appealing from this perspective for both optically-addressed single and two-qubit gates.
The long coherence time of the hyperﬁne states, especially those in “clock” states, makes them attractive for memory [LOJ+05]. And they oﬀer the possibility of very high-ﬁdelity microwave-driven single qubit operations [HAB+14]. However, the long wavelength of microwaves implies that, due to the Lambe-Dicke parameterdependence (1/λ) of the motional-mode coupling strength, motional mode coupling to free-space microwaves is very slow for reasonable powers. Although near-ﬁeld subwavelength electrodes-
 within a planar trap can oﬀer such coupling [OLA+08, OWC+11], such an approach is likely to be highly dissipative, and still struggles to achieve comparable two-qubit gate times as optical approaches; furthermore, whether for free-space single-qubit operations or for near-ﬁeld-induced motional mode couplings, limiting the spatial extent of the microwave to address a single ion is signiﬁcantly harder than with optical beams. Potential approaches to using magnetic ﬁeld gradients to diﬀerentially sh-
ift Zeeman splittings for diﬀerent ions to allow individual addressing pose their own challenges [WOC+13].
Clearly a rather broad set of both technical experimental and fundamental characteristics comes to bear on which qubit type and addressing method is ideal for what purpose, and the various trade-oﬀs motivate consideration of more complex schemes in which, for example, an optical qubit is used for entangling operations and mapped to a hyperﬁne one for memory [BKRB08a], or in which hyperﬁne states are used exclusively and addressed optically via Raman transitions for two-qubit gates and via microwav-
es for single-qubit operations. Here we simply presented an overview of the various approaches, and to establish the general wavelength ranges involved for the

1.1. PHYSICS OF TRAPPED ION QUBITS

27

most important operations in the 88Sr+ used in this work but also ion species under study elsewhere; more will be said in the next chapter about the particular role of optics, but it is clear that ﬂuorescence is the only readout mechanism used, and optical addressing has signiﬁcant technical advantages for individual addressing of all operations (although fundamental disadvantages compared to microwaves for single-qubit operations), and both fundamental and practical advantages for two-qubit opera-
tions.

1.1.6 Fluorescence readout of qubit state
When one qubit state can be coupled on an optical frequency cycling transition (one in which spontaneous decay is primarily to the initial state) to an excited state, readout is achieved simply by detecting scattering of light resonant with this transition; light is scattered only if the qubit was in one of its two states. As long as the expected number of photons collected per measurement time after all losses are considered is large compared to the dark count rate, such readout oﬀers a conceptua-
lly simple route to high ﬁdelity measurement [WMI+97]. In Fig. 1-4, for example, Poisson-distributed count probabilities for some measurement time are illustrated for expected value of dark counts N dk = 4, simulating a hypothetical distribution of counts in the “dark” state (owing either to detector dark counts or scattered light driving the transition), and the expectation number of counts for a bright ion N b = 30, simulating the ion ﬂuorescing ( N b = Ns η, where Ns is the expectation number o-
f photons scattered in the measurement time and η is the collection eﬃciency). If in a given measurement the number of counts is above the optimum threshold, the ion is judged to be bright, and vice versa; clearly a large separation between the dark and bright distributions will correspond to a minimal error probability, and also plotted is the probability of a wrong inference as a function of the expected “bright” counts, for a few values of expected “dark” counts; in the case of 0 dark counts, t-
his is simply the probability that 0 photons are collected from a ﬂuorescing ion, equal to e− N b. We note that this is illustrative only – while the distribution of counts from the ﬂuorescing ion is Poissonian to a good approximation, the dark counts may not be.
When using a qubit encoded on an optical transition, such a cycling transition for readout is provided by an S-P transition, for example in 88Sr+ the 5S1/2 → 5P1/2 transition at 422 nm; an ion will scatter light on this transition only if it is measured in to be in the 5S1/2 state. When a hyperﬁne qubit is used the situation is somewhat more complex as particular sublevels of the S and P-state manifolds have to be coupled such that when exciting from the bright qubit state, decay to the dark qubit-
 state is minimized, via selection by polarization and frequency of a particular excited sublevel; however in practice due to oﬀ-resonant couplings and imperfect polarizations there is invariably some leakage, and as a result of the greater isolation between qubit states when an optical qubit is employed, these have achieved higher readout ﬁdelities [MSW+08]. An exception is when population from a hyperﬁne qubit is transferred to a metastable D-state prior to cycling [HAB+14].

28

CHAPTER 1. INTRODUCTION: QUANTUM MANIPULATIONS OF INDIVIDUAL IONS

Probability Probability of error

10 0 10 -1 10 -2 10 -3 10 -4 10 -5 10 -6 10 -7

<N>dk = 4

<N>b = 30

10 0 10 -1 10 -2 10 -3 10 -4 10 -5 10 -6 10 -7 10 -8 10 -9

<N>dk = 0

8
6 4 2

10 -8 0

10

20

30

40

50

60

Number of counts in measurement time

10 -10

70

0

10

20

30

40

50

<N>b

Figure 1-4: Illustration of readout process and errors. (left) Example histograms of Poisson-distributed count probabilities in measurement time, with N dk = 4 expected counts for the dark state and N b = 30 for the ﬂuorescent state. (right) Readout error probabilities as a function of the expectation number of counts from the ﬂuorescent state, for various expected dark count levels N dk = 2, 4, 6, 8.

1.1.7 Cooling of trapped ions
It is important that ions be cooled to near the ground state of motion; for the CiracZoller gate this is essential to the principle of operation, but in general, this is required for high ﬁdelity operations, so that for example the ion position is not varying with respect to the applied ﬁelds and hence that the relevant Rabi frequency and pulse time required is known precisely. Doppler cooling is performed on a cycling transition, often the same as used for readout, using a laser red-detuned from -
the transition, for cooling to on the order of 100 µK; for ions, in the Lambe-Dicke regime as usual, resolved sideband cooling, using the red-sideband of the qubit transition, is then used to walk the ion down the ladder of internal/motional states and cool to near the ground state [WMI+97], with average motional quanta on the order of 0.05 achieved routinely.

1.2 Experimental implementation and approaches to scalable optics
Current experiments can be divided into those based on bulk traps such as the four rod design pictured in Fig. 1-1a,b:, and those based on planar ion trap structures. Common between them are the ion loading processes, which typically involve evaporation oﬀ a hot source and photoionization near the region of the trap. The principles of the experiments are the same, but the planar ion experiments reduce the available solid angle for optical addressing, and introduce added challenges of avoiding scat-
ter oﬀ the chip surface, and typically also suﬀer from larger heating rates, and have hence so far not been used for experiments at the same scale as the bulk trap experiments.

1.2. EXPERIMENTAL IMPLEMENTATION AND APPROACHES TO SCALABLE OPTICS

29

1.2.1 Bulk trap experiments
Most experiments on quantum operations in single or few ions so far have been carried out in “bulk,” few mm-scale traps of the type illustrated in ﬁg. 1-1(a). These are capable of large trap depths of typically order ∼100 meV, favorable noise properties due to the large distance between ions and the metal surfaces, and convenient optical access from almost all directions. These experiments range from the original demonstrations of two-qubit gates, to the more recent experiments with multiple ions -
in a single linear ion crystal [DLF+16, MMS+16]. The Maryland and the Innsbruck group have pursued most of the multi-ion bulk trap experiments so far, achieving for example entanglement of 14 40Ca+ qubits in a Green-Horne-Zeilinger state by collectively addressing all qubits with the same ﬁelds [MSB+11], so far the largest entangled state created with any qubit, executing more general algorithms on 3-5 qubits using a focused laser beam in free space directed to diﬀerent ion sites with an electro-o-
ptic deﬂector [SNM+13].
It is notable that only two groups in the world, the Innsbruck and Maryland groups, has at the time of this writing demonstrated high-ﬁdelity operations on a >2ion system with individual addressing, as required for general operations [SNM+13, MNM+15, DLF+16]. The Innsbruck system scans a single tightly-focused beam serially across the ion chain using electro-optic deﬂectors, and to avoid the necessity of phase stability between this single-ion addressed beam and the other beams that globally addre-
ss all ions, the ion addressing beam is detuned from resonance and serves only to create a stark-shift on the addressed ion.
While measurement of one or two ions is often done using a PMT, the need to spatially-resolve ion ﬂuorescence in multi-ion experiments motivates imaging onto an EMCCD for such experiments [Hem14].
The highest-ﬁdelity two-qubit gates carried out so far have been in bulk traps. Two-qubit phase gates, using optically addressed Raman transitions in 43Ca+ or 9Be+, have achieved maximum ﬁdelities of 99.9% [BHL+16, GTL+16], as compared to the previously demonstrated 99.3% ﬁdelity Molmer-Sorensen gates carried out with the optical qubit in 40Ca+ [BKRB08b].
1.2.2 Planar electrode trap experiments
While bulk traps have allowed a number of interesting experiments of gradually increasing size and precision, architectures based on the complex electrodes fabricable in planar structures bring signiﬁcant advantages in the long run for large arrays [CBB+05], and hence the approaches to scalable optics discussed below focus on integration with such traps. The conventional picture of light-ion interactions in such traps, and most current experiments, rely on laser beams propagating parallel to the s-
urface of the trap (which is entirely coated with electrodes, to avoid any regions of ﬂoating potential except in the ≈ 5µm gaps between electrodes, that can destabilize the trap).
The ion-electrode distance is typically in the range of 30-300 µm, smaller than most bulk trap experiments. Like the bulk trap experiments, the traps can be operated at

30

CHAPTER 1. INTRODUCTION: QUANTUM MANIPULATIONS OF INDIVIDUAL IONS

(a)

(b)

(c)

(e)

(d)

Figure 1-5: Various steps towards scalable optics integration with planar ion traps. (a) An integrated multimode ﬁber for ﬂuorescence collection [VCA+10], (b) Single mode ﬁber for light delivery to ions [KHC11], (c) A microfabricated fresnel lens for imaging [SNJ+11], (d) A transparent trap with an integrated photodetector [EWA+13], and (e) A MEMS-optics based approach to integrated optical control [KK09, MK13]
room temperature, but the heating rates observed in traps with electrodes near the ions increase strongly with reduced distance, and is orders of magnitude higher than heating expected from Johnson noise in the electrodes. The mechanism for this socalled “anomalous heating” is not understood, but cryogenic cooling has been shown to allow signiﬁcant reduction of the heating rate [LGA+08, CS14], to levels of around 5 motional quanta/s in traps with d =50 µm ion-electrode distance. The distance depen-
dence may very roughly scale with 1/dn with n between 2 and 4, but the scaling is very diﬃcult to ascertain from the various experiments conducted so far [BKRB14].
It is worth noting that the highest ﬁdelity single qubit gates performed in ions (or in any qubit) to date were carried out in a planar trap using microwave pulses to couple hyperﬁne “atomic clock” states of a 43Ca+ ion [HAB+14], reaching average single-qubit gate ﬁdelities of 99.9999%.

1.2. EXPERIMENTAL IMPLEMENTATION AND APPROACHES TO SCALABLE OPTICS

31

1.2.3 Approaches to scalable optics in planar traps; overview
of work presented here
The need for integrated optics approaches to trapped ion quantum information processing has been recognized for some time [KK09], and various groups have been working on initial steps towards such a goal.
A handful of experiments have pointed to particular devices or elements that may form a part of a scalable approach in planar ion traps; examples include multi-mode ﬁber optic readout of ﬂuorescence for relatively eﬃcient and perhaps multiplexible readout [VCA+10], delivery of light to ions via single mode ﬁbers [KHC11], ﬂuorescence imaging through lithographically patterened fresnel lens [SNJ+11], and a large area photodetector integrated with a transparent trap for eﬃcient collection [EWA+13], w-
ith some illustrative ﬁgures included in Fig. 1-5. While many of these experiments demonstrate performances superior to the traditional free-space optics approaches (ﬂuorescence collection of 2%, e.g. in the multi-mode ﬁber collection experiment), they in general have relied on rather specialized fabrication techniques that do not clearly point to practical scalable implementations.
One of the most thorough existing proposals with an eye to large-scale implementations is based on MEMS optics; an early proposal considered beams propagating parallel to the chip surface and routed by switchable MEMS mirrors [KK09]. The architecture proposal is appealing in simply allowing for the same polarizations (both circular and linear) as are used in bulk experiments across a wide wavelength range while still manipulated with microfabricated optics; however, due to concerns about beam diﬀr-
action and scattering oﬀ the chip surface, the beams propagating parallel to the surface pose signiﬁcant constraints on the degree of focusing and the chip size; for example, 30 µm beam waists limit the chip size to about 1 cm2, and tighter beams can come only at the expense of smaller overall chip size. MEMS mirrors are also limited to similar µs-scale switching times as free-space electro-optic deﬂectors, and the integration of MEMS mirrors with planar traps entails signiﬁcant fabrication challe-
nges as well; experimental demonstrations along these lines have so far used MEMS optics external to the vacuum chamber and imaged onto the ions through a sizable set of external optics [CMBK14, MK13], which is not as clearly scalable to multiple ions. Although the through-substrate trenches used in these studies allows µm-scale focuses of beams propagating normal to the trap surface, in contrast to the surface-parallel beams in the original proposal, the deep etch and the requirement for distant -
MEMS mirrors and imaging optics poses problems for stable alignment, high-yield fabrication and integration of electronics. Despite the clear challenges, the MEMS optics approach is one of the most plausible approaches to really scalable optics integration already under study.
This thesis presents an approach that instead utilizes waveguiding optics, fully integrated within an ion trap chip, to route and direct light to ions. Focusing grating couplers are designed to couple the light guided in 100 nm-scale high-index-contrast dielectric waveguides to beams propagating in vacuum to a focus co-located with ions trapped above the chip, as illustrated schematically in Fig. 1-6. Integrated electrooptic modulators together with passive waveguides and couplers are envisioned t-
o

32

CHAPTER 1. INTRODUCTION: QUANTUM MANIPULATIONS OF INDIVIDUAL IONS

ion EO modulator
focusing coupler

422 nm

674 nm

674 nm

trap electrodes (openings not drawn)

Figure 1-6: Overview of approach for control; waveguides patterned beneath the trap electrodes split and route light; grating couplers direct the guided light to points in free-space to address the ions. Modulators within the chip are required to encode control pulses to implement particular operations.

allow for parallel manipulation and delivery of light for the various tasks to ions at large numbers of sites. While the focus of this thesis is on the establishment of the basic building blocks for such an approach, our argument is that these basic pieces will be more practical to scale to larger systems, and will both greatly simplify experiments at the levels of 10s of qubits, and make it possible to scale the optical control and measurement systems to 1000s. A crucial point in this is the abil-
ity to fabricate devices of the kind imagined and studied here within full CMOS foundries [MEB+14, SGO+15], which presents a path to fabrication of large-scale systems with complex waveguide circuits and multi-layer trap structures designed together. The next chapter will discuss in some more detail the potential advantages and challenges of the approach presented and studied in this work.

1.3 Summary of scaling challenges and those addressed here
Many challenges face the practical implementation of large-scale trapped ion quantum information processing; this thesis aims to address a few of them, but the scope of the challenge is large enough that we necessarily focus on only a subset of the outstanding issues. But it may still be worthwhile to attempt to keep in view a more full set of major apparent challenges as of this writing, to help to deﬁne the scope of this work (which is also elaborated more in the next chapter).

1.3. SUMMARY OF SCALING CHALLENGES AND THOSE ADDRESSED HERE

33

1.3.1 Scalable control apparatus
The eﬀorts towards integration of optical components into planar ion traps discussed above are part of an attempt to address the broader problem of implementing the devices and systems required for trapped ion control in a manner that can be practically applied to many ions [MK13]. Integrating such components at a large scale in a way that avoids an excessive experimental overhead, and furthermore does not add sources of noise or instability to the quantum system, is the challenge here; this chall-
enge applies to the optics as well to the electrical systems for trap control and pulse shaping.
With a view to an eventual system, at early stages in the development of quantum processors when experiments are generally limited to a few qubits [BKM+14, MNM+15], it would be easy to underestimate the signiﬁcance of this problem relative to the properties and limits of the more basic quantum operations. However, these problems may prove decisive in future years, and are likely to strongly aﬀect what basic techniques for qubit implementations or gate operations prove useful in the long run. As an-
 example, the planar superconducting qubits that have shown long coherence times (relative to such qubits historically) of 10-100 µs in recent years, e.g. [BKM+13] have been fabricated using shadow evaporation techniques standard to Josephson junction device engineering, and samples fabricated with direct etching have shown coherence times 1-2 orders of magnitude lower. The interfaces, defects, and loss channels introduced by additional dielectrics and metal layers are known to present various add-
itional decoherence sources that reduce lifetimes from the high values obtained in simple few-qubit samples; but given the necessity of more complex structures simply for wiring up a multi-qubit system, how well these issues can be addressed will be crucial for the practical applicability of superconducting qubit techniques to larger systems [BPW+15, BMR+16]. Ion qubits face the same general problem, though with very diﬀerent technical features, and the practical implementation of this control app-
aratus is the main problem addressed in this work.

1.3.2 Heating rates
As discussed above ions are initialized in motional states near the ground state of the mode used for two-qubit interactions; heating of this motional mode can contribute to errors in two-qubit operations, and the heating rate is a crucial metric for planar traps. Given the strong scaling with ion distance from surfaces [BKRB14], this has limited distances to trap electrodes so far to roughly >30 µm. Much eﬀort has been dedicated to understanding and reducing this loss; though ion traps are usuall-
y operated at room temperature (with only the ion cooled to µK levels), cryogenic cooling of the trap electrodes has been shown to allow reduction of heating rates [LGA+08], for example from a few hundred quanta/s at room temperature to approximately 5 quanta/s at 4K, using a 1.3 MHz trap frequency with 88Sr+ ions at 50 µm trap height [CS14]. Alternatively, surface cleaning by Argon ion bombardment has also been shown to allow signiﬁcant reduction at room temperature, by approximately a factor of -
∼100 [HCW+12].

34

CHAPTER 1. INTRODUCTION: QUANTUM MANIPULATIONS OF INDIVIDUAL IONS

Though heating rates at a few quanta per second are in fact comparable to those in the bulk trap used for the highest ﬁdelity two-qubit gates demonstrated so far [Bal14] (at room temperature, typical for bulk trap experiments), where errors were not dominated by motional heating, it will be desirable to further reduce these heating rates, as they are a prominent limit to further reduction of ion trap dimensions. Our work does not contribute to this, except so far as the additional devices we intro-
duce to the trap vicinity should not dramatically increase this heating rate.

1.3.3 Limitations to two-qubit gate ﬁdelities, and addressing
Resource overheads required for quantum error correction scale strongly with the inﬁdelities of physical gates [FSG09], and hence reducing gate inﬁdelities (and reducing them well beyond any fault-tolerant “threshold”, at which the resource overheads are usually extreme) is an important task for achieving an interesting system.
In trapped ions, single-qubit operations have been performed with quite low inﬁdelities, of order 10−5 or 10−6 using either optical stimulated Raman [GTL+16] or microwave [HAB+14] transitions between hyperﬁne states. Two-qubit gates have generally posed a larger problem, owing to the greater complexity involved in coupling to the motional modes, but recently a few groups have achieved inﬁdelities of order 10−3 [BHL+15, GTL+16], though at present it appears these gates will be the limiting factors -
in most algorithms.
A number of factors contribute to the errors in these gates, discussed in detail in the references cited, many of which have to do with ﬂuctuations in trap parameters or laser noise, which would be independent of the sort of structures considered here. However, we note that in both of the highest ﬁdelity entangling gates presented so far, spontaneous emission during the stimulated Raman transitions used was the largest contribution to error, and hence we expect that the ability to much more tightl-
y focus the excitation light, without introducing additional beam pointing instability (eﬀective intensity noise), may allow larger detunings and lower errors for a given power and gate time. Alternatively, the use of higher intensities together with appropriate pulse shaping could also allow for faster gates, which would suﬀer less from the errors associated with motional mode heating during the gate. For optical qubit single-qubit gates, similarly [BKRB08b], the same arguments about focusing wit-
hout introducing pointing instability would apply.
A concern separate from the ﬁdelities achievable in single or two-qubit experiments are unintended couplings to neighboring ions when operating on some subset, or crosstalk. Avoiding crosstalk when addressing operations in a system of closely spaced ions is an important challenge, one where the optical approaches considered here can play a signiﬁcant role, as discussed in more detail later in the thesis.
To sum up, many of the limitations to ﬁdelities currently would remain challenges independently of the way the optics and electronics around the ion system are implemented, but it appears plausible that there would be at least a few signiﬁcant ways to take advantage of the approaches presented here, primarily for purposes of scaling up operations to larger numbers, to also reduce these errors.

1.3. SUMMARY OF SCALING CHALLENGES AND THOSE ADDRESSED HERE

35

1.3.4 Speed limitations on motional-mode coupling in multiion systems
Increasing ﬁdelities on systems of just two ions is one challenge, and implementing similar ﬁdelity operations involving motional modes in larger chains of ions presents additional problems associated to the larger number of closely spaced transitions that can be oﬀ-resonantly excited by the pulses involved. Though some pulse-shaping protocols have been developed for attempting to minimize these excitations in fewion chains without excessively slowing down operations, ﬁdelities so far have been su-
bstantially lower in such systems than in two-ion experiments [DLF+16]. These problems appear to be largely independent of the approach discussed in this work.
Additionally, even aside from issues arising in multi-ion chains, excitation of unwanted transitions becomes an issue for implementing high-ﬁdelity fast gates (with timescales of order or lower than the trap frequency, typically ∼MHz even for just two ions in a well), and though it appears theoretically possible to circumvent these excitations by appropriate pulse-shaping [PMGL+16], it remains to be done in practice.

1.3.5 General ion movement, interconnections between distant ions
Most architectures require some sort of ion movement, to either bring ions on a 2D lattice [KBB11] near each other when enacting a gate between neighboring ions [KHL+16] (and adopting such an architecture can help avoid some of the problems associated with multiple ions in the same well discussed above), or to move ions between diﬀerent registers based on few-ion linear chains [KMW02], requiring also separation of ions in single trapping potentials [HS04]. Implementation of these operations genera-
lly requires a series of complex RF and DC potentials, with amplitudes depending on the trap geometry anywhere from many volts and tens of volts. Particularly for geometries requiring high voltages (including the planar trap geometries pursued here, relatively to multi-layer or 3D electrode conﬁgurations), this can entail considerable complexity in circuitry. The use of CMOS foundries may address this in part, though for higher voltages it may be necessary to incorporate power transistors, not typ-
ically integrated with CMOS environments.
Aside from motion of the ions themselves, distant ions may interact optically, e.g. in schemes where coincident photon detection heralds entanglement of ions at a distance [MMO+07, MRR+14]. This brings a number of challenges which are not largely addressed here, except speculatively as far as this work may lead to planar dielectric mirrors for cavity integration within trap chips, or perhaps some metallo-dielectric waveguides/resonators which could enter the near ﬁeld of the ions while still havin-
g surface potentials controlled to prevent destabilizing the trap. Such steps would assist in implementing the high-Q cavities that seem likely necessary for suﬃciently high success rates with such entanglement schemes, but which have been very diﬃcult to implement with trapped ions so far.

36

CHAPTER 1. INTRODUCTION: QUANTUM MANIPULATIONS OF INDIVIDUAL IONS

1.4 Concluding comments and thesis overview
The purity of individual atomic ion qubits and the strength of Coulomb-based interactions makes them attractive candidates for quantum information processing. However the fact that these individual ions are doomed to spend their existences ﬂoating alone in the void often leads many to expect that they are unlikely to ever really be coaxed operate meaningfully in concert at a large scale. Only in the last few years have individual atoms started to interface with integrated optical devices [TTdL+14,-
 GHY+14], a convergence that may prove very fruitful. By comparison, solid state approaches, primarily those based on superconducting qubits, but also with quantum dots or diamond nitrogen-vacancy centers, for example, have long appeared far more amenable to the same ideas that are behind the success of integrated circuit technology.
The broader theme in this work is that atomic ions’ apparent isolation from solid state technologies is only superﬁcial, and that in fact a certain amount of distance between the pristine quantum system and the the tumult of the chip below may even allow for a more favorable combination between the two. That is, the ability to combine scalable optics and classical control in planar-fabricated systems with a quantum system, without sacriﬁcing quality and purity of the qubit to do so, may prove part-
icularly powerful.
The next chapter will present the details of the general approach pursued here, its various features and challenges. Chapters 3 and 4 discuss the waveguide and grating devices used for ion addressing, ﬁrst describing the optical design and characterization, and next experiments on their integration with planar ion traps. Chapter 5 then discusses CMOS foundry-fabricated ion traps, which are a step towards implementing the previously discussed optics in a readily scalable platform, together with a v-
ariety of other components in the same chip. This chapter for example also discusses integrated APDs implemented in the same process and ongoing experiments on these devices. Chapter 6 then discusses an approach to electro-optic modulator devices at the relevant wavelengths, and our initial work towards this, and Chapter 7 summarizes and discusses avenues for future work.

Chapter 2
Overview of the proposed approach
Light is implicated in various steps in quantum information processing with trapped ions – these include ionization, cooling, optical pumping, coherent state manipulation, and ﬂuorescence readout. We want to implement these in a way that we may expect to practically scale beyond few-qubit experiments, to ion numbers where new computational capacity and the advantage over classical simulation or computation becomes clearly manifest. This scale would be as low as around 50 qubits [BIS+16], from the -
perspective of maximally large quantum state whose evolution could be modeled on a classical supercomputer (and hence beyond which scale a quantum simulator may allow new insight), and as high as many millions of qubits, for an error-correcting factoring machine factoring large numbers with reasonable per-gate errors [FMMC12].
In this chapter we discuss the approach to control and measurement pursued in the proposed thesis; the requirements, advantages, and particular challenges are discussed in relation to speciﬁc aspects of current experiments as well as other proposals for integration in planar traps. Though an architecture study can become a major undertaking in itself, this chapter aims to still point to the general features of an architecture based on such components as discussed in this proposed thesis and their -
beneﬁts and drawbacks. A variety of architectures are possible using planar ion trap technology, broadly divided at present into those based on linear chains of some length connected either through ion shuttling between diﬀerent registers or optical interconnections [KMW02, MRR+14], and those based on 2D arrays of ions with short range interactions [CLJ08]. The bulk of this chapter discusses features of this approach which are largely decoupled from this choice of geometry for the ion interactions-
, and which are generally compatible with any planar ion trap architecture. Our experiments in the subsequent chapters will center on systems using the 88Sr+ ion and an optical qubit transition and many of our particular examples here will concern this species; however, the approach here is of course in principle applicable more generally, and throughout we discuss challenges and opportunties with other species and qubits.
In what follows we ﬁrst give a brief description of the kind of overall system envisioned; then we describe the properties of the high-index-contrast waveguide structures involved, together brieﬂy with the grating couplers that would direct light from such waveguides to propagating beams focused at the ion locations. The next section

38

CHAPTER 2. OVERVIEW OF THE PROPOSED APPROACH

... ... ...

(a)
ion Waveguide
~10 µm

(b)
Photodetector
422 nm doppler/ readout light

State-dependent ﬂuorescence 674 nm qubit control light

Directional Coupler

~10 µm

Segmented trap electrodes

Oxide

Shielding electrodes

Control/measurement electrodes

Visible WGs/ devices

Si APD

Focusing Grating Coupler

Focusing Grating Coupler

Modulator

y
422 nm

z

x

674 nm 674 nm - trap

1091/1033 nm

Figure 2-1: (right) Cross-section of a possible chip incorporating the required devices – focused beams are directed to the ions by grating couplers below the trap electrodes, and silicon APDs are incorporated nearby for ﬂuorescence collection. Multiple metal layers (wiring for CMOS circuitry) are employed for shielding between the trap electrodes and devices. (left) Carton illustration of an imagined layout for carrying out operations on a chain of 88Sr+ ions.

discusses in more detail the various advantages and challenges associated with this kind of routing and addressing. We then discuss the possibility and motivations for parallel modulation in such a platform, followed by integrated photodetection and implementation of such ideas in CMOS processes, which we expect will play a signiﬁcant role in making large-scale systems based on such ideas a possibility.

2.1 Routing, shaping, beam-forming, and detecting light within a trap chip
We envision a system such as was shown above in Fig. 1-6; here power at the relevant frequencies (674 nm and sideband for qubit manipulations and 422 nm for cooling/readout in 88Sr+ drawn, omitting pumping beams) is coupled in through a single bus and split oﬀ from the main bus using a variety of splitters, followed by modulators and grating couplers to couple the waveguided light to free-space beams propagating to the ions through openings designed into the the trap electrodes. A slightly more de-
tailed illustration of a cross-section of a chip that may incorporate these functions is shown in Fig. 2-1; both 1D chains and 2D arrays and other trap

2.2. WAVEGUIDE-BASED ROUTING AND ION ADDRESSING

39

geometries could be accommodated in related ways, drawing on low-loss waveguide crossings and µm-scale bend radii achievable in waveguides. The promise of such routing for scalable light distribution and modulation to multiple ion locations in parallel in a way relatively ﬂexible to particular ion trap designs motivates much of this work in general. The next section focuses more speciﬁcally on the particular features associated with ion addressing with focusing grating couplers located near the io-
ns as proposed here.

2.2 Waveguide-based routing and ion addressing
Dielectric ﬁlms can be patterned in diverse ways to create a rich variety of optical devices, including waveguides, splitters, ﬁlters, resonators and various couplers. In the ﬁeld of silicon photonics, a variety of devices have been studied for various applications in classical interconnects [BJO+08], and large systems with hundreds of optical elements cooperating nontrivially have been made [STY+13].
As compared to single mode ﬁber optical waveguides, where the optical mode’s energy is distributed over an area of order 50 µm2 and where the waveguide core has an index only on the order of 0.01 higher than the cladding, nanophotonic waveguides conﬁne the mode’s energy to areas of order 0.1 µm2, as a result of higher index contrast between the core and cladding (e.g. SiN/SiO2 – 2.0/1.45, Si/SiO2 3.5/1.45). The higher index contrast allows for much tighter low-loss bends than in ﬁber optics, and d-
enser packing of devices due to the smaller mode area. In addition, many of the more sophisticated devices fabricable in the context of nanophotonics, like photonic crystals, resonators, and grating couplers beneﬁt from the higher index contrast; fundamentally this is because of the stronger scattering at perturbations to a waveguide of a higher index. While a boon in terms of optical devices that can be designed with a small per-device area and densely packed, this stronger scattering makes loss -
due to waveguide imperfections much stronger. So while optical ﬁbers achieve propagation losses of 0.1 dB/km, nanophotonic waveguide losses are strongly inﬂuenced by scattering by high index discontinuities. Si waveguides in current technology are limited typically to around 1 dB/cm, though SiN waveguides can be signiﬁcantly less 0.01-0.1 dB/cm, though this is strongly dependent on wavelength. In any case, certainly for systems on the scale of a few cm and possibly larger depending on exactly how -
power is distributed, such a platform allows for dense integration of complex functions.
Example mode proﬁles for λ = 674 nm light in waveguides of Si3N4/SiO2 are shown in Fig. 2-2, for light in the fundamental quasi-TE mode. The ﬁeld is polarized predominantly along x as labeled in the ﬁgure, but as is typical for high index contrast, subwavelength-scale waveguides (as well as for wavelength-scale focused beams in free space), the wave is not purely transverse, and appreciable longitudinal components (along z) are present for highly-conﬁned modes. Waveguides signiﬁcantly wider than t-
he wavelength have much reduced nontransverse ﬁeld components, as shown, important for the polarization purity generated by such waveguides. Depending on the aspect ratio of the guide, quasi-TM modes (with the ﬁeld predominantly along y) can be coupled to as well.

40
Ex

CHAPTER 2. OVERVIEW OF THE PROPOSED APPROACH

Ey

Ez (φ=π/2)

1

Ex y

-1

Ez (φ=π/2)

1

z

x

-1
Figure 2-2: Example E-ﬁeld mode proﬁles of rectangular Si3N4 waveguides (n ≈ 2.0) surrounded by SiO2 (n ≈ 1.45), for waveguides of 120 nm height and 540 nm width (top row, neﬀ = 1.59) and 3 µm width (bottom row, neﬀ = 1.66), for the lowest-order quasi-TE mode (ﬁeld predominantly along x) at λ = 674 nm.

Single-mode waveguides allow light to be routed over large distances and complex paths without phase or amplitude distortions; thus, diﬀraction is naturally controlled over even complex paths, avoiding a major problem in free-space or MEMS-optics approaches [KK09]. Bend radii give a sense for general footprints of routing components; Fig. 6-3 shows simulations of optical loss per 90◦ bend for example rectangular waveguides (with widths chosen so that the guides remain single-moded for the quasiTE -
modes) at λ = 674 nm and λ = 1092 nm. As is evident in both cases bends of a few 10 µms can provide low losses, and though at longer wavelengths the lower conﬁnement in a ﬁlm of given thickness restricts bends to larger values, with reasonable bend losses and single-mode operation can be achieved over similar ﬁlm thicknesses across a wide wavelength range.
A signiﬁcant challenge in integrating the various wavelengths required to implement all the control, cooling/readout, and pumping required for ion experiments will be the choice of waveguide material that allows operation from the blue (or for some species, as reviewed in Chap. 1, UV) up to the near IR. Table 2.1 lists a few of the possible waveguide core materials, their approximate refractive indices in the visible, short wavelength absorption limits, and maximum electro-optic coeﬃcient. These a-
re approximate numbers and short-wavelength operation can be diﬃcult even above the absorption edge, due to stronger scattering from roughness at shorter wavelengths, as well as to optical damage, e.g. UV solarization in silica and photodamage in LiNbO3. Prospects for this will be discussed in the section of wavelength ranges and polarization below.

2.2. WAVEGUIDE-BASED ROUTING AND ION ADDRESSING

41

90 degree bend loss (dB)

10 0 10 -1 10 -2 10 -3 10 -4 10 -5 10 -6 10 -7 10 -8 10 -9 10 -10
0

400 nm × 120 nm, λ = 674 nm 540 nm × 120 nm, λ = 674 nm 1050 nm × 150 nm, λ = 1092 nm

10

20

30

40

50

60

70

bend radius (µm)

Figure 2-3: Simulated bend-loss vs. bend radius for representative rectangular silicon nitride waveguides (dimensions labeled) at λ =674 nm and 1092 nm. The Si3N4 core index here is wavelength dependent but approximately 2.0, and that of the SiO2 cladding is approximately 1.46.

2.2.1 Focusing couplers for ion addressing
Optical devices near the ions allow for the equivalent of high NA optics to be employed in directing light the ions; whereas planar ion trap experiments using beams propagating parallel to the chip surface require beams of approximately 30 µm diameter (so as to keep scattering from beam clipping on a 1 cm2 chip) [KK09], couplers emitting light from the trap chip itself could focus to spots on the order of 1µm.
We note that more unusual trap structures with a narrow raised pedestal forming the optical access region [Mau16] with beams propagating still parallel to the chip surface, or structures in which the trap chip is etched entirely through the substrate and the mount is arranged such that the beam can pass through normal to the surface [CMBK14] can bypass the beam-clipping concern mentioned above and allow µm-scale focusing without integrated optics. Both certainly enable tightly focused addressing o-
f ions in a single linear trap. However, the ﬁrst case does not allow such addressing of an array of linear traps, essential for eventual scalability. The latter requires etching through the substrate and chip mount to avoid unwanted scatter of the surface-normally propagating beam, which would signiﬁcantly limit the density of addressable zones, as well as the possibility of integrating other functionality into the

42

CHAPTER 2. OVERVIEW OF THE PROPOSED APPROACH

Material Si3N4 LiNbO3 GaN
AlN
Al2O3

n at 632 nm 2.0 2.3 2.4
2.1
1.8

Absorption edge (λ)
290 nm [Pal98]
302 nm [Won02] 365 nm
(bandgap) 206 nm
(wurtzite-phase bandgap) < 250 nm [AWB+10]

Max EO coeﬃcient (pm/V)
0 33 3
1
0

Table 2.1: Table of possible waveguide materials; values of absorption edge, as estimates for pure material with references, are to be taken with a grain of salt, as the level absorption near the edge will depend on material quality in practice, along with possible optical damage by higher energy (UV) photons. Ease of fabrication and etching with ﬁne feature size and acceptable roughness is a further concern.

substrate. Thus both are applicable for experiments in 1D array of ions (and indeed the traps used in such experiments are designed for this), but not clearly applicable to larger systems requiring 2D geometries.
Smaller focuses implemented in scalable geometries have signiﬁcant implications for quantum operations, which stem basically from the lower total power required for the same intensity at the focus (3 orders of magnitude, comparing 1 and 30 µm diameter waists), and the tighter spatial localization of the focused light. The next chapter will detail the design and demonstrate these devices; here we aim only to establish the relevance of capability to trapped ion QIP.

2.3 Advantages and limitations of waveguide-based routing and focusing
2.3.1 Laser power
Laser power to manipulate a multi-qubit system in parallel becomes appreciable. Table 2.2 lists the various wavelengths required for manipulation of Strontium qubits and the powers necessary per qubit, and for convenience the corresponding power in a 50 µm-diameter beam as would typically be used in a planar ion trap experiment with free-space optics. So for the 674 nm light, in a 5 µm2 beam, area, approximately 25 µW would be required per ion, to enact ∼1 MHz single qubit operations and twoqubit -
gates of interaction times of a few 10 µs. For a given laser power (current narrow linewidth lasers and tapered ampliﬁers can output of order 1 W of Hz-level linewidth

2.3. ADVANTAGES AND LIMITATIONS OF WAVEGUIDE-BASED ROUTING AND FOCUSING

43

Function

λ (nm)

Qubit operations, sideband cooling
Doppler cooling and readout
Repumping
Two-photon photoionization

674
422 1091, 2033 405, 460

Order of magnitude intensity (mW/cm2)

Switching speed

10,000-100,000

1-10 MHz

100-1000 10-100 1000-10,000

1-10 MHz Slow Slow

Table 2.2: Required wavelengths, approximate intensities and switching times for trapping and quantum state manipulation in 88Sr+. The power orders of magnitude
very approximately follow the values given in [Wan12].

radiation), the number of ions individually addressable in parallel is drastically higher (500 ×) with focusing as compared to with 2500 µm2 beams.

2.3.2 Raman gate operation, detuning and spontaneous scattering

Although in our work we use an optical transition on the quadrupole transition in 88Sr+, qubits encoded in hyperﬁne ground states of ions with nuclear spin would allow for longer coherence times not limited by the spontaneous emission of the quadrupole transition (of order 1 s). Here, transitions between the two levels can be enacted by pairs of lasers with diﬀerence in frequency equal to the spacing between the qubit levels ω0, and each with a detuning ∆ from one of the P levels (chosen to be wit-
h respect to the P1/2 level by convention – positive ∆ corresponds to a photons blue detuned with respect to this level), which eﬀect two-photon stimulated Raman transitions between the levels. Here, however, for a given ∆ a fundamental error source is present here which results from spontaneous scattering during a Raman transition from the excited state. By increasing the laser detunings from the excited state (p orbital), the probability of this decay can be reduced, at the cost of needing highe-
r optical power to maintain the operation speed.
Early considerations of this eﬀect assumed the qubit (encoded in hyperﬁne states in s-orbital manifold) would decay upon any spontaneous scattering event from the excited state. A π-pulse time for the stimulated Rabi transition is given by tπ = π/2ΩR, with the Raman Rabi frequency scaling as [WBB+03]

ΩR

∝

ωf ∆(∆ −

, ωf )

(2.1)

44

CHAPTER 2. OVERVIEW OF THE PROPOSED APPROACH

where ωf is the spacing between the P1/2 and P3/2 states. Thus tπ goes as ∆2 for large ∆, but since the elastic Rayleigh scattering rate from the p levels goes as ∆−2, the probability of a scattering event in a π-pulse time stops decaying for large ∆, and no beneﬁt in gate ﬁdelity would be achieved. Thus it seemed that there was an optimal detuning, with ∆ limited on the order of ωf , and no beneﬁt could be had in gate ﬁdelity by increasing detuning (and intensity) to larger values.
However, it was later realized that Brillouin scattering events, in which the ion’s electron ends up in the same state it was in to begin with, carry away no information about the qubit state as long as ∆ > ωf , and hence elastic Rayleigh scattering does not contribute to decoherence [OIB+07] in this limit. Inelastic scattering into the other ground states was shown to scale as approximately ∆4 for large detunings, and as a result, owing to the fact that only such inelastic scattering contributes -
errors, large detunings can in fact result in arbitrarily low operation errors from spontaneous scattering back into the ground state manifold, and for species with low-lying D levels the probability of scattering into the D-level becomes the limiting factor for inﬁnitely high detunings.
Hence, higher intensity becomes an asset in reducing Raman gate errors from inelastic spontaneous scattering, as a constant π-time can be maintained while increasing detuning while increasing intensity proportional to ∆2. This brings about a reduction in error that goes as ∆−2, i.e. for a given gate time, for both single and two-qubit gates the gate error decreases linearly with available optical intensity at the ion.
Even at the highest-ﬁdelity gates demonstrated to date (with Raman-addressed hyperﬁne transitions), this power limitation is a dominant contributor to loss. In the experiment of [Bal14], Raman photon scattering was the largest known source of gate inﬁdelity even in the slowest gate (tg = 100 µs), using 5 mW per beam in spot sizes of w = 27 µm and a detuning of -3.0 THz. Faster gates obtained by decreasing the detuning showed higher inﬁdelity due to photon scattering. A robust method of focusing a -
given amount of power more tightly to µm-scale spots, can reduce this scattering contribution to error by two orders of magnitude, essentially removing it as a signiﬁcant source of error. The clear need for high powers in the laser beams addressing these transitions, especially for multiple ions in parallel, has provided incentive for development of new laser sources capable of high power and stability [BLWW15]; so long as other losses are managed well, tight focusing to each ion site, by allowing-
 eﬃcient use of whatever power available, would allow an optimization of error and parallelization of such operations. While this advantage is clear, the challenge will be in achieving low-loss waveguides at the short wavelengths used for Raman-addressed gates; prospects for this will be discussed below.
2.3.3 Pointing instability
Beams in ion trap experiments typically propagate in free space over many meters from their source before interacting with the ions. Small positional or angular ﬂuctuations in the various optics in the beamline can translate into signiﬁcant displacements at the ion, resulting eﬀectively in intensity noise. With much care, this can be reduced

2.3. ADVANTAGES AND LIMITATIONS OF WAVEGUIDE-BASED ROUTING AND FOCUSING

45

to a level lower than other noise sources, but this generally poses a signiﬁcant challenge; and furthermore since a given displacement corresponds to a larger intensity variation for tightly focused beams it is a larger challenge the more tightly the beam in question is focused. Light launched from the same chip as the ion would of course eliminate this problem entirely at the ion, though it would translate it into errors resulting from ﬂuctuations in where the light was coupled into the chip. How-
ever this allows us to decouple the amount of focusing at the ion location from the pointing instability-induced ﬂuctuations, and as we outline below can be expected to be much more robust than when light is directly incident on the ion.

If we consider a coupling a beam propagating in free-space into a grating coupler on-chip designed to couple the free-space Gaussian to a waveguide mode, the input power coupling eﬃciency would be given by

2
η = Eg∗EidA ,

(2.2)

where Eg is a normalized ( |Eg|2 dA = 1) ﬁeld proﬁle corresponding to that emitted by the grating and Ei is that for the incident beam. To evaluate the eﬀect of a given beam displacement on the coupling, we consider the ideal case of Gaussians for both proﬁles, with matched beam radii w0 and some displacement d. Along one dimension, Eg = w0−1/2π−1/4 exp (−x2/2w02) and similarly for Ei, so the coupling would be:

1 η= √
w0 π

x2

(x − d)2

2

d2

exp − 2w02 exp − 2w02

dx = exp − 2w02 ,

(2.3)

which should be compared to the relative intensity for a beam displacement d if

the same beam was directly incident on the ion, simply proportional to |Ei|2 =

exp

− x2 w02

.

Hence for small displacements, (small arguments in the exponentials

and using exp(−z) ≈ 1 − z for small z) the power deviation at the ion for a given

displacement of the beam would vary ∼2× less if the power is coupled into a grating

than if a beam of the same radius w0 were directly incident on the ion. This modest advantage in coupling is made more signiﬁcant by the fact that the input coupler

and beam can be chosen to have a dimensions much larger than that of the beam

addressing the ion; in this case, the fractional deviations due to displacement d at the

coupler

are

d2 2w02,g

and

for

the

same

displacement

at

the

ion

, d2
w02,ion

and

the

deviation

when

waveguide-coupled

is

lower

by

a

factor

of

, w02,ion
2w02,g

which

can

be

very

signiﬁcant.

This would be best realized in practice when directly ﬁber coupling to a chip, and in this case the coupling deviation would occur at the collimator addressing the ﬁber which could have a large beam waist for example of many millimeters. These points are illustrated in Fig. 2-4.

46

CHAPTER 2. OVERVIEW OF THE PROPOSED APPROACH

10 0

10 -1

Relative intensity deviation

10 -2

10 -3

10 -4

10 -5

10 -6

10

-7
-0.5

-0.4

-0.3

-0.2

-0.1

0

0.1 0.2 0.3 0.4 0.5

Beam displacement (wi)

Figure 2-4: Deviations in intensity relative to peak vs. displacement in units of wi, the waist of a beam addressing an ion. Red line shows the case of direct incidence on the ion; black line when a beam of the same waist is incident on a matched grating coupler; and black dotted line when a beam with waist 10wi is in-coupled through a larger grating, with greater tolerance to absolute displacement.

2.3. ADVANTAGES AND LIMITATIONS OF WAVEGUIDE-BASED ROUTING AND FOCUSING

47

2.3.4 Phase stability
Also in the context of quantum information, waveguide systems have been investigated also for linear quantum optics systems [PCR+08, MPSO09, SBO+14], where a noted advantage is the phase stability arising from the fact that path lengths are ﬁxed (in waveguide geometry) and not susceptible to air circulation or air temperature variations which would aﬀect experiments with free-space optics, where path lengths are in addition typically signiﬁcantly longer. The same advantage of waveguide approaches -
would apply to trapped ion QIP in multi-ion systems, when phase-stable light delivery to multiple ions would be required for quantum gates across the system.
Already in small-scale processors (3-5 ions), the need for phase-stability between beams if each was involved in coherent population transfer motivated an approach in which one was signiﬁcantly detuned and used only for individually addressed Stark shifts, and the other eﬀected population transfer globally [SNM+13]; this was chosen since the Stark-shifting beam need not be phase-locked to the other, reducing a significant diﬃculty (and error source) for the free-space optical system employed. In l-
arge systems, an approach relying on a single global addressing beam would be infeasible, and an approach that allows phase-stable distribution of light routed along complex paths to multiple separate locations will be required; waveguide-based approaches, in which a single beam can be input at one location and split a few hundreds or more ways [STY+13] should be capable of providing this essential capability.

2.3.5 Individual addressing

Implementation of single or multi-qubit gates on particular elements of an array, required for any general quantum information processing, will rely on individual addressing of diﬀerent ions’ qubit transitions. The two-ion spacing, for two-ions in a linear trap with axial frequency ωz/2π, is given by [WMI+97]:

2q2

1 3

s2 = 4π 0mωz2 ,

(2.4)

where the weak dependence on m, the ion mass, implies that ions with very diﬀerent masses have spacings on the same order, as shown in Figure 2-5 for 88Sr+, 43Ca+, and 9Be+. Since gates typically target axial frequencies of ∼1 MHz to not suﬀer in speed and/or error due to oﬀ-resonant excitation at a given speed [WMI+97, SM00], and since with more ions added to the chain the spacings decrease from these values somewhat, to address ions in a chain clearly requires spatial addressing of only a few µm-
s.
A straightforward way to do this is to focus a laser beam down to a spot size small compared to the inter-ion spacing, and is indeed the way this has been done so far in many experiments in bulk traps [NLR+99, JLH+14]. In planar ion traps, with beams propagating parallel to the surface, diﬀraction limits the waist that can be achieved for a given chip size before the beam will clip on the edges of the trap, to

48

CHAPTER 2. OVERVIEW OF THE PROPOSED APPROACH

Two-ion spacing (µm)

30

88Sr+

25

43Ca+

9Be +

20

15

10

5

0 200 400 600 800 1000 1200 1400 1600 1800 2000
Axial frequency f (kHz)
z
Figure 2-5: 2 ion spacings s2 for typical axial trap frequencies.

approximately 20-30 µm for a 1-cm2 chip, and optical individual addressing has not been demonstrated in standard planar traps, but only in a chip in which the substrate was fully etched through, opening a trench to allow light to pass through the chip perpendicular to the surface [MBB+13, CMBK14]; however, the complete etch is a complex procedure that would limit further integration within the trap chip and it may be diﬃcult to scale such an approach requiring an etch through the full substrate (w-
ide enough to allow the diﬀracting beam to propagate out over the thickness of the stubstrate) to parallel operations. Focusing to µm-scale spots from within a standard single metal layer trap chip, as demonstrated in the subsequent chapters, may provide a comparatively simple solution.
Other approaches to individual addressing in planar traps include the use of magnetic ﬁeld gradients to shift transition energies across space [WLG+09], or with purely microwave approaches in which microwave ﬁeld gradients generated on chip provide the same selectivity [WOC+13]. However, both present particular challenges to scaling up; nevertheless, given the promise of high-ﬁdelity single-qubit microwave gates for hyperﬁne qubits with microwave ﬁelds from on-chip electrodes [HAB+14], an interest-
ing possibility, for optimal and addressed single-qubit gates, may be to provide individual addressing capability to such an approach by using focused beams to locally Stark-shift hyperﬁne levels.

2.3. ADVANTAGES AND LIMITATIONS OF WAVEGUIDE-BASED ROUTING AND FOCUSING

49

2.3.6 Wavelength ranges and polarizations
Although for 88Sr+ the shortest wavelength required is 405 nm, as alluded to above, to accommodate the variety of ions used by experimental groups, waveguides extending into the UV would be required. 43Ca+, used by a number of groups now, requires a similar range, down only to 397 nm; however, to accommodate the 9Be+ and 24Mg+ ions used by the Colorado group, wavelengths down to 313 nm and 297 nm, respectively, would be needed. Silicon nitride, used in our ﬁrst devices, has been shown to allow los-
ses < 1 dB/cm at 470 nm [GJG+08].
While materials do exist that have been shown to show thin-ﬁlm guided modes with losses of a few dB/cm down to even lower wavelengths than any needed for the ions mentioned above, such as Al2O3 (down to below 250 nm) [AWB+10], and though good etching of rectangular waveguides in the infrared has been demonstrated in the same material [BAWP07], patterned single-mode waveguides below 400 nm have not been demonstrated with low losses to the best of our knowledge. Due to the scaling of scattering loss-
 from sidewall roughness with decreasing wavelength, this could prove a signiﬁcant challenge, and prospects for operation in the UV will require signiﬁcant study.
While all functions in 88Sr+are enacted by linear polarizations, some functions in other ions (particularly optical pumping and readout in species with complex ground state manifolds) require circular polarization, and furthermore with high purity when polarization (as opposed to frequency selection, as for example in pumping into one of the two ground state sublevels in 88Sr+) is used as the means of transition selection. While our approach can eliminate the impurity arising from nonzero birefrin-
gence in thick vacuum windows, achieving high-purity circular polarization from waveguide devices may not be trivial. While our approach is thus most immediately applicable to species (or operations) which can rely on linearly polarized beams (e.g. most coherent operations on both quadrupole and hyperﬁne transitions), prospects for circular polarization-generating components which would increase the generality of the approach will be discussed in the last chapter of the thesis.

2.3.7 Power handling and self-phase modulation eﬀects
For systems directing light in parallel to large numbers of ions, light at each frequency would be input at one or a few points and split on chip to the various sites. Depending on material used, the total power at the input could reach limits where nonlinear loss mechanisms such as two-photon absorption (TPA) would set in, or else where whatever small linear absorption is present results in suﬃcient heating to damage the waveguide.
Power-handling capabilities of low-loss SiN waveguides however can be quite high; due to its high energy absorption edge, 2 W of 1550 nm light have been launched without damage in a 2.8 × 0.1 µm2 waveguide as pump for nonlinear frequency conversion [KAS+15]. If 25 µW is required per beam for ∼1 MHz single-qubit gates at 674 nm, and supposing an average 6 dB total loss between the input waveguide and each ion location, 1 W would suﬃce for 10,000 ions; one bus can thus be expected to

50

CHAPTER 2. OVERVIEW OF THE PROPOSED APPROACH

10 -1 10 -2

Phase shift (π radians/cm)

10 -3 10 -4

10 -5 10 -6

10

-7
10

-5

10 -4

10 -3

10 -2

10 -1

10 0

Power (W)

Figure 2-6: Phase shifts per unit length due to self-phase modulation vs. power, for a SiN waveguide with Aeﬀ = 0.1 µm2, supposing n2 = 2.4 × 10−15 cm2/W and λ = 674 nm.

handle light for a large number of ions. However, two-photon absorption may occur at shorter wavelengths, particularly in the blue; this is expected to occur only for wavelengths less than around 470 nm [TISF10], although it does not appear to have been well characterized in silicon nitride.
A problem likely to arise earlier on is self-phase modulation over long optical path lengths due to the intensity-dependent refractive index, which could modulate the phases of the beams seen at the various ions. This is usually parametrized by an intensity dependent refractive index n = n0 + n2I, where n2 has been measured to be approximately 2.4 × 10−15 cm2/W at λ = 1550 nm in silicon nitride [ISAF08]. Using this number to get a rough feel (these coeﬃcients have not been characterized for SiN in-
 the visible), and noting that the phase shift due to this eﬀect over a length l is

P φI = n2 Aeﬀ k0l,

(2.5)

where P is the guided optical power, Aeﬀ is an eﬀective area that accounts for the waveguide mode proﬁle, group velocity, and conﬁnement, and k0 is the free-space wavevector, the phase shift per unit length owing to this eﬀect for λ = 674 nm light in a waveguide with a typical Aeﬀ = 0.1 µm2 is plotted as a function of P in Fig. 2-6.
This rough analysis indicates that for mW level powers, phase shifts over 1 cm are at the π/10−4 level; at the 1 W level (i.e. in the input waveguide carrying light to multiple ions), this shift can reach π/10 over 1 cm. Thus for light that has been split, this should be a manageable eﬀect; and indeed prior to splitting, this self-phase modulation would equally aﬀect light that will be addressed to each ion simultaneously, and hence would entail only approximately a global phase-shift. Hence it do-
es not appear to be a large concern, but this is a coarse analysis that only

2.4. PARALLEL MODULATION

51

gives a rough idea for this eﬀect. These nonlinear loss and Kerr eﬀects have not been well characterized in SiN and
particularly in the visible, and measurement of these eﬀects in materials suitable for visible waveguiding would be essential (and interesting generally for applications for visible integrated optics) for a more precise quantiﬁcation of the problems they pose.

2.4 Parallel modulation
The light directed to each ion has to be switched and modulated in time to implement meaningful operations, and eventually a method to do so in parallel for each of the signals going to each ion will be required. Some form of parallel single or two-qubit gates are involved in many quantum algorithms, but as one illustrative example, we can consider an error correcting system, in which errors would be diagnosed by a series of gates applied to each logical qubit followed by particular measurements [-
FMMC12]. Error diagnoses on each logical qubit are independent, so an inability to perform these diagnoses in parallel would entail a cost in time (and hence more stringent requirements on errors) proportional to the number of logical qubits. A second example is provided by transversal two-qubit gates, in which a two-qubit gate between two logical qubits is enacted by carrying out in parallel a two-qubit gate between each of the multiple pairs of physical qubits of the logical qubits; such operati-
ons could make clear use of parallel operations and would be sped up by a factor equal to the number of physical qubits per logical qubit.
This parallelism could be achieved a few ways; reliance on optical modulation can in the ﬁrst place be tempered through the use of motional gates, where operations are encoded through ion movement through stationary beams [LKOW07]. The freespace AOMs presently used could be replaced by ﬁber-coupled AOM modules and multiplexed. But perhaps the most desirable, though also the most ambitious, would be multiplexed planar-fabricated modulators, which as in classical integrated photonic systems [XSPL05]-
 could in principle be integrated with the waveguide and grating coupler devices proposed for addressing.
Such waveguide modulators are typically based on some material with a χ2 nonlinearity, i.e. with an electro-optic eﬀect. Candidate materials include LiNbO3, which is widely used for optical modulation in telecommunications and has in the last few years been employed for thin-ﬁlm photonic devices [PHSG12]; and AlN [XPS+12], which has a lower EO coeﬃcient but can be sputtered and is more likely to be compatible with CMOS approaches. These are two among many possibilities (Table 2.1).
For a LiNbO3 waveguide, given the electro-optic coeﬃcient of r33 ≈ 31 pm/V, a π-phase shift could be achieved with a 5 V amplitude pulse across a distance of 2.5 µm in a waveguide length of approximately 1 mm (see Ch. 6 below), and hence a phase modulator or Mach Zehnder intensity modulator could have this length; resonant modulators could be signiﬁcantly smaller. Speciﬁc designs and the challenges for modulators particular to trapped ion QIP will be discussed in Chapter 5, but we note here that i-
f such devices could be reliably achieved according to the requirements of trapped ion QIP, these dimensions would allow packing multiple phase and intensity

52

CHAPTER 2. OVERVIEW OF THE PROPOSED APPROACH

modulators onto a single chip, integrated with the addressing optics.

2.5 CMOS integration and on-chip photodetection

A few considerations motivate implementation of ion trap systems in CMOS settings. Eventual systems will require tens to hundreds of thousands of electrodes [Ste04], and reliable, scalable electrode fabrication, utilizing multiple layers of metals to connect particular and possibly distant electrodes, is hence an obvious requirement. CMOS fabrication would present a clear path to creating such large systems, and together with the waveguide devices and systems described above [OMS+12, SGO+15, MOTZ+-
14].
In addition, trapped ion quantum computers will likely require signiﬁcant classical computing resources for pulse shaping of qubit control signals [KPM+05], and trap electrode voltage control for ion motion [BGL+12, HOS+06]; and error correcting quantum computers in any qubit platform will make heavy use of classical computation for error syndrome diagnoses and feedback [Ste04]. To minimize delays from these classical operations, integration of electronics within the trap chip will be desirable, a-
nd CMOS approaches enable this in a very robust way.
These considerations alone are strong justiﬁcation to consider CMOS approaches, which even in the short term will be desirable for research groups so as to avoid the signiﬁcant labor involved in multi-layer fabrication even for relatively small chips of 10s of electrodes. In addition however, the availability of avalanche photodiodes (APDs) in standard CMOS processes oﬀers a route to on-chip detection. For example, in a 130 nm process node, APDs with lower than 100 Hz dark count rate at room tempe-
rature and detection eﬃciencies of over 20% at 425 nm have been achieved [FLC+10], with yet higher performance in devices implemented in CMOS imaging processes [WGH12]. Such devices would oﬀer a few advantages for trapped ion QIP. Most straightforwardly is again the feedback requirement for error correction – the data from measurements on ancilla qubits must be processed to determine operations on the other physical qubits, and detectors together with electronics on chip can signiﬁcantly reduce th-
e delay associated with this step.
But, given an ion height, the eﬃciency with which these photons can be collected, and what size of detector is required, and the conﬁdence with which photons from distinct ions can be distinguished are crucial metrics, and we discuss these here.
To get a rough feel for collection eﬃciencies, if the detector collects light with a cone of half-angle θ, the collected fraction is calculated as

2π

θr

ηc = dφ dθ sin(θ) |T (θ)|2 ,

0

0

(2.6)

where for a trap height h and detector radius r, θr = arctan(r/h) is the maximum angle accepted by the detector area, and T is the angle-dependent transmission into
the device from vacuum. Neglecting this reﬂection, this reduces to the solid angle fraction ηc = sin2(θ/2). We can plot this eﬃciency, assuming for convenience a

2.5. CMOS INTEGRATION AND ON-CHIP PHOTODETECTION

53

10 -1
NA = 0.4
10 -2

η
c

10 -3

No reflection (solid angle fraction only) s-polarized p-polarized

10 -1

10 0

10 1

r/h

Figure 2-7: Detector collection eﬃciency for isotropic emission (as on the 5S1/2 − 5P1/2 transition in 88Sr+) ηc, neglecting detector quantum eﬃciency, as a function of detector radius (expressed as a fraction of trap height). Dashed and dotted blue and red curves show the same accounting for angle-dependent reﬂection for s- and p- polarized light at the vacuum-oxide interface above a detector. The thick horizontal dashed line marks the ∼4% collection eﬃciencies achievable with bulk optics with NA-
=0.4, with the vertical dashed line marking the line r/h = 0.5 which is the minimum ratio required to achieve comparable eﬃciencies.

54

CHAPTER 2. OVERVIEW OF THE PROPOSED APPROACH

circular detector, as a function of the detector radius r as a fraction of trap height h, as shown in Fig. 2-7, including also the curves accounting for non-zero reﬂection of sand p-polarized light for an oxide interface (n ≈ 1.47 at 422 nm); the emission from the ion will be some combination of the two depending on emission angle, but the solid angle fraction is clearly the dominant factor. For comparison, an imaging optics in present setups to collect emitted ﬂuorescence have NAs of approximatel-
y 0.4 [SKC12], which corresponds to ηc = 0.042, and implying that a detector with r ≈ 0.4h is required to be comparable in collection eﬃciency. Already this is an appreciable area to be taken up beneath the ion, and for a 50 µm trap height would signiﬁcantly limit area available for couplers and electronics, posing additionally a challenge for trap design leaving so much area uncovered by electrodes (unless transparent electrodes can be applied at scale).
Thus having detectors close to the chip does not itself guarantee higher eﬀective NA than is possible with bulk collection optics, though it can reduce total system size drastically. And in the future, if heating an be alleviated and ions brought much closer to the surface, e.g. with h = 5 − 10 µm (or, if the height can be dynamically reduced immediately before a readout step, so that ions are trapped at a larger height for computation steps and brought closer to the chip only for the readout step-
s), detector areas can be much more manageable compared to ion spacings.
Furthermore, such detectors would not be able to discriminate ions separated by less than the trap height, as can be done by imaging ﬂuorescence onto an EMCCD. This could be dealt with by reading out ions sequentially, illuminating only one at a time with the readout light, but at the expense of parallel readout, and given the length of readout times required (of order 100 µs, to scatter ≈ 104 photons in Sr and collect ≈ 102 ) this would entail a signiﬁcant cost. While it may be possible to employ-
 arrays of detectors to allow some kind of computational discrimination of ion locations even for closely-spaced ions, this may prove quite challenging and resource intensive; nevertheless it may oﬀer another route to spacial selectivity without sacriﬁcing parallelism.
Even if logical operations are carried out with ions at a 50 µm height, both concerns above, regarding NA and ion discrimination, could be addressed in principle with traps designed with variable heights such that ions could be brought near the surface before readout (the readout operation is insensitive to heating of the ion motional mode), allowing detectors with r/h < 0.1 to still collect a few percent or more. This would be a signiﬁcant design challenge in its own right, but quite possible in -
principle. Successful on-chip detection, even if at ﬁrst low eﬃciency, would give serious motivation to develop such drastically variable-height trap structures for a large-scale system, or for example transparent electrodes that would allow large detector areas without overly perturbing the trap potentials.
The dark count rates of APDs can be low, especially at low temperature. Error rates of < 10−5 are achievable [MSW+08] with dark counts per measurement time 10 times below the signal counts with the ion in the bright state; hence, if 5% of the photons emitted near saturation at about 100 MHz are collected with a 20% QE giving signal counts at 1 MHz, we should have below at most 10-100 kHz dark counts, readily achievable with CMOS detectors demonstrated to date. A number

2.6. SUMMARY AND OVERVIEW OF CHAPTERS AHEAD

55

of potential challenges can be anticipated, however; in particular, APDs operating at low temperatures (close to 4K) as appears advantageous for ion experiments, can suﬀer from afterpulsing phenomena which can translate even extremely low rates of thermal carrier generation in to excessive noise [RLA+07]. Additionally, if not suﬃciently shielded, the high RF voltages applied to the trap may interfere with the detector operation, or the Volt-level pulses experienced by the detector may couple to th-
e potential experienced by the ion, and either coupling may prohibit cooperation of these devices.
2.6 Summary and overview of chapters ahead
Ion traps designed together with integrated optics for both ion addressing and readout, and furthermore in a platform that allows close integration of control electronics, would help ion trap quantum systems scale beyond few-qubit demonstrations, while also bringing a number of advantages in performance and eﬃciency. The following chapters will describe our steps towards this goal, ﬁrst in the design, fabrication and characterization of the focusing waveguide devices that couple the ions and waveg-
uides (Chapter 3), the ﬁrst experiment demonstrating ion addressing with such optics (Chapter 4), our work on CMOS-fabricated traps and traps with integrated APDs (Chapter 5), and on integrated electro-optic modulators for the visible (Chapter 6), followed with a concluding chapter discussing outlook and further work motivated by that here.

56

CHAPTER 2. OVERVIEW OF THE PROPOSED APPROACH

Chapter 3
Design, fabrication, characterization of focusing waveguide grating couplers
As discussed in the previous chapter, waveguiding optics integrated together with planar ion traps would oﬀer a promising route to scalable optical manipulation of trapped ion quantum states. This chapter aims to address questions related to the experimental feasibility of such an approach, starting with the basic element of a coupler to direct light in the waveguide to the ion above the chip. This is done in such a way as to focus the light to a suﬃciently small spot to both couple to a single io-
n of a group, and to minimize power requirements.
This chapter discusses the design, fabrication and optical characterization of these gratings, with much of the material based on that presented in [MR16]; experiments regarding their integration with planar traps and ion addressing are presented in the next.
3.1 Overview and previous work
The focusing grating devices presented here couple visible-wavelength light from single-mode, high index-contrast dielectric waveguides to free-space beams forming micron-scale diﬀraction-limited spots a designed distance and angle from the grating.
With a view to application in spatially-selective optical addressing, and in contrast to previous work on similar devices, deviations from the main Gaussian lobe up to 25 microns from the focus and down to the 5 × 10−6 level in relative intensity are characterized as well; we show that along one dimension the intensity of these weak sidelobes approaches the limit imposed by diﬀraction from the ﬁnite ﬁeld extent in the grating region. Additionally, we characterize the polarization purity in the foc-
al region, observing at the center of the focus a low impurity < 3 × 10−4 in relative intensity. Our approach allows quick, intuitive design of devices with such performance, which may be applied in trapped-ion quantum information processing and generally in any systems requiring optical routing to or from objects 10s–100s

CHAPTER 3. DESIGN, FABRICATION, CHARACTERIZATION OF FOCUSING WAVEGUIDE

58

GRATING COUPLERS

of microns from a chip surface, but beneﬁtting from the parallelism and density of planar-fabricated dielectric integrated optics.
A number of systems may employ integrated waveguiding optics, formed in a planar dielectric layer, that also require directing light to objects external to the chip. In atomic physics these may include atom chips [KAZ+16], broadly speaking, in which trapped atoms are manipulated in close proximity (typically 1-100 microns) to a chip which deﬁnes a trapping potential, or in planar ion trap devices [MBM+16], for scalable implementations of experiments relying on quantum control of individual trapped-
 ion qubits [SNM+13, DLF+16]. In such experiments, highly precise control over the beam proﬁle is often necessary, a challenge especially when combined with the requirement for scalability. Other areas may include structures to create and eﬃciently illuminate large arrays of focused spots for certain microscopy techniques [WCZ+10, OC12], waveguide-coupled arrays optical trapping potentials [DG98], components for optically-assisted data storage [MIH06, CPI+09], or targeted delivery of light to mult-
iple sites for biological experiments requiring optical inputs [PRH13].
The designs presented here can be generated with simple numerical calculations and two-dimensional electromagnetic simulations of uniform periodic structures; hence designs can be drawn relatively rapidly, and this approach may serve as an eﬃcient starting point for further numerical optimization. In contrast to previous work on waveguide devices generating focused beams [USNK86, HO81, SLY+97, SGG99, KNI+04], these devices are fed by single-mode (SM) waveguides on-chip which allows precise tailori-
ng of the transverse ﬁeld proﬁle and control over both low-intensity sidelobes and polarization purity of the beams generated, which we characterize here as well.

3.2 Grating design
In designing the devices, amplitude and phase shaping of the output is considered separately for the dimensions along and transverse to the propagation in the waveguide layer. The approach used along both dimensions is described below, after a brief discussion of the considerations that motivated the choice of device dimensions.

3.2.1 Dimensional considerations for ion addressing

Ion traps currently are constrained by heating rates to operate with ions a few 10s of microns from the chip surface, and we designed couplers for use with traps with a 50 µm ion height. Diﬀraction imposes a straightforward tradeoﬀ between the spot size at the focus and the required size of the grating required to generate this spot, which can be considered precisely using the standard equation describing the evolution of a gaussian beam waist as a function of distance d along its propagation dire-
ction (given by θ) from the waist:

w(d) = w0 1 + (d/zR)2,

(3.1)

3.2. GRATING DESIGN

59

(a)
540 nm

Si3N4

120 nm

Thermal SiO2

E

18 µm

z y
x

(b)

0=674 nm input z

x

y

44 µm

-30°

PECVD SiO2

Thermal SiO2

Si3N4

Silicon substrate

1.2 µm 1.5 µm

Figure 3-1: Device overview. (a) Scanning electron microscope view of the device, showing the taper from the SM waveguide and the grating region. The inset shows the single-mode quasi-TE waveguide feeding the device (white line in main image), overlaid with a simulated ﬁeld proﬁle (ﬁeld points predominantly horizontally). (b) Schematic cross-section of device, showing varying angle of emission along grating length and the two interfering emission paths.

CHAPTER 3. DESIGN, FABRICATION, CHARACTERIZATION OF FOCUSING WAVEGUIDE

60

GRATING COUPLERS

w(d) (µm)

22 20 18 16 14 12 10
8 6 4
1

1.5

2

2.5

3

Focused beam half waist (µm)

20 ° 30 ° 40 ° 50 °
3.5

Figure 3-2: Plot of beam waist in the chip plane for a given focused beam waist at height z = d cos(θ) = 50 µm above the chip, for diﬀerent beam angles θ as deﬁned in Fig. 3-1b.

where w0 is the waist at the focus and the Rayleigh range is

zR

=

πw02 . λ

(3.2)

The resulting beam waists as a function of the focused waist for a few diﬀerent propagation angles is plotted in Fig. 3-2. As shown below, along the transverse direction, the waveguide width required in the grating section for a given beam waist w is equal to ∼2.844 × w. Our designs in both this section and the next targeted a focused waist of about 2.0 microns, to avoid requiring an overly large grating area. Future designs incorporating arrays of such gratings will of course have to account for -
the same tradeoﬀ, and the size of the gratings will determine how closely they can be packed to address neighboring ions. For the present devices though, operating at θ∼30◦ and z = d cos(θ) = 50 µm, the choice of w0 = 2.0 µm led to a waist in the waveguide plane of 6.4 µm and hence a grating dimension of 18 µm.

The Si3N4 ﬁlm thickness of 120 nm was chosen as it gives a reasonably well-

conﬁned mode (slab guided mode eﬀective index is neﬀ = 1.66 when surrounded

oxide), and reasonably strong grating strengths when fully etched. Thicker ﬁlms

would correspond to a higher neﬀ and lower periodicity for a given emission angle

(since

ky,em

∼

β

−

2π Λ

)

which

can

be

more

diﬃcult

to

fabricate,

and

past

a

point

increasing thickness no longer increases grating strength, and the ﬁlm thickness here

was reasonably close to the maximum.

3.2. GRATING DESIGN

61

3.2.2 Longitudinal design

Along the direction of waveguide propagation (y as labeled in Fig. 3-1), the emitted ﬁeld proﬁle is tailored via the local grating period (Λ) and duty cycle (DC), which together set the local angle of emission θ and grating strength α (deﬁned such that along the length of a uniform grating the electric ﬁeld magnitude would decay as e−αy). We approximate the local θ and α as equal to those of a uniformly periodic grating with the same Λ and DC, accurate for gratings in which these parameters vary s-
uﬃciently slowly over length. To determine these parameters in the designs presented here, we use the standard paraxial-limit equations for Gaussian beam propagation to calculate the ﬁeld in the waveguide plane, E(y, z = 0) = |E(y)| eiφ(y), that would propagate to a focus with w0 = 2.0 µm, z = 50 µm above the waveguide plane and an angle θ = −30◦. The corresponding wavenumber along y is simply

dφ(y)

ky =

, dy

(3.3)

from which the local emission angle is calculated as

θ(y) = sin−1(ky/k0).

(3.4)

Similarly the amplitude proﬁle |E(y)| is used to calculate the necessary α(y), via:

y

−1

2α(y) = K |E(y)|2 1 − η |E(y )|2 dy ,

0

(3.5)

where η is the fraction of power outcoupled by the end of the grating length and K

is a normalization factor that enforces the relationship between grating strength and

total power emitted:

L
1 − η = exp [−2α(y)] dy,

(3.6)

0

with L the length of the grating.

In general, the electric ﬁeld in the waveguide plane from a focus at some height h above the chip can be written as (see Fig. 3-3 for illustration) [Hau84, Ver89]:

E(y

,

z

)

=

E0

w0 w(z

)

exp

y2 −
w2(z )

exp −i

y2

kz + k

− ψ(z ),

2R(z )

(3.7)

and where z is the length along the propagation axis (y and z represent the coordinates in the beam’s coordinate system, with origin at the focus as shown in red in Fig. 3-3); w0 represents the beam waist at the focus (at height z = h); w(z ) is the waist along the propagation axis, as given above; and R(z ) and ψ(z ) are the evolving

CHAPTER 3. DESIGN, FABRICATION, CHARACTERIZATION OF FOCUSING WAVEGUIDE

62

GRATING COUPLERS

y’

z

h

-L/2

L/2

y

z’
Figure 3-3: Coordinate deﬁnition for calculation of desired ﬁeld in grating plane; the bold line represents the grating extent (with grating lenth L) and the red dot represents the origin of the beam’s coordinate system, at the focus.

radius of curvature and Guoy phase, given by

R(z ) = z 1 + zR 2 z z
ψ(z ) = arctan zR

(3.8) (3.9)

The ﬁeld at the grating plane can be obtained by substituting, for points along the bold line in Fig. 3-3 representing the grating plane with z = 0:

y (z = 0) = y cos θ

(3.10)

and

h

z (z = 0) =

+ y sin θ.

(3.11)

cos θ

Together these allow calculation of the necessary ﬁeld E(y, z = 0), from which the

grating can be assembled as described below.

In the weak grating limit, the emitted angle corresponding to the phase of E(y, z =

0) can be calculated simply by observing that the ﬁrst order diﬀracted beam has

wavevector along y

2π

ky = β −

, Λ

(3.12)

where β = neﬀk0 is the guided mode’s propagation constant and Λ is the periodicity of the grating. In this limit the necessary period could be calculated independently of

the required grating strength, and while this intuition is helpful in designing devices,

3.2. GRATING DESIGN

63

1 Fit, θ = −29.7°, α = 0.14 µm−1
0.5

Electric Field (a.u.)

0

−0.5

−1

0

1

2

3

4

5

6

7

8

9 10 11

Position (µm)

Figure 3-4: (top) example output of COMSOL simulation for grating 2D cross section; and (bottom) calculated electric ﬁeld along the dark black line, showing the ﬁt from which the emission angle and grating strength are inferred.

the weak grating approximation does not accurately describe the Si3N4/SiO2 gratings considered here, and our designs were performed accounting for both Λ and DCs inﬂuence on both θ and α.
To relate the required α(y) and θ(y) to the physical grating parameters Λ(y) and DC(y) (which we deﬁne here as the fraction of a grating period where the Si3N4 is etched away and occupied by the low-index SiO2), frequency domain, ﬁnite-elementmethod simulations of uniform periodic 2D grating cross sections were carried out in COMSOL, from which the decay lengths (giving α) and emission angles are calculated as a function of Λ and DC. In these simulations, the input is in the form of the calculated-
 mode proﬁle of the uniform waveguide, and the other boundaries are surrounded by perfectly matched layers, which function as absorbing layers. Similar simulations could also be carried out via frequency diﬀerence time domain FDTD methods, for example in MEEP [ORI+10], but since we were interested in single frequency response in this case and the 2D geometry allows a simulation with small enough domain, the frequency domain calculation can be faster. An example simulation domain and ﬁeld proﬁle, t-
ogether with the ﬁt used to extract α and θ for this particular period and duty cycle, is shown in Fig. 3-4.
The results of such calculations over a range of grating parameters are shown in Fig. 3-5, together with the physical grating parameters assembled from such calculations to result in focusing along both x and y to an approximately 2 µm spot 50 µm above the chip, and at an average angle in the yz plane of −30◦. We choose θ < 0,

CHAPTER 3. DESIGN, FABRICATION, CHARACTERIZATION OF FOCUSING WAVEGUIDE

64

GRATING COUPLERS

corresponding to emission with direction along y opposite that of the guided mode, so as to ensure no second diﬀraction order; this reverse emission also turns out to be essential for focusing given the the method used to deﬁne the grating arc radii, as discussed below. The simulated eﬃciency of these devices (calculated as the upwardsradiated power divided by the incident) is 80%, taking advantage of the Si substrate as a reﬂector of downards-radiated light (Fig. 3-1a) and using angles where, giv-
en the bottom oxide thickness here, constructive interference maximizes the grating strength (Fig. 3-5a and b).
The design represented in Fig. 3-5 is for a coupler that focuses along y; the same procedure could have been used to assemble, from the data in Fig. 3-5a and b, a coupler emitting a collimated beam along y by simply choosing the corresponding E(y, z = 0) (this was done for the trap-integrated devices shown in the next chapter).
We note that although a few previous designs have employed holographic methods to ﬁnd the grating line spacings, these implicitly assume a low index contrast; the method we have adopted here, particularly for the longitudinal design parameters (and in a fashion related to work on silicon photonic grating couplers to SM ﬁbers[TBB04, NPW+16]), is directly applicable to high index-contrast structures.

3.2.3 Transverse design

Transverse focusing (along x as labeled in Fig. 3-1) is controlled by the curvature

of the grating arcs, which relates to the degree to which the phase of the radiated

beam at the outer edges of the grating in the transverse direction (at ±x) is advanced

relative to at center, and hence the strength of the focusing action.

To minimize distortion of the ﬁeld proﬁle as it propagates through the grating

region, the gratings presented here are designed such that the radius of curvature of

each grating arc is equal to the distance from the start of the taper; since the guided

ﬁeld expands through the taper such that the radius of curvature as a function of

distance from the taper start is approximately equal to that distance, this condition

approximately ensures that each grating arc is parallel to the phase front incident

on it (or perpendicular to the eﬀective rays propagating through the structure as

illustrated in Fig. 3-1c). Though this is not required for focusing action in general, as

shown below, choosing the curvature this way reduces the strength of the low-intensity

sidelobes away from the focus as compared to devices in which this constraint on the

radii was not imposed [MBM+16]. The observations on various previous devices that

led to the imposition of this constraint are described in Appendix B.

We approximately predict the height of the focus based on the radius of the arc

at the center of the grating longitudinally (which we call Rg), where the emission amplitude is engineered to be maximum (Fig. 3-5); the radius of curvature of the

phase fronts emitted, along the dimension of propagation, are expected to be roughly

Ri = Rg/ sin(θ). This, together with the standard equation for evolution of radius of curvature for a Gaussian beam as a function of distance from waist along the

propagation direction d

R(d) = d 1 + zR 2 , d

(3.13)

3.2. GRATING DESIGN

65

(a)

(b)

-θ (o)

α (μm-1)

(c) 0.15

(d) 38
36

34 0.1
32

- θ(y) (degrees)

α (y) (µ m-1)

30

28 0.05
26

24

0

22

-10

-5

0

5

10

-10

-5

0

5

10

(e)

y-position (µ m)

(f) 335

y-position (µ m)

0.4

330

0.35 325

0.3

320

Design period (nm)

0.25

315

0.2

310

Design perturbation DC

0.15

305

0.1 0

300

5

10

15

20

0

y-position (µm)

5

10

15

20

y-position (µm)

Figure 3-5: Grating design parameters. (a) Simulated α and (b) θ as a function of grating period and DC; (c) Desired local α and (d) local θ to produce the intended focus for a grating 20 µm-long along y; (e) and (f) inferred physical DC and Λ proﬁles to approximate the desired grating (black lines), together with polynomial ﬁts used to specify the design.

CHAPTER 3. DESIGN, FABRICATION, CHARACTERIZATION OF FOCUSING WAVEGUIDE

66

GRATING COUPLERS

gives the necessary radius of curvature of the grating lines to satisfy this condition. In the transverse direction (along x), the amplitude is given by the mode proﬁle
of the wide waveguide mode, a cosine function to a good approximation:

2

Ec(x) =

cos(xπ/w), w

(3.14)

where normalization is chosen such that

w/2 −w/2

E2dx

=

1.

Ideally, this would be a Gaussian, with desired initial beam waist wi (i as opposed

to the focused beam waist w0):

1
24 1

x2

Eg(x) = π

√ exp wi

− wi2

,

(3.15)

with the same normalization.

From the focused beam waist and and distance to waveguide plane we know what

the desired wi is; the question is just how to choose the physical w to maximize the

overlap

√

21 4

w/2

1

x2

κc,g = 2 π

√ cos(xπ/w) exp −w/2 wwi

− wi2

dx,

(3.16)

and this gives w ≈ 2.844wi, at which value the integral evaluates to κc,g ≈ 0.9947 implying that the cosine would couple to a Gaussian of width wi with |κc,g|2 ≈ 98.9% power eﬃciency. We therefore expect this Gaussian approximation to the waveguide mode to predict the focusing properties of the main lobe of the beam, although the deviations from an ideal Gaussian (at the ∼1% power level, and as illustrated in Fig. 3-6) will lead to propagation of higher-order Hermite-Gaussian modes as well, with i-
mplications for crosstalk away from the main lobe which will be discussed later.

3.2.4 Predicted focus distance and waist for a given design

For reference, and since these equations are helpful in design, we brieﬂy note that if the initial curvature Ri and beam waist (from waveguide width) wi are known, the expected focused beam waist is

w0 =

Riwiλ π2wi4 + Ri2λ2

(3.17)

and the distance to the focus is

df

=

π2

π2Riwi4 wi4 + Ri2λ2

.

(3.18)

These follow from a simultaneous solution of the equations for the Gaussian beam phase curvature radius R(d) and waist w(d) written above.

3.3. LAYOUT, FABRICATION, AND MATERIAL CHARACTERIZATION

67

Electric field (a.u.)

1

0.9

0.8

0.7

0.6

0.5

0.4

0.3

0.2

0.1

0

-1 -0.8 -0.6 -0.4 -0.2 0

0.2 0.4 0.6 0.8

1

x

Figure 3-6: Cosine-proﬁle waveguide mode ﬁeld (solid line) and maximally over-
lapping Gaussian proﬁle (dotted line); position is in units of waveguide width, and the Gaussian has 1/e2 width of 1/2.844.

3.3 Layout, fabrication, and material characteri-
zation
The grating and waveguide patterns are all generated by scripts that encode the designed geometry, in SKILL code within Cadence Virtuoso, for convenience using simple approximations to the curved shapes in the form of rectangles of 5 nm width – an example of such a discretization is shown in Figure 3-7, and is the same general approach used for CMOS photonics by our group previously [OR10].
Devices are fabricated starting with silicon wafers coated with 1.5 µm of thermal oxide, followed by 120 nm of stoichiometric, LPCVD Si3N4 (details on deposition in the section below). Electron-beam lithography is performed with a system operating with electrons accelerated to 125 keV energies (Elionix ELS-F125) and using HSQ resist developed with a mixture of NaCl and NaOH [YB07]. The develop step was done in this solution at room temperature for 4 minutes, by simply immersing the piece in a beak-
er containing the developer solution. Reactive ion etching is performed with CHF3 and O2 gases [HBP+06] using the RIE chamber in the nanostructures laboratory (NSL) at MIT. The CHF3 and O2 gases are ﬂowed in at rates of 4.0 and 15.0 sccm, respectively, at a chamber pressure of 10 mTorr. This etch is followed by PECVD cladding deposition of SiO2 using TEOS precursor with the Oxford-100 PECVD tool in ICL, using the recipe for “0-stress” TEOS CVD.
Using the Virtuoso software a gds ﬁle containing the desired pattern was generated, after which LayoutBeamer was used to translate into a format readable by the ebeam tool, being namely a series of points over which to scan the beam. The e-beam current used for exposure was typically 5 nA (chosen to be high enough to write full chip paterns in a few hours without being too large as to sacriﬁce resolution), and

CHAPTER 3. DESIGN, FABRICATION, CHARACTERIZATION OF FOCUSING WAVEGUIDE

68

GRATING COUPLERS

Figure 3-7: Mask layout for grating device, with inset showing discretization on a 5 nm rectangular grid.

3.3. LAYOUT, FABRICATION, AND MATERIAL CHARACTERIZATION

69

written patterns were discretized (in LayoutBeamer) to squares 2.5 nm on a side. For the beam current Ieb, dose time τ , and pitch a = 2.5 nm in this case, the delivered dose in Coulombs/cm2 is calculated as Iebτ /a2.
The range of the 125 keV electrons in silicon is approximately 50 µm, which is to say this is the depth down to which the injected electrons may propagate. Some of the electrons scattered from within the substrate are reﬂected back to the resist, where they may expose resist within a radius on the order of the range from the point at which the beam is pointed, and this exposure from backscattered electrons is responsible for the “proximity eﬀect” in electron beam lithography. As a result the subst-
rate, as well as the characteristic dimensions and pattern density of the features being written, alters the optimal exposure dose, and exposures for diﬀerent scale features must be independently checked. In this case, we used a single dose over the focusing grating area, a single dose for the ﬁber couplers, and a single dose for the SM waveguides. With HSQ these dosages can shift somewhat over the shelf life of the resist, but here the dwell times per 2.5 × 2.5 nm2 dot were, respectively, 0.14, 0-
.22, and 0.20 µs, corresponding to dosages of 11.2, 17.6, and 16 mC/cm2, respectively. Underexposed features were observed to result in grating lines that would lift oﬀ from the substrate and appear wavy or curved when imaged (for example in Fig. 3-8, and overexposed grating features translated into gaps that were partially or completely ﬁlled. Dose calibrations were performed by writing a version of a desired device using a series of diﬀerent dwell times, incremented by 0.02 µs (this was due to c-
onstraints on the dose time, requiring that it be a multiple of 0.02 µs, in the system conﬁguration when these writes were performed – later experiments, presented in Ch. 6, used more ﬁne dose stepping with a constant multiplication factor between dose tests). For single-mode waveguides, approximately optimal dosage can be estimated by checking at which dosages the waveguide width realized is approximately as designed (underexposure typically results in eating away of the sidewalls, and vice versa-
 – often also additional roughness in the resist), and grating dosages can be estimated by avoiding the evident underexposure as visible in Fig. 3-8 and avoiding gap ﬁlling in, evident under SEM. Highly overexposed gratings can also be identiﬁed by optical microscopy, where typically the grating region appeared signiﬁcantly darker than the wide taper region, but this contrast is not seen when the lines are signiﬁcantly ﬁlled in. The optimal doses for HSQ could change noticeably (on the 0.1-0.2 µs -
dwell times at least) over months, so these calibrations had to be repeated every 2-3 months, roughly, though how often would depend on exactly what features are being written.
We note additionally that the particular order in which shapes in the design were exposed by the e-beam tool could signiﬁcantly aﬀect the intensities in the weak sidelobes; the results shown below were from devices where care was taken to ensure the pattern was exposed symmetrically, and a comparison with observations from other devices is presented Appendix B.
3.3.1 Silicon nitride deposition and loss
Many of the gratings were fabricated in LPCVD-grown stoichiometric Si3N4 deposited at 720◦C on silicon wafers with a 1.5 µm thermal oxide; the wafers with thermal oxide

CHAPTER 3. DESIGN, FABRICATION, CHARACTERIZATION OF FOCUSING WAVEGUIDE

70

GRATING COUPLERS

Figure 3-8: SEM image of slightly underexposed grating feature, showing lines lifting oﬀ (obtained using a 0.28 µs dwell time with a 2 nA beam current, equivalent to 0.11 µs with 5 nA for comparison to the numbers given in the text)
were supplied by Rogue Valley Microdevices, and the LPCVD material was deposited in the tool in ICL at MTL. The guided mode in the ﬁlm can be measured before waveguide patterning to assess material quality using a prism coupling system made by Metricon; here a HeNe laser beam (632 nm) is shone in through a prism whose surface is in contact (to within λ/2π) of the nitride. The angle of the input is swept through a range where the beam totally internally reﬂects within the prism, and at a particular-
 angle when the light within the prism has a wavevector parallel to the substrate surface equal to the guided mode’s, the light is coupled in and a dip in the transmission is observed, as in Fig. 3-10. The loss can be measured in this system with a ﬁber detector that scans along the path of the launched light and measures scattering out of the mode, ﬁtting the proﬁle to a decaying exponential.
The unpatterned ﬁlm material on silicon substrates had low loss (< 0.4 dB/cm as measured with the prism coupler at 632 nm) and was ideal for tests of designs.
Silicon substrates, especially doped but also undoped [NLK+14], present diﬃculties for the RF ﬁelds used in ion traps, so the experiments towards integration with the trap structure had to make use of either a substrate transfer or a diﬀerent substrate with low RF loss, such as cystalline quartz, sapphire, or fused silica.
3.4 Optical characterization
The grating emission is characterized by imaging the emission in a microscope using 50× objective with a 0.95 NA (Olympus MPLAPON50x, in an Edmund Inﬁnitube Proximity Series microscope tube assembly) . This NA implies an acceptance cone half-angle of 72◦, large enough to ensure the emission of the couplers is collected. A

3.4. OPTICAL CHARACTERIZATION

71

Intensity (au)

400

300

200

100

0

1.61

1.62

1.63

1.64

1.65

1.66

1.67

1.68

neff

Figure 3-9: Image of prism-coupling into guided ﬁlm mode on a 6 inch silicon wafer, and trace of detected (reﬂected) intensity as a function of angle, plotted against the eﬀective index corresponding to the physical angle.

CHAPTER 3. DESIGN, FABRICATION, CHARACTERIZATION OF FOCUSING WAVEGUIDE

72

GRATING COUPLERS

Figure 3-10: Fiber coupler used for input to waveguides; the width of the grating region is 6 µm.
series of images is taken scanning the focal plane of the imaging system up from the waveguide layer, and the resulting stacks of images are integrated along x or y to yield intensity proﬁles along y and x, respectively, similar in principle to a “knifeedge” measurement at each height. The resulting proﬁles are shown in Fig. 3-11, showing focusing behavior along both dimensions, and an average emission angle of θ ≈ −27◦. RF noise from an attenuated noise source (Toptica Laser Coherence Controller)-
 was fed to the modulation input of the laser the light input to the gratings for these measurements, with the purpose of reducing the coherence length to order ∼1 cm, to eliminate interference artifacts that otherwise arose in the imaging system (as are visible in the next chapter in Fig. 4-2).
By collecting the emitted beam on a photodiode and comparing to the input power, and normalizing for the loss of the input coupler and waveguide feeding the focuser, we estimate the physically realized eﬃciency of radiation into the focused beam to be 70 ± 15% (with uncertainty due to variation in total waveguide transmission on this sample), in reasonable agreement with simulation. Here the input grating coupler (to the SMF) loss was measured to be 7.3 dB (reproducible from device to device withi-
n 0.1 dB), the average total loss from the 1.8 cm-long waveguide was 13.6 dB, and the average loss from the focusing gratings was 1.6 dB as measured on the free-space power head.
3.4.1 Detailed characterization at focus
The spot was characterized in detail at the designed height of z = 50 µm. The inset in Fig. 3-12 shows the measured intensity proﬁle here, together with intensity proﬁles along x and y. The Gaussian ﬁts to the main lobes (shown in grey dotted lines) indicate a waist of w = 2.0 µm along x; along y the Gaussian ﬁt has a 2.3 µm 1/e2 half-width, which corresponds also to w = 2.0 µm after accounting for the propagation

3.4. OPTICAL CHARACTERIZATION

73

(a)

(b)

1

0
Figure 3-11: Measured “knife-edge”-like beam proﬁles (a) along y and (b) x showing focusing behavior along both dimensions.

CHAPTER 3. DESIGN, FABRICATION, CHARACTERIZATION OF FOCUSING WAVEGUIDE

74

GRATING COUPLERS

along this direction. These ﬁts indicate the device focuses approximately as designed

along both dimensions; although the minimum averaged waists are realized actually

at about 54 µm along y and 40 µm along x, these oﬀsets are within a Rayleigh range

of 50 µm and the diﬀerence in beam waist with respect to that at 50 µm is small.

The intensity proﬁles plotted in Fig. 3-12 result from a series of images, taken with

a QColor 5 scientiﬁc CCD sensor (only the red color channel data was used), with

exposure times varying by a factor of 400, and with dark frames subtracted (at each

exposure length, 10 frames were taken with the grating illuminated and averaged,

from which 10 frames with the laser blocked were averaged and substracted), to

allow suﬃcient dynamic range to resolve the intensity up to ±25 µm from the center.

Along the transverse direction (x, along which focusing is controlled by the grating

line curvature), we plot this data together with the result of a 1D diﬀraction integral

calculation showing the expected proﬁle at this height accounting for the eﬀect of the

ﬁnite “aperture” corresponding to the ﬁnite grating width. Since a wide waveguide’s

fundamental mode proﬁle approximates a cosine proﬁle in the core, we calculate

the diﬀraction from a cosine proﬁle with zeros at ±w = 9 µm, corresponding to

the diﬀraction from the center of the grating region where the emitted intensity is

designed to be maximum. The resulting proﬁle, calculated from the 1D diﬀraction

integral

w

eik0d

E(x, z = 50µm) = dx E(x , z = 0) √ ,

−w

d

(3.19)

with d =

(x − x )2 +

h cos θ

2, and where E(x , z = 0) is the cosine-proﬁle ﬁeld

amplitude along x in the waveguide plane with appropriate radius of phase curvature,

is plotted in the red line in Fig. 3-12(a), and the close correspondence of this envelope

with the measured points indicates that, along x, the proﬁle even in the low-intensity

sidelobes is very nearly diﬀraction-limited.

This is a signiﬁcant improvement in sidelobe suppression over the performance of

the device previously presented [MBM+16], which is due to the condition imposed

here on the radius of curvature as described above, which minimizes distortions of the

transverse proﬁle of the guided ﬁeld propagating through the grating region. Along

the longitudinal direction, the emitted ﬁeld proﬁle is controlled by the period and duty

cycle of the grating and the low-intensity sidelobes are not as well suppressed, but we

still observe values below 10−3 beyond 10 µm from the focus. Further optimization

of these designs may allow improvement beyond the mode purity achieved here, or

minimizing intensities at particular distances from the center. However, we expect

these designs may already be applicable with advantages in performance, as for typical

ion experiments a high degree of control over the sidelobes is necessary only along

one dimension (the trap axis), and along x the proﬁle here is already a signiﬁcant

improvement over what has been achieved in ion experiments [SNM+13, DLF+16].

That a straightforward, intuitive design method achieves this performance along x

may be a signiﬁcant aid to practical design of experiments.

We note again that the sidelobe-proﬁle presented here was from devices in which

the e-beam exposure occurred in a symmetric fashion; the sidelobe proﬁles of devices

written in a less ideal order are shown in the Appendix.

3.4. OPTICAL CHARACTERIZATION

75

(a)

(b) 100

10 -1

Relative intensity

10 -2

10 -3

10 -4

10 -5 -25 -20 -15 -10
(c) 100

-5

0

5

x (µm)

10 15 20 25

10 -1

Relative intensity

10 -2

10 -3

10 -4

10 -5 -25 -20 -15 -10

-5

0

5

y (µm)

10 15 20 25

Figure 3-12: Intensity proﬁles along x (a) and y (b) imaged at a height of z = 50 µm. The inset shows the recorded intensity proﬁle at this height, with the solid and dotted lines corresponding to the horizontal axes for (a) and (b) respectively. In each case the measured data points (black circles) are taken from a set of images with exposure times varying by a factor of 400 to allow suﬃcient dynamic range. Ideal Gaussian ﬁts with 1/e2 half-widths of 2.0 µm (a) and 2.3 µm (b) are shown in the dot-
ted gray lines, as well as in (a) the result of a 1D diﬀraction integral calculation (solid red line) for the intensity proﬁle resulting from the cosine-shape ﬁeld proﬁle expected along x in the grating region.

CHAPTER 3. DESIGN, FABRICATION, CHARACTERIZATION OF FOCUSING WAVEGUIDE

76

GRATING COUPLERS

Designs with higher eﬀective NA, achieved by either reducing the focus height or increasing the emitting area, should result in tighter focuses; the present devices are not yet at a limit set by total internal reﬂection at the oxide-air interface, which would allow w0 well below 1 µm. For tighter focuses requiring smaller Rg, for a given grating waveguide width (proportional to emitting aperture diameter) the constraint on curvature radius here may not be practically applicable (i.e. it may result-
 in tapers expanding at a greater angle than the divergence angle corresponding to the the SM waveguide mode), and in these cases the desired focusing behavior may be achieved at a trade-oﬀ with sidelobe suppression. We note also that the constraint on the radius here produces a focusing beam only when θ < 0; in the opposite case (perhaps more easily fabricated in some cases since forward emission corresponds to a larger grating period) the constant phase surfaces of the proﬁle expanding through t-
he taper coinciding with the grating arcs would correspond to a diverging radiated beam. In that case the arc radii can modiﬁed to still produce focusing for θ > 0, but also with a tradeoﬀ in sidelobe suppression unless otherwise compensated.
3.4.2 Polarization purity
Finally, we characterize the polarization purity in the focal region. Owing to the dominant polarization of the mode feeding the taper, the radiated ﬁeld is expected to be polarized predominantly along x; furthermore, the SM waveguide mode has a dominant x component that is even about the yz-plane, with smaller y- and z-directed ﬁelds which are odd about this plane. Owing to the symmetry of the taper and grating about the yz-plane this symmetry is preserved as the ﬁeld propagates through the struc-
ture (eﬀective rays propagating through the structure illustrated in Fig. 3-1(c), with accompanying E-ﬁeld, showing the odd symmetry in the y-directed components), and hence at the center of the radiated beam in the yz plane the components other than along x should be zero.
A rotating polarizer (Thorlabs LPVISE100-A in a rotating mount) inserted in to the microscope allows us to image only the light with polarization along x, or that along the other orthogonal component also transverse to the propagation direction (primarily along y). Images obtained at z = 50 µm with the polarizer oriented along x and y are shown in Figs. 3-13(a) and (b), with a trace along the y = 0 axis in Fig. 3-13(c). The x-polarized proﬁle closely reproduces the patterns obtained with no polari-
zer inserted, and the null in the y-polarized light at x = 0, as well as the side-lobes near ±2 µm owing to the weak y-directed ﬁeld components in the grating region, are consistent with the argument above. We measure a minimum of < 3 × 10−4 in relative intensity, likely limited by the extinction of the polarizer used here (∼1 × 10−4), and the birefringence of the microscope objective, not a low-stress objective optimized for polarization microscopy.
These observations indicate that these devices can produce beams with a high degree of polarization purity at the center of the focus. We note that we have imaged in the far-ﬁeld the intensity in the two components transverse to the propagation direction, and our measurement is not sensitive to the longitudinal components that generally arise locally in the focal region when beams are tightly focused [TTZ+13];

3.4. OPTICAL CHARACTERIZATION

77

(a)

(b)

(c) 100
10 -1

x-polarized y-polarized

Relative intensity

10 -2

10 -3

10 -4

10 -5

-8

-6

-4

-2

0

2

4

6

8

x (µm)

Figure 3-13: Measured intensity proﬁles when imaging (a) only the dominant x-oriented polarization and (b) the orthogonal transverse polarization (with the polarizer oriented along y); color bars are scaled diﬀerently for each plot but correspond to the same scale. (c) Cross section along y = 0, showing intensity (relative to the peak of the x-polarized intensity) in each component along x; black circles are points measured with the polarizer oriented along x, and red those with the polarizer orie-
nted along y.

CHAPTER 3. DESIGN, FABRICATION, CHARACTERIZATION OF FOCUSING WAVEGUIDE

78

GRATING COUPLERS

measurement of relative excitation rates on transitions involving diﬀerent sublevels in an atom or an ion moved through the focal region could allow precise probing of the polarization proﬁle in all three dimensions.

3.5 Discussion
Previous work has shown that photolithography and, more speciﬁcally, full CMOS processes can be leveraged to produce photonic structures like those presented here [DMR+04, OMS+12], often beneﬁtting from optical proximity correction techniques for ﬁne features [MOTZ+14]; the dimensions in the devices here should be achievable with the photolithography used for current 14-nm processes. Hence, in a slightly customized process with a patternable layer suitable for visible-wavelength waveguides (like t-
he Si3N4 used here), it should be possible to integrate such devices on silicon substrates with multi-layer CMOS ion traps [MEB+14] for large-scale QIP systems based on such devices, or perhaps with CMOS photodiodes for wide-ﬁeld microscopy.
The precision with which the transverse proﬁle is formed here is comparable to that demonstrated with assemblies based on digital micromirror device arrays for optical lattice experiments [ZPM+16], and should be generally useful for highly precise deﬁnition of static optical potentials from compact and scalable devices, and without the need for additional high-NA bulk optics. Further extensions may include generating circular polarizations using either two separate couplers or ideas similar to tho-
se used in polarization-splitting couplers [MGM+11], as well as more complex optical proﬁles; for example, Hermite-Gaussian beams could be obtained along either dimension by feeding the taper and grating with a higher-order waveguide mode, or shaping the longitudinal grating proﬁle correspondingly. In general these results demonstrate the possibility for high index-contrast waveguide devices to produce precisely tailored and tightly focused beams near a chip surface, using an intuitive and relativ-
ely quick design approach, and in a fashion that should be scalable to complex geometries.
3.5.1 Possible improvements to sidelobe suppression in present devices
A notable feature of the devices presented here is the nearly diﬀraction-limited sidelobe intensities achieved along x; this indicates the possibility that such devices can play a role in systems requiring very low crosstalk to areas of space at some distance from the main focus. One such example is of course ion trap QIP, and such devices’ performance, and comparison to existing experiments relying on such addressing in trapped-ion settings, is discussed in the next chapter.
Here we brieﬂy mention possible routes to further improving the sidelobe suppression in these devices. The grating area can be increased, using the same constraints on radius of curvature, as long as the taper angle does not exceed the Gaussian beam

3.5. DISCUSSION

79

10 0 10 -1

18 µm grating width 30 µm grating width

Relative intensity at z=50 µm

10 -2

10 -3

10 -4

10 -5

10 -6

-25

-20

-15

-10

-5

0

5

x (µm)

10

15

20

25

Figure 3-14: Straightforward possible improvement to transverse focal width and sidelobe intensity, by increasing waveguide width from 18 µm to 30 µm.

divergence angle corresponding to the waveguide mode feeding the taper

λ

θd

≈

. neﬀ πwg

(3.20)

where wg represents the eﬀective waist of the guided mode. This is approximately 300 nm for the waveguides here, corresponding to θg ≈ 25◦, in excess of the current taper angle of 15◦. This suggests that for the same focal height as was used here, a larger taper angle could be employed and hence a larger average emitting area in the transverse direction by a factor of tan(25◦)/ tan(15◦) ≈ 1.7; the impact on sidelobe intensities, expected from the 1D diﬀraction integral calculation described above,-
 is shown in the diﬀraction calculation in Fig. 3-14.
Depending on the application the tradeoﬀ in device area may not be favorable, but the fractional reduction in sidelobe intensity at a given distance is in excess of the increase in dimensions.
Finally, though we have not pursued this in our present work, which has focused more on physically motivated and intuitive designs that allow fairly straightforward extension to other wavelengths or material environments, for some applications it may be interesting to modify the proﬁle of the diﬀracted light so as to suppress it at speciﬁc distances and enhance it at others; in ion addressing such capability would be desirable, since one would know in a designed system at which positions other ion-
s would be. This may be possible by tailoring the strength of the grating in the

CHAPTER 3. DESIGN, FABRICATION, CHARACTERIZATION OF FOCUSING WAVEGUIDE

80

GRATING COUPLERS

transverse dimension (by varying the DC as a function of position along x) so as to shape the transverse mode proﬁle of the grating emission. A number of numerical and inverse design optimization procedures may play a role in such work.
Nevertheless, the devices as demonstrated above already exceed the performance of existing trapped-ion experiments, as is discussed in more detail in the next chapter when crosstalk errors are experimentally characterized. Especially given the potential for improvement through tradeoﬀs with device area, or optimization at particular locations, we expect such devices should allow signiﬁcant advantages in this regard.
3.6 Conclusion and future work
The focusing grating devices here have many similar features to grating devices designed in the context of silicon photonics (e.g. [MGM+11] ), but represent the ﬁrst time the side-lobes and polarization purity have been managed and characterized to the degree shown here, and indicate for the ﬁrst time the potential for integrated optics to generate precisely tailored beams propagating in free space.
The devices discussed here are similar to those that were employed for scalable trapped-ion qubit addressing [MBM+16]. Such devices’ integration with planar ion traps and their use in single ion addressing is presented in the following chapter.

Chapter 4
Ion addressing with waveguide optics
In this chapter we describe our experiments utilizing devices such as those discussed in the previous chapter, integrated within planar ion trap chips, for optical ion addressing with tightly focused beams. Much of the material here is based on the material in [MBM+16]. We ﬁrst brieﬂy summarize the motivations for the use of such optics in ion trap systems (discussed in more detail above in Ch. 1); describe then the design of the ion-trap integrated waveguide device; and then the optical and singl-
e-ion experiments.
4.1 Overview
We ﬁrst brieﬂy summarize the motivations for this work, as discussed in more detail primarily in Ch. 2. As compared to previous work concerning integrating optics, the gratings used here are compact compared to the optical ﬁbers and Fresnel lenses previously integrated with planar traps for addressing [KHC11] and ﬂuorescence collection [VCA+10, SNJ+11] (cross-sections ≥100 µm in diameter), and most importantly the planar fabrication used here to deﬁne the optics for both routing and addressing len-
ds itself to intimate integration with the planar trap electrodes. Furthermore, such waveguide systems have been demonstrated to be scalable to complex geometries of thousands of devices or more [STY+13]. Though micro-electro-mechanical systems (MEMS) mirrors integrated with traps have been proposed as well [KK09], experiments so far have utilized MEMS components external to the vacuum chamber and separate from the chip [CMBK14], leaving full integration an essential outstanding challenge.
Integrated waveguide devices bring several advantages for ion addressing in planar traps. The ability to fabricate, in the same lithographically deﬁned waveguide layer, multiple splitters, waveguide crossings and bends with radii less than 10 µm, would enable the realization of a variety of trapped ion architectures, with ﬂexibility as to arrangement of qubits [KMW02, CLJ08], and with light delivered in parallel to each site. This parallelism will be essential in large-scale systems in which speed-
 is at a

82

CHAPTER 4. ION ADDRESSING WITH WAVEGUIDE OPTICS

premium due to ﬁnite coherence times. Additionally, grating couplers near the ions can focus light to µm-scale spots, allowing quantum logic gates of a given interaction time using 2-3 orders of magnitude less power when compared to geometries with beams propagating parallel to the chip surface, in which the beam waists are typically limited by diﬀraction and beam-clipping concerns to 30 − 50 µm diameters [KK09]. This focusing is crucial also for general individual addressing in an ensemble of clo-
selyspaced ions [SNM+13]. In addition, the phase stability of waveguide approaches even for complex optical paths [PCR+08] will beneﬁt qubit operations, which are generally phase-sensitive. Furthermore, deﬁnition of optics within the trap chip essentially eliminates beam pointing instabilities at the ion location as a noise source [BWC+11, SNM+13]. Beyond trapped ion QIP, integrated parallel distribution and focusing of light near a chip surface may ﬁnd further application in atomic physics, such -
as in ion clocks or neutral atom dipole trap arrays, and more broadly in the various applications of nanophotonic systems.

4.2 Integrated waveguide trap design and fabrication
4.2.1 Choice of substrate
So that the chip temperature remains low despite dissipation of the RF ﬁelds applied to the trap electrodes, a material with high cryogenic thermal conductivity is ideal for the substrate. Silicon is a good candidate, but we aimed for maximum simplicity in fabrication, and silicon traps are diﬃcult to operate with a single metal layer (i.e. without a ground plane to isolate the RF from substrate; see chapter below on CMOS traps) due both to the RF properties of silicon, and the possibility for pho-
togenerated charge carriers in silicon to result in destabilizing stray ﬁelds.
The two prime candidates other than Si are sapphire, which the Lincoln group has used for planar traps, and crystalline quartz. Crystalline quartz is preferable due to its lower refractive index, allowing waveguides to be fabricated directly on the substrate without an intermediate thick buﬀer oxide, which would have to be deposited with PECVD and then chemical-mechanical-polished (CMP) to have suﬃcient thickness and smoothness to make waveguides on sapphire (Quartz glass or fused silica, as oppos-
ed to the crystalline form used here, has an index orders of magnitude lower at 4 K [lak]).
A consequence of this substrate choice is that the reﬂection oﬀ of the silicon cannot be used to enhance grating eﬃciency, as was done in the previous chapter. Hence these devices had lower total eﬃciencies, both since they emitted approximately equally along the ±z directions, and because the lack of constructive interference from the two paths results in a lower grating strength (and less total light out-coupled over the course of the grating).

4.2. INTEGRATED WAVEGUIDE TRAP DESIGN AND FABRICATION

83

4.2.2 PECVD and LPCVD SiN deposition
LPCVD deposition on crystalline quartz failed in the ﬁrst attempt because the temperature ramp to 720◦ was done too rapidly (over 3 hours), which resulted in all the wafers shattering, perhaps due to the α − β inversion in crystal quartz, at 573◦ C (although Quartz is in general brittle and overly fast temperature ramps even up to 400◦ were observed also to result in cracks). This issue has been encountered in other high-temperature processes using crystalline quartz [PLM+09]. A subsequent attempt-
 with a signiﬁcantly slower ramp avoided this problem, but we nevertheless observed high loss (8 dB/cm, via prism-coupling measurements at 633 nm) in ﬁlms formed as such. The reason for this relatively high loss is unclear, but may be related to the high tensile stress that LPCVD nitride grows with, which together with the crystalline Quartz substrate may result in defects not seen when the nitride grows on amorphous SiO2 (as in the case of thermal oxide on silicon).
In any case, the reason for this behavior is not understood as of this writing, and as it happened the LPCVD chamber developed a leak soon after the observation of the high loss on crystalline quartz, preventing investigation of this for some time. Instead, we opted to use plasma-enhanced chemical vapor deposition (PECVD) to form the nitride ﬁlms, which occurs at lower temperatures (typically between 300 and 400 ◦C), and can be more quickly performed on numerous separate samples.
The Oxford-100 PECVD tool in ICL was used to deposit Si3N4 ﬁlms on Quartz, and no problem with shattering was encountered in deposition at 300◦. For the devices presented below, the standard SiN recipe on the tool was used, which involves both low frequency and high frequency RF deposition, aimed at minimizing stress in the nitride. Such ﬁlms on quartz were observed to have losses of approximately 6 dB/cm. However, in later experiments after the device presented below was fabricated, we found that-
 using low frequency deposition alone could reduce the ﬁlm loss by a few dB/cm, consistent with observations in previous studies [GJG+08]. The standard recipe had a rate gas ﬂow ratio of 1 : 2 (NH2 : SiH4), and furthermore, reducing the relative ﬂow rate of the silane resulted in a slightly lower index ﬁlm, but lower loss, as summarized in the measurements in Table 4.1; here, the Metricon measurements on Si/SiO2 samples refers to samples on silicon with the 1.5 µm thermal oxide, as compared to dir-
ectly on crystal quartz (right-most column). In all cases, the loss on crystal quartz was observed to be higher than on thermal oxide. Nevertheless, this loss is tunable via the deposition conditions. We note though that although LF deposition was reproducibly lower loss than HF/LF depositions, and that crystalline quartz substrates did typically result in higher losses than Si/thermal oxide, losses obtained on diﬀerent crystal quartz wafers could vary by as much as a few dB/cm, for reasons that r-
emain unclear.
Though routes to lower loss PECVD ﬁlms are hence possible, all subsequent discussion in the present chapter is on the device that was made before the above measurements were carried out, with the standard PECVD SiN (using both LF/HF deposition and with a ﬁlm loss of approximately 6 dB/cm – the same gas ﬂow ratio as the middle column of Table 4.1) directly on crystalline quartz.

84

CHAPTER 4. ION ADDRESSING WITH WAVEGUIDE OPTICS

NH3 : SiH4 (sccm) 20 : 20
13 : 26
40 : 20

Reﬂectometry (monitor)
178 nm thickness, n(674) = 1.943
186 nm thickness, n(674) = 1.988
166 nm thickness, n(674) = 1.900

Metricon (Si/SiO2)
neﬀ = 1.679, < 0.5 dB/cm
neﬀ = 1.727, ∼1.9 dB/cm
neﬀ = 1.637, ∼1.0 dB/cm

Metricon (quartz)
neﬀ = 1.664, ∼1.8 dB/cm
neﬀ = 1.694, ∼5.8 dB/cm
neﬀ = 1.634, ∼2.6 dB/cm

Table 4.1: Observations on ﬁlm and waveguide properties of PECVD SiN deposited under various conditions on both Si/SiO2 samples and crystal quartz. These depositions were done using only LF deposition.

4.2.3 Chip layout and design
The trap electrodes and waveguide patterns in the device presented here are visible in the optical micrograph of Fig. 4-1(a). Waveguides were fabricated on a crystalline quartz substrate in a silicon nitride (SiN) ﬁlm (with refractive index n ≈ 2.0), with cross-sectional areas of approximately 120 nm × 540 nm, single-moded for the quasiTE polarization at λ0 = 674 nm. These waveguides route light on chip without phase-front distortions or diﬀraction. Approximately 1 µm of SiO2 forms the top claddin-
g, above which sit niobium (Nb) trap electrodes; the resulting cross section together with a simulated guided mode E-ﬁeld proﬁle is illustrated in Fig. 4-1(b). This guided mode is coupled to a free-space beam via a focusing grating coupler, which consists ﬁrst of a taper to expand the mode to that of an 18 µm-wide waveguide, and then a series of curved grating lines with period, duty cycle, and radius of curvature chosen to couple the light to a beam focused near the ion location and polarized in -
the x direction, illustrated schematically in Fig. 4-2(a), (b).
Light is input to the chip via separate grating couplers designed to couple to a 30 µm-diameter beam; light is focused onto these couplers by a 15 cm focal length lens and at an angle −37◦ from normal to the chip surface. To reduce possible scatter from the input couplers at the ion location, these input couplers are approximately 6.5 mm from the trap center; thus the in-coupled light is routed on chip in a SM waveguide over about 8.5 mm and through two adiabatic 50/50 power splitters to three foc-
using couplers at the trap site, and to one output waveguide intended to produce an output beam for optimization of the input coupling. The three focusing couplers are oﬀset by diﬀerent distances from the trap axis to account for possible misalignments between trap sites and beams, as shown in Fig. 4-1; two sets of these three were included on the chip (each excited by one input coupler), and trapped ion measurements were taken with those labeled Set a in the micrograph. The emitting region of the-
 coupler has an area of 18 × 18 µm2, and design is summarized in the

4.2. INTEGRATED WAVEGUIDE TRAP DESIGN AND FABRICATION

85

(a)
RF pad

Input couplers

DC pads

Ion-addressing couplers
1 cm

(b)
y x

674 nm input

Set a

DCs (c)

RF
Focusing

Nb

couplers

Vacuum 500 nm

100 µm

RF DCs

SiO2

1 µm

z

SiN

540 nm

crystal quartz

Figure 4-1: (a) Optical micrograph of the designed ion trap with integrated waveguides and couplers underneath at multiple trap zones; waveguides and couplers are visible via topography transfer to the metal. Ions are trapped at one of the positions marked by the red dots, 50 µm above the electrodes, with appropriate potentials applied to the DC and RF electrodes. (b) Simulated electric ﬁeld mode proﬁle of the single quasi-TE mode (ﬁeld oriented predominantly horizontally) waveguide used for routi-
ng. The crystalline quartz substrate and PECVD SiO2 form the cladding for the SiN core.

86

CHAPTER 4. ION ADDRESSING WITH WAVEGUIDE OPTICS

Methods. The ion trap design is as presented previously [SKC12], except for openings in
the RF electrodes (introduced symmetrically about the trap axis) to allow the beams from the focusing couplers to emit through the chip surface. Although the couplers were present on only one side of the trap axis, the 20 µm-square openings in the RF electrodes of the ion trap (Fig. 4-1) were introduced symmetrically around the trap axis to prevent walk oﬀ along y of the trapping pseudopotential minimum; along z, 3D simulations indicate that these openings resulted in the RF null moving up away fr-
om the electrode from the initial 50 µm by only 1 µm.
4.2.4 Grating design
The design of the couplers is similar to that of those presented in the preceding chapter, although here a square aperture was used and the radii of curvature were not matched to the taper length. Following Fig. 4-2(a) and (b), a taper ﬁrst expands the mode of the SM waveguide to a larger size laterally; the taper is nonadiabatic and results in curved phase fronts with radius of curvature at the end of the taper approximately equal to the taper length. Subsequently a grating consisting of a series-
 of lines approximately along x with spatially varying period Λ(y) and grating strength α(y) emits the light at an angle approximately −38◦ from normal; backwards emission is preferred to prevent emission into multiple diﬀraction orders. The lines are parabolic, with curvature radius chosen to focus the beam emitted in free space along the direction transverse to propagation (along x in Fig. 4-2), accounting also for the divergence introduced by the non-adiabatic taper. Due to the orientation of t-
he couplers with respect to the trap axis, and that multiple ions in a given trap zone arrange themselves along the trap axis and can be repositioned with DC ﬁelds across many microns along the axis, the couplers were designed to focus only along x; this eases requirements on alignment between the waveguide and trap metal features.
In these devices, the periodicity ranged from 290 - 310 nm and the duty cycle from 0.1 to 0.4 over the course of the grating, so as to produce an approximately Gaussian amplitude proﬁle along y, while maintaining a constant angle of emission. The grating lines had a curvature radius of 39.6 µm, chosen to produce a beam focused along x near 50 µm above the waveguides.
4.2.5 Device fabrication
The 1 cm2 die that formed the chip was written three times on a 3-inch crystalline quartz wafer, chosen as substrate for its high thermal conductivity at low temperature and its relatively low optical index (n ≈ 1.54 − 1.55 at λ0 = 674 nm) which serves to keep the optical mode well conﬁned in the SiN core. An Oxford-100 plasma-enhanced chemical vapor deposition (PECVD) tool depositing SiN at 300◦C was used to create the SiN ﬁlm. Following the HSQ resist spin on and softbake at 85◦C, to prevent sam-
ple charging during e-beam lithography, a thin layer of conductive polymer (ESPACER 300Z) was spun on top of the HSQ. This layer is necessary in this case as the substrate is insulating; without this grounded conductive layer, charges accumulated

4.2. INTEGRATED WAVEGUIDE TRAP DESIGN AND FABRICATION

87

Height above waveguide (µm) Ix at z=50 µm (a.u.)

(c) 70
60 50 40 30 20 10
0

(a)

-38°

to ion

z 0=674 nm input Crystalline quartz substrate

Nb
SiO2 1 µm SiN 120 nm

x

y

(b) Nb trap electrodes

88Sr+, z=50 µm

z 0=674 nm input y
x

-60

-40

-20

0

y (µm)

SiN 18 µm

30 µm (d)

-20

0

x (µm)

18 µm

(e)
1

0.9

0.8

0.7

0.6

0.5

0.4

0.3

0.2

0.1

0

20

-5

0

5

x (µm)

Figure 4-2: (a) and (b) Cross-sectional schematics of the designed focusing grating coupler as integrated with the trap electrodes in the y − z and x − y planes. (c) and (d) “Knife-edge” proﬁles of the emitted intensity along x and y from 0-70 µm above the waveguide layer, showing collimated emission along x and focusing along y; striations visible in the y-data are interference artifacts owing to reﬂections in the imaging system. (e) Beam proﬁle along x near the focus, at the designed trap height-
 of about 50 µm along the section labeled by the white line in (d), the ﬁt (brown line) to the measured points indicates a predominantly Gaussian beam with 1/e2 radius w0 = 2.0(1) µm, with uncertainty arising from the pixel-length calibration.

88

CHAPTER 4. ION ADDRESSING WITH WAVEGUIDE OPTICS

in the substrate would result in uncontrolled deﬂections of the electron beam, unlike when using doped Si substrates (as in the previous chapter).
The waveguide fabrication and cladding was done in the cleanrooms at MIT, and subsequently the Nb deposition and trap electrode patterning was performed by staﬀ at Lincoln Laboratory. Electron beam exposure deﬁning the waveguides was performed with an 125 keV e-beam lithography system (Elionix F-125). Following exposure the conductive polymer was rinsed oﬀ with DI water and the HSQ was developed in a room-temperature 1% NaOH, 4% NaCl solution for 4 minutes, and further rinsed with acetone and isop-
ropyl alcohol. The pattern was transferred to the nitride ﬁlm via reactive ion etching (RIE) using CHF3 and O2 gases. The same PECVD tool as for the nitride was then used to deposit the SiO2 cladding (also at 300◦C).
Alignment marks written in the nitride were used to spatially reference the photomask for Nb during contact lithography after sputter deposition of the metal ﬁlm. Following the trap electrode lithography and RIE of Nb in SF6, the individual die were diced from the wafer (leaving the independent test structures used for the grating measurements in Fig. 4-2 intact), mounted, and the trap electrodes wirebonded (these steps also by the staﬀ at Lincoln).
Although electron-beam lithography was used to deﬁne the waveguides and gratings in this work, the minimum gap size in the grating design here is 30 nm, within resolution limits of current 14-nm CMOS processes. Furthermore silicon nitride waveguides with losses below 1 dB/cm in the visible have been fabricated pholithographically for some time [DMR+04]. As such we expect it should be possible to produce the same devices in a CMOS process.

4.3 Grating optical properties
The couplers and waveguides were characterized independently of experiments with trapped ions in separate test structures on the same wafer as the trap-integrated devices. The emission from the ion-addressing couplers was characterized via imaging the emission using the same method as described in the previous chapter.
Fig. 4-2(c) and (d) show the resulting intensity proﬁles of the emitted light along the y and x directions, showing a collimated beam emerging along y, and focusing along x primarily to a spot with a diﬀraction-limited minimum 1/e2-radius of w0 = 1.8 ± 0.1 µm at 42 µm, and a slightly expanded waist of 2.0 ± 0.1 µm at the 50 µm trap height (proﬁle shown in Fig. 4-2(e). As the discrepancy in the actual zposition of the focus with respect to the target is less than the Rayleigh range along this dimen-
sion, the eﬀect on beam waist is small. The simulated eﬃciency of these couplers is 32%, calculated from a COMSOL simulation of the grating cross-section as the upwards-radiated power divided by the incident waveguided power.

4.3. GRATING OPTICAL PROPERTIES

89

90 µm

40 µm

Figure 4-3: Micrograph of input couplers used for input coupling to free-space beams, with inset showing SEM image of curved grating lines near center.
4.3.1 Input grating couplers
To avoid the need for a direct ﬁber interface to the chip in the vacuum chamber, for these ﬁrst experiments a free-space coupling approach was used to input light to the device. Another grating device was designed to form the input coupler, with an emitting region of 40 × 40 µm2, designed to emit (and hence couple to) a free-space beam of approximately 30 µm diameter at -37◦ from normal. The angle was chosen primarily for convenient optical access into the vacuum chamber. This coupler was designed-
 simply with a uniform periodicity and duty cycle, and was not optimized for high-eﬃciency mode matching. Full 3D simulations of the structure in CST Microwave Studio, and a numerical overlap calculation with an ideal Gaussian indicated an expected coupling loss of 10 dB, which of course does not account for the deviations from ideal Gaussian of the actual incident beam in the lab.
Regarding the beam-pointing instability advantages with this approach, we note that since we presently in-couple from a free-space beam, beam-pointing instability would still appear here in coupling variations. Nevertheless, in-coupling goes as the overlap between the approximately Gaussian proﬁle corresponding to the input grating and the Gaussian input beam proﬁle, and since the overlap between two Gaussians of variance σ2 with one displaced by d with respect to the other is, as a function of d,-
 a Gaussian with variance 2σ2, for a given d < σ the intensity variation at the

90

CHAPTER 4. ION ADDRESSING WITH WAVEGUIDE OPTICS

ion would be ∼2× lower than if the same beam were directly incident on the ion. If
furthermore we take into account that the input beam waist wg when grating-coupled can be chosen to be larger than that of a focused addressing beam wi directly incident on the ion, supposing comparable beam displacements in both cases, the coupler would oﬀer lower variations by a factor of wi2/2wg2. These approximate considerations indicate that we can expect improvement in pointing stability with the present cou-
pling, though the full beneﬁt of our approach in this regard would be realized with
direct ﬁber-coupling.

4.4 Individual ion experiments

The full ion-trap device was tested in a cryogenic vacuum setup similar to one de-

scribed previously [SKC12], with the chip at approximately 4K; after loading, ions

could be trapped in the present system for over 6 hours with Doppler cooling. A

magnetic ﬁeld of about 6 G was applied perpendicular to the trap surface along z to

break the degeneracy of the Zeeman sublevels; the relevant levels are illustrated in

Fig. 4-4.

The input beam incident on the input couplers described above could be aligned

a few ways, certainly more robustly than was done for this ﬁrst chip. The present

devices included “output” couplers intended to generate beams that would be de-

tectable outside the vacuum chamber and allow optimization of the input coupling,

but in the long waveguides leading to these on the die tested there were defects in

the waveguide that prohibited use of these output couplers. Instead, it turned out to

be possible to tell when alignment was close simply by looking by eye, via a mirror

placed in such a way as to allow sight to the trap chip in the chamber, and noting

when light was being sent in through the 40 µm openings in the metal electrodes.

When this was the case some light would be visible at the edge of the chip, as it

propagates through the crystal quartz substrate and then scattered at the edge of

the die. Even with the low power emitted by each focuser, the beams generated were

also visible by eye (when looking from the proper direction), and this allowed slightly

ﬁner tweaking of the alignment, before ultimately doing so based on the ion signal

itself.

Each Zeeman sublevel (of either the 5S1/2 or 4D5/2 manifold) shifts by an energy given by

∆Em(s,d) = mµBBgj(s,d),

(4.1)

where gjs = 2 and gjd = 1.2 are the Lande g-factors of the S1/2 and D5/2 states, µB is the Bohr magneton, and B is the magnetic ﬁeld, and m the magnetic quantum number of the particular Zeeman level. Three transitions are possible from each ground state and hence six in total, and from the equation above the shifts in all transitions can be calculated as a function of magnetic ﬁeld.
By ﬁxing a length of a pulse of 674 nm light applied and tuning the optical frequency (via the r.f. input to an acousto-optic modulator), the frequencies of these transitions can be found, as when the light is resonant with one the ion will be excited from its ground state. The top panel of Fig. 4-5 shows such a spectrum, obtained

4.4. INDIVIDUAL ION EXPERIMENTS

5P3/2 5P1/2

1019023n3mnm
4D5/2 4D3/2

91
m = 5/2 m = 3/2 m = 1/2 m = -1/2 m = -3/2 m = -5/2

422 nm (wave6g74uidnemd)
qpuubimtping

5S1/2

m = 1/2 m = -1/2

Figure 4-4: Relevant level structure of 88Sr+.

with light input into the focusing grating couplers. In this case, the ion was not initially optically pumped, and was equally likely to have begun in either ground state, and hence the minimum value for ground state probability is 0.5. The red circles represent the positions of the transitions with ∆m = ±2, the green crosses those with ∆m = ±1, and the blue diamonds those with ∆m = 0 (each plotted at an arbitrary height on the vertical axis), for a ﬁeld of 6.1 G, from which the carrier transition-
s were identiﬁed.

A ﬁt to a ﬁner-resolution scan around the transition near 80 MHz (and with optical pumping pulses initializing the ion into the m = −1/2 state) is shown in the bottom panel of the same ﬁgure, together with a ﬁt to the transition probability for Rabi oscillations [HR06]:

Pgs

=

1

−

Ω2 A Ω2eﬀ

sin2

Ωeﬀ t 2

,

(4.2)

where A is an amplitude coeﬃcient allowing for imperfect optical pumping, and the eﬀective Rabi rate accounting for detuning is

Ωeﬀ = (2π(f − f0))2 + Ω2

(4.3)

92

CHAPTER 4. ION ADDRESSING WITH WAVEGUIDE OPTICS

Ground state probability

1

0.95

0.9

0.85

0.8

0.75

0.7

0.65

0.6

0.55

70

75

80

85

90

95

674 AOM Frequency (MHz) 1

0.8

Ground state probability

0.6

0.4

0.2

0

79.8

79.85

79.9

79.95

80

674 AOM Frequency (MHz)

80.05

80.1

Figure 4-5: (top) Spectra across the 5S1/2 − 4D5/2 manifold, with points marking the expected transition positions for a 6.1 G magnetic ﬁeld applied (bottom) ﬁne scan over the ∆m = 1 transition near 80 MHz used for the measurements below, with optical pumping.

4.4. INDIVIDUAL ION EXPERIMENTS

93

4.4.1 Coherent manipulations

Coherent operations here utilized the ∆m = −1 transition starting from the m = −1/2 ground state. The ion is optically pumped into the 5S1/2, m = −1/2 state with six 50 µs-long pulses emitted from the focusers (at λ = 674 nm), each followed by quench pulses at 1033 nm (see Fig. 4-6a), which allow the 4D5/2 state to be quickly emptied and hence this pumping to occur rapidly without waiting for the second-scale spontaneous decay. The probability that the electron remains in the S orbital after a pul-
se on the qubit transition is measured by the presence or absence of scattered light when the ion is illuminated with light near resonant with the 5S1/2 → 5P1/2 transition at 422 nm, with 1092 nm light also incident during readout to repump out of the 4D3/2 state (occasionally occupied during decay from the 5P1/2 state). As labeled in Fig 4-6(a), the qubit and pumping frequencies were routed to the ions via the integrated waveguides and couplers; in this work the other wavelengths present were in -
free-space beams.

Fig. 4-6(c) shows the probability that a single ion remains in the ground state after a 674 nm pulse of varying length resonant with the ∆m = −1 transition, with each point representing the average probability inferred from 450 repetitions. Each repetition consists of the pumping pulses to initialize the ion into the m = −1/2 ground state, followed by a 674 nm pulse of length given on the x-axis, followed by illumination with the 422 nm laser beam (propagating in free space). If the number of coun-
ts detected on the PMT is above a threshold, the state is judged to remain in the ground state and vice versa; the average of these repetitions gives the ground state probability.

With the ion near the beam center, Rabi oscillations in this probability with tπ = 33.2 µs are observed (black circles), and with the ion displaced by 7.5 µm, low probability of excitation is observed (blue squares). The ions in this experiment were not cooled to the motional ground state, and thermal occupancy of motional modes contributes to decay in Rabi contrast with increasing pulse length; nevertheless the ﬁdelity of the ﬁrst π-rotation is 99%. We veriﬁed also that Rabi oscillations with com-
parable π-times could be observed with light from the couplers at all three trap zones in Set a (Fig. 4-1), illuminated through cascaded 50:50 splitters from a single waveguide.

The proﬁle of the beam emitted from the focuser addressing the ion was measured

by translating the ion along the trap axis (x), and measuring the Rabi oscillation π-

times at various displacements; since the Rabi rate

√ Ωr ∝ 1/tπ ∝ I,

(4.4)

with I the optical intensity, this corresponds to a measurement of the beam proﬁle along this direction. The points in Fig. 4-6(d) are well ﬁt by a Gaussian (blue line), indicating an intensity proﬁle with w0 = 2.0 µm (drawn as a red line). This veriﬁes that the light reaching the ion is predominantly in the focused beam designed.

94

CHAPTER 4. ION ADDRESSING WITH WAVEGUIDE OPTICS

(a) 1

Ground state probability

0.8

0.6

0.4

0.2

0 0
(b) 30

50

100

150

200

674 Pulse length (µs)

25

1/t (kHz)
π

20

15

10

5

0

-4

-2

0

2

4

x displacement (µm)

Figure 4-6: (a) Rabi oscillations on the 5S1/2, m = −1/2 → 4D5/2, m = −3/2 transition obtained near the focus of the grating coupler. Each point represents the probability that the electron remains in the ground state after a pulse of varying length over 450 repetitions, and the line is a ﬁt to a Rabi oscillation with Gaussian amplitude decay, from which the ﬁrst π-rotation’s ﬁdelity is determined to be 99%. Blue squares are with ion displaced by 7.5 µm along the trap axis, showing low excitation -
rate away from the focus. (b) Rabi rates vs. ion position as ion is scanned through the focus along the trap axis, with Gaussian ﬁt (blue line) indicating optical intensity proﬁle with w0 = 2.0 µm (red line).

4.4. INDIVIDUAL ION EXPERIMENTS

(1)

0 s (4)

95
1.2 s

(2)

0.4 s (5)

1.6 s

(3)

0.8 s (6)

2.0 s

10 µm
Figure 4-7: Sequence of EMCCD images of 422-nm ﬂuorescence from a chain of 5 ions, with the middle ion aligned to the grating coupler’s focus and occasionally entering the dark D state due to the addressing 674 nm beam; the sequence spans 2 seconds with frames evenly spaced.
4.4.2 Individual addressing
That this beam could individually address ions was qualitatively observed with 5 ions trapped in the same well. The 674 nm light in the focused beam introduces some probability of occupying the 4D5/2 state, and the 422 nm light also incident on all ions trigger collapses of the wavefunction into either the bright or dark states, easily imaged on an electron multiplying charged coupled device (EMCCD) camera. Quantum jumps between bright and dark states [SNBT86] occurred only in the center ion align-
ed to the focus of the center coupler in Set a (Fig. 4-1). This is illustrated in the sequence of images in Fig. 4-6(b), spanning 2 seconds, with the inner 3 ions each separated by about 7 µm.
4.4.3 Crosstalk quantiﬁcation and comparison to existing experiments
Particularly for individual addressing in linear ion chains, crosstalk between neighboring ions is an important potential error source [KZI+10, CMBK14, SNM+13], and the simple individual addressing aﬀorded by the ability to tightly focus short wavelength radiation [NLR+99] is a signiﬁcant advantage of optical in relation to microwave approaches [WOC+13].
We quantiﬁed crosstalk errors that would result on a neighboring ion using the

96

CHAPTER 4. ION ADDRESSING WITH WAVEGUIDE OPTICS

10 0

2.47x100

10 -1

2.47x10-1

Relative intensity to peak Crosstalk error εx

10 -2

2.47x10-2

10 -3

2.47x10-3

10 -4

2.47x10-4

-20 -15 -10 -5

0

5

10 15 20

x displacement (µm)

Figure 4-8: Black and red points: imaged intensity of coupler emission along y
(see text for description of measurement); and blue diamonds: intensity relative to
beam center inferred from cross-talk errors measured with ions variously displaced
along the trap axis (with corresponding values of x as deﬁned in the text labeled on the right vertical axis), demonstrating crosstalk errors of order 10−3 − 10−2 and below beyond ±7.5 µm from center, and of order 10−4 past ±12.5 µm.

4.4. INDIVIDUAL ION EXPERIMENTS

97

waveguide grating for addressing by displacing an ion a known distance from the
focus, and measuring the probability of excitation when a pulse of length equal to the
π-time at the focus, tπ0, is applied; this we deﬁne as the crosstalk error, consistent with previous work [WOC+13]. This probability of excitation is sin2(Ωdtπ0/2), with Ωd the Rabi rate at the displaced position; for Ωdtπ0 << 1, this probability and hence crosstalk error × is approximately

×=

Ωdtπ0

2
.

2

(4.5)

Letting Ω0 represent the Rabi frequency at the center and noting that Ω0tπ0 = π by deﬁnition, for single-photon transitions as used here when Rabi frequency is pro-

portional to the square root of the local intensity, we see that the crosstlak error is

proportional to the ratio of the beam intensity at the displaced position Id to that at

center I0, where

×=

π 2 Id . 2 I0

(4.6)

CCD intensity measurements and ion crosstalk error measurements were observed

to correspond in our device. Both the measured intensity proﬁle near the beam center

and along the trap axis, measured with a CCD in the imaging setup used for the data

in Fig. 4-2, as well as values of Id inferred from × measured with the ion (blue diamonds), are plotted together in Fig. 4-8, showing good correspondence. To obtain

suﬃcient dynamic range, the intensity measurements are taken at two exposure times,

with dark frames subtracted; points from the short and long exposure times are shown

in black and red, respectively.

Excitation of higher-order spatial modes in the grating region contributes signiﬁ-

cantly to the observed deviation from the Gaussian proﬁle (gray line) beyond about

2.5 µm; this is for the same reason as discussed in Appendix A, describing our obser-

vations on mode distortions in the gratings with arcs not well matched to the incident

waveguided phase fronts. Optimization of the taper and arcs to tailor the transverse

ﬁeld proﬁle in the grating can reduce the crosstalk errors at displacements of around

3-5 µm (as shown in the previous chapter), an important fact since this is a range

typical for many ion trap experiments. For the 88Sr+ ions used here, at a 1 MHz axial trap frequency the two-ion inter-

ion spacing is 4.3 µm. Although our later devices improved signiﬁcantly on the

results observed in the present trap-integrated devices discussed here, we note that

relative intensities of ∼1% at 5 µm-displacements, as achieved with the grating device

used in the integrated ion trap chip, are already comparable to those in existing

experiments with individual addressing. For example, the individual addressing beam (addressing quadrupole transitions in 40Ca+) used in ref. [SNM+13] is stated to result in maximum (Ωd/Ω0)2 values of 3%, corresponding to crosstalk errors of a few percent for the ∼4 µm spacings used. Likewise, the recent demonstration in [DLF+16] uses

counterpropagating Raman beams for stimluated Raman transitions, one of which

addresses all ions and the other which is focused to individual ions. Crosstalk errors

there are given as <4%. Both of these setups used sophisticated bulk optics to reach

98

CHAPTER 4. ION ADDRESSING WITH WAVEGUIDE OPTICS

such tight focuses within a vacuum chamber, but this residual intensity remains a challenge.
We note that in the case of Raman transitions, if both sidebands are focused to individual ions, in this case since the Rabi frequencies ΩRam ∝ E1E2, where E1,2 represents the ﬁeld magnitude of either addressing beam. If both beams have equal intensity, we have ΩR ∝ I, and hence the crosstalk error would in fact be

xRam =

π2 2

Id

2
,

I0

(4.7)

and hence signiﬁcantly easier to reduce if both Raman beams are individually addressed (thanks to David Lucas for pointing this out).
Though these devices reach performances comparable to present experiments, as operation ﬁdelities increase it will be desirable to use components allowing crosstalk at such distances to the 10−3 − 10−4 level or below so it is not a dominant noise source. Ch. 3 presented devices that reach the 10−3 level in relative intensity, as well as indication that by simply increasing the device area the same metric could be a few parts in 10−4. It thus seems that integrated waveguides oﬀer a signiﬁcant advan-
tage on this metric (and crosstalk errors could be much lower if Raman gates with both beams focused are used).

4.4.4 Optical losses
Using a ﬁrst-principles calculation of the Rabi frequency [Jam98], the 33 µs π-time observed, given the measured beam dimensions from the focusing coupler, is consistent with a power of 300 nW being emitted from the grating coupler, 39 dB lower than the ∼2.6 mW incident on the input coupler. After accounting for the 6 dB designed intensity reduction owing to the two 50/50 splitters in the optical path, the system losses total 33 dB. A number of sources contribute to this loss. Propagation loss in -
the waveguides was measured in independent test structures to be 6 dB/cm, dominated by material loss; this waveguide loss in our sample contributes 5 dB over the 0.85 cm over which the light is routed on chip. We note that the deposition here was not optimized for loss, but PECVD SiN has been demonstrated elsewhere with material loss as low as 0.1 dB/cm in the red and < 1 dB/cm at as low as 470 nm [GJG+08]. The coupler’s simulated eﬃciency of 32% (calculated as the upwards-radiated power divided b-
y the input power in waveguide, from a frequency-domain simulation of the grating) corresponds to a loss of 5 dB, and is due to the approximately vertically symmetric structure of the grating which results in about 50% of the input power being emitted towards both ±z, reﬂection oﬀ of the oxide-vacuum interface, and the ﬁnite length and maximum grating strength in the device (18% is not emitted by the end of the grating, and the inverse taper at the end of the grating is included to prevent reﬂecti-
on and re-emission). Due to an incomplete etch of the SiN waveguide layer, however, the coupler’s loss may be as high as 8-9 dB as fabricated. Waveguide bends in the path are estimated to contribute 3 dB as well due to the incomplete etch. The remaining 16-17 dB is likely due to the input coupler (simulated eﬃciency

4.4. INDIVIDUAL ION EXPERIMENTS

99

-15 Before metal deposition After metal deposition
-20

Transmission (dB)

-25

-30

-35

-40

-45

0

1

2

3

4

5

6

Waveguide length (cm)

Figure 4-9: Waveguide loss measurements on a similar sample, before and after metal deposition, showing negligible loss addition from the electrodes. In this case, the material was LF PECVD-deposited SiN, on a fused silica substrate, and the measured waveguide loss as patterned was 4.5 dB/cm.

10 dB for a perfect Gaussian mode impinging) and any excess loss from the splitters on chip.
None of these losses are fundamental, and can be signiﬁcantly reduced. Waveguide material optimization as mentioned can reduce waveguide loss to a level lower than achievable coupler losses. This, together with optimization of the free-space coupler should bring total loss to about 15 dB (10 dB from input coupler, 5 dB from focusing coupler). With more substantial changes, ﬁber coupling directly to the chip [TBB+02, GHSN+13], should allow improvements of input coupling loss to about 2 dB. And inco-
rporation of a bottom reﬂecting layer, using silicon as discussed in the previous chapter or a metal layer [RGMZ+13], or the use of a multi-layer grating [WPK+15], could approximately double the focuser eﬃciency and reduce focuser loss to about 2 dB; therefore, ultimately we expect the total power eﬃciency can be increased by almost 30 dB.

4.4.5 Polarization purity
The ﬁeld of the beam is expected to be polarized predominantly along the trap axis. Due to the symmetry of the structure and the SM waveguide feeding the taper and grating (whose dominant E-ﬁeld component along x is even about z, and whose components along y and z are odd about z and 0 at the center of the waveguide), at focus

100

CHAPTER 4. ION ADDRESSING WITH WAVEGUIDE OPTICS

Figure 4-10: SEM image of fabricated waveguide cross-section under metal electrodes, on quartz. The image is taken at a cleaved facet, from a region of the same wafer on which the ion trap device tested above was made.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:55.811Z
- **Text Length:** 212859 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
