# PDF Document: (Ion Shuttling - 2021 MIT) Optimizing Ion-Shuttling Operations in Trapped-Ion Quantum Computers.pdf

**File Path:** (Ion Shuttling - 2021 MIT) Optimizing Ion-Shuttling Operations in Trapped-Ion Quantum Computers.pdf

**Processed Date:** 2026-02-10T18:15:41.901Z

**File Size:** 18925.35 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 825

**Title:** (Ion Shuttling - 2021 MIT) Optimizing Ion-Shuttling Operations in Trapped-Ion Quantum Computers

**Collection:** Multiplexing > Ion Shuttling

---

## Extracted Text Content

Optimizing Ion-Shuttling Operations in Trapped-Ion Quantum Computers
by
Luke Qi
Submitted to the Department of Physics in partial fulﬁllment of the requirements for the degree of
Bachelor of Science in Physics at the
MASSACHUSETTS INSTITUTE OF TECHNOLOGY June 2021
© Luke Qi 2021. All rights reserved. The author hereby grants to MIT permission to reproduce and to
distribute publicly paper and electronic copies of this thesis document in whole or in part in any medium now known or
hereafter created.
Author . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Department of Physics May 14, 2021
Certiﬁed by . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Isaac L. Chuang
Professor of Physics and Electrical Engineering Thesis Supervisor
Certiﬁed by . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . John Chiaverini
MIT Lincoln Laboratory Technical Staff Thesis Supervisor
Accepted by . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . Deepto Chakrabarty
Associate Department Head, Department of Physics

2

Optimizing Ion-Shuttling Operations in
Trapped-Ion Quantum Computers
by
Luke Qi
Submitted to the Department of Physics on May 14, 2021, in partial fulﬁllment of the
requirements for the degree of Bachelor of Science in Physics
Abstract
Trapped ions are a promising candidate for quantum computation. As experiments with ions increase in size and complexity, a trap array-based architecture for an ion trap with many independent zones provides a path towards large-scale integration. A crucial element in the operation of a trap array is the ability to split, move and recombine chains of ions on diabatic timescales and without incurring excessive decoherence of information stored in ion qubits. In this thesis, I investigate whether ion-
 transport and splitting can be realistically integrated in the future quantum processor and what the requirements are to achieve this.
I discuss my end-to-end numerical simulation pipeline of the ion shuttling process. Using these simulation tools, I investigate the leading theories for ion transport and splitting, based on Shortcuts-to-Adiabaticity principles, and extend these methods into two central criteria for optimal ion shuttling. I present a novel method for optimizing the voltage controls to achieve optimal ion shuttling, that use accurate models of the digital-to-analog converters, ampliﬁers, and low-pass ﬁlters of our -
ion trapping system.
I demonstrate fast and robust transport of 40Ca on our custom-designed surface electrode trap and share spectroscopy data taken during the ﬁrst ever attempt at optimal splitting. I then outline the necessary steps to achieve fast splitting with less than 1 quanta of excitation. It is my hope that the theories, software, and experimental results presented in this thesis demonstrate the feasibility of optimal ion transport and splitting in state-of-the-art, scalabale surface traps and become a stand-
ard for future ion shuttling experiments.
Thesis Supervisor: Isaac L. Chuang Title: Professor of Physics and Electrical Engineering
Thesis Supervisor: John Chiaverini Title: MIT Lincoln Laboratory Technical Staff
3

4

Acknowledgments
It’s pretty trippy to look back at the years and retrospectively chart your trajectory through life. There are a few doors that you stumble through that end up blossoming into unexpected yet wonderfully exciting territories.
One such door for me was joining Professor Isaac Chuang’s quanta group back in the Fall of 2019. My experience since then has led to growth in ways I could have never imagined as a small freshman hoping to be an aerospace engineer. Along the way I’ve gotten to meet terriﬁc people who have improved my life.
First and foremost is Mr. Jules Stuart. I don’t think I could ever overstate the impact you’ve had on my experience both in Ike’s lab and research in general. Since the very beginning, when I had no idea what was wrong with my simulations, you’ve been incredibly patient and supportive. Thank you for the late night hackathons, the tea spilling over multiple messaging platforms, and giving me some real solid advice about grad schools. Working with you has been such an excellent experience that I act-
ually don’t think I’ve fully comprehended what research without you will be like. I’ll be happy if I could have a fraction of your energy and bandwidth for making sure the experimentalists survive and even thrive.
To Professor Ike Chuang, thank you for inspiring me to be a better student and researcher. Your seemingly endless pockets of knowledge, your stories from your undergraduate and graduate years, and your passion for learning has made me want to do it all (but we can’t all be Ike). Every group meeting I ﬁnd myself pondering and digesting your advice and words of wisdom.
To Dr. John Chiaverini, thank you for being such an involved and helpful advisor. I’m always impressed by your attention to detail and how you manage to ask me questions that I have no good answer to. Working with you has inspired me to be more thorough and meticulous in my incoming graduate journey.
To Dr. Jeremy Sage, thank you for making me feel welcome ever since I attended my ﬁrst group meeting in 2019. Thank you also for connecting with Pro-
5

fessor Gonzalo Muga; conversations with his group has been a fun experience for me. It’s been cool that we could still connect through MIT iQuHACK and I appreciate your support throughout all of it.
To Dr. Susanna Todaro, thank you for always helping me, no matter how busy you are. Even though I’m still ﬁnishing this acknowledgements section on May 14th, I’d be in an even worse spot if you hadn’t told me to start writing a month ago. I really appreciate everything you do for lab culture, you make academia feel warm (or maybe its the spicy margaritas talking).
To Mr. Gabriel Mintzer, thank you for your hopeful and supportive soul. Seeing you in lab at late hours and getting slack reacts at 4am makes me feel a sense of camaraderie. I don’t know how you manage everything on your plate and still are able to assure me about my incoming thesis deadline.
To Mr. Felix Knollman, Mr. "I’m no beginner" and is actually an expert. Thank you for messaging me about climbing and I promise I’ll go soon. I’ve enjoyed our conversations both academic and non-academic, I’m always pleasantly surprised at the similar interests we share. Also, wink ;)
To Mr. Kyle DeBry, thank you for reaching out to me about research topics. Your suggestions have been quite helpful and I’m quite inspired by your work ethic, knowledge, and wit.
To Mr. Xiaoyang Shi, thank you for your calm and level-headed energy. Hanging with you at IP-QGIPSHRE has been a blast.
To Professor Gonzalo Muga, it has been a pleasure working with you and your team. Thank you for your ﬂexibility to ﬁnd meeting times that work for both of us. I’ve also enjoyed hearing about Spanish siesta and would love to implement it in my own life.
A special thanks to my roommate, Mr. Soor Vora, who has been kind enough to hold off on watching TV while I write this thesis.
A.G.S and D.J.C., you two already know how much you mean to me. I reserve the biggest thank you for my mom, dad, brother, uncle, and cat Mr. Oliver Wood.
6

Contents

1 Introduction

21

1.1 Ion Array Trap Architecture . . . . . . . . . . . . . . . . . . . . . . . . 22

1.2 Ion Shuttling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24

1.2.1 Primitive Operations . . . . . . . . . . . . . . . . . . . . . . . . 25

1.2.1.1 Transport . . . . . . . . . . . . . . . . . . . . . . . . . 25

1.2.1.2 Splitting and Merging . . . . . . . . . . . . . . . . . . 26

1.2.1.3 Reordering . . . . . . . . . . . . . . . . . . . . . . . . 27

1.2.2 State-of-the-Art Experiments . . . . . . . . . . . . . . . . . . . 28

1.2.2.1 Shuttling Demonstrations . . . . . . . . . . . . . . . 28

1.2.2.2 Quantum Algorithms . . . . . . . . . . . . . . . . . . 29

1.3 This Work . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30

1.3.1 Contributions and Publications . . . . . . . . . . . . . . . . . . 31

2 Trapping Ions

33

2.1 RF Paul Traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34

2.1.1 Surface Electrode Trap . . . . . . . . . . . . . . . . . . . . . . . 39

2.2 Motional Dynamics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42

2.2.1 Micromotion . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42

2.2.2 Secular Motion . . . . . . . . . . . . . . . . . . . . . . . . . . . 43

2.2.3 Normal Modes . . . . . . . . . . . . . . . . . . . . . . . . . . . 45

2.3 Electrical Controls . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 46

7

3 Numerical Simulation Pipeline

49

3.1 Modelling the Surface Electrode Trap . . . . . . . . . . . . . . . . . . 50

3.2 Solving for Voltage Waveforms . . . . . . . . . . . . . . . . . . . . . . 51

3.2.1 Ion Trap Voltage Generation . . . . . . . . . . . . . . . . . . . 55

3.2.1.1 Calculating Potentials . . . . . . . . . . . . . . . . . . 55

3.2.1.2 Calculating Voltages . . . . . . . . . . . . . . . . . . . 57

3.3 Electrode Circuit Simulation . . . . . . . . . . . . . . . . . . . . . . . . 59

3.4 ODE Solver . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60

4 Optimal Ion Shuttling

65

4.1 Transport Proﬁles . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66

4.1.1 Shortcuts-to-Adiabaticity . . . . . . . . . . . . . . . . . . . . . 68

4.1.2 Fourier Excitation . . . . . . . . . . . . . . . . . . . . . . . . . . 73

4.2 Splitting Proﬁles . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79

4.2.1 Shortcuts-to-Adiabaticity . . . . . . . . . . . . . . . . . . . . . 82

4.2.2 Fourier Excitation . . . . . . . . . . . . . . . . . . . . . . . . . . 86

4.3 Robustness . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 90

4.3.1 Experimental Non-Idealities . . . . . . . . . . . . . . . . . . . 92

4.4 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93

5 Voltage Optimization

95

5.1 Spectral Content of Voltage Waveforms . . . . . . . . . . . . . . . . . 98

5.2 Deconvolution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100

5.3 Local Minimization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103

6 Experimental Results

107

6.1 Electrode Circuitry Characterization . . . . . . . . . . . . . . . . . . . 107

6.2 Diabatic Ion Transport . . . . . . . . . . . . . . . . . . . . . . . . . . . 111

6.3 Splitting Spectroscopy . . . . . . . . . . . . . . . . . . . . . . . . . . . 114

6.4 Equally-Spaced Ion Chains . . . . . . . . . . . . . . . . . . . . . . . . 120

6.5 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 123

8

7 Conclusion

125

9

10

List of Figures
1-1 An illustration of the ion array trap. . . . . . . . . . . . . . . . . . . . 23 1-2 Start of the split. α ≥ 0, β = 0 . . . . . . . . . . . . . . . . . . . . . . . 27 1-3 The critical point. α = 0, β ≥ 0 . . . . . . . . . . . . . . . . . . . . . . 27 1-4 End of the split. α ≤ 0, β ≥ 0 . . . . . . . . . . . . . . . . . . . . . . . 27
2-1 A diagram of a quadrupole trap adapted from [4]. (a) An oscillating voltage is applied to the rf electrodes while the other two are held at rf ground. The ion is located near the center of the trap, where the resulting electric ﬁeld is zero (rf null). The ﬁeld lines show the ion is conﬁned in the radial (xˆ, zˆ) directions. (b) The four electrodes can be extended as rods in the axial (yˆ) direction. The rf ground can be segmented and a DC voltage can be applied, providing axial conﬁnement to t-
he two ions. . . . . . . . . . . . . . . . . . . . . . . . . 35
2-2 A schematic of the quadrupole trap being unfolded into a surface trap, adapted from [4]. The rf null is now above the plane of the trap. The rf ground electrodes can be segmented along the axial direction (into the page). . . . . . . . . . . . . . . . . . . . . . . . . . . 40
2-3 An diagram of the Standard Lincoln Trap. Each electrode has a name and corresponding number. The pitch of the DC electrodes 2–8, and 13–19 is 120 µm. Electrodes 10 and 11 serve to ﬁnely adjust the orientation of the ion’s principle directions. yˆ is the axial direction. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41
11

2-4 A diagram of the MaxBeta trap. Same coordinate system as the SLT 2-3. Position y = 0 µm is right between electrodes S10 and N10. 45 µm pitch on the smaller electrodes, and 74 µm on the larger electrodes. The rf electrodes lie on the outside of the DC electrodes. Electrodes S22, S23, S24, S25 serve to tilt the ion’s principle directions. 42
2-5 A schematic of the rf ampliﬁcation circuitry, created by Mr. Jules Stuart. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47
3-1 An diagram of the ion motion experiment process. The gold boxes denote the input and output of our system. We care about ﬁnding the best voltage inputs to shuttle ions optimally. . . . . . . . . . . . . 49
3-2 A harmonic potential on the MaxBeta trap at 186.5 µm. Grid ﬁle resolution is 1 µm. A quadratic potential is taylor ﬁtted (red) on the potential calculated with superposition (blue dots). The potential is also calculated through coefﬁcient expansion, with great agreement. 56
3-3 A double well potential centered at 186.5 µm. The superposed potential (blue dots) and coefﬁcient expansion potential (dashed green) differ further from the expansion point. The coefﬁcients from forward ITVG and taylor ﬁtting the superposed potential (dashed red) differ by 12%. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56
3-4 Transport waveforms on the SLT. The voltages ocassionally hop between two solution sets that have similar cost function values. . . . . 58
3-5 An example of a time-domain simulation of electrode ﬁltering with LTSpice. The input signal is shown as piece-wise linear discrete step function (blue). The circuit output is shown in orange. The dashed black line shows a target waveform for this electrode. . . . . 60 12

3-6 Simulation of the trajectory of 88Sr under a harmonic oscillator moving with protocol shown in dashed black. Ion position relative to the potential minimum shown in blue and uses the right-hand y-axis scale. The ion’s motion during the "heat calculation window" is used to determine the motional excitation after transport . . . . . 61
3-7 An FFT of the 43Ca ion located an a harmonic potential and interacting with a 43Ca and 86Sr ions. . . . . . . . . . . . . . . . . . . . . . 63
4-1 Various transport proﬁles plotted in black. Acceleration determined using numerical derivatives, plotted in red and using the righthand scale. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 67
4-2 Motional excitation calculated by determining the classical energy of the ion’s motion at the end of transport. The trajectory of 88Sr in a rigid 1.2 MHz trap under the various transport proﬁles is calculated with my ODE solver. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68
4-3 A 3D representation of the tanh transport proﬁle. The electric potential (V) is plotted along the z axis. yˆ-position and time plotted in the x and y axis. This particular transport is from 0 µm to 120 µm. 69
4-4 Proﬁles in time of various STA trajectories and hyperbolic tangent. . 74
4-5 Same excitation plot as Fig 4-2 but with more simulated STA trajectories. The quantized excitation from all three STA protocols is synonymous with zero. . . . . . . . . . . . . . . . . . . . . . . . . . . 74
4-6 STA 9th order polynomial. . . . . . . . . . . . . . . . . . . . . . . . . . 76
4-7 Sinusoidal transport . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76
4-8 Linear transport . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76
4-9 Hyperbolic tangent, N = 5 . . . . . . . . . . . . . . . . . . . . . . . . . 76
4-10 Slice of spectrograms at the 1.2 MHz axial frequency. . . . . . . . . . 77
13

4-11 A typical splitting proﬁle from [31]. Motional excitation from splitting (red), thermal excitation from electric ﬁeld noise (blue), and total energy transfer (black). The top right inset shows the axial frequency (black) and heating rate (red) during transport. . . . . . . 81
4-12 STA splitting proﬁle with a ﬂat COM frequency (solid red). The √
stretch frequency (dashed red) starts off at 3 and ramps down to almost be equal to the COM frequency. The quadratic, α, coefﬁcient ramps down to -0.5 its initial value (blue). The quartic, β, term reaches a maximum value at the critical point (orange). . . . . . . . . 84
4-13 Motional excitation in quanta of the common mode oscillation after two types of splitting proﬁles. Thermal heating from the trap has not been simulated. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
4-14 Axial frequency modes during the two methods of splitting. . . . . . 85
4-15 Spectrogram of STA splitting. The common mode frequency is set to be 1.2 MHz for 40Ca, and scales inversely with the mass for higher-mass ions. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87
4-16 Slice of the STA splitting spectrogram at the various axial frequencies corresponding to the ion’s mass. . . . . . . . . . . . . . . . . . . . 87
4-17 Simulation of two 40Ca ions with my splitting proﬁle. d(t) is given by an STA solution (4.23). The ions get separated ×10 their starting distance. Note how the ions follow an STA proﬁle during the 5 µs split. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
4-18 Comparisons of my splitting proﬁle with the same two in Fig 4-13. The quanta plotted is the excitation in the common mode. . . . . . . 89
4-19 Transporting a single 88Sr ion with the polynomial STA (4.23) and the trigonometric STA (4.24). The correct axial frequency for transport is 1.2 MHz, but transport with a frequency of 1.0 MHz has also been simulated. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 91
14

5-1 Ion transport waveforms on the MaxBeta trap. Transporting 40Ca according to an STA polynomial protocol (4.23), over a distance of 45 µm in 15 µs. The axial frequency is 4 MHz. . . . . . . . . . . . . . 96
5-2 Splitting waveforms on the MaxBeta trap. Splitting two 40Ca according to my developed method in chapter 4. d(t) according to (4.23), COM frequency of 1.2 MHz. Final ion separation of 90 µm. . 97

5-3 DAC input voltages modelled with a piece-wise linear function (blue). Analog output simulated with SPICE (orange). The target waveform is what we want to apply to the trap electrodes (dashed black). . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97

5-4 Spectral content of diabatic transport voltages. The total transport time is 4 µs. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 99

5-5 Naively sampled voltages. DAC update rate of 1000ns. . . . . . . . . 99

5-6 Schematic of our circuitry in LTSpice. Our DAC inputs are modelled as piecewise linear functions applied at "Vinput". The stages "End of Fastino" and "End of HVamp" and labeled. The voltage output at "ION" is our expected electrode voltage. . . . . . . . . . . . 100

5-7 Impulse response of our electrode circuitry. . . . . . . . . . . . . . . . 100

5-8 Magnitude of the transfer function . . . . . . . . . . . . . . . . . . . . 101

5-9

Phase of

the transfer

function.

Phase

delay:

φ f

.

Group

delay:

dφ df

. . 101

5-10 Deconvolved signal (red) of the target waveform for electrode N9

(black). The analog output of the deconvolved signal is simulated

in SPICE (blue). . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 102

5-11 Sampling the deconvolved signal. Time (µs) plotted on the x-axis. The timing of the voltages are better than the naive voltages, but there’s uncontrolled oscillations at the end. . . . . . . . . . . . . . . . 104

5-12 After an optimization cycle. Time (µs) plotted on the x-axis. Smooths out the ending oscillations to better match the target waveform. . . . 104

15

6-1 The output of the Fastino with a 0 to 2.5 V step input. The cable from the HD68 Fastino connector and the oscilloscope was modelled as a 100 pF parasitic capacitor. . . . . . . . . . . . . . . . . . . . 108
6-2 Fastino + HVamp output with 2.5 to 5 V and 5 to 2.5 V input steps. 109
6-3 Circuit model for the EMI ﬁlter. . . . . . . . . . . . . . . . . . . . . . . 110
6-4 The ﬁtted transfer function is shown in dotted black and the measured data points is shown in blue. The χ2-probability is 98%. . . . . 110
6-5 Full circuit output with output with 2.5 to 5 V and 5 to 2.5 V input steps. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110
6-6 Measurements of S13 waveform (blue) and simulated waveform (dashed black). (a) bang-bang (b) predistorted dt = 1000 ns (c) predistorted dt = 600 ns (d) predistorted dt = 800 ns. . . . . . . . . . . . 112
6-7 Measured waveform (blue) and simulated waveform (dashed black) for electrode S13 with an adjusted DAC model. (a) bang-bang (b) predistorted dt = 1000 ns (c) predistorted dt = 600 ns (d) predistorted dt = 800 ns. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113
6-8 Sideband data during a slow motion split. Each horizontal trace is a different index of the splitting waveform, starting with index 1 at the bottom and reaching index 83 at the top. The difference between the two sideband peaks gives the mode frequency. The vertical bars shows the expected sideband location for a COM frequency of 1.2 MHz (red) and a stretch frequency of 2.1 MHz (green). 115
6-9 Expected and measured axial frequencies during a slow motion split.115 6-10 Simulated spectroscopy after adding various Ez ﬁelds, shown on
the y-axis. The vertical bars show the experimentally measured frequencies at index 15. Based on this scan, an optimal Ez ﬁeld is ∼9.5 V/cm . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 116
6-11 Spectroscopy tuning . . . . . . . . . . . . . . . . . . . . . . . . . . . . 118
16

6-12 Simulated spectroscopy with measured data overlaid. The bars show the measured data. Each horizontal trace represents a different time step along the split, with index 0 at the bottom and index 83 at the very top. . . . . . . . . . . . . . . . . . . . . . . . . . . 119
6-13 Funky potential on the MaxBeta! . . . . . . . . . . . . . . . . . . . . . 120 6-14 The frequency of the four axial modes in a chain of four 40Ca ions
spaced by 5 µm. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 122
17

18

List of Tables
1.1 State of the art experimental demonstrations of ion shuttling operations. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
3.1 A summary of hyperparameters for voltage solving. . . . . . . . . . 58 6.1 Voltages for Ez = 1 V/cm on the MaxBeta, applied at a position of
(x, y, z) = (0, 186.5, 50) µm. Electrode names correspond to positions in Fig 2-4. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 116 6.2 α and β values for a 4-, 5-, and 9-ion 40Ca chain. aFor a purely harmonic potential with an α value conﬁnes an ion at frequency ω0 = 2αq/m. bThe maximum beta value, β0 on our trap is 2×10−7 V/m4. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121 6.3 Voltages for achieving a quartic potential to equally space four 40Ca ions. Elect-
rode names correspond to positions in Fig 2-4. . . . . . . . 122
19

20

Chapter 1
Introduction
Quantum computation with trapped-ions has achieved numerous milestones over the past decades [6, 12]. Single-qubit rotations [9, 25, 2, 20], two-qubit gates [2, 20, 1], qubit state preparation [14] and readout [47] have all been demonstrated with ﬁdelities that approach or exceed the high threshold for fault tolerant quantum computing [49]. Additionally, the long coherence times achievable with trappedions has allowed them to be a front-running physical qubit candidate in the Noisy Intermediate-Sc-
ale Quantum (NISQ) regime [59, 35, 79].
Scaling the current quantum systems beyond the NISQ regime of 50-100 noisy qubits remains a formidable engineering challenge. In trapped-ion systems, multiple ions in a single chain (or crystal) will interact with one another via the Coulomb force. These interactions can lead to experimental challenges as one tries to increase the number of ions in a single chain. Longer ion crystals are harder to control, resulting in a higher rate of decrystallization and increased sensitivity to environmental n-
oise. Furthermore, addressing each ion qubit in a long chain requires an optical system with a complexity that scales unfavorably with the number of qubits. Lastly, long ion chains exhibit tightly packed frequency modes that can lead to crosstalk errors on unaddressed qubits. Quantum gates mediated by the Coulomb interaction must be performed slower on longer chains to avoid these crosstalk errors.
A proposed solution towards scalability that addresses the aforementioned
21

challenges takes advantage of a crucial concept in the development of classical technologies: modularity. Rather than increasing the size of a single ion chain, one may choose to use multiple smaller chains that can communicate quantum information to one another [33, 80]. This modular architecture would increase the number of possible quantum gates while keeping the largest ion chain at a manageable size. A drawback to a modular trapped-ion quantum processor is the time required to communicate bet-
ween ion chains. Any time spent on transferring quantum information decreases the time available for quantum gates before the qubit states decohere. Thus to fully reap the beneﬁts of modularity, one must implement a communication scheme that is reliable and fast, compared to the speed of typical two-qubit gates (∼30 µs) [12].
Multiple methods have been developed for transferring quantum information between ions, including the use of photonic links, lattice arrays, and ion shuttling operations [46, 13, 62]. Ion shuttling operations have gained traction over the past decade and have been experimentally implemented to varying degrees of success, as I will discuss in section 1.2. I deﬁne a "shuttling" operation as controlling the motion of trapped-ions along a speciﬁed trajectory using time-dependent electric ﬁelds. Multip-
le operations fall under the category of shuttling, as I will explain in section 1.2.1.
This thesis will tackle some of the outstanding questions in ion shuttling research: What are the most optimal methods for shuttling ions in state-of-the-art ion traps? What are the required speciﬁcations on our hardware to perform optimal shuttling? In a practical setting with a scalable trap architecture, is there a way to seamlessly integrate shuttling operations in large-scale quantum computing algorithms?
1.1 Ion Array Trap Architecture
One type of ion trap that has demonstrated potential for large-scale quantum computing is the ion array trap or Quantum Charge-Coupled Device (QCCD),
22

Figure 1-1: An illustration of the ion array trap originally from [33]. The segmented electrodes can be controlled to transport ion chains from one region to the next. Some ion qubits may be stored in the "memory region" while others can be transported into the "interaction region" to be used in a quantum gate.
shown in Fig 1-1 [33, 80]. The ion array trap/QCCD consists of radio frequency (rf) electrodes that conﬁne ions in two (radial) dimensions, and segmented "DC" electrodes that provides conﬁnement in the third (axial) direction. The trap electrodes produce potentials that are most often harmonic in the three conﬁnement directions, although more complex, anharmonic potentials have been used and will be discussed in this thesis. The DC electrodes can be individually controlled to produce time-varying -
electric potentials that move ions along the axial direction (drawn as lanes in diagram 1-1). "Waveforms" is the accepted term to describe the time-dependent voltages that are applied to the DC electrodes, and will be used frequently throughout this thesis. The physics of ion motion in this trap architecture will be discussed more thoroughly in Chapter 2.
This ion trap array proﬁtably allows for small ion chains to exist in separated regions, which can each be specialized for a speciﬁc task. These tasks may comprise the various parts of a quantum algorithm, including ion loading, singlequbit rotations, two-qubit gates, memory storage, and state readout.
23

1.2 Ion Shuttling
A qubit is typically encoded in the electronic or spin states of a trapped-ion, which are generally decoupled from its motional state. This is not true, however, during most two-qubit entangling gates, where the motional states of the ions acts as a bus to transmit quantum information. Otherwise, during non-gate times, ion qubits can be physically transported from one register to the next without losing its quantum information [62].
Although the qubit is protected during shuttling operations, there are still constraints to consider when performing shuttling operations. First, we require that the shuttling operation adds minimal excitation to the ion qubit’s motional state because the ﬁdelity of any subsequent gate decreases with ion qubit temperature. One could potentially remove the ion qubit’s excitation by shuttling it along with an ancilla ion1 to sympathetically cool the qubit after shuttling. Sympathetic cooling require-
s the ancilla ion to be of a different species, so the laser frequencies will not interact with the qubit ion, but the motion between the two ions is shared and cooled together. The downside to this strategy is that sympathetic cooling is a slow process (on the order of ms), which greatly sacriﬁces time that could be spent performing quantum gates.
This leads to the second constraint on shuttling, which asserts that the time required to perform shuttling operations should be negligible compared to gate times, for the reasons discussed previously. These heat and time constraints end up intertwined in most trapped-ion systems. Ions naturally become excited over time due to the electric ﬁeld noise from electronics and other anomalous surface effects [65, 10]. Therefore with long shuttling operation times, the ion qubit will experience more moti-
onal excitation from the ion trap, violating the ﬁrst constraint.
Conversely, longer shuttling times typically means the electric potential varies slower in time. In this case, the change in the ion qubit’s Hamiltonian falls under
1an ion that does not encode any quantum information
24

the

adiabatic

regime,

T

dλ dt

λ [71], in other words λ varies only slightly during a

period T of motion. An ion qubit is highly likely to remain in the same eigenstate

after an adiabatic change, ∆H, in the Hamiltonian, so if the qubit starts with no

motional excitation before shuttling, it is likely to end with no motional excitation.

However, shuttling time in the adiabatic regime is many multiples of the ion’s

motional period (which is usually around 1 µs in typical ion traps) and places the

total operation time comparable to ion gate times. Faster-than-adiabatic shuttling

that do not excite the ions is possible, and must be accomplished delicately and with precise control over the changes in the ion qubit’s Hamiltonian2.

These trade-offs between fast and cold shuttling are quite necessary to con-

sider when engineering shuttling protocols with realistic system parameters. The

most optimal shuttling operations do not excite the ion qubits and can be per-

formed as fast as possible, given the speciﬁcations of the electronic control sys-

tem.

1.2.1 Primitive Operations
There are only a few basic shuttling operations that are crucial for achieving modular trapped-ion quantum computation. These are the ability to transport ions from one chain to another, join and remove ions from a chain, and reorder the ions within a chain.
1.2.1.1 Transport
The most common method for transporting an ion is to move the harmonic potential along the axial direction with individually-controlled DC electrodes [27]. Typically one would also like to keep the curvature of the harmonic potential in the axial direction constant throughout the transport operation. Curvature is deﬁned as the second derivative of the potential along a speciﬁed axis; ions placed in a potential with axial curvature α, will experience a frequency of oscillation in
2methods to achieve faster-than-adiabatic shuttling will be discussed in chapter 4
25

the axial direction, ω0, given by,

φ(y)

=

α(y

−

q0)2

=

1 2

m q

ω02(y

−

q0)2

(1.1)

ω0 =

2qα m

(1.2)

where φ is the electric potential in the axial direction (yˆ will be the axial direction in this thesis), q0 is the location of the potential minimum, and q, m are the charge and mass of the ion, respectively.
To vary the harmonic potential, one can simply change the location of the potential minimum, q0, as a function of time. The trajectory, q0(t), is called a transport "proﬁle"—an inﬁnite number of proﬁles are possible, both only a subset are worth considering. Certain proﬁles lead to less ion excitation during adiabatic transport times, while others can lead to no excitation at very speciﬁc transport times in the faster-than-adiabatic regime.
Although we can prescribe any proﬁle we desire, there is no guarantee that we can perfectly achieve this potential on realistic ion trap. We can only apply ﬁnite voltages to a ﬁnite set of segmented electrodes, which vary in shape and layout from one ion trap to the next. Therefore it is important to consider proﬁles that not only lead to fast and cold ion transport, but are also robust against deviations from the desired trajectory.

1.2.1.2 Splitting and Merging Splitting an ion chain canonically requires a fourth order potential [31],

φ(y) = αy2 + βy4

(1.3)

where the coefﬁcients α and β are implicit functions of time. One can start with a purely harmonic potential (β = 0), start decreasing α while increasing β until a "critical point" is reached, in which α = 0 and the ions are conﬁned by the quartic coefﬁcient only. Afterwards α may become to be negative to effectively act as a

26

Figure 1-2: Start of the Figure 1-3: The critical Figure 1-4: End of the split.

split. α ≥ 0, β = 0

point. α = 0, β ≥ 0

α ≤ 0, β ≥ 0

wedge to force the ion chain apart. This process is shown in Figs 1-2,1-3,1-4. A splitting "proﬁle" can thus be achieved by cleverly engineering the coefﬁ-
cient trajectories, α(t) and β(t). Similar considerations of imperfect voltage controls discussed for ion transport also exist for ion splitting. Most notably, a large quartic coefﬁcient may prove to be very difﬁcult to achieve on certain trap architectures [50]. Furthermore, the axial conﬁnement that ion crystals experience in a quartic well is signiﬁcantly reduced compared to a quadratic well [26], and thus a large β value is needed at the critical point to keep the axial conﬁnement high3.
Due to these reasons, it is considerably more difﬁcult to keep the ion conﬁnement constant during a splitting operation than it is during transport. These added challenges are reﬂected in the state-of-the-art experimental demonstrations (Table 1.1), where cold, diabatic transport has been achieved, but splitting below 1 quanta of energy and faster than 50 µs remains an open challenge.
Merging of ion crystals can be achieved by reversing the splitting proﬁle.

1.2.1.3 Reordering
While I will not investigate the reordering of ion crystals in this thesis, this is still a beneﬁcial operation to increase the connectivity in a future trapped-ion quantum processor.
Multiple methods exist for reordering an ion chain, all of which have been demonstrated experimentally. The ﬁrst method is to rotate the ion crystal in a plane, temporarily bringing the crystal out of the axial direction [73, 77, 55, 58].
3it is advantageous to keep the axial conﬁnement high, as will be explained in chapter 4.
27

A second method is to transport ions through a junction and changing the order in which one transports the ions back [80, 6]. Finally, in particular situations where higher levels of motional excitation are acceptable, one can rotate an chain of mixed-species ions by increasing the conﬁnement along the crystal axis, and thereby squeezing the various ion species different amounts, creating a new shape that one can relax back into a linear crystal [8].
The above methods are all considered shuttling operations, however one can also reorder the qubits encoded in an ion crystal without physically shuttling the ions by performing a SWAP operation [69].
1.2.2 State-of-the-Art Experiments
Leading trapped-ion groups have experimentally demonstrated ion shuttling operations to various degrees of success. Ion transport, arguably the most straightforward of the basic primitive operations, has been well executed at fast speeds with low motional excitation. The more complex operations of splitting, transport through junction, and ion crystal rotation, has been successfully performed at slower speeds. Shuttling operations have not only been demonstrated in isolation, but they have also be-
en incorporated within quantum algorithms.
1.2.2.1 Shuttling Demonstrations
A full overview of experimental shuttling demonstrations can be found in Table 1.1. Most of the basic primitive operations have been implemented with lowmass ions. This is partly because lighter ions, such as 9Be+ and 40Ca+, are able to be trapped with smaller voltages than heavier ions due to their high charge-tomass ratio [7, 32]. Linear transport has been demonstrated on diabatic time scales with very low heat gain. Splitting, however, has only been achieved on adiabatic time scales, with singl-
e digit quanta gain. Ion chain reordering has found the most success through crystal rotation, with low heat gain achieved on fast adiabatic timescales [67]. Transport through junctions has been accomplished, but the
28

Experiment
Shuttling Primitives
Ion Chain Reordering
CNOT Gate Teleportation

Operation(s) Transport
Splitting
Rotation
X-Junction Transport, Split/Join

Species 40Ca 9Be
9Be–9Be 40Ca–40Ca 40Ca–40Ca 40Ca–40Ca
9Be 9Be–9Be 9Be, 24Mg 171Yb, 133Ba

Group Mainz [76]
NIST [7] NIST [7] Mainz [63] Mainz [29] Innsbruck [73] NIST [6] NIST [5] NIST [78] Honeywell [58]

Time (µs) 3.6 8 55 80 42 25 350 1000 2980
3000-5000

Heat (quanta) 0.1 0.1 2 4.16 0.05
(0.6, 3.9) 0.1 1.7 — <2

Table 1.1: State of the art experimental demonstrations of ion shuttling operations.

speed of the transport was limited by the heating of the ion from the update noise of the digital-to-analog converter [5, 6].
Some open shuttling problems include, but are not limited to, diabatic splitting of ion chains with less than 1 quanta gained, and the splitting/joining of mixedspecies ions. Lastly, diabatic transport of mixed-species ion chains has yet to be experimentally demonstrated, although there have been theoretical investigations into this problem [51].

1.2.2.2 Quantum Algorithms
Recently, ion trapping experimental groups have been able demonstrate quantum algorithms using ion qubits trapped in a segmented electrode array. NIST and Honeywell Quantum Solutions were each able to combine single- and twoqubit gates, along with fast transport and splitting, to execute a quantum circuit that teleports a CNOT gate with high ﬁdelity [78, 58]. Schmidt-Kaler’s group at the University of Mainz used shuttling operations to create an long-lived Greenberger-Horne-Zeilinger state [30]. A-
verage shuttling operations in these algorithms took hundreds of microseconds and required sympathetic cooling to
29

the ground state, adding a time overhead of a couple miliseconds. While these results show the feasibility of the ion array trap paradigm in a future processor, more work needs to be done to achieve cold, fast, and also robust shuttling operations.
1.3 This Work
The main focus of my thesis is aimed at achieving optimal and robust ion transport and ion chain splitting on surface electrode traps4. Many of the shuttling operations detailed in section 1.2.2 used a multi-layered Paul trap, and it still remains an open challenge to split an ion crystal with less than 1 quanta of heat gain with operation times that approach the diabatic regime (∼10 µs). Ion transport and splitting comprise the majority of the shuttling operations in the recent quantum algorithm -
demonstrations in the NISQ era. Therefore, gaining the ability to perform optimal transport and splitting operations on modern surface electrode Paul traps paves the way for current trapped-ion quantum computers to achieve more quantum gate operations within a single quantum algorithm, thereby increasing the computational power of these NISQ devices. To this end I present a comprehensive simulation pipeline that takes into account previously overlooked system characterizations (e.g. sampling rate -
of our digital-to-analog converters), a method for optimizing voltage commands, and an analysis of the feasibility of achieving shuttling proﬁles on surface electrode traps using leading theories for optimal shuttling (e.g. Shortcuts-to-Adiabaticity).
Chapter 2 will introduce the theory of ion trapping and ion motion in rf Paul traps. Chapter 3 will discuss my numerical simulations of the ion shuttling process in detail. I will also describe the heuristics that I have found useful in solving for voltage waveforms. Chapter 4 will detail the theory behind fast and cold ion transport and splitting. Shortcuts-to-adiabaticity (STA) techniques and Fourier analysis will be discussed in detail. I will also describe my new method for gen-
4Paul traps, as well as surface electrode traps, will be discussed in the next chapter.
30

erating splitting proﬁles that extends the STA method to allow for a wider family of trajectories. Chapter 5 will detail my method to predistort our system’s electrode ﬁltering in order to gain stronger control over our electrode waveforms. Finally, in Chapter 6 I will discuss the ion motion data taken on ion traps to demonstrate the feasibility of our approach. It is my hope that this thesis should serve as a starting reference for new methods of experimentally achieving robust diabatic transport-
 and splitting on surface electrode traps.
1.3.1 Contributions and Publications
My main contributions centers around developing full numerical simulations of the entire shuttling process. These simulation tools have allowed me to begin implementing shuttling operations based on shortcut-to-adiabaticity principles. Through a collaboration with Prof. Gonzalo Muga’s theory group, we have begun investigations into STA solutions that are robust against system imperfections. Using my numerical tools, I have re-framed the shuttling problem into a spectral content analysis and develo-
ped a new approach to achieve cold, diabatic splitting.
I have developed heuristics for voltage solving on our new trap architecture. Experimentally, I have developed ion transport waveforms using STA protocols that use a novel method for optimizing control electrode voltages.
It is incredibly important to note that the design of the MaxBeta trap 2-4 was optimized and laid out by Mr. Jules Stuart. The high-voltage ampliﬁer was designed and built by Mr. Jules Stuart, and the ion trapping and data collection on the MaxBeta trap, presented in chapter 6 was also done by Mr. Jules Stuart.
Some of the work in this thesis has been published in the following article(s):
1. Qi, L., Chiaverini, J., Espinós, H., Palmero, M., & Gonzalo Muga, J. (2021). Fast and robust particle shuttling for quantum science and technology. arXiv e-prints, arXiv-2104. [60]
31

32

Chapter 2 Trapping Ions

Trapped-ion systems allow for some excellent studies of physics [4]. Ion traps can conﬁne anywhere from single ions to large ion clouds for periods of seconds to multiple days, depending on the trap architecture. Ions conﬁned in a trap may naturally reside far from nearby electrodes (on the order of hundreds of microns), allowing them to be well isolated from unwanted electrical forces. The dynamics of ions in various conﬁning traps has been well-known and trap architectures have been developed an-
d applied in various technologies, such as mass spectrometers, since the mid 1900s.
Samuel Earnshaw proved in 1842 that charged particles are unable to be held in stationary equilibrium in 3D using static electric forces alone [18]. This result can be most readily seen using Gauss’s law in free space, which states the divergence of the electric ﬁeld must vanish when there are no electric sources,

∇ · E = 0 = ∇ · (−∇Φst)

(2.1)

where Φst is an electric potential resulting from static electric ﬁelds alone.
One can hope that the static electric potential is conﬁning in all three spatial directions, and model each direction as a harmonic potential with frequency ωi,

33

Φst(r)

=

m 2q

ωx2x2 + ωy2y2 + ωz2z2

(2.2)

Unfortunately, we quickly see from the Laplacian operator in (2.1) that Φst can only be conﬁning in at most two directions and must be anti-conﬁning in at least one direction,

∇2Φst

=

m q

ωx2 + ωy2 + ωz2

=0

(2.3)

Conﬁnement in the third direction is still possible, however, and requires either static magnetic ﬁelds or oscillating electric ﬁelds, which has been well developed as Penning traps and Paul traps, respectively. This thesis will only focus on Paul traps, and introduce a more speciﬁc 2D version used in many quantum computing experiments, known as a surface electrode trap.

2.1 RF Paul Traps
Paul traps, named after Nobel laureate Wolfgang Paul [57], conﬁne ions using radio-frequency electric ﬁelds. The earliest rf Paul traps were based on a quadrupole electrode conﬁguration (Fig 2-1), with an oscillating rf voltage applied on two of the electrodes (rf electrodes) and the other two held at rf-ground (control electrodes). Over the course of a single oscillation period, the rf electrodes will switch between a higher and lower potential compared to the control electrodes, and thus the ion-
 will experience conﬁnement in a different direction.
Intuitively, the ion can be analogously related to a marble on a saddle. A marble sitting on a saddle landscape that is concave in one direction and convex in another will roll down in the anti-conﬁning direction under the force of gravity. If the saddle landscape rotates at a suitable frequency to prevent the marble from falling too far in the anti-conﬁning direction, the marble can actually be held in equilibrium at the saddle point.
34

Figure 2-1: A diagram of a quadrupole trap adapted from [4]. (a) An oscillating voltage is applied to the rf electrodes while the other two are held at rf ground. The ion is located near the center of the trap, where the resulting electric ﬁeld is zero (rf null). The ﬁeld lines show the ion is conﬁned in the radial (xˆ, zˆ) directions. (b) The four electrodes can be extended as rods in the axial (yˆ) direction. The rf ground can be segmented and a DC voltage can be applied, providing axial conﬁnem-
ent to the two ions.
Similar physics allows ions to be conﬁned in a quadrupole trap, however there are stability criteria on the voltage amplitude and frequency of the rf electrodes. Ions with smaller mass-to-charge ratios will experience a greater acceleration at the same voltage and thus require a higher oscillation frequency on the rf electrodes to remain stable. A full treatment of the dynamics of this Floquet (periodically driven) system has been well developed using Mathieu equations [44]. Solving these equation-
s allows one to understand the complete ion motion in a quadrupole trap and is useful for determining the necessary parameters for stable ion trapping.
While the general Mathieu treatment leads to complete solutions of ion dynamics in Paul traps, we can simplify the problem using adiabatic approximations that are valid in a typical well-controlled quantum computing experiment. The adiabatic approximation holds when ions are stably conﬁned near the center of the trap where there is no ﬁeld, known as the "rf null" 2-1. The rf electrodes
35

produce a ﬁeld that oscillates at an appropriate frequency to ensure the ion does not move much during a single period. At any single point in time, the rf ﬁeld strength varies over the length scale of the entire trap, but is roughly constant over the short distance scales of the ion’s motion. We can then treat the oscillating rf electrodes as inducing a ponderomotive force. The resulting oscillating potential can be treated as a static "pseudopotential".

We start the derivation of the pseudopotential with the well-known electric potential of the quadrupole trap shown in Fig 2-1 [28].

Φrf(r, t)

=

κ 2

1

+

z2

− x2 R2

Vrf cos Ωrft

(2.4)

where Vrf and Ωrf are the voltage amplitude and frequency on the rf electrodes, R is the distance from the quadrupole center to the electrodes, and κ is a geometric factor that depends on the shape and positioning of the electrodes. Note that I am only considering the radial directions of the trap, xˆ and zˆ. The spatial and time dependence of the potential can be separated into Φ˜ rf(r) cos Ωrft.

Through the Lorentz force law we obtain that the ion experiences the following

acceleration,

r¨

=

−

q m

∇Φ˜ rf

(r)

cos

Ωrf

t

=

q m

Erf

(r)

cos

Ωrf

t

(2.5)

where Erf(r) is the rf electric ﬁeld.

In a stable trapping conﬁguration, the motion of the ion stays near the center of the trap, |r|, while the spatial dependence of the rf electric ﬁeld varies on the order of the trap size, R. Since |r| R we can divide the motion into small and large length scales, and fast and slow time scales,

r = rs + rµ

r¨

=

r¨s

+

r¨µ

=

q m

Erf

(rs

+

rµ)

cos

Ωrft

(2.6) (2.7)

where rs is the slow, large amplitude (secular) motion and rµ is the fast, small 36

amplitude (mirco)motion1. By deﬁnition |rµ| |rs|, and over the course of a single rf period the secular motion varies slowly, |r¨s| |r¨µ|.
We can thus Taylor expand the electric ﬁeld around rs,

Erf(rs + rµ) ≈ Erf(rs) + rµ∇Erf(rs)

(2.8)

which we can plug back into eq (2.7) to obtain the following ion acceleration,

r¨s

+

r¨µ

=

q m

Erf(rs) + rµ∇Erf(rs)

cos Ωrft

(2.9)

In our adiabatic approximation we can safely say that r¨µ dominates the L.H.S. and Erf(rs) dominates the R.H.S. allowing us to split eq (2.17) into the following two contributions,

r¨µ

=

q m

Erf

(rs)

cos

Ωrf

t

r¨s

=

q m

rµ ∇ Erf

(rs

)

cos

Ωrf

t

(2.10) (2.11)

Erf(rs) essentially remains constant over one rf period, and we can time integrate eq (2.10) to obtain,

rµ

=

−

q mΩ2rf

Erf(rs

)

cos

Ωrft

(2.12)

which we plug back into eq (2.11) to obtain the following secular acceleration,

r¨s

=

−

q2 m2Ω2rf

Erf(rs)∇Erf(rs) cos2

Ωrft

=

−

q2 2m2Ω2rf

∇ Er2f (rs )

cos2

Ωrft

r¨s

=

−

q2 4m2Ω2rf

∇ Er2f (rs )

(2.13) (2.14)

1secular motion and micromotion are the accepted terms and will be discussed in more detail later in this chapter
37

where we time-averaged over the rf period in the last step to get rid of the time dependence.
The time-averaged secular acceleration in (2.14) results from the standard ponderomotive force of oscillating electromagnetic ﬁelds. The electric potential gradient to create this ponderomotive force is what we call our pseuodopotential,

Φps(r)

=

q 4mΩ2rf

Er2f(rs

)

(2.15)

Finally we can use the rf potential of a four-rod quadrupole trap we deﬁned at the beginning of this section (2.4) to obtain the pseudopotential of the quadrupole in terms of rf voltage amplitude and rf frequency,

Φps(r)

=

qκ2Vr2f 4mΩ2rf R4

x2 + z2

(2.16)

Remarkably, we overcome Earnshaw’s theorem and created a potential that is conﬁning both the radial directions, xˆ and zˆ. Modeling the pseudopotential in terms of a standard harmonic oscillator in the radial directions results in the following harmonic frequency,

ωrf

=

√ κqVrf 2mR2Ωrf

(2.17)

We can now set the full electric potential as the sum of the pseuodopotential and static potentials, and also introduce the Hessian matrix of the energy potential, deﬁned as a matrix of second derivatives,

Φtot(r) = Φst(r) + Φps(r),

 ∂2

∂x2

H

≡

 q 

∂2 ∂y∂

x


∂2

∂z∂x

∂2 ∂x∂y
∂2 ∂y2
∂2 ∂z∂y

∂2 

∂x∂z

∂2 ∂y∂z

  

Φ(r)


∂2

∂z2

(2.18)

Recall that the second derivatives are often referred to as the "curvature" of the potential. For any arbitrary electric potential, one can discretize the values in

38

3D space and numerically calculate the Hessian matrix. The eigenvalues, λi, of √
the Hessian matrix can be used to ﬁnd the principle frequencies, ωi = λi/m, while the corresponding eigenvectors point in the direction of the principal axes of motion.
In our case, the full Hessian matrix can be expressed as follows,

 ωr2f + ωx2 0

 0





Htot = m 0

ωy2

0

 

 0

 0 ωr2f + ωz2

(2.19)

where the oscillating rf potential provides conﬁnement in the radial (xˆ and zˆ) directions with a curvature of mωr2f, and the static potential provides positive conﬁnement in the axial (yˆ) direction and may be anti-conﬁning in either of the radial directions.

As long as the pseudopotential curvature is larger than all the anti-conﬁning force from the static potential, then the ion is conﬁned in all three directions. For common trapped-ion quantum computing experiments, the axial frequency is on the order of 100 kHz to 1 MHz and the radial frequencies are typically 5-7 times larger.
The complete Hamiltonian of the ion in a rf Paul trap can now be described as

Hˆ = pˆ2 + 1 m 2m 2

ωr2f + ωx2 xˆ2 + ωy2yˆ2 + ωr2f + ωz2 zˆ2

(2.20)

2.1.1 Surface Electrode Trap
One can imagine taking the quadrupole ion trap we analyzed in the previous section and unfolding the electrodes onto a single plane (Fig 2-2). Ions are still trapped in the radial directions by the rf potential and are localized near the rf null, which is now approximately tens-to-hundreds of microns above the trap surface.
39

Figure 2-2: A schematic of the quadrupole trap being unfolded into a surface trap, adapted from [4]. The rf null is now above the plane of the trap. The rf ground electrodes can be segmented along the axial direction (into the page).
Surface Paul traps behave with the same physics as quadrupole Paul traps, but due to their broken symmetry, there is no longer a clean analytical derivation for the radio-frequency potential analogous to (2.4). For the plethora of possible surface electrode shapes and conﬁgurations, it is generally quite difﬁcult to analytically solve for the resulting electric potential. Therefore it is convenient and accurate to use well-developed numerical simulations and boundary element methods as will be exp-
lained more in section 3.1.
Despite lacking an analytical description, there are many advantages to using a surface trap architecture with segmented electrodes. The core advantage is the ability to fabricate surface traps with state-of-the-art lithographic techniques. This has drastically improved scalability of ion traps because manufacturing with industrial lithographic processes and CMOS foundries is highly repeatable and has been well developed for the world’s electronics. Another advantage of surface traps is that they -
have a smaller form factor, allowing for complex and customized electrode geometries. It is much easier for an ion trapper to fabricate an electrode array of trapping sites that could be used for parallel quantum operations using a surface trap architecture. Finally, there is ongoing work to integrate optical and electronic devices directly on-chip, with the hopes of matching the technology requirements to control more ion qubits [70, 68].
While surface electrode traps opens the door for new engineering innovations,
40

there are some technical challenges worth mentioning here. The ﬁrst is that the trap depth (how much energy an ion can gain before breaking out of the trap) of surface architectures are generally lower than 3D ion traps. This means that ions are more susceptible to background gas collisions and external noise sources2. Furthermore, compared to 3D quadrupole traps, the validity of the pseudopotential approximation on surface traps breaks down closer to the rf null and there are greater anharmonicit-
ies of trapping potentials. The fundamental reason for lower trap depths and greater anharmonicities is due to the fact that electrodes in a surface trap are constrained to lie in a single plane. These challenges are not deal-breakers, however, and can often be accounted for with careful simulations of trapped-ion experiments on surface traps.
Figure 2-3: An diagram of the Standard Lincoln Trap. Each electrode has a name and corresponding number. The pitch of the DC electrodes 2–8, and 13–19 is 120 µm. Electrodes 10 and 11 serve to ﬁnely adjust the orientation of the ion’s principle directions. yˆ is the axial direction.
The DC electrodes of surface traps can be "inner segmented", meaning they lie between the rf electrodes, or "outer segmented", they lie outside the rf electrodes.
2although placing the trap in a cryogenic environment and high vacuum helps reduce ion heating
41

The Standard Lincoln Trap, shown in Fig 2-3, is an outer segmented trap, while the MaxBeta Trap, Fig 2-4, is an inner segmented trap. Ions are located closer to the DC electrodes on inner segmented traps, which means they are more sensitive to voltages applied on the electrodes. While this allows for large axial trapping potentials, the ions may be more sensitive to electric ﬁeld noise. The MaxBeta Trap was optimally designed to be able to produce a large quartic conﬁnement, which I will show to b-
e useful for splitting ion chains [50].
Figure 2-4: A diagram of the MaxBeta trap. Same coordinate system as the SLT 23. Position y = 0 µm is right between electrodes S10 and N10. 45 µm pitch on the smaller electrodes, and 74 µm on the larger electrodes. The rf electrodes lie on the outside of the DC electrodes. Electrodes S22, S23, S24, S25 serve to tilt the ion’s principle directions.
2.2 Motional Dynamics
We see from (2.6) in the previous section that the motion of an ion in a rf Paul trap can be split into two components: a small amplitude, fast oscillation at the rf frequency (known as micromotion), and a larger amplitude, slow oscillation resulting from time-averaging the rf potential (known as secular motion).
2.2.1 Micromotion
Let us brieﬂy discuss micromotion, which can often be neglected in most trappedion quantum computing experiments, because it is in best interest of experimen-
42

talists to calibrate the trap to minimize the ion’s micromotion. This process of micromotion compensation requires a precise cancellation of any stray ﬁelds that can force the ions away from the rf null [3]. The amplitude of the ion’s micromotion grows with the distance away from the rf null. As the micromotion amplitude grows, the pseudopotential approximation breaks down, since the ion no longer experiences a spatially-constant force during a rf period. If the amplitude continues to grow, the io-
n will no longer satisfy the stability criteria predicted from the Mathieu equation, and can escape the trap. Thus, it is advantageous to compensate for micromotion at the start of any trapped-ion operation.

2.2.2 Secular Motion

When micromotion is well compensated, the resulting secular motion essentially behaves as a standard quantum harmonic oscillator, with angular frequencies given by the curvature in (2.19). The following form for a harmonic oscillator Hamiltonian and energy spectrum is very well known,

Hˆ = ∑
i

pˆ2i 2m

+

1 2

mωi2

qˆ2i

,

En = h¯ ω

n+ 1 2

(2.21)

where n an integer representing number of excited states above the ground state. Since the energy spectrum is an equally-spaced ladder with separation h¯ ω, we can conveniently work with the quantum states corresponding to each rung, |n . These set of states form a complete basis for the harmonic oscillator Hamiltonian and are known as Fock states.

We can introduce creation and annihilation operators that step from one Fock state to the next,

aˆ =

mω 2h¯

qˆ

+

i mω

pˆ

,

aˆ† =

mω 2h¯

qˆ

−

i mω

pˆ

43

(2.22)

which act on the Fock basis in the following way,

√ aˆ |n = n |n − 1 ,

aˆ† |n

√ = n + 1 |n + 1

,

aˆ |0 = 0

(2.23)

There are a few states beyond the Fock state that are worth mentioning. The ﬁrst is a coherent state. These states arise when the ground-state harmonic oscillator wavefunction is displaced from the trap minimum, described by the following displacement operator,

Dˆ (α) = exp αaˆ† − α∗aˆ , |α = Dˆ (α) |n = 0

(2.24)

where α is a complex number representing the location of the coherent state |α in (q, p)-phase space.
A coherent state is said to be most similar to a classical state because the position and momentum expectation values evolve as a classical particle would under a harmonic oscillator with frequency ω. We can thus describe the quantum dynamics of coherent states using the simpler language of classical mechanics. A coherent state is a delicate balance of Fock states, however, and the probability of measuring a coherent state in any single Fock state, Pn = | n|α |2, is given by a Poisson distribution-
 with mean value n¯ = |α|2,

∑ |α = √αn e−|α|2/2 |n ,
n n!

Pn

=

|α|2n e−|α|2 n!

(2.25)

The second state worth mentioning is a thermal state, which is an incoherent distribution of Fock states. An ion tends to fall into a thermal state after many random excitations from various noise sources; in other words the ion "heats up". We can say the ion is in equilibrium with a thermal reservoir at temperature T and will follow a Boltzmann distribution over the Fock states,

Pn

=

e−βEn Z

=

e−βh¯ ω(n+

1 2

)

Z

44

(2.26)

where β = 1/kBT, kB is the Boltzmann constant, and Z is the partition function

over all Fock states:

∑ Z

=

∞

e−βh¯ ω

(n+

1 2

)

n=0

=

e−βh¯ ω/2 1 − e−βh¯ ω

(2.27)

which simpliﬁes (2.26) to,

Pn = e−βh¯ ωn

1 − e−βh¯ ω

=

(n¯

n¯ n + 1)n+1

where n¯ is the average number state given by,

(2.28)

∑ n¯

=

∞
nPn
n=0

=

1 eβh¯ ω − 1

(2.29)

Finally, squeezed states are also interesting quantum states that have a variance of one variable reduced below the Heisenberg uncertainty limit, while the variance of the conjugate variable is expanded. I will not be using squeezed states in this thesis but they are being investigated in the context of continuous variable quantum computing with trapped-ions [45].

2.2.3 Normal Modes

So far we have only considered the dynamics of a single ion in an externally applied potential. To analyze a chain of N-ions in a Paul trap, we must also take into account their Coulomb interactions with all the other ions in the chain. For the j-th ion in the chain, we can write the Hamiltonian as follows,

∑ Hˆ j

=

p2j 2mj

+ Φtot(rj)

+

1 4π

0

i=j

qiqj |ri − rj|

(2.30)

where Φtot is the sum of static and pseudopotentials in the Paul trap (2.18). This

gives us a new effective potential for each ion that includes all N − 1 Coulomb

interactions,

∑ Φe(jf)f

=

Φtot (r j )

+

1 4π

0

i=j

qiqj |ri − rj|

(2.31)

45

Analytically solving for all N Hamiltonians is quite difﬁcult but we can work in the limit of small oscillations around the chain equilibrium. In this limit, all N ions are close to their effective potential minimum. The gradient of effective potential on each ion vanishes and the effective potential is approximately harmonic, allowing us to deﬁne our Hessian curvature matrix as we did in (2.19), except this time H is a 3N × 3N matrix. If N is large, we might be inclined to numerically determine e-
ach effective potential, Φe(jf)f, populate the Hessian matrix, and numerically ﬁnd the eigenvalues and eigenvectors.
For N ions, there will be N modes in each principal direction for a total of Nmode = 3N modes. Note that we are free to analyze each principal direction individually, with the axial mode being the simplest choice because ion crystals are usually linear in the axial direction. For two identical ions, the two axial modes are typically called the "COM" and "stretch" modes. In an axial harmonic potential
√ with frequency ω0, the two mode frequencies are ωCOM = ω0 and ωstr = 3ω0. Analytical calculation for longer ion chains become more intense, but has been done for a three-ion mixed-species chain [11]. In general, numerical simulations are signiﬁcantly simpler.
2.3 Electrical Controls
The electrical control system provides proper voltages to our electrodes and consists of a combination of custom-built electronics and commercially available hardware.
Voltages applied to the DC electrodes provide the electrostatic conﬁnement in the axial direction. The Advanced Real-Time Infrastructure for Quantum physics (ARTIQ) hardware system developed by M-Labs provide the gate control signals to our digital-to-analog converters (DACs). Currently, our system runs M-Labs’s Sinara 5632 DAC, affectionately named "Fastino", which has 32 16-bit channels with an update rate of 2Mbps. The Fastino outputs a voltage range of ±10 V, with a settling time of 1 µs, and -
a slew rate of 17 V/µs.
46

The next stage after the Fastino is a custom-built high-voltage ampliﬁer with a DC gain of 4 and a cutoff frequency around 1 MHz with a roll-off of around 27 dB per decade3. The high-voltage ampliﬁer is designed around the LTC6090-5 op-amp which has a 21 V/µs slew rate.
After the x4 ampliﬁcation, the voltage signals are sent through two low-pass ﬁlter stages. We low-pass ﬁlter our control electronics to avoid high frequency electrical noise that can induce motional excitation to the ion. A recent standard for an acceptable noise level at the ion’s secular frequency is less than 1
√ nV/ Hz [68]. The ﬁrst stage is a third-order Butterworth PI ﬁlter with a cutoff frequency of 100 kHz. The second stage occurs after routing to an Octagon board and is a simple RC ﬁlter with a cutoff of 89 kHz.
Figure 2-5: A schematic of the rf ampliﬁcation circuitry, created by Mr. Jules Stuart.
The voltage control system to the rf electrodes is shown in Fig 2-5. The rf signal source is provided by a digital synthesizer, which then gets ampliﬁed and sent to the rf resonator for large ampliﬁcation before getting sent to the rf electrodes on the trap. We typically drive our rf electrodes at 50 MHz and 70 V to trap 40Ca ions.
3designed and sent for manufacturing by Mr. Jules Stuart
47

48

Chapter 3
Numerical Simulation Pipeline
We model each step of an ion shuttling experiment using numerical simulation tools written in Python and SPICE [48].
Figure 3-1: An diagram of the ion motion experiment process. The gold boxes denote the input and output of our system. We care about ﬁnding the best voltage inputs to shuttle ions optimally.
The boxes in Fig 3-1 denote the physical steps of shuttling ions while the arrows denote our software tools to model each stage. Our electrode controls start with our input digital-to-analog converters (DACs), which gets low pass ﬁltered and ampliﬁed by our electrode circuitry, resulting in an electrode voltage response. We simulate this response using an integration software package LTSpice. The electrode voltages on our surface trap then generates an electrostatic potential the depends on the si-
ze and shape of each electrode. We use our custom written potential solver called Ion Trap Voltage Generation (ITVG) to solve for 3D potential from electrode voltages and vice versa. Finally, I have written
49

an differential equation solver using the Python packages NumPy and SciPy that can solve for the ion’s dynamics in a time-dependent electric potential [24, 74].

3.1 Modelling the Surface Electrode Trap
A crucial component to simulating the time-dependent 3D potentials on an surface electrode trap is creating an accurate model of the trap electrodes. Typically, one is interested in the unit potentials of each electrode—in other words, what is resulting 3D electric potential after applying 1V to a single electrode while grounding all the other electrodes? Because our ion traps have length scales of hundreds of microns to millimeters and there are a ﬁnite number of electrodes, it is convenient to d-
iscretize the electrostatic unit potential φ˜i(r) into a 3D grid, which we save as a "grid ﬁle".
There are multiple methods to accurately simulate these grid ﬁles, including proprietary multiphysics software such as COMSOL, boundary element methods, and the Biot-Savart law for electrostatics [71]. These methods do indeed lead to comparable unit potentials if done carefully. Mr. Jules Stuart used ﬁnite element methods in COMSOL to simulate the grid ﬁles for both the Standard Lincoln Trap and the MaxBeta trap, which have been depicted in 2-3, 2-4. I should note that the process of solving for u-
nit potentials, φ˜i(r), on the DC electrodes must also be extended to the rf electrodes, φ˜rf(r), because the geometry of surface traps no longer allow a clean analytical solution for the rf potential (2.4).
The rf potential now is the product of the rf voltage and the rf unit potential,

Φrf(r, t) = Vrf φ˜rf(r)

(3.1)

Apply the pseudopotential approximation for a general rf potential (2.15) leads to the following rf pseudopotential,

Φps(r)

=

q 4mΩ2rf

(Vrf

∇φ˜rf(r))2

50

(3.2)

Once all the trap electrode grid ﬁles have been created, solving for the total applied potential is simply a superposition of the static electrode grid ﬁles plus the pseudopotential from the rf electrode grid ﬁle (3.2),

N
Φtot(r, t) = ∑ Vi(t) φ˜i(r) + Φps(r)
i

(3.3)

where Vi(t) is the voltage on the i-th electrode, and N total DC electrodes.

Note that the time dependence of our total applied potential (3.3) comes not from the rf electrodes, but from the changing voltages applied to the DC electrodes. The set of electrode voltages Vi(t) are called "waveforms" and they must be delicately choreographed to perform optimal ion shuttling operations.

3.2 Solving for Voltage Waveforms
In ion shuttling experiments, we typically start with a carefully designed electrostatic potential Φtot(r, t)1 and work backwards to solve for suitable electrode waveforms Vi(t) to achieve such a potential. The process of solving for N waveforms from a single target potential is an ill-posed inverse problem as there is no guarantee of a unique optimal solution. To narrow down this inverse problem one can add constraints and assumptions, in a process called regularization, to reﬂect what we observe-
 experimentally, such as electrode voltage bounds and waveform smoothness.
We can formulate the constraints and degrees of freedom into the language of matrices. It is convenient to deﬁne a voltage vector and unit potential vector as such,
1Techniques for designing optimal shuttling protocols will be discussed in chapter 4
51

V T ≡ V1(t) V2(t) . . . VN(t)

(3.4)

φT ≡ φ˜1(r) φ˜2(r) . . . φ˜N(r)

(3.5)

It follows that the electrostatic part of the total applied potential is the dot product of our voltage and unit potential vectors

Φst(r, t) = φT · V

(3.6)

φ is well known from our trap electrode simulations but it is difﬁcult to solve for voltages V as (3.6) is currently underdetermined—there is one target potential Φtot(r, t) but N degrees of freedom in V . To better constrain our inverse problem, we may Taylor expand our desired electric potential around some deﬁned expansion point, r0. While we can expand the applied potential at any point near the trap, it is convenient to do so at the rf null.
Once we have chosen a suitable expansion point, we may begin writing down the Taylor coefﬁcients of our target potential Φtot. Let us declare, without loss of generality, that our expansion point is also the location of the conﬁned ion. In this case, the ion should experience zero electric force and the three ﬁrst derivatives of our potential, Φtot, should be zero,

∇Φtot(r0) =. 0

(3.7)

where we have used =. to denote a constrained equality, rather that a natural

equality resulting from physics.

Next, we may constrain the nine second derivatives of the Hessian matrix (2.18).

However, only six of those constrains are independent because the second deriva-

tives of the potential commute (i.e.

∂2 ∂x∂y

=

∂2 ∂y∂x

).

Since the Hessian matrix is

populated with second derivatives of xˆ, yˆ, and zˆ, there is an implicit coordinate

system deﬁned in which to evaluate these derivatives. If one chooses to constrain

52

the off-diagonal derivatives to be zero, as such,





ω˜ x2 0 0

H(r0)

=.

 m


0

ω˜ y2



0

 





0 0 ω˜ z2

(3.8)

then the principle axes that conﬁne the ion are aligned with the coordinate system

of the Hessian.

If one wanted to conﬁne the ion along different principle axes (e.g. to rotate the ion’s radial directions by some deﬁned tilt angle), they may simply constrain the off-diagonal derivatives to the proper non-zero value. The Hessian matrix can always be diagonalized to ﬁnd the curvatures (eigenvalues) and principle axes (eigenvectors).

Higher order derivatives of the potential can also be constrained2, and in general the only limit to the number of constraints is the number of degrees of freedom in our system, which is set by the number of electrodes whose voltages we can vary. In order to conveniently formulate all these derivatives into a single, k × 1, constraint vector, C, we must introduce an operator to take the derivatives we want to constrain,

PT ≡

∂ ∂x

∂ ∂y

∂ ∂z

∂2 ∂x2

∂2 ∂x∂y

∂2 ∂x∂z

∂2 ∂y2

∂2 ∂y∂z

∂2 ∂z2

...

(3.9)

where P is a k × 1 vector, and k represents the number of desired constraints. To get the contribution of every electrode potential to each constraint, we must apply the derivatives in P (3.9) to the unit potentials (3.5) and multiply by the electrode voltage (3.4). Our constrain vector is the sum of all electrode contributions for each derivative constraint. We can formalize this using the following outer product with our unit potential vector (3.5),

2it will be advantageous to do so in the case of splitting, as we shall see in 4.2
53



∂φ˜1 (r0 )
 ∂x





P

⊗

φT(r0)

=

 ∂φ˜1(r0)

 

∂y



 ...

∂φ˜2 (r0 ) ∂x
∂φ˜1 (r0 ) ∂y
...


. . .  
. . .  
...

(3.10)

where the tensor product leads to a k × N matrix and all derivatives are evaluated at the expansion point, r0.
Finally, our constraint vector is the sum of all the derivative contributions from the DC electrodes and the rf electrodes (3.2),

P ⊗ φT(r0) · V + P Φps(r0) = C

(3.11)

Equation (3.11) is the ultimate formalism of the inverse problem. P, φT, and Φps are well known, and C is deﬁned by the experimentalist to according to their desired target potential, Φtot(r, t). We must now invert the problem to solve for the waveforms V .
There are two closely related methods for solving this formulation of the inverse problem: singular value decomposition (SVD) and linear least-squares optimization (LLS). While the SVD method applied on a perfectly-matched problem (number of constraints equals the degrees of freedom) may result in voltage sets that exactly achieve the target potential, additional constraints such as voltage limits are unable to be included.
While SVD attempts to be an exact process, it can easily be "poorly conditioned". LLS seeks to ﬁnd a locally optimum V that minimizes the error in C. Because this method is attempting to minimize a cost function, LLS allows the user to add constraints that are more practical rather than necessitated by physics, but can greatly improve the resulting waveforms. Such extra constraints includes voltages stay within a speciﬁed bound (we are limited to ±40 V by our electronics), voltages vary smoothly f-
or nearby trapping positions, voltages are not extraneously large, and a weighting factor to bring out the importance of select
54

constraints (e.g. axial frequency ωy). Although we are usually guaranteed to get a reasonable voltage set using the LLS method, it is not guaranteed that the voltage set is the globally optimal set to achieve the target potential. It may be a locally optimal set given the constraints we have decided to implement in our cost function. Therefore it is important to run simulations of the waveforms through the rest of my numerical pipeline to understand the errors in the resulting potential Φtot.
With all these considerations LLS has been the preferred voltage solving method in this thesis.
3.2.1 Ion Trap Voltage Generation
The formulation above is implemented numerically in Python in our Ion Trap Voltage Generation (ITVG) script. At its very core, ITVG maps between electrode voltages and electrostatic potential in both the forwards (V → Φtot) direction according to (3.3), and backwards (Φtot → V ) direction according to (3.11).
3.2.1.1 Calculating Potentials
In the forwards direction, one can simply superpose electrode voltages with unit potentials according to (3.3) to obtain the full electrostatic potential in position space. It is worth noting however that the resolution of the electrostatic potential is limited by the resolution of the system’s grid ﬁles since we can calculate the full potential only at the positions that we’ve modeled the electrode potentials. Usually the electrostatic potential does not vary faster than the grid ﬁle resolution s-
o it is safe to spline interpolate between the calculated positions.
A second method of calculating the full potential in the forwards direction is to use the coefﬁcient formalism (3.11) but solve for C given V , rather than inverting the problem3. Often times in ion shuttling experiments, one prefers to describe the full potential by the trajectory of a selected subset of coefﬁcients in
3I call this the "forward ITVG" method
55

Figure 3-2: A harmonic potential on the MaxBeta trap at 186.5 µm. Grid ﬁle resolution is 1 µm. A quadratic potential is taylor ﬁtted (red) on the potential calculated with superposition (blue dots). The potential is also calculated through coefﬁcient expansion, with great agreement.

Figure 3-3: A double well potential centered at 186.5 µm. The superposed potential (blue dots) and coefﬁcient expansion potential (dashed green) differ further from the expansion point. The coefﬁcients from forward ITVG and taylor ﬁtting the superposed potential (dashed red) differ by 12%.

parameter space4. Thus this method has the advantage of directly solving for potential coefﬁcients and allows one to avoid numerical interpolation.
However this coefﬁcient expansion method also has a disadvantage of being sensitive to the expansion point. Taylor expansions work well locally to a given point but becomes less accurate further out. This usually is not an issue with harmonic potentials, where the ion are located near the potential minimum, but becomes a consideration with anharmonic potentials such as those used in splitting ion chains. The splitting potential shown in Fig 1-4 can be described by a fourth order potential at the c-
enter of the ion chain. As the potential becomes a double well and the ions are split apart, the accuracy of the Taylor expansion suffers and the ions can experience a potential that is different from our simulation.
We can compare these two potential solving methods for a single harmonic well and a quartic, double well conﬁguration shown in Figs 3-2, 3-3. For both potentials, the expansion point for the coefﬁcient potential solver was at an axial position y = 186.5 µm. In the single harmonic potential 3-2, the discretized potential and the coefﬁcient expansion potential are equivalent. In the double well
4The trajectories of potential coefﬁcients are typically referred to as a "protocol" or "proﬁle"
56

potential 3-3, the agreement is strong near the expansion point but starts to fall off around 15 µm away.
Choosing between these two potential solving methods make no difference when calculating transport potentials because purely harmonic potentials can be expanded at the potential minimum, where the ions are localized. However, this choice will have an impact on calculating splitting potentials. As ions in a double well conﬁguration become more separated from the expansion point, the coefﬁcients from forward ITVG become less accurate in describing the potential near the actual positions of the ion. -
To more accurately solve for the electric potential during a split, I recommend using the superposition method and spline interpolating between the points of calculated potential.
3.2.1.2 Calculating Voltages
For the backwards problem, ITVG uses linear least-squares optimization to solve the inverse matrix equation (3.11). More speciﬁcally, ITVG implements a Sequential Least Squares Programming (SLSQP) algorithm written in SciPy [34]. There are two main considerations when solving for voltages, which are especially important for shuttling waveforms that should be smooth throughout the trap: hyperparameters and heuristics.
Hyperparameters are additional, tunable inputs to improve the performance of the optimization cycle. A summary of hyperparameters and their functions can be seen in Table 3.1. All the hyperaparameters and heuristics in this section are implemented speciﬁcally in ITVG.
Since the inverse problem of determining voltages is ill-posed, there may be multiple voltage sets that generate an equally desirable potential. If the optimizer has a difﬁcult time choosing between these degenerate solutions, the resulting waveform may look like it is jumping between two possible solution sets, shown in 3-4. I have found that the eps and ftol values have a large effect on resulting waveforms. Decreasing eps allows for a ﬁner search in voltage space. SLSQP sequentially changes eac-
h component of V by the eps value and evaluates the
57

Name

Typical Value

Function

eps ftol

1×10−12 1×10−27

Step size used for numerical approximation of the Jacobian. Precision goal for the value of f in the stopping criterion.

bounds

±40

Search space bounds (limited by our system’s voltage range).

norm

np.ones(k)

A weighting vector for the k constraints.

fit_range (5, 10, 5) · 1×10−6

(x, y, z) range for calculating the potential coefﬁcients.

Table 3.1: A summary of hyperparameters for voltage solving.

resulting cost function to determine gradients using ﬁnite differences. The gradients of each component are then used to update the voltage V values and the process iterates again. This is a standard practice of gradient descent algorithms. Increasing or decreasing the ftol parameter by a few orders of magnitude may help choose one degenerate set over the other.

Figure 3-4: Transport waveforms on the SLT. The voltages ocassionally hop between two solution sets that have similar cost function values.
The weighting of constraints, norm, is by default a k × 1 unit vector and gets multiplied by the constraint error in the cost function evaluation. We are free to change speciﬁc components of the weighting vector to increase or decrease
58

their relative importance.

I have found that weighting the axial coefﬁcients

∂ ∂y

and

∂2 ∂y2

by

10

or

100

has

helped

nail

down

the

axial

conﬁnement

of

the

transport

potentials.

Finally, ITVG uses a ﬁt range parameter to calculate derivative matrix (3.10).

Decreasing this parameter allows for a more accurate potential calculation near

the expansion point, while increasing the parameter allows the potential to be less

accurate locally, but more accurate over a longer spatial range.

Heuristics are the ways in which we set up our optimization problem. We may

choose to initialize the starting point of the SLSQP algorithm with the previously

calculated voltage set (by setting independence to True). This is a decent assump-

tion for shuttling waveforms where we expect electric potentials that are close to

each other in space to be created by similar voltages.

For constrained inverse problems, the best performance occurs when we are

perfectly constrained the number of constrains is close to the number of degrees

of freedom. We have the option of choosing both the constraints on our potentials

and the electrodes that will be supplying the potential. I have found the best

results from when the number of constraints is equal to or slightly larger than the

number of free electrodes (slightly overdetermined regime). We may choose the

free electrodes to be the ones closest to the ion’s position along the trap.

All these hyperparameters and heuristics require a moderate amount of trial

and error to perform. In general solving for waveforms has many approaches

and a tight loop to evaluate the resulting waveforms in simulations—or even in

experiments if possible—leads to faster feedback and a better understanding of

optimal waveforms.

3.3 Electrode Circuit Simulation
Another stage of the simulation pipeline is the simulation of the electrode circuitry, shown as the ﬁrst leg in Fig 3-1. This stage is essential because the low pass ﬁltering on the ion trap system distorts inputs such that the electrode volt-
59

ages V is no longer what we apply. Our simulation is done in LTSpice using a model for the Fastino and the high-voltage ampliﬁer designed by Mr. Jules Stuart. Our inputs are discrete voltage steps on our DACs, which are modelled as piece-wise linear functions.
It is quite important to be able to invert this ﬁltering process in order to ﬁnd the proper voltage inputs to achieve a target V . The process for this inversion is called "predistortion" and is detailed in chapter 5. Especially with fast input waveforms, it is important to have an accurate model of the ﬁltering ampliﬁcation in order to conﬁdently predistort voltages. We have collected data to accurately determine our ampliﬁer and ﬁltering system, and will be discussed in section 6.1.
Figure 3-5: An example of a time-domain simulation of electrode ﬁltering with LTSpice. The input signal is shown as piece-wise linear discrete step function (blue). The circuit output is shown in orange. The dashed black line shows a target waveform for this electrode.
3.4 ODE Solver
Finally, the last stage of the simulation pipeline is a classical ion trajectory simulator. I wrote in Python an initial value problem solver that can determine the trajectory of multiple ions in a time-dependent electric potential. This solver uses
60

the Runge-Kutta method of order 5 [17] to integrate the following equation of

motion,

∑ y¨i

=

qi mi

−

∂ ∂y

Φtot

+

1 4π

0

j=i

|yj

qj −

yi|3

(y

j

− yi)

(3.12)

where yi, qi, mi are the axial position, charge, and mass of the i-th ion, and Φtot is is given by (3.3). Note that my simulation uses the pseudopotential approximation

for Φtot and does not take into account the radial modes. This means I only solve

for the dynamics of the ion’s secular motion in the axial direction, an example of

which is shown in Fig 3-6.

Figure 3-6: Simulation of the trajectory of 88Sr under a harmonic oscillator moving with protocol shown in dashed black. Ion position relative to the potential minimum shown in blue and uses the right-hand y-axis scale. The ion’s motion during the "heat calculation window" is used to determine the motional excitation after transport
Also note that this calculation is a classical treatment of the ion’s dynamics. It has been accepted throughout literature that the classical and quantum dynamics in time-dependent shuttling Hamiltonians are the same [27, 60]. We care about the motional excitation of the ions after shuttling operations, and thus we can quote the classical energy gained after shuttling by analyzing the ion’s oscillation
61

at the end of shuttling,

n¯ h¯ ω(T)

=

1 2

mω(T)2

A2

(3.13)

where n¯ is the excitation of the ion in the quanta of harmonic oscillator ener-

gies, ω(T) is the axial frequency at the end of transport, and A is the amplitude of oscillation. For shuttling operations on a N-ion chain, there may be N axial

modes that are excited. To determine the motional excitation of any single mode,

I Fourier transform the ion’s ending motion, bandpass ﬁlter around the mode

frequency, Fourier transform back to the time domain, and apply (3.13) on the

resulting mode oscillation.

I actually implement two types of simulation that use different methods for

calculating Φtot(y, t). The ﬁrst method uses a Taylor expansion for Φtot(y), with coefﬁcients that are spline interpolated in time and calculated using "forward ITVG". This assumes an analytical form of Φtot(y). The second method uses Φtot(y) calculated by superpositions of electrode voltages, which I then spline interpolate along the axial direction as well as in time. This method is better suited

for handling non-harmonic potentials, like those found in splitting operatinos.

Both

methods

use

a

central

difference

formula

to

calculate

∂ ∂y

Φtot.

My

ODE

solver

allows us to analyze arbitrary potentials, ﬁnd the dynamics of ion chains of arbi-

trary length and species, and serve as a baseline for ion motion experiments.

My numerical tools also allow one to calculate dynamics for which analytical

solutions are difﬁcult to ﬁnd. One example is motional dynamics of long ion

chains. Analytically calculating the normal modes for N-ions is difﬁcult in general

but using numerical integration and Fourier transformations it becomes a breeze.

The three mode frequencies in the axial direction have been analytically solved for a linear chain consisting of 43Ca–86Sr–43Ca5 [11]. The in-phase, stretch, and

alternating modes are 1.209×, 2.449×, and 2.818× the frequency of the middle 86Sr ion.

To numerically simulate this system, I calculate the potential curvature needed

5This choice of ion species was somewhat arbitrary. I wanted to choose a chain not often seen experimentally.

62

to keep 86Sr conﬁned at 1 MHz, according to,

∂2 ∂y2

Φtot

=

α

=

mω02 2q

(3.14)

Once α is determined, I place the three ions in a harmonic potential given by,

Φtot = αy2

(3.15)

and minimize the total energy of the three ions to ﬁnd their equilibrium position. I shift the ions away from the equilibrium position by a few percent and then run my ODE solver. I then Fourier transform the resulting motion, shown in Fig 3-7.

Figure 3-7: An FFT of the 43Ca ion located an a harmonic potential and interacting with a 43Ca and 86Sr ions.
The location of the peaks occur at 1.208 MHz, 2.449 MHz, 2.818 MHz, which is within 1 kHz of the analytically calculated frequencies. While my integration can be painlessly extended to longer ion chains, it is not so obvious how to scale analytical solutions.
63

64

Chapter 4
Optimal Ion Shuttling
There are an inﬁnite number of trajectories by which an ion trapper could vary a time-dependent electric ﬁeld, but in this chapter I present theories to ﬁnd trajectories that lead to optimal ion shuttling.
In the most basic sense, optimal shuttling operations are fast and cold. Shuttling operations should not excite the motional state of the ion qubit to protect the ﬁdelities of subsequent quantum gates. Operations that add more than a single quanta of motional energy will require laser cooling, which is slow and can destroy the ion’s qubit if performed incorrectly. We would like shuttling operations to be as fast as possible, but our speed is limited by the update rate of our voltage input system (-
2 Mbps). The axial frequency of ions in surface electrode traps is comparable with the frequency of an average digital-to-analog converter (∼1 MHz). Thus, shuttling operations that use a few update rates will lead to times of just a few oscillation periods, well within the diabatic regime of the ion. We can more rigorously declare that optimal shuttling operations are to be performed by a few voltage commands while not exciting the motion of ions.
The theory for optimal ion transport and splitting has been well laid out. However, robustness against electric ﬁeld noise, electrode ﬁltering, and anharmonic trapping potentials must also be a consideration when implementing optimal shuttling techniques on surface traps.
65

4.1 Transport Proﬁles
We now begin designing the transport proﬁles, q0(t), introduced earlier (1.1). Although the classical and quantum dynamics of ion motion under certain transport protocols has been well developed, numerical simulations allow for the evaluation and optimization of any arbitrary proﬁle [27, 64, 61]. Without loss of generality we can analyze transport from 0 to d with a transport time of T and thus constrain the ends of transport.

q0(t ≤ 0) = 0, q0(t ≥ T) = d

(4.1)

Common transport protocols include linear, sinusoidal, hyperbolic tangent, which are formulated in (4.2a), (4.2b), (4.2c) respectively.

q0(t)

=

d

t T

q0(t)

=

d 2

1 − cos

t πT

q0(t)

=

d 2

tanh

N

2t−T T

+ tanh N

tanh N

(4.2a) (4.2b) (4.2c)

where N is a parameter that controls how smooth the beginning and ends of transport are. The larger the N value, the more the acceleration is concentrated in the middle of transport. These proﬁles are shown in Fig 4-1.

We observe from Fig 4-1 that linear and sinusoidal transport have acceleration kicks at the beginning and end of transport, while most of the acceleration for the hyperbolic tangent transport occurs in the middle. It is possible to take advantage of the acceleration kicks by perfectly timing the transport time such that the ending kick removes the motional excitation incurred from the starting kick. This happens at every odd half-periods of the harmonic trap period,

T = 2π n + 1

(4.3)

ω0

2

66

Figure 4-1: Various transport proﬁles plotted in black. Acceleration determined using numerical derivatives, plotted in red and using the right-hand scale.
where n is a natural number. Indeed, we observe periodic transport times where linear and sinusoidal transport leads to low motional excitation 4-2.
While taking advantage of this "kicking effect" to achieve cold transport on fast timescales has been experimentally demonstrated [76, 32], it requires precision timing on the order of the trap frequency in order to be implemented robustly. As seen in Fig 4-2, missing the timing by half a trap period, which can be on the order of 500 ns, can be disastrous for the ion.
Of the transport proﬁles detailed above (4.2), the hyperbolic tangent is the only proﬁle thus far that has zero acceleration kicks at the ends of transport. Since the acceleration is smooth throughout transport, tanh reliably reaches a motional excitation below 1 quanta without any dips at the fastest time scales 4-2. This suggests that the smoothness of the acceleration proﬁle is important for achieving cold transport without being overly sensitive to timing.
It is a helpful reminder that while we analyze transport proﬁles in one dimension, the potential is actually harmonic along the axial direction. We can more concretely visualize the time-dependent potential changes during ion transport
67

Figure 4-2: Motional excitation calculated by determining the classical energy of the ion’s motion at the end of transport. The trajectory of 88Sr in a rigid 1.2 MHz trap under the various transport proﬁles is calculated with my ODE solver.
by plotting both the time and spatial dependence of the potential in Fig 4-3.
4.1.1 Shortcuts-to-Adiabaticity
Within the past decade, a new formalism has been developed to cleverly control quantum systems and achieve adiabatic dynamics on diabatic timescales [22]. There are a family of techniques that fall under the scope of STA methods to design these special control trajectories. While STA concepts extend beyond the quantum world and into any system with adiabatic regime, there has been extensive literature on applying STA techniques for shuttling ions [56].
One speciﬁc technique used for transporting trapped-ions uses Invariant-Based Inverse Engineering, which centers around dynamical invariants of the ion’s timedependent Hamiltonian. The eigenstates of the dynamical invariant are related to the solutions of the Schrödinger equation for time-dependent Hamiltonians [36]. In general, ﬁnding solutions to the time-dependent Schrödinger equation (TDSE) may prove to be difﬁcult, whereas ﬁnding the eigenstates to dynamical invariants
68

Figure 4-3: A 3D representation of the tanh transport proﬁle. The electric potential (V) is plotted along the z axis. yˆ-position and time plotted in the x and y axis. This particular transport is from 0 µm to 120 µm.

is a simpler task.

For a time-dependent harmonic oscillator, there exists a well known invariant operator that is quadratic in momentum [37, 16]. This Lewis dynamical invariant has the following form,

Iˆ(t)

=

1 2m

[ρ( pˆ

−

ma˙

−

mρ˙ (qˆ

−

a)]2

+

1 2

mω02

qˆ − a

2
+U

qˆ − a

ρ

ρ

(4.4)

where pˆ, qˆ are the position, momentum operators, U is an arbitrary function of its argument, ρ and a are functions of time, and ω0 is a constant harmonic frequency. The operator Iˆ(t) is an invariant for the following general harmonic Hamiltonian

69

in 1D,

Hˆ (t)

=

pˆ2 2m

+

V(qˆ,

t)

(4.5)

V(qˆ,

t)

=

−F(t)qˆ

+

1 2

mω2(t)qˆ2

+

1 ρ(t)2

U

qˆ − a(t) ρ(t)

(4.6)

where ρ, a, ω, and F are function of time that satisfy the following auxiliary equations [37],

ρ¨

+

ω2(t)ρ

=

ω02 ρ3

(4.7)

a¨ + ω2(t)a = F(t)/m

(4.8)

By construction the invariant operator does not change over time, and thus the time-dependent Hamiltonian and corresponding invariant satisfy,

dIˆ(t) ≡ ∂Iˆ(t) + 1

dt

∂t ih¯

Iˆ(t), Hˆ (t)

=0

(4.9)

(4.9) can be combined with Ehrenfest’s theorem [23] to derive that the expectation value of the invariant across any solution, ψ(t), of the TDSE remains constant throughout transport,

d dt

ψ(t)| Iˆ|ψ(t)

=0

(4.10)

We may choose to expand the time-dependent Hamiltonian wavefunction, ψ(t), in the basis of the eigenstates ψn of Iˆ,

ψ(qˆ, t) = ∑ cnψn(qˆ, t) n

(4.11)

where cn are complex coefﬁcients, Iˆψn = λnψn, and λn are time-independent eigenvalues.
Combining (4.10) and (4.11), we see that the coefﬁcients, cn, are actually constant in time, which allows us to solve the TDSE using eigenstates of the invari-

70

ant operator. These eigenstates are well-known and can be easier to solve than the general solution to the TDSE, ψ(t). The eigenstates, ψn, have the following form [16],

ψn(qˆ, t) =

1 √

φn

qˆ − a

,

ρ

ρ

σ ≡ qˆ − a ρ

− h¯ 2 2m

∂2 ∂σ2

+

1 2

mω02σ2

+

U(σ)

φn = λnφn

(4.12) (4.13)

where ρ, a, U are the same variables from (4.4), (4.5), (4.6)1. Remarkably we have found a relation between wavefunctions of the time-
dependent transport Hamiltonian and solutions, φn of the stationary Schrödinger equation in σ space. While we have the tools to solve general harmonic Hamiltonian problems, most ion transport Hamiltonians are "rigid", meaning that the potential curvature remains constant throughout transport. This simpliﬁes our auxiliary equations considerably.
In the case of rigid transport along a proﬁle, q0(t), our auxiliary functions become,

ω(t) = ω0,

U = 0, ρ = 1, F(t) = mω02q0(t) a¨ + ω02(a − q0(t)) = 0

ψn(qˆ, t) = φn (qˆ − a(t)) , λn = En = (n + 1/2)h¯ ω0

(4.14) (4.15) (4.16)

where a(t) has remarkably become equivalent to the classical trajectory under Newton’s second law in (4.15). Using these values, the transport Hamiltonian (4.5) and dynamical invariant (4.4) of the ion during rigid transport simply reduce to,

Hˆ (t)

=

pˆ2 2m

+

1 2

mω02

(qˆ

−

q0(t))2

Iˆ(t)

=

( pˆ

− ma˙(t)) 2m

+

1 2

mω02

(qˆ −

a(t))2

(4.17) (4.18)

1I have chosen to neglect the phase factor of ψn in (4.12)
71

The most straightforward way to ensure that the wavefunction of the transport Hamiltonian at the intial and ﬁnal times are equal is to have the wavefunction coincide with an eigenvector, ψn, of the invariant operator. This is equivalent to ensuring that Hˆ (t) and Iˆ(t) commute at the boundary times, tb = {0, T},

Hˆ (tb), Iˆ(tb) = 0

(4.19)

From (4.17) and (4.18), we see that commutation is guaranteed when a˙(t) = 0 and a(t) = q0(t). Physically, this means transport with no excitation requires the ion’s classical position to coincide with the potential minimum and the ion’s classical velocity to be zero at the ends of transport.
A slew of boundary conditions on the ion’s classical trajectory may now arise from enforcing commutation. Once the classical trajectory, a(t), has been identiﬁed, we use (4.15) to solve for the transport proﬁle, q0(t) = a¨(t)/ω02 + a(t).

a(0) = q0(0) = 0, a(T) = q0(T) = d,

a˙(0) = 0, a˙(T) = 0,

a¨(0) = 0 a¨(T) = 0

(4.20) (4.21)

There are many possible of choices for a(t) and q0(t) that satisfy these boundary conditions. It is helpful to work with trajectory ansatzes that have some degrees of freedom, such as polynomials, a(s)/d = ∑n bnsn, or trigonometric functions, a(s)/d = cn cos πns, where s = t/T [72, 41, 38].
The following three trajectories are among the STA protocols that I have investigated and can also be found in the following works [54, 51, 38].
72

q0(t) = d

60s

−

180s2 + Tω02

120s3

+

10s3

+

15s4

+

6s5

q0(t) = d

2520s3 − 12600s4 + 22680s5 − 17640s6 + 5040s7 Tω02

+ 126s5 − 420s6 + 540s7 − 315s8 + 70s9

(4.22) (4.23)

q0(t) = d

1+ 2

−

9 16

+

2b3

+

5b4

cos πs

+

1 16

(1

−

48b3

−

96b4)

cos

3πs

(4.24)

+ b3 cos 5πs + b4 cos 7πs

where

s

=

t T

,

b3

=

−

49(3T2

ω02 −25π 2 )( T 2 ω02 6144T 4 ω04

−25π2)

,

b4

=

5(3T2

ω02 −49π 2 )( T 2 ω02 6144T 4 ω04

−49π)

.

These three protocols (4.22), (4.23), (4.24) are shown in Fig 4-4 and are labeled as "5th order", "9th order", and "trig", respectively. These ansatzes represent only a small fraction of the possible STA trajectories. The freedom to choose STA trajectories allows one to ﬁnd trajectories that will best be implemented in a surface trap.
One important consideration that can help narrow down the possibilities of STA proﬁles is robustness. Optimal transport trajectories should also be robust against realistic trap errors, such as variations in trap position, q0(t), and trap frequency, ω(t).

4.1.2 Fourier Excitation
We now have a strong understanding of the characteristics that lead to optimal ion transport. As exempliﬁed by the tanh proﬁle, smoothly varying trajectories, especially near the ends of transport, leads to cold transport that is also robust to the operation time. Under the STA framework, zero motional excitation after
73

Figure 4-4: Proﬁles in time of various STA trajectories and hyperbolic tangent.
Figure 4-5: Same excitation plot as Fig 4-2 but with more simulated STA trajectories. The quantized excitation from all three STA protocols is synonymous with zero. transport can be guaranteed by inverse engineering proﬁles that satisfy a special set of boundary conditions. These trajectories, if perfectly implemented, will lead
74

to no motional excitation even at very fast transport times. While we understand how the choice of q0(t) excites the ion during transport,
what about the choice of axial frequency ω0? Are there optimal values of ω0 and do these values depend on the speciﬁc choice of trajectory?2. To answer this question we reconsider ion transport as a driven, stationary harmonic oscillator, rather than a moving harmonic oscillator, by transforming coordinates from the laboratory frame to the frame of the harmonic minimum. Since the harmonic minimum undergoes an acceleration q¨0(t), this frame is not inertial and thus the ions will experience a drivi-
ng force.
To derive this driving term, we can rewrite our transport Hamiltonian (4.17) using the classical equation of motion for ions in a harmonic trap (4.15). The ion’s harmonic motion in a rigid trap is proportional to e−iω0t and thus the acceleration of the trap minimum is given by q¨0(t) = −(a¨ + ω02a). We then rewrite the transport Hamiltonian as,

Hˆ (t)

=

p2 2m

+

1 2

mω02

q2

+

mq¨0q

(4.25)

which looks like a normal harmonic oscillator Hamiltonian but with an additional inertial force, Finertial(t) = −mq¨0(t). Therefore, an ion in the harmonic potential reference frame experience a driving force that is proportional to the acceleration of the transport proﬁle. As is well-known with driven harmonic systems, the ion will become excited if the inertial driving force is resonant with the trap frequency, ω0.
To analyze the spectral components of this driving force for several wellknown transport proﬁles, I plot the Fourier Transform (FFT) of each proﬁle’s acceleration as I vary the transport time. The "spectrograms" of each proﬁle is plotted with transport time (µs) along the x-axis and FFT frequency (Hz) along the y-axis, Figs 4-6, 4-7, 4-8, 4-9. The log magnitude of each proﬁle’s FFT is indicated by the heat bar to the right. Note that while the transport proﬁles, q0(t), for
2keep in mind that we are only focusing on rigid transport, where ω0 is constant
75

sin and tanh transport are independent of the choice of axial frequency, ω0, the STA protocol in (4.23) actually depends on the axial frequency, which I asserted to be 1.2 MHz in my simulations.

Figure 4-6: STA 9th order polynomial.

Figure 4-7: Sinusoidal transport

Figure 4-8: Linear transport

Figure 4-9: Hyperbolic tangent, N = 5

From spectrogram of STA transport, we can immediately notice a horizontal notch right at the ion’s axial frequency 4-6. This means that the inertial force the ion experiences will not resonantly excite the ion’s motion, no matter the transport time. Next, we observe that the magnitude of the spectrogram of sin and linear transport is quite large at 1.2 MHz but occasionally dips at certain transport times 4-7 4-8. The magnitude of the frequency content for tanh, N = 5
76

transport remains quite large at 1.2 MHz until the transport time reaches around 11 µs, after which the magnitude dips signiﬁcantly and stays down 4-9.
We can take a horizontal "slice" of each transport protocol’s spectrogram at the ion’s axial frequency. For every transport time along the x-axis, we plot the log magnitude of the FFT component at 1.2 MHz in Fig 4-10.

Figure 4-10: Slice of spectrograms at the 1.2 MHz axial frequency.

Notice how well plot 4-10 corresponds with the motional excitation plot in 4-2, implying that there exists a correlation between the spectral density of the driving force at the ion’s trap frequency and the motional excitation after transport. While this correlation is purely qualitative, it suggests the excitation after transport is proportional to the trap acceleration at the axial frequency,

T
n¯ ∝ e−iω0tq¨0(t)dt
0

(4.26)

where n¯ is the quantized motional energy gained by the ion after transport. We can actually compare this relation to analytical calculations of rigid transport us-

77

ing generating functions and propagators [27],

n¯ (T) = m 2h¯ ω0

ω02ξ(T, 0)2 + ξ˙(T, 0)2

ξ(T, 0) = − 1

T
sin ω0(T − t ) q¨0(t )dt

ω0 0

T
ξ˙(T, 0) = − cos ω0(T − t ) q¨0(t )dt
0

(4.27a) (4.27b) (4.27c)

where ξ is deﬁned as the classical position of the ion relative to the moving potential minimum. ξ and ξ˙ can be seen as the convolution of the trap acceleration with sin and cos, resulting in n¯ (T) being proportional to the Fourier Transform of the trap acceleration squared, q¨20(t).
Using this spectrogram perspective, we can now understand how our choice of axial frequency ω0 affects transport results. For example, if we wanted to transport an ion with a tanh, N = 5 protocol (Fig 4-9) over 10 µs, we should conﬁne the ion at a frequency of at least 1.5 MHz. Conﬁning the ion at less than 1 MHz, would land us in a yellow region instead, and we would expect the ion to be greatly excited. Assuming we are able to perfectly achieve the transport proﬁle q0(t) on our surface traps, th-
ese spectrograms can inform our choice of both transport time, T, and axial frequency, ω0.
Furthermore, keeping the Fourier picture in mind can also help us in designing transport protocols, q0(t). We saw previously that smoother choices of q0(t), such as tanh, leads to hot transport at fast transport times, but consistently cold transport after an intermediate transport time. This cutoff transport time signiﬁes the transition from the diabatic to adiabatic regime. Because the trap acceleration varies smoothly for tanh (compared to the acceleration kicks in the linear and sin proﬁle), t-
he spectral density of the trap acceleration remains localized around frequencies corresponding to the transport time (1/T). Conversely, transport proﬁles with discontinuous trap accelerations will have higher frequency harmonics, leading to a spectral density spaced out over a wider frequency range, with interspersed frequency regions that have little spectral content.

78

Note also, that all the STA transport protocols (4.22), (4.23), (4.24), utilize the

axial frequency ω0 in the proﬁle. This is not a coincidence, as these protocols are specially designed to cancel any trap acceleration at the axial frequency for all

possible transport times.

For rigid ion transport in general, the larger the axial frequency, the less the

ion’s motion will get excited for a given trap acceleration, q0(t). This is consistent

with

the

criteria

for

adiabatic

changes,

1 ω2

dω dt

1. The higher the trap frequency,

the less the potential will change during a single trap period, and thereby the

onset of adiabaticity will appear faster.

We have now seen that optimal transport can be done with STA protocols at

arbitrarily fast speeds (not considering the speed limits of our ion trap control

system). The higher the axial frequency ω0 and the more rigid it is during transport will allow one to transport ions faster while being conﬁdent that they will

gain minimal excitation. Although it is advantageous to transport at as high of an

axial frequency as possible given the surface trap’s voltage bounds and electrode

layout, too high of an axial frequency can actually weaken the radial conﬁnement.

4.2 Splitting Proﬁles

Using the quartic axial potential to split an ion chain, as described in (1.3), we can now engineer proﬁles for our control coefﬁcients, α(t) and β(t). The dynamics for two ions in a fourth-order potential has been well known [26]. We can describe the 1D Hamiltonian in the axial (yˆ) direction as follows,

H

=

p2y 2m

+

V(y,

t)

V(y, t) = q α(t)y2 + β(t)y4 = qφ(y, t)

(4.28) (4.29)

where q and m are the charge and mass of the ion, respectively. Note that we have constructed the electric potential φ to be symmetric in the axial direction. This is not always true, as there can exist some surface charges on the trap electrodes
79

that add a stray ﬁeld: φ(y) = γy + αy2 + βy4. However, the anharmonicity due to a cubic term in the potential can be safely neglected due to small contribution in surface traps [31].
For two ions of the same mass and charge, the equilibrium positions in a symmetric (γ = 0) quartic potential are y = ±d/2, where, d, the separation of the two ions, is given by,

βd5

+

2αd3

=

q 2π

0

(4.30)

Note that α, β, and d are all implicit functions of time, and q is the charge

of the ion species.

In a two-ion chain, there will be two normal modes in the axial direction: a symmetric, center of mass oscillation and antisymmetric, stretch oscillation. The COM and stretch frequencies, ω1(t) and ω2(t), are given by,

where

˜

=

π

0

q2 mω12

d3

.

ω12

=

q m

2α + 3βd2

ω22 = ω12 (1 + ˜)

(4.31) (4.32)

Intuitively, the COM frequency results from locally approximating the quartic electric potential φ(y) with a harmonic potential. The stretch frequency is larger
√ than the COM frequency by a factor of 1 + ˜, where ˜ is the ratio of the Coulomb force to a harmonic restoring force with frequency ω1.
We can analyze the mode frequencies in the three cases of interest (1-2, 1-3, √
1-4). In a purely harmonic well, α > 0; β = 0; ˜ = 2; and ω2 = 3ω1, consistent with the discussion in 2.2.3.
At the critical point α = 0; β > 0; ˜ = 2/3; the ions are separated by a distance,

dcp =

q

1/5

2π 0β

80

(4.33)

Figure 4-11: A typical splitting proﬁle from [31]. Motional excitation from splitting (red), thermal excitation from electric ﬁeld noise (blue), and total energy transfer (black). The top right inset shows the axial frequency (black) and heating rate (red) during transport.

and the COM frequency is,

ω1 cp =

q 2π 0

0.2
(β)0.3

3q m

0.5
∝ β0.3

(4.34)

From (4.34) we can see that the frequency at the critical point scales unfavorably with β. Thus a much larger β value is needed to keep the COM frequency at typical axial frequencies levels (∼1 MHz).
Finally, in a double well conﬁguration 1-4, when the two ions are sufﬁciently separated such that the Coulomb interaction is negligible, ˜ 1. The two mode frequencies are both about equal to the oscillation frequency of a single ion in either trap, ω1 ≈ ω2.
In summary, there are four parameters of interest during a splitting operation: α(t), β(t), d(t), and ω1(t), with their relationships given by (4.30), (4.31), (4.32).
In a typical splitting experiment, one chooses an appropriate trajectory for the

81

separation of two ions, d(t) [31]. Because the axial mode frequencies naturally drop near the critical point, it is advantageous to slow down voltage changes to avoid diabatically exciting the ions in the weak conﬁnement. The maximum quartic conﬁnement βmax at the critical point is determined by the voltages that can be applied to the electrodes, as well as the electrode size, layout, and distance away from the ions. Voltages are then smoothly changed from the critical point conﬁguration to a doub-
le well (α < 0), where the ions are sufﬁciently separated.
Since the axial frequencies change during splitting, we are no longer in the regime of rigid shuttling operations, as in the case of transport. As seen in Fig 411, the motional excitation for splits faster than 40 µs would actually bring the ions out of the Lamb-Dicke regime. The drop in axial frequency near the critical point dramatically increases the heating rate. Ions during slower splitting times are subjected to more thermal excitation from trap effects. Thus fast splitting below 1 quanta ha-
s proven to be quite difﬁcult on surface electrode traps.

4.2.1 Shortcuts-to-Adiabaticity

Invariant-Based Inverse Engineering has also been applied to the problem of fast ion crystal splitting [53]. The splitting Hamiltonian (4.28) was transformed into coordinates of the dynamical normal modes q±, p± corresponding the same frequencies Ω− = ω1, Ω+ = ω2 in (4.31), (4.32) [39].

The Hamiltonian under these coordinates can be written as the sum of the Hamiltonian in each normal mode, H = H+ + H−. The two Hamiltonians have a dynamical invariant of the form [53],

I± =

1 2

ρ±(p± − x˙± − ρ˙±(q± − x±)

2

+

1 2

Ω2±(0)

q± − x± p±

2

82

(4.35)

where the auxiliary functions ρ± and x+ satisfy,

ρ¨±

+ Ω2±ρ±

=

Ω2±(0) ρ3±

x¨+ + Ω2+x+ = −

m d¨ 2

(4.36) (4.37)

Note that x± are the normal mode centers in the dynamical mode coordinates q±, p±. By symmetry, x− = 0.
Analogous to STA transport, ensuring that the splitting Hamiltonian commutes with the dynamical invariants lead to the following set of 14 boundary conditions at the boundary times tb = {0, T},

ρ±(0) = 1,

ρ±(T) =

Ω±(0) Ω±(T)

,

...

....

ρ˙±(tb) = ρ¨±(tb) = ρ ±(tb) = ρ ±(tb) = 0,

x+(tb) = x˙+(tb) = 0

(4.38) (4.39) (4.40)

A 9th- and 11th-degree polynomial ansatz is used for ρ− and ρ+. To satisfy

these boundary conditions, the coefﬁcients of ρ± depend only on the ratio of the

starting to ending axial mode frequencies

Ω±(0) Ω±(T)

.

√

We start the split with a single well: Ω−(0) = ω0 and Ω+(0) = 3ω0. We end

the split by choosing an target separation distance and determining the modes fre-

quencies based on (4.31), (4.32). Note that we constrain the ﬁnal COM frequency

to be the same as the starting COM frequency, Ω−(T) = ω0. This is crucial as it allows us to solve for splitting proﬁles that keep a constant COM frequency

throughout the operation.

Once we have ﬁxed our target mode frequencies at the initial and ﬁnal times

of the split operation, we solve for the auxiliary function ρ±(t) throughout the entire split. From this we obtain the mode frequencies throughout the entire split,

Ω±(t) according to the auxiliary function (4.36).

When the two axial mode frequencies are fully determined, we can rearrange

83

the relationships in (4.30), (4.31), (4.32) to obtain the following relations,

d(t) =

1/3
q mπ 0(ω22 − ω12)

α(t)

=

1m 8

3ω22 − 5ω12

β(t) =

2π

q 0d5(t)

−

2α(t) d2(t)

(4.41) (4.42) (4.43)

The α, β, ω1, and ω2 parameters for this STA split are plotted in 4-12.

Figure 4-12: STA splitting proﬁle with a ﬂa√t COM frequency (solid red). The stretch frequency (dashed red) starts off at 3 and ramps down to almost be equal to the COM frequency. The quadratic, α, coefﬁcient ramps down to -0.5 its initial value (blue). The quartic, β, term reaches a maximum value at the critical point (orange).
Note that in order to achieve STA splitting we must be able to create a large enough beta value on our trap to provide the necessary axial frequency at the critical point. According to (4.34), to trap two 40Ca ions at 1.3 MHz during the critical point, we need a β value of 2×10−7 V/m4, which is just what the MaxBeta trap can provide with a ±40 V range applied to the electrodes. By comparison, the maximum β achievable on the SLT trap with a ±40 V range is 4×10−10 V/m4,
84

Figure 4-13: Motional excitation in quanta of the common mode oscillation after two types of splitting proﬁles. Thermal heating from the trap has not been simulated.
Figure 4-14: Axial frequency modes during the two methods of splitting. which results in a 200 kHz axial frequency of two 40Ca ions.
I’ve simulated both the traditional splitting method3 and STA splitting method
3I call this the "Kaufmann" method
85

with realistic parameters for three different ion species: 133Ba, 88Sr, and 40Ca. I plot the motional excitation in the common mode as a function of splitting time in Fig 4-13. Since the Kaufmann splitting method we analyzed for an outer segmented trap, which has a lower maximum β value compared to inner segmented electrodes, the motional excitation and axial frequency from the Kaufmann method is labelled as "Outer Seg" in 4-13, 4-14.
We can see that heavier ions consistently become more excited after the split, most likely due to the lower conﬁnement from the same applied voltages. With the traditional splitting method, 40Ca reaches an excitation below 1 quanta at around 25 µs. Note that this is faster than the 48 µs simulated in 4-11 because my voltage bounds were ±40 V while the bounds in [31] were ±10 V.
I also plot the simulated axial frequency modes for a single splitting operation of 88Sr in 4-14. With these considerations, we can conclude that inner segmented electrode traps are more suited to achieve optimal ion splitting. Note how the COM frequency stays constant for an STA split. This proves to be advantageous as we shall see in the next section.
4.2.2 Fourier Excitation
In the case of STA splitting, where the common mode frequency of the two ions stays constant during the split, we may use the same spectral analysis that I discussed previously for transport operations. When the COM mode stays ﬂat at ω1 = ω0, we can consider the operation to be "rigid" with respect to the COM frequency.
Analogously, I plot FFT the acceleration of a single ion’s position d¨0(t)/2 during the splitting operation as a function of splitting time. The spectrogram shown in 4-15 shows the magnitude of the ion’s acceleration at various split times and frequencies. The axial conﬁnement scales inversely with the mass of the ion,
√ ω ∝ 1/m, and thus a 1.2 MHz COM frqeuency for 40Ca leads to a 800 kHz and 658 kHz conﬁnement for 88Sr and 133Ba, respectively.
86

Figure 4-15: Spectrogram of STA splitting. The common mode frequency is set to be 1.2 MHz for 40Ca, and scales inversely with the mass for higher-mass ions.
Figure 4-16: Slice of the STA splitting spectrogram at the various axial frequencies corresponding to the ion’s mass.
Taking a horizontal slice of the spectrogram at those three frequencies leads to the plot in 4-16. Note that the sharp dip for each ion species occurs at the same
87

Figure 4-17: Simulation of two 40Ca ions with my splitting proﬁle. d(t) is given by an STA solution (4.23). The ions get separated ×10 their starting distance. Note how the ions follow an STA proﬁle during the 5 µs split.
splitting times as the simulation based on the ion motional dynamics 4-13. While the agreement is again purely qualitative, this points to the fact that lighter mass ions are easier to split [7, 63] and the capability to create a high β conﬁnement with the surface electrode trap may lead to colder and faster split operations. This Fourier analysis of splitting only exists for "rigid" splitting and will not work for the traditional splitting method where the axial frequencies change over time.
We may actually take advantage of what we have learned from STA transport and apply it to STA splitting. The previous method for achieving STA splitting protocols imposed boundary conditions on auxiliary functions, and then solving for the control parameters α(t), β(t), leading to a unique separation proﬁle d(t) with a spectrogram 4-15.
It would be more advantageous if we instead ﬁrst constrain d(t) to be an optimal transport proﬁle, such as (4.23), and constrain the common mode frequency to be constant, ω1(t) = ω0. We can then solve for the stretch mode frequency according to (4.32). Once we have both our mode frequencies as a function of time, we can solve for the control parameters using (4.42), (4.43).
88

Figure 4-18: Comparisons of my splitting proﬁle with the same two in Fig 4-13. The quanta plotted is the excitation in the common mode.
An example of the ion’s trajectory during my splitting protocol is simulated and shown in Fig 4-17. The total split time was 5 µs with the COM frequency held at 1.2 MHz. At the maximum beta conﬁguration, β = 1.56×10−7 for this axial frequency. This value of maximum beta conﬁnement is achievable in our MaxBeta trap.
The motional excitation from my split is simulated for the same three ion species and varied over split time. This is plotted together with the excitation in 4-13 to obtain the following excitation plot, Fig 4-17. This suggests that if we are able to perfectly ﬁnd the voltage waveforms to achieve such a splitting proﬁle, we can split even 133Ba below 1 quanta in under 10 µs.
The spectrogram for this split will be the same as Fig 4-9 because my implementation of d(t) follows the 9th order STA polynomial for ion transport (4.23). Note that with my paradigm, other possible separation distance proﬁles are possible. The main difference now is that we are operating under "rigid" splitting, where we can keep the COM frequency at a constant value.
This is a new technique for designing optimal splitting protocols for two ions
89

that combines STA techniques with Fourier analysis. Experimental success is thus predicted to be contingent on precision of electrode controls and a trap geometry that can provide a large β value.

4.3 Robustness

In designing optimal shuttling protocols, robustness to systematic errors must

be considered since the ion shuttling process is open loop and lacks real-time

feedback. Because of this, our best estimates for how the system will behave

for any given voltage waveform comes from simulations with as accurate models

as possible. For example, our method for predistorting waveforms, detailed in

Chapter 5, uses a SPICE model of our electrode ﬁltering in the cost function,

and there is no guarantee of the accuracy of the SPICE model without making

measurements of the system itself.

While the open-loop system makes predistortion challenging, we may ﬁnd

target protocols that do not require as tightly-bounded voltage waveforms. Such

a protocol is said to be robust with respect to a certain deviation. The deviations

in ion shuttling experiments can be categorized as positional errors, δq, or trap

frequency errors, δω. These errors can in general be time-independent or time-

dependent.

It turns out that the excitation sensitivity to positional errors in the transport

trajectory δq(t) can only be mitigated by decreasing the magnitude of the error

and/or decreasing the transport time [43]. In other words, there are no choices of

trajectories within the family of STA solutions that will be less sensitive to errors in

the trajectory itself. However, at a high enough trap frequency, under the Fourier

picture, any additional trap position errors δq will add an extra driving force

proportional to

d2 dt2

δq.

As long as the spectral density of the trap position error

has no frequency components that is resonant with the ion’s axial frequency, the

additional excitation should be minimal. This can be more conﬁdently guaranteed

when the trap frequency ω0 is high.

90

Figure 4-19: Transporting a single 88Sr ion with the polynomial STA (4.23) and the trigonometric STA (4.24). The correct axial frequency for transport is 1.2 MHz, but transport with a frequency of 1.0 MHz has also been simulated.
In the case of time-independent trap frequency errors, there are various protocols within the family of STA trajectories that are robust. Such examples are the N-point protocols and trigonometric ansatz detailed here [81, 40, 42, 43, 21, 41, 38]. Note that there is no free lunch, however. By choosing a protocol that is more robust to time-independent trap frequency errors, the trajectory of the protocol may have oscillations that make them more difﬁcult to implement. The transient excitation of th-
e ions under this trajectory may actually be larger as well. In other words there are always trade-offs to consider when designing these robust protocols [60].
The trigonometric STA transport proﬁle in (4.24) has been shown to be more robust to a time-independent trap frequency error than the polynomial ansatzes. This robustness can be seen numerically in Fig 4-19. The polynomial and trigonometry ansatz were solved with a target trap frequency of 1.2 MHz, and when 88Sr was transport at that trap frequency, we do observe essentially no motional excitation for all transport times. However, if we introduce a 200 kHz trap frequency
91

offset, so we are now transporting 88Sr with the same proﬁle but trapped at 1.0 MHz instead, we see much more motional excitation. However, for the trigonometric STA proﬁle, the excitation is consistently lower starting at around 5 µs.
For the case of a time-dependent trap frequency error, δω(t), it is not well known how to analytically ﬁnd shuttling protocols that are robust. This problem is even more complex when there are both time-dependent trap frequency errors and positional errors. Thus, ﬁnding trajectories that are robust to time-dependent trap frequency errors is an open research question in the ﬁeld of robust quantum particle shuttling.
4.3.1 Experimental Non-Idealities
In trapped-ion systems, we may typically see both trap position and trap frequency errors that arise from a variety of sources. The ﬁrst type of noise source results from imperfect voltage controls. If predistortion is not perfect, the resulting waveforms can lead to both time-dependent trap frequency errors and positional errors. Also, there can be errors that arise from solving for voltage waveforms as detailed in section 3.2.1.2. In general it is not yet known if any arbitrary shuttling proﬁle -
has exact waveform solutions and even so, it is not guarenteed that those waveforms can be sufﬁciently predistorted and applied to the trap. However, using waveform solving techniques and the predistortion method in Chapters 3 and 5, we may try our best to ﬁnd close to optimal waveforms which would mitigate the trap position and trap frequency errors from imperfect controls.
Perhaps more concerning, are the other sources of noise that we have less control over. For example, the trap frequency may vary across a surface trap by more than 5%, due to local trap imperfections, patches of charged insulator or adsorbate, and/or stray ﬁelds [60]. Furthermore, gain and calibration errors in our DACs, as well as some crosstalk effects between different channels on the hardware system can also contribute to both trap position and trap frequency errors. It may be difﬁcult to "pre-
distort" for these errors because, unlike with the circuit
92

ﬁltering, these noise characteristics are only estimated and may change over time. Therefore, our trap frequency may end up varying during the shuttling operation even with perfectly predistorted waveforms. We can numerically simulate these voltage errors with my numerical pipeline using estimates for gain, calibration offset, and crosstalk effects, but ultimately the best probe on these errors is the ion itself.
To summarize, we can optimize our voltage inputs to reduce the trap position and trap frequency errors as much as possible. However there will still be unaccounted effects from surface charging to crosstalk errors that will introduce some nonzero amount of trap position and trap frequency errors. While it is possible to design shuttling protocols that are robust to time-independent trap frequency errors, it is impossible to be robust against trap position errors. The only ways to reduce the sensit-
ivity to trap position errors, is to perform the shuttling operation at a faster speed and/or increase the trap frequency. However, this might not be experimentally possible without introducing more trap position or trap frequency errors.
Future work remains to be done towards quantifying the bounds on the contribution of surface noises to trap position and frequency errors using known characteristics of modern surface electrode traps.
4.4 Summary
This chapter has presented state-of-the-art theories validated by simulations for optimal shuttling operations. A Fourier analysis perspective has been detailed that helps crystallize the core requirement for shuttling operations to be optimal: a tight and rigid axial conﬁnement.
For ion transport, it is experimentally easier to meet both the tight and rigid trapping requirements. The inner segmented layout of our MaxBeta trap allows for 40Ca to be easily trapped at 4 MHz with an 8 V control range. Ensuring rigidity during transport is less straightforward, and requires precise simulation of
93

electric potentials during the operation. Ultimately, one may choose to accurately model the electrode circuitry and use my predistortion method detailed in the next chapter to optimize the voltage inputs.
For ion splitting, both the tight and rigid requirements are more challenging to satisfy. As will be discussed in Chapter 6, our work on the MaxBeta trap is a ﬁrst step towards tight and rigid splitting.
Robustness shuttling trajectories may help relax the tight and rigid requirements. While the requirement for tight conﬁnement is largely dependent on the surface trap layout, the rigid requirement requires strong voltage controls. The design of shuttling trajectories that are robust to trap frequency errors—especially time-dependent trap frequency errors—may help ease the need for precise voltage controls and is an active area of investigation.
94

Chapter 5
Voltage Optimization
While ﬁnding optimal control potentials is one challenge, actually implementing them on our surface traps is a separate challenge. Due to our system ﬁltering, we have imperfect control over electrode voltages. Diabatic shuttling times on the order of 1-10 µs require voltage waveforms that must vary on the order of 100 kHz - 1 MHz, which is beyond the low pass ﬁlter cutoff. Therefore I will demonstrate the need for predistortion and outline my method in this chapter.
Using the methods described in the previous chapter, we have identiﬁed candidate proﬁles for optimal ion transport and ion shuttling. We solve for the voltage waveforms we should apply to our MaxBeta trap in order to achieve these optimal protocols, shown in 5-1, 5-2.
We can predict the waveform distortion by our electrode circuitry using timedomain simulations with SPICE. The naïve method for waveform generation is to sample the target waveform at the update rate limited by our DAC. Running the DAC input through our SPICE simulator, we are able to see the distorted waveforms and compare with the targeted waveform 5-3.
The digital input from our digital-to-analog converter is modelled as a piecewise linear voltage source, with a slew rate and update rate shown in Fig 53. While the electrode output is quite delayed, the shape of the waveform also becomes distorted. There are also small oscillations towards the end of the analog output.
95

Figure 5-1: Ion transport waveforms on the MaxBeta trap. Transporting 40Ca according to an STA polynomial protocol (4.23), over a distance of 45 µm in 15 µs. The axial frequency is 4 MHz.

We can imagine that the optimal inputs to achieve the target waveforms will have to occur before the waveforms. To account for the low-pass ﬁltering, we expect to have to drive our inputs with larger voltages than the target waveforms. Because we have limited resolution on our inputs (16-bit 0-5V), there are a large but ﬁnite number of possible voltage inputs to the electrodes. Furthermore we are able to create a cost function by quantifying the error, resulting from the distortion using a sum of -
squares difference

T

= |Vi(t) − Vˆi(t)|2dt

(5.1)

0

where Vi(t) and Vˆi(t) are our achieved and target waveforms, and T is the shut-

tling operation time.

This allows us to transform the problem of ﬁnding optimal voltage controls

into a global search over a large parameter space. With 216 possible voltage levels

per inputs, x inputs per waveform, and N electrode waveforms per shuttling op-

96

Figure 5-2: Splitting waveforms on the MaxBeta trap. Splitting two 40Ca according to my developed method in chapter 4. d(t) according to (4.23), COM frequency of 1.2 MHz. Final ion separation of 90 µm.
Figure 5-3: DAC input voltages modelled with a piece-wise linear function (blue). Analog output simulated with SPICE (orange). The target waveform is what we want to apply to the trap electrodes (dashed black).
97

eration, searching over the entire input space quickly becomes computationally expensive. One SPICE simulation takes around 2 seconds, so 216 SPICE simulations will take 36 hours. A more sophisticated method for predistortion is to analyze waveforms in the frequency domain.

5.1 Spectral Content of Voltage Waveforms

The Fourier transform of voltage waveforms allows one to observe the required

frequencies in achieve such a waveform. Waveforms with extensive high fre-

quency content will naturally be distorted more than lower frequency waveforms.

In the diabatic transport voltages 5-1, only four electrodes change: S13, N8,

S13, N9. The rest are held constant at 8 V. I allowed only these four electrodes to

change because they were the closest to the ion’s position and I only constrained

six coefﬁcients:

∂ ∂x

,

d dy

,

∂ ∂z

,

∂2 ∂y2

,

∂2 ∂x∂y

,

∂2 ∂y∂z

.

The Fourier transform of the four electrode waveforms is shown in 5-4. The

inputs to the system had a update rate of 800ns, with 5 total inputs, the target

waveforms lasted 4 µs. The y-axis is the magnitude of the FFT on a dB scale. The

waveforms reach a value of -20 dB as low as 150 kHz.

For lower frequency waveforms, ﬁltering may effectively just time delay the

waveform, while maintaining the overall shape. There is a greater need for pre-

distortion when our ﬁltering changes the shape of our waveform.

By naïvely sampling our target waveforms, we can see unequal distortion. The

shape of the output waveforms for electrodes N8 and S12 are more distorted than

electrodes N9 and S13. This is because of the dip in the target waveforms of elec-

trodes N8 and N9. Note that all the electrode outputs seem to be delayed in time

by similar amounts, suggesting that the various target waveforms undergo simi-

lar group delay effects from our electrode circuitry. Also note that since the target

waveforms 5-1 are symmetric in time (electrode N8 and S12 are time-inverses, as

are N9 and S13), the naively sampled waveforms can be run forward and back-

wards.

98

Figure 5-4: Spectral content of diabatic transport voltages. The total transport time is 4 µs.
Figure 5-5: Naively sampled voltages. DAC update rate of 1000ns. 99

Figure 5-6: Schematic of our circuitry in LTSpice. Our DAC inputs are modelled as piecewise linear functions applied at "Vinput". The stages "End of Fastino" and "End of HVamp" and labeled. The voltage output at "ION" is our expected electrode voltage.
5.2 Deconvolution
We have a comprehensive of our system’s circuitry 5-6, and thus we should be able to ﬁnd close to optimal inputs to achieve the target waveforms. I simulate a step response of our circuit by applying a 0 V to 1 V input from our DAC model. The derivative of the output step response is the impulse response of our circuit, shown in 5-7.
Figure 5-7: Impulse response of our electrode circuitry. 100

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:41.901Z
- **Text Length:** 137460 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
