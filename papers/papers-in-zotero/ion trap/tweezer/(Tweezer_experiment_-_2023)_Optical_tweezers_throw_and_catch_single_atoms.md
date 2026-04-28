# PDF Document: Hwang et al. - 2023 - Optical tweezers throw and catch single atoms.pdf

**File Path:** Hwang et al. - 2023 - Optical tweezers throw and catch single atoms.pdf

**Processed Date:** 2026-02-10T18:18:50.079Z

**File Size:** 7871.40 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 612

**Title:** (Tweezer experiment - 2023) Optical tweezers throw and catch single atoms

**Collection:** Ion Trap > Tweezer

---

## Extracted Text Content

Research Article

Vol. 10, No. 3 / March 2023 / Optica 401

Optical tweezers throw and catch single atoms

H

H

,1 A

B ,1 J

P ,1 S

L

J

A 1,*

1Department of Physics, KAIST, Daejeon 34141, Republic of Korea 2Institute for Molecular Science, National Institutes of Natural Sciences, Okazaki 444-8585, Japan 3SOKENDAI (The Graduate University for Advanced Studies), Okazaki 444-8585, Japan *jwahn@kaist.ac.kr

Received 30 November 2022; revised 11 February 2023; accepted 13 February 2023; published 9 March 2023

,2,3 AND

Single atoms movable from one place to another would enable a ﬂying quantum memory that can be useful for dynamic quantum computing architectures. Guided atoms, e.g., by optical tweezers, provide a partial solution, but the beneﬁt of ﬂying qubits could be lost if they still interact with the guiding means. Here we propose and experimentally demonstrate freely ﬂying atoms that are not guided but instead thrown and caught by optical tweezers. We provide a set of proofof-principle ﬂying atom demonstr-
ations, which include atom transport through optical tweezers, atom arrangements by ﬂying atoms, and atom scattering off optical tweezers. In experiments, cold rubidium atoms at 40 µK temperature are thrown by accelerating optical tweezers, freely ﬂy with up to a speed of 0.65 m/s and free-ﬂying distance of 4.2 µm, and are recaptured and stopped by decelerating optical tweezers at a transportation efﬁciency of 94(3)%. Flying atoms suggest possible applications such as defect correction in a tweeze-
r trap atom array, fast atom-array formation, Rydbergatom collision studies, and dynamic quantum computing architectures. © 2023 Optica Publishing Group under the terms of
the Optica Open Access Publishing Agreement

https://doi.org/10.1364/OPTICA.480535

1. INTRODUCTION
Optical tweezers are versatile tools in modern science, being widely used to trap and guide small particles such as atoms [1–3], molecules [4], micro-beads [5], and biological objects [6]. Single particles manipulated at a few micrometers distance by optical tweezers are well suited to study, i.e., control and investigate, their interaction nature among themselves and with others, even at the quantum level [7–9]. In that regard, single atoms in optical tweezers are drawing keen attention because o-
f their promising usage as an elementary quantum information carrier. In recent years, there have been as many as a few hundred single atoms dynamically rearranged with optical tweezers for defect-free atom arrays [10–13], and related Rydberg atom experiments are making apt progress in quantum computing and quantum simulations [14–20].
Optical tweezers are useful tools not only to trap atoms statically but also to dynamically guide them through desirable paths [13,21]. However, these paths are to avoid optical tweezer collisions, especially in a crowded atom array, which often results in unwanted atom loss [22]. Being inspired by a recent experiment of coherent atom transportation amid quantum operations [23], we consider a way to deliver an atom between places without using an optical tweezer in between, i.e., to use the optica-
l tweezer as an atom accelerator (i.e., atom thrower) and decelerator (i.e., atom catcher), but not as an atom carrier.
The physics of the optical tweezer trapping of an atom is well understood as a classical particle dynamics in a truncated harmonic potential U (ξ ) given by
2334-2536/23/030401-06 Journal © 2023 Optica Publishing Group

U (ξ )

=

U0 d2

(ξ

−

d )(d

+

ξ ),

(1)

where U0 and d are the potential depth and width of the optical tweezer, respectively, and ξ is the atom displacement from the center of the optical tweezer. An atom of an energy higher than U0 or displaced more than d escapes from the optical tweezer. Here we assume the atom does not manifest quantum features [24–26], as the temperature is not comparable to the energy of the vibration quanta. Then, the equation of motion of the atom is given by

ξ

(t

)

=

−

x¨ ω2

+

A

cos(ωt

+ φ)

(2)

in terms of atom displacement ξ with respect to position x of the optical tweezer, where ω = 2U0/md 2 is the trap frequency,
A = (ξ0 − x¨/ω2)2 + (ξ˙0/ω)2 is the oscillation amplitude, and φ = −tan−1[ωξ˙0/(ω2ξ0 − x¨)] is the phase, given that the initial displacement and velocity are ξ0 and ξ˙0, respectively.
In an accelerating optical tweezer of x¨ = a > 0, the atom in the moving frame of the optical tweezer oscillates back and forth about the equilibrium point ξ = −a /ω2. As the atom on average lags behind the optical tweezer, if the maximum negative displacement exceeds the width of the optical potential, the optical tweezer loses the atom behind, which deﬁnes the maximal acceleration, amax = U0/md , of an atom in an accelerating optical tweezer. To use the optical tweezer as an atom decelerator, we-
 ﬁrst make a freely ﬂying atom by accelerating the atom and then releasing it. After

Research Article
a certain distance of the atom’s free ﬂying, we recapture and then decelerate the atom, e.g., with x¨ = −a . Then the available range of a is determined by both the throwing and catching conditions. While successful throwing is mostly conditioned by a ≤ amax, as above, successful catching is not as simple as throwing, which is investigated below.

Vol. 10, No. 3 / March 2023 / Optica 402
2. THEORETICAL ANALYSIS
We consider an atom throw-and-catch experiment as in Fig. 1(a). The optical tweezer holding an atom is ﬁrst accelerated with x¨ = a along x direction for a distance x1, then turned off for the atom to freely ﬂy until x2, and turned back on and decelerated with x¨ = −a until a complete stop at x f = l , i.e.,

(a)

(d) Throw condition

Acceleration Fly Deceleration

(b)

(e) Catch condition

Recapture fail

(c)

Deceleration fail

(f)

Acceleration Fly Deceleration (i)

(g)

(j)

(h)

(k)

Fig. 1. Atom throw-and-catch by an optical tweezer. (a) An atom is thrown by an accelerating optical tweezer of x¨ = a , released for a free ﬂight, and

then caught by a decelerating optical tweezer of x¨ = −a . (b) Atom image in the acceleration stage. (c) Atom image in the decelerating stage. (d) A successful

throw is determined by the maximal displacement ξmax(0 < t < t1) within −d and d , requiring a < amax. (e) A successful catch is determined by the recap-

ture (−d < ξ2 < d ) and deceleration (−d < ξmax(t > t2) < d ) conditions. (f )–(k) Atom dynamics in the ξ -ξ˙ diagram (left) and ξ(t) trajectories (right)

for

various

release

phases

θ1

=

θ (t

=

t1):

(f

)

θ1

=

3π ,

(g)

θ1(a

=

a g−ap,1 ),

(h)

θ1(a

=

a

+ gap.1

),

(i)

θ1

=

2π ,

(j)

θ1(a

=

a

− gap,2

),

and

(k)

θ1(a

=

a max ),

where

the

black circles indicate equilibrium points, red and blue squares the release (at t = t1) and recapture (at t = t2), respectively, and green squares the atom escape

(i.e., ξ = d or −d ).

Research Article

 

a

for

0 < t < t1

(acceleration)

x¨ = 0 for t1 < t < t2 (free-ﬂying) ,

(3)

 −a for t2 < t < t f (deceleration)

where t1 and t2 denote the times when the optical tweezer is located

at x1 and x2, respectively. Snap shot images of an as-traveling

atom are shown in Figs. 1(b) and 1(c) during the acceleration and

deceleration stages, respectively. For the sake of convenience, we

choose equal distances of acceleration, free ﬂying, and deceleration

(i.e., x1 = given by t1

l=/3√a2nld/3xa2,=t2

2l /3). The characteristic times

=

√ 3l

/2a

,

and

t

f

=

√ 25l

/6a

.

are

then

The solution of Eqs. (2) and (3) for an initially stationary atom

(i.e., ξ0 = ξ˙0 = 0) is given by

a  − ω2

+

A1

cos(ωt )

for

ξ(t) = ξ1 + ξ˙1(t − t1)

for



a ω2

+

A2

cos

((ω (t

−

t2)

+

θ2)

for

0 < t < t1
t1 < t < t2 , t2 < t < t3

where A1 = a /ω2 and A2 = (ξ2 − a /ω2)2 + (ξ˙2/ω)2 are

the oscillation amplitudes during acceleration and deceleration,

respectively;

ξ1

=

a ω2

(cos

θ1

−

1),

ξ2

=

a ω2

+

A2

cos θ2,

and

ξ˙1

= ξ˙2

a
= −ω

sin θ1

are

the

displacements

and

velocities

at

the

start (t = t1) and end (t = t2) of free ﬂying; θ1 = ωt1 is the release

phase at t at t = t2.

=

t1,

and

θ2

=

sin−1

(

a ω2 A2

sin

θ1)

is

the

recapture

phase

For a successful throw-and-catch, the atom needs to be kept

in the optical tweezer during both acceleration and deceleration

stages, i.e., −d ≤ ξ(t) ≤ d for 0 < t < t1 and t2 < t < t f . In that regard, there are three distinct atom escape scenarios: (1) the

atom could escape at the acceleration stage; (2) it could fail being

recaptured at t = t2; and (3) it could escape at the deceleration

stage.

(1) First, in the acceleration stage (0 < t < t1), the atom escape

is determined by either the maximal (negative) displace-

ment

during

this

time

interval,

|ξ

max
|

(0

<

t

<

t1)

=

2a /ω2,

or the displacement at the release, |ξ(t1)|, exceeding the

boundary of the accelerating optical tweezer. The former

and latter are cases when there are at least 1/2 oscillations

until t1 (i.e., θ1 = ωt1 > π ) or not, respectively. As t1 is

a function of l (total travel length), we choose l to satisfy

the former (θ1 > π ) in our experimental consideration. Then, the atom escape occurs when a > amax = d ω2/2.

In Fig. 1(d), we plot this maximal, negative displacement,

−|ξ

max
|

(0

<

t

< t1) = −2a /ω2,

as

a

function

of

a,

where

the atom throw condition (i.e., a safe guide until t1) is given by a < amax (colored region). We note that the latter case (θ1 < π ) of lesser than 1/2 oscillations could allow a > amax,

but the resulting release speed is limited.

(2) Second, at the recapture (t = t2), the atom could remain outside of the optical tweezer, i.e., |ξ2| > d , resulting in the optical

tweezer failing to recapture the atom. In Fig. 1(e), (upper sub-

ﬁgure), we plot ξ2 as a function of a , which shows that this type of atom loss occurs only at higher accerlations, a > amax.

(3) Third, the atom could be lost during the deceleration

stage (t2 < t < t f ), which is determined by the maximal displacement during this time interval exceeding d ,

i.e., ξmax(t2 < t < t f ) = A2 + a /ω2 > d , where A2 is also

a function of a . In Fig. 1(e), (lower sub-ﬁgure), we plot

ξmax(t2 < t < t f ), which shows multiple gap regions of this

type of atom loss, having amax located in the second gap,

Vol. 10, No. 3 / March 2023 / Optica 403

i.e., ag−ap,2 < amax < ag+ap,2. In other regions (colored regions), the atom is decelerated successfully until t f . We note that, besides the above, there could be an additional case in which
the atom could be lost during acceleration but happens to ﬂy
back into the optical tweezer during deceleration. This case is analyzed to be possible for ωt1 < π , as otherwise, such an atom ﬂies across the optical tweezer, but this is outside of our
experimental region of interest.

As a combined result of (1), (2), and (3), the atom throw-and-

catch is expected to be successful in two regions of acceleration:

(A)

a

<

a

− gap,1

and

(B)

a

+ gap,1

<

a

<

a g−ap,2 ,

where

a g−ap,1 ,

a g+ap,1 ,

and

a

− gap,2

are

the

ﬁrst

three

solutions

of

a

in

the

equation

A2(a ) + a /ω2 = d . Some characteristic atom dynamics are

illustrated in Figs. 1(f )–(k). With an increasing order of a , which is the decreasing order of release phase θ1 = ω√2l /3a ,

we consider (f ) θ1 = 3π and (g) θ1(a = ag−ap,1) in region (A);

and (h) θ1(a = ag+ap,1), (i) 2π , and (j) θ1(a = ag−ap,1) in region (B), along with (k) θ1(a = amax)—all discussed together with

experimental results in Section 3.

3. EXPERIMENTAL DEMONSTRATION
We performed an experiment to test the above atom throwand-catch conditions. We used cold rubidium atoms (87 Rb) at 40(4) µK and 820 nm wavelength optical tweezers. The experimental setup is similar to one previously reported elsewhere [11,13,25], except for an acousto-optic modulater (AOD, DTSXY-400-820 by AA Opto Electronics) and an arbitrary waveform generator (AWG, M4i-6622-x8 by SPECTRUM Instrument, 625 MS/s), which controls the dynamic optical tweezer. Static optical tweezers are programmed -
with a 2D spatial light modulator (SLM, ODPDM-512 by Meadowlark Optics). The trap potential depth and width in Eq. (1) were U0 = 1.94(15) or 0.76(6) mK and d = 0.73 µm, respectively. The atom’s freeﬂying distance was l /3 = 4.2 µm, limited by the current setup. We measured the presence of the atoms using the ﬂuorescence imaging of 5S1/2 − 5P3/2 transition using an objective lens of NA = 0.5 [27].
Experimental measurements are shown in Fig. 2, where the success probabilities, P (a ), of the atom throw-and-catch are plotted as a function of a . About 120 times, the same measurements are repeated to accumulate the atom counts for each P (a ). The a values are changed between 5.83(51) × 102 m/s2 = 2.29 × 10−3 × amax and 2.33(94) × 105 m/s2 = 0.92 × amax, which are experimentally calibrated with the range of moving time t f from 300(1) µs to 15(1) µs over a distance of l = 12.6 µm, and amax = 2-
.5(2) × 105 m/s2. State preparation and measurement (SPAM) errors are independently calibrated as P (we don t measure any|there is 1 atom) 0 % and P (there is 1 atom| we don t measure any) = 2% due to the atom’s collisional lifetime, which are taken into account for the rest of the data analysis.
To begin with, we compare the observed behavior of experimental results with the atom dynamics in Figs. 1(f )–(k). First, in Fig. 2, atoms at a low acceleration below and near ag−ap,1 are relatively well recaptured, which is consistent with the atom dynamics at θ1 = 3π illustrated in Fig. 1(f ), where the atom is released with zero velocity (ξ˙ (t1) = 0) and thus recaptured with the same displacement, i.e., ξ(t1) = ξ(t2). As a result, the recaptured atom

Research Article

Experimental data (Motional spread & Trap lifetime)
(Motional spread) Trap lifetime effect

Vol. 10, No. 3 / March 2023 / Optica 404

Fig. 2. Experimental atom throw-and-catch success probability P (a ) measured for various accelerations. The theory line (red) takes into account the initial temperature, motional spread, and trap lifetime effects. In comparison, blue, orange, and gray lines are shown for Ti = 0 K (ideal dynamics), 40 µK (motional spread), and trap lifetime effect (due to ﬁnal temperature), respectively.

dynamics is a simple oscillation with an amplitude three times

bigger, i.e., A2 = 3 A1. Next, for atoms with an acceleration in the

ﬁrst

gap

region,

between

a

− gap,1

and

a

g+ap,1,

the

measured

probability

in Fig. 2 sharply drops, of which the corresponding dynamics are

between in Figs. 1(g) and 1(h), where the oscillations exceed the

optical tweezer boundary, making the atoms escape from the decel-

erating

optical

tweezer.

Finally,

the

atoms

with

a

between

a

+ gap,1

and

ag−ap,2 are evidently recaptured again. This case is around θ1 = 2π

in Fig. 1(i), where the atom oscillation amplitudes before and after

free ﬂying are the same; and between θ1(a = ag+ap,1) in Fig. 1(h) and θ1(a = ag−ap) in Fig. 1(j), where the atom displacement reaches either d or −d , respectively. Finally, the atoms at a > amax escape

from the accelerating optical tweezer as in Fig. 1(k).

Experimentally observed probabilities in Fig. 2 peak

at

a

exp opt

=

0.49

×

105

m/s2

=

0.20a

max

,

comparable

to

ag−ap,1 = 0.31amax, consistent with the above dynamics, and are near zero at 1.04 × 105 m/s2 = 0.41amax, which is between

a g−ap,1

=

0.31amax

and

a

+ gap,1

=

0.48a

max

.

The

maximal

throw-and-

catch probability is P (aoexppt ) = 92(3)% [or 94(3)% after the above

SPAM corrections]. We attribute the rest of the details of P (a ) in

Fig. 2 to the ﬁnite temperature and trap lifetime effects. Numerical

simulation results are shown in Fig. 2, where the red line takes all

contributions into account, the blue line assumes zero-temperature

ideal dynamics, and the orange line considers only the longitudinal

and transverse motional spreads due to the initial temperature. The

numerical simulation took into account the initial temperature

effect, for the throw-and-catch success probability of an atom

given by

P (a , Ti ) = P (a , E )ρ(E , Ti )P (Tf )dE ,

(4)

where Ti and Tf are the initial and ﬁnal atom temperatures, E = mξ˙02/2 + mω2ξ02/2 is the initial energy, and ρ(E , Ti ) is the Maxwell–Boltzmann distribution of the atom energy in Ti [28]. The trap lifetime effect, shown in the dotted black line in Fig. 2, is
dominant at a ≈ amax, where Tf reaches about 1 mK. In the second experiment, we repeat the above measurements,
but this time without completely turning off the optical tweezer
during the free-ﬂying stage, so that we compare the throw-and-
catch with atom-guiding. The result is shown in Fig. 3, where

1

0.9

0.8

Acceleration Fly or guide

Deceleration

Trap Depth 0

0.7 0.6
0.01

Time

0.1

1

Fig. 3. Atom throw-and-catch success probability of a partially guided
ﬂying atom. The potential depth Uc of the guiding optical tweezer during the free-ﬂying zone (t1 < t < t2) is controlled from zero (un-guided) to U0 (fully guided).

the trap depth Uc of the optical tweezer controlled during the time from t = t1 and t2 is changed from Uc = 0 (throw-andcatch) to U0 = 0.76 mK (atom-guiding) for a chosen ac near aopt. Data show that the success probability of the throw-and-catch P = 87(2)%, while there remains a probability drop with respect to the guiding method due to transverse motions and experimental imperfections.
In addition, we were able to send the ﬂying atom through an optical tweezer. As in Fig. 4, we throw an atom so that it passes an en route optical tweezer (static optical tweezer), which is not the one (dynamic optical tweezer) used for atom ﬂying. Then the throw-and-catch probability is measured as a function of the lateral displacement b of the static optical tweezer with respect to the atom path. For example, the atom is thrown towards the static optical tweezer sideways or straight as shown in -
Figs. 4(a)–(c) with negative b, b = 0, or positive b, respectively. Measured probabilities are shown in Fig. 4(d) as a function of b, in which the probability peaks at around b = 0 (i.e., straight-through pass) and is minimal at around both b = ±d (i.e., the atom path is bent by the presence of the optical tweezer). A classical analogy of this experiment is rolling a ball to a hole, which unless the path is straight through the center of the hole results in a curved path bent toward the hole. Simi-
larly,

P(b) Defect-free array probability

Research Article

Flying atom

Throw

Trap center 0

(a) b

Trap

(b)

(c)

Catch Trap

(d)

Experiment

0.6

Fitting

(b)

0.3

(a)

(c)

0

-1.3

-d

0

d

1.3

b

Fig. 4. Atom ﬂight bent by an optical tweezer. (a)–(c) Atom images
before and after (left and right, respectively) the collision of a ﬂying
atom and an en route optical tweezer (of about 1 mK trap depth),
which holds another atom: (a) collision with positive displacement b, (b) b = 0, and (c) negative b. (d) Measured atom throw-and-catch success probability P (b) as a function of b, where the line is a numerical ﬁt to 0.82 − αexp(−(b − γ )2/β) − αexp(−(b + γ )2/β) of α = 0.77, β = 0.36 µm2, and γ = 0.72 µm. In this experiment, a higher trap depth
(1 mK) is used due to the trade-off between maximal probability Pmax and modulation amplitude (Pmax − Pmin)/Pmax.

the experimental result shows that the loss of the atom throw-andcatch is most signiﬁcant around b = ±d where a signiﬁcant bend occurs as expected.

4. DISCUSSION
There could be at least three practical applications of the presented method of ﬂying atoms. First of all, ﬂying atoms can beneﬁt defectfree atom array formations [11,13]. In addition, this method of accelerating optical tweezers can be used as a non-charged particle accelerator and also as a ﬂying quantum memory. We discuss these applications below.
When we consider using ﬂying atoms to convert a defective atom array to a defect-free one, the main advantage is that these atoms can be directly sent to vacancies without interfering with other optical tweezers or atoms en route. In Fig. 5(a), we perform a proof-of-principle experiment. We ﬁrst trapped eight atoms on a defective 3 × 3 square lattice (of lattice constant = 4.2 µm) using static optical tweezers, where the center (A site) was vacant. Then we trapped another atom (denoted by A ) usin-
g a dynamic optical tweezer, and the atom was sent to ﬁll the A site, passing through an atom (B) en route. The resulting atom array is a successful defect-free array as in Fig. 5(b). In this demonstration, the potential depths Uc = 1.94 mK and Us = 0.58 mK of the dynamic and static optical tweezers are chosen to minimize the loss of atoms. In comparison, when the dynamic optical tweezer, which carries atom A, is guided, i.e., not turned off, while passing atom B,

(a)
A’B A
(c)
BA

Vol. 10, No. 3 / March 2023 / Optica 405

(b)
BA

(d)
0.9 0.6

B B

0.3
0 (b) Flying (c) Guiding

Fig. 5. Defect-free array formation by a ﬂying atom. (a) Initial defective atom array with a vacant center (A) and ﬂying atom (A ). (b) Resulting defect-free atom array by atom throw-and-catch from A to A. (c) In comparison, atom-guiding from A to A results in a defective atom array with a vacant B site. (d) Measured probabilities of defect-free atom arrays of ﬂying and guiding atom methods.

the resulting array is another kind of defective atom array, as shown

in Fig. 5(c), as the dynamic optical tweezer kicks out the atom at B.

The defect-free array forming probabilities are compared between

the usages of a ﬂying atom and guided atom in Fig. 5(d).

We now discuss the advantages of using ﬂying atoms in atom

array formations. First of all, as shown above, ﬂying atoms can

be very useful to ﬁx a near-perfect array with a small number of

defects, because they can be directly sent to vacant sites without

disturbing other atoms or static optical tweezers. For example,

the rearrangement probability (about 94% currently) of one

atom thrown to ﬁll a central vacant exceeds 0.99N of sequential or

simultaneous N atom-guiding (state-of-the art) even for N > 6.

Furthermore, atom transport speed by ﬂying atoms can be faster

than by the atom-guiding method, as ﬂying atoms can move with

a maximally allowed speed for a longer time than guided atoms.

Also, the overall travel distance of ﬂying atoms in defect-free atom

formation can be shorter and require a less complicated rearrange-

ment path design than guided atoms [22]. It is worthwhile to

compare the scaling of the rearrangement times of the ﬂying atom

method and the holographic optical tweezer method. A Monte

Carlo numerical simulation is used to estimate the time of defect-

free array formation of a half-ﬁlled random array of N sites. For the former, the ﬂying atom method, we obtain tF2D = O(N3/2) and tF3D = O(N4/3) for the 2D and 3D cases, respectively. For the
latter, the holographic optical tweezers, the atom moving speed is

given by v0 = d fp, limited by the phase refresh (about 30 frames per second) rate f p of the holographic device and the trap width d of the optical tweezers, because the trap movement induced

by successive holograms must be smaller than d . So the required

time for a defect-free atom array by holographic optical tweez-

ers is given by tH ≈ l /d f p . With typical technical values [27] of

f

p

=

40

Hz,

d

=

1

µm,

and

l

=

3

µm,

we

obtain

t

2D H

=

O ( N 1/2 )

for

a

2D

random

array

and

t

3D H

=

O

(

N1/3

)

for

a

3D

random

array.

Rearrangement by sequential ﬂying atoms can outperform holo-

graphic simultaneous guiding for N 4, 000 for 2D and 3, 000

for 3D.

In the context of neutral-atom acceleration, optical tweezers can

accelerate atoms with amax = U0/md , dependent on the optical

potential depth and width, which is seemingly unlimited but there

are practical limitations in optical tweezer acceleration mainly due

to the acousto-optic modulation bandwidth. In the current experiment, we tested up to amexapx = 0.92 × amax = 2.33 × 105 m/s.

Research Article

The ﬂying speed of an atom, after being released by an accelerating

optical tweezer, is also seemingly unbounded, but practically lim-

ited

to

be

vmax

=

(2a

exp max

D)1/2

∼ 10 m/s,

where

D

=

100 µm

is

the imaging size of optical instrumentation. The free-ﬂying time

(for over 90% recapture) is tmax = 7.5 µs in the current setup of

T = 40 µK and tmax = 18 µs at T = 6.3 µK, which corresponds

to the ground vibrational energy. As a result, maximal free-ﬂying

distance is expected to be lmax = vmax · tmax ∼ 70 µm (200 µm) at

T = 40 µK (T = 6.3 µK).

5. CONCLUSION
We have presented single-atom throw-and-catch experiments, in which optical tweezers are used as an atom accelerator and decelerator to demonstrate ﬂying atoms that can even penetrate other optical tweezers. These ﬂying atoms are of a practical advantage in defect-free atom array formation. While most of the present quantum computing architectures are static, so their qubit-to-qubit interactions are local, ﬂying atoms could build a dynamic quantum architecture. In quantum-gate-based computation, f-
or example, atomic qubits could be sequentially dragged to predeﬁned one- or two-qubit gate operation zones so that a quantum circuit can be processed in different ways. Also, ﬂying atoms can travel, maintaining their quantum information, from one qubit system to another remote qubit system, potentially scaling the total qubit system. Furthermore, ﬂying atoms can be converted to ﬂying Rydberg atoms, which enables new kinds of fundamental studies, such as single-atom low-energy collisions, similar -
to charged particle cases [29], and a new annealing method, such as annealing with changing parameters of van der Waals interactions of Rydberg atoms.
Funding. Samsung Science and Technology Foundation (SSTF-BA1301-12).
Disclosures. The authors declare no conﬂicts of interest.
Data availability. Data underlying the results presented in this paper are not publicly available at this time but may be obtained from the authors upon reasonable request.

REFERENCES
1. A. Ashkin, “Acceleration and trapping of particles by radiation pressure,” Phys. Rev. Lett. 24, 156 (1970).
2. A. Ashkin, J. M. Dziedzic, J. E. Bjorkholm, and S. Chu, “Observation of a single-beam gradient force optical trap for dielectric particles,” Opt. Lett. 11, 288–290 (1986).
3. R. Grimm, M. Weidemüller, and Y. B. Ovchinnikov, “Optical dipole traps for neutral atoms,” Adv. At. Mol. Opt. Phys. 42, 95 (2000).
4. L. Anderegg, L. W. Cheuk, Y. Bao, S. Burchesky, W. Ketterle, K. K. Ni, and J. M. Doyle, “An optical tweezer array of ultracold molecules,” Science 365, 1156–1158 (2019).
5. K. Svoboda and S. M. Block, “Optical trapping of metallic Rayleigh particles,” Opt. Lett. 19, 930–932 (1994).
6. A. Ashkin, J. M. Dziedzic, and T. Yamane, “Optical trapping and manipulation of single cells using infrared laser beams,” Nature 330, 769–771 (1987).
7. E. Urban, T. A. Johnson, T. Henage, L. lsenhower, D. D. Yavuz, T. G. Walker, and M. Saffman, “Observation of Rydberg blockade between two atoms,” Nat. Phys 5, 110–114 (2009).
8. A. Gaëtan, Y. Miroshnychenko, T. Wilk, A. Chotia, M. Viteau, D. Comparat, P. Pillet, A. Browaeys, and P. Grangier, “Observation of collective excitation of two individual atoms in the Rydberg blockade regime,” Nat. Phys. 5, 115–118 (2009).

Vol. 10, No. 3 / March 2023 / Optica 406
9. A. M. Kaufman and K.-K. Ni, “Quantum science with optical tweezer arrays of ultracold atoms and molecules,” Nat. Phys. 17, 1324–1333 (2021).
10. M. Endres, H. Bernien, A. Keesling, H. Levine, E. R. Anschuetz, A. Krajebrink, C. Senko, V. Vuletic´ , M. Greiner, and M. D. Lukin, “Atomby-atom assembly of defect-free one-dimensional cold atom arrays,” Science 354, 1024–1027 (2016).
11. D. Barredo, S. de Léséleuc, V. Lienhard, T. Lahaye, and A. Browaeys, “An atom-by-atom assembler of defect-free arbitrary two-dimensional atomic arrays,” Science 354, 1021–1023 (2016).
12. H. Kim, W. Lee, H. Lee, H. Jo, Y. Song, and J. Ahn, “In situ single-atom array synthesis using dynamic holographic optical tweezers,” Nat. Commun. 7, 13317 (2016).
13. W. Lee, H. Kim, and J. Ahn, “Three-dimensional rearrangement of single atoms using actively controlled optical microtraps,” Opt. Express 24, 9816–9825 (2016).
14. H. Bernien, S. Schwartz, A. Keesling, H. Levine, A. Omran, H. Pichler, S. Choi, A. S. Zibrov, M. Endres, M. Greiner, V. Vuletic´ , and M. D. Lukin, “Probing many-body dynamics on a 51-atom quantum simulator,” Nature 551, 579–584 (2017).
15. H. Kim, Y. Park, K. Kim, H.-S. Sim, and J. Ahn, “Detailed balance of thermalization dynamics in Rydberg-atom quantum simulators,” Phys. Rev. Lett. 120, 180502 (2018).
16. E. Guardado-Sanchez, P. T. Brown, D. Mitra, T. Devakul, D. A. Huse, P. Schauß, and W. S. Bakr, “Probing the quench dynamics of antiferromagnetic correlations in a 2D quantum Ising spin system,” Phys. Rev. X 8, 021069 (2018).
17. V. Lienhard, S. D. Léséleuc, D. Barredo, T. Lahaye, and A. Browaeys, “Observing the space- and time-dependent growth of correlations in dynamically tuned synthetic Ising models with antiferromagnetic interactions,” Phys. Rev. X 8, 021070 (2018).
18. M. Kim, Y. Song, J. Kim, and J. Ahn, “Quantum Ising Hamiltonian programming in trio, quartet, and sextet qubit systems,” PRX Quantum 1, 020323 (2020).
19. D. Barredo, H. Labuhn, S. Ravets, T. Lahaye, and A. Browaeys, “Coherent excitation transfer in a spin chain of three Rydberg atoms,” Phys. Rev. Lett. 114, 113002 (2015).
20. P. Scholl, H. J. Williams, G. Bornet, F. Wallner, D. Barredo, L. Henriet, A. Signoles, C. Hainaut, T. Franz, S. Geier, A. Tebben, A. Salzinger, G. Zürn, T. Lahaye, M. Weidemüller, and A. Browaeys, “Microwave engineering of programmable XXZ Hamiltonians in arrays of Rydberg atoms,” PRX Quantum 3, 020303 (2022).
21. C. Muldoon, L. Brandt, J. Dong, D. Stuart, E. Brainis, M. Himsworth, and A. Kuhn, “Control and manipulation of cold atoms in optical tweezers,” New J. Phys. 14, 073051 (2012).
22. W. Lee, H. Kim, and J. Ahn, “Defect-free atomic array formation using the Hungarian matching algorithm,” Phys. Rev. A 95, 053424 (2017).
23. D. Bluvstein, H. Levine, G. Semeghini, T. T. Wang, S. Ebadi, M. Kalinowski, A. Keesling, N. Maskara, H. Pichler, M. Greiner, V. Vuletic´ , and M. D. Lukin, “A quantum processor based on coherent transport of entangled atom arrays,” Nature 604, 451–456 (2022).
24. A. M. Kaufman, B. J. Lester, C. M. Reynolds, M. L. Wall, M. Foss-Feig, K. R. A. Hazzard, A. M. Rey, and C. A. Regal, “Two-particle quantum interference in tunnel-coupled optical tweezers,” Science 345, 306–309 (2014).
25. G. T. Hickman and M. Saffman, “Speed, retention loss, and motional heating of atoms in an optical conveyor belt,” Phys. Rev. A 101, 063411 (2020).
26. M. R. Lam, N. Peter, T. Groh, W. Alt, C. Robens, D. Meschede, A. Negretti, S. Montangero, T. Calarco, and A. Alberti, “Demonstration of quantum brachistochrones between distant states of an atom,” Phys. Rev. X 11, 011035 (2021).
27. H. Kim, M. Kim, W. Lee, and J. Ahn, “Gerchberg-Saxton algorithm for fast and efficient atom rearrangement in optical tweezer traps,” Opt. Express 27, 2184–2196 (2019).
28. C. Tuchendler, A. M. Lance, A. Browaeys, Y. R. P. Sortais, and P. Grangier, “Energy distribution and cooling of a single atom in an optical tweezer,” Phys. Rev. A 78, 033425 (2008).
29. O. Katz, M. Pinkas, N. Akerman, and R. Ozeri, “Quantum logic detection of collisions between single atom-ion pairs,” Nat. Phys. 18, 533–537 (2022).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:50.079Z
- **Text Length:** 31664 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
