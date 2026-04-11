# PDF Document: Discussion_202402.pdf

**File Path:** Discussion_202402.pdf

**Processed Date:** 2026-02-10T18:16:47.785Z

**File Size:** 2310.69 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 206

**Collection:** Lattice > QSync

---

## Extracted Text Content

Status update on Quantum synchronization via trapped ions
02.20.2024
Why are we thinking about mutual synchronization (instead of synchronization to an external drive)?
There’s a PRL (2020) observing synchronization to a classical external drive in Rb atoms (essentially a spin-1 system) The phonon laser of the ETH group is essentially also synchronization to an external drive The Oklahoma group is also trying to do spin-1 system + external drive
So far, nobody has shown actual synchronization between two quantum systems

Recap: Quantum van der Pol oscillator

Single quantum van der Pol
Harmonic oscillator with incoherent one phonon gain and two phonon loss
ϱ· = − iω0 [a†a, ϱ] + κ1 [a†]ϱ + κ2 [a2]ϱ

Wigner distribution

density matrix

in the limit of κ2 → ∞
ϱ(t → ∞) = diag(2/3,1/3)

𝒟𝒟

2

Wqð 1 À  2Þ ¼ 2  þ 9  22 cos 2ð 1 À  2Þ þ O  32 :

1)

(13)
Recap: Reactive vs. dissipative coupling

which has peaks at  1 À  2 ¼ 0,  . When  2 ! 1,   ¼

ng

ð23

j0ih0j

þ

1 3

j1ih1jÞ

 

ð23 j0ih0j

þ

1 3

j1ih1jÞ,

i.e.,

a

product

of

mixReedastcatteisv, eand(dthierepecatk)s cdiosaupppelairn. Wg hen  2 is large but

Dissipative coupling

ohﬁj0sing2ciϱhiit·lehel2,ar=0,ttojbhr−uaesnt edinpxo[ejiaHts2tk0ws,sihhwϱ0ee]h2nmej+.tnehrTetg∑ hhyeejuosodc,κsucpc1euhiplaltyaso[etooanoarj†stlf]tyfroϱ-adjcc0ic+atiuigopaκonnyn2dbaslteja1t[twieea.lesej2emj]n2ϱeitnhotesr

ϱ· = ∑ (κ1 [aj†]ϱ + κ2 [aj2]ϱ) + D [a1 + a2] ϱ
j

comInHmﬁno=intetVon(suatm1u†dabye2rl+arogafe2†acsyo1su)tpelmeds

vdP oscillators.—It is of globally coupled vdP

P(x1, x2) = ⟨x1, x2 ϱ x2, x2⟩

2π

classical

quantum

(a)

(b)

0.5

0.161

0.4

0.16 0.3

0.2

0.159

W(φ1−φ2) W(φ1−φ2)

0.1

0.158

2π

0 0 π/2 π 3π/2 2π
φ1−φ2

0.1570

π/2 π 3π/2 2π
φ1−φ2

th FIG. 3 (color online). Wigner function for two coupled oscil-

 1: lators with V ¼ 3 1, showing Wc (black, dashed line) and Wq

d, (red, solid line) as a function of the phase difference.

he

(a)

Classical 𝒟

limit

with

 𝒟 2 ¼

0:05 1.

(b)

Quantum 𝒟

limit

with

𝒟𝒟
 2 ¼ 10 1.

D=0

D≠0
3

Wqð 1 À  2Þ ¼ 2  þ 9  22 cos 2ð 1 À  2Þ þ O  32 :

1)

(13)
Recap: Reactive vs. dissipative coupling

which has peaks at  1 À  2 ¼ 0,  . When  2 ! 1,   ¼

ng

ð23

j0ih0j

þ

1 3

j1ih1jÞ

 

ð23 j0ih0j

þ

1 3

j1ih1jÞ,

i.e.,

a

product

of

mixReedastcatteisv, eand(dthierepecatk)s cdiosaupppelairn. Wg hen  2 is large but

Dissipative coupling

ohﬁj0sing2ciϱhiit·lehel2,ar=0,ttojbhr−uaesnt edinpxo[ejiaHts2tk0ws,sihhwϱ0ee]h2nmej+.tnehrTetg∑ hhyeejuosodc,κsucpc1euhiplaltyaso[etooanoarj†stlf]tyfroϱ-adjcc0ic+atiuigopaκonnyn2dbaslteja1t[twieea.lesej2emj]n2ϱeitnhotesr

ϱ· = ∑ (κ1 [aj†]ϱ + κ2 [aj2]ϱ) + D [a1 + a2] ϱ
j

comInHmﬁno=intetVon(suatm1u†dabye2rl+arogafe2†acsyo1su)tpelmeds

vdP oscillators.—It is of globally coupled vdP

P(x1, x2) = ⟨x1, x2 ϱ x2, x2⟩

2π

classical

quantum

(a)

(b)

0.5

0.161

0.4

0.16 0.3

0.2

0.159

W(φ1−φ2) W(φ1−φ2)

0.1

0.158

2π

0 0 π/2 π 3π/2 2π
φ1−φ2

0.1570

π/2 π 3π/2 2π
φ1−φ2

th FIG. 3 (color online). Wigner function for two coupled oscil-

 1: lators with V ¼ 3 1, showing Wc (black, dashed line) and Wq

d, (red, solid line) as a function of the phase difference.

he

(a)

Classical 𝒟

limit

with

 𝒟 2 ¼

0:05 1.

(b)

Quantum 𝒟

limit

with

𝒟𝒟
 2 ¼ 10 1.

D=0

D≠0
4

Towards experimental implementation in trapped ions

Single van der Pol oscillator

ϱ· = − i [Hblue + H2red, ϱ] + γ [σ−] ϱ

Hblue

=

i

η 2

Ωblueσ+a†

+

h

.

c

.

H2red

=

−

η2 4

Ω2redσ+a2

+

h.c.

Effective model
Adiabatically eliminate the two-level system

σ−

=

(−

η γ

Ωbluea†

−

i

η2 γ

Ω2reda2)

σz

ϱ·HO = = γ

[−

η γ

Ωbluea†

−

i

η2 2γ

Ω2red2a2]

ϱHO

𝒟

𝒟

5

Comparison of different descriptions

Full model

Effective model Individual dissipators

Effective model Collective dissipators

6

Comparison of different descriptions

Full model

Effective model Individual dissipators

Effective model Collective dissipators

Might be ok for single van der Pol oscillator but becomes a problem for two oscillators just a single collective dissipator
7

Solution: Trotterization of applying blue and red sidebands

Full model Fast Trotterization

Effective model Individual dissipators

Full model Slow Trotterization

8

Mutual synchronization within a single trapped ion

No synchronization

Synchronization via red sideband
H1red + H2red

H1blue

H12red

H2blue

H22red time

H1blue

H12red

H2blue

H22red time

9

Experimental parameters

ϱ· = − i [Hblue + H2redHred, ϱ] + γ [σ−] ϱ

Hblue

=

i

η 2

Ωblueσ+a†

+

h

.

c

.

H2red

=

−

η2 4

Ω2redσ+a

2

+

h.

c

.

H red

=

i

η 2

Ωredσ+a

+

h

.

c

.

η
Ωblue Ωred Ω2red γ
TTrotter tend

0.1 2π × 10kHz 2π × 20kHz 2π × 300kHz
100kHz 0.2ms 5ms

𝒟

10

Measurements via displacements - scheme I

H1red + H2red H1blue H12red H2blue H22red

Read
D1(τ) D2(τ, φ) out

Running the experiment

Measurement time

(repeating N times)

D1(τ) = exp [−iηΩ/2σx(a1 + a1†)τ] = exp [σx(α1a1 − α*a1†)]

α1

=

−

i

η 2

Ωτ

D2(τ,

φ)

=

exp

[−iηΩ/2σx(a2e−iφ

+

a2†e+iφ)τ]

=

exp

[σx(α2a2

−

α2*a2†)]

α2

=

−

i

η 2

Ωτe−iφ

By changing the phase φ we can control the relative angle of displacement
between the two vdP oscillators. In the anti-phase synchronized case we
expect to find a peak at φ = π

11

Measurements via displacements - scheme I

No synchronization

anti-phase synchronization

If there’s no synchronization it doesn’t matter how we choose φ we always get the same plot. If they are anti-phase synchronized we see a peak at φ = π.
Interestingly this is all imprinted on the population of the TLS
12

Measurements via displacements - scheme II

H1red + H2red
H1blue H12red H2blue H22red
Running the experiment (repeating N times)

Read
U1(τ) U2(τ, φ) out Measurement time

U1(τ) = exp [−i(H1red + H1blue)τ] = D1(τ) U2(τ, φ) = exp [−i(H2red + H2blue(φ))τ]

H2blue(φ)

=

i

η 2

Ωblue

(σ+a2†eiφ

−

σ−a2e−iφ)

I think this scheme is closer to the one Hartmut suggested on the board.
However, I don’t see how U2(τ, φ) also implements a displacement
operations (but maybe it’s only a phase shift?)

13

Measurements via displacements - scheme II

No synchronization

anti-phase synchronization

In this scheme we also see a clear phase dependency in the anti-phase synchronized case. However the overall peak is not so pronounced (which I assume has something to do with the fact, that it doesn’t really implement a
proper displacement of the second oscillator)
14

Controlling the phase of synchronization (using scheme I)

H1red + H2red(φsync) H1blue H12red H2blue H22red

D1(τ) D2(τ, φ) Rea

time

H1red

=

i

η 2

Ωred

(σ+a1

−

σ−a1†)

H2red(φ)

=

i

η 2

Ωred

(σ+a1e −iφsync

−

σ−a1†e ) +iφsync

anti-phase in-phase

There’s a little decrease when
changingφsync which I don’t
understand at the moment (in particular it doesn’t exist classically,
see last slide)

φsync
15

Controlling the phase of synchronization (using scheme I)

anti-phase

in-phase

anti-phase in-phase

φsync

φφssyynncc == 00..55ππ

16

Controlling the phase of synchronization (using scheme I)

anti-phase

in-phase

mean field (only qualitatively)

φsync = 0.5π
The change in the shapes is consistent with mean-field, yet
differs slightly from a circle
17

Controlling the phase of synchronization (using scheme I)

We can understand this from the mean field equations of the effective oscillator model

Master equation
ϱ· = ∑ (κ1 [aj†]ϱ + κ2 [aj2]ϱ) + D
j

[a1 + a2e ] iφsync ϱ

corresponding mean field

α· 1

=

κ1α1

−

κ2 | α1 |2 α1

−

D 2

(α1

+

e iφsyncα2)

α· 2

=

κ1α2

−

κ2 | α2 |2 α2

−

D 2

(e α −iφsync 1

+

α2)

If α1 = e α i(π+φsync) 2 the last term on the
r.h.s becomes zero, leaving us with decoupled equations which determine
the amplitude, i.e., α1/2 = κ1/κ2

Thus by changing φsync we can control the relative phase of synchronization.
However, in the classical case the amplitude does not depend on the phase — in the quantum case it apparently does, yet only slightly

𝒟𝒟 𝒟

18

Including initial phases

In the simulation, I draw random initial phases for every Hamiltonian and then start the experimental run time

H1blue(φ1)

H1red2(φ2)

H2blue(φ3)

Draw a set of random initial phasesφ1 − φ5

H2red2(φ4)

H1red(φ5) +
H2red(φ5 + φsync)

time

I put a random phase also in the displacements, however, we need to
realize σx and control the phase Δϕ,
the we should be able to read out the plots on the next slides

D1(τ, φ)

D2(τ, φ + Δϕ)

Read out

Measurement

time

D1(τ) = exp [−iηΩ/2σx(a1e−iφ + a1†e+iφ)τ] D2(τ, φ) = exp [−iηΩ/2σx(a2e−i(φ+Δϕ) + a2†e+i(φ+Δϕ))τ]

19

Including all sorts of phases

this is population of the qubit for different displacements α controlled via the time of
applying the displacement operators,

φsync = 0 (anti-phase)

φsync = 0.5π

φsync = π (in-phase)

20

Comparing the results from measuring the qubit with the Wigner function

Here I compare with W(Δϕ) which I calculate from the density matrix directly. The top line is the result from reading out the qubit, the bottom line the result from W(Δϕ). We can control the phase of synchronization, i.e. the peak moves according to φsync

φsync = 0.0

φsync = π/4

φsync = π/2

φsync = π

21

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:47.785Z
- **Text Length:** 9169 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
