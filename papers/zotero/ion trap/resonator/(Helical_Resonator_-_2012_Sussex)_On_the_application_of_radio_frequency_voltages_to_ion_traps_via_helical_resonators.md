# PDF Document: (Helical Resonator - 2012 Sussex) On the application of radio frequency voltages to ion traps via helical resonators.pdf

**File Path:** (Helical Resonator - 2012 Sussex) On the application of radio frequency voltages to ion traps via helical resonators.pdf

**Processed Date:** 2026-02-10T18:17:08.939Z

**File Size:** 1475.10 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1091

**Title:** (Helical Resonator - 2012 Sussex) On the application of radio frequency voltages to ion traps via helical resonators

**Collection:** Ion Trap

---

## Extracted Text Content

Appl Phys B (2012) 107:921–934 DOI 10.1007/s00340-011-4837-0
On the application of radio frequency voltages to ion traps via helical resonators
J.D. Siverns · L.R. Simkins · S. Weidt · W.K. Hensinger

Received: 24 June 2011 / Revised version: 17 October 2011 / Published online: 17 January 2012 © Springer-Verlag 2011

Abstract Ions conﬁned using a Paul trap require a stable, high voltage and low noise radio frequency (RF) potential. We present a guide for the design and construction of a helical coil resonator for a desired frequency that maximises the quality factor for a set of experimental constraints. We provide an in-depth analysis of the system formed from a shielded helical coil and an ion trap by treating the system as a lumped element model. This allows us to predict the resonant frequency and quality -
factor in terms of the physical parameters of the resonator and the properties of the ion trap. We also compare theoretical predictions with experimental data for different resonators, and predict the voltage applied to the ion trap as a function of the Q factor, input power and the properties of the resonant circuit.
1 Introduction
Trapped ions are a powerful tool which have many applications such as mass spectrometry [1] and frequency standards [2, 3], whilst also being recognised as a leading contender for the practical implementation of quantum information processing [4–6] and quantum simulations [7–10]. To trap ions within a Paul trap, a high radio frequency voltage is applied to electrodes in order to provide the required electric potential. A helical resonator allows impedance matching between a radio frequency source -
and an ion trap, enabling high voltages while reducing the noise injected into the system. These properties make the resonator an important device not only in ion trapping but also in a wide range
J.D. Siverns · L.R. Simkins · S. Weidt · W.K. Hensinger ( ) Department of Physics and Astronomy, University of Sussex, Brighton, UK e-mail: W.K.Hensinger@sussex.ac.uk

of physical sciences including ultra high frequency (UHF) mobile communication systems [11], spin resonance spectroscopy [12] and measuring the dielectric properties of materials [13].
An empirical study of shielded helical coil resonators was performed by Macalpine and Schildknecht [14] who considered isolated operation at a self-resonant frequency due to the coil inductance and shield capacitance. In contrast, we consider a shielded helical coil connected to an ion trap where the resonant frequency will be determined by the whole system. Macalpine and Schildknecht [14] showed that, when tuning a resonator with an external capacitance, the Q factor would vary with the tuned res-
onant frequency, however, they did not predict this resonant frequency or the effect of a lossy (resistive) capacitance on the Q factor. Due to these limitations, when connecting an ion trap to a helical resonator the predications of Macalpine and Schildknecht [14] for the resonant frequency and Q factor can deviate by orders of magnitude from those observed. In this paper, we will provide reliable predictions for the resonant frequency and Q factor for a shielded helical coil connected to an ion -
trap impedance. We also provide a design guide which allows a helical resonator to be constructed with the highest possible Q factor for the constraints of a particular experiment. We also discuss the process of impedance matching with a helical resonator and predict the voltage applied to the ion trap as a function of the Q factor, input power and the properties of the resonant circuit.
2 Trapping charged particles
Paul traps [1], which are a prime candidate for quantum information processing [4–6], trap ions using a radio frequency (RF) voltage applied to some of the trap electrodes

922
Fig. 1 (a) Diagram showing a quadrupole Paul trap. The ponderomotive potential due to the RF and ground electrodes provide conﬁnement in all three dimensions. All electrodes are hyperbolically shaped. (b) A two-layer linear Paul trap with two rod RF electrodes and two segmented RF ground electrodes providing transverse conﬁnement with static voltages present to provide conﬁnement in the axial dimension. (c) Diagram showing a ﬁve-wire surface Paul trap. Here the ion is conﬁned in a potential create-
d by the surface electrodes at the mid-point between the two RF strips. Control static voltage electrodes are present to enable conﬁnement along the axial direction of the trap. This enables ions to be transported along the length of the trap [17]

J.D. Siverns et al.

in order to obtain a suitable ponderomotive pseudopotential. Figure 1 shows examples of different types of Paul trap designs. The potential used to trap an ion of mass, m, and charge, e, is given by [15, 16]

ψ

=

e2V02η2 4mr 4 Ωr2f

x2 + y2

,

(1)

where Ωrf is 2π times the RF frequency in hertz (throughout the text, when analysing the overall resonant circuit we will refer to Ωrf as ω or ω0 when the circuit is on resonance), r is the distance from the centre of the trap to the nearest electrode and V0 is the amplitude of the RF voltage applied to the trap. η is a geometric efﬁciency factor [16] which is equal to one for a perfectly hyperbolic geometry (similar to the trap shown in Fig. 1(a)) and less than one as the geometry strays from thi-
s perfect form.
The secular frequency of an ion trapped inside the ponderomotive pseudopotential, given in (1), is then given by [15, 16]

ωs

=

√ eV0η . 2mr 2 Ωrf

(2)

Linear ion traps (as seen in Fig. 1(b) and (c)) possess a linear node in the produced ponderomotive potential. To provide ion conﬁnement along this node, additional static voltages are applied to certain electrodes. The equations of motion for an ion inside this potential are given by the Mathieu equations [1], which feature stability parameters.

Stable motion of an ion in the trapping ﬁeld will only oc-

cur over certain ranges of these parameters and is depen-

dent on the initial position and momentum of the ion. It

can be seen from (1) and (2) that a high voltage will lead

to a deep trapping potential and a high secular frequency.

A deep potential provides long ion lifetimes and large sec-

ular frequencies typically allow for faster ion transportation

[17], more efﬁcient ground state cooling and shorter quan-

tum gate times.

The application of high voltages must, however, be lim-

ited to avoid both electrical breakdown or experimentally

intrusive temperatures due to the power dissipated in the ion

trap. It is important to know the voltage being applied to

the ion trap for a given input power. A combined ion trap–

resonator system can be represented as a series LCR circuit

with

resonant

frequency

ω0 =

√1 LC

and

Q=

1 R

L C

.

The

voltage over the ion trap will be approximately equal to the

voltage over the capacitor when the capacitance of the ion

trap dominates the overall capacitance of the circuit. At res-

onance the peak voltage over the capacitor is equal to the

peak voltage over the inductor. The instantaneous voltage of

the inductor is

V

(t )

=

L dIpeak sin(ω0t) dt

=

Lω0Ipeak

cos(ω0 t ),

(3)

where Ipeak is the peak current and L is the coil inductance. The peak voltage over the inductor occurs when cos(ω0t) = 1, hence the peak voltage over the ion trap can be approximated as

On the application of radio frequency voltages to ion traps via helical resonators

923

Fig. 2 A resonator end cap showing the antenna coil together with a diagram showing its location in a fully constructed helical resonator

Vpeak ≈ LIpeakω0.

(4)

Power is only dissipated in the system through the resistance R, thus the power dissipated is

Pd

=

RIr2ms

=

1 2

RIp2eak,

(5)

where

Irms

=

√1 2

Ipeak

is

the

root-mean-square

current.

Us-

ing

these

equations

and

Q

=

1 R

L C

,

we

ﬁnd

that

Vpeak ≈ κ 2P Q,

(6)

where

1

κ= L 4

(7)

C

and

Vrms = V√peak ≈ κ P Q. 2

This shows that the output voltage of a resonating system

can be predicted given the input power, P , the capacitance,

C, inductance, L, and quality factor Q of the system. Ap-

plying RF voltages via a high Q factor resonator reduces

the power in unwanted frequencies being applied, reducing

their contribution to motional heating of ions [18], and also

provides higher voltages per input power, resulting in deeper

trapping potentials and higher secular frequencies.

The impedance of the ion trap and connections are typ-

ically large enough to contribute to the response of an

LCR resonator, and thus must be considered when design-

ing a resonator to operate at a given frequency. Consider-

ing

ω0

=

√1 LC

and

Q=

1 R

L C

,

in

order

to

maximise

the

Q

factor for a ﬁxed frequency ω0 we must minimise C while

maximising L. The use of a helical coil allows for an induc-

tor to be made with a low self-capacitance and resistance,

enabling the resistance and capacitance of the ion trap and

connections to dominate the R and C of the LCR resonator

and thus maximising the Q factor.

3 Circuit model
3.1 Impedance matching via inductive coupling
RF voltages can be applied by direct connection from the ion trap to an RF ampliﬁer; however, this can cause multiple issues. A mismatch of impedance between the ampliﬁer and the ion trap will cause the RF signal to be reﬂected from the ion trap, resulting in power dissipated over the output impedance of the ampliﬁer. This will require an RF ampliﬁer with a much greater power handling than for a matched system. The ampliﬁer will also inject noise into the ion trap which can cause heating of the io-
n [18]. Passing the output of the ampliﬁer through a resonator will ﬁlter this noise, reducing the contribution to ion heating. In order to maximise the ﬁltering of this noise, the resonator must have a high Q factor, and hence a narrow bandwidth. Direct connection of a resonator to the ampliﬁer will reduce the resonator’s Q factor due to the damping effect of the ﬁnite output impedance of the ampliﬁer. The RF ampliﬁer can, however, be connected to the resonator through a capacitive or inductive c-
oupling, which decouples the resonator from the resistive output impedance of the ampliﬁer, allowing for a resonator with a high Q factor. This technique also allows impedance matching of the ion trap and RF ampliﬁer by altering the coupling, thus reducing the reﬂected power, and hence the required power for a given voltage.
For inductive coupling an antenna coil is attached to an end cap and placed directly and centrally above the main helical coil as shown in Fig. 2. By altering the physical properties of this coil, impedance matching between the resonator and the radio frequency source can be achieved.
To understand how altering the physical properties of the antenna coil allows impedance matching, the resonator is represented by two electrically isolated circuit loops as shown in Fig. 3. Here the inductor, L1, represents the antenna coil and the inductor, L2, represents the main coil. The voltage source Vs and impedance Z0 represent the output of an RF ampliﬁer. The two coils are placed in close proxim-

924

J.D. Siverns et al.

Fig. 3 (a) Circuit of a resonator with attached load (inside dashed box) and signal generator (outside dashed box) represented as two physically separate circuit loops coupled together by the antenna coil inductor, L1, and the main coil inductor, L2. The impedance of the ion trap is shown as a load impedance, ZL. The source voltage and impedance (outside dashed box) are shown as Vs and Z0, respectively. (b) The circuit from (a) is represented as the Thévenin equivalent impedance, Zin, along with t-
he source voltage and impedance

ity to each other creating a coupling between the two circuit loops due to the mutual inductance.
The voltage in each circuit loop is given by

V1/2 = iωL1/2I1/2 + iωMI2/1,

(8)

√ where M = k L1L2 is the mutual inductance of the two

coils and k is the coupling. The equivalent circuit is given

in Fig. 3(b) where the impedance Zin describes the over-

all impedance of the resonator (and ion trap), which can be

adjusted by altering the physical parameters of the antenna

coil enabling an impedance match to the RF ampliﬁer (Vs

and Z0). The overall impedance, Zin, of the two circuits, as

shown in Fig. 3, is then

Zin

=

V1/I1

=

iωL1

+

iωM

I2 I1

.

(9)

Using

V2 = −ZLI2

(10)

and (8), we obtain

(ZL + iωL2)I2 + iωMI1 = 0.

(11)

Rearranging (11) for I2/I1 gives

I2 I1

=

−iωM ZL + iωL2 .

(12)

Inserting (12) into (9), we can describe the overall

impedance as

Zin

=

iωL1

+

ω2M2 iωL2 + ZL

.

(13)

Fig. 4 The ratio of number of antenna turns N to winding pitch τ , required to impedance match the load to a 50 ohm source is plotted as a function of the antenna coil diameter. This is shown for the case when the combined resonator–ion trap load is high (solid black line, a resistance of 15 ohm and a capacitance of 100 pF), and for the case when the load is small (dashed black line, a resistance of 0.2 ohm and a capacitance of 1 pF). In both cases, a resonant frequency of ω = 2π × 20 MHz is used

We can approximate the antenna coil’s inductance as

L1

=

μ0N τ

A

,

where

τ,

N

and

A

are

the

winding

pitch,

num-

ber of turns and cross-sectional area of the coil, respectively,

and μ0 is the permittivity of vacuum, giving

Zin

=

μ0N A τ

iω

+

k2L2ω2 iωL2 + ZL

.

(14)

This shows that the input impedance of the resonator can

be altered by simply adjusting the physical parameters of

the antenna coil and, thus, match it to that of the voltage

source. To illustrate how the physical parameters have to be

altered to achieve a matching, (14) has been plotted for two

common cases. The ﬁrst case (solid black line) is when the

combined resonator–ion trap load is high (a resistance of

15 ohm and a capacitance of 100 pF) and the second (dashed

black line) when the load is small (a resistance of 0.2 ohm

and a capacitance of 1 pF). In both cases, the traps are driven at a frequency of ω = 2π ×20 MHz. Figure 4 shows the ratio

of number of antenna turns to winding pitch as a function of

the diameter of the coil required to impedance match the

load to a 50 ohm source. Figure 5 then illustrates how an

existing antenna coil can be physically stretched (increasing

the winding pitch of the coil) to impedance match to a source

load. In Fig. 5, the number of turns is kept constant at 3 and

the diameter is kept constant at 3 cm.

Figure 5 shows that in order to impedance match a source

to a high impedance trap load (solid line) the antenna coil

must be stretched compared with that required to match a

low impedance trap load (dashed line).

3.2 Description of resonant frequency and Q factor using an LCR circuit model

In order to calculate the Q factor and resonant frequency ω0, the resonator is modelled as a lumped element circuit, shown

On the application of radio frequency voltages to ion traps via helical resonators

925

Fig. 5 The resonator input impedance, Zin, is shown as a function of the winding pitch, τ , of the antenna coil. This is shown for the case of a high combined resonator–ion trap load (ZL given by a resistance of 15 ohm and a capacitance of 100 pF) shown by the solid black curve and for the case of a small load (ZL given by a resistance of 0.2 ohm and a capacitance of 1 pF) shown by the dashed black curve. In both cases, a resonant frequency of ω = 2π × 20 MHz is used and the number of turns and co-
il diameter are kept constant at 3 and 3 cm, respectively

in Fig. 6(a), which is simpliﬁed via Fig. 6(b) to Fig. 6(c) by

creating Thévenin equivalent impedances, where each com-

ponent is deﬁned in the table in Fig. 6(d).

The coil impedance will depend on the mutual coupling,

ZM , which can be written as

ZM

=

iXLc

+

ω2M2 iωLa + Z0

(15)

by using the same method employed to arrive at (13), where

XLc = Lcω is the reactance due to the inductance of the main coil. However, with the typical values required by ion

trapping of RF drive frequency between ω ≈ 2π × 10 MHz and 2π × 50 MHz, Lc ≈ La ≈ 1 mH and Z0 = 50 ohm, it can be shown that |ZM | ≈ iXLc . Thus, we can express:

1

1 −1

Zcoil =

+ (iXLc + Rc) iXCc

.

(16)

Summing the trap capacitance and resistance in parallel with

the wire capacitance and shield capacitance, we can write

the ZE impedance as

ZE =

1

+ 1 +1

(iXCt + Rt ) iXCw iXCs

−1
,

(17)

where

XCt

=

1 Ct ω

is

the

reactance

of

the

trap

capacitance

and XCw and XCs are the reactance due to Cw and Cs , re-

spectively.

The total impedance of the resonator, Ztot, can then be expressed as

Ztot = Zcoil + ZE + Rs + Rj .

(18)

We can express both Zcoil = Rcoil + iXcoil and ZE = RE + iXE , where Rcoil and RE are the equivalent series resistance of the coil and experimental system, respectively,
and Xcoil and XE are the equivalent series reactance for

Fig. 6 Diagram showing the electrical equivalent of the overall resonant circuit. Part (a) shows the lumped element model electrical equivalent. Part (b) shows the simpliﬁed circuit. Part (c) shows the set of serial impedances the resonator can be represented as

the coil and experimental system, respectively. At resonance Ztot will be purely resistive when

Xcoil + XE = 0.

(19)

From the calculated Thévenin equivalent impedances from Fig. 6 it can be shown that at resonance,

iω0LC 1 − LC CC ω02

+

iω0(Cs

1 + Ct

+ Cw)

=

0.

(20)

This equation can be used to calculate the resonant fre-

quency:

ω0

=

√ (Cs

+

Ct

1 + Cw

+

CC )LC

.

(21)

926

The

Q

factor

is

deﬁned

as

Q

≡

ω0

Energy stored Power dissipated

.

The

en-

ergy stored in the resonator will oscillate between the in-

ductance of the coil and the combined capacitances in the

circuit. The total energy stored will be equal to the peak energy stored in the inductor ELc = Ip2eakLc/2 = Ir2msLc and the power dissipated in the system is Pd = Ir2msRESR where RESR is the equivalent series resistance of the circuit and is

given by the real part of (18). It can then be shown that the

Q factor of a resonator is given by the following:

Q = XLc .

(22)

RESR

From (18), RESR can be derived as

RESR

=

Rc2

+

RcXC2 c (XCc +

XLc )2

+

Rt2

+

Rt XR2 (XR + XT

)2

+ Rs + Rj .

(23)

For helical coils with a low self-capacitance (XLc XCc ) and low resistance (Rc XCc ), and for an ion trap with low resistance such that Rt (XCt + XCw + XCs ), this can be approximated as

RESR Rj + Rc + Rs + Rt α2,

(24)

where

α=

a a+1

,

a

=

XR XT

=

Ct Cs +Cw

is the ratio

of the trap

ca-

pacitance to the combined capacitance due to the connect-

ing wires and coil shield. For a → 0 the capacitance of the

shield and wires shunt the RF current, and there is negligible

contribution from the resistance of the ion trap. For a → ∞

the trap capacitance dominates, giving a maximum contri-

bution of the ion traps resistance.

It should be noted that, as high Q factors are obtained

when maximising the coil inductance and minimising the

system capacitance, the effect of wire and feed-through in-

ductance will be negligible compared to a typical coil induc-

tance and, as such, has not been included in the model. This

is not true of stray capacitances which can be on the same

order of magnitude as the ion trap capacitance and can be

treated as part of the wire capacitance Cw.

3.3 Resonator capacitance, inductance and resistance

In order to construct a resonator to operate at a desired frequency, the capacitance of the wires and ion trap CΣ = Cw + Ct , which depend on the conﬁguration of the ion trap and experimental setup, can be measured at the vacuum systems feed-through with a capacitance meter. Once these are known, we must construct a shielded coil, as shown in Fig. 7, with the necessary capacitance Cc and Cs and inductance LC . All equations in this section assume the use of SI units unless otherwise stated. The se-
lf-capacitance of the coil in units of farads, given empirically by Medhurst, is [19]

CC (H d) × 10−12,

(25)

J.D. Siverns et al.

Fig. 7 Outline design of a resonator, showing the shield diameter D, shield height h, coil diameter d, coil height b, winding pitch τ and the coil wire diameter d0

where d is the diameter of the coil and H is given empiri-

cally by,

H

=

11.26

b d

+8+

√27 b/d

F/m.

The capacitance present between the coil wire and the

outer shield in units of farads is given empirically by [14]

Cs ≈ bKCs (d, D),

(26)

where

KCs

(d ,

D)

=

0.75

39.37

log(

D d

)

×

10−12

F/m,

d is the diameter of the coil, D the inner shield diameter and b is the height of the coil.
The inductance of a coil inside a shield in units of henrys, for b/d ≥ 1, is given empirically by [14]

LC ≈ bKLc (d, D, τ ),

(27)

where

KLc

(d ,

D,

τ

)

=

39.37

0.025d2(1 − τ2

(

d D

)2)

×

10−6

H/m

and τ is the winding pitch of the coil.
We can approximate the required height of a coil, b, for a
resonator to operate at frequency ω0, for chosen parameters of d, D and τ and for a set of measured capacitances CΣ = Cw + Ct . The coil’s self-capacitance, given by (25), significantly complicates the solution for coil height, b; however,
a simpler solution can be found by approximating the self-
capacitance as a linear equation. Examining (25), it can be seen that the maximum of the nonlinear term √27 occurs
b/d
when b/d < 1. As we require that b/d ≥ 1, a simple linear
approximati√on for the coil self-capacitance can be found by setting the b/d term to 1. This gives an overestimate of
the self-capacitance but allows for an approximate solution
for the coil height which will give a resonator with a reso-
nant frequency typically within 2% of the desired frequency.
The linear approximation to the coil self-capacitance is, CC Kcbb + Kcd , where Kcb = 11.26 × 10−12 F/m and Kcd = 35d × 10−12 F. Substituting this approximation with

On the application of radio frequency voltages to ion traps via helical resonators

927

(27) and (26) into (21) and rearranging for b in units of metres, we obtain:

b

CΣ + Kcd KCs + Kcb

×

KCs + Kcb (CΣ + Kcd )2KLc ω02

+

1 4

−

1 2

m.

(28)

In order to estimate the resistance of the resonator, one must consider the path along which the current ﬂows and how it ﬂows along this path. The current will ﬂow along the surface on its path with a depth, δ, given by the skin depth of the coil material (in this case, copper) at the resonant frequency of the resonator. However, additionally, the current in the shield must form a spiral which acts to form an equal and opposite magnetic ﬁeld as that produced by the coil (Lenz’s law). The distance -
around the shield the current will travel, ls , can be calculated by equating the magnetic ﬁeld, created by the coil at the shields surface:

Bﬁeld

=

μI lc 4π(D −

d )2

,

(29)

to that created by the shield Bshield:

Bshield

=

μNs I b

,

(30)

where lc is the unwound length of the coil. This can then be solved to ﬁnd the number of turns the

current undergoes in the shield, Ns :

Ns

=

blc 4π(D −

d )2

.

(31)

The distance the current will travel from the bottom of the shield to the top of the shield can then be calculated as

ls = Ns

π2D2 +

b

2
.

Ns

(32)

The resistance of the coil and the shield can now be calculated using the relationship between resistance, R, and resistivity, ρ:

R = ρls ,

(33)

A

where l is the length along which the current travels and

A the area through which the current travels. We can now

describe the resistance of the coil and shield as

Rc

=

ρlc d0π δ

,

(34)

Rs =

Ns ρls bδ

,

(35)

where d0 is the diameter of the coil wire. We must also take into account additional resistances ac-
quired by attaching the coil to the shield. The coils in this paper are attached to the shield by soldering them onto a

BNC

bulkhead

located

at

a

distance

D 4

from

the

top

of

the

shield as indicated in [14] and Figs. 7 and 12. The solder

joint created by this method will provide an additional re-

sistance. The resistance of the connection at an angular fre-

quency, ωn, is given by

Rn

=

ρl ,
π dj δn

(36)

where ρ is the resistivity of the material, l is the length

through which the current ﬂows, δn is the skin depth at an

angular frequency ωn and dj is the diameter of the solder

joint. Due to the effects of skin depth at high frequencies, a

simple DC resistance measurement of the joint connecting

the coil to the shield is not useful. Instead, an AC resistance

measurement must be made of the joint. Equipment ex-

ists (for example, ISO-TECH: LCR819) which can perform

resistance measurements at frequencies of approximately

100 kHz and this measurement can then be used to infer the

resistance of the joint at a higher frequency, in this case the

resonant frequency of the resonator. The measurement fre-

quency needs to be chosen so that the skin depth is smaller

then the radius of the joint. By deﬁning γ = (ρl)/(πdj ),

(36) can be rewritten as

Rn

=

γ .
δn

(37)

By using the frequency independent parameter, γ , it is

possible to show for two different angular frequencies, ω1

and ω2,

R1δ1 = R2δ2,

(38)

√

and rearranging using δn = 2 (ρ)/(ωnμ0) gives the resis-

tance at a resonant angular frequency ω0 in terms of the re-

sistance measured at an angular frequency ω1:

R0 = R1

ω0 . ω1

(39)

This derivation is only valid in a frequency regime where the solder joint is larger than the skin depth and when the resistivity, ρ, of the material is constant over the two frequencies used. This is the case for the resonators made in this paper as the skin depth is of the order of 10 μm and the solder joint size is on the order of a few millimetres.
Equation (39) shows that by taking a resistance measurement at one frequency it is possible to calculate the resistance at another frequency. This method was used to calculate the resistance of the connection made between the main coil and the shield at the resonators resonant frequency.

4 Resonator design guide and analysis
4.1 Design guide
This section will provide a design guide which will enable a helical resonator to be constructed with a Q factor close to

928

J.D. Siverns et al.

that of the highest Q possible for a given set of parameters consisting of the desired resonant frequency, ω0, ion trap capacitance, Ct , and resistance, Rt , wire capacitance, Cw, and the size constraints for the resonator. The helical resonator may require different construction techniques depending on priorities set by these constraints; however, there are some design issues universal to any resonator that must be considered.
When designing a resonator, it is important that certain constraints are met for the resonant frequency and Q factor to be predicted by the theory. The resonant frequency depends on the inductance, which is predicted by (27). For this equation to be valid, the coil height should be greater than the coil diameter, b ≥ d, and the coil diameter should be greater than the wire diameter, d ≥ d0.
We can see from (27) that both the coil diameter and the winding pitch have a strong (d2 and 1/τ 2) effect on the inductance. It is important to ensure the coil is made with precision for the winding pitch and the diameter of the coil to be constant along its length. This dependence also requires that the coil is not susceptible to mechanical vibrations. The strong effect the winding pitch, τ , has on the inductance will result in vibrations of the coil causing the inductance and hence resonant fr-
equency of the resonator to become time dependent. In order to minimise vibrational effects, the coil should be constructed to be rigid and should be ﬁrmly mounted inside the shield. Finally, the coil must be mounted centrally inside an outer shield of height B ≥ b + D/2 (we would typically recommend B = b + D/2), where b is the coil height and D is the shield diameter, in order to keep the coil fringe effects from reducing the coil’s inductance and increasing the shield capacitance [20].
In order to achieve high Q factors, the resonator must be built to minimise the resistance of the shield, the coil and solder joints. The coil and shield should be made from a highly conductive material (such as copper) which is thicker than the skin depth at the desired operating frequency. Any solder joints should be made with a clean oxide free surface before soldering, with both parts of the joint reaching a sufﬁcient temperature to ensure good solder ﬂow between them.
A low resistance for the helical coil can be obtained by ensuring the use of a large diameter wire, d0. The effect of the wire diameter on the Q factor can be seen by plotting the ‘largest’ Q factor vs wire diameter d0. We can deﬁne the ‘largest’ Q factor available, Qlarge, for a given set of parameters, ω0, Ct , Cw, Rt and d0, where the coil diameter, d, and shield diameter, D, are chosen to maximise the Q factor. Figure 8 shows a plot of Qlarge vs d0 for three traps of Ct = 5 pF and Rt = 5 ohm, -
Ct = 20 pF and Rt = 15 ohm, Ct = 50 pF and Rt = 15 ohm all for a resonant frequency of ω0 = 2π × 10 MHz. There is an asymptotic increase to higher Q factors for large values of d0. Even for high resistance, and capacitance traps modest Q factors of ≈100 can

Fig. 8 Q factor for values of d and d/D that maximise the Q factor for varying wire diameter, d0, for traps D (solid), H (dashed) and I (dot-dashed) from Table 1 at ω0 = 2π × 10 MHz
Fig. 9 D vs d0 for the D value that achieves a Q factor of Qlarge (solid line) and the minimum D value that achieves a Q factor of Q90% (dashed line) for trap D from Table 1 at ω0 = 2π × 10 MHz
be achieved; however, this requires the coil to be formed from a thick rod. The upper limit to d0 will result from an intersection of the limits that the coil height must be larger than the coil diameter, b/d ≥ 1, and the coil diameter must be larger than the wire diameter, d > d0. Increasing d0 will increase the Q factor but will also increase the size of the resonator. It can be seen in Fig. 9 how the shield diameter required for Qlarge (solid line) rapidly increases with d0. However, for a Q fa-
ctor 90% of Qlarge, Q90%, a smaller shield diameter can be used. The minimum D for Q90% is shown in Fig. 9 (dashed line). It is clear that making a resonator with a Q factor of Q90% can reduce the size required for the resonator.
When designing a helical resonator for a speciﬁc experiment (for example a particular microfabricated ion trap [21]) it is useful to examine contour plots of the Q factor as a function of coil diameter, d, and the ratio of the coil diameter to the shield diameter, d/D, as shown in Figs. 10 and 11. Using these plots, it is possible to choose values of d and d/D that will optimise the Q factor for a set of parameters. These plots can be obtained using the parameters for ω0, Ct , Cw, Rt for a given e-
xperiment and choosing values of d0, τ and measuring or estimating Rj . The Q factor Q(d, d/D) can be obtained by calculating:

On the application of radio frequency voltages to ion traps via helical resonators

929

Fig. 10 Contour plots for traps A, B and C (speciﬁcations in Table 1) shown for operation frequencies of ω0 = 2π × 10 MHz, ω0 = 2π × 30 MHz and ω0 = 2π × 50 MHz. The grey areas indicate where b/d < 1, therefore invalidating the theory

b(d, d/D)—the coil height—by using (28), KCs and KLc from (26) and (27) and Kcb and Kcd from the approximation for the coil capacitance. Cs(d, d/D)—the coil to shield capacitance—by substituting b(d, d/D) into (26). Cc(d, d/D)—the coil self capacitance—by substituting b(d, d/D) into (26). Rs(d, d/D)—the shield resistance—by using (35). Rc(d, d/D)—the coil resistance—by using (34). RESR(d, d/D)—the total resistance—by using (24). Lc(d, d/D)—the coil inductance—by substituting b(d, d/D) into (27). Q-
(d, d/D)—the Q factor—by substituting Lc(d, d/D) and RESR(d, d/D) into (22).
Figures 10 and 11 show contour plots for parameters corresponding to traps from Table 1 for three resonant frequencies with d0 = 5 mm and τ = 2d0. While larger values of d0 would result in larger Q factors, and a larger Qlarge, the values for d0 and τ have been chosen as they are typical for a hand wound coil, which will be discussed in detail later. Both plots feature a grey shaded region indicating where the condition that b/d ≥ 1 (from (27)) is not valid. Within this

region, the coil inductance will deviate from that predicted by (27), resulting in a deviation from the predicted ω0 and Q factor. An expansion to this theory for short helical coils or wire loops could be implemented by utilising an appropriate equation for the inductance.
The experimental size restrictions will strongly dictate the achievable Q factor of the resonator. The values of d and d/D must be chosen to ensure that the shield diameter D and the shield height B will be within these size constraints, otherwise different values for d, d/D or d0 will need to be chosen. Figure 10 for traps A to C show contour lines at a range of Q factors (as labelled) enabling the values of d and D to be chosen to maximise the Q factor for a given size constraint. Figure 11 for -
traps D to I shows contour lines of Q90% for each set of parameters. The values of d and D can be chosen within the Q90% contour line to optimise the Q factor (for a set of parameters ω0, Ct , Cw, Rt , Rj , τ and d0), while enabling a choice of d and D that minimises the size of the resonator.
For traps A, B and C Fig. 10 shows that higher Q factors are achieved when the coil diameter to shield diameter ratio, d/D, is close to 0. This corresponds to a large separation between the coil and the shield and hence a small shield

930

J.D. Siverns et al.

Fig. 11 Contour plots showing Q90% for each set of parameters corresponding to traps D to I from Table 1 for operating frequencies of ω0 = 2π × 10 MHz (solid lines), ω0 = 2π × 30 MHz (dashed lines)

and ω0 = 2π × 50 MHz (dotted lines). The grey areas indicate where b/d < 1, therefore invalidating the theory. The value of Q90% is indicated next to the contour line

capacitance. At d/D = 0, the shield diameter, D, would be inﬁnite and the shield capacitance would be zero, indicating the resonator is dominated by the trap capacitance. However, we can see in Fig. 11 that Q factors of Q90% can be achieved at values of d/D of order 0.5 with larger trap capacitance enabling larger ratios and hence a smaller shield diameter D and higher shield capacitance.
While Figs. 8 and 9 show that at large values of d0 high Q factors may be achieved at a given size constraint, the construction of such resonators needs to be taken into account. In order to construct a resonator without specialist machinery, a wire diameter of approximately 5 mm is recommended. This wire size is sufﬁciently rigid not to be susceptible to mechanical vibrations, while being ﬂexible enough when heated to be wound by hand into a coil. This can be achieved by winding the wire around a-
 tube with notches cut into it to help align the wire to a constant winding pitch. The size of the resonator can be reduced by using a small winding pitch, however, a minimum winding pitch of τ = 2d0 is recommended when winding by hand in order to keep the error in the winding pitch small. A higher Q factor could be achieved by using d0 = 10 mm; however, this

Table 1 Speciﬁcations of traps used for Figs. 10 and 11

Trap

Resistance

Capacitance

in ohm

in pF

A

0.1

5

B

0.1

20

C

0.1

50

D

5

5

E

5

20

F

5

50

G

15

5

H

15

20

I

15

50

would be hard to wind by hand, which can result in large errors in the winding pitch.
Coils can be constructed using large diameter wire but may require the use of specialist machinery. It should be noted that coils could be constructed from tubular material as current is only carried on the skin of the metal; however, this would affect the inductance of the coil. Similarly a rect-

On the application of radio frequency voltages to ion traps via helical resonators

931

angular cross-section wire could be used to form a coil or formed by cutting a tube into a coil. In order to predict ω0 and the Q factor reliably, (27) may need to be replaced with an expression for the inductance suitable for the desired geometry.
We can summarise:
– A highly conducting material should be used to construct the resonator (for example, copper).
– The coil wire should be made reasonably thick to provide mechanical stability and reduce coil resistance. If winding the coil by hand a wire on the order of d0 ≈ 5 mm is suggested.
– The winding pitch should be as small and uniform as possible. If winding the coil by hand, a minimum of τ ∼ 2d0 is recommended.
– A contour plot of Q(d, d/D) can be used to determine appropriate parameters for d and D within size constraints.
– The coil height is calculated from (28). – The coil height must be greater than the coil diameter for
(27) to be valid. – The shield height B should be b + D/2. – The coil and shield should be connected as close to the
vacuum system as possible. – Any solder joints made should be of low resistance.
4.2 Case study
4.2.1 Resonator construction and measurement
We will now look at how resonator for a typical ion trap experiment can be built without the need for specialist equipment. We will then discuss how the resonant frequency and Q factor can be measured, while ensuring impedance matching between the RF source and the resonator.
The coil can be wound by hand by using an annealed copper wire of diameter, d0 ≈ 5 mm. The copper can be annealed by heating with a blow torch in order to give increased ﬂexibility. Once cooled the copper can be wound, which will work-harden the copper, creating a rigid coil. To ensure all the turns are equally spaced, the copper should be wound around a tube of diameter, d − d0, with notches cut into the tube to align the wire when winding.
Once the coil is constructed, it should be placed centrally inside the shield in order to minimise the coil to shield capacitance Cs . To ensure this, it must be clamped in place at the end of the coil before soldering the coil to a BNC bulkhead located in the shield as shown in Fig. 12. This clamping must be kept in position until the joint to the BNC is solid enough to support the coil on its own. This BNC bulkhead can be used to electrically connect the coil to the shield by connecting a BNC sh-
orting cap. The ground rod is connected in the same way although to the lower BNC bulkhead shown in Fig. 12. The ground rod must exit the resonator (as

Fig. 12 (a) Picture showing a coil and location of the solder joint used

to make an electrical connection to the shield. This is done with the

use

of

a

BNC

bulkhead

located

at

a

distance

D 4

from

the

top

of

the

shield where D is the diameter of the shield. The grounding rod is also

shown. (b) Picture showing a fully constructed resonator. The top hat

is shown on the bottom end cap and is designed to ﬁt around a vacuum

feed-through (in this case, Kurt J. Lesker: EFT 0523052) which con-

nects the main coil and grounding rod to the ion trap. A window is cut

into the top hat to allow the connection between the feed-through and

the main coil and grounding rod to be made. The top end-cap shows

the BNC connection to the antenna coil, this is where the RF signal is

applied to the resonator

shown in Fig. 13) without coming into contact with conducting material. The ground rod and main coil can be held in place with the use of a non-conducting mesh, as shown in Fig. 13, to reduce the mechanical stress applied to them from connection to a vacuum feed-through or other similar load.
The antenna coil used to couple the radio frequency source to the resonator can be constructed out of 1.5 ± 0.5 mm wire and wound into 3 turns with a winding pitch of 10 ± 1 mm and diameter of 33 ± 1 mm. This, however, should be varied in order to match the impedance of the resonator to the source, as described in Figs. 4 and 5 and (14). To measure the resonant frequency of the resonator, a directional coupler (for example, Mini Circuits: ZDC-203) should be placed between the output source port an-
d the RF input port of a spectrum analyser’s tracking generator (for example, Agilent: N9320B) as shown in Fig. 14. Alternatively, the spectrum analyser can be replaced by an RF source and an oscilloscope, as shown in grey in Fig. 14. The resonator should be connected to the directional coupler and RF source via the end-cap that hosts the antenna coil shown

932

J.D. Siverns et al.

in Fig. 2. Using the experimental set up shown in Fig. 14,

the resonant frequency results in a minimum in the spec-

tral response of the reﬂected signal detected by the spectrum

analyser. The pitch and diameter of the antenna coil should

be altered until less than 5% of the applied radio frequency

signal is reﬂected back to the signal generator from the res-

onator when on resonance. The Q factor of this resonance

is simply measured by dividing the reso√nant frequency, ω0, by the full width of the resonance at 1/ 2 of the maximum

voltage reﬂection, δω0:

Q = ω0 .

(40)

δω0

Using the method described here, it is possible to mea-

sure the resonant frequency and Q factor of a resonator

when the ion trap is unconnected, which corresponds to

RT and CT being equal to inﬁnity and zero, respectively. The resonant frequency and Q factor of a resonator with

an ion trap applied across the output can then be measured

by adding the required values of resistance and capacitance

across the output of the resonator. The stray capacitance CW created between the wires used to connect the trap resistance

and capacitance can be reduced by keeping these wires as

short and as separated as possible.

Fig. 13 (a) Picture showing the bottom end cap including the top hat used to connect the resonator to a vacuum feed-through (in this case, Kurt J. Lesker: EFT 0523052). The main coil and ground rod can be seen exiting the resonator and are held in position by a plastic mesh. The window in the top hat provides access for connecting the main coil and ground rod to feed-through pins. (b) Picture showing the top end cap and antenna coil (shown in further detail in Fig. 2)

4.2.2 Experimental analysis of typical resonators
Two resonators were constructed with a range of parameters as described in Table 2. The theoretical resonant frequencies of the resonators have been plotted in Fig. 15 as a function of the trap capacitance, Ct . The theoretical Q factor for these resonators can be seen in Fig. 16 plotted as a function of the trap capacitance, Ct , applied to the resonator. All these are plotted for typical trap resistances, Rt , of 0.1, 1 and 10 ohm, which is representative of the typical range over which the resi-
stance of an ion trap can vary depending on what type of material and fabrication techniques are used.

Fig. 14 Experimental setup required to measure the resonant frequency, coupling and Q factor of a resonator. The resonator is connected to a spectrum analyser with a tracking generator via a directional coupler such that the reﬂected signal from the resonator is displayed on the spectrum analyser. Alternative equipment can be used and is shown in grey. This comprises of a signal generator and an oscilloscope

On the application of radio frequency voltages to ion traps via helical resonators

933

Table 2 Speciﬁcations of the resonators. The Q factors and frequencies quoted are without the addition of an ion trap load

Resonator

A

B

Shield diameter D [mm] Shield height h [mm] Coil diameter d [mm] Coil wire diameter d0 [mm] Winding pitch τ [mm] Number of turns N d/D ratio
Predicted frequency [MHz] Measured frequency [MHz] Predicted Q Measured Q

108 ± 2 120 ± 2 42 ± 2 5.0 ± 0.1 9±1 6.75 ± 0.25 0.4 ± 0.2
64+−86 67 ± 0.5 1970+−235724 2176 ± 200

76 ± 2 90 ± 2 46 ± 2 5.0 ± 0.1 15 ± 1 4.5 ± 0.25 0.6 ± 0.2
78+−170 83 ± 0.5 689+−41615 631 ± 60

Figures 15 and 16 show that the experimental measurement of the Q factor and resonant frequency over a wide range of trap loads is consistent with the theory described in this work. The Q factor of resonator A can be seen to be higher than that of resonator B as it possesses speciﬁcations which are either optimal or nearer to optimal than resonator B (depending on the trap load applied). It can be seen that although the resonator is not optimal for the various ion trap impedances, the Q factor may-
 still be sufﬁcient for many experiments. This shows that a new resonator does not necessarily have to be built if the trap is altered slightly.

5 Experimental measurement of κ

It was shown in Sect√. 2 that the voltage output of a resonator is given by Vrms = κ P Q, where P is the power of the sig-

nal applied to the resonator, Q is the quality factor of the res-

onator

and

κ

=

1
(L/C) 4

.

Here

we

will

experimentally

mea-

sure the value of κ in an ion trap experiment. The value of

κ is required in order to calculate the voltage applied to the

ion trap electrodes used to create a trapping potential. A res-

onator, described in Table 3, was electrically connected to

Fig. 15 The resonant frequencies of resonator A (circles) and resonator B (squares) are shown as a function of the trap capacitance they are attached to. The dashed curves represent the error on this calculation based on the design errors stated in Table 2. The resonant frequencies were measured for a resistance of 1 ohm; however, we note that they are actually independent of the resistance

Table 3 Speciﬁcation of resonator used for κ measurements

Resonator

C

Shield diameter, D [mm] Shield height, B [mm] Coil diameter, d [mm] Coil wire diameter, d0 [mm] Winding pitch, τ [mm] Number of turns, N

76 ± 1

105 ± 1

52 ± 2

4.0 ± 0.1

7±3

7

3 4

Fig. 16 The Q factor of resonator A (left) and resonator B (right) are shown as a function of the trap capacitance. The dashed curves represent the error of the calculation based on the design errors stated in Table 2. The Q factor was measured for different resistance loads

shown by the triangles (0.1 ohm), squares (1 ohm) and diamonds (10 ohm)

934

J.D. Siverns et al.

Fig. 17 The factor κ from (7) is plotted as a function of the trap capacitance for the resonator described in Sect. 5. The thick curve shows the value of κ with the dashed curves showing the error on this calculation due to the uncertainty of the resonator speciﬁcations and its imperfections. The data point shown is for the resonator attached to a 17 ± 3 pF ion trap and vacuum system
an ion trap and vacuum system with a capacitance and resistance measured to be 17 ± 2 pF and ≈0.1 ohm, respectively. The resonant frequency and Q was then measured with this additional load to be ω0 = 2π × 21.895 ± 0.010 MHz and Q = 477 ± 28, respectively.
A single 174Yb ion was trapped in the electric ﬁeld created by the trap electrodes with the resonator supplied with 1.0 ± 0.1 W at its resonant frequency. The secular frequencies of the ion under these conditions were then measured and a boundary element method (BEM) model of the trapping ﬁeld was used to determine the RF voltage required to create such a ﬁeld. This voltage was found to be 400 ± 20 V which, when used in (7) along with the power used to trap the ion, results in a κ of 12.9 ± 1.4. T-
his result is compared with the theoretical prediction of κ (from (7)) in Fig. 17. We note that the value of κ depends on the impedance of the ion trap attached to the resonator.
6 Conclusions
We have carried out a detailed study of helical resonators for the use in applying high voltages at radio frequencies to ion traps. This has been done by modelling the resonator as a lumped element circuit along with a detailed discussion on the losses present in helical resonators connected to ion trap loads in order to arrive at an expression for the Q factor and resonant frequency ω0. It has been shown how a resonator and load can be impedance matched to a frequency source by simply adjusting t-
he physical parameters of an antenna coil which inductively couples the two. A general expression for the voltage output of the resonating system has been derived in terms of the systems Q factor, input power, P , and a κ factor which is a function of the systems capacitance and inductance. We have experimentally conﬁrmed the value of this factor using a single trapped ion. The theory

described in this paper has been conﬁrmed by fabricating two resonators and measuring their Q factor and resonant frequency, ω0, for a range of different trap loads (CT from 2 pF to 85 pF and RT from 0.1 to 10 ohm).
A detailed design guide has been presented showing how a helical resonator can be designed which provides the highest Q factor achievable for a desired resonant frequency within the constraints of an particular experiment. Producing a resonator with an optimised Q factor allows the application of high voltages with optimised ﬁltering. This will result in less noise injected into the system which could reduce anomalous heating of the trapped ions. The application of high voltages can give larger tr-
ap depths, leading to longer trapping lifetimes and increased secular frequencies. This technology plays a signiﬁcant role in many ion trapping experiments and should allow for progress in a variety of ﬁelds that require trapped ions or high radio frequency voltages.
Acknowledgements This work was supported by the UK Engineering and Physical Sciences Research Council (EP/E011136/1 and EP/G007276/1), the European Commission’s Sixth Framework Marie Curie International Reintegration Programme (Grant No. MIRG-CT2007-046432), the Nufﬁeld Foundation, and the University of Sussex.
References
1. W. Paul, Rev. Mod. Phys. 62, 531 (1990) 2. J.J. Bollinger, D.J. Heinzen, W.M. Itano, S.L. Gilbert, D.J.
Wineland, IEEE Trans. Instrum. Meas. 40, 126 (1991) 3. P.T. H Fisk, M.J. Sellars, M.A. Lawn, G. Coles, IEEE Trans. Ul-
trason. Ferroelectr. Freq. Control 44, 344 (1997) 4. D. Kielpinski, C. Monroe, D.J. Wineland, Nature 417, 709 (2002) 5. J.I. Cirac, P. Zoller, Phys. Rev. Lett. 74, 4091 (1995) 6. H. Häffner, C.F. Roos, R. Blatt, Phys. Rep. 469, 155 (2008) 7. R.J. Clark, T. Lin, K.R. Brown, I.L. Chuang, J. Appl. Phys. 105,
013114 (2009) 8. P.A. Ivanov, S.S. Ivanov, N.V. Vitanov, A. Mering, M. Fleis-
chhauer, K. Singer, Phys. Rev. A 80, 060301 (2009) 9. D. Porras, J.I. Cirac, Phys. Rev. Lett. 92, 207901 (2004) 10. H. Schmitz, A. Friedenauer, C. Schneider, R. Matjeschk, M. En-
derlein, T. Huber, J. Glueckert, D. Porras, T. Schaetz, Appl. Phys. B, Lasers Opt. 95, 195 (2009) 11. M. Yu, V. Dokas, in Proceedings of 34th European Microwave Conference, vol. 2 (2004), pp. 989–992 12. J.C. Collingwood, J.W. White, J. Sci. Instrum. 44, 509 (1967) 13. W. Meyer, IEEE Trans. Microw. Theory Tech. 29, 240 (1981) 14. W.W. Macalpine, R.O. Schildknecht, Proc. IRE 47, 2099 (1959) 15. P.K. Ghosh, Ion Traps (Oxford University Press, Oxford, 1996) 16. M.J. Madsen, W.K. Hensinger, D. Stick, -
J.A. Rabchuk, C. Monroe, Appl. Phys. B, Lasers Opt. 78, 639 (2004) 17. D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, C. Monroe, Quantum Inf. Comput. 8, 501 (2008) 18. Q.A. Turchette, D. Kielpinski, B.E. King, D. Leibfried, D.M. Meekhof, C.J. Myatt, M.A. Rowe, C.A. Sackett, C.S. Wood, W.M. Itano, C. Monroe, D.J. Wineland, Phys. Rev. A 61, 063418 (2000) 19. R.G. Medhurst, Wir. Eng., February and March 35, 80 (1947) 20. A.I. Zverev, H.J. Blinchikoff, IEEE Trans. Component Parts 8, 99 (1-
961) 21. M.D. Hughes, B. Lekitsch, J.A. Broersma, W.K. Hensinger, Contemp. Phys. 52, 505 (2011)

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:08.939Z
- **Text Length:** 51648 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
