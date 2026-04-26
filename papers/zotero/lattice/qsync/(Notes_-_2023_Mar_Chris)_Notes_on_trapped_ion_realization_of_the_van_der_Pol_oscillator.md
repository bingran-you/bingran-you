# PDF Document: (2023 Mar Chris) Notes on trapped ion realization of the van der Pol oscillator.pdf

**File Path:** (2023 Mar Chris) Notes on trapped ion realization of the van der Pol oscillator.pdf

**Processed Date:** 2026-02-10T18:14:03.235Z

**File Size:** 556.94 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 358

**Title:** (Notes - 2023 Mar Chris) Notes on trapped ion realization of the van der Pol oscillator

**Collection:** Lattice > QSync

---

## Extracted Text Content

Notes on trapped ion realization of the van der Pol oscillator
Christopher W. W¨achtler (Dated: March 20, 2023)

I. TRAPPED ION WITH DRIVEN MOTIONAL MODE

Let us assume we drive the motional mode of the ion with frequency ωL and amplitude ΩL such that the Hamiltonian of the motional mode is given by

Hosc = ωma†a + ΩL aeiωLt + a†e−iωLt .

(1)

The Hamiltonian of the two level systems (TLS) is simply given by

HTLS = 2 ωaσz.

(2)

Furthermore, we drive the interaction between TLS and oscillator via another laser with frequency ωI. The interaction Hamiltonian is then given by

HI = ΩIσx cos (ωIt − kz) ,

(3)

where we set the phase φ = 0. Before going to a rotated frame, let us expand the interaction Hamiltonian, i.e.

HI = 2 ΩIσx eiωIte−ikz + e−iωIteikz

≈ 2 ΩIσx eiωIt

1 − iη(a + a†) − 1 η2(a + a†)2 2

+ e−iωIt

1 + iη(a + a†) − 1 η2(a + a†)2 2

.

(4)

Under a rotation U = exp(iHrott/ ) with Hrot = ωLa†a + ωaσz/2, the operators transform as follows

a → e−iωLta

a† → eiωLta†

σ+ → eiωatσ+

σ− → e−iωatσ−.

(5)

Then, the Hamiltonian in the rotated frame H˜ takes on the form

H˜ =U HU † + U˙ U †

= (ωm − ωL)a†a + ΩL(a + a†) + 2 ΩI eiωatσ+ + e−iωatσ− ×

(6)

eiωIt 1 − iη ae−iωLt + a†eiωLt − 1 η2 ae−iωLt + a†eiωLt 2 + h.c. . 2

The Hamiltonian of the oscillator in the rotated frame is therefore given by

H˜osc = ∆a†a + ΩL(a + a†),

(7)

where ∆ = ωm − ωL. If we choose ωI = ωa + ωL (note the subscript L) we drive the ﬁrst blue sideband transition with Hamiltonian

H˜blue = −i

η 2 ΩI

σ−a + σ+a†

,

(8)

and if we choose ωI = ωa − 2ωL we drive the second red sideband transition with Hamiltonian

H˜red2 = −

η2 4 ΩI

σ−(a†)2 + σ+a2

.

(9)

Let us now put everything together: The starting Hamiltonian with driving the motional mode as well as the blue and double red side band is given by

H=

ωma†a+ ΩL

aeiωLt + a†e−iωLt + 2 ωaσz +

ωa 2

σz

+

Ωblueσx cos (ωblue − kz)+

Ωred2σx cos (ωred2 − kz) ,

(10)

2

FIG. 1. Parameters: ∆ = 2π · 10 kHz, ΩL = 2π · 5 kHz, Ωblue = 2π · 50 kHz, Ωred2 = 2π · 300 kHz, η = 0.1, and γ = 105 s−1.

where we choose again φ = 0 for convenience. In the rotated frame and tuning ωblue = ωa + ωL and ωred = ωa − 2ωL, the resulting Hamiltonian is given by

H˜ =

∆a†a +

ΩL(a + a†) − i

η 2 Ωblue

σ−a + σ+a†

−

η2 4 Ωred2

σ−(a†)2 + σ+a2 .

(11)

As far as I see, we cannot simply transform away the term proportional to ΩL. For the simulation, however, this is

not a problem as long as it stays relatively small. Parameters which I found to be good are for example ∆ = 2π·10 kHz,

ΩL = 2π · 5 kHz, Ωblue = 2π · 50 kHz, Ωred2 = 2π · 300 kHz, η = 0.1, and γ = 105 s−1. Then the Liouvillian gap Γ,

i.e.,

the

smallest

relaxation

rate

is

given

by

Γ

≈

103

s−1

=

1 ms

.

For

these

parameters

the

average

occupation

number

at steady state is about a†a ≈ 14. Furthermore, we obtain a beautiful donut of the Wigner function, see Fig. 1

II. COUPLED VAN DER POL OSCILLATORS

Before we analyze the synchronization behavior of two van der Pol oscillators realized via trapped ions, let us ﬁrst investigate the original model of two directly coupled van der Pol oscillators in order to get some intuition. The Hamiltonian of the system is given by

2
Hosc =
j=1

∆j a†j aj + ΩL a†j + aj

+ V a†1a2 + a†2a1 .

(12)

Furthermore, each oscillator has its own two dissipators realizing incoherent one-photon gain and two-photon loss, such that the full Lindblad master equation is given by

i

2

˙(t) = − [Hosc, (t)] +

κ1D a†j

(t) + κ2D a2j (t) ,

(13)

j=1

where D[O]

=

O

O†

−

1 2

O†O,

. In the following we choose κ1 = ηΩblue/2 and κ2 = η2Ωred2/4 such that the

parameters are to some extent comparable to the full dynamics including the two level systems in the next section.

Furthermore, we parametrize the oscillator frequencies ∆1/2 = ∆0 ∓ ∆, such that ∆ = ∆2 − ∆1 is the detuning between the oscillators. We choose parameters similar to the ones discussed in the previous section. However, we

choose Ωblue even smaller for now as it signiﬁcantly reduces the numerical overhead. In particular, we choose the following parameters: ∆0 = 2π · 10 kHz, ΩL = 2π · 5 kHz, Ωblue = 2π · 10 kHz, Ωred2 = 2π · 300 kHz, η = 0.1.

3

0.10

0.05
0.10

S12

0.05
0.00
0

-0.05

-0.05

-0.4 -0.2 0.0 0.2 0.4

Δ [2π MHz]

FIG. 2. Left: Density plot indicating an Arnold tongue. Right: Cut through V = 0.06[2π MHz]. Other parameters: ∆0 = 2π · 10 kHz, ΩL = 2π · 5 kHz, Ωblue = 2π · 10 kHz, Ωred2 = 2π · 300 kHz, η = 0.1.

0.0075 0.0050 0.0025 0 -0.0025 -0.0050 -0.0075

FIG. 3. Density plot of the Wigner function W (φ2 − φ1) − 1/2π as a function of the frequency detuning ∆. Other parameters: ∆0 = 2π · 10 kHz, ΩL = 2π · 5 kHz, Ωblue = 2π · 10 kHz, Ωred2 = 2π · 300 kHz, η = 0.1.

A. Measure of quantum synchronization

A naive choice in order to measure quantum synchronization of two van der Pol oscillators is given by a correlation function proportional to a†1a2 + a†2a1 ∝ cos δφ , where δφ = φ2 − φ1 denotes the phase diﬀerence between the
two oscillators. However, the problem is that whenever synchronization (δφ = 0) is as likely as anti-synchronization (δφ = ±π) – which is usually the case for two van der Pol oscillators – this measure will be zero. One way to overcome this issue is to use a more complicated correlator. In the following we use [Let me know whether this would be a quantity we could even measure somehow!]

S12 =

a†1a†1a2a2 + a†2a†2a1a1 .

2 a†1a†1a1a1 a†2a†2a2a2

(14)

In the left panel of Fig. 2 we show a density plot of S12 as a function of the frequency detuning ∆ and the coupling strength V . We ﬁrst observe an Arnold tongue typical for synchronization, i.e., the stronger the coupling is the larger the detuning can be while still being synchronized. However, we also observe negative values of S12, which become even more apparent in the right panel of Fig. 2, where we show a cut through the left panel for V = 0.06[2π MHz].
In order to understand the nature of the negative values of S12 we show in Fig. 3 the Wigner function W (φ2 − φ1) − 1/2π as a function of the frequency detuning ∆. While for small detunings (while S12 is positive) the Wigner function has its maxima at δφ = 0, ±π, this suddenly changes as the detuning becomes too large (and S12 becomes negative). Then the maxima of the Wigner function are located at phase diﬀerences δφ ± π/2. [I need to investigate more why exactly this happens, but it’s quite inte-
resting.]

S12

4
0.06 0.04 0.02 0.00 -0.02 -0.04
-0.10 -0.05 0.00 0.05 0.10 Δ [2π MHz]
FIG. 4. Synchronization measure S12 as a function of the detuning ∆ for a ﬁxed coupling V = 2π · 5 kHz. Other parameters: ∆0 = 2π · 10 kHz, ΩL = 2π · 5 kHz, Ωblue = 2π · 10 kHz, Ωred2 = 2π · 300 kHz, η = 0.1, γ = 10−5s−1

III. COUPLED TRAPPED IONS

Let us now investigate the full dynamics including the two level systems. The full system Hamiltonian is now given by

2
Hions = Hosc +

η −i 2 Ωblue

σj+a†j + σj−aj

+

η2 4 Ωred2

σj+a2j + σj−(a†j )2

.

j=1

(15)

Furthermore, each two level system is subject to dissipation such that the full Lindblad master equation is given by

i

2

˙(t) = − [Hions, (t)] + γD[σj] (t).

(16)

j=1

We use the parameters as speciﬁed before, in particular Ωblue remains signiﬁcantly smaller than in Sec. I. However, γ = 10−5s−1.
In Fig. 4 we show the synchronization measure S12 deﬁned in Eq. (14) for a ﬁxed coupling of V = 2π ·5 kHz between the two oscillators as a function of the detuning ∆. Additionally to the structure we have observed before, i.e., the
sign change of S12 as the detuning increases, we also see that zero detuning lowers in fact the synchronization [I don’t understand any of this at the moment.]

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:03.235Z
- **Text Length:** 7683 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
