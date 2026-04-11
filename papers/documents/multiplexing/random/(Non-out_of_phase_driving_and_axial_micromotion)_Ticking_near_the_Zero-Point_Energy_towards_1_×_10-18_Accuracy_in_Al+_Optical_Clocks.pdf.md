# PDF Document: (Non-out of phase driving and axial micromotion) Ticking near the Zero-Point Energy, towards 1 × 10-18 Accuracy in Al  Optical Clocks.pdf

**File Path:** (Non-out of phase driving and axial micromotion) Ticking near the Zero-Point Energy, towards 1 × 10-18 Accuracy in Al  Optical Clocks.pdf

**Processed Date:** 2026-02-10T18:18:48.794Z

**File Size:** 11955.46 KB

**Total Pages:** 131

**Extracted Pages:** 131

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 96

**Collection:** Multiplexing > Random

---

## Extracted Text Content

Ticking near the Zero-Point Energy:
towards 1 × 10-18 Accuracy in Al+ Optical Clocks
by
Jwo-Sy Chen
M.S., Physics, National Tsing Hua University, Taiwan, 2007.
B.S., Physics, National Tsing Hua University, Taiwan, 2005.
A thesis submitted to the
Faculty of the Graduate School of the
University of Colorado in partial fulfillment
of the requirements for the degree of
Doctor of Philosophy
Department of Physics
2017

This thesis entitled: Ticking near the Zero-Point Energy: towards 1 × 10-18 Accuracy in Al+ Optical Clocks written by Jwo-Sy Chen has been approved for the Department of Physics
Dr. David Leibrandt
Dr. David Wineland
Date
The final copy of this thesis has been examined by the signatories, and we find that both the content and the form meet acceptable presentation standards of scholarly work in the above mentioned discipline.

iii
Chen, Jwo-Sy (Ph.D., Physics)
Ticking near the Zero-Point Energy:
towards 1 × 10-18 Accuracy in Al+ Optical Clocks
Thesis directed by Dr. David Leibrandt and Dr. David Wineland.
The advancement of optical atomic clocks in the past two decades has motivated many
potential applications in navigation, communication, and science. Accurate optical clocks that
outperform the current cesium time standard also trigger a discussion about a possible redefinition
of the SI second. The 27Al+ quantum logic clocks developed at the National Institute of Standards
and Technology (NIST) were the first to achieve the clock fractional frequency uncertainty below
10−17 in 2010. To date, a few research groups around the world have demonstrated optical clocks
based on various atomic transitions with fractional frequency uncertainty in the 10−18 range. The
accuracy of the previous 27Al+ clocks was limited by the second order Doppler (time dilation)
shift and the blackbody shift. Since 2010, the third 27Al+ optical clock is being developed at
NIST to achieve a higher accuracy. The frequency uncertainties dominant in the previous clocks
are controlled and reduced in the current optical clock. The new design of the ion trap system
has reduced significantly both the blackbody radiation shift uncertainty and the time dilation
shift uncertainty due to micromotion, while the time dilation shift uncertainty due to the secular
motion has been reduced by more than an order of magnitude by operating the optical clock near
the three dimensional zero-point energy. Despite those previously dominant uncertainties, several
other systematic effects are being evaluated and some other efforts are being made to achieve a
total uncertainty towards 1.0 × 10−18. In this thesis, I will document the detail of the construction
and evaluation of the current 27Al+ optical clock developed at NIST.

Dedication
My family, old and new.

v
Acknowledgements
All the work described in this thesis can only become possible with supports from many people
in the Ion Storage group of the NIST. At first, I would like to thank my advisers, Till Rosenband,
David Leibrandt, and David Wineland, who all provided the great scientific research environment
and the guidance of the experiment. Their technical expertise and scientific knowledge show me
how to work on a challenging project from the scratch towards the success. I am great indebted
to Sam Brewer, whom I worked with in the past five years and learned a great deal about science
from. We constructed two ion traps together and tackled down so many scientific and technical
difficulties to make the “clock tick! I am sure our new system will become again the most accurate
clock in a very near future! I also want to express my appreciation to Jim Bergquist, James Chou,
Aaron Hankin, and David Hume, Christoph Kurz and all former/current members within the clock
team of Ion Storage group for sharing all your wonderful knowledge and experience with me. Many
people in the Ion Storage group also contributed to various stages of the experiment. I would like
to thank all the people in the group collectively for the experimental support as well as the cheerful
working environment that we created together over the years. I may probably forget mentioning
some people here but all you play important roles in my time in the graduate school. The graduate
study has been a long journey to me, both geologically and mentally. I would like to thank my
family and old friends, C.C.C. and S.C.L., who stand behind me over years and support me through
the tough ups and downs across the ocean. Thanks!

vi
Contents
Chapter
1 Introduction 1
1.1 Optical Frequency Standards . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
1.2 Optical Clock Applications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
1.3 27Al+ Optical Clocks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
1.4 Thesis Organization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
2 Experimental Setup 10
2.1 The Trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11
2.2 Trap System . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
2.2.1 Vacuum Chamber . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18
2.2.2 Imaging and Photon Collection System . . . . . . . . . . . . . . . . . . . . . 21
2.2.3 RF Resonator and RF Power Control . . . . . . . . . . . . . . . . . . . . . . 24
2.2.4 Magnetic Field Control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
2.3 Ion Loading . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
2.4 27Al+ Laser System . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28
2.4.1 Energy Levels and Lasers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30
2.4.2 Frequency Stabilization of the 3P1 Laser . . . . . . . . . . . . . . . . . . . . . 31
2.4.3 Frequency Stabilization of the 3P0 Laser . . . . . . . . . . . . . . . . . . . . . 32
2.5 25Mg+ Laser System . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34

vii
2.5.1 Qubit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34
2.5.2 Atomic State Preparation and Doppler Laser Cooling . . . . . . . . . . . . . 37
2.5.3 Repumping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38
2.5.4 Motion-Sensitive Raman Spectroscopy . . . . . . . . . . . . . . . . . . . . . . 39
2.6 Other Techniques . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40
2.6.1 Maximum-Likelihood Probability Estimation . . . . . . . . . . . . . . . . . . 40
2.6.2 UV Fibers and Pulse Area Control . . . . . . . . . . . . . . . . . . . . . . . . 42
2.6.3 AOM Double-pass Configuration . . . . . . . . . . . . . . . . . . . . . . . . . 43
2.7 Quantum Logic Spectroscopy . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45
2.8 Clock Operation Pulse Sequence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47
2.8.1 State Preparation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47
2.8.2 Clock Interrogation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
2.8.3 Atomic State Detection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49
3 Time Dilation Effect due to Secular Motion 50
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

viii
3.6.2 Time-dilation Shift due to Secular Motion . . . . . . . . . . . . . . . . . . . . 80
4 Other Systematic Effects and Concerns 86
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
4.6 Stark Shift due to the RF Drive Field . . . . . . . . . . . . . . . . . . . . . . . . . . 102
4.7 Formation of AlH+ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103
5 Conclusion 105
Bibliography 108

ix
Tables
Table
1.1 Secondary representations of the second in the optical frequency domain . . . . . . . 3
1.2 Error budgets of the previous 27Al+ optical clocks . . . . . . . . . . . . . . . . . . . 8
2.1 Iterations of wheel traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17
2.2 Comparison of clock operation protocols . . . . . . . . . . . . . . . . . . . . . . . . . 47
3.1 Energy determination of sympathetic Doppler cooling . . . . . . . . . . . . . . . . . 55
3.2 Parameters of secular modes of motion at 76 MHz drive frequency . . . . . . . . . . 71
3.3 Parameters of secular modes of motion at 40 MHz drive frequency . . . . . . . . . . 76
3.4 Number of sideband cooling pulses of each sideband order for the drive frequency
ΩT ' 2π × 40 MHz . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78
3.5 Summary of heating sources at 40 MHz drive frequency . . . . . . . . . . . . . . . . 83
3.6 Summary of heating sources at 76 MHz drive frequency . . . . . . . . . . . . . . . . 83
4.1 The field strength that causes EMM and the resulting time dilation shift measured
by the 3P1 transitions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 95
5.1 Clock uncertainty budget . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107

x
Figures
Figure
1.1 Frequency standards recommended by the BIPM . . . . . . . . . . . . . . . . . . . . 4
1.2 Clock history . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2.1 Typical linear Paul trap schematic . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13
2.2 Ion traps used in previous Al+ optical clock experiments. . . . . . . . . . . . . . . . 14
2.3 Wheel trap schematic . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15
2.4 Wheel trap pictures . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
2.5 Dipole and quadrupole field generated by two rf resonators . . . . . . . . . . . . . . 17
2.6 Vacuum chamber drawing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19
2.7 Trap mounting scheme . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20
2.8 Laser beam geometry . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 22
2.9 Illustration of the imaging system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23
2.10 The schematic of meander line resonators . . . . . . . . . . . . . . . . . . . . . . . . 24
2.11 Ablation target . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26
2.12 Energy level diagrams of Mg and Al . . . . . . . . . . . . . . . . . . . . . . . . . . . 27
2.13 Ion loading flowchart . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29
2.14 Energy level diagram of 27Al+. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
2.15 27Al+ laser beamlines . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
2.16 27Al+ 3P1 laser frequency stabilization scheme . . . . . . . . . . . . . . . . . . . . . . 33

xi
2.17 27Al+ 3P0 laser frequency stabilization scheme . . . . . . . . . . . . . . . . . . . . . . 35
2.18 Relevant energy level diagram of 25Mg+ . . . . . . . . . . . . . . . . . . . . . . . . . 36
2.19 25Mg+ laser beam setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
2.20 Raman transition spectrum of a two-ion pair . . . . . . . . . . . . . . . . . . . . . . 39
2.21 Photon-count histogram of |↑ (↓)〉 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41
2.22 Effect of UV fibers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42
2.23 Double-pass AOM Configuration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44
2.24 Quantum logic spectroscopy pulse sequence . . . . . . . . . . . . . . . . . . . . . . . 46
2.25 State preparation pulse sequence . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 48
2.26 Clock interrogation pulse . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49
3.1 Secular modes of motion of 25Mg+-27Al+ ion pair. . . . . . . . . . . . . . . . . . . . 51
3.2 The relation between the n ̄ and the first-order BSB-to-RSB ratio β. . . . . . . . . . 53
3.3 The sympathetic Doppler cooling limit versus the mass ratio of two-ion pair. . . . . 54
3.4 Thermal distribution fit to a single 25Mg+ . . . . . . . . . . . . . . . . . . . . . . . . 57
3.5 Repump heating rates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62
3.6 Illustration of a heating mechanism involving a coherent process . . . . . . . . . . . 63
3.7 Simulation of the motional excitation due to an off-resonant carrier transition follo
wed by a first-order RSB cooling pulse . . . . . . . . . . . . . . . . . . . . . . . . . . 65
3.8 Simulation of the motional excitation due to spontaneous emission from the Raman
intermediate states followed by a first-order RSB cooling pulse . . . . . . . . . . . . 66
3.9 Sideband cooling pulse-by-pulse comparison . . . . . . . . . . . . . . . . . . . . . . . 69
3.10 Motional sideband Rabi rate . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70
3.11 Energy evolution of secular modes during sideband cooling at ΩT ' 2π × 76 MHz . . 73
3.12 Motional sideband Rabi rate . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 75
3.13 Energy evolution of secular modes during sideband cooling at ΩT ' 2π × 40 MHz . . 77

xii
3.14 Fock state distribution of the z-COM mode after sideband cooling at ΩT ' 2π × 76
MHz . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80
3.15 RSB Rabi oscillation of the residual motional excitation after sideband cooling at
ΩT ' 2π × 40 MHz . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81
3.16 RSB Rabi oscillation of the residual motional excitation after sideband cooling at
ΩT ' 2π × 76 MHz . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82
3.17 Secular motion time-dilation shift . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85
4.1 Electrodes fabricated on the trap wafer. . . . . . . . . . . . . . . . . . . . . . . . . . 89
4.2 Time dilation shift due to EMM and secular motion as a function of the drive fre
quency ΩT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92
4.3 Time dilation shift due to the a-EMM . . . . . . . . . . . . . . . . . . . . . . . . . . 93
4.4 Trap temperature increase versus rf drive power at ΩT ' 2π × 76 MHz . . . . . . . . 97
4.5 The fractional clock frequency shift due to BBR versus the radiation temperature . . 98
4.6 Contribution of BBR shift uncertainty at T= 300 K . . . . . . . . . . . . . . . . . . 98
4.7 Magnetic field variance about the mean versus the trap drive rf power . . . . . . . . 101
4.8 Ion pair reordering rate after loading . . . . . . . . . . . . . . . . . . . . . . . . . . . 102
4.9 Optical clock up time . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104

Chapter 1
Introduction
The development of quantum mechanics since the late nineteenth century significantly chan
ges our view of nature and affects our daily life. One of the essential influences is the redefinition of
the International System of Units (SI) proposed by the International Bureau of Weights and Me
asures (BIPM) [Taylor 08]. Except for the unit of mass, SI units are now defined by fundamental
properties of atoms, molecules, or photons 1 . In 1967, the unit of time, the second, was defined in
terms of an atomic transition frequency to replace the previous standard, which was based upon
astronomical observations, as follows [Taylor 08]:
The second is the duration of 9 192 631 770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the cesium 133 atom2 .
Since then, microwave cesium atomic clocks have been built around the world and have formed the
basis of international atomic time (TAI) for half a century to date. The invention and application
of TAI play an important role in global navigation satellite systems (GNSS), an example of which
is the global positioning system (GPS) that many people use daily [Major 07].
Current atomic clocks all operate in essentially the same manner. They consist of a continu
ous electromagnetic radiation source which is frequency locked to an atomic transition frequency.
The performances of atomic clocks are characterized by two quantities, accuracy and stability.
1 The unit of mass in SI is defined by the international prototype of the kilogram, an artificial object made of platinum-iridium stored at the BIPM, but research is ongoing to establish a quantum-based mass reference as well [de Mirand ́es 16, Richard 16] 2 This definition was later refined in 1997 to refer to the transition frequency at a temperature of 0 K.

2
While the former indicates the deviation from the unperturbed frequency of the atomic transition,
i.e., systematic shifts of frequency measurements, the later represents the amount of noise of the
measurements. The accuracy of atomic clocks depends on knowledge of the atomic transition pro
perties, and the ability to control both the atoms’ environment and atoms’ motion. Therefore,
each type of atomic clock has its own difficulties in terms of the accuracy. On the other hand, the
stability has a more general fundamental limit that applies to all atomic clock systems. A widely
used measure of the stability is the Allan variance, σy2, which is given by [Allan 66, Riley 08]
σ2
y(τ ) = 1
2(M − 1)
M −1
∑
i=1
(〈y(τ )〉i+1 − 〈y(τ )〉i)2 , (1.1)
where 〈y(τ )〉i denotes the ith fractional frequency measurement averaged over an interrogation
duration τ , and M is the number of measurements. The quantity σy(τ ) is called the Allan deviation,
which is used frequently to characterize the stability3 of the clocks in the frequency metrology
community. For an ideal atomic system without any systematic effects, the noise of frequency
measurements is dominated by the statistical uncertainties, and hence σy(τ ) decreases when τ
increases. However if there is any systematic frequency shift existing in an atomic transition which
can change in time, the Allan deviation σy(τ ) will level off or even increase with large τ .
The frequency determination of atomic clocks is conducted in such a way that the total
interrogation duration τ consists of many repeated measurements of duration Tint. For an ideal
system, the fundamental limit to the measurement noise results from the nature of measurements
in quantum mechanics, and is called quantum projection noise [Itano 93]. In such cases, the Al
lan deviation can be written in a simple form if an atomic transition is probed using Ramsey
spectroscopy [Ramsey 85, Itano 93]:
σy(τ ) = 1
2πf0
√N Tintτ , (1.2)
where f0 is the atomic transition frequency, and N is the number of atoms. From this expression,
it is obvious that atomic clocks benefit from a larger transition frequency f0. Therefore, if we
3 In fact, it denotes the instability of the clocks. The smaller the Allan deviation σy(τ ), the better the stability of the clock.

3
Table 1.1: Secondary representations of the second in the optical frequency domain recommanded by the BIPM as of 11 May, 2016 [Taylor 08]. The values are the weighted mean of measurements from various laboratories.
Atomic species Transition Wavelength [nm] Frequency [Hz] 27Al+ 3s2 1S0 - 3s3p 3P0 267 1 121 015 393 207 857.3 199Hg+ 5d106s2 2S1/2 - 5d96s2 2D5/2 282 1 064 721 609 899 145.3 171Yb+ 6s 2S1/2 - 5d 2D3/2 436 688 358 979 309 308.3 171Yb+ 2S1/2 - 2F7/2 467 642 121 496 772 645.0 171Yb 6s2 1S0 - 6s6p 3P0 578 518 295 836 590 864.0 88Sr+ 5s 2S1/2 - 4d 2D5/2 674 444 779 044 095 486.6 87Sr 5s2 1S0 - 5s5p 3P0 698 429 228 004 229 873.2
can stabilize an electromagnetic radiation to an atomic transition in the optical frequency domain
instead of a microwave transition such as the cesium frequency standard, the stability will benefit
from the larger transition frequency f0. This is the strongest motivation for developing atomic
clocks based upon optical transitions. This thesis discusses the development and advancement of
one such optical clock based upon the “forbidden” transition |1S0〉 ↔ |3P0〉 of 27Al+.
1.1 Optical Frequency Standards
In 1983, the International Committee for Weights and Measures (CIPM) started to provide
recommended values of optical transition frequencies [Quinn 84]. To date, many atomic and mo
lecular transition frequencies in the optical frequency domain are given by the BIPM as shown in
Fig. 1.1. Among them, a few atomic transitions have been chosen as secondary representations
of the SI second [Taylor 08], which are summarized in Table 1.1. These optical atomic clocks are
based on either trapped ions, such as 27Al+, 199Hg+, 171Yb+, and 88Sr+, or neutral atoms in optical
lattices, such as 171Yb and 87Sr. The proposed atomic transitions with natural linewidth . 1 Hz
are forbidden transitions between two J = 0 electronic states, quadrupole transitions, or octupole
transitions [Taylor 08, Ludlow 15].
The invention of the optical frequency comb in 1999 simplified absolute measurements of
optical frequencies [Ye 05] and sped up the development of optical atomic clocks. After almost

4
Figure 1.1: Frequency standards recommended by the BIPM. The image is taken from Ref. [Taylor 08] (http://www.bipm.org/en/publications/mises-en-pratique/ standard-frequencies.html).
two decades of improvements of optical atomic clocks, current state-of-the-art optical frequency
standards outperform the best cesium microwave standards in both accuracy4 and stability. In
fact, the uncertainties of the frequency measurements shown in Table 1.1 are stringently limited
by the performance of the cesium atomic clocks, which has triggered a discussion about a possible
redefinition of the SI second [Gill 11, Le Targat 13]. The improvement of atomic clock accuracy
since the development of cesium atomic clocks back in the 1950s is shown in Fig. 1.2.
Trapped ion and neutral atom optical clocks both have advantages and disadvantages with
respect to systematic uncertainty. One of the main sources of systematic uncertainty in optical lat
tice clocks is due to the optical lattice trapping field that introduces a light shift associated with the
differential polarizability between electronic states in the clock transition [Lemke 09, Yamanaka 15,
Nicholson 15, Nemitz 16]. On the other hand, one of the main frequency uncertainties in the ion
based optical clocks is the second order Doppler shift, which relates to the design of ion traps
and laser cooling [Chou 10a, Huntemann 16]. Both types of optical clocks suffer from a systematic
shift due to the environmental blackbody radiation, which can be mitigated by choosing atomic
4 The accuracy, or inaccuracy, refers to the systematic shift of the atomic clocks, as is normally used in the clock community.

5
transitions less sensitive to the blackbody radiation, better characterizing the ambient environ
ment [Beloy 14, Nicholson 15], or operating the clocks in a cryogenic environment [Ushijima 15].
To date, optical frequency standards based on either one trapped ion or many neutral atoms have
both reached a fractional frequency uncertainty of (2-3) × 10−18 [Nicholson 15, Huntemann 16],
which is almost two orders of magnitude more accurate than cesium standards.
Figure 1.2: Clock history. Cesium microwave clock: [Lombardi 07, Jefferts 07, Heavner 14]. Hydrogen atom: [Niering 00]; Calcium atom: [Sterr 04]. Strontium atom: [Boyd 07, Ludlow 08, Bloom 14, Nicholson 15]. Mercury ion: [Udem 01, Oskay 06, Rosenband 08]. Ytterbium ion: [Stenger 01, Huntemann 16]. Strontium ion: [Margolis 04]. Aluminum ion: [Rosenband 08, Chou 10a].
1950 1960 1970 1980 1990 2000 2010 2020
10−18
10−17
10−16
10−15
10−14
10−13
10−12
10−11
10−10
10−9
year
clock accuracy ( δf/f)
H
Hg+
Yb+
Ca
Sr+
Hg+
Sr
Sr
Al+
Hg+
Al+ Sr
SrYb+
c e s i u m
optical
(neutral)
optical
(ion)
With regards to the clock stability, neutral atom optical clocks typically perform better due
to the ability to interrogate multiple atoms simultaneously in the optical lattice in contrast to ion
based atomic clocks [Hinkley 13, Bloom 14, Schioppo 17]. A frequency stability of 6 × 10−17/√τ
in the neutral atom optical clock has been reported recently [Schioppo 17]. On the other hand,

6
interrogating multiple ions simultaneously in an ion-based atomic clock to improve the stability
generally leads to a degradation of the clock accuracy because of the finite size of trapping volume
and accompanying micromotion shift. The stability of trapped ion optical clocks only reaches about
2 × 10−15/√τ , limited by the quantum projection noise [Chou 10a, Dub ́e 15]. Therefore, carefully
designed trapping potentials for multiple ions [Pyka 13, Keller 15] and clock operation protocols
for a single trapped ion [Chou 11b, Hume 16] were both introduced to improve the stability issue
for ion-based atomic clocks.
1.2 Optical Clock Applications
As optical atomic clocks have improved, applications in several fields have been propo
sed [Maleki 05, Ludlow 15]. For example, the long-term stability will benefit local time-keeping [Weiss 10,
Riehle 17] and navigation in deep space missions [Major 07, Prestage 09]. Stable and accurate op
tical clocks may simplify communication algorithms by making it possible to implement a down
link-only operation instead of a two-way configuration [Prestage 09]. In addition, optical clocks can
be used in conjunction with the optical frequency division technique to generate ultra-low phase
noise radio frequency signals that can improve radar systems [Fortier 11].
Another potential application is in the field of geophysics. Current advanced optical clocks
can detect centimeter-level changes of the gravitational potential [Chou 10b], which may help us
understand the dynamics of the interior structure of the Earth and improve earthquake prediction
and volcanology [Bondarescu 15]. Moreover, two separated optical clocks linked by an optical fiber
can monitor the relative geopotential change on a short-term basis, which will benefit the study of
periodic effects such as the solid Earth tide [Bondarescu 15, Takano 16].
In addition, the higher accuracy and better stability of optical clocks also serve as a test bed
for fundamental physics, such as searches for deviations from the predictions of the theory of relati
vity [Wolf 09, Flambaum 16, Delva 17], searches for various forms of dark matter [Derevianko 14],
and searches for physics beyond the standard model [Dzuba 99]. These potential applications all
motivate further development of better optical atomic clocks.

7
1.3 27Al+ Optical Clocks
While an optical frequency standard utilizing the forbidden |1S0〉 ↔ |3P0〉 transition of 27Al+
as well as other Group IIIA elements was proposed in the early 1980s [Dehmelt 82], high precision
spectroscopy of 27Al+ was not achieved until the proposal of the quantum logic spectroscopy in
2001 [Wineland 02] and later the realization in 2005 [Schmidt 05]. The lack of light sources for
the lowest dipole-allowed transition |1S0〉 ↔ |1P1〉 and the narrower linewidth of the intercombi
nation transition |1S0〉 ↔ |3P1〉 make direct atomic state discrimination through state-dependent
fluorescence and laser cooling challenging. To overcome this, a “logic ion” co-trapped together with
the 27Al+ serves as the coolant and atomic state discriminator. The |1S0〉 ↔ |3P0〉 clock transi
tion was observed and its absolute frequency was measured at National Institute of Standards and
Technology (NIST) in 2007 [Rosenband 07]. Since then, two 27Al+ optical clocks were constructed
and evaluated before the work described in this thesis commenced [Rosenband 08, Chou 10a]. The
systematic shifts and uncertainties reported in the literature are summarized in Table 1.2. The
effect of the ion’s motion contributes significantly to the total systematic uncertainty. In contrast
to other atomic species in Table 1.1, given the same amount of kinetic energy, the relatively smaller
mass of 27Al+ gives rise to a larger frequency shift due to the second-order Doppler (time dila
tion) effect. Hence, controlling ions’ motion is more challenging in 27Al+ optical clocks compared
to other trapped-ion optical frequency standards. The biggest advantage of the clock transition
|1S0〉 ↔ |3P0〉 in 27Al+ is its extremely low sensitivity to the ambient temperature. Characteri
zation of the blackbody radiation environment in which the atoms are immersed is difficult be
cause all surrounding surfaces contribute. Therefore, it usually requires a significant experimental
and theoretical effort to evaluate the frequency shift due to blackbody radation in optical atomic
clocks [Beloy 14, Nicholson 15, Dolez ̆al 15, Zhang 17]. However, 27Al+ has the smallest temperature
dependence among known atomic electronic transitions proposed for optical frequency standards
in neutral atoms and singly-charged ions. This is due to two fortuitous properties of 27Al+.
(1) All dipole-allowed transitions connecting to the 1S0 and 3P0 states are in the deep ultraviolet

8
Table 1.2: Systematic shifts and uncertainties in previous 27Al+ optical clocks. Values are from Ref. [Rosenband 08] and Ref. [Chou 10a].
Contributor Fractional frequency ×1018
Clock 1 Clock 2 Excess micromotion −(20.0 ± 20.0) −(9.0 ± 6.0) Secular motion −(16 ± 8) −(16.3 ± 5.0) Blackbody radiation shift −(12.0 ± 5.0) −(9.0 ± 3.0) Cooling laser Stark shift −(7.0 ± 2.0) −(3.6 ± 1.5) Quadratic Zeeman shift −(453.0 ± 1.1) −(1079.9 ± 0.7) Electric quadrupole (0.0 ± 0.5) − Linear Doppler shift (0.0 ± 1.0) (0.0 ± 0.3) Clock laser shift − (0.0 ± 0.2) Background-gas collisions (0.0 ± 0.5) (0.0 ± 0.5) AOM phase chirp (0.0 ± 0.1) (0.0 ± 0.2) Total −(508 ± 23) −(1117.8 ± 8.6)
region. Therefore the clock transition is less disturbed by the blackbody radiation, which
has a wavelength of about 10 μm at room temperature.
(2) The polarizabilities of the 1S0 and 3P0 states partially cancel each other.
Therefore we only require control of the thermal environment to within 10 K near room tempe
rature to achieve a fractional frequency uncertainty < 1.0 × 10−18 . This property is particularly
advantageous for building transportable optical frequency standards.
The first two 27Al+ optical clocks built at NIST were used to demonstrate some of the
applications of optical clocks in fundamental physics. The first example set a constraint on the
temporal variation of the fine structure constant, α [Rosenband 08]. Repeated measurements of
the frequency ratio of the clock transitions of 27Al+ and 199Hg+ optical clocks over the course of
a year were used to place a stringent limit on the temporal variation of α of (−1.6 ± 2.3) × 10−19
per year, which is still one of the tightest constraints given by laboratory tests [Huntemann 14,
Godun 14]. Another example was the examination of the gravitational red shift by comparing the
transition frequencies of two 27Al+ optical clocks, one of which was raised by 33 cm relative to
each other [Chou 10b]. The measurement agreed with the prediction of the theory of relativity

9
for gravitational time dilation. These two experiments demonstrated the potential applications of
27Al+ optical clocks, and future work will explore further possibilities with 27Al+ clocks.
1.4 Thesis Organization
This thesis discusses the construction and evaluation of the third 27Al+ optical clock at NIST.
The thesis is organized as follows. In Chapter 2, the experimental apparatus will be described. Some
technical aspects implemented in the current 27Al+ optical clock to improve its performance will
also be discussed in this chapter. In Chapter 3, the details of a protocol to operate the 27Al+
clocks near the three-dimensional (3D) motional ground state will be presented. This protocol
helps reduce the time dilation shift and uncertainty due to the secular motion by more than an
order of magnitude. Other important systematic uncertainties and considerations will be discussed
in Chapter 4. Finally, a preliminary uncertainty evaluation of the current 27Al+ optical clocks will
be presented at the end of the thesis.

Chapter 2
Experimental Setup
When I joined the Al+ optical clock project in 2011, former members had shown a very
promising accuracy [Chou 10a] and demonstrated impressive possible applications [Rosenband 08,
Chou 10b]. To use it as a frequency standard, the questions arising from previous experiences are
clear,
How can we improve the 27Al+ optical clock setup to make the clock more accurate and reliable?
The 27Al+ optical clock is a complicated system that involves ultimate control of both laser
fields and electric signals to manipulate the atomic states in a vacuum enclosure. Therefore, simpli
fying the system to meet the minimum requirements for the clock operation seems like a reasonable
route to take for reliability reasons. On the other hand, the accuracy of previous clocks was mainly
limited by the second order Doppler shifts. One of the sources is from the excess micromotion due
to the trap imperfections, which basically sets the hard limit of the clock accuracy once the trap
is sealed into the vacuum. Combining all these thoughts, designing a new system specifically for
clock applications is a natural approach, and this was the starting point in my graduate study. In
this chapter, I will describe the techniques implemented in the new 27Al+ optical clock systems to
improve their accuracies and reliabilities.

11
2.1 The Trap
Unlike other single-ion optical clock systems utilizing spherical Paul traps to achieve an
ultimate frequency accuracy of quadrupole transitions [Huntemann 16, Nisbet-Jones 16], the 27Al+
optical clock requires a linear Paul trap to trap more than one ion simultaneously for sympathetic
cooling and atomic state determination [Raizen 92, Schmidt 05]. In addition, the existence of
the static electric field gradient in a linear Paul trap will not lead to a significant quadrupole
shift because the 27Al+ clock transition connects two J = 0 states, in which the electronic charge
distribution cannot have multipole moments [Beloy 17]1 . A typical linear Paul trap is a quadrupole
mass filter with an additional electrostatic potential applied at both ends to provide the axial
confinement as shown in Fig. 2.1. This configuration has an axis in which the radio frequency (rf)
electric field is ideally zero, which enables trapping multiple ions with minimum exposure to the rf
field. Here, I briefly explain the motion of a single ion inside a linear Paul trap as the theoretical
background. For an ideal case, the ion experiences zero rf force at any position along the trap axis;
therefore the ion’s axial (z) motion, independent of the rf potential, can to a good approximation
be expressed as a one-dimensional oscillator and its Hamiltonian Hz is given by
Hz = pz2
2m + mωz2
2 z2,
ωz = (2κQUz/m)1/2,
(2.1)
where (z, pz) are canonical position and momentum variables and ωz is the characteristic angular
frequency of the trapping potential Uz in the axial direction. Here m and Q are the mass and the
charge of the ion. The geometric factor κ depends on the geometry of the trap electrodes. Therefore
the motion in the z direction is a textbook harmonic oscillator. The transverse (x and y) motion
of an ion is more complicated, which is confined by a harmonic pseudopotential resulting from the
rf field; its equation of motion is described by the Mathieu equation. Following the coordinates
and notations in the ion trapping literature [Ghosh 95, Wineland 98], the ion’s transverse motion
1 Linear Paul traps for multiple clock ions have also been designed and proposed to improve the clock stability [Pyka 13].

12
is approximately given by
ui = Ai
(
cos(ωit + φi)
[
1 + qi
2 cos(ΩT t) + q2
i
32 cos(2ΩT t)
]
+ βi
qi
2 sin(ωit + φi) sin(ΩT t)
)
,
i ∈ {x, y} ,
(2.2)
where x and y are mutually orthogonal directions transverse to z, Ai and φi depend on the initial
conditions, and V0 cos(ΩT t) is the applied rf potential2 . The characteristic angular motional
frequency in the transverse direction ωi is given by
ωi = βi
ΩT
2,
βi ≈
(
ai + q2
i
2
)1/2
,
i ∈ {x, y} .
(2.3)
Here the Mathieu parameters ai and qi depend on the trapping conditions and are defined by,
ai ≡ 4QUi
mΩ2
T R2 , i ∈ {x, y} , (2.4)
qx = −qy ≡ − 2QV0
mΩ2
T R2 , (2.5)
where Ui is the electrostatic potential in the transverse direction, and R is the distance between the
ion and the electrode in the transverse direction. In general, we operate our system in the regime
ai q2
i 1; therefore, the ion’s motion in the transverse directions becomes,
ui ' Ai
(
cos(ωit + φi)
[
1 + qi
2 cos(ΩT t)
])
= Ai cos(ωit + φi) + Ai
qi
2 cos(ωit + φi) cos(ΩT t), (2.6)
ωi ' QV0
√2ΩT mR2 . (2.7)
In Eq. (2.6), we call the first oscillation term with the smaller frequency and the larger amplitude
the secular motion and the second term the micromotion. For the ideal linear Paul trap, there is
no pure frequency component at the rf drive frequency ΩT and no micromotion in the z direction.
Unfortunately, we always find that the pure tone at ΩT exists in the ion’s motion in the real trap
configurations [Berkeland 98]. We call the motion at ΩT the excess micromotion, which arises from
2 The phase of the rf field is omitted here.

13
the imperfections of trapping potential. Through the derivation above, we find that the potential
of a linear Paul trap can be approximated to be a three dimensional (3D) harmonic well with the
characteristic frequencies {ωx, ωy, ωz}, such that the ions’ motion can be quantized and described
by a Fock state distribution.
Figure 2.1: Linear Paul trap schematic.
Two previous versions of ion traps used in Al+ optical clock experiments are depicted in
Fig. 2.2. The first trap was made of a stack of alumina wafers [Rowe 02] while the second one
was made of blade-shaped beryllium-copper electrodes [Chou 10a]. In both traps, we found the
tolerance of the machining and the assembly contributed significantly to the trap imperfection.
Starting in 2011, we worked on the design of a new type of single-zone linear Paul trap to provide
a tighter tolerance and simpler assembly process. We call this new design the “Wheel Trap.”
As mentioned above, the machining and the assembling tolerances are two of the main sources
of imperfections. However, current state-of-the-art wafer fabrication technology can achieve an
extremely tight tolerances. Therefore, we designed the wheel trap with all four-rod electrodes
fabricated in a single diamond wafer and thereby eliminate imperfections due to assembly errors.
In fact, this also simplified the assembly process considerably. We can usually assemble a trap and
vacuum system in one day. All traps were designed in-house and fabricated by Diamond Material
in Germany3 .
3 Diamond Materials, http://www.diamond-materials.com

14
Figure 2.2: Ions traps used in previous Al+ optical clock experiments. Images are taken from [Hume 10]. (a)A photograph of the first Al+ clock ion trap. (b)A drawing of the second Al+ clock ion trap.
17 mm
(a) (b)
The wheel trap schematic and pictures are shown in Fig. 2.3 and Fig. 2.4. The traps were
first laser-machined to the desired shape from CVD diamond wafers. Afterwards the traps were
masked and gold-sputtered to define both the rf and dc electrodes. Four finger structures pointing
towards the center act as the four rod electrodes in the conventional linear Paul trap design. Ions
are trapped in the center of the four finger electrodes. This trap design not only provides a tight
machining tolerance but also is capable of generating a strong trap potential with a few hundred
micrometers ion-to-electrode spacing in comparison with the planar design. This benefits laser
cooling and is crucial to minimize the heating due to ambient electric field noise [Turchette 00a,
Brownnutt 15, Chen 17]. Moreover, using the diamond as the substrate material improves the heat
dissipation, which is critical for characterizing the clock shift due to the blackbody radiation.
Since 2011, there were several iterations of wheel traps being designed and fabricated. Some of
the key differences in these iterations are summarized in Table 2.1. To achieve stronger transverse
confinement at a given rf power, the rf field is applied to all four electrodes with 180◦ phase
difference between two neighboring electrodes 4 . For the versions A, B, and D, all four electrodes
are electrically independent and two rf voltage built-up center-tap resonators are used to generated
the rf potentials. The balance of the amplitude and the phase between the two resonators is the
most difficult task for this type of design. Diagonal electrodes in the version C and E are hard-wired
4 In fact, this trap would have strong axial rf confinement in comparison with the elongated design of other linear Paul traps, if it were driven single ended.

15
Figure 2.3: (a) The version A wheel trap schematic. Colored regions are gold sputtered and the same color indicates the same rf voltage and phase. The inner surfaces of four finger electrodes are used to trap ions. (b) A microscopic picture of the trap center. The distance between two diagonally opposed electrodes is 500 μm.

16
Figure 2.4: Photographs of five versions of wheel traps. The differences between them are summarized in Table 2.1.
connected on the wafer and only one resonator is used. The detailed rf circuitry will be discussed
in the next section.
The versions A and B attempt to maintain the symmetry as much as possible to minimize
the excess micromotion along the trap axis. However, this symmetric design leads to a degeneracy
of the dipole and quadrupole modes driven by the two rf resonators, as shown in Fig. 2.5. In fact,
we observed the frequency differences between the dipole and the quadrupole modes was less than 1
MHz. Although we intended to drive the two resonators out of phase, very small phase imbalances
excited the dipole mode and gave rise to the excess micromotion in the directions perpendicular

17
Table 2.1: Iterations of wheel traps developed at NIST since 2011.
Version A B C D E Ion-electrode spacing [μm] 250 400 250 250 250
Thickness [μm] 300 300 300 300 500
Electrode symmetric symmetric diagonally capacitively diagonally design hard-wired coupled hard-wired
Status retired retired on duty: on duty: under Mg+-Al+ Ca+-Al+ construction
to the trap axis. To resolve this problem, we designed two new versions of the trap. In version D,
the symmetry is broken by adding about 1 pF capacitance in the top and bottom electrode pairs.
The capacitor is fabricated by overlapping gold pads on two surfaces of the wafer and using the
substrate as the dielectric material. The add-on capacitance separates the dipole mode and the
quadrupole mode by about 5 MHz. Given the rf drive frequency ΩT ' 2π × 76 MHz and the
quality factor Q ' 100 of our rf resonators, this reduces the dipole excitation significantly. A wheel
trap C is currently installed in the Ca+-Al+ optical clock system.
Figure 2.5: The dipole (a) and the quadrupole (b) fields generated from two rf resonators. C: capacitor that breaks the frequency degeneracy of dipole and quadrupole fields.
(a) (b)
C
CC
C
An alternative construction method is to connect the diagonal electrodes on the trap wafer
and use a single rf resonator to drive the trap, which was implemented in the versions C and E.
Using one resonator eliminates the effort of balancing the phase and amplitude of two resonators and

18
eliminates the dipole mode; however, losing the ability of individually controlling the dc voltages and
rf phases of four rf electrodes leads to a requirement for two additional dc electrodes to compensate
the excess micromotion in the transverse direction, which are shown in Fig. 2.4. In addition, these
two compensation electrodes break the overall electrode symmetry, which requires a careful design
of conductive traces on the wafer to cancel out the rf fields at the trap center as shown in Fig. 2.4.
Another important advantage of the hard-wired trap designs is to eliminate the differential noise
between two rf power lines, which is injected onto the trap and heats the ions. In our experience,
we usually saw lower and more stable heating rates in the hard-wired trap designs. Currently a
version C trap serves as the center of the Mg+-Al+ optical clock system. Most of the experiments
throughout this thesis were conducted using version C. Version E is an upgrade of version C which is
designed to provide less excess micromotion. A vacuum chamber with a version E trap is currently
being built.
2.2 Trap System
In addition to the trap wafer itself, several hardware components need to be installed together
for an ion trap. I will discuss them in this section.
2.2.1 Vacuum Chamber
A drawing of our vacuum system is shown in Fig. 2.6. An octagon (Kimball Physics, MCF275
SphOct-C2A8) provides all required optical accesses. Two cubes (Kimball Physics, MCF275
SphCube-C6) are connected and mounted to the bottom of the octagon. One thermocouple
feedthrough, one BNC feedthrough, one ion gauge, one all-metal valve, and one vacuum pump
are connected to these two cubes. The ion gauge was only turned on during the initial pumping
down process to monitor the pressure and is left off during normal operation to avoid heating the
system. To reduce hydrogen outgassing, all stainless steel parts except the vacuum pump were
baked at 400◦C in vacuum for around a week before the trap assembly [Park 08]. A NEXTorr

19
D100-5 vacuum pump from SEAS Group5 , consisting of a 100 l/s non-evaporable getter (NEG)
pump and a 6 l/s ion pump, is used to maintain vacuum. After finishing the trap assembly, the
system was baked at 150◦C and pumped by a pumping station for about three days to reach 10−11
torr pressure level measured by the ion gauge attached to the chamber. The ion pump was flashed
and the NEG pump was activated close to the end of the bake.
Figure 2.6: CAD drawing of the vacuum chamber. Red: vacuum pump; yellow: ion gauge; magenta: thermocouple feedthrough; green: all-metal valve; blue: optical viewport; pink: electrical feedthrough. Cage adapters next to six 1.33-inch viewports are used to attache optics close to the chamber.
(a) Top view.
(b) Side view.
(c)
11.63 inches
13.82 inches
7.11 inches
Inside the chamber, the trap wafer is mounted on the top of a copper post and sandwi
ched by the titanium beam pick-off as shown in Fig. 2.7. The top surface of the beam pick-off is
mirror-polished and used to reflect the laser beam vertically towards the ion to provide the three
5 https://www.saesgetters.com/

20
dimensional characterization of the ion’s motion. The post is silver-electroplated to improve the
thermal contact conductance and acted as a heat sink to remove the heat deposited in the wa
fer [Li 00]. The post is screwed to a copper disk at the bottom of the chamber, which also served as
a gasket to seal the bottom flange. Two titanium “endcap” electrodes are also mounted on the top
of the post. Two 45◦ surfaces of each endcap electrode are also mirror-polished for laser beam path
stabilization. Endcap electrodes are connected to the top flange of the octagon using the modified
groove grabbers (Kimball Physics, MCF275-GrvGrb-C02) to minimize the cantilever motion of the
post. A natural abundance magnesium wire and an aluminum wire were mounted on one of the
endcap electrodes and served as the sources of neutral atoms. All trap mounting hardware made
of stainless steel was heat-treated and carefully selected to minimize stray magnetic fields around
the center of the trap.
Figure 2.7: (a) A drawing of the electrical connections to the trap wafer and the mounting scheme of the trap and the endcap electrodes. MM: micromotion. (b) A photograph taken during the trap assembly before the electrical connections were made. A thermocouple sensor hanging next the post was clamped against the trap wafer by the beam pick-off to monitor the trap temperature. Both endcap electrodes are isolated from the copper post by alumina washers, which can be seen in (b).
clip electrical connection
rf electrode connection
MM compensation electrode connection
endcap electrodes
thermocouple
locations
The purposes of the seven viewports are shown in Fig. 2.8. Six uncoated fused silica view
ports are mounted to the octagon for access of laser beams. Home-made cage adapters were bolted
down against these six viewports for easily attaching optics to the chamber. Two molybdenum

21
feedthroughs mounted on the octagon were mechanically connected to the trap wafer to apply the
rf potential and the dc compensation voltages. The BNC feedthrough was connected to two end
cap electrodes for the axial confinement, which were held at different electrical potentials. The top
flange of the octagon was used for the fluorescence collection where a fused silica viewport with
a broadband anti-reflective coating was mounted (MPF, A8001-1-CF.) There were three thermo
couple sensors inside the chamber to monitor the trap temperature. One is mounted between the
wafer and the beam pick-off, as shown in Fig. 2.7, while the other two are mounted at the top and
the bottom of the post, respectively.
2.2.2 Imaging and Photon Collection System
The imager was designed in-house using off-the-shelf components. Two aspheric lenses (As
phericon GmbH, A50-60FPX-S-X) next to the viewport act as a relay lens system to form an
ion image outside the vacuum chamber. Afterwards, a 40X microscope objective lens (Thorlabs
LMU-40X-UVB) in combination with an infinity-corrected lens magnifies the image and projects
it onto an electron multiplying charge-coupled device (EMCCD) camera (Andor Technology, iXon
DU885). A 200 μm diameter pinhole is mounted in the focal plane of the objective lens to minimize
the background photon counts. A flipper mirror is mounted right after the objective lens to send
the ion fluorescence to either the camera or the photomultiplier tube (PMT). We use a PMT from
Hamamatsu, part number R7600P-203, which has a 35% quantum efficiency at 280 nm. The overall
photon collection efficiency is about 0.5%. This simple and economical design provides us with the
necessary spatial resolution to resolve two ions in the camera, which are typically a few μm apart
for our trap conditions.
Between the two aspheric lenses, a small aluminum mirror is installed to provide vertical
laser beam access. The incoming laser is focused by the aspheric lens towards the ion at 10◦ with
respect to vertical, and then is reflected off the beam pick-off mounted on the post, and finally exits
the chamber.

22
Figure 2.8: Laser beam geometry in the horizontal plane of the trap axis and the quantization axis. Two vertical beams are not shown
here. Ion loading beams: ablation and Al PI. 25Mg+ beams: FD, D, R, RR, BR-a, BR-t, and BR-co. 27Al+ beams: Clock, 3P1 π and
3P1 σ+/−. Refer to Sec. 2.3, Sec. 2.5, and Sec. 2.4 respectively for the detail.
Endcap electrodes
s
s

23
Figure 2.9: Section view of the imaging and photon collection system. WD: working distance. NA: numerical aperture. EMCCD: electron multiplying charge-coupled device. PMT: photomultiplier tube. Blue: optical viewport flanges. Cyan: optical viewports and lenses.

24
2.2.3 RF Resonator and RF Power Control
An rf resonator is usually used in macroscopic Paul traps. The idea is to generate the trap rf
potential using the high-voltage end of the resonator. The resonators not only serve as step-up trans
formers but also spectral filters. Historically, coaxial resonators and helical resonators were installed
in ion traps in our group, which generally have quality factors Q & 100 [Jefferts 95, Poitzsch 96].
These types of resonators are typically made of copper and constructed by conventional machining
techniques, which tend to be heavy, expensive, and large. Therefore, we developed new resonators
based on meander traces on both sides of printed circuit boards (PCB) as shown in Fig. 2.10. The
resonant frequencies can be adjusted by changing the number of loops shown in Fig. 2.10. By
moving the input small-loop antenna relative to the resonator, the rf input is impedance matched
and coupled to the resonator. For this design, the dielectric loss of the PCB substrate is a limi
ting factor with regards to how efficient the voltage step-up can be. Benefiting from mature PCB
manufacturing, we can easily achieve Q ' 100 by choosing industrial standard Rogers material6
as the substrate, and resonators for different rf drive frequencies can be made without too much
difficulty. This gives us more flexibility to test different rf drive frequencies easily.
Figure 2.10: The schematic of meander line resonators. Red and blue meanders are conductive traces printed on different surfaces of the PCB. The left side of the board is connected to the rf feedthrough, which is in pink in Fig. 2.6.
To rf feedthrough
rf Drive
R = 1 cm
In the experiments, the rf potential may fluctuate due to thermal effects from either the
rf resonator or the rf amplifier, which causes the secular frequencies to change. Moreover, we
6 https://www.rogerscorp.com/index.aspx

25
often change the rf potential in order to deterministically control the ions’ position, which tends to
increase the rf power fluctuations. In principle, we can intermittently measure the transverse secular
frequencies and feed back to the rf power controller during the clock operation. However, this is not
favorable because it will reduce the clock duty cycle and hence hurt the clock stability [Dicke 53].
Therefore, we stabilize the pick-up rf power measured on one of the dc electrodes instead, which
should stabilize the pseudopotential. The rf power is measured by a home-made detector based
on an rf envelope tracking IC (Analog Devices, ADL5511), and referenced to a dc voltage. The
generated error signal is then processed by a digital servo [Leibrandt 15] and fed to a voltage
controlled variable gain amplifier.
2.2.4 Magnetic Field Control
As shown in Fig. 2.8, five coils are wrapped on the octagon directly to provide the necessary
control of the magnetic field. Coils at the opposite viewports are connected in series to form a
Helmholtz-type coil. The coil that defines the quantization axis is driven at around 300 mA by
a diode laser current driver (Arroyo Instruments, 4205-DR) with an impedance matching circuit.
A low-temperature-coefficient precision resistor is connected in series with the main coil next to
the chamber to monitor the current. The main coil generates about 1.1 G along the quantization
axis at the position of ions. The rest of the coils are shim coils and driven by dc power supplies
to compensate the background magnetic field. Alignment of the laser beam and B-field direction
is achieved by minimizing the |↑〉 component when a 25Mg+ is prepared in the |↓〉 state when the
circularly polarized detection beam is applied.
2.3 Ion Loading
Historically, loading ions into a trap using a thermal atomic beam from a resistively heated
oven followed by either electron impact ionization or isotope-selective photoionization (PI) has
been used in the NIST Ion Storage group. However, after successfully loading an ion, the oven
temperature may take a certain amount of time to cool down, which may perturb the optical clock

26
transition frequency via blackbody radiation. Moreover, an oven generates a continuous atomic
beam while we only need to load a single ion. The large number of atoms may contaminate the
vacuum significantly after the loading process and possibly deposit atoms on the trap electrodes
and dielectric surfaces, which may build up charges and even change the heating rate over time.
To resolve these problems, we implemented laser ablation loading in our new trap system.
Figure 2.11: Al and Mg natural abundance ablation targets installed on one of the endcap electrodes.
2.6 cm
1.0 cm
Ablation targets are installed on one of the endcap electrodes and held at the endcap potential,
as shown in Fig. 2.11. This prevents electrons, possibly generated from the ablation process, from
being deposited on the dielectric materials. Both targets are high purity, natural abundance wires
of 10 mil (254 μm) diameter. For aluminum, there is only one stable isotope, 27Al. For magnesium,
three stable isotopes exist, 24, 25, 26Mg, and only 10% of the natural abundance is the desired
isotope, 25Mg+, while about 80% is 24Mg. The distance from the targets to the center of the trap
is 8 mm. The essential energy levels of 27Al and 25Mg related to the ionization process are shown
in Fig. 2.12. To laser-ablate the neutral atoms from the target, we use a Q-switched frequency
doubled Nd:YLF laser at 523 nm (CrystaLaser QL523-500-O). The laser beam is focused onto the
target, passing through apertures in both endcap electrodes and the trap center. The laser beam
waist radius on the target is measured to be about 30 μm. A motorized mirror and an acousto

27
optic modulator (AOM) are used to steer the beam and control the ablation power. The loaded
25Mg+ is distinguished from the other isotopes using the laser-induced fluorescence at the 280 nm
transition |2P3/2, F = 4〉 ↔ |2S1/2, F = 3〉 while the 27Al+ is recognized by measuring the axial
secular frequency of a 25Mg+-27Al+ pair. We check if a desired ion is loaded after every single pulse
of the ablation laser.
Figure 2.12: Energy level diagrams of Mg and Al (not to scale). Values are taken from NIST Atomic Database, http://www.nist.gov/pml/atomic-spectra-database.
25Mg, I = 5/2 27Al, I = 5/2
first ionization energy
7.646 eV
4.345 eV 1P1
1S0
5.986 eV
3p 2P J = 3/2 J = 1/2
0.014 eV
4s 2S1/2 3.143 eV
5s 2S1/2 4.673 eV
396 nm
266 nm
285 nm
376 nm
687 nm
944 nm
To load a 25Mg+, the ablation beam is first steered towards the Mg target. A Doppler cooling
beam, which is 400 MHz red-detuned from the |2P3/2, F = 4〉 ↔ |2S1/2, F = 3〉 cycling transition,
is turned on when the ablation laser is fired. Following this, a 20 MHz red-detuned Doppler cooling
beam is turned on for 250 μs. Finally, a resonant laser pulse is sent to collect the fluorescence. The
first thing we noticed is that ions can be generated and loaded into the trap in the absence of the
photoionization light source at 285 nm, which was not seen before when using a resistively heated
oven. The exact mechanism is not fully understood but a possible explanation is the generation of
excited-state atoms during the laser ablation process followed by field ionization due to the trap
rf field [van Ingen 96, Gu ̈rtler 04, Hendricks 07, Sheridan 11]. A typical pulse fluence to load a

28
25Mg+ is about 1.2 J/cm2. Since our Mg+ loading mechanism is independent of the isotopes and
the ablation target is naturally abundant, to isotope-selectively load 25Mg+ might be troublesome.
Fortunately, the cooling light for 25Mg+ in fact heats the most abundant isotope, 24Mg+, and
rejects the loading of the 24Mg+ [Drullinger 80]. We do load 26Mg+ occasionally, but 26Mg+ can be
dumped out of the trap easily by lowering the trap rf potential while keeping the existing 25Mg+,
if any, in the trap.
To load 27Al+ efficiently, we find a PI laser is required. In the previous trap, a continuous
wave (cw) diode laser at 396 nm was used in a (1+1) resonance-enhanced multi-photon ionization
(REMPI) process via the |4s 2S1/2〉 state [Chou 10a]. In the new trap, we use a pulsed frequency
quadrupled Nd:YAG laser (Teem Photonics, STU-01E, < 0.4 ns pulse duration) and the |5s 2S1/2〉
as the intermediate state. Although the transition rate via the |5s 2S1/2〉 state is weaker, the
higher peak power at 266 nm still provides sufficient ionization rate. In addition, this turn-key and
maintenance-free laser reduces the work regarding the ion-loading. The PI process is accomplished
by temporally and spatially overlapping the laser pulse with the atomic flux ablated from the target.
Based on our loading experience, we find the loading efficiency highly depends on the surface
properties of the ablation target. Firing the ablation pulses on the same spot will eventually
generate a “dead spot” that loses the ability to load ions. To avoid this, we randomly choose a new
spot, which needs to be at least one beam waist away from the previous loading attempt, before
each shot of the ablation laser by adjusting the deflection AOM frequency. The process to load a
25Mg+ and a 27Al+ is automated and the flowchart of the loading process is shown in Fig. 2.13.
2.4 27Al+ Laser System
To operate the 27Al+ optical clock utilizing quantum logic spectroscopy, we need two coherent
light sources at 267 nm to address the transitions between |1S0〉 ↔ |3P1〉 and |1S0〉 ↔ |3P0〉. In this
section, I will describe the implemented laser systems for 27Al+.

29
Figure 2.13: Flowchart of the automatic ion loading.
Finish loading
Start Loading 25Mg+
Move ablation beam toward Mg target
Set AOM frequency and power
To load 27Al+?
Is 25Mg+ loaded?
Check fluorescence
Fire abalation laser
Check axial secular frequency
Does bright ion exist?
Start Loading 27Al+
Move ablation beam toward Al target
Set AOM frequency and power
Fire abalation and PI lasers
Does bright ion exist?
Check axial secular frequency (25Mg+)
Does dark ion exist?
Check axial secular frequency (27Al+-25Mg+)
Does
27Al+-25Mg+
exist?
yes
no
Dump out unwanted ions
yes
no
no
yes
yes
Start Loading 25Mg+
no
yes
Check fluorescence
yes
Dump out unwanted ions
no
no

30
2.4.1 Energy Levels and Lasers
The relevant energy levels of 27Al+ are shown in Fig. 2.14. The intercombination transition
|1S0〉 ↔ |3P1〉 is used for micromotion characterization and quantum logic read-out, while the
transition |1S0〉 ↔ |3P0〉 is the forbidden transition used as the optical frequency standard. We
name the laser systems addressing these two transitions using the term symbols of the excited state,
3P1 and 3P0, respectively. Both laser systems are frequency-quadrupled fiber lasers. The IR sources
are narrow-linewidth (Lorentzian FWHM < 5 kHz) seed lasers made by NP Photonics, Inc. The
two fiber lasers are further amplified by continuous wave (cw) ytterbium fiber amplifiers (Keopsys
Group) to generate 1-2 Watts of optical power in the infrared (IR). The IR light is afterwards
frequency-doubled to the visible (VIS) using single-pass periodically poled lithium niobate (PPLN)
second-harmonic-generation (SHG) waveguides (NTT Electronics, custom modules) which is then
doubled to the ultraviolet (UV) by home-made ring cavity frequency doublers using beta barium
borate (BBO) crystals. Typically, 8 mW of 3P1 UV power and 700 μW of 3P0 UV power are
obtained from the resonant UV doublers. The UV output power is stabilized by adjusting the
input VIS pump power. Currently these two lasers are frequency narrowed and stabilized to high
finesse cavities in the visible, which will be described later. The 27Al+ laser beams at 267 nm are
reflected off of dichroic filters (Semrock, FF01-267/LP-25) before going into the vacuum chamber
to overlap with the 25Mg+ laser beams at 280 nm. To maintain the Gaussian beam profile and
to avoid polarization distortion, the incident angle of the filter needs to be less than 5◦. Both
colors share the same focusing lenses and waveplates, which are attached to the chamber using
home-made cage adapters. The difference of retardances between 267 nm and 280 nm for typical
zero-order waveplates is less than 0.05 waves, which does not limit our experiments. However,
chromatic aberration of the focusing lenses is observed and hence near one-to-one telescopes are
installed in the 27Al+ laser beam paths for compensation.
The laser beam geometry and AOM setup for 27Al+ are shown in Fig. 2.15. To fully cha
racterize the micromotion of the 27Al+, three nearly mutually orthogonal 3P1 beam lines are im

31
Figure 2.14: Energy level diagram of 27Al+.
3P0
3P1
1S0
27Al+ I = 5/2
F = 7/2
F = 5/2
F = 5/2
plemented. Two of them are perpendicular to the quantization axis and π-polarized, while the
third one is along the quantization axis and also serves as the 27Al+ state preparation beam. An
electro-optic modulator (EOM) is installed in the state preparation beam to switch between the
σ+ and the σ− polarizations, which is used to pump the 27Al+ to the stretched Zeeman levels,
|1S0, F = 5/2, mF = 5/2〉 and |1S0, F = 5/2, mF = −5/2〉, respectively for the cancellation of
the first-order Zeeman shift [Bernard 98]. Two counterpropagating 3P0 (clock) beams are set up
perpendicular to the quantization axis to drive the transitions |1S0, F = 5/2, mF = ±5/2〉 ↔
|3P0, F = 5/2, mF = ±5/2〉, which provides cancellation of the first-order Doppler shift.
2.4.2 Frequency Stabilization of the 3P1 Laser
The 3P1 laser is frequency stabilized to the same ultra-low expansion (ULE) reference cavity
used for the 25Mg+ laser using the Pound-Drever-Hall (PDH) locking technique [Drever 83]. The
locking scheme is depicted in Fig. 2.16. The 25Mg+ and the 3P1 laser beams are frequency-doubled
to the VIS and sent through the cavity in opposite directions. The error signal is first filtered and

32
Figure 2.15: 27Al+ laser beamlines. RD: resonant frequency doubler. All 27Al+ beams are overlapped with the 25Mg+ beams lines using dichroic beam combiners shown in Fig. 2.19. The EOM is used to switch the polarization between σ+ and σ− to optically pump the 27Al+ to the desired Zeeman state.
3P1 RD
3P0 RD
AOM
AOM AOM AOM
EOM
AOM
AOM
To vertical port
To RR/BR-co port
To BR-a port
To BR-t port
integrated using a digital servo box [Leibrandt 15], and then feeds back to both the piezoelectric
transducer (PZT) of the seed laser and an AOM. The 88-mm- long ULE cavity is housed in a stain
less steel vacuum can without active temperature stabilization. Typically ∼ 30 Hz/s of frequency
drift in the VIS is observed due to the variation of the ambient temperature.
2.4.3 Frequency Stabilization of the 3P0 Laser
Similarly, the 3P0 laser is frequency referenced to a ULE high finesse cavity using the PDH
locking scheme [Young 99]. However due to the narrower transition linewidth, the performance of
the frequency stabilization is more demanding. The frequency stabilization set up is depicted in
Fig. 2.17. The 24-cm-long ULE reference cavity is housed inside a temperature-controlled aluminum
vacuum can, which is both thermally and vibrationally well isolated from the environment. The
reference cavity finesse is measured to be about 400 000 in the VIS. The error signal feeds back to
both the PZT of the seed laser and an AOM in IR by a digital servo box, which also controls the
temperature of the seed laser to improve the long-term performance of the frequency stabilization.
The phase noise introduced in the fiber link between the reference cavity and the UV frequency

33
Figure 2.16: 27Al+ 3P1 laser frequency stabilization scheme. Note that the transition frequency is based on one frequency comb measurement
and the systematic shifts have not been evaluated.
NP Photonics
seed laser Isolator AOM Keopsys Fiber
Amplifier Waveguide
SHG
Amplitude-Control
AOM
AOM
Reference
Cavity
PDH
Lock
Wavelength
Meter
SHG Cavity
frequency-tuning
AOM
Switching
AOM
1S0
3P1
F = 7/2
Al+
f0 = 1 122 842.857 GHz
5%
0 order
-210 MHz -2 x 180 MHz
+80 MHz
-2 x 200 MHz

34
doubler is actively canceled using a standard fiber-noise cancellation scheme [Ma 94, Hume 10].
2.5 25Mg+ Laser System
The isotope 25Mg is the only one with a non-zero nuclear spin among three stable magnesium
isotopes. The Zeeman levels of hyperfine states in |2S1/2, F = 2 and 3〉 and |2P3/2, F = 3 and 4〉 used
in the experiments are depicted in Fig. 2.18. Two fiber lasers (Menlo Systems Inc., OrangeOne) are
frequency-quadrupled to generate the UV light sources at 280 nm for transitions between |2S1/2〉
and |2P3/2〉. Similar to the 27Al+ laser systems, the IR to VIS frequency conversion is conducted by
single-pass PPLN SHG waveguides (NTT Electronics, custom modules). The VIS-to-UV frequency
doubling is achieved using home-made resonant frequency doublers with BBO crystals [Wilson 11].
One of the fiber lasers is frequency-stabilized to a high finesse cavity (finesse F ' 75 000), made of
the ULE glass, utilizing the PDH technique. This laser is used for Doppler laser cooling, quantum
bit (qubit) repumping, and atomic state detection. The other laser is free-running and is used to
drive stimulated Raman transitions between Zeeman levels of |2S1/2, F = 2 and 3〉 for quantum logic
manipulation and sideband cooling. Typically, we obtain about 15 mW of the UV power pumped
by 900 mW of IR laser power. Several AOMs are used for frequency shifting, power control, and
timing control. All laser beams, except the one going through the imager, are focused to about
30 μm waist radius at the position of ions, measured by the knife-edge method using the trap
electrodes. The laser beam geometry and the AOM configurations of the 25Mg+ laser system are
shown in Fig. 2.19, which will be described in detail in the following sections.
2.5.1 Qubit
Given the non-zero nuclear spin, I = 5/2, of the 25Mg+, the ground state |2S1/2〉 splits
into two hyperfine levels, F = 2 and 3, with a frequency difference of about 1.8 GHz as shown in
Fig. 2.18. This energy difference significantly reduces the off-resonant transition probability while
driving transitions from(to) either of the hyperfine states. In our experiment, two Zeeman levels of

35
Figure 2.17: 27Al+ 3P0 laser frequency stabilization scheme. FN AOM: fiber-noise cancellation AOM.
NP Photonics
seed laser Isolator AOM Keopsys Fiber
Amplifier Waveguide
SHG
AOM
Reference
Cavity
PDH
Lock
SHG Cavity
Frequency tunning
AOM
1S0
3P0
Al+
f0 = 1 121 015.393 207 851(6) GHz
Frequency
Comb
FN
AOM
fiber link
fiber link Amplitude
Servo
FN
AOM
FN
AOM
fiber link
Isolator
Clock servo
+180 MHz
- 65 MHz
+80 MHz
- 80 MHz
- 40 MHz
+ 40 MHz

36
Figure 2.18: Relevant energy level diagram of 25Mg+ (not to scale). D: Doppler cooling, detection; FD: far-detuned cooling; R: repumping; RR: red Raman; BR-a: axial blue Raman; BR-t: transverse blue Raman; BR-v: vertical blue Raman; BR-co: co-propagating blue Raman.
2P3/2
2S1/2
F=3
F=2
F=4
F=3
1.8 GHz
57 MHz
279.63 nm
BR-co
RR
BR-a BR-t BR-v
mF = -4
mF = -3
mF = -3
D
R
50 GHz
mF = -2
FD
the hyperfine states are used as the qubit states:
|↑〉 ≡ |2S1/2, F = 2, mF = −2〉, (2.8)
|↓〉 ≡ |2S1/2, F = 3, mF = −3〉. (2.9)
The manipulation of qubit states can be achieved by either a Raman two-photon transition or a
microwave transition. The discrimination of qubits is essential for both the characterization of ions’
secular motion energy and the clock operation, which will be described in Sec. 2.6.1.

37
Figure 2.19: Schematic of the 25Mg+ laser beam setup. WSHG: second harmonic generation waveguide; RSHG: resonant second harmonic generation; AOM: acousto-optic modulator; D: Doppler cooling and detection; FD: far-detuned cooling; R: repumping; RR: red Raman; BR-a: axial blue Raman; BR-t: transverse blue Raman; BR-v: vertical blue Raman; BR-co: co-propagating blue Raman.
AOM
Fiber laser
1118 nm WSHG RSHG
Mg+
AOM
+2x300 MHz
AOM
+1x180MHz
R
D FD
-2x560MHz
Wavelength Meter &
Reference Cavity
Fiber laser 1118 nm
RSHG WSHG
AOM
AOM
AOM
AOM
AOM
-2x300 MHz
+2x300 MHz
+1
0
-1x300 MHz
+1x300 MHz
+1x300 MHz
+1
RR
B R - c o
AOM
AOM
Beam splitter or combiner
Mirror
Dichroic combiner for Al+ beam
UV fiber
+1 +1x300 MHz
+1
+1x300 MHz
+1
0
0
0
To Vertical port
BR-t
BR-a Al+
B
trap axis BR-v
2.5.2 Atomic State Preparation and Doppler Laser Cooling
The Zeeman states |↓〉 and |2P3/2, F = 4, mF = −4〉 form a closed cycling transition, which is
suitable for atomic state preparation and detection. In addition, the 40-MHz transition linewidth
is also suitable for Doppler laser cooling. For each experiment, we always start with a 200-μs,
σ−-polarized, and ∼ 1 mW cooling pulse at 420 MHz red-detuned from the cycling transition. This
far-detuned cooling pulse is efficient to cool hot ions, which might be generated by collisions with
background gas. In addition, this intense cooling pulse also plays a role to prepare most of the
25Mg+ population in the |↓〉 state. Afterwards, a Doppler cooling pulse of duration 250 μs - 2 ms

38
is applied to the ion, which depends on the number and the species of trapped ions. At the end of
the experiment, a resonant detection pulse is applied and the laser-induced fluorescence from the
cycling transition is collected and detected by the imaging system.
During the experiment, the Doppler cooling pulses and the detection pulses are actively
controlled at the same power level. To ensure that the kinetic energy of ions is close to the Doppler
limit temperature, we need to keep the laser intensity sufficiently low, with the overhead of a longer
cooling time. To characterize the intensity of the Doppler cooling (detection) light, we measure the
number of scattered photons using the detection beam when the 25Mg+ is initially prepared in the
|↑〉 state [Chou 10a]. The number of scattered photons due to a detection pulse of a duration τ in
μs can be expressed in terms of the population P↑(↓) and the photon scattering rate Γ↑(↓) in the
state |↑ (↓)〉,
Nγ (τ ) = ηc.e.
∫τ
0
(Γ↓P↓(t) + Γ↑P↑(t)) dt,
= ηc.e.P↑(0)
{
Γ↓τ + Γ↑ − Γ↓
γ (1 − e−γτ )
}
,
(2.10)
where γ is the pumping rate from |↑〉 to |↓〉, and ηc.e. is the collection efficiency of the imager. Given
the hyperfine splitting and the branching ratio of the transition |2P3/2, F = 3, mF = −3〉 → |↓〉,
the Eq. 2.10 can be further reduced to,
Nγ(τ ) = A
(
τ + 217
s (e− sτ
217 − 1)
)
, (2.11)
where A is a constant, and s ≡ I/Is represents the saturation parameter of the laser beam. By
fitting Nγ(τ ) to the detected photon counts, we can estimate the intensity of the detection and the
Doppler cooling beam on the ion. In the experiment, we typically run the experiment with the
intensity set to about 10% of the saturation intensity.
2.5.3 Repumping
For some pulse sequences, the 25Mg+ may have some population in the |↑〉 after an experiment.
To ensure most of the population in the |↓〉, a repumping pulse sequence is applied. The pulse

39
sequence starts with a σ− repumping pulse to clear out the population in |↑〉 via the transition
|↑〉 ↔ |2P3/2, F = 3, mF = −3〉. After a repumping pulse, one quarter of the population originally
in |↑〉 will end up in the |2S1/2, F = 3, mF = −2〉 state. Therefore we drive a motion-insensitive,
two-photon Raman transition by turning on the red-Raman (RR) and the co-propagating blue
Raman (BR-co) lasers simultaneously to bring the |2S1/2, F = 3, mF = −2〉 population back to
the |↑〉 state (see Fig. 2.18 and Fig. 2.19.) By alternating the repumping and the Raman pulses
several times, we can move the majority of the population from |↑〉 to |↓〉. Typically, our repumping
sequence consists of three repumping pulses and two Raman pulses, which means that 98.5% of the
population in the |↑〉 is transferred to the |↓〉 for ideal π pulses.
2.5.4 Motion-Sensitive Raman Spectroscopy
Figure 2.20: Raman transition spectrum of a 25Mg+-27Al+ two-ion pair with all six secular modes of motion resolved. Red: after Doppler cooling. Blue: after Raman sideband cooling. Disappearance of the RSB transitions after Raman sideband cooling indicates the ions’ motion is close to the zero point energy.
As shown in Fig. 2.18 and Fig. 2.19, we implemented four blue Raman (BR) beams in our
system. The RR beam in combination with one of the BR beams can drive Raman transitions within

40
the hyperfine manifolds of the |2S1/2〉 state. In addition, except the BR-co, the differential wave
vectors of BR beams and the RR beam have sufficient projections along the directions of the secular
modes of motion, which are capable of driving the motional sidebands of the hyperfine transitions.
The ability to drive the motion-sensitive Raman transitions is not only crucial to laser cooling
and energy characterization but also for clock operation utilizing quantum logic spectroscopy. The
axial (BR-a) and the transverse (BR-t) blue Raman beams are used to manipulate the motional
quanta in the axial and the transverse directions, respectively, which gives us full control of the ions’
motion in all three dimensions. The vertical blue Raman beam (BR-v) is mainly for micromotion
compensation. During the experiments, we only manipulate motional quanta between two qubit
states, |↑〉 and |↓〉. As explained in Sec. 2.1, the ions’ motion inside the trap can be described
by a Fock state distribution and hence we can separate the Raman transitions into three types.
Throughout this thesis, the “carrier” Raman transition denotes the transition with no change of
the motional state, while the red-sideband (RSB) and the blue-sideband(BSB) pulses for 25Mg+
correspond to the |↓, n〉 → |↑, n − ∆n〉 and |↓, n〉 → |↑, n + ∆n〉 transitions, respectively, where
n is the initial Fock state and ∆n, the order of the sideband transition, represents the number
of quanta changed by a laser pulse. With our Raman beam setup, we have demonstrated cooling
of the motion of a 25Mg+-27Al+ two-ion pair in all three dimensions by applying numerous RSB
Raman pulses to the trapped ions followed by repumping sequences [Chen 17]. A typical Raman
transition spectrum of a 25Mg+-27Al+ two-ion pair as shown in Fig. 2.20 indicates that we have
cooled the ions to near the 3D zero point energy. More details will be discussed in the next chapter.
2.6 Other Techniques
2.6.1 Maximum-Likelihood Probability Estimation
In our experiment, the mean photon counts collected during the detection time of 250 μs from
|↓〉 and |↑〉 are about 8 and 0.9, respectively, and the two counts histograms overlap significantly as
shown in Fig. 2.21. The observed histograms in the experiment typically result from the scattered

41
Figure 2.21: Typical photon histograms scattered from |↓〉 and |↑〉.
photons from a linear combination of two states and we find that applying a threshold to the photon
counts is not sufficient to extract state populations at the 0.1 % level. To extract the probability in
|↓〉, we use a maximum-likelihood estimation method to analyze our data. Before experiments start,
we need two reference histograms, P(k|↓) and P(k|↑), corresponding to the probability of observing
k photons in |↓〉 and |↑〉, respectively. We determine reference histograms experimentally by taking
fluorescence measurements when the ions are prepared in the states of |↑〉 or |↓〉. The state |↓〉
is prepared by applying a repumping pulse sequence after Doppler cooling while |↑〉 is prepared
by applying a microwave π pulse from |↓〉. During the experiment, we record a series of photon
counts {ki} from a particular quantum state |Ψ〉 = √p |↓〉 + √(1 − p) eiφ |↑〉 in m measurements,
where p denotes the population in |↓〉 and φ is the relative phase between |↓〉 and |↑〉. The errors in
preparation of |↓〉, |↑〉 and the superposition states are negligible and do not contribute significantly
to the determination of the state. For a binomial probability distribution, the likelihood function
is defined as,
L(p) =
m
∏
i=1
( p P(ki|↓) + (1 − p) P(ki|↑) ). (2.12)

42
Figure 2.22: Rabi oscillation of the motional insensitive Raman transitions. (a) and (b) Before and after the installation of the UV fibers and UV power servo, respectively.
0 10 20 30 40 50
0
1
2
3
4
5
6
7
8
Photon Counts
(a)
0 20 40 60 80 100 Time [μs]
1
2
3
4
5
6
7
8
Photon Counts
(b)
By maximizing the likelihood function numerically, we can estimate the population in |↓〉 for any
histogram observed in the experiments [Gaebler 16].
2.6.2 UV Fibers and Pulse Area Control
For clock operation, it is important to have long term stability in many components of the
experiments. One important criterion of our system is to ensure the ion experiences the same pulse
area at the right frequencies in each pulse sequence. To achieve this, we use fibers to minimize the
laser beam pointing fluctuations [Colombe 14] and actively servo the pulse area by controlling the
laser power after the fiber.
Nowadays fibers that are suitable for light sources at 280 nm and 267 nm are still not avai
lable in the market due to the formation of UV-induced color-center [Skuja 01]. However, using
commercially available solid-core photonic crystal silica fibers after hydrogen loading and UV ir
radiation [Colombe 14], we can usually achieve ∼ 50% transmission through the fibers at both

43
280 nm and 267 nm. The recipe to make these fibers can be found on our group website7 . The
fiber attenuation at 267 nm has not been systematically studied but it is believed to be close to
the value at 280 nm reported in Ref. [Colombe 14] based upon our experience. The fibers also
spatially filter higher order transverse modes, typically seen at the output of BBO-based frequency
doublers due to the large walk-off angle [Boyd 68], and hence reduce spatial intensity variations of
laser fields at the position of ions. In general we have a few hundreds of μW to 2 mW of UV power
measured after the fibers. In Fig. 2.22, we show the Rabi oscillation curves of motion-insensitive
Raman transition in 25Mg+ before and after installing the UV fibers in our system.
Following each UV fiber output coupler, we set up a beam pick-off to monitor and control
the laser power. The transmitted power through a fiber is actively maintained at a desired level by
adjusting the rf power going to an AOM. This laser power servo is controlled by a high-speed digital
controller [Leibrandt 15]. The high speed controller gives us the ability to control an individual
pulse of duration & 1 μs and the servo performance remains the same when the duty cycle of the
pulse sequence changes. In addition, the use of fibers eliminates the pointing variations due to the
thermal effects of the AOMs.
2.6.3 AOM Double-pass Configuration
AOMs are widely used in atomic physics experiments for frequency and timing control of la
ser pulses. In a double-pass configuration, the beam pointing becomes insensitive to the deflection
angle of the AOM when a cat’s eye retroreflector is implemented on the second pass [Snyder 75,
Donley 05]. Moreover, by rotating the polarization of the second second pass by 90◦, the retrore
flected beam will follow the incident beam path and later can be separated from the input beam
such that the beam pointing fluctuation caused by the thermal lensing effect of AOM will be can
celed [Donley 05]. This technique is commonly used in the experiments which require a precision
control of light intensity. However it is only possible when using the AOMs with significant de
flection efficiency in two perpendicular polarization directions, which are not available in the UV.
7 http://www.nist.gov/pml/time-and-frequency-division/ion-storage

44
Figure 2.23: The two-bounce (a) and three-bounce (b) double-pass AOM configurations. Path A (solid line): unperturbed beam path. Path B (dashed line): perturbed beam path due to the thermal effect of AOM.
AOM
path A path B
AOM path A
path B
(a) (b)
When using an UV AOM, the second pass needs to be deviated from the input beam by a small
amount, which can be picked off for the experiments8 . Therefore better thermal management is
usually required to eliminate the beam pointing fluctuation [Kobayashi 06, Fr ̈ohlich 07].
In our system, we actually investigate a different route to reduce the thermal effect. In fact,
the cancellation of the thermal effect in the double-pass setup relies on two factors.
• The second path passes through the same region of the AOM as the first one such that it
experiences the same thermal lensing.
• The beam pointing change of the second path needs to be opposite to the first path in the
lab frame.
These two conditions are achievable if there are odd numbers of mirror bounces after the AOM.
In Fig. 2.23, we can see the three-bounce configuration cancels the thermal effect while the two
bounce configuration doubles the thermal drifts. In our setup, we did observe the reduction the
beam pointing fluctuation by about a factor of 5 after changing from two-mirror to three mirror
configuration. The drawback of this setup is that the Bragg condition cannot not be satisfied in
both paths; however we can still achieve about 50 % deflecting efficiency after the second pass.
8 Usually two beams are separated perpendicular to the deflecting direction.

45
2.7 Quantum Logic Spectroscopy
With the lack of direct fluorescence detection, we use a technique called quantum logic
spectroscopy (QLS) to read out the atomic state of the 27Al+ [Schmidt 05]. The basic idea is
to use the secular motion as the information bus to transfer the atomic state information of the ion
of interest, called the spectroscopy ion, to another ion of different species simultaneously trapped
with the spectroscopy ion, called the logic ion. In the optical clock system described in this thesis,
we trap a 25Mg+ as the logic ion together with an 27Al+. The out-of-phase mode of motion along
the trap z axis is chosen to transfer the atomic state information. The information we need to
know is if the 27Al+ is in the 1S0 state or not. The process is shown in Fig. 2.24 and described as
follows.
(1) Ground state cooling on the 25Mg+ to place the 25Mg+-27Al+ two-ion pair axial COM and
axial STR motional modes in their ground state. At this moment, we assume the 27Al+ is
in the |1S0〉 state.
(2) Prepare the 25Mg+ in |↓〉.
(3) Add one motional quantum to the STR mode by driving the blue sideband of the intercom
bination transition |27Al+, 1S0 F = 5/2, mF = ±5/2〉 → |27Al+, 3S1 F = 7/2, mF = ±7/2〉.
(4) Subtract one motional quantum by driving the red sideband of the 25Mg+ transition |↓〉 →
|↑〉.
(5) Detect 25Mg+ atomic state by detecting the scattered photon count histogram from the
transition |↓〉 ↔ |2P3/2, F = 4, mF = −4〉.
Because the 27Al+ starts in the |1S0〉 state, the transitions in steps 3 and 4 succeed and the
25Mg+ ends up in the |↑〉. On the other hand, if the 27Al+ does not start in the |1S0〉 state, steps 3
and 4 are inactive and the 25Mg+ remains in the |↓〉 state. Therefore by distinguishing the photon
count histograms shown in Fig. 2.21, we can extract the initial atomic state of the 27Al+.

46
Figure 2.24: Process of quantum logic spectroscopy. The atomic state of the 27Al+ is determined by the scattered photon count histogram of the 25Mg+. Left column, 27Al+ not in the 1S0 state; right column, 27Al+ in the 1S0 state.
25Mg+ RSB
Ground state cooling
3P1 BSB
25Mg+
Fluorescence Detection
25Mg+
2S1/2
27Al+
1S0
3P1 3P0
25Mg+
2S1/2
27Al+
1S0
3P1 3P0
25Mg+
2S1/2
27Al+
1S0
3P1 3P0
25Mg+
2S1/2
27Al+
1S0
3P1 3P0
25Mg+
2S1/2
27Al+
1S0
3P1 3P0
25Mg+
2S1/2
27Al+
1S0
3P1 3P0
Probability
Photon count
Probability
Photon count

47
Table 2.2: Comparison of two different 27Al+ optical clock operation protocols.
Clock operation A B protocol Doppler cooled clock Sideband cooled clock Kinetic energy of the secular motion Doppler limit Ground state Cooling light shift Need to evaluate − Clock duty cycle Higher Lower Overall clock shift − Potentially smaller
2.8 Clock Operation Pulse Sequence
Typically one optical clock operation sequence can be separated into three main parts: pre
paration, interrogation, and detection. We consider two different clock operation protocols, A and
B, proposed for the 27Al+ optical clock operation. Their difference is the ions’ kinetic energies
during the interrogation period. The sequence A , Doppler-cooled clock, maintains the ions at the
Doppler limit temperature during the clock interrogation while the sequence B, sideband-cooled
clock, prepares the ions near the motional ground state at the beginning of the clock interrogation.
The comparison between the two sequences is summarized in Table 2.2.
2.8.1 State Preparation
The preparation process includes the preparation for both the internal atomic states and the
external motional states. Both of the protocols start with a 200 μs FD cooling pulse on the 25Mg+
followed by a 2 ms Doppler cooling pulse to ensure the ion’s motion is close to the Doppler limit.
At the end of the preparation process, multiple 3P1 pulses are applied to prepare the 27Al+ in one
of the stretched Zeeman levels of the ground state. For sequence B, a ground state cooling pulse
sequence is inserted after the Doppler cooling pulse to prepare the ions close to the ground state;
this will be discussed in the next chapter. The pulse sequence of the state preparation process is
presented in Fig. 2.25.

48
Figure 2.25: State preparation pulse sequences before the clock interrogation. FD, far-detuned cooling pulse; D, Doppler cooling pulse; Prep., 3P1 state preparation pulse.
FD D
25Mg+
3P1 Prep.
FD D
25Mg+
3P1 Prep.
GSC
2.8.2 Clock Interrogation
When the state preparation is complete, we switch on the laser pulse to interrogate the
clock transition of the 27Al+, |1S0, F = 5/2, mF = ±5/2〉 ↔ |3P0, F = 5/2, mF = ±5/2〉. Rabi
spectroscopy is used to determine the transition line center. For the sequence A , the Doppler
cooling light is turned on during the clock interrogation such that ions’ kinetic energy is close to
the Doppler cooling limit. in this case, the cooling light imparts an ac Stark shift to the clock
transition, which needs to be characterized [Rosenband 08, Chou 10a]. On the other hand, the
cooling is absent during the clock interrogation in the sequence B and the ions’ kinetic energy
increases due to the background heating [Turchette 00a]. Therefore, the characterization of the
energy after sideband cooling and the background heating rate are necessary to determine the
frequency shift due to time-dilation arising from the ions’ energy [Chen 17]. Typically, a few tens
to 200 ms interrogation time is used. The pulse sequence is depicted in Fig. 2.26.

49
Figure 2.26: Clock interrogation pulse. Clock, 3P0 pulse; D, Doppler cooling pulse.
Prep. Clock
Prep. D
Prep. Clock
25Mg+
3P0
3P0
2.8.3 Atomic State Detection
The atomic state detection is achieved by utilizing quantum logic spectroscopy. After the
interrogation pulse, the atomic state of 27Al+ is determined from the resulting state of 25Mg+
following Sec. 2.7. A quantum nondemolition measurement scheme is implemented to increase
the detection fidelity by repeating the measurement sequence multiple times [Hume 07]. Adaptive
selection of the number of repetitions using a Bayesian algorithm reduces the clock dead time and
hence improves the stability [Quessada 03]. In general, 5 ∼ 10 repetitions of the quantum-logic
spectroscopy sequence are needed to determine which state the 27Al+ is in.

Chapter 3
Time Dilation Effect due to Secular Motion
Previously, the 27Al+ optical clocks had achieved a fractional frequency uncertainty of 8.8 ×
10−18 [Chou 10a]. One of the main uncertainties arose from the time dilation (second-order Dop
pler) shift due to secular motion while performing continuous sympathetic Doppler cooling on the
25Mg+ ion during the clock interrogation1 . The uncertainty was limited to 30% of the secular mo
tion time dilation shift due to the difficulties of performing accurate temperature measurement of
a 25Mg+-27Al+ two-ion pair near the Doppler cooling limit. To date, trapped-ion optical clocks are
all operated with the ions’ secular motion near the Doppler cooling limit [Chou 10a, Barwood 14,
Ludlow 15, Huntemann 16]. Although operating the clock with the motion cooled to near the zero
point energy had been mentioned almost three decades ago [Wineland 87], it has not been achieved
due to the complexity of the cooling sequences and the challenge to determine the energies near the
motional ground state. In this chapter, I will discuss how we overcome these difficulties to operate
the clock near the 3D motional ground state and hence to reduce the secular motion time dilation
shift and uncertainty.
3.1 Motion in RF Traps
The classical equations of motion of an ion inside a linear trap are given in Eq. (2.1) and
Eq. (2.6). When the ion is cold, the ion’s motion is quantized and can be described by a Fock state
distribution for each of the secular modes of motion. The energy of a specific motional mode p is
1 The first-order Doppler shift in the Al+ optical clock is strongly suppressed due to various reasons, which will be discussed in the next chapter.

51
Figure 3.1: Secular modes of motion of 25Mg+-27Al+ ion pair.
given by
Ep = ħωp( ̄np + 1
2 ), (3.1)
where n ̄p is the average occupation number of the Fock state distribution. When one 25Mg+ and one
27Al+ are trapped simultaneously in a linear Paul trap, six independent secular modes of motion
exist2 . As shown in Fig. 3.1, there are two motional modes along each axis, the “common” (COM)
mode where the velocities of two ions are in the same direction and the “stretch” (STR) mode
where they are in the opposite directions. Therefore, if we can measure the average occupation
number of all six modes of motion, we can determine the energy of the secular motion.
For a Paul trap, the pseudopotential generated by the rf field leads to an additional energy
in the transverse directions which needs to be included when we characterize the energy of the
ions. Because this motion has a characteristic frequency ΩT and exists even in an ideal Paul trap,
we usually call it “intrinsic micromotion” (IMM) to be distinguished from the excess micromotion
(EMM) which arises from the imperfections of the ion-trapping potential. The energy of the IMM
has been described in detail and it is approximately the same as the secular energy for a specific
secular mode of pseudopotential motion [Wineland 87]. Therefore, the energy of the secular modes
2 The effect of the mode-coupling due to the Kerr nonlinearity arising from the mutual Coulomb repulsion between ions is not essential and ignored here when the ions are cold [Marquet 03].

52
of motion and the IMM energy is given by
E=
∑
p
ζpħωp( ̄np + 1
2 ), (3.2)
where the factor ζp approximately equals 2 for the transverse motion, and 1 for the axial motion.
The resulting time-dilation shift is given by
δf
f =− E
mAl c2 . (3.3)
3.2 Sideband Thermometry
The most common method to measure the secular motion energy of trapped ions in thermal
equilibrium is to compare the transition probabilities between the first-order blue sideband (quanta
adding) and the first-order red sideband (quanta-subtracting) transitions [Diedrich 89, Monroe 95].
Given a thermal distribution with average occupation number  ̄n, the probability Pth in a Fock state
n is expressed as
Pth(n) = 1
1 + n ̄
( n ̄
n ̄ + 1
)n
. (3.4)
When we apply a pulse of duration t to drive the blue and red sideband transitions, the transition
probabilities Pb and Pr are given by
Pb =
∞
∑
n=0
1
2 [1 − cos(2Ωn,n+1t)] P(n), (3.5)
Pr =
∞
∑
n=1
1
2 [1 − cos(2Ωn,n−1t)] P(n), (3.6)
where P(n) is the population in the motional state n, and Ωn,n±1 is the Rabi rate connecting the
two Fock states, |n〉 and |(n ± 1)〉. After substituting Eq. (3.4), the equations above become
Pb =
( n ̄ + 1
n ̄
)∞ ∑
n=1
1
2( ̄n + 1) [1 − cos(2Ωn,n−1t)]
( n ̄
n ̄ + 1
)n
,
=
( n ̄ + 1
n ̄
)
Pr .
(3.7)
Here we use Ωn,n+1 = Ωn+1,n in the derivation. Therefore, the average occupation number of a Fock
state distribution in thermal equilibrium can be determined by measuring the ratio of probabilities

53
in the blue sideband and the red sideband transitions, β ≡ Pb/Pr, and is given by
 ̄n = 1
β − 1 . (3.8)
In fact a more general formula can be written as
n ̄ = 1
∆ √β∆ − 1 , (3.9)
where β∆ denotes the ∆-th order blue sideband and red sideband ratio. We only focus on the ratio
of the first-order sideband ratio throughout this thesis. The derived average occupation number  ̄n
and the measured sideband ratio are shown in Fig. 3.2.
Figure 3.2: The relation between  ̄n and the first-order sideband ratio for a thermal distribution.
1 2 5 10
0.1
1
10
100
1000
104
β
n
Although sideband thermometry provides a simple and robust method to measure the ion
energy, we stress that the derivation above is only valid for the systems in thermal equilibrium. For
a system possessing a non-thermal Fock state distribution, sideband thermometry may lead to a
significant deviation from the actual ion energy [Chen 17]. Even for thermal equilibrium conditions,
sideband thermometry may encounter certain practical challenges. For instance, when  ̄n ' 10, it
becomes very sensitive to a small change of the sideband ratio and hence the projection noise of the
measurement in β limits the achievable accuracy. In the following two sections, I discuss specifically
the determination of the secular motional energy close to and below the Doppler cooling limit in
the case of the 25Mg+-27Al+ two-ion pair.

54
3.3 Sympathetic Doppler Cooling and Energy Estimation
Sympathetic Doppler cooling of a 27Al+ using a 25Mg+ in a linear Paul trap has been in
vestigated theoretically in Ref. [W ̈ubbena 12] and I will just briefly summarize here. The cycling
transition | ↓〉 ↔ |2P1/2, F = 4, mF = −4〉 with a 40 MHz linewidth is used to Doppler cool all six
secular modes of motion. The laser frequency is set to be 20 MHz red-detuned from the transition
and the intensity is controlled to be about 10% of the saturation intensity. Although the larger
linewidth of 25Mg+ leads to higher achievable cooling limit in comparison with other ion species
such as Be+, Ca+, etc., the mass match between 27Al+ and 25Mg+ benefits the sympathetic cooling
as shown in Fig. 3.3.
Figure 3.3: The sympathetic Doppler cooling limit of Al+ versus the mass ratio of Al+ and the coolant ion, adapted from Ref. [Wu ̈bbena 12]. The energy is in a unit of Doppler temperature of the coolant ion. The simulation is performed at different dimensionless heating rates SE/SE0.
As shown in Fig. 2.8, the Doppler cooling beam has angles of about (60◦, 60◦, 45◦) with
respect to the axes of ions’ motion (x, y, z), which provides sufficient projections to cool the motion
in all three principal axes. If the Doppler cooling pulse is long enough such that the system reaches
thermal equilibrium, the ions’ energy can be determined using the sideband thermometry discussed
in the previous section, which is the method used in the previous 27Al+ clocks [Rosenband 08,

55
Chou 10a]. As an example, the energy determination given in Ref. [Chou 10a] is presented in
Table 3.1. The measured energies deviate 15-20% from the theoretical estimation, which possibly
arises from uncertainties of the angles between the Doppler cooling beam wavevector and the ions’
motional directions, or the measurements of red(blue) sideband transition probabilities. Hence 30%
of the total energy is conservatively given as the uncertainty of energy determination.
Table 3.1: The energy of six secular modes of motion in a 27Al+-25Mg+ two ion pair after sympathetic Doppler laser cooling on the 25Mg+.  ̄nC and n ̄M are the calculated and the measured average occupation numbers, respectively. TD: time-dilation. The data are from Ref. [Chou 10a].
Mode y-COM y-STR z-STR x-COM x-STR z-COM f [MHz] 6.53 5.66 5.20 4.64 3.41 3.00 25Mg+ amplitude [nm] 4.9yˆ 2.9yˆ 4.6zˆ 5.5xˆ −4.2xˆ 5.6zˆ 27Al+ amplitude [nm] 2.6yˆ −5.0yˆ −4.1zˆ 3.5xˆ 6.2xˆ 5.8zˆ n ̄M 2.9 4.5 3.4 6.3 10.0 7.0 n ̄C 3.3 3.8 3.4 5.9 8.0 5.9 TD/quantum [10−18] 0.226 0.731 0.197 0.290 0.771 0.133 Total TD [10−18] 0.77 3.66 0.77 1.97 8.41 1.00
Instead of using a direct comparison of the red and the blue sideband ratio to extract the
ions’ energy, here we explore another strategy to estimate the energy close to the Doppler limit
temperature. The Rabi rate Ω(p)
n,n′ between two Fock states n and n′ of a secular mode p is given
by [Wineland 98]
Ω(p)
n,n′ ≡ Ω
∣ ∣
∣〈n|eiηp(a+a†)|n′〉
∣ ∣ ∣
= Ω e− ηp2
2
√
n<!
n>! η|n−n′|
p L|n−n′|
n<
(η2
p
),
(3.10)
where Ω is the Rabi rate between two electronic states and ηp ≡ kz0 is the Lamb-Dicke parameter,
which can be interpreted as the ratio between the motional ground state wavefunction spread and
the wavelength of the laser field. The lesser and greater of n and n′ are represented as n< and n>,
respectively, while Lnα is the generalized Laguerre polynomial given by
Lα
n (x) =
n
∑
m=0
(−1)m
(n + α
n−m
) xm
m! . (3.11)
Therefore, each observed Rabi oscillation curve is a superposition of oscillations of infinite numbers

56
of Fock states with different oscillation frequencies. Hence the population P↑ starting from |↓〉 after
a pulse with a duration t can be modeled as
P (∆n)
↑ (t) =
∞
∑
n
1
2
(1 − e−γt cos(2Ωn,n+∆n t)) Pth(n), (3.12)
where Pth(n) denotes the population in a Fock state |n〉 in thermal equilibrium given in Eq. (3.4), γ
is a decoherence rate, and ∆n is the change of motional quanta. In Fig. 3.4, I show a simultaneous
fit to the carrier, RSB, and BSB Rabi oscillations of the z mode for a single trapped 25Mg+ with a
given Lamb-Dicke parameter from an independent calibration experiment3 . In general the fitting
gives a 5-10% uncertainty of the average occupation number, n ̄, at a 63% confidence interval. This
sounds promising; however, the situation changes when there is more than one ion inside the trap.
When the wavevector of the laser field has projections on multiple modes of motion, the observed
Rabi rate of a transition of the motional mode p, (DW )Ω(p)
n,n′, perturbed by the Debye-Waller effect
is given by [Wineland 98]
(DW )Ω(p)
n,n′ = Ω(p)
n,n′
∣ ∣ ∣ ∣ ∣ ∣
∞
∑
nh6=p =0
〈n(h)|
∏
h6=p
eiηp(ah+a†
h)|n(h)〉
∣ ∣ ∣ ∣ ∣ ∣
,
= Ω(p)
n,n′
∏
h6=p
e− η2
h
2 Lnh
(η2
h
).
(3.13)
Here h denotes other motional modes with a non-zero projection along the laser wavevector k.
Therefore Rabi oscillation curves of a motional mode p close to the Doppler cooling limit of 25Mg+
actually depend on the energies in other modes of motion h. This leads to a difficult determination
of the motional energy due to the large numbers of parameters in the fit model. Moreover, the
systematic and statistical error of the experimentally determined Lamb-Dicke parameter leads to
an additional uncertainty of about 10 % of the determined energy4 . Including all these factors,
we estimate that we could achieve an energy uncertainty equal to 20% of the total energy. As a
result, the time dilation shift uncertainty due to the secular motion is not significantly reduced in
3 The Lamb-Dicke parameter is experimentally determined by measuring the Rabi rate ratio between the carrier and BSB transitions after ground state cooling. 4 There are many factors that may contribute this. For example, an ac Stark shift due to certain leakage may light shifts the transition center and contributes to an error of the Lamb-Dicke parameter.

57
comparison with the values we reported previously in Ref. [Chou 10a]. We need a new method to
reduce this uncertainty further, which will be described in the next section.
Figure 3.4: Thermal distribution fit to Rabi oscillations of the z mode of motion for a single trapped 25Mg+. Black dots are fitting residuals.
0 20 40 60 80 100
2
0
2
4
6
8
10 RSB
0 20 40 60 80 100
2
0
2
4
6
8
10 carrier
0 20 40 60 80 100 Time(us)
2
0
2
4
6
8
10 BSB
Photon Counts
n ̄ = 5.33 +/- 0.16
3.4 Sympathetic Sideband Cooling and Energy Estimation
In the previous section, we see the difficulties of characterizing the ions’ energy to our desired
accuracy at the Doppler cooling limit. A naive and straightforward thought is obvious,
How about cooling the ions below the Doppler cooling limit to reduce both the frequency shift and the uncertainty due to the time dilation of secular motion?
With the development of various cooling techniques [Diedrich 89, Monroe 95, Roos 00, Barrett 03,

58
Poulsen 12a, Poulsen 12b, Manfredi 12, Lin 13, Ejtemaee 16], operating an ion trap system below
the Doppler cooling limit, or even close to the motional ground state, is possible. However, operating
the 27Al+ optical clock near the motional ground state requires more than the routine procedures
used in other ion trap experiments.
The optical clock application requires all the motional modes to be cooled to the ground state
instead of just a few of them, which implies a more complicated experimental design. Because the
time dilation shift arises from the second order Doppler effect, which is proportional to the total
energy of ions, it will not help much by simply cooling a few motional modes. In our case, six secu
lar modes of motion need to be addressed. This requirement suggests that adiabatic cooling is not
favorable [Poulsen 12b, Manfredi 12], because it requires adiabatic changes of the pseudopotential.
Frequent changes of the pseudopotential are not only technically challenging and time-consuming
but likely to lead to the electric noise and thermal instability of rf resonator. Sisyphus laser cooling,
which has been demonstrated to cool Yb+ to near the motional ground state [Ejtemaee 16], will
not work because our choice of the coolant ion 25Mg+ does not have a suitable atomic structure
in the low magnetic field regime. The lack of a suitable atomic structure is also problematic for
electromagnetically-induced-transparency (EIT) laser cooling. Furthermore, EIT laser cooling in
three dimensions is not fully understood and certain problems need to be solved [Lechner 16]. Mo
reover, characterizing the ions’ energy at a desired accuracy, which requires a full understanding of
the cooling dynamics, is always a challenge no matter which cooling technique is chosen. Therefore
we have decided to use Raman sideband cooling to cool the 27Al+-25Mg+ two-ion pair because it
is widely used to cool 25Mg+ close to the motional ground state in our group and does not have
the problems that adiabatic cooling has. Moreover, the Raman sideband cooling has already been
implemented for the axial secular modes of motion for QLS.
As shown in Fig. 2.8, we employ two sets of Raman beams to cool secular motions along the
(x, y, z) directions efficiently. After a pulse addressing the RSB transition |↓, np〉 → |↓, np − ∆np〉,
∆np motional quanta are ideally removed from the ions’ motional mode p. Using sideband ther
mometry to determine the ions’ energy after sideband cooling encounters two main difficulties.

59
(1) The RSB transition probability almost vanishes.
(2) The outcome of the sideband cooling will not result in a thermal Fock state distribution.
While the first point may be overcome by increasing the data acquisition time, the second point
reduces in the validity of sideband thermometry [Barrett 03]. Hence we need another method to
estimate the energy after sideband cooling.
3.4.1 Numerical Model
To further understand the sideband cooling process, we developed a numerical model to
simulate the dynamics of the Fock state distribution during sideband cooling. The cooling is
modeled by a coherent RSB transition probability [Wineland 98], which is given by
P↑,n(t) = 1
2
[1 − e−γt cos (2Ωn,n+∆nt)] P↓,n+∆n(0), (3.14)
where ∆n is the order of the RSB pulse, Ωn,n+∆n is the Rabi rate for the transition | ↓, n + ∆n〉 ↔
|↑, n〉 given in Eq. (3.13), γ is a decoherence rate, and t is the pulse duration. The heating can be
described as an incoherent diffusion process and has an analytical form [Turchette 00b]. Following
Eq. (9) in Ref. [Turchette 00b], we can write down the population Pn′ in a Fock state n after heating
by ∆n as
P′
n= 1
1 + ∆n
n
∑
j=max{0,n−m}
( ∆n
1 + ∆n
)j (
1
1 + ∆n
√
1 − ∆n
 ̄na
)2n−2j
×
(
1 − n ̄a − ∆n
 ̄na(1 − ∆n)
)m−n+j ( m
n−j
)(n
j
)
Pm.
(3.15)
Here Pm denotes the population in a Fock state m before the heating, and n ̄a represents the
average occupation number of the thermal reservoir, which is of the order of 104-105 quanta at
room temperature. The net energy gained during the heating, ∆n, is given by
∆n =
∞
∑
n=0
nP ′
n−
∞
∑
m=0
mPm. (3.16)
In the simulation, we treat a RSB cooling pulse as a single time step. Each step consists
of processes as follows. At the beginning, a ∆pn-th order RSB cooling pulse with a duration t is

60
applied to a motional mode p. The population in |↑〉 after the pulse is given by
P↑(t) =
∞
∑
np=0
P↑,np(t), (3.17)
=
∞
∑
np=0
1
2
[1 − e−γt cos (2Ωnp,np+∆pn t)] P↓,np+∆pn (0). (3.18)
This equation does not include any heating and we need to deal with the heating during the RSB
pulse. This is achieved by using Eq. (3.15) to calculate the effects of heating of the population
P↑(t) and P↓(t) = 1 − P↑(t), respectively. In the next step, an ideal repumping process after a
RSB cooling pulse perfectly pumps all the population to |↓〉. At this moment, we have P↑ = 0
and P↓ = 1. Finally, we apply a heating to all the population before the next RSB cooling pulse
to account for heating mechanisms independent of atomic states. As a result, if we have enough
understanding of the heating mechanisms during the cooling and include them in our model, the
numerical simulation will give us an estimate of the energy.
3.4.2 Heating Mechanisms
During the sideband cooling, various heating mechanisms are involved. In general, there are
three different categories of heating.
(1) Heating due to the recoil from both the RSB cooling pulses and the repumping pulses.
(2) Heating due to a coherent process from |↑, n〉 to the |↓, (n + 1)〉 driven by the RSB cooling
pulses.
(3) Heating due to the background electric field noise.
The first heating mechanism is due to the incoherent scattering of the photons. The effects
of the recoil can be estimated theoretically [Itano 82, Wineland 87, Ozeri 07]. Given the resonant
Rabi frequency Ω0 and the detuning from the transition frequency δ, the energy gained for a specific
motional mode due to the recoil per pulse can be formulated as
∆Erol = P (Ω0, δ) × ħ2k02
2m (fi + ff ), (3.19)

61
where fi and ff are the projections of the unit vector of the absorption and the emission photon
momenta along the direction of the motional mode, and k0 is the momentum of the laser beam;
P (Ω0, δ) is the transition probability, which is approximately given by
P (Ω0, δ) ' 4Ω20
√4Ω20 + δ2 . (3.20)
Eq. (3.19) and Eq. (3.20) can be used to estimate the amount of the heating during the repumping
sequences. Note that the recoil energy in Eq. 3.19 will be distributed among secular modes of
motion and the change of the motional quanta of each mode is propotional to the square of its
Lamb-Dicke parameter, η2. The probability to scatter a photon during a Raman transition π pulse
for 25Mg+ has been theoretically studied and is given by [Ozeri 07]
P=
( πγ
ωf
) 2δ2 + (δ − ωf )2
|δ(δ − ωf )| , (3.21)
where ωf is the angular frequency between two fine structure levels, 2P1/2 and 2P3/2, and γ is the
natural linewidth of the excited states. In fact, the scattering probability in Eq. (3.21) can be
decomposed into two different mechanisms. The first is the Raman scattering, in which a change
of the atomic state occurs, while the second is the Rayleigh scattering, which is simply the elastic
scattering. The scattering rates are given by
PRaman =
( 2πγ
3
) ωf
|δ(δ − ωf )| , (3.22)
PRayleigh =
( πγ
ωf
) 2δ2 − 2δωf + ω2
f /3
|δ(δ − ωf )| . (3.23)
Experimentally the Raman scattering rate can be determined by measuring the transition proba
bility of |↓〉 ↔ |↑〉 due to the Raman lasers. However, the Rayleigh scattering rate is difficult to
measure directly. In our experiment, we have (δ/ωf ) ∼ 0.02 1 such that the Rayleigh scattering
rate is approximately 50% of the Raman scattering rate. For our experimental conditions, the
Raman scattering rate is calculated and experimentally confirmed to be < 10−4 quanta/μs for each
motional mode. Importantly both the Raman and the Rayleigh scattering rate are independent
of the frequency differences between the two Raman beams and all motional modes will heat each

62
time the Raman beams are applied to the ions. For this reason, although the heating rates due to
the Raman and Rayleigh scatterings are small, these two mechanisms contribute significantly to
the ions’ final energy.
For the repumping sequences, the recoil heating is determined experimentally using sideband
thermometry by preparing the 25Mg+ in the motional ground state of | ↓〉 and then repeatedly
applying a pulse sequence consisting of a carrier pulse followed by a repumping sequence. This
heating mechanism scales with η2 and is about 0.054 quanta per cycle for ωz ' 2π × 2.8 MHz with
a single 25Mg+ in the trap. Although this value is relatively large, the effective heating due to
repumping needs to be multiplied by the amount of population not in the motional ground state,
which becomes negligible at the end of the sideband cooling process. The comparison between the
experimentally measured values and the theoretical estimates of the repump heating rate is shown
in Fig. 3.5.
Figure 3.5: Heating due to a repumping sequence in a 25Mg+-27Al+ two-ion pair. Blue circle: measured values from a two-ion pair; magenta square: estimated value using the measured heating rate of a single 25Mg+; olive diamond: theoretical calculation. The measurements are performed at the drive frequency ΩT ' 2π × 76 MHz.
Ê
Ê
Ê
Ê
Ê
Ê
‡
‡
‡
‡
‡
‡
Ï
Ï
Ï
Ï
Ï
Ï
z-COM z-STR x-STR x-COM y-STR y-COM
0.01
0.02
0.03
Secluar Mode
Heating per r»epump cycle @quanta D
Ï Theory estimation
‡ Single 25Mg+ estimation
Ê Two ion experimental data
The second category of heating is due to a coherent process, illustrated in Fig. 3.6. If the
25Mg+ is pumped to the |↑〉 state either coherently or incoherently while a RSB cooling pulse is
being applied, the cooling pulse will coherently add quanta to ions’ motion. One of the channels

63
to the |↑〉 state results from the off-resonant coupling to the carrier transition when a RSB cooling
pulse is applied, which has been discussed in Ref. [Monroe 95]. When an ion is in the motional
ground state, the probability of motional excitation due to this heating channel scales as 1/ω2,
where ω is the secular mode frequency. The off-resonant transition probability can be reduced by
using either shaped pulses or longer pulse duration. Another channel to the |↑〉 state arises from
spontaneous emission from the Raman intermediate states. This process is absent when using the
optical transitions for sideband cooling, such as Ca+ and Yb+. The motional excitation probability
due to this channel depends on the cooling pulse duration and the frequency detuning of the Raman
beams, and scales as 1/η. In general, this heating channel can be reduced by increasing the Raman
laser detuning. One important thing is that mechanism (2) only heats the motional mode which
the cooling pulse is applied to and has very little effect on the other modes.
Figure 3.6: Illustration of a heating mechanism involving a coherent process. A RSB pulse removes a motional quanta coherently for the initial state |↓〉, but adds a quanta for the initial state |↑〉. Therefore, population in the |↑〉 state during the RSB cooling pulses, either due to the off-resonant coupling to the carrier transition (green dashed arrow) or due to incoherent spontaneous emission from the excited states (blue dashed arrow), results in heating.
Mg
Mg
Mg
Mg
RSB
n=0
n=1
n=2
n=0
n=1
n=2
RSB
Excited State

64
Modeling the heating due to mechanism (2) is not an easy task. From Eq. (3.13), we note that
the amount of heating depends on the actual Fock state distribution when a cooling pulse is applied.
Since we are primarily interested in the final energy after sideband cooling where n ̄ is small for
each mode, we use the value of the motional excitation rate from | ↓, n = 0〉 when a first-order RSB
is applied as the heating for each RSB cooling pulse to simplify our model. This value is obtained
by numerically solving the optical Bloch equation and only including states | ↓, n = 0〉, | ↓, n = 1〉,
and | ↑, n = 0〉 [Johansson 12, Johansson 13]. As an example, the results of the optical Bloch
equation simulation are depicted in Fig. 3.7 and Fig. 3.8 for one of our experimental conditions.
This simplification will affect the simulated sideband cooling time constant but not the simulated
cooling limit, so it is appropriate when the number of cooling pulses is sufficient such that the
population in the motional ground state dominates after sideband cooling.
The third mechanism is the heating due to electric field noise at the frequencies of motional
modes, which results from the trapping fields, called “technical noise”, or fluctuating potentials on
the electrode surfaces. To reduce the technical noise, two 5-MHz-bandwidth band-pass filters are
installed in series before the rf resonator to provide noise reduction in addition to the frequency
filtering due to the rf resonator. The rf resonator is shielded by a copper tube, which is mechanically
and electrically connected to the chamber to ensure a stable ground level. Although there is
no low-pass filter built inside the vacuum chamber for the dc electrodes, each dc electric line
passes through at least one ∼ 10 kHz low-pass filter before connecting to the vacuum feedthrough.
Although we do not claim that the technical noise is eliminated completely in our system, we
think we have reduced it significantly. The heating due to the fluctuating surface potentials is
usually called anomalous heating and its physical origin is still not known. Many theories were
proposed to try to explain the experimental observations [Gesley 85, Daniilidis 11, Safavi-Naini 11].
To date the previous experimental data suggest that the anomalous heating depends highly on
the materials and the surfaces of the electrode [Hite 12, Kim 17] and decreases dramatically with
increasing ion-to-electrode distance [Turchette 00a]. Choosing 250-μm ion-to-electrode distance is
a compromise between the anomalous heating and the required rf power for the desired transverse

65
Figure 3.7: Simulation of the motional excitation due to the off-resonant carrier transition followed by a first-order RSB cooling pulse. The trap drive frequency is ΩT ' 2π × 40 MHz. The red, green, and blue lines denote the population in vibrational levels of the 25Mg+ hyperfine ground states | ↓, n = 0〉, | ↑, n = 0〉, and | ↓, n = 1〉, respectively. The x axis is normalized to the π time of RSB transitions | ↓, n = 1〉 ↔ | ↑, n = 0〉.
0.0 0.2 0.4 0.6 0.8 1.0
10-6
10-5
10-4
10-3
10-2
10-1
100
x STR
0.0 0.2 0.4 0.6 0.8 1.0
10-6
10-5
10-4
10-3
10-2
10-1
100
x COM
0.0 0.2 0.4 0.6 0.8 1.0
10-6
10-5
10-4
10-3
10-2
10-1
100
y STR
0.0 0.2 0.4 0.6 0.8 1.0
10-6
10-5
10-4
10-3
10-2
10-1
100
y COM
0.0 0.2 0.4 0.6 0.8 1.0
10-6
10-5
10-4
10-3
10-2
10-1
100
z STR
0.0 0.2 0.4 0.6 0.8 1.0
10-6
10-5
10-4
10-3
10-2
10-1
100
z COM
Probability
Time [RSB π time]

66
Figure 3.8: Simulation of the motional excitation due to the spontaneous emission from the Raman intermediate states followed by a first-order RSB cooling pulse. The trap drive frequency is ΩT ' 2π × 76 MHz. The red, green, and blue lines denote the population in vibrational levels of the 25Mg+ hyperfine ground states | ↓, n = 0〉, | ↑, n = 0〉, and | ↓, n = 1〉, respectively. The x axis is normalized to the π time of RSB transitions | ↓, n = 1〉 ↔ | ↑, n = 0〉.
0.0 0.2 0.4 0.6 0.8 1.0
10-5
10-4
10-3
10-2
10-1
100
x STR
0.0 0.2 0.4 0.6 0.8 1.0
10-5
10-4
10-3
10-2
10-1
100
x COM
0.0 0.2 0.4 0.6 0.8 1.0
10-5
10-4
10-3
10-2
10-1
100
y STR
0.0 0.2 0.4 0.6 0.8 1.0
10-5
10-4
10-3
10-2
10-1
100
y COM
0.0 0.2 0.4 0.6 0.8 1.0
10-5
10-4
10-3
10-2
10-1
100
z STR
0.0 0.2 0.4 0.6 0.8 1.0
10-5
10-4
10-3
10-2
10-1
100
z COM
Probability
Time [RSB π time]

67
confinement, while using sputtered gold as the electrode surface is based upon previous experiences
and literature [Brownnutt 15]. Experimentally, we cannot distinguish the breakdown of the electric
field noise between technical noise and patch field noise. What we can measure is the contribution
from all types of ambient electric field noise at the frequencies of the secular modes of motion.
To measure the heating rate of ions’ motion due to electric field noise, we first prepare the ions
close to the motional ground state. Depending on the value of the heating rate, ions then experience
10 to 30 ms of “dark time” without any cooling, such that the ions’ motion can heat due to the
ambient electric field. After the dark time, we measure the average occupation number of the ions
in a specific motional mode and hence the heating rate utilizing sideband thermometry. Sideband
thermometry is suitable for measuring the heating rate because the ambient heating rapidly drives
the Fock state distribution towards thermal equilibrium [James 98, Dodonov 00].
3.4.3 Summary
With the amount of heating due to various mechanisms from either theoretical estimation
or experimental determination, we can start to model the evolution of the Fock state distribution
during the sideband cooling process. We assume the ion is initially in the |↓〉 state and that the ions’
motion is in a thermal distribution at the Doppler cooling limit, with a 20-30% energy uncertainty.
After a RSB cooling pulse, part of the population will end up in the |↑〉 state given by Eq. (3.14).
During the pulse, ions will heat primarily due to mechanism (2) in Sec. 3.4.2, which only affects
the Fock state distribution of the motional mode that the Raman sideband cooling pulse addresses.
After the cooling pulse, the population in the |↑〉 state will be repumped back to the |↓〉 state and
experience recoil heating due to the repumping pulse sequence. After a repumping sequence, the
ion is in the |↓〉 state. The heating from both the scattering of the Raman and Rayleigh processes,
and the electric field noise is then calculated based upon the illumination time of the Raman laser
pulses, and the total time spent during the cooling and the repumping sequence, respectively. After
a cooling pulse, the Rabi rates are re-calculated using Eq. (3.13) based upon the real-time Fock
state distribution to account for the Debye-Waller effect. In the simulation, we can trace the Fock

68
state distribution evolution throughout the sideband cooling pulse sequences. In addition, we can
use the numerical model to predict the performance of different pulse sequences to design a pulse
sequence based on speed and final temperature goals.
Although we want to include all the important physics in our numerical model to represent
what happens to the ions’ motion, there are still several assumptions and minor effects neglected
in the model.
• All the pulses in the cooling and the repumping sequences are perfectly on resonance and
applied to the ions for exactly the duration specified.
• The heating mechanism (2) in Sec. 3.4.2 is independent of the Fock states.
• The heating due to the scattering of the |↓〉 state in a repumping sequence is negligible.
• The sideband cooling starts from the theoretical Doppler cooling limit.
• The Fock state distribution truncates at a finite number, usually between 150 and 200. The
population above this state is assumed to be negligible and excluded from the simulation.
• The 25Mg+ ion stays within the space spanned by |↓〉, |↑〉, and |F = 3, mF = −2〉 during
the cooling process and there is no population leakage to any other energy levels.
• Higher order off-resonant transition probability, which scales as η2/ω2, is not considered.
• Cross-mode coupling is assumed to be small and not considered.
For our experiments, these assumptions have been verified either theoretically or experimen
tally to ensure they are valid. For other experimental conditions, some of them may need to be
re-considered and included in the simulation. The model is validated by comparing it with ex
perimental data at intermediate times during the cooling sequences. The results are presented in
Fig. 3.9 and show nice agreement between the model and the data.

69
Figure 3.9: Rabi oscillations of the first RSB (red, circle), the first BSB (blue, down triangle), and carrier (green, up triangle) Raman transitions of the z mode for a single 25Mg+ after different numbers of pulses in the sideband cooling sequence at ' 76 MHz drive frequency. Carrier Rabi oscillation curves are shifted by −0.5 for visibility. The cooling sequence consists of 17 second order RSB pulses followed by 8 first order RSB pulses to prepare the ion near the motional ground state. Hence o-
nly second order RSB pulses are applied in the first four panels. Solid lines are given by the numerical simulation without any free parameters. The simulated population evolution of the first ten Fock states during the cooling process is shown in the insets. There are 150 Fock states included in the simulation.

70
3.5 Cooling Pulse Optimization
Having a complete description of the sideband cooling not only helps characterize the motional
energy but benefits the design of an efficient cooling pulse sequence. In Eq. (3.10), we note that
the motional sideband Rabi rate depends on the Lamb-Dicke parameter η and the Fock state n.
For example, the sideband Rabi rates of η = 0.27 are depicted in Fig. 3.10. We can see that the
first-order RSB Rabi rate almost vanishes when n ' 50, which indicates that using only first-order
RSB cooling pulses is neither efficient nor practical to cool the population above n ' 50 to the
motional ground state [Wan 15]. Therefore, a sideband cooling pulse sequence utilizing higher-order
RSB cooling pulses must be used in order to cool the population in higher Fock states. Another
important thing we can see in Fig. 3.10 is that the Rabi rate of the first-order RSB transition is
larger than those of the higher order RSB transitions when n is close to zero. This indicates that
the first-order RSB pulses are always more efficient when the ions’ motion is close to the motional
ground state.
Figure 3.10: Motional sideband transition Rabi rates Ωn,n−∆n in units of the carrier transition Rabi rate when η = 0.27.
1st sideband
2nd sideband
3rd sideband
4th sideband
5th sideband
0 20 40 60 80 100
0.0
0.1
0.2
0.3
0.4
0.5
0.6
Initial Fock State n
Wn,n-D ê Wcarrier
In this section, I will describe two different optimization approaches to design an efficient
sideband cooling pulse sequence based upon our model. The first sequence was used when we

71
Table 3.2: Parameters of a 25Mg+-27Al+ two-ion pair at 76 MHz drive frequency.
x-COM x-STR y-COM y-STR z-COM z-STR Frequency (MHz) 6.2 5.4 7.2 6.5 2.7 4.8
Lamb-Dicke parameter 0.12 0.06 0.11 0.05 0.18 0.16
(25Mg+)
Time-dilation shift −0.21 −0.85 −0.18 −0.86 −0.12 −0.18
per quantum (10−18)
Occupation number 0.009 9 0.009 0 0.007 8 0.004 9 0.015 0.003 5
from simulation (quanta)
Occupation number from single-thermal distribution 0.008 7 0.005 9 0.009 9 0.006 9 0.006 6 0.004 4 fit (quanta)
Occupation number from double-thermal distribution 0.024 0.024 0.027 0.037 0.044 0.018 fit (quanta)
Occupation number 0-0.06 0-0.05 0-0.04 0-0.06 0-0.09 0-0.04
bounds (quantum)
operated our system at an rf drive frequency ΩT ' 2π × 76 MHz, while the second one, which is
applicable to more general trapping conditions, is used at ΩT ' 2π × 40 MHz.
3.5.1 Cooling Pulse Sequence at Drive Frequency ΩT ' 2π × 76 MHz
The conditions of the trap operated at the drive frequency ΩT ' 2π×76 MHz are summarized
in Table 3.2. The first-order RSB cooling pulses for the z-COM mode (Lamb-Dicke parameter
η = 0.18) become less efficient for the population at higher Fock states because of smaller Rabi
rates. Therefore, second order RSB pulses are implemented in the sideband cooling pulse sequence.
Our simulation shows that including higher order RSB pulses significantly reduces the population
in high Fock states.
The optimization process starts by choosing a fixed number of total cooling pulses, N , which
sets roughly the time spent for the sideband cooling. We do not perform a global optimization
of all the pulse durations and orders because of the numerous degrees of freedom, which makes it
numerically challenging. Instead we perform a pulse-by-pulse optimization. We limit the optimizer

72
to choose either a first or a second order RSB pulse based upon a figure of merit. In a global
optimization, the figure of merit is the final total energy, but in a pulse-by-pulse optimization this
is not a good choice because it tends to focus on the populations in the low-lying Fock states first,
which will be cooled by the subsequent pulses. The i-th cooling pulse is chosen from either the first
or the second order RSB pulse to minimize
〈np〉opt =
∞
∑
np=N −i+1
Pnpnp, (3.24)
which is the total motional energy (in units of ħωp, where ωp is the motional frequency of the secular
mode p) lying above the Fock state np = N − i after the i-th pulse is applied. The logic of choosing
this figure of merit is that the remaining (N − i) pulses ideally will cool all of the population in
the states from np = (N − i) to np = 1 to the ground state by choosing the proper duration of the
first-order RSB pulses.
This optimization process was performed for the z-COM mode only because this mode is
the most problematic due to its larger Lamb-Dicke parameter and more significant population in
higher Fock states after Doppler cooling. The optimization suggests a pulse sequence with multiple
second-order RSB pulses followed by a few first-order RSB pulses at the end. In fact, we find the
total energy after sideband cooling is not very sensitive to the exact number of the second-order
RSB pulses. Hence the cooling pulses we chose for the experiments were a compromise between
the optimization results and factors such as the cooling time spent and the ease of parameterizing
the cooling sequence in our experimental control system.
The resulting pulse sequences we used in our experiments are the following. For a single
25Mg+, we applied 17 second-order RSB pulses followed by 8 first-order RSB pulses on the axial
mode, and 25 first-order RSB pulses on the two transverse modes. For a 25Mg+-27Al+ ion pair, 15
second-order RSB pulses followed by 25 first-order pulses were applied on the axial modes, while
40 first-order RSB pulses were applied on the transverse modes. Cooling pulses were alternatingly
applied to motional modes in the descending order of secular frequencies. The simulated evolution
of the average occupation numbers in the six secular modes is plotted against the number of cooling

73
pulses applied in Fig 3.11. For the two axial modes, the different cooling rates occurring around
100 pulses in the figure corresponds to the change from second-order RSB pulses to first-order RSB
pulses. The frequency spectra of all six resolved motional modes is shown in Fig. 2.20.
Figure 3.11: The evolution of average occupation number,  ̄n, during the sideband cooling at ΩT ' 2π × 76 MHz. The trap conditions are given in Table 3.2.
0 50 100 150 200
Number of cooling pulses
10-3
10-2
10-1
100
101
Average occupation number
z Com
z STR
y COM
y STR
x COM
x STR
One important conclusion from this optimization process is that two pulse sequences may
result in very different Fock state distributions and energy, but yet give very similar results in
a typical sideband thermometry experiment. Using second-order sideband pulses was crucial for
achieving low energy in the axial modes with higher Lamb-Dicke parameters. While some more
improvement may be possible by performing a global optimization, the cooling pulse sequence has
provided us with a sufficient solution in terms of the cooling efficiency and the achievable energy
for the clock operation.

74
3.5.2 General Sideband Cooling Pulse Sequence
We have also operated our system at a lower drive frequency, ΩT ' 2π ×40 MHz to reduce the
excess micromotion5 . Due to the trap stability considerations, we fixed the Mathieu parameters
qi given in Eq. (2.5) as we changed the drive frequency. The trap parameters are summarized in
Table 3.3. The motional sideband Rabi rates of two secular modes are shown in Fig. 3.12. The
first thing we noticed is that there is more population in the higher Fock states after the Doppler
laser cooling due to the lower secular frequencies. In addition, the Lamb-Dicke parameters of all
secular modes increases significantly. Therefore, sideband cooling utilizing higher order RSB cooling
pulses becomes necessary for most modes. Although we can still apply the optimization procedure
discussed in the previous section on each secular modes, it becomes too complicated in terms of
the parameterization of the cooling sequence in our experimental control system. Therefore we are
interested in finding a simple method to design a cooling pulse sequence.
For the clock operation, what we actually care about is the energy that the ions have after
sideband cooling. If we apply a sideband cooling pulse sequence consisting of Np ideal RSB π
pulses to cool a Fock states distribution of the motional mode p in a descending order starting from
the Fock state n = Np, there exists a crude upper bound of the remaining energy after sideband
cooling,
E(Np) . ħ
∞
∑
np=Np+1
Pnpnp. (3.25)
If the pulse duration is chosen properly, the population in a Fock state n can always be cooled no
matter which order of RSB pulse is used. This indicates that the upper bound E(Np) is independent
of the order of RSB pulses we are using6 . Therefore, we end up with a rough energy upper bound
simply based upon the number of pulses applied. Moreover, since the z-COM mode has the largest
occupation number after the sideband cooling, the upper bound for the z-COM mode actually
applies for all the other modes. In such a case, the only parameter we need to specify for sideband
5 See Sec. 4.2 for details. 6 The zero-point energy is ignored here since it is just an energy offset and plays no role in the sideband cooling process.

75
Figure 3.12: Motional sideband transition Rabi rates Ωn,n−∆n in units of the carrier transition Rabi rates of the (a) z-COM mode and the (b) x-COM mode when the trap is operated at ΩT ' 2π × 40 MHz. Green bars represent the energy in each Fock state at the Doppler cooling final temperature. The red dashed line denotes the threshold Fock state Np such that the energy in the Fock states of the motional mode p above Np is less than 10% of the total energy.
0 50 100 150 200
10-5
10-4
10-3
10-2
10-1
100
En=n×Pn
Nz − COM = 57
(a)
0.0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
Sideband Rabi rate (Ωcarrier)
1st order 2nd order 3rd order 4th order 5th order
0 50 100 150 200
Fock state n
10-5
10-4
10-3
10-2
10-1
100
En=n×Pn
Nx − COM = 12
(b)
0.0
0.1
0.2
0.3
0.4
0.5
0.6
Sideband Rabi rate (Ωcarrier)
1st order 2nd order 3rd order 4th order 5th order

76
Table 3.3: Parameters of a 25Mg+-27Al+ two-ion pair at 40 MHz drive frequency.
x-COM x-STR y-COM y-STR z-COM z-STR Frequency (MHz) 3.3 2.85 3.95 3.5 1.5 2.5
Lamb-Dicke parameter 0.16 0.08 0.15 0.065 0.25 0.21
(25Mg+)
Time-dilation shift −0.11 −0.52 −0.09 −0.52 −0.07 −0.10
per quantum (10−18)
Occupation number 0.014 0.033 0.008 0 0.007 5 0.18 0.044
from simulation (quanta)
Occupation number from single-thermal distribution 0.022 0.009 4 0.021 0.005 9 0.060 0.063 fit (quanta)
Occupation number from double-thermal distribution 0.069 0.13 0.028 0.005 9 0.98 0.65 fit (quanta)
Occupation number 0-0.10 0-0.16 0-0.04 0-0.01 0-1.31 0-0.78
bounds (quantum)
cooling the 25Mg+-27Al+ ion pair is just one: the ratio of the “crude” remaining energy E(Np) and
the energy after Doppler laser cooling in the z-COM mode. This ratio further sets the number of
pulses we should apply on each of secular modes. For our experiment, we usually set this ratio
to be 0.1 for the 25Mg+-27Al+ two-ion pair, which guarantees at least 90% of the total energy of
ions has been removed during the sideband cooling process. This ratio corresponds to 57 sideband
cooling pulses on each of the motional modes.
Although this crude upper bound always holds independent of the orders of the sideband
pulses, the final achievable energy and the cooling efficiency do depend on the order of sideband
cooling pulses. Again, we only perform a pulse-by-pulse optimization instead of a global optimi
zation because of the numerical difficulties. Suppose we want to apply a RSB π pulse to cool the
population Pnp in a specific Fock state np of the secular mode p, the amount of energy change per

77
Figure 3.13: The evolution of average occupation number,  ̄n, during the sideband cooling at ΩT ' 2π × 40 MHz. The trap conditions are given in Table 3.3.
0 50 100 150 200 250 300 350
Number of cooling pulses
10-3
10-2
10-1
100
101
Average occupation number
z Com
z STR
y COM
y STR
x COM
x STR
unit time for the population in the Fock state np corresponds to
dE(np)
dt = 2ħ∆np Ωnp,n−∆np
π Pnp, (3.26)
where Ωnp,np−∆np is the ∆np-th order RSB Rabi rate given in Eq. (3.10). For a sequence consisting
of Np RSB pulses, the optimization of the i-th pulse is performed by choosing the order of the
RSB transitions to maximize the energy change per unit time in the Fock state np = (Np − i + 1),
dE(Np −i+1)/dt, for a given Lamb-Dicke parameter ηp. Currently our experimental control system
is programmed in such a way that the computer will perform the optimization processes on all six
motional modes and automatically choose the pulse durations and frequencies with given Np and
ηp. The simulated evolution of the average occupation number of six secular modes during this
cooling pulse sequence is shown in Fig. 3.13. The pulse sequence used to cool 25Mg+-27Al+ at
ΩT ' 2π × 40 MHz is summarized in Table 3.4. In the experiment, the pulses were alternatingly

78
applied to motional modes in a descending order of secular frequencies. Typically, this cooling
sequence took about 10 ms to cool all six modes close to the motional ground state.
Table 3.4: Number of sideband cooling pulses of each sideband order for the drive frequency ΩT ' 2π × 40 MHz.
Sideband order 3 2 1 x-COM 0 27 30 x-STR 0 0 57 y-COM 0 23 34 y-STR 0 0 57 z-COM 19 26 12 z-STR 1 39 17
3.6 Clock Frequency Shifts and Uncertainties due to Secular Motion
3.6.1 Determination of the Energy after Sideband Cooling
The main goal of the development of the numerical model is to determine the ions’ energy
after sideband cooling to a desired accuracy. As an example, the simulated Fock state distribution
of the z-COM mode after sideband cooling at the 76 MHz drive frequency is shown in Fig. 3.14.
Besides the thermal-like distribution for the Fock states n < 3, we note that there is a plateau
probability distribution for Fock states n & 5 appearing in our simulation. Although the sum of
the probability in the plateau distribution is typically too small to be observed in the experiments,
our simulation indicates that it usually contributes more than 90% of the total energy. For the
z-COM mode at ΩT ' 2π × 76 MHz, about 95% of the total energy is in the plateau distribution
in the higher Fock states.
To include the energy contribution from this “hidden” population, we fit the simulated Fock
state distribution to a linear combination of two thermal distributions to extract the mean occu
pation number  ̄nh that characterizes the energy of the plateau distribution. Given  ̄nh as a fixed
parameter, we then fit the RSB Rabi oscillation data shown in Fig. 3.16 to a double thermal

79
distribution. The probability in a specific Fock state P (n) is expressed as
P (n) = αPth(n|n ̄l) + (1 − α)Pth(n|n ̄h), (3.27)
where n ̄h is derived from the simulation and  ̄nl is a fit parameter that characterizes the energy in
the lower Fock states. The probability Pth(n|n ̄) denotes the population in the Fock state |n〉 of
the thermal distribution with the average occupation number  ̄n, which is given in Eq. (3.4), and α
represents the weight between the two thermal distributions.
The effect of off-resonant carrier transitions is also considered in the analysis. The off-resonant
transitions cause a small amplitude (< 0.5%), high frequency (& 1 MHz) oscillation in addition to
the residual RSB Rabi oscillation. Because the residual RSB and off-resonant carrier transitions
have very different frequencies, the transition probabilities at any given pulse duration can be
approximated by the sum of these two effects. Unfortunately, we do not have the required timing
resolution in our experimental control system to resolve the off-resonant transitions. To include
this effect in our energy estimate, we first record the laser power as a function of time for the
experimental pulses and numerically calculate the off-resonant carrier transition amplitudes. Then
we assume the fast oscillations due to the off-resonant transitions cause an offset towards higher
transition probability and scatter of the experimental data. Therefore, we add this additional offset
to our fitting model and represent the scatter as the red shaded region as shown in Fig. 3.16. For
the system operating at 76 MHz drive frequency, this effect is significant for the data of the z-COM
RSB transition but not the other motional modes. This is due to the adiabaticity arising from
the relatively long turn-on and turn-off time of the laser pulses (∼ 100 ns) in comparison with the
oscillation frequencies.
In Fig. 3.16, we also show mean occupation numbers from both the fit to the single and
double thermal distribution models and the simulation. In general the least-squared fit to the
Rabi oscillation curves using the double thermal distribution model give a factor of two to three
smaller in χ2 in comparison with the single thermal distribution model. Moreover the double
thermal distribution fit tends to give a higher estimate of the ions’ energy. Therefore, the 95%

80
Figure 3.14: The simulated Fock state distribution in z-COM mode after sideband cooling at ΩT ' 2π × 76 MHz. The red line represents a fit to a double-thermal distribution with mean occupation numbers 0.004 and 11, and weights 0.99 and 0.01.
0 10 20 30 40 50
Fock state n
10-9
10-8
10-7
10-6
10-5
10-4
10-3
10-2
10-1
100
Probability
z Com
confidence interval of the fit to a double thermal distribution is used as the estimate of the energy
upper bound. To examine the effects of both the non-linearity of the fitting model and the non
Gaussian distribution of the experimental data, we performed a bootstrapping test by re-sampling
residuals [DiCiccio 96]. The results were consistent with that from the least-squares fit.
The energy determination was performed at two different drive frequencies, ' 40 and ' 76
MHz. The heating contributions are summarized in Table 3.5 and Table 3.6. The fit to the RSB
transitions of the residual motional excitation are plotted in Fig. 3.15 and Fig. 3.16. The results
are summarized in Table 3.3 and Table 3.2.
3.6.2 Time-dilation Shift due to Secular Motion
The time-dilation shift per motional quantum for the two rf drive frequencies are shown
in Table 3.3 and Table 3.2. Note that the shifts include the contributions from the IMM. As
discussed in Sec. 2.8, for the sideband cooled optical clock utilizing the protocol B, there is no
additional cooling light shift during the clock interrogation. As a result, we can completely elimi
nate the associated light shift existing in the previous 27Al+ optical clocks that used the protocol

81
Figure 3.15: Red-sideband Rabi oscillations on the |↓〉 → |↑〉 transition of 25Mg+ for the six 25Mg+27Al+ motional modes after sideband cooling at ΩT ' 2π × 40 MHz. The blue data points are the average of experimental data and the error bars are the standard deviation of the mean. Solid line: double-thermal distribution fit; dotted line: single-thermal distribution fit; dashed line: simulation. The red shaded regions represent the range of the off-resonant carrier transitions. The insets represent t-
he average occupation numbers from fits and the simulation. Diamond: simulation; circle: single thermal distribution fit; square: double thermal distribution fit. The green error bars represent the experimentally determined uncertainties of average occupation numbers after sideband cooling. The upper bound of energy is given by the 95% confidence interval of the doublethermal distribution fit.
0 5 10 15 20
0.00
0.02
0.04
0.06
0.08
0.10
z-COM
0 5 10 15 20 25
0.00
0.02
0.04
0.06
0.08
0.10
z-STR
0 5 10 15 20 25 30 35 40
0.00
0.02
0.04
0.06
0.08
0.10
y-COM
Transition Probability
0 10 20 30 40 50 60 70 80 90
0.00
0.02
0.04
0.06
0.08
0.10
y-STR
0 5 10 15 20 25 30 35
Pulse Duration ( μs )
0.00
0.02
0.04
0.06
0.08
0.10
x-COM
0 10 20 30 40 50 60 70
Pulse Duration ( μs )
0.00
0.02
0.04
0.06
0.08
0.10
x-STR
0
1.31
n ̄ 0
0.78
n ̄
0
0.04
n ̄ 0
0.01
n ̄
0
0.10
n ̄ 0
0.16
n ̄

82
Figure 3.16: Red-sideband Rabi oscillations on the | ↓〉 → | ↑〉 transition of 25Mg+ for the six 25Mg+-27Al+ motional modes after sideband cooling at ΩT ' 2π × 76 MHz. The blue data points are the average of about 50 000 experiments and the error bars are the standard deviation of the mean. Solid line: double-thermal distribution fit; dotted line: single-thermal distribution fit; dashed line: simulation. The red shaded regions represents the range of the off-resonant carrier transitions of the doubl-
e-thermal distribution fit, which is significant for the z-COM mode, but not the other motional modes. The insets represent the average occupation numbers from fits and the simulation. Diamond: simulation; circle: single thermal distribution fit; square: double thermal distribution fit. Circles overlay diamonds to within less than the size of the symbol. The green error bars represent the experimentally determined uncertainties of average occupation numbers after sideband cooling. The upper bound -
of energy is given by the 95% confidence interval of the double-thermal distribution fit.

83
Table 3.5: Summary of heating rates due to different mechanisms considered in the simulation at 40 MHz drive frequency.
x-COM x-STR y-COM y-STR z-COM z-STR
Repumping sequence 0.037 0.015 0.009 0.002 0.082 0.031
(quanta/cycle)
Raman scattering 4.6 × 10−5 1.2 × 10−5 4.1 × 10−5 8.7 × 10−6 5.8 × 10−5 3.9 × 10−5
(quanta/μs)
Rayleigh scattering 2.3 × 10−5 6.0 × 10−6 2.1 × 10−5 4.4 × 10−6 2.9 × 10−5 2.0 × 10−5
(quanta/μs)
Off-resonant coupling 7.4 × 10−4 1.3 × 10−3 4.8 × 10−4 6.0 × 10−4 8.8 × 10−3 2.0 × 10−3
(quanta/pulse)
Spontaneous decay and 1.1 × 10−3 2.3 × 10−3 1.3 × 10−3 2.8 × 10−3 7.4 × 10−4 9.3 × 10−4
RSB (quanta/pulse)
Electric field 21.0 ± 0.4 4.4 ± 0.5 19.9 ± 0.4 4.5 ± 0.2 26.5 ± 2.7 1.9 ± 0.2
noise (quanta/s)
Table 3.6: Summary of heating rates due to different mechanisms considered in the simulation at 76 MHz drive frequency.
x-COM x-STR y-COM y-STR z-COM z-STR
Repumping sequence 0.015 0.004 0.012 0.002 0.027 0.017
(quanta/cycle)
Raman scattering 4.6 × 10−5 1.2 × 10−5 4.1 × 10−5 8.7 × 10−6 5.8 × 10−5 3.9 × 10−5
(quanta/μs)
Rayleigh scattering 2.3 × 10−5 6.0 × 10−6 2.1 × 10−5 4.4 × 10−6 2.9 × 10−5 2.0 × 10−5
(quanta/μs)
Off-resonant coupling 3.9 × 10−4 3.6 × 10−4 2.1 × 10−4 3.3 × 10−4 1.6 × 10−3 6.5 × 10−4
(quanta/pulse)
Spontaneous decay and 1.4 × 10−3 2.6 × 10−3 1.5 × 10−3 3.1 × 10−3 7.5 × 10−4 9.1 × 10−4
RSB (quanta/pulse)
Electric field 11.95 ± 0.64 1.94 ± 0.08 9.47 ± 1.00 1.96 ± 0.18 9.12 ± 0.32 0.34 ± 0.02
noise (quanta/s)

84
A [Rosenband 08, Chou 10a]. After preparing ions in the 3D motional ground state following the
protocol B, the average occupation number of the ions in a specific motional mode p during a clock
interrogation of duration ti can be expressed as
〈np(ti)〉 = n ̄p,0 + 1
2  ̇ ̄npti, (3.28)
where  ̄np,0 is the energy after sideband cooling given in Table 3.3 and Table 3.2, and n ̇ ̄p is the
heating rate due to ambient electric field noise given in Table 3.5 and Table 3.6. Angle brackets
denote a time-average over the clock interrogation time. The upper bound on the fractional time
dilation shift is estimated as the ti
2
(
n ̇ ̄p + 2σ  ̇n ̄p
)
value added with the upper bound of n ̄p,0. Here
σ  ̇n ̄p is standard deviation of the mean of the heating rate measurements given in Table 3.5 and
Table 3.6. For the lower bound, we take the mode p to be initially in its ground state and use
ti 2
(
n ̇ ̄p − 2σ  ̇n ̄p
)
as the contribution from the heating. The bounds of the time-dilation shift for a
specific mode p are given as
( δf
f
)upper(lower)
p
=
( δνp
f
)
〈np(ti)upper(lower)〉
=
( δνp
f
)(
nupper(lower)
p,0 + ti
2 ( ̄n ̇ p ± 2σ  ̇n ̄p
)
,
(3.29)
where δνp denotes the secular motion time-dilation shift per motional quantum. Finally, we conser
vatively assume the shifts in six different secular modes are correlated, which should be the worst
case, and use the average of the upper bound and lower bound as the estimate for the time-dilation
shift.
( δf
f
)upper(lower)
secular
=
∑
p
( δf
f
)upper(lower)
p
, (3.30)
( δf
f
)
secular
=
( δf f
)upper
secular
+
( δf f
)lower
secular
2 . (3.31)
The time-dilation shifts and uncertainties due to the secular motion of the protocol A and the
protocol B are plotted together in Fig. 3.17. More than an order of magnitude reductions in
both the shift and the uncertainty are achieved at both rf drive frequencies at our typical clcok
interrogation time.

85
Figure 3.17: Comparison of the secular motion time-dilation shifts in two different clock operation protocols. The blue line, yellow line, and the red line represent the fractional frequency shifts, while the shaded regions are uncertainties. For a typical clock interrogation time of 150 ms, the secular motion time-dilation shift of a sideband cooled optical clock is −1.7+0.3
−0.2 × 10−18 at ΩT ' 2π × 40
MHz; −(1.9 ± 0.1) × 10−18 at ΩT ' 2π × 76 MHz. The uncertainty of a Doppler cooled optical clock is the sum of the secular motion time-dilation shift, −(16.3 ± 5.0)−18, and the ac Stark shift from the Doppler cooling light, −(3.6 ± 1.5) × 10−18 [Chou 10a].
0.0 0.5 1.0 1.5 2.0 2.5 3.0 Clock Interrogation Time [s]
-25
-20
-15
-10
-5
0
Fractional Frequency Shift [10−18]
Sideband cooled optical clock (ΩT ' 2π × 40 MHz)
Sideband cooled optical clock (ΩT ' 2π × 76 MHz)
Typical clock interrogation time
Doppler cooled optical clock

Chapter 4
Other Systematic Effects and Concerns
In the previous chapter, I discussed how we implemented a new clock protocol to reduce
both the secular motion time-dilation shift and its uncertainty to be below the mid-10−19 level. In
this chapter I will describe several other systematic effects that influence the 27Al+ optical clock
operation and certain considerations for running the clock.
4.1 Linear Doppler Shift
In addition to the quadratic Doppler shift discussed in the previous chapter, atoms with a
nonzero velocity in the lab frame experience a linear Doppler shift, which is given by
δf
f = ~v · kˆL
c , (4.1)
where ~v is the velocity of the atom, and kˆL is the unit wavevector of the probe laser. However,
with the typical secular frequencies of a few MHz and rf drive frequencies of a few tens of MHz,
the ion’s secular motion and micromotion do not shift the observed frequency but instead results
in frequency sidebands with Rabi rates given in Eq. (3.10). In such a case, the resulting systematic
frequency shift is due to the line-pulling effect caused by the motional sidebands. Because the
transform-limited width of the interrogation pulse is much smaller than the lowest characteristic
frequency of ion’s motion and the sideband Rabi rates are reduced by the Debye-Waller effect, the
clock frequency shift due to the line pulling effects is estimated to be 1 μHz and hence negligible1

87
.
Another source of linear Doppler shift arises from the recoil during the interrogation. However
the trapped ion is immune to this effect because of the M ̈ossbauer effect [Dicke 53, Bergquist 87,
Rosenband 08].
Therefore, we only need to consider the ion’s motion with a characteristic time scale similar to
or larger than the interrogation pulse duration. Possible sources of motion are long-term variations
of the trapping potential, and thermal drifts of the uncompensated laser beam path and the trap
structure. The linear Doppler shift due to these slow drifts can be suppressed by probing the atomic
transition alternately using counterpropagating beams, which averages the frequency shift to zero
if the drifts are not correlated with the probe direction [Rosenband 08]. This will be characterized
on the fly when the clock is operating.
4.2 Excess Micromotion Shift
4.2.1 Introduction
One of the main contributions to the systematic uncertainties in all the ion-based optical
frequency standards is the time-dilation shift due to EMM [Rosenband 08, Chou 10a, Barwood 14,
Huntemann 16]. EMM arises from the imperfections of the trapping potential, which have been
studied thoroughly in the literature [Berkeland 98]. Among all proposed ion species for optical
frequency standards, 27Al+ is among the most sensitive to these imperfections due to its smaller
mass. There are two types of imperfections that lead to EMM. The first type of imperfections is an
additional dc electric field, which might result from charges on the surfaces of dielectric materials.
This dc electric field will push ions away from the rf pseudopotential minimum such that ions
experiences additional micromotion. This type of EMM can be compensated routinely by applying
suitable dc voltages to the trap electrodes; its magnitude is usually limited by how well we can
measure and compensate it. I will discuss how we measure and compensate EMM in Sec. 4.2.2. The
1 This assumes the ion is in the motional ground state, which is a worst case that leads to the largest frequency shift.

88
second type of EMM is caused by phase imbalances between the rf electrodes, which usually result
from imperfections of the trap fabrication, including the geometrical asymmetry and the impedance
mismatching between electrodes. This type of EMM is difficult to reduce externally once the trap
is made and hence sets the minimum of EMM of a Paul trap. However, it is possible to reduce
EMM due to phase imbalances by adjusting the trap drive frequencies. This was demonstrated in
our system and will be discussed in Sec. 4.2.3.
4.2.2 Characterization and Compensation
Many experimental techniques have been developed to measure and to compensate EMM to
a high precision [Berkeland 98, Chuah 13, Keller 15, Gloger 15]. In our experiments, the sideband
ratio method was used to characterize the EMM. To compensate the EMM due to stray electric
fields, two dc compensation electrodes as shown in Fig. 4.1, fabricated on the trap wafer, and the
endcap electrodes provide the necessary degrees of freedom in three orthogonal directions. The ions
are pushed around the trap center by these electrodes to null out the dc fields accounting for the
EMM. The initial compensation of EMM was performed in two ways. The EMM in the horizontal
plane was compensated by adjusting the dc compensation voltages such that the ion position does
not change when the trap rf potential amplitude is varied; the EMM in the vertical direction
was compensated by minimizing the EMM sideband of the 27Mg+ transition |↓〉 ↔ |2P3/2, F =
3, mF = −3〉 using the BR-v beam tuned to be on resonance. The ultimate EMM compensation
and determination were performed by measuring the Rabi rate of the EMM sidebands in both the
25Mg+ Raman transition |↓〉 ↔ |↑〉 and the 27Al+ transitions |1S0〉 ↔ |3P1〉, which are both in the
resolved sideband regime.
As shown in Eq. (2.1) and Eq. (2.6), the frequency spectrum of the ion’s motion in an ideal
linear Paul trap consists of frequency components at ωi and (ωi ± ΩT ), which give rise to motional
sidebands on the transitions at these frequencies. There is no pure tone at the rf drive frequency
ΩT . However, when the ion is exposed to an EMM field, the component of the ion’s motion at the

89
Figure 4.1: (a) Electrodes fabricated on the wheel trap wafer used throughout this thesis. Note that diagonal electrodes are hard-wired together on the wafer. Voltages V1 and V2 represent the actual rf potential applied to the ion, while V0 denote the rf potential before splitting the lead into two. (b) A simple circuit model demonstrates the asymmetry between two diagonal electrodes in our ion trap. The rf phase imbalance can be explained by introducing the different capacitance to the ground of -
different rf electrodes.
dc compensation electrodes
V0
V1 V2
V0 Ctrap
V2
V1
C2
C1
+
(a) (b)
rf electrodes
R
R
frequency ΩT is given by
m~v ̇EMM = QE~EMM cos (ΩT t), (4.2)
〈v2
EMM〉 = 1
2
( QEEMM mΩT
)2
, (4.3)
where ~vEMM is the velocity of the ion caused by the EMM field E~EMM cos(ΩT t). This leads to a
phase modulation of the probe laser field. The atomic transition spectrum I(ω) is approximately
given by [Keller 15]
I(ω) ' J0(β)δ(ω − ωL) + J1(β) (δ(ω − ωL + ΩT ) + δ(ω − ωL − ΩT )) , (4.4)
where δ is the Dirac delta function, ωL is the probe laser frequency, and Ji is the i-th order Bessel
function of the first kind. Here, β = ~kL · ~vEMM /ΩT denotes the modulation index resulting from
the EMM, where ~kL is the wavevector of the probe laser. The ratio of the Rabi rates of the carrier
and the EMM sideband transitions is approximated by
Ω(±1)
EMM
Ω(0) ' β
2 , (4.5)
where Ω(±1)
EMM and Ω(0) represent Rabi rates of the first-order EMM sideband and carrier transitions,

90
respectively. Experimentally the amount of EMM is determined by measuring the ratio of the π
pulse duration of the carrier and EMM motional sideband transitions,
ξ = t(0)
π t(±1)
π,EM M
= Ω(±1)
EMM
Ω(0) . (4.6)
The resulting fractional frequency shift due to the time dilation effect in a 27Al+ optical clock due
to EEMM is given by
( δf
f
)
EMM
= − 〈v2
EMM 〉
2c2 = −
( QEEMM 2mAlcΩT
)2
= − Ω2
T ξ2 k2
Lc2
( mprobe
mAl
)2
, and (4.7)
EEMM =
( 2mprobeΩ2
T
kLQ
)
ξ, (4.8)
where mprobe denotes the mass of the ion that is used to measure the EMM. One thing to emphasize
here is that EEMM in Eq. 4.8 includes effects from both the stray dc electric fields and the phase
imbalance, while adjusting the dc fields to minimize ξ can only compensate the EMM due to the
stray dc fields.
4.2.3 Residual EMM due to Phase Imbalances
The magnitude of the time dilation shift due to EMM resulting from the phase imbalance is
given in Eq. 19 in Ref. [Berkeland 98], which scales as
( δf
f
)phase
EMM
∝ q2 δφ2 Ω2
T , (4.9)
where δφ denotes the rf phase difference between electrodes and q is the Mathieu parameter. If we
keep the Mathieu parameter q the same when we adjust the rf drive frequency ΩT to maintain the
stability of the ions’ motion, the time-dilation shift has a relation as
( δf
f
)phase
EMM
∝ δφ2 Ω2
T , (4.10)
and the secular frequencies scale as
ωi ∝ ΩT . (4.11)
Therefore, without changing the trap design, we can reduce the EMM time dilation shift by lowe
ring the rf drive frequency ΩT . The drawback is the smaller secular frequencies, which leads to

91
longer cooling times. In addition, smaller secular frequencies imply larger Lamb-Dicke parameters
which make the sideband cooling more difficult as discussed in Sec. 3.5 [Wan 15, Chen 17]. Moreo
ver the heating rate also increases when the secular frequencies decreases [Gesley 85, Wineland 98,
Daniilidis 11, Safavi-Naini 11, Hite 12]. Fortunately, our understanding of sideband cooling presen
ted in Chapter 3 resolves the above issues and makes it possible to operate the clock at the lower
trap drive frequency.
In our ion trap, the phase difference δφ can be explained by the different capacitive coupling
between each rf electrode and ground, which is presented in Fig. 4.1. The circuit model in Fig. 4.1
leads to a scaling of δφ as
δφ ∝ ΩT (C1 − C2) ∝ ΩT . (4.12)
Substituting Eq. 4.12 into Eq. 4.10, we obtain
( δf
f
)phase
EMM
∝ Ω4
T . (4.13)
In Fig. 4.2, the measured and predicted total time-dilation shift due to EMM is plotted against
ΩT in comparison with the time-dilation shift due to the secular motion in a sideband cooled clock
given in Chapter 3. We can see that our model agrees with the experimental observation nicely.
4.2.4 Evaluation of the Time Dilation Shift due to EMM
In previous sections, we discussed how we measure and compensate the EMM in our system.
However in a realistic linear Paul trap, there is one more issue that needs to be addressed: the EMM
along the z direction, denoted as a-EMM. In an ideal linear Paul trap, the a-EMM does not exist.
However, due to the manufacturing imperfections and the finite length of the trap, a non-negligible
a-EMM typically exists. The a-EMM was mapped out with the stimulated Raman transition of
a single 25Mg+ using the combination of the RR and the BR-a beams. The result is depicted in
Fig. 4.3. When we operate the trap at ΩT ' 2π × 40 MHz, the typical axial frequency is about
1.5 MHz and the distance between the 27Mg+ and the 27Al+ is about 5 μm. Therefore, we can
operate the clock in two conditions. In the first condition, the 27Al+ is positioned at the minimum

92
Figure 4.2: Time dilation shift due to EMM and secular motion with respect to the drive frequency ΩT /2π. Blue dashed line: estimated time dilation shift due to EMM when keeping the Mathieu parameter qi constant. Red square: measured time dilation shift due to EMM. Green diamond: measured time dilation shift due to the secular motion given in Chapter 3.
■
■
■
◆
◆
20 30 40 50 60 70 80
0.5
1
5
10
50
rf drive frequency ΩT/2π [MHz]
Time dilation shift [-10-18]
of the time dilation shift due to the a-EMM, which corresponds to a shift (δf /f ) ' −8.2 × 10−20.
In this experimental condition, the 27Al+ will move by 5 μm, corresponding to a time dilation
shift (δf /f ) ' −6.0 × 10−18, when the 25Mg+-27Al+ two-ion pair reorders due to background gas
collisions. We can either post-select the experimental data in the right ion order or add an additional
uncertainty to account for the frequency shift when the 27Al+ is in the wrong position [Chou 10a].
In the second condition, the two ions are equally spaced from the minimum of a-EMM such that
the reordering of the two-ion pair does not change the time dilation shift due to the a-EMM. In
this condition, the time dilation shift is (δf /f ) ' −2.0 × 10−18 and deterministic ion-order control
is not necessary. However, the down side of this operation is that we need to calibrate all of the
systematic effects at both positions, which might be tedious experimentally. We prefer to operate
our system while the 27Al+ is held at the minimum of the a-EMM.
The EMM perpendicular to the trap axis in the horizontal plane (h-EMM) can also be
evaluated by driving the Raman transition of a single 25Mg+ with the RR and the BR-t beams.

93
Figure 4.3: The time dilation shift due to the a-EMM. The blue points are experimental data and the red line is a fit to a second-order polynomial.
72 74 76 78 80
0.1
0.5
1
5
Axial Position (μm)
Fractional time dilation shift [-10-18]
For the last direction, unfortunately the differential wavevector of the RR and the BR-v beams is
about 36.5◦ with respect to the vertical and cannot be easily used to measure the vertical EMM
(v-EMM). However it still provides us with sufficient information in the vertical direction for the
initial check before doing the 27Al+ spectroscopy. The v-EMM and h-EMM were both measured
using a single 25Mg+ when we mapped out the a-EMM. We do not see a strong dependence along
the trap axis in either v-EMM or h-EMM.
The final evaluation of the time-dilation shift due to the EMM is performed on the |1S0〉 ↔
|3P1〉 transitions of the 27Al+. Similar to the evaluation done with 25Mg+, the ratio between the
π times of the carrier and the EMM motional sideband is used to estimate the strength of the
EMM field along the direction of the laser beam. Three 3P1 laser beams shown in Fig. 2.8 and
Fig. 2.9 probe the EMM in three nearly mutually orthogonal directions. The σ+/− transition
|1S0, F = 5/2, mF = ±5/2〉 ↔ |3P1, F = 7/2 mF = ±7/2〉 is used for the laser beam through the
RR/BR-co port, while the π transition |1S0, F = 5/2, mF = ±5/2〉 ↔ |3P1, F = 7/2 mF = ±5/2〉
is used for the beams through the BR-a port and vertical port. The capability of EMM compen

94
sation using the transition |1S0〉 ↔ |3P1〉 has a fundamental limit imposed by the excited state
lifetime τ (3P1) ' 300 μs. Note that we are not able to decompose the contribution of the a-EMM
and h-EMM when using the 3P1 laser due to the limited optical access available in our system.
However, this will not affect the characterization of the total EMM as long as the ion’s motion is
probed in three orthogonal directions. Unlike the Raman transitions in 25Mg+, the vertical 3P1
laser beam is only 10◦ with respect to the vertical, which contributes ∼ 3 % of the systematic
effect in the determination of the time-dilation shift due to the v-EMM. For the wheel trap version
C, which is currently used in the 25Mg+-27Al+ system, we found that the v-EMM dominates the
EMM. This is caused by the unbalanced coupling of the micromotion compensation electrode to
the rf electrodes. This leads to a phase difference between rf electrodes and hence an EMM that
cannot be compensated by dc fields [Berkeland 98]. A typical measurements of the time-dilation
shift due to the EMM using the 3P1 transitions at ΩT ' 2π × 40 MHz is summarized in Table 4.1,
which gives the fractional frequency shift due to the EEMM δf
f ' −3.5 × 10−18.
In the previous 27Al+ optical clocks, the time dilation shift uncertainty due to the EMM
was conservatively estimated to be the sum of the frequency shifts in three directions in quadra
ture [Chou 10a]. This assumption was made to account for the long-term drift of the EMM, possibly
due to the variation of built-up charge resulting from the loading process and the rf power drift
arising from the thermal effects. However, in our new trap system, we see much smaller drifts of the
EMM, which may benefit from the ablation loading, elimination of the dielectric material exposed
to the ion, the active rf power stabilization, and the stable phase differences between electrodes.
A long-term characterization of the EMM is underway. If we can constrain the uncertainty to be
around 30 % of the shift, we can push the time dilation shift uncertainty due to the EMM below
1.0 × 10−18.
4.3 Blackbody Radiation Shift
Characterizing the frequency shift due to the background blackbody radiation (BBR) is a
main challenge among most optical frequency standards. This effect was first proposed and theo

95
Table 4.1: The field strength that causes EMM and the resulting time dilation shift measured by the 3P1 transitions.
Port RR/BR-co BR-a vertical EEMM [V/m] 11.65 26.08 75.47 Fractional time dilation shift −7.4 × 10−20 −3.7 × 10−19 −3.1 × 10−18
retically studied for atomic frequency standards about four decades ago [Gallagher 79, Itano 81a].
The BBR shift results from off-resonant coupling of the BBR to atomic levels. The frequency shift
of an atomic level |a〉 due to an off-resonant monochromatic radiation E0 cos(ωt) is
δνa = − 1
4h E2
0 αa(ω), (4.14)
where h is the Planck constant, and αa(ω) is the scalar polarizability of the level |a〉 defined as
αa(ω) = e2
me
∑
j
fj ω2
j − ω2 . (4.15)
Here ωj and fj denote the frequency and the oscillator strength of transitions that connect to the
energy level |a〉, respectively. Therefore the frequency shift of the transition |a〉 → |b〉 due to an
off-resonant radiation field is given by
∆ν = δνb − δνa = − 1
4h E2
0 ∆αa→b(ω), (4.16)
where ∆αa→b(ω) is the differential polarizability between two atomic states. When an 27Al+ is
exposed to a BBR field, the resulting shift of the clock transition can be calculated by integrating
over the power spectrum of the BBR,
∆νclock = −1
4 0π3c3
∫∞
0
∆αclock(ω) ω3
eħω/kBT − 1 dω. (4.17)
Here kB and 0 denote the Boltzmann constant and vacuum permittivity respectively. In Eq. (4.17),
we see that the characterizations of both the BBR temperature environment and the differential
polarizability are required to evaluate the frequency shift due to the BBR, which will be discussed
in the next two sections.

96
4.3.1 Polarizability of the Clock Transition
The differential polarizability of the clock transition can be rewritten as [Porsev 06]
∆αclock = ∆α0
clock(1 + η(T )), (4.18)
where ∆α0
clock is the differential dc polarizability and η(T ) is a small dynamic correction accounting
for the other atomic transitions connecting to the two clock states. For the case of the 27Al+ clock
transition, the dynamic correction is < 0.4% of the dc polarizability such that we only need to
evaluate the effect due to dc polarizability [Mitroy 09, Safronova 11]. To experimentally evaluate
the dc polarizability, the ac Stark shift of the clock transition is measured using a near IR laser. And
then the dc polarizability is determined by extrapolating the calculated polarizability at the IR laser
frequency to the zero frequency [Rosenband 06, Chou 11a]. The dc polarizability is experimentally
determined as α0
clock = (7.02 ± 0.95) × 10−42 Jm2/V2 [Chou 11a], which agrees well with the
latest theoretical calculation, (8.2 ± 0.8) × 10−42 Jm2/V2 [Safronova 11]. The uncertainty of the
measurement is dominated by the characterization of the beam profile of the near IR laser at the
position of the 27Al+.
4.3.2 BBR Environment
In comparison with other atomic species proposed as the frequency standards [Simon 98,
Degenhardt 05, Safronova 11, Sherman 12, Barwood 14, Nicholson 15, Huntemann 16], the relati
vely smaller dc polarizability of 27Al+ indicates that the evaluation of the BBR environment is not
as demanding as other optical atomic clocks [Nicholson 15, Beloy 14]. Therefore, instead of doing
a full evaluation of the BBR environment, we use the highest and the lowest temperature of the
chamber to bound the BBR shift [Chou 10a]. Inside the vacuum, the trap wafer is expected to
be at the highest temperature due to resistive heating caused by the rf current. Heat is removed
primarily through thermal conduction via the copper post. Three thermocouples are attached to
the trap wafer and the post to monitor the temperature during operation. The trap temperature
increase above the room temperature versus the rf drive power is shown in Fig. 4.4. When the

97
Figure 4.4: Rise of the trap temperature above ambient versus rf drive power at ΩT ' 2π × 76 MHz.
0 2 4 6 8 10 12
0
5
10
15
20
25
Input rf power (W)
Trap temperature change (oC)
trap is operated at ΩT ' 2π × 40 MHz, the input rf power is 1 W and the trap temperature is
< 5◦C above room temperature. Including the effect of the room temperature drift, the BBR field
impinging upon the 27Al+ is bounded in a range Tion = 20 - 25 ◦C.
4.3.3 Estimate of Clock Shift due to BBR
Given the differential dc polarizability, the clock frequency shift due to BBR at a certain
ambient temperature can be obtained by integrating Eq. (4.17). The fractional frequency shift
versus the ambient temperature is shown in Fig. 4.5. From Eq. (4.17), the uncertainty of the BBR
shift can be decomposed as
σ∆νclock =
( k4
B
4ħ4 0π3c3
)
√
( π4
15 T 4 σ∆αclock
)2
+
( 4π4
15 ∆αclock T 3∆T
)2
, (4.19)
where σ∆αclock and ∆T denote the uncertainties of the differential polarizability and the measured
BBR temperature, respectively. The contribution of the BBR shift at the ambient temperature
T= 300 K is shown in Fig. 4.6. In our experimental conditions, the uncertainty arising from
the differential polarizability, about a factor of three larger than that due to the temperature

98
Figure 4.5: The fractional clock frequency shift versus the BBR temperature.
0 20 40 60 80 100
5.0
2.0
3.0
BBR Temperature HoCL
Fractional frequency shift ¥ -1018
uncertainty, dominates the clock shift uncertainty due to the BBR. The evaluation of the fractional
frequency shift uncertainty due to the BBR is (δf /f ) = −(2.7 ± 0.3) × 10−18.
Figure 4.6: The of BBR shift uncertainty at the ambient temperature T= 300 K.
0 5 10 15 20
0.02
0.05
0.10
0.20
0.50
1.00
Temperature uncertainty HoCL
Fractional frequency uncertainty ¥ 1018
Temperature
Polarizability
Total

99
4.4 Zeeman Shift
When an atom experiences a weak, but non-zero magnetic field B, its transition frequency
f0 is approximately perturbed by
f − f0 ' C1B + C2B2, (4.20)
where C1 and C2 are coefficients that account for the linear and quadratic Zeeman effects. For the
27Al+ optical clock, the linear Zeeman shift can be experimentally canceled during the clock opera
tion on the fly by probing a virtual mF = 0 transition frequency, which is the mean frequency of two
stretch Zeeman transitions |1S0, F = 5/2, mF = ±5/2〉 ↔ |3P0, F = 5/2, mF = ±5/2〉 [Bernard 98,
Rosenband 07]2 . The coefficient C2 = −0.719 88(48) Hz/G2 was measured previously by comparing
the clock transition frequencies of 27Al+ and 199Hg+ while the magnetic field of the 27Al+ clock
was varied [Rosenband 08]. The clock frequency shift due to the quadratic Zeeman effect in an
interrogation cycle is given by [Rosenband 07, Chou 10a]
( δf
f
)
= C2〈B2〉, (4.21)
〈B2〉 = 〈B〉2 + B2
ac. (4.22)
Here 〈B〉 is the time average of the magnetic field at the position of the ion and Ba2c is the variance
of the magnetic field about the mean, which results from the variation of ambient magnetic field.
In a linear Paul trap, Bac can be caused by the rf current flowing in the electrodes, which depends
on the design of the trap. In our system, we use microwave hyperfine transitions in the ground
state |2S1/2〉 of 25Mg+ as a probe of the magnetic field. The magnetic field dependence of the
ground state hyperfine levels of 25Mg+ has been studied [Itano 81b]. Given the hyperfine constant
and the Land ́e g-factor, the transition frequencies between different Zeeman levels are calculated
2 Note that this cancellation works only when the frequency drift rate of each Zeeman transition due to the ambient magnetic field variaion is much smaller than the ratio of the frequency uncertainty and the clock servo time constant, δf /τclock. The two transitions are separated by ≈ 10 kHz at B ≈ 1.1 Gauss in our experiment.

100
to the lowest order in B using the Breit-Rabi formula as
f (|F = 3, mF = −3〉 ↔ |F = 2, mF = −2〉) ' f (B = 0) + 2.335 B, and (4.23)
f (|F = 3, mF = 0〉 ↔ |F = 2, mF = 0〉) ' f (B = 0) + (2.194 × 10−3) B2, (4.24)
where frequency f is in units of MHz and the magnetic field B is in units of Gauss. While
〈B〉 can be experimentally determined by measuring the linear frequency shift of the transition
|F = 3, mF = −3〉 ↔ |F = 2, mF = −2〉 against the applied magnetic field, Bac is determined by
measuring the frequency shift of the transition |F = 3, mF = 0〉 ↔ |F = 2, mF = 0〉 versus the
applied rf power Prf , where Prf is proportional to Ba2c. As shown in Fig. 4.7, we experimentally
find a relation for the wheel trap version C at 76 MHz rf drive frequency
104 × B2
ac = (2.5 ± 0.3)Prf + (9.5 ± 0.9), (4.25)
where Ba2c is in units of Gauss2 and Prf is in units of Watt. Therefore the estimate of the fractional
clock frequency shift is (δf /f ) = −(890.7 ± 0.6) × 10−18 at 〈B〉 ' 1.1 G, limited by the uncertainty
of the quadratic Zeeman shift coefficient C2 of 27Al+.
4.5 Background Gas Collisions
Background gas collisions during the clock interrogation may lead to a frequency shift in two
ways: (a) a relative phase shift between the 27Al+ and the probe laser due to the electric field
from the background gas molecules and atoms. (b) a time dilation shift due to the kinetic energy
transfer between the 27Al+ and the background gas.
One of the challenges for evaluating the effect of background gas collisions is the difficulty
of estimating the actual collision rate, since all the ion-based optical clocks operate at a vacuum
level where vacuum gauges are unreliable3 . Fortunately for the 27Al+ optical clock utilizing
quantum logic spectroscopy, the order of the ion crystal is sometimes changed by collisions, and the
rate of these reordering events can be used as an indirect pressure measurement. As discussed in
3 We typically operate the clock at a pressure < 5.0 × 10−11 torr.

101
Figure 4.7: Magnetic field variance about the mean versus the trap drive rf power. Red: linear fit to the experimental data, Ba2c × 104 = (2.5 ± 0.3)Prf + (9.5 ± 0.9). The non-vanishing Bac at the zero rf power is due to the ambient fluctuating magnetic field noise, such as that from the 60 Hz currents in nearby electronics.
01234
0.8
1.0
1.2
1.4
1.6
1.8
2.0
RF power (W)
Bac2 x 103 (G2)
Ref. [Rosenband 08], if we assume the ion-pair reorders if and only if a Langevin collision occurs, the
frequency shift due to mechanism (a) has an upper bound of 0.15 κ independent of the interrogation
pulse duration, where κ is the collision rate [Gioumousis 58]. In Fig. 4.8, the reordering rate of
the ion pair within a five-minute time window is plotted against the time after two ions are loaded
into the trap. No clear dependence is seen in Fig 4.8, indicating the ion-loading process does not
significantly contaminate the vacuum. The mean reordering rate is 0.013 Hz at 40 MHz rf drive
frequency, which corresponds to a fractional frequency shift (δf /f ) = 3.4 × 10−18. However, this
shift can be reduced by a factor of two by post-selecting measurements without ion reordering.
Furthermore it may also be possible to reject experiments in which there has been a collision that
did not cause reordering by performing a temperature measurement on the 25Mg+ after the clock
interrogation pulse.
With regard to mechanism (b), glancing collisions with impact parameters larger than one
Langevin radius may still transfer non-negligible energy to the 27Al+ that leads to a time dilation

102
Figure 4.8: Ion pair reordering rate during the clock operation within a five-minute time window. The x axis is the time after a 25Mg+-27Al+ pair is loaded into the trap. Measurements were done at ΩT ' 2π × 40 MHz and trap parameters are given in Table 3.3.
0 20 40 60 80 100 120 Time after loading [min]
0.01
0.00
0.01
0.02
0.03
0.04
0.05
0.06
Reordering rate [Hz]
shift. These collisions do not necessarily change the ion order and hence cannot be excluded by the
post selection. We are currently working on modeling this effect.
4.6 Stark Shift due to the RF Drive Field
Similar to the BBR, the rf drive field also gives rise to an ac Start shift. Therefore, we can
write down the Stark shift due to the rf drive field.
∆ν = − 1
4h (E2
EMM + E2
IMM )∆αclock(ΩT ). (4.26)
Following the derivation in Eq. 4.2 and Eq. 4.3, we can obtain the strength of the electric field
accounting for the IMM, which is given by
〈E2
IMM〉 =
∑
i⊂{x, y}
(1
2 +  ̄ni) 2ħωimAlΩ2
T
Q2 , (4.27)

103
where ωi and  ̄ni are secular frequencies and average occupation numbers in the transverse direction.
With the EEMM values given in Table 4.1 and the average occupation numbers given in Chapter
3, the resulting shift at ΩT ' 2π × 40 MHz is (δf /f ) = 1.8 × 10−19. In our system, this shift is
dominated by the effect of EEMM and the contribution from EIMM is less than 1 %.
4.7 Formation of AlH+
An essential practical problem for the 27Al+ optical clock, though not affecting the accuracy,
is the formation of AlH+ molecular ions. This hydride formation limits the continuous operation
of the optical clock because it stops ticking as soon as the molecule forms. The chemical reaction,
Al+ (1S) + H2 + 3.8 eV −−→ AlH+ (X2 Σ+) + H,
is known to be endothermic when both the 27Al+ and the H2 are in the electronic ground sta
tes [Klein 82, Mu ̈ller 86, Seck 14]. However when the 27Al+ is excited to the metastable state 3P ,
the reaction,
Al+ (3P) + H2 −−→ AlH+ (X2 Σ+) + H + 0.9 eV,
becomes exothermic. When the clock is operating, we tend to run with the population in the
metastable state 3P0 close to 0.5 to reach the quantum projection limit. Thus, Langevin collisions
are likely to generate AlH+ molecules. In addition, the generated hot molecule may be lost from
the trap. Currently this is the limitation of the 27Al+ clock up time. In Fig. 4.9, we plot the up
times of 29 clock runs; the exponential fit gives a lifetime of about 22 minutes. This problem can be
resolved by either improving the vacuum or implementing photodissociation of the AlH+ [Seck 14].

104
Figure 4.9: Clock up times of 29 experimental runs. Red line is the fit to a exponential function, which give about 22 minutes of lifetime.
t0 = 21.92 minutes
0 20 40 60 80 100 120
0
2
4
6
8
10
12
14
Clock up time@minD
Number of Events

Chapter 5
Conclusion
In this thesis, I have discussed several systematic effects in our current 27Al+ clock sympathe
tically cooled by 25Mg+ and utilizing quantum logic spectroscopy. Although the full characterization
of the 27Al+ optical clock is still ongoing, I would like to summarize some of the most important
systematic effects that we have considered so far.
The time dilation shift due to the ion’s motion dominated the uncertainty in the previous
27Al+ clocks [Rosenband 08, Chou 10a]. The contribution of the secular motion has been reduced
more than an order of magnitude in the current system by operating the clock near the 3D motional
ground state [Chen 17]. This new protocol also eliminates the need for cooling light during the
clock interrogation, which led to an ac Stark shift in the previous clock. We have characterized
the secular motion energy at two different rf drive frequencies. In both cases, the secular motion
time dilation shift is dominated by the zero-point energy of the harmonic trapping potential at a
typical clock interrogation time, which has a definite value and does not contribute significantly
to the clock uncertainty. The time dilation shift due to EMM is reduced by a factor of three in
the current trap, which is dominated by the EMM-v resulting from the phase imbalance between
rf electrodes. Although the shift is of the same order as the previous clock, we do see much less
long-term drift of the EMM in contrast to the old clocks. This may be because there is less charge
build-up due to implementing laser ablation loading and reducing the amount of dielectric materials
in the trap. The current evaluation of the time dilation frequency shift due to EMM is promising
and we may be able to control its uncertainty below 1.0 × 10−18.

106
With regard to the effect of blackbody radiation due to the ambient environment, an earlier
measurement of the polarizability of the clock transition [Chou 11a] coupled with the improved
thermal management of the trap shown in this thesis leads to a fractional frequency shift of −(2.7 ±
0.3)×10−18. The uncertainty is now dominated by the uncertainty in the value of the polarizability.
The preliminary evaluation of the quadratic Zeeman shift gave a value of −(890.7 ± 0.6) ×
10−18. The uncertainty is reduced by operating the trap at a lower rf drive power, which corresponds
to less rf current flowing on the electrode surfaces. This trapping condition leads to relatively
smaller secular frequencies and larger Lamb-Dicke parameters, which is a challenge for 3D sideband
cooling. An optimized sideband cooling pulse sequence has been developed to make this possible.
The uncertainty of the quadratic Zeeman shift is limited by the uncertainty of the coefficient.
The frequency shift due to background gas collisions may be the largest remaining uncertainty
of the 27Al+ optical clock presented in this thesis. The observed reordering rate of the 25Mg+
27Al+ ion pair indicates that the pressure of the current trap is about a factor of 2.5 higher
than the previous clocks. This leads to an estimate of the fractional frequency shift uncertainty
of 3.4 × 10−18, arising from the phase shift due to hard collisions with H2 molecules of impact
parameters less than one Langevin radius [Rosenband 08]. A clock operation protocol is being
developed to post-select measurements without collisions. In terms of the time dilation shift due to
collisions, we are working on modeling this effect to estimate its systematic frequency uncertainty.
There are still some systematic effects in our system that we have not carefully considered
so far, such as the AOM frequency chirp, the servo error, and the ac Stark shift caused by the
probe laser. However, since the experimental conditions related to these systematic effects are
close to the same as those in the previous clocks, I expect that the systematic frequency shifts due
to these effects can be controlled to be similar, or at least the same order of magnitude, to the
values reported earlier [Chou 10a]. With all these ingredients, the accuracy of the current clock
should be below 3.0 × 10−18. The preliminary uncertainty budget is given in Table 5.1 when the
clock is operating at ΩT ' 2π × 40 MHz with 150 ms interrogation time. The uncertainty of the
time dilation shift due to EMM is assumed to be 30 % of the shift.

107
Table 5.1: The preliminary uncertainty budget of the third-generation 27Al+ clock at the rf drive frequency ΩT ' 2π × 40 MHz with a 150 ms clock interrogation pulse.
Contributor Fractional frequency ×1018
Shift Uncertainty Excess micromotion −3.5 0.9(preliminary) Secular motion −1.7 0.3 Blackbody radiation shift −2.7 0.3 Cooling laser Stark shift 0.0 0.0 Quadratic Zeeman shift −890.7 0.6(projected) Linear Doppler shift 0.0 0.3(projected) Clock laser shift 0.0 0.2(projected) Background gas collisions under evaluation under evaluation AOM phase chirp 0.0 0.2(projected)
Even as the evaluation of the current 27Al+ optical clock is being finished, a next generation
clock is now being built in our group. It will use a new trap with rf electrodes that have been
designed to balance the rf phase to further reduce the EMM. In combination with the protocol
developed for sideband cooled clock operation in the current system, we should be able to cut the
fractional frequency shift due to time dilation arising from the ion’s motion down to the 10−19
range. Moreover, the new trap will be housed in a titanium vacuum can, which should reduce
the H2 outgassing rate significantly and minimize the uncertainty due to background gas colli
sions [Kurisu 08, Takeda 11]. In the next generation clock, it will be exciting to control all the
systematic fractional frequency uncertainties near 10−19!

Bibliography
[Allan 66] D. Allan. Statistics of Atomic Frequency Standards. Proc. iEEE, vol. 54, page 1966, 1966.
[Barrett 03] M. D. Barrett, B. DeMarco, T. Schaetz, V. Meyer, D. Leibfried, J. Britton, J. Chiaverini, W. M. Itano, B. Jelenkovi ́c, J. D. Jost, C. Langer, T. Rosenband & D. J. Wineland. Sympathetic cooling of 9Be+ and 24Mg+ for quantum logic. Phys. Rev. A, vol. 68, page 042302, 2003.
[Barwood 14] G. P. Barwood, G. Huang, H. A. Klein, L. A. M. Johnson, S. A. King, H. S. Margolis, K. Szymaniec & P. Gill. Agreement between two 88Sr+ optical clocks to 4 parts in 1017. Phys. Rev. A, vol. 89, page 050501, 2014.
[Beloy 14] K. Beloy, N. Hinkley, N. B. Phillips, J. A. Sherman, M. Schioppo, J. Lehman, A. Feldman, L. M. Hanssen, C. W. Oates & A. D. Ludlow. Atomic Clock with 1 × 10−18 Room-Temperature Blackbody Stark Uncertainty. Phys. Rev. Lett., vol. 113, page 260801, 2014.
[Beloy 17] K Beloy, David R Leibrandt & Wayne M Itano. Hyperfine-mediated electric quadrupole shifts in Al+ and In+ ion clocks. Physical Review A, vol. 95, no. 4, page 043405, 2017.
[Bergquist 87] JC Bergquist, Wayne M Itano & DJ Wineland. Recoilless optical absorption and Doppler sidebands of a single trapped ion. Physical Review A, vol. 36, no. 1, page 428, 1987.
[Berkeland 98] D. J. Berkeland, J. D. Miller, J. C. Bergquist, W. M. Itano & D. J. Wineland. Minimization of Ion Micromotion in a Paul trap. J. Appl. Phys., vol. 83, page 5025, 1998.
[Bernard 98] J. E. Bernard, L. Marmet & A. A. Madej. A laser frequency lock referenced to a single trapped ion. Opt. Commun., vol. 150, page 170, 1998.
[Bloom 14] B. J. Bloom, T. L. Nicholson, J. R. Williams, S. L. Campbell, M. Bishof, X. Zhang, W. Zhang, S. L. Bromley & J. Ye. An optical lattice clock with accuracy and stability at the 1018 level. Nature, vol. 506, pages 71–75, 2014.
[Bondarescu 15] Ruxandra Bondarescu, Andreas Sch ̈arer, Andrew Lundgren, Gyo ̈rgy Het ́enyi, Nicolas Houlie ́, Philippe Jetzer & Mihai Bondarescu. Atomic clocks as a tool to monitor vertical surface motion. Geophys. J. Int., vol. 202, page 1770, 2015.

109
[Boyd 68] G. D. Boyd & D. A. Kleinman. Parametric Interaction of Focused Gaussian Light Beams. J. Appl. Phys., vol. 39, page 3597, 1968.
[Boyd 07] Martin M. Boyd, Andrew D. Ludlow, Sebastian Blatt, Seth M. Foreman, Tetsuya Ido, Tanya Zelevinsky & Jun Ye. 87Sr Lattice Clock with Inaccuracy below 10−15. Phys. Rev. Lett., vol. 98, page 083002, 2007.
[Brownnutt 15] M Brownnutt, M Kumph, P Rabl & R Blatt. Ion-trap measurements of electric-field noise near surfaces. Reviews of Modern Physics, vol. 87, no. 4, page 1419, 2015.
[Chen 17] J.-S. Chen, S. M. Brewer, C. W. Chou, D. J. Wineland, D. R. Leibrandt & D. B. Hume. Sympathetic Ground State Cooling and Time-Dilation Shifts in an 27Al+ Optical Clock. Phys. Rev. Lett., vol. 118, page 053002, Jan 2017.
[Chou 10a] C. W. Chou, D. B. Hume, J. C. J. Koelemeij, D. J. Wineland & T. Rosenband. Frequency Comparison of Two High-Accuracy Al+ Optical Clocks. Phys. Rev. Lett., vol. 104, page 070802, 2010.
[Chou 10b] C. W. Chou, D. B. Hume, T. Rosenband & D. J. Wineland. Optical Clocks and Relativity. Science, vol. 329, page 1630, 2010.
[Chou 11a] C. W. Chou et al. Measurement of the bbr shift on Al+ clock transition using a laser beam. private communication, 2011.
[Chou 11b] C. W. Chou, D. B. Hume, M. J. Thorpe, D. J. Wineland & T. Rosenband. Quantum Coherence between Two Atoms beyond Q = 1015. Phys. Rev. Lett., vol. 106, page 160801, 2011.
[Chuah 13] Boon Leng Chuah, Nicholas C. Lewty, Radu Cazan & Murray D. Barrett. Minimization of Ion Micromotion in a Linear Paul Trap with a High Finesse Cavity. Opt. Express, vol. 21, page 10632, 2013.
[Colombe 14] Y. Colombe, D. H. Slichter, A. C. Wilson, D. Leibfried & D. J. Wineland. Single-Mode Optical Fiber for High-Power, Low-Loss UV Transmission. Opt. Express, vol. 22, pages 19783–19793, 2014.
[Daniilidis 11] D. Daniilidis, S. Narayanan, S. A. Mo ̈ller, C. Clark, T. E. Lee, P.J. Leek, A. Wallraff, St. Schulz, F. Schmidt-Kaler & H. Ha ̈ffner. Fabrication and heating rate study of microscopic surface electrode ion traps. New J. Phys., vol. 13, page 013032, 2011.
[de Mirand ́es 16] E. de Mirand ́es, P. Barat, M. Stock & M. J. T. Milton. Calibration campaign against the international prototype of the kilogram in anticipation of the redefinition of the kilogram, part II: evolution of the BIPM as-maintained mass unit from the 3rd periodic verification to 2014. Metrologia, vol. 53, page 1204, 2016.
[Degenhardt 05] Carsten Degenhardt, Hardo Stoehr, Christian Lisdat, Guido Wilpers, Harald Schnatz, Burghard Lipphardt, Tatiana Nazarova, Paul-Eric Pottie, Uwe Sterr, Ju ̈rgen Helmcke & Fritz Riehle. Calcium optical freqeuncy standard with ultracold atoms: Approaching 10−15 relative uncertainty. Phys. Rev. A, vol. 72, page 062111, 2005.

110
[Dehmelt 82] H. Dehmelt. Monoion oscillator as potential ultimate laser frequency standard. IEEE Trans. Instrum. Meas., vol. IM-31, pages 83–87, 1982.
[Delva 17] P. Delva, J. Lodewyck, S. Bilicki, E. Bookjans, G. Vallet et al. Test of special relativity using a fiber network of optical clocks. arXiv:1703.04426, 2017.
[Derevianko 14] A. Derevianko & M. Pospelov. Hunting for topological dark matter with atomic clocks. Nature Phys., vol. 10, page 933, 2014.
[DiCiccio 96] T. J. DiCiccio & B. Efron. Bootstrap Confidence Intervals. Statist. Sci., vol. 11, page 189, 1996.
[Dicke 53] R. H. Dicke. The effect of collisions upon the Doppler width of spectral lines. Phys. Rev., vol. 89, page 472, 1953.
[Diedrich 89] F. Diedrich, J. C. Bergquist, Wayne M. Itano & D. J. Wineland. Laser Cooling to the Zero-Point Energy of Motion. Phys. Rev. Lett., vol. 62, page 403, 1989.
[Dodonov 00] V. V. Dodonov, S. S. Mizrahi & A. L. de Souza Silva. Decoherence and Thermalization Dynamics of a Quantum Oscillator. J. Opt. B: Quantum Semiclass. Opt., vol. 2, page 271, 2000.
[Dolez ̆al 15] M. Dolez ̆al, P. Balliing, P. B. R. Nisbet-Jones, S. A. King, J. M. Jones, H. A. Klein, P. Gill, T. Lindvall, A. E. Wallin, M. Merimaa, C. Tamm, C. Sanner, N. Huntemann, N. Schanhorst, I. D. Leroux, P. O. Schmidt, T. Burgermeister, T. E. Mehlst ̈aubler & E. Peik. Analysis of thermal radiation in ion traps for optical frequency standards. Metrologia, vol. 52, page 842, 2015.
[Donley 05] EA Donley, TP Heavner, F Levi, MO Tataw & SR Jefferts. Double-pass acousto-optic modulator system. Review of Scientific Instruments, vol. 76, no. 6, page 063112, 2005.
[Drever 83] R. W. P. Drever, J. L. Hall, F. V. Kowalski, J. Hough, G. M. Ford, Munley A. J. & H. Ward. Laser phase and frequenccy stabilization using an optical resonator. Appl. Phys. B, vol. 31, page 97, 1983.
[Drullinger 80] R. E. Drullinger, D. J. Wineland & J. C. Bergquist. High-Resolution Optical Spectra of Laser Cooled Ions. Appl. Phys., vol. 22, page 365, 1980.
[Dub ́e 15] Pierre Dub ́e, Alan A. Madej, Andrew Shiner & Bin Jian. 88Sr+. Phys. Rev. A, vol. 92, page 042119, 2015.
[Dzuba 99] V. A. Dzuba, V. V. Flambaum & J. K. Webb. Calculations of the relativistic effects in many-electron atoms and space-time variation of fundamental constants. Phys. Rev. A, vol. 59, pages 230–237, 1999.
[Ejtemaee 16] S. Ejtemaee & P. C. Haljan. 3D Sisyphus Cooling of Trapped Ions. arXiv:1603.01248, 2016.
[Flambaum 16] V. V. Flambaum. Enhancing the Effect of Lorentz Invariance and Einstein’s Equivalence Principle Violation in Nuclei and Atoms. Phys. Rev. Lett., vol. 117, page 072501, 2016.

111
[Fortier 11] T. M. Fortier, M. S. Kirchner, F. Quinlan, J. Taylor, J. C. Bergquist, T. Rosenband, N. Lemke, A. Ludlow, Y. Jiang, C. W. Oates & S. A. Diddams. Generation of ultrastable microwaves via optical frequency division. Nat. Photon., vol. 5, page 425, 2011.
[Fr ̈ohlich 07] B Fr ̈ohlich, T Lahaye, B Kaltenha ̈user, H Ku ̈bler, S M ̈uller, T Koch, M Fattori & T Pfau. Two-frequency acousto-optic modulator driver to improve the beam pointing stability during intensity ramps. Review of scientific instruments, vol. 78, no. 4, page 043101, 2007.
[Gaebler 16] J. P. Gaebler, T. R. Tan, Y. Lin, Y. Wan, R. Bowler, A. C. Keith, S. Glancy, K. Coakley, E. Knill, D. Leibfried & D. J. Wineland. High-Fidelity Universal Gate Set for 9Be+ Ion Qubits. Phys. Rev. Lett, vol. 117, page 060505, 2016.
[Gallagher 79] T. F. Gallagher & W. E. Cooke. Interactions of Blackbody Radiation with Atoms. Phys. Rev. Lett., vol. 42, page 835, 1979.
[Gesley 85] M. A. Gesley & L. W. Swanson. Spectral analysis of adsorbate induced field-emission flicker noise. Phys. Rev. B, vol. 32, page 7703, 1985.
[Ghosh 95] P.K. Ghosh. Ion traps. International series of monographs on physics. Clarendon Press, 1995.
[Gill 11] Patrick Gill. When should we change the definition of the second? Phil. Trans. R. Soc. A, vol. 369, page 4109, 2011.
[Gioumousis 58] G. Gioumousis & D. P. Stevenson. Reactions of Gaseous Molecule Ions with Gaseous Molecules. V. Theory. J. Chem. Phys., vol. 29, page 294, 1958.
[Gloger 15] Timm F. Gloger, Peter Kaufmann, Delia Kaufmann, M. Tanveer Baig, Thomas Collath, Michael Johanning & Christof Wunderlich. Ion trajectory analysis for micromotion miimization and the measurement of small forces. Phys. Rev. A, vol. 92, page 043421, 2015.
[Godun 14] R. M. Godun, P. B. R. Nisbet-Jones, J. M. Jones, S. King, L. A. M. Johnson, H. S. Margolis, K. Szymaniec, , S. N. Lea, K. Bongs & P. Gill. Frequency ratio of two optical clok transitions in 171Yb+ and constraints on the time-variation of fundamental constants. Phys. Rev. Lett., vol. 113, page 210801, 2014.
[Gu ̈rtler 04] A. Gu ̈rtler, F. Robicheaux, W. J. van der Zande & L. D. Noordam. Asymmetry in the Strong-Field Ionization of Rydberg Atoms by Few-Cycle Pulses. Phys. Rev. Lett., vol. 92, page 033002, 2004.
[Heavner 14] Thomas P Heavner, Elizabeth A Donley, Filippo Levi, Giovanni Costanzo, Thomas E Parker, Jon H Shirley, Neil Ashby, Stephan Barlow & S R Jefferts. First accuracy evaluation of NIST-F2. Metrologia, vol. 51, no. 3, page 174, 2014.
[Hendricks 07] R. J. Hendricks, D. M. Grant, P. F. Herskind, A. Dantan & M. Drewsen. An all-optical ion-loading technique for scalable microtrap architectures. Appl. Phys. B, vol. 88, pages 507–513, 2007.

112
[Hinkley 13] N. Hinkley, J. A. Sherman, N. B. Phillips, M. Schipoppo, N. D. Lemke, K. Beloy, M. Pizzocaro, C. W. Oates & A. D. Ludlow. An atomic clock with 10−18 instability. Science, vol. 341, page 1215, 2013.
[Hite 12] D. A. Hite, Y. Colombe, A. C. Wilson, K. R. Brown, U. Warring, R. J ̈ordens, J. D. Jost, K. S. McKay, D. P. Pappas, D. Leibfried & D. Wineland. 100-Fold Reduction of Electric-Field Noise in an Ion Trap Cleaned with In Situ Argon-Ion-Beam Bombardment. Phys. Rev. Lett., vol. 109, page 103001, 2012.
[Hume 07] D. B. Hume, T. Rosenband & D. Wineland. High-fidelity adaptive qubit detection through repetitive quantum nondemotion measurement. Phys. Rev. Lett., vol. 99, page 120502, 2007.
[Hume 10] D. B. Hume. Two-Species Ion Arrays for Quantum Logic Spectroscopy and Entanglement Generation. PhD thesis, University of Colorado, Boulder, 2010.
[Hume 16] D. B. Hume & D. R. Leibrandt. Probing beyond the Laser Coherence Time in Optical Clock Comparisons. Phys. Rev. A, vol. 93, page 032138, 2016.
[Huntemann 14] N. Huntemann, B. Lipphardt, Chr. Tamm, V. Gerginov, S. Weyers & E. Peik. Improved Limit on a Temporal Variation of mp/me from Comparisons of Yb+ and Cs Atomic Clocks. Phys. Rev. Lett., vol. 113, page 210802, 2014.
[Huntemann 16] N. Huntemann, C. Sanner, B. Lipphardt, Chr. Tamm & E. Peik. Single-Ion Atomic Clock with 3 × 10−18 Systematic Uncertainty. Phys. Rev. Lett., vol. 116, page 063001, 2016.
[Itano 81a] W. M. Itano, L. L. Lewis & D. J. Wineland. Shift of 2S1/2 hyperfine splittings due to blackbody radiation and its influence on frequency standards. J. de Phys., vol. Colloque C8, page 283, 1981.
[Itano 81b] Wayne M. Itano & D. J. Wineland. Precision measurement of the ground-state hyperfine constant of 25Mg+. Phys. Rev. A, vol. 24, page 1364, 1981.
[Itano 82] W. M Itano & D. J. Wineland. Laser Cooling of Ions Stored in Harmonic and Penning Traps. Phys. Rev. A, vol. 25, page 35, 1982.
[Itano 93] W. M. Itano, J. C. Bergquist, J. J. Bollinger, J. M. Gilligan, D. J. Heinzen, F. L. Moore, M. G. Raizen & D. J. Wineland. Quantum Projection noise: Pupulation flucturation in two-level systems. Phys. Rev. A, vol. 47, page 3554, 1993.
[James 98] D. F. James. Theory of Heating of the Quantum Ground State of Trapped Ions. Phys. Rev. Lett., vol. 81, page 317, 1998.
[Jefferts 95] S. R. Jefferts, C. Monroe, E. W. Bell & D. J. Wineland. Coaxial-resonator-driven rf (Paul) trap for strong confinement. Phys. Rev. A, vol. 51, page 3112, 1995.
[Jefferts 07] S. R. Jefferts, T. P. Heavner, T. E. Parker & J. H. Shirley. NIST Cesium Fountains Current Status and Future Prospects. Proc. SPIE, vol. 6673, page 667309, 2007.
[Johansson 12] J. R. Johansson, P. D. Nation & F. Nori. QuTiP: An open-source Python framework for the dynamics of open quantum systems. Comp. Phys. Comm., vol. 183, page 1760, 2012.

113
[Johansson 13] J. R. Johansson, P. D. Nation & F. Nori. QuTiP 2: A Python framework for the dynamics of open quantum systems. Comp. Phys. Comm., vol. 184, page 1234, 2013.
[Keller 15] J. Keller, H. L. Partner, T. Burgermeister & T. E. Mehlst ̈aubler. Precise Determination of Micromotion for Trapped-Ion Optical Clocks. J. Appl. Phys., vol. 118, page 104501, 2015.
[Kim 17] E. Kim, A. Safavi-Naini, D. A. Hite, K. S. McKay, D. P. Pappas, P. F. Weck & H. R. Sadeghpour. Electric-field noise from carbon-adatom diffusion on a Au(110) surface: First-rpinciples calculations and experiments. Phys. Rev. A, vol. 95, page 033407, 2017.
[Klein 82] R. Klein, P. Rosmus & H. J. Werner. Ab initio calculations of low lying states of the BH+ and AlH+ ions. J. Chem. Phys., vol. 77, page 3559, 1982.
[Kobayashi 06] J Kobayashi, Y Izumi, M Kumakura & Y Takahashi. Stable all-optical formation of Bose–Einstein condensate using pointing-stabilized optical trapping beams. Applied Physics B: Lasers and Optics, vol. 83, no. 1, pages 21–25, 2006.
[Kurisu 08] H. Kurisu, K. Ishizawa, S. Yamamoto, M. Hesaka & Y. Saito. Application of titanium materials to vacuum chambers and components. J. Phys.: Conf. Ser., vol. 100, page 092002, 2008.
[Le Targat 13] R Le Targat, L Lorini, Y Le Coq, M Zawada, J Gu ́ena, M Abgrall, M Gurov, P Rosenbusch, DG Rovera, B Nago ́rny et al. Experimental realization of an optical second with strontium lattice clocks. Nature communications, vol. 4, 2013.
[Lechner 16] Regina Lechner, Christine Maier, Cornelius Hempel, Peter Jurcevic, Ben P. Lanyon, Thomas Monz, Michael Brownnutt, Rainer Blatt & Christian F. Roos. Electromagnetically-induced-transparency ground-state cooling of long ion strings. Phys. Rev. A, vol. 93, page 053401, 2016.
[Leibrandt 15] D. R. Leibrandt & J. Heidecker. An open source digital servo for atomic, molecular, and optical physics experiments. Rev. Sci. Instrum., vol. 86, page 123115, 2015.
[Lemke 09] N. D. Lemke, A. D. Ludlow, Z. W. Barber, T. M. Fortier, S. A. Diddams, Y. Jiang, S. R. Jefferts, T. P. Heavner, T. E. Parker & C. W. Oates. Spin-1/2 Optical Lattice Clock. Phys. Rev. Lett., vol. 103, page 063001, 2009.
[Li 00] Ying Ze Li, C. V. Madhusudana & Eddie Leonardi. Enhancement of Thermal Contact Conductance: Effect of Metallic Coating. J. Thermophys. Heat Transfer, vol. 14, page 540, 2000.
[Lin 13] Y. Lin, J. P. Gaebler, T. R. Tan, R. Bowler, J. D. Jost, D. Leibfried & D. J. Wineland. Sympathetic Electromagnetically-Induced-Transparency Laser Cooling of Motional Modes in an Ion Chain. Phys. Rev. Lett., vol. 110, page 153002, 2013.
[Lombardi 07] M. A. Lombardi, T. P. Heavner & S. R. Jefferts. NIST Primary Frequency Standards and the Realization of the SI Seconde. NCSLI Measure, vol. 2, pages 74–89, 2007.

114
[Ludlow 08] A. D. Ludlow, T. Zelevinsky, G. K. Campbell, S. Blatt, M. M. Boyd, M. H. G. de Miranda, M. J. Martin, J. W. Thomsen, S. M. Foreman, Jun Ye, T. M. Fortier, J. E. Stalnaker, S. A. Diddams, Y. Le Coq, Z. W. Barber, N. Poli, N. D. Lemke, K. M. Beck & C. W. Oates. Sr Lattice Clock at 1 x 10–16 Fractional Uncertainty by Remote Optical Evaluation with a Ca Clock. Science, vol. 319, page 1805, 2008.
[Ludlow 15] A. D. Ludlow, M. M. Boyd, J. Ye, E. Peik & P. O. Schmidt. Optical Atomic Clocks. Rev. Mod. Phys., vol. 87, page 637, 2015.
[Ma 94] L. S. Ma, P. Jungner, J. Ye & J. L. Hall. Delivering the same optical frequency at two places: acccurate cancellation of phase noise introduced by an optical fiber or other time-varying path. Opt. Lett., vol. 19, pages 1777–1779, 1994.
[Major 07] F. G. Major. The quantum beat: principles and applicationos of atomic clocks. Springer, 2007.
[Maleki 05] Lute Maleki & John Prestage. Applications of clocks and frequency standards: from the routine to tests of fundamental models. Metrologia, vol. 42, page S145, 2005.
[Manfredi 12] G. Manfredi & P.-A Hervieux. Adiabatic Cooling of Trapped Non-Neutral Plasmas. Phys. Rev. Lett., vol. 109, page 255005, 2012.
[Margolis 04] H. S. Margolis, G. P. Barwood, G. Huang, H. A. Klein, S. N. Lea, K. Szymaniec & P. Gill. Hertz-Level Measurement of the Optical Clock Frequency in a Single 88Sr+ Ion. Science, vol. 306, no. 5700, pages 1355–1358, 2004.
[Marquet 03] C. Marquet, F. Schmidt-Kaler & D. F. V. James. Phonon-phonon interactions due to non-linear effects in a linear ion trap. Appl. Phys. B, vol. 76, pages 199–208, 2003.
[Mitroy 09] J. Mitroy, J. Y. Zhang, M. W. J. Bromley & K. G. Rollin. Blackbody radiation shift of the Al+ clock transition. Eur. Phys. J. D, vol. 53, page 15, 2009.
[Monroe 95] C. Monroe, D. M. Meekhof, B. E. King, S. R. Jefferts, W. M. Itano, D. J. Wineland & P Gould. Resolved-Sideband Raman Cooling of a Bound Atom to the 3D Zero-Point Energy. Phys. Rev. Lett., vol. 75, page 4011, 1995.
[Mu ̈ller 86] B. Mu ̈ller & Ch. Ottinger. Chemiluminescent reactions of second-row atomic ions.I. Al++H2 → AlH+(A2Π,B2Σ+)+H. J. Chem. Phys., vol. 85, page 232, 1986.
[Nemitz 16] Nils Nemitz, Takuya Ohkubo, Masao Takamoto, Ichiro Ushijima, Manoj Das, Noriaki Ohmae & Hidetoshi katori. Frequency ratio of Yb and Sr clocks with 5 × 1017 uncertainty at 150seconds averaging time. Nat. Photon., vol. 10, page 258, 2016.
[Nicholson 15] T. L. Nicholson, S. L. Campbell, R. B. Hutson, G. E. Marti, B. J. Bloom, R. L. McNally, W. Zhang, M. D. Barrett, M. S. Safronova, G. F. Strouse, W. L. Tew & J. Ye. Systematic Evaluation of an Atomic Clock at 2 × 10−18 Total Uncertainty. Nat. Commun., vol. 6, page 6896, 2015.
[Niering 00] M. Niering, R. Holzwarth, J. Reichert, P. Pokasov, Th. Udem, M. Weitz, T. W. H ̈ansch, P. Lemonde, G. Santarelli, M. Abgrall, P. Laurent, C. Salomon & A. Clairon. Measurement of the Hydrogen 1S - 2S Transition Frequency by Phase Coherent

115
Comparison with a Microwave Cesium Fountain Clock. Phys. Rev. Lett., vol. 84, pages 5496–5499, 2000.
[Nisbet-Jones 16] P. B. R. Nisbet-Jones, S. A. King, J. M. Jones, R. M. Godun, C. F. A. Baynham, K. Bongs, Doleˇzal M., P. Balling & P. Gill. A Single-Ion Trap with Minimized Ion-Environment Interactions. Appl. Phys. B, vol. 122, page 57, 2016.
[Oskay 06] W. H. Oskay, S. A. Diddams, E. A. Donley, T. M. Fortier, T. P. Heavner, L. Hollberg, W. M. Itano, S. R. Jefferts, M. J. Delaney, K. Kim, F. Levi, T. E. Parker & J. C. Bergquist. Single-Atom Optical Clock with High Accuracy. Phys. Rev. Lett., vol. 97, page 020801, 2006.
[Ozeri 07] R. Ozeri, W. M. Itano, R. B. Blakestad, J. Britton, J. Chiaverini, J. D. Jost, C. Langer, D. Leibfried, R. Reichle, S. Seidelin, J. H. Wesenberg & D. J. Wineland. Errors in Trapped-Ion Quantum Gates due to Spontaneous Photon Scattering. Phys. Rev. A, vol. 75, page 042329, 2007.
[Park 08] C. D. Park, S. M. Chung, Xianghong Liu & Yulin Li. Reduction in hydrogen outgassing from stainless steels by a medium-temperature heat treatment. J. Vac. Sci. Technol. A, vol. 26, page 1166, 2008.
[Poitzsch 96] M. E. Poitzsch, J. C. Bergquist, W. M. Itano & D. J. Wineland. Cryogenic linear ion trap fro accurate spectroscopy. Rev. Sci. Instrum., vol. 67, page 129, 1996.
[Porsev 06] Sergey G. Porsev & Andrei Dereviando. Multipolar theory of blackbody radiation shift of atomic energy levels and its implications for optical lattice clock. Phys. Rev. A, vol. 74, page 020502(R), 2006.
[Poulsen 12a] G. Poulsen, Y. Miroshnychenko & M. Drewsen. Efficient Ground-State Cooling of an Ion in a Large Room-Temperature Linear Paul Trap with a sub-Hertz Heating Rate. Phys. Rev. A, vol. 86, page 051402(R), 2012.
[Poulsen 12b] Gregers Poulsen & Michael Drewsen. Adiabatic cooling of a single trapped ion. arXiv:1210.4309, 2012.
[Prestage 09] J. Prestage, S. Chung, R. Thompson & P. MacNeal. Progress on small mercury ion clock for space applications. In Proc. IFCS wiht 22nd EFTF, page 54, 2009.
[Pyka 13] K. Pyka, N. Herschbach, J. Keller & T. E. Mehlsta ̈ubler. A High-Precision SegmentedPaul Trap with Minimized Micromotioin for an Optical Multiple-Ion Clock. Appl. Phys. B, vol. 114, pages 231–241, 2013.
[Quessada 03] Audrey Quessada, Richard P. Kovacich, Ir`ene Courtillot, Andre ́ Clairon, Giorgio Santarelli & Pierre Lemonde. The Dick effect for an optical frequency standard. J. Opt. B: Quantum Semiclass. Opt., vol. 5, page S150, 2003.
[Quinn 84] TJ Quinn. Documents concerning the definition of the metre. Metrologia, vol. 19, no. 4, pages 163–177, 1984.
[Raizen 92] M. G. Raizen, J. M. Gilligan, J. C. Bergquist, W. M. Itano & D. J. Wineland. Ionic Crytal in a Linear Paul Trap. Phys. Rev. A, vol. 45, page 6493, 1992.

116
[Ramsey 85] N. F. Ramsey. Molecular beams. Oxford University Press, 1985.
[Richard 16] P. Richard, H. Fang & R. David. Foundation for the redefinition of the kilogram. Metrologia, vol. 53, page A6, 2016.
[Riehle 17] Fritz Riehle. Optical clock networks. Nat. Photon., vol. 11, page 25, 2017.
[Riley 08] W. J. Riley. Handbook of frequency stabillity analysis. NIST Special Publication 1065, 2008.
[Roos 00] C. F. Roos, D. Leibfried, A. Mundt, F. Schmidt-Kaler, J. Eschner & R. Blatt. Experimental Demonstration of Ground State Laser Cooling with Electromagnetically Induced Transparency. Phys. Rev. Lett., vol. 85, page 5547, 2000.
[Rosenband 06] T. Rosenband, W. M. Itano, P. O. Schmidt, D. B. Hume, J. C. J. Koelemeij, J. C. Bergquist & D. J. Wineland. Blackbody radiation shift of the 27Al+ 1S0-3P0 transition. In Proc. EFTF Conf., page 289, 2006.
[Rosenband 07] T. Rosenband, P. O. Schmidt, D. B. Hume, T. M. Itano W. M. an Fortier, J. E. Stalnaker, K. Kim, S. A. Diddams, J. C. J. Koelemeij, J. C. Bergquist & D. J. Wineland. Observation of the 1S0 →3 P0 Clock Transition in 27Al+. Phys. Rev. Lett., vol. 98, page 220801, 2007.
[Rosenband 08] T. Rosenband, D. B. Hume, P. O. Schmidt, C. W. Chou, A. Brusch, L. Lorini, W. H. Oskay, R. E. Drullinger, T. M. Fortier, J. E. Stalnaker, S. A. Diddams, W. C. Swann, N. R. Newbury, W. M. Itano, D. J. Wineland & J. C. Bergquist. Frequency Ratio of Al+ and Hg+ Single-Ion Optical Clocks; Metrology at the 17th Decimal Place. Science, vol. 319, page 1808, 2008.
[Rowe 02] M. A. Rowe, A. Ben-Kish, B. DeMarco, D. Leibfried, V. Meyer, J. Beall, J. Britton, J. Hughes, W. M. Itano, B. Jelenkovic, C. Langer, T. Rosenband & D. J. Wineland. Transport of quantum states and separation of ions in a dual rf ion trap. Quantum Information and Computation, vol. 2, pages 257–271, 2002.
[Safavi-Naini 11] A. Safavi-Naini, P. Rabi, P. F. Weck & H. R. Sadeghpour. Microscopic model of electric-field-noise heating in ion traps. Phys. Rev. A, vol. 84, page 023412, 2011.
[Safronova 11] M. S. Safronova, M. G. Kozlov & Charles W. Clar. Precision Calculation of Blackbody Radiation Shifts for Optical Frequency Metrology. Phys. Rev. Lett., vol. 107, page 143006, 2011.
[Schioppo 17] M. Schioppo, R. C. Brown, W. F. McGrew, N. Hinkley, R. J. Fasano et al. Ultrastable optical clock with two cold-atom ensembles. Nat. Photon., vol. 11, page 48, 2017.
[Schmidt 05] P. O. Schmidt, T. Rosenband, C. Langer, W. M. Itano, J. C. Bergquist & D. J. Wineland. Spectroscopy Using Quantum Logic. Science, vol. 309, pages 749–752, 2005.

117
[Seck 14] C. S. Seck, E. G. Hohenstein, C.-Y. Lien & B. C. Stollenwerk P. R. adn Odom. Rotational State analysis of AlH+ by Two-Photon Dissociation. J. Mol. Spectrosc., vol. 300, page 108, 2014.
[Sheridan 11] K. Sheridan, W. Lange & M. Keller. All-optical ion generation for ion trap loading. Appl. Phys. B, vol. 104, pages 755–761, 2011.
[Sherman 12] J. A. Sherman, N. D. Lemke, N. Hinkley, M. Pizzocaro, R. W. Fox, A. D. Ludlow & C. W. Oates. High-Accuracy Measurement of Atomic Poloarizability in an Optical Lattice Clock. Phys. Rev. Lett., vol. 108, page 153002, 2012.
[Simon 98] E. Simon, P. Laurent & A. Clairon. Measurement of the Stark shift of the Cs hyperfine splitting in an atomic fountain. Phys. Rev. A, vol. 57, page 436, 1998.
[Skuja 01] L. Skuja, H. Hosona & M. Hirano. Laser-induced color centers in silica. Proc. SPIE, vol. 4347, pages 155–168, 2001.
[Snyder 75] JJ Snyder. Paraxial ray analysis of a cat’s-eye retroreflector. Applied optics, vol. 14, no. 8, pages 1825–1828, 1975.
[Stenger 01] J ̈orn Stenger, Christian Tamm, Nils Haverkamp, Stefan Weyers & Harald R. Telle. Absolute frequency measurement of the 435.5-nm 171Yb+-clock transition with a Kerr-lens mode-locked femtosecond laser. Opt. Lett., vol. 26, no. 20, pages 15891591, 2001.
[Sterr 04] U. Sterr, C. Degenhardt, H. Stoehr, Ch. Lisdat, H. Schnatz, J. Helmcke, F. Riehle, G. Wilpers, Ch. Oates & L. Hollberg. The optical calcium frequency standards of PTB and NIST. C. R. Physique, vol. 5, page 8, 2004.
[Takano 16] Tetsushi Takano, Masao Takamoto, Ichiro Ushijima, Noriaki Ohmae, Tomoya Akatsuka et al. Geopotential measurements with synchronously linked optical lattice clocks. Nat. Photon., vol. 10, page 662, 2016.
[Takeda 11] Masatoshi Takeda, Hiroki Kurisu, Setsuo Yamamoto, Hamazo Nakagawa & Katsunobu Ishizawa. Hydrogen outgassing mechanism in titanium materials. Appl. Surf. Sci., vol. 258, page 1405, 2011.
[Taylor 08] Barry N. Taylor & Ambler Thompson, editeurs. The international system of units (si). National Institute of Standards and Technology, 2008. This is the English translation of the BIPM SI Brochure in French, entitled “Le Syst`eme Internatioinal d’ Unit ́es”.
[Turchette 00a] Q. A. Turchette, D. Kielpinski, B. E. King, D. Leibfried, D. M. Meekhof, C. J. Myatt, M. A. Rowe, W. M. Itano, C. Monroe & D. J. Wineland. Heating of trapped ions from the quantum ground state. Phys. Rev. A, vol. 61, page 063418, 2000.
[Turchette 00b] Q. A. Turchette, C. J. Myatt, B. E. King, C. A. Sackett, D. Kielpinski, W. M. Itano, C. Monroe & D. J. Wineland. Decoherence and Decay of Motional Quantum States of a Trapped Atom Coupled to Engineered Reservoirs. Phys. Rev. A, vol. 62, page 053807, 2000.

118
[Udem 01] Th. Udem, S. A. Diddams, K. R. Vogel, C. W. Oates, E. A. Curtis, W. D. Lee, W. M. Itano, R. E. Drullinger, J. C. Bergquist & L. Hollberg. Absolute Frequency Measurements of the Hg+ and Ca Optical Clock Transitions with a Femtosecond Laser. Phys. Rev. Lett., vol. 86, pages 4996–4999, May 2001.
[Ushijima 15] Ichiro Ushijima, Masao Takamoto, Manoj Das, Takuya Ohkubo & Hidetoshi Katori. Cryogenic optical lattice clocks. Nat. Photon., vol. 9, page 185, 2015.
[van Ingen 96] R. P. van Ingen. Detection of electricfieldionized Rydberg atoms originating from laser ablation of Si. J. Appl. Phys., vol. 79, page 467, 1996.
[Wan 15] Yong Wan, Florian Gebert, Fabian Wolf & Piet O. Schmidt. Efficient Sympathetic Motional Ground-State Cooling of a Molecular Ion. Phys. Rev. A, vol. 91, page 043425, 2015.
[Weiss 10] Marc Weiss, Pradipta Shome & Ron Beard. On-Board GPS Clock Monitoring for Signal Integrity. In Proc. 42nd Annual PRRI Meeting, page 465, 2010.
[Wilson 11] A. Wilson, C. Ospelkaus, A. P. VanDevender, J. A. Mlynet, K. R. Brown, D. Leibfried & D. J. Wineland. A 750-mW continuous-wave, solid-state laser source at 313 nm for cooling and manipulating trapped 9Be+ ions. Appl. Phys. B, vol. 105, page 741, 2011.
[Wineland 87] D. J. Wineland, W. Itano, J. Bergquist & R. Hulet. Laser-Cooling Limits and Single-Ion Spectroscopy. Phys. Rev. A, vol. 36, page 2220, 1987.
[Wineland 98] D. J. Wineland, C. Monroe, W. M. Itano, D. Leibfried, B. E. King & D. M. Meekhof. Experiment Issues in Coherent Quantum-State Manipulation of Trapped Atomic Ions. J. Res. Natl. Inst. Stand. Technol., vol. 103, page 259, 1998.
[Wineland 02] D. J. Wineland, J. C. Bergquist, J. J. Bollinger, R. E. Drullinger & W. M. Itano. Quantum computers and atomic clocks. In P. Gill, editeur, Proc. 6th Symp. on frequency Standards and Metrology, page 361, 2002.
[Wolf 09] P. Wolf et al. Quantum Physics Exploring Gravity in the Outer Solar System: The Sagas Project. Exp. Astron., vol. 23, page 651, 2009.
[Wu ̈bbena 12] Jannes B. W ̈ubbena, Sana Amairi, Olaf Mandel & Piet O. Schmidt. Sympathetic cooling of mixed-species two-ion crystals for precision spectroscopy. Phys. Rev. A, vol. 85, page 043412, 2012.
[Yamanaka 15] Kazuhiro Yamanaka, Noriaki Ohmae, Ishiro Ushijima, Masao Takamoto & Hidetoshi Katori. Frequency Ratio of 199Hg and 87Sr Optical Clocks beyond the SI Limit. Phys. Rev. Lett., vol. 114, page 230801, 2015.
[Ye 05] Jun Ye & Cundiff T. Steven, editeurs. Femtosecond optical frequency comb: Principle, operation and applications. Springer, 2005.
[Young 99] B. C. Young, F. C. Cruz, W. M. Itano & J. C. Bergquist. Visible lasers with subhertz linewidths. Phys. Rev. Lett., vol. 82, page 3799, 1999.

119
[Zhang 17] Ping Zhang, Jian Cao, Hua-lin Shu, Jin-bo Yuan, Jun-juan Shang, Kai-feng Cui, Sijia Chau, Shao-mao Wang, Dao-xin Liu & Xue-ren Huang. Evaluation of blackbody radiation shift with temperature-associated fractional uncertainty at 10−18 level for 40Ca+ ion optical clock. J. Phys. B: At. Mol. Opt. Phys., vol. 50, page 015002, 2017.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:48.794Z
- **Text Length:** 217705 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 131 of 131
