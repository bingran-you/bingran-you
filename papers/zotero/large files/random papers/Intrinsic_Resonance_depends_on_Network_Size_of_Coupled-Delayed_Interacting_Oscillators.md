# PDF Document: Torres et al. - 2025 - Intrinsic Resonance depends on Network Size of Coupled-Delayed Interacting Oscillators.pdf

**File Path:** Torres et al. - 2025 - Intrinsic Resonance depends on Network Size of Coupled-Delayed Interacting Oscillators.pdf

**Processed Date:** 2026-02-10T18:17:47.289Z

**File Size:** 751.22 KB

**Total Pages:** 16

**Extracted Pages:** 16

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3700

**Title:** Intrinsic Resonance depends on Network Size of Coupled-Delayed Interacting Oscillators

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

APS/123-QED
Intrinsic Resonance depends on Network Size of Coupled-Delayed
Interacting Oscillators
Felipe A. Torres,1 Alejandro Weinstein,2 Jesus M. Cortes,3, 4, 5 and Wael El-Deredy6, ∗
1Departamento de Computaci ́on e Industrias,
Universidad Cat ́olica del Maule, Chile
2Department of Electronics Engineering,
Universidad T ́ecnica Federico Santa Mar ́ıa, Chile
3Ikerbasque: The Basque Foundation for Science
4Bio-Bizkaia Health Research Institute, Spain
5Department of Cell Biology and Histology,
University of the Basque Country, Spain
6Brain Dynamics Lab, Interdisciplinary Center of Biomedical and
Engineering Research for Health, Universidad de Valpara ́ıso, Chile
(Dated: November 19, 2025)
1
arXiv:2511.14065v1 [q-bio.NC] 18 Nov 2025

Abstract
The collective frequency that emerges from synchronized neuronal populations—the network
resonance—shows a systematic relationship with brain size: whole-brain’s large networks oscillate
slowly, whereas finer parcellations of fixed volume exhibit faster rhythms. This resonance–size
scaling has been reported in delayed neural mass models and human neuroimaging, yet the physical
mechanism remained unresolved.
Here we show that size-dependent resonance follows directly from propagation delays in delay
coupled phase oscillators. Starting from a Kuramoto model with heterogeneous delays, we linearize
around the near-synchronous solution and obtain a closed-form approximation linking the resonance
Ω to the mean delay and the effective coupling field. The analysis predicts a generic scaling law:
Ω ≈ (P
j cijτ )−1, so resonance is delay-limited and therefore depends systematically on geometric
size or parcellation density. We evaluate four growth scenarios—expanding geometry, fixed-volume
parcellation, constant geometry, and an unphysical reference case—and show that only geometry
consistent scaling satisfies the analytical prediction. Numerical simulations with heterogeneous
delays validate the law and quantify its error as a function of delay dispersion.
These results identify a minimal physical mechanism for size-dependent cortical resonance and
provide an analytical framework that unifies numeric simulation outputs.
I. INTRODUCTION
Modeling natural systems as networks provides a powerful framework for understanding
collective dynamics in complex systems, especially when oscillatory behavior and synchro
nization are involved. Network and graph theory offer quantitative tools for analyzing
synchronization, stability, and frequency shifts across diverse domains such as biological,
physical, and social systems [1, 2].
The Kuramoto model [3] stands as a foundational contribution to collective dynamics,
demonstrating how a set of coupled oscillators can synchronize their phases and frequencies
when the coupling strength surpasses a critical threshold. This gives rise to phase locking
and coherent patterns of activity. Strogatz [4] expanded this framework by analyzing how
∗ Contact author: wael.el-deredy@uv.cl
2

network topology, intrinsic oscillator properties, and coupling strength jointly determine
synchronization dynamics, including transitions from partial to full synchronization.
However, real-world networks often include transmission delays, which introduce new
layers of complexity. These delays shift phase relationships, alter the temporal structure
of interactions, and often lead to metastability—where synchronization is transient and
localized. Niebur [5] showed that delays systematically reduce the collective frequency—the
emergent frequency at which a group of synchronized oscillators operate—relative to the
average of their intrinsic frequencies. This phenomenon echoes the concept of resonance in
dynamical systems, even in the absence of external stimulation, where emergent frequencies
arise from the interplay of intrinsic oscillator properties, network topology, coupling strength,
and temporal delays.
These principles have found direct application in modeling large-scale brain network dy
namics. Kuramoto-like oscillators have been used to construct biologically plausible whole
brain network models constrained by empirical structural connectivity from the human con
nectome [6–8]. In such models, oscillators represent brain regions (typically with ∼40 Hz
intrinsic frequency), and the coupling weights and delays reflect empirical inter-node connec
tions. These interactions generate metastable states and broad frequency spectra, mimicking
dynamic patterns seen in neuroimaging studies. Notably, transiently synchronized subnet
works have been shown to exhibit an inverse relationship between collective frequency and
network size [8, 9], suggesting that the scale of a network fundamentally shapes its emergent
dynamics.
Further, human brain dynamics measured by electromagnetic mechanisms have geometric
constraints. It is possible to obtain a better aproximation of cortical dynamics with a linear
combination of geometrical modes of the brain rather than using a linear combination of
the modes of the topology of the adjacency network [10]. The need of spatial constraints
of the complex networks was also shown as relevant to obtain the collective behaviour in
other species’ brains [11, 12]. Then, the analysis of the geometry or spatial embedding of
the networks could offer a deeper understanding about the emergent collective phenomena
than relaying solely on network topology.
Despite its fundamental implications, the impact of network size on collective frequency
has not been systematically analyzed. Most previous studies normalize the input to each
node relative to the total number of nodes [4, 13], which maintains local balance but poten
3

tially obscures global dynamical effects. In analogy to physical systems, increasing network
size can lead to either denser packing (akin to higher pressure at fixed volume) or spatial
expansion (greater distances at constant interaction strength). Both scenarios suggest a
reduction in collective frequency when increasing size due to greater interaction complexity
and longer effective delays.
Moreover, the changes in the connectivity density of the networks is known as an issue
in the comparison between networks of different number of nodes by the varying of the
the graph metrics. To overcome this difficulty, it was shown by [14] that keeping the ratio
between the degree and the number of nodes also keeps around similar values of the path
length and clustering coefficient for lattice, small-world and random networks. In this sense,
the fully-connected networks keeps the maximal ratio of the degree over the number of
nodes. However, brain-like networks are sparse. It is expected that the connectivity density
remains constant or even decrease by increasing the number of nodes in the fixed volume of
an human brain. Connectivity density is also expected to be similar or decrease preserving
the volume that a node represents in the brains of species of different sizes.[12].
Here we examine steady-state response in the frequency behavior of Kuramoto-like net
works in the presence of delays, similar to [6]. We analytically derive the expression of the
collective frequency as a function of the number of nodes in the network. We define four
distinct structural growth scenarios to characterize different ways of increasing network size.
Case I (No geometry or delay scaling) serves as a conceptual baseline with fixed or absent
delays [15]. Case II (Growing weights with fixed delays) explores stronger coupling without
spatial expansion (as increasing activity in a social network [16]), but is physically unrealistic
considering geometric constraints. In contrast, Case III (Expanding the volume with spatial
scaling) [9] and Case IV (Increasing density in fixed volume) model biologically and physi
cally plausible growth [17]. We also show practical examples of Case III building a network
with its nodes located at a circumference with varying radius (Case A) and a practical ex
ample of case IV, increasing the number of nodes without changing the radius (Case B). For
all cases, we identify the conditions under which network resonance emerges—marked by an
emergent collective frequency that scales inversely with the number of nodes. Our findings
lay the foundation for a deeper understanding of synchronization in large-scale networks,
with implications for neuroscience, control theory, and the study of emergent behaviors in
complex systems.
4

II. METHODS
We define a fully connected, undirected graph G = {V, E}, where each pair of nodes i, j is
linked symmetrically with connection weights cij = cji, forming the connectivity (adjacency)
matrix C, and τij = τji forming the matrix of connection delays τ . We assume cij ≥ 0 and
exclude self-connections, i.e., cii = 0, so C is symmetric and nonnegative.
On top of this graph, we insert a dynamical model consisting of N coupled Kuramoto-like
oscillators with interaction delays [6], i.e.,
θ ̇i = ωi + K
N
N
X
j=1
cij sin [θj(t − τij) − θi(t)] , (1)
where θi(t) is the phase of the i-th oscillator, ωi its natural frequency, i = 1, . . . , N , cij the
weight of the connection from j to i, τij the delay, and K the global coupling strength.
For analytical tractability, we assume that the network operates in a near-synchrony
regime, i.e. |θj(t − τij) − θi(t) + 2nπ| ≪ 1, {n ∈ N0}, allowing us to linearize the sine
function. Additionally, we approximate the delayed phase as a linear function of time,
θj(t − τij) ≈ θj(t) − Ωjτij, where Ωj denotes the frequency of oscillator j. Under these
assumptions, the dynamics reduce to the following linearized system:
θ ̇i ≈ ωi − K
N
N
X
j=1
[cij(θi(t) − θj(t)) + cijΩjτij] . (2)
A. Network size dependence of collective frequency
Letting θ = [θ1, . . . , θN ]T , ω = [ω1, . . . , ωN ]T , and Ω = [Ω1, . . . , ΩN ]T , the linearized
dynamical system can be expressed compactly as:
θ ̇ = ω − K
N [Lθ + (C ⊙ τ )Ω] , (3)
where L is the graph Laplacian, and ⊙ denotes element-wise product. At the limit-cycle
steady state, where θ ̇i = Ωi, the phase evolves linearly as θi = Ωit. Substituting into Eq. (3),
we obtain:
I+ K
N [tL + (C ⊙ τ )] Ω = ω, (4)
and by Laplace transforming Eq. (4), it yields
5

Ω(s) = sI + K
N [L + s(C ⊙ τ )]
−1
ω(s)s2 (5)
providing an explicit dependence on network size for the limit-cycle system response Ω.
Under the near-synchrony assumption, all oscillators share a common frequency, i.e., Ωi = Ω
for all i, where Ω denotes the collective frequency of intrinsic resonance.
B. Homogeneous delays
If τij = τ , then (C ⊙ τ )Ω = τ CΩ. Substituting it in Eq. (4), and averaging over the
nodes both sides in Eq. (4), it yields
Ω = ⟨ω⟩
1 + KτM
N
, (6)
where M = P
j c is the row sum of C. The average over the nodes of L for the defined C
matrix is zero, removing the temporal dependence. As a control, if the homogeneous weight
is cij = c = 1, ∀{i, j | j ̸= i}, then M = N − 1, that in the limit N → ∞, M ≈ N , reducing
to the Niebur formula [5, 13]: Ω = ⟨ω⟩
1 + Kτ . (7)
C. Heterogeneous delays
If τij has distinct values for each edge of the network and ω(s) = ω
s we obtain the steady
state value of Ω by the final time theorem
Ω = lsi→m0 sΩ(s) = I + K
NC⊙τ
−1
ω. (8)
Then, the collective frequency is Ω = ⟨Ω⟩.
D. Numerical simulations
Fully connected networks with varying number of nodes from N = 5 to N = 100 were
simulated using the KuramotoNetworksPackage [18] for 10 seconds, and for ten initial condi
tions for the intrinsic frequencies and initial phases. The connectivity and delay matrices C
6

and τ have homogeneous off-diagonal elements for cases I-IV and heterogeneous values for
cases A-B. In order to get heterogeneous weight values for the case A, we use the Gaussian
filtered distance of the edge
cij = co exp

 
− τij
τ0
2
√2π


 , (9)
which provides a isotropic connectivity that is a common practice in absence of detailed
anatomical data [19]. For all cases, C and τ matrices have zeros in the main diagonal. The
intrinsic frequencies ωi of the nodes followed a Gaussian distribution with a 40 Hz mean and
a standard deviation of 2 Hz for all the cases. The parameters c0, τ0, and K were selected
to operate in a near-synchrony regime for almost any number of nodes in each case. The
initial guess for the value of K comes from Kc > 2σ
q
2
π for Gaussian distribution of the
intrinsic frequencies [20], where σ is the standard deviation in radians/seconds.
We analyzed the steady state response of the simulations. The first second was discarded
to avoid the transient dynamics starting from random initial phases. The steady-state
frequency of each node is the peak frequency of Welch’s periodogram using Hann time
windows of 5 s with 50% overlap. The collective frequency is taken to be the average of the
frequencies from the N nodes. Network synchrony was assessed by the temporal average of
the Kuramoto Order Parameter (KOP) defined as
KOP(t) =
N
X
n=1
exp(jθ(t)) (10)
III. RESULTS
We analytically and numerically assessed how network size affects the collective frequency
Ω under four archetypes of structural growth using homogeneous connection weights and
delays (Fig. 1). We also present the numerical results from two cases using heterogeneous
connection weights and delays. In these last two cases, we used a growing spatial circular
network with its nodes located in the circumference (Fig. 2):
a. Case I: No geometry or delay scaling. In the absence of delays, Eq. (6) simplifies
to Ω = ⟨ω⟩ for any N , confirming Strogatz’s classic result [4]. Ω = ⟨ω⟩/(1 + M Kτ /N ),
for a homogeneous delay τ > 0, which it also converges to the Niebur limit [5] for large N .
Simulation and analytic results perfectly match (Fig. 1a).
7

FIG. 1. Dependence of Collective Synchronization Frequency on Network Size. Homo
geneous connections. (a) Case I: Homogeneous weights and no spatial embedding. Collective
frequency remains equal to the mean intrinsic frequency (⟨ω⟩ = 2π · 40 Hz, SD = 4π) for all N
without delays; with fixed homogeneous delays (τ = 1 ms, K = 160), Ω converges to the Niebur
limit [5] as N → ∞. (b) Case II: Weight scales with N (c = N ), but delays remain fixed (τ = 10
ms). Analytical and numerical frequencies decrease with N ; mismatch for small N arises from
desynchronization (KOP< 0.2, shadowed region, K = 10). (c) Case III: Spatial expansion, delays
grow with N while weights stay fixed. Analytical and numerical results match across N (τ0 = 0.1
ms, K = 160). Collective frequency drops with N ; synchrony deteriorates beyond critical size
(KOP ≈ 0, shadowed region). (d) Case IV: Increasing network density in fixed volume, with
c = c0/τ 2 and τ = τ0/√N . synchrony sustained (KOP ≈ 1) under K = 10, c0 = 10−4, τ0 = 5 ms.
b. Case II: Growing weights with fixed delay. Setting c = N , τ = τ0, and M = N (N −
1), the analytical expression becomes Ω = ⟨ω⟩/(1+(N −1)Kτ0). Synchrony fails for small N
(⟨KOP ⟩ < 1), leading to deviation from theory (Fig. 1b) as the near-synchrony assumption
failed.
c. Case III: Expanding volume with spatial scaling. We define τ = N τ0 and c = 1,
yielding M = N − 1 and Ω = ⟨ω⟩/(1 + (N − 1)Kτ0). As N grows, delays increase, eventually
de-synchronizing the network and invalidating the linear approximation (Fig. 1c).
d. Case IV: Increasing density in fixed volume. Delays scale inversely with √N : τ =
τ0/√N as in a bi-dimensional space the distances increase as N 1/2 [15], and weights scale
with an inverse square rule found in multiple physical phenomena as c = c0/τ 2 = N c0/τ 2
0.
8

FIG. 2. Dependence of Collective Synchronization Frequency on Network Size. Het
erogeneous Connections. (a) Case A: Distances scale along with the number of nodes in a fully
connected network (K = 10000, τ0 = 1 ms, c0 = 1). The numerical results follow the analytical
prediction of decreasing collective frequency as the network size increases. (b) Case A with fixed
degree k = 4 using the nearer nodes, which are the heavier connections. The collective frequency
is lower than the intrinsic but does not follow the analytical prediction with low synchrony. (c)
Case A with fixed degree k = 4 using the farther nodes, which are the lighter connections. For
any N > 5 the collective frequency remains near the average intrinsic frequency. (d) Case A with
fixed connectivity density p = 0.6 connecting the nearer nodes. The collective frequency follows
the analytical prediction if the network synchronizes. (e) Case A with fixed connectivity density
p = 0.2 connecting the nearer nodes. The collective frequency is lower than the intrinsic average,
but does not follow the analytical prediction as the networks’ synchrony is low. (f) Case A with
fixed connectivity density p = 0.6 with random connections. The analytical and numerical results
are close. (g) Case A with fixed connectivity density p = 0.2 with random connections. The
networks do not achieve synchrony and the collective frequency remains near the average intrinsic
frequency. (h) Case B: Increasing the number of nodes in a fixed spatial area (K = 0.1, τ0 = 25
ms, c0 = 1). The numerical and analytic results are close. The collective frequency show more
variance for the number of nodes where the KOP is high but not equal to 1.
9

This yields M = (N − 1)N c0/τ 2
0 and the expression Ω = ⟨ω⟩/(1 + (N − 1)Kc0/(√N τ0)).
Simulations confirm the accuracy of the analytic prediction across N with full agreement
(Fig. 1d).
e. Case A: Expanding the radius of a fully-connected circular network. First, we used
fully-connected networks where the radius increases as r = N τ0 and the weights are deter
mined by Eq (9). The nodes are located in the circumference of radius r (Fig. 2a). The
collective frequency decreases following the analytical prediction.
f. Case A: Expanding the radius of a fixed-degree circular network. Second, we used
fixed-degree networks using the k = 4 farther nodes (Fig. 2b) and the k = 4 nearer nodes
(Fig. 2c). In both cases, we did not achieved synchrony for N > 5 (⟨KOP ⟩ ≈ 0), thus the
collective frequency does not decreases, and interestingly the prediction for the nearer nodes
is an increase in the collective frequency.
g. Case A: Expanding the radius of a fixed-density circular network. Third, we used
fixed density networks using p = 0.6 (Fig. 2d), and p = 0.2 (Fig. 2e) keeping the connections
with the nearer nodes. When synchrony is achieved (⟨KOP ⟩ ≈ 1), the collective frequency
decreases. In contrast to fully-connected networks, the variance of the intrinsic frequencies
are relevant, then the numerical results varies for each initial condition.
h. Case A: Expanding the radius of a fixed-density circular network with random connec
tions. Finally, we used fixed density networks using p = 0.6 (Fig. 2f), and p = 0.2 (Fig. 2g)
but allowing random non-symmetric connections. Synchrony is achieved (⟨KOP ⟩ ≈ 1)
using p=0.6, and numerical results are close to the analytical predictions. For p = 0.2, syn
chrony is not achieved and the numerical collective frequency remains close to the average
intrinsic frequency (40 Hz).
i. Case B: Increasing spatial density in fixed radius circular network. In this last case,
the radius of the circle keeps constant while more nodes are located in the circumference.
The delays decay asymptotically while weights increases proportionally with N. Synchrony
is mostly achieved for all the number of nodes, showing a small variance above the predicted
collective frequency for the network’s sizes where ⟨KOP ⟩ is near 1.
10

IV. DISCUSSION
We analytically derived how the collective frequency of a network of coupled phase os
cillators depends on network size under distinct growth scenarios. These scenarios capture
realistic constraints found in biological and artificial systems: fixed or expanding spatial
volume, increasing node density, and scaling of delays and weights. By assuming steady
state phase synchrony, we arrived at closed-form expressions that reveal how collective fre
quency shifts as a function of delay, coupling strength, and network structure. The derived
collective frequency is also the intrinsic resonance frequency as it comes from the system
response at the intrinsic frequencies of the individual oscillators.
In all realizable cases—i.e., those incorporating geometry or growth—collective frequency
decreases as the number of nodes increases. This decay arises from the compounded effect
of interaction delays and cumulative connectivity. While in the idealized case of a non
geometric network the collective frequency approaches the mean intrinsic frequency [4],
incorporating delays—especially increasing delays—leads to systematic slowing of global
dynamics. These analytical predictions match well with numerical simulations, provided
the system remains phase-synchronized.
One key insight is that the topology and physical embedding of the network shape how
delays accumulate. In Case IV (fixed volume), denser parcellation leads to stronger cu
mulative interactions, whereas in Case III (expanding volume), longer distances increase
delays, further reducing the collective frequency. In both scenarios, synchronization may
break down for large N , as indicated by the decline of the Kuramoto Order Parameter.
This breakdown marks the regime where our steady-state approximations no longer hold.
The Case III was further analyzed with the real spatial values in case A by varying the
topology of the expanding network as fully-connected, fixed degree or fixed connectivity
density. In the last case using connections between the nearer nodes but also with random
connections. As expected, the networks with lower number connections and larger delays
even fail to synchronize using the same global coupling that synchronizes the N = 5 net
work. However, if the density of the network is enough to achieve synchronization, then the
numerical results follow the analytical results. Achieving this prediction have importance
for real-world problems where the networks are weighted and directed.
From Case A results, we suggest the average intrinsic frequency as a suitable guess for the
11

collective frequency when the system does not achieve synchronization. However, the results
also suggest that at intermediate levels of synchrony the collective frequency decreases if the
heavier connections are a) enough density of the network and b) the ones with the increasing
delays.
Our results provide a rigorous framework for understanding how large-scale network prop
erties shape collective timescales. These findings have implications in neuroscience, where
synchronized oscillations govern cognition, memory, and perception. For example, the slow
ing of alpha and beta rhythms in aging or neurodegeneration could partly reflect increased
effective delays due to white matter degradation or network reconfiguration. Moreover,
brain network models using parcellation-based simulations (e.g., via the Kuramoto model)
must account for how node resolution and spatial embedding nonlinearly affect emergent
dynamics.
From a theoretical standpoint, the analysis complements prior works on synchronization
in complex networks [2, 13] and extends the results of Niebur et al. [5] by considering scaling
properties and topological embeddings. The introduction of heterogeneous delays further
aligns our work with more realistic models of brain networks.
Although we refer to cortical dynamics as a familiar example of a spatially extended
oscillator network, the mechanism derived here is not specific to neuroscience. Any delayed
coupled system with finite conduction speed exhibits the same size-dependent resonance pre
dicted by the analytical solution, with the brain cortex simply providing a well-characterised
empirical instance.
a. Limitations and Future Directions. Our analysis relies on the near-synchrony ap
proximation—a standard but necessary simplification for obtaining closed-form solutions in
coupled oscillator systems with heterogeneous delays. While this assumption may not hold
in weakly connected, highly heterogeneous, or biologically realistic networks, it provides a
tractable foundation to reveal how structural factors shape emergent dynamics. Notably,
regimes with increasing delays or high density can exhibit a breakdown of global synchrony,
giving rise to metastable dynamics characterized by transient, localized coherence. In such
cases, the predicted collective frequency still captures the dominant organizing timescale,
around which the system self-organizes before transitioning between states. This suggests
that the derived scaling laws remain informative beyond perfect synchrony and offer in
sight into the structural constraints of multistate behavior. Future work should extend the
12

framework to include noise, hierarchical and modular topologies, and biologically plausible
plasticity mechanisms—such as frequency or spike-timing-dependent adaptations—to better
capture the evolving dynamics of real-world networks.
V. DATA AVAILABILITY
The code needed to reproduce the simulations and figures is open available [21].
VI. ACKNOWLEDGMENTS
The authors are grateful to Professor Peter Robinson for his insightful comments on an
earlier version of the manuscript. This work is supported by ANID, Chile, projects Explo
racion 13240064; FONDECYT 1241695 (WED); BASAL AFB240002 (WED and AW); and
3230682 (FT). JMC acknowledges financial support from Ikerbasque: The Basque Founda
tion for Science, and from Spanish Ministry of Science (PID2023-148012OB-I00), Spanish
Ministry of Health (PI22/01118), Basque Ministry of Health (2023111002 & 2022111031).
Appendix A: Growing Circular Network
The network used in cases A and B have located its nodes in the circumference of a circle
centered in the origin. In case A, the radius of the circle increases along with the number
of nodes. There are several variations of the density (sparsity) of the connectivity between
the nodes. Fig. 3 (a)-(b) show the network for N = 10 and Fig. 3 (d)-(e) the netwrok when
the number of nodes increased to N = 20. In case B, the radius does not vary, only more
nodes are added to the circumference. For this cases we only used fully-connected networks.
Fig. 3 (c) shows the network for N = 10 and Fig. 3 (f) shows the network for N = 20 in
case B.
[1] S. Boccaletti, V. Latora, Y. Moreno, M. Chavez, and D.-U. Hwang, Complex networks: Struc
ture and dynamics, Physics reports 424, 175 (2006).
13

FIG. 3. Examples of the circular network. (a) Case A network for N = 10 with connectivity
density of p = 0.2 keeping the nearer connections. (b) Case A network for N = 10 with connectivity
density of p = 0.2 using random connections. (d) Case A network for N = 20 with connectivity
density of p = 0.2 keeping the nearer connections. (e) Case A network for N = 20 with connectivity
density of p = 0.2 using random connections. (c) Case B network for N = 10 fully-connected. (f)
Case B network for N = 20 fully-connected.
[2] A. Arenas, A. Dı ́az-Guilera, J. Kurths, Y. Moreno, and C. Zhou, Synchronization in complex
networks, Physics reports 469, 93 (2008).
[3] Y. Kuramoto, Self-entrainment of a population of coupled non-linear oscillators, in Interna
tional Symposium on Mathematical Problems in Theoretical Physics: January 23–29, 1975,
Kyoto University, Kyoto/Japan (Springer, 1975) pp. 420–422.
[4] S. H. Strogatz, From kuramoto to crawford: exploring the onset of synchronization in popu
lations of coupled oscillators, Physica D: Nonlinear Phenomena 143, 1 (2000).
[5] E. Niebur, H. G. Schuster, and D. M. Kammen, Collective frequencies and metastability in
networks of limit-cycle oscillators with time delay, Physical review letters 67, 2753 (1991).
14

[6] J. Cabral, H. Luckhoo, M. Woolrich, M. Joensson, H. Mohseni, A. Baker, M. L. Kringelbach,
and G. Deco, Exploring mechanisms of spontaneous functional connectivity in meg: how
delayed network interactions lead to structured amplitude envelopes of band-pass filtered
oscillations, Neuroimage 90, 423 (2014).
[7] M. Breakspear, S. Heitmann, and A. Daffertshofer, Generative models of cortical oscillations:
neurobiological implications of the kuramoto model, Frontiers in human neuroscience 4, 190
(2010).
[8] F. A. Torres, M. Otero, C. A. Lea-Carnall, J. Cabral, A. Weinstein, and W. El-Deredy,
Emergence of multiple spontaneous coherent subnetworks from a single configuration of human
connectome coupled oscillators model, Scientific Reports 14, 30726 (2024).
[9] C. A. Lea-Carnall, M. A. Montemurro, N. J. Trujillo-Barreto, L. M. Parkes, and W. El-Deredy,
Cortical resonance frequencies emerge from network size and connectivity, PLoS Computa
tional Biology 12, 1 (2016).
[10] J. C. Pang, K. M. Aquino, M. Oldehinkel, P. A. Robinson, B. D. Fulcher, M. Breakspear, and
A. Fornito, Geometric constraints on human brain function, Nature 618, 566 (2023).
[11] R. O’Dea, J. J. Crofts, and M. Kaiser, Spreading dynamics on spatially constrained complex
brain networks, Journal of the Royal Society Interface 10, 20130016 (2013).
[12] A. Salova and I. A. Kov ́acs, Combined topological and spatial constraints are required to
capture the structure of neural connectomes, Network Neuroscience 9, 181 (2025).
[13] W. S. Lee, E. Ott, and T. M. Antonsen, Large coupled oscillator systems with heterogeneous
interaction delays, Physical review letters 103, 044101 (2009).
[14] B. C. Van Wijk, C. J. Stam, and A. Daffertshofer, Comparing brain networks of different size
and connectivity density using graph theory, PloS one 5, e13701 (2010).
[15] R. Albert and A.-L. Barab ́asi, Statistical mechanics of complex networks, Rev. Mod. Phys.
74, 47 (2002).
[16] G. In ̃iguez, S. Heydari, J. Kert ́esz, and J. Saram ̈aki, Universal patterns in egocentric commu
nication networks, Nature Communications 14, 5217 (2023).
[17] L. Daqing, K. Kosmidis, A. Bunde, and S. Havlin, Dimension of spatially embedded networks,
Nature Physics 7, 481 (2011).
[18] BrainDynamicsLaboratory, https://github.com/anillovibrain/kuramotonetworkspackage,
GitHub repository (2024).
15

[19] S. Coombes, Large-scale neural dynamics: simple and complex, NeuroImage 52, 731 (2010).
[20] J. de Oliveira and C. Abud, Nonmonotonic critical threshold in the kuramoto model, Com
munications in Nonlinear Science and Numerical Simulation 91, 105428 (2020).
[21] B. Laboratory, https://github.com/anillovibrain/networkssizeresonance, GitHub repository
(2025).
16

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:47.289Z
- **Text Length:** 30403 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 16 of 16
