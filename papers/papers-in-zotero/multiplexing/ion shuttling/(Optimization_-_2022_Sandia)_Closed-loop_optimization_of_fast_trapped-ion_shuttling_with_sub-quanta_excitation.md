# PDF Document: (Optimization - 2022 Sandia) Closed-loop optimization of fast trapped-ion shuttling with sub-quanta excitation.pdf

**File Path:** (Optimization - 2022 Sandia) Closed-loop optimization of fast trapped-ion shuttling with sub-quanta excitation.pdf

**Processed Date:** 2026-02-10T18:17:17.793Z

**File Size:** 801.08 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 677

**Title:** (Optimization - 2022 Sandia) Closed-loop optimization of fast trapped-ion shuttling with sub-quanta excitation

**Collection:** Multiplexing > Ion Shuttling

---

## Extracted Text Content

www.nature.com/npjqi

1234567890():,;

ARTICLE OPEN
Closed-loop optimization of fast trapped-ion shuttling with sub-quanta excitation
Jonathan D. Sterk 1 ✉, Henry Coakley1, Joshua Goldberg1, Vincent Hietala1, Jason Lechtenberg1, Hayden McGuinness1, Daniel McMurtrey1, L. Paul Parazzoli 1, Jay Van Der Wall1 and Daniel Stick 1
Shuttling ions at high speed and with low motional excitation is essential for realizing fast and high-ﬁdelity algorithms in many trapped-ion-based quantum computing architectures. Achieving such performance is challenging due to the sensitivity of an ion to electric ﬁelds and the unknown and imperfect environmental and control variables that create them. Here we implement a closedloop optimization of the voltage waveforms that control the trajectory and axial frequency of an ion during transport -
in order to minimize the ﬁnal motional excitation. The resulting waveforms realize fast round-trip transport of a trapped ion across multiple electrodes at speeds of 0.5 electrodes per microsecond (35 m·s−1 for a one-way transport of 210 μm in 6 μs) with a maximum of 0.36 ± 0.08 mean quanta gain. This sub-quanta gain is independent of the phase of the secular motion at the distal location, obviating the need for an electric ﬁeld impulse or time delay to eliminate the coherent motion. npj Quantum I-
nformation (2022)8:68 ; https://doi.org/10.1038/s41534-022-00579-3

INTRODUCTION
Trapped ions are a leading technology platform for quantum computing due to their long coherence times and high-ﬁdelity quantum operations. While current trapped-ion-based quantum computers and simulators employ tens of trapped ions1,2, a practical quantum computation may ultimately require upwards of 106 ions3. The earliest proposed architecture for scaling trapped ion systems relies on ion transport for connecting qubits and is known as the Quantum Charge Coupled Device (QCCD) architecture4. All-
 transport primitives required for moving ions within the QCCD architecture (i.e., splitting, shuttling, merging, and reordering) have been demonstrated in small systems5–12.
A time-budget analysis of experiments on the QCCD architecture illustrates that ion-shuttling can consume a signiﬁcant fraction of the total algorithm operation time10,12,13, thus highlighting the need for fast transport. Shuttling must also not substantially excite ion motion, since the motional modes mediate spin–spin interactions for entangling gates and coherent excitation on the order of single quanta can lead to a loss in ﬁdelity14. For a many-ion array, these requirements must be achieved i-
n spite of imperfections in the environment and control system.
An important metric for a shuttling-based architecture is the number of electrode lengths shuttled per second, as this represents the time to transport an ion to an independent trapping site and is independent of the size of the ion trap. As a rule of thumb, we use three full electrodes to represent the distance an ion needs to travel in order to be conﬁned by a completely different set of electrodes. Earlier efforts15,16 have demonstrated comparable or faster transport using high-speed voltage wa-
veform generators, albeit at lower electrode per second rates due to the larger electrode sizes. These approaches require precise timing in order to realize shuttling with low excitation, such as synchronizing the transport with the axial frequency or through the use of a diabatic electric ﬁeld impulse at the correct phase of axial motion to remove the excitation.

Theoretical research in shuttling protocols have used optimal control theory5,17 and invariant-based engineering to realize shortcuts to adiabaticity (STA)18–21. Such protocols can in principle
yield shuttling solutions that transport an ion with no motional
excitation with transport times much shorter than a period of the
axial motion. These techniques can be utilized to generate large coherent states of motion22 as well as be extended for multi-ion chains23, anharmonic traps24, and time-dependent axial frequencies25. Recently, there has been some interest in performing open-
loop optimization of voltage waveforms to realize these protocols26,27. While these theoretical results are promising, these
protocols rely upon accurate physical modeling as well as an
accurate realization of the controls. Instead of relying upon the accuracy of our models and their
realization, we perform a closed-loop optimization where the
voltage waveform is optimized against experimental runs. In this
manner, a highly accurate model of the experimental apparatus is
unnecessary as it is the experimental performance of the voltage
waveform that is being optimized. The resulting waveform is able
to account for imperfections that excite ion motion during
transport, such as fabrication and geometry differences across a device, imperfect simulations, background electric ﬁelds, and disparities in ﬁlter components that modify the temporal properties of the voltage waveforms. The optimization was applied to the
round-trip transport of a single ion to a separate trapping site and back. The one-way distance of 210 μm (three electrodes) was shuttled in 6 μs (15 periods of oscillation) for an average speed of 35 m·s−1. The technique we describe constitutes a tool that could
be used to tune shuttling protocols for many ions within a
trapping array and is agnostic to deviations from the model
resulting from environmental effects and variations in the
fabrication process. Furthermore, we note that this procedure
could be applicable to tuning up other experimental quantum technologies, such as neutral-atom quantum computing28 and atom interferometry29–32.

1Sandia National Laboratories, Albuquerque, NM 87185, USA. ✉email: jdsterk@sandia.gov

Published in partnership with The University of New South Wales

2
(a)

J.D. Sterk et al.

rf

(d) (1) State preparation, ground state cooling

A

B

y

(2) Forward shuttling

xA

B

A

B

210μm

(3) Hold at distal location

A

B

(b) 103

(c) 102

Thermal Coherent

Thermal Coherent

(3) Reverse shuttling

102

101

A

B

Mean Quanta Mean Quanta

101

100

(3) Sideband probe, detection

1010 00

101

102

103

104

10−1 100 101 102 103 104

A

B

Loss Function

Loss Function

Fig. 1 and in

Gtheeomeleectrtryoonficthsteasteys  tSe1m=2;aÀnd12 l.oItssisfuthnecntioshnu. tatlAedn

ion is trapped at location A to B in 6 μs and held there

where it is for at least

prepared in the axial (^x) ground state of motion 12 μs before being shuttled back. The drawing

shows the rf rails and interior control electrodes (but not the outer control rails). The relationship of the loss function to the mean quanta for

both thermal and coherent motion is shown in (b) and (c) using experimentally relevant probe times. Probe time tm corresponds to the m-th order red sideband; b shows the relationship for (t1, t2) = (3 μs, 10 μs) and c shows the relationship for (25 μs, 45 μs). d A cartoon of the
experimental transport sequence. The ion is prepared at A, then shuttled to location B and held there for a variable hold time before returning

to A for a probe on the sidebands and detection.

1234567890():,;

next state

State X=(f, b)
Check constraints
Generate waveform
Measure loss function
Optimizer

(1) xB

(2) xB

xA

tf

xA

tf

(3) xB thold

xA tf

Waveform

Compute loss for hold
offset

Insert next hold offset

Measure 2nd order red sideband

Measure 1st order red sideband

Worst loss

Fig. 2 Optimization procedure. Given an optimization state X = (f, b), the constraints on the state are ﬁrst checked and if satisﬁed are used to generate the waveform from the base solution (1). This is
achieved by scaling the axial frequency and modifying the trajectory to realize the forward transport solution (2). The full waveform consists of the forward solution followed by a hold and then followed by the time reversal of the forward waveform to return the ion to position A (3). The loss function consists of a loop over a set of DAC offset steps that are inserted into the hold time. The loss is calculated for each offset by measuring the ﬁrst- and second-order red sidebands. The ﬁnal loss is-
 the worst performing of these offset losses and is sent to the optimizer which generates the next trial state.

RESULTS

Optimization procedure

In the experiment, a 40Ca+ ion is initially trapped at location A

(Fig. 1a) with an axial trap frequency of ωt/2π = 2.5 MHz and

radial ion is

frequencies ω1,2/2π = (5.6, 6.0) MHz. spin-polarized to the electronic state

Aj0tit¼his  Slo1=c2a; tÀio12n ,

the and

the axial motion is sideband cooled to the motional ground

state (mean quanta n % 0:03). Next, using a transport waveform

derived from the optimization state, the ion is shuttled three

electrodes to the distal location B, 210 μm away, corresponding

to a separate and independent trapping site. The ion is held at

B for a variable dwell time of at least 12 μs before being

returned to A with the reversed waveform. After the round-trip

transport, the amount of axial excitation is probed through a

ofrnequtehnecy  Ssc1=a2n;

Àov12 er$th  eD5ﬁ=r2s;tÀ- a52n d

second-order red sidebands (j0i $ j1i) transition. This

procedure is illustrated in Fig 1d. The loss function is a

combination of the integrals of these sidebands (Eq. (1)), acting

as a pseudo-energy for values up to hundreds of quanta

(Fig. 1b and c). Similar pseudo-energies have been used in

other shuttling experiments12,16, exhibiting a relation to the

mean quanta up to tens of quanta. At faster speeds, where

motional excitations may exceed several hundred quanta,

higher-order motional sidebands may be needed to construct a

suitable pseudo-energy. Reference 22 utilized such a method in

order to measure the creation of large coherent states. In our

experiments, we found utilizing the ﬁrst- and second-order

motional sidebands to be a reasonable tradeoff between the

number of measurements and motional quanta.

Given a constant axial frequency during transport, the ﬁnal state of

motion is a coherent state of motion33,34. Unitary transformations can

reduce this quantum control problem to controlling the classical

trajectory33,35. The coherent excitation of the ion at the distal location

is revealed by changing the dwell time of the ion at B, as it exhibits a

periodicity in the ﬁnal excitation. Therefore, these measurements are

repeated with the same waveform, with additional offsets to the hold

time at the distal location inserted. These time offsets are chosen to

equally sample the phase of axial motion at the distal location. The

value of the loss function for the optimization state, X, is the worst

performing of all the hold offsets h,

LðXÞ

¼

max
h

LðXjhÞ

¼

h max α1
h
 R þ α2

R

B1

dΔ1 2π

r1ðΔ1jX;

hÞ

B2

dΔ2 2π

r2ðΔ2jX;

 2 hÞ

 

(1)

where rm(Δm∣X, h) is the m-th order red sideband for hold offset h given the state X. The hyperparameters αm are chosen to be the same, α1 = α2 = 2 kHz−1. For an ion in the state j0ih0j   ρðX; hÞ

npj Quantum Information (2022) 68

Published in partnership with The University of New South Wales

3
(a) 10
2
10

J.D. Sterk et al.

AX6

First run Second run

(b)0.5
0.4

3
AX6 BZ3AX6

Loss

1
10

0.3

̅n

100

0.2

Prob D5/2

0
(c) 1.0
0.8
0.6
0.4
0.2
0.0 −20

20

40

−10 0

10

Detuning [kHz]

60

80

100

120

140

Evaluation

1.0

Prob D5/2

0.8

0.6

0.4

0.2

0.0

20

−15 −10 −5 0 5 10 15

Detuning [kHz]

0.1
0.0 0

π/4

π/2 3π/4

π

5π/4 3π/2 7π/4

2π

Phase [radian]

Fig. 3 Experimental results of the optimization procedure. a This plot illustrates how the loss function proceeds over function evaluations for the axial frequency optimization for the ﬁrst and second stages (blue and orange, respectively). The trajectory and trajectory-plus-axial optimizations display similar behavior. For each evaluation of the total loss for a given state X, we plot the loss for each hold offset, the
maximum of which is sent to the optimizer. b Measurement of the mean quanta via sideband thermometry at the end of the optimization for
both the axial and trajectory-plus-axial optimization as a function of the phase of the axial motion at the distal location B. Error bars represent the standard error. c Representative plots of the ﬁrst (left) and second (right) order red sidebands for the initial (blue) and ﬁnal (orange) optimization states. Error bars represent the standard deviation. N.B. The scans for the ﬁnal optimization were performed with much longer probe times than the initial state.

after transport, the sideband lineshapes after a probe time tm are

rmðΔmjX;

hÞ

¼

X 1
n¼m

ρnnðX;

hÞ

4jgnmj2 Ω2nm

 

 

sin2 Ωnmtm ;

2

(2)

qﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ

where Ωnm ¼ 4jgnmj2 þ Δ2m is the detuned Rabi frequency, Δm is

the detuning strengths are

from the m-tphﬃﬃsﬃ ideband, and gn1 ¼ Àiηg0 n and gn2 ¼ À

the sipdeﬃbﬃﬃﬃaﬃﬃnﬃﬃﬃdﬃﬃﬃﬃcﬃﬃoﬃﬃupling

1 2

η2g0

nðn À 1Þ (here,

g0 is the coupling strength to the carrier transition, and η is the

Lamb–Dicke parameter). A quadratic penalty for the integral of the

second-order sideband emphasizes the minimization of the

second-order sideband over the ﬁrst-order sideband. In Fig. 1b

and c, the relation between the value of the loss function and

mean quanta are plotted for both the case of a thermal and

coherent excitation for the probe times used for a particular

experiment. The resulting measurement of the total loss is passed

to a derivative-free optimizer, which uses the Nelder–Mead

algorithm. The optimizer then determines the next state X, which

is then passed to the experiment for voltage synthesis and test.

Figure 2 illustrates the optimization procedure.

The initial probe times for the ﬁrst- and second-order red

sidebands were chosen to be slightly less than the effective π-

times so as to not overdrive the sidebands and saturate the

measurement. After 150 function evaluations of the Nelder–Mead

optimizer, the loss function became insensitive to improvement

and leveled off (Fig. 3a). Therefore a second round of the

optimization was performed using longer probe times and

starting from the ﬁnal state of the ﬁrst stage. The longer probe

times effectively increase the sensitivity of our loss function to

lower mean quanta (Fig. 1c).

Optimization state and waveform generation
For each optimization state X in the experiment, the shuttling waveform is synthesized just prior to the test. The waveforms are all derived from a base trapping voltage set which consists of 211 individual trapping solutions equally spaced along the 210 μm path from A to B. Each solution is generated through a constrained optimization problem to generate the least-norm voltage array with a ﬁxed 2.5 MHz axial frequency for a 40Ca+ ion with a unique well location along the path. These solutions are-
 derived with respect to a boundary element model of the device, which yields trapping solutions with axial frequencies within 10%

of the experimentally measured value. First, a forward transport

waveform is constructed to transport the ion to the distal location at a speed of 35 m·s−1. The full waveform in the experiment is the

concatenation of this forward solution followed by a hold at the

distal location for 12 μs (plus an additional offset) and ﬁnally

the time reversal of the forward waveform to bring the ion back

for measurement.

The optimization state consists of a list of nf axial frequency points f ¼ ff jgj21:nf and nt trajectory control points b ¼ fbjgj21:nt
to control the axial frequency of the ion along the path and the

harmonic well trajectory. Each frequency point fj ﬁxes the axial frequency at a spatial position xj = xA + jδx, where δx = (xB − xA)/ (nf + 1) so that they are equally spaced between A and B. Between
these points, the axial frequency is linearly interpolated and each

trapping solution in the base solution is scaled by a factor to

match the desired frequency at that position. We constrain the

axial frequencies with an exponential penalty for values outside

the range [1.5, 3.5] MHz; this ensures reasonable voltages and

potential wells throughout the shuttling procedure. The trajectory

s:[0, 1] → [0, 1] determines the harmonic well location via xwell(t) = xA + (xB − xA)s(t/tf) where xA,B are the spatial location of A and B and tf = ∣xB − xA∣/v = 6 μs is the transport time for the desired velocity v = 35 m·s−1. It is constrained to be symmetric (i.e.,

s(1 − τ) = 1 − s(τ), τ = t/tf) and have ﬁxed endpoints with zero initial and ﬁnal velocities. The trajectory is deﬁned through a

Bézier curve, or Bernstein interpolation,

sðτÞ

¼

XN
j¼0

  

sj

N j

τj ð1

À

τ ÞNÀj :

(3)

The choice of such an interpolation makes it easy to automatically satisfy the trajectory constraints: s0 = s1 = 0, sN = sN−1 = 1, and sj + sN−j = 1. The trajectory control points correspond to the lowest non-zero Bézier coefﬁcients, bj = sj+1, resulting in an N = 2nt + 3 order polynomial. The STA trajectory designed in ref. 18 for a rigid harmonic oscillator corresponds to a single trajectory control point, nt = 1, near the boundary of the feasible space. To account for non-uniform axial frequenc-
ies during
transport, we include extra degrees of freedom and start from
an initial point deeper within the feasible space in order to
provide more room for exploration.
The forward waveform is formed by determining the position of
the trajectory at each digital-to-analog converter (DAC) step and

Published in partnership with The University of New South Wales

npj Quantum Information (2022) 68

4
1.0

J.D. Sterk et al.
1.0

0.8

0.8

Prob D5/2 Prob D5/2

0.6

0.6

0.4

0.4

0.2

0.2

0.0 0

π/4

π/2 3π/4

π

5π/4 3π/2 7π/4 2π

Ramsey phase [radian]

Fig. 4 Ramsey phase scans to verify ion transport. We illustrate a Ramsey measurement of the ion coherence for four cases. The baseline case, with neither shuttling nor probe, is in blue. In orange, the ion is shuttled without a probe at B, showing that coherence is maintained throughout the procedure. To show the probe has no effect when the ion is at A, the ion is held stationary while the probe is turned on (red). Coherence is only lost (green) when the ion is shuttled to B and the probe is tur-
ned on. Error bars represent the standard deviation.

determining the voltages from the base solution through linear interpolation. If the voltage waveform does not exceed the voltage budget of the electronics, the waveform is applied and the lineshapes of the ﬁrst- and second-order red sidebands are measured. Violation of the voltage budget also leads to an exponential penalty in the value of the loss function that is sent to the optimizer.

Data
We applied our optimization routine to transport waveforms parameterized by (1) Bézier trajectories deﬁned by three control points, (2) linear trajectories deﬁned by six intermediate axial frequencies, and (3) a combination of the two. The number of trajectory control points was chosen to provide ﬂexibility while maintaining a reasonable order polynomial (here, nt = 3 corresponds to a 9-order polynomial). Likewise, the number of axial control points was found to be sufﬁcient for our experimental v-
elocity; other velocities might require a different number of axial control points. As seen in Fig. 3a, a strong periodicity in the integrated sidebands over the various dwell times was observed at the beginning of the optimization. However, as the optimization proceeded the performance tended to become uniform across the hold offsets, indicating insensitivity to the dwell time. Due to the different probe times, the overall value of the loss functions between different optimizations and runs are n-
ot directly comparable without relating the loss to the mean quanta. The initial π-time for the optimizations with the Bézier parameters were found to be longer than a linear trajectory (used in the axialcontrol-only optimization), indicating an initial lower motional excitation.
The absolute performance of the resulting optimized waveform was measured using sideband thermometry36. Figure 3b shows the mean quanta gain versus phase at the distal location for the axial control and the trajectory-plus-axial optimization routines, which both exhibit sub-quanta performance. The ﬁnal waveform of the trajectory-only optimization did not yield sub-quanta performance and could not be probed reliably with sideband thermometry (a minimum of 1.4 ± 0.4 quanta was observed). This could -
be due to an insufﬁcient exploration of the parameter space, inability to escape a local minimum, or an insufﬁcient number of parameters. A background heating rate of 295 ± 24 quanta·s−1 adds a negligible amount of heating (~0.01 quanta) to the ion over the course of the transport.
Since it is possible that the optimization could generate a nonshuttling waveform to achieve low excitation, a Ramsey measurement is used to verify that the ion is transported all the way to the

0.0 0

100

200

300

400

500

Pulse duration [μs]

Fig. 5 Blue sideband Rabi oscillations after transport for the optimized decimated (blue) and non-decimated (orange) trajectory-plus-axial optimizations. The green curve is a maximum likelihood estimation for a displaced thermal state illustrating subquanta excitation. For the decimated version the ion is in a highly excited state after transport and did not achieve sub-quanta transport. Error bars represent the standard deviation.

  dsDhisu5t=ta2tl;liÀnlog32c aatqioπun/a2dwpruuitplhsoelethisetraaopnppsitltiiiemodniz.teoOdutrhwetayvipeoifncoarlomntra(tnFhisegp.o  Sr4t1)=.2a;nPÀdrio12h r o$tldo shuttling procedure is performed, followed by a ﬁnal π/2 pulse. Such a Ramsey sequence has been used to show preservation of coherence over thousands of shuttling operations37. In order to use the Ramsey sequence for transport veriﬁcation, we illuminate the distal location with a 397 nm laser resonant with the S1/2 ↔ P1/2 dipole transi-
tion to destroy the coherence if the ion is successfully shuttled to that position. Ramsey phase scans were performed for the four combinations of shuttling on/off and probe on/off. We see that only when the probe is on and the ion is transported that coherence is lost.
To determine whether the high-speed electronics are necessary at this transport velocity, a slower-speed DAC was emulated by decimating the trial waveform and upsampling it through a zeroorder hold, resulting in an effective 300 ns DAC step. The same trajectory-plus-axial optimization procedure as above was applied, achieving only minimal improvement over the initial transport. No waveform was generated with the same number of function evaluations that could achieve a mean excitation below a singl-
e quantum with these artiﬁcially slow electronics. A long bluesideband Rabi measurement was performed after shuttling with these decimated waveforms and found to be consistent with a highly excited motional state. Figure 5 shows this data in comparison to a similar measurement for the trajectory-plusaxial optimized waveform. Fitting the trajectory-plus-axial Rabi oscillation data to a displaced thermal state results in a mean quanta of ncoh þ nth ¼ 0:26, in agreement with the sideband thermometry -
measurement (0.31 ± 0.08 quanta for this particular hold offset). It was difﬁcult at this sub-quanta level to discern the relative contributions of the thermal and coherent excitation from a maximum likelihood estimate ﬁt to the Rabi data, as this method is only sensitive to motional state populations and not coherences between the motional states.

DISCUSSION
Another approach that was considered for optimizing the
waveform involved pre-compensating the voltage waveform to account for the low-pass ﬁlter attached to the chamber13. This approach was investigated in the context of the optimization procedure through the insertion of a digital ﬁlter prior to analog voltage synthesis. In this approach, the ﬁlter coefﬁcients served as the optimization state. We found an inﬁnite impulse response (IIR) ﬁlter to generally be unstable, while an inherently stable FIR ﬁlter consistently resulted in voltage waveforms exce-
eding the range of the DACs during an attempted optimization. This
approach was therefore unsuitable for the optimization loop

npj Quantum Information (2022) 68

Published in partnership with The University of New South Wales

J.D. Sterk et al.

5

since most of the optimization was spent in a region that violated the voltage budget. Although a more complex constrained optimization procedure might be suitable for the precompensation approach, the performance of the trajectory and frequency control indicates that such complexity is unnecessary to achieve sub-quanta shuttling.
This closed-loop optimization procedure was used to generate voltage waveforms that transport an ion across multiple electrodes to a separate trapping well at a speed of 0.5 electrodes per microsecond or 35 m·s−1. By tuning three trajectory parameters

P3/2 manifold and spontaneous emission back to the S1/2 manifold. Ground

state cooling of axial motion c  Do5h=e2r;eÀnt52 drtirvaensisititounn.ed to the

is achieved in a similar motional red-sideband

ofaf sthhieon  S, 1w=2h; eÀre12 th$e

After shuttling, the ﬁrst- and second-order red sidebands are probed by

pulsing the 729 nm laser for a given probe time t1 and t2 prior to applying the

detection beam at 397 nm. The lineshape of the m-th order red sideband,

rm(Δm, X) state j1i

¼(Eq  D. (52=)2);,

is À

d eﬁned

5 2

,

as

the

probability

of

the

ion

transitioning

to

the

rmðΔm; XÞ ¼ tr½j1ih1jχmðΔm; XÞ

that deﬁne a Bézier curve and six axial frequencies at discrete points in the ion’s path, the motional excitation following transport was limited to 0.36 ± 0.08 mean quanta. The Bézier

where χm(Δm, X) is the density matrix of the qubit–motion coupled system after transporting and then probing the m-th order red sideband with a laser detuned by Δm from the sideband for a duration tm.

potential well trajectory initially performed better than a linear

trajectory, however, we suspect that it was close enough to a local Lineshape

minimum such that the local optimizer was unable to ﬁnd a solution that exhibited a mean quanta gain below one. On the

To calculate the lineshape, we assume the ion is initially in the state χð0Þ ¼ j0ih0j   ρðXÞ immediately after transport and prior to the probe.

other hand, we observed that axial frequency control alone was sufﬁcient for sub-quanta transport.

The system coherently evolves under the probe according to the Hamiltonian

For our experiments, we were able to utilize a loss function based on a pseudo-energy derived from measurements of the ﬁrst- and second-order red sideband and a Nelder–Mead optimizer. More complex loss functions and optimizers may be more suitable to increase the speed and complexity of the shuttling operation. At higher speeds, we expect larger coherent excitation and thus higher-order motional sidebands need to be probed in the loss function. While our experiments indicated that trajectory contr-
ol alone was insufﬁcient with our simple protocol, an initially good trajectory (such as one derived from STA

H ¼ ωtaya À Δ0σyσ þ gmσamy þ gÃmσyam

where the sidebands are well-resolved and the ion is in the Lamb–Dicke

regime. Here, a corresponds to the phonon annihilation operator for

the axial mode and σ ¼ j0ih1j. The detuning Δ0 = ωL − ω0 = Δm − mωt is the detuning of the laser from the carrier transition, which is expressed in

the second equality in terms of the detuning from the m-th order red

sideband,

Δm.

The

sideband

coupling

strengths

are

given

by

gm

¼

ðÀiηÞm m!

g0,

where The

egx0ciistatthioencoaprreierar tcooruN^pl¼ingaysatrþenmgtσhy.σ

is

a

conserved

quantity

for

this

Hamiltonian, and thus any eigenstate of N^ preserves the excitation

techniques, even imperfectly) could be essential as the shuttling times reduce to a single period of motion. Our experiments also revealed that high-speed electronics are an enabling technology for fast shuttling with low-excitation, since the optimization procedure on the emulated slower DAC was unable to make sufﬁcient progress in developing a suitable voltage waveform.
Generalizing this transport optimization technique to related QCCD operations has the potential to dramatically improve the performance and robustness of larger scale trapped ion quantum computers. Some operations can entirely leverage the work described here, like shuttling single ions in a large trap array where local variations yield different optimal waveforms. Other operations may require different loss functions or more sophisticated optimization algorithms, like split and join operations wi-
th multiple relevant motional modes and adjacent ions that must not

number. This results in a collection of closed manifolds whose dynamics
are independent of one another. The dimensionality of each manifold is
either one-dimensional (for eigenvalues n < m) or two-dimensional (eigenvalues n ≥ m). For the case n < m, the basis state is j0; ni, while for n ≥ m the states j0; ni and j1; n À mi are coupled.
Each subspace can be diagonalized (for n ≥ m) in terms of the dressed states,

jn;

þi

¼

cos

θn 2

j1;

n

À

mi

þ

ei

arg gm

sin

θn 2

j0;

ni

jn;

Ài

¼

ÀeÀi

arg

gm

sin

θn 2

j1;

n

À

mi

þ

cos

θn 2

j0;

ni

where tan θn ¼ À2jgnmj=Δm. Here we deﬁne the mp-tﬃﬃhﬃﬃﬃﬃﬃoﬃﬃﬃrﬃdﬃﬃﬃeﬃﬃrﬃﬃﬃﬃsﬃﬃiﬃﬃdeband

coupling strength for the n-th manifold, gnm ¼ gm n!=ðn À mÞ!. These

states are eigenstates of the Hamiltonian with eigenenergy

ϵ±

¼

À1 2

  Δm

±

qﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ  Δ2m þ 4jgnmj2

be excited. In both cases, replacing human-in-the-loop tuning with closed-loop optimization will be essential to extending the performance currently demonstrated in trapped ion quantum computers with few ions to larger and more complicated systems.

METHODS

Experiment

A single 40Ca+ ion is trapped in the linear section of a High-Optical-Access

surface-electrode radiofrequency (rf) Paul trap38. The ion is trapped

~70 μm above the surface of the trap and is tightly conﬁned in the

transverse direction by applying a 140 V amplitude rf signal at 51 MHz to rf

rail electrodes. Axial conﬁnement is provided through voltages applied to

speciﬁc interior control electrodes which have a pitch of 70 μm while a

60 μm gap in the substrate provides an open slot below the ion (Fig. 1a).

Control rails outside the rf electrodes provide principal axis rotation in the

transverse plane.

Permanent magnets provide a 9.5 split the ground-state Zeeman levels

  GS1=v2e;r±tic12a l.

magnetic ﬁeld in order to Doppler cooling and state

readout are performed with a laser addressing the S1/2 ↔ P1/2 transition at

397 nm, while internal state manipulation of the ion is performed with a

narrow 729 nm laser addressing the S1/2 ↔ D5/2 transition. In addition, two Ttrhehpeeu  imSo1np=2i;slaþsspe12ir ns-$pato  l8aD6r5i6z=2en;dmÀto32( Dtht3r/ea2 nj↔0siitPi¼1o/n2  ),Sf1ao=n2lld;oÀw8512e 4dsnbtamytea(Dbrey5/p2cuo↔mhePpr3e/p2nu)tllasyreedtrouivstienhdge.

The probability for measuring the ion in j1i after probing the m-th

sideband is found by expressing the initial state in terms of the dressed

states, applying the phase accumulated over time tm, projecting onto j1i, and taking the trace. Such a procedure yields Eq. (2),

r m ðΔm Þ

¼

X 1
n¼m

 

ρnn sin2 θn sin2

tm 2

qﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃﬃ  Δ2m þ 4jgnmj2

where

sin2θn

¼

. 4jgnm j2
Δ2m þ4jgnmj2

Electronics
The voltages applied to the trap electrodes are derived from a custom 96-channel high-speed arbitrary waveform generator. Signals are speciﬁed in 30 ns steps and ﬁltered on the digital side with ﬁnite impulse response ﬁlters that result in a normalized pass band frequency of 12 MHz and a stop band frequency of 15 MHz with >100 dB attenuation.
A DAC for each channel outputs a ±2.5 V signal which is ampliﬁed to ±10 V by a power ampliﬁer with low-distortion and high-speed current feedback. Anti-alias low-pass ﬁlters are used to reject unintended signal generation in higher-order Nyquist domains and yield a 12 MHz analog bandwidth. These voltages are then delivered through sixth-order low-pass ﬁlters at the vacuum chamber feedthrough with 3 dB cutoff at 1.3 MHz, in order to reduce heating from electrical noise at the axial frequency. The t-
iming of the system is governed by a temperature-compensated voltagecontrolled crystal oscillator that is phase-locked to an external 10 MHz reference clock.

Published in partnership with The University of New South Wales

npj Quantum Information (2022) 68

J.D. Sterk et al.

6

DATA AVAILABILITY

30. Corgier, R. et al. Fast manipulation of Bose–Einstein condensates with an atom

The data presented in this manuscript are available from the corresponding author upon reasonable request.

chip. N. J. Phys. 20, 055002 (2018). 31. Amri, S. et al. Optimal control of the transport of Bose-Einstein condensates with
atom chips. Sci. Rep. 9, 5346 (2019).

Received: 18 January 2022; Accepted: 13 May 2022;

32. Duspayev, A. & Raithel, G. Tractor atom interferometry. Phys. Rev. A 104, 013307 (2021).

33. Reichle, R. et al. Transport dynamics of single ions in segmented microstructured

Paul trap arrays. Fortschr. Phys. 54, 666–685 (2006).

34. Lau, H.-K. & James, D. F. V. Decoherence and dephasing errors caused by the dc

REFERENCES

Stark effect in rapid ion transport. Phys. Rev. A 83, 062330 (2011). 35. Hogan, J. M., Johnson, D. M. S. & Kasevich, M. A. Light-pulse atom interferometry.

1. Wright, K. et al. Benchmarking an 11-qubit quantum computer. Nat. Commun. 10, 1–6 (2019).
2. Bermudez, A. et al. Assessing the progress of trapped-ion processors towards fault-tolerant quantum computation. Phys. Rev. X 7, 041061 (2017).
3. Lekitsch, B. et al. Blueprint for a microwave trapped ion quantum computer. Sci. Adv. 3, e1601540 (2017).
4. Kielpinski, D., Monroe, C. & Wineland, D. J. Architecture for a large-scale ion-trap quantum computer. Nature 417, 709–711 (2002).
5. Schulz, S., Poschinger, U., Singer, K. & Schmidt-Kaler, F. Optimization of seg-

In Proc. International School of Physics “Enrico Fermi”, (eds Arimondo, E. et al.) 411–447 (IOS Press, 2009). 36. Diedrich, F., Bergquist, J. C., Itano, W. M. & Wineland, D. J. Laser cooling to the zero-point energy of motion. Phys. Rev. Lett. 62, 403–406 (1989). 37. Kaufmann, P., Gloger, T. F., Kaufmann, D., Johanning, M. & Wunderlich, C. Highﬁdelity preservation of quantum information during trapped-ion transport. Phys. Rev. Lett. 120, 010501 (2018). 38. Blain, M. G. et al. Hybrid MEMS-CMOS ion -
traps for NISQ computing. Quantum Sci. Technol. 6, 034011 (2021).

mented linear Paul traps and transport of stored particles. Fortschr. Phys. 54,

648–665 (2006). 6. Home, J. P. et al. Complete methods set for scalable ion trap quantum infor-

ACKNOWLEDGEMENTS

mation processing. Science 325, 1227–1230 (2009). 7. Blakestad, R. B. et al. Near-ground-state transport of trapped-ion qubits through a

We thank Steve Dunlap, Justin Ford, Adam Goldhammer, Gina Gregerson, Benjamin Mar, Josh Templin, and Bert Tise for contributing to the electronics control system.

multidimensional array. Phys. Rev. A 84, 032314 (2011). 8. Ruster, T. et al. Experimental realization of fast ion separation in segmented Paul
traps. Phys. Rev. A 90, 033410 (2014). 9. Kaufmann, H., Ruster, T., Schmiegelow, C. T., Schmidt-Kaler, F. & Poschinger, U. G.

This research was funded by the U.S. Department of Energy, Ofﬁce of Science, Ofﬁce of Advanced Scientiﬁc Computing Research. Sandia National Laboratories is a multimission laboratory managed and operated by National Technology & Engineering Solutions of Sandia, LLC, a wholly owned subsidiary of Honeywell

Dynamics and control of fast ion crystal splitting in segmented Paul traps. N. J. Phys. 16, 073012 (2014). 10. Pino, J. M. et al. Demonstration of the trapped-ion quantum CCD computer architecture. Nature 592, 209–213 (2021). 11. Hilder, J. et al. Fault-tolerant parity readout on a shuttling-based trapped-ion quantum computer. Phys. Rev. X 12, 011032 (2022).

International Inc., for the U.S. Department of Energy’s National Nuclear Security Administration under contract DE-NA0003525. This paper describes objective technical results and analysis. Any subjective views or opinions that might be expressed in the paper do not necessarily represent the views of the U.S. Department of Energy or the United States Government.

12. Kaushal, V. et al. Shuttling-based trapped-ion quantum information processing.

AVS Quantum Sci. 2, 014101 (2020). 13. Bowler, R., Warring, U., Britton, J. W., Sawyer, B. C. & Amini, J. Arbitrary waveform
generator for quantum information processing with trapped ions. Rev. Sci. Instrum. 84, 033108 (2013). 14. Ruzic, B. P. et al. Entangling-gate error from coherently displaced motional modes

AUTHOR CONTRIBUTIONS
J.D.S., H.M., L.P.P., and D.S. conceived, built, and carried out the experiment. H.C., J.G., V.H., J.L., and D.M. developed the high speed electronics and control software. J.V.D.W. provided the base voltage solutions and experimental control software.

of trapped ions. Phys. Rev. A 105, 052409 (2022).

15. Bowler, R. et al. Coherent diabatic ion transport and separation in a multizone trap array. Phys. Rev. Lett. 109, 080502 (2012).
16. Walther, A. et al. Controlling fast transport of cold trapped ions. Phys. Rev. Lett.

COMPETING INTERESTS
The authors declare no competing interests.

109, 080501 (2012).

17. Fürst, H. A. et al. Controlling the transport of an ion: classical and quantum mechanical solutions. N. J. Phys. 16, 075007 (2014).

ADDITIONAL INFORMATION

18. Torrontegui, E. et al. Fast atomic transport without vibrational heating. Phys. Rev.

Correspondence and requests for materials should be addressed to Jonathan D.

A 83, 013415 (2011).

Sterk.

19. Chen, X., Torrontegui, E. & Muga, J. G. Lewis-Riesenfeld invariants and transi-

tionless quantum driving. Phys. Rev. A 83, 062116 (2011). 20. Chen, X., Torrontegui, E., Stefanatos, D., Li, J.-S. & Muga, J. G. Optimal trajectories
for efﬁcient atomic transport without ﬁnal excitation. Phys. Rev. A 84, 043415

Reprints and permission information is available at http://www.nature.com/ reprints

(2011). 21. Guéry-Odelin, D. et al. Shortcuts to adiabaticity: concepts, methods, and appli-

Publisher’s note Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional afﬁliations.

cations. Rev. Mod. Phys. 91, 045001 (2019).

22. Alonso, J. et al. Generation of large coherent states by bang–bang control of a

trapped-ion oscillator. Nat. Commun. 7, 11243 (2016).

23. Palmero, M., Bowler, R., Gaebler, J. P., Leibfried, D. & Muga, J. G. Fast transport of

Open Access This article is licensed under a Creative Commons

mixed-species ion chains within a Paul trap. Phys. Rev. A 90, 053408 (2014). 24. Zhang, Q., Muga, J. G., Guéry-Odelin, D. & Chen, X. Optimal shortcuts for atomic
transport in anharmonic traps. J. Phys. B:. Mol. Opt. Phys. 49, 125503 (2016).

Attribution 4.0 International License, which permits use, sharing, adaptation, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide a link to the Creative

25. Tobalina, A., Palmero, M., Martínez-Garaot, S. & Muga, J. G. Fast atom transport

Commons license, and indicate if changes were made. The images or other third party

and launching in a nonrigid trap. Sci. Rep. 7, 5753 (2017). 26. Qi, L., Chiaverini, J., Espinós, H., Palmero, M. & Muga, J. G. Fast and robust particle
shuttling for quantum science and technology. Europhys. Lett. 134, 23001 (2021).

material in this article are included in the article’s Creative Commons license, unless indicated otherwise in a credit line to the material. If material is not included in the article’s Creative Commons license and your intended use is not permitted by statutory

27. Qi, L. Optimizing Ion-shuttling Operations in Trapped-ion Quantum Computers. Thesis, Massachusetts Institute of Technology (2021).
28. Stuart, D. & Kuhn, A. Single-atom trapping and transport in DMD-controlled

regulation or exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy of this license, visit http://creativecommons. org/licenses/by/4.0/.

optical tweezers. N. J. Phys. 20, 023013 (2018).

29. Steffen, A. et al. Digital atom interferometer with single particle control on a

discretized space-time geometry. Proc. Natl Acad. Sci. USA 109, 9770–9774 (2012).

© The Author(s) 2022

npj Quantum Information (2022) 68

Published in partnership with The University of New South Wales

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:17.793Z
- **Text Length:** 40800 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
