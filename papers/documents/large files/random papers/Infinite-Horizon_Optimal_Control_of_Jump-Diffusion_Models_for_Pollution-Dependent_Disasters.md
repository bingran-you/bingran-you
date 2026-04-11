# PDF Document: Sakhanda and Ricalde-Guerrero - 2025 - Infinite-Horizon Optimal Control of Jump-Diffusion Models for Pollution-Dependent Disasters.pdf

**File Path:** Sakhanda and Ricalde-Guerrero - 2025 - Infinite-Horizon Optimal Control of Jump-Diffusion Models for Pollution-Dependent Disasters.pdf

**Processed Date:** 2026-02-10T18:14:46.677Z

**File Size:** 807.22 KB

**Total Pages:** 70

**Extracted Pages:** 70

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3549

**Title:** Infinite-Horizon Optimal Control of Jump-Diffusion Models for Pollution-Dependent Disasters

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Infinite-Horizon Optimal Control
of Jump-Diffusion Models
for Pollution-Dependent Disasters
Daria Sakhanda∗ Joshué Helí Ricalde-Guerrero†
November 2025
Contents
1 Introduction 4
2 Modelling Framework 6 2.1 Baseline: Homogeneous Poisson Process (HPP) . . . . . . . . . . . . . . 9 2.2 Pollution–Driven Disaster Intensity via Nonhomogeneous Poisson Process (NHPP) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10 2.3 Jump–Diffusion Pollution with Intensity Feedback . . . . . . . . . . . . 12 2.4 Generalized Framework with Poisson Random Measures (PRMs) . . . 14 2.4.1 An intermediate model: PRMs with no diffusive term . . . . . 17
3 The Hamilton–Jacobi–Bellman PDE via the Dynamic Programming Principle 18 3.1 Preliminaries . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 3.1.1 Assumptions on the Stochastic Basis . . . . . . . . . . . . . . . . 18 3.1.2 Functional Objective . . . . . . . . . . . . . . . . . . . . . . . . . 19 3.1.3 Dynamic Programming Principle . . . . . . . . . . . . . . . . . . 20 3.2 Models of constant Jump–size . . . . . . . . . . . . . . . . . . . . . . . . 21 3.2.1 Standard Poisson-
 Process . . . . . . . . . . . . . . . . . . . . . . 21 3.2.2 Nonhomogeneous Poisson . . . . . . . . . . . . . . . . . . . . . . 27 3.2.3 Brownian–driven pollution with nonhomogeneous Poisson jumps 29 3.3 Models of random Jumps–size (PRMs) . . . . . . . . . . . . . . . . . . . 31 3.3.1 Equation for the intermediate model . . . . . . . . . . . . . . . . 31
∗ETH Zürich, Department of Mathematics, Switzerland. Email: daria.sakhanda@math.ethz.ch †ETH Zürich, Department of Mathematics, Switzerland. Email: joshue.ricalde@math.ethz.ch
1
arXiv:2511.13568v2 [math.OC] 18 Nov 2025

3.3.2 Extension to randomized pollution . . . . . . . . . . . . . . . . . 35
4 Analysis of solutions to Hamilton–Jacobi–Bellman Equations 38 4.1 Preliminaries . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38 4.1.1 Hamiltonian and Optimality Conditions . . . . . . . . . . . . . . 38 4.1.2 Candidate form for the value function . . . . . . . . . . . . . . . 39 4.2 Disasters at a constant arrival rate: Poisson process . . . . . . . . . . . 41 4.3 Disasters at a dynamic arrival rate: Nonhomogeneous Poisson process 44 4.4 Disasters at a stochastic arrival r-
ate: Jump–diffusion models . . . . . 46 4.4.1 Brownian–driven pollution stock . . . . . . . . . . . . . . . . . . 46 4.4.2 Randomized magnitude of the disasters . . . . . . . . . . . . . . 47
5 Verification theorems and viscosity solutions 49 5.1 Non–Diffusive models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49 5.1.1 Standard Poisson: Verification theorem for the candidate value function . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49 5.1.2 Nonhomogeneous Poisson: Verification theorem for the model with state–dependent jump intensity . . . . . . . . . . . . . . . . 54 5.2 Diffusive Models . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .-
 . 56 5.2.1 Nonhomogeneous Poisson process . . . . . . . . . . . . . . . . . 56 5.2.2 General jump–diffusion model . . . . . . . . . . . . . . . . . . . . 61
6 Conclusion 66
2

Abstract
The paper develops a unified framework for stochastic growth models with environmental risk, in which rare but catastrophic shocks interact with capital accumulation and pollution. The analysis begins with a Poisson process formulation, leading to a Hamilton–Jacobi–Bellman (HJB) equation with jump terms that admits closed–form candidate solutions and yields a composite state variable capturing exposure to rare shocks. The framework is then extended by endogenizing disaster intensity via a nonhomog-
eneous Poisson process, showing how environmental degradation amplifies macroeconomic risk and strengthens incentives for abatement. A further extension introduces pollution diffusion alongside state–dependent jump intensity, yielding a tractable jump–diffusion HJB that decomposes naturally into capital and pollution components under power–type value functions. Finally, a formulation in terms of Poisson random measures unifies the dynamics, makes arrivals and compensators explicit, and accommodate-
s state–dependent magnitudes. Together, these results establish rigorous verification theorems and viscosity–solution characterizations for the associated integro–differential HJB equations, highlight how vulnerability emerges endogenously from the joint evolution of capital and pollution, and show that the prospect of rare, state–dependent disasters fundamentally reshapes optimal intertemporal trade–offs.
Keywords: stochastic control, Hamilton–Jacobi–Bellman equation, viscosity solutions, forward–backward stochastic differential equations with jumps, Poisson random measures, jump–diffusion processes, integro–differential equations, growthenvironment models, pollution–dependent intensity, rare disasters.
3

1 Introduction
The analysis of economic growth under environmental risk raises fundamental mathematical questions about stochastic control in systems with both continuous dynamics and discontinuous jumps. Classical growth–environment models typically treat pollution and damages as deterministic or smoothly evolving, with dynamics governed by ordinary or stochastic differential equations without discontinuities. However, a growing empirical record shows that environmental risks also manifest as rare, catastrophic-
 events – such as abrupt climate disasters, ecosystem collapses, or large–scale technological failures. These events arrive unpredictably, are naturally modelled as jumps, and can dramatically alter the trajectory of the economy. The mathematical challenge is to develop a rigorous and tractable framework that incorporates both continuous fluctuations (e.g. Brownian noise in pollution dynamics) and state–dependent jump risks (e.g. disaster intensities increasing with pollution). Doing so requires a-
dvancing the theory of dynamic programming with nonlocal terms, deriving and analyzing the associated Hamilton–Jacobi–Bellman (HJB) equations, and verifying the optimality of candidate value functions under such dynamics. This paper extends the model framework of [4] and contributes to the literature on growth under environmental risk by organizing and progressively generalizing the stochastic framework for growth–environment problems:
1. Starting from the benchmark case of a standard Poisson process, formulated in [4], we consider the social planner’s problem in an economy subject to rare disasters that destroy a fraction of the capital stock at a constant arrival intensity. Within this setting we derive the dynamic programming equation and the associated Hamilton–Jacobi–Bellman (HJB) equation.
2. We then extend the analysis to a nonhomogeneous Poisson process, where the arrival intensity of disasters depends on the pollution stock. This extension endogenizes the feedback from environmental degradation to catastrophe risk and leads to an HJB equation with a pollution–dependent jump term. We also provide conditions under which the value function solves this HJB equation.
3. Next, we incorporate Brownian motion in the pollution dynamics, yielding a jump–diffusion system in which pollution is affected by both continuous fluctuations and discrete shocks. In this setting the planner’s problem gives rise to an integro–differential HJB equation that combines a second–order local diffusion operator with nonlocal jump terms. We establish a verification theorem for sufficiently regular value functions and show that, under mild assumptions, the value function is a viscosity-
 solution of the HJB equation.
4. Finally, we generalize the entire framework using Poisson random measures with marks which allows for random disaster magnitudes and a broad class
4

of jump specifications for both capital and pollution. In this most general formulation we give a characterization of the value function as the solution of a forward–backward stochastic differential equation (FBSDE) with jumps and establish the correspondence between solutions of the FBSDE system and (viscosity) solutions of the HJB equation. This unifies the previous models in a single stochastic control framework and facilitates extensions with random disaster magnitudes.
Thus, the contribution of the paper is threefold. First, on the modelling side, we organize a broad class of pollution–driven disaster specifications – ranging from constant–intensity Poisson shocks to pollution-dependent intensities, jump–diffusion dynamics, and formulations based on Poisson random measures with marks – into a single coherent stochastic control framework. This framework clarifies how existing models relate to each other and how richer forms of environmental risk can be captured w-
ithout compromising analytical structure. Second, on the analytical side, we derive the associated Hamilton–Jacobi–Bellman equations and provide verification and viscosity–solution results that rigorously characterize the value function of the planner’s problem under general conditions on preferences, technology, and the jump mechanism. Third, we establish a representation of the value function in terms of the forward–backward stochastic differential equations with jumps, which links the control p-
roblem to FBSDE methods. While motivated by economic questions of growth, environment, and climate risk, the primary contribution of this paper lies in the mathematical development of stochastic control techniques with jump risks. The results demonstrate how dynamic programming, HJB equations, and verification methods can be extended to incorporate rare, state–dependent disasters and diffusion–driven uncertainty. The considered models achieve both tractability and generality, providing a rigorous -
analytical foundation and practical tools for characterizing and solving the stochastic control problems that govern the long–run interaction between the economy and the environment in the presence of rare but potentially catastrophic events. Thus, the paper enriches both the applied theory of sustainable growth and the broader mathematical toolbox for stochastic control with jumps. Within this setting, sustainability in the presence of deep uncertainty requires not only gradual adjustments in con-
sumption, investment, and abatement, but also resilience against low–probability, high–impact shocks.
5

2 Modelling Framework
We consider a stylized representation of the global economy, which produces a single composite good under constant returns to scale. Production relies on the aggregate capital stock at time t, denoted by Kt which includes physical capital, human capital, and intangible assets. The production process (Kt)t≥0 generates pollution: at each instant t, greenhouse gas (GHG) emissions Et are released into the atmosphere. These emissions accumulate in the atmospheric pollution stock, Pt, which increases wi-
th the flow Et and decreases at a natural absorption rate α ∈ [0, 1), assumed to be small or negligible. While Pt is referred to as the pollution stock, it can more generally be interpreted as the inverse of environmental quality. Similarly, the emissions variable Et, can be viewed more broadly as any environmentally damaging by–product of economic activity. The model incorporates the possibility of natural disasters (we refer to it as an “event”) which occur randomly over time. When such an event-
 occurs, it instantaneously destroys a fraction of the capital stock. The surviving share of capital is given by
ω ∶ S → (0, 1), S ∶= R>0 × R>0.
which is determined endogenously and depends on the current levels of pollution and capital:
ω(K, P ) = e−δP ξKη , (2.1)
where ξ ≥ 0 and η ≥ 0 are parameters that capture the sensitivity of damage intensity to pollution and capital, respectively. The output, Y ∶ R>0 → R≥0 defined as Y ∶= Y (K), can be allocated to consumption C, investment in capital, or environmental protection. A fraction θ ∈ [0, 1] of output is allocated to abatement, yielding abatement investment I ∶ [0, 1] × R>0 → R≥0, defined as
I(θ, K) = θY (K). (2.2)
The remaining share, (1−θ)Y , is split between consumption and capital accumulation.
Abatement activities reduce emissions through a function Z ∶ R≥0 → R≥0, with Z′ > 0 and defined as
Z(I) = σI, (2.3)
where σ > 0 stands for the efficiency of abatement. In modelling emissions control, we assume abatement activities exhibit constant returns to scale. Thus, the total abatement is proportional to the resources allocated to it. Emissions E ∶ R≥0 × R>0 → R≥0 are thus given by the net balance between gross emissions – proportional to output with emission intensity φ > 0 – and abatement,
E(I, K) = φY (K) − Z(I). (2.4)
6

Preferences are represented by a utility function U ∶ R>0 × R>0 → R given by
U (Ct, Pt) = C1−ε
t
1 − ε − χ P 1+β
t
1 + β , ε > 0, ε ≠ 1, β > 0, χ > 0, (2.5)
where ε measures relative risk aversion, β governs the curvature of disutility from pollution, and χ reflects the weight placed on pollution in the utility function. The utility function is twice continuously differentiable U ∈ C2(S). To ensure the well–posedness of the optimization problem, we have to check the following properties of the utility function, defined in (2.5):
1. Monotonicity and concavity.
We check the properties of U with respect to C, treating P as fixed:
∂U
∂C (C, P ) = C−ε > 0 for all C > 0,
∂2U
∂C2 (C, P ) = −εC−ε−1 < 0 for all C > 0.
(2.6)
We also consider the dependence on P , treating C as fixed:
∂U
∂P (C, P ) = −χP β < 0 for P > 0,
∂2U
∂P 2 (C, P ) = −χβP β−1 < 0.
(2.7)
Therefore, the utility function is strictly increasing (i.e., monotonic preference for more consumption) and concave in consumption C, and decreasing and concave in the pollution stock P .
2. Inada conditions in C.
We check the boundary behavior of the marginal utility of C for all P > 0:
Cli→m0+
∂U
∂C (C, P ) = Cli→m0+ C−ε = +∞,
Cli→m∞
∂U
∂C (C, P ) = Cli→m∞ C−ε = 0.
(2.8)
The utility function satisfies the Inada conditions with respect to consumption C at both the initial time t = 0 and in the limit as t → ∞ for all P > 0. These conditions imply that the marginal utility of consumption becomes unbounded as consumption approaches zero and vanishes as consumption becomes arbitrarily large. Under standard regularity assumptions, this ensures the existence of interior optimal consumption paths.
7

3. Boundedness from above.
We observe that the map C ↦ C1−ε
1−ε is strictly increasing and strictly concave
on R>0. Its behavior as C → ∞ depends on the parameter ε as follows:
• If ε < 1, then
Cli→m∞
C 1−ε
1 − ε = ∞, (2.9)
and hence U (C, P ) → ∞ as C → ∞ for any fixed P > 0.
• If ε = 1, then the utility function takes the logarithmic form
U (C, P ) = log C − χ P 1+β
1 + β , (2.10)
and Cli→m∞ log C = ∞.
• If ε > 1, then
Cli→m∞
C 1−ε
1 − ε = 0, (2.11)
and the utility function is bounded above by 0 for each fixed P > 0.
Moreover, for each fixed C > 0, the disutility from pollution, −χ P 1+β
1+β , satisfies
Pli→m0+ −χ P 1+β
1 + β = 0 and Pli→m∞ −χ P 1+β
1 + β = −∞. (2.12)
Thus, the utility function U (C, P ) is unbounded below as P → ∞, and it is bounded above on S if and only if ε > 1. If ε ≤ 1, then U (C, P ) → ∞ as c → ∞, and the utility function is unbounded above in the consumption C.
Consequently, by [10], the utility function (2.5) satisfies all standard regularity conditions required in dynamic optimization and Hamilton–Jacobi–Bellman frameworks. Given (K0, P0) ∈ S, the social planner aims to maximize the expected discounted utility over an infinite horizon by choosing optimal paths for consumption Ct and abatement share θt,
v(K0, P0) = sup
(C,θ)
E[
ˆ∞
0
e−ρtU (Ct, Pt) dt] , (2.13)
subject to (model–specific) jump terms and the common drift components
bK(Kt, Pt, Ct, θt) ∶= (1 − θt)Y (Kt) − Ct, (2.14)
bP (Kt, Pt, Ct, θt) ∶= φY (Kt) − Z(θtY (Kt)) − αPt, (2.15)
where ρ > 0 defines the constant rate of time preference.
8

The planner’s problem is then to optimally allocate resources between consumption and abatement in order to balance economic growth, environmental quality, and resilience against environmentally driven disasters. We analyze four increasingly rich variants of the model (2.13), which share the state (K, P ), the controls (C, θ), the drift parts (2.14)–(2.15) and the preferences (2.5):
1. Constant arrival rate (homogeneous Poisson – HPP). Events arrive with constant intensity λ > 0; jumps are unit–sized and destroy a state–dependent fraction of capital via ω(Kt, Pt).
2. Pollution–driven intensity (NHPP). The intensity becomes state–dependent, λ(Pt) (e.g., affine λ0 + λ1Pt), introducing feedback from environmental quality to disaster risk.
3. Jump–diffusion with stochastic pollution. We keep λ(Pt) and add Brownian fluctuations in Pt, yielding an integro–diffusion HJB.
4. Jump–diffusion with stochastic pollution and marked jumps (Poisson random measures). We generalize the previous model by incorporating a marked point process q(dt, dζ) determined by the compensator λ(Pt, ζ)dt ⊗ ν(dζ). This change allows random disaster magnitudes to be considered in the model, therefore linking the problem to that of nonlocal operators and Partial IntegroDifferential Equations (PIDEs).
We work on a probability space (Ω, F , P) equipped with a filtration F = (Ft)t≥0 satisfying the usual conditions of right–continuity and P–completeness. Each subsection below modifies only the jump mechanism and/or the law of Pt; all other components remain the same.
2.1 Baseline: Homogeneous Poisson Process (HPP)
On a filtered probability space (Ω, F , P), we define a Poisson process q = (qt)t≥0 with intensity λ > 0, that is, an F–adapted càdlàg process with values in N0 such that
(i) q0 = 0 almost surely,
(ii) q is continuous in probability,
(iii) the increments are stationary and independent, i.e., for all 0 ≤ s < t, the random variable qt − qs is independent of Fs and qt − qs ∼ Poisson(λ(t − s)).
9

The parameter λ can be characterized as
λ ∶= lhi→m0
1
h P[qt − qt−h = 1]. (2.16)
Over a small interval [t − h, t], the probability of two or more jumps satisfies P[qt − qt−h ≥ 2] = o(h2) as h → 0, therefore we consider only scenarios with 0 or 1 jump in that interval. Then for t > 0, we can define the jump size of the Poisson process q,
∆qh ∶= qh − qh− ∈ {0, 1}, h ≥ 0, (2.17)
where qt− ∶= lsi↗mt qs, for all t > 0.
In the model, each unit jump of q represents the occurrence of a natural–disaster event. Thus, events arrive according to a Poisson process with mean arrival rate λ > 0. Given the initial (K0, P0) ∈ S, capital and pollution dynamics are given by
dKt = bK(Kt, Pt, Ct, θt) dt − (1 − ω(Kt−, Pt)) Kt− dqt, (2.18)
dPt = bP (Kt, Pt, Ct, θt) dt. (2.19)
We next relax the constant–hazard assumption by letting the arrival rate respond to the contemporaneous pollution stock Pt.
2.2 Pollution–Driven Disaster Intensity via Nonhomogeneous
Poisson Process (NHPP)
In the model described in Section 2.1, the arrival of natural disasters is modelled as a homogeneous Poisson process (qt)t≥0 with constant intensity λ > 0 defined in (2.16). The process is memoryless and the expected number of events up to time t is E[qt] = λt. This means that the expected frequency of destructive events is independent of the state of the environment. However, this assumption neglects the substantial empirical evidence linking environmental degradation to increased disaster likeli-
hood. Rising concentrations of greenhouse gases, for instance, have been associated with heightened frequency and severity of extreme climatic events, such as storms, floods, and droughts. To capture the empirically supported notion that environmental degradation amplifies the frequency of natural disasters, we generalize the arrival process to a nonhomogeneous Poisson process whose intensity depends on the current stock of pollution Pt. Specifically, we replace the constant intensity λ with a sta-
te–dependent stochastic intensity λt ∶= λ(Pt), where
λ ∶ R≥0 → R≥0, λ ∈ C1, λ′(P ) > 0. (2.20)
This modification reflects the empirical and theoretical insight that increased pollution – interpreted broadly as environmental degradation – raises the likelihood of
10

extreme climate–related events. As the pollution stock grows, the expected frequency of disasters increases, thereby introducing an additional endogenous channel through which environmental harm amplifies economic losses. This modification creates a two–way feedback mechanism: economic activity degrades the environment, which in turn raises the incidence of disasters, leading to capital destruction and further economic vulnerability. Rare destructive events are now modelled by a nonhomogeneous Po-
isson process qˆ = (qˆt)t≥0 with state–dependent intensity λ(Pt), where Pt denotes the current level of pollution. That is, qˆ is an F–adapted càdlàg process with values in N0 such that
1. qˆ0 = 0 almost surely,
2. for all 0 ≤ s < t, conditional on Fs, the increment qˆt − qˆs is independent of the past and satisfies
qˆt − qˆs ∼ Poisson (
ˆt
s
λ(Pu) du) .
In this setting, the intensity function λ ∶ R≥0 → R>0 governs the instantaneous
probability of an event. Formally, for small h > 0, λ(Pt) = limh↘0 1
h E[qˆt − qˆt−h], and
P(qˆt − qˆt−h = 1∣Ft) = λ(Pt)h + o(h), P(qˆt − qˆt−h ≥ 2 ∣ Ft) = o(h2). (2.21)
Hence, the jump size
∆qˆt ∶= qˆt − qˆt− ∈ {0, 1}, t ≥ 0, (2.22)
where qˆt− ∶= lims↗t qˆs, for all t > 0. Equivalently, there exists a nonnegative, (Ft) predictable process λ(Pt) such that the compensator of qˆ is given by
Λt =
ˆt
0
λ(Ps) ds. (2.23)
By the Doob–Meyer decomposition theorem [17], the nonhomogeneous Poisson process qˆ admits the representation
qˆt = Mt + Λt, t ≥ 0, (2.24)
where Mt ∶= qˆt − Λt is an (Ft)–martingale. Equivalently, the jump integral can be written with the compensator as
ˆt
0
Hs dqˆs =
ˆt
0
Hs dMs +
ˆt
0
Hs λ(Ps) ds, (2.25)
for any bounded predictable process H. In particular, the martingale property of M implies that
E[
ˆt
0
Hs dMs] = 0, t ≥ 0. (2.26)
11

This property will allow us to simplify the expectation of the jump contribution. We specify the pollution–dependent hazard rate as
λ(Pt) = λ0 + λ1Pt, λ0 ≥ 0, λ1 ≥ 0, (2.27)
where λ0 represents the baseline hazard rate unrelated to environmental conditions, and λ1 measures the marginal increase in disaster risk per unit of pollution stock. This specification ensures that hazard rates rise linearly with environmental damage, allowing the model to reflect the dual role of abatement: reducing both the direct disutility from pollution and the frequency of capital–destroying events. From a technical perspective, the affine form of λ(⋅) preserves much of the tractability of-
 the homogeneous case while introducing a meaningful state dependence in the jump intensity, thereby enriching the policy implications without introducing the analytical complexity of fully general Lévy jump structures. In particular, the map λ ∶ R≥0 → R≥0 is continuous, locally Lipschitz, and of at most linear growth:
∣λ(P )∣ ≤ c0 + c1P for some c0, c1 ≥ 0. (2.28)
These ensure integrability of the compensator and well–posedness of the jump term. Thus, at each jump time of qˆ, a fraction ω(Kt−, Pt−) ∈ (0, 1) of the capital stock survives, i.e.,
Kt = ω(Kt−, Pt−) Kt− if ∆qˆt = 1, (2.29)
with pollution unchanged contemporaneously, Pt = Pt−. Hence, the dynamics of capital and pollution becomes
dKt = bK(Kt, Pt, Ct, θt) dt − (1 − ω(Kt−, Pt)) Kt− dqˆt, (2.30)
dPt = bP (Kt, Pt, Ct, θt) dt (2.31)
Remark 2.1. It is worth noting that the model proposed above describes a weak form of self–exciting interaction: capital and pollution are coupled through bidirectional feedback. In contrast to the previous setting where the controller was fully subject to the exogenous timing of disasters, the present model allows control actions to delay the occurrence of adverse events that reduce capital. This coupling between the action of the planner and the occurrence of disasters is only strengthen in the -
models to come, as we will see further.
In the next section, we introduce continuous environmental uncertainty by adding diffusion to Pt while keeping λ(Pt).
2.3 Jump–Diffusion Pollution with Intensity Feedback
We now extend the framework of Section 2.2 by allowing the pollution stock itself to be subject to stochastic fluctuations driven by Brownian motion, while
12

retaining the specification of rare destructive events through a nonhomogeneous Poisson process whose intensity depends on the current level of pollution. This enriches the dynamics of the economy by capturing both continuous environmental uncertainty and state–dependent disaster risk. The economy is now subject to two sources of risk:
• rare, destructive events (disasters) which are captured by a nonhomogeneous Poisson process with intensity increasing in the pollution stock;
• continuous fluctuations in pollution, i.e. pollution evolves according to a diffusion process with multiplicative noise.
The dynamics of capital Kt follows according to (2.30), while the dynamics of pollution Pt with initial condition P0 > 0 are given by
dPt = bP (Kt, Pt, Ct, θt) dt + σP Pt dWt, (2.32)
where W = (Wt)t≥0 is a Brownian motion and σP > 0 is the diffusion parameter. The multiplicative term σP Pt dWt captures proportional (log-normal-type) fluctuations in pollution (e.g., meteorological dispersion or natural absorption shocks). First, from an economic perspective, stochastic pollution introduces time–varying disaster exposure: because the arrival intensity depends on Pt, abatement that lowers Pt reduces not only expected pollution damages but also the volatility of disaster risk thro-
ugh the intensity channel. Thus, the multiplicative term σP Pt dWt, combined with the existing mean–reverting forces in bP (natural decay −αPt and abatement), yields a positive diffusion: starting from P0 > 0, the process Pt remains strictly positive. This allows us to work on the natural state space (Kt, Pt) ∈ S, which is exactly the domain on which preferences U (Ct, Pt) and damage functions such as ω(Kt, Pt) are defined, and it avoids any need for artificial boundary behaviour at P = 0 in the H-
JB problem. Second, the geometric–type specification has a clear economic interpretation in terms of proportional environmental shocks. Conditionally on Ft, the conditional variance of Pt over a short interval is
Var(dPt ∣ Ft) = σ2
PP2
t dt, (2.33)
so the relative volatility dPt/Pt is driven by a constant parameter σP , while the absolute volatility of Pt increases with the level of the pollution stock. This matches the idea that, at an aggregate level, environmental and measurement uncertainties scale approximately in percentage terms: (i) when pollution is low, random fluctuations due to meteorological dispersion, natural sinks, or policy implementation are small in absolute terms; (ii) when pollution is high, similar percentage disturbanc-
es translate into larger absolute changes in Pt. This feature is particularly important in our framework because both the arrival intensity of disasters, λ(Pt), and (in the marked setting) the distribution of disaster magnitudes depend on Pt. Multiplicative
13

noise implies that highly polluted states are not only more damaging in expectation, but also more uncertain: disaster risk becomes both higher and more volatile as Pt rises. In this stochastic setting, abatement has a dual role. By lowering the pollution stock Pt, it reduces the direct disutility from pollution and the expected size of environmentally driven losses. At the same time, because the disaster arrival intensity λ(Pt) is increasing in Pt and Pt itself is stochastic, abatement also stab-
ilizes the risk environment: it decreases both the level and the variability of the disaster intensity. In other words, abatement mitigates expected pollution damages and acts as a form of risk management by reducing the volatility of disaster risk. Third, the specification (2.32) is analytically convenient and in line with standard continuoustime macro–finance modelling. It leads to an integro–diffusion HJB equation whose second–order term in P has the form 1
2 σ2
P P 2 vP P (K, P ), for the value function v, so that the resulting control problem falls within the well–developed theory of stochastic control with positive diffusions (see, e.g., [10]). Moreover, the deterministic benchmark of our model is recovered in the limit σP → 0, so the stochastic specification is a natural enrichment of the baseline framework rather than a qualitatively different model. Thus, the geometric–type diffusion in (2.32) achieves a transparent balance: it respects the non–nega-
tivity of pollution, generates level-dependent proportional shocks with a natural economic meaning, and keeps the associated control problem in a tractable and widely used class. Finally, to allow for random disaster magnitudes in a unified way, we move to a marked Poisson random measure representation.
2.4 Generalized Framework with Poisson Random Measures
(PRMs)
The model formulation using Poisson Random Measures (PRMs) approach provides a unified framework for modelling jump processes: it makes explicit the random measure of disaster arrivals and their compensator, and allows us to write the dynamics of capital in terms of both drift and martingale components. This generalization not only gives a more rigorous mathematical foundation to the model, but also facilitates extensions, such as allowing for disaster magnitudes. In this way, the PRM formulation -
serves as a bridge between the models introduced in Sections 2.1 2.3 and richer specifications with marked jumps. Within this PRM framework, the social planner selects consumption and abatement paths to balance output growth, environmental quality, and resilience to pollution–driven disasters, whose arrivals are governed by a state–dependent intensity and whose magnitudes may be modelled as random marks. Intuitively, the current PRM–based model constitutes an extension of the ones introduced earli-
er by incorporating an additional component into the jump process. This added component allows to model, for example, not only the frequency at which
14

disasters occur but also their magnitude as a function of the current pollution stock:
• the higher the pollution stock Pt, the more frequent disasters become.
• the higher the pollution stock Pt, the more destructive disasters become.
Mathematically, we now consider q as a Poisson random measure
q ∶ (Ω, F , P) Ð→ Mc∗([0, ∞) × [0, ∞)),
where (Ω, F, F, P) is a prescribed probability space and Mc∗(X ) denotes the space of simple, counting Borel measures over X , endowed with the topology of weak convergence, see [8]–[9]. This means that q is of the form
q(dt, dζ) = n∑≥1
δ(τn,∆n)(dt, dζ), (2.34)
where τn denotes the occurrence time of the n−th disaster, and ∆n its magnitude. In fact, we have that ∆n follows the conditional law
P[∆n ∈ B∣σ{(τ1, ∆1), . . . , (τn−1, ∆n−1)} ∨ σ{τn}] ∝
ˆ
B
λ(Pτn, ζ)ν(dζ), (2.35)
for all B ∈ B(R≥0), up to a normalizing constant. Regarding the compensator of q, it is assumed to have the form
Λ(dt, dζ) ∶= λ(Pt, ζ)dt ⊗ ν(dζ), (2.36)
where ν is a finite measure over R≥0 with finite second moment, and
λ ∶ R2
≥0 → R≥0
is a continuous differentiable function with
∂
∂P λ(P, ζ) > 0, (P, ζ) ∈ R>0 × R≥0
and
ˆ
[0,∞)(1 + ζ2)λ(P, ζ)ν(dζ) < ∞, ∀P > 0.
Remark 2.2. To allow models in which the disaster arrival rate is endogenous (i.e., the intensity λ of the jump measure q may depend on P ), we model q as a random measure with a (possibly random) intensity measure Λ. To overcome this technicality, it is necessary to ensure our stochastic basis (Ω, F, F, P) is sufficiently rich. We will address this issue more precisely at the beginning of the next section.
15

With these assumptions in place, the controlled dynamics now become
dKt = bK(Kt, Pt, Ct, θt) dt −
ˆ
[0,∞) (1 − ω(Kt−, Pt, ζ))Kt− q(dt × dζ), (2.37)
dPt = bP (Kt, Pt, Ct, θt) dt + σP Pt dWt, (2.38)
K0 > 0, P0 > 0, (2.39)
where bK and bP are as in (2.14) – (2.15), (Ct)t≥0 and (θt)≥0 are F–adapted processes such that the system (2.37) – (2.39) is well–defined, and
(K, P, ζ) z→ ω(K, P, ζ) ∈ (0, 1)
represents the surviving proportion of capital after a disaster, which is dependent on the current levels capital K and of pollution P , as well as the magnitude of the disaster ζ. The function ω is assumed to be continuous in all its coordinates, and to satisfy
the integrability condition
ˆ
[0,∞)
ω(K, P, ζ)2λ(P, ζ)ν(dζ) < ∞ ∀(K, P ) ∈ S, ∀t ≥ 0.
Moreover, we assume ω is decreasing on K (resp. P and ζ), thereby reflecting a higher vulnerability when capital intensity (resp. level of pollution and magnitude of the disaster) increases. As stated previously, this model is motivated by the notion that the level of pollution affects not only the frequency but also the magnitude of risk at play. For example, consider the following: let q a be a Poisson random measure determined by its compensator
Λ(dt, dζ) ∶= λ(Pt−)
Γ(Pt−) ζPt−−1e−ζ dt ⊗ dζ, (2.40)
where λ ∶ R≥0 → R≥0 is a measurable function; that is, the kernel Λ corresponds to λ(Pt) times the density of a Gamma distribution of shape parameter Pt and scale parameter 1. As a result, from (2.34) and (2.35) we have that the disasters q arrive as a Poisson point process of intensity
E[q((0, t] × R≥0)] =
ˆ
(0,t]
λ(Pt−)(
ˆ
R≥0
1
Γ(Pt−) ζPt−−1e−ζ dζ) dt =
ˆ
(0,t]
λ(Pt−)dt,
and their magnitude follows a conditional distribution Gamma(Pt, 1),
P[ζn ∈ B∣σ{(τ1, ζ1), . . . , (τn−1, ζn−1)} ∨ σ{τn}]
= Λ({τn}, B)
Λ({τn}, R≥0) =
ˆ
B
1
Γ(Pτn ) ζPτn −1e−ζ dζ.
16

The reason behind the specific Λ in (2.40) comes from the use of the Gamma density in point processes for modelling natural disasters; see for example [19], where Hawkes processes with a Gamma density are considered for the modelling of insurance claims subjected to natural disasters. From these closed expressions planers can evaluate their position more accurately since now they know that, in this particular case, the expected destruction of any forthcoming catastrophe grows proportionally (in f-
act, linearly) to the state of pollution during the previous disaster.
2.4.1 An intermediate model: PRMs with no diffusive term
A quick inspection of this framework show that the current formulation indeed generalizes the previous models: the model in Section 2.3 can be recovered as the special case in which the mark space is trivial and the intensity depends only on the pollution stock. Another interesting case can be recovered by suppressing the diffusive term in P :
dKt = bK(Kt, Pt, Ct, θt) dt −
ˆ
[0,∞) (1 − ω(Kt−, Pt, ζ))Kt− q(dt, dζ), (2.41)
dPt = bP (Kt, Pt, Ct, θt) dt (2.42)
K0 > 0, P0 > 0. (2.43)
Intuitively, this model can be regarded as a natural extension to the one based on nonhomogeneous Poisson processes from Section 2.2. For the sake of presentation, we shall not focus on the interpretations of this model, as most of them can be derived from the dynamics at (2.37)–(2.39). We will, however, refer to it as an intermediate step when deriving the HJB for the general jump–diffusion case.
17

3 The Hamilton–Jacobi–Bellman PDE via the Dy
namic Programming Principle
3.1 Preliminaries
Before proceeding, it is necessary to make a technical remark regarding the nature of the jumps under consideration, as well as the overall structure of the control problem.
3.1.1 Assumptions on the Stochastic Basis
As mentioned previously, by considering a state–dependent intensity on the model an implicit stochastic dependence is placed in the jumps in the form of a self–exciting interaction, see Remarks 2.1 and 2.2. This is possible because the jumps we are considering can all be derived from a Poisson point process, and more general, a Poisson random measure. To be more precise, the superposition and thinning properties of Poisson point processes allow us to assume, without any loss of generality, that a -
marked process q can be obtained as the integral of a larger counting random measure N :
q(dt × dζ) =
ˆ
1[0,λt(ζ)](r)N (dt × dζ × dr),
where λ is a suitable (integrable, predictable) non–negative random field; see [18], [5] and [9] for a reminder on general Poisson processes and random measures. Technically, this means we are working with jump processes of stochastic intensity. Whenever the source of randomness consists only on the jumps themselves, i.e. Sections 2.1, 2.2 and 2.4.1, our approach is justified by the embedding theorems on the extended state space (K, P, λ) and the integration with respect to the Poisson random meas-
ure N of intensity dt × dr on R≥0 × R≥0, see Chapter 5 of [5]. As we move to more complex specifications and introduce additional sources of randomness such as an independent Brownian motion, the stochastic basis (Ω, F, F, P) must be correspondingly enlarged. Importantly, this will not pose a problem in what follows, since the Wiener–Poisson structure of the model, together with the additive nature of the proposed intensity λ, falls within the framework of [16] and [15] for stochastic optimal cont-
rol problems with environment–dependent jumps. Hence, the following assumption will be taken implicitly throughout the rest of the paper:
Assumptions 3.1. There exists an underlying Poisson random measure N on R≥0 × R≥0 × R≥0 of intensity measure dt ⊗ ν(dζ) ⊗ dr for some σ–finite measure ν with finite second moment, such that
q(dt, dζ) =
ˆ
1[0,λ(Pt,ζ)](r)N (dt, dζ, dr).
18

Additionally, we assume F = {Ft}t≥0 is (the complete, right–continuous augmentation of) the filtration
F
t ∶=σ{q(B × C × D) ∣ (B, C, D) ∈ B([0, t]) ⊗ B(R≥0) ⊗ B(R≥0)} ∨ Gt,
where
G
t = σ{Ws ∣ 0 ≤ s ≤ t}
if a Brownian motion is present on the model, and
G
t = {∅, Ω}
otherwise.
3.1.2 Functional Objective
We consider the set of admissible control processes C = (Ct)t≥0 and θ = (θt)t≥0.
The state of the economy at time t is described by (Kt, Pt) ∈ S. Let θ ̄ ∶= min{1, φ/σ} so that Et = φY (Kt) − σθtY (Kt) ≥ 0. We call a control pair (C, θ) = ((Ct)t≥0, (θt)t≥0) admissible from (k, p) if
1. (Ct, θt) are F–progressively measurable, with Ct ≥ 0 a.e. and θt ∈ [0, θ ̄] a.s.;
2. under (C, θ), the model’s state equations admit a (pathwise) unique strong solution with nonnegative paths and initial condition (K0, P0) = (k, p);
3. the discounted utility is integrable:
E[
ˆ∞
0
e−ρt ∣U (Ct, Pt)∣ dt] < ∞. (3.1)
We denote the set of admissible controls by A(k, p).
Remark 3.2. The expectation in (3.1) is conditional on the initial state (k, p), and A(k, p) ≠ ∅ for all (k, p) ∈ S.
For any admissible control (C, θ) ∈ A(k, p), the associated gain function is defined by
J(k, p; C, θ) ∶= E [
ˆ∞
0
e−ρsU (Cs, Ps) ds] , (3.2)
and the corresponding value function v ∶ S → R is given by
v(k, p) ∶= sup
(C,θ)∈A(k,p)
J(k, p; C, θ) = sup
(C,θ)∈A(k,p)
E[
ˆ∞
0
e−ρsU (Cs, Ps) ds] . (3.3)
In order to ensure the well–posedness of the problem and to derive the associated Hamilton–Jacobi–Bellman (HJB) equation in classical form, we impose the following conditions on the value function v∶ S → R:
19

1. Continuous differentiability: v is continuously differentiable with respect to both state variables k and p,
v ∈ C1(S), (3.4)
i.e. both partial derivatives ∂v
∂K and ∂v
∂P exist and are continuous on S.
2. Sufficient regularity so that
v ∈ C2(S). (3.5)
3. We assume the following monotonicity properties, which are consistent with the economic interpretation of the model:
• v is non–decreasing in capital:
∂v
∂K (K, P ) ≥ 0 for all (K, P ) ∈ S, (3.6)
reflecting that higher capital stock does not decrease the maximal attainable utility.
• v is non–increasing in pollution:
∂v
∂P (K, P ) ≤ 0 for all (K, P ) ∈ S, (3.7)
reflecting the intuition that capital accumulation increases utility, while pollution reduces it.
4. To ensure well–posedness of the stochastic control problem and integrability of the value function, we impose a polynomial growth bound on v. There exist constants c > 0, γ, δ ≥ 0 such that
∣v(K, P )∣ ≤ c(1 + Kγ + P δ), ∀(K, P ) ∈ S. (3.8)
3.1.3 Dynamic Programming Principle
Let Tt,T denote the set of stopping times with values in the interval [t, T ], and define T ∶= T0,∞ as the set of admissible stopping times on the infinite horizon. The Dynamic Programming Principle (DPP) asserts that for any admissible initial condition (k, p) ∈ S, we have:
v(k, p) = sup
(C,θ)∈A(k,p)
sup
h∈T
E[
ˆh
0
e−ρsU (Cs, Ps) ds + e−ρhv(Kh, Ph)] . (3.9)
Equivalently, the value function also satisfies:
v(k, p) = sup
(C,θ)∈A(k,p)
inf
h∈T E [
ˆh
0
e−ρsU (Cs, Ps) ds + e−ρhv(Kh, Ph)] , (3.10)
20

with the convention that e−ρs(ω) = 0 whenever s(ω) = ∞. This principle reflects the fact that optimal decision–making is time–consistent: the planner optimally balances immediate utility against the continuation value of the system’s future state. Suppose the candidate value function satisfies (3.5), (3.8) and
Tli→m∞ Ek,p [e−ρT v(KT , PT )] = 0. (3.11)
These conditions ensure that Itô’s formula applies and that the transversality condition holds. Let (C, θ) ∈ A(k, p) be admissible controls. Consider the system over a small time interval [0, h], where h > 0. From the dynamic programming principle (3.9), we have the inequality:
v(k, p) ≥ E [
ˆh
0
e−ρsU (Cs, Ps) ds + e−ρhv(Kh, Ph)] . (3.12)
3.2 Models of constant Jump–size
The Hamilton–Jacobi–Bellman (HJB) equation provides the infinitesimal version of the dynamic programming principle and characterizes the value function via a nonlinear partial integro–differential equation. We derive this equation under the assumption that the value function is sufficiently smooth.
3.2.1 Standard Poisson Process
To compute v(Kh, Ph), we apply Itô’s formula for jump processes to the value
function v, assuming that v ∈ C1(S) and that the state dynamics are given by a jump–diffusion process with jump times driven by Poisson process (qt)t≥0 of intensity λ > 0. Then
v(Kh, Ph) = v(K0, P0) +
ˆh
0 ( ∂v
∂K (Ks−, Ps−)dKs + ∂v
∂P (Ks−, Ps−)dPs)
+ s≤ ∑h
(v(Ks, Ps) − v(Ks−, Ps−) − ∂v
∂K (Ks−, Ps−)∆Ks
− ∂v
∂P (Ks−, Ps−)∆Ps)
= v(K0, P0) +
ˆh
0 ( ∂v
∂K (Ks−, Ps−)dKs + ∂v
∂P (Ks−, Ps−)dPs)
+ s≤ ∑h
(v(Ks, Ps) − v(Ks−, Ps−) − ∂v
∂K (Ks−, Ps−)∆Ks),
(3.13)
where we used the fact that Pt evolves continuously, i.e., ∆Ps = 0, for all s > 0, and hence Ps− = Ps. The jumps in Kt correspond to the discrete losses in capital due to natural disasters.
21

Substituting (3.13) into (3.12), yields
v(k, p) ≥ E
⎡⎢⎢⎢⎢⎣
ˆh
0
e−ρsU (Cs, Ps) ds
+ e−ρh(v(k, p) +
ˆh
0 ( ∂v
∂K (Ks−, Ps)dKs + ∂v
∂P (Ks−, Ps) dPs)
+ 0<s∑≤h
(v(Ks, Ps) − v(Ks−, Ps−) − ∂v
∂K (Ks−, Ps−)∆Ks))
⎤⎥⎥⎥⎥⎦
.
(3.14)
Now, using the state dynamics of capital (2.18) and pollution (2.19), we obtain
v(k, p) − e−ρhv(k, p) ≥ E
⎡⎢⎢⎢⎢⎣
ˆh
0
e−ρsU (Cs, Ps) ds
+ e−ρh(
ˆh
0
∂v
∂K (Ks−, Ps)((1 − θs)Ys(Ks) − Cs) ds
−
ˆh
0
∂v
∂K (Ks−, Ps)(1 − ωs(Ps, Ks))Ks dqs
+
ˆh
0
∂v
∂P (Ks−, Ps)(φYs(Ks) − σθsYs(Ks) − αPs) ds
+ s≤ ∑h
(v(Ks, Ps) − v(Ks−, Ps) − ∂v
∂K (Ks−, Ps)∆Ks))
⎤⎥⎥⎥⎥⎦
,
(3.15) or, equivalently by combining the terms, we get
v(k, p) − e−ρhv(k, p) ≥ E
⎡⎢⎢⎢⎢⎣
ˆh
0
e−ρsU (Cs, Ps) ds
+ e−ρh(
ˆh
0 [ ∂v
∂K (Ks−, Ps)((1 − θs)Ys(Ks) − Cs)
+ ∂v
∂P (Ks−, Ps)((φ − σθs)Ys(Ks) − αPs)] ds
−
ˆh
0
∂v
∂K (Ks−, Ps)(1 − ωs(Ps, Ks))Ks dqs
+ 0<s∑≤h
(v(Ks, Ps) − v(Ks−, Ps)) − 0<s∑≤h
∂v
∂K (Ks−, Ps)∆Ks)
⎤⎥⎥⎥⎥⎦
.
(3.16) Let us now examine the jump process associated with the capital dynamics (Kt)t≥0. A jump in the process occurs only at the arrival times of a natural disaster,
22

i.e., at the jump times of the counting process (qt). In such events, the capital stock experiences an instantaneous loss, modelled as
Kt = ω(Kt−, Pt−)Kt−, (3.17)
where ω(Kt−, Pt−) ∈ (0, 1) represents the fraction of capital preserved upon the occurrence of a disaster. The corresponding jump in K at time t is given by
∆Kt ∶= Kt − Kt− = −(1 − ω(Kt−, Pt−))Kt−∆qt. (3.18)
Thus, the capital loss upon a jump is proportional to the current capital stock. We now examine the impact of such jumps on the dynamic programming principle. In particular, we focus on the contribution of the jump component to the marginal variation of the value function, that is, the term representing the instantaneous change in the value function induced by the occurrence of a jump. Substituting the jump term from (3.18), we get:
∑
s≤h
∂v
∂K (Ks−, Ps)∆Ks = s≤ ∑h
∂v
∂K ( − (1 − ω(Ks−, Ps)))Ks−∆qs)
=−
ˆh
0
∂v
∂K (1 − ω(Ks−, Ps))Ks− dqs,
(3.19)
where the integral is understood in the sense of a stochastic integral with respect to the Poisson process. We return to the integral formulation of the dynamic programming principle (3.16) and substitute in the expressions derived for the jump terms:
v(k, p) − e−ρhv(k, p) ≥ E[
ˆh
0
e−ρsU (Cs, Ps) ds
+ e−ρh(
ˆh
0 [ ∂v
∂K (Ks−, Ps)((1 − θs)Ys(Ks) − Cs)
+ ∂v
∂P (Ks−, Ps)((φ − σθs)Ys(Ks) − αPs)] ds
+ 0<s∑≤h
(v(Ks, Ps) − v(Ks−, Ps)))].
(3.20)
We simplify the last term in (3.20), representing the cumulative jump in the value function over [0, h]:
∑
0<s≤h
(v(Ks, Ps) − v(Ks−, Ps)) = s≤ ∑h
(v(Ks− − (1 − ω(Ks−, Ps))Ks−, Ps) − v(Ks−, Ps))
= s≤ ∑h
(v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps))
=
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) dqs.
(3.21)
23

Substituting (3.21) back into (3.16), we obtain:
v(k, p) − e−ρhv(k, p) ≥ E[
ˆh
0
e−ρsU (Cs, Ps) ds
+ e−ρh(
ˆh
0 [ ∂v
∂K (Ks−, Ps)((1 − θs)Ys(Ks) − Cs)
+ ∂v
∂P (Ks−, Ps)((φ − σθs)Ys(Ks) − αPs)] ds
+
ˆh
0 (v(ωsKs−, Ps) − v(Ks−, Ps)) dqs)].
(3.22)
The expression (3.22) represents the key inequality that leads to the HJB equation when dividing by h and letting h → 0. In the next steps, we will compute the expectations using the properties of the Poisson process and derive the formal HJB equation:
lhi→m0
v(k, p) − e−ρhv(k, p)
h ≥ lhi→m0 E[
ˆh
0
e−ρsU (Cs, Ps)ds]
+ lhi→m0 E[e−ρh 1
h
ˆh
0
∂v
∂K (Ks−, Ps)((1 − θs)Ys(Ks) − Cs)ds]
+ lhi→m0 E[e−ρh 1
h
ˆh
0
∂v
∂P (Ks−, Ps)((φ − σθs)Ys(Ks) − αPs)ds]
+ lhi→m0 E[e−ρh 1
h
ˆh
0 (v(ωsKs−, Ps) − v(Ks−, Ps))dqs)].
(3.23) To derive the associated HJB equation, we study the infinitesimal generator of the controlled stochastic process. Starting from the dynamic programming inequality for the value function v(k, p) in (3.23), we investigate the limiting behavior of the expression as the time increment h → 0. The analysis proceeds term by term, applying L’Hôpital’s rule, the mean value theorem, and properties of the Poisson process. We first consider the contribution from the discounting factor:
lhi→m0
v(k, p) − e−ρhv(k, p)
h = ρv(k, p). (3.24)
Next, we find the expected value of the integral of the utility over a short time interval. Assuming sufficient regularity of U (Ct, Pt), and using the mean value
24

theorem inside the expectation, we obtain
lhi→m0 E[ 1
h
ˆh
0
e−ρsU (Cs, Ps)ds] = E[ lhi→m0
1
h
ˆh
0
e−ρsU (Cs, Ps)ds]
= E[e−ρ⋅0U (C0, P0)] = U (C0, P0).
(3.25)
Similarly, we analyze the expected contribution from the deterministic drift in the state variables Kt and Pt. For the capital variable:
lhi→m0 E[e−ρh 1
h
ˆh
0
∂v
∂K (Ks−, Ps)((1 − θs)AKs − Cs) ds]
= lhi→m0 e−ρh lhi→m0 E[ 1
h
ˆh
0
∂v
∂K (Ks−, Ps)((1 − θs)Ys(Ks) − Cs) ds]
= E[ lhi→m0
1
h
ˆh
0
∂v
∂K (Ks−, Ps)((1 − θs)Ys(Ks) − Cs) ds]
= E[ ∂v
∂K (K0, P0)((1 − θ0)Y0(K0) − C0)]
= ∂v
∂K (k, p)((1 − θ0)Y0(k) − C0),
(3.26)
and analogously for the pollution variable:
lhi→m0 E[e−ρh 1
h
ˆh
0
∂v
∂P (Ks−, Ps)((φ − σθs)AKs − αPs) ds]
= lhi→m0 e−ρh lhi→m0 E
⎡⎢⎢⎢⎢⎣
1
h
ˆh
0
∂v
∂P (Ks−, Ps)((φ − σθs)AKs − αPs) ds]
=E
⎡⎢⎢⎢⎢⎣
lhi→m0
1
h
ˆh
0
∂v
∂P (Ks−, Ps)((φ − σθs)AKs − αPs) ds]
= E[ ∂v
∂P (K0, P0)((φ − σθ0)Y0(K0) − αP0)]
= ∂v
∂P (k, p)((φ − σθ0)Y0(k) − αp).
(3.27)
These limits again rely on the mean value theorem and the continuity of the involved functions. The effect of the Poisson jump process is captured by the integral involving the jump component dqs. Using the Doob–Meyer decomposition, we write
dqs = q ̃s + λ ds, (3.28)
25

where q ̃t ∶= qt − E[qt] = qt − λt denotes the compensated Poisson process. This process is a martingale with respect to its natural filtration Ft, and hence its integral against a predictable integrand has zero expectation, i.e.,
E[
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) dq ̃s] = 0. (3.29)
Thus, we compute
lhi→m0 E [e−ρh 1
h
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) dqs)]
= lhi→m0 e−ρhE [ 1
h
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) dqs)]
= lhi→m0 E[ 1
h(
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) dq ̃s
+
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) d(λs)]
= lhi→m0
1
hE[
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) dq ̃s]
+ lhi→m0 λE [ 1
h
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps) ds]
= λE [lhi→m0
1
h
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) ds]
= λ(v(ω(k, p)k, p) − v(k, p)).
(3.30)
Using the obtained results, we arrive at the inequality (3.21):
ρv(k, p) ≥ U (C, p) + ∂v
∂P (k, p)((φ − σθ)Y0(k) − αp)
+ ∂v
∂K (k, p)((1 − θ)Y0(k) − C)
+ λ(v(ω(k, p)k, p) − v(k, p)).
(3.31)
Taking the supremum over admissible controls (C, θ) ∈ A(k, p), we obtain the Hamilton–Jacobi–Bellman equation (see e.g. [13], [22] or [24]).
ρv(k, p) = sup
(C,θ)∈A(k,p) {U (C, p) + ∂v
∂P (k, p)((φ − σθ)Y0(k) − αp)
+ ∂v
∂K (k, p)((1 − θ)Y0(k) − C)
+ λ(v(ω(k, p)k, p) − v(k, p))}.
(3.32)
26

The equation (3.32) characterizes the value function v(k, p) as the unique viscosity solution (under suitable regularity assumptions) to the associated stochastic optimal control problem involving continuous dynamics and Poisson–driven jump risk.
3.2.2 Nonhomogeneous Poisson
The derivation of the dynamic programming principle and the associated HJB equation proceeds in the same way as in the homogeneous case in Section 3.2.1, with one key modification: the constant intensity λ is replaced by the state–dependent intensity λ(Pt) with the compensator (2.23). For h > 0 sufficiently small, an application of Itô’s formula to the value function v, followed by taking the expectation, yields
v(k, p) − e−ρhv(k, p) ≥ E[
ˆh
0
e−ρsU (Cs, Ps) ds
+ e−ρh(
ˆh
0 [ ∂v
∂K (Ks−, Ps)((1 − θs)Ys(Ks) − Cs)
+ ∂v
∂P (Ks−, Ps)((φ − σθs)Ys(Ks) − αPs)] ds
+
ˆh
0 (v(ωsKs−, Ps) − v(Ks−, Ps)) dqˆs)].
(3.33)
The last integral in (3.33) represents the contribution of the jump process. Using the Doob–Meyer decomposition (2.24),
dqˆs = dMs + dΛs = dMs + λ(Ps) ds, (3.34)
we obtain
ˆh
0 (v(ωsKs−, Ps) − v(Ks−, Ps)) dqˆs =
ˆh
0 (v(ωsKs−, Ps) − v(Ks−, Ps)) dMs
+
ˆh
0 (v(ωsKs−, Ps) − v(Ks−, Ps))λ(Ps) ds.
(3.35) By the martingale property (2.26),
E[
ˆh
0 (v(ωsKs−, Ps) − v(Ks−, Ps)) dMs] = 0. (3.36)
Hence, only the compensator contributes to the expectation. We now compute the
27

infinitesimal expectation of the jump contribution:
lhi→m0 E [e−ρh 1
h
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) dqˆs)]
= lhi→m0 E [ 1
h
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) d(qˆs − Λs + Λs)]
= lhi→m0
1
hE[
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) dMs]
+ lhi→m0 E [ 1
h
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps))λ(Ps) ds]
= λ(p)(v(ω(k, p)k, p) − v(k, p)).
(3.37)
Substituting this result back into (3.33), dividing by h, and taking the limit as h → 0, we obtain the HJB inequality
ρv(k, p) ≥ U (C, p) + ∂v
∂P (k, p)((φ − σθ)Ak − αp)
+ ∂v
∂K (k, p)((1 − θ)Ak − C)
+ λ(p)(v(ω(k, p)k, p) − v(k, p)).
(3.38)
Finally, optimizing over admissible controls (C, θ) ∈ A(k, p), we arrive at the Hamilton–Jacobi–Bellman equation for the nonhomogeneous Poisson case:
ρv(k, p) = sup
(C,θ)∈A(k,p) {U (C, p) + ∂v
∂P (k, p)((φ − σθ)Ak − αp)
+ ∂v
∂K (k, p)((1 − θ)Ak − C)
+ λ(p)(v(ω(k, p)k, p) − v(k, p))},
(3.39)
where λ(p) = λ0 + λ1p. The quation (3.39) characterizes the value function v as the unique solution (under suitable regularity assumptions outlined before) to the associated stochastic optimal control problem involving continuous dynamics and Poisson-driven jump risk. The term λ(p)(v(ω(k, p)k, p) − v(k, p)) captures the expected capital loss from stochastic disasters, whose intensity now increases with pollution.
28

3.2.3 Brownian–driven pollution with nonhomogeneous Poisson jumps
Applying Itô’s formula for jump processes to the value function v on [0, h]:
v(Kh, Ph) − v(k, p) =
ˆh
0
vk(Ks−, Ps−)((1 − θs)Y (Ks) − Cs) ds
+
ˆh
0
vp(Ks−, Ps−)(φY (Ks) − Z(θsY (Ks)) − αPs) ds
+
ˆh
0
1
2 σ2
PP2
s vpp(Ks−, Ps−) ds
+
ˆh
0
vP (Ks−, Ps−)σP Ps dWs
+
ˆh
0 (v(ω(Ps, Ks−)Ks−, Ps) − v(Ks−, Ps)) dqˆs.
(3.40)
Substituting (2.30) and (2.32) into (3.40), yields
v(Kh, Ph) − v(k, p) =
ˆh
0
vk((1 − θs)Y (Ks) − Cs) ds
+
ˆh
0
vp(φY (Ks) − Z(θsY (Ks)) − αPs) ds
+
ˆh
0
1
2 σ2
PP2
s vpp ds +
ˆh
0
vpσP Ps dWs
+
ˆh
0 (v(ω(Ps, Ks−)Ks−, Ps) − v(Ks− Ps)) dqˆs.
(3.41)
Inserting (3.41) into (3.12) and considering a small time horizon h > 0, we obtain:
v(k, p) − e−ρhv(k, p) ≥ E[
ˆh
0
e−ρsU (Cs, Ps) ds
+ e−ρh
ˆh
0 ( ∂v
∂K (Ks−, Ps)((1 − θs)Ys(Ks) − Cs)
+ ∂v
∂P (Ks−, Ps)((φ − σθs)Ys(Ks) − αPs) + 1
2 σ2
PP2
s vP P ) ds
+ e−ρh
ˆh
0
vP σP Ps dWs
+ e−ρh
ˆh
0 (v(ωsKs−, Ps) − v(Ks−, Ps)) dqˆs].
(3.42)
29

The last term in (3.42) represents the contribution of the jump process. Using the Doob–Meyer decomposition (2.24), we may rewrite
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) dqˆs
=
ˆh
0 (v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) dMs
+
ˆh
0
λ(Ps)(v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) ds.
(3.43)
By the martingale property (2.26),
E[
ˆh
0 (v(ωsKs−, Ps) − v(Ks−, Ps)) dMs] = 0. (3.44)
Hence, only the compensator contributes to the expectation. The term
ˆh
0
e−ρhvpσP Ps dWs (3.45)
is a true martingale on [0, h], and thus
E[
ˆh
0
e−ρhvpσP Ps dWs] = 0. (3.46)
Using (3.44) and (3.46), the (3.42) becomes
v(k, p) − e−ρhv(k, p) ≥ E[
ˆh
0
e−ρsU (Cs, Ps) ds
+ e−ρh
ˆh
0 ( ∂v
∂K (Ks−, Ps)((1 − θs)Ys(Ks) − Cs)
+ ∂v
∂P (Ks−, Ps)((φ − σθs)Ys(Ks) − αPs) + 1
2 σ2
PP2
s vP P ) ds
+ e−ρh
ˆh
0
λ(Ps)(v(ωs(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps)) ds].
(3.47) By continuity of the coefficients and dominated convergence, we obtain the following limits as h ↓ 0:
lhi↓m0
v(k, p) − e−ρhv(k, p)
h = ρ v(k, p), (3.48)
and, for any continuous function G ∶ R2
≥0 → R,
lhi↓m0 E [ 1
h
ˆh
0
e−ρsG(Ks−, Ps) ds] = G(k, p). (3.49)
30

Dividing (3.47) by h, letting h → 0, and using the results in (3.48) and (3.49), we obtain the HJB inequality
ρv(k, p) ≥ U (C, p) + ∂v
∂P (k, p)((φ − σθ)Y0(k) − αp) + 1
2 σ2
P P 2vP P (k, p)
+ ∂v
∂K (k, p)((1 − θ)Y0(k) − C) + λ(p)(v(ω(k, p)k, p) − v(k, p)),
(3.50) where λ(p) = λ0 + λ1p. Finally, optimizing over admissible controls (C, θ) ∈ A(k, p), we arrive at the Hamilton–Jacobi–Bellman equation for the Brownian–driven pollution model with nonhomogeneous Poisson jumps
ρv(k, p) = sup
(C,θ)∈A(k,p) {U (C, p) + ∂v
∂P (k, p)((φ − σθ)Y0(k) − αp)
+1
2 σ2
P P 2vP P (k, p)
+ ∂v
∂K (k, p)((1 − θ)Y0(k) − C)}
+ λ(p)(v(ω(k, p)k, p) − v(k, p)).
(3.51)
Equation (3.51) shows that the effect of disasters enters additively via the compensator–adjusted jump term. In contrast to the homogeneous Poisson case, where disaster risk is constant, here the intensity λ(p) rises with the level of pollution. Thus the marginal damage of emissions is amplified through both the continuous deterioration of environmental quality (via the drift and diffusion of Pt) and the increased likelihood of discrete catastrophic events. The second–order term 1
2 σ2
P p2vpp
captures the effect of Brownian pollution shocks. The combination of diffusion and jump risk implies that optimal policies (C, θ) must balance the trade–off between consumption, abatement, and the endogenous exposure to both continuous and discontinuous environmental risks.
3.3 Models of random Jumps–size (PRMs)
We now derive the HJB equation for the model introduced in Section 2.4. The argument proceeds in two steps: we first obtain the corresponding equation for the intermediate model from Section 2.4.1 (i.e. with the Gaussian component removed), and then we extend the result to the randomized pollution model.
3.3.1 Equation for the intermediate model
The overall strategy remains the same, up to some minor modifications necessitated by q being a Poisson random measure. First, note that instead of (2.17), size
31

of the jumps vary according to ∆:
∆qt(dζ) = lhi↓m0 q((t − h, t], dζ) = q({t}, dζ) = n∑≥1
1{τn =t} δ{∆n } (dζ ),
where the law of ∆n is determined as in (2.35). Without loss of generality, assume Kt = K0 for all t < 0; then, the jump in capital (3.18) is replaced by
∆Kt = Kt − Kt− = − lhi↓m0
ˆ
(t−h,t]×[0,∞) (1 − ω(Ks−, Ps, ζ))Ks− q(ds, dζ)
=−
ˆ
(0,∞) (1 − ω(Kt−, Pt, ζ))Kt− q({t}, dζ)
=
⎧⎪⎪⎨⎪⎪⎩
−(1 − ω(Kt−, Pt, ∆n))Kt− on the event {τn = t},
0 in any other case,
(3.52)
for every t ≥ 0. With these considerations in mind, applying Itô’s rule (see Chapter 14 in [6]) on v(Kt, Pt) for the prescribed control (Ct, θt) yields the following equality
v(Kt, Pt) − v(k, p) =
ˆt
0
∂v
∂K (Ks−, Ps−)dKs +
ˆt
0
∂v
∂P (Ks−, Ps−)dPs
+ 0<∑s≤t
(v(Ks, Ps) − v(Ks−, Ps−))
− 0<∑s≤t
( ∂v
∂K (Ks−, Ps−)∆Ks + ∂v
∂P (Ks−, Ps−)∆Ps)
=
ˆt
0
∂v
∂K (Ks−, Ps)dKs +
ˆt
0
∂v
∂P (Ks−, Ps)dPs
+ 0<∑s≤t
(v(Ks, Ps) − v(Ks−, Ps) − ∂v
∂K (Ks−, Ps)∆Ks).
From the dynamic programming principle (see e.g. [22] or [20]), equation (3.12) holds, and as a consequence we get that for any small h > 0,
v(k, p) − e−ρhv(k, p)
h ≥1
h E[
ˆh
0
e−ρsU (Cs, Ps) ds + e−ρh
ˆh
0
∂v
∂K (Ks−, Ps) dKs
+ e−ρh
ˆh
0
∂v
∂P (Ks−, Ps) dPs
+ e−ρh 0<s∑≤h
v(Ks, Ps) − v(Ks−, Ps)
− e−ρh 0<s∑≤h
∂v
∂K (Ks−, Ps)∆Ks].
(3.53)
32

We now analyze each term individually when h goes to zero. First, using the same arguments as above – namely, (3.24), (3.25) and (3.27), – we obtain that
lhi→m0
v(k, p) − e−ρhv(k, p)
h = ρv(k, p), (3.54)
lhi→m0 E[ 1
h
ˆh
0
e−ρsU (Cs, Ps) ds] = U (C0, p), (3.55)
and
lhi→m0 e−ρh E[ 1
h
ˆh
0
∂v
∂P (Ks−, Ps) dPs] = ∂v
∂P (k, p)bP (k, p, C, θ), (3.56)
respectively. For the integral with respect to the capital, observe that (2.41) can be rewritten in terms of the compensated martingale measure q ̃:
dKt =(bK(Kt, Pt, Ct, θt) −
ˆ
(0,∞) (1 − ω(Kt−, Pt, z))Kt−λ(Pt, ζ) ν(dζ)) dt
−
ˆ
(0, ⋅ ]×(0,∞) (1 − ω(Kt−, Pt, ζ))Kt− q ̃(dt, dζ),
where
q ̃(dt, dζ) ∶= q(dt, dζ) − Λ(dt, dζ).
Then,
E[
ˆh
0
∂v
∂K (Ks−, Ps) dKs]
= E[
ˆh
0
∂v
∂K (Ks−, Ps)bK(Ks, Ps, Cs, θs) ds]
− E[
ˆ
(0,h]×(0,∞)
∂v
∂K (Ks−, Ps)(1 − ω(Ks−, Ps, ζ))Ks− Λ(ds, dζ)].
On the one hand, from (2.41) we have
lhi→m0 e−ρh E[ 1
h
ˆh
0
∂v
∂K (Ks−, Ps)bK(Ks, Ps, Cs, θs) ds]
= ∂v
∂K (k, p)bK(k, p, C0, θ0).
(3.57)
33

On the other hand, from (2.36), (3.52) and the definition of integral with respect to Poisson random measures,
E[ 0<s∑≤h
∂v
∂K (Ks−, Ps)∆Ks]
= −E[
ˆ
(0,h]×(0,∞)
∂v
∂K (Ks−, Ps)(1 − ω(Ks−, Ps, ζ))Ks− q(ds, dζ)]
= −E[
ˆ
(0,h]×(0,∞)
∂v
∂K (Ks−, Ps)(1 − ω(Ks−, Ps, ζ))Ks− Λ(ds, dζ)],
(3.58)
where the last equality is due to Campbell’s theorem and the definition of compensator, see [5]. Lastly, observe that
E[ 0<s∑≤h
v(Ks, Ps) − v(Ks−, Ps)] = E[ 0<s∑≤h
v(∆Ks + Ks−, Ps) − v(Ks−, Ps)]
= E[ 0<s∑≤h n∑≥1
(v(ω(Ks−, Ps, ζn)Ks−, Ps) − v(Ks−, Ps))1{τn=s}]
= E[
ˆ
(0,h]×(0,∞) (v(ω(Ks−, Ps, ζ)Ks−, Ps) − v(Ks−, Ps)) q(ds, dζ)]
= E[
ˆ
(0,h]×(0,∞) (v(ωs(Ks−, Ps, ζ)Ks−, Ps) − v(Ks−, Ps)) Λ(ds, dζ)],
where we have again used Campbell’s theorem. Then, by Lebesgue differentiation theorem [12],
lhi↓m0
1
h E[
ˆ
(0,h]×(0,∞) (v(ω(Ks−, Ps, ζ)Ks−, Ps) − v(Ks−, Ps)) Λ(ds, dζ)]
=
ˆ
(0,∞) (v(ω(k, p, ζ)k, p) − v(k, p))λ(p, ζ) ν(dζ).
Ô⇒ lhi↓m0
e−ρh
h E[
ˆ
(0,h]×(0,∞) (v(ω(Ks−, Ps, ζ)Ks−, Ps) − v(Ks−, Ps)) Λ(ds, dζ)]
= lhi↓m0 e−ρh ⋅
ˆ
(0,∞) (v(ω(k, p, ζ)k, p) − v(k, p))λ(p, ζ) ν(dζ)
=1⋅
ˆ
(0,∞) (v(ω(k, p, ζ)k, p) − v(k, p))λ(p, ζ) ν(dζ).
(3.59)
Taking limits at both sides of (3.53) and plugging in the estimates from (3.54)
34

to (3.59), we obtain that for any admissible control such that (C0, θ0) = (C, θ),
ρv(k, p) ≥ U (C, p) + ∂v
∂K (k, p)bK(k, p, C, θ) + ∂v
∂P (k, p)bP (k, p, C, θ)
+
ˆ
(0,∞) (v(ω(k, p, ζ)k, p) − v(k, p))λ(p, ζ) ν(dζ).
Thus, under suitable regularity conditions, the value function v solves (in an adequate, possibly viscosity sense) the Hamilton–Jacobi–Bellman partial integro–differential equation
ρv(k, p) = sup
(C,θ)∈[0,∞)×[0,1) {U (C, p) + ∂v
∂K (k, p)bK(k, p, C, θ)
+ ∂v
∂P (k, p)bP (k, p, C, θ)
+
ˆ
(0,∞) (v(ω(k, p, ζ)k, p) − v(k, p))λ(p, ζ) ν(dζ)}
= sup
(C,θ)∈[0,∞)×[0,1) {U (C, p) + ∂v
∂K (k, p)bK(k, p, C, θ)
+ ∂v
∂P (k, p)bP (k, p, C, θ)}
+
ˆ
(0,∞) (v(ω(k, p, ζ)k, p) − v(k, p))λ(p, ζ) ν(dζ).
(3.60)
3.3.2 Extension to randomized pollution
We now present another extension of the model to include a randomized pollution:
dKt = bK(Kt, Pt, Ct, θt) dt −
ˆ
[0,∞) (1 − ω(Kt−, Pt, ζ))Kt− q(dt, dζ), (2.37)
dPt = bK(Kt, Pt, Ct, θt) dt + σP Pt dWt, (2.38)
K0 > 0, P0 > 0, (2.39)
for some given constant σP > 0.
We now apply Itô’s rule [6] on e−ρtv(Kt, Pt) for the prescribed control (Ct, θt) on
35

the new dynamics:
e−ρtv(Kt, Pt) − v(k, p) = −
ˆt
0
ρe−ρsv(Ks−, Ps−)ds
+
ˆt
0
e−ρs{ ∂v
∂K (Ks−, Ps−)dKs + ∂v
∂P (Ks−, Ps−)dPs}
+1
2
ˆt
0
e−ρs( ∂2v
∂K2 (Ks−, Ps−)d⟨Kc, Kc⟩s + ∂2v
∂K∂P (Ks−, Ps−)d⟨Kc, P c⟩s
+ ∂2v
∂P ∂K (Ks−, Ps−)d⟨P c, Kc⟩s + ∂2v
∂P 2 (Ks−, Ps−)d⟨P c, P c⟩s)
+ 0<∑s≤t
e−ρs(v(Ks, Ps) − v(Ks−, Ps−)
− ∂v
∂K (Ks−, Ps−)∆Ks − ∂v
∂P (Ks−, Ps−)∆Ps),
where Kc and P c denote the continuous components of K and P , respectively. Then, using the same arguments as before and including the Brownian component of P , we have that
e−ρtv(Kt, Pt) − v(k, p) = −
ˆt
0
ρe−ρsv(Ks−, Ps)ds
+
ˆt
0
e−ρs( ∂v
∂K (Ks−, Ps)dKs + ∂v
∂P (Ks−, Ps)dPs)
+1
2
ˆt
0
e−ρs ∂2v
∂P 2 (Ks−, Ps)d⟨P c, P c⟩s
+ 0<∑s≤t
e−ρs(v(Ks, Ps) − v(Ks−, Ps) − ∂v
∂K (Ks−, Ps−)∆Ks).
As in the previous cases, from the dynamic programming principle equation (3.12) holds, and as a result
1
h E[ρ
ˆh
0
e−ρsv(Ks−, Ps) ds − v(k, p)] ≥ 1
hE[
ˆh
0
e−ρsU (Cs, Ps) ds]
+1
h E[
ˆh
0
e−ρs ∂v
∂K (Ks−, Ps)dKs] + 1
h E[
ˆh
0
e−ρs ∂v
∂P (Ks−, Ps)dPs]
+1
2h E[
ˆh
0
e−ρs ∂2v
∂P 2 (Ks−, Ps)d⟨P c, P c⟩s]
+1
h E[ 0<∑s≤t
e−ρs(v(Ks, Ps) − v(Ks−, Ps) − ∂v
∂K (Ks−, Ps−)∆Ks)].
36

Observe that the only difference from the previous case is in the inclusion of a Brownian motion in the dynamics of P and in the integral with respect to ⟨P c⟩; however, from the properties of W we have that
lhi↓m0
1
h E[
ˆh
0
e−ρs ∂v
∂P (Ks−, Ps)dPs]
= lhi↓m0
1
h E[
ˆh
0
e−ρs ∂v
∂P (Ks−, Ps)bP (Ks, Ps, Cs, θs) ds]
= ∂v
∂P (k, p)bP (k, p, C, θ),
and
lhi↓m0
1
2h E[
ˆh
0
e−ρs ∂2v
∂P 2 (Ks−, Ps) d⟨P c, P c⟩s]
= lhi↓m0
1
2h E[
ˆh
0
e−ρs ∂2v
∂P 2 (Ks−, Ps)σ2
P ds] = 1
2
∂2v
∂P 2 (k, p)σ2
P p2.
Adding this estimates to the ones presented in the previous section, i.e. equations (3.54) through (3.59), yields the following HJB equation:
ρv(k, p) = sup
(C,θ)∈[0,∞)×[0,θ ̄] {U (C, p) + ∂v
∂K (k, p)bK(k, p, C, θ)
+ ∂v
∂P (k, p)bK(k, p, C, θ) + 1
2
∂2v
∂P 2 (k, p)σ2
P p2
+
ˆ
(0,∞) (v(ω(k, p, ζ)k, p) − v(k, p))λ(p, ζ) ν(dζ)}
= sup
(C,θ)∈[0,∞)×[0,θ ̄] {U (C, p) + ∂v
∂K (k, p)bK(k, p, C, θ) + ∂v
∂P (k, p)bP (k, p, C, θ)}
+1
2
∂2v
∂P 2 (k, p)σ2
P p2 +
ˆ
(0,∞) (v(ω(k, p, ζ)k, p) − v(k, p))λ(p, ζ) ν(dζ).
(3.61)
37

4 Analysis of solutions to Hamilton–Jacobi
Bellman Equations
Having derived the HJB equation for each of the models under consideration, we now proceed to the analysis of their solutions under specific model–inspired assumptions. In particular, we work under the notion of classical solutions to the equations from Section 3, and defer the discussion of viscosity solutions to Section 5. Since the framework encompasses models with similar characteristics, we follow the same road map as in the previous sections, starting from the simplest specification and ment-
ioning only the changes that arise as the complexity increases. It is important to note that under the standing assumptions, the structure of the control problem cannot be altered substantially (in particular, the control of the agent is restricted to the trend or drift of the system and never on the noise or jump component). As a consequence, many of the results obtained for the base model extend naturally to the subsequent specifications. This is due to the fact that the Hamiltonian is preserved-
, which in turn maintains most of the structure of the optimality conditions for the controls.
4.1 Preliminaries
4.1.1 Hamiltonian and Optimality Conditions
Observe that, in each case, the control variables (C, θ) never directly act outside the drift term in the dynamics of the state (K, P ), i.e. the jumps in capital and the diffusion in pollution are allowed to evolve uncontrolled. When translated to the HJB, this means that both the nonlocal and the second–order terms can be placed outside the supremum. This provides a cleaner representation of the dependence on the controls, since we can define the Hamiltonian (i.e., the part that depends on the c-
ontrols) as
H(C, θ; K, P, vK, vP ) ∶= U (C, P ) + vK bK(Kt, Pt, Ct, θt) + vP bP (Kt, Pt, Ct, θt),
= U (C, P ) + vK ((1 − θt)Y (Kt) − Ct)
+ vP (φY (Kt) − Z(θtY (Kt)) − αPt).
(4.1)
Furthermore, when referring to the maximized Hamiltonian we shall use the notation
̂H(K, P ) ∶= sup
(C,θ)∈A
H(C, θ; K, P, vK, vP ), (4.2)
where vK and vP are the partial derivatives of v with respect to K and P , respectively.
Let (Cˆ, θˆ) be the maximizers of H over A(k, p). On the one hand, observe that
the optimal consumption Cˆ solves the interior first-order conditions:
∂H
∂C (Cˆ, θˆ) = ∂U
∂C (Cˆ, P ) − vK(K, P ) = 0 ⇐⇒ UC(Cˆ, P ) = vK(K, P ). (4.3)
38

On the other hand, observe that the optimal abatement share θˆ satisfies the interior first-order condition
∂H
∂θ (Cˆ, θˆ) = −vKY (K) − vP Z′(θY (K))Y (K) = 0 ⇐⇒ − vK = vP Z′(θY (K)).
(4.4) Moreover, since Z itself is linear in the investment, see (2.3), the Hamiltonian in (4.1) is linear in θ as well. Consequently, the maximizer θˆ is determined by the sign of vK + σvP :
θˆ =
⎧⎪⎪⎪⎪⎨⎪⎪⎪⎪⎩
0, vK + σvP > 0,
any θ ∈ [0, θ ̄], vK + σvP = 0,
θ ̄, vK + σvP < 0,
(4.5)
where θ ̄ ∶= min{1, φ/σ}.
4.1.2 Candidate form for the value function
In this section, we derive a candidate closed–form expression for the value function v which solves the dynamic programming equation (3.9). Let us fix the constants
ψ ∈ R>0, x ∈ R>0. (4.6)
Motivated by the first–order conditions (4.3)–(4.5) and the dynamic programming principle (3.9), we postulate that for all (K, P ) ∈ S the partial derivatives of v satisfy
∂v
∂K (K, P ) = (ψK)−ε, (4.7)
∂v
∂P (K, P ) = −xP β. (4.8)
Integrating (4.7) with respect to K (for fixed P ) yields
v(K, P ) = ψ−ε K1−ε
1 − ε + c1(P ), (4.9)
for some function c1 ∶ R>0 → R. Thus, for all (K, P ) ∈ S we can write
v(K, P ) = ψ−ε K1−ε
1 − ε + c1(P ). (4.10)
Similarly, integrating (4.8) with respect to P (for fixed K) yields
v(K, P ) = −x P 1+β
1 + β + c2(K), (4.11)
for some function c2 ∶ R>0 → R. Hence, for all (K, P ) ∈ S we have
v(K, P ) = −x P 1+β
1 + β + c2(K). (4.12)
39

We introduce the functions f, g ∶ S → R by
f (K, P ) ∶= ψ−ε K1−ε
1 − ε + c1(P ), (4.13)
g(K, P ) ∶= −x P 1+β
1 + β + c2(K). (4.14)
Therefore, we aim to find the candidate solution v such that for all (K, P ) ∈ S we have
v(K, P ) = f (K, P ) = g(K, P ). (4.15)
Since v is continuously differentiable on S, the same holds for f and g, and their partial derivatives must coincide with those of v:
∂f
∂P (K, P ) = ∂v
∂P (K, P ), (4.16)
∂g
∂K (K, P ) = ∂v
∂K (K, P ), (4.17)
for all (K, P ) ∈ S. We now use (4.16) and (4.17) together with (4.13) and (4.14) to determine the unknown functions c1 and c2. From (4.10) we obtain
∂f
∂P (K, P ) = ∂
∂P (ψ−ε K1−ε
1 − ε + c1(P )) = dc1
dP , (4.18)
for all (K, P ) ∈ S. Combining this with (4.8) and (4.16) gives
dc1
dP = ∂v
∂P (K, P ) = −xP β for all P > 0. (4.19)
Thus c1 satisfies the ordinary differential equation
dc1
dP = −xP β, P > 0, (4.20)
whose general C1 solution is
c1(P ) = −x P 1+β
1 + β + C1, (4.21)
for some constant C1 ∈ R. Similarly, from (4.12) we obtain
∂g
∂K (K, P ) = ∂
∂K (−x P 1+β
1 + β + c2(K)) = dc2
dK , (4.22)
for all (K, P ) ∈ S. Combining this with (4.7) and (4.17) yields
dc2
dK = ∂v
∂K (K, P ) = (ψK)−ε for all K > 0. (4.23)
40

Therefore c2 satisfies dc2
dK = (ψK)−ε, K > 0, (4.24)
whose general C1 solution is
c2(K) = ψ−ε K1−ε
1 − ε + C2, (4.25)
for some constant C2 ∈ R. Substituting these expressions into (4.10) and (4.12), we find that for all (K, P ) ∈ S,
v(K, P ) = ψ−ε K1−ε
1 − ε − x P 1+β
1 + β + C1 = ψ−ε K1−ε
1 − ε − x P 1+β
1 + β + C2. (4.26)
Hence, C1 = C2 =∶ c and v must be of the form
v(K, P ) = ψ−ε K1−ε
1 − ε − x P 1+β
1 + β + c. (4.27)
The system (4.7)–(4.8), and hence the HJB equation and the associated optimal policies, are invariant under adding a constant to v. Therefore c ∈ R is an arbitrary constant which we may fix by normalization. Without loss of generality, we set c = 0, and obtain the candidate
v(K, P ) = ψ−ε K1−ε
1 − ε − x P 1+β
1 + β , (K, P ) ∈ S. (4.28)
Conversely, it is immediate to verify that the function v defined in (4.28) satisfies (4.7) and (4.8). This justifies (4.28) as a natural candidate form for the value function. Taking into account (2.5), (4.7), (4.8), (4.28), as well as the first order conditions (4.3) and (4.4), we obtain
UC = vK ⇐⇒ C−ε = (ψK)−ε ⇐⇒ C = ψK. (4.29)
Remark 4.1. In dynamic economic models, the equations in (4.7) and (4.8) admit a natural interpretation as shadow prices: vK is the shadow value of an additional unit of capital and vP is the shadow cost of an additional unit of pollution. They are the dynamic–programming analogue of the adjoint equations from Pontryagin’s Maximum Principle; see the well–known [26] for a in–depth discussion in the continuous–time stochastic case.
4.2 Disasters at a constant arrival rate: Poisson process
We begin with the base model introduced in Section 2.1, in which disasters are driven by a standard Poisson process of intensity λ. From the derivation presented
41

in Section 3.2.1 (see equation (3.32)), the associated HJB equation takes the form
ρv(k, p) = sup
(C,θ)∈A(k,p) {U (C, p) + vK (k, p)((1 − θ)Ak − C)
+vP (k, p)((φ − σθ)Ak − αp)}
+λ(v(ω(k, p)k, p) − v(k, p)),
(4.30)
where vP ∶= ∂v
∂P , vK ∶= ∂v
∂K .
Envelope identities
We now examine the so–called envelope identities related to (4.30). These relations connect the derivatives of the value function with respect to the state (or parameters) to the gradients of the Hamiltonian (or Lagrangian) evaluated at the optimal control. They are useful for establishing differentiability of the value function, deriving optimality conditions for the controls, and characterizing the feedback control law. In this particular case, the envelope identities obtained by differentiating-
 the HJB with respect to the state variables ensure that the derivatives of the optimal controls do not appear in the value function, so that only the direct partial derivatives of the Hamiltonian and the jump term remain. Furthermore, the structure of the Hamiltonian presented in Section 4.1.1 allows these identities to be naturally extended to the remaining models, as will be shown later.
To see these explicit relations in our current model, let ̂H(K, P ) denote the maximized Hamiltonian from (4.2). Then (4.30) is equivalent to
ρv(K, P ) = ̂H(K, P ) + λ(v(ω(K, P )K, P ) − v(K, P )). (4.31)
Proposition 4.2 (Envelope identities). Assume v ∈ C2 and that (Cˆ, θˆ) is an optimizer of H at (K, P ). Then
ρ vK(K, P ) = ∂ ̂H
∂K (K, P ) + λ(vK(ω(K, P )K, P ) ∂K(ω(K, P ))K) − vK(K, P )),
ρ vP (K, P ) = ∂ ̂H
∂P (K, P ) + λ(vK(ω(K, P )K, P )∂P (ω(K, P )K)
+ vP (ω(K, P )K, P ) − vP (K, P )).
(4.32)
Proof. Let us differentiate (4.31) with respect to K (respectively, P ). Since ̂H =
supC,θ H(C, θ; ⋅) and H is C1, the envelope theorem (see [21]; alternatively, recall
42

the Newton-Leibniz rule from measure theory, see [3]) gives
∂ ̂H
∂K (K, P ) = ∂H
∂K (C, θ; K, P, vK , vP )∣(C,θ)=(Cˆ,θˆ)
. (4.33)
For the jump term, we need only apply the chain rule on v(ω(P, K)K, P ) for the corresponding variable:
∂K(v(ω(P, K)K, P )) = ∂v
∂ω(K, P )K (ω(K, P )K, P )∂ω(K, P )K
∂K
= vK(ω(K, P )K, P )∂K(ω(K, P )K)
= vK(ω(K, P )K, P )(ω(K, P ) + KωK(K, P )).
(4.34)
where ωK ∶= ∂ω/∂K. Similarly,
∂P (v(ω(P, K)K, P )) = ∂v
∂P (ω(K, P )K, P )
= vK(ω(K, P )K, P ) ∂P (ω(K, P )K) + vP (ω(K, P )K, P )
= vK(ω(K, P )K, P )KωP (K, P ) + vP (ω(K, P )K, P ).
(4.35) where ωP ∶= ∂ω/∂P . Substituting (4.34) and (4.35) into (4.31) gives (4.32).
Let us now compute ∂K ̂H and ∂P ̂H explicitly. Since (Cˆ, θˆ) are the maximizers of H over A(k, p), we can write
̂H(K, P ) = U (Cˆ, P ) + vK((1 − θˆ)AK − Cˆ) + vP ((φ − θˆσ)AK − αP ). (4.36)
Differentiating with respect to K and using the envelope property (4.32), we obtain
∂K ̂H = vKK((1 − θˆ)AK − Cˆ) + vK(1 − θˆ)A
+ vP K((φ − θˆσ)AK − αP ) + vP (φ − θˆσ)A. (4.37)
Substituting (4.37) into (4.32) for vK yields
ρ vK(K, P ) =((1 − θˆ)AK − Cˆ)vKK(K, P ) + (1 − θˆ)AvK(K, P )
+ (φ − θˆσ)AvP (K, P ) + ((φ − θˆσ)AK − αP )vP K(K, P )
+ λ(vK(ω(K, P )K, P )(ω(K, P ) + KωK(K, P )) − vK(K, P )).
(4.38)
Similarly,
∂P ̂H = UP (Cˆ, P ) + ((1 − θˆ)AK − Cˆ) vKP + ((φ − θˆσ)AK − αP ) vP P − α vP . (4.39)
Substituting (4.39) into (4.32) for vP gives
ρ vP (K, P ) = UP (Cˆ, P ) + ((1 − θˆ)AK − Cˆ) vKP (K, P )
+ ((φ − θˆσ)AK − αP ) vP P (K, P ) − α vP (K, P )
+ λ(vK(ω(K, P )K, P ) K ωP (K, P ) + vP (ω(K, P )K, P ) − vP (K, P )).
(4.40)
43

4.3 Disasters at a dynamic arrival rate: Nonhomogeneous
Poisson process
We now consider the next model and characterize the optimal controls in the nonhomogeneous Poisson framework with pollution–dependent disaster intensity. Recall that the Hamilton–Jacobi–Bellman equation (3.39) naturally decomposes into two components:
(i) the Hamiltonian term depending on the continuous dynamics and the controls, and
(ii) the jump contribution, which depends on the state variables but not directly on the controls.
Moreover, recall that the Hamiltonian part remains identical as in Section 4.2 since the jump term does not depend on the controls (C, θ). Thus, both the first–order conditions for C and θ and the envelope identities maintain a similar form. Indeed, let (Cˆ, θˆ) denote the maximizers of H over the admissible control set A(k, p). Since the jump component
λ(P )(v(ω(K, P )K, P ) − v(K, P )), (4.41)
depends only on the state variables (K, P ), it is placed outside the Hamiltonian and does not affect the first–order conditions for the controls (compare with (4.30)). In fact, given that the first–order conditions (4.3) – (4.4) characterize the feedback rules for optimal controls, by coupling them together with the pollution–dependent jump term in the HJB equation (4.41) we obtain a system that determines the value function and the associated optimal policies. Relative to the homogeneous Poisson-
 case, the only structural change is the replacement of the constant intensity λ by the state–dependent intensity λ(P ) = λ0 + λ1P , which introduces an additional endogenous feedback from pollution into the disaster hazard.
Envelope identities
Taking into account that the maximized Hamiltonian ̂H for this model coincides with the one defined in (4.2), the Hamilton–Jacobi–Bellman equation (3.39) can also be written in the compact form
ρv(K, P ) = ̂H(K, P ) + λ(P )(v(ω(P, K)K, P ) − v(K, P )). (4.42)
As a result, the next result can be deduced:
44

Proposition 4.3 (Envelope identities with state–dependent hazard). Assume v ∈ C2
and that (Cˆ, θˆ) maximizes H at (K, P ). Then
ρvK(K, P ) = ∂ ̂H
∂K (K, P ) + λ(P )(vK(ω(K, P )K, P ) ∂K(ω(K, P ))K) − vK(K, P )),
ρvP (K, P ) = ∂ ̂H
∂P (K, P ) + λ′(P )(v(ω(K, P )K, P ) − v(K, P ))
+ λ(P )(vK(ω(K, P )K, P )∂P (ω(K, P )K)
+ vP (ω(K, P )K, P ) − vP (K, P )).
(4.43)
Proof. The proof follows the same steps as in Proposition 4.2, albeit with some minor adjustments due to the hazard rate being state–dependent. In particular, applying the chain rule gives
∂P (λ(P )v(ω(K, P )K, P )) = λ′(P )v(ω(K, P )K, P ) + λ(P )∂vP (ω(K, P )K, P );
(4.44) consequently we obtain
λ(P )v(K, P ) = λ′(P )v(K, P ) + λ(P )∂vP (K, P ). (4.45)
Finally, collecting the terms in (4.44) and (4.45) yields (4.43).
Now, observe that substituting into (4.43) gives the K-envelope identity
ρvK(K, P ) =((1 − θˆ)AK − Cˆ)vKK(K, P ) + (1 − θˆ)AvK(K, P )
+ (φ − θˆσ)AvP (K, P ) + ((φ − θˆσ)AK − αP )vP K(K, P )
+ λ(P )(vK(ω(P, K)K, P )(ω(P, K) + KωK(P, K)) − vK(K, P )),
(4.46) where as for the pollution hazard, substituting into (4.43) yields the P -envelope identity
ρvP (K, P ) = UP (Cˆ, P ) + ((1 − θˆ)AK − Cˆ)vKP (K, P )
+ ((φ − θˆσ)AK − αP )vP P (K, P ) − αvP (K, P )
+ λ′(P )(v(ω(K, P )K, P ) − v(K, P ))
+ λ(P )(vK(ω(K, P )K, P )KωP (K, P )
+ vP (ω(K, P )K, P ) − vP (K, P )).
(4.47)
45

Equations (4.46) and (4.47) provide the exact envelope identities for the nonhomogeneous Poisson case. Relative to the homogeneous case, see equations (4.34) and (4.35) above, the key new feature is the appearance of the additional term proportional to λ′(P ), reflecting the feedback of pollution on the hazard rate of disasters. Indeed, differentiating the HJB with respect to K, and applying the envelope property together with the chain rule for the jump term, yields
ρvK(K, P ) = ((1 − θ)AK − C)vKK(K, P ) + (1 − θ)AvK(K, P )
+ (φ − θσ)AvP (K, P ) + ((φ − θσ)AK − αP )vP K(K, P )
+ λ(P )(vK(ω(K, P )K, P )(ω(K, P ) + KωK(K, P )) − vK(K, P )).
(4.48) Similarly, differentiating the HJB with respect to P , we obtain
ρvP (K, P ) = UP (C, P ) + ((1 − θ)AK − C)vKP (K, P )
+ ((φ − θσ)AK − αP )vP P (K, P ) − αvP (K, P )
+ λ′(P )(v(ω(K, P )K, P ) − v(K, P ))
+ λ(P )(vK(ω(K, P )K, P )KωP (K, P ) + vP (ω(K, P )K, P ) − vP (K, P )).
(4.49) Equations (4.48) and (4.49) generalize the envelope identities of the homogeneous Poisson case. The term
λ′(P )(v(ω(K, P )K, P ) − v(K, P )) (4.50)
captures the effect of pollution on the disaster intensity, and hence on the marginal value of pollution in the planner’s problem.
4.4 Disasters at a stochastic arrival rate: Jump–diffusion
models
4.4.1 Brownian–driven pollution stock
We continue with the model presented in Section 2.3, building on the discussions in Sections 4.2 and 4.3. In this setting, the Hamiltonian again coincides with the one presented in equation (4.1) since the diffusion term and the jump term are both independent of the controls (C, θ). Consequently, the first–order conditions with respect to C and θ remain unchanged and are not repeated here. In particular, the optimal consumption Cˆ is characterized by
UC(Cˆ, P ) = vK(K, P ), (4.51)
and the optimal abatement θˆ is determined by the same conditions as in equations (4.4) and (4.5).
46

For the corresponding envelope identities, a similar situation occurs. Let ̂H(K, P ) be the maximized Hamiltonian from (4.2). Then the HJB equation (3.51) can be written as
ρv(K, P ) = ̂H(K, P ) + 1
2 σ2
P P 2vP P (K, P ) + λ(P )(v(ω(K, P )K, P ) − v(K, P )). (4.52)
Applying the same procedure as in the proofs for Propositions 4.2 and 4.3 yields
ρvK(K, P ) = ∂K ̂H(K, P ) + 1
2 σ2
P P 2vP P K (K, P )
+ λ(P )(vK(ω(K, P )K, P ) (ω(K, P ) + KωK(K, P )) − vK(K, P )).
ρvP (K, P ) = ∂P ̂H(K, P ) + σ2
P P vP P (K, P ) + 1
2 σ2
P P 2vP P P (K, P )
+ λ′(P )(v(ω(K, P )K, P ) − v(K, P ))
+ λ(P )(vK(ω(K, P )K, P ) KωP (K, P ) + vP (ω(K, P )K, P ) − vP (K, P )).
(4.53) Differentiating Hˆ with respect to K and P , we obtain
∂K ̂H = vKK((1 − θˆ)AK − Cˆ) + (1 − θˆ)A vK
+ vP K((φ − θˆσ)AK − αP ) + (φ − θˆσ)A vP ,
∂P ̂H = UP (Cˆ, P ) + ((1 − θˆ)AK − Cˆ) vKP
+ ((φ − θˆσ)AK − αP ) vP P − α vP .
(4.54)
Substituting these expressions into (4.53) yields the full system of envelope identities.
4.4.2 Randomized magnitude of the disasters
In the general model introduced in Section 3.3.2, the optimal consumption Cˆ and abatement share θˆ are determined by the same conditions as in (4.4) and (4.5), since the controls do not act on either the diffusion or the jump components. In fact, plugging the maximized Hamiltonian from (4.2) into (3.61) yields
ρv(K, P ) = ̂H(K, P ) + 1
2
∂2v
∂P 2 (K, P )σ2
P P 2 (4.55)
+
ˆ
(0,∞) (v(ω(K, P, ζ)K, P ) − v(K, P ))λ(P, ζ) ν(dζ). (4.56)
To find the corresponding envelope identities it is sufficient to invoke the dominated convergence theorem along with the mean value theorem in order to handle
47

the differentiation under the integral of ν:
ρvK(K, P ) = ∂K ̂H(K, P ) + 1
2 σ2
P P 2vP P K (K, P )
+
ˆ
(0,∞)
λ(P, ζ)vK(ω(K, P, ζ)K, P ) (ω(K, P, ζ) + KωK(K, P, ζ)) ν(dζ)
−
ˆ
(0,∞)
λ(P, ζ)vK(K, P ) ν(dζ),
ρvP (K, P ) = ∂P ̂H(K, P ) + σ2
P P vP P (K, P ) + 1
2 σ2
P P 2vP P P (K, P )
+
ˆ
(0,∞)
∂P λ(P, ζ)(v(ω(K, P )K, P ) − v(K, P )) ν(dζ)
+
ˆ
(0,∞)
λ(P, ζ)(vK(ω(K, P, ζ)K, P ) KωP (K, P, ζ) + vP (ω(K, P, ζ)K, P )) ν(dζ)
−
ˆ
(0,∞)
λ(P, ζ)vP (K, P ) ν(dζ),
(4.57)
with the derivatives of ̂H exactly as in (4.54).
48

5 Verification theorems and viscosity solutions
In this section, we consider the problem of verification for the solutions to HJB equations, which concerns identifying when a solution to a given Partial Integro–Differential Equation (PIDE) coincides with the value function of an optimal control problem. However, it is well–known in the literature that the value function of an optimal control problem need not be smooth. Thus, before we can state any verification result, we introduce two notions of solutions for the class of PIDEs under study: cl-
assical and viscosity solutions. As the name suggests, a classical solution u is a sufficiently differentiable function such that the PIDE is satisfied by u and its derivatives. In contrast, a viscosity solution v is a function for which the notion of differentiability itself is weakened, and these “generalized derivatives” are precisely those that satisfy the PIDE together with v. For a detailed exposition of viscosity theory, see [7]. In our framework, it is reasonable to consider both classical-
 and viscosity solutions, as the nonlocal terms induced by jumps in the HJB equations affect the regularity of possible solutions. This effect becomes more apparent as the complexity of the jump processes grow.
5.1 Non–Diffusive models
5.1.1 Standard Poisson: Verification theorem for the candidate value function
The central step in the classical dynamic programming approach is to establish that, whenever a sufficiently smooth solution to the Hamilton–Jacobi–Bellman equation exists, this solution coincides with the value function of the control problem. This result, known as the verification theorem, further yields the existence of an optimal Markovian control as a direct corollary. The proof relies fundamentally on the application of Itô’s formula. The planner maximizes
J(K, P ; C, θ) = Ex [
ˆ∞
0
e−ρt ( C1−ε
t
1 − ε − χ P 1+β
t
1 + β ) dt] , (K, P ) ∈ S.
with ρ > 0, A, φ, σ, α, χ > 0 and ε, β > 0.
For a test function f ∈ C2(S), we define the controlled generator
(LC,θf )(K, P ) = fK(K, P )((1 − θ)AK − C) + fP (K, P )((φ − σθ)AK − αP )
+ λ(f (ω(K, P )K, P ) − f (K, P )). (5.1)
The value function
v(x) = sup
(C,θ)
J(K, P ; C, θ). (5.2)
49

satisfies the Hamilton–Jacobi–Bellman equation
ρv(K, P ) = sup
(C,θ)∈A(K,P ) { C 1−ε
1 − ε − χ P 1+β
1 + β + (LC,θv)(K, P )}. (5.3)
Let us now formulate and prove the verification theorem for the jump–control growth–environment model based on the results from [13] on the second–order integro–differential problems and [14] on general SDEs with jumps; for an in–depth treatment on the Brownian case we refer to [24].
Theorem 5.1 (Verification – Jump–control growth–environment model). Suppose v ∈ C2(S) is nonnegative, has at most polynomial growth, and satisfies the HJB (5.3) pointwise.
(i) (Upper bound) Assume the transversality condition
Tli→m∞ E [e−ρT v(KT , PT )] = 0 (5.4)
for every admissible (C, θ) ∈ A(K, P ).
Then for any admissible (C, θ) ∈ A(K, P ),
v(K, P ) ≥ J(K, P ; C, θ). (5.5)
(ii) (Optimality) If there exist Borel functions (Cˆ, θˆ) ∶ S → [0, ∞) × [0, 1] such that
for all (K, P ) ∈ (0, ∞)2
U (Cˆ, P ) + (LCˆ,θˆv)(K, P ) = sup
(C,θ)∈A(K,P ) {U (C, P ) + (LC,θv)(K, P )}, (5.6)
then (Cˆ, θˆ) is optimal and
v(K, P ) = J(K, P ; Cˆ, θˆ) = sup
(C,θ)∈A(K,P )
J(K, P ; C, θ). (5.7)
Proof.
(i) Fix any admissible (Ct, θt) with state (Kt, Pt). Define Yt ∶= e−ρtv(Kt, Pt). Applying Itô’s formula for jump processes to Yt on [0, T ] gives
e−ρT v(KT , PT ) − v(K0, P0) =
ˆT
0
e−ρs((LCs,θsv)(Ks, Ps) − ρv(Ks, Ps)) ds + MT ,
(5.8) where
MT ∶=
ˆT
0
e−ρs(v(ω(Ps−, Ks−)Ks−, Ps−) − v(Ks−, Ps−)) dq ̃s (5.9)
50

is a martingale. Equivalently, (5.9) can be written as
MT = 0<τ∑n≤T
e−ρτn (v(ω(Pτn−, Kτn−)Kτn−, Pτn−) − v(Kτn−, Pτn−))
−λ
ˆT
0
e−ρs(v(ω(Ps, Ks)Ks, Ps) − v(Ks, Ps)) ds.
(5.10)
Taking expectations and using E[MT ] = 0,
E [e−ρT v(KT , PT )] − v(K0, P0) = E [
ˆT
0
e−ρs((LCs,θsv)(Ks, Ps) − ρv(Ks, Ps)) ds] .
(5.11) By (5.3), we obtain
ρv ≥ U (Ct, Pt) + LCt,θtv ⇐⇒ LCt,θtv − ρv ≤ −U (Ct, Pt). (5.12)
For every T ,
E [e−ρT v(KT , PT )] − v(K0, P0) ≤ −E [
ˆT
0
e−ρtU (C, P ) dt] . (5.13)
Then, through a localization argument (see Section 7.2 of [13], Theorem 7.2.1, for the solution of the discounted control problem for (t, (K, P )) on the localized domain
[0, T ]×[−n, n]2 for any n ≥ 1), we can use standard results on the asymptotic stability of Wiener-Poisson semigroups to extend the (sub-optimally) controlled generator from (5.1) up to [0, ∞) × S (see Theorem 1 of III.13 from [14]); as a result, we can let T → ∞ so that (5.4) becomes
−v(K, P ) ≤ −J(K, P ; C, θ), i.e. v(K, P ) ≥ J(K, P ; C, θ). (5.14)
Therefore, v(K, P ) ≥ E[  ́ ∞
0 e−ρtU (Ct, Pt)dt].
(ii) Let (Cˆ, θˆ) satisfy (5.6). Repeating the above with (Cˆ, θˆ), the HJB inequality becomes an equality:
ρv = U (Cˆ, P ) + LCˆ,θˆv. (5.15)
So for each T ,
E [e−ρT v(KˆT , PˆT )] − v(K, P ) = −E [
ˆT
0
e−ρtU (Cˆt, Pˆt) dt] . (5.16)
As before, we use a localization argument to let T → ∞ (this time for the opti
mally controlled generator); combining this with (5.4) for (Cˆ, θˆ) yields v(K, P ) =
J(K, P ; Cˆ, θˆ). Combined with (i) this implies optimality.
51

Remark 5.2 (Transversality condition). A standard sufficient condition for (5.4) to hold is the following:
(a) the value function v grows at most polynomially;
(b) under any admissible control, there exists m > 0 such that
sup
t≥0
E[∣Kt∣m + ∣Pt∣m] < ∞; (5.17)
(c) the discount rate ρ dominates the growth rate of these moments.
Under these assumptions, the dominated convergence theorem ensures that
Tli→m∞ E [e−ρT v(KT , PT )] = 0.
Corollary 5.3 (Verification for the candidate power–separable value function). Let v be given by
v(K, P ) = ψ−ε K1−ε
1 − ε − x P 1+β
1 + β , (4.28)
with x > 0 and ψ > 0. Let Cˆ and θˆ be the feedback controls defined by (4.29) and (4.5), respectively. Then for all (K, P ) ∈ S,
v(K, P ) = sup
(C,θ)∈A
J(K, P ; C, θ) = J(K, P ; Cˆ, θˆ). (5.18)
Proof. We divide the argument into several steps in order to verify that the candidate function v is indeed the value function of the control problem:
1. Regularity and growth of v. For ε, β > 0, v ∈ C2(S) with
vK = (ψK)−ε, vP = −xP β, vKK = −εψ−εK−ε−1, vKP = 0, vP P = −xβP β−1.
(5.19) Hence, v has at most polynomial growth in (K, P ). Thus, it satisfies the regularity requirements in the Verification Theorem 5.1.
2. Although the feedback rule θˆ is of bang–bang type and introduces a discontinuity in the drift across the switching surface {(K, P ) ∶ vK(K, P ) + σvP (K, P ) = 0}, existence and uniqueness of strong solutions remain valid. Indeed, the drift is piecewise affine and thus of bounded variation on compacts. Recent results on SDEs with discontinuous drifts (see [25]) show that pathwise uniqueness and strong existence hold for such dynamics under nondegeneracy and bounded–variation conditions on the -
drift.
52

3. Attainment of the Hamiltonian. For fixed (K, P ), the map C ↦ H is strictly
concave; the first-order condition UC = vK gives Cˆ = ψK. The map θ ↦ H is affine with slope −AK (vK + σvP ), so θ defined above attains the supremum
on [0, θ ̄]. Therefore, for all (K, P ),
sup
(C,θ)∈A(K,P ) { C 1−ε
1 − ε − χ P 1+β
1 + β + (LC,θv)(K, P )}
= (Cˆ)1−ε
1 − ε − χ P 1+β
1 + β + (LCˆ,θˆv)(K, P ),
(5.20)
i.e. the maximizer (Cˆ, θˆ) attains the supremum in the HJB (4.1).
4. Transversality. Since v has polynomial growth
v(K, P ) ≤ c1(1 + K1−ε + P 1+β) (5.21)
or some c1 and (Kt, Pt) has moments with at most exponential growth rate strictly smaller than ρ (this holds under linear drift/jump structure and θ ∈
[0, θ ̄]), we obtain that the condition
Tli→m∞ E(k,p)[e−ρT v(KT , PT )] = 0 (5.22)
holds for all initial states (k, p) ∶= (K0, P0) ∈ S.
5. Upper bound via verification. For any admissible (C, θ), applying Itô’s for
mula for jump processes to e−ρtv(Kt, Pt), taking expectation, using the HJB inequality and the transversality condition, we obtain
v(K, P ) ≥ J(K, P ; C, θ). (5.23)
With (Cˆ, θˆ) attaining the Hamiltonian, the previous inequality becomes equality, yielding
v(K, P ) = J(K, P ; Cˆ, θˆ). (5.24)
Combining with Step 4 gives the stated identity. Thus, for every initial state (k, p) ∈ S,
v(k, p) = sup
(C,θ)∈A(k,p)
E(k,p) [
ˆ∞
0
e−ρt ( C1−ε
t
1 − ε − χ P 1+β
t
1 + β ) dt] = J(k, p; Cˆ, θˆ). (5.25)
We have established that the candidate power–separable function v satisfies all the conditions of the verification theorem. The feedback controls (Cˆ, θˆ) are admissible, attain the supremum in the Hamiltonian, and yield a state process for which the transversality condition holds. Therefore, v is indeed the value function of the optimization problem, and (Cˆ, θˆ) constitute an optimal control policy.
53

5.1.2 Nonhomogeneous Poisson: Verification theorem for the model with state–dependent jump intensity
We now state and prove a verification theorem for the planner’s problem when the arrival of destructive events is governed by a nonhomogeneous Poisson process with state–dependent intensity (2.27). For a twice continuously differentiable test function v ∈ C2(S), the (controlled) infinitesimal generator is
(LC,θv)(K, P ) = vK(K, P )((1 − θ)AK − C) + vP (K, P )((φ − σθ)AK − αP )
+ λ(P )(v(ω(P, K)K, P ) − v(K, P )).
(5.26)
The HJB equation reads
ρ v(K, P ) = sup
(C,θ)∈A(K,P ) {U (C, P ) + (LC,θv)(K, P )}. (5.27)
Theorem 5.4 (Verification – jump–control growth–environment model with state-dependent intensity). Suppose v ∈ C2(S) is nonnegative, has at most polynomial growth, and satisfies the HJB (5.27) pointwise.
(i) (Upper bound) Assume the transversality condition
Tli→m∞ E [e−ρT v(KT , PT )] = 0 (5.28)
for every admissible (C, θ) ∈ A(K, P ) and the associated state process (Kt, Pt) solving (2.30)-(2.31). Then, for any admissible (C, θ),
v(K, P ) ≥ J(K, P ; C, θ). (5.29)
(ii) (Optimality) If there exist Borel functions (Cˆ, θˆ) ∶ S → [0, ∞) × [0, 1] such that, for all (K, P ) ∈ S,
U (Cˆ, P ) + (LCˆ,θˆv)(K, P ) = sup
(C,θ)∈A(K,P ) {U (C, P ) + (LC,θv)(K, P )}, (5.30)
then (Cˆ, θˆ) is optimal and
v(K, P ) = J(K, P ; Cˆ, θˆ) = sup
(C,θ)∈A(K,P )
J(K, P ; C, θ). (5.31)
Proof. (i) Fix any admissible (Ct, θt) ∈ A(K, P ) and let (Kt, Pt) be the corre
sponding state. Set Yt ∶= e−ρtv(Kt, Pt). By the Itô’s formula for processes with
54

jumps driven by a counting process with (predictable) compensator (2.23), on [0, T ] we obtain
e−ρT v(KT , PT ) − v(K, P ) =
ˆT
0
e−ρs(LCs,θsv(Ks, Ps) − ρ v(Ks, Ps)) ds + MT
=
ˆT
0
e−ρs(LCs,θsv − ρv)(Ks, Ps) ds + MT .
(5.32) where
MT ∶=
ˆT
0
e−ρs(v(ω(Ks−, Ps−)Ks−, Ps−) − v(Ks−, Ps−)) dq ̃s. (5.33)
Under the polynomial growth of v and admissibility (linear growth of the drift;
boundedness of ω ∈ (0, 1); integrability of  ́ T
0 λ(Ps) ds), the stochastic integral
MT is a true martingale. Taking expectations in (5.32) and using E[MT ] = 0 gives
E [e−ρT v(KT , PT )] − v(K, P ) = E [
ˆT
0
e−ρs(LCs,θsv − ρv)(Ks, Ps) ds] . (5.34)
Since v solves the HJB (5.27), we have, pointwise,
ρv ≥ U (Cs, Ps) + LCs,θsv ⇐⇒ LCs,θsv − ρv ≤ −U (Cs, Ps). (5.35)
Hence, for all T ,
E [e−ρT v(KT , PT )] − v(K0, P0) ≤ − E [
ˆT
0
e−ρsU (Cs, Ps) ds] . (5.36)
Using a localization argument as before (see the proof of Theorem 5.1), we let T → ∞ and, using the transversality condition (5.28), we obtain
−v(K, P ) ≤ −J(K, P ; C, θ) ⇐⇒ v(K, P ) ≥ J(K, P ; C, θ), (5.37)
which proves the upper bound.
(ii) Let (Cˆ, θˆ) satisfy the attainment condition (5.30). Repeating the argument
above with (Cˆ, θˆ),
ρv = U (Cˆ, P ) + LCˆ,θˆv. (5.38)
Therefore, for each T ,
E [e−ρT v(KˆT , PˆT )] − v(K, P ) = −E [
ˆT
0
e−ρsU (Cˆs, Pˆs) ds] . (5.39)
55

Letting T → ∞ and using (5.28) for (Cˆ, θˆ) gives v(K, P ) = J(K, P ; Cˆ, θˆ).
Together with part (i), this implies v(K, P ) = supC,θ)∈A(K,P ) J(K, P ; Cˆ, θˆ) and
thus the optimality of (Cˆ, θˆ).
Remark 5.5 (On transversality condition (5.28) and integrability). A sufficient set of conditions for the martingale property of MT and for (5.28):
(a) v has at most polynomial growth;
(b) ω ∈ C1(S);
(c) λ(⋅) is locally Lipschitz with at most linear growth, so E[  ́ T
0 λ(Ps) ds] < ∞ for
each T ;
(d) under any admissible (C, θ), moments of Kt and Pt grow at most exponentially with rate strictly smaller than ρ.
Under these assumptions, by dominated convergence theorem
Tli→m∞ E[e−ρT v(KT , PT )] = 0. (5.40)
5.2 Diffusive Models
5.2.1 Nonhomogeneous Poisson process
Verification theorem
The verification theorem (Theorem 5.6 below) provides a general criterion: any sufficiently smooth function v that solves the HJB (5.44), with admissible feedback controls (Cˆ, θˆ) attaining the Hamiltonian, coincides with the value function
and makes (Cˆ, θˆ) optimal. In the present jump–diffusion setting with pollutiondependent intensity, the Hamiltonian retains the same (C, θ) dependence as in the constant-intensity case, so the first–order conditions deliver the feedback rules Cˆ = ψK and the θ–projection in (4.5). The planner maximizes
J(K, P ; C, θ) = E [
ˆ∞
0
e−ρt( C1−ε
t
1−ε − χ P 1+β
t
1+β ) dt] , (K, P ) ∈ S, (5.41)
with parameters ρ > 0, A, φ, σ, α, χ > 0, ε, β > 0.
For f ∈ C2(S), the generator under controls (C, θ) is
(LC,θf )(K, P ) = fK(K, P )((1 − θ)AK − C) + fP (K, P )((φ − σθ)AK − αP )
+
1
2 σ2
P P 2 fP P (K, P )
+ λ(P )(f (ω(K, P )K, P ) − f (K, P )).
(5.42)
56

The value function
v(K, P ) = sup
(C,θ)∈A(K,P )
J(K, P ; C, θ) (5.43)
satisfies the Hamilton–Jacobi–Bellman equation:
ρv(K, P ) = sup
(C,θ)∈A(K,P ) { C1−ε
1−ε − χ P 1+β
1+β + (LC,θv)(K, P )}. (5.44)
We now state and prove the verification result. As in the previous cases we shall be using a localization argument when taking T → ∞, which we left implicit in the text.
Theorem 5.6 (Verification – nonhomogeneous Poisson with Brownian pollution). Assume v ∈ C2(S) is nonnegative, has at most polynomial growth, and satisfies the HJB (5.44) pointwise.
(i) (Upper bound) Assume the transversality condition
Tli→m∞ E[e−ρT v(KT , PT )] = 0 (5.45)
holds for every admissible (C, θ) ∈ A(K, P ). Then, for any admissible (C, θ) ∈ A(K, P ),
v(K, P ) ≥ J(K, P ; C, θ). (5.46)
(ii) (Optimality) If there exist Borel measurable functions (Cˆ, θˆ) ∶ S → [0, ∞)×[0, 1] such that, for all (K, P ) ∈ S,
U (Cˆ, P ) + (LCˆ,θˆv)(K, P ) = sup
(C,θ)∈A(K,P ) {U (C, P ) + (LC,θv)(K, P )}, (5.47)
then (Cˆ, θˆ) is optimal and
v(K, P ) = J(K, P ; Cˆ, θˆ) = sup
(C,θ)∈A(K,P )
J(K, P ; C, θ). (5.48)
Proof. (i) Fix (Ct, θt) admissible with state (Kt, Pt). Define Yt ∶= e−ρtv(Kt, Pt). By Itô’s formula for jump–diffusions,
e−ρT v(KT , PT ) − v(K0, P0) =
ˆT
0
e−ρs((LCs,θsv)(Ks, Ps) − ρv(Ks, Ps)) ds
+
ˆT
0
e−ρsvP (Ks, Ps)σP Ps dWs
 ́111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 ̧111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111¶
=∶M (W )
T
+
ˆT
0
e−ρs∆vs dMs
 ́11111111111111111111111111111111111111111111 ̧111111111111111111111111111111111111111111111¶
=∶M (qˆ)
T
,
(5.49)
57

where M is the compensated jump martingale of qˆ,
∆vs ∶= v(ω(Ks−, Ps)Ks−, Ps) − v(Ks−, Ps), (5.50)
and we have used
ˆT
0
e−ρs∆vs dqˆs =
ˆT
0
e−ρs∆vs dMs +
ˆT
0
e−ρsλ(Ps)∆vs ds. (5.51)
Rearranging (5.49) gives
E [e−ρT v(KT , PT )] − v(K, P ) = E [
ˆT
0
e−ρs((LCs,θsv) − ρv)(Ks, Ps) ds] , (5.52)
since E[M (W )
T ] = E[M (qˆ)
T ] = 0.
By the HJB inequality,
ρv ≥ U (Cs, Ps) + (LCs,θsv) ⇐⇒ (LCs,θsv) − ρv ≤ −U (Cs, Ps). (5.53)
Thus, for every T ,
E[e−ρT v(KT , PT )] − v(K0, P0) ≤ −E [
ˆT
0
e−ρsU (Cs, Ps) ds] . (5.54)
Letting T → ∞ and using (5.45), yields
v(K, P ) ≥ E [
ˆ∞
0
e−ρsU (Cs, Ps) ds] = J(K, P ; C, θ). (5.55)
(i) If (Cˆ, θˆ) attains the supremum (5.47), then
ρv = U (Cˆ, P ) + (LCˆ,θˆv). (5.56)
Then for each T ,
E [e−ρT v(KˆT , PˆT )] − v(K, P ) = −E [
ˆT
0
e−ρsU (Cˆs, Pˆs) ds] . (5.57)
Letting T → ∞ and using (5.45) for (Cˆ, θˆ) yields v(K, P ) = J(K, P ; Cˆ, θˆ). Combined with part (i) this proves optimality.
Remark 5.7 (On the transversality condition and integrability). A sufficient set of conditions ensuring (5.45) and the martingale properties used in the proof is
58

(a) v ∈ C2(S) with at most polynomial growth so
∣v∣ + ∣vK∣ + ∣vP ∣ + ∣vP P ∣ ≤ C(1 + Km + P m); (5.58)
(b) for any admissible (C, θ) there exists m′ > 0 such that
sup
t≥0
E[∣Kt∣m′ + ∣Pt∣m′] < ∞; (5.59)
(c) supt∈[0,T ] E[λ(Pt)] < ∞ for each finite T ;
(d) ρ dominates the growth rate of the moments in (b).
Then both
M (W )
T=
ˆT
0
e−ρsvP σP Ps dWs and M (qˆ)
T=
ˆT
0
e−ρs∆vs dMs (5.60)
are square-integrable martingales with zero mean, and dominated convergence implies
Tli→m∞ E[e−ρT v(KT , PT )] = 0. (5.61)
It remains to check that our candidate value function v from (4.28) indeed solves the HJB and that (Cˆ, θˆ) attains the supremum. Substituting the candidate function
into (5.44) separates the K– and P –blocks. The resulting v is C2 with polynomial growth, and the induced feedback is admissible and attains the Hamiltonian pointwise. Hence, by Theorem 5.6, the candidate is the value function and the feedback is optimal.
Viscosity solutions
In this section, we develop the corresponding viscosity solution framework. The setting involves a jump–diffusion system with endogenous, pollution–dependent jump intensity and stochastic pollution evolution, leading to an integro–differential HJB equation that may not admit classical smooth solutions. The viscosity approach therefore provides a general and robust concept of solution that ensures existence, stability, and uniqueness within the class of continuous functions. The controlled state pr-
ocess (Kt, Pt) evolves according to
dKt = bK(Kt, Pt, Ct, θt) dt − (1 − ω(Kt−, Pt))Kt− dqˆt, (5.62)
dPt = bP (Kt, Pt, θt) dt + σP Pt dWt, (5.63)
where the drift coefficients are given by
bK(K, P, C, θ) ∶= (1 − θ)Y (K) − C,
bP (K, P, C, θ) ∶= φY (K) − Z(θY (K)) − αP. (5.64)
59

Given a continuous function u ∶ S → R, we write u∗ for its upper semicontinuous envelope and u∗ for its lower semicontinuous envelope, defined respectively by
u∗(x) = lim sup
y→x
u(y), u∗(x) = lim inf
y→x u(y). (5.65)
According to the literature on viscosity solutions (see [7], or [2] and [24] for the discontinuous and continuous settings, respectively), we introduce the following test-function comparison principle:
Definition 5.8 (Local test functions). Let u be a locally bounded function on S.
(i) A function φ ∈ C2(S) is said to touch u from above at (k, p) if (u − φ)(k, p) = 0
and (u − φ)(k′, p′) ≤ 0 for (k′, p′) in a neighborhood of (k, p).
(ii) Analogously, φ touches u from below at (k, p) if (u − φ)(k, p) = 0 and (u −
φ)(k′, p′) ≥ 0 in a neighborhood of (k, p).
For any smooth test function f ∈ C2(S), the infinitesimal generator of the process (Kt, Pt) under a fixed control (C, θ) is
(LC,θf )(K, P ) = fK(K, P ) bK(K, P, C, θ) + fP (K, P ) bP (K, P, θ)
+
1
2 σ2
P P 2fP P (K, P ) + λ(P )(f (ω(K, P )K, P ) − f (K, P )), (5.66)
where the last term is the nonlocal jump operator representing the expected instantaneous effect of disasters on the function f . By applying the DPP over a short time horizon and using Itô’s formula for jump–diffusions, one obtains that v formally satisfies
ρv(K, P ) = sup
(C,θ)∈A(K,P ) {U (C, P ) + (LC,θv)(K, P )}. (5.67)
Since v need not be smooth, we proceed to a weak formulation in the sense of viscosity solutions.
Definition 5.9 (Viscosity sub- and supersolutions). Let u be a continuous function on S.
(a) u is a viscosity subsolution of (5.67) if, for all φ ∈ C2(S) and all points (k, p) where u − φ attains a local maximum,
ρu(k, p) ≤ sup
(C,θ)∈A(k,p) {U (C, p) + (LC,θφ)(k, p)}. (5.68)
(b) u is a viscosity supersolution if, for all φ ∈ C2(S) and all points (k, p) where u − φ attains a local minimum,
ρu(k, p) ≥ sup
(C,θ)∈A(k,p) {U (C, p) + (LC,θφ)(k, p)}. (5.69)
60

(c) u is a viscosity solution if it is both a subsolution and a supersolution.
The next result states that the value function of the control problem is indeed a viscosity solution of the HJB equation.
Theorem 5.10 (Value function as viscosity solution). Assume that:
(a) U (C, P ) is continuous and concave in C, with polynomial growth;
(b) Y, Z are locally Lipschitz and have linear growth;
(c) ω(K, P ) ∈ (0, 1) and λ(P ) are continuous with λ locally Lipschitz;
(d) for every (C, θ) ∈ A, the SDEs (5.62)–(5.63) admit a unique strong solution.
Then the value function v is continuous and is a viscosity solution of the HJB equation.
Proof. By the dynamic programming principle, for any stopping time τ and any admissible control (C, θ),
v(k, p) ≥ E [
ˆτ
0
e−ρsU (Cs, Ps) ds + e−ρτ v(Kτ , Pτ )] . (5.70)
Fix (K0, P0) and let φ be a C2 test function such that v−φ attains a local maximum at
(K0, P0). Applying Itô’s formula for jump-diffusions to e−ρtφ(Kt, Pt) on [0, τ ], taking expectations, and using the local optimality of (K0, P0), we obtain the inequality (5.68). The argument for supersolutions is analogous.
5.2.2 General jump–diffusion model
Unlike our previous models, the presence of a random measure with a stochastic intensity kernel λ(Pt, ζ) requires some modifications in the verification theorems for viscosity solutions of the value function v, due to the stronger interaction between the controlled states and the sizes of the jumps. To overcome this issue, we now make use of the recent developments in infinite–horizon recursive control provided in [20]. We focus on a modification of the model (2.37)–(2.39) containing both a Poisso-
nian and a Brownian component and impose an additional set of suitable assumptions, to be described next:
Assumptions 5.11.
(1) The set of admissible actions A ⊆ R≥0 × [0, 1] is compact.
61

(2) Let ω ̃ ∶ S × R≥0 → R≥0 be a measurable function such that
0 ≤ ω ̃(K, P, ζ) ≤ K, ∀(K, P ) ∈ S, ∀ζ ∈ R≥0.
Furthermore, there exists a measurable mapping lγ ∶ [0, ∞) → [0, 1] satisfying
∣lγ∣P,2 + ∣lγ∣P,m < ∞
for some m ≥ 2 with
∣lγ∣P,m ∶= (
ˆ
[0,∞)2 ∣lγ(ζ, r)∣m ν(dζ) ⊗ dr)
1
m , ∀P ∈ R>0,
such that for all (K, P ), (K′, P ′) ∈ S, ζ, r ∈ [0, ∞), (C, θ) ∈ A,
∣ω ̃(K, P, ζ) 1[0,λ(P,ζ)](r) − ω ̃(K′, P ′, ζ) 1[0,λ(P ′,ζ)](r)∣
≤ lγ(ζ, r)(∣K − K′∣ + ∣P − P ′∣).
(3) Let bK and bP be as in (5.64) for some given functions Y and Z, representing the production and efficiency of abatement, respectively. There exist constants lb ≥ 0 and αb > 0 such that for all (K, P ), (K′, P ′) ∈ S, (C, θ) ∈ A,
∣b ̃K(K, P, C, θ) − b ̃K(K′, P ′, C, θ)∣ + ∣bP (K, P, C, θ) − bP (K′, P ′, C, θ)∣
≤ lb(∣K − K′∣ + ∣P − P ′∣),
(b ̃K(K, P, C, θ) − b ̃K(K′, P ′, C, θ))(K − K′)
+(bP (K, P, C, θ) − bP (K′, P ′, C, θ))(P − P ′)
≤ −αb(∣K − K′∣2 + ∣P − P ′∣2),
where
b ̃K(K, P, C, θ) ∶= bK(K, P, C, θ) −
ˆ
(0,∞)
ω ̃(K, P, ζ) λ(P, ζ) ν(dζ).
(4) The utility function U (C, P ) is Lipschitz on P .
(5) Let m ≥ 2 be as in the previous point. The following inequality holds
2αb − (m − 1)σ − 2cm
m ∣lγ∣2
P,2 − cm∣lγ∣m
P,m > 0,
with
cm ∶=
⎧⎪⎪⎨⎪⎪⎩
m(m−1)
2 − 1, if 2 < m < 3,
2m − 4, if m = 2 or m ≥ 3.
62

Some comments regarding the previous assumptions: 5.11.(1) is a well–known sufficient condition for the minimization of the Hamiltonian at any given instant t; Assumptions 5.11.(2), 5.11.(3) and 5.11.(4) correspond to standard regularity conditions from the theory of forward–backward SDEs, with 5.11.(2) being the Lipschitz regularity of the jump component in terms of the extended Poisson space, i.e. the underlying random measure N from Assumption 3.1, while also maintaining the economic interpret-
ation that disasters destroy part of the capital; lastly, 5.11.(5) is a technical assumption linking the convexity of the value function to the regularity of the jump sizes. This last point is explored with more detail in [20].
Definition 5.12. Let A ⊆ R≥0 × [0, 1] be compact. For m ≥ 2 and t ≥ 0, the set of admissible controls at time t is defined as
A
m
t ∶= {(C, θ) ∶ Ω × [t, ∞) → A ∣ (C, θ) is F–predictable, and
E[
ˆ∞
t
max{C 2
s , Cm
s }ds∣Ft] < ∞}.
With the assumptions set, we are ready to present the main result of this section. In what follows, we use integral notation on the SDEs in order to clarify the forward and backward components.
Theorem 5.13. Under our standing assumptions, the following hold:
(a) For every (C, θ) ∈ Am
0 , there exists a strong unique solution to the system of forward-backward SDEs in infinite time horizon:
Kt = K0 +
ˆt
0
b ̃K(Ks, Ps, Cs, θs) dt
−
ˆ
(0,t]×(0,∞)×(0,∞)
ω ̃(Ks, Ps, ζ) 1[0,λ(Ps,ζ)](r) N ̃ (ds, dζ, dr),
Pt = P0 +
ˆt
0
bP (Ks, Ps, Cs, θs) dt +
ˆt
0
σP Ps dWs,
with K0 = k, P0 = p > 0 for all t ≥ 0, and
V
t = VT +
ˆT
t (U (Cs, Ps) − ρVs)ds −
ˆT
t ZsdWs (5.71)
−
ˆ
(t,T ]×(0,∞)×(0,∞) Us(ζ, r)N ̃ (ds, dζ, dr),
for all 0 ≤ t ≤ T < ∞.
63

(b) There exists a unique viscosity solution v(⋅) to the HJB (3.61). Moreover:
V
0 = sup
(C,θ)∈Am
0
J(k, p; C, θ) = J(k, p; Cˆ, θˆ) = v(k, p), (5.72)
where
J(k, p; C, θ) = E[
ˆ∞
0
e−ρtU (Ct, Pt) dt ∣ K0 = k, P0 = p].
(c) Conversely, if v is a classical (respectively, viscosity) solution to the HJB (3.61), such that for the maximizer of the Hamiltonian at time t there exists an admissible control (Cˆ, θˆ) ∈ Am
t for all t ≥ 0, and the previous forward–backward
SDE has a strong solution for the control (Cˆ, θˆ); then (Cˆ, θˆ) is an optimal control and v is the corresponding value function.
Before presenting the proof of the previous theorem, we briefly illustrate how the BSDE in infinite time horizon (5.71) encodes the information corresponding to the original objective functional J from (2.13). Let (V, Z, U) be a solution to the infinite–horizon BSDE (5.71). An application of Itô’s formula to g(t, Vt) with
g(t, x) = e−ρtx yields
e−ρT VT − e−ρtVt = −
ˆT
t
e−ρsU (Cs, Ps)ds +
ˆT
t
e−ρsZsdWs
+
ˆ
(t,T ]×(0,∞)×(0,∞) Us(ζ, r)N ̃ (ds, dζ, dr),
∀0 ≤ t ≤ T < ∞.
Then, applying conditional expectations with respect to Ft, the following recursive relation for the running utility is obtained:
V
t = E[e−ρ(T −t)VT +
ˆT
t
e−ρ(s−t)U (Cs, Ps)ds∣Ft], ∀0 ≤ t ≤ T < ∞. (5.73)
In other words,
V
t = lim inf
T →∞ E[e−ρ(T −t)VT +
ˆT
t
e−ρ(s−t)U (Cs, Ps)ds∣Ft], ∀t ≥ 0,
from where we can deduce the necessity of the usual transversality condition
lim inf
T →∞ E[e−ρT VT ] = 0
in order to obtain
V
0 = lim inf
T →∞ E[
ˆT
0
e−ρsU (Cs, Ps)ds],
64

see Lemma 3.2 in [20]. It is worth noting that the type of recursive relation presented in (5.73) – hence the name recursive utility – has been known in literature; in the realm of randomized settings, we would like to point out to the pioneer work Duffie and Epstein [11] on stochastic differential utility. Once the relation between BSDEs and the objective functional has been established, the proof of the main result reduces to verifying the conditions required in [20]:
Proof of Theorem 5.13. Let
f (K, P, C, θ, V) = U (C, P ) − ρV,
and observe that for all t ≥ 0, (C, θ) ∈ A, (K, P ), (K′, P ′) ∈ S and V, V′ ∈ R,
∣f (K, P, C, θ, V) − f (K′, P ′, C, θ, V′)∣ ≤ lU ∣P − P ′∣ + ρ∣V − V′∣,
(f (K, P, C, θ, V) − f (K, P, C, θ, V′)) ⋅ (V − V′) ≤ −ρ∣V − V′∣2,
for some nonnegative Lipschitz constant lU . This, coupled with Assumptions 5.11,
means that the main conditions (C1)p, (C2), (C3) and (C4)′ of [20] hold true, with p and ρ in their paper corresponding to m and 1 in our current setting, respectively. Consequently, most of the results of Theorem 5.13 are obtained from propositions in [20]: 5.13.(a) is due to Lemmas 3.1 and 3.2; the equality of (5.72) in 5.13.(b) corresponds to Theorem 4.7; and the verification results from 5.13.(c) are obtained through Theorems 5.2 and 5.7 for the classical and viscosity solution cases, respecti-
vely.
Before closing this section, we point out that, although Assumptions 5.11 may exclude some of the models considered before, the present framework could be extended to include them. More precisely, ω ̃ and U are now assumed to be globally Lipschitz in the state variables, rather than merely locally Lipschtiz as in previous sections, see Theorem 5.10. This is a technical restriction due to the approach taken by [20], which requires the existence of strong solutions to BSDEs with infinite time horizo-
n in order to proof the existence of a unique viscosity solution v to the HJB equation (3.61). This does not contradict our previous statements, since points 5.13.(a) and 5.13.(b) of Theorem 5.13 fall within the scope of 5.10, but it does affect the verification result from the theorem, i.e. point 5.13.(c). We conjecture that these conditions of global Lipschitz regularity can be weakened, for example, by extending the results in [1] that ensure the existence of strong solutions to BSDEs with loca-
lly Lipschitz coefficients from a finite to an infinite time horizon setting, or the ones found in [23] to include locally Lipschitz drivers.
65

6 Conclusion
In this paper we have developed a unified stochastic control framework for growthenvironment models in which the intensity and severity of rare disasters are endogenously linked to the state of pollution. Building on the setup of [4], we formulated the social planner’s problem on an infinite horizon with capital and pollution evolving according to controlled jump(–diffusion) dynamics, where disasters destroy a state–dependent fraction of the capital stock while their arrival intensity may depend o-
n pollution (and, in the most general specifications, on additional marks and sources of randomness). Within this framework we defined the value function and characterized optimal trade–offs between consumption, investment, and abatement under environmentally driven catastrophe risk. From a modelling perspective, our contribution has been to organize several specifications that have appeared in the economics and climate literature into a single, mathematically coherent hierarchy. We began with the-
 benchmark case of a standard Poisson process with constant arrival intensity. We then allowed the intensity to depend on pollution via a nonhomogeneous Poisson process, thereby capturing feedback from environmental degradation to catastrophe risk. Next, we introduced Brownian noise into the pollution dynamics, leading to jump–diffusion models and integro–differential HJB equations with both local (diffusive) and nonlocal (jump) terms. At the most general level, we showed how all these cases can b-
e embedded in a formulation driven by a Poisson random measure with state–dependent compensator and random marks, which accommodates both random disaster magnitudes and randomized pollution dynamics within a coherent stochastic framework. This nesting clarifies the precise sense in which models with pollution–driven disaster intensity extend the constant–intensity benchmark and provides a common language for comparing them. On the analytical side, we derived the associated Hamilton–Jacobi–Bellman -
equations from the dynamic programming principle, both for the simpler purejump models and for the jump–diffusion and Poisson random measure specifications. For the sufficiently regular case we have stated a verification theorem for classical solutions (Theorem 5.1), identifying conditions under which a C2 solution to the HJB equation indeed coincides with the value function and yields optimal feedback controls, and we showed how the functional form of the HJB equation and the structure of the opt-
imality conditions evolve as the jump mechanism becomes richer. When such regularity cannot be guaranteed, we have shown that the value function is a viscosity solution of the HJB equation (Theorem 5.10) under natural assumptions on preferences, production, abatement, and the jump mechanism. In the most general setting, where pollution is affected by both Brownian motion and Poisson random measures, we have further characterized the value function by means of forward-backward stochastic differenti-
al equations with jumps. Theorem 5.13 shows that, under the standing assumptions, the value function can be represented as the
66

solution of a suitable infinite–horizon FBSDE, and conversely, that solutions of the associated FBSDE system correspond to (classical or viscosity) solutions of the HJB equation. This closes the loop between the stochastic control formulation, its PIDE representation, and the FBSDE approach, and it provides a flexible analytical and numerical toolbox for studying pollution–driven disaster models. The flexibility of the random–measure approach opens the way for a wide range of extensions: richer d-
amage functions, nonlinear or threshold intensities, endogenous technological progress in abatement, spatial diffusion of pollution, and etc. Each of these avenues promises deeper insights into the design of robust climate and environmental policies under uncertainty. While our focus has been on the mathematical structure of pollution–driven disaster models, the framework is sufficiently general to accommodate a variety of economically relevant extensions. For instance, one can incorporate more de-
tailed damage functions linking pollution to the distribution of disaster sizes, allow for multiple types of pollutants and capital stocks, let technological and policy parameters evolve according to additional diffusive or jump components, or strategic interaction among multiple agents (e.g. regions), leading to game–theoretic control problems. On the analytical side, natural extensions include studying state–constraint problems (e.g. at zero capital or pollution) and analyzing models with learni-
ng about the disaster intensity, which would lead to robust control formulations and HJB equations with additional nonlinearity. Thus, the paper develops a unified framework for analyzing the interplay between economic growth, environmental policy, and the risk of rare but destructive events. In particular, it highlights that sustainability in the presence of deep uncertainty requires not only gradual adjustments but also resilience against rare disasters. The models developed here achieve both tr-
actability and generality, providing a rigorous analytical foundation and constructive tools to characterize and solve the stochastic control problems governing the long–run interaction between the economy and the environment.
Acknowledgments
Joshué Helí Ricalde-Guerrero gratefully acknowledges the support of the SNF project MINT 205121-21981.
67

References
[1] K. Abdelhadi and N. Khelfallah. Locally Lipschitz BSDE with jumps and related Kolmogorov equation. Stochastics and Dynamics 22.05 (Aug. 2022), 2250021. issn: 0219-4937, 1793-6799. doi: 10.1142/S0219493722500216. URL https://www.worldscientific.com/doi/10.1142/S0219493722500216.
[2] G. Barles and C. Imbert. Second-order elliptic integro-differential equations: viscosity solutions’ theory revisited. Annales de l’Institut Henri Poincaré C, Analyse non linéaire 25.3 (June 2008), 567–585. issn: 0294-1449, 1873-1430. doi: 10.1016/j.anihpc.2007.02.007. URL https://ems.press/doi/10.1016/ j.anihpc.2007.02.007.
[3] V. I. Bogachev. Measure Theory. Springer Berlin Heidelberg, 2007. isbn: 9783-540-34513-8 978-3-540-34514-5. doi: 10.1007/978-3-540-34514-5. URL http: //link.springer.com/10.1007/978-3-540-34514-5.
[4] A. Brausmann and L. Bretschger. Escaping Damocles’ Sword: Endogenous Climate Shocks in a Growing Economy. Environmental and Resource Economics 87.6 (June 2024), 1545–1592. issn: 0924-6460, 1573-1502. doi: 10.1007/s10640023-00835-w. URL https://link.springer.com/10.1007/s10640- 02300835-w.
[5] P. Brèmaud. Point Process Calculus in Time and Space: An Introduction with Applications. 98. Probability Theory and Stochastic Modelling. Springer International Publishing, 2020. isbn: 978-3-030-62752-2 978-3-030-62753-9. doi: 10.1007/978-3-030-62753-9. URL http://link.springer.com/10.1007/9783-030-62753-9.
[6] S. N. Cohen and R. J. Elliott. Stochastic calculus and applications. 2nd ed. Probability and Its Applications. Birkhäuser, 2015. isbn: 978-1-4939-2867-5.
[7] M. G. Crandall, H. Ishii, and P.-L. Lions. User’s guide to viscosity solutions of second order partial differential equations. Bulletin of the American Mathematical Society 27.1 (1992), 1–67. issn: 0273-0979, 1088-9485. doi: 10.1090/S02730979-1992-00266-5. URL https://www.ams.org/bull/1992-27-01/S02730979-1992-00266-5/.
[8] D. J. Daley and D. Vere-Jones. An Introduction to the Theory of Point Processes. Volume I: Elementary Theory and Methods. Probability and its Applications. Springer-Verlag, 2003. isbn: 978-0-387-95541-4. doi: 10.1007/b97277. URL http://link.springer.com/10.1007/b97277.
[9] D. J. Daley and D. Vere-Jones. An Introduction to the Theory of Point Processes. Volume II: General Theory and Structure. Probability and Its Applications. Springer, 2008. isbn: 978-0-387-21337-8 978-0-387-49835-5. doi: 10.1007/978-0-387-49835-5. URL http://link.springer.com/10.1007/9780-387-49835-5.
68

[10] A. K. Dixit and R. S. Pindyck. Investment under Uncertainty. Princeton University Press, July 2012. isbn: 978-1-4008-3017-6. doi: 10.2307/j.ctt7sncv. URL http://www.jstor.org/stable/10.2307/j.ctt7sncv.
[11] D. Duffie and L. G. Epstein. Stochastic Differential Utility. Econometrica 60.2 (Mar. 1992), 353. issn: 00129682. doi: 10.2307/2951600. URL https: //www.jstor.org/stable/2951600?origin=crossref.
[12] G. B. Folland. Real analysis: modern techniques and their applications. 2. ed. A Wiley-Interscience publication. Wiley, 1999. isbn: 978-0-471-31716-6.
[13] M. G. Garroni and J. L. Menaldi. Second Order Elliptic Integro-Differential Problems. 0th. Chapman and Hall/CRC, Feb. 2002. isbn: 978-0-429-18690-5. doi: 10.1201/9781420035797. URL https://www.taylorfrancis.com/books/ 9781420035797.
[14] I. I. Gichman, A. V. Skorochod, I. I. Gichman, and I. I. Gichman. Stochastic differential equations. Ergebnisse der Mathematik und ihrer Grenzgebiete N.F., 72. Springer, 1972. isbn: 978-0-387-05946-4 978-3-642-88266-1 978-3-642-882647 978-3-540-05946-2.
[15] D. Hernández-Hernández and J. H. Ricalde-Guerrero. Mean-Field Games with common Poissonian noise: a Maximum Principle approach. (Submitted). 2024. doi: 10.48550/ARXIV.2401.10952. URL https : / / arxiv . org / abs / 2401 . 10952.
[16] D. Hernández-Hernández and J. H. Ricalde-Guerrero. Coupled forwardbackward stochastic differential equations with jumps in random environments. Stochastic Analysis and Applications (2025). Accepted (Preprint available). doi: 10.48550/ARXIV.2307.14318. URL https://arxiv.org/abs/2307.14318.
[17] J. Jacod and A. N. Shiryaev. Limit Theorems for Stochastic Processes. 288. Grundlehren der mathematischen Wissenschaften. Springer Berlin Heidelberg, 2003. isbn: 978-3-642-07876-7 978-3-662-05265-5. doi: 10.1007/978-3-66205265-5. URL http://link.springer.com/10.1007/978-3-662-05265-5.
[18] J. F. C. Kingman. Poisson processes. Oxford studies in probability 3. Clarendon Press ; Oxford University Press, 1993. isbn: 978-0-19-853693-2.
[19] L. Lesage, M. Deaconu, A. Lejay, J. A. Meira, G. Nichil, and R. State. Hawkes Processes Framework With a Gamma Density As Excitation Function: Application to Natural Disasters for Insurance. Methodology and Computing in Applied Probability 24.4 (Dec. 2022), 2509–2537. issn: 1387-5841, 1573-7713. doi: 10.1007/s11009-022-09938-1. URL https : / / link . springer . com / 10 . 1007/s11009-022-09938-1.
69

[20] S. Luo, X. Li, and Q. Wei. Infinite Time Horizon Stochastic Recursive Control Problems with Jumps: Dynamic Programming and Stochastic Verification Theorems. SIAM Journal on Control and Optimization 63.2 (Apr. 2025), 796821. issn: 0363-0129, 1095-7138. doi: 10.1137/24M1685080. URL https:// epubs.siam.org/doi/10.1137/24M1685080.
[21] A. Mas-Colell, M. D. Whinston, and J. R. Green. Microeconomic theory. Oxford Univ. Press, 1995. isbn: 978-0-19-507340-9 978-0-19-510268-0.
[22] B. Øksendal and A. Sulem. Applied Stochastic Control of Jump Diffusions. Universitext. Springer International Publishing, 2019. doi: 10.1007/978-3-03002781-0.
[23] A. Papapantoleon, D. Possamaï, and A. Saplaouras. Existence and uniqueness results for BSDE with jumps: the whole nine yards. Electronic Journal of Probability 23 (Jan. 2018), 1–68. issn: 1083-6489, 1083-6489. doi: 10.1214/18-EJP240. URL https://projecteuclid.org/journals/electronic- journal- ofprobability / volume - 23 / issue - none / Existence - and - uniqueness results-for-BSDE-with-jumps--the/10.1214/18-EJP240.full.
[24] H. Pham. Continuous-time Stochastic Control and Optimization with Financial Applications. 61. Stochastic Modelling and Applied Probability. Springer Berlin Heidelberg, 2009. isbn: 978-3-540-89499-5 978-3-540-89500-8. doi: 10.1007/978-3-540-89500-8. URL https : / / link . springer . com / 10 . 1007/978-3-540-89500-8.
[25] P. Przybyłowicz, M. Szölgyenyi, and F. Xu. Existence and uniqueness of solutions of SDEs with discontinuous drift and finite activity jumps. Statistics & Probability Letters 174 (July 2021), 109072. issn: 01677152. doi: 10.1016/j.spl.2021.109072. URL https://linkinghub.elsevier.com/ retrieve/pii/S0167715221000341.
[26] J. Yong and X. Y. Zhou. Stochastic controls: Hamiltonian systems and HJB equations. Applications of Mathematics 43. Springer, 1999. isbn: 978-0-38798723-1.
70

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:46.677Z
- **Text Length:** 120705 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 70 of 70
