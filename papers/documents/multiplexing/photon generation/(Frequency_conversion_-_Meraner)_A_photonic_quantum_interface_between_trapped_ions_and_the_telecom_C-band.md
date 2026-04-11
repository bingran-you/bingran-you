# PDF Document: (Frequency conversion - Meraner) A photonic quantum interface between trapped ions and the telecom C-band.pdf

**File Path:** (Frequency conversion - Meraner) A photonic quantum interface between trapped ions and the telecom C-band.pdf

**Processed Date:** 2026-02-10T18:18:11.663Z

**File Size:** 6693.21 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 730

**Title:** (Frequency conversion - Meraner) A photonic quantum interface between trapped ions and the telecom C-band

**Collection:** Multiplexing > Photon Generation

---

## Extracted Text Content

martin meraner
A PHOTONIC QUANTUM INTERFACE BETWEEN TRAPPED IONS AND THE TELECOM C-BAND

A PHOTONIC QUANTUM INTERFACE BETWEEN TRAPPED IONS AND THE TELECOM C-BAND martin meraner
Thesis submitted to the Fakultät für Mathematik, Informatik und Physik of the Leopold-Franzens-Universität Innsbruck in partial fulﬁllment of the requirements for the degree of
Doctor of Philosophy (Physics)
Carried out under supervision of o. Univ.-Prof. Dr. Rainer Blatt and Ass. Prof. Dr. Benjamin P. Lanyon
at the Institut für Quantenoptik und Quanteninformation - öAW , Innsbruck 05 2022

Martin Meraner: A photonic quantum interface between trapped ions and the telecom C-band, c 05 2022

Those who are not shocked when they ﬁrst come across quantum theory cannot possibly have understood it.
Niels Bohr

ABSTRACT
There is currently a world-wide research initiative to develop lightmatter quantum networks. Such networks consist of distributed matterbased nodes which are linked up with light and would offer powerful approaches to computing, sensing and communicating. Using light travelling in optical ﬁbres to link up quantum matter would be an effective way to realise intercity-scale quantum networks. Optical ﬁbres have the lowest transmission losses at the telecom C-band centre wavelength of 1550 nm, making -
this the optimum wavelength for photons in long-distance quantum networks. However, most matterbased systems do not interact directly with telecom photons.
In this thesis I present the development, characterisation and application of a telecom C-band interface for one of the most powerful examples of quantum matter: trapped ionized atoms. Speciﬁcally, the interface converts 854 nm photons from the 40Ca+ion to 1550 nm, via the process of optical difference frequency generation in waveguideintegrated LiNb crystals.
As a key result I show that entanglement between a trapped ion and an emitted photon is preserved both through the telecom conversion process and the subsequent distribution of the photon over 100 km of optical ﬁbre: orders of magnitude further than the previous state of the art for matter-photon entanglement. The presented results are an important step towards the realisation of light-matter quantum networks on the inter-city scale.
vii

Z U S A M M E N FA S S U N G
Derzeit gibt es eine weltweite Forschungsinitiative zur Entwicklung von Quantennetzwerken mithilfe von Licht und Materie. Diese Netzwerke bestehen verteilten Knoten aus Materie, die mit Licht verbunden werden und würden leistungsstarke Ansätze für das Rechnen, Erfassen und Kommunizieren bieten. Die Verbindung von Quantenmaterie mit Hilfe von Licht in Glasfaserleitungen wäre ein wirksamer Weg zur Realisierung von Quantennetzen in innerstädtischen Größenordnungen. Optische Fasern haben die geringste-
n Übertragungsverluste bei einer Wellenlänge von 1550 nm, welche inmitten des optischen C-Bandes der Telekommunikation liegt. Über große Entfernungen ist dies somit die optimale Wellenlänge für Photonen in Quantennetzen. Die meisten auf Materie basierenden Systeme interagieren jedoch nicht direkt mit Photonen im Telekommunikationsband.
In dieser Arbeit stelle ich die Entwicklung, Charakterisierung und Anwendung einer Schnittstelle zwischen dem C-Band der Telekommunikation und einem der vielversprechendsten Systeme für Quantenmaterie vor: gefangene ionisierte Atome. Diese Schnittstelle wandelt 854 nm Photonen des 40Ca+Ions in 1550 nm Photonen mithilfe der optischen Differenzfrequenzerzeugung in wellenleiterintegrierten LiNb-Kristallen um.
Als Schlüsselergebnis zeige ich, dass die Verschränkung zwischen einem gefangenen Ion und einem emittierten Photon sowohl durch die Frequenzkonvertierung zum C-Band, als auch durch den anschließenden Transfer des Photons über 100 km Glasfaserleitung erhalten bleibt. Diese Distanz übersteigt den bisherige Stand der Technik für Materie-Photonen-Verschränkung um Größenordnungen. Die in dieser Arbeit präsentierten Ergebnisse sind wichtig für die Realisierung von Quantennetzwerken zwischen Licht und Ma-
terie im innerstädtischen Maßstab.
viii

P U B L I C AT I O N S
Publications relevant to the Thesis: • V. Krutyanskiy, M. Meraner, J. Schupp, and B. P. Lanyon. "Polarisation-preserving photon frequency conversion from a trappedion-compatible wavelength to the telecom C-band." In: Applied Physics B 123.9 (2017), p. 228. DOI: 10.1007/s00340-017-6806-8. • M. Meraner*, A. Mazloom*, V. Krutyanskiy*, V. Krcmarsky, J. Schupp, D. A. Fioretto, P. Sekatski, T. E. Northup, N. Sangouard, and B. P. Lanyon. "Indistinguishable photons from a trapped-ion quantum network node.-
" In: Phys. Rev. A 102.5 (2020), p. 052614. DOI: 10.1103/PhysRevA.102.052614. • V. Krutyanskiy*, M. Meraner*, J. Schupp*, V. Krcmarsky, H. Hainzer, and B. P. Lanyon. "Light-matter entanglement over 50 km of optical ﬁbre." In: npj Quantum Information 5.1 (2019), p. 72. DOI: 10.1038/s41534-019-0186-3. • J. Schupp, V. Krcmarsky, V. Krutyanskiy, M. Meraner, T. E. Northup, and B. Lanyon. "Interface between Trapped-Ion Qubits and Traveling Photons with Close-to-Optimal Efﬁciency." In: PRX Quantum 2.2 (2-
021), p. 020331. DOI: 10.1103/PRXQuantum.
* These authors contributed equally
ix

ACKNOWLEDGEMENTS
I could only manage this work in cooperation with many different people. Therefore, in the following I would like to express my gratitude to all professors, colleagues, friends and relatives who have supported me with their help, effort and patience.
First of all, I want to thank Rainer, who gave me the opportunity to carry out my doctoral studies in his working group. Big thanks to my supervisor Ben, who gave me the big opportunity to work in his team and develop a new experiment. Here I also want to thank the whole Team, which worked from the beginning together with me on this experiment: Josef, Viktor, and Vojta. It was both an amazing but also sometimes a hard time together. I also want to thank all newer experimental team members for thei-
r help.
I not only received help from members of the small experimental team but also from the big ion-trapping group led by Rainer. I had fruitful discussions with nearly all members of this group especially at group events like the BBQ or the group retreat in Obergurgl. As a representative of this group I want to thank again Rainer and Thomas Monz, who are the glue of this group, which sticks all group members better together.
Also I received a lot of help outside of the Blatt-group like from the photonic team or from Gerhard Kirchmair personally. As an example I want to mention our card playing group, which made my lunch breaks unforgettable. Big thanks to the "Königsrufer" Lukas, Axl, Klemens (all Blatt), Marian (Ultracold) and Arne (Angewandte). I hope, we will continue this tradition even when all of us ﬁnally ﬁnish their studies.
Alle Wissenschaftler wären aufgeschmissen ohne die Hilfe von all den administrativen und technischen Mitarbeitern. In meinem Fall hatte ich wirklich viele helfende Hände und ich möchte mich besonders bei Patricia Moser (UIBK) und Elisabeth (IQOQI) bedanken. Danke an Wolfgang Kratz (RIP), Wolfgang Kuen (beide UIBK) und Gerhard Hendl (IQOQI), die mir bei allen Fragen zur Elektrik geholfen haben. Andreas Strasser, Bernhard Öttl, Stefan Haslwanter (alle IQOQI) und Armin Sailer unterstützten mich immer-
 tatkräftig bei mechanischen Angelegenheiten.
Zuletzt möchte ich mich bei meiner Familie bedanken. Danke an meine Eltern, Roland und Maria, die mich sowohl psychisch als auch ﬁnanziell während meiner gesamten Studienzeit unterstützt haben. Meinen Geschwistern, Marlene und Matthias, die vergebungslos versuchen, keine physikalischen Themen neben mir anzusprechen. Vielen Dank an meine Oma, Omi und Opa, der leider meine Sponsion nicht mehr miterleben darf, in mir aber schon als Kind einen Wissenschaftler
xi

gesehen hat. Danke an meinen besten Freund David Peer, der rein technisch zwar nicht wirklich zur Familie gehört, aber mich schon seit meiner Kindheit begleitet und mich sicherlich technisch geprägt hat — viel Glück für deinen PhD über Künstliche Intelligenz.
Der Letzte und auch größte Dank gilt meiner Frau Sandra, auf deren Unterstützung und Hilfe ich immer zählen konnte. Auch während schlechten und schweren Zeiten hattest du immer mindestens ein aufmerksames Ohr für mich und ich konnte immer auf deinen Rat vertrauen.
xii

CONTENTS

i introduction and background

1 Introduction

3

1.1 Quantum networks . . . . . . . . . . . . . . . . . . . . . 3

1.2 Motivation to go to telecom-wavelengths . . . . . . . . 4

1.3 Trapped ions as qubits . . . . . . . . . . . . . . . . . . . 5

1.4 Thesis description: key questions . . . . . . . . . . . . . 6

1.5 Reading guide . . . . . . . . . . . . . . . . . . . . . . . . 7

2 Background

9

2.1 Qubits and quantum networks . . . . . . . . . . . . . . 9

2.1.1 Stationary and ﬂying qubits . . . . . . . . . . . . 9

2.1.2 State characterization . . . . . . . . . . . . . . . 10

2.1.3 State reconstruction . . . . . . . . . . . . . . . . 12

2.2 Photon conversion by difference frequency generation 14

2.2.1 Principles of nonlinear optics . . . . . . . . . . . 14

2.2.2 Efﬁciency . . . . . . . . . . . . . . . . . . . . . . 16

2.2.3 Noise sources . . . . . . . . . . . . . . . . . . . . 18

2.3 Choice of ion species and transition . . . . . . . . . . . 20

ii setup, experiments and results

3 Core setup and key methods

25

3.1 Principle of the experiment . . . . . . . . . . . . . . . . 25

3.2 Ion trap, optical cavity and vacuum chamber . . . . . . 25

3.3 Conversion crystals . . . . . . . . . . . . . . . . . . . . . 29

3.4 Single photon detectors . . . . . . . . . . . . . . . . . . 30

3.5 854 nm photon generation . . . . . . . . . . . . . . . . . 33

3.5.1 Single photons via a cavity-mediated Raman

process . . . . . . . . . . . . . . . . . . . . . . . . 33

3.5.2 Ion-photon entanglement via a bichromatic cavity-

mediated Raman process . . . . . . . . . . . . . 34

4 Polarisation-preserving photon frequency conversion

37

4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . 38

4.2 Polarisation-dependent conversion scheme . . . . . . . 39

4.2.1 Experimental details . . . . . . . . . . . . . . . . 39

4.2.2 Results . . . . . . . . . . . . . . . . . . . . . . . . 41

4.3 Polarisation-preserving conversion . . . . . . . . . . . . 47

4.3.1 Experimental details . . . . . . . . . . . . . . . . 47

4.3.2 Results . . . . . . . . . . . . . . . . . . . . . . . . 48

4.4 Future applications: long-distance transmission. . . . . 49

4.5 Fibre-coupled waveguides . . . . . . . . . . . . . . . . . 51

xiii

xiv contents

4.6 Conclusion and Discussion . . . . . . . . . . . . . . . . 54

5 Telecom-wavelength ion-photon entanglement

57

5.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . 57

5.2 Experimental details and methods . . . . . . . . . . . . 59

5.2.1 Overview of the experimental setup . . . . . . . 59

5.2.2 Pulse sequence for 50 km experiment . . . . . . 66

5.2.3 State characterisation . . . . . . . . . . . . . . . . 68

5.3 Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69

5.3.1 Setup efﬁciency for the 50 km distanced entan-

gling experiment . . . . . . . . . . . . . . . . . . 69

5.3.2 Results for 50 km ion - telecom-photon entan-

glement . . . . . . . . . . . . . . . . . . . . . . . 71

5.3.3 Decoherence of the ion-qubit state . . . . . . . . 73

5.4 Results with improved setup . . . . . . . . . . . . . . . 74

5.4.1 Setup improvements . . . . . . . . . . . . . . . . 75

5.4.2 Results for ion - telecom-photon entanglement

with the improved system . . . . . . . . . . . . . 75

5.4.3 Results for 100 km light-matter entanglement in

the improved setup . . . . . . . . . . . . . . . . . 76

5.5 Discussion . . . . . . . . . . . . . . . . . . . . . . . . . . 79

6 Second order correlation function of converted photons

83

6.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . 83

6.2 Experimental setup . . . . . . . . . . . . . . . . . . . . . 85

6.3 Experimental sequence . . . . . . . . . . . . . . . . . . . 85

6.4 Data analysis and results . . . . . . . . . . . . . . . . . . 86 6.5 Time dependant analysis of the g(2) function . . . . . . 87
6.5.1 Contributions to g(2)(0) = 0 . . . . . . . . . . . . 88

6.5.2 Measured rates . . . . . . . . . . . . . . . . . . . 89 6.5.3 Comparison of the measured and modelled g(2)

function . . . . . . . . . . . . . . . . . . . . . . . 90

6.6 Discussion and conclusion . . . . . . . . . . . . . . . . . 92

7 Indistinguishability of converted photons

95

7.1 Abstract . . . . . . . . . . . . . . . . . . . . . . . . . . . 95

7.2 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . 96

7.3 Experimental details and model . . . . . . . . . . . . . 97

7.3.1 Summary of the theory . . . . . . . . . . . . . . 97

7.3.2 Experimental setup . . . . . . . . . . . . . . . . . 98

7.3.3 Telecom delay line efﬁciency and added noise . 103

7.3.4 Photon generation sequence . . . . . . . . . . . 104

7.4 Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . 105

7.5 Discussion . . . . . . . . . . . . . . . . . . . . . . . . . . 109

8 Quantum memory

113

8.1 Abstract . . . . . . . . . . . . . . . . . . . . . . . . . . . 113

contents xv

8.2 Introduction and motivation . . . . . . . . . . . . . . . . 113 8.3 Overview of the experiment . . . . . . . . . . . . . . . . 114 8.4 Setup and new hardware . . . . . . . . . . . . . . . . . 116 8.5 Experimental sequence . . . . . . . . . . . . . . . . . . . 116 8.6 Results and discussion . . . . . . . . . . . . . . . . . . . 118 8.7 Conclusion and outlook . . . . . . . . . . . . . . . . . . 122

9 Conclusion and outlook

125

a Appendix

129

a.1 PulseBox . . . . . . . . . . . . . . . . . . . . . . . . . . . 129

a.2 Conditional logic boards . . . . . . . . . . . . . . . . . . 129

a.3 Stanford chips layout . . . . . . . . . . . . . . . . . . . . 133

a.4 Temperature stabilization of nonlinear crystals . . . . . 135

a.5 Indistinguishability of converted photons: Data analysis 138

Bibliography

141

Part I INTRODUCTION AND BACKGROUND

INTRODUCTION

1

Earth’s earliest organisms have already shared information about species, gender and intent, which is basically already communication [1]. This communication took place via chemical signals. It took millions of years of evolution until the hominids started to communicate with gestures and noises to share knowledge and information with each other. The ability to communicate led to a gradual improvement in a range of key human skills, including the coordination of hunting teams. It’s not completely -
clear when technologies are developed that allow communication over distances longer than a voice can carry. About 8000 years ago, drums were used in Africa to communicate over several kilometres. The ﬁrst indications of writing in China are estimated to be 7000 years old. The post system was developed in Persia around 500-550 BC. The ﬁrst optical telegraphs are mentioned already in the Greek tragedies Orestia in 458 BC [2]. In 17th century Europe, modern optical telegraphy was used for communicat-
ion. The electric Morse telegraph was developed in 1774. After the telegraph, communication technology developed much faster: telephone, television, mobile phones and, in 1991, the world wide web. All of these technologies are constantly being developed to achieve faster rates of information ﬂow.
Over the last few decades fundamentally new approaches to communication have begun to emerge out of the research ﬁeld of quantum information science. In this ﬁeld, information is encoded and processed in the quantum states of the physical information carriers, such as single atoms, photons or macroscopic oscillating currents in superconducting circuits. Quantum information offers fundamentally new possibilities for communication. The ﬁeld of quantum information science is currently working on the -
development of a new type of information network, the so-called quantum network [3–5]. Such a quantum network can be used, as described in [6], for distributed sensing, timekeeping, cryptography or scaling up quantum computers. Quantum information has the potential for another revolution in communications technology via the realisation of quantum networks.
1.1 quantum networks
A network is a set of nodes that are interconnected via links through which information can be transmitted. In a ’classical’ network the nodes are used for the storage and processing of classical information, which is typically encoded into digital bits. The links enable the trans-

3

4 introduction
mission of bits of information between the nodes. Popular examples for classical networks are the global internet or local area networks (LANs), in which classical computers are connected with laser light in optical ﬁbres. In quantum networks the nodes are used for the storage and processing of quantum information in quantum bits (qubits) encoded into quantum matter such as arrays of single atoms. The links in quantum networks are for transmitting information encoded into ﬂying qubits, like photon-
s travelling in optical ﬁbres. In his paper ’The quantum internet’ [3] H. J. Kimble describes the tools required for the realization of light-matter quantum networks. For example, to connect matter qubits in the nodes with ﬂying qubits, quantum interconnects are required, which convert quantum states from matter to light and vice versa. Quantum networks have a myriad of known applications in a wide range of ﬁelds, many of which are being actively developed over distances from the meter scale for s-
calable quantum computing [7] to the global scale [6, 8].
One key functionality of a quantum network is the distribution of entanglement between its nodes. Before the start of my PhD, entanglement between two atoms in traps a few ten meters apart had been achieved with 780 nm photons [9], between two ions in traps a few meters apart with 369.5 nm photons [10] and between two nitrogenvacancy centres 1.3 km apart with 637 nm photons [11]. During my PhD three NV-centres were entangled in a three-node network spaced over a few meters [12]. For all of those e-
xperiments, the photons are sent over optical ﬁbres. Those key results in light-matter quantum networking set the context for my thesis: entanglement between matter has been achieved over up to 1 km. For trapped ions, entanglement has been achieved over a few meters.
1.2 motivation to go to telecom-wavelengths
Using optical ﬁbres as links in quantum networks is a powerful approach to realising land-based light-matter quantum networks across cities and between them. Such ﬁbre-based networks could be complemented in future with free-space satellite links [13]. The attenuation in optical ﬁbres at the wavelengths of photons used in the landmark quantum networking experiments referenced immediately above (780 nm, 637 nm, 369.5 nm) limit internode distances in quantum networks to a few km at most. For example-
, the current best optical ﬁbres for 780 nm have an attenuation of ∼ 3 dB/km, which would result in a transmission of 1% after 7 km. It would be far better to use photons at 1550 nm (inside the telecom C-band), which suffer minimal loss in optical ﬁbre of ∼ 0.2 dB/km allowing for 1% transmission over 100 km. To take advantage of this low loss wavelength, one either has to develop matter based systems that naturally interact with telecom photons [14] or develop an interface to convert the photon fr-
equency.

1.3 trapped ions as qubits 5
The technique of changing the frequency of a single photon exists and is known as quantum frequency conversion (QFC). QFC is based on a nonlinear optic process and was ﬁrst demonstrated in 1961 [15]. Before the start of my PhD, QFC of photons from quantum matter to a telecom wavelength was achieved with quantum dots [16] but had not been achieved using photons from trapped atoms or ions. During the time in which the work carried out in this thesis was done, we [17] and others [18, 19] achieved it -
for ions and others for photons from trapped atoms [20].
Besides minimising photon loss, and the ability to exploit the existing telecom ﬁbre network, another beneﬁt of using telecom C-band photons for quantum communication is to establish this frequency as a standard for communication between different quantum systems. Different examples of quantum matter have different strengths which could be combined using a common photonic frequency standard to form hybrid systems with greater capabilities than the individuals alone [21]. In order to connect these -
different system, with different natural photonic wavelengths, either a photon conversion adapter to bridge each pairwise combination has to be developed, or every system develops an adapter to a standard like the telecom C-band.
1.3 trapped ions as qubits
Trapped ions are particularly powerful systems to enable quantum networking and the envisioned applications. For example, a complete set of tools for deterministic universal manipulation of quantum information encoded into registers of ten or more trapped ion qubits is readily available and of a quality near fault tolerant thresholds [22–24], as required for arbitrary distance quantum networking via the quantum repeater approach [25, 26]. Key quantum networking functionalities have been demonstrat-
ed between ions over a few meters, including remote state teleportation [27] and multi-ion protocols [28]. Trapped ions are also some of the most sensitive measurement probes yet developed. For example, many ion species, including the one used in this work, contain optical atomic clock transitions and therefore entangling them over distance enables the ideas presented in [8] and [29] to be explored.
The distance over which trapped ions can be entangled using photons at the directly-compatible wavelengths is strongly limited by photon loss in optical guides. For example, the photons at 369.5 nm that were used to entangle the two remote 171Yb+ ions in [10] suffer a loss of approximately 50 dB/km in optical ﬁbre. The photons at 493 nm, used to entangle two remote 138Ba+ ions in [30], suffer around 15 dB/km in optical ﬁbre. The photons at 854 nm, used to entangle a 40Ca+ion with a travelling phot-
on in [31], suffer ﬁbre losses of only

6 introduction
∼ 3 dB/km. While the 854 nm photons suffer the least, internode distances are still limited to a few kilometres at best.
1.4 thesis description: key questions
The principle goal of my PhD work is to develop a photonic interface that enables the quantum states of trapped atomic ions to be interfaced with the quantum states of photons at 1550 nm. The following key questions are discussed in this thesis:
1. Efﬁciency. While conversion to telecom will reduce the subsequent photon loss rate per unit length in optical ﬁbre, the conversion process itself will inevitably introduce photon loss. With what probability does the photonic interface convert a single photon at its input to a single telecom photon at its output? What are the limits to this probability in the systems that we develop and what are the future prospects for improvement?
2. Added noise through conversion. The photonic interface is expected to add unwanted photons to the output mode, thereby adding noise to the information transmitted in future quantum network links. What are the added photon noise rates, what is their physical origin and what are the prospects to further reduce them?
3. Preservation of single photon character. To what extent does the photonic converter change the single photon character of our trapped-ion photon source? Can the single photon characteristics be fully described by the added photon noise rates?
4. Preservation of the photonic qubit state. The photonic interface should preserve quantum information encoded into the photon. How faithfully does the photonic interface preserve the degree(s) of freedom used to encode a qubit?
5. Preservation of photon indistinguishability. Key functionalities of quantum networks require photons that are indistinguishable: there is no way to tell one from another. As such, the extent to which the photonic interface introduces distinguishing information into the photons should be assessed, understood and minimised.
6. Entanglement between telecom-photon and ion. Can we use the photonic interface to achieve entanglement between a telecom C-Band photon and an ion? Here, the performance of both the photonic interface and that of the trapped-ion photon source are critical.
7. Distribution of light-matter entanglement over tens of kilometres. Can we distribute a photon, entangled with an ion, over tens

1.5 reading guide 7
of kilometres, as potentially enabled by the telecom wavelength? The distribution of entanglement is even more challenging compared to the previous task of observing it immediately after the photonic interface. For example, the long ﬁbre adds both signiﬁcant losses, which limits the data collection rate, and can cause errors in the photonic qubit as it travels. Moreover, the qubit encoded in the ion must survive for the photon travel time over tens of kilometres. Can we observe ion-photon entangle-
ment after tens of kilometres of optical ﬁbre and hundreds of microseconds of photon travel time?
1.5 reading guide
Chapter 2 presents a summary of some of the key background theories and concepts behind the experimental results in this thesis. Speciﬁcally, after brieﬂy introducing qubits and quantum state characterisation, the relevant theory of nonlinear optics is presented and used to derive an expression for photon conversion efﬁciency via difference frequency generation. Finally, our choice of ion species and transition is justiﬁed.
Chapter 3 presents the core parts of our experimental setup and key experimental methods. First, a rough outline of the complete experiment is shown, followed by the description of the single building blocks: the ion trap with an integrated optical cavity, the conversion crystals and our single photon detectors. Finally, the photon generation process is described.
Chapter 4 presents our single-photon frequency converter and its characterisation using attenuated laser light. In particular, the device efﬁciency is characterised and the extent to which the converter preserves the polarisation of the converted photonic qubit. In Chapter 5 I present the observation of ion-photon entanglement over up to 100 km, which is the main result of this thesis.
Chapter 6 reports on a study of how well the photon converter preserves the single photon character of our trapped-ion photon source. The degree of preservation is assessed by measuring the second order correlation function of the light before and after conversion.
Chapter 7 reports on our study of the indistinguishability of our converted photons, which is assessed by a Hong-Ou-Mandel interference of two subsequently-generated photons from the same trapped ion.
Chapter 8 presents preliminary results from an ongoing project in our group in which we aim to demonstrate the key functionalities of a telecom quantum repeater node. Finally, Chapter 9 summarizes the achieved results and gives an outlook towards future experiments and suggestions for further improvements.

BACKGROUND

2

In this chapter the key background theory and concepts required to understand this thesis are given. Section 2.1 describes the basics of quantum bits and quantum networks. Section 2.2 introduces nonlinear optics and derives an expression for the efﬁciency of single photon frequency conversion via difference frequency generation. Finally, section 2.1 explains our choice to convert 854 nm photons from trapped 40Ca+to the telecom C band.

2.1 qubits and quantum networks

The smallest information unit in quantum information is the quantum bit (qubit) [32], a two-level quantum-mechanical system. The qubit can be described by two orthogonal state vectors |0 and |1 . These basis states are deﬁned as

|0 = 1 , |1 = 0 .

(2.1)

0

1

An arbitrary pure state of a qubit can be written as

|ψ = cos(θ) |0 + eiφ sin(θ) |1 ,

(2.2)

with two real parameters θ, φ ∈ R. Therefore, the state |ψ is normalised, meaning ψ|ψ = 1, where ψ| stands for the vector dual of |ψ .

2.1.1 Stationary and ﬂying qubits
Quantum networks consist of remote quantum nodes that are linked together with quantum channels [3]. While quantum nodes are stationary and therefore matter based, ﬂying photons transmit quantum information between the nodes. There are many different options for the matter-based stationary qubits, including trapped neutral atoms, superconducting circuits, atomic ensembles and trapped atomic ions [33]. In this thesis, the electronic states of trapped atomic ions are used as stationary qubits [34], -
specially those of 40Ca+[35]. A qubit is encoded into two states of the single outer valence electron in 40Ca+. Different electronic states are used to encode the qubit in different chapters of this thesis.
For ﬂying qubits, quantum information can be stored for example in the polarization or the time bin of a single photon [36]. In this thesis, I

9

10 background

Figure 2.1: Bloch sphere for the qubits used in the thesis: a) A trapped-

ion qubit, where the logical states |0 and |1 are encoded into

two different electronic states of the single outer valence electron.

Often a ground state |g is deﬁned as |0 and an excited state

|e

as |1 . The logical states |±

are

deﬁned

as

√1 2

(|0

± |1 ) and

|±i = √1 (|0 ± i |1 ). b) The Bloch sphere and the notation used
2

in this thesis for polarisation encoded photon qubits. This thesis

uses for the diagonal |P = √1 (|H + |V ) and anti-diagonal
2

polarization |M = √1 (|H − |V ) instead of the often used labels
2

|D and |A in order to avoid confusion between the electronic D

state of the ion and diagonally polarized photons. Right-handed

circular polarization is deﬁned as |R

= √1 (|H
2

+ i |V ), left-

handed circular polarization is deﬁned as |L = √1 (|H − i |V ).
2

report on experiments where qubits are encoded into the polarisation of the photon. We deﬁne vertically-polarized photons |V as |0 and horizontally-polarized photons |H as |1 . For the notation used in this thesis to describe different superposition states of our trapped-ion qubits and of our photonic polarisation qubits, please see Figure 2.1.

2.1.2 State characterization

A more general formalism than the state vector for describing the state of an open quantum system is the density operator ρ. The density operator for the state in equation 2.2 is [32]

ρpure = |ψ ψ| =

cos(θ)2 e−iφ cos(θ) sin(θ)

eiφ cos(θ) sin(θ)

sin(θ)2

. (2.3)

The density matrix allows for the class of states

ρ = ∑ pi |ψi ψi| ,
i

(2.4)

2.1 qubits and quantum networks 11

where the probabilities pj are normalized (∑i pj = 1). These states include pure states (as equation 2.3, where p1 = 1) and mixed states (p1 = 1).
Using the Pauli operators,

σx = 0 1 , σy = 0 −i , σz = 1 0 ,

(2.5)

10

i0

0 −1

the density matrix of a single qubit can be expand to [32]

ρ

=

1 2

(Tr(ρ)

I

+

Tr(σxρ) σx

+

Tr

σy ρ

σy + Tr(σzρ) σz) ,

(2.6)

with I the identity and Tr(·) the trace operator. Note that Tr(σiρ) is the mean value for the observable σi, thereby connecting the density matrix to the outcomes of measurements in the laboratory.
In this thesis, we characterise the density matrices that we make in the lab with the following parameters.

Purity

The purity γ of a quantum state is deﬁned as:

γ = Tr ρ2 ,

(2.7)

where 0 ≤ γ ≤ 1 is a real number. The upper bound for the purity is given by a pure state with γ = 1 (see eq. 2.3), the lower bound for n qubits is given by 2−n, known as a fully mixed state. In this thesis we aim to produce pure states. Signiﬁcant deviations from a pure state indicates imperfections in our experiments (see section 5.8).

Concurrence

The concurrence C provides a way of quantifying how much entanglement there is in a two-qubit state [37, 38]. The concurrence is deﬁned as

C(ρ) = max{0, λ4 − λ3 − λ2 − λ1} ,

(2.8)

where 0 ≤ C ≤ 1 with λi the square roots of the eigenvalues, in decreasing order, of the matrix product ρρ˜, where ρ˜ is deﬁned as ρ˜ = (σy ⊗ σy)ρ∗(σy ⊗ σy). Any two qubit state for which C > 0 is entangled. The upper bound of the concurrence is C(ρ) = 1, which is
achieve e. g. by the Bell states

|Φ± = √1 (|00 ± |11 ) 2
|Ψ± = √1 (|01 ± |10 ) . 2

(2.9) (2.10)

12 background

Fidelity

The ﬁdelity F of two quantum states, ρ and σ, quantiﬁes how close they are to each other [39]. The ﬁdelity is given by

√√ 2

F(ρ, σ) = Tr

ρσ ρ ,

(2.11)

where 0 ≤ F ≤ 1. The case F = 1 is for identical states. The case F = 0 is for orthogonal states.

2.1.3 State reconstruction

As shown in equation 2.6, the density matrix can be written as a function of expectation values of the Pauli operators. Therefore, an unknown quantum state can be reconstructed by experimentally estimating the expectation values of the observables σx, σy and σz.
Each Pauli operator can be written as a sum of projectors into its eigenstates, e. g. σz = |0 0| − |1 1|. Therefore, equation 2.6 equals

ρ

=

1 2

1

+

P+ P+

− +

P− P− σx

+

Pi Pi

− +

P−i P−i σy

+

P1 P1

− +

P0 P0 σz

,

(2.12)

where Pj are the probabilities to measure the quantum state in the corresponding base.
The probabilities in equation 2.12 can’t be measured in the lab with absolute precision, since it would require an inﬁnite number of measurements. However, the expectation values and their uncertainties can be estimated from ﬁnite measurement results in the lab. Consider making N projective measurements of one particular observable and obtaining one speciﬁc outcome nj times. This leads to an estimated probability pj = nj/N with a uncertainty ∆pj of

∆pj =

pj(1 − N

pj)

.

(2.13)

In order to measure other observables, single qubit rotations can transform the measurement into the corresponding basis. Even though each probability in Equation 2.12 can be estimated, the state calculated by inverting Equation 2.12 most likely isn’t a physical state, due to the ﬁnite uncertainties. The next step is to ﬁnd the probabilities Pj from the measured estimation pj with the uncertainties ∆pj, which corresponds to a physical state that is most likely to have produced the measured results-
. We use the maximum likelihood method [40] to ﬁnd the most likely physical solution from the measured data.
In order to get uncertainties in the outcome, a Monte-Carlo simulation is performed. Here, multiple randomized new ’noisy’ probability estimates are created from the measured probability estimates pj using

2.1 qubits and quantum networks 13

the corresponding uncertainties ∆pj [41]. For each ’noisy’ dataset, the maximum likelihood method ﬁnds the most likely physical state to have generated the data. Out of these multiple physical states, the desired state parameters (e. g. , purity, ﬁdelity and concurrence) can be calculated. The standard deviation of all results is used as the measurement uncertainty.

In the work carried out in this thesis, the logical state of the ionqubit is measured using the electron shelving technique [42, 43]. This technique allows the states |g (bright, ﬂuorescing) and |e (dark, not ﬂuorescing) to be distinguished, corresponding to a projective measurement in the σz basis. In order to measure the remaining two Pauli observables, single qubit rotations are performed before the electron shelving measurement. These rotations are done using a laser pulse that is resonant to -
the qubit transition. In comparison to the measurement of photons in this thesis, the measurement of the ion state is deterministic in the sense that either the outcome |0 or |1 is obtained. That is, the probability of a third outcome like ’ion is lost’ or ’electron went to a third manifold’ is negligible. As such, the sum of probabilities for obtaining a |0 and |1 outcome is 1.
For photonic polarisation qubit states, the single photons are sent on a polarising beam splitter (PBS), which transmits |H and reﬂects |V , which corresponds to a projective measurement in the σz basis. In order to measure the remaining two bases, single qubit rotations have to be performed on the photon. These rotations are done using a quarter- and half-waveplate before the PBS. Unlike the electron shelving technique, due to the comparatively signiﬁcant probability of photon loss in optical ele-
ments, not every measurement leads to a successful experimental outcome. As such, the sum of probabilities for obtaining e. g. |H and |V outcome is not 1 but the total detection efﬁciency νtot,j. With two single photon detectors and knowing the total measured detection efﬁciencies for all projections νtot,j, the orthogonal states can be measured together. Then the estimated state probability is given by pj = nj/(Nνtot,j) with an uncertainty ∆pj of

∆pj =

pj(1 − pj) . Nνtot,j

(2.14)

In order to reconstruct the joint state of an ion qubit and a photon qubit, different measurements have to be made in total 9 (or 18, with only one photon detector) combinations of Pauli bases. The methods described were used to reconstruct the states for the ion-photon entanglement experiments in Chapter 5 and 8.

14 background

2.2 photon conversion by difference frequency generation

The discovery of the second-harmonic generation (SHG) [15] is often taken as the beginning of the ﬁeld of nonlinear optics. The term nonlinear comes from the nonlinear response of the polarization density P to the electric ﬁeld E of the light. Unlike the linear optical response of materials to light, the nonlinear response allows for light-light interaction. Here, one light ﬁeld modiﬁes the properties of the medium, which in turn modiﬁes the properties of the other light ﬁeld (and vice versa).
Materials with optical nonlinearities allow for the generation of light ﬁelds which are different in frequency compared to the input light ﬁelds. This so called frequency conversion can be used for many applications, like creating laser light at frequencies that are difﬁcult to obtain directly from lasers [44], or measuring light at frequencies that lie outside the bandwidth of a given detector [45]. The use of optical nonlinearities to achieve the frequency conversion of single photons (’quantum -
frequency conversion’ QFC) was proposed by [46] and ﬁrst demonstrated by [47].
In this section introduces the theory of nonlinear optics which underpins our approach for single photon frequency conversion. Section 2.2.1 details the second order nonlinearity of the dielectric polarization. Section 2.2.2 presents a model of the efﬁciency of single photon frequency conversion via difference frequency generation, ending with a summary of the desirable properties of a photon converter for quantum networks. The theoretical models are mainly adopted from [48–50].

2.2.1 Principles of nonlinear optics

Light propagating in a non-magnetic material with no free charges and no free currents can be described by the following modiﬁed Maxwell equations:

∇D = 0

∇H = 0

∇

×

E

=

−

∂µH ∂t

∇

×

H

=

∂D ∂t

,

(2.15) (2.16) (2.17)
(2.18)

with the displacement ﬁeld D, the magnetizing ﬁeld H, the electric ﬁeld E and the permeability µ. The displacement ﬁeld D is given by

D = 0E + P .

(2.19)

2.2 photon conversion by difference frequency generation 15

The polarization density (or simply polarization) P can be expressed as a power series:

P = 0χ(1)E + 0χ(2)E2 + 0χ(3)E3 + ... = P(1) + P(2) + P(3) + ... ,

(2.20)

with 0 the electric constant and χ(k) the kth order of the electric susceptibility. While linear optics approximate the polarization only with the ﬁrst term, that is linear in the electric ﬁeld, nonlinear optics refers to the other, higher-order,terms. In this thesis we are primarily concerned with the second order nonlinearity. The second order polarisation is given by

P(2) = 0χ(2)E2 .

(2.21)

For the case of two transverse electromagnetic (TEM) input laser light ﬁelds into the nonlinear material with the wave number kj, which propagate along the z-axis, the electric ﬁeld can be described as

E = E1e−iω1t + E2e−iω2t + c.c ,

(2.22)

with Ej = Aj(z)eikjz, where Aj(z) describes the amplitude of the jth ﬁeld along the z-axis. Substituting 2.22 into 2.21 yields

P(2) = 0χ(2)[E12e−2iω1t + E22e−2iω2t + 2E1E2e−i(ω1+ω2)t

+ 2E1E2∗e−i(ω1−ω2)t + c.c.] + 2

0χ(2)

[E1

∗
E1

+

E2 E2 ∗ ]

.

(2.23)

The complex amplitudes of the frequency components of this sum represent different types of second order polarizations:

P(2)(2ω1) = 0χ(2)E12

P(2)(2ω2) = 0χ(2)E22

P(2)(ω1 + ω2) = 2 0χ(2)E1E2

P(2)(ω1 − ω2) = 2

0

χ(2)

E1

∗
E2

P(2)(0) = 2

0 χ(2) ( E1 E1 ∗

+

E2

∗
E2

)

(SHG), (SHG), (SFG), (DFG),
(OR).

(2.24) (2.25) (2.26) (2.27) (2.28)

Where second harmonic generation (SHG) doubles the original frequency, sum frequency generation (SFG) outputs a frequency equal to the sum of the two input ﬁelds and difference frequency generation (DFG) outputs a frequency equal to the difference between the two input ﬁelds. Equation 2.28 described the process of optical rectiﬁcation (OR). For the following calculations we concentrate on DFG.

16 background

2.2.2 Efﬁciency

Combining the Maxwell equations 2.17 with 2.19 leads to

∇

×

∇

×

E

+

1 c2

∂2E ∂t2

=

−

1 0c2

∂2 P ∂t2

.

(2.29)

Next we substitute P with the sum of the linear term P(1) = 0χ(1)E and the nonlinear term P(2) and make the approximation1 ∇ × ∇ ×
E ≈ −∇2E, yielding

∇2E

−

n2 c2

∂2E ∂t2

=

1 ∂P(2) 0c2 ∂t2

.

(2.30)

Since DFG is a three-wave mixing process, three different light ﬁelds are involved. While the frequencies of the two input light ﬁelds j = 1, 2 are free parameters, for j = 3 the output frequency ω3 = ω1 − ω2 is ﬁxed. Using the DFG solution for P(2) (Equation 2.27) and the fact that the amplitude of the output electric ﬁeld vector A3 varies as a function of the position z, yields

d2 A3 dz2

+

i2k3

dA3 dz

=

2ω32χ(2) c2

A1

A2∗ ei(k1 −k2 −k3 )z

.

(2.31)

The second order electric susceptibility χ(2) is, in general a tensor

that describes the electric ﬁeld polarisation as a function of the direc-

tion of propagation through a material. However, in our case where

the propagation and polarisation directions are ﬁxed, we make the substitution χ(2) = 2de f f where de f f is a real number known as the

effective nonlinear constant. Next, we use the standard ’slow vary-

ing amplitude approximation’ [51]. This approximation assumes a

slow variation of the electric ﬁeld amplitude in space and time com-

pared to the frequencies and wavelengths of the laser ﬁelds. Therefore,

(|

d2 A3 dz2

|

|k3

dA3 dz

|)

can

be

assumed.

Using

this

approximation

and

repeating the calculation 2.2.2 for all three waves, three coupled wave

equations can be formed:

dA1 dz

=

iγ1 A2 A3e−i∆kz

,

dA2 dz

=

iγ2 A1 A3∗ei∆kz

,

dA3 dz

=

iγ3 A1 A2∗ei∆kz

,

(2.32)

with γj =

2ωjde f f cnj

and ∆k = k1 − k2 − k3. nj

is the reﬂective index and c

the vacuum speed of light.

1 This approximation applies, when the beams propagate along a principle axis of the crystal.

2.2 photon conversion by difference frequency generation 17

In this thesis we want to convert single photons. Therefore two ﬁelds are single photons—the single photon input and the frequencyconverted single photon output—while the third ﬁeld is a ’pump’ laser ﬁeld. We assign A1 for the electric ﬁeld amplitude of the input single photon beam, A2 for the electric ﬁeld amplitude of the pump laser and A3 for the electric ﬁeld amplitude of the converted single photon beam at our target frequency. Since A2 A1, only a minor part of the pump laser ﬁeld gets conver-
ted. Therefore, we assume a constant amplitude of the pump ﬁeld inside the nonlinear material, yielding

dA2 dz

=

0

.

(2.33)

Let’s assume ∆k = 0, known as phase matching. Phase matching can be approximated using the processes of quasi-phase matching, which is described in more detail in [48, 52]. With these assumptions, the equations 2.32 reduce to

dA1 dz

=

−jγ1 A2∗ A3

,

dA3 dz

=

−jγ3 A1 A2

.

Combining these equations yields

(2.34) (2.35)

d2 A1 dz2

=

−γ1γ3|A2|2 A3

=

−K2

·

A1

,

(2.36)

with K = γ1γ3|A2|2. While two ﬁelds (A1 and A2) are coupled into the nonlinear material, the third ﬁeld (A3) will be created inside the material. This leads to the boundary condition of A3(0) = 0, meaning there is no laser ﬁeld of the converted single photon beam at the input (z = 0) of the nonlinear material. After using this boundary condition, the solution of 2.36 is

A3(z) = γ3 eiφ2 A1(0) sin(Kz) , γ1

(2.37)

with φ2 the phase between the pump laser and the single photon input.
Now we want to express these light ﬁelds in terms of a measurable
value: the optical power. The optical power of the light ﬁeld is deﬁned as Pj = F IjdA, with F the mode area and Ij = 2nj 0c|Aj|2 the light intensity. We deﬁne the conversion efﬁciency η of a nonlinear material
with length L as the fraction of the number of converted photons N3 to the number of input photons N1 using Nj = Pj/h¯ ωj:

η(P2)

=

N3 N1

=

P3(L) ω1 P1(0) ω3

=

sin2(

ηnor P2L) ,

(2.38)

using

ηnor

=

γ1 γ3 2n2 0c

.

The

derivation

of

2.38

has

assumed

perfect

overlap

of the optical modes in the nonlinear material. The effect of imperfect

18 background

spatial mode matching can be modelled by adding a spatial beam overlap factor (ν) [53], where 0 ≤ ν ≤ 1:

η(P2) = ν2 sin2( η˜nor P2L)

(2.39)

and

η˜nor

=

ν2 γ1 2n2

γ3 0c

.

Equation 2.39 shows the dependency of the conversion efﬁciency on

the pump power P2. The pump power required to achieve maximum

conversion efﬁciency is

P2,max

=

π2 4L2η˜nor

.

(2.40)

In Chapter 4 we experimentally measure the dependency of the conversion efﬁciency on the pump power and compare it to the model 2.39.

2.2.3 Noise sources
Single photon conversion does not only output the wanted photons from the single photon source at the target frequency, but also unwanted photons at the same target frequency. In this thesis these photons are called ’added noise photons’. Three physical processes that can produce added noise photons in single photon conversion are: spontaneous parametric down-conversion (SPDC), Stokes Raman scattering and anti-Stokes Raman scattering. Overviews of these processes are now given.
Spontaneous parametric down-conversion of the pump laser
SPDC is a nonlinear process in which one photon with higher energy (referred to as a pump photon) splits into two photons of lower energy (the signal and idler photons). Unlike the second order nonlinear conversion processes described in Section 2.2, SPDC happens with only one input light ﬁeld and is stimulated by vacuum ﬂuctuations.The pump photons to split into two photons while the energy is preserved (ω1 + ω2 = ωp, with ωp the frequency of the pump laser) [54, 55]. Some experiments use SPDC to-
 create entangled photon pairs [56, 57], while in our experiment SPDC of our strong pump laser is an is an unwanted effect which creates added noise photons. Together with energy preservation, SPDC also has to preserve the momentum. Ideal quasi-phase matching of a nonlinear material enhances conversion efﬁciency at speciﬁc wavelengths. However, imperfections in the quasimatching (imperfect ’poling periods’) has proven to produce a white noise spectrum of SPDC photons with wavelengths longer than t-
he pump photons [58].

2.2 photon conversion by difference frequency generation 19

Figure 2.2: Sketch of the noise distributions affecting difference frequency generation in two regimes. (I) The long pump wavelength regime. Here, the pump wavelength is longer than the target wavelength. The target wavelength overlaps only with antiStokes Raman scattered noise from the strong pump. (II) The short pump wavelength regime. Here, the pump wavelength is shorter then the target wavelength. This leads to an overlap of target wavelength with SPDC noise and Stokes Raman scattering noise. -
While the Stokes and anti-Stokes noise goes down with higher wavelength difference to the pump, the SPDC noise stays constant over the spectra. To avoid SPDC noise within the target wavelength, the long-pump wavelength regime is used.

Stokes and anti-Stokes Raman scattering of the pump laser

Raman scattering in general is inelastic scattering of photons with molecules or crystals. The photon scattering process changes the vibrational energy of the crystal and the photon energy. While for Stokes Raman scattering the photon energy decreases, a anti-Stokes Raman scattering event increases the energy of the photon.
The characteristic Raman spectrum for common nonlinear materials is a well known property [59]. Even at energy shifts greater than 1000 cm−1 from the input ﬁeld, one still sees a measurable amount of scattered photons . In [60] the authors study this phenomena and could see Stokes scattering at the single photon level further away than expected in works before [61].
The ratio between the rate of Stokes scattered photons RS and the rate of anti-Stokes Raman scattered photons RaS follows a Boltzmann distribution [60, 62]

RaS = RS

ωp + ∆ω ωp − ∆ω

4 −h¯ ∆ω
e kBT ,

(2.41)

with ∆ω the Raman scattering frequency shift, kB the Boltzmann constant and T the temperature. Equation 2.41 shows that the fraction of anti-Stokes scattering decreases exponentially as the temperature is reduced linearly.

Long- and short-pump wavelength regime
We now consider the effects of the aforementioned noise processes on single photon frequency conversion via difference frequency generation. Two distinct regimes can be identiﬁed. The regime where the

20 background
pump laser has lower energy than that of the target output photon is known as the ’long pump wavelength regime’. The regime where the pump laser has higher energy than that of the target output photon is known the ’short pump wavelength regime’. As depicted in Figure 2.2, in the long-pump wavelength regime the target wavelength overlaps with anti-Stokes Raman scattered noise from the pump laser, while in the short-pump wavelength regime the target wavelength overlaps with Stokes Raman scattered an-
d SPDC noise from the pump laser. Once concludes that the long pump wavelength regime should yield signiﬁcantly lower added noise photons at the target wavelength. For single-step photon conversion to the telecom C-band wavelength of 1550 nm, long-pump wavelength conversion requires an initial input photon wavelength over 775 nm.
2.3 choice of ion species and transition
This section explains why the 854 nm single photon transition in 40Ca+is an excellent candidate for conversion to the telecom C-band. When selecting an ion species and internal transition suitable for telecom photon conversion we ﬁrst restrict ourselves to ions species in which quantum logic has been demonstrated. Next we consider only electric dipole transitions due to their strong coupling to optical ﬁelds, in comparison to higher order transitions. Given the wavelength of the remaining candidat-
e transitions, one can calculate the pump laser wavelength needed to convert, in a single difference frequency step, to any target wavelength.
Next, to avoid SPDC noise we restrict conversion processes to those in the long-pump wavelength regime (see Section 2.2.3). As a ﬁnal, softer, restriction to our transition choice we want to keep the wavelength ratio of the input photon to the pump laser below two. We picked a ratio of 2 as an approximate cutoff, noting that the following papers [16, 63] have achieved tens of percent conversion efﬁciency with ratios below this value. For higher ratios we expect a reduced conversion efﬁciency due t-
o difﬁculties in in-coupling and guiding such disparate wavelengths into the same waveguide.
Within the described constraints, Figure 2.3 shows possible frequency conversions that can be realised with trapped ions using a single step conversion process. One sees that the 854 nm transition in Ca+ is the ideal choice for conversion to 1550 nm. 40Ca+is also a very good candidate for quantum computing [22, 35, 64–66] and already single photons at 854 nm where produced and these photons have been collected from this species in free space [67] and using an optical cavity [31]. Other options are-
 possible for more than one step conversion or via four-wave mixing [68].

2.3 choice of ion species and transition 21
Figure 2.3: Possible one-step three-wave mixing conversion processes for established single-photon transitions in various trapped-ion species. The pump laser wavelength required to convert various input photon wavelengths (written in nm on the plot) to any given target photon wavelength is shown. The upper grey shaded area indicates the short-pump wavelength regime, where the target wavelength is contaminated by SPDC noise from the pump. The lower grey shaded area indicates where the ratio between-
 the input photon wavelength and the pump laser wavelength is higher than two. This regime makes the coupling of the light ﬁelds into the conversion waveguide challenging and therefore we expect a less efﬁcient conversion. The red star indicates the point where the 854 nm transition from 40Ca+is converted to 1550 nm, the telecom C-band, using a pump laser at 1902 mn. The 935 nm transition in Yb is another candidate, although the ratio of wavelengths represents a challenge. The red dot marked with -
Q indicates the experiment lead by Q. Quraishi in [21], where they convert 493 nm photons from Barium to 780 nm resonant with a 87Rb atomic ensemble. This result was achieved in 2019, during my thesis. The end-to-end conversion efﬁciency of ∼ 19% was mainly limited by the coupling efﬁciency into the PPLN waveguide of ∼ 30%, which is consistent with our concerns of ratios above 2.

Part II S E T U P, E X P E R I M E N T S A N D R E S U LT S

CORE SETUP AND KEY METHODS

3

3.1 principle of the experiment
Figure 3.1 shows the four main parts of the experimental setup used in this thesis. First, the ion-cavity system. 40Ca+, trapped in a linear Paul trap and placed into the centre of a cavity is used as a single 854 nm photon source. Second, a QFC system converts the 854 nm photons to 1550 nm. For the conversion process, difference frequency generation (DFG) is used, as described theoretically in Section 2.2. Third, the converted 1550 nm photons are coupled into a ﬁbre spool, of varying lengths. Fin-
ally, after travelling through the ﬁbre spool, the photons are spectrally ﬁltered and detected.
In the ongoing chapter details of each part of the setup are given. Section 3.2 presents the ion-cavity system. Section 3.5 describes the cavity-mediated Raman transition, which is used to produce photons from the ion. Details and performance of the conversion setup are shown in Section 3.3. Different ﬁlter and detector setups were used in the experiments reported in this thesis. The relevant details are given in the methods of each individual experiment. The details of all the photon detectors us-
ed in this thesis can be found in Section 3.4.
3.2 ion trap, optical cavity and vacuum chamber
Our cavity-integrated ion-trap system system was designed and constructed during the time of my PhD work at the Innsbruck IQOQI building. The design is based on that of the system at the nearby University of Innsbruck that was used in [31]. The common design elements are a 20 mm long near-concentric optical cavity with a 3D linear-Paul ion trap hanging inside it. The trap is rigidly attached

Figure 3.1: Overview of our experimental systems for long distance lightmatter entanglement: A calcium ion, placed inside a optical cavity produces an 854 nm photon. The photon is polarisationentangled with a qubit encoded into the electronic state of the ion. The photon is converted via quantum frequency conversion (QFC) to 1550 nm, the telecom C-band. After travelling over an optical ﬁbre up to 100 km long, the photon gets ﬁltered and detected.
25

26 core setup and key methods

to the top of the vacuum chamber. The cavity is attached, via translation stages, to the bottom of the vacuum chamber. Full details on the new cavity-integrated ion-trap system will be presented in the upcoming PhD theses of Josef Schupp [69] and Vojtech Krcmarsky [70]. An overview is given now.

Ion trap
We use a 3D radio-frequency linear Paul trap with a DC endcap to ion separation of 2.5 mm and ion to blade minimum distance of 0.8 mm. The trap electrodes are made of titanium, coated with gold and are mounted on sapphire holders. The ion trap hangs from the top of the vacuum chamber, as shown in Figure 3.2. The ion-string axis is vertical. The trap drive frequency used for experiments in this thesis is 23.4 MHz. The radial secular frequencies are ωx ≈ ωy = 2π × 2.0 MHz, split by approximately 10 -
kHz and the axial frequency is ωz = 2π × 0.927 MHz. Atoms are loaded from a resistively heated atomic oven and ionised via a two photon process involving 375 nm and 422 nm laser light. The orientations of the cavity-ion-trap system in respect to the laser light ﬁelds are shown in Figure 3.3.

Cavity parameters

The cavity used for the experiments in this thesis was mainly designed

and built by Josef Schupp. A detailed description on how it was built

and characterized will be given his thesis [69] and is summarised in

our paper [71]. The optical cavity is near-concentric with a length l =

19.9057 ± 0.0003 mm and radii of curvature ROC = 9.9841 ± 0.0007

mm, determined from simultaneous measurements of the free spectral

range (FSR) and higher-order TEM mode spacing (assuming identical

mirror geometries) [69, 72]. From this we calculate an expected cavity

waist of ω0 = 12.31 ± 0.07 µm and a maximum ion-cavity coupling rate of gmax = 2π · 1.53 ± 0.01 MHz.

The polishing of the mirror substrates was done by Perkins Precision

Development, Boulder (Colorado). The coating was done by Advanced

Thin Films (Boulder). The transmissions T1,2 of our cavity mirrors were measured [69] by applying the method described in [73], yielding T1 = 2.2 ± 0.3 ppm, T2 = 97 ± 4 ppm, such that the combined mirror losses

from scattering and absorption L1+2 = 17 ± 5 ppm. At a wavelength of

854

nm,

the

ﬁnesse

of

the

TEM00

mode

is

F

=

2π L

=

54(1)

×

103,

with

the total cavity losses L = T1 + T2 + L1+2 = 116 ± 2 ppm, determined

from

measurements

of

the

cavity

ringdown

time

τC

=

F π

·

l c0

,

with

c0

the speed of light in vacuum. From the cavity ringdown time one can

calculate the cavity linewidth 2κ = 1/τC = 2π · 140 ± 3 kHz, κ being

the half-width at half maximum.

3.2 ion trap, optical cavity and vacuum chamber 27
Figure 3.2: Photograph of the cavity-ion-trap system: The trap is hanging from the top ﬂange of the vacuum chamber (not shown) into the centre of the two cavity mirrors. The cavity mirrors are mounted on the bottom ﬂange of the vacuum chamber and are surrounded by two collimating lenses. This picture was shot by David Jordan.
The probability that a photon inside the cavity exits through mirror T2 (designated output mirror) is Pomuatx = T2/(T1 + T2 + L1+2) = 0.83 ± 0.03. Pomuatx is the maximum photon collection probability from the ion in our system (with the current mirrors). The ion-cavity system at the University has Pomuatx = 0.16 [31].
The cavity length is stabilised via the Pound-Drever-Hall (PDH) method [74] to a laser at 806 nm with a linewidth on the order of 1 kHz [75]. The 806 nm wavelength lies far from any transition in 40Ca+ to minimise AC Stark shifts on the ionic transitions. The cavity is locked to a TEM01 mode, allowing a single ion to be placed in the central intensity minimum to further minimise AC Stark shifts.
The cavity waist is centred on the ion via course tuning of a 3D piezo stick-slip translation-stage system (Attocube). Before experiments, photon detection efﬁciency is optimised by placing the ion in a cavity anti-node via ﬁne tuning of the cavity position along its axis by applying a small bias voltage to the corresponding piezo stage.

28 core setup and key methods
Figure 3.3: Orientations of the cavity-ion-trap system. The atomic ions (red sphere) are centred in both a 3D radio-frequency linear Paul trap (gold coated electrodes) and an optical cavity with transmissions of T1,2. Along the cavity axis (top), showing: the ∼ 4.229 Gauss DC magnetic ﬁeld (quantisation axis) generated by rings of permanent magnets and the circularly-polarized Raman laser for generating 854 nm cavity photons. Photo-ionization (PI) laser for a two step ionization of calcium at 422 -
nm and 375 nm. The photons produced by the electron-shelving method [42, 43] are collected with an objective and ﬁltered from the 729 nm qubit laser before detected with a photo-multiplier tube (PMT) and a camera (CAM: ANDOR iXon Ultra). Two different 393 nm Raman drive laser beams used in the photon generation process (CMRT) are available: the global Raman drive laser (393 nm global) is used for most experiments with one ion, the later developed addressed Raman drive laser (393 nm addresses) can -
address single ions in a multi-ion string. Following a Raman pulse, an 854 nm cavity photon exits the cavity via the left mirror (transmission T2). The photon then passes the following elements: in-vacuum collimating lens (C); vacuum chamber viewport (VP); 3 ﬁlters to remove the 806 nm laser light to which cavity length is continuously and actively stabilised.
Some key challenges that were overcome to realise our cavity parameters are now brieﬂy described. First, the super polishing of the surfaces of such tightly curved (10 mm ROC) mirror substrates seems not to be a commercially available process as standard and we are therefore grateful to Perkins Precision, Boulder, who did it as a custom job, achieving an RMS roughness of 1 ± 0.2 Å and 1.5 ppm scattering losses on a test piece from the batch measured by Perkins Precision. Second, mirror coating via-
 ion beam sputtering was performed by

3.3 conversion crystals 29
Advanced Thin Films. Detailed information on the mirror coatings can be found in [69]. Third, the observed birefringence of cavities built using these mirrors could be minimised by rotating mirror pairs with respect to each other, leading to a sub-linewidth (2 · κ) splitting of 14 ± 2 kHz in the ﬁnal cavity (measured by Josef Schupp using the method of [76]). The fourth step involved a multi-stage procedure to glue the mirrors into position to achieve the near-concentric cavity. The mirrors are gl-
ued into metal rings, in turn glued to single axis piezos for cavity-length stabilisation, in turn glued to a rigid metal spacer spanning the cavity length: the only tunable parameter once glued is the cavity length over the range of the piezos. The ﬁfth and ﬁnal key step was for the cavity to survive the ion-trap chamber vacuum baking process, meaning that the ﬁnesse stays constant before and after the baking. The Vacuum setup was baked at 80◦C for approximately 2 weeks and was led by fellow PhD -
student Vojtech Krcmarsky, as well as chamber assembly. The temperature for the baking is limited by the glass transition temperature of the cavity glue. Before the bake the cavity ﬁnesse was measured to be 59(1) × 103. No measurable drop of the ﬁnesse directly after the the bake was measured. After the cavity has been in vacuum for a few weeks, the ﬁnesse dropped to 54(1) × 103.
3.3 conversion crystals
For most of the experiments described in this thesis, two LiNbO3 crystals (’chips’) with integrated waveguides are used, each with a length of 48 mm. Each crystal contains 12 individual ridge waveguides (LiNbO3 layer on LiTaO3 substrate) milled out along its length. The chips were fabricated by NTT electronics. While each chip has 12 individual waveguides, a single guide in any one chip is used for each experiment. The two waveguides used have slightly different dimensions. The ﬁrst waveguide in t-
he beam path1, used for the polarization maintaining scheme in Section 4.3, has a width of 12.1 µm and a height of 11.0 µm, given from the manufacturers data sheet. Its poling period of 22.375 µm results in an estimated phase matching temperature of 38◦C, as provided by the datasheet. The second waveguide in the beam path2 has a width of 12.4 µm and a height of 11.1 µm, given from the manufacturers data sheet. Its poling period of 22.375 µm results into a estimated phase matching temperature of 36-
◦C. The waveguides are single mode for 1550 nm and 1902 nm, multimode for 854 nm and are anti-reﬂection coated for all those wavelengths on each facet (R ≤ 1%). The conversion process is phase matched when all three optical ﬁelds have the same linear polarisation; the orthogonal polarisation is supported in the guide but remains unconverted. The
1 Chip: S/N 3636474, group G1, waveguide WG1 2 Chip: S/N 3636475, group G1, waveguide WG1

30 core setup and key methods

chips are delivered already glued onto an oven system. This oven system contains of a Peltier-element3 for heating and cooling and a thermistor (10 kΩ at 25◦C). Using with a PID-controller, a feedback loop to control the crystal temperature to a given set temperature was built. More details about the feedback loop can be found in Section A.4 of the appendix.
The ﬁbre-coupled conversion chip, used in Section 4.5, was produced at Stanford University in the group of Martin Feyer by Carsten Langrock. The layout of this chip can be found in the Section A.3 of the appendix. The design of the oven used for the temperature stabilization of this ﬁbre-coupled device which was designed and built within the work of this thesis, can be found in Section A.4 of the appendix. In total we got 4 different devices from Stanford with 32 waveguides on each. Since the devi-
ces are ﬁbre-coupled, only one waveguide per chip is used. The ﬁbre-coupled device used in the experiment in Section 4.5 was temperature stabilized at 74.4◦C. The ﬁbre-coupled devices, unlike the ridged waveguides from NTT, are buried waveguides and they convert and guide only one polarization.

3.4 single photon detectors

For 854 nm photons, we have two ﬁbre-coupled avalanche photo diodes (APD) and two ﬁbre-coupled superconducting nanowire singlephoton detectors (SNSPD). The APDs are Laser Components COUNT10C-FC. The SNSPDs are Scontel FCOPRS-CCR-2TW75+2SW85. The corresponding efﬁciencies and dark count rates are shown in table 3.1. The SNSPDs were only available towards the end of my PhD thesis, hence not all experiments were carried out with them.

854 nm Detector Efﬁciency in % Dark count rate

APD 1 40 10

APD 2 40 10

SNSPD 1 87
0.3(1)

SNSPD 2 88
0.5(1)

Table 3.1: Efﬁciency and dark count rate for 854 nm single photon detectors. APDs: Laser Components COUNT-10C-FC. SNSPDs: Scontel FCOPRS-CCR-2TW75+2SW85. The values for the APDs are given by the manufacturers speciﬁcation sheet, the numbers for the SNSPDs are directly measured by a Scontel representative in the lab after the installation using a calibrated single photon source.

3 FerroTec 9501/023/040B

3.4 single photon detectors 31

For the detection of 1550 nm photons we have one ﬁbre-coupled solid state detector (ID Quantique ID230 FR-SMF) and two ﬁbrecoupled SNSPDs (Scontel FCOPRS-CCR-2TW75+2SW85). The corresponding efﬁciencies and dark count rates are shown in table 3.2.

1550 nm Detector Efﬁciency in % Dark count rate

Solid state 10
1.9(2)

SNSPD 1 74
0.6(1)

SNSPD 2 75
0.6(1)

Table 3.2: Efﬁciency and Dark count rate for 1550 nm single photon detectors. Solid state: ID Quantique ID230 FR-SMF. SNSPDs: Scontel FCOPRSCCR-2TW75+2SW85. The efﬁciency of the solid state detector is given by the manufacturer, the efﬁciencies for the SNSPDs are measured by a Scontel representative the lab using a calibrated single photon source. The dark count rates are measured by a Scontel representative in the lab by blocking the detector input.

The detectors produce an electronic output pulse to signal the detection of a photon. These pulses are recorded with a time tagging module (Swabian Instruments, Time Tagger 20). The time tagging module has 8 different input ports and perform a range of different functions on the inputs. The two main functions used in this thesis are now described.
First, the most general function is the direct recording of the events (input pulses) including the time stamps and the channels. This function is used when the absolute photon arrival time is needed e. g. for reconstructing the temporal photon wavepacket. The recording of the time stamps is also used when the recorded data has to be post processed e. g. combined with the ion state detection data. Since this method needs post processing, live view of the measured data is difﬁcult.
The second function can be easily displayed live and is called count between. This function counts the electric pulses from the photon detectors between a start and a stop ﬂag, which is deﬁned by one of the input ports of the detector. In our experiments, those ﬂags are sent from the PulseBox that controls our experiment overall (see Section A.1 of the appendix). A rising edge of this channel starts the counting, a falling edge stops the counting. We start and stop the counting for each photon gen-
eration attempt around the estimated photon arrival time at the detectors. Since we produce single photons, the counts during this time frame are ether 0 (attempt was not successful) or 1 (attempt was successful). The rare events, where together with a successful attempt a noise photon happened are ignored. The number of the detected photons during these time frames are sent to the control PC where they are recorded and displayed. Since the count between method can be easily implemented and displa-
yed almost in real time

32 core setup and key methods
while scanning experimental parameters, it is mostly used for setting up the experiment and optimizing the sequence parameters.
For all the experimental data shown in this thesis, the recording of the time stamps was used.
Figure 3.4: Level scheme of 40Ca+and photon generation scheme. In this ﬁgure, the levels in 40Ca+are displayed that are used in our experiments to produce single 854 nm photons with a bichromatic cavity-mediated Raman transition. Following optical pumping, the ion (single outer valence electron) is in the state |S = |42S1/2,mj=−1/2 . Photons are generated via cavity-mediated Raman transitions (CMRT). In case of Ω2 = 0, the 393 nm Raman laser pulse leads to the generation of a horizontally-polarize-
d |H photon in the optical cavity and the electron ends up in the state |D = |32D5/2,mj=−3/2 . In the case of Ω1 = 0 a verticallypolarized |V photon is generated in the optical cavity and the electron ends up in the state |D = |32D5/2,mj=−5/2 . Here H stands for the linear polarization along the B-ﬁeld quantisation axis (π-photons). The V polarization stands for the orthogonal linear polarization, produced by the projection of the σ-polarized photons into the plane perpendicular to the cavity dire-
ction (and perpendicular to the B-ﬁeld quantisation axis). The overall detuning is set to ∆1/2π = 403 ± 5 MHz. The D-state Zeeman splitting in our setup is δ/2π = 7.107(1) MHz. During a bichromatic CMRT both detuned Raman laser are driving the corresponding transition with the same strength, ideally ending up in an entangled ion-photon state of √1 (|D, H + |D , V )
2

3.5 854 nm photon generation 33
3.5 854 nm photon generation
In Section 3.5.1 an overview of our method for producing single 854 nm photons from 40Ca+via a cavity is provided. Section 3.5.2 will extend this method to produce single photons which are entangled via their polarisation with the ﬁnal electronic state of the ion. More detailed theoretical models of the techniques presented in this section are shown in [31, 69, 71, 77].
3.5.1 Single photons via a cavity-mediated Raman process
Our photon generation scheme is based on a cavity-mediated Raman transition (CMRT) [78, 79]. For photons not entangled with the ion, the CMRT couples the initial state |S |0 = |42SJ=1/2, mj= − 1/2 |0 , where the second ket vector describes the cavity photon number, to the metastable ﬁnal state |D |1 = |32DJ=5/2, mj= − 5/2 |1 via the intermediate excited state |P |0 = |42PJ=3/2, mj=3/2 |0 . The three atomic states are shown within the energy level scheme in Figure 3.4. States |P and |D have ﬁnite l-
ifetimes of 6.9 ns and 1.1 s, respectively.
A circularly-polarised drive laser (1 × 102 Hz linewidth [75]) addresses the |S ↔ |P dipole transition at 393 nm with a detuning ∆2/2π = 410(5) MHz and a Rabi frequency Ω2. The cavity is detuned by the same amount from the 854 nm |D ↔ |P dipole transition, and its length is actively stabilised via the Pound-Drever-Hall method to a laser at 806 nm wavelength, as described in [69]. Both this laser and the drive laser are stabilised to a common in-vacuum reference cavity with a drift rate of 720 Hz/h-
r [75].
The maximum ion-cavity coupling strength on the |D ↔ |P transition was measured to be gexp/2π = 1.25(1) × ζ MHz [69], where the geometric factor ζ ≤ 1 is the projection of the cavity polarisation onto the atomic dipole moment. The relationship between gmax (Section 3.2) and gexp is given by the equation gexp = gmax × CG × η where CG is the Clebsch Gordan coefﬁcient of the D’ - P transition. Note that the coupling strength g of the cavity is given by properties of the cavity (length and mode area a-
t the ion), the relevant spontaneous atomic decay rate and the projection of the cavity polarization onto the atomic dipole moment. Further details can be found in the Appendix of [71] and in [69]. A 4.23 G magnetic ﬁeld, set by rings of permanent magnets, is aligned perpendicular to the cavity axis and parallel to the propagation direction of the drive ﬁeld. The atomic quantisation axis is chosen to be parallel to the magnetic ﬁeld axis, and photon polarisation along this axis is denoted horizont-
al (H). The polarisation of the photon generated in the cavity is vertical (V), as determined by the projection of the |g ↔ |e dipole moment √onto the plane perpendicular to the cavity axis, corresponding to ζ = 0.5 and gexp/2π = 0.88(1) MHz. The effective coupling strength of the

34 core setup and key methods

CMRT is Ωeff = gΩ2/(2∆2). The CMRT competes with spontaneous decay with an effective rate γeff = [Ω2/(2∆2)]2γ, where γ = 11.49(3) MHz is the decay rate of |e [80]. For the second order correlation experiment in Section 6 we used the described CMRT to produce single vertically-polarized photons. For the Hong-Ou-Mandel experiment in Section 7 we used different transitions to produce ether horizontally or vertically-polarized photons.

3.5.2 Ion-photon entanglement via a bichromatic cavity-mediated Raman process

The CMRT in Section 3.5.1 produces single photons with a deﬁned

polarization. For producing photons where the polarization of the

photon is entangled with the electronic state of the ion, a bichromatic

CMRT is used, which was ﬁrst demonstrated in [31].

For the bichromatic CMRT the drive laser contains two co-propaga-

ting frequencies. While one drive laser frequency has a detuning

∆1/2π = 403 ± 5 MHz from |P and generates a horizontally-polarized photon and the electron ends up in |D = |32DJ=5/2, mj= − 3/2 , the second drive laser frequency has a detuning ∆2 = ∆1 + δ393
(with δ393 = δ the detuning between |D and |D ) and generates
a vertically-polarized photon and the electron ends up in |D . When

both transitions occur with the same probability, the state |S, 0 evolves

to

√1 2

(|D,

H

+ |D , V

), which is a maximum entangled state where

the phase is set by the relative phases of the laser ﬁelds involved in

generating and characterising the state [31].

Section 5 of this thesis uses the bichromatic CMRT to produce

entangled ion - photon pairs. In Section 8 this technique was used to

demonstrate parts of a quantum repeater.

The state readout of the ion-qubit in our experiment is performed

via the standard electron shelving technique as summarised in Section

2.1.3. This method is able to distinguish between ground states (|S )

and excited states (|D and |D ). After CMRT, the ion stays in a su-

perposition between the two excited states and therefore can’t be read

out directly. First, we map the electron population from |D to the |S

via a 729 nm π pulse (Figure 3.4). Now the standard electron shelving

technique can be used to perform state detection. The aforementioned

process implements a projective measurement into the eigenstates of

the σz basis (Pauli spin-1/2 operator). To perform measurements in

other bases e.g σx (σy), as required for full quantum state tomography,

an additional 729 nm π/2 pulse on the |S to |D transition with a 0

(π/2) phase is applied after the π pulse and before the electron shelv-

ing, to rotate the ion-qubit measurement basis. In order to produce an

ion-photon state whose phase does not depend on the detection time

of the photon, the frequency difference of the two used 729 nm laser

pulses δ729 (|S ↔ |D and |S ↔ |D ) and the frequency difference

3.5 854 nm photon generation 35
of the two tones of the bichromatic Raman pulse δ393 should equal the detuning δ between |D and |D : δ = δ393 = δ729.

POLARISATION-PRESERVING PHOTON FREQUENCY CONVERSION

4

This chapter includes the setup and results of a polarization maintaining frequency converter, which converts light resonant with the 854 nm transition of 40Ca+to the 1550 nm telecom C-band. The main results are published in Appl. Phys. B 123, 228 (2017) [17] and the authors are Victor Krutyanskiy (VKru), Martin Meraner (MM), Josef Schupp (JS) and Ben Lanyon (BPL). VKru and MM designed and built the conversion setup. JS built the 854 nm laser setup. Experimental data taking was done by VKru and MM-
. Data analysis and interpretation was done by VKru, JS, MM and BPL. All authors contributed to the paper writing. The project was conceived and supervised by BPL.
This chapter presents both an extended discussion of the work that is summarized in [17] and additional experimental measurements regarding limitations of the total efﬁciency and characterization of ﬁbre coupled frequency converters designed and built by the group of Martin Fejer in Stanford. At time of writing those results were unpublished. Experimental data were taking by Vojtech Krcmarsky and Martin Meraner.
In this chapter, experiments that demonstrate photon conversion from λs = 854 nm (s = signal) to λt = 1550 nm (t = target, Telecom C-band), via difference-frequency generation (DFG) in a waveguide-integrated χ(2) crystal, using a strong pump laser at λp = 1902 nm are presented. The 854 nm laser light is the wavelength of the |D to |P transition of 40Ca+ions. For the experiments in this chapter we use attenuated laser light to simulate single photons.
The content of this chapter is now described, the signiﬁcant majority of which is taken directly from our paper [17]. Section 4.1 contains a general introduction to the project. Section 4.2 presents a polarisationdependant telecom conversion scheme for 854-nm light. Here, the achieved conversion efﬁciency is shown and the underlying limits are studied. Additionally, the photon noise generated by the conversion process is presented. Section 4.2 includes Figure 4.3 and an associated discussion, whic-
h were not published as part of [17]. Section 4.3 presents a polarisation-independent conversion scheme allowing translation of a polarisation qubit from 854 nm to 1550 nm. The con-

37

38 polarisation-preserving photon frequency conversion
version efﬁciency of a ﬁbre-coupled device and and its advantages and disadvantages are shown in Section 4.5. This section is entirely new and was not published in [17]. Finally in Section 4.6 this chapter is summarized and ideas on further improvements are presented.
4.1 introduction
There is a current multi-disciplinary research initiative to develop lightmatter quantum networks [3]; remote nodes, consisting of preciselycontrollable quantum matter in which quantum information is stored and processed, that are interconnected with quantum light, such as single photons. These networks, envisaged over distances from table-top to intercontinental, could enable a range of new science and technology, including scalable quantum computing [7], secure communication [81] and enhanced se-
nsing [82].
Given the great success in encoding, manipulating, storing and reading-out quantum information in their electronic states, trapped atomic ions represent a powerful platform with which to build, or integrate into, the nodes of quantum networks [26, 83]. Indeed, an elementary quantum network consisting of ions in two traps a few meters apart, has been entangled via travelling ultraviolet photons [10]. A challenge is that most readily-accessible photonic transitions in trapped ions lie at wavelengths-
 that suffer signiﬁcant absorption loss in materials for manipulating and guiding light, thereby limiting the internode networking distance. Another challenge is that ionic transitions are ﬁxed and narrowband, such that, except in rare cases [84], they cannot be interfaced with other examples of quantum matter to enable new ion-hybrid quantum systems [85]. Note that frequencydistinguishable quantum systems can be linked via their photons, though at the cost of reducing the efﬁciency of making that-
 link [86].
The aforementioned challenges could be overcome using quantum frequency conversion (QFC) [47, 87]; a nonlinear optical process in which a photon of one frequency is converted to another, whilst preserving all the quantum and classical photon properties. QFC of single photons has recently been studied in a variety of contexts [60, 88–92] and is typically achieved using three-wave mixing in a secondorder nonlinear (χ(2)) crystal. It has been shown that QFC can preserve a broad range of photon proper-
ties, including ﬁrst- and second-order coherence, and pre-existing photon-photon entanglement [87, 93, 94]. QFC could therefore act as a quantum photonic adapter for trapped ions, allowing their high-energy photonic transitions to be interfaced with the lower-energy photons better suited for long-distance travel through optical ﬁbres, or with other forms of quantum matter.
Interfacing trapped ions with the telecom wavelengths of 1310 nm (O band) or 1550 nm (C band) is particularly appealing: these wavelengths suffer minimal transmission losses (0.32 and 0.18 dB/km, respectively

4.2 polarisation-dependent conversion scheme 39
for SMF-28 Ultra ﬁbre) through optical ﬁbres and a broad range of established technologies and infrastructure for their manipulation and transmission exist. The telecom wavelengths are therefore an ideal choice for a universal standard for light-matter quantum networks, allowing similar and dissimilar quantum matter to interface over both short and long distances.
Telecom frequency conversion of photons connected to several examples of quantum matter has recently been demonstrated, including quantum dots [16, 95–97], cold gas atomic ensembles [98–100] and solid-state ensembles [101]. Applying QFC to trapped ions is challenging. The comparatively low rate and efﬁciency with which photons have been collected from / absorbed by an ion demands a highly efﬁcient and low noise conversion process. Readily accessible photonic transitions in ions also lie in the ult-
raviolet or visible regime, which suffer high absorption and strong dispersion in nonlinear crystals. Furthermore, direct (single step) conversion of those photons to telecom in the so called ‘long pump wavelength regime’ is not possible, leading to additional noise processes during conversion [60]. Nevertheless, signiﬁcant progress has been made in overcoming these challenges [102– 104]. In [104], for example, the authors convert attenuated laser light at 369.5 nm (a transition in Yb+) to 1311 nm-
, achieving a waveguide efﬁciency of ∼ 5% (including coupling losses) and a total efﬁciency for ﬁbre-coupled output photons of 0.4%.
4.2 polarisation-dependent conversion scheme
4.2.1 Experimental details
A summary of the experimental setup is now provided, which is further detailed in Figure 4.1. For the pump we use a 1902 nm Tmdoped ﬁbre laser (AdValue Photonics AP-SF1) and for the 854 nm input a diode laser (Toptica DL pro). The diode laser is stabilised to within a few MHz of the ionic transition using a wavemeter lock (High Finesse WSU10). Both signal and pump are delivered to the photon conversion setup using polarisation-maintaining single-mode optical ﬁbre, spatially overlapped using a dich-
roic mirror and freespace coupled into a ridge waveguide (see Section 3.3) via an aspheric lens. A second asphere at the waveguide output collimates the output ﬁelds, which are then sent to various ﬁltering and analysis stages. The chip is temperature-stabilised (see Section A.4 of the appendix) and a waveguide is chosen with a quasi-phase matching temperature of 38◦C. The spectral acceptance bandwidth of the phase matched conversion process centred at 854 nm is measured to be ∼ 0.2 nm

40 polarisation-preserving photon frequency conversion

(82 GHz)1, which agrees with theoretical calculations based on refractive indices of bulk LiNbO3 at the corresponding wavelengths [105]. Note that this acceptance bandwidth for photon conversion is orders of magnitude broader than 854 nm photons from the ion and from our narrowband laser source, and does not therefore act as a ﬁlter. The temperature bandwidth (FWHM) of the phase matched conversion process is measured to be 2.4 ± 0.2 ◦C. For the temperature bandwidth the conversion efﬁciency for di-
fferent temperatures of the waveguide was recorded and the full-width half-maximum (FWHM) of the converted telecom light was calculated.

1902nm fiber laser

1902nm

/2
PBS

2x LP
1600nm /2

telescope 854nm diode laser

854nm

PBS /2

PM
A
iris
iris
DM

SPD

FBG

PM

1550nm 1550nm

D

LP 1400nm
PM B 854nm
SP 1600nm
C

DM
SP 1600nm

/4

AS waveguide AS

/2

X

FM

Y

Z

FM

4x (ND filter OD3)

BP 1550nm
Etalon
LP 1400nm DM

Figure 4.1: Setup for polarisation-dependent frequency conversion from 854 nm to 1550 nm. LP 1600 nm – longpass ﬁlters (Edmund Optics 84-680); DM – dichroic mirror (Layertec 103472, highly reﬂective for 854 nm, transmissive for 1550 and 1902 nm); FM – gold ﬂip mirror; AS – 11mm asphere lenses (Thorlabs A220TM) positioned by XYZ translation stage; SP 1600 nm – shortpass ﬁlter (Edmund Optics 84-656, OD5 at 1902 nm); LP 1400 – longpass ﬁlter (Thorlabs FELH1400) prevents detecting second harmonic of p-
ump; BP 1550 nm – bandpass ﬁlter (Thorlabs FB-1550, 63% transmission, OD5); Etalon – air-spaced Fabry-Pérot cavity (SLS optics): 250 MHz linewidth, 12.5 GHz free spectrum range, peak transmission 95% at 1550 nm, extinction 103; FBG – ﬁbre Bragg grating ﬁlter (Advanced Optical Solutions): bandwidth 15 pm (2 GHz), transmission 60% at 1550 nm, extinction 103; PM – power meters; SPD – avalanche photo diode based single telecom photon detector .

1 The spectral acceptance bandwidth was measured by detuning the 854 nm diode laser whilst recording the converted 1550 nm output power. The presented bandwidth is the FWHM

4.2 polarisation-dependent conversion scheme 41

4.2.2 Results

4.2.2.1 Efﬁciency

We begin by sending 315 µW of 854 nm laser light to the waveguide,

optimising the in-coupling to maximise the population of the lowest

order (fundamental) mode using a beam proﬁler2 at the output. Using

an optical power meter3 the input 854 nm power is measured at point

A (see Figure 4.1), P8A54, the output at point B, P8B54 and the transmission at 854 nm is quantiﬁed as T8B5/4A = P8B54/P8A54. For zero pump power, we ﬁnd T8B5/4A = 0.73 ± 0.01.
The known relevant optical losses at 854 nm between points A and

B are: two uncoated aspheres (measured transmission Ta = 0.93 each);

shortpass ﬁlter (measured transmission Tsp = 0.96 ± 0.03); dichroic
mirror (reﬂection Rd = 0.99). When considering these losses we ﬁnd a waveguide transmission of T8w5a4veguide = T8A5/4B/(Ta2TspRd) = 0.89 ± 0.04, that now contains losses only due to waveguide in-coupling and

propagation. The input (output) 1902 nm pump power is measured at point A (C), yielding a pump transmission of T1C9/02A = 0.57 ± 0.01. The output 1550 nm power P1D550 is measured at point D.
In the following we report on investigations of the system conversion

efﬁciency as a function of the pump laser power. For the pump laser

power we use the value measured at point C (P1C902), which is after the waveguide and last aspheric lens. This power, which we call the out-

coupled pump power from now on, gives a lower bound on the pump

power inside the waveguide. The actual pump power inside the guide

is higher. The expected transmission of 1902 nm through the uncoated

output asphere is 0.92 (twice 4% reﬂection due to the un-coated air-

glass interface), meaning that a better estimate for the pump power at

the output facet of the waveguide is a factor 1/0.92 higher than P1C902. For the attenuation in a LiNbO3 waveguide the manufacturer gives

an upper bound of 0.2 dB/cm for all used wavelengths. Using an 0.2

dB/cm for the 1902 nm attenuation, one expects a transmission of 0.8

through the waveguide - yielding our best estimate for the in-coupled
pump power of 1/(0.8 × 0.92) × P1C909. Figure 4.2 presents the measured conversion efﬁciency, quantiﬁed
by ηcDla/sAsical = P1D550/P8A54 × 1550/854 (equivalent to ratio of photon numbers), as a function of output pump power P1C902. The depletion of the 854 nm signal is also shown, quantiﬁed by the transmission at 854 nm T8B5/4A. The results show a maximum conversion efﬁciency 0.46 ± 0.01 for an out-coupled pump power of 200 mW.

When removing the known relevant losses in optics around the

waveguide at 854 nm and 1550 nm, one obtains a maximum achieved

external

classical waveguide

conversion

efﬁciency

of

waveguide
ηclass

=

2 Beam proﬁler: Spiricon Pyrocam IIIHR 3 Power meter: Thorlabs PM100D + S130VC

42 polarisation-preserving photon frequency conversion
0.59 ± 0.03, which still contains losses due to in-coupling into the waveguide and waveguide propagation losses 4.
Assuming that the waveguide transmission losses are equal at 854 nm and 1550 nm, 0.89 ± 0.04 is the maximum conversion efﬁciency, limited by the transmission loss through the waveguide. The value that we obtain, ηcwlaasvseguide, is 0.30 ± 0.05 lower than this maximum. Figure 4.2 shows that, at the point of maximum conversion efﬁciency, a fraction 0.22 ± 0.01 of unconverted 854 nm light remains at the waveguide output (when accounting for known passive optical losses). One sees, therefore, that the-
 majority of ‘missing conversion efﬁciency’ lies in unconverted 854 nm light.
In the case of perfect phase matching and no losses, the DFG process for three optical modes in a waveguide allows for complete depletion (conversion) of the signal wave. However, the situation is more complicated when several spatial (or axial [106]) modes are involved. Indeed, our waveguides are multimode at 854 nm and a fraction of 854 nm populates higher-order modes due to imperfect mode matching at the input. The different modes have different effective refractive indices than the fundamental-
 mode and are not, therefore, simultaneously phase matched. As a consequence, the conversion efﬁciency of higher order modes is weak and they remain largely unconverted.
The population of 854 in higher-order spatial modes of the waveguide can be seen in beam proﬁle measurements at the output of the waveguide. We measured the beam proﬁle of the out-coupled 854 nm laser by replacing the power meter at point B with an infrared beam proﬁler5. Two different measurements are taken. First, while no pump laser ﬁeld is coupled into the waveguide. Second, while the optimal pump power is coupled into the waveguide to provide maximum achievable conversion efﬁciency, leaving b-
ehind the remaining unconverted 854 nm beam. The ﬁlters after the waveguide and before the beam proﬁler allows to display the 854 nm beam only. Figure 4.3a)b) shows the two recorded measurements of the out-coupled 854 nm beam without and with conversion. The converted part of the 854 nm beam can be calculated by subtracting the unconverted beam from the total beam, which is shown in Figure 4.3c). In the case of optimum conversion, the remaining unconverted 854 nm light is distributed into high ord-
er spatial modes. Improved mode matching of the input 854 nm light into the fundamental waveguide mode is therefore expected to increase the conversion efﬁciency. However, since the achieved conversion efﬁciency is already high enough to perform long distance quantum networking, this mode matching was not performed or further investigated.
4 0.59 = 0.46/(0.93 · 0.93 · 0.96 · 0.94 · 0.995), where the denominator contains transmissions at the relevant wavelength for: in-coupling asphere; out-coupling asphere; shortpass ﬁlter; dichroic mirror; longpass ﬁlter.
5 Infrared beam proﬁler: Spiricon Pyrocam IIIHR

4.2 polarisation-dependent conversion scheme 43
Figure 4.2: Conversion efﬁciency, of 315 µW of 854 nm laser light to 1550 nm, as a function of out-coupled pump power. Solid red spheres: conversion efﬁciency to 1550 nm ηcAla/sBsical. Unﬁlled red circle: waveguide conversion efﬁciency to 1550 nm ηcwlaasvseigcualide, after accounting for known passive optical losses. Solid red line: theoretical ﬁt by the function η = A · sin2 ( ηnor Pp L) with ﬁtting parameters A = 0.45, ηnor = 0.56W−1cm−2. Filled blue diamonds: fraction of remaining 854 nm light -
T8B5/4A after the waveguide. Unﬁlled blue diamond: fraction of remaining 854 nm light after the waveguide, when accounting for known passive optical losses. Visible error bars stem from uncertainty in passive loss of optical elements. The out-coupled pump power was measured after the waveguide and the aspheric lense at point C of Figure 4.1.
We conclude from this experiment that a waveguide conversion efﬁciency of 0.59 ± 0.03 was achieved, limited by the unintentional excitation of higher-order waveguide modes at 854 nm. An increased efﬁciency should be possible by exploring methods to reduce higherorder mode excitation, such as more careful mode matching between the Gaussian free-space mode and the elliptical waveguide fundamental mode. Our efﬁciency is comparable to the highest values achieved in frequency conversion experiments per-
formed to date [53, 60, 95, 107, 108].
4.2.2.2 Noise at the single-photon level Any way in which the strong pump laser ﬁeld can introduce photons directly at the output telecom wavelength introduces noise that can dominate the single-photon QFC signal. We call the rate of such noise the noise photon rate (NPR) to distinguish it from the intrinsic detector dark count rate (DCR).

44 polarisation-preserving photon frequency conversion
Figure 4.3: Measured 854 nm beam proﬁles after the ﬁrst waveguide: a) 854 nm light ﬁeld after the waveguide without conversion (no pump laser). b) Remaining unconverted 854 light ﬁeld after the waveguide for optimal conversion (200 mW of out-coupled pump laser). c) Subtraction of the images in b) from the one in a). This corresponds to the depleted (converted) fraction of the 854 nm light. One sees that high order spatial modes are not converted. This data was taken with the Pyrocam IIIHR from Spi-
ricon/ Ophir. The colour scale of the displayed data follows an arbitrary scale as the camera is not calibrated. This ﬁgure and the associated discussion was not part of [17].
At 200 mW (out-coupled), the pump photon ﬂux in the waveguide is vast ( 2 × 1018 Hz) such that even extremely weak processes in the waveguide, through which pump photons are converted directly to telecom, can overwhelm the output. The key process through which this happens on propagation through the crystal is anti-Stokes Raman scattering, where pump photons receive energy from phonons in the crystal (see Section 2.2.3). Anti-stokes Raman spectra for similar ridge waveguides to ours are presented -
in [109] and show that the large spectral separation between our 1902 nm pump and 1550 nm target is far from any Raman resonance peaks. Nevertheless, signiﬁcant noise at single photon level has been observed at spectral separations well beyond that expected by theory [60], covering even the large spectral separation in our experiments.
We study the noise photons at the waveguide output for 200 mW out-coupled pump light only, using the analysis path with a photon detector in Figure 4.1. That analysis path consists of various removable ﬁlters and ﬁnally a single-mode-ﬁbre-coupled, free-running InGaAs solid-state single photon detector (IDQuantique ID230 NIR). The detector is operated in a regime with the highest ratio of efﬁciency (10%, as speciﬁed) to dark counts (1.8 ± 0.1 counts/s), achieved with a deadtime of 20 µs.
For room temperature operation and a 12 nm ﬁltering bandwidth, we observe a total detector click rate of 1.4 kHz, which is completely dominated by noise photons. When accounting for our detector efﬁciency of 0.1, that noise rate corresponds to 14 kHz of photon noise in the ﬁltering bandwidth before detection (Fig. 4.4). The NPR is seen to reduce with crystal temperature T, as one would expect for anti-Stokes Raman scattering, approximately following the phonon occupation

4.2 polarisation-dependent conversion scheme 45

Noise photons, Hz

20k

12 nm filtering

15 pm

16k

2 pm

12k

8k

20
10
0 250 260 270 280 290 300 310 320 330
Temperature, K
Figure 4.4: 1550 nm noise photons produced directly by interaction of the strong pump with the waveguide. Plotted values are ten times the count rate of the single photon telecom detector, for 200 mW of out-coupled pump light of the waveguide alone (Figure 4.1). The factor of ten accounts for the 10% detector efﬁciency, yielding the total noise photons within the ﬁltering bandwidth before detection. Rates are shown for three different ﬁltering bandwidths centred at 1550 nm, as labelled, and for di-
fferent temperatures of the waveguide. Filled points represent experimental data. Empty points show the count rate expected for the corresponding ﬁltering bandwidth, when starting with the observed values for 12 nm bandwidth and assuming that the noise spectrum is white (points slightly shifted to the left for clarity). 12 nm (squares) and 15 pm (circles) ﬁltering bandwidth values are normalised to total transmission efﬁciency of 2 pm bandwidth ﬁltering stage (triangles), i. e. multiplied by facto-
rs 0.98 and 0.82 respectively, to allow for direct comparison. Solid line shows the ﬁt by a Boltzmann distribution.

number

given

by

the

Boltzmann

distribution

NPR

=

Ae−

h¯ ∆ω k

·

1 T

,

where

∆ω is pump-target frequency difference; h¯ , k are Planck and Boltzmann

constants, A is a ﬁtting parameter. By extrapolation of the theoretical

ﬁt, operation at −50 ◦C could provide a total noise reduction by a

factor of 9. This offers a way to reduce photon noise, without the need

for narrowband ﬁltering.

The NPR at the quasi-phase matching temperature is seen to reduce

in proportion to the ﬁltering bandwidth (Figure 4.4), consistent with

the noise source being broadband and white. Using our narrowest

ﬁltering bandwidth of 2 pm at 1550 nm (250 MHz bandwidth, trans-

mission 0.26 ± 0.01 at 1550 nm), the NPR before detection is reduced

to 4 ± 2 Hz. Note, in Section 4.3 we employ a few picometer ﬁltering

stage with a greatly improved transmission at 1550 nm.

46 polarisation-preserving photon frequency conversion

SPD counts, Hz SNR

160
140
120
100
80
60
40
20 2 1 0 0

80 60 40 20 0 100 200 300 400 500 600 Pump power, mW

Figure 4.5: Conversion efﬁciency, of single-photon-level 854 nm laser light to 1550 nm, as a function of pump power. Black diamonds: telecom single photon detector count rate for an average of 10 kHz 854 nm photons at the waveguide input (signal). Black solid line: ﬁt by function η = A · sin2 ( ηnor Pp L) with ﬁtting parameters A = 128.6, ηnor = 0.50W−1cm−2. Red circles: single photon detector count rate when the 854 nm input is blocked (noise), Red straight line: linear ﬁt of noise. Blue spheres:-
 signal to noise ratio. All errors bars represent one standard deviation and derive from Poissonian photon counting statistics. The out-coupled pump power was measured after the waveguide and the aspheric lense at point C of Figure 4.1.

4.2.2.3 Efﬁciency and signal-to-noise ratio, at the single photon level
In order to determine a signal-to-noise ratio (SNR) one has to determine an appropriate signal: the rate of 854 nm photons one can expect to be available for converting in experiments involving a trapped 40Ca+ion. Using calibrated neutral density ﬁlters, the input 854 nm laser power in our setup is attenuated to a value corresponding to an average photon rate of 10 kHz (2 fW) before the input aspheric lens, to replicate a trapped-ion source. Figure 4.5 presents the photon count rate of the 1550 nm-
 detector as a function of pump power and for our 2 pm bandwidth telecom ﬁlter. At the peak conversion efﬁciency (again at around 200 mW pump) 136 ± 3 Hz counts are recorded, corresponding to a total detected conversion efﬁciency of 0.0136 ± 0.0004. When removing the 0.10 efﬁciency of our detector this corresponds to a photon in/out conversion efﬁciency of ηout/in = 0.136: the probability that an incoming 854 nm photon is converted to a single-mode-ﬁbrecoupled 1550 nm photon that has passed the ﬁl-
tering stage. This result is consistent with our classical light measurements, leading to an ex-

4.3 polarisation-preserving conversion 47
ternal waveguide conversion efﬁciency of 0.62 ± 0.03 when removing the ﬁltering losses.
Since the detected total noise rate is only a few Hz, the SNR proﬁle shown in Figure 4.5 closely follows the conversion efﬁciency curve, peaking at 66 ± 6 at 200 mW. A SNR > 1 would therefore be possible for an input 854 nm photon rate 60 times lower than was used (∼ 160 Hz) bringing QFC experiments using 854 nm photons from an ion within reach of existing experimental systems.
4.3 polarisation-preserving conversion
For applications in quantum networking, the conversion process should preserve any photonic degree of freedom used to encode quantum information. While the single-waveguide conversion scheme presented in Figure 4.1 is suitable for e.g. time-bin encoded photonic qubits, only one polarisation component is converted. Polarisation qubits are appealing as they are straightforward to manipulate, analyse and can be preserved through long optical ﬁbres [110]. Furthermore, polarisation entanglement between-
 ion and 854 nm photon, as well as state mapping to photonic polarisation have been achieved experimentally [31, 111].
4.3.1 Experimental details
The total experimental schematic is shown in Figure 4.6. Our polarisation-preserving conversion scheme, which employs two independent waveguide crystals in series, is now brieﬂy summarised. The conversion process in each waveguide is phase matched when all three optical ﬁelds have the same linear polarisation (vertical |V ); the orthogonal polarisation (horizontal, |H ) is supported in the guide but remains unconverted. Consider an arbitrary input 854 nm single-photon polarisation state α |H854 + -
β |V854 and input classical pump polarisation state δ |Hpump + γ |Vpump . The ﬁrst waveguide in Figure 4.6 converts the component β |V854 to β |V1550 with an efﬁciency that depends on γ. Next, a Fresnel Rhomb (equivalent to a broadband waveplate) performs a ﬂip operation on the polarisation of all three optical ﬁelds, converting e.g. |H to |V and vica versa. The second waveguide then converts the remaining 854 nm polarisation component, with an efﬁciency that depends on δ. In the case of balanced -
conversion efﬁciency for each polarisation, and after renormalisation, the output telecom photon polarisation state is α |V1550 + β |H1550 . In this setup we employ a ﬁltering stage with a 4 pm bandwidth and transmission of 73% for ﬁbre-coupled telecom output photons, afforded via a volume holographic grating. All the used equipment is listed in Figure 4.6. Note that interferometric path length stability between the waveguides is not required as all optical ﬁelds follow the same path. Any phase

48 polarisation-preserving photon frequency conversion

1550nm 854nm

parabolic mirror

/2
/4
AS

waveguide

Fresnel X

Rhomb

Y

Z

waveguide

DM 1902nm
Etalon
shortpass
1600nm /4

SPD
Bandpass 1550nm

parabolic mirror

AS longpass /2 PBS
1400nm

holographic grating

Figure 4.6: Setup for polarisation-preserving frequency conversion from 854 nm to 1550 nm. Beam paths for in-coupling ﬁelds before dichroic mirror (DM) are the same as in ﬁg. 4.1. Gold parabolic mirrors are used for simultaneous focusing/collimation of all ﬁelds (F = 15 mm, Thorlabs MPD00M9); holographic grating – volume Bragg grating, reﬂection bandwidth 0.2 nm (25 GHz), 95% reﬂection (OptiGrate); bandpass 1550 nm ﬁlter has 12 nm bandwidth and 95% transmission (Thorlabs FBH-1550). Shortpass, long-
pass and etalon ﬁlters are the same as used in Section 4.2. Aspheres and parabolic mirrors are placed on XYZ translation stages. The ﬁrst waveguide rests on an X translation stage and the second on XZ stages. Each crystal is independently temperature stabilized for optimal phase matching. Waveplates in the 854 nm input path enable preparation of arbitrary input polarization states. Waveplates (plus polarizing beam splitter - PBS) in the 1550 nm output path enable the polarisation measurement basis-
 to be changed arbitrarily.

difference acquired by different polarisation components in the setup is much smaller than the coherence length of both lasers used in this work as well as ion-produced photons in future work.
4.3.2 Results
4.3.2.1 Efﬁciency and noise, at the single-photon level
To characterise the device, 854 nm laser light is injected with an average of 10 kHz photons to mimic the ion source. The power in each polarisation component of the pump is set to both maximise and balance the conversion efﬁciency for each polarisation component of the 854 nm light (approximately 200 mW of the relevant pump polarisation component in-coupled into each waveguide). When injecting V (H) polarised 854 nm light, telecom photons are detected at a rate of 304 ± 6 Hz (302 ± 6 Hz) without -
polarisation analysis. This corresponds to a total efﬁciency of 0.304 ± 0.006 (0.302 ± 0.006) when

4.4 future applications: long-distance transmission. 49
removing detector inefﬁciency. That is, the probability of obtaining a ﬁbre-coupled telecom output photon is ∼ 0.30 for both polarisations. The total measured (noise) count rate, when blocking the input 854 nm light, is 7.6 ± 0.4 Hz, yielding a device signal to noise ratio of ∼ 40. That noise count rate corresponds to a ﬁbre-coupled telecom NPR of 58 ± 4 Hz, when subtracting dark counts and removing detector inefﬁciency.
4.3.2.2 Polarisation-preservation
To determine the extent to which the polarisation is preserved, as it is converted from 854 nm to 1550 nm, we perform process tomography [32]. Speciﬁcally, the 6 standard basis states for polarisation qubits are injected (horizontal, vertical, diagonal, antidiagonal, rightand left-circular) using waveplates in the 854 nm input path (ﬁg. 4.6). For each input state, we project the output state successively onto each of the 6 basis states using waveplates and a polarizer in the 1550 output path, befo-
re single photon detection. From these measurements, the process matrix χij is reconstructed via an optimisation to ﬁnd the most likely process to have generated the data (maximum likelihood estimation [112]). The process matrix describes the process ε applied to any input polarisation density matrix ρ via ε(ρ) = ∑ij χijOiρO†j , where Ok are a set of operators which form a basis for the set of operators on the polarisation qubit state space. We choose the basis {O1, O2, O3, O4} = {I, Z, X, −iY}, c-
orresponding to the identity and standard Pauli operators, respectively. To quantify polarisation-preservation, we maximise the χ11 (identity) element of the reconstructed process matrix when allowing for arbitrary unitary operations (via a simple numerical search), obtaining a value of 0.93 ± 0.01: this is the minimum ﬁdelity with which any input polarisation state is translated through the device and detected, up to a ﬁxed known unitary operation, and is more than sufﬁcient to preserve polarisat-
ion entanglement between ion and photon, as discussed in the following section. We ﬁnd that a ﬁdelity of 0.95 ± 0.01 would be achieved when accounting for the measured NPR and DCR. The remaining inﬁdelity is attributed to errors in the angular settings of waveplates by less than a degree.
4.4 future applications: long-distance transmission.
In this section we consider future possibilities for long distance ionphoton entanglement based on current progress in trapped ions setups, commercial ﬁbre technology and our photon converter and telecom detector presented above. Converting photons from 854 nm to 1550 nm offers a reduction in attenuation in optical ﬁbre from 3 dB/km to 0.2 dB/km, respectively. When accounting for the ﬁnite 30% efﬁciency, one ﬁnds that our conversion system offers an improved rate of photon

50 polarisation-preserving photon frequency conversion
transmission for all ﬁber lengths greater than 1.9 km. The advantage becomes profound for longer distances: over 50 km (100 km) of ﬁber, the transmission probability using our device would be 3% (0.3%), compared to 1 × 10−13% (1 × 10−28%) at 854 nm.
Using photons to distribute entanglement between remote network nodes is an important task in quantum networking. We are interested therefore in assessing the distance over which our conversion and detection setup could allow for entanglement to be detected between a photon and an ion. To answer this question, we consider the case where the ion emits 854 nm photons on demand, at a rate of 10 k√Hz and in the maximally entangled state (|g, H854nm + |e, V854nm )/ 2, where g (e) are orthogonal electro-
nic states of the ion [31]. Next, we apply a modiﬁed version of the process matrix describing our converter to the photon part of the entangled state. The process matrix is modiﬁed in the sense that it is reconstructed from experimental data after subtracting detector dark counts, leaving imperfection due to photon noise. Photon noise is treated separately from dark counts at this point, since the former attenuate at the same rate as photons from the ion through a subsequent optical ﬁbre, while de-
tector dark counts do not. Finally, we apply a second process to the photon state which accounts for the 30% conversion efﬁciency, transmission probability through optical ﬁbre of length L, detection efﬁciency (10%) and dark counts at 1.8 Hz (modelled by a depolarisation channel weighted in proportion to transmitted signal). Entanglement in the ﬁnal ion-photon state is quantiﬁed by the negativity [113], although other measures give equivalent results. The result is that entanglement between ion an-
d photon is present up until 84 km of optical ﬁbre. Beyond this distance, detector dark counts overwhelm the (imperfect) entanglement in the converted ion-photon state. For reference, after 84 km, telecom photons from the conversion process should be detected at a rate of 6.3 Hz, compared with the dark counts of 1.8 Hz, yielding a SNR of (6.3+1.8)/1.8 = 4.5 (photon noise is negligible).
The achievable distance for ion-photon entanglement in our setup could be signiﬁcantly extended by considering only those detection events that occur when the ion could have generated a photon. A generation rate of 10 kHz for photons from the ion allows for 100 µs per photon, of which less than 20 µs consists of the photon wave packet itself [31]. The remaining 4/5 of the time is allocated for reinitialising the ion after each attempt, during which time counts at the detector can be ignored, allow-
ing the dark counts to be reduced to 1.8/5 = 0.4 Hz. With such a reduced dark count rate, the maximum achievable distance for the observation of ion-photon entanglement in our setup is 122 km.
Note that, under ambient conditions the polarisation in a 25 km telecom ﬁbre spool is known to be passively stable over timescales of several minutes [110]. To correct for polarisation rotations in long ﬁbres

4.5 fibre-coupled waveguides 51
between remote locations, one could consider periodic calibrations with classical ﬁelds, or even calibrating continuously using classical ﬁelds in parallel with the quantum signal: exploiting the narrowband nature of trapped-ion networking photons for ﬁltering.
Transmission of light-matter networking photons through optical ﬁbres many tens of kilometres long poses an interesting problem: the photon travel time eventually becomes longer than the minimum time between photons set by the generation rate. In our example we considered a 10 kHz generation rate, corresponding to a photon every 100 µs, whereas the travel time over 84 km (100 km) is 420 µs (610 µs). With a single ionic-qubit in a trap, one must wait to see if a generated photon is detected after t-
he ﬁbre, before attempting to generate another photon, or entanglement with the ﬁrst photon will typically be lost. For single ion qubit experiments, the maximum generation rate is therefore limited by the photon travel time. With multiple ionic qubits in a trap, however, one could envisage different ways to overcome the photon travel time limit. For example, after generating a photon with which it is entangled, the state of the ion could be swapped into one of a collection of co-trapped ions, fre-
eing up the original ion to generate a new photon without destroying entanglement with the ﬁrst photon. First-step experiments in this direction have recently been performed [28].
4.5 fibre-coupled waveguides
A challenging part in setting up and maintaining our bulk-optic conversion systems is the misalignment of the beam paths over time. The above described conversion system is built in a temperature stabilized lab and after peaking up all couplings the total device efﬁciency degrades approximately 10% after an hour. So the whole setup has to be peaked up at least once every working day. Direct ﬁbre-coupling to a waveguide could provide more stability. Also setting up such a system is much easier, sin-
ce no free-space waveguide coupling and beam overlapping has to be achieved. Fibre-coupled waveguides also need overall less space.
The group of Martin Fejer in Stanford designed, developed and shipped to us ﬁbre-coupled conversion chips for conversion of 854 nm to 1550 nm via DFG. The chip has buried waveguides, achieved with a reverse-proton-exchange process [114]. Unlike the ridge waveguides used in the experiments reported in the previous sections, buried waveguides only guide one polarization. The design layout data sheet for the chips can be found in Appendix A.3. These chips have two single-mode input ﬁbres, one for the-
 signal (854 nm) and one for the pump (1902 nm). These ﬁbres are glued to a micro-fabricated adiabatic tapered coupler. This coupler contains two single-mode waveguides for the input ﬁelds which are then adiabatically tapered into one single-

52 polarisation-preserving photon frequency conversion
Figure 4.7: Scheme for characterization of the ﬁbre-coupled down conversion devices from our Stanford collaborators. The ﬁbre-coupled device has two input ﬁbres, 854 nm (signal) and 1902 nm (pump), and one output ﬁbre for the target light at 1550 nm. The 854 nm input is directly connected to a ﬁbre-coupled diode laser. The 1902 nm light is ﬁbre coupled and connected to the second input. An adiabatically tapered coupler (ATC) combines both light ﬁelds before they are coupled into the PPLN waveguide-
. The output ﬁbre is connected to a collimator and split by a dichroic mirror (DM). The reﬂected 854 nm light can be directly measured. The transmitted 1550 nm light has to be ﬁltered from the pump with a 1610 nm short pass (SP 1610) and a 1400 nm long pass (LP 1400).
mode waveguide, ready for injection into the conversion waveguide. The coupler is glued to the PPLN conversion chip, such that the single output waveguide mode of the taper couples into one of the PPLN waveguides. On the output facet a single-mode ﬁbre for 1550 nm is glued directly.
As well as the conversion chips used in the previous sections, the Stanford chips have to be temperature stabilized to provide phase matching. Both a mount for the Stanford chips and a temperature stabilisation system which provides a temperature stability below 0.1◦C using PID feedback controlled Peltier-elements were designed and built. More information and the design of this temperature controlling mount for the chips are given in Appendix A.4.
As mentioned before, due to the buried waveguides used in the Stanford chip design, only one polarization is guided through the waveguide. The polarization maintaining conversion scheme demonstrated in Section 4.3 works only when all polarizations are guided through the chip. Therefore, our polarization maintaining conversion scheme wouldn’t work for the Stanford chips and another scheme would be needed. For these Stanford chips we only looked into the conversion of a ﬁxed polarisation.
The experimental setup used to characterise the conversion efﬁciency is shown in Figure 4.7. The 854 nm input port of the ﬁbrecoupled chip is connected with a ﬁbre joiner to a ﬁbre-coupled 854 nm laser, resonant with the |P to |D transition of 40Ca+. The 1902 nm pump light from the ﬁbre laser is ﬁbre coupled and connected with a ﬁbre joiner to the 1902 nm input of the ﬁbre-coupled device. The output ﬁbre of the chip is directly connected to a collimator. The free space output light is then separat-
ed on a dichroic mirror into a

4.5 fibre-coupled waveguides 53
854 nm path and a 1550 nm path. The reﬂected 854 nm light can be directly measured with a power meter since the dicrotic mirror acts as a ﬁlter for 854 nm. A short pass at 1610 nm and a long pass at 1400 nm only transmits the out-coupled 1550 nm light in the transmitted path enabling direct measurement of the converted 1550 nm light with a power meter. The input power of the 854 nm light is 45 µW at point A of Figure 4.7 directly before the input ﬁbre joiner. The 1902 nm input was measured at poin-
t B before the input ﬁbre coupling. The coupling efﬁciency of the 1902 nm light into the ﬁbre was measured to be 80%. The out-coupling efﬁciency for the 1550 nm light from the ﬁbre to free-space was measured to be 83% limited by a non-optimal collimator (60FC-4-M8-10). This coupler was not anti-reﬂection coated for 1550 nm light.
The measured conversion efﬁciency, as a function of the input pump power, for the chip C4 which has a length of 67 mm (data sheet Appendix A.3), is presented in Figure 4.8. The maximum conversion efﬁciency, measured for an 1902 nm pump power inside the input ﬁbre of 360 mW, is 0.44 ± 0.01. Both Figure 4.8 and the maximum conversion efﬁciency have been corrected for the known coupling losses described in the previous paragraph. Under those conditions only 1.3 ± 0.3% of the in-coupled 854 nm power w-
as measured at the output. Meaning 98.7(3)%, which we call the signal depletion, of the in-coupled 854 nm light is ether converted to 1550 nm or lost by transmission and coupling losses. This close to 100% signal depletion indicates a high spatial beam overlap of the two in-coupling beams. The signal depletion observed for the ridge waveguides (Section 4.2.2) was 22 ± 1%, showing how much better the ﬁbre-coupled chips perform in this parameter.
Despite the observed near-perfect signal depletion, the conversion efﬁciency of the ﬁbre-coupled waveguides is maximally 44%. For the free-space coupled device in Section 4.2.2 we measured a conversion efﬁciency of 0.46 ± 0.01. We expect that the lower conversion efﬁciency compared to the signal depletion is caused by the coupling and transmission losses in the whole device. One important problem we found was temperature dependent coupling losses. Due to geometrical restrictions the oven heats the-
 nonlinear crystal only, not the coupler. The set-temperature of around 74.4 ◦C is much higher then room temperature. During operation the coupling losses change due to the heating of the coupler caused by the hotter crystal. This leads to a long settle time of a few hours until the conversion efﬁciency stabilises, which makes the optimization of the set-temperature hard. A new oven design, which heats both the crystal and the coupler would make the temperate adjustment easier.
The Stanford devices have not yet been used with single photons, since the free-space setup with ridge waveguides has similar efﬁciencies and offers a polarisation-insensitive process.

54 polarisation-preserving photon frequency conversion
Figure 4.8: Conversion efﬁciency of ﬁbre-coupled Stanford conversion chip as a function of pump power. Solid red spheres: conversion efﬁciency to 1550 nm. Solid red line: theoretical ﬁt by the function η = A · sin2 ( ηnor Pp L) (Equation 2.39) with ﬁtting parameters A = 0.44, ηnor = 0.15 W−1cm−2. Filled blue diamonds: fraction of remaining 854 nm light after the device.
4.6 conclusion and discussion
We have demonstrated a polarisation-preserving photonic interface between the 854 nm transition in trapped Ca+ and the 1550 nm telecom C band. A total photon in to ﬁbre-coupled telecom photon out efﬁciency of 30% was achieved, for a free-running photon noise rate of ∼ 60 Hz within our ﬁltering bandwidth of 250 MHz. This highly efﬁcient and low-noise converter will enable telecom conversion using existing trapped-ion sources of 854 nm single photons with a SNR > 1. In combination with near-future t-
rapped-ion systems, our converter allows for the distribution of ion-photon entanglement over more than 100 km of optical ﬁbre, opening up the possibility of building large-scale light-matter quantum networks. (see Chapter 5)
In principle, our device works equally as well in reverse: allowing 1550 nm photons to be converted to 854 nm via sum-frequency generation with the pump laser, which is used in Chapter 7.
For the experiments presented in this work it was not necessary to stabilise the frequency of the pump laser, since the conversion process bandwidth (several tens of GHz) is large compared to the frequency drift rate of our pump laser (few hundred MHz per hour). However, the spectral properties of the pump laser will be transferred onto the converted photon: whether that is important depends on the particular experiment that one wishes to perform with frequency converted

4.6 conclusion and discussion 55
photons. For example, for the observation of ion-photon polarisation entanglement, frequency broadening of the converted photon should play no role. For entanglement swapping between remote nodes via one- or two-photon detection [83], frequency distinguishability between photons becomes important (see Chapter 7). For schemes where remote nodes absorb photons that have been frequency converted (e.g. conversion to telecom then back to 854 nm for absorption by a remote ion), special care may need to -
be taken to stabilise the pump laser frequency to minimise the spectral footprint on the photons. One could also consider using the temporal and spectral properties of the pump as a way to coherently modify those properties of the converted photons, to overcome bandwidth mismatches between remote quantum matter.
During the writing of [41] manuscript in 2018 we became aware of complimentary work to ours, in which polarisation-preserving conversion from 854 nm to 1310 nm (Telecom O band) was achieved using a single ridge waveguide scheme[94].

T E L E C O M - WAV E L E N G T H I O N - P H O TO N E N TA N G L E M E N T

5

This chapter includes the observation of entanglement between an ion and a telecom-photon that travelled over 50 km of optical ﬁbre. That result is published in npj Quantum Inf 5, 72 (2019) [41] and the authors are Martin Meraner (MM), Victor Krutyanskiy (VKru), Josef Schupp (JS), Vojtech Krcmarsky (VKrc), Helene Hainzer (HH) and Ben Lanyon (BPL). All authors contributed to the design, development and characterisation of the experimental systems. In particular, JS focused on the ion trap and optic-
al cavity, MM on the photon conversion system, VKrc on the ion trap, HH on laser frequency stabilisation and VKru and BPL on all aspects. Experimental data taking was done by VKru, VKrc, MM and JS. Data analysis and interpretation was done by VKru, JS, MM and BPL. All authors contributed to the paper writing. The project was conceived and supervised by BPL.
This chapter presents both an extended discussion of the work that is summarized in [41] and new experimental results in which 100 km ion-photon entanglement is observed. At time of writing the 100 km results are unpublished. Experimental data taking was done by VKru, VKrc and MM. Speciﬁcally sections 5.1 to 5.3 are, except for minor modiﬁcations, taken directly from [41]. Section 5.4 contains an as-yet-unpublished results obtained after several major improvements were made to our setup. Section 5-
.5 presents a conclusion to the chapter.

5.1 introduction
Envisioned quantum networks [3] consist of distributed matter-based quantum nodes, for the storage, manipulation and application of quantum information, which are interconnected with photonic links to establish entanglement between the nodes. While the most ambitious form of a quantum network is a collection of remote quantum computers, far simpler networks with a handful of qubits at each node could already enable powerful applications in quantum enhanced distributed sensing, timekeeping, cryptog-
raphy and multiparty protocols [6].

57

58 telecom-wavelength ion-photon entanglement
Entanglement has been achieved between two atoms in traps a few ten meters apart [9], between two ions in traps a few meters apart [10] and recently between two nitrogen-vacancy centres 1.3 km apart [11]. In these experiments, photon-matter entanglement is ﬁrst generated, then detection of one or two photons heralds remote matter-matter entanglement (entanglement is “swapped" from matter-light to mattermatter).
A current goal is to signiﬁcantly scale up the distance over which quantum matter can be entangled to a hundred kilometres or more, which are practical internode spacings to enable large-scale quantum networks. Some key challenges to entangling matter over such distances are now described. First, the aforementioned matter systems emit photons at wavelengths that are strongly absorbed in optical waveguides (such as optical ﬁbre), limiting the internode distance to a few kilometers. For example, in -
the present work 854 nm photons are collected from a trapped atomic ion. While the ∼3 dB per km losses suffered by 854 nm photons through state-of-the-art optical ﬁbre allows for few kilometre internode distances, transmission over 50 km of ﬁbre would be 10−15. Single-photon quantum frequency conversion to the telecom C-band (1550 nm) would offer a powerful solution: this wavelength suffers the minimum ﬁbre transmission losses (∼ 0.18 dB per km, yielding 10 % transmission over 50 km) and is theref-
ore an ideal choice for a standard interfacing wavelength for quantum networking. Photons from solid-state memories [115], cold gas memories [98, 116], quantum dots and nitrogen-vacancy centres [117] have been converted to telecom wavelengths. Frequency conversion of photons from ions has very recently been performed, including to the telecom C-band (without entanglement) [118], to the telecom O-band with entanglement over 80 m [18] and directly to an atomic Rubidium line at 780 nm [119]. The use -
of photon conversion to extend the distance over which light-matter and matter-matter entanglement can be distributed has not previously been achieved.
A second challenge to entangling matter over tens of kilometres is to preserve entanglement when such long photonic channels are involved. Uncontrolled decoherence processes that act on the photon as it travels along its path, and those that act on the quantum matter during the photon travel time, can easily destroy entanglement. For example, the entanglement-carrying photon signal can be overwhelmed by added photon noise from the photon frequency conversion process or dark counts of the photon de-
tectors. The inter-node photon travel time also imposes a minimum coherence time for matter, which for e.g. 50 km of optical ﬁbre is already signiﬁcant at 250 µs (and 500 µs to allow for the classical signal of a successful herald to return). Moreover, quantum networking applications require distributed entanglement of a quality above certain thresholds, for which the required matter coherence times and photon signal to noise ratio are far more challenging.

5.2 experimental details and methods 59
A third challenge comes again from the photon travel time. The shortest time required to entangle remote matter (or indeed light) in two places is the light travel time between them. The 500 µs wait time over 50 km of optical ﬁbre yields a maximum attempt rate of only 2 kHz: one must wait 500 µs to learn if an individual attempt to distribute remote entanglement has been successful. To achieve practical entanglement distribution rates in the face of such a restriction, one can work on achieving a -
high probability for individual attempts to succeed and (or) to run many attempts in parallel (as discussed later).
In this Chapter the achievement of entanglement between a trappedion qubit and a photon that travelled over ﬁrst 50 km of optical ﬁbre, and then an extension to 100 km using a improved setup are reported. These results are achieved by combining the ion-cavity system of Section 3.2 and the photon conversion system of Section 4.
The Chapter is organised as follows. In 5.2 a overview of the experimental setup and methods is given. In 5.3 the tomographicallyreconstructed entangled state, of the ion qubit and photon polarisation qubit after 50 km, is presented and the achieved ﬁdelity, efﬁciency and rate are analysed. Also, the ion qubit is shown to provide a quantum information storage time (coherence time) of more than 20 ms. Finally, in 5.4 improvements to the setup are described and the observation of 100 km ion-photon e-
ntanglement is presented
5.2 experimental details and methods
5.2.1 Overview of the experimental setup
The complete setup for the 50 km ion-photon entanglement experiment with every optical element is shown in Figure 5.1. As detailed in Section 3.2, our network node consists of a 40Ca+ion in a radiofrequency linear Paul trap with an optical cavity that enhances photon collection on the 854 nm electronic dipole transition (see Figure 5.2). A Raman laser pulse at 393 nm triggers emission, by the ion, of a photon into the cavity via a bichromatic cavity-mediated Raman transition (CMRT) [31], as descri-
bed in Section 3.5. Two indistinguishable processes are driven in the CMRT, each leading to the generation of a cavity photon and resulting in entanglement between photo√n polarisation and the electronic qubit state of the ion of the form 1/ 2 (|DJ=5/2, mj=−5/2, V + |DJ=5/2, mj=−3/2, H ), with horizontal (H) and vertical (V) photon polarisation and two metastable Zeeman states of the ion (DJ, mj ) The total measured probability of obtaining an on-demand free-space photon out of the ion vacuum cham-
ber (entangled with the ion) is Pout = 0.5 ± 0.1, as described in Section 5.3.1, enabled by the novel low-loss cavity in our setup.
The CMRT yields an entangled state with a frequency-degenerate photon qubit (the two polarisation components have the same fre-

60 telecom-wavelength ion-photon entanglement
quency to within the cavity linewidth [31]), providing a signiﬁcant beneﬁt for long distance networking: the phase of the light-matter entangled state does not depend on the time at which the photon detection event occurs at a given distance from the ion. Photon detection time ﬂuctuates due to the intrinsic ﬁnite temporal extent of the photon wavepacket and in the case of optical path length changes, which could be signiﬁcant over tens of kilometres of deployed optical ﬁbre. Our photons are genera-
ted over several tens of microseconds, with a corresponding bandwidth of tens of kilohertz. This unusually narrow bandwidth allows for strong frequency ﬁltering, which we exploit in the photon conversion process and could have further beneﬁts in future deployed networks, e.g to enable co-propagating classical and quantum light. Furthermore, the corresponding photon coherencelength is potentially thousands of meters, allowing for essentially path-length-insensitive entanglement swapping between rem-
ote ions via Hong-Ou-Mandel interference [10, 120, 121].
Single-mode ﬁbre-coupled photons from the ion are injected into a polarisation-preserving photon conversion system (previously characterised using classical light in Chapter 4). In summary, a χ(2) optical nonlinearity is used to realise difference frequency generation, whereby the energy of the 854 nm photon is reduced by that of a pump-laser photon at 1902 nm, yielding 1550 nm. Two commerciallyavailable free-space and crossed PPLN ridge waveguide crystals are used, one to convert each polarisatio-
n, in a self-stable polarisation interferometer. The total ﬁbre-coupled device conversion efﬁciency here is 25 ± 0.02 %, for an added white noise of 40 photons/s, within the ﬁltering bandwidth of 250 MHz centred at 1550 nm. As discussed in Section 2.3, the 854 nm line in 40Ca+ is almost unique amongst trapped-ion transitions in its potential for low-noise, highly-efﬁcient single-step frequency conversion to the telecom C band.
Following conversion, the telecom photon is injected into a 50.47 km ‘SMF28’ single-mode ﬁbre spool with 0.181 dB per km loss (10.4 ± 0.5% measured total transmission probability). The spool is not actively stabilised in any way, but stored inside a plastic box to reduce the amplitude of thermal and acoustic ﬂuctuations present in the lab. Polarisation dynamics in an unspooled ﬁbre could be actively controlled using methods developed in the ﬁeld of quantum cryptography (e.g. [110]). Finally, free--
space projective polarisation analysis is performed and the photon is detected using a telecom solid-state photon detector with an efﬁciency of 0.10 ± 0.01 and free-running dark count rate of ∼ 2 counts per second (cps). Measurement of the ion-qubit state is performed conditional on the detection of a 50 km photon within a 30 µs time window: the Zeeman ion qubit is mapped into the established 40Ca+optical quadrupole clock qubit [35] via laser pulses at 729 nm, followed by standard ﬂuorescence stat-
e detection.

a)

393 nm Raman laser
B-field Ion cavity node

objective DM

PMT

729 nm qubit laser
z y397 nm sigma

397 nm photon

806 nm locking T1 laser

397 nm pi 866 nm, 854 nm
T2 C

z x

cavity mirror

806 VP filters
854 nm photon

b)

fixed beam expander

1902 nm fiber laser

Photon conversion

optical isolator

telescope LP 1600

PM
iris FM

parabolic mirror

1550 nm PPLN2 AS photon

horizontal
Fresnel rhomb

SP 1600

DM

PPLN1

AS vertical

parabolic mirror

c)

50 km SM fiber
spool 1m
FJ

1m FJ

247 μs travel time

Polarisation analysis
iris
EF BP
iris hologr. grating

Key:

SPCM

λ/2

PBS

λ/4

FJ

5.2 experimental details and methods 61

Figure 5.1: Experimental setup for the 50km ion-photon entanglement experiment. All elements used for the experiments are shown in this diagram. Detailed description to the single parts can be found in the next ﬁgures. Figure 5.2 describes the ion cavity node, Figure 5.3 the conversion setup and Figure 5.4 the polarisation analysis. The used 50 km ﬁbre spool (Corning SMF-28 ultra, Fiontec) is placed inside a cooling box to prevent temperature changes. For the 100 km entangling experiment in Sectio-
n 5.4.3 we added a second 50 km spool, which was due to space limitations outside the cooling box.

62 telecom-wavelength ion-photon entanglement
Figure 5.2: a) Ion cavity node. A single atomic ion (red sphere) in the centre of both a 3D radio-frequency (RF) linear Paul trap (gold electrodes) and an optical cavity. The two smaller electrodes are ‘endcaps’ held at DC voltage. The two larger electrodes are driven with RF, two additional larger electrodes exist but are not shown. Two cross sections are depicted: Along the cavity axis (top), showing: the ≈ 4 Gauss DC magnetic ﬁeld (quantisation axis) generated by rings of permanent magnets; the-
 circularly-polarised Raman laser for generating 854 nm cavity photons; the 729 nm laser for ion-qubit manipulation and measurement (see Section 5.5); a custom objective (NA = 0.289, f = 66.8 mm, lying in an inverted viewport) for collecting spontaneously scattered 397 nm photons for ion-qubit state detection (PMT: Photo multiplier tube). The circularly polarised 397 nm sigma beam is used for optical pumping. Perpendicular to the cavity axis (bottom): Following a Raman pulse, an 854 nm cavity phot-
on exits the cavity via the right mirror with transmission T2 with probability ≥ 0.5 ± 0.1 (see Section 5.3.1). The photon then passes the following elements: in-vacuum collimating lens C; vacuum chamber viewport VP; waveplates (for polarisation analysis of 854 nm photon, see Section 5.3.2); 3 ﬁlters to remove the 806 nm laser light to which cavity length is continuously and actively stabilised (see Section 3.2). The 854 nm photon is then coupled into a single mode ﬁbre (non-polarisation maintaini-
ng) leading to the photon conversion setup (total length 10 m with ﬁbre-ﬁbre joiner, FJ). The 397 nm pi beam is used for Doppler cooling and ion-qubit state detection.

5.2 experimental details and methods 63
Figure 5.3: b) Photon conversion. The injected 854 nm photon passes waveplates (used for system setup with classical light) and is overlapped with 1 W of 1902 nm laser light (Tm-doped ﬁbre laser, AdValue Photonics AP-SF1-1901.4-01-LP) on a dichroic mirror (DM) and free-space coupled into one of the ridge waveguides of temperature-stabilised PPLN1 using an asphere (AS, 11 mm, positioned by an XYZ translation stage). The 1902 nm input path includes: beam expander to reduce the beam diameter so as to-
 ﬁt an optical isolator; waveplate and polariser to tune the power; longpass ﬁlter (LP 1600 nm) to reduce 1500 nm photons produced directly by the ﬁbre laser; simple telescope to optimise the coupling efﬁciency to the waveguide. A ﬂip mirror (FM) before PPLN1, and subsequent classical power meter (PM) allows for verifying spatial overlap of the 1902 nm and 854 nm ﬁelds (with classical 854 nm light). Gold parabolic mirrors are used to focus/collimate all ﬁelds ( f = 15 mm). A Fresnel rhomb is used -
to ﬂip polarisation for subsequent conversion of the qubit’s other polarisation component in PPLN2. SP 1600 nm: shortpass ﬁlter (OD5 at 1902 nm).

64 telecom-wavelength ion-photon entanglement
Figure 5.4: c) i) Polarisation analysis for the results in Section 5.3. Hologr. grating: volume holographic Bragg grating (reﬂection bandwidth 0.2 nm [25 GHz], 95% reﬂection); EF: air-spaced Fabry-Pérot cavity (250 MHz linewidth, 12.5 GHz free spectral range, peak transmission 95% at 1550 nm, extinction 103); BP: bandpass 1550 nm ﬁlter (12 nm bandwidth and 95% transmission). The total conversion efﬁciency given in the main text (25 ± 0.02 %) is the probability of getting a 1550 nm photon (from the-
 ion) in the ﬁbre immediately before the single photon counting module (SPCM, InGaAs ID230, IDQuantique), given a ﬁbre-coupled 854 nm input photon in the input ﬁbre to the conversion setup, in the case where the 50 km ﬁbre spool is removed and the waveplates in the polarisation analysis are set to maximise subsequent PBS transmission. c) ii) Polarisation analysis for the improved results in Section 5.4.3. The ﬁltering network is the same as in i). The PBS was moved after the narrow band ﬁltering a-
nd both outputs of the PBS (transmission and reﬂection) are here analysed with superconducting nanowire single photon detectors (SNSPD’s).

5.2 experimental details and methods 65
5.2.1.1 Polarisation maintaining single photon conversion setup
Details about the operation and characterisation of the conversion setup (using classical 854 nm laser light) can be found in Chapter 4 and [17]. Figure 5.3 provides more details about the pump laser path. The ﬁltering network and the ﬁnal ﬁlters employed are shown in Figure 5.4. Note that a long-pass ﬁlter, with 1440 nm cutoff, that was present in the ﬁrst conversion experiment (Chapter 4) is now removed, since the 50 km ﬁbre spool performs an equivalent task of attenuating weakly phased-matched -
frequency-doubled pump laser light. We now provide a short summary of the conversion setup for clarity.
Difference frequency generation (DFG) is used to convert a 854 nm photon to 1550 nm via a χ(2) nonlinearity in a 48 mm long PPLN ridge waveguide-integrated chips1 (854 nm)−1 − (1902 nm)−1 ≈ (1550 nm)−1. Two chips are used in series to convert orthogonally-polarisation components of the 854 nm photon sequentially (while the ridge guides support all polarisations, they each convert only one polarisation component). Speciﬁcally, in our system, each waveguide converts the vertically-polarised componen-
ts of the ﬁelds. The Fresnel rhomb between the chips (equivalent to a broadband half-waveplate) acts to rotate horizontal to vertical polarisations of all three ﬁelds, such that the second chip converts the orthogonal polarisation components to the ﬁrst chip (see description in Chapter 4).
200 mW of vertically-polarised 1902 nm pump is required in each PPLN for maximum conversion efﬁciency. To achieve this we send in a total of ≈ 1 W of 1902 nm light at the input to PPLN1, with polarisation set to achieve a balanced and maximum conversion efﬁciency in each PPLN chip.
For extracting the single telecom photon at the output, a ﬁlter network consists of a short-pass (OD5 for 1902 nm, cutoff 1600 nm) for reducing the pump power, a volume holographic Bragg grating (bandwidth 0.2 nm) and an etalon (bandwidth 250 MHz) for reducing the 1550 nm noise photons from anti-Stokes Raman scattering, yielding 40 cps photon noise after the ﬁltering network with optimal pump power.
In Chapter 4 and [17] results from a detailed study of the photon noise introduced by our photon convertor is presented. In summary, the dominant source of photon noise around 1550 nm is Anti-Stokes Raman (ASR) scattering of the pump laser: the process whereby pump laser photons at 1902 nm gain energy (get up-shifted to telecom) by scattering with existing phonons inside the conversion waveguide. The ASR scattering (added photon noise) in our converter is spectrally white at telecom and can thus c-
an be reduced by narrowing the output ﬁltering bandwidth. With this setup we achieve 4 ± 2 Hz added photon noise counts before detection for a ﬁltering bandwidth of 250
1 produced by NTT electronics

66 telecom-wavelength ion-photon entanglement
Figure 5.5: Laser pulse sequence for the experiment. The starting sequence (shown in green) consists of an initialisation laser pulse for intensity stabilisation (Init) and Doppler cooling (DC). The loop (shown in red and yellow) consists of additional Doppler cooling (DC), optical pumping, a (photon generation) Raman pulse, a wait time as the photon travels through the 50 km ﬁbre to the detector and a 30 µs detection window. If the photon detector clicks within this window, ion qubit manipulation-
 and state detection (shown in blue) are performed, otherwise the loop repeats.
MHz, far from the ion-photon linewidth of 0.1 MHz (so narrower ﬁltering would be possible without compromising the signal strength of the photon from the ion, but is unnecessary in the sense that the current noise rate does not compromise our ability to see ion-photon entanglement). Note that the low noise achieved in our system was enabled by careful choice of initial ion-photon wavelength, allowing for a broad spectral separation between pump laser wavelength and 1550 nm (and therefore minimal A-
SR noise at telecom). As discussed in section 5.3.2, imperfections introduced by the converter into the ion-photon entangled state are consistent (to within statistical uncertainty) with the expected (independently-measured) effects of detector dark counts and added photon noise. That is: no other source of error (e.g. imperfect polarisation preservation) could be distinguished within statistical uncertainty. For a detailed analysis of the polarisation preservation of the converter see Chapter 4 a-
nd [17].
5.2.2 Pulse sequence for 50 km experiment
A schematic ﬁgure of the experimental sequence is given in Figure 5.5, which will help to follow the coming explanation. First, a 30 µs ‘initialisation’ laser pulse at 393 nm is applied, measured by a photodiode in transmission of the ion-trap chamber, which allows for intensity stabilisation of the subsequent 393 nm photon generation Raman pulse via a sample and hold system. The initialisation pulse is followed by a 1500 µs Doppler cooling pulse. For the cases when the initialisation pulse produc-
ed a photon, an 854 nm laser pulse together with the Doppler cooling clears out the unwanted population from the DJ=5/2 states.

5.2 experimental details and methods 67
Next, a loop starts in which single photons are generated (see Figure 5.5). This loop consists of an additional Doppler cooling pulse (50 µs), optical pumping to the S = SJ=1/2,mj=−1/2 state via circularly polarised 397 nm ‘sigma’ laser light (60 µs), and a 393 nm photon generation Raman pulse (30 µs). This is followed by a (247 − 30) µs wait time for the photon to travel through the 50 km ﬁbre and a subsequent photon detection window. This sequence loops until a photon is detected or, due to prog-
ramming constrains, a maximum of 40 repetitions is reached.
In the case of a photon detection (detector ‘click’), the state of the ion is measured. To perform an ion state measurement, the D = DJ=5/2,mj=−5/2 electron population is ﬁrst mapped to the S state via a 729 nm π pulse (Figure 3.4). That is, the D-manifold qubit is mapped into an optical qubit (with logical states S and D = DJ=5/2,mj=−3/2). In order to measure which of these states the electron is in, the standard electron shelving technique is used. We perform this measurement for a ‘detection ti-
me’ (397 nm photon collection time) of 1500 µs, which is sufﬁcient to distinguish bright (scattering) and dark (nonscattering) ions with an error of less than 1%. The aforementioned process implements a projective measurement into the eigenstates of the σz basis (Pauli spin-1/2 operator).
To perform measurements in other bases e.g σx (σy), as required for full quantum state tomography, an additional π/2 pulse on the S to D transition with a 0 (π/2) phase is applied after the π pulse and before electron shelving is done, to rotate the ion-qubit measurement basis.
The 247 µs photon travel time through our 50 km ﬁbre spool limits the maximum attempt rate for generating a photon from the ion to 4 kHz (2 kHz if the ﬁbre was stretched out away from our ion to force an additional delay for the classical signal ‘photon click’ to return). Until photon detection occurs, photon generation is (Raman laser pulses are) performed every 453 µs, yielding an attempt rate of 2.2 kHz.
The most time consuming part in the sequence is the ion state detection (1500 µs). In our 50 km ion-photon entanglement experiment most of the attempts are unsuccessful. To avoid unnecessary ion state detections, which otherwise reduce the achievable repetition rate, state detection is performed only in the case of successful photon detection or the maximum number of 40 attempts is reached (due to programming constraints). This conditional measurement of the ion-state was realized with an FPGA-bas-
ed logic board (“conditional logic board") in combination with digital inputs from the PulseBox. The layout of the conditional logic board is described in detail in the appendix A.2. The basic function of the conditional logic board is to signal the PulseBox if a photon from the Raman pulse was detected. The initial electric pulse shape of the used detector2 has typical lengths
2 ID Quantique ID230

68 telecom-wavelength ion-photon entanglement
of ∼ 100 ns and appears directly when the photon was measured. The PulseBox itself is only capable of reading out a value at a speciﬁc time after the Raman process.
The conditional logic board has one of its digital inputs connected to the output of the photon detector, which we call ’photon in’ (for the experiments in 5.4.3 a second input was added). Two other digital inputs of the conditional logic board, the ’gate’ and the ’reset’, are each connected to a different digital output port of the PulseBox. The conditional logic board has only one digital output which is connected with a digital input of the PulseBox. The output of the conditional logic board re-
mains at logical 0 (0 Volts), when no photon was detected and changes to logical 1 (3.3 Volts), when a photon is detected. After the read out by the PulseBox, this output is reset to logical 0. Speciﬁcally, an electronic pulse from the PulseBox to the ’reset’ input of the conditional logic board triggers the reset. The ’gate’ input allows the conditional logic board to react only on photon detection events that occur during a desired time window, which is set to be the expected photon arrival time-
. Due to programming constraints of the PulseBox, an upper bound of unsuccessful attempts of 40 was used in the 50 km experiment. Whenever that threshold was reached, the sequence proceeds with ion state detection. These unsuccessful measurements are ignored in later state analysis.
5.2.3 State characterisation
To reconstruct the ion-photon state, a full state tomography of the two-qubit system is performed. On the photon polarisation qubit side, the state is projected to one of 6 states (horizontal, vertical, diagonal, anti-diagonal, right circular and left circular) by waveplates and polariser. This is equivalent to performing projective measurements in three bases described by the Pauli spin-1/2 operators. For example, horizontal and vertical are the eigenstates of the Pauli σz operator. On the ion qu-
bit side, measurement is performed in the three Pauli bases as described in Section 5.2.2.
For each of the 9 possible joint measurement bases (choice of photon basis and ion basis), the numbers of events corresponding to one of the four possible outcomes of these 2-qubit measurements are considered. We then divide the number of events recorded for each outcome by the total number of events recorded for the given basis (divide each number by the sum of four) and thus obtain estimates of the outcome probabilities. These probabilities are used to reconstruct the 2-qubit state density matri-
x by the Maximum Likelihood method described in [112]. The values of ﬁdelity, concurrence and other measures are calculated from the reconstructed density matrix.
For statistical analysis (determining error bars in quantities derived from the reconstructed density matrix), the Monte-Carlo approach

5.3 results 69

was implemented [122]. Brieﬂy, we numerically generate M = 200

sets of 36 event numbers with Poissonian distribution and mean value

equal to the experimental value for each of the 36 possible outcomes

(9 measurements bases each with 4 outcomes). From these simulated

event numbers we derive simulated outcome probabilities, the same

way as we do for the experimental counts. Then we reconstruct M

density matrices for this simulated data and for each one we calculate

the quantities of interest (ﬁdelity, concurrence). The error bars given

in quantities represent one standard deviation in the widths of the

distributions of these quantities over M simulated data sets. The ﬁnal

presented quantities are calculated from the density matrix that is

reconstructed directly from the experimental data. The error bars are

shown as centred on those values.

The ﬁbre connections in the setup (short ﬁbres and long ﬁbre spool)

rotate the photon-qubit state. We did not independently analyse the

overall polarisation rotation caused by these ﬁbres. Therefore, we

do not detect Bell states, but rotated Bell states due to single qubit

rotations. We quantify the state quality in terms of ﬁdelity Fm deﬁned

as Fm = Tr

√

√

ρexpρmax.ent. ρexp

2
, where ρexp is the density matrix,

reconstructed from the experiment data and ρmax.ent. is the density

matrix of the nearest maximally-entangled pure state. This nearest

state is found by exposing a perfect Bell state to a single qubit unitary

rotation and searching over the unitary parameters to ﬁnd the ones

that provide the best ﬁdelity with the experimentally-obtained state.

This unitary rotation doesn’t effect the purity and concurrence. The

density matrices presented in this chapter are obtained by applying the

inverse of the obtained rotations to the experimentally-reconstructed

state: bringing the state into the familiar Bell-state form.

5.3 results
5.3.1 Setup efﬁciency for the 50 km distanced entangling experiment
In this section information is presented on the efﬁciency with which photons are distributed in the 50 km experiment and the sources of photon loss. The total probability that a Raman photon generation pulse leads to a photon click after 50 km is 5.3 × 10−4 (after summing up the outcomes of all polarisation projections). Together with an attempt rate of 2.2 kHz this yields to a click rate of ∼ 1 cps.
The total probability of obtaining an on-demand free-space photon out of the ion vacuum chamber is Pout = 0.5 ± 0.1. This value is inferred from the measured efﬁciency with which we detect single-mode ﬁbre-coupled (ion-entangled) photons at 854 nm (before the conversion stage), after correcting for the measured 1st ﬁbre-coupling stage efﬁciency and the known 854 nm photon detector efﬁciency. The uncertainty in Pout is dominated by the uncertainty in the 1st ﬁbre-coupling

70 telecom-wavelength ion-photon entanglement
stage efﬁciency (see table 5.1), which could be reduced in future. The overall efﬁciency of the frequency-conversion setup, including spectral ﬁltering, is 0.25 ± 0.02, measured with classical 854 nm light. For a detailed description see Chapter 4. A short overview of the contributing photon losses are summarised in table 5.1. Multiplying all the transmissions together leads to a total expected probability of detecting the photon after 50 km of (6.5 ± 1.5) × 10−4, which is consistent to within one-
 standard deviation with the measured value of 5.3 × 10−4.
A total 50 km detection probability of 0.01 should be straightforward to achieve in the future. For example, superconducting nanowire telecom photon detectors with efﬁciencies of > 0.8 and dark count rates of < 10 cps (see 5.4.1) are commercially available. Since taking the data presented in this experiment, we have improved the 1st ﬁbrecoupling stage efﬁciency to 0.9 ± 0.1 and further improvements should be possible. These changes alone are sufﬁcient to achieve a total 50 km efﬁciency above 0.01.
The efﬁciency Pout in our setup is limited by losses in our mirror coatings to Pomuatx = 0.73 ± 0.03. Numerical simulations show that it should be possible to reach this value in our experiment [123] (that is, the probability of the ion emitting into the cavity mode could be near 100%) and recent experiments with our system show that Pout ≈ 0.7 is possible by cooling the ion close to the axial-mode ground state (and thereby enhancing the coupling strength of the cavity-mediated Raman transition, i-
n comparison to the detrimental P3/2-state spontaneous scattering rate). In [71] we obtain a single ion-entangled photon at the cavity output with a probability of Pout = 0.69(3). The performance of our system is shown to saturate the upper limit to photon-collection probability from a quantum emitter in a cavity, set by the emitter’s electronic structure and by the cavity parameters.
Finally, the achieved photon conversion stage efﬁciency is predominantly limited by unwanted excitation of higher-order spatial modes in the involved PPLN ridge waveguides [17]. A total device efﬁciency of 0.5 should be within reach with more careful attention to coupling into the guides and minimising other passive optical losses (e. g. avoiding unnecessary ﬁber joints). Combing all of the aforementioned improvements would lead to a total 50 km detection probability of nearly 0.03, close to the 5-
0 km ﬁbre transmission of 0.1.
Note that lower loss telecom ﬁbres than the one used here are available (0.16 dB/km, Corning SMF-28 ULL) with a corresponding 50 km transmission of 0.16 and any improvement in ﬁbre technology will further increase that value.

5.3 results 71

Location in the photon path On demand photon out of cavity Pout
1st single-mode ﬁbre coupling Telecom conversion stage (& ﬁltering)
50 km ﬁbre transmission Telecom photon detector efﬁciency Expected 50 km detection probability

Efﬁciency 0.5 ± 0.1 0.5 ± 0.1 0.25 ± 0.02 0.104 ± 0.005 0.10 ± 0.01 (6.5 ± 1.6) × 10−4

Table 5.1: Photon losses in our 50 km photon distribution experiment. See Figure 5.1 for the respective locations in the experimental setup.

5.3.2 Results for 50 km ion - telecom-photon entanglement
For quantiﬁcation of the state, quantum state tomography was performed to reconstruct the two-qubit state (as described in 5.2.3). Figure 5.6 shows the measured wavepacket and the reconstructed density matrix after the 50 km ﬁbre spool. The earliest measured photons from the wavepacket arrive 247 µs after the beginning of the Ramanpulse, which corresponds to the travel time of light through a 50 km long optical ﬁbre. A strongly entangled ion-photon state is observed over 50 km, quantiﬁed by a conc-
urrence [38] C=0.73 ± 0.05 a purity γ = 0.75 ± 0.4 and state ﬁdelity Fm=0.86 ± 0.03 with a maximally entangled state (C=1).
Sources of inﬁdelity in the experimentally-reconstructed ion-photon entangled state are now analysed. It will be shown that the 50 km ion-photon state inﬁdelity (1 − Fm) can be accounted for (to within statistical uncertainty) by taking into account background detector counts and imperfections in the initial ion-854 nm photon state output directly from the ion-cavity system.
Three additional independent experiments are performed, corresponding to state tomography of the ion-photon state at three different points in the photon path. First the ion-854 nm photon state was measured immediately at the cavity output (using free space polarisation analysis and two single-mode ﬁbre-coupled 854 nm photon detectors, one at each port of a polarising beam splitter). Second, the ion-1550 nm photon state was measured immediately after conversion (with only a 1 m telecom ﬁbre), refe-
rred to as 0 km distance. Third, the ion-1550 nm photon state after 50 km travel was reconstructed (result shown in Figure 5.6). The reconstructed state ﬁdelities, with maximally entangled states, are presented in table 5.2 (bottom row ‘Experiment’).
The effect of background photon detector counts is analysed (deﬁned as a detector click that didn’t result from a photon from the ion). For this, the background count rate is extracted from the measured counts in the tomography experiments by looking far outside the time window in which the ion-photon arrives, giving 2 ± 0.1 cps for the

72 telecom-wavelength ion-photon entanglement 0.3

Photon click probability (x10-4)

0

260

280 300

320

340 360

380

Time (μs)

Figure 5.6: Observation of ion-photon entanglement over 50 km of optical ﬁbre. i. 2D red bar chart: histogram of photon detection times (photon wavepacket in dashed box), following the generation of an 854 nm photon with a 30 µs Raman laser pulse 247 µs earlier, repeated at 2.2 kHz. Ion-photon state tomography is performed for photon detection events recorded in the dashed box (total contained probability P = 5.3 × 10−4). ii. 3D bar chart: absolute value of experimentally-reconstructed density mat-
rix of the telecom photonic polarisation qubit (H and V are Horizontal and Vertical, respectively) and ion-qubit state (|0 = |DJ=5/2,mj=−3/2 , |1 = |DJ=5/2,mj=−5/2 ).

1550 nm photon at 50 km and 10 ± 1 cps for the 854 photon, which are both in agreement with the telecom (1.9 ± 0.15 cps) and 854 nm (10.1 ± 0.9 and 10.8 ± 1 cps) detectors’ dark count rates (measured independently). For the 1550 nm photon at 0 km we get 4 ± 0.1 cps, where the additional 2 cps background is produced by the photon conversion pump laser anti-Stokes Raman scattering which was shown in Chapter 4 and [17]. Note that this added noise is attenuated at the same rate as the photons from the-
 ion over the 50 km, and so becomes a small contribution to the background compared to the intrinsic detector dark counts (which do not attenuate over distance).
The inﬁdelity that the background counts would contribute when applied to a perfect maximally-entangled Bell state is simulated numerically. Speciﬁcally, the expected background count probability in our photon time-window is added to the expected measurement outcome probabilities for a perfect state as white noise, then a new ‘noisy’ state density matrix is reconstructed via Maximum Likelihood tomography. We call this approach ‘Model 1’, which simulates the effect of measured background counts onl-
y, and ﬁnd that it explains the majority of the inﬁdelity in the 50 km state (see Table 5.2).
In addition to the background counts, Model 2 takes the measured imperfect 854 nm ion-photon state into account. That is, the tomographically reconstructed ion-854 nm-photon state is used as the state

5.3 results 73

Fm, % Model 1 Model 2 Experiment

854 nm @ 0 km 99.5 -
96.7 ± 0.6

1550 nm @ 0 km 96 93
92 ± 2

1550 nm @ 50 km 86 83
86 ± 3

Table 5.2: Comparison of modelled and measured ion-photon entangled state ﬁdelities. Model 1: ideal Bell state subjected to background counts during photon qubit measurement. Model 2: Experimentally reconstructed 854 nm state affected by background counts.

to which background counts are added as with Model 1. The results, shown in table 5.2, show that background counts and imperfections in the initial 854 nm state explain the state inﬁdelities to within statistical uncertainty.
Since the imperfections introduced into the ion-photon state by the converter are consistent with those expected from added photon noise and detector dark counts, any other sources of imperfections (e.g. polarisation contrast loss - see Chapter 4 for a detailed analysis) cannot be resolved above the ∼ 1% inﬁdelity level.
Regarding inﬁdelities in the initial ion-854 nm photon state: It is straightforward to show that the maximum ﬁdelity of an arbitrary state ρarb with any√pure state is given by the square root of the purity of ρarb, that is, F ≤ γ. The ﬁdelity in this case is limited by the state purity (γ = 0.94 ± 0.01 for the 854 nm reconstructed state) meaning that only the imperfections leading to decoherence (or effective decoherence) need be considered. Possible error sources include errors in the 729 nm lase-
r pulses used to determine the ion measurement basis, decoherence of the ion-qubit due to e.g. ﬂuctuating magnetic ﬁelds and relative intensity ﬂuctuations of the two frequency components in the Raman drive leading to a mixture of different states over the duration of the experiment. Identifying the size and relative contribution of these errors is beyond the scope of this work. The achieved ﬁdelity at 854 nm is similar to that achieved in [31].
Therefore, we can summarize that the reduction in ﬁdelity due to adding the QFC stage and 50 km spool can, within statistical uncertainty, be entirely explained by our telecom photon detector dark counts (2 cps).
5.3.3 Decoherence of the ion-qubit state
One of the functions played by matter in a quantum network is as a memory to store established entanglement, while new entanglement is being made or processed in other parts of the network. Decoherence processes in the matter qubit will limit the distance over which it is possible to distribute quantum entanglement (the distance a photon could possibly travel in the ‘coherence time’ of the matter qubit). In our

74 telecom-wavelength ion-photon entanglement
50 km experiment, the ion qubit is already stored for the 250 µs photon travel time through the 50 km ﬁbre, with no statistically signiﬁcant reduction in the ion-photon entanglement quality (this was achieved by installing a mu-metal shield around the ion-trap vacuum chamber to attenuate ambient magnetic ﬁeld ﬂuctuations which directly change the energy spacing between the levels in which we encode our ionqubit).
Additional tomographic measurements are performed to see how the ion-qubit decays over time. Speciﬁcally, state tomography is performed for increasing delays introduced between measurements of the telecom photon polarisation state (0 km ﬁbre travel distance) and measurements of the state of the ion-qubit. This is equivalent to introducing an additional storage time for the ion-qubit. The results show that strong entanglement is still present after 20 ms wait time (Fm = 0.77 ± 0.04, C = 0.57 ± 0.08-
), the longest wait time employed. This already opens up the possibility of distributing entanglement over several thousands of kilometres (if the only limit was the speed of light) and the time to perform hundreds of single and multi-qubit ion quantum logic gates [124].
A dominant source of decoherence of our ion-qubit are uncontrolled energy-level shifts due to intensity ﬂuctuations of the 806 nm laser ﬁeld used to lock the cavity around the ion. Further attention to minimising the absolute size of these ﬂuctuations should lead to entanglement storage times of more than ∼ 100 ms, limited by the lifetime of the metastable D state of the ion-qubit. Beyond this, the ion-qubit could be transferred to hyperﬁne clock transitions within different co-trapped ion species-
 that offer coherence times of many seconds and longer [125]. Section 8.6 takes a closer look into the decoherence of the ion-qubit.
5.4 results with improved setup
The results shown above are the ﬁrst experiments that were done that combine the ion-trap and photon conversion system. Subsequently, multiple improvements were made to the setup which led to a signiﬁcant increase in the photon detection efﬁciency. In this section the main improvements done are summarized. Following these improvements we repeated the measurements for ion - telecom-photon entanglement for 0 km and performed a long distance entanglement measurement. This time, because of the improve-
d detection efﬁciencies, the distance was increased to 100 km.

5.4 results with improved setup 75
5.4.1 Setup improvements
For improving the total photon detection efﬁciency, different stages of the photon path were optimized. The changes done to the setup starting from the beginning of the photon path to the end are described.
First, the ion was discovered to be approximately 0.5 mm away from the cavity waist, as described in Chapter 5 of [69]. Repositioning of the cavity - ion alignment reduced the cavity effective mode area by a factor of two, leading to a two times higher cooperativity C. Second, the single-mode ﬁbre coupling efﬁciency of the photon leaving the cavity was improved from 0.5(1) to 0.82(5), by more careful attention to mode matching with lenses. Last, the single telecom photon detector was replaced by t-
wo telecom superconducting nanowire single photon detectors (SNSPD), one at each output of the polariser. A comparison of the performance of the old and new detectors is presented in table 5.3. With two single photon detectors, two bases of the photon state can be measured simultaneously. Therefore, only 3 waveplate positions are needed for full state tomography. The reconstruction of this data can be more challenging due to different path efﬁciencies and different detector efﬁciencies. In our exp-
eriment we still carried out measurements using 6 different waveplate positions (6 measurement settings). With these 6 measurements, every projection is measured twice, once at each detector. The outcomes for the same measurement basis are summed up across both detectors, to cancel any differences in detection path efﬁciencies and noise rates. Since only one set of ﬁlters was available, the polarization analysis setup was adapted slightly (see Figure 5.4 ii) ): The PBS in the polarization analysis-
 path was moved after the iris and both outputs of the PBS (transmitted and reﬂected path) were guided through a bandpass ﬁlter to a ﬁbre-coupled single photon detector separately.
Another change to the system is the Raman beam direction. While in the previous experiment the Raman beam was oriented along the B ﬁeld, here it was directed parallel and opposite to the 729 nm qubit laser (see Figure 5.2), which has an angle of 45◦ to the B-ﬁeld . This change was done for other experiments carried out during the same time period.
5.4.2 Results for ion - telecom-photon entanglement with the improved system
The ion - photon state was ﬁrst measured directly after the conversion setup without ﬁbre spool, via state tomography. Figure 5.7 shows the measured photon wavepacket and the reconstructed density matrix. The different angle together with a different optical power of the Raman laser results in a longer wavepacket compared to the result in Figure 5.6. The reconstructed state has a ﬁdelity, to the nearest

76 telecom-wavelength ion-photon entanglement

1550 nm Detector Efﬁciency in % Dark count rate

Solid state 10
1.9(2)

SNSPD 1 74
0.6(1)

SNSPD 2 75
0.6(1)

Table 5.3: Efﬁciency and dark count rate for our 1550 nm single photon detectors. Solid state single photon detector: IDQuantique, InGaAs ID230. SNSPD: Scontel FCOPRS-CCR-2TW75+2SW85. The efﬁciency for the solid state detector is from the manufacturer’s data sheet, while the efﬁciencies for the SNSPDs were measured by the company directly after installation, using a calibrated single photon source. The dark count rate of all detectors were measured directly in the lab.

maximally entangled two-qubit state, of Fm=0.971 ± 0.007. This value is statistically-consistent with the one achieved at 0 km before the system improvements. The purity of the reconstructed density matrix is γ = 0.95(1). The maximum ﬁdelity that a state ρ can have with a maximally-entangled two-qubit state is given by the square root of the purity of ρ. Since 0.95(1) = 0.97(1), the ﬁdelity of our state is limited by its purity, which in turn is limited by non-unitary processes.
Simulating the measured noise rate3 of 34.8(8) cps on a Bell state limits the ﬁdelity to Fm=0.991 (Model 1 of Section 5.3.2). The noise rate here is dominated by photons produced via anti-Stokes Raman scattering of the pump laser inside the the conversion crystals.
The total photon detection efﬁciency was 5.9 ± 0.1%. This compares to 0.41% measured before the system improvement and directly after the conversion stage (Section 5.3.1). Combining all known losses for this experiment yields 6.0(9)%. A detailed list of the known losses can be found in Table 5.4.
5.4.3 Results for 100 km light-matter entanglement in the improved setup
The 50 km ﬁbre spool was extended with a second 50 km ﬁbre spool (both Corning SMF-28 ultra, Fiontec) using a ﬁbre joiner. Tomography of the ion-photon state after travel through this 100 km was performed and the results are shown in Figure 5.8. In order to improve the SNR, only photon detections which occur within the ﬁrst 30 µs after the beginning of the wavepacket are used for the analysis. A strongly entangled ion-photon state is observed over 100 km, quantiﬁed by a concurrence [38] C=0.70 ± 0-
.07 and state ﬁdelity Fm=0.85 ± 0.04 with a maximally entangled state (C=1).
The total measured photon detection efﬁciency inside the expected 30 µs photon arrival time is 7.4(3) × 10−4. This total detection efﬁ-
3 This noise rate was directly taken from the experimental time tag ﬁle by counting photons outside of the photon wavepacket window

5.4 results with improved setup 77
Figure 5.7: Observation of ion-photon entanglement over 100 km of optical ﬁbre. i. 2D red bar chart: histogram of photon detection times (photon wavepacket in dashed box), following the generation of an 854 nm photon with a 60 µs Raman laser pulse. Ion-photon state tomography is performed for photon detection events recorded in the dashed box (total contained probability P = 5.9%). ii. 3D bar chart: absolute value of experimentallyreconstructed density matrix of the telecom photonic polarisation q-
ubit (H and V are Horizontal and Vertical, respectively) and ion-qubit state (|0 = |DJ=5/2,mj=−3/2 , |1 = |DJ=5/2,mj=−5/2 ).
ciency includes wanted photons from the Raman pulse and unwanted noise photons. The detected noise rate for this experiment is 1.3(2) cps (sum over both detectors and dominated by the photon detector dark counts) which corresponds to a noise photon probability per photon wavepacket of 1.3 s−1 × 30 µs = 3.9 × 10−5. Subtracting the noise probability per wavepacket from the total measured photon detection efﬁciency results in the background subtracted detection efﬁciency of 7.0(3) × 10−4. The product-
 of the known efﬁciencies for the 100 km experiment shown in Table 5.4 results in (8.1 ± 1.3) × 10−4 and is consistent within statistics with the measured background-subtracted detection efﬁciency.
Now the sources of inﬁdelity in the ion-photon state over 100 km are modelled. Recall that we obtained a ﬁdelity of Fm=0.85 ± 0.04 and that the measured noise count rate is 1.3(2) cps. We use the ’Model 1’ from Section 5.3.2 for simulating the effect of noise on a perfect Bell state. Simulating the measured noise rate onto a perfect Bell state, we obtain a value of 0.95. This simulated value is signiﬁcantly different from the experimentally obtained value. Another source of inﬁdelity has to limit -
the ﬁdelity. The new source of error was caused by a mistake in setting the frequency of laser pulses during the experiment. The difference from the ﬁdelity produced by Model 1 to the experimental measured value is caused by rotations of the ion-photon state during the experiment.

78 telecom-wavelength ion-photon entanglement

Location in the photon path On demand photon out of cavity Pout [71]
1st single-mode ﬁbre coupling Telecom conversion stage (& ﬁltering)
100 km ﬁbre transmission 2nd single-mode ﬁbre coupling (to detector)
Telecom photon detector efﬁciency Expected 0 km detection probability Measured 0 km detection probability Expected 100 km detection probability Measured 100 km detection probability

Efﬁciency 0.64 ± 0.03 0.82 ± 0.05 0.22 ± 0.02 0.0136 ± 0.0004 0.70 ± 0.05 0.74 ± 0.05 (6.0 ± 0.9) × 10−2 (5.9 ± 0.1) × 10−2 (8.1 ± 1.3) × 10−4 (7.0 ± 0.3) × 10−4

Table 5.4: Photon losses in the 100 km photon distribution experiment. See Figure 5.1 for the respective locations in the experimental setup.

In our experimental sequence there is a beat frequency δ393 between the two tones of the bichromatic 393 nm Raman laser pulse that generates the entangled ion-photon state. There is also a beat frequency δ729 between the two 729 nm pulses used for the analysis of the ionphoton state. The frequencies and phases of the two beats are set by the PulseBox at the beginning of each experimental sequence. Ideally, as mentioned in Section 3.5.2, δ393 = δ729 which keeps the phase relation between the beat s-
ignals constant. If the beat frequencies are not equal then the relative phase of the beats evolves in time during the experimental sequence, leading to the phase of the ion-photon state being a function of the time of photon detection during the experimental sequence. Due to a mistake, the frequency difference was set to ∆ f = δ393 − δ729 = 66 Hz. The phase evolution of the ion-photon state due to photons detected from the same Raman pulse over the Raman pulse length of 30 µ is only φ = 0.012 rad-
. The phase evolution of the ion-photon state due to photons detected from different Raman pulses is comparable large. These photons are j × 758 µs apart, with j the number of attempts between the photons. The sequence for this experiment was set to maximally 10 unsuccessful photon generation and detection attempts, before the sequence resets. Therefore, also 10 differently rotated entangled states could be measured, depending which attempt was successful. So the total reconstructed state, which i-
ncludes data from all attempts, should lead to a mixture of these 10 rotated two-qubit states. Also the purity of the measured state indicates mixed states: The purity of the measured state is γ = 0.74(5), which is signiﬁcantly lower then γ = 0.95(1), achieved with the 0 km experiment.
Now a simple model of the frequency setting error on the ionphoton state is presented. A frequency difference ∆ f causes a phase

5.5 discussion 79

evolution of entangled states φ(t) = 2π∆ f t over time t. Given the time difference of t = 758 µs between photon generation attempts and the frequency mismatch of ∆ f = 66 Hz, one obtains a phase rotation between attempts of φ = 0.315 rad. I model this phase rotation as:

Rz(φ) =

10 01

⊗

e−iφ 0

0

eiφ

,

(5.1)

where the ﬁrst operator acts on the photon-qubit and the second on the ion qubit. For simulating the effect of this rotation over the experimental sequence onto the measured state, we rotated 10 Bell states (|Ψ+ ) with the expected angles.

ρj = Rz(jφ)ρ0Rz(jφ)† ,

(5.2)

with ρ0 = |Ψ+ Ψ+| and j = 0, 1, .., 9 the repetition number. Since the total photon detection probability is much less than one, we can expect that the photon counts are equally distributed over these 10 repetitions. This leads to a total simulated state of

∑ ρsim

=

1 10

j

ρj .

(5.3)

This simulated state ρsim has a purity of γ = 0.70, which is consistent with the purity of the measured state to within one standard
deviation of uncertainty. The ﬁdelity of ρsim with the nearest maximally entangled state is Fm=0.82, which is also statistically consistent with Fm=0.85 ± 0.04 observed in the experiment. The ﬁdelity
between the experimental reconstructed and the simulated state ρsim is F = 0.97 ± 0.03. This model describes our experiment well.
We conclude that the main limit to the observed ion-photon entan-
glement ﬁdelity over 100 km was a mistake in setting laser frequencies
and is straightforward to correct in future.

5.5 discussion
In this Chapter we demonstrated entanglement between a trapped ion and photon that had travelled over up to 100 km of optical ﬁbre. In these experiments the photon travelled over a ﬁbre spool in our lab. Repeating this for a deployed optical ﬁbre that distributes the photon to a remote location is more challenging. First, due to larger temperature and pressure ﬂuctuations, a deployed optical ﬁbre is expected to rotate the polarization of the transmitted photon on shorter timescales compared to the-
 ﬁbre spool inside a temperature stabilized lab. As such one expects to have to stabilise for the polarisation rotations in the deployed ﬁbre. One approach is to ﬁrst characterise the polarization rotation through the ﬁbre, e. g. by sending classical light with deﬁned polarizations through the ﬁbre, then correct for that rotation using

80 telecom-wavelength ion-photon entanglement
Figure 5.8: Observation of ion-photon entanglement over 100 km of optical ﬁbre. i. 2D red bar chart: histogram of photon detection times, following the generation of an 854 nm photon with a 60 µs Raman laser pulse 494 µs earlier, repeated at 650 Hz. Ion-photon state tomography is performed for photon detection events recorded in the inset small box (total contained probability P = 7 × 10−4). ii. 3D bar chart: absolute value of experimentally-reconstructed density matrix of the telecom photonic pol-
arisation qubit (H and V are Horizontal and Vertical, respectively) and ion-qubit state (|0 = |DJ=5/2,mj=−3/2 , |1 = |DJ=5/2,mj=−5/2 ).
waveplates. This characterisation and correction should be performed and repeated on a timescale that is determined by the timescale of the polarisation dynamics in the ﬁbre. Classical light, which can be ﬁltered out from single photons, could be used for a live analysis of the polarization dynamics [126].
Going beyond 100 km ion-photon entanglement would be possible by increasing the overall photon detection efﬁciency. However, the ion-cavity photon source works already near the upper limit of photon generation efﬁciency. Also the SPDC’s are state of the art single photon detectors and the detection efﬁciency is close to 1. The efﬁciency of the conversion setup (as discussed in Section 4.6) and the overall ﬁbre couplings could still be improved. Altogether, we don’t expect improvements in efﬁciency-
 of the whole system by more than a factor of 3 in our system. A factor of 3 allows for additional ∼ 25 km of optical ﬁbre without signiﬁcantly changing the total detection efﬁciency and the signal-to-noise-ratio. Nevertheless, 100 km is already a reasonable internode spacing to start building quantum networks according to the quantum repeater approach. The ﬁrst steps towards such a quantum repeater using our system are shown in Chapter 8.
In the experiments presented in this chapter the detection of a photon after travelling over the optical ﬁbre signals a successful distribution event and triggered state characterisation of the ion-qubit. Since the ﬁbre was coiled up we had to wait for the one-way travel time,

5.5 discussion 81
but the return classical signal took only some tens of nanoseconds to travel over a few meters over electric cables. In the case of a deployed optical ﬁbre, in a straight line away from the ion-trap, one would have to wait twice the ﬁbre travel time. For a 100 km ﬁbre, the total wait time increases then from 494 µs to 988 µs. While this presents no signiﬁcant challenge to the memory of our ion-qubit (see section 5.3) the maximum reachable repetition rate decreases by a factor of 2 from 2 kHz to 1 -
kHz. When considering only photon losses due to ﬁbre losses (0.16 dB/km, Corning SMF-28 ULL) this limits the maximal possible distribution rate, for a single ion in the trap, of 25 per second.
A way to overcome this limit, set by the speed of light, is multimode distribution, where multiple entanglement distribution events are carried out in parallel. This could perhaps be realized by using several ions, producing several photons subsequently, where each photon is entangled with a different ion. This approach provides then an increase in the chance of at least one photon making it compared to a single ion-photon entanglement. Using e. g. 10 ions in parallel would increase the maximum di-
stribution rate by a factor of ten (from 25 Hz to 250 Hz in the example above). First test experiments in our group with up to 3 ions already demonstrated this method, but these experiments are beyond scope of this thesis.

SECOND ORDER CORRELATION FUNCTION OF CONVERTED PHOTONS

6

This chapter presents measurements of the second order correlation function g(2) of 854 nm photons from the ion and after conversion to 1550 nm. At the time of writing the results of this chapter are unpublished. Victor Krutyanskiy (VKru) and Martin Meraner (MM) designed and built the conversion setup. The 854 nm photon detection board was built by Vojtech Krcmarsky (VKrc), the 1550 nm detection board was built by MM. Experimental data taking was done by VKru and MM. Data analysis and interpretati-
on was done by MM and Ben Lanyon (BPL). The project was conceived and supervised by BPL.
6.1 introduction
An ideal single photon source produces one photon at a time, not more. The second order correlation function g(2) describes the extent to which a photon source produces only one photon at a time [127, 128]. While the lower bound for a classical light source is g(2) = 1, an ideal single photon source has g(2) = 0. For measuring this function we use a Hanbury Brown and Twiss (HBT) setup [129] corresponding to a 50:50 beam splitter and a single photon detector at each output of the beam splitter. The-
 photon detection times are recorded for each detector, yielding two lists of timetags. The g(2) function can be calculated from the correlations between these timetags, as described in a later section.
In this chapter, the g(2) measurements for unconverted 854 nm photons and for converted 1550 nm photons are presented. In Section 6.2 the experimental setup used to take the data is introduced. The experimental sequence is explained in Section 6.3. Section 6.4 shows the results. In Section 6.5 the results are analysed in more detail and compared to a model. Finally in Section 6.6 the results are discussed and summarized.

83

84 second order correlation function of converted photons

Figure 6.1: Detailed experimental diagram for measuring the g(2) function for unconverted 854 nm photons and converted 1550 nm photons. All elements used for the experiments are shown in this diagram. a) Ion cavity node: A detailed explanation of this part can be found in Figure 3.3. A 393 nm Raman pulse creates a vertically polarised photon. This photon is guided through a collimating lens (C), view port of the vacuum chamber (VP), waveplates and ﬁlters before the photon is ﬁbre coupled at point -
A. For the 854 nm experiment the points A and C are connected. For the 1550 nm experiment the points A and B are connected. b) Telecom conversion: The 854 nm photon is converted to 1550 nm via DFG using a nonliner crystal. Therefore the 854 nm photon is overlapped with a 1902 nm pump laser on a dichroic mirror (DM1) and coupled through a PPLN waveguide. A second dichroic mirror (DM2) splits the converted 1550 nm photon from the remaining pump laser. A ﬁlter network consisting of a long pass (LP), -
short pass (SP), PBS, holographic Bragg grating, an etalon ﬁlter (EF) and a band pass (BP) is used to reduce the unwanted noise photons. More details on these ﬁlters, and the PPLN waveguides, can be found in Section 4.2. c) Photon detection setup for 1550 nm photons: the 1550 nm photons are split on a 50:50 ﬁbre beam splitter (Thorlabs TW1550R5A2) and sent to the detectors D3 and D4 (SNSPD). d) Photon detection setup for 854 nm photons: the 854 nm photons are split on a 50:50 free space beam split-
ter and sent to the detectors D1 and D2 (SNSPD). Band passes at 854 nm (BP 854) ﬁlter the background light.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:11.663Z
- **Text Length:** 186774 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
