# PDF Document: (R Srinivas Thesis - 2020 R Srinivas) Laser-free trapped-ion quantum logic with a radiofrequency magnetic field gradient.pdf

**File Path:** (R Srinivas Thesis - 2020 R Srinivas) Laser-free trapped-ion quantum logic with a radiofrequency magnetic field gradient.pdf

**Processed Date:** 2026-02-10T18:13:30.937Z

**File Size:** 14835.47 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 465

**Title:** (R Srinivas Thesis - 2020 R Srinivas) Laser-free trapped-ion quantum logic with a radiofrequency magnetic field gradient.pdf

**Collection:** Ion Trap > Laser free gate

---

## Extracted Text Content

Laser-free trapped-ion quantum logic with a radiofrequency magnetic ﬁeld gradient
by R. Srinivas B.Sc., National University of Singapore, 2013 M.S., University of Colorado, Boulder, 2016
A thesis submitted to the Faculty of the Graduate School of the University of Colorado in partial fulﬁllment of the requirements for the degree of
Doctor of Philosophy Department of Physics
2020

This thesis entitled: Laser-free trapped-ion quantum logic with a radiofrequency magnetic ﬁeld gradient
written by R. Srinivas has been approved for the Department of Physics
Dr. Andrew C. Wilson
Dr. David J. Wineland
Date
The ﬁnal copy of this thesis has been examined by the signatories, and we ﬁnd that both the content and the form meet acceptable presentation standards of scholarly work in the above
mentioned discipline.

iii Srinivas, R. (Ph.D., Physics) Laser-free trapped-ion quantum logic with a radiofrequency magnetic ﬁeld gradient Thesis directed by Dr. Andrew C. Wilson and Dr. David J. Wineland
Coupling the internal (spin) states of trapped ions to their shared motion is essential for applications in metrology, quantum simulation, and quantum information processing. Spin-motion coupling requires a state-dependent force and is typically performed with laser-based interactions. However, laser-based interactions can be limited by photon scattering, which is the leading error in the highest ﬁdelity two-qubit gates demonstrated thus far. Laser-free methods, which are not limited by photon sca-
ttering, have been proposed and demonstrated using either static magnetic ﬁeld gradients, or magnetic ﬁeld gradients close to the qubit frequency at gigahertz frequencies. We develop a new laser-free method of spin-motion coupling that instead uses a radiofrequency magnetic ﬁeld gradient. We extend this technique to novel two-qubit entangling gates that are intrinsically insensitive to qubit frequency errors, achieving a symmetric Bell-state ﬁdelity of 0.999(1), competitive with the highest-ﬁdelit-
y laser-based gates. The insensitivity to qubit frequency errors enables laser-free individual addressing which we employ to create anti-symmetric Bell states with ﬁdelity 0.998(1). These techniques are demonstrated in a surface-electrode trap with integrated microwave and rf circuitry.

To my sister, a constant inspiration.

Dedication

iv

v
Acknowledgements
It is somewhat strange to have only one author on this thesis when so many have contributed to the work.
First, I would like to thank my advisor Dave Wineland. Aside from being an inspiring physicist, he is one of the nicest people I have ever interacted with. I have always appreciated his open door to all the questions I have had over the years, profound or (mostly) not. His presence was greatly missed when he left.
I’ve had the privilege of having not one, but two advisors. Andrew Wilson has been a great source of advice throughout my PhD, for problems physics related and not. He has an incredibly calm approach to dealing with the trickiest problems, and always remained aﬀable regardless of the situation. These are qualities I seek to emulate. He also owes me a cake which I mention here for posterity.
Dietrich “Didi” Leibfried has been the victim of my many physics questions over the years. He has a knack of distilling the most important physics from any problem and has inspired me to be more clear and precise in all that I do. I hope to convince him one day that Beach House is a good band.
Daniel Slichter and David Allcock have also been great mentors, and friends. They were postdocs at the start of my PhD and did much of the heavy lifting initially in setting up and planning the experiment. Everything I know (which isn’t much) about rf and microwaves is from

vi
them. David Allcock is a master ground-loop sniﬀer and great problem solver in the lab. I’ve learnt a lot of debugging skills from him, which is basically to put everything on the scope. Daniel Slichter has a great eye for detail and is a master of electronics. Much of the hardware on our experiment only works due to his careful designs. He has also been a great source of advice for both physics and non-physics related issues and I will miss being able to rely on him. Both David and Daniel have pl-
ied me with alcohol over the years which is hard to separate from Stockholm Syndrome.
Along with Shaun Burd, Daniel, David and I made up the original “µ-crew” on the “magtrap”. Shaun is very much the laser guru on our experiment, and has been a great friend and companion, often there in the late hours when data was taken. He is a great person to bounce ideas oﬀ, and it’s been great having him down in the trenches so to speak.
Hannah Knaack has been a breath of fresh air since she joined the experiment. Her enthusiasm has been a welcome change from the cynicism that Shaun and I had accumulated by then. Her sense of humour will be sorely missed. I wish we had had a longer overlap so she could pronounce words properly; we have worked on iodine but not aluminium.
Tyler Sutherland has been a great person for us to collaborate with; he’s been the source of so many good ideas that we could implement in our setup. Hard to believe he is a professor now, y’all best pay attention to what he gets up to next!
Our experiment was embedded in the larger “Quantum 1” lab. I have fond memories of spending time, both in and out of the lab, with fellow graduate students Susanna Todaro and Katie McCormick, and postdocs Jonas Keller and Robert Jo¨rdens. Justin Niedermeyer, Felix Knollmann, and Laurent “Loz” Stephenson joined the lab more recently, it’s been great working with them for the brief amount of time that it’s been.
It’s been my privilege to be part of the Ion Storage Group, where I’ve had the opportunity to interact not only with great physicists, but people as well. John Bollinger has done a great job of taking over as group leader and has always provided a listening ear. Ting Rei was a great person to bug with random questions and helped me get settled in the group. In no particular order, I’ve had enlightening discussions with Lin Yiheng, John Gaebler, Ryan Bowler, Yong Wan, Daniel Kienzler,

vii
Dan Cole, Stephen Erickson, Hou Panyu, Jenny Wu, Aaron Hankin, Ethan Clements, Kevin Boyce, Cui Kaifeng, Dave Hume, Sam Brewer, Jwo-Sy Chen, May Kim, Jose Valencia, Dave Leibrandt, Jim Bergquist, James Chin-wen Chou, Alejandra Collopy, Julian Schmidt, Christoph Kurz, Shon Cook, Kevin Gilmore, Joe Britton, Elena Jordan, Matt Aﬀolter, Justin Bohnet, Bryan Sawyer, Shlomi Kotler, Dustin Hite, Dave Pappas and Kyle McKay. Apologies to anyone I might have missed out on inadvertently. Amongst these group,-
 Aaron Hankin, Elena Jordan, and Alejandra Collopy had a desk next to mine but subsequently abandoned me for greener pastures with more natural light.
Being at NIST, we beneﬁted greatly from our theory collaborators Scott Glancy, Emanuel Knill, and Alex Kwiatkowski who have helped us navigate the murky waters of ﬁdelity analysis.
Theodore “Ted” Stauﬀer provided the lifeblood of our experiment, liquid helium. He kept up with our increasing helium consumption and odd schedules, without which the experiments described in this thesis would not be possible.
I’ve been somewhat sheltered from administrative tasks throughout my studies. At NIST, I am grateful to Anne Reidy, Kelsey Light, Kelsey Rodriguez, Petrina Potts, Kerry Yannacito, Camille Mandarino, Shannon Kelly amongst others for all the work behind the scenes. At PREP, Tiﬀany Mason, JoAnne Stein, and Lisa Valencia have helped sort out all of my travel and helped to keep food on the table. Jeanne Nijhowne at CU has saved me multiple times from missing deadlines and making sure everything was in -
order.
Outside of work, I’ve been lucky to have a fantastic group of friends to keep me sane. In particular, I’d like to thank Kevin Gilmore and Gargi Datta, who aside from being a constant source of support, put me up for the last few months of my PhD and very generously allowed me to take their cat Koshka. In Boulder, I’ve had the pleasure of knowing (in no particular order) Caroline Whiteman, Nicole Simmons, Dan Hackett, Sven and Kat D¨onges, Judith Olson, Trevor Doner, Abhinav Prem, Robert “Bob” Huef-
tle and Anita Wagner, Marion Boulet, Pete Siegfried, Ng Kia Boon, Zach Ulibarri, Tim Large, Nigel Arruda and Katy Wilkin, Bryan Changala, Joseph Isaac Samaniego, and Stijn DeSmet. Special thanks also to Alejandra Collopy and Andrew Spott for taking me in and letting me play with their wonderful pets Daphne, Apollo, and Artemis.

viii
I’ve had the beneﬁt of many great teachers and mentors throughout my life, Bjørn Hessmo and David DeMille in particular are to blame for setting me down the path of experimental atomic physics.
Leaving Boulder is a little easier with another project to look forward to. For that, I thank David Lucas and Chris Ballance for providing the next step. I’ve also had some great discussions with Tom Harty at Oxford over the years.
My parents and sister have been a never-ending source of support throughout all my life. My nephew and nieces have been a great source of entertainment and help keep things in perspective. In particular, my niece Mallika was born when I started, and is now a fully functional human being who can even play the piano. In the mean time we’ve messed around with some ions...
I would like to thank Hannah Knaack, Laurent Stephenson, Felix Knollman, Dave Wineland, Andrew Wilson, David Allcock, and Daniel Slichter for a close reading of the thesis. Future readers of the thesis should also be indebted to them, this document would have been much worse otherwise!

Contents

Chapter

1 Introduction

1

1.1 Quantum entanglement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2

1.2 Quantum computing with trapped ions . . . . . . . . . . . . . . . . . . . . . . . . . . 3

1.3 Thesis outline . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4

2 Trapped ion quantum logic

5

2.1 Linear rf Paul Traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5

2.2 Trapped ion hyperﬁne qubits . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8

2.3 Trapped ion spin-motion coupling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8

2.3.1 Sideband transitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9

2.3.2 Position-dependent energy shifts . . . . . . . . . . . . . . . . . . . . . . . . . 11

2.3.3 Laser-based spin-motion coupling . . . . . . . . . . . . . . . . . . . . . . . . . 12

2.3.4 Laser-free spin-motion coupling . . . . . . . . . . . . . . . . . . . . . . . . . . 13

2.3.5 Near-qubit-frequency oscillating magnetic-ﬁeld gradient . . . . . . . . . . . . 14

2.4 Entangling gates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15

2.4.1 Geometric phase gates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16

ix

x
2.4.2 Mølmer-Sørensen gates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 2.4.3 σˆzσˆz gates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19 2.5 Phase gate errors and suppression . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20 2.5.1 Motional errors . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20 2.5.2 Reducing motional errors: multi-loop sequences . . . . . . . . . . . . . . . . . 22 2.5.3 Qubit errors . . . . . -
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25 2.5.4 Gate duration errors . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26 2.6 Non-classical states of motion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26

3 Apparatus

28

3.1 Surface electrode trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28

3.2 Vacuum system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32

3.3 Cryogenic operation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32

3.4 High-ﬁeld coils . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36

3.4.1 Compensation coils . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36

3.5 Laser system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37

3.5.1 Beam orientations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38

3.5.2 BD, BDD, and RD beamlines . . . . . . . . . . . . . . . . . . . . . . . . . . . 38

3.5.3 VECSEL system for Raman beams . . . . . . . . . . . . . . . . . . . . . . . . 39

3.5.4 Photoionization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40

3.6 Trapping rf . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41

3.7 Ion loading . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41

3.8 Clock distribution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42

3.9 Microwave generation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44

3.9.1 DDS Synchronization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44

3.9.2 Microwave carrier drive . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44

3.9.3 Microwave sideband drive . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45

xi 3.9.4 Combining microwave drives . . . . . . . . . . . . . . . . . . . . . . . . . . . 46 3.10 RF generation and delivery . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47 3.11 Imaging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48 3.12 Experimental control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48

4 Qubit control

50

4.1 25Mg+ qubit at intermediate magnetic ﬁeld . . . . . . . . . . . . . . . . . . . . . . . 50

4.2 Field-sensitive “stretch” qubit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53

4.2.1 State preparation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53

4.2.2 State readout . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56

4.2.3 Rabi spectroscopy and Rabi ﬂopping . . . . . . . . . . . . . . . . . . . . . . . 57

4.3 Field-insensitive “clock” qubit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 58

4.3.1 Checking clock state . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59

4.3.2 State preparation and readout . . . . . . . . . . . . . . . . . . . . . . . . . . 60

4.3.3 Rabi ﬂopping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61

4.3.4 Qubit coherence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62

4.4 Calibrations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62

4.4.1 Micromotion compensation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64

4.4.2 x shim . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66

4.4.3 Detection beam positions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 67

4.4.4 Single qubit rotations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68

4.5 Laser-based spin-motion coupling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71

4.5.1 Ground state cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71

4.5.2 Heating rate measurements . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72

4.5.3 Photon scattering . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72

4.6 Microwave spin-motion coupling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73

4.6.1 Nulling the microwave magnetic ﬁeld . . . . . . . . . . . . . . . . . . . . . . . 73

xii
4.6.2 Microwave sidebands . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75 4.7 Motional frequency tracking . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76
4.7.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76 4.7.2 Calibration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 77 4.7.3 Seeding . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79 4.7.4 Example operation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79 4.7.5 Laser-induced charging . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82 4.7.6 Future improvements . . .-
 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83 4.8 Qubit frequency tracking . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84 4.9 Ion transport . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 84

5 Spin-motion coupling with a radiofrequency magnetic ﬁeld gradient

88

5.1 Spin-motion coupling with an oscillating magnetic-ﬁeld gradient . . . . . . . . . . . 88

5.2 Residual oscillating magnetic ﬁeld . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93

5.3 Experimental implementation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95

5.4 Spectroscopy with an oscillating magnetic ﬁeld gradient . . . . . . . . . . . . . . . . 96

5.5 Measuring and nulling the oscillating magnetic ﬁeld . . . . . . . . . . . . . . . . . . 98

5.6 Sideband Rabi frequency . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100

5.6.1 ac Zeeman shift from microwave ﬁelds . . . . . . . . . . . . . . . . . . . . . . 100

5.6.2 Characterizing the sideband Rabi frequency . . . . . . . . . . . . . . . . . . . 101

5.7 Sideband cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102

5.8 Pulse shaping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104

5.9 Comparison to static gradient scheme . . . . . . . . . . . . . . . . . . . . . . . . . . 105

5.10 Comparison to near-qubit-frequency oscillating gradient scheme . . . . . . . . . . . . 106

5.11 Oscillating electric ﬁeld . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107

5.11.1 Measuring electric ﬁeld . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107

5.11.2 Eﬀect of electric ﬁeld on ac Zeeman shift . . . . . . . . . . . . . . . . . . . . 108

xiii
5.11.3 Shift on motional frequency . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108 5.11.4 Reducing the eﬀect of the electric ﬁeld . . . . . . . . . . . . . . . . . . . . . . 109 5.12 Higher-order interactions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110 5.12.1 Oscillating gradient interaction . . . . . . . . . . . . . . . . . . . . . . . . . . 110 5.12.2 Sideband interactions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 111 5.12.3 Single side-
band interactions . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112
6 Entangling gates with a radiofrequency oscillating magnetic ﬁeld gradient 114 6.1 Bichromatic interaction picture . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 115 6.1.1 Intrinsic dynamical decoupling . . . . . . . . . . . . . . . . . . . . . . . . . . 120 6.1.2 Pulse shaping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121 6.1.3 Physical implementations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123 6.1.4 σˆzσˆz interaction without microwa-
ve ﬁelds . . . . . . . . . . . . . . . . . . . . 127 6.1.5 Rabi frequency imbalance of microwave ﬁelds . . . . . . . . . . . . . . . . . . 127 6.2 Experimental implementation and calibration of σˆzσˆz gates . . . . . . . . . . . . . . 128 6.2.1 Calibrating microwave Rabi frequencies . . . . . . . . . . . . . . . . . . . . . 129 6.2.2 Calibration of mode orientation . . . . . . . . . . . . . . . . . . . . . . . . . . 131 6.2.3 Measuring ac Zeeman shifts from magnetic ﬁeld at ωg . . . . . . . . . . -
. . . 133 6.2.4 Tuning motional mode frequencies . . . . . . . . . . . . . . . . . . . . . . . . 133 6.2.5 Cooling with a radiofrequency gradient and a bichromatic microwave ﬁeld . . 135 6.2.6 Gate pulse sequence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136 6.2.7 Calibrating π/2 pulse phase . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138 6.2.8 Gate duration and detuning . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139 6.2.9 Stability of calibrations . -
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 140 6.3 Gate data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141 6.4 Results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143 6.4.1 Comparison to other laser-free gates . . . . . . . . . . . . . . . . . . . . . . . 144

xiv
6.4.2 Insensitivity to qubit frequency oﬀsets . . . . . . . . . . . . . . . . . . . . . . 146 6.4.3 Error analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 146 6.4.4 Temperature insensitivity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 148 6.4.5 Gates at Doppler temperature . . . . . . . . . . . . . . . . . . . . . . . . . . 148 6.4.6 Pulse shaping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 150 6.4.7 Qubit decoherence . . . -
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 151 6.4.8 Maximizing argument of J2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152 6.4.9 Gates with fewer loops . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 152 6.4.10 Comparison to laser-based gates . . . . . . . . . . . . . . . . . . . . . . . . . 153 6.5 Mølmer-Sørensen gates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153 6.5.1 Errors from dynamical decoupling ﬁeld . . . . . . . -
. . . . . . . . . . . . . . . 155

7 Single-ion addressing with radiofrequency magnetic ﬁeld gradient

156

7.1 Overview of laser-free single-ion addressing . . . . . . . . . . . . . . . . . . . . . . . 157

7.2 ac Zeeman shift from oscillating magnetic ﬁeld on two ions . . . . . . . . . . . . . . 158

7.3 Generating anti-symmetric Bell states . . . . . . . . . . . . . . . . . . . . . . . . . . 160

7.3.1 Eﬀective single-ion rotation with Ramsey sequence . . . . . . . . . . . . . . . 161

7.3.2 Singlet data and results . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 164

7.4 Rabi spectroscopy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 167

7.4.1 Generating singlet states . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 170

7.4.2 Comparison of Ramsey and Rabi individual addressing sequences . . . . . . . 171

8 Fidelity analysis

173

8.1 Measuring ﬁdelity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 174

8.1.1 Triplet state . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 174

8.1.2 Singlet state . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 176

8.2 Leakage correction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 177

8.2.1 Triplet state ﬁdelity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 178

xv
8.2.2 Singlet state ﬁdelity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 182 8.3 Simulating data . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 184
8.3.1 Mapping populations to counts . . . . . . . . . . . . . . . . . . . . . . . . . . 185 8.3.2 State preparation and readout errors . . . . . . . . . . . . . . . . . . . . . . . 186 8.3.3 Characterizing leakage . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 186 8.3.4 Characterizing other parameters . . . . . . . . . . . . . . . . . . . . . . . . . 189 8.3.5 Asymmetry in ion counts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 189 8.4 Analyzing simulated data . . . . .-
 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 189 8.4.1 Triplet state . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 191 8.4.2 Singlet state . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 193

9 Conclusion

203

9.1 Improvements to entangling gate . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 203

9.2 Randomized benchmarking . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 204

9.3 New trap geometries . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 204

9.4 Mixed-species entanglement . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 204

Bibliography

206

Appendix

A Baker-Campbell-Hausdorﬀ Theorem

216

A.1 Common interaction picture transformations . . . . . . . . . . . . . . . . . . . . . . 217

A.1.1 Qubit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 217

A.1.2 Motion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 218

A.1.3 Modiﬁed BCH . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 219

xvi

B Single qubit rotations

220

B.1 Rotation matrices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 220

B.2 Parity ﬂopping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 221

C Displacements in phase space

224

C.1 Rotating frame transformations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 224

C.1.1 Transformation of displacement operator . . . . . . . . . . . . . . . . . . . . . 225

C.2 Static gradient . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 226

C.3 Oscillating gradient . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 228

C.3.1 Rotating frame at ωg . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 229 C.4 Summary of displacements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 230

C.5 Pulse shaping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 230

D Derivations of Hamiltonians

233

D.1 Magnus Expansion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 233

D.2 Geometric phase gates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 234

D.3 Static gradient with detuned microwaves . . . . . . . . . . . . . . . . . . . . . . . . . 235

D.4 Oscillating gradient with carrier microwaves . . . . . . . . . . . . . . . . . . . . . . . 238

D.5 Comparison of displacements between static and oscillating gradients . . . . . . . . . 239

D.6 Derivation of spin-ﬂip Rabi frequency from electric ﬁeld sideband . . . . . . . . . . . 240

D.6.1 Comparison to classical derivation . . . . . . . . . . . . . . . . . . . . . . . . 243

Tables
Table 4.1 Microwave transition frequencies, ﬁrst and second order magnetic ﬁeld sensitivities for 25Mg+ at 212.8 G. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 53 4.2 π pulse durations for single-qubit rotations for state preparation and readout. . . . . 70 4.3 Heating rates for diﬀerent motional modes. . . . . . . . . . . . . . . . . . . . . . . . 72 6.1 Comparison of laser-free entangling gates. . . . . . . . . . . . . . . . . . . . . . . . . 145 6.2 Estimated error bud-
get. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 147 6.3 Comparison of estimated errors with diﬀerent gate sequences . . . . . . . . . . . . . 153 6.4 Comparison with laser gates. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153
xvii

Figures
Figure 1.1 Schematic of Stern Gerlach experiment. . . . . . . . . . . . . . . . . . . . . . . . . . 2 2.1 Paul trap. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 2.2 Sideband transitions. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 2.3 Geometric phase gates in phase space. . . . . . . . . . . . . . . . . . . . . . . . . . . 18 2.4 Detuning errors and Walsh sequences for the mode of motion used in the gate. . . . 22 2.5 Simulat-
ion of detuning errors with Walsh modulation. . . . . . . . . . . . . . . . . . 23 2.6 Simulations of multi-loop sequences with incoherent motional errors. . . . . . . . . . 24 2.7 Simulations of Bell-state inﬁdelity for a ﬁxed detuning error versus temperature for diﬀerent Walsh sequences. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25 2.8 Simulations of gate duration errors with Walsh modulation. . . . . . . . . . . . . . . 27 3.1 Photograph of the “magtrap.” . . . . . . . -
. . . . . . . . . . . . . . . . . . . . . . . . 29 3.2 False color SEM of “magtrap”. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30 3.3 Nulling magnetic ﬁelds at the ion. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31 3.4 Pillbox and base ﬂange. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33 3.5 Vacuum system on optical table. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34 xviii

xix
3.6 Cryogenic operation. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35 3.7 High-ﬁeld coils. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37 3.8 Beam orientations. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39 3.9 Beamlines for blue doppler (BD), blue doppler detuned (BDD), and red doppler (RD)
laser beams. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40 3.10 Synchronization of devices. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43 3.11 DDS synchronization. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45 3.12 Microwave carrier drive. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46 3.13 Microwave red sideband drive. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46 3.14-
 Combining carrier and sideband microwave drives. . . . . . . . . . . . . . . . . . . . 47 3.15 Generating high power MHz currents. . . . . . . . . . . . . . . . . . . . . . . . . . . 47 3.16 Part of microwave and rf setup. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48 3.17 Image of two ions. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49
4.1 Energy level diagram for 25Mg+ at 212.8 G. . . . . . . . . . . . . . . . . . . . . . . . 51 4.2 Calibration experiment for currents in compensation coils. . . . . . . . . . . . . . . . 55 4.3 Calibration of repump duration. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56 4.4 Histogram of two ion photon counts . . . . . . . . . . . . . . . . . . . . . . . . . . . 57 4.5 Rabi spectroscopy of “stretch” qubit . . . . . . . . . . . . . . . . . . . . . . . . . . . 58 4.6 Rabi ﬂopping on-
 the “stretch” qubit . . . . . . . . . . . . . . . . . . . . . . . . . . . 59 4.7 Plot of the shift of the “clock” qubit frequency relative to the calculated ﬁeld-
independent frequency versus the applied magnetic ﬁeld. . . . . . . . . . . . . . . . . 60 4.8 Calibration of delay duration in readout of “clock” qubit. . . . . . . . . . . . . . . . 61 4.9 Rabi ﬂopping on “clock” qubit. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62 4.10 Ramsey experiment on “clock” qubit. . . . . . . . . . . . . . . . . . . . . . . . . . . 63 4.11 Calibration of in-plane micromotion. . . . . . . . . . . . . . . . . . . . . . . . . . . . 65 4.12 Calibration of ou-
t-of-plane micromotion with microwave gradient. . . . . . . . . . . . 66

xx
4.13 Calibration of compensation voltages along trap axis. . . . . . . . . . . . . . . . . . . 67 4.14 Calibration of the in-plane position of detection beam. . . . . . . . . . . . . . . . . . 68 4.15 Calibration of the out-of-plane position of detection beam. . . . . . . . . . . . . . . . 69 4.16 Calibration of π-pulse times using microwaves for single-qubit rotations. . . . . . . . 70 4.17 Veriﬁcation of ground-state cooling of the out-of-phase axial mode with Raman beams. 71 4.18 Nulling magnet-
ic ﬁeld using multiple electrodes. . . . . . . . . . . . . . . . . . . . . 74 4.19 Blue sideband transition using microwave magnetic ﬁeld gradient. . . . . . . . . . . . 75 4.20 Overview of motional frequency tracking. . . . . . . . . . . . . . . . . . . . . . . . . 78 4.21 Sample calibration scans of microwave sidebands for drift tracking. . . . . . . . . . . 80 4.22 Example motional frequency tracking data. . . . . . . . . . . . . . . . . . . . . . . . 81 4.23 Histogram of diﬀerence between pred-
icted and measured motional frequency. . . . . 82 4.24 Eﬀect of charging from Raman beams on a radial frequency. . . . . . . . . . . . . . . 83 4.25 Example qubit frequency tracking. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85 4.26 Transport of a single ion. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86 4.27 Compensation voltages during ion transport. . . . . . . . . . . . . . . . . . . . . . . 87
5.1 Schematic of spin-dependent displacements with gradients . . . . . . . . . . . . . . . 91 5.2 Surface-electrode trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 96 5.3 Sideband transitions with applied microwaves and an oscillating gradient . . . . . . . 97 5.4 Full microwave spectroscopy with an oscillating gradient . . . . . . . . . . . . . . . . 97 5.5 Example Rabi ﬂopping for J0 transition. . . . . . . . . . . . . . . . . . . . . . . . . . 98 5.6 Spin-ﬂip transiti-
on corresponding to J0 . . . . . . . . . . . . . . . . . . . . . . . . . 99 5.7 Spin-ﬂip transitions corresponding to an oscillating magnetic ﬁeld . . . . . . . . . . . 99 5.8 Example data for determining sideband Rabi frequency . . . . . . . . . . . . . . . . 102 5.9 Sideband characterization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103 5.10 Sideband cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103 5.11 Pulse shaping of microwave ﬁel-
d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104

xxi
5.12 Microwave spectroscopy with and without pulse shaping . . . . . . . . . . . . . . . . 105 5.13 Dependence of ac Zeeman shift on radial frequency . . . . . . . . . . . . . . . . . . . 109
6.1 Relative strengths of diﬀerent interactions in the bichromatic interaction picture . . 119 6.2 Spectrum of applied ﬁelds for two-qubit entangling gate. . . . . . . . . . . . . . . . . 125 6.3 Spectrum of frequency modulation of the spin-dependent force term. . . . . . . . . . 126 6.4 Broadening of Rabi spectroscopy by intrinsic dynamical decoupling. . . . . . . . . . 131 6.5 Calibration of microwave ﬁeld Rabi frequencies. . . . . . . . . . . . . . . . . . . . . . 132 6.6 Qubit coherence with a-
nd without intrinsic dynamical decoupling. . . . . . . . . . . 133 6.7 Radial mode frequency as a function of bias voltage on RF electrodes. . . . . . . . . 134 6.8 Sideband cooling with bichromatic microwave ﬁeld and radiofrequency magnetic ﬁeld
gradient. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 137 6.9 Gate pulse sequence. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138 6.10 Scan of relative phase of the ﬁnal π/2 pulse in gate sequence to the ﬁrst . . . . . . . 139 6.11 Simulated gate detuning scans at diﬀerent gate durations. . . . . . . . . . . . . . . . 140 6.12 Gate detuning scan. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141 6.13 R-
aw population and parity data. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142 6.14 Raw reference data for ﬁdelity analysis. . . . . . . . . . . . . . . . . . . . . . . . . . 143 6.15 Parity scan of triplet state. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144 6.16 Gate insensitivity to qubit frequency shifts. . . . . . . . . . . . . . . . . . . . . . . . 147 6.17 Temperature dependence of gate motional errors. . . . . . . . . . . . . . . . . . . . . 149 6.18 Eﬀe-
ct of gate pulse shaping sequence on qubit. . . . . . . . . . . . . . . . . . . . . . 151 6.19 Parity scan from Mølmer-Sørensen gate with radiofrequency gradient. . . . . . . . . 154
7.1 Ion crystal and electrode conﬁguration for gates and single-ion addressing . . . . . . 158 7.2 Pulse sequence for spin-echo Ramsey sequence. . . . . . . . . . . . . . . . . . . . . . 159 7.3 Ramsey experiment with two ions. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 160 7.4 Calibration of single arm duration in Ramsey sequence for making a singlet state. . . 165

xxii
7.5 QuTiP simulation of the sensitivity of of the singlet ﬁdelity to the Ramsey sequence duration. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 166
7.6 Calibration of phase in Ramsey sequence for making a singlet state. . . . . . . . . . 166 7.7 QuTiP simulation of the sensitivity of singlet ﬁdelity to the Ramsey sequence phase. 167 7.8 Raw data for preparing a singlet state. . . . . . . . . . . . . . . . . . . . . . . . . . . 168 7.9 Parity analysis for singlet and triplet state. . . . . . . . . . . . . . . . . . . . . . . . 168 7.10 Microwave Rabi spectroscopy of two ions with a diﬀerential ac Zeeman shift . . . . . 169 7.11 Duration scan o-
f the single-ion addressing pulse. . . . . . . . . . . . . . . . . . . . . 170 7.12 Calibrating the phase of the single-ion addressing pulse. . . . . . . . . . . . . . . . . 171 7.13 Raw data for generating singlet state with Rabi spectroscopy. . . . . . . . . . . . . . 172
8.1 Comparison of count histograms between experimental and simulated data. . . . . . 187 8.2 Leakage estimation with varying leakage. . . . . . . . . . . . . . . . . . . . . . . . . . 188 8.3 Leakage estimation with more data. . . . . . . . . . . . . . . . . . . . . . . . . . . . 188 8.4 Estimation of other parameters in simulation. . . . . . . . . . . . . . . . . . . . . . . 190 8.5 Eﬀect of count asymmetry on triplet and singlet ﬁdelity. . . . . . . . . . . . . . . . . 191 8.6 Triplet ﬁdelity e-
stimate with varying leakages. . . . . . . . . . . . . . . . . . . . . . . 192 8.7 Analysis of simulated triplet data with varying ﬁdelities. . . . . . . . . . . . . . . . . 193 8.8 Histograms of simulated triplet ﬁdelities. . . . . . . . . . . . . . . . . . . . . . . . . . 194 8.9 Analysis of triplet ﬁdelities with more data. . . . . . . . . . . . . . . . . . . . . . . . 195 8.10 Analysis of the standard deviation of simulated triplet data with more data. . . . . . 195 8.11 Simulated triplet data-
 with detuning errors. . . . . . . . . . . . . . . . . . . . . . . . 196 8.12 Singlet ﬁdelity estimate with varying leakages. . . . . . . . . . . . . . . . . . . . . . 197 8.13 Analysis of simulated singlet data with varying ﬁdelities. . . . . . . . . . . . . . . . . 198 8.14 Histograms of simulated singlet ﬁdelities. . . . . . . . . . . . . . . . . . . . . . . . . 199 8.15 Analysis of simulated singlet ﬁdelities with more data. . . . . . . . . . . . . . . . . . 200

xxiii 8.16 Analysis of standard error of the mean of simulated singlet data analysis with more
data. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 200 8.17 Analysis of simulated singlet data with an error in the phase of the Ramsey sequence.201 8.18 Analysis of simulated singlet data with an error in the duration of the Ramsey sequence.202

You can try the best you can The best you can is good enough
Radiohead

1
Introduction

Magnetic ﬁeld gradients have a long history in atomic physics. The Stern-Gerlach experiment in 1922 using a 1000 T/m gradient1 was one of the earliest demonstrations of quantum behaviour [Gerlach and Stern, 1922]. In this experiment, a beam of silver atoms was sent through an inhomogeneous magnetic ﬁeld, and their resulting trajectories were recorded on a screen upon exiting the magnetic ﬁeld. According to classical theory, the angular momentum of these atoms would have a random orientation with r-
espect to the magnetic ﬁeld gradient and there would be a broad central peak of undeﬂected atoms. Instead, two distinct peaks2 were observed, corresponding to the internal spin states of the unpaired outermost electron. These spin states are quantized, and experienced a spin-dependent force due to the magnetic ﬁeld gradient, resulting in two possible trajectories as shown in Fig. 1.1.
Other examples of magnetic ﬁeld gradients in atomic physics include the continuous SternGerlach eﬀect [Dehmelt, 1986] for precision electron g-factor measurements [Van Dyck et al., 1987], and magnetic trapping of neutral atoms [Pritchard, 1983, Raab et al., 1987] which was an important
1 In our experiment, we only generate gradients of about 100 T/m, about an order of magnitude lower. Progress! 2 Somewhat serendipitously due to the reaction of cigar smoke with silver, producing silver sulphide. See Ref. [Friedrich and Herschbach, 2003] for an excellent overview of this experiment. No cigars were used for this thesis.
1

2 step towards the subsequent observation of Bose-Einstein condensates [Anderson et al., 1995, Davis et al., 1995]. The focus of this thesis is the use of magnetic ﬁeld gradients with trapped ions to demonstrate another aspect of quantum behaviour, entanglement.

∇B

N

|↑

silver atoms

|↓ S

Figure 1.1: Schematic of Stern Gerlach experiment. A beam of silver atoms enters a region with a magnetic ﬁeld gradient. The atoms experience a force that depends on their angular momentum. Only two deﬂected trajectories were observed; the angular momentum or spin of these atoms is quantized and can take one of two values, |↑ or |↓ corresponding to the mJ = ±1/2 states of the silver atom.

1.1 Quantum entanglement
Entangled states of matter exhibit behaviour that cannot be explained classically. An example of an entangled state is

|ψ = √1 (|↓↓ + |↑↑ ), 2

(1.1)

where |↑ and |↓ can correspond, for example, to the two spin states previously discussed. A striking

feature of this state is that it cannot be decomposed into a product state of individual spins; a

measurement on one of the spins will immediately determine the spin-state of the whole system,

3 regardless of how far each spin might be separated from the other. Einstein described this feature as a “spooky action at a distance” [Bell and Bell, 2004], and along with Podolsky and Rosen argued that the quantum description of nature was incomplete [Einstein et al., 1935]. In response, John Stewart Bell pointed out that local realism is inherently incompatible with quantum mechanics, and formulated inequalities that could be veriﬁed experimentally with entangled states [Bell, 1964]. These exp-
eriments, known as Bell tests, were soon carried out using entangled states of photons [Freedman and Clauser, 1972, Aspect et al., 1982] and subsequently loophole free tests were performed [Hensen et al., 2015, Shalm et al., 2015, Giustina et al., 2015].
1.2 Quantum computing with trapped ions
Aside from verifying fundamental aspects of quantum theory, the ability to make entangled states also enables quantum computing. Quantum computers hold the promise of solving many problems intractable to classical computers, with applications ranging from cryptography [Shor, 1994] to nitrogen ﬁxation [Reiher et al., 2017]. Trapped ion systems are one of the leading candidates towards that goal; trapped ions have excellent coherence properties [Bollinger et al., 1991, Fisk et al., 1995, Wang et al.-
, 2017] and have been used to demonstrate some of the highest-ﬁdelity single [Harty et al., 2014] and two-qubit entangling operations [Gaebler et al., 2016, Ballance et al., 2016] across any platform. However, there are many challenges still in scaling these systems towards a practical device [Bruzewicz et al., 2019].
One such challenge is improving the ﬁdelity of fundamental operations such as two-qubit gates that generate entanglemenet. These gates are typically performed with laser-based interactions, which have led to the highest two-qubit gate ﬁdelities of 0.9992(4) and 0.999(1) in Ref. [Gaebler et al., 2016] and Ref. [Ballance et al., 2016] respectively. However, both of these gates were limited by photon scattering, intrinsic to the laser-based interaction used.
Alternative laser-free methods that eliminate photon scattering have been proposed and demonstrated using magnetic ﬁeld gradients to perform these entangling operations. These laser-free methods can employ either static magnetic ﬁeld gradients [Mintert and Wunderlich, 2001, Khromova

4 et al., 2012] or magnetic ﬁeld gradients oscillating close to the qubit frequency at gigahertz frequencies [Wineland et al., 1998, Ospelkaus et al., 2008, Ospelkaus et al., 2011]. In addition to eliminating photon scattering, these methods enable simpler phase and amplitude control at microwave frequencies(∼GHz), as opposed to the ∼ 1000 THz radiation used in laser-based gates. While there are no fundamental limits to the ﬁdelity of laser-free operations, technical challenges have limited the de-
monstrations thus far.
1.3 Thesis outline
In this thesis, we develop a new technique that addresses some of the challenges of previous laser-free methods. Instead of a static or gigahertz magnetic ﬁeld gradient, we use a radiofrequency magnetic ﬁeld gradient to generate a spin-dependent force. We give an overview of the trapped ion physics in Chapter 2, while Chapter 3 describes the apparatus we built, including the surfaceelectrode trap with integrated microwave and rf circuitry used to perform all the experiments in this thesis. Chapter-
 4 outlines the various calibrations we perform, as well as provides a description of the relevant atomic structure of our choice of trapped ion, 25Mg+. We ﬁrst use a radiofrequency gradient to couple the internal state of a single ion to its motion in Chapter 5. Chapter 6 describes how we extend this technique to two-qubit entangling gates, while Chapter 7 explains how we achieve laser-free single-ion addressing as well. Finally, we discuss how we perform the ﬁdelity analysis for the entangled st-
ates we created in the preceding chapters in Chapter 8.

Seasons change and our love went cold Feed the ﬂame ’cause we can’t let go Run away, but we’re running in circles
Post Malone

2

Trapped ion quantum logic

In this chapter, we discuss the basics of trapping ions, how to couple their internal states (here denoted as spin states to indicate they are states of diﬀerent angular momentum) to their motion, and how to perform entangling gates. We also include some numerical simulations of diﬀerent error mechanisms in entangling gates.
2.1 Linear rf Paul Traps
There are several trapping conﬁgurations that can be used for charged particles. We focus on the linear rf Paul trap, which is used in the experiments described in this thesis. We mainly follow Ref. [Wineland et al., 1998] and Ref. [Foot, 2007]. Earnshaw’s theorem states that a charged particle cannot be in stable equilibrium when acted upon by only a static electric ﬁeld. This theorem follows from Maxwell’s equations where ∇ · E = 0 for a region with no charge density, i.e., all the electric ﬁeld-
 lines do not point to one location. One way around this constraint is to use oscillating potentials instead.
We analyze the simple four-rod conﬁguration in Fig. 2.1, where a potential V0 cos ΩT t is applied to two diagonally opposite electrodes a distance R from the trapping location. The applied
5

6 y
x V0 cos ΩT t
R

Figure 2.1: Paul trap. An oscillating potential V0 cos ΩT t is applied to the two electrodes in dark grey, while the other two electrodes are grounded. The ion (red) is trapped at the center, a distance R from each of the electrodes.

potential is oscillating with frequency ΩT and amplitude V0. For the potential Φ in the (x-y) plane, the boundary conditions are

Φ = V0 cos ΩT t, Φ = 0, which are satisﬁed by

x = ±R, y = 0, x = 0, y = ±R,

(2.1)

Φ

=

Φ0

+

V0

cos(ΩT 2

t)

x2 − y2 1 + R2

.

(2.2)

Here, we make the approximation that we have a quadratic dependence close to the axis. The

electric ﬁeld along the x direction is

Ex

=

−

∂Φ ∂x

=

−

V0 R2

cos(ΩT

t)x,

(2.3) (2.4)

7 which gives rise to the equation of motion

M

d2x dt2

=

−

eV0 R2

cos(ΩT t)x,

(2.5)

where we assume the ion has a single elementary charge e and mass M . Here, a classical treatment

is suﬃcient. We make a substitution τ = ΩT t/2, which leads to

d2x dτ 2

=

−

4eV0 Ω2T M R2

cos(2τ )x.

This equation is a form of the Mathieu equation

(2.6)

d2x dτ 2

+

(ax

−

2qx

cos

2τ )x

=

0.

(2.7)

In our simpliﬁed case, ax = 0 and qx = (2eV0)/(Ω2T M R2) 1. In practice, ax will be non-zero if an additional static quadrupole potential is applied to the electrodes (see Ref. [Wineland et al., 1998]).

The solution is

x = x0 cos = x0 cos

q√xτ 2

+

θ0

1 + qx cos 2τ 2

qx√ΩT 22

t

+

θ0

1

+

qx 2

cos

ΩT

t

(2.8) (2.9)

where x0 and θ0 are determined by initial conditions. The term on the left is usually referred to as

the “secular” motion with frequency

ωx =

qx√ΩT 22

=

√ eV0 . 2ΩT M R2

(2.10)

The faster oscillating term at ΩT is referred to as micromotion1 . It has the eﬀect of modulating the

ion’s wavepacket position at ΩT , but with a small enough amplitude that we can ignore it for the
1 Distinct from the “excess” micromotion we compensate for when a stray static electric ﬁeld pushes the ion oﬀ the rf null [Berkeland et al., 1998].

8 key results described below. We get an identical frequency along the y-direction; this degeneracy is broken by a static potential. Additional end caps with static potentials can provide conﬁnement along the z axis.
2.2 Trapped ion hyperﬁne qubits
The hyperﬁne states within a trapped ion are useful as qubits due to their long coherence times; up to tens of seconds [Langer et al., 2005, Harty et al., 2014] or even minutes [Bollinger et al., 1991, Fisk et al., 1995, Wang et al., 2017] have been demonstrated. The qubit can be described by the Hamiltonian

Hˆqubit =

ω0 2

σˆz

,

(2.11)

where ω0 is the qubit frequency. For trapped ion hyperﬁne qubits, ω0/2π is typically in the GHz range. As these qubits are within the S manifold of the ion, electric dipole transitions are forbidden. Instead, single-qubit rotations can be performed using either two-photon stimulated Raman transitions via an intermediate electronic state, or magnetic dipole transitions using an oscillating magnetic ﬁeld at ω0 [Wineland et al., 1998]. Both of these methods have been used for high-ﬁdelity single-qubi-
t rotations using lasers [Ballance et al., 2016, Gaebler et al., 2016] and microwaves [Brown et al., 2011, Harty et al., 2014]. In particular, Ref. [Harty et al., 2014] demonstrated single-qubit-rotation gate errors at the 1 × 10−6 level. Ref. [Bruzewicz et al., 2019] contains an overview of other types of trapped-ion qubits that can be used such as optical frequency qubits.

2.3 Trapped ion spin-motion coupling

Aside from the internal spin states, the ions also have motional states. To a very good approximation [Wineland et al., 1998], the ions’ modes of motion can be described by a quantum harmonic oscillator with Hamiltonian

9

Hˆmotion = ωraˆ†aˆ,

(2.12)

where ωr is the frequency of the motional mode. For a single ion, the position operator rˆ for a single mode is

rˆ = r0(aˆ + aˆ†),

(2.13)

with r0 = /(2mωr) describing the ion’s ground state extent. The creation and annihilation operators are aˆ† and aˆ respectively. For the experiments in this thesis using 25Mg+ and motional frequencies which are typically ωr/2π ≈ 6 MHz, r0 ≈ 6 nm. The motional states are usually described in the Fock state basis |n .
Coupling the ions’ internal states to their motion, or spin-motion coupling, is the workhorse for many applications in trapped ions, from elementary logic gates [Monroe et al., 1995] to quantum logic spectroscopy [Schmidt et al., 2005] that has enabled some of the world’s most precise clocks, for example Ref. [Brewer et al., 2019]. These demonstrations all involved only sideband transitions (described below), using the motion as an information bus between ion spin states [Cirac and Zoller, 1995]. -
Here, we discuss how these sideband transitions are generated from a ﬁeld gradient and how they can be implemented with and without laser beams.

2.3.1 Sideband transitions First, let us look at the Hamiltonian that corresponds to the potential energy of an ion, given
by

Hˆ = Vˆ (r),

where the potential is dependent on position. Expanding to ﬁrst order,

Hˆ ≈ Vˆ (r)

∂V +

r=raverage

∂r

r0(aˆ + aˆ†),
r=raverage

(2.14) (2.15)

10 where raverage is the average position of the ion. We see that if there is a gradient in the potential, we now have terms that couple to the motion. To see sideband transitions, let us analyze a Hamiltonian describing a ﬁeld with frequency ω that can drive spin-ﬂip transitions in an ion.

Hˆ ≈ 2 Ωf cos (ωt)σˆx + 2 Ωg cos (ωt)σˆx(aˆ + aˆ†),

(2.16)

where Ωf corresponds to the coupling of the internal states of the ion to the ﬁeld, while Ωg is the

coupling of the internal states and the ion motion to the gradient following Eq. 2.15. Transforming

to the interaction picture with respect to Hˆ0 =

ω0 2

σˆz

+

ωraˆ†aˆ (the ion qubit and motional energies),

we obtain (following Appendix. A.1)

HˆI ≈ Ωf (σˆ+e−iδt + σˆ−eiδt) + Ωg(σˆ+e−iδt + σˆ−eiδt)(aˆe−iωrt + aˆ†eiωrt),

(2.17)

where δ = ω − ω0. The spin-raising and lowering operators are σˆ+ = |↑ ↓| and σˆ− = |↓ ↑| respectively, where |↑ and |↓ are the internal spin states of the trapped ion. When δ = 0, we implement |↓ ↔ |↑ spin-ﬂip transitions (ignoring fast-rotating terms). Similarly, when δ = ωr, we implement the blue sideband transition with the interaction

Hˆbsb = Ωg(σˆ+aˆ† + σˆ−aˆ).

(2.18)

This interaction drives the |↓ |n ↔ |↑ |n + 1 transition with ∆n = 1. If instead δ = −ωr, we implement the red sideband transition

Hˆrsb = Ωg(σˆ+aˆ + σˆ−aˆ†),

(2.19)

which drives the |↓ |n ↔ |↑ |n − 1 transition with ∆n = −1. These transitions are summarized in Fig. 2.2.

11
n=2 n=1 n=0
h¯ω0

∆n = 1 ∆n = 0 ∆n= -1

h¯ωr
Figure 2.2: Schematic of sideband transitions. The ion has spin states denoted by |↓ and |↑ with energy ω0. The ion also has motional (Fock) states denoted by n with energies ωr. A carrier transition that ﬂips the ion spin but leaves the motional state unchanged (∆n = 0) is denoted by the green arrow. A blue (red) sideband transition corresponds to adding (subtracting) a motional quantum when starting in |↓ , such that ∆n = 1 (∆n = −1).

2.3.2 Position-dependent energy shifts Not all spin-motion coupling results in sideband transitions. If instead we have an interaction
that modulates the qubit frequency at frequency ω, the Hamiltonian becomes

Hˆ ≈ 2 Ωf cos (ωt)σˆz + 2 Ωg cos (ωt)σˆz(aˆ + aˆ†),

(2.20)

which is identical to Eq. 2.16, except that σˆx has been replaced by σˆz. Again, going into the interaction picture with respect to Hˆ0,

HˆI ≈ 2 Ωf cos ωtσˆz + 2 Ωg cos ωtσˆz(aˆe−iωrt + aˆ†eiωrt).

(2.21)

The ﬁrst term corresponds to an oscillation of the qubit frequency at frequency ω. The second term, while arising from the gradient, does not drive sideband transitions, but instead spin-dependent

12 displacements that are the basis for the entangling gates described in Sec. 2.4.3. However, an additional ﬁeld can be used to drive sideband transitions as we discuss in Chapter 5.
2.3.3 Laser-based spin-motion coupling Laser-based spin-motion coupling typically involves driving electric dipole transitions according
to the Hamiltonian

Hˆe = −µd · E.

(2.22)

The ion’s electric dipole operator is µd and E is the electric ﬁeld. In this case, our qubit states will correspond to diﬀerent electronic levels in the atom (for example S and P states). For an electric ﬁeld E = Exxˆ cos(kr − ωt + φ), where k is the wavevector 2π/λ and ω its frequency,

Hˆe = Ωe(σˆ+ + σˆ−) ei(kr−ωt+φ) + e−i(kr−ωt+φ) . The Rabi frequency is Ωe = −µdxEx/4. Expanding to ﬁrst order following Eq. 2.15,

(2.23)

Hˆe ≈ Ωe(σˆ+ + σˆ−) ei(−ωt+φ ) + e−i(−ωt+φ ) + Ωekr0(σˆ+ + σˆ−)(aˆ + aˆ†) ei(−ωt+φ ) + e−i(−ωt+φ ) ,

ﬁeld gradient

(2.24)

where φ = kraverage + φ. The gradient term has a Rabi frequency that is smalelr than the ﬁeld term by a factor η = kr0, where η is the Lamb-Dicke parameter that describes the ratio of the wavelength to the ion’s ground-state wavefunction extent. Transforming into the interaction picture with respect to Hˆ0, we obtain

HˆI = Ωe(σˆ+e−iδt + σˆ−eiδt) + Ωeη(σˆ+e−iδt + σˆ−eiδt)(aˆe−iωrt + aˆ†eiωrt),

ﬁeld gradient

(2.25)

13 where for simplicity we have dropped the complex phase corresponding to eiφ . We now have all the ingredients to drive spin-ﬂip or sideband transitions by appropriate choice of δ as shown in Eq. 2.17. Note that here we assume the interaction of the dipole moment with just one ﬁeld. A similar derivation follows for two-photon transitions except two ﬁelds would have to be considered, and instead of k we have ∆k, the diﬀerence between the k-vectors of the two ﬁelds [Wineland et al., 1998].
2.3.4 Laser-free spin-motion coupling
Instead of using the ion’s electric dipole moment, we can also use its state-dependent magnetic dipole moments coupled to a magnetic ﬁeld gradient. Laser-free spin-motion coupling has been proposed and demonstrated using static magnetic ﬁeld gradients [Mintert and Wunderlich, 2001, Johanning et al., 2009] and oscillating magnetic ﬁeld gradients close to the qubit frequency [Ospelkaus et al., 2008, Ospelkaus et al., 2011]. We ﬁrst look at how these gradients can be generated in the near-ﬁeld relati-
ve to current-carrying electrodes, and give an overview of the diﬀerent types of gradients that can be used.
2.3.4.1 Near-ﬁeld magnetic ﬁeld gradients
As we have seen in this chapter, we need ﬁeld gradients to couple the ions’ spin to their motion. For a plane wave, this gradient is proportional to ∂/∂r exp (ikr) ∝ 1/λ. Thus, for laser-based methods, this gradient can be large as the wavelength is small, ∼ 300 nm. For microwave or rf transitions, this gradient would be negligible as the wavelengths are now ∼ 100 mm, 6 orders of magnitude higher. However, as pointed out in Ref. [Wineland et al., 1998]2, near-ﬁeld gradients can also be used. The i-
nteraction describing an ion’s magnetic moment in a magnetic ﬁeld is
2 One of the reasons we call ref. [Wineland et al., 1998] the “Bible”. Every time you think you have a good idea you check the “Bible” and Dave thought about it 20 years ago.

14

HˆB = −µ · B

≈ −µ · B

− µ · ∂B

rˆ,

r=raverage

∂r r=raverage

(2.26)

where µ is the ion magnetic moment, and B is the magnetic ﬁeld. We have expanded the magnetic

potential following Eq. 2.15. In future chapters, the ﬁrst term in the second line of Eq. 2.26 is what

we will refer to as the ﬁeld component, and the second the gradient.

For simplicity, we consider a magnetic ﬁeld generated by an inﬁnitely long current-carrying

wire and its gradient in the radial direction

B = µ0I , 2πd

∂B ∂d

=

−

µ0I 2πd2

,

(2.27)

where d is the distance from the wire and I can be time-dependent. The gradient is independent of

the wavelength and dependent only on the ion-electrode distance (with the near-ﬁeld approximation

of d λ). Thus, by placing the ion very close to a current-carrying electrode, we can generate a

magnetic ﬁeld gradient that is large enough to couple the ion’s spin to its motion.

2.3.5 Near-qubit-frequency oscillating magnetic-ﬁeld gradient Following Eq. 2.26, for a magnetic ﬁeld that couples the qubit states, B = Bxxˆ cos ωt, the
Hamiltonian is

HˆI = −µ · B ≈ ΩB(σˆ+e−iδt + σˆ−eiδt) + Ωg(σˆ+e−iδt + σˆ−eiδt)(aˆe−iωrt + aˆ†eiωrt),

ﬁeld gradient

(2.28)

where we have transformed into the interaction picture with respect to Hˆ0. The Rabi frequencies are

15

ΩB

=

Bx 2

µ↓↑,

(2.29)

corresponding to spin-ﬂip transitions3 with δ = 0, and µ↓↑ = ↓| µx |↑ . The Rabi frequency of the gradient is

Ωg

=

∂B ∂r
2

r0

µ↓↑,

(2.30)

which drives sideband transitions when δ = ±ωr. The matrix element µ↓↑ describes the coupling of the ion spin states via the magnetic moment and r0 is the ground state extent4 .

2.3.5.1 Static magnetic ﬁeld gradients
Instead of an oscillating magnetic ﬁeld gradient, a static magnetic ﬁeld gradient can also be used. The magnetic ﬁeld gradient can be from permanent magnets [Lake et al., 2015, Weidt et al., 2016, Khromova et al., 2012] or a wire with a dc current [Welzel et al., 2019]. This gradient is typically used in conjunction with additional oscillating ﬁelds close to the qubit frequency to drive sideband transitions as we discuss in Sec. 5.1.

2.3.5.2 Radiofrequency magnetic ﬁeld gradient
Finally, we demonstrate a new laser-free method of spin-motion coupling that uses a radiofrequency magnetic ﬁeld oscillating close to the ion motional frequency, in addition to oscillating ﬁelds close to the qubit frequency; this technique is discussed in more detail in Chapter 5.

2.4 Entangling gates
Trapped ion qubits have weak direct spin-spin interactions due to the Coloumb repulsion that keeps the ion-ion spacing large. However, as pointed out in Ref. [Cirac and Zoller, 1995], the
3 This is equivalent to Ωx in Ref.[Ospelkaus et al., 2008]. 4 This is equivalent to Ωxj,n in Ref.[Ospelkaus et al., 2008].

16 spin-motion coupling techniques discussed in the previous section enable strong spin-spin interactions via the shared motion of the ions. By using tightly focused beams on ions in their ground state of motion, entangled states can be created using only sideband interactions on each ion. Experimental demonstrations soon followed using a single ion entangled with its motional state [Monroe et al., 1995], and later with multiple ions [Schmidt-Kaler et al., 2003]. More recently, this technique has -
been used to entangle atomic and molecular ion qubits [Lin et al., 2020].
However, there are two big disadvantages to the Cirac-Zoller technique. First, it requires cooling to the ground state of motion. Any motional occupation outside of n = 0 would result in a gate error. Second, individual addressing of ions is necessary. Both of these problems are circumvented with geometric phase gates.
2.4.1 Geometric phase gates
Geometric phase gates use spin-dependent forces to drive closed spin-dependent trajectories in phase space. As the ions return to their original position in phase space, their motion is disentangled at the end of the sequence independent of the initial state of motion, eliminating the need for ground state cooling. Broadly, there are two classes of phase gates. First, are the σˆxσˆx gates proposed in Ref. [Mølmer and Sørensen, 1999, Sørensen and Mølmer, 1999], which was ﬁrst demonstrated in Ref. [-
Sackett et al., 2000]. Second, are the σˆzσˆz gates which were proposed in Ref. [Milburn et al., 2000] and inspired the demonstration of a high ﬁdelity phase gate5 in Ref. [Leibfried et al., 2003]. While the two interactions broadly generate the same dynamics [Lee et al., 2005], the origins of spin-dependent forces are physically distinct. We discuss their speciﬁc implementations after a general overview of phase gates. The gate interaction for two ions is

Hˆg = Ωg (σˆi1 ± σˆi2) aˆei∆t + aˆ†e−i∆t ,

(2.31)

where Ωg is the Rabi frequency corresponding to the gradient producing the spin-dependent force
and ∆ is the gate detuning. The spin operators are (σˆi1 + σˆi2) for the center-of-mass mode and
5 Also known as the Didi gate.

17 (σˆi1 − σˆi2) for the out-of-phase mode. The spin operator σˆi can have i = x, y, z while 1 and 2 specify the ion index. Following Appendix D.2, the time evolution operator for this interaction is

Uˆg = Dˆ (α(t))e−iφ(t), where Dˆ is the displacement operator. The displacement is

(2.32)

and the phase is

α(t)

=

Ωg ∆

(σˆi1

±

σˆi2) (e−i∆t

−

1),

(2.33)

φ(t)

=

Ω2g ∆2

(σˆi1

±

σˆi2)2

(∆t

−

sin (∆t)).

(2.34)

This propagator describes a spin-dependent trajectory in phase space, with a spin-dependent

geometric phase. To generate spin-spin entanglement while disentangling the spin states from

the motion, we require that the displacement α = 0 at the end of the gate sequence. We fulﬁll

this requirement by choosing the gate duration and detuning such that ∆ = 2Kπ/tg, where K is an integer corresponding to the number of loops in the phase-space trajectory. The phase space

dynamics are shown in Fig. 2.3.

To generate the maximally entangled state, we need φ(t) = π/2. As the eigenvalues of (σˆi1 ± σˆi2) are 2 and 0, solving for ∆ and tg we obtain

√

∆ = ±4 KΩg,

√

2π K

tg =

. 4Ωg

(2.35) (2.36)

Note that the positive and negative values of ∆ correspond to diﬀerent maximally entangled states.

For the speciﬁc case of the spin operators in Eq. 2.31 being (σˆz1 − σˆz2), the acquired phases for

each of the diﬀerent spin states (∆ positive) are

18

a)

p

|↑↓

b)

p

|↑↑

x
|↓↑

x
|↓↓

Figure 2.3: Geometric phase gates in phase space for (σˆz1 − σˆz2) in Eq. 2.31. The center of the ions’ motional wavefunction is indicated by the blue dot. a) Two of the four two-ion spin states undergo a circular trajectory in phase space. Returning to the origin, these spin states acquire a geometric phase proportional to the area enclosed in phase space and are disentangled from the ion motion. b) The other two spin states do not experience a spin-dependent force and stay at the origin. Setting-
 the acquired geometric phase to π/2 enables the generation of entangled states. This example shows the initial position of the ion at the origin in phase space but, in principle the ion could be initialized anywhere.

|↓↓ → |↓↓ ,

|↑↑ → |↑↑ , |↓↑ → −i |↓↑ ,

(2.37)

|↑↓ → −i |↑↓ .

This spin-dependent phase, along with global π/2 x pulses before and after the phase-space displacement, produces a maximally entangled state,

|↓↓ → √1 (|↓↓ + i |↑↑ ) . 2

(2.38)

2.4.2 Mølmer-Sørensen gates

Having gone through the general theory, we now discuss speciﬁc implementations of the geometric phase gates. For the Mølmer-Sørensen gate, the interaction is generated by simultaneous

19 application of red and blue sideband interactions that are symmetrically detuned from the qubit resonance. In other words, if the blue sideband is detuned by ∆, the red sideband is detuned by −∆. The Hamiltonian in the interaction picture is

Hˆms = Hˆbsb + Hˆrsb = Ωg (σˆ+1 + σˆ+2)aˆ†e−i∆t + (σˆ−1 + σˆ−2)aˆei∆t + (σˆ+1 + σˆ+2)aˆei∆t + (σˆ−1 + σˆ−2)aˆ†e−i∆t = Ωg (σˆx1 ± σˆx2) aˆei∆t + aˆ†e−i∆t .

BSB RSB

(2.39)

While our spin operators correspond to σˆx here, adjusting the phase of the BSB and RSB interactions can result in σˆφσˆφ interactions, where σˆφ = cos φσˆx + sin φσˆy. This technique has resulted in both high-ﬁdelity laser-based gates [Gaebler et al., 2016] and laser-free gates [Harty et al., 2016, Weidt et al., 2016, Zarantonello et al., 2019].

2.4.3 σˆzσˆz gates The σˆzσˆz interaction is

Hˆg = Ωg (σˆz1 ± σˆz2) aˆei∆t + aˆ†e−i∆t .

(2.40)

The physical basis of this force is the gradient of an oscillating energy shift at the ion, for laser-based gates from the gradient of a spin-dependent ac Stark shift [Leibfried et al., 2003]. This technique has been used to demonstrate high-ﬁdelity gates such as Ref. [Ballance et al., 2016, Sch¨afer et al., 2018]. There has also been a laser-free demonstration of this interaction using static magnetic ﬁeld gradients [Khromova et al., 2012]. This interaction is the basis for the entangling gates i-
n Chapter 6.
One disadvantage of the σˆzσˆz interaction is that states that have a spin-dependent oscillating ac Stark shift are typically static magnetic ﬁeld-sensitive as well, in contrast with the MS gates that work with any qubit states. However, there has been a recent demonstration that used an auxiliary

20 state to generate this interaction on a ﬁeld-insensitive qubit [Baldwin et al., 2020a]. In contrast to MS gates however, only two laser beams are required with a diﬀerence frequency close to the motion at MHz frequencies. For MS gates using Raman transitions, two pairs of laser beams are required, one for each sideband, each with a diﬀerence frequency close to the qubit at GHz frequencies. The use of ac Stark shifts also enables the generation of a spin-dependent force on qubits of a diﬀerent s-
pecies using the same pair of beams [Ballance et al., 2015, Hughes et al., 2020].
2.5 Phase gate errors and suppression
With an understanding of how phase gates work, we discuss the diﬀerent error mechanisms in phase gates, with a focus on the motional errors as those cause the dominant errors in the gates we later demonstrate.
2.5.1 Motional errors While the ions’ spin is ideally disentangled from the motion at the end of the gate, the spins
are entangled with the motion during their trajectories. Thus, any error due to the motion would aﬀect the gate as well. We can broadly divide these errors into incoherent and coherent errors. Incoherent errors include heating or motional dephasing, while coherent errors include ﬁxed detuning and gate duration errors. Following Ref. [Sepiol, 2016], we model incoherent errors using a Lindblad master equation

ρ˙ = − i [Hˆ , ρ] + 1 2

2CˆkρCˆk† − (ρCˆk†Cˆk + Cˆk†Cˆkρ) ,

k

(2.41)

where Cˆk = √γnAˆk is the collapse operator. The rate of decoherence is γk and Aˆk is the operator that

governs the decoherence mechanism and is typically either Pauli spin, or creation and annihilation

operators. Here, we have used the notation in QuTiP [Johansson et al., 2013], which we use later to model these errors. For our simulations, Hˆ will correspond to the gate interaction.

21 2.5.1.1 Heating
Heating refers to incoherent heating of the ion motion from for example, coupling to a thermal bath. This heating causes an increase in the ions’ motional state occupation as a function of time [Brownnutt et al., 2015], characterized by n¯˙ , where n¯ is the average motional occupancy. Following Ref. [Harty et al., 2014], the master equation for this process is,

ρ˙ = − i [Hˆ , ρ] + n¯˙ 2aˆ†ρaˆ − (ρaˆaˆ† + aˆaˆ†ρ) + 2aˆρaˆ† − (ρaˆ†aˆ + aˆ†aˆρ), 2

√

√

which corresponds to Eq. 2.41 with two collapse operators: n¯˙ aˆ† and n¯˙ aˆ.

(2.42)

2.5.1.2 Motional dephasing

Fast frequency ﬂuctuations in the ion motion [Harty, 2013] can cause dephasing, but not

necessarily heating. For the axial mode, this could result from ﬂuctuations in the dc voltages that

provide the axial conﬁnement. Amplitude ﬂuctuations in the trapping rf voltage will cause the

same eﬀect for the radial modes. This dephasing can be measured by a Ramsey experiment on the

motional states.

For a Fock state superposition

√1 2

(|n

+ |n + ∆n ), the Ramsey contrast decays

with time constant (∆n)2τc. Using this deﬁnition, the master equation is

ρ˙ = − i [Hˆ , ρ] + 1 2aˆ†aˆρaˆ†aˆ − (ρ(aˆ†aˆ)2 + (aˆ†aˆ)2ρ) , τc
which corresponds to Eq. 2.41 with a single collapse operator (2/τc)aˆ†aˆ in Eq. 2.41.

(2.43)

2.5.1.3 Detuning errors
Detuning errors refer to miscalibrations or changes of the motional frequency which result in an error in the gate detuning ∆. This error will result in incomplete loop closure and residual spin-motion entanglement that will reduce the gate ﬁdelity. We require all of the motional wave functions of the diﬀerent spin states to overlap at the end of the gate sequence; if there is no overlap

22

there is no interference between the spin states that gives rise to entanglement. An example of a detuning error is shown in Fig. 2.4a).

a) p

b)

p

x

x

Figure 2.4: Detuning errors and Walsh sequences for the mode of motion used in the gate. a) A detuning error results in an incomplete loop closure for one or more of the spin states. b) This error can be mitigated by a two-loop sequence, ﬂipping the sign of the spin-dependent force in between the loops. This results in a trajectory that ends closer to the starting point. This sequence corresponds to Walsh 1 modulation.
2.5.2 Reducing motional errors: multi-loop sequences
An eﬀective method of reducing motional errors is to employ multi-loop sequences6 . As pointed out in Ref. [Hayes et al., 2012], changing the sign of the spin-dependent force during a gate sequence, or Walsh modulation, reduces the eﬀect of detuning errors as shown in Fig. 2.4b). A Walsh 1 sequence corresponds to one phase change, Walsh 3 to two, and Walsh 7 to ﬁve. Walsh 1, 3, and 7 sequences also have a minimum of 2, 4, and 8 loops respectively.
We perform a simulation in QuTiP to investigate the eﬀect of Walsh modulation on static detuning errors as shown in Fig. 2.5. For static errors, using Walsh 1 modulation reduces the inﬁdelity by about an order of magnitude. Higher Walsh sequences reduce this error further but less signiﬁcantly. Note that higher Walsh sequences might help for time-varying detuning errors.
Multi-loop sequences can also reduce the eﬀects of incoherent motional errors. We plot a simulation with both heating and dephasing in Fig. 2.6. We model both errors following Eq. 2.42 and
6 Unlike humans on a roller coaster, ions have less motion sickness the more loops they do.

23
    

%HOO VWDWH LQILGHOLW\

    

1R :DOVK :DOVK  

:DOVK  

:DOVK  

  1XPEH U RI ORRSV  K  

 

Figure 2.5: Simulation of detuning errors with Walsh modulation. Using a gate Rabi frequency of Ωg/2π = 1.25 kHz, we simulate a detuning error of 200 Hz. We plot the Bell-state ﬁdelity versus the number of loops for diﬀerent Walsh sequences: no Walsh (1-8 loops), Walsh 1 (2, 4, 6, 8 loops), Walsh 3 (4, 8 loops), Walsh 7 (8 loops). Using Walsh 1 modulation as opposed to no Walsh modulation reduces the error by an order of magnitude. Using higher Walsh modulation and increasing the number of loops r-
educes the error further, but less signiﬁcantly. For all simulations, we use Ωg/2π = 1.25 kHz and adjust the gate duration and detuning according to the number of loops (see equations 2.35 and 2.36).

Eq. 2.43 respectively. We ﬁnd that increasing the number of loops reduces the inﬁdelity, independent √
of the Walsh modulation. The reduction in this error also roughly follows 1/ K scaling. Purely geometrically, these errors would be larger the larger the ions’ excursion in phase space. The phase
√ space trajectory has a radius that is proportional to 1/ K; the more loops there are, the smaller each loop has to be to acquire the same geometric phase.
2.5.2.1 Temperature dependence of motional errors
While geometric phase gates are nominally insensitive to the initial temperature of the mode, higher temperatures make the gate more sensitive to other errors. We only expand Eq. 2.25 to ﬁrst order with respect to the Lamb-Dicke parameter η. Higher order terms in the gradient expansion (for example aˆ2) will add error terms that scale more quickly with n¯.
We plot the temperature dependence of the gate ﬁdelity versus the average motional occupation

%HOO VWDWH LQILGHOLW\

D  n = 20 V
  î     
    

24
1/ K
1R :DOVK :DOVK   :DOVK   :DOVK  

  î     
E  1/ c = 10 V
    
  î     

1/ K
1R :DOVK :DOVK   :DOVK   :DOVK  

%HOO VWDWH LQILGHOLW\

  î     

  î     

  1XPEH U RI ORRSV  K  

 

Figure 2.6: Simulations of multi-loop sequences for two types of incoherent motional errors: a) heating rate n¯˙ = 20/s, b) motional dephasing with 1/τc = 10/s. For each error, we plot the Bell-state ﬁdelity versus the number of loops for diﬀerent Walsh sequences: no Walsh (1-8 loops), Walsh 1 (2, 4, 6, 8 loops), Walsh 3 (4, 8 loops), Walsh 7 (8 loops). For all simulations, we use Ωg/2π = 1.25 kHz and adjust the gate duration and detuning according to the number of loops (see equations 2.35 and 2.-
36). For both errors, we ﬁnd that increasing the number of loops reduces the√error. We ﬁnd no eﬀect from the Walsh modulation. We additional plot a dashed line showing 1/ K scaling for each of the inﬁdelities.

number in Fig. 2.7. For the gate sequence without Walsh modulation, the error increases by almost an order of magnitude going from an n¯ of 0 to 4. Walsh modulation signiﬁcantly reduces this temperature dependence. A more detailed analysis of the sensitivity of diﬀerent errors to temperature for a Walsh 7 sequence is shown in Fig. 6.4.4. Note that this temperature dependence is more problematic for laser-based interactions.

25

    

1R :DOVK

:DOVK  

:DOVK  

    

:DOVK  

%HOO VWDWH LQILGHOLW\

    

 

 

n 

 

 

Figure 2.7: Simulations of Bell-state inﬁdelity for a ﬁxed detuning error versus temperature for diﬀerent Walsh sequences. The detuning error is 200 Hz, with Ωg/2π = 1.25 kHz for all gates. Walsh modulation signiﬁcantly reduces the temperature dependence of this error.

2.5.3 Qubit errors
Aside from motional errors, there are also qubit errors that will aﬀect the gate ﬁdelity.
2.5.3.1 Photon scattering
The highest-ﬁdelity entangling gates are the laser-based gates reported in Ref. [Gaebler et al., 2016] and Ref. [Ballance et al., 2016], with ﬁdelities of 0.9992(4) and 0.999(1) respectively. They had photon scattering errors of 5.7 × 10−4 and 4 × 10−4 respectively. This photon scattering comprises both Raman and Rayleigh scattering. Raman scattering is inelastic, destroying the coherence of the qubit, as opposed to Rayleigh scattering which is elastic [Ozeri et al., 2007]. Raman scattering can be-
 reduced by increasing the detuning of the Raman transition further, but at the cost of increasing laser power to maintain the same gate Rabi frequency. Rayleigh scattering on the other hand approaches an asymptotic value.

26 2.5.3.2 Qubit decoherence
Lastly, the qubit can also suﬀer from decoherence during the gate sequence. This eﬀect is particularly problematic for ﬁeld-sensitive qubits. Any changes in the magnetic ﬁeld can cause shifts in the energy levels of the qubit during the gate. Fortunately for σˆzσˆz gates, qubit frequency shifts commute with the gate and can be echoed out.
For MS gates on the other hand, this error does not commute. Even though they can be performed on ﬁeld sensitive qubits, ﬂuctuations in ac Zeeman or ac Stark shifts can still cause qubit decoherence. This decoherence can be mitigated by an additional dynamical decoupling [Harty et al., 2016]. We discuss dynamical decoupling in more detail in Sec. 6.1.1.
2.5.4 Gate duration errors
Gate duration errors are closely related to detuning errors; they can both cause incomplete closure of the phase-space loop, but gate duration errors can further cause the wrong geometric phase to be acquired. These errors are also mitigated by the Walsh modulation discussed in Sec. 2.5.2. For a ﬁxed gate duration error of 5% we plot the gate inﬁdelity versus detuning in Fig. 2.8. Higher-order Walsh sequences reduce the sensitivity to gate duration errors.
2.6 Non-classical states of motion
While the focus of this chapter has been on spin-motion coupling to generate entanglement between ion spin states via the motion, the ion motional states are also active areas of research in themselves. Non-classical states of motion such as squeezed states [Meekhof et al., 1996, Kienzler et al., 2015, Burd et al., 2019], and Fock-state superpositions [Leibfried et al., 2002, McCormick et al., 2019] have been generated. The motional states of trapped ions can also be used as a qubit in the context-
 of continuous variable quantum computation [Flu¨hmann et al., 2019].

27

    

%HOO VWDWH LQILGHOLW\

    

    

1R :DOVK :DOVK  

:DOVK  

:DOVK  

                                       

  g1

Figure 2.8: Simulations of gate duration errors with Walsh modulation. We have a ﬁxed 5% gate duration error for the diﬀerent gate sequences, and plot the ﬁdelity versus detuning (∆ + δ∆), normalized to the one loop detuning ∆g1.

I don’t need no money, fortune, or fame (ooh hey hey hey) I’ve got all the riches baby one man can claim (oh yes I do) I guess you’d say What can make me feel this way? My girl (my girl, my girl) Talkin’ ’bout my girl (my girl)
The Temptations

3
Apparatus

An experimental thesis would not exist without an apparatus. In this chapter, we discuss key features that enable the experiments described subsequently. The trap fabrication and vacuum assembly was done by Daniel Slichter and David Allcock, while Robert J¨ordens set up many of the beamlines used in the experiment. Shaun Burd developed a new laser system using vertical external-cavity surface-emitting lasers (VECSELs) that initially were used only for sideband cooling, but were later used for Dopp-
ler cooling and detection as well [Burd et al., 2016]. Though this apparatus was redesigned and rebuilt from the ground up in a new lab, it is very much the second generation of the apparatus used in Ref. [Ospelkaus et al., 2008] and Ref. [Warring et al., 2013a], which contain many technical details relevant to this setup.
3.1 Surface electrode trap
At the heart of this apparatus is the surface electrode trap for near-ﬁeld magnetic-ﬁeld gradients, or the “magtrap” as shown in Fig. 3.1. This trap was fabricated at the NIST clean room by Daniel Slichter and David Allcock. The trap has a c-cut sapphire substrate and the electrodes
28

29 are electroplated gold, with a thickness of 8 µm. A thermal epoxy1 is used to attach it a pedestal underneath. Ribbon bonds are used to connect the trap to an alumina printed circuit board.
Figure 3.1: Photograph of the “magtrap”, the surface electrode trap2used in this thesis. The trap is electroplated gold on a sapphire substrate. A thermal epoxy is used to attach it a pedestal underneath. Ribbon bonds connect it to an alumina printed circuit board.
To more clearly see the electrode structure, we display a false color image from a scanning electron microscope (SEM) in Fig. 3.2. Conceptually, it is identical to the trap described in Sec. 2.1, but with all the electrodes in a single plane. The red electrodes are used for the oscillating rf voltage needed to generate a trapping potential. They are connected to the rf resonator on one end and open on the other. We can also apply a dc bias voltage to these electrodes to tilt the ion modes in the r-
adial (y-z) plane. We have 9 pairs of dc electrodes along the trap axis (x) that provide the axial conﬁnement. These electrodes are also used to apply potentials (see Sec. 4.4.1) to compensate for stray electric ﬁelds. Additionally, changing the voltages applied to these electrodes enables transport of the ions along the trap axis. As discussed in Sec. 4.9, most of the experiments in this
1 EPO-TEK H21D. 2 Even Admiral Ackbar would agree.

30 thesis were conducted where the ions are loaded as shown in Fig. 3.2.
Figure 3.2: False color SEM image of the “magtrap”. We apply rf voltages to the red electrodes to generate the trapping potential. Nine pairs of dc electrodes provide conﬁnement along the trap axis (x). The MHz and GHz currents used to the generate the magnetic ﬁelds and magnetic ﬁeld gradients are applied to the electrodes in blue, here labeled 1, 2, and 3.
The most important electrodes for the physics in this thesis are shown in blue. We apply large MHz and GHz currents (∼ 1 A rms) to these electrodes in order to generate magnetic ﬁelds and magnetic ﬁeld gradients. These electrodes are shorted to ground at one end of the chip. By design, the magnetic ﬁeld gradients are only along the radial (y-z) plane. We have three electrodes for these currents, as did Ref. [Ospelkaus et al., 2011] and Ref. [Allcock et al., 2013], to null the magnetic ﬁeld at the -
ion. By adjusting the phase and amplitudes of the currents applied to all three electrodes, we are able to null the magnetic ﬁeld at the ion while keeping a magnetic ﬁeld gradient (see Fig. 3.3). At least for the spin-motion coupling scheme described in Sec. 2.3.5, it is advantageous to null the magnetic ﬁeld while keeping the gradient. Nulling the magnetic ﬁeld eliminates oﬀ-resonant transitions as well as ﬂuctuations in the ac Zeeman shift, improving gate ﬁdelities. Alternative trap structures c-
an be designed to null the magnetic ﬁeld using only one

31

electrode such as in Ref. [Hahn et al., 2019]. However, one disadvantage is that it can be challenging to align the rf null to the null of the magnetic ﬁeld. In contrast, having three electrodes ensures that there are always enough degrees of freedom to null the magnetic ﬁeld at the ion.

B3 ion

B2

B1

I3

I2

I1

Figure 3.3: Schematic of nulling the magnetic ﬁeld at the ion. If the current in electrode 2
is π out of phase, and the relative amplitudes adjusted, the magnetic ﬁeld at the ion is nulled (B1 + B2 + B3 = 0). Crucially, the sum of the gradients is not zero (∇B1 + ∇B2 + ∇B3 = 0). The direction of the magnetic ﬁeld gradient from each electrode is along their respective dotted lines.

One consideration for our electrode geometry is the choice of qubit. The magnetic ﬁelds that we generate will mostly be linearly polarized. Thus, using a qubit whose transition is only driven by σ+ polarization results in only using at most half of the linear polarization generated (one must also factor in the direction of the quantization axis). Our apparatus was originally designed to use a “clock” qubit whose transition is driven by a π-polarized magnetic ﬁeld. This qubit is discussed in more d-
etail in Sec. 4.3. Of course, the experiments we ended up performing took a slight detour from this plan3 .
3 Electrodes 1-3 were grounded intentionally to give us the ﬂexibility to pursue diﬀerent types of gradients.

32
3.2 Vacuum system
Figure 3.4 shows the gold-plated copper pillbox encasing the trap. The trap as well as the alumina PCB are mounted in this pillbox, which is attached to the base ﬂange of our vacuum system. Our MHz and GHz currents are applied to electrodes 1, 2, and 3 in Fig. 3.2 via the SMA ports and cables shown in Fig. 3.4b) and c) respectively. A copper braid provides the thermal link to the ﬂow cryostat. There are additional resistors and capacitors not indicated on the PCB that provide in-vacuum ﬁltering.
We show the assembled vacuum system on the optical table in Fig. 3.5. The vacuum system itself is obscured by other components, such as as the four argon ion guns attached to the top ﬂange. The guns were intended for in situ ion milling, which has been shown to reduce trap heating rates by two orders of magnitude at room temperature [Hite et al., 2012, Daniilidis et al., 2014]. However, more recent results from Ref. [Sedlacek et al., 2018] suggest that ion milling might in fact make heating rates -
worse at cryogenic temperatures. Thus, as we had a fortunately low heating rate to begin with, and ion milling carries the risk of creating electrical shorts between electrodes, we have eschewed ion milling thus far; we have these argon ion guns but have not dared to use them4 . The other components shown in Fig. 3.5 include the ﬂow cryostat and helium recovery line, the high ﬁeld coils, the camera, and imaging system which we discuss in subsequent sections.
3.3 Cryogenic operation
Cryogenic operation oﬀers a number of advantages for ion trapping. First, heating rates are typically orders of magnitudes lower [Deslauriers et al., 2006, Chiaverini and Sage, 2014, Brownnutt et al., 2015, Sedlacek et al., 2018]. Second, condensation of residual gasses (cryopumping) in our vacuum system signiﬁcantly reduces the pressure, increasing the ion lifetime. At room temperature, we have a pressure of ≈ 2×10−10 Torr and a single ion lifetime of about 3 min. Operating at closer to 15 K, the-
 pressure drops to below 5×10−11 Torr, and our single ion life time is more than 8 hours.
4 Not Chekhov’s argon ion guns. One of the guns is also shorted.

33
Figure 3.4: a) Pillbox disassembled. On the left we have the lid that has the imaging port with a gold mesh. On the right, we have the trap pedestal and alumina PCB. The alumina PCB has resistors and capacitors for ﬁltering not shown. The high power MHz and GHz currents come in via SMA ports that are connected to electrodes 1, 2, and 3 in Fig. 3.2. We have an on-chip platinum resistance temperature detector (RTD) to measure the temperature close to the trap. The atomic ﬂux from the magnesium oven -
comes through the neutral atom port. b) and c) show the assembled pillbox attached to the base ﬂange. b) Our connections to the dc electrodes come in via micro-d connectors. Also shown are the rf feedthrough and the copper braid that provides the thermal link to the ﬂow cryostat. c) We indicate the stainless steel SMA cables used for MHz and GHz currents applied to electrodes 1, 2, and 3.

34
Figure 3.5: Vacuum system on optical table. The trap, within its vacuum system, is at the center of this image. Its top ﬂange has four argon ion guns for in situ ion milling. We have large high-ﬁeld coils for generating our quantization magnetic ﬁeld, and smaller compensation coils to compensate for stray ﬁelds as well as ﬁne adjustment of the magnetic ﬁeld. An additional compensation coil underneath the vacuum system is not shown. We point out the imaging system, camera, and photomultiplier tube -
(PMT) used to collect and count photons from the ions. Lastly, we also show the ﬂow cryostat and helium recovery line used for cryogenic operation.
Our two ion lifetime becomes ∼ 1 hour, making the entangling gate experiments in later chapters feasible.
The key components of our cryogenic operation are shown in Fig. 3.6 including the Janis ST-400 ﬂow cryostat. When running experiments, we use liquid helium to cool the trap to ≈ 15 K. Helium ﬂows to the trap via a transfer line from a connected dewar (≈ 80 L) at a pressure of about 10 psi. This pressure is reached naturally by inserting the transfer line into the dewar. A secondary valve ensures that excess pressure is released into the recovery line rather than into the lab. At this temperature, -
we consume ≈ 1 L per hour. When not running experiments, we usually warm up to about 50 K to reduce the helium consumption to ≈ 0.3 L per hour. We usually consume about

35
Figure 3.6: Cryogenic operation. a) The ﬂow cryostat makes thermal contact with the copper pillbox via a thermal link. b) Helium dewar connected to the trap. Liquid helium ﬂows via a transfer line to the trap. Warm helium gas goes into the yellow recovery line into the larger NIST helium recovery system. We have a ﬂow regulator for the helium gas ﬂow, controlling the temperature of the trap. A temperature controller enables monitoring of the temperature both at the ﬂow cryostat and at the trap. 10-
0-150 L per week5 . Approximately 90% of this helium is recovered at NIST6 . Cycling between
5 Liquid helium costs more than a graduate student. 6 In some sense, we have a very large closed-cycle system.

36
50 K and 15 K, our trap position is maintained within a few µm and our laser beams typically need minimal realignment.
When not running experiments, for example during a global pandemic7 , we switch over to liquid nitrogen instead. We maintain our trap temperature at about 80 K, consuming approximately 3 L of liquid nitrogen per day. We use liquid nitrogen to minimize costs. We refrain from warming up to room temperature to avoid thermal expansions or contractions of various in-vacuum components.
3.4 High-ﬁeld coils
For our experiments, we require a fairly large static magnetic ﬁeld of 212.8 G (see Sec. 4.3) at the trap. We use foil-wound copper coils from Stangenes Industries as shown in Fig. 3.7. We supply about ≈ 60 A, with a voltage drop of about 15 V across the two coils connected in series. At this current, these coils require water cooling to stay close to room temperature. We have an interlock that shuts oﬀ our power supply if either the water ﬂow is turned oﬀ, or if a temperature sensor on the coils -
reaches 50◦C. We measured the magnetic ﬁeld along the axis of the coils and it is fairly uniform over a region of about 2 mm. Based on Ref. [Merkel et al., 2019], we actively stabilize the current in our trap and also feedforward on the 60 Hz noise in the power supply8 . With this magnetic ﬁeld stabilization, we are able to extend our coherence time (T2∗) on our ﬁeld sensitive “stretch” qubit from ∼ 100 µs to ∼ ms.
3.4.1 Compensation coils
Aside from the high ﬁeld coils, we have smaller compensation coils as shown in Fig. 3.5. These coils help to compensate for stray ﬁelds at the ion, as well as oﬀer ﬁne adjustment the magnetic ﬁeld and thus the beam polarization at the ion (see Sec. 4.2.1.1). These coils have axes orthogonal to the high-ﬁeld coils. We typically apply a current of 0-2 A to each of the coils, generating magnetic ﬁelds of 0-2 G at the ion. At these smaller currents, we have neither current stabilization nor water
7 Our trap has stayed cold thanks to heroic eﬀorts from ACW. 8 Mainly done by SCB and DTCA.

37
Figure 3.7: Coils to generate magnetic ﬁeld of 212.8 G. These coils were designed by Stangenes Industries. We indicate where the water cooling and power supply are connected. The height of 20.8 cm refers to the coil diameter.
cooling.
3.5 Laser system
As much as we would like a completely laser-free experiment, we need lasers for photoionization, state preparation (including repumping), and detection. Additionally, we have a pair of Raman beams for sideband cooling. Here, we discuss key details of our laser system. For the rest of this section, we use the following nomenclature9 for the diﬀerent laser beams:
(1) Blue doppler (BD) - The laser beam we use for detection close to resonance. We also use it for the ﬁnal stage of Doppler cooling (≈ 10 MHz red detuned).
(2) Blue doppler detuned (BDD) - Laser beam that is ≈ 370 MHz red detuned from resonance for initialization of the state and preliminary cooling.
9 Largely historical.

38 (3) Red doppler (RD) - Laser beam used for repumping (see Fig. 4.1). This beam is ≈ 1302 MHz
red detuned from resonance (but resonant with a diﬀerent transition, see Fig. 4.1).
(4) Raman beams - The two beams that we use to drive stimulated Raman transitions with σ+ and π beam polarizations respectively. The two-photon transitions are driven through a virtual state ∼ 50 GHz blue detuned from the P3/2 transition.
On resonance refers to the 2S1/2 ↔2 P3/2 transition in Fig. 4.1.
3.5.1 Beam orientations
Figure. 3.8 shows the orientation of the beams relative to the trap axis (see Fig. 3.2) and the quantization axis set by the static magnetic ﬁeld B0. Our Doppler cooling beams are tilted 22.5◦ from the y-axis, ensuring cooling of all three motional modes for a single ion. We have two Raman beams, whose net momentum ∆k also has components along all three modes.
3.5.2 BD, BDD, and RD beamlines
We ultimately need UV light at 280 nm for our transitions. However, to generate the BD, BDD, and RD laser beams, we ﬁrst start in the infrared. For the experiments described in this thesis, the infrared source was ﬁrst a ﬁber-laser system10 that was later replaced by a VECSEL system (see Sec. 3.5.3). From the 1118 nm (≈ 700 mW) light, we double to the green (≈ 559 nm) using a periodically poled lithium niobate (PPLN) waveguide11 for second harmonic generation (SHG). At this point, we have approxim-
ately 200 mW of power in the green, ≈ 5 mW of which we use to lock the laser12 to an iodine absorption line as an absolute frequency reference. The rest of the green light is sent to a cavity with a BBO (β-BaB2O2) crystal for SHG of UV light. This cavity was designed by Christian Ospelkaus based on Ref. [Wilson et al., 2011]. We obtain ≈ 5 mW of UV light out of the doubler.
10 Menlo Systems orange one. 11 NTT electronics. 12 Mainly done by SCB.

39

BD, BDD, RD

σ+

B0

y

PI

22.5°

x

Raman π
Raman σ+
Figure 3.8: Beam orientations. Our BD, BDD, and RD beams (see main text) are all σ+ polarized, reaching the trap from the same ﬁber. They are aligned 22.5◦ to the y-axis in Fig. 3.2, enabling cooling of all three modes of a single ion. We have additional Raman beams with π and σ+ polarizations that we use for resolved sideband cooling. The static magnetic ﬁeld B0 from the high-ﬁeld coils (Sec. 3.4) deﬁnes the quantization axis. We have a photoionization (PI) beam that we use for ionizing neutral m-
agnesium.

This UV light is now used to generate the BD, BDD, and RD beams as shown in Fig. 3.9. This ﬁgure is a simpliﬁed schematic that does not include all the optical components required. All three laser beams are coupled into the same ﬁber that takes the light closer to the trap. We use a solarization-resistant, hydrogen-cured ﬁber as described in Ref. [Colombe et al., 2014]. We typically get ∼ 10 µW of UV at the trap. We stabilize the intensity of the BD laser beam for detection by picking oﬀ part of t-
he light and using a digital servo [Leibrandt and Heidecker, 2015]. The beam waist (1/e2 intensity) for these lasers is ≈ 14 µm.
3.5.3 VECSEL system for Raman beams
We use a vertical external-cavity surface-emitting laser (VECSEL) system for our Raman beams as described in Ref. [Burd et al., 2016]. This system was designed and built by Shaun Burd.

205 MHz

RD

BD2

232 MHz

BDD

261 MHz

BD

40 trap

UV Doubler

BDD +892 +522 MHz MHz

BD1

330 MHz

-410 MHz
RD

Figure 3.9: Beamlines for blue doppler (BD), blue doppler detuned (BDD), and red doppler (RD)
laser beams. The BD beam goes does double pass through the BD1 acousto optic modulator (AOM) (2 × 330 MHz shift) and then a single pass at the BD2 (232 MHz shift) AOM. The BDD only goes through a double pass at the BDD AOM (2 × 261 MHz shift). Lastly, the RD goes through one double pass (−2 × 205 MHz shift). Both the RD and BDD beams only go through to the ﬁber when the BD2 AOM is oﬀ. The shifts for each of the three beams are shown in the inset. All three beams
go through the same ﬁber to the trap.

Starting at 1118 nm, we follow a similar process to double the light twice to obtain UV light at ≈ 280 nm. However, each of the laser beams shown in Fig. 3.8 used for the π and σ+ is coupled to separate ﬁbers. Each beam has amplitude stabilization as well.
3.5.4 Photoionization To generate magnesium ions, we employ a two-photon photoionization process. As described
in Ref. [Madsen et al., 2000], two 285 nm photons can ionize neutral magnesium, the ﬁrst photon driving the 3s2 1S0 ↔ 3s3p 1P1 transition, and the second exciting an electron out to the continuum.

41 This light is generated using a Raman-ﬁber-ampliﬁer-based system13 that ﬁrst generates 1140 nm light that is doubled to 570 nm. The green light is then sent to a cavity containing a BBO crystal14 that generates UV light at 285 nm. The UV light is sent to the trap via a ﬁber, and we obtain ≈ 1 mW of UV light at the trap, which is more than suﬃcient for loading. We do not lock the laser frequency, instead monitoring it on a wavemeter, and adjusting it accordingly. In the future, we plan on switch-
ing to a VECSEL-based system and using a home-built cavity doubler15 .
3.6 Trapping rf
We need an oscillating potential to trap ions. Our voltage source is an AnaPico APSIN3000 waveform generator set to 68.579 MHz. We stabilize its amplitude following Ref. [Harty, 2013] before it is ampliﬁed and sent to a resonator. We use a λ/2 resonator made from a Heliax cable designed by Daniel Slichter. This resonator has a quality factor of about 90, enabling amplitudes of ≈ 30 V at the trap rf electrodes shown in Fig. 3.2. We can also couple in DC voltages to tilt the ion radial modes, or app-
ly oscillating potentials to perform parametric modulation of the radial motional frequencies [Burd et al., 2019].
3.7 Ion loading
To load ions, we resistively heat a hollow stainless steel tube ﬁlled with neutral magnesium. The tube has an aperture drilled in the sidewall for a ﬂux of neutral magnesium atoms to escape. We run about 5.3 A through this wire for one minute, generating a ﬂux of neutral magnesium atoms. We then pulse the PI on while keeping the oven running, periodically checking the counts on the PMT to see if we have loaded. We continue this until the desired number of ions is loaded. We have observed that runn-
ing the oven continuously for too long a period inhibits loading. We suspect that when the oven is too warm, residual gases in the vacuum that had been cryopumped start to evaporate, increasing the pressure at the trap.
13 MPB VRFA-SF series. 14 LAS GmbH WaveTrain 15 Someday.

42 Loading multiple ions can occasionally be challenging. We have found that reducing the axial conﬁnement and/or the radial conﬁnement can help. We reduce the axial conﬁnement by multiplying all the voltages on the dc electrodes by a factor (less than 1, excluding shim voltages to compensate for stray ﬁelds). We reduce the radial conﬁnement by changing the frequency of the trap rf voltage 16 , thus moving it oﬀ resonance and reducing the voltage amplitude at the trap. We typically move it by ∼ 10-
0 kHz until ions have been loaded and then change it back to its original frequency.
3.8 Clock distribution
Many devices in our apparatus require a reference signal. We have:
(1) APSIN3000 - Trap rf generator. (2) PDQ17 - Arbitrary wave form generator based on Ref. [Bowler et al., 2013]. We use these
PDQs to:
(a) Generate rf currents. (b) Generate baseband voltages for IQ modulators for pulse shaping microwaves.
(3) Microwave DDS’ - AD9914 direct digital synthesizers (DDS’) used for microwave sources.
(4) Crate DDS’ - DDS’ in experimental control “crate” that control acousto-optic modulator (AOM) frequencies, for example.
(5) Field-programmable gate array (FPGA) that controls our experimental sequences.
It would be desirable if the relative phase between all of these reference signals were stable, as drifts in that relative phase would change the relative phase of the ﬁelds at the ions and have physical eﬀects.
16 This technique can also be used to get rid of excess ions, a procedure we call the Knaack maneuver. 17 Pretty darn quick.

43 We stabilize these phases using a 10 MHz signal either from a hydrogen maser18 or a rubidium frequency standard19 . A schematic for our phase stabilization is shown in Fig. 3.10. We send the 10 MHz signal to our APSIN3000 that generates our trap rf , as well as to a 100 MHz crystal oscillator20 . This 100 MHz signal is now sent to the various PDQs, as well as a 24× frequency multiplier21 . The resulting 2.4 GHz signal is now used to clock both the crate and microwave DDS’. The internal clock of-
 one of the crate DDS’ at 100 MHz is used as a reference to our experimental control FPGA. This DDS is also used to synchronize the internal clocks of the microwave DDS’(see Sec. 3.9.1).
10 MHz

APSIN3000 68.579 MHz
microwave PDQs
rf PDQ 5 MHz

crystal oscillator 100 MHz
x24
2.4 GHz

100 MHz ÷ 24 FPGA

÷ 384 6.25 MHz

crate DDS’

microwave DDS’

Figure 3.10: Synchronization of devices. Most of the essential devices in the apparatus are synchronised to a 10 MHz signal, see main text for details.

18 One of the many beneﬁts of working at NIST. 19 SRS FS 725. 20 Wenzel 100 MHz-SC. 21 Wenzel IFM-5R-100-24-13-13.

44
3.9 Microwave generation
We now describe the generation of the various microwave currents for our experiment. We ﬁrst explain how the diﬀerent DDS’ are synchronized and then each of the chains22 for the carrier and sideband drives.
3.9.1 DDS Synchronization
Our microwave sources are AD9914 DDS’. Clocked at 2.4 GHz, we use them to generate microwave tones from 1.3-2.2 GHz for our various transitions. We also use it to generate MHz tones for driving the ion motion or squeezing as shown in Ref. [Burd et al., 2019]. As we use more than one DDS, it is important to sychronize their internal clocks (at 100 MHz) to both each other and the experiment FPGA so all phases are completely deterministic. At every power cycle, the internal clocks of these DDS’s are -
randomly in one of 16 diﬀerent phases. We synchronize these DDS’ following the AN-1254 application note, where we use the “SYNC OUT” signal at 6.25 MHz23 from the crate DDS that also references the FPGA (see Fig. 3.10). Figure 3.11 shows the internal clocks of these DDS’s before and after the synchronization.
3.9.2 Microwave carrier drive
The microwave components used to generate ﬁelds that drive spin-ﬂip transitions are shown in Fig. 3.12. We need to generate tones at 1.3-2.2 GHz; this frequency range is within the second Nyquist zone (using the ﬁrst Nyquist image) that has a steep power dependence [Analog Devices, 2009]. To minimize the power variation across frequencies, we use a frequency doubler to operate within the ﬁrst Nyquist zone (using fundamental frequency). Figure 3.12 shows the chain for electrode 1. We have additiona-
l switches not shown that let us apply the tone from this chain to electrodes 2 and 3 as well. For electrode 2, we have an additional ampliﬁer that lets us drive faster spin-ﬂip transitions. In contrast, we have an attenuator for electrode 3. This conﬁguration enables
22 Much of this was put together by DTCA and DHS. 23 2.4 GHz/384

45
Figure 3.11: DDS synchronization. We synchronize the four DDS’ we use for generating our microwave tones to a crate DDS. We monitor their internal clocks at 100 MHz to check their synchronization. a) Their internal clocks are not synchronized and are at one of 16 random phases after a power cycle. b) Their internal clocks are now synchronized. a wide range of amplitudes to be used within an experimental sequence. We also have additional chains with IQ modulators for electrode 1 that enable pulse s-
haping of carrier ﬁelds used in later chapters. 3.9.3 Microwave sideband drive
The chain for the microwave sideband drive for a single electrode is shown in Fig. 3.13. In contrast to the carrier drive, we only need to generate frequencies within a narrow range of about 10 MHz either side of the “clock” qubit frequency at 1.69 GHz. Thus, we omit the frequency doubler and just operate within the second Nyquist zone (using the ﬁrst image). We have an IQ modulator

Carrier DDS

x2
ZRL-1150LN FK-3000+

46 ZASWA- UTE 2-50DR+ CT-2348-0
UTE CT-2006-CT

Figure 3.12: Microwave chain for carrier drive, generating microwave ﬁelds that drive spin ﬂips at the ion. The unlabeled components are bandpass ﬁlters that remove the Nyquist image as well as harmonics from the ampliﬁer and doubler.

that enables pulse shaping, and for adjusting the phase and amplitude of the microwave tone for each electrode. This functionality is essential for the nulling described in Sec. 3.1. The sideband transitions require much more power to drive than the spin ﬂip transitions, hence the higher power ampliﬁer used in this chain.

PDQ I

ZASWA2-50DR+

UTE CT-2348-0

RSB

ZRL-2400-LN+ Nova

Q

Digital Nova

DDS

0165IAS

PDQ

attenuator 0165IAS

ZHL-30W -252-S+

Figure 3.13: Microwave chain for red sideband drive for a single electrode, generating microwave gradients that drive sideband transitions. The unlabeled components are bandpass ﬁlters that remove the Nyquist image as well as a narrowband cavity ﬁlter after the higher power ZHL-30W-252-S+ ampliﬁer. We have a power splitter (ZC4PD-18-S+) for the chain for the two other electrodes (not shown).

3.9.4 Combining microwave drives
We combine the carrier and sideband drives for each electrode as shown in Fig. 3.14. We use a combination of 3 dB hybrids and directional couplers to combine the diﬀerent microwave currents for a single electrode.

Carrier

47
monitor

RSB

BSB 3 dB

10 dB

interlock

20 dB

diplexer

rf drive

trap electrode

Figure 3.14: Combining carrier and sideband microwave drives. We ﬁrst use a 3 dB hybrid, then 10 and 20 dB directional couplers. The unused port of the 3 dB hybrid is used is used to monitor the output power and interlock the power ampliﬁers if the average power delivered to the trap becomes too large.

ZASWA2-50DR+

microwave drive

trap electrode

rf

SLP-5+

PDQ

ZHL-5W-1+ SLP-5+ ZABP 16+ coupler diplexer

Figure 3.15: Chain to generate high power MHz currents for a single electrode. The coupler enables monitoring of the signals on the scope. The diplexer provides a resonant step up of about 3 in the current for a 5 MHz tone.

3.10 RF generation and delivery
The components required to generate higher power MHz currents for one electrode are shown in Fig. 3.15. We modify one of the PDQs described in Ref. [Bowler et al., 2013] to generate the MHz tones for the radiofrequency gradient. We use a PDQ instead of a DDS as the PDQ very easily allows incorporation of pulse shaping (we need the IQ modulators to do this for the microwave sideband drive). Right before the trap, we use a resonant diplexer24 that allows a factor of 3 enhancement in the current at t-
he trap electrodes for a 5 MHz tone. Before the diplexer, we have
24 Designed by DHS.

48 about 2 W at 5 MHz for each electrode25 .
Figure 3.16: Part of microwave and rf setup. a) We show the microwave PDQs, IQ modulators, switches, ampliﬁers, and ﬁlters from Fig. 3.13. b) The rf PDQ and high power ampliﬁers26in Fig. 3.15.
3.11 Imaging
We use custom designed “Slichter optics” for our imaging system, and are able to obtain a magniﬁcation of ≈ 44. We are able to collect about 0.5% of the photons on our PMT27 resulting in about 50 counts per 200 µs detection for a single ion. An image of two ions on the camera28 is shown in Fig. 3.17.
3.12 Experimental control
If the surface electrode trap is the heart, the FPGA in our control crate29 is very much the brain. We use a Xilinx Kintex-7 KC705 evaluation board, that is connected to 40 40 digital I/O
25 HMK has led eﬀorts to increase this to about 5 W. 26 Blossom, Bubbles, and Buttercup for electrodes 1, 2, and 3 respectively. Originally to be named after Daenerys’ dragons but recent events forced a reevaluation. 27 Hamamatsu R7600P-203. 34% quantum eﬃciency at 280 nm. 28 Andor DV887ECS-UVB. 29 Hardware designed by DHS.

49
Figure 3.17: Image of two ions on the camera. The ions are approximately 3 µm apart.
(DIO) channels and 12 DDS’ via its FPGA mezzanine card (FMC) connectors. We use the DIO channels to trigger rf switches that control our AOMs, and thus the lasers at the ions. We also use rf switches to control which microwave/rf current is pulsed on which electrode. The DIO channels are also used as inputs, such as to record PMT counts. The DDS’ in the crate are used primarily to generate the frequencies for the AOMs in our laser beamlines. In addition, we have 4 serial peripheral interface (SPI)-
 channels, which we use for example to program our microwave DDS’.
To program the desired pulse sequences to the FPGA, we use the Advanced Real-Time Infrastructure for Quantum physics (ARTIQ) control system [Bourdeauducq et al., 2016]. Our experiments are Python ﬁles that are compiled and sent to the core device, a soft-core CPU on the FPGA, which executes the code. Note that only a subset of Python can be executed on the core device. One big advantage of using Python, aside from its accessibility and readability, is its modularity that easily allows many experim-
ents to share the same code. An important example of this modularity is the drift tracking code used in Sec. 4.7.
For timing, the FPGA has an internal clock at 125 MHz that we bypass using the 100 MHz clock from one of the DDS’ (see Fig. 3.10). The timing resolution is 1/8th the clock period which in our case is 1.25 ns. It is important to be aware of this subdivision, as when using other devices such as the rf PDQs or DDS’ whose timing resolution is 10 ns (100 MHz clock), we need to ensure that experiments start at the same subdivision for every repetition of the experiment so other devices have the same pha-
se every time.

Every breath you take and every move you make, Every bond you break, every step you take, I’ll be watching you
The Police

4
Qubit control

In this chapter we introduce the main protagonist1 of this thesis, 25Mg+. We describe its energy levels at our operating static magnetic ﬁeld of 212.8 G that produces a ﬁeld-independent “clock” qubit, its microwave transitions, and our qubit preparation and readout sequences. We discuss the various calibrations that we perform, including compensating for stray ﬁelds that push the ion oﬀ the rf null. We also describe how we couple the ion to its motion, using microwave gradients as well as laser-ba-
sed interactions, for ground-state cooling. We explain how we track both the ions’ motional and qubit frequencies within an experimental sequence; the motional frequency tracking especially is an essential component of all remaining experiments described in this thesis. Finally, we have a brief discussion of our even briefer foray into ion transport.
4.1 25Mg+ qubit at intermediate magnetic ﬁeld
The hyperﬁne Hamiltonian for 25Mg+ in its electronic ground state is
1 Sometimes antagonist.
50

B0 = 212.8 G

51

|mJ = 3/2, mI = 3/2 |4, 4

2P3/2

F =2
|2, −2
“dark”
|2, −1 |2, 0 |↑ |2, 1

repump |2, 2

cooling/detection 280 nm, σ+

“clock” 1.686 GHz

“st1r.3e2tc6hG”Hz

2S1/2

|3, 1

|3, 0 |↓

|3, −1

|3, −2

F =3

|3, −3

|3, 3 |3, 2 “bright”

Figure 4.1: Energy level diagram for 25Mg+ at a static magnetic ﬁeld of 212.8 G. We use two
sets of qubit states in this thesis. First, the ﬁeld-sensitive “stretch” qubit transition corresponds
to |F = 3, mF = 3 ↔ |2, 2 . Second the ﬁeld-insensitive “clock” qubit transition is |3, 1 ↔ |2, 1 . The grey dotted lines indicate additional transitions for shelving to the |2, −1 state for readout. We have an additional repump laser that couples the |2, 2 state to the 2P3/2 |mJ = 3/2, mI = 3/2 state. Note that |mJ = 3/2, mI = 3/2 is an approximate designation; the hyperﬁne interaction in the P state is much weaker so mJ and mI are “better” quantum numbers. This repump sends population in the |2,-
 2 state primarily to the |3, 2 state.

Hˆhfs = hAI · J,

(4.1)

where the hyperﬁne constant is A = −596.254376 MHz [Itano and Wineland, 1981] and h is Planck’s constant. J and I represent the electron and nuclear angular momentum operators respectively. The total angular momentum of the atom is

52

Using this result in Eq. 4.1,

F = I + J.

(4.2)

Hˆ hfs

=

hA (F2 2

−

I2

−

J2),

(4.3)

which has eigenstates |IJF mF , where mF is the projection of F along a quantization axis [Foot, 2007] deﬁned by a static magnetic ﬁeld B. For small values of this magnetic ﬁeld, all states with the

same F are degenerate and their energies are

Ehfs

hA (F (F + 1) − I(I + 1) − J(J + 1)) . 2

(4.4)

For 25Mg+, I = 5/2 and J = 1/2 in the ground state. The hyperﬁne splitting between F = 3 and

F = 2 at zero magnetic ﬁeld is ∆Ehfs/h = 3A = −1.78876 GHz. Following Ref. [Woodgate, 1970],

the Hamiltonian for an atom with both hyperﬁne and Zeeman interactions is

The magnetic moments are

Hˆ = hAI · J − (µJ + µI ) · B,

(4.5)

µJ = −gjµBJ, µI = gI µBI.

(4.6)

Its nuclear g factor to electronic g factor ratio is gI = gI /gJ = 9.299484 × 10−5. We operate at

an intermediate magnetic ﬁeld of 212.8 G (21.28 mT), which breaks the degeneracy between the F

states, where none of the F , I, or J quantum numbers are good (mF = mI + mJ still good). We use the Breit-Rabi [Breit and Rabi, 1931] formula2 to calculate the energy shifts to our |F, mF states
2 Applies only to J = 1/2.

53

∆E(F, mF )

=

− ∆Ehfs 2(2I + 1)

−

gI µBBmF

±

∆Ehfs 2

1 + 4mF xB + x2B2, 2I + 1

(4.7)

where

x

=

(gj +gI )µB ∆Ehfs

.

In

Eq.

4.7,

+

corresponds

to

F

=

I

+ 1/2

and

−

to

F

=

I

− 1/2.

We

use

this

result to calculate the energy levels of the diﬀerent states shown in Table. 4.1. The magnetic ﬁeld of

212.8 G was chosen such that the frequency of the |3, 1 ↔ |2, 1 transition is ﬁrst-order insensitive

to a change in the quantization axis magnetic ﬁeld.

Transition (|F, mF ↔ |F, mF ) |3, 3 ↔ |2, 2 |3, 2 ↔ |2, 2 |3, 1 ↔ |2, 2 |3, 2 ↔ |2, 1 |3, 1 ↔ |2, 1 |3, 0 ↔ |2, 1 |3, 0 ↔ |2, −1

Frequency f (GHz) 1.326456 1.460516 1.573543 1.573432 1.686459 1.786044 1.975445

df /dB (MHz/G) -1.973 -1.144 -0.572 -0.572 0 -0.443 1.252

d2f /dB2 (kHz/G2) 1.120 2.240 2.283 2.283 2.327 2.100 1.570

Table 4.1: Microwave transition frequencies, ﬁrst and second order magnetic ﬁeld sensitivities for 25Mg+ at 212.8 G. Our ﬁeld-sensitive “stretch” qubit (|3, 3 ↔ |2, 2 ) and ﬁeld-insensitive “clock” qubit (|3, 1 ↔ |2, 1 ) are in bold.

4.2 Field-sensitive “stretch” qubit
We ﬁrst discuss preparation and readout of our “stretch” qubit on the ﬁeld-dependent |F = 3, mF = 3 ↔ |F = 2, mF = 2 transition. We call this qubit the “stretch” state qubit as it involves the |F = 3, mF = 3 state, which has the highest mI and mj values. We also describe single-qubit rotations using microwave ﬁelds. This qubit is used primarily in the experiments described in this thesis as we require a ﬁeld-sensitive qubit.
4.2.1 State preparation We prepare the |3, 3 state via optical pumping using the BDD and BD laser described in
Sec. 3.5. Using σ+ polarized light as shown in Fig. 4.1, we should end up in the |3, 3 state starting

54 from any state in the 2S1/2 manifold. If this beam is not completely σ+ polarized or aligned along the quantization axis, we will get imperfect state preparation and leftover population primarily in the |2, 2 state. After ﬁrst adjusting the polarization to maximize the counts as a coarse alignment, we use two additional compensation coils providing ﬁelds nominally orthgonal to the quantization axis for ﬁner adjustment.
4.2.1.1 Calibrating compensation ﬁelds for beam polarization We calibrate the currents in the compensation coils (see Sec. 3.4.1) using the following
experiment.
(1) Prepare ion nominally in the |3, 3 state. (2) Shelve the |3, 3 state to the “dark” |2, −1 state with microwave pulses. Leftover population
in the |2, 2 state is now in the |3, 3 . (3) Turn on a microwave ﬁeld on the |3, 3 ↔ |2, 2 transition for variable duration t. (4) Shelve the |2, 2 state to the |2, 1 state. (5) Detect population in the |3, 3 state.
Thus, by looking at the contrast of the Rabi ﬂopping, we have a measure of the population left in the |2, 2 state after optical pumping. We adjust the currents in the compensation coils to minimize this contrast. An example scan is shown in Fig. 4.2.
4.2.1.2 Additional state-preparation sequence Additionally, we perform the following sequence to transfer any residual population in the
|3, 2 or |2, 2 state to the |3, 3 state.
(1) |3, 3 → |2, 2 (also transfers population from |2, 2 → |3, 3 ). (2) |2, 2 → |3, 2 (population originally in |3, 3 now in |3, 2 ).

&RXQWV

55
                                   
                                            
'XUDWLRQ   V 
Figure 4.2: Calibration experiment for currents in compensation coils. If the compensation coils are not calibrated, we will have imperfect state preparation and leftover population in the |2, 2 state. We pulse a microwave ﬁeld on resonance with the |3, 3 ↔ |2, 2 transition to measure this leftover population. We adjust the currents in the compensation coils to minimize the amplitude of this Rabi ﬂopping.
(3) Pulse repump laser and then drive |3, 3 → |2, 2 . We repeat this step 5 times. At this point, the population should be in the |3, 2 state.
(4) |3, 2 → |2, 2 .
(5) |2, 2 → |3, 3 .
The population transfers are performed with microwave π pulses.
4.2.1.3 Repump calibration
Our repump laser sends population in the |2, 2 state primarily to the |3, 2 state, and secondarily to the |3, 3 state (see Fig. 4.1). This repump is used in the state preparation sequence described in the previous section as well as in ground-state cooling. To calibrate the pulse duration for the repump, we prepare the |2, 2 state and measure how much of the population is removed from this state as a function of the pulse duration. Experimental data is shown in Fig. 4.3.

56
  

  

  

&RXQWV

  

  

  

  

  

 

 

 

 

 

  

5HSXPS GXUDWLRQ   V 

Figure 4.3: Calibration of repump duration. Starting in the |2, 2 state which is dark, we pulse the repump laser for a variable duration and subsequently transfer the population in the |3, 2 state to the “bright” |3, 3 state and then detect. After 5 µs, most of the state in the |2, 2 state is pumped out.

4.2.2 State readout To read out the state, we ﬁrst transfer population from the |2, 2 state to the |2, −1 state via
a sequence of microwave π pulses. We then detect the ﬂuorescence of the |3, 3 state by driving a cycling transition to the 2P3/2 manifold as shown in Fig. 4.1. The microwave shelving sequence is
(1) |2, 2 → |3, 1 (2) |3, 1 → |2, 1 (3) |2, 1 → |3, 0 (4) |3, 0 → |2, −1
This sequence is shown in Fig. 4.1. This gives us an increased separation between our “bright” |3, 3 state and the “dark” |2, −1 which is ≈ 300 MHz further away from the |2, 2 state. Aside from the detuning, this state also requires more scattered photons to “repump” into the bright state [Langer,

57

2006]. We apply our detection light for 200 µs. The count histograms for two ions are shown in

Fig. 4.4. We typically see about 56 counts (including background counts of about 5) for the one ion

bright state and and about 107 counts for the two ion bright states. A more detailed discussion of

state preparation and readout errors can be found in Sec. 8.3.2.

For most of the data in this thesis, we use Poissonians to model the counts for the zero ion,

one ion, and two ion bright states. This model is then used to extract ion populations from a given

set of counts using maximum likelihood estimation3 .

    

'DUN

    

3L   SXOVH

    

%ULJKW

)UHTXHQF\

    

    

    

   

                        
&RXQWV

Figure 4.4: Histogram of two ion photon counts. We measure the photon counts with ions in the dark state (blue), after a π/2 pulse applied to the “stretch” qubit (orange), and in the bright state (green). There are about 19,000 measurements per histogram.

4.2.3 Rabi spectroscopy and Rabi ﬂopping
We perform Rabi spectroscopy by pulsing a microwave ﬁeld for about 60 µs with a variable detuning from the transition frequency at 1.326 GHz as shown in Fig. 4.5. For these data we apply a current to electrode 3, which generates a lower Rabi frequency of about ≈ 4 kHz. This transition frequency has an approximate linear dependence with the applied magnetic ﬁeld. We use the
3 Primarily done by DHS.

58 diﬀerence frequency between the transition we measure and our calculated value as a measure of our magnetic ﬁeld4. Typically, we do not adjust the current to our magnetic ﬁeld coils unless this diﬀerence is larger than 50 kHz. We instead use this transition frequency to track magnetic ﬁelds and adjust our microwave frequencies as discussed in more detail in Sec. 4.8.
   

   

3RSXODWLRQ

   

   

   

   

  

  

 

  

  

'HWXQLQJ  N+] 

Figure 4.5: Rabi spectroscopy of “stretch” qubit. Starting in the |3, 3 state, we pulse a microwave ﬁeld with a variable detuning for about 60 µs from the |3, 3 ↔ |2, 2 transition and measure the population in the |3, 3 state.

We also show Rabi ﬂopping on this transition in Fig. 4.6. Here, instead of applying the current to electrode 3, we apply it to electrode 2 which can produce higher Rabi frequencies (due to an additional ampliﬁer in the chain) of about 370 kHz. We use this electrode for fast population transfer during state preparation and readout.
4.3 Field-insensitive “clock” qubit
Our magnetic ﬁeld produces a ﬁeld-insensitive “clock” qubit using the |3, 1 and |2, 1 states. While we do not use this qubit for the new spin-motion coupling technique and entangling gates that we discuss in Chapters 5 and 6, which require a magnetic ﬁeld sensitive qubit, we do use it for
4 Note that there will be an oﬀset due to the ac Zeeman shift from an oscillating magnetic ﬁeld at ωrf.

3RSXODWLRQ

59
   
   
   
   
   
                                       
'XUDWLRQ   V 
Figure 4.6: Rabi ﬂopping on the “stretch” qubit. Starting in the |3, 3 state, we pulse a microwave ﬁeld driving the |3, 3 ↔ |2, 2 transition and measure the population in the |3, 3 state.
our microwave sidebands and for some other measurements.
4.3.1 Checking clock state We check that we have set our magnetic ﬁeld to the correct value by measuring the frequency
of the clock transition as a function of the applied magnetic ﬁeld. The data is shown in Fig. 4.7. For each of the points, we change the current in our power supply for the high ﬁeld coils (see Sec. 3.4). For these measurements, the current is varied from 58.89–61.05 A. We then measure the frequency of the “stretch” qubit using Rabi spectroscopy. We use the diﬀerence frequency between its measured value and its calculated value at 212.8 G to determine the magnetic ﬁeld strength. We then perform Ra-
bi spectroscopy on the “clock” qubit to measure its frequency. The minimum is not at 0 due to an ac Zeeman shift from an oscillating magnetic ﬁeld at ωrf. This ﬁeld causes an ac Zeeman shift of ≈ 2.5 kHz on the qubit frequency. The magnetic ﬁeld oscillating at ωrf could be more carefully characterized using the methods outlined in Sec. 5.5.

&ORFN TXELW VKLIW  N+] 

  

60

  

  

  

  

  

 

                               
&DOFXODWHG PDJQHWLF ILHOG  * 
Figure 4.7: Plot of the shift of the “clock” qubit frequency relative to the calculated ﬁeld-independent frequency versus the applied magnetic ﬁeld. We vary the strength of the applied magnetic ﬁeld by changing the current in the magnetic ﬁeld coils. The value of the magnetic ﬁeld is calculated using the frequency of the “stretch” qubit. The minimum shift is not 0 due to an additional ac Zeeman shift from a magnetic ﬁeld at ωrf.

4.3.2 State preparation and readout
To prepare the |3, 1 state, we ﬁrst follow the steps in Sec. 4.2.1 to prepare the |3, 3 state. We then transfer from |3, 3 to |3, 1 using two microwave π pulses that drive the |3, 3 → |2, 2 and |2, 2 → |3, 1 transitions sequentially.
While state preparation is straightforward, state readout is not. With an arbitrary superposition of |3, 1 and |2, 1 , one needs to be careful transferring populations out of these states. For example, the |3, 1 ↔ |2, 2 transition frequency is ≈ 100 kHz away from the |3, 2 → |2, 1 transition frequency. Thus, a π pulse from |3, 1 → |2, 2 can oﬀ-resonantly drive population from |2, 1 → |3, 2 . This can be mitigated by using a Rabi frequency that is small compared to the diﬀerence frequency or by emp-
loying pulse-shaping. We use an alternative approach using a composite pulse sequence as follows
(1) π/2 pulse on |3, 1 → |2, 2 transition.

&RXQWV

61 (2) Wait for a duration t.
(3) π/2 pulse on |3, 1 → |2, 2 transition.
This sequence will transfer the population from the |3, 1 state to the |2, 2 state. By adjusting the delay duration t, the part of the amplitude in the |2, 1 state that was excited by the initial π/2 pulse to the |3, 2 state will be returned to |2, 1 . The delay duration t is calibrated experimentally by preparing the state in |2, 1 and minimizing the transfer of population to the |3, 2 state. An example calibration is shown in Fig. 4.8.
 
 
 
 
 
                                              
'HOD\ GXUDWLRQ   V 
Figure 4.8: Calibration of delay duration in readout of “clock” qubit. We prepare the ion in the |2, 1 state and then perform a Ramsey sequence on the |3, 1 ↔ |2, 2 transition that oﬀ-resonantly drives the |2, 1 ↔ |3, 2 transition. We then measure the population transfer to the |3, 2 state. By calibrating the delay duration between the two π/2 pulses in the Ramsey sequence, we can transfer population from |3, 1 → |2, 2 while maintaining the original population of the |2, 1 state.
4.3.3 Rabi ﬂopping We show Rabi ﬂopping on the |3, 1 ↔ |2, 1 transition in Fig. 4.9.

62
   

   

3RSXODWLRQ LQ _   !

   

   

   

   

   

   

   

   

   

3XOVH SXUDWLRQ   V 

Figure 4.9: Rabi ﬂopping on “clock” qubit. We start in the |3, 1 state and pulse a microwave ﬁeld on resonance with the |3, 1 ↔ |2, 1 for a variable duration. We measure the population in the |3, 1 state at the end of the sequence.

4.3.4 Qubit coherence To measure the coherence of the “clock” qubit, we perform a Ramsey experiment. Starting in
the |3, 1 state we use the following sequence. (1) π/2 pulse on |3, 1 ↔ |2, 1 transition with phase φ = 0. (2) Wait time t. (3) π/2 pulse on |3, 1 ↔ |2, 1 transition with variable phase.
As the qubit decoheres, the contrast in this measurement will decrease. Out to wait times of 100 ms, we see almost no degradation of the qubit contrast on this ﬁeld-insensitive transition. A plot of the data is shown in Fig. 4.10.
4.4 Calibrations
In this section we outline the calibrations that are performed regularly:

3RSXODWLRQ

63
   
   
   
   
   
   
     /2 SKDV H  UDGLD QV     
Figure 4.10: Ramsey experiment on “clock” qubit. We start in the |3, 1 state and perform a π/2 pulse on the “clock” transition. We then wait for 100 ms before a second π/2 pulse with a variable phase. The contrast of this scan is a measure of the qubit coherence. We see almost no loss in contrast with wait times out to 100 ms.
(1) Compensating for ion micromotion in (y) and out of the trap electrode plane (z).
(2) Compensating for stray electric ﬁelds along the trap axis (x).
(3) Beam positions on the ions.
(4) Calibrating single-qubit rotations.
The directions of the diﬀerent axes follow Fig. 3.2. The ion micromotion compensation is typically recalibrated every time ions are loaded due to charging eﬀects from the photoionization beam. The single-qubit rotations are calibrated once a day and the other calibrations less often. Compensating for micromotion ﬁrst is important to ensure the beams positions are calibrated correctly.

64 4.4.1 Micromotion compensation
If there are unwanted stray electric ﬁelds at the position of the ion, it will be pushed oﬀ the rf null and experience micromotion: coherent motion driven by the electric ﬁeld oscillating at the rf trapping frequency ωrf. We measure the in-plane micromotion using the ion ﬂuorescence and the out of plane micromotion using magnetic ﬁeld gradients. We compensate for this micromotion by changing the potentials on the dc electrodes to move the ion towards the rf null. The axes follow those in Fig. 3.2.
4.4.1.1 In-plane micromotion
As described in Ref. [Berkeland et al., 1998], micromotion will cause a modulation of the ion ﬂuorescence on resonance due to a Doppler-shift-induced frequency modulation. Thus, maximizing the ion ﬂuorescence allows us to minimize the micromotion. We use simulations to generate a set of voltages5 on the dc electrodes that provide an electric ﬁeld at the ion in the plane of the trap along the y direction. We scan the ion ﬂuorescence as a function of this compensating electric ﬁeld. Data are shown i-
n Fig. 4.11.
4.4.1.2 Out-of-plane micromotion
Our laser beams are orthogonal to the motion of the ion out of the plane of the trap. Ion ﬂuorescence is not aﬀected by micromotion in this direction and we need to use another method. We use the technique described in Ref. [Warring et al., 2013a], using a microwave magnetic ﬁeld gradient. If the ion is not at the rf null, the electric ﬁeld at the trapping rf frequency ωrf will drive ion motion at that frequency. If we have a microwave ﬁeld gradient that is detuned from the qubit frequency ω0 by ω-
rf, we can drive micromotion sideband transitions that ﬂip the ion spin. The Rabi frequency of this transition is
5 Thanks DHS!

&RXQWV

65
                       
                          
(OHFWULF ILHOG  9 P 
Figure 4.11: Calibration of in-plane micromotion. We measure the ion ﬂuorescence as a function of the electric ﬁeld along the yˆ direction. When the electric ﬁeld we apply compensates for stray electric ﬁelds at the ion and minimizes the in-plane micromotion, we see maximum ﬂuorescence.

Ωmm

=

B µB 4

rmm

,

(4.8)

where B is the magnitude of the magnetic ﬁeld gradient (π-component) we apply along the direction of the micromotion, µB is the Bohr magneton6and rmm is the amplitude of the ion micromotion at ωrf. Thus, by adjusting the shim voltages to (ideally) null Ωmm, we can compensate the ion position out of the plane of the trap. We note that the exact detuning of the ﬁeld gradient from

ω0 is shifted slightly from ωrf due to the ac Zeeman shift from the detuned microwave ﬁeld (see Sec. 4.3.1). Rabi oscillations at the micromotion sideband are shown in Fig. 4.12 for three diﬀerent

values of the shim voltage. While in principle we could use a microwave gradient detuned from

any microwave transition, we use the ﬁeld-insensitive “clock” qubit for its longer coherence time,

which allows sensing of smaller Ωmm and thus better micromotion compensation. Additionally, a ﬁeld-sensitive transition would also be sensitive to an oscillating magnetic ﬁeld at ωrf that can also cause spin-ﬂip transitions (see Sec. 5.2).
6 The astute reader might wonder where the matrix element went. It has been factored in, but for the “clock”

66
  

  

  

&RXQWV

  

  

  9 P  &DOLEUDWHG 

  

   9 P

    9 P

                                            
3XOVH GXUDWLRQ  PV 

Figure 4.12: Calibration of out-of-plane micromotion with microwave gradient. We pulse a microwave gradient detuned from the “clock” qubit frequency ω0 by the trap rf frequency ωrf. We perform this experiment for three diﬀerent values of the compensation voltages applied: at the calibrated value (blue), 50 V/m oﬀ (orange) and 100 V/m oﬀ the calibrated value (green points). When the ion is displaced from the rf null, the Rabi frequency of this transition increases.

4.4.2 x shim
Stray electric ﬁelds along the trap axis will push the ion oﬀ the center of the trap but not cause micromotion since the rf electric ﬁeld is zero along the rf null line, parallel to the trap axis. However, it is still desirable to have the ion at the nominal trap center. Our shim voltages are calculated at this point, and it should minimize anharmonicities, improving the ion lifetime. To compensate for stray ﬁelds along this direction, we measure the ion position as a function of the axial conﬁnem-
ent. For a harmonic oscillator,

F = −kx,

(4.9)

where here, F is the force from a stray ﬁeld, k is the spring constant, and x is the displacement of the ion from its equilibrium position without any stray ﬁelds. By changing the axial conﬁnement
transition, that corresponds to ≈ 1.001µB [Warring et al., 2013a].

'LIIHUHQFH LQ SRVLWLRQ DW  ORZHU DQG KLJKHU FRQILQHPHQWV
  P 

67 strength, we change the value of the spring constant. The displacement x = −F/k. Thus, if the ion position x is constant for diﬀerent values of k, we have F = 0. We measure the ion position by looking at the peak of its ﬂuorescence versus beam position as shown as shown in Sec. 4.4.3. We change the axial conﬁnement by changing all of our dc voltages (without compensation) by the same scale factor. The two scaling factors for the data in Fig. 4.13 are 0.36 and 0.76.
 
 
 
 
                               
(OHFWULF ILHOG  9 P 
Figure 4.13: Calibration of compensation voltages along trap axis. We measure the ion position at two values of the axial conﬁnement. We plot the diﬀerence in position at those two values as a function of the electric ﬁeld applied along the trap axis. When the ion is well-compensated, the diﬀerence will be 0.
4.4.3 Detection beam positions Our beams for detection, Doppler cooling, repumping, and optical pumping follow the same
path to the ion after the same ﬁber. Thus, aligning one of the beams on the ion aligns all of them. The horizontal alignment is controlled using a motorized actuator whose position we scan. Using the ion, we optimize the beam position by maximizing its ﬂuorescence as shown in Fig. 4.14.
The vertical (out-of-plane) alignment is controlled via a mirror mount with a piezoelectric adjuster. Changing the applied voltage changes the vertical position of the beam. To distinguish between ion ﬂuorescence and scatter from the surface, we measure the counts with the ion in its

68
  

  

&RXQWV

  

  

  

 

 

 

 

 

 

+RUL]RQWDO SRVLWLRQ RI ODVHU   P 

Figure 4.14: Calibration of in-plane position of detection beam. We measure the ion ﬂuorescence as a function of the beam position which is varied using a motorized actuator. We use a quadratic ﬁt to determine the position at the maximum.

bright state and in its dark state. We pick the point with the highest diﬀerence between bright and dark state counts as shown in Fig. 4.15.
4.4.4 Single qubit rotations
We use our microwave ﬁelds to perform single-qubit rotations. For example, we perform π/2 pulses for Ramsey sequences, two-qubit gates, and π pulses for spin-echos, state initialization, and shelving sequence for state readout. To perform these single-qubit rotations accurately, we need to calibrate the duration of the pulses. A coarse calibration is done using Rabi oscillations as shown in Fig. 4.6. However, the π-pulse duration extracted from Rabi oscillations does not take into account the rise-
 and fall times of our microwave switches that also induce some rotation.
To more precisely calibrate the duration of π or π/2 pulses, we perform a sequence of pulses with a short delay in between. As shown in Fig. 4.16, we measure the qubit population as we perform a sequence of 200 π pulses in a row with a 5 µs gap between pulses on the “stretch” qubit. This gap also mitigates duty cycle eﬀects to a certain extent. Starting in |↑ , we perform an even

69
  

  

&RXQWV

  

'LIIHUHQFH LQ EULJKW DQG GDUN FRXQWV

'DUN FRXQWV

  

  

                      
$FWXDWRU YROWDJH  9 
Figure 4.15: Calibration of the out-of-plane position of the detection beam. We measure the ion ﬂuorescence as a function of the beam position which is varied by changing the actuator voltage. We measure both the bright and dark state counts and plot the diﬀerence as well as the dark state counts as a function of voltage. We ﬁt a quadratic to the diﬀerence and set the voltage to the maximum.

number of π pulses so the ion should ideally be returned to its initial dark population. If the pulse duration is too long or too short, we get an over or under rotation that we measure with longer sequences. Based on this measurement, we can apply a correction t to the π pulse duration

t

=

No.

of

pulses

tπ for π

rotation

. error

(4.10)

For the data in Fig. 4.16, about 118 pulses resulted in a π rotation error, or a complete transfer from dark to bright. From a π pulse duration tπ of about 0.673 µs, this corresponds to a timing error of about 6 ns. As we cannot distinguish between an under or over rotation, we experimentally try both adding and subtracting this correction and choose the time that results in a reduction of the error. The initial coarse calibration of this π pulse duration was done via Rabi ﬂopping; we attribute th-
e 6 ns discrepancy to the rise and fall times of the switches. We perform a similar calibration for the π/2 pulses, which are not simply half the π time, again due to the switches.

70

   

&RDUVH

FDOLEUDWLRQ

   

)LQH FDOLEUDWLRQ

   

3RSXODWLRQ

   

   

     

                            
1R  RI   SXOVHV

Figure 4.16: Calibration of π-pulse times using microwaves for single-qubit rotations on the “stretch” qubit. We plot the population versus the number of π pulses applied. Starting in the dark |2, 2 state, we apply an even number of π pulses. If the timing of the π pulse is incorrect, we will see coherent excitation to the |3, 3 state which we measure. Based on the number of pulses that transfer |2, 2 → |3, 3 , we can determine the timing oﬀset. Based on the data in the blue points which produced -
an error, we applied a 6 ns correction to the π time as shown in the orange points.

Transition (|F, mF ↔ |F, mF ) |3, 3 ↔ |2, 2 |3, 2 ↔ |2, 2 |3, 1 ↔ |2, 2 |3, 1 ↔ |2, 1 |3, 0 ↔ |2, 1 |3, 0 ↔ |2, −1

π pulse duration (µs) 0.673 0.299 2.329 0.366 2.628 4.254

Table 4.2: π pulse durations for single-qubit rotations for state preparation and readout. These transitions are driven by a current applied to electrode 2.

The π times for the transitions used in the state preparation and shelving sequence are listed in Table. 4.2. Each of these π pulse durations are calibrated using the method outlined previously.

71
4.5 Laser-based spin-motion coupling
As described in Sec. 3.5.3, we use a VECSEL based system for implementing stimulated Raman transitions. We drive coherent two-photon |3, 3 ↔ |2, 2 transitions via the intermediate P states. As the eﬀective k vector for this transition has an overlap with all three motional modes of a single ion, we can use these lasers for 3D ground-state cooling [Burd et al., 2016]. For the experiments described in this thesis, we use this transition to cool the out-of-phase axial mode and sometimes the radial mo-
des.
To align each beam on the ions, we maximize the ac Stark shift on the ions due to the Raman beams, as measured using a microwave Ramsey experiment. With two ions, the beams might need slight readjustment from the one ion calibration to ensure they are equally illuminating both ions.

4.5.1 Ground state cooling

We use the Raman beams to cool the out-of-phase axial mode (≈ 3.8 MHz) as shown in Fig. 4.17. Cooling this mode is important for the gates we perform in chapter 6.
   

   

  

&RXQWV

  

  

   5HG VLGHEDQG

  

%OXH VLGHEDQG

    

    

    

    

    

'HWXQLQJ IURP VLGHEDQG WUDQVLWLRQ  0+] 

Figure 4.17: Veriﬁcation of ground-state cooling of the out-of-phase axial mode with Raman beams. We scan across the sideband transitions after cooling the mode, exciting the blue sideband but not the red. This asymmetry indicates that the mode is close to its ground state (Eq. 4.11).

72 4.5.2 Heating rate measurements
After ground-state cooling, we can add in a variable wait duration before measuring the sideband asymmetry as shown in the previous section. Following Ref. [Leibfried et al., 2003] for a single ion, the mean thermal occupation n¯ is

R

n¯

=

1

−

, R

where R is the ratio of the red to blue sideband excitation probabilities.

(4.11)

R = Prsb . Pbsb

(4.12)

We note that this relation holds for a thermal state regardless of the duration for which each of the

blue or red sideband pulse is applied. Typically, this is adjusted to the π time of the blue sideband

transition from the ground state to maximize the contrast. Thus, by measuring the sideband

asymmetry as a function of wait duration after ground state cooling, we have a measure of n¯ as

a function of time and can determine the heating rate. The heating rates of the diﬀerent modes

measured in this setup are shown in Table. 4.3.

Mode Axial center-of-mass Radial center-of-mass Radial out-of-phase

Frequency (MHz) 2.4 7.3 7.2

Heating rate (quanta/s) 60 18 <2

Table 4.3: Heating rates for diﬀerent motional modes.

4.5.3 Photon scattering
The Raman beams cause photon scattering (Raman and Rayleigh), sometimes causing transitions out of the “stretch” qubit manifold. When using the Raman beams for ground-state cooling in other experiments, such as our two-qubit gates, we ﬁnd that we need to add an extra π

73 pulse on the |3, 1 ↔ |2, 2 transition before performing the state preparation sequence in Sec. 4.2.1.2. This extra pulse helps recover any population lost from the ground state cooling to the |3, 1 state and return it to the |3, 3 state.
4.6 Microwave spin-motion coupling
Similar to Ref. [Ospelkaus et al., 2011], we can drive sideband transitions using a magnetic ﬁeld gradient oscillating close to the “clock” qubit frequency as described in Sec. 2.3.5.
4.6.1 Nulling the microwave magnetic ﬁeld As described in Ref. [Ospelkaus et al., 2008], we ﬁrst null the microwave magnetic ﬁeld at
the ion’s position. When we apply a current to the electrode, we generate a magnetic ﬁeld B and a magnetic ﬁeld gradient. While we need a magnetic ﬁeld gradient to drive sideband transitions, nulling the magnetic ﬁeld B is desirable as it minimizes the ac Zeeman shift at the ions which is proportional to B2. A static ac Zeeman shift can be calibrated out, but ﬂuctuations in this ac Zeeman shift will cause qubit decoherence, even though the qubit itself is insensitive to ﬂuctuations in the quantiza-
tion magnetic ﬁeld. These ﬂuctuations could be due to Rabi frequency ﬂuctuations of the microwave ﬁelds. Operating at the B ﬁeld null reduces the sensitivity as

∆ac ∝ B2, δ∆ac ∝ BδB.

(4.13)

Nulling the microwave magnetic ﬁeld also minimises oﬀ-resonant transitions, for example for the |3, 1 ↔ |2, 2 transition7 .

In our trap, nulling the magnetic ﬁeld involves applying currents of a given frequency to

multiple electrodes, and adjusting the phases and amplitudes of each current to cancel the magnetic

ﬁeld at the ion. Other traps instead incorporate an electrode geometry with a meander to null the
7 Oﬀ-resonant transitions can also be mitigated by pulse shaping.

74
magnetic ﬁeld automatically [Hahn et al., 2019], though successfully overlapping the B ﬁeld null and the rf null requires both complex ﬁnite element analysis simulations and accurate microfabrication.
To null the magnetic ﬁeld, we ﬁrst apply currents at the qubit frequency ω0 to both electrodes 2 and 3 (see Fig. 3.2). On resonance, the magnetic ﬁeld will drive carrier transitions. We adjust the relative phase and amplitudes of the currents to minimize the Rabi frequency Ωµ of this transition. As Ωµ ∝ B, this measurement is ﬁrst order sensitive to the magnetic ﬁeld. Note that this measurement is only sensitive to B ﬁeld polarizations that drive the qubit transition, which in this case requires π-
 polarization. The eﬀect of this nulling is shown in Fig. 4.18. With currents applied to both electrodes 2 and 3, the Rabi ﬂopping seen with just electrode 3 is reduced considerably. However, going to longer pulse durations we see some ﬂopping likely due to duty cycle eﬀects.
2QO\ HOHFWURGH   (OHFWURGH   DQG     

&RXQWV

  

  

 

 

  

  

  

  

   

'XUDWLRQ   V 

Figure 4.18: The magnetic ﬁeld oscillating at the qubit frequency ω0 is nulled by applying currents to multiple electrodes. With a current applied only to electrode 3, we see fast Rabi ﬂopping as seen by the blue points. By applying a current to electrode 2 as well, with an amplitude of 0.77 and phase of 0.92π relative to electrode 3, we are able to minimize the Rabi ﬂopping. We start to see ﬂopping at longer timescales most probably due to thermal duty cycle eﬀects that shift the relative phases -
and amplitudes slightly. The counts are lower in this plot as a 100 µs detection time was used.

Compared to using a current at ω0 to calibrate the nulling, there might be slight variations in

75 the phase and amplitudes required when the microwave current is applied at ω0 ± ωr for sideband transitions. This variation can be veriﬁed by measuring the ac Zeeman shift on the “clock” qubit that varies as B2. The ac Zeeman shifts on other transitions such as |3, 1 ↔ |2, 2 oﬀer measures of the other polarization components of the B ﬁeld [Warring et al., 2013b].
4.6.2 Microwave sidebands
After nulling the magnetic ﬁeld, we then drive sideband transitions by applying a current at ω0 ± ωr where +(-) corresponds to the blue(red) sideband. An example sideband transition is shown in Fig. 4.19. These sideband transitions are used for the motional frequency tracking in the next section.
   
   
   
   
   
   
                        'HWXQLQJ IURP TXELW IUHTXHQF\  0+] 
Figure 4.19: Blue sideband transition using a microwave magnetic ﬁeld gradient oscillating at ω0 + ωr. The population excited from the |↓ (|3, 1 ) state is shown a a function of detuning from the qubit frequency. Starting in the ground state of motion, we are able to completely ﬂip the spin while adding a motional quantum. The sideband was pulsed on for 770 µs.

3RSXODWLRQ

76
4.7 Motional frequency tracking
Most quantum information experiments with trapped ions involve coupling their internal spin-states to their motion. In order to do this, one most know the motional frequency to some precision. Unfortunately, for our system this frequency drifts quite substantially. These drifts are primarily due to the proximity of our ions to the surface; being close to the surface increases the strength of our gradients and thus the spin-motion coupling, but also makes us more sensitive to surface eﬀects such as-
 charging which can change the motional frequencies. This charging is caused by the 280 and 285 nm light that we use with 25Mg+. In this section, we describe how we keep track of the drifts in the motional frequencies as we conduct our experiments. This drift tracking is used for practically every experiment that involves the ions’ motion in this apparatus.
4.7.1 Overview
We created a drift tracking (DT) module that could be easily imported into diﬀerent experiments. The DT is interleaved in between repetitions of a particular experiment; the number of repetitions is a parameter that can be set. When the DT is run, it records the time at which it is running, measures the motional frequency and then outputs that frequency.
We keep track of all frequencies measured as a function of time and perform a simple linear ﬁt to predict what the frequency will be in the future. Setting the frequency to the most recent estimate, without including linear extrapolation of the current drift trend, produced less accurate predictions of the motional frequency. Empirically, ﬁtting the 5 most recent points works well; too few points and the DT becomes vulnerable to fast ﬂuctuations, too many and the DT is unable to adapt to changes.
An overview of each sequence of the DT procedure is shown in Fig. 4.208. The steps are
(1) Initialize hardware: We set the parameters for the drift tracking, namely the attenuation values for the digital attenuators controlling the strength of the sidebands we apply. In
8 HMK points out that no Boulder thesis is complete without a 420 reference.

77 some experiments, where IQ baseband voltages are also modiﬁed from their values for the microwave sideband used for drift tracking, the IQ parameters will also need to be set.
(2) Based on previous measurements, we calculate the predicted motional frequency. Subsequent measurements use this calculated value.
(3) We now begin measurements of the motional frequency, starting with preparing the ion in the |↓ state of the “clock” qubit.
(4) We now pulse the microwave blue sideband on either side of the center frequency, determined in step 2, where there is a steeper response. We perform these measurements in an interleaved fashion, alternating between negative and positive detunings. The detuning values used here are based on the calibration of the sideband that is done beforehand.
(5) We perform state readout, and perform thresholding of the measured counts to determine the qubit populations.
(6) We then reset the hardware so the subsequent experimental measurements can be done. Steps 3-5 are repeated, typically for a total of 100 repetitions per negative and positive detuning.
(7) We perform analysis of the measured qubit populations. This step is done on the host computer, not the FPGA. Here, we calculate the ratio of the populations measured on either side of the detuning, and based on the ratio, the actual motional frequency. We now include the most recent measurement of the motional frequency into our linear ﬁt. We save the new ﬁt parameters which are used for subsequent calculations of the motional frequency.
4.7.2 Calibration To calibrate the drift tracking parameters, we run a sideband scan similar to that shown in
Fig. 4.19. However, instead of a ground- state cooled ion, we typically perform our drift tracking

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:30.937Z
- **Text Length:** 151226 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
