# PDF Document: (2024 Feb Chris) Notes on realizing synchronized quantum van der Pol (vdP) oscillators with a single trapped ion.pdf

**File Path:** (2024 Feb Chris) Notes on realizing synchronized quantum van der Pol (vdP) oscillators with a single trapped ion.pdf

**Processed Date:** 2026-02-10T18:16:59.411Z

**File Size:** 298.92 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 357

**Title:** (Notes - 2024 Feb Chris) Notes on realizing synchronized quantum van der Pol (vdP) oscillators with a single trapped ion

**Collection:** Lattice > QSync

---

## Extracted Text Content

Notes on realizing synchronized quantum van der Pol (vdP) oscillators with a single trapped ion
Christopher W. W¨achtler (Dated: February 3, 2024)

I. INSIGHTS FROM CLASSICAL NONLINEAR DYNAMICS

As a recap, let’s start with a single vdP (or Stuart-Landau) oscillator given by

α˙ = −iωα + κ1α − κ2 |α|2 α,

(1)

where α is a complex amplitude, ω the oscillation frequency, and κ1 and κ2 denote respectively the negative and nonlinear damping responsible for establishing a limit cycle in phase space. The solution is given by α(t) = R exp [−i (ωt + ϕ)]
with R = κ1/κ2. The phase ϕ remains a free and therefore can be synchronized either to an external drive or with respect to another oscillator. We will discuss the latter situation in the following.
There are two possibilities to couple two nonlinear oscillators: Either they are coupled directly corresponding in the quantum case to some exchange interaction (also referred to as reactive coupling), or they are coupled dissipatively. Let us ﬁrst discuss the case of direct coupling. Then, the equations of motion for two oscillators with the same frequency ω take the form

α˙ = −iωα + κ1α − κ2 |α|2 α − iV β, β˙ = −iωβ + κ1β − κ2 |β|2 β − iV α,

(2)

where V denotes the coupling strength. The linear model (κ2 ≡ 0) has the eigenvalues λ± = κ1 − i(ω ± V ) with eigenvectors (1, ±1) . This indicates that for κ1 > 0 there exists two solutions, one in-phase synchronized (+) and one anti-phase synchronized (−).
In the case of dissipative coupling, the equations of motion are slightly modiﬁed:

α˙

=

−iωα

+

κ1α

−

κ2

|α|2

α

−

D 2

(α

+

β)

,

β˙

=

−iωβ

+

κ1β

−

κ2

|β|2

β

−

D 2

(α

+

β) ,

(3)

where D denotes the dissipative coupling strength. We can analyze again the linear model by setting κ2 ≡ 0, which results in the eigenvalue λ1 = κ1 −iω with corresponding eigenstate (1, −1) and λ2 = −D+κ1 −iω with corresponding eigenstate (1, 1) . If D > κ1, then there exists only a single oscillatory solution where the two oscillators have a phase shift of π, i.e., the oscillators are anti-phase synchronized.

II. RECAP OF INTERACTING VDP OSCILLATORS (WITHOUT TWO LEVEL SYSTEM)

Before going into detail about how to realize interacting vdP oscillators in a single trapped ion, let us brieﬂy summarize some results for the simpliﬁed model, i.e., only considering the harmonic oscillators. Most of the results can also be found in Ref. [1].
A single quantum vdP is given by

˙ = −i ωa†a, + κ1D a† + κ2D a2 ≡ L ,

(4)

where D [O]

=O

O†

−

1 2

O†O,

. The steady state (L ss = 0) is diagonal in the fock basis. Moreover, in the limit

of κ2 → ∞ only the lowest two states are occupied, i.e., lim ss = diag (2/3, 1/3).
κ2 →∞

Similar to the classical case, we can couple two of such quantum vdP either reactively or dissipatively. Let us start

with the latter, which is also the case discussed in Ref. [1]. The dissipative coupling is described via a dissipator

DD [a + b] with coupling constant D. This corresponds to anti-synchronization, i.e., a phase shift of π. If one

chooses instead DD [a − b] , one would expect in-phase synchronization. The full master equation then reads

˙ = −i [H, ] + κ1 D a† + D b† + κ2 D a2 + D b2 + DD [a + b] ≡ LAB ,

(5)

2
FIG. 1. Dissipatively coupled quantum vdP oscillators. Left: P (x1, x2) indicating the anti-phase synchronization. Middle: Real part of the density matrix ss. The cut-oﬀ is |6 , i.e., state 7 = |1 ⊗ |0 and so on. It shows that only the lowest two states of each oscillator are populated. Right: Wigner function after tracing out the other oscillator (they look identical for both). Parameters: κ1 = 0.01, κ2 = 100κ1, ∆ = ωA − ωB = 0.4κ1, D = 100κ1.

FIG. 2. Probability distribution P (x1, x2) for the case D = 0, i.e., no coupling between the oscillators. Parameters: κ1 = 0.01, κ2 = 100κ1, ∆ = ωA − ωB = 0.4κ1.

where H = ωAa†a + ωBb†b.
Following Ref. [1], we use here the probability density P (x1, x2) = x1, x2| |x1, x2 to investigate synchronization. We will see later why it makes sense for dissipative coupling but not reactive coupling. In the left panel of Fig. 1 we show P (x1, x2) at steady state. The alignment of the probability density with the x1 = −x2 line indicates the antiphase synchronization as expected. In the middle we show the real part of the density matrix ss. In the simulation we only included the fock states |0-
 to |6 for each oscillator, i.e., 1 in the ﬁgure corresponds to the state |0 ⊗ |1 and 7 corresponds to the state |1 ⊗ |0 , and so on. Importantly, we see the whole density matrix is essentially conﬁned to the subspace spanned by zero and one excitation. Lastly, in the right ﬁgure we show the Wigner function after tracing out one of the oscillators. Compared to a single vdP oscillator, the donut shape disappeared and is replaced by a Gaussian distribution. However, note that the oscillators are syn-
chronized. For D = 0, i.e., uncoupled vdP oscillators, the donut shape of the Wigner function is restored. However, P (x1, x2) shows a square like shape as shown in Fig. 2.
Let us now investigate what happens for reactive coupling. In that case, the equation of motion is given by

˙ = −i [H, ] + κ1 D a† + D b† + κ2 D a2 + D b2 ,

(6)

where H = ωAa†a + ωBb†b + V (a†b + b†a). Compared to the dissipative coupling where only in-phase or anti-phase synchronization exists (for suﬃciently large coupling and depending on the speciﬁc form of the dissipator) for reactive coupling both solutions co-exists. This was already studied in Ref. [2], where the authors showed that the Wigner function W (ϕA −ϕB) has two peaks, one at 0 and one at π. Therefore, we expect that P (x1, x2) is the sum of in-phase and anti-phase synchronization, i.e., -
a probability distribution that is aligned along the x1 = x2 and simultaneously along the x1 = −x2 line. In Fig. 3 we show P (x1, x2) for V = 20κ1. The probability does not show any distinct features due to the previously discussed coexistence of in-phase and anti-phase synchronization. However, note that it is still distinct from two uncoupled vdP oscillators.

3

FIG. 3. Probability distribution P (x1, x2) for reactive coupling with V = 20κ1. Parameters: κ1 = 0.01, κ2 = 100κ1, ∆ = ωA − ωB = 0.4κ1.

III. TRAPPED ION REALIZATION

After we have understood the basics of synchronized dynamics of two (quantum) vdP oscillators, we can now discuss the implementation in a single trapped ion. To this end, we consider driving the blue and double-red sidebands of each motional mode independently. We will label the two motional modes aj with j = 1, 2. Additionally, there is spontaneous decay of the (eﬀective) two-level system (TLS) of the trapped ion. The full master equation then reads in the rotated frame and after the rotating wav-
e approximation





2

˙ = −i 

Hjblue + Hjred2 ,  + γD [σ−] ,

(7)

j=1

where

Hjblue

=

i

η 2

Ωblue

σ+

a†j

+

h.c.

and

Hj2red

=

−

η2 4

Ωred2

σ+

a2j

.

(8)

Note that for now we do not consider any detuning between the motional modes. The results are shown in Fig. 4: The left panel shows the probability density P (x1, x2), which exhibits some nontrivial structures that might indicate some level of synchronization. At the moment, however, it is rather unclear. Moreover, the Wigner function of one of the oscillators, shown in the right panel, still exhibits a clear donut shape reminiscent of unsynchronized vdP oscillators. Note also that more than the ﬁ-
rst two states of each oscillator are occupied; cf. middle panel of Fig. 4 (I am including ten Fock states per oscillator in the simulation).

FIG. 4. Results of solely driving the single blue and double red sidebands of each motional mode. Left: Probability density P (x1, x2), which has some nontrivial structure, yet hardly reﬂects synchronization. Middle: Real part of the density matrix
AB = TrTLS { ss}. The cut-oﬀ is 10 levels, i.e., |0 to |9 . Right: Wigner function of a single oscillator, i.e., after tracing the TLS and one oscillator. Parameters: η = 0.1, γ = 0.1, Ωblue = 2π × 0.01, Ωred2 = 2π × 0.3.
It seems to me that the two oscillators are dissipatively coupled via the TLS. However, the interaction is rather weak and, moreover, cannot really be tuned independently, i.e., without aﬀecting the eﬀective dissipation rates of the vdP oscillators. As discussed previously, a direct coupling between the motional modes will lead to the coexistence of in-phase and anti-phase synchronization, which might be hard to measure. However, in Ref. [1], the authors discuss an optomechanical implementation of-
 dissipatively coupled vdP oscillators. In particular, they detail how to realize a

4

FIG. 5. Results with additional single red sideband driving: Left: P (x1, x2) indicating now a clear signature of anti-phase synchronization. Middle: Real part of the density matrix of the two oscillators. Right: Wigner function of a single oscillator. Parameters: η = 0.1, γ = 0.1, Ωblue = 2π × 0.01, Ωred2 = 2π × 0.3, Ωred = 2π × 0.02.

FIG. 6. If we include a detuning (∆ = 0.4Ωblue) between the oscillators the probability density resemblance more the one of two uncoupled vdP oscillators; see Fig. 2. Parameters: η = 0.1, γ = 0.1, Ωblue = 2π × 0.01, Ωred2 = 2π × 0.3, Ωred = 2π × 0.02.

dissipator of the form D[a1 + a2] via an additional cavity, i.e., XX-coupling between the vdP oscillator and a driven dissipative cavity, which then can be eliminated adiabatically. Therefore, including a single red sideband drive that
introduces the counter-rotating terms, i.e., σ+aj + h.c. might be enough to implement an eﬀective dissipator of the form D[a1 + a2] and achieve anti-phase synchronization.
In the following, we consider the master equation





2

˙ = −i 

Hjblue + Hjred2 + Hjred ,  + γD [σ−] ,

(9)

j=1

where

Hjred

=

η i 2 Ωredσ+aj

+

h.c..

(10)

The results are shown in Fig. 5: The left panel shows the probability distribution P (x1, x2), which now exhibits close resemblance to the left panel of Fig. 1. However, it does also exhibit two spatially separated peaks along the x1 = −x2 line, which needs further investigation. The middle ﬁgure shows the real part of the density matrix of the two oscillators. Here, we observe that higher Fock states are still populated. I presume we would like to got as close to the ground state as possible to r-
eally claim quantum eﬀects. Maybe including the AC-Stark shifts helps to really push the oscillators towards the ground state? The right panel shows the Wigner function of a single oscillator, which also still shows some form of limit cycle. If we include some detuning between the two motional modes, P (x1, x2) is no longer aligned with the x1 = −x2 line but approximates P (x1, x2) of two uncoupled vdP oscillators; cf. Fig. 2.
In order to fully understand what is going on, I would like to derive an eﬀective model of the two oscillators alone. This will also help to determine which parameters we can tune to increase or decrease synchronization.

[1] S. Walter, A. Nunnenkamp, and C. Bruder, Ann. Phys. 527, 131 (2015). [2] T. E. Lee and H. R. Sadeghpour, Phys. Rev. Lett. 111, 234101 (2013).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:59.411Z
- **Text Length:** 11117 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
