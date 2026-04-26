# PDF Document: Probing many-body dynamics on a 51-atom quantum simulator.pdf

**File Path:** Probing many-body dynamics on a 51-atom quantum simulator.pdf

**Processed Date:** 2026-02-10T18:17:39.282Z

**File Size:** 2157.66 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1036

**Title:** Probing many-body dynamics on a 51-atom quantum simulator

**Collection:** Courses > Modern Atomic Physics

---

## Extracted Text Content

Article

doi:10.1038/nature24622

Probing many-body dynamics on a 51-atom quantum simulator
Hannes Bernien1, Sylvain Schwartz1,2, Alexander Keesling1, Harry Levine1, Ahmed Omran1, Hannes Pichler1,3, Soonwon Choi1, Alexander S. Zibrov1, Manuel Endres4, Markus Greiner1, Vladan Vuletić2 & Mikhail D. Lukin1

Controllable, coherent many-body systems can provide insights into the fundamental properties of quantum matter, enable the realization of new quantum phases and could ultimately lead to computational systems that outperform existing computers based on classical approaches. Here we demonstrate a method for creating controlled many-body quantum matter that combines deterministically prepared, reconfigurable arrays of individually trapped cold atoms with strong, coherent interactions enabled by exci-
tation to Rydberg states. We realize a programmable Ising-type quantum spin model with tunable interactions and system sizes of up to 51 qubits. Within this model, we observe phase transitions into spatially ordered states that break various discrete symmetries, verify the high-fidelity preparation of these states and investigate the dynamics across the phase transition in large arrays of atoms. In particular, we observe robust manybody dynamics corresponding to persistent oscillations of the orde-
r after a rapid quantum quench that results from a sudden transition across the phase boundary. Our method provides a way of exploring many-body phenomena on a programmable quantum simulator and could enable realizations of new quantum algorithms.

The realization of fully controlled, coherent many-body quantum systems is an outstanding challenge in science and engineering. As quantum simulators, they can provide insights into strongly correlated quantum systems and the role of quantum entanglement1, and enable realizations and studies of new states of matter, even away from equilibrium. These systems also form the basis of the realization of quantum information processors2. Although basic building blocks of such processors have been demonst-
rated in systems of a few coupled qubits3–5, the current challenge is to increase the number of coherently coupled qubits to potentially perform tasks that are beyond the reach of modern classical machines.
Several physical platforms are currently being explored to reach these goals. Systems composed of about 10–20 individually controlled atomic ions have been used to create entangled states and to explore quantum simulations of Ising spin models6,7. Similarly sized systems of programmable superconducting qubits have been implemented recently8. Quantum simulations have been carried out in larger ensembles of more than 100 trapped ions without individual readout9. Strongly interacting quantum dynamics-
 has been explored using optical lattice simulators10. These systems are already addressing computationally difficult problems in quantum dynamics11 and the fermionic Hubbard model12. Larger-scale Ising-like machines have been realized in superconducting13 and optical14 systems, but these realizations lack either coherence or quantum nonlinearity, which are essential for achieving full quantum speedup.
Arrays of strongly interacting atoms A promising avenue for realizing strongly interacting quantum matter involves coherent coupling of neutral atoms to highly excited Rydberg states15,16 (Fig. 1a). This results in repulsive van der Waals interactions (of strength Vij = C/Ri6j) between Rydberg atom pairs at a distance Rij (ref. 15), where C > 0 is the van der Waals coefficient. Such interactions have recently been used to realize quantum gates17–19, to implement strong photon–photon interactions20-
 and to study quantum many-body physics of Ising spin systems in optical lattices21–23 and in

probabilistically loaded dipole trap arrays24. Our approach combines these strong, controllable interactions with atom-by-atom assembly of arrays of cold neutral 87Rb atoms25–27. The quantum dynamics of this system is governed by the Hamiltonian

∑ ∑ ∑ H =
ħi

Ωi 2

σ

i x

−

i

Δini + Vijninj
i<j

(1)

where Δi are the detunings of the driving lasers from the Rydberg

state

(Fig.

1b),

σ

i x

=

| g i〉〈ri|

+

|ri〉〈 g i|

describes

the

coupling

between

the ground state |gi〉 and the Rydberg state |ri〉 of an atom at position i,

driven at Rabi frequency Ωi, ni = |ri〉〈ri|, and ħ is the reduced

Planck constant. Here, we focus on homogeneous coherent coupling

(|Ωi| = Ω, Δi = Δ), controlled by changing laser intensities and

detunings in time. The interaction strength Vij is tuned either by

varying the distance between the atoms or by coupling them to a

different Rydberg state.

The experimental protocol that we implement is depicted in Fig. 1c

(see also Extended Data Fig. 1). First, atoms are loaded from a magneto-

optical trap into a tweezer array created by an acousto-optic deflector.

We then use a measurement and feedback procedure that eliminates

the entropy associated with the probabilistic trap loading and results

in the rapid production of defect-free arrays with more than 50 laser-

cooled atoms, as described previously26. These atoms are prepared

in a preprogrammed spatial configuration in a well-defined internal

ground state |g〉 (Methods). We then turn off the traps and let the

system evolve under the unitary time evolution U(Ω, Δ, t), which is

realized by coupling the atoms to the Rydberg state |r〉 = |70S1/2〉 with

laser light along the array axis (Fig. 1a). The final states of individual

atoms are detected by turning the traps back on and imaging the recap-

tured ground-state atoms via atomic fluorescence; the anti-trapped

Rydberg atoms are ejected. The atomic motion in the absence of traps

limits the time window for exploring coherent dynamics. For a typical

sequence duration of about 1 μs, the probability of atom loss is less than

1% (see Extended Data Fig. 2).

1Department of Physics, Harvard University, Cambridge, Massachusetts 02138, USA. 2Department of Physics and Research Laboratory of Electronics, Massachusetts Institute of Technology, Cambridge, Massachusetts 02139, USA. 3Institute for Theoretical Atomic, Molecular and Optical Physics, Harvard-Smithsonian Center for Astrophysics, Cambridge, Massachusetts 02138, USA. 4Division of Physics, Mathematics and Astronomy, California Institute of Technology, Pasadena, California 91125, USA.

3 0 n o v e m b e r 2 0 1 7 | VO L 5 5 1 | N A T U RE | 5 7 9 © 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

RESEARCH Article

a 1,013 nm

b

Δ |r〉

Vij

420 nm

ΩR

G |e〉

|r〉
Ω |g〉 c

ΩB |g〉

(1) Load

(2) Arrange

(3) Evolve

U(t)

U(t)

U(t)

U(t)

U(t)

(4) Detect

d

1

Single Rydberg probability

0.5

0

0.5

0

0.5

0

0

0.5

1.0

1.5

Time (μs)

Figure 1 | Experimental platform. a, Individual 87Rb atoms (green) are
trapped using optical tweezers (vertical red beams) and arranged into
defect-free arrays. Coherent interactions Vij between the atoms (arrows) are enabled by exciting them (horizontal blue and red beams) to a Rydberg state with strength Ω and detuning Δ (inset). b, A two-photon process couples the ground state |g〉 = |5S1/2, F = 2, mF = −2〉 to the Rydberg state |r〉 = |70S1/2, J = 1/2, mJ = −1/2〉 via an intermediate state |e〉 = |6P3/2, F = 3, mF = −3〉 with detuning δ, using circularly polarized 420-nm and 1,013-nm lasers with single-photon Rabi frequencies of ΩB and Ω-
R, respectively. Typical experimental values are δ ≈ 2π × 560 MHz (ΩB, ΩR) ≈ 2π × (60, 36) MHz. c, The experimental protocol consists of loading the atoms into a tweezer array (1) and then
rearranging them into a preprogrammed configuration (2). After this, the system evolves under U(t) with tunable parameters Δ(t), Ω(t) and Vij. This evolution can be implemented in parallel on several non-interacting
sub-systems (3). We then detect the final state using fluorescence imaging (4). Atoms in state |g〉 remain trapped, whereas atoms in state |r〉
are ejected from the trap and detected as the absence of fluorescence (indicated with red circles). d, For resonant driving (Δ = 0), isolated atoms (blue circles) display Rabi oscillations between |g〉 and |r〉. Arranging the atoms into fully blockaded clusters of N = 2 (green circles) and N = 3
(red circles) atoms results in only one excitation being shared between the atoms in the cluster, while the Rabi frequency is enhanced by N. The probability of detecting more than one excitation in the cluster is ≤5%.
Error bars indicate 68% confidence intervals and are smaller than the
marker size.

The strong, coherent interactions between Rydberg atoms provide
an effective coherent constraint that prevents simultaneous excitation
of nearby atoms into Rydberg states. This is the essence of the so-called Rydberg blockade15, demonstrated in Fig. 1d. When two atoms are
sufficiently close that that their Rydberg–Rydberg interactions Vij exceed the effective Rabi frequency Ω, multiple Rydberg excitations are
suppressed. This defines the Rydberg blockade radius Rb, at which Vij = Ω (Rb = 9 μm for |r〉 = |70S1/2〉 and Ω = 2π × 2 MHz, as used here). In the case of resonant driving of atoms separated by a = 23 μm, we
observe Rabi oscillations associated with non-interacting atoms (blue
curve in Fig. 1d). However, the dynamics changes substantially as we bring multiple atoms close to each other (a = 2.87 μm < Rb). In this case, we observe Rabi oscillations between the ground state and a collective

tshtaetechwaitrhacetxearcisttlyiconNe exsccaitlaintigonof(Wthe=c(o1l/lectNiv)e∑Rai |bgi1f…reqriu…engcNy2〉)4,w28i,2t9h. These observations enable us to quantify the coherence properties of our system (see Methods and Extended Data Fig. 3). In particular, the amplitude of Rabi oscillations in Fig. 1d is limited mostly by the state detection fidelity (93% for |r〉 and about 98% for |g〉; Methods). The individual Rabi frequencies are controlled to better than 3% across the array, whereas the coherence t-
ime is limited ultimately by the small probability of spontaneous emission from the intermediate state |e〉 during the laser pulse (scattering rate 0.022 μs−1; Methods).
Programmable quantum simulator In the case of homogeneous coherent coupling considered here, the Hamiltonian in equation (1) resembles closely the paradigmatic Ising model for effective spin-1/2 particles with variable interaction range. Its ground state exhibits a rich variety of many-body phases that break distinct spatial symmetries (Fig. 2a). Specifically, at large negative values of Δ/Ω, its ground state corresponds to all atoms in the state |g〉, corresponding to the paramagnetic or disordere-
d phase. As Δ/Ω is increased towards large positive values, the number of atoms in |r〉 increases and interactions between them become important. This gives rise to spatially ordered phases in which Rydberg atoms are arranged regularly across the array, resulting in ‘Rydberg crystals’ with different spatial symmetries30,31, as illustrated in Fig. 2a. The origin of these correlated states can be understood intuitively by first considering the situation in which Vi,i+1 Δ Ω Vi,i+2, that is, with block-
ade for neighbouring atoms but negligible interaction between next-nearest neighbours. In this case, the ground state corresponds to a Rydberg crystal that breaks Z2 translational symmetry in a manner analogous to antiferromagnetic order in magnetic systems. Moreover, by tuning the parameters so that Vi,i+1, Vi,i+2 Δ Ω Vi,i+3 and Vi,i+1, Vi,i+2, Vi,i+3 Δ Ω Vi,i+4 ,  we obtain arrays with broken Z3 and Z4 symmetries, respectively (Fig. 2).
To prepare the system in these phases, we control the detuning Δ(t) of the driving lasers dynamically to transform the ground state of the Hamiltonian adiabatically from a product state of all atoms in |g〉 to crystalline states22,31. In contrast to previous work where Rydberg crystals are prepared via a sequence of avoided crossings22,31,32, the operation at a finite Ω and well-defined atom separation enables us to move across a single phase transition into the desired phase directly33.
In the experiment, we first prepare all atoms in state |g〉 = |5S1/2, F = 2, mF = −2〉 by optical pumping. We then switch on the laser fields and sweep the two-photon detuning from negative to positive values using the functional form shown in Fig. 3a. Figure 2b displays the resulting single-atom trajectories in a group of 13 atoms for three different interaction strengths as we vary the detuning Δ. In each of these instances, we observe a clear transition from the initial state |g1, …, g13〉 to an o-
rdered state of different broken symmetry. The distance between the atoms determines the interaction strength, which leads to different crystalline order for a given final detuning. To achieve Z2 order, we arrange the atoms with a spacing of 5.74 μm, which results in a measured nearest-neighbour interaction strength (see Extended Data Fig. 4) of Vi,i+1 = 2π × 24 MHz Ω = 2π × 2 MHz, while the next-nearest-neighbour interaction is small (2π × 0.38 MHz). This results in a build-up of antiferromagneti-
c order whereby every other trap site is occupied by a Rydberg atom (Z2 order). By reducing the spacing between the atoms to 3.57 μm and 2.87 μm, Z3 and Z4 order is observed, respectively (Fig. 2b).
We benchmark the performance of the quantum simulator by comparing the measured build-up of Z2 order with theoretical predictions for a N = 7 atom system, obtained via exact numerical simulations. As shown in Fig. 3, this fully coherent simulation without free parameters yields excellent agreement with the observed data when the finite detection fidelity is accounted for. The evolution of the many-body states in Fig. 3c shows that we measure the perfect antiferromagnetic state with 54(4)% probabil-
ity (here and elsewhere, unless otherwise specified, the

5 8 0 | N A T U RE | VO L 5 5 1 | 3 0 n o v e m b e r 2 0 1 7 © 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

Article RESEARCH

Interaction range, Rb/a

a

b

13

9

'4 ordered

5

1

Position in cluster

13

'3 ordered

9

5

1

Disordered

'2 ordered

13

9

5

1 –4

Detuning, Δ/Ω

Figure 2 | Phase diagram and build-up of crystalline phases. a, A schematic of the ground-state phase diagram of the Hamiltonian in equation (1) displays phases with various broken symmetries depending on the interaction range Rb/a (Rb, blockade radius; a, trap spacing) and detuning Δ (see main text). Shaded areas indicate potential incommensurate phases30. Here we show the experimentally accessible region; further details can be found in refs 30, 33 and 36. b, The build-up of Rydberg crystals on -
a 13-atom array is observed by slowly changing the laser parameters, as indicated by the red dashed arrows in a (see also Fig. 3a). The bottom panel shows a configuration in which the atoms are

0 0.5 1

0 0.5 1

0 0.5 1

0

4

Detuning (MHz)

8 0 0.5 1 Rydberg probability

a = 5.74 μm apart, which results in a nearest-neighbour interaction of Vi,i+1 = 2π × 24 MHz and leads to Z2 order whereby every other atom is excited to the Rydberg state |r〉. The bar plot on the right displays the
final, position-dependent Rydberg probability (error bars denote 68% confidence intervals). The configuration in the middle panel (a = 3.57 μm, Vi,i+1 = 2π × 414.3 MHz) results in Z3 order and the top panel (a = 2.87 μm, Vi,i+1 = 2π × 1,536 MHz) in Z4 order. For each configuration, we show a single-shot fluorescence image before (left) and after (right) the
pulse. Red circles highlight missing atoms, which are attributed to Rydberg
excitations.

error denotes the 68% confidence interval). When corrected for the known detection infidelity, we find that the desired many-body state is reached with probability P = 77(6)%.
To investigate the way in which the preparation fidelity depends on system size, we perform detuning sweeps on arrays of various sizes

Ω/2π (MHz)

Δ/2π (MHz)

a 20

2

0

1

b

–20 1

0

0.75 1 2 3 4 5 6 7

Rydberg probability

0.50

0.25

State probability

0

c

1

0.75

0.50

|ggggggg〉 |rgrgrgr〉 |rgrgrgg〉 |rgrgggr〉 |rgggggr〉

|rggrggr〉 |rgggrgr〉

0.25

0

0

1

2

3

Time, tstop (μs)

Figure 3 | Comparison with a fully coherent simulation. a, The laser driving consists of a square-shaped pulse Ω(t) (blue) with a detuning Δ(t) (red) that is chirped from negative to positive values. b, The data show the time evolution of the Rydberg excitation probability for each atom in a 7-atom cluster (coloured points), obtained by varying the stopping time tstop of the laser-excitation pulse Ω(t). The corresponding curves are theoretical single-atom trajectories obtained from an exact simula-
tion of quantum dynamics with equation (1), the functional form of Δ(t) and Ω(t) used in the experiment, and finite detection fidelity. c, Evolution of the seven most probable many-body states (data). The target state is reached with 54(4)% probability (77(6)% when corrected for finite detection fidelity). Solid lines are theoretical (simulated) many-body trajectories. Error bars in b and c denote 68% confidence intervals.

(Fig. 4a). We find that the probability of observing the system in the many-body ground state at the end of the sweep decreases as the system size is increased. However, even at system sizes as large as 51 atoms, the perfectly ordered crystalline many-body state is obtained with P = 0.11(2)% (P = 0.9(2)% when corrected for detection fidelity). These probabilities compare favourably with those measured previously for smaller systems7,34 (see also Extended Data Fig. 5) and are remarkably large in vi-
ew of the exponentially large, 251-dimensional Hilbert space of the system. Furthermore, we find that the state with perfect Z2 order is by far the most commonly observed many-body state (Fig. 4b). The observations of perfectly ordered states resulting from the dynamical evolution across the phase transition indicate that a substantial degree of quantum coherence is preserved in our 51-atom system over the entire evolution time.

Quantum dynamics across a phase transition We next present a detailed study of the transition into the Z2 phase in an array of 51 atoms, which allows us to minimize edge effects and study
the properties of the bulk. We first focus on analysing the atomic states
that result from a slow sweep of the laser detuning across the resonance,
as described in the previous section (Fig. 5). In single instances of the

Ground-state probability Number of states

a 100

b 104

10–1

103

10–2

Measured

10–3

Corrected

102 |r1g2r3…r49g50r51〉
101 100

0

20

40

System size

0

10

20

Number of occurences

Figure 4 | Scaling behaviour. a, Preparation fidelity of the crystalline ground state as a function of cluster size. The red circles are the measured values and the blue circles are corrected for finite detection fidelity (Methods). Error bars denote 68% confidence intervals. b, Number of observed many-body states per number of occurrences out of 18,439 experimental realizations in a 51-atom cluster. The most frequently occurring state, |r1g2r3…r49g50r51〉, is the ground state of the many-body Hami-
ltonian.

3 0 n o v e m b e r 2 0 1 7 | VO L 5 5 1 | N A T U RE | 5 8 1 © 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

RESEARCH Article
a

Domain-wall density Probability Position, j gi(j2)

b1 0.5 0 –15

Mean Variance MPS

c 0.3 0.2 0.1

d Measured

0 Detuning (MHz)

0 0.3 0 0.2

8

16 Corrected24

Thermal

0.1

0

15

0

8

16

24

Number of domain walls

51 41 31 21 11
1 1 11 21 31 41 51 Position, i

0.15 0 –0.15

Figure 5 | Quantifying Z2 order in a 51-atom array after a slow detuning sweep. a, Single-shot fluorescence images of a 51-atom array before applying the adiabatic pulse (top row) and after the pulse (bottom three rows correspond to three separate instances). Red circles mark missing atoms, which are attributed to Rydberg excitations. Domain walls are identified as either two neighbouring atoms in the same state or a groundstate atom at the edge of the array (Methods), and are indicated with blue -
ellipses. Long Z2-ordered chains between domain walls are observed. b, Blue circles show the mean domain-wall density as a function of detuning during the sweep. Error bars show the standard error of the mean and are smaller than the marker size. The red circles are the corresponding variances, and the error bars represent one standard deviation. The onset of the phase transition is indicated by a decrease in the domain-wall

density and a peak in the variance (see main text for details). Each point is

obtained from about 1,000 realizations. The solid blue curve is a fully

coherent matrix product state (MPS) simulation without free parameters

(bond dimension D = 256), taking measurement fidelities into account.

c, Domain-wall number distribution for Δ = 2π × 14 MHz, obtained from

18,439 experimental realizations (blue bars, top). Error bars indicate 68%

confidence intervals. Owing to the boundary conditions, only even

numbers of domain walls appear (Methods). Green bars (bottom) show

the distribution obtained by correcting for finite detection fidelity using a

maximum-likelihood method (Methods), which results in an average of

5.4 domain walls; red bars show the distribution of a thermal state with the

same mean domain-wall density (Methods). d, Measured correlation

function

g

(2) ij

(equation

(2))

in

the

Z2

phase.

experiment, after such a slowly changing laser pulse, we observe long ordered chains where the atomic states alternate between the Rydberg and ground states. These ordered domains can be separated by domain walls that consist of two neighbouring atoms in the same electronic state (Fig. 5a)35. These features cannot be observed in the average excitation probability of the bulk (see Extended Data Fig. 6a).
The domain-wall density can be used to quantify the transition from the disordered phase to the ordered Z2 phase as a function of detuning Δ. As the system enters the Z2 phase, ordered domains grow in size, leading to a substantial reduction in the domain-wall density (blue points in Fig. 5b). Consistent with expectations for an Ising-type second-order quantum phase transition35, we observe domains of fluctuating length close to the transition point between the two phases, which is reflected by a -
pronounced peak in the variance of the domain-wall density. Consistent with predictions from finite-size scaling analysis30,36, this peak is shifted towards positive values of Δ/Ω. The measured position of the peak is Δ ≈ 0.5Ω. The observed domain-wall density is in excellent agreement with fully coherent simulations of the quantum dynamics based on 51-atom matrix product states (blue line in Fig. 5b); however, these simulations underestimate the variance at the phase transition (see Extended Data-
 Fig. 6b).
At the end of the sweep, deep in the Z2 phase (Δ/Ω 1) we can neglect Ω so that the Hamiltonian in equation (1) becomes essentially classical. In this regime, the measured domain-wall number distribution enables us to infer directly the statistics of excitations that are created when crossing the phase transition. From 18,439 experimental realizations we obtain the distribution depicted in Fig. 5c with an average of 9.01(2) domain walls. From a maximum-likelihood estimation we obtain the distributi-
on corrected for detection fidelity (see Extended Data Fig. 7), which corresponds to a state that has on ­average 5.4 domain walls. These domain walls are ­probably created as a result of non-adiabatic transitions from the ground state when crossing the phase transition37, where the energy gap depends on the system size (and scales as 1/N)36. In addition, the preparation fidelity is limited by spontaneous emission during the laser pulse (an average of 1.1 photons are scattered per microsecond for -
the entire array; see Methods).

To further characterize the Z2-ordered state that is created, we eva­ luate the correlation function

g

(2) ij

=

〈n

in

j〉

−

〈n

i〉〈n

j〉

(2)

where the average 〈…〉 is taken over experimental repetitions. We find that the correlations decay exponentially over distance with a decay length of ξ = 3.03(6) sites (see Fig. 5d and Methods; the error denotes the uncertainty in the fit). We note that this length does not characterize the system fully, as discussed below (see also Extended Data Fig. 8).
Finally, Fig. 6 demonstrates that our approach also enables the study of coherent dynamics of many-body systems far from equilibrium. Specifically, we focus on the quench dynamics of Rydberg crystals initially prepared deep in the Z2-ordered phase, as we change the detuning Δ(t) suddenly to the single-atom resonance Δ = 0 (Fig. 6a). After such a quench, we observe oscillations of many-body states between the initial crystal and a complementary crystal in which each internal atomic state is inverte-
d (Fig. 6a). Remarkably, we find that these oscillations are robust, persisting over several periods with a frequency that is largely independent of the system size. This is confirmed by measuring the dynamics of the domain-wall density, which signals the appearance and disappearance of the crystalline states, shown in Fig. 6b for arrays of 9 and 51 atoms. We find that the initial crystal repeatedly revives with a period that is slower by a factor of 1.38(1) (error denotes the uncertainty in the f-
it) compared to the Rabi-oscillation period for independent, non-interacting atoms.

Discussion
Several important features of these experimental observations should be noted. First, the Z2-ordered state cannot be characterized by a simple thermal ensemble. More specifically, if an effective temperature is
estimated on the basis of the experimentally determined, corrected
domain-wall density of 0.1, then the corresponding thermal ensemble predicts a correlation length of ξth = 4.48(3), which is significantly longer than the measured value of ξ = 3.03(6) (Methods). Such a discrepancy
is also reflected in distinct probability distributions for the number of
domain walls (Fig. 5c). These observations suggest that the system does not thermalize within the timescale of the Z2 state preparation.

5 8 2 | N A T U RE | VO L 5 5 1 | 3 0 n o v e m b e r 2 0 1 7 © 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

Article RESEARCH

Position Δ/2π (MHz) in cluster

a 20
0
–20 9

5

Entanglement entropy

Rydberg probability Time Domain-wall density

1

0

0.5

1.0

1.5

2.0

2.5

3.0

3.5

Pulse duration (μs)

1

0

0.5

1

0.5

Rydberg probability

b 0.6

0 c

Position in cluster d 0.8 NN blockade
0.6

1/R6 interactions 4
3

Domain-wall density

0.4 0.2
0 0

9 atoms 51 atoms MPS

0.4

0.8

1.2

Time after quench (μs)

|gr〉

Ω

Ωt = 2π

|gg〉

Ω

Ωt = 2π

|rg〉

0.4 0.2
0 0

2

1

0

0.4

0.8

1.2

Time after quench (μs)

Figure 6 | Emergent oscillations in many-body dynamics after sudden quench. a, A schematic of the sequence (top, showing Δ(t)), which involves adiabatic preparation and then a sudden quench to single-atom resonance. The single-atom trajectories are shown (bottom) for a 9-atom cluster, with the colour scale indicating the Rydberg probability. We observe that the initial crystal with a Rydberg excitation at every odd trap site (left inset) collapses after the quench, and a crystal with an excitation-
 at every even site builds up (middle inset). At a later time, the initial crystal revives with a frequency of Ω/1.38(1) (right inset). Error bars denote 68% confidence intervals. b, Domain-wall density after the quench. The dynamics decay slowly on a timescale of 0.88 μs. Shaded region represents

the standard error of the mean. Solid blue line is a fully coherent matrix product state (MPS) simulation with bond dimension D = 256, taking into account measurement fidelity. c, Toy model of non-interacting dimers (see main text). Blue (white) circles represent atoms in state |g〉 (|r〉). d, Numerical calculations of the dynamics after a quench, starting from an ideal 25-atom crystal, obtained from exact diagonalization. Domain-wall density (red) and the growth of entanglement entropy of the half -
chain (13 atoms; blue) are shown as functions of time after the quench. Dashed lines take into account only the nearest-neighbour (NN) blockade constraint. Solid lines correspond to the full 1/R6 interaction potential.

Even more striking is the coherent and persistent oscillation of the crystalline order after the quantum quench. With respect to the quenched Hamiltonian (Δ = 0), the energy density of our Z2-ordered state corresponds to that of an infinite-temperature ensemble within the manifold constrained by Rydberg blockade. Also, our Hamiltonian does not have any explicitly conserved quantities other than total energy. Nevertheless, the oscillations persist well beyond the natural timescale of local relaxati-
on (1/Ω) and the fastest timescale (1/Vi,i+1).
To understand these observations, we consider a simplified model in which the effect of long-range interactions is neglected, and nearestneighbour interactions are replaced by hard constraints on neigh­ bouring excitations of Rydberg states30. In this limit, the qualitative behaviour of the quench dynamics can be understood in terms of dimerized spins (Fig. 6c); owing to the blockade constraint, each dimer forms an effective spin-1 system with three states (|rg〉, |gg〉 and |gr〉), in which the reson-
ant drive ‘rotates’ the three states over the period
2 (2π/Ω), which is close to that observed experimentally. Although this qualitative picture does not take into account the strong interactions (constraints) between neighbouring dimers, it can be extended by considering a minimal variational ansatz for the many-body wave function based on matrix product states that respect all blockade constraints (Methods). Using the time-dependent variational principle, we derive analytical equations of motion and obtain a crystalline-order oscillation with a fr-
equency of about Ω/1.51 (see Extended Data Fig. 9), which is within 10% of the experimental observations. These considerations are supported by various numerical simulations. The exact numerics predict that this simplified model exhibits crystal oscillations with the observed frequency, while the entanglement entropy grows at a rate much smaller than Ω, indicating that the oscillation persists over many cycles (Fig. 6d and Methods). The addition of longrange interactions leads to a faster decay of-
 the oscillations, with a

timescale that is determined by 1/Vi,i+2, in good agreement with experi­ mental observations (Fig. 6b); the entanglement entropy also grows on this timescale (Fig. 6d, see also Extended Data Fig. 10).
Our observations and analysis therefore indicate that the decay of crystal oscillation is governed by weak next-nearest-neighbour interactions. This relatively slow thermalization is rather unexpected, because our Hamiltonian, with or without long-range interactions, is far from any known integrable system30, and features neither strong disorder nor explicitly conserved quantities38. Instead, our observations are probably associated with constrained dynamics due to Rydberg blockade and large separ-
ations of timescales (Vi,i+1 Ω Vi,i+2 ; ref. 39) that result in an effective Hilbert-space dimension that is determined by the golden ratio (1 + 5 )N /2N (refs 40, 41). The evolution within such a constrained Hilbert space gives rise to the so-called quantum dimer models, which are known to possess non-trivial dynamics42. Although these considerations provide important insights into the origin of robust emergent dynamics, our results challenge conventional theoretical concepts and so warrant furth-
er studies.
Outlook Our observations demonstrate that Rydberg excitation of arrays of neutral atoms is a promising way of studying quantum dynamics and quantum simulations in large systems. Our method can be extended and improved in several ways. Individual qubit rotations around the z axis could be implemented using light shifts associated with trap light, and a second acousto-optic deflector could be used for individual control of coherent rotations around other directions. Further improvement in coherence -
and controllability could be obtained by encoding qubits into hyperfine sublevels of the electronic ground state and using state-selective Rydberg excitation23. Implementing two-dimensional arrays could provide a path towards realizing thousands of traps. Such two-dimensional configurations could be realized by using a

3 0 n o v e m b e r 2 0 1 7 | VO L 5 5 1 | N A T U RE | 5 8 3 © 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

RESEARCH Article

two-dimensional acousto-optic deflector directly or by creating a static two-dimensional lattice of traps and sorting atoms with an indepen­dent acousto-optic deflector, as demonstrated recently25. With increased loading efficiencies43, the robust creation and control of arrays of hundreds of atoms is feasible.
Although our observations already provide insights into the physics associated with transitions into ordered phases and enable us to explore new many-body phenomena in quantum dynamics, they can be extended along several directions16. These include studies of various aspects of many-body coherence and entanglement in large arrays44, investigation of quantum critical dynamics and tests of the quantum Kibble–Zurek hypothesis37, and the exploration of stable nonequilibrium phases of matter45. Further-
 extension may enable studies of the interplay between long-range interactions and disorder, of quantum scrambling46, of topological states in spin systems47, of the dynamics of Fibonacci anyons40,41 and of chiral clock models associated with transitions into exotic Z3 and Z4 states48. Finally, we note that our approach is well suited for the realization and testing of quantum optimization algorithms49,50 with system sizes that cannot be simulated using modern classical machines.
Online Content Methods, along with any additional Extended Data display items and Source Data, are available in the online version of the paper; references unique to these sections appear only in the online paper.
received 13 July; accepted 6 October 2017.
1. Bloch, I., Dalibard, J. & Nascimbène, S. Quantum simulations with ultracold quantum gases. Nat. Phys. 8, 267–276 (2012).
2. Ladd, T. D. et al. Quantum computers. Nature 464, 45–53 (2010). 3. Monroe, C. & Kim, J. Scaling the ion trap quantum processor. Science 339,
1164–1169 (2013). 4. Devoret, M. H. & Schoelkopf, R. J. Superconducting circuits for quantum
information: an outlook. Science 339, 1169–1174 (2013). 5. Awschalom, D. D., Bassett, L. C., Dzurak, A. S., Hu, E. L. & Petta, J. R. Quantum
spintronics: engineering and manipulating atom-like spins in semiconductors. Science 339, 1174–1179 (2013). 6. Monz, T. 14-qubit entanglement: creation and coherence. Phys. Rev. Lett. 106, 130506 (2011). 7. Islam, R. et al. Emergence and frustration of magnetism with variable-range interactions in a quantum simulator. Science 340, 583–587 (2013). 8. Song, C. et al. 10-qubit entanglement and parallel logic operations with a superconducting circuit. Phys. Rev. Lett. 119, 180511 (2017). 9. Gärttner, -
M. et al. Measuring out-of-time-order correlations and multiple quantum spectra in a trapped-ion quantum magnet. Nat. Phys. 13, 781–786 (2017). 10. Kuhr, S. Quantum-gas microscopes: a new tool for cold-atom quantum simulators. Natl Sci. Rev. 3, 170–172 (2016). 11. Trotzky, S. et al. Probing the relaxation towards equilibrium in an isolated strongly correlated one-dimensional Bose gas. Nat. Phys. 8, 325–330 (2012). 12. Mazurenko, A. et al. A cold-atom Fermi-Hubbard antiferromagnet. Nature 545, 462–-
466 (2017). 13. Rønnow, T. et al. Defining and detecting quantum speedup. Science 345, 420–424 (2014). 14. McMahon, P. L. et al. A fully programmable 100-spin coherent Ising machine with all-to-all connections. Science 354, 614–617 (2016). 15. Jaksch, D. et al. Fast quantum gates for neutral atoms. Phys. Rev. Lett. 85, 2208–2211 (2000). 16. Weimer, H., Müller, M., Lesanovsky, I., Zoller, P. & Büchler, H. P. A Rydberg quantum simulator. Nat. Phys. 6, 382–388 (2010). 17. Wilk, T. et al. Entanglement-
 of two individual neutral atoms using Rydberg blockade. Phys. Rev. Lett. 104, 010502 (2010). 18. Isenhower, L. et al. Demonstration of a neutral atom controlled-NOT quantum gate. Phys. Rev. Lett. 104, 010503 (2010). 19. Saffman, M. Quantum computing with atomic qubits and Rydberg interactions: progress and challenges. J. Phys. B 49, 202001 (2016). 20. Pritchard, J. D. et al. Cooperative atom-light interaction in a blockaded Rydberg ensemble. Phys. Rev. Lett. 105, 193603 (2010). 21. Schauß, P. et -
al. Observation of spatially ordered structures in a twodimensional Rydberg gas. Nature 491, 87–91 (2012). 22. Schauß, P. et al. Crystallization in Ising quantum magnets. Science 347, 1455–1458 (2015). 23. Zeiher, J. et al. Coherent many-body spin dynamics in a long-range interacting Ising chain. Preprint at https://arxiv.org/abs/1705.08372 (2017). 24. Labuhn, H. et al. Tunable two-dimensional arrays of single Rydberg atoms for realizing quantum Ising models. Nature 534, 667–670 (2016).

25. Barredo, D., de Léséleuc, S., Lienhard, V., Lahaye, T. & Browaeys, A. An atom-by-atom assembler of defect-free arbitrary two-dimensional atomic arrays. Science 354, 1021–1023 (2016).
26. Endres, M. et al. Atom-by-atom assembly of defect-free one-dimensional cold atom arrays. Science 354, 1024–1027 (2016).
27. Kim, H. et al. In situ single-atom array synthesis using dynamic holographic optical tweezers. Nat. Commun. 7, 13317 (2016).
28. Dudin, Y. O., Li, L., Bariani, F. & Kuzmich, A. Observation of coherent many-body Rabi oscillations. Nat. Phys. 8, 790–794 (2012).
29. Zeiher, J. et al. Microscopic characterization of scalable coherent Rydberg superatoms. Phys. Rev. X 5, 031015 (2015).
30. Fendley, P., Sengupta, K. & Sachdev, S. Competing density-wave orders in a one-dimensional hard-boson model. Phys. Rev. B 69, 075106 (2004).
31. Pohl, T., Demler, E. & Lukin, M. D. Dynamical crystallization in the dipole blockade of ultracold atoms. Phys. Rev. Lett. 104, 043002 (2010).
32. Petrosyan, D., Mølmer, K. & Fleischhauer, M. On the adiabatic preparation of spatially-ordered Rydberg excitations of atoms in a one-dimensional optical lattice by laser frequency sweeps. J. Phys. B 49, 084003 (2016).
33. Schachenmayer, J., Lesanovsky, I., Micheli, A. & Daley, A. J. Dynamical crystal creation with polar molecules or Rydberg atoms in optical lattices. New J. Phys. 12, 103044 (2010).
34. Richerme, P. et al. Experimental performance of a quantum simulator: Optimizing adiabatic evolution and identifying many-body ground states. Phys. Rev. A 88, 012334 (2013).
35. Sachdev, S. Quantum Phase Transitions 2nd edn (Cambridge Univ. Press, 2009). 36. Sachdev, S., Sengupta, K. & Girvin, S. M. Mott insulators in strong electric fields.
Phys. Rev. B 66, 075128 (2002). 37. Zurek, W. H., Dorner, U. & Zoller, P. Dynamics of a quantum phase transition.
Phys. Rev. Lett. 95, 105701 (2005). 38. D’Alessio, L., Kafri, Y., Polkovnikov, A. & Rigol, M. From quantum chaos and
eigenstate thermalization to statistical mechanics and thermodynamics. Adv. Phys. 65, 239–362 (2016). 39. Abanin, D., De Roeck, W., Ho, W. W. & Huveneers, F. A rigorous theory of many-body prethermalization for periodically driven and closed quantum systems. Commun. Math. Phys. 354, 809–827 (2017). 40. Feiguin, A. et al. Interacting anyons in topological quantum liquids: the golden chain. Phys. Rev. Lett. 98, 160409 (2007). 41. Lesanovsky, I. & Katsura, H. Interacting Fibonacci anyons in a Rydberg-
 gas. Phys. Rev. A 86, 041601 (2012). 42. Moessner, R. & Raman, K. S. in Introduction to Frustrated Magnetism (eds Lacroix, C. et al.) 437–479 (Springer, 2011). 43. Lester, B. J., Luick, N., Kaufman, A. M., Reynolds, C. M. & Regal, C. A. Rapid production of uniformly filled arrays of neutral atoms. Phys. Rev. Lett. 115, 073003 (2015). 44. Pichler, H., Zhu, G., Seif, A., Zoller, P. & Hafezi, M. Measurement protocol for the entanglement spectrum of cold atoms. Phys. Rev. X 6, 041033 (2016). 45. Schi-
ulaz, M., Silva, A. & Müller, M. Dynamics in many-body localized quantum systems without disorder. Phys. Rev. B 91, 184202 (2015). 46. Swingle, B., Bentsen, G., Schleier-Smith, M. & Hayden, P. Measuring the scrambling of quantum information. Phys. Rev. A 94, 040302(R) (2016). 47. Chandran, A., Schulz, M. D. & Burnell, F. J. The eigenstate thermalization hypothesis in constrained Hilbert spaces: a case study in non-abelian anyon chains. Phys. Rev. B 94, 235122 (2016). 48. Huse, D. A. & Fisher, M. E-
. Commensurate melting, domain walls, and dislocations. Phys. Rev. B 29, 239–270 (1984). 49. Lechner, W., Hauke, P. & Zoller, P. A quantum annealing architecture with all-to-all connectivity from local interactions. Sci. Adv. 1, e1500838 (2015). 50. Farhi, E. & Harrow, A. W. Quantum supremacy through the quantum approximate optimization algorithm. Preprint at https://arxiv.org/ abs/1602.07674 (2016).
Acknowledgements We thank E. Demler, A. Chandran, S. Sachdev, A. Vishwanath, P. Zoller, P. Silvi, T. Pohl, M. Knap, M. Fleischhauer, S. Hofferberth and A. Harrow for discussions. This work was supported by NSF, CUA, ARO, and a Vannevar Bush Faculty Fellowship. H.B. acknowledges support by a Rubicon Grant of the Netherlands Organization for Scientific Research (NWO). A.O. acknowledges support by a research fellowship from the German Research Foundation (DFG). S.S. acknowledges funding from the Euro-
pean Union under the Marie Skłodowska Curie Individual Fellowship Programme H2020-MSCA-IF-2014 (project number 658253). H.P. acknowledges support by the National Science Foundation (NSF) through a grant at the Institute for Theoretical Atomic Molecular and Optical Physics (ITAMP) at Harvard University and the Smithsonian Astrophysical Observatory. H.L. acknowledges support by the National Defense Science and Engineering Graduate (NDSEG) Fellowship.
Author Contributions The experiments and data analysis were carried out by H.B., S.S., A.K., H.L., A.O., A.S.Z. and M.E. Theoretical analysis was performed by H.P. and S.C. All work was supervised by M.G., V.V. and M.D.L. All authors discussed the results and contributed to the manuscript.
Author Information Reprints and permissions information is available at www.nature.com/reprints. The authors declare no competing financial interests. Readers are welcome to comment on the online version of the paper. Publisher’s note: Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations. Correspondence and requests for materials should be addressed to M.G. (greiner@physics.harvard.edu), V.V. (vuletic@mit.edu) and M.D.L. (lukin@fas.h-
arvard.edu).

5 8 4 | N A T U RE | VO L 5 5 1 | 3 0 n o v e m b e r 2 0 1 7 © 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

Article RESEARCH

Methods
Trapping set-up and experimental sequence. Our set-up consists of a linear array of up to 101 evenly spaced optical tweezers. The tweezers are generated by feeding a multi-tone radio-frequency signal into an acousto-optic deflector (AA Opto-Electronic model DTSX-400-800.850), generating multiple deflections in the first diffraction order and focusing them into the vacuum chamber using a 0.5 numerical aperture objective (Mitutoyo G Plan Apo 50X). The beams have a wavelength of 808 nm and a waist of-
 approximately 0.9 μm, forming traps of approximate depth 1 mK.
A diagram of the experimental sequence is shown in Extended Data Fig. 1a. The traps are loaded from a magneto-optical trap, leading to individual tweezer single-atom loading probabilities of around 0.6. A fluorescence image of the array is taken, and the empty traps are turned off; the filled traps are rearranged to bring the atoms into their preprogrammed positions26. After the rearrangement procedure, another image of the array is taken to preselect on instances in which the initial configuratio-
n is defect-free. After taking the second image, we apply a magnetic field of about 1.5 G along the axis of the array and then optically pump all atoms into the |F = 2, mF = −2〉 state using a σ−-polarized beam resonant to the |5S1/2, F = 2〉 → |5P3/2, F = 2〉 transition. We then turn off the traps, pulse the Rydberg lasers on a timescale of a few microseconds, then turn the traps back on to recapture the atoms that are in the ground state |g〉 while pushing away the atoms in the Rydberg state |r〉, an-
d finally take a third image. Because of their long lifetime, most of the Rydberg atoms escape from the trapping region before they decay back to the ground state. This provides a convenient way to detect them as missing atoms on the third image (with finite detection fidelity discussed in Methods section ‘State detection fidelity’). The entire experimental sequence, from magneto-optical trap formation to the third image, takes approximately 250 ms. Rydberg laser set-up. To introduce interactions -
within the array, we couple the atomic ground state |g〉 = |5S1/2, F = 2, mF = −2〉 to a target Rydberg state |r〉 = |70S1/2, mJ = −1/2〉. The van der Waals interaction between two 87Rb 70S atoms follows a 1/R6 power law and is of the order of 1 MHz at 10 μm (ref. 51), making it the dominant energy scale in our system for up to several lattice sites.
The coupling between states |g〉 and |r〉 is induced by a two-photon transition, with |6P3/2〉 as the intermediate level. We drive the transition between |g〉 and |6P3/2〉 with a blue 420-nm laser (MOGLabs cat-eye diode laser CEL002) and the transition between |6P3/2〉 and |r〉 with an infrared 1,013-nm laser injecting a tapered amplifier (MOGLabs CEL002 and MOA002). The detuning δ of the blue laser from the |g〉 ↔ |6P3/2〉 transition is chosen to be much larger than the single-photon Rabi frequencies (typ-
ically δ ≈ 2π × 560 MHz (Ω B, Ω R) ≈ 2π × (60, 36) MHz, where ΩB and ΩR are the single-photon Rabi frequencies for the blue and red lasers, respectively), such that the dynamics can be safely reduced to a two-level transition |g〉 ↔ |r〉 driven by an effective Rabi frequency Ω = ΩBΩR/(2δ) ≈ 2π × 2 MHz.
The blue and infrared beams are applied counter-propagating to one another along the axis of the array. An external magnetic field is applied in addition, and the beams are circularly polarized so that blue laser drives the σ− transition between |g〉 and |e〉 = |6P3/2, F = 3, mF = −3〉, and the red laser drives the σ+ transition between |e〉 and |r〉. Such a stretched configuration minimizes the probability of exciting unwanted states such as |70S1/2, mJ = +1/2〉. The two beams are focused to waists of -
20 μm (blue) and 30 μm (infrared) at the position of the atoms, to get high intensity while still being able to couple all atoms in the array homogeneously (see Methods section ‘Coherence limitations’).
The Rydberg lasers interact with the atoms during one experimental cycle for a few microseconds. To maintain laser coherence, the line width must be much smaller than a few tens of kilohertz. To achieve this, we use a fast Pound–Drever– Hall scheme to lock our Rydberg lasers to an ultralow-expansion reference cavity (ATF-6010-4 from Stable Laser Systems, with a finesse of ≥4,000 at both 420 nm and 1,013 nm). The optical set-up used for this purpose is sketched in Extended Data Fig. 1b. A fraction -
of the beam from the blue laser first goes through a phase modulator (Newport 4005) driven by an 18-MHz sinusoidal signal, before being coupled to a longitudinal mode of the reference cavity. The reflected beam from the cavity is sent to a fast photodetector (Thorlabs PDA8A), whose signal is demodulated and low-pass-filtered to create an error signal which is fed into a high-bandwidth servo controller (Vescent D2-125). The feedback signal from the servo controller is applied to the current of the -
laser diode using a dedicated fast-input port on the laser headboard. The measured overall bandwidth of the lock is of the order of 1 MHz. The other part of the blue laser beam goes through an acousto-optic modulator (IntraAction ATM-1002DA23), whose first diffraction order is used to excite atoms, providing frequency and amplitude control for the Rydberg pulses.
A similar scheme is implemented for the 1,013-nm laser, with the notable difference that the beam used for the frequency lock first goes through a high-bandwidth (>5 GHz) fibre-based electro-optic modulator (EOSpace PM-0S5-05-PFAPFA-1010/1030). Rather than the carrier, we use a first-order sideband from the

electro-optic modulator for the lock, which makes it possible to tune the frequency

of the red laser over a full free-spectral range of the reference cavity (1.5 GHz)

by tuning the driving frequency of the high-bandwidth electro-optic modulator.

Following refs 52 and 53, we estimate that the contribution to the line width of the

laser of the noise within the servo loop relative to the cavity is less than 500 Hz.

Measuring interaction strengths. We measure experimentally the 70S → 70S van

der Waals interactions between atom pairs separated by 5.74 μm (identical to the

spacing used for observing the Z2-ordered phase) to confirm our estimate of inter-

action strengths and to provide independent (and more precise) estimates of the

exact atom spacing (Extended Data Fig. 4). At this spacing we expect the interac-

tion V to be about 2π × 20 MHz. We apply our two laser fields (420 nm and

1,013 nm) to couple each atom to the Rydberg state, with two-photon detuning Δ.

For Δ = 0, we observe resonant coupling from |g, g〉 to|W〉 = (|g, r〉 + |r, g〉)/ 2,

as expected for the blockaded regime in which Ω = 2π × 2 V. However, there

is an additional resonance at Δ = V/2 in which we drive a four-photon process

from |g, g〉 to |r, r〉 through the off-resonant intermediate state |W〉. Using spec-

troscopy, we determine this four-photon resonance to be at Δ ≈ 2π × 12.2 MHz,

from which we calculate V = 2Δ = 2π × 24.4 MHz. This is consistent with inde-

pendent measurements of our trap spacing of approximately 5.7 μm, from which

we additionally calibrate the spacing used in other arrangements (3.57 μm for Z3 order and 2.87 μm for Z4 order).

Timing limits imposed by turning off traps. Atoms can be lost unintentionally

owing to motion away from the trapping region during the Rydberg pulse when

the traps are off. This process depends on the atomic temperature and for how

long we turn off the traps. In particular, with our measured temperature of 12 μK

(Extended Data Fig. 2), the loss due to atomic motion for trap-off times of <4 μs

is at most only about 0.1%. For longer trap-off times, we see loss of up to 2% at 6 μs

and 9% at 10 μs. To cap this infidelity at 3%, all experiments described here operate

with trap-off times of ≤7 μs.

State detection fidelity. Each atom is identified as being in |g〉 (or |r〉) at the end

of the Rydberg pulse by whether it is (or is not) present in the third fluorescence

image. Detection infidelity arises from accidental loss of atoms in |g〉 or accidental

recapture of atoms in |r〉. For an atom in state |g〉, detection fidelity is set by the

finite trap lifetime (which causes baseline loss of 1%) and motion due to turning

the traps off (≤3% for all experiments shown, see Methods section ‘Timing limits

imposed by turning off traps’). For the 7-atom data shown in Fig. 3 and the 51-atom

data shown in Figs 4 and 5, we measured ground-state detection fidelities of 98%

and 99%, respectively.

For an atom in state |r〉, the optical tweezer yields an anti-trapping potential, but

there is a finite probability that the atom will decay back to the ground state and

be recaptured by the tweezer before it can escape the trapping region. We quan-

tify this probability by measuring Rabi oscillations between |g〉 and |r〉 (Extended

Data Fig. 3) and extracting the maximum amplitude of the oscillation signal.

After accounting for the loss of ground-state atoms as an offset to the signal, we

obtain a typical effective detection fidelity of 93% for the |70S1/2〉 Rydberg state.

Furthermore, we observe a reduced detection fidelity at lower-lying Rydberg states,

which is consistent with the dependence of the Rydberg lifetime on the principal quantum number54.

Correcting for finite detection fidelity. The number of domain walls is a metric

for the quality of preparing the desired crystal state. Boundary conditions make it

favourable to excite the atoms at the edges. Therefore, we define a domain wall as

any instance where two neighbouring atoms are found in the same state or where

an atom at the edge of the array is found in state |g〉. In systems composed of an

odd number of particles, this definition sets the parity of domain walls to be even.

The appearance of domain walls can arise from non-adiabaticity across the

phase transition, or from scattering from the intermediate 6P state, imperfect

optical pumping, atom loss or other processes (see Methods section ‘Coherence

limitations’). However, the observed number of domain walls is increased arti-

ficially owing to detection infidelity; any atom within a crystal domain that is

misidentified increases the number of measured domain walls by two. For this

reason, we use a maximum-likelihood routine to estimate the parent distribution,

which is the distribution of domain walls in the prepared state that best predicts

the measured distribution. We use two methods to correct for detection infidelity,

depending on whether we are interested in only the probability of generating the

many-body ground state or in the full probability distribution of the number of

domain walls.

Correcting detection infidelity. Many-body ground-state preparation. Having pre-

pared the many-body ground state, the probability of correctly observing it depends

on the measurement fidelity for atoms in the electronic ground state fg, the meas-

urement fidelity for atoms in the Rydberg state fr, and the size of the system N.

Assuming a perfect crystal state in the Z2 phase, the total number of atoms in the

Rydberg state is nr = (N + 1)/2 and in the ground state is ng = (N − 1)/2. The proba­

bility

of

measuring

the

perfect

state

is

then

pm

=

f

nr r

×

f

ng g.

Therefore,

if

we

observe

© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

RESEARCH Article

the ground state with probability pexp, the probability of actually preparing this state is inferred to be pexp/pm. The blue data points in Fig. 4a are calculated this way. Maximum-likelihood state reconstruction. To correct for detection fidelity in the
entire distribution of domain walls, we use a maximum-likelihood protocol. For
this purpose, we assume that the density of domain walls is low, such that the
probability of preparing two overlapping domain walls, meaning three consecu-
tive atoms in the same state, is negligibly small. Under this assumption, misiden-
tifying an atom within a domain wall shifts its location, but does not change the
total number. However, misidentification of an atom within a crystal domain
increases the number of domain walls by two. For any prepared state with a num-
ber of domain walls ni, we calculate the probability of measuring nf domain walls, p(nf | ni). We construct a matrix M, which transforms an initial probability distribution for the number of domain walls, Wi = (p(ni = 0), p(ni = 2), …), into the expected observed distribution Wf = MWi, where Mkl = p(nf = k | ni = l). Given an experimentally observed distribution of domain walls Wo and a test initial distribution Wi′, we can calculate the difference vector between them: D′ = Wo − Wf′ = Wo − MWi′.
Using D′ and the 68% confidence intervals of the measured data σ, obtained via an approximate parametric bootstrap method55, we define a cost function

C(Wo,

Wi′)

=

∑
k



Dk′ σk

2

where the sum is taken over the elements of the vectors. We find the most likely parent distribution Wi by minimizing the cost function over the different possible Wi′, under the constraints that that every element is between 0 and 1 and that the sum of the elements is 1. For this purpose, we use a sequential least-square programming routine. To reduce biases, we use a random vector as a starting point for the minimization procedure. We checked that repeating the procedure several times with diffe-
rent initial vectors converged to the same parent distribution and that the distribution of domain walls predicted by this parent distribution was in excellent agreement with the measured distribution. The result of such a procedure on the dataset used for Fig. 5c is shown in Extended Data Fig. 7. Adiabatic pulse optimization. To prepare the ordered phases, we use frequencychirped pulses by varying the two-photon detuning Δ across the bare |g〉 ↔ |r〉 resonance, corresponding to Δ = 0. To perform th-
ese sweeps, we drive a highmodulation-bandwidth voltage-controlled oscillator (Mini-Circuits ZX95850W-S+) according to either cubic or tangent functional forms

V(t)cubic = a(t − t0)3 + b(t − t0) + c|Δmin≤Δ≤Δmax

(3)

V(t)tangent = atan(b(t − t0)) + c|Δmin≤Δ≤Δmax

with programmable parameters a, b and c. The output from this voltage-controlled oscillator is mixed (Mini-Circuits ZFM-2-S+) with a 750-MHz source to generate the difference frequency, which is used to drive the acousto-optic modulator in the 420-nm-light path. The detuning Δ is set to truncate at minimum and maximum values of Δmin and Δmax, respectively. The tangent adiabatic sweep was used for datasets with 51 atoms (Figs 4 and 5) owing to improved performance, whereas the cubic form was used f-
or all smaller system sizes and for the data on crystal dynamics (Fig. 6).
At the end of the sweep, the number of domain walls in the crystal provides a metric for the quality of the crystal preparation. All parameters in equation (3) are iteratively optimized to minimize the number of domain walls, or equivalently, to maximize the crystal preparation fidelity. The optimization starts with the offset c, followed by the parameter b, the maximum and minimum detunings Δmin/max, and finally the parameter a. Repeated optimization of these parameters often leads to better crys-
tal preparation fidelities56.
After passing through the acousto-optic modulator, the 420-nm light is coupled into a fibre. The coupling is optimized for the voltage-controlled oscillator frequency at which the light is resonant with the |g〉 → |r〉 transition (fopt), and decreases as the voltage-controlled oscillator frequency deviates from fopt. The power throughout all frequency sweeps is ≥75% of the power at fopt. Coherence limitations. When sweeping into the crystalline phase, the control parameter Δ(t) must be varied slowly-
 enough that the adiabaticity criterion is sufficiently met. However, for long pulses, additional technical errors may become limiting. Here, we summarize some key limitations. State preparation fidelity. For all data analysed, we preselect defect-free atom arrays. The preparation fidelity is therefore given by the probability that each atom in the array is still present for the Rydberg pulse and that it is prepared in the correct magnetic sublevel: |5S1/2, F = 2, mF = −2〉. Including both factors,-
 we estimate that atoms are present and in the correct magnetic sublevel with fidelity f > 98%. For experiments with 51 atoms, this leads to at most about one atom prepared incorrectly.

Spontaneous emission. The 70S Rydberg state has an estimated lifetime of 150 μs (including blackbody radiation at 300 K)54. In addition, for the typical i­ntermediate detuning of Δ ≈ 2π × 560 MHz and the single-photon infrared and blue Rabi ­frequencies of (ΩR, ΩB) ≈ 2π × (36, 60) MHz, spontaneous emission from the intermediate state occurs on a timescale of 40 μs for the ground state, and introduces a combined effective lifetime of 50 μs for the Rydberg state. This leads to an average scattering -
rate of 2π × 3.6 kHz. Rabi frequency homogeneity. We aim to align our beams to globally address all trapped atoms with a uniform Rabi frequency |Ωi| = Ω. Experimentally, we achieve homogeneity up to differences of about 3% (Extended Data Fig. 3b). Intensity fluctuations. Primarily because of pointing instability, the global Rabi frequency fluctuates by small amounts from shot to shot of the experiment. To reduce slow drifts of the beams, we use a 1:1.25 telescope to image on a camera their positio-
n on the plane of the atoms and feedback to stabilize their position to a target every 500 repetitions (about 2 min). Rydberg laser noise. The coherence properties of the Rydberg lasers over typical experimental times are probed by measurements on single, non-interacting atoms. In particular, spin echo measurements between |g〉 and |r〉 show no visible decay of coherence over 5 μs (Extended Data Fig. 3c). This measurement, along with the measured noise contribution from the laser lock of <0.5 kHz (s-
ee Methods section ‘Rydberg laser set-up’), indicates that the line widths of the laser are sufficiently narrow. Additional phase noise is introduced by the laser lock around the lock bandwidth of about 1 MHz. This phase noise may cause weak additional deco­ herence on the adiabatic sweep experiments shown in the main text. Finite atomic temperature. Our finite atomic temperature of approximately 12 μK introduces random Doppler shifts (of about 2π × 50 kHz) and fluctuations in the atomic positions-
 (about 120 nm radially, 600 nm longitudinally) for each atom in each cycle of the experiment. The Doppler shift is very small in magnitude compared to the single-atom Rabi frequency Ω. The position fluctuations can introduce noticeable fluctuations in the interaction energy between a pair of atoms from shot to shot. As an example, at our chosen lattice spacing of 5.9 μm, we calculate an interaction energy of 2π × 24 MHz. However, if the distance fluctuates by about 21/2 × 120 nm ≈ 170 nm, then th-
e actual interaction energy can range from 2π × 21 MHz to 2π × 29 MHz. The longitudinal position fluctuations add in quadrature, so they contribute less to fluctuations in distance. Electric and magnetic fields. We observed that the Rydberg resonance can drift over time, especially for states with high principal quantum number n, which we attribute to uncontrolled fluctuations in the electric field. We can reduce these fluctuations by shining 365-nm ultraviolet light on the glass cell in between e-
xperi­ mental sequences and during the magneto-optical trap loading period, which stabilizes the charge environment on the glass cell surface. Although the fluctuations for states n ≥ 100 are still substantial, they become negligible (<100 kHz) for our chosen state n = 70.
The energy shifts of the initial state |g〉 and final state |r〉 with magnetic fields are identical. Differential shifts of the intermediate state are very small compared to the detunings of the two laser beams from the 6P3/2 state. Therefore, we do not expect magnetic fields to play a substantial part in fluctuations between experimental runs.
We note that the use of deterministically prepared arrays allows us to optimize the coherence properties efficiently. For example, for collective Rabi oscillations of fully blockaded groups of up to three atoms, we observe an improvement in the product Ωτd of about an order of magnitude compared to previous work24, where τd is the decay time of the Rabi oscillations. In addition, the relatively high fide­ lity in the preparation of Z2-ordered states with 51 atoms (Extended Data Fig. 5) indicates t-
hat a substantial amount of coherence is preserved over the entire evolution. These considerations indicate that our approach is promising for nearterm coherent experiments with large-scale systems57. Comparison with a classical thermal state. To gain some insight into the states obtained from our preparation protocol (Fig. 3a), we provide a quantitative comparison between experimentally measured quantities and those computed from a thermal ensemble. In particular, we note that, deep in the ordere-
d phase (Δ/Ω 1), the coherent coupling of the ground state to the Rydberg state can be neglected owing to strong energetic suppression and that the effective Hamiltonian becomes diagonal in the measurement basis. This allows us to calculate all properties of a thermal state even for systems of 51 atoms by computing the partition function explicitly via the transfer matrix method58. Also, we may consider the interactions only up to next-nearest neighbours because the coupling strengths for longer d-
istances are weak compared to the maximum timescale that is accessible in our experiments. To this end, we consider the Hamiltonian

N

N−1

N−2

Hcl = − Δ ∑ ni + ∑ V1nini+1 + ∑ V2nini+2

i=1

i=1

i=1

© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

Article RESEARCH

The eigenstates of this Hamiltonian are simply 2N classical configurations, where each atom is in either |g〉 or |r〉. We label these configurations by a length-N vector i = (i1, i2, …, iN) (in ∈ {g, r}) and denote their energy by Ei. In a thermal ensemble ρ = exp(−βHcl)/Z, with Z ≡ tr[exp(−βHcl)] and inverse temperature β, the proba­ bility of finding a particular configuration i is pi = exp(−βEi)/Z. Because Ei can be written as a sum of local terms involving interactions only up to a range of two,-
 the partition sum can be evaluated using a standard transfer matrix of size 4 × 4.
Moreover, using this approach, we can evaluate all measurable quantities for the thermal ensemble, including the average number of domain walls 〈D〉 = tr(Dρ),
where

N−1
D = ∑ [nini+1 + (1 − ni)(1 − ni+1)] + (1 − n1) + (1 − nN ) i=1
is an operator that counts the number of domain walls, the correlation function

∑ g (2)(d) =

1 N−d

N−d i=1

g

(2) i,i+

d

and even the full counting statistics for the domain-wall distribution in the state ρ. In particular, the probability of measuring exactly n domain walls pn = tr(Pnρ) can be computed from a Fourier transform of the Kronecker delta function

Pn ≡

δD,n =

N

1 +

2

N +1
∑
k=0

 expi

2π N+

k(n − 2

 D)

with n = 0, 1, 2, …, N + 1. We can include the effect of imperfect detections in this formalism directly.
To that end, we denote the expectation value with measurement infidelities of an observable O as

〈〈O〉〉 = ∑ OiΛi,jpj

(4)

i,j

where Oi is the value of the observable in state i and Λi,j is the probability of detecting state i when the system is in state j, accounting for finite detection fidelity. Assuming detection errors occur independently from one another, we have

∏ Λi,j = λin,jn
n
where λg,g = fg is the probability of correctly detecting an atom in the ground state, λr,r = fr is the probability of correctly detecting an atom in the Rydberg state, and λr,g = 1 − λg,g and λg,r = 1 − λr,r. Equation (4) can be evaluated using a 16 × 16 transfer matrix for any observables of interest.
To obtain a quantitative comparison with our experiments, we determine the inverse temperature β in such a way that the average number of domain walls, including the effect of imperfect detections, matches the experimentally determined value, 〈〈D〉〉 = 9.01(2). For Δ = 2π × 14 MHz, V1 = 2π × 24 MHz and V2 = 2π × 0.38 MHz, this leads to β = 3.44(1)/Δ or equivalently to an entropy per atom of s/kB = 0.286(1) (Extended Data Fig. 8a, b). Because β characterizes the thermal state completely, we can extra-
ct the corresponding domain-wall distribution (Extended Data Fig. 8c) and the correlation function (Extended Data Fig. 8d) as described above. We find that the correlation length in the corresponding thermal state is ξth = 4.48(3), which is significantly longer than the measured correlation length ξ = 3.03(6), from which we deduce that the experimentally prepared state is not thermal. Dynamics after sudden quench. To understand the dynamics of the Z2 Rydberg crystal after quenching the detuning to-
 Δ = 0, we first consider a simplified model, in which interactions beyond nearest-neighbour are neglected. In addition, we replace the nearest-neighbour interactions with the hard constraint that two neighbouring atoms cannot be excited at the same time. Such an approximation is well controlled in the limit Vi,i+1 Ω, as in the case of our experiments, for a time exponentially long in Vi,i+1/Ω (ref. 39). In this limit, the Hamiltonian is approximated by

∑ Hc =

i

Pig−1

Ω 2

σxi

−

ΔPriPgi+1

where Pgi = |gi〉〈gi| and Pri = |ri〉〈ri|. We identify Pgi=0 = Pgi=N +1 = 1 at the boun­ daries. Within this approximation, the relevant Hilbert space consists of only states with no neighbouring atoms in the Rydberg state; that is, Pri Pir+1 = 0. The dimension of this constrained Hilbert space is still exponentially large and grows as φN, where φ = 1.618… is the golden ratio.

In the simplest approximation, we can treat the array of atoms as a collection of
independent dimers, |Ψ(t)〉 = ⊗i |φ(t)〉2i−1,2i, where for each pair of atoms only three states are allowed owing to the blockade constraint: |r, g〉, |g, g〉 and |g, r〉. The
dynamics of each pair with initial state |φ(0)〉 = |r,g〉 is then

|φ(t)〉 = 1 [1 + cos(Ωt/ 2 )]|r, g〉 + i sin(Ωt/ 2 )|g, g〉

2

2

+ 1 [1 − cos(Ωt/ 2 )]|g, r〉 2

This dimer model predicts that each atom flips its state with respect to its initial configuration after a time τ = 2 π/Ω. The corresponding oscillations between two complementary crystal configurations are thus a factor of 21/2 slower than an independent spin model would predict, which is qualitatively consistent with the experimental observations. We note that this dimerized ansatz does not satisfy the constraint Pri Pir+1 = 0 between two neighbouring dimers, which is an artefact that originates-
 from the artificial partitioning of the array into non-interacting dimers.
To go beyond this approximation, we consider an ansatz for the many-body wavefunction that treats each atom on an equal footing. The simplest such wavefunction that also allows for non-trivial entanglement between the atoms can be written as a matrix product state with bond dimension 2 (ref. 59). In particular we consider a manifold of states of the form

|Ψ({θn})〉 = ∑ v LA(θ1)i1A(θ2)i2
{in}
with matrices

A(θN)iN v R|i1, i2, …, iN 〉

A(θn) g

=

cos(θn)  1

0 0

,

A(θn)r

=

0 0

i sin(θn) 0 

and boundary vectors vL = (1, 1) and vR = (1, 0)T. Here, the indices in ∈ {g, r} enumerate the state of the nth atom. This manifold satisfies the constraint that no two
neighbouring atoms are excited simultaneously. The many-body state within this subspace is completely specified by the N parameters θn ∈ [0, 2π]. In particular, it enables the initial crystal state to be represented by θ2n−1 = π/2 for atoms on odd sites and θ2n = 0 for atoms on even sites, as well as its inverted version, θ2n−1 = 0 for odd and θ2n = π/2 for even sites. Using the time-dependent variational principle60, we derive equations of motion for the wavefunction within this manifold. For an -
infinite system with a staggered initial state θn+2 = θn, such as the Z2-ordered state, the wavefunction is at all times described by two parameters: θa = θ2n−1 and θb = θ2n for even and odd sites. The corresponding nonlinear, coupled equations of motion are

θa

=

−

1 2

sec(θb)[sin(θa)cos2(θa)sin(θb)

+

cos 2(θ b)]

θb

=

−

1 2

sec(θa)[sin(θ b)cos 2(θ b)sin(θa)

+

cos2(θa)]

(5)

A numerical solution of these variational equations for the crystalline initial state predicts periodic motion with a frequency of approximately Ω/1.51 (Extended Data Fig. 9), with the many-body wavefunction oscillating between two staggered configurations. Decay of the oscillations and growth of entanglement after the quantum quench. To obtain more insight into the dynamics of our system beyond these variational models, we use exact numerical simulations to integrate the many-body Schrödinger equ-
ation. In particular, we focus on the decay of oscillations and the growth of entanglement entropy in our system. Owing to the exponentially growing Hilbert space, this method is limited to relatively small system sizes. We make use of the constrained size of the Hilbert space (blockade of nearest-neighbouring excitations of Rydberg states) and propagate the state vector of up to 25 spins using a Krylov subspace projection method. In Extended Data Fig. 10a we show the dynamics of the domain-wall d-
ensity under the time evolution of the constrained Hamiltonian Hc with Ω = 2π × 2 MHz and Δ = 0. We consider two different initial states: the disordered state in which each atom is initially prepared in the ground state |g〉 and the perfect crystalline state |r, g, r, g, …〉. In both cases, the energy density corresponds to that of an infinite-temperature thermal ensemble in the constrained subspace with respect to ℋc.
For the disordered initial state, the domain-wall density relaxes quickly to a steady-state value. In contrast, if the system is initialized in the perfect crystalline state, the domain-wall density oscillates for long times and decays at a rate much slower than the oscillation period. We confirmed numerically that this initial decay time is independent of the system size. We further note that for every system size accessible in our numerical method, the domain-wall density does not relax to a ste-
ady-state value even at very long times, but continues to oscillate

© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

RESEARCH Article

with a reduced amplitude. Moreover, whereas the disordered initial state relaxes to an average domain-wall density that is consistent with a thermal state of infinite temperature corresponding to the energy density of the initial state, this is clearly not the case for the crystalline initial state. This qualitatively distinct behaviour for two different initial states is also reflected in the growth of entanglement entropy after the quench (Extended Data Fig. 10c, dashed lines). Although in both -
cases the entanglement entropy grows linearly initially, the rate of growth is much lower for the crystalline initial state. Moreover, unlike the case of the disordered initial state, in which the entanglement entropy saturates quickly to its maximum value (limited by the finite system size and the constrained Hilbert space), for the crystalline initial state the entanglement entropy does not seem to approach the same value.
To understand the influence of the 1/R6-decaying interactions, we show the corresponding dynamics and entanglement growth in Extended Data Fig. 10b, c (solid lines). Numerically, we treat the strong nearest-neighbour interactions perturbatively—by adiabatic elimination of simultaneous excitation of neighbouring Rydberg states—and the weak interactions beyond nearest neighbours exactly. For the disordered initial state, we find that the dynamics of the domainwall density and the entanglement growth-
 remain similar to the previous case, in which long-range interactions are neglected; in this case, the thermalization time is barely affected. In contrast, for the crystalline initial state, the oscillations decay much faster when next-nearest-neighbour interactions are included. We therefore attribute the thermalization in this case to interactions beyond the nearest-neighbour blockade constraint. From the growth of the entanglement entropy we see that the crystalline initial state still thermal-
izes more slowly than the disordered initial state. Numerical time evolution using a matrix product state algorithm. The numerical data presented in Figs 5b and 6b were obtained by simulating the evolution of the 51-atom array during the sweep across the phase transition and the subsequent sudden quench using a matrix product state algorithm with bond dimension D = 256. We simulate the entire preparation protocol to generate the Rydberg crystal (Fig. 5b) and use the resulting state as an initial s-
tate for the time evolution after the sudden quench. To this end, we use a time-evolving block decimation algorithm61,62, with a Suzuki–Trotter splitting of the Hamiltonian to update the state. The time step used in this Trotterization is ΩΔt = 0.004. We take into account only nearest-neighbour and next-nearest-neighbour interactions, neglecting the small interactions for atoms that are separated by three or more sites (as discussed

in Methods section ‘Comparison with a classical thermal state’). We account for finite detection fidelities that are determined independently, but otherwise do not include any incoherent mechanisms. Remarkably, for local quantities, such as the domain-wall density, this fully coherent simulation agrees well with the experimentally measured values. For higher-order correlation functions, such as the variance of the number of domain walls, the fully coherent simulation and the experiment agree only -
qualitatively (Extended Data Fig. 6). The quantitative difference is probably due to either limitations of the matrix product state simulations or various incoherent processes being present in the experiment. Data availability. The data that support the findings of this study are available from the corresponding authors on reasonable request.
51. Singer, K., Stanojevic, J., Weidemüller, M. & Côté, R. Long-range interactions between alkali Rydberg atom pairs correlated to the ns–ns, np–np and nd–nd asymptotes. J. Phys. B 38, S295 (2005).
52. Hall, J. L. & Zhu, M. in Laser Manipulation of Atoms and Ions (eds Arimondo, E. et al.) 671–702 (Elsevier, 1993).
53. Fox, R. W., Oates, C. W. & Hollberg, L. W. in Cavity-Enhanced Spectroscopies (eds van Zee, R. D. & Looney, J. P.) 1–46 (Elsevier, 2003).
54. Beterov, I. I., Ryabtsev, I. I., Tretyakov, D. B. & Entin, V. M. Quasiclassical calculations of blackbody-radiation-induced depopulation rates and effective lifetimes of Rydberg nS, nP, and nD alkali-metal atoms with n ≤ 80. Phys. Rev. A 79, 052504 (2009).
55. Glaz, J. & Sison, C. P. Simultaneous confidence intervals for multinomial proportions. J. Stat. Plan. Inference 82, 251–262 (1999).
56. Johansson, J. R., Nation, P. D. & Nori, F. QuTiP: an open-source Python framework for the dynamics of open quantum systems. Comput. Phys. Commun. 183, 1760–1772 (2012).
57. Boixo, S. et al. Characterizing quantum supremacy in near-term devices. Preprint at https://arxiv.org/abs/1608.00263 (2016).
58. Baxter, R. J. Exactly Solved Models in Statistical Mechanics (Courier Corporation, 2007).
59. Schollwöck, U. The density-matrix renormalization group in the age of matrix product states. Ann. Phys. 326, 96–192 (2011).
60. Haegeman, J. Time-dependent variational principle for quantum lattices. Phys. Rev. Lett. 107, 070601 (2011).
61. Vidal, G. Efficient simulation of one-dimensional quantum many-body systems. Phys. Rev. Lett. 93, 040502 (2004).
62. Daley, A. J., Kollath, C., Schollwöck, U. & Vidal, G. Time-dependent densitymatrix renormalization-group using adaptive effective Hilbert spaces. J. Stat. Mech. 2004, P04005 (2004).

© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

Article RESEARCH

Extended Data Figure 1 | Experimental sequence and Rydberg laser set-up. a, The tweezer array is initially loaded from a magneto-optical trap (MOT). A single-site-resolved fluorescence image taken with an electron-multiplying CCD camera (EMCCD) is used to identify the loaded traps. Using this information, a feedback protocol rearranges the loaded atoms into a preprogrammed configuration, which is verified by the second EMCCD image. After that, all atoms are optically pumped into the |F = 2, mF = −-
2〉 state, the tweezers are turned off and the Rydberg

lasers are pulsed. After the traps are turned back on, a third EMCCD image is taken to detect Rydberg excitations with single-site resolution. b, Schematic representation of the Rydberg laser set-up, which is used to stabilize two external cavity diode lasers to a reference optical cavity with a fast Pound–Drever–Hall lock. TA, tapered amplifier; AOM, acoustooptic modulator; EOM, electo-optic modulator; PD, photodetector; PBS, polarizing beam splitter; QWP, quarter-wave plate.

© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

RESEARCH Article
Extended Data Figure 2 | Drop-recapture curve. Measurements of atom loss probability as a function of trap-off time. For short times of up to 4 μs, the loss is dominated by finite trap lifetime (1% plateau). At larger trap-off times, the atomic motion away from the tweezer introduces additional losses. The solid line is a Monte Carlo simulation for a temperature of 11.8 μK.
© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

Article RESEARCH

Extended Data Figure 3 | Typical Rabi oscillation, homogeneity and coherence for non-interacting atoms. a = 23 μm, Ω Vi,i+1 ≈ 5 kHz. a, Rabi oscillations. We observe a typical decay time of about 6 μs, which is
limited mainly by intensity fluctuations from shot to shot. b, The fitted
Rabi frequency for each atom across the array (spatial extent of about

300 μm) is homogeneous to within 3%. c, Measurement of the population in the Rydberg state after a spin echo pulse sequence (inset). We find no decay of coherence over typical measurement periods of several microseconds, thereby ruling out fast sources of decoherence. Error bars in a–c denote 68% confidence intervals.

© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

RESEARCH Article

Extended Data Figure 4 | Spectroscopic measurement of Rydberg
interactions. Spectroscopy on pairs of atoms separated by approximately 5.74 μm is shown. a, For single-atom losses, we observe a single peak at Δ = 0 corresponding to the two-photon coupling from |g, g〉 to |W〉. b, For two-atom losses, we observe an additional peak at Δ = 2π × 12.2 MHz. This corresponds to the four-photon coupling from |g, g〉 to |r, r〉 through

the intermediate state |W〉, detuned by Δ. The interaction energy is then V = 2Δ. This four-photon resonance is broadened as a result of random atom positions within the optical tweezers that result in fluctuations in interaction strengths from shot to shot of the experiment. Solid lines are fits with a single Lorentzian (a) and the sum of two Lorentzians (b). Error bars denote 68% confidence intervals.

© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

Extended Data Figure 5 | Ground-state preparation probability. We compare the ground-state preparation probability obtained here (measured, red circles; corrected for detection infidelity, blue circles) with the most complete previous observations of a Z2-symmetry breaking transition in a system of trapped ions (green circles)34. We note that the interaction Hamiltonians for the two systems are not identical, owing to the finite interaction range. In particular, the long-range interactions tend to-
 frustrate adiabatic transitions into Z2-ordered states in ref. 34 and, to lesser extent, in this work. Error bars denote 68% confidence intervals.

Article RESEARCH

© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

RESEARCH Article

Extended Data Figure 6 | State preparation with 51-atom clusters.
a, Average position-dependent Rydberg probability in a 51-atom cluster after the adiabatic sweep. The Z2 order is visible at the edges of the system, whereas the presence of domain walls leads to an apparently
featureless bulk throughout the centre of the system. Inset, average Rydberg probabilities in a 13-atom chain, in which the Z2 order is visible

throughout the system, but the small system size prevents the study of bulk properties. b, Variance of the domain-wall distribution during Z2 state preparation. Points and error bars represent measured values. The solid
red line corresponds to a full numerical simulation of the dynamics using
a matrix product state ansatz (see text and Fig. 5). Error bars in a and b
denote 68% confidence intervals.

© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

Article RESEARCH
Extended Data Figure 7 | State reconstruction. a, Reconstructed parent distribution. b, Comparison of measured domain-wall distribution (red) and predicted observation given the parent distribution in a (blue). c, Difference between the two distributions in b.
© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

RESEARCH Article

Extended Data Figure 8 | Comparison to a thermal state. a, Domain-wall density for thermal states at different entropy per atom s/kB. The lower line corresponds to the actual number of domain walls in a system of the corresponding temperature; the upper line gives the domain-wall density that would be measured at this temperature, given the finite detection fidelity. The horizontal dashed line denotes the experimentally measured domain-wall density, from which we infer a corresponding entropy per -
atom, and equivalently temperature, in a thermal ensemble. b, Entropy per atoms for a thermal state at given inverse temperature β = 1/(kBT) in

a 51-atom array. c, Expected distribution of the number of domain walls for the thermal ensemble at β = 3.44/Δ, with (red) and without (blue) taking into account finite detection fidelity. d, Experimentally measured correlation function g(2)(d) (blue) and correlation function corresponding to a thermal ensemble at β = 3.44/Δ (grey). The inset shows the rectified correlation function on a logarithmic scale, indicating that the measured correlation function decays exponentially, but with a different-
 correlation length from that obtained from a thermal state with the measured number of domain walls.

© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

Article RESEARCH

Extended Data Figure 9 | Oscillations in domain-wall density using a variational matrix product state ansatz. The dynamics of the domainwall density in the bulk of the array under the constrained Hamiltonian Hc at Δ = 0 is shown. The blue line shows the evolution of the domainwall density obtained by integrating the variational equations of motion

(equation (5)) with initial conditions θa = π/2, θb = 0, that is, the crystalline initial state. The red line shows the exact dynamics of the domain-wall density at the centre of a system of 25 atoms initially in the crystalline state under the constrained Hamiltonian Hc.

© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

RESEARCH Article

Extended Data Figure 10 | Decay of oscillations after a quench and
entropy growth. a, Dynamics of the domain-wall density under the constrained Hamiltonian Hc for different initial states. The red line shows the domain-wall density for a system of 25 atoms initially prepared in
the electronic ground state. In this case, the domain-wall density relaxes
quickly to a steady value corresponding to thermalization. In contrast, the blue line shows the dynamics if the system is initialized in the Z2-ordered state. In this case, the domain-wall density oscillates over several periods and even for very long times does not relax fully to a steady value. b, Same as in a, but taking into account the full 1/R6 interactions. While the dynamics for an initial state |g〉⊗N is very similar to the one

obtained in the constrained case, for the crystalline initial state the decay of the oscillations is faster than in the constrained model. c, Growth of entanglement entropy in a bipartite splitting of the 25-atom array for the different cases displayed in a and b. The entropy is defined as the von Neumann entropy of the reduced state of the first 13 atoms of the array. The dashed lines correspond to dynamics under the constrained Hamiltonian, neglecting the 1/R6 tail, whereas the solid lines take -
the full interactions into account. Red lines correspond to the initial state |g〉⊗N, whereas blue lines correspond to crystalline initial states. In all panels we chose Ω = 2π × 2 MHz and, where applicable, interaction parameters such that the nearest-neighbour interaction evaluates to Vi,i+1 = 2π × 25.6 MHz.

© 2017 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:39.282Z
- **Text Length:** 88530 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
