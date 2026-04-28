# PDF Document: Jaynes-Cummings Model.pdf

**File Path:** Jaynes-Cummings Model.pdf

**Processed Date:** 2026-02-10T18:17:30.272Z

**File Size:** 200.74 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 187

**Collection:** Courses > Quantum Mechanics

---

## Extracted Text Content

PHYS502 PROJECT

Jaynes-Cummings Model
Adan Azem

Abstract- This paper presents Jaynes-Cummings model, the simplest model that describes light-matter interaction. Light-matter interaction is an overlap between condensed matter physics and quantum optics. Thus, this model consists of atomic, electromagnetic field and interaction Hamiltonians. Besides, it describes briefly the experimental realization of light-matter interaction in the strong coupling regime.
I. Introduction
Jaynes-Cummings model was developed in 1963 by Edwin Jaynes and Fred Cummings, to describe the quantum mechanical behavior of an atom interacting with a single mode radiation of a quantized electromagnetic field. The two systems exchange a quanta; the atom absorbs a photon and moves to the excited state or emits a photon and moves down to the ground state. The uniqueness of this model is that it relies on the quantum treatment of the electromagnetic field, therefore the electromagnetic field must -
be quantized in a defined volume .1,2
Here, we introduce the atomic, electromagnetic field and interaction Hamiltonian and discuss a few special cases. As well as its experimental realization and the strong coupling concept.
II. Atom Hamiltonian
In this model, the atom is approximated as a two-level system. It is described by a two-dimensional state space spanned by the two energy eigenstates: ground state |𝑔⟩ and excited state |𝑒⟩, with energy eigenvalues 𝐸𝑔 and 𝐸𝑒 respectively as shown in figure 1.

The transition frequency of the atom is determined by the atom internal structure and is fixed for a given material; it is given as:

𝛺 𝜔01 = ħ

(2)

Where 𝛺 = 𝐸𝑒 − 𝐸𝑔 denotes the energy gap. By shifting the zero energy to 𝐸𝑒 + 𝐸𝑔, the atomic Hamiltonian can be written as:

𝐻̂𝑎𝑡𝑜𝑚

=

𝛺 2

𝜎𝑧

(3)

II. Electromagnetic Field Hamiltonian2

Classically, solving Maxwell equations with Coulomb Gauge (∇ ∙ 𝐴 = 0) would give the wave equation that can be solved as plane waves given by the following vector potential:

𝑨𝑘,𝛼 = 𝜖𝑘,𝛼𝐴𝑘,𝛼𝑒𝑖(𝑘𝑟−𝜔𝑘𝑡)

(4)

Where 𝜖𝑘,𝛼 denotes the polarization vector of the radiation field with wavevector 𝑘 and polarization 𝛼, 𝐴𝑘,𝛼 complex amplitude and 𝜔𝑘 frequency of the radiation field.

The total energy of radiation field inside a box with periodic boundary conditions and volume 𝑉 = 𝐿3 is:

𝐻 = ∑ 𝜀0𝑉𝜔𝑘2[𝐴𝑘,𝛼𝐴𝑘,𝛼∗ + 𝐴𝑘,𝛼∗𝐴𝑘,𝛼]

(5)

𝑘,𝛼

It can be simplified as a sum of energies in each individual radiation mode described by (𝑘, 𝛼):

𝐻 = ∑ 𝐸𝑘,𝛼

(6)

𝑘,𝛼

Where:

𝐸𝑘,𝛼 = 𝜀0𝑉𝜔𝑘2[𝐴𝑘,𝛼𝐴𝑘,𝛼∗ + 𝐴𝑘,𝛼∗𝐴𝑘,𝛼]

(7)

Figure 1: two-level atom

The Hamiltonian of the two-level atom in the energy representation is:

𝐻𝑎𝑡𝑜𝑚 = 𝐸𝑔|𝑔⟩⟨𝑔| + 𝐸𝑒|𝑒⟩⟨𝑒| = (𝐸𝑔 + 𝐸𝑒)𝐼 (1)

1

1

= 2 (𝐸𝑔 + 𝐸𝑔)𝐼 + 2 (𝐸𝑔 − 𝐸𝑔)𝜎𝑧

Where 𝐼 is the unitary matrix and 𝜎𝑧 = |𝑒⟩⟨𝑒| − |𝑔⟩⟨𝑔| denotes the Hermitian Pauli operator.

This classical electromagnetic field can be quantized by associating a quantum harmonic oscillator to each radiation mode (𝑘, 𝛼). Under these terms, the photon is defined as one elementary excitation of the quantum harmonic oscillator associated with a specific radiation mode. Therefore, photons can be created and annihilated through the ladder operators:

𝑎̂𝑘|𝑛𝑘⟩ = √𝑛𝑘|𝑛𝑘 − 1⟩

(8)

1

𝑎̂𝑘†|𝑛𝑘⟩ = √𝑛𝑘 + 1|𝑛𝑘 + 1⟩

(9)

The number states |𝑛𝑘⟩ are known also as Fock states with precisely defined photon numbers. Figure 2 shows
a quantum harmonic oscillator with Fock states.

Figure 2: quantum harmonic oscillator

Consequently, the total energy of a quantified radiation field is the sum of all the quantum harmonic oscillators associated with radiation modes 𝑘:

𝐻̂𝑓𝑖𝑒𝑙𝑑 = ∑ 𝐻̂𝑘

(10)

𝑘

Where:

𝐻̂𝑘

=

1 2

ħ𝜔𝑘 (𝑎̂𝑘 𝑎̂ † 𝑘

+

𝑎̂ † 𝑘 𝑎̂𝑘 )

(11)

For simplicity, the polarization component 𝛼 is taken as constant.

Comparing the classical and quantum total energy of the radiation field gives an analogy between the classical complex amplitude and its conjugate to the creation and anhelation operators:

ħ

(12)

𝐴𝑘

→

√ 2𝜀0𝑉𝜔𝑘

𝑎̂𝑘

𝐴𝑘 ∗

→

ħ √
2𝜀0𝑉𝜔𝑘

𝑎̂†𝑘

(13)

Using the commutation relation of [𝑎̂𝑘, 𝑎̂†𝑘] = 1, we can rewrite the general electromagnetic field Hamiltonian:

𝐻̂𝑓𝑖𝑒𝑙𝑑

=

∑ ħ𝜔𝑘

(𝑎̂ † 𝑘 𝑎̂𝑘

+

1 2)

(14)

𝑘

III. Interaction Hamiltonian

The light-matter interaction occurs between the quantized electric field operator of a single mode radiation and the dipole moment of a single atom and is given as:

𝐻̂𝑖𝑛𝑡 = −𝑑̂ ∙ 𝐸̂(𝑡)

(15)

Where 𝐸̂(𝑡) is the electric field operator and 𝑑̂ is the dipole moment operator.

The dipole moment can be expressed in terms of the atomic ladder operators:

𝑑̂ = 𝐼𝑑̂𝐼 = ∑|𝑖⟩⟨𝑖| 𝑑̂|𝑗⟩⟨𝑗| = 𝑑10(𝜎+ + 𝜎−) (16)
𝑖,𝑗

Where 𝜎+ and 𝜎− denotes the atomic ladder operators:

𝜎+ = |𝑒⟩⟨𝑔|

(17)

𝜎− = |𝑒⟩⟨𝑔|

(18)

Using the previous description of the quantized electromagnetic field, the electric field operator (in Schrodinger picture) can be written as:

𝐸̂ (𝑟)

=

∑
𝑘

𝜖𝑘

√ ħ𝜔𝑘 2𝜀0𝑉

(𝑎† 𝑘 𝑒 𝑖𝑘𝑟

+

𝑎𝑘 𝑒 −𝑖𝑘𝑟 )

(19)

Therefore, the interaction Hamiltonian becomes:

𝐻̂𝑖𝑛𝑡 = ∑ 𝑔𝑘ħ(𝑎†𝑘𝑒𝑖𝑘𝑟 + 𝑎𝑘𝑒−𝑖𝑘𝑟)(𝜎+ + 𝜎−)

(20)

𝑘

Where 𝑔𝑘 denotes the atom-light coupling constant, it depends on the mode frequency, modal volume and
dipole moment:

𝑔𝑘 = √2𝜔𝜀0𝑘𝑉 𝑑10𝜖𝑘

(21)

A simplified presentation of the interaction Hamiltonian at 𝑟 = 0:

𝐻̂𝑖𝑛𝑡 = ∑ 𝑔𝑘ħ(𝑎†𝑘 + 𝑎𝑘)(𝜎+ + 𝜎−)

(22)

𝑘

Due to energy conservation inside the cavity, the only terms that survive are the combination of creation and annihilation operators:

𝐻̂𝑖𝑛𝑡 = ∑ 𝑔𝑘ħ(𝑎𝑘𝜎+ + 𝑎†𝑘𝜎−)

(23)

𝑘

The first term describes the annihilation of a photon (absorption) and creation of an atomic excitation while the second term describes the creation of a photon (emission) and annihilation of an atomic excitation.

Consequently, the electromagnetic field in mode 𝑘 and the atom cam be described by joined states:

|𝑛𝑘, 𝑖⟩ = |𝑛𝑘⟩⨂|𝑖⟩, 𝑖 = 0,1

(24)

The transition rates of creation and annihilation of a photon (which equivalent to annihilation and creation of an atomic excitation) can be expressed in terms of an absorption matrix element:

⟨𝑛𝑘 − 1,0|𝐻̂𝑖𝑛𝑡|𝑛𝑘, 1⟩ = 𝑔𝑘ħ√𝑛𝑘

(25)

2

And an emission matrix element:

⟨𝑛𝑘 + 1,1|𝐻̂𝑖𝑛𝑡|𝑛𝑘, 0⟩ = 𝑔𝑘ħ√𝑛𝑘 + 1

(26)

It should be noted that the transition rates are stronger if
there are already photons in the same mode 𝑘, i.e. 𝑛𝑘 > 1. This is known as Bosonic enhancement of the
absorption and emission transition rates.

However, thanks to the quantum treatment of the
electrometric field, even if there are no photons in mode
𝑘, i.e. 𝑛𝑘 = 0 the mode is in the vacuum state, there is still light-matter interaction!

The factor 1 in the emission matrix element (presented
in red) represents the spontaneous emission of the atom that is triggered by the vacuum fluctuations of the radiation field. While 𝑛𝑘 in the same term represents the normal stimulated emission.

IV. Jaynes-Cummings Hamiltonian

The Jaynes-Cummings Hamiltonian of a single mode radiation that interacts with a single atom is given as:

𝐻̂𝑖𝑛𝑡

=

ħ𝜔𝑎†𝑎

+

𝛺 2

𝜎𝑧

+

𝑔ħ(𝑎𝜎+

+

𝑎†𝜎−)

(27)

Let us switch to interaction picture to solve for time evolution:

|𝛹𝑖𝑛(𝑡)⟩ = 𝑒ħ𝑖 𝐻̂0𝑡|𝛹(𝑡)⟩

(28)

Where 𝐻̂0 is the free Hamiltonian (𝐻̂𝑖𝑛𝑡 without the interaction term). The interaction Hamiltonian becomes:

𝐻̂𝑖𝑖𝑛𝑛𝑡(𝑡) = 𝑒ħ𝑖 𝐻̂0𝑡𝐻̂𝑖𝑛𝑡𝑒−ħ𝑖 𝐻̂0𝑡

(29)

= 𝑔ħ(𝑎†𝜎−𝑒𝑖∆𝑡 + 𝑎𝜎+𝑒−𝑖∆𝑡)

Where ∆= 𝜔 − 𝜔01 known as detuning.

The time evolution is given by Schrodinger equation:

𝑖ħ

𝜕 𝜕𝑡

|𝛹𝑖𝑛(𝑡)⟩

=

𝐻̂𝑖𝑖𝑛𝑛𝑡(𝑡)|𝛹𝑖𝑛(𝑡)⟩

(30)

For an arbitrary state of this system:

|𝛹𝑖𝑛(𝑡)⟩ = ∑(𝑐1,𝑛(𝑡)|𝑛, 1⟩ + 𝑐0,𝑛(𝑡)|𝑛, 0⟩) (31)
𝑛
We need to solve for 𝑐1,𝑛(𝑡) and 𝑐0,𝑛(𝑡), given initialize condition of the light-atom system.

The states |𝑛𝑘 + 1,1⟩ and |𝑛𝑘, 0⟩ are coupled, figure 3 shows the relation between these coupled states. Their
coupling can be written in terms of differential equation:

𝑐1̇ ,𝑛+1(𝑡) = −𝑖𝑔√𝑛 + 1𝑒𝑖𝛥𝑡𝑐0,𝑛(𝑡)

(32)

𝑐0̇ ,𝑛(𝑡) = −𝑖𝑔√𝑛 + 1𝑒−𝑖𝛥𝑡𝑐1,𝑛+1(𝑡)

(33)

Figure 3: coupled states in an atom-light system

Special cases:

1. Initial conditions: n+1 photons, atom in ground state with resonant interaction 𝛥 = 0:

𝑐1,𝑛+1(0) = 1

(34)

The solution is:

𝑐1,𝑛+1(𝑡) = cos(𝑔√𝑛 + 1𝑡)

(35)

𝑐0,𝑛(𝑡) = −𝑖 sin(𝑔√𝑛 + 1𝑡)

(36)

Therefore, the probability for n+1 photons and atom in ground state is given as:

𝑃1,𝑛+1(𝑡)

=

|𝑐1,𝑛+1(𝑡)|2

=

1 2

(1

+

cos(𝛺𝑛𝑡))

(37)

Where 𝛺𝑛 = 2𝑔√𝑛 + 1 called Rabi oscillation frequency; the atom oscillates between the ground and
excited state. It is quantized.

If the detuning was not zero (𝛥 ≠ 0), the Rabi oscillation frequency becomes:

𝛺𝑛𝛥 = √𝛥2 + 𝛺𝑛2 = √𝛥2 + 4𝑔2(𝑛 + 1)

(38)

2. Initial conditions: 0 photons, atom in excited state with resonant interaction 𝛥 = 0:

𝑐0,0(0) = 1

(39)

Therefore, the probability for 0 photon (vacuum state of the radiation field) and atom in excited state is given as:

𝑃0,0(𝑡)

=

|𝑐1,𝑛+1(𝑡)|2

=

1 2

(1

+

cos(𝛺0𝑡))

(40)

Where 𝛺0 = 2𝑔 called vacuum Rabi oscillation; the atom oscillates between the ground and excited state
continuously in vacuum.

Figure 4 shows the probability 𝑃0,0(𝑡) f an ideal atom, the atom oscillates between the ground and excited states every 2𝜋.
𝛺0

3

Figure 4: vacuum Rabi oscillations of an ideal two-level system
V. Experimental Realization
A single mode radiation can be achieved experimentally through an optical cavity that can be described as two reflecting mirrors. The atom can be trapped inside the cavity to achieve light-matter interaction. Figure 5 shows schematically a two-level atom trapped inside a cavity with modal volume 𝑉0. The cavity can be described by three parameters: 𝑔, 𝜅 and 𝛾 that are atom-cavity coupling, photon decay rate from the cavity and nonresonant decay rate 3.

Figure 5: atom-light interaction inside an optical cavity

When the atomic transition frequency coincides with the one of the resonant modes of the cavity, the interaction between the atom and the radiation field will be strong. The resonance condition is achieved by tuning the cavity such that the frequency of the cavity mode matches with that of the atomic transition.

The interaction is said to be in the strong coupling regime if:

𝑔 ≫ (𝜅, 𝛾)

(41)

where (𝜅, 𝛾) represents the larger of 𝜅 and 𝛾. The strong coupling regime is known as cavity quantum electrodynamics (cQED).

The interaction is said to be in weak coupling regime if:

𝑔 ≪ (𝜅, 𝛾)

(42)

The cavity photon decay rate 𝜅 is governed by the properties of the cavity that determine its quality factor 𝑄:

𝜅 = 𝜔/𝑄

(43)

Thus, high 𝑄 values mean relatively small photon decay rate.

The non-resonant decay rate 𝛾 is determined by several factors. The atom could emit a photon of the resonant frequency in a direction that does not coincide with cavity mode or it could decay to other levels, emitting a photon of a different frequency that is not in resonance with the cavity or the electron could decay without emission of a photon. Both parameters 𝛾 and 𝜅 determines the cavity losses. These losses result in measuring damped vacuum Rabi oscillations in experiments, unlike figure-
 4 which represents an ideal two-level system.

In the strong coupling regime, the atom-photon interaction is faster than the irreversible process due to loss of photons out of the cavity mode, making the emission of the photon a reversible process in which the photon is re-absorbed by the atom before it is lost from the cavity.

The cavity can be characterized as well by the cooperativity parameter; the ratio of coherent coupling o incoherent coupling (losses):

𝑔2

(44)

𝐶 = 𝜅𝛾

For a strong coupling, 𝐶 should be as large as possible. That would allow us to observe, experimentally, decaying Rabi oscillations with a decay constant that depends on the cavity losses.

Experimentally, the strong coupling can be achieved by designing a cavity with a small modal volume and low losses, i.e. cavity with small 𝑉 and high 𝑄 . This was demonstrated experimentally in different setups: superconducting mirrors for microwaves photons4, optical Fabry-Perot cavities with cold atoms5, on-chip microwave resonators with superconducting qubits that act as an artificial atom6 and quantum dot in a photonic crystal cavity 7.

cQED field enabled studying the basic physics pf lightmatter interaction and paved the way to realization of qubits (two-level systems) in different physical setups for quantum computing applications. In 2012, Serge Haroche and David Wineland won Nobel prize for physics for their work on controlling quantum system. cQED is a thriving field and best is yet to come.

4

References 1 A. Wallraff, D.I. Schuster, A. Blais, L. Frunzio, R.-S. Huang, J. Majer, S. Kumar, S.M. Girvin, and R.J. Schoelkopf, 431, 162 (2004). 2 J.M. Raimond, M. Brune, and S. Haroche, 73, 565 (2001). 3 T. Aoki, B. Dayan, E. Wilcut, W.P. Bowen, A.S. Parkins, T.J. Kippenberg, K.J. Vahala, and H.J. Kimble, 443, 671 (2006). 4 M. Fox, Quantum Optics (Oxford University Press, Incorporated, Oxford, 2006). 5 E.. Jaynes and F.. Cummings, 51, 89 (1963). 6 B.W. Shore and P.L. Knight, 40, 1195 (1993). 7 -
R. Ohta, Y. Ota, M. Nomura, N. Kumagai, S. Ishida, S. Iwamoto, and Y. Arakawa, 98, 173104 (2011).
5

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:30.272Z
- **Text Length:** 13558 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
