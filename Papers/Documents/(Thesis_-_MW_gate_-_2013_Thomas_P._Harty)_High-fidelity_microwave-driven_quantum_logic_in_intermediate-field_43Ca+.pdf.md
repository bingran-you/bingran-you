# PDF Document: (Thesis - MW gate - 2013 Thomas P. Harty) High-fidelity microwave-driven quantum logic in intermediate-field 43Ca+.pdf

**File Path:** (Thesis - MW gate - 2013 Thomas P. Harty) High-fidelity microwave-driven quantum logic in intermediate-field 43Ca+.pdf

**Processed Date:** 2026-02-10T18:17:42.656Z

**File Size:** 5555.71 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 219

**Collection:** Ion Trap > Laser free gate

---

## Extracted Text Content

High-Fidelity Microwave-Driven
Quantum Logic in Intermediate-Field 43Ca+

Mean number of errors Clock transition frequency offset (Hz)
S helved population

14

12

10

8

6

4

2

0

−2−100

−50

0

50

100

Magnetic field offset (mG)

0.5

0.006

0.45

0.4

0.005

0.35

0.004

0.3

0.25

0.003

0.2

0.002

0.15

0.001

0.1

SPAM error

0.05

00

500

1000

1500

2000

Number of computational gates

0−2

−1

0

1

2

Microwave detuning (kHz)

Thomas P. Harty
A thesis submitted for the degree of Doctor of Philosophy Balliol College Michaelmas Term, 2013
Department of Physics, University of Oxford

Abstract
High-Fidelity Microwave-Driven Quantum Logic in Intermediate-Field 43Ca+ Thomas P. Harty A thesis submitted for the degree of Doctor of Philosophy Michaelmas Term 2013 Balliol College, Oxford
This thesis is concerned with the development of an intermediate magnetic ﬁeld “clock-qubit” in 43Ca+ at 146 G and techniques to manipulate this qubit using microwaves and lasers. While 43Ca+ has previously been used as a qubit, its relatively complicated level structure – with a nuclear spin of 7/2 and low-lying D-states – makes cooling it in the intermediate ﬁeld an intimidating prospect. As a result, previous experiments have used small magnetic ﬁelds of a few gauss where coherence times are li-
mited and off-resonant excitation is a signiﬁcant source of experimental error.
We demonstrate a simple scheme that allows 43Ca+ to be cooled in the intermediate ﬁeld without any additional experimental complexity compared with low ﬁelds. Using the clock-qubit, we achieve a coherence time of T2∗ = 50 (10) s – the longest demonstrated in any single qubit. We also demonstrate a combined state preparation and measurement error of 6.8 (6) × 10−4 – the lowest achieved for a hyperﬁne trapped ion qubit [NVG+13] – and single-qubit logic gates with average errors of 1.0 (3) × 10−6 – m-
ore than an order of magnitude better than the previous record [BWC+11]. These results represent the state-of-the-art in the ﬁeld of single-qubit control. Moreover, we achieve them all in a single scalable room-temperature ion trap using experimentally robust techniques and without relying on the use of narrow-linewidth lasers, magnetic ﬁeld screening or dynamical decoupling techniques.
We also present work on a recent scheme [OWC+11] to drive two-qubit gates using microwaves. We have constructed an ion trap with integrated microwave circuitry to perform these gates. Using this trap, we have driven motional sideband transitions, demonstrating the spin-motion coupling that underlies the two-qubit gate. We present an analysis of likely sources of experimental error during a future two-qubit gate and the design and preliminary characterisation of apparatus to minimise the main error-
 contributions. Using this apparatus, we hope to perform a two-qubit gate in the near future.
i

Acknowledgements
Perhaps the pleasantest aspect of writing a DPhil thesis is being given the opportunity to properly thank the people who have made my time at Oxford so happy. My gratitude must go ﬁrst to my supervisor Dr. David Lucas for taking a lost philosophy of physics student and putting him to proper work in the lab. It is hard to imagine my DPhil without David’s kindness and his willingness to teach me the intricacies (and basics) of atomic physics and ion trapping.
Prof. Derek Stacey ﬁgured out how to cool 43Ca+ at 146 G. The fact that this beast has never intimidated me is testimony to his ability to understand and simplify complicated physics and to his mastery of the optical Bloch equations. I have enjoyed many happy conversations with Derek, without which my understanding of the physical world would be much the poorer.
The work I’ve spent these past years pursuing all stems from foundations laid by Dr. David “D3” Allcock. D3 taught me that covering things in glue can work so much better than “gold plating” them and made sure that the lab’s playlist was always interesting. I remain, however, unimpressed by his photographic skills.
Chris Ballance taught me (almost) everything I know about two-qubit gates and has endured far too many conversations about phase noise and return currents. Many of the best results in this thesis are only here because Chris asked “Well, why can’t you do that? Surely it’s trivial?”.
Luca Guidoni spent a year away from his own research group to come and work with us in the Clarendon. Always a voice of calm, the experiment never worked so well as when he was here.
Thank you also to Martin Sepiol, who is carrying the microwave experiments on to bigger and better things, and to the rest of the Clarendon basement rabble: Norbert Linke, Hugo Janacek (who worked on the cooling with Derek), Diana Prado Lopes Aude Craik, Sarah Woodrow, Vera Scha¨fer, Simon Webster, Jeff Sherman – who ﬁrst showed me Horowitz and Hill and whose enthusiasm for physics and electronics made me feel that I was where I belonged from my ﬁrst days in the group – , David Szwer, Alice Myerso-
n, Michael Curtis & Ben Keitch, as well as to Prof. Andrew Steane, the other head of our group.
Graham Quelch, our research technician, built some integral parts of the apparatus and taught me many interesting things (most of which he probably shouldn’t have). My thanks also go to the Clarendon Mechanical Workshop team, including Simon Moulder, Mathew Newport, Jonathan Denton and Rob
iii

Harris. Rob, in particular, taught me how to build things and always new how to turn half-baked ideas into reality.
The ion trappers at NIST, including Christian Ospelkaus (now at Leibniz Universita¨t Hannover) and Dietrich Leibfried, gave us much helpful advice on the microwave gates.
Outside the world of physics, the Maxwell clan, Jesse and Wren have given me much kindness and food over my many years in Oxford and have often offered me an oasis away from life’s many stresses.
Through these past years Emily has been there for me in one way or another with so much support and kindness. Her encouragement and patience kept me going, for which I will be forever grateful.
Finally, I want to thank my parents and my two siblings, Patrick and Julia. You have all shaped how I look at the world and without your love and support none of this would have been possible.

Contents

Contents

vii

1 Introduction

1

1.1 Quantum simulation and computation . . . . . . . . . . . . . . . . 1

1.2 More fundamental interests . . . . . . . . . . . . . . . . . . . . . . 3

1.3 The trapped-ion quantum information processor . . . . . . . . . . 4

1.4 Structure of the thesis . . . . . . . . . . . . . . . . . . . . . . . . . . 5

2 Motivation and Theory

7

2.1 What to look for in an ion qubit . . . . . . . . . . . . . . . . . . . . 8

2.2 Calcium qubits . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11

2.3 Level structure in the intermediate ﬁeld . . . . . . . . . . . . . . . 13

2.3.1 The ground level . . . . . . . . . . . . . . . . . . . . . . . . 14

2.3.2 Transitions within the ground level . . . . . . . . . . . . . 19

2.3.3 Clock transitions . . . . . . . . . . . . . . . . . . . . . . . . 20

2.4 Photoionization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23

2.5 Cooling at 146 G . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24

2.5.1 The two-state system . . . . . . . . . . . . . . . . . . . . . . 25

2.5.2 Cooling calcium . . . . . . . . . . . . . . . . . . . . . . . . . 26

2.5.3 The intermediate ﬁeld . . . . . . . . . . . . . . . . . . . . . 27

2.5.4 Dynamic effects . . . . . . . . . . . . . . . . . . . . . . . . . 30

2.5.5 Low-temperature cooling on a dark resonance . . . . . . . 31

2.6 Single-qubit manipulations . . . . . . . . . . . . . . . . . . . . . . 34

2.6.1 Optical pumping to the stretched state . . . . . . . . . . . . 34

2.6.2 Coherent manipulation with microwaves . . . . . . . . . . 36

2.6.3 Readout . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39

2.7 Two-qubit gates using trapped ions . . . . . . . . . . . . . . . . . . 44

2.7.1 Microwaves or lasers? . . . . . . . . . . . . . . . . . . . . . 46

2.7.2 Microwave mediated spin-motion coupling . . . . . . . . . 49

2.7.3 The Mølmer-Sørensen force . . . . . . . . . . . . . . . . . . 54

3 Noise Master Equations

59

3.1 The Stochastic Liouville-von Neumann Equation . . . . . . . . . . 61

3.2 White noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62

3.3 Noise with arbitrary correlations . . . . . . . . . . . . . . . . . . . 64

vii

CONTENTS

3.4 Three faces of white noise . . . . . . . . . . . . . . . . . . . . . . . 66 3.4.1 White amplitude noise . . . . . . . . . . . . . . . . . . . . . 66 3.4.2 Frequency and phase noise . . . . . . . . . . . . . . . . . . 68 3.4.3 White phase noise . . . . . . . . . . . . . . . . . . . . . . . 69 3.4.4 White frequency noise . . . . . . . . . . . . . . . . . . . . . 70
3.5 The Noisy Quantum Harmonic Oscillator . . . . . . . . . . . . . . 72 3.5.1 Frequency ﬂuctuations . . . . . . . . . . . . . . . . . . . . . 72 3.5.2 Frequency ﬂuctuations due to RF noise . . . . . . . . . . . 74 3.5.3 Coupling to a noisy electric ﬁeld . . . . . . . . . . . . . . . 76

4 Apparatus

79

4.1 The “microwave trap” . . . . . . . . . . . . . . . . . . . . . . . . . 79

4.1.1 Design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79

4.1.2 Fabrication . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81

4.1.3 Characterisation . . . . . . . . . . . . . . . . . . . . . . . . 82

4.2 Vacuum system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84

4.3 Electrode Connections . . . . . . . . . . . . . . . . . . . . . . . . . 88

4.3.1 Diplexer and transformer . . . . . . . . . . . . . . . . . . . 88

4.3.2 DC supply . . . . . . . . . . . . . . . . . . . . . . . . . . . . 90

4.3.3 Trapping RF . . . . . . . . . . . . . . . . . . . . . . . . . . . 90

4.4 Coils . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91

4.4.1 146 G coils . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91

4.4.2 Trim coils . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92

4.5 Lasers and optics . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93

4.5.1 Lasers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93

4.5.2 Trap optics . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95

4.6 Imaging system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100

4.7 Microwave sources . . . . . . . . . . . . . . . . . . . . . . . . . . . 103

4.7.1 Rubidium and GPS frequency standards . . . . . . . . . . 103

4.7.2 Microwave synths . . . . . . . . . . . . . . . . . . . . . . . 104

4.7.3 Quadrupled HP8656B . . . . . . . . . . . . . . . . . . . . . 106

4.7.4 Octupled AD9910 DDS . . . . . . . . . . . . . . . . . . . . 107

4.7.5 IQ Mixers modulated at D.C. . . . . . . . . . . . . . . . . . 112

4.7.6 Calibration . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114

5 Single-Qubit Results and Analysis

117

5.1 Doppler cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 117

5.1.1 Setting up and calibrating experimental parameters . . . . 118

5.1.2 Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121

5.2 State preparation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 124

5.2.1 Optical pumping to the stretched state . . . . . . . . . . . . 124

5.2.2 Microwave transfer pulses . . . . . . . . . . . . . . . . . . . 127

viii

Contents

5.3 Readout . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132 5.3.1 Shelving . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 132 5.3.2 Results and analysis . . . . . . . . . . . . . . . . . . . . . . 141
5.4 Magnetic ﬁeld servo . . . . . . . . . . . . . . . . . . . . . . . . . . 145 5.5 Ramsey spectroscopy on the clock transition . . . . . . . . . . . . 146
5.5.1 Qubit frequency as a function of B-ﬁeld . . . . . . . . . . . 148 5.5.2 Systematic shifts . . . . . . . . . . . . . . . . . . . . . . . . 149 5.5.3 Rubidium reference calibration . . . . . . . . . . . . . . . . 149 5.5.4 Quadratic Zeeman effect . . . . . . . . . . . . . . . . . . . . 150 5.5.5 A.C. Stark Shift . . . . . . . . . . . . . . . . . . . . . . . . . 151 5.5.6 AC Zeeman shift due to the trap RF . . . . . . . . . . . . . 152 5.5.7 Conclusions . . . . . . . . . . . . . . . . . . . . .-
 . . . . . . 156 5.6 Coherence time . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 158 5.6.1 Experimental considerations . . . . . . . . . . . . . . . . . 160 5.6.2 Results and discussion . . . . . . . . . . . . . . . . . . . . . 161 5.7 Randomized benchmarking of a single qubit . . . . . . . . . . . . 164 5.7.1 Randomized benchmarking protocol . . . . . . . . . . . . 166 5.7.2 Experimental implementation . . . . . . . . . . . . . . . . 167 5.7.3 Results . . . . . . . . . . . . . . . . -
. . . . . . . . . . . . . . 169 5.7.4 Error analysis . . . . . . . . . . . . . . . . . . . . . . . . . . 170 5.7.5 Effects of sample size . . . . . . . . . . . . . . . . . . . . . . 179

6 Towards a Microwave-Driven Two-Qubit Gate

181

6.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 181

6.2 Characterising and controlling the microwave ﬁeld . . . . . . . . 182

6.2.1 The ﬁeld . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 182

6.2.2 Rabi spectroscopy . . . . . . . . . . . . . . . . . . . . . . . 183

6.2.3 Ramsey spectroscopy of A.C. Zeeman shifts . . . . . . . . 184

6.2.4 Displacing the ion . . . . . . . . . . . . . . . . . . . . . . . 185

6.2.5 Polarization angles . . . . . . . . . . . . . . . . . . . . . . . 186

6.2.6 Field gradient measurement . . . . . . . . . . . . . . . . . . 187

6.2.7 Field nulling . . . . . . . . . . . . . . . . . . . . . . . . . . . 190

6.2.8 Outlook . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 191

6.3 Low temperature cooling on a dark resonance . . . . . . . . . . . 192

6.3.1 Sideband thermometry . . . . . . . . . . . . . . . . . . . . 193

6.3.2 The Doppler Limit . . . . . . . . . . . . . . . . . . . . . . . 194

6.3.3 Experimental results . . . . . . . . . . . . . . . . . . . . . . 195

6.4 Heating rate . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 199

6.5 Trapping RF ﬂuctuations . . . . . . . . . . . . . . . . . . . . . . . . 202

6.5.1 Measuring AM noise . . . . . . . . . . . . . . . . . . . . . . 205

6.5.2 AM noise of various sources . . . . . . . . . . . . . . . . . 209

6.5.3 7400 squarer . . . . . . . . . . . . . . . . . . . . . . . . . . . 210

ix

CONTENTS

6.5.4 Diode limiter . . . . . . . . . . . . . . . . . . . . . . . . . . 212 6.5.5 Close-in ampliﬁer noise . . . . . . . . . . . . . . . . . . . . 212 6.6 Motional mode cross-coupling . . . . . . . . . . . . . . . . . . . . 214 6.7 Secular frequency drift . . . . . . . . . . . . . . . . . . . . . . . . . 215 6.7.1 RF power drifts . . . . . . . . . . . . . . . . . . . . . . . . . 217 6.7.2 Resonator drifts . . . . . . . . . . . . . . . . . . . . . . . . . 217 6.7.3 Measured drift rate . . . . . . . -
. . . . . . . . . . . . . . . . 221 6.8 Concluding remarks . . . . . . . . . . . . . . . . . . . . . . . . . . 222

7 Conclusion

223

7.1 Comparison with other results . . . . . . . . . . . . . . . . . . . . 224

7.2 Outlook . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 226

A Waveplates

233

A.1 Tilting quarter-wave plates . . . . . . . . . . . . . . . . . . . . . . 234

A.2 Using quarter-wave plates at multiple wavelengths . . . . . . . . 236

A.3 Characterising waveplates . . . . . . . . . . . . . . . . . . . . . . . 236

A.4 397 nm Doppler Polarization . . . . . . . . . . . . . . . . . . . . . . 237

B Deﬁnitions and useful results

241

B.1 Rotating frames and the interaction picture . . . . . . . . . . . . . 241

B.2 Two-state systems and the Pauli matrices . . . . . . . . . . . . . . 242

B.3 The spherical basis . . . . . . . . . . . . . . . . . . . . . . . . . . . 243

B.4 The Magnus Expansion . . . . . . . . . . . . . . . . . . . . . . . . . 246

B.5 The A.C. Zeeman Shift . . . . . . . . . . . . . . . . . . . . . . . . . 247

B.5.1 Transverse polarization . . . . . . . . . . . . . . . . . . . . 247

B.5.2 Longitudinal polarization . . . . . . . . . . . . . . . . . . . 249

B.6 Rabi ﬂopping and Ramsey Experiments . . . . . . . . . . . . . . . 249

B.6.1 π-qubits . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 251

B.6.2 Ramsey experiments . . . . . . . . . . . . . . . . . . . . . . 252

B.6.3 Ramsey experiments as a phase noise probe . . . . . . . . 252

C Modulation theory

255

C.1 Amplitude modulation . . . . . . . . . . . . . . . . . . . . . . . . . 255

C.1.1 Modulation at multiple frequencies . . . . . . . . . . . . . 256

C.1.2 Modulation by a continuous spectrum . . . . . . . . . . . . 257

C.1.3 The Wiener-Khinchin theorem . . . . . . . . . . . . . . . . 258

C.1.4 Coherent demodulation . . . . . . . . . . . . . . . . . . . . 260

C.2 Phase modulation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 261

C.2.1 PM at multiple frequencies . . . . . . . . . . . . . . . . . . 263

C.2.2 Modulation by a continuous spectrum . . . . . . . . . . . . 263

C.2.3 PM Wiener-Khinchin relations . . . . . . . . . . . . . . . . 264

x

Contents

C.2.4 Frequency multiplication . . . . . . . . . . . . . . . . . . . 265 C.3 The relationship between AM and PM . . . . . . . . . . . . . . . . 266 C.4 Modulation due to noise . . . . . . . . . . . . . . . . . . . . . . . . 267

D Electronic Circuits

269

D.1 7400 limiting ampliﬁer . . . . . . . . . . . . . . . . . . . . . . . . . 269

D.2 RF levelling loop . . . . . . . . . . . . . . . . . . . . . . . . . . . . 271

E Atomic structure of 43Ca+

279

E.1 Atomic constants . . . . . . . . . . . . . . . . . . . . . . . . . . . . 279

E.2 Properties of the ground level . . . . . . . . . . . . . . . . . . . . . 279

E.2.1 Expansion coefﬁcients . . . . . . . . . . . . . . . . . . . . . 279

E.3 Matrix elements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 282

Bibliography

285

xi

1
Introduction
1.1 Quantum simulation and computation
The story of quantum computation arguably began with a keynote address given by Feynman to the MIT Physics of Computation conference in 1981 [Fey82]. In this address, Feynman considered the question of what kinds of physical system may realistically be simulated using a computer, suggesting that
The rule of simulation that I would like to have is that the number of computer elements required to simulate a large physical system is only to be proportional to the space-time volume of the physical system. I don’t want to have an explosion. That is, if you say I want to explain this much physics, I can do it exactly and I need a certainsized computer. If doubling the volume of space and time means I’ll need an exponentially larger computer, I consider that against the rules (I make up the rule-
s, I’m allowed to do that).
One may ask then, “what types of physical system are simulatable?” Consider ﬁrst a classical system composed of n binary elements. At any time, the overall system inhabits one of 2n different states, and hence may be represented by an n-digit binary number. Each time we add an extra element to the system,
1

1. INTRODUCTION
we add an extra bit to our number, so the situation appears to be fundamentally simulatable.
Turning to the corresponding system composed of binary quantum elements – so-called “qubits” – we encounter the strange world of superposition and entanglement. We ﬁnd that one cannot simply describe the system by pointing to a single one of the 2n states which it inhabits. Instead, one must describe how much and with what phase the system inhabits each of these possibilities, requiring a total of 2n − 1 complex numbers to describe its state. Now each time we wish to extend our system to incorpora-
te another element, we double the amount of information we need to store; quantum systems are not simulatable according to Feynman’s rule. To put this scaling into perspective, we note that to describe a system of 400 qubits would require 2400 10120 complex numbers, which is more than the number of fundamental particles in the universe [MK13]. Clearly, this is a battle that a classical computer is not going to win for long.
Feynman’s solution to this problem was to use a new kind of device built on fundamentally quantum principles, noting
And I’m not happy with all the analyses that go with just the classical theory, because nature isn’t classical, dammit, and if you want to make a simulation of nature, you’d better make it quantum mechanical, and by golly it’s a wonderful problem, because it doesn’t look so easy.
The idea is thus to ﬁnd a quantum system which we can control and to use it to simulate other quantum systems that are beyond the reach of any classical computer.
Inspired by this one might wonder if a device based on quantum principles could solve other interesting computational tasks that are classically intractable. This thought led Deutsch to the notion of a universal quantum computer [Deu85] and later to discoveries such as Shor’s factorisation algorithm
2

1.2. More fundamental interests
[Sho97] and Grover’s algorithm for searching unstructured lists [Gro97]. Shor’s algorithm is particularly signiﬁcant since the difﬁculty of factorising large numbers underpins the widely used RSA cryptography system. Constructing a quantum computer thus represents a goal of immense scientiﬁc and technological importance.
1.2 More fundamental interests
At its heart, constructing a quantum computer is about developing the techniques to control simple quantum systems with exquisite precision. One side effect of the efforts put into achieving this goal is that ﬁrst year graduate students now routinely perform the kinds of experiment of which Schro¨ dinger once remarked [Sch52]
We never experiment with just one electron or atom or (small) molecule. In thought-experiments we sometimes assume that we do; this invariably entails ridiculous consequences... it is fair to state that we are not experimenting with single particles, any more than we can raise Ichthyosauria in the zoo.
The recent progress in this ﬁeld has allowed us to probe the heart of quantum mechanics in a way that would not have seemed feasible mere decades ago. This has opened up the ability to begin to ask fundamental questions, such as what happens when we begin to create macroscopic quantum systems – can one build Schro¨ dinger’s cat one qubit at a time? Moreover, the techniques developed in pursuit of the dream of a quantum computer have enabled some of the most precise measurements ever made and offer-
 new avenues to test our fundamental theories [IBR+09].
3

1. INTRODUCTION
1.3 The trapped-ion quantum information processor
Almost any system that demonstrates quantum mechanical behaviour can in principle be used as a qubit, with research currently being conducted in ﬁelds as diverse as photons, trapped neutral atoms, quantum dots, superconducting circuits, solid state nuclear spins, liquid molecule NMR and trapped atomic ions. Out of all of these system, trapped ions have emerged as perhaps the most promising candidate.
Trapped atomic ions possess several features that make them near ideal vessels for quantum information. Firstly, all atoms of the same species are identical and unchanging. Unlike a computer built from man-made elements, such as a superconducting circuit, one does not have to calibrate the characteristics of each ion or worry about them changing over time – they are simply handed to us by the universe and we take them as they come.
The other great beneﬁt of ions may perhaps be seen in the resolution of a paradox. To construct a quantum computer, we need a system which is exquisitely isolated from its environment, allowing fragile quantum information to be stored for the duration of many logic operations. Yet, we must be able to interact with and manipulate the system’s state. This takes the form of both coherent logic operations and the non-unitary, dissipative couplings required for measurements. The tension between these t-
wo requirements may be seen in the difﬁculties faced by many implementations of quantum computing, in which the couplings one relies on to interact with the qubits also lead to uncontrolled interactions between the qubits and their environment – including neighbouring qubits – resulting in decoherence.
By conﬁning individual atomic ions in an ultra-high vacuum system, tens of microns away from the closest other particle, we create a near-perfectly isolated environment. Information stored in the ions’ long-lived internal (hyperﬁne electronic) states may then be preserved for minutes [BHI+91], even without “re-
4

1.4. Structure of the thesis
freshing” of the memory [SSS+13]. Yet, despite this isolation, we may engineer the couplings we need to operate our computer. Using laser or RF/microwave radiation we may coherently manipulate the ions’ states to perform logic gates on individual ions, while multiple ions may be entangled by engineering a coupling using their shared motion as an intermediary. Using lasers we may selectively couple our qubit states to further short-lived atomic states, scattering millions of photons and allowing us-
 to “read out” the qubits’ states.
As Devoret remarked in a recent review of superconducting circuits [DS13],
It is no surprise that the leading quantum information technology has been and today remains the trapped ions, which are the best clocks ever built.
1.4 Structure of the thesis
This thesis is concerned with the development of an intermediate magnetic ﬁeld “clock-qubit” in 43Ca+ at 146 G, as well as techniques to manipulate this qubit using microwaves and lasers. We begin in chapters 2 and 3 with a discussion of the conceptual and theoretical background of the work. In chapter 2 we describe the physics underlying microwave-driven quantum information processing using the 43Ca+ clock-qubit as well as the potential advantages of this system. In chapter 3 we derive master equ-
ations describing the impact of classical ﬂuctuations in experimental parameters on coherent logic operations, providing the basis for later discussion of experimental errors.
Chapter 4 then provides a description of the apparatus we have constructed to perform these experiments. In chapter 5 we describe experimental work involving a single qubit. We discuss cooling of a single 43Ca+ ion at 146 G with the aim of producing a high rate of ﬂuorescence in order to allow efﬁcient readout. We discuss spectroscopy of the qubit transition, on which we measure a coherence time of T2∗ = 50 s – the longest coherence time so far measured on any single
5

1. INTRODUCTION
physical qubit – as well as characterisation of the fundamental single-qubit operations of preparation, coherent rotations and readout all with state-of-the-art ﬁdelities.
In chapter 6 we move on to preliminary work aimed at performing a microwave-driven two-qubit Mølmer-Sørensen gate on the clock-qubit. We provide results of a simple technique based on a two-photon dark-resonance that allows 43Ca+ ions to be cooled to near the Doppler limit. We present measurements of the microwave ﬁeld gradients that will drive a future gate as well as an analysis of likely sources of error in such work. We discuss design and initial characterisation of experimental apparatus to m-
inimise these errors to the point where a gate should be feasible in the near future.
Chapter 7 concludes: we discuss the work that has been conducted and how it relates to other results in the ﬁeld. We ﬁnish by presenting the author’s perspective on the work to be done in the near future.
The main body of the thesis is supplemented by ﬁve appendices. Appendix A contains a discussion of the waveplate settings used to produce the laser beam polarizations required for Doppler cooling, state-preparation and shelving, as well as measurements of the polarization purities that may be produced. Appendix B deﬁnes various conventions and elements of notation used throughout the work, as well as providing derivations of a few “standard” results of quantum optics and atomic physics that may pr-
ove useful to the reader. In appendix C we review some basic aspects of modulation and noise theory which underpin our various discussions of noise. Appendix D provides schematics and descriptions of a few electronic circuits that have proved useful in tackling experimental problems we have encountered. Finally, appendix E provides a reference on various atomic properties of calcium, including ground-level transition frequencies and magnetic dipole matrix elements at 146 G and 288 G.
6

2
Motivation and Theory
In this chapter we explain the physics behind microwave-driven quantum information processing in 43Ca+ at 146 G, and why this makes such a promising qubit system. We begin in section 2.1 with a discussion of desirable features in a trapped ion qubit. In section 2.2 we describe the use of calcium for quantum information processing and give an overview of the different qubits available. Section 2.3 describes the details of calcium’s level structure in the intermediate ﬁeld. After discussing photoion-
ization in section 2.4, we turn in section 2.5 to the crucial question of how one should go about cooling an ion whose cooling cycle consists of 64 spectroscopically resolved states spread across three levels.
In section 2.6 we describe implementation of the basic single-qubit operations of state-preparation, logic gates and readout. We turn in section 2.7 to two-qubit gates in ion traps. We review the basics of two-qubit logic gates using trapped ions and explain why one might (or might not) want to replace traditional laser-driven entanglement schemes with one based on microwave frequency magnetic ﬁeld gradients. We derive the basic Hamiltonian describing the microwave mediated spin-motion coupling an-
d show that it can be used to implement a Mølmer-Sørensen gate.
7

2. MOTIVATION AND THEORY
2.1 What to look for in an ion qubit
When selecting a trapped ion qubit one has to make two choices: which atom?; and, which states? Suitable atoms should have a strong optical transition suitable for laser cooling, optical pumping and readout, as well as a sufﬁciently simple level structure to allow precise control over the ions’ state. The most commonly used atoms are the lower mass group II alkaline earth atoms beryllium, magnesium, calcium and strontium owing to the relatively simple, alkalilike level structure of their remaining-
 valence electron. A few non-alkaline earth atoms have also been used, most notably ytterbium and cadmium.
One qubit state is almost invariably a state in the ground level. The other may be either a second state in the ground level or a state in a metastable excited level, separated from the ground level by a forbidden optical frequency transition. While some extremely important results have been achieved using such optical qubits (see, e.g. [BKRB08b] and [SNM+]) they suffer from two serious limitations. Firstly, the ﬁnite lifetime of the excited level – typically of order 1 s – places a fundamental li-
mit on how long quantum information may be stored.
Secondly, the laser used to drive the qubit transition must be extremely spectrally pure and the entire optical path between the laser and ion must be interferometrically stable. Otherwise, even a relatively small line width in the beam reaching the ion will cause the laser to lose phase coherence with the qubit over the time-scale of a computation. Moreover, because the laser drives the qubit transition directly, any spectral impurities megahertz away from the carrier frequency are liable to driv-
e spectator transitions or to produce difﬁcult to control light shifts.
Ground level qubits, on the other hand, have a qubit lifetime limited only by ion loss or collisions with background gas (typically once every ∼ 30 minutes at UHV pressures). Moreover, transitions are driven by RF/microwave sources either directly or indirectly using stimulated Raman transitions. RF/microwave
8

2.1. What to look for in an ion qubit
sources with the required noise and stability levels may be purchased commercially “off the shelf”. Because of these advantages, we will only consider ground-level qubits for the rest of this thesis – despite the impressive results that have been achieved using optical qubits.
How good a particular qubit is depends on the requirements of the experiment to be performed and the equipment available at the time (for example, which laser diodes are currently being manufactured). One may, nonetheless, identify several features which are likely to be important for ion trap QIP:
1. Mass Heavier ions are harder to move and require more intense radiation ﬁelds to achieve a given two-qubit gate speed. This increase in intensity leads to larger errors due to off-resonant excitations and, in the case of laser-driven gates, worse errors due to photon scattering. Since the total power is often limited, a larger mass may mean longer gate times and greater susceptibility to noise. Heavier ions also require larger trapping and control voltages, which are more complicated to produce-
 and can lead to difﬁculties in trap fabrication [SRW+] .
2. Hyperﬁne structure Isotopes with hyperﬁne structure offer two signiﬁcant advantages. Firstly, they permit so-called clock-transitions with no ﬁrst-order magnetic ﬁeld sensitivity. Qubits based on such transitions are robust to dephasing due to noisy external magnetic ﬁelds, which is a main noise source in many experiments1 [MSB+11]. Secondly, the hyperﬁne splitting separates the qubit states by typically ∼1 GHz. This splitting is large compared with the natural linewidths of the transitions use-
d for cooling and optical pumping, allowing the qubit states to be addressed spectroscopically – an essential component of the readout scheme used in
1Magnetic ﬁeld perturbations are much more signiﬁcant than those due to noisy electric ﬁelds for two reasons. Firstly, low-frequency electric ﬁelds are effectively screened by metal trap structures and the vacuum system. Secondly, unlike Zeeman shifts, Stark-shifts are a second-order perturbation so small residual electric ﬁelds do not cause signiﬁcant energy shifts.
9

2. MOTIVATION AND THEORY
this work. The main disadvantage of hyperﬁne structure is that it complicates the ion’s level structure and introduces spectator states in the ground level. It is also difﬁcult to produce a differential light shift on a clock transition, making clock-qubits unsuitable for some two-qubit gate schemes (see section 2.3.3).
3. Closeness to a two-level system While an ideal qubit should be a perfect two-level system, practical qubits are often part of a larger manifold of states. Off-resonant excitation of spectator transitions from the qubit states limits gate speeds and introduces errors. The closer the ground-level is to a two-level system – either because it does not contain spectator states or because the spectator states are separated from the qubit by a large energy splitting – the better.
4. Low-lying D-states provide a meta-stable shelf-level which can be used for robust high-ﬁdelity readout by optical pumping (see section 2.6.3) or as an optical qubit. If a quadrupole laser is used then the rich atomic structure provided by the shelf allows many useful tricks to be played (see [SNM+]). The disadvantage of the D-states is that they in general open the otherwise closed cooling cycle up to include the entire ground level. This complicates cooling and readout – we note that, prior to-
 this work, no ion with lowlying D-states had been used as a qubit in an intermediate magnetic ﬁeld.
5. Visible cooling transitions are important since lasers in the UV are more likely to charge trap dielectrics, causing drifts in compensation voltages and ion secular frequencies [HBHB10] [WHL+11]. In addition, many optical components are unavailable or perform poorly in the UV. This may make ions with UV cooling transitions unsuitable for schemes for scalable quantum computing involving integrated optics systems.
6. Convenient lasers It is advantageous if the lasers required to cool and ma-
10

2.2. Calcium qubits

4P1/2

4P3/2
τ=6.9 ns

τ=7.1 ns

866 nm

850 nm

854 nm τ=1.20 s 3τD=15./172 s

3D3/2

397 nm 393 nm

4S1/2

Figure 2.1: Basic level structure of Ca+, consisting of low-lying S, P and D levels,

with dipole allowed transitions and state lifetimes shown. The metastable D 5 level

provides a “shelf” for readout or use as an optical qubit.

2

nipulate the ion may be produced from simple, readily available sources such as diodes, without the need for frequency doubling or mixing.

2.2 Calcium qubits
Calcium is a medium mass ion, with isotopes used for quantum information having mass numbers of 40 and 43 (compared with 9Be+ [LOJ+05] or 171Yb+). Like the alkali neutral atoms it has a single valence electron with a basic level structure consisting of low-lying S, P and D levels as shown in ﬁgure 2.1. It has a visible cooling transition at 397 nm, with other electric dipole transitions at 393 nm, 866 nm, 850 nm and 854 nm. These wavelengths are convenient for three reasons. Firstly, they may all -
be produced directly by commercially available diodes without frequency doubling. Secondly, they fall into two narrow
11

2. MOTIVATION AND THEORY
wavelength ranges (393 nm-397 nm and 850 nm-866 nm), which I will refer to as “blue” and “red”, allowing standardisation of most optics. Thirdly, the blue transitions have sufﬁciently long wavelengths to be compatible with high quality ﬁbres and other optical components and do not cause signiﬁcant problems with charging dielectrics in our experiments (compare with the 9Be+ cooling transition at 313 nm [LOJ+05] or 25Mg+ at 280 nm).
Of the two isotopes referred to, 40Ca+ has normally been used for QIP since its lack of hyperﬁne structure simpliﬁes its level structure, with a spin1/2 ground-level presenting an exact two-level qubit system. 40Ca+ is typically used with static magnetic ﬁelds of order 1 G providing a few megahertz of qubit splitting. Since this splitting is small compared with the 23 MHz natural line width of the dipole transitions from the ground state, readout must proceed either using a coherent population tra-
pping technique [MSW+04] (limited to 95 % ﬁdelity) or using a narrow-linewidth laser on the S1/2 ⇔ D5/2 quadrupole transition laser to shelve the ion.
43Ca+, the only stable odd isotope, has a nuclear-spin of I = 7/2 giving it hyperﬁne structure. Its ground level consists of 16 states separated into two hyperﬁne manifolds with F = 3 and F = 4, split by 3.2 GHz at low magnetic ﬁelds. Near zero magnetic ﬁeld, the frequency of the F = 4, MF = 0 to F = 3, MF = 0 transition is independent of magnetic ﬁeld to ﬁrst order and has been used as a clock-qubit in previous work [LKH+11]. The drawback of this qubit is that the splitting between states is rela-
tively small (usually < 5 MHz) making off-resonant excitation a problem. By using a larger magnetic ﬁeld one can increase this splitting, but only at the expense of introducing a non-negligible ﬁrst-order ﬁeld sensitivity.
In this work, we use the clock-transition between states F = 4, MF = 0 and F = 3, MF = +1 at 146.094 2 G. At this ﬁeld the Zeeman splittings between states are sufﬁciently large (∼50 MHz) that gates may be driven at microsecond
12

2.3. Level structure in the intermediate ﬁeld
level speeds without introducing signiﬁcant errors due to off-resonant excitation. Moreover, by operating the qubit exactly at the ﬁeld-independent point, we obtain a coherence time of almost a minute without spin-echo – the longest reported for a single qubit.
These beneﬁts make the 146 G clock-qubit a very attractive option for QIP. Its principal disadvantage is its complicated level structure. A key result of our work has been to demonstrate that – despite a cooling cycle consisting of 64 spectroscopically resolved states spread across three levels – one may still cool the ion using a simple scheme. Indeed, our scheme (described in section 2.5) is no more complicated than that used to cool 43Ca+ at low ﬁelds and involves only the addition of a single -
EOM to the scheme used to cool 40Ca+.

2.3 Level structure in the intermediate ﬁeld

At 146 G the Zeeman splittings are still small compared with the ion’s ﬁne struc-

ture, so the overall level diagram remains little changed from the low ﬁeld case.

There is, however, a signiﬁcant change to the structure of the states within each

level (see ﬁgures 2.2 to 2.6). In all levels considered apart from the 3D5/2 level, the ﬁeld is neither strong nor weak with respect to the ion’s hyperﬁne structure.

Thus, whilst the ion’s nuclear spin and orbital angular momentum, I and J,

remain good quantum numbers, its total angular momentum, F , and the projec-

tions of its angular momenta onto the quantization axis, MI and MJ do not.

Despite F not being a good quantum number, we will often label states in the

low-lying 4S 1 2

and 4P 1 2

levels by values of

F, MF

.

This is justiﬁed by the fact

that at 146 G the Zeeman shifts, whilst not negligible, are still relatively small

compared with the hyperﬁne splitting in these levels (∼ 50 MHz compared with

3.2 GHz in the ground level). Thus the states still divide into clearly separated

manifolds corresponding to different values of F . To be rigorous, “ F, MF ” should be taken to be a convenient shorthand for “the state that one would ar-

13

2. MOTIVATION AND THEORY
rive at beginning in the low-ﬁeld state F, MF and ramping the ﬁeld up adiabatically.”
We will not use this notation for states in the 4P3/2 and 3D3/2 levels, where the hyperﬁne structure is sufﬁciently small to be scrambled by the Zeeman splittings. In these levels, states must be identiﬁed by the projection of their total angular momentum, M , and their energy. In the 3D5/2 level, the hyperﬁne structure splitting is sufﬁciently small that we are entering the high-ﬁeld region by 146 G and states are best labelled by values of MI , MJ .

2.3.1 The ground level
Much of the work conducted in this thesis centres on transitions between states in the ground level. It is thus useful to derive some basic properties of these states. In the next two sections, I derive the expansion coefﬁcients used to express the intermediate-ﬁeld states in terms of high-ﬁeld angular momentum eigenstates and the matrix elements for transitions between them.

2500

M

2000 F=3

-3

1500

+3

1000

Frequency (MHz)

500
(4,0)⇔(3,+1)
0

−500

−1000
F=4
−1500

−2000 0

50

100

150

200

Magnetic field (G)

+4

-4

250

300

Figure 2.2: Energies of states in the 4S 1 ground-level of 43Ca+ as a function of magnetic ﬁeld. At 146 G, despite the larg2e Zeeman splittings, the levels divide into two manifolds, corresponding to low-ﬁeld states with F = 3 and F = 4. The 4, 0 ⇔ 3, +1 clock-qubit transition at 146 G is indicated by a vertical line.

14

2.3. Level structure in the intermediate ﬁeld

500

M-3

400 F=3

300
+3
200

Frequency (MHz)

100

0

−100

+4

−200 F=4

−300 −400 0

-4

50

100

150

200

250

300

Magnetic field (G)

Figure 2.3: Energies of states in the 4P 1 level of 43Ca+ as a function of magnetic ﬁeld. At 146 G, despite the large Zeeman2 splittings, the levels divide into two manifolds, corresponding to low-ﬁeld states with F = 3 and F = 4.

1500

1000

500

Frequency (MHz)

0

−500

−1000

−1500 0

50

100

150

200

250

300

Magnetic field (G)

Figure 2.4: Energies of states in the 4P 3 level of 43Ca+ as a function of magnetic ﬁeld. At 146 G, the Zeeman splittings s2cramble the hyperﬁne-manifold structure. By 300 G we are approaching the high-ﬁeld regime and states may be labelled in terms of MI , MJ .

15

2. MOTIVATION AND THEORY

800

600

400

Frequency (MHz)

200

0

−200

−400

−600

−800 0

50

100

150

200

250

300

Magnetic field (G)

Figure 2.5: Energies of states in the 3D 3 level of 43Ca+ as a function of magnetic ﬁeld. The hyperﬁne manifold structure i2s scrambled by the Zeeman splittings.

1500

1000

500

Frequency (MHz)

0

−500

−1000

−1500 0

50

100

150

200

250

300

Magnetic field (G)

Figure 2.6: Energies of states in the 3D 5 level of 43Ca+ as a function of magnetic ﬁeld. The hyperﬁne splitting is small eno2 ugh that by 146 G, we are in the high-ﬁeld regime so states may be distinguished by labelling in terms of MI , MJ .

16

Mn = -3

2.3. Level structure in the intermediate ﬁeld

F = 3

Mn = +1

Mn = +3

3.2 GHz

Mm = +4

F = 4

Mm = 0 50MHz

Mm = -4
Figure 2.7: The 4S1/2 ground level of 43Ca+ at 146 G, showing important transitions. Despite being in the intermediate ﬁeld, we label states as F, MF (see text). When discussing microwave transitions between the manifolds, I use Mn to refer to the state in the higher-energy F = 3 level and Mm to refer to the state in the F = 4 manifold. The corresponding magnetic dipole matrix element is Rnm. The qubit states (blue) are 4, 0 and 3, +1 . The green transitions are used to transfer the ion from the 4-
, +4 “stretched” state to the qubit after optical pumping. The π transitions shown in brown are used to improve the ﬁdelity of optical pumping.

As noted previously, the intermediate ﬁeld states are not angular momentum eigenstates. One may nonetheless represent them as superpositions of the angular momentum eigenstates. One could in principle choose either the lowﬁeld F, MF states or the high-ﬁeld MI , MJ states as a basis; however, the high-ﬁeld states will prove the more convenient since the weakness of the nuclear magnetic moment compared with the electronic magnetic moment ensures that MI is, to a good approximation, conserved during -
transitions.
Since we are in the intermediate-ﬁeld regime, we treat the hyperﬁne and Zee17

2. MOTIVATION AND THEORY

man interactions together as a single perturbation with Hamiltonian [Woo80]

HI = AI · J − µJ · B − µI · B

=

A

Iz Jz

+

1 2

(I+J−

+

I−J+)

+ gJ µBBJz − gI µN BIz

(2.1)

where we have chosen our quantization axis to lie along the direction of the

B-ﬁeld so that B = Bˆz and we have used

I± := Ix ± iIy

J± := Jx ± iJy µJ = −gJ µBJ

(2.2)

µI = gI µN I

The Hamiltonian is thus composed of products of angular momentum projec-

tion operators and products of one raising and one lowering operator. In both

cases, the matrix elements of the Hamiltonian can only be non-vanishing be-

tween states with

the same value of

M

:=

MI

+ MJ .

Since

J

=

1 2

there are at

most two such states for any given M . We may thus express the energy eigen-

states in the form

F, M

n,m

=

αn,m

MI

=

M

+

1 2

,

MJ

=

−

1 2

+

βn,m

MI

=

M

−

1 2

,

MJ

=

+

1 2

(2.3)

where the M = ±4 “stretched” states are the only states that are angular mo-

mentum eigenstates at all ﬁelds.

We can ﬁnd the α and β expansion coefﬁcients as well as the energy of each

state by diagonalizing the Hamiltonian. To do this, we recall that the matrix

elements of the operators involved in the Hamiltonian are given by

J± MJ Jz MJ

= (J ∓ M ) (J ± M + 1) MJ ± 1 = MJ MJ

(2.4)

Since

J

=

1 2

in

the

ground-state,

the

energies

may

be

also

be

found

directly

using the Breit-Rabi formula [Woo80]

E±(B,

M)

=

−2

Ehfs (2I +

1)

−

gI µN BM

±

Ehfs 2

1+

4χBM 2I + 1

+ χ2B2

(2.5)

18

2.3. Level structure in the intermediate ﬁeld

where χ := (gI µN + gJ µB) /Ehfs and Ehfs is the zero-ﬁeld hyperﬁne structure splitting.

2.3.2 Transitions within the ground level

Since all states in the ground level arise from the same conﬁguration, transitions

between them conserve parity and are hence forbidden by the electric dipole se-

lection rules. Transitions thus proceed via the magnetic dipole interaction with

Hamiltonian HI = −µ · B, where µ := µI + µJ and B is the driving magnetic ﬁeld.

We consider a transition between the states F = 3, M 3 and F = 4, M 4 ,

characterised by the polarization Q := M 3 − M 4 and driven by the magnetic

ﬁeld2

B(t) = (−1)QBeˆQ cos ωt

(2.6)

The interaction Hamiltonian is thus

H = (−1)Q+1BµQ cos ωt

(2.7)

We deﬁne the transition Rabi frequency to be

Ω := BRM3,M4

(2.8)

where Rnm is the matrix element of the magnetic dipole moment, deﬁned by

Rnm := (−1)Q+1 n|µQ|m

(2.9)

These matrix elements can readily be calculated using the expansion coefﬁcients derived in the previous section and are tabulated in appendix E. Note that according to this deﬁnition, a π-pulse takes a time of tπ = π/Ω.
For a ﬁeld with arbitrary polarization, we make the obvious extension

Ω := B−QRM3,M4

(2.10)

2See appendix B.3 for a discussion of the spherical basis notation used in this section.

19

2. MOTIVATION AND THEORY

2.3.3 Clock transitions

In both the high- and low-ﬁeld regimes, the energies of electronic states vary

linearly with applied magnetic ﬁeld. The slopes, however, are different in the

two cases. At intermediate ﬁelds the energies follow curved trajectories between

these two asymptotes. This curvature permits the existence of points where the

energies of particular transitions become independent of applied magnetic ﬁeld

to ﬁrst order. These are the so-called “clock-transitions”, named after their use

in atomic time standards. All ions with hyperﬁne structure and a nuclear spin

greater than 1/2 exhibit clock states. The ions previously used as clock-qubits

are listed in table 2.1.

Ion
9Be+ 25Mg+ 43Ca+ 111Cd+ 171Yb+

States
1, +1 ⇔ 2, 0 2, 1 ⇔ 3, 1 3, 0 ⇔ 4, 0 0, 0 ⇔ 1, 0 0, 0 ⇔ 1, 0

Field (G)
119.4 213
0 0 0

d2f
(kHdzB/2G2)
6.10 4.6 2.4 0.6 0.6

T2 (s) 14.7(1.6)
1.2(2)
2.5(3)

Reference
[LOJ+05] [OWC+11] [LKH+11] [HBD+05] [OYM+07]

Table 2.1: Hyperﬁne transitions in trapped ions previously used as clock-qubits along with the ﬁelds they become insensitive at, the second-order ﬁeld sensitivities and measured coherence times (where speciﬁed in the original work). The 43Ca+ qubit was actually used at a ﬁeld of 1.78 G to break the degeneracy between states, inducing a ﬁrst-order ﬁeld sensitivity of 4.3kHz/G (see [BKRB08a] for a characterisation of this effect). Note that a clock-qubit based on an optical transition has also been -
demonstrated in calcium [BKR+07].

From (2.5), we see that the energy of the transition between the states 4, M4 and 3, M3 is given as a function of magnetic ﬁeld by

∆E

=

−gI µN BQ

+

Ehfs 2

1

+

4χBM3 2I + 1

+

χ2B2

+

Ehfs 2

1

+

4χBM4 2I + 1

+

χ2B2

(2.11)

where, as usual, Q := M3 − M4. The clock transitions are found by determining the ﬁelds at which the derivative of this expression vanishes.

The lowest magnetic ﬁeld clock transition to occur in 43Ca+ is between the

states 3, 0 and 4, 0 at zero magnetic ﬁeld. However, as discussed previously,

20

2.3. Level structure in the intermediate ﬁeld

this qubit suffers from the limitation that the ﬁeld required to break the degen-

eracy of states in each hyperﬁne manifold induces a ﬁrst-order ﬁeld sensitivity.

One must thus either live with a nearly degenerate manifold or a non-negligible

ﬁeld sensitivity.

The ﬁrst few clock transitions to occur at non-zero magnetic ﬁelds are listed

in table 2.2. The qubit used in this work is the ﬁrst of these transitions, occurring

at a ﬁeld of 146.094 G between the states 4, 0 and 3, +1 . This qubit is more

convenient than the 4, +1 ⇔ 3, 0 qubit because it may be prepared from the

stretched state using one fewer π-pulse. We chose to use the 146 G qubit over

the 288 G qubit because the lower magnetic ﬁeld is simpler to produce in the lab

and because the larger Zeeman splittings occurring at 288 G were expected to

further complicate the Doppler cooling.

We note, however, that the 288 G qubit has two potential advantages over

the 146 G qubit: it is a π-polarized transition; and, its matrix element is larger by

a factor of 1.4. Having a π-polarized qubit is useful because our trap can only

produce linearly polarized microwaves and can thus couple more efﬁciently to

a π-polarized qubit than a σ qubit. Each of these factors makes a difference of

approximately

√ 2

in

how

fast

we

can

drive

the

qubit

transition

with

a

given

microwave power. Since the achievable Rabi frequency is likely to be a limiting

factor in microwave-driven two qubit gates (section 2.7), we may move to this

qubit in future work.

To demonstrate the advantage of using a clock qubit, we consider qubit de-

phasing due to a noisy magnetic ﬁeld. If a qubit’s transition frequency ﬂuctuates

by an amount δf , then we expect it to dephase (to 1 radian) after a time of order

T2 ∼ 1/ (2πδf )

(2.12)

Typical lab ﬁeld ﬂuctuations are of order 1 mG. For the 4, +4 to 3, +3 stretched transition, this corresponds to a frequency ﬂuctuation of 2.4 kHz leading to coherence times of order 70 µs. In contrast, for the 146 G clock qubit
21

2. MOTIVATION AND THEORY

Transition
4, 0 ⇔ 3, +1 4, +1 ⇔ 3, 0 4, +1 ⇔ 3, +1

Field independent point (G) 146.094 2 146.331 4 287.782 7

f0 (Hz)
3 199 941 076.87 (5) 3 199 941 144.8 (3) 3 123 181 793.7 (3)

d2 f dB2

(kHz/G2)

2.416 2.416 2.514

Table 2.2: Field independent points, transition frequencies and second-order sensitivities for the ﬁrst three clock-states occurring at non-zero magnetic ﬁelds in 43Ca+ (N.B. we consider only transitions for which Q = {±1, 0}). For a discussion of uncertainties in the transition frequencies, see section 5.5. The matrix elements for transitions within the ground-level as well as the α and β coefﬁcients are tabulated in appendix E for the qubits at 146.094 G and 287.782 G.

the frequency ﬂuctuations are only 1.2 mHz, giving a coherence time of order 2 minutes – an improvement of 6 orders of magnitude.
Finally, we note two other features of clock qubits. Firstly, from (2.11), we see that transitions with polarizations Q and −Q are nearly degenerate, split only by the small factor 2gI µN B. This means that σ±-polarized transitions occur in pairs (e.g. in table 2.2). This has implications for readout of π-polarized qubits (see section 2.6.2.1). The second, related, point is that only a vanishingly small differential A.C. Stark shift is produced on a clock transition by a laser that is detuned from-
 an excited level by an amount that is large compared with the clock-transition frequency3. This renders clock-qubits unsuitable for most – although not all (see, e.g. [AKB+07]) – two-qubit gates based on A.C. Stark shifts (see, e.g. [LDM+03]).

3For a derivation, see [LBD+05]. In brief, however, the point is this: clock transitions exist because the ﬁrst-order ﬁeld sensitivities of two states are the same. For this to be the case, ignoring a correction of order gI /gJ ∼ 10−3 due to the I · B interaction, the two states must contain the same ratio of electron spin up to spin down components. We ﬁnd, |αn| |αm| and |βn| |βm|. The two states thus differ only in the phases of their expansion coefﬁcients and, if the transition is σ-polarized, -
in the values of MI mixed in. However, the stark shift is a second-order electric dipole perturbation, so it is insensitive to both the phase of the expansion coefﬁcients and to the nuclear spin. This means that the matrix elements appearing in any Stark shifts are the same for both states, so a differential shift can only arise due to a laser beam with a different detuning from the two states. In the limit where the laser detuning is large compared with the clocktransition frequency, the detuning-
 from each state is approximately the same so differential shifts are strongly suppressed.
22

2.4. Photoionization

4s4p

P1 1

390 nm

423 nm
S 4s2 1 0
Figure 2.8: Photoionization of neutral calcium. Atoms are excited from the ground level to the 4s4p 1P1 excited level using radiation at 423 nm. From here, they are excited to the continuum using radiation of wavelength less than 390 nm (we use a laser diode at ∼389 nm).

2.4 Photoionization

We ionize neutral calcium atoms using the two-stage, isotope selective photoionization scheme originally described in [GRB+01] and [LRH+04], illustrated in ﬁgure 2.8. A thermal beam of atoms initially in their ground level are excited by a laser tuned to the 423 nm 4s2 1S0 ↔ 4s4p 1P1 transition. Photoionization from this excited level is accomplished using radiation of wavelength less than 390 nm. Isotope selectivity is achieved spectrally, using the 612 MHz isotope shift between 40Ca+ and 43Ca+. -
This requires the 423 nm laser to be roughly perpendicular to the atomic beam, ensuring the Doppler broadening is less than the isotope shift.
Photoionization is essentially the same at 146 G as in the low ﬁeld. States in the ground level are all nearly degenerate due to the lack of electronic angular momentum and the weakness of the nuclear magnetic moment. The structure of the 4s4p 1P1 level is shown in ﬁgure 2.9. At 146 G we are approaching the highﬁeld regime with respect to the atom’s hyperﬁne structure and the states split by into three manifolds according to MJ = {±1, 0}, separated by ∼200 MHz. The ∼20 MHz splitting across the MJ -
= ±1 manifolds (corresponding to the relative orientations of the nuclear and electronic spins) is unresolved in our
23

2. MOTIVATION AND THEORY

500

+M7/I2 MJ

400

1 -7/2

300

200

Frequency (MHz)

100

0

0

−100

−200

−300 −400 −5000

+7/2 -1
-7/2

50

100

150

200

250

300

Magnetic field (G)

Figure 2.9: States in the 4s4p 1P1 level of neutral 43Ca as a function of magnetic ﬁeld. At 146 G we are approaching the high-ﬁeld regime with respect to the atom’s hyperﬁne structure and states may be labelled in terms of MI and MJ . States split into three manifolds according to MJ = {±1, 0}, with MJ = +1 having a positive detuning from the level’s centre of gravity.

experiments due to Doppler broadening and transition natural linewidths of 35 MHz.
With appropriate 423 nm polarization, ionization can be achieved by driving transitions to any of these Zeeman manifolds. In our experiments the 423 nm beam passes through the same polarization optics as the 397 nm but in polarization quadrature (see section 4.5) and is hence expected to be mainly composed of σ− and π polarization in the power ratio of roughly 2 : 1. Correspondingly, we ﬁnd loading most efﬁcient using the ∆MJ = −1 transition at ∼-200 MHz relative to the centre of gravity (+400 MHz-
 relative to low-ﬁeld 40Ca).

2.5 Cooling at 146 G
Ion trap QIP experiments place two particular requirements on laser cooling4: a large ﬂuorescence signal for efﬁcient readout (section 2.6.3) and cooling to a low motional state for high-ﬁdelity two-qubit manipulations (see chapter 6). Ini-
4For a discussion of cooling in the more general context of metrology and spectroscopy using trapped ions, see e.g. [IBBW95].
24

2.5. Cooling at 146 G
tial cooling is typically achieved using the Doppler cooling method, consisting of coupling the ground level to a short-lived excited level using a red-detuned laser. The Doppler shift in combination with the red detuning ensures that ions absorb more photons when in motion towards the laser than away from it, leading to cooling. Equilibrium obtains at the Doppler limit when this cooling is balanced by recoil heating due to spontaneous emission from the excited level. If further cooling below the -
Doppler limit is required then resolved sideband cooling techniques are typically employed [IBBW95].

2.5.1 The two-state system
Doppler cooling of a two-state system provides a useful benchmark for evaluating the performance of cooling techniques applied to more complicated systems. For a two state system, in the absence of saturation effects, the lowest temperature is reached when the cooling laser is detuned from resonance by half of the transition’s natural linewidth. At this point the ion’s temperature is of order

kBTD =

Γ 2

(2.13)

where Γ is the rate of decay from the excited state. For the 4P1/2 level of 40Ca+ Γ = 140 × 106 s−1, giving a Doppler limit of 0.5 mK.

The highest ﬂuorescence, on the other hand, is obtained when the cooling

transition is saturated, distributing population evenly between the upper and

lower

states.

Photons

are

then

scattered

at

a

rate

of

1 2

A,

where

A

is

the

cooling

transition’s Einstein A coefﬁcient. For a two-state system A = Γ, however for

calcium A is slightly smaller than Γ due to infrequent (8.4 × 106 s−1) decays to

the 3D3/2 level, giving a maximum ﬂuorescence rate of 66 × 106 photons per second.

25

2. MOTIVATION AND THEORY
2.5.2 Cooling calcium
Cooling calcium is complicated by two factors compared with the two-state system. Firstly the 4P1/2 level may decay to the metastable 3D3/2 level (6 % branching ratio), requiring repumping via either the 4P1/2 level using an 866 nm laser or via the 4P3/2 and 3D5/2 levels using lasers at 850 nm and 854 nm (see ﬁgure 2.1). The latter approach has the advantage that it results in a relatively simple quasi-two level cooling system; however, since it involves the 3D5/2 shelf level it is not suitable fo-
r readout.
Cooling is thus usually performed using an 866 nm repumper. Whilst this avoids inclusion of the shelf in the cooling cycle, it comes at the cost of introducing the potential for two-photon dark states since both the 397 nm and 866 nm lasers drive transitions to the same excited states. Moreover, since the 866 nm laser couples the 3D3/2 level into the cooling cycle, it reduces the peak 4P1/2 population attainable, decreasing ﬂuorescence. If both the 397 nm and 866 nm transitions are saturated then -
the peak attainable 4P1/2 population is reduced to 25 %5.
If one uses an odd isotope, such as 43Ca+, then hyperﬁne structure presents further complications. Because the ground-level hyperﬁne splitting is very large compared with the natural linewidths of the 397 nm transitions, we require one laser to excite transitions from each hyperﬁne manifold6. This is typically provided by a single laser source with 3.2 GHz EOM sidebands. Furthermore, the hyperﬁne structure increases the number of states accessible to the atom during the cooling process and, corres-
pondingly, the number of potential dark resonances. Fields of a few gauss have typically been used to destabilise these reso-
5See [Szw09] for a quantitative discussion of repumping techniques in Ca+ based on the rate equations.
6Notice that this is not necessary for the 866 nm repumper for two reasons. Firstly, the hyperﬁne structure in the 3D3/2 level is signiﬁcantly smaller than in the ground level. Secondly, in order to cool efﬁciently, one must not saturate the 397 nm transition, limiting the amount of power one may use. In contrast, we are free to use a large 866 nm intensity to saturation-broaden transitions out of the D level.
26

4P1/2 M=+4

2.5. Cooling at 146 G

94%

6%

866 nm

397 nm σ+,π

3D3/2

4S1/2

M=+3 M=+4

Figure 2.10: Cooling scheme in the intermediate ﬁeld. A pair of predominantly σ+polarized 397 nm lasers are used to localise the ion in the 4S1/2 4, +4 stretched state and the few other states of highest M . The π-polarized 4S1/2 4, +4 to 4P1/2 4, +4 transition then acts as a quasi-closed cooling transition. Decays to the metastable 3D3/2 level are repumped using an 866 nm laser.

nances [BB02].

2.5.3 The intermediate ﬁeld
While both 40Ca+ and 43Ca+ have previously been cooled at ﬁelds of a few gauss, it was unclear how effectively cooling would work in the intermediate ﬁeld. Here the Zeeman splittings are larger than the natural linewidths of the 397 nm transitions, so even with a pair of lasers one can no longer efﬁciently excite transitions from all states in the ground level. Moreover, there are now dozens of spectrally resolved dark resonances which could render cooling inefﬁcient (see ﬁgure 2.12b).
27

2. MOTIVATION AND THEORY
Despite these complications, we ﬁnd that one may cool 43Ca+ in the intermediate ﬁeld using essentially the same scheme as at low ﬁeld. The important insight is that one can dramatically reduce the number of states involved in the cooling cycle by appropriate choice of the polarization of the 397 nm laser beam. We consider the case where one 397 nm frequency component is tuned half a natural line width to the red of the 4S1/2 4, +4 to 4P1/2 4, +4 transition and the other is resonant with the 4S1/2 -
3, +3 to 4P1/2 4, +4 transition, with the polarizations of both components chosen to be predominantly σ+ with a small π component (ﬁgure 2.10).
In this conﬁguration the 4S1/2 4, +4 to 4P1/2 4, +4 π-transition acts as our cooling transition. Whenever the ion scatters from 4P1/2 4, +4 to states with M < 4 in the ground level, the relatively intense σ+ component acts to drive it back into the stretched state. The result is a quasi-cycling transition with the ion spending almost all of its time in the few states with largest M .
The devil is, however, very much in the detail; with laser polarizations, intensities and detunings having a large inﬂuence on the efﬁciency of the cooling and the rate of ﬂuorescence produced. To study these effects, we modelled the complete S-P-D system using the optical Bloch equations [SLA+08], allowing us to investigate choices of parameters numerically [Jan].
Our main focus in this computational work was to maximise the rate of ﬂuorescence that could be obtained, with only secondary concern given to the ion’s temperature. This reﬂects the fact that for single-qubit manipulations, the ion’s temperature is not important so long as it is not sufﬁciently large to produce signiﬁcant Doppler broadening of the shelving transition. The ﬂuorescence, on the other hand, is crucial to achieving a high readout ﬁdelity (see section 5.3 for a discussion of both of th-
ese points).
In section 5.1, we give details of our cooling parameters alongside experimental results. Here, we note that with well chosen parameters we are able
28

2.5. Cooling at 146 G
to achieve a P-state population of 13 %, comparable to that achievable using 43Ca+ in the low-ﬁeld. With a collection efﬁciency of 0.3 % we are able to collect ∼50,000 photons per second, which is sufﬁcient to allow readout ﬁdelities of ∼ 99.99 % 7.
The main drawback of this cooling scheme is that the intensity of the 397 nm beam’s σ+ component needs to be 10 − 100 saturation intensities to allow repumping from the few Zeeman states with signiﬁcant population. This is large compared with the intensities used to cool in the low ﬁeld, leading to an increased amount of light scattered from the trap’s surface and, correspondingly, to worse readout errors. Moreover, given our beam geometry, we are forced to use a 397 nm polarization ratio of 2/3 σ-
+ to 1/3 π (see section A.4), meaning that the intensity of the π-polarized beam is similarly high. This leads to saturation broadening of the cooling transition, which prevents us from reaching the Doppler limit with this technique.
It would also be possible to cool using σ− radiation to conﬁne the ion around the M = −4 end of the ground-level. The two schemes are essentially equivalent apart from one point: if we work in the M = +4 end of the ground level then the remaining 397 nm transitions are blue-detuned from the dominant 4S1/2 4, +4 to 4P1/2 4, +4 transition. These transitions add a large amount of structure to 397 nm detuning scans once the laser is blue of resonance. However, since cooling is always achieved with the-
 laser tuned to the red we do not see this structure and – apart from the 397 nm-866 nm dark resonances discussed in the next section – we ﬁnd that ﬂuorescence changes monotonically with the 397 nm detuning, simplifying the cooling process.
One might worry that if the ion became sufﬁciently hot that it’s Doppler broadening became comparable to the detunings of these transitions (for example due to a collision with a background gas particle) then they will lead to
7This includes error due to a background signal of ∼ 10, 000 s−1 due to laser scatter from the trap’s surface.
29

2. MOTIVATION AND THEORY
further heating and potentially to ion loss. We do not, however, ﬁnd this to be a problem in our trap, with standard cooled single-ion lifetimes being ∼ 3 hours.
2.5.4 Dynamic effects
We now consider an additional, more subtle effect on the cooling process arising from the equilibration time of the atomic population in the D states. Since 866 nm photons are scattered rarely and have a low momentum compared with 397 nm photons, one may neglect the momentum they impart to the ion. Cooling is thus, to a good approximation, solely due to the absorption and emission of 397 nm photons, with the 866 nm laser only having an effect by the way it modulates the probabilities of these even-
ts occurring.
Now, a na¨ıve picture of cooling is given by the assumption that atomic populations respond quickly to changing Doppler shifts due to the ion’s secular harmonic motion in the trap. To the extent that this is the case, one may model cooling by calculating the change in ﬂuorescence as a function of Doppler shift for a stationary ion at equilibrium with the radiation ﬁelds. If the ﬂuorescence is greater for Doppler shifts corresponding to motion towards the laser than away the ion is cooled and, if n-
ot, it is heated.
Since the 866 nm detuning modulates the ion’s ﬂuorescence, one expects it to play a signiﬁcant role in determining whether or not the ion is cooled. For example, consider the case where the 397 nm and 866 nm lasers co-propagate and the 866 nm laser is blue-detuned from its resonance. In this case, according to our na¨ıve time-independent model, because of the Doppler shift on the 866 nm laser, the ﬂuorescence may decrease as the ion moves towards the lasers, leading to heating – even if the 397 nm-
 laser is red-detuned.
Now, the assumption that the ion’s motion is essentially adiabatic is generally justiﬁed for the S-P system, whose equilibration time-scale is set by the P level’s A coefﬁcient of 132 × 106 s−1 which is fast when compared with typical
30

2.5. Cooling at 146 G
secular frequencies (∼ 1 MHz). However, using typical laser parameters this is not so for the population in the D level, whose equilibration time constant can be of the order of a few microseconds. In this case, the D-level population cannot respond to the sinusoidally varying Doppler shift on the 866 nm laser. Thus the Doppler shift on the 866 nm laser does not lead to a change in ﬂuorescence with the phase of the ion’s motion, so our previous argument cannot be correct.
Indeed, in many cases, it is likely that the ion’s motion will act as an effective line broadening mechanism on the 866 nm transition, rather than modulating the ﬂuorescence at the frequency of secular motion. Thus, we see that some conditions which, under the na¨ıve picture one would expect to lead to heating, still cool the ion. The lesson to be learnt from this is that the effect of D-state lifetime must be treated using time-dependent methods. For a discussion of how this can be done, see [Jan-
]. However, with an intense 866 nm laser close to resonance, as used by our standard cooling parameters (section 5.1), this effect is not expected to be signiﬁcant.
2.5.5 Low-temperature cooling on a dark resonance
While the Doppler cooling scheme described above provided a good basis for our single-qubit work, it was not deemed sufﬁcient for investigations into the microwave-driven spin-motion coupling (section 2.7). For this, we wanted our ions close to their motional ground states (see chapter 6). In principle, this could have been achieved by following initial Doppler cooling with a stage of resolved sideband cooling. However, this would have added extra complexity into the experimental set-up. Moreover,-
 many schemes for resolved sideband cooling would not be expected to work effectively on the high thermal state left by our initial cooling.
The ﬁnal temperature reached by the ion during Doppler cooling depends on both the absolute rate of ﬂuorescence – which leads directly to recoil heating
31

2. MOTIVATION AND THEORY
– and on the difference between ﬂuorescence during forwards and backwards motions, which can cool. To achieve the lowest temperature, we wish to have a large change in ﬂuorescence with Doppler shift, while maintaining a low absolute rate of ﬂuorescence.
Now, for a two-state system the absolute ﬂuorescence and its gradient with respect to laser frequency are tied together by the cooling transition’s Lorentzian response function. However, for the more complicated 43Ca+ cooling cycle, the ﬂuorescence does not change in such a simple manner with the laser detunings, so there is scope for achieving lower temperatures. Indeed, as can be seen from experimental scans of the 866 nm and 397 nm laser detunings (ﬁgure 2.12b), ideal conditions are found near -
the bottom of a dark resonance.
D C
B A
Figure 2.11: A dark resonance in the lambda system composed of states A & B together with an excited state, C. When the detuning of the ﬁelds coupling A & B to C are equal there exist coherent superpositions of A and B that do not couple to C. However, if either A or B is coupled to a further state, D, then the dark resonance is destabilised.
Two-photon dark resonances occur when two states are both coupled to a common excited state (ﬁgure 2.11). When the radiation ﬁelds have equal detunings, there exist superpositions of the two states which do not couple to the excited state, suppressing ﬂuorescence. Due to the resonant nature of this phenomenon, ﬂuorescence is rapidly restored as the radiation’s detuning is changed, providing the steep gradient required for cooling. 32

2.5. Cooling at 146 G

4P1/2 M=+4

397 nm
π (+ σ+)

866 nm
σ- ( + σ+)

4S1/2 M=+4

3D3/2 M=+5

(a)

0.07

Simulated

0.06

Measured

0.05

4P1/2 Population

0.04

0.03

0.02

0.01

0

−800

−600

−400

−200

0

200

400

600

800

866 detuning (MHz)

(b)

Figure 2.12: The 397 nm-866 nm dark resonance used for low-temperature Doppler cooling. (a) Level diagram showing the dark resonance. (b) Experimental scan and numerical simulation of the 4P1/2 population as a function of the 866 nm laser’s detuning using our standard low-temperature cooling parameters (section 6.3). The 866 nm frequency scale is relative to the transition’s centre of gravity (−3 464.3 MHz relative to zero-ﬁeld 40Ca+). We achieve the lowest temperatures by tuning the laser near th-
e bottom of the main dark resonance at −170 MHz.

33

2. MOTIVATION AND THEORY
While there are many dark resonances in the S-P-D system, most are impractical for cooling since one or both of the dark states is coupled to further states. This allows population to escape from the dark superposition state, restoring ﬂuorescence (ﬁgure 2.11). The result is a deﬁnite decrease in ﬂuorescence when the resonance condition is met, but not enough to make the feature worthwhile for cooling. Given our choice of 397 nm polarization (σ+ and π, with negligible σ−) there is only one dark re-
sonance that forms an ideal lambda system: that between 4S1/2 4, +4 and 3D3/2 +5 8 (ﬁgure 2.12a). The only transition out of 4S1/2 4, +4 is the π-transition to the state 3P1/2 4, +4 , while the only induced transition from 3D3/2 +5 is the σ− transition to the same state. Resonance occurs when the detunings of the 397 nm and 866 nm lasers from these transitions are equal. This resonance is clearly visible as the deepest feature on experimental scans (ﬁgure 2.12b). For a stationary ion and monochrom-
atic laser beams, the ﬂuorescence on resonance would drop to zero.
To utilise this feature for cooling, we tune our lasers so that the 397 nm is near to resonance with the 4S1/2 4, +4 to 4P1/2 4, +4 transition, while the 866 nm is set near to the bottom of the dark resonance. We set-up our beam paths so that the 397 nm and 866 nm lasers counter-propagate. This ensures that the sign of the Doppler shifts on the two lasers are different, maximising the change in ﬂuorescence as a function of Doppler shift. Using this technique, we achieved temperatures close to the -
40Ca+ Doppler limit (see section 6.3).
2.6 Single-qubit manipulations
2.6.1 Optical pumping to the stretched state
The ﬁrst preliminary to any computation is initialisation of the qubit to a known state. Like most ion trap QIP experiments, we achieve this using optical pump-
8Notice that in the 3D3/2 level, F is not a good quantum number. However, since there is only one state with M = 5 identiﬁcation is unambiguous in this instance.
34

4P1/2

2.6. Single-qubit manipulations

866 nm

397 nm σ+

3D3/2

4S1/2

F=3 F=4

Figure 2.13: Optical pumping to the 4S1/2 4, +4 stretched state, using a pair of σ+ polarized 397 nm beams, one addressing each hyperﬁne manifold, and the standard 866 nm repumper.

ing to prepare the ion in the stretched state, 4S1/2 4, +4 in our case. We do this using a pair of σ+-polarized 397 nm beams, one addressing each hyperﬁne manifold, alongside our usual 866 nm repumper (ﬁgure 2.13). The ﬁdelity of this process is limited by the polarization purity of the 397 nm beams. We estimate that in this work we were able to reduce the fractional intensity of the impurities to 10−3. Achieving a higher purity is possible, but experimentally somewhat demanding.
Polarization impurities causes some population to be “lost” from the desired 4S1/2 4, +4 state; this is distributed predominantly in states of highest M in the 4S1/2 level, speciﬁcally in the M = +3 and M = +2 states. We are able to reclaim most of this lost population using a simple technique based on microwave π-pulses and optical pumping. We begin by applying the 397 nm beam addressing the F = 3 manifold in the ground-level without the F = 4 beam (ﬁgure 2.14a). This clears out population left i-
n the F = 3 manifold, some of which is transferred to the stretched state. This is experimentally easy since our two 397 nm beams derive from the same laser using an EOM (see section 4.5). So long as we choose the carrier to address the transitions from the F = 3 manifold
35

2. MOTIVATION AND THEORY
and the ﬁrst blue sideband to address the F = 4 manifold, we are able to extinguish the F = 4 beam by turning off the EOM. The remaining beam is 3 GHz off resonance from transitions out of the stretched-state, so the effect of polarization impurities is greatly reduced.
We are now left with lost population in the 4, M < 4 states, but negligible population in those with 3, M ≤ 3 . We now use microwave π-pulses to transfer population from the 4, M < 4 states into the F = 3 manifold, before re-applying our 397 nm carrier beam to move this population back into the F = 4 level. After a few cycles of this process, the majority of the lost population is transferred into the stretched state (ﬁgure 2.14).
We only apply microwaves on the transitions from the 4, +3 and 4, +2 states (t & q in ﬁgure E.1) as the population in states with M < 2 is sufﬁciently small that further microwave pulses offer little improvement. We estimate (section 5.2) that this technique reduces the inﬁdelity of our optical pumping by an order of magnitude. Since applying extra microwave frequencies may be easily accomplished in our set-up, we get this improvement at very little cost in terms of experimental complexity. This i-
mprovement may be particularly important in future ion traps using integrated optics, where the achievable polarization purities may be limited by the poorer quality of the miniaturised optics.
2.6.2 Coherent manipulation with microwaves
Our next task is to transfer the ion from the stretched-state to the clock-qubit. We achieve this by applying microwave π-pulses resonant with transitions A, B & C (ﬁgure 2.15) to map the state 4, +4 to 3, +1 . Once the ion is in one of the qubit states, we can use further microwave pulses with appropriate durations and phases to perform arbitrary single-qubit logic operations (see section 5.7).
Before we can readout the ﬁnal state of our qubit (section 2.6.3), we must map the clock-qubit onto a qubit composed of the state 4, +4 and a state in the
36

4P1/2

2.6. Single-qubit manipulations

866 nm

+2 +3

397 nm σ+

3D3/2

4S1/2

4S1/2
(a)

+2 +3 +4
(b)

Figure 2.14: Enhanced optical pumping procedure. (a) After initial optical pumping with two 397 nm σ+ beams (ﬁgure 2.13), we use a single 397 nm beam to repump any population left in the F = 3 manifold back into the F = 4 manifold, some of which makes its way into the stretched state. (b) Next, we apply microwave π-pulses to move population in 4, M < 4 states back into the F = 3 manifold. After a few cycles of these two processes, the inﬁdelity of optical pumping may be reduced by roughly an order-
 of magnitude.

4S1/2

+1 +2 +3

Q

CB A

0

+1 +2 +3 +4

Figure 2.15: Microwave transitions used for single-qubit manipulations. Transitions A, B & C are used to transfer between the qubit and the stretched state, whilst the qubit transition, Q, is used for single-qubit manipulations.

F = 3 manifold. We do this using the series of π-pulses {CBAQ} (ﬁgure 2.16) to implement the mapping

3, +1 ⇒ 4, +4 4, 0 ⇒ 3, +1

(2.14)

37

2. MOTIVATION AND THEORY

ABC

C BAQ

Figure 2.16: We use the pulse sequence {ABC} to transfer the ion from the stretched state to the 3, +1 qubit state. After performing our single-qubit logic operations, we use the pulse sequence {CBAQ} to map the qubit onto the temporary { 3, +1 , 4, +4 } qubit for readout.

2.6.2.1 π-qubits
We can use pulse sequences analogous to that of ﬁgure 2.16 to prepare and read out arbitrary qubits in the ground level. We use many of these qubits for various diagnostic and calibration experiments, such as AC Zeeman shift measurements used to calibrate the microwave B-ﬁeld (section 6.2). If the qubit transition is σpolarized then the required changes to the pulse sequence are straightforward. However, for π-qubits – pairs of states separated by a π-polarized transition – there is a slight compl-
ication due to the fact that σ± transitions occur in neardegenerate pairs.
+1 +2 +3

Q'

BA

C

+1 +2 +3 +4
Figure 2.17: Transitions around the 4, 1 ⇔ 3, +1 qubit. The 4, +1 ⇔ 3, +2 transition (red) is less than 100 kHz detuned from C, leading to errors when reading the qubit out.

To illustrate this point, consider attempting to readout the qubit composed of the states 4, +1 and 3, +1 . To do this, we need to map the state 3, +1 onto the stretched state. We might try using our usual CBA(Q’) pulse sequence
38

2.6. Single-qubit manipulations

(ﬁgure 2.17). However, the C pulse is only detuned from the 4, +1 ⇔ 3, +2 transition by 84 kHz. Since we are only capable of producing linearly polarized radiation in our set-up, the C pulse will cause signiﬁcant off-resonant excitation of this transition, leading to readout errors.

π2

τ

π2

Figure 2.18: Simple composite pulse sequence used to readout π-qubits. We replace

the

C

π-pulse

with

the

composite

π 2

-delay-

π 2

sequence

on

the

same

transition.

We use the simple composite pulse sequence illustrated in ﬁgure 2.18 to get

around this problem9.

Here, we replace our π-pulse with two

π 2

-pulses,

sepa-

rated by a delay of τ 1/(2δ) , where δ is the frequency splitting between the

4, +2 ⇔ 3, +1 and 4, +1 ⇔ 3, +2 transitions10.

Since the microwaves are resonant with the 4, +2 ⇔ 3, +1 transition, the

composite sequence is simply equivalent to a single π-pulse if the ion begins in

the state 3, +1 . If the ion begins in the 4, +1 state then it is transferred to

a superposition of 4, +1 and 3, +2 . During the delay, the microwaves accu-

mulate a phase difference of π relative to this superposition. Thus, the second

π 2

-pulse

acts

to

undo

the

effect

of

the

ﬁrst,

moving

the

ion

back

to

the

4, +1

state. Subsequent readout pulses then proceed as usual.

2.6.3 Readout
Ion qubits are typically read out using state-dependent ﬂuorescence detection. This technique, originally proposed by Dehmelt [Deh75], involves coupling one qubit state to a short-lived ancillary level via a cycling transition which does not involve the other qubit state. By watching for photons scattered on this transition one can tell which state the ion is in.
The accuracy of this technique is determined by the rate at which ﬂuorescence photons can be detected from the bright qubit state, compared with the
9The use of this pulse sequence was originally suggested to us by Christian Ospelkaus. 10An exact expression for the appropriate delay is given in section B.6.
39

2. MOTIVATION AND THEORY

rates at which the dark state gets pumped into the cycling transition manifold or the bright state gets pumped out of it. Since decay rates of ancillary levels are typically ∼ 106 s−1, many photons may be collected before the undesired pumping processes occur, despite typical collection efﬁciencies of ∼ 0.1 %.

M=+3

2P3/2

313 nm σ+

2S1/2

M=+1 M=+2

Figure 2.19: Fluorescence detection in 9Be+ at 119.4 G. The ion is read out from a qubit consisting of the bright 2, +2 state and the dark 1, +1 state. σ+-polarized light at 313 nm creates a cycling transition between the bright state and the excited 2P3/2 +3 state, scattering millions of photons per second. This radiation is far detuned from any transition out of the dark state, heavily suppressing ﬂuorescence.

Application of this technique is straightforward for ion qubits which permit a suitable cycling transition. As an example we consider 9Be+ at a ﬁeld of 119.4 G, as described in [Lan06]. There exists a cycling transition at 313 nm between the bright state 2S1/2 2, +2 and the ancillary state 2P1/2 3, +3 . The lifetime of the P-state is 8.2 ns, so when a resonant σ+ polarized laser at 313 nm is applied with of order one saturation intensity the ion scatters approximately 20 million photons per second-
. However, if the ion begins in the dark 2S1/2 1, +1 state then the laser is far detuned so photon scattering is greatly suppressed.
In calcium, matters are complicated by presence of low-lying D-levels which the 4P3/2 5, +5 state may decay to. The lasers required to repump from these levels provide pathways for the ion to escape to states with M < 4, opening
40

2.6. Single-qubit manipulations

up the ﬂuorescence cycle to involve the entire ground-level. Thus, ground-level qubits in in calcium cannot be read out directly by ﬂuorescence detection11.

4P3/2

M=+5

854 nm 5.9% 3D5/2 "shelf"

93.5%

393 nm σ+

85σ0+n+mπ 0.66%
3D3/2

4S1/2

M=+4

Figure 2.20: Shelving of the 4, +4 state by optical pumping: a 393 nm σ+ laser
connects the 4, +4 state to the M = +5 state in the 3P3/2 level. From here, it can decay back to the 4, +4 state (93.5 % branching ratio) or into either the 3D3/2 or 3D5/2 levels. Decays to the 3D3/2 level (0.66 % branching ratio) must be to states with M = 4 or M = 5 and are repumped to the 4P3/2 5, +5 state using 850 nm beams with σ+- and π-polarizations respectively. Once the ion decays to the 3D5/2 level (5.87 % branching ratio), it is removed from the 397 nm-866 nm cooling cycle and is said t-
o be “shelved”. States in the F = 3 manifold are not shelved due to the 3.2 GHz ground-level hyperﬁne splitting.

Since the normal 397 nm-866 nm cooling cycle does not involve the metastable 3D5/2 level one may, however, directly read out optical qubits composed of a state in the ground level and a state in the 3D5/2 level. We utilise this fact by incoherently mapping the 4S1/2 4, +4 state to the 3D5/2 “shelf” level using the optical pumping technique originally described in [MSW+08]. Read-
11In fact, as the ﬁeld becomes larger, a certain degree of state-selectivity is obtained in the ﬂuorescence. However, this is unlikely to be enough to be useful for readout.
41

2. MOTIVATION AND THEORY
out of this optical qubit has already been demonstrated in 40Ca+ with inﬁdelity of 0.87(11) × 10−4 by detecting photons scattered on the usual 397 nm-866 nm cooling transition [MSW+08].
The shelving process begins with the application of a 393 nm σ+-polarized laser tuned to resonance with the 4S1/2 4, +4 ⇔ 4P1/2 5, +5 transition (ﬁgure 2.20). This populates the 4P3/2 5, +5 state, from which the ion can decay either back to the 4, +4 state (93.5 % branching ratio) or to one of the 3D3/2 or 3D5/2 levels. Decays to the 3D 3 level (0.66 % branching ratio) must be to states with
2
M = 4 or M = 5 and are repumped using an 850 nm laser with σ+- and πpolarizations respectively. Once the ion decays to the 3D5/2 level it is removed from the 397 nm-866 nm cooling cycle and is said to be shelved.
Our dark state is thus the shelved 4, +4 state. Since the 393 nm laser is 3 GHz from resonance with transitions out of the F = 3 manifold, states in this manifold remain unshelved. The bright state may thus be chosen to be any state in the F = 3 manifold.
The simplest 850 nm repumping technique uses a single beam at a slight angle to the static magnetic ﬁeld, thus producing predominantly σ+ light with a small π component. This beam can be applied at the same time as the 393 nm beam. In principle, ﬁdelities of 99.96 % should be achievable using this method at a magnetic ﬁeld of a few gauss [Szw09].
This simple scheme has two major drawbacks. Firstly it uses a single 850 nm frequency to repump several states. This requires saturation broadening the transitions, increasing errors due to polarization impurities. To overcome this limitation we use three 850 nm frequencies – one for each transition. These are derived from a single laser using AOMs.
Secondly, applying the lasers at the same time reduces the effectiveness of each of them. If the 850 nm is applied at the same time as the 393 nm then it will not only repump population that decays to the 3D3/2 level, it will also pump
42

2.6. Single-qubit manipulations

population into it. Furthermore, by applying the 850 nm π laser at the same time as the 850 nm σ+ laser, we allow population that decays into M = 4 states in the 3D3/2 level to be repumped into M = 4 states in the P-level, from which it can decay into M < 4 states in the ground-level.
The most effective method of shelving – and the method used in this thesis – is thus to pulse the lasers on in the sequence

393 nm, 850 nm σ+, 850 nm π n 393 nm

(2.15)

where n is the number of repeats. The inﬁdelity of this technique is limited by both off-resonant shelving of the dark state and decay of the shelf-level, to
1 × 10−4. It is interesting to contrast the readout schemes used for 9Be+ and 43Ca+. Both have the advantage that they utilise incoherent optical pumping techniques on dipole allowed transitions. As such they only require low (∼1 µW) laser intensities and can tolerate relatively large (∼1 MHz) laser linewidths. Moreover, the Zeeman shifts induced by the intermediate ﬁeld push unwanted transitions several linewidths from resonance, reducing the effects of polarization impurities. This makes them ro-
bust and experimentally easy to implement. The more direct 9Be+ scheme has the advantage that it only requires a single laser, whilst the 43Ca+ scheme requires an additional repumping laser. However, in practice it is likely that the calcium lasers will be signiﬁcantly easier to work with, as discussed previously. The accuracy of the calcium scheme is fundamentally limited to 1 × 10−4, whilst the beryllium scheme may produce much smaller errors if the scattered photons can be detected with sufﬁcie-
nt efﬁciency. However, in practice the detection efﬁciencies of typical imaging systems are an order of magnitude smaller than the branching ratio of the 4P3/2 decays to the shelf (∼ 0.3% detection efﬁciency compared with 5.3% branching ratio). This is signiﬁcant because it means that shelving the ion is likely to involve scattering fewer photons than direct
43

2. MOTIVATION AND THEORY
ﬂuorescence detection, limiting the amount of time for unwanted transitions between the dark and bright states. Since detection efﬁciencies are likely to be limited in implementations of scalable quantum computing, this may prove to be a signiﬁcant beneﬁt.
2.7 Two-qubit gates using trapped ions
The strength of the Coulomb force leads to ion-ion separations of order 1 µm−10 µm in typical traps, which is orders of magnitude larger than the characteristic length scale of any direct coupling between electronic states. This makes directly entangling the states of ion qubits a near impossibility. The key to overcoming this limitation, originally understood by Cirac and Zoller [CZ95], is that one may use the internal-state-independent Coulomb interaction to couple ions’ internal states indirect-
ly, using their shared motional modes as a bus for quantum information.
We note that, in some senses, the lack of a direct internal state coupling is one of the chief beneﬁts of trapped ion qubits; in many other systems the qubits interact constantly in ways that are very hard to control, leading to decoherence. In contrast, with trapped ions there are only the couplings we create.
The original Cirac and Zoller proposal involved ﬁrst mapping the state of an ion onto the motional mode bus, before entangling the state of a second ion with the same bus mode. In this way the two ions are entangled using the motion as an intermediary. In practice, this is difﬁcult to implement for several reasons: the ions must be addressed individually; the bus mode must begin in its ground state12; and, while the ion’s state is mapped onto the bus mode, it is susceptible to loss of information -
due to interactions between the bus and the environment.
12Notice that this is a particularly strict requirement since any error in initialising the motional state directly produces a gate error. Thus, to produce a gate with an error of 1 × 10−4 one would have to ensure that the ions had a 99.99 % probability of being in their motional ground state. This would be extremely challenging experimentally.
44

2.7. Two-qubit gates using trapped ions
Because of these complications, the Cirac and Zoller proposal was not experimentally demonstrated until 2003 [SKHR+03].
In the mean time, several two-qubit gates were proposed which used the spin-motion coupling in a more subtle way [SM99], [SM00], [MSJ00] & [SFZ99]. These proposals use a radiation ﬁeld to exert a spin-dependent force on the ions. By controlling the phase of this force with respect to the ions’ motion, we drive the multi-ion system around a closed circuit in the x-p phase space of one of its vibrational modes. During this process the ions’ motion is transiently excited. When the circuit is complete-
d the motion has returned to its original state; however the ions have accrued a phase that is proportional to the area enclosed by the circuit. Since the original force was dependent on the ions’ collective spin state, so is the accumulated phase, leading to entanglement. This process may be seen as an application of the Berry geometric phase that accumulates when a system’s Hamiltonian is adiabatically transported around a closed circuit in parameter space [Ber84].
The great advantage of these proposals is that by using an appropriate driving ﬁeld, the force can be made to resemble a classical force with little dependence on the ions’ motional state. This makes these gates insensitive to the ions’ initial motional state, which greatly simpliﬁes the experimental requirements.
There are two main ways one can produce the required force. Firstly, one can use spatially dependent A.C. Stark shifts to modulate the qubits’ energy splitting at a frequency that is nearly resonant with a vibrational mode. I will refer to this as a σz ⊗ σz or “phase” gate. Secondly, one can drive motional sidebands of the qubit transition, which I will refer to as a σφ ⊗ σφ or Mølmer-Sørensen gate.
Phase gates are often preferred because they do not couple to the qubit transition directly, making them insensitive to changes in the qubit frequency, and because they may often be implemented with a simpler optical set-up when driven by lasers. However, as discussed previously, they are in general not ap-
45

2. MOTIVATION AND THEORY
plicable to clock states and so will not be considered further in this work. For a discussion of the relative merits of the two kinds of gate, see e.g. [Roo08].

2.7.1 Microwaves or lasers?
If a radiation ﬁeld is to exert a force on an ion then it must change appreciably across the extent of the ion’s wavepacket. For free-space radiation this change may be quantiﬁed by the Lamb-Dicke parameter, η, deﬁned as

η := 2πq0/λ

(2.16)

where q0 is the RMS extent of the ion’s ground-state wavepacket and λ is the radiation’s wavelength. To provide an effective spin-motion coupling, we typically want η ∼ 0.1.
Since our qubit frequency is 3.2 GHz, one might suggest using microwave radiation to exert our force. However, for a 43Ca+ ion conﬁned in a trap with a secular frequency of 3 MHz, q0 = 6 nm. This is orders of magnitude smaller than the 10 cm wavelength of 3.2 GHz radiation, leading to a negligible LambDicke parameter of η = 4 × 10−7. To get a Lamb-Dicke parameter of 0.1, we require radiation with a wavelength of 400 nm. Because of this vast discrepancy in Lamb-Dicke parameters, two-qubit gates hav-
e traditionally always been driven using lasers.
However, the advent of surface traps opened the possibility of trapping ions in the near-ﬁeld regime tens of microns above a current-carrying waveguide. In this regime the ﬁeld gradient depends on the waveguide geometry and not on the the radiation’s free-space wavelength. This allows a non-negligible coupling to the ion’s motion, even at microwave frequencies. A two-qubit gate based on this effect was original proposed in [OLA+08] and demonstrated in [OWC+11] (although we note that the idea can b-
e found in earlier works such as [WMI+98]).
46

2.7. Two-qubit gates using trapped ions
Using microwaves instead of lasers has several advantages: stable, low-noise sources are commercially available at these frequencies; control of the phase, frequency and amplitude is typically easier with electronic than optical sources; producing an interferometrically stable set-up is fundamentally easier at microwave frequencies than optical frequencies; waveguides may be integrated into trap structures in a fundamentally scalable way [AHB+13] [ALH+13]13; by incorporating microwave structures i-
nto the trap we eliminate pointing noise; and, since the qubit is not coupled to an excited state, errors due to photon scattering ([OIB+07]) are eliminated.
A further advantage of the near-ﬁeld force is its high degree of insensitivity to the ions’ motional state. A free-space optical radiation ﬁeld exhibits nonlinear structure over a length scale of λ/2π, which is typically only an order of magnitude larger than the spatial extent of the ions’ wavepacket (η ∼ 0.1). This non-linearity results in ions in different thermal states experiencing different forces, leading to gate inﬁdelities. Because of this, ions must typically be cooled to near their moti-
onal ground state before two-qubit laser gates.
The ﬁrst non-linear contribution to the radiation force is due to the ﬁeld’s third spatial derivative. For near-ﬁeld radiation produced by typical electrode geometries, this contribution is suppressed by a factor of order (q0/d)2 relative to the linear term, where d is the ion-electrode separation14. This will be negligible in most cases, allowing high-ﬁdelity gates to be achieved with ions which are only Doppler cooled. We note that q0/d may be thought of as an effective LambDicke parameter for n-
ear-ﬁeld radiation, so this thermal insensitivity may be seen as the up side of having a Lamb-Dicke parameter of order 10−4.
Despite these potential advantages, microwave driving presents two major
13We note that signiﬁcant progress has also been made towards integrating optical components into surface traps (see, e.g. [BEM+11]).
14Scaling factors used in this section are based on the ﬁeld produced by a long, thin, straight current carrying wire, B = µ0I/ (2πd) [OLA+08]. While the exact scaling will depend on the details of the trap geometry employed, this is expected to give an order of magnitude estimate in most cases.
47

2. MOTIVATION AND THEORY
challenges. The ﬁrst is to produce a sufﬁcient ﬁeld gradient to allow two-qubit gates to be completed before heating and other noise mechanisms set in. The gradient is limited by the ion-electrode separation and tolerable power dissipation in trap structures. In general, we expect the gradient to increase with decreasing ion-trap separation as roughly d−2 . Thus, it is important to bring the ion as close to the trap’s surface as possible. The extent to which one can do this is likely to be limited-
 by anomalous heating, which typically scales as ∼ d−4. The expected error-per-gate due to trap heating is thus expected to scale as roughly d−2. We note, however, that it may be possible to suppress this effect by cooling the trap to cryogenic temperatures [LGA+08] [CS13] or by employing surface cleaning techniques [AGH+11], [HCW+12], [DGB+13]. A further restriction on how close the ion can be brought to the trap surface arises from the decreasing width of the required trap electrodes. How thin o-
ne can make these electrodes will be limited by fabrication tolerances and power dissipation requirements.
The second challenge arises from the fact that strong ﬁeld gradients are typically accompanied by strong ﬁelds. The presence of a strong ﬁeld only a few megahertz detuned from the qubit transition would lead to off-resonant excitation of the qubit, producing signiﬁcant light-shifts and potentially causing unwanted spin-ﬂips. To reduce these effects to a tolerable level, a bias microwave ﬁeld must be used to cancel the ﬁeld at the ion’s equilibrium position. In practice, suppression of the ﬁeld by -
a factor of at least thousand is likely to be necessary, placing stringent requirements on the stability of the microwave system. We note, however, that the overall ﬁeld at the ion scales roughly as d−1, compared with the scaling d−2 of the gradient. Thus, the ratio of the ﬁeld gradient to the ﬁeld decreases with d−1, providing further incentive to bring the ion as close to the trap’s surface as possible. As discussed in the next section, this is essentially a further manifestation of the fact tha-
t the effective Lamb-Dicke parameter is η˜ ∼ q0/d.
48

2.7. Two-qubit gates using trapped ions
An alternative approach to RF-driven two-qubit gates was proposed in [MW01] and demonstrated in [JBT+09] and [KPS+12]. This proposal relies on the use of a large static magnetic ﬁeld gradient to couple an RF ﬁeld to the ions’ motion. We note two potential disadvantages of this scheme. Firstly, the required magnetic ﬁeld gradients produce large Zeeman splittings, which cause all qubits to operate at different frequencies. Whilst this allows spectral addressing of qubits, it introduces additional ex-
perimental complexity since the qubits’ phases precess at an RF frequency relative to each other. This problem is likely to be particularly acute in architectures for trapped ion QIP which rely on shuttling ions around a two-dimensional trap. In such a system, the qubits would acquire phases that depend sensitively on how they were shuttled.
Secondly, this proposal cannot be implemented using magnetic ﬁeld insensitive qubits, making it susceptible to ﬁeld noise. A certain degree of robustness is typically gained by the use of qubits based on RF dressed states. However, this technique requires additional experimental overhead and coherence times are typically signiﬁcantly shorter than achieved using clock qubits.

2.7.2 Microwave mediated spin-motion coupling

In this section we derive the Hamiltonian describing the coupling between a string of trapped ion qubits and an oscillating magnetic ﬁeld. We keep the derivation general so that it applies to any qubit composed of two states separated by a magnetic dipole transition.
We begin by considering the displacements from equilibrium of a string of n ions along an axis qˆ. Due the restrictions on trap geometry [All11], we are typically interested in the trap’s radial directions. For a classical system the displacement of ion n from equilibrium is then [Jam98]

n
qn = qˆ bjnqj
j=1

(2.17) 49

2. MOTIVATION AND THEORY

where qj is the amplitude of the ion chain’s jth normal mode and bjn is its eigenvector, giving the phase and amplitude of motion for ion n.

We quantize the ions’ motion by introducing the normal mode annihila-

tion and creation operators, aj and a†j, such that qj = qj0 aj + a†j . Here qj0 = / (2mωj) and ωj are the the spatial extent of the ion’s ground-state wavefunction and mode frequency for the jth normal mode and m is the mass

of each ion. We thus ﬁnd that the quantized motion of the ions about their equi-

librium positions may be expressed as

n
qn = qˆ bjnqj0 aj + a†j
j=1

(2.18)

We next consider applying an oscillating magnetic ﬁeld. We choose our axes

such that the trap’s symmetry axis lies along xˆ and the static B-ﬁeld, which pro-

duces our quantization axis, lies along ˆz. We assume the ﬁeld to have no com-

ponent along xˆ and further to have translational symmetry along xˆ. We assume

that the ﬁeld may be expressed as a linear function of position in the region

explored by the ions. Thus the ﬁeld seen by the nth ion is

B (qn, t) = B (qn) cos (ωt − φ0) = B0n + qnB cos (ωt − φ0) = Bn0,z + qnBz ˆz + Bn0,y + qnBy yˆ cos (ωt − φ0)

(2.19)

where B0n is the ﬁeld amplitude at the ion’s equilibrium position, B

:=

∂B ∂qˆn

is the ﬁeld gradient along the normal mode axis and ω is the frequency of the

applied radiation.

The Hamiltonian for the interaction between the ion and the oscillating ﬁeld

is15

Hn = −µ · B cos (ωt − φ0) = − {Bzµz − B+1µ−1 − B−1µ+1} cos (ωt − φ0)

(2.20)

We ignore all atomic states apart from the qubit states, which we label 0

and 1 , taking 1 to represent the state with higher energy. In the case of the
15See B.3 for a discussion of the spherical basis used in the second line of equation 2.20.

50

2.7. Two-qubit gates using trapped ions

clock qubit used in this thesis 0 := 4, 0 and 1 := 3, +1 . We represent our

state by the vector16


α  =α 1 +β 0 
β

(2.21)

Since the Hamiltonian’s matrix elements are real with appropriate choice of energy datum it may be expressed as

Hn

=

1 2

(H11

−

H00)σz,n

+ H10σx,n

(2.22)

where Hij are the Hamiltonian’s matrix elements and σi,n (i = {x, y, z, +, −}) is a Pauli operator acting on the state of the nth ion.
The σz term, representing the differential Zeeman shift produced by Bz, is given by

1 2

(H11

−

H00)

=

−

1 2

Bz

1|µz|1 − 0|µz|0

cos (ωt − φ0)

(2.23)

Note that this vanishes for any clock transition. The σx term represents the coupling between qubit states due to the B-ﬁeld.
This arises from the polarization component of the B-ﬁeld which matches the polarization of the qubit transition. Thus,

H10 = (−1)Q+1 B−Q 1|µQ|0 cos (ωt − φ0) := RB−Q cos (ωt − φ0)

(2.24)

where Q := M1 − M0 is the polarization of the qubit transition and R is the magnetic dipole matrix element for the qubit transition as deﬁned in section 2.3.

We can simplify this notation somewhat by imagining our qubit as a pure

spin-

1 2

system

with

magnetic

dipole

moment

µ˜

interacting

with

a

(ﬁctitious)

B-

16See B.2 for a discussion of the conventions I use to represent the ion’s state in a twodimensional sub-space as well as some useful results.

51

2. MOTIVATION AND THEORY

ﬁeld B˜ . The elements of µ˜ and B˜ are

µ˜x := −R

µ˜z

:=

1 2

1|µz|1 − 0|µz|0

B˜x := B−Q

B˜y := 0

B˜z := Bz

Our Hamiltonian then becomes

(2.25)

Hn = − B˜zµ˜zσz,n + B˜xµ˜xσx,n cos (ωt − φ0)

(2.26)

Using (2.19) to expand the B-ﬁeld to ﬁrst order in the ion’s position, we ﬁnd

Hn

=

−

1 2

ei(ωt−φ0) + e−i(ωt−φ0)

µ˜xB˜x0σx,n + µ˜zB˜z0σz,n+

n bjnqj0(aj + a†j )(µ˜xB˜xσx,n + µ˜zB˜zσz,n)
j=1

(2.27)

We next move into the interaction picture with respect to the free energy of

the ions’ internal and motional states

H0

=

1 2

ω0σz +

ωj

1 2

+

a†j aj

j

(2.28)

where ω0 is the qubit frequency. We deﬁne the detuning of the B-ﬁeld, δ, such

that ω := ω0 + δ and make a rotating wave approximation, dropping all terms

rotating at 2ω0. Our Hamiltonian becomes

Hn

=

1 2

Ωxe−i(δt−φ0)σ+,n

+

1 2

Ωz e−i(ωt−φ0 ) σz,n

n

+

1 2

Ωx,jne−i(δt−φ0)σ+,n + Ωz,jne−i(ωt−φ0)σz,n

j=1

+ H.C.

where we have deﬁned the Rabi frequencies

aj e−iωjt + a†j eiωjt (2.29)

Ωx Ωz Ωx,jn Ωz,jn

:= −µ˜xB˜x0 := −µ˜zB˜z0 := −µ˜xB˜xbjnqj0 := −µ˜zB˜zbjnqj0

= RB−0 Q

=

−

1 2

1|µz|1 − 0|µz|0

= RB−Qbjnqj0

=

−

1 2

1|µz|1 − 0|µz|0

Bz0 Bz bj n qj0

52

(2.30)

2.7. Two-qubit gates using trapped ions

The microwave coupling Hamiltonian of eq (2.29) contains both σx terms, representing a coupling between the qubit states, and σz terms representing a differential Zeeman shift on the qubit transition. The ﬁrst pair of terms act only on the ions’ internal states and so drive global single-qubit rotations. The second pair, however, couple the spins to the ions’ motion and can be used to create multi-ion entanglement.
Either of the two of the spin-motion terms could, in principle, be used to entangle ions, producing σφ ⊗ σφ or σz ⊗ σz couplings. However, driving the σz terms in (2.29) requires radiation nearly resonant with the ions’ vibrational modes. This is problematic since the large currents required to produce the magnetic ﬁeld gradient are likely to be accompanied by non-negligible voltages. These voltages will couple to the ions’ charge, creating a strong, stateindependent force, leading to signiﬁcant h-
eating. Moreover, as discussed previously, phase gates can only be used on magnetic-ﬁeld sensitive transitions. Since these gates are likely to be relatively slow for currently realisable ﬁeld gradients, this poses a potentially serious source of inﬁdelity.
We will thus be concerned with the σφ ⊗ σφ coupling, driven by radiation close to resonance with the qubit’s motional sideband transitions. In this case the σz terms are far from resonance and can be ignored, so our Hamiltonian becomes

n

Hn

=

1 2

Ωxe−i(δt−φ0)σ+,n

+

1 2

Ωx,jne−i(δt−φ0)σ+,n aj e−iωjt + a†j eiωjt

j=1

+ H.C.

(2.31)

As discussed previously, since we are not using free-space radiation there is no well-deﬁned Lamb-Dicke parameter for this interaction. It is nonetheless useful to deﬁne an effective Lamb-Dicke parameter, η˜, as the ratio of the strengths of the motional and carrier coupling terms in our Hamiltonian. This deﬁnition reﬂects the corresponding result for laser gates, which holds to ﬁrst order in η.

53

2. MOTIVATION AND THEORY

Thus,

η˜

:=

Ωx,jn Ωx

=

B−Q B−0 Q

bjnqj0

∼ qj0/d

(2.32)

where the last line represents an order of magnitude scaling estimate based on

the ﬁeld around a long, thin current-carrying wire as discussed in the previous

section. For d = 100 um, we expect η˜ ∼ 1 × 10−4. Thus, to achieve an effective

Lamb-Dicke parameter of 0.1, comparable to laser-driven gates, one must use

separate bias ﬁelds to reduce the carrier term by a factor of roughly 1000.

2.7.3 The Mølmer-Sørensen force
The Mølmer-Sørensen gate uses a bichromatic radiation ﬁeld with components near the qubit’s ﬁrst red and blue motional sideband transitions to create a spindependent force. In this section we derive the Hamiltonian for this interaction, as well as an exact expression for the propagator describing the two-qubit Mølmer-Sørensen gate in the absence of errors, such as heating. We assume that there is no oscillating B-ﬁeld at the ions’ position (it has been “nulled”) so that Ωx = 0. We further assume t-
hat the interaction only couples to a single normal mode with frequency ωj and that the two sidebands have the same Rabi frequency. Finally, we make the rotating wave approximation, discarding all terms that are off-resonant by twice the ions’ vibrational frequency.
We begin with a pair of oscillating ﬁelds with frequencies ω = ω0 ± ωj ± δ and phases φr and φb. We will refer to these as “red” (−) and “blue” (+). The Hamiltonians for the two sideband interactions are

HBSB,n

=

1 2

Ωnσ+,n

a†e−i(δt−φb) + ae−i(2ωj t+δt−φb)

+ H.C.

HRSB,n

=

1 2

Ωnσ+,n

aei(δt+φr) + a†ei(2ωj t+δt+φr)

+ H.C.

(2.33)

where Ωn is the Rabi frequency for the red and blue sideband couplings to ion

54

2.7. Two-qubit gates using trapped ions

n, deﬁned by

Ωn := Ωx,jn := RB−Qbjnqj0

(2.34)

Discarding the far from resonant terms at at 2ωj, the sideband Hamiltonians

become

HBSB,n

=

1 2

Ωnσ+,na†e−i(δt−φb)

+

1 2

Ωnσ−,naei(δt−φb)

HRSB,n

=

1 2

Ωn σ+,n aei(δt+φr )

+

1 2

Ωn σ−,n a† e−i(δt+φr )

The Hamiltonian for the bichromatic ﬁeld is thus

(2.35)

HMS,n = HBSB,n + HRSB,n

=

1 2

Ωn

σ+,neiφ¯ + σ−,ne−iφ¯

aeiδt

e−

1 2

iδφ

+

a†

e−iδt

e

1 2

iδφ

=

1 2

Ωnσφ¯,n

aeiδte−

1 2

iδφ

+

a†e−iδte

1 2

iδφ

(2.36)

where we have deﬁned the radiation ﬁeld’s mean phase and phase difference as

φ¯

:=

1 2

(φb

+

φr )

δφ := (φb − φr)

(2.37)

and σφ¯,n := σx,n cos φ¯ − σy,n sin φ¯. The combined Hamiltonian for the N -ion system is a sum of such single-ion
Hamiltonians, given by

HMS

=

1 2

N

Ωnσφ¯,n

aeiδt

e−

1 2

iδφ

+

a†

e−iδt

e

1 2

iδφ

n=1

For a system of two ions this becomes

(2.38)

HMS

=

1 2

ΩSφ¯

aeiδt

e−

1 2

iδφ

+

a†

e−iδt

e

1 2

iδφ

(2.39)

where we have deﬁned the two-ion Rabi frequency and collective spin operators, Ω and Sφ¯, by

Ω := Ωx,jn sgn (bjn) = RB−Qqj0 bjn Sφ¯ := sgn (bj1)σφ¯,1 + sgn (bj2)σφ¯,2

(2.40) 55

2. MOTIVATION AND THEORY

Equation (2.39) describes the 2-qubit Mølmer-Sørensen gate in the absence of errors. When this Hamiltonian is applied to an eigenstate of the collective spin operator it corresponds to a harmonic oscillator driven by a classical force, whose phase and amplitude depend on the spin state17. We can integrate the Schro¨ dinger equation for this Hamiltonian exactly using the Magnus expansion18. The commutators for the Hamiltonian at different times are given by

[HMS(t), HMS(t )]

=

1 2

i

[HMS(t), [HMS(t ), HMS(t )]] = 0

ΩSφ¯ 2 sin [δ (t − t )]

(2.41)

so only the ﬁrst two terms in the Magnus expansion are non-vanishing. The exact propagator is thus given by

UMS = D Sφ¯α exp (−iΦ(t))

where

α

:=

−i

Ω δ

e−

1 2

iδte

1 2

iδφ

sin

1 2

δt

Φ(t) :=

ΩSφ¯ 2δ

2
(δt − sin δt)

and D is the phase space displacement operator, deﬁned by

(2.42) (2.43)

D(α) := exp αa† − α∗a

(2.44)

The action of this propagator is most obvious in the eigenbasis of Sφ¯ for which

where

UMS = D(λα) exp −iλ2Φ0(t) λ λ
λ

Φ0(t) :=

Ω 2δ

2
(δt − sin δt)

(2.45) (2.46)

We see that different spin states are driven around different paths in phase

space, depending on the phase and magnitude of their eigenvalue. As they

traverse these paths, they accumulate a geometric phase of λ2Φ0(t). In general,
17See, e.g. [CN65], for a review of driven quantum harmonic oscillators. 18See Appendix B.4 for a review of the Magnus expansion.

56

2.7. Two-qubit gates using trapped ions

this propagator entangles the ions’ spins with their motion; however, at times

τ

=

2nπ δ

the phase-space paths form closed loops, leaving the ions’

spins and

motion in a separable state. The propagator then reduces to

UMS = exp −iλ2Φ0(2nπ/δ) λ λ
λ

(2.47)

The ions have thus accumulated a geometric phase that is dependent on their

initial spin state. Importantly, however, this phase is independent of their initial

motional state.

As an example of how this interaction can be used to implement a two-qubit

gate, we consider the simplest case where

Sφ¯ = σx,1 + σx,2 Here, the closed loop propagator becomes

(2.48)

UMS = exp [−4iΦ0(2nπ/δ)] ++ ++ + −− −− + +− +− + −+ −+

(2.49)

where

√ ± = 1/ 2 1 ± 0

(2.50)

are the eigenstates of σx with corresponding eigenvalues of λ± = ±1. Choosing our detuning so that δ2/Ω2 = 4n ensures that
4Φ0(2nπ/δ) = π/2 Sφ¯ 2 so our propagator becomes

UMS = +− +− + −+ −+ − i ++ ++ + −− −−

(2.51)

which represents an entangling gate closely related to the controlled-phase gate. By application of suitable single-qubit operations, this can be used to implement a controlled-NOT gate in the computational basis (see, e.g. [SM99]).

57

3
Noise Master Equations
Random ﬂuctuations of classical parameters, such as Rabi frequencies and detunings, are one of the most pervasive difﬁculties in experimental quantum computing. In this chapter we develop a simple master equation-based approach, which will allow us to model and understand some of the important noise sources present in the experiments described in this thesis.
In general, understanding the dynamics of even relatively simple systems subject to noise is a difﬁcult task. There are, however, three particular limiting cases in which the problem is greatly simpliﬁed. Firstly, when the noise is small enough that it does not signiﬁcantly alter the system’s trajectory and the Born approximation may be applied.
Secondly, when the correlation time of the noise process is short compared with the time-scale of the system’s dynamics. In this case, we may approximate the noise as white noise, with a ﬂat power spectrum and inﬁnite bandwidth. Finally, when the noise correlation time is long compared with the time we wish to follow the system for. In this case, the system’s evolution may be understood by assuming a constant, random offset in the ﬂuctuating parameter. If we observe an ensemble of identical system-
s with independent ﬂuctuations then the noise will be evident as shot-to-shot variations over the ensemble.
If, on the other hand, the noise’s correlation time is comparable to the time59

3. NOISE MASTER EQUATIONS
scale of the system’s evolution and, moreover, if the noise produces a signiﬁcant change to the system’s trajectory, then Monte-Carlo simulations must generally be performed.
Our focus in this chapter will be the ﬁrst two of these cases: white noise and the small noise approximation. We begin in section 3.2 with a treatment of idealised white noise based on stochastic calculus. Next, in section 3.3, we provide a perturbative treatment of ﬂuctuations with arbitrary power spectra. The ﬁnal two sections of the chapter, sections 3.4 and 3.5, then apply the previously derived white noise master equation to two cases of particular importance: the two-state system and the har-
monic oscillator. Our treatment of Rabi ﬂopping on a two-state system in section 3.4 will cover white noise in the driving ﬁeld’s amplitude, phase and frequency. We derive master equations for these cases, which we integrate analytically to obtain expressions for the ﬁdelity of a π-pulse in the presence of noise.
Our treatment of the noisy quantum harmonic oscillator in section 3.4 covers both dephasing due to oscillator frequency ﬂuctuations and heating due a stochastic driving force. These two problems are of practical importance to us because of the use of the ions’ motional modes during two-qubit gates. Gates based on trap radial modes, such as the microwave-driven gates considered in this thesis, are likely to be particularly prone to dephasing due to small amounts of noise on the trap RF. To understa-
nd this dephasing process, we derive expressions for the relation between the RF’s AM and PM noise spectra and the dephasing terms in our master equation.
We use the results derived here in chapters 5 and 6 to develop models of sources of experimental inﬁdelity during single-qubit randomized benchmarking experiments and two-qubit gates. The material in this chapter is supplemented by appendix C, which presents an overview of some basic aspects of modulation theory. This provides the link between the autocorrelation functions
60

3.1. The Stochastic Liouville-von Neumann Equation
used in the master equations and the noise spectra of the ﬁelds they represent. The noise terms considered in this chapter will be classical, reﬂecting the fact
that the experiments we perform do not involve coupling ions to ﬁelds containing a small number of quanta. This allows some simpliﬁcation of our treatment. Nonetheless, the equations we derive are consistent with the relevant limits of quantum optics treatments in which ﬂuctuations arise from couplings to quantised ﬁelds (see, e.g. [TTM+00] & [WM08]).
The stochastic treatments of ﬂuctuations presented here are, of course, far from original and draw on a long history of work. Early treatments of quantum master equations describing Hamiltonians with multiplicative classical ﬂuctuations can be found, for example, in [Aga78], [Aga76] and [Ebe76]. The treatment of multiplicative white noise using stochastic differential equations (SDEs) presented here is essentially that of Dyrting and Milburn [DM96] and Schneider and Milburn [SM98]. Readers unfamil-
iar with the stochastic methods used in this section will ﬁnd an excellent introduction in the classic text [Gar90].

3.1 The Stochastic Liouville-von Neumann Equation

Our focus in this chapter is on quantum systems subject to multiplicative noise in a classical parameter, ξ(t), with Hamiltonians of the form

HT(t) = H1(t) + ξ(t)H2(t)

(3.1)

where ξ(t) represents a real valued, zero mean stationary process. The system’s density matrix evolves according to the stochastic Liouville-
von Neumann equation

i dρ = [H1, ρ] dt + ξ[H2, ρ] dt

(3.2)

This equation describes the evolution of the density matrix under a particular realisation of the noise process ξ(t). Experimentally, however, one can only
61

3. NOISE MASTER EQUATIONS
measure components of the density matrix by repeating an experiment many times and averaging the results. Our aim through this section will thus be to derive master equations describing the evolution of the density matrix averaged over the ﬂuctuations.

3.2 White noise

We begin then by considering the limit where the ﬂuctuations described by ξ have a ﬂat frequency spectrum stretching out to a bandwidth that is large compared with the frequency at which the system can respond. In this limit, one may consider ξ to be a white noise process characterised by

ξ(τ )ξ(0) = 0

(τ = 0)

∞

(3.3)

ξ(τ )ξ(0) dτ = Γ

−∞

We may thus identify ξ(τ )ξ(0) = Γ δ(t) and interpret ξ dt as the increment of the Wiener process, so that

√ ξ(τ ) dt → Γ dW (t)

(3.4)

Equation (3.2) then becomes the Stratonovich stochastic differential equation

(SDE)

√ i dρ = [H1, ρ] dt + Γ[H2, ρ] ◦ dW

(3.5)

Averaging over realisations of ξ in (3.5) is complicated by the fact that for Stratonovich SDEs, dW (t) and ρ(t) are not statistically independent. We thus convert (3.5) to the Ito form before averaging. To do this, we assume that ρ(t) is the solution to an Ito SDE of the form

dρ(t) = A(ρ(t), t) dt + B(ρ(t), t) dW

(3.6)

where A and B are operator valued functions of ρ(t) and t. 62

3.2. White noise

We recall that the Stratonovich integral is deﬁned by

t

n

G(ρ(t ), t ) ◦ dW (t ) ms:−=lim G

n→∞

t0

i=1

1 2

[ρ(ti)

+

ρ(ti−1)]

,

ti−1

[W (ti) − W (ti−1)] (3.7)

where the equality holds in the mean square limit [Gar90]. Now,

dρ(t) := ρ(t + dt) − ρ(t)

(3.8)

so

G

1 2

[ρ(ti)

+

ρ(ti−1)]

,

ti−1

=

G

ρ(ti−1)

+

1 2

dρ(ti−1

),

ti−1

(3.9)

Since all functions are now evaluated at the same time, we will stop labelling

times from here on for the sake of clarity. In our case,

√ i G(ρ(t), t) = Γ[H2, ρ]

(3.10)

so

i

G

ρ

+

1 2

dρ,

t

√

=

Γ[H2,

ρ

+

1 2

dρ]

√

√

√

=

Γ[H2,

ρ]

+

1 2

Γ[H2,

A]

dt

+

1 2

Γ[H2, B] dW

Making the usual identiﬁcations that

(3.11)

dW 2(t) dt2(t)

= dt =0

(3.12)

dt(t) dW (t) = 0

we ﬁnd

√ Γ[H2, ρ]

◦

dW

=

√ Γ[H2, ρ] dW

+

1 2

√ Γ[H2,

B]

dt

Comparing (3.6) with (3.5) and (3.13), we arrive at the Ito SDE

(3.13)

i

dρ(t)

=

[H1,

ρ]

dt

−

1 2

i

Γ[H2,

[H2,

ρ]]

dt

+

√ Γ[H2,

ρ]

dW

(3.14)

Now dW (t) is statistically independent from ρ(t)1, so we may average over

realisations of (3.14) to arrive at our master equation

dρ i dt

= [H1,

ρ

]

−

1 2

i

Γ[H2,

[H2,

ρ ]]

1Here, we assume that H2 is non-anticipating.

(3.15)

63

3. NOISE MASTER EQUATIONS

To simplify our notation, from here on we will drop the expectation brackets around ρ. It should be understood that we will always be referring the the density matrix averaged over the ﬂuctuations and not to its evolution over any particular realisation of the noise process.
It is often convenient to express our master equation in the Lindblad form [Lin76], which may be done by expanding the commutator in (3.15). Our master equation then becomes

dρ dt

=

−

i

[H1,

ρ]

−

1 22

Γ

{H2H2ρ

−

2H2ρH2

+

ρH2H2}

=

−

i

[H1,

ρ]

+

LρL†

−

1 2

L†Lρ + ρL†L

√
where L := Γ H2 and we have used the fact that H2 = H2†.

(3.16)

3.3 Noise with arbitrary correlations

If the noise spectrum cannot be approximated as white then one must take account of the details of its correlation function. We begin with the stochastic Liouville-von Neumann equation

i ρ˙(t) = [H1(t), ρ(t)] + ξ(t)[H2(t), ρ(t)]

(3.17)

We now move into an interaction picture with respect to the deterministic component of the dynamics, H1, by making the transformation

ρ → ρ˜ := U †ρU

(3.18)

where U (t) is the propagator corresponding to H1, deﬁned as the solution to the

differential equation

dU dt

= − i H1U

(3.19)

that satisﬁes U (t) = 1 (see section B.4). The system then evolves according to

i ρ˜˙ = i U †ρ˙U − U †[H1, ρ]U = ξ(t)U †[H2, ρ]U = ξ(t)[H˜2, ρ˜]

(3.20)

64

3.3. Noise with arbitrary correlations

where we have deﬁned the interaction picture Hamiltonian, H˜2, as H˜2 := U †H2U

(3.21)

From here on, we will drop the tildes for convenience. Next, we formally integrate (3.20) so that

ρ(t) = ρ(0) − i

t
ξ(t )[H2(t ), ρ(t )] dt

0

(3.22)

By repeatedly substituting the solution (3.22) into itself, we arrive at the se-

ries solution

ρ(t)

=

∞
ρ(0) +

−i

n

t 0

dt1

t1 0

dt2

·

·

·

tn−1 0

dtnξ(t1)

·

·

·

ξ(tn)

n=1

×[H2(t1), [H2(t2), [..., ρ(0)]]]

(3.23)

Averaging over the ﬂuctuations, this becomes

ρ(t)

=

∞
ρ0(t) +

−i

n

t 0

dt1

t1 0

dt2

·

·

·

tn−1 0

dtn

ξ(t1) · · · ξ(tn)

n=2

×[H2(t1), [H2(t2), [..., ρ(0)]]]

(3.24)

where the ﬁrst-order term has vanished because of the assumption that ξ(t) is a

zero-mean process. Once again, we drop the expectation brackets around ρ.

We now make the Born approximation that the effect of the noise over the

duration of the integration is sufﬁciently small that we may neglect terms in

(3.24) of higher than second order in ξ. This is equivalent to making the approx-

imation that we may evaluate the impact of the noise term using the density

matrix that would be obtained in the absence of noise. We thus arrive at the

interaction picture master equation

ρ(t) = ρ(0) −

1
2

t
dt1

t1
dt2 G(t1 − t2)[H2(t1), [H2(t2), ρ(0)]]

0

0

where, as usual, G(τ ) is the noise autocorrelation function, deﬁned by

(3.25)

G(τ ) := ξ(t + τ )ξ(t)

(3.26)

65

3. NOISE MASTER EQUATIONS

3.4 Three faces of white noise

3.4.1 White amplitude noise

We begin by considering Rabi ﬂopping due to a monochromatic ﬁeld with ﬂuctuating amplitude. In the frame co-rotating with the driving ﬁeld and after making the rotating wave approximation, we have

H

=

−

1 2

δσz

+

1 2

Ω(t)σx

=

−

1 2

δσz

+

1 2

Ω0σx

+

1 2

∆Ω(t)σx

(3.27)

where, as usual, Ω0 and δ are the mean Rabi frequency and detuning in angular

units and ∆Ω(t) represents the ﬂuctuating component of the Rabi frequency.

We assume that the Rabi ﬂopping is driven by a ﬁeld with amplitude V , such

that

Ω(t) ∝ V (t)

(3.28)

thus From (C.24), we have

∆Ω(t) Ω0

=

∆V (t) V0

(3.29)

G(τ ) := ∆Ω(t + τ )∆Ω(t)

= Ω20

∆V (t + τ )∆V (t) V02

∞

=

Ω20 P0

e−2πifτ N0(f ) df

−∞

(3.30)

where P0 is the power in the carrier and N0(f ) is the single-sideband AM noise

power spectral density. In the limit where the noise is white, we have

G(τ

)

=

Ω20

N0 P0

δ(τ

)

(3.31)

where δ is the Dirac delta function.

Substituting (3.27) and (3.31) into (3.15), we arrive at the master equation

dρ dt

=

1 2

iδ[σz

,

ρ]

−

1 2

iΩ0[σx,

ρ]

−

N0 8P0

Ω20[σx,

[σx

,

ρ]]

(3.32)

66

3.4. Three faces of white noise

To illustrate the effect of the depolarizing term in this master equation, we consider the simple case of resonant Rabi ﬂopping, beginning in the state 0 . Integrating (3.32) we ﬁnd that



1

2

ρ(t)

=

 





1 − e−

N0 tΩ20 2P0

cos(tΩ0)

ie 1
2

−

N0 tΩ20 2P0

sin(tΩ0)

−

1 2

ie−

N0 tΩ20 2P0

sin(tΩ0)

 



1 2

1

+

e−

N0 tΩ20 2P0

cos(tΩ0)

  

(3.33)

To ﬁrst order in N0/P0, the error after n π-pulses (Ω0t = nπ) is given by

1

−

P1

=

nπ

N0 4P0

Ω0

(3.34)

This result reﬂects the fact that in the case of resonant Rabi ﬂopping, the ﬁdelity of a π-pulse depends only on the total pulse area, A := Ω(t) dt. Given a pulse area of A = nπ + ∆A (∆A 1), we expect an error of

1

−

P1

=

1 4

(∆A)2

Since our ﬂuctuations in the Rabi frequency are of the form

(3.35)

∆Ω dt =

Ω20

N0 P0

dW

we expect Gaussian ﬂuctuations in the pulse area with variance

(3.36)

∆A(t)2

=

tΩ20

N0 P0

=

nπΩ0

N0 P0

(3.37)

We see that the RMS pulse area error increases as the square root of n, as ex-

pected for a random walk process. For a ﬁxed mean pulse area, the error also

increases linearly with Ω0, reﬂecting the fact that the faster we perform our πpulses, the larger the noise bandwidth we are sensitive to.

More generally, one can show that if the system begins in the pure state

ψ(t = 0) = cos θi 0 + eiφi sin θi 1

2

2

(3.38) 67

3. NOISE MASTER EQUATIONS

then the inﬁdelity in the density matrix after a time t = nπ is 2

1−F

=

1 2

1 − cos2 φi sin2 θi

1

−

e−nπ

N0 2P0

Ω0

(3.39)

Integrating over all possible starting states, we ﬁnd that the average inﬁdelity of a series of π-rotations from random initial states is

1−F

=1

1

−

e−nπ

N0 2P0

Ω0

3

(3.40)

3.4.2 Frequency and phase noise
Fluctuations in the frequency/phase of the driving ﬁeld or system can often be approximated using one of two simple models. Firstly, one can imagine a broadened carrier with a Lorentzian lineshape. Secondly, one can imagine a pure carrier (represented by a delta function in the frequency domain), superposed on a white noise pedestal.
In the former case, the phase noise power spectral density (PSD) decreases with 1/f 2 for frequencies larger than the Lorentzian linewidth (3 dB frequency). This may be thought of as white noise in the driving ﬁeld’s frequency, which produces a random walk in its phase (often referred to as Wiener-Le´vy phase diffusion).
In general, the phase noise spectrum in any experiment will contain both a white noise region and a random-walk region. If the source is a microwave/RF signal generator then the linewidth of the Lorentzian region of the spectrum will typically be < 1 mHz. In this case, the random-walk ﬂuctuations in phase over any experiment will typically be negligible, so it is reasonable to model the ﬂuctuations as entirely arising from the white phase noise region of the spectrum.
If, on the other hand, the source is a laser3 then the Lorentzian linewidth will
2We use the standard deﬁnition of ﬁdelity whereby F := Tr (ρ(t).ρideal(t)), where ρideal is the density matrix one would obtain in the absence of noise.
3Notice that if the transition in question is a stimulated Raman transition, then the relevant phase is the phase offset between the two beams. In general, this is produced by modulating a single laser source at microwave/RF frequencies. For noise purposes, we thus think of Raman transitions as a special case of a microwave/RF source.
68

3.4. Three faces of white noise

typically not be negligible – although lasers with linewidths of 40 mHz have been constructed [KHG+12], linewidths of lasers used to drive optical qubits are typically ∼ 20 Hz [BKRB08b]. In this case it will often sufﬁce to model the noise as entirely a phase diffusion process, neglecting smaller fast ﬂuctuations.

3.4.3 White phase noise

We now consider Rabi ﬂopping due to a ﬁeld with constant amplitude and white Gaussian phase ﬂuctuations. In the interaction picture, and making the rotating wave approximation, our Hamiltonian is

H

=

1 2

Ωe−i(δt+φ(t))σ+

+

1 2

Ωei(δt+φ(t))σ−

(3.41)

where φ(t) represents the phase ﬂuctuations. This Hamiltonian is a non-linear function of the phase ﬂuctuations. To lin-
earise it, we assume that φ(t) 1 and expand to ﬁrst order in the noise

H

1 2

Ω

e−iδtσ+ + eiδtσ−

+

1 2

i

Ωφ(t)

eiδtσ− − e−iδtσ+

(3.42)

Taking the white noise limit of (C.56), we have

G(τ ) := φ(t + τ )φ(t)

∞

=

N0 Pc

−∞

e−2πif τ

df

=

N0 Pc

δ(τ

)

(3.43)

To illustrate the effect of white phase noise, we consider the simpliﬁed case

of resonant Rabi-ﬂopping (δ = 0) where

H

=

1 2

Ωσx

+

1 2

Ωφ(t)σy

(3.44)

Our white-noise master equation is thus

dρ dt

=

−

1 2

iΩ[σx,

ρ]

−

1 8

Ω2

N0 P0

[σy

,

[σy

,

ρ]]

(3.45) 69

3. NOISE MASTER EQUATIONS

Integrating (3.45), we ﬁnd that if the ion begins in state 0 then its probabil-

ity of being in state

1

after

a

time

t

=

nπ Ω

is

given

by

P1

=

1 2

1

−

e−

1 4

nπ

N0 Ω P0

cos

(nπκ)

−

N0Ω 4P0κ

sin

(nπκ)

(3.46)

where

κ :=

1−

N0Ω 2 4P0

(3.47)

Dropping

terms

of

greater

than

ﬁrst

order

in

N0Ω 4P0

,

we

ﬁnd

that

the

error

after

n

π-pulses is given by

1

−

P1

=

nπ

N0Ω 8P0

(3.48)

More generally, one can show that if the system begins in a pure state then,

to ﬁrst order in the noise, the inﬁdelity in the density matrix after a time t = nπ

is

1−F

=

nπ

N0Ω 8Pc

1 + cos2 φi sin2 θi

(3.49)

Integrating over all possible starting states, we ﬁnd that the average inﬁdelity of

a series of π-rotations from random initial states is

1−F

=

nπ

N0Ω 6Pc

(3.50)

Equations (3.49) and (3.50) were derived previously by Chen et al. [CBWT12]

by considering the rotation of the Bloch vector due to a resonant ﬁeld with phase

noise. We note that the present derivation has the potential advantage that we

work within the general framework of noise master equations. This allows ex-

tension to more complicated systems which are not readily solvable using the

Bloch vector framework, such as non two-level systems.

3.4.4 White frequency noise

We turn now to the case of Rabi ﬂopping due to a ﬁeld with white frequency ﬂuctuations. Our Hamiltonian is

H

=

1 2

Ωe−i(δt+φ(t))σ+

+

1 2

Ωei(δt+φ(t))σ−

(3.51)

70

3.4. Three faces of white noise

where φ(t) is the time-dependent phase resulting from the frequency ﬂuctuations around the mean detuning δ.
To linearise this Hamiltonian with respect to the noise term, we move into a frame that co-rotates with the frequency ﬂuctuations by making the stochastic transformation4

where

ρ → ρ˜ := U †ρU

H

→

H˜

:=

U†HU

=

1 2

Ωσ+e−iδt + H.c.

U = e−iφ(t)σ+σ−

(3.52) (3.53)

We then have

dρ˜ = (dU †)ρU + U †ρ (dU ) + U †(dρ)U = iσ+σ−U †ρU dφ − iU †ρU σ+σ− dφ − i U †[H, ρ]U dt = − i [H˜ , ρ˜] dt + i[σ+σ−, ρ˜] dφ = − i [H˜ , ρ˜] dt + iδf [σ+σ−, ρ˜] dt
where δf (t) := φ˙(t) represents the frequency ﬂuctuations. Next, we take the limit where

(3.54)

δf (t + τ )δf (t) = Γδ(τ )

(3.55)

where Γ is related to a the phase noise PSD by (see C.2.3)

Γ

=

N0(f0) P0

f02

(3.56)

and we have assumed that the phase noise PSD has a 1/f 2 spectrum, so that

N0(f ) = N0(f0)

f0 f

2

(3.57)

for some frequency f0.
4Notice that this transformation adds random phases to the coherences. Since we will be concerned with populations in this section, we ignore these phases; however, they will be signiﬁcant in some cases.

71

3. NOISE MASTER EQUATIONS

Using (3.15) and dropping the tildes, we arrive at the master equation

ρ˙

=

−

1 2

iΩ[e−iδt

σ+

+

eiδtσ−,

ρ]

−

1 2

Γ[σ+σ−

,

[σ+σ−,

ρ]]

(3.58)

Once again, we demonstrate the effect of frequency noise by considering the

resonant case, δ = 0. After applying the driving ﬁeld for a time t to a system

beginning in either qubit state, the inﬁdelity is

1−F

=

1 2

1

−

e−

1 4

Γt

Γ 4Ωe

cos(Ωt)

sin(Ωet)

+

cos(Ωt)

cos(Ωet)

+

Ω Ωe

sin(Ωt)

sin(Ωet)

(3.59)

where the effective Rabi frequency is deﬁned by

Ωe :=

Ω2 −

Γ2 4

Dropping terms of greater than ﬁrst order in Γ,

(3.60)

1−F

1 8

Γt

−

1 16Ω

Γ

sin(2Ωt)

Starting from a random initial state, the inﬁdelity after a time t is

(3.61)

1−F

=

1 2

1

−

1 3

e−

1 2

Γt

+

1 3Ωe

e−

1 4

Γt

[(Ω

−

Ωe) cos (t(Ω

+

Ωe))

−(Ω + Ωe) cos (t(Ω − Ωe))]}

To ﬁrst order in the noise, we ﬁnd

(3.62)

1−F

1 6

tΓ

(3.63)

3.5 The Noisy Quantum Harmonic Oscillator

3.5.1 Frequency ﬂuctuations

We begin by considering the problem of a quantum harmonic oscillator of frequency ω which undergoes white ﬂuctuations, such that ω(t) = ω0 +δω(t). Here, ω0 represents the oscillator’s average frequency and δω represents the ﬂuctuations. The Hamiltonian for the oscillator’s free evolution is

H0 = ω0

a†a

+

1 2

+ δω

a†a

+

1 2

(3.64)

72

3.5. The Noisy Quantum Harmonic Oscillator

In the interaction picture with respect to the oscillator’s mean energy, the oscil-

lator’s dynamics are completely determined by the ﬂuctuating component, so

that

H0,I =

δω

a†a

+

1 2

(3.65)

We assume δω to be white with

δω(t + τ )δω(t) = Γδ(τ )

(3.66)

where δ(τ ) is the Dirac delta function. The resulting master equation is

dρ dt

=

−

1 2

Γ[a†a,

[a†a,

ρ]]

=

1 2

Γ

2a†aρa†a −

a†a 2 ρ − ρ

a†a 2

(3.67)

We note that this equation is often derived by considering a harmonic oscillator

coupled to a quantum heat bath (see e.g. [TTM+00]).

To understand the effect of the dephasing term here, we consider the evolu-

tion of the density matrix in the basis of motional Fock states

ρ(t) = ρnm(t) n m
n,m

(3.68)

where n denotes the oscillator’s nth Fock state. The density matrix evolves

according to

ρ˙ij (t)

=

1 2

Γ

ρnm 2 i|a†a|n m|a†a|j

n,m

− i|(a†a)2|n m|j − i|n m|(a†a)2|j

=

1 2

Γρij

(t)

2ij − i2 − j2

=

−

1 2

Γ(i

−

j

)2ρij

(t)

(3.69)

We see that the populations (ρii) remain constant, however the coherences decay

as

ρij (t)

=

e−

1 2

Γ(i−j)2

t

ρij

(0)

= e−(i−j)2 t/τc ρij (0)

(3.70)

73

3. NOISE MASTER EQUATIONS

where we have deﬁned the motional coherence, τc := 2/Γ, as the time constant for the coherence decay between Fock states separated by a single vibrational quantum.
If the harmonic oscillator interacts with another system so that

H = H0 + H1

(3.71)

then our resulting master equation is

i

dρ dt

=

[H˜ 1 ,

ρ]

−

1 2

i

Γ[a†a, [a†a, ρ]]

(3.72)

where H˜1 represents H1 after transformation to the interaction picture with respect to the harmonic oscillator’s mean free energy. In particular, we note that

motional frequency ﬂuctuations during a Mølmer-Sørensen gate may be de-

scribed using the master equation

i

dρ dt

=

[HMS, ρ]

−

1 2

i

Γ[a†a, [a†a, ρ]]

(3.73)

where HMS is the interaction picture Mølmer-Sørensen Hamiltonian of equation (2.39).

If the noise cannot be accurately described as white then it may be conve-

nient to use the perturbative master equation (3.25).

3.5.2 Frequency ﬂuctuations due to RF noise
Due to restrictions on trap geometry we are only able to produce microwave ﬁelds which couple to the ions’ motion along the trap’s radial directions. The frequencies of these modes are determined by the frequency and amplitude of the trapping RF. In this section, we consider how one can relate the RF ﬁeld’s noise properties to the master equations derived in the previous section. We will assume that the noise is slow compared with the RF frequency so that the pseudopotential approximation can be a-
pplied. This is a good approximation in most systems, since the RF is coupled onto the trap’s electrodes using a high-Q
74

3.5. The Noisy Quantum Harmonic Oscillator

resonant circuit. Quality factors in the range of 50-500 are typical, setting a large

separation of time-scales.

We consider a radial mode with ﬂuctuating secular frequency such that

ω(t) = ω0 + δω(t), where ω0 represents the mean frequency and δω represents the ﬂuctuations. We may relate ω(t) to the trapping RF amplitude and frequency, V (t) = V0 + δV (t) and Ω(t) = Ω0 + δΩ(t) as follows5 [WMI+98]

ω(t)

=

ω0

×

V (t) V0

×

Ω0 Ω(t)

(3.74)

For pure amplitude noise equation (3.74) becomes

δω(t) = ω0δV (t)/V0

(3.75)

Now, for white AM noise with a power spectral density (PSD) of N0AM, we have

δω(t + τ )δω(t)

=

ω02

δV (t+τ ) δV (t)

V0

V0

=

ω02

N0AM Pc

δ(f

)

(3.76)

where Pc is the power in the carrier (see appendix C for a derivation of this

result). Thus, the dephasing factor Γ is related to the RF AM noise spectrum by

Γ

=

ω02

N0AM Pc

Similarly, for frequency noise we have

(3.77)

δω(t)

=

ω0

1 1+δΩ(t)/Ω0

−

1

−ω0δΩ(t)/Ω0

So, for a 1/f 2 phase noise spectrum (white FM noise), given by

N0(f ) = N0(fn)

fn f

2

for some frequency, fn, we have

δω(t + τ )δω(t)

=

ω0 Ω0

2

δΩ(t + τ )δΩ(t)

=

ω02

2πfn Ω0

2

N0(fn) Pc

δ

(f

)

5Notice that here we ignore anti-trapping due to DC potentials.

(3.78) (3.79) (3.80)
75

3. NOISE MASTER EQUATIONS

So

Γ = ω02

2πfn 2 N0(fn)

Ω0

Pc

(3.81)

In most frequency sources, the AM and PM noise PSDs will be similar. How-

ever, comparing (3.81) to (3.76), we see that the contribution from PM noise at a

frequency f is suppressed by a factor of

2πf Ω0

2 compared with AM noise. For a

typical experiment, Ω0/(2π) is in the range 10 MHz - 100 MHz, whilst the system

response time is limited to < 100 kHz. Thus,

f Ω0

2 represents a large suppres-

sion factor. We thus conclude that frequency noise is unlikely to be a problem in

any experiment.

In practice, then, we ﬁnd that

Γ

=

ω02

N0AM Pc

giving a motional coherence time of

τc =

1 2

ω02

N0AM Pc

−1

(3.82) (3.83)

3.5.3 Coupling to a noisy electric ﬁeld

Finally we turn to the case of a quantum harmonic oscillator driven by a ﬂuctuating classical force. Our Hamiltonian is [CN65]

H= ω

a†a

+

1 2

− q0F (t) a + a†

(3.84)

where ω is the oscillator’s frequency, q0 := /2mω is the RMS extent of the oscillator’s ground-state wavefunction and F (t) represents a real, zero-mean ﬂuctuating classical force, characterised by

F (t + τ )F (t) = Γδ(τ )

(3.85)

In the interaction picture with respect to the oscillator’s free energy, the

Hamiltonian is

H = −q0F (t) ae−iωt + a†eiωt

(3.86)

76

3.5. The Noisy Quantum Harmonic Oscillator

The corresponding master equation is

ρ˙

=

−4

1 mω

Γ[ae−iωt

+

a†eiωt, [ae−iωt

+

a†eiωt, ρ]]

=

−4

1 mω

Γ

e−2iωt

a2ρ − 2aρa + ρa2

+ e2iωt

a† 2 ρ − 2a†ρa† + ρ a† 2 +

aa†ρ + a†aρ − 2a†ρa − 2aρa† + ρa†a + ρaa†

(3.87)

Dropping counter-rotating terms we ﬁnd

ρ˙

=

4

1 mω

Γ

2a†ρa + 2aρa† − aa†ρ − a†aρ − ρa†a − ρaa†

(3.88)

We will generally be concerned with heating due to ﬂuctuating electric ﬁelds coupling to the ion’s charge. In this case

F (t) = qE(t)

(3.89)

where E(t) represents a ﬂuctuating spatially uniform ﬁeld. We deﬁne the PSD of ﬁeld ﬂuctuations by6

E(t + τ )E(t)

=

1 2

SEδ(τ

)

in which case, our master equation becomes

(3.90)

ρ˙

=

q2SE 8 mω

2a†ρa + 2aρa† − aa†ρ − a†aρ − ρa†a − ρaa†

(3.91)

It is easy to show (see e.g. [WMI+98]) that if the oscillator begins in a thermal state characterised by a mean occupancy, n¯, then the stochastic force results in heating of the oscillator’s motion such that

n¯˙

=

q2SE 4 mω

(3.92)

In practice, the PSD for electric ﬁeld ﬂuctuations is often non-white. How-

ever, since the ions’ motion is only lightly damped, we expect it to have a narrow

nois6eNaontdicheetnhceefiasctdoerﬁonfed12

in this deﬁnition, using a one-sided

arising from the fact that SE represents base-band spectral power density (i.e. we only integrate over

positive frequencies). This deﬁnition is standard in the literature (see, e.g. [TKK+00])

77

3. NOISE MASTER EQUATIONS lineshape. So long as variations in the noise spectrum are small over the motional linewidth, one may still use the above analysis even with non-white noise. In this case, we replace SE → SE(ω) (where ω is the oscillator’s frequency). If the ions experience micromotion then electric ﬁelds resonant with sidebands of the RF may also couple to the ions’ motion. See [TKK+00] for a discussion of this.
78

4
Apparatus
The work presented in this thesis builds on the previous efforts of ion trappers in the “New Lab” at Oxford. As such, much of the apparatus it relies on has already been documented elsewhere. While we will provide a brief overview of the pre-existing equipment to assist the reader’s understanding of the present work, we will avoid detailed repetition of previous discussions. Further details can be found in [All11] and the references therein.
4.1 The “microwave trap”
The experiments described in this thesis were conducted using the ion trap shown in ﬁgure 4.1. It is a symmetric, 5-wire surface-electrode design featuring integrated microwave circuitry and a 75 µm ion-surface separation, whose design and initial characterisation were discussed in [All11] and [AHB+13].
4.1.1 Design
The trap design was optimised for use with the microwave-driven two-qubit gate scheme described in section 2.7. To create the necessary microwave ﬁeld gradients while maintaining a ﬁeld null at the trap’s centre, we require three microwave electrodes. Since both ions must lie in the ﬁeld null at the same
79

4. APPARATUS

z

x

y

Figure 4.1: The ion trap used during this work. (a) Photograph showing the ion trap mounted on its aluminium holder. (b) Model of the trap, showing integrated microwave elements (CPW stands for coplanar waveguide). (c) Schematic of the trap centre, showing voltages and currents applied to each electrode. The direction of the 146 G static B-ﬁeld is indicated by the arrow B0. Reprinted with permission from [AHB+13]. Copyright 2013, AIP Publishing LLC.

time, these electrodes must run parallel to the trap’s symmetry axis, alongside electrodes carrying the trapping RF and DC control voltages.
We conducted numerical simulations using Ansys HFSS software to study several potential trap geometries. These simulations demonstrated that the largest magnetic ﬁeld gradients are achieved when the trapping RF, DC control voltages and microwaves are combined onto the same three central electrodes. This combination of different signals onto the same electrodes places several constraints on the ﬁnal design: the electrodes must be DC coupled and not shortcircuited at any point; they should act as a -
50 Ω load around the 3.2 GHz qubit frequency; and, since the qubit is a magnetic dipole transition, the ions should
80

4.1. The “microwave trap”
be trapped above a current anti-node if possible to maximise the ﬁeld gradient they experience.
We opted for the simplest design satisfying these constraints, utilising halfwave cavities resonant at 3.2 GHz and matched to 50 Ω using quarter-wave coupling elements. The cavities and matching elements were designed to produce a modest Q of ∼ 5 to provide a reasonably broad-band 50 Ω match. As well as allowing the circuit to be matched to 50 Ω, the cavities provide a current buildup, increasing the magnetic ﬁeld that may be produced by a given input power. The coupling elements are connected to -
in-vacuum SMA connectors using 50 Ω co-planar waveguide.
Outside the three central electrodes are six further DC control electrodes used to create the static trap potential. They are set back from the central electrodes using ground plane to ensure that they do not interfere with the microwave return currents which would lead to impedance discontinuities.
Conﬁnement in the trap’s radial directions is achieved using 72 V of RF at 38.7 MHz to create a 4 MHz potential with a stability parameter q = 0.3 and an estimated trap depth of 59 meV. DC voltages of 10 V provide axial conﬁnement of up to 500 kHz; create a static radial quadrupole used to rotate the trap’s radial normal modes, allowing efﬁcient cooling [ASS+10]; and compensate stray electric ﬁelds to minimise micromotion.
4.1.2 Fabrication
The trap was fabricated in-house by David Allcock and the author by electroplating gold electrodes onto a sapphire substrate. The fabrication process has been described in detail in [All11]. Rather than repeat the process in full detail here, we simply note a few key features.
We chose to use sapphire instead of the fused silica substrates used for previous traps because of its superior thermal conductivity and electrical proper-
81

4. APPARATUS
ties. The trap substrate was bonded to an aluminium holder using a thin layer of Epoxy Technology 353ND epoxy. Aluminium was chosen because its high thermal conductivity allows it to act as an efﬁcient heat-sink, minimising temperature changes in the trap due to dissipated microwave power. DC connections were made by wire-bonding the trap to copper wires1 glued to the trap holder. To ensure that the DC electrodes are connected to RF ground by a lowimpedance connection, each DC connection was also -
wire-bonded to an 820 pF single layer capacitor2 attached to the aluminium trap mount using conductive epoxy3. Microwave connections were made by modifying 2.92 mm connectors4, connected to the trap using launch pins and conductive epoxy.
4.1.3 Characterisation
We characterised the trap’s microwave properties using a vector network analyser (VNA). The data, shown in ﬁgure 4.2, demonstrates that the cavities’ resonance frequencies were ∼ 5 % higher than their design frequency. This is thought to have been due to insufﬁcient reﬁning of the mesh used during simulations and not due to fabrication imperfections. However, because of the cavities’ modest Q, more than 65 % of the input power is nonetheless coupled in at 3.22 GHz. After the measured resonance fre-
quencies were taken into account, simulations were found to agree well with preliminary measurements of the microwave ﬁeld made using a single trapped ion [AHB+13].
By applying microwaves to the three central electrodes with appropriate amplitudes and phases, one may produce a strong magnetic ﬁeld gradient with only a small residual ﬁeld at the trap’s centre, as required for the microwave-
1Kurt Lesker FTAK06010, Kapton dipped copper wire with 0.69 mm outer diameter and 0.63 mm conductor diameter.
2American Technical Ceramics 116UL821M100TT. 3Epoxy Technology H20E silver loaded epoxy. 4Original connectors were Southwest Microwave 1012-16SF with 290-13P launch pins. Connectors were modiﬁed by removing the capture bead and dust cover. The capture bead was replaced with a new bead made from PEEK. See [All11] for details.
82

4.1. The “microwave trap”

Frac ti on of powe r c oupl e d i nto trap

1

Port 1

Port 3

0.8

1

Port 2

0.8

0.6

0.6

0.4

0.4

0.2

0.2

0

0

2.5

3

3.5

4

2.5

3

3.5

4

Fre q ue nc y (GHz )

Fre q ue nc y (GHz )

Figure 4.2: Comparison of VNA data (solid line) and simulations (dashed lines) of the total fraction of power incident on a given microwave port that is coupled into the trap. Figure taken from [All11].

driven gates. Using 1.71 mW, 0.48 mW and 1.83 mW on ports 1,2 and 3 respec-

tively (see ﬁgure 4.1), we were able to produce a quadrupole ﬁeld, characterised

by gradients of

∂Bz ∂y

=

0.304 T/m and

∂By ∂z

=

0.293 T/m.

This agrees well with

simulations, which predict

∂Bz ∂y

=

∂By ∂z

=

0.289 T/m when experimentally mea-

sured values for the power coupled into each port are taken into account. Based

on thermal measurements in similar neutral atom chip traps, we expect to be

able to use input powers exceeding 1 W without damaging the trap [GKW+04].

This would be sufﬁcient to produce gradients approaching 10 T/m, allowing

two-qubit gate speeds of order 1 ms.

Using a modiﬁed Doppler recool method [ASS+10] [WEL+07], we measured the single ion heating rate to be n¯˙ = 1.4(3) quanta/ms at an axial secular frequency of ω = 2π × 500 kHz, corresponding to an electric ﬁeld spectral noise density of ω SE = 1.6(3) × 10−5 V2/m2. This is extremely low for a roomtemperature surface trap and comparable to many cryogenic traps (see, e.g. [HCW+12] for a recent review of heating rates in ion traps). Since the mechanisms leading to anomalous heating are still not prope-
rly understood, it is hard to know why the heating rate is so low. We note, however, that attention was

83

4. APPARATUS
paid to screening and ﬁltering of DC control electronics to minimise excess technical noise.
We characterise and compensate the ion’s micromotion using a single 40Ca+ ion with the technique described in [ASS+10]. Using 38.7 MHz trap RF and a secular frequency of 3 MHz, we ﬁnd that we are able to compensate micromotion in the in-plane (zˆ) direction to 1 V/m, corresponding to a micromotion amplitude of 1 nm. In the out-of-plane (yˆ) direction, however, we are unable to compensate the micromotion to better than 30 V/m, corresponding to a micromotion amplitude of 20 nm. The most likely cause-
 of this uncompensated micromotion is RF pick-up on the trap’s centre electrode [AHJ+11]. This electrode is only connected to RF ground outside the vacuum can, after the microwave block ﬁlter in the Diplexer (see section 4.3.1), presenting a signiﬁcant inductance. The inability to ground this electrode at RF frequencies inside the vacuum chamber is a side-effect of multiplexing the microwaves onto the DC electrode. However, the micromotion amplitude is sufﬁciently small that it is not anticipated -
to cause problems.
4.2 Vacuum system
The trap is housed in a stainless steel UHV system constructed around a 6” spherical octagon5 (see ﬁgure 4.3). The system is pumped using an ion pump6 and a non-evaporable getter7. An ion gauge8 is used to monitor the pressure, which is 1 × 10−11 Torr, even with the calcium oven running at our typical loading current of 5 A (see below).
Optical access for laser beams is provided by six 2.75” viewports9 attached
5Kimball Physics MCF600-SphOct-F2C8, 316L stainless steel with 2x 6” ﬂanges and 8x 2.75” CF ﬂanges.
6Varian VacIon Plus 20 Diode, 27 l/s. 7Saes Getters GP100 Mk5, ST707 alloy, 240 l/s H2 pumping speed. 8Varian UHV-24P with x-ray limit of 5 × 10−12 Torr. 9Torr Scientiﬁc VPZ38QBBAR-LN, 38CF 3 mm thick fused silica viewport using 316LN stainless steel with Kovar weld rings. Broad-band anti-reﬂection coating (BBAR) on both sides, speci-
84

397 Doppler Photoionization
866 Doppler 854 Deshelve 850 Doppler

Pumps, gauge and valves
866 45o 850 π

850 σ+

oven

4.2. Vacuum system

x

y

z

397 σ+ 393 σ+
B0

866 counter
Figure 4.3: Schematic of the vacuum system, showing the static magnetic ﬁeld direction, B0, and laser beams. The red beam path shown dashed enters and exits the vacuum system at 45◦ to the plane of the diagram through the imaging window.
to the sides of the octagon. A further 6” viewport10 attached to the top of the octagon is used for imaging as well as 45◦ IR beam paths (see ﬁgure 4.3).
On the bottom of the octagon is a 6” ﬂange custom made by LewVac, containing a 25-pin D-type feedthrough used for the DC connections, a pair of 2-pin 15 A power feedthroughs intended for ovens11 and tapped holes to mount the trap base.
In-vacuum SMA cables12 are used to connect the trap mount to an SMA
ﬁed reﬂectance per surface is 0.5 % at 397 nm and 9.5 % at 866 nm. 10Torr Scientiﬁc VPZ100-ITO/AR-LN 4 mm thick Kodial glass using 316LN stainless steel with
Kovar weld rings. 1QWOT AR coating on air-side chosen for transmission at 397 nm, thin layer of ITO on vacuum side to prevent charging. We measured the transmission of this window to be 76 % at 397 nm at normal incidence.
11While we only use a single calcium oven in this experiment, we wished to leave room on the feedthrough for a second oven. This could be used, for example, to allow a second ion species to be loaded for sympathetic cooling.
12LewVac ZCC-50-SMA/SMA-105, 105 mm long SMA cables with gold-plated brass plugs,
85

4. APPARATUS feedthrough13. The feedthrough is offset from the main vacuum chamber using a nipple14, allowing the SMA cables to be slightly longer than would otherwise be possible, providing some room for cables to ﬂex, reducing strains.
The calcium oven consists of a ∼10 mm length of metal tube15, containing 5 1 mm x 1 mm x 0.65 mm granules of enriched 43Ca+, composed of 12 % 43Ca+ and 88 % 40Ca+ supplied by Oakridge National Laboratory [All11]. The tube has a single 0.5 mm hole in its centre to allow calcium vapour to effuse. It is crimped at both ends and spot-welded to sections of 2 mm diameter stainless steel rod, which are connected to the pins of the feedthrough using barrel connectors. During loading we resistively heat th-
e oven using 5 A, which requires 1 V including the voltage drop across the cabling between the power supply and the oven. Once an ion has been trapped we turn the oven current down to ∼4.3 A for increased ion lifetime. The oven feedthroughs are positioned so that the ﬂux of neutral calcium atoms makes an angle of 83◦ to the photoionization beams, reducing Doppler shifts on the 423 nm transition.
The oven heating current generates a magnetic ﬁeld at the trap’s centre of 5 mG/A measured using the frequency shift of the 4, +4 ⇔ 3 + 3 stretched transition. 86

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:42.656Z
- **Text Length:** 157074 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
