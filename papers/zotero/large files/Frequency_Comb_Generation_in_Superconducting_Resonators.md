# PDF Document: Erickson et al. - 2014 - Frequency Comb Generation in Superconducting Resonators.pdf

**File Path:** Erickson et al. - 2014 - Frequency Comb Generation in Superconducting Resonators.pdf

**Processed Date:** 2026-02-10T18:13:30.267Z

**File Size:** 431.75 KB

**Total Pages:** 25

**Extracted Pages:** 25

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2857

**Title:** Frequency Comb Generation in Superconducting Resonators

**Collection:** Large Files

---

## Extracted Text Content

Frequency Comb Generation in Superconducting Resonators
Supplemental Information
R. P. Erickson, S. R. Jefferts, and D. P. Pappas*
National Institute of Standards and Technology, Boulder, Colorado 80305, USA
Supplement 1: Output Current of a Superconducting Resonator
We consider the electric circuit diagram of Figure S1.1 to model a transmission-type superconducting
resonator. This is a schematic for a simple two-port resonator device held to potential Vi(t) and Vo(t) at
the input and output ports, respectively, with input and output currents denoted by Ii(t) and Io(t),
respectively. There is also a current Ix(t) to ground, associated with capacitance Cx. The input and
output ports have capacitances Ci and Co, respectively. The kinetic inductance of the resonator is
represented by Lr(t), over which the output current Io(t) flows. The voltages Va(t) and Vb(t) have
been added to the diagram for reference.
The voltage drops across the four electrical components at time t are
Vi(t) − Va(t) = 1
Ci
� Ii(τ)dτ
t
0
(S1.1)
Va(t) = 1
Cx
� Ix(τ)dτ
t
0
Figure S1.1. Circuit diagram of a lumped-element transmission line, a model of a superconducting resonator.

(S1.2)
Va(t) − Vb(t) = Lr(t) d
dt Io(t)
(S1.3)
Vb(t) − Vo(t) = 1
Co
� Io(τ)dτ
t
0
(S1.4)
The relationship between the three currents is
Ii(t) = Ix(t) + Io(t)
(S1.5)
The above equations are manipulated to obtain a differential equation defining the output current Io(t)
in terms of the driving voltages Vi(t) and Vo(t).
Specifically, applying (S1.2) and (S1.5) to (S1.1) gives
Vi(t) = 1
Ci
� Io(τ)dτ
t
0
+�1
Cx
+1
Ci
� � Ix(τ)dτ
t
0
(S1.6)
while applying (S1.2) and (S1.4) to (S1.3) yields
1
Cx
� Ix(τ)dτ
t
0
− Vo(t) − 1
Co
� Io(τ)dτ
t
0
= Lr(t) d
dt Io(t)
(S1.7)
It is convenient to multiple (S1.7) by 1 Ci
⁄ + 1 Cx
⁄ such that
1
Cx
�1
Ci
+1
Cx
� � Ix(τ)dτ
t
0
− �1
Ci
+1
Cx
� Vo(t) − 1
Co
�1
Ci
+1
Cx
� � Io(τ)dτ
t
0
= �1
Ci
+1
Cx
� Lr(t) d
dt Io(t)
(S1.8)
Rearranging (S1.6) to replace the integral over Ix(τ) in (S1.8) results in
�1
Ci
+1
Cx
� Lr(t) d
dt Io(t) + � 1
Co
�1
Ci
+1
Cx
�+ 1
CiCx
� � Io(τ)dτ
t
0
=1
Cx
Vi(t) − � 1
Ci
+1
Cx
� Vo(t)
(S1.9)

Dividing (S1.9) by 1 Ci
⁄ + 1 Cx
⁄ we obtain
Lr(t) d
dt Io(t) + � 1
Co
+1
Ci + Cx
� � Io(τ)dτ
t
0
= Ci
Ci + Cx
Vi(t) − Vo(t) ≡ V(t)
(S1.10)
where in (S1.10) we conveniently defined an effective pump voltage
V(t) ≡ Ci
Ci + Cx
Vi(t) − Vo(t)
(S1.11)
Differentiating (S1.10) with respect to time t we arrive at
d
dt �Lr(t) d
dt Io(t)� + � 1
Co
+1
Ci + Cx
� Io(t) = d
dt V(t)
(S1.12)
Equation (S1.12) is the differential equation determining the output current Io(t), subject to initial
boundary conditions deemed appropriate.
Supplement 2: Nonlinear Response of a Superconducting Resonator
We present the theory of the nonlinear response of a superconducting resonator. The resonator is
modeled as a simple transmission line, as depicted in the circuit diagram of Figure S1.1, with
capacitances at the input and output ports given by Ci and Co, respectively. A capacitance Cx to ground
is also included. Time-dependent kinetic inductance Lr(t) is assumed to be the dominant source of
nonlinearity via its dependence on the output current Io(t), in the manner
Lr(t) = Lo �1 + �Io(t)
I∗
�
2
� ; Lo = ħRn
π∆
(S2.1)
Here, Lo is the linear inductance expressed in terms of gap parameter ∆ and normal-state resistance Rn
of the underlying superconductor. The current I∗ is a scaling parameter of the expansion in powers of
Io(t), where the form of the expansion is dictated by the symmetry of the film geometry.
In Supplement 1 we derived the differential equation governing Io(t) of the equivalent electric
circuit, as illustrated in Figure S1.1. Defining the dimensionless amplitude A(t) = Io(t)⁄I∗, the nonlinear
second-order differential equation (S1.12) may be expressed as
Ä(t) + ω0
(0)2A(t) + 1
3
d2
dt2 A(t)3 = F cos ωt

(S2.2)
where the fundamental frequency of the resonator cavity is
ω0
(0) = � 1
Lo
�1
Co
+1
Ci + Cx
�
(S2.3)
In (S2.2) we also defined the effective driving amplitude
F = ωV�
I∗Lo
(S2.4)
for a pump of frequency ω and time-varying voltage V(t) = V� sin ωt. The initial boundary conditions
are assumed to be A(0) = 0 and Ȧ(0) = 0. Equation (S2.2) is similar in form to that of a Duffing
oscillator, save for the A(t)3 term twice differentiated with respect to time t. The Duffing equation is
known to admit stable solutions consisting of subharmonic states whose frequencies are integer
multiples of ω⁄N,1,2 where in this case N is the integer for which Nω0
(0) approximates the frequency ω
of the pump. An idealized perfectly tuned pump would have frequency equal to N times the
fundamental.
In developing our model we purposely neglect higher normal modes of the resonator cavity,
instead appealing to a lumped-element approximation. The reason for this is threefold. First is that our
experimental investigations with two-tone spectroscopy have shown that higher harmonics are
relatively inert with respect to the nonlinear response observed, and thus, can play no significant role.
Second is that the observed resonances have extremely narrow observed linewidths, indicative of states
that do not couple readily to a dissipative reservoir, unlike normal-mode excitations. Third is that the
lumped-element model is sufficient to admit stable nonlinear solutions of character like that of our
observations. For example, via perturbation theory, it may be shown that the weakly driven Duffing
oscillator admits subharmonic states with largest amplitudes corresponding to the odd harmonics of the
pump frequency, much like what we observe experimentally.2 In the present supplement we describe
via our model the onset of the subharmonic resonances that give rise to the frequency-comb response
of our resonator.
Model Calculation via Perturbation Theory
In our calculations we assume a pump of frequency ω slightly higher than N integer multiples of the
fundamental frequency ω0
(0) of the resonator. As the pump frequency descends toward the multiple,
the pump more strongly couples to the resonator, driving the frequency of the fundamental down.
Hence, the frequency of the fundamental, renormalized by strong nonlinearity, will be denoted as ω0.
We will also equate the pump frequency to the value ωN, i.e., ω = ωN, where the subscript indicates

the proximity of the pump frequency to the Nth multiple of the fundamental. The pump detuning is
then the difference between ωN and Nω0. Unlike linear resonance theory, strong coupling of pump to
resonator is not dependent on proximity of pump frequency to normal mode frequency. Rather, it is the
matching of phase between the natural resonance at ω0 with that of the pump feedback at ωN that
governs the strength of coupling—the closer the pump frequency is to an integer multiple of the
fundamental, the stronger the coupling. In fact, the fundamental and the pump may be many octaves
apart in frequency and yet couple very strongly.
In the discussion below we will adopt a perturbation theory approach, using the method of
successive approximation.3 This allows us to determine how the fundamental frequency is renormalized
by the coupling of pump to resonator. It will also allow us to determine the initially strongest
subharmonic resonances, and how a comb spectrum begins to fill in at pump harmonics and
corresponding sidebands as a function of increased coupling between pump and resonator.
Approach and Zero-Order Approximation
The successive approximation is formulated as follows. We introduce a number ε ≥ 0 as a
mathematical device, setting ε = 1 at the end of calculation. We use ε as a formal parameter of
perturbation expansion, although the actual physical perturbation parameter is F (ω2N − ω02)
⁄ , where in
our calculations we will always assume N > 1. Hence, results of the perturbation theory will be most
applicable when the effective pump amplitude is such that F ≪ ω2N − ω02. This is the regime of initial
coupling, i.e., weak tuning, of pump to resonator.
In this approach we expand the fundamental frequency in powers of ε, viz.
ω0 = ω0
(0) + εω0
(1) + ε2ω0
(2) + ⋯
(S2.5)
Similarly, the amplitude is expanded as
A(t) = A(0)(t) + εA(1)(t) + ε2A(2)(t) + ⋯
(S2.6)
The zero order of the expansion corresponds to the absence of nonlinearity. Hence, the differential
equation of (S2.1) may be written as
Ä(t) + ω0
(0)2A(t) + 1
3 ε d2
dt2 A(t)3 = F cos ωt
(S2.7)
If we include the fundamental response at ω0 and the pump feedback at ωN, as we alluded to above,
then

A(0)(t) = C0 cos ω0t − F
ω2N − ω02 cos ωNt
(S2.8)
Equation (S2.8) is the solution of (S2.7) in the zero order of ε, wherein ω0 → ω0
(0). In this limit we also
have C0 = F (ω2N − ω02)
⁄ such that the initial boundary conditions A(0)(0) = 0 and Ȧ(0)(0) = 0 are
both satisfied.
First-Order Correction
To obtain the first-order in ε corrections to (S2.5) and (S2.6) we first note
Ä(0)(t) = −ω02C0 cos ω0t + ω2NF
ω2N − ω02 cos ωNt
(S2.9)
Substituting (S2.5), (S2.6), (S2.8), and (S2.9) into (S2.7), and equating terms of first order in ε, we arrive
at the constraint
Ä(1)(t) + ω0
(0)2A(1)(t) = 2ω0
(0)ω0
(1) �C0 cos ω0t − F
ω2N − ω02 cos ωNt� − 1
3
d2
dt2 A(0)(t)3
(S2.10)
From (S2.8) and the identity
4 cos αt cos βt cos γt = cos(α + β − γ)t + cos(α − β + γ)t + cos(α − β − γ)t + cos(α + β + γ)t
(S2.11)
we have
A(0)(t)3 = 1
4 �3C0 �C02 + 2 F2
(ω2N − ω02)2� cos ω0t + C03 cos 3ω0t
− 3C02 F
ω2N − ω02 [cos(ωN − 2ω0)t + cos(ωN + 2ω0)t]
+ 3C0
F2
(ω2N − ω02)2 [cos(2ωN − ω0)t + cos(2ωN + ω0)t]
−3 F
ω2N − ω02 �2C02 + F2
(ω2N − ω02)2� cos ωNt − F3
(ω2N − ω02)3 cos 3ωNt�
(S2.12)
and thus

1
3
d2
dt2 A(0)(t)3 = − 1
4 �C0 �C02 + 2 F2
(ω2N − ω02)2� ω02 cos ω0t + 3C03ω02 cos 3ω0t
− C02 F
ω2N − ω02 [(ωN − 2ω0)2 cos(ωN − 2ω0)t + (ωN + 2ω0)2 cos(ωN + 2ω0)t]
+ C0
F2
(ω2N − ω02)2 [(2ωN − ω0)2 cos(2ωN − ω0)t + (2ωN + ω0)2 cos(2ωN + ω0)t]
−F
ω2N − ω02 �2C02 + F2
(ω2N − ω02)2� ω2N cos ωNt − 3 F3
(ω2N − ω02)3 ω2N cos 3ωNt�
(S2.13)
Now substituting (S2.13) into (S2.10) gives
Ä(1)(t) + ω0
(0)2A(1)(t) = 2ω0
(0)C0 �ω0
(1) + 1
8 ω0
(0) �C02 + 2 F2
(ω2N − ω02)2�� cos ω0t + 3
4 ω0
(0)2C03 cos 3ω0t
−2 F
ω2N − ω02 �ω0
(0)ω0
(1) + 1
8 ω2N �2C02 + F2
(ω2N − ω02)2�� cos ωNt − 3
4
ω2NF3
(ω2N − ω02)3 cos 3ωNt
−1
4 C02 F
ω2N − ω02 ��ωN − 2ω0
(0)�
2
cos(ωN − 2ω0)t + �ωN + 2ω0
(0)�
2
cos(ωN + 2ω0) t�
+1
4 C0
F2
(ω2N − ω02)2 ��2ωN − ω0
(0)�
2
cos(2ωN − ω0)t + �2ωN + ω0
(0)�
2
cos(2ωN + ω0)t�
(S2.14)
from which we discern a term proportional to cos ω0t, the secular term corresponding to the
fundamental natural resonance. This term must be eliminated from (S2.14) to prevent a divergence of
the perturbation expansion upon integrating to obtain A(1)(t). The removal of this term defines the
first-order correction ω0
(1), viz.
ω0
(1) = − 1
8 ω0
(0) �C02 + 2 F2
(ω2N − ω02)2�
(S2.15)
which corresponds to a downshift of frequency with increased pump detuning. With the secular term
removed, integration of (S2.14) yields the first-order amplitude correction
A(1)(t) = − 3
32 C03 cos 3ω0t
+1
4
F
ω2N − ω02 ��2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � C02 + �ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � F2
(ω2N − ω02)2� cos ωNt

+3
4
F3
(ω2N − ω02)3 � ω2N
9ω2N − ω0
(0)2� cos 3ωNt
+1
4 C02 F
ω2N − ω02 �
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
cos(ωN − 2ω0)t
+
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
cos(ωN + 2ω0)t�
−1
16ωN
C0
F2
(ω2N − ω02)2 �
�2ωN − ω0
(0)�
2
ωN − ω0
(0) cos(2ωN − ω0)t +
�2ωN + ω0
(0)�
2
ωN + ω0
(0) cos(2ωN + ω0)t�
(S2.16)
Equations (S2.15) and (S2.16) comprise the first-order corrections of the expansions of (S2.5)
and (S2.6), respectively. Note that in (S2.16) we see the generation of third harmonics in both ω0 and
ωN, and we also see the beginning of sidebands around the first and second pump harmonics. In
particular, we recognize the fundamental frequency ω0 as half the free spectral range (FSR) of the
frequency-comb response—sidebands fill in at teeth separated by twice the fundamental. This may be
viewed as beating between the frequencies of the natural fundamental and the pump feedback.
Generally speaking, as will be seen more clearly in second order of the expansion, the sidebands of the
odd (even) pump harmonics fill in, with respect to the principle resonance peak, at even (odd) multiples
of the fundamental frequency. However, only the odd principle resonance peaks appear, i.e., the odd
harmonics of the pump frequency; the even harmonics are absent though their corresponding
sidebands begin to form. These selection rules are governed by (S2.11), and ultimately by the symmetry
of the film geometry, which dictates the expansion of the kinetic inductance of (S2.1) in specific powers
of Io(t).
Second-Order Correction
If we continue the expansion of (S2.5) and (S2.6) applied to (S2.7) and equate terms in ε2 we find the
constraint governing the second-order correction, which we may express as
Ä(2)(t) + ω0
(0)2A(2)(t) = �ω0
(1)2 + 2ω0
(0)ω0
(2)� �C0 cos ω0t − F
ω2N − ω02 cos ωNt�
+1
2 ω0
(1) �ω0
(0)C0 �C02 + 2 F2
(ω2N − ω02)2� cos ω0t + 3ω0
(0)C03 cos 3ω0t
+ 2C02 F
ω2N − ω02 ��ωN − 2ω0
(0)� cos(ωN − 2ω0)t − �ωN + 2ω0
(0)� cos(ωN + 2ω0)t�
− C0
F2
(ω2N − ω02)2 ��2ωN − ω0
(0)� cos(2ωN − ω0)t − �2ωN + ω0
(0)� cos(2ωN + ω0)t��

− d2
dt2 �A(0)(t)2A(1)(t)�
(S2.17)
Here, ω0
(1) and A(1)(t) are the corrections we obtained in first order, as given by (S2.15) and (S2.16),
respectively. Equation (S2.17) consists of frequency corrections to both zero and first order amplitudes
as well as the second-order nonlinearity, which involves the second derivative in time of the terms
A(0)(t)2A(1)(t) = �C02 cos2 ω0t − 2C0
F
ω2N − ω02 cos ω0t cos ωNt + F2
(ω2N − ω02)2 cos2 ωNt�
× �− 3
32 C03 cos 3ω0t + 1
4
F
ω2N − ω02 ��2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � C02 + �ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � F2
(ω2N − ω02)2� cos ωNt
+3
4
F3
(ω2N − ω02)3 � ω2N
9ω2N − ω0
(0)2� cos 3ωNt
+1
4 C02 F
ω2N − ω02 �
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
cos(ωN − 2ω0)t
+
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
cos(ωN + 2ω0)t�
−1
16ωN
C0
F2
(ω2N − ω02)2 �
�2ωN − ω0
(0)�
2
ωN − ω0
(0) cos(2ωN − ω0)t +
�2ωN + ω0
(0)�
2
ωN + ω0
(0) cos(2ωN + ω0)t��
(S2.18)
If the factors of (S2.18) are distributed and the identity of (S2.11) is used then terms of like
harmonic may be grouped together. After some tedious algebra the result may be written as
A(0)(t)2A(1)(t) =

−1
8 C0 � 3
16 C04 + C02 F2
(ω2N − ω02)2 �2 �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�
+1
2
F4
(ω2N − ω02)4 �4 �ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN − ω0
(0)�
2
2ωN �2ωN − 2ω0
(0)�
+
�2ωN + ω0
(0)�
2
2ωN �2ωN + 2ω0
(0)�
�� cos ω0t
−1
8 C03 �3
8 C02 + F2
(ω2N − ω02)2 �1 +
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�� cos 3ω0t
−3
128 C05 cos 5ω0t
+1
16
F
ω2N − ω02 �C04 �2 �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�
+ C02 F2
(ω2N − ω02)2 �2 �ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � + 3 �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN − ω0
(0)�
2
ωN �2ωN − 2ω0
(0)�
+
�2ωN + ω0
(0)�
2
ωN �2ωN + 2ω0
(0)�
� + 3 F4
(ω2N − ω02)4 ��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � + � ω2N
9ω2N − ω0
(0)2��� cos ωNt
+1
16
F3
(ω2N − ω02)3 �C02 �6 � ω2N
9ω2N − ω0
(0)2� + �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN − ω0
(0)�
2
ωN �2ωN − 2ω0
(0)�
+
�2ωN + ω0
(0)�
2
ωN �2ωN + 2ω0
(0)�
�
+ F2
(ω2N − ω02)2 �6 � ω2N
9ω2N − ω0
(0)2� + �ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 ��� cos 3ωNt
+3
16
F5
(ω2N − ω02)5 � ω2N
9ω2N − ω0
(0)2� cos 5ωNt

+1
16 C02 F
ω2N − ω02 �C02 �3
4 + �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � + 2
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
�
+ F2
(ω2N − ω02)2 ��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN − ω0
(0)�
2
ωN �2ωN − 2ω0
(0)�
+2
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�� cos(ωN − 2ω0)t
+1
16 C02 F
ω2N − ω02 �C02 �3
4 + �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � + 2
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�
+ F2
(ω2N − ω02)2 ��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN + ω0
(0)�
2
ωN �2ωN + 2ω0
(0)�
+2
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
+
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
�� cos(ωN + 2ω0)t
+1
16 C04 F
ω2N − ω02 �3
4+
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
� cos(ωN − 4ω0)t
+1
16 C04 F
ω2N − ω02 �3
4+
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
� cos(ωN + 4ω0) t
−1
16 C0
F2
(ω2N − ω02)2 �2C02 ��2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�2ωN − ω0
(0)�
2
2ωN �2ωN − 2ω0
(0)�
+
�2ωN + ω0
(0)�
2
4ωN �2ωN + 2ω0
(0)�
�
+ 2 F2
(ω2N − ω02)2 ��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � + 3 � ω2N
9ω2N − ω0
(0)2�
+
�2ωN − ω0
(0)�
2
2ωN �2ωN − 2ω0
(0)�
�� cos(2ωN − ω0)t

−1
16 C0
F2
(ω2N − ω02)2 �2C02 ��2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
+
�2ωN + ω0
(0)�
2
2ωN �2ωN + 2ω0
(0)�
+
�2ωN − ω0
(0)�
2
4ωN �2ωN − 2ω0
(0)�
�
+ 2 F2
(ω2N − ω02)2 ��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � + 3 � ω2N
9ω2N − ω0
(0)2�
+
�2ωN + ω0
(0)�
2
2ωN �2ωN + 2ω0
(0)�
�� cos(2ωN + ω0)t
−1
16 C03 F2
(ω2N − ω02)2 �3
8+
�2ωN − ω0
(0)�
2
2ωN �2ωN − 2ω0
(0)�
+2
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
� cos(2ωN − 3ω0)t
−1
16 C03 F2
(ω2N − ω02)2 �3
8+
�2ωN + ω0
(0)�
2
2ωN �2ωN + 2ω0
(0)�
+2
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
� cos(2ωN + 3ω0)t
+1
16 C02 F3
(ω2N − ω02)3 �3 � ω2N
9ω2N − ω0
(0)2� +
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�2ωN − ω0
(0)�
2
ωN �2ωN − 2ω0
(0)�
� cos(3ωN − 2ω0)t
+1
16 C02 F3
(ω2N − ω02)3 �3 � ω2N
9ω2N − ω0
(0)2� +
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
+
�2ωN + ω0
(0)�
2
ωN �2ωN + 2ω0
(0)�
� cos(3ωN + 2ω0)t
−3
8 C0
F4
(ω2N − ω02)4 �� ω2N
9ω2N − ω0
(0)2� +
�2ωN − ω0
(0)�
2
4ωN �2ωN − 2ω0
(0)�
� cos(4ωN − ω0)t
−3
8 C0
F4
(ω2N − ω02)4 �� ω2N
9ω2N − ω0
(0)2� +
�2ωN + ω0
(0)�
2
4ωN �2ωN + 2ω0
(0)�
� cos(4ωN + ω0)t
(S2.19)

Though a lengthy formula, it is straightforward to differentiate (S2.19) twice with respect to the time
variable t and apply the result to (S2.17). In so doing, and incorporating the correction of (S2.15), we
obtain
Ä(2)(t) + ω0
(0)2A(2)(t) =
2C0ω0
(0) �ω0
(2) − 9
256 C04ω0
(0)
−1
32 C02 ω0
(0)F2
(ω2N − ω02)2 �3 + 4 �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � + 2
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+2
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�
−1
32
ω0
(0)F4
(ω2N − ω02)4 �3 + 4 �ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN − ω0
(0)�
2
4ωN �ωN − ω0
(0)�
+
�2ωN + ω0
(0)�
2
4ωN �ωN + ω0
(0)�
�� cos ω0t
−3
8 C03ω0
(0)2 �25
8 C02
+ F2
(ω2N − ω02)2 �4 +
3 �ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
3 �ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�� cos 3ω0t − 75
128 C05ω0
(0)2 cos 5ω0t

−F
ω2N − ω02 �2ω0
(0)ω0
(2) + 1
64 ω0
(0)2 �C02 + 2 F2
(ω2N − ω02)2�
2
−1
16 C04ω2N �2 �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�
−1
16 C02 ω2NF2
(ω2N − ω02)2 �2 �ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � + 3 �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN − ω0
(0)�
2
ωN �2ωN − 2ω0
(0)�
+
�2ωN + ω0
(0)�
2
ωN �2ωN + 2ω0
(0)�
�− 3
16
ω2NF4
(ω2N − ω02)4 ��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � + � ω2N
9ω2N − ω0
(0)2��� cos ωNt
+9
16
F3
(ω2N − ω02)3 ω2N �C02 �6 � ω2N
9ω2N − ω0
(0)2� + �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN − ω0
(0)�
2
ωN �2ωN − 2ω0
(0)�
+
�2ωN + ω0
(0)�
2
ωN �2ωN + 2ω0
(0)�
� + F2
(ω2N − ω02)2 �6 � ω2N
9ω2N − ω0
(0)2� + �ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 ��� cos 3ωNt
+ 75
16
F5
(ω2N − ω02)5 � ω4N
9ω2N − ω0
(0)2� cos 5ωNt
−1
16 C02 F
ω2N − ω02 �2ω0
(0) �ωN − 2ω0
(0)� �C02 + 2 F2
(ω2N − ω02)2�
− C02 �ωN − 2ω0
(0)�
2
�3
4 + �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � + 2
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
�
− F2
(ω2N − ω02)2 �ωN − 2ω0
(0)�
2
��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN − ω0
(0)�
2
2ωN �ωN − ω0
(0)�
+2
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�� cos(ωN − 2ω0)t

+1
16 C02 F
ω2N − ω02 �2ω0
(0) �ωN + 2ω0
(0)� �C02 + 2 F2
(ω2N − ω02)2�
+ C02 �ωN + 2ω0
(0)�
2
�3
4 + �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � + 2
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�
+ F2
(ω2N − ω02)2 �ωN + 2ω0
(0)�
2
��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN + ω1
(0)�
2
2ωN �ωN + ω1
(0)�
+2
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
+
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
�� cos(ωN + 2ω0)t
+1
16 C04 �ωN − 4ω0
(0)�
2F
ω2N − ω02 �3
4+
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
� cos(ωN − 4ω0)t
+1
16 C04 �ωN + 4ω0
(0)�
2F
ω2N − ω02 �3
4+
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
� cos(ωN + 4ω0) t
+1
16 C0
F2
(ω2N − ω02)2 �ω0
(0) �2ωN − ω0
(0)� �C02 + 2 F2
(ω2N − ω02)2�
− 2C02 �2ωN − ω0
(0)�
2
��2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�2ωN − ω0
(0)�
2
4ωN �ωN − ω0
(0)�
+
�2ωN + ω0
(0)�
2
8ωN �ωN + ω0
(0)�
�
− 2 F2
(ω2N − ω02)2 �2ωN − ω0
(0)�
2
��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � + 3 � ω2N
9ω2N − ω0
(0)2�
+
�2ωN − ω0
(0)�
2
4ωN �ωN − ω0
(0)�
�� cos(2ωN − ω0)t

−1
16 C0
F2
(ω2N − ω02)2 �ω0
(0) �2ωN + ω0
(0)� �C02 + 2 F2
(ω2N − ω02)2�
+ 2C02 �2ωN + ω0
(0)�
2
��2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
+
�2ωN + ω0
(0)�
2
4ωN �ωN + ω0
(0)�
+
�2ωN − ω0
(0)�
2
8ωN �ωN − ω0
(0)�
�
+ 2 F2
(ω2N − ω02)2 �2ωN + ω0
(0)�
2
��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � + 3 � ω2N
9ω2N − ω0
(0)2�
+
�2ωN + ω0
(0)�
2
4ωN �ωN + ω0
(0)�
�� cos(2ωN + ω0)t
−1
16 C03 F2
(ω2N − ω02)2 �2ωN − 3ω0
(0)�
2
�3
8+
�2ωN − ω0
(0)�
2
4ωN �ωN − ω0
(0)�
+2
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
� cos(2ωN − 3ω0)t
−1
16 C03 F2
(ω2N − ω02)2 �2ωN + 3ω0
(0)�
2
�3
8+
�2ωN + ω0
(0)�
2
4ωN �ωN + ω0
(0)�
+2
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
� cos(2ωN + 3ω0)t
+1
16 C02 F3
(ω2N − ω02)3 �3ωN − 2ω0
(0)�
2
�3 � ω2N
9ω2N − ω0
(0)2� +
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�2ωN − ω0
(0)�
2
2ωN �ωN − ω0
(0)�
� cos(3ωN − 2ω0)t
+1
16 C02 F3
(ω2N − ω02)3 �3ωN + 2ω0
(0)�
2
�3 � ω2N
9ω2N − ω0
(0)2� +
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
+
�2ωN + ω0
(0)�
2
2ωN �ωN + ω0
(0)�
� cos(3ωN + 2ω0)t

−3
8 C0
F4
(ω2N − ω02)4 �4ωN − ω0
(0)�
2
�� ω2N
9ω2N − ω0
(0)2� +
�2ωN − ω0
(0)�
2
8ωN �ωN − ω0
(0)�
� cos(4ωN − ω0)t
−3
8 C0
F4
(ω2N − ω02)4 �4ωN + ω0
(0)�
2
�� ω2N
9ω2N − ω0
(0)2� +
�2ωN + ω0
(0)�
2
8ωN �ωN + ω0
(0)�
� cos(4ωN + ω0)t
(S2.20)
As in the first-order correction, we must remove from (S2.20) the secular term proportional to cos ω0t.
This defines the second-order frequency correction, viz.
ω0
(2) = 9
256 C04ω0
(0)
+1
32 C02 ω0
(0)F2
(ω2N − ω02)2 �3 + 4 �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � + 2
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+2
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�
+1
32
ω0
(0)F4
(ω2N − ω02)4 �3 + 4 �ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN − ω0
(0)�
2
4ωN �ωN − ω0
(0)�
+
�2ωN + ω0
(0)�
2
4ωN �ωN + ω0
(0)�
�
(S2.21)
Upon removal of the secular term the integration of (S2.20) yields, with the aid of (S2.21), the result
A(2)(t) = 3
64 C03 �25
8 C02
+ F2
(ω2N − ω02)2 �4 +
3 �ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
3 �ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�� cos 3ω0t + 75
3072 C05 cos 5ω0t

+F
ω2N − ω02 � 1
16 C04 �11
8 ω0
(0)2 − 2ω2N �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � − ω2N �ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
− ω2N �ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�
+1
16 C02 F2
(ω2N − ω02)2 �4ω0
(0)2 − �3ω2N − 4ω0
(0)2� �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � − 2ω2N �ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 �
+ 2ω0
(0)2 �ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+ 2ω0
(0)2 �ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
− ω2N �2ωN − ω0
(0)�
2
2ωN �ωN − ω0
(0)�
− ω2N �2ωN + ω0
(0)�
2
2ωN �ωN + ω0
(0)�
�
+1
16
F4
(ω2N − ω02)4 �4ω0
(0)2 − �3ω2N − 4ω0
(0)2� �ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � + ω0
(0)2 �2ωN − ω0
(0)�
2
4ωN �ωN − ω0
(0)�
+ ω0
(0)2 �2ωN + ω0
(0)�
2
4ωN �ωN + ω0
(0)�
− 3ω2N � ω2N
9ω2N − ω0
(0)2��� cos ωNt
ω2N − ω0
(0)2
−9
16
F3
(ω2N − ω02)3 ω2N �C02 �6 � ω2N
9ω2N − ω0
(0)2� + �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN − ω0
(0)�
2
2ωN �ωN − ω0
(0)�
+
�2ωN + ω0
(0)�
2
2ωN �ωN + ω0
(0)�
�
+ F2
(ω2N − ω02)2 �6 � ω2N
9ω2N − ω0
(0)2� + �ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 ��� cos 3ωNt
9ω2N − ω0
(0)2
− 75
16
F5
(ω2N − ω02)5 � ω4N
9ω2N − ω0
(0)2� cos 5ωNt
25ω2N − ω0
(0)2

+1
16 C02 F
ω2N − ω02 �2 �C02 + 2 F2
(ω2N − ω02)2�
ω0
(0) �ωN − 2ω0
(0)�
�ωN − ω0
(0)� �ωN − 3ω0
(0)�
− C02 �ωN − 2ω0
(0)�
2
�ωN − ω0
(0)� �ωN − 3ω0
(0)�
�3
4 + �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � + 2
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
�
− F2
(ω2N − ω02)2
�ωN − 2ω0
(0)�
2
�ωN − ω0
(0)� �ωN − 3ω0
(0)�
��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN − ω0
(0)�
2
2ωN �ωN − ω0
(0)�
+2
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�� cos(ωN − 2ω0)t
−1
16 C02 F
ω2N − ω02 �2 �C02 + 2 F2
(ω2N − ω02)2�
ω0
(0) �ωN + 2ω0
(0)�
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
+ C02 �ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�3
4 + �2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � + 2
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
�
+ F2
(ω2N − ω02)2
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � +
�2ωN + ω0
(0)�
2
2ωN �ωN + ω0
(0)�
+2
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
+
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
�� cos(ωN + 2ω0)t
−1
16 C04 F
ω2N − ω02
�ωN − 4ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − 5ω0
(0)�
�3
4+
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
� cos(ωN − 4ω0)t
−1
16 C04 F
ω2N − ω02
�ωN + 4ω0
(0)�
2
�ωN + 3ω0
(0)� �ωN + 5ω0
(0)�
�3
4+
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
� cos(ωN + 4ω0)t

−1
16 C0
F2
(ω2N − ω02)2 ��C02 + 2 F2
(ω2N − ω02)2�
ω1
(0) �2ωN − ω0
(0)�
4ωN �ωN − ω0
(0)�
− C02 �2ωN − ω0
(0)�
2
2ωN �ωN − ω0
(0)�
��2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�2ωN − ω0
(0)�
2
4ωN �ωN − ω0
(0)�
+
�2ωN + ω0
(0)�
2
8ωN �ωN + ω0
(0)�
�
− F2
(ω2N − ω02)2
�2ωN − ω0
(0)�
2
2ωN �ωN − ω0
(0)�
��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � + 3 � ω2N
9ω2N − ω0
(0)2�
+
�2ωN − ω0
(0)�
2
4ωN �ωN − ω0
(0)�
�� cos(2ωN − ω0)t
+1
16 C0
F2
(ω2N − ω02)2 ��C02 + 2 F2
(ω2N − ω02)2�
ω0
(0) �2ωN + ω0
(0)�
4ωN �ωN + ω0
(0)�
+ C02 �2ωN + ω0
(0)�
2
2ωN �ωN + ω0
(0)�
��2ω2N − ω0
(0)2
ω2N − ω0
(0)2 � +
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
+
�2ωN + ω0
(0)�
2
4ωN �ωN + ω0
(0)�
+
�2ωN − ω0
(0)�
2
8ωN �ωN − ω0
(0)�
�
+ F2
(ω2N − ω02)2
�2ωN + ω0
(0)�
2
2ωN �ωN + ω0
(0)�
��ω2N − 2ω0
(0)2
ω2N − ω0
(0)2 � + 3 � ω2N
9ω2N − ω0
(0)2�
+
�2ωN + ω0
(0)�
2
4ωN �ωN + ω0
(0)�
�� cos(2ωN + ω0)t
+1
256 C03 F2
(ω2N − ω02)2
�2ωN − 3ω0
(0)�
2
�ωN − ω0
(0)� �ωN − 2ω0
(0)�
�3
2+
�2ωN − ω0
(0)�
2
ωN �ωN − ω0
(0)�
+2
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
� cos(2ωN − 3ω0)t

+1
256 C03 F2
(ω2N − ω02)2
�2ωN + 3ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 2ω0
(0)�
�3
2+
�2ωN + ω0
(0)�
2
ωN �ωN + ω0
(0)�
+2
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
� cos(2ωN + 3ω0)t
−1
48 C02 F3
(ω2N − ω02)3
�3ωN − 2ω0
(0)�
2
�3ωN − ω0
(0)� �ωN − ω0
(0)�
�3 � ω2N
9ω2N − ω0
(0)2� +
�ωN − 2ω0
(0)�
2
�ωN − 3ω0
(0)� �ωN − ω0
(0)�
+
�2ωN − ω0
(0)�
2
2ωN �ωN − ω0
(0)�
� cos(3ωN − 2ω0)t
−1
48 C02 F3
(ω2N − ω02)3
�3ωN + 2ω0
(0)�
2
�3ωN + ω0
(0)� �ωN + ω0
(0)�
�3 � ω2N
9ω2N − ω0
(0)2� +
�ωN + 2ω0
(0)�
2
�ωN + ω0
(0)� �ωN + 3ω0
(0)�
+
�2ωN + ω0
(0)�
2
2ωN �ωN + ω0
(0)�
� cos(3ωN + 2ω0)t
+3
64 C0
F4
(ω2N − ω02)4
�4ωN − ω0
(0)�
2
ωN �2ωN − ω0
(0)�
� ω2N
9ω2N − ω0
(0)2 +
�2ωN − ω0
(0)�
2
8ωN �ωN − ω0
(0)�
� cos(4ωN − ω0)t
+3
64 C0
F4
(ω2N − ω02)4
�4ωN + ω0
(0)�
2
ωN �2ωN + ω0
(0)�
� ω2N
9ω2N − ω0
(0)2 +
�2ωN + ω0
(0)�
2
8ωN �ωN + ω0
(0)�
� cos(4ωN + ω0)t
(S2.22)
Equations (S2.21) and (S2.22) constitute the second-order corrections.
Approximate Solution to Second Order
The approximate solution to second order in ε of the amplitude A(t) is the sum of the corrections given
by (S2.8), (S2.16), and (S2.22), i.e., A(t) ≅ A(0)(t) + A(1)(t) + A(2)(t), where we now set ε = 1. Note
from (S2.22) that we now have third and fifth harmonics of both ω0 and ωN appearing in the solution,
but there are no even harmonics of these frequencies. Figure S2.1, below, depicts a sketch of the
frequency output in second order of the successive approximation expansion. Again, we see the
beginning of sidebands around each pump harmonic, including the even harmonics of frequency 2ωN
and 4ωN, even though the corresponding amplitudes of these specific frequencies themselves do not
appear in the output spectrum. The FSR is clearly twice the fundamental frequency ω0 and, as
mentioned earlier, the sidebands of the odd (even) pump harmonics fill in at even (odd) multiples of the
fundamental frequency, with respect to the principle peak of each. Again, the selection rules

determining which sideband teeth appear have their origin in the symmetry of the film geometry, owing
to the terms that appear in the expansion of the kinetic inductance of (S2.1).
In the second order approximation the renormalized fundamental frequency is given by (S2.15)
and (S2.21) applied to (S2.5). If the pump tone is situated at sufficiently large N such that ω2N ≫ ω0
(0)2
then the frequency may be expressed as
ω0 ≅ ω0
(0) �1 − 1
8 �C02 + 2 F2
ω4N� + 3
256 �3C04 + 40C02 F2
ω4N + 24 F4
ω8N��
(S2.23)
The coefficient C0 must still be determined.
Note that the initial boundary condition Ȧ(0) = 0 is satisfied by our approximation A(t) ≅
A(0)(t) + A(1)(t) + A(2)(t). To satisfy A(0) = 0 we set the value of the constant C0 via A(0)(0) +
A(1)(0) + A(2)(0) = 0. This condition produces a polynomial in powers of C0 whose roots are the
possible solutions for the constant. Assuming C0 evolves continuously and only modestly from its zero
order value of F (ω2N − ω02)
⁄ ≅ F ω2N
⁄ we may express the solution as an expansion in powers of
F ω2N
⁄ . To estimate (S2.23) to fourth power in F ω2N
⁄ we need only consider an approximation of C0 to
third power. It is then sufficient to estimate C0 via A(0)(0) + A(1)(0) ≅ 0 since A(2)(0) contributes only
terms of order five and higher. Thus, from (S2.8) and (S2.16) we obtain
Figure S2.1. Sketch depicting the frequency spectrum of the output current, as obtained from second-order perturbation theory.

3
32 C03 − F
ω2N C02 − �1 − 1
2
F2
ω4N� C0 − 1
3
F3
ω6N + F
ω2N ≅ 0
(S2.24)
The solution of C0 via (S2.24) determines the shifted fundamental frequency of (S2.23). Specifically,
writing C0 = α1 F ω2N
⁄ + α2 F2 ω4N
⁄ + α3 F3 ω6N
⁄ + ⋯ and applying this expansion to (S2.24) we find
C0 ≅ F
ω2N − 71
96
F3
ω6N , F ω2N
⁄ ≪1
(S2.25)
such that
ω0 ≅ ω0
(0) �1 − 3
8
F2
ω4N + 745
768
F4
ω8N� , F ω2N
⁄ ≪1
(S2.26)

Supplement 3: Device Fabrication
The device used in this work consisted of a 25 cm long, double-spiral, λ/2 resonator made from a 2/2
μm wide center-electrode/gap coplanar waveguide (CPW) on intrinsic Si (>20 kOhm-cm). See Figure
S3.1, below. The CPW was fabricated from a film of superconducting material that was patterned using
optical lithography. A single step, SF6 reactive ion etch was used to process the film in order to minimize
loss.4 The film was comprised of 20 nm niobium titanium nitride (Nb0.7Ti0.3N) that was deposited at 500
oC using reactive co-sputtering from niobium and titanium targets in an Ar:N2 atmosphere. It had a
critical temperature TC = 13.8 K, and measurements were conducted at relatively low temperatures,
from 0.05K < T < 6 K. No frequency dispersion was observed in transmission line test structures of the
NbTiN from DC up to at least 20 GHz. This can be expected to be the case up to frequencies comparable
to twice the superconducting gap, i.e. f ~ 2∆/h = 2×1.76kBTC/h ~ 1 THz.
The fundamental resonator frequency was measured to be fo =59.738181 MHz, in good agreement
with that expected from the formula f0 = √1 − α c
2lneff
where the length of the CPW resonator is
Figure S3.1. Layout of 20 x 20 mm frequency comb chip with 25 cm long double spiral resonator. The inter-digitated capacitors (insets) on the input and output are 16 and 180 fF, respectively. They are connected micorowave launch with an exponential impedance matching taper that transforms the Z=50 ohm 200-80 μm width-gap CPW launch to a Z=120 ohm 2-2 μm CPW. The light areas are superconducting NbTiN, the gap is shown dark.

l=0.25 m, the effective dielectric constant is neff=2.6 for a CPW on Si, and the kinetic inductance fraction
α = 0.93 was determined from the frequency shift of a test resonator. It agrees well with the value
obtained from Mattis-Bardeen theory using the measured sheet resistance of 84 Ω/square, giving a
value for the kinetic inductance of L0 =6 pH/square. The nonlinearity of the total inductance, given by
equation (S2.1), was observed to be up to [I0Max(t)⁄I∗]2 = 9%, where the scaling factor I∗ = 12 mA is
on the order of the superconductor critical current. Values of the coupling capacitors on the input and
output of 16 and 180 fF were chosen to be critically coupled at 5 GHz and 100 MHz, respectively, in
order to pump the system optimally at high frequency and allow low frequency energy out.
References
1 M. E. Levinson, J. Appl. Phys. 20, 1045 (1949); C. Holmes and P. Holmes, J. of Sound and Vibration 78 (2), 161 (1981)
2 D. W. Jordan and P. Smith, Nonlinear Ordinary Differential Equations: An Introduction for Scientists and Engineers, (Oxford University Press, Oxford, 2007), Fourth Edition, pp. 242-251. 3 L. D. Landau and E. M. Lifshitz, Mechanics, (Pergamon Press, Oxford, 1976), Third Edition, pp. 84-92. 4 P. Del’Hay, O. Arcizet, A. Schliesser, R. Holzwarth, T.J. Kippenberg, Phys. Rev. Lett. 101, 053903 (2008).
*David.P.Pappas@NIST.gov

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:30.267Z
- **Text Length:** 33138 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 25 of 25
