# PDF Document: manuscript-supplement.pdf

**File Path:** manuscript-supplement.pdf

**Processed Date:** 2026-02-10T18:16:47.927Z

**File Size:** 431.75 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1046

**Title:** (In Vaccum Resonator - 2014 NIST) Frequency Comb Generation in Superconducting Resonators

**Collection:** Ion Trap > Resonator

---

## Extracted Text Content

Frequency Comb Generation in Superconducting Resonators
Supplemental Information
R. P. Erickson, S. R. Jefferts, and D. P. Pappas* National Institute of Standards and Technology, Boulder, Colorado 80305, USA
Supplement 1: Output Current of a Superconducting Resonator
We consider the electric circuit diagram of Figure S1.1 to model a transmission-type superconducting resonator. This is a schematic for a simple two-port resonator device held to potential 𝑉𝑖(𝑡) and 𝑉𝑜(𝑡) at the input and output ports, respectively, with input and output currents denoted by 𝐼𝑖(𝑡) and 𝐼𝑜(𝑡), respectively. There is also a current 𝐼𝑥(𝑡) to ground, associated with capacitance 𝐶𝑥. The input and output ports have capacitances 𝐶𝑖 and 𝐶𝑜, respectively. The kinetic ind-
uctance of the resonator is represented by 𝐿𝑟(𝑡), over which the output current 𝐼𝑜(𝑡) flows. The voltages 𝑉𝑎(𝑡) and 𝑉𝑏(𝑡) have been added to the diagram for reference.

Figure S1.1. Circuit diagram of a lumped-element transmission line, a model of a superconducting resonator.

The voltage drops across the four electrical components at time 𝑡 are

1𝑡

𝑉𝑖 (𝑡)

−

𝑉𝑎 (𝑡)

=

𝐶𝑖

�
0

𝐼𝑖 (𝜏)𝑑𝜏

1𝑡

𝑉𝑎 (𝑡)

=

𝐶𝑥

�
0

𝐼𝑥(𝜏)𝑑𝜏

(S1.1)

(S1.2)

𝑑 𝑉𝑎(𝑡) − 𝑉𝑏(𝑡) = 𝐿𝑟(𝑡) 𝑑𝑡 𝐼𝑜(𝑡)

1𝑡

𝑉𝑏(𝑡)

−

𝑉𝑜 (𝑡)

=

𝐶𝑜

�
0

𝐼𝑜(𝜏)𝑑𝜏

(S1.3) (S1.4)

The relationship between the three currents is

𝐼𝑖(𝑡) = 𝐼𝑥(𝑡) + 𝐼𝑜(𝑡)

(S1.5)

The above equations are manipulated to obtain a differential equation defining the output current 𝐼𝑜(𝑡) in terms of the driving voltages 𝑉𝑖(𝑡) and 𝑉𝑜(𝑡).

Specifically, applying (S1.2) and (S1.5) to (S1.1) gives

1𝑡

11𝑡

𝑉𝑖 (𝑡)

=

𝐶𝑖

�
0

𝐼𝑜(𝜏)𝑑𝜏

+

�𝐶𝑥

+

𝐶𝑖 �

�
0

𝐼𝑥(𝜏)𝑑𝜏

(S1.6)

while applying (S1.2) and (S1.4) to (S1.3) yields

1𝑡

1𝑡

𝑑

𝐶𝑥

�
0

𝐼𝑥(𝜏)𝑑𝜏

−

𝑉𝑜(𝑡)

−

𝐶𝑜

�
0

𝐼𝑜(𝜏)𝑑𝜏

=

𝐿𝑟 (𝑡)

𝑑𝑡

𝐼𝑜(𝑡)

(S1.7)

It is convenient to multiple (S1.7) by 1⁄𝐶𝑖 + 1⁄𝐶𝑥 such that

11 1 𝑡

11

11 1 𝑡

11

𝑑

𝐶𝑥

�𝐶𝑖

+

𝐶𝑥�

�
0

𝐼𝑥(𝜏)𝑑𝜏

−

�𝐶𝑖

+

𝐶𝑥�

𝑉𝑜(𝑡)

−

𝐶𝑜

�𝐶𝑖

+

𝐶𝑥�

�
0

𝐼𝑜(𝜏)𝑑𝜏

=

�𝐶𝑖

+

𝐶𝑥�

𝐿𝑟 (𝑡)

𝑑𝑡

𝐼𝑜(𝑡)

(S1.8)

Rearranging (S1.6) to replace the integral over 𝐼𝑥(𝜏) in (S1.8) results in

11

𝑑

11 1

1𝑡

1

11

�𝐶𝑖

+

𝐶𝑥�

𝐿𝑟(𝑡)

𝑑𝑡

𝐼𝑜(𝑡)

+

�𝐶𝑜

�𝐶𝑖

+

𝐶𝑥�

+

𝐶𝑖𝐶𝑥�

�
0

𝐼𝑜(𝜏)𝑑𝜏

=

𝐶𝑥

𝑉𝑖(𝑡)

−

�𝐶𝑖

+

𝐶𝑥�

𝑉𝑜 (𝑡)

(S1.9)

Dividing (S1.9) by 1⁄𝐶𝑖 + 1⁄𝐶𝑥 we obtain

𝐿𝑟 (𝑡)

𝑑 𝑑𝑡

𝐼𝑜(𝑡)

+

1 �𝐶𝑜

+

𝐶𝑖

1 +

𝐶𝑥�

𝑡
� 𝐼𝑜(𝜏)𝑑𝜏
0

=

𝐶𝑖

𝐶𝑖 +

𝐶𝑥

𝑉𝑖 (𝑡)

−

𝑉𝑜

(𝑡)

≡

𝑉(𝑡)

(S1.10)

where in (S1.10) we conveniently defined an effective pump voltage

𝑉(𝑡)

≡

𝐶𝑖

𝐶𝑖 +

𝐶𝑥

𝑉𝑖(𝑡)

−

𝑉𝑜(𝑡)

(S1.11)

Differentiating (S1.10) with respect to time 𝑡 we arrive at

𝑑

𝑑

1

1

𝑑

𝑑𝑡 �𝐿𝑟(𝑡) 𝑑𝑡 𝐼𝑜(𝑡)� + �𝐶𝑜 + 𝐶𝑖 + 𝐶𝑥� 𝐼𝑜(𝑡) = 𝑑𝑡 𝑉(𝑡)

(S1.12)

Equation (S1.12) is the differential equation determining the output current 𝐼𝑜(𝑡), subject to initial boundary conditions deemed appropriate.

Supplement 2: Nonlinear Response of a Superconducting Resonator
We present the theory of the nonlinear response of a superconducting resonator. The resonator is
modeled as a simple transmission line, as depicted in the circuit diagram of Figure S1.1, with capacitances at the input and output ports given by 𝐶𝑖 and 𝐶𝑜, respectively. A capacitance 𝐶𝑥 to ground is also included. Time-dependent kinetic inductance 𝐿𝑟(𝑡) is assumed to be the dominant source of nonlinearity via its dependence on the output current 𝐼𝑜(𝑡), in the manner

𝐿𝑟 (𝑡)

=

𝐿𝑜

�1

+

�𝐼𝑜𝐼(∗𝑡)�2� ;

𝐿𝑜

=

ℏ𝑅𝑛 𝜋∆

(S2.1)

Here, 𝐿𝑜 is the linear inductance expressed in terms of gap parameter ∆ and normal-state resistance 𝑅𝑛 of the underlying superconductor. The current 𝐼∗ is a scaling parameter of the expansion in powers of 𝐼𝑜(𝑡), where the form of the expansion is dictated by the symmetry of the film geometry.

In Supplement 1 we derived the differential equation governing 𝐼𝑜(𝑡) of the equivalent electric circuit, as illustrated in Figure S1.1. Defining the dimensionless amplitude 𝐴(𝑡) = 𝐼𝑜(𝑡)⁄𝐼∗, the nonlinear second-order differential equation (S1.12) may be expressed as

𝐴̈ (𝑡)

+

𝜔0(0)2𝐴(𝑡)

+

1 3

𝑑2 𝑑𝑡2

𝐴(𝑡)3

=

𝐹

cos

𝜔𝑡

where the fundamental frequency of the resonator cavity is

(S2.2)

𝜔0(0)

=

1 �𝐿𝑜

1 �𝐶𝑜

+

𝐶𝑖

1 +

𝐶𝑥�

(S2.3)

In (S2.2) we also defined the effective driving amplitude
𝜔𝑉� 𝐹 = 𝐼∗𝐿𝑜
(S2.4)
for a pump of frequency 𝜔 and time-varying voltage 𝑉(𝑡) = 𝑉� sin 𝜔𝑡. The initial boundary conditions are assumed to be 𝐴(0) = 0 and 𝐴̇(0) = 0. Equation (S2.2) is similar in form to that of a Duffing oscillator, save for the 𝐴(𝑡)3 term twice differentiated with respect to time 𝑡. The Duffing equation is known to admit stable solutions consisting of subharmonic states whose frequencies are integer multiples of 𝜔⁄𝑁,1,2 where in this case 𝑁 is the integer for which 𝑁𝜔0(0) approximates -
the frequency 𝜔 of the pump. An idealized perfectly tuned pump would have frequency equal to 𝑁 times the fundamental.

In developing our model we purposely neglect higher normal modes of the resonator cavity, instead appealing to a lumped-element approximation. The reason for this is threefold. First is that our experimental investigations with two-tone spectroscopy have shown that higher harmonics are relatively inert with respect to the nonlinear response observed, and thus, can play no significant role. Second is that the observed resonances have extremely narrow observed linewidths, indicative of states that d-
o not couple readily to a dissipative reservoir, unlike normal-mode excitations. Third is that the lumped-element model is sufficient to admit stable nonlinear solutions of character like that of our observations. For example, via perturbation theory, it may be shown that the weakly driven Duffing oscillator admits subharmonic states with largest amplitudes corresponding to the odd harmonics of the pump frequency, much like what we observe experimentally.2 In the present supplement we describe via-
 our model the onset of the subharmonic resonances that give rise to the frequency-comb response of our resonator.

Model Calculation via Perturbation Theory
In our calculations we assume a pump of frequency 𝜔 slightly higher than 𝑁 integer multiples of the fundamental frequency 𝜔0(0) of the resonator. As the pump frequency descends toward the multiple, the pump more strongly couples to the resonator, driving the frequency of the fundamental down.
Hence, the frequency of the fundamental, renormalized by strong nonlinearity, will be denoted as 𝜔0. We will also equate the pump frequency to the value 𝜔𝑁, i.e., 𝜔 = 𝜔𝑁, where the subscript indicates

the proximity of the pump frequency to the 𝑁th multiple of the fundamental. The pump detuning is then the difference between 𝜔𝑁 and 𝑁𝜔0. Unlike linear resonance theory, strong coupling of pump to resonator is not dependent on proximity of pump frequency to normal mode frequency. Rather, it is the matching of phase between the natural resonance at 𝜔0 with that of the pump feedback at 𝜔𝑁 that governs the strength of coupling—the closer the pump frequency is to an integer multiple of the fund-
amental, the stronger the coupling. In fact, the fundamental and the pump may be many octaves apart in frequency and yet couple very strongly.

In the discussion below we will adopt a perturbation theory approach, using the method of successive approximation.3 This allows us to determine how the fundamental frequency is renormalized by the coupling of pump to resonator. It will also allow us to determine the initially strongest subharmonic resonances, and how a comb spectrum begins to fill in at pump harmonics and corresponding sidebands as a function of increased coupling between pump and resonator.

Approach and Zero-Order Approximation
The successive approximation is formulated as follows. We introduce a number 𝜖 ≥ 0 as a
mathematical device, setting 𝜖 = 1 at the end of calculation. We use 𝜖 as a formal parameter of perturbation expansion, although the actual physical perturbation parameter is 𝐹⁄(𝜔𝑁2 − 𝜔02), where in our calculations we will always assume 𝑁 > 1. Hence, results of the perturbation theory will be most applicable when the effective pump amplitude is such that 𝐹 ≪ 𝜔𝑁2 − 𝜔02. This is the regime of initial coupling, i.e., weak tuning, of pump to resonator.

In this approach we expand the fundamental frequency in powers of 𝜖, viz. 𝜔0 = 𝜔0(0) + 𝜖𝜔0(1) + 𝜖2𝜔0(2) + ⋯

(S2.5)

Similarly, the amplitude is expanded as

𝐴(𝑡) = 𝐴(0)(𝑡) + 𝜖𝐴(1)(𝑡) + 𝜖2𝐴(2)(𝑡) + ⋯

(S2.6)

The zero order of the expansion corresponds to the absence of nonlinearity. Hence, the differential equation of (S2.1) may be written as

𝐴̈ (𝑡)

+

𝜔0(0)2𝐴(𝑡)

+

1 3

𝜖

𝑑2 𝑑𝑡2

𝐴(𝑡)3

=

𝐹

cos

𝜔𝑡

(S2.7)

If we include the fundamental response at 𝜔0 and the pump feedback at 𝜔𝑁, as we alluded to above, then

𝐴(0)(𝑡)

=

𝐶0

cos

𝜔0𝑡

−

𝜔𝑁2

𝐹 −

𝜔02

cos

𝜔𝑁𝑡

(S2.8)

Equation (S2.8) is the solution of (S2.7) in the zero order of 𝜖, wherein 𝜔0 → 𝜔0(0). In this limit we also have 𝐶0 = 𝐹⁄(𝜔𝑁2 − 𝜔02) such that the initial boundary conditions 𝐴(0)(0) = 0 and 𝐴̇(0)(0) = 0 are
both satisfied.

First-Order Correction
To obtain the first-order in 𝜖 corrections to (S2.5) and (S2.6) we first note

𝐴̈ (0) (𝑡)

=

−𝜔02𝐶0

cos

𝜔0𝑡

+

𝜔𝑁2 𝐹 𝜔𝑁2 − 𝜔02

cos

𝜔𝑁 𝑡

(S2.9)

Substituting (S2.5), (S2.6), (S2.8), and (S2.9) into (S2.7), and equating terms of first order in 𝜖, we arrive at the constraint

𝐴̈ (1) (𝑡)

+

𝜔0(0)2𝐴(1)(𝑡)

=

2𝜔0(0)𝜔0(1)

�𝐶0

cos

𝜔0𝑡

−

𝜔𝑁2

𝐹 −

𝜔02

cos

𝜔𝑁𝑡�

−

1 3

𝑑2 𝑑𝑡2

𝐴(0)(𝑡)3

(S2.10)

From (S2.8) and the identity

4 cos 𝛼𝑡 cos 𝛽𝑡 cos 𝛾𝑡 = cos(𝛼 + 𝛽 − 𝛾)𝑡 + cos(𝛼 − 𝛽 + 𝛾)𝑡 + cos(𝛼 − 𝛽 − 𝛾)𝑡 + cos(𝛼 + 𝛽 + 𝛾)𝑡

(S2.11)

we have

𝐴(0)(𝑡)3

=

1 4

�3𝐶0

�𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2� cos

𝜔0𝑡

+

𝐶03

cos

3𝜔0𝑡

−

3𝐶02

𝜔𝑁2

𝐹 −

𝜔02

[cos(𝜔𝑁

−

2𝜔0)𝑡

+

cos(𝜔𝑁

+

2𝜔0)𝑡]

𝐹2 + 3𝐶0 (𝜔𝑁2 − 𝜔02)2 [cos(2𝜔𝑁 − 𝜔0)𝑡 + cos(2𝜔𝑁 + 𝜔0)𝑡]

−

3

𝜔𝑁2

𝐹 −

𝜔02

�2𝐶02

+

(𝜔𝑁2

𝐹2 − 𝜔02)2�

cos

𝜔𝑁𝑡

−

(𝜔𝑁2

𝐹3 − 𝜔02)3

cos

3𝜔𝑁𝑡�

(S2.12)

and thus

1 3

𝑑2 𝑑𝑡2

𝐴(0)(𝑡)3

=

−

1 4

�𝐶0

�𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2�

𝜔02

cos

𝜔0𝑡

+

3𝐶03𝜔02

cos

3𝜔0𝑡

−

𝐶02

𝜔𝑁2

𝐹 −

𝜔02

[(𝜔𝑁

−

2𝜔0)2

cos(𝜔𝑁

−

2𝜔0)𝑡

+

(𝜔𝑁

+

2𝜔0)2

cos(𝜔𝑁

+

2𝜔0)𝑡]

+

𝐶0

(𝜔𝑁2

𝐹2 − 𝜔02)2

[(2𝜔𝑁

−

𝜔0)2

cos(2𝜔𝑁

−

𝜔0)𝑡

+

(2𝜔𝑁

+

𝜔0)2

cos(2𝜔𝑁

+

𝜔0)𝑡]

−

𝜔𝑁2

𝐹 −

𝜔02

�2𝐶02

+

(𝜔𝑁2

𝐹2 − 𝜔02)2�

𝜔𝑁2

cos

𝜔𝑁𝑡

−

3

(𝜔𝑁2

𝐹3 − 𝜔02)3

𝜔𝑁2

cos

3𝜔𝑁𝑡�

(S2.13)

Now substituting (S2.13) into (S2.10) gives

𝐴̈ (1) (𝑡)

+

𝜔0(0)2𝐴(1)(𝑡)

=

2𝜔0(0)𝐶0

�𝜔0(1)

+

1 8

𝜔0(0)

�𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2��

cos

𝜔0𝑡

+

3 4

𝜔0(0)2𝐶03

cos

3𝜔0𝑡

−2

𝜔𝑁2

𝐹 −

𝜔02

�𝜔0(0)𝜔0(1)

+

1 8

𝜔𝑁2

�2𝐶02

+

(𝜔𝑁2

𝐹2 − 𝜔02)2��

cos

𝜔𝑁 𝑡

−

3 4

𝜔𝑁2 𝐹3 (𝜔𝑁2 − 𝜔02)3

cos

3𝜔𝑁 𝑡

−

1 4

𝐶02

𝜔𝑁2

𝐹 −

𝜔02

��𝜔𝑁

−

2𝜔0(0)�2

cos(𝜔𝑁

−

2𝜔0)𝑡

+

�𝜔𝑁

+

2𝜔0(0)�2

cos(𝜔𝑁

+

2𝜔0)

𝑡�

+

1 4

𝐶0

(𝜔𝑁2

𝐹2 − 𝜔02)2

��2𝜔𝑁

−

𝜔0(0)

2
�

cos(2𝜔𝑁

−

𝜔0)𝑡

+

�2𝜔𝑁

+

𝜔0(0)

2
�

cos(2𝜔𝑁

+

𝜔0)𝑡�

(S2.14)

from which we discern a term proportional to cos 𝜔0𝑡, the secular term corresponding to the fundamental natural resonance. This term must be eliminated from (S2.14) to prevent a divergence of the perturbation expansion upon integrating to obtain 𝐴(1)(𝑡). The removal of this term defines the first-order correction 𝜔0(1), viz.

𝜔0(1)

=

−

1 8

𝜔0(0)

�𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2�

(S2.15)

which corresponds to a downshift of frequency with increased pump detuning. With the secular term removed, integration of (S2.14) yields the first-order amplitude correction

𝐴(1)(𝑡)

=

−

3 32

𝐶03

cos

3𝜔0𝑡

+

1 4

𝜔𝑁2

𝐹 −

𝜔02

��2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

𝐶02

+

�𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

(𝜔𝑁2

𝐹2 − 𝜔02)2�

cos

𝜔𝑁𝑡

+

3 4

(𝜔𝑁2

𝐹3 − 𝜔02)3

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

cos

3𝜔𝑁𝑡

+

1 4

𝐶02

𝜔𝑁2

𝐹 −

𝜔02

� �𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

cos(𝜔𝑁

−

2𝜔0)𝑡

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)

2
�

�𝜔𝑁 + 3𝜔0(0)�

cos(𝜔𝑁

+

2𝜔0)𝑡�

−

1 16𝜔𝑁

𝐶0

(𝜔𝑁2

𝐹2 − 𝜔02)2

�2𝜔𝑁 �
𝜔𝑁

− −

𝜔0(0)

2
�

𝜔0(0)

cos(2𝜔𝑁

−

𝜔0)𝑡

+

�2𝜔𝑁 𝜔𝑁

+ +

𝜔0(0)

2
�

𝜔0(0)

cos(2𝜔𝑁

+

𝜔0)𝑡�

(S2.16)

Equations (S2.15) and (S2.16) comprise the first-order corrections of the expansions of (S2.5) and (S2.6), respectively. Note that in (S2.16) we see the generation of third harmonics in both 𝜔0 and 𝜔𝑁, and we also see the beginning of sidebands around the first and second pump harmonics. In particular, we recognize the fundamental frequency 𝜔0 as half the free spectral range (FSR) of the frequency-comb response—sidebands fill in at teeth separated by twice the fundamental. This may be viewed a-
s beating between the frequencies of the natural fundamental and the pump feedback. Generally speaking, as will be seen more clearly in second order of the expansion, the sidebands of the odd (even) pump harmonics fill in, with respect to the principle resonance peak, at even (odd) multiples of the fundamental frequency. However, only the odd principle resonance peaks appear, i.e., the odd harmonics of the pump frequency; the even harmonics are absent though their corresponding sidebands begin to -
form. These selection rules are governed by (S2.11), and ultimately by the symmetry of the film geometry, which dictates the expansion of the kinetic inductance of (S2.1) in specific powers of 𝐼𝑜(𝑡).
Second-Order Correction
If we continue the expansion of (S2.5) and (S2.6) applied to (S2.7) and equate terms in 𝜖2 we find the constraint governing the second-order correction, which we may express as

𝐴̈ (2) (𝑡)

+

𝜔0(0)2𝐴(2)(𝑡)

=

�𝜔0(1)2

+

2𝜔0(0)𝜔0(2)� �𝐶0

cos

𝜔0𝑡

−

𝜔𝑁2

𝐹 −

𝜔02

cos

𝜔𝑁𝑡�

1 +
2

𝜔0(1)

�𝜔0(0)𝐶0

�𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2� cos

𝜔0𝑡

+

3𝜔0(0)𝐶03

cos

3𝜔0𝑡

+

2𝐶02

𝜔𝑁2

𝐹 −

𝜔02

��𝜔𝑁

−

2𝜔0(0)�

cos(𝜔𝑁

−

2𝜔0)𝑡

−

�𝜔𝑁

+

2𝜔0(0)�

cos(𝜔𝑁

+

2𝜔0)𝑡�

−

𝐶0

(𝜔𝑁2

𝐹2 − 𝜔02)2

��2𝜔𝑁

−

𝜔0(0)�

cos(2𝜔𝑁

−

𝜔0)𝑡

−

�2𝜔𝑁

+

𝜔0(0)�

cos(2𝜔𝑁

+

𝜔0)𝑡��

−

𝑑2 𝑑𝑡2

�𝐴(0)(𝑡)2𝐴(1)(𝑡)�

(S2.17)

Here, 𝜔0(1) and 𝐴(1)(𝑡) are the corrections we obtained in first order, as given by (S2.15) and (S2.16), respectively. Equation (S2.17) consists of frequency corrections to both zero and first order amplitudes as well as the second-order nonlinearity, which involves the second derivative in time of the terms

𝐴(0)(𝑡)2𝐴(1)(𝑡)

=

�𝐶02

cos2

𝜔0𝑡

−

2𝐶0

𝜔𝑁2

𝐹 −

𝜔02

cos

𝜔0𝑡

cos

𝜔𝑁𝑡

+

(𝜔𝑁2

𝐹2 − 𝜔02)2

cos2

𝜔𝑁𝑡�

×

�−

3 32

𝐶03

cos

3𝜔0𝑡

+

1 4

𝜔𝑁2

𝐹 −

𝜔02

��2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

𝐶02

+

�𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

(𝜔𝑁2

𝐹2 − 𝜔02)2�

cos

𝜔𝑁𝑡

+

3 4

(𝜔𝑁2

𝐹3 − 𝜔02)3

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

cos

3𝜔𝑁𝑡

+

1 4

𝐶02

𝜔𝑁2

𝐹 −

𝜔02

� �𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

cos(𝜔𝑁

−

2𝜔0)𝑡

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)

2
�

�𝜔𝑁 + 3𝜔0(0)�

cos(𝜔𝑁

+

2𝜔0)𝑡�

−

1 16𝜔𝑁

𝐶0

(𝜔𝑁2

𝐹2 − 𝜔02)2

�2𝜔𝑁 �
𝜔𝑁

− −

𝜔0(0)

2
�

𝜔0(0)

cos(2𝜔𝑁

−

𝜔0)𝑡

+

�2𝜔𝑁 𝜔𝑁

+ +

𝜔0(0)�2 𝜔0(0)

cos(2𝜔𝑁

+

𝜔0)𝑡��

(S2.18)

If the factors of (S2.18) are distributed and the identity of (S2.11) is used then terms of like harmonic may be grouped together. After some tedious algebra the result may be written as
𝐴(0)(𝑡)2𝐴(1)(𝑡) =

−

1 8

𝐶0

3 �16

𝐶04

+

𝐶02

(𝜔𝑁2

𝐹2 − 𝜔02)2

�2

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

�2𝜔𝜔𝑁0(0+)�23𝜔0(0)��

+

1 2

(𝜔𝑁2

𝐹4 − 𝜔02)4

�4

�𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

�2𝜔𝑁 − 2𝜔𝑁 �2𝜔𝑁

𝜔0(0)�2 − 2𝜔0(0)�

+

�2𝜔𝑁 + 2𝜔𝑁 �2𝜔𝑁

𝜔0(0)

2
�

+ 2𝜔0(0)

�� �

cos

𝜔0𝑡

−

1 8

𝐶03

3 �8

𝐶02

+

(𝜔𝑁2

𝐹2 − 𝜔02)2

�1

+

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)

�� �

cos

3𝜔0𝑡

−

3 128

𝐶05

cos

5𝜔0𝑡

+

1 16

𝜔𝑁2

𝐹 −

𝜔02

�𝐶04

�2

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)

2
�

�𝜔𝑁 + 3𝜔0(0)

� �

+

𝐶02

(𝜔𝑁2

𝐹2 − 𝜔02)2

�2

�𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

3

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�2𝜔𝑁 − 𝜔0(0)�2 𝜔𝑁 �2𝜔𝑁 − 2𝜔0(0)�

+

𝜔𝑁�2�𝜔2𝜔𝑁 𝑁++𝜔02(0𝜔)�0(20)��

+

3

(𝜔𝑁2

𝐹4 − 𝜔02)4

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2���

cos

𝜔𝑁 𝑡

+

1 16

(𝜔𝑁2

𝐹3 − 𝜔02)3

�𝐶02

�6

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�2𝜔𝑁 − 𝜔0(0)�2 𝜔𝑁 �2𝜔𝑁 − 2𝜔0(0)�

+

�2𝜔𝑁 + 𝜔0(0)�2 𝜔𝑁 �2𝜔𝑁 + 2𝜔0(0)

� �

+

(𝜔𝑁2

𝐹2 − 𝜔02)2

�6

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22���

cos

3𝜔𝑁𝑡

+

3 16

(𝜔𝑁2

𝐹5 − 𝜔02)5

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

cos

5𝜔𝑁𝑡

+

1 16

𝐶02

𝜔𝑁2

𝐹 −

𝜔02

�𝐶02

3 �4

+

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

2

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)

� �

+

(𝜔𝑁2

𝐹2 − 𝜔02)2

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

�2𝜔𝑁

−

𝜔0(0)

2
�

𝜔𝑁 �2𝜔𝑁 − 2𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)

�� �

cos(𝜔𝑁

−

2𝜔0)𝑡

+

1 16

𝐶02

𝜔𝑁2

𝐹 −

𝜔02

�𝐶02

3 �4

+

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)

� �

+

(𝜔𝑁2

𝐹2 − 𝜔02)2

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

�2𝜔𝑁

+

𝜔0(0)

2
�

𝜔𝑁 �2𝜔𝑁 + 2𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)�

+

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)

�� �

cos(𝜔𝑁

+

2𝜔0)𝑡

+

1 16

𝐶04

𝜔𝑁2

𝐹 −

𝜔02

3 �4

+

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)��

cos(𝜔𝑁

−

4𝜔0)𝑡

+

1 16

𝐶04

𝜔𝑁2

𝐹 −

𝜔02

3 �4

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)

2
�

�𝜔𝑁 + 3𝜔0(0)

� �

cos(𝜔𝑁

+

4𝜔0)

𝑡

−

1 16

𝐶0

(𝜔𝑁2

𝐹2 − 𝜔02)2

�2𝐶02

��2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�2𝜔𝑁 − 2𝜔𝑁 �2𝜔𝑁

𝜔0(0)�2 − 2𝜔0(0)�

+

�2𝜔𝑁 + 4𝜔𝑁 �2𝜔𝑁

𝜔+0(20)𝜔�20(0)��

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

3� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝑁 − 2𝜔𝑁 �2𝜔𝑁

𝜔−0(20)𝜔�20(0)���

cos(2𝜔𝑁

−

𝜔0)𝑡

−

1 16

𝐶0

(𝜔𝑁2

𝐹2 − 𝜔02)2

�2𝐶02

��2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)�

+

�2𝜔𝑁 + 2𝜔𝑁 �2𝜔𝑁

𝜔0(0)�2 + 2𝜔0(0)�

+

�2𝜔𝑁 − 4𝜔𝑁 �2𝜔𝑁

𝜔−0(20)𝜔�20(0)��

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

3� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝑁 + 2𝜔𝑁 �2𝜔𝑁

𝜔+0(20)𝜔�20(0)���

cos(2𝜔𝑁

+

𝜔0)𝑡

−

1 16

𝐶03

(𝜔𝑁2

𝐹2 − 𝜔02)2

3 �8

+

�2𝜔𝑁 − 2𝜔𝑁 �2𝜔𝑁

𝜔0(0)�2 − 2𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)

� �

cos(2𝜔𝑁

−

3𝜔0)𝑡

−

1 16

𝐶03

(𝜔𝑁2

𝐹2 − 𝜔02)2

3 �8

+

�2𝜔𝑁 + 2𝜔𝑁 �2𝜔𝑁

𝜔0(0)�2 + 2𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)

� �

cos(2𝜔𝑁

+

3𝜔0)𝑡

+

1 16

𝐶02

(𝜔𝑁2

𝐹3 − 𝜔02)3

�3

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�2𝜔𝑁 − 𝜔0(0)�2 𝜔𝑁 �2𝜔𝑁 − 2𝜔0(0)

� �

cos(3𝜔𝑁

−

2𝜔0)𝑡

+

1 16

𝐶02

(𝜔𝑁2

𝐹3 − 𝜔02)3

�3

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)

2
�

�𝜔𝑁 + 3𝜔0(0)�

+

�2𝜔𝑁 + 𝜔0(0)�2 𝜔𝑁 �2𝜔𝑁 + 2𝜔0(0)

� �

cos(3𝜔𝑁

+

2𝜔0)𝑡

−

3 8

𝐶0

(𝜔𝑁2

𝐹4 − 𝜔02)4

�� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝑁 − 4𝜔𝑁 �2𝜔𝑁

𝜔−0(20)𝜔�20(0)��

cos(4𝜔𝑁

−

𝜔0)𝑡

−

3 8

𝐶0

(𝜔𝑁2

𝐹4 − 𝜔02)4

�� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝑁 + 4𝜔𝑁 �2𝜔𝑁

𝜔+0(20)𝜔�20(0)��

cos(4𝜔𝑁

+

𝜔0)𝑡

(S2.19)

Though a lengthy formula, it is straightforward to differentiate (S2.19) twice with respect to the time variable 𝑡 and apply the result to (S2.17). In so doing, and incorporating the correction of (S2.15), we obtain
𝐴̈(2)(𝑡) + 𝜔0(0)2𝐴(2)(𝑡) =

2𝐶0𝜔0(0)

�𝜔0(2)

−

9 256

𝐶04𝜔0(0)

−

1 32

𝐶02

𝜔0(0)𝐹2 (𝜔𝑁2 − 𝜔02)2

�3

+

4

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

2

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

�2𝜔𝜔𝑁0(0+)�23𝜔0(0)��

−

1 32

𝜔0(0)𝐹4 (𝜔𝑁2 − 𝜔02)4

�3

+

4

�𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

�2𝜔𝑁 − 4𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

− 𝜔0(0)�

+

�2𝜔𝑁 + 4𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

+ 𝜔0(0)

�� �

cos

𝜔0𝑡

−

3 8

𝐶03

𝜔0(0)2

25 �8

𝐶02

+

(𝜔𝑁2

𝐹2 − 𝜔02)2

�4

+

�𝜔𝑁

3 �𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 − 𝜔0(0)�

+

�𝜔𝑁

3 +

�𝜔𝑁 + 2𝜔0(0) 𝜔0(0)� �𝜔𝑁 +

2
� 3𝜔0(0)���

cos

3𝜔0𝑡

−

75 128

𝐶05𝜔0(0)2

cos

5𝜔0𝑡

− 𝜔𝑁2

𝐹 −

𝜔02

�2𝜔0(0)𝜔0(2)

+

1 64

𝜔0(0)2

�𝐶02

+

2

(𝜔𝑁2

𝐹2

2

− 𝜔02)2�

−

1 16

𝐶04𝜔𝑁2

�2

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

�2𝜔𝜔𝑁0(0+)�23𝜔0(0)��

−

1 16

𝐶02

𝜔𝑁2 𝐹2 (𝜔𝑁2 − 𝜔02)2

�2

�𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

3

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�2𝜔𝑁

−

𝜔0(0)

2
�

𝜔𝑁 �2𝜔𝑁 − 2𝜔0(0)�

+

�2𝜔𝑁 + 𝜔0(0)�2 𝜔𝑁 �2𝜔𝑁 + 2𝜔0(0)

� �

−

3 16

𝜔𝑁2 𝐹4 (𝜔𝑁2 − 𝜔02)4

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2���

cos

𝜔𝑁𝑡

+

9 16

(𝜔𝑁2

𝐹3 − 𝜔02)3

𝜔𝑁2

�𝐶02

�6

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�2𝜔𝑁

−

𝜔0(0)

2
�

𝜔𝑁 �2𝜔𝑁 − 2𝜔0(0)�

+

�2𝜔𝑁 + 𝜔0(0)�2 𝜔𝑁 �2𝜔𝑁 + 2𝜔0(0)

� �

+

(𝜔𝑁2

𝐹2 − 𝜔02)2

�6

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22���

cos

3𝜔𝑁𝑡

+

75 16

(𝜔𝑁2

𝐹5 − 𝜔02)5

� 9𝜔𝑁2

𝜔−𝑁4𝜔0(0)2�

cos

5𝜔𝑁𝑡

−

1 16

𝐶02

𝜔𝑁2

𝐹 −

𝜔02

�2𝜔0(0)

�𝜔𝑁

−

2𝜔0(0)� �𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2�

−

𝐶02

�𝜔𝑁

−

2𝜔0(0)�2

3 �4

+

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

2

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)��

−

(𝜔𝑁2

𝐹2 − 𝜔02)2

�𝜔𝑁

−

2𝜔0(0)

2
�

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

�2𝜔𝑁 − 2𝜔𝑁 �𝜔𝑁

𝜔0(0)�2 − 𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

�2𝜔𝜔𝑁0(0+)�23𝜔0(0)���

cos(𝜔𝑁

−

2𝜔0)𝑡

+

1 16

𝐶02

𝜔𝑁2

𝐹 −

𝜔02

�2𝜔0(0)

�𝜔𝑁

+

2𝜔0(0)� �𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2�

+

𝐶02

�𝜔𝑁

+

2𝜔0(0)�2

3 �4

+

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

�2𝜔𝜔𝑁0(0+)�23𝜔0(0)��

+

(𝜔𝑁2

𝐹2 − 𝜔02)2

�𝜔𝑁

+

2𝜔0(0)

2
�

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

�2𝜔𝑁 + 2𝜔𝑁 �𝜔𝑁

𝜔1(0)�2 + 𝜔1(0)�

+

2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)�

+

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)���

cos(𝜔𝑁

+

2𝜔0)𝑡

+

1 16

𝐶04

�𝜔𝑁

−

4𝜔0(0)

2
�

𝜔𝑁2

𝐹 −

𝜔02

3 �4

+

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)��

cos(𝜔𝑁

−

4𝜔0)𝑡

+

1 16

𝐶04

�𝜔𝑁

+

4𝜔0(0)�2

𝜔𝑁2

𝐹 −

𝜔02

3 �4

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)

2
�

�𝜔𝑁 + 3𝜔0(0)

� �

cos(𝜔𝑁

+

4𝜔0)

𝑡

+

1 16

𝐶0

(𝜔𝑁2

𝐹2 − 𝜔02)2

�𝜔0(0)

�2𝜔𝑁

−

𝜔0(0)�

�𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2�

−

2𝐶02

�2𝜔𝑁

−

𝜔0(0)

2
�

��2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�2𝜔𝑁 − 4𝜔𝑁 �𝜔𝑁

𝜔0(0)�2 − 𝜔0(0)�

+

�2𝜔𝑁 + 8𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

+ 𝜔0(0)

� �

−

2

(𝜔𝑁2

𝐹2 − 𝜔02)2

�2𝜔𝑁

−

𝜔0(0)

2
�

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

3

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝑁 − 4𝜔𝑁 �𝜔𝑁

𝜔−0(𝜔0)0(�02)���

cos(2𝜔𝑁

−

𝜔0)𝑡

−

1 16

𝐶0

(𝜔𝑁2

𝐹2 − 𝜔02)2

�𝜔0(0)

�2𝜔𝑁

+

𝜔0(0)�

�𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2�

+

2𝐶02

�2𝜔𝑁

+

𝜔0(0)

2
�

��2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)�

+

�2𝜔𝑁 + 4𝜔𝑁 �𝜔𝑁

𝜔0(0)�2 + 𝜔0(0)�

+

�2𝜔𝑁 − 8𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

− 𝜔0(0)

� �

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2

�2𝜔𝑁

+

𝜔0(0)

2
�

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

3

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝑁 + 4𝜔𝑁 �𝜔𝑁

𝜔+0(𝜔0)0(�02)���

cos(2𝜔𝑁

+

𝜔0)𝑡

−

1 16

𝐶03

(𝜔𝑁2

𝐹2 − 𝜔02)2

�2𝜔𝑁

−

3𝜔0(0)�2

3 �8

+

�2𝜔𝑁 − 4𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

− 𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)��

cos(2𝜔𝑁

−

3𝜔0)𝑡

−

1 16

𝐶03

(𝜔𝑁2

𝐹2 − 𝜔02)2

�2𝜔𝑁

+

3𝜔0(0)�2

3 �8

+

�2𝜔𝑁 + 4𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

+ 𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

�2𝜔𝜔𝑁0(0+)�23𝜔0(0)��

cos(2𝜔𝑁

+

3𝜔0)𝑡

+

1 16

𝐶02

(𝜔𝑁2

𝐹3 − 𝜔02)3

�3𝜔𝑁

−

2𝜔0(0)

2
�

�3

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�2𝜔𝑁 − 2𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

− 𝜔0(0)

� �

cos(3𝜔𝑁

−

2𝜔0)𝑡

+

1 16

𝐶02

(𝜔𝑁2

𝐹3 − 𝜔02)3

�3𝜔𝑁

+

2𝜔0(0)

2
�

�3

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)�

+

�2𝜔𝑁 + 2𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

+ 𝜔0(0)

� �

cos(3𝜔𝑁

+

2𝜔0)𝑡

−

3 8

𝐶0

(𝜔𝑁2

𝐹4 − 𝜔02)4

�4𝜔𝑁

−

𝜔0(0)�2

�� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝑁 − 8𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

− 𝜔0(0)

� �

cos(4𝜔𝑁

−

𝜔0)𝑡

−

3 8

𝐶0

(𝜔𝑁2

𝐹4 − 𝜔02)4

�4𝜔𝑁

+

𝜔0(0)�2

�� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝑁 + 8𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

+ 𝜔0(0)

� �

cos(4𝜔𝑁

+

𝜔0)𝑡

(S2.20)

As in the first-order correction, we must remove from (S2.20) the secular term proportional to cos 𝜔0𝑡. This defines the second-order frequency correction, viz.

𝜔0(2)

=

9 256

𝐶04𝜔0(0)

+

1 32

𝐶02

𝜔0(0)𝐹2 (𝜔𝑁2 − 𝜔02)2

�3

+

4

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

2

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)

� �

+

1 32

𝜔0(0)𝐹4 (𝜔𝑁2 − 𝜔02)4

�3

+

4

�𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

�2𝜔𝑁 − 4𝜔𝑁 �𝜔𝑁

𝜔0(0)�2 − 𝜔0(0)�

+

�2𝜔𝑁 + 4𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

+ 𝜔0(0)

� �

(S2.21)

Upon removal of the secular term the integration of (S2.20) yields, with the aid of (S2.21), the result

𝐴(2)(𝑡)

=

3 64

𝐶03

25 �8

𝐶02

+

(𝜔𝑁2

𝐹2 − 𝜔02)2

�4

+

�𝜔𝑁

3

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 − 𝜔0(0)�

+

�𝜔𝑁

3 �𝜔𝑁 + 2𝜔0(0) + 𝜔0(0)� �𝜔𝑁 +

2
� 3𝜔0(0)���

cos

3𝜔0𝑡

+

75 3072

𝐶05

cos

5𝜔0𝑡

+

𝜔𝑁2

𝐹 −

𝜔02

1 �16

𝐶04

11 �8

𝜔0(0)2

−

2𝜔𝑁2

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

−

𝜔𝑁2

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

−

𝜔𝑁2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)

2
�

�𝜔𝑁 + 3𝜔0(0)

� �

+

1 16

𝐶02

(𝜔𝑁2

𝐹2 − 𝜔02)2

�4𝜔0(0)2

−

�3𝜔𝑁2

−

4𝜔0(0)2�

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

−

2𝜔𝑁2

�𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

2𝜔0(0)2

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

2𝜔0(0)2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)�

−

𝜔𝑁2

�2𝜔𝑁 − 2𝜔𝑁 �𝜔𝑁

𝜔0(0)�2 − 𝜔0(0)�

−

𝜔𝑁2

�2𝜔𝑁 + 2𝜔𝑁 �𝜔𝑁

+𝜔0(𝜔0)0(�02)��

+

1 16

(𝜔𝑁2

𝐹4 − 𝜔02)4

�4𝜔0(0)2

−

�3𝜔𝑁2

−

4𝜔0(0)2�

�𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

𝜔0(0)2

�2𝜔𝑁 − 4𝜔𝑁 �𝜔𝑁

𝜔0(0)�2 − 𝜔0(0)�

+

𝜔0(0)2

�2𝜔𝑁 + 4𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

+ 𝜔0(0)�

−

3𝜔𝑁2

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2���

cos 𝜔𝑁𝑡 𝜔𝑁2 − 𝜔0(0)2

−

9 16

(𝜔𝑁2

𝐹3 − 𝜔02)3

𝜔𝑁2

�𝐶02

�6

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�2𝜔𝑁 − 2𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

− 𝜔0(0)�

+

�2𝜔𝑁 + 2𝜔𝑁 �𝜔𝑁

𝜔+0(𝜔0)0(�02)��

+

(𝜔𝑁2

𝐹2 − 𝜔02)2

�6

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22���

cos 3𝜔𝑁𝑡 9𝜔𝑁2 − 𝜔0(0)2

−

75 16

(𝜔𝑁2

𝐹5 − 𝜔02)5

� 9𝜔𝑁2

𝜔−𝑁4𝜔0(0)2�

cos 25𝜔𝑁2

5𝜔𝑁𝑡 − 𝜔0(0)2

+

1 16

𝐶02

𝜔𝑁2

𝐹 −

𝜔02

�2

�𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2�

𝜔0(0) �𝜔𝑁 − 2𝜔0(0)� �𝜔𝑁 − 𝜔0(0)� �𝜔𝑁 − 3𝜔0(0)�

−

𝐶02

�𝜔𝑁

�𝜔𝑁 − − 𝜔0(0)�

2𝜔0(0)

2
�

�𝜔𝑁 − 3𝜔0(0)�

3 �4

+

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

2

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)��

−

(𝜔𝑁2

𝐹2 − 𝜔02)2

�𝜔𝑁

�𝜔𝑁 − − 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 − 3𝜔0(0)�

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

�2𝜔𝑁 − 2𝜔𝑁 �𝜔𝑁

𝜔0(0)�2 − 𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)

�� �

cos(𝜔𝑁

−

2𝜔0)𝑡

−

1 16

𝐶02

𝜔𝑁2

𝐹 −

𝜔02

�2

�𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2�

𝜔0(0) �𝜔𝑁 + 2𝜔0(0)� �𝜔𝑁 + 𝜔0(0)� �𝜔𝑁 + 3𝜔0(0)�

+

𝐶02

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)

2
�

�𝜔𝑁 + 3𝜔0(0)�

3 �4

+

�2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

�2𝜔𝜔𝑁0(0+)�23𝜔0(0)��

+

(𝜔𝑁2

𝐹2 − 𝜔02)2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)�

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

�2𝜔𝑁 + 2𝜔𝑁 �𝜔𝑁

𝜔0(0)�2 + 𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)�

+

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)

�� �

cos(𝜔𝑁

+

2𝜔0)𝑡

−

1 16

𝐶04

𝜔𝑁2

𝐹 −

𝜔02

�𝜔𝑁

�𝜔𝑁

−

4𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 − 5𝜔0(0)�

3 �4

+

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)��

cos(𝜔𝑁

−

4𝜔0)𝑡

−

1 16

𝐶04

𝜔𝑁2

𝐹 −

𝜔02

�𝜔𝑁

�𝜔𝑁

+

4𝜔0(0)

2
�

+ 3𝜔0(0)� �𝜔𝑁 + 5𝜔0(0)�

3 �4

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

�2𝜔𝜔𝑁0(0+)�23𝜔0(0)��

cos(𝜔𝑁

+

4𝜔0)𝑡

−

1 16

𝐶0

(𝜔𝑁2

𝐹2 − 𝜔02)2

��𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2�

𝜔1(0) �2𝜔𝑁 − 𝜔0(0)� 4𝜔𝑁 �𝜔𝑁 − 𝜔0(0)�

−

𝐶02

�2𝜔𝑁 − 2𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

− 𝜔0(0)�

��2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�2𝜔𝑁 − 4𝜔𝑁 �𝜔𝑁

𝜔0(0)�2 − 𝜔0(0)�

+

�2𝜔𝑁 + 8𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

+ 𝜔0(0)

� �

−

(𝜔𝑁2

𝐹2 − 𝜔02)2

�2𝜔𝑁 − 2𝜔𝑁 �𝜔𝑁

𝜔0(0)�2 − 𝜔0(0)�

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

3

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝑁 − 4𝜔𝑁 �𝜔𝑁

𝜔−0(𝜔0)0(�02)���

cos(2𝜔𝑁

−

𝜔0)𝑡

+

1 16

𝐶0

(𝜔𝑁2

𝐹2 − 𝜔02)2

��𝐶02

+

2

(𝜔𝑁2

𝐹2 − 𝜔02)2�

𝜔0(0) �2𝜔𝑁 + 𝜔0(0)� 4𝜔𝑁 �𝜔𝑁 + 𝜔0(0)�

+

𝐶02

�2𝜔𝑁 + 2𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

+ 𝜔0(0)�

��2𝜔𝜔𝑁2𝑁2 −−𝜔𝜔0(0(00))22�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)

2
�

�𝜔𝑁 + 3𝜔0(0)�

+

�2𝜔𝑁 + 4𝜔𝑁 �𝜔𝑁

𝜔0(0)�2 + 𝜔0(0)�

+

�2𝜔𝑁 − 8𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

− 𝜔0(0)

� �

+

(𝜔𝑁2

𝐹2 − 𝜔02)2

�2𝜔𝑁 + 2𝜔𝑁 �𝜔𝑁

𝜔0(0)�2 + 𝜔0(0)�

��𝜔𝜔𝑁2𝑁2 −−2𝜔𝜔0(0(00))22�

+

3

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�2𝜔𝑁 + 4𝜔𝑁 �𝜔𝑁

𝜔+0(𝜔0)0(�02)���

cos(2𝜔𝑁

+

𝜔0)𝑡

+

1 256

𝐶03

(𝜔𝑁2

𝐹2 − 𝜔02)2

�𝜔𝑁

�2𝜔𝑁 − 3𝜔0(0)�2 − 𝜔0(0)� �𝜔𝑁 − 2𝜔0(0)�

3 �2

+

�2𝜔𝑁 − 𝜔0(0)�2 𝜔𝑁 �𝜔𝑁 − 𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁

−

2𝜔0(0)

2
�

− 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)��

cos(2𝜔𝑁

−

3𝜔0)𝑡

+

1 256

𝐶03

(𝜔𝑁2

𝐹2 − 𝜔02)2

�𝜔𝑁

�2𝜔𝑁 + 3𝜔0(0)�2 + 𝜔0(0)� �𝜔𝑁 + 2𝜔0(0)�

3 �2

+

�2𝜔𝑁 + 𝜔0(0)�2 𝜔𝑁 �𝜔𝑁 + 𝜔0(0)�

+

2

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

�2𝜔𝜔𝑁0(0+)�23𝜔0(0)��

cos(2𝜔𝑁

+

3𝜔0)𝑡

−

1 48

𝐶02

(𝜔𝑁2

𝐹3 − 𝜔02)3

�3𝜔𝑁

−

2𝜔0(0)

2
�

�3𝜔𝑁 − 𝜔0(0)� �𝜔𝑁 − 𝜔0(0)�

�3

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�𝜔𝑁

�𝜔𝑁 − 2𝜔0(0)�2 − 3𝜔0(0)� �𝜔𝑁 −

𝜔0(0)�

+

�2𝜔𝑁 − 2𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

− 𝜔0(0)

� �

cos(3𝜔𝑁

−

2𝜔0)𝑡

−

1 48

𝐶02

(𝜔𝑁2

𝐹3 − 𝜔02)3

�3𝜔𝑁

+

2𝜔0(0)

2
�

�3𝜔𝑁 + 𝜔0(0)� �𝜔𝑁 + 𝜔0(0)�

�3

� 9𝜔𝑁2

𝜔−𝑁2𝜔0(0)2�

+

�𝜔𝑁

�𝜔𝑁 + + 𝜔0(0)�

2𝜔0(0)�2 �𝜔𝑁 + 3𝜔0(0)�

+

�2𝜔𝑁 + 2𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

+ 𝜔0(0)

� �

cos(3𝜔𝑁

+

2𝜔0)𝑡

+

3 64

𝐶0

(𝜔𝑁2

𝐹4 − 𝜔02)4

�4𝜔𝑁 − 𝜔𝑁 �2𝜔𝑁

𝜔0(0)

2
�

− 𝜔0(0)�

� 9𝜔𝑁2

𝜔𝑁2 − 𝜔0(0)2

+

�2𝜔𝑁 − 8𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

− 𝜔0(0)

� �

cos(4𝜔𝑁

−

𝜔0)𝑡

+

3 64

𝐶0

(𝜔𝑁2

𝐹4 − 𝜔02)4

�4𝜔𝑁 + 𝜔𝑁 �2𝜔𝑁

𝜔0(0)

2
�

+ 𝜔0(0)�

� 9𝜔𝑁2

𝜔𝑁2 − 𝜔0(0)2

+

�2𝜔𝑁 + 8𝜔𝑁 �𝜔𝑁

𝜔0(0)

2
�

+ 𝜔0(0)

� �

cos(4𝜔𝑁

+

𝜔0)𝑡

(S2.22)

Equations (S2.21) and (S2.22) constitute the second-order corrections.

Approximate Solution to Second Order
The approximate solution to second order in 𝜖 of the amplitude 𝐴(𝑡) is the sum of the corrections given by (S2.8), (S2.16), and (S2.22), i.e., 𝐴(𝑡) ≅ 𝐴(0)(𝑡) + 𝐴(1)(𝑡) + 𝐴(2)(𝑡), where we now set 𝜖 = 1. Note from (S2.22) that we now have third and fifth harmonics of both 𝜔0 and 𝜔𝑁 appearing in the solution, but there are no even harmonics of these frequencies. Figure S2.1, below, depicts a sketch of the
frequency output in second order of the successive approximation expansion. Again, we see the beginning of sidebands around each pump harmonic, including the even harmonics of frequency 2𝜔𝑁 and 4𝜔𝑁, even though the corresponding amplitudes of these specific frequencies themselves do not appear in the output spectrum. The FSR is clearly twice the fundamental frequency 𝜔0 and, as mentioned earlier, the sidebands of the odd (even) pump harmonics fill in at even (odd) multiples of the
fundamental frequency, with respect to the principle peak of each. Again, the selection rules

determining which sideband teeth appear have their origin in the symmetry of the film geometry, owing to the terms that appear in the expansion of the kinetic inductance of (S2.1).

Figure S2.1. Sketch depicting the frequency spectrum of the output current, as obtained from second-order perturbation theory.

In the second order approximation the renormalized fundamental frequency is given by (S2.15) and (S2.21) applied to (S2.5). If the pump tone is situated at sufficiently large 𝑁 such that 𝜔𝑁2 ≫ 𝜔0(0)2 then the frequency may be expressed as

𝜔0

≅

𝜔0(0)

�1

−

1 8

�𝐶02

+

2

𝐹2 𝜔𝑁4 �

+

3 256

�3𝐶04

+

40𝐶02

𝐹2 𝜔𝑁4

+

24

𝐹4 𝜔𝑁8 ��

(S2.23)

The coefficient 𝐶0 must still be determined.
Note that the initial boundary condition 𝐴̇(0) = 0 is satisfied by our approximation 𝐴(𝑡) ≅ 𝐴(0)(𝑡) + 𝐴(1)(𝑡) + 𝐴(2)(𝑡). To satisfy 𝐴(0) = 0 we set the value of the constant 𝐶0 via 𝐴(0)(0) + 𝐴(1)(0) + 𝐴(2)(0) = 0. This condition produces a polynomial in powers of 𝐶0 whose roots are the possible solutions for the constant. Assuming 𝐶0 evolves continuously and only modestly from its zeroorder value of 𝐹⁄(𝜔𝑁2 − 𝜔02) ≅ 𝐹⁄𝜔𝑁2 we may express the solution as an expansion in powers -
of 𝐹⁄𝜔𝑁2 . To estimate (S2.23) to fourth power in 𝐹⁄𝜔𝑁2 we need only consider an approximation of 𝐶0 to third power. It is then sufficient to estimate 𝐶0 via 𝐴(0)(0) + 𝐴(1)(0) ≅ 0 since 𝐴(2)(0) contributes only terms of order five and higher. Thus, from (S2.8) and (S2.16) we obtain

3 32

𝐶03

−

𝐹 𝜔𝑁2

𝐶02

−

�1

−

1 2

𝐹2 𝜔𝑁4 � 𝐶0

−

1 3

𝐹3 𝜔𝑁6

+

𝐹 𝜔𝑁2

≅

0

(S2.24)

The solution of 𝐶0 via (S2.24) determines the shifted fundamental frequency of (S2.23). Specifically, writing 𝐶0 = 𝛼1 𝐹⁄𝜔𝑁2 + 𝛼2 𝐹2⁄𝜔𝑁4 + 𝛼3 𝐹3⁄𝜔𝑁6 + ⋯ and applying this expansion to (S2.24) we find

𝐹 71 𝐹3 𝐶0 ≅ 𝜔𝑁2 − 96 𝜔𝑁6 ,

𝐹⁄𝜔𝑁2 ≪ 1

(S2.25)

such that

𝜔0

≅

𝜔0(0)

�1

−

3 𝐹2 8 𝜔𝑁4

+

745 768

𝐹4 𝜔𝑁8 �

,

𝐹⁄𝜔𝑁2 ≪ 1

(S2.26)

Supplement 3: Device Fabrication
The device used in this work consisted of a 25 cm long, double-spiral, λ/2 resonator made from a 2/2
µm wide center-electrode/gap coplanar waveguide (CPW) on intrinsic Si (>20 kOhm-cm). See Figure S3.1, below. The CPW was fabricated from a film of superconducting material that was patterned using optical lithography. A single step, SF6 reactive ion etch was used to process the film in order to minimize loss.4 The film was comprised of 20 nm niobium titanium nitride (Nb0.7Ti0.3N) that was deposited at 500 oC using reactive co-sputtering from niobium and titanium targets in an Ar:N2 atmosphere. It -
had a

Figure S3.1. Layout of 20 x 20 mm frequency comb chip with 25 cm long double spiral resonator. The inter-digitated capacitors (insets) on the input and output are 16 and 180 fF, respectively. They are connected micorowave launch with an exponential impedance matching taper that transforms the Z=50 ohm 200-80 µm width-gap CPW launch to a Z=120 ohm 2-2 µm CPW. The light areas are superconducting NbTiN, the gap is shown dark.

critical temperature TC = 13.8 K, and measurements were conducted at relatively low temperatures, from 0.05K < T < 6 K. No frequency dispersion was observed in transmission line test structures of the NbTiN from DC up to at least 20 GHz. This can be expected to be the case up to frequencies comparable to twice the superconducting gap, i.e. f ~ 2∆/h = 2×1.76kBTC/h ~ 1 THz.

The fundamental resonator frequency was measured to be 𝑓𝑜 =59.738181 MHz, in good agreement

with

that

expected

from

the

formula

𝑓0

=

√1

−

𝛼

𝑐 2𝑙𝑛𝑒𝑓𝑓

where the length of the CPW resonator is

l=0.25 m, the effective dielectric constant is neff=2.6 for a CPW on Si, and the kinetic inductance fraction 𝛼 = 0.93 was determined from the frequency shift of a test resonator. It agrees well with the value obtained from Mattis-Bardeen theory using the measured sheet resistance of 84 Ω/square, giving a value for the kinetic inductance of L0 =6 pH/square. The nonlinearity of the total inductance, given by equation (S2.1), was observed to be up to [𝐼0𝑀𝑎𝑥(𝑡)⁄𝐼∗]2 = 9%, where the scaling fact-
or 𝐼∗ = 12 𝑚𝐴 is on the order of the superconductor critical current. Values of the coupling capacitors on the input and output of 16 and 180 fF were chosen to be critically coupled at 5 GHz and 100 MHz, respectively, in order to pump the system optimally at high frequency and allow low frequency energy out.
References
1 M. E. Levinson, J. Appl. Phys. 20, 1045 (1949); C. Holmes and P. Holmes, J. of Sound and Vibration 78 (2), 161 (1981) 2 D. W. Jordan and P. Smith, Nonlinear Ordinary Differential Equations: An Introduction for Scientists and Engineers, (Oxford University Press, Oxford, 2007), Fourth Edition, pp. 242-251. 3 L. D. Landau and E. M. Lifshitz, Mechanics, (Pergamon Press, Oxford, 1976), Third Edition, pp. 84-92. 4 P. Del’Hay, O. Arcizet, A. Schliesser, R. Holzwarth, T.J. Kippenberg, Phys. Rev. Lett. 1-
01, 053903 (2008).
*David.P.Pappas@NIST.gov

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:47.927Z
- **Text Length:** 38176 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
