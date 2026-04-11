# PDF Document: Golmohammadi et al. - 2025 - Modeling Spatial Synchronization of Predator-Prey Oscillations via the XY Model under Demographic St.pdf

**File Path:** Golmohammadi et al. - 2025 - Modeling Spatial Synchronization of Predator-Prey Oscillations via the XY Model under Demographic St.pdf

**Processed Date:** 2026-02-10T18:17:11.084Z

**File Size:** 578.29 KB

**Total Pages:** 22

**Extracted Pages:** 22

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3622

**Title:** Modeling Spatial Synchronization of Predator-Prey Oscillations via the XY Model under Demographic Stochasticity and Migration

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Modeling Spatial Synchronization of Predator-Prey Oscillations
via the XY Model under Demographic Stochasticity and
Migration
Solmaz Golmohammadi
Department of Physics, Institute for Advanced Studies in
Basic Sciences (IASBS), Zanjan, 45137-66731, Iran and
The Abdus Salam International Centre for Theoretical Physics (ICTP),
Strada Costiera 11, 34014 Trieste, Italy
Mina Zarei∗
Department of Physics, Institute for Advanced Studies
in Basic Sciences (IASBS), Zanjan, 45137-66731, Iran
Jacopo Grilli†
Quantitative Life Sciences section, The Abdus Salam
International Centre for Theoretical Physics (ICTP),
Strada Costiera 11, 34014 Trieste, Italy
1
arXiv:2511.13501v1 [q-bio.PE] 17 Nov 2025

Abstract
We investigate stochastic predator-prey dynamics and their spatial phase synchronization using
the Rosenzweig-MacArthur model coupled across multiple patches. Combining stochastic simu
lations based on the Gillespie algorithm with analytical methods inspired by the XY model, we
uncover fundamental mechanisms through which demographic noise and dispersal shape synchro
nization and phase transitions. This study offers a theoretical foundation for understanding and
managing large-scale ecological synchrony and ecosystem resilience.
I. INTRODUCTION
Population oscillations are a typical and well-documented phenomenon in ecological sys
tems. These regular ups and downs in the number of individuals arise from the interplay
of biological processes such as predator-prey interactions, resource variability, and environ
mental fluctuations. These cyclical population size changes have been observed in a wide
variety of species and ecosystems, where they play an important role in shaping ecosystem
dynamics [1–6].
A notable pattern that often emerges in this context is synchronization, in which popu
lations in spatially separated habitats exhibit simultaneous fluctuations. Spatial synchrony,
documented in both controlled laboratory settings [7, 8] and in natural environments [2, 9
16], can have a major impact on ecosystem resilience [17]. When population cycles become
tightly synchronized across regions (a state often referred as phase locking), the peaks and
troughs of abundance tend to align in time. This coherence can make ecosystems more
vulnerable to large-scale disturbances, such as extreme weather events, disease outbreaks,
or resource shortages, potentially triggering widespread or system-wide collapses [18–21].
A number of mechanisms have been proposed to explain how such synchrony arises. The
Moran effect, for instance, links synchrony to correlated environmental variability across
space. Another key process is dispersal (the movement of individuals between locations),
which can physically couple populations and align their cycles [7, 13, 16, 22–31]. Both
these mechanisms explain why the synchrony typically decreases as geographic distance
∗ mina.zarei@iasbs.ac.ir
† jgrilli@ictp.it
2

increases: since environmental correlations weaken, and long-distance dispersal becomes
less common [32–37].
Nevertheless, contrary to these expectations, synchrony has also been observed over re
markably large spatial scales [7, 8]. Studies suggest that even limited, short-distance disper
sal can be enough to synchronize predator-prey systems that inherently demonstrate cyclic
fluctuations. In fact, minimal movements can phase-lock population cycles across an entire
system, maintaining coordinated oscillations [8, 26, 38, 39]. A classic example is the ex
tensively studied synchronized population dynamics of snowshoe hares and their predators,
particularly lynx, observed across multiple geographic scales [26, 40]. These findings are
further supported by a variety of experimental and field studies [8, 41].
A central debate in spatial ecology concerns the primary drivers of this synchrony. While
correlated environmental fluctuations (the Moran effect) are a well-established mechanism
[13, 22], the role of dispersal as a synchronizing agent remains complex, especially given that
local demographic noise tends to desynchronize patches. Early theoretical work highlighted
that the efficacy of dispersal can be subtle. For instance, dispersal is a much more potent
synchronizer when predator-prey dynamics exhibit a significant separation in their intrinsic
time scales [42].
In recent years, frameworks from statistical physics have provided powerful new analogies.
A number of studies have shown that the transition from incoherence to synchrony can be
mapped onto the Ising model, especially in systems that show two-cycle oscillations. These
works suggest that emergent, long-range synchrony can arise purely from local interactions,
with the transition belonging to the Ising universality class [43, 44].
Although environmental factors and species dispersal have been extensively studied in re
lation to spatial synchrony [8, 45, 46], the role of demographic stochasticity is still not as well
understood. This form of randomness comes from the random nature of individual births,
deaths, and interactions, which happen as discrete events, and is particularly significant in
predator-prey systems [47]. Previous research has demonstrated that demographic stochas
ticity plays a crucial role in population dynamics, influencing the stability of population
oscillations, their frequency, and phase [48], and potentially causing extinction [49].
Despite extensive research on spatial synchrony driven by environmental variability and
species dispersal, a critical knowledge gap remains: how does movement influence the phase
relationships of limit cycles in spatially extended, stochastically oscillating populations?
3

Most previous studies have focused either on purely deterministic models or on simulations
that incorporate demographic stochasticity without rigorous analytical frameworks.
Our research fills this gap by combining discrete stochastic simulations based on the
Gillespie algorithm [50] with analytical approaches inspired by statistical physics. Drawing
on the well-established XY model (a canonical framework for coupled phase oscillators and
collective synchronization [51, 52]), we qualitatively describe how demographic noise and
movement interact to synchronize population cycles across spatial patches. By framing
stochastic Rosenzweig-MacArthur predator-prey dynamics within the XY universality class,
we uncover fundamental mechanisms of spatial phase synchronization. These insights not
only advance our theoretical understanding of large-scale ecological synchrony but also can
enhance our ability to predict and manage synchronized population collapses, ultimately
supporting ecosystem resilience.
The paper is organized as follows: Section II presents the methodology and analysis in
three parts. First, we introduce the deterministic Rosenzweig-MacArthur (RMA) predator
prey model, identify parameter regimes exhibiting limit cycles, and describe how two patches
are coupled via short-distance dispersal. Next, we consider the discrete version of the model
to derive transition rates and apply them in stochastic simulations using the Gillespie al
gorithm. Finally, we analytically show that the coupled stochastic RMA model is mathe
matically equivalent to the XY model. We also confirm that the correlation lengths of the
RMA model on one- and two-dimensional lattices match those known for the XY model.
Section III offers discussion and concluding remarks.
II. METHODOLOGY AND ANALYSIS
A. Deterministic RMA Model with Population-Gradient Migration
The Rosenzweig-MacArthur Predator-Prey (RMA) model [53] offers a standard frame
work for studying predator-prey dynamics. As a generalized extension of the Lotka-Volterra
model [54] using a Holling type II response [55], it captures population oscillations observed
in both natural and laboratory settings. The model describes the time evolution of prey (R)
4

and predator (F) populations using the following equations:
R ̇ = aR − R2
2N − sRF
1 + sτ R ,
F ̇ = −dF + sRF
1 + sτ R . (1)
The population of preys exhibit logistic growth with rate a and carrying capacity 2N a in
the absence of predators (F = 0), where N indicates system size. In contrast, the population
of predators declines with mortality rate d if preys are not present (R = 0). Predation follows
a Holling type II response, which assumes a maximum per-capita predation rate at 1/τ for
large prey numbers, with τ being the handling time. The base attack rate is s.
By choosing the global timescale parameter d = 1 and normalizing the population sizes as
r= R
N for preys and f = F
N for predators, the model reduces to the following dimensionless
form:
r ̇ = ar − r2
2 − σrf
1 + στr,
f ̇ = −f + σrf
1 + στ r , (2)
where σ = sN . This classical model has been extensively studied [49, 53, 56–58]. We focus
in the following parameter regime
0 < τ < 1, σ > σ0 = 1
2a(1 − τ ) . (3)
Within this range, the system has three fixed points:
M1 = (0, 0), M2 = (2a, 0), M3 = 1
σ(1 − τ ), 2aσ(1 − τ ) − 1
2σ2(1 − τ )2 .. (4)
The equilibrium M3 represents stable coexistence of prey and predator populations when
σ0 < σ < σ∗ = 1 + τ
2aτ (1 − τ ), (5)
beyond which M3 becomes unstable and the system exhibits a stable limit cycle. When a
limit cycle emerges, it can be effectively approximated by an elliptical trajectory centered
around the equilibrium point M3, as described in [48]. This elliptical approximation gains
accuracy as the ratio σ/σ∗ approaches unity from above.
The model described above assumes a well mixed population, where all the individuals
interact with every other. The effect of space can be incorporated in different forms. Here,
5

we assume a discrete number of patches, within which the dynamics follow the well-mixed
predator prey dynamics described above. Patches are coupled by migration [59–65].
In the simplest setting, we consider symmetric migration between two coupled predator
prey patches by adding explicit coupling terms to the population dynamics. For each patch
j ∈ {1, 2}, with k denoting the other patch (k ̸= j), the prey and predator populations
evolve according to
r ̇j = arj − r2
j
2 − σrjfj
1 + στ ri
+ μ(rk − rj),
f ̇j = −fj + σrjfj
1 + στ rj
+ μ(fk − fj) . (6)
The migration terms μ(rk − rj) and μ(fk − fj) represent the symmetric exchange of prey
and predator-individuals between patches at rate μ. This formulation captures both the
local predator-prey interactions within each patch and the bidirectional migration between
patches. Such coupling can significantly affect the synchronization and overall dynamics of
populations distributed across spatially separated regions.
B. Stochastic RMA Model with Population-Gradient Migration
Demographic stochasticity, arising from the inherently probabilistic nature of individual
births and deaths, induces random fluctuations in population size that affect both the ampli
tude and frequency of oscillations. This effect is especially pronounced in finite populations,
where chance events can significantly influence the system’s dynamics.
1. Gillespie Simulation
Consider two coupled habitat patches in the Rosenzweig–MacArthur (RMA) model. To
incorporate demographic stochasticity, we simulate the system using discrete, individual
based stochastic simulations driven by the Gillespie algorithm [50]. This method relies on
explicitly defined transition rates describing probabilistic changes between different system
states.
For each patch i ∈ {1, 2}, with the other patch denoted by j ̸= i, the intrapatch interac
6

tion transition rates are given by
T ((Fj, Rj + 1), (Fk, Rk)|(Rj, Fj), (Rk, Fk)) = aRj,
T ((Fj + 1, Rj − 1), (Fk, Rk)|(Rj, Fj), (Rk, Fk)) = sRjFj
1 + sτ Rj
,
T ((Fj, Rj − 1), (Fk, Rk)|(Rj, Fj), (Rk, Fk)) = R2
j
2N ,
T ((Fj − 1, Rj), (Fk, Rk)|(Rj, Fj), (Rk, Fk)) = Fj , (7)
where T (Cf | Ci) denotes the transition rate from an initial configuration Ci to a final
configuration Cf . These rates correspond to processes such as prey reproduction, predation,
prey competition, and predator mortality within the first patch. A analogous expressions
apply for the second patch.
Migrations are transitions that alter population counts across patches. The migration of
predators or preys from patch k to patch j are respectively quantified by
T ((Fj, Rj + 1), (Fk, Rk − 1)|(Rj, Fj), (Rk, Fk)) = μ
N Rk,
T ((Fj + 1, Rj), (Fk − 1, Rk)|(Rj, Fj), (Rk, Fk)) = μ
N Fk . (8)
Using these rates, we perform stochastic simulations of the coupled RMA patches with
the Gillespie algorithm. This algorithm explicitly simulates events — births, deaths, and
migrations — one at a time, advancing time accordingly. The Gillespie algorithm efficiently
captures demographic noise by avoiding unnecessary computations during inactive periods,
thereby providing an accurate individual-based representation of predator-prey dynamics.
While the stability conditions in Eq. 5 address local stability in the deterministic model,
demographic stochasticity significantly impacts long-term predator-prey dynamics. Random
variations in birth, death, and migration create fluctuations around the equilibrium, making
it metastable and ultimately leading to extinction in finite populations [49]. Here, we focus
on large populations and the transient behavior along the limit cycle before extinction occurs.
Figure 1 illustrates the resulting stochastic population oscillations and the limit cycle
behavior of two coupled RMA systems. Although each patch starts with different initial
conditions, their phases tend to align or synchronize over time as a result of the interaction
term. Given that the system exhibits a stable limit cycle at steady state, we can focus on
the phase variables of each patch rather than tracking the prey and predator populations
directly, allowing us to construct a stochastic model of the system using Langevin dynamics.
7

0 10 20 30 40 50
Time
1000
2000
3000
4000
5000
6000
7000
8000
Population
A
Prey (Patch 1)
Prey (Patch 2)
Predator (Patch 1)
Predator (Patch 2)
2000 4000 6000
Prey Population
500
1000
1500
2000
2500
3000
3500
Predator Population
B
Patch 1
Patch 2
FIG. 1. Dynamics of two coupled stochastic patches in the Rosenzweig–MacArthur (RMA) model,
distinguished by red and blue colors. (A) Population trajectories over time: solid lines indicate
prey dynamics, while dashed lines represent predator dynamics. (B) Corresponding limit cycles
in phase space, with bold points marking the initial states of the two patches. Parameters used:
τ = 0.5, a = 1, γ = 0.03, μ = 0.01, and N = 5000.
2. Langevin and Angular Brownian Modeling
For a single uncoupled patch, the limit cycle trajectory is well approximated by an ellipse
when its typical amplitude is small, i.e. close to the Hopf bifurcation [48]. This enables the
analytical characterization of the oscillating trajectory using a phase variable θ(t) (illustrated
in Figure 2). Fluctuations in the phase’s oscillation frequency can be effectively modeled as
angular Brownian motion, described by the following Langevin equation:
θ ̇ = ω +
√
Dξ(t) . (9)
Here, ω refers to the deterministic frequency, which is defined by the RMA model parameters
a, τ , and σ; D indicates the noise strength, which can be estimated analytically or via
stochastic simulations of the RMA model and is influenced by the system size along with
other parameters [48]. Additionally, ξ(t) represents Gaussian white noise with zero mean
and delta-correlated fluctuations.
To incorporate interactions between patches into this stochastic framework, the Langevin
equation can be appropriately extended. In the case of two coupled stochastic RMA oscil
8

2000 3000 4000 5000
Prey Population
1000
1500
2000
2500
3000
3500
Predator Population
ρ
Stochastic
Deterministic
FIG. 2. Limit cycles of the deterministic and stochastic RMA models for a single, uncoupled patch.
The phase space is represented in terms of radius (ρ) and phase (θ), with the deterministic limit
cycle shown in red. Parameters used are τ = 0.5, a = 1, N = 5000, and σ = 3.1.
lators, the phase evolution of each patch is given by:
θ ̇i(t) = ω + μFi(θi, θj) +
√
Dξi(t), (10)
where the indices i, j ∈ {1, 2} with j ̸= i label the two patches. In this equation, μ denotes
the coupling strength, and the key task is to determine the interaction function Fi(θi, θj),
which plays a central role in defining the effective Hamiltonian for the coupled patch system.
To derive a phase-based description of the system, we first expand the population density
Eq. 6 around the equilibrium point located at the center of the limit cycle. We then apply
an elliptical transformation defined by dr = ρ cos(θ) and df = ρε sin(θ), where ρ and ρε
represent the semi-major and semi-minor axes of the elliptical orbit. This transformation
yields the following expression for the interaction term between patches (see Supplementary
Material for derivation):
Fi = −μ sin(θj − θi). (11)
Defining the phase difference as φ = θj − θi, and assuming identical intrinsic frequencies ω
and noise strengths D for both patches — since these are set by the system parameters [48]
— we obtain the following stochastic differential equation governing the phase difference:
φ ̇(t) = −2μ sin φ +
√
2Dξ(t) . (12)
9

Here, we use the fact that if ξ1(t) and ξ2(t) are independent Gaussian white noise processes
with zero mean and noise strength D, then their difference ξ(t) = ξ1(t) − ξ2(t) is also
Gaussian with zero mean and an effective variance of 2D. The degree of synchrony between
the two patches is characterized by the phase correlation metric x = cos φ. Applying this
variable transformation, Eq. 12 can be rewritten as:
x ̇ = 2μ(1 − x2) − Dx + √1 − x2√
2Dξ(t). (13)
To determine the stationary distribution associated with this Langevin equation, we con
vert the stochastic differential equation into its equivalent Fokker-Planck partial differential
equation, which governs the temporal evolution of the probability density function. The
stationary distribution is obtained as the steady-state solution of the Fokker-Planck equa
tion, where the probability density becomes time-independent, reflecting a balance between
deterministic drift and stochastic diffusion components. The resulting stationary probability
density function for the pairwise phase correlation metric is given by the following expression
(a detailed derivation is provided in the Supplementary Material):
Ps(x) = Z
2D√1 − x2 exp 2 μ
D x , (14)
where Z is the normalization constant (which can be expressed as function of μ, see supple
mentary material).
The stationary distribution Ps(x) can be written in exponential form, resembling Boltzmann
like distribution, expressed as
Ps(x) ∝ e−βH(x),
where H(x) denotes an effective Hamiltonian and β represents the inverse temperature
parameter. Accordingly, the effective Hamiltonian for the system is defined by
βH(x) = 2 μ
D x, (15)
with β = 2μ
D . Here, the noise intensity D acts as a temperature-like parameter that governs
the magnitude of stochastic fluctuations. The multiplicative pre-factor 1
√1−x2 results from
the Jacobian of the variable transformation x = cos φ and reflects the geometric structure
of the phase space.
To validate the model and confirm the linear dependence of the Hamiltonian on x, we
first determine the stationary distribution ps(x) via stochastic simulations of two coupled
10

patches using the Gillespie algorithm. By substituting this distribution into Eq. 14, we then
extract the effective Hamiltonian — calculating log ps(x) — and compare its slope to that
predicted by the theoretical model. Figure 3(A) shows the stationary distribution of the
phase correlation metric for different values of the coupling constant μ. It is evident that
the distribution varies with the coupling strength. In the absence of coupling (μ = 0), the
variable x = cos φ exhibits a characteristic U-shaped distribution over the interval [−1, 1],
which corresponds exactly to the situation where the phase difference φ is uniformly dis
tributed between −π and π. This uniform distribution of phase differences in the stationary
state implies that the patches’ phases evolve independently. As the coupling constant in
creases, the distribution progressively becomes sharply concentrated around x = 1 (φ = 0),
reflecting stronger phase synchronization between the patches.
By using the stationary distribution ps(x) obtained from simulations together with Eq. 14,
we extract the effective Hamiltonian H(x) from the data. Figure 3(B) displays a plot of
ln Z − βH(x) based on these simulation results. The figure reveals a clear linear trend, with
a slope that coincides with the theoretical prediction of μ/D. This agreement confirms that
the effective Hamiltonian proposed by our model, βH(x) = (μ/D)x, is consistent with the
simulation data.
C. Mapping Stochastic Coupled RMA Patches to the XY Model
Our results show that the Hamiltonian for the two coupled patches (Eq. 15) depends
linearly on x, the cosine of their phase difference. This resembles the XY spin model [51, 52]
— a classic model in statistical physics that describe planar spins whose Hamiltonian is
given by
H = −J
X
⟨i,j⟩
cos(θi − θj), (16)
where θ denotes the spin angle relative to the x-axis, and the sum runs over neighboring
pairs. This form captures an interaction energy that depends on the allignment of the spins.
This result suggests that spatial phase synchronization observed in a structured network
of patches may exhibit phenomena similar to those found in the XY model, including phase
ordering and phase transitions. The behavior of the XY model, including its phase transi
tions and the decay of spin correlations with distance, is strongly determined by the lattice’s
11

-1 0 1
0
2
4
μ=0
-1 0 1
0
5
10
μ = 0.001
0.6 0.8 1.0
0
50
100
μ = 0.01
0.950 0.975 1.000
0
250
500
750
1000 μ = 0.1
x
P
s
(x)
A
-1.0 -0.5 0.0 0.5 1.0
x
-16
-14
-12
-10
-8
-6
-4
(x) + ln( )
B
=0 0
= 0 001
= 0 01
=0 1
FIG. 3. Statistical characterization of phase synchrony in stationary population oscillations of
two coupled patches. (A) Histogram of the synchrony metric, defined as the cosine of phase
differences in the stationary regime (denoted by x), shown for different migration constants. (B)
The Hamiltonian-equivalent term as a function of x, obtained by fitting the histogram data to the
Boltzmann distribution. Parameter values are τ = 0.5, a = 1, γ = 0.03, and N = 50000.
dimensionality and topology. The spin-spin correlation function in the XY model is defined
as
C(l) = ⟨cos(θi − θj)⟩, (17)
where θi and θj are the spin angles at lattice sites i and j, separated by distance l = |i − j|.
In one-dimensional rings (periodic chains), strong thermal fluctuations prevent spontaneous
symmetry breaking, so the classical XY model shows no long-range order or phase transition
at finite temperatures. Consequently, Spin correlations decay rapidly with distance, as
described by:
C(l) = ⟨cos(θi − θi+l)⟩ ∼ e−l/ξ, (18)
where (ξ ∝ J/T ) denotes the correlation length. Consequently, no long-range magnetic
order emerges in the system.
In contrast, on two-dimensional periodic lattices (such as square lattices), the XY model
undergoes a Berezinskii-Kosterlitz-Thouless (BKT) transition. Below the critical tempera
ture vortex-antivortex pairs remain bound, resulting in quasi-long-range order characterized
12

by spin correlations that decay algebraically as a power law:
C(l) ∼ l− T
2πJ . (19)
Above the critical temperature, these pairs unbind and proliferate, disrupting order and
causing spin correlations to decay exponentially:
C(l) ∼ e−l/ξ. (20)
This exponential decay indicates a disordered phase.
We examine the mapping of the stochastic coupled RMA model onto the classical XY
model by constructing two network configurations: a one-dimensional ring and a two
dimensional lattice, both with periodic boundary conditions. Stochastic simulations are
carried out using the Gillespie algorithm, with interaction rates between patches calculated
according to Eqs. 7 and 8. The spatial correlation lengths derived from these simulations are
systematically compared with the well-established correlation length behavior characteristic
of the XY model.
Specifically, we analyze a one-dimensional ring consisting of 60 stochastic RMA patches,
where each species migrates left or right with equal probability, to assess the accuracy of the
XY model predictions. Figure 4 shows the phase correlation, C(l) = ⟨cos φ⟩, as a function of
distance l for various coupling constants μ. These results are averaged over stationary time
intervals from 100 independent simulation runs, considering all patch pairs separated by the
same distance. The key distinction between the two panels is the system size, which inversely
modulates noise intensity. We observe that the decay of correlation closely follows the XY
model’s predicted scaling determined by the ratio μ/D (see Eq. 18). For both panels, the
data exhibit excellent agreement with the predicted behavior over long distances when the
μ/D ratio is large, corresponding to extended correlation lengths. This demonstrates that
the correlation length is primarily controlled by the interplay between deterministic phase
dynamics (μ) and noise (D). To extend our analysis over a broader range of parameters, we
calculate and plot the slope of the natural logarithm of the correlation function with distance
for different system sizes N and coupling strengths μ, as shown in Fig. 5. In this figure,
the dots indicate slope values obtained from simulations, while the solid line represents
the theoretical prediction D/μ. The results show that the theoretical model provides a
robust approximation over a wide range of parameters, particularly for large system sizes
13

0.0 2.5 5.0 7.5 10.0 12.5 15.0
distance(l)
-6
-5
-4
-3
-2
-1
0
1
ln
〈
x
〉
A
0.0 2.5 5.0 7.5 10.0 12.5 15.0
distance(l)
-6
-5
-4
-3
-2
-1
0
1
ln
〈
x
〉
B
μ = 0.001
μ = 0.01
μ = 0.1
FIG. 4. Dependence of pairwise phase synchrony on inter-patch distance and noise in a ring network
composed of 60 patches. (A) Natural logarithm of the mean synchrony metric as a function of
distance for (A) low noise (N = 50000, D = 0.00056) and (B) high noise (N = 5000, D = 0.0056).
Averages are calculated over stationary intervals across 100 independent simulations and all pairs of
patches with the same distance. Solid lines indicate the predictions from the XY model correlation
function, ln C(l) = − D
μ l. Parameters: τ = 0.5, a = 1, γ = 0.03.
(corresponding to low noise levels) and stronger coupling. Under these conditions—when the
correlation length is long—the simulation data agree closely with the analytical prediction.
In the two-dimensional setup, predator-prey patches are arranged on a square lattice
with periodic boundary conditions, forming a toroidal topology. Within this stochastic
RMA model framework, each species migrates randomly in four directions at rates defined
by Eqs. 7 and 8. We calculate the average correlation length between pairs of patches as
a function of their separation distance, where distances are measured using the Euclidean
metric on the torus lattice. This averaging is performed over stationary time intervals and
aggregated from 100 independent simulation runs, considering all patch pairs at equivalent
distances.
Fig. 6A shows the correlation as function of distance for various coupling constants μ.
In these plots, points correspond to simulation results, while dashed lines represent linear
fits applied to the decaying portion of the data before saturation. Figure 6 reveals two
distinct regimes. At high values of the ratio μ/D, the correlation function exhibits a power
law decay reminiscent of the two-dimensional XY model below its critical temperature.
14

0.5 1.0 1.5
N
×104
-0.25
-0.20
-0.15
-0.10
-0.05
dln
〈
x
〉
/dl
A
0.02 0.04 0.06 0.08 0.10
μ
-1.0
-0.8
-0.6
-0.4
-0.2
0.0
dln
〈
x
〉
/dl
B
Simulated slope
Predidicted slope (XY model)
FIG. 5. Comparison of decay slopes in spatial correlations between RMA simulations and XY
model predictions for 60 patches arranged in a ring, examined across (A) varying system sizes
and (B) coupling strengths. Averages were computed over stationary time intervals from 100
independent simulation runs, considering all pairs of patches separated by the same distance.
Solid lines represent the analytical prediction given by (−Dl/μ). The parameters used in these
figures are N = 5000, D = 0.0056, τ = 0.5, a = 1, and γ = 0.03.
Importantly, the exponent of the power-law behavior decreases as μ/D increases, indicating
a non-universal behavior, with slower decay and thus longer correlation. This behavior aligns
with XY model predictions (see Eq. 19). Improvements in fit quality are also observed when
lowering D or increasing system size, consistent with the interpretation of D as an effective
temperature parameter. Conversely, at low μ values,the correlation function does not follow
a power-law decay. Instead, it decays exponentially, resembling the behavior of the two
dimensional XY model above its critical temperature.
Moreover, we compared the slopes of the natural logarithm of the pairwise correla
tion function from stochastic simulations with the analytical prediction of the XY model,
(2D/πμ), over a wide range of (μ/D) values. Figure 6B shows that simulation results at
higher (μ/D) closely match the XY model’s predictions for lower effective temperatures.
However, at low (μ/D), deviations from the power-law scaling occur due to the Berezin
skii–Kosterlitz–Thouless (BKT) phase transition observed in the XY model, corresponding
to the system crossing above the critical temperature. For high-migration rates and high
15

0.0 0.5 1.0 1.5 2.0 2.5
ln(l)
−6
−5
−4
−3
−2
−1
0
ln
〈
x
〉
A
μ = 0.001
μ = 0.01
μ = 0.1
0.02 0.04 0.06 0.08 0.10
μ
−1.6
−1.4
−1.2
−1.0
−0.8
−0.6
−0.4
−0.2
0.0
dln
〈
x
〉
/dln(l)
B
Simulated slope
Predicted slope
(low temperature)
1234
4D/μ
0.0
0.2
0.4
0.6
0.8
1.0
1.2
1.4
C
1e6
C
FIG. 6. Comparison of decay slopes in spatial correlations from stochastic RMA simulations and
XY model predictions on a 20 × 20 periodic lattice. (A) Pairwise synchrony plotted against patch
distance, with the dashed line indicating the fit to the decaying region of the data. (B) Fitted slope
values across different coupling strengths. The solid lines indicate the analytical slope prediction
of the XY model at low temperature, expressed as (2D/πμ). (C) Specific heat, calculated from the
energy variance, plotted as a function of 4D/μ. Data are averaged over stationary intervals from
100 independent simulations, including all patch pairs at equal distances. Parameters: N = 5000,
D = 0.0056, τ = 0.5, a = 1, and γ = 0.03.
population sizes (low-noise), the system display long-range correlations resembling spatial
synchrony, as observed in the low-temperature XY model. Decreasing the migration rate
or increasing the strength of demographic noise makes the system cross a phase transition
point and become spatially asynchronous, displaying a finite correlation length, as observed
in the high-temperature phase of the XY model.
The specific heat, obtained from the effective energy variance, is plotted as a function of
4D/μ in Fig. 6C. As expected for the XY model, a distinct peak emerges, clearly indicating
the phase transition. The slight discrepancy observed in the critical temperature is likely due
to finite-size effects, which cause the peak to shift away from the true critical temperature
value in the thermodynamic limit. According to finite-size scaling theory, as the system size
increases, the peak becomes sharper, and the measured critical temperature converges to
the bulk value.
16

III. DISCUSSION
Our main goal was to explore how short-range dispersal affects phase synchronization
among predator-prey oscillators described by the Rosenzweig-MacArthur (RMA) system,
drawing insights from the XY spin model—an established paradigm in statistical physics for
understanding collective behavior.
A key methodological innovation was to approximate the population limit cycle as an
elliptical trajectory centered on the co-existence fixed point [48]. This simplification made
it possible to reduce the system’s two-dimensional oscillations to a single phase variable,
emphasizing the phase differences that drive synchronization patterns across spatial patches.
By assuming a constant oscillation radius (an approach supported by prior studies), we
decoupled amplitude fluctuations from phase dynamics, which further simplified the analysis.
We incorporated demographic stochasticity (parameterized by system size), which added
noise into the phase equations. The interplay between stochastic fluctuations and deter
ministic coupling revealed patterns analogous to the BKT transition in the two-dimensional
XY model. Larger populations, with reduced demographic noise, tended to exhibit phase
synchronization dominated by dispersal and coupling. In contrast, smaller and noisier sys
tems tended to lose synchronization. This balance highlights the critical thresholds where
large-scale phase coherence emerges or breaks, affecting the resilience of the ecosystem.
It is useful to compare our XY model-based approach with the recent successful appli
cation of the Ising model to ecological synchrony [43, 44]. These studies powerfully demon
strated that the transition to synchrony in populations with discrete, two-cycle dynamics
falls within the Ising universality class. This was a significant finding, linking emergent eco
logical order to a fundamental principle of critical phenomena. However, the Ising model,
which describes discrete spin states (e.g., “up” or “down”), is less naturally suited to the
continuous-phase oscillations characteristic of many predator-prey systems, such as the limit
cycles produced by the Rosenzweig-MacArthur model. The XY model, by describing rotors
with a continuous phase angle from 0 to 2π, provides a more analogous framework for
these systems. Our findings, therefore, complement the Ising-based work, suggesting that
the choice of statistical mechanics model should be dictated by the underlying nature of
the ecological oscillator itself: discrete two-state cycles may map to the Ising model, while
continuous limit cycles map more naturally to the XY model.
17

High synchronization reduces population variability across landscapes(their fluctuations
across different landscapes start to look very similar). As a result, the overall resilience of the
ecosystem to environmental perturbations tends to decline. Understanding the mechanisms
driving such synchronization is therefore essential for predicting ecological responses and
designing effective conservation strategies.
In this context, framing the stochastic RMA model within the same universality class as
the XY model is a significant advance. It makes it possible to use well-established theoretical
tools from statistical physics (such as phase transition theory and critical exponents) to
study ecological systems. Beyond empirical or simulation-based work, this link provides
a more general framework for exploring how local stochasticity and dispersal shape large
scale patterns. Ultimately, integrating ecological dynamics with the universality principles
of physics addresses a longstanding gap and provides us with a deeper and more predictive
understanding of population synchrony and ecosystem stability in complex environments.
[1] M. E. Gilpin, Do hares eat lynx?, The American Naturalist 107, 727 (1973).
[2] C. Elton and M. Nicholson, The ten-year cycle in numbers of the lynx in canada, J. Anim.
Ecol. 11, 215 (1942).
[3] L. Butler, The nature of cycles in populations of canadian mammals, Canadian Journal of
Zoology 31, 242 (1953).
[4] E. Korpim ̈aki, K. Norrdahl, O. Huitu, and T. Klemola, Predator–induced synchrony in pop
ulation oscillations of coexisting small mammal species, Proceedings of the Royal Society B:
Biological Sciences 272, 193 (2005).
[5] K. Higgins, A. Hastings, J. N. Sarvela, and L. W. Botsford, Stochastic dynamics and deter
ministic skeletons: population behavior of dungeness crab, Science 276, 1431 (1997).
[6] N. Kamata and A. M. Liebhold, Are population cycles and spatial synchrony a universal
characteristic of forest insect populations?, Population Ecology 42, 205 (2000).
[7] D. A. Vasseur and J. W. Fox, Phase-locking and environmental fluctuations generate synchrony
in a predator–prey community, Nature 460, 1007 (2009).
[8] J. W. Fox, D. A. Vasseur, S. Hausch, and J. Roberts, Phase locking, the moran effect and
distance decay of synchrony: experimental tests in a model system, Ecology Letters 14, 163
18

(2011).
[9] L. B. Keith, Wildlife’s 10-year cycle (University of Wisconsin Press, Madison, 1963).
[10] I. Hanski, P. Turchin, E. Korpimaki, and H. Henttonen, Population oscillations of boreal
rodents: regulation by mustelid predators leads to chaos, Nature 364, 232 (1993).
[11] A. R. E. Sinclair, J. M. Gosline, G. Holdsworth, C. J. Krebs, J. N. M. Smith, R. Boonstra,
and M. Dale, Can the solar cycle and climate synchronize the snowshoe hare cycle in canada?
evidence from tree rings and ice cores, The American Naturalist 141, 173 (1993).
[12] T. Royama, Analytical Population Dynamics (Chapman & Hall, London, 1992).
[13] P. A. P. Moran, The statistical analysis of the canadian lynx cycle, Australian Journal of
Zoology 1, 291 (1953).
[14] M. G. Bulmer, A statistical analysis of the 10-year cycle in canada, J. Anim. Ecol. 43, 701
(1974).
[15] E. Korpimaki and C. J. Krebs, Predation and population cycles of small mammals. a reassess
ment of the predation hypothesis, BioScience 46, 754 (1996).
[16] E. Ranta, V. Kaitala, and P. Lundberg, The spatial dimension in population fluctuations,
Science 278, 1621 (1997).
[17] A. M. Liebhold, W. D. Koenig, and O. N. Bjørnstad, Spatial synchrony in population dynam
ics, Annual Review of Ecology, Evolution, and Systematics 35, 467 (2004).
[18] E. Palmqvist and P. Lundberg, Population extinctions in correlated environments, Oikos 83,
359 (1998).
[19] K. C. Abbott, A dispersal-induced paradox: Synchrony and stability in stochastic metapop
ulations, Ecology Letters 14, 1158 (2011).
[20] S. F. Matter and J. Roland, Local extinction synchronizes population dynamics in spatial
networks, Proceedings of the Royal Society B 277, 729 (2010).
[21] D. E. Schindler, R. Hilborn, B. Chasco, C. P. Boatright, T. P. Quinn, L. A. Rogers, and M. S.
Webster, Population diversity and the portfolio effect in an exploited species, Nature 465, 609
(2010).
[22] P. A. P. Moran, The statistical analysis of the sunspot and lynx cycles, J. Anim. Ecol. 18,
115 (1949).
[23] B. P. Zeigler, Persistence of patchiness of predator-prey systems induced by discrete event
population exchange mechanisms, Journal of Theoretical Biology 67, 687 (1977).
19

[24] A. R. E. Sinclair and J. M. Gosline, Solar activity and mammal cycles in the northern hemi
sphere, The American Naturalist 149, 776 (1997).
[25] D. T. Haydon and H. Steen, The effects of large- and small-scale random events on the
synchrony of metapopulation dynamics: a theoretical analysis, Proc. R. Soc. Lond. B 264,
1375 (1997).
[26] B. Blasius, A. Huppert, and L. Stone, Complex dynamics and phase synchronization in spa
tially extended ecological systems, Nature 399, 354 (1999).
[27] O. N. Bjornstad, R. A. Ims, and X. Lambin, Spatial population dynamics: analyzing patterns
and processes of population synchrony, TREE 14, 427 (1999).
[28] O. N. Bjornstad, N. C. Stenseth, and T. Saitoh, Synchrony and scaling in dynamics of voles
and mice in northern japan, Ecology 80, 622 (1999).
[29] E. Ranta, V. Kaitala, and J. Lindstrom, Dynamics of canadian lynx populations in space and
time, Ecography 20, 454 (1997).
[30] E. Ranta, V. Kaitala, J. Lindstrom, and H. Linden, Moran effect and synchrony in population
dynamics, Oikos 78, 136 (1997).
[31] E. Ranta, J. Lindstrom, V. Kaitala, H. Kokko, H. Linden, and E. Helle, Solar activity and
hare dynamics: a cross-continental comparison, Amer. Nat. 149, 765 (1997).
[32] W. D. Koenig, Global patterns of environmental synchrony and the moran effect, Ecography
25, 283 (2002).
[33] R. Lande, S. Eigen, and B.-E. Sæther, Spatial scale of population synchrony: environmental
correlation versus dispersal and density regulation, Am. Nat. 154, 271 (1999).
[34] E. Ranta, V. Kaitala, J. Lindstr ̈om, and H. Linden, Synchrony in population dynamics, Proc.
R. Soc. Lond. B 262, 113 (1995).
[35] E. Ranta, V. Kaitala, and J. Lindstro ̈m, Spatially autocorrelated disturbances and patterns
in population synchrony, Proc. R. Soc. Lond. B 266, 1851 (1999).
[36] O. L. Sutcliffe, C. D. Thomas, and D. Moss, Spatial synchrony and asynchrony in butterfly
population dynamics, J. Anim. Ecol. 65, 85 (1996).
[37] E. Paradis, S. R. Baillie, W. J. Sutherland, and R. D. Gregory, Dispersal and spatial scale
affect synchrony in spatial population dynamics, Ecol. Lett. 2, 114 (1999).
[38] V. A. A. Jansen, Phase locking: another cause of synchronicity in predator-prey systems,
Trends Ecol. Evol. 14, 278 (1999).
20

[39] V. A. A. Jansen, The dynamics of two diffusively coupled predator-prey systems, Theor. Popul.
Biol. 59, 119 (2001).
[40] C. J. Krebs, K. Kielland, J. Bryant, M. O’Donoghue, F. Doyle, C. McIntyre, D. DiFolco,
N. Berg, S. Carriere, R. Boonstra, et al., Synchrony in the snowshoe hare (lepus americanus)
cycle in northwestern north america, 1970–2012, Canadian Journal of Zoology 91, 562 (2013).
[41] H. Comins, M. Hassell, and R. May, The spatial dynamics of host–parasitoid systems, Journal
of Animal Ecology , 735 (1992).
[42] E. E. Goldwyn and A. Hastings, When can dispersal synchronize populations?, Theoretical
population biology 73, 395 (2008).
[43] A. E. Noble, J. Machta, and A. Hastings, Emergent long-range synchronization of oscillat
ing ecological populations without external forcing described by ising universality, Nature
communications 6, 6664 (2015).
[44] V. R. Nareddy, J. Machta, K. C. Abbott, S. Esmaeili, and A. Hastings, Dynamical ising model
of spatially coupled ecological oscillators, Journal of the Royal Society Interface 17, 20200571
(2020).
[45] D. T. Haydon and P. E. Greenwood, Spatial coupling in cyclic population dynamics: models
and data, Theoretical Population Biology 58, 239 (2000).
[46] D. Haydon, N. Stenseth, M. Boyce, and P. Greenwood, Phase coupling and synchrony in the
spatiotemporal dynamics of muskrat and mink populations across canada, Proceedings of the
National Academy of Sciences 98, 13149 (2001).
[47] A. J. Black and A. J. McKane, Stochastic formulation of ecological models and their applica
tions, Trends in ecology & evolution 27, 337 (2012).
[48] S. Golmohammadi, M. Zarei, and J. Grilli, The effect of demographic stochasticity on
predatory-prey oscillations, arXiv preprint arXiv:2310.20575 (2023).
[49] N. R. Smith and B. Meerson, Extinction of oscillating populations, Physical Review E 93,
032109 (2016).
[50] D. T. Gillespie, Exact stochastic simulation of coupled chemical reactions, The journal of
physical chemistry 81, 2340 (1977).
[51] M. Plischke and B. Bergersen, Equilibrium statistical physics (World Scientific Publishing
Company, 1994).
[52] M. Kardar, Statistical physics of fields (Cambridge University Press, 2007).
21

[53] M. L. Rosenzweig and R. H. MacArthur, Graphical representation and stability conditions of
predator-prey interactions, The American Naturalist 97, 209 (1963).
[54] A. J. Lotka, Analytical note on certain rhythmic relations in organic systems, Proceedings of
the National Academy of Sciences 6, 410 (1920).
[55] C. S. Holling, The components of predation as revealed by a study of small-mammal predation
of the european pine sawfly1, The canadian entomologist 91, 293 (1959).
[56] K.-S. Cheng, Uniqueness of a limit cycle for a predator-prey system, SIAM Journal on Math
ematical Analysis 12, 541 (1981), https://doi.org/10.1137/0512047.
[57] H. L. Smith, Rosenzweig-macarthur model notes, unpublished manuscript. Available at https:
//math.la.asu.edu/~halsmith/Rosenzweig.pdf.
[58] K. S. Cheng, Asymptotic expansion of the principal eigenvalue for second order elliptic oper
ators with a small parameter, SIAM Journal on Numerical Analysis 12, 541 (1981).
[59] W. W. Murdoch, C. J. Briggs, R. M. Nisbet, W. S. C. Gurney, and A. Stewart-Oaten, Aggre
gation and stability in metapopulation models, The American Naturalist 140, 219 (1992).
[60] A. El Abdllaoui, P. Auger, B. W. Kooi, R. Bravo de la Parra, and R. Mchich, Effects of density
dependent migrations on stability of a two-patch predator–prey model, Ecological Modelling
148, 153 (2002).
[61] K. Dao Duc, P. Auger, and T. Nguyen-Huu, Predator density-dependent prey dispersal in a
patchy environment with a refuge for the prey, Ecological Complexity 6, 256 (2009).
[62] E. E. Holmes, M. A. Lewis, J. E. Banks, and R. R. Veit, Partial differential equations in
ecology: spatial interactions and population dynamics, Ecology 75, 17 (1994).
[63] J. Molofsky, Population dynamics and pattern formation in theoretical populations, Ecology
75, 30 (1994).
[64] R. Mchich, A. Bergam, and N. Raı ̈ssi, Effects of density dependent migrations on the dynamics
of a predator prey model, Acta Biotheoretica 53, 331 (2005).
[65] P. Kareiva, A. Mullen, and R. Southwood, Population dynamics in spatially complex environ
ments: Theory and data [and discussion], Philosophical Transactions of the Royal Society of
London B: Biological Sciences 330, 175 (1990).
22

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:11.084Z
- **Text Length:** 45467 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 22 of 22
