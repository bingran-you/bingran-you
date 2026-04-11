# PDF Document: Edqvist - Characterization of Micromotion Induced by RF Phase Shift with Photon Correlation Detection in a Pau.pdf

**File Path:** Edqvist - Characterization of Micromotion Induced by RF Phase Shift with Photon Correlation Detection in a Pau.pdf

**Processed Date:** 2026-02-10T18:16:00.844Z

**File Size:** 13481.97 KB

**Total Pages:** 44

**Extracted Pages:** 44

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2859

**Title:** Characterization of Micromotion Induced by RF Phase Shift with Photon Correlation Detection in a Paul Trap

**Collection:** Large Files

---

## Extracted Text Content

Degree Project in the Field of Technology and the Main Field of Study Engineering Physics
Second cycle, 30 credits
Characterization of Micromotion
Induced by RF Phase Shift with
Photon Correlation Detection in a
Paul Trap
EBBA EDQVIST
Stockholm, Sweden 2022

TRITA – SCI – GRU 2022:242
www.kth.se

Master Thesis
Characterization of micromotion induced by RF phase shift with photon correlation detection in a Paul trap
Ebba Edqvist
Supervisors: Nick Schwegler Dr. Daniel Kienzler Prof. Jonathan Home Prof. Jack Lidmar
Department of Physics, School of Engineering Sciences
Trapped Ion Quantum Information, Institut fu ̈r Quantenelektronik Royal Institute of Technology ETH Zu ̈rich 106 91 Stockholm, Sweden 8093 Z ̈urich, Switzerland

Abstract
Trapped ions in a Paul trap can experience micromotion on top of the wanted secular motion. Micromotion can for example cause Doppler shifts in spectroscopy measurements, making it important to know the amplitude of the motion. In this master thesis we use the correlation between RF driving the trap and photons emitted by a single Beryllium ion during the fluorescence detection to determine the micromotion. This method also allows us to investigate the effect on micromotion from a phase mismatch b-
etween RF electrodes. The photon correlation method is compared to measuring the micromotion by taking the ratio between the micromotion sideband and the carrier transition, and also to a simulation of the residual RF fields in the trap by a finite element method. Finally, we vary the path length of RF lines, to tune the phase on individual RF electrodes. The result is that the phase mismatch effect is more than an order of magnitude less than expected from theory.
Sammanfattning
F ̊angade joner i en Paul-f ̈alla upplever mikroro ̈relse ut ̈over den  ̈onskade sekula ̈ra r ̈orelsen. Mikror ̈orelse kan till exempel orsaka Dopplerfo ̈rskjutning i spektroskopim ̈atningar, vilket g ̈or det viktigt att veta amplituden av ro ̈relsen. I det ha ̈r examensarbetet anv ̈ander vi korrelationen mellan RF som driver jonfa ̈llan och fotoner uts ̈anda fr ̊an en enskild berylliumjon under fluorescens-detektion, f ̈or att m ̈ata mikror ̈orelsen. Den h ̈ar metoden tilla ̊ter oss ocks ̊a att u-
nders ̈oka effekten p ̊a mikror ̈orelse fr ̊an en fasf ̈orskjutning mellan RF-elektroder. Fotonkorrelationsmetoden j ̈amf ̈ors med en ma ̈tning av mikror ̈orelse genom att ta f ̈orh ̊allandet mellan mikror ̈orelse-sidobandet och ba ̈rar- ̈overga ̊ngen, och ocks ̊a med en simulering av RF-f ̈alten i jonf ̈allan med en finit element-metod. Slutligen varierar vi l ̈angden p ̊a RF-kopplingen, f ̈or att justera fasen mellan individuella RF-elektroder. Resultatet  ̈ar att effekten fr ̊an fasf ̈orskjutni-
ngen  ̈ar mer  ̈an en storleksordning mindre  ̈an vad teorin f ̈orutsagt.
iv

Contents
Abstract . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . iv Sammanfattning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . iv
Contents v
1 Theory 1 1.1 Ion in a Paul trap . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1.2 Resonators for ion traps . . . . . . . . . . . . . . . . . . . . . . . . 5 1.2.1 Dual phase drive . . . . . . . . . . . . . . . . . . . . . . . . 7 1.3 Theory of micromotion detection . . . . . . . . . . . . . . . . . . . 7 1.3.1 Photon correlation method . . . . . . . . . . . . . . . . . . 7 1.3.2 Sideband method . . . . . . . . . . . . . . . . . . . . . . . . 9 1.3.3 RF amplitude modulation . . . . . . -
. . . . . . . . . . . . . 10
2 Setup 11 2.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 2.2 Resonator PCB . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12 2.3 Phase shifters . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14 2.4 Adapter board . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15 2.5 Modular Capacitive Divider . . . . . . . . . . . . . . . . . . . . . . 16 2.6 Modular Rectifier . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 2.7 Test of -
resonator connected to trap . . . . . . . . . . . . . . . . . . 19
3 Micromotion measurements 21 3.1 Photon correlation method . . . . . . . . . . . . . . . . . . . . . . 21 3.1.1 RF reference . . . . . . . . . . . . . . . . . . . . . . . . . . 21 3.1.2 Photon timestamps . . . . . . . . . . . . . . . . . . . . . . . 24 3.2 Sideband method . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26 3.2.1 Laser . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27
v

vi Contents
4 Results 28 4.1 Measurements of micromotion with ion displaced radially . . . . . 28 4.2 Comparison between experiments and simulation . . . . . . . . . . 31 4.3 Measurements with phase shifters . . . . . . . . . . . . . . . . . . 33
5 Summary and outlook 35
Bibliography 37

Chapter 1
Theory
In this chapter I give a short introduction to the theory behind ion trapping in Paul traps, with special focus on micromotion. The methods for detection of micromotion used in this thesis are explained and some useful equations derived. Trapped ions have been used for atomic clocks, high-precision spectroscopy of ions and molecular ions and is proposed as a good platform for quantum computation. In all these areas micromotion can contribute significantly to uncertainty in transition frequencies. -
Two causes of micromotion are stray electric fields in the trap, and a phase mismatch between RF electrodes. [1] The work of this master thesis is done on a trapped ion setup with the goal of doing precision spectroscopy on H+
2 . The micromotion causes a Doppler shift of the frequency to be measured and it introduces a systematic offset, which has to be understood and quantified. The goal of the project is to measure the micromotion amplitude and investigate the contribution from an RF phase mismatch. A model for the effect of a phase mismatch is presented in [2], together with methods of measuring micromotion. These methods have been used in many other setups [3–5]. In [1] and [3] a contribution from a phase mismatch -
within the measurement resolution is not seen. However, tuning the phase mismatch requires a setup where it is possible to change RF path length, and the effect on micromotion with a phase tuning has not yet been investigated experimentally.
1.1 Ion in a Paul trap
The physics of ion traps is explained following [6] and [2]. Trapping a charged particle with an electric field requires a confining potential in all three directions of space. However, a typical potential in three dimensions of the form
Φ=U1
2 αx2 + βy2 + γz2 (1.1)
1

2 Chapter 1. Theory
will not work, because it has to fulfill Laplace’s equation. Here U is a voltage α, β, γ some parameters, and x, y, z the directions in space. With
∇2Φ = 0. (1.2)
we must have
α + β + γ = 0, (1.3)
and the potential will not be confining since at least one parameter needs to be negative, making the potential anti-confining in this direction. In a Paul trap the potential is made confining in all three directions by including an oscillating electric field. The potential can then look like
Φ=U1
2 αx2 + βy2 + γz2 + URF cos (ΩRF t) 1
2 α′x2 + β′y2 + γ′z2 . (1.4)
The oscillating field is often referred to as RF field, where RF is short for radio frequency, since the required drive frequencies are typically in the radio frequency bands. The RF field has frequency ΩRF , voltage URF and parameters α′, β′, γ′. Because Laplace’s equation needs to be fulfilled at every point in time, the requirements for the parameters are
α + β + γ = 0, α′ + β′ + γ′ = 0. (1.5)
In a linear Paul trap this potential is implemented with four electrodes around the trap center in a quadrupole configuration. These are the RF electrodes where the oscillating voltage is applied. A sketch of the electrode configuration for the trap used in this master project can be seen in figure 1.1. The directions from the trap center towards the RF electrodes are referred to as the radial directions, and the direction along the trap axis is called the axial direction. In the axial direction t-
here are also electrodes where the static voltage is applied. The exact geometrical shape of the trap will determine the parameters {α, β, γ, α′, β′, γ′} in the potential.
The equation of motion for the ion can be written into a Mathieu differential equation,
u ̈i + (ai + 2qi cos (ΩRF t)) Ω2
RF
4 ui = 0, (1.6)
whereu⃗ is the position of the ion and i the three directions in space, in a coordinate system that decouples equation 1.6. For a linear Paul trap
ax = ay = − 1
2 az = − 4QκU
mZ02Ω2
RF
, (1.7)
and
qx = −qy = 2QURF
mR2Ω2
RF
, qz = 0, (1.8)

1.1. Ion in a Paul trap 3
x
y z
Figure 1.1: Sketch of the trap used in this master thesis project. A Beryllium ion and an H+
2 are trapped together. The green areas show the electrodes where static voltage is applied, and the orange and blue rods are the RF electrodes. The green endcaps are split vertically to be able to tilt the axial direction of the two ion crystal. The radial directions x, y and the axial direction z are also marked.
where κ is a geometrical factor, Q and m the charge and mass of the ion, Z0 the distance from the trap center to the axial electrodes and R the distance from the trap center to the RF electrodes. An approximation of the solution to first order is
ui(t) = u1i cos (ωit)
h
1 + qi
2 cos (Ωrf t)
i
. (1.9)
The first term describes what we refer to as the secular motion. If this term is dominating, the movement can be described as a harmonic oscillation with a
frequency of ωi = 1
2 ΩRF
q
ai + 1
2 q2
i and an amplitude of u1i. The other term has a lower amplitude and a faster frequency of ΩRF and is typically referred to as the micromotion. We would like to work in a regime where the micromotion can be assumed to be small and the ion’s movement can be treated as a harmonic oscillator. The secular amplitude can be reduced by laser cooling and sideband cooling, but this does not have a direct effect on the micromotion, since it is driven by the RF field. In a perfect trap if the ion is in the ce-
nter of the trap there will be no micromotion. However, real traps have small imperfections in the geometry, causing the RF fields to never cancel out completely, and no RF null point existing. Since the micromotion is driven by the RF field these effects will introduce micromotion. It is often called the intrinsic micromotion because it comes from the trap itself. Other effects can also cause more micromotion, called excess micromotion. One example of this is if there are stray electric fields in-
 the trap. This will displace the ion from the center of the trap. The Mathieu equation can then be written
u ̈i + (ai + 2qi cos (ΩRF t)) Ω2
RF
4 ui = Q ⃗Edc · uˆi
m , (1.10)

4 Chapter 1. Theory
with ⃗Edc a static electric field. The new solution is
ui(t) = (u0i + u1i cos (ωit)) 1 + qi
2 cos (ΩRF t) . (1.11)
The term
u0i = Q ⃗Edc · uˆi
mω2
i
, (1.12)
shows the displacement and the dependency of the micromotion amplitude on an electric field. A simple model of the trap would also suggest that excess micromotion can occur if the voltages at RF electrodes are out of phase. An estimation of the contribution from this is given in [2] as the following. For a phase difference φi, between two diagonal electrodes the voltage on the respective electrodes can be written
URF + = URF cos (ΩRF t + 1
2 φi), (1.13)
and
URF − = URF cos (ΩRF t − 1
2 φi). (1.14)
For a small phase this becomes
URF ± = URF cos (ΩRF t) ± URF
1
2 φ sin (ΩRF t). (1.15)
The electrodes are approximated as two parallel plates separated by a distance of 2R/α, where 2R is the actual distance, and α a compensation factor for the approximation, which can be determined numerically [7]. With the potential difference URF φ sin (ΩRF t), an electric field between the electrodes is
ERF i = URF φiα
2R sin (ΩRF t)uˆi. (1.16)
Solving the Mathieu equation again with this field included gives
ui(t) = (u0i + u1i cos (ωit)) 1 + qi
2 cos (ΩRF t) − 1
4 qiRαφi sin (ΩRF t). (1.17)
The total micromotion consists of the two parts caused by stray fields and by a phase shift. By assuming that u0i ≫ u1i we can look at only the micromotion, and it gets the form
u′
i = Ai sin (ΩRF t + δi)uˆi, (1.18)

1.2. Resonators for ion traps 5
where
Ai =
s
u0iqi
2
2
+ qiRαφi
4
2
, (1.19)
and
δi = arctan 2u0i
Rαφi
. (1.20)
A laser incident on an ion with micromotion will experience a modulation because of the first order Doppler shift with modulation index β. If the laser has a wave vector ⃗k, then the modulation index is defined by
⃗k ·u⃗ ′ = β sin (ΩRF t + δ) (1.21)
Two methods to measure β are described in section 1.3. It should be noted that this only gives information on the micromotion in the direction parallel to the laser. With this theory of micromotion we can look at the effects it has on spectroscopy. The second order Doppler shift for an ion is
∆νD2 = − 1
2
⟨v2⟩
c2 ν, (1.22)
wherev⃗ is the ion velocity, c the speed of light and ν the targeted transition frequency. Along direction i the contribution of micromotion from a stray field ⃗Edc is
∆νD2
ν i,stray
≈ −4
m2c2
Qqi ⃗Edc · uˆi (2ai + q2
i ) ΩRF
!2
, (1.23)
and from a phase φ
∆νD2
ν i,phase
≈ − (qiRαφΩRF )2
64c2 . (1.24)
1.2 Resonators for ion traps
Driving the RF for Paul traps typically require voltages in the order of 10-1000 V, and frequencies of 30-100 MHz. In this section one option for achieving high voltages for these frequencies is explained. An electronic resonant circuit has the property that it amplifies an RF input voltage at the resonance frequency, and suppresses inputs of all other frequencies. In ion traps this is used for generating RF signals with high voltages, and filtering out frequencies that are not desired and could c-
ause excitation of motional modes

6 Chapter 1. Theory
of the trapped ion. One approach to build a resonant circuit is to use discrete components on a printed circuit board (PCB), which is a good option for the frequency and voltage range used in ion traps. [8] In chapter 2 I explain the design of the resonator PCB used in the setup for this thesis. The energy alternates between being stored in the electric field of capacitors (C) and magnetic field of inductors (L). This includes capacitance and inductance that is not on the PCB, but coming from the -
trap itself and the RF connections leading to the trap. For a simple circuit with the elements in series the resonance frequency is
ω = √1LC . (1.25)
The quality factor Q is a value for characterizing resonators, and a measure of how many cycles it takes to dissipate the energy stored in a resonator. A lower dissipation in the circuit gives a higher gain. A high Q-value is therefore desired for a resonator. Dissipation in the circuit comes from the resistance, for example the resistance of the circuit wires and the inductor’s coil. Another important thing to consider is the impedance matching between the input source, which often has the impeda-
nce 50 Ω, and the circuit, which is typically not 50 Ω. If the impedances are not matched power will be reflected back from the resonator at the input. Impedance matching can be achieved by adding a matching network of capacitive or inductive elements to the resonator circuit. For a resonator that is impedance matched it can be shown that the Q-value is
Q = 2ω
∆ωV
, (1.26)
where ∆ωV is the −3 dB-voltage-bandwidth. [8] The voltage gain of a resonator connected to an ion trap will depend on the load introduced by the trap, and the connection to the trap. Since it is difficult to predict the voltage gain, it is convenient to have a way of measuring the RF amplitude at the trap. Connecting a measuring device directly to the resonator contributes with a significant load, and will completely change the resonator’s behavior, making it impossible to understand anything abou-
t the resonator. A solution to this problem, presented in [9], is using a capacitive divider, where a smaller capacitance C1 makes the connection between the resonator and the measuring device, and a larger capacitance C2 is connected to ground. The voltage measured after the capacitive divider is a pick-off given by
Vout = C1
C1 + C2
Vin. (1.27)
If C1 is small compared to the load of the rest of the resonator, typically 1 pF or lower, it will not influence the resonator. We choose C2 such that a few percent of the RF is picked off.

1.3. Theory of micromotion detection 7
In combination with the capacitive divider, a rectifier can also be used when measuring the RF amplitude in the trap. The output of the rectifier is a DC voltage proportional to an AC input voltage. This makes it a good tool for actively stabilizing the RF amplitude, which increases the motional coherence of the radial modes. [10]
1.2.1 Dual phase drive
In figure 1.2 two different schemes for applying voltage to the RF electrodes are shown. The first option, in figure 1.2a, is to apply RF to two diagonal electrodes, while the other two are grounded. The other option is to drive both electrode-pairs with RF, but with with one pair 180◦-out of phase to the other, which is seen in figure 1.2b. The advantage of this is that the same radial confinement can be achieved with less voltage. [11]
(a) RF applied to two electrodes, with the other two grounded.
(b) RF applied to all electrodes, with opposite phase to neighboring electrodes.
Figure 1.2: Sketch of two options for applying voltage to the RF electrodes. The view of the electrodes is in the axial direction of the trap, with an ion depicted in the center. The arrows show the RF potential.
1.3 Theory of micromotion detection
In this section two different methods of measuring micromotion are explained, the sideband method and the photon correlation method.
1.3.1 Photon correlation method
The photon correlation method uses the correlation between photon scattering rate and the RF cycle. With a detection device capable of single photon detection with a high time resolution, it is possible to measure this correlation. Figure 1.3 gives a visualization to why this correlation occurs. When the ion moves towards the

8 Chapter 1. Theory
Photon correlation
RF+ RF
RF- RF+
Laser
At fixed time t in the RF-cycle
k⋅u
S0 +
(J. Keller et al., Precise
ion optical clocks, 2015
Figure 1.3: A sketch of an ion in two different positions in the trap. A cross section of the trap is shown, with the axial direction out of plane. The RF electrodes are the orange and blue circles, with the directions of the radial modes shown as the dotted lines. The laser also has a component in the axial direction, and what is seen in this figure is the projection onto the radial directions. The arrows for the ion show the velocity at a specific point in time of the RF cycle, and that this wil-
l be the opposite depending on which side of the RF null along the radial directions the ion is placed.
laser, the laser frequency is Doppler shifted in the frame of the ion such that the excitation probability of the transition increases. The effect of the Doppler shift can be seen as the laser modulation −⃗k ·v⃗ ′, wherev⃗ ′ is the micromotion velocity. From equation 1.21 this is
−⃗k ·v⃗ ′ = −βΩRF cos (ΩRF t + δ). (1.28)
The opposite happens when the ion moves in the other direction, and because the velocity is driven by the RF, the scattering rate of photons from the ion will also vary with the RF cycle.
The correlation contains information about the phase. When the ion is moved across the RF null it will at one specific moment of time experience the opposite force from the RF field to what would have been the case on the other side of the trap. However, the RF field in equation 1.16, caused by a phase mismatch at the RF electrodes, does not change the direction that it pushes the ion when it crosses the RF null. This gives a way to distinguish micromotion from stray fields and from phase mismatch-
.

1.3. Theory of micromotion detection 9
The following derivation of the method follows [1]. The motion is approximated as a harmonic oscillator, with a frequency response of
A (ω − ω0) = 1
2
Γ
2 − i (ω − ω0)
(ω − ω0)2 + Γ
2
2 . (1.29)
The oscillator is excited by the electric field of the laser, which is written in the frequency domain as
E(ω) ∝ J0(β)δ(ω − ωL) + J1(β) (δ (ω − ωL − ΩRF ) − δ (ω − ωL + ΩRF )) . (1.30)
The fluorescence is proportional to the power of this excitation. In the time domain this is
S(∆, t) =
Z∞
−∞
A(ω − ω0)E(ω)eiωtdω
2
∝
J2
0 (β) |A(∆)|2 + J 2
1 (β) |A(∆ + ΩRF )|2 + |A(∆ − ΩRF )|
+2J0(β)J1(β) |A∗(∆)A(∆ + ΩRF ) − A(∆)A(∆ − ΩRF )| cos (ΩRF t + φ)
+2J 2
1 (β) |A(∆ + ΩRF )A∗(∆ − ΩRF )| cos (2ΩRF t + φ′),
(1.31)
where ∆ = ωL − ω0 is the detuning of the laser frequency. The last term can be neglected if β ≪ 1. The fluorescence then has the form
S0(β) + ∆S(β) cos (ΩRF t + φ). (1.32)
By measuring the density of arriving photons correlated to the RF period, it is then possible to detect micromotion amplitude. An advantage of this method is that we also gain information about the phase of the micromotion, which can be used to detect a possible phase mismatch between RF electrodes.
1.3.2 Sideband method
The sideband method compares the photon scattering rate from the ion when the laser is detuned to the micromotion sideband and the carrier transition. This derivation of the sideband method follows [2], where a laser with amplitude ⃗E0, wave vector ⃗k, frequency ωL and phase φL is used to excite a cycling transition of the ion with linewidth Γ. The electric field of the laser is written as
⃗E = ⃗E0 exp i⃗k ·u⃗ − iωLt + φL ≈ ⃗E0 exp i⃗k · u(⃗ 0 +u⃗ ′) − iωLt + φL , (1.33)
where the approximation is valid if the amplitude of the secular motionu⃗ 1 is small. With a Bessel function expansion for small secular motion amplitudes ofu⃗ ′ from equation 1.18 and 1.21, this can be written as
⃗E(t) = ⃗E0 exp (i⃗k ·u⃗ 0)
∞
X
n=−∞
Jn(β) exp (−iωLt + φL + in (ΩRF t + δ)). (1.34)

10 Chapter 1. Theory
The excitation probability for the transition coupled to this light field is given by the optical Bloch equations. The population of the excited state is given by the steady state solution
Pe ∝
∞
X
n=∞
Jn2(β)
(ω0 − ωL + nΩRF )2 + 1
2 Γ 2 , (1.35)
where Γ is the linewidth of the transition, and ω0 the resonance frequency. The excited state population is also proportional to the scattering rate of photons from the atom. The micromotion modulation index β can then be found by scanning the detuning of the laser frequency, recording the number of photons on a detector, and fitting this to equation 1.35.
1.3.3 RF amplitude modulation
Before this project started another method for minimizing micromotion was already used in the setup. If the RF amplitude is modulated at the frequency of the secular radial motion, the motion will be excited only if the ion is not in the trap center. When the ion is excited the photon counts are reduced. The ion is moved radially in the trap by applying a DC offset to the RF electrodes during the RF amplitude modulation. It is left in a position where the fluorescence is maximal. This is done sepa-
rately but interleaved for both radial directions, until the position converges, which should be at a position of minimized micromotion amplitude. RF amplitude modulation can also be used in combination with photon correlation. This method is described in [12], and uses an RF amplitude modulation frequency scanned around the frequency of the secular motion. The arrival times of photons are correlated to the excitation frequency, with the resulting signal strength proportional to the amplitude of i-
nduced secular motion, which in turn depends on the amount of excess micromotion. Because secular motion can be excited in all directions, depending on the frequency of the modulation, this method is sensitive to all components of micromotion, and can be used for micromotion compensation. This is an advantage compared to previous described methods that can only measure the micromotion amplitude along the laser direction. The disadvantage is that it is not sensitive to micromotion from an RF phase -
mismatch, and it can only detect relative strengths of micromotion amplitude without giving an absolute value. Since these last two points are both an important part of the project, this method was not used.

Chapter 2
Setup
This chapter explains the design of the RF resonator, and the RF line from the resonator to the trap, with the components that are important for the project.
2.1 Overview
An overview of the RF line with the components discussed in this chapter can be seen in figure 2.1.
Resonator
Rectifier + Capacitive divider
4x Phase shifter
Adapter
To trap
DC bias
RF in
Figure 2.1: Photo of the resonator and connection to the vacuum feedthrough, with the pieces discussed in this chapter marked. An RF signal generator is connected to the resonator, with four phase shifters attached at the output. Then the signal goes to an adapter, before it is connected to the vacuum feedthrough.
The experiment uses a monolithic linear Paul trap, a picture can be seen in figure 2.2. The ion trap is formed by patterned gold electrodes on a fused silica substrate [13]. The trap does not have dedicated shim electrodes for displacing the ion radially in the trap. Instead, this is done by applying a DC bias to the
11

12 Chapter 2. Setup
four RF electrodes. In this setup, all electrodes are directly linked to the outside, with no in-vacuum filtering. The connection is made with a vacuum feedthrough. The RF trapping voltage is generated by a resonant circuit consisting of discrete components on a PCB outside the vacuum chamber, driven by a single RF source. This is the resonator which is connected to the vacuum feedthrough, with phase shifters in between.
Figure 2.2: Photo of the ion trap used in the setup. The silica substrate is in the center of the picture with the golden traces leading to the electrodes visible. The trap is glued to a copper mount, which can also be seen. On both sides of the trap wirebonds connect the electrodes to PCBs, which carry the connection on to the vacuum feedthrough.
2.2 Resonator PCB
In our setup we implement the second scheme of applying RF voltage to the electrodes that is explained in section 1.2.1. On the resonator PCB this is done by splitting the input signal into two signals with a 180◦-phase difference. Each signal has a separate coil providing inductance for the resonance, and the two sides of the resonator are coupled by their common connection to the trap and the feedthrough, which also provides part of the inductance and capacitance for the resonance. The layout of-
 the PCB can be seen in figure 2.3, and a photo of the final PCB in figure 2.4. After the RF input on the left, a balun isolates the RF ground of the resonator and source, and generates the out of phase signals. The two sides of the resonator are symmetrical, with the first parts after the input being an inductor and a capacitor, used to match the impedance of the input (50 Ω) to the resonator, followed by the coil for resonance. On the PCB the coil has a large footprint, to be able to solder in c-
oils with different inductance if the resonance needs to be changed. There is also an SMA-connection that gives the possibility to connect a capacitive divider and a rectifier, to probe the amplitude of the RF signal and

2.2. Resonator PCB 13
later potentially stabilize the RF amplitude, which is explained in section 2.5 and 2.6. A bias tee of an inductor and a capacitor is used to apply a DC bias to each individual RF electrode, as described in [11].
Figure 2.3: Schematic of the PCB for the resonator. The many coils connected in parallel on the schematic are for making one footprint where any of these fit. On the actual PCB only one coil is chosen and soldered to the footprint. The components on the PCB are described in the main text.

14 Chapter 2. Setup
As part of this project I designed a new version of the resonator PCB, based on the previous design in [11]. There are two main differences to the old version. The first is to be able to shift the phase of each of the four outgoing signals, to compensate for possible differences in path length, which is described in section 2.3. The second change was to remove the capacitive divider and rectifier from the board and place them in modular and removable SMA housings, to be able calibrate them separat-
ely and remove them to see if they add noise, see section 2.5. Figure 2.4 shows the resonator PCB with and without components. The material of the PCB is Rogers 4530B. In the previous version a four-layer layout was chosen, with three ground planes, and this was kept in the new design. This was found to introduce significant parasitic capacitance to ground.
Figure 2.4: Photos of the resonator board, with and without the soldered components.
2.3 Phase shifters
The phase of the RF on the electrodes of the trap is determined by the signal path length leading from the resonator to the trap. To tune the phase of each individual RF electrode, four phase shifters were added. The phase shifters1 consisted of two SMA-connectors with the possibility to adjust the pathlength by screwing the two parts further or closer apart. The phase shifters can be seen in figure 2.5. When the phase shifter is screwed out maximally the pathlength was measured to be 3.5 mm longe-
r, which for a frequency of 67.4 MHz corresponds to 0.42◦. It takes about eight turns to screw the parts out fully, so with just one turn the length should be adjusted with 0.4 mm, or 0.05◦. The connection between the two parts can become unstable if they are screwed out too far. For a good connection we also
1Fairview Microwave, SMP2046.

2.4. Adapter board 15
Figure 2.5: Photo of two phase-shifters, one screwed in, and one with the two pieces apart.
needed to use the locking nut on the screw. This makes it hard to adjust the phase when the RF is on. The resonance frequency of the resonator also changes slightly when tuning the phase, and the drive frequency for the trap needs to be changed accordingly. Because of these reasons the phase could only be shifted when there was no ion in the trap.
2.4 Adapter board
Changing the output connector to SMA at the resonator meant that an interface between the SMA cables and the four rods of the vacuum feedthrough was needed. For this a simple adapter board, routing the signal from SMA connectors to pin terminal connectors, was designed. Figure 2.6 shows pictures of the adapter board. The connection between the adapter and the feedthrough was then made with barrel connectors, see figure 2.7.
Figure 2.6: Photos of the adapter board.

16 Chapter 2. Setup
Figure 2.7: Photo of adapter board connected to the vacuum feedthrough with barrel connectors. The cylinder to the right can be slid left to fully close the housing and shield the RF lines.
It is important that the RF signal is well shielded so it does not pick up other RF signals. For this the adapter board and feedthrough rods were placed inside a housing. Between the phase shifters and the adapter board, bendable SMA cables2 were connected, with a length of 50 mm.
2.5 Modular Capacitive Divider
The use of capcitive dividers to measure RF amplitude in the resonator is explained in section 1.2. Equation 1.27 gives how much voltage is picked off by the capacitive divider. With values of C1 = 1 pF and C2 = 100 pF the pick-off is 1 %, which is chosen to have a measurable signal after the capacitive divider, while minimizing the load of the measurement device seen by the resonant circuit. Inspired by [9], the capacitive divider was placed in its own shielded case3 separate from the resonator, -
with the ability to attach it to an SMA connection. The circuit diagram together with a photo of the case and circuit is seen in figure 2.8. The advantage with this design is that the signal after the capacitive divider will be more protected from picking up extra RF signal as it is shielded from the resonator. It is also possible to use the setup without the capacitive divider, and to test and calibrate the pieces separately. A test of the capacitive divider was made by connecting it to a network-
 analyzer and measure the S21-value, the transmitted signal. The result can be seen in figure 2.9. In the range 50-80 MHz where we want to drive the trap the transmitted
2Huber+Suhner Inc., MINIBEND R-2.5. 3Crystec Corporation, SMA-KIT-1.5MF

2.5. Modular Capacitive Divider 17
Figure 2.8: Circuit diagram of the capacitive divider and photo of the components soldered in the shielded case. The capacitance values are C1 = 1 pF and C2 = 100 pF.
signal strength does not depend much on the frequency. The signal loss is 34.6 dB at 60 MHz, which corresponds to an output voltage closer to 2 % of the input, rather than the expected 1 % from the chosen values of the capacitors. However, simulations confirm that this is because of the 50 Ω-termination of the measuring device (Fieldfox network analyzer). At the drive frequency the capacitive divider was also tested by measuring the output voltage with an oscilloscope for a known input amplitude p-
rovided by an RF signal generator. We found that this results in a 1 % output, agreeing with equation 1.27.
10 20 30 40 50 60 70 80 90 100 frequency (MHz)
−40
−39
−38
−37
−36
−35
−34
−33
S21 (dB)
Cap. div. 1 Cap. div. 2
Figure 2.9: Measurement of S21 for the two capacitive dividers.

18 Chapter 2. Setup
2.6 Modular Rectifier
A rectifier outputs a DC voltage linearly dependent on an input AC voltage amplitude. This makes it useful for measuring the RF amplitude in the resonator. An advantage compared to only using a capacitive divider is that a low pass filter can be used after the rectifier, to filter out RF pickup. A similar rectifier design can be found in [10], where it is placed in a housing and used for active stabilization of the RF amplitude. A photo of the rectifier and the circuit can be seen in figure 2.10.
Figure 2.10: Circuit diagram of the rectifier and photo of the components soldered in the shielded case. The diodes used are from Diodes Incorporated with part number 1N5711WS-7-F.
To calibrate the rectifiers they were connected to an RF source and the output DC voltage was measured with a multimeter. The input AC amplitude was measured with an oscilloscope before the rectifier. It was also compared to a simulation of the rectifier using LT spice from [11]. The results are shown in figure 2.11. Linear fits from the measurements of the two rectifiers were made, to later be used for converting measurements by the rectifiers.

2.7. Test of resonator connected to trap 19
0 2 4 6 8 10 V0IPn (V)
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
VOut (V)
Measurement Rect 1 Measurement Rect 2 LT Spice Simulation Fit LT Spice Simulation
Figure 2.11: Measurement of output voltage for the two rectifiers compared with a simulation.
2.7 Test of resonator connected to trap
With the resonator connected to the trap, the reflected power S11, was measured with a network analyzer, shown in figure 2.12. A resonance at a frequency of 69.13 MHz can be seen, where the drive frequency is on resonance with the resonator. At −3 dB reflection power, the width of the peak is 0.8 MHz. Using equation 1.26, the Q-value is Q = 2 · 69.13/0.8 ≈ 43.2. This is comparable to measurements of the previous design of the PCB. Doing this measurement an unexpected second peak was discovered aro-
und 4 MHz. Simulations showed that it is a resonance introduced by the coil and capacitor forming the bias tee for the DC bias on each electrode. The capacitance for the phase shifters were measured to 3.2 pF each with an RLC-meter, while the cables were 7.2 pF each. This introduces a non-negligible capacitance on the order of the trap itself to the RF lines which lowers the resonance frequency. Capacitance is also added by the four layers of the PCB, and the connection to the trap. Overall the re-
sonator circuit is dominated by parasitic capacitance and inductance. It makes it harder to achieve a high voltage required to trap the ions. If not enough voltage is reached, and the confinement for the ion is not enough to be trapped this becomes a problem, but we were still able to trap ions using this setup. A voltage of 50 V could be reached with an input RF power below 2 W at a frequency of 67.4 MHz.

20 Chapter 2. Setup
0 20 40 60 80 100 Frequency (MHz)
−10
−8
−6
−4
−2
S11 (dB)
Figure 2.12: Measurement of S11, the reflected power. It is reduced at two frequencies, showing two resonances. The higher resonance frequency is used to drive the trap, the other is unwanted.

Chapter 3
Micromotion measurements
In this chapter the details on how the micromotion measurements were implemented are explained, for the photon correlation method and for the sideband method. The main parts for the photon correlation method is getting a reference to the RF signal and the analysis of the timestamps of detected photons.
3.1 Photon correlation method
3.1.1 RF reference
A crucial part of the photon correlation measurements is referencing the arrival times of the photons with the RF driving the trap. For this the RF source is connected to a coupler, that samples a smaller part of the signal. The signal is then converted to a square wave by a separate board.1 The main component of the experiment control system is a Zedboard, which registers the signals from a photomultiplier tube (PMT) that a photon is detected [14]. The RF square wave is connected to the Zedboard -
similarly to the PMT, but to a separate input port. For both inputs (PMT and RF), a detection event is registered on a rising edge of the signal, and the clock cycle of the event saved. The Zedboard uses a 250 MHz clock with cycle time 4 ns, meaning that if a rising edge is detected for a clock cycle, the actual event could have happened at any point during this time window. The RF drive used in the experiment is ΩRF = 2π × 64.3 MHz, which gives a period of T = 1/(64.3 MHz) ≈ 15.6 ns. This is not -
much larger than the clock cycle. Since the sampling rate is limited, several consecutive points must be taken to get a good phase reference. We acquire the phase reference for each experiment by looking at the pattern of when edge detections occur. Figure 3.1 shows two examples of RF edges matched to
1The part number for the board is DC1766A-A, Analog Devices. It needs to be shorted between pin 9 and the SMA connector.
21

22 Chapter 3. Micromotion measurements
120 130 140 150 160 170 Time (ns)
0
1
RF detection reconstructed RF Clock cycle
120 130 140 150 160 170 Time (ns)
0
1
RF detection reconstructed RF Clock cycle
Figure 3.1: The figure shows clock cycles and detected RF edges. This is matched to two possible RF square waves, showing the difference between the two extreme cases.
an RF signal. Because of relation between the RF period and the clock cycle time an edge is usually detected every fourth clock cycle, that is with a spacing of 16 ns. This means the clock cycle window gets shifted with t = 16 ns − T ≈ 0.448 ns per RF period, in comparison to the RF signal. However, after some time this shift has moved the window far enough for the detection to occur in the clock cycle before. This will be seen as a spacing of three clock cycles between detections instead of four.-
 When this happens the detected edge must be within a distance of t to the real RF edge. If enough consecutive points are taken for this event to happen, an RF reference can be taken with an uncertainty of t. Increasing the number of detection events, the pattern gives more information, and the uncertainty of the RF reference can be lowered. A simulation of this effect can be seen in figure 3.2. For the experiments the RF edges during 1.4 μs were taken, which corresponds to 350 clock cycles. In pr-
actice, when we consider larger data sets it is convenient to look at all detections overlapped on one period, as in figure 3.3. By just taking the first point in the 4 ns-detection window the reference to the RF can be determined. This method assumes that the frequency is well-known. To ensure that the relation between the RF frequency and the sampling frequency do not drift, the RF source and the Zedboard were both referenced to the same 10 MHz-Rubidium clock.

3.1. Photon correlation method 23
0 50 100 150 200 Nr of samples
0.0
0.1
0.2
0.3
0.4
Error (ns)
max average
Figure 3.2: The average and maximum error of the RF phase from a simulation of the sampling. The simulation of the data in this plot was made by Martin Stadler.
0.0 2.5 5.0 7.5 10.0 12.5 15.0 Time (ns)
0
1 RF detection reconstructed RF
Figure 3.3: The figure shows detected edges of the RF square wave seen during one RF period. There are only detections during the first 4 ns of the period because this is the clock cycle window where a rising edge could have been detected. The phase of the RF wave is taken such that it rises on the first detected edge, showing that this gives a reconstruction of the RF square wave where all detected edges fit.

24 Chapter 3. Micromotion measurements
3.1.2 Photon timestamps
A photomultiplier tube (PMT) can detect single photons with high temporal resolution. When a photon is registered by the PMT, it sends the signal to the experiment control system. When we detect this signal with the Zedboard there will also be an uncertainty window of 4 ns from the clock cycle. A single measurement consists of all photons arriving during a detection window of 250 μs. The number of photons is typically between zero and ten. We detune the laser frequency to −70 MHz, close to the mic-
romotion sideband, to maximize the photon correlation signal, which can be seen in equation 1.31. The value is chosen a few MHz below the micromotion frequency to avoid heating the ion. The RF phase reference, obtained as described in the previous section, is used to determine the correlation between photon arrival times and the RF drive. For every photon timestamp we find at what point in the trap RF cycle it arrived. The photon counts are then binned into 30 bins of the RF cycle. As explained by-
 equation 1.31, the photon counts per bin show a correlation to the RF. To get a correlation signal with low uncertainty many photons are needed, and the measurement of 250 μs is done between 8000 and 30000 times, to build up statistics. A typical data set is shown in figure 3.4. The data is fitted to equation 1.32 with fit parameters S0, ∆S and φ. From equation 1.31 and the values of S0 and ∆S, a value for the modulation index β can be extracted.
0.0 2.5 5.0 7.5 10.0 12.5 15.0 Time (ns)
0
500
1000
1500
Photon counts/bin
Fit: (S0 = 1452, ∆S = 380, φ = 133◦) Data
Figure 3.4: An example of a photon correlation plot. For this experiment an RF frequency of 64.3 MHz was used and the ion is displaced 0.22 μm from the center of the trap to introduce excess micromotion and show a clear correlation signal. A total of 45476 photons were counted during this experiment.

3.1. Photon correlation method 25
The uncertainty for the counts in a bin is estimated by considering the probability of a photon arriving in a certain bin of size s. Assuming equal probability during a 4 ns-window gives a probability of p = s/4. A count can then be seen as 0 or 1 from a Bernoulli distribution with probability p, which gives a variance of σ2 = p(1 − p). If the counts are assumed to be independent the variances can be added and the total variance for the counts in a bin is np(1 − p), with n being the number of coun-
ts. Photon shot noise is also a source of uncertainty, with a
standard deviation of √n for the counts in a bin. Equation 1.31 that is used to find the micromotion modulation index β is valid if the intensity of the laser is low. The laser intensity at the ion corresponds to approximately 0.5 saturation intensity. Simulations based on a method described in [1] showed that this intensity is low enough to not influence the photon correlation. A scan of laser frequency for the photon correlation signal ∆S/S0 is shown in figure 3.5, together with the expected sig-
nal from equation 1.31. The natural linewidth of the transition and a value of β corresponding to the height of the signal peak is assumed when using equation 1.31. The experimental data does not match the theory curve over the whole range. It is not clear where this discrepancy comes from, since the effect of power broadening is, according to the simulation, too small to account for this.
−80 −60 −40 −20 0 Laser frequency (MHz)
0.0
0.1
0.2
0.3
0.4
0.5
∆S/S0
β = 0.081 β = 0.044
Figure 3.5: The data points show the measured photon correlation signal strength versus laser frequency. Blue and red show data where the ion is displaced at two different radial positions to get a different micromotion amplitude. The lines show equation 1.31 with a value of β such that the height of the peak agrees with the data. It is clear that a measurement of β is most sensitive with a detuning to the micromotion sideband.

26 Chapter 3. Micromotion measurements
3.2 Sideband method
The micromotion was also measured with the sideband method, introduced in section 1.3.2. The frequency of the laser was scanned over a range spanning from the first micromotion sideband at −ΩRF to the carrier at 0 MHz. To compensate for background scattered light the measurement was done also with no ion, and the mean for the background counts were subtracted from the measurement with ion. The resulting photon intensity was fitted to equation 1.35, with fit parameters amplitude, the modulation ind-
ex β and the linewidth Γ. Figure 3.6 shows an example measurement. An extra sideband can be seen around −40 MHz. We have not been able to find an explanation for it, and in the analysis it was ignored by excluding data around the peak from the fit. The data for frequencies above the resonance was also excluded from the fit, since the lineshape changes when the ion is heated.
−80 −60 −40 −20 0 Laser frequency (MHz)
200
400
600
800
1000
Photon counts
Fit: β = 0.9, Γ = 27.4 Data
Figure 3.6: Example of micromotion measurement with the sideband method, together with a fit of equation 1.35. The ion was displaced radially to induce micromotion. The data for frequencies between the dotted lines at −55 MHz and −35 MHz, and above the third dotted line at −2 MHz is not included in the fit, as explained in the main text.

3.2. Sideband method 27
3.2.1 Laser
Both methods used in this thesis are sensitive to micromotion only along the direction of the laser used to probe the micromotion sidebands. For the measurements in this thesis we used the detection laser at 313 nm. To scan the frequency of the laser, an acousto-optical modulator (AOM) can be used. The laser has a direction in the trap with an angle of 45◦ to all motional modes. To measure the other components of the micromotion we tried aligning another laser from the bottom of the trap upwards, -
which would give us access to the micromotion amplitude in different directions. Due to the construction of the chamber, this did not work, because there was too much scattered light and it was not possible to distinguish to photons from an ion. In the setup there are two additional laser beams that can be used to target a Raman transition. These could not be used in this project, because the power was too low at the required frequency of the micromotion sideband, since the wrong type of AOM was u-
sed. In the experiments we did not take into account the diffraction efficiency curve of the AOM, to see how much the laser power changes with frequency. If the laser power goes down when the frequency is far detuned the signal would become smaller relative to the zero detuning signal. However, this does not explain the discrepancy in the frequency scan in section 3.1.2, because the power at zero detuning is already low enough to not have an effect on the validity of equation 1.31.

Chapter 4
Results
This chapter presents the main results. The micromotion measured with the photon correlation method is shown for different radial displacements of the ion from the trap center. The photon correlation method is compared to the sideband method and a simulation. We give an estimation for the phase mismatch of RF electrodes and show that this does not change as much as expected when introducing extra path length on one RF line.
4.1 Measurements of micromotion with ion
displaced radially
In figure 4.1 the result from measuring micromotion with the photon correlation method is shown. These measurements were done with the old resonator in the setup. The ion is displaced radially from the trap center by applying offset voltages to the RF electrodes. Moving the ion away from the trap center will increase micromotion because of the residual RF field. The relative position of the ion for a certain applied voltage can be found from simulations of the trap, and the center of the trap is t-
aken to be the point where the micromotion is measured to be lowest. The lowest value for the modulation index was measured to β = (0.49 ± 1) × 10−3. Before the measurement micromotion compensation was done, as described in section 1.3.3, and the scan is performed with the compensated point in the center. What we observe is that the minimum of the photon correlation method often does not correspond exactly to the minimum from the micromotion compensation. We do not yet know the reason for this. It-
 is reported in [1] that an RF pickup on the PMT can shift the minimum of the correlation, which could be an explanation. The phase of the correlation signal can be seen in figure 4.2, together with a fit of equation 1.20. The fit gives a value of Rαφ = (1.3 ± 0.4) × 10−8m. An estimation of φ can be done by R = 0.3 mm, which is the distance between an
28

4.1. Measurements of micromotion with ion displaced radially 29
0.0 0.1 0.2 Radial displacement (μm)
0.00
0.05
0.10
0.15
0.20
0.25
Modulation index β
0 5 10 15 Time (ns)
1250
1500
1750
0 5 10 15 Time (ns)
1250
1500
1750
0 5 10 15 Time (ns)
1250
1500
1750
Figure 4.1: Measurement of micromotion with photon correlation method, where the ion is displaced radially in the trap. The three smaller figures shows the photon correlation curve for three different points, together with a fit of equation 1.32, to illustrate the correlation.

30 Chapter 4. Results
RF electrode and the trap center, and α = 1, which would be the case if the RF electrodes were infinite parallel plates, from the approximation in [2]. This yields φ = 0.0024◦ ± 0.0008◦. For the second order Doppler shift this results in a contribution of ∆νD2/ν = 9.2×10−20, using equation 1.24. However, it is important to note that the uncertainty of the phase data gets large close to the center of the trap, because the measured micromotion is small. With a small amplitude of the correlation the -
fit for the phase gets worse, and because of the small number of scattered photons it takes a long time to gather more statistics. It is possible that if more data had been taken the fit would have shown a sharper phase transition, which means a smaller phase mismatch. Thus, this data rather gives an upper bound to the phase mismatch in the trap.
−0.1 0.0 0.1 0.2 Radial displacement (μm)
−100
0
100
Phase (◦)
Figure 4.2: The phase of the photon correlation with the ion displaced radially in the trap, together with a fit of equation 1.20. The fit parameter is Rαφ = (1.3 ± 0.4) × 10−8m which gives φ = 0.0024◦ ± 0.0008◦.
The micromotion was also measured by scanning both radial directions, giving a 2d-map of the micromotion in the trap, see figure 4.3. Because the measurement is only sensitive to micromotion along the direction of the laser, the micromotion minimum is seen as a diagonal line in the figure. On this line the phase of the correlation also changes.

4.2. Comparison between experiments and simulation 31
−0.50 −0.25 0.00 0.25 0.50 1st radial direction (μm)
−0.4
−0.2
0.0
0.2
0.4
2nd radial direction (μm)
0.02
0.04
0.06
0.08
0.10
β
(a) Micromotion modulation index β.
1st
radial
direction
(μm)
0.008
0.010
0.012
2ndradialdirection(μm)
0.006 0.008 0.010
0.012
Phase (◦)
−100
0
100
(b) Photon correlation phase φ.
Figure 4.3: Photon correlation measurements where the ion is displaced in the two radial directions.
4.2 Comparison between experiments and
simulation
To verify the method we compare the results from the photon correlation method with the sideband method and a simulation. The simulation provides the electric fields in the trap volume with the boundary element method in Comsol, from which the micromotion can be calculated. The three different methods can be seen in figure 4.4. For small displacements the sideband method gives a larger value than the other methods. One reason for this is that the micromotion sideband gets small, making the fit les-
s accurate. The photon correlation method on the other hand gives a much lower modulation index than the other methods. For larger β it also flattens out. This can be explained by the fact that the fluorescence ∆S/S0 used to find β is not linear in β for larger values, and that the third term of equation 1.31 starts to become large. However, we expect to observe this effect only for values of ∆S/S0 twice as large as we have. In fact, if two times larger value of ∆S/S0 had been observed, the values-
 for β would agree better with the simulation overall. The reason for this discrepancy has not been found.

32 Chapter 4. Results
−1.0 −0.5 0.0 0.5 1.0 Radial displacement (μm)
0.0
0.1
0.2
0.3
0.4
0.5
0.6
Modulation index β
Simulation Photon correlation Sideband 2× Photon correlation
Figure 4.4: A comparison of the modulation index, from sideband and photon correlation measurements, and calculated from the residual RF field from a simulation of the trap. The modulation index if twice the value of ∆S/S0 had been observed is also plotted, to show that a factor of 2 is missing for getting a good agreement with the simulation.

4.3. Measurements with phase shifters 33
4.3 Measurements with phase shifters
To investigate the effect of micromotion by adding path length to one RF line we used the new resonator with phase shifters. First measurements with the photon correlation method were taken with all phase shifters set to no additional phase. Then a single phase shifter was extended to add 2.2 mm in path length, which for a drive frequency of 67.4 MHz corresponds to a phase of 0.27◦. The results are shown in figure 4.5. The fit with no added phase gives a mismatch of φ = 0.0095◦ ± 0.0007◦, and with-
 phase shift φ = 0.0055◦ ± 0.0010◦. The difference between the two measurements is significant according to the error of the fit. The smaller phase mismatch is seen when we added length to the phase shifter. We do not know if the path lengths are perfectly matched to begin with, so this suggests that there is a phase mismatch that is partly compensated by the phase shift. However, the measured difference of 0.004◦ is far from the 0.27◦ that were added by the phase shifter. Thus, the effect of an a-
dded phase mismatch can not be explained by the model presented in [2]. These measurements made with the new resonator both gives a higher value for the phase mismatch than the measurement with the old resonator. It is also seen for the modulation index, where the lowest value with the new resonator was measured to β = 0.030 ± 0.009. The higher values for the new resonator indicates that the length matching is worse. The traces on the resonator PCB was designed to be equally long, which was also t-
he case for the old design of the resonator, making it unlikely to introduce a length difference. It could instead be caused by the different connection to the vacuum feedthrough, or a difference in length or capacitance of the phase shifters or cables.

34 Chapter 4. Results
−0.6 −0.4 −0.2 0.0 0.2 0.4 0.6 Radial displacement (μm)
−50
0
50
100
Phase (◦)
No phase shift Phase shift Expected phase
Figure 4.5: Phase from the photon correlation method when moving the ion radially in the trap. Data together with a fit is shown with no phase shift added, and with one phase shifter extended 2.2 mm, which is 0.27◦ for a frequency of 67.4 MHz. The blue line shows equation 1.20 with φ = 0.27◦ inserted.

Chapter 5
Summary and outlook
This project has increased our knowledge of the micromotion in the trap. Still, some things remain unknown and more work is needed to get a more complete understanding of the micromotion. First, what needs to be investigated further is the discrepancy between the simulation and the measurements of the micromotion. It was seen that even with no ion and only measuring stray light in the trap there was some correlation between photon arrival times and the RF cycle. This could be caused by an RF picku-
p at the PMT, where it would be more likely to register false photons at certain times during the RF cycle. If this is taken into account in the analysis of the photon counts the result of the photon correlation method might change, but it is not clear if this is the only reason for the discrepancy. Secondly, it is necessary to measure the micromotion amplitude in all directions. With the current AOM there is only one laser that can be used, and the methods described and used in this project can o-
nly measure the component that is parallel to the laser. Furthermore, to measure larger values of the modulation index β the second sideband term needs to be included in equation 1.31. A better model is needed to explain the measurements of the phase mismatch. It has also been seen in other ion traps that the effect of a phase mismatch seems to be smaller than expected from the simple model described in this project. It would be interesting to see if a larger effect can be seen if the phase is cha-
nged much more than what was done in this project, for example by adding a longer cable to one of the paths. When measuring the photon correlation signal and scanning the frequency it was seen that the shape of the signal did not match the expected line. One thing that was not considered during the experiments was the dependency of the power on the laser frequency. It would be useful to know how much it changes over the frequency range used for the measurements. Some issues with the resonator desi-
gn were discovered during this project. One problem was the extra resonance around 4 MHz. This means that the resonator
35

36 Chapter 5. Summary and outlook
does not filter out frequencies around this value, but instead amplifies signals with these frequencies. We work with secular frequencies in the range of 1-10 MHz so noise in this range can excite motion of the ion and cause heating. By exchanging the coils at the DC-bias tee causing this resonance to resistors (100 kΩ), the problem was solved without altering the rest of the resonator. The new design with added phase shifters and SMA cables as part of the resonator causes extra capacitance. It is-
 currently not a limiting factor, since sufficient high trap voltages can be reached with the current RF chain. If we would like to operate at a higher drive frequency or use a lower RF input voltage another solution would have to be considered. Since it was discovered that there was little effect on the micromotion from the phase shifters it could be reasonable to remove them in the future. To summarize, during this project I designed a new version of a resonator, which I assembled and tested. It-
 was installed in the setup and we could trap ions with it. I measured micromotion, finding both amplitude and phase information with the use of the photon correlation method. This included making a setup to get the RF phase reference and writing a script to analyze photon arrival times. With the new resonator it was possible to shift phase between RF electrodes. I found that while there was a significant change in the measured phase mismatch, it was smaller than predicted from theory. The smalles-
t micromotion modulation index was measured with the old resonator to β = (0.49 ± 1) × 10−3. The phase mismatch between RF electrodes was measured to be smaller than φ = 0.0024◦ ± 0.0008◦. The value of the phase mismatch should enable high precision spectroscopy with a systematic second order Doppler shift smaller than ∆νD2/ν = 9.2 × 10−20.

Bibliography
[1] J. Keller et al., Precise determination of micromotion for trapped-ion optical clocks, Journal of Applied Physics 118, 104501 (2015).
[2] D. Berkeland et al., Minimization of ion micromotion in a Paul trap, Journal of Applied Physics 83 (1998).
[3] K. Pyka et al., A high-precision segmented Paul trap with minimized micromotion for an optical multiple-ion clock, Applied Physics B 114, 231 (2013).
[4] S. Hannig et al., Towards a transportable aluminium ion quantum logic optical clock, Review of Scientific Instruments 90, 053204 (2019).
[5] J. S. Chen, Ticking near the Zero-Point Energy: towards 1 × 10 -18 Accuracy in Al + Optical Clocks, PhD thesis, University of Colorado, 2017.
[6] D. Leibfried et al., Quantum dynamics of single trapped ions, Rev. Mod. Phys. 75, 281 (2003).
[7] D. J. Wineland et al., Laser-cooling limits and single-ion spectroscopy, Phys. Rev. A 36, 2220 (1987).
[8] D. Gandolfi, Compact RF Amplifier for Scalable Ion-Trap, PhD thesis, Universit`a degli studi di Trento, Universit ̈at Innsbruck, 2011.
[9] Y. Park et al., A New Measurement Method for High Voltages Applied to an Ion Trap Generated by an RF Resonator, Sensors 21 (2021).
[10] K. G. Johnson et al., Active stabilization of ion trap radiofrequency potentials, Review of Scientific Instruments 87, 053110 (2016).
[11] A. Thomsen, Design of a two Phase Radio Frequency Drive for Ion Traps using a Lumped Elements Resonator, Semester thesis, ETH Z ̈urich, 2020.
[12] D. P. Nadlinger et al., Micromotion minimisation by synchronous detection of parametrically excited motion, (2021), arXiv:2107.00056.
37

38 BIBLIOGRAPHY
[13] S. Ragg et al., Segmented ion-trap fabrication using high precision stacked wafers, Review of Scientific Instruments 90, 103203 (2019).
[14] V. Negnevitsky, Feedback-stabilised quantum states in a mixed-species ion system, PhD thesis, ETH Zu ̈rich, 2018.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:00.844Z
- **Text Length:** 62195 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 44 of 44
