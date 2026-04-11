# PDF Document: (Meander Line Resonator - 2017 NIST)Ticking near the Zero-Point Energy towards 1 × 10-18 Accuracy in Al+ Optical Clocks.pdf

**File Path:** (Meander Line Resonator - 2017 NIST)Ticking near the Zero-Point Energy towards 1 × 10-18 Accuracy in Al+ Optical Clocks.pdf

**Processed Date:** 2026-02-10T18:18:03.800Z

**File Size:** 21807.80 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1089

**Title:** (Meander Line Resonator - 2017 NIST)Ticking near the Zero-Point Energy: towards 1 × 10-18 Accuracy in Al+ Optical Clocks

**Collection:** Ion Trap

---

## Extracted Text Content

Ticking near the Zero-Point Energy: towards 1 × 10-18 Accuracy in Al+ Optical Clocks
by Jwo-Sy Chen M.S., Physics, National Tsing Hua University, Taiwan, 2007. B.S., Physics, National Tsing Hua University, Taiwan, 2005.
A thesis submitted to the Faculty of the Graduate School of the University of Colorado in partial fulﬁllment of the requirements for the degree of
Doctor of Philosophy Department of Physics
2017

This thesis entitled: Ticking near the Zero-Point Energy: towards 1 × 10-18 Accuracy in Al+ Optical Clocks
written by Jwo-Sy Chen has been approved for the Department of Physics

Dr. David Leibrandt

Dr. David Wineland

Date

The ﬁnal copy of this thesis has been examined by the signatories, and we ﬁnd that both the content and the form meet acceptable presentation standards of scholarly work in the above
mentioned discipline.

iii
Chen, Jwo-Sy (Ph.D., Physics) Ticking near the Zero-Point Energy:
towards 1 × 10-18 Accuracy in Al+ Optical Clocks Thesis directed by Dr. David Leibrandt and Dr. David Wineland.
The advancement of optical atomic clocks in the past two decades has motivated many potential applications in navigation, communication, and science. Accurate optical clocks that outperform the current cesium time standard also trigger a discussion about a possible redeﬁnition of the SI second. The 27Al+ quantum logic clocks developed at the National Institute of Standards and Technology (NIST) were the ﬁrst to achieve the clock fractional frequency uncertainty below 10−17 in 2010. To date, a few -
research groups around the world have demonstrated optical clocks based on various atomic transitions with fractional frequency uncertainty in the 10−18 range. The accuracy of the previous 27Al+ clocks was limited by the second order Doppler (time dilation) shift and the blackbody shift. Since 2010, the third 27Al+ optical clock is being developed at NIST to achieve a higher accuracy. The frequency uncertainties dominant in the previous clocks are controlled and reduced in the current optical cloc-
k. The new design of the ion trap system has reduced signiﬁcantly both the blackbody radiation shift uncertainty and the time dilation shift uncertainty due to micromotion, while the time dilation shift uncertainty due to the secular motion has been reduced by more than an order of magnitude by operating the optical clock near the three dimensional zero-point energy. Despite those previously dominant uncertainties, several other systematic eﬀects are being evaluated and some other eﬀorts are being-
 made to achieve a total uncertainty towards 1.0 × 10−18. In this thesis, I will document the detail of the construction and evaluation of the current 27Al+ optical clock developed at NIST.

Dedication
My family, old and new.

v
Acknowledgements
All the work described in this thesis can only become possible with supports from many people in the Ion Storage group of the NIST. At ﬁrst, I would like to thank my advisers, Till Rosenband, David Leibrandt, and David Wineland, who all provided the great scientiﬁc research environment and the guidance of the experiment. Their technical expertise and scientiﬁc knowledge show me how to work on a challenging project from the scratch towards the success. I am great indebted to Sam Brewer, whom I work-
ed with in the past ﬁve years and learned a great deal about science from. We constructed two ion traps together and tackled down so many scientiﬁc and technical diﬃculties to make the “clock tick! I am sure our new system will become again the most accurate clock in a very near future! I also want to express my appreciation to Jim Bergquist, James Chou, Aaron Hankin, and David Hume, Christoph Kurz and all former/current members within the clock team of Ion Storage group for sharing all your wonde-
rful knowledge and experience with me. Many people in the Ion Storage group also contributed to various stages of the experiment. I would like to thank all the people in the group collectively for the experimental support as well as the cheerful working environment that we created together over the years. I may probably forget mentioning some people here but all you play important roles in my time in the graduate school. The graduate study has been a long journey to me, both geologically and menta-
lly. I would like to thank my family and old friends, C.C.C. and S.C.L., who stand behind me over years and support me through the tough ups and downs across the ocean. Thanks!

vi

Contents

Chapter

1 Introduction

1

1.1 Optical Frequency Standards . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3

1.2 Optical Clock Applications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 1.3 27Al+ Optical Clocks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7

1.4 Thesis Organization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9

2 Experimental Setup

10

2.1 The Trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11

2.2 Trap System . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18

2.2.1 Vacuum Chamber . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18

2.2.2 Imaging and Photon Collection System . . . . . . . . . . . . . . . . . . . . . 21

2.2.3 RF Resonator and RF Power Control . . . . . . . . . . . . . . . . . . . . . . 24

2.2.4 Magnetic Field Control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25

2.3 Ion Loading . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25

2.4 27Al+ Laser System . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28

2.4.1 Energy Levels and Lasers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30 2.4.2 Frequency Stabilization of the 3P1 Laser . . . . . . . . . . . . . . . . . . . . . 31 2.4.3 Frequency Stabilization of the 3P0 Laser . . . . . . . . . . . . . . . . . . . . . 32 2.5 25Mg+ Laser System . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34

vii
2.5.1 Qubit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34 2.5.2 Atomic State Preparation and Doppler Laser Cooling . . . . . . . . . . . . . 37 2.5.3 Repumping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38 2.5.4 Motion-Sensitive Raman Spectroscopy . . . . . . . . . . . . . . . . . . . . . . 39 2.6 Other Techniques . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40 2.6.1 Maximum-Likelihood Probability Es-
timation . . . . . . . . . . . . . . . . . . 40 2.6.2 UV Fibers and Pulse Area Control . . . . . . . . . . . . . . . . . . . . . . . . 42 2.6.3 AOM Double-pass Conﬁguration . . . . . . . . . . . . . . . . . . . . . . . . . 43 2.7 Quantum Logic Spectroscopy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45 2.8 Clock Operation Pulse Sequence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47 2.8.1 State Preparation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . -
. . . 47 2.8.2 Clock Interrogation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48 2.8.3 Atomic State Detection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49

3 Time Dilation Eﬀect due to Secular Motion

50

3.1 Motion in RF Traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 50

3.2 Sideband Thermometry . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52

3.3 Sympathetic Doppler Cooling and Energy Estimation . . . . . . . . . . . . . . . . . 54

3.4 Sympathetic Sideband Cooling and Energy Estimation . . . . . . . . . . . . . . . . . 57

3.4.1 Numerical Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59

3.4.2 Heating Mechanisms . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60

3.4.3 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 67

3.5 Cooling Pulse Optimization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70

3.5.1 Cooling Pulse Sequence at Drive Frequency ΩT ' 2π × 76 MHz . . . . . . . . 71

3.5.2 General Sideband Cooling Pulse Sequence . . . . . . . . . . . . . . . . . . . . 74

3.6 Clock Frequency Shifts and Uncertainties due to Secular Motion . . . . . . . . . . . 78

3.6.1 Determination of the Energy after Sideband Cooling . . . . . . . . . . . . . . 78

viii 3.6.2 Time-dilation Shift due to Secular Motion . . . . . . . . . . . . . . . . . . . . 80

4 Other Systematic Eﬀects and Concerns

86

4.1 Linear Doppler Shift . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 86

4.2 Excess Micromotion Shift . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87

4.2.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87

4.2.2 Characterization and Compensation . . . . . . . . . . . . . . . . . . . . . . . 88

4.2.3 Residual EMM due to Phase Imbalances . . . . . . . . . . . . . . . . . . . . . 90

4.2.4 Evaluation of the Time Dilation Shift due to EMM . . . . . . . . . . . . . . . 91

4.3 Blackbody Radiation Shift . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 94

4.3.1 Polarizability of the Clock Transition . . . . . . . . . . . . . . . . . . . . . . . 96

4.3.2 BBR Environment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 96

4.3.3 Estimate of Clock Shift due to BBR . . . . . . . . . . . . . . . . . . . . . . . 97

4.4 Zeeman Shift . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 99

4.5 Background Gas Collisions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 100

4.6 Stark Shift due to the RF Drive Field . . . . . . . . . . . . . . . . . . . . . . . . . . 102 4.7 Formation of AlH+ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103

5 Conclusion

105

Bibliography

108

ix
Tables
Table 1.1 Secondary representations of the second in the optical frequency domain . . . . . . . 3 1.2 Error budgets of the previous 27Al+ optical clocks . . . . . . . . . . . . . . . . . . . 8 2.1 Iterations of wheel traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 2.2 Comparison of clock operation protocols . . . . . . . . . . . . . . . . . . . . . . . . . 47 3.1 Energy determination of sympathetic Doppler cooling . . . . . . . . . . . . . . . . . 55 3.2 Parameters of -
secular modes of motion at 76 MHz drive frequency . . . . . . . . . . 71 3.3 Parameters of secular modes of motion at 40 MHz drive frequency . . . . . . . . . . 76 3.4 Number of sideband cooling pulses of each sideband order for the drive frequency ΩT ' 2π × 40 MHz . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78 3.5 Summary of heating sources at 40 MHz drive frequency . . . . . . . . . . . . . . . . 83 3.6 Summary of heating sources at 76 MHz drive frequency . . . . . -
. . . . . . . . . . . 83 4.1 The ﬁeld strength that causes EMM and the resulting time dilation shift measured by the 3P1 transitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95 5.1 Clock uncertainty budget . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107

x
Figures
Figure 1.1 Frequency standards recommended by the BIPM . . . . . . . . . . . . . . . . . . . . 4 1.2 Clock history . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 2.1 Typical linear Paul trap schematic . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 2.2 Ion traps used in previous Al+ optical clock experiments. . . . . . . . . . . . . . . . 14 2.3 Wheel trap schematic . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15 2.4 Wheel trap-
 pictures . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16 2.5 Dipole and quadrupole ﬁeld generated by two rf resonators . . . . . . . . . . . . . . 17 2.6 Vacuum chamber drawing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19 2.7 Trap mounting scheme . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20 2.8 Laser beam geometry . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22 2.9 Illustration of the imaging-
 system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23 2.10 The schematic of meander line resonators . . . . . . . . . . . . . . . . . . . . . . . . 24 2.11 Ablation target . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26 2.12 Energy level diagrams of Mg and Al . . . . . . . . . . . . . . . . . . . . . . . . . . . 27 2.13 Ion loading ﬂowchart . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29 2.14 Energy level diagram of 27Al+. -
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31 2.15 27Al+ laser beamlines . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32 2.16 27Al+ 3P1 laser frequency stabilization scheme . . . . . . . . . . . . . . . . . . . . . . 33

xi 2.17 27Al+ 3P0 laser frequency stabilization scheme . . . . . . . . . . . . . . . . . . . . . . 35 2.18 Relevant energy level diagram of 25Mg+ . . . . . . . . . . . . . . . . . . . . . . . . . 36 2.19 25Mg+ laser beam setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37 2.20 Raman transition spectrum of a two-ion pair . . . . . . . . . . . . . . . . . . . . . . 39 2.21 Photon-count histogram of |↑ (↓)i . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41 2.22 Eﬀe-
ct of UV ﬁbers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42 2.23 Double-pass AOM Conﬁguration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44 2.24 Quantum logic spectroscopy pulse sequence . . . . . . . . . . . . . . . . . . . . . . . 46 2.25 State preparation pulse sequence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48 2.26 Clock interrogation pulse . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49
3.1 Secular modes of motion of 25Mg+-27Al+ ion pair. . . . . . . . . . . . . . . . . . . . 51 3.2 The relation between the n¯ and the ﬁrst-order BSB-to-RSB ratio β. . . . . . . . . . 53 3.3 The sympathetic Doppler cooling limit versus the mass ratio of two-ion pair. . . . . 54 3.4 Thermal distribution ﬁt to a single 25Mg+ . . . . . . . . . . . . . . . . . . . . . . . . 57 3.5 Repump heating rates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62 3.6 Illustration of a heating-
 mechanism involving a coherent process . . . . . . . . . . . 63 3.7 Simulation of the motional excitation due to an oﬀ-resonant carrier transition follo-
wed by a ﬁrst-order RSB cooling pulse . . . . . . . . . . . . . . . . . . . . . . . . . . 65 3.8 Simulation of the motional excitation due to spontaneous emission from the Raman
intermediate states followed by a ﬁrst-order RSB cooling pulse . . . . . . . . . . . . 66 3.9 Sideband cooling pulse-by-pulse comparison . . . . . . . . . . . . . . . . . . . . . . . 69 3.10 Motional sideband Rabi rate . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70 3.11 Energy evolution of secular modes during sideband cooling at ΩT ' 2π × 76 MHz . . 73 3.12 Motional sideband Rabi rate . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75 3.13 Energy evolution of secul-
ar modes during sideband cooling at ΩT ' 2π × 40 MHz . . 77

xii
3.14 Fock state distribution of the z-COM mode after sideband cooling at ΩT ' 2π × 76 MHz . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80
3.15 RSB Rabi oscillation of the residual motional excitation after sideband cooling at ΩT ' 2π × 40 MHz . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
3.16 RSB Rabi oscillation of the residual motional excitation after sideband cooling at ΩT ' 2π × 76 MHz . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82
3.17 Secular motion time-dilation shift . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
4.1 Electrodes fabricated on the trap wafer. . . . . . . . . . . . . . . . . . . . . . . . . . 89 4.2 Time dilation shift due to EMM and secular motion as a function of the drive fre-
quency ΩT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92 4.3 Time dilation shift due to the a-EMM . . . . . . . . . . . . . . . . . . . . . . . . . . 93 4.4 Trap temperature increase versus rf drive power at ΩT ' 2π × 76 MHz . . . . . . . . 97 4.5 The fractional clock frequency shift due to BBR versus the radiation temperature . . 98 4.6 Contribution of BBR shift uncertainty at T= 300 K . . . . . . . . . . . . . . . . . . 98 4.7 Magnetic ﬁeld variance about -
the mean versus the trap drive rf power . . . . . . . . 101 4.8 Ion pair reordering rate after loading . . . . . . . . . . . . . . . . . . . . . . . . . . . 102 4.9 Optical clock up time . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104

Chapter 1
Introduction
The development of quantum mechanics since the late nineteenth century signiﬁcantly changes our view of nature and aﬀects our daily life. One of the essential inﬂuences is the redeﬁnition of the International System of Units (SI) proposed by the International Bureau of Weights and Measures (BIPM) [Taylor 08]. Except for the unit of mass, SI units are now deﬁned by fundamental properties of atoms, molecules, or photons 1 . In 1967, the unit of time, the second, was deﬁned in terms of an atomic tran-
sition frequency to replace the previous standard, which was based upon astronomical observations, as follows [Taylor 08]:
The second is the duration of 9 192 631 770 periods of the radiation corresponding to the transition between the two hyperﬁne levels of the ground state of the cesium 133 atom2 .
Since then, microwave cesium atomic clocks have been built around the world and have formed the basis of international atomic time (TAI) for half a century to date. The invention and application of TAI play an important role in global navigation satellite systems (GNSS), an example of which is the global positioning system (GPS) that many people use daily [Major 07].
Current atomic clocks all operate in essentially the same manner. They consist of a continuous electromagnetic radiation source which is frequency locked to an atomic transition frequency. The performances of atomic clocks are characterized by two quantities, accuracy and stability.
1 The unit of mass in SI is deﬁned by the international prototype of the kilogram, an artiﬁcial object made of platinum-iridium stored at the BIPM, but research is ongoing to establish a quantum-based mass reference as well [de Mirand´es 16, Richard 16]
2 This deﬁnition was later reﬁned in 1997 to refer to the transition frequency at a temperature of 0 K.

2

While the former indicates the deviation from the unperturbed frequency of the atomic transition,

i.e., systematic shifts of frequency measurements, the later represents the amount of noise of the

measurements. The accuracy of atomic clocks depends on knowledge of the atomic transition pro-

perties, and the ability to control both the atoms’ environment and atoms’ motion. Therefore,

each type of atomic clock has its own diﬃculties in terms of the accuracy. On the other hand, the

stability has a more general fundamental limit that applies to all atomic clock systems. A widely

used measure of the stability is the Allan variance, σy2, which is given by [Allan 66, Riley 08]

σy2(τ )

=

1 2(M −

1)

M −1
X

(hy(τ )ii+1

−

hy(τ )ii)2

,

i=1

(1.1)

where hy(τ )ii denotes the ith fractional frequency measurement averaged over an interrogation

duration τ , and M is the number of measurements. The quantity σy(τ ) is called the Allan deviation,

which is used frequently to characterize the stability3 of the clocks in the frequency metrology

community. For an ideal atomic system without any systematic eﬀects, the noise of frequency

measurements is dominated by the statistical uncertainties, and hence σy(τ ) decreases when τ increases. However if there is any systematic frequency shift existing in an atomic transition which

can change in time, the Allan deviation σy(τ ) will level oﬀ or even increase with large τ .

The frequency determination of atomic clocks is conducted in such a way that the total

interrogation duration τ consists of many repeated measurements of duration Tint. For an ideal system, the fundamental limit to the measurement noise results from the nature of measurements

in quantum mechanics, and is called quantum projection noise [Itano 93]. In such cases, the Al-

lan deviation can be written in a simple form if an atomic transition is probed using Ramsey

spectroscopy [Ramsey 85, Itano 93]:

1

σy(τ )

=

√ 2πf0 N Tintτ

,

(1.2)

where f0 is the atomic transition frequency, and N is the number of atoms. From this expression,
it is obvious that atomic clocks beneﬁt from a larger transition frequency f0. Therefore, if we
3 In fact, it denotes the instability of the clocks. The smaller the Allan deviation σy(τ ), the better the stability of the clock.

3
Table 1.1: Secondary representations of the second in the optical frequency domain recommanded by the BIPM as of 11 May, 2016 [Taylor 08]. The values are the weighted mean of measurements from various laboratories.

Atomic species 27Al+ 199Hg+ 171Yb+ 171Yb+ 171Yb 88Sr+ 87Sr

Transition
3s2 1S0 - 3s3p 3P0 5d106s2 2S1/2 - 5d96s2 2D5/2
6s 2S1/2 - 5d 2D3/2 2S1/2 - 2F7/2
6s2 1S0 - 6s6p 3P0 5s 2S1/2 - 4d 2D5/2 5s2 1S0 - 5s5p 3P0

Wavelength [nm] 267 282 436 467 578 674 698

Frequency [Hz] 1 121 015 393 207 857.3 1 064 721 609 899 145.3
688 358 979 309 308.3 642 121 496 772 645.0 518 295 836 590 864.0 444 779 044 095 486.6 429 228 004 229 873.2

can stabilize an electromagnetic radiation to an atomic transition in the optical frequency domain instead of a microwave transition such as the cesium frequency standard, the stability will beneﬁt from the larger transition frequency f0. This is the strongest motivation for developing atomic clocks based upon optical transitions. This thesis discusses the development and advancement of one such optical clock based upon the “forbidden” transition |1S0i ↔ |3P0i of 27Al+.
1.1 Optical Frequency Standards
In 1983, the International Committee for Weights and Measures (CIPM) started to provide recommended values of optical transition frequencies [Quinn 84]. To date, many atomic and molecular transition frequencies in the optical frequency domain are given by the BIPM as shown in Fig. 1.1. Among them, a few atomic transitions have been chosen as secondary representations of the SI second [Taylor 08], which are summarized in Table 1.1. These optical atomic clocks are based on either trapped ions, such -
as 27Al+, 199Hg+, 171Yb+, and 88Sr+, or neutral atoms in optical lattices, such as 171Yb and 87Sr. The proposed atomic transitions with natural linewidth . 1 Hz are forbidden transitions between two J = 0 electronic states, quadrupole transitions, or octupole transitions [Taylor 08, Ludlow 15].
The invention of the optical frequency comb in 1999 simpliﬁed absolute measurements of optical frequencies [Ye 05] and sped up the development of optical atomic clocks. After almost

4

Figure 1.1:

Frequency standards recommended by the BIPM. The image is ta-

ken from Ref. [Taylor 08] (http://www.bipm.org/en/publications/mises-en-pratique/

standard-frequencies.html).

two decades of improvements of optical atomic clocks, current state-of-the-art optical frequency standards outperform the best cesium microwave standards in both accuracy4 and stability. In fact, the uncertainties of the frequency measurements shown in Table 1.1 are stringently limited by the performance of the cesium atomic clocks, which has triggered a discussion about a possible redeﬁnition of the SI second [Gill 11, Le Targat 13]. The improvement of atomic clock accuracy since the development -
of cesium atomic clocks back in the 1950s is shown in Fig. 1.2.
Trapped ion and neutral atom optical clocks both have advantages and disadvantages with respect to systematic uncertainty. One of the main sources of systematic uncertainty in optical lattice clocks is due to the optical lattice trapping ﬁeld that introduces a light shift associated with the diﬀerential polarizability between electronic states in the clock transition [Lemke 09, Yamanaka 15, Nicholson 15, Nemitz 16]. On the other hand, one of the main frequency uncertainties in the ionbased optical-
 clocks is the second order Doppler shift, which relates to the design of ion traps and laser cooling [Chou 10a, Huntemann 16]. Both types of optical clocks suﬀer from a systematic shift due to the environmental blackbody radiation, which can be mitigated by choosing atomic
4 The accuracy, or inaccuracy, refers to the systematic shift of the atomic clocks, as is normally used in the clock community.

5

transitions less sensitive to the blackbody radiation, better characterizing the ambient environment [Beloy 14, Nicholson 15], or operating the clocks in a cryogenic environment [Ushijima 15]. To date, optical frequency standards based on either one trapped ion or many neutral atoms have both reached a fractional frequency uncertainty of (2-3) × 10−18 [Nicholson 15, Huntemann 16], which is almost two orders of magnitude more accurate than cesium standards.

Figure 1.2: Clock history. Cesium microwave clock: [Lombardi 07, Jeﬀerts 07, Heavner 14]. Hydrogen atom: [Niering 00]; Calcium atom: [Sterr 04]. Strontium atom: [Boyd 07, Ludlow 08, Bloom 14, Nicholson 15]. Mercury ion: [Udem 01, Oskay 06, Rosenband 08]. Ytterbium ion: [Stenger 01, Huntemann 16]. Strontium ion: [Margolis 04]. Aluminum ion: [Rosenband 08, Chou 10a].
10−9

10−10

10−11

clock accuracy ( δf/f)

10−12

10−13 10−14 10−15 10−16 10−17 10−118 950

1960

1970

cesium 1980 1990
year

H

Hg+ Yb+

Ca optical (neutral)

Sr+

Sr

optical (ion) Hg+

Sr

Hg+ Al+ Al+

Sr SYr b+

2000 2010 2020

With regards to the clock stability, neutral atom optical clocks typically perform better due to the ability to interrogate multiple atoms simultaneously in the optical lattice in contrast to ionbased atomic clocks [Hinkley 13, Bloom 14, Schioppo 17]. A frequency stability of 6 × 10−17/√τ in the neutral atom optical clock has been reported recently [Schioppo 17]. On the other hand,

6
interrogating multiple ions simultaneously in an ion-based atomic clock to improve the stability generally leads to a degradation of the clock accuracy because of the ﬁnite size of trapping volume and accompanying micromotion shift. The stability of trapped ion optical clocks only reaches about 2 × 10−15/√τ , limited by the quantum projection noise [Chou 10a, Dub´e 15]. Therefore, carefully designed trapping potentials for multiple ions [Pyka 13, Keller 15] and clock operation protocols for a sing-
le trapped ion [Chou 11b, Hume 16] were both introduced to improve the stability issue for ion-based atomic clocks.
1.2 Optical Clock Applications
As optical atomic clocks have improved, applications in several ﬁelds have been proposed [Maleki 05, Ludlow 15]. For example, the long-term stability will beneﬁt local time-keeping [Weiss 10, Riehle 17] and navigation in deep space missions [Major 07, Prestage 09]. Stable and accurate optical clocks may simplify communication algorithms by making it possible to implement a downlink-only operation instead of a two-way conﬁguration [Prestage 09]. In addition, optical clocks can be used in conjunctio-
n with the optical frequency division technique to generate ultra-low phase noise radio frequency signals that can improve radar systems [Fortier 11].
Another potential application is in the ﬁeld of geophysics. Current advanced optical clocks can detect centimeter-level changes of the gravitational potential [Chou 10b], which may help us understand the dynamics of the interior structure of the Earth and improve earthquake prediction and volcanology [Bondarescu 15]. Moreover, two separated optical clocks linked by an optical ﬁber can monitor the relative geopotential change on a short-term basis, which will beneﬁt the study of periodic eﬀects suc-
h as the solid Earth tide [Bondarescu 15, Takano 16].
In addition, the higher accuracy and better stability of optical clocks also serve as a test bed for fundamental physics, such as searches for deviations from the predictions of the theory of relativity [Wolf 09, Flambaum 16, Delva 17], searches for various forms of dark matter [Derevianko 14], and searches for physics beyond the standard model [Dzuba 99]. These potential applications all motivate further development of better optical atomic clocks.

7

1.3

27Al+ Optical Clocks

While an optical frequency standard utilizing the forbidden |1S0i ↔ |3P0i transition of 27Al+ as well as other Group IIIA elements was proposed in the early 1980s [Dehmelt 82], high precision spectroscopy of 27Al+ was not achieved until the proposal of the quantum logic spectroscopy in 2001 [Wineland 02] and later the realization in 2005 [Schmidt 05]. The lack of light sources for the lowest dipole-allowed transition |1S0i ↔ |1P1i and the narrower linewidth of the intercombination transition |1S0i-
 ↔ |3P1i make direct atomic state discrimination through state-dependent ﬂuorescence and laser cooling challenging. To overcome this, a “logic ion” co-trapped together with the 27Al+ serves as the coolant and atomic state discriminator. The |1S0i ↔ |3P0i clock transition was observed and its absolute frequency was measured at National Institute of Standards and Technology (NIST) in 2007 [Rosenband 07]. Since then, two 27Al+ optical clocks were constructed and evaluated before the work described in-
 this thesis commenced [Rosenband 08, Chou 10a]. The systematic shifts and uncertainties reported in the literature are summarized in Table 1.2. The eﬀect of the ion’s motion contributes signiﬁcantly to the total systematic uncertainty. In contrast to other atomic species in Table 1.1, given the same amount of kinetic energy, the relatively smaller mass of 27Al+ gives rise to a larger frequency shift due to the second-order Doppler (time dilation) eﬀect. Hence, controlling ions’ motion is more cha-
llenging in 27Al+ optical clocks compared to other trapped-ion optical frequency standards. The biggest advantage of the clock transition |1S0i ↔ |3P0i in 27Al+ is its extremely low sensitivity to the ambient temperature. Characterization of the blackbody radiation environment in which the atoms are immersed is diﬃcult because all surrounding surfaces contribute. Therefore, it usually requires a signiﬁcant experimental and theoretical eﬀort to evaluate the frequency shift due to blackbody radation-
 in optical atomic clocks [Beloy 14, Nicholson 15, Dolez˘al 15, Zhang 17]. However, 27Al+ has the smallest temperature dependence among known atomic electronic transitions proposed for optical frequency standards in neutral atoms and singly-charged ions. This is due to two fortuitous properties of 27Al+.

(1) All dipole-allowed transitions connecting to the 1S0 and 3P0 states are in the deep ultraviolet

8
Table 1.2: Systematic shifts and uncertainties in previous 27Al+ optical clocks. Values are from Ref. [Rosenband 08] and Ref. [Chou 10a].

Contributor
Excess micromotion Secular motion
Blackbody radiation shift Cooling laser Stark shift Quadratic Zeeman shift
Electric quadrupole Linear Doppler shift
Clock laser shift Background-gas collisions
AOM phase chirp Total

Fractional frequency ×1018

Clock 1

Clock 2

−(20.0 ± 20.0) −(9.0 ± 6.0)

−(16 ± 8) −(16.3 ± 5.0)

−(12.0 ± 5.0) −(9.0 ± 3.0)

−(7.0 ± 2.0) −(3.6 ± 1.5)

−(453.0 ± 1.1) −(1079.9 ± 0.7)

(0.0 ± 0.5)

−

(0.0 ± 1.0)

(0.0 ± 0.3)

−

(0.0 ± 0.2)

(0.0 ± 0.5)

(0.0 ± 0.5)

(0.0 ± 0.1)

(0.0 ± 0.2)

−(508 ± 23) −(1117.8 ± 8.6)

region. Therefore the clock transition is less disturbed by the blackbody radiation, which has a wavelength of about 10 µm at room temperature.
(2) The polarizabilities of the 1S0 and 3P0 states partially cancel each other.
Therefore we only require control of the thermal environment to within 10 K near room temperature to achieve a fractional frequency uncertainty < 1.0 × 10−18 . This property is particularly advantageous for building transportable optical frequency standards.
The ﬁrst two 27Al+ optical clocks built at NIST were used to demonstrate some of the applications of optical clocks in fundamental physics. The ﬁrst example set a constraint on the temporal variation of the ﬁne structure constant, α [Rosenband 08]. Repeated measurements of the frequency ratio of the clock transitions of 27Al+ and 199Hg+ optical clocks over the course of a year were used to place a stringent limit on the temporal variation of α of (−1.6 ± 2.3) × 10−19 per year, which is still one o-
f the tightest constraints given by laboratory tests [Huntemann 14, Godun 14]. Another example was the examination of the gravitational red shift by comparing the transition frequencies of two 27Al+ optical clocks, one of which was raised by 33 cm relative to each other [Chou 10b]. The measurement agreed with the prediction of the theory of relativity

9 for gravitational time dilation. These two experiments demonstrated the potential applications of 27Al+ optical clocks, and future work will explore further possibilities with 27Al+ clocks.
1.4 Thesis Organization
This thesis discusses the construction and evaluation of the third 27Al+ optical clock at NIST. The thesis is organized as follows. In Chapter 2, the experimental apparatus will be described. Some technical aspects implemented in the current 27Al+ optical clock to improve its performance will also be discussed in this chapter. In Chapter 3, the details of a protocol to operate the 27Al+ clocks near the three-dimensional (3D) motional ground state will be presented. This protocol helps reduce the t-
ime dilation shift and uncertainty due to the secular motion by more than an order of magnitude. Other important systematic uncertainties and considerations will be discussed in Chapter 4. Finally, a preliminary uncertainty evaluation of the current 27Al+ optical clocks will be presented at the end of the thesis.

Chapter 2
Experimental Setup
When I joined the Al+ optical clock project in 2011, former members had shown a very promising accuracy [Chou 10a] and demonstrated impressive possible applications [Rosenband 08, Chou 10b]. To use it as a frequency standard, the questions arising from previous experiences are clear,
How can we improve the 27Al+ optical clock setup to make the clock more accurate and reliable?
The 27Al+ optical clock is a complicated system that involves ultimate control of both laser ﬁelds and electric signals to manipulate the atomic states in a vacuum enclosure. Therefore, simplifying the system to meet the minimum requirements for the clock operation seems like a reasonable route to take for reliability reasons. On the other hand, the accuracy of previous clocks was mainly limited by the second order Doppler shifts. One of the sources is from the excess micromotion due to the trap i-
mperfections, which basically sets the hard limit of the clock accuracy once the trap is sealed into the vacuum. Combining all these thoughts, designing a new system speciﬁcally for clock applications is a natural approach, and this was the starting point in my graduate study. In this chapter, I will describe the techniques implemented in the new 27Al+ optical clock systems to improve their accuracies and reliabilities.

11
2.1 The Trap

Unlike other single-ion optical clock systems utilizing spherical Paul traps to achieve an ultimate frequency accuracy of quadrupole transitions [Huntemann 16, Nisbet-Jones 16], the 27Al+

optical clock requires a linear Paul trap to trap more than one ion simultaneously for sympathetic

cooling and atomic state determination [Raizen 92, Schmidt 05]. In addition, the existence of

the static electric ﬁeld gradient in a linear Paul trap will not lead to a signiﬁcant quadrupole shift because the 27Al+ clock transition connects two J = 0 states, in which the electronic charge distribution cannot have multipole moments [Beloy 17]1 . A typical linear Paul trap is a quadrupole

mass ﬁlter with an additional electrostatic potential applied at both ends to provide the axial

conﬁnement as shown in Fig. 2.1. This conﬁguration has an axis in which the radio frequency (rf)

electric ﬁeld is ideally zero, which enables trapping multiple ions with minimum exposure to the rf

ﬁeld. Here, I brieﬂy explain the motion of a single ion inside a linear Paul trap as the theoretical

background. For an ideal case, the ion experiences zero rf force at any position along the trap axis;

therefore the ion’s axial (z) motion, independent of the rf potential, can to a good approximation

be expressed as a one-dimensional oscillator and its Hamiltonian Hz is given by

Hz

=

p2z 2m

+

mωz2 z2, 2

ωz = (2κQUz/m)1/2,

(2.1)

where (z, pz) are canonical position and momentum variables and ωz is the characteristic angular frequency of the trapping potential Uz in the axial direction. Here m and Q are the mass and the charge of the ion. The geometric factor κ depends on the geometry of the trap electrodes. Therefore

the motion in the z direction is a textbook harmonic oscillator. The transverse (x and y) motion

of an ion is more complicated, which is conﬁned by a harmonic pseudopotential resulting from the

rf ﬁeld; its equation of motion is described by the Mathieu equation. Following the coordinates

and notations in the ion trapping literature [Ghosh 95, Wineland 98], the ion’s transverse motion
1 Linear Paul traps for multiple clock ions have also been designed and proposed to improve the clock stability [Pyka 13].

12

is approximately given by

ui

=

Ai

  cos(ωit

+

φi)

  1

+

qi 2

cos(ΩT

t)

+

qi2 32

cos(2ΩT

  t)

+

βi

qi 2

sin(ωit

+

φi)

sin(ΩT

  t)

,

i ∈ {x, y} ,

(2.2)

where x and y are mutually orthogonal directions transverse to z, Ai and φi depend on the initial conditions, and V0 cos(ΩT t) is the applied rf potential2 . The characteristic angular motional

frequency in the transverse direction ωi is given by

ωi

=

βi

ΩT 2

,

βi

≈

  ai

+

qi2  1/2 2

,

(2.3)

i ∈ {x, y} .

Here the Mathieu parameters ai and qi depend on the trapping conditions and are deﬁned by,

ai

≡

4QUi mΩT2 R2

,

i ∈ {x, y} ,

qx

=

−qy

≡

−

2QV0 mΩT2 R2

,

(2.4) (2.5)

where Ui is the electrostatic potential in the transverse direction, and R is the distance between the ion and the electrode in the transverse direction. In general, we operate our system in the regime ai   qi2   1; therefore, the ion’s motion in the transverse directions becomes,

ui

'

Ai

  cos(ωit

+

φi)

h 1

+

qi 2

cos(ΩT

i  t)

=

Ai

cos(ωit

+

φi)

+

Ai

qi 2

cos(ωit

+

φi)

cos(ΩT

t),

ωi

'

√ QV0 . 2ΩT mR2

(2.6) (2.7)

In Eq. (2.6), we call the ﬁrst oscillation term with the smaller frequency and the larger amplitude

the secular motion and the second term the micromotion. For the ideal linear Paul trap, there is

no pure frequency component at the rf drive frequency ΩT and no micromotion in the z direction. Unfortunately, we always ﬁnd that the pure tone at ΩT exists in the ion’s motion in the real trap conﬁgurations [Berkeland 98]. We call the motion at ΩT the excess micromotion, which arises from
2 The phase of the rf ﬁeld is omitted here.

13 the imperfections of trapping potential. Through the derivation above, we ﬁnd that the potential of a linear Paul trap can be approximated to be a three dimensional (3D) harmonic well with the characteristic frequencies {ωx, ωy, ωz}, such that the ions’ motion can be quantized and described by a Fock state distribution.
Figure 2.1: Linear Paul trap schematic.
Two previous versions of ion traps used in Al+ optical clock experiments are depicted in Fig. 2.2. The ﬁrst trap was made of a stack of alumina wafers [Rowe 02] while the second one was made of blade-shaped beryllium-copper electrodes [Chou 10a]. In both traps, we found the tolerance of the machining and the assembly contributed signiﬁcantly to the trap imperfection. Starting in 2011, we worked on the design of a new type of single-zone linear Paul trap to provide a tighter tolerance and simpler a-
ssembly process. We call this new design the “Wheel Trap.” As mentioned above, the machining and the assembling tolerances are two of the main sources of imperfections. However, current state-of-the-art wafer fabrication technology can achieve an extremely tight tolerances. Therefore, we designed the wheel trap with all four-rod electrodes fabricated in a single diamond wafer and thereby eliminate imperfections due to assembly errors. In fact, this also simpliﬁed the assembly process considerably.-
 We can usually assemble a trap and vacuum system in one day. All traps were designed in-house and fabricated by Diamond Material in Germany3 .
3 Diamond Materials, http://www.diamond-materials.com

14
Figure 2.2: Ions traps used in previous Al+ optical clock experiments. Images are taken from [Hume 10]. (a)A photograph of the ﬁrst Al+ clock ion trap. (b)A drawing of the second Al+ clock ion trap.

(a)

(b)

17 mm
The wheel trap schematic and pictures are shown in Fig. 2.3 and Fig. 2.4. The traps were ﬁrst laser-machined to the desired shape from CVD diamond wafers. Afterwards the traps were masked and gold-sputtered to deﬁne both the rf and dc electrodes. Four ﬁnger structures pointing towards the center act as the four rod electrodes in the conventional linear Paul trap design. Ions are trapped in the center of the four ﬁnger electrodes. This trap design not only provides a tight machining tolerance but a-
lso is capable of generating a strong trap potential with a few hundred micrometers ion-to-electrode spacing in comparison with the planar design. This beneﬁts laser cooling and is crucial to minimize the heating due to ambient electric ﬁeld noise [Turchette 00a, Brownnutt 15, Chen 17]. Moreover, using the diamond as the substrate material improves the heat dissipation, which is critical for characterizing the clock shift due to the blackbody radiation.
Since 2011, there were several iterations of wheel traps being designed and fabricated. Some of the key diﬀerences in these iterations are summarized in Table 2.1. To achieve stronger transverse conﬁnement at a given rf power, the rf ﬁeld is applied to all four electrodes with 180◦ phase diﬀerence between two neighboring electrodes 4 . For the versions A, B, and D, all four electrodes are electrically independent and two rf voltage built-up center-tap resonators are used to generated the rf potent-
ials. The balance of the amplitude and the phase between the two resonators is the most diﬃcult task for this type of design. Diagonal electrodes in the version C and E are hard-wired
4 In fact, this trap would have strong axial rf conﬁnement in comparison with the elongated design of other linear Paul traps, if it were driven single ended.

15
Figure 2.3: (a) The version A wheel trap schematic. Colored regions are gold sputtered and the same color indicates the same rf voltage and phase. The inner surfaces of four ﬁnger electrodes are used to trap ions. (b) A microscopic picture of the trap center. The distance between two diagonally opposed electrodes is 500 µm.

16 Figure 2.4: Photographs of ﬁve versions of wheel traps. The diﬀerences between them are summarized in Table 2.1.
connected on the wafer and only one resonator is used. The detailed rf circuitry will be discussed in the next section.
The versions A and B attempt to maintain the symmetry as much as possible to minimize the excess micromotion along the trap axis. However, this symmetric design leads to a degeneracy of the dipole and quadrupole modes driven by the two rf resonators, as shown in Fig. 2.5. In fact, we observed the frequency diﬀerences between the dipole and the quadrupole modes was less than 1 MHz. Although we intended to drive the two resonators out of phase, very small phase imbalances excited the dipole mode and-
 gave rise to the excess micromotion in the directions perpendicular

17 Table 2.1: Iterations of wheel traps developed at NIST since 2011.

Version Ion-electrode spacing [µm]
Thickness [µm]
Electrode design
Status

A
250 300 symmetric
retired

B
400 300 symmetric
retired

C
250 300 diagonally hard-wired on duty: Mg+-Al+

D
250 300 capacitively coupled on duty: Ca+-Al+

E
250 500 diagonally hard-wired under construction

to the trap axis. To resolve this problem, we designed two new versions of the trap. In version D, the symmetry is broken by adding about 1 pF capacitance in the top and bottom electrode pairs. The capacitor is fabricated by overlapping gold pads on two surfaces of the wafer and using the substrate as the dielectric material. The add-on capacitance separates the dipole mode and the quadrupole mode by about 5 MHz. Given the rf drive frequency ΩT ' 2π × 76 MHz and the quality factor Q ' 100 of our r-
f resonators, this reduces the dipole excitation signiﬁcantly. A wheel trap C is currently installed in the Ca+-Al+ optical clock system.

Figure 2.5: The dipole (a) and the quadrupole (b) ﬁelds generated from two rf resonators. C: capacitor that breaks the frequency degeneracy of dipole and quadrupole ﬁelds.

(a)

(b)

C

C

C

C

An alternative construction method is to connect the diagonal electrodes on the trap wafer and use a single rf resonator to drive the trap, which was implemented in the versions C and E. Using one resonator eliminates the eﬀort of balancing the phase and amplitude of two resonators and

18 eliminates the dipole mode; however, losing the ability of individually controlling the dc voltages and rf phases of four rf electrodes leads to a requirement for two additional dc electrodes to compensate the excess micromotion in the transverse direction, which are shown in Fig. 2.4. In addition, these two compensation electrodes break the overall electrode symmetry, which requires a careful design of conductive traces on the wafer to cancel out the rf ﬁelds at the trap center as shown in Fig-
. 2.4. Another important advantage of the hard-wired trap designs is to eliminate the diﬀerential noise between two rf power lines, which is injected onto the trap and heats the ions. In our experience, we usually saw lower and more stable heating rates in the hard-wired trap designs. Currently a version C trap serves as the center of the Mg+-Al+ optical clock system. Most of the experiments throughout this thesis were conducted using version C. Version E is an upgrade of version C which is design-
ed to provide less excess micromotion. A vacuum chamber with a version E trap is currently being built.
2.2 Trap System
In addition to the trap wafer itself, several hardware components need to be installed together for an ion trap. I will discuss them in this section.
2.2.1 Vacuum Chamber
A drawing of our vacuum system is shown in Fig. 2.6. An octagon (Kimball Physics, MCF275SphOct-C2A8) provides all required optical accesses. Two cubes (Kimball Physics, MCF275SphCube-C6) are connected and mounted to the bottom of the octagon. One thermocouple feedthrough, one BNC feedthrough, one ion gauge, one all-metal valve, and one vacuum pump are connected to these two cubes. The ion gauge was only turned on during the initial pumpingdown process to monitor the pressure and is left oﬀ during -
normal operation to avoid heating the system. To reduce hydrogen outgassing, all stainless steel parts except the vacuum pump were baked at 400◦C in vacuum for around a week before the trap assembly [Park 08]. A NEXTorr

19
D100-5 vacuum pump from SEAS Group5 , consisting of a 100 l/s non-evaporable getter (NEG) pump and a 6 l/s ion pump, is used to maintain vacuum. After ﬁnishing the trap assembly, the system was baked at 150◦C and pumped by a pumping station for about three days to reach 10−11 torr pressure level measured by the ion gauge attached to the chamber. The ion pump was ﬂashed and the NEG pump was activated close to the end of the bake.
Figure 2.6: CAD drawing of the vacuum chamber. Red: vacuum pump; yellow: ion gauge; magenta: thermocouple feedthrough; green: all-metal valve; blue: optical viewport; pink: electrical feedthrough. Cage adapters next to six 1.33-inch viewports are used to attache optics close to the chamber.

(a) Top view.

11.63 inches

(c)

(b) Side view.
13.82 inches

7.11 inches

Inside the chamber, the trap wafer is mounted on the top of a copper post and sandwiched by the titanium beam pick-oﬀ as shown in Fig. 2.7. The top surface of the beam pick-oﬀ is mirror-polished and used to reﬂect the laser beam vertically towards the ion to provide the three-
5 https://www.saesgetters.com/

20
dimensional characterization of the ion’s motion. The post is silver-electroplated to improve the thermal contact conductance and acted as a heat sink to remove the heat deposited in the wafer [Li 00]. The post is screwed to a copper disk at the bottom of the chamber, which also served as a gasket to seal the bottom ﬂange. Two titanium “endcap” electrodes are also mounted on the top of the post. Two 45◦ surfaces of each endcap electrode are also mirror-polished for laser beam path stabilization. E-
ndcap electrodes are connected to the top ﬂange of the octagon using the modiﬁed groove grabbers (Kimball Physics, MCF275-GrvGrb-C02) to minimize the cantilever motion of the post. A natural abundance magnesium wire and an aluminum wire were mounted on one of the endcap electrodes and served as the sources of neutral atoms. All trap mounting hardware made of stainless steel was heat-treated and carefully selected to minimize stray magnetic ﬁelds around the center of the trap.
Figure 2.7: (a) A drawing of the electrical connections to the trap wafer and the mounting scheme of the trap and the endcap electrodes. MM: micromotion. (b) A photograph taken during the trap assembly before the electrical connections were made. A thermocouple sensor hanging next the post was clamped against the trap wafer by the beam pick-oﬀ to monitor the trap temperature. Both endcap electrodes are isolated from the copper post by alumina washers, which can be seen in (b).

endcap electrodes MM compensation electrode connection

rf electrode connection
clip electrical connection

thermocouple locations
The purposes of the seven viewports are shown in Fig. 2.8. Six uncoated fused silica viewports are mounted to the octagon for access of laser beams. Home-made cage adapters were bolted down against these six viewports for easily attaching optics to the chamber. Two molybdenum

21 feedthroughs mounted on the octagon were mechanically connected to the trap wafer to apply the rf potential and the dc compensation voltages. The BNC feedthrough was connected to two endcap electrodes for the axial conﬁnement, which were held at diﬀerent electrical potentials. The top ﬂange of the octagon was used for the ﬂuorescence collection where a fused silica viewport with a broadband anti-reﬂective coating was mounted (MPF, A8001-1-CF.) There were three thermocouple sensors inside the ch-
amber to monitor the trap temperature. One is mounted between the wafer and the beam pick-oﬀ, as shown in Fig. 2.7, while the other two are mounted at the top and the bottom of the post, respectively.
2.2.2 Imaging and Photon Collection System
The imager was designed in-house using oﬀ-the-shelf components. Two aspheric lenses (Asphericon GmbH, A50-60FPX-S-X) next to the viewport act as a relay lens system to form an ion image outside the vacuum chamber. Afterwards, a 40X microscope objective lens (Thorlabs LMU-40X-UVB) in combination with an inﬁnity-corrected lens magniﬁes the image and projects it onto an electron multiplying charge-coupled device (EMCCD) camera (Andor Technology, iXon DU885). A 200 µm diameter pinhole is mounted in th-
e focal plane of the objective lens to minimize the background photon counts. A ﬂipper mirror is mounted right after the objective lens to send the ion ﬂuorescence to either the camera or the photomultiplier tube (PMT). We use a PMT from Hamamatsu, part number R7600P-203, which has a 35% quantum eﬃciency at 280 nm. The overall photon collection eﬃciency is about 0.5%. This simple and economical design provides us with the necessary spatial resolution to resolve two ions in the camera, which are ty-
pically a few µm apart for our trap conditions.
Between the two aspheric lenses, a small aluminum mirror is installed to provide vertical laser beam access. The incoming laser is focused by the aspheric lens towards the ion at 10◦ with respect to vertical, and then is reﬂected oﬀ the beam pick-oﬀ mounted on the post, and ﬁnally exits the chamber.

Figure 2.8: Laser beam geometry in the horizontal plane of the trap axis and the quantization axis. Two vertical beams are not shown here. Ion loading beams: ablation and Al PI. 25Mg+ beams: FD, D, R, RR, BR-a, BR-t, and BR-co. 27Al+ beams: Clock, 3P1 π and 3P1 σ+/−. Refer to Sec. 2.3, Sec. 2.5, and Sec. 2.4 respectively for the detail.
s s
Endcap electrodes

22

23
Figure 2.9: Section view of the imaging and photon collection system. WD: working distance. NA: numerical aperture. EMCCD: electron multiplying charge-coupled device. PMT: photomultiplier tube. Blue: optical viewport ﬂanges. Cyan: optical viewports and lenses.

24
2.2.3 RF Resonator and RF Power Control
An rf resonator is usually used in macroscopic Paul traps. The idea is to generate the trap rf potential using the high-voltage end of the resonator. The resonators not only serve as step-up transformers but also spectral ﬁlters. Historically, coaxial resonators and helical resonators were installed in ion traps in our group, which generally have quality factors Q & 100 [Jeﬀerts 95, Poitzsch 96]. These types of resonators are typically made of copper and constructed by conventional machining techn-
iques, which tend to be heavy, expensive, and large. Therefore, we developed new resonators based on meander traces on both sides of printed circuit boards (PCB) as shown in Fig. 2.10. The resonant frequencies can be adjusted by changing the number of loops shown in Fig. 2.10. By moving the input small-loop antenna relative to the resonator, the rf input is impedance matched and coupled to the resonator. For this design, the dielectric loss of the PCB substrate is a limiting factor with regards to-
 how eﬃcient the voltage step-up can be. Beneﬁting from mature PCB manufacturing, we can easily achieve Q ' 100 by choosing industrial standard Rogers material6 as the substrate, and resonators for diﬀerent rf drive frequencies can be made without too much diﬃculty. This gives us more ﬂexibility to test diﬀerent rf drive frequencies easily.
Figure 2.10: The schematic of meander line resonators. Red and blue meanders are conductive traces printed on diﬀerent surfaces of the PCB. The left side of the board is connected to the rf feedthrough, which is in pink in Fig. 2.6.
R = 1 cm To rf feedthrough
rf Drive
In the experiments, the rf potential may ﬂuctuate due to thermal eﬀects from either the rf resonator or the rf ampliﬁer, which causes the secular frequencies to change. Moreover, we
6 https://www.rogerscorp.com/index.aspx

25 often change the rf potential in order to deterministically control the ions’ position, which tends to increase the rf power ﬂuctuations. In principle, we can intermittently measure the transverse secular frequencies and feed back to the rf power controller during the clock operation. However, this is not favorable because it will reduce the clock duty cycle and hence hurt the clock stability [Dicke 53]. Therefore, we stabilize the pick-up rf power measured on one of the dc electrodes instead, -
which should stabilize the pseudopotential. The rf power is measured by a home-made detector based on an rf envelope tracking IC (Analog Devices, ADL5511), and referenced to a dc voltage. The generated error signal is then processed by a digital servo [Leibrandt 15] and fed to a voltage controlled variable gain ampliﬁer.
2.2.4 Magnetic Field Control
As shown in Fig. 2.8, ﬁve coils are wrapped on the octagon directly to provide the necessary control of the magnetic ﬁeld. Coils at the opposite viewports are connected in series to form a Helmholtz-type coil. The coil that deﬁnes the quantization axis is driven at around 300 mA by a diode laser current driver (Arroyo Instruments, 4205-DR) with an impedance matching circuit. A low-temperature-coeﬃcient precision resistor is connected in series with the main coil next to the chamber to monitor the -
current. The main coil generates about 1.1 G along the quantization axis at the position of ions. The rest of the coils are shim coils and driven by dc power supplies to compensate the background magnetic ﬁeld. Alignment of the laser beam and B-ﬁeld direction is achieved by minimizing the |↑i component when a 25Mg+ is prepared in the |↓i state when the circularly polarized detection beam is applied.
2.3 Ion Loading
Historically, loading ions into a trap using a thermal atomic beam from a resistively heated oven followed by either electron impact ionization or isotope-selective photoionization (PI) has been used in the NIST Ion Storage group. However, after successfully loading an ion, the oven temperature may take a certain amount of time to cool down, which may perturb the optical clock

26 transition frequency via blackbody radiation. Moreover, an oven generates a continuous atomic beam while we only need to load a single ion. The large number of atoms may contaminate the vacuum signiﬁcantly after the loading process and possibly deposit atoms on the trap electrodes and dielectric surfaces, which may build up charges and even change the heating rate over time. To resolve these problems, we implemented laser ablation loading in our new trap system. Figure 2.11: Al and Mg natural a-
bundance ablation targets installed on one of the endcap electrodes.
1.0 cm
2.6 cm
Ablation targets are installed on one of the endcap electrodes and held at the endcap potential, as shown in Fig. 2.11. This prevents electrons, possibly generated from the ablation process, from being deposited on the dielectric materials. Both targets are high purity, natural abundance wires of 10 mil (254 µm) diameter. For aluminum, there is only one stable isotope, 27Al. For magnesium, three stable isotopes exist, 24, 25, 26Mg, and only 10% of the natural abundance is the desired isotope, 25Mg-
+, while about 80% is 24Mg. The distance from the targets to the center of the trap is 8 mm. The essential energy levels of 27Al and 25Mg related to the ionization process are shown in Fig. 2.12. To laser-ablate the neutral atoms from the target, we use a Q-switched frequencydoubled Nd:YLF laser at 523 nm (CrystaLaser QL523-500-O). The laser beam is focused onto the target, passing through apertures in both endcap electrodes and the trap center. The laser beam waist radius on the target is measure-
d to be about 30 µm. A motorized mirror and an acousto-

27

optic modulator (AOM) are used to steer the beam and control the ablation power. The loaded 25Mg+ is distinguished from the other isotopes using the laser-induced ﬂuorescence at the 280 nm transition |2P3/2, F = 4i ↔ |2S1/2, F = 3i while the 27Al+ is recognized by measuring the axial secular frequency of a 25Mg+-27Al+ pair. We check if a desired ion is loaded after every single pulse of the ablation laser.

Figure 2.12: Energy level diagrams of Mg and Al (not to scale). Values are taken from NIST Atomic Database, http://www.nist.gov/pml/atomic-spectra-database.

25Mg, I = 5/2

27Al, I = 5/2

7.646 eV

first ionization energy

376 nm

944 nm 5s 2S1/2

5.986 eV
687 nm 4.673 eV

4.345 eV

1P1

4s 2S1/2

3.143 eV

266 nm

396 nm

285 nm 1S0

3p 2P

J = 3/2 0.014 eV
J = 1/2

To load a 25Mg+, the ablation beam is ﬁrst steered towards the Mg target. A Doppler cooling beam, which is 400 MHz red-detuned from the |2P3/2, F = 4i ↔ |2S1/2, F = 3i cycling transition, is turned on when the ablation laser is ﬁred. Following this, a 20 MHz red-detuned Doppler cooling beam is turned on for 250 µs. Finally, a resonant laser pulse is sent to collect the ﬂuorescence. The ﬁrst thing we noticed is that ions can be generated and loaded into the trap in the absence of the photoionizatio-
n light source at 285 nm, which was not seen before when using a resistively heated oven. The exact mechanism is not fully understood but a possible explanation is the generation of excited-state atoms during the laser ablation process followed by ﬁeld ionization due to the trap rf ﬁeld [van Ingen 96, Gu¨rtler 04, Hendricks 07, Sheridan 11]. A typical pulse ﬂuence to load a

28
25Mg+ is about 1.2 J/cm2. Since our Mg+ loading mechanism is independent of the isotopes and the ablation target is naturally abundant, to isotope-selectively load 25Mg+ might be troublesome. Fortunately, the cooling light for 25Mg+ in fact heats the most abundant isotope, 24Mg+, and rejects the loading of the 24Mg+ [Drullinger 80]. We do load 26Mg+ occasionally, but 26Mg+ can be dumped out of the trap easily by lowering the trap rf potential while keeping the existing 25Mg+, if any, in the trap.
To load 27Al+ eﬃciently, we ﬁnd a PI laser is required. In the previous trap, a continuouswave (cw) diode laser at 396 nm was used in a (1+1) resonance-enhanced multi-photon ionization (REMPI) process via the |4s 2S1/2i state [Chou 10a]. In the new trap, we use a pulsed frequencyquadrupled Nd:YAG laser (Teem Photonics, STU-01E, < 0.4 ns pulse duration) and the |5s 2S1/2i as the intermediate state. Although the transition rate via the |5s 2S1/2i state is weaker, the higher peak power at 266 nm stil-
l provides suﬃcient ionization rate. In addition, this turn-key and maintenance-free laser reduces the work regarding the ion-loading. The PI process is accomplished by temporally and spatially overlapping the laser pulse with the atomic ﬂux ablated from the target.
Based on our loading experience, we ﬁnd the loading eﬃciency highly depends on the surface properties of the ablation target. Firing the ablation pulses on the same spot will eventually generate a “dead spot” that loses the ability to load ions. To avoid this, we randomly choose a new spot, which needs to be at least one beam waist away from the previous loading attempt, before each shot of the ablation laser by adjusting the deﬂection AOM frequency. The process to load a 25Mg+ and a 27Al+ is auto-
mated and the ﬂowchart of the loading process is shown in Fig. 2.13.

2.4

27Al+ Laser System

To operate the 27Al+ optical clock utilizing quantum logic spectroscopy, we need two coherent light sources at 267 nm to address the transitions between |1S0i ↔ |3P1i and |1S0i ↔ |3P0i. In this section, I will describe the implemented laser systems for 27Al+.

29

Figure 2.13: Flowchart of the automatic ion loading.

Start Loading 25Mg+

Start Loading 27Al+

Move ablation beam toward Mg target

Move ablation beam toward Al target

Set AOM frequency and power
Fire abalation laser

Check fluorescence

Dump out unwanted ions

Does bright

no

ion exist?

yes

Check axial secular frequency

no

Is 25Mg+

loaded?

yes

To load

yes

27Al+?

no

Set AOM frequency and power

Fire abalation and PI lasers
Check fluorescence

Does bright

no

ion exist?

yes

Check axial
secular frequency (25Mg+)

Start Loading 25Mg+

no

Does dark

ion exist?

yes
Check axial secular frequency
(27Al+-25Mg+)

Does 27Al+-25Mg+

no

exist?

yes

Dump out unwanted ions

Finish loading

30
2.4.1 Energy Levels and Lasers
The relevant energy levels of 27Al+ are shown in Fig. 2.14. The intercombination transition |1S0i ↔ |3P1i is used for micromotion characterization and quantum logic read-out, while the transition |1S0i ↔ |3P0i is the forbidden transition used as the optical frequency standard. We name the laser systems addressing these two transitions using the term symbols of the excited state, 3P1 and 3P0, respectively. Both laser systems are frequency-quadrupled ﬁber lasers. The IR sources are narrow-linewidth -
(Lorentzian FWHM < 5 kHz) seed lasers made by NP Photonics, Inc. The two ﬁber lasers are further ampliﬁed by continuous wave (cw) ytterbium ﬁber ampliﬁers (Keopsys Group) to generate 1-2 Watts of optical power in the infrared (IR). The IR light is afterwards frequency-doubled to the visible (VIS) using single-pass periodically poled lithium niobate (PPLN) second-harmonic-generation (SHG) waveguides (NTT Electronics, custom modules) which is then doubled to the ultraviolet (UV) by home-made ring ca-
vity frequency doublers using beta barium borate (BBO) crystals. Typically, 8 mW of 3P1 UV power and 700 µW of 3P0 UV power are obtained from the resonant UV doublers. The UV output power is stabilized by adjusting the input VIS pump power. Currently these two lasers are frequency narrowed and stabilized to high ﬁnesse cavities in the visible, which will be described later. The 27Al+ laser beams at 267 nm are reﬂected oﬀ of dichroic ﬁlters (Semrock, FF01-267/LP-25) before going into the vacuum cha-
mber to overlap with the 25Mg+ laser beams at 280 nm. To maintain the Gaussian beam proﬁle and to avoid polarization distortion, the incident angle of the ﬁlter needs to be less than 5◦. Both colors share the same focusing lenses and waveplates, which are attached to the chamber using home-made cage adapters. The diﬀerence of retardances between 267 nm and 280 nm for typical zero-order waveplates is less than 0.05 waves, which does not limit our experiments. However, chromatic aberration of the fo-
cusing lenses is observed and hence near one-to-one telescopes are installed in the 27Al+ laser beam paths for compensation.
The laser beam geometry and AOM setup for 27Al+ are shown in Fig. 2.15. To fully characterize the micromotion of the 27Al+, three nearly mutually orthogonal 3P1 beam lines are im-

31 Figure 2.14: Energy level diagram of 27Al+.
27Al+ I = 5/2
3P1 F = 7/2
3P0 F = 5/2
1S0 F = 5/2
plemented. Two of them are perpendicular to the quantization axis and π-polarized, while the third one is along the quantization axis and also serves as the 27Al+ state preparation beam. An electro-optic modulator (EOM) is installed in the state preparation beam to switch between the σ+ and the σ− polarizations, which is used to pump the 27Al+ to the stretched Zeeman levels, |1S0, F = 5/2, mF = 5/2i and |1S0, F = 5/2, mF = −5/2i, respectively for the cancellation of the ﬁrst-order Zeeman shift [Be-
rnard 98]. Two counterpropagating 3P0 (clock) beams are set up perpendicular to the quantization axis to drive the transitions |1S0, F = 5/2, mF = ±5/2i ↔ |3P0, F = 5/2, mF = ±5/2i, which provides cancellation of the ﬁrst-order Doppler shift. 2.4.2 Frequency Stabilization of the 3P1 Laser
The 3P1 laser is frequency stabilized to the same ultra-low expansion (ULE) reference cavity used for the 25Mg+ laser using the Pound-Drever-Hall (PDH) locking technique [Drever 83]. The locking scheme is depicted in Fig. 2.16. The 25Mg+ and the 3P1 laser beams are frequency-doubled to the VIS and sent through the cavity in opposite directions. The error signal is ﬁrst ﬁltered and

32

Figure 2.15: 27Al+ laser beamlines. RD: resonant frequency doubler. All 27Al+ beams are overlapped with the 25Mg+ beams lines using dichroic beam combiners shown in Fig. 2.19. The EOM is used to switch the polarization between σ+ and σ− to optically pump the 27Al+ to the desired
Zeeman state.

To BR-t port

3P0 RD

To BR-a port

AOM

AOM

AOM AOM AOM EOM

3P1 RD

To vertical port To RR/BR-co port

AOM

integrated using a digital servo box [Leibrandt 15], and then feeds back to both the piezoelectric transducer (PZT) of the seed laser and an AOM. The 88-mm- long ULE cavity is housed in a stainless steel vacuum can without active temperature stabilization. Typically ∼ 30 Hz/s of frequency drift in the VIS is observed due to the variation of the ambient temperature.
2.4.3 Frequency Stabilization of the 3P0 Laser Similarly, the 3P0 laser is frequency referenced to a ULE high ﬁnesse cavity using the PDH
locking scheme [Young 99]. However due to the narrower transition linewidth, the performance of the frequency stabilization is more demanding. The frequency stabilization set up is depicted in Fig. 2.17. The 24-cm-long ULE reference cavity is housed inside a temperature-controlled aluminum vacuum can, which is both thermally and vibrationally well isolated from the environment. The reference cavity ﬁnesse is measured to be about 400 000 in the VIS. The error signal feeds back to both the PZT of th-
e seed laser and an AOM in IR by a digital servo box, which also controls the temperature of the seed laser to improve the long-term performance of the frequency stabilization. The phase noise introduced in the ﬁber link between the reference cavity and the UV frequency

Figure 2.16: 27Al+ 3P1 laser frequency stabilization scheme. Note that the transition frequency is based on one frequency comb measurement and the systematic shifts have not been evaluated.

NP Photonics seed laser

Isolator

AOM +80 MHz
PDH Lock
Reference Cavity

Keopsys Fiber Amplifier
Wavelength Meter
0 order
AOM -2 x 200 MHz

Waveguide SHG
Amplitude-Control AOM
5 %

3P1
Al+

F = 7/2

f0 = 1 122 842.857 GHz

Switching AOM
-210 MHz

SHG Cavity
frequency-tuning AOM
-2 x 180 MHz

1S0

33

34 doubler is actively canceled using a standard ﬁber-noise cancellation scheme [Ma 94, Hume 10].

2.5

25Mg+ Laser System

The isotope 25Mg is the only one with a non-zero nuclear spin among three stable magnesium isotopes. The Zeeman levels of hyperﬁne states in |2S1/2, F = 2 and 3i and |2P3/2, F = 3 and 4i used in the experiments are depicted in Fig. 2.18. Two ﬁber lasers (Menlo Systems Inc., OrangeOne) are frequency-quadrupled to generate the UV light sources at 280 nm for transitions between |2S1/2i and |2P3/2i. Similar to the 27Al+ laser systems, the IR to VIS frequency conversion is conducted by single-pass PPLN-
 SHG waveguides (NTT Electronics, custom modules). The VIS-to-UV frequency doubling is achieved using home-made resonant frequency doublers with BBO crystals [Wilson 11]. One of the ﬁber lasers is frequency-stabilized to a high ﬁnesse cavity (ﬁnesse F ' 75 000), made of the ULE glass, utilizing the PDH technique. This laser is used for Doppler laser cooling, quantum bit (qubit) repumping, and atomic state detection. The other laser is free-running and is used to drive stimulated Raman transitions -
between Zeeman levels of |2S1/2, F = 2 and 3i for quantum logic manipulation and sideband cooling. Typically, we obtain about 15 mW of the UV power pumped by 900 mW of IR laser power. Several AOMs are used for frequency shifting, power control, and timing control. All laser beams, except the one going through the imager, are focused to about 30 µm waist radius at the position of ions, measured by the knife-edge method using the trap electrodes. The laser beam geometry and the AOM conﬁgurations of -
the 25Mg+ laser system are shown in Fig. 2.19, which will be described in detail in the following sections.

2.5.1 Qubit
Given the non-zero nuclear spin, I = 5/2, of the 25Mg+, the ground state |2S1/2i splits into two hyperﬁne levels, F = 2 and 3, with a frequency diﬀerence of about 1.8 GHz as shown in Fig. 2.18. This energy diﬀerence signiﬁcantly reduces the oﬀ-resonant transition probability while driving transitions from(to) either of the hyperﬁne states. In our experiment, two Zeeman levels of

Figure 2.17: 27Al+ 3P0 laser frequency stabilization scheme. FN AOM: ﬁber-noise cancellation AOM.

+ 40 MHz

FN AOM

fiber link Frequency Comb

NP Photonics seed laser

Isolator

- 40 MHz AOM

Keopsys Fiber Amplifier

Waveguide SHG

PDH Lock

- 80 MHz

FN AOM

Reference Cavity

AOM - 65 MHz

fiber link

Al+ 3P0
f0 = 1 121 015.393 207 851(6) GHz

Clock servo

Frequency tunning AOM
+180 MHz

FN AOM
+80 MHz

fiber link

Amplitude Servo

Isolator

SHG Cavity

1S0

35

36
Figure 2.18: Relevant energy level diagram of 25Mg+ (not to scale). D: Doppler cooling, detection; FD: far-detuned cooling; R: repumping; RR: red Raman; BR-a: axial blue Raman; BR-t: transverse blue Raman; BR-v: vertical blue Raman; BR-co: co-propagating blue Raman.

2P3/2

F = 3

mF = -3

57 MHz

F = 4

mF = -4
D FD

50 GHz

279.63 nm

BR-a BR-t BR-v

R RR

2S1/2

F = 2
1.8 GHz
F = 3

mF = -2
BR-co
mF = -3

the hyperﬁne states are used as the qubit states:

|↑i ≡ |2S1/2, F = 2, mF = −2i, |↓i ≡ |2S1/2, F = 3, mF = −3i.

(2.8) (2.9)

The manipulation of qubit states can be achieved by either a Raman two-photon transition or a microwave transition. The discrimination of qubits is essential for both the characterization of ions’ secular motion energy and the clock operation, which will be described in Sec. 2.6.1.

37
Figure 2.19: Schematic of the 25Mg+ laser beam setup. WSHG: second harmonic generation waveguide; RSHG: resonant second harmonic generation; AOM: acousto-optic modulator; D: Doppler cooling and detection; FD: far-detuned cooling; R: repumping; RR: red Raman; BR-a: axial blue Raman; BR-t: transverse blue Raman; BR-v: vertical blue Raman; BR-co: co-propagating blue Raman.

Wavelength Meter &
Reference Cavity

AOM

+2x300 MHz

AOM

Fiber laser 1118 nm

WSHG

RSHG

+1 0

+1x180 MHz

Beam splitter or combiner
Mirror

+1
+1x300 MHz
BR-a trap axis Al+

Dichroic combiner for Al+ beam

Mg+ BR-t

UV fiber

BR-co

+1

AOM

D

FD

0
AOM +1x300 MHz
+1 0
AOM +1x300 MHz
0
AOM +1x300 MHz

AOM

-2x560 MHz

R To Vertical port
+1 BR-v
B

RR AOM AOM

AOM +2x300 MHz RSHG WSHG
-1x300 MHz -2x300 MHz

Fiber laser 1118 nm

2.5.2 Atomic State Preparation and Doppler Laser Cooling
The Zeeman states |↓i and |2P3/2, F = 4, mF = −4i form a closed cycling transition, which is suitable for atomic state preparation and detection. In addition, the 40-MHz transition linewidth is also suitable for Doppler laser cooling. For each experiment, we always start with a 200-µs, σ−-polarized, and ∼ 1 mW cooling pulse at 420 MHz red-detuned from the cycling transition. This far-detuned cooling pulse is eﬃcient to cool hot ions, which might be generated by collisions with background gas. In a-
ddition, this intense cooling pulse also plays a role to prepare most of the 25Mg+ population in the |↓i state. Afterwards, a Doppler cooling pulse of duration 250 µs - 2 ms

38

is applied to the ion, which depends on the number and the species of trapped ions. At the end of

the experiment, a resonant detection pulse is applied and the laser-induced ﬂuorescence from the

cycling transition is collected and detected by the imaging system.

During the experiment, the Doppler cooling pulses and the detection pulses are actively

controlled at the same power level. To ensure that the kinetic energy of ions is close to the Doppler

limit temperature, we need to keep the laser intensity suﬃciently low, with the overhead of a longer

cooling time. To characterize the intensity of the Doppler cooling (detection) light, we measure the number of scattered photons using the detection beam when the 25Mg+ is initially prepared in the

|↑i state [Chou 10a]. The number of scattered photons due to a detection pulse of a duration τ in

µs can be expressed in terms of the population P↑(↓) and the photon scattering rate Γ↑(↓) in the state |↑ (↓)i,

Z τ

Nγ(τ ) = ηc.e. (Γ↓P↓(t) + Γ↑P↑(t)) dt,
0

=

  ηc.e.P↑(0) Γ↓τ

+

Γ↑

− γ

Γ↓ (1

−

  e−γτ )

,

(2.10)

where γ is the pumping rate from |↑i to |↓i, and ηc.e. is the collection eﬃciency of the imager. Given the hyperﬁne splitting and the branching ratio of the transition |2P3/2, F = 3, mF = −3i → |↓i, the Eq. 2.10 can be further reduced to,

Nγ (τ )

=

  A τ

+

217

(e−

sτ 217

s

−

  1) ,

(2.11)

where A is a constant, and s ≡ I/Is represents the saturation parameter of the laser beam. By ﬁtting Nγ(τ ) to the detected photon counts, we can estimate the intensity of the detection and the Doppler cooling beam on the ion. In the experiment, we typically run the experiment with the intensity set to about 10% of the saturation intensity.

2.5.3 Repumping For some pulse sequences, the 25Mg+ may have some population in the |↑i after an experiment.
To ensure most of the population in the |↓i, a repumping pulse sequence is applied. The pulse

39 sequence starts with a σ− repumping pulse to clear out the population in |↑i via the transition |↑i ↔ |2P3/2, F = 3, mF = −3i. After a repumping pulse, one quarter of the population originally in |↑i will end up in the |2S1/2, F = 3, mF = −2i state. Therefore we drive a motion-insensitive, two-photon Raman transition by turning on the red-Raman (RR) and the co-propagating blue Raman (BR-co) lasers simultaneously to bring the |2S1/2, F = 3, mF = −2i population back to the |↑i state (see Fig. 2.1-
8 and Fig. 2.19.) By alternating the repumping and the Raman pulses several times, we can move the majority of the population from |↑i to |↓i. Typically, our repumping sequence consists of three repumping pulses and two Raman pulses, which means that 98.5% of the population in the |↑i is transferred to the |↓i for ideal π pulses. 2.5.4 Motion-Sensitive Raman Spectroscopy Figure 2.20: Raman transition spectrum of a 25Mg+-27Al+ two-ion pair with all six secular modes of motion resolved. Red: after D-
oppler cooling. Blue: after Raman sideband cooling. Disappearance of the RSB transitions after Raman sideband cooling indicates the ions’ motion is close to the zero point energy.
As shown in Fig. 2.18 and Fig. 2.19, we implemented four blue Raman (BR) beams in our system. The RR beam in combination with one of the BR beams can drive Raman transitions within

40 the hyperﬁne manifolds of the |2S1/2i state. In addition, except the BR-co, the diﬀerential wave vectors of BR beams and the RR beam have suﬃcient projections along the directions of the secular modes of motion, which are capable of driving the motional sidebands of the hyperﬁne transitions. The ability to drive the motion-sensitive Raman transitions is not only crucial to laser cooling and energy characterization but also for clock operation utilizing quantum logic spectroscopy. The axial (BR--
a) and the transverse (BR-t) blue Raman beams are used to manipulate the motional quanta in the axial and the transverse directions, respectively, which gives us full control of the ions’ motion in all three dimensions. The vertical blue Raman beam (BR-v) is mainly for micromotion compensation. During the experiments, we only manipulate motional quanta between two qubit states, |↑i and |↓i. As explained in Sec. 2.1, the ions’ motion inside the trap can be described by a Fock state distribution and-
 hence we can separate the Raman transitions into three types. Throughout this thesis, the “carrier” Raman transition denotes the transition with no change of the motional state, while the red-sideband (RSB) and the blue-sideband(BSB) pulses for 25Mg+ correspond to the |↓, ni → |↑, n − Δni and |↓, ni → |↑, n + Δni transitions, respectively, where n is the initial Fock state and Δn, the order of the sideband transition, represents the number of quanta changed by a laser pulse. With our Raman beam s-
etup, we have demonstrated cooling of the motion of a 25Mg+-27Al+ two-ion pair in all three dimensions by applying numerous RSB Raman pulses to the trapped ions followed by repumping sequences [Chen 17]. A typical Raman transition spectrum of a 25Mg+-27Al+ two-ion pair as shown in Fig. 2.20 indicates that we have cooled the ions to near the 3D zero point energy. More details will be discussed in the next chapter.
2.6 Other Techniques
2.6.1 Maximum-Likelihood Probability Estimation
In our experiment, the mean photon counts collected during the detection time of 250 µs from |↓i and |↑i are about 8 and 0.9, respectively, and the two counts histograms overlap signiﬁcantly as shown in Fig. 2.21. The observed histograms in the experiment typically result from the scattered

41 Figure 2.21: Typical photon histograms scattered from |↓i and |↑i.

photons from a linear combination of two states and we ﬁnd that applying a threshold to the photon

counts is not suﬃcient to extract state populations at the 0.1 % level. To extract the probability in

|↓i, we use a maximum-likelihood estimation method to analyze our data. Before experiments start,

we need two reference histograms, P(k|↓) and P(k|↑), corresponding to the probability of observing

k photons in |↓i and |↑i, respectively. We determine reference histograms experimentally by taking

ﬂuorescence measurements when the ions are prepared in the states of |↑i or |↓i. The state |↓i

is prepared by applying a repumping pulse sequence after Doppler cooling while |↑i is prepared

by applying a microwave π pulse from |↓i. During the experiment, we record a series of photon counts {ki} from a particular quantum state |Ψi = √p |↓i + p(1 − p) eiφ |↑i in m measurements,
where p denotes the population in |↓i and φ is the relative phase between |↓i and |↑i. The errors in

preparation of |↓i, |↑i and the superposition states are negligible and do not contribute signiﬁcantly

to the determination of the state. For a binomial probability distribution, the likelihood function

is deﬁned as,

m
L(p) = Y � p P(ki|↓) + (1 − p) P(ki|↑)  .
i=1

(2.12)

42
Figure 2.22: Rabi oscillation of the motional insensitive Raman transitions. (a) and (b) Before and after the installation of the UV ﬁbers and UV power servo, respectively.

Photon Counts

8
7 (a)

6

5

4

3

2

1

00

10

8
7 (b)

6

5

4

3

2

10

20

20

30

40

60

Time [µs]

40

50

80

100

Photon Counts

By maximizing the likelihood function numerically, we can estimate the population in |↓i for any histogram observed in the experiments [Gaebler 16].
2.6.2 UV Fibers and Pulse Area Control
For clock operation, it is important to have long term stability in many components of the experiments. One important criterion of our system is to ensure the ion experiences the same pulse area at the right frequencies in each pulse sequence. To achieve this, we use ﬁbers to minimize the laser beam pointing ﬂuctuations [Colombe 14] and actively servo the pulse area by controlling the laser power after the ﬁber.
Nowadays ﬁbers that are suitable for light sources at 280 nm and 267 nm are still not available in the market due to the formation of UV-induced color-center [Skuja 01]. However, using commercially available solid-core photonic crystal silica ﬁbers after hydrogen loading and UV irradiation [Colombe 14], we can usually achieve ∼ 50% transmission through the ﬁbers at both

43 280 nm and 267 nm. The recipe to make these ﬁbers can be found on our group website7 . The ﬁber attenuation at 267 nm has not been systematically studied but it is believed to be close to the value at 280 nm reported in Ref. [Colombe 14] based upon our experience. The ﬁbers also spatially ﬁlter higher order transverse modes, typically seen at the output of BBO-based frequency doublers due to the large walk-oﬀ angle [Boyd 68], and hence reduce spatial intensity variations of laser ﬁelds at the p-
osition of ions. In general we have a few hundreds of µW to 2 mW of UV power measured after the ﬁbers. In Fig. 2.22, we show the Rabi oscillation curves of motion-insensitive Raman transition in 25Mg+ before and after installing the UV ﬁbers in our system.
Following each UV ﬁber output coupler, we set up a beam pick-oﬀ to monitor and control the laser power. The transmitted power through a ﬁber is actively maintained at a desired level by adjusting the rf power going to an AOM. This laser power servo is controlled by a high-speed digital controller [Leibrandt 15]. The high speed controller gives us the ability to control an individual pulse of duration & 1 µs and the servo performance remains the same when the duty cycle of the pulse sequence change-
s. In addition, the use of ﬁbers eliminates the pointing variations due to the thermal eﬀects of the AOMs.
2.6.3 AOM Double-pass Conﬁguration
AOMs are widely used in atomic physics experiments for frequency and timing control of laser pulses. In a double-pass conﬁguration, the beam pointing becomes insensitive to the deﬂection angle of the AOM when a cat’s eye retroreﬂector is implemented on the second pass [Snyder 75, Donley 05]. Moreover, by rotating the polarization of the second second pass by 90◦, the retroreﬂected beam will follow the incident beam path and later can be separated from the input beam such that the beam pointing ﬂuc-
tuation caused by the thermal lensing eﬀect of AOM will be canceled [Donley 05]. This technique is commonly used in the experiments which require a precision control of light intensity. However it is only possible when using the AOMs with signiﬁcant deﬂection eﬃciency in two perpendicular polarization directions, which are not available in the UV.
7 http://www.nist.gov/pml/time-and-frequency-division/ion-storage

44

Figure 2.23: The two-bounce (a) and three-bounce (b) double-pass AOM conﬁgurations. Path A (solid line): unperturbed beam path. Path B (dashed line): perturbed beam path due to the thermal eﬀect of AOM.

(a)

(b)

AOM
path A path B

AOM

path A path B

When using an UV AOM, the second pass needs to be deviated from the input beam by a small amount, which can be picked oﬀ for the experiments8 . Therefore better thermal management is usually required to eliminate the beam pointing ﬂuctuation [Kobayashi 06, Fr¨ohlich 07].
In our system, we actually investigate a diﬀerent route to reduce the thermal eﬀect. In fact, the cancellation of the thermal eﬀect in the double-pass setup relies on two factors.
• The second path passes through the same region of the AOM as the ﬁrst one such that it experiences the same thermal lensing.
• The beam pointing change of the second path needs to be opposite to the ﬁrst path in the lab frame.
These two conditions are achievable if there are odd numbers of mirror bounces after the AOM. In Fig. 2.23, we can see the three-bounce conﬁguration cancels the thermal eﬀect while the twobounce conﬁguration doubles the thermal drifts. In our setup, we did observe the reduction the beam pointing ﬂuctuation by about a factor of 5 after changing from two-mirror to three mirror conﬁguration. The drawback of this setup is that the Bragg condition cannot not be satisﬁed in both paths; however we can st-
ill achieve about 50 % deﬂecting eﬃciency after the second pass.
8 Usually two beams are separated perpendicular to the deﬂecting direction.

45
2.7 Quantum Logic Spectroscopy
With the lack of direct ﬂuorescence detection, we use a technique called quantum logic spectroscopy (QLS) to read out the atomic state of the 27Al+ [Schmidt 05]. The basic idea is to use the secular motion as the information bus to transfer the atomic state information of the ion of interest, called the spectroscopy ion, to another ion of diﬀerent species simultaneously trapped with the spectroscopy ion, called the logic ion. In the optical clock system described in this thesis, we trap a 25Mg+ as-
 the logic ion together with an 27Al+. The out-of-phase mode of motion along the trap z axis is chosen to transfer the atomic state information. The information we need to know is if the 27Al+ is in the 1S0 state or not. The process is shown in Fig. 2.24 and described as follows.
(1) Ground state cooling on the 25Mg+ to place the 25Mg+-27Al+ two-ion pair axial COM and axial STR motional modes in their ground state. At this moment, we assume the 27Al+ is in the |1S0i state.
(2) Prepare the 25Mg+ in |↓i.
(3) Add one motional quantum to the STR mode by driving the blue sideband of the intercombination transition |27Al+, 1S0 F = 5/2, mF = ±5/2i → |27Al+, 3S1 F = 7/2, mF = ±7/2i.
(4) Subtract one motional quantum by driving the red sideband of the 25Mg+ transition |↓i → |↑i.
(5) Detect 25Mg+ atomic state by detecting the scattered photon count histogram from the transition |↓i ↔ |2P3/2, F = 4, mF = −4i.
Because the 27Al+ starts in the |1S0i state, the transitions in steps 3 and 4 succeed and the 25Mg+ ends up in the |↑i. On the other hand, if the 27Al+ does not start in the |1S0i state, steps 3 and 4 are inactive and the 25Mg+ remains in the |↓i state. Therefore by distinguishing the photon count histograms shown in Fig. 2.21, we can extract the initial atomic state of the 27Al+.

46

Figure 2.24: Process of quantum logic spectroscopy. The atomic state of the 27Al+ is determined
by the scattered photon count histogram of the 25Mg+. Left column, 27Al+ not in the 1S0 state; right column, 27Al+ in the 1S0 state.

27Al+
3P1 3P0

25Mg+

Ground state cooling

27Al+
3P1 3P0

25Mg+

1S0

2S1/2

1S0

2S1/2

27Al+
3P1 3P0

25Mg+

1S0

2S1/2

27Al+
3P1 3P0

25Mg+

1S0

2S1/2

3P1 BSB 25Mg+ RSB

27Al+
3P1 3P0

25Mg+

1S0

2S1/2

27Al+
3P1 3P0

25Mg+

1S0

2S1/2

Probability Probability

Photon count

25Mg+ Fluorescence Detection

Photon count

47 Table 2.2: Comparison of two diﬀerent 27Al+ optical clock operation protocols.

Clock operation protocol
Kinetic energy of the secular motion Cooling light shift Clock duty cycle Overall clock shift

A Doppler cooled clock
Doppler limit Need to evaluate
Higher −

B Sideband cooled clock
Ground state −
Lower Potentially smaller

2.8 Clock Operation Pulse Sequence
Typically one optical clock operation sequence can be separated into three main parts: preparation, interrogation, and detection. We consider two diﬀerent clock operation protocols, A and B, proposed for the 27Al+ optical clock operation. Their diﬀerence is the ions’ kinetic energies during the interrogation period. The sequence A , Doppler-cooled clock, maintains the ions at the Doppler limit temperature during the clock interrogation while the sequence B, sideband-cooled clock, prepares the ions-
 near the motional ground state at the beginning of the clock interrogation. The comparison between the two sequences is summarized in Table 2.2.
2.8.1 State Preparation
The preparation process includes the preparation for both the internal atomic states and the external motional states. Both of the protocols start with a 200 µs FD cooling pulse on the 25Mg+ followed by a 2 ms Doppler cooling pulse to ensure the ion’s motion is close to the Doppler limit. At the end of the preparation process, multiple 3P1 pulses are applied to prepare the 27Al+ in one of the stretched Zeeman levels of the ground state. For sequence B, a ground state cooling pulse sequence is inse-
rted after the Doppler cooling pulse to prepare the ions close to the ground state; this will be discussed in the next chapter. The pulse sequence of the state preparation process is presented in Fig. 2.25.

48
Figure 2.25: State preparation pulse sequences before the clock interrogation. FD, far-detuned cooling pulse; D, Doppler cooling pulse; Prep., 3P1 state preparation pulse.

25Mg+ FD

D

3P1

Prep.

25Mg+ FD

D

3P1

Prep.

GSC

2.8.2 Clock Interrogation
When the state preparation is complete, we switch on the laser pulse to interrogate the clock transition of the 27Al+, |1S0, F = 5/2, mF = ±5/2i ↔ |3P0, F = 5/2, mF = ±5/2i. Rabi spectroscopy is used to determine the transition line center. For the sequence A , the Doppler cooling light is turned on during the clock interrogation such that ions’ kinetic energy is close to the Doppler cooling limit. in this case, the cooling light imparts an ac Stark shift to the clock transition, which needs to be-
 characterized [Rosenband 08, Chou 10a]. On the other hand, the cooling is absent during the clock interrogation in the sequence B and the ions’ kinetic energy increases due to the background heating [Turchette 00a]. Therefore, the characterization of the energy after sideband cooling and the background heating rate are necessary to determine the frequency shift due to time-dilation arising from the ions’ energy [Chen 17]. Typically, a few tens to 200 ms interrogation time is used. The pulse seque-
nce is depicted in Fig. 2.26.

49 Figure 2.26: Clock interrogation pulse. Clock, 3P0 pulse; D, Doppler cooling pulse.

3P0 Prep. 25Mg+ Prep.

Clock D

3P0 Prep.

Clock

2.8.3 Atomic State Detection
The atomic state detection is achieved by utilizing quantum logic spectroscopy. After the interrogation pulse, the atomic state of 27Al+ is determined from the resulting state of 25Mg+ following Sec. 2.7. A quantum nondemolition measurement scheme is implemented to increase the detection ﬁdelity by repeating the measurement sequence multiple times [Hume 07]. Adaptive selection of the number of repetitions using a Bayesian algorithm reduces the clock dead time and hence improves the stability [Ques-
sada 03]. In general, 5 ∼ 10 repetitions of the quantum-logic spectroscopy sequence are needed to determine which state the 27Al+ is in.

Chapter 3
Time Dilation Eﬀect due to Secular Motion
Previously, the 27Al+ optical clocks had achieved a fractional frequency uncertainty of 8.8 × 10−18 [Chou 10a]. One of the main uncertainties arose from the time dilation (second-order Doppler) shift due to secular motion while performing continuous sympathetic Doppler cooling on the 25Mg+ ion during the clock interrogation1 . The uncertainty was limited to 30% of the secular motion time dilation shift due to the diﬃculties of performing accurate temperature measurement of a 25Mg+-27Al+ two-ion pa-
ir near the Doppler cooling limit. To date, trapped-ion optical clocks are all operated with the ions’ secular motion near the Doppler cooling limit [Chou 10a, Barwood 14, Ludlow 15, Huntemann 16]. Although operating the clock with the motion cooled to near the zeropoint energy had been mentioned almost three decades ago [Wineland 87], it has not been achieved due to the complexity of the cooling sequences and the challenge to determine the energies near the motional ground state. In this chapter,-
 I will discuss how we overcome these diﬃculties to operate the clock near the 3D motional ground state and hence to reduce the secular motion time dilation shift and uncertainty.
3.1 Motion in RF Traps
The classical equations of motion of an ion inside a linear trap are given in Eq. (2.1) and Eq. (2.6). When the ion is cold, the ion’s motion is quantized and can be described by a Fock state distribution for each of the secular modes of motion. The energy of a speciﬁc motional mode p is
1 The ﬁrst-order Doppler shift in the Al+ optical clock is strongly suppressed due to various reasons, which will be discussed in the next chapter.

51 Figure 3.1: Secular modes of motion of 25Mg+-27Al+ ion pair.

given by

1

Ep

=

~ωp(n¯p

+

), 2

(3.1)

where n¯p is the average occupation number of the Fock state distribution. When one 25Mg+ and one

27Al+ are trapped simultaneously in a linear Paul trap, six independent secular modes of motion

exist2 . As shown in Fig. 3.1, there are two motional modes along each axis, the “common” (COM)

mode where the velocities of two ions are in the same direction and the “stretch” (STR) mode

where they are in the opposite directions. Therefore, if we can measure the average occupation

number of all six modes of motion, we can determine the energy of the secular motion.

For a Paul trap, the pseudopotential generated by the rf ﬁeld leads to an additional energy

in the transverse directions which needs to be included when we characterize the energy of the

ions. Because this motion has a characteristic frequency ΩT and exists even in an ideal Paul trap,

we usually call it “intrinsic micromotion” (IMM) to be distinguished from the excess micromotion

(EMM) which arises from the imperfections of the ion-trapping potential. The energy of the IMM

has been described in detail and it is approximately the same as the secular energy for a speciﬁc

secular mode of pseudopotential motion [Wineland 87]. Therefore, the energy of the secular modes
2 The eﬀect of the mode-coupling due to the Kerr nonlinearity arising from the mutual Coulomb repulsion between ions is not essential and ignored here when the ions are cold [Marquet 03].

52

of motion and the IMM energy is given by

X

1

E =

ζp~ωp(n¯p

+

), 2

p

(3.2)

where the factor ζp approximately equals 2 for the transverse motion, and 1 for the axial motion.

The resulting time-dilation shift is given by

δf

E

f

=

− mAl

c2

.

(3.3)

3.2 Sideband Thermometry

The most common method to measure the secular motion energy of trapped ions in thermal

equilibrium is to compare the transition probabilities between the ﬁrst-order blue sideband (quanta-

adding) and the ﬁrst-order red sideband (quanta-subtracting) transitions [Diedrich 89, Monroe 95].

Given a thermal distribution with average occupation number n¯, the probability Pth in a Fock state

n is expressed as

1   n¯  n Pth(n) = 1 + n¯ n¯ + 1 .

(3.4)

When we apply a pulse of duration t to drive the blue and red sideband transitions, the transition

probabilities Pb and Pr are given by

∞
X

1

Pb = 2 [1 − cos(2Ωn,n+1t)] P(n),

n=0

∞
X

1

Pr = 2 [1 − cos(2Ωn,n−1t)] P(n),

n=1

(3.5) (3.6)

where P(n) is the population in the motional state n, and Ωn,n±1 is the Rabi rate connecting the

two Fock states, |ni and |(n ± 1)i. After substituting Eq. (3.4), the equations above become

 

n¯

+

1

 

∞
X

1

  n¯  n

Pb = n¯

2(n¯ + 1) [1 − cos(2Ωn,n−1t)] n¯ + 1 ,

n=1

  n¯ + 1   = n¯ Pr.

(3.7)

Here we use Ωn,n+1 = Ωn+1,n in the derivation. Therefore, the average occupation number of a Fock

state distribution in thermal equilibrium can be determined by measuring the ratio of probabilities

53

in the blue sideband and the red sideband transitions, β ≡ Pb/Pr, and is given by

1

n¯ =

.

β − 1

(3.8)

In fact a more general formula can be written as

1 n¯ = √Δ βΔ − 1 ,

(3.9)

where βΔ denotes the Δ-th order blue sideband and red sideband ratio. We only focus on the ratio

of the ﬁrst-order sideband ratio throughout this thesis. The derived average occupation number n¯

and the measured sideband ratio are shown in Fig. 3.2.

Figure 3.2: The relation between n¯ and the ﬁrst-order sideband ratio for a thermal distribution.
104 1000

100

n

10

1

0.1 1

2

5

10

β

Although sideband thermometry provides a simple and robust method to measure the ion energy, we stress that the derivation above is only valid for the systems in thermal equilibrium. For a system possessing a non-thermal Fock state distribution, sideband thermometry may lead to a signiﬁcant deviation from the actual ion energy [Chen 17]. Even for thermal equilibrium conditions, sideband thermometry may encounter certain practical challenges. For instance, when n¯ ' 10, it becomes very sensitive to-
 a small change of the sideband ratio and hence the projection noise of the measurement in β limits the achievable accuracy. In the following two sections, I discuss speciﬁcally the determination of the secular motional energy close to and below the Doppler cooling limit in the case of the 25Mg+-27Al+ two-ion pair.

54
3.3 Sympathetic Doppler Cooling and Energy Estimation
Sympathetic Doppler cooling of a 27Al+ using a 25Mg+ in a linear Paul trap has been investigated theoretically in Ref. [Wu¨bbena 12] and I will just brieﬂy summarize here. The cycling transition | ↓i ↔ |2P1/2, F = 4, mF = −4i with a 40 MHz linewidth is used to Doppler cool all six secular modes of motion. The laser frequency is set to be 20 MHz red-detuned from the transition and the intensity is controlled to be about 10% of the saturation intensity. Although the larger linewidth of 25Mg+ leads t-
o higher achievable cooling limit in comparison with other ion species such as Be+, Ca+, etc., the mass match between 27Al+ and 25Mg+ beneﬁts the sympathetic cooling as shown in Fig. 3.3. Figure 3.3: The sympathetic Doppler cooling limit of Al+ versus the mass ratio of Al+ and the coolant ion, adapted from Ref. [Wu¨bbena 12]. The energy is in a unit of Doppler temperature of the coolant ion. The simulation is performed at diﬀerent dimensionless heating rates SE/SE0.
As shown in Fig. 2.8, the Doppler cooling beam has angles of about (60◦, 60◦, 45◦) with respect to the axes of ions’ motion (x, y, z), which provides suﬃcient projections to cool the motion in all three principal axes. If the Doppler cooling pulse is long enough such that the system reaches thermal equilibrium, the ions’ energy can be determined using the sideband thermometry discussed in the previous section, which is the method used in the previous 27Al+ clocks [Rosenband 08,

55

Chou 10a]. As an example, the energy determination given in Ref. [Chou 10a] is presented in Table 3.1. The measured energies deviate 15-20% from the theoretical estimation, which possibly arises from uncertainties of the angles between the Doppler cooling beam wavevector and the ions’ motional directions, or the measurements of red(blue) sideband transition probabilities. Hence 30% of the total energy is conservatively given as the uncertainty of energy determination.

Table 3.1: The energy of six secular modes of motion in a 27Al+-25Mg+ two ion pair after sympathetic Doppler laser cooling on the 25Mg+. n¯C and n¯M are the calculated and the measured
average occupation numbers, respectively. TD: time-dilation. The data are from Ref. [Chou 10a].

Mode
f [MHz] 25Mg+ amplitude [nm] 27Al+ amplitude [nm]
n¯M n¯C TD/quantum [10−18] Total TD [10−18]

y-COM 6.53 4.9yˆ 2.6yˆ 2.9 3.3 0.226 0.77

y-STR 5.66 2.9yˆ −5.0yˆ 4.5 3.8 0.731 3.66

z-STR 5.20 4.6zˆ −4.1zˆ 3.4 3.4 0.197 0.77

x-COM 4.64 5.5xˆ 3.5xˆ 6.3 5.9 0.290 1.97

x-STR 3.41 −4.2xˆ 6.2xˆ 10.0 8.0 0.771 8.41

z-COM 3.00 5.6zˆ 5.8zˆ 7.0 5.9 0.133 1.00

Instead of using a direct comparison of the red and the blue sideband ratio to extract the

ions’ energy, here we explore another strategy to estimate the energy close to the Doppler limit temperature. The Rabi rate Ω(np,n) 0 between two Fock states n and n0 of a secular mode p is given by [Wineland 98]

Ω(np,n) 0

≡

Ω

  hn|eiηp(a+a†

)|n0

  i 

 

 

s

=

Ω

e −

ηp2 2

n< n>

! !

ηp|n−n0

|

L|nn<−n0

|

�ηp2 

,

(3.10)

where Ω is the Rabi rate between two electronic states and ηp ≡ kz0 is the Lamb-Dicke parameter,

which can be interpreted as the ratio between the motional ground state wavefunction spread and

the wavelength of the laser ﬁeld. The lesser and greater of n and n0 are represented as n< and n>,

respectively, while Lαn is the generalized Laguerre polynomial given by

Lαn (x)

=

n
X

(−1)m

  n + α   xm .
n − m m!

m=0

(3.11)

Therefore, each observed Rabi oscillation curve is a superposition of oscillations of inﬁnite numbers

56

of Fock states with diﬀerent oscillation frequencies. Hence the population P↑ starting from |↓i after a pulse with a duration t can be modeled as

P↑(Δn)(t)

=

∞
X

1 2

� 1

−

e−γt

cos(2Ωn,n+Δn

t) 

Pth(n),

n

(3.12)

where Pth(n) denotes the population in a Fock state |ni in thermal equilibrium given in Eq. (3.4), γ

is a decoherence rate, and Δn is the change of motional quanta. In Fig. 3.4, I show a simultaneous

ﬁt to the carrier, RSB, and BSB Rabi oscillations of the z mode for a single trapped 25Mg+ with a

given Lamb-Dicke parameter from an independent calibration experiment3 . In general the ﬁtting

gives a 5-10% uncertainty of the average occupation number, n¯, at a 63% conﬁdence interval. This

sounds promising; however, the situation changes when there is more than one ion inside the trap.

When the wavevector of the laser ﬁeld has projections on multiple modes of motion, the observed

Rabi rate of a transition of the motional mode p, (DW )Ω(np,n) 0, perturbed by the Debye-Waller eﬀect

is given by [Wineland 98]

 

 

 ∞

 

(DW )Ω(np,n) 0

=

Ωn(p,n) 0

   

X

hn(h)| Y eiηp(ah+a†h)|n(h)i   ,

 

 

 nh6=p=0

h6=p

 

=

Ω(np,n) 0

Y

e −

ηh2 2

Lnh

�ηh2  .

h6=p

(3.13)

Here h denotes other motional modes with a non-zero projection along the laser wavevector k.

Therefore Rabi oscillation curves of a motional mode p close to the Doppler cooling limit of 25Mg+

actually depend on the energies in other modes of motion h. This leads to a diﬃcult determination

of the motional energy due to the large numbers of parameters in the ﬁt model. Moreover, the

systematic and statistical error of the experimentally determined Lamb-Dicke parameter leads to an additional uncertainty of about 10 % of the determined energy4 . Including all these factors,

we estimate that we could achieve an energy uncertainty equal to 20% of the total energy. As a

result, the time dilation shift uncertainty due to the secular motion is not signiﬁcantly reduced in
3 The Lamb-Dicke parameter is experimentally determined by measuring the Rabi rate ratio between the carrier and BSB transitions after ground state cooling.
4 There are many factors that may contribute this. For example, an ac Stark shift due to certain leakage may light shifts the transition center and contributes to an error of the Lamb-Dicke parameter.

57
comparison with the values we reported previously in Ref. [Chou 10a]. We need a new method to reduce this uncertainty further, which will be described in the next section.
Figure 3.4: Thermal distribution ﬁt to Rabi oscillations of the z mode of motion for a single trapped 25Mg+. Black dots are ﬁtting residuals.

Photon Counts

n¯ = 5.33 +/- 0.16

10

8

RSB

6

4

2

0

1020

20

40

60

80

100

8

carrier

6

4

2

0

1020

20

40

60

80

100

8

BSB

6

4

2

0

20

20

40

60

80

100

Time(us)

3.4 Sympathetic Sideband Cooling and Energy Estimation
In the previous section, we see the diﬃculties of characterizing the ions’ energy to our desired accuracy at the Doppler cooling limit. A naive and straightforward thought is obvious,
How about cooling the ions below the Doppler cooling limit to reduce both the frequency shift and the uncertainty due to the time dilation of secular motion?
With the development of various cooling techniques [Diedrich 89, Monroe 95, Roos 00, Barrett 03,

58
Poulsen 12a, Poulsen 12b, Manfredi 12, Lin 13, Ejtemaee 16], operating an ion trap system below the Doppler cooling limit, or even close to the motional ground state, is possible. However, operating the 27Al+ optical clock near the motional ground state requires more than the routine procedures used in other ion trap experiments.
The optical clock application requires all the motional modes to be cooled to the ground state instead of just a few of them, which implies a more complicated experimental design. Because the time dilation shift arises from the second order Doppler eﬀect, which is proportional to the total energy of ions, it will not help much by simply cooling a few motional modes. In our case, six secular modes of motion need to be addressed. This requirement suggests that adiabatic cooling is not favorable [Pou-
lsen 12b, Manfredi 12], because it requires adiabatic changes of the pseudopotential. Frequent changes of the pseudopotential are not only technically challenging and time-consuming but likely to lead to the electric noise and thermal instability of rf resonator. Sisyphus laser cooling, which has been demonstrated to cool Yb+ to near the motional ground state [Ejtemaee 16], will not work because our choice of the coolant ion 25Mg+ does not have a suitable atomic structure in the low magnetic ﬁeld -
regime. The lack of a suitable atomic structure is also problematic for electromagnetically-induced-transparency (EIT) laser cooling. Furthermore, EIT laser cooling in three dimensions is not fully understood and certain problems need to be solved [Lechner 16]. Moreover, characterizing the ions’ energy at a desired accuracy, which requires a full understanding of the cooling dynamics, is always a challenge no matter which cooling technique is chosen. Therefore we have decided to use Raman sideband-
 cooling to cool the 27Al+-25Mg+ two-ion pair because it is widely used to cool 25Mg+ close to the motional ground state in our group and does not have the problems that adiabatic cooling has. Moreover, the Raman sideband cooling has already been implemented for the axial secular modes of motion for QLS.
As shown in Fig. 2.8, we employ two sets of Raman beams to cool secular motions along the (x, y, z) directions eﬃciently. After a pulse addressing the RSB transition |↓, npi → |↓, np − Δnpi, Δnp motional quanta are ideally removed from the ions’ motional mode p. Using sideband thermometry to determine the ions’ energy after sideband cooling encounters two main diﬃculties.

59 (1) The RSB transition probability almost vanishes. (2) The outcome of the sideband cooling will not result in a thermal Fock state distribution. While the ﬁrst point may be overcome by increasing the data acquisition time, the second point reduces in the validity of sideband thermometry [Barrett 03]. Hence we need another method to estimate the energy after sideband cooling.

3.4.1 Numerical Model

To further understand the sideband cooling process, we developed a numerical model to

simulate the dynamics of the Fock state distribution during sideband cooling. The cooling is

modeled by a coherent RSB transition probability [Wineland 98], which is given by

P↑,n(t)

=

1 2

 1 − e−γt cos (2Ωn,n+Δnt)  P↓,n+Δn(0),

(3.14)

where Δn is the order of the RSB pulse, Ωn,n+Δn is the Rabi rate for the transition | ↓, n + Δni ↔ |↑, ni given in Eq. (3.13), γ is a decoherence rate, and t is the pulse duration. The heating can be

described as an incoherent diﬀusion process and has an analytical form [Turchette 00b]. Following

Eq. (9) in Ref. [Turchette 00b], we can write down the population Pn0 in a Fock state n after heating

by Δn as

Pn0

= 1

1 + Δn

n
X

  Δn  j 1 + Δn

j=max{0,n−m}

1r

!2n−2j Δn

1 −

1 + Δn

n¯a

×

  1

−

n¯a − Δn  m−n+j n¯a(1 − Δn)

  m n −

  n  j j Pm.

(3.15)

Here Pm denotes the population in a Fock state m before the heating, and n¯a represents the

average occupation number of the thermal reservoir, which is of the order of 104-105 quanta at

room temperature. The net energy gained during the heating, Δn, is given by

∞

∞

Δn = X nPn0 − X mPm.

n=0

m=0

(3.16)

In the simulation, we treat a RSB cooling pulse as a single time step. Each step consists

of processes as follows. At the beginning, a Δpn-th order RSB cooling pulse with a duration t is

60

applied to a motional mode p. The population in |↑i after the pulse is given by

∞

X

P↑(t) =

P↑,np (t),

np=0

=

∞
X

1 2

 1

−

e−γt

cos

�2Ωnp,np+Δpn

t  

P↓,np+Δpn

(0).

np=0

(3.17) (3.18)

This equation does not include any heating and we need to deal with the heating during the RSB

pulse. This is achieved by using Eq. (3.15) to calculate the eﬀects of heating of the population

P↑(t) and P↓(t) = 1 − P↑(t), respectively. In the next step, an ideal repumping process after a RSB cooling pulse perfectly pumps all the population to |↓i. At this moment, we have P↑ = 0 and P↓ = 1. Finally, we apply a heating to all the population before the next RSB cooling pulse

to account for heating mechanisms independent of atomic states. As a result, if we have enough

understanding of the heating mechanisms during the cooling and include them in our model, the

numerical simulation will give us an estimate of the energy.

3.4.2 Heating Mechanisms

During the sideband cooling, various heating mechanisms are involved. In general, there are three diﬀerent categories of heating.

(1) Heating due to the recoil from both the RSB cooling pulses and the repumping pulses.

(2) Heating due to a coherent process from |↑, ni to the |↓, (n + 1)i driven by the RSB cooling pulses.

(3) Heating due to the background electric ﬁeld noise.

The ﬁrst heating mechanism is due to the incoherent scattering of the photons. The eﬀects

of the recoil can be estimated theoretically [Itano 82, Wineland 87, Ozeri 07]. Given the resonant

Rabi frequency Ω0 and the detuning from the transition frequency δ, the energy gained for a speciﬁc

motional mode due to the recoil per pulse can be formulated as

ΔErol

=

P

(Ω0,

δ)

×

~2k02 2m

(fi

+

ff ),

(3.19)

61

where fi and ff are the projections of the unit vector of the absorption and the emission photon momenta along the direction of the motional mode, and k0 is the momentum of the laser beam;

P (Ω0, δ) is the transition probability, which is approximately given by

P (Ω0, δ)

'

4Ω20 p4Ω20 +

. δ2

(3.20)

Eq. (3.19) and Eq. (3.20) can be used to estimate the amount of the heating during the repumping

sequences. Note that the recoil energy in Eq. 3.19 will be distributed among secular modes of

motion and the change of the motional quanta of each mode is propotional to the square of its

Lamb-Dicke parameter, η2. The probability to scatter a photon during a Raman transition π pulse for 25Mg+ has been theoretically studied and is given by [Ozeri 07]

P =   πγ   2δ2 + (δ − ωf )2 , ωf |δ(δ − ωf )|

(3.21)

where ωf is the angular frequency between two ﬁne structure levels, 2P1/2 and 2P3/2, and γ is the natural linewidth of the excited states. In fact, the scattering probability in Eq. (3.21) can be

decomposed into two diﬀerent mechanisms. The ﬁrst is the Raman scattering, in which a change

of the atomic state occurs, while the second is the Rayleigh scattering, which is simply the elastic

scattering. The scattering rates are given by

PRaman

=

  2πγ 3

 

|δ(δ

ωf

,

− ωf )|

PRayleigh

=

  πγ   ωf

2δ2

− 2δωf + ωf2/3 . |δ(δ − ωf )|

(3.22) (3.23)

Experimentally the Raman scattering rate can be determined by measuring the transition probability of |↓i ↔ |↑i due to the Raman lasers. However, the Rayleigh scattering rate is diﬃcult to measure directly. In our experiment, we have (δ/ωf ) ∼ 0.02   1 such that the Rayleigh scattering rate is approximately 50% of the Raman scattering rate. For our experimental conditions, the Raman scattering rate is calculated and experimentally conﬁrmed to be < 10−4 quanta/µs for each motional mode. Importantly-
 both the Raman and the Rayleigh scattering rate are independent of the frequency diﬀerences between the two Raman beams and all motional modes will heat each

62
time the Raman beams are applied to the ions. For this reason, although the heating rates due to the Raman and Rayleigh scatterings are small, these two mechanisms contribute signiﬁcantly to the ions’ ﬁnal energy.
For the repumping sequences, the recoil heating is determined experimentally using sideband thermometry by preparing the 25Mg+ in the motional ground state of | ↓i and then repeatedly applying a pulse sequence consisting of a carrier pulse followed by a repumping sequence. This heating mechanism scales with η2 and is about 0.054 quanta per cycle for ωz ' 2π × 2.8 MHz with a single 25Mg+ in the trap. Although this value is relatively large, the eﬀective heating due to repumping needs to be multipli-
ed by the amount of population not in the motional ground state, which becomes negligible at the end of the sideband cooling process. The comparison between the experimentally measured values and the theoretical estimates of the repump heating rate is shown in Fig. 3.5.

Figure 3.5: Heating due to a repumping sequence in a 25Mg+-27Al+ two-ion pair. Blue circle: measured values from a two-ion pair; magenta square: estimated value using the measured heating rate of a single 25Mg+; olive diamond: theoretical calculation. The measurements are performed at the drive frequency ΩT ' 2π × 76 MHz.

Heating per rÈepump cycle @quanta D

ì
0.03 æà
0.02
0.01
z-COM

ì
æà
z-STR

æ à

TSiwnogleio2n5eMxpge+rimesetnimtaaltdioanta

ì Theory estimation

à
ì
æ
à
ìæ
x-STR x-COM Secluar Mode

ìæà
y-STR

à
ì
æ
y-COM

The second category of heating is due to a coherent process, illustrated in Fig. 3.6. If the 25Mg+ is pumped to the |↑i state either coherently or incoherently while a RSB cooling pulse is being applied, the cooling pulse will coherently add quanta to ions’ motion. One of the channels

63
to the |↑i state results from the oﬀ-resonant coupling to the carrier transition when a RSB cooling pulse is applied, which has been discussed in Ref. [Monroe 95]. When an ion is in the motional ground state, the probability of motional excitation due to this heating channel scales as 1/ω2, where ω is the secular mode frequency. The oﬀ-resonant transition probability can be reduced by using either shaped pulses or longer pulse duration. Another channel to the |↑i state arises from spontaneous emis-
sion from the Raman intermediate states. This process is absent when using the optical transitions for sideband cooling, such as Ca+ and Yb+. The motional excitation probability due to this channel depends on the cooling pulse duration and the frequency detuning of the Raman beams, and scales as 1/η. In general, this heating channel can be reduced by increasing the Raman laser detuning. One important thing is that mechanism (2) only heats the motional mode which the cooling pulse is applied to and-
 has very little eﬀect on the other modes.
Figure 3.6: Illustration of a heating mechanism involving a coherent process. A RSB pulse removes a motional quanta coherently for the initial state |↓i, but adds a quanta for the initial state |↑i. Therefore, population in the |↑i state during the RSB cooling pulses, either due to the oﬀ-resonant coupling to the carrier transition (green dashed arrow) or due to incoherent spontaneous emission from the excited states (blue dashed arrow), results in heating.
Excited State

n = 2 n = 1 n = 0

RSB

n = 2

Mg

n = 1

Mg

n = 0

Mg

RSB

Mg

64
Modeling the heating due to mechanism (2) is not an easy task. From Eq. (3.13), we note that the amount of heating depends on the actual Fock state distribution when a cooling pulse is applied. Since we are primarily interested in the ﬁnal energy after sideband cooling where n¯ is small for each mode, we use the value of the motional excitation rate from | ↓, n = 0i when a ﬁrst-order RSB is applied as the heating for each RSB cooling pulse to simplify our model. This value is obtained by numerical-
ly solving the optical Bloch equation and only including states | ↓, n = 0i, | ↓, n = 1i, and | ↑, n = 0i [Johansson 12, Johansson 13]. As an example, the results of the optical Bloch equation simulation are depicted in Fig. 3.7 and Fig. 3.8 for one of our experimental conditions. This simpliﬁcation will aﬀect the simulated sideband cooling time constant but not the simulated cooling limit, so it is appropriate when the number of cooling pulses is suﬃcient such that the population in the motional -
ground state dominates after sideband cooling.
The third mechanism is the heating due to electric ﬁeld noise at the frequencies of motional modes, which results from the trapping ﬁelds, called “technical noise”, or ﬂuctuating potentials on the electrode surfaces. To reduce the technical noise, two 5-MHz-bandwidth band-pass ﬁlters are installed in series before the rf resonator to provide noise reduction in addition to the frequency ﬁltering due to the rf resonator. The rf resonator is shielded by a copper tube, which is mechanically and electr-
ically connected to the chamber to ensure a stable ground level. Although there is no low-pass ﬁlter built inside the vacuum chamber for the dc electrodes, each dc electric line passes through at least one ∼ 10 kHz low-pass ﬁlter before connecting to the vacuum feedthrough. Although we do not claim that the technical noise is eliminated completely in our system, we think we have reduced it signiﬁcantly. The heating due to the ﬂuctuating surface potentials is usually called anomalous heating and it-
s physical origin is still not known. Many theories were proposed to try to explain the experimental observations [Gesley 85, Daniilidis 11, Safavi-Naini 11]. To date the previous experimental data suggest that the anomalous heating depends highly on the materials and the surfaces of the electrode [Hite 12, Kim 17] and decreases dramatically with increasing ion-to-electrode distance [Turchette 00a]. Choosing 250-µm ion-to-electrode distance is a compromise between the anomalous heating and the req-
uired rf power for the desired transverse

65
Figure 3.7: Simulation of the motional excitation due to the oﬀ-resonant carrier transition followed by a ﬁrst-order RSB cooling pulse. The trap drive frequency is ΩT ' 2π × 40 MHz. The red, green, and blue lines denote the population in vibrational levels of the 25Mg+ hyperﬁne ground states | ↓, n = 0i, | ↑, n = 0i, and | ↓, n = 1i, respectively. The x axis is normalized to the π time of RSB transitions | ↓, n = 1i ↔ | ↑, n = 0i.

Probability

100

100

10-1 x STR

10-1 x COM

10-2

10-2

10-3

10-3

10-4

10-4

10-5

10-5

10-60.0 0.2 0.4 0.6 0.8 1.0 10-60.0 0.2 0.4 0.6 0.8 1.0

100

100

10-1 y STR

10-1 y COM

10-2

10-2

10-3

10-3

10-4

10-4

10-5

10-5

10-60.0 0.2 0.4 0.6 0.8 1.0 10-60.0 0.2 0.4 0.6 0.8 1.0

100

100

10-1 z STR

10-1 z COM

10-2

10-2

10-3

10-3

10-4

10-4

10-5

10-5

10-60.0 0.2 0.4 0.6 0.8 1.0 10-60.0 0.2 0.4 0.6 0.8 1.0
Time [RSB π time]

66
Figure 3.8: Simulation of the motional excitation due to the spontaneous emission from the Raman intermediate states followed by a ﬁrst-order RSB cooling pulse. The trap drive frequency is ΩT ' 2π × 76 MHz. The red, green, and blue lines denote the population in vibrational levels of the 25Mg+ hyperﬁne ground states | ↓, n = 0i, | ↑, n = 0i, and | ↓, n = 1i, respectively. The x axis is normalized to the π time of RSB transitions | ↓, n = 1i ↔ | ↑, n = 0i.

Probability

100
10-1 x STR

100
10-1 x COM

10-2

10-2

10-3

10-3

10-4

10-4

10-50.0 0.2 0.4 0.6 0.8 1.0 10-50.0 0.2 0.4 0.6 0.8 1.0

100
10-1 y STR

100
10-1 y COM

10-2

10-2

10-3

10-3

10-4

10-4

10-50.0 0.2 0.4 0.6 0.8 1.0 10-50.0 0.2 0.4 0.6 0.8 1.0

100
10-1 z STR

100
10-1 z COM

10-2

10-2

10-3

10-3

10-4

10-4

10-50.0 0.2 0.4 0.6 0.8 1.0 10-50.0 0.2 0.4 0.6 0.8 1.0
Time [RSB π time]

67 conﬁnement, while using sputtered gold as the electrode surface is based upon previous experiences and literature [Brownnutt 15]. Experimentally, we cannot distinguish the breakdown of the electric ﬁeld noise between technical noise and patch ﬁeld noise. What we can measure is the contribution from all types of ambient electric ﬁeld noise at the frequencies of the secular modes of motion.
To measure the heating rate of ions’ motion due to electric ﬁeld noise, we ﬁrst prepare the ions close to the motional ground state. Depending on the value of the heating rate, ions then experience 10 to 30 ms of “dark time” without any cooling, such that the ions’ motion can heat due to the ambient electric ﬁeld. After the dark time, we measure the average occupation number of the ions in a speciﬁc motional mode and hence the heating rate utilizing sideband thermometry. Sideband thermometry is su-
itable for measuring the heating rate because the ambient heating rapidly drives the Fock state distribution towards thermal equilibrium [James 98, Dodonov 00].
3.4.3 Summary
With the amount of heating due to various mechanisms from either theoretical estimation or experimental determination, we can start to model the evolution of the Fock state distribution during the sideband cooling process. We assume the ion is initially in the |↓i state and that the ions’ motion is in a thermal distribution at the Doppler cooling limit, with a 20-30% energy uncertainty. After a RSB cooling pulse, part of the population will end up in the |↑i state given by Eq. (3.14). During the p-
ulse, ions will heat primarily due to mechanism (2) in Sec. 3.4.2, which only aﬀects the Fock state distribution of the motional mode that the Raman sideband cooling pulse addresses. After the cooling pulse, the population in the |↑i state will be repumped back to the |↓i state and experience recoil heating due to the repumping pulse sequence. After a repumping sequence, the ion is in the |↓i state. The heating from both the scattering of the Raman and Rayleigh processes, and the electric ﬁeld noi-
se is then calculated based upon the illumination time of the Raman laser pulses, and the total time spent during the cooling and the repumping sequence, respectively. After a cooling pulse, the Rabi rates are re-calculated using Eq. (3.13) based upon the real-time Fock state distribution to account for the Debye-Waller eﬀect. In the simulation, we can trace the Fock

68 state distribution evolution throughout the sideband cooling pulse sequences. In addition, we can use the numerical model to predict the performance of diﬀerent pulse sequences to design a pulse sequence based on speed and ﬁnal temperature goals.
Although we want to include all the important physics in our numerical model to represent what happens to the ions’ motion, there are still several assumptions and minor eﬀects neglected in the model.
• All the pulses in the cooling and the repumping sequences are perfectly on resonance and applied to the ions for exactly the duration speciﬁed.
• The heating mechanism (2) in Sec. 3.4.2 is independent of the Fock states.
• The heating due to the scattering of the |↓i state in a repumping sequence is negligible.
• The sideband cooling starts from the theoretical Doppler cooling limit.
• The Fock state distribution truncates at a ﬁnite number, usually between 150 and 200. The population above this state is assumed to be negligible and excluded from the simulation.
• The 25Mg+ ion stays within the space spanned by |↓i, |↑i, and |F = 3, mF = −2i during the cooling process and there is no population leakage to any other energy levels.
• Higher order oﬀ-resonant transition probability, which scales as η2/ω2, is not considered.
• Cross-mode coupling is assumed to be small and not considered.
For our experiments, these assumptions have been veriﬁed either theoretically or experimentally to ensure they are valid. For other experimental conditions, some of them may need to be re-considered and included in the simulation. The model is validated by comparing it with experimental data at intermediate times during the cooling sequences. The results are presented in Fig. 3.9 and show nice agreement between the model and the data.

69
Figure 3.9: Rabi oscillations of the ﬁrst RSB (red, circle), the ﬁrst BSB (blue, down triangle), and carrier (green, up triangle) Raman transitions of the z mode for a single 25Mg+ after diﬀerent numbers of pulses in the sideband cooling sequence at ' 76 MHz drive frequency. Carrier Rabi oscillation curves are shifted by −0.5 for visibility. The cooling sequence consists of 17 second order RSB pulses followed by 8 ﬁrst order RSB pulses to prepare the ion near the motional ground state. Hence only -
second order RSB pulses are applied in the ﬁrst four panels. Solid lines are given by the numerical simulation without any free parameters. The simulated population evolution of the ﬁrst ten Fock states during the cooling process is shown in the insets. There are 150 Fock states included in the simulation.

70
3.5 Cooling Pulse Optimization

Having a complete description of the sideband cooling not only helps characterize the motional energy but beneﬁts the design of an eﬃcient cooling pulse sequence. In Eq. (3.10), we note that the motional sideband Rabi rate depends on the Lamb-Dicke parameter η and the Fock state n. For example, the sideband Rabi rates of η = 0.27 are depicted in Fig. 3.10. We can see that the ﬁrst-order RSB Rabi rate almost vanishes when n ' 50, which indicates that using only ﬁrst-order RSB cooling pulses is neit-
her eﬃcient nor practical to cool the population above n ' 50 to the motional ground state [Wan 15]. Therefore, a sideband cooling pulse sequence utilizing higher-order RSB cooling pulses must be used in order to cool the population in higher Fock states. Another important thing we can see in Fig. 3.10 is that the Rabi rate of the ﬁrst-order RSB transition is larger than those of the higher order RSB transitions when n is close to zero. This indicates that the ﬁrst-order RSB pulses are always more-
 eﬃcient when the ions’ motion is close to the motional ground state.

Figure 3.10: Motional sideband transition Rabi rates Ωn,n−Δn in units of the carrier transition Rabi rate when η = 0.27.

Wn,n-D • Wcarrier

0.6
1st sideband
0.5
2nd sideband

0.4

3rd sideband

4th sideband
0.3
5th sideband

0.2

0.1

0.0 0

20

40

60

80

100

Initial Fock State n

In this section, I will describe two diﬀerent optimization approaches to design an eﬃcient sideband cooling pulse sequence based upon our model. The ﬁrst sequence was used when we

71 Table 3.2: Parameters of a 25Mg+-27Al+ two-ion pair at 76 MHz drive frequency.

Frequency (MHz)
Lamb-Dicke parameter (25Mg+)
Time-dilation shift per quantum (10−18)
Occupation number from simulation (quanta)
Occupation number from single-thermal distribution
ﬁt (quanta)
Occupation number from double-thermal distribution
ﬁt (quanta)
Occupation number bounds (quantum)

x-COM 6.2 0.12
−0.21 0.009 9
0.008 7
0.024
0-0.06

x-STR 5.4 0.06
−0.85 0.009 0
0.005 9
0.024
0-0.05

y-COM 7.2 0.11
−0.18 0.007 8
0.009 9
0.027
0-0.04

y-STR 6.5 0.05
−0.86 0.004 9
0.006 9
0.037
0-0.06

z-COM 2.7 0.18
−0.12 0.015
0.006 6
0.044
0-0.09

z-STR 4.8 0.16
−0.18 0.003 5
0.004 4
0.018
0-0.04

operated our system at an rf drive frequency ΩT ' 2π × 76 MHz, while the second one, which is applicable to more general trapping conditions, is used at ΩT ' 2π × 40 MHz.
3.5.1 Cooling Pulse Sequence at Drive Frequency ΩT ' 2π × 76 MHz
The conditions of the trap operated at the drive frequency ΩT ' 2π×76 MHz are summarized in Table 3.2. The ﬁrst-order RSB cooling pulses for the z-COM mode (Lamb-Dicke parameter η = 0.18) become less eﬃcient for the population at higher Fock states because of smaller Rabi rates. Therefore, second order RSB pulses are implemented in the sideband cooling pulse sequence. Our simulation shows that including higher order RSB pulses signiﬁcantly reduces the population in high Fock states.
The optimization process starts by choosing a ﬁxed number of total cooling pulses, N , which sets roughly the time spent for the sideband cooling. We do not perform a global optimization of all the pulse durations and orders because of the numerous degrees of freedom, which makes it numerically challenging. Instead we perform a pulse-by-pulse optimization. We limit the optimizer

72

to choose either a ﬁrst or a second order RSB pulse based upon a ﬁgure of merit. In a global

optimization, the ﬁgure of merit is the ﬁnal total energy, but in a pulse-by-pulse optimization this

is not a good choice because it tends to focus on the populations in the low-lying Fock states ﬁrst,

which will be cooled by the subsequent pulses. The i-th cooling pulse is chosen from either the ﬁrst

or the second order RSB pulse to minimize

∞

X

hnpiopt =

Pnp np,

np=N −i+1

(3.24)

which is the total motional energy (in units of ~ωp, where ωp is the motional frequency of the secular

mode p) lying above the Fock state np = N − i after the i-th pulse is applied. The logic of choosing

this ﬁgure of merit is that the remaining (N − i) pulses ideally will cool all of the population in

the states from np = (N − i) to np = 1 to the ground state by choosing the proper duration of the

ﬁrst-order RSB pulses.

This optimization process was performed for the z-COM mode only because this mode is

the most problematic due to its larger Lamb-Dicke parameter and more signiﬁcant population in

higher Fock states after Doppler cooling. The optimization suggests a pulse sequence with multiple

second-order RSB pulses followed by a few ﬁrst-order RSB pulses at the end. In fact, we ﬁnd the

total energy after sideband cooling is not very sensitive to the exact number of the second-order

RSB pulses. Hence the cooling pulses we chose for the experiments were a compromise between

the optimization results and factors such as the cooling time spent and the ease of parameterizing

the cooling sequence in our experimental control system.

The resulting pulse sequences we used in our experiments are the following. For a single 25Mg+, we applied 17 second-order RSB pulses followed by 8 ﬁrst-order RSB pulses on the axial mode, and 25 ﬁrst-order RSB pulses on the two transverse modes. For a 25Mg+-27Al+ ion pair, 15

second-order RSB pulses followed by 25 ﬁrst-order pulses were applied on the axial modes, while

40 ﬁrst-order RSB pulses were applied on the transverse modes. Cooling pulses were alternatingly

applied to motional modes in the descending order of secular frequencies. The simulated evolution

of the average occupation numbers in the six secular modes is plotted against the number of cooling

73 pulses applied in Fig 3.11. For the two axial modes, the diﬀerent cooling rates occurring around 100 pulses in the ﬁgure corresponds to the change from second-order RSB pulses to ﬁrst-order RSB pulses. The frequency spectra of all six resolved motional modes is shown in Fig. 2.20. Figure 3.11: The evolution of average occupation number, n¯, during the sideband cooling at ΩT ' 2π × 76 MHz. The trap conditions are given in Table 3.2.
101

Average occupation number

100

z Com

10-1

z STR

y COM

y STR

x COM

10-2

x STR

10-3 0

50

100

150

200

Number of cooling pulses

One important conclusion from this optimization process is that two pulse sequences may result in very diﬀerent Fock state distributions and energy, but yet give very similar results in a typical sideband thermometry experiment. Using second-order sideband pulses was crucial for achieving low energy in the axial modes with higher Lamb-Dicke parameters. While some more improvement may be possible by performing a global optimization, the cooling pulse sequence has provided us with a suﬃcient solutio-
n in terms of the cooling eﬃciency and the achievable energy for the clock operation.

74

3.5.2 General Sideband Cooling Pulse Sequence

We have also operated our system at a lower drive frequency, ΩT ' 2π ×40 MHz to reduce the excess micromotion5 . Due to the trap stability considerations, we ﬁxed the Mathieu parameters

qi given in Eq. (2.5) as we changed the drive frequency. The trap parameters are summarized in Table 3.3. The motional sideband Rabi rates of two secular modes are shown in Fig. 3.12. The

ﬁrst thing we noticed is that there is more population in the higher Fock states after the Doppler

laser cooling due to the lower secular frequencies. In addition, the Lamb-Dicke parameters of all

secular modes increases signiﬁcantly. Therefore, sideband cooling utilizing higher order RSB cooling

pulses becomes necessary for most modes. Although we can still apply the optimization procedure

discussed in the previous section on each secular modes, it becomes too complicated in terms of

the parameterization of the cooling sequence in our experimental control system. Therefore we are

interested in ﬁnding a simple method to design a cooling pulse sequence.

For the clock operation, what we actually care about is the energy that the ions have after

sideband cooling. If we apply a sideband cooling pulse sequence consisting of Np ideal RSB π

pulses to cool a Fock states distribution of the motional mode p in a descending order starting from

the Fock state n = Np, there exists a crude upper bound of the remaining energy after sideband

cooling,

∞

X

E(Np) . ~

Pnp np.

np=Np+1

(3.25)

If the pulse duration is chosen properly, the population in a Fock state n can always be cooled no

matter which order of RSB pulse is used. This indicates that the upper bound E(Np) is independent of the order of RSB pulses we are using6 . Therefore, we end up with a rough energy upper bound

simply based upon the number of pulses applied. Moreover, since the z-COM mode has the largest

occupation number after the sideband cooling, the upper bound for the z-COM mode actually

applies for all the other modes. In such a case, the only parameter we need to specify for sideband
5 See Sec. 4.2 for details. 6 The zero-point energy is ignored here since it is just an energy oﬀset and plays no role in the sideband cooling process.

75

Figure 3.12: Motional sideband transition Rabi rates Ωn,n−Δn in units of the carrier transition Rabi rates of the (a) z-COM mode and the (b) x-COM mode when the trap is operated at ΩT ' 2π × 40 MHz. Green bars represent the energy in each Fock state at the Doppler cooling ﬁnal temperature.
The red dashed line denotes the threshold Fock state Np such that the energy in the Fock states of the motional mode p above Np is less than 10% of the total energy.

Sideband Rabi rate (Ωcarrier)

En=n×Pn

100 (a)
10-1

Nz − COM = 57

10-2

10-3

10-4

10-5 0

50

100

100 (b)

10-1

Nx − COM = 12

10-2

10-3

10-4

10-5 0

50

100

Fock state n

0.7
1st order 2nd order 0.6 3rd order 4th order 0.5 5th order
0.4

0.3

0.2

0.1

150

2000.0

0.6

1st order

2nd order 3rd order

0.5

4th order

5th order 0.4

0.3

0.2

0.1

150

2000.0

Sideband Rabi rate (Ωcarrier)

En=n×Pn

76 Table 3.3: Parameters of a 25Mg+-27Al+ two-ion pair at 40 MHz drive frequency.

Frequency (MHz)
Lamb-Dicke parameter (25Mg+)
Time-dilation shift per quantum (10−18)
Occupation number from simulation (quanta)
Occupation number from single-thermal distribution
ﬁt (quanta)
Occupation number from double-thermal distribution
ﬁt (quanta)
Occupation number bounds (quantum)

x-COM 3.3 0.16
−0.11 0.014
0.022
0.069
0-0.10

x-STR 2.85 0.08 −0.52 0.033
0.009 4
0.13
0-0.16

y-COM 3.95 0.15 −0.09
0.008 0
0.021
0.028
0-0.04

y-STR 3.5 0.065
−0.52 0.007 5
0.005 9
0.005 9
0-0.01

z-COM 1.5 0.25
−0.07 0.18
0.060
0.98
0-1.31

z-STR 2.5 0.21
−0.10 0.044
0.063
0.65
0-0.78

cooling the 25Mg+-27Al+ ion pair is just one: the ratio of the “crude” remaining energy E(Np) and the energy after Doppler laser cooling in the z-COM mode. This ratio further sets the number of pulses we should apply on each of secular modes. For our experiment, we usually set this ratio to be 0.1 for the 25Mg+-27Al+ two-ion pair, which guarantees at least 90% of the total energy of ions has been removed during the sideband cooling process. This ratio corresponds to 57 sideband cooling pulses on e-
ach of the motional modes.
Although this crude upper bound always holds independent of the orders of the sideband pulses, the ﬁnal achievable energy and the cooling eﬃciency do depend on the order of sideband cooling pulses. Again, we only perform a pulse-by-pulse optimization instead of a global optimization because of the numerical diﬃculties. Suppose we want to apply a RSB π pulse to cool the population Pnp in a speciﬁc Fock state np of the secular mode p, the amount of energy change per

77
Figure 3.13: The evolution of average occupation number, n¯, during the sideband cooling at ΩT ' 2π × 40 MHz. The trap conditions are given in Table 3.3.

Average occupation number

101

100

z Com

z STR

10-1

y COM

y STR

x COM

10-2

x STR

10-3 0

50

100

150

200

250

300

350

Number of cooling pulses

unit time for the population in the Fock state np corresponds to

dE(np) dt

=

2~Δnp

Ωnp,n−Δnp π

Pnp

,

(3.26)

where Ωnp,np−Δnp is the Δnp-th order RSB Rabi rate given in Eq. (3.10). For a sequence consisting of Np RSB pulses, the optimization of the i-th pulse is performed by choosing the order of the

RSB transitions to maximize the energy change per unit time in the Fock state np = (Np − i + 1),

dE(Np −i+1)/dt, for a given Lamb-Dicke parameter ηp. Currently our experimental control system is programmed in such a way that the computer will perform the optimization processes on all six

motional modes and automatically choose the pulse durations and frequencies with given Np and

ηp. The simulated evolution of the average occupation number of six secular modes during this cooling pulse sequence is shown in Fig. 3.13. The pulse sequence used to cool 25Mg+-27Al+ at

ΩT ' 2π × 40 MHz is summarized in Table 3.4. In the experiment, the pulses were alternatingly

78 applied to motional modes in a descending order of secular frequencies. Typically, this cooling sequence took about 10 ms to cool all six modes close to the motional ground state.

Table 3.4: Number of sideband cooling pulses of each sideband order for the drive frequency ΩT ' 2π × 40 MHz.

Sideband order 3 2 1

x-COM

0 27 30

x-STR

0 0 57

y-COM

0 23 34

y-STR

0 0 57

z-COM

19 26 12

z-STR

1 39 17

3.6 Clock Frequency Shifts and Uncertainties due to Secular Motion
3.6.1 Determination of the Energy after Sideband Cooling
The main goal of the development of the numerical model is to determine the ions’ energy after sideband cooling to a desired accuracy. As an example, the simulated Fock state distribution of the z-COM mode after sideband cooling at the 76 MHz drive frequency is shown in Fig. 3.14. Besides the thermal-like distribution for the Fock states n < 3, we note that there is a plateau probability distribution for Fock states n & 5 appearing in our simulation. Although the sum of the probability in the plat-
eau distribution is typically too small to be observed in the experiments, our simulation indicates that it usually contributes more than 90% of the total energy. For the z-COM mode at ΩT ' 2π × 76 MHz, about 95% of the total energy is in the plateau distribution in the higher Fock states.
To include the energy contribution from this “hidden” population, we ﬁt the simulated Fock state distribution to a linear combination of two thermal distributions to extract the mean occupation number n¯h that characterizes the energy of the plateau distribution. Given n¯h as a ﬁxed parameter, we then ﬁt the RSB Rabi oscillation data shown in Fig. 3.16 to a double thermal

79 distribution. The probability in a speciﬁc Fock state P (n) is expressed as

P (n) = αPth(n|n¯l) + (1 − α)Pth(n|n¯h),

(3.27)

where n¯h is derived from the simulation and n¯l is a ﬁt parameter that characterizes the energy in the lower Fock states. The probability Pth(n|n¯) denotes the population in the Fock state |ni of the thermal distribution with the average occupation number n¯, which is given in Eq. (3.4), and α represents the weight between the two thermal distributions.
The eﬀect of oﬀ-resonant carrier transitions is also considered in the analysis. The oﬀ-resonant transitions cause a small amplitude (< 0.5%), high frequency (& 1 MHz) oscillation in addition to the residual RSB Rabi oscillation. Because the residual RSB and oﬀ-resonant carrier transitions have very diﬀerent frequencies, the transition probabilities at any given pulse duration can be approximated by the sum of these two eﬀects. Unfortunately, we do not have the required timing resolution in our ex-
perimental control system to resolve the oﬀ-resonant transitions. To include this eﬀect in our energy estimate, we ﬁrst record the laser power as a function of time for the experimental pulses and numerically calculate the oﬀ-resonant carrier transition amplitudes. Then we assume the fast oscillations due to the oﬀ-resonant transitions cause an oﬀset towards higher transition probability and scatter of the experimental data. Therefore, we add this additional oﬀset to our ﬁtting model and represent-
 the scatter as the red shaded region as shown in Fig. 3.16. For the system operating at 76 MHz drive frequency, this eﬀect is signiﬁcant for the data of the z-COM RSB transition but not the other motional modes. This is due to the adiabaticity arising from the relatively long turn-on and turn-oﬀ time of the laser pulses (∼ 100 ns) in comparison with the oscillation frequencies.
In Fig. 3.16, we also show mean occupation numbers from both the ﬁt to the single and double thermal distribution models and the simulation. In general the least-squared ﬁt to the Rabi oscillation curves using the double thermal distribution model give a factor of two to three smaller in χ2 in comparison with the single thermal distribution model. Moreover the double thermal distribution ﬁt tends to give a higher estimate of the ions’ energy. Therefore, the 95%

80
Figure 3.14: The simulated Fock state distribution in z-COM mode after sideband cooling at ΩT ' 2π × 76 MHz. The red line represents a ﬁt to a double-thermal distribution with mean occupation numbers 0.004 and 11, and weights 0.99 and 0.01.

Probability

100 10-1 10-2 10-3 10-4 10-5 10-6 10-7 10-8 10-9 0

z Com

10

Fo20ck state30n

40

50

conﬁdence interval of the ﬁt to a double thermal distribution is used as the estimate of the energy upper bound. To examine the eﬀects of both the non-linearity of the ﬁtting model and the nonGaussian distribution of the experimental data, we performed a bootstrapping test by re-sampling residuals [DiCiccio 96]. The results were consistent with that from the least-squares ﬁt.
The energy determination was performed at two diﬀerent drive frequencies, ' 40 and ' 76 MHz. The heating contributions are summarized in Table 3.5 and Table 3.6. The ﬁt to the RSB transitions of the residual motional excitation are plotted in Fig. 3.15 and Fig. 3.16. The results are summarized in Table 3.3 and Table 3.2.
3.6.2 Time-dilation Shift due to Secular Motion
The time-dilation shift per motional quantum for the two rf drive frequencies are shown in Table 3.3 and Table 3.2. Note that the shifts include the contributions from the IMM. As discussed in Sec. 2.8, for the sideband cooled optical clock utilizing the protocol B, there is no additional cooling light shift during the clock interrogation. As a result, we can completely eliminate the associated light shift existing in the previous 27Al+ optical clocks that used the protocol

81

Figure 3.15: Red-sideband Rabi oscillations on the |↓i → |↑i transition of 25Mg+ for the six 25Mg+27Al+ motional modes after sideband cooling at ΩT ' 2π × 40 MHz. The blue data points are the average of experimental data and the error bars are the standard deviation of the mean. Solid line: double-thermal distribution ﬁt; dotted line: single-thermal distribution ﬁt; dashed line: simulation. The red shaded regions represent the range of the oﬀ-resonant carrier transitions. The insets represent the -
average occupation numbers from ﬁts and the simulation. Diamond: simulation; circle: single thermal distribution ﬁt; square: double thermal distribution ﬁt. The green error bars represent the experimentally determined uncertainties of average occupation numbers after sideband cooling. The upper bound of energy is given by the 95% conﬁdence interval of the doublethermal distribution ﬁt.

Transition Probability

0.10
0.08 z-COM
0.06

n¯1.310

0.10
0.08 z-STR
0.06

n¯0.780

0.04

0.04

0.02

0.02

0.000

5

0.10
0.08 y-COM

0.06

10

15

n¯0.040

20 0.000

5

10

15

20

25

0.10
0.08 y-STR
0.06

n¯0.010

0.04

0.04

0.02

0.02

0.000 5 10 15 20 25 30 35 40 0.000 10 20 30 40 50 60 70 80 90

0.10
0.08 x-COM
0.06

n¯0.100

0.10
0.08 x-STR
0.06

n¯0.160

0.04

0.04

0.02

0.02

0.000 5 Puls10e D1u5rati2o0 n (2µ5 s )30 35 0.000 10Puls20e D3u0rati4o0 n (5µ0 s )60 70

82
Figure 3.16: Red-sideband Rabi oscillations on the | ↓i → | ↑i transition of 25Mg+ for the six 25Mg+-27Al+ motional modes after sideband cooling at ΩT ' 2π × 76 MHz. The blue data points are the average of about 50 000 experiments and the error bars are the standard deviation of the mean. Solid line: double-thermal distribution ﬁt; dotted line: single-thermal distribution ﬁt; dashed line: simulation. The red shaded regions represents the range of the oﬀ-resonant carrier transitions of the double-t-
hermal distribution ﬁt, which is signiﬁcant for the z-COM mode, but not the other motional modes. The insets represent the average occupation numbers from ﬁts and the simulation. Diamond: simulation; circle: single thermal distribution ﬁt; square: double thermal distribution ﬁt. Circles overlay diamonds to within less than the size of the symbol. The green error bars represent the experimentally determined uncertainties of average occupation numbers after sideband cooling. The upper bound of energ-
y is given by the 95% conﬁdence interval of the double-thermal distribution ﬁt.

83

Table 3.5: Summary of heating rates due to diﬀerent mechanisms considered in the simulation at 40 MHz drive frequency.

Repumping sequence (quanta/cycle)
Raman scattering (quanta/µs)
Rayleigh scattering (quanta/µs)
Oﬀ-resonant coupling (quanta/pulse)
Spontaneous decay and RSB (quanta/pulse)
Electric ﬁeld noise (quanta/s)

x-COM 0.037 4.6 × 10−5 2.3 × 10−5 7.4 × 10−4 1.1 × 10−3 21.0 ± 0.4

x-STR 0.015 1.2 × 10−5 6.0 × 10−6 1.3 × 10−3 2.3 × 10−3 4.4 ± 0.5

y-COM 0.009
4.1 × 10−5 2.1 × 10−5 4.8 × 10−4 1.3 × 10−3 19.9 ± 0.4

y-STR 0.002 8.7 × 10−6 4.4 × 10−6 6.0 × 10−4 2.8 × 10−3 4.5 ± 0.2

z-COM 0.082 5.8 × 10−5 2.9 × 10−5 8.8 × 10−3 7.4 × 10−4 26.5 ± 2.7

z-STR 0.031 3.9 × 10−5 2.0 × 10−5 2.0 × 10−3 9.3 × 10−4 1.9 ± 0.2

Table 3.6: Summary of heating rates due to diﬀerent mechanisms considered in the simulation at 76 MHz drive frequency.

Repumping sequence (quanta/cycle)
Raman scattering (quanta/µs)
Rayleigh scattering (quanta/µs)
Oﬀ-resonant coupling (quanta/pulse)
Spontaneous decay and RSB (quanta/pulse)
Electric ﬁeld noise (quanta/s)

x-COM 0.015 4.6 × 10−5 2.3 × 10−5 3.9 × 10−4 1.4 × 10−3 11.95 ± 0.64

x-STR 0.004 1.2 × 10−5 6.0 × 10−6 3.6 × 10−4 2.6 × 10−3 1.94 ± 0.08

y-COM 0.012 4.1 × 10−5 2.1 × 10−5 2.1 × 10−4 1.5 × 10−3 9.47 ± 1.00

y-STR 0.002 8.7 × 10−6 4.4 × 10−6 3.3 × 10−4 3.1 × 10−3 1.96 ± 0.18

z-COM 0.027 5.8 × 10−5 2.9 × 10−5 1.6 × 10−3 7.5 × 10−4 9.12 ± 0.32

z-STR 0.017 3.9 × 10−5 2.0 × 10−5 6.5 × 10−4 9.1 × 10−4 0.34 ± 0.02

84

A [Rosenband 08, Chou 10a]. After preparing ions in the 3D motional ground state following the

protocol B, the average occupation number of the ions in a speciﬁc motional mode p during a clock

interrogation of duration ti can be expressed as

hnp(ti)i

=

n¯p,0

+

1 2

n¯˙ p

ti,

(3.28)

where n¯p,0 is the energy after sideband cooling given in Table 3.3 and Table 3.2, and n¯˙ p is the

heating rate due to ambient electric ﬁeld noise given in Table 3.5 and Table 3.6. Angle brackets

denote a time-average over the clock interrogation time. The upper bound on the fractional time-

 

 

dilation

shift

is

estimated

as

the

ti 2

n¯˙ p + 2σn¯˙ p

value added with the upper bound of n¯p,0. Here

σn¯˙ p is standard deviation of the mean of the heating rate measurements given in Table 3.5 and

Table 3.6. For the lower bound, we take the mode p to be initially in its ground state and use

ti 2

  n¯˙ p

−

  2σn¯˙ p

as

the

contribution

from

the

heating.

The bounds of the time-dilation shift for a

speciﬁc mode p are given as

  δf f

 upper(lower)
p

=

  δνp   f

hnp(ti)upper(lower)i

=

  δνp f

 

  nup,p0per(lower)

+

ti 2

(n¯˙ p

±

  2σn¯˙ p

,

(3.29)

where δνp denotes the secular motion time-dilation shift per motional quantum. Finally, we conser-

vatively assume the shifts in six diﬀerent secular modes are correlated, which should be the worst

case, and use the average of the upper bound and lower bound as the estimate for the time-dilation

shift.

  δf  upper(lower) X   δf  upper(lower)

=

,

f secular

p fp

 δf  

=

  δf  upper
f secular

+

 

δf f

 lower
secular

.

f secular

2

(3.30) (3.31)

The time-dilation shifts and uncertainties due to the secular motion of the protocol A and the

protocol B are plotted together in Fig. 3.17. More than an order of magnitude reductions in

both the shift and the uncertainty are achieved at both rf drive frequencies at our typical clcok

interrogation time.

85
Figure 3.17: Comparison of the secular motion time-dilation shifts in two diﬀerent clock operation protocols. The blue line, yellow line, and the red line represent the fractional frequency shifts, while the shaded regions are uncertainties. For a typical clock interrogation time of 150 ms, the secular motion time-dilation shift of a sideband cooled optical clock is −1.7+−00..32 × 10−18 at ΩT ' 2π × 40 MHz; −(1.9 ± 0.1) × 10−18 at ΩT ' 2π × 76 MHz. The uncertainty of a Doppler cooled optical clock-
 is the sum of the secular motion time-dilation shift, −(16.3 ± 5.0)−18, and the ac Stark shift from the Doppler cooling light, −(3.6 ± 1.5) × 10−18 [Chou 10a].

Fractional Frequency Shift [10−18]

0
Sideband cooled optical clock (ΩT 2π × 40 MHz)
-5
Sideband cooled optical clock (ΩT 2π × 76 MHz)
-10
Typical clock interrogation time
-15
Doppler cooled optical clock
-20

-25

0.0

0.5

1.0

1.5

2.0

2.5

3.0

Clock Interrogation Time [s]

Chapter 4 Other Systematic Eﬀects and Concerns

In the previous chapter, I discussed how we implemented a new clock protocol to reduce both the secular motion time-dilation shift and its uncertainty to be below the mid-10−19 level. In this chapter I will describe several other systematic eﬀects that inﬂuence the 27Al+ optical clock operation and certain considerations for running the clock.

4.1 Linear Doppler Shift

In addition to the quadratic Doppler shift discussed in the previous chapter, atoms with a

nonzero velocity in the lab frame experience a linear Doppler shift, which is given by

δf = ~v · kˆL ,

f

c

(4.1)

where ~v is the velocity of the atom, and kˆL is the unit wavevector of the probe laser. However, with the typical secular frequencies of a few MHz and rf drive frequencies of a few tens of MHz,

the ion’s secular motion and micromotion do not shift the observed frequency but instead results

in frequency sidebands with Rabi rates given in Eq. (3.10). In such a case, the resulting systematic

frequency shift is due to the line-pulling eﬀect caused by the motional sidebands. Because the

transform-limited width of the interrogation pulse is much smaller than the lowest characteristic

frequency of ion’s motion and the sideband Rabi rates are reduced by the Debye-Waller eﬀect, the clock frequency shift due to the line pulling eﬀects is estimated to be   1 µHz and hence negligible1

87
. Another source of linear Doppler shift arises from the recoil during the interrogation. However
the trapped ion is immune to this eﬀect because of the M¨ossbauer eﬀect [Dicke 53, Bergquist 87, Rosenband 08].
Therefore, we only need to consider the ion’s motion with a characteristic time scale similar to or larger than the interrogation pulse duration. Possible sources of motion are long-term variations of the trapping potential, and thermal drifts of the uncompensated laser beam path and the trap structure. The linear Doppler shift due to these slow drifts can be suppressed by probing the atomic transition alternately using counterpropagating beams, which averages the frequency shift to zero if the dr-
ifts are not correlated with the probe direction [Rosenband 08]. This will be characterized on the ﬂy when the clock is operating.
4.2 Excess Micromotion Shift
4.2.1 Introduction
One of the main contributions to the systematic uncertainties in all the ion-based optical frequency standards is the time-dilation shift due to EMM [Rosenband 08, Chou 10a, Barwood 14, Huntemann 16]. EMM arises from the imperfections of the trapping potential, which have been studied thoroughly in the literature [Berkeland 98]. Among all proposed ion species for optical frequency standards, 27Al+ is among the most sensitive to these imperfections due to its smaller mass. There are two types of im-
perfections that lead to EMM. The ﬁrst type of imperfections is an additional dc electric ﬁeld, which might result from charges on the surfaces of dielectric materials. This dc electric ﬁeld will push ions away from the rf pseudopotential minimum such that ions experiences additional micromotion. This type of EMM can be compensated routinely by applying suitable dc voltages to the trap electrodes; its magnitude is usually limited by how well we can measure and compensate it. I will discuss how we -
measure and compensate EMM in Sec. 4.2.2. The
1 This assumes the ion is in the motional ground state, which is a worst case that leads to the largest frequency shift.

88
second type of EMM is caused by phase imbalances between the rf electrodes, which usually result from imperfections of the trap fabrication, including the geometrical asymmetry and the impedance mismatching between electrodes. This type of EMM is diﬃcult to reduce externally once the trap is made and hence sets the minimum of EMM of a Paul trap. However, it is possible to reduce EMM due to phase imbalances by adjusting the trap drive frequencies. This was demonstrated in our system and will be dis-
cussed in Sec. 4.2.3.
4.2.2 Characterization and Compensation
Many experimental techniques have been developed to measure and to compensate EMM to a high precision [Berkeland 98, Chuah 13, Keller 15, Gloger 15]. In our experiments, the sideband ratio method was used to characterize the EMM. To compensate the EMM due to stray electric ﬁelds, two dc compensation electrodes as shown in Fig. 4.1, fabricated on the trap wafer, and the endcap electrodes provide the necessary degrees of freedom in three orthogonal directions. The ions are pushed around the trap cen-
ter by these electrodes to null out the dc ﬁelds accounting for the EMM. The initial compensation of EMM was performed in two ways. The EMM in the horizontal plane was compensated by adjusting the dc compensation voltages such that the ion position does not change when the trap rf potential amplitude is varied; the EMM in the vertical direction was compensated by minimizing the EMM sideband of the 27Mg+ transition |↓i ↔ |2P3/2, F = 3, mF = −3i using the BR-v beam tuned to be on resonance. The ulti-
mate EMM compensation and determination were performed by measuring the Rabi rate of the EMM sidebands in both the 25Mg+ Raman transition |↓i ↔ |↑i and the 27Al+ transitions |1S0i ↔ |3P1i, which are both in the resolved sideband regime.
As shown in Eq. (2.1) and Eq. (2.6), the frequency spectrum of the ion’s motion in an ideal linear Paul trap consists of frequency components at ωi and (ωi ± ΩT ), which give rise to motional sidebands on the transitions at these frequencies. There is no pure tone at the rf drive frequency ΩT . However, when the ion is exposed to an EMM ﬁeld, the component of the ion’s motion at the

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:03.800Z
- **Text Length:** 157984 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
