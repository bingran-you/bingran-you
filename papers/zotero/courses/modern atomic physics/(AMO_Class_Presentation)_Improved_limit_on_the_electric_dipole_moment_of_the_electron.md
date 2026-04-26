# PDF Document: ACME I Experiment.pdf

**File Path:** ACME I Experiment.pdf

**Processed Date:** 2026-02-10T18:15:08.098Z

**File Size:** 14105.95 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1319

**Title:** (AMO Class Presentation) Improved limit on the electric dipole moment of the electron

**Collection:** Courses > Modern Atomic Physics

---

## Extracted Text Content

arXiv:1612.09318v1 [physics.atom-ph] 29 Dec 2016

Methods, Analysis, and the Treatment of Systematic Errors for the Electron Electric Dipole Moment Search in Thorium Monoxide
ACME Collaboration: J Baron1, W C Campbell2, D DeMille3, J M Doyle1, G Gabrielse1, Y V Gurevich4, P W Hess5, N R Hutzler1, E Kirilov6, I Kozyryev1, B R O’Leary3, C D Panda1, M F Parsons1, B Spaun7, A C Vutha8, A D West3, E P West1
1Department of Physics, Harvard University, Cambridge, MA 02138, USA, 2Department of Physics and Astronomy, University of California, Los Angeles, CA 90095, USA, 3Department of Physics, Yale University, New Haven, CT 06511, USA, 4 ZAH, Landessternwarte K¨onigstuhl 12, D-69117 Heidelberg, Germany, 5Joint Quantum Institute, University of Maryland College Park, MD 20742, USA, 6University of Innsbruck, Technikerstrasse 25, A-6020 Innsbruck, Austria, 7Joint Institute for Lab Astrophysics, 440 Universit-
y Ave, Boulder, CO 80302, USA, 8Department of Physics, University of Toronto, Toronto, ON M5S 1A7, Canada.
E-mail: awest@physics.harvard.edu
Abstract. We recently set a new limit on the electric dipole moment of the electron (eEDM) (J. Baron et al., ACME collaboration, Science 343 (2014), 269–272), which represented an order-of-magnitude improvement on the previous limit and placed more stringent constraints on many CP -violating extensions to the Standard Model. In this paper we discuss the measurement in detail. The experimental method and associated apparatus are described, together with the techniques used to isolate the eEDM signa-
l. In particular, we detail the way experimental switches were used to suppress eﬀects that can mimic the signal of interest. The methods used to search for systematic errors, and models explaining observed systematic errors, are also described. We brieﬂy discuss possible improvements to the experiment.
Submitted to: NJP

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

2

1. Introduction

Symmetries play a vital role in physics and experimental tests of symmetries have revealed insights into

physical theory. Perhaps the most famous early example is the experiment of Michelson and Morley [1],

now understood as an early demonstration of Lorentz invariance. Similarly, observed violations of parity

(P ) symmetry [2] and charge-parity (CP ) symmetry [3] have informed and motivated understanding of the

weak and strong forces [4, 5]. The recent discovery of the Higgs boson [6] is a conﬁrmation of a predicted

spontaneously broken gauge symmetry [7], and the LHC continues to probe physics at high energies, looking

for evidence of physics beyond the Standard Model (SM). On a complementary front, precision measurements

of charge-parity-time (CP T ) invariance and Lorentz invariance using low-energy techniques continue to test

these fundamental symmetries [8–16].

Precision measurements in atomic and molecular systems are well suited to testing fundamental physics,

and searches for EDMs of fundamental particles have been at the forefront of such tests [17, 18]. Measurements

of the EDMs of the electron, neutron [19] and atomic species such as mercury [20], are complementary tests

of beyond-SM physics and of fundamental symmetries [21]. As discussed in section 2.1, an EDM of a

¡fundamental particle can only exist if time-reversal (T) symmetry is broken, which is equivalent to CP
violation for CP T -invariant models [22]. For many theories, intrinsic CP violation is predicted to manifest as eEDMs at an experimentally accessible level [21, 23, 24]. Consequently, discovering an eEDM, or further constraining its value, can inform our understanding of particle physics at high energy and help to shed light on outstanding issues such as the baryon asymmetry problem [25, 26]. The current best limit on the eEDM was reported by ACME in 2014 [27]:†

de ≤ 9.3 × 10−29 e · cm (90% conf. level).

(1)

Many extensions to the SM predict eEDM values many orders of magnitude higher than the SM prediction of < 10−38 e·cm [17, 21, 30], meaning measurement of an eEDM at current experimental sensitivity would be a signature of new physics. Supersymmetry is an example of an extension to the SM that predicts a large, potentially measurable eEDM. The current eEDM limit constrains the parameter space associated with supersymmetry such that it is often considered unnatural [31, 32].
In most models, the eEDM arises as a radiative correction (Feynman loop diagram) due to CP -violating interactions with new particles. An example of such an interaction within generic supersymmetric theory is shown in ﬁgure 1. The CP violation is associated with the presence of non-trivial complex phases in the

Figure 1: Example of a supersymmetric 1-loop contribution to the eEDM. The symbols eL and eR represent the left and right helicities of the electron, e˜ a selectron, γ˜ a photino and γ a photon. This generic diagram illustrates how a CP -violating phase (represented by the + symbol) can be produced in a straightforward manner by SM extensions. Note that a detailed discussion of associated high-energy theory is beyond the scope of this paper.

theory. For a given CP -violating phase φCP , one can make a generic estimate of the mass scale Λ of new physics being probed, according to the following formula for an n-loop process [24]:

Λ2

=

e

me de

α 4π

n
sin φCP

(2)

† Note that the limit we report here uses an updated value for Eeﬀ = 78 GV/cm which is obtained by averaging the results from references [28, 29].

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

3

where e is the electron charge, me the electron mass, α is the ﬁne structure constant and φCP is a CP violating phase. Assuming that sin(φCP ) ∼ 1 [21], we ﬁnd that our most recent result interrogates energy scales for one-loop processes of around 10 TeV. Similar analysis shows that our result was sensitive to twoloop eﬀects at around the 1 TeV mass scale. While any such estimates are inherently model-dependent, we see that using an apparatus that ﬁts in a room we have been able to probe fundament-
al physics at energy scales usually associated with the largest particle accelerators.

2. Atom and Molecule eEDM Experiments

2.1. Theory
The eEDM, de, is a vector quantity that is aligned along (or against) the axis of the electron’s spin, s [17]. By convention, we write de = 2des, such that a measurement of any Cartesian component of de yields a value of ±de. (Here and throughout, we set = 1.) For an electron moving non-relativistically, the eEDM interacts with an electric ﬁeld E via the Hamiltonian

HEDM = −de · E ∝ s · E.†

(3)

Under time reversal, T , s reverses direction, but E is unchanged. Similarly, under space inversion, P , s is unchanged, but E reverses direction. Hence HEDM is odd under P and T .
To measure the eEDM, one looks for an energy shift due to the interaction in equation 3. Since 1964, every improvement in experimental sensitivity to de has been obtained by measuring this shift for electrons bound in a neutral atom or molecule [33–42]. This might seem surprising at ﬁrst glance, since Schiﬀ’s theorem states that there can be no net electric ﬁeld acting on a non-relativistic point particle bound in a neutral system [43]. However, in 1958 Salpeter showed that, when relativistic eﬀec-
ts are taken into account, a neutral species can experience an energy shift due to an eEDM when an external electric ﬁeld Eext is applied [44]. In 1965 Sandards showed, strikingly, that the size of the resulting energy shifts can be much larger than deEext [45].
More detailed explanations of this relativistic enhancement can be found elsewhere, e.g. [17, 46, 47], but we summarise the basic principle here. Taking into account the relativistic length contraction of the eEDM for a moving electron, its interaction with a total electric ﬁeld E (the sum of an external, applied ﬁeld and an intra-atomic/molecular ﬁeld) takes the form

HEreDl M

=

−de

·

E

+

1

γ +

γ

β

·

deβ

·

E,

(4)

where β = v/c is the dimensionless velocity and γ is the Lorentz factor [46]. The ﬁrst term in this expression is the non-relativistic EDM interaction, whose expectation value vanishes by Schiﬀ’s theorem. The second, relativistic term can result in a nonzero net interaction when the electron’s velocity and the electric ﬁeld are non-uniform in space (as, for example, when the electron travels near a charged nucleus in an atom or molecule), and when the atom or molecule is polarised by an external e-
lectric ﬁeld. This interaction can be
expressed in terms of an ‘eﬀective electric ﬁeld’, Eeﬀ , deﬁned in analogy to equation 3 such that

HEreDl M ≡ − de · Eeﬀ .

(5)

Detailed calculations show that this ‘eﬀective electric ﬁeld’ within an atom or molecule can be signiﬁcantly larger in magnitude than the applied external ﬁeld. The size of Eeﬀ is maximal for systems where a valence electron has signiﬁcant wavefunction amplitude near a highly-charged nucleus. In such species with a nucleus of atomic number Z, Eeﬀ scales approximately as [17]

Eeﬀ ∝ PE Z3R(Z),

(6)

where PE ∈ [0, 1) is the degree of electric polarisation of the state and R is a relativistic factor that is roughly constant for Z α−1, but grows quickly as Z approaches α−1 [17, 47–49]. For fully polarised systems with Z ≈ 90 (as with our molecule of choice, ThO), the eﬀective electric ﬁeld can reach values as large

† A detailed discussion of the sign convention for this Hamiltonian term is provided in section Appendix A.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

4

as Eeﬀ ≈ 100 GV/cm. In practice, the maximum polarisation attainable with atoms, even in the highest laboratory static electric ﬁelds (∼ 100 kV/cm), is PE ∼ 10−3. Nevertheless, this can lead to values of Eeﬀ nearly 1,000 times larger than the applied laboratory ﬁeld (e.g. Eeﬀ ∼ 70 MV/cm in Tl atoms [41]). Using this kind of enhancement, the limit on de was reduced by six orders of magnitude by the ﬁrst atom-based eEDM measurement [33]. Further improvement is aﬀorded by working with polar molecules-
, which are much
more polarisable than atoms due to having much more closely spaced levels of opposite parity (associated
with their rotational motion). In practice, polarisation PE ∼ 1 is achievable with molecules [47–49]. In ThO, the eﬀective electric ﬁeld is Eeﬀ ≈ 78 GV/cm [28, 29].
To measure the eEDM, the electron spin is prepared in a state oriented perpendicular to Eeﬀ , i.e. in a superposition of states parallel and antiparallel to Eeﬀ . After an interaction time τ , the eEDM energy shift in equation 3 produces a relative phase accumulation 2φEDM = −2deEeﬀ τ between these states; this is equivalent to a precession of the spin orientation about Eeﬀ by an angle 2φEDM.
For a shot-noise-limited measurement, the uncertainty in the eEDM, δde, is given by

√ −1

δde = 2τ Eeﬀ N ,

(7)

where N is the number of measurements. The large values of Eeﬀ accessible in many molecules have motivated several recent eEDM searches [42, 50, 51]. This and other advantages associated with the molecule ThO are discussed in the following section.

2.2. ThO Molecule
ThO has a number of properties that make it well-suited to an eEDM measurement, both by enhancing statistical sensitivity and by suppressing systematic errors. We performed our measurements in the H electronic state of ThO, which has two valence electrons in a (σδ)3∆1 state. Such states were ﬁrst proposed for use in an eEDM measurement by Meyer et al. in 2006 [52]. The σ orbital valence electron wavefunction has a large amplitude near the heavy Th nucleus, facilitating the large Eeﬀ required for a-
 large eEDM sensitivity, as described in section 2.1. The H state of ThO has one of the largest calculated values of Eeﬀ ≈ 77.6 GV/cm [28, 29]. We note that the value of Eeﬀ in our experiment with ThO is more than 5 times larger than that attained in experiments using YbF, which set the previous eEDM limit [53–55], and over 1,000 times larger than that in experiments using Tl atoms [41].
All 3∆1 states have very small magnetic moments [56] since the δ3/2 orbital valence electron serves to nearly cancel the magnetic moment of the σ1/2 orbital. The actual magnetic moment of H deviates from zero primarily because of mixing with other states [57]. We express ThO molecule states using the basis |Y, J, M, Ω , where Y is the electronic state, J is the total angular momentum, M is the projection of J onto the laboratory zˆ-axis, and Ω is the projection of the electronic angular momentum o-
nto the internuclear axis, nˆ, which points from the lighter nucleus to the heavier nucleus. We used the |H, J = 1, Ω = 1 rotational manifold for our measurement, for which the magnetic moment is µ1 = g1µBM , where g1 = −0.00440(5) is the associated g-factor [57, 58] and µB is the Bohr magneton. This small g-factor, generic to all molecules with this structure, ensures that the H state is particularly insensitive to spurious magnetic ﬁelds.
States with nonzero Ω have closely spaced pairs of opposite-parity levels with identical values of J called ‘Ω-doublets’, which are split by energy ∆Ω due to the Coriolis eﬀect in the rotating molecule [59–61]. The application of an electric ﬁeld E mixes the M = 0 opposite-parity levels via the Stark interaction, −D · E, where D is the electric dipole operator, and from here on E is the applied (laboratory) ﬁeld. In the limit
| D · E| ∆Ω, the molecule is fully polarised, the internuclear axis is nearly aligned or anti-aligned with the applied electric ﬁeld, and the alignment orientation is described by quantum number N˜ ≡ Eˆ · nˆ = ±1. This structure is shown for the H state of ThO in ﬁgure 2.
The use of molecules with Ω-doublet structure for an eEDM measurement, ﬁrst explored in [48, 63] in the context of experiments using PbO, is of great importance to our experiment. The |H, J = 1 manifold has an Ω-doublet splitting ∆Ω,1 ≈ 2π × 360 kHz† [64] and an electric dipole moment D1 ≡ | H, J = 1, M = ±1, Ω|D · zˆ|H, J = 1, M = ±1, Ω | ≈ 2π × 1 MHz/(V/cm) [65]; this permits full (> 99 %) polarisation of the state in small applied electric ﬁelds, E 10 V/cm, allowing us to take full advantage of
† Throughout the paper, we give numerical values of energies (with = 1) in terms of angular frequencies by using the notation 2π × f , where f is a linear frequency in units of Hz.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

O

Eeﬀ

e

Th

N˜ = −1

D1 |E |
− +

O

Eeﬀ

e

Th

g1µBBz

deEeﬀ

∆Ω,1

5
zˆ, E, B

N˜ = +1

Th

Th

Eeﬀ

e

O
M = −1

M =0

Eeﬀ

e

O
M = +1

Figure 2: Energy level structure of the |H 3∆1, J = 1, M, Ω state manifold in ThO in the presence of a polarising√electric ﬁeld. In the absence of applied ﬁelds, opposite-parity states |± ≡ (|Ω = −1 ± |Ω = +1 ) / 2 are separated by energy ∆Ω,1 ≈ 2π × 360 kHz. The M = +1 (M = −1) state in |+ is nearly fully mixed with the M = +1 (M = −1) state in |− by an electric ﬁeld E 10 V/cm. The fully polarised states are denoted by |N = ±1 . For E 10 V/cm, the associated Stark shift is linear and given by −N˜-
 D1|E|, where D1 ≈ 2π × 1 MHz/(V/cm) (black arrow/lines) is the expectation value of the molecular electric dipole moment in these states [58]. Additionally, a magnetic ﬁeld B causes a Zeeman shift ≈ − M g1µBBz, with g1µB ≈ −2π × 6 kHz/G (red arrows/lines) [57, 62]. A nonzero eEDM would result in an additional energy shift ≈ −M N˜ deEeﬀ (blue arrows/lines) where E˜ = −1 (+1) when the applied E ﬁeld is (is not) reversed. The orientation of Eeﬀ (green arrows), the spin of the electron in the σ orbit-
al (black arrow next to molecule), the external electric ﬁeld E, and the external magnetic ﬁeld B are shown relative to the laboratory zˆ direction which is oriented upwards on the page. Diagram not to scale.

the huge Eeﬀ in ThO. The Ω-doublet structure is also useful in rejecting systematic errors since it allows for spectroscopic reversal of Eeﬀ ∝ −nˆ by addressing diﬀerent N˜ states without reversing the applied electric ﬁeld [66]. This is discussed in greater detail in section 5.4.
The H state in ThO is metastable with a lifetime ≈1.8 ms [67], limiting our measurement time to τ ≈ 1 ms. We note that this is comparable to previous beam-based eEDM measurements where the atomic/molecular states used had signiﬁcantly longer lifetimes [42, 67, 68].
As with many other species, ThO proved nicely compatible with a new approach to creating molecular beams, the hydrodynamically enhanced cryogenic buﬀer gas beam [69–71]. This method provides a cold, high-ﬂux and low-divergence beam [72] yielding a large number of molecules in the few lowest-lying quantum states. The molecule beam’s forward velocity (≈180 m/s) was also lower than a typical supersonic beam, which helped minimise the apparatus length for a given coherence time. For more details on th-
e beam source, see section 3.2.2.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

6

3. ACME Experiment

3.1. Overview of Measurement Scheme
3.1.1. Basic Measurement Scheme We performed a spin precession measurement, resembling previous beam-based eEDM experiments [40– 42], on 232Th16O molecules in a pulsed molecular beam generated by a cryogenic buﬀer gas beam source. Figure 4 shows a simpliﬁed schematic of the measurement. The molecules ﬂy at velocity v ≈ 200 m/s into a magnetically shielded region with nominally uniform and parallel electric E and magnetic B ﬁelds. Molecule population is transfered from |X1Σ+, J = 1, M = ±1 in the e-
lectronic ground state to the metastable |H, J = 1, M = ±1, Ω = N˜ E˜M ≡ |±, N˜ state manifold (in the |±, N˜ nomenclature we use ± to refer to M = ±1) by optical pumping through the short-lived |A3Π0+ , J = 0, M = 0 state with a 943 nm laser. This results in an even distribution of population in an incoherent mixture of the four |±, N˜ states in H.† Figure 3 shows the electronic states of ThO relevant to the eEDM measurement.

|A, J = 0

690 nm Fluorescence
Signal

|C, J = 1
1090 nm Preparation/Readout

943 nm Optical Pumping

|H, J = 1

|X, J = 1 |Ω| = 0

|Ω| = 1

Figure 3: Levels and transitions in ThO used in our measurement of the eEDM, based on [67, 73, 74]. Solid arrows indicate transitions we address with lasers, wavy arrows indicate spontaneous decays of interest. For more details on how these transitions were used, see the main text.

In the absence of any experimental imperfections, we describe our system in terms of coordinate axes +zˆ

along +E (for a speciﬁed sign of applied ﬁeld that we denote as positive, pointing approximately east to west

in the lab) and +xˆ along the direction of the molecular beam (which travels approximately south to north)

such that +yˆ is approximately aligned with gravity (cf. ﬁgure 4). Note that when we reverse the direction

of the electric ﬁeld, by construction the laboratory coordinate system does not change and the orientation of the electric ﬁeld can be described by E˜ ≡ sgn(zˆ · E) = ±1. Analogously, we reverse the direction of the

magnetic ﬁeld between two B˜ ≡ sgn(zˆ · B) = ±1 states. Since the directions of the ﬁelds are encoded by E˜

and B˜, we deﬁne the magnitudes of the ﬁelds simply as Bz ≡ |Bz| and E ≡ |E|.

A superposition of the between states |±, N˜ and

M = ±1 |C1Π1, J

sublevels is = 1, M =

prepared by 0 (|Ω = +1

o−ptP˜ic|Ωall=y p−u1mp)/in√g2o≡n

the |C,

transition P˜ , where

at P˜

1090 nm = ±1 is

the excited state parity‡, with laser light linearly polarised in the xy plane. The resulting state corresponds

to having the total angular momentum of the molecule aligned in the xy plane. Because the σ electron’s

spin is aligned with J, by the Wigner-Eckart theorem this is equivalent to aligning the spin [75], and we

use this shorthand from here on. The state preparation laser frequency is tuned to spectroscopically select the molecule alignment N˜ , while the nearly degenerate M = ±1 states remain unresolved. The excited

state C, which decays at a rate γC ≈ 2π × 0.3 MHz, decays primarily (≈75 % [65]) to the ground state so that one superposition of the two |±, N˜ states is optically pumped out of H and the remaining orthogonal

superposition, which is ‘dark’ to the preparation laser beam, is the prepared state. The linear polarisation

† A glossary of symbols used throughout this paper is provided in section Appendix B. ‡ In this paper we follow the convention given in [60].

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

7

of the state preparation laser beam, ˆprep, sets the relative coupling of each of the two |±, N˜ states to |C, P˜ and determines the spin alignment angle of the remaining state in the laboratory frame. The bright superposition |B(ˆprep) is pumped away, and the orthogonal dark superposition |D(ˆprep) remains.
For the moment, we consider the speciﬁc case P˜ = +1 and ˆprep = xˆ, (the general case will be discussed in section 3.1.2). In this case, the prepared state

|ψ(t = 0), N˜ = √1 |+, N˜ − |−, N˜

(8)

2

has the electron spin aligned along the yˆ axis. As the molecules traverse the spin precession region of length

L = 22 cm (which takes a time τ ≈ 1 ms), the electric and magnetic ﬁelds exert torques on the electric and

magnetic dipole moments, causing the spin to precess in the xy plane by angle 2φ; this corresponds to the

state

|ψ(t = τ ), N˜ = √1 e−iφ|+, N˜ − e+iφ|−, N˜ ,

(9)

2

where φ is given approximately by the sum of the Zeeman and eEDM contributions to the spin precession

angles,

φ = −(B˜g1µBBz + N˜ E˜deEeﬀ )τ.

(10)

The sign of the eEDM term, N˜ E˜, arises from the relative orientation between Eeﬀ and the electron spin as illustrated in ﬁgure 2.
At the end of the spin precession region, we measure φ by optically pumping on the same H → C transition with the linearly polarised state readout laser beam. The polarisation alternates rapidly between two orthogonal linear polarisations Xˆ and Yˆ , such that each molecule is subject to excitation by both polarisations as it ﬂies through the detection region, and we record the modulated ﬂuorescence signals FX and FY from the decay of C to the ground state at 690 nm. This procedure amounts to a pr-
ojective measurement of the spin onto Xˆ and Yˆ , which are deﬁned such that Xˆ is at an angle θ with respect to xˆ in the xy plane. To determine φ we compute the asymmetry,

A

≡

FX FX

− +

FY FY

∝ cos [2(φ − θ)].

(11)

We set Bz and θ such that φ − θ ≈ (π/4)(2n + 1) for integer n, so that the asymmetry is linearly proportional to small changes in φ and maximally sensitive to the eEDM. A simpliﬁed schematic of the experimental procedure just described is shown in ﬁgure 4.

By repeating the measurement of φ after having reversed any one of the signs N˜ , E˜ or B˜, we may isolate the eEDM phase from the Zeeman phase. In practice, we repeat the phase measurement under all 23 (N˜ , E˜, B˜) experiment states to reduce the sensitivity of the eEDM measurement to other spurious phases, and we extract the phase φN E = −deEeﬀ τ = φEDM. Here, we have introduced the notation φu, discussed in detail in the next section, which we use throughout this document to refer to the compo-
nent of φ that is odd under the set of switches listed in the superscript u, and implicitly even under those which are not listed (see section 3.1.2 and equation 23 for a rigorous deﬁnition). A component which is even under all switches is considered to be ‘non-reversing’ and is given an ‘nr’ superscript.

3.1.2. Measurement Scheme in Detail
To fully describe the method by which we extracted de from the data in section 4, and to describe the systematic error models in section 5, we must introduce some additional formalism to describe the spin
precession measurement to generalize the simple case described in the previous section. We work in the regime in which the Stark shift in H is approximately linear, EStark ≈ −N˜ D1E, which
holds when the Stark interaction energy is large compared to the Ω-doublet energy splitting ∆Ω,1 but small compared to the rotational energy scale, described by the H-state rotational constant BH ≈ 2π× 9.8 GHz, i.e. ∆Ω,1 D1E BH . In this regime, the molecular alignment is approximately related to Ω by N˜ = E˜M Ω; this relation is assumed throughout this document. This is a good approximation, but it is notable that due to the Stark interaction at ﬁrst order in perturbation theory, each |M, N˜ stat-
e is a superposition of all four |H, J, M, Ω states with J = 1, 2 and Ω = ±1. This eﬀect is discussed further in sections 5.2.6 and 5.6.2.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

8

1. Optical Pumping

|X, J = 1

|H, J = 1

2. State Preparation

3. Spin Precession

√1 2

(|M

=

−1

+ |M = +1 )

√1 2

eiφ |M = −1

+ e−iφ |M = +1

4. State Readout

J alignment:

2φ

Laser beam direction:

Laser beam polarisation:

xˆ yˆ

xˆ

θ Xˆ , Yˆ

A0
943 nm
H X1

C

1

1

H

1090 nm 1

H, N˜

2φ/τ

M = −1 M = +1

C

1

H

1090 nm 1

E, B
x y

Figure 4: Simpliﬁed schematic of the measurement scheme; numbers next to energy levels label J. 1. Molecules in the |X, J = 1 state are optically pumped via the A state into |H, J = 1 by a retroﬂected (and oﬀset in x) laser beam (blue arrows into/out of page), polarised along xˆ and yˆ (blue arrows). 2. Molecules from one of the N˜ states are then prepared in a superposition of M sublevels (M = −1, 0, +1 from left to right) by a linearly polarised laser beam (red) addressing the H → C transition. -
This aligns
the molecule’s angular momentum, J, which in turn aligns the spin of the eEDM-sensitive σ electron, which is on average aligned with J. 3. The angular momentum (and hence electron spin) then precesses due to the electric and magnetic ﬁelds present (into the page) by an angle φ. This precession is dominated by the magnetic interaction but also includes a term linear in de (see equation 10). 4. The spin state is projected onto orthogonal superpositions of the M sublevels by laser beams polarised alo-
ng Xˆ , Yˆ (red arrows). The resulting ﬂuorescence is determined by the population in each superposition state and hence the precession angle φ.

Let us consider the preparation of a spin-aligned state again. Starting from an incoherent mixture of the four |±, N˜ states, we perform optical pumping on the electric dipole transition between |±, N˜ and |C, P˜ , for a speciﬁc N˜ , with laser light of polarisation ˆprep that is nominally linear in the xy plane. This step depletes the bright superposition state (see e.g. [76])

|B(ˆprep, N˜ , P˜) = (ˆ∗+1 · ˆ∗prep) |+, N˜ − P˜(ˆ∗−1 · ˆ∗prep) |−, N˜ ,

(12)

√ where ˆ±1 = ∓ (xˆ ± iyˆ) / 2 are unit vectors for circular polarisation. The corresponding dark state (with which the laser does not interact) is the orthogonal superposition

|D(ˆprep, N˜ , P˜) = (ˆ∗+1 · ˆprep) |+, N˜ + P˜(ˆ∗−1 · ˆprep) |−, N˜ .

(13)

This dark state serves as the initial state, |ψ(0), N˜ = |D(ˆprep, N˜ , P˜ = +1) , for the spin-precession experiment, where we ﬁxed the state preparation laser frequency to address the excited state with parity P˜ = +1. The state preparation laser polarisation can be parameterised as

ˆprep = −e−iθprep cos Θprepˆ+1 + e+iθprep sin Θprepˆ−1,

(14)

where Θprep ≈ π/4 deﬁnes the ellipticity Stokes parameter (S3/I)prep = cos 2Θprep ≈ 0, and θprep deﬁnes the linear polarisation angle with respect to xˆ in the xy plane. From here on, we refer to the ellipticity Stokes parameter as S ≡ S3/I. There is a one-to-one correspondence between the dark state superposition and the projection of the laser polarisation ˆprep onto the xy plane. If the laser polarisation does not lie entirely in the xy plane, equations 12 and 13 are still appropriate, but requ-
ire normalization. Note that if the laser is linearly polarised, switching the excited state parity P˜ has the same eﬀect on the dark state as rotating the
laser polarisation angle by π/2.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

9

Following the initial state preparation, the molecules traverse the spin-precession region with their forward velocity nominally along xˆ. In this region there are nominally uniform and parallel electric (E)
and magnetic (B) ﬁelds, which produce energy shifts given by

E(M, N˜ ) = −|M |D1EN˜ − M g1µBBzB˜ − M ηµBEBzN˜ B˜ − M deEeﬀ N˜ E˜,

(15)

where D1 is the electric dipole moment of |H, J = 1 . Here η = 0.79(1) nm/V accounts for the E-dependent magnetic moment diﬀerence between the two sets of N˜ levels in |H, J = 1 [57], as described in section 4.2.2. The energy shift terms that depend on the sign of M contribute to the spin precession angle φ, which is given

by:

φ

=

1 2

L
(E(M
0

=

+1, N˜ )

−

E(M

=

−1,

N˜

))

dx v

.

(16)

This phase is dominated by the magnetic (Zeeman) interaction. The Stark shift, proportional to |M |, does not contribute. The state then evolves to:

|ψ(τ ), N˜ = e−iφ|+, N˜ +, N˜ | + e+iφ|−, N˜ −, N˜ | |ψ(0), N˜ ,

(17)

(recall |ψ(0), N˜ = |D(ˆprep, N˜ , P˜ = +1) per equation 13) and molecules enter a detection region where the state is read out by optically pumping again between the |H, J = 1 and |C, J = 1 manifolds. This optical
pumping is performed alternately by two laser beams with nominally orthogonal linear polarisations ˆX and ˆY .† These beams excite the projection of |ψ(τ ), N˜ onto the bright states

|B(ˆX , N˜ , P˜) and |B(ˆY , N˜ , P˜) ,

(18)

(with the same N˜ that was addressed in the state preparation optical pumping step, but with an independent choice of P˜) with probability PX,Y respectively. In the ideal case in which all laser polarisations are exactly linear, this probability is given by

PX,Y (φ, θprep, θX,Y , N˜ , P˜) =

B(ˆX,Y , N˜ , P˜)|ψ(τ ), N˜

2
=

1 − P˜ cos(2(θprep − θX,Y + φ))

/2,

(19)

where θX,Y are the linear polarisation angles of the state readout beams, with respect to xˆ. The result is a signal that varies sinusoidally with the precession angle φ. To measure these probabilities, we observe the associated modulated ﬂuorescence signals, FX,Y = f N0PX,Y , where N0 is the number of molecules in the addressed N˜ level at the state readout region, and f is the fraction of total ﬂuorescence photons that are detected.
To distinguish between molecule number ﬂuctuations and phase variations, we normalize with respect to the former by rapidly switching the state readout laser between the two orthogonal polarisations, ˆX,Y , every 5 µs. This is signiﬁcantly quicker than ﬂuctuations in the molecule number and is suﬃciently quick that every molecule is interrogated by both polarisations (see section 4 or [62] for more details). We then form an asymmetry A, which is immune to molecule number ﬂuctuations, given by

A

=

FX FX

− +

FY FY

= P˜ cos[2(φ − θ)],

(20)

where we have assumed that the readout polarisations are exactly orthogonal, given by θX = θread and θY = θread + π/2, and where we have deﬁned θ ≡ θread − θprep.‡ In this equation and from now on unless otherwise noted, P˜ refers to the excited state parity that is addressed by the state readout laser, not to be
confused with the excited state parity addressed by the state preparation laser, which is kept ﬁxed. The value of Bz and the state preparation and readout laser beam polarisations are chosen so that
|φ − θ| ≈ π/4. This corresponds to the linear part of the asymmetry fringe in equation (20), where A
is most sensitive to, and linearly proportional to, small changes in φ (cf. ﬁgure 23). A variety of eﬀects

† For convenience, the notation ˆX , ˆY is used interchangeably with the previously used notation Xˆ , Yˆ . ‡ Note that this reduces to equation 11 for θprep = 0 (i.e. ˆprep = xˆ) and P˜ = +1.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

10

including imperfect optical pumping, decay from C back to H, elliptical laser polarisation and forward velocity dispersion, reduce the measurement sensitivity by a ‘contrast’ factor

C

≡

−

1 2

∂A ∂θ

≈

1 2

∂A ∂φ

,

(21)

with |C| ≤ 1. We measure this parameter by dithering θ = θnr + ∆θθ˜ (where θnr is the average or ’nonreversing’ polarisation angle) between states of θ˜ = ±1, with amplitude ∆θ = 0.05 rad. We found that typically |C| ≈ 0.94. We then extract the measured phase, Φ = A/(2C)+qπ/4, by normalising the asymmetry measurements according to the measured contrast — see section 4 for more details on the data analysis methods used to evaluate this quantity. In the ideal case, the measured phase matches closely-
 with the precession phase, Φ ≈ φ. However, a variety eﬀects that are investigated closely in section 5 lead to slight deviations between these two quantities, which can contribute to systematic errors in the measurement. Unless explicitly speciﬁed, C is assumed to be an unsigned quantity from here on. In particular, when averaging over multiple states of the experiment, |C| is used.
To isolate the eEDM term from other components of the energy shift in equation (15), the experiment is repeated under diﬀerent conditions that are characterised by parameters whose sign is switched regularly during the experiment. The spin precession measurement is repeated for all 24 experiment states deﬁned by the four primary binary switch parameters: N˜ , the molecular orientation relative to the applied electric ﬁeld (changed every 0.5 s); E˜, the direction of the applied electric ﬁeld in the-
 laboratory (2 s); θ˜, the sign of the readout polarisation dither (10 s); and B˜, the direction of the applied magnetic ﬁeld in the laboratory (40 s). For each (N˜ , E˜, B˜) state, the asymmetry A(N˜ , E˜, B˜), contrast C(N˜ , E˜, B˜), and measured phase Φ(N˜ , E˜, B˜) are determined as described earlier. The data taken under all 24 = 16 experimental states derived from these four binary switches constitutes a ‘block’ of data.
We can write the phase Φ(N˜ , E˜, B˜) in terms of components with particular parity with respect to the experimental switches:

Φ(N˜ , E˜, B˜) =Φnr + ΦN N˜ + ΦE E˜ + ΦBB˜

+ΦN E N˜ E˜ + ΦN BN˜ B˜ + ΦEBE˜B˜ + ΦN EBN˜ E˜B˜.

(22)

We refer to these components as ‘switch-parity channels’. A channel is said to be odd with respect to some subset of switches (labelled as superscripts) if it changes sign when any of those switches is performed. Thus it will also change sign if an odd number of those switches is performed. It is implicitly even under all other switches. We use this general notation throughout this document to refer to correlations of various measured quantities and experimental parameters with experiment switches-
. To generalize, if we have k binary experiment switches (S˜1, S˜2, . . . , S˜k) such that S˜i = ±1, and we perform a measurement of the parameter X(S˜1, S˜2, . . . , S˜k) for a complete set of the 2k switch states, then the component of X that is odd under the product of switches S˜aS˜b . . . is given by

X SaSb...

≡

1 2k

S˜aS˜b . . . X S˜1, S˜2, . . . , S˜k .

S˜1 ...S˜k =±1

(23)

The switch parity behavior of a given component is expressed in the superscript which lists the experimental
switches with respect to which the component is odd. We order the switch labels in the superscripts such
that the fastest switches are listed ﬁrst and the slowest switches are listed last. Some components give
particularly important physical quantities. Most notably, the eEDM precession phase is extracted from the N˜ E˜-correlated component of the measured phase: that is, in the ideal case ΦN E = −deEeﬀ τ . Additionally, the Zeeman precession phase is nominally given by ΦB = −µBg1Bzτ . Recall we label ‘non-reversing’ components with an ‘nr’ superscript. In a few cases, we drop the superscript parity because it is redundant. For example, we drop the superscript on the dominant components of the applied e-
lectric and magnetic ﬁelds, E ≡ EE and Bz ≡ BzB.
Many other experimental parameters are also varied between blocks of data to suppress and monitor
systematic errors (ﬁgure 5). These ‘superblock’ switches include: excited-state parity addressed by the state readout laser beams, P˜ (chosen randomly after every block, with equal numbers of P˜ = ±1); simultaneous

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

11

change of the power supply polarity and interchange of leads connecting the electric ﬁeld plates to their voltage supply, L˜ (4 blocks); a rotation of the state readout polarisation basis by θread → θread + π/2 to interchange the roles of the X and Y beams, R˜ (8 blocks); and a global polarisation rotation of both state preparation and readout lasers by θread → θread + π/2 and θprep → θprep + π/2, G˜ (16 blocks).
Additionally, the magnitude of the magnetic ﬁeld, Bz, was switched on the timescale of 64–128 blocks (∼1 hour), and the magnitude of the applied electric ﬁeld, E, and the laser propagation direction, kˆ · zˆ, were

changed on timescales of ∼1 day and ∼1 week, respectively.

On these longer timescales, we also alternated between taking eEDM data under Normal conditions, for

which all experiment parameters were set to their nominally ideal values, and taking data with Intentional

Parameter Variations (IPVs), during which some experimental parameter was set to deviate from ideal so

that we could monitor the size of the known systematic errors described in section 5.2.6. We took IPV data in which we varied (a) the non-reversing electric ﬁeld Enr and (b) the N˜ E˜-correlated Rabi frequency,

ΩNr E , to measure the sensitivity of the eEDM measurement to these parameters and we varied (c) the state preparation laser detuning ∆prep to monitor the size of the residual Enr. These systematic errors are discussed

in more detail in sections 3.2.5 and 5.2.6.

The details of the data analysis required to extract the eEDM-correlated phase ΦN E are described in

section 4. A photoelectron

lower bound shot noise to

on be

the δΦN

statistical E = 1/(2|C

u√ncertainty | N ) for N

δΦN E of the eEDM-correlated detected photoelectrons [17, 77].

phase is given by In the case where

shot noise is the sole contribution, we can express the statistical uncertainty δde in our measurement of the

eEDM as

δde

=

δΦN

E

1 Eeﬀ

τ

=

1 2|C|τ Eeﬀ

, N˙ T

(24)

where N˙ ≈ f N˙0 is the measurement rate (equivalent to the photoelectron detection rate) and T is the integration time (recall f is the fraction of ﬂuorescence photons detected and N0 is the number of molecules in the addressed N˜ level). Further discussion of the achieved statistical uncertainty is presented in section 4.

3.2. Apparatus
3.2.1. Overview In this section we provide an overview of our experimental procedure and the important components of our apparatus. The reader should consult subsequent subsections for further details. A schematic of the experimental apparatus is shown in ﬁgure 6.
ThO molecules were produced via pulsed laser ablation of a ThO2 ceramic target. This took place in a cryogenic neon buﬀer gas cell, held at a temperature of ≈16 K, at a repetition rate of 50 Hz. The resulting molecular beam was collimated and had a forward velocity v ≈ 200 m/s. In the state readout region the molecular pulses had a temporal (spatial) length of around 2 ms (40 cm). The buﬀer gas beam source is described in detail in section 3.2.2.
After leaving the buﬀer gas source, the molecules had a velocity distribution and rotational level populations consistent with a Maxwell-Boltzmann distribution at a temperature of ≈4 K. This was lower than the cell temperature due to expansion cooling, which enhanced the number of usable ThO molecules in the relevant rotational state. Further rotational cooling was provided via optical pumping and microwave mixing (see section 3.2.3). The molecules then passed through adjustable horizontal and ver-
tical collimators consisting of a double layer of razor blades aﬃxed to linear translation vacuum feedthroughs. Under normal running conditions, these collimators were withdrawn so that they did not aﬀect the proﬁle of the molecule beam in the spin-precession region; however, they were used to modify the spatial proﬁle of the molecule beam during systematic checks to investigate the eﬀect of molecule beam position and pointing. Just before the ﬁeld plates, 126 cm from the beam source, the molecule-
s passed through a 1 cm square collimating aperture, which determined the beam proﬁle in the spin-precession region and prevented particles in the beam from being deposited on the ﬁeld plates.
As described in section 3.1, a spin precession measurement was performed where the precession angle provided a measure of the interaction energy of an eEDM with the eﬀective electric ﬁeld, Eeﬀ , in the molecule. A pair of transparent, ITO-coated glass plates provided an electric ﬁeld that polarised and aligned the molecules. Laser beams passed through these plates to perform state preparation and readout. Around the vacuum chamber were coils that provided a uniform magnetic ﬁeld in the +zˆ directi-
on, and ﬁve layers of

Methods, Analysis, and thNeETreatment of Systematic Errors for the eEDM Limit in ThO

12

Block

ee e

mmiinnuuss minus

ssiiggnn sign

iinn in

eeqquuaattiioonn equation

111eee(((ccchhhtttooozoozowww±Pff±NfN±NB±=B˜N=EBBθ˜BEE˜˜θB˜E˜˜E˜θθ˜˜˜˜θ˜˜˜θ˜˜Baa˜˜˜dd˜Eadθ˜˜˜ooxox++tt++--t--hhh·ww·weeeyyeeooeorrrddyydyeeeeeeﬁﬁﬁrrrnnnrrroooeeerrrbbbyyˆyˆˆaaa???rrr)))...

0.5 s
20 s 40 s

Superblock

z RRPRLP˜P=˜˜˜˜ EERGLL˜˜n˜nrr ∆∆ΩΩppENrNrrrGLGeGe˜n˜˜EEppr

+
x+- ·
+ + -

y

ΩNr E

∆||BBprzze|p|1

or 19

38 mG

640 s 30 min

Run

Data type
|||BEEzzz ||

Normal

a bc
IPV

Normal

15|hours

a bc
IPV

Full dataset

kˆkˆ| E··

| zzˆˆ

141 V/cm
36
+
-

June 4-11, 21013

Aug. 22 - Se1pt. 3, 2013

Figure 5: A schematic of the switches performed during our experiment and the associated timescales. See the main text for a description of each of the switch parameters and a description of the distinction between the Normal and IPV (Intentional Parameter Variation) data types. The 15-hour run time and |E| switching timescale are approximate.

magnetic shielding which shielded against environmental magnetic ﬁelds. The electric and magnetic ﬁelds are discussed in detail in sections 3.2.5 and 3.2.6. The ﬂuorescence induced by the state readout laser beam was collected by a set of eight lenses and transferred out of the spin-precession region using ﬁber bundles and light pipes (see section 3.2.7), where it was detected by photo-multiplier tubes†.
3.2.2. Buﬀer Gas Beam Source The basic operation of our beam source [64, 69, 71, 72, 78–89] is depicted in ﬁgure 7. Neon buﬀer gas was ﬂowed at a rate of ≈ 30 SCCM (standard cubic centimetres per minute) through a copper cell held at a T ≈ 16 K. The inside of the cell was cylindrical with a diameter of 13 mm and a length of 75 mm. Within the cell ThO was introduced at high temperature via laser ablation: overlapped beams of light with wavelengths
† Hamamatsu R8900U-20.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

13

Buffer Gas Beam Source

Rotational Cooling

Interaction Region

Neon Buffer Gas

293 K ThO2 Target
40 K 4 K 16 K

z Pulsed Nd:YAG
x
y

Vacuum

+V

E-field Plates

Magnetic coils

+V
-V Adjustable Collimators -V

943 nm 1090 nm Magnetic Shielding

PMT Light Collection
1090 nm

Figure 6: A schematic of the overall ACME experimental apparatus. A beam of ThO molecules was produced by a cryogenic buﬀer-gas-cooled source. After exiting the source, the molecules were rotationally cooled via optical pumping and microwave mixing and then collimated before entering a magnetically shielded spin-precession region where nominally uniform magnetic and electric ﬁelds were applied. Using optical pumping, the molecules were transferred into the eEDM-sensitive H state and then a spin su-
perposition state was prepared. The spin precessed for a distance of ≈22 cm and was then read out via laser-induced ﬂuorescence. The ﬂuorescence photons were collected by lenses and passed out of the chamber for detection by photomultiplier tubes. See main text for further details.

Buffer Gas

ThO2 Target

293 K 60 K 4 K 16 K
21 K

Buffer Gas Atom ThO Molecule
Nd:YAG
Figure 7: A schematic of the buﬀer gas beam source. Neon buﬀer gas ﬂowed into a cell at a temperature of 16 K where it served to thermalise the hot ThO molecules produced by laser ablation. The ThO was entrained in the buﬀer gas ﬂow. The mixture exited the cell and its expansion cooled the ThO to ≈ 4 K. The resulting beam passed through collimating apertures in the 4 K and 50 K radiation shields and exited the beam source into the high vacuum region of the experiment. Solid circles represent buﬀer-
 gas atoms. Open circles represent ThO molecules being cooled (red to blue transition).
532 nm and 1064 nm emitted by a pulsed Nd:YAG laser† were focussed onto a 1.9 cm diameter ThO2 target fabricated from pressed and sintered powder [90, 91]. The laser pulses had a duration of a few ns, a pulse energy up to approximately 100 mJ and a repetition rate of 50 Hz. The resulting hot plume of ejected
† Litron Nano TRL 80-200.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

14

particles, which contained ThO along with various other ablation byproducts, was cooled by collisions with the neon buﬀer gas, became entrained, and then exited the cell. The cell temperature was maintained by a combination of a pulse tube refrigerator† and a resistive heater.
The cell was surrounded by a 4 K copper shield that protected the cell from black-body radiation and cryopumped most of the neon emerging from the cell. This shield was also partially covered with activated charcoal that acted as a cryopump for residual helium in the neon buﬀer gas. We observed a background pressure of 10−7 Torr without any mechanical pumping of the beam source when cold and with no buﬀer gas ﬂow. The 4 K shield had a stainless steel conical collimator with a circular aperture of -
diameter 6 mm, located 25 mm from the cell aperture, by which distance the expanding beam was suﬃciently diﬀuse that intra-beam collisions were negligible and most trajectories were ballistic. This collimator thus functioned as a diﬀerential pumping aperture without aﬀecting the beam’s cooling, acceleration or expansion [72]. The collimator had a thermal standoﬀ relative to the 4 K shield to which it was mounted so that it could be kept at a temperature above the freezing point of neon by a resist-
ive heater to prevent ice buildup on the collimator adversely aﬀecting the beam dynamics. Another layer of shielding surrounded the 4 K copper shield, constructed from aluminium and held at a temperature of 60 K. Both the 4 K and 60 K radiation shields were thermally connected to the pulse tube by heat links made of ﬂexible copper rope.
The aluminium vacuum chamber that housed the buﬀer gas beam source‡ had windows on each side, providing optical access for both the ablation laser and spectroscopy lasers, the latter allowing characterisation and monitoring of beam properties. The ThO beam’s forward velocity distribution was roughly Gaussian with mean v ≈ 200 m/s and standard deviation σv ≈ 13 m/s, corresponding to a temperature of ≈5 K. The rotational temperature was Trot ≈ 4 K (rotational constant BX ≈ 0.33 cm−1), meaning that ≈-
90% of the population was contained in the levels J = 0–3. Upon exiting the cell, the beam had a FWHM angular spread of ≈ 45◦. Several stages of collimation were applied before reaching the spin-precession region. The ﬁnal collimator subtended a solid angle of ≈ 6 × 10−5 sr, meaning 1 in ∼20, 000 molecules exiting the cell reached the spin-precession region, where the precession measurement was performed (see ﬁgure 6).
ThO yields from a given ablation spot decreased signiﬁcantly after ∼104 − −105 YAG pulses (∼10 mins), at which time the laser spot was moved to an un-depleted region via a motorised mirror to re-optimise the beam ﬂux. Each target was found to provide acceptable levels of molecule ﬂux for around 300 hours of continuous running (≈5 × 107 shots) before requiring replacement.

3.2.3. Rotational Cooling We observed that ≈2 cm downstream of (further from) the buﬀer gas beam source cell aperture, J-changing collisions were ‘frozen out’ [72], and the distribution of rotational state populations was fairly well described by a Boltzmann distribution with temperature Trot ≈ 4 K. At this temperature the resulting fractions of molecules in the J = 0–3 levels were estimated to be 0.1, 0.3, 0.3 and 0.2 respectively.
As described in section 3.2.4, we sought to transfer as much of the initial ground state population as possible into |H, J = 1 via optical pumping. To enhance the population which was transferred, we accumulated population in a single rotational level of the ground state before state preparation. The scheme used to achieve this, which we refer to as rotational cooling, is illustrated schematically in ﬁgure 8 and discussed in detail in [92]. The ﬁrst stage of the process was the optical pumping of -
molecules out of |X, J = 2 (|X, J = 3 ), via |C, J = 1 (|C, J = 2 ) into |X, J = 0 (|X, J = 1 ) using laser light at 690 nm. The natural linewidth of the X → C transition is ≈2π × 0.3 MHz, however the usable molecules had a ≈ ± 0.7 m/s transverse velocity spread, corresponding to a 1σ Doppler width of ≈2π × 1.5 MHz at 690 nm. Because the lasers used had linewidths of 1 MHz, to completely optically pump these molecules we relied on a combination of power broadening and extended interaction time. Op-
tical pumping occured in a magnetically unshielded region where a background ﬁeld B ≈ 500 mG was present; however, the magnetic moment of X (C) is ∼µN (≈µB/J(J + 1)), the nuclear magneton, which led to a Zeeman shift of ∼2π × 400 Hz ( 2π × 400 kHz) such that the M sublevels were not resolved by our lasers. The |C, J = 1 state has an Ω-doublet splitting of ∆Ω,C,J=1 ≈ 2π × 51 MHz [93]. This splitting scales as ∆Ω,C,J ∝ J (J + 1), meaning we could spectroscopically resolve the Ω-doublets for all |C, -
J . In addition, having no E-ﬁeld present meant that the M sublevels of C and X remained unresolved and the energy eigenstates remained parity eigenstates. The X state is also insensitive to E-ﬁelds due to the lack of Ω-doublet substructure; opposite parity states are separated by
† Cryomech PT415. ‡ Precision Cryogenic Systems Inc.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

15

C2

1

690 nm

3 X

2 1 0
Optical Pumping

1 X

≈2π × 20 GHz M remixing

0

1 X
0

Microwave Pumping

Interaction Region

Figure 8: Schematic of the rotational cooling process. Numbers label J and My (projection of total angular momentum along y) sublevels are unlabelled but are −1, 0, +1 from left to right. Population was ﬁrst optically
pumped out of the J = 2 and J = 3 levels (C-state Ω-doublet structure and My sublevels omitted for clarity) in a nominally ﬁeld-free region. Next, population was equilibrated between |J = 0 and |J = 1, My = 0 via microwave pumping. An electric ﬁeld of ≈40 V/cm along yˆ was empirically observed to lead to an increased population in |X, J = 1 . Grey dots represent population before these pumping processes. The schematic on
the right represents the populations inside the spin-precession region (after pumping).

∼10 GHz and were hence unmixed. Laser beams with linear polarisation alternating between xˆ and yˆ were used to ensure that all population in |X, J = 2, 3 was addressed. This was achieved by directing around 10 passes of the beam, oﬀset in x, through the vacuum chamber, passing through a quarter-wave plate twice in each pass, over a distance of around 2 cm.
The laser light for rotational cooling was derived from home-built extended cavity diode lasers (ECDLs). The lasers were frequency-stabilised using a scanning transfer cavity with a computer-controlled servo [94]. Frequency-doubled light at 1064 nm from a frequency-stabilised Nd:YAG laser, locked to a molecular iodine line via modulation transfer spectroscopy [95], provided the reference for the transfer cavity.
After this ﬁrst stage of rotational cooling, there was signiﬁcantly greater population in the |X, J = 0 state than in any of the |X, J = 1, M sublevels. We obtained a ≈25 % increase in the J = 1 population by applying a continuous microwave ﬁeld, resonant with the J = 0 → J = 1 transition; a suﬃciently high microwave power combined with the inherent velocity dispersion of the molecule beam led to an equilibration of population between the coupled levels [92]. In this second stage of rotational coo-
ling it was empirically observed that applying an electric ﬁeld to lift the My sublevel degeneracy was necessary to obtain the increased population in |X, J = 1 . A pair of copper electric ﬁeld plates (spacing ≈ 4 cm) provided a ﬁeld of ≈40 V/cm in the yˆ (vertical) direction. We applied microwaves resonant with the Stark-shifted |J = 0 → |J = 1, My = 0 transition at a frequency of 2π × 19.904521 GHz from an ex vacuo horn. Between the rotational cooling and spin-precession regions of the experimen-
t (see ﬁgure 6) there was not a well-deﬁned quantisation axis, and we observe that the populations of the |J = 1, M magnetic sublevels were equalised by the time the molecules reached the state preparation region.
Overall, we ﬁnd that rotational cooling provided a factor of between 1.5 and 2.0 increase in the molecule ﬂuorescence signal F in the state readout region. This gain factor was observed to vary slowly over time, possibly due to variations in the rotational temperature of the molecule beam, with signiﬁcant changes sometimes observed when the ablation target was changed.
3.2.4. State Preparation and Readout Following rotational cooling, the molecular beam passed into the spin-precession region, where the molecules experienced a nominally uniform electric ﬁeld, E, which was nominally collinear with a magnetic ﬁeld, B. Note that since neither of the states X1Σ+ nor A3Π0+ have Ω-doublet structure, parity remained a good quantum number for these levels for the small (∼100 V/cm) electric ﬁelds we applied.
We transferred the molecules into the H electronic state via optical pumping, as illustrated in ﬁgure 9. A 943 nm laser beam nominally propagating along zˆ excited molecules from the |X, J = 1 to |A, J = 0 . The laser beam passed through a quarter-wave plate, was retroﬂected and oﬀset in x, then passed again

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

16

A, J=0

943 nm

+

–

H, J=1

X, J=1
Figure 9: Schematic of the optical pumping scheme used to populate the H state. Spontaneous decay to the H state (green arrows) led to an incoherent mixture of all indicated levels. See main text for detailed explanation.

through the quarter-wave plate, such that the molecules were pumped by two spatially separated laser beams of orthogonal polarisations, allowing all population in both the |X, J = 1, M = ±1 levels to be excited. After excitation to A, the molecules could spontaneously decay into the |H, J = 1 manifold of states. We observed a transfer eﬃciency from X to H of ≈0.3 [92]. In this decay, ﬁve out of the six sublevels were populated; 1/6 of the population decayed to each of |H, M = ±1, N˜ = ±1 and 1/3 t-
o |H, P˜ = −1, M = 0 (see sections 2.2 and 3.1 for deﬁnitions of N˜ and P˜); decay to |H, P˜ = +1, M = 0 is forbidden. Of these ﬁve populated states, only one corresponded to the desired initial state described by equation 13, and only 1/6 of the population in the H state was in this desired state. We estimated a total transfer eﬃciency from |X, J = 1, M = ±1 to the state in equation 13 of 30% × 1/6 = 5%.
The 943 nm laser light was derived from a commercial ECDL and then ampliﬁed by a commercial tapered ampliﬁer†, generating ≈ 400 mW. As with the rotational cooling lasers, we veriﬁed that the power was suﬃcient to drive optical pumping to completion across the entire transverse velocity distribution of the molecular beam. This laser was also stabilised via the previously described (section 3.2.3) transfer cavity. The frequency of the laser light was monitored every 30–60 mins by scanning across the-
 molecular resonances, allowing for independent ﬁne-tuning and compensation of long-term frequency changes ( 2π × 100 kHz per half hour) due to e.g. temperature drifts in the cavity.
Around 1 cm downstream of the optical pumping laser beam that transferred population to H, we prepared the initial state of H (equation 13) by driving the transition between |H, M = ±1, N˜ and |C, P˜ = +1 (see section 3.1 for more details) using laser light at 1090 nm. A distance L = 22 cm downstream of the preparation laser, a second 1090 nm laser beam was used to read out the molecule state via the same transition (but with the option to excite to either P˜ state). This laser light was also deri-
ved from a commercial ECDL. It was then ampliﬁed using a ﬁber ampliﬁer‡, increasing the power to ≈250 mW. AOMs were then used to split and frequency shift the light to address both N˜ states in the H state, allowing spectroscopic selection of molecular alignment, and of both P˜ levels in the C state. Switching between these frequencies was achieved with either RF switches§ or a DDS synthesizer . Given the linear Stark shifts D1E ≈ 2π × 146 MHz (2π × 37 MHz) in H with an applied electric ﬁeld stren-
gth |E| = 141 V/cm (36 V/cm), and the excited state Ω-doublet splitting ∆Ω,C,J=1 ≈ 50 MHz in C, these transitions were spectroscopically well-resolved. We ﬁxed the nominal frequency of the state preparation laser to only address P˜ = +1, but periodically switched the state readout laser frequency to address P˜ = ±1 (∼1 min period). The transition frequencies of the state preparation and state readout laser beams were changed synchronously to always address the same N˜ level, with a switch between -
N˜ levels every 0.5 s. The state preparation and readout laser beams were then independently ampliﬁed with a pair of ﬁber ampliﬁersP, providing ∼3–4 W of power. Immediately before
† Toptica DL Pro and BoosTA. ‡ Keopsys KPS-BT2-YFA-1083-SLM-PM-05-FA. § Mini-Circuits ZYSWA-2-50DR.
Novatech 409B. P Nufern PSFA-1084-01-10W-1-3.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

17

interrogating the molecules, the polarisation of the state readout laser beam was rapidly (100 kHz) switched between two orthogonal linear polarisations. The scheme for producing the N˜ and P˜ switches, and this fast polarisation switch, together with the corresponding laser transitions, is shown in ﬁgure 10. We now describe in detail how the appropriate frequency laser light was produced.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

18

C ∆Ω,C,J=1

ωPS ωPS
ω1

ω2 ω3

P˜ = −1 P˜ = +1

ω0

H
M = −1

M =0

N˜ = −1 ωLN
ωLN N˜ = +1
M = +1

ECDL
ωL,0
Fiber Amplifier

N˜
AOM ωL,0−ωLN
−ωLN
AOM ωL,0+ωLN
+ωLN

P˜, ∆
AOM +ωL,2, +ωL,3

ωL,0 − ωLN +ωL,2 ωL,0 − ωLN +ωL,3 ωL,0 + ωLN +ωL,2 ωL,0 + ωLN +ωL,3

Fiber Amplifier

AOM
+ωL,1

ωL,0 − ωLN +ωL,1 ωL,0 + ωLN +ωL,1

Fiber Amplifier

Ωr
AOM AOM

State Preparation

Polarisation Switching

AOM
−ωL,PS
xˆ

AOM
−ωL,PS
yˆ

PBS

ωL,0 − ωLN + ωL,2−ωL,PS ωL,0 − ωLN + ωL,3−ωL,PS ωL,0 + ωLN + ωL,2−ωL,PS ωL,0 + ωLN + ωL,3−ωL,PS

State Readout

Figure 10: Top: transitions addressed during state preparation and readout (not to scale). The grey arrow represents the ECDL output frequency, ω0, not resonant with any transition and referenced from halfway between the two H state Ω-doublets. Bottom: simpliﬁed schematic of how we produced light at the appropriate frequencies. AOM-induced frequency shifts are denoted in the corresponding boxes. Bifurcation of grey lines represents light being split equally. Multiple lines represent diﬀerent frequ-
encies; only one frequency is used at once. Dashed grey lines represent a continuation of the optical path. AOMs to perform switching between N˜ states; switching between P˜ states and adding relative detuning ∆; tuning Rabi frequency Ωr; and performing polarisation switching are shown. The setup shown is used with E = 142 V/cm and changes slightly if a diﬀerent value of E is used. For a full description, consult the main text.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

19

wthheeNr˜LeigωswhLNtitfcirsho.hmaTltfhhetehtEewCospDflriLetqtwiunaegsncbayem-tswphleiifeﬁtneeddthabenedatwmsopslNiwt˜eersqetuacatolemlsy;,btpinhaeesdsseianAngdOtoMovtsewrwolaeAprpeOesMdw.sitFwcohhreicdshtaoptneroapdnruedpceoadﬀrastthoioifnptse(rl±foowωrLemNr
branch of diagram), another AOM shifted the light by +ωL,1, into resonance with the lower Ω-doublet in C (P˜ = +1). This light was then amplifed again and passed through an AOM to vary the power (used as
a systematic check). For the state readout (upper branch of diagram), a single AOM switched frequency to produce shifts +ωL,2,3 for the two P˜ states. A relative detuning between state preparation and readout laser beams (not shown) was also implemented with this AOM. (Shifts common to both beams were made by
changing ω0.) The light was then ampliﬁed again and passed through an AOM to vary the power. Finally, polarisation switching was achieved with two AOMs switched on and oﬀ at 100 kHz, π out of phase with each other; light not diﬀracted (and frequency shifted by −ωL,PS) by the ﬁrst AOM was diﬀracted (and also frequency shifted by −ωL,PS) by the second AOM. The diﬀracted light from each path was combined on a polarising beam splitter such that the linear polarisation of the ﬁnal output beam alternate-
d.
Based on the notation above we can now write the components of the frequencies of the state preparation and readout laser beams which do not reverse with any experimental switch as ωLnr,prep = ωL,0 + ωL,1 and ωLnr,read = ωL,0 + (ωL,2 + ωL,3)/2 − ωL,PS, respectively. We can also write the P˜-correlated frequency component of the state readout laser as ωLP,read = (ωL,2 − ωL,3)/2. We then write the detuning components as ∆i = ωL,i − ωHC where i ∈ {prep, X, Y } indexes the laser and ωHC is the transit-
ion frequency between the line centres of the |H, J = 1 and |C, J = 1 manifolds†. We can rewrite this overall detuning in terms of
various switch parity components:

∆i =ωL,i − ωHC,i

= ωLnr,i + N˜ ωLN + P˜ωLP δi,{X,Y }

−

ωHnrC + N˜ D1

E(xi)E˜ + Enr(xi)

−

1 2

∆Ω,C,J

=1P˜

δi,{X,Y

}

=∆ni r + N˜ ∆Ni + N˜ E˜∆Ni E + P˜∆Pi δi,{X,Y }.

(25) (26) (27)

In the above equations we have deﬁned detuning components of given switch parities — we shall now explain

each component in AOM frequency ωLN

turn. used

t∆o Nisw=itch(ωbLNet−weDen1Ere(xsoi)n)anistltyhaedmdriesmssaintgchthbeettwwoeeNn˜

the Stark shift D1E(xi) states, where xi is the x

and the position

of laser beam i. ∆Ni E = D1Enr(xi) is a detuning component correlated like an eEDM signal which is due

to a non-reversing component of the applied electric ﬁeld. To understand this relation, consider ﬁgure 11.

Recall that ∆Ω,C,J=1 is the Ω-doublet splitting of the C state. For a Enr = 0, |E|, and hence the splitting between the N˜ levels in H, depends on E˜. If the laser frequency for each N˜ is set assuming Enr = 0, a nonzero Enr leads to blue or red detuning from resonance, correlated with E˜. Because the sign of the Stark shift is correlated with N˜ , the resulting detuning is also correlated with N˜ .

∆Pi = ωLP + ∆Ω,C,J=1/2 is the mismatch between the excited state parity splitting and the AOM frequency, ωLP = (ωL,3 − ωL,2)/2, used to switch between the two states (δi,{X,Y } is the Kronecker delta, 1 if i = X or i = Y , zero else). We observed that ∆N (∆P ) was typically less than 2π × 20 kHz (2π × 50 kHz).

Although we could measure ∆N with ∼2π × 1 kHz precision, ﬂuctuations in the Stark splitting, likely caused

by thermally-induced ﬂuctuations of the ﬁeld plate spacing, limited our ability to zero out this correlated

detuning.

We deﬁne ∆nr = (∆nprrep + (1/2)(∆nXr + ∆nYr))/2 as the average non-reversing detuning of the state preparation and readout laser beams; its value typically ﬂuctuated by ∼2π × 0.1 MHz over several hours.

Every 30–60 minutes the value of ∆nr was scanned across the molecular resonance in the readout region

using the ∆-tuning AOM (see ﬁgure 10), as an auxiliary optimisation. ∆nr was set to the value where

the ﬂuorescence signal was maximum. This ensured that the average detuning of the state readout laser

beams, (∆nXr + ∆nYr)/2, was zero, however, if the state preparation and readout laser beams were not exactly parallel, there could be a diﬀerence between ∆ni r due to the resulting diﬀerence in Doppler shifts. The eﬀect of a detuning diﬀerence between the two state readout polarisations ∆XY = (∆nXr − ∆nYr)/2 is discussed in section 5.3. Additionally, each day we scanned the frequency of the preparation laser across the molecule

resonance while monitoring the contrast of our ﬂuorescence signal to ensure ∆nprrep was kept below 2π×0.2 MHz

† Note that this can in principle vary between diﬀerent laser beams (denoted with the subscript i) if there is a relative pointing between them, which produces a relative Doppler shift, but we ignore this eﬀect in our current treatment.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

20

C

E˜ = +1 E˜ = −1

E + E nr E − E nr

N˜ = −1

H

2D1E

E˜ = −1 E˜ = +1

2∆N E E − E nr E + E nr

N˜ = +1

Figure 11: Illustration of ∆N E arising from a non-reversing electric ﬁeld Enr. Dashed lines show energy levels in the presence of Enr. Colours indicate if the the laser shown in dark red is blue- or red-detuned from the
transition.

(an example scan is shown in ﬁgure 24). The ways in which detuning components can contribute to systematic errors are discussed in detail in sections 5.2.3 and 5.2.6.
Other polarisation switches of the state preparation and readout laser beams (R˜ and G˜) were controlled independently via half-wave plates mounted in high resolution rotation stages†. These switches and their use in the experiment are described in detail in section 4. Both beams were shaped using cylindrical lenses to be extended in y so all molecules in the beam were addressed. The Gaussian standard deviations of the beam intensities were 1.1 mm and 7.5 mm in the x and y directions, respectively-
 [92]. The preparation laser beam was temporally modulated at 50 Hz with a chopper wheel, synchronous with the molecule beam pulses, to minimise the incident power on the ﬁeld plates so as to reduce an important systematic error, described in sections 5.2.3 and 5.2.4.
3.2.5. Electric Field The applied E-ﬁeld was generated with a pair of 43 cm × 23 cm parallel conducting plates composed of ≈1.25 cm thick Boroﬂoat glass, coated with a ∼200 nm layer of indium tin oxide on the inner faces‡. The plates were transparent to the X → A optical pumping laser (943 nm), the H → C state preparation and readout lasers (1090 nm), and the C → X molecule ﬂuorescence (690 nm). The outside faces of the electric ﬁeld plates were prepared with a broadband anti-reﬂection coating wit-
h a speciﬁed <1% reﬂectivity at normal incidence from 600–1000 nm. The plates were made much larger than the precession region in order to minimise inhomogeneity of the ﬁeld through which the molecules passed, and to enable large solid angle collection of ﬂuorescence through the plates. One of the ﬁeld plates was mounted in an aluminium frame ﬁxed to the base of the vacuum chamber. The other ﬁeld plate was secured a distance of 2.5 cm away in a kinematic aluminium frame. On the inward-facing surfa-
ces, a frame of gold-plated copper clamped each ﬁeld plate to the aluminium mounts and also functioned as a ‘guard ring’ electrode, suppressing the eﬀect of fringing ﬁelds near the edges of the plate. The ﬁeld plates were protected from impinging molecular beam particles by a 1 cm × 1 cm square collimator ﬁxed to the entrance of the assembly.
The applied electric ﬁeld was controlled by a 20-bit DAC, ampliﬁed to produce up to ±200 V§. The ﬁeld plate assembly was referenced to the vacuum chamber ground. Equal and opposite voltages, ±V , were applied to each side of the assembly. The direction of the ﬁeld (the E˜ switch) was reversed every 1–2 s by
† Newport URS50BCC. ‡ The plates were fabricated by Custom Scientiﬁc, Inc. § PA98A Power OpAmp.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

21

reprogramming the output of the DAC channels to reverse their polarity. The conﬁguration of the electrical connections between the ampliﬁed voltage and the ﬁeld plates, denoted by L˜, was reversed via a pair of mercury-wetted relays every 2.6 minutes†. Data were also taken with two diﬀerent values of E = 36 and 141 V/cm, varied on a ∼1 day time scale.
We measured the homogoneity of the electric ﬁeld in a number of ways which we shall describe in turn now. Firstly, an indirect measure was obtained by determining the spatial variation of the ﬁeld plate separation d using a ‘white light’ Michelson interferometer [96]. A schematic of the setup is shown in ﬁgure 12. We directed a light beam at normal incidence through the electric ﬁeld plates. This resulted in

CCD
L2
L1 Light source
d
Figure 12: Schematic of the apparatus used to perform an interferometric measurement of the electric ﬁeld plate separation. A spectrally broad light beam is reﬂected perpendicularly oﬀ the ﬁeld plates and passes into a conventional Michelson interferometer setup with one ﬁxed arm (length L2) and one movable arm (length L1). An example of a pair of beam paths of interest is shown as solid and dashed red lines. If the two paths are slightly tilted relative to each other, a spatial interference patte-
rn (inset) is observed on the CCD detector when the path length diﬀerence between the two beams is less than the coherence length, e.g. L1 + d − L2 < Lc.
multiple reﬂected beams, but we restrict discussion to the reﬂections from the conducting surfaces as these are of primary interest and were eﬃciently experimentally isolated from all others. The reﬂected beams passed into a Michelson interferometer with one arm of ﬁxed length (L2) and one with length adjustable via a micrometer (L1). Constructive (destructive) interference occured whenever the lengths of two reﬂected beam paths diﬀered by an integer (odd half-integer) multiple of the wavelength o-
f the light. This condition was restricted further by the use of a broadband superluminescent diode‡ with a short coherence length Lc (nominally Lc ≈ 15 µm). Thus the interference was only substantial when the two beams diﬀered in length by
Lc. This occurred when L1 = L2 (for reﬂections oﬀ the same surface) or when L1 = L2 ± d (for reﬂections oﬀ surfaces spaced by d). The case where both beams reﬂected oﬀ the same surface was used as a reference to determine the position L1 = L2. A measure of this interference was achieved by producing a spatial interference pattern (inset ﬁgure 12) through a slight tilting of the arms of the interferometer. Analysis of the spatial Fourier components of the resulting interference pattern provided a q-
uantitative measure of the interference fringe contrast; a plot of contrast vs. arm position L1 yielded a peak with width δL1 ≈ Lc. By performing this analysis while varying the path length L1, the plate separation was deduced. This entire procedure was then performed over a range of transverse (x, y) positions on the ﬁeld plates. The resulting data are shown in ﬁgure 13.
This measurement clearly showed a bowing of the electric ﬁeld plates; the plate separation varied approximately quadratically with the position in x. This is shown in the left-hand plot of ﬁgure 13. In the xˆ direction we observed a maximum variation in the plate separation of around 20 µm. We saw a roughly
† Note that L˜ constitutes a reversal of the supply voltages as well as a reversal of the leads connecting the power supply to the ﬁeld plates, such that E˜ is unchanged. ‡ QPhotonics QSDM-680-2.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

22

Change in plate separation d (µm)

y = 0 cm

20

y = −1 cm

15

10

5

0

−15 −10

−5

0

5

10

Position (x, cm)

40

x = −10 cm

x = 0 cm

30

x = +10 cm

20

10

0

−10

−20

−30

−40

15

−10

−5

0

5

Position (y, cm)

Figure 13: Variation in the electric ﬁeld plate separation as measured by the interferometric method. The left-hand plot shows the variation with x, the molecule beam direction, at two diﬀerent values of y. The righthand plot shows the variation with the y (vertical) position at three diﬀerent values of x. The coordinate origin is at the nominal centre of the plates. The shaded regions indicate the approximate extent of the molecular beam in the spin precession region. The change in separation is -
quoted relative to a common oﬀset with an estimated error of ±0.5 µm. The mean separation over all x is 25.00 mm.

80 µm variation in the yˆ (vertical) direction but note that the collimated molecular beam extended only over ±5 mm in y so the biggest plate spacing variation at a given x was ≈10 µm. From these measurements and a typical applied voltage of V = ±177 V, we expected E to vary by around 100 mV/cm in the xˆ direction and 15 mV/cm in the y direction in the region sampled by the molecules.
The indirect measurements of the spatial variation of the applied electric ﬁeld provided by interferometric mapping of the ﬁeld plate separation were later corroborated by direct measurements of E(x). Spatial
variation of E could lead to the accumulation of geometric phases during the spin precession measurement [97]. There are known mechanisms by which such phases can contribute to eEDM-like systematic errors, as described in section 5.4, though simple estimates show that these eﬀects are several orders of magnitude below the sensitivity of this measurement. However, additional E-ﬁeld imperfections such as non-reversing ﬁelds, due to e.g. variations in the ITO coating, which could produce patch potent-
ials, are known to contribute to eEDM-like systematic errors and are only revealed by more direct measurements of the electric ﬁeld, which we will now describe.
We can write the electric ﬁeld present in the precession region in the following manner:

E · zˆ = EE˜ + Enr + ELL˜ + EELE˜L˜,

(28)

where, as usual, E˜ = sgn(zˆ · E) is the direction of the ﬁeld in the spin-precession region and L˜ represents the binary state of the physical leads connecting the voltage supply to the ﬁeld plates. The terms on the right-hand side are: EE˜, the intentionally applied electric ﬁeld; Enr, a non-reversing electric ﬁeld; EL, a nonreversing electric ﬁeld component from the power supply that can be reversed by switching L˜; and EELE˜L˜, a component of the applied ﬁeld that is reversed by switching E˜ o-
r L˜.
We directly measured the components of E using the molecules themselves, in three diﬀerent ways. The ﬁrst method used Raman spectroscopy, driving a two-photon Lambda-type transition between N˜ levels in |H, J = 1 as shown in ﬁgure 14. The Raman transfer was performed at positions between, but close to, the state preparation and readout laser beams, where there was suﬃcient optical access. The procedure was as follows: ﬁrst, an xˆ-polarised state preparation laser beam depleted a superposition |B(x-
ˆ, N˜ = +1, P˜ = +1) (recall |B is the bright state as deﬁned in section 3.1) by exciting it to the C state. Next, at a point downstream, two co-propagating, xˆ-polarised Raman beams were used to repopulate this depleted superposition by driving population from the other N˜ state, via the transition

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

23

|B(xˆ, N˜ = −1, P˜ = +1) → |C, P˜ = +1 → |B(xˆ, N˜ = +1, P˜ = +1) . The frequencies of the two Raman beams were tuned with a pair of AOMs. The state readout laser then addressed the same transition as the preparation laser and excited the repopulated superposition to the C-state from which it spontaneously decayed back to X and ﬂuoresced at 690 nm.

|M = −1

C |J = 1

P~ = −1 |M = 0 P~ = +1

|M = +1
∆

1090 nm

H |J = 1

|N~ = −1 δ |N~ = +1

2D1 |E |

Normalised Signal

1 0.9 0.8 0.7 0.6 0.5 0.4 0.3 0.2
-150

-100

/E

-50

0

50

/ (2: # kHz)

100

150

Figure 14: Left: Schematic of the Raman-type transition used to perform a measurement of the E-ﬁeld in the spin-precession region. The pairs of red arrows represent the one-photon transitions driven by linearly polarised light, addressing superpositions of M = ±1. The single-photon detuning is given by ∆ + δ/2 and the two-photon detuning is given by δ/2. D1|E| is the magnitude of the Stark shift due to the applied electric ﬁeld. Right: Example scans for opposite E˜ states obtained by varying the t-
wo-photon detuning δ/2 and observing ﬂuorescence, with Gaussian ﬁts to the data.

Eﬃcient transfer of population between the two N˜ states occurred for zero two-photon detuning (δ/2 in ﬁgure 14). This condition was indicated by a peak in ﬂuorescence, giving a measure of the Stark shifted energy, and hence the absolute size of the applied ﬁeld, |E|. This procedure was repeated for diﬀerent positions of the Raman laser beams along the xˆ direction. The non-reversing component of the electric ﬁeld was found by repeating the measurement after reversing the applied voltages. An exam-
ple of such a pair of scans is shown on the right of ﬁgure 14.
Using this method we measured the electric ﬁeld at x positions where there was suﬃcient optical access, i.e. near the state preparation and readout laser beams. The E˜-correlated two-photon detuning δE = 2π × 13 kHz (2π × 11 kHz) allowed us to extract a value of the non-reversing electric ﬁeld component, Enr = δE /2D1 = −6.5 ± 0.3 mV/cm (−5.5 ± 0.3 mV/cm), in the state preparation (readout) region. We did not observe any signiﬁcant variation within the individual regions. We also observed that thi-
s non-reversing component did not vary with the size of the reversing electric ﬁeld.
The second method used to measure the electric ﬁeld had the greatest utility because it allowed for spatially resolved measurements along x in the spin precession region with comparable precision to the Raman method without perturbing the experimental apparatus. This was achieved via microwave spectroscopy. A schematic of the experimental setup is shown in ﬁgure 16.
The measurement procedure began with optical pumping of molecules into the H-state. The molecules travelled through the spin-precession region until it was entirely occupied by the molecule pulse. At this time, a π-pulse of microwaves at 2π × 39 GHz with nominal yˆ polarisation was applied counter-propagating to the molecule beam. When on resonance, this transferred population from |B(yˆ, N˜ , P˜) to |H, J = 2, M = 0, P˜ (excitation to (from) either P˜ (N˜ ) state was permitted) as shown in ﬁgure -
15. State readout was performed as usual (see section 3.1) by optically pumping with alternating polarisations xˆ and yˆ. The measured asymmetry (as deﬁned in equation 11) served as a measure of the microwave transfer eﬃciency. The x position of the molecules at the time of the microwave pulse was mapped onto their arrival time in the detection region

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

24

E = 0

M = –2

M = +2

M = –1

M = +1

J = 2

–+

M = 0

2D2 |E |

J = 1

2π × 39 GHz
yˆ
+–

2D1 |E |

Figure 15: The transition driven by microwaves during a measurement of the electric ﬁeld. We used yˆ-
polarised microwaves of frequency 2π × 39 GHz to drive a rotational transition between |H, J = 1 and
|H, J = 2 . The M = 0 levels are labelled with their parity. We applied a moderate E-ﬁeld such that ∆Ω D|E| BH where BH = 0.33 cm−1 is the rotational constant. The electric dipole moment of the J = 1 state D1 ≈ 2π × 1 MHz/(V/cm) ≈ 3D2.

943 nm

1090 nm

2π × 39 GHz v

π pulse

Horn

Optical Pumping

E, B 23 cm

State Readout xˆ, yˆ at 2π × 100 kHz

Figure 16: Experimental setup for spatial measurement of E via microwave spectroscopy. A molecular pulse (grey cloud) passed between the electric ﬁeld plates (light blue). The optical pumping laser beam transferred population from |X, J = 1 to an incoherent mixture of states in |H, J = 1 as described in section 3.2.4. When the pulse was centred in the spin-precession region, a microwave π-pulse was applied, driving population in H from J = 1 to J = 2 when resonant (dark blue region). The depletion-
 eﬃciency out of J = 1 was subsequently read out by laser induced ﬂuorescence as per the normal measurement scheme described in section 3.1. The time of arrival of the molecules in the state readout region encoded the position where they absorbed the microwaves.

and, with knowledge of the longitudinal molecular beam velocity, v , could be extracted. Thus, the spatial dependence of the resonant frequency, ωMW(x), was provided by the time-dependence of the asymmetry, A(t). Due to the DC Stark shift, ωMW was linearly proportional to the electric ﬁeld magnitude and |E(x)| could be directly extracted.
We observed a resonance linewidth of ≈2π × 25 kHz ≈ 2π/T which was limited by the microwave π-pulse duration of T = 40 µs. With our signal-to-noise, we were able to ﬁt the resonance centre to a precision of ∼2π ×1 kHz, typically using ∼50 detuning values and averaging over ∼50 molecule pulses per detuning value.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

25

Example data obtained via this method are shown in ﬁgure 17.

Frequency Shift (2π kHz)

-10 60 40 20
0 -20 -40 -60 -80
1.2

Position (cm)

-5

0

5

10

40 20 0 -20 -40 -60

1.0

0.8

0.6

0.4

0.2

0

Time After Microwave Pulse (ms)

E – 142500 (mV/cm)

A
0.7 0.6 0.5 0.4 0.3 0.2 0.1
0 -0.1 -0.2 -0.3

Figure 17: Colourmap: Plot of the asymmetry A induced by a microwave pulse as the frequency of the microwaves was scanned. Red data points: Plot of the corresponding reversing component of the electric ﬁeld obtained by extracting the centre of the resonance signal. The position is relative to the centre of the spin-precession region.
In these data, it is evident that the resonant frequency of the microwaves varied across the molecule pulse by around 2π × 60 kHz. The position x of the molecules at the time of the microwave pulse was assumed to be linearly related to the molecule arrival time in the state readout region. The observed spatial variation of E was roughly consistent with expectations based on the measured variation of the plate spacing described above.
By switching N˜ and E˜ between measurements of the E-ﬁeld we were able to extract Enr from the N˜ E˜-correlated component of ωMW. These measurements, shown in ﬁgure 18, were used to evaluate the corresponding systematic error in equation 89.
We clearly saw a non-uniform Enr across the spin precession region. The spatial variation shown in ﬁgure 18 was reproducible for the period of several weeks over which these measurements of the electric ﬁeld were taken. We are unsure as to the origin of the Enr but believe it may have been caused by patch potentials [98] present on the electric ﬁeld plates. We observed unexplained disagreement between the two measurement methods (Raman spectroscopy vs. microwave spectroscopy), but note that both r-
eport non-reversing ﬁelds of a few mV/cm with the same sign.
The mapping between arrival time in the detection region and x position during the microwave pulse was approximate, suﬀering from spatial averaging due to a variety of eﬀects. For example, velocity dispersion led to averaging of dx × σv /v , where σv is the longitudinal velocity spread of the molecular beam and dx is the distance between microwave interrogation and state readout. This averaging distance was largest, ≈1.6 cm, at the state preparation region. Spatial averaging also occurred across t-
he ≈0.7 cm distance traversed during the T = 40 µs microwave pulse. Finally, there was averaging of the spatial position of the molecules due

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

26

E nr (mV/cm)

-2

-2.5

-3

-3.5

-4

-4.5

-5

-5.5

-6

-6.5

-7

-10

-5

0

5

10

Position, x (cm)

Figure 18: A plot of the spatial variation of Enr. The black points are data obtained via microwave spectroscopy. The blue points are data obtained via Raman spectroscopy. The red data point was obtained by examining the variation of contrast with ∆prep. The approximate position of the state preparation (state readout) laser beam is shown as a red dotted line on the left (right) of the ﬁgure. For the microwave spectroscopy data the uncertainty/averaging range of the position is around 21 mm at the-
 left-hand side of the plot and decreases to around 13 mm at the right-hand side — see main text for details.

to the ﬁnite size of the state readout laser beam and the polarisation switching; molecules were optically pumped (with varying probability) throughout the ≈0.5 cm wide laser beam.
In addition to spatial averaging, uncertainty in the mean longitudinal velocity also contributed an uncertainty in position. Changes of ≈10 m/s between molecule pulses were quite typical over the course of the E-ﬁeld measurement, giving an estimated position uncertainty of 1 cm.
By adding the above contributions in quadrature we concluded that the range of positions from which the microwave-induced signals could have originated increased from around ≈1.3 cm at the state readout beam to ≈2.1 cm at the optical pumping beam. These ranges are shown as horizontal error bars at the extrema of position in ﬁgure 18.
We used a third method to measure E and Enr in situ throughout the eEDM dataset by performing ‘intentional parameter variation’ tests with large ∆prep (denoted by ‘c’ in ﬁgure 5). Detuning the state preparation laser resulted in a reduction in the measured contrast |C| as shown in ﬁgure 24 (B). Setting ∆prep ≈ ±2 MHz gives |C| ≈ 0.5, and the contrast was then approximately linearly proportional to ∆prep with a sensitivity of about 1/γC ≈ 1/(2π × 2 MHz). Any variation in the electric ﬁeld would cha-
nge the Stark shift, and thus also ∆prep, resulting in a change in contrast. Thus, using the previously described spin precession scheme, we indirectly measured parity components of the electric ﬁeld from the appropriate parity components of the contrast:

D1E nr(xprep)

≈

∂∆prep ∂C

CNE

D1E (xprep)

≈ωLN

+

∂

∆prep ∂C

C

N

.

(29) (30)

We looked for variation of E or Enr every 3–4 hours. Measurements of Enr were consistent with the microwave measurements, with a constant value Enr(xprep) = −4.8 ± 0.9 mV/cm. However, the mismatch ∆N = D1E − ωLN between the Stark shift D1E and the N˜ -correlated laser frequency shift, ωLN , was found to drift signiﬁcantly on the scale of around 2π × 20 kHz/day. This drift of ∆N was servoed by tuning ωLN after each measurement, ensuring ∆N < 2π × 30 kHz at all times [92], see sections 5.2.6 and 5.6-
 for more details.

3.2.6. Magnetic Fields Our experimental scheme did not require the application of a magnetic ﬁeld. This was not the case with some

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

27

previous eEDM experiments, where the magnetic ﬁeld was used to deﬁne a quantization axis [40, 41], or to

cause the precession of spin to a direction associated with maximum sensitivity [42, 99]. Instead we used the

electric ﬁeld to deﬁne a quantization axis, and we used the relative polarisations of the state preparation and

readout lasers to deﬁne the basis in which we read out the electron’s spin precession with maximal sensitivity.

However, we regularly applied a magnetic ﬁeld B in order to perform searches for systematic errors. The

phase accumulation induced by an eEDM δde ≈ 5 × 10−29 e · cm would have the same size as a Zeeman phase produced by a magnetic ﬁeld of B ≈ 0.2 µG, which is small compared to some of the magnetic ﬁeld

imperfections in the experiment. However, phases associated with magnetic-ﬁeld-induced precession were

distinguished from eEDM-induced precession by the use of the switches at our disposal (e.g. electric ﬁeld

reversal). Nevertheless, it was important to investigate, quantify and minimize the eﬀects of such magnetic

ﬁelds, as they could have coupled with other experimental imperfections to give eEDM-like phases.

Under normal operating conditions we ran the experiment at three diﬀerent magnetic ﬁeld magnitudes,

corresponding

to

a

relative

precession

phase

of

φB

≈

q

π 4

for

q

=

0, 1, 2.

The

required

z-component

of

the

ﬁeld

was then

Bz

= qB0B˜,

where

B0

=

π1 4 g1µBτ

≈ 20

mG.

We also

had

the

ability

to

apply transverse magnetic

ﬁeld components along xˆ and yˆ, and all ﬁve linearly independent ﬁrst-order gradients. The various coils that

we used are illustrated in ﬁgure 19.

Figure 19: A schematic of the magnetic ﬁeld coils used. The main coils consisted of rectangular cosine coils (orange) wound on the surface of a cylindrical plastic frame together with additional end coils (red) to correct for the low aspect ratio (length/diameter) in our system; a second set of these coils, mirrored in the xy plane, is not shown. Also wrapped around this frame are a pair of circular auxiliary coils shown in yellow. The other auxiliary coils are shown in blue and green and consist -
of rectangular coils above and below the vacuum chamber. See the main text for descriptions of the functions of all of the coils.
The primary magnetic ﬁeld, Bz, was produced by two sets of rectangular coils, shown in orange in ﬁgure 19. These were wound on the surface of two hemicylindrical plastic shells, on the ±z sides of the spinprecession region. The coils were designed to maximize ﬁeld uniformity and minimize distortion due to the boundary conditions imposed by the magnetic shielding. It was also possible to apply a ∂Bz/∂z gradient with these coils. Two end coils (red in ﬁgure 19), located on the ±x ends of the spin-pr-
ecession region, enhanced the uniformity of the B-ﬁeld along x and enabled application of a ∂Bz/∂x. The main coils were powered by two separate commercial power supplies†, and the end coils were powered by custom power supplies. The current ﬂowing through these coils was continuously monitored throughout the course of the experiment by
† Krohn-Hite 521/522

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

28

Table 1: A summary of the magnetic ﬁelds and magnetic ﬁeld gradients that we could produce. The coil colours refer to ﬁgure 19.

Coil colour
Orange Red
Yellow Blue Green

Fields produced
Bz Bz Bx By By

Field gradients produced
∂ Bz /∂ z ∂Bz/∂x, ∂Bz/∂z
∂Bx/∂x ∂By/∂y, ∂By/∂z ∂By/∂x, ∂By/∂y

measuring with a digital multimeter the voltage dropped across precision resistors. We used three sets of auxiliary magnetic ﬁeld coils in systematic error searches. A pair of circular
Helmholtz coils (yellow in ﬁgure 19) were wrapped around the same frame used for the main coils and were formed from ribbon cable. They provided a magnetic ﬁeld in the ±xˆ directions and could also provide a ∂Bx/∂x. Above and below the spin-precession region chamber (±y) there were four sets of rectangular coils (blue and green in ﬁgure 19). These allowed us to produce a ﬁeld in the ±yˆ directions as well as all three associated ﬁrst-order gradients. Note that the three ﬁrst-order magnetic ﬁeld gr-
adients that we could not apply could be inferred from Maxwell’s equations. A summary of the ﬁelds that we could apply is given in table 1.
Several measures were taken to minimize stray magnetic ﬁelds aﬀecting the molecules. The simplest was to ensure no magnetized objects were placed within the spin-precession region. To ensure this, all components were fabricated from non-magnetic materials (e.g. no stainless steel). The magnetization of all objects was also checked before installation by passing them across an AC-coupled magnetometer sensitive to 0.1 mG ﬁeld variations.
The ambient B-ﬁeld in the laboratory was dominated by that from the Earth’s core (∼500 mG approximately along xˆ + yˆ). To suppress this and other DC/low-frequency ﬁelds, the spin-precession region was surrounded by a set of ﬁve concentric cylindrical magnetic shields constructed from ≈1.6 mm thick mumetal†. Each layer of shielding should have provided around a factor of 10 reduction in the DC magnetic ﬁeld [67]; however, residual magnetisation of the mu-metal was found to limit the ﬁeld component-
s to 20 µG for Bx and By, and 500 µG for By. ‡ Each shielding layer was divided into two half-cylinders and two end caps. The outermost (innermost) shield was 132 cm (86 cm) long and had a diameter of 107 cm (76 cm). These shields had holes to allow lasers to pass through in the z direction, and to accommodate the molecule beam. There were also holes for the light pipes to extract molecule ﬂuorescence, and some electric connections, in the x direction. Measurements and simulations showed that thes-
e holes had a negligible impact on the shielding eﬃciency. The shielding factor remained approximately constant up to an AC frequency ∼ 2π × 3 GHz for which the wavelength becomes comparable to the size of any apertures in the shields, ∼10 cm, and the magnetic ﬁeld noise starts to penetrate the shields. However, our measurement was only sensitive to magnetic ﬁeld noise at frequencies up to roughly the inverse of the spin precession time 1/τ ≈ 2π × 1 kHz [77]. The aluminium vacuum chamber also shie-
lded AC magnetic noise above a frequency ∼1/πσt2µ ≈ 2π × 100 Hz, where σ ≈ 3.5 × 107 S/m is the electrical conductivity, t ≈ 1 cm is the thickness and µ is the permeability ≈µ0, the vacuum permeability [100, 101].
The relatively large (B ∼ 10 mG) ﬁelds applied by the Bz coils caused the inner magnetic shields to become slightly magnetized, inducing a non-reversing magnetic ﬁeld, Bnr ≈ 30 µG. In order to suppress this remanent ﬁeld we performed a degaussing procedure on the magnetic shields by passing a 200 Hz sinusoidal current through sets of loosely wound ribbon cable coils which wrapped axially (in the xy plane at z = 0) between the shield layers. The maximum current amplitude was 1 A, suﬃcient to drive -
the mu-metal to saturation, and the amplitude was decreased with an exponential envelope over a period of 1 s. To fully degauss all layers of the magnetic shielding takes around 4 s. There was also a 1 s period of ‘dead time’ during which the main magnetic ﬁeld was turned back on and allowed to settle. This degaussing procedure
† Amuneal Inc. ‡ We later found that the residual By could be reduced to a level comparable to Bx and Bz by performing degaussing with a higher current.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

29

was repeated every time the applied magnetic ﬁeld was changed, which occured approximately every 40 s. Variations in the magnetic ﬁelds present were continuously measured throughout the experimental
procedure. This was achieved using a set of four three-axis ﬂuxgate magnetometers†, which were mounted in a tetrahedral conﬁguration outside the spin-precession region vacuum chamber (but inside the magnetic shielding). We also used an additional ﬂuxgate magnetometer which was positioned at a distance of around 1 m from the apparatus and outside of the magnetic shielding. By continuously recording the measurements provided by these magnetometers we were able to search for correlations of our data -
with the magnetic ﬁeld present. In particular, we checked for the presence of a magnetic ﬁeld correlated with the electric ﬁeld, BE , which would have been characteristic of a leakage current ﬂowing between the electric ﬁeld plates — an eﬀect known to contribute a signiﬁcant systematic error in previous eEDM experiments [68, 99].

B=I (mG/mA)

1.3

1.25
1.2
10 5 0 -5
-10 -15 -20
-20

Bz

Bx By

-10

0

10

x (cm)

0.8

0.7

0.6

0.5

Bnr (mG)

0.4

0.3

Bznr

Bxnr

Bynr

0.2

0.1

0

-0.1

-0.2

20

-20

-10

0

10

20

x (cm)

B=I (7G/mA)

Figure 20: Magnetic ﬁeld data taken with a ﬂux-gate magnetometer passed along the molecular beam line. The left-hand plot shows the reversing components of ﬁeld whilst a nominal Bz was applied. The right-hand plot shows the corresponding non-reversing components. The data are ﬁt by polynomial curves.

Additional measurement of the magnetic ﬁelds was carried out by opening the vacuum system and
passing a rotatable ﬂux-gate magnetometer into the chamber. This allowed for measurement of the ﬁelds
directly along the beam line. The freedom to rotate the magnetometers was crucial to distinguish between electronic oﬀsets and Bnr for ﬁelds 1 mG. From these measurements we were able to directly characterise
most of the magnetic ﬁelds and ﬁrst-order ﬁeld gradients, including non-reversing components. Example data
obtained from these measurements are shown in Figure 20. We saw that the applied ﬁelds were all ﬂat to within 1 mG, and the non-reversing components, with the exception of Bynr, were less than 50 µG. Systematic uncertainty due to these ﬁelds is discussed in section 5.7.

3.2.7. Fluorescence Collection and Detection As previously described, our experimental data consisted of laser-induced molecule ﬂuorescence, emitted in all directions (with a well-deﬁned angular distribution [62]) when the molecules were interrogated by the state readout laser beam. The apparatus for collecting this light is illustrated in ﬁgure 21. The ﬂuorescence light passed through the transparent electric ﬁeld plates, whose inner (outer) faces are ITO (anti-reﬂection [AR]) coated. Behind each-
 ﬁeld plate was a set of four AR-coated lens doublets, which collimated and then focussed the light. The optical axes of the doublets intersected a ray path from the centre of the ﬂuorescing
† Bartington Mag-03.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

30

z

x

y

60 cm
Lens doublet

Readout laser beam

38 cm

Field plate

Fiber bundle

Figure 21: Fluorescence collection apparatus. Left: The mounted electric ﬁeld plates are shown together with one of the two sets of four lens doublets. The mounting for the top-left doublet has been removed to show the lenses. The ﬁber bundles are shown schematically, fastened into the lens tubes behind the doublets. The lens assembly was mounted on rails and the entire assembly sat on a breadboard which was fastened to the vacuum chamber. The view on the right also shows the approximate position -
of the state readout laser beam as it passes through the apparatus.
molecule region, accounting for refraction through the electric ﬁeld plates. The ﬁrst (second) lens of each doublet was a 75 mm† (50 mm‡) diameter spherical lens of focal length 50 mm (35 mm). On each side (±z), each of the four lens doublets focussed light onto one of four sections of a ‘quadfurcated’ ﬁber bundle§ whose input ends were 9 mm in diameter and fastened in lens tubes. The output of the ﬁber bundle was connected to a 19 mm diameter fused quartz light pipe with optical couplant gel in b-
etween. The light pipe passed out of the spin-precession region vacuum chamber and magnetic shields and directed the light onto a PMTP. Bandpass ﬁlters+ were used to suppress backgrounds from e.g. scattered light. Detailed tests of the light collection were carried out [92] which estimated that ≈14 % of the ﬂuorescence photons were collected. The major contributions to this eﬃciency were the ﬁnite solid angle subtended by the collection lenses (≈50 %), ﬁnite coupling eﬃciency into ﬁber bundles (≈6-
0 %) and ﬁnite coupling eﬃciency between the ﬁber bundles and the light pipes (≈50 %). In addition, the quantum eﬃciency of the PMT’s was speciﬁed to be ≈10 %, which further reduced the signal obtained.
3.2.8. Data Acquisition The data acqusition system performed the following three functions:
(i) Digital modulation of the experimental parameters necessary for acquiring the complete set of phase and contrast measurements required to extract the eEDM, as described in section 3.1.2.
(ii) Rapid (5 MSa/s) acquisition and storage of high-bandwidth ﬂuorescence waveforms for the spin precession measurement.
(iii) Monitoring and logging of experimental parameters useful for checking the experimental state and for searching for systematic errors (e.g. magnetic ﬁelds, beam source temperatures).
All functions were coordinated with a LabVIEW-based software system.
† CVI Melles Griot LAG-75.0-50.0-C-SLMF-400-700. ‡ CVI Melles Griot LAG-50.0-35.0-C-SLMF-400-700. § Fiberoptic Systems.
Corning Q2-3067. P Hamamatsu R8900U-20. + Semrock FF01-689/23-25-D.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

31

Data acquisition timing was controlled by a digital delay generator.† Every 20 ms, a TTL signal was produced which triggered the ablation laser Q-switch, in turn creating a pulse of molecules. Molecule ﬂuorescence signals, measured as a PMT photocurrent, were captured on a 20-bit digital oscilloscope‡. The oscilloscope was triggered 6–7 ms after the ablation pulse, depending on the current molecule beam forward velocity, and recorded a 9 ms window of signal containing the entire molecule signal (1-
–2 ms) and several ms of background. The 100 kHz square wave that drove the fast polarisation switching of the state readout laser was synchronised with the 50 Hz Q-switch trigger so that the relative phase was ﬁxed. The 5 MSa/s data rate of the oscilloscope enabled resolution of the time-dependent structure within each 5 µs polarisation bin; this structure could vary on timescales as short as the C-state lifetime 1/γC ≈ 500 ns [65].
Signal waveforms, S(t), were captured from two PMTs — note that we were not counting individual photoelectrons, but instead ampliﬁed and read out a voltage proportional to the count rate. These waveforms were then transferred to the control PC where they were digitally averaged over 25 pulses to form one ‘trace’. The traces were then written to a hard drive. A ﬁle containing auxiliary measurements was recorded synchronously with each ﬂuorescence trace. This ﬁle included the states of the experimen-
tal switches and other auxiliary measurements such as E-ﬁeld voltages, B-ﬁeld currents, laser power and polarisation, magnetic ﬁeld measurements, molecular beam buﬀer gas ﬂow rate, buﬀer gas cell temperature, and the temperature, pressure and humidity in our lab. This data proved useful in searching for systematic errors as described in section 5.

4. Data Analysis
In this section we describe the data analysis routine used to extract the eEDM value, and other quantities, from our dataset of nearly 106 PMT ﬂuorescence traces. The entire analysis was implemented with a ‘blind’ oﬀset on the eEDM channel such that the channel’s mean value was not known until after all the data had been acquired and the systematic error in the measurement had been determined. No analysis changes were made after the blind was revealed. Several data cuts were applied (before remova-
l of the blind) to ensure that the resulting eEDM measurements would be nearly normally distributed and to ﬁlter data that was not taken under normal operating conditions.

4.1. Signal Asymmetry
As described in section 3.1, the accumulated phase Φ was read out by resonantly addressing the H → C transition with linearly polarised light and monitoring the resulting ﬂuorescence. The state readout laser was switched between orthogonal polarisations, Xˆ and Yˆ , at 100 kHz (with 1.2 µs of dead time between polarisations) in order to normalize against molecular ﬂux variations. By switching at a rate fast enough that each molecule experienced both polarisations, we achieved nearly photon-shot-no-
ise-limited phase measurements [62]. With a suﬃciently wide laser beam, all molecules were completely optically pumped by both laser polarisations during their ∼20 µs ﬂy-through time. We induced approximately one ﬂuorescence photon from each molecule by projecting the molecule state onto the two orthogonal spin states excited by laser beams with orthogonal polarisations.
The rapid switching of the laser polarisation resulted in a modulated PMT signal, S(t), as shown in ﬁgure 22. For the following discussion we consider the polarisation state to switch at a time t = 0. Immediately after, there is a rapid increase in ﬂuorescence as the molecules in the laser beam are quickly excited; while Ωrt 1, where Ωr ∼ 2π × 1 MHz is the Rabi frequency on the H to C transition, the ﬂuorescence increases as S(t) ∝ Ω2r × t2. At later times, when Ωrt 1, population is about evenly m-
ixed between the H and C states (since Ωr γC); hence, S(t) decays exponentially with a time constant of roughly 1/(2γC) ≈ 1 µs. Molecules that were not present at t = 0 continue to enter the laser beam, causing S(t) to approach a steady state. The laser is then turned oﬀ and the signal decays exponentially with time constant 1/γC ≈ 0.5 µs. The next laser pulse, with orthogonal polarisation, is turned on 1.2 µs ≈ 2.5/γC after the end of the previous one to prevent signiﬁcant overlap of contribution-
s to S(t) induced by diﬀerent polarisations. A low-pass ﬁlter in the PMT voltage ampliﬁer with a cut-oﬀ frequency of 2π × 2 MHz removed
† SRS DG645. ‡ National Instruments PXI-5922.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

32

any short timescale dynamics from S(t), and prevented aliasing of high frequency components in the signal given our ﬁxed digitization rate of 5 MSa/s.
To determine the ﬂuorescence F (t) produced by each polarisation state, we subtracted a time-dependent background, B(t ), taken from data with no molecule ﬂuorescence present, i.e. F (t) = S(t)−B(t ). Examples of the extracted F (t) and B(t ) time series are shown in ﬁgure 22A and B, respectively. B(t ) was modulated in time due to scattered light from the state readout laser beam and has a DC electronic oﬀset intrinsic to the PMTs. The ﬁrst millisecond of data, which contains no ﬂuorescence, was -
used to determine B(t ). We assumed that B(t ) was periodic with the switching of the laser polarisation but did not depend on the polarisation; we inferred its value by averaging together the recorded PMT signal across all polarisation bins for ≈1 ms of data taken before the arrival of the molecule pulse. Since molecule beam velocity variations caused jitter in the temporal position of the molecule pulse within the trace, 9 ms of data were collected per pulse, despite the fact that only the ≈2 ms-
 of strong signal with F (t) B(t ) and ≈1 ms of background contained useful information for the spin precession measurement.
Integrating F (t) over times associated with pairs of orthogonally polarised laser pulses resulted in signals FX , FY . The integration was performed over a speciﬁed time window that we denoted as a ‘polarisation bin’. Figure 26B shows two typical choices of polarisation bin and illustrates that the extracted eEDM is not signiﬁcantly aﬀected by this choice. Figure 35 shows that most of the extracted quantities did not vary linearly within the polarisation bin (Pol. Cycle Time Dependence column).
After polarisation binning, the data displayed a ﬂuorescence signal modulated by the envelope of the molecule pulse, as in ﬁgure 22C. Figure 22D shows the asymmetry, A, computed from these data. The asymmetry is computed for each 10 µs polarisation cycle, so that for the ith cycle we have

Ai

=

FX,i FX,i

− +

FY,i FY,i

.

(31)

The molecule phase, and hence asymmetry (see equation 11), had a linear dependence on the time after ablation because the molecules precessed in a magnetic ﬁeld over a ﬁxed distance; the slower molecules, which arrive later, precessed more than the faster molecules, which arrived earlier. We applied a ﬂuorescence signal threshold cut of around F = (FX + FY )/2 ≥ 3 × 105 s−1, indicated by dashed lines in ﬁgure 22C,D. Section 4.3 describes the threshold choice in detail.
To determine the statistical uncertainty in A, n ≈ 20–30 adjacent asymmetry points were grouped together. For each group, j, centred around a time after ablation tj, we calculated the mean, A¯j, and the uncertainty in the mean, δA¯j, depicted as red points and error bars in ﬁgure 22D. For smaller n, the variance in the sample variance in the mean grows, in which case, error propagation that utilises a weighted mean of data ultimately leads to an understimate of the ﬁnal statistical uncertainty [10-
2]. For larger n, the mean signiﬁcantly varies within the group due to velocity dispersion, and the variance in the mean grows in a manner not determined by random statistical ﬂuctuations. For the range n = 20–30 we observed no signiﬁcant change in any quantities which were deduced from the measured asymmetry.
As described earlier in this section, the background, B(t ), which we subtracted from the PMT signal, S(t), was observed to be correlated with the fast switching of the readout laser beam polarisation. This can arise, for example, if the two polarisations have diﬀerent laser beam intensities or pointings. We chose to use a polarisation independent B(t ) by averaging over the two polarisation states. This produced an asymmetry oﬀset as per equation 31 and hence a signiﬁcant Φnr associated with the -
polarisation-dependent background. However, we did not consider Φnr to be a crucial physical or diagnostic quantity. We found that this methodology produced accurate estimates of the uncertainties of quantities computed from the measured asymmetry, as veriﬁed by χ2 analysis of measurements of ΦN E . We also found that none of the phase channels of interest changed signiﬁcantly dependent on whether a polarisation-dependent B(t ) was used.

4.2. Computing Contrast and Phase
To compute the measured phase Φ we must also measure the fringe contrast C and relative laser polarisation angle θ = θread−θprep, as described in section 3.1. The Xˆ and Yˆ laser polarisations were set by a λ/2 waveplate and were determined absolutely by auxiliary polarimetry measurements [65]. The contrast, deﬁned as either

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

33

F(t) (103 s−1 )

B(t) (103 s−1 )

    
     (A)

    

    

    

   

   

   

     

Xˆ  laser on

Yˆ laser on

Xˆ  laser on

Yˆ laser on

Xˆ  laser on

Yˆ laser on

                                         

Time After Ablation  t (ms)

   
    (B)

   

   

   

   

  

     Xˆ  laser on Yˆ laser on Xˆ  laser on Yˆ laser on Xˆ  laser on Yˆ laser on

     

     

     

     

     

     

Time After Ablation  t (ms)

    

    (C)
   

FX FY

       

     
 

  

  

  

  

  

Time After Ablation  t (ms)

FX,Y(t) (103 s−1 )

Asymmetry  A(t)

    (D)
                           
 

8QJURXSHG $V\PPHWU\ *URXSHG $V\PPHWU\

  

  

  

  

  

Time After Ablation  t (ms)

Figure 22: (A) Molecule ﬂuorescence signal F (t) in photoelectrons/s induced by Xˆ (blue) and Yˆ (red) readout laser polarisations. Lines show the raw data for a single trace consisting of an average of 25 molecule pulses. Shaded regions show the waveform averaged over 16 traces. (B) Background signal B(t ) in photoelectrons/s obtained before the arrival of molecules in the state readout region. (C) Integrated ﬂuorescence signals FX and FY throughout the molecule pulse. Dashed lines denote the reg-
ion with F = (FX + FY )/2 > 3 × 105 s−1, used as a typical cut for inclusion in eEDM data. Points are spaced by 5 µs. (D) Computed asymmetry throughout the molecule pulse. In this example, 18 of the ungrouped asymmetry points are grouped together to compute the mean and uncertainty shown as the grouped asymmetry.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

34

2C = −∂A/∂θ or 2C = ∂A/∂φ†, can be determined by dithering either the accumulated phase φ (by varying Bz) or the relative laser polarisation angle θ. We chose the latter as it could be changed quickly (< 1 s) by rotating a half-wave plate with a stepper-motor-driven rotation stage. Figure 23 shows the asymmetry as a function of θ, for a range of values of applied magnetic ﬁeld. We ran the experiment at the steepest part of the asymmetry fringe (where θ = θnr) and measured the contrast, Cj, for eac-
h asymmetry group, A¯j, by switching θ between two angles, θ = θnr + ∆θθ˜, for θ˜ = ±1 and ∆θ = 0.05 rad:

Cj

=

− A¯j(θ˜

=

+1) − A¯j(θ˜ = 4∆θ

−1) .

(32)

0.80 B = −20 mG B = 0 mG B = +20 mG
B = ±40 mG 0.40

−∆θ +∆θ θnr

−∆θ +∆θ θnr

Asymmetry, A

0

−0.40

−0.80

−0.70

−0.35

0

0.35

0.70

Relative laser polarization angle, θ = θread − θprep (rad)

Figure 23: Asymmetry vs. relative laser polarisation angle θ = θread − θprep for several magnetic ﬁeld values. The value of θ was dithered about the value θnr by ±∆θ = ±0.05 rad to measure fringe contrast, C. To stay on the steepest part of the fringe, we chose θnr = 0 rad for B = ±20 mG and θnr = π/4 rad for B = ±1, ±40 mG. For these data |C| < 90% due to low preparation laser power; typically, however, |C| ≈ 95%. Solid lines
represent the expected behaviour for a given magnetic ﬁeld and contrast.

Because the fringe contrast was fairly constant over the duration of the molecule pulse (ﬁgure 24A), we used a weighted average‡ of all Cj measurements within the cut region for that trace to extract the accumulated phase. We also performed the analysis by ﬁtting Cj to a 2nd-order polynomial as a function of time during the ablation pulse; this led a better ﬁt to the data, but had no signiﬁcant eﬀect on the results. We typically found |C| ≈ 95%. We believe that this was limited by a number of eﬀec-
ts including: imperfect state
preparation/readout, decay from the C state back to the H state and dispersion in the spin precession. We also observed that this value was constant over a ±2π × 1 MHz detuning range of the state preparation laser (ﬁgure 24B), indicating complete optical pumping over this frequency range. Recall that, as deﬁned, C can
be positive or negative, depending on the sign of the asymmetry fringe slope (see ﬁgure 23, or equation 32). Given that we worked near zero asymmetry where the fringe slope was steepest, and that θnr was always
chosen to be 0 or π/4, we computed the total accumulated phase as

Φj

=

A¯j(θ˜ =

+1) + A¯j(θ˜ = 4C

−1)

+

q

π 4

.

(33)

Here, q = 0, ±1 or ±2, corresponds to applied magnetic ﬁelds of ±1, ±20, and ±40 mG, respectively. We chose to apply a small magnetic ﬁeld, B = 1 mG when operating at q = 0 rather than turning oﬀ the

† Recall that in practice we consider C as an unsigned quantity for the purposes of data analysis. ‡ Each Cj measurement is weighted by its computed uncertainty.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

35

magnetic ﬁeld completely so that we would not need to change the experimental switch sequence or data analysis routine for data taken under this condition. Figure 23 illustrates the correspondence between θnr
and applied magnetic ﬁeld needed to remain on the steepest part of the asymmetry fringe.

Contrast, C Contrast, C

(A) 1.2
1.1

1.0

0.9

0.8

0.7

0.6

0.5

9

Cut Region

10

11

12

Time After Ablation (ms)

(B) 1

0.9

0.8

0.7

0.6

0.5

-3

-2

-1

0

1

2

3

Prep. Laser Detuning, ∆prep (2π× MHz)

Figure 24: (A) Contrast vs time after ablation, averaged over 64 traces. The signal threshold window is
indicated by dashed lines (cf. ﬁgure 22). (B) Contrast vs preparation laser detuning. Error bars were
computed as the standard error associated with 64 averaged traces. The solid line is a ﬁt of the form C = a × tanh(bγC2 /(4∆2prep + γC2 )), motivated by solution of a classical rate equation.

4.2.1. Accounting for Correlated Contrast
It was possible for the magnitude of the contrast |C| to vary between diﬀerent experimental states. For example, if the state preparation laser detuning or ﬂuorescence signal background were correlated with any of the block switches N˜ , E˜, or B˜, then contrast would also be correlated with those switches. As described in section 5, we observed both N˜ - and N˜ E˜-correlated contrast. The latter was particularly troubling since it could lead to a systematic oﬀset in the measured eEDM if not prope-
rly accounted for: since A = −C cos[2(φ − θ)], a nonzero AN E could occur due to either CN E or φN E . We accounted for contrast correlations by calculating C separately for each combination of N˜ , E˜, and B˜ experimental states (‘state-averaged’ contrast†):

Cj (N˜

,

E˜,

B˜)

=

−

A¯j (θ˜

=

+1,

N˜

,

E˜,

B˜) − A¯j(−θ˜ 4∆θ

=

−1,

N˜

,

E˜,

B˜)

.

(34)

As previously discussed, we averaged or applied a quadratic ﬁt to all Cj(N˜ , E˜, B˜) within a molecule pulse to

compute C¯j(N˜ , E˜, B˜). The precession phase was calculated from each state-speciﬁc asymmetry and contrast

measurement (cf. equation 32):

Φj(N˜ , E˜, B˜)

=

A¯j(N˜ , E˜, B˜) 2C¯j(N˜ , E˜, B˜)

+

q

π 4

,

(35)

where

A¯j(N˜ , E˜, B˜)

=

A¯j (θ˜

=

+1, N˜ , E˜, B˜)

+ 2

A¯j(θ˜ =

−1, N˜ , E˜, B˜)

(36)

is the average asymmetry over the two θ˜ states in a data block that share identical values of N˜ , E˜ and B˜. By construction, phases computed from state-averaged contrast are immune to contrast correlations. We also computed phases by ignoring contrast correlations (i.e. treating contrast as independent of N˜ , E˜, B˜) and the result did not change signiﬁcantly.

† Since there were 23 = 8 diﬀerent N˜ , E˜, and B˜ states in each 64-trace block, 64/8 = 8 traces were averaged together to determine the contrast for each experimental state.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

36

4.2.2. Computing Phase and Frequency Correlations After extracting the measured phase Φj(N˜ , E˜, B˜), we performed the basis change described in equation 23, from this experiment switch state basis to the experiment switch parity basis, denoted by Φpj , where p is a placeholder for a given experiment switch parity.
We observed that the molecule beam forward velocity, and hence the spin precession time τj, ﬂuctuated by up to 10% over a 10 minute time period. Since Bz and g1 are known from auxiliary measurements to a precision of around 1%, we were able to extract τj from each block from the Zeeman precession phase measurement, ΦBj = −µBg1Bzτj (see section 3.1.2). Velocity dispersion caused τj to vary across the molecule pulse with a nominally linear dependence on time after ablation, t, however we observed si-
gniﬁcant deviations
from linearity. Thus, we ﬁt τj to a 3rd order polynomial in t in order to evaluate τ¯j. Then, we evaluated the measured spin precession frequencies deﬁned as

ωjp = Φpj /τ¯j ,

(37)

for all phase channels p (see equation 22 for deﬁnition). We extracted the eEDM from ωjN E , which in the absence of systematic errors would be given by ωN E = −deEeﬀ independent of j.
From here on we will drop the j subscript that denotes a grouping of n adjacent asymmetry points about
a particular time after ablation tj; it is implicit that independent phase measurements were computed from many separate groups of data, each with diﬀerent values of tj across the duration of the molecule pulse. At the end of the analysis, and whenever it was convenient to do so, we implicitly performed weighted averaging
across the j subscript.

6

5

4

ωN B (rad/s)

3

2

1

0
0 12 34 567 8 BzE (G × V/cm)
Figure 25: The diﬀerence between magnetic moments of the two Ω-doublet levels as measured by ωN B. As expected, this phase component scales linearly with E and Bz. The constant of proportionality is ηµB. Reproduced with permission from [57]

Other phase channels couuld be used to search for and monitor systematic errors, discussed in detail

in section 5, or to measure properties of ThO, as is the case with ωN B. We discuss the latter case here. This channel provided a measure of ∆g, the magnetic moment diﬀerence between upper and lower N˜ -levels,

arising from perturbations due to other electronic and rotational states [57, 76]. Because this diﬀerence limits the extent to which the N˜ reversal can suppress certain systematic errors [67], it is an important quantity

both in our experiment and in other experiments measuring eEDMs in molecules with Ω-doublet structure

[103]. Figure 25 illustrates an observed linear dependence ∆g/2 = ηE, as predicted [57, 76]. Since E and Bz are precisely known from auxiliary measurements, the constant η can be directly calculated from our angular

frequency measurements:

η

=

−

ωN B µBE Bz

.

(38)

Our measured value of η = −0.79 ± 0.01 nm/V was approximately half of what one would compute using the methods developed to understand the eﬀect in the PbO molecule [76, 104]. This discrepancy was subsequently

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

37

understood as being primarily due to coupling to other ﬁne-structure components in the 3∆ manifold [57, 64]. The ωN B channel illustrates the importance of understanding phase channels besides that corresponding to
the eEDM.

4.3. Data Cuts
Three data cuts were applied as part of the analysis: ﬂuorescence rate threshold (see section 4.1), polarisation bin (see below), and contrast threshold (see below). These cuts made sure that we only used data taken under appropriate experimental conditions (e.g. only when lasers remained locked etc.) and thus ensured a high signal to noise ratio for the data used to extract the eEDM value. We thoroughly investigated how each of these cuts aﬀected the calculated eEDM mean and uncertainty.
As previously mentioned, a ﬂuorescence threshold cut of about Fcut = 3 × 105 s−1, was applied to each trace (average of 25 molecule pulses) to ensure that the ﬂuorescence rate would always be larger than the background rate. This threshold was chosen to include the maximum number of asymmetry points in our measurement while also excluding low signal-to-noise asymmetry measurements that would increase the overall eEDM uncertainty, as described below. We also removed entire blocks (complete sets of -
N˜ ,E˜,B˜,θ˜) of data from the analysis if any of the block’s experiment states had 0.5 ms of ﬂuorescence data above Fcut.
The count rates of uncorrelated ﬂuorescence photoelectrons exhibit Poissonian statistics. In each block we averaged together four traces with the same experimental conﬁguration. After such averaging, the number of detected photoelectrons within a pair of laser polarisation bins was 50, which was large enough that the photoelectron number distribution closely resembled a normal distribution. Because the asymmetry was deﬁned as a ratio of two approximately normally distributed random variables (FX −-
 FY and FX + FY ), its distribution was not necessarily normal. Rather, it approached a normal distribution in the limit of large FX + FY [64]. The same followed for all quantities computed from the asymmetry, including the eEDM. The ﬂuorescence threshold cut therefore ensured that the distribution of eEDM measurements was very nearly normally distributed. Including low-signal data would have caused the distribution to deviate from normal and increase the overall uncertainty. To check that this si-
gnal size cut did not lead to a systematic error in our determination of de, the eEDM mean and uncertainty were calculated for multiple Fcut values, as shown in ﬁgure 26. If the cut was increased above 6 × 105 s−1 the mean value was seen to move slightly (but within the computed uncertainties), and the uncertainty to increase. However, for all plausible values of the cuts the resulting value of de was consistent, within uncertainties, with our ﬁnal stated value.
As described in section 4.1, data points within a polarisation bin were averaged together when calculating the asymmetry (cf. ﬁgure 22A). These data points were separated by 200 ns. Numbering these points from when the readout laser beam polarisation is switched, we binned points 5–20 or points 0–25, depending on the analysis routine (see section 4.4 below) when reporting our ﬁnal result. The former choice was made to cut out background signal and overlapping ﬂuorescence between polarisation state-
s while retaining as much of the ﬂuorescence signal as possible whereas the latter was chosen to minimize the statistical uncertainty given the lack of evidence for systematic errors that depended on time within the polarisation switching cycle. As shown in ﬁgure 26, we checked for systematic errors associated with this choice by also using several diﬀerent polarisation bins to compute the eEDM. The eEDM uncertainty increased, as expected, for polarisation bins that cut out data with signiﬁcant ﬂu-
orescence levels, but the mean values were all consistent with each other within their respective uncertainties.
In order for a block of data to be included in our ﬁnal measurement, we also required that each of the 8 (N˜ , E˜, B˜) experiment states had a measured fringe contrast above 80%. The primary cause of blocks failing to meet this requirement was the state preparation laser becoming unlocked. This cut resulted in less than 1% of blocks being discarded. If the contrast cut was lowered, or not applied at all, the eEDM mean and uncertainty change by less than 3% of our statistical uncertainty. As with t-
he signal threshold, if this cut threshold was increased to 90%, close to the average value of contrast, C, then a larger fraction of data was neglected and the eEDM uncertainty was seen to increase.
For all the cuts discussed, we signiﬁcantly varied the associated cut and in some cases removed it entirely. The eEDM mean and uncertainty were very robust against signiﬁcant variation of each of these cuts, and the cuts were chosen before the blind oﬀset applied to the eEDM channel was removed.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

38

(A) 10

!N E (mrad/s)

0

-10

-20 0
(B) 20
10

100 200 300 400 500 600 700 800 900 1000
Count Rate Cut (1000 s–1 )

!N E (mrad/s)

0

-10

-20

-30
Polarization Bin

Figure 26: Measured eEDM mean and uncertainty as a function of (A) ﬂuorescence signal threshold and (B) polarisation bin size and position. For the former, a value of 3 × 105 s−1 was used for the ﬁnal result. For
the latter, the two leftmost data points correspond to the polarisation bins used.

4.4. Diﬀerences Between Data Analysis Routines
As a systematic error check, we performed three independent analyses of the data. Each routine followed the general analysis method described above, but varied in many small details such as background subtraction method, cut thresholds, numbers of points grouped together to compute asymmetry, polarisation bin choice, etc. The analyses diﬀered in the polynomial order of the ﬁts applied to both the contrast C and the precession time τ vs. time after ablation t. The analyses also diﬀered in the inclu-
sion of a subset of the eEDM data that featured a particularly large unexplained signal in the ωN channel.
Each of the three analyses independently computed the eEDM channel and the systematic error in the eEDM channel. The uncertainties for all three routines were nearly identical, and the means agreed to within ∆ωN E < 3 mrad/s, which is within the statistical uncertainty of the measurement δωN E = ±4.8 mrad/s. The eEDM mean and uncertainty were averaged over the three analyses to produce the ﬁnal result.
4.5. EDM Mean and Statistical Uncertainty
The ﬁnal data set used to report our result is shown in ﬁgure 27. It consisted of ∼104 blocks of data taken over the course of ∼2 weeks (ﬁgure 27B); each block contains ≈20 separate eEDM measurements distributed over the duration of the molecule pulse (Figure 27A). All ≈2 × 105 measurements were combined with standard Gaussian error propagation to obtain the reported mean and uncertainty. Figure 27C,D shows histograms of all measurements on a linear (C) and log (D) scale, showing the distribution -
agrees extremely well with a Gaussian ﬁt. The resulting uncertainty was about 1.2 times that expected from the photoelectron shot-noise limit, taking into account the photoelectron rate from molecule ﬂuorescence, background light, and PMT dark current. When the eEDM measurements were ﬁt to a constant value, the reduced χ2 was 0.996 ± 0.006 where this uncertainty represents the 1σ width of the χ2 distribution for the appropriate number of degrees of freedom.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

39

x 10-26 15
(A)
7.5

Cut region

2500 (C)
2000

Number of Occurrences

EDM (e cm)

0

-7.5

15

9

10

11

12

Time After Ablation (ms)

x 10-26
1.5 (B)
1.0

0.5

0

. . . . . . . . .

-0.5

-1.0

-1.5

20

40

60 . . . . . . . . . 10,640 10,660 10,680

Block Number

Number of Occurrences

1500 1000 500
0 -4 -3 -2 -1 0 1 2 3 4
Standard Errors from Mean
1000 (D)
100
10
1
-4 -3 -2 -1 0 1 2 3 4
Standard Errors from Mean

EDM (e cm)

Figure 27: The data set associated with our reported eEDM limit. (A) Variations in the extracted eEDM as a function of position within the molecular pulse. (B) Over 10,000 blocks of data were taken over a combined period of about two weeks. (C)-(D) The distribution of ∼200,000 separate eEDM measurements (black) matches very well with a Gaussian ﬁt (red). The same data is plotted with both a linear and a log scale. In these histograms the mean of each individual measurement was normalized to its co-
rresponding error bar.

G˜ = − 1 0.04 G˜ = + 1
R˜ = − 1 0.02 R˜ = + 1
L˜ = − 1 0 L˜ = + 1

G˜ = +L˜1 = + 1

de 10 e cm

R˜ R˜ L˜ L˜

=−1
=+1
= − 1 de d=e+ 110− 28

de 10− 28 e cm

10− 28 e cm

|Ez | (V / cm)

e cm

|Ez |

|Ez | (V / c|mB z) | (V / c|mB z)| (mG)

(mG) kˆ · zˆ

ωωNNE [(rraad/ds/]s)

-0.02 de

de 10− 28 e cm

10− 28 e cm |Ez | (V / cm|B)z | |Ez | (V / |cBmz)| (mG)

(mG) kˆ · zˆ

kˆ · zˆ P˜

P˜
R˜ (BbB)

-0.04

|Ez

|B | |E |E
3(| V6z /| =1c3m64Vz1/)c|m=

1|4E1|1|BB|zzVB/||cz=mz|(11|Vm(|9BGzm/|c=mG1z39)|)8mBz G|

(=m38-kmkˆGGz ·=)-zˆ1+k z

=kˆ+1-P·=P-z˜ˆ1

+P =

+1

-G =P-˜1 +G = +1
R˜

-R =R˜-1

+R = +1

G˜

-L =G-˜1 +L = +1
L˜

|B | (mG)

kˆ · zˆ

˜

Figure 28: Measured ωN E values grouped by the states of |Bz| , |Ez|, kˆ · zˆ, and each superblock switch, before

systematic error corrections. Reproduced with permission from [27].

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

40

When computing the eEDM result, data from superblocks were averaged together. The mean could be either weighted or unweighted by the statistical uncertainty in each superblock state. Weighted averaging minimized the resulting statistical uncertainty, but unweighted averaging could suppress systematic errors that have well-deﬁned superblock parity from entering into the extracted value for ωN E .
Due to molecule number ﬂuctuations, each block of data had a diﬀerent associated uncertainty. However, roughly equal amounts of data were gathered for the 24 superblock states deﬁned by the state readout parity P˜, ﬁeld plate lead conﬁguration L˜, state readout laser polarisation R˜, and global laser polarisation G˜. For the reported eEDM value, unweighted averaging (or to be precise, performing the basis change prescribed by equation 23) was used to combine data from the diﬀerent P˜, R˜, L˜, G˜ e-
xperiment states, since there were known systematic errors with well-deﬁned superblock parity that were suppressed by these switches (see, for example, sections 5.2.2 and 5.3). Note, however, that ﬁgure 28 shows that these systematic errors produced no signiﬁcant eEDM shift, and that the overall uncertainty was comparable (within 10%) when the data was combined with weighted or unweighted averaging.
Unequal amounts of data were collected for the Bz, E, and kˆ · zˆ experimental states. For example, 40% (60%) of data were gathered with the state preparation and readout laser beams pointing east (west), kˆ·zˆ = −1(+1). To account for this, we performed state-by-state analysis of the systematic errors: the primary systematic errors (described in section 5.2.6) were allowed to depend on the magnitude of the magnetic ﬁeld (though Bz = 1, 40 mG were grouped together), and the pointing direction, and-
 separate systematic error subtractions were performed for each (Bz, kˆ · zˆ) state. After this subtraction, the systematic uncertainties were added in quadrature with the statistical uncertainties for each state, and the data from each state was averaged together weighted by the resulting combined statistical and systematic uncertainties.
The reported statistical uncertainty was obtained via the method above assuming no systematic uncertainty. The reported systematic uncertainty was deﬁned such that the quadrature sum of the reported statistical and systematic uncertainties gives the same value as when incorporating the state-by-state analysis. A description of the methods used to evaluate the systematic error and the systematic uncertainty in the measurement is provided in section 5.10. To prevent experimental bias we performed a -
blind analysis by adding an unknown oﬀset to the mean of the eEDM channel, ωN E . The oﬀset was randomly generated in software from a Gaussian distribution with standard deviation σ = 150 mrad/s and mean zero. The mean, statistical error, procedure for calculating the systematic error, and procedure for computing the reported conﬁdence interval were all determined before revealing and subtracting the blind oﬀset.

5. Systematic Errors
According to Sozzi [105], ‘The best way to handle systematic eﬀects is not to have any...’. We approached our experimental design in a way to be very resilient to the systematic errors that impacted eEDM experiments in the past. We performed searches for unforeseen systematic errors, observed some, developed models to understand them, and carefully quantiﬁed them in auxiliary measurements, as described in this section.
A true eEDM should contribute to the N˜ E˜-correlated spin precession frequency, ωN E , with a signal ωTN E that does not vary with any experimental parameter. To discriminate between a systematic error in ωN E and ωTN E , we pursued a strategy to vary a large number of experimental parameters and imperfections while closely monitoring ωN E . If ωN E changes then there must be a systematic error correlated with that varied parameter. During our search for systematic errors we varied parameters inc-
luding: applied electric and magnetic ﬁelds; magnetic ﬁeld gradients; molecule beam pointing; and laser beam shape, pointing, detuning, and polarisation. In addition to monitoring ωN E , we monitored the spin precession frequency, contrast, ﬂuorescence signal, and a number of additional experimental conditions such as molecule beam velocity, vacuum pressure and room temperature. We examined the correlations of these quantities with the experiment switches to determine whether there are any spuriou-
s signals that might point to unforeseen systematic errors, or a gap in our understanding of the experiment [65].

5.1. Determining Systematic Errors and Uncertainties
In total, we varied more than 40 separate parameters during our search for systematic errors (see Table 2). These fall into two categories. Category I contains parameters P which are optimally zero; P = 0 represents an experimental imperfection. We were able to use experimental data to put a direct limit on the size of

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

41

Table 2: Parameters varied during our systematic error search. Left: Category I Parameters — These were ideally zero under normal experimental running conditions and we were able to vary them signiﬁcantly from zero. For each of these parameters direct measurements or limits were placed on possible systematic errors. Right: Category II Parameters — These had no single ideal value. Although direct limits on these systematic errors could not be derived, they served as checks for the presence of unant-
icipated systematic errors. See the main text for more details on all the systematic errors referenced.

Category I Parameters

Magnetic Fields
- Non-reversing B-ﬁeld: Bznr - Transverse B-ﬁelds: Bx, By (both even and odd under B˜)

- B-ﬁeld gradients:

∂Bx ∂x

,

∂By ∂x

,

∂By ∂y

,

∂By ∂z

,

∂Bz ∂x

,

∂Bz ∂z

(both even and odd under B˜)

- E˜ correlated B-ﬁeld: BE (to simulate

v × E/geometric phase/leakage current)

Electric Fields - Non-reversing E-ﬁeld: Enr

- E-ﬁeld ground oﬀset

Laser Detunings
- State preparation/readout lasers: ∆nprrep, ∆nrerad - P˜ correlated detuning, ∆P - N˜ correlated detunings: ∆N

Laser Pointings

- Change in pointing of prep./read lasers - State readout laser Xˆ /Yˆ dependent pointing - N˜ correlated laser pointing - N˜ and Xˆ /Yˆ dependent laser pointing

Laser Powers - N˜ E˜ correlated power ΩNr E - N˜ correlated power ΩNr - Xˆ /Yˆ dependent state readout laser power, ΩXr Y Laser Polarisation

- Preparation laser ellipticity, Sprep Molecular Beam Clipping

- Molecule beam clipping along yˆ and zˆ

(changes vy , vz , y , z of molecule beam)

Category II Parameters
Laser Powers - Power of prep./read lasers Experiment Timing - Xˆ /Yˆ polarisation switching rate - Number of molecule pulses averaged per experiment trace Analysis - Signal size cuts, asymmetry size cuts, contrast cuts - Diﬀerence between two PMT detectors - Variation with time within molecule pulse (serves to check vx dependence) - Variation with time within polarisation switching cycle - Variation with time throughout the full data set (autocorrelation) - Search for correlations between all chan-
nels of phase, contrast and ﬂuorescence signal - Correlations with auxiliary measurements of B-ﬁelds, laser powers, vacuum pressure and temperature - 3 independent data analysis routines

possible systematic errors proportional to these parameters. Category II contains parameters that have no optimum value and which we could vary signiﬁcantly without aﬀecting the nature of the spin precession measurement. The variation of these parameters could reveal systematic errors and serve as a check that we understood the response of our system to those parameters, but no quantitative bounds on the associated systematic errors were derived.
For each Category I parameter P , we exaggerated the size of the imperfection by a factor greater than 10, if possible, relative to the maximum size of the imperfection under normal operating conditions, P¯, which was obtained from auxiliary measurements. Following previous work [41, 42, 106], we assumed a linear relationship between ωN E and P , and extracted the sensitivity of the ωN E to parameter P , ∂ωN E /∂P . The systematic error under normal operating conditions was computed as ωPN E = (∂ω-
N E /∂P )P¯. The statistical uncertainty in the systematic error (henceforth referred to as the systematic uncertainty) δωPN E was obtained

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

42

from linear error propagation of uncorrelated random variables,

δωPN E =

∂ωN E ∂P

δP¯

2
+

P¯

δ

∂ωN E ∂P

2
,

(39)

where δP¯ is the uncertainty in P¯ and δ∂ωN E /∂P is the uncertainty in ∂ωN E /∂P . For parameters that had been observed to produce statistically signiﬁcant shifts in ωN E , such as the
non-reversing electric ﬁeld, Enr, we monitored the size of the systematic error throughout the reported data
set during Intentional Parameter Variations (described in section 3.1.2) and deducted this quantity from ωN E to give a value of the spin precession frequency due to T-odd interactions in the H state of ThO, ωTN E = ωN E − P ωPN E . Most Category I parameters did not cause a statistically signiﬁcant ωPN E and were not monitored. For these parameters, we did not subtract ωPN E from ωN E , but rather included an upper limit of (ωPN E )2 + (δωPN E )2 1/2 in the systematic uncertainty on ωTN E , or ch-
ose to omit this parameter from the systematic error budget altogether based on the criteria described in section 5.10.
Where applicable, we also ﬁt higher-order polynomial functions to ωN E with respect to P during the
systematic error searches. No signiﬁcant increase in the systematic uncertainty was observed using such ﬁts
and hence the contributions to the systematic error budget in Table 4 were all estimated from linear ﬁts. We note, however, that certain non-linear dependences of ωN E on P could lead to underestimates of the systematic uncertainty, for example if ωN E has a small (large) nonzero value for large (small) values of P .
In eﬀorts to avoid this, data were taken over as wide a range as possible, it is, however, always possible that
such non-linear dependence is present between the parameter values for which we took data. We had no
models by which non-linear dependence could manifest by variation of the parameters investigated, so we
believe the procedure outlined above produced accurate estimates of the systematic errors.

5.2. Systematic Errors Due to Imperfect Laser Polarisations
The dominant systematic errors in our experiment were due to imperfections in the laser beams used to prepare the molecular and read out the molecular state. Non-ideal laser polarisations combined with laser parameters correlated with the expected eEDM signal resulted in three distinct systematic errors which we refer to as the Enr, ΩNr E , and Stark Interference (S.I.) systematic errors. In this section, we model the eﬀects of several types of polarisation imperfections on the measured phase Φ (s-
ections 5.2.2 and 5.2.3) and discuss the correlated laser parameters that couple to these polarisation imperfections to result in systematic errors (section 5.2.6). We then discuss how we were able to suppress and quantify the residual systematic errors in the eEDM experiment (sections 5.2.5 and 5.2.6).

5.2.1. Idealized Measurement Scheme with Polarisation Oﬀsets As described in section 3.1, the molecules initially enter the state preparation laser beam in an incoherent mixture of the two states |±, N˜ . The bright state |B(ˆprep, N˜ , P˜prep) is then optically pumped away through |C, P˜prep leaving behind the dark state |D(ˆprep, N˜ , P˜prep) as the initial state for the spin precession. The molecules then undergo spin precession by angle φ evolving to a ﬁnal state |ψf = U (φ)|D(ˆprep, N˜ , P˜pr-
ep) where U (φ) = ± e∓iφ|±, N˜ ±, N˜ | is the spin precession operator. The molecules then enter the state readout laser that optically pumps the molecules with alternating polarisations ˆX and ˆY (which are nominally linearly polarised and orthogonal) between |±, N˜ and |C, P˜read . For each polarisation, the optical pumping results in a ﬂuorescence count rate proportional to the projection of the state onto the bright state, FX,Y = f N0| B(ˆX,Y , N˜ , P˜read)|ψf |2 where f is the photon detectio-
n eﬃciency, and N0 is the number of molecules in the addressed N˜ level. We then compute the asymmetry, A = (FX −FY )/(FX +FY ), dither the linear polarisation angles in the state readout laser beams to evaluate the fringe contrast, C = (∂A/∂φ)/2 ≈ −(∂A/∂θread)/2, and extract the measured phase, Φ = A/(2C) + qπ/4.† We then report the result of the measurement in terms of an equivalent phase precession frequency ω = Φ/τ where τ ≈ 1 ms is the spin precession time, which was measured for each block a-
s described in section 4.2.2.
Let us ﬁrst consider the idealized case in which all laser polarisations are exactly linear, Θi = π/4 for each laser i ∈ {prep, X, Y }, the angle between the state preparation laser polarisation (prep) and state readout
† Recall q is chosen to be an integer which depends on the size of the applied magnetic ﬁeld.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

43

basis (X, Y ) is π/4, θread − θprep = −π/4, and the accumulated phase is small, |φ| 1 (i.e. no magnetic ﬁeld is applied). Under these conditions, the measured phase Φ is equal to the accumulated phase φ. Now consider the eﬀect of adding polarisation oﬀsets d i to each of the three laser beams such that ˆi → ˆi + κd i, where κ = 1 is a perturbation parameter. It is useful to cast the polarisation imperfections in terms of linear angle imperfections, θi → θi + κdθi and ellipticity imperfections, Θi -
→ Θi + κdΘi where Si = −2dΘi is the laser ellipticity Stokes parameter; these are related by

zˆ · (ˆi × d ˆi · ˆi

i)

=

dθi

− idΘi.

(40)

Note that laser polarisations can have a nonzero projection in the zˆ direction, but we assume in the discussion above that ˆi represents a normalized projection of the laser polarisation onto the xy plane.† With these polarisation imperfections in place, the measured phase Φ gains additional terms:

Φ

=

φ

+

κ(dθprep

−

1 2

(dθX

+

dθY

))

−

κ2P˜prepP˜readdΘprep(dΘX

−

dΘY

)

+

O

κ3

,

(41)

up to second order in κ. In the eEDM measurement, we switch between two values of P˜ ≡ P˜read, the parity of the excited state addressed during state readout, and we set P˜prep = +1, the parity of the excited state addressed during state preparation. It is worth dwelling on equation 41 for a moment. A rotation of all polarisations by the same angle leaves the measured phase unchanged: dθi → dθi + dθ =⇒ Φ → Φ, as expected. A deviation in the relative angle between the state preparation and readout -
beams, dθprep → dθprep +dθ and dθX,Y → dθX,Y −dθ, enters into the phase measurement as Φ → Φ+2dθ, but is benign so long as dθ is uncorrelated with the expected eEDM signal. The laser ellipticities aﬀect the phase measurement
only when the state readout beams diﬀer in ellipticity, and this contribution to the phase can be distinguished from the others by switching the excited state parity, P˜. This last term is particularly interesting because
it allows for multiplicative couplings between polarisation imperfections in the state preparation and state
readout beams to contribute to the measured phase. Although the polarisation imperfection terms in equation 41 are uncorrelated with the N˜ E˜ and hence
do not contribute to the systematic error, we will see in later sections that additional imperfections can lead to changes in the molecule state that is prepared or read-out that are equivalent to correlations dθiN E and dΘNi E . The framework of equation 41 is useful for understanding how these correlations result in systematic errors in the eEDM measurement extracted from ΦN E .

5.2.2. Stark interference between E1 and M1 transition amplitudes In this section we describe in detail how interference between multipole transition amplitudes can lead to a measured phase that mimicks an eEDM spin precession phase. We develop a general framework illustrating how such phases depend on laser polarisation and pointing.
In an applied electric ﬁeld, opposite parity levels are mixed, allowing both odd parity (E1, M2,...) and even parity (M1, E2,...) electromagnetic multipole amplitudes to contribute when driving an optical transition. These amplitudes depend on the orientation of the electric ﬁeld relative to the light polarisation ˆ and the laser pointing direction kˆ. This Stark interference (S.I.) eﬀect forms the basis of precise measurements of weak interactions through parity non-conserving amplitudes in atoms-
 and molecules [107–109]. However, it can also generate a systematic error in searches for permanent electric dipole moments which look for spin precession correlated with the orientation of an applied electric ﬁeld. These Stark interference amplitudes have been calculated and measured for optical transitions in Rb [110, 111] and Hg [112, 113], and have been included in the systematic error analysis in the Hg EDM experiment [106, 114].
In this section, we consider Stark interference as a source of systematic errors in the ACME experiment. There are two important diﬀerences between molecular and atomic systems. First, molecular states such as the H3∆1 state in ThO can be highly polarisable and opposite parity states can be completely mixed by the application of a modest laboratory electric ﬁeld. Second, molecular selection rules can be much weaker than atomic selection rules: the H3∆1 → C3Π1 transition that we drive is nominally -
an E1 forbidden spin-ﬂip transition (∆Σ = 1, where Σ is the projection of the total electron spin S = 1 onto the intermolecular axis),
† The z-component of the polarisation can only drive ∆M = 0 transitions, which are far oﬀ resonance from the state preparation/readout lasers.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

44

but these states have signiﬁcant subdominant contributions from other spin-orbit terms [74], between some of which the E1 transition is allowed. Both of these eﬀects signiﬁcantly amplify the eﬀect of Stark interference in molecules relative to atoms. In this section we will derive the eﬀect of Stark interference on the measured phase Φ.
Consider a plane wave vector potential A with real amplitude A0, oscillating at frequency ω, that is resonant with a molecular optical transition |g → |e ,with wave vector k = (ω/c) kˆ, and complex polarisation ˆ:

A (r, t) =A0ˆeik·r−iωt + c.c.

(42)

The interaction Hamiltonian Hint between this classical light ﬁeld and the molecular system is given by:

Hint (t) = −

a

ea ma

A

(r

a,

t)

·

pa

(43)

where a indexes a sum over all of the particles in the system with charge ea, mass ma, position r a and momentum pa. Typically we apply the multipole expansion on the transition matrix element between states
|g and |e ; the matrix element can then be written as

∞

M ≡ e|Hint|g = iA0ωeg e|ˆ · Eλ + (kˆ × ˆ) · Mλ|g ,

(44)

λ=1

where Eλ describes the electric interaction of order O((k · r)λ−1) and Mλ describes the magnetic interaction of order O(α(k · r)λ−1) (where α is the ﬁne structure constant) such that

Eλ

=

(i)λ−1 λ!

ear a

k · ra

λ−1
,

a

Mλ

=

(i)λ−1 (λ − 1)!

a

ea 2ma

k · r a λ−1

λ

1 +

1 La

+

1 2

gaS

a

+

λ

1 +

1 La

+

1 2

gaS

a

(45) k · r a λ−1 ,

where La is the orbital angular momentum, Sa is the spin angular momentum, and ga is the spin g-factor
for particle of index a (see e.g. [115]). For typical atomic or molecular optical transitions, if all moments are
allowed, we expect the dominant corrections to the leading order E1 transition moment to be on the order of M1/E1 ∼ α ∼ 10−2–10−3 and E2/E1∼ ka0 ∼ 10−3–10−4, where a0 is the Bohr radius. In this work we neglect the higher order contributions beyond E2, though the eﬀects may by evaluated by using the expansion
above.

During the state preparation and readout of the molecule state, transitions are driven between the state |g = ± d±|±, N˜ and |e = |C, P˜ , where d± are state amplitudes that denote the particular superposition in |H that is being interrogated. The particular d± combination that results in M = 0 describes the state that is dark, and the orthogonal state is bright and is optically pumped away.
It is convenient to expand the Hamiltonian Hint in terms of spherical tensor operators. Furthermore, the laser is only resonant with ∆M = ±1 transitions, so the spherical tensor operators with angular momentum projections other than ±1 can be reasonably omitted. In table 3, we factor the ﬁrst 4 multipole operators
into products of molecule and light ﬁeld operators and express the molecular operators in terms of spherical tensors T±λ1 of rank λ = 1, 2. The E1 and M1 terms consist of vector operators with λ = 1. The E2 and M2 operators are rank 2 cartesian operators which can have spherical tensor operator contributions for
λ = 0, 1, 2. The rank λ = 0 components of the E2 and M2 operators, and the λ = 1 component of the E2
operator, vanish. The rank λ = 1 component of the M2 operator does not vanish, but the light ﬁeld angular
dependence of this operator is equivalent to E1, so we may treat it as such.
Using well-known properties of angular momentum matrix elements [60], we may write the transition
matrix element in the following form,

M

=iA0 ωeg cE1

√1 2

(−1)J+1 P˜ (1−N˜ E˜)/2

ˆ∗−1d+ + P˜ (−1)J ˆ∗+1d−

· εeﬀ ,

(46)

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

45

e Hint Oλ g = iA0ωeg ˆ∗+1 e T+λ1 Oλ g + ˆ∗−1 e T−λ1 Oλ g · V Oλ + . . .

Term
E1 M1 E2
M2

Tensor rank, λ
1 1 2
2

Molecular Operator, Oλ

Σaearia

Σa

ea 2ma

(Lai

+

gaSia)

ω 2c

a eariarja

ω c

Σa

ea 2ma

ria,

1 3

Laj

+

1 2

ga

Sj

Light Vector, V Oλ

ˆ

kˆ × ˆ

√i 2

ˆ(kˆ · zˆ) + kˆ(ˆ · zˆ)

√i 2

kˆ((kˆ × ˆ) · zˆ) + (kˆ × ˆ)(kˆ · zˆ)

Table 3: Only spherical tensor operators Tqλ with projection q = ±1 contribute to the |H → |C transition amplitude. With this simplifying assumption, we can write the matrix element for each multipole operator
in the form shown at th√e top of this table, which factors the molecule properties and the light properties (where ˆ± = ∓ (xˆ ± iyˆ) / 2 are the spherical basis vectors, and zˆ is the direction of the electric ﬁeld). Here, the molecular operators Oλ and the corresponding light vectors V Oλ are listed for the E1, M1, E2, and
M2 operators.

such that εeﬀ is the ‘eﬀective E1 polarisation’ (i.e. including the eﬀects of interference between multipole transition matrix elements is equivalent to an E1 transition with this polarisation) with the form

εeﬀ =ˆ − aM1inˆ × (kˆ × ˆ) + aE2(P˜)i(kˆ(ˆ · nˆ) + ˆ(kˆ · nˆ)) + . . .

(47)

where nˆ = N˜ E˜zˆ is the orientation of the internuclear axis in the laboratory frame, aE2(P˜) = cE2(P˜)/(√2cE1)

and aM1 = cM1/cE1 are real dimensionless ratios describing the strength of the M1 and E2 matrix elements relative to E1, and the c coeﬃcients are matrix elements,

cE1 = C, J, 0, 1 |E1| H, J , 1, 1

(48)

cM1 = C, J, 0, 1 |M1| H, J , 1, 1

(49)

cE2(P˜) = C, J, 0, 1 |E2| H, J , 1, 1 +

P˜ (−1)J C, J, 0, 1 |E2| H, J , 1, −1 ,

(50)

which are deﬁned using the state notation |A, J, M, Ω for electronic state A, and ‘E1, M1, E2’ refer to the corresponding molecular operators in table 3. It is useful to deﬁne the Rabi frequency Ωr = |M| as the magnitude of the amplitude connecting to the bright state, and the unit vector εˆeﬀ corresponding to the projection of εeﬀ onto the xy plane,

εˆeﬀ =

εeﬀ − (εeﬀ · zˆ)zˆ . |εeﬀ |2 − |εeﬀ · zˆ|2

(51)

This completely determines the bright and dark states, which have been previously deﬁned in equations 12 and 13 for solely E1 transition matrix elements.
The odd parity E1 and even parity M1 and E2 contributions to the eﬀective polarisation diﬀer by a factor of N˜ E˜, which is correlated with the expected eEDM signal. Expanding the eﬀective E1 polarisation in terms of switch parity components, εˆeﬀ = εˆneﬀr + N˜ E˜dεNeﬀE , and evaluating the eﬀective N˜ E˜ correlated polarisation imperfections using equation 40, we ﬁnd that the bright and dark states have eﬀective polarisation correlations given by:

zˆ · (εˆneﬀr × dεNeﬀE ) εˆneﬀr · εˆneﬀr

≈ dθeNﬀE

− idΘNeﬀE

(52)

≈ − i(aM1 − aE2(P˜))(ˆ · zˆ)((kˆ × ˆ) · zˆ).

(53)

It is useful to use a particular parameterization of the laser pointing kˆ and polarisation ˆ to expand the expression in equation 53 in terms of pointing and polarisation imperfections. The state preparation laser

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

46

kˆ-vector is aligned along (or against) the zˆ direction in the laboratory, so it is convenient to parameterize the pointing deviation from normal by spherical angle ϑk, and the direction of this pointing imperfection by polar angle ϕk in the xy plane, such that:

kˆ = cos ϕk sin ϑkxˆ + sin ϕk sin ϑkyˆ + cos ϑkzˆ.

(54)

We may use a parameterization for the polarisation ˆ that is similar to that in equation 14, but a slight modiﬁcation is required to ensure that kˆ · ˆ = 0:

ˆ =N −e−iθ cos Θˆ+1 + eiθ sin Θˆ−1 + zzˆ

z

=

−

√1 2

tan θk

e−i(θ−ϕk) cos Θ + ei(θ−ϕk) sin Θ

(55) (56)

where N is a normalization constant that ensures that ˆ∗ · ˆ = 1. With these parameterizations in place, and expanding about small ellipticities dΘ such that Θ = π/4 + dΘ, and small laser pointing deviation, ϑk 1, we ﬁnd that the N˜ E˜-correlated eﬀective laser polarisation imperfections are given by:

dθeNﬀE

≈−

1 2

(aM

1

− aE2(P˜))ϑ2k S

cos(2(θ

− ϕk))

(57)

dΘNeﬀE

≈

−

1 2

(aM

1

−

aE2(P˜))ϑ2k

sin(2(θ

−

ϕk ))

(58)

where Si = −2dΘi describe the laser ellipticities. Hence, following equation 41, there is a systematic error in ωN E :

ωSN.IE.

=

1 τ

1 4

aM1 − aE2

P˜

×

ϑ2k,prep −2Sprepcprep + P˜sprep (SX − SY ) +

(59) (60)

ϑ2k,X SX cX + P˜SprepsX + ϑ2k,Y SY cY − P˜SprepsY

(61)

where ci ≡ cos (2(θi − ϕi,k)) and si ≡ sin (2(θi − ϕi,k)) describe the dependence of the systematic error on the diﬀerence between the linear polarisation angle θi and the pointing angle ϕi,k in the xy plane.
There is another contribution to this systematic error that arises when the coupling to the oﬀ-resonant opposite parity excited state |C, −P˜ is also taken into account. This additional contribution becomes
signiﬁcant when the ellipticities are comparable to or smaller than γC /∆Ω,C,J=1 ≈ 0.5%. The eEDM channel, ωN E , was deﬁned to be even under the superblock switches (including P˜), hence
those terms proportional to P˜ in the equation above do not contribute to our reported result. Additionally, the G˜ and R˜ switches rotate the polarisation angles for each laser by roughly θi → θi + π/2 periodically and the resulting ωN E signal is averaged over these states. Provided that the pointing drift is much slower than the timescale of these switches, and to the extent that the laser polarisations constituting the R˜ and G˜ states are orthogonal, then these systematic errors should domina-
ntly contribute to the ωN EG and ωN ER channels
which were found to be consistent with zero (see Figure 35). An indirect limit on the size of the systematic error due to Stark interference, ωSN.IE. , may be estimated
by assuming a reasonable suppression factor by which the eﬀects in ωN ER and ωN EG may ‘leak’ into ωN E .
We monitored the pointing drift on a beam proﬁler and observed pointing drifts up to dϑk ∼ 50 µrad throughout a full set of superblock states. The absolute pointing misalignment angle was not well known
but was estimated to be larger than ϑk 0.5 mrad. Hence we may estimate a conservative suppression factor dϑk/ϑk 1/10 by which pointing drift may contaminate ωN E from ωN ER and ωN EG. The two R˜ states are very nearly orthogonal, but the G˜ states deviate suﬃciently from orthogonal (see section 5.2.5) such that the leakage from ωN EG → ωN E will dominate the systematic error; we estimate a suppression factor of about cnpr/cGp ∼ snpr/sGp ∼ 1/5. Based on the upper limits on the measured values for ω-
N ER and ωN EG combined with leakage from ωN ER and ωN EG into ωN E due to pointing drift, and leakage from ωN EG into ωN E due to non-orthogonality of the two G˜ states, we estimate the possible size of the systematic error to be ωSN.IE. 1 mrad/s.
Note that the mechanism for this systematic error was not discovered until after the publication of our
result [27] and hence was not included in our systematic error analysis there. Furthermore, since we did not

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

47

observe this eﬀect, this systematic error does not match any of the inclusion criteria outlined in section 5.10

and hence is not included in the systematic error budget in this paper. Since we did not understand the

mechanism for this systematic error while running the apparatus, we were not able to place direct limits on

the size of this systematic error. We estimate that the absolute pointing deviation from ideal was at most

5 mrad and the ellipticity of each laser was no more than Si ≈ 5%. The E1/M1 interference coeﬃcient is

aM1 ≈ 0.1 the R˜ and

for the H → C transition. G˜ switches. Hence, we do

This gives an estimate of ωSN.IE. ∼ 0.1 mrad/s before suppression due not believe that this systematic error signiﬁcantly shifted the result

to of

our measurement.

5.2.3. AC Stark shift phases In this section we describe contributions to the measured phase Φ that depend on the AC Stark shifts induced by the state preparation and readout lasers. We describe mechanisms by which such phase contributions may arise, and we describe mechanisms by which N˜ E˜ correlated experimental imperfections may couple to these phases to result in eEDM-mimicking phases. Concise descriptions of some of the eﬀects described here can be found in [64, 65, 92].
During our search for systematic errors as described in section 5.1, we empirically found that there was a contribution to the measured phase dΦ(∆, Ωr) that had an unexpected linear dependence on the laser detuning, ∆, a quadratic dependence on laser detuning ∆ in the presence of a nonzero magnetic ﬁeld, and a linear dependence on small changes to the magnitude of the Rabi frequency, dΩr/Ωr, in the presence of a nonzero magnetic ﬁeld,

dΦ (∆, Ωr) =

α∆,i∆i + α∆2,i∆2i + βdΩr,i (dΩr,i/Ωr,i) + . . . .

i

(62)

where i ∈ {prep, X, Y } indexes the state preparation and readout lasers. The coeﬃcients we measured were α∆ ∼ 1 mrad/(2π ×MHz), α∆2 ∼ 1 mrad/ (2π × MHz)2 and βdΩr ∼ 10−3. We performed these measurements by independently varying the laser detunings ∆i across resonance using AOMs or modulating the laser power using AOMs with the set-up depicted in ﬁgure 10 and extracting the measured phase Φ. Examples of such
measurements are given in ﬁgure 31.
We determined that this behaviour can be caused by mixing between bright and dark states, due to
a small non-adiabatic laser polarisation rotation or Zeeman interaction present during the optical pumping
used to prepare and read out the spin state. The mixed bright and dark states diﬀer in energy by the AC
Stark shift, which leads to a relative phase accumulation between the bright and dark state components that
depends on the laser parameters ∆ and Ωr. We shall now derive the AC Stark shift phase that results in equation 62, under simplifying assumptions amenable to analytic calculations.
Consider a three level system consisting of the bright |B(εˆ, N˜ , P˜) and dark |D(εˆ, N˜ , P˜) states and the lossy excited state |C, P˜ with decay rate γC. For simplicity, assume that there is no applied magnetic ﬁeld for the time being. In this system, the instantaneous eigenvectors (depicted in ﬁgure 29C) are

|B± ≡ ± κ±|C, P˜ + κ∓|B(εˆ, N˜ , P˜) , |D ≡ |D(εˆ, N˜ , P˜) ,

(63)

and the instantaneous eigenvalues are

EB±

=

1 2

∆±

∆2 + Ω2r , ED = 0,

(64)

such that the mixing amplitudes κ± are given by

κ±

=

√1 2

1±

∆. ∆2 + Ω2r

(65)

The eﬀect of the decay of the excited state (which occurs almost entirely to states outside of the three

level system) may be taken into account by adding an anti-Hermitian operator term in the Schrodinger

equation, |ψ˙

=

−i(H

−

i

1 2

Γ)|ψ

,

where

Γ

=

γC |C, P˜

C, P˜| is the decay operator.

This formulation is

equivalent to the Lindblad master equation,

ρ˙

=

−

i

[H,

ρ]

−

1 2

{Γ,

ρ}

,

(66)

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

48

that governs the time evolution of the density matrix ρ = |ψ ψ|. In practice, we implement this decay term by calculating the time evolution of the system according to H, and then making the substitution ∆ → ∆ − iγC/2 before calculating squares of amplitudes.
It is useful to work in the dressed state basis, |D , |B± , (basis C in ﬁgure 29) because these are nearly stationary states and have simple time evolution in the case that laser polarisation and Rabi frequency are stationary. If we allow the laser polarisation to vary in time, then the dressed state basis varies in time, and the system evolves according to the Hamiltonian,

H˜ =U HU † − iU U˙ †,

(67)

where U is the transformation from time independent basis A to time dependent basis C (from ﬁgure 29), U HU † is diagonal, and −iU U˙ † is a ﬁctitious force term that arises because we are working in a non-inertial

frame when the laser polarisation is time dependent [75].

Assuming that the polarisation is nearly linear, Θ ≈ π/4, but allowing the polarisation to rotate slightly, and allowing for a nonzero two photon detuning due to the Zeeman shift δ = −g1µBBzB˜, the Hamiltonian in the dressed state picture is:

 0
H˜ =  iχ˙ κ+ iχ˙ κ−

−iχ˙ ∗κ+
EB−
i Ω˙r∆−Ωr∆˙ 2 ∆2+Ω2r

−iχ˙ ∗κ−

−

i 2

Ω˙r ∆−Ωr ∆˙ ∆2 +Ω2

 

|D |B−

EB+

|B+

(68)

where χ˙ = Θ˙ − i(θ˙ + δ) can be considered to be a complex polarisation rotation rate, Ω˙ r is the rate of change of the Rabi frequency, and ∆˙ is the rate of change of the detuning. Note that this Hamiltonian implies that the eﬀect of a two photon detuning arising from the Zeeman shift is equivalent to that of a linear polarisation rotating at a constant rate.

A

|C, P˜

B

|C, P˜

C

Ωr 2

(ˆ∗+1

·

εˆ∗i )

(−1)J P˜

Ωr 2

(ˆ∗−1

·

εˆ∗i )

|−, N˜

|+, N˜

Ωr 2
iχ˙
|B(εˆi, N˜ , P˜) |D(εˆi, N˜ , P˜)

|B+(εˆi, N˜ , P˜)

EB+

iχ˙ κ− |D(εˆi, N˜ , P˜)

EB− iχ˙ κ+ |B−(εˆi, N˜ , P˜)

Figure 29: Energy level diagrams depicting the Hamiltonian when the three-level H → C transition is addressed by the state preparation or readout lasers in three diﬀerent bases. Solid double-sided blue arrows denote strong laser couplings between H and C. Wiggly red arrows denote spontaneous emission from C to states outside of the three level system. Dashed orange lines denote weak couplings induced by laser polarisation rotation. Basis A is useful for describing the spin precession phase induced-
 by the Zeeman and eEDM Hamiltonians. Basis B is useful for describing the states that are prepared and read-out in the spin precession measurement. Basis C is useful for evaluating the AC Stark Shift phases induced by laser polarisation rotations.

We may then apply ﬁrst order time-dependent perturbation theory in this picture to determine the extent of bright/dark state mixing due to χ˙ in the time evolution of the system. If we parameterize the time-dependent state as

|ψ (t) =cD (t) |D + cB+ (t) |B+ + cB− (t) |B− ,

(69)

then in the case of a uniform laser ﬁeld Ω˙ r = 0, of duration t and with a constant detuning ∆˙ = 0, the time

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

49

evolution of the coeﬃcients is given at ﬁrst order by:

t

cD (t) =cD (0) −

χ˙ ∗ (t ) κ∓ (t ) e−iEB±t cB± (0) dt

±0

t
cB± (t) =e−iEB±tcB± (0) + e−iEB±t χ˙ (t ) κ∓ (t ) eiEB±t cD (0) dt .
0

(70) (71)

In the state preparation region, the molecules begin in an incoherent mixture of the states |B(εˆprep, N˜ , P˜) and |D(εˆprep, N˜ , P˜) and then enter the state preparation laser beam. In the ideal case of

uniform laser polarisation, molecules that were in the bright state are optically pumped out of the three level

system, and molecules that are in the dark state remain there; this results in a pure state, |D(εˆprep, N˜ , P˜) .

However, if there is a small polarisation rotation by amount dχ ≡

t 0

χ˙

(t

)

dt

≡ dΘ − i(dθ − g1µBBzB˜t), such

that |dχ| 1, then the dark state obtains a bright state admixture that may not be completely optically

pumped away before leaving the laser beam.† In this case, the ﬁnal state can be written as

|D(εˆprep, N˜ , P˜) =|D(εˆprep, N˜ , P˜) + dχΠ|B(εˆprep, N˜ , P˜)

(72)

where εˆprep is the eﬀective polarisation that parameterizes the initial state in the spin precession region

εˆprep =εˆprep + dχΠizˆ × εˆ∗prep,

(73)

and Π is an amplitude that accounts for the AC Stark shift phase and the time dependent dynamics of the non-adiabatic mixing due to the polarisation rotation,

Π=

(κ∓)2e−iEB±t
±

t
dt

χ˙ (t ) eiEB±t .

0

dχ

(74)

The deviations between the eﬀective polarisation and the actual laser polarisation can be viewed as eﬀective polarisation imperfections,

dθprep,eﬀ = − dΘprepImΠ + (dθprep − g1µBBzB˜t)ReΠ, dΘprep, eﬀ = − dΘprepReΠ − (dθprep − g1µBBzB˜t)ImΠ,

(75) (76)

that lead to shifts in the measured phase Φ as described in equation 41. For deﬁniteness, consider the case in which the polarisation rotation rate χ˙ (t ) = dχ/t is a constant for the duration of the optical pumping pulse t. In this case,

Π = (κ∓)2e−iEB±t/2sinc(EB±t/2).
±

(77)

This function has the property that ImΠ is an odd function in ∆ that can take on values up to order unity across resonance (a frequency range on the order of γC) and is exactly zero on resonance. ReΠ is an even function quadratic in ∆ about resonance, and depends on Rabi frequency on resonance. If the laser beam intensity reduces quickly as the molecule leaves it then most of the AC Stark shift phase arises from the last Rabi ﬂopping period before the molecule exits the laser beam (provided χ˙ is -
nonzero during that time). If the intensity reduces slowly, the AC Stark shift phase can be exacerbated since the bright state amplitude is not as eﬀectively optically pumped away while Ωr < γC. Nevertheless, beamshaping tests shown in ﬁgure 31 and numerical simulations indicate that Π is not very sensitive to the shape of the spatial intensity proﬁle of the laser beam or the shape of the spatial variation of the polarisation.
If we consider only the ﬁrst order contribution to the shift in the measured phase in equation 41, dθprep,eﬀ , and neglect the second order shift that arises due to dΘprep,eﬀ , then we can relate the parameters in equation

† This is most liable to occur just before a molecule leaves the laser beam, such that complete optical pumping does not occur.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

50

62 to the amplitude Π accounting for the AC Stark shift phase and the complex polarisation rotation dχ, by

α∆,prep

≈

−

∂ImΠ ∂∆prep

dΘprep

α∆2 ,prep

≈

∂2ReΠ ∂ ∆2prep

dθprep − gµBBzB˜t

βdΩr ,prep

≈Ωr

∂ReΠ ∂Ωr

dθprep − gµBBzB˜t

.

(78) (79) (80)

We can interpret these results as follows. The linear dependence of the measured phase on detuning, α∆,prep, comes from a spatially varying ellipticity in the x direction coupling to the AC Stark shift phase. Similarly, the quadratic dependence of Φ on ∆, α∆2,prep, and the dependence of Φ on a relative change in Ωr, βdΩr,prep, come from either a spatially varying linear polarisation in the x direction or a Zeeman shift, each coupling to the AC Stark shift phase. Here, we only analyzed the phase sh-
ift that results from AC Stark shift eﬀects in the state preparation laser beam, but there is an analogous phase shift in the state readout beam.
There are several other subdominant eﬀects that also contribute to the AC Stark shift phase behavior described in equation 41 in the presence of polarisation imperfections. The opposite parity excited state |C, −P˜ couples strongly to the dark state, but the mixing between these two states is weak because the transition frequency is oﬀ-resonant by a detuning ∆Ω,C,J=1 ≈ 2π × 51 MHz γC . In the case that an optical pumping laser has nonzero ellipticity, the bright state gains a weak coupling to the -
opposite-parity excited state proportional to this ellipticity. Then, two-photon bright-dark state mixing ensues in such a way that the mixing amplitude, and hence the measured phase, depends on the laser detuning.
The rapid polarisation switching of the state readout beam can also introduce AC Stark shift-induced phases in the absence of a polarisation gradient, if the average ellipticity between the two polarisations is nonzero. Suppose a particular molecule is ﬁrst excited by the ˆX polarised beam. The two bright eigenstates |B± are mostly optically pumped away, resulting in a ﬂuorescence signal FX . The population remaining in the bright eigenstates acquires a phase relative to the dark state, due to the-
 AC Stark shift. Then the molecules are optically pumped by the ˆY polarised beam. If there is a nonzero average ellipticity, ˆY is not quite orthogonal to ˆX and the new bright eigenstates that give rise to the ﬂuorescence signal FY are superpositions of the former bright and dark states that acquired a relative AC Stark shift phase. This results in a ﬂuorescence signal, and hence measured phase component, that depends linearly on laser detuning ∆.

5.2.4. Polarisation Gradients from Thermal Stress-Induced Birefringence

The AC Stark shift phases described in the previous section can be induced by polarisation gradients in xˆ

across the state preparation and readout laser beams. In this section we describe a known mechanism by

which these arose. Recall that these laser beams passed through transparent, ITO-coated electric ﬁeld plates. For an absorbance α and laser intensity I, the rate of heat deposition into the plates is Q˙ (x, y) = α I (x, y).

The laser beam proﬁle is stretched in the y direction to ensure that all molecules are addressed. For simplicity we assume that the heating distribution, Q˙ (x, y) = Q˙ (x), is completely uniform in the y direction. We also

assume that there are no shear stresses, i.e. local expansion of the glass is isotropic. Under these assumptions, the relationship between the heating rate, Q˙ , and the internal stress tensor σij (where i, j are Cartesian

indices) is

∂2σyy ∂x2

=

EαV κ

Q˙ (x) ,

(81)

where E, αV and κ are the Young’s modulus, coeﬃcient of thermal expansion, and thermal conductivity, respectively [116]. Unit vectors xˆ and yˆ correspond to the principal axes of the stress tensor due to the
symmetry of the heating function, hence the oﬀ-diagonal (shear) elements are zero, σxy = 0. The other diagonal component, σxx, is uniform across the plates, and equal to σyy far away from the laser. The stress-optical law states that the birefringence and stress are linearly proportional along the principal axes
of the stress tensor [117]. The diﬀerence between the indices of refraction in the x and y directions is then ∆n = K (σxx − σyy), where K ≈ 4 × 10−6 MPa−1 is the stress-optical coeﬃcient for Boroﬂoat glass [118]. The retardance of an incident laser beam of index i is Γi = 2π∆n (t/λ), where t is the thickness of the ﬁeld plates (in the z direction), and λ is the wavelength of light. Hence, in this limit, the retardance due to

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

51

0.05

Data

Thermoelastic Model

Laser Pro-le

0

Ellipticity, S

-0.05

-0.1

-0.15

-0.2

-5

-4

-3

-2

-1

0

1

2

3

4

5

Position, x (mm)

Figure 30: Measurement of the ellipticity, S, as a function of position along x within the state readout laser beam. A ﬁt to the thermo-elastic model, which assumes a Gaussian laser proﬁle and has the amplitude and oﬀset in S as free parameters, is overlaid.

thermal stress-induced birefringence is related to the laser intensity by:

∂2Γ ∂x2

=

η

t λ

I

(x) ,

(82)

where η = 2πKEαV α/κ ≈ 26 × 10−6 W−1 is a material constant of Boroﬂoat glass [118]. The ellipticity imprinted on the nominally linearly polarised laser beam is given by

Si = Γi(x) sin (2(θi − φΓ,i)) ,

(83)

where θi is the linear polarisation angle and φΓ,i is the orientation of the fast axis of the birefringent material (nominally xˆ in our case).
Assuming the laser has total power P , a Gaussian proﬁle in x with standard deviation wx, and a top-hat proﬁle in y with half width wy, the intensity is given by

I (x) = √ P

e−

x2 2wx2

8πwxwy

(84)

where 2wy wx. There is then an analytic solution to equation 82 from which we extracted a retardance

gradient in the laser tail, x = wx, of √

∂Γ ∂x

≈

erf(1/ 2)P κt 4wy λ

≈

0.03

rad/mm

(85)

for a nominal laser power of ≈2 W. Similar results were obtained from numerical ﬁnite element analysis. Thermal stress-induced birefringence has been observed in similar systems such as in UHV vacuum windows [119], laser output windows [120], and Nd:YAG rods [121].
The estimates of the ellipticity gradient agree well with measurements of the polarisation of the beam, as shown in ﬁgure 30. These polarimetry measurements were adapted from the procedure described in [122]; a polarimeter was constructed consisting of a rotating quarter-wave plate, ﬁxed polariser, and fast photodiode. The use of a fast photodetector allows for polarimetry of the probe beam during the 100 kHz polarisation switching. The resolution of the system was such that we could quickly measu-
re the normalized circular Stokes parameter, S, to a few percent, which is suﬃcient to measure typical birefringence gradients of ∼10% across the beam.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

52

5.2.5. Suppression of AC Stark Shift Phases
We were able to suppress the magnitude of the AC Stark shift phases in several diﬀerent ways that are illustrated in ﬁgure 31. The ellipticity gradient across the state preparation laser beam was suppressed by tuning the linear polarisation angle: as per equation 83, the ellipticity gradient is proportional to sin(2θprep − 2φΓ,prep), which vanishes when the polarisation is aligned along a birefringence axis, i.e. θprep = φΓ,prep, φΓ,prep + π/2. To determine φΓ,prep we measured the total accumulate-
d phase as a function of laser detuning for various θprep and then extracted the slope α∆nr,prep = ∂Φnr/∂∆prep for small detuning values. Note that when ﬁtting the phase vs. detuning data we found that cubic functions provided signiﬁcantly better ﬁts over the detuning ranges used (see Figure 31(B)). We then selected θprep to minimize α∆nr,prep. This suppressed α∆nr,prep by about a factor of 50 relative to its original value, to α∆nr,prep 0.1 mrad/(2π × MHz).
Another method implemented to suppress AC Stark shift phases was to reduce the time-averaged power of the state preparation laser incident on the ﬁeld plates. We used a chopper wheel to modulate the laser at 50 Hz, synchronous with the molecular beam pulses, with a 50% duty cycle. We estimated the time scale for thermal changes to be on the order of Q/Q˙ ∼ 2ρCwx2/κ ∼ 10 s, where ρ and C are the density and heat capacity of Boroﬂoat respectively, so did not anticipate any signiﬁcant transient eﬀect-
s to be introduced. This modiﬁcation reduced the retardance gradient, and hence the value of α∆nr,prep, by about a factor of two, as shown in Figure 31(C).
Finally, α∆nr,prep was suppressed by shaping of the laser beam intensity proﬁle. AC Stark shift phases were most signiﬁcant at the downstream edge of the state preparation laser beam. Here, the intensity is such that bright-dark state mixing is still occurring but the bright state is not eﬃciently optically pumped away. By making the spatial intensity proﬁle drop oﬀ more rapidly, we reduced the time that molecules spent in this intermediate intensity regime. This was achieved by taking advantage o-
f the aspherical distortion introduced by misaligning a telescope immediately before the laser beam entered the spin-precession region. This suppressed α∆,prep and β∆2,prep by ≈2, as shown in Figure 31(C). In addition to a phase suppression, we noticed that the optimal laser polarisation angle changed after implementing the steps described, as can be seen in Figure 31(C). The reason for this change is not deﬁnitively known, but we suspect that as we suppressed the birefringent contribution to the -
AC Stark shift phase, the non-birefringent contributions (i.e. the phase due to nonzero ellipticity causing bright-dark state mixing via the oﬀ-resonant opposite parity excited state) became fractionally larger, and we needed to tune the polarisation angle to obtain cancellation between these two classes of eﬀects.
We observed much smaller AC Stark shift phases in the state readout laser beam than in the state preparation laser beam. This is not surprising since the eﬀect is largely birefringent; the contributions to the eﬀective polarisation imperfections for the ˆX and ˆY polarised lasers should be opposite in sign, dθX ∝ sin(2(θread − φΓ,read)), dθY ∝ sin(2(θread − φΓ,read + π/2)), such that they cancel each other in the measured phase (cf. equation 41). The residual AC Stark shift phases measured in the -
state readout beam gave α∆nr,read ≈ 0.5 mrad/(2π × MHz). This was suﬃciently small that the methods of suppression described above were only implemented in the state preparation region.

5.2.6. Systematic Errors due to Correlated Laser Parameters In the discussion above, we described how
polarisation imperfections can lead to contributions to the measured phase that depend on the AC Stark
shifts and hence on the laser detunings ∆i and Rabi frequencies Ωr,i. However, these phases only produce a systematic error in ωN E if there is a nonzero correlation ∆Ni E or ΩNr,iE of the laser detuning or Rabi frequency. We observed such correlations and discuss them in this section. We will also describe how we evaluated the
associated systematic errors.
In section 3.2.4 (see ﬁgure 11) we discussed how a non-reversing component of the applied electric ﬁeld, Enr, could produce a ∆N E . In an entirely analogous manner, the Rabi frequency magnitude Ωr of the H → C transition can exhibit the following correlations:

Ωr,i =Ωnr,ri + N˜ ΩNr,i + N˜ P˜ΩNr,iP + N˜ E˜ΩNr,iE + . . .

(86)

Here, Ωnr,ri is the dominant component of the Rabi frequency for laser i ∈ {prep, X, Y }, which could ﬂuctuate in time on the order of 5% due to laser power instability. ΩNr,i is generated by a laser power diﬀerence between the N˜ states. This arose because we routed the laser light along diﬀerent paths through a series of AOMs for each state. We measured this eﬀect with photodiodes and found that the largest fractional power correlation

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

53

Phase, Φ (mrad)

Phase, Φ (mrad)

(A) 15
10 5 0

(B) 15
10 5 0

θprep

−55◦ −10◦ 0◦ 12◦ 35◦

-5

-5

-10

-10

-15

-1.0

0

1.0

-15

-1.5

-1

-0.5

0

0.5

1

1.5

Prep. Laser Detuning, ∆prep (2π× MHz)

Prep. Laser Detuning, ∆prep (2π× MHz)

(C) 15
10

Gaussian beam profile Clipped beam profile Clipped beam + reduced avg. laser power

∂Φ/∂∆prep (2π × mrad/MHz)

5

0

-5

-10

-15

-80

-40

0

40

80

120

Preparation Laser Polarization, θprep (degrees)

Figure 31: (A) Measured molecule phase as a function of preparation laser detuning. The slope agrees with originally observed ΦN E dependence on ∆N E . (B) Phase dependence on detuning for multiple preparation laser polarisation angles. (C) ∂Φ/∂∆nr shows clear sinusoidal dependence on preparation laser polarisation. The magnitude of ∂Φ/∂∆nr decreases for all polarisation angles when the Gaussian beam tails are clipped
(blue) and when the average laser power is reduced with a chopper wheel (red).

was ΩNr /Ωnr r ≈ 2.5 × 10−3. An additional contribution to ΩNr,i and a contribribution to ΩNr,iP on the same order arises due to Stark mixing between rotational levels in H and C, leading to N˜ - and N˜ P˜-correlated

transition amplitudes on the H → C transition. Although we did not observe a laser power correlation with N˜ E˜ we did observe signals consistent with
a Rabi frequency correlation, ΩNr E . A nonzero N˜ E˜-correlated ﬂuorescence signal (as deﬁned in section 4.1) that also reversed with the laser propagation direction kˆ · zˆ, F N E /F nr ≈ −(2.4 × 10−3)(kˆ · zˆ), together with

a nonzero ωN EB ≈ (2.5 mrad/s)(Bz/mG)(kˆ · zˆ), provided the ﬁrst evidence that a nonzero ΩNr E existed in our system. We believe that this ﬂuorescence correlation arises from a linear dependence of the ﬂuorescence

signal size on Rabi frequency, F N E = (∂F/∂Ωnr r)ΩNr E , which is nonzero since the state readout transitions were not fully saturated. We believe that the signal in ωN EB was caused by a coupling between the

Rabi-frequency

correlation

and

the

B-odd

AC

Stark

shift

phase,

ωN EB

=

1 τ

βdBΩr

Bz

(ΩNr

E

/Ωnr r

).

We were

able to verify intensity with

a linear dependence of N˜ E˜ using AOMs; this

both of these channels is shown for the ΦN EB

on ΩNr E channel

by intentionally correlating the laser in Figure 32. Varying the size of this

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

54

artiﬁcial ΩNr E allowed us to measure the value present in the experiment under normal operating conditions,

ΩNr E /Ωnr r = (−8.0 ± 0.8) × 10−3(kˆ · zˆ). ΩNr E can couple to βdnΩr r,i as per equations 62 and 80 to result in

a systematic error in ωN E . observed in the experiment)

A nonzero βdnΩr r,i can or by a non-reversing

be produced by a linear polarisation Zeeman shift component g1µBBznr.

angle

gradient

(not

While searching for a presented in section 5.2.2.

model to explain For unnormalized

the intrinsic ΩNr E , we developed eﬀective polarisation εeﬀ = εneﬀr +

the Stark N˜ E˜dεNeﬀE ,

interference model this model predicts

ΩNr E /Ωnr r ≈ Re(εneﬀr∗ · dεeﬀ ) ≈ −Im [(aM1 + aE2)] (kˆ · zˆ), which correctly predicts the dependence of ΩNr E on

the laser propagation direction kˆ · zˆ. However, the factors aM1 and aE2, which correspond to the ratio of M1

and E2 amplitudes to the E1 amplitude, must be real for a plane wave, so Im [(aM1 + aE2)] = 0. Hence this

model fails to explain this Rabi frequency correlation unless there is some additional eﬀect that introduces

a phase shift between the E1 and M1 amplitudes. For example, interference between the E1 amplitude due

to the incident laser beam, and a phase shifted M1 amplitude due to a (low intensity) reﬂected beam can

lead to a nonzero ΩNr E by this model. However, this phase factor oscillates spatially on the scale of the light wavelength, which is very small compared to the size of the molecule cloud and hence should average out

over the entire molecular beam cloud. The origin of the intrinsic ΩNr E is still not fully understood, and we are continuing to explore models to understand this eﬀect.

1.5
k^ " z^ = !1 k^ " z^ = +1
1

0.5

)N EB (mrad)

0

-0.5

-1

!0:016 ' 0:002

0:018 ' 0:003

-1.5

-0.3

-0.2

-0.1

0

0.1

0.2

Applied P N E =P nr

Figure 32: ΦN EB as a function of applied N˜ E˜-correlated laser power, P N E , for both directions of laser

pointing, kˆ accordance

· zˆ. with

The artiﬁcial ΩNr E resulting from equation 62. ΦN EB is zero when the

correlated power P N E systematically shifts ωN EB in applied P N E is such that there is no net N˜ E˜-correlated

Rabi frequency. The intrinsic ΩNr E (i.e. that inferred when P N E = 0) changed sign with kˆ · zˆ within the

resolution of the measurement. The slopes between the two measurements diﬀer due to diﬀerences in the AC

Stark shift phase, believed to be due to diﬀerences in the spatial intensity proﬁle and polarisation structure

between the two measurements.

Given the empirical AC Stark shift phase model in equation 62, the resulting systematic errors in the

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

55

frequency measurement are given by

ωENnEr

=

1 τ

α∆nr,iD1E nr(xi)

i∈{prep,X,Y }

ωN E
ΩN r E

=

1 τ

βdnΩr r,i(ΩNr E /Ωnr r).

i∈{prep,X,Y }

(87) (88)

Early in the experiment, we observed a nonzero systematic shift ωENnEr and took the steps outlined in section 5.2.5 to suppress it. To verify that the steps taken were eﬀective, we examined ωN E as a function of
an intentionally applied non-reversing electric ﬁeld. The resulting data are shown in ﬁgure 33. The original slope, ∂ωN E /∂Enr = (6.7 ± 0.4)(rad/s)/(V/cm), corresponded to a systematic shift of ωENnEr ≈ −34 mrad/s when combined with the measured Enr ≈ −5 mV/cm. Following the modiﬁcations described above, the ∂ωN E /∂Enr slope was greatly suppressed, reducing the systematic error to ωENnEr < 1 mrad/s, well below the statistical uncertainty in the measurement of ωN E .

1.5 Unsuppressed Suppressed
1
0.5

6:6 ' 0:3 (mrad/s)/(mV/cm)

!NE (rad/s)

0 0:2 ' 0:3 (mrad/s)/(mV/cm)
-0.5

-1

-1.5

-200

-150

-100

-50

0

50

100

150

200

Non-reversing electric -eld, Enr (mV/cm)

Figure 33: Linear dependence of the ωN E channel on an applied non-reversing electric ﬁeld observed before (red) and after (black) we suppressed the known AC Stark shift phase by optimizing the preparation laser beam shape, time-averaged power and polarisation.

Because we observed that the parameters Enr and ΩNr E caused systematic errors in ωN E , we intermittently measured the size of the associated systematic errors throughout the datasets that were used for our reported result. We measured ∂ωN E /∂Enr by applying a range of large non-reversing electric ﬁelds, up to around 70 times that present under normal running conditions. The value of ∂ωN E /∂ΩNr E was measured by applying a correlated laser power P N E in the state preparation and state readout -
beams with a magnitude corresponding to an applied ΩNr E that was up to 20 times that measured under normal operating conditions. These parameters were measured for multiple values of the magnetic ﬁeld magnitude, Bz, for which diﬀerent state
readout laser beam polarisations were required. Due to known birefringent behavior of the AC stark shift phases, we allowed for this possibility for all AC stark shift phase systematic errors. We measured ∂ωN E /∂Enr for both kˆ · zˆ = ±1, but the ΩNr E systematic error was only discovered after the kˆ · zˆ = +1 dataset and hence ∂ωN E /∂ΩNr E was only monitored during the kˆ · zˆ = −1 dataset. The ΩNr E systematic error during the kˆ · zˆ = +1 dataset was determined from auxiliary measurements of-
 the AC Stark shift phase. As described in section 3.2.5, Enr(x) exhibits signiﬁcant spatial variation along the beam-line axis, x. However the Enr that was intentionally applied to determine ∂ωN E /∂Enr was spatially uniform, and hence these measurements were insensitive to the diﬀerence (Enr(xprep) − Enr(xread)) between the state preparation laser beam at xprep
and the state readout beam at xread. For this reason, we deduced the systematic error proportional to the

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

56

diﬀerence (Enr(xprep) − Enr(xread)) from auxiliary measurements of the AC Stark shift phase parameters, α∆nr,i.
In summary, the systematic errors proportional to Enr and ΩNr E that were evaluated and subtracted from ωN E to report a measured value of ωTN E can be expressed as

ωENnEr =

∂ωN E ∂E nr

1 2

(E

nr(xprep)

+

E

nr(xread))

+ 

1 τ

(α∆nr,prep

−

α∆nr,X

−

α∆nr,Y

)

1 2

(E

nr(xprep

)

−

E nr(xread))

ωN E
ΩN r E

=

 

1 τ

i∈{prep,X,Y

Ω ∂ωN E

NE

∂ΩN r E

r

}

βdnΩr r,i

ΩN r E Ωnr r

(kˆ · zˆ) = +1 (kˆ · zˆ) = −1

(89) (90)

where (∂ωN E /∂Enr) and (∂ωN E /∂ΩNr E ) were monitored by Intentional Parameter Variations (see section 3.1.2) throughout the dataset used for our reported result, and Enr(xprep), Enr(xread), ΩNr E , α∆nr,i, and βdnΩr r,i were obtained from auxiliary measurements. These two systematic errors account for almost all of the systematic oﬀset that was subtracted from ωN E to obtain ωTN E as described in section 5.10.

5.3. AN E asymmetry eﬀects

In addition to the dependence of the measured phase on laser detuning and Rabi frequency, we observed
dependence of the asymmetry A (as deﬁned in section 4.1) on the laser parameters ∆read and Ωr,read, due to diﬀerences between the properties of the X and Y readout laser beams. The laser-induced ﬂuorescence signal
F (∆, Ωr) varies quadratically with detuning (for small detuning) and linearly with Rabi frequency. Under normal conditions, the signal sizes from X and Y are comparable, FX ≈ FY ≈ F . If the X and Y beams have diﬀerent wavevectors, kX,Y = knr ± kXY , and kXY has some component along xˆ, then the two beams will acquire diﬀerent Doppler shifts. This leads to a linear dependence of the asymmetry on detuning, which in turn can couple to ∆N E to result in a contribution to AN E ,

AN E

≈

1 F

∂2F ∂ ∆2read

(kX

Y

·

v )∆N E .

(91)

Similarly, if the two readout beams diﬀer in Rabi frequency, Ωr,X/Y ≈ Ωnr r ± ΩXr Y , the asymmetry becomes linearly dependent on Rabi frequency, which in turn can couple to ΩNr E to result in a contribution to AN E ,

AN E ≈ −

1 ∂F F ∂Ωr

2
ΩXr Y ΩNr E .

(92)

However, these asymmetry eﬀects are very distinguishable from spin precession phases and polarisation misalignments. Since the P˜ and R˜ switches eﬀectively swap the role of the X and Y readout beams, the AN E eﬀects described above do not contribute to ωN E when summed over these switches. Additionally,
asymmetry eﬀects, once converted to an equivalent frequency or phase, depend on the sign of the contrast, C, unlike true phases. In the Bz ≈ 20 mG conﬁguration, sgn(C) = sgn(Bz), but sgn(C) has no dependence on sgn(Bz) for Bz ≈ 1, 40 mG. Hence asymmetry correlations AN E are mapped onto frequency correlations ωN EPR or ωN EBPR depending on the magnetic ﬁeld magnitude.
If the pointing or Rabi frequency diﬀerences between the X and Y beams drift on timescales comparable to or shorter than the P˜ or R˜ switches, these eﬀects can occasionally ‘leak’ into the ‘adjacent’ channels ωN EP , ωN ER, ωN EBP , ωN EBR; however, we have not seen any evidence of these eﬀects contributing to the ωN E
channel itself, and hence did not include systematic error contributions due to these eﬀects in our systematic
error budget.

5.4. E˜-Correlated Phase
Previous eEDM measurements have often been limited by a variety of systematic errors that would have produced an E˜-correlated phase precession frequency in our experiment, ωE [17, 38, 41, 50], such as E˜correlated leakage currents, geometric phases, and motional magnetic ﬁelds. Our ability to spectroscopically

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

57

reverse the molecular orientation through a choice of N˜ distinguished these eﬀects from an eEDM-generated
phase. In addition, the aforementioned eﬀects scale with the magnitude of the applied electric ﬁeld, which
was orders of magnitude smaller in our experiment than previous similar eEDM experiments due to the high
polarisability of ThO [41]. Also, because the molecular polarisation was saturated, the eEDM phase should
have been independent of the magnitude of the applied ﬁeld. We also note that any shifts from leakage
currents and motional magnetic ﬁelds coupled through the magnetic dipole moment, which is near-zero in the H-state of ThO. Thus we expected ωE to be substantially suppressed, and that it should not enter ωN E
at any signiﬁcant level. The reversal of N˜ did not, however, entirely eliminate an eEDM-like phase due to ωE . As discussed in
section 4.2.2, there was a small and E-ﬁeld dependent diﬀerence between the g-factors of the two N˜ levels [57, 76], which meant that a systematic error in the ωE channel showing up in ωN E at a level given by ωωNEE = (ηE/g1)ωE . We veriﬁed this relation by intentionally correlating a 1.4 mG component of our applied magnetic ﬁeld with E˜. This deliberate BE resulted in a large shift in the value of ωE and a ∼1000-times smaller oﬀset of ωN E , as illustrated in ﬁgure 34.

0.30

60

0.20

39.517 ± 0.004

40

(rad/s/mG)

0.10

20

0.11 ± 0.03

0

(rad/s/mG)

0

(rad/s)

E
ω

(rad/s)

NE
ω

−0.10

−20

−0.20

−40

−0.30

−60

−1.5

−1

−0.5

0

0.5

1

1.5

Applied BE (mG)

Figure 34: Illustration of the ∼1000-fold suppression of systematic errors associated with ωE provided by the N˜ switch. Large values of ωE occur when there is a component of Bz correlated with E˜, BE . In previous
eEDM experiments, this would have corresponded to a systematic error. In our experiment a much smaller shift in ωN E results from the small diﬀerence in magnetic moments between the two N˜ levels. Error bars for the ωE data are signiﬁcantly smaller than the data points. Data were taken with E = 142 V/cm and the measured ratio of the slopes, (∂ωN E /∂BE )/(∂ωE /∂BE ) = (2.8 ± 0.8) × 10−3 is consistent with the expected value ηE/g1 = (2.5 ± 0.1) × 10−3.

The intentionally applied BE was the only experimental parameter that was observed to produce a measurable shift in ωE . Even large (∼20 mG) magnetic ﬁelds components along xˆ and yˆ, which exaggerate the eﬀect of motional magnetic ﬁelds, did not shift ωE (this is expected, since the large tensor Stark shift in |H, J = 1 dramatically suppresses the eﬀect of motional magnetic ﬁelds [36]). For our eEDM data set, ωE was consistent with zero. We included a contribution from ωE in our error budget for -
ωN E by multiplying the mean and uncertainty of the extracted ωE by our measured |E|-dependent suppression factors ηE/g1.

5.5. N˜ -Correlated Laser Pointing
We discovered a nonzero, time-dependent signal in ωN which was associated with an N˜ -correlated laser pointing, kˆN ≈ 5 µrad. An investigation into the mechanism behind this eﬀect was inconclusive. We found that the pointing correlation appeared downstream of the AOMs that created the rapid polarisation switching and improved alignment was able to reduce the eﬀect. We also found that the observed pointing was in some way correlated with the seed power and input angle of incidence into the high-po-
wer ﬁber ampliﬁer

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

58

immediately upstream of the polarisation switching, despite the fact that pointing out of the ampliﬁer did not ﬂuctuate. Since we used four diﬀerent sets of AOMs to perform the N˜ and P˜ switches before the ampliﬁer,
we observed laser pointing correlated with both of these switches. By matching the characteristics of these four beam paths we were able to suppress kˆN to < 1 µrad.
The eﬀect of kˆN on ωN was studied by exaggerating the former with piezoelectrically actuated mirrors. Examining ∂ωN /∂kˆN showed signiﬁcant ﬂuctuations in its value. We were unable to identify the mechanism by which kˆN aﬀected ωN .
We had no evidence that the eﬀect causing the observed variation in ωN also caused a systematic error in ωN E , but to be cautious we included an associated systematic uncertainty in our systematic error budget (section 5.10). Assuming a linear relationship between ωN E and ωN , we extracted ∂ωN E /∂ωN from a combination of data taken under normal conditions and with an exaggerated ωN induced by an exaggerated kˆN . We then placed an upper limit on a possible systematic error ωωNNE based on the va-
lue of ωN obtained under normal running conditions. The resulting systematic uncertainty was four times smaller than our
statistical uncertainty.

5.6. Laser Imperfections
Of the lasers used in our experiment, only the state preparation and readout lasers were known to produce possible systematic errors; imperfections in the rotational cooling, optical pumping or target ablation lasers simply resulted in a reduction in usable molecule ﬂux. As part of our search for systematic errors, we intentionally exaggerated all known state preparation and readout laser imperfections possible without dismantling the apparatus (cf. table 2). In this section we describe this proce-
dure and the resulting contributions to our systematic error budget.

5.6.1. Laser Detuning
The correlated components of the state preparation and readout laser beam detunings are described in detail
in section 3.2.4. Each detuning component was separately exaggerated and in some cases multiple components were simultaneously exaggerated. Most of the detuning terms in equation 27 were exaggerated to ±2π × 1– 2 MHz. No detuning or detuning correlation produced a signiﬁcant shift in ωN E other than ∆N E caused by Enr, discussed in section 5.2.6. In some cases, shifts in other phase channels were induced, but all shifts were
consistent with well-understood AC Stark shift and asymmetry models described in sections 5.2.3 and 5.3. For example, the combination of nonzero ∆N and ∆nr coupled to the B-dependent component of the AC stark shift phase (equation 80) induces a signiﬁcant shift in ωN B (cf. equation 62). Asymmetry correlations
also resulted from these detuning correlations, but these were only manifested in channels odd with respect to P˜ and R˜, and hence had no plausible eﬀect on ωN E . Because the YbF eEDM experiment [99] observed
unexplained dependence of the measured eEDM value on state preparation microwave detuning, we included
a systematic error contribution from all detuning imperfections in our systematic error budget.

5.6.2. Laser Pointing and Intensity
Similar to detuning imperfections, the state preparation and readout lasers could have imperfect pointing and correlated intensities. Ideally the laser propagation direction, kˆ, would have been parallel to the laboratory electric ﬁeld. This would have diminished the amount of zˆ polarised light experienced by the molecules, which could drive unwanted oﬀ-resonant transitions, and prevented stray retroﬂection from the ITO ﬁeld plate surfaces. Using this ITO retroﬂection as a guide, we aligned kˆ pe-
rpendicular to the ﬁeld plate surface, and therefore parallel to Eˆ, to within ∼ 3 mrad. To test for errors related to imperfect pointing, both the state preparation and readout pointing misalignments were exaggerated in the x-direction to ±10 mrad, as was the relative pointing of the Xˆ and Yˆ state readout beams. The vacuum windows and ∼3.8 cm wide holes in the magnetic shields prevented us from further misaligning the beams. To decouple pointing imperfections from detuning imperfections, the st-
ate preparation and readout laser frequencies were tuned to resonance after each pointing adjustment. No shift in ωN E was observed and no systematic error contribution from pointing imperfections was included. Pointing imperfections were only observed to aﬀect the signal asymmetry, as previously discussed in section 5.3.
Unlike laser pointing and detuning, there was no ‘ideal’ value for laser intensity. The state preparation and readout laser intensities were chosen such that we were driving optical pumping to completion on the

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

59

H → C transition without producing unnecessary thermal stress on the ﬁeld plates. We decreased each laser

intensity by the N˜

by a factor -correlated

of four to check seed power into

that there was the high-power

no variation in ωN E . We observed a nonzero ΩNr caused ﬁber ampliﬁers and by Stark mixing between rotational

levels in H and C as discussed in section 5.2.6. We exaggerated this imperfection by a factor of 20. Only

ωN B was shifted, consistent with our understanding of the B-correlated AC Stark shift phase. These intensity

systematic error checks were not included in the systematic error budget.

5.7. Magnetic Field Imperfections

The H state is very insensitive to a magnetic ﬁeld Bz due to its small g-factor, as discussed in section 2.2.

Sensitivity to the transverse ﬁelds is even further suppressed by the large size of the tensor Stark shift

relative to the Zeeman interaction. Nevertheless, there are known mechanisms by which magnetic ﬁeld

imperfections can contribute to systematic in section 5.2.6, and transverse ﬁelds Bxnr

errors: Bznr can contribute and Bynr can lead to the

to

the

ωN E
ΩN r E

systematic

error

discussed

geometric phase systematic errors [67]

discussed in section 5.4. We designed the experiment to allow a wide variety of magnetic ﬁeld tilts and

gradients to be applied as described in section 3.2.6 and we directly looked for systematic errors resulting

from these magnetic ﬁeld imperfections.

Both B-correlated and uncorrelated imperfections were applied. We did not precisely measure the

residual values of each of these parameters along the molecule beam line until we had studied all systematic

errors and collected our published data set. Based on the projected ∼105 magnetic shielding factor, we

expected all stray magnetic ﬁelds and gradients to be on the order of 10 µG and 1 µG/cm, respectively.

For this reason we only exaggerated these imperfections to ∼2 mG and ∼0.5 mG/cm. When we mapped

out the magnetic ﬁeld with a magnetometer inserted between the electric ﬁeld plates as described in section

3.2.6, we discovered that several imperfections were much larger than we expected (e.g. By ≈ 0.5 mG). This

was caused by poor magnetic shielding due to insuﬃcient shield degaussing. For this reason we gathered

additional eEDM data with some magnetic ﬁeld parameters exaggerated by an additional factor of ﬁve. ωN E

and nearly all other frequency channels, apart from ωnr and ωB were not observed to be aﬀected by any

of these magnetic ﬁeld parameters. Because uncorrelated stray magnetic ﬁelds and magnetic ﬁeld gradients

caused unexpected eEDM oﬀsets in the PbO eEDM experiment [50], we included contributions from all

uncorrelated magnetic ﬁeld imperfections in our systematic error budget described in section 5.10.

5.8. Electric Field Imperfections
Unlike the magnetic ﬁeld, we do not have the ability to control electric ﬁeld gradients and stray electric ﬁelds, aside from the average value of Enr. The ﬁeld plates were located at the center of the experiment, inside the vacuum chamber and magnetic shields and coils, with no direct access available. To search for systematic errors related to the electric ﬁeld, equal amounts of eEDM data were gathered with two diﬀerent electric ﬁeld magnitudes. The ωN E values from both ﬁeld magnitudes were cons-
istent with each other. The YbF eEDM experiment observed unexplained eEDM dependence on the voltage oﬀset common to both ﬁeld plates. For this reason we exaggerated this oﬀset by a factor of 1000 (relative to its residual value of ≈5 mV) and, even though it did not shift our eEDM measurement, included it in our systematic error budget.

5.8.1. Molecule Beam
The molecule beam should have ideally travelled parallel to the electric ﬁeld plates and well-centred between the plates. This minimizes Doppler shifts, protects the plates from being coated with ThO, and ensures that the molecules experience the most uniform electric ﬁeld. The entire beam source vacuum chamber sat on a two axis (yz) translation stage. The exit aperture of the buﬀer gas cell was aligned to within 1 mm of the centre of the ﬁxed collimators and electric ﬁeld plates, using a theodoli-
te. Geometric constraints only allowed us to exaggerate the cell misalignment by roughly a factor of three (up to 3 mm) before the molecules would have hit the sides of the ﬁeld plates. We also varied the transverse spatial and velocity distributions by using adjustable collimators between the beam source and spin-precession region to block half of the beam from the ±xˆ, ±zˆ directions. The value of ωN E was not observed to shift with any molecule beam parameter adjustment.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

60

5.9. Searching for Correlations in the eEDM Data Set

In addition to performing systematic error checks for possible variations of ωN E with various experimental parameters, we searched for statistically nonzero values within the set of 1536 possible correlations with the block and superblock switches. This analysis was performed for our primary measured quantities ω, C, and F and for a wide range of auxiliary measurements such as laser powers, magnetic ﬁeld, room temperature, etc. We also examined the switch-parity channels of ω, C, and F as a funct-
ion of time within the molecule beam pulse, and as a function of time within the polarisation switching cycle. We used the Pearson correlation coeﬃcient to look for correlations between the aforementioned switch-parity channels and used the autocorrelation function to look for signs of time variation of the mean within those channels. Figure 35 illustrates data from such a search with a subset of the previously described quantities. In this search, we looked at 4390 quantities and we set the signi-
ﬁcance threshold at 4σ which correponds to a probability of p ≈ 0.25 that there will be one or more false positives above that threshold. We represented the signiﬁcance of each of these quantities with a grayscale pixel. Each pixel that was signiﬁcant at the 4σ level is marked with a symbol corresponding to a known explanatory physical model, or a red dot if the signal is not yet explained. The fact that we understand most of the signiﬁcant signals present in our experiment, combined with the fact-
 that the statistical distribution of the remaining signals below the signiﬁcance threshold is consistent with a normal distribution, gives us added conﬁdence in our models of the experiment and our reported eEDM result.
Channels/correlations marked with symbols are signiﬁcantly nonzero due to known mechanisms as follows:

• Green stars: Correlations due to the nonzero and drifting signal in the ωN channel described in
section 5.5.
• Light blue squares: Signals in ωN EB channels due to the B˜-odd AC stark shift phase coupling to ΩNr E as described in section 5.2.6.

• Orange triangles: Correlations due to contrast or asymmetry coupling to ΩNr E . Contrast correlations arise simply because there is a linear dependence of total contrast on Rabi frequency, and the asymmetry
correlation is described in section 5.3.

• Brown diamond: Correlations in CN and related contrast channels due to nonzero Rabi frequency

correlations ΩNr and due to Stark mixing

ΩNr P . These arise between rotational

due to laser power levels in H and C,

correlations with which create N˜ -

the and

N˜ and P˜ switches and P˜-correlated transition

amplitudes on the H → C transition as described in section 5.6.2.

• Red dot: Signals above our signiﬁcance threshold for which we have been unable to ﬁnd a plausible
explanation. Even if these quantities arise from real physical eﬀects, they would need to couple to other correlated quantities to contribute to ωN E and there is no evidence for this in the eEDM dataset.

5.10. Systematic Error Budget
The method used for construction of a systematic uncertainty varies from experiment to experiment (see for example [123, 124]), and it is ultimately a subjective quantity. Even if individual contributions are derived from objective measurements, their inclusion or exclusion in the systematic uncertainty is subjective. Furthermore, the systematic uncertainty cannot possibly be a measure of the uncertainty in all systematic errors in the experiment, but rather only those which were identiﬁed and sea-
rched for. Although we work hard to identify all signiﬁcant systematic errors in the measurement, we cannot rule out the possibility that some were missed.
Our criteria for including a given quantity in the systematic uncertainty consist of three classes of systematic errors in order of decreasing importance of inclusion:
(A) If we measured a nonzero correlation between ωN E and some parameter which had an ideal value in the experiment, we performed auxiliary measurements to evaluate the corresponding systematic error and subtract that error from ωN E to obtain ωTN E . The statistical uncertainty in the shift made to ωN E contributed to the systematic uncertainty.
(B) If we observed a signal in a channel that we deemed important to understand, and it was not understood, but was not observed to be correlated with ωN E , we set an upper limit on the shift in ωN E due to a

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

61

Figure 35: Over 4,000 switch-parity channels (left) and correlations between switch parity channels (upper right) computed from the eEDM data set. The deviation of each quantity from zero in units of the statistical uncertainty is indicated by the grayscale shading. We set a signiﬁcance threshold of 4σ above which there is a probability of p = 25% of ﬁnding at least 1 false positive. We mark each signiﬁcant channel/correlation with a symbol corresponding to a model known to produce a signal in tha-
t channel. The quantities below this threshold exhibit a normal distribution, shown in the lower right.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

62

Table 4: Systematic error shifts and uncertainties for ωN E , in units of mrad/s grouped by inclusion
class (deﬁned in the text). Total uncertainties are calculated by summing the individual contributions in quadrature. Note that ωN E ≈ 1.3 mrad/s corresponds roughly to 1 × 10−29 e · cm for our experiment.

Class Parameter

Shift (mrad/s) Uncertainty (mrad/s)

A

Enr correction

−0.81

0.66

A

ΩNr E correction

A

ωE correlated eﬀects

−0.03

1.58

−0.01

0.01

B

ωN correlation

1.25

C

Non-reversing B-ﬁeld (Bznr)

0.86

C

Transverse B-ﬁelds Bxnr, Bynr

0.85

C

B-ﬁeld gradients

1.24

C

Prep./readout laser detunings

1.31

C

N˜ correlated detuning

0.90

C

E-ﬁeld ground oﬀset

0.16

Total Systematic

−0.85

3.24

Statistical Uncertainty

4.80

Total Uncertainty

5.79

possible correlation between the two channels. Since such a signal represented a gap in our understanding of the experiment, we added this upper limit as a contribution to the systematic uncertainty.
(C) If a similar experiment saw a nonzero, not understood correlation between their measurement channel and some parameter with an ideal experimental value, but we did not observe an analogous correlation, we set an upper limit on the shift in ωN E due to this imperfection. Since this signal may have signiﬁed a gap in our understanding of our experiment, we added this upper limit as a contribution to the systematic uncertainty.

Table 4 contains a list of the contributions to our systematic error, grouped by inclusion class, with the

corresponding shifts and/or uncertainties. Accounting for class A systematic errors was obligatory, and the

removal of these errors from ωN E can be viewed as a redeﬁnition of the measurement channel to ωTN E which does not contain those unwanted eﬀects. These systematic errors consisted of those that depended on the

parameters Enr, ΩNr E , and ωE as described in sections 5.2.6 and 5.4, and as such our reported measurement

of the T -odd spin precession frequency is deﬁned as ωTN E

=

ωN E

−

ωENnEr

−

ωN E
ΩN r E

−

ωωNEE .

The class B and

class C systematic errors were included in the systematic uncertainty to lend credance to our result despite

unexplained signals and unexplained systematic errors in experiments similar to ours. All uncertainties in

the contributions to the systematic error were added in quadrature to obtain the systematic uncertainty.

With reference to the class B criterion, we deemed the following channels as important to understand:

ωN , ωE , ωEB, and ωN EB. Signals were initially not expected in any of these channels and could be measured

with the same precision as ωN E . The ωnr, ωB and ωN B channels were not included in our systematic error

since the Zeeman spin precession signals present in these channels had non-stationary means and additional

noise due to drift in the molecule beam velocity. Only one of these channels, ωN , described in section 5.5,

met the class B inclusion criterion.

With reference to the class C criterion, we deﬁned the set of experiments similar to ours to include other

eEDM experiments performed in molecules: the YbF experiment [42] and the PbO experiment [50]. The

PbO experiment observed unexplained systematic errors coupling to stray magnetic ﬁelds and magnetic ﬁeld

gradients (cf. section 5.7), and the YbF experiment observed unexplained systematic errors proportional to

detunings (cf. section 5.6.1) and a ﬁeld plate ground voltage oﬀset (cf. section 5.8). Thus we included the

systematic uncertainty associated with the aforementioned eﬀects in our budget.

After having accounted for the systematic errors and systematic uncertainty, we reported ωTN E , the

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

63

contribution to the channel ωN E induced by T -odd interactions present in the H state of ThO, as

ωTN E =2.6 ± 4.8stat ± 3.2syst mrad/s

(93)

=2.6 ± 5.8 mrad/s,

(94)

where the combined uncertainty is deﬁned as the quadrature sum of the statistical and systematic uncertainties, σ2 = σs2tat + σs2yst. This result is consistent with zero within 1σ. Since σsyst is to some extent a subjective quantity, its inclusion should be borne in mind when interpreting conﬁdence intervals based on σ.
Nevertheless, this inclusion decision does not have a large impact on the meaning of the resulting conﬁdence
intervals since σ is only about 20% larger than σstat.

6. Interpretation

6.1. Conﬁdence Intervals

A classical (i.e. frequentist) conﬁdence interval [125] is a natural choice for reporting the result of an eEDM measurement. For repeated and possibly diﬀerent experiments measuring the eEDM, the frequency with which the conﬁdence intervals include or exclude the value de = 0 suggests whether the results are consistent or inconsistent, respectively, with the Standard Model. Furthermore, the conﬁdence level (C.L.) represents an objective measure of the a priori probability that the conﬁdence interv-
al assigned to any one of these measurements, selected at random, includes the unknown true value of the eEDM de,true. Since no statistically signiﬁcant eEDM has yet been observed, the recent custom has been for electron eEDM experiments to report an upper limit at the 90% C.L. [41, 42]. The proper interpretation of such limits is that if the experiment were performed a large number of times, and the conﬁdence interval were computed in the same way for each experimental trial, de,true would fall w-
ithin the interval 90% of the time.
Feldman and Cousins pointed out that in order for this interpretation to be valid, the conﬁdence interval construction must be independent of the result of the measurement [126]. If the procedure for constructing 90% conﬁdence intervals is chosen contingent upon the measurement outcome, the resulting intervals may ‘undercover’, i.e. fail to include the true value more than 10% of the time. This happens, for example, if an upper bound is reported whenever the measured result falls within a few stan-
dard deviations of zero, and a two-sided conﬁdence interval is reported whenever the measured result is signiﬁcant at more than a few-sigma level. Feldman and Cousins termed this inconsistent approach ‘ﬂip-ﬂopping’.
In order to avoid ﬂip-ﬂopping, we chose a conﬁdence interval construction, the Feldman-Cousins method described in reference [126], that consistently uniﬁes these two limits. We applied this method to a model with Gaussian statistics, in which the measured magnitude of the eEDM channel, x = |ωTN,mE eas|, is sampled from a folded Gaussian distribution

P (x|µ) = √1 σ 2π

exp

−

(x

− µ)2 2σ2

+ exp

−

(x

+ µ)2 2σ2

,

(95)

where the location parameter is the unknown true magnitude of the eEDM channel, µ = |ωTN,tErue|, and the scale parameter σ is equal to the quadrature sum of the statistical and systematic uncertainties given in equation 94 and at the bottom of table 4.
The central idea of the Feldman-Cousins approach is to use an ordering principle which, for each possible value of the parameter of interest µ, ranks each possible measurement outcome x by the ‘strength’ of the evidence it provides that µ is the true value. The values of x that provide the strongest evidence for each value of µ are included in the conﬁdence band for that value. In the Feldman-Cousins method, the metric for the strength of evidence is the likelihood of µ given that x is measured [i-
.e. L(µ|x) = P (x|µ)], divided by the largest probability x can possibly achieve for any value of µ. The denominator in this prescription takes into account the fact that an experimental result that is somewhat improbable under a particular hypothesis can still provide good evidence for that hypothesis if the result is similarly improbable under even the most favorable hypothesis. This approach has its theoretical roots in likelihood ratio testing [127].
Our speciﬁc procedure for computing conﬁdence intervals was a numerical calculation performed using the following recipe (cf. ﬁgure 36):

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

64

(i) Construct the conﬁdence bands on a Cartesian plane, of which the horizontal axis represents the possible values of x and the vertical axis the possible values of µ. Divide the plane into a ﬁne grid with x-intervals of width ∆x and µ-intervals of height ∆µ. We will consider only the discrete possible values xi = i∆x and µj = j∆µ, where the index i(j) runs from 0 to nx(nµ).
(ii) For all values of i, maximize P (xi|µj) with respect to µj. Label the maximum points µmax,i. (iii) For some value of j, say j = 0, compute the likelihood ratio R(xi) = P (xi|µj)/P (xi|µmax,i) for every
value of i.
(iv) Construct the ‘horizontal acceptance band’ at µj by including values of xi in descending order of R(xi). Stop adding values when the cumulative probability reaches the desired C.L. of 90%, i.e., P (xi|µj)∆x = 0.9.
xi
(v) Repeat steps (iii)–(iv) for all values of j.
(vi) To determine the reported conﬁdence interval, draw a vertical line on the plot at x = |ωTN,mE eas|. The 90% conﬁdence interval is the region where the line intersects the constructed conﬁdence band.

5

4

3 4

µ/ σ µ/ σ

2 3

1

2

99.7%

0

99%

95%

1

90%

−1

Feldman-Cousins method

80%

Gaussian central interval

68%

Folded Gaussian upper limit

0

−2

0

1

2

3

4

5

6

7

0

0.5

1

1.5

2

2.5

x/σ

x/σ

Figure 36: Left: Feldman-Cousins conﬁdence bands for a folded Gaussian distribution, constructed as described in the text, for a variety of conﬁdence levels. Each pair of lines indicates the upper and lower bounds of the conﬁdence band associated with each C.L. To the left of the x-intercepts, the lower bounds are zero. Conﬁdence bands are plotted as a function of the possible measured central values x scaled by the standard deviation σ, and our result is plotted as a vertical dot-dashed line. The-
 µ-value of the point at which our result line intersects with each of the colored lines gives the upper limit of our measurement at diﬀerent C.L.’s. Right: Comparison between 90% conﬁdence intervals computed using three diﬀerent methods, described in the text. Conﬁdence bands are plotted as a function of the possible measured central values of a quantity x scaled by the standard deviation σ. Our result, |ωTN,mE eas|/σ = 0.46, is plotted as a vertical dot-dashed line. The µ-values of the points at-
 which our result line intersects the upper and lower line for each method give the upper and lower bounds of three possible 90% conﬁdence intervals for our measurement. To avoid invalidating the conﬁdence interval by ﬂip-ﬂopping, our result should be interpreted using the Feldman-Cousins method, which we chose before unblinding.

The left-hand plot in ﬁgure 36 was generated using the prescription above at several diﬀerent C.L.’s.
Note that the 90% conﬁdence intervals switch from upper bounds to two-sided conﬁdence intervals when the value of |ωTN,mE eas| becomes larger than 1.64σ. This is the level of statistical signiﬁcance required to exclude the value de = 0 from a 90% C.L. central Gaussian conﬁdence band.
From equation (94), we ﬁnd |ωTN,mE eas| = 0.46σ with σ = 5.79 mrad/s. In our conﬁdence interval construction, this corresponds to an upper bound of |ωTN E | < 1.9σ = 11 mrad/s (90% C.L.). A comparison

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

65

between three diﬀerent 90% conﬁdence interval constructions for small values of µ is shown in the right-hand plot of ﬁgure 36. The black dashed lines represent the central conﬁdence band for the signed values (rather than the magnitude) of µ and x, where µ is the mean of a Gaussian probability distribution in x. The blue lines give an upper bound constructed by computing the the value of µ such that the cumulative distribution function for the folded Gaussian in equation 95 is equal to 0.9 for eac-
h value of x. It should be noted that this upper bound is more conservative than a true classical 90% conﬁdence band, as it overcovers for small values of µ (e.g., if the true value were µtrue < 1.64σ, the conﬁdence intervals of 100% of experimental results would include µtrue). We nevertheless include this construction for comparison because we believe that previous experiments have reported EDM upper bounds using this method [41, 42, 106]. These intervals have a valid interpretation as Bayesian -
‘credible intervals’ conditioned on a uniform prior for µ [126]. Finally, the red lines represent the Feldman-Cousins approach described here, which uniﬁes upper limits and two-sided intervals. For our measurement outcome, indicated by the vertical dot-dashed line, the Feldman-Cousins intervals yield a 7% larger eEDM limit than the folded Gaussian upper bound would have.

6.2. Physical Quantities

Under the most general interpretation, our experiment is sensitive to any P - and T -violating interaction that produces an energy shift ωTN E . The eEDM is not the only such predicted interaction for diatomic molecules [128], and in particular a P - and T -odd nucleon-electron scalar-pseudoscalar interaction would also manifest as a N˜ E˜-odd phase in our experiment. Thus, we write

ωTN E = −deEeﬀ + WSCS, †

(96)

where WS is a (calculated) energy scale speciﬁc to the species of study [28, 29, 129–131] and CS is a dimensionless constant characterizing the strength of the T -violating nucleon-electron scalar-pseudoscalar
coupling relative to the ordinary weak interaction. We can use our measurement to set an upper limit on de by assuming that CS = 0 and that ωTN E is
therefore entirely attributable to the eEDM. Taking the eﬀective electric ﬁeld to be the unweighted mean of
the two most recent calculations of this quantity [28, 29], Eeﬀ = 78 GV/cm, we can interpret our result in equation (94) as:

de = (−2.2 ± 4.8) × 10−29 e · cm

(97)

⇒ |de| < 9.3 × 10−29 e · cm (90% C.L.),

(98)

where the second line is obtained by appropriately scaling the upper bound on ωTN E derived in section 6.1. If, instead, we assume that de = 0, our measurement of ωTN E in ThO can be restated as a measurement
of CS. Using an unweighted mean of the most recent calculations of the interaction coeﬃcient, WS = −2π × 282 kHz [28, 29], we obtain:

CS = (−1.5 ± 3.2) × 10−9 ⇒ |CS| < 6.2 × 10−9 (90% C.L.),

(99) (100)

which, at the time, was an order of magnitude smaller than the existing best limit set by the 199Hg EDM experiment [114], and is still a factor of 2 smaller than the recently improved limit from the same group [132].

7. Summary and Outlook

Our new limit on the size of the electron’s electric dipole moment [27]:

de ≤ 9.3 × 10−29 e · cm.

(101)

† Note that the sign of the CS term is opposite to that used, incorrectly, in our original paper [27]. In addition, here WS diﬀers in magnitude from the related quantity WT,P given explictly in [28, 29]. A detailed discussion of the sign and notational conventions for this Hamiltonian is provided in Appendix A.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

66

represented an order of magnitude improvement on previous bounds [41, 42] and more strongly constrained the viable parameter space for many extensions to the Standard Model, while probing one-loop eﬀects of new physics at a mass scale of ∼10 TeV.
We have presented our experimental method for measuring an eEDM-induced precession phase in the dipolar molecule ThO, detailing the way we utilise several experimental switches to isolate the component of accumulated phase with the correct symmetry properties. We described the apparatus that we used to carry out our measurement and have presented a thorough analysis of the systematic errors present in the experiment, showing in detail the approach to ﬁnding and quantifying shifts of the eEDM-assoc-
iated phase and their corresponding uncertainties.
Despite the success of the experiment in reducing the limit on the value of the eEDM, there are several aspects of the experimental procedure that we are improving on which will signiﬁcantly further enhance our statistical sensitivity. These upgrades include:
• Thermochemical Source: Instead of relying on ablation to generate ThO molecules from a ThO2 target, a relatively uncontrolled process, we are developing a new method using a thermochemical reaction-based beam source. This relies on the speciﬁc reaction [133, 134]

Th(s) + ThO2(s) → 2ThO(g)

(102)

occurring in a precursor target made of a Th/ThO2 mixture. Preliminary tests have demonstrated a roughly factor of 10 increase in the time-averaged molecular ﬂux produced via this method.
• Beam Geometry: In the current experiment, the molecules in the spin-precession region subtend a solid angle of ∼60 µsr relative to the beam source, meaning only ∼10−5–10−4 of molecules produced reach the state readout region. This useful fraction of molecules can be increased in two ways: by shortening the distance between beam source and spin-precession region, and by increasing the spacing between the electric ﬁeld plates so as to accomodate a beam with a larger transverse size. By making both-
 of these changes to the apparatus we can increase the usable molecule number by a factor of ≈8.
• State Preparation: In the current experiment we transfer molecules into the H state by optically pumping via |A, J = 0 (see section 3.2.4). This procedure is ineﬃcient; only ∼35% of molecules addressed by the excitation laser are transferred into the H-state manifold, within which 1/6 of the population is in the desired superposition state |B(ˆprep, N˜ , P˜) . We can signiﬁcantly increase the number of molecules prepared by using stimulated Raman adiabatic passage (STIRAP) to perform coherent po-
pulation transfer from X to H via C. We have demonstrated an estimated eﬃciency of 75% which will increase the usable molecule number by a factor of ≈12 [135].
• State Readout: We will be changing the transition which we perform our state readout on. The I state of ThO is another Ω = 1 state which has a number of advantages over the C state, namely a ∼10 times higher transition dipole moment from the H state, a larger branching ratio to the X state and a shorter ﬂuorescence wavelength to X [65, 92, 136]. The latter allows for higher quantum eﬃciency detection of photons. In addition, the eﬃciency with which we collect the light is improved by using light-
 pipes instead of ﬁber bundles. Together we anticipate a factor of ≈6 improvement in signal [135].
• Other Improvements: The suppression of known systematic eﬀects was limited only by statistics. To the best of our knowledge, the limit on ∂ωN E /∂Enr (see section 5.2) could have been 10 times smaller if we had collected the data required to tune out that slope with such precision. Therefore, there is no reason to believe that the systematic eﬀects we have discovered in this ﬁrst generation measurement will limit the next generation of the experiment. However, we are taking additional measures t-
o suppress such systematics, such as new electric ﬁeld plates designed to minimise the absorbed laser power and hence the birefringence.
The ACME search for the electric dipole moment of the electron is now entering its second generation and we anticipate a new measurement that will either ﬁnd a nonzero value of de, or constrain it to be
10−29 e · cm, thus probing one-loop interactions at an energy scale of ∼30 TeV.

Acknowledgements This work was supported by the National Science Foundation.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

67

Appendix A. Conventions Used in the T -odd Hamiltonian

Since there is not a consistent notation used throughout the literature on eEDM measurements in molecules,

we describe here the conventions used throughout this paper and our other recent work. We suggest that

future work in the ﬁeld consider adopting the same conventions if possible.

We begin with notation to describe the relevant molecular structure. Following standard conventions

from Ref. [60], we deﬁne the operators Λ = L · nˆ, Σ = S · nˆ, and Ω = Je · nˆ = Λ + Σ, where nˆ is a unit vector

along the internuclear axis, L and S are the total electronic orbital and spin angular momentum, respectively,

and Je ≡ L + S is the total electronic angular momentum. It is also useful to deﬁne the quantities Λ, Σ, and Ω, which are the vector components along nˆ of L, S, and Je, respectively. For example, Ω = Ωnˆ = (Je · nˆ)nˆ. We draw attention to our convention for the direction of the internuclear axis, nˆ: we choose it to point from

the negative oxygen ion to the positive thorium ion, i.e. such that nˆ is aligned with the molecule’s electric

dipole moment, D. This choice (for which there appears to be no consensus in the literature) impacts the

physical meaning associated with the sign of the quantum numbers Λ, Σ, and Ω and their vector analogues.

In the molecule-ﬁxed frame, the Hund’s case (a) basis consists of eigenstates of S, Λ, and Σ, and hence

also of Ω. There is a degeneracy between states with opposite signs of all these quantum numbers, i.e.

between |Λ; S, Σ; Ω and | − Λ; S, −Σ; −Ω . In the laboratory frame, with no external ﬁelds applied, the

eigenstates of energy, parity P , and total angular momentum J = Je + R (where R is the pure rotational angular momentum) and its projection along the laboratory quantization axis zˆ, Jz (with quantum number M ), correspond to even and odd superpositions of these molecule-frame states. The associated eigenstates

can be written as

||Λ|; S, |Σ|; J, |Ω|, M ; P = |Λ; S, Σ; Ω |J, Ω, M + P (−1)(J−S)| − Λ; S, −Σ; −Ω |J, −Ω, M

√ / 2.

(A.1)

The opposite-parity states with otherwise equal quantum numbers have a small energy splitting ∆Ω (due to Coriolis coupling). (In the |H, J = 1 state of ThO, we refer to this splitting as ∆Ω,1.) In a suﬃciently
strong polarizing electric ﬁeld E = Ezˆ, such that |DE| ∆Ω, these states fully mix. If in addition |DE| BJ (where B is the rotational constant), this results in energy eigenstates where J, M , and (signed) Ω are all good quantum numbers, as described for ThO in the |H, J = 1 manifold in sections 2.2 and 3.1. In this
limit, N˜ ≡ sgn E · nˆ = sgn(Ω)sgn(M )sgn(E) = ±1 is a good quantum number.
The H state of ThO can be described, to a fair approximation [74], as a pure 3∆1 state in the Hund’s case (a) basis, i.e. with |Λ| = 2, |Σ| = 1, and |Ω| = |Λ + Σ| = 1. Hence in this approximation, in the ThO
H state Σ = −Ω and Σ is antiparallel to Λ and Ω. While Λ, Σ, and Ω are good quantum quantum numbers in the Hund’s case (a) basis, in the more general case of Hund’s case (c) coupling—which very accurately describes the H state of ThO [74]—only Ω is well-deﬁned. Hence it is common in the literature of the ﬁeld to express relevant molecule-frame matrix elements in terms of their dependence only on the value of Ω. We follow this convention as well. However, in the H state of ThO, the expectation valu-
es of the operators Λ and Σ (evaluated in a state with a given value of Ω) are not far from their values in the Hund’s case (a) basis. Since these expectation values have signs that are linked to the sign of Ω, it is useful to write them in terms of the good quantum number Ω; for example, in the H state of ThO, Σ = −| Σ |Ω ≈ −Ω. This approximation is often used elsewhere in the literature.
In our experiment we apply a magnetic ﬁeld B = Bzˆ; hence we are also concerned with the molecular magnetic dipole moment, µ. In the laboratory frame, we write µ ≡ gJ µBJ, so that under the Zeeman Hamiltonian HZ = −µ · B, a lab-frame eigenstate with quantum numbers J, M has energy shift ∆EZ = −gJ µBM B. Since g1, the value of g in the |H, J = 1 state of ThO, is negative, µ is antiparallel to J.

Appendix A.1. eEDM Interaction
To make contact with common language in the literature about the eEDM in molecules, we ﬁrst write the eﬀective, nonrelativistic eEDM interaction in terms of an internal electric ﬁeld Eint. (As we will see, this is closely related, but not identical, to the eﬀective ﬁeld Eeﬀ .) We choose a convention where Eint = −Eintnˆ. This means that the internal ﬁeld vector is deﬁned to be directed opposite to nˆ, i.e., along the average direction of the electric ﬁeld inside the molecule (here, from positive T-
h ion to negative O ion) when Eint is positive. We also adopt the convention that, in the H state of ThO, there is an eﬀective eEDM deeﬀ = deS (where

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

68

again S = 1 to a fair approximation). This choice appears, at ﬁrst glance, to contradict the discussion in
section 2.1, where for a single electron we wrote de = 2des (where s = 1/2). However, these two deﬁnitions are in fact consistent when taking into account that in the H 3∆1 state of ThO only one of the two valence electrons (the one in the σ orbital) contributes signiﬁcantly to the EDM energy shift, while both electrons
contribute to the total spin S = 1. Hence, in our formulation, the molecule-frame projection deeﬀ · nˆ can take extreme values ±de, as expected for a single contributing electron. (This ‘single contibuting electron’ approximation is valid for all molecules used to date in searches for the eEDM.)
We then write the eﬀective eEDM Hamiltonian HEeﬀDM in the standard form for interaction of an electric dipole moment with the internal electric ﬁeld:

HEeﬀDM = −deeﬀ · Eint = +deEintS · nˆ,

(A.2)

where the + sign in the ﬁnal expression arises from the sign convention for Eint. In eigenstates of Ω, the expectation value of HEeﬀDM—that is, the energy shift ∆EEDM due to the eEDM—can be written as

∆EEDM = +deEint Σ = +de (Eint| Σ |) sgn ( Σ ) .

(A.3)

Now, we ﬁnally re-introduce the eﬀective electric ﬁeld Eeﬀ used throughout the main text of this paper. This is related to the internal ﬁeld introduced above, via

Eeﬀ ≡ | Σ |Eint,

(A.4)

We can then use this notation to describe the eﬀective nonrelativistic eEDM interaction, within a given electronic state and eigenstate of Ω (and otherwise independent of molecular structure), as follows:

Eeﬀ ≡ −Eeﬀ nˆ;
de ≡ deS/| Σ |; HEeﬀDM = −de · Eeﬀ = +deEeﬀ Σ/| Σ |; ∆EEDM = sgn( Σ )deEeﬀ ,

(A.5) (A.6) (A.7) (A.8)

where the sign in the last expressions arises from the deﬁned deﬁnitions of Σ (component of S along nˆ) and
Eeﬀ (antiparallel to nˆ). All relevant quantities are summarised pictorially in ﬁgure A1. In most of the theoretical literature on this subject, this energy shift is written in the unambiguous
form ∆EEDM = +deWdΩ. However, there has been no consistent deﬁnition in the literature for the relation between Wd and Eeﬀ . In particular, both their relative signs and the dependence of their relative magnitude on the value of |Ω| (encompassing both the case of one- and two-electron systems) are often deﬁned diﬀerently, or imprecisely. In our notation, the expressions above imply a general relationship between Eeﬀ and Wd:

Eeﬀ = WdΩsgn( Σ ).

(A.9)

This relation is valid for systems with one or two valence electrons (in the ‘single contributing electron’
approximation for the latter case), and regardless of the relative directions of Σ and Ω. Now we apply these general considerations to the speciﬁc case of the H state of ThO. Here, since
Σ ≈ −Ω, we ﬁnd that Eeﬀ = −Wd with our conventions. Thus, the energy shifts can be written for ThO as

∆EEDM = −deEeﬀ Ω.

(A.10)

In our experiment, this gives rise to energy shifts, for a given direction of the laboratory electric ﬁeld E, given

by

H, J = 1, N˜ , M |HeeEﬀDM|H, J = 1, N˜ , M = −deEeﬀ M N˜ E˜,

(A.11)

since in our notation Ω = M N˜ E˜. Then, ﬁnally, the experimentally determined energy shift arising from the

eEDM is

ωENDEM

=

1 2

1 N˜ E˜

H, J = 1, N˜ , M = +1|HeeEﬀDM|H, J = 1, N˜ , M = +1

− H, J = 1, N˜ , M = −1|HeeEﬀDM|H, J = 1, N˜ , M = −1

= −deEeﬀ .

(A.12)

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

69

nˆ D µ Ω Λ Σ J de Eeﬀ

nˆ D µ Ω Λ Σ J de Eeﬀ

Ω = +1 M = −1 N˜ = −1

M =0

Ω = −1 M = +1 N˜ = −1

nˆ D µ Ω Λ Σ J de Eeﬀ
E zˆ B
Ω = −1 M = −1 N˜ = +1

nˆ D µ Ω Λ Σ J de Eeﬀ
Ω = +1 M = +1 N˜ = +1

nˆ D µ Ω Λ Σ J de Eeﬀ

nˆ D µ Ω Λ Σ J de Eeﬀ

Ω = +1 M = −1 N˜ = −1

M =0

Ω = −1 M = +1 N˜ = −1

nˆ D µ Ω Λ Σ J de Eeﬀ
E zˆ B
Ω = −1 M = −1 N˜ = +1

nˆ D µ Ω Λ Σ J de Eeﬀ
Ω = +1 M = +1 N˜ = +1

Figure A1: Summary of sign conventions used in the ACME experiment. All vectors depict expectation values of operators deﬁned in the text, in the states |H, J = 1, N˜ , M . Note the diﬀerence between scalar
Ω and vector Ω. The ﬁgure is drawn with a negative g-factor, i.e. the magnetic moment µ opposes J, and with positive values of de and Eeﬀ . Energy levels are shown in the centre of the ﬁgure — solid lines show the Stark-shifted levels (M = 0 levels are unaﬀected), dashed lines include Zeeman shifts and dotted lines include a non-zero eEDM interaction. Figure inspired by [137].

Appendix A.2. Scalar-Pseudoscalar Nucleon-Electron Interaction

We next turn to notation describing the T -violating scalar-pseudoscalar (SP) interaction between a nucleon and an electron. The relativistic Hamiltonian for this interaction can be written as

HSP

=

i

G√F 2

(Z

CS,p

+

N CS,n)γ0γ5ρN(r),

(A.13)

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

70

where GF is the Fermi coupling constant, γi are Dirac matrices, ρN(r) is the normalised nuclear density, Z(N ) is the proton (neutron) number, and CS,p and CS,n are dimensionless constants which describe the interaction strength (relative to that of the ordinary weak interaction) speciﬁcally for protons and neutrons,
respectively. Using the deﬁnition

CS

=

Z A

CS,p

+

N A

CS,n

=

Z A

CS,p

+

1

−

Z A

CS,n,

(A.14)

where A = Z + N , CS represents a weighted average of the couplings to protons and neutrons, and is
diﬀerent for every nuclear species. However, since the ratio Z/A is nearly the same for all heavy nuclei used in molecular and atomic EDM experiments (ranging only from Z/A = 0.41 for 133Cs to Z/A = 0.39 for 232Th), typically a common value for CS is assumed for all experiments of this type. Thus we can write

HSP

=

i

G√F 2

ACSγ0

γ5ρN

(r).

(A.15)

In a given molecular electronic state, this gives rise to a non-relativistic, single-electron eﬀective Hamiltonian

of the form HSeﬀP = 2s · nˆCSYS; the factor of 2 is included so that the maximal energy shifts due to this term have the simple form ∆ESmPax = ±CSYS. By analogy with our discussion of the eEDM Hamiltonian, in a molecular state with S = 1 and a ‘single contributing electron’, as in the H 3∆1 state of ThO, we rewrite

this in the form

HSeﬀP = S · nˆCSYS.

(A.16)

Hence, the energy shift due to this interaction can be written as

∆ESP = S · nˆ CSYS = YS [ Σ /Ω] Ω,

(A.17)

where the term in square brackets is a constant of the molecular state, determined by the ﬁxed relative size and orientation of Σ and Ω, with value ≈ −1 in the H 3∆1 state of ThO. In the literature on molecular
eEDM systems, this energy shift is typically written in the simpler form

∆ESP = CSWSΩ.

(A.18)

Here, in our notation, WS ≡ YS [ Σ /Ω] (≈ −YS in ThO). However, quantities analogous to YS (in terms of which the energy shifts depend explicitly on the spin direction) are rarely introduced in the literature;
instead, only forms analogous to WS (where the energies depend only on Ω) are used. Our deﬁnition for CS was historically a standard notation used in the literature. However, in some recent
papers (e.g. references [28, 138]) it is implicitly assumed that the neutron coupling CS,n vanishes. In these papers, the factor ACS in equation A.15 is replaced by ZCS,p (or its equivalent in a diﬀerent notation),† and the energy shift is written in the analogous form ∆ESP = CS,pWS,pΩ. These papers report values of WS,p in the H state of ThO, based on sophisticated calculations of the molecular wavefunctions. However, since
there is no particular reason to expect this interaction to couple more strongly to protons than to neutrons,
we prefer to report our results in terms of CS. To do so, we use the relation WS = (A/Z)WS,p to determine WS from the reported values for WS,p.
Finally, the experimentally determined energy shift arising from the nucleon-electron SP interaction is

and the total T-violating energy shift is

ωSNPE = CSWS,

(A.19)

ωTN E = −deEeﬀ + CSWS = deWd + CSWS.

(A.20)

Note that the sign of the CS term is opposite to that used, incorrectly, in our original paper [27].

† In reference [138] our CS,p is denoted as kT,P and our WS,p as WT,P; in Ref. [28], our WS,p is denoted simply as WS. References [131, 139] denote our CS as CSP and our WS as Wc.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

71

Appendix A.3. Relation to other notations in the literature

Table A1 shows some of the conventions used in the literature to describe the T -violating electron-nucleon interaction in molecular systems, and how they relate to our conventions. We note in particular three key diﬀerences between the (shared) conventions of references [28, 138]—which currently provide the most
accurate values for Wd and WS—and ours. First: these references deﬁne nˆ in the direction opposite to D, and hence opposite to ours. This in turn means that their deﬁnition of Ω has opposite sign to ours. Hence, the same physical energy shifts (deﬁned as ∆EEDM = WdΩ both there and here) are obtained only if we take Wd to have sign opposite to that of the reported Wd in these papers. Second: these references deﬁne the eEDM energy shift as ∆EEDM = +deEeﬀ Ω, while we have shown that in our notation ∆-
EEDM = −deEeﬀ Ω. Here there are two sign diﬀerences (one from the overall sign, one from the deﬁnition of Ω). Hence, the same physical energy shifts are obtained when taking Eeﬀ to have the same sign as reported in these papers. Third: these references formulate the scalar-pseudoscalar nucleon-electron interaction in terms of a quantity equivalent to our WS,p rather than our WS. Hence we must rescale these values as described above, using WS = (A/Z)WS,p. In addition, the same physical energy shift-
s ∆ESP = WSΩ are obtained only if we take WS,p to have sign opposite to that of the reported WS,p in these papers.

ACME

nˆ

Eeﬀ

∆EEDM

deWdΩ = −deEeﬀ Ω = −de · Eeﬀ

∆ESP CSWSΩ

Lee et al. [137]

−de · Eeﬀ a

YbF [99]

−de · Eeﬀ b

Kozlov et al. [128, 140]

+WddeΩc

Skripnikov et al. [29, 129, 138]
Fleig et al. [28, 141, 142]
Dzuba et al. [130, 131]

[] []

+WddeΩ = +deEeﬀ sgn(Ω)d +WddeΩ =
+deEeﬀ [sgn(Ω)]g +Wdde[sgn(Ω)] =
−deEeﬀ [sgn(Ω)]i

a Reference [137], p. 2007 b Reference [99], p. 3 c Reference [128], above equation 6.27 d Reference [138], equation 1 and following e Reference [138], equation 4 f Reference [138], equation 4 and [130], equation 25 and following g Reference [141], equation 1 and Reference [142] equations 2–4 h Reference [143], equations 3 and 4 i Reference [130], equation 24 and table IV j Reference [130], equation 25

+WT,P kT,P Ωe, where kT,P = ACS/Zf
+WP,T kSΩh, where kS = ACS/Z
+Wc C SP [sgn(Ω)]j

Table A1: Summary of the diﬀerent conventions used in some of the literature relating to eEDM measurements/theory. Where entries are left blank the convention is not stated in the reference provided. Quantities in square brackets are not explicitly stated in the references but are implied. In some cases, nomenclature has been modiﬁed for consistency. Footnotes provide speciﬁc references for the equations shown.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

72

Appendix B. Glossary of Abbreviations and Symbols

Appendix B.1. Experiment Switches
During the course of the experiment, we performed many parameter switches. Most of these switch parameter symbols are denoted by a superscript tilde X˜, which indicates that that parameter takes on two values, X˜ = ±1.
N˜ Used as a quantum number, N˜ ≈ E˜sgn (MΩ), for states of |M | > 0, |Ω| > 0, that refers to states with opposite molecular alignment with respect to the applied electric ﬁeld. It is also used to refer to the experiment switch between spectroscopically addressing states in |H, J = 1 with opposite values of N˜ .
E˜ Denotes the alignment of the applied electric ﬁeld with respect to the laboratory zˆ axis, E˜ = sgn E˜ · ˆz
where E is the applied electric ﬁeld.
B˜ Denotes the alignment of the applied magnetic ﬁeld with respect to the laboratory zˆ axis, B˜ = sgn B˜ · ˆz
where B is the applied magnetic ﬁeld. θ˜ Denotes the state of the polarisation dither that is used to extract the contrast in the spin precession
measurement. It refers to the direction of the oﬀset angle in the xy plane of the state readout polarisation basis Xˆ , Yˆ , relative to the average polarisation of these lasers. P˜ Used as a quantum number to denote the parity (eigenvalue of the parity operator P ) of a given molecular state of well-deﬁned parity. It is also used to refer to the experiment switch between spectroscopically addressing states in |C, J = 1 with opposite values of P˜ with the state readout lasers. L˜ Denotes the state-
 of the mapping between the two output channels of the electric ﬁeld voltage supply, and the two electric ﬁeld plates which can be either connected normally (+1), or inverted relative to normal (-1). R˜ Denotes the state of an experimental switch of the state readout polarisation basis oﬀset angle with respect to the x-axis by either 0 (+1) or π/2 (−1). G˜ Denotes the state of an experimental switch of the global polarisation; the state preparation and state readout lasers are rotated synchronousl-
y by a common angle. This can be thought of as a redeﬁnition of the xˆ and yˆ axes in the xy plane.
Bz Denotes the magnitude of the magnetic ﬁeld along the zˆ direction in the laboratory, Bz = |B · zˆ|. This parameter is switched between three values diﬀering by about 20 mG. In ﬁgure 35, channels X that are ‘odd’ with respect to this parameter refer to the linear variation ∂X/∂Bz.
E Denotes the magnitude of the electric ﬁeld, E = |E|. This parameter is switched between two values. kˆ · zˆ Denotes the orientation of both the state preparation and the state readout laser pointing directions
with respect to the laboratory zˆ axis. This is a binary switch, kˆ · zˆ = ±1, but we do not denote this switch with a tilde as we do with the other binary switch parameters.

Appendix B.2. Laser Parameters
There are a variety of laser parameters which are used to describe the state preparation laser that is denoted with a subscript ‘prep’, or the state readout lasers that are denoted with a subscript ‘read’ if the property applies to both state readout lasers, or with subscripts X and Y , if the parameter can vary between the two readout lasers.
kˆ Laser pointing direction. In this paper, the pointing direction is always nearly aligned or antialigned with respect to the laboratory zˆ axis such that kˆ · zˆ ≈ ±1.
ϑk Deﬁned in equation 54. Polar angle of deviation of the pointing kˆ from aligned or anti-aligned with the zˆ axis.
ϕk Deﬁned in equation 54. Azimuthal angle denoting the direction in the xy plane, relative to the x-axis, of the deviation of the pointing kˆ from the zˆ axis.
ˆ Complex laser polarisation. The readout laser polarisations are also referred to as Xˆ and Yˆ as an alternative to ˆX and ˆY at some points.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

73

εˆ Eﬀective polarisation. Used to parameterize the eﬀect of experiment imperfections on the molecule state as the polarisation vector that would be required to obtain the same molecule state in the absence of those experiment imperfections.
θ Deﬁned in section 3.1 and equation 14 as the linear polarisation angle of the complex polarisation vector.
Θ Deﬁned in section 3.1 and equation 14 as encoding the ellipticity of the complex polarisation vector. S Deﬁned in section 3.1.2 as the relative circular Stokes parameter, S ≡ S3/I = cos 2Θ. ωL Laser frequency. P Laser power.
Ωr Rabi frequency for a particular laser beam and transition. Deﬁned as the transition dipole matrix element multiplied by the amplitude of the electric ﬁeld associated with the laser beam.
Γ Optical retardance for some birefrigent element along the laser beam path.
φΓ Angle in the xy plane of the fast axis associated with an optical retardance Γ.

Appendix B.3. Molecular States and Parameters
These symbols are all used to describe the molecular energy level structure and the manner in which our laser light interacts with the molecules, in particular for the state preparation and readout processes.
J Total angular momentum. M Projection of J onto the laboratory zˆ-axis. Ω Projection of J onto the internuclear axis, nˆ. BH Rotational constant of the H state. Eeﬀ ‘Eﬀective electric ﬁeld’ to which we consider the eEDM to be subjected. ∆Ω,1 The Ω-doublet splitting of the |H, J = 1 state. D1 Expectation value of the molecular electric dipole moment of the |H, J = 1 state. g1 The g-factor of the |H, J = 1 state. η Deﬁned in equation 38, it is proportional to the g-factor diﬀerence between the two -
N˜ states. ±, N˜ Sublevels within the |H, J = 1 (eEDM sensitive) manifold, labelled by their values of M and N˜ .
C, P˜ Sublevel to which molecules are excited during state preparation and readout. One of two sublevels in the |C, J = 1 manifold, with M = 0 and parity P˜ = ±1.
B(ˆ), N˜ , P˜ Superposition of M sublevels within the |H, J = 1, N˜ manifold that is depleted during state preparation with a laser beam of polarisation ˆ, as deﬁned in equation 12.
D(ˆ), N˜ , P˜ Superposition of M sublevels within the |H, J = 1, N˜ manifold that remains after state preparation with a laser beam of polarisation ˆ, as deﬁned in equation 13.
B±(ˆ), N˜ , P˜ Instantaneous eigenvectors of the three-level system formed by B(ˆ), N˜ , P˜ , D(ˆ), N˜ , P˜ and C, P˜ , as deﬁned in equation 63.
∆ One-photon detuning from resonance, discussed in section 3.2.4 and deﬁned in equation 27. γ Decay rate of the a given electronic state. The electronic state label is given in the subscript. In most of
the paper, only γC, the decay rate of the C state, is relevant. Ωr Transition Rabi frequency, which is proportional to the square root of the laser intensity. EB±, ED Instantaneous eigenenergies of the dressed three-level system, deﬁned in equation 64. χ˙ Complex polarisation rotation rate deﬁned in section 5.2.3. Π Deﬁned and discussed in section 5.2.3 and equation 74. This is a factor in the AC Stark shift phase that
is independent of laser polarisation but depends on the laser detuning and Rabi frequency. v The mean longitudinal velocity of the molecular beam.

Methods, Analysis, and the Treatment of Systematic Errors for the eEDM Limit in ThO

74

Appendix B.4. Measurement Quantities

These symbols represent quantities related to the measurement of the accumulated phase and the way in which it is extracted during data analysis, as well as some related quantities pertaining to systematic studies.

N Total number of measurments performed, equivalent to the number of detected photoelectrons. N0 Number of molecules in the state readout region in the particular N˜ level being addressed.

f Fraction of ﬂuorescence photons emitted in the state readout region that are detected.

S Recorded photoelectron count rate measured on the photodetectors.

F Photoelectron count rate due to the molecule ﬂuorescence. FX,Y is used to denote the molecular ﬂuorescence induced by the X and Y state readout lasers, respectively. Fcut is used to denote the ﬂuorescence threshold above which data was included in the analysis.

B Background count rate primarily due to scattered light from the state readout lasers. This background signal is subtracted from the raw photoelectron signal S to obtain the ﬂuorescence photoelectron count rate, F = S − B.

A Signal asymmetry as deﬁned in equation 20.

C Spin precession fringe contrast, as deﬁned in equation 21, is the sensitivity of the asymmetry to molecular spin precession.

φ Actual spin precession phase of the molecules as deﬁned in equation 16.

Φ Measured spin precession phase as described in section 3.1.2, Φ = A/(2C).

τ Measured spin precession time as described in sections 3.1 and 4.2.2.

ω Measured spin precession frequency, as deﬁned in equation 37, ω = Φ/τ .

χ2

Reduced

chi-squared statistic,

χ2

=

1 Ndof

i

xi −fi ({x}) dxi

2
,

where Ndof

is the number

of degrees of

freedom, xi are the data points, dxi are the uncertainties, and fi({x}) is a ﬁt function that can depend

on i and the ensemble of all of the data, {x}. For normally distributed data that ﬁts well to the applied

ﬁt function, χ2 should be consistent with 1.

ωN E The measurement channel of interest, the spin precession frequency channel that is correlated with N˜ and E˜. The expected eEDM signal should contribute to this channel.

ωTN E The contribution to spin precession frequency ωN E induced by T -odd spin precession eﬀects in the H state in ThO.

ωPN E A systematic error in the ωN E channel that is proportional to some parameter P .

REFERENCES

75

References

[1] Michelson A A and Morley E W 1887 Am. J. Phys. 34 33
[2] Wu C S, Ambler E, Hayward R W, Hoppes D D and Hudson R P 1957 Phys. Rev. 105(4) 1413–1415 URL http://link.aps.org/doi/10.1103/PhysRev.105.1413
[3] Christenson J H, Cronin J W, Fitch V L and Turlay R 1964 Phys. Rev. Lett. 13 138–140
[4] Lee T D and Yang C N 1957 Phys. Rev. 105(5) 1671–1675 URL http://link.aps.org/doi/10.1103/ PhysRev.105.1671
[5] Kobayashi M and Maskawa T 1973 Prog. Theor. Phys. 49 652
[6] ATLAS Collaboration 2012 Physics Letters B 716 1–29 ISSN 0370-2693 URL http://www. sciencedirect.com/science/article/pii/S037026931200857X
[7] Englert F and Brout R 1964 Phys. Rev. Lett. 13(9) 321–323 URL http://link.aps.org/doi/10. 1103/PhysRevLett.13.321
[8] Ambrosino F, Antonelli A, Antonelli M, Bacci C, Beltrame P, Bencivenni G, Bertolucci S, Bini C, Bloise C, Bocchetta S, Bocci V, Bossi F, Bowring D, Branchini P, Caloi R, Campana P, Capon G, Capussela T, Ceradini F, Chi S, Chiefari G, Ciambrone P, Conetti S, Lucia E D, Santis A D, Simone P D, Zorzi G D, Dell’Agnello S, Denig A, Domenico A D, Donato C D, Falco S D, Micco B D, Doria A, Dreucci M, Felici G, Ferrari A, Ferrer M, Finocchiaro G, Fiore S, Forti C, Franzini P, Gatti C, Gauzzi P, Giovan-
nella S, Gorini E, Graziani E, Incagli M, Kluge W, Kulikov V, Lacava F, Lanfranchi G, Lee-Franzini J, Leone D, Martini M, Massarotti P, Mei W, Meola S, Miscetti S, Moulson M, Mller S, Murtas F, Napolitano M, Nguyen F, Palutan M, Pasqualucci E, Passeri A, Patera V, Perfetto F, Pontecorvo L, Primavera M, Santangelo P, Santovetti E, Saracino G, Sciascia B, Sciubba A, Scuri F, Sﬁligoi I, Sibidanov A, Spadaro T, Testa M, Tortora L, Valente P, Valeriani B, Venanzoni G, Veneziano S, Ventura A, Versaci R -
and Xu G 2006 Physics Letters B 642 315–321 ISSN 0370-2693 URL http://www.sciencedirect.com/science/article/pii/S0370269306012251
[9] Kostelecky´ V A and Van Kooten R J 2010 Phys. Rev. D 82(10) 101702 URL http://link.aps.org/ doi/10.1103/PhysRevD.82.101702
[10] Dehmelt H, Mittleman R, Van Dyck R S and Schwinberg P 1999 Phys. Rev. Lett. 83(23) 4694–4696 URL http://link.aps.org/doi/10.1103/PhysRevLett.83.4694
[11] DiSciacca J, Marshall M, Marable K, Gabrielse G, Ettenauer S, Tardiﬀ E, Kalra R, Fitzakerley D W, George M C, Hessels E A, Storry C H, Weel M, Grzonka D, Oelert W and Sefzick T (ATRAP Collaboration) 2013 Phys. Rev. Lett. 110(13) 130801
[12] Bennett G W, Bousquet B, Brown H N, Bunce G, Carey R M, Cushman P, Danby G T, Debevec P T, Deile M, Deng H, Dhawan S K, Druzhinin V P, Duong L, Farley F J M, Fedotovich G V, Gray F E, Grigoriev D, Grosse-Perdekamp M, Grossmann A, Hare M F, Hertzog D W, Huang X, Hughes V W, Iwasaki M, Jungmann K, Kawall D, Khazin B I, Krienen F, Kronkvist I, Lam A, Larsen R, Lee Y Y, Logashenko I, McNabb R, Meng W, Miller J P, Morse W M, Nikas D, Onderwater C J G, Orlov Y, O¨ zben C S, Paley J M, Peng Q, Polly-
 C C, Pretz J, Prigl R, zu Putlitz G, Qian T, Redin S I, Rind O, Roberts B L, Ryskulov N, Semertzidis Y K, Shagin P, Shatunov Y M, Sichtermann E P, Solodov E, Sossong M, Sulak L R, Troﬁmov A, von Walter P and Yamamoto A 2004 Phys. Rev. Lett. 92(16) 161802 URL http://link.aps.org/doi/10.1103/PhysRevLett.92.161802
[13] Michimura Y, Matsumoto N, Ohmae N, Kokuyama W, Aso Y, Ando M and Tsubono K 2013 Phys. Rev. Lett. 110(20) 200401 URL http://link.aps.org/doi/10.1103/PhysRevLett.110.200401
[14] Hohensee M A, Stanwix P L, Tobar M E, Parker S R, Phillips D F and Walsworth R L 2010 Phys. Rev. D 82(7) 076001 URL http://link.aps.org/doi/10.1103/PhysRevD.82.076001
[15] Hohensee M A, Stanwix P L, Tobar M E, Parker S R, Phillips D F and Walsworth R L 2010 Phys. Rev. D 82(7) 076001 URL http://link.aps.org/doi/10.1103/PhysRevD.82.076001
[16] Gagnon O and Moore G D 2004 Phys. Rev. D 70(6) 065002 URL http://link.aps.org/doi/10. 1103/PhysRevD.70.065002
[17] Khriplovich I B and Lamoreaux S K 1997 CP Violation Without Strangeness (Springer)

REFERENCES

76

[18] Bernreuther W and Suzuki M 1991 Reviews of Modern Physics 63 313
[19] Pendlebury J M, Afach S, Ayres N J, Baker C A, Ban G, Bison G, Bodek K, Burghoﬀ M, Geltenbort P, Green K, Griﬃth W C, van der Grinten M, Gruji´c Z D, Harris P G, H´elaine V, Iaydjiev P, Ivanov S N, Kasprzak M, Kermaidic Y, Kirch K, Koch H C, Komposch S, Kozela A, Krempel J, Lauss B, Lefort T, Lemi`ere Y, May D J R, Musgrave M, Naviliat-Cuncic O, Piegsa F M, Pignol G, Prashanth P N, Qu´em´ener G, Rawlik M, Rebreyend D, Richardson J D, Ries D, Roccia S, Rozpedzik D, Schnabel A, Schmidt-Wellenbu-
rg P, Severijns N, Shiers D, Thorne J A, Weis A, Winston O J, Wursten E, Zejma J and Zsigmond G 2015 Phys. Rev. D 92(9) 092003 URL http://link.aps.org/doi/10.1103/PhysRevD.92.092003
[20] Graner B, Chen Y, Lindahl E G and Heckel B R 2016 Phys. Rev. Lett. 116(16) 161601 URL http://link.aps.org/doi/10.1103/PhysRevLett.116.161601
[21] Pospelov M and Ritz A 2005 Ann. Phys. 318 119–169 ISSN 00034916 URL http://linkinghub. elsevier.com/retrieve/pii/S0003491605000539
[22] Streater R F and Wightman A S 2000 PCT, Spin and Statistics, and All That (Princeton University Press)
[23] Fukuyama T 2012 International Journal of Modern Physics A 27 1230015 ISSN 0217-751X URL http://www.worldscientific.com/doi/abs/10.1142/S0217751X12300153
[24] Engel J, Ramsey-Musolf M J and van Kolck U 2013 Progress in Particle and Nuclear Physics 71 21–74 ISSN 01466410 URL http://linkinghub.elsevier.com/retrieve/pii/S0146641013000227
[25] Sakharov A D 1967 JETP Lett. 5 27–30
[26] Gavela M B, Hern´andez P, Orloﬀ J and P`ene O 1994 Modern Physics Letters A 09 795–809 (Preprint http://www.worldscientific.com/doi/pdf/10.1142/S0217732394000629) URL http: //www.worldscientific.com/doi/abs/10.1142/S0217732394000629
[27] The ACME Collaboration, Baron J, Campbell W C, DeMille D, Doyle J M, Gabrielse G, Gurevich Y V, Hess P W, Hutzler N R, Kirilov E, Kozyryev I, OLeary B R, Panda C D, Parsons M F, Petrik E S, Spaun B, Vutha A C and West A D 2014 Science 343 269–272 URL http://www.sciencemag. org/content/343/6168/269.abstract
[28] Denis M and Fleig T 2016 J. Chem. Phys. 145 214307 URL http://dx.doi.org/10.1063/1.4968597
[29] Skripnikov L V 2016 J. Chem. Phys. 145 214301 URL http://dx.doi.org/10.1063/1.4968229
[30] Pospelov M E and Khriplovich I B 1991 Yad. Fiz. 53 1030–1033
[31] Abel S, Khalil S and Lebedev O 2001 Nuclear Physics B 606 151 – 182 ISSN 0550-3213 URL http://www.sciencedirect.com/science/article/pii/S0550321301002334
[32] Nir Y 1999 CP violation in and beyond the standard model Lectures given in the XXVII SLAC Summer Institute on Particle Physics
[33] Sandars P G H and Lipworth E 1964 Physical Review Letters 13 718
[34] Stein T S, Carrico J P, Lipworth E and Weisskopf M C 1967 Phys. Rev. Lett. 19 741
[35] Weisskopf M C, Carrico J P, Gould H, Lipworth E and Stein T S 1968 Phys. Rev. Lett. 21 1645
[36] Player M A and Sandars P G H 1970 J. Phys. B 3 1620–1635 URL http://stacks.iop.org/ 0022-3700/3/1620
[37] Lamoreaux S K, Jacobs J P, Heckel B R, Raab F J and Fortson N 1987 Phys. Rev. Lett. 59 2275
[38] Murthy S A, Krause D, Li Z L and Hunter L R 1989 Phys. Rev. Lett. 63(9) 965–968 URL http: //link.aps.org/doi/10.1103/PhysRevLett.63.965
[39] Abdullah K, Carlberg C, Commins E D, Gould H and Ross S B 1990 Phys. Rev. Lett. 65 2347
[40] Commins E, Ross S, DeMille D and Regan B 1994 Physical Review A 50 2960–2977 ISSN 1050-2947 URL http://link.aps.org/doi/10.1103/PhysRevA.50.2960
[41] Regan B, Commins E, Schmidt C and DeMille D 2002 Physical Review Letters 88 18–21 ISSN 0031-9007 URL http://link.aps.org/doi/10.1103/PhysRevLett.88.071805
[42] Hudson J J, Kara D M, Smallman I J, Sauer B E, Tarbutt M R and Hinds E A 2011 Nature 473 493–6 ISSN 1476-4687 URL http://www.ncbi.nlm.nih.gov/pubmed/21614077

REFERENCES

77

[43] Schiﬀ L I 1963 Physical Review 132 2194
[44] Salpeter E E 1958 Phys. Rev. 112(5) 1642–1648
[45] Sandars P G H 1965 Physics Letters 14 194 ISSN 00319163 URL http://dx.doi.org/doi:10.1016/ 0031-9163(65)90583-4
[46] Commins E D, Jackson J D and DeMille D P 2007 American Journal of Physics 75 532 ISSN 00029505 URL http://link.aip.org/link/AJPIAS/v75/i6/p532/s1&Agg=doi
[47] Commins E D and DeMille D 2010 The Electric Dipole Moment of the Electron Lepton Dipole Moments ed Roberts B L and Marciano W J (World Scientiﬁc) chap 14, pp 519–581
[48] DeMille D, Bay F, Bickman S, Kawall D, Krause D, Maxwell S and Hunter L 2000 Physical Review A 61 52507 ISSN 1050-2947 URL http://link.aps.org/doi/10.1103/PhysRevA.61.052507
[49] Hinds E A 1997 Phys. Scr. T70 34–41
[50] Eckel S, Hamilton P, Kirilov E, Smith H W and DeMille D 2013 Physical Review A 87 052130 ISSN 1050-2947 URL http://link.aps.org/doi/10.1103/PhysRevA.87.052130
[51] Leanhardt A E, Bohn J L, Loh H, Maletinsky P, Meyer E R, Sinclair L C, Stutz R P and Cornell E A 2011 Journal of Molecular Spectroscopy 270 1–25 ISSN 0022-2852 URL http://dx.doi.org/10. 1016/j.jms.2011.06.007
[52] Meyer E R, Bohn J L and Deskevich M P 2006 Phys. Rev. A 73 62108 ISSN 1050-2947 URL http://link.aps.org/doi/10.1103/PhysRevA.73.062108
[53] Mosyagin N S, Kozlov M G and Titov A V 1998 Journal of Physics B: Atomic, Molecular and Optical Physics 31 L763–L767 ISSN 0953-4075 URL http://stacks.iop.org/0953-4075/31/i=19/a=002? key=crossref.fc40d2593364d311c6a64905cd54e3ef
[54] Sauer B, Hudson J, Kara D, Smallman I, Tarbutt M and Hinds E 2011 Physics Procedia 17 175–180 ISSN 18753892 URL http://linkinghub.elsevier.com/retrieve/pii/S1875389211003658
[55] Abe M, Gopakumar G, Hada M, Das B P, Tatewaki H and Mukherjee D 2014 Phys. Rev. A 90(2) 022501 URL http://link.aps.org/doi/10.1103/PhysRevA.90.022501
[56] Herzberg G 1989 Molecular Spectra and Molecular Structure: Spectra of Diatomic Molecules , 2nd ed. (Krieger)
[57] Petrov A N, Skripnikov L V, Titov A V, Hutzler N R, Hess P W, O’Leary B R, Spaun B, DeMille D, Gabrielse G and Doyle J M 2014 Phys. Rev. A 89(6) 062505 URL http://link.aps.org/doi/10. 1103/PhysRevA.89.062505
[58] Vutha A C, Spaun B, Gurevich Y V, Hutzler N R, Kirilov E, Doyle J M, Gabrielse G and DeMille D 2011 Physical Review A 84 034502 ISSN 1050-2947 URL http://link.aps.org/doi/10.1103/PhysRevA. 84.034502
[59] Herzberg G 1971 The Spectra and Structures of Simple Free Radicals (Ithaca: Cornell University Perss)
[60] Brown J M and Carrington A 2003 Rotational Spectroscopy of Diatomic Molecules (Cambridge University Press) ISBN 0521530784 URL http://books.google.com/books/about/Rotational_ Spectroscopy_of_Diatomic_Mole.html?id=veUq07zAoxMC&pgis=1
[61] Landau L D and Lifshitz E M 1981 Quantum Mechanics: Non-relativistic Theory (ButterworthHeinemann)
[62] Kirilov E, Campbell W C, Doyle J M, Gabrielse G, Gurevich Y V, Hess P W, Hutzler N R, OLeary B R, Petrik E, Spaun B, Vutha A C and DeMille D 2013 Physical Review A 88 013844 ISSN 1050-2947 URL http://arxiv.org/abs/1305.2179http://link.aps.org/doi/10.1103/PhysRevA.88.013844
[63] DeMille D, Bay F, Bickman S, Kawall D, Hunter L, Krause D, Maxwell S and Ulmer K 2001 Search for the electric dipole moment of the electron using metastable PbO AIP Conference Proceedings vol 596 (AIP) pp 72–83 ISSN 0094243X URL http://link.aip.org/link/?APC/596/72/1&Agg=doi
[64] Hutzler N 2014 A New Limit on the Electron Electric Dipole Moment: Beam Production, Data Interpretation, and Systematics Ph.D. thesis Harvard University (advisor: J. Doyle)
[65] Hess P 2014 Improving the Limit on the Electron EDM: Data Acquisition and Systematics Studies Ph.D. thesis Harvard Univ. (advisor: G. Gabrielse)

REFERENCES

78

[66] Kawall D, Bay F, Bickman S, Jiang Y and DeMille D 2004 Progress towards measuring the electric dipole moment of the electron in metastable PbO AIP Conference Proceedings vol 698 (AIP) pp 192–195 ISSN 0094243X URL http://link.aip.org/link/?APC/698/192/1&Agg=doi
[67] Vutha A C, Campbell W C, Gurevich Y V, Hutzler N R, Parsons M, Patterson D, Petrik E, Spaun B, Doyle J M, Gabrielse G and DeMille D 2010 Journal of Physics B 43 74007 ISSN 0953-4075 URL http://stacks.iop.org/0953-4075/43/i=7/a=074007?key=crossref. 114fcc8fa117ce235d58bc66e7812c5f
[68] Regan B 2001 A Search for Violation of Time-Reversal Symmetry in Atomic Thallium Ph.D. thesis Berkeley
[69] Hutzler N R, Lu H I and Doyle J M 2012 Chemical Reviews 112 4803–27 ISSN 1520-6890 URL http: //pubs.acs.org/doi/abs/10.1021/cr200362uhttp://www.ncbi.nlm.nih.gov/pubmed/22571401
[70] Patterson D and Doyle J M 2007 The Journal of Chemical Physics 126 154307 ISSN 0021-9606 URL http://www.ncbi.nlm.nih.gov/pubmed/17461626
[71] Maxwell S E, Brahms N, DeCarvalho R, Glenn D R, Helton J S, Nguyen S V, Patterson D, Petricka J, DeMille D and Doyle J M 2005 Physical Review Letters 95 173201 ISSN 0031-9007 URL http://link.aps.org/doi/10.1103/PhysRevLett.95.173201
[72] Hutzler N R, Parsons M F, Gurevich Y V, Hess P W, Petrik E, Spaun B, Vutha A C, DeMille D, Gabrielse G and Doyle J M 2011 Physical Chemistry Chemical Physics : PCCP 13 18976–85 ISSN 1463-9084 URL http://www.ncbi.nlm.nih.gov/pubmed/21698321
[73] Edvinsson G and Lagerqvist A 1985 J. Mol. Spectrosc. 113 93
[74] Paulovic J, Nakajima T, Hirao K, Lindh R and Malmqvist P A 2003 J. Chem. Phys. 119 798–805
[75] Budker D, Kimball D and DeMille D 2008 Atomic physics: An exploration through problems and solutions (Oxford University Press, USA) ISBN 0199532419 URL http://www.amazon.com/ Atomic-physics-exploration-problems-solutions/dp/0199532419
[76] Bickman S, Hamilton P, Jiang Y and DeMille D 2009 Physical Review A 80 023418 ISSN 1050-2947 URL http://link.aps.org/doi/10.1103/PhysRevA.80.023418
[77] Vutha A C 2011 A search for the electric dipole moment of the electron using thorium monoxide Ph.D. thesis Yale University
[78] Petricka J 2007 A New Cold Molecule Source: The Buﬀer Gas Cooled Molecular Beam Ph.D. thesis Yale University
[79] Sushkov A and Budker D 2008 Phys. Rev. A 77 42707 ISSN 1050-2947 URL http://link.aps.org/ doi/10.1103/PhysRevA.77.042707
[80] Patterson D, Rasmussen J and Doyle J M 2009 New Journal of Physics 11 055018 ISSN 1367-2630 URL http://stacks.iop.org/1367-2630/11/i=5/a=055018?key=crossref. ada50c0bc5df340d553560bba982f04c
[81] Campbell W C and Doyle J M 2009 Cooling, Trap Loading, and Beam Production Using a Cryogenic Helium Buﬀer Gas Cold molecules: theory, experiment, applications ed Krems R V, Stwalley W C and Friedrich B (CRC Press) chap 13, pp 473–508
[82] Tu M F, Ho J J, Hsieh C C and Chen Y C 2009 The Review of scientiﬁc instruments 80 113111 ISSN 1089-7623 URL http://www.ncbi.nlm.nih.gov/pubmed/19947721
[83] Patterson D 2010 Buﬀer Gas Cooled Beams and Cold Molecular Collisions Ph.D. thesis Harvard University
[84] Barry J F, Shuman E S and Demille D 2011 Phys. Chem. Chem. Phys. 13 18936 ISSN 1463-9084 URL http://www.ncbi.nlm.nih.gov/pubmed/21706119
[85] Lu H I, Rasmussen J, Wright M J, Patterson D and Doyle J M 2011 Physical chemistry chemical physics : PCCP 13 18986–90 ISSN 1463-9084 URL http://www.ncbi.nlm.nih.gov/pubmed/21796294
[86] Skoﬀ S M, Hendricks R J, Sinclair C D J, Hudson J J, Segal D M, Sauer B E, Hinds E A and Tarbutt M R 2011 Physical Review A 83 23418 ISSN 1050-2947 URL http://link.aps.org/doi/10.1103/ PhysRevA.83.023418

REFERENCES

79

[87] Skoﬀ S M 2011 Buﬀer gas cooling of YbF molecules Ph.D. thesis Imperial College London
[88] Hummon M T, Yeo M, Stuhl B K, Collopy A L, Xia Y and Ye J 2013 Physical Review Letters 110 143001 ISSN 0031-9007 URL http://link.aps.org/doi/10.1103/PhysRevLett.110.143001
[89] Bulleid N E, Skoﬀ S M, Hendricks R J, Sauer B E, Hinds E A and Tarbutt M R 2013 Physical chemistry chemical physics : PCCP 15 12299–307 ISSN 1463-9084 URL http://www.ncbi.nlm.nih. gov/pubmed/23775176
[90] Balakrishna P, Varma B P, Krishnan T S, Mohan T R R and Ramakrishnan P 1988 Journal of Materials Science Letters 7 657–660 ISSN 0261-8028 URL http://www.springerlink.com/index/ 10.1007/BF01730326
[91] Kiggans J private communication
[92] Spaun B N 2014 A Ten-Fold Improvement to the Limit of the Electron Electric Dipole Moment Ph.D. thesis Harvard University (advisor: G. Gabrielse)
[93] Edvinsson G, Selin L E and Aslund N 1965 Ark. Phys. 30 283–319
[94] Gurevich Y V 2012 Preliminary Measurements for an Electron EDM Experiment in ThO Ph.D. thesis Harvard University (advisor: G. Gabrielse)
[95] Farkas D 2006 An Optical Reference and Frequency Comb for Improved Spectroscopy of Helium Ph.D. thesis Harvard University (advisor: G. Gabrielse)
[96] Patten R A 1971 Applied Optics 10 2717–2721
[97] Vutha A and DeMille D 2009 arXiv (Preprint 0907.5116) URL http://arxiv.org/abs/0907.5116
[98] Robertson N A, Blackwood J R, Buchman S, Byer R L, Camp J, Gill D, Hanson J, Williams S and Zhou P 2006 Classical and Quantum Gravity 23 2665–2680 ISSN 0264-9381 URL http://stacks. iop.org/0264-9381/23/i=7/a=026?key=crossref.d6e94b4d247636bdb793339078a56486
[99] Kara D M, Smallman I J, Hudson J J, Sauer B E, Tarbutt M R and Hinds E A 2012 New Journal of Physics 14 103051 ISSN 1367-2630 URL http://stacks.iop.org/1367-2630/14/i=10/a=103051? key=crossref.935bac343ba2f6bf853baf0bc5df44bc
[100] Mager A J 1969 IEEE Trans. Magn. MAG-6 67–75
[101] Sumner T J, Pendlebury J M and Smith K F 1987 J. Phys. D 20 1095–1101
[102] Kenny J F and Keeping E S 1951 Mathematics of Statistics 2nd ed (New York: Van Nostrand)
[103] Loh H, Cossel K C, Grau M C, Ni K K, Meyer E R, Bohn J L, Ye J and Cornell E A 2013 Science 342 1220–1222 (Preprint http://www.sciencemag.org/content/342/6163/1220.full.pdf) URL http://www.sciencemag.org/content/342/6163/1220.abstract
[104] Hamilton P 2010 Preliminary results in the search for the electron electric dipole moment in PbO Ph.D. thesis Yale University
[105] Sozzi M 2008 Discrete Symmetries and CP Violation: From Experiment to Theory (OUP Oxford)
[106] Griﬃth W, Swallows M, Loftus T, Romalis M, Heckel B and Fortson E 2009 Physical Review Letters 102 101601 ISSN 0031-9007 URL http://link.aps.org/doi/10.1103/PhysRevLett.102.101601
[107] Bouchiat M and Bouchiat C 1974 Journal de Physique 34 899–927
[108] DeMille D, Cahn S B, Murphree D, Rahmlow D A and Kozlov M G 2008 Phys. Rev. Lett. 100 023003 ISSN 0031-9007 URL http://link.aps.org/doi/10.1103/PhysRevLett.100.023003
[109] Wood C S, Bennett S C, Cho D, Masterson B P, Roberts J L, Tanner C E and Wieman C E 1997 Science 275 1759–1763
[110] Chen X, Huang-Hellinger F, Heckel B and Fortson E 1994 Physical Review A 50 4729–4732
[111] Hodgdon J, Heckel B and Fortson E 1991 Physical Review A 43 3343–3347
[112] Lamoreaux S and Fortson E 1992 Physical Review A 46 7053–7059
[113] Loftus T H, Swallows M D, Griﬃth W C, Romalis M V, Heckel B R and Fortson E N 2011 Physical Review Letters 106 253002 ISSN 0031-9007
[114] Swallows M D, Loftus T H, Griﬃth W C, Heckel B R, Fortson E N and Romalis M V 2013 Phys. Rev. A 87(1) 012102 URL http://link.aps.org/doi/10.1103/PhysRevA.87.012102

REFERENCES

80

[115] Sachs R 1987 The Physics of Time Reversal (University of Chicago Press) [116] Barber J R 2010 Elasticity, Solid Mechanics and its Applications 3rd ed (Springer) ISBN 9789048138081
URL http://www.lavoisier.fr/livre/notice.asp?id=6OKWSRA2SOSOWP [117] Dally J W and Riley W F 1991 Experimental Stress Analysis third edit ed (McGraw-Hill) ISBN
0070152187 [118] Schott 2013 Schott Boroﬂoat Glass Product Information Tech. Rep. 502 Schott URL http://www.
markoptics.com/files/SchottBorofloat33.pdf
[119] Solmeyer N, Zhu K and Weiss D S 2011 The Review of scientiﬁc instruments 82 066105 ISSN 1089-7623 URL http://www.ncbi.nlm.nih.gov/pubmed/21721740
[120] Eisenbach S and Lotem H 1992 SPIE 8th Meeting on Optical Engineering in Israel 1972 URL http://proceedings.spiedigitallibrary.org/proceeding.aspx?articleid=1013612
[121] Koechner W 1970 Applied optics 9 2548–2553 ISSN 0003-6935 URL http://www.ncbi.nlm.nih.gov/ pubmed/20094304
[122] Berry H G, Gabrielse G and Livingston A E 1977 Applied Optics 16 3200–5 ISSN 0003-6935 URL http://www.ncbi.nlm.nih.gov/pubmed/20174328
[123] Sinervo P K 2003 Deﬁnition and treatment of systematic uncertainties in high energy physics and astrophysics Statistical Problems in Particle Physics, Astrophysics, and Cosmology vol 1 (Citeseer) p 122
[124] Barlow R 2002 arXiv preprint hep-ex/0207026 [125] Riley K F, Hobson M P and Bence S J 2006 Mathematical methods for physics and engineering: a
comprehensive guide (Cambridge: Cambridge Univ. Press) [126] Feldman G J and Cousins R D 1998 Physical Review D 57 3873–3889 ISSN 0556-2821 URL http:
//link.aps.org/doi/10.1103/PhysRevD.57.3873
[127] Stuart A, Ord J K and Arnold S 1999 Classical Inference and the Linear Model 6th ed (Kendall’s Advanced Theory of Statistics vol 2A) (London: Arnold)
[128] Kozlov M G and Labzowsky L N 1995 Journal of Physics B: Atomic, Molecular and Optical Physics 28 1933–1961 ISSN 0953-4075 URL http://stacks.iop.org/0953-4075/28/i=10/a=008? key=crossref.2547c28c7d7ac4a7fa9f914888c84fc6
[129] Skripnikov L V, Petrov A N and Titov A V 2013 J. Chem. Phys. 139 221103 ISSN 1089-7690 [130] Dzuba V A, Flambaum V V and Harabati C 2011 Phys. Rev. A 84(5) 052108 URL http://link.aps.
org/doi/10.1103/PhysRevA.84.052108
[131] Dzuba V A, Flambaum V V and Harabati C 2012 Phys. Rev. A 85(2) 029901 URL http://link.aps. org/doi/10.1103/PhysRevA.85.029901
[132] Graner B, Chen Y, Lindahl E G and Heckel B R 2016 Phys. Rev. Lett. 116(16) 161601 URL http://link.aps.org/doi/10.1103/PhysRevLett.116.161601
[133] Ackermann R J, Rauh E G, Thorn R J and Cannon M C 1963 Journal of Physical Chemistry 67 762–769 ISSN 0022-3654 URL http://pubs.acs.org/cgi-bin/doilookup/?10.1021/j100798a010
[134] OECD 2008 Chemical Thermodynamics of Thorium (OECD Publishing) [135] Panda C D, O’Leary B R, West A D, Baron J, Hess P W, Hoﬀman C, Kirilov E, Overstreet
C B, West E P, DeMille D, Doyle J M and Gabrielse G 2016 Phys. Rev. A 93(5) 052110 URL http://link.aps.org/doi/10.1103/PhysRevA.93.052110
[136] Kokkin D L, Steimle T C and DeMille D 2014 Phys. Rev. A 90 062503 [137] Lee J, Meyer E R, Paudel R, Bohn J L and Leanhardt A E 2009 Journal of Modern Optics 56 2005–2012 [138] Skripnikov L V and Titov A V 2015 J. Chem. Phys. 142 024301 [139] Dzuba V and Flambaum V 2011 Physical Review A 83 ISSN 1050-2947 URL http://link.aps.org/
doi/10.1103/PhysRevA.83.042514
[140] Kozlov M and DeMille D 2002 Physical Review Letters 89 133001 ISSN 0031-9007 URL http: //link.aps.org/doi/10.1103/PhysRevLett.89.133001

REFERENCES

81

[141] Fleig T and Nayak M K 2014 J. Mol. Spectrosc. 300 16–21
[142] Fleig T and Nayak M K 2013 Phys. Rev. A 88(3) 032514 URL http://link.aps.org/doi/10.1103/ PhysRevA.88.032514
[143] Denis M, Nørby M S, Jensen H J A, Gomes A S P, Nayak M K, Knecht S and Fleig T 2015 New. J. Phys. 17 043005 URL http://dx.doi.org/10.1088/1367-2630/17/4/043005

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:08.098Z
- **Text Length:** 279892 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
