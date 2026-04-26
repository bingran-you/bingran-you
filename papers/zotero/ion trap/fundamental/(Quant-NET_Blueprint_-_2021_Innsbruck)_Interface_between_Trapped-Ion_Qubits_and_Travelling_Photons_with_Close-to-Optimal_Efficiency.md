# PDF Document: (Quant-NET Blueprint - 2021 Innsbruck) Interface between Trapped-Ion Qubits and Travelling Photons with Close-to-Optimal Efficiency.pdf

**File Path:** (Quant-NET Blueprint - 2021 Innsbruck) Interface between Trapped-Ion Qubits and Travelling Photons with Close-to-Optimal Efficiency.pdf

**Processed Date:** 2026-02-10T18:16:28.465Z

**File Size:** 10317.59 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1023

**Title:** (Quant-NET Blueprint - 2021 Innsbruck) Interface between Trapped-Ion Qubits and Travelling Photons with Close-to-Optimal Efficiency

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

josef schupp
INTERFACE BETWEEN TRAPPED-ION QUBITS AND T R AV E L L I N G P H O TO N S W I T H C L O S E - TO - O P T I M A L
EFFICIENCY

INTERFACE BETWEEN TRAPPED-ION QUBITS AND T R AV E L L I N G P H O TO N S W I T H C L O S E - TO - O P T I M A L
EFFICIENCY josef schupp
Thesis submitted to the Faculty of Mathematics, Computer Science and Physics
of the Leopold-Franzenz University of Innsbruck in partial fulﬁlment of the requirements for the degree of
Doctor of Philosophy (Physics)
Carried out under supervision of o. Univ.-Prof. Dr. Rainer Blatt and Ass. Prof. Dr. Ben Lanyon
at the Institute for Quantum Optics and Quantum Information (IQOQI), Innsbruck
December 2021

Josef Schupp: Interface between Trapped-Ion Qubits and Travelling Photons with Close-to-Optimal Efﬁciency, © December 2021

Für Simon, den Bams.

ABSTRACT
A quantum version of the internet, built of interacting quantum light and matter, would enable powerful new capabilities for science and technology. A key requirement for the quantum internet is the ability to efﬁciently collect photons that are emitted by and entangled with quantum matter. This thesis reports on a signiﬁcant increase in the efﬁciency of photon collection from a leading example of quantum matter: a single trapped atomic ion.
In particular, the thesis presents the design and construction of an ion-photon interface and an experimental investigation of the interface’s efﬁciency limits. The interface consists of a trapped 40Ca+ ion in the focus of a near-concentric optical cavity of 20 mm length. A photon, entangled with the ion, is obtained with a probability of 0.69(3) at the cavity output and is detected with a probability of 0.462(3). These efﬁciencies are far beyond the previous state of the art for a trapped ion and-
, to the best of our knowledge, the highest reported for emitter-photon entanglement for any example of quantum matter. As we show, our interface achieves close to the optimal compromise between the probability of a photon being emitted into the cavity mode and exiting through the output mirror. Moreover, the interface is shown to operate at the theoretical efﬁciency limit, such that no statistically signiﬁcant improvements in efﬁciency can be obtained without changing properties of the atom or th-
e cavity. This result clearly identiﬁes the parameter regimes to focus on for future improvements and provides a guide for the design of general emitter-cavity systems that are optimised for efﬁcient photon interfacing.
A further result of this thesis is the distribution of a photon, entangled with the ion, over a distance of 50 km of optical ﬁbre. A key component here is the conversion of the photon’s wavelength to the telecom band at 1550 nm whilst preserving ion-photon entanglement. The achieved distance is two orders of magnitude larger than the previous record for light-matter entanglement and constitutes a practical distance to start building long-distance quantum networks.
High-efﬁciency and long-distance distribution of light-matter entanglement are both key characteristics of envisioned quantum networks. The state-of-the-art values in both parameters achieved in this thesis clearly demonstrate the suitability of trapped ions coupled to optical cavities to serve as quantum network nodes.
vii

Z U S A M M E N FA S S U N G
Ein Internet, welches auf den Gesetzen der Quantenmechanik basiert und aus welchselwirkenden Licht- und Materiequanten aufgebaut ist, würde leistungsstarke neue Fähigkeiten für Wissenschaft und Technik ermöglichen. Eine wichtige Voraussetzung für das Quanteninternet ist das efﬁziente Sammeln von Photonen, die von Quantenmaterie emittiert werden und mit ihr verschränkt sind. In dieser Doktorarbeit wird über eine erhebliche Steigerung der Efﬁzienz für das Sammeln von Photonen von einem einzelnen gef-
angenen atomaren Ion berichtet.
Insbesondere werden in dieser Arbeit der Entwurf und die Konstruktion einer Ionen-Photonen-Schnittstelle sowie eine experimentelle Untersuchung der Efﬁzienzgrenzen der Schnittstelle vorgestellt. Die Schnittstelle besteht aus einem gefangenen 40Ca+-Ion im Fokus eines nahezu konzentrischen, 20 mm langen, optischen Resonators. Ein Photon, das mit einem Ion verschränkt ist, wird mit einer Wahrscheinlichkeit von 0,69(3) am Ausgang des Resonators erhalten und mit einer Wahrscheinlichkeit von 0,462(3) de-
tektiert. Diese Wahrscheinlichkeiten übertreffen die bisherigen Bestleistungen für gefangene Ionen bei weitem und sind unseres Wissens nach die höchsten, die bisher für Emitter-Photonen-Verschränkung für beliebige Quantenmaterie berichtet wurden. Wie wir zeigen, erreicht unsere Schnittstelle nahezu den optimalen Kompromiss zwischen der Wahrscheinlichkeit, dass ein Photon in die Resonatormode emittiert wird und der Wahrscheinlichkeit dass es durch den Ausgangsspiegel austritt. Darüber hinaus wird g-
ezeigt, dass die Schnittstelle an der theoretischen Efﬁzienzgrenze arbeitet, so dass keine statistisch signiﬁkanten Verbesserungen der Efﬁzienz erzielt werden können, ohne Eigenschaften des Atoms oder des Resonators zu verändern. Dieses Ergebnis zeigt deutlich die Parameterbereiche auf, auf die man sich für künftige Verbesserungen konzentrieren sollte, und bietet einen Leitfaden für das Design allgemeiner, Efﬁzienz-optimierter Emitter-Resonator-Systeme.
Ein weiteres Ergebnis dieser Arbeit ist die Verschränkung zwischen Ion und Photon über eine 50 km lange Glasfaser. Eine Schlüsselkomponente ist dabei die Umwandlung der Wellenlänge des Photons in das Telekommunikationsband bei 1550 nm, unter Bewahrung der Ionen-PhotonenVerschränkung. Die erreichte Entfernung übertrifft den bisherigen Rekord für Licht-Materie-Verschränkung um zwei Größenordnungen und stellt bereits eine praktische Entfernung für den Aufbau von LangstreckenQuantennetzwerken dar.
Bei der Verteilung von Licht-Materie-Verschränkung sind sowohl eine hohe Efﬁzienz als auch eine große Entfernung Schlüsseleigenschaften geplanter Quantennetzwerke. Die Spitzenwerte beider Parameter, die in dieser Arbeit erreicht werden, zeigen deutlich, dass gefangene Ionen, die an optische Resonatoren gekoppelt sind, dazu geeignet sind, als Knotenpunkte in Quantennetzwerken zu fungieren.
viii

P U B L I C AT I O N S
The work presented in this thesis has led to the following journal publications:
• J. Schupp, V. Krcmarsky, V. Krutyanskiy, M. Meraner, T. E. Northup, and B. P. Lanyon. "Interface between Trapped-Ion Qubits and Traveling Photons with Close-to-Optimal Efﬁciency." In: PRX Quantum 2.2 (2021), p. 020331. DOI: 10.1103/PRXQuantum.2.020331.
• V. Krutyanskiy*, M. Meraner*, J. Schupp*, V. Krcmarsky, H. Hainzer, and B. P. Lanyon. "Light-matter entanglement over 50 km of optical ﬁbre." In: npj Quantum Information 5.1 (2019), p. 72. DOI: 10.1038/s41534-019-0186-3. (*These authors contributed equally.)
Additional papers have been published in the framework of this thesis, but do not directly form part of it:
• M. Meraner, A. Mazloom, V. Krutyanskiy, V. Krcmarsky, J. Schupp, D. A. Fioretto, P. Sekatski, T. E. Northup, N. Sangouard, and B. P. Lanyon. "Indistinguishable photons from a trapped-ion quantum network node." In: Physical Review A 102.5 (2020), p. 052614. DOI: 10.1103/PhysRevA.102.052614.
• V. Krutyanskiy, M. Meraner, J. Schupp, and B. P. Lanyon. "Polarisationpreserving photon frequency conversion from a trapped-ioncompatible wavelength to the telecom C-band." In: Applied Physics B 123.9 (2017), p. 228. DOI: 10.1007/s00340-017-6806-8.
ix

ACKNOWLEDGEMENTS
This thesis would not have been possible without the support and contribution of countless people. Here, I want to express my gratitude to all and in the following mention at least some of them.
I would like to thank Ben Lanyon for taking me on as the ﬁrst PhD student on his new and exciting project; for the enriching time, the close work together, his clear communication and constant availability, for sharing his excitement, enthusiasm and clear grasp of physics; and for giving me the feeling of being well taken care of and always having my back.
I thank Rainer Blatt for allowing me to be part of this outstanding scientiﬁc environment and wonderful group that he has shaped and sustained here in Innsbruck. It’s unlikely that this project would have succeeded the way it has anywhere else in the world.
I am grateful to my team and the whole Blatt group. The friendships I made and the support I received made the whole thing worthwhile and helped me to continue also during the more challenging periods. In particular Martin Meraner, who was with me from the start, and the other OGs of my team Victor Krutyanskiy, Vojtech Krcmarsky and Helene Hainzer, who shared with me in all the joys and frustration that are part of the process. My appreciation goes to Daniel Heinrich, Klemens Schüppert, Martin van-
 Mourik, Milena Guevara-Bertsch, Konstantin Friebe, Christine Maier, and all the others from whom I received some help now and then, for the discussions, the enjoyable times and for generally brightening my days. I’m also happy that the experiment is now in the capable hands of Marco Canteri, James Bate and Armin Winkler.
I thank Tracy Northup for her detailed input to the main paper and chapters of this thesis. Moreover, the know-how we received from her and the CQED team constitutes an invaluable contribution to the design, construction and understanding of the experiment.
Building the experimental setup would not have been possible without the guys of the mechanical and electronic workshop, Stefan Haslwanter, Andreas Strasser, Bernhard Öttl and Gerhard Hendl. Many thanks to Stefan in particular, who went out of his way to design and manufacture many of the core parts of the setup, teaching me some workshop lore on the way.
I would also like to thank the administrative staff, without whom nothing would go: Elisabeth Huck, Klaus Falschlunger, Valentin Staubmann and Markus Knabl on the IQOQI side, and Patricia Moser at the University.
Finally, I want to thank my family, especially my partner Melanie, for their encouragement, their constant support and their love.
xi

CONTENTS

i introduction and theory

1 introduction

3

2 theory

7

2.1 Coupling atoms and cavities . . . . . . . . . . . . . . . . 7

2.1.1 Optical cavities . . . . . . . . . . . . . . . . . . . 7

2.1.2 Two-level atom coupled to a cavity . . . . . . . 10

2.2 Single photons from atom-cavity systems . . . . . . . . 13

2.2.1 Three-level atom in a cavity . . . . . . . . . . . . 14

2.2.2 Efﬁciency limits of photon collection . . . . . . 17

2.2.3 Cavity-mediated Raman transition (CMRT) . . . 19

ii the 40Ca+ ion, experimental setup and methods

3 implementation of an ion-photon interface with

40 Ca+

25

3.1 Principle of the experiment . . . . . . . . . . . . . . . . 25

3.2 Transitions for photon generation . . . . . . . . . . . . . 27

3.3 Bichromatic Raman transition for ion-photon entangle-

ment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29 3.4 Trapped 40Ca+ as a quantum bit . . . . . . . . . . . . . 30

3.4.1 Cooling, state preparation and state detection . 30

3.4.2 Operations on the optical quadrupole transition 31

4 experimental setup

33

4.1 Optical cavity . . . . . . . . . . . . . . . . . . . . . . . . 34 4.1.1 Cavity characterisation . . . . . . . . . . . . . . . 35 4.1.2 Cavity assembly . . . . . . . . . . . . . . . . . . 43 4.1.3 Cavity length control and lock . . . . . . . . . . 48
4.2 Ion trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51 4.3 Vacuum chamber . . . . . . . . . . . . . . . . . . . . . . 54 4.4 Laser systems . . . . . . . . . . . . . . . . . . . . . . . . 57
4.4.1 Lasers for Doppler cooling, state detection and optical pumping (397 nm, 866 nm, 854 nm) . . . 58
4.4.2 Wavelength meter and wavelength control . . . 59 4.4.3 Photo-ionisation lasers (423 nm and 375 nm) . . 60 4.4.4 Quadrupole laser (729 nm) . . . . . . . . . . . . 61 4.4.5 Drive laser (393 nm) for the cavity-mediated Ra-
man transition (CMRT) and transfer-lock laser (806 nm) . . . . . . . . . . . . . . . . . . . . . . . 62 4.5 Photon detection path . . . . . . . . . . . . . . . . . . . 64 4.6 Setup for ﬂuorescence detection at 397 nm . . . . . . . 67 4.7 Experiment control . . . . . . . . . . . . . . . . . . . . . 68

5 key methods

71

5.1 Positioning the ion in the cavity waist . . . . . . . . . . 71

xiii

xiv contents

5.2 Setting up the CMRT . . . . . . . . . . . . . . . . . . . . 73 5.2.1 Raman spectroscopy and identifying transitions 74 5.2.2 Calibration of drive strength Ω and detuning ∆ 76 5.2.3 Setting up the bichromatic CMRT . . . . . . . . 77
5.3 Tomography of the ion-photon entangled state . . . . . 78 5.4 Numerical simulations . . . . . . . . . . . . . . . . . . . 81

iii experimental results, summary and outlook 6 saturating the upper bound on the photon effi-

ciency

85

6.1 Efﬁciency limits in our system . . . . . . . . . . . . . . 85 6.2 Laser pulse sequence . . . . . . . . . . . . . . . . . . . . 86 6.3 Single-photon results . . . . . . . . . . . . . . . . . . . . 87 6.4 Ion-photon entanglement . . . . . . . . . . . . . . . . . 90 6.5 Multiphoton states . . . . . . . . . . . . . . . . . . . . . 91 6.6 Choice of the transmission T2 . . . . . . . . . . . . . . . 95 6.7 Possible efﬁciency improvements in the existing setup 96 6.8 Future systems . . . . . . . . . .-
 . . . . . . . . . . . . . 96 6.9 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . 97

7 light-matter entanglement over 50 km of optical

fibre

99

7.1 Motivation and challenges . . . . . . . . . . . . . . . . . 99 7.2 Setup and methods: introducing the photon frequency
conversion . . . . . . . . . . . . . . . . . . . . . . . . . . 101 7.3 Laser pulse sequence . . . . . . . . . . . . . . . . . . . . 104 7.4 Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105
7.4.1 Imperfections in the entangled state . . . . . . . 105 7.4.2 Photon distribution efﬁciency . . . . . . . . . . . 108 7.5 Implemented efﬁciency improvements . . . . . . . . . . 109 7.6 Discussion . . . . . . . . . . . . . . . . . . . . . . . . . . 111 7.6.1 Memory time . . . . . . . . . . . . . . . . . . . . 111 7.6.2 Ion-ion entanglement over 100 km . . . . . . . . 111 7.6.3 Network of clocks . . . . . . . . . . . . . . . . . 113

8 summary and outlook

115

iv appendix and bibliography

a in search of the perfect mirror

121

a.1 Procuring the cavity mirrors . . . . . . . . . . . . . . . . 121

a.2 Characterisation of the mirror batches . . . . . . . . . . 123

bibliography

129

LIST OF FIGURES

Fig. 2.1 Fig. 2.2 Fig. 2.3
Fig. 3.1
Fig. 3.2 Fig. 4.1 Fig. 4.2
Fig. 4.3 Fig. 4.4 Fig. 4.5 Fig. 4.6 Fig. 4.7 Fig. 4.8
Fig. 4.9 Fig. 4.10 Fig. 4.11 Fig. 4.12
Fig. 4.13
Fig. 4.14
Fig. 4.15
Fig. 4.16 Fig. 4.17 Fig. 5.1
Fig. 5.2 Fig. 5.3 Fig. 5.4 Fig. 5.5 Fig. 6.1 Fig. 6.2 Fig. 6.3

Photon collection with an optical cavity . . . . 7 Three-level atom in a cavity . . . . . . . . . . . 14 Approximating the upper bound on the photoncollection probability with the CMRT . . . . . 21 Implementation of the ion-photon interface with 40Ca+ . . . . . . . . . . . . . . . . . . . . . . . . 26 40Ca+ level scheme . . . . . . . . . . . . . . . . 28 Geometry of the ion-cavity system . . . . . . . 34 Simpliﬁed representation of the measured cavity transmission spectrum . . . . . . . . . . . . -
37 Cavity ﬁnesse timeline . . . . . . . . . . . . . . 39 Cavity birefringence measurement . . . . . . . 42 Components of the cavity assembly . . . . . . 44 Photograph of the cavity assembly . . . . . . . 49 Setup for stabilising the ion-cavity length . . . 50 Estimating the in-lock frequency stability of the cavity . . . . . . . . . . . . . . . . . . . . . . . . 51 Drawing of the ion trap . . . . . . . . . . . . . 53 Photograph of the integrated trap-cavity system 55 Vacuum chamber . . . . . . . .-
 . . . . . . . . . 56 Conceptual schematic of lasers and beam paths for Doppler cooling, state detection and optical pumping . . . . . . . . . . . . . . . . . . . . . . 58 Conceptual schematic of the quadrupole-laser beam path . . . . . . . . . . . . . . . . . . . . . 61 Conceptual schematic of the drive-laser and transfer-lock-laser beam paths . . . . . . . . . . 63 Cavity output path and setup for ion ﬂuorescence detection . . . . . . . . . . . . . . . . . . . 65 Cavity mode diameters . . . . . -
. . . . . . . . . 67 Experiment control and data acquisition . . . . 69 Simulated intracavity standing wave and orientation of the trap axis . . . . . . . . . . . . . . . 73 Mapping the intracavity ﬁeld with an ion . . . 74 Cavity-mediated Raman spectroscopy . . . . . 75 Balancing the bichromatic Raman transition . . 78 Histogram of PMT counts . . . . . . . . . . . . 79 Laser-pulse sequence for the experiments of Ch. 6 87 Single-photon wavepackets and efﬁciency . . . 88 Photon-collection probabili-
ty PS for different drive strengths Ω . . . . . . . . . . . . . . . . . 90

xv

Fig. 6.4
Fig. 6.5
Fig. 6.6
Fig. 6.7
Fig. 7.1
Fig. 7.2 Fig. 7.3
Fig. 7.4
Fig. 7.5 Fig. A.1 Fig. A.2 Fig. A.3 Fig. A.4

Generation and characterisation of the ion–photon entangled state . . . . . . . . . . . . . . . . . . . 92 Photon trains: generation and detection of sequential photons . . . . . . . . . . . . . . . . . . 94 Predicted photon probabilities vs. output-mirror transmission T2 . . . . . . . . . . . . . . . . . . 95 Possible efﬁciency improvements in our existing ion-cavity system . . . . . . . . . . . . . . . 97 Simpliﬁed experiment schematic of the 50-km experiment . . . . . . . . . . . . . . . . . . -
. . . 102 Laser-pulse sequence for the 50-km experiment 105 Observation of ion-photon entanglement over 50 km of optical ﬁbre . . . . . . . . . . . . . . . 106 Raman spectrum after Doppler cooling and after sideband cooling . . . . . . . . . . . . . . . 110 Path to 100-km matter-matter entanglement . . 112 Technical drawing of the cavity-mirror substrates122 Batch characterisation: transmission . . . . . . 124 Batch characterisation: ﬁnesse . . . . . . . . . . 126 Finesse vs. cavity length . . . .-
 . . . . . . . . . 127

LIST OF TABLES

Table 4.1 Table 4.2 Table 4.3 Table 4.4 Table 7.1
Table 7.2

Key cavity parameters . . . . . . . . . . . . . . 35 Transmission and loss of the cavity mirrors . . 40 Laser systems used in this work . . . . . . . . . 57 Cavity mode diameters . . . . . . . . . . . . . . 67 Modelled and measured state ﬁdelities in the 50-km experiment . . . . . . . . . . . . . . . . . 107 Photon losses in the 50-km experiment . . . . . 109

ACRONYMS
AOM acousto-optic modulator APD avalanche photodiode AR anti-reﬂection ASR anti-Stokes Raman BS beam splitter
xvi

acronyms xvii
CCD charge-coupled device CMRT cavity-mediated Raman transition DDS direct digital synthesiser ECDL external-cavity diode laser EM CCD electron multiplying charge-coupled device EOM electro-optic modulator FPGA ﬁeld-programmable gate array FSR free spectral range FWHM full width at half maximum HWP half-wave plate NEG non-evaporable getter PBS polarising beam splitter PDH Pound-Drever-Hall PID proportional-integral-derivative PM polarisation-maintaining PMT photomultiplier tube PPLN periodically p-
oled Lithium Niobate QED quantum electrodynamics QIP quantum information processing QWP quarter-wave plate RF radiofrequency RMS root mean square ROC radius of curvature SHG second harmonic generation SHV secure high voltage SM singlemode SNSPD super-conducting nano-wire single-photon detector TA tapered ampliﬁer Ti:Sa Titanium-Sapphire UHV ultrahigh vacuum UIBK University of Innsbruck ULE ultralow expansion UV ultraviolet WLM wavelength meter

Part I INTRODUCTION AND THEORY

INTRODUCTION

1

Information is arguably one of the most important resources at present. The information age that we live in is governed by the modern computer and the internet, bringing unprecedented possibilities for the acquisition, processing and distribution of information. Key innovations that paved the way for today’s technology1 were made in the wake of new insights into nature due to the advent of quantum mechanics at the turn of the last century. Today, that era is known as the ﬁrst quantum revolution: t-
he quantum mechanical revolution of our understanding of the structure and properties of matter, which led to "[...] a technological revolution, at the root of our information-based society" [2].
In present-day research, fundamentally new ways to encode and manipulate information are at the root of a movement that researchers themselves like to refer to as the second quantum revolution [3]. During the ﬁrst quantum revolution, quantum-mechanical principles like superposition and entanglement were discovered. In the second quantum reovolution, these principles are seen as key resources for new concepts in information processing and communication. The classical bit, which is either "0" or "1"-
, is replaced by the quantum bit—the "qubit"—which can take on arbitrary superpositions of the quantum states |0 and |1 . Accordingly, the classical electronic "on/off" signal of, e.g., a transistor is replaced by a quantum object in which a qubit can be encoded, e.g., in the electronic states of an atom or the polarisation states of a photon.
Based on these principles, proposals for quantum information technologies have emerged, advertising powerful new tools for the processing and distribution of information. For example, envisioned quantum computers [4, 5] could be used to simulate other quantum systems [6] or perform certain computational tasks in a much more efﬁcient way than their classical counterpart [7, 8]. In the ﬁeld of communication, quantum cryptography [9] could enable fundamentally secure communication between remote loca-
tions.
The development of interfaces between travelling photons and quantum matter is one of the key requirements for emerging quantum technologies, allowing for single photon sources [10] and the transfer, storage and redistribution of quantum information [11]. If the quantum matter is a register of qubits with quantum processing capabilities, then more powerful applications become possible, such as scalable
1 A prominent example here is the invention of the transistor [1], the most elementary component of the modern computer, in 1948.

3

4 introduction
quantum computing [12] and arbitrary-distance quantum networks [13, 14] for secure communication [9], distributed quantum sensing [15] and enhanced timekeeping [16].
The efﬁciency of a photon-matter interface—the probability with which photons can be collected from or absorbed by matter qubits— is a key parameter to optimise for the practical realisation of the aforementioned quantum technologies. Paths to deterministic interfaces include collective effects in interacting particle ensembles [17] or optical resonators that exploit vacuum-modiﬁcation effects to enhance emission into and absorption from a desired optical mode, e.g., Fabry-Pérot cavities [18], mic-
ro-resonators [19, 20] and nano-photonic waveguides [21, 22].
Efﬁcient photonic interfaces for trapped-ion qubits are desirable: the deterministic, near fault-tolerant and multiqubit quantum-informationprocessing capabilities of the ion-trap platform [23–26] could enable arbitrary-distance quantum networking via the repeater approach [27, 28] and scalable quantum computing [12]. Furthermore, trapped ions are amongst the most precise sensors [29] and clocks [30] ever developed and could be used to construct distributed networks of quantum-limited sensors.
Combining trapped ions with high numerical aperture lenses is a powerful approach to connecting the quantum states of trapped-ion qubits to travelling photons. Using this approach, ions in separate traps have been entangled over a distance of ∼1 m [31, 32]. Moreover, single photons on demand, emitted by and entangled with a trappedion qubit, have been generated and detected with a total probability of 0.024 after collection via an in-vacuum lens [33].
The ﬁrst use of an optical cavity for the enhanced collection of ionentangled photons achieved a combined probability for generation and detection—in the following simply called detected probability—of 0.057(2) [34]. Ion-entangled photons were recently collected using a microscopic ﬁbre cavity, with a detected probability of 2.5 × 10−3 [35].
As a ﬁrst key result, this thesis describes the design, construction and characterisation of an ion-photon interface with an improved efﬁciency. Using this interface, photons entangled with the ion are obtained with a probability of 0.69(3) at the cavity output and are detected with a probability of 0.462(3). The latter value constitutes a ﬁvefold increase over the previous best performance of 0.057(2) [34], obtained with another ion-cavity system in Innsbruck [36].
As a second key result of this thesis, it is shown that the probability with which photons are obtained at the cavity output could not be signiﬁcantly higher without changing properties of our cavity or quantum emitter. Speciﬁcally, the performance of the system saturates theoretical limits on the photon collection efﬁciency from an emitter-cavity system [37], set only by the cavity parameters and electronic structure of the quantum emitter. These ﬁrst two key results,

introduction 5
published in Ref. [38], provide clear paths for future improvements in the efﬁciency of photon-emitter interfaces.
As a third key result and as an application of the newly built interface, this thesis describes the distribution of ion-photon entanglement over 50 km of optical ﬁbre. This result was published in Ref. [39]. For that experiment, the ion-cavity interface is combined with a frequency conversion stage [40] which converts the ion-entangled photons to telecom wavelength (1550 nm), the wavelength that suffers the lowest absorption in optical ﬁbre. The construction and characterisation of the frequency c-
onversion setup is part of the PhD work of Martin Meraner [41], carried out in parallel to the work described in this thesis.
This thesis is structured as follows: In Ch. 2 the theoretical framework for the description of photon generation in the context of cavity quantum electrodynamics (QED) is introduced, including the theoretical efﬁciency limits mentioned above. In Ch. 3 the implementation of the model described in Ch. 2 is discussed within the framework of the 40Ca+ ion. The protocols for the generation of single photons and ion-photon entanglement in 40Ca+ are presented, based on the works of Refs. [42] and [34], -
respectively. In Ch. 4 the experimental apparatus is described, including the design and construciton of the cavity, as well as details about the ion trap, vacuum chamber, laser systems, photon detection setups and experiment control. In Ch. 5 some key methods employed in this thesis are described, including the mapping of the intra-cavity ﬁeld with an ion in order to determine the ion’s location in the ﬁeld. Further methods concern the preparation of the experiment and characterisation of experim-
ental parameters, as well as the analysis of experimental results. In Ch. 6 the efﬁciency limits of the interface are experimentally investigated. The results include the improved efﬁciencies mentioned above as well as a discussion of the system performance in the light of the efﬁciency limits introduced in Ch. 2. In Ch. 7 the experiment and experimental results for the distribution of ion-photon entanglement over 50 km are presented and discussed. The chapter includes a brief overview of the empl-
oyed method for photon frequency conversion, used to convert the photon’s wavelength to 1550 nm. Finally, Ch. 8 concludes the thesis with a summary and provides an outlook to future experiments.

2
THEORY
What is the maximum efﬁciency with which a photon can be collected from a quantum emitter? Ideal optical resonators, if they existed, would allow for deterministic interfacing between light and matter (a model system is sketched in Fig. 2.1). The efﬁciency of real systems, however, is limited by ﬁnite emitter-resonator coupling strengths and unavoidable resonator loss. In this chapter, the basic concepts and theory of single-photon generation in the context of resonator (cavity) QED are introduced-
. First, a theoretical framework is presented for describing the coupling between a quantised emitter, which we will interchangeably refer to as "atom", and an optical Fabry-Pérot cavity that enhances photon emission into a desired optical mode. In the second part of this chapter, theoretical efﬁciency limits to photon generation are introduced which underpin the main results of this thesis.
Fig. 2.1: Photon collection with an optical cavity. The model for photon collection described in this chapter is based on a (single) quantum emitter coupled to an optical resonator. The resonator (or cavity) consists of two mirrors and enhances photon emission into a desired optical mode.
2.1 coupling atoms and cavities
This section starts with a summary of relevant parameters of optical cavities, after which the basic aspects of cavity QED are introduced for a system consisting of a two-level atom interacting with the quantised electromagnetic ﬁeld of an optical resonator (cavity). A more detailed treatise on the properties of cavities can be found in Ref. [43]; for basic information on the formalism of quantum mechanics, ﬁeld quantisation and cavity QED, the reader is referred to Refs. [44, 45].
2.1.1 Optical cavities
Consider a Fabry-Pérot cavity consisting of two mirrors that are separated by a length l. Resonances occur for light undergoing constructive interference after one round trip. The resonance frequencies are sep-
7

8 theory

Cavity ﬁnesse

arated by integer multiples of the cavity’s free spectral range (FSR) ∆νFSR, given by the inverse round-trip time tRT of light travelling in the cavity at speed c:

1c ∆νFSR = tRT = 2l .

(2.1)

With this, resonances occur at frequencies νq = q∆νFSR + const., where the integer q denotes the axial mode number and the constant is due to the mirror curvature which is introduced later.
The mirrors, denoted 1 and 2 (Fig. 2.1), are characterised by their transmission, reﬂection and loss coefﬁcients (of intensity), Ti, Ri and Li, respectively, with i ∈ {1, 2}. Here, Li corresponds to loss due to absorption and scattering in the mirrors. Energy conservation dictates that Ti + Ri + Li = 1. We deﬁne the total cavity round-trip loss as L = T1 + T2 + L1 + L2. The quality of the cavity is characterised by its ﬁnesse

F

=

π(R1√R2)1/4 1 − R1R2

≈

2π L,

(2.2)

where the approximation holds for 1 − R1 1 and 1 − R2 1 [46], as is the case in this work. Around a resonance, the spectral transmission proﬁle is Lorentzian with a linewidth [full width at half maximum (FWHM)] of

∆νc

=

∆νFSR F

=

2κ 2π

,

(2.3)

where κ is the decay rate of the cavity ﬁeld, deﬁned only by the total cavity loss and its length.
If spherically curved mirrors are used, as in this work, the cavity eigenmodes are restricted to geometrically stable Hermite-Gauss (or Laguerre-Gauss) modes. In the case of both mirrors having the same radius of curvature (ROC) RC, the resonance frequencies of axial-plustransverse modes in the cavity are given by

(m + n + 1)

c

νqmn = ∆νFSR (q + 1) +

π

arccos

1− 2∆νFSRRC

,

(2.4)

where m and n specify the transverse-mode indices of a Gauss TEMqmn (transverse electromagnetic) mode. The frequency spacings ∆νmn between adjacent transverse modes will be of practical interest for the cavity characterisation presented in Sec. 4.1.1.
In order to allow for the maximum possible interaction strength between atom and cavity (see Sec. 2.2), the atom is coupled to a TEM00 mode1. We therefore restrict the discussion in the rest of this chapter
1 The value of the axial mode index q is of no practical interest and is usually omitted.

2.1 coupling atoms and cavities 9

to this mode. The smallest electric ﬁeld radius2 of this mode is called the waist, whose size is given by

w20

=

λ 2π

l(2RC − l)

(2.5)

for a wavelength λ. At a distance z from the waist3 along the optical axis, the mode radius is calculated as

Cavity waist

w(z) = w0 1 + (z/zR)2,

(2.6)

with the Rayleigh range zR = πw20/λ. The spatial distribution of the electric-ﬁeld standing-wave inside the cavity Ecav has the following dependency:

Ecav(r)

∝

cos(kz)

w0 w(z)

e−(x2+y2)/w(z)2

,

(2.7)

where k = 2π/λ is the wave number.4 With this, we can deﬁne the mode volume as

V=

|Ecav|2dr

=

π 4

w20

l

=

Aeffl,

(2.8)

where

we

have

introduced

the

effective

mode

area

Aeff

=

π 4

w20.

As

we will see later, the mode volume is the only cavity parameter that

determines the interaction strength between atom and cavity, and Aeff is a key parameter on which the efﬁciency of photon collection by the

cavity depends.

In order to understand the interactions between single photons and

single atoms, it is necessary to consider a quantized description of the

electromagnetic ﬁeld [45]. The single-mode ﬁeld of the cavity can be

treated as a quantum harmonic oscillator with resonance frequency

ωC = 2πc/λ. The Hamiltonian of the cavity, written in terms of the annihilation operator a and creation operator a†, is given by:

HC = hωC

a†a + 1 2

.

(2.9)

The quantum-mechanical state vector of the cavity mode is then generally described by a superposition of photon number states, the socalled Fock states |n . Each photon of a mode carries an energy hωC.

2 The radius is deﬁned as the distance from the optical axis where the electric ﬁeld strength has dropped to 1/e of its on-axis value.
3 Throughout this thesis, depending on the context, the term "waist" is used to signify both the smallest radius w0 and its location.
4 Of course, the electric ﬁeld does not necessarily take a maximum value of the cosine function at the waist (z = 0). Eq. (2.7) is an (excellent) approximation based on the fact that the paraxial approximation is generally assumed throughout this thesis, implying zR λ.

10 theory

For n photons in the cavity, the total energy is given by hωC(n + 1/2), with the zero-point energy hωC/2.
Note that the description using a Hamiltonian does not, generally, contain losses. In a real optical cavity, all photon states that are populated in the cavity, e.g., due to photons emitted by an atom into the cavity mode, decay due to, e.g., transmission out of the cavity or scattering and absorption loss. This dissipation to the environment is treated later in this chapter.

2.1.2 Two-level atom coupled to a cavity

Atom-cavity coupling strength

For an atom with ground state |g of energy hωg and excited state |e of energy hωe, the Hamiltonian is given by

HA = hωgσgg + hωeσee, with σij = |i j| .

(2.10)

The coupling strength between the atomic dipole µge and the vacuum ﬁeld of a cavity Evac surrounding the atom is given by the vacuum Rabi frequency

g = µge · Evac . h

(2.11)

With the vacuum electric-ﬁeld amplitude Evac,0 = hωC/(2 0V) [45], the atom-cavity coupling strength at an antinode of the cavity standing wave can be written as

g=

4µ2gec 0hw20lλ

ζ

=

cγg ζ, 2lAeff

(2.12)

for a cavity of length l and with Aeff

=

Aeff σ

.

The

factor

ζ

1 is

introduced to account for the projection of the cavity polarisation

onto the atomic dipole moment, as discussed further in Sec. 3.2. The

right-hand side of Eq. (2.12) is obtained by writing the dipole moment

as [37]

µ2ge

=

γg

6 0hλ3 8π2

.

(2.13)

For a closed system, in which energy is preserved, an atom in the ground state is excited by absorbing a single photon from the cavity and an atom in the excited state will be transferred to the ground state by emitting a photon into the cavity mode. The interaction Hamiltonian is therefore given by

Hcinatv = hg[σega + a†σge],

(2.14)

2.1 coupling atoms and cavities 11

where the absorption (emission) of a photon is represented by the annihilation operator a (creation operator a†). The complete Hamiltonian is H(2) = HA + HC + Hcinatv, which is usually referred to as the JaynesCummings Hamiltonian [47]. Note that the formal derivation of the interaction Hamiltonian (2.14) relies on both the dipole approximation and rotating wave approximation [44].5
The ground state of the system is trivially given by |g, 0 = |g ⊗ |0 , the atom in the ground state and no photon in the cavity. For a given number of excitation quanta (photons) n > 0 in the system, the atomcavity coupling leads to pairs of non-degenerate eigenstates, the socalled dressed states. These states are given by |±, n = 1/2(|g, n ± |e, n − 1 ) and have an energy splitting 2g.6 An excited atom in a vacuum mode of a cavity will undergo oscillations between the states |e, 0 and |g, 1 at fr-
equency 2g, hence the term vacuum Rabi frequency.
In order to include dissipation to the environment in the description of the system, the master equation formalism can be used (see, e.g., Ref. [44] Ch. 15.4). Here, dissipative processes are modelled via collapse operators Lj (so-called Lindblad operators) which describe the coupling of the system to a reservoir of empty modes. The system is then described via its density matrix ρ with the master equation in Lindblad form:

with

dρ dt

=

i −
h

[H, ρ]

−

L[ρ]

1 L[ρ] = − 2

2LjρL†j − ρLjL†j − L†j Ljρ ,

j

(2.15)

where the Liouvillian L[ρ] describes the non-unitary evolution of the system due to its coupling to the reservoir and is responsible for irreversible dissipation. The master equation can be rewritten as

with

dρ dt

=

i −
h

[Heff, ρ]

+

LjρL†j

j

ih Heff = H − 2

L†j Lj,

j

(2.16)

where Heff is the effective non-Hermitian Hamiltonian describing nonunitary evolution. In the following discussion, two dissipative

5 In short, the dipole approximation assumes that the size of the atom is much smaller
than the wavelength of the electromagnetic ﬁeld, such that the amplitude of the
ﬁeld can be considered constant across the extent of the atom. In the rotating wave approximation, terms proportional to aσ and a†σ† are neglected in the full interaction Hamiltonian h(a + a†)(gσ† + g∗σ). The time evolution of these terms is of the form e±i(ωge+ωC)t. Rotating at twice an optical frequency, these terms quickly average
out to zero on a timescale which is dominated by the evolution of the other terms evolving with e±i(ωge−ωC)t (the condition |ωge − ωC| ωge, ωC is assumed). For further details, see Ref. [44], Chapters 3 and 14.
6 Resonant interaction between cavity and atom is assumed.

12 theory

Purcell effect

processes are of importance: spontaneous emissio√n from the atom at rate 2γ, which is represented by the operator LA = 2γσge, and √decay from the cavity mode at rate 2κ, which is represented by LC = 2κa. The effective Hamiltonian is then given by Heff = H(in2t) − ih(γσee + κa†a), where only the interaction part is taken into account now and
cavity and atom are considered to be on resonance.
The system dynamics can be analysed by solving the time-dependent
Schrödinger equation

.
ih |ψ = Heff |ψ .

(2.17)

For the state |ψ = ce |e, 0 + cg |g, 1 with time-dependent coefﬁcients ce,g and with the atom initially in the excited state [ce(0) = 1, cg(0) = 0], the following system of differential equations is obtained:

c. e c. g

=−

γ ig ig κ

ce . cg

(2.18)

Different regimes can be distinguished from these equations, depending on the relative strengths of g, κ, γ. In the "strong coupling regime", with g (κ, γ), the system dynamics are dominated by vacuum Rabioscillations and the system is best described in the basis of the dressed states mentioned above [44].
Another regime can be characterised by κ g. Here, vacuum Rabioscillations are inhibited by the strong damping of the one-photon state in the cavity: the photon is emitted from the cavity before it can be re-absorbed by the atom. The transient population of the state |g, 1 is negligible and the adiabatic approximation c. g ≈ 0 yields [48, 49]

c. e = −γce,

i.e.,

ce(t) = exp(−γt)

with

g2 γ = γ + κ . (2.19)

The excited atom decays exponentially with a rate that is enhanced by

the presence of the cavity. This is the so-called Purcell effect [50].

It is interesting to look at the ratio of the probability P|g,1 for being

in state |g, 1 and the [48]: P|g,1 /P|e,0 = g2

/pκr2ob(tahbeilcitoynPd|iet,i0onfoc. rg

being = 0 is

in the excited state still assumed). Dis-

regarding internal losses of the cavity, like absorption and scattering

in the mirrors, the state |g, 1 decays with a rate 2κ by emitting a pho-

ton from the cavity. On the other hand, the state |e, 0 spontaneously

decays with a rate 2γ into free space. The ratio of the probability for

emission from the cavity into the output mode PS and the probability for spontaneous emission into free space Plaotsosm is therefore given by

PS Plaotsosm

=

2κP|g,1 2γP|e,0

g2 =.
κγ

(2.20)

2.2 single photons from atom-cavity systems 13

This is the Purcell factor, which is twice the one-atom cooperativity parameter

g2 C = 2κγ .

(2.21)

Still ignoring internal cavity loss, and assuming that either a photon
is emitted from the cavity into the output mode or lost due to spontaneous atomic decay, i.e., PS + Plaotsosm = 1, we can determine the success probability for collecting a photon in the cavity output in the case of a
two-level atom:

2C PS = 1 + 2C

(2.22)

This relation is usually derived for the so-called "bad cavity" or "Purcell" regime, which is characterised by κ g2/κ γ. Note, however, that only the condition c. g = 0 was necessary in deriving the relation, suggesting that it is a bound which can also be applied outside the bad-cavity regime [48]. Indeed, using the same condition and similar considerations, an upper bound on the photon-collection probability will be presented in the next section for an atom with more than two levels, in the pres-
ence of internal cavity loss, and independent of the coupling regime.

Cooperativity

2.2 single photons from atom-cavity systems
Generating single photons with a two-level atom requires exciting the atom, e.g., via a resonant laser pulse or rapid adiabatic passage. However, upon emission of a photon, the atom will revert back to the ground state and another photon can potentially be generated before the laser pulse is switched off. Many atom-based photon-generation schemes therefore rely on a three-level conﬁguration with distinct initial and ﬁnal atomic states, where only one photon is ever generated per laser pulse [18, 3-
7, 49, 51]. In this section, a model of a three-level atom coupled to a cavity and driven by a laser is introduced and the presence of internal cavity loss is treated explicitly. Upper bounds on the probability for generating single photons in the context of the model will be presented. These upper bounds, or ﬁgures of merit, were derived in Ref. [37] and will be discussed with inspiration taken from Refs. [48, 51]. They will serve as reference points throughout this thesis and will be compared ag-
ainst experimental data and numerical simulations in a later chapter. The section concludes with an overview of the cavity-mediated Raman transition (CMRT), which is the particular photon generation scheme employed in this thesis.

14 theory
2.2.1 Three-level atom in a cavity
Fig. 2.2: Three-level atom in a cavity. A three-level atom in the waist with radius w0 of a vacuum mode of a cavity formed by two mirrors with transmission coefﬁcients T1 and T2. The unwanted cavity loss per round-trip αloss includes T1. The |u ↔ |e transition is driven by an external ﬁeld (blue arrow) with coupling strength Ω. The |g ↔ |e transition is coupled to the cavity (red arrow) with coupling strength g. For the generation of photons, the system is initialised into the state |u, 0 , where -
|0 is the vacuum Fock state of the cavity. Emission of a photon into the cavity leaves the system in |g, 1 . Spontaneous decay from |e, 0 to |g, 0 with decay constant γg ends the attempt in failure, whereas decay from |e, 0 to |u, 0 with decay constant γu allows for subsequent cavity photon generation (re-initialisation events). This ﬁgure has been reproduced from Fig. 1 of Ref. [38].
coherent interaction: Consider a three-level atom in a Λ-type conﬁguration with two ground states, |u and |g , and one excited state |e . The atom is located at the position of the waist w0 [Eq. (2.5)] of a cavity formed by two mirrors with transmission values T1 and T2, as illustrated in Fig. 2.2. The output mode of the cavity is the free-space spatial mode that couples to the cavity via the mirror with transmission T2. The |e ↔ |g transition with frequency ωge = ωe − ωg and absorption cross-sect-
ion σ = 3λ2/(2π) [52] at wavelength λ = 2π c/ωge, is coupled by a vacuum mode of the cavity. The |u ↔ |e transition with frequency ωue = ωe − ωu is driven by an external drive ﬁeld of frequency ωd with Rabi frequency Ω. We introduce the cavity and drive-ﬁeld detunings ∆C = ωge − ωC and ∆d = ωue − ωd. The system Hamiltonian is composed of the energy of the free atom (HA = hωiσii, i ∈ {u, e, g}), the energy of the cavity HC [Eq. (2.9)], the interaction term due to the cavity Hcinatv [Eq. (2.14)] and-
 an interaction term due to the coupling of the atom to the drive laser Hd = hΩ/2(σeueiωdt + σuee−iωdt). Again, the dipole approximation and rotating wave approximation7 are assumed. Choosing the zero-
7 Here, not only terms rotating at twice an optical frequency (2ωC, 2ωd, ωC + ωd) are neglected, but also terms rotating at ωC − ωd [48]. This is justiﬁed under the assumption max{2g, Ω, |∆C|, |∆d|} |ωC − ωd|, implying that cavity and drive ﬁeld only couple to their respective transitions.

2.2 single photons from atom-cavity systems 15

point energy to lie with the state |g , the Hamiltonian can be written as follows, in a frame rotating at the cavity and drive-ﬁeld frequencies8:

H(3) = h

(∆C

−

∆d)σuu

+

∆Cσee

+

g(σega

+

a†σge)

+

Ω 2 (σeu

+

σue)

.

(2.23)

dissipation: Using the formalism introduced in the previous section, we can now include dissipation channels in the model. The total cavity decay rate is given by

c κ = κin + κext = 4l (αloss + T2),

(2.24)

where

the

internal

decay

rate

κin

=

c 4l

αloss

is

determined

by

αloss,

the

unwanted cavity-loss probability per round trip. This unwanted cavity

loss contains all photon-loss mechanisms in the cavity except for T2,

such as internal cavity loss due to absorption and scattering in the

mirrors and transmission through the mirror with coefﬁcient T1. The

external

decay

rate

is

κext

=

c 4l

T2

and

corresponds

to

wanted

decay

into the output mode.

The free-space spontaneous decay rates on the |e → |g and |e →

|u transitions are given by γg and γu, respectively. As an extension

to the model, possibly existing ground states other than |g and |u

to which the excited state |e can decay are grouped in a fourth state

|o ; the corresponding decay rate is γo. The total decay rate of the

excited state is therefore γ = j rjγ = j γj, with j ∈ {g, u, o} and rj the branching ratio of the transition |e → |j . With the deﬁnition of g

in Eq. (2.12), the cooperativity [Eq. (2.21)] can now be expressed as

C

=

g2 2κγ

=

1 Aeff(αloss

+

T2

)

γg γ

ζ2,

(2.25)

independent of the cavity length and atomic dipole moment.

Cavity decay rate

master equation: In analogy to the case of the two-level atom, the effective non-Hermitian Hamiltonian in the case of a three-level atom is given by

H(ef3f) = H(3) − ih(γσee + κa†a)

(2.26)

8 The Hamiltonian in a rotating frame H˜ is obtained from a Hamiltonian H via the transformation H˜ = UHU† − A, where U = eiAt/h is a unitary operator generated
by a Hermitian and time-independent operator A (see, e.g., Ref. [45] Appendix C). Obtaining the Hamiltonian of Eq. (2.23) requires A = (ωC − ωd)σuu + ωC(a†a + σee).

16 theory

and the master equation is

dρ = − i dt h

H(e3ff), ρ

+ 2κextaρa† + 2κinaρa† +

2γjσjeρσej.

j=g,u,o

(2.27)

Note that the coupling to the output mode can also be treated explicitly v√ia an interaction Hamiltonian instead of the simple Lindblad operator
2κexta used here, as shown in Ref. [37]. While the explicit method has the advantage of allowing one to obtain an expression for the frequency spectrum of the emitted photon, the approach taken here is sufﬁcient in order to shed light on the efﬁciency limits presented next.

photon generation: In order to generate an intra-cavity photon, the system is initialised in the state |u, 0 , from which it is driven to |g, 1 via interaction with the drive laser for a duration T and interac-
tion with the vacuum mode of the cavity. To begin with, we assume
that any quantum jumps, i.e., atomic (γ) or cavity (κ) decay, lead to a loss from the three-level system described by the Hamiltonian H(3) of
Eq. (2.23). The time evolution is then described by the non-Hermitian Schrödinger equation (2.17) [37], where the effective Hamiltonian H(ef3f) is given by Eq. (2.26). For the state |ψ = cu |u, 0 + ce |e, 0 + cg |g, 1 ,
the Schrödinger equation becomes

c. u

 i(∆C − ∆d)

 

c. e

 

=

−

 

c. g



iΩ/2 0

iΩ/2 i∆C + γ
ig

 

0 cu

 ig

 ce

 

.

 

κ cg

(2.28)

Successful photon collection consists in driving the system to the state |g, 1 (via emission of a photon into the cavity mode) and subsequent decay of the photon into the cavity output mode, i.e., decay of the state |g, 1 to |g, 0 at rate 2κext. The corresponding probability is given by

T
PSpure = 2κextP|g,1 = 2κext |cg|2dt,
0

(2.29)

where the notation "pure" indicates the no-quantum-jump condition. Starting from the master equation (2.27) and the Schrödinger equa-
tion (2.28), and making use of the expression for the collection probability (2.29), an upper bound on the photon collection probability is derived in Ref. [37]. This upper bound is independent of the drive strength Ω and the detunings ∆C,d. In the following subsection, this upper bound is presented and discussed; the reader is referred to Ref. [37] for details on its derivation. At the end of this chapter we will come back to Eq. (2.29) in order to determine the conditions under

2.2 single photons from atom-cavity systems 17

which the upper bound can be achieved using our speciﬁc photon generation scheme.

2.2.2 Efﬁciency limits of photon collection

An important aspect of the three-level atom presented above is that quantum jumps on the |e → |u transition before a cavity photon has been generated do not lead out of the state space spanned by |ψ . Such quantum jumps re-initialise the atom in the state |u, 0 and the photon-generation process continues until the state vector becomes |ψ = 0. This means that, given a long enough time T , either a photon was successfully transmitted into the output mode or the photongeneration attempt failed due to-
 internal cavity decay or spontaneous atomic decay, leaving the system in one of the states |g, 0 or |o, 0 . Taking into account these "re-initialisation events", an upper bound to the photon-collection probability PS—the probability for obtaining a photon in the cavity output mode—is derived in Ref. [37]:

PS PSbound,

with

PSbound =

κext κ

2C 1 + 2C

∞

ru 1 + 2C

m
.

m=0

(2.30) (2.31)

As a reminder, ru = γu/γ is the atomic branching ratio to state |u (see Fig. 2.2). The ﬁrst term in brackets in Eq. (2.31) is the escape probability

Pesc

=

κext κ

=

T2

T2 + αloss

,

(2.32)

i.e., the probability for a photon inside the cavity to escape to the output mode and not be lost due to the internal cavity loss. The product of the second term in brackets and the summation can be interpreted as the (internal) generation efﬁciency Pin—the probability for a photon to be emitted into the cavity mode—such that PSbound = PescPin. Note that the second term in brackets corresponds to the collection efﬁciency PS derived in Sec. 2.1.2 for a two-level atom in the absence of internal cavi-
ty loss [Eq. (2.22)]. The terms with m > 0 in Eq. (2.31) arise due to the presence of the |e ↔ |u transition driven by the laser: they are contributions to Pin due to the re-initialisation events described above (spontaneous decay on the |e → |u transition preceding successful photon generation). These re-initialisation events lead to cavity output photons that are not transform-limited; that is, the summation over m describes a mixture of wave packets in the temporal domain.
The upper bound on PSpure—the photon-collection probability without re-initialisation events—is calculated by setting m = 0 in Eq. (2.31). While we do not measure PSpure in the experiment, we will revisit the

Upper bound to the
photon-collection probability (PSbound)

18 theory

fraction of photons in the cavity output mode generated without prior spontaneous decay of the emitter: PSpure/PS (see Ch. 6). Note that the extent to which re-initialisation events are detrimental depends on what the photons are to be used for. While re-initialisation has no observable effect on the ﬁdelity of our emitter-photon entanglement (Sec. 6.4), it will reduce the indistinguishability of the photons, as we have recently studied [53].9

d e r i va t i o n

of

P

bo S

u

n

d

:

Achieving the upper bound given by Eq.

(2.31), i.e., satisfying the equality in Eq. (2.30), requires the condition

T 0

|c. g|2dt

=

0

[37].

Recall

from

Sec.

2.1.2

that

the

photon-collection

probability for the two-level atom [Eq. (2.22)] was derived under the

same condition. Indeed, by following the same intuitive considerations

used for the two-level atom, an equivalent form of Eq. (2.31) may be

obtained, as outlined in the following. Starting from the Schrödinger

equation (2.28) and the condition

T 0

|c. g|2dt

=

0,

consider

again

the

ratio of the probability P|g,1 for being in state |g, 1 and the probability P|e,0 for being in the excited state: P|g,1 /P|e,0 = g2/κ2. The state

|g, 1 decays with a rate 2κext by emitting a photon from the cavity into

the output mode. While the state |e, 0 spontaneously decays with a

rate 2γ into free space, only the part γloss = γg + γo = γ − γu leads to an atomic state that is decoupled from the photon generation process

[48]. The ratio of the probability for collecting a photon in the cavity

output mode PS and the loss probability due to spontaneous emission into free space Plaotsosm is therefore given by

PS Plaotsosm

=

2κextP|g,1 2γlossP|e,0

=

κext κ

g2 κ(γ − γu) .

Taking into account internal cavity decay, which occurs with a prob-

ability Plcoasvs = 2κinP|g,1 , the condition PS + Plaotsosm + Plcoasvs = 1 holds.

With

the

deﬁnition

of

an

effective

cooperativity

Ceff

=

g2 2κ(γ−γu

)

,

it

is

straightforward

to

arrive

at

PS

=

, κext 2Ceff
κ 1+2Ceff

which

is

equivalent

to

Eq. (2.31).10

optimised upper bound: The upper bound on the photon-collection probability [Eq. (2.31)] is maximised for the optimal output-mirror transmission [37]

T2opt = αloss

12

1

+

β αloss

Aeff

,

(2.33)

9 The results of Ref. [53] can also be found in the upcoming thesis of M. Meraner [41]. 10 The sum in Eq. (2.31) yields the expression (1 + 2C)/(1 + 2C − ru).

2.2 single photons from atom-cavity systems 19

with

β

=

γg γ−γu

ζ2

,

yielding

the

optimised

upper

bound11

PSopt = 1 − 1 +

2

.

1

+

β

1 αloss

2 Aeff

(2.34)

Excluding re-initialisation events, the optimised upper bound on PSpure

(the photon-collection probability without prior spontaneous decay to

|u

)

is

calculated

by

setting

γu

=

0,

so

β

=

γg γ

ζ2

.

The existence of an optimal output-mirror transmission can be

understood by considering that there is a tradeoff relation in Eq. (2.31)

between the probability for photon emission into the cavity (Pin) and the escape probability (Pesc) with respect to T2: while T2 > T2opt would increase the probability for a photon already inside the cavity to be

transmitted to the output mode, it would reduce the probability of

the photon being emitted into the cavity in the ﬁrst place, and the opposite would be true for T2 < T2opt.
This tradeoff relation needs to be considered when designing a new

cavity-QED system for the generation of single photons: the output-

mirror transmission T2 needs to be chosen with respect to the values of

w0 and αloss one expects to achieve. In other words: for a free choice of the transmission T2, the cavity waist w0 and unwanted photon

loss αloss are the only parameters that determine the efﬁciency of the atom-photon interface on a given atomic transition.

2.2.3 Cavity-mediated Raman transition (CMRT)

In theory, PSbound can be achieved via one of several different drive schemes, e.g., resonant excitation, vacuum-stimulated Raman adiabatic

passage (vSTIRAP) or cavity-enhanced Raman scattering [37]. Our

drive scheme, which we call cavity-mediated Raman transition (CMRT), is

based on cavity-enhanced off-resonant Raman scattering. For a calcium

ion coupled to a cavity, the scheme was ﬁrst presented in Refs. [42, 54]

and has further been employed in a number of works, e.g., Refs. [36,

55–57]. In this section, a brief summary of the key working principles

is given and the conditions under which

T 0

|c. g|2dt

≈

0

is

fulﬁlled,

i.e.,

for which the efﬁciency converges towards the upper bound, will be

analysed for our regime of cavity and atomic parameters.

In our system, spontaneous atomic decay is the dominant rate, i.e.,

γ g, κ. In order to reduce the probability of spontaneous decay

from the excited state |e during the CMRT, a value for the detuning

of the drive laser is chosen that is much greater than both the laser’s

drive strength Ω and the decay rate γ. In the case of drive laser

11 Eq. (2.34) corresponds to Eq. (34) in Ref. [37], but the latter is expressed in terms

of

the

internal

cooperativity

Cin

=

g2 2κin γ

=

1 Aeff αloss

γg γ

ζ2

.

Eq.

(2.34)

follows

directly

from Eq. (34) in Ref. [37] by substituting 2Cin/(1 − ru) = 2β/(Aeffαloss).

20 theory

Coupling strength of the CMRT

and cavity having the same detuning ∆ from the excited state, the system is said to be on Raman resonance and population is ideally coherently transferred directly from initial state |u, 0 to state |g, 1 , which includes the emission of a photon into the cavity. Under the condition ∆ (γ, Ω, g), the description can be approximated by that of a two-level system involving atomic initial and ﬁnal levels |u and |g , respectively. The effective coherent coupling rate of this process is approximately giv-
en by [42]

gΩ Ωeff = |2∆| .

(2.35)

Spontaneous decay due to off-resonant population of the excited state now occurs at an effective rate of incoherent scattering, approximately given by [42]

Ω2 γeff = 2∆ γ.

(2.36)

As can be seen from this approximate description, the ratio of

the coherent rate Ωeff to the incoherent rate γeff can be tuned by adjusting the ratio of drive strength to detuning Ω/∆ [54].12 Indeed,

for given atomic and cavity parameters, the ratio Ω/∆ determines

how close to PSbound the system operates, i.e., how close the system

comes to satisfying the condition

T 0

|c. g|2dt

=

0.

This

is

illustrated

in Fig. 2.3, using solutions of the three-level-system’s Schrödinger

equation (2.28). For the parameters in our experimental setup, the

integral Ig = detuning ∆).

A0∞ls|c.og|s2hdotwisnplaortetecdaflcour ldaitfifoenresnot fvaPlSpuuerse

of Ω (and a ﬁxed

= 2κ

∞ 0

|cg

|2dt,

normalised by the corresponding upper bound PSbound,pure given by Eq. (2.31) for m = 0. As Ω tends to 0, Ig vanishes and PSpure/PSbound,pure

tends to 1. In other words, the lower the Rabi frequency (the slower we

drive the Raman process) the closer to the maximum photon efﬁciency

we can expect to get.

The plots in Fig. 2.3 show that the upper bound on the photon-

collection probability is indeed approximately achievable with our

drive scheme for small enough ratios of Ω/∆. The concrete efﬁciency

limits of our experimental apparatus will be revisited in Ch. 6. Here,

the upper bounds obtained from the analytic model introduced in

this chapter will be compared to experimentally measured efﬁciencies

and to numeric simulations of the full master equation, taking into account the level scheme of the 40Ca+ ion used in the experiments, as

well as dephasing mechanisms due to imperfect frequency stability of

the CMRT.

12 The failure probability due to spontaneous scattering cannot be made arbitrarily small. Its lower bound is given by 1 − Pin (see Sec. 2.2.2).

2.2 single photons from atom-cavity systems 21

1.0

0.25

0.8

0.20

PSpure/PSbound,pure Ig'

0.6

0.15

0.4

0.10

0.2

0.05

0.01

5 10

50 100

0.00

Ω (arb. u.)

Fig. 2.3: Approximating the upper bound on the photon-collection proba-

bility with the CMRT. From the Schrödinger equation (2.28), the

integrals Ig =

∞ 0

|c. g|2dt

and

PSpure

=

2κ

∞ 0

|cg|2dt

are

calculated

for different values of Ω and the following parameters (in arbitrary

units): ∆C = 400, g = 0.88, κ = 0.07, γ = 11.5. The Raman-resonance

condition is met by setting ∆C − ∆d = −∆C/2 + Ω2 + ∆2C/2 =

δAC, the AC Stark shift induced by the drive ﬁeld on the |u ↔ |e transition. The drive strength Ω is set to be constant (time indepen-

dent).

Part II
THE 40Ca+ ION, EXPERIMENTAL SETUP AND METHODS

IMPLEMENTATION OF AN ION-PHOTON INTERFACE WITH 40 Ca+

3

This chapter provides an overview of how the general model for photon generation presented in the previous chapter is implemented in our lab, thereby realising a light-matter interface for a trapped 40Ca+ ion. After a short introduction to the basic principle of the experimental system, the transitions involved in our generation of single photons are identiﬁed in the level structure of 40Ca+. Furthermore, our photon generation scheme (CMRT, Sec. 2.2.3), is extended to allow for the generation of i-
on-photon entanglement. Finally, the atomic transitions used for laser cooling, state initialisation and state readout are reviewed, as well as the use of trapped 40Ca+ as a quantum bit (qubit), involving coherent manipulations on an optical quadrupole transition.
Trapped 40Ca+ has been extensively employed in research projects in the ﬁeld of quantum-information processing in Innsbruck (and elsewhere). In the context of cavity-QED experiments in Innsbruck, experimental demonstrations most relevant for this thesis include the generation of single photons [42, 55] as well as ion-photon entanglement [34, 36, 56] (for a nice overview of the history of cavity QED in Innsbruck, see Ch. 2 of the PhD thesis of K. Friebe [58]). The principles outlined in this chapte-
r are for the most part based on the works listed above and provide the framework for the experimental setup and the experiments presented later in this thesis. A key difference in results achieved in this thesis, compared to those previous works, is the higher photon-collection efﬁciency achieved here and the theoretical understanding of the limits on that efﬁciency.
In Secs. 3.1, 3.2 and 3.3, text from our publication [38] has been reprinted with modiﬁcations.
3.1 principle of the experiment
A single 40Ca+ ion in the centre of a linear Paul trap is coupled to an optical cavity that enhances photon emission on an electronic dipole transition at 854 nm. Photons are generated via a CMRT (Sec. 2.2.3), where the external drive-laser ﬁeld is detuned from a dipole transition at 393 nm, triggering the emission of an 854-nm photon into the cavity. By adding a second frequency to the drive-laser ﬁeld, we can drive a bichromatic CMRT to generate entanglement between the polarisation degree of fr-
eedom of the photon and the electronic states of the ion, as will be explained in Sec. 3.3.

25

26 implementation of an ion-photon interface with 40Ca+
Fig. 3.1: Implementation of the ion-photon interface with 40Ca+. (a) A 40Ca+ ion in a linear Paul trap (the electrodes depicted here are for radial, in-plane, conﬁnement) and at the focus, and a vacuum antinode, of an optical cavity. A drive-laser pulse, propagating along the quantisation axis deﬁned by a magnetic ﬁeld perpendicular to the cavity axis, causes emission of an 854-nm photon into a vacuum mode of the cavity. Mirror transmission coefﬁcients are denoted T1 and T2, αloss is the cavity ro-
und-trip loss, PS is the probability for obtaining a photon in the cavity output mode, Ppath is the probability that a photon in the cavity output mode reaches the ﬁbre-coupled single-photon detector (SPD) via some optical elements (O.el.) and is detected. (b) Atomic level scheme showing the CMRT for photon generation. The cavity (red solid arrow) and drive laser (blue solid arrow) have a common detuning of ∆/2π = −403(5) MHz from the excited state. The vacuum Rabi frequency of the ion-cavity coup-
ling is g, the Rabi frequency of the drive laser is Ω. Ground states other than |g and |u to which the excited state |e can decay are grouped in state |o (contained within grey oval). The spontaneous decay rates are (γg, γu, γo)/2π = (0.45, 10.74, 0.30) MHz, with γg + γu + γo = γ = 2π × 11.49(3) MHz. This ﬁgure has been modiﬁed from Fig. 2 of Ref. [38].
The generated photon preferentially leaks out of the cavity mirror with transmission T2 into the cavity output mode. See Fig. 3.1a for a schematic of the experiment. The total probability Ptot for detecting a photon is estimated from many repeated attempts to generate and detect a photon. This total probability is given by Ptot = PSPpath, where the photon collection probability PS is the probability for obtaining a photon in the cavity output mode and the path efﬁciency Ppath is the probability th-
at a photon in the cavity output mode reaches the detector and is detected. From an independent calibration of Ppath, the probability PS can be determined and compared to the upper bound

3.2 transitions for photon generation 27

given by Eq. (2.31). The components of the setup shown in Fig. 3.1a will be described in detail in Ch. 4.

3.2 transitions for photon generation

The Λ-scheme |u ↔ |e ↔ |g in Fig. 2.2 is realised in 40Ca+ within the ﬁne-structure (angular-momentum state) manifolds 42S1/2 ↔ 42P3/2 ↔ 32D5/2. Here, the notation 2s+1LJ is used, with spin s, orbital angular momentum L and total angular-momentum quantumnumber J. The S1/2 manifold is the lowest-lying of 40Ca+ that is not fully occupied and is inﬁnitely long lived. The D5/2 manifold is a metastable state with a lifetime of 1.17 s [59], which can be considered
inﬁnite on the timescales relevant to the experiments of this work.
The excited-state manifold P3/2 has a lifetime of τ = 6.924(19) ns [60] and corresponding rate of spontaneous emission 1/(2τ) = γ =
2π × 11.49(3) MHz.
An externally applied magnetic ﬁeld lifts the degeneracy of these
manifolds such that individual Zeeman sublevels mj can be addressed
in a frequency-selective manner. In the context of this thesis, the
magnetic ﬁeld has a strength of 4.23 G (see Sec. 4.3), resulting in a
Zeeman splitting of the D5/2 manifold of δZ/2π = 7.1 MHz. The CMRT couples the initial state |u, 0 = |42S1/2, mj= − 1/2 |0 , where the second ket describes the cavity photon number, to the metastable ﬁnal state |g, 1 = |42D5/2, mj= − 5/2 |1 via the intermediate excited state |e, 0 = |42P3/2, mj= − 3/2 |0 . The three atomic states are shown as thick black lines in the atomic level scheme of Fig. 3.1b. The reasons
for choosing these states for photon generation in the level structure of 40Ca+ are outlined in Ref. [61].
The excited state |e can decay to states other than |g and |u , namely the Zeeman sublevels |mj = −3/2 and |mj = −1/2 of the D5/2 manifold as well as the 32D3/2 manifold. For the purpose of future calculations, these other states can be grouped in a fourth artiﬁcial state |o (grey oval in Fig. 3.1b). With the branching ratios r and Clebsch-Gordan coefﬁcients G displayed in Fig. 3.2, the atomic
decay rates are calculated as

γg

=

γ

×

rD5/2

×

(G−

5 2

)2

,

γu = γ × rS1/2,

γo = γ × rD5/2

(G−

3 2

)2

+

(G−

1 2

)2

+ γ × rD3/2,

yielding (γg, γu, γo)/2π = (0.45, 10.74, 0.30) MHz. The Clebsch-Gordan coefﬁcients Gm describe the transition amplitudes between the states |e = |P3/2, mj= − 3/2 → |D5/2, m , with ﬁnal Zeeman sub-level |m , and are given by Gm = ( 10/15, − 4/15, 1/15), with m = (−5/2, −3/2, −1/2) (see Fig. 3.2b), respectively.

28 implementation of an ion-photon interface with 40 Ca+

Fig. 3.2: 40Ca+ level scheme with transition wavelengths, branching ra-
tios and transition amplitudes relevant for this thesis. (a) Total
decay of P3/2 [60]: γ/2π = 11.49(3) MHz. Branching ratios [62]: rD1/2 = 0.9347(3), rD3/2 = 0.00661(4), rD5/2 = 0.0587(2). (b) Zeeman sublevels and corresponding Clebsch-Gordan coefﬁcients G of the states |42S1/2 , |42P3/2 and |32D5/2 . The Clebsch-Gordan coefﬁcient of a particular transition is obtained by multiplying the
modulus of the respective number with the factor on the right, tak-
ing the square root and applying the sign indicated with the number.
This ﬁgure was inspired by Fig. 1 from Ref. [63].

A circularly polarised drive laser, propagating along the magnetic ﬁeld axis, addresses the |u ↔ |e dipole transition at 393 nm with a detuning ∆/2π = −403(5) MHz and a Rabi frequency Ω set by (our choice of) the drive-laser intensity. The cavity is detuned by the same amount from the 854-nm |g ↔ |e dipole transition. In terms of the decay rates introduced above, the ion-cavity coupling strength of Eq. (2.12) can be written on the D5/2 ↔ P3/2 transition as

g = cγrD5/2 Gmζ = g0Gmζ. 2lAeff

(3.1)

As a reminder, ζ [see Eq. (2.11)] accounts for the projection of th cavity polarisation onto the atomic dipole moment. For all the experiments in this thesis, the magnetic ﬁeld axis is aligned perpendicular to the cavity axis and parallel to the propagation direction of the drive ﬁeld. The atomic quantisation axis is chosen to be parallel to the magnetic ﬁeld axis, and photon polarisation along this axis is denoted horizontal (H). The polarisation of a photon generated in the cavity on the |g ↔ |e-
 transition is vertical (V), as determined by the projection of the |g ↔ |e dipole moment onto the √plane perpendicular to the cavity axis. This projection leads to ζ = 0.5 in Eq. (3.1), such that g = g0 5/15.

3.3 bichromatic raman transition for ion-photon entanglement 29

3.3 bichromatic raman transition for ion-photon entanglement

Entanglement between ion and photon is generated via a bichromatic CMRT that was developed and ﬁrst demonstrated in Refs. [34, 36]. Here, a second, co-propagating, drive-laser ﬁeld is added, detuned from the frequency of the original drive-laser ﬁeld by the Zeeman splitting δZ between |g1 = |g = |D5/2, mj = −5/2 and neighbouring state |g2 = |D5/2, mj = −3/2 . Consequently, a second Raman process is simultaneously driven. In free space, this second Raman transition generates a π-polarised photon wh-
ich is projected to horizontal (H) polarisation within the cavity. Here, the resulting polarisation projection is ζ = 1. See Fig. 6.4a in Ch. 6 for a simplistic graphical representation of the bichromatic CMRT in 40Ca+.
Following Eq. (2.35), the effective coherent coupling strength of each Raman process with ﬁnal state |gi (i ∈ {1, 2}) is given by

Ωeiff

≈

Ωigi |2∆i|

,

(3.2)

with Ωi the Rabi frequency of each drive component, ∆i the corresponding detuning from the excited state |e and gi the ion-cavity coupling strength on the transition |e ↔ |gi . We assume that the Raman resonance condition is fulﬁlled for each drive ﬁeld. The two Raman transitions were chosen to yield both high and similar coupling strengths [61]: with a polarisation projection ζ = 1 and ClebschGordan coefﬁcient G−3/2 = 4/15, the ion-cavity coupling strength on the |e ↔ |g2 transition, g2 = g0 4/15-
, is similar compared to the |e ↔ |g1 transition, for which g1 = g0 5/15. For further details on the choice of the two transitions for the generation of ion-photon entanglement, see Ref. [61].
In the case where the two Raman processes occur with equal probability, the initial state |u |0 is ideally transferred to the ﬁnal, maximally entangled state of ion and cavity photon

|Ψ(θ)

1 =√
2

|g1

|V

+ eiθ |g2

|H

,

(3.3)

where the phase θ is set by the relative phase of the two laser ﬁelds and can be tuned [34]. A qubit encoded in the photon’s polarisation is therefore entangled with a qubit encoded in the ion’s electronic states |g1 and |g2 . As shown in Ref. [34], by setting the frequency difference between the bichromatic components to the Zeeman splitting δZ of the D5/2 manifold, the phase of the atomic state after photon detection, and therefore the experimental reconstruction of the entangled state |Ψ(θ) , i-
s independent of the photon detection time.
It should be noted that frequency-degenerate polarisation eigenmodes of the cavity are assumed in the model presented above, i.e.,

30 implementation of an ion-photon interface with 40 Ca+
a non-birefringent cavity. Sec. 4.1.1 contains a brief discussion of the complications that cavity birefringence introduces in the generation of the ion-photon entangled state of Eq. (3.3), as well as a description of our methods for avoiding and characterising birefringence in our system.
3.4 trapped 40 Ca+ as a quantum bit
The ion-photon interface implemented in this thesis requires a high degree of control over both the external and internal degrees of freedom of the 40Ca+ ion. This section gives a brief overview of how cooling of the ion, as well as state initialisation, state detection and coherent manipulation of the ion qubit are implemented within the level structure of 40Ca+. More detailed information on the transitions of 40Ca+ as well as treatments of laser cooling, state initialisation and state readout ar-
e readily available in the literature (e.g., Refs. [64, 65]) and other theses published in the ﬁeld (e.g., Ch. 3 of Ref. [66]).
3.4.1 Cooling, state preparation and state detection
The electric dipole transitions S1/2 ↔ P1/2 and P1/2 ↔ D3/2, displayed in Fig. 3.2a, are used for both Doppler cooling the ion and readout of the ion-qubit state. The P1/2 state has a decay rate γP1/2/2π = 11.2 MHz and preferentially decays back to the S1/2 manifold, while decay to the (metastable) D3/2 manifold only happens with a branching fraction of 0.064 [67]. The transition S1/2 ↔ P1/2 is driven using a laser at 397 nm (Sec. 4.4.1), while a repumping laser at 866 nm (Sec. 4.4.1) drives any p-
opulation in the D3/2 state back to the excited P1/2 state.
Photons at 397 nm, scattered from the ion during interaction with those lasers, provide the momentum transfer for Doppler cooling [68]. The laser parameters (powers and detunings) for Doppler cooling (and state detection, see below) are set up according to the procedure described in numerous theses in the ﬁeld, e.g., Ref. [69] (Sec. 4.2). After Doppler cooling in our system, mean phonon numbers of 11(2) and 8(2) are found in the axial and radial modes with mode frequencies1 of 2π × 0.9 MHz and 2π -
× 2.4 MHz, respectively.
Cooling the ion via Doppler cooling localises the ion to within a fraction of a half-wavelength of the cavity’s optical standing wave, as discussed in Ref. [36] (Sec. 6.1). Following Ref. [36], we estimate the ion’s spatial extent along the cavity axis after Doppler cooling in our setup to be around 20 nm, using the above values for the mean phonon number and the trap frequency in the radial direction.2 For
1 The motional modes of the ion in our trap are introduced in Sec. 4.2. 2 By comparison, the intra-cavity ﬁeld, and thereby the ion-cavity coupling strength, is
reduced by merely 1% at a distance of 20 nm from an anti-node.

3.4 trapped 40Ca+ as a quantum bit 31
the maximum photon-generation efﬁciency, the ion even needs to be cooled close to its ground state of motion, in order to maximise the coupling strength of the CMRT, as discussed in Sec. 3.4.2.
When detected with a photomultiplier tube (PMT) or electron multiplying charge-coupled device (EM CCD) camera (Sec. 4.6), photons scattered on the S1/2 ↔ P1/2 transition shed light on the atomic state3: if the ion is in the D5/2 manifold, which remains uncoupled from interaction with the lasers at 397 nm and 866 nm, no photons are scattered, and the ion is said to be "dark". Otherwise, if the ion is in the S1/2 state, it is "bright", and ﬂuorescence is detected at 397 nm. This technique is known a-
s electron shelving [64] and is used to analyse the ion-qubit state for the ion-photon entanglement protocol. See Ref. [69] (Sec. 4.2) for a description of the procedure we follow in order to set up state detection. For details on the experimental parameters (detection time, scattering rate, signal-to-noise ratio), see Sec. 5.3.
Initialising the ion in state |u is accomplished via optical pumping. Here, the S1/2 ↔ P1/2 transition is driven with a 397-nm σ−-polarised laser ﬁeld (Sec. 4.4.1), propagating along the magnetic ﬁeld axis, in combination with repumping at 866 nm. Additional repumping at the 854-nm wavelength is performed in case there is a possibility for the ion to be in the D5/2 manifold, i.e., after interaction with the photon-generation drive laser at 393 nm or the laser at 729 nm.
3.4.2 Operations on the optical quadrupole transition
The transition S1/2 ↔ D5/2 is an optical quadrupole transition, such that the D5/2 manifold is metastable with a lifetime of 1.17 s [59]. The transition is driven with a laser at 729 nm (Sec. 4.4.4) for coherent manipulation of the ion qubit and for resolved sideband cooling.
Two Zeeman states, one in each of the S1/2 and D5/2 manifolds, can be used to encode a qubit over which full quantum control is well established [24, 70]. Qubit operations, in this thesis, are limited to resonant laser pulses for analysing the ion-photon entangled state. For this purpose, the D-manifold qubit of the ion-photon entanglement protocol (encoded in the states |g1 and |g2 ) is converted to the (optical) S-D qubit with logical states |u and |g2 , as in Ref. [34]. This is done by mapping -
the |g1 population to the |u state, corresponding to a π-pulse on the |g1 ↔ |u transition. The complete pulse sequence for the ion-qubit measurement is outlined in Sec. 5.3.
A second use of the 729-nm transition in this thesis is for resolved sideband cooling of the ion [71, 72]. The technique is implemented according to the procedure outlined in Ref. [69] (Sec. 4.6). Using a 729-nm laser beam that has an overlap with all three motional modes of the ion ("729-ax", see Sec. 4.4), mean phonon numbers of
3 In the context of this thesis, only the PMT signal is used for detecting the state of the ion.

32 implementation of an ion-photon interface with 40 Ca+
n¯ < 0.5(2) are achieved in each motional mode. The mean phonon number n¯ is determined by measuring Rabi oscillations on the 729-nm qubit transition and ﬁtting the observed dependence of the excitation probability on the 729-nm pulse length with a model that takes into account the ion temperature (see Ref. [66] Sec. A1). Rabi oscillations are performed with two different 729-nm laser-beam directions ("729ax" and "729-rad", see Sec. 4.4), allowing the temperature in different motional modes to be -
distinguished.
In the context of cavity-photon generation, the dominant effect of being outside the motional ground state in our system is due to changes in the coupling of the drive laser to the ion. Speciﬁcally, for a motional mode with phonon number n, the drive-laser Rabi frequency in the CMRT can be approximated by Ωn ≈ Ω(1 − η2n) [64]. Here, η = kez h/(2mωz) is the Lamb-Dicke parameter, quantifying the coupling strength between internal states of an ion of mass m and its (harmonic) motional mode along ez w-
ith frequency ωz. The approximation holds for η2(2n + 1) 1, the Lamb-Dicke regime [64]. For the full expression without approximation, see, e.g., Ref. [73] or Eq. (3.11) of Ref. [66]. Outside of the ground state, the coupling of the drive-laser to the motional modes of the ion causes a reduction of the Rabi frequency Ωn and therefore a reduction in the rate of the CMRT [Eq. (2.35)] used to generate cavity photons. At the same time, the effective spontaneous decay rate [Eq. (2.36)] remains constant-
 at Doppler-cooled temperatures and below, leading to a reduced maximum efﬁciency for cavity photon production. Experimental data highlighting this effect is shown in Sec. 7.5.

EXPERIMENTAL SETUP

4

The experiments presented in this thesis were carried out on a newly built setup located in Lab 1 at the Institute of Quantum Optics and Quantum Information (IQOQI) in Innsbruck. The design of the ioncavity system is based on the setup built during the PhD of Carlos Russo [42] at the University of Innsbruck (UIBK), in the following simply called UIBK setup. While important parameters of the two setups are the same, in particular the cavity and trap geometries and relative orientation, the setup de-
scribed in this thesis was designed from scratch and incorporates many changes. A key improvement in the new setup are the cavity parameters: the lower value for the unwanted cavity loss αloss and a tailored value of the output mirror transmission T2 in our setup allowed for an increase in the photoncollection probability PS from 0.19(3) in [34] to 0.72(3) in this work. Other notable differences will be pointed out in the corresponding sections of this chapter.
Throughout this chapter, the experimental layout will be described with respect to the cardinal directions indicated in Fig. 4.1 (we follow here the convention also described in [58]): when looking at the chamber through the single largest CF100 viewport, the left side is referred to as "west" (W), the right side as "east" (E), while the upper side of the setup is "top" or "north" (N) and the lower side of the setup is "bottom" or "south" (S). The side facing the spectator is denominated "front" (-
F), the far side, which is closest to the quantum simulation "Qusim" experiment, is called "back" (B).
The components shown in Fig. 4.1 are integrated with the vacuum chamber in the following way. The optical cavity is attached to the bottom ﬂange of the chamber via a system of translation stages used for 3D positioning of the cavity with respect to the trap. The ion trap is rigidly attached to the top ﬂange, with the trap axis vertical and perpendicular to the cavity axis. Atomic ﬂuorescence for detecting the internal state of the ion is collected with an objective that is mounted 6 cm from the tr-
ap centre in an inverted viewport coming in from the back side.
The whole setup takes up two optical tables (and overhead racks): the vacuum chamber containing ion trap and cavity is located at the "experiment table"1, most of the lasers are installed on the "laser table"2. Note that a third table, the "conversion table"3, accommodates the setup for the frequency conversion to telecom wavelength which is part
1 Newport M-ST-UT2-58-12 2 Melles Griot 3 Melles Griot

33

34 experimental setup
of the experiment presented in Ch. 7. An overview of the setup for frequency conversion will be given in Ch. 7, a detailed description can be found in Refs. [39, 40] and the upcoming thesis of M. Meraner [41].
In the following sections, the components of the setup (excluding the conversion setup) and their function in the experiment are presented in detail, with a focus on the cavity, its construction and characterisation (Sec. 4.1). After that, the ion trap is described (Sec. 4.2), followed by an overview of the vacuum chamber (Sec. 4.3) and the various laser systems (Sec. 4.4). The detection path for cavity photons is characterised (Sec. 4.5), followed by a description of the detection setup for ion ﬂ-
uorescence (Sec. 4.6). The chapter concludes with an overview of the experimental control system (Sec. 4.7).
Fig. 4.1: Schematic showing the relative geometry of the ion-cavity system. Left: view through the single large (CF100) viewport of the vacuum chamber hosting the cavity and trap, with an ion at the centre. The principle axis of the linear ion trap is vertical, deﬁned by the location of the endcap electrodes (gold tips). Right: view from the east of the vacuum chamber, where the objective for collecting the ion ﬂuorescence can be seen in an inverted viewport coming in from the back side. The vario-
us laser beams for illuminating the ion or stabilising the cavity length enter the chamber at normal angles through viewports.
4.1 optical cavity
As we have seen in Ch. 2, a small cavity waist and low internal cavity loss are essential for the realisation of a deterministic lightmatter quantum interface. For single neutral atoms, the conditions for the deterministic interaction between matter and single photons are usually achieved via high-ﬁnesse optical resonators of microscopic lengths [49, 74, 75]. Owing to their long-range Coulomb interaction, trapped ions are one of the leading platforms in the ﬁeld of quantum information processing (-
QIP) and make for promising candidates as nodes in a quantum network. Their long-range interaction, however, makes trapped ions particularly difﬁcult to efﬁciently interface with photons: anything without precisely controllable charge, like, e.g., the

4.1 optical cavity 35

dielectric surface of a cavity mirror, will disturb the trapping ﬁeld if brought too close [76, 77]. Despite this challenge, there has been recent progress on interfacing trapped ions with microscopic cavities [35, 78].
In this work, instead of taking the approach of a microscopic-length cavity, a near-concentric cavity was constructed, following the successful implementation during the PhD work of Carlos Russo [42]. A near concentric cavity is characterised by its length being close to twice the mirror ROC. With this, a microscopic waist [see Eq. (2.5)] at a macroscopic ion-mirror separation (10 mm) is achieved, rendering the effect of mirror surface charges on the trapping potential negligible.4 This approach c-
omes at the cost of having to build a cavity close to the edge of the stability region, where the slightest misalignment introduces signiﬁcant additional optical loss. Moreover, with a large surface area being sampled by the cavity mode [Eq. (2.6)], the nearconcentric conﬁguration is highly susceptible to loss caused by defects on the mirrors’ surfaces. In the following, an overview is ﬁrst given of the cavity characterisation methods and the results for the ﬁnal, in-vacuum cavity. After that, the-
 main aspects of the cavity design will be described as well as key points in the construction process. Finally, the scheme and performance of the cavity length control and stabilisation are presented.

4.1.1 Cavity characterisation
A precise knowledge of the cavity parameters is essential for a meaningful comparison between data and theory: both when modelling the system with numerical simulations and when comparing measured efﬁciencies with the upper bound given by Eq. (2.31). Important parameters of the ﬁnal in-vacuum and ion-trap-integrated cavity are summarised in Table 4.1. In the following, the employed methods for obtaining these values are explained.

w0 (µm) g0/2π (MHz)
12.31(8) 1.53(1)

κ/2π (kHz)
70(2)

F/103 54(1)

αloss (ppm)
26(4)

T2 (ppm) 90(4)

Table 4.1: Key cavity parameters at 854 nm. w0: waist. g0: ion-cavity cou-
pling strength on the D5/2 ↔ P3/2 transition. κ: decay rate. F: Finesse. αloss: unwanted round-trip loss (all cavity loss except T2). T2: output-mirror transmission.

measurement of the frequency spacings of the cavity modes: From a measurement of the cavity’s FSR ∆νFSR [Eq. (2.1)]
4 That is, we do not see the effects of charges on the mirror surfaces affecting the experiments presented in this thesis.

36 experimental setup

Measured mode spacings, cavity length and mirror
ROC

and higher-order mode spacing ∆νmn [Eq. (2.4)], the cavity length and mirror ROC RC can be determined. Important parameters can therefore be derived, such as the cavity waist w0 [Eq. (2.5)] and ioncavity coupling strength g0 [Eq. (2.12)].
Two methods to determine the frequency spacings ∆νFSR and ∆νmn were used at different stages. For both methods, laser light at 854 nm is coupled to the cavity and the cavity length is scanned across one FSR via a piezo under one of the mirrors. Like this, the cavity transmission signal, measured by a photodiode and displayed on an oscilloscope, contains the transmission peaks of two axial modes (TEMq00 and TEMq+1,00) with frequencies νq00 and νq+1,00 [Eq. (2.4)] spaced by ∆νFSR. The laser is align-
ed to the cavity in such a way that the peaks of higher-order TEMmn modes, spaced by ∆νnm, are also clearly visible. In addition to this main laser, an auxiliary light ﬁeld is simultaneously coupled to the cavity. The auxiliary ﬁeld has a precisely tunable and known frequency difference ∆ν with respect to the ﬁrst laser. The mode spacings ∆νFSR (∆νmn) can then be directly measured by tuning ∆ν until the TEMq00 transmission peak of the auxiliary ﬁeld overlaps with the TEMq+1,00 (TEMqmn; m, n = 0) t-
ransmission peak of the main laser on the oscilloscope.
Throughout the construction phase of the cavity, when determining how close to the concentric limit the cavity was aligned (Sec. 4.1.2), the auxiliary laser ﬁeld was given by a second, independent laser. Here, the frequencies of both lasers were measured with a wavelength meter (WLM)5 and the frequency spacings could be determined with a precision of 1 MHz, limited by the 1-MHz resolution of the WLM.
For the ﬁnal characterisation of the in-vacuum cavity (determining the values for w0 and g0 in Table 4.1), the auxiliary light ﬁeld was given by a ﬁrst-order sideband modulated onto the laser via a signal generator and ﬁbre electro-optic modulator (EOM)6. With this method, ∆νFSR = 7.5303(2) GHz could be determined, corresponding to a cavity length of l = 19.9057(5) mm. The distances of the TEM01 and TEM10 modes from the nearest TEM00 mode were measured to be ∆ν01 = 270.9(1) MHz and ∆ν10 = 265.3(1)-
 MHz, respectively. The error here is limited by the resolution of the transmission signal, i.e., by how accurately the transmission peaks of both ﬁelds could be overlapped by eye on the oscilloscope displaying the transmission signals. The non-degeneracy of the TEM01/10 modes (present in all transverse modes) is potentially caused by an astigmatism of the cavity, i.e., at least one of the cavity mirrors has two different radii of curvature. This non-degeneracy is not accounted for by Eq. (2.4), f-
or which cylindrical symmetry is assumed.
Fig. 4.2 shows a graphical representation of the modes and their relative frequencies in the transmission spectrum. The indicated transverse

5 High-Finesse WSU-10 6 Photline NIR-MPX800-LN-10, 10 GHz bandwidth

4.1 optical cavity 37
mode spacing corresponds to the average ∆νmn = (∆ν01 + ∆ν10)/2 = 268.1 MHz and the uncertainty was chosen to be half the frequency splitting ±(270.9 − 265.3)/2 MHz = ±2.8 MHz. Assuming the same ROC for both mirrors, a value of RC = 9.9841(7) mm is obtained from Eq. (2.4). Via Eq. (2.5), a cavity waist w0 = 12.31(8) µm can be inferred from the measured values of l and RC, corresponding to an ion-cavity coupling strength g0/2π = 1.53(1) MHz on the D5/2 ↔ P3/2 transition at 854 nm [Eq. (3.1)].
Fig. 4.2: Simpliﬁed representation of the cavity transmission spectrum. Vertical lines indicate the peaks of TEMqmn modes in the cavity transmission spectrum of a laser coupled to the cavity, when scanning the cavity length over one FSR. Heights are arbitrary and not to scale. Further peaks of higher-order transverse modes, as well as the non-degeneracy of the transverse modes, visible in a real spectrum, are not drawn. Note how the transverse modes are grouped to the lower-frequency side of the n-
ext axial mode, which is a property of the near-concentric conﬁguration.
measurement of the cavity decay rate and finesse: The cavity decay rate κ and ﬁnesse F were obtained from a measurement of the cavity decay time τ, via a so-called ringdown measurement. Here, the frequency of an incident laser is scanned until it becomes resonant with a TEM00 axial mode of the cavity. Triggered upon a preset threshold I0 of the transmitted light intensity, the incident laser is switched off7 on a time scale of a few nanoseconds, in order to allow for the measurement of the exponen-
tially decaying lightintensity leaking from the cavity. The decay time constant τ = 1/(2κ) = (F/π)(l/c), with c the speed of light, can then be retrieved from an exponential ﬁt to the data of the form I(t) = I0et/τ. With knowledge of the cavity length l, the Finesse can be determined and from it the total losses L = T2 + αloss of the resonator [Eq. (2.2)].
Using this method, the ﬁnal batch of mirrors received from the coating company was characterised during the early stages of the experiment (Appendix A.2). Furthermore, the suitability of individual mirror pairs for building near-concentric resonators was tested by measuring the ﬁnesse for different cavity lengths. The closer to the concentric limit the cavity is, the larger the cavity mode cross-section on the mirrors, rendering the near-concentric conﬁguration highly
7 using a Schmitt trigger and acousto-optic modulator (AOM)

38 experimental setup

Measured cavity ﬁnesse

susceptible to loss caused by potential defects on the mirrors’ surfaces. A mirror pair was selected with one of the highest ﬁnesse values of the batch (Appendix A.2) and where the ﬁnesse did not decrease signiﬁcantly when aligning the mirrors in the near-concentric regime.
The ﬁnesse of a cavity formed by the aforementioned mirror pair was measured at various points during the construction phase; a timeline is displayed in Fig. 4.3. At a wavelength of 854 nm, a ﬁnesse of F = 62(3) × 103 was measured out of vacuum in a test setup, with each mirror mounted on a multi-axes alignment stage. This ﬁnesse was obtained for a cavity length l = 18.5(5) mm, measured with a caliper for the sake of a quicker measurement. In a near-concentric conﬁguration, a ﬁnesse of 60(1)×103 w-
as measured in the test setup (for the same length as the the in-vacuum cavity discussed above). In this case and in the following, the uncertainty corresponds to ±1σ standard deviation, dominated by shot-to-shot ﬂuctuations in a succession of up to ten closely-spaced measurements (taken with a repetition rate on the order of 1 Hz). After fully assembling the cavity out of vacuum (gluing the mirrors in place on the piezos, as described later), a ﬁnesse of 59(1)×103 was measured (for the in-vacuum -
cavity length), which corresponds to an increase in L of 4(2) ppm. Integrating the cavity with the ion trap into the vacuum chamber (involving a two-week vacuum bake at 80 ◦C, see Sec. 4.1.2) was achieved without any discernable drop in ﬁnesse. After the cavity had been in vacuum for a few weeks, the ﬁnesse dropped to 54(1)×103, corresponding to a further increase in L of 9(2) ppm to a ﬁnal value of L = 116(2) ppm. The reason for this additional loss is likely some misalignment of the cavity, the -
cause of which is unclear. After that, no further change of the ﬁnesse was registered.

measurement of the mirror losses and transmission: The individual mirror transmission values T1,2 and the cavity internal loss L = L1 + L2, comprising the individual mirror losses L1,2 due to scattering and absorption, were quantiﬁed via two different methods. The ﬁrst method, employed during the cavity construction phase, consisted in measuring T1 and T2 directly by detecting the fraction of laser light transmitted through the bare mirrors. Using a diode laser8 and calibrated power meters9 the va-
lues obtained at 854 nm via this ﬁrst method are T1 = 2.0(1) ppm, T2 = 92(4) ppm. The value for L is then calculated to be L = L1 + L2 = L − T1 − T2 = 22(4) ppm, using the ﬁnal value for L of 116(2) ppm (see above). The standard deviations of the results were obtained from repeated measurements. Care was taken to rule out systematic error sources like scattered or stray light, nonlinearities in the power meters and an off-centred or tilted mirror surface with respect to the impinging beam. Nonethe-
less, due to the
8 Toptica DL Pro 9 Thorlabs S130C for low transmission (∼ 2 ppm) measurements, Thorlabs S132C for
the high transmission (∼ 100 ppm) measurements

Finesse csahviotryt aglliugended bavakceudum

6.5 #104 6
5.5 5

4.1 optical cavity 39

01-Oct-2017 2181--NDoecv--22001177 17-Jan-2018 13-Mar-2018 0183-AMuagr--22001188

Fig. 4.3: Cavity ﬁnesse timeline. The cavity ﬁnesse was measured via cavity ringdown. For the earliest two data points, the error bars are due to an uncertainty in the cavity length (measured with a caliper), for all the other data points the cavity length was determined more accurately via the method of measuring mode frequency spacings described earlier in this section and the uncertainty corresponds to ±1σ standard deviation of repeated measurements.

sensitivity of the technique to these systematic error sources, it is difﬁcult to assess the uncertainties and reliability of the measurement.
Once the cavity was fully assembled and in vacuum, a second method was used, following the protocol described in Ref. [79]. Here, a laser coupled to a speciﬁc mode of the cavity is considered. The reﬂected power pr and transmitted power pt are compared to the input power pin, in the realistic situation where only the fraction pin of the incoming light matches the cavity mode. The following equation is derived

pt pr − pin

=

(L

+

4T1T2

(

F 2π

)2

T1

−

T2)2(

F 2π

)2

−

1

,

(4.1)

which is independent of the mode-matching factor . By using each side of the cavity alternatively as input port, as reported also in Ref. [42], a system of equations is obtained from which, after simple algebraic manipulation, T1, T2 and L can be extracted.
For the characterisation of our cavity, a laser was scanned across the resonance of a TEM00 mode, recording the transmission and reﬂection curves as well as the input light levels with photodiodes. A series of ten closely spaced measurements to either side of the cavity, together with a measurement of the cavity ﬁnesse, yielded the following results at 854 nm: T1 = 2.9(4) ppm, T2 = 90(4) ppm and L = 23(4). With this, a value of αloss = T1 + L = 26(4) ppm is given as the ﬁnal value for the unwanted-
 loss of our system, as presented in Table 4.1. Uncertainties represent one standard deviation. Within error bars, these outcomes

Measured transmission and loss coefﬁcients of the cavity

40 experimental setup

match the ones of the ﬁrst method. The results of both methods, as well as values obtained at 806 nm (the wavelength of the laser to which the cavity length is stabilized) via the second method, are summarised in Table 4.2. The second method can be considered a more systematic approach than the ﬁrst method, depending less on the skill of the experimentalist and being less prone to systematic errors. Therefore, the values obtained via the second method are used for the calculation of probabilities -
in Ch. 6.

in ppm:

T1

method 1

2.0(1)

method 2 (854 nm) 2.9(4)

method 2 (806 nm) 380(13)

T2 92(4) 90(4) 112(11)

L 22(4) 23(3) 32(3)

Table 4.2: Transmission and loss of the cavity mirrors. Values of the cavity mirror transmission coefﬁcients T1,2 and cavity internal loss L = L1 + L2. As a reminder, αloss = L + T1. Method 1 corresponds to a direct measurement of laser power transmitted through the bare
mirrors; Method 2 follows the protocol described in Refs. [79] and
[42].

measurement of the cavity birefringence: Cavity birefringence is generally caused by a path-length difference between the polarisation eigenmodes of a cavity, lifting their frequency degeneracy. If the polarisation of a photon emitted into the cavity does not coincide with one of these eigenmodes, the photon polarisation is in a superposition of the cavity eigenmodes. These eigenmodes will acquire a phase difference at rate ωb, the energy difference between them. This phase difference accumulates -
during the round trips in the cavity and results in an effective rotation of the polarisation state. If the phase difference accumulates faster than the cavity decay rate, a time-dependent polarisation will be observed [80, 81]
As explained in Sec. 3.3, ion-photon entanglement is generated using the polarisation degree of freedom of single photons. Birefringence on the order of the cavity decay rate κ could therefore lead to a loss of coherence in the generated state when averaging the photonic state across the extent of its temporal wavepacket. By averaging the photonic polarisation state across its temporal wavepacket, the purity of the generated entangled state would reduce, since every detected photon has spent a dif-
ferent time in the cavity and so has experienced a different degree of polarisation rotation.
During the construction of the cavity, special care was taken to keep the birefringence as low as possible and well below the cavity decay rate. First, a rotational alignment of one cavity mirror with respect

4.1 optical cavity 41

to the other was found for which the lowest amount of birefringence was measured. The thus aligned mirrors were then glued into mirror holders, keeping the stress induced by the glue on the mirrors as low and evenly distributed as possible, as explained in Sec. 4.1.2.
For a birefringence smaller than the cavity linewidth 2κ, the frequency splitting ωb cannot be reliably resolved in a transmission spectrum of the cavity. A different method, described in Ref. [82], was therefore employed with which even low degrees of birefringence (ωb 2κ) can be determined. Here, cavity ringdown measurements are performed, as described previously, but for speciﬁc input polarisations and in the presence of polarisation analysis of the cavity output light. The frequency splitting -
of the polarisation eigenmodes can then be observed as a beating during the cavity decay, effectively modulating the cavity decay time τ.
The measurement was performed in the following way. The cavity decay signal is projected onto a linear polarisation analyser (PA), consisting of a polarising beam splitter (PBS) and half-wave plate (HWP), orientated at an angle γ relative to the slow axis of the birefringent cavity. In the presence of only small birefringence, the cavity ringdown signal still follows an exponential decay with effective decay time τeff, which is measured in the same way as described previously via the cavity ringdo-
wn method. When exciting the cavity with circularly polarised light, the following dependence can be observed:

τeff(θ) = τ(1 ∓ ωbτ sin[4(θ − α)])−1.

(4.2)

Here, θ = α + γ is the angle the PA makes with the x-axis in the laboratory frame (an axis perpendicular to the cavity axis) and α is the angle the slow cavity-axis makes with the x-axis.10 The minus sign is used for left-handed (LH), the plus sign for right-handed (RH) input polarisation.
Fig. 4.4a shows two cavity ringdown signals of the ﬁnal (in-vacuum) cavity, for PA angles θ that correspond to the largest modulation of the decay time τ. In Fig. 4.4b, an example curve of a cavity ringdown signal is displayed in the case of strong cavity birefringence, for the same pair of mirrors but with different gluing. Here, the modulation of the cavity decay is so strong that the decay does not follow a simple exponential dependence and the method explained above cannot be applied. The sign-
al in Fig. 4.4b, and others like them, were obtained regularly during the assembly phase of the cavity, where the birefringence resulted from stress induced by glue that was used to ﬁx the mirrors to holders (Sec. 4.1.2). Fig. 4.4c shows a measurement of τeff(θ) for our in-vacuum cavity, for LH and RH input light polarisation, together

10 A coordinate system can be found in Ref. [82], though the absolute orientation is not important for us. Note that a factor of 4 instead of 2 in the argument of the sine in Eq. 4.2 is used compared to [82] since the PA consists of a HWP and PBS instead of a polariser (a HWP rotates the polarisation vector through an angle 2θ).

42 experimental setup

Measured cavity birefringence

with a ﬁt to the model of Eq. 4.2. A birefringence ωb/2π = 13.8(5) kHz was determined from the average of the model parameters of each dataset. This compares to the cavity decay rate κ = 70(2) kHz.
The method described above was further used when selecting a cavity mirror pair (Appendix A.2) and during the assembly phase of the cavity (Sec. 4.1.2) for determining the amount of stress-induced birefringence due to the gluing.

(a) 1

3 = -0.2 3 = 0.5

(b) 1

0.5

0.5

Photodiode voltage (arb.u.)

0

0

2

4

Time (7s)

0

0

2

4

Time (7s)

(c )
1 .2 5

L H d a ta

L H fit

R H d a ta

R H fit

D e c a y c o n s t a n t τe f f ( sµ )

1 .2 0

1 .1 5

1 .1 0

1 .0 5

1 .0 0

-0 .5

0 .0

0 .5

1 .0

1 .5

2 .0

R e la tiv e p o la ris e r a n g le θ (ra d )

Fig. 4.4: Cavity birefringence measurement. (a) Cavity ringdown signals of the ﬁnal, in-vacuum cavity, in the presence of polarisation analysis of the cavity output light. The indicated polariser angles θ correspond to the angles in subpanel (c) for LH input light polarisation. (b) Cavity ringdown signal in the presence of polarisation analysis of the cavity output light and in the case of strong cavity birefringence. (c) The effective cavity decay time constant τeff is plotted as a function of θ,-
 the angle deﬁned by the PA relative to the laboratory x-axis. Each data point corresponds to the average of ﬁve closely spaced, consecutive measurements taken with a repetition rate on the order of 1 Hz. Subpanel (a) displays two example curves of ringdown signals from which τeff is determined via a ﬁt to the decaying slope. Error bars correspond to ±1σ standard deviation, dominated by shot-to-shot ﬂuctuations.

4.1 optical cavity 43
4.1.2 Cavity assembly
cavity mirrors: The mirror substrates have a diameter of 7.75 mm and a thickness of 3 mm (a drawing is shown in Appendix A.1). The super-polishing of the surfaces of the mirror substrates11 was performed by Perkins Precision, Boulder, achieving a root mean square (RMS) roughness of 1.0(2) Å and 1.5 ppm (parts per million) scattering losses per substrate, as measured by them on a test piece from the batch.
Mirror coating via ion beam sputtering was performed by Advanced Thin Films (ATF). The coatings are composed of SiO2 − Ta2O5 dielectric stacks with the topmost layer SiO2. The mirror with transmission coefﬁcient T1 was designed with a target value of 2 ppm at 854 nm, the other mirror with transmission coefﬁcient T2 had a target value of 100 ppm. Coating proﬁles are provided in Appendix A.2. The target value for T2 was chosen to lie between the values of T2opt and T2opt.pure (see Sec. 2.2.2), given-
 the value of αloss < 12 ppm at 854 nm that was expected from the manufacturer’s speciﬁcations (T1 = 2 ppm and L1,2 < 5 ppm) and given the value of w0 = 13.2(8) µm achieved in the UIBK setup [36, 42]. In order to be able to lock the cavity to a laser at 785 nm, the mirror coatings were ordered with an additional target transmission of T1,2 ≈ 100 ppm at that wavelength. The backsides of the mirrors are anti-reﬂection (AR) coated (speciﬁed reﬂection <0.1% for 760-890 nm).
Obtaining the cavity mirrors required a long process of ordering and communication with the manufacturers, involving multiple coating runs that failed to produce the desired targets (Appendix A.1). Within the ﬁnal batches of mirrors we received, we found signiﬁcant variations between different mirrors concerning their losses and birefringence. Details on the characterisation of these batches are provided in Appendix A.2. For the ﬁnal cavity, a mirror pair was selected that was among the ones with -
the lowest losses and where the losses did not increase when aligning the cavity in the near-concentric regime (Appendix A.2). Here, we aimed for a cavity length that would result in the same cavity waist as the UIBK cavity, given our mirror ROC [see Eq. (2.5)]. Moreover, a mirror pair was chosen for which the residual birefringence of the bare (i.e., unglued) mirror pair could be minimised to well below the cavity linewidth by rotating one mirror with respect to the other.
gluing the cavity: An explosion view of the cavity components is shown in Fig. 4.5. Assembling the cavity involved multiple steps to glue the mirrors into position, such that the only tunable degree of freedom once glued is the cavity length. The used adhesives were selected under three essential aspects: one, ultrahigh vacuum (UHV)
11 Fused silica 7980 1D material

44 experimental setup
Fig. 4.5: Components of the cavity assembly. The mirrors are glued into mirror holders, in turn glued to piezos, in turn glued to piezo holders, in turn glued to a solid titanium base. Collimation lenses are attached to each side of the cavity. The elongated holes in the bulk of the base are for attaching the assembly to the translation stages. All shown metal is titanium.
compatibility, i.e., low outgassing, to avoid contamination of the vacuum and correspondingly shortened ion lifetimes in the trap; two, low shrinkage upon curing to avoid stress-induced birefringence in the mirrors and misalignment of the cavity during the ﬁnal gluing step; three, a high glass transition temperature Tg to allow for a high temperature of the ﬁnal vacuum bake of the whole apparatus without destroying the cavity due to softening of the glue and subsequent misalignment.
In a ﬁrst step, the mirrors were glued into mirror holders (see Fig. 4.5). The adhesive used here was the EpoTek353ND-HYB-HV which is dual curable via ultraviolet (UV) light and temperature. The stress induced by the glue on the mirrors lead to a dramatic increase of birefringence in some cases, characterised by a strong modulation of the cavity ringdown signal, as described in Sec. 4.1.1 and Fig. 4.4b. Several attempts were necessary before the mirrors could be glued without signiﬁcantly raising -
the birefringence, as outlined in the following.

4.1 optical cavity 45
After each unsuccessful attempt, the mirrors were baked at 450 ◦C for several hours to remove the glue12. This could be done without contaminating the mirrors, i.e., the combined loss of the mirrors L = L1 + L2 did not increase by the glue removal, where L was extracted from combined measurements of the mirror transmission coefﬁcients and cavity ﬁnesse (see Sec. 4.1.1). However, the high-temperature bake lead to changes in the transmission proﬁles of the mirrors13. At 854 nm, the value of T2 chang-
ed from 127(4) ppm to 92(4) ppm (the value shown in Table 4.1), whereas the value of T1 did not change measurably. At 785 nm, the value of T2 changed from 85(4) ppm to 145(4) ppm and the value of T1 changed from 143(4) ppm to > 2 × 103 ppm. This signiﬁcant change in the value of T1 is likely due to the fact that the wavelength of 785 nm lies at the edge of the high-reﬂective region of the coating, where the dependence of the transmission on the coating-layer thickness is steepest. A summary of the-
se transmission measurements and the coating proﬁle of the mirrors can be found in Appendix A.2. The transmission values were obtained via the method using a laser and a power meter presented in Sec. 4.1.1 (Method 1). As a consequence of this transmission change, a different wavelength of 806 nm had to be selected for locking the cavity (see Sec. 4.1.3).
The ﬁnal gluing of the mirrors into the mirror holders consisted in applying glue between mirror holder and mirror substrate in three equidistant spots around the back of the substrate. Care was taken to keep the substrates centred in the holders to keep the amount of required glue consistent in each spot. A gap of 30-40 µm was adjusted between the two components with the help of distance plates. Following an initial UV cure to ﬁx the mirrors in place, the glued parts were air-baked at 150 ◦C for -
several hours, after which a birefringence of 6.4(6) kHz was recorded. This value compares to a birefringence of 6(1) kHz, measured for the unglued mirrors. The birefringence was measured with the method described in Sec. 4.1.1 As speciﬁed in Sec. 4.1.1, a birefringence of 13.8(5) kHz was measured for the ﬁnal, in vacuum cavity. A possible explanation for this additional birefringence is stress accumulated during the several temperature cycles involved in assembling the cavity (see below).
For gluing all the other components together (see Fig. 4.5), the epoxy Masterbond EP21TCHT-1 was used, which was cured at room temperature followed by a high-temperature air-bake to raise Tg. First, the mirror holders were glued to piezos for cavity-length stabilisation,
12 The temperature was ramped to 450 ◦C at a speed of 5 ◦C/min, held constant for 2 h, and then ramped down again over night. At this temperature, which is well above the glue’s degradation temperature of 388 ◦C, the glue evaporated.
13 The mirrors had been annealed by the manufacturer ATF, albeit at a lower temperature than our bake. ATF annealing cycle: ramp up to 300 ◦C in 1 h; dwell at 300 ◦C for 1 h; cool down to room temperature (no forced cooling).

46 experimental setup
which were in turn glued to titanium piezo-holders.14 In a second step, one of the piezo holders was glued to one side of the titanium base (with a glue-layer thickness of about 40 µm).15 In a third step, the free piezo holder (not attached to the base), carrying one of the mirrors, was mounted on translation stages with micrometer screw gauges and the cavity was aligned in the ﬁnal, near-concentric cavity conﬁguration (the rest of the assembly was mounted on a solid steel pillar via the cavity ba-
se). In this conﬁguration, the free piezo holder ended up with a gap of hundreds of microns between piezo holder and base. A metal spacer was therefore inserted into that gap in order to reduce the required amount of glue and thus avoid a misalignment of the cavity during curing: if the glue shrinks in each dimension by some percentage of its length during curing, then the absolute length change is smaller for smaller layers.16 In a ﬁnal step, the free piezo holder was glued to the titanium base s-
panning the cavity length: the piezo holder was translated up, the spacer with glue on both sides inserted into the gap, and the piezo holder was lowered back onto the base until the cavity was realigned. The assembly was then left to cure at room temperature for two days, all the while monitoring the cavity ﬁnesse. At the start of the two days, the measured ﬁnesse was 60(1)×103 and no measurable drop was observed. Finally, the assembly was air-baked at 110 ◦C for another 1-2 days.17 A ﬁnesse of 5-
9(1)×103 was measured after the curing and bake was complete (see the ﬁnesse timeline in Fig. 4.3).
To complete the cavity structure assembly, lenses18 were then attached to either side of the cavity to allow for mode matching of laser light sent into the cavity and collimation of the cavity output mode (Sec. 4.5). The lenses were glued to their holders using the glue EpoTek353ND-HYB-HV19 and bolted to the cavity base (see Fig. 4.5).
14 Curing cycle (as recommended by the company): room temperature for approximately 5 h; ramp to 80 ◦C, stay for 7 h; ramp to 125 ◦C, stay for 18 h; cool down to room temperature (no forced cooling). The temperature was ramped at 1 ◦C/min.
15 Curing cycle: room temperature for approximately 1 day; ramp to 80 ◦C, stay for 7 h; ramp to 125 ◦C, stay for 18 h; cool down to room temperature (no forced cooling). The temperature was ramped at 0.5 ◦C/min.
16 Indeed, in a ﬁrst gluing attempt, without metal spacer, the cavity misaligned due to the glue shrinkage during curing.
17 Curing cycle: ramp to 110 ◦C at 0.2 ◦C/min, stay for 17h, ramp down to room temperature at 0.1 ◦C/min. The peak temperature of 110 ◦C was chosen to lie below the previous curing temperature in order to reduce the risk of misalignment due to softening of the glue (the exact value of Tg is not known).
18 Lattice Optics B-PX-8-20-780-866 (BK7 material, 8 mm diameter, f = 20.34 mm at 800 nm, AR coating at 780-866nm); surface ﬁgure: λ/10 at 632.8 nm; surface quality: 10-5 scratch-dig
19 Curing cycle: UV cure to ﬁx lenses in place; then: ramp to 260 ◦C at 1 ◦C/min, stay for 15 h, cool down to room temperature (no forced cooling).

4.1 optical cavity 47
translation stages: The cavity is mounted on a system of piezo-based translation stages20 for 3D positioning of the cavity with respect to the trap. The stacking of the stages is visible in Fig. 4.6. A translation stage for vertical positioning was chosen over the tripod of screw gauges in the UIBK setup [42] to allow for a better repeatability and a decreased complexity of the positioning process. All stages have integrated resistive position encoders with a speciﬁed repeatability of 1-2 µm (this-
 is in contrast to the stages in the UIBK setup, used for horizontal alignment, which do not have encoders; cf. Ref. [36] Sec. 4.12). Each of our stages can be operated in two positioning modes. For coarse positioning, there is the stick-slip mode. Here, a saw-tooth signal with an amplitude of tens of Volts, applied to a piezo stage from a separately purchased controller21, effectuates a stick-slip motion with few-micron step size. The stick-slip mode, with a range of a few millimetres, was used t-
o align the cavity waist with the ion (see Sec. 5.1). In the ﬁne-positioning mode, a DC voltage is applied to a piezo stage, allowing for sub-nm displacements. The ﬁne-positioning mode is used for positioning the ion in an antinode of the cavity standing wave. Here, a voltage of up to ±9 V from a battery—manually adjustable via a homebuilt potentiometer-based voltage divider, the so-called "twiddle stick"—is applied to the stage for translation along the cavity axis, allowing for a range of up to -
1 µm, approximately. Regular adjustment of the cavity position via the twiddle stick is required in order to compensate for drifts caused by temperature changes. Especially after operating the atomic oven (Sec. 4.2), adjustments are needed until the relative position between cavity and ion has settled: assuming a usual ion-loading time of about 5-10 min, about 1 hour after the oven was turned off adjustments in intervals of 10-30 min are necessary. After about four hours, the position has settled.
trap-cavity angle: For the ﬁnal integration with the ion trap, a 4-5◦ deviation from 90◦ was intended for the angle between cavity axis and trap axis (south↔north). Following Ref. [83], such an angle, and the resulting projection of the trap axis onto the cavity axis, allows in principle for a selective coupling of two ions to the cavity ﬁeld. By adjusting the ion-ion distance via the axial trap conﬁnement (Sec. 4.2), either both ions can be coupled to cavity antinodes or one of the ions can be pl-
aced in a cavity antinode and the other one in a cavity node, thereby hiding it from the interaction with the cavity ﬁeld. During
20 Attocube, ANPx311/RES/UHV for translation in the vertical (south↔north) dimension and along the cavity axis (east↔west), ANPx321/RES/UHV for horizontal translation perpendicular to cavity axis (front↔back). This latter translation stage has a larger travel range (15 mm) than the others (6 mm) and was chosen for the possibility of moving the cavity out of the way of optical access to the trap centre in the direction along the east↔west axis.
21 Attocube ANC350

48 experimental setup
the process of mounting the cavity on the translation stages, the angle was set in the following way. First, the angle between cavity axis and cavity base (see Fig. 4.5) was roughly estimated to be 4◦ by measuring the difference in heights of an input laser beam coupled to the cavity and the cavity output mode.22 Using the scale imprinted on the cavity base (see Fig. 4.5), a value of 0◦ was set for the angle between the symmetry axis of the cavity base and vertical (south↔north) axis. A 4.1(1)◦ de-
viation from the 90◦ angle between cavity and trap axis was extracted in later measurements, as detailed in Sec. 5.1.
vacuum integration: The system of cavity and translation stages is mounted on the bottom CF100 ﬂange of the vacuum chamber, together with various feedthroughs needed for the electrical connections (Sec. 4.3) and an atomic oven. Mounting of the translation stages and the atomic oven was performed by V. Krcmarsky. A photograph, taken before insertion into the vacuum chamber, is shown in Fig. 4.6. After integrating the cavity into the vacuum chamber, the combined setup was submitted to a ﬁnal vacuum -
bake at 80◦C for one week (see Sec. 4.3 and the upcoming thesis of V. Krcmarsky [84]). This relatively low temperature (vacuum-baking temperatures in ion-trapping experiments in Innsbruck are usually above 180◦C) was chosen so as not to exceed the speciﬁed glass transition temperature Tg ≈ 95 ◦C of the glue used in the piezo stacks23 and reduce the risk of cavity misalignment during the bake.
4.1.3 Cavity length control and lock
cavity length control: Precise control over the cavity length is necessary in order to set and maintain the cavity-ion detuning. For this purpose, each mirror sits on a stack of shear piezos. There is a fast24 and a slow25 piezo stack, composed of one and four piezoelectric shear plates, respectively, which can be driven by a maximum of ±320 V. The fast stack supports the mirror with transmission coefﬁcient T1, the slow stack supports the mirror with transmission coefﬁcient T2. By measuring the vo-
ltage required to change the cavity length by one FSR, the range of the fast stack was estimated to be 2.1(3) nm/V and the range of the slow stack to be 5.8(4) nm/V. The uncertainty (mean deviation) is derived from multiple measurements and is dominated by piezo hysteresis. The piezos are each connected to two SHV feedthroughs via Kapton-insulated, wire-mesh-shielded cables. Both
22 It is not known what causes this angle, but the angle is the reason for the gap between piezo holder and base on one side of the cavity, observed during the gluing process.
23 Unfortunately, no information about the type of glue used in the piezo stacks was disclosed by the manufacturer. From the speciﬁed Tg, I suspect that the glue Epotek353-ND was used.
24 Noliac NAC2402-H1.7-A01 UHV Version 25 Noliac NAC2402-H3.4-A01 UHV Version

4.1 optical cavity 49
B A2 A1 B

C

F D

G

F

E

H
G G
Fig. 4.6: Photograph of the cavity assembly. A1: cavity mirror with transmission coefﬁcient T1 glued to a mirror holder, glued in turn to the fast piezo stack; A2: cavity mirror with transmission coefﬁcient T2 glued to a mirror holder, glued in turn to the slow piezo stack; B: collimation lenses; C: south↔north translation stage; D: east↔west translation stage; E: front↔back translation stage; F: oven electrodes (oven not mounted); G: connectors to the secure high voltage (SHV) feedthroughs for th-
e cavity piezos; H: connector to the D-sub 15 feedthrough for the translation stages. The wires for voltage control of the piezo stacks can be seen coming through slits in the titanium holders for the collimation lenses (B).

piezos are used for stabilising the cavity length, as explained in the next paragraph ("Cavity Lock"). Additionally, an offset voltage applied to the slow piezo is used for bringing the CMRT on resonance. This offset voltage can be manually adjusted via a potentiometer and is derived from a (homebuilt) high-voltage ampliﬁer, capable of supplying ±350 V, which corresponds to a cavity length change of several FSRs. The output of the ampliﬁer is ﬁltered by a second-order low-pass ﬁlter with a cut-off-
 frequency of around 5 Hz (homebuilt).
cavity lock: The cavity length is stabilised via the Pound-DreverHall (PDH) method [85] to a laser at 806 nm, the transfer-lock laser, which is in turn stabilised to an external reference cavity. The stabilisa-

50 experimental setup
tion of the 806-nm laser, as well as the reference cavity, are described in Sec. 4.4.5. The laser enters the cavity through the mirror with transmission T1. The 806-nm wavelength lies far from any transition in 40Ca+ to reduce AC Stark shifts on the atomic transitions.26 Moreover, the cavity is locked to a TEM01 mode and the ion is placed in the central intensity minimum to further reduce AC Stark shifts. A schematic of the cavity lock setup is shown in Fig. 4.7. A 7.2-MHz "local oscillator" signa-
l from a function generator is sent to both an EOM27 in the beam path before the cavity and to a mixer. The phase-modulated light from the EOM that is reﬂected from the cavity is detected with a photodiode, whose signal is mixed down with the local oscillator signal to generate the error signal. The error signal is ﬁltered by a 50-kHz low-pass ﬁlter before being fed to a proportional-integral-derivative (PID) controller28 with two outputs. The slow output is sent to the high-voltage ampliﬁer that -
drives the slow piezo as described above, which ampliﬁes the signal by a factor of 25. The fast output is applied to the fast piezo after passing a 2-kHz second-order low-pass ﬁlter (homebuilt). This ﬁlter was found to be necessary for suppression of acoustic resonances of the cavity and its mount.
Fig. 4.7: Setup for stabilising the ion-cavity length. The cavity is locked via the PDH method to a laser at 806 nm, which is in turn locked to an external reference cavity (Sec. 4.4.5). Feedback from the fast output of a Toptica FALC110 PID module is applied to the fast piezo, the ampliﬁed slow output drives the slow piezo. PD: photo diode. LP: low-pass ﬁlter with cut-off frequency as indicated.
The performance of the lock was estimated in the following way. The cavity length was scanned across a TEM01 resonance of the 806nm locking laser via a triangular signal applied to one of the piezos and a time trace of the error signal was recorded (Fig. 4.8a). The sidebands at the known frequency of the local oscillator serve as a reference to convert the time trace to units of frequency. In a next step, the slope D = 1.0(3) V/MHz of the scanned error signal was extracted from a linear ﬁt to the -
central part of the error signal (Fig.
26 For a typical input power of the 806-nm laser of about 0.1 mW, the AC Stark shift induced by the resulting intracavity laser ﬁeld on the D5/2 manifold can be up to around 1 MHz (Sec. 5.1 includes a detailed description and a precise measurement).
27 QiOptiq PM-C-BB 28 Toptica FALC110; the derivative (D) part of the feedback is disabled

4.2 ion trap 51

4.8b). The uncertainty is due to shot-to-shot ﬂuctuations of repeated measurements. With the standard deviation of the locked (in-loop) error signal ∆Ulocked = 9 mV (Fig. 4.8c), the width of the frequency excursions of the lock was estimated as

δνlock

=

∆Ulocked D

=

9(2)

kHz.

This cavity-lock jitter, which is included in the numerical simulations presented in Ch. 6, introduces phase noise and effectively broadens the CMRT. Compared to the half width (κ) of about 0.33 MHz of the cavity at 806 nm, we ﬁnd that the cavity can be locked to about 3% of its linewidth at 806 nm.

Voltage (mV)

a)

100

Scanned error signal

0

-100

Voltage (mV)

-7.2 b) 100
0

0

7.2

Frequency (MHz)

Scanned error signal Linear fit

-100

Voltage (mV)

-1

-0.5

0

0.5

1

Frequency (MHz)

c)

20

Locked error signal

0

-20

-0.25 -0.2 -0.15 -0.1 -0.05 0 0.05 0.1 0.15 0.2 Time (s)

Measured cavity-lock jitter

Fig. 4.8: Estimating the in-lock frequency stability of the cavity. a) Measured error signal when scanning the cavity across a TEM01 resonance of the 806-nm locking laser. b) Linear ﬁt to the central region of the error signal in (a). c) Measured time trace of the locked-cavity error signal.

4.2 ion trap
A linear Paul trap [86] is used to conﬁne ions in three dimensions, combining long storage times with an excellent isolation of the ion from the environment. The axial direction of the trap, or trap axis, is the direction along which ion strings can form. Two tip electrodes, or "endcaps", at both ends of the trap axis generate a static electric ﬁeld in

52 experimental setup
order to conﬁne the particle in that dimension. The radial direction is perpendicular to the trap axis in cylindrical coordinates. Conﬁnement in that dimension is provided by an oscillating quadrupole ﬁeld generated by four radial electrodes symmetrically arranged around the trap axis. Here, a radiofrequency (RF) voltage at frequency ωRF, applied between two diagonally opposite electrodes, gives rise to (harmonic) ponderomotive potentials in the radial directions.
The ion trajectory in the dynamic trap can be described by a set of Mathieu differential equations and consists of harmonic oscillations at frequencies ωr (radial) and ωz (axial), the secular motion, superposed with driven excursions at the RF frequency ωRF, called micromotion [64, 87]. If micromotion is neglected, the secular motion can be approximated by that of independent harmonic oscillators with frequencies ωr,z. As detailed treatments of trapped-ion dynamics are readily available in many pl-
aces in the literature (e.g., Refs. [64, 73, 87]), the remainder of this section is dedicated to the speciﬁcs of the ion trap designed during this PhD work.
The geometry of our ion trap is based on a design used in several experimental setups in Innsbruck, including the UIBK setup [42]. A 3Drendered image of our trap is shown in Fig. 4.9. As shown in the ﬁgure, the four blade-shaped radial electrodes have a length of 6 mm and a diagonal spacing of 1.6 mm, resulting in 0.8 mm radial ion-electrode distance. The endcaps are separated by 5 mm. Our trap has three pairs of what we refer to as compensation electrodes. Two of these pairs are held at non-zero -
DC voltages which act to cancel stray electric ﬁelds that displace the ion from the RF-null position. The third pair, between cavity mirror and ion, is held at ground and provides shielding of the trap centre from possible stray electric ﬁelds originating from surface charges on the cavity mirror or the cavity piezo. Finite element method (FEM) simulations of our trap with the Comsol Multiphysics software suggest a reduction of stray ﬁelds by a factor of ten compared to the case without any compen-
sation electrodes in the direction of the mirrors. While no systematic measurements have been conducted to that end, no effects on the ion due to stray ﬁelds were registered at any point during the experiments presented in this thesis.
Top and bottom trap bases, which are electrically isolating, hold the trap electrodes in place. The material used here is sapphire as opposed to Macor in older trap designs, e.g., the UIBK setup [42]. Due to the higher heat-conductivity and lower RF-loss-tangent of sapphire, signiﬁcantly less heat is generated when operating the trap [88]. The electrodes are made of titanium and are coated with a gold layer of 2-3 µm thickness via electroplating, which was performed by Kirill Lakhmanskiy at the UI-
BK.
The trap is attached at the top sapphire base to the top ﬂange of the vacuum chamber via a rigid titanium structure (see Fig. 4.11). The top ﬂange also contains the copper-wire feedthroughs (Sec. 4.3)

4.2 ion trap 53

Fig. 4.9: Drawing of the ion trap. The four blade-shaped electrodes of the linear Paul trap generate the dynamic radial potential, the two endcap electrodes provide conﬁnement along the axial dimension. The electrodes are made of gold-coated titanium and are bolted to a top and bottom base made of sapphire. Elongated pins in the top base allow for a precise alignment of the blades. The blades have a ROC of 0.2 mm. Two pairs of rod electrodes (front and east) are used for micromotion compensation, -
the third pair is grounded and provides shielding of the trap centre from the cavity mirror in that direction (east↔west).

Trap frequencies

for the electrical connections of the various trap electrodes. The trap was assembled and mounted on the ﬂange by V. Krcmarsky [84]. A photograph of the integrated trap-cavity system under vacuum can be seen in Fig. 4.10.
One pair of diagonally opposite radial electrodes is driven with an RF signal of 23 MHz. A helical resonator attached to the electrodes ampliﬁes the signal. The coupling between frequency source29 and resonator coil is done via a sliding contact that is attached to a threaded Teﬂon cylinder screwed into the resonator coil. In this way, matching the impedance to the trap can be accomplished by simply screwing the Teﬂon cylinder further in or out while the grounding shield of the resonator can remai-
n closed. The resonator was asssembled and characterised by V. Krcmarsky; more information can be found in his upcoming thesis [84]. Radial trap frequencies of ωr1/2π = 2.40 MHz and ωr2/2π = 2.44 MHz were measured via spectroscopy of the

29 Rohde&Schwarz SMC 100 A, ampliﬁed by an RF ampliﬁer MiniCircuits LZY-22+

54 experimental setup
ion’s motional sidebands on the 729-nm transition. The splitting is due to a constant voltage of 1.5 V applied from a battery to the other pair of radial electrodes. Non-degenerate radial modes are important for efﬁcient Doppler cooling, as the symmetry break in the radial plane leads to radial motional modes that both have a projection onto the cooling beam’s propagation direction [69]. Typical DC voltages applied to the endcaps are 1.0 × 103 V, resulting in a measured axial trap frequency of ωz/-
2π = 0.92 MHz. The voltages applied to the endcaps and compensation electrodes are generated by a stable highvoltage source30 (∆V/V ≈ 10−5). Low-pass ﬁlters (made by our inhouse electronic workshop) with a cut-off frequency of 1.6 Hz are present directly at the vacuum feedthroughs.
Typical ion lifetimes in our trap are on the order of one day. In order to load a single 40Ca+ ion into the trap, a tube containing pure calcium—the calcium oven31—is resistively heated by a current of 3.6 A. The oven is mounted on the bottom ﬂange in a rigid structure (visible in Fig. 4.1). Metal plating surrounding the oven shields the cavity mirrors and the trap electrodes from the calcium ﬂux emitted from the oven as well as from the heat radiation (cf. Ref. [36] Sec. 4.12). The beam of calciu-
m atoms is collimated by a hole in the metal shield and another hole in the bottom sapphire base before entering the trapping volume, where the atoms are ionised by laser light at 375 nm and 422 nm. A target of pure calcium, mounted above the top base, allows for the possibility of loading ions via laser ablation, but has not been tested yet.
4.3 vacuum chamber
The vacuum chamber (Fig. 4.11) enclosing the cavity and ion trap is made of 316 stainless steel. Its shape can be loosely described as a "spherical cube".32 The chamber accommodates four CF100 ﬂanges: front, back, bottom and top, whose openings allowed for convenient access to the chamber-insides during integration of trap and cavity into the chamber. The front ﬂange consists of a CF100 viewport that allows for a clear view into the chamber and in principle for shooting an ablation laser onto the -
calcium target. The chamber back-side is ﬁtted with a recessed (inverted) viewport33 that allows the placement of an objective (Sec. 4.6) close to the ion trap while still keeping it outside the vacuum (distance trap centre to front surface around 58 mm). The objective collects the ion ﬂuorescence for atomic state detection (see Secs. 3.4 and 5.3).
30 ISEG box EHS 82 20x-F 31 Alvatec special design AS-3-Ba30/Ca40-C (Barium 30 mg + Calcium 40 mg) 32 The chamber was manufactured by Kimball Physics and is a custom build based on
the MCF600-sphcube model. 33 UKAEA; 40 mm clear aperture

4.3 vacuum chamber 55
Fig. 4.10: Photograph of the integrated trap-cavity system. View through the front CF100 viewport, showing the linear Paul trap vertically mounted between the cavity mirrors. Also visible are the collimating lenses to either side of the cavity, as well as electrical wires leading to the piezos below the mirrors. The atomic oven is mounted beneath the metal plating visible at the bottom centre of the picture.
The bottom ﬂange, on which the cavity assembly and oven are mounted, contains the vacuum feedthroughs for electrical connection to the translation stages34, cavity piezos35 and oven36. The top ﬂange, to which the trap is attached, holds the feedthroughs for electrical connection to the various trap electrodes (RF37 and DC38 signals). The helical resonator sits on the top ﬂange and is connected to one of the RF feedthroughs.
The east and west side of the chamber provide optical access to the cavity through two CF40 viewports39: laser light (mainly for the cavity lock, Sec. 4.1.3) can be coupled to the cavity through the east viewport, while the single-photon path from cavity to detectors runs through the west viewport (details on the optics surrounding the chamber are presented in Sec. 4.5). Four CF16 viewports are installed at an angle of 25◦ to each side of the east↔west axis, but have not been used as yet. The rema-
ining facets of the chamber are mostly ﬁtted with CF40 viewports, providing optical access for the various laser beams (Sec. 4.4). Details on the viewports and their coatings are provided in Ref. [84]. To lift the degeneracy of the Zeeman levels (Sec. 3.2), a pair of rings of permanent magnets is mounted on the bottom-front and top-back CF40 viewports (see Fig. 4.11). The magnets generate
34 SubD-15 35 SHV-5 36 One pair of copper pins with 2.4 mm diameter 37 Two copper pins with 6.4 mm diameter 38 Four pairs of copper pins with 1.3 mm diameter 39 UKAEA; speciﬁed surface ﬂatness λ/10, scratch-dig 20-10

56 experimental setup A

EE

FF

F

D

C

G

D B

H I

N

K

J K

E

F

K

Fig. 4.11: Model of the vacuum chamber containing the cavity and trap. The chamber is viewed from the front. A: helical resonator; B: combined ion pump and non-evaporable getter (NEG); C: additional NEG intended as a backup (not yet activated); D: rings of permanent magnets; E: RF feedthroughs; F: DC feedthroughs; G: inverted viewport; H: atomic oven; I: cavity assembly on translation stages; J: connector to the SubD-15 feedthrough for the translation stages. K: SHV feedthroughs for the cavity pie-
zos; Top, bottom, front and back ﬂanges are CF100.

a magnetic ﬁeld of 4.23 G at the trap centre, resulting in a Zeeman splitting within the D5/2 manifold of δZ/2π = 7.1 MHz.
The north-east side of the chamber is connected to a CF63 four-way cross carrying a combined ion pump and NEG40, a CF40 all-metal valve, and a CF63 viewport in line-of-sight of the trap centre. The vacuum vessel is mounted onto a two-level breadboard support structure that is located inside a magnetic ﬁeld shielding enclosure41. Sorbothane pads42 between breadboard and optical table are intended for vibration isolation.

40 SAES NEXTorr D 500-5 41 Custom design, manufactured by Magnetic Shields UK 42 ﬁve cylinders of 3.8 cm height and 5 cm diameter, 70 Durometer

4.4 laser systems 57

wavel. make, model
375 nm Toptica iBeam smart

label 375

423 nm Toptica

423

DL-Pro

397 nm Toptica TA-SHG Pro
866 nm Toptica DL-Pro
854 nm Toptica DL-Pro
806 nm Toptica DL-Pro
729 nm Coherent 899

397-π 397-σ 866
854
806/transferlock laser 729-rad

393 nm

729-ax
M2 Solstis-1600- 393/drive laser PSX-R with ECDX doubling stage

purpose
photo-ionisation, non-resonant second stage
photo-ionisation, resonant ﬁrst stage
Doppler cooling, state detection optical pumping
repumping from D3/2
repumping from D5/2
ion-cavity lock
qubit manipulation and sideband cooling of the radial and axial mode
drive laser for the
CMRT

Table 4.3: Listing of all laser systems used in this work for illuminating the ion or locking the cavity. For their directions in the setup, see Fig. 4.1.

The chamber containing cavity and trap was submitted to a oneweek vacuum bake at a temperature of 80 ◦C, while pumping with a turbomolecular vacuum pump. Further details on the vacuum bake can be found in Ref. [84].
4.4 laser systems
An overview of the laser systems used in this work is provided in Table 4.3. The labels given in the table will be used throughout the remainder of this thesis. The orientation of all laser beams for illuminating the ion or locking the cavity are shown in Fig. 4.1. Some of the lasers (729 nm, 423 nm, 375 nm) are shared with another project in the same

58 experimental setup
lab, while others (transfer lock laser) were the focus of a Master’s thesis [89]. I will therefore only present the portions of the beam paths that are used in our setup and have not been described in Ref. [89]. All optical ﬁbres are polarisation-maintaining (PM) unless otherwise stated. The RF sources with which the AOMs in the beam paths are driven are described in Sec. 4.7. In the ﬁgures of this section, thick coloured lines represent free-space beam paths. The labels with "+2x" indicate AOM do-
uble-pass conﬁgurations, labels with "+1x" indicate single-pass AOMs, where the "+" sign stands for the +1st diffraction order and the −1st diffraction order will be marked with a "−" sign instead.
4.4.1 Lasers for Doppler cooling, state detection and optical pumping (397 nm, 866 nm, 854 nm)
The diode lasers producing the light at 397 nm, 866 nm and 854 nm are situated on the laser table. A conceptual schematic of their setups is presented in Fig. 4.12. A few ten microwatts of laser light is branched off at the lasers’ outputs and sent via singlemode (SM) ﬁbre to the WLM for frequency stabilisation (Sec. 4.4.2). The beams from the laser heads are decoupled from the optical setups using short optical ﬁbres that also act as a mode cleaner. After passing various AOMs that allow for switc-
hing the beams on and off, laser light is sent via optical ﬁbres to the experiment table. The +1st diffraction order is used in all AOMs unless otherwise stated.
Fig. 4.12: Conceptual schematic of lasers and beam paths for Doppler cooling, state detection and optical pumping. The light at 397 nm is derived from fundamental light at 794 nm, created by an externalcavity diode laser (ECDL), ampliﬁed by a tapered ampliﬁer (TA) and subsequently frequency doubled via second harmonic generation (SHG). A small fraction of light from each laser is sent to the WLM for frequency drift compensation. The lasers are controlled via digital diode-laser controllers (DLCs).

4.4 laser systems 59
laser at 397 nm: The laser used for Doppler cooling, state detection and optical pumping on the 42S1/2 ↔ 42P1/2 dipole transition at 397 nm is a frequency doubled ECDL43, whose fundamental laser is operating at 794 nm and ampliﬁed by a TA. A few ten microwatts of the fundamental light are sent via SM ﬁbre to the WLM for measuring and stabilising its wavelength. A few tens of milliwatts of the available 1 W output power at 397 nm are guided via optical ﬁbre to a setup of AOMs44. The light passes an-
 AOM in double-pass conﬁguration, shifting its frequency by +160 MHz, before being split into two paths. The ﬁrst path contains the 397-π light for Doppler cooling and state detection. After passing an 80-MHz single-pass AOM, light from the ﬁrst path is guided via optical ﬁbre to the experiment table, where it is overlapped with the repumping beams at the south-west side of the vacuum chamber. The overlapped beams reach the ion through a hole in the cavity base. The second path contains the 397-σ -
light, which also passes an 80-MHz single-pass AOM and is guided to the south-front side of the vacuum chamber by another optical ﬁbre. After passing a quarter-wave plate (QWP), the beam propagates through the chamber along the magnetic ﬁeld axis. The light is σ−-polarised and is used for optical pumping of the ion to the state |u = |42S1/2, mj= − 1/2 .
lasers at 866 nm and 854 nm: Two ECDLs, at 866 nm and 854 nm, are used for repumping from the metastable D3/2 and D5/2 state manifolds, respectively (see Sec. 3.4.1). At the output of the 854 laser, a part of the light is branched off and directed to the conversion table. Another part of the 854 laser is sent to the cavity for its characterisation, described in Sec. 4.1.1. Here, an 80-MHz single-pass AOM45 is used for switching the light on and off for the cavity ringdown measurements. Both the 85-
4 and 866 laser ﬁelds are sent through 200-MHz double-pass AOMs46 before being coupled to the same optical ﬁbre and sent to the experiment table, where they are overlapped with the 397-π beam.
4.4.2 Wavelength meter and wavelength control
The wavelength meter (WLM) used in this work is a HighFinesse WSU-10 with a speciﬁed absolute accuracy of 10 MHz and measurement resolution of 1 MHz47. In combination with an eight-channel mechanical switch, connected to the WLM via SM ﬁbre, the wavelengths of all lasers (except for the 729, 375 and 423 lasers) are measured periodically at a rate on the order of 10 Hz. The WLM itself is connected
43 Toptica TA-SHG pro 44 Gooch & Housego 3080-125 45 Gooch & Housego 3080-125 46 Gooch & Housego 3200-124 47 Note that the values are speciﬁed for a device that is periodically calibrated, but a
calibration was carried out only rarely during this PhD work.

60 experimental setup
to a computer via USB. For stabilising the wavelengths of the lasers at 397 nm (i.e., its fundamental at 794 nm), 866 nm and 854 nm, a control program, supplied with the device and run on the computer, is used to calculate error signals depending on the deviation from target wavelengths. Based on the error signal, the piezo voltage of an ECDL is programmatically adjusted by sending a command to the corresponding digital diode-laser controller48 via ethernet. This all-digital control is in contrast-
 to the usage of a digital-analog-converter (DAC), originally intended by the manufacturer, as in, e.g., Refs. [88, 90].
The feedback rate is limited by the rate at which the wavelengths are measured. The WLM lock can therefore correct for frequency drifts but is not able to narrow an ECDL’s free-running linewidth of typically few hundred kHz. Considering the natural linewidth ΓP1/2 = 22.4 MHz of the P1/2 state, the lasers are sufﬁciently narrow. The drift rate of the WLM was measured by recording the wavelength of the 729 laser, which was locked to a stable reference cavity with an absolute drift of at most a few k-
Hz over the measurement period. Over 21 hours, the WLM drifted about 3 MHz. A calculation of the mean phonon number n¯ after Doppler cooling49 shows that a frequency drift of twice that amount would at most increase n¯ by 2 for any given motional mode of the ion (provided the initial detuning of the 397 cooling laser is not much smaller than the optimal detuning ∆ = ΓP1/2/2 for Doppler cooling). Considering the durations of less than one hour of the experiments presented in this thesis, the lasers-
 are sufﬁciently stable. Moreover, ground-state cooling, whose performance is not signiﬁcantly affected by the WLM lock, is performed for the experiments in this thesis.
4.4.3 Photo-ionisation lasers (423 nm and 375 nm)
The creation of singly-charged 40Ca+ is done via two-step photoionisation. An ECDL50 at 423 nm resonantly excites the 4s2 1S0 ↔ 4s4p1P1 transition of 40Ca. A photon from a free-running 375-nm diode laser51 provides the energy to excite the atom above the ionisation threshold of 6.1 eV [91]. The lasers and optical setups are situated on an optical table of the neighbouring Qusim experiment. The two lasers are overlapped on a 50:50 beam splitter (BS). Light from one port of the BS is guided to the s-
outh-back of our experiment via optical ﬁbre (the other port is used by the Qusim experiment), where a TTL-controlled shutter can be used to block the light.
48 Toptica DLC Pro 49 The calculation is based on the expression for the Doppler-cooling limit in Ref. [66]
(p. 20). 50 Toptica DL Pro 51 Toptica iBeam smart

4.4 laser systems 61
4.4.4 Quadrupole laser (729 nm)
A Titanium-Sapphire (Ti:Sa) laser with a short-term linewidth of 1 Hz [92] is used to coherently drive the states of the S1/2 ↔ D5/2 quadrupole transition. The laser and the setup for its stabilisation are located at the Qusim experiment; detailed descriptions can be found in Refs. [69, 92]. About 40 mW of laser light is guided via optical ﬁbre to our experiment table, where a TA ampliﬁes the light to 0.5 W.52 Another optical ﬁbre decouples the ampliﬁed light from a setup of AOMs used for switchin-
g the light on and off and for changing and scanning its frequency. A schematic drawing of the 729 setup on our experiment table is shown in Fig. 4.13. The laser light is sent through a 270-MHz double-pass AOM53 (+1st diffraction order, the actual RF driving signal is 226.5 MHz for addressing the |S1/2, mj= − 1/2 ↔ |D5/2, mj= − 3/2 transition), allowing for frequency changes of tens of MHz for spectroscopy of the S1/2 ↔ D5/2 transition. This AOM is driven by a phase-coherent RF source (Sec. 4.7) a-
nd can be used for setting the measurement basis in the ion-state tomography. Subsequently, the +1st diffraction order of either one of two AOMs54 is coupled to an optical ﬁbre. The AOMs are set up such that the 0th diffraction order of the ﬁrst AOM is coupled into the second AOM, and at any given time only one of them is active. In this way, the light reaches the ion via one of two optical ﬁbres. The beam from one ﬁbre (729-rad) propagates from front to back such that it overlaps only with the io-
n’s radial modes of motion. The beam from the other ﬁbre (729-ax) propagates from south-east to north-west such that it overlaps both with the ion’s radial and axial modes of motion.
Fig. 4.13: Conceptual schematic of the quadrupole-laser beam path. Light at 729 nm from the quadrupole laser setup at the Qusim experiment is directed via optical ﬁbre to our experiment table, where it is ampliﬁed by a TA. The +1st diffraction order of either one of two AOMs is coupled to an optical ﬁbre.
52 No ﬁbre-noise cancellation is performed on our side, so the laser linewidth is > 1 Hz once it reaches our table (no characterisation measurement has been performed to determine the linewidth at this point).
53 Brimrose 270-100 54 Gooch & Housego 3080-125

62 experimental setup
4.4.5 Drive laser (393 nm) for the CMRT and transfer-lock laser (806 nm)
The drive laser at 393 nm for the CMRT is a frequency-doubled Ti:Sa laser55 whose frequency is locked to an external ultralow expansion (ULE) reference cavity in a vacuum chamber56, as reported in the Master’s thesis of H. Hainzer [89]. An ECDL at 806 nm is stabilised to the same reference cavity and, via a transfer lock scheme, the length of the cavity surrounding the ion—herein after referred to as ion-cavity— is in turn locked to this laser (Sec. 4.1.3). A schematic drawing of their setups is s-
hown in Fig. 4.14.
setup: After passing an optical ﬁbre, light at 393 nm is sent through the −1st diffraction order of a 150-MHz double-pass AOM57 allowing for frequency changes of tens of MHz for spectroscopy of the CMRT and setting the frequency to the Raman resonance. An AOM58 in single-pass conﬁguration (−1st diffraction order) is used for further suppression of unwanted light when the AOMs are switched off. In order to generate the two phase-stable frequency components for the bichromatic CMRT (Sec. 3.3), this -
second AOM can be driven with two frequencies simultaneously, derived from phase-coherent direct digital synthesisers (DDSs). Both ﬁrst-order shifted beams are coupled to the same optical ﬁbre, sending the light to the north-back of the experiment.
As shown in Fig. 4.14, light from the transfer-lock laser at 806 nm is divided into two paths. One path is used for frequency-locking the laser to the ULE reference cavity. A double-pass AOM59 in this path is used for tuning the locking point. The other path is directed to the ion-cavity, providing the transfer-lock laser ﬁeld to which the ion-cavity is locked. A single-pass AOM60 in this path was used for cavity ringdown measurements at the wavelength of the transfer-lock laser (Sec. 4.1.1).
The resonance frequency of the CMRT depends on the AC Stark shift induced by the drive laser, which is proportional to the intensity. Intensity ﬂuctuations of the drive laser would therefore lead to a decreased efﬁciency of the CMRT. A homebuilt sample-and-hold circuit is used to actively stabilise the intensity of the drive-laser pulses between subsequent executions of the experimental sequence. The error signal for the stabilisation is derived from the signal of a photodiode in transmission of t-
he vacuum chamber (outside the south-front viewport) and feedback is applied to the RF-ampliﬁer driving the double-pass
55 MSquared Solstis-1600-PSX-R combined with an MSquared ECD-X external cavity resonant doubler accessory module; the Ti:Sa is optically pumped by a Lighthouse Photonics Sprout laser at 532 nm.
56 The ULE-cavity setup was bought from Stable Laser Systems. 57 Brimrose QZF 150-30 58 Brimrose QZF 80-20 59 Gooch & Housego 3200-124 60 Gooch & Housego 3080-125

4.4 laser systems 63
AOM (Fig. 4.14). With the sample-and-hold in place, a drift of the laser intensity of 0.7(3)% was measured over a duration of 15 min, using the aforementioned photodiode.
Fig. 4.14: Conceptual schematic of the drive-laser and transfer-lock-laser beam paths. The drive laser at 393 nm is a frequency-doubled Ti:Sa laser whose frequency is locked to a ULE reference cavity. An ECDL at 806 nm, used for locking the ion-cavity, is stabilised to the same reference cavity. Reference cavity and locking setup are described in Ref. [89].
frequency stabilisation and reference cavity: Both the drive laser and the ion-cavity need to be stabilised to within a fraction of the minimum linewidth of the CMRT, given by the natural linewidth κ = 70(2) kHz of the ion-cavity at 854 nm. Moreover, drive laser and ion-cavity need to meet the Raman resonance condition, i.e., have the same detuning ∆ from the excited state |e , and maintain that resonance over the timescale of the experiment. Achieving the required frequency stability of the drive-
 laser and the transfer-lock laser was the goal of the Master’s thesis of H. Hainzer [89]. The approach is to lock both lasers to a ULE reference cavity. In Ref. [89], in-lock linewidths of 87(1) Hz (FWHM) for the fundamental of the drive laser and 180(3) Hz for the transfer-lock laser were measured over a timescale of 12 s.
The purpose of a common frequency reference for both the drive laser and the transfer-lock laser is to reduce relative frequency drifts between the two arms of the CMRT, so that the Raman resonance condition can be maintained over long timescales. An absolute drift rate of 720 Hz/hr of the reference cavity was observed in Ref. [89], which translates to a relative drift rate of the same amount between the 806-nm laser and (frequency doubled) drive laser. The half width of the CMRT is on the order o-
f 100 kHz. The drift of the reference cavity therefore causes the two arms of the CMRT (ion-cavity and drive laser) to move off Raman resonance by a half linewidth in a time of about 140 hours: signiﬁcantly longer than the timescale of the experiments presented here.
The linewidth of the transfer-lock laser stated above was measured at a wavelength of 785 nm, the wavelength originally intended for locking the ion-cavity. However, during construction of the ion-cavity

64 experimental setup

(Sec. 4.1.2) the transmission proﬁle of the ion-cavity mirrors shifted, rendering the natural linewidth of the ion-cavity at 785 nm too broad for locking it with the required stability. With the reﬂective coating of the reference cavity centred around 780–785 nm [89], a suitable wavelength had to be found where the linewidths of both ion-cavity and reference cavity are narrow enough. At 806 nm, the ion-cavity could be locked with RMS frequency excursions as low as 9(2) kHz (measured over a timesca-
le of 0.5 s, see Sec. 4.1.3). Natural linewidths of 3.5(1) MHz and 0.63(5) MHz were measured for the reference cavity and ion-cavity, respectively, at 806 nm via spectroscopy of the cavities’ transmission proﬁles.

4.5 photon detection path

Detected photons are the ones that, after being emitted by the ion into

the cavity, ﬁrst exit the cavity via the mirror with transmission T2 (Sec.

4.1) into what we call the cavity output mode. The photons then pass

some passive optical elements with probability Pel, are coupled into a few-meter-long SM optical ﬁbre with an efﬁciency Pfc and are ﬁnally detected with a single-photon detector that has an efﬁciency Pdet. The detection-path efﬁciency is therefore Ppath = PelPfcPdet, and the total detected photon probability is given by Ptot = PSPpath. As a reminder, the photon collection probability PS is the probability for obtaining a

photon in the cavity output mode, as introduced in Ch. 2.

This section contains the characterisation of Ppath for the experiments presented in Ch. 6, in which the limits to the photon-collection

probability PS are experimentally investigated. Furthermore, the setup

for analysing the photon’s polarisation state is described, which is

used in the ion-photon entanglement experiment presented in Sec. 6.4.

For the experiment of Ch. 7 (distribution of ion-photon entanglement

over 50 km of optical ﬁbre), which was carried out prior to the experi-

ments of Ch. 6, photon path, detectors and polarisation analysis were

different and are described in the chapter itself.

A schematic drawing of the cavity output path is shown in Fig. 4.15.

After exiting the cavity, photons pass the following optical elements:

an in-vacuum collimating lens, a vacuum viewport, a zero-order HWP,

a zero-order QWP, a mirror, a lens with focal length f = −50 mm and

three optical ﬁlters61. Combined, these elements have a transmission of

Pel = 0.97(1), measured with laser light at 854 nm and a powermeter. The ﬁlters are necessary for blocking the laser light at 806 nm, used

for locking the ion-cavity, and to reduce background counts due to

ambient stray light.

For the ion-photon entanglement experiment of Sec. 6.4, a PBS on

a magnetic post is added into the photon path for measuring the

Cavity-photon polarisation analysis

photon’s polarisation state, introducing another 1% of loss [i.e. Pel is

61 2x Semrock FF01-834/LP-25, 1x Semrock FF01-850/10-25

4.5 photon detection path 65

Fig. 4.15: Cavity output path and setup for ion ﬂuorescence detection. Detected photons are the ones that leave the cavity through the mirror with transmission T2 and follow the beam path indicated by the thick red line to the west side of the vacuum chamber. The photodiode can be used for detecting laser light coupled to the cavity [as needed for characterisation of the cavity (Sec. 4.1.1) or the beam path]; the charge-coupled device (CCD) can be used for determining the order of the TEM mode tha-
t is excited in the cavity. Ion ﬂuorescence is collected by the objective in the back and focused at a distance of about 1.5 m onto the EM CCD camera and PMT, which are separated by a 50:50 BS (not shown).

reduced by 0.01 over its previous value to 0.96(1)]. The HWP and QWP are on motorised rotation mounts62 for setting the measurement basis when performing quantum state tomography [36, 93]. The axes of the PBS and the optical axes of the waveplates were determined using laser light at 854 nm sent through the cavity. To ensure a high degree of linear polarisation in this calibration step, a Glan-Thompson polariser was temporarily inserted into the beam path between polarisation optics and vacuum cha-
mber. A maximum extinction of 1 × 10−3 was measured for laser light transmitted through the polarisation analysis setup and 1 × 10−2 for the reﬂected port.
Photons are coupled to SM ﬁbres63 for which maximum ﬁbrecoupling efﬁciencies of 0.82(3) and 0.81(3) were measured for the transmitted and reﬂected port, respectively. The ﬁbre-coupling efﬁciencies were measured with laser light at 854 nm coupled through the cavity (thus matching the single-photon’s path), measuring the power at the ﬁbre inputs and outputs with photo diodes. The error bars are due to ﬂuctuations of the light intensity transmitted through the cavity. When opening and closing the Mu--
metal shield surrounding

Cavity-mode ﬁbre coupling

62 Standa MPR16-1 with 8SMC5-USB 63 ﬁbres: Thorlabs 780HP; ﬁbre-couplers: Schäfter&Kirchhoff 60FC-4-M5-10

66 experimental setup

Single-photon detectors
Measured detection-path efﬁciency (Ppath)

the vacuum chamber, optical elements and ﬁbre in-coupling stage, slight additional drifts (likely caused by changes in temperature) lead us to estimate the ﬁbre-coupling efﬁciencies Pfc to be 0.81(3) for the transmitted port and 0.80(3) for the reﬂected port.
Photons are detected with super-conducting nano-wire single-photon detectors (SNSPDs)64, which are SM-ﬁbre coupled. The detector efﬁciencies were determined65 during installation of the system by the manufacturer using calibrated avalanche photodiodes (APDs)66. The detector in the transmitted port of the PBS has an efﬁciency Pdet = 0.87(2) and free-running dark counts of 0.3(1) per second at 854 nm. The detector in the reﬂected port of the PBS has an efﬁciency Pdet = 0.88(2) and free-running dark -
counts of 0.5(1) per second at 854 nm. The detector efﬁciencies are polarisation dependent and the above values correspond to optimal polarisation settings. The waveplates after the PBS in the photon paths set the optimal polarisation of photons generated via the CMRT. The calibrated efﬁciencies were cross-checked by us via comparison with an independently calibrated APD67. This APD, which is further used for the measurements described in Secs. 5.2.1 and 7.4, has an efﬁciency of 0.39(1) and free-r-
unning dark counts of 10(1) per second. For the measurements described in Sec. 7.4, a second APD is used with the same efﬁciency and dark counts of 11(1) per second.
The overall detection-path efﬁciency evaluates for both paths to Ppath = 0.68(3). This value for Ppath is valid for all the experiments presented in Ch. 6 (performed with or without PBS), as the PBS does not change Ppath to within the measured precision.

cavity output mode: The cavity-output spatial mode was char-

acterised in order to be able to match it to the modes of the SM ﬁbres

leading to the SNSPDs. The TEM00 mode proﬁle of 854-nm laser light

sent through the cavity was measured with a beam proﬁler68 at two

points in the cavity output path. Speciﬁcally, the intensity distribu-

tions were measured along two orthogonal dimensions (x,y) and a Gaussian ﬁt (Fig. 4.16) yielded the beam diameters (1/e2) displayed

in Table 4.4. Here, D1 are the diameters closer to the cavity and D2

are the diameters at a distance d = 17(1) cm further down the beam

path. Taking the average between the x and y directions, a divergence

Θ

=

2

arctan(

D2−D1 2d

)

=

−0.0017(2)

is

calculated

from

the

measured

diameters.

The lenses with focal lengths f = −50 mm before the ﬁbre couplers

(Fig. 4.15) were added to the setup following simulations of the optical

64 Scontel 65 The calibration was performed with the ﬁbres later used in the experiment already
attached to the detectors (the other end of the ﬁbres is then directly plugged to the ﬁbre couplers, see Fig. 4.15). 66 Excelitas 67 Laser Components 68 Thorlabs BC106-VIS

4.6 setup for fluorescence detection at 397 nm 67

beam path using the Zemax OpticsStudio software. Here, the ﬁbrecoupling optimisation tool was used, with which the optimal position of the lenses (37 mm from the ﬁbre inputs) could be determined, given a mode-ﬁeld diameter of 5 µm of the ﬁbres (at 850 nm). The thus installed lenses allowed for an increase in the ﬁbre-coupling efﬁciencies from about 0.5(1) to the previously stated values.

D1 (µm) D2 (µm)

x 1083(5) 850(4)

y 1047(6) 707(3)

Intensity (arb.u.)

100 80 60 40 20 0 -1500

-1000

D
1

-500

0

y (7m)

D
2
500

1000

Table 4.4 & Fig. 4.16: Characterisation of the cavity output mode. The 1/e2diameters D1,2 of the cavity output mode were extracted from Gaussian least-square ﬁts to intensity distributions measured along two dimension x, y. In the ﬁgure, the measured and ﬁtted mode proﬁles along y are shown (plotted with an arbitrary y-offset). The slight difference in the divergence of the x and y direction is likely caused by an astigmatism originating from cavity light approaching the in-vacuum lens at an angle-
 and off-centre.

4.6 setup for fluorescence detection at 397 nm
For quantum state tomography of the ion-photon entangled state (Sec. 6.4 and Ch. 7), the electronic state of the ion is determined via detection of the ion ﬂuorescence at 397 nm (Sec. 3.4), collected by a 5-lens objective69 at the back side of the vacuum chamber. At the on-axis working distance of 58 mm between trap centre and the ﬁrst lens surface, the numerical aperture (NA) is 0.289, which corresponds to a collection efﬁciency of 2.5% of the full 4π solid angle [69, 94]. The light is focused at-
 a distance of about 1.5 m onto the EM CCD camera70
69 custom-made by Silloptics, Germany; for more information see [94] Sec. 3.6. 70 Andor iXon Ultra 897

68 experimental setup
and PMT (Fig. 4.15), each situated at one port of a 50:50 BS. A bandpass ﬁlter71 before the BS blocks stray light from reaching the devices and the PMT is further protected by an adjustable slit aperture. For the experiments of this thesis, for a single ion, a maximum count rate of about 15 × 103 counts per second is measured by the PMT when saturating the S1/2 ↔ P1/2 transition. While only the PMT signal is used for detecting the state of the ion, the EM CCD camera is used for monitoring the ion -
number during loading (verifying that only a single ion is in the trap) and for positioning the ion in the cavity waist (Sec. 5.1). Using the procedure described in Ref. [69], which relies on the known distances between ions in strings, and a camera pixel size of 16 × 16 µm2, a magniﬁcation of 18.7(1) is determined for our imaging setup. One pixel on the camera images thus corresponds to 0.86(2) µm.
4.7 experiment control
Most of the experimental apparatus is controlled from a computer— the Control PC—on which the C++ program TrICS (trapped-ion control software, developed in-house) is used to compile the experimental sequences and interact with the control electronics. For details about TrICS, see the PhD thesis of D. Heinrich [90]. For the sake of a better overview of the experiment control, the following description is divided in three parts: laser pulse control, digital laser-control, and data acquisition and tr-
ap control. A graphical representation is provided in Fig. 4.17, with the terms used in that ﬁgure to be deﬁned in the following paragraphs.
laser pulse control: All laser pulses are generated with AOMs; the pulse parameters (amplitude, length, phase) are controlled via the RF signals driving the AOMs. Except in special cases, the RF is supplied by a rack of DDSs, connected via a Bus cable to a PCI expansion card72 in the Control PC. The timing and length of these RF pulses are controlled by TTL signals applied to RF switches73 that connect the DDSs to RF ampliﬁers which are in turn connected to the AOMs. These TTL signals are generate-
d by the "Pulse Box", a ﬁeld-programmable gate array (FPGA)-based pulse sequencer developed by Paul Pham and Philipp Schindler [95]. Via Ethernet and TTL channels, the Pulse Box is connected to the Control PC where the TTL signals are processed by another PCI expansion card74.
For the generation and characterisation of ion-photon entanglement, the RF signals for the 393 single-pass AOM (generating the bichromatic
71 Semrock 390/18 72 National Instruments PCI 6533 (NI DIO-32 HS) 73 Mini-Circuits ZASWA-2-50DR+ 74 Nation Instruments PCI 6733

4.7 experiment control 69
Fig. 4.17: Experiment control and data acquisition. Boxes represent the electronic devices, arrows the form and direction of communication. For a better overview, the schematic and description in the main text are divided in three parts. Acronyms are deﬁned in the main text.
drive ﬁeld) and the 729 double-pass AOM (setting the measurement basis for the ion state tomography) are supplied by two phase-stable DDSs in the Pulse Box which are referenced to a 10-MHz GPS signal. These DDSs provide the ability to set the relative phase of the RF pulses, as well as maintain and control a ﬁxed phase relationship between the pulses.
digital laser control: A second PC is used for communication with the WLM. This PC is connected to the Control PC via Ethernet, receiving the setpoint wavelengths for the ECDLs (see Sec. 4.4.2) from TrICS. The error signals calculated by the WLM control-software (installed on the second PC) are sent via Ethernet to the digital diode-laser controllers (DLCs) which adjust the ECDLs’ piezo voltages. A digital locking module75, connected to the second PC via USB, is used for stabilising the frequency -
of the 806 laser to the reference cavity (see Sec. 4.4.5 and Ref. [89]).
data acquisition and trap control: Experimental data includes the detection events of cavity photons registered by photon detectors and, in the case of ion-photon entanglement, the ion ﬂuorescence signal detected by the PMT. Cavity photons are detected with SNSPDs (APDs in Ch. 7) whose TTL signals are sent to a time tagger76 that is connected to the Control PC. At the beginning of the experimental sequence as well as for every drive-laser pulse, the time
75 Toptica Digilock110 76 Swabian Time Tagger 20

70 experimental setup tagger also receives TTL triggers from the Pulse Box, allowing for a correlation between the experimental sequence and the detection events. The ion ﬂuorescence, detected by the PMT, is acquired by one of the PCI expansion cards in the Control PC. A computer-controlled high-voltage source77, connected via Controller Area Network (CAN Bus) to a third PC on the local network, is used for supplying the DC voltages for the ion trap. The EM CCD camera communicates via its propriet-
ary Andor Bus with the same PC.
77 ISEG box EHS 82 20x-F

KEY METHODS

5

This chapter gives an overview of key methods used for preparing the experiments presented in Chapters 6 and 7 and for analysing the measurement outcomes. Methods for measuring key experimental parameters are presented, essential for a meaningful comparison between experimental data and simulations. Finally, numerical simulations of our ion-cavity photon-generation process are summarised.
In Sec. 5.3, text from Ref. [38] has been reprinted with modiﬁcations.
5.1 positioning the ion in the cavity waist
Achieving the maximum photon-collection probability of our setup requires achieving the maximum ion-cavity coupling strength g [Eq. (3.1)]. For this, the ion needs to be placed in the cavity waist, i.e., the centre of the cavity, and at an antinode of the cavity vacuum ﬁeld. In the early stages of the experiment, including the experiment presented in Ch. 7, measurements of the photon collection probability PS suggested a signiﬁcantly smaller g than expected from the measured cavity geometry (see S-
ec. 4.1.1 for the cavity characterisation). Subsequently, using the method described in this section, the ion was discovered to be approximately one Rayleigh range (0.56 mm) away from the location of the cavity wais√t along the cavity axis, causing a reduction in g by approximately 1/ 2 . Correcting for this offset was one of the prerequisites for achieving the efﬁciencies reported in Ch. 6.
The relative position of the cavity waist to the ion is determined by coupling light at 806 nm to a mode of the cavity and probing the intracavity ﬁeld with an ion. The cavity is locked to the laser and the ion is translated along the trap axis through a cavity mode by changing the balancing of the endcap voltages. Due to a slight deviation from a 90◦ angle and the resulting overlap between trap axis and cavity axis (see Sec. 4.1.2 for the reason of this overlap), the ion passes several fringes of-
 the intracavity standing wave on its trajectory, as illustrated in Fig. 5.1. The resulting position-dependent AC Stark shift, which is proportional to the intensity of the intracavity ﬁeld, is measured on the |42SJ=1/2, mj= − 1/2 ↔ |42DJ=5/2, mj= − 5/2 quadrupole transition with the laser at 729 nm. The position of the ion with respect to the centre of the cavity is then extracted from a comparison between calculated and measured fringe pattern of the standing wave, taking into account the Hermit-
e-Gauss mode pattern of the cavity mode, as explained in the following.

71

72 key methods

The free-space electric-ﬁeld spatial distribution of Hermite-Gauss TEMmn modes, in either the x or y transverse dimensions and with an axial distance z from the waist with radius w0, is given by [43]

En(y, z) =

√

1 2nn!

w0 w(z)

Hn

2y w(z)

× exp −y2

1

k

w(z)2

+

i 2R(z)

− ikz − i(n + 1/2) arctan

z zR

.

(5.1)

Here, R(z) = z[1 + (zR/z)2] is the ROC of the beam’s wavefronts (the other parameters are deﬁned in Sec. 2.1.1). Due to resonant enhancement of the input laser power pin, the circulating power inside a cavity is given by pcirc = pin β4T1[F/(2π)]2 [79]. The factor β < 1 accounts for the fraction of input light that is coupled to the mode excited in the cavity. The spatial distribution of the electric ﬁeld inside the cavity can then be written as

Ecav(y, z) =

2 c0

pcirc πw20

[En(y,

z)

+

En(y,

−z)],

(5.2)

with 0 the vacuum permittivity. The Rabi frequency of the D5/2 ↔

P3/2 transition at 854 nm, with dipole moment µD5/2 [Eq. (2.13)],

is given by

ΩD5/2

=

. µD5/2 Ecav
h

The

AC

Stark

shift of the 806-nm

intracavity

ﬁeld

on

the

D5/2

level

is

estimated

to

be

δAC

=

|ΩD5/2 4∆

|2

,

with ∆/2π = 39 THz the frequency difference between the laser at

806 nm and the D5/2 ↔ P3/2 (854-nm) transition (any effect on the

S1/2 ↔ D5/2 transition at 729 nm is negligible in comparison).

Fig. 5.2 shows measurements of δAC for an input power pin =

0.08 mW as a single Doppler-cooled ion is placed at different positions

along the trap axis and corresponding points in a cavity TEM00 mode.

Each ion position corresponds to a certain combination of voltages on

the trap endcaps. The relative distances are measured with the EM CCD

camera (calibrated via known distances between ions in strings; see Sec.

4.6). An arbitrary offset was added to the position data, approximately

centring the plot around the cavity axis.

Let y be the dimension perpendicular to the cavity axis (z) and at

the angle α to the trap axis. A simulation of the intracavity ﬁeld via

Eq. (5.2), with the (y, z) coordinates rotated by α around the x-axis,

is shown as an orange line in Fig. 5.2. For the simulation, the param-

eters z = zd = 0.56(1) mm, α = 4.1(1)◦ and β = 0.20(1) are used,

which yield the best match with the measured data. These values

were found by manually adjusting the model parameters, determining

the given conﬁdence intervals by eye. The parameter zd corresponds

to the distance of the ion from the waist. The values used for T1,2

5.2 setting up the cmrt 73
Fig. 5.1: Simulated intracavity standing wave and orientation of the trap axis. The intensity pattern of a cavity TEM00 mode at 806 nm, calculated from Eq. (5.2) and normalised, is shown one Rayleigh range away from the cavity waist. The method presented in Sec. 5.1 consists in measuring the AC Stark shift suffered by a transition in a single ion at various points along the trap axis (red dashed line), to map out the cavity mode pattern along that dimension.
and L [contained within pcirc in Eq. (5.2)] at 806 nm can be found in Table 4.1. The quantities w(z) and zR are determined from a cavity waist of w8006 = 12.0(1) µm at 806 nm, calculated from the measured cavity length and mirror ROC (Sec. 4.1.1). The parameter β can be independently estimated from the fraction of transmitted power to input power via the equaiton pt/pin = β4T1T2[F/(2π)]2 [79]. By measuring pt and pin, a value of pt/pin = 0.13(1) was determined, from which β = 0.21(3) is obtained, -
in agreement with the value used in the simulation shown in Fig. 5.2. Remarkably, the effect of the wavefront curvature R(z) (see Fig. 5.1) is visible in the data of Fig. 5.2: the period of the measured fringe pattern is compressed on one side of the optical axis and expanded on the other side. Including the corresponding term of Eq. (5.1) in the model was a crucial step in getting the simulations to match the measured data.
Correcting for the found displacement zd along the cavity axis (via the east↔west translation stage) indeed resulted in the cavity being centred on the ion and achieving the maximum expected g in the experiment, as suggested by the comparison of experimental data to theory presented in Ch. 6. Furthermore, the position of the cavity seems not to have moved since, such that the steps outlined above had to be done only once.
5.2 setting up the cmrt
As detailed in Sec. 2.2.3, our photon-generation process corresponds to a cavity-mediated Raman transition (CMRT). Here, a two-photon Raman resonance is established between drive laser and cavity at a common detuning ∆ from the excited state |e (Fig. 3.1). Establishing

74 key methods

0.8 Data

0.6

Theory

δAC/2π (MHz)

0.4

0.2

0.0 -

30

- 20

- 10

0

10

20

30

Ion position along trap axis (μm)

Fig. 5.2: Mapping the intracavity ﬁeld with an ion. The AC Stark shift δAC, induced by the intracavity 806 laser on the S1/2 ↔ D5/2 transition, is measured for different ion positions along the trap axis and corresponding points in the cavity standing wave of a TEM00 mode. By comparing the measured data to the model of Eq. (5.2), the position of the ion relative to the cavity waist could be determined, as well as the angle between the axes of cavity and trap. Error bars of the datapoints are small-
er than the point size.

this resonance is achieved by ﬁrst stabilising the frequency of the drive laser and the cavity length to the reference cavity (Sec. 4.4.5), after which the Raman resonance is found by probing the spectrum of the Raman transition, as outlined in this section and also described in Ref. [61]. The section further contains a description of the methods for determining Ω and ∆, as well as the experimental procedure for setting up the bichromatic CMRT introduced in Sec. 3.3.

5.2.1 Raman spectroscopy and identifying transitions
Consider the experimental conﬁguration shown in Fig. 3.1 and described in Ch. 3, i.e., a σ−-polarised drive-laser beam propagating along the magnetic ﬁeld axis and perpendicular to the cavity. In that conﬁguration, three cavity-mediated Raman transitions can be driven from the initial state |u, 0 to the D5/2 manifold: ﬁrst, to |g1, 1 , where the photon emitted into the cavity has vertical (V) polarisation; second, to |g2, 1 , where the photon emitted into the cavity has horizontal (H) polarisation-
; third, to |mj=−1/2, 1 , where the photon emitted into the cavity is V polarised. After initialising the ion the the state |u via optical pumping, cavity-mediated Raman spectroscopy is performed by scanning the frequency of the drive laser while keeping the detuning of the cavity from the excited state |e ﬁxed. The three transitions mentioned above can then be observed as peaks in the detected photon rate. Fig. 5.3 shows such a spectrum for a Doppler-cooled ion, as it is routinely obtained before-
 an experiment by scanning the frequency of the 393 double-pass AOM and detecting photons in the cavity output. The peaks corresponding to the transitions |u, 0 → |g1, 1 and

5.2 setting up the cmrt 75
|u, 0 → |g2, 1 are of similar height due to the similar strength of the respective CMRTs1, as detailed in Sec. 3.3. With a Clebsch-Gordan coefﬁ√cient of only 1/15 (see Fig. 3.2) and a polarisation projection ζ = 0.5, the |u → |D5/2, mj=−1/2 transition has the lowest probability. The three main transitions are separated by the Zeeman splitting of the D5/2 manifold. In the absence of sideband cooling and due to the overlap between the drive-laser’s propagation direction with the ion’s motional modes-
, both blue and red motional sidebands of the ion are also clearly visible in the spectrum.
Polarisation analysis was done in the cavity output, sequentially, by rotating a HWP to determine if the single APD2 measures H or V photons. The relatively low photon probabilities and high background level in Fig. 5.3 (compared to Ch. 6) are due to generally not optimised parameters and the use of the APD instead of two SNSPDs. About one quarter of the background in Fig. 5.3 is due to APD dark counts, the rest can be attributed to ambient light3.

H photons

0.1

V photons

jg2i

0.05

jD

5 2

;

!

1 2

i

jg1i

a1 a2

a1 a2

Ptot

0

315

320

325

330

AOM frequency (MHz)

Fig. 5.3: Cavity-mediated Raman spectroscopy. The detected photon probability Ptot is plotted as a function of the frequency shift imparted by the 393-nm double-pass AOM on the drive laser. With the ion initialised in |u = |S1/2, mj=−1/2 and a σ−-polarised drive laser, three main transitions are visible, with ﬁnal states in the D5/2 manifold as indicated. First- and second-order axial sidebands (a1 and a2) are also visible, as indicated for one of the transitions. At the position of the small peak-
s next to second-order axial peaks, third-
order axial and ﬁrst-order radial sidebands overlap. Each data point
represents the average of 2 000 photon-generation attempts. Error
bars are omitted for clarity (except for an exemplary point in right
peak, corresponding to one standard deviation based on Poissonian
counting statistics). The connecting lines are a guide for the eye.

1 Resolving the slightly lower probability of the |u → |g2 transition and a comparison to theoretical calculations would require more statistics and a careful calibration of the drive-laser strength vs. AOM frequency, which is beyond the scope of this section.
2 Laser Components, see Sec. 4.5 3 For the experiments presented in Ch. 6 the detectors were better shielded from
ambient light.

76 key methods

5.2.2 Calibration of drive strength Ω and detuning ∆

The frequency of the Raman resonance depends on the intensity of the drive laser due to the AC Stark shift induced by the drive laser on the |u ↔ |e transition. A measurement of the AC Stark shift allows for calibrating the Rabi frequency of the drive laser Ω for a known ∆.

detuning ∆: The detuning ∆/2π = −403(1) MHz of the CMRT is determined by probing the |u ↔ |e atomic resonance at 393 nm with the σ−-polarised drive laser. More speciﬁcally, the frequency of the drive laser is scanned across the atomic resonance and the probability for pumping the ion to the D5/2 manifold is measured via the electron shelving technique (see Sec. 3.4.1). The laser frequency is measured with the WLM with a resolution of 1 MHz. The laser intensity is set to well below saturation. The -
|u ↔ |e atomic resonance frequency is then extracted from a ﬁt to the measured excitation spectrum. The detuning ∆ corresponds to the difference between the atomic resonance frequency and the frequency of the drive laser on Raman resonance (for vanishing AC Stark shift).

drive strength Ω: In the case of a single-frequency drive laser, its Rabi frequency Ω is determined by measuring the AC Stark shift δAC imparted by the laser onto the state |u and therefore onto the Raman resonance frequency:4

Ω = 4δAC∆

(5.3)

Speciﬁcally, two spectra of the CMRT are measured. One spectrum is measured at a drive-laser Rabi frequency Ω, from which the ACStark-shifted Raman resonance frequency fR is extracted. Another spectrum is measured using a drive-laser Rabi frequency for which the laser-induced AC Stark shift is smaller than the measurement resolution. From this second spectrum the un-shifted Raman resonance frequency f0 is extracted, such that the AC Stark shift is determined as δAC = fR − f0. With the known value -
for the detuning ∆, the Rabi frequency Ω is then determined via Eq. (5.3).
In the case of a bichromatic drive laser, with frequency components of strengths Ω1 and Ω2, the AC Stark shift due to the total Rabi
frequency Ω = Ω21 + Ω22 is approximately given by δAC = Ω21/4∆1 + Ω22/4∆2. In the context of this thesis the detunings are given by ∆1 = ∆ and ∆2 = ∆ − δZ, where δZ/2π = 7.1 MHz is the Zeeman splitting of the D5/2 manifold. At the time of performing the experiments of this thesis, a mechanism for measuring the individual drive strengths was

4 Eq. (5.3) is a ﬁrst-order approximation based on the full expression for the AC Stark shift induced on an energy level of an atomic dipole transition: δAC = −∆/2 − Ω2 + ∆2/2. The approximation is valid for ∆ Ω, as in our case.

5.2 setting up the cmrt 77
still missing. The total Rabi frequency is therefore estimated using the same formula as for the single-frequency case [Eq. (5.3)] (assuming the same detuning ∆ for both drive components).5
5.2.3 Setting up the bichromatic CMRT
Preparing the experiment for the generation of ion-photon entanglement requires setting the ratio Ω1/Ω2 for which both Raman transitions are driven with equal probabilities, i.e., they are "balanced". In this case, the temporal wavepackets of the generated horizontally and the vertically polarised photons are identical and the maximally entangled state of Eq. (3.3) is generated [56].
The method for balancing the transitions consists in performing a scan of the drive-laser pulse length and plotting the photon detection probability in the H/V polarisation basis, as shown in Fig. 5.4. The measurement is performed without recording the time tags of photon detection events and is evaluated on the ﬂy6, taking around 3 min to complete. The powers of the two drive-laser ﬁelds are varied and the measurement repeated until the two probability curves overlap, estimating the quality of th-
e overlap by eye. Note that the detectionpaths for the two polarisations have equal efﬁciencies to within their calibration uncertainties (see Sec. 4.5), where the latter are on the order of the error bars shown in Fig. 5.4. Therefore, once the probability curves are balanced in the H/V basis, changing to the V/H measurement basis does not signiﬁcantly change the observed balancing (in case of unequal detection-path efﬁciencies, the sum of the measured probabilities in the H/V and V/H bases would -
need to be balanced).
The balancing achieved in an actual experimental run, following this initial calibration step, is evaluated via post-processing of the experimental results, by comparing the temporal shapes of the generated H and V photons and their integrated probabilities (Sec. 6.4).
The frequency difference in the bichromatic drive ﬁeld is set to the Zeeman splitting between the states |g1 and |g2 . The frequencies of the |u ↔ |g1,2 transitions are found via spectroscopy on the 729nm transition. The centre frequencies of the corresponding excitation spectra are extracted from Gaussian ﬁts to within an uncertainty of 0.1 kHz. This uncertainty is on the same order as the dominant source of frequency ﬂuctuations in the 729-nm transition: the nearby elevator causes magnetic-ﬁeld -
changes that correspond to frequency changes in the |u ↔ |g1 transition of up to 0.3 kHz. These frequency changes
5 Using, for example, the Rabi frequencies given in Sec. 6.4, Ω1/2π = 14.2 MHz and Ω2/2π = 16.8 MHz, and ∆2 = 2π(403 − 7.1) MHz, would result in δAC/2π = 0.303 MHz. In comparison, assuming the same detuning ∆1 = ∆2 = ∆ for both frequency components yields δAC/2π = 0.300 MHz, translating to an error of less than 1% in the estimation of the total Rabi frequency.
6 At the time of performing the measurement, no routine for on-the-ﬂy processing of time-tagged data had been implemented yet.

78 key methods

0.3

0.2

P
tot

0.1

H photons

V photons

0

0

10 20 30 40 50 60 70

Drive-laser pulse length (7s)

Fig. 5.4: Balancing the bichromatic Raman transition. The single-photon detection probability is presented as a function of the drive-laser pulse length. Example data is plotted, taken prior to the experiment presented in Sec. 6.4, used for on-the-ﬂy assessing the balancing of the bichromatic Raman transition. Each data point represents the average of 200 photon-generation attempts. Error bars, shown for two measurement points at the right end of the plot, correspond to one standard deviation base-
d on Poissonian counting statistics. The connecting lines are a guide for the eye.

translate to changes in the frequency splitting of the states |g1 and |g2 of around 0.1 kHz.

5.3 tomography of the ion-photon entangled state
To√reconstruct the ion-photon state, which is of the form |Ψ(θ) = 1/ 2 |g1 |V + eiθ |g2 |H (see Sec. 2.2.3), a full state tomography of the two-qubit system is performed, as in Ref. [34]. The tomography consists in measuring correlations between the photon’s polarisation and ion’s electronic qubit state.

qubit measurements: On the photon polarisation-qubit side, the state is projected to one of six states (horizontal, vertical, diagonal, anti-diagonal, right circular and left circular). This is equivalent to performing projective measurements in three bases described by the Pauli spin-1/2 operators. For example, horizontal and vertical are the eigenstates of the Pauli σz operator [96]. For the entanglement experiment presented in Sec. 6.4, the polarisation-analysis setup described in Sec. 4.5 is u-
sed. The setup includes two detectors, one at each output of the PBS. For the experiment presented in Ch. 7, the polarisation-analysis setup, described in Sec. 7.2, includes a single detector.
To perform an ion qubit measurement, the |g1 electron population is ﬁrst mapped to the |u state via a 729-nm π-pulse7. That is, the D-manifold qubit, consisting of states |g1 and |g2 , is mapped into an optical qubit with logical states |u and |g2 . In order to measure
7 The π-pulse has a duration of 8.1 µs (10 µs) in the experiment of Ch. 6 (Ch. 7).

5.3 tomography of the ion-photon entangled state 79
which of these states the electron is in, the standard electron shelving technique, described in Sec. 3.4.1, is used: in the case of the |u -state outcome, scattered 397-nm photons from the ion are collected with the objective and detected with the PMT (Sec. 4.6). A detection time of 2000 µs (1500 µs) is used in Sec. 6.4 (Ch. 7), which, at a signal-tonoise ratio of around 15,8 is sufﬁcient to distinguish bright (scattering) and dark (non-scattering) ions with an error of less than 1% (see Ref. [66-
] Appendix A2). An example histogram of these ﬂuorescence counts is presented in Fig. 5.5. The aforementioned measurement process implements a projective measurement into the eigenstates of the σz basis. For measurements in the σx (σy) basis, the π-pulse is directly followed by an additional 729-nm π/2-pulse9 on the |u ↔ |g2 transition with a zero (π/2) phase relative to the preceding π-pulse, rotating the ion-qubit measurement basis.

3000

Occurrences

2000

1000

0

0

10

20

30

40

PMT counts

Fig. 5.5: Histogram of PMT counts. The histogram contains the counts of the complete state tomography of Sec. 6.4. Here, a detection time of 2000 µs is used and a detection threshold of 11 counts (vertical dashed line) to distinguish between bright and dark state. The y-axis is truncated at 3500. The occurrences in the ﬁrst and second bin are 9600 and 8000, respectively.

state characterisation: For each of the nine possible joint measurement bases (choice of photon basis and ion basis), the numbers of events corresponding to one of the four possible outcomes of these 2-qubit measurements are recorded (there is therefore a total of 36 possible outcomes). The number of events recorded for each outcome is then divided by the total number of events recorded for the given basis (divide each number by the sum of four) yielding estimates of the outcome probabilities. The-
se probabilities are used to reconstruct the two-qubit density matrix by linear search with subsequent maximum likelihood method [97].
8 The scattering rate for an ion the the bright (|u ) state is usually around 15 kHz and around 1 kHz for an ion in the dark (|g2 ) state, where the latter is caused by ambient and laser light scattered into the PMT.
9 The π/2-pulse has a duration of 5.2 µs (5.0 µs) in the experiment of Ch. 6 (Ch. 7).

80 key methods

The state quality is quantiﬁed in terms of ﬁdelity

√

√2

F = Tr ρρmax.ent. ρ ,

(5.4)

where ρ is the reconstructed density matrix and ρmax.ent. is the density matrix of the nearest maximally entangled pure state. This nearest state is found by exposing a perfect Bell state to single-qubit unitary rotations and searching for a state that provides the best ﬁdelity with the experimentally obtained one.10 The search involves the phase θ, which is set by the relative phase between the two drive ﬁelds of the Raman process θRaman and depends on the deﬁnition of the basis in the data analy-
sis [36]. As the relation between θ and θRaman has not been calibrated, the value of θ is not known in advance in the experiment. See Ref. [36] Ch. 8 for an experiment in which θ is tuned and calibrated.
For statistical analysis (determining error bars in quantities derived from the reconstructed density matrix), the Monte-Carlo approach [98] is used. We numerically generate M = 200 sets of 36 event numbers with Poissonian distribution and mean value equal to the experimental value for each of the 36 possible outcomes. Simulated outcome probabilities are derived from these simulated event numbers in the same way as is done for the experimental counts. In a ﬁnal step, M density matrices are reconst-
ructed via the maximum likelihood method for the simulated data and for each one the quantities of interest are calculated (ﬁdelity, purity). The error bars given for the experimental results represent one standard deviation in the widths of the distributions of these quantities over M simulated data sets. The error bars are given centred around the experimental results (found via the maximum likelihood method explained above).

effect of background counts: A background count is deﬁned as a detector click that did not result from a cavity photon. The limit of the ﬁdelity due to background counts is modelled in the following way. First, the number of background counts in the experiment is estimated by counting the detector clicks in a time window outside the drive-laser pulses (but within the same time-tag ﬁle that contains the photon-detection events used for the state tomography). The number of background counts is then -
added equally to the simulated measurement outcomes of an ideal Bell state (i.e., the background counts are treated as white noise). For the thus constructed outcomes, the density matrix of the closest maximally entangled state is then found in the same way as described above for the experimental data. Finally, the density matrix of this "noisy" state is used to calculate the ﬁdelity with the ideal Bell state via Eq. (5.4).

10 Note that unitary rotations do not change the amount of entanglement in the system.

5.4 numerical simulations 81

5.4 numerical simulations

For a quantitative prediction of the photon-collection probability PS and to model the temporal dynamics of the system, for a given set of parameters of the CMRT, we numerically solve a model based on a master equation of the form of Eq. (2.15). The Hamiltonian comprises all 18 releveant electronic states in 40Ca+ (see Fig. 3.2a, including all Zeeman sublevels) and two frequency-degenerate modes of the cavity (for H- and V-polarised photons). The Liouvillian includes cavity decay, the atomic decay-
 channels of all dipole transitions, as well as dissipation due to the frequency jitter of the cavity lock (see Sec. 4.1.3). The latter introduces phase noise, which is included via a collapse operator onto the D5/2 manifold at a rate of 0.01 MHz (see Sec. 4.1.3), effectively broadening the CMRT. The linewidth of the drive laser, at merely 87(1) Hz [89], is neglected in the simulations.
The simulation code is based on the quantumoptics toolbox in Matlab [99] and has been developed over many years by T. Northup and the cavity-QED team at the UIBK. A detailed description, including the speciﬁc Hamiltonian for 40Ca+ as well as the interaction terms and the collapse operators, can be found in the PhD thesis of B. Brandstätter [56] (Ch. 3).
In the context of the experiments presented in Ch. 6, the system is driven by a σ−-polarised laser ﬁeld on the S1/2 ↔ P3/2 transition. In the case of ion-photon entanglement, a second drive ﬁeld is included in the simulations, in accordance with the bichromatic drive scheme outlined in Sec. 3.3. In both cases, the time evolution of the system’s density matrix ρ(t) is calculated via numerical integration of the master equation. From ρ(t), the expectation values of an observable oˆ can be calculated-
 via the trace [56]

oˆ = Tr[oˆρ(t)].

(5.5)

The expected temporal shapes (wavepackets) of generated H- and V-
polarised photons are thus extracted from the expectation values of the photon number states in the cavity a†HaH and a†V aV . A comparison of simulated and measured wavepackets is presented in Sec. 6.3 for
V-polarised photons and Sec. 6.4 for photons polarisation-entangled
with the ion. The presented simulated collection probabilities PS are
calculated by integrating the simulated photon wavepackets.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:28.465Z
- **Text Length:** 197510 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
