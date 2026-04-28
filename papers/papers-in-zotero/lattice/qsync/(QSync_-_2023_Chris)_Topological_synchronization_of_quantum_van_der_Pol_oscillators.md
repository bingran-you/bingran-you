# PDF Document: (QSync - 2023 Chris) Topological synchronization of quantum van der Pol oscillators.pdf

**File Path:** (QSync - 2023 Chris) Topological synchronization of quantum van der Pol oscillators.pdf

**Processed Date:** 2026-02-10T18:17:12.286Z

**File Size:** 5025.83 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 363

**Title:** (QSync - 2023 Chris) Topological synchronization of quantum van der Pol oscillators

**Collection:** Lattice > QSync

---

## Extracted Text Content

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

Topological synchronization of quantum van der Pol oscillators
Christopher W. Wächtler 1,2,* and Gloria Platero 3 1Max Planck Institut für Physik komplexer Systeme, 01187 Dresden, Germany 2Department of Physics, University of California, Berkeley, California 94720, USA 3Instituto de Ciencia de Materiales de Madrid, CSIC, Madrid 28049, Spain
(Received 31 July 2022; revised 22 September 2022; accepted 1 April 2023; published 11 April 2023)
To observe synchronization in large networks of classical or quantum systems demands both excellent control of the interactions between nodes and very accurate preparation of initial conditions due to the involved nonlinearities and dissipation. This limits its applicability for future devices. We demonstrate a route toward signiﬁcantly enhancing the robustness of synchronized behavior in open nonlinear systems that utilizes the power of topology. In nontrivial topological lattices of quantum van -
der Pol oscillators, boundary synchronization emerges in the classical mean ﬁeld as well as the quantum regime. In addition to its robustness against disorder and initial state perturbations, the observed dynamics is independent of the underlying topological model provided the existence of topological zero-energy modes. Our work extends the notion of topology to the general nonlinear dynamics and open quantum system realm with applications to networks where speciﬁc nodes need special protection li-
ke power grids or quantum networks.
DOI: 10.1103/PhysRevResearch.5.023021

I. INTRODUCTION
For many quantum mechanical applications dissipation is often regarded as an undesirable yet unavoidable consequence because it potentially degrades quantum coherences and renders the system classical. However, interactions with the environment can also be considered a fundamental resource for striking collective effects typically impossible in Hamiltonian systems [1–3]. A hallmark of such collective behavior in nonequilibrium systems is the phenomenon of synchronization: in the complete absence o-
f any time-dependent forcing from the outside, a group of oscillators adjusts their frequencies such that they spontaneously oscillate in unison [4,5]. Synchronization is intimately related to the phenomenon of self-sustained oscillations, where a system maintains a periodic motion in an autonomous fashion [6]. In this sense, interactions with the environment and nonlinearities in the equations of motion represent prerequisites for synchronization. With the recent developments in quantum technolog-
y which allow one to exquisitely tailor both the system and environmental properties, synchronization has emerged in the quantum domain with various different examples ranging from nonlinear oscillators to spin-1 systems, superconducting qubits, optomechanics, and ensembles of atoms that demonstrate synchronization in the quantum regime [7–19].
*cwwaechtler@berkeley.edu
Published by the American Physical Society under the terms of the Creative Commons Attribution 4.0 International license. Further distribution of this work must maintain attribution to the author(s) and the published article’s title, journal citation, and DOI. Open access publication funded by the Max Planck Society.

In both quantum and classical systems, unavoidable imperfections—local deformations caused by ambient conditions as well as long-term degradation—have a signiﬁcant impact on the collective behavior and can even destroy synchronicity altogether. Moreover, collective synchronized dynamics in large networks often sensitively depends on ﬁnetuned initial conditions. It is therefore desirable for a reliable performance of future devices to identify universal principles to enhance the robustness of synch-
ronization. In this work, we demonstrate that the power of topology can be exploited for this task. Topological insulators describe a special class of solids exhibiting an insulating bulk but symmetry protected conducting surface states, known as topological edge states [20–24]. These edge states display a surprising immunity to a wide range of local deformations, inherently avoiding backscattering over broad energy ranges and even circumventing localization in the presence of disorder [25].
While the robustness of topological systems is well established for isolated systems, it is a nontrivial problem to determine whether this feature is still available in open setups. Recently, the study of out-of-equilibrium systems has moved to the forefront of research in topological band structures, motivated largely by the desire to create interesting states of matter with properties beyond those achievable in equilibrium [26–32]. While topological band and bandgap structures are inherently tie-
d to linear systems, we currently observe rapidly growing interest to generalize topological concepts to nonlinear systems, which in turn has sparked the ﬁeld of nonlinear topological photonics and the phenomenon of topological lasing [33–37].
Despite these recent advancements, applying topological concepts to synchronization phenomena is still largely unexplored, with only a few studies on classical nonlinear oscillators [38–40], yet with already some remarkable

2643-1564/2023/5(2)/023021(18)

023021-1

Published by the American Physical Society

WÄCHTLER AND PLATERO

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

results. For example, Sone et al. [40] showed that linearly coupled Stuart-Landau oscillators arranged on a square lattice may exhibit chaotic bulk motion and robust synchronized edge oscillations when the coupling Hamiltonian promotes topological lasing modes. The authors termed this coexistence state “topological synchronized state,” which may be observed for Hermitian as well as non-Hermitian coupling Hamiltonians. Furthermore, the involved nonlinearity may also induce emerging effective bounda-
ries, which lead to extra topological modes unique to nonlinear systems. However, to the best of our knowledge, similar studies for quantum systems are entirely missing so far. In this work, we systematically investigate the potential of topological insulator models to promote topological synchronization in classical and quantum systems. To provide such a comprehensive study, we choose the van der Pol (vdP) oscillator [4,5] as our building block to construct topological lattices. Since the quantum-
 version of the vdP oscillator [7,8,10] reduces to its classical analog at the mean-ﬁeld level (speciﬁcally to the StuartLandau oscillator, which is the weakly nonlinear limit of the classical vdP oscillator), we are able to study the inﬂuence of topological band structures in both regimes. We show not only that boundary synchronization emerges in the classical as well as the quantum regime if the underlying lattice possesses nontrivial topology, but also that it is protected over a wide range of -
local disorder. Our results pave the way toward utilizing topology as a powerful tool for enhancing the robustness of collective dynamics in nonlinear open quantum systems.

II. TOPOLOGICAL SYNCHRONIZATION IN COUPLED OSCILLATOR NETWORKS

A. Topological van der Pol oscillator network
We study a lattice of N sites, each consisting of a harmonic oscillator labeled by the index j = 1, ..., N and we assume identical frequencies ω0 of each oscillator. The Hamiltonian of the system can be written as a tight-binding Hamiltonian

H = H0 + Htop = h¯ ω0a†j a j + h¯

λ j j (a†j a j + a†j a j ),

j

j j =j

(1) where a†j (a j) denote creation (annihilation) operators of
bosonic particles at lattice site j. This general form of the

system Hamiltonian allows us to realize different topological

lattices simply by modifying the couplings λ j j . Recently, it has been realized that a quantum harmonic oscillator subject

to one-phonon gain with rate κ1 and two-phonon loss with rate κ2 represents the quantum analog of the classical vdP oscilla-

tor [7–11]. In an open quantum system approach and using

the notation D[O]

=O

O†

−

1 2

{O†O,

}, the dynamics of

the system density matrix (t ) describing a network of vdP

oscillators is then given by the master equation

˙ = − i [H, ] + h¯

κ1D[a†j ] + κ2D a2j . (2)

j

Throughout this work we focus on the weak dissipation regime, that is we assume that κ1, κ2 ω0. For realistic systems, this regime corresponds to long coherence times and weak coupling to the reservoirs such that a description of the system dynamics in terms of a Lindblad master equation [cf.

Eq. (2)] is valid. Furthermore, we are interested in the regime where κ2 > κ1 as in this case each oscillator remains close to its ground state [7].

III. METHODS

A. Mean-ﬁeld approximation and linear stability analysis

From the full quantum model deﬁned in Eq. (2), one may
derive classical equations of motion for the expectation values α j = a j ∈ C by performing a mean-ﬁeld approximation. The governing equation of the complex-valued mean-ﬁeld amplitudes α = (α1, . . . , αN ) is then given by

α˙

=

−

i Hα h¯

+

κ1 2

α

−

κ2 (α

α∗

α),

(3)

where H = H0 + Htop denotes the matrix corresponding to the Hamiltonian H [cf. Eq. (1)] with diagonal matrix H0 = h¯ω01 and the matrix describing the coupling between oscillators

Htop. Furthermore, denotes the Hadamard product deﬁned as (α α)n = αn · αn.
In the absence of any coupling between lattice sites

(λ j j ≡ 0) each steady-state α¯ j

oscillator will approach (t ) = A¯ exp(−iω0t + ϕ j

)itswreitshpeAc¯ti=ve√peκr1i/o2dκic2

and arbitrary phases ϕ j. However, the interactions enable the

emergence of collective synchronized motion, whose exis-

tence is intimately related to the stability of the ﬁxed point αFP deﬁned via α˙ FP = 0. From Eq. (3), we ﬁnd that the ﬁxed point is given by αFP = 0. The stability of αFP may be analyzed in terms of a corresponding model linearized around αFP:

α˙ = Jα,

(4)

where we have omitted second and higher-order terms. The Jacobian matrix J with entries J j j = ∂α˙ j/∂α j is evaluated at αFP resulting in the matrix

J

=

i − h¯ (H0

+

Htop )

+

κ1 2

1.

(5)

In particular, Eq. (4) only contains the linear terms of Eq. (3). In general, the ﬁxed point αFP is stable as long as the real part of all eigenvalues of J are negative. In contrast, if at
least one eigenvalue has positive real part, the ﬁxed point
is dynamically unstable and the corresponding eigenstate
will exponentially grow. However, the nonlinear damping in
Eq. (3) counteracts this exponential amplitude increase, lead-
ing eventually to stable oscillations.
Since Htop is a Hermitian matrix, it has real eigenvalues h¯μ(l), where l = 1, . . . , N is an index for the different eigenvalues. Moreover, the diagonal entries of J are given by −iω0 + κ1/2, such that ν(l) = −i(ω0 + μ(l)) + κ1/2 are the eigenvalues of J. Hence, for κ1 > 0 (which we assume throughout this work), all eigenstates are linearly unstable. Moreover, for κ2 > κ1 we expect small oscillation amplitudes which remain close to the ﬁxed point even if the coupling λ j j is comparable to the i-
ntrinsic frequency ω0. Consequently, the dynamics of the oscillator lattice (after relaxation) may be
well approximated by a superposition of eigenvectors,

αlin(t ) =

c(l )α(l )e−i[ω0+μ(l)]t ,

(6)

l

023021-2

TOPOLOGICAL SYNCHRONIZATION OF QUANTUM VAN …

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

where μ(l) and α(l) are the eigenvalues and their respective eigenvectors of Htop/h¯, and c(l) denotes scalar coefﬁcients. This may suggest that the system dynamics is fully described
in terms of the linear model and thus by Eq. (4). However,
our results—discussed in Sec. IV—indicate that such a simple
picture is not sufﬁcient to capture the full dynamical evolution
of the system in the presence of dissipation and nonlinearities.

α (0) = j |0 j 0 j| which results in an initial covariance matrix of diagonal form, i.e., C(0) = 1/2 × 1, which reﬂects the Heisenberg uncertainty principle. Note, that the timedependency of B(t ) and D(t ) arises from the time-dependent mean-ﬁeld amplitudes α j (t ) (see also see Appendix B), such that Eqs. (3) and (10) are also solved simultaneously as mentioned previously.

B. Quantum ﬂuctuations

Solving the full open quantum system given by Eqs. (1) and

(2) is a nontrivial task due to the large number of interacting

oscillators and the involved nonlinearities in the dissipators.

To gain further insight, we follow a similar derivation to the

ones found in Refs. [11,41]: We move to a displaced frame via

the displacement operator

⎧

⎫

⎨

⎬

D[α(t )] = exp ⎩ [α j (t )a j − α∗j (t )a†j ]⎭

(7)

j

and deﬁne the density matrix in the displaced frame as α (t ) = D†[α(t )] (t )D[α(t )]. Interestingly, the terms linear in
the operators a j and a†j vanish as long as Eq. (3) is fulﬁlled, such that we are left with terms quadratic and cubic in the
operators; see Appendix A for details. By neglecting terms of order O(a3j ), we obtain an effective master equation of Lindblad form,

˙α

(t

)

=

−

i h¯

[Hα

(t

),

α (t )]

+ {κ1D[a†j ] α (t ) + 4κ2|α j (t )|2D[a j] α (t )}, (8)
j

with effective, time-dependent (squeezing) Hamiltonian

Hα (t )

=

H

−

ih¯ κ2 2

[α j (t )]2(a†j )2 − [α∗j (t )]2a2j . (9)

j

Note, that the full dynamics of the system is now determined

by Eq. (8) in combination with Eq. (3) because the time-

dependent mean-ﬁeld amplitudes α j (t ) appear in the effective

Hamiltonian (9) and the time-dependent dissipation rates.

Hence, in general both equations have to be solved simulta-

neously. However, as Eq. (3) is independent of the dynamics

of the density matrix α (t ), the mean-ﬁeld dynamics may be

solved ﬁrst and treated as time-dependent inputs for Eq. (8). In

Appendix C, we compare this effective model to the full quan-

tum model described by Eq. (2) for a single and two coupled

quantum vdP oscillators in terms of Wigner functions.

As the Hamiltonian (9) is quadratic, the dynamics of the

effective quantum model is fully described by the covari-

ance tures

matrix Cmn(t ) X2 j−1 = (a j +

= a†j

Tr√[ α )/ 2

(t ){Xm , and X2 j

X=n}−/2i(]awj −itha†tjh)/e√qu2a. dTrhae-

equation of motion of the covariance matrix C(t ) is given by

[42]

C˙ (t ) = B(t ) C(t ) + C(t ) B (t ) + D(t ),

(10)

where B(t ) and D(t ) are determined from Eq. (8); see Ap-
pendix B. Throughout this work, we consider a pure coherent state as the initial state (0) = j |α j (0) α j (0)|. In the comoving frame, such an initial condition corresponds to

C. Synchronization in classical and quantum systems

Synchronization of classical oscillatory systems can take many different forms. A primary example often discussed is the case of two strongly nonlinear systems which oscillate with different natural frequencies, and that adjust their rhythm due to a mutual weak coupling referred to as frequency synchronization. Additionally, the two oscillators may also synchronize their phases such they oscillate in-phase (or antiphase). In the case of weak coupling, one can show that only phases rather than ampl-
itudes of oscillators are relevant (see e.g. [43]). Conversely, a relatively strong coupling between two oscillators can affect not only their phases but also their amplitudes, and the features of synchronization in the presence of strong interactions are nonuniversal [4]. For example, on a ﬁnite lattice even if all oscillators are identical and they only interact locally with their nearest neighbors, synchronicity across the lattice is not guaranteed; examples will be discussed later in Sec. IV.
In this work, we are concerned to what extent topological lattices and, in particular, edge states affect the synchronicity of self-oscillatory systems. As the lattices studied here host edge states that are zero dimensional, the corresponding oscillators are located at the boundaries and only interact via many bulk oscillators. If these bulk oscillators are neither frequency nor phase synchronized, then one may not expect that the oscillators are able to synchronize their phases. However, they mi-
ght still be able to oscillate with a common frequency. Thus, throughout this work we will refer to two classical systems j and j being synchronized if the condition

d dt

ϕjj

=

d dt

(ϕ j

−

ϕj

)

=

0,

(11)

is fulﬁlled. Note, that if this conditions is fulﬁlled for all j and j , the whole lattice oscillates with a single common frequency which is expected to be an eigenfrequency of the lattice (i.e., ω0 + μ(l); see Sec. III A) because of the weakly nonlinear regime.
Generalizing the previously introduced notion of synchronization to the quantum regime is challenging as phase space trajectories become ill deﬁned concepts. To overcome this challenge, synchronization measures in terms of the HusimiQ or Wigner phase space distributions [7,13,44], explicit limit cycles of system observables [45,46], or informationtheoretical measures [47,48] have been proposed. In this work, we use a measure to quantify synchronization of two quantum systems j and j that is based -
on their dimensionless quadratures as [49]

Sc( j, j ) = (X2 j−1 − X2 j −1 )2 + (X2 j − X2 j )2 −1 1, (12)

where

X2 j−1

=

(a j

+

a†j

√ )/ 2

and

X2 j

=

−i(a j

−

a†j

√ )/ 2.

The upper bound of the quantum synchronization measure

023021-3

WÄCHTLER AND PLATERO

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

arises from the Heisenberg uncertainty principle. The synchronization measure Sc( j, j ), also referred to as “complete synchronization measure” [49], extends the classical con-
cept of “error” into the quantum domain, i.e., the smaller
the variance of the quadrature differences is, the larger is the synchronization measure Sc( j, j ). It thus indicates how equivalent the dynamics of two quantum systems are, which in
turn connects to the classical notion of two systems oscillating with the same frequency in-phase or antiphase. Here, Sc( j, j ) would take on its maximum value; see also Appendix C.
As Sc( j, j ) may exhibit oscillations even in the long time limit, we perform time averages of this quantity, i.e.,

1

tf

Sc( j, j ) = tf − ti ti Sc( j, j )dt .

(13)

with initial time ti and ﬁnal time t f . Throughout this work we are interested in the (periodic) steady-state dynamics and discard transient dynamics, such that both ti and t f are taken to be larger than the transient relaxation time (see Sec. IV A).

IV. RESULTS

A. Preliminary remarks

Before we turn to the detailed analysis of two speciﬁc

topological lattices in the next two sections, we will provide

some general notions that will apply to both examples to

minimize redundancies. Within each section, α(l) indicates an

eigenstate with eigenvalue h¯μ(l) of the respective topological

(coupling) Hamiltonian, i.e., HSSH in example I and HKag in

example II. Furthermore, the mean-ﬁeld amplitude of lattice

site j is denoted by A j (t ) and deﬁned via A j (t ) = [α j (t ) + α∗j (t )]/2, which is proportional to the averaged position of each oscillator. Throughout, when random initial conditions

are considered, we mean randomly distributed complex am-

plitudes and phases, i.e., a j (t = 0) = αrj exp (iϕrj ) where αrj

and ϕrj are random variables chosen from the uniform dis-

tributions

αrj

∼ U (0, 0.5)

and

ϕ

r j

∼ U (0, 2π ),

respectively.

Similarly, when random disorder with strength r is applied

to the coupling between lattice sites j and j we refer to
λ j j → λ j j + δλrj j with δλrj j ∼ U (−r, r). Last, all numerical results shown are obtained after a signiﬁcant relaxation time

ω0trel = 2 × 104 to discard transient effects.

B. Example I: One-dimensional SSH chain
1. The SSH model
In the following we investigate the interplay of topology and synchronization in the paradigmatic SSH model [50,51], a one-dimensional dimerized lattice with staggered nearestneighbor hopping and time reversal, particle-hole and chiral symmetry (BDI class). Recently, implementations of this model under nonequilibrium conditions or in strongly nonlinear systems have been proposed [52–56] and experimentally realized [57–62]. The Hamiltonian of the model is given by

HSSH = h¯ λ j (a†j a j+1 + a†j+1a j ),

(14)

j

where λ j = λ1 if j is odd and λ j = λ2 otherwise. The spectrum of the Hamiltonian (14) is symmetric with respect to the

zero-energy axis (E = 0) as a result of the chiral symmetry present in the system. A phase transition of topological nature separates the trivial phase (λ1 > λ2) from the topological phase (λ1 < λ2). In Fig. 1(a) we show the eigenspectrum of HSSH for N = 20 lattice sites as a function of δλ, where λ1 = λ0 − δλ and λ2 = λ0 + δλ. For the chain with ﬁnite length, eigenvectors within the bands are delocalized along the whole
chain; examples are shown in Fig. 1(a) and in the left panels
of Figs. 1(b)–1(e).
In addition, two degenerate zero-energy states occur within the band gap in the topological phase (δλ > 0), which are highly localized at the boundaries of the system [Fig. 1(a)].
The edge states are topologically protected by the chiral sym-
metry and are thus robust against (symmetry-preserving) local
perturbations as we discuss in more detail below.

2. Topological effects on synchronization at the mean-ﬁeld level

To incorporate the topological character of the SSH model

into the network of vdP oscillators, the coupling matrix Htop in Eq. (3) is chosen to be HSSH. In the following we compare the numerical results to our previous analytic considerations.

In the right panels of Figs. 1(b)–1(e) we show the amplitude

dynamics A j (t ) of the oscillator at site j when an eigenstate α(l) of HSSH is chosen as initial state, shown in the left panels
of Figs. 1(b)–1(e).

We start our discussion in the trivial phase (δλ < 0). In

Figs. 1(b) and 1(c), we observe complete synchronization,

i.e., all lattice sites j oscillate with the same frequency ω0 + μ(l). This frequency is determined by the choice of initial

eigenstate α(l) with respective eigenvalue h¯μ(l). Hence, the

oscillation frequency in Fig. 1(b) [Fig. 1(c)] is larger (smaller)

compared to the intrinsic frequency ω0 of the uncoupled vdP oscillators as μ(l) > 0 (<0). Furthermore, the amplitude of the

initial

state

α

(l j

)

directly

translates

to

the

oscillation

amplitudes

A j (t ) and their phases. Thus, in accordance to our previous an-

alytic considerations, the dynamics in the trivial phase is given

by α(t ) = cα(l) exp{−i[ω0 + μ(l)]t } with a scaling factor c. For δλ > 0, however, nontrivial topological effects on the

dynamics of the lattice emerge as shown in Figs. 1(d) and

1(e): Even though the initial bulk eigenstate (shown in the

left panels) exhibits only small amplitudes at the edges ( j =

1 and j = 20) their oscillation amplitudes (highlighted in

blue/pink) are comparable to the largest amplitudes in the

whole chain. Moreover, they oscillate with the intrinsic fre-

quency ω0 (the vertical dashed lines are located at integer multiples of ω0t = 4π n, n ∈ N). In comparison to the trivial

phase, where small initial amplitudes remain small for all

lattice site, the edge modes in the topological phase are always

excited. Note that the edge states are not strictly localized at

the two boundary lattice sites, but rather extend exponentially

into the bulk. Consequently, the dynamics of bulk oscillators

close to the edge, e.g., j = 3 or j = 18, is a superposition of

the initial state and the edge state with different frequencies.

Thus, the dynamics of these oscillators is given by α j (t ) ∝

α(jl) exp{−i[ω0 + μ(l)]t } + αejdge exp(−iω0t ),

where

α

(l j

)

and

αejdge represent the initial and edge eigenstate, respectively.

Since it might be difﬁcult in an experimental setup to

initiate the system in a speciﬁc eigenstate α(l) of HSSH, the

question arises how a randomly distributed initial state affects

023021-4

TOPOLOGICAL SYNCHRONIZATION OF QUANTUM VAN …

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

FIG. 1. (a) Eigenspectrum of HSSH (or equivalently HSSH) for N = 20 with λ1 = λ0 − δλ and λ2 = λ0 + δλ, where the gray region marks the topological phase (λ2 > λ1). The top two lattices show examples of a delocalized bulk state (top) and a highly localized edge state (bottom) for δλ/λ0 = 0.8. (b–e) Left panels show the amplitudes α(jl) of the eigenvectors corresponding to the eigenvalues h¯μ(l) marked by the blue arrows of the eigenspectrum (a), speciﬁcally (b) μ(l) = 0.94λ0 for δλ/λ0 = −0.4, (c) -
μ(l) = −1.89λ0 for δλ/λ0 = −0.8, (d) μ(l) = 1.23λ0 for δλ/λ0 = 0.6, and (e) μ(l) = −1.87λ0 for δλ/λ0 = 0.8. These eigenstates are the initial states for the mean-ﬁeld dynamics of the vdP network.
The amplitude dynamics A j (t ) of each oscillator j is shown in the right panels after the relaxation time ω0trel. In the nontrivial topological phase (d, e) the two oscillators located at the edges ( j = 1 and j = 20) are highlighted in blue/pink. Parameters: κ1 = 5 × 10−3ω0, κ2 = 2κ1,
λ0 = 0.25ω0.

the dynamics and whether the previously discussed zeroenergy edge mode synchronization persists in such a scenario. To this end, we show in the left panels of Figs. 2(a)–2(d) the amplitude dynamics A j (t ) for such random initial states. In the trivial phase shown in panels (a) and (b) there is no clear pattern of synchronization. We note that some oscillators in Figs. 2(a) and 2(b) might be synchronized for short times, however, their phase difference is not constant over longer times.

To conﬁrm our intuition that there are many frequencies participating in the dynamics of the vdP network, we perform a discrete Fourier transform and show the frequency spectrum in the right panels of Figs. 2(a) and 2(b). As expected there are multiple peaks centered around ω0 and separated by a gap. These peaks correspond to the eigenfrequencies ω0 + μ(l) of the system.
In the topological phase shown in Figs. 2(c) and 2(d) the oscillator dynamics (left panels) is similar to the one

FIG. 2. (a–d) Left panels show the amplitude dynamics A j (t ) of each oscillator j of the vdP network after the relaxation time ω0trel for random initial conditions for different couplings (a) δλ = −0.8λ0, (b) δλ = −0.4λ0, (c) δλ = 0.4λ0, and (d) δλ = 0.6λ0 [also marked with blue arrows in panel (e)]. The two oscillators located at the edges ( j = 1 and j = 20) are highlighted in blue/pink in panels (c, d). Right panels show the frequency spectrum obtained from a discrete Fourier transform of the-
 dynamics of the left panels. (e) Reconstruction of the eigenspectrum of H0 + HSSH (or equivalently H0 + HSSH) from the oscillation dynamics averaged over 10 realizations of random initial conditions. Parameters: κ1 = 5 × 10−3ω0, κ2 = 2κ1, λ0 = 0.25ω0.
023021-5

WÄCHTLER AND PLATERO

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

FIG. 3. Frequency spectrum of the vdP network for δλ = 0.8λ0 obtained via discrete Fourier transformation as a function of the disorder strength r. While the band frequencies are strongly affected by the disorder, the edge modes located at ω = ω0 are robust, even for large amounts of disorder. Parameters: κ1 = 5 × 10−3ω0, κ2 = 2κ1, λ0 = 0.25ω0, 10 realizations of random initial states for each value of r.
described previously for the trivial phase. However, there is an important difference: The edges (highlighted in blue/pink) do not exhibit frequency mixing but oscillate with one speciﬁc frequency, the intrinsic frequency ω0. Hence, the edges are synchronized with one another, yet due to the random initial conditions with a phase shift difference (e.g., different amplitudes at the dashed lines for j = 1 and j = 20). However, this phase difference remains constant over time. In the frequency spectr-
um of the discrete Fourier analysis, we observe now an additional sharp peak at ω = ω0 conﬁrming the existence of the synchronized edge modes.
In terms of the discrete Fourier analysis we are able to analyze the full spectrum of the coupling matrix HSSH for random initial conditions. In Fig. 2(e) we show the result of the frequency spectrum averaged over 10 realizations of random initial conditions as a function of δλ. Remarkably, the spectrum is identical to the eigenspectrum of HSSH, which conﬁrms that the synchronized edge modes are only present in the topological phase (δλ > 0).
One of the hallmarks of topological insulators is that they exhibit extremely robust surface states since no local perturbation can change their global topology. For the SSH model the robustness arises from an underlying chiral symmetry. To test whether this extraordinary feature is also present in our open nonlinear system of vdP oscillators, we apply random disorder to the couplings between neighboring sites [cf. Eq. (14)]. In Fig. 3 we show the frequency spectrum of the discrete Fourier analysi-
s for the coupling δλ = 0.8t0 as a function of the disorder strength r for 10 realizations. While the frequencies within the upper and lower band spread over a wide range as the disorder strength is increased, the edge mode persists even for disorders as large as r = 1.5λ0 before the bands start overlapping with the zero energy mode.
3. Quantum signatures of topological synchronization
In the previous section the focus has been the effects of topology on the mean-ﬁeld dynamics. Thus, the observed

signatures are classical in nature even though the underlying model is quantum. By contrast, in this section we analyze the quantum ﬂuctuations about the mean-ﬁeld amplitudes and investigate whether a similar interplay of topology and synchronization carries on beyond the mean-ﬁeld level. To this end, we use the measure Sc( j, j ) [cf. Eq. (13)] to quantify quantum synchronization between two lattice sites j and j . For the effective quantum model [cf. Eqs. (8) and (9)] this measure can be calcula-
ted via the covariance matrix C and we use throughout this section the mean-ﬁeld amplitudes after relaxation as initial conditions. We focus here on the case of random initial conditions, that is the quantum ﬂuctuations corresponding to the mean-ﬁeld dynamics shown in Figs. 2(a)–2(d). In this way we are able to highlight the topological signatures while keeping the discussion precise. Furthermore, as we show in Appendix D, the signiﬁcant results that occur for random initial conditions also carry -
on if eigenstates α(l) are chosen as initial conditions (similar as to the topological effects observed in the mean-ﬁeld dynamics).
In Figs. 4(a)–4(d) we show the time-averaged quantum synchronization measure Sc( j, j ) for different couplings strengths (a) δλ = −0.8λ0, (b) δλ = −0.4λ0, (c) δλ = 0.4λ0, and (d) δλ = 0.6λ0. A large value of Sc( j, j ) indicates the existence of quantum synchronization while a small value indicates the lack thereof. In the trivial phase shown in Figs. 4(a) and 4(b), the synchronization measure is almost uniform with only slight modulations. As there is no synchronization of the mean-ﬁeld amplitud-
es for random initial conditions [cf. Figs. 2(a) and 2(b)], this result is not too surprising.
A very different scenario is observed for the boundaries of the chain in the topological phase shown in Figs. 4(c) and 4(d): While for two oscillators in the bulk, Sc( j, j ) remains similar to the previous trivial phase, the measure is signiﬁcantly increased between the two edge oscillators j = 1 and j = 20 (right bottom corner). Hence, the topological synchronization observed for the mean-ﬁeld amplitudes [cf. Figs. 2(c) and 2(d)] persists even for the effective quantum model and is therefore not-
 a purely classical effect. Note that the quantity is upper bounded by 1 due to the Heisenberg uncertainty principle [cf. Eq. (12)]. Furthermore, signiﬁcant synchronization can be observed for the oscillators j = 1 and j = 3 as well as j = 18 and j = 20 resulting from the exponential localization of the edge modes at the boundary of the chain.
Finally, we test the robustness of the edge state synchronization when quantum ﬂuctuations are included. In Fig. 4(e) we show S¯c( j, j ) between the two boundary oscillators ( j = 1 and j = 20) in the topological phase with coupling δλ = 0.8λ0 as a function of the disorder strength r. Here, the overbar denotes that the quantity is averaged over 100 realizations of disorder. Similar as to the results of the mean-ﬁeld dynamics, also the quantum synchronization of the edges is robust for large amoun-
ts of disorder.
C. Example II: Two-dimensional breathing Kagome lattice
1. Edge and corner states in the breathing Kagome lattice
As many fascinating topological effects occur in dimensions higher than one, we also investigate an example of a two-dimensional system. We consider here the breathing

023021-6

TOPOLOGICAL SYNCHRONIZATION OF QUANTUM VAN …

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

FIG. 4. Time-averaged quantum synchronization measure Sc between lattice site j and j of the vdP network corresponding to the mean-ﬁeld dynamics shown in Fig. 2, i.e., with random initial conditions and for different coupling strength (a) δλ = −0.8λ0, (b) δλ = −0.4λ0, (c) δλ = 0.4λ0, and (d) δλ = 0.6λ0. While in the trivial phase [panels (a) and (b)] there is no remarkable synchronization between any two
lattice sites, in the topological phase the oscillators located at the edges exhibit signiﬁcantly larger values of synchronization. (e) Quantum synchronization measure S¯c( j, j ) between the two edges of j = 1 and j = 20 in the topological phase (δλ = 0.8λ0) as a function of the
disorder strength r and averaged over 100 realizations of disorder. The edge state quantum synchronization is topologically protected and robust even for large amounts of disorder. Parameters: κ1 = 5 · 10−3ω0, κ2 = 2κ1, λ0 = 0.25ω0, ω0ti = 2 × 104, ω0t f = 2.4 × 104.

Kagome lattice [63–66], which is a natural extension of the SSH chain and a paradigmatic model of a so-called higher-order topological insulator (TI) [67]: While an ordinary d-dimensional TI, such as the SSH chain, exhibits d − 1-dimensional topological edge states, in a higher-order TI d − n-dimensional topological boundary states emerge with n > 1 and the d − 1-dimensional topological edge states are absent. The reason for this peculiar phenomenon is that the boundary of a higher-order TI itself-
 represents an ordinary TI. For the breathing Kagome lattice with a generalized chiral, time-reversal, and particle-hole symmetry (BDI class), the boundary states are zero-dimensional corner states in the topological phase [68]. Recently, their robustness has been discussed and it has been realized that they are pinned robustly to zero only if the perturbations respect the generalized chiral and crystalline symmetries and the lattice connectivity [69,70]. This is the case considered in this work.
The tight-binding Hamiltonian of the lattice is given by

HKag = h¯λ1

ai†a j + h¯λ2

ai†a j ,

i, j ∈

i, j ∈∇

(15)

where the two sums are over neighboring sites in the upward
and downward triangles, respectively; see Fig. 5(a). Throughout we assume λ1 0 and λ2 > 0 as we are only interested in the transition from trivial (λ1/λ2 < −1) to topological insulator phase (λ1/λ2 > −1). For λ1/λ2 > 0 there exists another phase transition to a metallic phase at λ1/λ2 = 1/2 [63], however, we do not consider this transition in the present work.
In Fig. 5(a) we show the energy spectrum of the breathing
Kagome lattice containing 15 upward triangles as a function of λ1, i.e., the coupling within upward triangles. Above and below the spectrum, exemplary eigenstates of the different bands and the band gap are shown for the parameter λ1/λ2 = −0.1, i.e., the topological phase: The top band contains only strict bulk states which have (almost) no overlap with the
boundary of the lattice as shown in the top left. The bottom
band, however, contains states delocalized over the lattice as
shown in the bottom right lattice. In contrast, the middle band
contains edge states which are localized at the boundary of
the lattice as shown in the top right ﬁgure. Last, the band
gap located at zero energy consists of three degenerate states

exponentially localized at the corners of the lattice, see the left bottom lattice. The latter are protected by the generalized chiral symmetry.

2. Topological effects on synchronization at the mean-ﬁeld level
In the following we investigate the mean-ﬁeld dynamics of the vdP network in the breathing Kagome lattice. To this end, the matrix governing the system dynamics without dissipation in Eq. (3) is given by

H = h¯ω01 + HKag,

(16)

where HKag denotes the matrix corresponding to the Hamiltonian deﬁned in Eq. (15).
Following our general analytic considerations and the re-
sults of example I, we expect that the oscillatory dynamics is
dominated by the closed system dynamics given by Hamilto-
nian (16). In Figs. 5(b)–5(e) we show the amplitude A j (t ) of each oscillator j as a function of time with eigenstates α(l) as
initial states; shown in the left panels of Figs. 5(b)–5(e). We
start our discussion in the trivial phase shown in Figs. 5(b)
and 5(c), where the total vdP network is synchronized, oscillating with frequency ω0 + μ(l) [a larger frequency in Fig. 5(b) where μ(l) > 0 and a smaller frequency in Fig. 5(c) where μ(l) < 0] and oscillation amplitudes proportional to the chosen initial eigenstate α(l). As in the previous example I the dynamics in the trivial phase is thus given by α(t ) = cα(l) exp{−i[ω + μ(l)]t }.
In Figs. 5(d) and 5(e) we show examples of the dynamics
in the topological phase. If the initial eigenstate is com-
pletely delocalized across the lattice [cf. Fig. 5(e)], then the
oscillator dynamics follows the same principles as discussed
previously, i.e., complete synchronized oscillations with common frequency ω0 + μ(l) except of the three corners (index j = 1, 2, 3), which amplitudes oscillate with the intrinsic frequency ω0. The latter additionally exhibit a temporal amplitude modulation as a result of the ﬁnite amplitude of the initial state at the corners, i.e., A j (t ) = A¯ j cos{[ω0 + μ(l)]t } + A¯corner cos(ω0t ), where A¯ j and A¯corner reﬂect the mixture of the two participating frequencies.
However, if the initial eigenstate is localized at the edges as
shown in Fig. 5(d) we additionally observed excitation of all

023021-7

WÄCHTLER AND PLATERO

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

FIG. 5. (a) Eigenspectrum of the breathing Kagome lattice HKag as a function of λ1 for 5 upward triangles along each edge, i.e., N = 45 lattice sites in total. The gray region indicates the nontrivial phase (λ1/λ2 > −1.0) of the bulk Hamiltonian. The top and bottom lattices show examples of eigenstates for the three bands and the corner states deep in the topological phase λ1/λ2 = −0.1 as indicate by the vertical line. (b–e) Left panels show the amplitude a(jl) of the eigenvectors corresponding to-
 the eigenvalues h¯μ(l) marked by the arrows of the eigenspectrum (a), speciﬁcally (b) μ(l) = 1.7λ2 for λ1 = −1.2λ2, (c) μ(l) = −2.5λ2 for λ1 = −1.3λ2, (d) μ(l) = 1.0λ2 for λ1 = −0.05λ2 (a strict edge state), (e) μ(l) = −1.0λ2 for λ1 = −0.1λ2. These eigenstates are the initial states for the dynamics of A j (t ) of each oscillator j shown in the right panels after the relaxation time ω0trel. The index j of lattices sites is chosen in such a way that j = 1, 2, 3 correspond to the the corners of the
lattice with dynamics shown in pink/blue color scale ( j = 1 top corner, j = 2 left corner, j = 3 right corner), 4 j 11 to the sites along
the left edge with dynamics shown in green/gold color scale, 12 j 19 to the sites along the right edge with dynamics shown in pink/blue
color scale, 20 j 27 to the sites along the bottom edge of the lattice shown green/gold color scale. The remaining indices (28 j 45) with dynamics shown in pink/blue color scale represent bulk oscillators. Parameters: κ1 = 5 × 10−4ω0, κ2 = 10−2ω0, λ2 = 0.25ω0.

bulk lattice oscillating with a common frequency. However, their frequency does not match the corner nor the edge oscillators. Moreover, their amplitude is not constant but exhibits modulations over time. The reason for this effect is that the top band in Fig. 5(a) consists of strict bulk states without participation of any edge or corner lattice sites. Due to the nonlinearity in the dynamics, these strict bulk states may grow, yet, as a superposition of many of those leading to the observed ampli-
tude modulations.
We are now interested whether the topological synchronization with random initial conditions also carries over to the two dimensional model. In Figs. 6(a)–6(d) we show in the left panels the oscillator dynamics A j (t ) as function of time for different coupling strengths with ordering of the oscillators according to Fig. 5. In the corresponding right panels we show the frequency spectrum of the particular realization of oscillator dynamics obtained via discrete Fourier transformation. In the triv-
ial phase shown in Figs. 6(a) and 6(b) clear signatures of synchronization are again missing and the dynamics is governed by a randomly distributed superposition of many eigenstates oscillating with different frequencies. The emergent complex oscillation pattern may exhibit temporal synchronized structures, however, these vanish again over longer times.
By contrast in the topological phase, shown in Figs. 6(c) and 6(d), the dynamics of the network appears more structured and synchronized. The reason for this is that fewer frequencies

are available in the eigenspectrum of HKag, and especially in the speciﬁc realization that there exists a dominant frequency as indicated by the large peak in the frequency spectra (see right panels). However, most notably the oscillators located at the three corners of the lattice ( j = 1, 2, 3) are phase locked [cf. Eq. (11)] and oscillate with the intrinsic frequency ω0. Thus, as in the SSH chain, the topological character of the lattice is reﬂected in the amplitude oscillations even for random-
 initial conditions. This also allows us to reconstruct the full eigenspectrum of the topological coupling matrix HKag via discrete Fourier analysis of oscillator dynamics, which we show in Fig. 6(e) averaged over 10 realizations of initial conditions. The original eigenspectrum of HKag has a highly degenerate eigenvalue spanning diagonally across, which is also observed in the reconstruction of the frequency spectrum as much larger amplitude (blue) than the other eigenvalues (pink).
Last, we test the robustness of the observed corner state synchronization. As the corner states of the breathing Kagome lattice are protected by a generalized chiral symmetry, we expect protection of the corner state synchronization. In Fig. 7 we show the frequency spectrum of the discrete Fourier analysis for the coupling λ1 = −0.05λ2 as a function of the disorder strength r for 10 realizations. The zero-energy corner modes are robust against disorder strengths as large as r = 0.4λ2 before they a-
re affected by the perturbations. In contrary, the bands spread over a wider range as the disorder strength is

023021-8

TOPOLOGICAL SYNCHRONIZATION OF QUANTUM VAN …

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

FIG. 6. (a–d) Left panels show the amplitude dynamics A j (t ) of oscillator j—where we choose an ordering according to Fig. 5 and two color scales to differentiate corner, different edge and bulk lattice sites—in the vdP Kagome network after the relaxation time ω0trel with random initial conditions for different couplings: (a) λ1/λ2 = −1.3, (b) λ1/λ2 = −1.2, (c) λ1/λ2 = −0.1, and (d) λ1/λ2 = −0.05 [also
marked by the blue arrows in panel (e)]. The right panels show the frequency spectrum of the dynamics shown in the left panels obtained via
discrete Fourier analysis. (e) Frequency spectrum H0 + HKag (or equivalently H0 + HKag) obtained from the oscillator dynamics for random initial conditions as function of the upward-triangle coupling λ1, where for each coupling 10 realizations of initial conditions are averaged. Parameters: κ1 = 5 × 10−4ω0, κ2 = 10−2ω0, λ2 = 0.25ω0.

increased. Furthermore, this analysis also shows that the edge states are not topologically protected in the higher-order TI.
3. Quantum signatures of topological synchronization After we have observed in the previous section that topological protected synchronization of the mean-ﬁeld amplitudes also exists for a higher-order TI, we now analyze its quantum ﬂuctuations quantiﬁed in terms of Sc( j, j ) [cf.
FIG. 7. Frequency spectrum of the vdP network for λ1 = −0.05λ2 obtained via discrete Fourier transformation as a function of the disorder strength r. While the band frequencies are strongly affected by the disorder, the corner modes located at ω = ω0 are robust, even for large amounts of disorder. Parameters: κ1 = 5 × 10−4ω0, κ2 = 10−2ω0, λ2 = 0.25ω0, 10 realizations of random initial states for each data value of r.

Eq. (13)] between two lattices sites j and j . Similar as to the case of the SSH model we choose the mean-ﬁeld amplitudes after relaxation as initial conditions and focus on the case of random initial conditions corresponding to the dynamics shown in Figs. 6(a)–6(d).
In Figs. 8(a)–8(d) we show the time-averaged quantum synchronization measure Sc( j, j ) for different couplings strengths (a) λ1/λ2 = −1.3, (b) λ1/λ2 = −1.2, (c) λ1/λ2 = −0.1, and (d) λ1/λ2 = −0.05. The ordering of the lattice sites corresponds to Fig. 6, especially j , j = 1, 2, 3 are the corners of the lattice. We are mostly interested in the latter as they are expected to show quantum signatures of synchronization. In accordance with the classical mean-ﬁeld amplitudes of Figs. 6(a) and 6(b), th-
e synchronization measure is almost uniform in the trivial phase shown in Figs. 8(a) and 8(b).
However, in the topological phase shown in Figs. 8(c) and 8(d) we observe that the oscillators located the corners ( j , j = 1, 2, 3) are signiﬁcantly synchronized with one another as indicated by the large value of Sc( j, j ) at the left bottom corner (highlighted by the pink dashed circle). As a reminder the quantity is bounded by 1 [cf. Eq. (12)]. Moreover, the quantum synchronization measure indicates that all three corner oscillators are synchronized with the edges and parts of the bulk. This-
 feature is also present for the two edges of the SSH model in example I [cf. Fig. 4]. By contrast, for any two bulk oscillators, Sc( j, j ) remains similar to the previous trivial phase.
Finally, we test the topological protection of the corner state synchronization at the quantum level. In Fig. 8(e) we show S¯c( j, j ) between the corners [( j = 1, j = 2), ( j = 1, j = 3) and ( j = 2, j = 3)] in the topological phase (δλ = 0.8λ0) as a function of the disorder strength r. Here, the

023021-9

WÄCHTLER AND PLATERO

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

FIG. 8. Time-averaged quantum complete synchronization measure Sc between lattice site j and j of the vdP Kagome network corresponding to the mean-ﬁeld dynamics shown in Fig. 6, i.e., with random initial conditions and for different coupling strength (a) λ1/λ2 = −1.3, (b) λ1/λ2 = −1.2, (c) λ1/λ2 = −0.1, and (d) λ1/λ2 = −0.05. The ordering of the lattice sites is the same as in Fig. 6 especially j = 1, 2, 3 correspond to the corners of the lattice. While in the trivial phase [panels (a) and (b)] th-
ere is no clear pattern of synchronization
between any two lattice sites, in the topological phase the oscillators located at the corners (encircled in pink) exhibit signiﬁcantly larger values of synchronization. (e) Quantum synchronization measure S¯c( j, j ) between the three corners [( j = 1, j = 2), ( j = 1, j = 3), and ( j = 2, j = 3)] in the topological phase (λ1/λ2 = −0.05) as a function of the disorder strength r and averaged over 100 realizations of disorder. The corner state quantum synchronization is protected and robust even fo-
r large amounts of disorder. Parameters: κ1 = 5 × 10−4ω0, κ2 = 10−2ω0, λ2 = 0.25ω0, ω0ti = 2 × 104, ω0t f = 2.3 × 104.

overbar denotes the average over 100 realizations of disorder. Consistent with the previous observations, also the quantum synchronization of the corners is robust for large amounts of disorder.
V. DISCUSSION
An adequate formulation of topological insulators can be provided within the framework of solid state band theory and it is thus far from obvious whether and how their effects persist if affected by dissipation. Moreover, in the case investigated in this work dissipation represents a necessary resource to drive the system far away from equilibrium. Remarkably, despite the tremendous consequences open system conditions in combination with nonlinearities can have on the system dynamics, our examples-
 show that topological features remain in such a scenario, which allows us to utilize them in our favor.
The observed topological boundary synchronization at the mean-ﬁeld level even if an eigenstate of the topological Hamiltonian is chosen as initial state is rather surprising and represents a key difference to systems without dissipation: In closed system dynamics, an initial eigenstate of the Hamiltonian will persist and will not mix with other eigenstates as they are orthogonal to each other. However, we observe in the nonequilibrium system that in the topological phase the edge oscillators are e-
xcited and their amplitudes grow, even though the initial eigenstate of the system Hamiltonian has very little amplitude at the edges. This may be understood as follows: Deep in the topological phase the oscillators located at the edges/corners are only weakly coupled to the rest of lattice. As their initial amplitude is ﬁnite it serves as a small perturbation away from their unstable ﬁxed points, and since there exist an eigenstate localized at the edges this eigenstate will eventually grow. By c-
ontrast, oscillators in the bulk with small initial amplitudes are prevented from being excited because they require many other bulk oscillators to change their amplitudes accordingly. Interestingly, if the initial eigenstate is highly localized at the boundaries, they also serve as a perturbation for the bulk oscillators such that a combination of many bulk modes may be excited; see Fig. 5(d). We therefore

argue, that the observed topological boundary synchronization at the mean-ﬁeld level is not restricted to the two speciﬁc examples investigated in this work, but also applies to other topological insulator lattices as the topologically protected edge modes are highly localized and all other bulk modes only have a small amplitude at the boundaries. Moreover, the synchronized edge modes inherit the topological protection known from closed systems with remarkable robust dynamics against local (symmet-
ry-preserving) disorder and even random initial conditions. However, disorder in the natural frequencies of the oscillators on the considered lattices will destroy the observed edge synchronization. This is similar to topological insulators under closed system conditions, where the edge states are not robust against perturbations which break the underlying symmetries.
Often when ﬂuctuations are considered synchronization is lost. Our results, however, show signatures of boundary synchronization beyond the classical mean-ﬁeld approximation. Furthermore, it remains unaffected for large amounts of local disorder in the couplings due to the underlying topology, which has the advantage that even if perfect fabrication of the lattice is impossible our ﬁndings can still be observed. This makes our results appealing for experimental realizations, two of which we discus-
s in more detail in the next section.
Last, let us highlight the ability to reconstruct the full eigenspectrum of the underlying topological lattice from the oscillator (mean-ﬁeld) dynamics alone. In our numerical studies with only 10 realizations the full spectra of the (closed) SSH and Kagome lattice could already be obtained. This holds the potential of a new experimental mechanism to measure eigenspectra of a topological systems from the dynamics of a nonlinear system far away from equilibrium and without preparation of an initial-
 state.
VI. EXPERIMENTAL PROPOSAL
There are many possible experimental platforms where topological synchronization may be observed in the mean ﬁeld (classical) as well as the quantum regime. To realize the dynamics of a single vdP oscillator in a quantum system two

023021-10

TOPOLOGICAL SYNCHRONIZATION OF QUANTUM VAN …

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

FIG. 9. Potential experimental realizations of topologically coupled vdP oscillators. (a) and (b) Trapped ions implementation: (a) Level scheme for an ion with trap frequency ω0. By exciting the blue sideband of the transition |g → |e negative damping may be realized (blue arrow). Simultaneously driving the double red sideband transition |g → |e allows one to realize the nonlinear damping (pink arrow). (b) Two modes may be coupled via offresonant excitation of blue sidebands of |g → |e or |g → |e -
, which realizes the alternating couplings between nearest neighbors. (c) Optomechanical implementation: The so-called ‘membrane in the middle’-setup allows to realize a vdP oscillator with nonlinear damping via a laser detuned to the red two-phonon sideband and negative damping by a laser on the blue one-phonon sideband. Mechanical coupling with alternating distances then allows to implement the topological lattice interactions.
different implementations have been suggested: The ﬁrst one uses trapped ions [7,9] as an experimental platform while the second one focuses on optomechanics [9,10]. Both of these proposals bear the potential of vdP oscillator networks and thus to observe the previously discussed topological synchronization phenomena. Therefore, we summarize both of them and discuss their extensions toward topological lattices.
A motional mode of a trapped ion in the Lamb-Dicke regime and when the trapping potentials are tight with ground state |g and excited state |e is represented as an harmonic oscillator with frequency ω0. To fulﬁll the required conditions, i.e., negative and nonlinear damping, two side bands are excited simultaneously [71]: The ﬁrst laser drives the transition |g → |e but blue detuned by ω0 which absorbs one phonon after subsequent decay to the ground state [see Fig. 9(a)]. The second laser is doubl-
e red detuned by −2ω0 and excites to a state |e such that after relaxation to the ground state two phonons have been emitted. The combination of these two processes approximately implement the dissipators of each oscillator in Eq. (2). Speciﬁc parameters for an implementation with 171Yb+ are provided in Ref. [7] and references therein.
Additionally, the bosonic modes of neighboring trapped ions need to be coupled: By off-resonantly exciting an additional level |e via a blue sideband [see Fig. 9(b)] an effective Hamiltonian H = h¯λ1(a†j a j+1 + a†j+1a j ) for the phonon exchange between oscillator j and j + 1 may be implemented.

Using the same strategy but with an additional level |e leads to a different coupling strength λ2. In this way the alternating interactions necessary for topological effects to emerge may be realized in trapped ion experiments.
Another experimental setup where our proposal could be implemented is provided by optomechanics as sketched in Fig. 9(c): The so-called “membrane-in-the-middle”-setup [72–74] allows to realize two-phonon processes [75] as the cavity mode is parametrically modulated by the squared position of a movable membrane. The Hamiltonian of a single mechanical membrane inside a cavity driven on the red twophonon resonance (in the good-cavity limit and focusing on the resonant terms) is given by Hopt = h¯g(a†-
a†b + H.c.) [75]. The dynamics of the coupled system is described by the master equation

˙

=

−

i h¯

[Hopt

,

] + γcD[b]

+ γ (1 + n¯ )D[a]

+ γ n¯D[a†] ,

(17)

where n¯ is the thermal phonon number. The Heisenberg equation of motion for the cavity is b˙ = −igaa − γcb/2. Adiabatically eliminating the optical mode and deﬁning κ2 ≡ g4/γc results in the two-phonon dissipator of Eq. (2). How-
ever, the other two linear dissipators in Eq. (17) are related via

the thermal phonon occupation n¯, such that one-phonon gain

cannot be larger than the one-phonon loss. Therefore, another

laser driving the cavity on the blue one-phonon sideband is

needed [9,10]. Nevertheless, compared to Eq. (2) an additional

one-phonon loss term γ (1 + n¯ )D[a] is present. If we assume

γ (1 + n¯ ) κ1, then the inﬂuence of this additional term can be completely neglected at the mean-ﬁeld level as it only

results in an effective damping rate κ˜1 = κ1 − γ (1 + n¯ ). Also our results in the quantum regime remain unchanged if one

would include such a linear loss channel (see Appendix E).

When two membranes share a common support they are

mλ˜ jexcjhxaj+n1icwalhlyerecoxuj p=led√he¯x/p2rmeωss0e(da†jv+ia

the Hamiltonian a j ) with oscillator

H= mass

m. After the rotating-wave approximation and with the deﬁni-

tion λ j = 2mω0λ˜ j, the Hamiltonian becomes equivalent to the

coupling Hamiltonian (1). The interaction strengths between

two oscillators may be modiﬁed by altering the distance be-

tween neighboring membranes; see Fig. 9(c) for an example

of the SSH model with staggered distances d1 and d2. Thus, also optomechanics has the potential to observe topologically

protected synchronization in a network of quantum vdP oscil-

lators.

VII. CONCLUSIONS
We investigate the interplay of topology and synchronization in a network of coupled quantum van der Pol oscillators simulating different topological insulator lattices. We show via a linear stability analysis that the dynamics of the resulting topological lattice of oscillators at the mean-ﬁeld level is governed by the eigenvalues of the topological Hamiltonian and thus reﬂects the features of the underlying topology even though the system is highly nonlinear and far away from equilibrium. Furthe-
rmore, we derive an effective quantum model which takes quadratic quantum ﬂuctuations about the classical trajectories into account to investigate quantum signatures of topological synchronization beyond the mean-ﬁeld

023021-11

WÄCHTLER AND PLATERO

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

approximation. For two speciﬁc examples of topological insulator models in one and two dimensions we demonstrate that in the nontrivial phase, synchronization at the boundaries is always present independent of initial conditions, and that it inherits the protection against perturbations from the underlying lattice structure. In terms of a Fourier analysis of the oscillations, we are able to reconstruct the full topological eigenspectrum of the system, which not only represents a possible route to -
observe topological synchronization of boundary modes experimentally, e.g., in trapped ions or optomechanics, but an additional opportunity to measure topological eigenspectra solely from the dynamics of a highly nonlinear and open system.
Researchers and engineers make great efforts to fabricate dynamical systems which are nearly identical to facilitate the emergence of synchronized collective behavior in large networks. However, our work demonstrates a general advantage of topological lattices in the design of potential experiments and devices as fabrication errors and longterm degradation are circumvented in this way. This is especially important in networks where speciﬁc nodes need special protection. While the examples investig-
ated in this work posses zero dimensional protected boundary states, our work can easily be extended to host higher dimensional topologically protected states for additional robust network nodes. Synchronization is desirable in situations where high oscillating power, strong coherence, or low phase noise are needed, such as lasers [76], phase-locked loops [77], Josephson junction arrays [78,79], spin-torque resonators [80], quantum heat engines [81], or power grids [82]. Even today, the originally-
 observed phenomenon of clock synchronization remains a crucial application for modern communication networks [83,84] and has recently been extended to quantum networks and quantum key distribution protocols [85,86]. All of these examples require the synchronized behavior to be robust to fulﬁll their desired purpose and will beneﬁt from the application of topology. Given the universality of the concept of combining nonlinear dynamics in open quantum systems with topological phases of matter, we ex-
pect that our approach could be successfully applied also to other systems where robust dynamics is crucial.
ACKNOWLEDGMENTS
We thank M. T. Eiles and W. Munro for invigorating discussions and for insightful comments on the

manuscript. C.W.W. acknowledges support from the MaxPlanck Gesellschaft via the MPI-PKS Next Step fellowship and is ﬁnancially supported by the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation)—Project No. 496502542 (WA 5170/1-1). G.P. acknowledges support from the Spanish Ministry of Science and Innovation through the Grant No. PID2020-117787GB-100 and from the CSIC Research Platform on Quantum Technologies PTI-001.

APPENDIX A: DERIVATION OF THE EFFECTIVE QUANTUM MODEL IN THE COMOVING FRAME
In this section we derive the effective master Eq. (8) of the main manuscript governing the dynamics of quantum ﬂuctuations, which follows the derivations found in Refs. [11,41]. Our starting point is the master equation (throughout this section we h¯ ≡ 1)

˙ = −i[HS, ] +

κ1D[a†j ] + κ2D a2j ,

j

(A1)

with HS = ω0 j a†j a j + Htop. The density matrix in the displaced frame is deﬁned in terms of the displacement operator α (t ) = D†[α(t )] (t )D[α(t )] with corresponding master
equation:

˙ α = −i[H˜S, α] + L1 α + L2 α,

(A2)

where the transformed system Hamiltonian is given by

H˜S = D†[α(t )](HS − i∂t )D[α(t )],

(A3)

and the two dissipators by

L1 α = κ1 D†[α(t )]D[a†j ] D[α(t )],
j
L2 α = κ2 D†[α(t )]D a2j D[α(t )].
j

(A4)

We now evaluate the effect of applying the displacement
operator on the different terms appearing in Eq. (A2). For transformed Hamiltonian H˜S we obtain

H˜S = ω0 D†[α(t )]a†j a jD[α(t )] + D†[α(t )]HtopD[α(t )] − iD†[α(t )]∂t D[α(t )]
j

= HS + Htop + ω0

(α ja†j + α∗j a j + |a j|2 ) +

{λ j j (α∗j a j

+ α j a†j + α∗j a j ) + λ∗j j (α∗j a j + α j a†j

+

α

∗ j

a

j

)}

j

jj

−i

α˙ j

a†j

+

1 2

α∗j

− α˙ ∗j

aj

+

1 2

α

j

.

j

For the dissipative term proportional to κ1 we obtain

L1 α = κ1 D†[α(t )]D[a†j ] D[α(t )] = κ1

D[α†j ]

α

−

i

1 2

[iα j a†j

−

iα∗j a j ,

α]

,

j

j

023021-12

(A5) (A6)

TOPOLOGICAL SYNCHRONIZATION OF QUANTUM VAN …

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

and for the dissipative term proportional to κ2 we obtain

L1 α = κ2 D† α(t ) D a2j D[α(t )]
j

= κ2
j

D a2j

α + 4|α j|2D[a j]

α

+

2α

∗ j

a2j

α a†j

−

1 2

a2j a†j

α

−

1 2

αa2j a†j

+2α j

aj

α (a†j )2

−

1 2

a

j

(a†j

)2

α

−

1 2

αa j (a†j )2

+1 2

(α∗j )2a2j − α2j (α†j )2,

α

+ |α j|2[α∗j a j − α j a†j ,

α]

= κ2
j

4|α j|2D[a j]

α

−

i

1 2

i(α∗j )2a2j − iα2j (α†j )2,

α

− i|α j|2[iα∗j a j − iα ja†j ,

α]

+ O a3j .

(A7)

We now realize that as long as condition (3), i.e., the meanﬁeld equation, is satisﬁed, the linear terms vanish. If we neglect higher-order terms, then the quantum ﬂuctuations are governed by master equation of Lindblad form:

˙ α = −i[Hα, α] + {κ1D[a†j ] α + 4κ2|α j|2D[α j] α},

j
(A8)

with effective Hamiltonian

Hα

=

HS

−

i κ2 2

α2j a†j a†j − (α∗j )2a j a j .

j

(A9)

APPENDIX B: SPECIFIC FORM OF THE EQUATION GOVERNING THE COVARIANCE MATRIX

In this section we specify the entries of the matrices B and D governing the equation of motion of the covariance matrix C:

C˙ = B C + C B + D.

(B1)

The entries of the matrices are given through Eq. (8). Specifically, B is a block matrix, where the blocks on the diagonal B j j take the form

Bjj

=

1 2

κ1 − 4κ2

αj

2 − κ2

(α∗j

)2

+

α

2 j

+2ω − iκ2

(α∗j )2

−

α

2 j

−2ω − iκ2 (α∗j )2 − α2j κ1 − 4κ2 α j 2 + κ2 (α∗j )2 + α2j

,

(B2)

and the off-diagonal block matrices B jk for j = k the form

Bjj = λjj

0 −1

1 0

.

(B3)

Furthermore, D is a diagonal block matrix with entries D j j on the diagonal given by

Djj

=

1 2

(κ1

+ 4κ2

αj

2)

1 0

0 1

.

(B4)

APPENDIX C: COMPARISON OF THE FULL DYNAMICS WITH THE EFFECTIVE MODEL
In this section we provide a comparison of the full quantum dynamics given by Eqs. (1) and (2), and the effective model described by Eqs. (8) and (9) for a single vdP oscillator and two coupled vdP oscillators in terms of Wigner representations and the synchronization measure deﬁned in Eq. (13).

1. Single vdP oscillator

For a single vdP oscillator the dynamics is given by

˙

=

−

i h¯

ω0[a†

a,

] + κ1D[a†]

+ κ2D[a2] .

(C1)

Its steady state is deﬁned via ˙ss = 0 and can be easily found numerically. The Wigner function W (α, α∗) is a convenient way to visualize and compare the full quantum dynamics with

the effective model derived in Appendix A [7]. It represents a

quasi-probability distribution in the space of coherent states.

In Fig. 10(a) we show the Wigner function corresponding to

the steady state of a single vdP oscillator deﬁned via Eq. (C1),

which displays the typical donutlike shape expected for self-

oscillating limit cycle

(quantum) with radius

sAy¯ s=tem√sκ.1W/2eκ2al[scof.sSheocw.

the mean-ﬁeld III A], which is

however smaller than the maximum of the distribution.

The effective model is given by the Lindblad master equa-

tion

˙α

(t

)

=

−

i h¯

[Hα (t

),

α (t )]

(C2)

+ κ1D[a†] α (t ) + 4κ2|α(t )|2D[a] α (t ),

with time-dependent Hamiltonian

Hα (t

)

=

h¯ ω0 a† a

−

ih¯

κ2 2

{[α(t

)]2 (a† )2

−

[α ∗ (t

)]2a2}.

(C3)

As we are interested in the (periodic) steady-state dynamics,
we may replace the mean-ﬁeld amplitude α(t ) by its respective steady-state dynamics α¯ (t ) = A¯ exp(−iω0t ), where we have chosen the arbitrary phase φ equal to zero (cf. Sec. III A). Furthermore, we choose the initial state α (t = 0) = |0 0|. As the time-dependent mean-ﬁeld amplitude α¯ (t ) is periodic with period T = 2π /ω0, the density matrix α (t ) will eventually also become periodic with the same periodicity. In Figs. 10(b)–10(d) we show the Wigner function W (α, α∗, t )
at different times (after some short transient relaxation) and
in Fig. 10(e) its time average. While at each time of the

023021-13

WÄCHTLER AND PLATERO

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

FIG. 10. Comparison of the exact model given by Eqs. (1) and (2), and the effective model described by Eqs. (3), (8), and (9) for a single vdP oscillator in terms of the Wigner function W (α, α∗). (a) Without approximations the Wigner distribution at steady state has a donut shape
centered at the origin. The corresponding limit cycle of the mean-ﬁeld solution is shown as blue solid line. (b–d) Wigner distribution of the
effective model at different times (after a transient relaxation time), which is displaced by the mean-ﬁeld amplitude. (e) Time-averaged Wigner distribution of the effective model together with the corresponding mean-ﬁeld limit cycle. Parameters: κ1 = 5 × 10−3ω0, κ2 = 2κ1.

period, the Wigner function is squeezed in different directions and displaced by the mean-ﬁeld amplitude (the limit cycle is shown as blue solid line), the time-averaged Wigner function is a symmetric Gaussian distribution centered at the origin. Thus, within the effective model the donut shape of the Wigner distribution of a single vdP oscillator may not be observed because the mean-ﬁeld amplitude is smaller and the quantum ﬂuctuations larger compared to the full dynamics without approximations. -
However, in the next section we will show that the effective model is still capable of capturing the signatures of synchronization of two coupled vdP oscillators.

2. Two coupled vdP oscillators
The full quantum model of two coupled vdP oscillators is given by Eq. (2) with j = 1, 2 and system Hamiltonian

H = h¯ ω0a†j a + h¯λ(a1†a2 + a2†a1 ).
j

(C4)

Following Ref. [7], we characterize the two oscillator system in terms of the two mode Wigner function W (α1, α1∗, α2, α2∗) and integrate |α1|, |α2| and ϕ1 + ϕ2, such that the Wigner function is a function of the phase difference ϕ1 − ϕ2 alone. In Fig. 11 we show the Wigner function W (ϕ1 − ϕ2) − π /2
as function of the phase difference between the two oscillators
without coupling (blue) and with coupling λ = 0.5ω0 (pink).

FIG. 11. Wigner distribution of the phase differences W (ϕ1 − ϕ2) for two coupled vdP oscillators as a function of the phase difference with interaction strengths λ = 0.0ω0 (blue solid) and λ = 0.5ω0
(pink solid) for (a) the exact model and (b) the effective model. Parameters: κ1 = 5 × 10−3ω0, κ2 = 2κ1.

We choose the latter value as it is the largest coupling we consider in the main text. While the Wigner function is completely ﬂat in the absence of interactions, it shows two peaks at ϕ1 − ϕ2 = 0, π corresponding to in-phase and antiphase synchronization respectively. Due to the strong quantum noise in the regime considered in this work, the peaks are quite small, which has also been reported in Ref. [7].
For two coupled vdP oscillators the effective dynamics are given by Eq. (9) with effective Hamiltonian

Hα (t ) = h¯ ω0a†j a + h¯λ(a1†a2 + a2†a1)

j

− ih¯ κ2 2

[α

j

(t

)]2 (a†j

)2

−

[α

∗ j

(t

)]2a2j

,

j

(C5)

where the mean-ﬁeld amplitudes α j (t ) follow the dynamics

α˙ 1

=

−iω0α1

−

iλα2

+

κ1 2

α1

−

κ2|α1|2α1,

α˙ 2

=

−iω0α2

−

iλα1

+

κ1 2

α2

−

κ2|α1|2α2.

(C6)

In the case without interaction (λ = 0) the mean-ﬁeld amplitude of each oscillator will eventually reach the steady-state α¯ j (t ) = A¯ exp(−iω0t + ϕ j ) with an arbitrary phase difference ϕ1 − ϕ2 set by the initial conditions. In the case of large interaction strengths the two oscillators will synchronize, however,
either in-phase or antiphase, again set by the initial conditions.
It is thus necessary to average over the initial conditions to
properly compare it to the full quantum dynamics. As dis-
cussed previously, the initial condition of the effective density matrix is given by α (t = 0) = j |0 j 0 j|. In Fig. 11(b) we show the Wigner function W (ϕ1 − ϕ2) − π /2 as function of the phase difference between the two oscillators for λ = 0 (blue) and λ = 0.5ω0 (pink). Similar to the full quantum model shown in Fig. 11(a), we observe that if the interaction
is turned off the Wigner function is completely ﬂat, while it is peaked at ϕ1 − ϕ2 = 0, π with the coupling turned on, however, compared to Fig. 11(a) the peaks are smaller. The
reason is that the effective model overestimates the quantum
ﬂuctuations leading to less pronounced synchronization. This
is consistent with the observations of Ref. [7], where for κ2 = 10κ1 the height of the peaks is in the same order of magnitude.

023021-14

TOPOLOGICAL SYNCHRONIZATION OF QUANTUM VAN …

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

FIG. 12. Quantum synchronization measure Sc as a function of the coupling strength λ between two coupled vdP oscillators. The blue line corresponds to the full dynamics of the exact model, whereas the pink line corresponds to the effective model. In both cases we observe an increase of the measure as the interaction is turned on, yet for the effective model, the maximum value of Sc remains always smaller compared to the exact model. Parameters: κ1 = 5 × 10−3ω0, κ2 = 2κ1.
In the main manuscript we quantify the level of synchronization between two vdP oscillators in terms of the synchronization measure deﬁned in Eq. (13) rather than the Wigner distribution. We therefore also compare this quantity for the full quantum model and the effective model. In Fig. 12 we show Sc as a function of the coupling strength λ for two coupled vdP oscillators without (blue) and with approximations (pink). In both cases, Sc is ﬁnite even though the oscillators do not interact, which is-
 due to the fact that both oscillators are equivalent. As the interaction increases, also Sc increases until it quickly approaches a plateau. In accordance with the previous observations regarding the Wigner function, also the synchronization measure is overall smaller for the effective model than for the full dynamics.
APPENDIX D: QUANTUM SIGNATURES IN THE SSH MODEL FOR EIGENSTATES AS INITIAL CONDITIONS
In this section we provide for completeness the quantum synchronization measure Sc corresponding to the mean-ﬁeld

amplitudes shown in Fig. 1, that is we choose eigenstates α(l) of the topological Hamiltonian HSSH [cf. Eq. (14)] as initial states (cf. Sec. IV B 2). In Figs. 13(a)–13(d) we show the time-averaged quantity Sc between lattice site j and j of the vdP chain for different coupling strengths (a) δλ = −0.8λ0, (b) δλ = −0.4λ0, (c) δλ = 0.4λ0, and (d) δλ = 0.6λ0. In the trivial phase we observe complete synchronization of all vdP oscillators for the mean ﬁelds shown in Figs. 1(b) and 1(c) with oscillatio-
n amplitudes determined by the amplitudes of the initial state. Moreover, the amplitudes are symmetric with symmetry center located in the middle of the chain, i.e., between oscillator j = 10 and j = 11. For the quantum model, this symmetry is reﬂected in the synchronization measure shown in Figs. 13(a) and 13(b), i.e., Sc( j , j) = Sc( j = N + 1 − j, j = N + 1 − j ) , for example, Sc( j = 3, j = 7) = Sc( j = 14, j = 18) in Fig. 13(a). However, besides this observation, comparing the mean-ﬁeld dyn-
amics with the emergent quantum synchronization remains challenging and will be investigated further in future work.
The bulk oscillators in the topological phase shown in Figs. 13(b) and 13(c) corresponding to the mean-ﬁeld amplitudes of Figs. 1(d) and 1(e), respectively, exhibit similar behavior as discussed previously; notably, Sc( j , j) reﬂects the symmetry of the system. However, in addition the oscillators located at the two edges of the chain ( j = 1 and j = 20) exhibit the largest value of the quantum synchronization measure in the vdP chain. It is worth mentioning that the oscillators located at the bo-
undaries live on different sublattices ( j = 1 is odd and j = 20 is even) and furthermore exhibit in-phase synchronization of the mean-ﬁeld amplitudes; see Figs. 1(d) and 1(e).
APPENDIX E: INCLUDING AN ADDITIONAL LINEAR LOSS CHANNEL
For the experimental realization of a vdP oscillator with optomechanics as discussed in Sec. VI, there exists an additional linear one-phonon loss channel. However, we will show in this section that such an additional dissipative term does not affect the results discussed in the main text as long as it is small compared to the linear gain channel. Including this

FIG. 13. Time-averaged quantum complete synchronization measure Sc between lattice site j and j of the vdP SSH network corresponding to the mean-ﬁeld dynamics shown in Fig. 2, i.e., with an eigenstate α(l) of the topological Hamiltonian HSSH [cf. Eq. (16)] as initial conditions and for different coupling strength (a) δλ = −0.8λ0, (b) δλ = −0.4λ0, (c) δλ = 0.4λ0, and (d) δλ = 0.6λ0. With an eigenstate as initial state, additional structures emerge compared to random initial conditions. Nevertheless-
, Sc between the edges ( j = 1 and j = 20) is still the largest quantity. Parameters: κ1 = 5 × 10−3ω0, κ2 = 2κ1, λ2 = 0.25ω0, ω0ti = 2 × 104, ω0t f = 2.3 × 104.
023021-15

WÄCHTLER AND PLATERO

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

additional loss term, the Lindblad master equation is given by

˙ = − i [H, ] + h¯

{κ1D[a†j ] + κ2D[a2j ] + γ¯ D[a j] }.

j

(E1)

Within in the mean-ﬁeld approximation, the term proportional

to γ¯ only appears as a shift of the dissipation rate κ1, i.e., with the deﬁnition κ˜1 = κ1 − γ¯ the dynamics is fully equivalent to Eq. (8) assuming that γ¯ κ1. The latter condition must be fulﬁlled to counteract the nonlinear damping (κ2) and not

simply decay into the ground state.

In terms of the quantum ﬂuctuations about these mean-ﬁeld

amplitudes, the additional γ¯ term appears in the matrices B

and D governing the dynamics of the covariance matrix; see
Eq. (10). Similar to the mean-ﬁeld approximation, in B this will only result in an effective dissipation rate κ1 → κ˜1 = κ1 − γ¯ in Eq. (B2). However, the sign is ﬂipped for the effective dissipation rate in D [cf. Eq. (B4)], which is then given
by

Djj

=

1 2

(κ1

+

γ¯

+

4κ2

αj

2)

1 0

0 1

.

(E2)

We have checked numerically that for γ¯ = 0.1κ1 there are no noticeable changes in the dynamics or synchronization behavior, such that we are conﬁdent that in fact a linear dissipation channel does not alter the discussed results.

[1] B. Kraus, H. P. Büchler, S. Diehl, A. Kantian, A. Micheli, and P. Zoller, Preparation of entangled states by quantum Markov processes, Phys. Rev. A 78, 042307 (2008).
[2] S. Touzard, A. Grimm, Z. Leghtas, S. O. Mundhada, P. Reinhold, C. Axline, M. Reagor, K. Chou, J. Blumoff, K. M. Sliwa, S. Shankar, L. Frunzio, R. J. Schoelkopf, M. Mirrahimi, and M. H. Devoret, Coherent Oscillations Inside a Quantum Manifold Stabilized by Dissipation, Phys. Rev. X 8, 021005 (2018).
[3] J. Tindall, B. Bucˇa, J. R. Coulthard, and D. Jaksch, HeatingInduced Long-Range η Pairing in the Hubbard Model, Phys. Rev. Lett. 123, 030603 (2019).
[4] A. Pikovsky, J. Kurths, M. Rosenblum, and J. Kurths, Synchronization: A Universal Concept in Nonlinear Sciences (Cambridge University Press, Cambridge, UK, 2003).
[5] S. H. Strogatz, Nonlinear Dynamics and Chaos: With Applications to Physics, Biology, Chemistry, and Engineering (CRC Press, Boca Raton, FL, 2018).
[6] A. Jenkins, Self-oscillation, Phys. Rep. 525, 167 (2013). [7] T. E. Lee and H. R. Sadeghpour, Quantum Synchronization of
Quantum Van Der Pol Oscillators with Trapped Ions, Phys. Rev. Lett. 111, 234101 (2013). [8] T. E. Lee, C.-K. Chan, and S. Wang, Entanglement tongue and quantum synchronization of disordered oscillators, Phys. Rev. E 89, 022913 (2014). [9] S. Walter, A. Nunnenkamp, and C. Bruder, Quantum Synchronization of a Driven Self-Sustained Oscillator, Phys. Rev. Lett. 112, 094102 (2014). [10] S. Walter, A. Nunnenkamp, and C. Bruder, Quantum synchronization of two van der Pol oscillators, Ann. Phys. 527, 131 -
(2015). [11] V. M. Bastidas, I. Omelchenko, A. Zakharova, E. Schöll, and T. Brandes, Quantum signatures of chimera states, Phys. Rev. E 92, 062924 (2015). [12] M. Xu, D. A. Tieri, E. C. Fine, J. K. Thompson, and M. J. Holland, Synchronization of Two Ensembles of Atoms, Phys. Rev. Lett. 113, 154101 (2014). [13] A. Roulet and C. Bruder, Quantum Synchronization and Entanglement Generation, Phys. Rev. Lett. 121, 063601 (2018). [14] S. Sonar, M. Hajdušek, M. Mukherjee, R. Fazio, V. Vedral, S. Vinjanamp-
athy, and L.-C. Kwek, Squeezing Enhances Quantum Synchronization, Phys. Rev. Lett. 120, 163601 (2018).

[15] A. Roulet and C. Bruder, Synchronizing the Smallest Possible System, Phys. Rev. Lett. 121, 053601 (2018).
[16] N. Es’haqi-Sani, G. Manzano, R. Zambrini, and R. Fazio, Synchronization along quantum trajectories, Phys. Rev. Res. 2, 023101 (2020).
[17] M. Cattaneo, G. L. Giorgi, S. Maniscalco, G. S. Paraoanu, and R. Zambrini, Bath-induced collective phenomena on superconducting qubits: Synchronization, subradiance, and entanglement generation, Ann. Phys 533, 2100038 (2021).
[18] J. Li, Z.-H. Zhou, S. Wan, Y.-L. Zhang, Z. Shen, M. Li, C.-L. Zou, G.-C. Guo, and C.-H. Dong, All-Optical Synchronization of Remote Optomechanical Systems, Phys. Rev. Lett. 129, 063605 (2022).
[19] R. Tan, C. Bruder, and M. Koppenhöfer, Half-integer vs. integer effects in quantum synchronization of spin systems, Quantum 6, 885 (2022).
[20] D. J. Thouless, M. Kohmoto, M. P. Nightingale, and M. den Nijs, Quantized Hall Conductance in a Two-Dimensional Periodic Potential, Phys. Rev. Lett. 49, 405 (1982).
[21] F. D. M. Haldane, Model for a Quantum Hall Effect Without Landau Levels: Condensed-Matter Realization of the “Parity Anomaly,” Phys. Rev. Lett. 61, 2015 (1988).
[22] J. E. Moore, The birth of topological insulators, Nature (London) 464, 194 (2010).
[23] M. Z. Hasan and C. L. Kane, Colloquium: Topological insulators, Rev. Mod. Phys. 82, 3045 (2010).
[24] M. Z. Hasan and J. E. Moore, Three-dimensional topological insulators, Annu. Rev. Condens. Matter Phys. 2, 55 (2011).
[25] S. Mittal, J. Fan, S. Faez, A. Migdall, J. M. Taylor, and M. Hafezi, Topologically Robust Transport of Photons in a Synthetic Gauge Field, Phys. Rev. Lett. 113, 087403 (2014).
[26] S. Diehl, E. Rico, M. A. Baranov, and P. Zoller, Topology by dissipation in atomic quantum wires, Nat. Phys. 7, 971 (2011).
[27] C.-E. Bardyn, M. A. Baranov, C. V. Kraus, E. Rico, A. ˙Imamog˘lu, P. Zoller, and S. Diehl, Topology by dissipation, New J. Phys. 15, 085001 (2013).
[28] Z. Gong, Y. Ashida, K. Kawabata, K. Takasan, S. Higashikawa, and M. Ueda, HTopological Phases of Non-Hermitian Systems, Phys. Rev. X 8, 031079 (2018).
[29] F. K. Kunst, E. Edvardsson, J. C. Budich, and E. J. Bergholtz, Biorthogonal Bulk-Boundary Correspondence in Non-Hermitian Systems, Phys. Rev. Lett. 121, 026808 (2018).

023021-16

TOPOLOGICAL SYNCHRONIZATION OF QUANTUM VAN …

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

[30] S. Yao and Z. Wang, Edge States and Topological Invariants of Non-Hermitian Systems, Phys. Rev. Lett. 121, 086803 (2018).
[31] K. Kawabata, K. Shiozaki, M. Ueda, and M. Sato, Symmetry and Topology in Non-Hermitian Physics, Phys. Rev. X 9, 041015 (2019).
[32] F. Song, S. Yao, and Z. Wang, Non-Hermitian Skin Effect and Chiral Damping in Open Quantum Systems, Phys. Rev. Lett. 123, 170401 (2019).
[33] D. Smirnova, D. Leykam, Y. Chong, and Y. Kivshar, Nonlinear topological photonics, Appl. Phys. Rev. 7, 021306 (2020).
[34] D. D. Solnyshkov, O. Bleu, B. Teklu, and G. Malpuech, Chirality of Topological Gap Solitons in Bosonic Dimer Chains, Phys. Rev. Lett. 118, 023901 (2017).
[35] G. Harari, M. A. Bandres, Y. Lumer, M. C. Rechtsman, Y. D. Chong, M. Khajavikhan, D. N. Christodoulides, and M. Segev, Topological insulator laser: Theory, Science 359, eaar4003 (2018).
[36] M. A. Bandres, S. Wittek, G. Harari, M. Parto, J. Ren, M. Segev, D. N. Christodoulides, and M. Khajavikhan, Topological insulator laser: Experiments, Science 359, eaar4005 (2018).
[37] Y. Wang, L.-J. Lang, C. H. Lee, B. Zhang, and Y. Chong, Topologically enhanced harmonic generation in a nonlinear transmission line metamaterial, Nat. Commun. 10, 1 (2019).
[38] C. W. Wächtler, V. M. Bastidas, G. Schaller, and W. J. Munro, Dissipative nonequilibrium synchronization of topological edge states via self-oscillation, Phys. Rev. B 102, 014309 (2020).
[39] T. Kotwal, F. Moseley, A. Stegmaier, S. Imhof, H. Brand, T. Kießling, R. Thomale, H. Ronellenﬁtsch, and J. Dunkel, Active topolectrical circuits, Proc. Natl. Acad. Sci. USA 118, e2106411118 (2021).
[40] K. Sone, Y. Ashida, and T. Sagawa, Topological synchronization of coupled nonlinear oscillators, Phys. Rev. Res. 4, 023211 (2022).
[41] N. Lörch, J. Qian, A. Clerk, F. Marquardt, and K. Hammerer, Laser Theory for Optomechanics: Limit Cycles in the Quantum Regime, Phys. Rev. X 4, 011015 (2014).
[42] T. Weiss, S. Walter, and F. Marquardt, Quantum-coherent phase oscillations in synchronization, Phys. Rev. A 95, 041802(R) (2017).
[43] Y. Kuramoto, Chemical turbulence, in Chemical Oscillations, Waves, and Turbulence (Springer, Berlin, 1984), pp. 111–140.
[44] Á. Parra-López and J. Bergli, Synchronization in two-level quantum systems, Phys. Rev. A 101, 062104 (2020).
[45] J. Tindall, C. S. Munoz, B. Bucˇa, and D. Jaksch, Quantum synchronisation enabled by dynamical symmetries and dissipation, New J. Phys. 22, 013026 (2020).
[46] B. Bucˇa, C. Booker, and D. Jaksch, Algebraic theory of quantum synchronization and limit cycles under dissipation, SciPost Phys. 12, 097 (2022).
[47] V. Ameri, M. Eghbali-Arani, A. Mari, A. Farace, F. Kheirandish, V. Giovannetti, and R. Fazio, Mutual information as an order parameter for quantum synchronization, Phys. Rev. A 91, 012301 (2015).
[48] N. Jaseem, M. Hajdušek, P. Solanki, L.-C. Kwek, R. Fazio, and S. Vinjanampathy, Generalized measure of quantum synchronization, Phys. Rev. Res. 2, 043287 (2020).
[49] A. Mari, A. Farace, N. Didier, V. Giovannetti, and R. Fazio, Measures of Quantum Synchronization in Continuous Variable Systems, Phys. Rev. Lett. 111, 103605 (2013).

[50] A. J. Heeger, S. Kivelson, J. Schrieffer, and W.-P. Su, Solitons in conducting polymers, Rev. Mod. Phys. 60, 781 (1988).
[51] J. K. Asboth, L. Oroszlany, and A. Palyi, A Short Course on Topological Insulators (Springer, Berlin, 2015).
[52] A. Gómez-León and G. Platero, Floquet-Bloch Theory and Topology in Periodically Driven Lattices, Phys. Rev. Lett. 110, 200403 (2013).
[53] G. Engelhardt, M. Benito, G. Platero, and T. Brandes, Topological Instabilities in AC-Driven Bosonic Systems, Phys. Rev. Lett. 117, 045302 (2016).
[54] M. Bello, C. E. Crefﬁeld, and G. Platero, Long-range doublon transfer in a dimer chain induced by topology and ac ﬁelds, Sci. Rep. 6, 1 (2016).
[55] G. Engelhardt, M. Benito, G. Platero, and T. Brandes, Topologically Enforced Bifurcations in Superconducting Circuits, Phys. Rev. Lett. 118, 197702 (2017).
[56] M. Bello, G. Platero, J. I. Cirac, and A. González-Tudela, Unconventional quantum optics in topological waveguide QED, Sci. Adv. 5, eaaw0297 (2019).
[57] Y. Hadad, A. B. Khanikaev, and A. Alù, Self-induced topological transitions and edge states supported by nonlinear staggered potentials, Phys. Rev. B 93, 155112 (2016).
[58] Y. Hadad, V. Vitelli, and A. Alu, Solitons and propagating domain walls in topological resonator arrays, ACS Photon. 4, 1974 (2017).
[59] D. A. Dobrykh, A. V. Yulin, A. P. Slobozhanyuk, A. N. Poddubny, and Y. S. Kivshar, Nonlinear Control of Electromagnetic Topological Edge States, Phys. Rev. Lett. 121, 163901 (2018).
[60] Y. Hadad, J. C. Soric, A. B. Khanikaev, and A. Alu, Selfinduced topological protection in nonlinear circuit arrays, Nat. Electron. 1, 178 (2018).
[61] A. Bisianov, M. Wimmer, U. Peschel, and O. A. Egorov, Stability of topologically protected edge states in nonlinear ﬁber loops, Phys. Rev. A 100, 063830 (2019).
[62] E. Kim, X. Zhang, V. S. Ferreira, J. Banker, J. K. Iverson, A. Sipahigil, M. Bello, A. González-Tudela, M. Mirhosseini, and O. Painter, Quantum Electrodynamics in a Topological Waveguide, Phys. Rev. X 11, 011015 (2021).
[63] M. Ezawa, Higher-Order Topological Insulators and Semimetals on the Breathing Kagome and Pyrochlore Lattices, Phys. Rev. Lett. 120, 026801 (2018).
[64] F. K. Kunst, G. van Miert, and E. J. Bergholtz, Lattice models with exactly solvable topological hinge and corner states, Phys. Rev. B 97, 241405(R) (2018).
[65] A. Bolens and N. Nagaosa, Topological states on the breathing kagome lattice, Phys. Rev. B 99, 165141 (2019).
[66] H. Xue, Y. Yang, F. Gao, Y. Chong, and B. Zhang, Acoustic higher-order topological insulator on a kagome lattice, Nat. Mater. 18, 108 (2019).
[67] F. Schindler, A. M. Cook, M. G. Vergniory, Z. Wang, S. S. Parkin, B. A. Bernevig, and T. Neupert, Higher-order topological insulators, Sci. Adv. 4, eaat0346 (2018).
[68] X. Ni, M. Weiner, A. Alu, and A. B. Khanikaev, Observation of higher-order topological acoustic states protected by generalized chiral symmetry, Nat. Mater. 18, 113 (2019).
[69] G. van Miert and C. Ortix, On the topological immunity of corner states in two-dimensional crystalline insulators, npj Quantum Mater. 5, 63 (2020).

023021-17

WÄCHTLER AND PLATERO

PHYSICAL REVIEW RESEARCH 5, 023021 (2023)

[70] M. A. J. Herrera, S. N. Kempkes, M. B. de Paz, A. GarcíaEtxarri, I. Swart, C. M. Smith, and D. Bercioux, Corner modes of the breathing kagome lattice: Origin and robustness, Phys. Rev. B 105, 085411 (2022).
[71] D. Leibfried, R. Blatt, C. Monroe, and D. Wineland, Quantum dynamics of single trapped ions, Rev. Mod. Phys. 75, 281 (2003).
[72] J. Thompson, B. Zwickl, A. Jayich, F. Marquardt, S. Girvin, and J. Harris, Strong dispersive coupling of a high-ﬁnesse cavity to a micromechanical membrane, Nature (London) 452, 72 (2008).
[73] J. C. Sankey, C. Yang, B. M. Zwickl, A. M. Jayich, and J. G. Harris, Strong and tunable nonlinear optomechanical coupling in a low-loss system, Nat. Phys. 6, 707 (2010).
[74] M. Aspelmeyer, T. J. Kippenberg, and F. Marquardt, Cavity optomechanics, Rev. Mod. Phys. 86, 1391 (2014).
[75] A. Nunnenkamp, K. Børkje, J. Harris, and S. Girvin, Cooling and squeezing via quadratic optomechanical coupling, Phys. Rev. A 82, 021806(R) (2010).
[76] K. S. Thornburg, M. Möller, R. Roy, T. W. Carr, R.-D. Li, and T. Erneux, Chaos and coherence in coupled lasers, Phys. Rev. E 55, 3865 (1997).
[77] J. J. Lynch and R. A. York, A mode locked array of coupled phase locked loops, IEEE Microw. Guid. Wave Lett. 5, 213 (1995).
[78] A. B. Cawthorne, P. Barbara, S. V. Shitov, C. J. Lobb, K. Wiesenfeld, and A. Zangwill, Synchronized oscillations in

Josephson junction arrays: The role of distributed coupling, Phys. Rev. B 60, 7575 (1999). [79] R. Fazio and H. Van Der Zant, Quantum phase transitions and vortex dynamics in superconducting networks, Phys. Rep. 355, 235 (2001). [80] A. Slavin, Spin-torque oscillators get in phase, Nat. Nanotechnol. 4, 479 (2009). [81] N. Jaseem, M. Hajdušek, V. Vedral, R. Fazio, L.-C. Kwek, and S. Vinjanampathy, Quantum synchronization in nanoscale heat engines, Phys. Rev. E 101, 020201(R) (2020). [82] T. Nishika-
wa and A. E. Motter, Comparative analysis of existing models for power-grid synchronization, New J. Phys. 17, 015012 (2015). [83] J. C. Bellamy, Digital network synchronization, IEEE Commun. Mag. 33, 70 (1995). [84] L. Narula and T. E. Humphreys, Requirements for secure clock synchronization, IEEE J. Sel. Top. Signal Process. 12, 749 (2018). [85] L. Calderaro, A. Stanco, C. Agnesi, M. Avesani, D. Dequal, P. Villoresi, and G. Vallone, Fast and Simple Qubit-Based Synchronization for Quantum Key Dist-
ribution, Phys. Rev. Appl. 13, 054041 (2020). [86] C. Agnesi, M. Avesani, L. Calderaro, A. Stanco, G. Foletto, M. Zahidy, A. Scriminich, F. Vedovato, G. Vallone, and P. Villoresi, Simple quantum key distribution with qubit-based synchronization and a self-compensating polarization encoder, Optica 7, 284 (2020).

023021-18

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:12.286Z
- **Text Length:** 90244 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
