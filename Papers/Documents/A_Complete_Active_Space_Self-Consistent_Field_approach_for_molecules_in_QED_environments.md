# PDF Document: Alessandro et al. - 2025 - A Complete Active Space Self-Consistent Field approach for molecules in QED environments.pdf

**File Path:** Alessandro et al. - 2025 - A Complete Active Space Self-Consistent Field approach for molecules in QED environments.pdf

**Processed Date:** 2026-02-10T18:16:33.996Z

**File Size:** 1464.66 KB

**Total Pages:** 39

**Extracted Pages:** 39

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2793

**Title:** A Complete Active Space Self-Consistent Field approach for molecules in QED environments

**Collection:** Large Files

---

## Extracted Text Content

A Complete Active Space Self-Consistent Field
(CASSCF) approach for molecules in QED
environments
Riccardo Alessandro,† Henrik Koch,‡ and Enrico Ronca∗,†
†Dipartimento di Chimica, Biologia e Biotecnologie, Universit`a degli Studi di Perugia, Via
Elce di Sotto, 8,06123, Perugia, Italy
‡Department of Chemistry, Norwegian University of Science and Technology, 7491
Trondheim, Norway
E-mail: enrico.ronca@unipg.it
Abstract
Multireference systems are usually challenging to investigate using ab initio methods
as they require an accurate description of static electron correlation. The urgency of
developing similar approaches is even more pressing when molecules strongly interact
with light in quantum-electrodynamics (QED) environments. In fact, in this context,
multireference effects might be induced or reduced by the presence of the field. In this
work, we extend the Complete Active Space Self-Consistent Field (CASSCF) approach
to polaritonic systems. The method is tested on benchmark multireference problems
and applied to investigate field-induced effects on the electronic structure of well-known
multiconfigurational processes. We analyze the strengths and limitations of the method
with particular attention to the appearance of possible origin dependencies.
1
arXiv:2503.16417v1 [physics.chem-ph] 20 Mar 2025

1 Introduction
Manipulation of molecular properties by quantum fields is becoming nowadays a very promis
ing non-intrusive alternative to chemical controls.1–9 The observation of these effects was pos
sible thanks to the significant technological advances made in the fabrication of efficient op
tical devices (optical,10,11 plasmonic12,13 and superconducting14–16 cavities, waveguides,17–19
etc.). The simplest of these devices is the Fabry-Pe`rot optical cavity, device composed of
two mirrors whose separation, L, is related to the wavelength of the field inside the cavity.
In these conditions, energy is exchanged between the system and the cavity field, inducing
a phenomenon called quantum Rabi oscillations. Due to the strong light-matter interac
tion, photons and molecular states lose their individuality and show mixed molecular and
photonic character, generating hybrid states known as ”polaritons”.20–23 The formation of
polaritons is associated with a splitting of the energy levels, known as Rabi splitting (ΩR),
that increases with the strength of the light-matter coupling (λ) (see Fig. 1).
Figure 1: Energy levels scheme. ΩR indicates the Rabi splitting while ωc is the quantum field frequency.
It is noteworthy to point out that molecules can interact strongly with the field also in
the absence of real photons, through a direct coupling between the molecular states and the
2

vacuum fluctuations of the electromagnetic field. In the past decade, a lot of research was
devoted to explore the potential of strong light-matter interaction on a plethora of physical or
chemical phenomena. In particular, by coupling molecules or materials with different optical
devices it was possible to manipulate the absorption, emission, and scattering properties
of molecules and materials,24–27 to induce Bose–Einstein condensation of polaritons,28–30 to
increase conductivity in organic semiconductors,31 or to manipulate the spin properties of
matter.32–34 One of the most debated but also interesting aspects was observed in chemistry,
where field-induced effects on chemical reactivity were demonstrated to inhibit, catalyze,
and even make some reactions selective toward specific products.35–38
Despite the large attention devoted to this field in the past decade, the physics behind
many of these processes still remains unclear, and progresses are still very slow due to the
many limitations in the validation of the experimental setup.39–41 For these reasons, the de
velopment of effective theoretical approaches is crucial to overcome experimental limitations
and to propose a consistent description of these phenomena.42,43 In recent years, a small
number of research groups started developing some extensions to the most commonly used
ab initio methodologies, i.e., Density Functional Theory (DFT),44–46 Hartree-Fock (HF), Full
Configuration Interaction (FCI), Coupled Cluster (CC),47–51 and second-order Møller-Plesset
perturbation theory (MP2),52 to investigate coupled electron-photon systems. Recently, fully
relativistic versions of QED-HF and QEDFT have been also proposed to investigate molecu
lar systems containing heavy atoms in strong coupling conditions.53,54 The quantum electro
dynamics (QED) extensions to HF and DFT are quite efficient and can be easily applied to
relatively large systems. However, they completely miss correlation or describe it in a very
approximated way. Moreover, in the DFT case, an effective exchange-correlation functional
for the electron-photon interaction is still far from being formulated.42
Coupled Cluster theory is known to be the most reliable method in quantum chem
istry to simulate molecular systems and also for interacting electron-photon systems, its
QED extension is at the moment the reference ab-initio methodology. However, as for the
3

standard electronic theory, the applicability of this method is limited to small to medium
sized molecules and its description becomes qualitatively poor when multiconfigurational
effects come into play. This problem is well-known and it prevents the investigation of
a relatively large class of complexes, including several systems involved in chemically and
biologically interesting precesses.55 Belong to these systems, open-shell transition metal com
plexes, (poly)radicalic systems, excited states of organic molecules, and torsion or breakings
of conjugated bonds.56,57
The state-of-the-art reference approaches usually used to investigate these systems are
the Multiconfigurational Self-Consistent Field (MCSCF) methods, which are based on a
wavefunction defined as linear combination of a reduced number of determinants or Config
uration State Functions (CSFs). Nowadays a wide variety of MCSCF methods have been
developed. The main difference between them lies in the protocol employed to select the
determinants to include in the expansion.58 The most popular MCSCF method is the Com
plete Active Space Self-Consistent Field (CASSCF), which is based on a partitioning of the
orbital space into three classes: inactive, virtual, and active orbitals. The multideterminan
tal expansion in the case of CASSCF theory is obtained by choosing a certain number of
so-called active electrons and computing all the possible excitations of these electrons within
the active space. If the active space is chosen properly, (i.e., the most correlated orbitals and
electrons are included)the CASSCF wavefunction is able to provide a qualitatively-correct
description of the molecular system. Despite this method is equivalent to a FCI expansion
within the active space, with the current computational facilities, it can be applied, in a
relatively efficient way, to active spaces with up to 20 electrons in 20 orbitals.59
In the latest years, some of the most common ab-initio multireference methods have been
extended to coupled-light matter systems.60–62 In particular, the implementation of QED
CASCI and QED-DMRG provided the first steps towards the inclusion of static correlation
effects in optical cavities. However, the CASCI procedure does not optimize the orbitals,
leading to variationally higher energies with respect to its SCF counterpart,63 and although
4

the DMRG method has a polynomial scaling, its cost is higher than CASSCF for small active
spaces.
In this work, we present the first extension of CASSCF theory to coupled light-matter sys
tems (QED-CASSCF). The implementation is performed following a restricted-step second
order optimization scheme, according to the implementations in Refs. 64–67.
This paper is organized as follows: in Section 2, a brief summary of the CASSCF method
and its second-order implementation is presented. In Section 3, the fundamental details
of QED-CASSCF are described. In Section 4, QED-CASSCF is tested on small molecules
against other ab-initio methodologies. In this section, QED-CASSCF is also used to inves
tigate the field effects on well known multireference chemical processes. We conclude the
work with future perspectives presented in Section 5.
2 CASSCF Theory
In MCSCF theory the wavefunction is written as the linear combination of a certain number
of Slater determinants or Configuration State Functions (CSFs)
|ΨMCSCF⟩ = X
I
CI |I⟩ (1)
and it is optimized by variationally minimizing the energy with respect to the molecular
orbital (MO) and configuration interaction (CI) coefficients (κ and C, respectively)
E = min
κ,C
⟨Ψ|Hˆ |Ψ⟩
⟨Ψ|Ψ⟩ . (2)
Among the MCSCF methods,68–72 the Complete Active Space Self-Consistent Field (CASSCF)
approach is still the state-of-the art procedure for molecular systems dominated by static
correlation. The orbital space of a molecule in the CASSCF approximation is partitioned
into three subspaces, as depicted in Fig. 2: inactive orbitals are always fully occupied, ac
5

tive orbitals have non-integer occupations, and virtual orbitals are always empty. In this
work the different orbitals are addressed according to the following indices choice: i, j, k, l
for inactive orbitals, u, v, x, y for active orbitals, a, b, c, d for virtual orbitals, and p, q, r, s for
generic orbitals.
Figure 2: CASSCF orbital partition scheme.
The multideterminantal expansion for the wavefunction is obtained considering all the
determinants computed by distributing N active electrons in M active orbitals, namely
CAS(N,M).
The first implementations of CASSCF relied on first-order solvers and among these, the
super-CI approach is the most widely applied.73,74 However, using this scheme, the opti
mization of the CASSCF wavefunction is affected by severe convergence issues. This led
to the development of robust second-order quadratically-convergent solvers which exhibit
better convergence properties in a reduced number of iterations.64,67,75–83 CASSCF imple
mentations based on second-order algorithms are nowadays relatively well-established in
the quantum chemistry community and are available in the majority of the mostly used
6

software packages.84–88 This approach is particularly convenient for the application to sim
ulate small molecular systems, and calculations on larger systems are nowadays efficiently
performed with the aid of parallelization, AO-based implementations, or by exploiting the
Cholesky decomposition or the resolution of identity (RI) approximation of the two-electron
integrals. 67,83
In MCSCF theory, the first step towards the implementation of the method is an appro
priate choice of the parametrization for the wavefunction. The orbital part is parametrized
in terms of an exponential transformation with the anti-Hermitian operator κˆ defined as:
κˆ = X
p>q
kpq Eˆ −
pq = X
p>q
kpq(Eˆpq − Eˆqp), (3)
where Eˆpq = P
σ aˆ†
pσaˆqσ is the spin traced singlet excitation operator. While no alternatives
to the parametrization of the orbital space are available, the CI space is liable to multiple
choices depending on the CASSCF variant that has to be implemented. In the case of
State-Specific (SS) CASSCF method, a linear parametrization for the CI part is commonly
adopted and the wavefunction can be written as:64
|Ψ⟩ = e−κˆ |0⟩ + Pˆ |c⟩
q
1 + ⟨c|Pˆ|c⟩
(4)
where |0⟩ is indicated as the current expansion point (CEP) and constitutes the current
approximation to the wavefunction. Pˆ = 1 − |0⟩⟨0|, instead, is a projector operator that
removes the components parallel to the CEP from |c⟩.
The choice of the exponential parametrization allows to consider only the non-redundant
rotations between the orbital spaces (i.e., orbital rotations which contribute to the energy:
inactive-active, inactive-virtual, and active-virtual). The linear parametrization of the CI
space contains only one redundant parameter when |c⟩ is parallel to the reference state |0⟩.
However, this is not an issue as this redundancy can be easily tracked and it does not interfere
7

with the optimization procedure.
In the following of this section we will quickly recap the implementation details of the
second-order SS-CASSCF algorithm that will be applied, in the next section, for the exten
sion to strongly coupled electron-photon systems.
2.1 Second-Order CASSCF
The implementation of a second-order algorithm is based on the definition of a quadratic
model to locally expand the energy up to the second order in δ:
E ≈ Q(δ) = E0 + E(1)T δ + 1
2 δT E(2)δ (5)
where δ indicates a small variation of the wavefunction parameters (κ, C). In Eq. 5, E0
is the CASSCF energy at the current expansion point. E(1) = g is the gradient vector
containing the first derivatives of the energy with respect to the configuration (c) and orbital
(o) coefficients calculated at the current expansion point:
E(1) =

    
cE(1)
oE(1)

    
=

    
gc
I
go
pq

    
=

     
∂E
∂cI
∂E
∂κpq

     
. (6)
Finally, E(2) = G is the Hessian matrix containing the pure configuration (cc), orbital (oo),
and the mixed configuration-orbital (co) and orbital-configuration (oc) parts:
E(2) =

    
ccE(2) coE(2)
ocE(2) ooE(2)

    
=

    
Gcc
I,J Gco
I ,pq
Goc
pq,I Goo
pq,rs

    
=

     
∂2E
∂cI ∂cJ
∂2E
∂cI ∂κpq
∂2E
∂ κpq ∂ cI
∂2E
∂ κpq ∂ κrs

     
. (7)
Also the Hessian matrix elements are calculated at the current expansion point.
8

In principle, a second order algorithm requires the explicit computation of the electronic
Hessian. However, this procedure can be performed efficiently in a direct fashion. This
approach passes through the calculation of the so-called sigma vectors defined as:
σ = E(2)b =

    
Gcc
I,J Gco
I ,pq
Goc
pq,I Goo
pq,rs

    

    
bc
bo

    
=

    
Gcc
I,J bc + Gco
I,pq bo
Goc
pq,I bc + Goo
pq,rs bo

    
. (8)
Here, b are the so-called trial vectors used in the Davidson scheme89 which contain the
wavefunction parameters with respect to the orbital and configuration parts
bo = X
pq
κpq, bc = X
I
xI. (9)
This approach allows for large scale operations without explicitly calculating and storing the
blocks of E(2) in memory.90 Moreover, sigma vectors can be conveniently computed applying
minor modifications to intermediate quantities already calculated for the gradients.
By minimizing the quadratic function defined in Eq. 5 the equation for the Newton step
is obtained as:
E(2)δ = −E(1). (10)
This procedure is not optimal since it requires the Hessian to be positive-definite. This
condition is not always guaranteed, especially at the beginning of the optimization procedure.
Even when it is respected, the computed step may not point in the direction of the minimum,
leading to a poor convergence.91 This problem can be largely reduced by adopting a restricted
step procedure.64,92 According to this scheme, the choice of the step is restricted within a
well-defined trust region with radius, h:
δT δ ≤ h (11)
9

where we assume the potential energy surface to be correctly approximated by the quadratic
model. This ensures the Hessian to be positive-definite. This procedure was first described
by Levenberg and Marquardt93,94 and is based on the solution of the level-shifted Newton
equation:
(E(2) − μI)δ = −E(1) (12)
where the level-shifting parameter μ corresponds to the lowest eigenvalue of the augmented
Hessian :
G(α) =

 
0 αgT
αg E(2)


 . (13)
The relation between the eigenvalues of E(1) and G(α) is given by the Hylleraas-Undheim
MacDonald theorem:95,96
μ1 ≤ ε1 ≤ μ2 ≤ · · · ≤ μn ≤ εn ≤ μn+1. (14)
Therefore, the choice of the lowest eigenvalue of the augmented Hessian as a level-shifting
parameter guarantees (E(2) −μI) to be positive-definite. This approach requires, in principle,
to solve the linear system in Eq. 12 at every iteration. However, the inversion of (E(2) − μI)
could be computationally inefficient. An alternative way can be obtained by diagonalizing
the augmented Hessian in Eq. 13. This can be done efficiently in an iterative fashion by
implementing the sigma vectors in Eq. 8. Once the lowest eigenvalue and eigenvector are
obtained, the step for the new iteration can be computed as:
δ= 1
α x(α) (15)
where x(α) is the eigenvalue of the Hessian and α is a scaling parameter that forces the step
to lie withing the trust region. The trust radius is changed adaptively during the procedure
following the strategy described by Fletcher in Ref. 91. As long as the step is kept within the
10

trust region, the Newton’s step in 10 is recovered and convergence to the closest minimum
is guaranteed.
The presented trust-region optimization method can be summarized as follows:
1. Calculation of the gradient by Eq. 6. If its norm is lower than a certain threshold,
convergence is reached;
2. Check the step and adjust the trust radius according to the procedure described by
Fletcher in Ref. 91;
3. Iteratively diagonalize the augmented Hessian in Eq. 13;
4. Update the wavefunction parameters (Eq. 15) and return to step 1.
Details on this procedure are described in Refs. 58,64,76,91. The optimized algorithm as
implemented in eT suite of programs,97 is described in Ref. 66.
3 QED-CASSCF
The description of molecular systems in optical cavities requires to account explicitly for the
quantum character of the electromagnetic field. In our work we will use the well-established
non-relativistic Pauli-Fierz Hamiltonian in length gauge and dipole approximation as starting
point for the development of the QED-CASSCF approach:47
HPF = He + ωb†b + 1
2 (λ · (d − ⟨d⟩))2 −
rω
2 (λ · (d − ⟨d⟩))(b† + b). (16)
Here d is the dipole moment operator, ⟨d⟩ is its expectation value and λ =
q
4π
V e is the light
matter coupling parameter that depends on the quantization volume V and the polarization
vector e. For simplicity a single cavity mode is included in our treatment, but extension to
more modes can be applied in a trivial manner. To ensure origin invariance, Hamiltonian 16
11

has been already expressed in the coherent-state basis.47 Following the notation used in Ref.
98, we can conveniently set d = d · λ and rewrite the Pauli-Fierz Hamiltonian as
HPF = X
pq
hpqEpq + 1
2
X
pqrs
gpqrsepqrs + ωb†b
+
rω
2
X
pq
dpqEpq(b† + b) −
rω
2 ⟨d⟩(b† + b) + hnuc.
(17)
In this form the dipole-self energy term is included into the one- and two-electron integrals
hpq = he
pq + 1
2 qpq − dpq⟨d⟩ + δpq
2Ne
⟨d⟩2
gpqrs = ge
pqrs + dpqdrs
(18)
with dpq and qpq being the electric dipole and quadrupole integrals, respectively, and Ne is
the number of electrons in the molecule.
For a general QED-MCSCF theory the wavefunction can be expressed as:60
|Ψ⟩ = X
I
X
m
C (0)
I,m |I⟩ ⊗ |m⟩ (19)
where |m⟩ is the mth photonic state of the cavity mode. In this case the CI coefficients refer
to the non-interacting electron-photon states ΦI,m defined as
ΦI,m = |I⟩ ⊗ |m⟩ . (20)
In this way a generic polaritonic state can be written as
|Ψx⟩ = X
I
X
m
C (x)
I,mΦI,m (21)
with x = 0 representing the ground state.
For the sake of readability of the following section we conveniently separate the Pauli
12

Fierz Hamiltonian into three terms:
HˆPF = Hˆe + Hˆph + Hˆint (22)
where we need to remember that He contains the one- and two-electron integrals modified
for the dipole self-energy term. From now on, we will refer to the Pauli-Fierz Hamiltonian
as H unless explicitly stated.
The extension of CASSCF to molecular polaritons and its second-order implementation
requires the computation of modified energy contributions, gradients and sigma vectors. The
expression for the QED-CASSCF energy can be written as:
EQED-CASSCF = ⟨Ψ0|Hˆ |Ψ0⟩ = Eel + Eph + Eint + Enuc (23)
where
Eel = X
uv
FI
uvγuv + 1
2
X
uxyv
guvxyΓuvxy + X
i
hii + F I
ii (24)
has the same form of the purely electronic CASSCF energy83 with
γuv = ⟨0|Eˆuv|0⟩ , Γuvxy = ⟨0|eˆuvxy|0⟩ (25)
being the one- and two-body reduced density matrices, respectively, and
FI
pq = hpq + X
i
(2gpqii − gpiiq) (26)
the inactive Fock matrix. The purely photonic contribution to the energy is given by:
Eph = ω
X
I ,m
|C (0)
I,m|2m (27)
where m is the number of photons in the mth photonic state of the cavity mode. Finally,
13

the contribution by the bilinear coupling is written as:
Eint =
rω
2
(
X
i
2dii
X
I ,m
C (0)
I,m+1C (0)
I ,m
√m + 1 + C(0)
I,m−1C (0)
I ,m
√m
+
X
I ,J
X
m
X
uv
duv C(0)
I,m+1 ⟨I|Euv|J ⟩ C(0)
J,m
√m + 1 + C(0)
I,m−1 ⟨I|Euv|J ⟩ C(0)
J,m
√m
− ⟨d⟩ X
I ,m
C (0)
I,m+1C (0)
I ,m
√m + 1 + C(0)
I,m−1C (0)
I ,m
√m
)
.
(28)
The general expression for the CI gradient is given by:
gc
I,m = 2 ⟨ΦI,m|PˆHˆ |Ψ0⟩ = 2 ⟨ΦI,m|Hˆ |Ψ0⟩ − 2C(0)
I,mE(0) (29)
where E(0) is the QED-CASSCF energy at the current expansion point. Similarly to the
energy, also the CI gradient can be split up into different terms:
gc
I,m = gel
I,m + gph
I,m + gint
I,m − 2C(0)
I,mE(0) (30)
where
gel
I,m = X J,n
⟨I|Hel|J ⟩ δmnC(0)
J,n
= C(0)
I ,m
X
i
hii + F I
ii + X
J
⟨I |X
uv
FI
uvEuv + 1
2
X
uvxy
guvxyeuvxy|J ⟩ C(0)
J,m
(31)
gph
I,m = ω ⟨ΦI,m|b†b|Ψ0⟩ = mωC(0)
I,m. (32)
The bilinear contribution to the CI gradient:
gint
I,m =
rω
2
√nδm,n−1 + √n + 1δm,n+1 ⟨I|dˆ|J ⟩ − ⟨d⟩δIJ
X
J
C (0)
J,n (33)
14

is made of two ”off-diagonal” contributions
gint
I,n−1 = X J
⟨I|dˆ− ⟨d⟩|J⟩ C(0)
J,n
√n
= 2X
i
dii C (0)
I,n + X J
X
uv
duv ⟨I|Euv|J ⟩ C(0)
J,n − ⟨d⟩ C(0)
I ,n
! √n
(34)
and
gint
I,n+1 = X J
⟨I|dˆ− ⟨d⟩|J⟩ C(0)
J,n
√n + 1
= 2X
i
dii C (0)
I,n + X J
X
uv
duv ⟨I|Euv|J ⟩ C(0)
J,n − ⟨d⟩ C(0)
I ,n
! √n + 1.
(35)
The general expression for the orbital part of the gradient is given by:
go
mn = ⟨Ψ0|[Eˆ−
mn, Hˆ ]|Ψ0⟩ . (36)
The purely electronic contribution is known:58
gel
mn = 2(Fmn − Fnm) (37)
where
Fmn = X
q
γmqhnq + X
qrs
Γmqrsgnqrs. (38)
is the generalized Fock matrix. It is easily verified that the purely photonic contribution to
the orbital gradient is zero since Eˆ−
mn and Hˆph commute. Finally, the interaction term to the
gradient reads as:
gint
pq = ⟨Ψ0|[Eˆ−
pq, Hˆ int]|Ψ0⟩ = 2 ⟨Ψ0|[Eˆpq, Hˆ int]|Ψ0⟩
=2
rω
2
X
n
X
r
(
dqr
√n + 1γ⟨n+1|n⟩
pr + √nγ⟨n−1|n⟩
pr − drp
√n + 1γ⟨n+1|n⟩
rq + √nγ⟨n−1|n⟩
rq
)
.
(39)
15

where the one-body density matrices are defined as:
γ ⟨n+1|n⟩
pq = CI,n+1 ⟨0|Eˆpq|0⟩ CI,n γ⟨n−1|n⟩
pq = CI,n−1 ⟨0|Eˆpq|0⟩ CI,n. (40)
Finally, the sigma vectors defined in Eq. 8 can be calculated as:
σcc = X
J
Gcc
I,J bc
J = ⟨ΦI,m|(Hˆ − E0)|Ψx⟩ − C(0)
I
X
J
gc
J xJ − gc
J
X
J
C (0)
I xJ (41a)
σoc = X
I
Goc
pq,I bc
I = ⟨Ψx|[Eˆ−
pq, Hˆ ]|Ψ0⟩ + ⟨Ψ0|[Eˆ−
pq, Hˆ ]|Ψx⟩ − 2go
pq
X
I
C (0)
I xI (41b)
σco = X
pq
Gco
I,pq bo
pq = X
rs
⟨ΦI ,m |[Eˆ −
pq, Hˆ ]|Ψ0⟩ κrs − 2C(0)
I
X
rs
go
rsκrs (41c)
σoo = X
rs
Gpq,rs bo
rs = ⟨Ψ0|[Eˆ−
pq, Hˆ k]|Ψ0⟩ + X
s
(go
spκqs − go
sqκps) (41d)
where Hˆ k is the one-index transformed Hamiltonian defined as:58
Hˆ k = X
pq
hk
pqEˆpq + 1
2
X
pqrs
gk
pqrseˆpqrs (42)
where
hk
pq = X
m
(kpmhmq + kqmhpm) (43)
gk
pqrs = X m
(kpmgmqrs + kqmgpmrs + krmgpqms + ksmgpqrm) (44)
Substituting these quantities in Eqs. 6-8 an efficient second-order algorithm for QED
CASSCF can be naturally obtained.
4 Results
In this section, QED-CASSCF will be tested on small multireference systems and used to
investigate field-induced multiconfigurational effects. All the calculations are performed with
a development version of the eT software package.97
16

4.1 Dissociation of the N2 ground state
The homolytic dissociation curve of N2 is a typical test case for investigating the behavior of
multireference methods. For this system, the active space contains the six valence electrons
inside the six p orbitals, i.e., CAS(6,6). The calculations were performed using a Dunning’s
cc-pVDZ basis,99 light-matter coupling λ = 0.03 a.u., cavity frequency ω = 0.5 eV, and the
field polarization along the z axis, coincident with the main molecular axis. All the QED
calculations are performed including a single photonic state. The potential energy curve
has been computed over 32 steps from 0.75 to 8.50 ̊A. In Fig. 3a, the potential energy curve
computed at the QED-CASSCF level is compared against QED-CASCI and QED-CCSD.
For distances up to 5 ̊A, the energy profiles are in qualitative agreement with the purely
electronic potential energy curves (PECs), with coupled cluster exhibiting lower energies
with respect to CAS-type energies. Notice, however, that, at 2.25 ̊A, CC, after showing an
unphysical maximum around 2.0 ̊A, stops converging due to the emergence of multireference
effects associated with the homolytic dissociation of the system. Despite showing an higher
energy for the dissociation plateau compared to both QED-CC and QED-CASSCF, QED
CASCI describes the right energy profile in a wide range of energies as expected already
for the bare electronic system. The higher energy of the dissociated system can be clearly
explained by the lack of dynamical correlation (included in QED-CC) and by the use of
unoptimized molecular orbitals (present in QED-CASSCF). However, it is important to
highlight the presence of an unphysical jump in energy between 5.25 and 5.50 ̊A which in
not registered for the purely electronic profile (see Fig. S1 in Supporting Information). This
behavior is indeed given by the guess used for the calculation. In fact, while the purely
electronic Hartree-Fock potential energy curve is continuous in the whole energy range, the
QED-HF curve shows a drastic energy change at the same internuclear distances (see Fig. 3b).
This is also associated to a breaking of the p orbitals degeneracy. This problem is fixed by
QED-CASSCF, as shown in Fig. 3. In this case, indeed, the variational optimization of the
orbitals avoids discontinuities due to the poor quality of the guess, predicting a continuous
17

energy profile in the whole distances range. This behavior is a demonstration that the
presence of the field can, in some cases, complicate the simulation of molecular systems
characterized by multireference effects.
In order to estimate the entity of the field-induced effects, we also computed the energy
difference between the different QED methods and the corresponding electronic ones (see
Fig. 4). As expected, the energy difference goes to a plateau for CASSCF (see Fig. 4a)
while the same discontinuity is observed for CASCI and HF (see Fig. 4b) . Such difference
is particularly large for the Hartree-Fock case where it amounts to ∼ 0.45Eh for the chosen
coupling strength. This energy contribution is entirely given by the dipole self-energy term,
that it the only contribution affecting the QED-HF energy.47 These results clearly highlight
the importance of orbital optimization to obtain qualitatively-correct results especially in
the cases where multireference effects become dominant.
Before concluding, it is important to stress that even for very large coupling values (per
molecule) like those applied in this test, the field effects on the ground state energy are very
small. Much more significant effects could be observed on the excited states energies, but
their study goes beyond the scope of this paper and will be analyzed in details later in a
follow-up work.
Figure 3: Potential energy curves of the nitrogen molecule along the internuclear distance computed at the a. QED-CASSCF, QED-CASCI, and QED-CCSD level b. QED-CASSCF, QED-CASCI, QED-HF, and purely electronic HF.
18

Figure 4: Study of the field-induced effects on the ground state potential energy surfaces computed a. at the CASSCF level and b. compared to the results obtained at the HF and CASCI level of theory.
4.2 Field-induced effects on the torsion of ethylene
The description of bond-breakings, torsions along conjugated bonds, and conical intersec
tions has always been a challenge for single-reference methods.100 CASSCF is still the most
commonly employed method to provide a good guess for the description of such phenomena.
In this section we investigate the double bond torsion of an ethylene molecule coupled to
an optical cavity. This molecular system has been largely studied in the literature.101 This
work does not intend to provide any rigorous quantitative treatment of the chemistry of the
system but it only shows the effects induced by the cavity environment.
Figure 5: a. Twisted ethylene molecule, field polarization ε along the carbon-carbon bond. b. Representation of the dihedral angle, θ.
19

The torsion of the double bond induces interesting properties to the electronic structure of
ethylene in particular when the dihedral angle approaches 90°. For this particular geometry,
the two partially occupied (frontier) orbitals are practically degenerate and have occupation
numbers equal to 1. This configuration confers an high multiconfigurational character to
the system. In this section we focus our attention on the effects induced by the field on
the frontier orbitals energies for ethylene in the θ = 90° configuration. The calculations
were performed using a cc-pVDZ basis set and a minimal active space containing the two
π electrons in the π and π∗ orbitals, CAS(2,2). In this case, the cavity frequency has
been chosen to match the excitation energy to the lowest bright electronic transition of
the molecule (ω ≈ 3.30 eV). The polarization direction has been directed along the main
molecular axis (x). The orbital energy profiles were recorded by increasing the light-matter
coupling λ from 0 to 0.4 a.u. (see Fig. 6). When the coupling is increased the orbital
energies remains almost constant until coupling values of about 0.25 a.u. to then change
rapidly and reaching a gap of ∼ 4eV (see Fig. 6a). This breaking of the orbital degeneracy,
with consequent reduction of the multiconfigurational character of the system, reflects also
on the orbitals’ occupations (see Fig. 6b). Now, one of the frontier orbitals appears occupied
with more than one electron while the other is occupied with small fractions of an electron.
This behavior is a consequence of the field-induced mixing between the two orbitals (as can
be seen from Fig. 6c).
20

Figure 6: QED-CASSCF frontier orbitals a. energies and b. occupations as a function of the light-matter coupling value. c. frontier orbitals’ shapes for different coupling values.
Summarizing, in this paper we observed that in certain conditions the field may induce
changes on the multiconfigurational character of a molecular system. The analysis, performed
in this work, has been conducted with light-matter coupling values that are way larger than
those currently obtainable in actual experiments. However, if systems with smaller excitation
energies are investigated and coupling the method with strategies to properly account for
collective effects, our methodology have the potential to become a reference approach to
simulate field induced effects on the electronic structure of multireference system.
21

4.3 QED-CASSCF origin dependence
It is now well established (as demonstrated in Ref. 47) that QED-HF theory has an intrin
sic origin dependence if charged systems are investigated. This origin dependence does not
appear on the total energy, because of the origin invariance of Hamiltonian 16 but it is very
evident on the molecular orbitals and on their energies. This behavior has been addressed
in detail by Riso et al. in Ref. 102. In particular they developed an alternative method
ology know as strong coupling quantum electrodynamics Hartree Fock (SC-QED-HF)102,103
with the intent of constructing a consistent molecular orbital theory for molecules in strong
coupling conditions. In this framework, the wavefunction is transformed by a unitary trans
formation and the orbitals are defined within an electron-photon correlation basis obtained
by diagonalizing the operator (d · ε). This approach provides fully origin-invariant molecular
orbitals and is able to recover part of electron-photon correlation energy. Therefore, SC
QED-HF is better fit for the investigation of cavity-induced effects and provides a physically
meaningful guess for performing post-HF calculations on charged systems. Recently, the
strong coupling formalism has also been extended to second-order Møller-Plesset theory and
response theory.52,104
Because of an explicit dependence of the Fock matrices on the dipole matrix elements
that reflects also on the orbital gradient (as evident from Eq. 39) we expect also the QED
CASSCF molecular orbitals to be origin dependent for charged systems. It is important
to stress that, in this case, since CASSCF explicitly depends on the orbitals, also the total
energy will not be origin-invariant. Moreover, since a re-optimization of the orbitals is
performed, we expect to observe this behavior also if SC-QED-HF is used as a reference. In
this section we address this point in details. To prove this, we performed a simple test case on
the hydroxide ion. Here, CAS(2,2) calculations were performed while shifting the molecule
along the z axis (the origin of the reference system has been centered on the oxygen atom).
The cavity frequency was set, in this case, to ω = 0.5 eV and the light-matter coupling to
λ = 0.03 a.u. Fig. 7 displays the expected variation of the total energy as a function of the
22

shift along the axis. We demonstrated also, as stated earlier, that the computed energies
remain unmodified regardless of the starting guess (SC-QED-HF or QED-HF).
Figure 7: Origin dependence of the QED-CASSCF energy for the OH− ion.
5 Conclusions
In this work we have presented the first (at least to our knowledge) extension of the complete
active space self-consistent field method to account for the effect of quantized electromag
netic fields in optical cavities, (QED-CASSCF). The implementation of the method was
performed according to a restricted-step second-order optimization method. This strategy
allows to overcome some of the convergence issues that characterize the CASSCF wavefunc
tion optimization.67,83
The developed method was tested on small multireference molecules where the inclusion
of static correlation is crucial to provide at least a qualitative description of the system.
The comparison between QED-CASSCF and QED-CASCI for the dissociation curve of the
23

nitrogen molecule proved the importance of the orbital optimization to avoid unphysical
behaviors arising from possible poor quality guesses.
We also investigated the effects induced by the cavity field on the ethylene torsion pro
cess. Our calculations show that the presence of the electromagnetic field can remove the
degeneracy between the π and π∗ orbitals reducing, in specific coupling conditions, the mul
tireference character of the system.
Finally, we addressed the origin dependence of our method in case of charges systems.
In particular, the simple case study of the OH− ion showed that, even if an origin-invariant
reference is used, the method still preserve a dependence on the choice of the reference
system. This issue will be solved in a future paper where the Strong Coupling transformation
proposed in Ref. 102 will be applied to remove the origin-dependence of QED-CASSCF also
for charged systems.
It is important to remind that, the results obtained in this paper, due to the very large
coupling values we used, are not directly comparable with experimental results. However,
the aim of the paper, was not much to provide accurate simulations of molecular systems in
optical cavities, but more proposing a new methodology able to investigate multireference
systems coupled to electromagnetic fields. In a near future this methodology will be coupled
with strategies to include collective effects that will allow for more realistic simulations.105–107
With this work we move one step further towards an accurate description of multicon
figurational molecular systems in optical cavities. This paves the way for the investigation
of chemically/photochemically-relevant processes that until this day have been investigated
through model Hamiltonians or other approximated methods.
Acknowledgement
R.A and E.R. acknowledge funding from the European Research Council (ERC) under the
European Union’s Horizon Europe Research and Innovation Programme (Grant n. ERC
24

StG-2021-101040197 - QED-SPIN). H.K. acknowledges funding from the European Research
Council (ERC) under the European Union’s Horizon 2020 Research and Innovation Pro
gramme (grant agreement No. 101020016).
Supporting Information Available
The SI contains plots with direct comparison between potential energy surfaces calculate
with QED and bare electronic methods.
5.1 Code availability
The eT program used to perform the calculations shown in this work is available from the
corresponding author upon reasonable request.
References
(1) Ebbesen, T. W. Hybrid light–matter states in a molecular and material science per
spective. Acc. Chem. Res. 2016, 49, 2403–2412.
(2) Bennett, K.; Kowalewski, M.; Mukamel, S. Novel photochemistry of molecular polari
tons in optical cavities. Faraday Discuss. 2016, 194, 259–282.
(3) Herrera, F.; Spano, F. C. Cavity-controlled chemistry in molecular ensembles. Phys.
Rev. Lett. 2016, 116, 238301.
(4) Galego, J.; Garcia-Vidal, F. J.; Feist, J. Many-molecule reaction triggered by a single
photon in polaritonic chemistry. Phys. Rev. Lett. 2017, 119, 136001.
(5) Martı ́nez-Martı ́nez, L. A.; Du, M.; Ribeiro, R. F.; Ke ́na-Cohen, S.; Yuen-Zhou, J.
Polariton-assisted singlet fission in acene aggregates. J. Phys. Chem. Lett. 2018, 9,
1951–1957.
25

(6) Mandal, A.; Huo, P. Investigating new reactivities enabled by polariton photochem
istry. J. Phys. Chem. Lett. 2019, 10, 5519–5529.
(7) Wang, S.; Scholes, G. D.; Hsu, L.-Y. Coherent-to-incoherent transition of molecular
fluorescence controlled by surface plasmon polaritons. J. Phys. Chem. Lett. 2020, 11,
5948–5955.
(8) DelPo, C. A.; Kudisch, B.; Park, K. H.; Khan, S.-U.-Z.; Fassioli, F.; Fausti, D.;
Rand, B. P.; Scholes, G. D. Polariton transitions in femtosecond transient absorption
studies of ultrastrong light–molecule coupling. J. Phys. Chem. Lett. 2020, 11, 2667
2674.
(9) Polak, D.; Jayaprakash, R.; Lyons, T. P.; Martı ́nez-Martı ́nez, L. A ́ .; Leventis, A.;
Fallon, K. J.; Coulthard, H.; Bossanyi, D. G.; Georgiou, K.; Petty, A. J.; others
Manipulating molecules with strong coupling: harvesting triplet excitons in organic
exciton microcavities. Chem. Sci. 2020, 11, 343–354.
(10) Thompson, R.; Rempe, G.; Kimble, H. Observation of normal-mode splitting for an
atom in an optical cavity. Phys. Rev. Lett. 1992, 68, 1132.
(11) Garcia-Vidal, F. J.; Ciuti, C.; Ebbesen, T. W. Manipulating matter by strong coupling
to vacuum fields. Science 2021, 373, eabd0336.
(12) Baumberg, J. J.; Aizpurua, J.; Mikkelsen, M. H.; Smith, D. R. Extreme nanophotonics
from ultrathin metallic gaps. Nat. Mat. 2019, 18, 668–678.
(13) Baranov, D. G.; Munkhbat, B.; Zhukova, E.; Bisht, A.; Canales, A.; Rousseaux, B.; Jo
hansson, G.; Antosiewicz, T. J.; Shegai, T. Ultrastrong coupling between nanoparticle
plasmons and cavity photons at ambient conditions. Nat. Comm. 2020, 11, 2715.
(14) Teufel, J. D.; Li, D.; Allman, M. S.; Cicak, K.; Sirois, A.; Whittaker, J. D.; Sim
26

monds, R. Circuit cavity electromechanics in the strong-coupling regime. Nature 2011,
471, 204–208.
(15) Haroche, S.; Brune, M.; Raimond, J. From cavity to circuit quantum electrodynamics.
Nat. Phys. 2020, 16, 243–246.
(16) Wallraff, A.; Schuster, D. I.; Blais, A.; Frunzio, L.; Huang, R.-S.; Majer, J.; Kumar, S.;
Girvin, S. M.; Schoelkopf, R. J. Strong coupling of a single photon to a superconducting
qubit using circuit quantum electrodynamics. Nature 2004, 431, 162–167.
(17) Sun, F.; Huang, W.; Zheng, Z.; Xu, N.; Ke, Y.; Zhan, R.; Chen, H.; Deng, S. Polariton
waveguide modes in two-dimensional van der Waals crystals: an analytical model and
correlative nano-imaging. Nanoscale 2021, 13, 4845–4854.
(18) Downing, C.; Sturges, T.; Weick, G.; Stobin ́ska, M.; Martı ́n-Moreno, L. Topological
phases of polaritons in a cavity waveguide. Phys. Rev. Lett. 2019, 123, 217401.
(19) Kondratyev, V. I.; Permyakov, D. V.; Ivanova, T. V.; Iorsh, I. V.; Krizhanovskii, D. N.;
Skolnick, M. S.; Kravtsov, V.; Samusev, A. K. Probing and control of guided exciton
polaritons in a 2D semiconductor-integrated slab waveguide. Nano Lett. 2023, 23,
7876–7882.
(20) Miller, R.; Northup, T.; Birnbaum, K.; Boca, A.; Boozer, A.; Kimble, H. Trapped
atoms in cavity QED: coupling quantized light and matter. J. Phys. B 2005, 38,
S551.
(21) Flick, J.; Ruggenthaler, M.; Appel, H.; Rubio, A. Atoms and molecules in cavities,
from weak to strong coupling in quantum-electrodynamics (QED) chemistry. PNAS
2017, 114, 3026–3034.
(22) Feist, J.; Galego, J.; Garcia-Vidal, F. J. Polaritonic chemistry with organic molecules.
ACS Photonics 2018, 5, 205–216.
27

(23) Hertzog, M.; Wang, M.; Mony, J.; Bo ̈rjesson, K. Strong light–matter interactions: a
new direction within chemistry. Chem. Soc. Rev. 2019, 48, 937–961.
(24) Herrera, F.; Spano, F. C. Absorption and photoluminescence in organic cavity QED.
Phys. Rev. A 2017, 95, 053867.
(25) Baranov, D. G.; Munkhbat, B.; La ̈nk, N. O.; Verre, R.; Ka ̈ll, M.; Shegai, T. Cir
cular dichroism mode splitting and bounds to its enhancement with cavity-plasmon
polaritons. Nanophotonics 2020, 9, 283–293.
(26) Shalabney, A.; George, J.; Hiura, H.; Hutchison, J. A.; Genet, C.; Hellwig, P.; Ebbe
sen, T. W. Enhanced raman scattering from vibro-polariton hybrid states. Angew
Chem. Int. Ed. Engl. 2015, 54, 7971–7975.
(27) del Pino, J.; Feist, J.; Garcia-Vidal, F. Signatures of vibrational strong coupling in
Raman scattering. J. Phys. Chem. C 2015, 119, 29132–29137.
(28) Skolnick, M.; Fisher, T.; Whittaker, D. Strong coupling phenomena in quantum mi
crocavity structures. Semicond. Sci. Technol. 1998, 13, 645.
(29) Kasprzak, J.; Richard, M.; Kundermann, S.; Baas, A.; Jeambrun, P.; Keeling, J.
M. J.; Marchetti, F.; Szyma ́nska, M.; Andr ́e, R.; Staehli, J. a.; others Bose–Einstein
condensation of exciton polaritons. Nature 2006, 443, 409–414.
(30) Byrnes, T.; Kim, N. Y.; Yamamoto, Y. Exciton–polariton condensates. Nat. Phys.
2014, 10, 803–813.
(31) Orgiu, E.; George, J.; Hutchison, J. A.; Devaux, E.; Dayen, J.-F.; Doudin, B.; Stel
lacci, F.; Genet, C.; Schachenmayer, J.; Genes, C.; others Conductivity in organic
semiconductors hybridized with the vacuum field. Nat. Mat. 2015, 14, 1123–1129.
(32) Bienfait, A.; Pla, J.; Kubo, Y.; Zhou, X.; Stern, M.; Lo, C.; Weis, C.; Schenkel, T.;
28

Vion, D.; Esteve, D.; others Controlling spin relaxation with a cavity. Nature 2016,
531, 74–77.
(33) Bonizzoni, C.; Ghirri, A.; Atzori, M.; Sorace, L.; Sessoli, R.; Affronte, M. Coherent
coupling between Vanadyl Phthalocyanine spin ensemble and microwave photons: to
wards integration of molecular spin qubits into quantum circuits. Sci. Rep. 2017, 7,
13096.
(34) Bonizzoni, C.; Ghirri, A.; Affronte, M. Coherent coupling of molecular spins with
microwave photons in planar superconducting resonators. Adv. Phys.: X 2018, 3,
1435305.
(35) Thomas, A.; George, J.; Shalabney, A.; Dryzhakov, M.; Varma, S. J.; Moran, J.;
Chervy, T.; Zhong, X.; Devaux, E.; Genet, C.; others Ground-state chemical reactivity
under vibrational coupling to the vacuum electromagnetic field. Angew. Chem. 2016,
128, 11634–11638.
(36) Lather, J.; Bhatt, P.; Thomas, A.; Ebbesen, T. W.; George, J. Cavity catalysis by co
operative vibrational strong coupling of reactant and solvent molecules. Angew Chem.
Int. Ed. Engl. 2019, 58, 10635–10638.
(37) Thomas, A.; Lethuillier-Karl, L.; Nagarajan, K.; Vergauwe, R. M.; George, J.;
Chervy, T.; Shalabney, A.; Devaux, E.; Genet, C.; Moran, J.; Ebbesen, T. W. Tilting
a ground-state reactivity landscape by vibrational strong coupling. Science 2019, 363,
615–619.
(38) Sau, A.; Nagarajan, K.; Patrahau, B.; Lethuillier-Karl, L.; Vergauwe, R. M.;
Thomas, A.; Moran, J.; Genet, C.; Ebbesen, T. W. Modifying Woodward–Hoffmann
stereoselectivity under vibrational strong coupling. Angew Chem. Int. Ed. Engl. 2021,
60, 5712–5717.
29

(39) Ahn, W.; Triana, J. F.; Recabal, F.; Herrera, F.; Simpkins, B. S. Modification of
ground-state chemical reactivity via light–matter coherence in infrared cavities. Sci
ence 2023, 380, 1165–1168.
(40) Patrahau, B.; Piejko, M.; Mayer, R. J.; Antheaume, C.; Sangchai, T.; Ragazzon, G.;
Jayachandran, A.; Devaux, E.; Genet, C.; Moran, J.; others Direct observation of
polaritonic chemistry by nuclear magnetic resonance spectroscopy. Angew Chem. Int.
Ed. Engl. 2024, 63, e202401368.
(41) Michon, M. A.; Simpkins, B. S. Impact of Cavity Length Non-uniformity on Reaction
Rate Extraction in Strong Coupling Experiments. J. Am. Chem. Soc. 2024, 146,
30596–30606.
(42) Fregoni, J.; Garcia-Vidal, F. J.; Feist, J. Theoretical challenges in polaritonic chem
istry. ACS photonics 2022, 9, 1096–1107.
(43) Foley, J. J.; McTague, J. F.; DePrince, A. E. Ab initio methods for polariton chemistry.
Chem. Phys. Rev. 2023, 4 .
(44) Ruggenthaler, M.; Flick, J.; Pellegrini, C.; Appel, H.; Tokatly, I. V.; Rubio, A.
Quantum-electrodynamical density-functional theory: Bridging quantum optics and
electronic-structure theory. Phys. Rev. A 2014, 90, 012508.
(45) Ruggenthaler, M.; Tancogne-Dejean, N.; Flick, J.; Appel, H.; Rubio, A. From a
quantum-electrodynamical light–matter description to novel spectroscopies. Nat. Rev.
Chem. 2018, 2, 1–16.
(46) Flick, J.; Scha ̈fer, C.; Ruggenthaler, M.; Appel, H.; Rubio, A. Ab initio optimized
effective potentials for real molecules in optical cavities: Photon contributions to the
molecular ground state. ACS Photonics 2018, 5, 992–1005.
30

(47) Haugland, T. S.; Ronca, E.; Kjønstad, E. F.; Rubio, A.; Koch, H. Coupled cluster
theory for molecular polaritons: Changing ground and excited states. Phys. Rev. X
2020, 10, 041043.
(48) Mordovina, U.; Bungey, C.; Appel, H.; Knowles, P. J.; Rubio, A.; Manby, F. R.
Polaritonic coupled-cluster theory. Phys. Rev. Res. 2020, 2, 023262.
(49) Pavosevic, F.; Flick, J. Polaritonic unitary coupled cluster for quantum computations.
J. Phys. Chem. Lett. 2021, 12, 9100–9107.
(50) Liebenthal, M. D.; Vu, N.; DePrince, A. E. Equation-of-motion cavity quantum elec
trodynamics coupled-cluster theory for electron attachment. J. Chem. Phys. 2022,
156 .
(51) Monzel, L.; Stopkowicz, S. Diagrams in Polaritonic Coupled Cluster Theory. J. Phys.
Chem. A 2024, 128, 9572–9586.
(52) Moutaoukal, Y. E.; Riso, R. R.; Castagnola, M.; Ronca, E.; Koch, H. Strong coupling
Møller-Plesset perturbation theory. arXiv preprint arXiv:2501.08051 2025,
(53) Thiam, G.; Rossi, R.; Koch, H.; Belpassi, L.; Ronca, E. A comprehensive theory for
relativistic polaritonic chemistry: a four components ab initio treatment of molecular
systems coupled to quantum fields. arXiv preprint arXiv:2409.12757 2024,
(54) Konecny, L.; Kosheleva, V. P.; Appel, H.; Ruggenthaler, M.; Rubio, A. Relativis
tic Linear Response in Quantum-Electrodynamical Density Functional Theory. arXiv
preprint arXiv:2407.02441 2024,
(55) Choudhury, A.; Santra, S.; Ghosh, D. Understanding the Photoprocesses in Biological
Systems: Need for Accurate Multireference Treatment. J. Chem. Theory Comput.
2024, 20, 4951–4964.
31

(56) Lischka, H.; Nachtigallova, D.; Aquino, A. J.; Szalay, P. G.; Plasser, F.;
Machado, F. B.; Barbatti, M. Multireference approaches for excited states of
molecules. Chem. Rev. 2018, 118, 7293–7361.
(57) Szalay, P. G.; Muller, T.; Gidofalvi, G.; Lischka, H.; Shepard, R. Multiconfiguration
self-consistent field and multireference configuration interaction methods and applica
tions. Chem. Rev. 2012, 112, 108–181.
(58) Helgaker, T.; Jorgensen, P.; Olsen, J. Molecular electronic-structure theory; John Wi
ley & Sons, 2013.
(59) Vogiatzis, K. D.; Ma, D.; Olsen, J.; Gagliardi, L.; De Jong, W. A. Pushing
configuration-interaction to the limit: Towards massively parallel MCSCF calcula
tions. J. Chem. Phys. 2017, 147 .
(60) Vu, N.; Mejia-Rodriguez, D.; Bauman, N. P.; Panyala, A.; Mutlu, E.; Govind, N.; Fo
ley IV, J. J. Cavity Quantum Electrodynamics Complete Active Space Configuration
Interaction Theory. J. Chem. Theory Comput. 2024, 20, 1214–1227.
(61) Matousˇek, M.; Vu, N.; Govind, N.; Foley IV, J. J.; Veis, L. Polaritonic chemistry using
the density matrix renormalization group method. J. Chem. Theory Comput. 2024,
20, 9424–9434.
(62) Mallory, J. D.; DePrince III, A. E. Reduced-density-matrix-based ab initio cavity
quantum electrodynamics. Phys. Rev. A 2022, 106, 053710.
(63) Levine, B. G.; Durden, A. S.; Esch, M. P.; Liang, F.; Shu, Y. CAS without SCF—Why
to use CASCI and where to get the orbitals. J. Chem. Phys. 2021, 154 .
(64) Jensen, H. J. A.; Jørgensen, P. A direct approach to second-order MCSCF calculations
using a norm extended optimization scheme. J. Chem. Phys. 1984, 80, 1204–1214.
32

(65) Høyvik, I.-M.; Jansik, B.; Jørgensen, P. Trust region minimization of orbital localiza
tion functions. J. Chem. Theory Comput. 2012, 8, 3137–3146.
(66) Folkestad, S. D.; Matveeva, R.; Høyvik, I.-M.; Koch, H. Implementation of occupied
and virtual Edmiston–Ruedenberg orbitals using Cholesky decomposed integrals. J.
Chem. Theory Comput. 2022, 18, 4733–4744.
(67) Helmich-Paris, B. A trust-region augmented Hessian implementation for state-specific
and state-averaged CASSCF wave functions. J. Chem. Phys. 2022, 156 .
(68) Olsen, J.; Roos, B. O.; Jo/rgensen, P.; Jensen, H. J. A. Determinant based config
uration interaction algorithms for complete and restricted configuration interaction
spaces. J. Chem. Phys. 1988, 89, 2185–2192.
(69) Malmqvist, P.  ̊A.; Rendell, A.; Roos, B. O. The restricted active space self-consistent
field method, implemented with a split graph unitary group approach. J. Phys. Chem.
1990, 94, 5477–5482.
(70) Fleig, T.; Olsen, J.; Marian, C. M. The generalized active space concept for the rel
ativistic treatment of electron correlation. I. Kramers-restricted two-component con
figuration interaction. J. Chem. Phys. 2001, 114, 4775–4790.
(71) Schollw ̈ock, U. The density-matrix renormalization group. Rev. Mod. Phys. 2005, 77,
259–315.
(72) Mazziotti, D. A. Quantum chemistry without wave functions: Two-electron reduced
density matrices. Acc. Chem. Res. 2006, 39, 207–215.
(73) Roos, B. O.; Taylor, P. R.; Sigbahn, P. E. A complete active space SCF method
(CASSCF) using a density matrix formulated super-CI approach. Chem. Phys. 1980,
48, 157–173.
33

(74) Roos, B. O. The complete active space SCF method in a fock-matrix-based super-CI
formulation. Int. J. Quantum. Chem. 1980, 18, 175–189.
(75) Jensen, H. J. A.;  ̊Agren, H. A direct, restricted-step, second-order MC SCF program
for large scale ab initio calculations. Chem. Phys. 1986, 104, 229–250.
(76) Jensen, H. J. A.; Jørgensen, P.;  ̊Agren, H. Efficient optimization of large scale MCSCF
wave functions with a restricted step algorithm. J. Chem. Phys. 1987, 87, 451–466.
(77) Werner, H.-J.; Meyer, W. A quadratically convergent multiconfiguration–self
consistent field method with simultaneous optimization of orbitals and CI coefficients.
J. Chem. Phys. 1980, 73, 2342–2356.
(78) Werner, H.-J.; Knowles, P. J. A second order multiconfiguration SCF procedure with
optimum convergence. J. Chem. Phys. 1985, 82, 5053–5063.
(79) Sun, Q.; Yang, J.; Chan, G. K.-L. A general second order complete active space self
consistent-field solver for large-scale systems. Chem. Phys. Lett. 2017, 683, 291–299.
(80) Ma, Y.; Knecht, S.; Keller, S.; Reiher, M. Second-order self-consistent-field density
matrix renormalization group. J. Chem. Theory Comput. 2017, 13, 2533–2549.
(81) Kreplin, D. A.; Knowles, P. J.; Werner, H.-J. Second-order MCSCF optimization re
visited. I. Improved algorithms for fast and robust second-order CASSCF convergence.
J. Chem. Phys. 2019, 150 .
(82) Kreplin, D. A.; Knowles, P. J.; Werner, H.-J. MCSCF optimization revisited. II. Com
bined first-and second-order orbital optimization for large molecules. J. Chem. Phys.
2020, 152 .
(83) Nottoli, T.; Gauss, J.; Lipparini, F. Second-order CASSCF algorithm with the
Cholesky decomposition of the two-electron integrals. J. Chem. Theory Comput. 2021,
17, 6819–6831.
34

(84) Aidas, K.; Angeli, C.; Bak, K. L.; Bakken, V.; Bast, R.; Boman, L.; Christiansen, O.;
Cimiraglia, R.; Coriani, S.; Dahle, P.; others The Dalton quantum chemistry program
system. Wiley Interdiscip. Rev. Comput. Mol. Sci. 2014, 4, 269–284.
(85) Aquilante, F.; Autschbach, J.; Baiardi, A.; Battaglia, S.; Borin, V. A.; Chibo
taru, L. F.; Conti, I.; De Vico, L.; Delcey, M.; Ferr ́e, N.; others Modern quantum
chemistry with [Open] Molcas. J. Chem. Phys. 2020, 152 .
(86) Matthews, D. A.; Cheng, L.; Harding, M. E.; Lipparini, F.; Stopkowicz, S.; Jagau, T.
C.; Szalay, P. G.; Gauss, J.; Stanton, J. F. Coupled-cluster techniques for computa
tional chemistry: The CFOUR program package. J. Chem. Phys. 2020, 152 .
(87) Sun, Q.; Zhang, X.; Banerjee, S.; Bao, P.; Barbry, M.; Blunt, N. S.; Bogdanov, N. A.;
Booth, G. H.; Chen, J.; Cui, Z.-H.; others Recent developments in the PySCF program
package. J. Chem. Phys. 2020, 153 .
(88) Neese, F. The ORCA program system. Wiley Interdiscip. Rev. Comput. Mol. Sci.
2012, 2, 73–78.
(89) Davidson, E. R. The Iterative Calculation of a Few of the Lowest Eigenvalues and Cor
responding Eigenvectors of Large Real-Symmetric Matrices. J. Comput. Phys. 1975,
17, 87–94.
(90) Roos, B. A new method for large-scale Cl calculations. Chem. Phys. Lett. 1972, 15,
153–159.
(91) Fletcher, R. Practical methods of optimization; John Wiley & Sons, 2000.
(92) Simons, J.; Joergensen, P.; Taylor, H.; Ozment, J. Walking on potential energy sur
faces. J. Phys. Chem. 1983, 87, 2745–2753.
(93) Levenberg, K. A method for the solution of certain non-linear problems in least
squares. Q. Appl. Math. 1944, 2, 164–168.
35

(94) Marquardt, D. W. An algorithm for least-squares estimation of nonlinear parameters.
SIAM 1963, 11, 431–441.
(95) Hylleraas, E. A.; Undheim, B. Numerische berechnung der 2 S-terme von ortho-und
par-helium. Z. Phys. 1930, 65, 759–772.
(96) MacDonald, J. Successive approximations by the Rayleigh-Ritz variation method.
Phys. Rev. 1933, 43, 830.
(97) Folkestad, S. D.; Kjønstad, E. F.; Myhre, R. H.; Andersen, J. H.; Balbi, A.; Coriani, S.;
Giovannini, T.; Goletto, L.; Haugland, T. S.; Hutcheson, A.; others eT 1.0: An open
source electronic structure program with emphasis on coupled cluster and multilevel
methods. J. Chem. Phys. 2020, 152 .
(98) Lexander, M. T.; Angelico, S.; Kjønstad, E. F.; Koch, H. Analytical evaluation of
ground state gradients in quantum electrodynamics coupled cluster theory. J. Chem.
Theory Comput. 2024, 20, 8876–8885.
(99) Dunning Jr, T. H. Gaussian basis sets for use in correlated molecular calculations. I.
The atoms boron through neon and hydrogen. J. Chem. Phys. 1989, 90, 1007–1023.
(100) Mai, S.; Gonza ́lez, L. Molecular photochemistry: recent developments in theory.
Angew. Chem. Int. Ed. Eng. 2020, 59, 16832–16846.
(101) Feller, D.; Peterson, K. A.; Davidson, E. R. A systematic approach to vertically excited
states of ethylene using configuration interaction and coupled cluster techniques. J.
Chem. Phys. 2014, 141, 104302.
(102) Riso, R. R.; Haugland, T. S.; Ronca, E.; Koch, H. Molecular orbital theory in cavity
QED environments. Nat. Comm. 2022, 13, 1368.
36

(103) El Moutaoukal, Y.; Riso, R. R.; Castagnola, M.; Koch, H. Toward polaritonic molec
ular orbitals for large molecular systems. J. Chem. Theory Comput. 2024, 20, 8911
8920.
(104) Castagnola, M.; Riso, R. R.; Moutaoukal, Y. E.; Ronca, E.; Koch, H. Strong
coupling quantum electrodynamics Hartree-Fock response theory. arXiv preprint
arXiv:2502.14511 2025,
(105) Castagnola, M.; Lexander, M. T.; Koch, H. Realistic ab initio predictions of
excimer behavior under collective light-matter strong coupling. arXiv preprint
arXiv:2410.22043 2024,
(106) Koessler, E.; Mandal, A.; Musser, A.; Krauss, T.; Huo, P. Polariton Mediated Electron
Transfer under the Collective Molecule-Cavity Coupling Regime. 2025,
(107) Horak, J.; Sidler, D.; Schnappinger, T.; Huang, W.-M.; Ruggenthaler, M.; Rubio, A.
Analytic model reveals local molecular polarizability changes induced by collective
strong coupling in optical cavities. Phys. Rev. Res. 2025, 7, 013242.
37

Supporting Information:
A Complete Active Space Self-Consistent Field
(CASSCF) approach for molecules in QED
environments
Riccardo Alessandro,† Henrik Koch,‡ and Enrico Ronca∗,†
†Dipartimento di Chimica, Biologia e Biotecnologie, Universit`a degli Studi di Perugia, Via
Elce di Sotto, 8,06123, Perugia, Italy
‡Department of Chemistry, Norwegian University of Science and Technology, 7491
Trondheim, Norway
E-mail: enrico.ronca@unipg.it
S-1

Figure S1: Comparison between the CASCI and QED-CASCI potential energy curves for the dinitrogen molecule
S-2

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:33.996Z
- **Text Length:** 56744 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 39 of 39
