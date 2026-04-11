# PDF Document: Briceño et al. - 2024 - Toward coherent quantum computation of scattering amplitudes with a measurement-based photonic quant.pdf

**File Path:** Briceño et al. - 2024 - Toward coherent quantum computation of scattering amplitudes with a measurement-based photonic quant.pdf

**Processed Date:** 2026-02-10T18:16:52.662Z

**File Size:** 1010.46 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2700

**Title:** Toward coherent quantum computation of scattering amplitudes with a measurement-based photonic quantum processor

**Collection:** Large Files

---

## Extracted Text Content

PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
Toward coherent quantum computation of scattering amplitudes with a measurement-based photonic quantum processor
Raúl A. Briceño,1,2,* Robert G. Edwards,3,† Miller Eaton,4 Carlos González-Arciniegas ,4 Olivier Pfister ,4,‡ and George Siopsis5,§
1Department of Physics, University of California, Berkeley, California 94720, USA 2Nuclear Science Division, Lawrence Berkeley National Laboratory, Berkeley, California 94720, USA 3Thomas Jefferson National Accelerator Facility, 12000 Jefferson Avenue, Newport News, Virginia 23606, USA 4Department of Physics, University of Virginia, 382 McCormick Rd, Charlottesville, Virginia 22904-4714, USA 5Department of Physics and Astronomy, University of Tennessee, Knoxville, Tennessee 37996-1200, USA
(Received 3 January 2024; accepted 9 October 2024; published 25 October 2024)
In recent years, applications of quantum simulation have been developed to study the properties of strongly interacting theories. This has been driven by two factors: on the one hand, needs from theorists to have access to physical observables that are prohibitively difficult to study using classical computing; on the other hand, quantum hardware becoming increasingly reliable and scalable to larger systems. In this work, we discuss the feasibility of using quantum optical simulation for studying -
scattering observables that are presently inaccessible via lattice QCD and are at the core of the experimental program at Jefferson Laboratory, the future Electron-Ion Collider, and other accelerator facilities. We show that recent progress in measurement-based photonic quantum computing can be leveraged to provide deterministic generation of required exotic gates and implementation in a single photonic quantum processor.
DOI: 10.1103/PhysRevResearch.6.043065
I. INTRODUCTION
A. Quantum simulation of subatomic physics
It is now well-accepted that the vast majority of subatomic phenomena are described by the Standard Model of particles. This encodes three of the known fundamental forces, the opaquest of which is the strong nuclear force. This force is responsible for the formation and structure of all atomic nuclei and countless of other experimentally observed particles.1 Although we know this force is described by quantum chromodynamics (QCD), the theory of quarks and gluons, it is not yet evident how the dyna-
mics of these fundamental particles result in emergent phenomena taking place throughout the universe and experiments across the world. As a result, one of the primary goals of modern-day nuclear physics has been to construct accurate methods for accessing the consequences of the theory. The primary challenge in studying QCD is its nonperturbative nature. This has motivated the development of a
*Contact author: rbriceno@berkeley.edu †Contact author: edwards@jlab.org ‡Contact author: olivier.pfister@gmail.com §Contact author: siopsis@tennessee.edu
Published by the American Physical Society under the terms of the Creative Commons Attribution 4.0 International license. Further distribution of this work must maintain attribution to the author(s) and the published article’s title, journal citation, and DOI.
1Collectively, asymptotic states of QCD are known as hadrons.
large variety of frameworks to constrain physical quantities. Arguably, the most successful method that has been demonstrated to be able to access QCD observables without making approximations on the underlying dynamics goes by the name of lattice QCD. Lattice QCD makes use of Monte Carlo techniques to statistically sample the Euclidean path integral of QCD. This provides statistical determination of correlation functions of the theory defined in Euclidean spacetime, which can subsequently be rela-
ted to a variety of key observables of the theory. Most notably, one can determine quantities that are independent of time, like the spectrum and local matrix elements.2 As one would expect, this procedure puts tight constraints on the physics that may be directly accessed. In particular, quantities that are sensitive to the time signature or static properties of systems with finite chemical potential are currently just outside of the reach of lattice QCD calculations. In general, these quantities-
 introduce sign problems that prohibit their direct calculation.3 The desire to have real-time, nonperturbative quantities, among other observables that cannot be obtained directly via lattice QCD, has turned the field towards considering the use of quantum computing (QC). A driving motivation for having a nonperturbative realtime formulation of quantum field theories (QFT) is the
2We point the reader to Refs. [1,2] for recent reviews on the progress of lattice QCD community to measure single- and multihadron observables, respectively. 3Some methods have been constructed to indirectly access timedependent quantities, e.g., Refs. [3,4].
2643-1564/2024/6(4)/043065(22) 043065-1 Published by the American Physical Society

RAÚL A. BRICEÑO et al. PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
determination of scattering amplitude of few-body systems. These can be obtained from infinite-volume real-time correlation functions following the Lehmann, Symanzik and Zimmermann reduction procedure. Most physical properties of few-body systems are encoded in scattering amplitudes and they are the primary focus of particle and nuclear experimental searches. As a result, having a nonperturbative mechanism to access these from the Standard Model is of utmost importance. In this work, we focus our -
attention on the feasibility of using quantum optical simulation for determining scattering observables for QFTs. Note also that QC offers a promising approach to avoid the sign problem in classical Monte Carlo sampling techniques for lattice QCD, a significant challenge in classical simulations, particularly those involving fermions. In classical Monte Carlo simulations, the path integral formulation often leads to integrals over complex-valued probability amplitudes. This can result in severe ca-
ncellations, making it difficult to obtain statistically significant results. This issue, known as the sign problem, restricts the ability to study large-mass atomic nuclei, and many important physical properties, particularly at finite baryon density and chemical potential, or real-time evolution. QC relies on unitary evolution, avoiding the problematic summation of oscillating terms, as the evolution is governed by the actual physical dynamics of the system. The Hamiltonian of the system is simu-
lated directly and the system evolves in real time, which bypasses the need for Monte Carlo integration and the associated sign problem. While Trotterization (discretizing time evolution into small steps) introduces its own set of errors, these are different from the sign problem and can be systematically controlled and reduced using a mixture of quantum and classical error correction techniques, such as higher-order decompositions, adaptive or randomized Trotterization, error extrapolation, quant-
um error mitigation techniques, and quantum error correction codes. The sign problem is particularly severe at finite baryon density. QC can naturally handle the complex phases arising in such scenarios, providing access to regions of the phase diagram that are inaccessible to classical simulations. Moreover, quantum simulations can explore nonperturbative phenomena in lattice QCD that are inaccessible by classical methods. This includes the ability to calculate pure as well as thermal states, and-
 explore out-of-equilibrium phenomena and early universe dynamics (see, e.g., Ref. [5] and references therein).
B. Quantum simulation and quantum sampling: promises and limitations
As first remarked by Feynman [6], using QC for the quantum simulation of an N-qubit physical system provides an exponential speedup because QC requires but a polynomial overhead ∼O(N p) (accounting for quantum error correction) whereas classically solving quantum evolution, e.g., Schrödinger’s equation, requires diagonalizing a 22N -dimensional Hamiltonian matrix. Lloyd confirmed this quantum advantage [7] by remarking that a vast majority of physically relevant Hamiltonians (hard-sphere and van d-
er Waals gases, Ising and Heisenberg spin systems, strong and weak interactions, and some gauge theories) have a local
structure, yielding a polynomial number ∼O(Nk ) of Hamiltonian parameters. Building on these seminal works, a great deal of progress has been made in setting a pathway towards the quantum simulation of quantum field theories [8–18]. Whereas quantum evolution quantum simulation can be implemented by “brute force” QC using the gate/circuit model, a potentially more promising approach is to find direct mappings between the physical system to be simulated and the experimental simulator. An exemplar is-
 the quantum simulation of the quantum field theory of a self-interacting scalar, initially proposed over qubits [8,9] and subsequently adapted to continuous-variable quantum optical fields, also known as qumodes, in lieu of qubits, in Ref. [10]. In both cases, an effective field theory is employed with spatial discretization of the field. In the latter case, an additional benefit is the simulation of massive bosonic quantum fields with quantum optical fields. Subsequently, Ref. [11] raised the is-
sue that the need to restrict the space to be finite would naïvely prohibit the access to scattering observables, given the absence of asymptotic states in a finite volume. This same paper provided a practical solution to this issue, by constructing carefully defined wave packets, thereby allowing physical scattering amplitudes to be, in principle, determined with finite resources. The ability to ultimately perform any quantum simulation hinges upon reliable quantum hardware. In recent years there-
 has been some progress on this front. Two approaches might be defined: either find a breakthrough application for a noisy intermediate-scale quantum (NISQ) device [19] that would yield genuine quantum advantage, or find a path beyond the NISQ regime to achieve scalable, fault-tolerant quantum computing. While the former approach is applicable to simpler quantum technology such as quantum sensing (e.g., LIGO [20]), it has not yet been shown to be relevant to quantum computing (QC). More specialize-
d, nonuniversal quantum machines, such as quantum circuit samplers [21], boson samplers [22], and Gaussian boson samplers [23], have claimed a quantum advantage over classical computers for the specific task of sampling from a classically-hard-to-calculate probability distribution [21,24,25]. Quantum samplers operate efficiently by simply measuring the outputs of their quantum circuit, the measurement results constituting samples from the associated classically intractable quantum probability dist-
ribution. Indeed, these outputs can only be simulated classically (e.g., by Monte Carlo methods) if their unitary evolution has been solved first, and that is hard to calculate classically. It is then natural to consider, as a useful follow-up application for a quantum sampler, the empirical reconstruction of the classically intractable quantum probability distributions from the histogram obtained by statistically significant sampling. This was proposed, for example, to compute Franck-Condon facto-
rs in molecular spectra [26] or to detect graph isomorphism [27]. However, these proposed extensions of boson sampling beyond its initial intent face a major roadblock that negates their promise because statistical sampling incurs an exponential or superexponential overhead in these cases. Two factors are at play here: (i) the number of samples required to reach statistical significance is linear in the number of variate
043065-2

TOWARD COHERENT QUANTUM COMPUTATION OF ... PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
realizations [28], which is favorable but, (ii) the latter can scale exponentially or superexponentially (in the case of the multinomial distribution of boson sampling) with the size of the system (number of qubits or qumodes in the quantum circuit). Thus quantum probability reconstruction will incur as prohibitive a cost as classical simulation and the (genuine) sampling advantage demonstrated by quantum samplers so far [21,24,25] is fated to remain just that: a sampling advantage and not a compu-
tational advantage. As we will see later, the quantum sampling in lattice quantum field theories studied in this work is not always subject to such an unfavorable scaling, which opens the door to bona fide simulation of quantum probability distributions and quantum probability amplitude distributions.
C. Quantum optics for massively scalable, continuous-variable quantum simulation
An essential motivation of the approach in this paper is the record scalability that stems from the use of continuousvariable quantum information (CVQI), which is encoded in qumodes rather than qubits. The qumode encoding makes use of bosonic field amplitudes, such as the quadratures Q =
(a + a†)/√2 and P = i(a† − a)/√2 of the quantized electromagnetic field, a being the photon annihilation operator (see Appendix for more details). This approach is now established as being fully deterministic and eminently scalable [29] to thousands and even millions of entangled qumodes, as was demonstrated by the experimental generation of record-size CV cluster entangled states [30–34] which constitute universal resources for quantum computing [35–37]. Again, we emphasize that CVQC makes no use-
 of postselected resources whatsoever. An important question is that of quantum error correction and fault tolerance. As was mentioned above, one might not expect NISQ technology to be able to reach interesting computational performance and therefore a path toward fault tolerant quantum simulation is required. While a full fault tolerance study is left for a future paper, we outline such a path in Sec. V C. Suffice it to say here that qubit encodings are still attainable over CVQI [38], by use of -
the Gottesman-KitaevPreskill (GKP) encoding [39], for which a fault tolerance threshold was proven to exist for CVQC [40]. In this work, we derive the various quantum optical building blocks necessary to quantum simulate timedependent amplitudes for scalar field theories using a photonic continuous-variable architecture as a first step towards understanding time evolution in lattice QCD. In particular, we focus our attention on the determination of matrix elements involving time-separated currents-
. In Sec. II, we begin by providing a detailed description of the classes of matrix elements we are after. Furthermore, provide a conceptually simple for accessing spectra and matrix elements of states of an interacting theory using real-time correlation functions. In Sec. III, we discuss a procedure for using quantum optics for performing quantum simulations of complex field theory. In Sec. IV, we apply this procedure to the coherent quantum simulation of correlators. In Sec. V, we show how techn-
iques from measurement-based quantum computing can be
leveraged to simulate current correlators. Finally, in Sec. VI we conclude.
II. PHYSICAL OBSERVABLES FROM MINKOWSKI CORRELATORS
We begin by reviewing a class of scattering amplitudes that are at the core of the experimental program at Jefferson Lab and the future Electron-Ion Collider, but that are presently inaccessible via lattice QCD. These are time-sensitive matrix elements of the form 〈Pf |J μ(t )J ν (0)|Pi〉, where t is real time
separating the electromagnetic current J μ, μ is the Lorentz index, and |Pi〉 and 〈Pf | denote generic initial and final states with four-momenta Pi and Pf respectively. By determining these matrix elements as a function of time, one can obtain a rich set of the structure of information of the initial/final states. As a concrete example, if one considers the case where P2
f = P2
i = m2, where m is the mass of a stable hadron, the Fourier transform of this matrix element results in the virtual Compton scattering amplitude,
C=i
∫
dt dx eiq·x〈Pf |T [J μ(t , x)J ν (0)]|Pi〉conn., (1)
where we have left the kinematic dependence of the amplitude implicit, the “conn.” subscript means that only fully connected diagrams contribute to the amplitude, q is the four-vector denoting the momenta carried by one of the external currents, we have assumed the states have appropriate relativistic normalization, and T denotes the time-ordering operator.4 This virtual Compton scattering amplitude can be used, for example, to constrain the basic functions describing the distributions of the quar-
ks and gluons inside the hadron [43]. This is just one example of a broad class of amplitudes that are currently inaccessible via Euclidean correlation functions that may, in principle, be determined using Minkowski correlators. More generally, by determining matrix elements of time-dependent products of external cur
rents, 〈Pf | ∏
n J (xn)|Pi〉, and using the Lehmann-SymanzikZimmermann reduction formula one can quite literally obtain any scattering amplitude desired [44]. This would be a major advantage over lattice QCD. Here we will discuss at most the first nontrivial example, namely amplitudes of the same class as the Compton scattering amplitude. Having given a concrete example of an observable of interest, it is worthwhile to make some generalities regarding the access of scattering amplitudes via numerical methods. It -
is generally true that physical quantities of a QFT can be obtained directly or indirectly from real-time correlation functions. In practice, in order to evaluate correlation functions, one must resort to introducing regulators. Lattice field theories are defined by the introduction of specific ultraviolet (UV) and infrared (IR) regulators. The UV regulator is the smallest allowed spacetime separation, known as the lattice spacing, and is normally labeled as a. In contrast, the IR regulator is the-
 size of the spacetime volume (V). For example, if we consider theories in 1 + 1D, the spacetime volume would be
4A detailed recent discussion of this amplitude can be found in Refs. [41,42].
043065-3

RAÚL A. BRICEÑO et al. PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
V = T × L where T is the temporal extent and L is the spatial extent. Naïvely, one can recover a desired physical observable M by taking the limit in which these regularities are removed, e.g., M = lima→0,L→∞ M(a, L). In general, these limits are either not well defined or impractical to achieve. This subtle point is of significant importance when interested in the determination of scattering amplitudes. As previously mentioned, Ref. [11] explained why scattering amplitudes are not directly access-
ible from correlation functions defined in a finite space due to the absence of asymptotic states. That being said, this limitation is lifted in the aforementioned reference.
A. Definitions and notations
As discussed in the introduction, a primary shortcoming of the modern-day lattice QCD program is its inability to access correlation functions defined in real time. Here we discuss how time-dependent matrix elements, of the kind shown on the right-hand side of Eq. (1), could in principle be obtained using real-time quantum computations of the theory. To access these, it will be necessary to first consider the simpler correlation functions. Before proceeding with the definition and understanding of-
 the desired correlation functions, it is useful to introduce some concepts. First, for simplicity, we will assume that the fields of the underlying quantum field of interest are real scalars. This simplifies the subsequent expressions while leaving the key message unchanged. Second, we will assume the presence of an IR regulator that renders the spectrum discrete. A natural example of this would be making the volume finite, which will be necessary in future calculations. This would also make the -
momenta discrete. Such a regulator would discretize the eigenstates of both the free and full Hamiltonian labeled as H0 and H, respectively, with eigenstates and eigenvalues defined by
H0| 〉0 = E (0)| 〉0, (2)
H| 〉 = E | 〉, (3)
where is a vector comprised of the quantum numbers that define the eigenstate. We reserve the special symbol of | 〉0 for the vacuum of the free Hamiltonian (| 〉0 = |0〉o), which
we conveniently fix to have zero energy (E (0)
0 = 0). Note that we will use the state normalization
〈 f | i〉 = δ i, f , (4)
which differs from the standard infinite-volume normalization for relativistic states. To simulate dynamics, we will use optical field modes and identify the eigenstates of the free Hamiltonian |n〉o with the Fock states of the optical simulating field,
N|n〉γ = n|n〉γ , (5)
where N = a†a is the photon number operator of the corresponding mode, and the subscript γ emphasizes that the state is defined in terms of the optical field. We will also need the eigenstates of the amplitude and phase quadratures of the quantum optical field [see Eq. (A1) in the Appendix],
respectively,
Q|s〉γq = s|s〉γq ,
P|s〉γp = s|s〉γp. (6)
The quadratures Q and P act similarly to the position and momentum, respectively, of a harmonic oscillator. We will concentrate on matrix elements of currents, which are operators that can be written in terms of the fundamental fields of the theory, and their matrix elements can encode the physical properties of the states. A notable example is the electromagnetic vector current, J μ whose matrix elements can, among other things, provide constraints on the charge distribution inside a given state,-
 as well as other observables of interest.
B. Accessing the spectrum
Accessing any one state of the interacting theory is generally challenging. A more modest goal is to probe properties of these states. Here we introduce a methodology for accessing the spectrum of the full Hamiltonian, without having to resolve the eigenstates.5 Instead, we use eigenstates of the free Hamiltonian, which are more readily accessible as probes. This is a soft assumption since one could use any basis of states as probes into the eigenstates of the full Hamiltonian, as long as these ov-
erlap with the desired sector of the theory. Let | i〉0 and | f 〉0 be arbitrary eigenstates of H0, where i and f are vectors comprised of the quantum numbers defining the corresponding states. Then we define a two-point correlation function,
C2pt.(t ) = 0〈 f |e−itH | i〉0. (7)
as a matrix element of the unitary evolution operation on the basis of free states of the theory, making it suitable for quantum simulation with the free states identified with suitable Fock states of the optical field. By inserting a complete set of states, we can rewrite the correlation function as
C2pt.(t ) = ∑
n
e−it En
0〈 f |n〉〈n| i〉0, (8)
making explicit the connection between the time dependence of the correlators and the spectrum of the full Hamiltonian H. Modern-day lattice QCD calculations exploit a similar relation between Euclidean correlators and the spectrum, where
the former can be written as ∑
n cne−τEn in imaginary time, τ . The coefficients cn encode the overlap between desired states and the operators used to access them. Since the spectrum is time-independent, the spectra obtained using Minkowski and Euclidean correlation functions are identical. Since Euclidean correlators are sums over exponentially decaying functions, they are dominated by low-lying states at “large” imaginary time, allowing systematic determination of these states. Determining the energies of the theory from
5Note that the former is compatible with quantum simulation whereas the latter is not, as it carries the well-known exponential overhead of quantum state estimation.
043065-4

TOWARD COHERENT QUANTUM COMPUTATION OF ... PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
FIG. 1. Shown are the values of C2pt.(ω, T ) [defined in Eq. (9)] and C ̃2pt.(ω, T ) [defined in Eq. (10)] as red solid lines and green dashed lines respectively. In making these plots, we used a simple toy model with a single stable particle described in the text. The vertical dashed lines are the values of actual spectrum of the model. For C ̃2pt.(ω, T ), we used m t = 1/10. The imaginary part of ω has been fixed to m/100. The top panel corresponds to T = 10/m, while the bottom corresponds to T -
= 100/m.
Minkowski correlators is slightly more challenging since all states in principle contribute at any given time. Various techniques have been proposed in the literature [45–47]. Here we present a conceptually simple but perhaps computationally impractical one. As will be shown, in addition to being systematically improvable, the advantage of this method is that it is easily generalizable to more complicated quantities like the desired long-range matrix elements. Assuming we have constrained the corr-
elation functions for times in the range of t ∈ [0, T ], Eq. (8) can be Fourier transformed to the energy space. We do this by introducing a complex variable ω, which satisfies Im[ω] > 0. We obtain
C2pt.(ω, T ) ≡
∫T
0
dt eitωC2pt.(t )
=i
∑
n
0〈 f |n〉〈n| i〉0
ωn
(1 − eiT ωn ), (9)
where ωn = ω − En. In a standard (classical) lattice calculation, time is discretized, therefore, C2pt.(t ) will only be constrained for a finite number of discrete points in time. Assuming there are Nt points evenly spaced by t = T
Nt , and approximating the
integral with a sum, we find
C ̃2pt.(ω, t , T ) ≡ t
N ∑t
nt =1
eint t ωC2pt.(t )
=t
∑
n
0〈 f |n〉〈n| i〉0 ei ωn t
×
( 1 − ei ωnT
1 − ei ωn t
)
. (10)
Note that in the limit t → 0, one recovers Eq. (9). An illustrative example is shown in Fig. 1. For simplicity,
it is assumed 0〈 f |n〉 = 1/√N, where N is the number of states considered. The number of states has been truncated to N = 90, the first few of which are depicted by the vertical
grey lines. For simplicity, we have assumed that the incoming free-particle eigenstate has the quantum numbers of a singleparticle state, which are different than those of the vacuum of the theory. As a result, the lowest-lying state this will couple is the single-particle state with mass m. Assuming a single species in this theory and no deep bound states, the rest of the spectrum would be near the two-particle threshold and/or above it. This means that there is a mass gap of at least m between t-
he ground state and the rest of the states. With this scenario in mind, we let the rest of the states to have energies 2m and assume they are evenly separated with a gap of m/5. The solid red lines correspond to C2pt.(ω, T ) in Eq. (9) using
Im[ω]/m = 0.01. The dashed lines correspond to C ̃2pt.(ω, T ) in Eq. (10) and m t = 1/10. The results are shown for two values of T = 10/m, 102/m corresponding to Nt = 102, 103. One sees a signal for the ground state, albeit this is distorted by the interference with the excited states. Depending on the mass gap and the resources available allowing for the time resolution, it might be more beneficial to use alternative methods (e.g., the rodeo method [46]) that may provide quicker resolution of th-
e spectrum. We conclude by remarking that this method provides a systematically improvable way for accessing the spectrum from real-time correlation functions that have been accessed for a finite number of measurements in time. As seen in comparing the top and bottom panels of Fig. 1, the ground state resolution improves as mT increases. This is because the error is related to the dimensionless quantity t
T =1
Nt , and
therefore decreases as Nt increases.
C. Accessing local matrix elements currents
This procedure can be generalized to allow for the determination of matrix elements of currents that are local in time. In what follows, we assume a generic current, which we label as J and insert at t = 0. To specify the initial and final states that couple to the current, we insert two time evolution operators at times ti and t f satisfying t f > 0 > ti. Since these
043065-5

RAÚL A. BRICEÑO et al. PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
correlation functions depend on three-time locations, (ti, 0, t f ), we refer to them as three-point correlators. We can write these explicitly in terms of unitary time-evolution operators and the current,
C3pts.(t f , ti ) ≡ 0〈 f |e−itf H J (0)eitiH | i〉0, (11)
making it amenable for quantum simulations using quantum gates. Inserting a complete set of states, we deduce the spectral decomposition
C3pts.(t f , ti ) = ∑
n f ,ni
e−itf Enf eitiEni 0〈 f |n f 〉〈ni| i〉0〈n f |J (0)|ni〉.
(12)
Working in the time interval t ∈ [−Ti, Tf ], with Ti, Tf > 0, we obtain the Fourier transform of the three-point correlation function,
C3pts.(ω f , ωi, Tf , Ti ) ≡
∫ Tf
0
dt f eit f ω f
∫0
−Ti
dti e−itiωiC3pts.(t f , ti )
=∑
n f ,ni
i 0〈 f |n f 〉
ωn f
i 〈ni| i〉0
ωni
(1 − eiTf ωnf )
× (1 − eiTi ωni )〈n f |J (0)|ni〉 (13)
where we have introduced complex frequencies ωi and ω f , and the frequency differences ωnj = ω j − Enj . By scanning the frequency-dependent correlation function as a function of both ωi and ω f , one can in principle identify the spectrum of the theory since these values of ω would give the local maxima. More importantly, Eq. (13) tells us how the correlation function at these values of ω depend on the desired matrix elements of the external current. As Tf and Ti becoming increasingly large, the-
 value of the correlator at a given peak associated with an eigenstate of the theory would be saturated by a single value of 〈n f |J (0)|ni〉 and other quantities that may be constrained from two-point correlation functions. Here we have assumed that time is a continuous parameter, which in a standard (classical) lattice calculation it is not. Lifting this assumption can be done using the same steps used to arrive at Eq. (10).
D. Accessing nonlocal current matrix elements
Finally, we arrive at the matrix elements of current that are displaced in time. In particular, we are interested in accessing matrix elements of the form 〈n f |T [J (tc)J (0)]|ni〉, where two local currents are inserted at different times. Here we discuss the possibility of accessing these from four-point correlation functions. We will assume a particular time ordering where tc > 0, but this is a soft assumption in what follows that is easily lifted. Assuming t f > tc > 0 > ti, we can define the d-
esired correlator as
C4pts.(t f , tc, ti ) ≡ 0〈 f |e−i(tf −tc )H J (0)e−itcH J (0)eitiH | i〉0
= 0〈 f |e−itf H J (tc )J (0)eitiH | i〉0. (14)
The first line provides a representation that is most immediately useful for quantum computations. The second equality
follows from the identification of J (tc ) = eitcH J (0)e−itcH as a Heisenberg operator. By inserting a complete set of states, we find Eq. (14) can be rewritten,
C4pts.(t f , tc, ti ) = ∑
n f ,ni
e−it f En f eitiEni 0〈 f |n f 〉〈ni| i〉0
× 〈n f |J (tc )J (0)|ni〉. (15)
At this stage, this looks similar to Eq. (12), with the only difference being that the matrix element also depends on time. Given our goal is to constrain 〈n f |J (tc)J (0)|ni〉, we can perform a Fourier transform of this. By determining the correlation function over continuous time periods given by ti ∈ [−Ti, 0] and t f ∈ [tc, Tf ], one arrives at
C4pts.(ω f , ωi, tc, Tf , Ti )
≡
∫ Tf
tc
dt f eit f ω f
∫0
−Ti
dti e−itiωiC4pts.(t f , tc, ti )
=∑
n f ,ni
i 0〈 f |n f 〉
ωn f
i 〈ni| i〉0
ωni
(eitc ωn f − eiTf ωn f )
× (1 − eiTi ωni )〈n f |J (tc )J (0)|ni〉. (16)
This result closely resembles that of Eq. (13). The key differences are due to the boundary of t f , and the time dependence of the matrix element. Otherwise the key observations made for Eq. (13) carry through. In particular, by considering large values of |Tj| and nonzero values of Im[ω j], this correlation function will have peaks at the spectra of the theory. The value at the peak will depend on the desired matrix elements and quantities that are directly accessible from the two-point correlat-
ion function, Eq. (9). In other words, by determining both the one- and four-point correlation functions for a sufficiently large range of time, one would be able to determine real-time long-range matrix elements. In arriving at Eq. (16), we have assumed time to be a continous variable. This is an assumption that is simple to lift following the steps taken to go from Eq. (9) to Eq. (10).
E. Comments on the feasibility
The viability of implementing the proposed techniques depends on a range of details on the implementation of the calculations and the underlying dynamics of the theory. On the latter point, investigation such as the one presented in Ref. [11], where the study of Compton-like amplitudes from real-time correlation functions was first proposed, could provide a guide on the scale of resources needed to be able to carry out studies of realistic theories. In particular, the study considered the implicat-
ions for strongly interacting theory in 1 + 1D theories, and it was found that using spatial volumes satisfying mL = 20 − 30, where m is the lightest mass in the theory, Compton amplitudes may be determined from real-time correlation functions. Using this same framework, one can provide estimates of the values of mT and Im[T ω j] needed to arrive at percent-level systematic errors. Such an investigation lies outside of the scope of this work, and it might be the case that alternative methods (e.g.-
, rodeo method [46] or generalizations) might prove to be more beneficial.
043065-6

TOWARD COHERENT QUANTUM COMPUTATION OF ... PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
III. QUANTUM SIMULATION: THE CASE FOR QUANTUM OPTICS
A. Introduction
1. Basic principle
The quantum calculation of scattering amplitudes in an interacting relativistic scalar quantum field theory (QFT) was first proposed as a qubit-based quantum sampler [8,9]. That algorithm was subsequently translated to a continuous-variable (CV) sampler [10], which paves the way to quantum optical implementations and also allows the direct simulation of one quantum field with only one quantum optical field (rather than incurring the overhead of encoding the m samples of the discretized amplitude o-
f one quantum field into log2 m qubits). The basic idea is to encode a relevant quantum unitary evolution U (t ) into a quantum circuit, with specifically prepared input states |in〉. The sampling of that quantum circuit, i.e., the measurement of the quantum circuit outcomes |out〉〈out|, can be used to reconstruct the correlator
C(t ) = 〈out|U (t )|in〉. (17)
For concreteness, we will consider a 1 + 1-dimensional complex QFT with a quartic [φ4] interaction and a conserved current. An essential feature of our approach is that it gives access to phase-sensitive probability amplitudes, Eq. (17), rather than transition probabilities P (t ) = |C(t )|2 proposed by earlier approaches [8,10]. As exposed in Sec. II, C(t ) is the most readily interesting quantity because the quantum phase plays a key role in performing the Fourier transform, e.g., Eq. (13), and -
accessing spectra, among other physical quantities. The problem of determining the phase of the probability amplitudes manifests itself in two ways. First, we need to know the relative phase across different final states, assuming t is fixed. Second, we need to know the relative phase across different values of t. This is discussed in Sec. IV. The method discussed below allows for the determination of two relative phases by experimentally interfering with the two corresponding quantum evolutions. -
This method can be implemented easily for different output states at the same evolution time t. For different evolution times, the implementation is more involved and non-Gaussian resources (in terms of their Wigner function) will be needed.
2. Quantum advantage
Before we proceed to the detailed presentation of our quantum simulator, it is important to make our case for quantum advantage. Our simulation is based on the empirical reconstruction, via statistically significant quantum sampling, of the probabilities P(t ) ∝ |C(t )|2 and even, using a phase-sensitive configuration described below, of the correlators C(t ) directly. As we mentioned in Sec. I B, quantum samplers derive their quantum advantage from their ability to sample from a classically hard--
to-calculate probability distribution. But sampling advantage is not what we are after. In this work, as well as in previous ones [8,10], the goal is to achieve quantum advantage for computing the probability distribution by statistically significant sampling in order to reconstruct the empirical probability distribution from the
histogram of experimental data, thereby realizing a “quantum Galton board.” The question here is: might the sampling time grow exponentially, or worse, with the size of the problem, thereby negating any quantum advantage? Answering this question requires, first, to know how many samples are needed to achieve statistical significance for a given number of distinct sampling outcomes. This question was answered in Ref. [28] where it was shown, in a nutshell, that the probability reconstruction error -
depends only linearly on the total number of sampling outcomes. Next, we need to know how this number of sampling outcomes, i.e., of histogram bins, scales with the size of the simulated system. In general, this depends on the measurement basis used to sample and is related to the exponential overhead of quantum state estimation: for N qubits, a single arbitrary state can a priori span all 2N basis vectors, requiring on the order of as many measurements to determine it. However, whereas a classica-
l computer needs to access the whole 2N -dimensional Hilbert space of N-qubit quantum states in order to calculate quantum evolution [6], the quantum simulator of a generally local Hamiltonian [7] does not, because such Hamiltonians only feature a polynomial number of parameters, leading to “exploration” of a polynomial-sized region of Hilbert space only.6 In our case, energy-momentum conservation and the physics behind our QFT system will allow us to make an informed guess of the polynomial-sized-
 region of Hilbert space that our simulator must work in, and therefore we will not be searching blindly. This allows us to expect, in principle, a quantum advantage from the quantum simulations we present here. Note that, while it is expected that sampling the complete distribution of states of a given QFT be an exponentially hard problem, our goal here is to provide a method for computing scattering processes using quantum processors. As we argue in Sec. II, all scattering observables can be rec-
onstructed from time-dependent correlation functions of just single-particle states in the theory. This implies that one only needs to access such states, and this would be the key to alleviating the sampling complexity issue. Hence, we find ourselves in a different situation, in which the sampling yields a limited number of outcomes, and statistical significance can therefore be reached, while the corresponding probability distribution is still difficult to calculate classically because it is hig-
hly nonlinear (e.g. φ4 model). In this situation, quantum advantage can therefore be gained from reconstructing the probability distribution from statistically significant sampling. Finally, it is worth reemphasizing the major advantage of quantum simulations over Monte Carlo methods. As will be presented in Sec. IV, a crucial result of this work is the phasesensitive quantum simulation of correlators, such as C1pt.(t ), Eq. (7). In contrast, standard Monte Carlo classical computing techniques suf-
fer from a sign problem that prohibits a reliable determination of the phase.7
6A Hamiltonian with a number of parameters exponential in N simply cannot be efficiently quantum-simulated, of course. 7Note that proof-of-principle studies of real-time observables using Monte Carlo techniques have been performed [48].
043065-7

RAÚL A. BRICEÑO et al. PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
B. The physical model
Turning now to the specific example, we consider a com
plex massive scalar field φ(x) = [φ1(x) + iφ2(x)]/√2 of mass m in a single spatial dimension denoted by x. We discretize space using L lattice points (x = 0, 1, . . . , L − 1), impose periodic boundary conditions, and choose units so that the lattice spacing is a = 1. Let π be the conjugate momentum to the complex field φ obeying the commutation relations
[φ(x), π †(x′)] = iδxx′ . (18)
The Hamiltonian is
H=
L−1
∑
x=0
[
π †(x)π (x) + ∇φ†(x)∇φ(x) + m2
0 φ † (x )φ (x )
+λ
4 (φ†(x)φ(x))2
]
, (19)
where ∇φ(x) ≡ φ(x + 1) − φ(x), m0 is the bare mass, and λ is the coupling constant. These constants have dimensions, however here they are treated as dimensionless since we have set the lattice spacing a = 1. Were we to restore a, we would be working with the dimensionless parameters L/a, m0a, and λa2. Thus, in the chosen units, the continuum limit (normally a → 0) is instead obtained as m0, λ → 0 and L → ∞. It is interesting to study the scaling of physical quantities in this limit which is compu-
tationally challenging [49]. To renormalize the theory, m2
0 can in general take negative values. In the procedure that follows, we will diagonalize the quadratic piece of the Hamiltonian exactly. This requires that the mass appears in the Hamiltonian is physical, satisfying m2 > 0. With this in mind, we introduce the physical mass m, and the center terms δm,
δm = m2
0 − m2. (20)
We split the Hamiltonian into free and interaction pieces, H = H0 + Hint, with
H0 =
L−1
∑
x=0
[π †(x)π (x) + ∇φ†(x)∇φ(x) + m2φ†(x)φ(x)],
Hint =
L−1
∑
x=0
[
δmφ†(x)φ(x) + λ
4 (φ†(x)φ(x))2
]
. (21)
Note, we have introduced the contribution proportional to the counter term into the interaction. Although this is quadratic in the fields, we will treat it differently than the free part of the Hamiltonian. To diagonalize H0, we write the fields in terms of canonical creation and annihilation operators,
φ(x) = √1L
L−1
∑
k=0
1
√2ω(k) (b(k)e2iπkx/L + c†(k)e−2iπkx/L ),
π (x) = √iL
L−1
∑
k=0
√ ω(k)
2 (b†(k )e−2iπkx/L − c(k )e2iπkx/L ),
(22)
and
ω(k) =
√
m2 + 4 sin2 π k
L (23)
is the discretized dispersion relation for a scalar particle. The operator b†(k) (c†(k)) creates a particle (antiparticle) of physical momentum p = 2πk
L in the periodic finite volume and
energy ω(k). The factors of 1/√L appearing in front of the sums in Eq. (22) were introduced to make the creation and annihilation operators satisfy the commutation relations
[b(k), b†(k′)] = [c(k), c†(k′)] = δkk′ . (24)
This is in contrast to the more standard 1/L, which appears in discrete sums of finite-volume momenta. This relative factor
of √L is absorbed into the definition of the creation and annihilation operators. The free Hamiltonian H0 [Eq. (21)], can be diagonalized using these creation and annihilation operators,
H0 =
L−1
∑
k=0
ω(k)[b†(k)b(k) + c†(k)c(k)], (25)
where we normal-ordered so that the ground state | 〉o has vanishing energy. It is annihilated by all annihilation operators (b(k)| 〉o = c(k)| 〉o = 0). Eigenstates of the free Hamiltonian H0 are constructed by acting on the ground state | 〉0 with creation operators. Free particles and antiparticles are created with b†(k) and c†(k), respectively [50]. For example, states containing n free particles or n free antiparticles each of momentum 2πk
L are, respectively,
|n〉o,k,b = (n!)− 1
2 b†n(k) | 〉0,
|n ̄〉o,k,c = (n ̄!)− 1
2 c†n ̄ (k) | 〉0. (26)
C. Quantum simulation using quantum optics
The goal of our quantum optical simulator if to evaluate correlators of the form 0〈l f | exp(−iHt )|li〉0, Eq. (7), or current matrix elements, Eq. (11), or Eq. (14). The latter two contain current operators that will require another layer of sophistication involving non-Hermitian gates. We show how to implement these with circuit-based photonic QC in Sec. IV C, and in Sec. V, by leveraging the power of measurement-based photonic QC. We start with the unitary evolution of Eq. (7). As Eq. (7) indica-
tes, we first need to prepare the system in free-field eigenstates, which can be simulated by Fock states of light, as addressed in Sec. III C 1 below (see Sec. V A for concrete experimental preparation). The next step is to implement quantum evolution under the full Hamiltonian H = H0 + Hint. Because [H0, Hint] = 0, this will be done using a Trotter-Suzuki expansion in N steps of duration t = t/N each, implementing the unitary
U (t ) [U0( t )Uint( t )]N ≡ (e−i tH0 e−i tHint )N . (27)
We can now examine the separate implementations U0 and Uint. Implementing U0 is straightforward as we can already place the system in the eigenbasis of H0 by way of the Gaussian transformations in Eq. (22), where Gaussian refers to the Wigner function of the transformation. Implementing Uint will require a bit more work, especially for the quartic interaction
043065-8

TOWARD COHERENT QUANTUM COMPUTATION OF ... PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
Hamiltonian term, and this is where quantum optical simulation can be useful. We now turn to the quantum optics specifics of our quantum simulation. We start by distinguishing between the quadratic (Gaussian, easy) and the quartic (non-Gaussian, hard) terms of Hint. Any Gaussian Hamiltonian can be implemented by quantum optical squeezing [51]—see also Appendix—and optical interferometers [52] or, equivalently, by measurement-based quantum computing (MBQC) over CV cluster states [37]. The non-Gauss-
ian Hamiltonian terms can then be accessed by simply adding photon-numberresolving (PNR) measurements to the aforementioned CV MBQC capability, as described in Sec. V.
1. Optically encoding the free Hamiltonian H0
Having introduced the QFT of interest, we review the key concepts that allow for the use of quantum optics to diagonalize a massive free scalar QFT, based on techniques discussed in [10]. For a brief introduction to the basics of the quantum optics formalism used here, we point the reader to Appendix. The free ground state | 〉o of the massive boson field can be straightforwardly simulated by the vacuum state of a photonic system consisting of 2L independent optical qumodes. Thus, for our purposes,-
 it is convenient to assign a qumode not to each lattice site (position representation) as was done in Ref. [10], but to each site of the dual lattice (momentum representation). We also need to use two qumodes per dual site, corresponding to particles and antiparticles. Thus we identify the free massive boson vacuum (left-hand side) with the photonic qumode vacuum (right-hand side)
| 〉o ≡
L∏−1
k=0
|0〉γ ,k,b ⊗ |0〉γ ,k,c (28)
where (k, i) (i = b, c) label the optical qumode and |0〉γ is its ground state [Eq. (5) with n = 0]. Thus eigenstates of H0 can be constructed as products of photon number eigenstates of the qumodes. For example, we create the multiparticle states (26) with photonic fields as |n〉γ ,k,b and |n ̄〉γ ,k,c, respectively. Doing this directly requires single-field light emitters of fixed photon numbers n and n ̄, which is experimentally arduous, though feasible [53,54]. It is easier to employ photon-pair -
emitters, such as based on parametric downconversion in nonlinear materials [55]. Such sources can emit distinguishable fields, thereby creating photon-number correlated (and field-entangled) qumodes, whose quantum state is the twomode-squeezed state described in Eq. (A5) of the Appendix. Because of the photon number correlation, measuring the photon number in one qumode will project the other qumode onto a Fock state, thereby generating a fixed number of simulated particles or antiparticles. In S-
ec. V, we will detail a specific implementation of this protocol that leverages MBQC over cluster entangled states.
2. Optically encoding the interaction Hamiltonian Hint
Next, we turn to the implementation of the interaction Hamiltonian Hint [Eq. (21)]. The quartic interaction, which requires non-Gaussian gates, makes this a nontrivial task. Expressing Hint in terms of the modes of the free Hamiltonian
results in a rather complicated expression involving terms that mix different qumodes. To implement quantum gates involving Hint, we introduce a Gaussian unitary transformation G that reduces the complexity of Hint allowing its efficient implementation with single and two-qumode gates. The form of the interaction Hamiltonian, Eq. (21), strongly suggests to define creation and annihilation operators at each lattice site (position representation) instead of on the dual lattice (momentum representati-
on), as was used to diagonalize the free Hamiltonian. We will therefore need to relate the corresponding qumodes, which we show can be done easily with quantum optics. At each lattice site x, we introduce quadratures for two qumodes as follows. We define their annihilation operators,
B(x) = φ(x) + iπ†(x)
√2 , C(x) = φ†(x) + iπ (x)
√2 , (29)
which obey standard Heisenberg algebras, [B(x), B†(x′)] = [C(x), C†(x′)] = δxx′ . The quadratures are
QB(x) = B(x) + B†(x)
√2 , PB(x) = B(x) − B†(x)
√2i ,
QC (x) = C(x) + C†(x)
√2 , PC (x) = C(x) − C†(x)
√2i , (30)
in terms of which the interaction Hamiltonian (21) can be written as
Hint =
L−1
∑
x=0
( δm
2 {[QB(x) + QC (x)]2 + [PB(x) − PC (x)]2}
+λ
16
{[QB(x) + QC (x)]2 + [PB(x) − PC (x)]2}2
) .
(31)
Notice that QB(x) + QC (x) and PB(x) − PC (x) commute [56], so ordering is not important. To implement the various terms in Eq. (31), we need to engineer the quadratures (QB,C, PB,C ) from our original photonic fields which, again, encode the linear momenta of the free field, Eq. (24). To construct the transformation relating the two sets of quadratures, we start by relating the corresponding annihilation operators. Using Eq. (22), it is straightforward to obtain
B(x) = 1
2√L
L−1
∑
k=0
[( 1
√ω(k) + √ω(k)
)
b(k )
+
(1
√ω(k) − √ω(k)
)
c†(L − k)
]
e2iπ kx/L ,
C(x) = 1
2√L
L−1
∑
k=0
[( 1
√ω(k) − √ω(k)
)
b† (k )
+
(1
√ω(k) + √ω(k)
)
c(L − k)
]
e2iπkx/L. (32)
043065-9

RAÚL A. BRICEÑO et al. PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
With these expressions, we can immediately read off the Fourier transforms of B(x) and C(x), respectively,
B ̃(k) = 1
2
(1
√ω(k) + √ω(k)
)
b(k )
+1
2
(1
√ω(k) − √ω(k)
)
c†(L − k),
C ̃(k) = 1
2
(1
√ω(k) − √ω(k)
)
b† (k )
+1
2
(1
√ω(k) + √ω(k)
)
c(L − k). (33)
Note that the discrete Fourier transform can be straightforwardly implemented as a passive optical unitary transformation U over 2L modes, realized by a 2L × 2L generalized optical interferometer [57]. Thus
U †BU = B ̃, U †CU = C ̃, (34)
where B = [B(0), B(1), . . . , B(L − 1)]T , and similarly for C,
as well as  ̃B and C ̃. Note that U is an operator acting on each component of B and C individually and is implemented with qumode gates. Going back to the analytic expressions (33), these bear strong significance in quantum optics for they constitute the exact Heisenberg-picture Bogoliubov transformation effected by the two-mode squeezing process (by stimulated emission of pairs of distinguishable photons, see Appendix). Using Eq. (A8), we thus identify
cosh[r(k)] ≡ 1
2
(1
√ω(k) + √ω(k)
) ,
sinh[r(k)] ≡ 1
2
(1
√ω(k) − √ω(k)
)
, r(k) = − 1
2 ln ω(k),
(35)
where r(k) is the effective squeezing parameter. This relation between the squeezing parameter and the dispersion relation, Eq. (23), illuminates the physical significance of quantum optical squeezing in the context of quantum simulation of massive bosons: on one hand, optical squeezing confers effective mass to the massless simulating photon field, on the other hand, two-mode squeezing generates number correlations between particles of momentum k and antiparticles of momentum L − k, ∀k. Formally,-
 this can also be expressed in matrix representation
( B ̃(k)
C ̃† (k )
)
= S†(k, L − k; r(k))
( b(k) c†(L − k)
)
S(k, L − k; r(k))
=
(cosh[r(k)] sinh[r(k)]
sinh[r(k)] cosh[r(k)]
)( b(k)
c†(L − k)
)
, (36)
where S is a two-mode squeezing operator (for details, see Appendix). Combining with the discrete Fourier transform, Eq. (33), the initial Fock-state qumodes, which coïncide with the eigenmodes of the free Hamiltonian, can be transformed into qumodes that simplify the interaction Hamiltonian by the
Gaussian transformation G,
B = G† b G, C = G† c G, G = S U, (37)
where G acts on individual components of b = [b(0), b(1), . . . , b(L − 1)]T and c = [c(0), c(1), . . . , c(L − 1)]T . Note that any N-mode Gaussian transformation in quantum optics can be experimentally realized with N × N interferometers and single-mode squeezers, according to the Bloch-Messiah singular-value decomposition [52]. Another way, as we will see, is to use the machinery of measurement-based quantum computing over qumode cluster states. The Gaussian transformation G can also be used to-
 relate the quadratures (30) to the quadratures of the modes in the momentum representation, b(k), c(k). We obtain
QB = G†qbG, PB = G† pbG, QC = G†qcG, PC = G† pcG, (38)
where qb(k) = [b(k) + b†(k)]/√2, pb(k) = i[b†(k) −
b(k)]/√2, and similarly for (qc, pc). This transformation allows us to implement gates involving the quadratures (QB,C, PB,C ) using the gates with quadratures (qb,c, pb,c ) that are native to our photonic substrate. In particular, the interaction Hamiltonian, Eq. (31), can be written in terms of these quadratures as
Hint = G†
L−1
∑
k=0
hint(k) G, (39)
where
hint(k) = δm
2 [(qb(k) + qc(k))2 + (pb(k) − pc(k))2]
+λ
16 [(qb(k) + qc(k))2 + (pb(k) − pc(k))2]2.
(40)
The Gaussian unitary G and quantum gates involving various terms of hint can be implemented with optical elements. Unlike the free Hamiltonian, hint is not diagonal. However, it is a simplified expression compared to Hint as terms labeled by different values of the index k are now separated and commute with each other. Thus the contributions for each k can be implemented with quantum gates involving single qumodes and beam splitters.
3. Quantum computation of evolution
Finally, we turn to the quantum computation of the evolution of the system with the full Hamiltonian H. Here, we outline a circuit implementation using photonic quantum gates. We show how to implement these steps in Sec. V, by leveraging the power of measurement-based photonic quantum computing. The full Hamiltonian evolution will be done using the Trotter-Suzuki expansion of Eq. (27). An important question here is what the minimal required time step t is and whether it is accessible to an optical-
 simulator. One reasonable estimate is t max[ω(k)]−1 ∼ 1/m. Using Eq. (35), we get t e−2r(0). (Note that we are working in units in which the lattice spacing is a = 1, so all quantities are dimensionless.)
043065-10

TOWARD COHERENT QUANTUM COMPUTATION OF ... PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
FIG. 2. Quantum circuit implementing the unitary Pint, Eq. (43), on two qumodes labeled (k, b) and (k, c). BS is a 50:50 beam splitter, R is phase-space rotation given in Eq. (41), and P4 is a quartic phase gate [Eq. (45)].
It is straightforward to implement the evolution unitary e−i tH0 , because H0 is diagonal in the photonic qumodes. Thus this is free-field evolution, i.e., light propagation, simply defined by the optical path. It can be implemented using phase shifts (also known as phase-space rotations),
Rb(k; θ ) = eiθb†(k)b(k), Rc(k; θ ) = eiθc†(k)c(k) (41)
acting on particle and antiparticle modes, respectively, as
e−i tH0 =
L−1
⊗
k=0
Rb(k; ω(k) t ) ⊗ Rc(k; ω(k) t ). (42)
To simulate Hint with photonic qumodes, we need the Gaussian unitary G, Eq. (37). Using Eqs. (39) and (40), we obtain
e−i tHint = G†
L−1
⊗
k=0
Pint(k ) G, Pint(k ) = e−i t hint(k). (43)
To implement Pint, we massage hint with these steps:
hint = UBS
[
δm
(q2
b + p2
c
)+ λ
4
(q2
b + p2
c
)2
]
UBS
=UBS R†
c
(π
4
)[ δm
(q2
b + q2
c
)+ λ
4
(q2
b + q2
c
)2
]
Rc
(π
4
)
UBS
= UBS R†
c
(π
4
)[ δm
(q2
b + q2
c
)+ λ
24
(4q4
b + 4q4
c
+ (qb + qc )4 + (qb − qc )4)]
Rc
(π
4
)
UBS, (44)
where UBS implements a 50:50 beam splitter, and Rc( π
4 ) is the
phase shift defined in Eq. (41) with θ = π
4 . It follows that Pint
can be implemented with beam splitters and rotation gates, which are Gaussian, as well as non-Gaussian quartic phase gates,
P4(γ ) = ei γ
6 q4 . (45)
The circuit implementing Pint is shown in Fig. 2. Cubic phase states and gates can be made by combining two-mode squeezing and PNR detection, as proposed in Ref. [39]. Optical cubic gates have long been deemed difficult to implement, due to the necessity of detecting at least 50 photons for high enough non-Gaussian quality (measured as negativity of the Wigner function) [58], but the recent demonstration of PNR detection of up to 100 photons [59]
has opened up new possibilities. Higher-order gates can then be obtained by use of the Baker-Campbell-Hausdorff formula [60]. It has been shown that 15 cubic phase gates are needed to exactly create one quartic phase gate [61]. There are, however, strong reasons to believe that other, approximate techniques could be used to lead to a greater economy of resources: for example, approximate probabilistic methods for cubic phase gates have been proposed [62,63]. There has also been a deterministic non-
-Gaussian gate based on a tailored Kerr nonlinearity proposed in Ref. [64]. An optical-circuit implementation of the field-encoded evolution operator (27) is shown in Fig. 3. Note that, though we detail an actual physical optical implementation in Fig. 3 for the sake of concreteness, our optical approach will substantially differ, being measurement-based rather than circuit-based quantum computing and will be detailed in Sec. V. The reason why we propose this measurement-based approach is that it -
allows the implementation of difficult gates, i.e., the quartic phase gate and current operators, with greater ease and in a near-deterministic manner.
IV. COHERENT QUANTUM SIMULATION OF CORRELATORS
This section details a main result of this paper, which is the method for the quantum simulation of phase-sensitive correlators, such as C2pt.(t ) = 0〈 f |e−itH | i〉0 in Eq. (7), which enables the computation of the Fourier transform in Eq. (9). This requires an additional layer of complexity as, again, quantum sampling alone can only give access to the probability P (t ) = |C(t )|2 corresponding to a correlator C(t ). Unsurprisingly, this layer involves quantum interferometry. We will first deter-
mine C(t ) at a given time t but various initial and final states, and then use these results to determining C(t ) at different times. We can gain access to C2pt.(t ) by performing a series of weak displacements of the state before counting photons. The initial and final states in the correlator (7) are eigenstates of the free Hamiltonian H0, and can be written as tensor products of 2L Fock states, each simulated by a separate photonic qumode (5),
|li〉0 =
L−1
⊗
k=0
|mk 〉γ ,k,b ⊗ |mk 〉γ ,k,c,
|l f 〉0 =
L−1
⊗
k=0
|nk〉γ ,k,b ⊗ |nk〉γ ,k,c (46)
with the initial state containing mk particles and mk antiparticles with momentum p = 2π k/L, and similarly
043065-11

RAÚL A. BRICEÑO et al. PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
FIG. 3. Quantum circuit displaying one time step t of the Trotterized evolution operator of Eq. (27). Each horizontal wire is an optical qumode parametrized as (k, i) (k = 0, . . . , L − 1 and i = b, c) initialized on the left in a Fock state. Gates labeled G [Eq. (37)], R [Eq. (41)] are Gaussian; Pint [Eq. (43)] involves non-Gaussian quartic phase gates (see Fig. 2). To the right are PNR measurements for each qumode.
for the final state. It is convenient to introduce the vectors m = (m0, . . . , mL−1, m0, . . . , mL−1)T , n = (n0, . . . , nL−1, n0, . . . , nL−1)T , and identify
| i〉0 = |m〉γ , | f 〉0 = |n〉γ . (47)
A. Single-mode implementation
In order to capture the essence of our approach without cluttering the notation, we first consider a toy model with a single physical mode (unlabeled here to simplify notations) and correlator
Cn,m(t ) = γ〈n|e−itH |m〉γ . (48)
As described in Sec. V, we can prepare many copies of |m〉γ for a given m, evolve the state via MBQC on a 1D chain cluster state, perform PNR detection, and histogram the results against the output photon number n, thereby obtaining an empirical probability distribution for Pn,m = |Cn,m|2 for each n. This can be done efficiently if the number of different outcomes n stays low, in particular when the number of modes increases. But this does not give us access to the full complex number that is Cn,m.-
 To remedy this, we introduce field displacements of the evolved photon state just before measurement,
D(ξ ) = eξa†−ξ∗a, (49)
where |ξ | is the amplitude of the added laser field and arg(ξ ) is its phase. Field displacements can be straightforwardly implemented experimentally using an unbalanced beamsplitter to coherently add a phase- and amplitude-controlled laser field to a qumode, thereby displacing it in phase space. Thus we are led to consider the modified correlators and corresponding detection probabilities that we have access to
Cn,m(ξ ; t ) = γ〈n|D(ξ )e−itH |m〉γ , Pn,m = |Cn,m|2. (50)
For small displacements, |ξ | 1, we can approximate the displacement operator to first order
D(ξ ) 1 + ξ a† − ξ ∗a + O(ξ 2) (51)
and the detection probabilities can be expressed in terms of the correlator (48) that we are interested in,
Pn,m(ξ ) = |Cn,m|2 + 2√n Re[ξ ∗Cn,mC∗
n−1,m ]
− 2√n + 1 Re[ξCn,mC∗
n+1,m] + O(ξ 2 ). (52)
Suppose ξ ∈ R. With just three measurement settings, we obtain
Pn,m(0) = |Cn,m|2,
Pn,m(ξ ) = Pn,m(0) + 2ξ (√n Re[Cn,mC∗
n−1,m ]
− √n + 1 Re[Cn,mC∗
n+1,m ] ),
Pn,m(iξ ) = Pn,m(0) + 2ξ (−√n Im[Cn,mC∗
n−1,m ]
+ √n + 1 Im[Cn,mC∗
n+1,m]). (53)
Starting with zero-photon (n = 0) detection events, we obtain a system coupling only two correlators,
P0,m(0) = |C0,m|2,
P0,m(ξ ) = P0,m(0) − 2ξ Re[C0,mC∗
1,m ],
P0,m(iξ ) = P0,m(0) + 2ξ Im[C0,mC∗
1,m], (54)
which is sufficient to determine the correlators C0,m and C1,m up to a global phase. Substituting these results into the system (53) for n = 1 yields C2,m ∈ C, and so on. For a maximum photon detection of M photons, these 3M equations can be solved to obtain all Cn,m correlators involving fewer than M photons.
B. Multimode extension
The above procedure can be easily generalized to the full 2L-mode system, where local weak displacements of 0, ξ , and iξ are applied in every combination to each mode before detection. In this case, the modified correlators and corresponding multimode detection probabilities can be written as
Cn,m(ξ; t ) = γ 〈n|
L∏−1
k=0
⊗Dk,b(ξk ) ⊗ Dk,c(ξ k ) · e−itH |m〉γ ,
Pn,m = |Cn,m(t )|2, (55)
where ξ = (ξ0, . . . , ξL−1, ξ 0, . . . , ξ L−1) ∈ C2L is the vector defining the 2L-mode displacement. The PNR detectors project the state of the system onto the 2L-mode Fock state of the photon field |n〉γ [Eq. (47)], and |m〉γ is the initial multimode photon-number eigenstate before evolution. The quantum circuit for two lattice sites requiring four qumodes is depicted in Fig. 4.
043065-12

TOWARD COHERENT QUANTUM COMPUTATION OF ... PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
FIG. 4. Phase-sensitive simulation of the two-point correlator (7) for two lattice sites requiring four qumodes.
If only one mode is displaced at a time, we can consider displacements by 0, ξ j, iξ j, for a given mode j. Working as with the single-mode toy model, we obtain expressions of detection probabilities in terms of the two-point correlators (7) that we are interested in,
Pn,m(0) = |Cn,m|2,
Pn,m(ξ jeˆ j ) = Pn,m(0) + 2ξ j
(√n j Re[Cn,mC∗
n−eˆ j ,m
]
− √n j + 1 Re[Cn,mC∗
n+eˆ j ,m
]),
Pn,m(iξ jeˆ j ) = Pn,m(0) + 2ξ ( − √n j Im[Cn,mC∗
n−eˆ j ,m
]
+ √n j + 1 Im[Cn,mC∗
n+eˆ j ,m
]), (56)
where eˆ j is the unit vector along component j. For a 2L-mode system with maximum PNR resolution of K photons on each mode, displacing in this way leads to 4L + 1 measurement settings which give rise to (4L + 1)K equations that can be solved to determine the (4L)K real parameters associated with the possible correlation functions. However, not all correlators are needed. Next, we discuss how to extract the relative phase of correlation functions at different times, using the above results. By dif-
ferentiating with respect to time and inserting a complete set of Fock states, we obtain
dCn,m(t )
dt = i
∑
n′
γ 〈n|H |n′〉γ Cn′,m(t ) (57)
via which one can access the time-dependent global phase that could not be determined through Eq. (56). Next, we discuss two alternative methods of obtaining the global phase with quantum computation. Suppose we wish to relate the global phases at times ta, tb with tb > ta > 0. The first method relies on photon-controlled evolution. We prepare our state |m〉 and evolve it with e−itaH . We attach two ancillary qumodes, labeled as a0 and a1, one in a single photon state, |1〉a0 , and the other in the -
vacuum state, |0〉a1 . These are interfered in a 50/50 beam splitter to generate the entangled
state (|01〉a0a1 + |10〉a0a1 )/√2. Mode a0 is used as control
for the evolution of our state by e−i(tb−ta)H . This requires the photon-number-controlled gate
CUa0 ≡ exp { − i(tb − ta )Na0 ⊗ H }, (58)
where Na0 is the photon number of the ancilla qumode a0. This is a non-Gaussian gate that increases the complexity of the quantum simulation. The ancilla modes interfere again at a second beam splitter and their photon numbers are measured. Only one detector is needed, because there is only one photon
between the two ancilla modes. This is equivalent to a MachZehnder interferometer for the ancilla modes where one of the arms is used as a control for the gate (58). The quantum circuit for a single mode [Eq. (48)], for simplicity in notation, is shown in Fig. 5. Explicitly, the state in the quantum circuit before the measurements is given by
|out〉 = BSa0a1 · e−itaH · CUa0 · BSa0a1 |m〉|1〉a0 |0〉a1
=1
2 [(e−itbH + e−itaH )|m〉|1〉a0 |0〉a1
+ (e−itbH − e−itaH )|m〉|0〉a0 |1〉a1 ]. (59)
The only possible photon number measurement outcomes on the ancilla qumodes are (na0 , na1 ) ∈ {(1, 0), (0, 1)}. After measuring all modes, we obtain the outcome (n, na0 , na1 ) with probability
Pn,na0 = 1
4 |Cn,m(ta ) + (−)na0 Cn,m(tb)|2
=1
4 [|Cn,m(ta )|2 + |Cn,m(tb)|2 + 2(−)na0
× cos( (tb) − (ta ))|Cn,m(ta )Cn,m(tb)|] (60)
showing explicitly the dependence on the global phase (t ). Having already obtained |Cn,m(t )|, we can calculate the relative phase (tb) − (ta) with experimental data using Eq. (60). An alternative method is based on field-controlled evolution. In this case, we attach a single ancilla qumode labeled a in a state that consists of two sharp peaks at the quadrature values qa = sa, sb, denoted |sa, sb〉qa . This assumes that we have access to such a state, such as a squeezed Schrödinger cat state, whic-
h is challenging to engineer. We use the ancilla quadrature as control in the evolution of the state |m〉, by applying the non-Gaussian quadrature-controlled gate
CUq ≡ exp{−iτ q ⊗ H } (61)
which is less complex than the photon-number-controlled gate (58). The parameters are chosen so that ta = saτ , tb = sbτ . Finally, we perform a homodyne detection measuring the p quadrature of the ancilla. The quantum circuit is shown in Fig. 5. Measurement of the output state gives us access to the probability distribution
P ( p) ∝ ∣∣Cm,n(ta )eipsa + Cm,n(tb)eipsb ∣∣2
≈ |Cn,m(ta )|2 + |Cn,m(tb)|2 + cos( (tb) − (ta )
+ p(sb − sa ))|Cn,m(ta )Cn,m(tb)| (62)
from which the phase difference (tb) − (ta) can be calculated.
C. Three-point correlation functions
Beyond simulating Hamiltonian evolution, we seek matrix elements of currents, such as given by Eq. (11). Consider the three-point correlation function
Cn,m(ti, t f ) = 〈n|eitf H J (x)e−itiH |m〉, (63)
where J (x) is the U (1) current,
J (x) = i[φ(x)π †(x) − φ†(x)π (x)]. (64)
043065-13

RAÚL A. BRICEÑO et al. PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
FIG. 5. Quantum circuits for the calculation of the time-dependent global phase of the two-point correlation function (48) using photonnumber and quadrature control.
To compute the three-point correlator, we work as before by inserting displacement operators and taking derivatives. Additionally, we insert the Gaussian unitary eiζJ (x), instead of J (x) itself, which is a Hermitian operator, and expand for small ζ , eiζJ (x) = I + iζ J (x) + O(ζ 2), to recover the desired amplitude. The quantum circuit for the calculation of the three-point correlator on two lattice sites requiring four qumodes is shown in Fig. 6. This procedure yields the three-point correlati-
on functions up to a global phase. To calculate the phase, we work as before to express the derivative with respect to time t f as
dCn,m(ti, t f )
dtf
=i
∑
n′
γ 〈n|H |n′〉γ Cn′,m(ti, t f ) (65)
from which we can deduce the global phase as a function of time. Alternatively, we can introduce ancilla qumodes to perform a controlled evolution by controlling either with photon number or a quadrature, similar to the process depicted in Fig. 5. It is straightforward to extend this method to higher-point correlators of currents, albeit it becomes more cumbersome as the number of insertions of currents increases.
V. MEASUREMENT-BASED QUANTUM OPTICAL SIMULATION
In this section, we turn to MBQC implementation, which allows us to leverage the record scalability achieved in the generation of cluster states [30–34], the quantum substrates for universal quantum computing [35,65]. In addition, an MBQC implementation allows us to achieve two critical simulation steps: (i) the generation of arbitrary input Fock states (which map directly to excitation states of the free-field QFT) and (ii) the deterministic generation of the nonunitary polynomial gates which sim-
ulate current matrix elements. Nonunitary quantum gates in particular are very nonstandard and require non-Gaussian quantum
optical resources. It has been shown that the formalism of measurement-based quantum computing and, in particular, its photonic implementation using continuous-variable cluster states, can be leveraged to great effect by the simple addition of photon-number-resolved (PNR) measurements [66].
A. Input Fock states
As presented in Sec. III, eigenstates of the free Hamiltonian H0 are products of states in the photon-number basis, |n〉γ . The states can be created within the cluster by performing PNR detection on cluster state nodes (see Appendix). From a quantum optical viewpoint, this can be seen immediately if one thinks of a two-mode cluster state as a locally rotated two
mode squeezed state ∑∞
n=0(tanh r)n/ cosh r |n〉1|n〉2, which is perfectly photon-number correlated. Hence PNR detecting n photons in one mode will result in projecting the other mode onto Fock state |n〉. This can also be shown in the Gaussian teleportation gate formalism whose homodyne detector is replaced by a PNR detector in order to project on the Fock basis. First, we write a Fock state in the quadrature eigenbasis,
|n〉γ = (2π )− 1
2
∫∞
−∞
ds ψn(s)|s〉γq , (66)
where ψn(s) is the well-known Hermite-Gauss wavefunction,
normalized here to √2π for mere convenience
ψn(s) = (2π ) 1
2 × π−1
4 (n! 2n )− 1
2 Hn (s) e− s2
2 , (67)
Hn(s) being the Hermite polynomial of order n. We then reexpress the Fock state as a quadrature eigenstate modified by the non-Gaussian operator ψn(Q):
|n〉γ = (2π )− 1
2 ψn(Q)
∫∞
−∞
ds |s〉γq , (68)
|n〉γ = ψn(Q) |0〉γp. (69)
FIG. 6. Phase-sensitive simulation of the three-point correlator (63) for two lattice sites requiring four qumodes.
043065-14

TOWARD COHERENT QUANTUM COMPUTATION OF ... PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
Now, we replace the homodyne detector in the canonical teleportation circuit of Eq. (A10) by a PNR detector as operator Fn and use the previous result8
(70)
where the application of non-Gaussian gate ψn(Q1) allows us to formally restore quadrature detection on mode 1. Since the CZ gate exp(iQ1Q2) contains only amplitude quadrature operators it commutes with ψn(Q1), yielding
(71)
which is the familiar teleportation gate of Eq. (A10) and therefore results in the measurement-based operator (with the now familiar 2 ← 1 swap implied)
Fn = R( π
2 ) ψn(Q). (72)
If input (in)1 is a bare cluster state node |0〉1P, then Fn|0〉1P =
in|n〉2γ , i.e., a Fock state to a global phase left. Thus, performing PNR detection on the cluster state allows one to embed Fock states within the cluster. Crucially, one can see that PNR directly enacts a nontrivial “Hermite-Gaussian” non-Gaussian gate which contains an nth-order polynomial in Q. We will see in Sec. V B that a variant of PNR detection, called photon subtraction, on the CV cluster state allows us to separate out the polynomial gate in Q [66], which is required for the evaluation -
of current matrix elements discussed in Sec. II C, thereby yielding a unique capability of our PNR-augmented CV cluster state paradigm. Finally, note that, although the PNR detection results, i.e., the input photon numbers, are stochastic, one can always apply PNR detection to several cluster state nodes simultaneously and subsequently reroute the desired outcome once it is obtained, by teleportation to the desired cluster state location through homodyne measurements. This parallel “repeat-untilsu-
ccess” method does not carry a significant overhead and allows precise state preparation. So far, we have described how CV cluster state and PNR detection can be used together to apply an arbitrary Gaussian unitary G to a well-defined Fock-state input, amounting, respectively, to well-defined particle numbers in free-field and momentum eigenmodes. Regarding quartic-phase gates, exact expressions in terms of (15) cubic gates and Gaussian gates have been derived [61], as was mentioned earlier. These-
 expressions can be straightforwardly translated into MBQC operations over cluster states [37] seeded by cubic-phase states. We now turn to the implementation of the current matrix elements.
8Note that, unlike previous figures, these circuits flow from right to left to better reflect operatorial order.
B. Optical quantum simulation of current operators
Beyond simulating Hamiltonian evolution, we seek matrix elements of currents, such as given by Eq. (11). In this case, generic currents given by J take the form of polynomials in the field operators. In Sec. IV C, we discussed how time correlators involving currents could be calculated with circuit-based QC. We now show that such operator insertions in correlation functions can be achieved through the ability to perform the nonunitary operation of photon subtraction on the cluster state. This, whe-
n iterated, allows one to apply polynomial gates of arbitrary degree via gate teleportation [66].
1. Polynomial gates
To demonstrate how this can be achieved, we can modify the teleportation circuit shown in Eq. (A10) by applying the photon subtraction operator immediately prior to the homodyne measurement and fixing the measurement angle to θ = 0. Photon subtraction can be experimentally achieved by placing a weakly reflective beamsplitter, of reflection coefficient r → 0, in the path of the light and sending the reflected portion to a PNR detector. For a PNR detection outcome of n photons, the subtraction opera-
tor is given by
Sn = (−1)n(n!enβ )− 1
2 (2 sinh β )n/2e−βa†a an, (73)
where β = − 1
2 ln 1 − r2. For a vanishing beamsplitter reflec
tivity r → 0, β → 0 and the photon subtraction becomes a nearly ideal application of the photon-downshift operator: Sn → (n!)− 1
2 an. Considering this limiting case leads to a circuit representation given by
(74)
which has a Kraus operator representation given by [66]
Kn ∝ X (m)R( π
2 )Hn
( iQ − m
√2
)
, (75)
where Hn(x) are the Hermite polynomials of degree n. It should be noted that using a small photon-subtraction
043065-15

RAÚL A. BRICEÑO et al. PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
beamsplitter reflectivity comes at the cost of decreasing the success probability of a subtraction event; however, failing to subtract any photons will reduce the applied operator to K0 ∝
X (m)R( π
2 ), which simply acts as the regular teleportation
measurement. Although it was shown in that the repeated application of operators of the form of Kn can lead to generating and embedding Schrödinger cat states in a cluster state, even under imperfect conditions including Gaussian noise from finite squeezing and away from the vanishing beamsplitter reflectivity limit [66], we can also use this process to implement polynomial gates of arbitrary degrees. By taking advantage of the ability to perform changes to the basis of a future measurement with f-
eedforward operations, and by performing a regular teleportation following the circuit in Eq. (74), we can enact the operator K′
n ∝ Hn( iQ√−2m ). As we cannot control the detection result, the specific Hermite polynomial in Q that is applied will be stochastic, but known, as m is a homodyne measurement result and n is a PNR measurement result. Note that we can also tune the reflectivity of the beamsplitter used in photon subtraction to be small enough such that cases where n 2 photons are detected is vanishingly small. In this case, we will only ever apply the operator K′
1 ∝ Q + im
or K′
0 ∝ 1. Thus, by repeating this circuit until the operator
K′
1 has been applied k times, we can controllably implement an operator that is a degree k polynomial in the quadrature
operator, Q. This final operator could be used to represent a current, and would be
J= k
j=1(Q + im j ), (76)
where m j ∈ R is the homodyne measurement result of the jth teleportation circuit where photon subtraction was successful.
2. Gate teleportation
The polynomial expressed in Eq. (76) may not always be the desired operation as one cannot control the measurement results, m j at each step. However, if one has a sufficiently large cluster state, regions can be used to generate a polynomial resource ahead of time and use it to apply a desired gate later through gate teleportation. Suppose that one began with several bare cluster state nodes, each a zero-momentum eigenstate, |0〉γp, and iterated the method outline above on each node separately unt-
il the measurement results m j were near enough to a desired polynomial such that one of the states was transformed to
|ψ′〉 = f (Q)|0〉γp, (77)
where f (Q) is the polynomial gate we wish to apply. Now, by teleporting the resource |ψ′〉 across the cluster state until it is neighboring the quantum information that we wish to apply the gate to, |ψ〉, and first applying a rotation R†( π
2 ) to |ψ〉, we
can implement the circuit
(78)
Pulling the circuit taut and commuting the resultant rotation operation to the end, we get
|ψ〉out = f (Q)R( π
2 )Z†(m)R†( π
2 )|ψ〉 (79)
= f (Q)X (m)|ψ〉. (80)
Thus we can use gate teleportation to apply any operator in Q, including polynomial gates, up to a Gaussian measurementdependent shift on the input quantum information.
C. Path toward fault-tolerant quantum simulation
Finally, we outline a plan of attack to correct errors in photonic quantum simulation. The gist of the method is to rely on Gottesman-Kitaev-Preskill (GKP) code [39] as the error-correcting resource. The GKP qubit encoding allows quantum error correction of qubit-level errors (e.g., a π /2 optical phase shift which amounts to a GKP qubit flip) as well as of small CV quadrature shifts (e.g., optical phase shifts π /2) such as produced by the Gaussian noise resulting from finite squeezing, thereby a-
llowing CVQC to be made fault tolerant over a GKP qubit encoding [40]. It has also been shown that qumode encodings, such as the one used for quantum simulation in this paper, can be error-corrected using GKP ancilla [67] and this will be the strategy applied to our photonic quantum simulation.
GKP states have already been generated and employed as error encodings for trapped-ion [68] and transmon [69] qubits. More recently, a preliminary demonstration of the probabilistic generation of optical GKP states was performed [70]. Finally, some of us have discovered quasideterministic methods for generating GKP states [66,71], which paves the way for near-term experimental demonstration, now in the works.
VI. CONCLUSION
In this paper, we have proposed a detailed program, both theoretical and experimental, for computing observables in quantum field theories nonperturbatively using a single analog photonic quantum processor. In particular, in Sec. II, we reviewed a class of time-dependent nuclear physics observables that are currently inaccessible via lattice QCD implemented on classical computers. Our proposal has several unique, crucial features: (i) it allows phase-sensitive reconstruction of scattering amplitud-
es, beyond merely reconstructing a probability distribution by sampling from it; (ii) it leverages the massive scalability of CV cluster-state implementation, in particular in the quantum optical frequency comb [29,30,72] but also in the time domain [31–34]
043065-16

TOWARD COHERENT QUANTUM COMPUTATION OF ... PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
and also of hybrids of the two [73], to envision scalable implementations of QFT simulation on a single photonic quantum processor; (iii) finally, it leverages the newly discovered capability of CV cluster states to efficiently implement non-Gaussian, as well as nonunitary, quantum gates such as current terms [66]. All of this bodes well for, ultimately, the experimental feasibility of the quantum simulation of quantum field theory beyond current lattice-gauge QCD capabilities. Although we are not-
 at a stage yet to consider the complexities of QCD using the proposed setup, the path towards being able to study QCD with a photonic quantum processor is becoming clearer. Transitioning from our scalar QFT quantum calculations to lattice QCD involves several steps. Each step introduces additional complexity and requires sophisticated techniques to manage the increased computational and theoretical challenges. A detailed roadmap includes these steps. (1) Introduce fermionic fields into the lattic-
e framework. This is nontrivial due to the fermion doubling problem, which requires the introduction of methods such as Wilson fermions, staggered fermions, or domain wall fermions to handle. This may be better handled by discrete variables (qubits). It is interesting to explore QC that combines qubits (for quarks) with qumodes (for gluons). (2) Introduce non-Abelian gauge fields on the lattice. The gauge field is modeled with the Wilson action using link variables which live on the links connecti-
ng lattice sites and plaquette variables, which are products of link variables around elementary squares of the lattice. Progress in this direction has been reported, e.g., in Ref. [74]. (3) QC of physical observables, such as hadron masses, decay constants, and matrix elements. This often requires sophisticated techniques to extract these quantities from lattice QCD data. Tune the lattice parameters (e.g., bare quark masses, lattice spacing) to match experimental results and ensure accurate extra-
polation to physical conditions. (4) Perform detailed error analysis, including quantum device imperfection as well as systematic errors from finite lattice spacing, finite volume, and unphysical quark masses. Extrapolate results to the continuum limit and infinite volume limit, ensuring that physical results are robust and reliable. (5) Address renormalization on the lattice, including nonperturbative renormalization techniques. Extend lattice QCD calculations to finite temperature and finite bar-
yon density, exploring the QCD phase diagram. Explore and develop new algorithms and computational techniques, such as machine learning methods, to further enhance the efficiency and accuracy of lattice QCD quantum simulations. By following these steps, one can systematically build up from the relatively simpler scalar QFT to the highly complex and rich structure of lattice QCD, enabling the study of the strong interactions that govern the behavior of quarks and gluons in high energy physics.
ACKNOWLEDGMENTS
We thank Ignacio Cirac for useful comments on quantum simulation overheads. This work was supported by the Jefferson Lab LDRD Project No. LDRD21-17 under which Jefferson Science Associates, LLC, manages and operates
Jefferson Lab. R.G.E. acknowledges support from the U.S. Department of Energy Contract DE-AC05-06OR23177, under which Jefferson Science Associates, LLC, manages and operates Jefferson Lab, and the Department of Energy, Office of Science, National Information Science Research Centers, Codesign Center for Quantum Advantage (C2QA) under contract number DE-SC0012704. O.P. acknowledges support from National Science Foundation Grants No. PHY-2112867 and No. ECCS-2219760. G.S. acknowledges support by the-
 National Science Foundation under Award DGE-2152168, the Army Research Office under Award W911NF-19-1-0397, and the Department of Energy, Office of Nuclear Physics, Quantum Horizons Program Award DE-SC0023687 and Office of Science DOE/ASCR 2023 EXPRESS Award DE-SC0024325.
APPENDIX: REVIEW OF PHOTONIC ONE-WAY QUANTUM COMPUTING
In this Appendix, we recall fundamentals of measurementbased universal quantum computing with cluster states [65], also known as one-way quantum computing [35]. We focus on the continuous-variable photonic implementation [36,40,75] in which quantum optical fields, also known as qumodes, are employed in lieu of qubits. As quantum computing has been formulated for CV encodings [39,60,76], so has MBQC [36,37,77,78]. Center to this endeavor has been the experimental realization of record size qumode-b-
ased cluster states with the most scalability promise across any quantum computing platform, be it qubit- or qumode-based [30–34,72,75,79]. See Ref. [29] for a review.
1. Basics of quantum optics
a. Quantum optical field
The quantized electromagnetic plane-wave field has the expression, in the Heisenberg picture,
E (r, t ) ∝ aei(k·r−ωt ) + a†e−i(k·r−ωt )
= Q cos(k · r − ωt ) − P sin(k · r − ωt ), (A1)
where a and a† are the photon annihilation and creation
operators, Q = (a + a†)/√2 is the position-like amplitude
quadrature, and P = i(a† − a)/√2 is the momentum-like phase quadrature. Continuous-variable quantum information uses the amplitude and phase quadrature eigenstates, |s〉γq , |s〉γp, which satisfy
Q|s〉γq = s|s〉γq ,
P|s〉γp = s|s〉γp, (A2)
and are Fourier transforms of each other. Because of the Heisenberg inequality Q P 1/2, these states have infinite energy and are therefore unphysical.
b. Single-mode squeezing
In the laboratory, arbitrarily good approximations of the quadrature eigenstates are realized by squeezed states,
043065-17

RAÚL A. BRICEÑO et al. PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
obtained from two-photon emitters. Indistinguishable pair photons yield single-mode squeezed states of the form
S(r )|0〉γ = e r
2 (a†2−a2 )|0〉γ (A3)
∝
∑ ∞
n=0
ψn |2n〉γ ∝
∫
d s e− s2
2e2r |s〉γq ∝
∫
d s e− s2
2e−2r |s〉γp ,
(A4)
where S(r) is the squeezing operator and r the squeezing parameter, related to the two-photon emission rate [80]. For r > 0, the state is phase squeezed, else it is amplitude squeezed. The limit r → ±∞, corresponding to infinite energy, yields unphysical “plane wave” phase-quadrature eigenstates.
c. Two-mode squeezing
Distinguishable pair photons yield two-mode squeezed states, which are entangled states of the form
S(1, 2; r )|0〉γ = er(a†
1 a†
2−a1a2 )|0〉γ (A5)
∝
∑ ∞
n=0
φn |n〉γ 1|n〉γ 2
∝
∫∫
d sd s′ e− (s−s′)2
2e−2r e− (s+s′ )2
2e2r |s〉γq1|s′〉γq2
∝
∫∫
d sd s′ e− (s+s′)2
2e−2r e− (s−s′ )2
2e2r |s〉γp1|s′〉γp2.
(A6)
and are the closest physical approximations of the unphysical Einstein-Podolsky-Rosen (EPR) entangled states [81]
|EPR〉γ 12 =
∞ ∑
n=0
|n〉γ 1|n〉γ 2 =
∫
ds |s〉γq1|s〉γq2
=
∫
ds |s〉γp1|−s〉γp2. (A7)
In the Heisenberg picture, the two-mode squeezing process is described by the following Bogoliubov transformation:
a1(r) = S(1, 2; r)† a1 S(1, 2; r) = a1 cosh r + a†
2 sinh r,
a2(r) = S(1, 2; r)† a2 S(1, 2; r) = a2 cosh r + a†
1 sinh r.
(A8)
2. CV cluster states
Over qubits, cluster states (also known as graph states) are constituted of controlled-Pauli-Z gates linking qubits all
initialized in the |+〉 = (|0〉+|1〉)/√2 state. Over qumodes (quantum fields), the |+〉 states correspond, ideally, to p = 0 quadrature eigenstates. On a lattice of L sites, we
need L qumodes for particles [labeled (k, b)] and an equal number for antiparticles [labeled (k, c)] of physical momen
tum 2πk
L (k ∈ ZL). CV cluster states are then formed by
entangling qumodes in p = 0 phase-quadrature eigenstates
|0〉γpk,b = (2π )−1/2 ∫ ds |s〉γqk,b, (and similarly for an antipar
ticle created by c†(k)) or, in the laboratory, phase-squeezed states S(k, b; r)|0〉k,b = exp{ r
2 [b†2(k) − b2(k)]}|0〉γ k,b, with
controlled-Z entangling gates CZ = eiQk⊗Ql . For the sake of simplicity, we retain quadrature eigenstates for now. A cluster state graph is defined with the aforementioned qumodes as vertices linked by CZ edges. A two-mode example is
(A9)
This state is identical to the EPR state, to a local (singlequmode) Fourier transform left. In the MBQC paradigm, the universal QC gate set can be implemented by single qubit measurements and feedforward to nearest neighbors on a 2D cluster graph. In CV MBQC, these measurements fall into two categories: field, i.e., quadrature measurements and PNR measurements. Field measurements project onto the aforementioned quadrature eigenstates, {|s〉γq }s∈R, {|s〉γp}s∈R,. These measurements are implemented by-
 homodyne detection, i.e., interference with a well-calibrated and stable local oscillator (LO) laser whose phase relative to that of the measured quantum fields determines which of its quadratures is measured. PNR measurements project onto the discrete Fock basis states {|n〉γ }n∈N .
In terms of MBQC gates, these two types of measurements have fundamentally distinct capabilities: on one hand, quadrature-measurement-enabled MBQC gates are Gaussian in nature (in terms of their Wigner function) and therefore equivalent to Clifford operations on qubits [39,76]. We present this in more detail later. On the other hand, PNR measurements give access to non-Gaussian gates, whose qubit counterparts are non-Clifford gates, and enable exponential speedup [76,82], as well as quantum error -
correction [39]. In this work, PNR measurements are key to initial Fock-state preparation (thereby defining the initial excitation number of free fields), non-Gaussian (e−itHint ) gate implementation, and final measurements of free field excitations after evolution involving quartic phase gates. It is important to note that PNR measurements of CV cluster states have recently been discovered as a powerful enabling paradigm for MBQC [66] and have the potential to do the same for quantum simulation.
3. Basic principles of CV MBQC
We start by recalling the fundamentals of CV MBQC as they relate to cluster entangled states. Details can be found in Refs. [29,37]. A central QC primitive is the teleportation gadget, which can be expressed in circuit form as
(A10)
043065-18

TOWARD COHERENT QUANTUM COMPUTATION OF ... PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
where the vertical line linking the two dots denotes the CZ12 gate—note that, if (in)1 = |0〉γp1, then the input is the canonical cluster state of Eq. (A9), and where the top left bra denotes a measurement, with result m, of the θ -rotated quadrature Pθ = R†(θ )PR(θ ) = −Q sin θ + P cos θ , where R(θ ) =
exp(−iθ a†a). Note that this circuit proceeds from right to left so that one can straightforwardly write down the circuit operators in the order that they apply. Any quantum state, potentially multimode (which will obviously increase the circuit breadth), can enter the circuit at placeholder (in)1 and come out teleported—and possibly acted on by a gate—at placeholder (out)2. For teleportation, (in)1 = |ψ〉1 and the desired output is (out)2 = |ψ〉2. The T2←1 teleportation operator can
be simplified and written effectively as9
T2←1 = X2
(m cos θ
)R2
(π
2
)P2(tan θ )SWAP2←1, (A11)
where P (κ ) = eiκQ2 is the shear operator, X (s) = e−isP and Z (t ) = eitQ are the respective Q and P-quadrature translation (also known as displacement) operators, and the quantum Fourier transform R2( π
2 ) is a teleportation byproduct—analog
to the Hadamard gate for qubits. Although the T2←1 teleportation operator is applied by physically performing a destructive measurement on mode 1, the quantum information is preserved and teleported to mode 2, so one can treat T2←1 as an effective single-mode (one-in, one-out) operator. Another important point is that while the translation operator applied is dependent upon the randomly determined measurement result m, deterministic operation is always possible by the feedforward of m to further q-
umodes, by shifting and rotating subsequent measurement bases. In fact, for Gaussian operations, this ‘adjustment’ can even be made after performing subsequent measurements by performing the correction on the measurement result [36]. This is because Gaussian CV gates are the analogues of Clifford qubit gates. Keeping this key fact in mind, we can treat Eq. (A10) as the operator
T (κ ) = R( π
2
)P (κ ), (A12)
where κ = tan θ is chosen by the user.
9Note that θ = π
2 , i.e., performing a homodyne measurement of Q, does not teleport. It acts to disconnect the cluster state.
Concatenating several circuits of this form is equivalent to teleporting down a cluster state chain of the form of Eq. (A9), and one can show that any arbitrary single-mode Gaussian unitary can be implemented with four teleportation steps [83]:
UG = T (κ4)T (κ3)T (κ2)T (κ1). (A13)
Note that performing two consecutive measurements with κ2 = κ3 = 0 allows for the transference of the CZ operation and effectively applies the two-mode gate CZ14. A more detail and graphical understanding of this effect can be found in Ref. [37]. With the ability to apply CZi j and single-mode Gaussian unitaries, one can thus apply arbitrary two-mode Gaussian unitaries through series of not more than 10 homodyne measurements. With homodyne measurement alone, one can thus use a cluster state to ena-
ct any multimode Gaussian unitary, which is the equivalent of the Clifford gate set for qubit-based computation. As is well known, the universal gate set for quantum computing requires at least one non-Clifford, i.e., one nonGaussian, gate, by virtue of the CV translation [76,84] of the Gottesman-Knill theorem [82]. It is also well known that the universal gate set can be derived from solely Gaussian measurement-based gates [85] when these are applied to qumodes encoded in qubits by way of the Got-
tesmanKitaev-Preskill (GKP) code [39]. An efficient protocol for the near-deterministic generation of GKP qubit states was discovered recently [66] that fully leverages the CV cluster state structure presented above with the sole addition of PNR measurements to homodyne ones. Finally, a critical question is that of finite squeezing: quadrature eigenstates are unphysical and Gaussian squeezed states must be used in practice. The question is that the finiteness of the squeezing parameter r introduce-
s Gaussian noise which will ruin the CV protocol [86]. However, the GKP qubit encoding remedies that problem by allowing quantum error correction for small shifts p → p + ε in the quadrature basis |p〉 and Menicucci proved the existence of a fault tolerance threshold for CVQC [40] requiring no more than 10 log[exp(−2r)] = 20.5 dB of squeezing. This threshold was brought down to less than 10 dB [87] by use of topological surface error code [88] foliated into a cluster state [89,90].
[1] Y. Aokiet al. (Flavour Lattice Averaging Group (FLAG)), FLAG Review 2021, Eur. Phys. J. C 82, 869 (2022). [2] R. A. Briceno, J. J. Dudek, and R. D. Young, Scattering processes and resonances from lattice QCD, Rev. Mod. Phys. 90, 025001 (2018). [3] M. T. Hansen, H. B. Meyer, and D. Robaina, From deep inelastic scattering to heavy-flavor semileptonic decays: Total rates into multihadron final states from lattice QCD, Phys. Rev. D 96, 094513 (2017). [4] J. Bulava and M. T. Hansen, Scattering ampl-
itudes from finite-volume spectral functions, Phys. Rev. D 100, 034521 (2019).
[5] Z. Davoudi, N. Mueller, and C. Powers, Towards quantum computing phase diagrams of gauge theories with thermal pure quantum states, Phys. Rev. Lett. 131, 081901 (2023). [6] R. P. Feynman, Simulating physics with computers, Int. J. Theor. Phys. 21, 467 (1982). [7] S. Lloyd, Universal quantum simulators, Science 273, 1073 (1996). [8] S. P. Jordan, K. S. M. Lee, and J. Preskill, Quantum algorithms for quantum field theories, Science 336, 1130 (2012). [9] S. P. Jordan, K. S. M. Lee, and J. Preskil-
l, Quantum computation of scattering in scalar quantum field theories, Quantum Inf. Comput. 14, 1014 (2014).
043065-19

RAÚL A. BRICEÑO et al. PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
[10] K. Marshall, R. Pooser, G. Siopsis, and C. Weedbrook, Quantum simulation of quantum field theory using continuous variables, Phys. Rev. A 92, 063825 (2015). [11] R. A. Briceño, J. V. Guerrero, M. T. Hansen, and A. M. Sturzu, Role of boundary conditions in quantum computations of scattering observables, Phys. Rev. D 103, 014506 (2021). [12] W. A. de Jong, K. Lee, J. Mulligan, M. Płosko ́n, F. Ringer, and X. Yao, Quantum simulation of nonequilibrium dynamics and thermalization in the Schwinger -
model, Phys. Rev. D 106, 054508 (2022). [13] W. A. De Jong, M. Metcalf, J. Mulligan, M. Płosko ́n, F. Ringer, and X. Yao, Quantum simulation of open quantum systems in heavy-ion collisions, Phys. Rev. D 104, L051501 (2021). [14] C. W. Bauer and D. M. Grabowska, Efficient representation for simulating U(1) gauge theories on digital quantum computers at all values of the coupling, Phys. Rev. D 107, L031503 (2023). [15] N. H. Nguyen, M. C. Tran, Y. Zhu, A. M. Green, C. H. Alderete, Z. Davoudi, and N.-
 M. Linke, Digital quantum simulation of the schwinger model and symmetry protection with trapped ions, PRX Quantum 3, 020324 (2022). [16] B. Andrade, Z. Davoudi, T. Graß, M. Hafezi, G. Pagano, and A. Seif, Engineering an effective three-spin Hamiltonian in trapped-ion systems for applications in quantum simulation, Quantum Sci. Technol. 7, 034001 (2022). [17] Z. Davoudi, N. M. Linke, and G. Pagano, Toward simulating quantum field theories with controlled phonon-ion dynamics: A hybrid analog-digit-
al approach, Phys. Rev. Res. 3, 043072 (2021). [18] C. W. Bauer, Z. Davoudi, A. B. Balantekin, T. Bhattacharya, M. Carena, W. A. de Jong, P. Draper, A. El-Khadra, N. Gemelke, M. Hanada, D. Kharzeev, H. Lamm, Y.-Y. Li, J. Liu, M. Lukin, Y. Meurice, C. Monroe, B. Nachman, G. Pagano, J. Preskill et al., Quantum simulation for high-energy physics, PRX Quantum 4, 027001 (2023). [19] J. Preskill, Quantum computing in the NISQ era and beyond, Quantum 2, 79 (2018). [20] The LIGO Collaboration, Enhanced se-
nsitivity of the LIGO gravitational wave detector by using squeezed states of light, Nat. Photon. 7, 613 (2013). [21] F. Arute, K. Arya, R. Babbush, D. Bacon, J. C. Bardin, R. Barends, R. Biswas, S. Boixo, F. G. S. L. Brandao, D. A. Buell, B. Burkett, Y. Chen, Z. Chen, B. Chiaro, R. Collins, W. Courtney, A. Dunsworth, E. Farhi, B. Foxen, A. Fowler et al., Quantum supremacy using a programmable superconducting processor, Nature (London) 574, 505 (2019). [22] S. Aaronson and A. Arkhipov, The computa-
tional complexity of linear optics, Electronic Colloquium on Computational Complexity Report No. 170, 1 (2010). [23] C. S. Hamilton, R. Kruse, L. Sansoni, S. Barkhofen, C. Silberhorn, and I. Jex, Gaussian boson sampling, Phys. Rev. Lett. 119, 170501 (2017). [24] H.-S. Zhong, H. Wang, Y.-H. Deng, M.-C. Chen, L.-C. Peng, Y.-H. Luo, J. Qin, D. Wu, X. Ding, Y. Hu, P. Hu, X.-Y. Yang, W.-J. Zhang, H. Li, Y. Li, X. Jiang, L. Gan, G. Yang, L. You, Z. Wang et al., Quantum computational advantage using phot-
ons, Science 370, 1460 (2020). [25] L. S. Madsen, F. Laudenbach, M. F. Askarani, F. Rortais, T. Vincent, J. F. F. Bulmer, F. M. Miatto, L. Neuhaus, L. G. Helt, M. J. Collins, A. E. Lita, T. Gerrits, S. W. Nam, V. D. Vaidya,
M. Menotti, I. Dhand, Z. Vernon, N. Quesada, and J. Lavoie, Quantum computational advantage with a programmable photonic processor, Nature (London) 606, 75 (2022). [26] J. Huh, G. G. Guerreschi, B. Peropadre, J. R. McClean, and A. Aspuru-Guzik, Boson sampling for molecular vibronic spectra, Nat. Photon. 9, 615 (2015). [27] K. Brádler, S. Friedland, J. Izaac, N. Killoran, and D. Su, Graph isomorphism and gaussian boson sampling, Spec. Matrices 9, 166 (2021). [28] T. Weissman, E. Ordentlich, G. Sero-
ussi, S. Verdu, and M. J. Weinberger, Inequalities for the l1 deviation of the empirical distribution, HP Technical Reports HPL-2003-97, R1 (2003). [29] O. Pfister, Continuous-variable quantum computing in the quantum optical frequency comb, J. Phys. B: At. Mol. Opt. Phys. 53, 012001 (2020). [30] M. Chen, N. C. Menicucci, and O. Pfister, Experimental realization of multipartite entanglement of 60 modes of a quantum optical frequency comb, Phys. Rev. Lett. 112, 120505 (2014). [31] S. Yokoyama, R. U-
kai, S. C. Armstrong, C. Sornphiphatphong, T. Kaji, S. Suzuki, J. Yoshikawa, H. Yonezawa, N. C. Menicucci, and A. Furusawa, Ultra-large-scale continuousvariable cluster states multiplexed in the time domain, Nat. Photon. 7, 982 (2013). [32] J.-i. Yoshikawa, S. Yokoyama, T. Kaji, C. Sornphiphatphong, Y. Shiozawa, K. Makino, and A. Furusawa, Invited article: Generation of one-million-mode continuous-variable cluster state by unlimited time-domain multiplexing, APL Photonics 1, 060801 (2016). [33] W.-
 Asavanant, Y. Shiozawa, S. Yokoyama, B. Charoensombutamon, H. Emura, R. N. Alexander, S. Takeda, J.-i. Yoshikawa, N. C. Menicucci, H. Yonezawa, and A. Furusawa, Generation of time-domain-multiplexed two-dimensional cluster state, Science 366, 373 (2019). [34] M. V. Larsen, X. Guo, C. R. Breum, J. S. Neergaard-Nielsen, and U. L. Andersen, Deterministic generation of a twodimensional cluster state, Science 366, 369 (2019). [35] R. Raussendorf and H. J. Briegel, A one-way quantum computer, Phys. Rev-
. Lett. 86, 5188 (2001). [36] N. C. Menicucci, P. van Loock, M. Gu, C. Weedbrook, T. C. Ralph, and M. A. Nielsen, Universal quantum computation with continuous-variable cluster states, Phys. Rev. Lett. 97, 110501 (2006). [37] M. Gu, C. Weedbrook, N. C. Menicucci, T. C. Ralph, and P. van Loock, Quantum computing with continuous-variable clusters, Phys. Rev. A 79, 062318 (2009). [38] O. Pfister, Qubits without qubits, Science 383, 264 (2024). [39] D. Gottesman, A. Kitaev, and J. Preskill, Encoding a-
 qubit in an oscillator, Phys. Rev. A 64, 012310 (2001). [40] N. C. Menicucci, Fault-tolerant measurement-based quantum computing with continuous-variable cluster states, Phys. Rev. Lett. 112, 120504 (2014). [41] K. H. Sherman, F. G. Ortega-Gama, R. A. Briceño, and A. W. Jackura, Two-current transition amplitudes with two-body final states, Phys. Rev. D 105, 114510 (2022). [42] R. A. Briceño, Z. Davoudi, M. T. Hansen, M. R. Schindler, and A. Baroni, Long-range electroweak amplitudes of single hadr-
ons from Euclidean finite-volume correlation functions, Phys. Rev. D 101, 014509 (2020). [43] X.-D. Ji, Deeply virtual Compton scattering, Phys. Rev. D 55, 7114 (1997).
043065-20

TOWARD COHERENT QUANTUM COMPUTATION OF ... PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
[44] M. A. Carrillo, R. A. Briceño, and A. M. Sturzu, Inclusive reactions from finite Minkowski spacetime correlation functions, Phys. Rev. D 110, 054503 (2024). [45] Z. Qian, J. Watkins, G. Given, J. Bonitati, K. Choi, and D. Lee, Demonstration of the rodeo algorithm on a quantum computer Eur. Phys. J. A 60, 151 (2024). [46] K. Choi, D. Lee, J. Bonitati, Z. Qian, and J. Watkins, Rodeo algorithm for quantum computing, Phys. Rev. Lett. 127, 040505 (2021). [47] D. B. Kaplan, N. Klco, and A. Roggero,-
 Ground states via spectral combing on a quantum computer, arXiv:1709.08250. [48] A. Alexandru, G. Ba ̧sar, P. F. Bedaque, S. Vartak, and N. C. Warrington, Monte carlo study of real time dynamics on the lattice, Phys. Rev. Lett. 117, 081602 (2016). [49] K. Yeter-Aydeniz, E. F. Dumitrescu, A. J. McCaskey, R. S. Bennink, R. C. Pooser, and G. Siopsis, Scalar quantum field theories as a benchmark for near-term quantum computers, Phys. Rev. A 99, 032306 (2019). [50] K. Yeter-Aydeniz and G. Siopsis, Qua-
ntum computation of scattering amplitudes in scalar quantum electrodynamics, Phys. Rev. D 97, 036004 (2018). [51] H.-A. Bachor and T. C. Ralph, A Guide to Experiments in Quantum Optics, 3rd ed. (Wiley-VCH, Weinheim, Germany, 2019). [52] S. L. Braunstein, Squeezing as an irreducible resource, Phys. Rev. A 71, 055801 (2005). [53] N. Somaschi, V. Giesz, L. De Santis, J. C. Loredo, M. P. Almeida, G. Hornecker, S. L. Portalupi, T. Grange, C. Antón, J. Demory, C. Gómez, I. Sagnes, N. D. Lanzillotti-Kimu-
ra, A. Lemaítre, A. Auffeves, A. G. White, L. Lanco, and P. Senellart, Near-optimal single-photon sources in the solid state, Nat. Photon. 10, 340 (2016). [54] J. C. Loredo, N. A. Zakaria, N. Somaschi, C. Anton, L. de Santis, V. Giesz, T. Grange, M. A. Broome, O. Gazzano, G. Coppola, I. Sagnes, A. Lemaitre, A. Auffeves, P. Senellart, M. P. Almeida, and A. G. White, Scalable performance in solid-state single-photon sources, Optica 3, 433 (2016). [55] J. A. Armstrong, N. Bloembergen, J. Ducuing, and-
 P. S. Pershan, Interactions between light waves in a nonlinear dielectric, Phys. Rev. 127, 1918 (1962). [56] N. Bohr, Can quantum-mechanical description of physical reality be considered complete? Phys. Rev. 48, 696 (1935). [57] W. R. Clements, P. C. Humphreys, B. J. Metcalf, W. S. Kolthammer, and I. A. Walmsley, Optimal design for universal multiport interferometers, Optica 3, 1460 (2016). [58] S. Ghose and B. C. Sanders, Non-gaussian ancilla states for continuous variable quantum computation vi-
a gaussian maps, J. Mod. Opt. 54, 855 (2007). [59] M. Eaton, A. Hossameldin, R. J. Birrittella, P. M. Alsing, C. C. Gerry, H. Dong, C. Cuevas, and O. Pfister, Resolution of 100 photons and quantum generation of unbiased random numbers, Nat. Photon. 17, 106 (2023). [60] S. Lloyd and S. L. Braunstein, Quantum computation over continuous variables, Phys. Rev. Lett. 82, 1784 (1999). [61] T. Kalajdzievski and J. M. Arrazola, Exact gate decompositions for photonic quantum computing, Phys. Rev. A 99, 022-
341 (2019). [62] M. Yukawa, K. Miyata, H. Yonezawa, P. Marek, R. Filip, and A. Furusawa, Emulating quantum cubic nonlinearity, Phys. Rev. A 88, 053816 (2013).
[63] K. Marshall, R. Pooser, G. Siopsis, and C. Weedbrook, Repeatuntil-success cubic phase gate for universal continuous-variable quantum computation, Phys. Rev. A 91, 032321 (2015). [64] R. Yanagimoto, T. Onodera, E. Ng, L. G. Wright, P. L. McMahon, and H. Mabuchi, Engineering a kerr-based deterministic cubic phase gate via gaussian operations, Phys. Rev. Lett. 124, 240503 (2020). [65] H. J. Briegel and R. Raussendorf, Persistent entanglement in arrays of interacting particles, Phys. Rev. Lett. 8-
6, 910 (2001). [66] M. Eaton, C. González-Arciniegas, R. N. Alexander, N. C. Menicucci, and O. Pfister, Measurement-based generation and preservation of cat and grid states within a continuous-variable cluster state, Quantum 6, 769 (2022). [67] K. Noh, S. M. Girvin, and L. Jiang, Encoding an oscillator into many oscillators, Phys. Rev. Lett. 125, 080503 (2020). [68] C. Flühmann, T. L. Nguyen, M. Marinelli, V. Negnevitsky, K. Mehta, and J. P. Home, Encoding a qubit in a trapped-ion mechanical oscil-
lator, Nature (London) 566, 513 (2019). [69] P. Campagne-Ibarcq, A. Eickbusch, S. Touzard, E. ZalysGeller, N. E. Frattini, V. V. Sivak, P. Reinhold, S. Puri, S. Shankar, R. J. Schoelkopf, L. Frunzio, M. Mirrahimi, and M. H. Devoret, Quantum error correction of a qubit encoded in grid states of an oscillator, Nature (London) 584, 368 (2020). [70] S. Konno, W. Asavanant, F. Hanamura, H. Nagayoshi, K. Fukui, A. Sakaguchi, R. Ide, F. China, M. Yabuno, S. Miki, H. Terai, K. Takase, M. Endo, P. Marek, R-
. Filip, P. van Loock, and A. Furusawa, Logical states for fault-tolerant quantum computation with propagating light, Science 383, 289 (2024). [71] A. Anteneh, L. Brunel, and O. Pfister, Machine-learninginformed, efficient generation of universal photonic quantum computing resources, Optica Quantum 2, 296 (2024). [72] M. Pysher, Y. Miwa, R. Shahrokhshahi, R. Bloomer, and O. Pfister, Parallel generation of quadripartite cluster entanglement in the optical frequency comb, Phys. Rev. Lett. 107, 03050-
5 (2011). [73] R. N. Alexander and N. C. Menicucci, Flexible quantum circuits using scalable continuous-variable cluster states, Phys. Rev. A 93, 062326 (2016). [74] R. G. Jha, F. Ringer, G. Siopsis, and S. Thompson, Continuousvariable quantum computation of the O(3) model in 1 + 1 dimensions, Phys. Rev. A 109, 052412 (2024). [75] N. C. Menicucci, S. T. Flammia, and O. Pfister, One-way quantum computing in the optical frequency comb, Phys. Rev. Lett. 101, 130501 (2008). [76] S. D. Bartlett, B. C. -
Sanders, S. L. Braunstein, and K. Nemoto, Efficient classical simulation of continuous variable quantum information processes, Phys. Rev. Lett. 88, 097904 (2002). [77] J. Zhang and S. L. Braunstein, Continuous-variable Gaussian analog of cluster states, Phys. Rev. A 73, 032318 (2006). [78] P. van Loock, C. Weedbrook, and M. Gu, Building Gaussian cluster states by linear optics, Phys. Rev. A 76, 032321 (2007). [79] O. Pfister, S. Feng, G. Jennings, R. Pooser, and D. Xie, Multipartite continuous-var-
iable entanglement from concurrent nonlinearities, Phys. Rev. A 70, 020302(R) (2004). [80] D. F. Walls and G. J. Milburn, Quantum Optics (Springer, Berlin, 1994). [81] A. Einstein, B. Podolsky, and N. Rosen, Can quantummechanical description of physical reality be considered complete? Phys. Rev. 47, 777 (1935).
043065-21

RAÚL A. BRICEÑO et al. PHYSICAL REVIEW RESEARCH 6, 043065 (2024)
[82] D. Gottesman, The Heisenberg representation of quantum computers, in Group22: Proceedings of the XXII International Colloquium on Group Theoretical Methods in Physics, edited by S. P. Corney, R. Delbourgo, and P. D. Jarvis, (International Press, Cambridge, MA, 1999), pp. 32-43. [83] R. Ukai, J.-i. Yoshikawa, N. Iwata, P. van Loock, and A. Furusawa, Universal linear bogoliubov transformations through one-way quantum computation, Phys. Rev. A 81, 032315 (2010). [84] A. Mari and J. Eisert, Posit-
ive wigner functions render classical simulation of quantum computation efficient, Phys. Rev. Lett. 109, 230503 (2012). [85] B. Q. Baragiola, G. Pantaleoni, R. N. Alexander, A. Karanjai, and N. C. Menicucci, All-Gaussian universality and fault tolerance with the Gottesman-Kitaev-Preskill code, Phys. Rev. Lett. 123, 200502 (2019).
[86] M. Ohliger, K. Kieling, and J. Eisert, Limitations of quantum computing with Gaussian cluster states, Phys. Rev. A 82, 042336 (2010). [87] K. Fukui, A. Tomita, A. Okamoto, and K. Fujii, Highthreshold fault-tolerant quantum computation with analog quantum error correction, Phys. Rev. X 8, 021054 (2018). [88] A. Kitaev, Fault-tolerant quantum computation by anyons, Ann. Phys. 303, 2 (2003). [89] R. Raussendorf, J. Harrington, and K. Goyal, A fault-tolerant one-way quantum computer, Ann. Phys. (-
NY) 321, 2242 (2006). [90] R. Raussendorf and J. Harrington, Fault-tolerant quantum computation with high threshold in two dimensions, Phys. Rev. Lett. 98, 190504 (2007).
043065-22

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:52.662Z
- **Text Length:** 111279 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
