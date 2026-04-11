# PDF Document: Sun - 2024 - Quantum Simulation of Electron Transfer Dynamics Using A Trapped-Ion System.pdf

**File Path:** Sun - 2024 - Quantum Simulation of Electron Transfer Dynamics Using A Trapped-Ion System.pdf

**Processed Date:** 2026-02-10T18:16:52.611Z

**File Size:** 23958.00 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 5139

**Title:** (Thesis - 2024 Ke Sun) Quantum Simulation of Electron Transfer Dynamics Using A Trapped-Ion System

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Quantum Simulation of Electron Transfer
Dynamics Using A Trapped-Ion System
by
Ke Sun
Department of Physics Duke University
Defense Date: June 12, 2024
Approved:
Jungsang Kim, Supervisor
Kenneth R. Brown
Iman Marvian
Norbert M. Linke
David N. Beratan
Dissertation submitted in partial fulfillment of the requirements for the degree of Doctor of Philosophy in the Department of Physics in the Graduate School of Duke University 2024

ABSTRACT
Quantum Simulation of Electron Transfer Dynamics Using A
Trapped-Ion System
by
Ke Sun
Department of Physics Duke University
Defense Date: June 12, 2024
Approved:
Jungsang Kim, Supervisor
Kenneth R. Brown
Iman Marvian
Norbert M. Linke
David N. Beratan
An abstract of a dissertation submitted in partial fulfillment of the requirements for the degree of Doctor of Philosophy in the Department of Physics in the Graduate School of Duke University 2024

Copyright © by Ke Sun 2024 All rights reserved

Abstract
Quantum simulation is pivotal in understanding and modeling complex quantum
phenomena that are challenging to study using classical computational methods.
This thesis investigates the potential of trapped ion systems for advancing the field
of quantum simulation. By leveraging the unique properties of trapped ions, particu
larly Ytterbium (Yb) ions, this research aims to enhance the precision and scalability
of quantum simulations.
This thesis reports our progress on developing and optimizing the experimental
setup and operational techniques required for effective manipulation of trapped ions.
Key advancements include refining the processes for ion trapping, cooling, state ma
nipulation, and phase tracking, as well as addressing technical challenges to maintain
high coherence and low error rates. Significant applications of the trapped ion sys
tem are demonstrated through simulations that provide deeper insights into quantum
dynamics and interactions. These applications showcase the ability of trapped ion
systems to model complex environments and phenomena, such as energy transfer
processes and the effects of structured environments on quantum dynamics.
Overall, this thesis underscores the versatility and power of trapped ion systems
as a platform for quantum simulation. The findings pave the way for future research
and practical applications in quantum computing and information processing, high
lighting the promising role of trapped ion technology in the advancement of quantum
science.
iv

Contents
Abstract iv
List of Tables ix
List of Figures x
List of Abbreviations xiii
Acknowledgements xv
1 Introduction 1
1.1 Overview of Electron Transfer Dynamics . . . . . . . . . . . . . . . . 2
1.2 Trapped Ions, The Qubits . . . . . . . . . . . . . . . . . . . . . . . . 3
1.3 Chapter Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
1.3.1 Chapter 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
1.3.2 Chapter 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
1.3.3 Chapter 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
1.3.4 Chapter 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2 Ion trapping and the Yb ion 6
2.1 Ion trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
2.1.1 Four-rod Paul trap . . . . . . . . . . . . . . . . . . . . . . . . 8
2.1.2 Surface trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
2.1.3 Motional modes of an ion chain . . . . . . . . . . . . . . . . . 13
2.2 171Yb+ ion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
v

2.2.1 Structure of 171Yb+ . . . . . . . . . . . . . . . . . . . . . . . 17
2.2.2 Ion Loading . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
2.2.3 Doppler cooling, state initialization and measurement . . . . . 18
2.3 Electromagnetically-induced-transparency (EIT) cooling . . . . . . . 21
2.3.1 EIT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
2.3.2 (Double) EIT cooling . . . . . . . . . . . . . . . . . . . . . . . 22
2.3.3 Numerical simulation . . . . . . . . . . . . . . . . . . . . . . . 24
2.4 Microwave gates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
2.5 Raman transitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
2.6 Spin-dependent kick . . . . . . . . . . . . . . . . . . . . . . . . . . . 33
3 Experimental system 37
3.1 Ultra-High Vacuum (UHV) . . . . . . . . . . . . . . . . . . . . . . . 39
3.1.1 Bake-out and pumping protocol . . . . . . . . . . . . . . . . . 40
3.1.2 Bake-out process . . . . . . . . . . . . . . . . . . . . . . . . . 43
3.2 Laser configurations . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50
3.3 Micromotion compensation . . . . . . . . . . . . . . . . . . . . . . . . 50
3.3.1 Time correlation . . . . . . . . . . . . . . . . . . . . . . . . . 51
3.3.2 Micromotion sideband . . . . . . . . . . . . . . . . . . . . . . 53
3.4 Characterization of the system . . . . . . . . . . . . . . . . . . . . . . 54
3.4.1 Crosstalk . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 54
3.4.2 Heating rate . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55
3.4.3 Coherence time . . . . . . . . . . . . . . . . . . . . . . . . . . 56
3.5 Calibration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58
3.5.1 Spin phase difference between SQ and SDK operations . . . . 58
3.5.2 Light shift difference between SQ and SDK operations . . . . 60
vi

3.5.3 Motional frequency re-calibration considering the light shift . 61
3.6 Phase tracking . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62
4 Quantum Simulation of Polarized Light-induced Electron Transfer 65
4.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66
4.2 Ingredients for quantum simulation . . . . . . . . . . . . . . . . . . . 68
4.2.1 Target Model . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
4.2.2 Experimental setup . . . . . . . . . . . . . . . . . . . . . . . . 69
4.2.3 Trotterization and trapped-ion operation . . . . . . . . . . . . 70
4.3 Experimental Results . . . . . . . . . . . . . . . . . . . . . . . . . . . 72
4.3.1 Photo-excitation . . . . . . . . . . . . . . . . . . . . . . . . . 72
4.3.2 Electron transfer . . . . . . . . . . . . . . . . . . . . . . . . . 73
4.4 Analysis of simulation accuracy . . . . . . . . . . . . . . . . . . . . . 77
4.4.1 Trotterization error . . . . . . . . . . . . . . . . . . . . . . . . 77
4.4.2 Comparison with qubits . . . . . . . . . . . . . . . . . . . . . 80
4.5 Conclusions and Outlook . . . . . . . . . . . . . . . . . . . . . . . . . 85
5 Quantum Simulation of Structured Bath 87
5.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
5.2 Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 89
5.3 Experimental results . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
5.3.1 Single oscillator model . . . . . . . . . . . . . . . . . . . . . . 91
5.3.2 Engineering bath spectral densities . . . . . . . . . . . . . . . 94
5.3.3 Simulating the Leggett spin-boson models . . . . . . . . . . . 95
5.3.4 Vibration-assisted energy transfer . . . . . . . . . . . . . . . . 99
5.4 Discussion and outlook . . . . . . . . . . . . . . . . . . . . . . . . . . 101
5.5 Methods . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102
vii

5.5.1 Experimental implementation . . . . . . . . . . . . . . . . . . 102
5.5.2 Trotterization . . . . . . . . . . . . . . . . . . . . . . . . . . . 104
5.5.3 Randomized operations . . . . . . . . . . . . . . . . . . . . . . 105
6 Conclusion 107
Bibliography 109
viii

List of Tables
3.1 Crosstalk within a 5-ion chain . . . . . . . . . . . . . . . . . . . . . . 55
4.1 Mean distances of the state populations compared to the ideal theoretical values for both photo-excitation and electron transfer processes. 79
ix

List of Figures
2.1 Schematic diagrams of ions traps . . . . . . . . . . . . . . . . . . . . 8
2.2 Trap potential illustration . . . . . . . . . . . . . . . . . . . . . . . . 10
2.3 Motional mode structures . . . . . . . . . . . . . . . . . . . . . . . . 13
2.4 The 7-Ion chain structure and the properties of its mode frequencies . 15
2.5 Part of the energy level diagram of (a) 171Yb+ ion and (b) the neutral Yb atom. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
2.6 Illustrations of the orientation of the 370 nm laser and trap axes, and simplified energy level diagrams of 171Yb+ ions for laser applications . 19
2.7 Energy level illustration for EIT cooling . . . . . . . . . . . . . . . . 22
2.8 Illustration of the principle of EIT cooling . . . . . . . . . . . . . . . 23
2.9 Implementation of EIT cooling on 171Yb+ . . . . . . . . . . . . . . . 24
2.10 Absorption spectrum of probe beams and the criteria for selecting EIT cooling parameters . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26
2.11 Comparison of EIT cooling effects using both Fano line shapes . . . . 27
2.12 Comparison of EIT cooling effects at varying frequencies of the pump beam . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28
2.13 Microwave driven transition . . . . . . . . . . . . . . . . . . . . . . . 30
2.14 Diagram of Raman transition . . . . . . . . . . . . . . . . . . . . . . 32
2.15 Diagram of SDK transition . . . . . . . . . . . . . . . . . . . . . . . . 35
3.1 The CAD illustration of the main part of the trapped ion system . . 38
3.2 Introduction to the UHV and related pumps . . . . . . . . . . . . . . 39
x

3.3 The illustration of purple plague . . . . . . . . . . . . . . . . . . . . . 41
3.4 Variations in RGA results during different baking phases . . . . . . . 45
3.5 Partial pressure comparison of different gases during the high temperature baking process . . . . . . . . . . . . . . . . . . . . . . . . . . . 46
3.6 RGA results during the temperature ramping down stage . . . . . . . 46
3.7 Comparison of RGA results during the Ti-sub process . . . . . . . . . 47
3.8 Assessing the entire bake-out procedure . . . . . . . . . . . . . . . . . 48
3.9 Observations of chamber properties throughout the entire procedure . 49
3.10 Laser Setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51
3.11 Time correlation between PMT counts and RF pick-off signals . . . . 52
3.12 Demonstration of Bessel function . . . . . . . . . . . . . . . . . . . . 53
3.13 Heating rate of a 5-ion chain . . . . . . . . . . . . . . . . . . . . . . . 56
3.14 Coherence time . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57
3.15 Calibration of light-shift differences . . . . . . . . . . . . . . . . . . . 60
3.16 Motional frequency calibration . . . . . . . . . . . . . . . . . . . . . . 61
3.17 Demonstration of phase tracking . . . . . . . . . . . . . . . . . . . . . 63
4.1 Simulation model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69
4.2 Photo-excitation process . . . . . . . . . . . . . . . . . . . . . . . . . 74
4.3 Simulation of the electron transfer with varying initial phase differences 75
4.4 Simulation of destructive quantum interference (φ = 180◦) as donor state degeneracy is lifted. . . . . . . . . . . . . . . . . . . . . . . . . . 77
4.5 Error source analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
4.6 Comparison between the qubit (left) and qutrit (right) simulations . . 83
5.1 Demonstration of the tunability of the bath’s temperature and spectral linewidth . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92
5.2 Simulations of molecular energy transfer in model structured baths . 96
5.3 Simulations based on Leggett’s spin-boson model . . . . . . . . . . . 97
xi

5.4 Simulating sub-Ohmic (s = 0.5) bath with 10 oscillators . . . . . . . . 98
5.5 Simulations of vibrationally-assisted energy transfer (VAET) . . . . . 100
5.6 Experimental setup and instruction of operations . . . . . . . . . . . 103
5.7 Ion-Mode coupling strengths of a 7-ion chain . . . . . . . . . . . . . . 104
xii

List of Abbreviations
AMV All-metal valve
AOM Acousto-optic modulator
BRAM Block random-access memory
BSB Blue sideband
CMOS Complementary metal-oxide-semiconductor
COM Center-of-mass
CPGA Ceramic pin grid array
CW Continuous-wave
DA Donor-acceptor
DAMPF Dissipation-assisted matrix product factorization
DC Direct current
DDS Direct digital synthesizer
EIT Electromagnetically-induced transparency
EOM Electro-optic modulator
ET Electron transfer
FPGA Field-programmable gate array
FWHM Full-width at half maximum
IR Infrared
LD-BCF Lindblad oscillator bath correlation function
NA Numerical aperture
xiii

PCB Printed circuit board
PLET Polarized light-induced electron transfer
PMT Photomultiplier tube
RGA Residual gas analyzer
RF Radio frequency
RMA Rotational wave approximation
RSB Red sideband
SDK Spin-dependent kick
SD-BCF Spectral density bath correlation function
SQ Single qubit
TCL Time-convolutionless
TCSPC Time-correlated single photon counting
Ti-sub Titanium sublimation pump
UHV Ultra-high vacuum
UV Ultraviolet
VAET Vibrationally-assisted energy transfer
xiv

Acknowledgements
First and foremost, I would like to express my deepest gratitude to my supervisor,
Prof. Jungsang Kim, for his continuous support, guidance, and patience throughout
my research and the writing of this thesis. His invaluable advice and encourage
ment were crucial to the completion of this work. Jungsang’s extensive knowledge
in mechanical, optical, and electrical engineering has been pivotal in making our
system both reliable and robust. His comprehensive design reviews have consistently
provided me with new insights on improving the system with novel techs. Addition
ally, Jungsang’s visionary perspective on the future of trapped-ion based quantum
computing has been profoundly educational, and I have learned a great deal from
him.
I would also like to thank Prof. Kenneth Brown for introducing me to the fas
cinating field of quantum simulation. The initial concept for this thesis originated
from a homework assignment given by Ken during the pandemic, which involved
conducting literature research on quantum effects in the energy transfer process.
Ken provided invaluable insights into understanding energy transfer dynamics and
offered advice on simulating these dynamics using the trapped ion system. Addi
tionally, Ken has been an excellent advisor, offering suggestions and ideas that have
been beneficial both in my research and in my personal life.
During the first several years of my PhD, I joined the compact cryogenic trapped
ion team, where I learned the general setup and operations of the trapped ion system.
xv

Volkan Inlek, the postdoc who built the system from the ground up, was exceptionally
patient in mentoring new students like me and was instrumental in teaching me
everything from energy levels to the operations of quantum gates. Junki Kim, the
postdoc responsible for another system in our lab, provided invaluable guidance on
using CAD design software, sharing numerous helpful tricks. Robert (Tripp) Spivey,
who took over the responsibility of managing the system and mentoring students after
the postdocs left, demonstrated remarkable dedication and hard work, improving
the system’s performance. Zhubing (Gloria) Jia, with whom I overlapped most
during my PhD, is incredibly smart and has strongest memory. She greatly aided
my understanding of physics with her clear explanations. Yuhi Aikyo, who joined our
team to integrate the sympathetic cooling module he designed into our setup, always
brought optimism and joy to our experiments, often ending our experiments with
laughter. Jiyong Yu joined the team a year before I transitioned to another system;
he was diligent and quick to learn new concepts. His recent work on designing the
compact AOD system for individual addressing was inspiring and I learned a lot
while working together with him. I am deeply grateful to all the cryo team members
for their assistance!
During the midpoint of my PhD journey, I transitioned to another room tem
perature UHV trapped ion system, called as the Red chamber, which proved more
conducive for executing quantum simulation circuits. This system had been primar
ily operated by the former postdoc, Ye Wang, who was the most hard-core person
and built the best system in the lab. Following Ye’s departure, Chao Fang and I
collaborated on a multi-qubit gate project, during which I began familiarizing my
self with the operations of the Red chamber under his guidance. Subsequently, we
decided to upgrade our surface trap to a more advanced model. Under the su
pervision of Prof. Marko Cetina, we started the chamber baking process, during
which Marko provided invaluable guidance and advice. I am deeply grateful for the
xvi

generous assistance from Marko, Chao, and Jiyong throughout this process. While
reassembling the optics surrounding the chamber, Yichao Yu, a postdoc in Prof.
Christopher Monroe’s lab, offered a plenty of invaluable suggestions related to laser
locking, imaging system optimization, trap potential generation, and phase tracking.
Yichao’s exceptional intellect and problem-solving approach have left a significant
impression on me, proving invaluable not only in experimental techniques but also
in the methodology of thinking. Recently, George Schwartz joined me in operating
the Red chamber, contributing significantly to data collection for our quantum simu
lation project. His proficiency in control software seamlessly complemented my own
weaknesses, enhancing our collective efforts.
A special thank you goes to my theory collaborators. Mingyu Kang, a master
in the quantum simulation of chemical dynamics, has been an invaluable bridge
between experimentalists like me and our collaborators in chemistry theory. Despite
quantum simulation being only a part of his research interests, he has offered more
than enough support to our collaboration. I am also deeply grateful to Hanggai
Nuomin for his extensive knowledge and valuable consultations on classical quantum
chemistry calculations. Additionally, I extend my thanks to Zhendian Zhang, who
inspired me with the initial idea to test quantum simulation using the qutrit system.
A special thanks goes to Shilin Huang, Bichen Zhang, and Lu Qi for their in
sightful discussions on both research and life. Their support have been invaluable,
providing not only academic guidance but also personal encouragement, making them
indispensable colleagues and friends throughout this journey.
Finally, I would like to extend my gratitude to all the participants and indi
viduals who contributed to my research and engaged in valuable discussions. This
includes Geert Vrijsen, Tianyi (Phoebe) Chen, Travis Hurant, Marissa D’Onofrio, Ja
cob Whitlow, Ely Novakoski, Kavyashree Ranawat, Samuel Phiri, Gyeonghun Kim,
Andrew Van Horn, Evan C. Reed, Swarnadeep Majumder, Erin Liu, and Caroline
xvii

Winakur. I also wish to thank those from other labs at the Duke Quantum Cen
ter (DQC) who offered their assistance: George Toh, Or Katz, Henry Luo, Vivian
Zhang, Keqin Yan, and Yuanheng Xie. I am deeply appreciative of everyone at DQC
for making it a wonderful environment for ion trappers.
I am deeply grateful to my family for their unwavering support and encourage
ment. My parents, Zhiyong Sun and Chunxia Li, have always believed in me and
provided me with the emotional and financial support needed to pursue my studies.
Additionally, I would like to express my deepest gratitude to my wife, Yunqi
Yang, for her unwavering support, patience, and love throughout my PhD journey.
Her constant encouragement and understanding have been my pillars of strength
during the most challenging times. She has been my confidant and my greatest
source of motivation. Her sacrifices and dedication have made this achievement
possible, and I am profoundly thankful for her presence in my life. Besides, a big
thanks to our little cat, who has provided immense emotional support throughout
this journey.
Last but not least, I would like to acknowledge the Office of the Director of
National Intelligence - Intelligence Advanced Research Projects Activity, through
the ARO contract W911NF-16-1-0082, the DOE BES award DE-SC0019400, and
the NSF Quantum Leap Challenge Institute for Robust Quantum Simulation Grant
No. OMA-2120757. Support is also acknowledged from the U.S. Department of
Energy, Office of Science, National Quantum Information Science Research Centers,
Quantum Systems Accelerator. Special thanks for their financial support, which
made this research possible.
This thesis would not have been possible without the support and contributions of
all these individuals and institutions. To all of them, I extend my sincerest gratitude.
xviii

1
Introduction
Quantum chemistry explores how chemical and physical properties emerge from the
equations of motion in quantum mechanics. This field faces two common challenges:
(i) understanding the electronic structure of molecules and their properties at equi
librium, and (ii) describing how molecules evolve over time, particularly in condensed
phases. Achieving utmost accuracy in both tasks necessitates employing full quan
tum theory, but this comes at the cost of exponentially growing computational re
quirements as the system size increases, making simulations of even moderately sized
molecules challenging even on the most powerful supercomputers [1]–[3].
To tackle quantum problems using classical computers, approximations are typi
cally utilized, albeit with a trade-off between accuracy and computational efficiency.
Quantum computers or simulators have been proposed as potential game-changers
for quantum chemistry challenges, as they may offer advantages over classical dig
ital simulations. This is because quantum properties are inherently best explored
using computational resources grounded in quantum mechanics itself [4]–[6]. A hy
pothetical quantum advantage could significantly advance scientific understanding
by uncovering insights into quantum phenomena that are beyond the reach of clas
1

sical computation alone, thereby paving the way for new avenues in science and
engineering.
However, progress in this direction remains a hard task, not only due to the sub
stantial scientific and engineering difficulties in building scalable quantum computers
or simulators but also because of the need to determine the most effective utilization
of both classical and quantum simulation tools [7]. Despite extensive research, a
definitive ”quantum advantage” for a specific quantum computation or simulation
over classical digital methods in solving practical quantum chemistry problems is yet
to be conclusively demonstrated when I’m writing this thesis [8].
1.1 Overview of Electron Transfer Dynamics
Understanding electron transfer within and between molecules is crucial across var
ious disciplines, including chemistry, biochemistry, and energy science. In the realm
of energy science, the study of electron transfer among molecules holds particular
significance, impacting fields such as signal transduction and catalysis in both biolog
ical and non-biological contexts [9], [10]. Quantum effects, particularly those linked
to electronic coupling pathways, significantly influence the dynamics and efficiency
of these reactions [11]. Moreover, light-induced electron transfer, involving multiple
electronic pathways, is susceptible to the intensity and polarization of the excita
tion light [12]. The dynamics of electron transfer are further shaped by coupling
interactions mediated by interfering pathways [13], [14].
Moreover, every quantum system inevitably engages with its surrounding envi
ronment. A quintessential model for open quantum systems that captures both the
quantum electron transfer properties of the system and its environment is the spin
boson model [15], extensively prevalent in condensed-matter physics [16], chemical
reactions [17], and biological light-harvesting complexes [18].
Experimentally realizing the electron transfer dynamics interacting with the envi
2

ronment in a programmable way is an interesting challenge for quantum simulators.
Here, we use a trapped-ion platform to achieve such simulations.
1.2 Trapped Ions, The Qubits
Quantum computing has emerged as a groundbreaking field with the potential to
revolutionize information processing, offering unprecedented computational power
for tackling complex problems that are intractable for classical computers. At the
heart of quantum computing lies the concept of qubits, the fundamental units of
quantum information. Unlike classical bits, which can exist in one of two states
(0 or 1), qubits exhibit the remarkable property of superposition, enabling them to
simultaneously represent both |0⟩ and |1⟩, where |0⟩ and |1⟩ are called as quantum
states. A typical single qubit state can be written as |φ⟩ = α|0⟩ + β|1⟩, where α and
β are complex numbers satisfying |α|2 + |β|2 = 1. Without losing generality, one can
express α = cos(θ) and β = eiφ sin(θ) [19]. Furthermore, qubits can also be entangled,
establishing correlations between distant qubits that defy classical intuition. These
unique properties of qubits support the promise of quantum computing to outperform
classical counterparts in various computational tasks.
Among the leading platforms for realizing qubits and manipulating quantum in
formation are trapped ions. Trapped ion systems offer exquisite control and isolation
of individual qubits, making them highly promising candidates for quantum infor
mation processing tasks [20], [21]. In a trapped ion setup, qubits are encoded in the
internal electronic states of individual ions, typically confined within electromagnetic
traps. By applying precisely engineered laser pulses and electromagnetic fields, one
can manipulate the quantum states of trapped ions with remarkable precision and
fidelity. Moreover, trapped ion systems facilitate long coherence times, crucial for
executing complex quantum algorithms and error-correction schemes. As a result,
trapped ions have emerged as a prominent platform for quantum computation, quan
3

tum simulation, and quantum communication research, propelling advancements to
ward practical quantum technologies.
In the realm of scientific research, various elements are employed by researchers
as qubits, with 171Yb+ , 138Ba+, 40Ca+, and other atomic ions being notable choices
due to their relatively simple atomic structures. These ions possess a single valence
electron, facilitating both easy theoretical modeling and experimental manipulations,
thereby allowing for precise control over the qubit states. Within this thesis, 171Yb+
ions are utilized as qubits for conducting quantum simulations. Leveraging the in
teractions of light with ions, one can naturally simulate electron transfer dynamics
and the couplings between the system and its surrounding environment.
1.3 Chapter Summary
1.3.1 Chapter 2
In Chapter 2, the foundational principles of ion trapping will be explored, encom
passing the utilization of 171Yb+ as the qubit and the surface trap employed for ion
trapping. This discussion will be followed by an examination of cooling techniques,
state preparation methods, and measurement protocols. Subsequently, the chap
ter will delve into the various qubit operations employed in quantum simulations,
encompassing microwave gate operations, Raman transitions, and spin-dependent
kicks.
1.3.2 Chapter 3
In this chapter, the experimental setup used for running quantum simulations will be
introduced. Beginning with an overview of the ultra-high vacuum (UHV) chamber,
its components and the process for achieving UHV will be detailed. Following this,
the configurations of the optical elements will be discussed. Next, the phenomenon
of micromotion and the techniques employed to compensate for it will be addressed.
4

Additionally, the chapter will cover the characterization of trap performance and
conclude with an overview of various calibration schemes employed in the setup.
1.3.3 Chapter 4
This chapter explores the quantum simulation of polarized-light-induced electron
transfer. It encompasses discussions on the simulation models employed, the exper
imental methodologies and outcomes, comparisons between experimental findings
and theoretical predictions, as well as an analysis of errors throughout the process.
1.3.4 Chapter 5
In this chapter, we study the quantum simulation focusing on the spin-boson model,
which incorporates the environment in analyzing electron transfer dynamics. It en
compasses discussions on the utilized simulation models, methodologies designed for
simulating the baths, applications of this approach to simulate the Leggett’s bath
model, comparisons drawn between experimental results and classical simulations,
as well as a comparative analysis between quantum and classical simulations.
5

2
Ion trapping and the Yb ion
Ion trapping has emerged as a powerful and versatile technique in the realm of
quantum science and technology, offering unprecedented control and manipulation
of individual quantum systems. At its core, ion trapping involves confining charged
particles, typically ions, within an electromagnetic field generated by carefully engi
neered electrode configurations. By precisely controlling the electric and magnetic
fields, researchers can create stable traps that confine ions in well-defined spatial
regions, forming the basis for a wide range of applications in quantum information
processing, quantum simulation, precision measurement, and fundamental research
in quantum mechanics [20]–[23].
In addition to their scientific significance, ion trapping technologies hold great
promise for practical applications in areas such as quantum communication, quantum
cryptography, and quantum sensing. The exquisite control and long coherence times
offered by ion traps make them attractive candidates for realizing practical quantum
technologies with real-world impact.
Overall, ion trapping stands at the forefront of quantum science and technology,
driving innovations and discoveries that promise to reshape our understanding of the
6

quantum world and revolutionize the way we process and manipulate information at
the quantum level.
2.1 Ion trap
In the realm of ion trapping, Penning traps and Paul traps stand out as two promi
nent techniques for confining charged particles, particularly ions, within a controlled
environment.
Penning traps, named after the physicist F. M. Penning who first proposed them,
utilize a combination of static magnetic and electric fields to confine ions along the
axis of the trap. The magnetic field induces cyclotron motion in the ions, while the
electric field applies a radial confinement force, resulting in stable orbits within a well
defined trapping region. Penning traps are widely used for precision spectroscopy and
measurements of fundamental physical constants due to their exceptional trapping
stability and long confinement times.
In contrast, Paul traps [24], named after the physicist Wolfgang Paul who devel
oped them, employ oscillating electric fields to confine ions within a three-dimensional
trapping region. In a Paul trap, radio frequency (rf) electric fields oscillate at a high
frequency, creating an oscillating potential that traps ions in the presence of a static
electric field gradient. Paul traps offer advantages such as scalability, versatility,
and the ability to trap multiple ions simultaneously, making them ideal platforms
for applications in quantum information processing and quantum simulation. In this
thesis, all the experiments are finished in Paul trap-like surface traps.
A key implication of Maxwell’s equations is that the electric field has zero diver
gence (∇ · E = 0), indicating that it lacks local maxima or minima and therefore
cannot stably trap charged particles. This result directly leads to the Earnshaw’s
theorem, which is a fundamental principle in classical electromagnetism that states
that it is impossible to achieve stable equilibrium using only static electric or mag
7

netic fields to confine charged particles. In other words, no combination of fixed
electric charges or magnets can produce a stable trapping potential for charged par
ticles. However, by creating a saddle point potential, trapping is achievable. This can
be accomplished by employing oscillating electric fields to generate a fast-oscillating
saddle point potential, resulting in a pseudo-harmonic potential capable of confining
ions.
2.1.1 Four-rod Paul trap
Figure 2.1: Schematic diagrams of ions traps. (a) Four-rod Paul trap. (b) Surface trap. The inserted 2D maps represent the trap potentials generated by DC electrodes in the xz-, yz-, xy-planes, respectively.
The Paul trap contains four long rods and two endcaps, depicted in Fig. 2.1a.
A radio frequency (RF) signal of V0 cos (ΩRF t) is applied to the two diagonal rods,
while the remaining two rods are grounded. Equal direct current (DC) voltages (U0)
are applied to the two endcaps. This setup generates a potential field around the
center of the trap with the form of
V = V0 cos Ωt(1 + y2 − z2
R2 ) + κU0(x2 − y2 + z2
2 ) (2.1)
Here, we make the assumption that the radius of the rod is insignificant compared
to R, and κ represents a geometric factor determined by the trap. Upon variable
8

substitution, the equation of motion of the ions within the potential V in radial
directions takes the form of Mathieu equations:
d2y
dξ2 + [a + 2q cos (2ξ)]y = 0 (2.2)
d2z
dξ2 + [a + 2q cos (2ξ)]z = 0 (2.3)
where ξ ≡ ΩRF t
2 , a ≡ − 4κeU0
mΩ2
RF
and q ≡ 2eV0
mΩ2
RF R2 , m and e are the mass and charge of
the ion, respectively. These equations can be solved utilizing Floquet solutions [25].
In typical ion-trap experiments, the axial (x) confinement is much weaker than the
radial (y, z) confinements when a ≪ q2, and the ion’s equilibrium position is at the
RF null point (no offset electric field). Then the solution of the two equations above
is of the following form [26]:
ui(t) ≈ Ai cos (ωrt)[1 + q
2 sin (ΩRF t)], (2.4)
where ui = y or z, Ai depends on initial conditions and ωr = qΩRF
2√2 = eV0
√2mΩRF R2
is the so called ’radial’ mode frequency. Similarly, the ’axial’ mode frequency can
also be derived from Eqn. 2.1.1, ωx = p2κeU0/m ≪ ωr due to the weaker axial
confinement.
2.1.2 Surface trap
Achieving precise control over trapped ions necessitates accurately engineering the
trap potentials. Microfabrication presents distinct advantages in fabricating ion traps
designed for quantum information processing applications. Utilizing Silicon CMOS
(complementary metal-oxide-semiconductor) fabrication processes enables the cre
ation of traps that closely align with the intended design. This not only facilitates
the production of identical traps but also ensures highly predictable trapping po
tentials based on electrostatic models. Moreover, microfabrication allows for the
9

realization of a multitude of control electrodes, enabling precise manipulation of
trapping potentials [27].
In this thesis, we conduct quantum simulation experiments utilizing a surface trap
called ”Phoenix” trap, developed by Sandia National Lab [27]. A simplified depiction
of the surface trap is presented in Fig. 2.1b, where the RF rods and DC endcaps found
in the Paul trap architecture are replaced by distinct electrodes in the surface trap
design. The two elongated RF electrodes create a potential tube, which follows a
slightly meandering path along the axial axis. Under conditions where no voltage
is applied to the DC electrodes, the location of the lowest potential (known as the
null point) generated by the RF electrodes is typically situated around y = 0μm and
z = 68μm. This implies that the ion remains trapped at the center of the electrodes in
the y-direction and approximately 68 μm above the trap surface in the z-direction.
However, owing to the trap’s surface configuration, this null point slightly varies
along the axial axis. As depicted in Fig. 2.2a and b, the null point fluctuates within
the range of 64μm to 74μm in the z-direction and −2μm to 2μm in the y-direction.
Nevertheless, within the region where we trap ions (x ∈ [−245μm, 175μm]), the
positions of the null point exhibit relative stability, typically remaining at y = 0μm
and z = 68μm.
Figure 2.2: Trap potential illustration. In (a) and (b), the RF null positions are depicted along the axial (x) direction of the trap, both in the z and y directions. (c) illustrates the axial confinement produced by the DC electrodes.
To further confining the ion at a specific region without moving, DC voltages
10

need to be applied on the electrodes. Phoenix trap provides 22 pairs of inner elec
trodes and 11 pairs of outer segmented electrodes in the quantum region to generate
DC potentials. The most straightforward approach to generate the DC potentials,
which closely aligns with our experimental setup, involves using polynomial bases.
Essentially, the fit entails performing a least squares fitting of the potential produced
by an electrode to a polynomial of arbitrary order, up to n ∗ m ∗ l, where n, m, l are
the orders in the x, y, z directions. For example, the yz term (n = 0, m = l = 1) in
dicates the rotation of the potential in the radial (yz) plane. To prevent over-fitting,
the fitting range should be at least as large as the fitting orders, while the selection of
the range can be tailored to match the desired region of interest, particularly in the
x direction. It’s important to note that while the fitting may not be perfect due to
the Lorentzian-like shape of the potential generated by each electrode, this method
allows for explicit trade-offs between short-range and long-range shape imperfections.
In the surface trap configuration, the potential generated by the electrodes are
different from the one generated by the Paul trap but holds a similar form:
Φ = αx2 + βy2 + γz2 (2.5)
The coefficients α, β, γ contains both DC and RF contributions:
α = αDC + αRF
β = βDC + βRF
γ = γDC + γRF
(2.6)
According to the Maxwell equation ∇2ΦDC = 0, we can derive that
αDC + βDC + γDC = 0 (2.7)
αRF + βRF + γRF = α + β + γ (2.8)
In a specific scenario where there is no confinement in the x direction and the
potential in the radial direction is symmetric (i.e., αRF = 0), we can define βRF =
11

γRF ≡ 1
2 mω2
sec, where ωsec is called the secular frequency. Consequently, we obtain
α+β+γ =2× 1
2 mω2
sec (2.9)
If we take into account the presence of confinement along the x direction, and denote
α= 1
2 mω2
x, β = 1
2 mω2
y, and γ = 1
2 mω2
z , then we have
ω2
x + ω2
y + ω2
z = 2ω2
sec (2.10)
As previously discussed, by adjusting the voltages applied to the DC electrodes,
we can manipulate various terms of the potential. Among them, the rotation (yz)
and squeezing (y2 − z2) terms are frequently incorporated into a harmonic potential.
For the present discussion, let’s focus solely on the radial aspect of the trap potential.
Φradial = a(y2 + z2) + 2byz + c(y2 − z2) (2.11)
= y z a+c b
b a−c
y
z (2.12)
By diagonalizing this matrix, we can obtain both the eigenvectors and the eigen
values, which are presented below:
ω2
y′ = a + √b2 + c2, ω2
z′ = a − √b2 + c2 (2.13)
y′ = { c + √b2 + c2
b , 1}, z′ = { c − √b2 + c2
b , 1} (2.14)
Adjusting the rotation and squeezing components allows for the modification of
the radial mode frequencies. As depicted in Fig. 2.3a, when the squeezing term c
is set to zero, the two motional frequencies become ω2
y′,z′ = b ± c and follow the
straight dashed lines. Introducing a small but non-trivial squeezing causes the cross
point of these two modes to diminish, following the green and red solid curves. The
points in the figures represent the experimentally measured motional frequencies,
which align well with the theoretical predictions. The offset of the cross point from
12

Figure 2.3: Motional mode structures. (a) The mode frequencies relative to the rotational component. (b) The laboratory axes (y, z) and the trap axes (y′, z′) obtained by diagonalizing the potential. The black arrow indicates the direction of the wave vector difference of the Raman beams. (c) The rotating angle relative to the rotational component.
zero rotation is attributed to the imperfect DC electrodes, which produce a harmonic
trap potential with a non-zero rotation term.
The rotating angle θ (Fig. 2.3b) due to the added rotation and squeezing compo
nents can be obtained by
θ = arctan ( b
c + √b2 + c2 ) (2.15)
During the experiment, we set the squeezing term c near 0, resulting in θ ≈ 45◦.
Consequently, one of the (radial) trap axes aligns with the wave vector difference of
the Raman beam (∆⃗k), while the other axis has no overlap. In this configuration,
the Raman transitions can only couple to the collective motional modes of the ion
chain in one direction, resulting in a clearer spectrum. Additionally, the projection
of the Doppler cooling beam onto the radial plane aligns with the y direction; thus, a
45◦ rotation optimizes cooling in both trap directions. According to Fig. 2.3c, setting
the squeezing term to a small value makes it easy to rotate the trap axes by 45◦.
2.1.3 Motional modes of an ion chain
Section 2.1.2 discusses how the effective pseudopotential and static potential in sur
face trap confine ions with secular frequencies along each direction ωx′,y′,z′. As more
13

ions are introduced, their mutual Coulomb repulsion causes them to push each other
away. When the attractive and repulsive potentials reach equilibrium and minimize
the total energy, the ion chain settles into a stable position.
When perturbed from equilibrium, ions undergo oscillations around their equilib
rium positions. Fourier transforming these oscillations reveals the collective modes
of vibration in the N-ion chain, consisting of 3N motional modes: two sets of radial
(or transverse) modes and one set of axial modes. Radial modes dominate due to
stronger confinement along those directions, with the radial center-of-mass (COM)
motional mode exhibiting the highest frequency and the axial COM motional mode
the lowest.
Assuming we have a linear n−ion chain in the x′−direction, the total potential
generated by the harmonic trap potential and the Coulomb interaction between ions
holds [28]
V =1
2m
n
X
j=1
(ω2
x′ x′2
j + ω2
y′ y′2
j + ω2
z′ z′2
j ) + e2
2
X
i̸=j
1
q
(x′
i − x′
j)2 + (y′
i − y′
j)2 + (z′
i − z′
j )2
(2.16)
where m is the mass of the ion, i, j represents the i−th or j−th ion. ωξ, ξ ∈ {x′, y′, z′}
are the frequencies in each rotated direction of the harmonic potential generated by
the trap.
By redefining the position variables using qi,x′ = x′
i − x ̄′i, qi,y′ = y′
i, qi,z′ = z′
i, and
diagonalize the resulting potential, one can re-write the Hamiltonian of the trap-ion
system into
H =T +V =
X
k,ξ
(1
2 mω2
k,ξ Q2
k,ξ + P 2
k,ξ
2m ) (2.17)
where k represents the k−th motional mode frequencies, ωk,ξ are the collective mo
tional modes. Qk,ξ = P
j bj
k,ξqj and Pk,ξ = P
j bj
k,ξpj are the transformed position
14

and momentum basis which represent decoupled harmonic oscillators. bj
k,ξ are the
coupling strength of the j−th ion to the k−th mode in the ξ−direction. A detailed
derivation can be found in [29].
Figure 2.4: The 7-Ion chain structure and the properties of its mode frequencies. (a) The ion position of a 7-ion chain in a Harmonic potential. (b) The radial frequencies (ωk,y′) in the y′−direction. (c) The coupling strengths bj
k,y′ of each
ion of a 7-ion chain to the y′−direction modes.
In trapped-ion quantum computing, these motional modes facilitate spin-spin
interaction via the Mølmer-Sørensen scheme [30], [31], enabling entangled states in
trapped ions. For quantum simulation, this scheme is employed to drive the spin
dependent-kick (SDK), which is essential in simulating the spin-boson model.
2.2 171Yb+ ion
There are four common types of ion qubits based on the atomic levels in which the
qubit is encoded: optical qubits, Zeeman qubits, fine-structure qubits, and hyperfine
qubits. Among these, hyperfine qubits boast the longest coherence times owing to
their nearly infinite lifetimes and resistance to magnetic field noise.
15

The selection of Ytterbium (Yb) ions as qubits in quantum computing and quan
tum information processing systems has gained significant attention and interest in
recent years. This choice stems from several compelling factors that make Yb ions
an advantageous candidate for realizing robust and efficient quantum operations.
Yb ions, particularly the 171Yb+ isotope, stand out due to their favorable atomic
properties and special characteristics that align well with the requirements of qubit
implementations. One of the primary reasons for the prominence of Yb ions is
their hydrogen-like atomic level structure, making it easy to find an ideal two-level
system. This simplicity facilitates precise control and manipulation of quantum
states, essential for the reliable operation of quantum computing platforms.
Moreover, 171Yb+ ions exhibit long coherence times, a crucial metric in evaluating
the stability and fidelity of qubits. The hyperfine states in the 2S1/2 ground state of
171Yb+ ions offer remarkable coherence times, typically ranging from seconds even
to hours with appropriate mitigation techniques such as dynamical decoupling. This
extended coherence time is instrumental in executing complex quantum algorithms
and computations with minimal error accumulation, thus enhancing the reliability
and efficacy of quantum information processing tasks.
Another key advantage of 171Yb+ ions lies in their compatibility with existing
laser technologies and optical components. Laser cooling, state initialization, and
measurement of 171Yb+ ions can be achieved using commercially available ultravi
olet (UV) lasers operating at 369.5 nm, as well as high-power lasers at 355 nm for
stimulating qubit transitions via Raman processes. This compatibility streamlines
the experimental setup and reduces implementation barriers, making 171Yb+ ions
an attractive choice for researchers and developers seeking practical and scalable
quantum computing solutions.
In addition to their favorable coherence properties and experimental feasibility,
171Yb+ ions offer unique opportunities for exploring diverse quantum phenomena and
16

applications. Their versatile hyperfine states and robust interaction with external
fields enable the realization of various quantum gates and operations essential for
quantum information processing tasks.
2.2.1 Structure of 171Yb+
The 171Yb+ isotope has nuclear spin I = 1
2 . These ions exhibit hyperfine structures in
the 2S1/2 ground state, where qubit states are represented as |0⟩ ≡ |F = 0, mF = 0⟩
and |1⟩ ≡ |F = 1, mF = 0⟩. These ”clock” states feature an energy splitting of
ωHF = 12.642812118466 GHz +310.8B2 Hz, where B represents the magnetic field
in Gauss, demonstrating insensitivity to magnetic field fluctuations up to the first
order. In Chapter. 4, we encode |2⟩ ≡ |F = 0, mF = 0⟩ to construct a qutrit system.
The atomic level structure of 171Yb+ is illustrated in Fig. 2.5.
Figure 2.5: Part of the energy level diagram of (a) 171Yb+ ion and (b) the neutral Yb atom.
17

2.2.2 Ion Loading
At the beginning of trapping ions, a flux of neutral Yb atoms need to be generated.
Compared to the conventional method of oven loading, ablation loading [32] is pre
ferred due to its rapid loading speed, significantly lower thermal dissipation, and
potentially reduced risk of trap degradation from the deposition of neutral Yb metal
onto the trap surface.
Figure 2.5b illustrates the ionization process of the Yb atom. During ion trapping,
an ablation laser emitting at a wavelength of 532 nm is directed onto the Yb target
to produce an atomic flux of Yb directed towards the ion trap. Subsequently, a 399
nm laser with a pre-selected frequency is applied to the Yb atom beam to induce
the transition from the 6s2(0S1) ground state to the 6s6p(1P1) excited state. By
finely adjusting the frequency of the 399 nm laser, we can selectively ionize specific
isotopes of Yb. In this study, we tune the frequency to resonate with the transition
frequency of 171Yb. Following this, a second beam with a wavelength shorter than
394 nm is employed to remove the electron residing at the 6s6p level. Commonly
used lasers for this purpose include 391 nm laser diodes, 370 nm lasers utilized for
Doppler cooling, or 355 nm pulse lasers employed for driving Raman transitions. In
our experimental setup, we opt for a 355 nm pulse laser due to its accessibility to high
power, which enhances trapping efficiencies. Upon loading, the ions are confined to
the trap location by the harmonic potential generated by the trap.
2.2.3 Doppler cooling, state initialization and measurement
Laser cooling, state initialization, and measurement of 171Yb+ ions rely on the electric
dipole transition 2S1/2 ↔2 P1/2 at a UV wavelength of 369.5 nm, well-suited for
commercially available laser diodes and compatible with optical fibers.
Once ionized, the Yb+ ions undergo Doppler cooling to reduce their velocity.
This process involves the application of two laser tones. The 370 nm carrier laser
18

Figure 2.6: (a) The illustration of the orientation of the 370 nm laser and the trap axes. (b-d) Simplified energy level diagrams of 171Yb+ ion, displaying the laser pulse (blue solid lines) used for Doppler cooling, optical pumping, and state detection. The dashed lines indicated the possible spontaneous emissions.
is adjusted to induce the direct transition between 2S1/2|F = 1, mF = −1, 0, 1⟩ and
2P1/2|F = 0⟩. Simultaneously, a 14.7 GHz sideband is added to the other 370 nm laser
tone, stimulating the transition from 2S1/2|F = 0⟩ to 2P1/2|F = 1, mF = −1, 0, 1⟩.
As depicted in Fig. 2.6b, both |0⟩, |1⟩ and the other two Zeeman states are excited
to the 2P1/2 states and subsequently return to their 2S1/2 states due to spontaneous
emissions. Throughout this process, the 370 nm laser is red-detuned by 10 − 20
MHz to ensure that only ions flying towards the laser beam are excited due to the
Doppler effect and absorb a photon, thereby decelerating. Upon returning to states
in the 2S1/2 level, another photon with identical momentum is emitted in a random
direction. Consequently, the absorption-emission cycle reduces the ions’ average
velocity, diminishing their kinetic energy. At equilibrium, the recoil energy from the
emitted photons determines the final Doppler cooling temperature:
TDoppler = ħΓ
2kB
(2.18)
Here, Γ represents the linewidth of 2S1/2|F = 1⟩ ↔2 P1/2|F = 1⟩ transition, and
kB denotes the Boltzmann constant. For Yb+ ions, Γ = 2π × 19.6 MHz. Assuming
the radial mode frequency of interest is approximately 2π × 2 MHz, we find
19

n ̄ħω = kBTDoppler = ħΓ/2 (2.19)
which leads to an average phonon number after Doppler cooling of n ̄ ≈ 5. Note
that the trap potential is rotated such that the 370 nm laser have non-zero projections
on all the three trap axes (x′, y′, z′). In this case, motions in all the directions can
be cooled by only one Doppler cooling beam.
Prior to executing quantum circuits experiments, it is crucial to define the qubit
initialization (optical pumping) and detection procedures. As depicted in Fig. 2.6c,
a 370 nm laser is subjected to modulation by a 2.1 GHz electro-optic modulator
(EOM), ensuring that only 2S1/2|F = 1⟩ states are excited to 2P1/2 states. Upon
excitation, the upper states spontaneously decay to both |0⟩ and 2S1/2|F = 1⟩ states.
In this scenario, when the laser operates for a duration of several microseconds, all
2S1/2|F = 1⟩ states are effectively pumped down to the |0⟩ state.
Similarly, during the detection process, no modulation is applied to the 370 nm
laser, thereby exclusively allowing 2S1/2|F = 1, mF = −1, 0, 1⟩ states to be excited to
2P1/2|F = 0, mF = 0⟩. Due to the selection rule, the transition from 2S1/2|F = 0⟩ to
2P1/2|F = 0⟩ is prohibited. Consequently, only when the ion exhibits a component of
state |1⟩ can the photon detector register spontaneously emitted photons. Further
more, the proportion of detected photons reflects the probability of encountering the
ion in state |1⟩.
Based on the energy levels of the 171Yb+ showing in Fig. 2.5, we found that there
is 0.5% leakage from 2P1/2 states to the long-life time 3D3/2 state [33]. Therefore
an IR laser centered at 935.2 nm is needed to excite the 3D3/2|F = 2⟩ state to
3[3/2]1/2|F = 1⟩ and then decay back to 2S1/2 states. Due to the nuclear spin I = 1/2
of 171Yb+, both the 3D3/2 state and the 3[3/2]1/2 states have hyperfine structures.
Thus, an additional laser tone which is 3.07 GHz higher than 923.5 nm is required
20

to drive the transition from 3D3/2|F = 1⟩ states to 3[3/2]1/2|F = 0⟩ states and pump
the ion back to 2S1/2 states.
2.3 Electromagnetically-induced-transparency (EIT) cooling
EIT [34] cooling [35] is a promising technique used to cool atoms or ions to extremely
low temperatures. In EIT cooling, a coupling laser and a probe laser are applied to
a quantum system, typically a cloud of atoms or ions. The coupling laser is tuned
to a frequency such that it induces transparency for the probe laser within a narrow
spectral window.
When the coupling laser and probe laser are simultaneously applied, the atoms or
ions exhibit a unique behavior. The coupling laser manipulates the atomic or ionic
energy levels, creating a ”dark state” for the carrier and blue sideband transitions,
while keeping a strong coupling strength for the red sideband transitions. Conse
quently, the atoms or ions experience a cooling effect due to the reduction of the
phonons when the red sideband transition is driven.
EIT cooling offers several advantages over traditional laser cooling methods. In
contrast to Doppler cooling, it can efficiently cool ions to nearly the motional ground
state, resulting in a final temperature much lower than the Doppler cooling limit.
Additionally, in comparison to resolved sideband cooling, EIT cooling can simulta
neously cool multiple modes across a relatively broad spectrum, thereby accelerating
the cooling process.
2.3.1 EIT
Considering an ion with a three-level system, as illustrated in Fig. 2.7a, when a probe
beam at frequency ωp is directed towards the ion, it can stimulate resonant transition
between states |1⟩ and |2⟩ if the detuning ∆p is set to zero. As ∆p deviates from
zero, the likelihood of transitioning from |1⟩ to |2⟩ diminishes, as depicted by the
21

blue curve in Fig. 2.7b.
Figure 2.7: (a) The illustration of the energy level and lasers pulses used for EIT cooling. (b) The phenomenon of electromagnetically-induced transparency
However, when a second strong laser beam (coupling beam) is applied to reso
nantly drive another transition between states |3⟩ and |2⟩, these two states become
coupled, giving rise to a set of dressed states | ̃2⟩ and | ̃3⟩ with altered energy levels.
Consequently, the original probe beam, which previously stimulated on-resonance
transition between |1⟩ and |2⟩, can no longer drive this transition. This results in the
ion no longer absorbing photons from the beam and thus becoming transparent at
this frequency—a phenomenon known as electromagnetically-induced transparency
(orange curve in Fig. 2.7b). However, through the scanning of ∆p, one can identify
two new transitions corresponding to the transitions to the dressed states | ̃2⟩ and
| ̃3⟩. These transitions will be utilized to implement EIT cooling.
2.3.2 (Double) EIT cooling
By adjusting the detuning of the coupling beam ∆c, we can modify the transition
spectrum from |1⟩ to the dressed states, as depicted in Fig. 2.8a, to get a Fano
resonance line shape. A common approach to achieving EIT cooling is illustrated
in Fig. 2.8b. By aligning the red sideband transition frequency (|n⟩ → |n − 1⟩)
with the peak of the spectrum while maintaining the carrier (|n⟩ → |n⟩) and blue
22

sideband (|n⟩ → |n + 1⟩) transitions in the weak coupling regimes, we ensure that, on
average, the phonon number decreases with each round of excitation. Subsequently,
spontaneous emission occurs, and the ion decays from the excited states back to the
|1⟩ state, keeping this cycle and cooling the system.
Figure 2.8: Illustration of the principle of EIT cooling. (a) The probability of detecting |2⟩ in the equilibrium state varies with the detuning of the probe beam, with different curves corresponding to different detunings of the coupling beam. (b) Adapted from [36], illustrating the concept of achieving EIT cooling.
For the 171Yb+ ion, EIT cooling utilizes four energy levels instead of three. As il
lustrated in Fig. 2.9a, the probe beam induces the transition from 2S1/2|F = 1, mF =
0⟩ (|0⟩) to 2P1/2|F = 0, mF = 0⟩ (|e⟩), while the coupling beam stimulates transi
tions from both 2S1/2|F = 1, mF = −1⟩ (|−⟩) and 2S1/2|F = 1, mF = 1⟩ (|+⟩) to
|e⟩. Consequently, two coupling pathways (|−⟩ ↔ |e⟩ and |+⟩ ↔ |e⟩) generate two
Fano resonance line shapes. In the proposed double EIT cooling protocol illustrated
in Fig. 2.9b, the frequency of the red sideband is aligned with the right peak of the
Fano resonance, while the carrier and blue sideband transitions are maintained at
the two nodes of the spectrum.
In the experiment, the two EIT beams counter-propagate. The direction of the
23

Figure 2.9: Implementation of EIT cooling on 171Yb+ (a) Adapted from [37]. Energy level diagram of the 171Yb+ ion and the corresponding laser pulses utilized for EIT cooling. (b) Adapted from [35]. Proposed double EIT cooling protocol. (c) Schematic depicting the alignment of the laser beam (orange), polarization (red), and magnetic field (black).
probe beam ⃗kp is chosen to have non-zero projections on all trap axes, enabling
cooling of modes along all three directions. The coupling beam’s polarization is
adjusted to be linear and perpendicular to the magnetic field, providing both σ+ and
σ− polarizations. Conversely, the probe beam’s polarization is linear and parallel to
the magnetic field, maintaining π polarization.
2.3.3 Numerical simulation
To optimize the efficiency of EIT cooling, numerical simulations are employed. In
the context of the system depicted in Fig. 2.9a, the Hamiltonian incorporating the
motional modes has the following term:
Hˆ /ħ =

   
ω|e⟩
Ωσ−
2 ei(⃗kcr·⃗ −ωct) − Ωπ
2 ei(⃗kpr·⃗ −ωpt) Ωσ+
2 ei(⃗kcr·⃗ −ωct)
Ωσ−
2 e−i(⃗kcr·⃗ −ωct) ω|+⟩ 0 0
− Ωπ
2 e−i(⃗kpr·⃗ −ωpt) 0 ω|0⟩ 0
Ωσ+
2 e−i(⃗kcr·⃗ −ωct) 0 0 ω|−⟩,

   
+ νa†a,
(2.20)
24

where the basis is |e⟩, |+⟩, |0⟩, |−⟩. For the sake of convenience, we adopt the
convention ħ = 1 in the following context. Under the rotating frame
HˆD = ω|e⟩|e⟩⟨e| + ω|c⟩|+⟩⟨+| + ω|p⟩|0⟩⟨0| + ω|c⟩|−⟩⟨−|, (2.21)
the Hamiltonian can be simplified to
Hˆr =

   
0 Ωσ−
2 ei⃗kcr·⃗ − Ωπ
2 ei⃗kpr·⃗ Ωσ+
2 ei⃗kcr·⃗
Ωσ−
2 e−i⃗kcr·⃗ ∆c + δB 0 0
− Ωπ
2 e−i⃗kpr·⃗ 0 ∆p 0
Ωσ+
2 e−i⃗kcr·⃗ 0 0 ∆c − δB

   
+ νa†a. (2.22)
The absorption spectrum (Fig. 2.7b) can be derived by numerically solving the
steady-state solution of the master equation, taking into account the spontaneous
emission of the 2P1/2 states while ignoring the ion motions (⃗k ·r⃗ = 0).
dρˆ
dt = −i[Hˆr, ρˆ] + Lρ, (2.23)
where L is the Lindblad operator corresponding to the three spontaneous decay
channel Lρ = P3
i=1 ciρc†
i−1
2 [c†
i ci, ρ] and c1 = pΓ/3 |+⟩ ⟨e|, c2 = pΓ/3 |0⟩ ⟨e|,
c1 = pΓ/3 |−⟩ ⟨e|. For the 171Yb+ ion, Γ ≈ 2π × 20 MHz.
The absorption spectrum indicates the locations of the Fano resonance peaks and
provides insight into the range of probe beam detunings that enables EIT cooling.
Utilizing this information, we can scan the detuning of the probe beam and solve
the time evolution of the master equation associated with Hˆr, thereby determining
the system’s final phonon number and the rate of cooling. In this step, the ion
motion need to be considered. In our setup, ⃗kc = −⃗kp = ⃗k, ⃗k · rˆ = P
k,ξ ηk,ξ(ˆak,ξ +
aˆ†
k,ξ) =
q1
2mωk,ξ (ˆak,ξ + aˆ†
k,ξ), where k, ξ represents the k−th motional modes in the
ξ−direction, η’s are the so called Lamb-Dicke parameters.
25

Figure 2.10: (a) The absorption spectrum as a function of the detuning of both the probe beam and the pumping (coupling) beam. (b) A segment of (a) corresponding to a coupling beam detuning of 125 MHz.
The detuning of the coupling beam (∆c) determines the line shape of the absorp
tion spectrum. As illustrated in Fig. 2.10a, as ∆c increases, the separation between
the two Fano peaks (two bright lines) remains nearly constant. In fact, the spacing
between these peaks (eigenvalues of Eqn. 2.3.3) are approximately equal to the en
ergy difference between the two Zeeman states (|+⟩ and |−⟩), which is approximately
14 MHz in our setup with a 5 Gauss magnetic field. According to the proposed dou
ble EIT cooling scheme outlined in Fig. 2.9b, the frequency difference between the
red and blue sideband transitions (2ωk,ξ) should exceed the spacing between the two
Fano peaks. However, in our experimental setup, the secular frequency is approxi
mately 2 MHz, which does not meet this requirement. Consequently, although two
Fano peaks are observed, only one is utilized for facilitating EIT cooling.
As depicted in Fig. 2.10b, we can tune the frequency of the probe beam to the
position of the green line so that one of the Fano peaks spans a wide range and covers
the motional modes that we care about. Consequently, any motional modes within
the 2π × [1.8, 2.2] MHz range can be efficiently cooled. By adjusting the frequency
of the probe beam, other ranges of motional modes can also be targeted for cooling.
Given the presence of two Fano peaks, either of these can serve as a basis for EIT
26

Figure 2.11: Comparison of EIT cooling effects using both Fano line shapes. (a) and (b) Absorption spectra obtained with the coupling beam detuning set to 125 MHz. The red, green, and blue lines represent the frequencies of the red sideband, carrier, and blue sideband transitions, respectively. (c) and (d) The final averaged phonon number at equilibrium when the probe beam detuning is tuned at the green lines indicated in (a) and (b), respectively.
cooling. Comparative calculations can be applied to evaluate the cooling efficacy
of these peaks. Fig. 2.11a and b illustrate the selection of probe beam detunings
(indicated by green lines), while the corresponding cooling outcomes are depicted in
Fig. 2.11c and d. Utilizing the left Fano peak results in a final average phonon number
reaching the 10−3 level, whereas employing the right peak yields a minimum phonon
number of 0.01. Remarkably, the average phonon number when utilizing the left
peak consistently remains lower than that of the right peak, even with adjustments
to the coupling beam detuning. Consequently, in subsequent discussions, focus will
27

be placed solely on the left Fano peak. Furthermore, Fig. 2.11c and d exhibit a
wide spectrum of motional modes, illustrating the final average numbers attainable
at their respective motional frequencies.
Figure 2.12: Comparison of EIT cooling effects at varying frequencies of the pump beam. (a) Final average phonon number and (b) Time evolution of the averaged phonon number at different coupling beam detuning.
As depicted in Fig. 2.10a, with an increase in the coupling beam detuning, the
two Fano peaks become narrower, resulting in a sharper discrepancy between the
red sideband and carrier, as well as the blue sideband transitions. However, nar
rower peaks do not necessarily guarantee better cooling performance, as they imply
a narrower bandwidth of motional modes that can be efficiently cooled. Hence, a
trade-off needs to be considered to identify the optimal frequencies for EIT cooling.
Fig. 2.12a illustrates the final average phonon numbers for different ∆c selections. It
is evident that the lowest phonon number is achieved when ∆c ranges from 100 to
125 MHz. When examining the cooling speed, as depicted in Fig. 2.12b, the green
and red curves (∆c = 100, 125 MHz) demonstrate relatively rapid cooling. Thus,
setting the coupling beam detuning ∆c within the range of [100, 125] MHz enables
optimal EIT cooling efficiency.
28

2.4 Microwave gates
In the case of 171Yb+ ions, the qubit states are defined as two hyperfine ground
states, the separated frequency of which is ω0/2π ≈ 12.6428 GHz. This energy gap
is second-order sensitive to the magnetic field such that the two qubit states can
remain coherent for a long time under magnetic field fluctuations. This character
istic enables the induction of transitions between these qubit states either through
resonant microwave fields or stimulated Raman transitions.
The resonance frequency of the qubit energy splitting, which is around 12.6 GHz,
resides within the microwave spectral range. A microwave electric field, represented
as E, characterized by its frequency ω and phase φ, possesses the capacity to induce
a transition between the quantum states |0⟩ and |1⟩ with a Rabi frequency Ω. The
Hamiltonian of this transition can be expressed as H = H0 + H′, where:
H0 = ω0|1⟩⟨1| (2.24)
H′ = Ω[e−i(ωt+φ)|0⟩⟨1| + h.c.] (2.25)
In the frame rotating with the microwave frequency ω|1⟩⟨1|, the Hamiltonian can be
re-written as
HI = (ω0 − ω)|1⟩⟨1| + Ω(e−iφ|0⟩⟨1| + h.c.) (2.26)
At ω = ω0, the microwave signal resonantly drives the transition. As depicted in
Fig. 2.13, a perfect Rabi flop is evident when the microwave signal is applied at the
resonant frequency.
In the experimental setup, we begin by producing a signal at 12.6 GHz utilizing a
Quartz oscillator clock known for its ultra-low phase noise. Subsequently, we employ
an RF mixer to combine this signal with another direct digital synthesizer (DDS),
capable of generating RF signals spanning from 0 to hundreds of MHz. The resulting
mixed signal is then amplified and directed to a waveguide gain horn, guiding the
microwave wavepacket to the ions’ position and stimulating the transitions.
29

Figure 2.13: Microwave driven transition. The dots with errorbars are experimental data and the solid line displays the fitted curve by theoretical models.
By varying the frequency of the DDS, we can observe transitions from the ground
state 2S1/2|F = 0, mF = 0⟩ to the three excited states 2S1/2|F = 1, mF = −1, 0, 1⟩.
When the DDS frequencies are scanned, three transitions are detected at the fol
lowing settings: fmF =1 = 49.873982 MHz, fmF =0 = 42.820014 MHz, and fmF =−1 =
35.757436 MHz. Based on these measured frequencies, we can calculate that the
Zeeman splitting is νZeeman = 7.058273 MHz, and the corresponding to a magnetic
field strength in our setup of νZeeman/1.4 = 5.04 Gauss.
2.5 Raman transitions
Compared with Microwave transitions, Raman transitions, driven by two laser beams,
possess numerous advantageous properties for quantum information processing and
quantum simulation. Firstly, Raman transitions can be finely tuned by adjusting
the frequency, phase, beam size, and the intensity of the laser beams, allowing for
versatile and flexible quantum operations tailored to specific qubit configurations.
Additionally, Raman transitions typically have shorter operation times compared to
microwave gates, reducing the susceptibility to decoherence effects and improving
the overall coherence of the quantum system. Lastly, Raman transitions are com
30

patible with a wider range of ion species and experimental setups, making them a
more accessible and practical choice for many research laboratories and quantum
computing platforms.
Specifically for the 171Yb+ ion, the qubit transition in the GHz range can be
stimulated with two Raman beams at 355 nm, for which high-power lasers are com
mercially accessible. This wavelength also minimizes two-photon Stark shifts, which
is advantageous for executing Raman gates.
When driving Raman transitions in the 171Yb+ ion, multiple energy levels are
engaged [33]. However, these levels can be simplified as combinations of multiple
three-energy-level systems. As illustrated in Fig. 2.14, two laser beams approach the
ion from opposite directions, a configuration termed counter-propagating. In this
scenario, the Hamiltonian contains three components: the internal energy levels of
the ion, H0 = ħω10|1⟩⟨1| + ħω20|2⟩⟨2|, where ω10 and ω20 represent the energy differ
ences between the respective energy levels. The ion is confined within a harmonic
potential, hence the ion’s motional state is characterized by HM
0 = ħν(ˆa†aˆ + 1
2 ). The
third segment of the Hamiltonian describes the interaction between the laser and the
ion, denoted by HI = −q ⃗E ·r⃗ , where ⃗E = E0εˆcos(ωt − ⃗k ·x⃗ + φ). The atomic dipole,
r⃗ = rˆ(d0e|0⟩⟨e| + d∗
0e|e⟩⟨0|), where |0⟩ and |e⟩ denote the initial and final states of
any transition. Consequently, the interaction Hamiltonian for both laser beams can
be expressed as:
HI = − qE(1)
0 εˆ1 cos(ω1t − ⃗k1x⃗ + φ1)rˆ(d02|0⟩⟨2| + h.c.) (2.27)
− qE(2)
0 εˆ2 cos(ω2t − ⃗k2x⃗ + φ2)rˆ(d12|1⟩⟨2| + h.c.)
=(ħΩ1|0⟩⟨2| + ħΩ∗
1|2⟩⟨0|) cos(ω1t − ⃗k1x⃗ + φ1)
+ (ħΩ2|1⟩⟨2| + ħΩ∗
2|2⟩⟨1|) cos(ω2t − ⃗k2x⃗ + φ2)
where Ωi ≡ −q ⃗Ei ·r|⃗ i|rˆi/ħ represents the Rabi frequencies of each transition.
Now we can define a frame to apply unitary rotation characterized by U =
31

Figure 2.14: Diagram of Raman transition. (a) Two laser beams are directed towards the 171Yb+ ion with amplitude Ωj, frequency ωj, and phase φj. (b) The solid blue lines indicate transitions induced by the lasers. The first beam triggers the transition from the |0⟩ state to a virtual state, with a single-photon detuning of ∆ from the excited state |2⟩. Meanwhile, the second beam drives the transition from the virtual state to the |1⟩ state, with a two-photon detuning of δ. The dashed grey lines r-
epresent spontaneous emission, with an emission rate denoted by γ.
exp (−iHDt/ħ) to simplify this interaction Hamiltonian, with HD = ħω10|1⟩⟨1| +
ħω1|2⟩⟨2| + ħν(ˆa†aˆ + 1
2 ). Furthermore, in the Raman transition setup, the laser fre
quencies ω1, ω2 are approximately 2π × 844 THz. The single-photon detuning ∆ is
around 2π × 33 THz for the 2P1/2 transition. The hyperfine structure energy level
ω10 is approximately 2π × 12.6 GHz. The spontaneous emission rate γ is roughly
2π × 20 MHz. The Rabi frequencies Ω1, Ω2 are approximately 2π × 100 kHz. The
trap secular frequency ν is around 2π × 2 MHz. Typically, the two-photon detuning
δ lies within the range of the trap secular frequency ν to drive sideband transition,
or δ is set to be even smaller to drive carrier transition. Therefore, we have:
ω1,2, ω20, ω21 ≫ ∆ ≫ ω10 ≫ γ ≫ Ω1,2 ≫ ν > δ (2.28)
Based on the relation above, we can apply rotational wave approximation (RWA)
32

to further simplify the interaction Hamiltonian in the rotating frame [38]:
H ̃I = U †HU + i ∂U †
∂t U
= −ħ∆|2⟩⟨2| + ħΩ1
2 {|e⟩⟨0|ei[⃗k1r·⃗ (t)−φ1] + h.c.}
+ ħΩ2
2 {|e⟩⟨1|ei[⃗k2r·⃗ (t)−φ2+δt] + h.c.}
(2.29)
Given that ∆ ≫ ω10 ≫ γ ≫ Ω1,2 ≫ ν > δ, we can adiabatically eliminate the excited
state |2⟩, thus allowing for the derivation of a Raman transition only between the
qubit states |0⟩ and |1⟩.
H ̃I = ħ Ω1Ω2
4∆ e−i[∆⃗kr·⃗ (t)−δt−∆φ]|0⟩⟨1| + h.c. (2.30)
where ∆⃗k ≡ ⃗k1 − ⃗k2, ∆φ ≡ φ1 − φ2. And the effective Rabi frequency Ωeff =
Ω1Ω2/(2∆). If driving the carrier transition, δ is set to be zero. Then the Hamiltonian
will become
H ̃I = ħΩeff
2 σˆ∆φ (2.31)
where σˆ∆φ = ei∆φ|0⟩⟨1| + h.c.
2.6 Spin-dependent kick
To further utilize the Raman transitions, our focus should be directed towards the
Taylor expansion of the phase-sensitive Raman transition Hamiltonian (Eqn. 2.30).
To maintain simplicity in our analysis, we only consider a single ion interacting with
a laser beam through the Raman transition configuration. Assuming that ∆⃗k is only
parallel to motional modes in one direction, we simplify ∆⃗k ·r⃗ as ∆kx. And define
ˆ
σ+ = |1⟩⟨0|, Eqn. 2.30 can be expressed as [29]:
HI = Ω(x)
2 ei(∆kx−δt−∆φ)σˆ+ + h.c. (2.32)
33

Here Ω(x) represents the effective Rabi frequency of the phase-sensitive Raman tran
sition. δ is the frequency detuning and ∆φ is the phase difference of the two Raman
beams. Approximating this expression to the first order in terms of x at x = x0 and
we assume x0 = 0 without losing generality, we obtain:
HI ≈ Ω(0)
2 + ( Ω(0)′
2 + i∆k Ω(0)
2 )x ei(−δt−∆φ)σˆ+ + h.c. (2.33)
The position of ion can be quantized as
x=
r1
2mω (ˆae−iωt + ˆa†eiωt) (2.34)
where ω denotes the motional frequency of this mode. Then, ∆kx = η(ˆae−iωt+aˆ†eiωt)
where η ≡ ∆k
q
1
2mω is the Lamb-Dicke parameter. Consequently, based on the RWA,
when δ = 0, we can drive the on-resonance single qubit rotation:
HSQ = Ω(0)
2 e−i∆φσˆ+ + h.c. (2.35)
where ∆φ here is defined as spin phase.
On the other hand, when δ is adjusted to ω (or −ω), according to the RWA, the
carrier transition expressed in Eqn. 2.35 is eliminated. Consequently, the remaining
components in Eqn. 2.33 represent the blue/red sideband transitions (BSB/RSB):
HBSB = HI (δ = ω)
= ( Ω(0)′
2
η
∆k + i ηΩ(0)
2 )e−i∆φaˆ†σˆ+ + h.c.
= |A|aˆ†(eiγe−i∆φσˆ+ + h.c.) (2.36)
HRSB = |A|aˆ(eiγe−i∆φσˆ+ + h.c.) (2.37)
When applying both BSB and RSB transitions together, we get the Hamiltonian
of spin-dependent kick (SDK):
HSDK = HBSB + HRSB
= |A|(ˆa + ˆa†)(eiγe−i∆φσˆ+ + h.c.) (2.38)
34

Figure 2.15: Diagram of SDK transition. (a) Two laser beams are directed towards the 171Yb+ ion with amplitude Ωj, frequency ωj, and phase φj. (b) The solid blue lines indicate transitions induced by the lasers. The first beam triggers the transition from the |0⟩ state to a virtual state, with a single-photon detuning of ∆ from the excited state |2⟩. Meanwhile, the second beam drives the transition from the virtual state to the |1⟩ state, with a two-photon detuning of δ. The dashed grey lines rep-
resent spontaneous emission, with an emission rate denoted by γ. (c) the phase diagram of the ion when the SKD transition is applied.
In this equation, A = Ω(0)′
2
η
∆k + i ηΩ(0)
2 and γ = Arg(A). When devoid of laser power
and phase gradient considerations, i.e. Ω(0)′ = 0 and Ω(0) is real, the spin phase of
SDK can be obtained from the equation above (2.38) φ(SDK)
s = ∆φ − γ = ∆φ − π/2.
In comparison, the spin phase of SQ is φ(SQ)
s = ∆φ in this scenario. Moreover,
with the inclusion of laser power gradient considerations, γ will take different values
and introduce an additional spin phase component. Additionally, when considering
the phase gradient of the wave pocket, Ω(x) is not necessary to be a real number,
introducing extra spin phase differences.
A more general expression of the SDK transition can be written as
HSDK =
Ω ̃
2 [ˆaei(δmt+φm) + ˆa†e−i(δmt+φm)](e−iφs σˆ+ + h.c.) (2.39)
Here, δm represents the motional frequency detuning, while φm denotes the motional
phase. When the ion is initialized in |0⟩, its state can be expressed as a superposition
of the two spin eigenstates of the SDK operation with a spin phase φs: |0⟩ = √12 (|↑
⟩φs + |↓⟩φs). In the ion’s phase diagram, the SDK acts like a displacement operator
35

based on the spin state. As illustrated in Fig. 2.15c, due to the superposition of |↑⟩φs
and |↓⟩φs, the ion will be kicked in two directions. Its trajectory traces a curve with
a radius of Ω ̃
2δm , originating from an initial angle of φm. The angle it travels is δmτ ,
where τ is the duration of the SDK pulse.
36

3
Experimental system
The experimental setup utilized in the implementation of the two quantum simulation
projects within this thesis comprises a room temperature ultra-high vacuum trapped
ion system. Within the vacuum chamber, we use the Phoenix trap, a product of
Sandia National Lab [27], for trapping 171Yb+ ions. This Phoenix trap is affixed
onto a ceramic pin grid array (CPGA) and connected with a printed circuit board
(PCB) crafted from Rogers 6002, aimed at minimizing degas rates.
To control the trap potential, a combination of DC voltages and RF signals is
generated via different direct digital synthesis (DDS) channels and routed to the trap
through the PCB. Precisely, the DDS produces the DC signals, which subsequently
traverse a low-pass filter box with a cut-off frequency set at 2 kHz. From there,
they disperse into four 25-pin D-subs and establish connections with the trap PCB,
facilitating control over the 100 DC electrodes within the Phoenix trap.
Conversely, the RF signal is directed into a low-noise amplifier boasting a gain of
20 dB. Following amplification, the RF signal enters a helical resonator, featuring a
quality factor of approximately 150, for the purpose of amplifying the signal at the
designated frequency while effectively filtering out any unwanted frequencies.
37

Figure 3.1: The CAD illustration of the main part of the trapped ion system, including the vacuum chamber, μ−metal shield, and the global and individual beam delivery plates.
The optical beams are sent into the chamber via the side viewports of the vacuum
chamber. Specifically, the 370 nm, 399 nm, and 935 nm continuous-wave (CW)
lasers, along with the ablation laser, are precisely directed towards the ion position
(or the Yb target position) utilizing optics mounted on the chamber. The Global
beam undergoes shaping via a cylindrical lens and is then directed towards the ion
through the final focal lens situated on the global beam delivery plate. On the
other side, the individual beam, tightly focused by a high numerical aperture (NA)
lens, traverses through the front viewport of the chamber. Notably, the ion imaging
system shares this high NA lens with the individual beam. Following the high NA
lens, a dichroic mirror efficiently separates the individual beam (355 nm) from the
emitted photons from the ion (370 nm), facilitating clear segregation between these
two systems.
38

Furthermore, a custom-designed μ-metal shield covers the entirety of the vacuum
chamber, effectively shielding it from external magnetic fluctuations. This shield
serves to extend the coherence time of both the clock states and the Zeeman states.
An illustration of the system’s layout is provided in Fig. 3.1.
3.1 Ultra-High Vacuum (UHV)
UHV environments play a pivotal role in trapped ion experiments, serving as a crucial
foundation for achieving precision and stability in quantum information processing
and related studies. UHV conditions are imperative as they minimize unwanted inter
actions between ions and residual gas molecules, thereby reducing collisional effects
and maintaining long lifetimes of trapped ions. Additionally, UHV environments
enable prolonged coherence times and enhance the fidelity of quantum operations
by mitigating external perturbations arising from background gases. Overall, UHV
conditions provide a pristine and controlled setting essential for advancing the capa
bilities and applications of trapped ion systems in quantum technologies.
Figure 3.2: Introduction to the UHV and related pumps. (a) Potential effects of the residual gas molecules on the 171Yb+ ion. (b) Adapted from [39]. Illustration of pump categories and their associated operational vacuum ranges. (c) Description of the pumps employed for establishing and sustaining UHV conditions in our experimental setup.
Various types of pumps are employed to achieve and maintain UHV conditions,
39

each with its unique mechanisms and capabilities (Fig. 3.2). These pumps operate
in concert, creating a layered approach to evacuate gases efficiently from the vac
uum chamber. From the initial rough pumping to the final attainment of UHV, a
combination of pumps is often utilized to meet the stringent requirements of the
application. In our experimental setup, we use the combination of a rough pump, a
turbo molecular pump and an ion pump to achieve UHV conditions in the vacuum
chamber.
One critical aspect of this cleanliness protocol is the process of ”bake-out.” Bake
out involves heating the components of a vacuum system to elevated temperatures for
a specified duration under vacuum conditions. The necessity of baking in achieving
UHV stems from the presence of contaminants, such as water vapor, hydrocarbons,
and other volatile species, which can adhere to surfaces within the vacuum chamber.
Baking effectively drives off these contaminants by increasing their vapor pressure,
allowing them to desorb from surfaces and be pumped away. Moreover, baking can
also help to remove absorbed gases from the material surfaces, ensuring that the
vacuum system reaches and maintains the desired pressure levels.
3.1.1 Bake-out and pumping protocol
When conducting the bake-out process for the vacuum chamber, we want to keep
the chamber inside the oven as long as possible to pump out sufficient amount of gas.
But it’s also important to be aware of certain limitations. Firstly, the trap should
not be subjected to high temperatures (below 200◦C) for long durations (less than
5 days) to mitigate the risk of the purple plague issue (see Fig. 3.3). Secondly, the
windows of the chamber should not be exposed to high temperatures (below 180◦C).
Additionally, the temperature ramp speed should not exceed 10 ◦C/hr to prevent
potential cracking of the windows.
Therefore, we developed the following protocols to safely and efficiently pump
40

Figure 3.3: The illustration of purple plague. Adapted from [40]. (1) Gold wire (2) Purple plague (3) Copper substrate (4) Gap eroded by wire-bond (5) Aluminium contact. The aluminum-gold (AuxAly) intermetallic will lead to a slightly higher contact resistance and, most importantly, to a reduced pull strength of the wirebonds. As temperatures rise, there is an increased likelihood of the aluminum-gold intermetallic formation, which can lead to wirebond disconnection.
the chamber.
1. Connect the vacuum with the turbo pump and pump down to about 2e-8 mbar.
2. Ramp up to 120 ◦C at a rate of 9 ◦C/hr.
3. Hold at 120 ◦C for about 4 days
• Keep an eye on the partial pressure of the water and argon. Pump until
they are not the majority of molecules in the chamber (the partial pressure
is less than that of H2). We need to care about the argon because the
final ion pump cannot remove argon effectively.
• Degas Ti-sub (42 A for 2 minutes), turn on the small ion pump for 2-3
hours to degas. Subsequently, turn on the ion gauge, with both filaments
activated sequentially.
• Keep the ion gauge on for the rest of time.
• Close the valve connecting to the turbo pump while open the valve con
necting to the big ion pump (turned on in advance and stays at high
vacuum.)
41

4. Gradually increase the temperature to 180 ◦C at a rate of 5.4 ◦C per hour.
• Manually take the residual gas analyzer (RGA) analog scan with multi
plier every several hours
5. Hold at 180 ◦C for about 3 days
• The duration of the holding period should be determined by the RGA
reading. It should be stopped when the RGA indicates that all partial
pressures have ceased declining.
• Continue to conduct RGA measurements with a multiplier every four
hours.
6. Gradually decrease the temperature to 105 ◦C at a rate of 5.4 ◦C per hour.
7. Hold at 105 ◦C for several hours until the tasks below are completed:
• Switch on the small ion pump, allowing it to operate for over 12 hours
before switching it off.
• Activate the Ti-substrate with 48A for 1 minute per filament.
• Activate the small ion pump and observe the pressure spike upon activa
tion; the magnitude indicates the extent of degassing.
• Conduct RGA scans until pressure stabilizes (It measures the partial pres
sures of the chamber, pump and RGA itself).
• Securely close the all-metal-valve (AMV) (finger tight) and perform an
RGA scan (It measures the partial pressures of the pump and RGA) after
sealing.
• Compare both RGA scans (with AMV open and closed) to identify the
components originating from the chamber.
42

8. Gradually decrease the temperature to room temperature, lowering it at a rate
of 9 ◦C per hour.
9. Securely close the AMV using a torque of 140 in-lbs.
3.1.2 Bake-out process
According to the outlined protocol, we are expected to reduce the pressure within
the vacuum chamber to a 10−12 or low 10−11 Torr. In the beginning of the baking
phase, we gradually increase the oven temperature from room temperature to 120
◦C, maintaining it at this level for several days to a week. This duration ensures
thorough removal of significant water and some other gases while avoiding excessive
heat that could potentially damage the chamber’s trap and windows.
Throughout the bake-out process, we use RGA to analyze the components left
inside the vacuum chamber. RGAs offer precise and comprehensive analysis of gases
present within vacuum systems. They operate on the principle of mass spectrometry,
a powerful technique for identifying and quantifying the constituents of a gas sample.
At its core, an RGA consists of three main components: an ionization source, a mass
analyzer, and a detector.
The process begins with the ionization of gas molecules within the vacuum cham
ber. This ionization can occur through various methods such as electron impact,
chemical ionization, or photoionization, depending on the specific RGA design and
application requirements. Once ionized, the gas molecules are accelerated into the
mass analyzer, which separates them based on their mass-to-charge ratio (m/z). This
separation occurs by subjecting the ions to electric and/or magnetic fields, causing
them to follow distinct trajectories depending on their mass. Finally, the separated
ions are detected by a detector, typically a Faraday cup or an electron multiplier,
which converts the ion current into an electrical signal. By measuring the intensity of
these signals at different mass-to-charge ratios, the RGA generates a mass spectrum,
43

providing a detailed profile of the gases present in the vacuum chamber.
The multiplier can only be activated when the pressure falls below 1e-7 Torr.
Consequently, once most of the water has been evacuated following the period of
holding at 120 ◦C, we can employ the RGA equipped with a multiplier for more
precise measurement of the partial pressures of residual gases. Fig. 3.4 illustrates
the RGA results across the following three procedures:
1. Transitioning from the turbo pump to the large ion pump at the conclusion of
the 120 ◦C holding period until stabilization occurs. This switch aims to prevent any
back flow from the turbo pump, whereas the ion pump, being absorptive, is immune
to such back flows.
2. Comparing RGA results during the temperature increase from 120 ◦C to 180
◦C.
3. Maintaining a temperature of 180 ◦C while continuing pumping.
When examining the changes in partial pressures of various components during
the 180 ◦C baking stage, it becomes evident that this process primarily eliminates
the bulk of CO2, H2O, IPA, and methane. Additionally, some N2 (CO), O2, Ar,
and methanol are also extracted. However, hydrogen is barely evacuated during this
phase (Fig. 3.5).
Following a two and a half days of high-temperature pumping, the temperature
is gradually lowered until it reaches 105 ◦C (Fig. 3.6). At this stage, the small ion
pump, responsible for maintaining chamber vacuum while trapping ions, is activated
for a half-day period to degas. Subsequently, it is temporarily deactivated to prevent
potential damage before initiating the Titanium sublimation pump (Ti-sub).
The Ti-sub offers efficient removal of residual gases from high-vacuum environ
ments. Operating on the principle of sublimation, the Ti-sub utilizes the unique
properties of titanium to achieve exceptional pumping performance.
At its core, the Ti-sub consists of a titanium filament or strip housed within
44

Figure 3.4: Variations in RGA results during different baking phases. (a) The blue curve represents the procedure of switching the turbo pump into the big ion pump. The orange curve depicts the pumping process utilizing the ion pump over a duration of 18 hours. (b) The blue curve illustrates the partial pressures of the components at the end of the holding period at 120 ◦C, while the orange curve displays the partial pressures upon reaching 180 ◦C. (c) The blue curve indicates the initial pressur-
e upon reaching 180 ◦C, whereas the orange curve represents the final pressure after baking at 180 ◦C for approximately 59 hours.
a vacuum chamber. When heated to temperatures typically ranging from 500 ◦C
to 900 ◦C, titanium undergoes sublimation, transitioning directly from a solid to a
gaseous state without passing through the liquid phase. This sublimated titanium
45

Figure 3.5: Partial pressure comparison of different gases during the high temperature baking process. The gray line represents the equality line, where the initial pressure equals the final pressure. Above this line, all elements indicate a decrease in pressure, implying that each of them has been pumped out to some extent.
Figure 3.6: RGA results during the temperature ramping down stage. The blue curve represents the partial pressure observed at the end of the 180 ◦C baking process, while the orange curve depicts the partial pressure upon reaching 105 ◦C.
vapor interacts with residual gases within the vacuum chamber, forming chemically
stable compounds and thereby effectively removing them from the system.
The sublimation process of titanium is highly selective, targeting predominantly
reactive gases such as water vapor, hydrogen, and hydrocarbons. This selectivity,
combined with the high pumping speed and compatibility with ultra-high vacuum
conditions, makes the Ti-sub an indispensable tool in various scientific and industrial
applications.
46

Figure 3.7: Comparison of RGA results during the Ti-sub process. The blue curve represents the data obtained before the activation of the Ti-sub pump, while the orange curve illustrates the results after activating the Ti-sub and allowing it to reach equilibrium. The inset provides a depiction of the partial pressure ratios of various components observed during this process.
Referring to Fig. 3.7, it is evident that the Ti-sub process primarily removes H2
and N2 (CO) gases, which are the top two remaining components in the chamber,
contributes to further pressure reduction.
Before lowering the temperature from 105 ◦C to room temperature, it’s necessary
to isolate the vacuum chamber from both the big ion pump and the RGA. This
precaution is significant because, at the end of the bake-out process, the vacuum
chamber tends to be cleaner than the pump. When the chamber’s temperature
exceeds that of the pump, any impurities within the pump are unlikely to migrate
into the chamber. However, as the chamber’s temperature decreases, there arises a
risk of backflow from the pump, potentially contaminating the chamber. Therefore,
prior to initiating the temperature decrease, it’s crucial to close the AMV to segregate
the chamber from the big ion pump and RGA.
Hence, the final RGA measurement can be acquired at 105 ◦C. We compare the
residual gas levels at this temperature with the initial RGA readings taken before
the baking procedures at room temperature (20 ◦C). As depicted in Fig. 3.8, during
the bake-out process, significant reductions are observed: water, methanol, and oxy
47

gen experience a decrease of three orders of magnitude, while hydrocarbons, CO2,
IPA, N2 (CO), and hydrogen undergo reductions ranging from one to two orders
of magnitude. Furthermore, upon lowering the temperature from 105 ◦C to room
temperature, the partial pressures undergo an additional reduction of approximately
two orders of magnitude.
Figure 3.8: Assessing the entire bake-out procedure. (a) The blue curve represents the RGA readings obtained before baking at 20 ◦C, while the orange curve depicts the RGA measurements after baking at 105 ◦C. (b) Ratio of partial pressures for various components before and after baking. (c) Relationship between chamber pressure and temperature. Dots are the measured pressure at different temperatures. The curve indicates the normalized hydrogen diffusion rate from the AISI 310 stainless steel.
Following the entire bake-out process, the ideal scenario entails the chamber
predominantly containing residual hydrogen gas. As the temperature gradually de
creases from 105 ◦C to room temperature, the pressure within a pristine chamber is
primarily influenced by the diffusion of hydrogen emanating from the stainless steel
48

inner walls. Given the constant pumping speed of the small ion pump, the resultant
net pressure should correlate with the diffusion rate. This diffusion rate, denoted as
D(T ), follows an exponential decay function D(T ) = D0e−E/kT . Consequently, the
chamber pressure is directly proportional to D(T ). Fig. 3.8c illustrates a notable
alignment between the measured chamber pressure and the normalized D(T ) func
tion, suggesting a hydrogen-dominated clean chamber. In the end, the final pressure
of the chamber is 2e-11 Torr, which is the lowest limit of the ion gauge we use.
Figure 3.9: Observations of chamber properties throughout the entire procedure. (a) Temperature readings from various locations within the chamber recorded by temperature sensors. (b) Measurements of the partial pressure of different elements obtained via the RGA. (c) Pressure levels within the vacuum chamber monitored using the ion gauge.
49

3.2 Laser configurations
As outlined in Chapter 2, a combination of lasers is employed to manipulate ions. As
shown in Fig. 3.10, when trapping the ion, the 1574 nm nanosecond pulsed ablation
laser is switched on, illuminating the Yb ablation target and generating a Yb atom
beam. The 399 nm laser, originating from the bottom right corner of the chamber,
is directed towards the trap center, inducing the transition from 1S0 →1P1 of the
Yb atom. Simultaneously, the 355 nm global beam is introduced into the trapping
region from the chamber’s left side, kicking out the electron from the Yb atom and
creating the Y b+ ion. Doppler cooling light is directed towards the ion from the
upper left corner of the chamber, along with beams for detection, initialization,
and EIT 1 (coupling). The EIT 2 (probe) beam travels alongside the 399 nm laser
and counter-propagates with the EIT 1 beam, ensuring an optimized polarization
configuration. Additionally, the 355 nm individual beam, not depicted in Fig. 3.10,
traverses the opposite direction of the magnetic field, passing through the trap’s
center (the midpoint of the bow-tie-shaped plate).
3.3 Micromotion compensation
When the ion is trapped within the trapping potential, its motion follows the Equa
tion 2.4. The ion exhibits micromotion, which is directly proportional to q sin(ΩRFt).
Particularly when the ion deviates from the equilibrium position of the RF trapping
potential, commonly referred to as the null point, the influence of micromotion be
comes significant, diminishing the fidelity of gate operations and quantum simula
tions.
The key idea to minimize the micromotion is to move the ion to the RF null point
by adjusting the DC trapping potentials. Typically, we use two methods to move
the ion to the desired position.
50

Figure 3.10: Laser Setup. Adapted from [41]. The underlying image depicts the interior of the vacuum chamber, featuring the trap PCB (gold disk), Phoenix trap (gold square with a bow-tie-shaped plate attached to the PCB), and the Yb ablation target. Arrows denote the orientations of the respective lasers. The inset depicts the ablation target, which features three holes, with the Yb stick positioned within the central aperture, indicated by the red spot. This red spot corresponds to a 632 nm lase-
r beam, co-propagating with the IR 1574 nm laser, facilitating the visual alignment of the IR lasers toward the target.
3.3.1 Time correlation
The first approach is utilizing a time-correlated single photon counting (TCSPC)
device to analyze the temporal correlation between the counts registered by the pho
tomultiplier tube (PMT) and the trap RF signals. A strong temporal correlation
means that the ion oscillates at the same frequency as the trap RF, indicating signif
51

icant micromotion. Adjusting the ion’s position allows us to mitigate this correlation,
thereby minimizing micromotion. It’s noteworthy that this method is most sensitive
to the direction with a non-zero projection onto the Doppler cooling light, as the
PMT counts represent the photons collected from Doppler cooling scattering.
In our experimental setup, the Doppler cooling beam lies within the x-y plane of
the trap, where x denotes the axial direction of the trap and y represents the direction
parallel to the trap surface. The RF potential creates a trapping tube formed by the
RF nulls along the axial direction. Consequently, compensations for micromotion
are consistently performed by adjusting the radial positions of the ion, specifically
along the y direction in this case.
Figure 3.11: Time correlation between PMT counts and RF pick-off signals. The horizontal axis represents the delay time after triggering in the unit of nanoseconds, while the vertical axis denotes the counts observed by the TCSPC at each moment.
Referring to Fig. 3.11, we can modify the DC potentials to displace the ion along
the y direction in order to reduce the oscillating amplitude observed in the time
52

correlation results. This adjustment allows us to minimize the time-correlations
from the blue curve to the green curve.
3.3.2 Micromotion sideband
The second approach is driving the Raman transitions of the micromotion sideband
and minimizing its Rabi frequency. The Rabi frequency of the Raman transition is
dependent on the electric field, where E = E0ei⃗kx⃗ −iωt. Assuming the ion is stationary,
we havex⃗ = 0. However, when the ion undergoes micromotion,x⃗ =α⃗ sin(ΩRFt).
This interaction between the laser and ion becomes proportional to
E0eiβ sin(ΩRF t)−iωt = E0e−iωt[J0(β)+
∞
X
n=1
Jn(β)einΩRF t +
∞
X
n=1
(−1)nJn(β)e−inΩRF t] (3.1)
where β = ⃗kα⃗ is proportional to the amplitude of the micromotion. Jn(β) are the
Bessel function (Fig. 3.12)
Figure 3.12: Demonstration of Bessel function. The Bessel function curves ranging from J0(x) to J5(x).
In Equation 3.1, J0(β) term represents the desired carrier transition, which is
the operation we would like to optimize. Conversely, the higher orders of the Bessel
53

functions correspond to the sideband transitions induced by micromotion. By tun
ing the driving frequency to ω0 ± kΩRF, where ω0 represents the carrier transition
frequency, we can activate the respective sideband transitions. Notably, β = ⃗k ·α⃗ ,
indicating that this method solely probes the micromotion along the ⃗k direction. In
our experimental configuration, ⃗k lies in the y-z plane, coupling both radial direc
tions. As we adjust the ion’s position in the y direction using the first method, we
fine-tune the z direction using this Raman transition approach to minimize β.
To assess and minimize β, we rely on measuring the Rabi frequency of the micro
motion sideband. Typically, measuring the first order of the micromotion is sufficient
when β is small. As depicted in Fig. 3.12, the first order Bessel function exhibits a
monotonic decrease as β approaches zero, particularly when β < 2. However, if the
ion deviates significantly from the RF null position where β is large, relying solely
on the Rabi frequency metric can be misleading. In such instances, driving higher
orders of the micromotion sideband is necessary to ascertain the approximate region
of β.
3.4 Characterization of the system
Through comprehensive characterization, researchers gain insights into the behavior
and dynamics of trapped ions, enabling them to optimize experimental conditions
and enhance experimental outcomes. Some of the characterization results of our
system are outlined below.
3.4.1 Crosstalk
When implementing the Raman transition, we utilize a global beam with an elliptical
shape (waist: 97.45 μm× 8.89 μm), illuminating all ions within a long ion chain.
Additionally, two tightly focused round beams (waist: 1.45 μm× 1.54 μm) serve as
individual addressing beams to manipulate specific ions of interest. In the case of a
54

5-ion chain, with an ion spacing of approximately 5 μm, ideally, the crosstalk from
the tightly focused individual beams would have minimal impact on neighboring ions.
However, due to imperfections in the beam shape, we observed some light scattering
affecting adjacent ions. To quantify this effect, we measured the Rabi frequencies of
all ions when directing the individual beam 1 (2) solely onto the third (fourth) ion of
the 5-ion chain. By comparing the ratio of Rabi frequencies between the neighboring
ion and the target ion, we generated the following crosstalk table.
Table 3.1: Crosstalk within a 5-ion chain: For the first individual beam, the primary crosstalk is on its left neighboring ion, while for the second individual beam, it is on the ion second to its left.
Ion number 123 4 5
Ind 1 (Ion 3) 0.383% 1.55% - 0.997% 0.997% Ind 2 (Ion 4) 0.981% 2.19% 0.981% - 0.455%
3.4.2 Heating rate
The heating rate is a critical parameter in the study of trapped ion systems, rep
resenting the rate at which energy is transferred to the ions from their surrounding
environment, thereby increasing their kinetic energy and leading to unwanted mo
tion. High heating rates can introduce decoherence and limit the performance of
quantum gates, while low heating rates are essential for preserving the quantum
state of the ions and enabling the implementation of complex quantum algorithms.
Therefore, precise measurement and control of the heating rate are indispensable for
realizing high-fidelity quantum simulations.
To determine the heating rate, we initially cool the 5-ion chain to its motional
ground state using a sequence of Doppler cooling, EIT cooling, and sideband cooling
techniques. Subsequently, we allow the ions to remain idle for a defined period before
exciting the blue sideband transition. By fitting the trajectory of the blue sideband
55

transition with an assumption of thermal distribution of the motional modes, we
extract the average phonon number n ̄. The relationship between  ̄n and the waiting
time t provides us with the heating rate, which is determined by the slope of this
relation. In Fig. 3.13, the linear regression analysis illustrates the relationship be
tween the averaged phonon number of the respective motional modes and the waiting
time. This yields the heating rates of 3.61 quanta/s for the zigzag mode and 159.34
quanta/s for the center-of-mass mode.
Figure 3.13: Heating rate of a 5-ion chain. (a) Zig-zag mode. (b) Center-of-mass mode
3.4.3 Coherence time
Measuring the coherence time of a trapped ion system is crucial in the field of quan
tum information science. Coherence time, often denoted as T2, characterizes the
duration over which a quantum state remains coherent before succumbing to deco
herence effects. This parameter is crucial for assessing the robustness of quantum
operations and the fidelity of quantum simulation tasks. A short coherence time
limits the efficiency and reliability of quantum operations.
The Ramsey method is typically used for measuring the coherence time T2 in
trapped ion systems. Rooted in the principles of quantum interferometry, this
method relies on a sequence of two laser pulses applied to the ion qubit, separated
by a variable waiting time τ [42]. During this waiting period, the ion qubit evolves
56

coherently, accumulating a phase that depends on the qubit’s energy splitting and
any external perturbations. After the waiting period, a final laser pulse is applied to
the qubit, followed by state detection. By varying the waiting time and observing the
resulting oscillations in qubit population, one can extract the coherence time T2 from
the decay of these oscillations (Fig. 3.14). This technique provides valuable insights
into the intrinsic coherence properties of the trapped ion system and is essential for
optimizing experimental parameters and mitigating sources of decoherence.
Figure 3.14: Coherence time. Derived from [41]. Ramsey fringe contrast observed in (a) the counter-propagating Raman transition, (b) the blue sideband transition, and (d) the Raman transition from the ground state to one of the Zeeman states. (c) Depiction of the Raman transition from either the |0⟩ or |1⟩ state to one of the encoded |2⟩ qutrit Zeeman levels. To increase the coherence time of the Zeeman states, a μ-metal shield is designed to protect the ions from the external magnetic field fluct-
uations. In (d), the orange and blue dots represent the measured data with the μ−metal shield closed or open, respectively.
57

3.5 Calibration
The calibration of a trapped-ion quantum simulator is crucial for achieving accu
rate and reliable results. The simulator relies on precise control and measurement
of individual ions, and any misalignment can lead to errors in simulation. Proper
calibration ensures that the simulator operates within its specified parameters. Ad
ditionally, calibration is necessary for maintaining consistency in simulations and en
abling reproducibility of experimentally obtained results. Apart from conventional
calibrated parameters like the Raman carrier transition frequency and motional fre
quencies, we also take into account more precise and tailored calibration parameters
for the quantum simulation circuit. This is particularly crucial when incorporating
both single qubit (SQ) and spin-dependent kick (SDK) operations within the circuit.
This section will predominantly focus on three calibration parameters that impact
the fidelity of the simulation:
1. Spin phase difference between SQ and SDK operations
2. Light shift difference between SQ and SDK operations
3. Motional frequency re-calibration considering the light shift
3.5.1 Spin phase difference between SQ and SDK operations
In the trapped-ion experimental setup, we execute the SQ operation (σˆα) using
a carrier Raman transition and perform the SDK operations (σˆβ(bˆ + bˆ†)) by si
multaneously applying the blue- and red-sideband Raman transitions. Here, α in
σˆα ≡ cos (α)σˆx + sin (α)σˆy = e−iασˆ+ + h.c. is the spin phase. In practice, the values
of α and β differ due to various factors:
1. In the phase-sensitive geometry for Raman transitions, α − β = π/2 [38], [43]
58

2. The laser power and phase gradients at the ion position introduces extra spin
phase
3. Imperfect phase realization of the RFSoC system leads to a constant phase
jump
To explain the first two factors, we refer to the Hamiltonian of the SDK (Eqn. 2.38)
HSDK = HBSB + HRSB
= |A|(ˆa + ˆa†)(eiγe−i∆φσˆ+ + h.c.) (3.2)
where A = Ω(0)′
2
η
∆k + i ηΩ(0)
2 and γ = Arg(A). When devoid of laser power and phase
gradient considerations, i.e. Ω′(0) = 0 and Ω(0) is real, the spin phase of the SDK
operation is given by β = ∆φ − π/2, which agrees with α − β = π/2 as stated
above. However, with the inclusion of laser power gradient considerations, γ takes
a nonzero value and introduces an additional spin phase component. Additionally,
when considering the phase gradient of the laser wavepacket, Ω(x) is not necessarily
a real number, introducing extra spin phase difference between the SQ and SDK
operations.
In order to calibrate this spin phase difference between the SQ Hadamard gate
and the SDK operation, the pulse sequence in Fig. 3.15a is employed, where the
scanned spin phase of the SDK operation is denoted as φ0. The ion is initialized
in the ground state |0, n = 0⟩. Subsequent to the Hadamard gate, the ion’s spin
becomes |+⟩ = √12 (|0⟩ + |1⟩). Ideally, when φ0 is zero, the |+⟩ state is the eigenstate
of the SDK operation’s spin operator and remains unchanged throughout. Following
this, the second Hadamard gate reverts the spin state back to |0⟩, resulting in a
population measurement of 1 for observing |0⟩. In contrast, if φ0 ̸= 0, the spin
state will undergo changes during the SDK operation, leading to a deviation from a
population measurement of 1, as shown in Fig. 3.15c. Thus, the spin phase difference
59

Figure 3.15: Calibration of light-shift differences. (a) Illustration of pulse sequence used for calibrating the spin phase and light shift difference difference between the SQ and SDK operations. (b) Visual representation of the laser configurations for the SQ, blue/red sideband transition (BSB/RSB), and SDK operations. (c) (d) Expected probability of measuring the |0⟩ state during the scanning of spin phase φ0 and light shift of the SDK operations, respectively. For the different curves, durati-
on of the SDK operation for each step is varied, where the legend labels indicate the duration divided by the sideband π-time.
between the SQ and SDK operations can be calibrated by finding the φ0 value that
gives the peak population of the |0⟩ state. We note that the SDK operation is
repeated five times where the list of motional phases is given by [0, π, 0, π, 0] in order
to prevent the ion from being excited to high motional states. Extending the SDK
operation duration can amplify the accumulated errors and reduce the linewidth
when scanning φ0, thereby producing a more accurate calibration outcome.
3.5.2 Light shift difference between SQ and SDK operations
When performing the SQ and SDK operations on a trapped-ion quantum simulator,
different laser settings are employed. Specifically, during the application of the SQ
gate, an individual beam and a global beam with the carrier frequency are directed at
the ion, as depicted in Fig. 3.15b. Conversely, for SDK operations, the global beam
carries two tones with respective RSB and BSB transition frequencies. As a result,
the light shift, which depends on the laser intensity, frequency, and polarization,
varies between these two cases.
60

In order to calibrate this light shift difference, we propose a similar calibration
method as depicted in Fig. 3.15a. We iteratively perform the pule sequence while
varying the light shift frequency of the SDK operation. When there is a non-zero
light shift difference between SQ and SDK, an additional spin phase accumulates
during the SDK operation, resulting in a mixed state at the end. Consequently,
the population of |0⟩ deviates from 1, as shown in Fig. 3.15d. Similarly to above,
extending the SDK operation duration can enhance the accuracy of the calibration.
3.5.3 Motional frequency re-calibration considering the light shift
Figure 3.16: Motional frequency calibration. (a) Illustration of pulse sequence used for calibrating the motional frequency. (b) Trajectory of ion in the phase space under this calibration scheme when the applied pulse is on resonance (red) or off resonance (blue). (c) Predictions of the measured population of the |0⟩ state, where the motional detunings is scanned. The legend labels indicate the duration of each SDK operation divided by the sideband π-time.
Common techniques for calibrating the blue-sideband (BSB) and red-sideband
(RSB) frequencies involve either direct measurement of the transition’s spectrum or
indirect determination of the detunings via Ramsey interferometric fringes. As de
picted in Fig. 3.15b, the calibration process for BSB and RSB frequencies typically
utilizes a laser beam at a constant frequency, while scanning the frequency of the
other beam around the relevant frequency. However, much like the situation de
scribed earlier, the light shifts experienced in these scenarios differ from those during
61

the SDK operations, resulting in slight inaccuracies.
To address the potential inaccuracies in the calibration of motional frequencies,
one straightforward approach is to employ the SDK operations for accurately deter
mining the motional frequencies. This method is illustrated in Fig. 3.16a, beginning
with the ion initialized in the ground state for both its spin and motion (|n = 0⟩).
Subsequently, four SDK pulses are applied at motional phases of 0, π/2, π, and
3π/2. If the laser frequency perfectly matches the motional frequency, the ion’s
phase space trajectory will align with the red lines in Fig. 3.16b, ultimately return
ing to the original pure state |0, n = 0⟩. However, if the laser frequency is detuned
from the motional frequency, the ion will trace the blue trajectory, leading to a mixed
state. When measuring the spin, the population of the |0⟩ state will deviate from 1.
By scanning the detuning of the laser and measuring the population of the |0⟩
state, we can identify the maximum point, which corresponds to the motional fre
quency we aim to calibrate (Fig. 3.16c). Moreover, increasing the SDK operation
duration of each step reduces the linewidth of the scanned curve, improving the pre
cision of the calibration. This method allows for precise calibration of the motional
frequency, ensuring accurate and reliable simulations in the trapped ion quantum
simulator.
3.6 Phase tracking
Once we have determined the frequencies and phases to be applied to the ion, it
is essential to accurately implement the necessary control signals on the ion. Here
we outline the procedures for controlling the laser phases to ensure synchronization
with the ion phases. A simple pulse sequence shown in Fig. 3.17a is considered as an
example that incorporates SQ rotations and SDK operations on two motional modes,
where the number of Trotterization steps is set as N = 5. It is important to note
that the parameter values used in this example are chosen for clear visualization and
62

Figure 3.17: Demonstration of phase tracking. (a) Pulse sequence used for showing the phases. (b) (c) Illustration of the evolution of different phases over time, including the spin and motion of the ion (ion spin/motion), the desired phases for implementing this pulse sequence (target red/blue tone), and the phases produced by the control software without applying additional phases (RF red/blue tone). Difference in light shifts between the SQ and SDK operations, as well as additional motional de-
tunings, is assumed to be absent in (b) but present in (c).
thus are not at scale.
Figure 3.17 displays the phases of the ion and the RFSoC control system. In this
analysis, we utilize the frequency of the carrier transition (|0⟩ to |1⟩ transition) as
the rotating frame. In practice, we set the repetition rate of the 355nm pulse laser to
eliminate the light shift of the carrier transition. Thus, we assume the light shift of
the carrier transition is zero. If not considering the light shift of the SDK operation,
the spin phase of the ion remains constantly at zero in this frame, as indicated by
the green line in Fig. 3.17b. Furthermore, regardless of the pulses applied to the ion,
the motional modes oscillate at their respective motional frequencies. By setting the
initial motional phase to zero at the start of the first SQ operation, the phase of
the two motional modes of interest evolves as depicted by the two pink lines. To
effectively monitor the ion’s phase, we must align the phases of the lasers with the
blue and red curves in Fig. 3.17b, which track the spin phase during the SQ operations
and the blue and red motional phases during the SDK operations. Specifically, the
63

target curves follow φb,r = φs (φb,r = φs ± φm) for the SQ (SDK) operations. On the
other hand, in the absence of additional phases applied to the RFSoC, the control
system’s phase follows the dashed curve if we sync the phase each time we apply an
SQ operation. Consequently, we can determine the additional phase required to be
added to the laser by subtracting the dashed curve from the solid curve.
We now take into account the difference in light shifts between the SQ and SDK
operations. The green curve in Fig. 3.17c, which represents the ion spin’s phase,
exhibits a non-zero slope that is equivalent to the difference in light shifts, whenever a
SDK operation is applied. Likewise, introducing additional detunings to the motional
modes incurs the dashed curves to feature distinct slopes compared to the ion motion
phase curves. Thus, the target phase curves need to be altered accordingly.
64

4
Quantum Simulation of Polarized Light-induced
Electron Transfer
This chapter contains results from
Ke Sun, Chao Fang, Mingyu Kang, Zhendian Zhang, Peng Zhang, David N.
Beratan, Kenneth R. Brown, and Jungsang Kim, J. Phys. Chem. Lett. 14 (26),
6071-6077 [44]
The study of electron transfer within and among molecules plays a vital role in
fields such as chemistry, biochemistry, and energy science. This research introduces
a novel quantum simulation technique to investigate how the polarization of light
affects electron transfer between molecules. By precisely manipulating the quantum
states of trapped atomic ions, we can induce quantum dynamics that mimic the
electron transfer dynamics in molecules. We use 3-level systems (qutrits), rather than
traditional two-level systems (qubits) to enhance the simulation efficiency and realize
high-fidelity simulations of electron transfer dynamics. We analyze the quantum
interference between pathways through which electrons move from a donor molecule
with two identical excited states to an acceptor molecule, assessing transfer efficiency.
Additionally, we scrutinize potential sources of error in the quantum simulations.
65

Trapped ion systems offer favorable scalability with system size compared to classical
computers, promising increasingly detailed electron-transfer simulations.
4.1 Introduction
Electron transfer between molecules is of central interest in energy science, signal
transduction, and catalysis in both living and non-living systems [9], [10]. Quantum
effects, especially those associated with electronic coupling pathways, play a key
role in the dynamics and efficiency of these reactions [11]. Light-induced electron
transfer that involves many electronic and vibronic pathways can be influenced by the
intensity and polarization of the excitation light [12]. Specifically, light polarization
determines the superposition of the initially prepared state. And the dynamics of
electron transfer are affected by the coupling interactions mediated by interfering
pathways. [13], [14].
Isolating and manipulating the effects of light polarization on molecular electron
transfer in experiments is challenging because of the complexity of assembling and
manipulating the pathways, and also because of the dephasing interactions induced
by the surroundings. Therefore, there have been limited experimental investigations
in condensed-phase chemistry that directly manipulate the multi-pathway interfer
ence effects, and simulations are widely used to study quantum dynamics. Trapped
ion quantum simulators are proposed to offer an advantage over classical-digital sim
ulations for issues encountered in quantum chemistry since computational resources
that are intrinsically quantum mechanical in nature may be best suited for exploring
quantum properties. Feynman first suggested the concept of quantum simulation in
1982, highlighting the potential for one quantum system to simulate another more
efficiently than might be possible using classical computers [45]. Prior simulations
of molecular quantum dynamics using trapped ions involved simulating quantum
transport in a long ion chain by engineering coupling strengths based on inter-ion
66

distances [46] and simulating vibrationally-assisted energy transfer with qubits (two
level systems) and their collective motional modes [47].
Here, we describe a quantum simulation that uses a fully programmable trapped
ion qutrit (three-level system) platform to simulate light-induced electron-transfer
dynamics. We employ a Trotterization method [48], [49] which enables quantum sim
ulation of (both time-independent and dependent) Hamiltonian consisting of multiple
non-commuting terms with high accuracy (see Experimental Methods for details).
To optimize the efficiency and accuracy of a quantum simulation task, it is prefer
able to minimize the number of qubits and multi-qubit entangling operations em
ployed. The latter is of particular significance due to the susceptibility of entangling
operations to decoherence [50]. A potential strategy to overcome this limitation is to
use many (d) atomic levels per ion, or qudits, when encoding the molecular Hamilto
nian in the trapped-ion system [51]–[54], to reduce the lower bound on the number of
ions required to simulate an n-site (n-level) electron-transfer process from ⌈log2(n)⌉
(qubits) to ⌈logd(n)⌉ (qudits)1. Here, we use a qutrit (d = 3) system, rather than
more familiar qubit (d = 2) structures. By using single-qutrit operations rather than
two-qubit operations, we minimize the number of ions that is required for the com
putation, and we replace the multi-ion entangling operations with operations that
manipulate the atomic levels of a single ion. This produces significantly faster op
erations, with a longer coherence time and higher accuracy for tracking the electron
transfer dynamics being modeled. The advantages of our approach are demonstrated
experimentally and analyzed using classical numerical simulations as well.
1 Whether this lower bound is achievable may depend on the structure and parameter values of the Hamiltonian. For example, Ref. [55] simulates a 4-level system using two qubits, where the Hamiltonian parameters are chosen to obey certain symmetries.
67

4.2 Ingredients for quantum simulation
4.2.1 Target Model
The model for polarized light-induced electron transfer (PLET) considered here con
tains donor and acceptor molecules where the electron localizes. An excitation source
with adjustable polarization drives a donor-localized excitation from the ground state
|G⟩ to two degenerate or near-degenerate excited states (|D1⟩ and |D2⟩). If the ex
cited states are degenerate, the polarization of the light determines the nature of
the excited-state superposition. The electronic transitions to excited states |D1⟩ and
|D2⟩ are assumed to have orthogonal transition dipole moments μ(⃗ 1 ⊥μ⃗ 2). Thus,
the polarization of the exciting light will determine the amplitude and phase of the
excited state superposition. The interaction between the degenerate donor states
and the acceptor state (|A⟩) is described by the couplings V1 and V2.
Electron transfer proceeds as follows (Fig. 4.1a). Exciting light impinges on
the donor-acceptor (DA) system from time t = 0 to t = t1 (Fig. 4.1b). A donor
excited-state superposition, and the propagation of the electron from the donor to
the acceptor, are enabled by the off-diagonal donor-acceptor couplings denoted V1
and V2.(Fig. 4.1c). The time-averaged acceptor population determines the electron
transfer efficiency in the time between t1 and t2.
For this DA system of interest, light-driven electron transfer is much faster than
radiative or non-radiative decay to the ground state. As such, the dynamics can be
separated approximately into two steps. In the photo-excitation step (t ∈ [0, t1)) the
electronic transition occurs between the ground state and degenerate excited donor
states (Fig. 4.1b), since the coupling between donor and acceptor is weak. Then, in
the electron transfer (ET) phase (t ∈ [t1, t2]), the electron migrates to the acceptor
(Fig. 4.1c). Since radiative and non-radiative decay to the ground state is slower than
excitation or electron transfer, only three states (|D1⟩, |D2⟩ and |A⟩) are relevant to
68

the dynamics.
Figure 4.1: Simulation model. (a) Schematic representation of the polarized lightdriven electron transfer. (b) and (c) show energy level diagrams indicating the ground state, degenerate donor excited states, and the acceptor state.
Writing the electric field of the polarized light source (in atomic units) as ⃗E(t) =
[Ex(t), Ey(t), Ez(t)], where x (y) is the direction ofμ⃗ 1 μ(⃗ 2), the Hamiltonians de
scribing the two steps are given by
Hˆ1(t) =
X
j
ωj|j⟩⟨j| + [μ1Ex(t)|G⟩⟨D1| + μ2Ey(t)|G⟩⟨D2| + h.c.] (4.1)
Hˆ2 =
X
k
ωk|k⟩⟨k| + [V1|D1⟩⟨A| + V2|D2⟩⟨A| + h.c.] (4.2)
where j = {G, D1, D2} for the photo-excitation step and k = {D1, D2, A} for the
ET step, and ωj (ωk) is the energy for each state (ħ = 1).
4.2.2 Experimental setup
The simulation circuit is implemented on a 171Yb+ ion confined in a micro-fabricated
surface trap [27]. The qutrit energy levels are encoded as the hyperfine energy lev
els of the 2S1/2 orbital: |0⟩ ≡ |F = 0; mF = 0⟩, |1⟩ ≡ |F = 1; mF = 0⟩, and
|2⟩ ≡ |F = 1; mF = −1⟩. In this ion, the |0⟩ and |1⟩ states remain coherent and form
an ideal qubit state. The coherence of |2⟩ depends strongly on the ambient magnetic
69

field noise. We use a mu-metal shield to reduce the magnetic field noise experienced
by the atomic ion by over two orders of magnitude, so all three qutrit states remain
highly coherent [56]. The transitions from |0⟩ to |1⟩ and |2⟩ are achieved using stim
ulated Raman transitions driven with a pair of laser beams [57]. We choose laser
polarization settings so that the Rabi frequencies of |0⟩ to |1⟩ and |0⟩ to |2⟩ are
close (2π × 17.30 kHz and 2π × 17.49 kHz, respectively). Acousto-optic modulators
(AOMs) are used to tune the frequency and phase of each laser beam, while also
allowing the beams to act as switches for each transition. At the end of the simula
tion, we have the ability to measure the probability of the qutrit in each of the states
|0⟩, |1⟩, and |2⟩. In a standard readout approach using a state-dependent fluorescence
technique, the |0⟩ state remains dark while both |1⟩ and |2⟩ states scatter photons
(and therefore remain indistinguishable) upon illumination with the readout beam.
To distinguish these two states, we first swap the population of the |1⟩(|2⟩) state with
the |0⟩ state using the Raman transition and then perform measurements of the dark
state population to determine the probability of the qutrit state (prior to the swap)
being in the |1⟩ (|2⟩) state. Details of the experimental setup are described in Refs.
[56], [57].
4.2.3 Trotterization and trapped-ion operation
The Trotterization method provides a way to simulate the time evolution of a Hamil
tonian with multiple non-commuting terms by simulating the unitary operation cor
responding to each individual term for a short time duration, and repeating this for
each term and time step [48], [49]. We use the following Trotterization method to
simulate the time evolution of Hˆ1(t), which can be applied straightforwardly to Hˆ2.
Hˆ1(t) is written in the interaction picture as
HˆI,1(t) = Hˆ (1)
I,1 (t) + Hˆ (2)
I,1 (t), (4.3)
70

where
Hˆ (1)
I,1 (t) = μ1Ex(t)ei(ωG−ωD1)t|G⟩⟨D1| + h.c., (4.4)
Hˆ (2)
I,1 (t) = μ2Ey(t)ei(ωG−ωD2)t|G⟩⟨D2| + h.c. (4.5)
The time evolution Uˆ with respect to HˆI,1(t) up to time T is Trotterized into N
discrete time steps.
Uˆ = UˆN UˆN−1 · · · Uˆ1 = Uˆideal(T ) + O[(T /N )3], (4.6)
where
Uˆideal(T ) = T exp −i
ZT
0
HI,1(t′)dt′ . (4.7)
Here, T is the time-ordering operator, which orders the exponentiated Hamiltonians
in chronological order. Also, the time evolution for each time step is built from a
second-order Trotter formula [49]
Uˆj = e−iHˆ (1)
I,1 (tj ) T
2N e−iHˆ (2)
I,1 (tj ) T
N e−iHˆ (1)
I,1 (tj ) T
2N , (4.8)
where tj ≡ (j − 1/2)T /N . Each step corresponds to a simulated time evolution of
T /N and we plot the dynamics according to this simulated time. N needs to be
sufficiently large to simulate the time evolution of the system accurately.
We map the molecular states |G⟩, |D1⟩, and |D2⟩ to the trapped-ion qutrit states
|0⟩, |1⟩, and |2⟩, respectively. The evolution of the molecular states described above
can be mapped to single-qutrit operations. For a transition between |0⟩ and |α⟩
(α = 1, 2), the time evolution up to time τ ̃ is given by
U ̃ = e−iH ̃ τ ̃, (4.9)
where
H ̃α = Ωα
2 eiφα|0⟩⟨α| + h.c., (4.10)
71

Here, Ωα and φα are the Rabi frequency and phase, respectively, determined by the
intensity and phase of the laser beam that drives the transition. Thus, the values
of amplitude μ1Ex(tj)T /2N [μ2Ey(tj)T /N ] and phase (ωG − ωD1)tj [(ωG − ωD2)tj]
of each term in Eq. (4.8) can be mapped to Ωατ ̃ and φα of the corresponding qutrit
control operation, respectively. We can program these quantities by shaping the
control laser beams.
In our experiments, it is desirable to use a fixed value of Ωα because of the
difficulty associated with calibrating and stabilizing the laser intensity that drives
the transition between the atomic states. Thus, instead of tuning Ωα, we vary the
evolution time τ ̃ for each Trotterization step with a constant Rabi frequency Ωα to
simulate the electric field that varies over time. This method using Trotterization
allows us to perform accurate simulations with a targeted upper bound on the error.
4.3 Experimental Results
4.3.1 Photo-excitation
We first study the photo-excitation step, which is the first step of the PLET, de
scribed by Hamiltonian Hˆ1(t) in Eq. (4.1). Specifically, we analyze the influence of
the linearly-polarized light on the electronic dynamics.
As transition dipole moments of the two electronic transitions are orthogonal
(Fig. 4.1(b)), different polarization angles will lead to different superpositions of the
degenerate states in the excited-state wave function. Thus, the state of the system
will have the form
|Ψ(t)⟩ = α(t)|G⟩ + β1(t)|D1⟩ + β2(t)|D2⟩. (4.11)
For a linearly polarized laser, the transition dipole moment and the electric field
make a constant angle θ throughout the photo-excitation process. Consequently, the
ratio r between the electric dipole transition strengths from the ground state to the
72

two degenerate excited states is real and constant with time:
r ≡ μ1Ex(t)
μ2Ey(t) = μ1E0 cos(θ) sin(ωt)
μ2E0 sin(θ) sin(ωt) = μ1
μ2
cot(θ). (4.12)
As a result, the ratio between the populations of the two excited states P (|D1⟩)
and P (|D2⟩) is fixed over time. We quantify this ratio as the normalized population
difference, defined as
ρ ≡ P (|D1⟩) − P (|D2⟩)
P (|D1⟩) + P (|D2⟩) . (4.13)
We also define the relative phase between the two excited states as φ where eiφ ≡
β2
|β2| / β1
|β1| . For linearly polarized laser, r is real, so φ is either 0 or π.
Figure. 4.2(a) shows the normalized population difference ρ and phase φ as a func
tion of the incident polarization angle θ. The population difference is obtained from
both numerical calculations and quantum-simulation experiments. For the quantum
simulation, we map |G⟩, |D1⟩, and |D2⟩ to |0⟩, |1⟩, and |2⟩ of the trapped-ion qutrit,
respectively.
4.3.2 Electron transfer
Subsequently, we study the electron-transfer process, which is the second step of the
PLET described by Hamiltonian Hˆ2 in Eq. (4.2). Specifically, we study the influence
of (i) the relative phase of the initial states and (ii) the energy-level difference of the
two excited states on the electron-transfer efficiency.
The phase difference between the two degenerate excited states of the donor |D1,2⟩
determines whether the interference is constructive or destructive. The initial state
is selected such that the populations of the two degenerate states are equal and the
73

Figure 4.2: Photo-excitation process. (a) The normalized population difference and relative phase between |D1⟩ and |D2⟩, as functions of the angle of the laser light’s linear polarization. (b) An example of the raw experimental data (denoted with a red rectangular box in a). The red (blue) solid lines show the theoretical prediction of the population of |D1⟩(|D2⟩), while the red (blue) points represent the experimental data. This plot shows the time evolution with E0 = 2.2 × 109 V/m,μ⃗ 1 = e · {4-
.58, 0, 0}a.u., μ⃗ 1 = e · {0, 4.58, 0}a.u. The donor ground and excited state energies are set to be ωG = 0, and ωD1 = ωD2 = 3.89 eV, respectively. The simulation is divided into 40 Trotter steps. Each step corresponds to an elapsed time of τ = 0.198 fs. Scanning the Trotter steps is the same as observing the time evolution of the electron transfer. In (b), the polarization angle θ is 135◦. The populations of |D1⟩ and |D2⟩ are the same since the projections of the electric field of the laser on b-
oth electric dipole orientations of the two excited states are the same. Thus, the solid blue and red lines overlap.
population of the ground state is zero:
|Ψ0⟩ = √12 (|D1⟩ + eiφ|D2⟩) (4.14)
This corresponds to α = 0, |β1| = |β2|, and β2/β1 = eiφ [see Eq. (4.11)].
Figure 4.3 shows the results of both numerical calculations and quantum simu
lations describing the electron transfer to the acceptor state from this initial state.
For the quantum simulation, we map |A⟩, |D1⟩, and |D2⟩ to |0⟩, |1⟩, and |2⟩ of the
trapped-ion qutrit, respectively. Figure 4.3(a) and (b) show the time-averaged values
of the resulting population of the two donor states (measured as a deviation from
74

Figure 4.3: Simulation of the electron transfer with varying initial phase differences The initial state is prepared as described by Eq. (4.14). (a) Simulated (dots) and calculated (lines) values of the time-averaged population of the two excited states as a function of the phase difference φ of the initial state, plotted as the deviation from 0.5 (σ1,2). (b) The time-averaged population of the acceptor state as a function of the phase difference φ in the initial donor state. Panels (c) and (d) s-
how the experimental (dots) and calculated (lines) time-evolution of the two donor and the acceptor states when φ = 90◦ (Marked with red rectangular boxes in a and b). The horizontal axis corresponds to the number of Trotter steps used in the simulation (up to 70), each corresponding to 0.471 fs of time evolution. Here, ωD1 = ωD2 = 3.89 eV, ωA = 3.01 eV, V1 = V2 = 0.25 eV.
the initial values of |β1|2 = |β2|2 = 0.5) and the acceptor state, respectively, as a
function of the initial phase difference φ. The time-averaged deviation of the donor
population is defined as
σ1,2 ≡
s
PN
i [Pi(|D1,2⟩) − 0.5]2
N , (4.15)
where i represents the ith Trotterization step. Note that when φ = 180◦, the ini
tial state does not transfer any population to the acceptor state due to destructive
interference between the two coupling pathways from |D1⟩ and |D2⟩, and therefore
the population of the two donor states does not change. This is also reflected by
the fact that the acceptor population is zero at this value. Using the parameters of
the Hamiltonian summarized in the figure caption, we simulated the time evolution
75

of the two donor state populations (Fig. 4.3(c)) and the acceptor state population
(Fig. 4.3(d)) with an initial phase difference of φ = 90◦. The horizontal axis indicates
the number of Trotter steps (up to 70), representing the time evolution (each step
corresponding to τ = 0.471 fs of time evolution).
In the case of non-degenerate donor states |D1⟩ and |D2⟩, quantum interference
is expected to be suppressed compared to the degenerate case where interference is
significant. To investigate this, we begin with an initial 180◦ phase difference that
results in destructive interference and track the changes in interference as energy
degeneracy is lifted. Note that changes in the donor’s conformation could break the
molecule’s symmetry, lifting the degeneracy of the excited states, but the coupling
between these two excited states remains small since they are orthogonally polarized.
Figure 4.4(a) and (b) show the time-averaged populations of the two donor states
(measured as a deviation from the initial value of 0.5) and the acceptor state, respec
tively, as the energy ωD2 of the second donor state |D2⟩ is varied from the energy
ωD1 = 3.86 eV of the first donor state |D1⟩. When these two states degenerate
(ωD2/ωD1 = 1), the destructive interference keeps the donor state populations at 0.5
each, and the acceptor state population at 0. As the energy degeneracy is lifted,
destructive interference is suppressed, with a very narrow full-width at half maxi
mum (FWHM) linewidth of about 0.73%. Figures 4.4(c) and (d) show the quantum
simulation from the ion trap system (dots) and calculated (lines) values of the donor
and acceptor populations as a function of time, plotted as a function of the Trotter
ized steps (up to 70 steps), each step corresponding to the time evolution of 0.659
fs, when ωD2/ωD1 = 0.974. Although the acceptor state population is very small
(< 0.01) comparable to the measurement limit of our quantum simulator (deter
mined by the shot noise and state preparation and measurement error), we can see
clear evidence of the degradation of the destructive interference from the change in
donor-state populations.
76

Figure 4.4: Simulation of destructive quantum interference (φ = 180◦) as donor state degeneracy is lifted. (a) Simulated (dots) and calculated (lines) values of the time-averaged population of the donor states as a function of the energy difference between the two donor states, plotted as a deviation from 0.5. (b) The time-averaged population of the corresponding acceptor state. (c) and (d) show the simulated (dots) and calculated (lines) time-evolution of the population of the two donor states a-
nd the acceptor state, respectively when ωD2 = 3.76, ωD2/ωD1 = 0.974 (Marked with red rectangular boxes in a and b) The horizontal axis corresponds to up to 70 Trotter steps used in the simulation where each step represents 0.659 fs of time evolution. Here, ωD1 = 3.86 eV, ωA = 3.01 eV, V1 = V2 = 0.25 eV, and φ = 180◦.
4.4 Analysis of simulation accuracy
4.4.1 Trotterization error
We analyze the contributions of errors to the simulations in order to determine the
accuracy of our trapped-ion quantum simulator. First, the Trotterization method
used in the quantum simulation inevitably introduces errors, as the time evolution
of the Hamiltonian with non-commuting terms is discretized into a finite number of
steps (see Eq. (4.6)). Any implementation error arising from the experimental setup
adds to this theoretical Trotterization error. Therefore, we compare the theoretically
predicted state populations Pth, derived from direct time evolution of the Hamilto
77

nians in Eqs. (4.1) and (4.2), with the experimentally measured populations Pexp as
well as the theoretical Trotterized predictions for populations PTro.
Figure 4.5 shows the comparison of these three quantities. Figure 4.5(a) plots the
theoretical calculation of the temporal dynamics for the population of the two excited
donor states |D1⟩ and |D2⟩ during the photo-excitation step as a solid line. The solid
square with dashed lines shows the calculated population using Trotterization (see
Eqs. (4.6) and (4.8)). We observe small deviations from the ideal time evolution. The
circular points with error bars in Fig. 4.5(a) indicate the measured values from the ion
trap quantum simulator, which aligns well with the theoretical values. Figure 4.5(b)
shows similar comparisons for the electron transfer step for all three states |D1⟩, |D2⟩
and |A⟩.
Figure 4.5: Error source analysis. Comparison between the theoretically calculated populations (Pth, solid lines), Trotterization-method predicted populations (PTro, dashed lines with square dots), and experimentally measured populations (Pexp, dots with error bars) in (a) the photo-excitation process and (b) the electron transfer process as a function of time. In (a), populations of both excited states |D1⟩ (red) and |D2⟩ (blue) are plotted. In (b), populations of both excited states |D1⟩ (red) a-
nd |D2⟩ (blue) and the acceptor state |A⟩ (green) are plotted.
To analyze the deviation between the population values Pth, Pexp and PTro quan
titatively, we first denote the population of the state |i⟩(i = D1, D2, A) at the jth
Trotterization step as Px,i,j, where x represents the ideal theoretically predicted pop
ulation (x = th), theoretically predicted population using Trotterization (x = Tro),
78

or experimentally measured population (x = exp). We define two parameters of
interest for each state |i⟩: (i) the time-averaged mean distance (σTro,i) between the
population predicted by the theoretical time evolution (Pth,i,j) and the predicted
population by Trotterization analysis (PTro,i,j) and (ii) the average mean distance
(σexp,i) between Pth,i,j and the experimentally measured population (Pexp,i,j). These
two mean distances are defined as
σTro,i ≡
v u u t
N
X
j=1
(PTro,i,j − Pth,i,j )2
N , (4.16)
σexp,i ≡
v u u t
N
X
j=1
(Pexp,i,j − Pth,i,j )2
N , (4.17)
where N is the number of Trotterization steps.
In both photo-excitation and electron transfer processes, each data point in
Fig. 4.2(a), 4.3(a,b) and 4.4(a,b) is obtained by a time evolution trial. We calculate
the average distance between Pth and PTro for each time evolution trial and obtain
σTro,i,k, where i = |D1⟩, |D2⟩, |A⟩ and k denotes the index of the time evolution trial.
We then calculate the mean distance of each state σ ̄Tro,i vs. the theoretical value by
averaging over k. Similarly, we compute the mean distance between the Pth and Pexp
values for each state σ ̄exp,j. The data are summarized in Table 4.1.
Table 4.1: Mean distances of the state populations compared to the ideal theoretical values for both photo-excitation and electron transfer processes.
Photo-excitation Electron transfer Simulated time 7.91 fs 32.91 fs
States σ ̄Tro σ ̄exp σ ̄Tro σ ̄exp
|D1⟩ 0.0067(18) 0.043(9) 0.024(3) 0.071(13) |D2⟩ 0.0051(15) 0.044(9) 0.024(3) 0.078(13) |A⟩ - - 0.018(4) 0.043(9)
79

The electron transfer process exhibits a larger σ ̄Tro than the photo-excitation pro
cess, as the error in the Trotter approximation accumulates to a larger value with
a longer simulation time. To mitigate this effect, a larger number of Trotter steps
N can be used to decrease the value of T /N in Eq. (4.6). However, due to experi
mental noise, the measured σ ̄exp is not dominated by Trotter error. Improving qutrit
coherence time and accuracy of state preparation and measurements can reduce the
experimental error. If experimental noise is no longer a dominant source of error,
increasing N needs to be considered.
4.4.2 Comparison with qubits
Trapped-ion qubit simulations
In this research we use a single trapped-ion qutrit to simulate the PLET dynamics. A
more conventional experimental architecture than a qutrit system is a qubit system,
where two atomic states per ion are used to encode the molecular electronic states. As
Hˆ1(t) and Hˆ2 each describe three states, at least two ions and two-qubit operations
are required to map these Hamiltonians to trapped-ion qubits. Two-qubit operations
require coupling the ions’ internal qubit states to an “entanglement bus”, which is
the collective motion of the ion chain [23], [30], [31]. The normal modes of this
collective motion, known as the motional modes, are more susceptible to external
noise and thus often become the major limitation to realizing quantum computation
and simulation with high accuracy [58], [59].
In this section, we briefly describe how the Hamiltonians Hˆ1(t) and Hˆ2 in Eqs.(4.1)
and (4.2) can be simulated using single-qubit and two-qubit operations on two qubits.
Without losing generality, we only show for the electron-transfer Hamiltonian Hˆ2, as
it is straightforward to use the same method for the photo-excitation Hamiltonian
80

Hˆ1. We first rewrite Hˆ2 in matrix form as
Hˆ2 =


ω ̃A V1 V2 V1 ω ̃D1 0 V2 0 ω ̃D2

 , (4.18)
where we define ω ̃j ≡ ωj −(ωA +ωD1 +ωD2)/3 such that P
j ω ̃j = 0 (j ∈ {A, D1, D2}),
as redefining the zero-point energy does not change the dynamics with respect to the
Hamiltonian.
To simulate Eq. (4.18) using two qubits, we map |A⟩, |D1⟩ and |D2⟩ to the two
qubit computational basis states |00⟩, |01⟩ and |10⟩, respectively. The |11⟩ state needs
to be decoupled from the evolution of the other three states. Thus, the corresponding
two-qubit Hamiltonian is expressed in the matrix form as
Hˆ (qubit)
2=

  
ω ̃A V1 V2 0 V1 ω ̃D1 0 0 V2 0 ω ̃D2 0 0 0 00

  
. (4.19)
This trace-less Hamiltonian can be expressed as a linear sum of two-qubit Pauli
matrices:
Hˆ (qubit)
2 =a1σˆx ⊗ I + a2I ⊗ σˆx + a3σˆz ⊗ I + a4I ⊗ σˆz
+ b1σˆx ⊗ σˆz + b2σˆz ⊗ σˆx + b3σˆz ⊗ σˆz, (4.20)
where
a1 = (ω ̃A + ω ̃D1)/2,
a2 = (ω ̃A + ω ̃D2)/2,
a3 = b1 = V2/2,
a4 = b2 = V1/2,
b3 = −(ω ̃D1 + ω ̃D2)/2.
81

The time evolution of the system with the Hamiltonian of Eq. (4.20) can be
simulated using Trotterization. Specifically, for each Trotterization time step, the
evolution with respect to each of the first four terms can be simulated using single
qubit gates. Also, the evolution with respect to each of the last three terms of
Eq. (4.20) can be simulated using the Mølmer-Sørensen [30], [31] interaction, which
implements the Hamiltonian proportional to σˆx ⊗ σˆx, conjugated with single-qubit
Hadamard gates.
Qutrit vs. qubit implementation
In this section, we use classical computers to compare the predicted accuracy of simu
lating the electron-transfer Hamiltonian Hˆ2 in Eq.(4.2) using trapped-ion qubits and
qutrit. For qubit simulations, single-qubit and two-qubit operations are performed on
two ion qubits as described in Sec. 4.4.2. For qutrit simulations, only single-qutrit
operations are performed on one ion qutrit. Since single-qutrit operations do not
require interaction between different ions via the collective motion of the ions, the
operations are not affected by the decoherence induced by the motional modes. Also,
single-qutrit operations have a much shorter gate time than two-qubit operations,
which reduces the impact of decoherence. As such, qutrit simulations are expected
to achieve significantly higher accuracy than qubit simulations in predicting the time
evolution of state populations.
We use QuTip [60] to numerically simulate the quantum simulation using qubits
and qutrit under the relevant noise. Specifically, we solve the Lindblad master equa
tion [61]
dρˆ
dt = −i[Hˆ , ρˆ] +
X
k
LˆkρˆLˆ†
k−1
2
Lˆ†
kLˆkρˆ − 1
2 ρˆLˆ†
kLˆk ,
where ρˆ is the density matrix, Hˆ is the Hamiltonian of the desired operation, and
Lˆk is the kth Lindblad operator of the corresponding decoherence process.
82

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:52.611Z
- **Text Length:** 145810 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
