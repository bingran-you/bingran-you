# PDF Document: Dan Steck Rubidium.pdf

**File Path:** Dan Steck Rubidium.pdf

**Processed Date:** 2026-02-10T18:17:24.400Z

**File Size:** 492.68 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 109

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Rubidium 85 D Line Data
Daniel Adam Steck
Oregon Center for Optics and Department of Physics, University of Oregon

Copyright © 2008, by Daniel Adam Steck. All rights reserved.
This material may be distributed only subject to the terms and conditions set forth in the Open Publication License, v1.0 or later (the latest version is presently available at http://www.opencontent.org/openpub/). Distribution of substantively modified versions of this document is prohibited without the explicit permission of the copyright holder. Distribution of the work or derivative of the work in any standard (paper) book form is prohibited unless prior permission is obtained from the copyrig-
ht holder.
Original revision posted 30 April 2008.
This is revision 2.2.3, 9 July 2021.
Cite this document as: Daniel A. Steck, ‘‘Rubidium 85 D Line Data,’’ available online at http://steck.us/alkalidata (revision 2.2.3, 9 July 2021).
Author contact information: Daniel Steck Department of Physics 1274 University of Oregon Eugene, Oregon 97403-1274 dsteck@uoregon.edu

1 Introduction

3

1 Introduction
In this reference we present many of the physical and optical properties of 85Rb that are relevant to various quantum optics experiments. In particular, we give parameters that are useful in treating the mechanical effects of light on 85Rb atoms. The measured numbers are given with their original references, and the calculated numbers are presented with an overview of their calculation along with references to more comprehensive discussions of their underlying theory. At present, this document is -
not a critical review of experimental data, nor is it even guaranteed to be correct; for any numbers critical to your research, you should consult the original references. We also present a detailed discussion of the calculation of fluorescence scattering rates, because this topic is often not treated clearly in the literature. More details and derivations regarding the theoretical formalism here may be found in Ref. [1].
The current version of this document is available at http://steck.us/alkalidata, along with ‘‘Cesium D Line Data,’’ ‘‘Sodium D Line Data,’’ and ‘‘Rubidium 87 D Line Data.’’ This is the only permanent URL for this document at present; please do not link to any others. Please send comments, corrections, and suggestions to dsteck@uoregon.edu.

2 Rubidium 85 Physical and Optical Properties

Some useful fundamental physical constants are given in Table 1. The values given are the 2006 CODATA

recommended values, as listed in [2]. Some of the overall physical properties of 85Rb are given in Table 2. Rubidium 85 has 37 electrons, only one of which is in the outermost shell. 85Rb is the only stable isotope of

rubidium (although 87Rb is only very weakly unstable, and is thus effectively stable), and is the only isotope we

consider in this reference. The mass is taken from the high-precision measurement of [3], and the density, melting

point, boiling point, and heat capacities (for the naturally occurring form of Rb) are taken from [4]. The vapor

pressure at 25◦C and the vapor pressure curve in Fig. 1 are taken from the vapor-pressure model given by [5],

which is

4215

log10 Pv = 2.881 + 4.857 − T (solid phase)

(1)

4040

log10 Pv = 2.881 + 4.312 − T (liquid phase),

where Pv is the vapor pressure in torr (for Pv in atmospheres, simply omit the 2.881 term), and T is the temperature
in K. This model is specified to have an accuracy better than ±5% from 298–550K. Older, and probably less-
accurate, sources of vapor-pressure data include Refs. [6] and [7]. The ionization limit is the minimum energy required to ionize a 85Rb atom; this value is taken from Ref. [8].
The optical properties of the 85Rb D line are given in Tables 3 and 4. The properties are given separately for each of the two D-line components; the D2 line (the 52S1/2 −→ 52P3/2 transition) properties are given in Table 3, and the optical properties of the D1 line (the 52S1/2 −→ 52P1/2 transition) are given in Table 4. Of these
two components, the D2 transition is of much more relevance to current quantum and atom optics experiments, because it has a cycling transition that is used for cooling and trapping 85Rb. The frequency ω0 of the D2 is a combination of the 87Rb measurement of [9] with the isotope shift quoted in [10], while the frequency of the D1
transition is an average of values given by [10] and [11]; the vacuum wavelengths λ and the wave numbers kL are
then determined via the following relations:

2πc

2π

λ= ω0

kL =

. λ

(2)

Due to the different nuclear masses of the two isotopes 85Rb and 87Rb, the transition frequencies of 87Rb are shifted slightly up compared to those of 85Rb. This difference is reported as the isotope shift, and the values are
taken from [10]. (See [11, 12] for less accurate measurements.) The air wavelength λair = λ/n assumes an index of refraction of n = 1.000 267 308(10) for the D2 line and n = 1.000 267 215(10) for the D1 line, corresponding

4

2 Rubidium 85 Physical and Optical Properties

to typical laboratory conditions (1 atm pressure, 23◦C temperature, and 40% relative humidity). The index of refraction is calculated from the 1993 revision [13] of the Edlén formula [14]:

2 406 147 15 998 nair = 1 + 8 342.54 + 130 − κ2 + 38.9 − κ2

P 96 095.43

1 + 10−8(0.601 − 0.009 72 T )P 1 + 0.003 6610 T
−f 0.037 345 − 0.000 401 κ2

(3) × 10−8.

Here, P is the air pressure in Pa, T is the temperature in ◦C, κ is the vacuum wave number kL/2π in µm−1, and
f is the partial pressure of water vapor in the air, in Pa (which can be computed from the relative humidity via
the Goff-Gratch equation [15]). This formula is appropriate for laboratory conditions and has an estimated (3σ) uncertainty of 3 × 10−8 from 350-650 nm.1
The lifetimes are weighted averages2 from four recent measurements; the first employed beam-gas-laser spectroscopy [19], with lifetimes of 27.70(4) ns for the 52P1/2 state and 26.24(4) ns for the 52P3/2 state, the second used time-correlated single-photon counting [20], with lifetimes of 27.64(4) ns for the 52P1/2 state and 26.20(9) ns for the 52P3/2 state, the third used photoassociation spectroscopy [21] (as quoted by [20]), with a lifetime of 26.23(6) ns for the 52P3/2 state only, and the fourt-
h also used photoassociation spectroscopy [22], with lifetimes of 27.75(8) ns for the 52P1/2 state and 26.25(8) ns for the 52P3/2 state. Note that at present levels of theoretical [23] and experimental accuracy, we do not distinguish between lifetimes of the 85Rb and 87Rb isotopes. Inverting
the lifetime gives the spontaneous decay rate Γ (Einstein A coefficient), which is also the natural (homogenous)
line width (as an angular frequency) of the emitted radiation.
The spontaneous emission rate is a measure of the relative intensity of a spectral line. Commonly, the relative
intensity is reported as an absorption oscillator strength f , which is related to the decay rate by [24]

Γ

=

e2ω02 2π 0mec3

2J 2J

+1 f
+1

(4)

for a J −→ J fine-structure transition, where me is the electron mass.

The recoil velocity vr is the change in the 85Rb atomic velocity when absorbing or emitting a resonant photon,

and is given by

vr

=

¯hkL . m

(5)

The recoil energy ¯hωr is defined as the kinetic energy of an atom moving with velocity v = vr, which is

¯hωr

=

¯h2kL2 . 2m

(6)

The Doppler shift of an incident light field of frequency ωL due to motion of the atom is

∆ωd

=

vatom c

ωL

(7)

for small atomic velocities relative to c. For an atomic velocity vatom = vr, the Doppler shift is simply 2ωr. Finally, if one wishes to create a standing wave that is moving with respect to the lab frame, the two traveling-wave components must have a frequency difference determined by the relation

vsw

=

∆ωsw 2π

λ ,
2

(8)

1An uncertainty of 1σ was used in the calculations in this reference, but the real-life uncertainty also has important contributions
from the uncertainties of temperature, humidity, and pressure, which are not included here. For more details, see the discussion in
Ref. [16]. 2Weighted means were computed according to µ = ( j xj wj )/( j wj ), where the weights wj were taken to be the inverse
variances of each measurement, wj = 1/σj2. The variance of the weighted mean was estimated according to σµ2 = ( j wj (xj − µ)2)/[(n − 1) j wj ], and the uncertainty in the weighted mean is the square root of this variance. See Refs. [17, 18] for more details.

3 Hyperfine Structure

5

because ∆ωsw/2π is the beat frequency of the two waves, and λ/2 is the spatial periodicity of the standing wave. For a standing wave velocity of vr, Eq. (8) gives ∆ωsw = 4ωr. Two temperatures that are useful in cooling and trapping experiments are also given here. The recoil temperature is the temperature corresponding to an ensemble with a one-dimensional rms momentum of one photon recoil ¯hkL:

Tr

=

¯h2kL2 . mkB

(9)

The Doppler temperature,

¯hΓ

TD

=

, 2kB

(10)

is the lowest temperature to which one expects to be able to cool two-level atoms in optical molasses, due to a

balance of Doppler cooling and recoil heating [25]. Of course, in Zeeman-degenerate atoms, sub-Doppler cooling

mechanisms permit temperatures substantially below this limit [26].

3 Hyperfine Structure

3.1 Energy Level Splittings

The 52S1/2 −→ 52P3/2 and 52S1/2 −→ 52P1/2 transitions are the components of a fine-structure doublet, and each

of these transitions additionally have hyperfine structure. The fine structure is a result of the coupling between the

orbital angular momentum L of the outer electron and its spin angular momentum S. The total electron angular

momentum is then given by

J = L + S,

(11)

and the corresponding quantum number J must lie in the range

|L − S| ≤ J ≤ L + S.

(12)

(Here we use the convention that the magnitude of J is J(J + 1)¯h, and the eigenvalue of Jz is mJ¯h.) For the ground state in 85Rb, L = 0 and S = 1/2, so J = 1/2; for the first excited state, L = 1, so J = 1/2 or J = 3/2.

The energy of any particular level is shifted according to the value of J, so the L = 0 −→ L = 1 (D line) transition

is split into two components, the D1 line (52S1/2 −→ 52P1/2) and the D2 line (52S1/2 −→ 52P3/2). The meaning

of the energy level labels is as follows: the first number is the principal quantum number of the outer electron, the

superscript is 2S + 1, the letter refers to L (i.e., S ↔ L = 0, P ↔ L = 1, etc.), and the subscript gives the value

of J.

The hyperfine structure is a result of the coupling of J with the total nuclear angular momentum I. The total

atomic angular momentum F is then given by

F = J + I.

(13)

As before, the magnitude of F can take the values

|J − I| ≤ F ≤ J + I.

(14)

For the 85Rb ground state, J = 1/2 and I = 5/2, so F = 2 or F = 3. For the excited state of the D2 line (52P3/2), F can take any of the values 1, 2, 3, or 4, and for the D1 excited state (52P1/2), F is either 2 or 3. Again, the
atomic energy levels are shifted according to the value of F . Because the fine structure splitting in 85Rb is large enough to be resolved by many lasers (∼ 15 nm), the two
D-line components are generally treated separately. The hyperfine splittings, however, are much smaller, and it
is useful to have some formalism to describe the energy shifts. The Hamiltonian that describes the hyperfine

6

3.2 Interaction with Static External Fields

structure for each of the D-line components is [24, 27–29]

Hhfs

=

AhfsI

·

J

+

Bhfs

3(I

·

J)2

+

3 2

(I

2I (2I

· J) − I(I − 1)J(2J

+ −

1)J (J 1)

+

1)

+

Chfs

10(I

·

J)3

+

20(I

·

J)2

+

2(I

·

J)[I(I + 1) + J(J + 1) + 3 − 3I(I + 1)J(J I(I − 1)(2I − 1)J(J − 1)(2J − 1)

+

1)]

−

5I (I

+

1)J (J

+

1)

,

(15)

which leads to a hyperfine energy shift of

∆Ehfs

=

1 2 AhfsK

+ Bhfs

3 2

K (K

+

1)

−

2I (I

+

1)J (J

4I(2I − 1)J(2J − 1)

+ 1)

(16)

5K2(K/4 + 1) + K[I(I + 1) + J(J + 1) + 3 − 3I(I + 1)J(J + 1)] − 5I(I + 1)J(J + 1)

+ Chfs

I(I − 1)(2I − 1)J(J − 1)(2J − 1)

,

where

K = F (F + 1) − I(I + 1) − J(J + 1),

(17)

Ahfs is the magnetic dipole constant, Bhfs is the electric quadrupole constant, and Chfs is the magnetic octupole
constant (although the terms with Bhfs and Chfs apply only to the excited manifold of the D2 transition and not to the levels with J = 1/2). These constants for the 85Rb D line are listed in Table 5. The value for the ground state Ahfs constant is from [27], while the constants listed for the 52P3/2 manifold are averages of the values from [27] and [10]. The Ahfs constant for the 52P1/2 manifold is the average from the recent measurements of [10] and
[11]. These measurements are not yet sufficiently precise to have provided a nonzero value for Chfs, and thus it
is not listed. The energy shift given by (16) is relative to the unshifted value (the ‘‘center of gravity’’) listed in Table 3. The hyperfine structure of 85Rb, along with the energy splitting values, is diagrammed in Figs. 2 and 3.

3.2 Interaction with Static External Fields
3.2.1 Magnetic Fields
Each of the hyperfine (F ) energy levels contains 2F + 1 magnetic sublevels that determine the angular distribution of the electron wave function. In the absence of external magnetic fields, these sublevels are degenerate. However, when an external magnetic field is applied, their degeneracy is broken. The Hamiltonian describing the atomic interaction with the magnetic field is

HB

=

µB ¯h

(gS

S

+

gL

L

+

gI

I)

·

B

=

µB ¯h

(gS Sz

+

gLLz

+

gI Iz)Bz,

(18)

if we take the magnetic field to be along the z-direction (i.e., along the atomic quantization axis). In this Hamilto-

nian, the quantities gS, gL, and gI are respectively the electron spin, electron orbital, and nuclear ‘‘g-factors’’ that

account for various modifications to the corresponding magnetic dipole moments. The values for these factors are

listed in Table 6, with the sign convention of [27]. The value for gS has been measured very precisely, and the

value given is the CODATA recommended value. The value for gL is approximately 1, but to account for the finite

nuclear mass, the quoted value is given by

gL

=

1

−

me , mnuc

(19)

which is correct to lowest order in me/mnuc, where me is the electron mass and mnuc is the nuclear mass [30]. The nuclear factor gI accounts for the entire complex structure of the nucleus, and so the quoted value is an experimental measurement [27].

3.2 Interaction with Static External Fields

7

If the energy shift due to the magnetic field is small compared to the fine-structure splitting, then J is a good quantum number and the interaction Hamiltonian can be written as

HB

=

µB ¯h

(gJ

Jz

+ gI Iz)Bz.

(20)

Here, the Landé factor gJ is given by [30]

J(J + 1) − S(S + 1) + L(L + 1) J(J + 1) + S(S + 1) − L(L + 1)

gJ = gL

2J(J + 1)

+ gS

2J(J + 1)

(21)

J(J + 1) + S(S + 1) − L(L + 1)

1+

,

2J(J + 1)

where the second, approximate expression comes from taking the approximate values gS 2 and gL 1. The expression here does not include corrections due to the complicated multielectron structure of 85Rb [30] and QED effects [31], so the values of gJ given in Table 6 are experimental measurements [27] (except for the 52P1/2 state
value, for which there has apparently been no experimental measurement).
If the energy shift due to the magnetic field is small compared to the hyperfine splittings, then similarly F is
a good quantum number, so the interaction Hamiltonian becomes [32]

HB

=

µB gF

Fz ¯h

Bz ,

(22)

where the hyperfine Landé g-factor is given by

F (F + 1) − I(I + 1) + J(J + 1) F (F + 1) + I(I + 1) − J(J + 1)

gF = gJ

2F (F + 1)

+ gI

2F (F + 1)

(23)

F (F + 1) − I(I + 1) + J(J + 1)

gJ

2F (F + 1)

.

The second, approximate expression here neglects the nuclear term, which is a correction at the level of 0.1%, since gI is much smaller than gJ .
For weak magnetic fields, the interaction Hamiltonian HB perturbs the zero-field eigenstates of Hhfs. To lowest order, the levels split linearly according to [24]

∆E|F mF = µB gF mF Bz.

(24)

The approximate gF factors computed from Eq. (23) and the corresponding splittings between adjacent magnetic sublevels are given in Figs. 2 and 3. The splitting in this regime is called the Zeeman effect.

For strong fields where the appropriate interaction is described by Eq. (20), the interaction term dominates

the hyperfine energies, so that the hyperfine Hamiltonian perturbs the strong-field eigenstates |J mJ I mI . The energies are then given to lowest order by [1]

E|J mJ ;I mI

≈

AhfsmI mJ + Bhfs 9(mI mJ )2 − 3J (J + µB(gJ mJ + gI mI )B.

+ 1)mI2 − 3I(I + 4J(2J − 1)I(2I

1)mJ2 − 1)

+

I (I

+

1)J (J

+

1)

(25)

The energy shift in this regime is called the Paschen-Back effect. For intermediate fields, the energy shift is more difficult to calculate, and in general one must numerically
diagonalize Hhfs + HB. A notable exception is the Breit-Rabi formula [24, 32, 33], which applies to the groundstate manifold of the D transition:

E|J=1/2 mJ I mI

=

− ∆Ehfs 2(2I + 1)

+

gI

µB

mB

±

∆Ehfs 2

1+

4mx

+ x2

1/2
.

2I + 1

(26)

8

3.2 Interaction with Static External Fields

In this formula, ∆Ehfs = Ahfs(I + 1/2) is the hyperfine splitting, m = mI ± mJ = mI ± 1/2 (where the ± sign is

taken to be the same as in (26)), and

x = (gJ − gI)µB B . ∆Ehfs

(27)

In order to avoid a sign ambiguity in evaluating (26), the more direct formula

I

1

E|J=1/2 mJ I mI = ∆Ehfs 2I + 1 ± 2 (gJ + 2IgI )µB B

(28)

can be used for the two states m = ±(I + 1/2). The Breit-Rabi formula is useful in finding the small-field shift of the ‘‘clock transition’’ between the mF = 0 sublevels of the two hyperfine ground states, which has no first-order Zeeman shift. Using m = mF for small magnetic fields, we obtain

∆ωclock

=

(gJ − gI )2µ2B B2 2¯h∆Ehfs

(29)

to second order in the field strength. If the magnetic field is sufficiently strong that the hyperfine Hamiltonian is negligible compared to the inter-
action Hamiltonian, then the effect is termed the normal Zeeman effect for hyperfine structure. For even stronger fields, there are Paschen-Back and normal Zeeman regimes for the fine structure, where states with different J can mix, and the appropriate form of the interaction energy is Eq. (18). Yet stronger fields induce other behaviors, such as the quadratic Zeeman effect [32], which are beyond the scope of the present discussion.
The level structure of 85Rb in the presence of a magnetic field is shown in Figs. 4-6 in the weak-field (Zeeman) regime through the hyperfine Paschen-Back regime.

3.2.2 Electric Fields
An analogous effect, the dc Stark effect, occurs in the presence of a static external electric field. The interaction Hamiltonian in this case is [28, 34, 35]

HE

=

−

1 2

α0

Ez2

−

1 2

α2

Ez2

3Jz2 − J (J + J(2J − 1)

1) ,

(30)

where we have taken the electric field to be along the z-direction, α0 and α2 are respectively termed the scalar and tensor polarizabilities, and the second (α2) term is nonvanishing only for the J = 3/2 level. The first term shifts all the sublevels with a given J together, so that the Stark shift for the J = 1/2 states is trivial. The only mechanism for breaking the degeneracy of the hyperfine sublevels in (30) is the Jz contribution in the tensor term. This interaction splits the sublevels such-
 that sublevels with the same value of |mF | remain degenerate. An expression for the hyperfine Stark shift, assuming a weak enough field that the shift is small compared to the hyperfine splittings, is [28]

∆E|J I F mF

=

−

1 2

α0Ez2

−

1 2

α2

Ez2

[3m2F

− F (F + 1)][3X(X − 1) − 4F (F + 1)J(J (2F + 3)(2F + 2)F (2F − 1)J(2J − 1)

+

1)] ,

(31)

where

X = F (F + 1) + J(J + 1) − I(I + 1).

(32)

For stronger fields, when the Stark interaction Hamiltonian dominates the hyperfine splittings, the levels split according to the value of |mJ|, leading to an electric-field analog to the Paschen-Back effect for magnetic fields.
The static polarizability is also useful in the context of optical traps that are very far off resonance (i.e., several to many nm away from resonance, where the rotating-wave approximation is invalid), since the optical potential is given in terms of the ground-state polarizability as V = −1/2α0E2, where E is the amplitude of the optical field.

3.3 Reduction of the Dipole Operator

9

A slightly more accurate expression for the far-off resonant potential arises by replacing the static polarizability with the frequency-dependent polarizability [36]

α0(ω)

=

ω02α0 ω02 − ω2

,

(33)

where ω0 is the resonant frequency of the lowest-energy transition (i.e., the D1 resonance); this approximate
expression is valid for light tuned far to the red of the D1 line. The 85Rb polarizabilities are tabulated in Table 6. Notice that the differences in the excited state and ground
state scalar polarizabilities are given, rather than the excited state polarizabilities, since these are the quantities
that were actually measured experimentally. The polarizabilities given here are in SI units, although they are often given in cgs units (units of cm3) or atomic units (units of a30, where the Bohr radius a0 is given in Table 1). The SI values can be converted to cgs units via α[cm3] = (100 · h/4π 0)(α/h)[Hz/(V/cm)2] = 5.955 213 79(30) × 10−22 (α/h)[Hz/(V/cm)2] (see [36] for discussion of units), and subsequently the conversion to atomic units is
straightforward. The level structure of 85Rb in the presence of an external dc electric field is shown in Fig. 7 in the weak-field
regime through the electric hyperfine Paschen-Back regime.

3.3 Reduction of the Dipole Operator
The strength of the interaction between 85Rb and nearly-resonant optical radiation is characterized by the dipole matrix elements. Specifically, F mF |er|F mF denotes the matrix element that couples the two hyperfine sublevels |F mF and |F mF (where the primed variables refer to the excited states and the unprimed variables refer to the ground states). To calculate these matrix elements, it is useful to factor out the angular dependence and write the matrix element as a product of a Clebsch-Gordan-
 coefficient and a reduced matrix element, using the Wigner-Eckart theorem [37]:

F mF |erq|F mF = F er F F mF |F 1 mF q .

(34)

Here, q is an index labeling the component of r in the spherical basis, and the doubled bars indicate that the matrix element is reduced. We can also write (34) in terms of a Wigner 3-j symbol as

√ F mF |erq|F mF = F er F (−1)F −1+mF 2F + 1

F1 F mF q −mF

.

(35)

Notice that the 3-j symbol (or, equivalently, the Clebsch-Gordan coefficient) vanishes unless the sublevels satisfy

mF = mF + q. This reduced matrix element can be further simplified by factoring out the F and F dependence into a Wigner 6-j symbol, leaving a further reduced matrix element that depends only on the L, S, and J quantum

numbers [37]:

F er F ≡ J I F er J I F

= J er J (−1)F +J+1+I (2F + 1)(2J + 1)

J F

J1 FI

.

(36)

Again, this new matrix element can be further factored into another 6-j symbol and a reduced matrix element involving only the L quantum number:

J er J ≡ L S J er L S J

= L er L (−1)J +L+1+S (2J + 1)(2L + 1)

LL 1 J JS

.

(37)

The numerical value of the J = 1/2 er J = 3/2 (D2) and the J = 1/2 er J = 1/2 (D1) matrix elements are given in Table 7. These values were calculated from the lifetime via the expression [38]

1 τ

=

ω03 3π 0¯hc3

2J 2J

+1 |
+1

J

er J

|2.

(38)

10

4 Resonance Fluorescence

We take the values of these matrix elements to be real and positive, with the relative sign determined by Eq. (37). Note that all the equations we have presented here assume the normalization convention

| J M |er|J M |2 = | J M |erq|J M |2 = | J er J |2 .

(39)

M

Mq

There is, howeve√r, another common convention (used in Ref. [39]) that is related to the convention used here by (J er J ) = 2J + 1 J er J . Also, we have used the standard phase convention for the Clebsch-Gordan
coefficients as given in Ref. [37], where formulae for the computation of the Wigner 3-j (equivalently, Clebsch-
Gordan) and 6-j (equivalently, Racah) coefficients may also be found.
The dipole matrix elements for specific |F mF −→ |F mF transitions are listed in Tables 9-20 as multiples of J er J . The tables are separated by the ground-state F number (2 or 3) and the polarization of the transition (where σ+-polarized light couples mF −→ mF = mF + 1, π-polarized light couples mF −→ mF = mF , and σ−-polarized light couples mF −→ mF = mF − 1).

4 Resonance Fluorescence

4.1 Symmetries of the Dipole Operator

Although the hyperfine structure of 85Rb is quite complicated, it is possible to take advantage of some symmetries of the dipole operator in order to obtain relatively simple expressions for the photon scattering rates due to resonance fluorescence. In the spirit of treating the D1 and D2 lines separately, we will discuss the symmetries in this section implicitly assuming that the light is interacting with only one of the fine-structure components at a time. First, notice that the matrix elements -
that couple to any single excited state sublevel |F mF add up to a factor that is independent of the particular sublevel chosen,

| F (mF + q)|erq|F

mF

|2 =

2J + 1 |
2J + 1

J

er J

|2,

(40)

qF

as can be verified from the dipole matrix element tables. The degeneracy-ratio factor of (2J + 1)/(2J + 1) (which is 1 for the D1 line or 1/2 for the D2 line) is the same factor that appears in Eq. (38), and is a consequence of the normalization convention (39). The interpretation of this symmetry is simply that all the excited state sublevels decay at the same rate Γ, and the decaying population ‘‘branches’’ into various ground state sublevels.
Another symmetry arises from summing the matrix elements from a single ground-state sublevel to the levels in a particular F energy level:

SF F :=

(2F + 1)(2J + 1)

JJ 1 F FI

2
| F mF |F 1 (mF − q) q |2

q

(41)

= (2F + 1)(2J + 1)

J F

J1 FI

2
.

This sum SF F is independent of the particular ground state sublevel chosen, and also obeys the sum rule

SF F = 1.

(42)

F

The interpretation of this symmetry is that for an isotropic pump field (i.e., a pumping field with equal components in all three possible polarizations), the coupling to the atom is independent of how the population is distributed among the sublevels. These factors SF F (which are listed in Table 8) provide a measure of the relative strength of each of the F −→ F transitions. In the case where the incident light is isotropic and couples two of the F levels, the atom can be treated as a two-level -
atom, with an effective dipole moment given by

|diso,eff(F

−→

F

)|2

=

1 3 SF F

|

J ||er||J

|2.

(43)

4.2 Resonance Fluorescence in a Two-Level Atom

11

The factor of 1/3 in this expression comes from the fact that any given polarization of the field only interacts with one (of three) components of the dipole moment, so that it is appropriate to average over the couplings rather than sum over the couplings as in (41).
When the light is detuned far from the atomic resonance (∆ Γ), the light interacts with several hyperfine levels. If the detuning is large compared to the excited-state frequency splittings, then the appropriate dipole strength comes from choosing any ground state sublevel |F mF and summing over its couplings to the excited states. In the case of π-polarized light, the sum is independent of the particular sublevel chosen:

(2F + 1)(2J + 1)

J F

J1 FI

2
| F mF |F

1

mF

0

|2

=

1 .
3

(44)

F

This sum leads to an effective dipole moment for far detuned radiation given by

|ddet,eff|2

=

1 |
3

J ||er||J

|2.

(45)

The interpretation of this factor is also straightforward. Because the radiation is far detuned, it interacts with the full J −→ J transition; however, because the light is linearly polarized, it interacts with only one component of the dipole operator. Then, because of spherical symmetry, |dˆ|2 ≡ |erˆ|2 = e2(|xˆ|2 + |yˆ|2 + |zˆ|2) = 3e2|zˆ|2. Note that this factor of 1/3 also appears for σ± light, but only when the sublevels are uniformly populated (which, of course, is not the equilibrium config-
uration for these polarizations). The effective dipole moments for this case and the case of isotropic pumping are given in Table 7.

4.2 Resonance Fluorescence in a Two-Level Atom

In these two cases, where we have an effective dipole moment, the atoms behave like simple two-level atoms. A two-level atom interacting with a monochromatic field is described by the optical Bloch equations [38],

iΩ ρ˙gg = 2 (ρ˜ge − ρ˜eg) + Γρee

iΩ ρ˙ee = − 2 (ρ˜ge − ρ˜eg) − Γρee

(46)

ρ˜˙ge

=

−(γ

+

i∆)ρ˜ge

−

iΩ 2 (ρee

−

ρgg),

where the ρij are the matrix elements of the density operator ρ := |ψ ψ|, Ω := −d · E0/¯h is the resonant Rabi

frequency, d is the dipole operator, E0 is the electric field amplitude (E = E0 cos ωLt), ∆ := ωL − ω0 is the detuning of the laser field from the atomic resonance, Γ = 1/τ is the natural decay rate of the excited state,

γ := Γ/2 + γc is the ‘‘transverse’’ decay rate (where γc is a phenomenological decay rate that models collisions), ρ˜ge := ρge exp(−i∆t) is a ‘‘slowly varying coherence,’’ and ρ˜ge = ρ˜∗eg. In writing down these equations, we have
made the rotating-wave approximation and used a master-equation approach to model spontaneous emission.

Additionally, we have ignored any effects due to the motion of the atom and decays or couplings to other auxiliary

states. In the case of purely radiative damping (γ = Γ/2), the excited state population settles to the steady state

solution

(Ω/Γ)2

ρee(t → ∞) = 1 + 4 (∆/Γ)2 + 2 (Ω/Γ)2 .

(47)

The (steady state) total photon scattering rate (integrated over all directions and frequencies) is then given by

Γρee(t → ∞):

Rsc =

Γ 2

1

+

4

(I /Isat ) (∆/Γ)2 +

(I

/Isat

)

.

(48)

In writing down this expression, we have defined the saturation intensity Isat such that

I

Ω2

=2

,

Isat

Γ

(49)

12

4.3 Optical Pumping

which gives (with I = (1/2)c 0E02)

Isat

=

c 0Γ2¯h2 4|^· d|2

,

(50)

where ^ is the unit polarization vector of the light field, and d is the atomic dipole moment. With Isat defined

in this way, the on-resonance scattering cross section σ, which is proportional to Rsc(∆ = 0)/I, drops to 1/2 of

its weakly pumped value σ0 when I = Isat. More precisely, we can define the scattering cross section σ as the

power radiated by the atom divided by the incident energy flux (i.e., so that the scattered power is σI), which

from Eq. (48) becomes

σ

=

1+

σ0 4 (∆/Γ)2

+

, (I /Isat )

(51)

where the on-resonance cross section is defined by

¯hωΓ

σ0

=

. 2Isat

(52)

Additionally, the saturation intensity (and thus the scattering cross section) depends on the polarization of the pumping light as well as the atomic alignment, although the smallest saturation intensity (Isat(mF =±3 → mF =±4), discussed below) is often quoted as a representative value. Some saturation intensities and scattering cross sections corresponding to the discussions in Section 4.1 are given in Table 7. A more detailed discussion of the resonance fluorescence from a two-level atom, includ-
ing the spectral distribution of the emitted radiation, can be found in Ref. [38].

4.3 Optical Pumping

If none of the special situations in Section 4.1 applies to the fluorescence problem of interest, then the effects of optical pumping must be accounted for. A discussion of the effects of optical pumping in an atomic vapor on the saturation intensity using a rate-equation approach can be found in Ref. [40]. Here, however, we will carry out an analysis based on the generalization of the optical Bloch equations (46) to the degenerate level structure of alkali atoms. The appropriate master equation f-
or the density matrix of a Fg −→ Fe hyperfine transition is [1, 41–43]



∂

i

∂t ρ˜α mα, β mβ

=

− 2

δαe

Ω(mα, mg) ρ˜g mg, β mβ − δgβ

Ω(me, mβ ) ρ˜α mα, e me

mg

me


      
 (pump field)



+ δαg

Ω∗(me, mα) ρ˜e me, β mβ − δeβ

Ω∗ (mβ ,

mg)

ρ˜α

mα ,

g

  mg 



me

mg





− δαeδeβ Γ ρ˜α mα, β mβ

Γ − δαeδgβ 2 ρ˜α mα, β mβ
Γ − δαgδeβ 2 ρ˜α mα, β mβ
1

+ δαgδgβ Γ

ρ˜e (mα+q), e (mβ +q)

q=−1

Fe (mα + q)|Fg 1 mα q Fe (mβ + q)|Fg 1 mβ q

               
(dissipation)
               

+ i(δαeδgβ − δαgδeβ ) ∆ ρ˜α mα, β mβ

(free evolution) (53)

4.3 Optical Pumping

13

where

Ω(me, mg) = Fg mg|Fe 1 me − (me − mg) Ω−(me−mg)

= (−1)Fe−Fg+me−mg

2Fg + 1 2Fe + 1

Fe me|Fg 1 mg (me − mg)

Ω−(me −mg )

is the Rabi frequency between two magnetic sublevels,

(54)

Ωq

=

2

Fe||er||Fg ¯h

Eq(+)

(55)

is the overall Rabi frequency with polarization q (Eq(+) is the field amplitude associated with the positive-rotating component, with polarization q in the spherical basis), and δ is the Kronecker delta symbol. This master equation ignores coupling to F levels other than the ground (g) and excited (e) levels; hence, this equation is appropriate for a cycling transition such as F = 3 −→ F = 4. Additionally, this master equation assumes purely radiative damping and, as before, does not describe the -
motion of the atom.
To calculate the scattering rate from a Zeeman-degenerate atom, it is necessary to solve the master equation for the steady-state populations. Then, the total scattering rate is given by

Rsc = ΓPe = Γ ρe me, e me ,
me

(56)

where Pe is the total population in the excited state. In addition, by including the branching ratios of the spontaneous decay, it is possible to account for the polarization of the emitted radiation. Defining the scattering rate Rsc, −q for the polarization (−q), we have

Rsc, −q =

| Fe me|Fg 1 mg q |2ρe me, e me ,

me mg

(57)

where, as before, the only nonzero Clebsch-Gordan coefficients occur for me = mg + q. As we have defined it here, q = ±1 corresponds to σ±-polarized radiation, and q = 0 corresponds to π-polarized radiation. The angular
distribution for the σ± scattered light is simply the classical radiation pattern for a rotating dipole,

fs±c (θ, φ)

=

3 16π

(1

+

cos2

θ),

(58)

and the angular distribution for the π-scattered light is the classical radiation pattern for an oscillating dipole,

fs0c(θ, φ)

=

3 8π

sin2

θ.

(59)

The net angular pattern will result from the interference of these three distributions. In general, this master equation is difficult to treat analytically, and even a numerical solution of the time-
dependent equations can be time-consuming if a large number of degenerate states are involved. In the following discussions, we will only consider some simple light configurations interacting with the F = 3 −→ F = 4 cycling transition that can be treated analytically. Discussions of Zeeman-degenerate atoms and their spectra can be found in Refs. [43–47].

4.3.1 Circularly (σ±) Polarized Light
The cases where the atom is driven by either σ+ or σ− light (i.e. circularly polarized light with the atomic quantization axis aligned with the light propagation direction) are straightforward to analyze. In these cases, the light transfers its angular momentum to the atom, and thus the atomic population is transferred to the state with the largest corresponding angular momentum. In the case of the F = 3 −→ F = 4 cycling transition, a σ+ driving field will transfer all the atomic population into t-
he |F = 3, mF = 3 −→ |F = 4, mF = 4 cycling transition,

14

4.3 Optical Pumping

and a σ− driving field will transfer all the population into the |F = 3, mF = −3 −→ |F = 4, mF = −4 cycling transition. In both cases, the dipole moment, satisfying

|d(mF =±3 → mF =±4)|2

=

2J 2J

+1 |
+1

J

=

1/2

er

J

= 3/2 |2,

(60)

is given in Table 7. Also, in this case, the saturation intensity reduces to

Isat

=

¯hω3Γ 12πc2

,

(61)

and the scattering cross section reduces to

3λ2

σ0 =

. 2π

(62)

Note that these values are only valid in steady state. If the pumping field is weak, the ‘‘settling time’’ of the atom to its steady state can be long, resulting in a time-dependent effective dipole moment (and saturation intensity). For example, beginning with a uniform sublevel population in the F = 3 ground level, the saturation intensity will begin at 3.8951(11) mW/cm2 and equilibrate at 1.669 32(49) mW/cm2 for a circularly polarized pump. Also, if there are any ‘‘remixing’’ effects such as co-
llisions or magnetic fields not aligned with the axis of quantization, the system may come to equilibrium in some other configuration.

4.3.2 Linearly (π) Polarized Light

If the light is π-polarized (linearly polarized along the quantization axis), the equilibrium population distribution
is more complicated. In this case, the atoms tend to accumulate in the sublevels near m = 0. Gao [43] has derived
analytic expressions for the equilibrium populations of each sublevel and showed that the equilibrium excited-state population is given by Eq. (47) if Ω2 is replaced by

gP(2Fg + 1)|Ω0|2,

(63)

where Ω0 is the only nonzero component of the Rabi-frequency vector (calculated with respect to the reduced dipole moment | F ||er||F |2 = SF F | J||er||J |2), and gP is a (constant) geometric factor that accounts for the optical pumping. For the 85Rb F = 3 −→ F = 4 cycling transition, this factor has the value gP = 572/9651 ≈ 0.05927, leading to a steady-state saturation intensity of Isat = 3.129 50(92) mW/cm2.

4.3.3 One-Dimensional σ+ − σ− Optical Molasses
We now consider the important case of an optical molasses in one dimension formed by one σ+ and one σ− field (e.g., by two right-circularly polarized, counterpropagating laser fields). These fields interfere to form a field that is linearly polarized, where the polarization vector traces out a helix in space. Because the light is linearly polarized everywhere, and the steady-state populations are independent of the polarization direction (in the plane orthogonal to the axis of quantization), the a-
nalysis of the previous section applies. When we apply the formula (48) to calculate the scattering rate, then, we simply use the saturation intensity calculated in the previous section, and use the total intensity (twice the single-beam intensity) for I in the formula. Of course, this steady-state treatment is only strictly valid for a stationary atom, since a moving atom will see a changing polarization and will thus be slightly out of equilibrium, leading to sub-Doppler cooling mechanism [26].

4.3.4 Three-Dimensional Optical Molasses
Finally, we consider an optical molasses in three dimensions, composed of six circularly polarized beams. This optical configuration is found in the commonly used six-beam magneto-optic trap (MOT). However, as we shall see, this optical configuration is quite complicated, and we will only be able to estimate the total rate of fluorescence.

4.3 Optical Pumping

15

First, we will derive an expression for the electric field and intensity of the light. A typical MOT is formed with two counterpropagating, right-circularly polarized beams along the z-axis and two pairs of counterpropagating, left-circularly polarized beams along the x- and y-axes. Thus, the net electric field is given by

E(r, t) = E0 e−iωt eikz xˆ √− iyˆ + e−ikz xˆ √+ iyˆ

2

2

2

+ eikx yˆ√+ izˆ + e−ikx yˆ√− izˆ + eiky zˆ √+ ixˆ + e−iky zˆ √− ixˆ + c.c.

(64)

2

2

2

2

√ = 2E0 cos ωt (cos kz − sin ky)xˆ + (sin kz + cos kx)yˆ + (cos ky − sin kx)zˆ .

The polarization is linear everywhere for this choice of phases, but the orientation of the polarization vector is strongly position-dependent. The corresponding intensity is given by

I(r) = I0 6 − 4(cos kz sin ky + cos ky sin kx − sin kz cos kx) ,

(65)

where I0 := (1/2)c 0E02 is the intensity of a single beam. The six beams form an intensity lattice in space, with an average intensity of 6I0 and a discrete set of points with zero intensity. Note, however, that the form of this interference pattern is specific to the set of phases chosen here, since there are more than the minimal number of beams needed to determine the lattice pattern.
It is clear that this situation is quite complicated, because an atom moving in this molasses will experience both a changing intensity and polarization direction. The situation becomes even more complicated when the magnetic field gradient from the MOT is taken into account. However, we can estimate the scattering rate if we ignore the magnetic field and assume that the atoms do not remain localized in the lattice, so that they are, on the average, illuminated by all polarizations with intensity -
6I0. In this case, the scattering rate is given by the two-level atom expression (48), with the saturation intensity corresponding to an isotropic pump field (Isat = 3.8951(11) mW/cm2 for the F = 3 −→ F = 4 cycling transition, ignoring the scattering from any light tuned to the F = 2 −→ F = 3 repump transition). Of course, this is almost certainly an overestimate of the effective saturation intensity, since sub-Doppler cooling mechanisms will lead to optical pumping and localization in the light m-
axima [48]. These effects can be minimized, for example, by using a very large intensity to operate in the saturated limit, where the scattering rate approaches Γ/2.
This estimate of the scattering rate is quite useful since it can be used to calculate the number of atoms in an optical molasses from a measurement of the optical scattering rate. For example, if the atoms are imaged by a CCD camera, then the number of atoms Natoms is given by

8π 1 + 4(∆/Γ)2 + (6I0/Isat)

Natoms =

Γ(6I0/Isat)texpηcountdΩ Ncounts,

(66)

where I0 is the intensity of one of the six beams, Ncounts is the integrated number of counts recorded on the CCD chip, texp is the CCD exposure time, ηcount is the CCD camera efficiency (in counts/photon), and dΩ is the solid angle of the light collected by the camera. An expression for the solid angle is

π

f

2

dΩ =

,

4 (f /#)d0

(67)

where f is the focal length of the imaging lens, d0 is the object distance (from the MOT to the lens aperture), and f /# is the f -number of the imaging system.

16
5 Data Tables

5 Data Tables

Table 1: Fundamental Physical Constants (2006 CODATA recommended values [2])

Speed of Light

c

2.997 924 58 × 108 m/s (exact)

Permeability of Vacuum µ0 Permittivity of Vacuum 0

h
Planck’s Constant ¯h

Elementary Charge

e

Bohr Magneton

µB

4π × 10−7 N/A2 (exact) (µ0c2)−1 (exact)
= 8.854 187 817 . . . × 10−12 F/m 6.626 068 96(33) × 10−34 J·s 4.135 667 33(10) × 10−15 eV·s 1.054 571 628(53) × 10−34 J·s 6.582 118 99(16) × 10−16 eV·s 1.602 176 487(40) × 10−19 C 9.274 009 15(23) × 10−24 J/T
h · 1.399 624 604(35) MHz/G

Atomic Mass Unit

u

1.660 538 782(83) × 10−27 kg

Electron Mass

me

5.485 799 0943(23) × 10−4 u 9.109 382 15(45) × 10−31 kg

Bohr Radius

a0

Boltzmann’s Constant kB

0.529 177 208 59(36) × 10−10 m 1.380 6504(24) × 10−23 J/K

Table 2: Rubidium 85 Physical Properties.

Atomic Number

Z

37

Total Nucleons

Z +N

85

Relative Natural Abundance η(85Rb)

72.17(2)%

[4]

Nuclear Lifetime

τn

(stable)

[4]

Atomic Mass

84.911 789 732(14) u

m

1.409 993 199(70) × 10−25 kg

[3]

Density at 25◦C Melting Point Boiling Point

ρm

1.53 g/cm3

[4]

TM

39.30 ◦C

[4]

TB

688 ◦C

[4]

Specific Heat Capacity

cp

0.363 J/g·K

[4]

Molar Heat Capacity

Cp

Vapor Pressure at 25◦C

Pv

31.060 J/mol·K

[4]

3.92(20) × 10−7 torr

[5]

Nuclear Spin

I

5/2

Ionization Limit

33 690.798 90(20) cm−1

EI

[49] 4.177 126 33(10) eV

5 Data Tables

17

Table 3: Rubidium 85 D2 (52S1/2 −→ 52P3/2) Transition Optical Properties.

Frequency

ω0

2π · 384.230 406 373(14) THz

Transition Energy

¯hω0

1.589 049 139(38) eV

Wavelength (Vacuum)

λ

780.241 368 271(27) nm

Wavelength (Air) Wave Number (Vacuum) Isotope shift

λair kL/2π ω0(87Rb) − ω0(85Rb)

780.032 859 5(78) nm 12 816.546 784 96(45) cm−1
2π · 78.095(12) MHz

Lifetime

τ

26.2348(77) ns

Decay Rate/ Natural Line Width (FWHM)

Γ

38.117(11) × 106 s−1 2π · 6.0666(18) MHz

Absorption oscillator strength

f

0.695 77(20)

Recoil Velocity

vr

6.0230 mm/s

Recoil Energy

ωr

2π · 3.8597 kHz

Recoil Temperature

Tr

370.47 nK

Doppler Shift (vatom = vr)

∆ωd(vatom = vr)

2π · 7.7194 kHz

Doppler Temperature

TD

145.57 µK

Frequency shift for standing wave moving with vsw = vr

∆ωsw(vsw = vr)

2π · 15.4387 kHz

[9, 10]
[10] [19–22]

Table 4: Rubidium 85 D1 (52S1/2 −→ 52P1/2) Transition Optical Properties.

Frequency

ω0

2π · 377.107 385 690(46) THz

Transition Energy

¯hω0

1.559 590 695(38) eV

Wavelength (Vacuum)

λ

794.979 014 933(96) nm

Wavelength (Air) Wave Number (Vacuum) Isotope shift

λair kL/2π ω0(87Rb) − ω0(85Rb)

794.766 641 4(79) nm 12 578.948 390 0(15) cm−1
2π · 77.583(12) MHz

Lifetime

τ

27.679(27) ns

Decay Rate/ Natural Line Width (FWHM)

Γ

36.129(35) × 106 s−1 2π · 5.7500(56) MHz

Absorption oscillator strength

f

0.342 31(33)

Recoil Velocity

vr

5.9113 mm/s

Recoil Energy

ωr

2π · 3.7179 kHz

Recoil Temperature

Tr

356.86 nK

Doppler Shift (vatom = vr)

∆ωd(vatom = vr)

2π · 7.4358 kHz

Frequency shift for standing wave moving with vsw = vr

∆ωsw(vsw = vr)

2π · 14.8716 kHz

[10, 11]
[10] [19, 20, 22]

18

5 Data Tables

Table 5: Rubidium 85 D Transition Hyperfine Structure Constants.

Magnetic Dipole Constant, 52S1/2

A52S1/2 h · 1.011 910 813 0(20) GHz

Magnetic Dipole Constant, 52P1/2

A52 P1/2

h · 120.527(56) MHz

Magnetic Dipole Constant, 52P3/2

A52 P3/2

h · 25.0020(99) MHz

Electric Quadrupole Constant, 52P3/2 B52P3/2

h · 25.790(93) MHz

[27] [10, 11] [11, 27] [11, 27]

Table 6: Rubidium 85 D Transition Magnetic and Electric Field Interaction Parameters.

Electron spin g-factor

gS

2.002 319 304 3622(15)

[2]

Electron orbital g-factor

gL

0.999 993 54

Fine structure Landé g-factor

gJ (52S1/2) gJ (52P1/2) gJ (52P3/2)

2.002 331 13(20)

[27]

0.666

1.3362(13)

[27]

Nuclear g-factor

gI

−0.000 293 640 00(60)

[27]

Clock transition Zeeman shift

∆ωclock/B2

2π · 1293.98 Hz/G2

Ground-state polarizability

α0(52S1/2)

h · 0.0794(16) Hz/(V/cm)2 [36]

D1 scalar polarizability

α0(52P1/2) − α0(52S1/2) h · 0.122 306(16) Hz/(V/cm)2 [50]

D2 scalar polarizability

α0(52P3/2) − α0(52S1/2) h · 0.1340(8) Hz/(V/cm)2 [51]

D2 tensor polarizability

α2(52P3/2)

h · −0.0406(8) Hz/(V/cm)2 [51]

5 Data Tables

19

Table 7: Rubidium 85 Dipole Matrix Elements, Saturation Intensities, and Resonant Scattering Cross Sections.

D2(52S1/2 −→ 52P3/2) Transition Dipole Matrix Element

J = 1/2 er J = 3/2

4.227 53(62) ea0 3.584 25(52) × 10−29 C·m

Effective Dipole Moment, Saturation Intensity, and Resonant Cross Section (F = 3 → F = 4) (isotropic light polarization)
Effective Far-Detuned Dipole Moment, Saturation Intensity, and Resonant Cross Section (D2 line, π-polarized light)
Dipole Moment, Saturation Intensity, and Resonant Cross Section |F = 3, mF = ±3 → |F = 4, mF = ±4 cycling transition (σ±-polarized light)
D1(52S1/2 −→ 52P1/2) Transition Dipole Matrix Element

diso,eff(F = 3 → F = 4)

1.956 96(29) ea0 1.659 18(24) × 10−29 C·m

Isat(iso,eff)(F = 3 → F = 4)

3.8951(11) mW/cm2

σ0(iso,eff)(F = 3 → F = 4) 1.245 726 051 126(88) × 10−9 cm2

ddet,eff,D2

2.440 76(36) ea0 2.069 37(30) × 10−29 C·m

Isat(det,eff,D2 ) σ0(det,eff,D2 )

2.503 99(73) mW/cm2 1.937 796 079 53(14) × 10−9 cm2

d(mF =±3 → mF =±4)

2.989 31(44) ea0 2.534 44(37) × 10−29 C·m

Isat(mF =±3 → mF =±4) σ0(mF =±3 → mF =±4)
J = 1/2 er J = 1/2

1.669 32(49) mW/cm2 2.906 694 119 30(20) × 10−9 cm2
2.9931(14) ea0 2.5377(12) × 10−29 C·m

Effective Far-Detuned Dipole Moment, Saturation Intensity, and Resonant Cross Section (D1 line, π-polarized light)

ddet,eff,D1
Isat(det,eff,D1 ) σ0(det,eff,D1 )

1.728 09(84) ea0 1.465 13(71) × 10−29 C·m
4.4876(43) mW/cm2 1.005 845 925 73(24) × 10−9 cm2

Table 8: Rubidium 85 Relative Hyperfine Transition Strength Factors SF F [from Eq. (41)].

D2 (52S1/2 −→ 52P3/2) transition

S34 9/14 S33 5/18

S23 14/45 S22 7/18

S32 5/63 S21 3/10

D1 (52S1/2 −→ 52P1/2) transition

S33 S32

4/9 5/9

S23 S22

7/9 2/9

20

5 Data Tables

Table 9: Rubidium 85 D2 (52S1/2 −→ 52P3/2) Dipole Matrix Elements for σ+ transitions (F = 3, mF −→ F , mF = mF + 1), expressed as multiples of J = 1/2||er||J = 3/2 .
mF = −3 mF = −2 mF = −1 mF = 0 mF = 1 mF = 2 mF = 3

1

3

3

5

15

3

1

F =4

56

56

28

28

56

8

2

5

25

5

5

25

5

F =3

72

216

36

36

216

72

5

10

2

1

1

F =2

63

189

63

63

189

Table 10: Rubidium 85 D2 (52S1/2 −→ 52P3/2) Dipole Matrix Elements for π transitions (F = 3, mF −→ F , mF = mF ), expressed as multiples of J = 1/2||er||J = 3/2 .
mF = −3 mF = −2 mF = −1 mF = 0 mF = 1 mF = 2 mF = 3

F =4

1 −
8

3 −
14

15 −
56

2

15

3

1

−

−

−

−

7

56

14

8

5

5

5

F =3 −

−

−

0

24

54

216

5

5

5

216

54

24

F =2

5

8

1

8

5

189

189

21

189

189

Table 11: Rubidium 85 D2 (52S1/2 −→ 52P3/2) Dipole Matrix Elements for σ− transitions (F = 3, mF −→ F , mF = mF − 1), expressed as multiples of J = 1/2||er||J = 3/2 .
mF = −3 mF = −2 mF = −1 mF = 0 mF = 1 mF = 2 mF = 3

1 F =4
2

3

15

5

3

3

1

8

56

28

28

56

56

F =3

5 −
72

25

5

5

25

5

−

−

−

−

−

216

36

36

216

72

F =2

1

1

2

10

5

189

63

63

189

63

5 Data Tables

21

Table 12: Rubidium 85 D2 (52S1/2 −→ 52P3/2) Dipole Matrix Elements for σ+ transitions (F = 2, mF −→ F , mF = mF + 1), expressed as multiples of J = 1/2||er||J = 3/2 .
mF = −2 mF = −1 mF = 0 mF = 1 mF = 2

2 F =3
135

2

4

4

2

45

45

27

9

7 F =2
54

7

7

7

36

36

54

3 F =1
10

3

1

20

20

Table 13: Rubidium 85 D2 (52S1/2 −→ 52P3/2) Dipole Matrix Elements for π transitions (F = 2, mF −→ F , mF = mF ), expressed as multiples of J = 1/2||er||J = 3/2 .
mF = −2 mF = −1 mF = 0 mF = 1 mF = 2

2 F =3 −
27

16

2

16

2

−

−

−

−

135

15

135

27

7

7

F =2 −

−

0

27

108

7

7

108

27

F =1

3

1

3

20

5

20

Table 14: Rubidium 85 D2 (52S1/2 −→ 52P3/2) Dipole Matrix Elements for σ− transitions (F = 2, mF −→ F , mF = mF − 1), expressed as multiples of J = 1/2||er||J = 3/2 .
mF = −2 mF = −1 mF = 0 mF = 1 mF = 2

2 F =3
9

4

4

2

2

27

45

45

135

F =2

7 −
54

7

7

7

−

−

−

36

36

54

F =1

1

3

3

20

20

10

22

5 Data Tables

Table 15: Rubidium 85 D1 (52S1/2 −→ 52P1/2) Dipole Matrix Elements for σ+ transitions (F = 3, mF −→ F , mF = mF + 1), expressed as multiples of J = 1/2||er||J = 1/2 .
mF = −3 mF = −2 mF = −1 mF = 0 mF = 1 mF = 2 mF = 3

1

5

2

2

5

1

F =3

9

27

9

9

27

9

5

10

2

1

1

F =2

9

27

9

9

27

Table 16: Rubidium 85 D1 (52S1/2 −→ 52P1/2) Dipole Matrix Elements for π transitions (F = 3, mF −→ F , mF = mF ), expressed as multiples of J = 1/2||er||J = 1/2 .
mF = −3 mF = −2 mF = −1 mF = 0 mF = 1 mF = 2 mF = 3

1

4

1

F =3 −

−

−

0

3

27

27

1

4

1

27

27

3

F =2

5

8

1

8

5

27

27

3

27

27

Table 17: Rubidium 85 D1 (52S1/2 −→ 52P1/2) Dipole Matrix Elements for σ− transitions (F = 3, mF −→ F , mF = mF − 1), expressed as multiples of J = 1/2||er||J = 1/2 .
mF = −3 mF = −2 mF = −1 mF = 0 mF = 1 mF = 2 mF = 3

F =3

1 −
9

5 −
27

2 −
9

2

5

1

−

−

−

9

27

9

F =2

1

1

2

10

5

27

9

9

27

9

5 Data Tables

23

Table 18: Rubidium 85 D1 (52S1/2 −→ 52P1/2) Dipole Matrix Elements for σ+ transitions (F = 2, mF −→ F , mF = mF + 1), expressed as multiples of J = 1/2||er||J = 1/2 .
mF = −2 mF = −1 mF = 0 mF = 1 mF = 2

1 F =3 −
27

1 −
9

2

10

5

−

−

−

9

27

9

2 F =2 −
27

1 −
9

1

2

−

−

9

27

Table 19: Rubidium 85 D1 (52S1/2 −→ 52P1/2) Dipole Matrix Elements for π transitions (F = 2, mF −→ F , mF = mF ), expressed as multiples of J = 1/2||er||J = 1/2 .
mF = −2 mF = −1 mF = 0 mF = 1 mF = 2

5 F =3
27

8

1

8

5

27

3

27

27

4 F =2
27

1

1

4

0

−

−

27

27

27

Table 20: Rubidium 85 D1 (52S1/2 −→ 52P1/2) Dipole Matrix Elements for σ− transitions (F = 2, mF −→ F , mF = mF − 1), expressed as multiples of J = 1/2||er||J = 1/2 .
mF = −2 mF = −1 mF = 0 mF = 1 mF = 2

F =3

5 −
9

10 −
27

2 −
9

1

1

−

−

9

27

F =2

2

1

1

2

27

9

9

27

24

5 Data Tables

10-2

10-3

10-4

10-5

Vapor Pressure (torr)

10-6

10-7

10-8

10-9

10-10

10-11

10-12 -50

0

50

100

150

Temperature (˚C)

Figure 1: Vapor pressure of rubidium from the model of Eqs. (1). The vertical line indicates the melting point.

5 Data Tables
52P3/2

100.205(44) MHz

25

gF o=o1/2

F = 4

(0.70 MHz/G)

120.640(68) MHz

20.435(51) MHz
83.835(34) MHz 113.208(84) MHz

63.401(61) MHz 29.372(90) MHz

gF o=o7/18

F = 3

(0.54 MHz/G)

gF o=o1/9 (0.16 MHz/G)
F = 2

gF o=o-1

F = 1

(-o1.4 MHz/G)

780.241 368 271(27) nm 384.230 406 373(14) THz 12 816.546 784 96(45) cm-1
1.589 049 139(38) eV

52S1/2

1.264 888 516 3(25) GHz

gF o=o1/3

F = 3

(0.47 MHz/G)

1.770 843 922 8(35) GHz

3.035 732 439 0(60) GHz

gF o=o-1/3

F = 2

(-o0.47 MHz/G)

Figure 2: Rubidium 85 D2 transition hyperfine structure, with frequency splittings between the hyperfine energy levels. The excited-state values are taken from [11, 27], and the ground-state values are from [27]. The relative hyperfine shifts are shown to scale within each hyperfine manifold (but visual spacings should not be compared between manifolds or to the optical splitting). The approximate Landé gF -factors for each level are also given, with the corresponding Zeeman splittings between adj-
acent magnetic sublevels.

26
52P1/2

150.659(71) MHz 210.923(99) MHz

5 Data Tables

gF o=o1/9

F = 3

(0.16 MHz/G)

361.58(17) MHz

gF o=o-1/9

F = 2

(-o0.16 MHz/G)

794.979 014 933(96) nm 377.107 385 690(46) THz 12 578.948 390 0(15) cm-1
1.559 590 695(38) eV

52S1/2

1.264 888 516 3(25) GHz

gF o=o1/3

F = 3

(0.47 MHz/G)

1.770 843 922 8(35) GHz

3.035 732 439 0(60) GHz

gF o=o-1/3

F = 2

(-o0.47 MHz/G)

Figure 3: Rubidium 85 D1 transition hyperfine structure, with frequency splittings between the hyperfine energy levels. The excited-state values are taken from [10, 11], and the ground-state values are from [27]. The relative hyperfine shifts are shown to scale within each hyperfine manifold (but visual spacings should not be compared between manifolds or to the optical splitting). The approximate Landé gF -factors for each level are also given, with the corresponding Zeeman splittings between adj-
acent magnetic sublevels.

5 Data Tables

27

8

E/h (GHz)

F=3
0
F=2

mJ = +1/2 mJ = -1/2

-8

0

2500

5000

magnetic field (G)

Figure 4: Rubidium 85 52S1/2 (ground) level hyperfine structure in an external magnetic field. The levels are grouped according to the value of F in the low-field (Zeeman) regime and mJ in the strong-field (hyperfine Paschen-Back) regime.

1

E/h (GHz)

F=3
0
F=2

mJ = +1/2 mJ = -1/2

-1

0

1000

2000

magnetic field (G)

Figure 5: Rubidium 85 52P1/2 (D1 excited) level hyperfine structure in an external magnetic field. The levels are grouped according to the value of F in the low-field (Zeeman) regime and mJ in the strong-field (hyperfine Paschen-Back) regime.

28

5 Data Tables

E/h (MHz)

600
F=4
0 F=3
F=2 F=1

mJ = +3/2 mJ = +1/2 mJ = -1/2 mJ = -3/2

-600 0

100

200

magnetic field (G)

Figure 6: Rubidium 85 52P3/2 (D2 excited) level hyperfine structure in an external magnetic field. The levels are grouped according to the value of F in the low-field (Zeeman) regime and mJ in the strong-field (hyperfine Paschen-Back) regime.

0.2
F=4
0 F=3
F=2 F=1

|omJo| = 1/2

E/h (GHz)

-1
|omJo| = 3/2

-1.2 0

50

100

electric field (kV/cm)

Figure 7: Rubidium 85 52P3/2 (D2 excited) level hyperfine structure in a constant, external electric field. The levels are grouped according to the value of F in the low-field (Zeeman) regime and |mJ| in the strong-field (‘‘electric’’ hyperfine Paschen-Back) regime. Levels with the same values of F and |mF | (for a weak field) are degenerate.

6 Acknowledgements

29

6 Acknowledgements
Thanks to Windell Oskay, Martin Fischer, Andrew Klekociuk, Mark Saffman, Sadiq Rangwala, Blair Blakie, Markus Kottke, Björn Brezger, Marlon Nakat, Erik Streed, Horst Knöckel, Keith Calkins, Michael Johanning, Greg Smith, Wenhai Ji, Andreas Günther, James Bateman, Brad Foreman, Bruce Klappauf, Ariel Sommer, Alexey Gorshkov, Andrew Jayich, Ara Tonoyan, Zak Vendeiro, and Max Mäusezahl for corrections and suggestions. Special thanks to Elwin Dijck for a careful review and finding errors in the error p-
ropagation.
References
[1] Daniel A. Steck, ‘‘Quantum and Atom Optics,’’ (2007). Available online at http://atomoptics.uoregon .edu/~dsteck/teaching/quantum-optics/.
[2] P. J. Mohr, B. N. Taylor, and D. B. Newell, ‘‘The 2006 CODATA Recommended Values of the Fundamental Physical Constants, Web Version 5.1,’’ available at http://physics.nist.gov/constants (National Institute of Standards and Technology, Gaithersburg, MD 20899, 31 December 2007).
[3] Michael P. Bradley, James V. Porto, Simon Rainville, James K. Thompson, and David E. Pritchard, ‘‘Penning Trap Measurements of the Masses of 133Cs, 87,85Rb, and 23Na with Uncertainties ≤0.2 ppb,’’ Physical Review Letters 83, 4510 (1999).
[4] David R. Lide (Ed.), CRC Handbook of Chemistry and Physics, 82nd ed. (CRC Press, Boca Raton, 2001).
[5] C. B. Alcock, V. P. Itkin, and M. K. Horrigan, ‘‘Vapor Pressure Equations for the Metallic Elements: 298–2500 K,’’ Canadian Metallurgical Quarterly 23, 309 (1984).
[6] A. N. Nesmeyanov, Vapor Pressure of the Chemical Elements (Elsevier, Amsterdam, 1963). English edition edited by Robert Gary.
[7] R. E. Honig, ‘‘Vapor Pressure Data for the More Common Elements,’’ RCA Review 18, 195 (1957).
[8] C.-J. Lorenzen and K. Niemax, ‘‘Quantum Defects of the n2P1/2,3/2 Levels in 39K I and 85Rb I,’’ Physica Scripta 27, 300 (1983).
[9] Jun Ye, Steve Swartz, Peter Jungner, and John L. Hall, ‘‘Hyperfine structure and absolute frequency of the 87Rb 5P3/2 state,’’ Optics Letters 21, 1280 (1996).
[10] G. P. Barwood, P. Gill, and W. R. C. Rowley, ‘‘Frequency Measurements on Optically Narrowed Rb-Stabilised Laser Diodes at 780 nm and 795 nm,’’ Applied Physics B 53, 142 (1991).
[11] A. Banerjee, D. Das, and V. Natarajan, ‘‘Absolute frequency measurements of the D1 lines in 39K, 85Rb, and 87Rb with ∼ 0.1 ppb uncertainty,’’ Europhysics Letters 65, 172 (2004).
[12] Hyatt M. Gibbs and George C. Churchill, ‘‘Laser Spectroscopic Measurement of the 87Rb–85Rb D1–Line Isotope Shift,’’ Journal of the Optical Society of America 62, 1130 (1972).
[13] K. P. Birch and M. J. Downs, ‘‘Letter to the Editor: Correction to the Updated Edlén Equation for the Refractive Index of Air,’’ Metrologia 31, 315 (1994).
[14] Bengt Edlén, ‘‘The Refractive Index of Air,’’ Metrologia 2, 12 (1966).
[15] Holger Vömel, ‘‘Saturation vapor pressure formulations,’’ http://cires1.colorado.edu/~voemel/vp.html (2016).
[16] Jack A. Stone and Jay H. Zimmerman, ‘‘Index of Refraction of Air,’’ https://emtoolbox.nist.gov/ Wavelength/Documentation.asp (2001).

30

REFERENCES

[17] E. Richard Cohen and Jesse W. M. DuMond, ‘‘Our Knowledge of the Fundamental Constants of Physics of Chemistry in 1965,’’ Reviews of Modern Physics 37, 537 (1965).
[18] L. L. Lucas and M. P. Unterweger, ‘‘Comprehensive Review and Critical Evaluation of the Half-Life of Tritium,’’ Journal of Research of the National Institute of Standards and Technology 105, 541 (2000).
[19] U. Volz and H. Schmoranzer, ‘‘Precision Lifetime Measurements on Alkali Atoms and on Helium by BeamGas-Laser Spectroscopy,’’ Physica Scripta T65, 48 (1996).
[20] J. E. Simsarian, L. A. Orozco, G. D. Sprouse, and W. Z. Zhao, ‘‘Lifetime measurements of the 7p levels of atomic francium,’’ Physical Review A 57, 2448 (1998).
[21] H. M. J. M. Boesten, C. C. Tsai, J. R. Gardner, D. J. Heinzen, and B. J. Verhaar, ‘‘Observation of a shape resonance in the collision of two cold 87Rb atoms,’’ Physical Review A 55, 636 (1997).
[22] R. F. Gutterres, C. Amiot, A. Fioretti, C. Gabbanini, M. Mazzoni, and O. Dulieu, ‘‘Determination of the 87Rb 5p state dipole matrix element and radiative lifetime from the photoassociation spectroscopy of the Rb2 0−g (P3/2) long-range state,’’ Physical Review A 66, 024502 (2002).
[23] M. S. Safronova, Carl J. Williams, and Charles W. Clark, ‘‘Relativistic many-body calculations of electricdipole matrix elements, lifetimes, and polarizabilities in rubidium,’’ Physical Review A 69, 022509 (2004).
[24] Alan Corney, Atomic and Laser Spectroscopy (Oxford, 1977).
[25] Paul D. Lett, Richard N. Watts, Christoph I. Westbrook, and William D. Phillips, ‘‘Observation of Atoms Laser Cooled below the Doppler Limit,’’ Physical Review Letters 61, 169 (1988).
[26] J. Dalibard and C. Cohen-Tannoudji, ‘‘Laser cooling below the Doppler limit by polarization gradients: simple theoretical models,’’ Journal of the Optical Society of America 6, 2023 (1989).
[27] E. Arimondo, M. Inguscio, and P. Violino, ‘‘Experimental determinations of the hyperfine structure in the alkali atoms,’’ Reviews of Modern Physics 49, 31 (1977).
[28] Lloyd Armstrong, Jr., Theory of the Hyperfine Structure of Free Atoms (Wiley-Interscience, New York, 1971).
[29] Vladislav Gerginov, Andrei Derevianko, and Carol E. Tanner, ‘‘Observation of the Nuclear Magnetic Octupole Moment of 133Cs,’’ Physical Review Letters 91, 072501 (2003).
[30] Hans A. Bethe and Edwin E. Salpeter, Quantum Mechanics of One- and Two-Electron Atoms (SpringerVerlag, Berlin, 1957).
[31] Leonti Labzowsky, Igor Goidenko, and Pekka Pyykkö, ‘‘Estimates of the bound-state QED contributions to the g-factor of valence ns electrons in alkali metal atoms,’’ Physics Letters A 258, 31 (1999).
[32] Hans Kleinpoppen, ‘‘Atoms,’’ in Ludwig Bergmann and Clemens Schaefer, Constituents of Matter: Atoms, Molecules, Nuclei, and Particles, Wilhelm Raith, Ed. (Walter de Gruyter, Berlin, 1997).
[33] G. Breit and I. I. Rabi, ‘‘Measurement of Nuclear Spin,’’ Physical Review 38, 2082 (1931).
[34] Robert W. Schmieder, Allen Lurio, and W. Happer, ‘‘Quadratic Stark Effect in the 2P3/2 States of the Alkali Atoms,’’ Physical Review A 3, 1209 (1971).
[35] Robert W. Schmieder, ‘‘Matrix Elements of the Quadratic Stark Effect on Atoms with Hyperfine Structure,’’ American Journal of Physics 40, 297 (1972).
[36] Thomas M. Miller, ‘‘Atomic and Molecular Polarizabilities,’’ in CRC Handbook of Chemistry and Physics, David R. Lide, Ed., 81st ed. (CRC Press, Boca Raton, 2000).

REFERENCES

31

[37] D. M. Brink and G. R. Satchler, Angular Momentum (Oxford, 1962).
[38] R. Loudon, The Quantum Theory of Light, 2nd ed. (Oxford University Press, 1983).
[39] Carol E. Tanner, ‘‘Precision Measurements of Atomic Lifetimes,’’ in Atomic Physics 14: The Fourteenth International Conference on Atomic Physics, D. J. Wineland, C. E. Wieman, and S. J. Smith, Eds. (AIP Press, 1995).
[40] J. Sagle, R. K. Namiotka, and J. Huennekens, ‘‘Measurement and modelling of intensity dependent absorption and transit relaxation on the cesium D1 line,’’ Journal of Physics B 29, 2629 (1996).
[41] T. A. Brian Kennedy, private communication (1994).
[42] Claude Cohen-Tannoudji, ‘‘Atoms in strong resonant fields,’’ in Les Houches, Session XXVII, 1975 — Frontiers in Laser Spectroscopy, R. Balian, S. Haroche, and S. Liberman, Eds. (North-Holland, Amsterdam, 1977).
[43] Bo Gao, ‘‘Effects of Zeeman degeneracy on the steady-state properties of an atom interacting with a nearresonant laser field: Analytic results,’’ Physical Review A 48, 2443 (1993).
[44] Bo Gao, ‘‘Effects of Zeeman degeneracy on the steady-state properties of an atom interacting with a nearresonant laser field: Probe spectra,’’ Physical Review A 49, 3391 (1994).
[45] Bo Gao, ‘‘Effects of Zeeman degeneracy on the steady-state properties of an atom interacting with a nearresonant laser field: Resonance fluorescence,’’ Physical Review A 50, 4139 (1994).
[46] D. Polder and M. F. H. Schuurmans, ‘‘Resonance fluorescence from a j = 1/2 to j = 1/2 transition,’’ Physical Review A 14, 1468 (1976).
[47] J. Javanainen, ‘‘Quasi-Elastic Scattering in Fluorescence from Real Atoms,’’ Europhysics Letters 20, 395 (1992).
[48] C. G. Townsend, N. H. Edwards, C. J. Cooper, K. P. Zetie, C. J. Foot, A. M. Steane, P. Szriftgiser, H. Perrin, and J. Dalibard, ‘‘Phase-space density in the magneto-optical trap,’’ Physical Review A 52, 1423 (1995).
[49] S. A. Lee, J. Helmcke, J. L. Hall, and B. P. Stoicheff, ‘‘Doppler-free two-photon transitions to Rydberg levels: convenient, useful, and precise reference wavelengths for dye lasers,’’ Optics Letters 3, 141 (1978).
[50] K. E. Miller, D. Krause, Jr., and L. R. Hunter, ‘‘Precise measurement of the Stark shift of the rubidium and potassium D1 lines,’’ Physical Review A 49, 5128 (1994).
[51] C. Krenn, W. Scherf, O. Khait, M. Musso, and L. Windholz, ‘‘Stark effect investigations of resonance lines of neutral potassium, rubidium, europium and gallium,’’ Zeitschrift fur Physik D 41, 229 (1997).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:24.400Z
- **Text Length:** 64717 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
