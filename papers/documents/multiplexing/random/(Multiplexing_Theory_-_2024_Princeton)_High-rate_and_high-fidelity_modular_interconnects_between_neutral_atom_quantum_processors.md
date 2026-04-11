# PDF Document: (Multiplexing Theory - 2024 Princeton) High-rate and high-fidelity modular interconnects between neutral atom quantum processors.pdf

**File Path:** (Multiplexing Theory - 2024 Princeton) High-rate and high-fidelity modular interconnects between neutral atom quantum processors.pdf

**Processed Date:** 2026-02-10T18:17:43.015Z

**File Size:** 6507.21 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 355

**Title:** (Multiplexing Theory - 2024 Princeton) High-rate and high-fidelity modular interconnects between neutral atom quantum processors

**Collection:** Multiplexing > Random

---

## Extracted Text Content

High-rate and high-fidelity modular interconnects between neutral atom quantum processors
Yiyi Li and Jeff D. Thompson Department of Electrical and Computer Engineering, Princeton University, Princeton, New Jersey 08544, USA
(Dated: January 9, 2024)
Quantum links between physically separated modules are important for scaling many quantum computing technologies. The key metrics are the generation rate and fidelity of remote Bell pairs. In this work, we propose an experimental protocol for generating remote entanglement between neutral ytterbium atom qubits using an optical cavity. By loading a large number of atoms into a single cavity, and controlling their coupling using only local light shifts, we amortize the cost of transporting and initi-
alizing atoms over many entanglement attempts, maximizing the entanglement generation rate. A twisted ring cavity geometry suppresses many sources of error, allowing high fidelity entanglement generation. We estimate a spin-photon entanglement rate of 5 × 105 s−1, and a Bell pair rate of 1.0 × 105 s−1, with an average fidelity near 0.999. Furthermore, we show that the photon detection times provide a significant amount of soft information about the location of errors, which may be used to improve -
the logical qubit performance. This approach provides a practical path to scalable modular quantum computing using neutral ytterbium atoms.

arXiv:2401.04075v1 [quant-ph] 8 Jan 2024

I. INTRODUCTION
The development of a large-scale, fault-tolerant quantum computer capable of solving classically intractable problems is expected to require millions of qubits [1, 2]. In many physical computing architectures, it is challenging to imagine scaling a single device to this number of qubits, because of varied constraints including cryogenic cooling power, wiring density, or laser power. These challenges can be circumvented with a modular approach, using remote connections to link together a number of -
small units into a single quantum processor [3–6]. Modularity may also simplify the construction, maintenance and calibration of large-scale systems.
The basic building block of a modular computer is a Bell pair between physical qubits in two modules, which can be used as a resource to teleport quantum states or gates between the modules [7–10]. However, it is an outstanding challenge to develop an interface between modules with sufficient bandwidth and fidelity to enable scalable, fault-tolerant computation. In superconducting qubits, proof-of-concept demonstrations have shown cryogenic microwave links between remote qubits [11], and entanglem-
ent between microwave and optical photons [12, 13]. Remote entanglement of atomic qubits such as neutral atoms, trapped ions and solid-state defects using photons has been implemented with several approaches, using free-space and cavity-enhanced lightmatter interfaces [8, 14–23]. However, the highest reported remote entanglement rate between neutral atom or trapped ion qubits is only 182 s−1, with a fidelity of 0.94 [20].
In this work, we propose an approach to realize fast, high-fidelity remote qubit entanglement between neutral atom quantum processors [24, 25]. We consider 171Yb atoms as qubits, which have been used to demonstrate high-fidelity entangling gates [26], non-destructive [27] and mid-circuit [28, 29] readout, and have a pathway to

hardware-efficient fault-tolerant error correction [30, 31]. By using an optical tweezer array to place N > 100 atoms inside a single optical cavity (a twisted ring resonator), and controlling their interaction with the cavity using only local light shifts, we predict a remote Bell pair generation rate of 1.0 × 105 s−1 with fidelity of approximately 0.999 for physically reasonable parameters. This rate is orders of magnitude higher than previously demonstrated [16, 18, 20, 22] or proposed [32, 33]-
 remote entanglement approaches for atomic qubits. The entanglement is distributed between modules using 1389 nm photons in a single-mode optical fiber, allowing links over several kilometers without degradation. We conclude with a brief discussion of the implication of these results for large-scale neutral atom quantum processors.
II. OVERVIEW
An overview of the proposed approach is shown in Fig. 1. We envision an array of computation modules each housed in a separate vacuum system containing an optical cavity used to generate spin-photon entanglement. Photons are emitted on the 1389 nm transition from 3D1 to 3P0 (Γ = 2π × 418 kHz) [35], with a polarization entangled with the qubit states in 3P0. After the photons leave the optical cavity, they are coupled into optical fibers, and sent to a central router and detector array [4]. The rou-
ter interferes photons coming from selected pairs of modules on an array of beamsplitters. The coincident detection of two photons on the same beamsplitter heralds the generation of a Bell state, with a success probability of 50%.
The optical cavity within each module is a non-planar (twisted) ring cavity (Fig. 1b) [36], which allows small beam waists with robust alignment [37–39], spatially uniform atom-cavity coupling (i.e., without a standing wave), and non-degenerate modes of opposite circular po-

2

entanglement router
...

(a)

d1- ...

d2+ d1+

detectors
beamsplitters
switches

(b)
1 cm
(c)
load entangle

compute

(d) 3P1
6s8p

3D1 F=3/2

522 nm 1389 nm

1539 nm

3P1 F=3/2

3P0 F=1/2

1S0 F=1/2

556 nm

(e)

... time

computing modules

FIG. 1. (a) Schematic of a modular neutral atom quantum computer with multiple computation modules and a central
entanglement router. (b) Each module houses a centimeter-scale twisted ring cavity, shown here with vacuum windows and a
high-NA microscope objective with standard dimensions for scale [34]. (c) The entanglement process consists of loading and
transporting arrays of atoms into the cavity, entangling them sequentially with a remote module, and moving them into a
computation zone. There, they can be used to connect remote logical qubits |ψL⟩ using teleported gate operations. (d) Energy diagram of relevant atomic levels in 171Yb. The qubit state used for computation is in the 3P0 manifold. The atoms are excited from the 1S0 ground states to the 3D1 states with a two-photon excitation using 3P1 as an intermediate state. The Rabi frequency of the excitation lasers are Ω1± and Ω2±, with detuning to intermediate state of ∆±. The 3D1 to 3P0 transitions are
coupled to the cavity with atom-cavity coupling strength of g. Local light shifts are is applied to selected atoms, using Ωc(⃗r) coupling 3D1 to a higher excited state. (e) Temporal sequence of remote entanglement generation: by amortizing the cost of
moving and initializing atoms over many entanglement attempts, the overall attempt rate is very close to 1/tent.

larization [40] that are used to couple to two Zeeman-split transitions simultaneously to generate spin-polarization entanglement. This doubles the entanglement generation rate compared to time-bin entanglement when coupling to a single transition.

The operation of the modular interface with a tweezer

array is shown in Fig. 1(c-e). An array of N atoms

is initialized in a loading zone, then transported into

the cavity. Once inside, the entire array is initialized

in |ψ0

a superposition ⟩⊗N = [(|0g⟩ +

state√within |1g⟩)/ 2]⊗N .

the 1S0 ground state The first atom in the

array is excited to a superpositi√on state in the 6s5d 3D1

manifold, |ψe⟩ = (|0e⟩ + |1e⟩)/ 2, which decays to the

qubit state in the 3P0 manifold, by emitting a 1389

nm photon into the cavity with σ− or σ+ polariza-

tion. This results in the s√pin-photon entangled state |ψsp⟩ = (|0, σ−⟩ + |1, σ+⟩) / 2. By performing the excitation synchronously in two modules, the emitted pho-

tons will arrive simultaneously at the detectors, an√d an entangled state of two qubits |ψ±⟩ = (|01⟩ ± |10⟩)/ 2 is

heralded when two photons of opposite polarization are

detected [41].

The process is repeated sequentially for each atom in the array, with a delay of tent ≈ 1 µs to ensure that the photon wavepackets do not overlap. After exciting all of the atoms once, the procedure can be repeated

m ≈ 5 − 10 times to boost the entanglement fraction, by re-initializing the atoms that were not successfully entangled in previous rounds (Fig. 1e). After a sufficient number of Bell pairs are generated, the array is moved out of the cavity and replaced by a fresh array to continue generating more Bell pairs. By amortizing the relatively high temporal cost of moving (tmove ≈ 100 µs [42]) and initialization (tinit ≈ 6 − 8 µs) over many repetitions of the entanglement sequence, the average spin-phot-
on entanglement attempt rate approaches the maximum allowed by the cavity, 1/tent. Saturating this rate requires N ≳ (tmove + tinit)/tent ≈ 100. Locally addressed light shifts of the 3D1 state prevent reabsorption of photons by atoms already in 3P0.
The subset of qubits that were successfully entangled can be used to perform remote operations between logical qubits |ψL⟩ in two modules, for example by using teleported gates to implement lattice surgery or transversal entangling gates.
III. ENTANGLEMENT RATE
An example cavity design is shown in Fig. 1b, consisting of four mirrors in a twisted ring. The large spacing between the mirrors and the atoms eliminates unwanted

[ > P@

 D 

  

 

0.99 0.9

  

   

 

   

 E 

 F  ] > P@  G     

   

    

   

   

  

 
Rbp >  3 V 1@

  

 
 

 W >1 / @  

 H 

       [ ]  

   5RX Q GV  m   

6XFFHVV   SHUFHQWDJH > @

3KRWRQ UDWH > @

3KRWRQ UDWH > @

   
   
                                W > V@
FIG. 2. Entanglement rate. (a) Schematic of an atom array inside the cavity. The red contour indicates the 1/e2 intensity of the cavity field, while the black lines show g = 0.99gmax and g = 0.9gmax. The dots depict an atom array with a spacing of 2.5 µm. N = 204 sites fit inside the 0.9gmax contour. (b) Output intensity from the cavity after exciting an atom to 3D1 (blue dashed line). A light shift ∆ is applied at t ≈ π/g = 2.65/Γ suppresses the late time decay (orange line, ∆/g = 100), allowing -
the next atom to be excited immediately. (c) Probability of emission into the cavity, η, as a function of cavity decay rate, κ (blue). The orange curve shows the maximum possible value, η0 = C/(C + 1). The optimum κ is indicated by the vertical line, where η = 0.50. (d) Bell pair generation rate Rbp and the percentage of atoms entangled, as a function of the number of rounds, m. (e) Timing diagram for the entanglement sequence in a small array, showing the local light shifts (blue bars), global ex-
citation pulses (red) and cavity output field. Note that at each point in time, a light shift is applied to all atoms except for the one being entangled.

atom-surface interactions and provides ample optical ac-
cess for optical tweezers, imaging and gate beams. The
twisted geometry breaks the degeneracy of modes with
opposite helicity [40], resulting in a controllable splitting between co-propagating modes with σ+ and σ− polarization. The twist angle of ≈ 11◦ is chosen to tune the
forward-propagating modes into resonance with the transitions from |0⟩ and |1⟩ to 3D1 simultaneously, in a bias field of 100 Gauss (ω+ − ω− = 140 MHz). The mirror radius of curvature and arm lengths are chosen to provide a circular mode with a 1/e2 waist w0 = 10 µm at the position of the atoms. This results in a peak atom-
cavity coupling strength of gmax = 2π × 520 kHz for both

3

transitions, and provides space for an array of N = 204 atoms with g > 0.9gmax (Fig. 2a). The round-trip length is L = 6.96 cm, corresponding to a free spectral range of 4.3 GHz, and the cavity decay rate κ is chosen by selecting the reflectivity of the outcoupler mirror (the other mirrors have R = 1). Additional details about the cavity design can be found in Appendix B.
The procedure for generating the spin-photon entangled state |ψsp⟩ is as follows. After preparing the array in |ψ0⟩⊗N , we use a two-photon excitation pulse with Rabi frequency Ω˜ = Ω1±Ω2±/2∆± to excite a single atom to |ψe⟩. The atom decays by emission into the cavity and free space modes, and the cavity output is shown in Fig. 2b. To avoid residual population in the cavity causing an error on the next entanglement attempt, one would have to wait for a time t > 5/Γ. However, the exponential tail -
can be suppressed by tuning the atom out of resonance with the cavity suddenly at t = π/g, when the cavity population vanishes, using a strong light shift ∆ on the 3D1 state with ∆/g > 100. This traps the residual excitation in the atom, where it decays into free-space modes, and allows the next atom to be excited to 3D1 immediately, doubling the emission rate to tent = 2.65/Γ, while decreasing the emission probability per attempt by only 1%. The light shift is kept on for the remainder of the seq-
uence, to prevent atoms in 3P0 from absorbing cavity photons from subsequent entanglement attempts. After attempting to entangle all N atoms, the atoms that were not entangled can be repumped back to |0g⟩, and the entire procedure repeated for another round.
Fig. 2c shows the probability of emission into the cavity as a function of κ, reaching a maximum of η = 0.50 when κ/2π = 1.04 MHz (corresponding to a cavity finesse of F = 2070). This does not achieve the maximum possible efficiency η0 = C/(1 + C), where C = 4g2/(κΓ) ≈ 2.5 is the cooperativity, because the cavity becomes spectrally narrower than the emitted photon when κ is small [33]. Adiabatic preparation of a shaped photon pulse can saturate η0 [43] by increasing tent, but we have found that th-
is does not increase the remote entanglement rate and adds significant additional experimental complexity.
Each entanglement attempt heralds a successful Bell pair with probability Psuc = (1/2)η2 = 0.125. Using the sequence in Fig. 1e, the average Bell pair rate when using m rounds is:

Rbp

=

m i=1

NiPsuc

tmove + m · tinit +

m i=1

Nit¯ent

(1)

where Ni = Ni−1(1−Psuc) is the number of entanglement attempts in round i (N1 = N ), and t¯ent = 1.09 µs is the average time per entanglement attempt across the
N = 204 site array. After one round (m = 1) the rate is 7.8 × 104 s −1, increasing to 1.0 × 105 s −1 for m = 5 −
20 rounds. This is 82% of the maximum rate allowed by the cavity, 1/tent = 1.25 × 105 s −1, indicating the effectiveness multiplexing the cavity across N atoms.

4

g

 D                     
 F 

     g/g     

T

 E 
    
       7HPSH UDW X UH > .@  
 G      

    

dc

    

d

        
 H 

t  >QV@

    

   

    Rdc   >V  1@    

 I 

    

    

    

   

    /LJKW 6KLIW 

/g   

a

    

m=10

     m=1

    /LJKW 6KLIW   /g 

r

FIG. 3. (a) Error resulting from unequal atom cavity coupling strength, ϵg. The dashed line shows a representative value, δg/g = 0.031, derived from the r.m.s. variation across the array shown in Fig. 2a. (b) Doppler shift error, ϵT , from finite atomic temperature. The dashed line shows a typical temperature for Yb atoms after Doppler cooling. (c) Error from re-excitation of the atom following a decay during the excitation pulse, ϵd. (d) Error from detector dark counts, ϵdc. (e) Error probability-
 from residual cavity photon population after each entanglement attempt, ϵr, as a function of the light shift detuning ∆/g. The light line shows the case that g is known exactly, while the dark line includes an uncertainty in g of δg/g = 3×10−3, corresponding to thermal atomic motion at T = 10 µK. (f) The error probability ϵa from scattering or Stark shifts from cavity photons in subsequent rounds, as a function of the light shift detuning ∆/g. Purple lines show the error after m = 1, 5, 10 rounds-
 (from light to dark).

The same light shift control can also be used to address the excitation and repumping operations, as described in Appendix A. A timing diagram of part of one round is shown in Fig. 2e.

IV. ENTANGLEMENT FIDELITY
Next, we consider errors affecting the fidelity of the remote Bell pairs. Previous experimental studies of heralded entanglement based on coincidence detection have identified errors arising from qubit decoherence, the fidelity of single-qubit rotations, polarization mixing and imperfect mode overlap at the detectors [18, 20].
The latter effects are strongly suppressed by the cavity. The mode structure of the cavity ensures that the photons are emitted into a single, well-defined mode with orthogonal polarizations, which can be preserved through the entanglement router by using fiber optic or integrated photonic beamsplitters with extremely low loss at this wavelength [44].
Furthermore, the excellent coherence and high-fidelity single-qubit operations on the nuclear spin qubit in 171Yb largely mitigates the first two effects. Coherence times without dynamical decoupling (i.e., T2∗) of several seconds have been demonstrated for the pure nuclear spin qubit in 1S0 and 3P0, because of the low sensitivity to magnetic field noise and absence of differential light shifts [26, 28, 45, 46]. The 3P0 state lifetime is 3 s in typical optical tweezers [26], resulting in a decay p-
robability to 1S0 of 7×10−7 per tent or 2×10−4 over m = 5 sequence repetitions with N = 204 atoms. We also note that 3P0 decays can be converted into erasure errors, which can be efficiently corrected [26, 30]. Unlike 3P0 and 3S0, the 3D1 state is sensitive to magnetic fields. However, it is only populated for ≈ 1 µs during the entanglement generation, compatible with phase accumulation errors less than 10−6 using conventional field stabilization at the part-per-million level [47]. Single qubit ga-
tes for both 1S0 and 3P0 qubits have been demonstrated with fidelities beyond 0.999 [26, 28, 45, 46].
Now, we turn to some sources of error that are intrinsic to our implementation. The magnitude of these error sources is estimated from numerical simulations (Appendix C) unless otherwise stated. The first is a slight distinguishability of the photons from two atoms resulting from variations in the atom-cavity coupling strength. Given two atoms in two cavities with a fractional difference in coupling strength δg/g, the resulting distinguishability causes an error ϵg = 0.394 × (δg/g)2, such that δg/-
g < 0.05 is required to reach ϵg < 10−3 (Fig. 3a). Maintaining an r.m.s. variation in g below this level for all possible qubit pairs requires matching the cavity waists within 5%, and placing the atoms within 0.4w0 ≈ 4 µm of the cavity axis (compatible with the layout in Fig. 2a). Static inhomogeneity in g can also be mitigated by misaligning the atoms in one cavity, or choosing matched pairs of atoms to entangle. However, unknown variation in g can arise from thermal motion of the atoms or align-
ment drifts between the tweezer array and the cavity. Thermal motion at 10 µK corresponds to δg/g ≈ 3 × 10−3, while maintaining δg/g < 0.05 requires alignment stability to within (∆x, ∆y, ∆z) < (0.87, 2.2, 3.8) µm, compat-

5

ible with demonstrated tweezer alignment stability to
nanophotonic structures [48] and standing wave lat-
tices [49].
Distinguishability errors can also arise from Doppler
shifts, given the running-wave mode in the cavity. The error probability ϵT is proportional to (kcvrms/g)2, where kc = 2π/λ is the cavity wavevector, and vrms =
kBT /m is the mean atomic velocity along the cavity axis (with kB, T and m denoting Boltzmann’s constant, the atomic temperature and the mass of the
atom, respectively). From numerical simulations, we find ϵT = 7.3 × 10−6µK−1 × T (Fig. 3b). A typical temperature for Yb atoms after Doppler cooling is 5-10
µK [26, 34, 46], corresponding to kcvrms = 2π × 16 kHz, yielding ϵT < 10−4.
Next, we consider decay back to 1S0 during the excitation pulse, which collapses the initial spin superposition
but can still result in photon emission into the cavity if the atom is re-excited. The 3D1 state decays to 3P1 with a branching ratio of 0.34, and 3P1 decays to 1S0 at a rate Γ3 = 2π × 182 kHz. Therefore, the probability to decay to 1S0 during an excitation pulse of duration tπ ≪ Γ, Γ3 is p3 ≈ 0.34t2πΓ3Γ. The probability of the atom being re-excited and causing an error is ϵd ≈ p3/8. From numerical simulations, we find ϵd = 6.8 × 10−8ns−2×t2π, which yields ϵd = 2.8 × 10−5 for tπ = 20 ns. In Append-
ix A, we discuss errors from unwanted excitation to 3D1, mF = ±1/2 levels and off-resonant scattering from 3P1, which can both be suppressed below this level.
Then, we consider false heralding events from detector
dark counts (Fig. 3d). The probability of a false herald
is pf = 2ηRdctent, where Rdc is the dark count rate on a single detector. Therefore, the probability of an error
caused by dark count is ϵd = pf /Psuc = 4tentRdc/η ≈ 8×10−6 s ×Rdc. Commercially available SNSPDs have a dark count rate Rdc = 10 s −1, corresponding to an error probability of ϵdc = 8 × 10−5. Suppression to millihertz rates has been demonstrated using cold filtering [50] or
integrating the detector to a single-mode waveguide [51].
Finally, we consider errors from the presence of multi-
ple atoms inside the cavity. These errors take two forms:
residual photons in the cavity at the end of one en-
tanglement attempt leaking into the next window, and atoms already in 3P0 absorbing a photon if they are not sufficiently light-shifted away from the cavity resonance
(Fig. 3f). If the atom-cavity coupling is known exactly,
the residual photon errors are suppressed by the light shift as ϵr ∝ (∆/g)−2 , provided the light shift is turned on instantaneously at the time when the cavity popula-
tion is zero (Fig. 3e). However, unknown variation in g
makes this precise timing impossible. Using the uncertainty δg/g = 3 × 10−3 from thermal atomic motion at 10 µK, we find a floor of ϵr < 10−5 with a light shift of ∆/g > 100.
Adding the above sources of error, we arrive at an aver-
age Bell pair fidelity of approximately 0.999, dominated
by ϵa and ϵg. Atoms already in 3P0 after a successful entanglement

attempt can experience scattering or Stark shifts from photons in the cavity during subsequent entanglement attempts. Both errors are suppressed with the light shift as (∆/g)−2, and we find from numerical simulations that the error probability after one additional entanglement attempt is ϵ(a1) = 3.5 × (∆/g)−2. However, because the error is incurred on the atom that was already entangled, the average generated Bell pair will experience N¯r = O(mN ) subsequent entanglement attempts before being tran-
sported out of the cavity, amplifying its effect. For N = 204 and m = 5, we find numerically that N¯r ≈ 250. Achieving an average error ϵa = N¯rϵ(a1) < 10−3 requires ∆/g > 2 × 103.
We note that only a modest amount of laser power is required for the light-shifting beam when operating close to resonance on the 3D1 to 6s8p 3P1 transition, which is possible because the 3D1 state is not populated on the shifted sites, and therefore insensitive to scattering errors as demonstrated in Ref. [52]. With a detuning of 1 GHz, a laser power of approximately 20µW per atom is sufficient to generate a light shift of ∆/g > 2 × 103, with negligible mechanical forces on the atoms as the wavel-
ength is far from resonance with any transitions from 1S0 or 3P0. Unwanted light shifts on the atom being entangled can arise from crosstalk of the local addressing beam, and lead to distinguishablity errors similar to Doppler shifts. A recently demonstrated large-scale modulator achieves -44 dB nearest-neighbor crosstalk [53], which would give a detuning error 2.6 times the r.m.s. Doppler shift, or an entanglement error of 5 × 10−4.
A. Information about errors from photon timing
In the context of quantum error correction, the details of the error model can significantly affect the overhead required to reach a given logical error rate. For example, a bias towards a single type of Pauli error [54, 55] or information about the location of errors in the form of erasures [30, 31, 56, 57] or soft information [58] have been shown to reduce logical error rates by several orders of magnitude. While many quantum operations can only be characterized by their average fidelity, here w-
e show that the timing of the photon detection events provides shot-to-shot information about the probability of different error types of each individual Bell pair.
Specifically, we ask the question: given that two photons are detected at times (t1, t2), what is the probability that the resulting qubit state has a Pauli or leakage error? Since the qubit manifold in 171Yb has only two sublevels, leakage refers to the case that the atom is not in 3P0.
First, we consider the errors caused by photon distinguishability from a variation in the atom-cavity coupling strength. This results in unequal wavepacket shapes for the two photons, which encodes which-path information into the detection time difference. These errors are purely Pauli Z errors, as the correlation between the photon polarization and the qubit state in the computational basis

&XPPXODWLYH 3UREDELOLW\

t2 [1/ ]

 D  g(t1, t2)  E  T(t1, t2)  F  dc(t1, t2)

 

    

 

    

   t1  [1/ ]    t1  [1/ ]    t1  [1/ ] 

    

     G  = HUURU

   
         H  ; HUURU

g

dc

T

a

d

   

         I  /HDNDJH
   

   

    

    

m
    

FIG. 4. (a) Probability of an error from unequal g, as a function of the photon detection time (t1, t2). (b) Probability of an error from Doppler shifts as a function of detection time. (c) Probability of a dark count error as a function of photon detection time. (d-f) Cumulative probability distribution functions for the Z, X and leakage error rates for all error sources considered. The dashed lines show the mean probability of each error. For ϵa and ϵm, the (light, medium, dark) curves show the -
error probability using m = (1, 5, 10) rounds of entanglement generation, and the dashed line shows the mean error for m = 5. For all error types, the strength of the noise corresponds to the dashed vertical lines in Fig. 3, and ϵm is computed based on a 3 s lifetime for 3P0 [26].

is not affected. In Fig. 4a, we plot the error probability as a function of the photon detection times, ϵg(t1, t2). Using the probability to detect photons at those times, P (t1, t2), we can convert ϵg(t1, t2) into a probability distribution for the error rate of the generated Bell pairs, p(ϵg), whose cumulative distribution function is shown in Fig. 4d. The function p(ϵg) gives the probability that a particular Bell pair has a fidelity 1−ϵg. While the mean error rate is 4 × 10−4, over half of the-
 Bell pairs have an error rate less than 6 × 10−5 . This approximates an erasure error and allows for better decoding and improved logical qubit performance.
A similar analysis applies to errors from Doppler shifts. The probability of error as a function of the photon detection times, ϵT (t1, t2) is shown in Fig. 4b. As Doppler

6
shifts also only affect the distinguishability of the photons, this only results in Z errors, and is suppressed when |∆ω(t1 − t2)| ≪ 1, where ∆ω is the frequency difference of the two atoms [59]. The cumulative distribution for p(ϵT ) is shown in Fig. 4d.
Errors from decay during the excitation pulse, ϵd, can be understood as a Z-basis measurement of the atom prior to the spin-photon entanglement, and are also purely Z errors. However, the photon detection timing does not reveal anything about the probability of this error, so it is the same for all Bell pairs and the the cumulative distribution is a step function (Fig. 4d).
Dark counts result in false heralding signals that are uncorrelated with the atomic state, and can therefore cause all Pauli errors and leakage. The error probability ϵdc(t1, t2) depends on the detection time, and is greatest at the edge of the detection window when the probability of detecting a real photon is low (Fig. 4c). The corresponding cumulative distribution functions for Z, X and leakage errors is shown in Fig. 4d-f.
Finally, we consider errors from the absorption of photons by atoms already in Bell pairs, ϵa. Because this error happens after the Bell pair is created, it does not depend on the photon detection times. However, Bell pairs created in early rounds have more chances to experience an error than Bell pairs from later rounds. Using the known probability distribution for the number of entanglement attempts Nr that follow a successful Bell pair creation, we can generate the probability distribution p(ϵa-
) for Z, X and leakage errors (Fig. 4d-f). Because the atom is detuned far from the cavity, the probabilities to excite to all mF levels of 3D1 are comparable, and therefore the probability of X, Z and leakage errors are also roughly comparable. Errors from the finite 3P0 lifetime, ϵm, are purely leakage, and follow a similar probability distribution (Fig. 4f).
In summary, we have shown that the fidelity of individual Bell pairs is strongly influenced by information that is available to the experimenter: the photon detection times, and the time step in the sequence when the Bell pair was generated. Passing this information to the decoder when performing logical operations may significantly reduce the logical error rate [30, 58]. We leave a detailed analysis to future work.
V. DISCUSSION
We conclude by discussing several aspects of these results. First, we note that the proposed approach is fully compatible with existing neutral atom quantum processors. The cavity allows for a large separation between the atoms and the mirror surfaces, comparable to standard glass cell vacuum chambers [34]. It also provides large optical access, compatible with high-numerical-aperture objective lenses for projecting tweezer arrays and local addressing beams, and for fluorescence imaging. Moreover,-
 the steps involved in generating entanglement can

7

proceed in parallel with computations using metastable qubits in a nearby zone, without the need to separately control magnetic fields. The local addressing requirement is minimal, consisting of only one switchable light shift on each site, and is compatible with recently demonstrated scalable modulators [53, 60].
Second, we consider how physical Bell pairs can be used to implement fault-tolerant operations between remote logical qubits. Previous studies have considered modular quantum computing in the regime where the modules are small, and a single logical qubit spans multiple modules [4, 6, 41, 61]. While the existence of a high error threshold of over 10% has been demonstrated for the inter-module links [5, 6], remote Bell pairs are consumed at a high rate just to sustain the logical information against-
 idle errors.
In the case of neutral atom quantum computing, we envision modules with O(104) qubits per module, based on demonstrated arrays of hundreds of qubits [62, 63] and scaling of the underlying optical components beyond 104 sites [53]. With foreseeable error rates below 10−3 for all physical operations [26, 28, 64, 65], achieving logical error rates of 10−12 is possible with an overhead of 103 physical qubits per logical qubit using a standard surface code [66]. The overhead may be reduced by at least a-
nother order of magnitude using qubits engineered for erasure-biased errors [30, 31] or efficient block codes [67]. Therefore, NL ≳ 100 logical qubits per module is realistic. In this regime, the remote Bell pairs are not used to correct idle errors and errors from local operations within each module, but only for performing logical operations between modules.
For a distance d surface code, a gate operation between remote logical qubits can be implemented via lattice surgery [68], consuming d2 physical Bell pairs to teleport CNOT gates along the code boundary [69]. Alternatively, the same number of Bell pairs can be used to implement a logical transversal CNOT across two modules, by teleporting CNOT gates between corresponding physical qubits in the code. The second approach can also be applied to [[n, k, d]] quantum LDPC codes [70] with a transversal C-
NOT⊗k gate to generate k entangled logical qubits between two modules by consuming n physical Bell pairs, allowing a higher rate of logical Bell pair generation than the surface code. The implementation of such codes for neutral atom qubits has been discussed in Ref. [67]. As the fidelity of remote physical Bell pairs is similar to those that could be created within a module, intermediate purification steps before using the Bell pairs in logical operations are not required.
Therefore, the physical interface proposed here will enable ≳ 103 remote logical gates per second between each pair of modules. It is an interesting question for future work to consider how to compile high-level algorithms into such a modular computer [1, 3, 4].

VI. CONCLUSION
We have presented a blueprint for a modular architecture for a neutral atom quantum processor based on Yb atoms. It is capable of generating remote entanglement at a rate of 1.0 × 105 Bell pairs per second, with a fidelity compatible with fault-tolerant computing. The modular interface can be implemented with existing experimental hardware, and operated alongside an atom array performing local computations.

VII. ACKNOWLEDGEMENTS
We gratefully acknowledge Jon Simon for sharing details about computing the normal modes of twisted resonators. We also acknowledge Nathan Schine, Mehmet Uysal, Shruti Puri for helpful discussions, and Adam Kaufman for comments on the manuscript. This work was supported by the Gordon and Betty Moore Foundation, grant DOI 10.37807/gbmf12253.

Appendix A: Experimental sequence

A detailed description of the experimental sequence is

shown in Fig. 5. Here, we discuss each of the steps in

additional detail.

After moving atoms into the cavity, the entanglement

sequence begins with initializing the array to state |ψ0⟩. This has two steps: optical pumping to |0g⟩ on the 1S0 to 1P1 transition at 399 nm (requiring less than 100 ns),
and a Raman π/2 rotation ( 170 ns [46]). We note that

these steps do not affect qubits in 3P0, so can be used in subsequent rounds without affecting Bell pairs that have

already been created.

Then, the atoms are sequentially excited to 3D1, using the laser configuration in Fig. 1d. It consists of three

laser beams: A σ+-polarized laser driving |1g⟩ to the 3P1, mF = +3/2 state with detuning ∆+, a σ−-polarized laser driving |0g⟩ to the 3P1, mF = −3/2 state with detuning ∆−, and a π-polarized laser driving the 3P1
states to |0e⟩, |1e⟩. Simultaneous two-photon resonance
is achieved for both transitions by controlling the fre-

quency of the σ± lasers separately. The two photon Rabi

frequency

is

given

by

Ω˜ ±

=

. Ω1± Ω2±
2∆±

The

same

laser

con-

figuration will also drive off-resonant Rabi oscillations to

the 3D1, mF = ±1/2 states, with Rabi frequency:

Ω˜ ′± =

(gDµBB)2 +

√1

Ω1±Ω2±

2
, (A1)

3 3 2(∆± ± gP µBB)

where gP = 1 is the 3P1, F = 3/2 state Land´e g factor, gD = 1/3 is the 3D1, F = 3/2 state Land´e g fac-
tor, and µB is the Bohr magneton. To minimize off-
resonance excitation, the excitation pulse time tπ should

8

Load and move 100 𝜇s
Optical pumping 100 ns
𝜋/2 pulse 1 𝜇s

Entanglement attempts 1 𝜇s × N

Depump 6 𝜇s

𝑚 rounds

1𝑆0

𝜓0

Entangled

0𝑔

𝜓𝑒

3𝑃0

399 nm
556 nm
556 nm 1539 nm 556 nm 1539 nm 556 nm 1539 nm 556 nm 1539 nm 556 nm 1539 nm 770 nm 1389 nm
Move out

FIG. 5. Schematic diagram of the experimental sequence on a five atom array.

be an integer multiple of the off-resonance Rabi cycle, tπ = π/Ω˜ ± = l · 2π/Ω˜ ′±, where l is an integer. For ∆± = 2π × 1 GHz, and B = 100 G, we numerically found that the minimum pulse time approximately sat-
isfying this condition is tπ ≈ 20 ns. It cannot be exactly satisfied because Ω˜ ′+ ̸= Ω˜ ′−, but the resulting excitation probability to mF = ±1/2 is only 3 × 10−6. This tπ requires Ω1± = Ω2± ≈ 2π × 225 MHz. The large detuning suppresses scattering from 3P1 during the pulse to Γ3/∆± ≈ 10−4.
Instead of locally addressing the excitation lasers,
which atom is excited can be controlled using a local light shift on 3D1 during the excitation pulse to shift all but one atom out of resonance. This introduces several new
sources of error, which we discuss only briefly because
they are not intrinsic (i.e., they can be eliminated by lo-
cally addressing at least one of the excitation beams). As
discussed in the main text, a value ∆/g = 2000 (corre-
sponding to ∆ ≈ 2π×1 GHz) is needed to avoid cross-talk
between atoms in the cavity. This is sufficient to suppress
unwanted excitation: the probability of a scattering error from 3D1 during the excitation pulse on a shifted site is approximately tπΓ(Ω˜ /∆)2 = 3 × 10−5. However, both

this error and the scattering error from the 3P1 intermediate state will accumulate, and are enhanced by N for the final atom in each round. This can be suppressed by periodically re-initializing the atoms remaining in 1S0 in the middle of each round, which adds little temporal overhead but will eventually heat the atoms from scattering optical pumping photons.
Even on light-shifted sites, the excitation laser can cause vacuum-stimulated Raman transitions resulting in the emission of a photon into the cavity modes. This coherent process occurs at a rate gΩ/∆ ≪ Ω, resulting in an emission probability of (g/∆)2 ≈ 2 × 10−7 per atom during the excitation pulse. This will have the same effect as a dark count or residual photons in the cavity from the previous round. Even when this probability is enhanced by the N ≈ 200 1S0 atoms in the array, it remains well -
below the other sources of error discussed in the main text.
At the end of the each round, the atoms that are not in Bell pairs need to be depumped from 3P0 before a new round can start. This can be done conveniently using the 3D1 state, which decays to the ground state 1S0 via 3P1. We estimate that 6 µs is required to reach less than 10−3 remaining population in 3P0. About 3% of the population will decay to 3P2, which is repumped using the 3P2 to 3S1 transition at 770 nm [26]. The 3D1 light shift can also be used to control which atoms are depumped. Pumpin-
g of unwanted atoms is suppressed by (∆/Γ)2 ≈ 10−6, as this error is incurred at most m = 5−10 times, it remains at a tolerable level.
At the end of a round, the entangled atoms are transported out of the cavity and into a computation zone with other logical qubits. At the same time, a new array is loaded into the cavity, so the entanglement sequence begins again after tmove.
To estimate the magnitude of the optical power needed to generate a light shift of ∆ = 2000g, we use the experimentally measured lifetime of the 6s8p 3P1 state of 140(20) ns [71], and an estimated branching ratio of 0.3 to the 3D1 state. Using a detuning of 1 GHz [52], we arrive at an estimate of 20 µW/site, assuming a 1/e2 beam radius w0 = λ. Several other excited states could be used for light shifts, including the 6s7p states (730 nm transition from 3D1) or 6s5f 3F2 (528 nm). The latter state h-
as a stronger matrix element to 3D1 (26 ns lifetime [71], estimated branching ratio of 90% to 3D1), which could reduce the needed power to approximately 1.5 µW per site.
Appendix B: Cavity parameters
The twisted, running-wave cavity in this work accomplishes two objectives. First, the running-wave nature reduces fast gradients in the atom-cavity coupling strength, enabling higher-fidelity spin-photon entanglement. Second, twisting the cavity gives rise to circularly polarized eigenmodes and lifts the degeneracy between the co-

9

propagating modes with σ+ and σ− polarization, by an amount that can be controlled by the twist angle. This allows maximum strength coupling to both σ+ and σ− transitions simultaneously, allowing spin-polarization entanglement to be generated in the time it takes to emit one photon.
The design of the cavity is based on several principles. First, we constrain the atom-mirror distance to be larger than 1 cm to avoid deleterious effects on the Rydberg states of atoms near the mirror surfaces. This distance is comparable to the atom-windows separation in many current experiments [34]. We also want a small mode waist, to realize a large atom-cavity coupling strength, and a twist angle that enables a splitting of 100-150 MHz between σ+ and σ− modes in the same propagation direction-
, which is compatible with bias magnetic fields in the range of 60-100 G.
One example of a cavity satisfying these conditions is shown in Fig. 1b. It is made of four mirrors: two convex mirrors with radius of curvature R = 1.27 cm, and two concave mirrors with R = −1.27 cm. The geometry is derived from a planar ring cavity with equal short and long arm lengths, and an opening angle of 11◦, with an additional 11◦ twist out of the plane. The mirror diameter is 3 mm to satisfy geometric constraints. The mode is circular at the position of the atoms with a waist of w0 = 10.-
0 µm. The round-trip length is L = 6.96 cm, corresponding to a free spectral range of 4.3 GHz and a splitting between the co-propagating circularly polarized modes of 133 MHz. We note that planar ring cavities with a similar value of w0/λ have recently been demonstrated with F ≈ 51, 000 [39].
1. Twisted cavity
The cavity has four resonance modes in the fundamental transverse mode (TEM00) for each longitudinal mode number, corresponding to two polarization (σ+ and σ−), and clockwise (CW) and counter-clockwise (CCW) propagation directions. For a non-zero twist angle θ, the polarization of light rotates in each round trip, which manifests as a phase shift with opposite sign for σ±, splitting their resonance frequencies. However, the CW σ± mode is degenerate with the CCW σ∓ mode, as required by time-reversa-
l symmetry. Therefore, if we align the atomic σ+ and σ− transition frequencies with the two cavity frequencies, both transitions will decay via emission of photons in the same direction. Here, the timereversal symmetry is broken by the magnetic field. If the direction of B⃗ is reversed, the emission direction will also reverse.
If the mirror coatings are birefringent, the eigenmodes are no longer perfectly circularly polarized. This effect can be minimized through the use of appropriately designed coatings, and very high levels of circular polarization have been demonstrated [72]. If the polarization is elliptical, some photon emission will go into modes prop-

(a) |0𝑒⟩
Ω(𝑡)

Γ

Γ

𝑔 |𝑡𝑟𝑎𝑝⟩ 𝑔

(b)

|1𝑒⟩

𝑒+

Ω(𝑡)

𝑒− 𝑑−

𝑑+

𝑒±

𝑑±

|0⟩ |1⟩ Γ3
|0𝑔⟩ |1𝑔⟩

𝑏±

𝑐±

FIG. 6. Fidelity simulation. (a) Simplified level diagram used in the fidelity simulation. (b) Schematic of the photon measurement apparatus.

agating in the opposite direction. As these photons leave the cavity through a different port, this only affects the entanglement rate, but not the fidelity.

2. Atom-cavity coupling strength
In a Fabry-Perot cavity, the cooperativity for a twolevel atom at the maximum of the electric field is given by Cfp = 24F /(πk2w02) [73], where F is the cavity finesse F = πc/(Lκ), k = 2π/λ, w0 is the cavity waist, and L is the mirror separation. In a running-wave cavity, the cooperativity is lower by a factor of 4, because of the absence of constructive interference between the forward and return beams [39]. Therefore, we have C = 6F /(πk2w02), but now with F = 2πc/(Lκ), where L is the cavity rou-
nd trip length. In a multi-level atom, this is further reduced by the branching ratio Rbr from the target excited state to the target ground state. We derive the atom-cavity coupling strength g using the relation C = 4g2/(κΓ), where Γ is the atomic transition decay rate (total decay rate, not corrected for Rbr). This yields:

g=

3cRbr Γ k2w02L

(B1)

Appendix C: Fidelity simulations
To estimate the achievable entanglement rate and the contribution of various imperfections to the resulting state fidelity, we perform simulations of the atom-cavity system using the Lindblad master equation. We consider the simplified level diagram in Fig. 6a, described by the following Hamiltonian:

10

H =∆ · (|0e⟩⟨0e| + |1e⟩⟨1e|) + g · |0e⟩⟨0|a− + |0⟩⟨0e|a†− + |1e⟩⟨1|a+ + |1⟩⟨1e|a†+
+ Ω(t)/2 · (|0e⟩⟨0g| + |0g⟩⟨0e| + |1e⟩⟨1g| + |1g⟩⟨1e|) (C1)
Here, ∆ is a detuning of the atomic transitions with respect to the cavity resonance (i.e., from Doppler shifts, or from a deliberate light shift), and Ω(t) is the Rabi frequency of the two-photon excitation pulse (the intermediate state is not included explicitly).
We include the following jump operators:

c1 = Γ(1 − Rbr)|trap⟩⟨0e|, c2 = Γ(1 − Rbr)|trap⟩⟨1e|, c3 = ΓRbr|0⟩⟨0e|, c4 = ΓRbr|1⟩⟨1e|,
√ c5 = κa−,
√ c6 = κa+, c7 = Γ3/2|0g⟩⟨trap|, c8 = Γ3/2|1g⟩⟨trap|,

(C2)

where |trap⟩ is a simplified representation of the 3P1 manifold, and has equal probability of decaying into ei-
ther ground state, |0g⟩√or |1g⟩. We take the cavity output field to be aout,± = κa±, following the input-output formalism [74].

1. Bell pair fidelity
The successful generation of Bell pairs is heralded by coincident two-photon detection in the measurement apparatus shown in Fig. 6b. The output modes are related to the input modes using the beamsplitter relation [75]:

d± e±

=

cos ξ −e−iϕ sin ξ eiϕ sin ξ cos ξ

b± c±

(C3)

A coincidence between d+ and e− o√r e+ and d− heralds the Bell state |ψ−⟩ = (|10⟩−|01⟩)/ 2, while a coincidence between d+ and d− or e+ and e− heralds |ψ+⟩. Imperfections in the experiment give rise to a faulty atomic state, with an error probability that depends on the detection time of the photons. We determine this from simulation by evaluating the expectation values of the stabilizers of the Bell state as a function of the photon detection times, using the quantum regression theorem [74]

as implemented in QuTIP [76]. We first consider Bell state |ψ−⟩, evaluating the following two-time correlation
functions involving photon detection and the Pauli oper-
ators Xi, Zi acting on the qubit subspace {|0⟩ , |1⟩} on the ith qubit:

P (t1, t2) = ⟨d†+(t1)e†−(t2)e−(t2)d+(t1)⟩

(C4)

XX(t1, t2) = ⟨d†+(t1)e†−(t2)X1(t2)X2(t2)e−(t2)d+(t1)⟩ (C5)

ZZ(t1, t2) = ⟨d†+(t1)e†−(t2)Z1(t2)Z2(t2)e−(t2)d+(t1)⟩ (C6)

L(t1, t2) = ⟨d†+(t1)e†−(t2)Z12(t2)Z22(t2)e−(t2)d+(t1)⟩ (C7)

Here, P (t1, t2) is the probability density for a coincidence event to occur at times (t1, t2). XX and ZZ are the expectation values of the same probability multiplied by the X1X2 and Z1Z2 stabilizers, and L is the detection probability multiplied by the population in the qubit subspace. The ideal value of the X1X2 stabilizer is −1, which allows us to define a probability of remaining in the qubit subspace and having a Z error on the Bell state, conditioned on detecting a photon at (t1, t2):

1 pz(t1, t2) = 2

1 + XX(t1, t2) P (t1, t2)

L(t1, t2) . P (t1, t2)

(C8)

We can analogously define the probability of an X error in the qubit subspace, px, and the probability of a leakage error, pl, as:

1 px(t1, t2) = 2

1 + ZZ(t1, t2) P (t1, t2)

pl(t1, t2) =

1 − L(t1, t2) P (t1, t2)

L(t1, t2) P (t1, t2)

(C9) (C10)

Finally, the total probability of each type of error is determined by the weighted average:

1 Pz = N

pz(t1, t2)P (t1, t2)dt1dt2

(C11)

where N = P (t1, t2)dt1dt2. An analogous definition follows for Px, Pl, and the total error probability is the sum of all three types of errors. The plots in Fig. 3 show
Pz + Px + Pl, while Eqs. (C8)-(C10) are used to generate the plots in Fig. 4a-c.
Analogous expressions can be defined for the |ψ+⟩ Bell
state with the opposite coincidence pattern in modes d+, d−. However, they are the same up to expected sign of the X1X2 stabilizer in Eq. (C8), so we do not consider this case separately.

11

[1] C. Gidney and M. Eker˚a, How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits, Quantum 5, 433 (2021).
[2] M. E. Beverland, P. Murali, M. Troyer, K. M. Svore, T. Hoefler, V. Kliuchnikov, G. H. Low, M. Soeken, A. Sundaram, and A. Vaschillo, Assessing requirements to scale to practical quantum advantage (2022), arxiv:2211.07629 [quant-ph].
[3] R. V. Meter, W. J. Munro, K. Nemoto, and K. M. Itoh, Arithmetic on a distributed-memory quantum multicomputer, ACM Journal on Emerging Technologies in Computing Systems 3, 2:1 (2008).
[4] C. Monroe, R. Raussendorf, A. Ruthven, K. R. Brown, P. Maunz, L. M. Duan, and J. Kim, Large-scale modular quantum-computer architecture with atomic memory and photonic interconnects, Physical Review A 89, 022317 (2014).
[5] N. H. Nickerson, J. F. Fitzsimons, and S. C. Benjamin, Freely Scalable Quantum Technologies Using Cells of 5to-50 Qubits with Very Lossy and Noisy Photonic Links, Physical Review X 4, 041041 (2014).
[6] Y. Li and S. C. Benjamin, Hierarchical surface code for network quantum computing with modules of arbitrary size, Physical Review A 94, 042303 (2016).
[7] D. Gottesman and I. L. Chuang, Demonstrating the viability of universal quantum computation using teleportation and single-qubit operations, Nature 402, 390 (1999).
[8] S. Olmschenk, D. N. Matsukevich, P. Maunz, D. Hayes, L.-M. Duan, and C. Monroe, Quantum teleportation between distant matter qubits, Science 323, 486 (2009).
[9] W. Pfaff, B. J. Hensen, H. Bernien, S. B. van Dam, M. S. Blok, T. H. Taminiau, M. J. Tiggelman, R. N. Schouten, M. Markham, D. J. Twitchen, and R. Hanson, Unconditional quantum teleportation between distant solid-state quantum bits, Science 345, 532 (2014).
[10] K. S. Chou, J. Z. Blumoff, C. S. Wang, P. C. Reinhold, C. J. Axline, Y. Y. Gao, L. Frunzio, M. H. Devoret, L. Jiang, and R. J. Schoelkopf, Deterministic teleportation of a quantum gate between two logical qubits, Nature 561, 368 (2018).
[11] S. Storz, J. Sch¨ar, A. Kulikov, P. Magnard, P. Kurpiers, J. Lu¨tolf, T. Walter, A. Copetudo, K. Reuer, A. Akin, J.C. Besse, M. Gabureac, G. J. Norris, A. Rosario, F. Martin, J. Martinez, W. Amaya, M. W. Mitchell, C. Abellan, J.-D. Bancal, N. Sangouard, B. Royer, A. Blais, and A. Wallraff, Loophole-free Bell inequality violation with superconducting circuits, Nature 617, 265 (2023).
[12] R. Sahu, L. Qiu, W. Hease, G. Arnold, Y. Minoguchi, P. Rabl, and J. M. Fink, Entangling microwaves with light, Science 380, 718 (2023).
[13] S. Meesala, D. Lake, S. Wood, P. Chiappina, C. Zhong, A. D. Beyer, M. D. Shaw, L. Jiang, and O. Painter, Quantum entanglement between optical and microwave photonic qubits (2023), arxiv:2312.13559 [quant-ph].
[14] D. L. Moehring, P. Maunz, S. Olmschenk, K. C. Younge, D. N. Matsukevich, L. M. Duan, and C. Monroe, Entanglement of single-atom quantum bits at a distance, Nature 449, 68 (2007).
[15] S. Ritter, C. No¨lleke, C. Hahn, A. Reiserer, A. Neuzner, M. Uphoff, M. Mu¨cke, E. Figueroa, J. Bochmann, and G. Rempe, An elementary quantum network of single

atoms in optical cavities, Nature 484, 195 (2012). [16] J. Hofmann, M. Krug, N. Ortegel, L. G´erard, M. We-
ber, W. Rosenfeld, and H. Weinfurter, Heralded Entanglement Between Widely Separated Atoms, Science 337, 72 (2012). [17] H. Bernien, B. Hensen, W. Pfaff, G. Koolstra, M. S. Blok, L. Robledo, T. H. Taminiau, M. Markham, D. J. Twitchen, L. Childress, and R. Hanson, Heralded entanglement between solid-state qubits separated by three metres, Nature 497, 86 (2013). [18] D. Hucul, I. V. Inlek, G. Vittorini, C. Crocker, S. Debnath, S. M. Clark, and C. Monroe, Modular entanglement of atomic qubits using p-
hotons and phonons, Nature Physics 11, 37 (2014). [19] A. Delteil, Z. Sun, W.-b. Gao, E. Togan, S. Faelt, and A. Imamog˘lu, Generation of heralded entanglement between distant hole spins, Nature Physics 12, 218 (2016). [20] L. J. Stephenson, D. P. Nadlinger, B. C. Nichol, S. An, P. Drmota, T. G. Ballance, K. Thirumalai, J. F. Goodwin, D. M. Lucas, and C. J. Ballance, High-Rate, HighFidelity Entanglement of Qubits Across an Elementary Quantum Network, Physical Review Letters 124, 110501 (2020). [21-
] T. van Leent, M. Bock, F. Fertig, R. Garthoff, S. Eppelt, Y. Zhou, P. Malik, M. Seubert, T. Bauer, W. Rosenfeld, W. Zhang, C. Becher, and H. Weinfurter, Entangling single atoms over 33 km telecom fibre, Nature 607, 69 (2022). [22] V. Krutyanskiy, M. Galli, V. Krcmarsky, S. Baier, D. A. Fioretto, Y. Pu, A. Mazloom, P. Sekatski, M. Canteri, M. Teller, J. Schupp, J. Bate, M. Meraner, N. Sangouard, B. P. Lanyon, and T. E. Northup, Entanglement of Trapped-Ion Qubits Separated by 230 Meters, Physical -
Review Letters 130, 050803 (2023). [23] C. M. Knaut, A. Suleymanzade, Y.-C. Wei, D. R. Assumpcao, P.-J. Stas, Y. Q. Huan, B. Machielse, E. N. Knall, M. Sutula, G. Baranes, N. Sinclair, C. DeEknamkul, D. S. Levonian, M. K. Bhaskar, H. Park, M. Lonˇcar, and M. D. Lukin, Entanglement of Nanophotonic Quantum Memory Nodes in a Telecommunication Network (2023), arxiv:2310.01316 [quant-ph]. [24] D. Bluvstein, S. J. Evered, A. A. Geim, S. H. Li, H. Zhou, T. Manovitz, S. Ebadi, M. Cain, M. Kalinowski, D. H-
angleiter, J. P. B. Ataides, N. Maskara, I. Cong, X. Gao, P. S. Rodriguez, T. Karolyshyn, G. Semeghini, M. J. Gullans, M. Greiner, V. Vuleti´c, and M. D. Lukin, Logical quantum processor based on reconfigurable atom arrays, Nature (2023). [25] T. M. Graham, Y. Song, J. Scott, C. Poole, L. Phuttitarn, K. Jooya, P. Eichler, X. Jiang, A. Marra, B. Grinkemeyer, M. Kwon, M. Ebert, J. Cherek, M. T. Lichtman, M. Gillette, J. Gilbert, D. Bowman, T. Ballance, C. Campbell, E. D. Dahl, O. Crawford, N. S. Blu-
nt, B. Rogers, T. Noel, and M. Saffman, Multi-qubit entanglement and algorithms on a neutral-atom quantum computer, Nature 604, 457 (2022). [26] S. Ma, G. Liu, P. Peng, B. Zhang, S. Jandura, J. Claes, A. P. Burgers, G. Pupillo, S. Puri, and J. D. Thompson, High-fidelity gates and mid-circuit erasure conversion in an atomic qubit, Nature 622, 279 (2023). [27] W. Huie, L. Li, N. Chen, X. Hu, Z. Jia, W. K. C. Sun,

12

and J. P. Covey, Repetitive readout and real-time control of nuclear spin qubits in 171Yb atoms, PRX Quantum 4, 030337 (2023). [28] J. W. Lis, A. Senoo, W. F. McGrew, F. Ro¨nchen, A. Jenkins, and A. M. Kaufman, Midcircuit Operations Using the omg Architecture in Neutral Atom Arrays, Physical Review X 13, 041035 (2023). [29] M. A. Norcia, W. B. Cairncross, K. Barnes, P. Battaglino, A. Brown, M. O. Brown, K. Cassella, C.-A. Chen, R. Coxe, D. Crow, J. Epstein, C. Griger, A. M. W. Jones, H. Kim, J. M.-
 Kindem, J. King, S. S. Kondov, K. Kotru, J. Lauigan, M. Li, M. Lu, E. Megidish, J. Marjanovic, M. McDonald, T. Mittiga, J. A. Muniz, S. Narayanaswami, C. Nishiguchi, R. Notermans, T. Paule, K. A. Pawlak, L. S. Peng, A. Ryou, A. Smull, D. Stack, M. Stone, A. Sucich, M. Urbanek, R. J. M. Van De Veerdonk, Z. Vendeiro, T. Wilkason, T.-Y. Wu, X. Xie, X. Zhang, and B. J. Bloom, Midcircuit Qubit Measurement and Rearrangement in a Yb 171 Atomic Array, Physical Review X 13, 041034 (2023). [30] Y. Wu, S. K-
olkowitz, S. Puri, and J. D. Thompson, Erasure conversion for fault-tolerant quantum computing in alkaline earth Rydberg atom arrays, Nature Communications 13, 4657 (2022). [31] K. Sahay, J. Jin, J. Claes, J. D. Thompson, and S. Puri, High-Threshold Codes for Neutral-Atom Qubits with Biased Erasure Errors, Physical Review X 13, 041013 (2023). [32] W. Huie, S. G. Menon, H. Bernien, and J. P. Covey, Multiplexed telecommunication-band quantum networking with atom arrays in optical cavities, Physical -
Review Research 3, 043154 (2021). [33] C. B. Young, A. Safari, P. Huft, J. Zhang, E. Oh, R. Chinnarasu, and M. Saffman, An architecture for quantum networking of neutral atom processors, Applied Physics B 128, 151 (2022). [34] S. Saskin, J. T. Wilson, B. Grinkemeyer, and J. D. Thompson, Narrow-Line Cooling and Imaging of Ytterbium Atoms in an Optical Tweezer Array, Physical Review Letters 122, 143002 (2019). [35] J. P. Covey, A. Sipahigil, S. Szoke, N. Sinclair, M. Endres, and O. Painter, Telecom--
Band Quantum Optics with Ytterbium Atoms and Silicon Nanophotonics, Physical Review Applied 11, 034044 (2019). [36] N. Schine, A. Ryou, A. Gromov, A. Sommer, and J. Simon, Synthetic landau levels for photons, Nature 534, 671 (2016). [37] N. Jia, A. Georgakopoulos, A. Ryou, N. Schine, A. Sommer, and J. Simon, Observation and characterization of cavity Rydberg polaritons, Physical Review A 93, 41802 (2016). [38] K. C. Cox, D. H. Meyer, N. A. Schine, F. K. Fatemi, and P. D. Kunz, Increased atom-cavit-
y coupling and stability using a parabolic ring cavity, Journal of Physics B: Atomic, Molecular and Optical Physics 51, 195002 (2018). [39] Y.-T. Chen, M. Szurek, B. Hu, J. De Hond, B. Braverman, and V. Vuletic, High finesse bow-tie cavity for strong atom-photon coupling in Rydberg arrays, Optics Express 30, 37426 (2022). [40] N. Jia, N. Schine, A. Georgakopoulos, A. Ryou, A. Sommer, and J. Simon, Photons and polaritons in a brokentime-reversal nonplanar resonator, Physical Review A 97, 013802 (20-
18).

[41] D. L. Moehring, M. J. Madsen, K. C. Younge, R. N. Kohn, Jr., P. Maunz, L.-M. Duan, C. Monroe, and B. B. Blinov, Quantum networking with photons and trapped atoms (Invited), Journal of the Optical Society of America B 24, 300 (2007).
[42] D. Bluvstein, H. Levine, G. Semeghini, T. T. Wang, S. Ebadi, M. Kalinowski, A. Keesling, N. Maskara, H. Pichler, M. Greiner, V. Vuleti´c, and M. D. Lukin, A quantum processor based on coherent transport of entangled atom arrays, Nature 604, 451 (2022).
[43] G. S. Vasilev, D. Ljunggren, and A. Kuhn, Single photons made-to-measure, New Journal of Physics 12, 063024 (2010).
[44] E. Timurdogan, Z. Su, R.-J. Shiue, C. V. Poulton, M. J. Byrd, S. Xin, and M. R. Watts, APSUNY Process Design Kit (PDKv3.0): O, C and L Band Silicon Photonics Component Libraries on 300mm Wafers, in 2019 Optical Fiber Communications Conference and Exhibition (OFC) (2019) pp. 1–3.
[45] S. Ma, A. P. Burgers, G. Liu, J. Wilson, B. Zhang, and J. D. Thompson, Universal Gate Operations on Nuclear Spin Qubits in an Optical Tweezer Array of Yb 171 Atoms, Physical Review X 12, 021028 (2022).
[46] A. Jenkins, J. W. Lis, A. Senoo, W. F. McGrew, and A. M. Kaufman, Ytterbium Nuclear-Spin Qubits in an Optical Tweezer Array, Physical Review X 12, 021027 (2022).
[47] B. Merkel, K. Thirumalai, J. E. Tarlton, V. M. Scha¨fer, C. J. Ballance, T. P. Harty, and D. M. Lucas, Magnetic field stabilization system for atomic physics experiments, Review of Scientific Instruments 90, 044702 (2019).
[48] T. G. Tiecke, J. D. Thompson, N. P. de Leon, L. R. Liu, V. Vuleti´c, and M. D. Lukin, Nanophotonic quantum phase switch with a single atom, Nature 508, 241 (2014).
[49] N. Schine, A. W. Young, W. J. Eckner, M. J. Martin, and A. M. Kaufman, Long-lived Bell states in an array of optical clock qubits, Nature Physics 18, 1067 (2022).
[50] H. Shibata, K. Shimizu, H. Takesue, and Y. Tokura, Ultimate low system dark-count rate for superconducting nanowire single-photon detector, Optics Letters 40, 3428 (2015).
[51] C. Schuck, W. H. P. Pernice, and H. X. Tang, Waveguide integrated low noise NbTiN nanowire single-photon detectors with milli-Hz dark count rate, Scientific Reports 3, 1893 (2013).
[52] A. P. Burgers, S. Ma, S. Saskin, J. Wilson, M. A. Alarco´n, C. H. Greene, and J. D. Thompson, Controlling Rydberg Excitations Using Ion-Core Transitions in Alkaline-Earth Atom-Tweezer Arrays, PRX Quantum 3, 020326 (2022).
[53] B. Zhang, P. Peng, A. Paul, and J. D. Thompson, A scaled local gate controller for optically addressed qubits (2023), arxiv:2310.08539 [quant-ph].
[54] P. Aliferis and J. Preskill, Fault-tolerant quantum computation against biased noise, Physical Review A 78, 052331 (2008).
[55] J. P. Bonilla Ataides, D. K. Tuckett, S. D. Bartlett, S. T. Flammia, and B. J. Brown, The xzzx surface code, Nature Communications 12, 2172 (2021).
[56] M. Grassl, Th. Beth, and T. Pellizzari, Codes for the quantum erasure channel, Physical Review A 56, 33 (1997).
[57] T. M. Stace, S. D. Barrett, and A. C. Doherty, Thresholds for Topological Codes in the Presence of Loss, Physical Review Letters 102, 200501 (2009).

13

[58] C. A. Pattison, M. E. Beverland, M. P. da Silva, and N. Delfosse, Improved quantum error correction using soft information (2021), arxiv:2107.13589 [quant-ph].
[59] T.-M. Zhao, H. Zhang, J. Yang, Z.-R. Sang, X. Jiang, X.H. Bao, and J.-W. Pan, Entangling different-color photons via time-resolved measurement and active feed forward, Physical Review Letters 112, 103602 (2014).
[60] A. J. Menssen, A. Hermans, I. Christen, T. Propson, C. Li, A. J. Leenheer, M. Zimmermann, M. Dong, H. Larocque, H. Raniwala, G. Gilbert, M. Eichenfield, and D. R. Englund, Scalable photonic integrated circuits for high-fidelity light control, Optica 10, 1366 (2023).
[61] L. Jiang, J. M. Taylor, A. S. Sørensen, and M. D. Lukin, Distributed quantum computation based on small quantum registers, Physical Review A 76, 062323 (2007).
[62] S. Ebadi, T. T. Wang, H. Levine, A. Keesling, G. Semeghini, A. Omran, D. Bluvstein, R. Samajdar, H. Pichler, W. W. Ho, S. Choi, S. Sachdev, M. Greiner, V. Vuleti´c, and M. D. Lukin, Quantum phases of matter on a 256-atom programmable quantum simulator, Nature 595, 227 (2021).
[63] P. Scholl, M. Schuler, H. J. Williams, A. A. Eberharter, D. Barredo, K.-N. Schymik, V. Lienhard, L.-P. Henry, T. C. Lang, T. Lahaye, A. M. La¨uchli, and A. Browaeys, Quantum simulation of 2d antiferromagnets with hundreds of rydberg atoms, Nature 595, 233 (2021).
[64] P. Scholl, A. L. Shaw, R. B.-S. Tsai, R. Finkelstein, J. Choi, and M. Endres, Erasure conversion in a highfidelity Rydberg quantum simulator, Nature 622, 273 (2023).
[65] S. J. Evered, D. Bluvstein, M. Kalinowski, S. Ebadi, T. Manovitz, H. Zhou, S. H. Li, A. A. Geim, T. T. Wang, N. Maskara, H. Levine, G. Semeghini, M. Greiner, V. Vuleti´c, and M. D. Lukin, High-fidelity parallel entangling gates on a neutral-atom quantum computer, Nature 622, 268–272 (2023).
[66] C. Gidney, M. Newman, A. Fowler, and M. Broughton, A Fault-Tolerant Honeycomb Memory, Quantum 5, 605 (2021).

[67] Q. Xu, J. P. B. Ataides, C. A. Pattison, N. Raveendran, D. Bluvstein, J. Wurtz, B. Vasic, M. D. Lukin, L. Jiang, and H. Zhou, Constant-Overhead Fault-Tolerant Quantum Computation with Reconfigurable Atom Arrays (2023), arxiv:2308.08648 [quant-ph].
[68] C. Horsman, A. G. Fowler, S. Devitt, and R. V. Meter, Surface code quantum computing by lattice surgery, New Journal of Physics 14, 123011 (2012).
[69] J. Ramette, J. Sinclair, N. P. Breuckmann, and V. Vuleti´c, Fault-Tolerant Connection of Error-Corrected Qubits with Noisy Links (2023), arxiv:2302.01296 [mathph, physics:quant-ph].
[70] N. P. Breuckmann and J. N. Eberhardt, Quantum Low-Density Parity-Check Codes, PRX Quantum 2, 21 (2021).
[71] C. J. Bowers, D. Budker, E. D. Commins, D. DeMille, S. J. Freedman, A. T. Nguyen, S. Q. Shang, and M. Zolotorev, Experimental investigation of excited-state lifetimes in atomic ytterbium, Physical Review A 53, 3103 (1996).
[72] M. Jaffe, L. Palm, C. Baum, L. Taneja, A. Kumar, and J. Simon, Understanding and suppressing backscatter in optical resonators, Optica 9, 878 (2022).
[73] H. Tanji-Suzuki, I. D. Leroux, M. H. Schleier-Smith, M. Cetina, A. T. Grier, J. Simon, and V. Vuleti´c, Interaction between Atomic Ensembles and Optical Resonators, in Advances In Atomic, Molecular, and Optical Physics, Vol. 60 (Elsevier, 2011) pp. 201–237.
[74] C. Gardiner and P. Zoller, Quantum noise: a handbook of Markovian and non-Markovian quantum stochastic methods with applications to quantum optics (Springer Science & Business Media, 2004).
[75] A. Kiraz, M. Atatu¨re, and A. Imamog˘lu, Quantum-dot single-photon sources: Prospects for applications in linear optics quantum-information processing, Physical Review A 69, 032305 (2004).
[76] J. Johansson, P. Nation, and F. Nori, Qutip 2: A python framework for the dynamics of open quantum systems, Computer Physics Communications 184, 1234 (2013).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:43.015Z
- **Text Length:** 63762 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
