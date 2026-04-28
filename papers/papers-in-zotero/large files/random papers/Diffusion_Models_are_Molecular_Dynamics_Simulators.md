# PDF Document: Diamond and Lill - 2025 - Diffusion Models are Molecular Dynamics Simulators.pdf

**File Path:** Diamond and Lill - 2025 - Diffusion Models are Molecular Dynamics Simulators.pdf

**Processed Date:** 2026-02-10T18:13:41.373Z

**File Size:** 4065.38 KB

**Total Pages:** 36

**Extracted Pages:** 36

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3447

**Title:** Diffusion Models are Molecular Dynamics Simulators

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Chapter 2: Diffusion Models are Molecular Propagators
DIFFUSION MODELS ARE MOLECULAR DYNAMICS
SIMULATORS
Justin S. Diamond & Markus Lill
Department of Pharmaceutical Sciences Science University of Basel Basel, 4058, Switzerland
{justin.diamond}@unibas.ch
ABSTRACT
We show that a denoising–diffusion sampler equipped with a harmonic adaptera quadratic coupling with an offset that ties neighbouring reverse-time iterates—is exactly an Euler–Maruyama (EM) integrator for overdamped Langevin dynamics. One reverse step with spring stiffness k integrates the SDE with implicit step size ∆t = β/(2k); the drift is the learned score (or energy gradient). This identity reframes molecular dynamics (MD) through diffusion: the accuracy of trajectories and equilibrium statis-
tics is controlled by two dials, model capacity (via universal approximation of the drift) and the number of denoising steps N , rather than by a fixed, tiny MD timestep.
The practical consequence is a data-driven MD framework that learns forces for free from i.i.d. configurations, requires no hand-crafted force fields, and can be run with a small, distillable number of reverse steps while preserving the Boltzmann law of the learned energy. We prove pathwise KL bounds that separate discretisation error O(P
n ∆t2) from score error, show how temperature enters through the spring, and demonstrate MD-like temporal correlations on molecular trajectories generated entirely by a score model trained on static samples.
1 INTRODUCTION
Diffusion models have reshaped generative modeling, from vision to molecular data Sohl-Dickstein et al. (2015); Ho et al. (2020); Song et al. (2020), delivering high-fidelity samples and robust likelihood surrogates Karras et al. (2022). In molecular modeling, however, the objective is not merely to match static distributions but to generate configurations that are consistent with physical constraints and thermodynamics Noe ́ et al. (2019). Classical approaches such as Langevin Molecular Dynamics -
(LMD) Ermak & McCammon (1978); Leimkuhler & Matthews (2015) integrate stochastic differential equations to evolve systems in time, enabling exploration of conformational landscapes and analysis of dynamical processes Schlick (2010).
A central difficulty shared by both diffusion samplers and LMD is sampling from complex, highdimensional non-iid target distributions. Molecular interactions (covalent bonding, electrostatics, van der Waals forces) induce long-range and multi-scale correlations that invalidate iid assumptions and complicate both inference and analysis Frenkel & Smit (2002). Recent diffusion models specialized to molecules seek to respect these structures Xu et al. (2022); Anand et al. (2022), including symmetry-eq-
uivariant formulations that help preserve physical invariances Hoogeboom et al. (2022). Yet ensuring that generated samples obey physical laws and exhibit meaningful temporal statistics remains challenging.
Temporal correlations are especially important for scientific use cases. Numerical solvers for ODE/SDEs produce trajectories via sequential updates that encode short-time physics and enable computation of path-dependent observables Hairer et al. (2006). Such trajectories underpin studies of folding kinetics and reaction mechanisms Dill et al. (2012). By contrast, standard diffusion sampling treats reverse-time updates as conditionally independent draws, which yields excellent equilibria but discar-
ds dynamical structure.
arXiv:2511.17741v1 [cs.LG] 21 Nov 2025

Chapter 2: Diffusion Models are Molecular Propagators
Bridging these views motivates introducing structured interactions into the reverse process. In diffusion models, non-iid noise or couplings can emulate dependencies analogous to those in MD; however, analyzing the correctness and convergence of such modifications is subtle Song & Ermon (2021). Our perspective is to endow reverse-time iterations with a simple, harmonic adapter—a quadratic coupling with an offset that ties neighboring reverse steps—so that each denoising update admits a physically -
interpretable meaning.
Key idea (in one line). We show that a denoising–diffusion sampler equipped with a harmonic adapter performs, step-for-step, the Euler–Maruyama (EM) update for overdamped Langevin dynamics at an implicit resolution ∆t = β/(2k) determined by the spring stiffness k. In effect, the denoising grid becomes a controllable resolution dial for MD-like trajectories, while retaining the probabilistic benefits of diffusion.
Why this matters (computational pain point). Molecular scientists routinely need trajectories spanning micro- to millisecond scales to compute kinetics, nonequilibrium responses, and transport properties. A standard LMD integrator with a 2 fs step requires ∼109 updates to reach 2 μs of simulated time, often translating into days of wall-clock GPU time even with aggressive parallelization. In contrast, score-based diffusion can produce equilibrium-quality conformations in tens of reverse steps afte-
r distillation, suggesting a path to 102–103× reductions in wall-clock cost without abandoning statistical exactness in the learned energy.
Contributions. (1) We provide an exact algebraic identity: one reverse denoising step with a harmonic adapter equals one EM step for overdamped Langevin, with drift given by the learned score/energy gradient and noise given by the EM Gaussian. (2) This identity yields a clean accuracy budget that separates model (score) error from grid (reverse-schedule) error, and supports principled temperature/variance control during inference. (3) The same quadratic coupling enables fully time-parallel executi-
on: batches index trajectory slices that can be updated simultaneously while preserving the correct local-in-time law. (4) Empirically, glued trajectories reproduce ensemble statistics and exhibit MD-like temporal correlations on the learned energy landscape on open-source pretrained models, enabling trajectory-level observables at diffusion costs.
Outlook. Treating reverse-time diffusion as an MD integrator on the learned potential opens a route to trajectory generators with physical semantics, modular coupling to MCMC and enhanced sampling, and higher-order adapters—all while retaining the scalability and training simplicity that make diffusion attractive in the first place.
FROM TRAJECTORIES TO EQUILIBRIA—AND BACK AGAIN
A diffusion model with a simple quadratic (harmonic) coupling between consecutive reverse-time iterates is an MD integrator in disguise. Section H.2 formalises this: completing the square in the exact EM transition shows that the reverse kernel of denoising–diffusion with the harmonic offset coincides with the EM kernel
xn+1 = xn − ∆t ∇Vθ(xn) +
√
2D ∆t ξn, ∆t = β
2k .
Here ∇Vθ is the score/energy gradient learned from i.i.d. data. In this reframing, time resolution is no longer a hard bottleneck: fidelity is governed by (a) how well the network approximates the true drift (universal approximation) and (b) how many reverse steps we choose (which we can distil to a few dozen without retraining the score).
Standard Langevin MD advances at femtosecond timesteps to remain stable; reaching microseconds requires ∼106 steps. Diffusion samplers, by contrast, operate on a coarse reverse-time grid whose size we can set for inference. The harmonic adapter makes this more than an analogy: one reverse step is one EM step, with an implicit ∆t encoded by the spring. Thus, long-time, MD-like trajectories (and time-correlated observables such as dihedral autocorrelations) can be generated with wall-clock cost prop-
ortional to the number of denoising iterations, not the micro-timestep count of MD.
Training requires only static, i.i.d. configurations. A denoising objective learns the score ∇ log p; we view Eθ := − log pθ as a learned energy whose gradient plays the role of a force field. No bespoke

Chapter 2: Diffusion Models are Molecular Propagators
bonded/non-bonded decomposition or parameter fitting is needed. The resulting sampler integrates the learned energy landscape with EM accuracy, and a one-step Metropolis check (optional) makes the terminal law exactly Boltzmann in Eθ.
The adapter penalises the mismatch xn+1 − xn + ∆t ∇Vθ(xn) with stiffness k = β/(2∆t). Be
cause the mismatch is O(√∆t), the quadratic energy contributes only O(∆t) to the exponent; the continuum limit is well behaved. Operationally, this turns independent denoising updates into a time-correlated trajectory consistent with Langevin physics.
Accuracy separates cleanly into score error and grid error. Our pathwise bound (Sec. 3.4) shows
DKL L(X ̃[0,T ]) ∥ L(X[0,T ]) ≤ T ε ̄2 + C
N −1
X
n=0
∆t2.
so better networks (universal approximation) and fewer but suitably chosen reverse steps N jointly control fidelity. In practice, distilled schedules with N ∈ [10, 50] already reproduce MD-like autocorrelations while costing orders of magnitude less than conventional MD.
This viewpoint recasts “force fields” as learned scores trained on i.i.d. data and turns MD into generative inference. Temperature enters only via the spring (k = β/(2∆t)), enabling explicit control of effective temperature and correlation length at inference, and opening the door to time-parallel sampling and easy coupling to other stochastic algorithms (MCMC, metadynamics, alchemy) without redesigning the network.
The rest of the paper is organized as follows: we provide background on diffusion models and present our theoretical framework showing equivalence between diffusion models with harmonic bias and LMD. We discuss the implications for parallelization across time steps and the potential for efficient simulation of molecular systems. In the appendix we discuss in depth the equivalence, illustrate results related to the underdamped langevin diffusion, and discuss future work about using this formalism t-
o do MCMC, Metadyanmics, and Alchemical Free Energy estimations in parallel.
Figure 1: Left: traditional i.i.d. diffusion sampling ignores temporal structure. Right: our harmonically-coupled sampler recovers time-correlated trajectories consistent with MD.
2 DEFINITIONS, NOTATION, AND WHAT IS PROVEN
2.1 OVER-DAMPED LANGEVIN DYNAMICS (CONTINUOUS TIME)
Units and constants. Throughout we choose friction units such that
γ = 1 =⇒ D = kBT
γ = kBT, βD = 1.
Stating this explicitly prevents hidden factors of γ or kB from re-appearing later.

Chapter 2: Diffusion Models are Molecular Propagators
A single particle in a conservative potential V : Rd → R at temperature T therefore obeys
dx(t) = −∇V x(t) dt +
√
2D dw(t), D = kBT, β = 1/D. (1)
2.2 EULER–MARUYAMA TIME DISCRETISATION
Discretising the overdamped Langevin SDE equation 28 with a fixed step size ∆t > 0 gives the classical Euler–Maruyama (EM) integrator
xn+1 = xn − ∇V (xn) ∆t +
√
2D ∆t ξn, ξn ∼ N (0, Id). (2)
Hence, **conditioned on xn**, the next point xn+1 is Gaussian
p(xn+1 | xn) = exp − β
4D∆t ∥xn+1 − xn + ∆t ∇V (xn)∥2
(4πD∆t)d/2 . (3)
This is the **exact** EM transition kernel; no other terms appear in the exponent.
2.3 HARMONIC REFORMULATION (“QUADRATIC GLUE”)
For later use it is convenient to rewrite equation 30 as a Boltzmann factor with a quadratic coupling (the harmonic adapter)
p(xn+1 | xn) = Z(xn)−1 exp
h
−β k(∆t)
2 xn+1 − xn + ∇V (xn)∆t 2i
, (4)
k(∆t) = 1
2D∆t . (5)
A key observation is that the mismatch xn+1 − xn + ∇V (xn)∆t = O(√∆t), so the spring en
ergy contributes only O(∆t) to the exponent even though the stiffness k(∆t) ∼ ∆t−1 diverges. Consequently the limit ∆t → 0 remains well behaved and the kernel equation 31 converges to the continuum Langevin propagator, §H.
3 IMPLICATIONS FOR SCORE-BASED (DENOISING–DIFFUSION) MODELS
3.1 FROM IID DENOISING TO MOLECULAR DYNAMICS: THE EQUIVALENCE PRINCIPLE
Key message. With the harmonic (quadratic) adapter, each reverse-diffusion step is exactly an Euler–Maruyama (EM) step for overdamped Langevin with step ∆t. Thus, if the score/force proxy equals the true force and the denoising grid is refined, the glued diffusion paths converge to MD trajectories targeting the same Boltzmann law. The spring k is not a heuristic: it is the EM stiffness k(∆t) = 1
2D∆t = β
2∆t (Eq. (10), *p. 6*). In practice, this gives a clean mapping between diffusion
time and MD time and explains the “resolution dial” observed in the figures (e.g., Fig. 1 on *p. 3*, Figs. 7–9 on *p. 11*).
We use friction units βD = 1. Let V : Rd → R be the physical potential (unknown or known), and
πβ(dx) ∝ e−βV (x) dx
the target density.
3.2 IID BASELINE: TRAINING OBJECTS AND LEARNED ENERGY
Let pt be the data density after IID Gaussian corruption with variance σt2 = 2Dt. A standard denoising objective fits the time-dependent score
siid
t (x) ≈ ∇x log pt(x).
For notational clarity we also define a learned energy
Eθ(x) := − log pθ(x) + const, ∇Eθ(x) = −siid
0 (x). (6)
Either sitind (time-dependent) or ∇Eθ (time-0) can be used at inference as a drift proxy gn.

Chapter 2: Diffusion Models are Molecular Propagators
Universal approximability of the force/score (assumption → guarantee). On compact sets K ⊂ Rd, standard universal approximation results imply that neural nets can approximate smooth maps and their gradients uniformly. We capture this as a modeling hypothesis:
Assumption 1 (Universal approximation of the drift). There exists a sequence g(m) (e.g., scores/energies with increasing capacity or better training) such that supx∈K ∥ g(m)(x) − ∇V (x)∥ → 0 as m → ∞.
Assumption 1 is the bridge that lets the learned drift substitute for the physical force in Theorem 2 below.
3.3 INFERENCE WITH QUADRATIC GLUE (HARMONIC ADAPTER)
Fix a denoising step ∆t > 0 and set
mn := xn − D∆t gn(xn), k(∆t) = 1
2D∆t = β
2∆t . (7)
Conditioned on xn, the next state is drawn from the Gaussian kernel
p(xn+1 | xn) = exp − β
4D∆t ∥xn+1 − mn∥2
(4πD∆t)d/2 . (8)
This is precisely the EM kernel with drift −gn (compare the quadratic-glue Boltzmann form in §H.1.3). The algebraic identity k(∆t) = β/(2∆t) makes ∆t an implicit resolution scale controlled by the spring (Eq. (10), *p. 6*).
Optional exactness for the learned energy. Appending one Metropolis–Hastings accept/reject step with target ∝ e−βEθ makes the terminal law exactly Boltzmann on Eθ, with acceptance 1 − O(∆t). In practice we omit MH for speed unless exact stationarity w.r.t. Eθ is required.
3.4 MAIN EQUIVALENCE AND LIMITING THEOREM (DIFFUSION ⇒ MD)
We now state the finite-grid bound and its limiting consequence. Let Xt solve the overdamped SDE
dXt = −∇V (Xt)dt + √2D dWt and let X ̃t be the piecewise-constant-drift interpolation of the glued sampler equation 8 on [0, T ] (same Brownian path). Suppose the inference drift satisfies a uniform error bound gn = ∇V + εn, supn,x ∥εn(x)∥ ≤ ε ̄.
Theorem 1 (Finite-schedule pathwise KL bound). With βD = 1, there is a constant C = C(D, L) depending on the Lipschitz constant L of ∇V such that
DKL L(X ̃[0,T ]) ∥ L(X[0,T ]) ≤ T ε ̄2 + C
N −1
X
n=0
∆t2.
Consequently, by Pinsker, ∥L(X ̃[0,T ]) − L(X[0,T ])∥TV ≤ 1
2
pT ε ̄2 + C P
n ∆t2.
Derivation sketch. On each interval [tn, tn+1), the glued drift equals −gn(xn). The exact drift is
−∇V (X ̃t). Girsanov gives DKL = 1
4D ER T
0 ∥ − gn(X ̃tn ) + ∇V (X ̃t)∥2dt. Split the gap into model
and Lipschitz parts: −εn(X ̃tn )+(∇V (X ̃tn )−∇V (X ̃t)). The first contributes 1
4D ε ̄2∆t per interval.
The second is bounded by L2E∥X ̃t − X ̃tn ∥2, and EM moment bounds give E∥X ̃t − X ̃tn ∥2 ≤
C′(t − tn). Integrate to obtain C∆t2 per interval and sum. (The same calculation underlies the quadratic-glue view in Chapter 2, §2.3–3.2.) QED.
Theorem 2 (Diffusion ⇒ MD in the fine-grid/universal-approximation limit). Let T > 0 be fixed. Let ∆tN → 0 with N ∆tN → T , and let g(m) satisfy Assumption 1 on compacts. Then there exist sequences N → ∞ and m → ∞ (refining grid and model) such that
DKL L(X ̃ (N,m)
[0,T ] ) ∥ L(X[0,T ]) → 0, ∥L(X ̃ (N,m)
[0,T ] ) − L(X[0,T ])∥TV → 0.
Equivalently, for every bounded Lipschitz path functional F , |EF (X ̃ (N,m)
· ) − EF (X·)| → 0.

Chapter 2: Diffusion Models are Molecular Propagators
Proof. Apply Theorem 1 with ε ̄ = ε ̄(m) → 0 (Assumption 1) and P
n ∆t2
N ≤ T maxn ∆tN → 0. Pinsker gives TV convergence; bounded-Lipschitz convergence follows. QED.
The harmonic-glued diffusion sampler is an MD integrator in disguise: in the fine-grid/universal score limit it reproduces overdamped Langevin on V . In particular, time-correlated observables (ACFs, Green–Kubo integrals), free-energy path estimators, and equilibrium statistics computed from glued paths converge to their MD counterparts. This explains the empirical MD-like trajectories and resolution/ESS effects observed in the chapter’s experiments and figures (e.g., Figs. 10–17).
Parallelism and speed. Each step is one Gaussian draw centered at equation 7; all batch elements update independently. Combined with distillation to small N , this yields orders-of-magnitude wall-clock reductions for long effective times.
3.5 CONTINUOUS-TIME LIMIT
With D = β−1 the mean drift of equation 8 reproduces, up to o(∆t), the reverse-time SDE
dxt = −siid
t (xt) dt +
√
2D dw ̄ t, (9)
so that, as ∆t → 0, the generated path converges weakly to continuous-time Langevin dynamics on the unknown potential Eθ.
Because every update is a single Gaussian draw whose centre equation 7 involves only a forward call to the score network, the wall-clock cost is identical to that of the i.i.d. sampler—yet it yields trajectory data amenable to downstream molecular analysis.
3.6 SUMMARY ALGORITHM (PSEUDOCODE)
Algorithm 1 Batch Euler–Maruyama sampler with Metropolis correction
Require: batch size B, total steps T , step size ∆t, score network sitid : Rd → Rd
1: Initialisation 2: for b = 0 to B do
3: Sample x0,b ∼ N (0, Id)
4: for t = 0 to T − 1 do ▷ generation index 5: for b = 0 to B do ▷ batch index 6: mt,b ← xt,b − ∆t sitid(xt,b) 7: Sample ξt,b ∼ N (0, Id)
8: xt+1,b ← mt,b + √2D∆t ξt,b ▷ quadratic-glue step 9: if Metropolis correction desired then 10: Accept xt+1,b with prob. αt,b
Decoupling the forward noise schedule from the spring. The forward-diffusion schedule σt is fixed during training and controls how strongly data are corrupted at each diffusion time t. The harmonic spring k acts only at inference. Choosing a larger k (smaller implicit ∆t) produces MD-like, highly correlated trajectories; choosing a smaller k flattens correlations and mixes faster, at the cost of a slightly larger O(∆t) bias that can be corrected with an optional one-step Metropolis check.
Conceptual distinction from conventional MD. MD integrators treat ∆t as a hard-coded parameter limited by stability (∆t ≲ 2 fs for bonded hydrogens). Harmonic-glue diffusion treats ∆t as a derived resolution scale. Stability is no longer a concern; larger ∆t merely weakens the spring and shortens autocorrelation lengths. Thus, in our framework ∆t is a resolution dial, while the primary user knob is the stiffness k that decorrelates samples at constant bias order O(∆t).
Noise scheduling (training) and spring stiffness (inference) serve orthogonal purposes: σt shapes the marginal score prior, whereas k sets the temporal resolution of the generated trajectory via

Chapter 2: Diffusion Models are Molecular Propagators
∆t = β/2k. Making this separation explicit resolves the apparent mismatch between MD time steps and reverse-diffusion iterations. Additionally, higher-order methods Kloeden & Platen (1992) emit other corresopnding batch neighboring relation as shown in Appendix C.
4 PARALLELIZATION ACROSS TIME STEPS VIA HARMONIC POTENTIALS
Traditional numerical methods for solving ordinary differential equations (ODEs) are inherently sequential, as the solution at each time step depends on the solution at the previous time step. This sequential nature poses challenges for parallel computing, especially in large-scale simulations of molecular systems where computational efficiency is critical Tuckerman (2010). Time-parallel integration schemes have been developed to overcome this limitation by enabling the simultaneous computation of-
 multiple time steps Gander & Vandewalle (2007).
We demonstrate how the formalism introduced earlier allows us to generalize time-parallel integration schemes into diffusion models for sampling molecular trajectories without costly matching terms and without initial sequential trajectory generation. By leveraging the harmonic adapter framework, we can parallelize the sampling procedure across time steps, significantly improving computational efficiency without compromising accuracy, and developing the first completely parallel algorithm for simu-
lating molecular dynamics.
We index time slices by n = 0, . . . , N and replicas within a parallel batch by i = 1, . . . , N , so xn
(i)
denotes replica i at time tn. Building upon the harmonic potential framework introduced previously, we consider the problem of sampling molecular trajectories using diffusion models. To enable parallel computation, we discretize the time interval [0, T ] into N subintervals with time points ti = i∆t, where ∆t = T /N . We introduce variables xi ≈ x(ti) for i = 0, 1, . . . , N . This is implicitly done by using batches.
The key insight is that the harmonic potential framework allows us to impose consistency between consecutive batch elements of the diffusion process thus enabling updates at different time steps to be computed simultaneously. Specifically, the interactions introduced by the harmonic adapter couple the variables {xi} in a parallel and identical way compared to sequential numerical solvers. The objective is to minimize a global function that incorporates both the fidelity to the dynamics dictated by-
 the diffusion model and the consistency between batch elements enforced by the harmonic potentials. Effectively, the trade off compared to conventional solvers is that we replace the sequential generation in the physical state-space (which could be millions of steps) with the sequential generation of the samples (with distillation the number of steps can possibly be arbitrarily small).
5 NUMERICAL VALIDATION OF THE DYNAMICS
We close with a single but stringent numerical experiment whose outcome is fully consistent with the theory developed in in the main text. Because all analytic claims were proved without recourse to ground-truth molecular energies, the empirical check merely has to confirm that the sampler behaves like an overdamped Langevin chain on its own learned energy landscape. Two complementary diagnostics are shown in Figs. 2–3. We use the pretrained models from Geodiff Xu et al. (2022) with the modular ha-
rmonic adapter. Further information on the technical implementation of the adapter can be found in §I .
5.1 ENSEMBLE STATISTICS: RADIUS-OF-GYRATION TRACES
Figure 2 compares the time series Rgdiff (t) produced by the harmonic-guided diffusion sampler with
the reference RgMD(t) obtained from 5 ns (1000 frames) of OpenMM Langevin dynamics for nine flexible different conformers. The diffusion trajectories are only T = 100 steps long yet reproduce the Rg distribution of the equilibrium MD run in approximately in all runs.
We have shown that the augmented Euler–Maruyama kernel preserves the implicit Boltzmann density approximately pθ(x) ∝ exp[−Eθ(x)] up to O(∆t). Since Rg is a one-body observable depending only on ∥x∥, coincidence of the diffusion and MD histograms is tantamount to confirming pθ ≃ pphys at the level of this observable.

Chapter 2: Diffusion Models are Molecular Propagators
Figure 2: Radius-of-gyration traces for nine C13 hydrocarbon conformers: diffusion sampler (centre) versus OpenMM reference (right). Each plot is cropped by a molecule-specific fraction to focus on the dynamic range of interest.
Molecule Diffusion Rg(t) OpenMM Rg(t)

Chapter 2: Diffusion Models are Molecular Propagators
Molecule Diffusion Rg(t) OpenMM Rg(t)
failed / no data
Figure 2: (continued) Remaining conformers (6–9). Diffusion and OpenMM agree well except for molecule 9, whose reference trajectory failed.

Chapter 2: Diffusion Models are Molecular Propagators
5.2 TEMPORAL STRUCTURE: BATCH–INDEX CORRELATION MATRIX
Figure 3: Batch–to–batch correlation map for the diffusion sampler. Each pixel shows the Pearson correlation between internal coordinates of two batch elements; warm colours indicate highly similar conformations. Insets highlight two structurally related states connected by a high-probability transition (black circle).
Additionally, figure 3 displays the Pearson correlation matrix across the B = 60 elements of a single diffusion batch with the harmonic adapter showing the strong autocorrealtion properties expected in dynamical processes that are recovered for free.
6 DISCUSSION AND CONCLUSION
We showed that equipping a denoising–diffusion sampler with a simple quadratic harmonic adapter makes a single reverse step exactly an Euler–Maruyama (EM) update for overdamped Langevin dynamics, with implicit resolution ∆t = β/(2k) controlled by the adapter stiffness k; the drift is the learned score/energy gradient (Eqs. (7)–(8), §2.3–§3.3). This gives a concrete, physically interpretable map from reverse-time iterations in diffusion to MD time resolution—turning the denoising grid into a resolu-
tion dial.
Because ∆t is implicit and unconstrained by stability, we may operate at coarse reverse grids and still obtain MD-like temporal statistics, with cost proportional to the number of reverse steps rather than to micro-timesteps. The quadratic coupling yields a time-parallel execution model: batches index trajectory slices and the local quadratic “glue” enforces the correct law while allowing simultaneous updates across slices. The two-direction composition in App. F (Strang splitting) preserves the d-
iffusion covariance exactly and attains weak-2 accuracy; a one-shot MH wrapper makes the target distribution exact for Eθ.
The harmonic adapter converts diffusion samplers from i.i.d. equilibrium generators into trajectory generators with physically meaningful temporal correlations for the learned potential. This enables: (i) MD-like observables (ACFs, Green–Kubo integrals) from short, cheap reverse schedules; (ii) principled temperature control during inference; (iii) modular coupling to MCMC, metadynamics, or alchemical “sheets” without retraining the score (App. F); and (iv) higher-order explicit adapters

Chapter 2: Diffusion Models are Molecular Propagators
(App. H) that raise weak order while remaining embarrassingly parallel (each stage references only neighboring slices).
Possible future work could include learning for dynamics. The §3.4 pathwise bound is dynamical; curricula that target score error along slow collective modes (identified online from batch-correlation maps like Fig. 3) may reduce the dominant term that limits dynamical observables. Additionally, sheets for computation. like the horizontal direction in App. F already supports MCMC, metadynamics, and alchemical paths with exact replica-exchange ratios where Eθ cancels between replicas; systematic stu-
dies of free-energy estimators and nonequilibrium work relations in this framework are a natural next step.
REFERENCES
Namrata Anand, Tudor Achim, and Po-Ssu Huang. Protein structure and sequence generation with equivariant denoising diffusion probabilistic models. arXiv preprint arXiv:2205.15019, 2022.
Ken A. Dill, S. Banu Ozkan, M. Scott Shell, and Thomas R. Weikl. Protein folding kinetics and thermodynamics. Annual Review of Biophysics, 37:289–316, 2012.
Donald L. Ermak and J. Andrew McCammon. Brownian dynamics with hydrodynamic interactions. The Journal of Chemical Physics, 69(4):1352–1360, 1978.
Daan Frenkel and Berend Smit. Understanding Molecular Simulation: From Algorithms to Applications. Academic Press, 2 edition, 2002.
Martin J. Gander and Stefan Vandewalle. Analysis of the parareal time-parallel time-integration method. SIAM Journal on Scientific Computing, 29(2):556–578, 2007.
Ernst Hairer, Christian Lubich, and Gerhard Wanner. Geometric Numerical Integration: StructurePreserving Algorithms for Ordinary Differential Equations. Springer, 2 edition, 2006.
Jonathan Ho, Ajay Jain, and Pieter Abbeel. Denoising diffusion probabilistic models. In Advances in Neural Information Processing Systems, volume 33, pp. 6840–6851, 2020.
Emiel Hoogeboom, Victor Garcia Satorras, Cle ́ment Vignac, and Max Welling. Equivariant diffusion for molecule generation in 3d. In Proceedings of the 39th International Conference on Machine Learning, volume 162 of Proceedings of Machine Learning Research, pp. 8864–8883, 2022.
Tero Karras, Miika Aittala, Janne Hellsten, Samuli Laine, Jaakko Lehtinen, and Timo Aila. Elucidating the design space of diffusion-based generative models. arXiv preprint arXiv:2206.00364, 2022.
Peter E. Kloeden and Eckhard Platen. Numerical Solution of Stochastic Differential Equations. Springer, 1992.
Benedict Leimkuhler and Charles Matthews. Molecular Dynamics: With Deterministic and Stochastic Numerical Methods. Springer, 2015.
Frank Noe ́, Simon Olsson, Jonas Ko ̈hler, and Hao Wu. Boltzmann generators: Sampling equilibrium states of many-body systems with deep learning. Science, 365(6457):eaaw1147, 2019.
Tamar Schlick. Molecular Modeling and Simulation: An Interdisciplinary Guide. Springer, 2 edition, 2010.
Jascha Sohl-Dickstein, Eric A. Weiss, Niru Maheswaranathan, and Surya Ganguli. Deep unsupervised learning using nonequilibrium thermodynamics. In International Conference on Machine Learning (ICML), pp. 2256–2265, 2015.
Yang Song and Stefano Ermon. Maximum likelihood training of score-based diffusion models. In Advances in Neural Information Processing Systems, volume 34, pp. 1415–1428, 2021.

Chapter 2: Diffusion Models are Molecular Propagators
Yang Song, Jascha Sohl-Dickstein, Durk P. Kingma, Abhishek Kumar, Stefano Ermon, and Ben Poole. Score-based generative modeling through stochastic differential equations. arXiv preprint arXiv:2011.13456, 2020.
Mark E. Tuckerman. Statistical Mechanics: Theory and Molecular Simulation. Oxford University Press, 2010.
Minkai Xu, Lin Fan, Wengong Ma, Yongheng Wang, Connor W. Coley, and Tommi S. Jaakkola. GeoDiff: A geometric diffusion model for molecular conformation generation. In International Conference on Learning Representations (ICLR), 2022.
A HEXADECANE CASE STUDY: STRUCTURAL STATISTICS AND
TIME–PARALLEL TRAJECTORY QUALITY
Hexadecane (C16H34) is a highly flexible alkane whose slow backbone modes pose a non-trivial challenge for generative samplers. We benchmark our harmonic–guided diffusion model against a standard Markov-chain Monte-Carlo (MCMC) trajectory driven by the RDKit MMFF94 force field. All experiments use the same pre-trained GeoDiff score network; no additional fine-tuning is applied.
A.1 ENSEMBLE GEOMETRY OVER 100 INDEPENDENT BATCHES
Figure 13 reports the pairwise distance matrix D and the correlation matrix R for 100 batches / conformers. The diffusion sampler with harmonic bias (left panels) reproduces three salient mesoscopic features of the MCMC baseline (right panels):
(i) Banded core. The width of the yellow diagonal reflects the local Lipschitz constant of the molecular backbone; its near-identity, at different temporal scales, between the two methods confirms that the harmonic coupling neither inflates nor collapses configurational distances.
(ii) Hierarchical blocks. Larger yellow/green squares reveal metastable families connected by rare backbone flips. Their location and size match across samplers, indicating that the learned score already embeds similar multi-well energy landscape and that the mixer preserves it.
(iii) Low-rank cross pattern in R. Cross-shaped warm regions identify slow collective modes; their coincidence implies that the drift transports probability along reaction coordinates without altering stationary weights.
Distance matrices visualise the metric structure of conformational space; correlation matrices expose slow collective modes; and time-ordered distance maps fingerprint the recurrence statistics of an individual trajectory.
(a) Exact stationarity. Agreement of the batch-level R matrices verifies that the sampler preserves the implicit Boltzmann density pθ.
(b) Enhanced spectral gap. Narrower diagonal stripes and faster decorrelation in Fig. 14 confirm the predicted gap increase λ1∆ = λphys + k brought by the quadratic spring , translating to an empirical 20× reduction in integrated autocorrelation time.
Qualitatively, the correlation map produced by the diffusion sampler (left) and the MCMC reference (right) coincide in every salient feature: (i) both display the same diagonal band of high self-similarity, (ii) the same cross-shaped warm patches that mark slow collective modes, and (iii) the same cold “holes” corresponding to mutually exclusive conformational states. By contrast, if the 64-conformer batches are first randomised (atom positions shuffled between conformers) and the correlation matr-
ix recomputed, the resulting plot becomes visually featureless—hot spots disappear and all off-diagonal structure collapses into noise. The diffusion map therefore lies much closer to the MCMC benchmark than to such a random baseline, confirming that the harmonic bias preserves the latent geometric structure learned by the score network.

Chapter 2: Diffusion Models are Molecular Propagators
A.2 PRACTICAL SIGNIFICANCE
Although a single 1000-step run does not yet amortise the cost of 1000 score evaluations, the benefit scales super-linearly with trajectory length and GPU count.
(a) Energy distributions. Histogram of Boltzmann energies for the C13 hydrocarbon: diffusionmodel samples (left) versus a 2500K OpenMM Langevin trajectory (right).
(b) Representative conformation.
Figure 4: Top: quantitative agreement between energy spectra generated by the score-based diffusion model and classical OpenMM dynamics. Bottom: one example conformation sampled by the diffusion model, illustrating geometric fidelity for the flexible 13-carbon molecule.
B NON-IID MIXING ACCELERATES TORSIONAL SAMPLING IN BUTANE
The butane molecule (C4H10) provides a minimal system with a well-known, three-well torsional
potential (g+, t, g−). Because transitions are rare at room temperature, it is a stringent test of whether the harmonic mixer can outperform i.i.d. score sampling without distorting the underlying equilibrium.
Reference trajectory. Figure 5 shows a 3 μs OpenMM trajectory integrated with a 2 fs Langevin step. Fewer than ten barrier crossings occur over 3000 frames; the autocorrelation time of the dihedral angle is τint ≈ 900 frames.
i.i.d. versus non-IID diffusion. Figure 6 (top) plots the first 200 frames generated by a standard i.i.d. denoising diffusion model: samples cover the three wells but exhibit no temporal continuity—the effective τint = 0; the chain cannot be used for dynamical studies. The bottom panel shows the same network equipped with the nearest- neighbour harmonic mixer. Barrier crossings remain frequent, yet the trajectory now respects the local geometry of the energy surface and develops an integrated auto-
correlation τint ≈ 45, two orders of magnitude faster than MD while still > 0, i.e. no i.i.d. collapse.
Theoretical consistency. Enhanced spectral gap. The measured τint dropped from 900 (MD) to
45 (non-IID diffusion), in line with the predicted gap increase λ1∆ = λphys + k when a spring of strength k is added.

Chapter 2: Diffusion Models are Molecular Propagators
Figure 5: Long OpenMM reference trajectory for butane torsion. Rare events yield τint ≈ 900 frames.
These results, although limited to a single molecule, give numerical evidence that the harmonic adapter converts an otherwise static i.i.d. diffusion sampler into a dynamics-preserving process with a spectral gap superior to classical molecular dynamics.
INTERPRETING BUTANE DIHEDRAL AUTOCORRELATION AND TEMPERATURE
SCALING
We quantify dynamical memory of the C–C–C–C backbone dihedral by the circular autocorrelation
C(τ ) =
D
cos θt − θt+τ
E
t
, C(0) = 1, C(τ ) ∈ [−1, 1], (10)
which is invariant to 2π-wrapping. Large values of C(τ ) indicate strong memory—the torsion at lag τ remains close to its initial value—whereas small values indicate weak memory due to frequent barrier crossings. Pronounced minima or oscillations reveal recrossings or underdamped shuttling between metastable wells, producing alternating alignment and anti-alignment of angles. For short lags the initial slope reflects rotational diffusion, C(τ ) ≈ 1 − Dθ τ + O(τ 2). Over longer lags, the sum (or in-
tegral) of C(τ ) determines the integrated autocorrelation time,
τint = 1 + 2
X
τ ≥1
C(τ ),
and hence the effective sample size Neff ≈ N/(2 τint) for a trajectory of length N .
Figure 7 compares five regimes. The Harmonic Glue run labeled x2 exhibits the fastest mixing: C(τ ) drops rapidly toward ∼ 0.3 and shows clear oscillations, consistent with frequent barrier crossings and some underdamped back-and-forth motion. By contrast, x1 decays more slowly; a shallow minimum with modest rebound suggests occasional recrossings without strongly coherent oscillation. The intermediate scaling x1.5 is noteworthy: its curve sits higher than x1 for much of the window yet displays vi-
sible wave-like structure, indicating a regime where drift and noise interact to produce quasi-periodic excursions whose coherence slows net decorrelation relative to x2. Turning to the baselines, RDKit–Langevin shows a gentle, nearly monotone decay: every step moves under a finite-difference UFF gradient, so decorrelation proceeds steadily but conservatively. RDKit–MCMC maintains the strongest memory; C(τ ) remains near unity over the lags shown because local UFF-relax proposals are small and oft-
en rejected, yielding infrequent barrier crossings compared with the Glue runs.
Two practical implications follow. First, the effective temperature or drift scale matters: increasing the Glue scaling from x1 to x2 shortens correlation times—τint shrinks and Neff grows—so more

Chapter 2: Diffusion Models are Molecular Propagators
Figure 6: Torsional time series from the diffusion model. Top: i.i.d. sampling shows no temporal structure. Bottom: adding the divergence-free mixer produces smooth segments and accelerates mixing while preserving the Boltzmann occupancy of the three wells.
independent samples are obtained per unit trajectory length. However, the x1.5 curve illustrates that “hotter” does not monotonically imply “better”: if noise and drift synchronize, coherent recrossings can inflate medium-lag correlations even as short-lag decay steepens. Second, sampler identity matters: on this coordinate the learned Glue dynamics (score plus harmonic glue) crosses dihedral barriers more readily than the RDKit baselines at 300 K, with RDKit–Langevin decorrelating somewhat faster-
 than RDKit–MCMC but substantially slower than x2. Oscillations themselves are diagnostic: the time to the first minimum estimates a typical flip timescale, while the decay of the oscillatory envelope controls the longer mixing time.
A few caveats guide interpretation. The Glue model’s “x·” factors act as implicit temperature scalings of the stochastic adapter; their mapping to a physical temperature T ⋆ is not known a priori and should be calibrated by matching state populations, transition rates, or relaxation times to MD at known T . Differences in sample count n influence only the variance of the estimator (smoother curves for larger n), not the expected value of C(τ ). Moreover, a single dihedral probes only one

Chapter 2: Diffusion Models are Molecular Propagators
Figure 7: Backbone dihedral circular autocorrelation C(τ ) for Harmonic Glue at implicit temperature scalings (x1, x1.5, x2) and RDKit samplers (MCMC or Langevin) at T = 300 K. Legends show each dataset label and number of samples n. Lower curves (and steeper initial slopes) indicate faster decorrelation and more frequent trans/gauche transitions; oscillations reflect coherent recrossings between wells.
slow coordinate; full-state mixing may differ, so it is prudent to corroborate with state populations, MSMs/implied timescales, and additional coordinates.
C EXTRA FIGURES
Numerical Solver (Small ∆t)
Steps limited by stability constraints
∆tsmall
Takes many small increments to cross large energy barriers.
Score-Based (Large “Steps”)
No direct ∆t Denoising steps can be large
Sample large transitions in fewer steps (based on learned score).
vs.
Figure 8: Large Step Sizes Without Numerical Integration Constraints. In classical MD, one must use very small ∆t to maintain stability and accuracy (e.g., femtosecond scales). Score-based diffusion does not rely on explicit numerical integrators, so it can take “large jumps” in conformational space, capturing long timescale transitions in far fewer steps.

Chapter 2: Diffusion Models are Molecular Propagators
Traditional Integration Error
Local Error ∼ O(∆tp)
In classical solvers, if the time step ∆t is too large, numerical instability or inaccuracy grows (e.g., ∆E ̸= 0). Error is directly controlled by ∆t.
Score-Based Distillation Error
Local Error ∼ O(distillation mismatch)
No direct ∆t. The “error” arises from imperfect score matching, i.e., how well the denoiser approximates the true gradient of log p(x). Larger “distillation error” =¿ less accurate transitions.
vs.
Figure 9: Error Sources: Numerical vs. Distillation. Left: In standard MD integration, local error scales with the time-step size ∆t. Large ∆t leads to instability or incorrect dynamics. Right: In a score-based approach, there is no numerical-integration step size; the main error arises from distillation/score mismatch. Reducing that mismatch improves accuracy, independent of ∆t.
xi
Radius ∝ ∆t (integration step)
xi+1
Force-based integration A small ∆t step defines the local spherical shell of possible next states.
(a) Numerical Solver (MD) Update. From xi, the next state xi+1 is confined to a shell whose approximate radius is proportional to the integration step size ∆t, the local forces, and thermal noise (if applicable). This enforces short-time, local updates typical of MD integrators.
xi xi+1
Harmonic potential
Score function shapes the local distribution
The harmonic bias encourages xi+1 to stay near xi, but the shape and scale of the distribution are determined by the learned score function (not by ∆t).
(b) Score-Based Diffusion + Harmonic Bias. From xi, the next state xi+1 remains close due to a unidirectional harmonic potential (red dashed line). The score function determines the local distribution (the “ellipse”), effectively playing the role of short-time dynamics without explicit ∆t integration.
Figure 10: Illustrative Comparison of Sequential Updates vs. Harmonic-Biased Score Updates. (a) Traditional numerical solvers compute forces and advance one small step ∆t to find xi+1, yielding a local spherical shell of possible new conformations around xi. (b) Score-based diffusion with a harmonic bias similarly enforces xi+1 ≈ xi, but the spread and shape of the distribution are governed by a learned score function, rather than an integration time step.
Traditional Sequential MD (1,000,000 steps)
Score-based Distillation (≈ 10 steps)
Key Idea: Generating 1,000,000 frames sequentially would require 1M integration steps in a standard MD solver. In contrast, score-based diffusion with distillation can produce those same frames in only ∼ 10 denoising steps. Each denoising step runs in parallel across all samples, yielding a dramatic speedup.

Chapter 2: Diffusion Models are Molecular Propagators
Sequential Approach
Generate x0
Generate x1 (depends on x0)
Generate x2 (depends on x1)
Generate x3 (depends on x2)
vs.
Parallel Approach (Score-based + Harmonic Bias)
Batch:
{x(1)
0 , . . . , x(N)
0} {x(1)
1 , . . . , x(N)
1} {x(1)
2 , . . . , x(N)
2} {x(1)
3 , . . . , x(N)
3}
all generated in parallel!
Figure 11: Comparison between a traditional sequential generation workflow (top) versus a parallel generation approach (bottom). The sequential approach generates each state strictly from the previous, while the score-based + harmonic-bias method can produce entire batches of states for multiple time steps all at once.
D VARIANCE–TEMPERED HARMONIC GLUE AND THE TEMPERATURE MAP
Setting. We work in friction units (βD = 1) from §H.1.1. The standard (anchorless) EM/harmonic step with a generic drift proxy gn is
xn+1 | xn ∼ N mn, 2D ∆t I , mn := xn − D∆t gn(xn). (11)
To increase the harmonic glue randomness without changing the score drift (mean), we introduce a per-step variance multiplier υn > 0 and take
xn+1 | xn ∼ N mn, 2D ∆t υn I ⇐⇒ kglue(∆t, υn) = 1
2D ∆t υn
= k(∆t)
υn
. (12)
The drift −D∆t gn(xn) is unchanged.
Error model. Throughout this subsection we adopt the paper’s design stance that the only algorithmic error is the score (drift) error, not the grid or the (per-step) diffusion variance: we evaluate the chain against a matching-temperature Langevin reference on each step (see below). The score error is gn = ∇V + εn with supn,x ∥εn(x)∥ ≤ ε ̄, and ∇V is L-Lipschitz (Assumption 2).

Chapter 2: Diffusion Models are Molecular Propagators
Sequential Approach
Generate x0
Generate x1 (depends on x0)
Generate x2 (depends on x1)
Generate x3 (depends on x2)
vs.
Parallel Approach (Score-based + Harmonic Bias)
Batch:
{x(1)
0 , . . . , x(N)
0} {x(1)
1 , . . . , x(N)
1} {x(1)
2 , . . . , x(N)
2} {x(1)
3 , . . . , x(N)
3}
all generated in parallel!
Figure 12: Comparison between a traditional sequential generation workflow (top) versus a parallel generation approach (bottom). The sequential approach generates each state strictly from the previous, while the score-based + harmonic-bias method can produce entire batches of states for multiple time steps all at once.
REFERENCE PROCESS WITH MATCHING TEMPERATURE ON EACH STEP
Define the effective temperature and diffusion on step n by
Tn := υn T, Dn := kBTn = υnD, βn := (kBTn)−1 = β/υn, (13)
so that βnDn ≡ 1 (friction units hold on every step). Consider the piecewise-temperature Langevin SDE driven by the same Brownian path,
dX ⋆
t = − ∇V (X⋆
t ) dt + p2Dn dWt, t ∈ [tn, tn+1), (14)
and the piecewise-constant-drift interpolation of our chain
dX ̃t = − gn(X ̃tn ) dt + p2Dn dWt, t ∈ [tn, tn+1). (15)
By construction, equation 12 is the exact EM transition for equation 15 with step ∆t and diffusion 2Dn. Crucially, the diffusion coefficient on each interval matches between equation 14 and equation 15. Hence all change-of-measure calculations (Girsanov-type) depend only on the drift difference; no extra term appears from variance tempering itself.
Theorem 3 (Finite-schedule path KL: variance tempering adds no term). Let X ̃ and X⋆ be the processes in equation 15–equation 14 on [0, T ]. With gn = ∇V + εn with supn,x ∥εn(x)∥ ≤ ε ̄, we

Chapter 2: Diffusion Models are Molecular Propagators
Figure 13: Pairwise Distance and Correlation Matrices for Hexadecane over 100 Batches.
Figure 14: 1000-Step Trajectories with Harmonic Bias in Diffusion.
Figure 15: 1000-Step Trajectories via MCMC over RDKit Energy Potential.
have
DKL L(X ̃[0,T ]) L(X⋆
[0,T ]) ≤ 1
4
N −1
X
n=0
∆t
Dn
| {z }
=β
4
X
n
∆t
υn
≤ βT
4
ε ̄2 + L2d
4
N −1
X
n=0
∆t 2 + L2
12
N −1
X
n=0
∆t 3
Dn
E∥gn (X ⋆
tn )∥2.
(16) In particular, if υn ≥ 1 then the model-error term is no larger than the baseline (υn ≡ 1), and the leading discretization term L2d
4
P ∆t2 is independent of υn.
Proof. On each interval [tn, tn+1) both processes share the same nondegenerate diffusion matrix 2DnI. The well-known formula for the relative entropy of diffusions with identical diffusion and drifts bt (for X ̃ ) and bt⋆ (for X⋆) gives (see, e.g., standard Girsanov-type expressions)
DKL L(X ̃[0,T ]) ∥ L(X⋆
[0,T ]) = 1
4E
ZT
0
a−1/2
t bt − b⋆
t
2 dt, at := 2DnI on [tn, tn+1),
so a−1
t = (2Dn)−1I and
DKL =
N −1
X
n=0
1 8Dn
E
Z tn+1
tn
− gn(X ̃tn ) + ∇V (X ̃t) 2 dt.

Chapter 2: Diffusion Models are Molecular Propagators
Split the difference as −gn(X ̃tn ) + ∇V (X ̃t) = −εn(X ̃tn ) + ∇V (X ̃t) − ∇V (X ̃tn ) , square and use (u + v)2 ≤ 2(∥u∥2 + ∥v∥2) and Lipschitzness:
DKL ≤
X
n
1 8Dn
Z tn+1
tn
2 E∥εn(X ̃tn )∥2 + 2L2 E∥X ̃t − X ̃tn ∥2 dt.
Model term: E∥εn(X ̃tn )∥2 ≤ ε ̄2; integrating gives 1
4 (∆t/Dn)ε ̄2 per step. For the second term we
use the exact second moment of equation 15 on [tn, t] (condition on Xtn ):
X ̃t − X ̃tn = −gn(X ̃tn ) (t − tn) + p2Dn (Wt − Wtn ),
so E∥X ̃t − X ̃tn ∥2 = E∥gn(X ̃tn )∥2 (t − tn)2 + 2dDn (t − tn). Integrate s = (t − tn) from 0 to ∆t:
Z tn+1
tn
E∥X ̃t − X ̃tn ∥2 dt = ∆t 3
3 E∥gn(X ̃tn )∥2 + dDn ∆t 2.
Multiply by (2L2)/(8Dn) = L2/(4Dn) and sum:
X
n
L2
4Dn
Z
E∥X ̃t − X ̃tn ∥2dt =
X
n
L2
12
∆t 3
Dn
E∥gn(X ̃tn )∥2 + L2d
4 ∆t 2 .
Combine the model term and the two pieces above to obtain equation 16. Finally, note that the leading discretization term L2d
4
P ∆t2 is independent of Dn (hence of υn), and the model term is monotone decreasing in υn because Dn = υnD.
Corollary 1 (“No extra error” under our error model). Under the standing assumption that we evaluate against the matching-temperature reference equation 14, the finite-schedule bound in Theorem 3 has the same structure and leading constants as the baseline (no tempering): it contains only the score error term and the usual grid term. There is no additional variance-mismatch penalty. Moreover, if υn ≥ 1 (variance inflated) then the model term is not larger than the baseline and can only improve (by-
 the factor P ∆t/υn ≤ T ).
TEMPERATURE INTERPRETATION AND CONSEQUENCES
Equation equation 13 gives the exact mapping
Tn = υn T, βn = β/υn, Dn = υnD, βnDn ≡ 1.
Thus variance tempering is temperature tempering: each glued step is the EM step of a Langevin SDE at temperature Tn with the same physical drift −∇V (because βnDn = 1 keeps the drift coefficient unity in our units). Two immediate corollaries:
• Local equilibrium. If we were to freeze Tn to a constant T † and run the SDE longer, the
invariant would be the Boltzmann law at β† = β · (T /T †). Our sampler does not require per-step invariance; it only requires the per-step reference to have the same diffusion to keep the error analysis drift-only, as in Theorem 3.
• Early hot, late cold (recommended). Choosing υn > 1 (“hotter”) early helps mixing; annealing to υn → 1 (“target temperature”) late keeps the terminal law close to constant-T dynamics while the bound remains controlled by the same two terms (score and grid) with no variance penalty.
Remarks on the higher-order term. The third term in equation 16 is O(P ∆t3) and carries a harmless 1/Dn factor; under mild moment bounds on ∥gn(Xt⋆n )∥2 (implied by Lipschitz/coercivity
and bounded score error), it is dominated by the P ∆t2 term and does not affect the leading accuracy budget; importantly, it does not introduce any new dependence on υn at the leading order.
Takeaway. You may safely inflate the harmonic glue variance by factors υn (interpreted as transient temperature scaling Tn = υnT ) without paying any extra error beyond the usual two: (i) score error and (ii) grid coarseness. The variance choice only changes the diffusion weighting inside the same bound and, for υn ≥ 1, weakly helps the model-error term. Finishing with υn → 1 aligns the end of the schedule with the target temperature.

Chapter 2: Diffusion Models are Molecular Propagators
E UNDERDAMPED LANGEVIN DYNAMICS
Denoising diffusion and related generative models often rely on stochastic processes that can be discretized to perform sampling in high-dimensional spaces. While the overdamped Langevin equation,
dx(t) = −∇V (x(t)) dt +
√
2D dW (t),
enjoys a straightforward Euler-Maruyama update (a simple Gaussian transition), more physically complete underdamped models include velocities v(t), friction, and inertial terms.
Below, we discuss how to form a finite-time integrator (splitting method) for the underdamped Langevin SDE, derive the exact transition law for one step, and then show that introducing a “harmonic-bias” re-interpretation is purely an algebraic re-arrangement. Thus, such a reinterpretation (often used in diffusion-based sampling or generative modeling) does not alter the law from which one samples, thereby introducing no bias.
E.1 EXTENDING HARMONIC GUIDANCE TO UNDERDAMPED DYNAMICS
In the previous sections, we saw how the Euler–Maruyama discretization of overdamped Langevin dynamics
dx(t) = − ∇V x(t) dt +
√
2D dW (t)
can be reinterpreted as sampling from a Boltzmann-like distribution that includes a harmonic bias between consecutive positions. Specifically, one obtains:
xn+1 = xn − ∇V (xn) ∆t +
√
2 D ∆t ξn, ξn ∼ N (0, I).
The conditional distribution p(xn+1 | xn) may be viewed as exp −β U (xn+1, xn) , where U combines the potential V (xn+1) and a harmonic “spring” tethering xn+1 to xn − D ∇V (xn) ∆t.
In this section, we show how a similar harmonic perspective applies in the underdamped (inertial) regime by introducing a bias potential in velocity space rather than (or in addition to) position. We will see that this viewpoint naturally recovers the standard underdamped Langevin update rules used in molecular dynamics simulations and diffusion models with inertial (velocity) terms.
E.2 UNDERDAMPED LANGEVIN DYNAMICS AND ITS DISCRETIZATION
Underdamped SDE. We first consider the underdamped (or inertial) form of Langevin dynamics in one of its simplest formulations Leimkuhler & Matthews (2015):
dx(t) = v(t) dt, (17a)
dv(t) = − γ v(t) dt − ∇V x(t) dt + p2 γ D dW (t), (17b)
where v(t) is velocity, γ > 0 is a friction coefficient, D = kBT if mass m = 1, and W (t) is a standard Brownian motion. The equilibrium (stationary) distribution over phase space x, v in this model is the Maxwell–Boltzmann measure,
π x, v ∝ exp
h
− β V (x) + 1
2 ∥v∥2 i
.
Euler–Maruyama Discretization. A straightforward (though not always optimal) way to discretize equation 17 is the Euler–Maruyama scheme with step size ∆t:
xn+1 = xn + vn ∆t, (18a)
vn+1 = vn − γ vn ∆t − ∇V xn ∆t + p2 γ D ∆t ξn, (18b)
where ξn ∼ N (0, I) are i.i.d. Gaussian increments.
E.3 A HARMONIC BIAS POTENTIAL IN VELOCITY SPACE
In the overdamped case, we saw that xn+1 is sampled from a Gaussian centered at xn −
D ∇V (xn) ∆t, leading to a factor exp −(1/(4D ∆t))∥xn+1 − . . . ∥2 that can be re-labeled as exp[−β U (xn+1, xn)] with a “spring” tether.

Chapter 2: Diffusion Models are Molecular Propagators
Velocity-Centered Gaussian. Similarly, from equation 18, condition on xn, vn. Then
p(vn+1 | xn, vn) = 1
2πγ D ∆t d/2 exp − 1
4 γ D ∆t vn+1− vn − γ vn ∆t − ∇V (xn) ∆t
| {z }
mean shift
2.
(19) We can re-label the mean shift as mn := vn − γ vn ∆t − ∇V (xn) ∆t. Hence, the distribution is a Gaussian in vn+1 with center mn.
Harmonic Potential in v. Comparing equation 19 with a Boltzmann factor yields:
p(vn+1 | xn, vn) ∝ exp
h
−1
4 γ D ∆t ∥vn+1 − mn∥2i
= exp
h
− β Uvel vn+1, vn, xn
i
, (20)
for some effective velocity potential Uvel. Specifically, one can write:
Uvel vn+1, vn, xn = k
2 vn+1 − vn − ∇V (xn) ∆t
2
∆t + (constant in vn+1), (21)
where k = 1
γ D ∆t (or a suitably adjusted expression) parallels the overdamped case (k = 1
D ∆t ).
Thus, consecutive velocity values vn and vn+1 are tethered by a harmonic bias centered on vn − ∇V (xn) ∆t (with an additional friction term −γ vn ∆t subsumed into the mean).
Combining Position and Velocity Bias. Of course, the full underdamped update also includes xn+1 = xn + vn ∆t. Hence, xn+1 is likewise interpretable as being sampled from a Boltzmannlike factor with a small harmonic bias around xn + vn ∆t. In more advanced splitting integrators (e.g. BAOAB), each partial step can be expressed as a local update with either a v-bias or a x-bias, ensuring that the entire chain in (x, v) preserves (or closely approximates) the Maxwell–Boltzmann measure Leimkuhler & Mat-
thews (2015).
E.4 RECOVERING UNDERDAMPED DYNAMICS IN DIFFUSION MODELS
Harmonic Bias Across Adjacent Frames. In diffusion models (e.g., for generative tasks like video or molecular trajectory generation), one can introduce a velocity-like variable vn for each “time step” n. The model’s forward noising or relaxation process can then treat vn analogously to the underdamped Langevin velocity. By adding a harmonic bias in velocity space (between vn and vn+1), we recapture the local underdamped updates:
xn+1 ≈ xn + vn ∆t,
vn+1 ≈ vn − γ vn ∆t − ∇V (xn) ∆t + (Gaussian noise term).
From the standpoint of the transition distribution xn, vn → xn+1, vn+1 , this is equivalent to sampling from a Boltzmann-like factor that couples consecutive frames (n, n + 1) in both position and velocity.
Interpretation for Generative Modeling. Using velocity-based harmonic guidance allows the model to incorporate inertia or momentum effects between adjacent frames. For instance, in video diffusion or molecular simulation, the generative process can reflect physically plausible transitions rather than i.i.d. overdamped increments. The harmonic velocity bias ensures that if the model vn is large, then vn+1 will remain near that large velocity in a controlled (stochastically damped) fashion, capturin-
g inertial motion consistent with underdamped Langevin dynamics.
Extending the harmonic bias perspective from the overdamped regime (position only) to the underdamped regime (x, v) reveals that:
• Velocity Update as Local Boltzmann Sampling: The step vn 7→ vn+1 can be viewed as sampling from a Gaussian distribution with a harmonic tether to vn − ∇V (xn)∆t, plus a frictional shift −γ vn ∆t.
• Discrete Dynamics = Harmonic Coupling: The resulting transition kernel p vn+1 |
vn, xn ∝ exp −(1/(4 γ D ∆t)) ∥vn+1 − mn∥2 is precisely a Boltzmann factor for a spring-like potential in velocity space.

Chapter 2: Diffusion Models are Molecular Propagators
• Physical Inertia in Generative Models: In generative diffusion or normalizing flow frameworks, adding this velocity-based bias mimics underdamped motions, enabling smoother transitions and momentum effects across consecutive frames (e.g., physically realistic motion in molecular or video data).
This closes the conceptual loop: the same harmonic-bias interpretation that underlies overdamped discretization directly extends to underdamped Langevin by applying the “spring” concept in velocity space. Just as the overdamped model introduced a harmonic tether between xn and xn+1, the underdamped model introduces a harmonic tether between vn and vn+1, recovering inertial dynamics in diffusion-based or molecular simulation contexts.
F TWO GENERAL DIRECTIONS OF MARKOV EVOLUTION
We introduce a space–time lattice that cleanly separates a vertical (denoising/score) direction from a horizontal (auxiliary) direction and derives how they combine. The main text is recovered by taking the vertical direction to be EM on the learned energy Eθ and the horizontal direction to be the harmonic–glue EM step. In this general formalism, the horizontal direction can also host MCMC (e.g. MALA/HMC), metadynamics, or alchemical/free–energy transformations.
Indexing and units. We work in friction units with βD = 1 (so D = β−1). The lattice sites are
(n, b) ∈ Z≥0 × {0, . . . , B}, Xn,b ∈ Rd,
where n is the vertical index (denoising time) and b is the horizontal index (replica/auxiliary sheet). The learned energy is Eθ : Rd → R. Each horizontal slice b has its own auxiliary potential Ub :
Rd → R (examples below), and the target at slice b is the Boltzmann law
πb(x) ∝ exp − β(Eθ(x) + Ub(x)) . (22)
F.1 CONTINUOUS-TIME MODEL AND INVARIANCE
Consider the continuous process on slice b:
dX (b)
t = −∇ Eθ + Ub X(b)
t dt +
√
2D dWt. (23)
Its generator is Lbf = ⟨−∇(Eθ+Ub), ∇f ⟩+D ∆f , and the stationary density is exactly equation 22; the process is reversible w.r.t. πb.
F.2 DISCRETE-TIME: TWO-DIRECTION EM WITH A SHARED DIFFUSION BUDGET
Let a macro-step of duration ∆t be split as ∆tv = αv∆t, ∆th = αh∆t, αv + αh = 1. Define the vertical and horizontal EM kernels (at slice b):
Kv(x; η) := x − ∆tv ∇Eθ(x) + p2D ∆tv η, (24)
K(b)
h (x; ξ) := x − ∆th ∇Ub(x) + p2D ∆th ξ, (25)
with independent η, ξ ∼ N (0, Id) at each site. A single (unsymmetrised) composed update is
X+ = K(b)
h (Kv(X; η); ξ).
Gaussian fusion (exact covariance).
Lemma 1 (Noise fusion). Let X ∈ Rd be deterministic and define ∆v := √2D∆tv η, ∆h :=
√2D∆th ξ, with η, ξ i.i.d. N (0, Id). Then ∆v + ∆h ∼ p2D(∆tv + ∆th) ζ with ζ ∼ N (0, Id), independent of X. Hence the two-direction step has exact covariance 2D∆t Id.
Proof. Sum of independent Gaussians with covariances 2D∆tvId and 2D∆thId.
First-order moments (drift bias). Conditioning on X and Taylor expanding ∇Ub at X,
E[X+ − X | X] = −∆t ∇Eθ(X) + ∇Ub(X) + O(∆t2),
i.e., the composed EM has the correct total drift up to O(∆t2). The O(∆t2) term is due solely to evaluating ∇Ub at the random intermediate Kv(X; η).

Chapter 2: Diffusion Models are Molecular Propagators
F.3 SECOND-ORDER (STRANG) SPLITTING AND WEAK ACCURACY
Define the Strang macro-step as
S (b)
∆t := K(b)
h (·; ξ1/2)
| {z }
∆th /2
◦ Kv(·; η)
| {z }
∆tv
◦ K(b)
h (·; ξ2/2)
| {z }
∆th /2
, (26)
with independent Gaussians at all three substeps and ∆th/2 = αh∆t/2, ∆tv = αv∆t.
Theorem 4 (Weak-2 consistency for the sum SDE). Assume ∇Eθ and ∇Ub are globally Lipschitz
with bounded second derivatives. Then for any f ∈ C∞
b (Rd) there exists Cf such that
E f (S(b)
∆t (X)) − e∆t Lb f (X) ≤ Cf ∆t3,
i.e., equation 26 is a weak-2 integrator for the SDE equation 23. By Lemma 1, its covariance matches 2D∆t Id exactly.
Proof sketch. Baker–Campbell–Hausdorff for Strang splitting: e 1
2 ∆thLh e∆tv Lv e 1
2 ∆thLh =
e∆t(Lv+Lh) + O(∆t3) in the weak sense under bounded commutators and moments. Discrete EM substeps approximate e∆t•L• with weak-2 local error; composition preserves weak order.
Stationarity.
Proposition 1 (Stationary bias of the split scheme). Let πb be equation 22. The Markov kernel S(b)
∆t
preserves πb up to O(∆t2) (Talay–Tubaro expansion). A final Metropolis–Hastings accept/reject
with target πb makes stationarity exact, with acceptance 1 − O(∆t2).
F.4 RECOVERING THE MAIN TEXT AND GOING BEYOND
Main-text specialisation (vertical score + horizontal harmonic glue). Take Ub to be the harmonic glue potential (two-slice quadratic) used in the main text. Then equation 24 implements score-based EM on Eθ and equation 25 implements the harmonic EM tether; by Theorem 4 the composed step is weak-2 for the SDE driven by −∇(Eθ + Ub) and targets the correct πb ∝ e−β(Eθ+Ub)
up to O(∆t2).
General horizontal direction = any reversible Markov kernel. Let P (b)
h be any Markov kernel
reversible w.r.t. e−βUb (e.g. MALA, HMC, BAOAB on an extended state, or EM/MALA on Ub + Vb with a metadynamics bias Vb). Replace K(b)
h in equation 26 by P (b)
h with step parameter of order
∆th. Then:
• If P (b)
h is itself a weak-p integrator for the Ub-Langevin dynamics, the Strang composition re
mains weak-min{2, p} for the sum SDE.
• Exact stationarity at finite ∆t. Wrap the full proposal Y ∼ P (b)
h ◦ Kv ◦ P (b)
h (X, ·) in one
Metropolis–Hastings step with target πb. The acceptance uses the composite proposal density q(X → Y ) (available in closed form when P (b)
h is EM/MALA/BAOAB, symmetric for HMC),
and yields a chain reversible w.r.t. πb for any choice of P (b)
h.
“Sheets”: alchemical and free–energy transformations along b. Let Ub(x) = U (x; λb) with λb = b/B ∈ [0, 1] encoding an alchemical or morphing path from U0 to U1. The extended target over X = (Xn,0, . . . , Xn,B) is
π(X) ∝
B
Y
b=0
exp − β(Eθ(Xn,b) + U (Xn,b; λb)) .
A horizontal pass at fixed n consists of local moves (EM/MALA/HMC/metadynamics) at each b and optional replica-exchange swaps (b, b+1) with acceptance
αb,b+1 = min
n
1, exp − β U (Xn,b+1; λb) + U (Xn,b; λb+1) − U (Xn,b; λb) − U (Xn,b+1; λb+1)
o
.
(27)

Chapter 2: Diffusion Models are Molecular Propagators
The Eθ terms cancel in equation 27 (they are common to all replicas), making AREX directly compatible with learned energies.
F.5 PUTTING IT TOGETHER ON THE LATTICE (PARALLEL EXECUTION)
Colour sites by the parity of n+b. A full macro-iteration is:
1. Horizontal half-pass (colour c = 0): apply P (b)
h with step ∆th/2 (or K(b)
h ) to all sites with
n+b ≡ 0, in one fused GPU kernel. Optionally perform replica-exchange among disjoint pairs (b, b+1) of the same colour.
2. Vertical full-pass: apply Kv with step ∆tv to all sites (n, b), again as one fused kernel (independent Gaussian streams).
3. Horizontal half-pass (colour c = 1): as in step 1, but for n+b ≡ 1.
By Lemma 1, the total diffusion per macro-step is exactly 2D∆t (noise budgets add). Theorem 4 and Proposition 1 guarantee weak-2 accuracy for the sum SDE and O(∆t2) stationarity bias; a one-shot MH wrapper makes the terminal law exactly πb if desired.
F.6 EXAMPLES OF HORIZONTAL Ub AND P (b)
h
• Harmonic glue (main text). Ub is the two-slice quadratic tether (with optional variance tempering, App. D); take P (b)
h = K(b)
h.
• MALA / HMC. P (b)
h is a reversible MCMC kernel for e−βUb . Combine via equation 26; use the global MH wrapper for exact e−β(Eθ+Ub).
• Metadynamics. Maintain a slice-specific bias Vb (updated from collective variables); set Ub ← Ub + Vb online. Local reversibility holds at fixed Vb, and the split analysis remains valid between hill updates.
• Alchemical sheet + AREX. Ub(·) = U (·; λb) with swaps using equation 27.
F.7 REMARKS ON “INDEPENDENCE ⇒ COMMUTATION”
Independence of Gaussian streams implies exact covariance fusion (Lemma 1); it does not imply that the generators Lv and Lh commute. The nonzero commutator stems from evaluating drifts at different points (nonlinear gradients). Strang splitting handles this optimally: the error of replacing
e∆t(Lv+Lh) by e 1
2 ∆tLh e∆tLv e 1
2 ∆tLh is O(∆t3) in the weak sense, while the covariance budget is exactly correct by construction.
Takeaway. The two-direction formalism yields a single target πb ∝ e−β(Eθ+Ub) at each slice, recovers the main-text harmonic-glue scheme, and admits horizontal replacements (MCMC, metadynamics, alchemical sheets) without retraining the score. Independent Gaussian substeps exactly add their noise budgets, while Strang splitting makes the drift composition second-order accurate; a final MH wrapper restores exact stationarity at finite step sizes.
G HIGHER-ORDER HARMONIC ADAPTERS
The first-order scheme of the main text inherits the Euler–Maruyama (EM) weak/strong orders (1, 1
2 ) and introduces an O(∆t) stationarity error. Here we construct explicit, still-parallel adapters
whose local truncation error is of order O(∆tp+1) for any p ≥ 2. We give the algebra for p = 2 in detail (Heun/RK2), outline the extension to p = 3 and p = 4 stochastic Runge–Kutta (SRK) methods, and summarise the resulting bias and parallel-execution costs.
G.1 SECOND-ORDER (HEUN) HARMONIC ADAPTER
Let k = 1
2∆t and keep the split drift Ψ∆(a, b) = sθ(b) − k (b − a). For slice•n we perform

Chapter 2: Diffusion Models are Molecular Propagators
H1) Predictor (Euler)
x ̃n+1 = xn + D Ψ∆(x n−1, xn) ∆t +
√
2D∆t ξn
H2) Corrector (trapezoid rule)
xn+1 = xn + D∆t
2
h
Ψ∆(x n−1, xn) + Ψ∆(xn, x ̃n+1)
i
+
√
2D∆t ξn, ξn ∼
N (0, Id).
The same Gaussian vector ξn is reused in H1)–H2); this is the standard stochastic Heun construction.
Local moments. Writing ∆X := xn+1 − xn and conditioning on (x n−1, xn) = (α, β) gives
E[∆X] = D
h
sθ(β) − k(β − α)
i
∆t + O(∆t2)
| {z }
bias
, E[∆X ∆X⊤] = 2D∆t Id + O(∆t3).
Compared with EM, the leading drift bias drops from O(∆t) to O(∆t2) while the covariance remains exact. Therefore
stationarity error = O(∆t2), detailed-balance defect = O(∆t3).
Parallel execution. Step H1) and H2) depend only on the pair (x n−1, xn): both can be launched as two independent batched kernels. Memory overhead is one extra trajectory-sized buffer for x ̃n+1.
G.2 THIRD- AND FOURTH-ORDER SRK ADAPTERS
Let si denote the i-th stage drift evaluation at abscissa ci∆t and weight aij of a stochastic RK tableau (Platen – Kloeden). Replacing the EM drift in each stage by Ψ∆ gives the SRKp harmonic adapter
xn+1 = xn+D∆t
s
X
i=1
bi si+
√
2D∆t ξn, si = Ψ∆ x n−1+D∆t
X
j<i
aij sj , xn+D∆t
X
j<i
ˆaij sj .
Scheme strong weak stationarity # kernels
Heun (RK2) 1 2 O(∆t2) 2 SRK3 (Platen) 1 3 O(∆t3) 3 SRK4 (Ro ̈ßler) 3
2 4 O(∆t4) 4
Every stage again references only (x n−1, xn) of the *input* array, so each column of the tableau is a separate, embarrassingly parallel kernel.
Proof sketch (all p). Because each stage drift is a linear convex combination of edge-wise springs obeying LM1–LM3, the p-th order adapter inherits:
* weak order p and strong order listed above (classical SRK proofs); * O(∆tp) stationarity error (moment-matching argument of §G.1); * detailed-balance defect O(∆tp+1) (antisymmetry cancels one extra power of ∆t).
Thus higher accuracy costs only extra kernels, not extra synchronisation.
G.3 BIAS HIERARCHY
Let π∆,p be the invariant law of the SRKp adapter. The Talay–Tubaro expansion generalises to
π∆,p = pθ + ∆t pLp pθ + O(∆tp+1),
where Lp is a polynomial in sθ and its derivatives. For molecular observables F with ∥F ∥C2p+2 < ∞ the bias is

Chapter 2: Diffusion Models are Molecular Propagators
Eπ∆,p[F ] − Epθ [F ] = O(∆t p).
Wrapping any SRKp proposal in a one-step MALA accept/reject makes the chain exactly pθstationary while retaining the p-th order proposal as the local importance sampler; the acceptance rate is 1 − O(∆t p).
H EXPLICIT GLUE BIAS, GLUED SCORE, AND PATHWISE CONVERGENCE
H.1 DEFINITIONS, NOTATION, AND WHAT IS PROVEN
Goal. We formalize harmonic (quadratic-glue) denoising steps for score-based samplers, derive the associated glued score used in the drift, quantify the adjacent-batch bias added by the glue, and prove finite-schedule KL/TV/W2 bounds and a vanishing-error theorem as the denoising grid is refined and the learned energy converges.
H.1.1 OVER-DAMPED LANGEVIN DYNAMICS (CONTINUOUS TIME)
Units and constants. We work in friction units
γ = 1, D = kBT
γ = kBT, β = 1
D , βD = 1.
Let V : Rd → R be the physical potential. The Itoˆ SDE is
dXt = −∇V (Xt) dt +
√
2D dWt, with stationary density πβ(dx) ∝ e−βV (x)dx. (28)
H.1.2 EULER–MARUYAMA (EM) TIME DISCRETIZATION
For fixed step ∆t > 0,
Xn+1 = Xn − ∇V (Xn) ∆t +
√
2D ∆t ξn, ξn ∼ N (0, Id). (29)
Conditioned on Xn = x, the exact EM transition kernel is Gaussian
p(x′ | x) = 1
(4πD∆t)d/2 exp
h
−1
4D∆t x′ − x + ∆t ∇V (x) 2i
. (30)
H.1.3 HARMONIC REFORMULATION (“QUADRATIC GLUE”)
It is convenient to rewrite equation 30 as a Boltzmann factor with a quadratic coupling:
p(x′ | x) = Z(x)−1 exp
h
− k(∆t)
2 x′ − x + ∆t ∇V (x) 2i
, (31)
k(∆t) := 1
2D ∆t . (32)
Because the mismatch x′ − x + ∆t ∇V (x) = O(√∆t), the spring energy contributes only O(∆t) to the exponent even though k(∆t) ∼ ∆t−1.
Two-slice energy (auxiliary). Define
U∆t(x′; x) := V (x′) + k(∆t)
2 x′ − x + ∆t ∇V (x) 2. (33)
This is not a conditional energy; integrating e−U∆t(x′;x) in x′ recovers the Gaussian equation 30 up to the normalizer Z(x).

Chapter 2: Diffusion Models are Molecular Propagators
H.2 SCORE-BASED MODELS: TRAINING OBJECTS AND THE LEARNED ENERGY
Let pt denote the data corrupted by i.i.d. Gaussian noise of variance σt2 = 2Dt. A standard score network trained by denoising objectives approximates the time-dependent score st(x) ≈ ∇x log pt(x). For clarity, we also define a learned energy
Eθ(x) := − log pθ(x) + const, ∇Eθ(x) = −s0(x), (34)
and, at inference time, we use a drift proxy gn(·) that is either gn = ∇Eθ (energy learning) or gn = stn (time-dependent score). In both cases we measure model error against the physical drift:
gn(x) = ∇V (x) + εn(x), ∥εn∥∞ ≤ ε ̄. (35)
H.3 HARMONIC GLUE AT INFERENCE
We describe two realizations.
(A) Adjacent-batch glue (no anchors). Given a sequence {Xn}, set for each step n
Xn+1 = Xn − gn(Xn) + k(∆t) Xn − Xn−1 ∆t +
√
2D ∆t ξn, (36)
with the convention X−1 = X0. Explicit adjacent bias. Conditioning on (Xn−1, Xn) = (a, b) and taking noise expectation,
E[Xn+1 − b | a, b] = − gn(b) ∆t − k(∆t)∆t
| {z }
= 1/(2D)
b−a ,
i.e., the glue drift pulls toward the adjacent element with strength (2D)−1.
(B) Gibbs-anchored glue. Introduce an auxiliary anchor An | Xn ∼ N Xn, [βka]−1I (with a user spring ka > 0) and update
Xn+1 = Xn − gn(Xn) + ka Xn − An ∆t +
√
2D ∆t ξn. (37)
The glued score used in both variants is the gradient of the quadratic-augmented potential
∇x V (x) + k
2 ∥x − a∥2 = ∇V (x) + k(x − a), (38)
so that the algorithmic drift equals minus equation 38 with a = Xn−1 (adjacent) or a = An (anchor), and with ∇V replaced by gn in practice.
H.4 ASSUMPTIONS (LOCAL TO THIS SECTION)
Assumption 2 (Regularity and coercivity). V ∈ C2(Rd) with globally L-Lipschitz gradient, and V (x) → ∞ as ∥x∥ → ∞ (e.g. V (x) ≥ c0∥x∥q − c1).
Assumption 3 (Schedule). A grid tn = n∆t with step ∆t > 0 and total horizon T = N ∆t. We write k(∆t) = 1/(2D∆t) as in equation 32.
Assumption 4 (Model error). The inference drift gn satisfies equation 35 for all n.
H.5 FINITE-SCHEDULE ACCURACY: PATHWISE KL/TV/W2
We compare the piecewise-constant-drift interpolation X ̃t of either glue scheme on [0, T ] with the exact SDE equation 28 driven by the same Brownian motion.
Lemma 2 (EM local moment bound). For any interval [tn, tn+1), E∥X ̃t − X ̃tn ∥2 ≤ C1(t − tn)
with a constant C1 = C1(D, L, supn E∥Xn∥2) < ∞.
Theorem 5 (Pathwise KL bound with harmonic glue). Let X ̃t be generated by equation 36 or equation 37. Under Assumptions 2–4,
DKL L(X ̃[0,T ]) ∥ L(X[0,T ]) ≤ β T ε ̄2
| {z }
model error
+ β L2
tot
2
N −1
X
n=0
∆t2
| {z }
schedule error
, (39)

Chapter 2: Diffusion Models are Molecular Propagators
where Ltot := L + k⋆ with k⋆ = max{ k(∆t), ka }. Consequently,
∥L(X ̃[0,T ]) − L(X[0,T ])∥TV ≤ 1
2
p DKL(·∥·) ,
and if πβ satisfies a T2(m) inequality, then W22(q ̃T , πβ) ≤ 2
m DKL(q ̃T ∥πβ) for the terminal law q ̃T .
Proof. Let Xt solve equation 28. On each [tn, tn+1) the algorithmic drift is the constant
bt ≡ −gn(X ̃tn ) − k• X ̃tn − an
| {z }
glue term
,
with k• = k(∆t) and an = Xn−1 (adjacent) or k• = ka and an = An (anchor). The exact drift is −∇V (X ̃t). Girsanov’s formula yields
DKL X ̃ ∥X = 1
4D E
ZT
0
bt + ∇V (X ̃t)
2
dt.
Split the drift gap on [tn, tn+1) into three parts:
−εn(X ̃tn )
| {z }
model
+ ∇V (X ̃tn ) − ∇V (X ̃t)
| {z }
Lipschitz
− k• X ̃tn − an
| {z }
glue
.
(i) The model term contributes 1
4D
R tn+1
tn E∥εn∥2dt ≤ 1
4D ε ̄2∆t = β
4 ε ̄2∆t. Summing gives the
βT ε ̄2 term (up to a harmless constant factor absorbed in β). (ii) The Lipschitz term satisfies ∥∇V (X ̃tn ) − ∇V (X ̃t)∥ ≤ L ∥X ̃t − X ̃tn ∥. By Lemma 2,
1 4D
Z tn+1
tn
E∥ · ∥2dt ≤ L2
4D
Z tn+1
tn
C1(t − tn) dt = L2C1
8D ∆t2.
(iii) The glue term is Lipschitz in x with constant k•: when computing the pathwise KL against a glued baseline (anchor SDE) this term cancels exactly; when comparing to equation 28 directly, it is
bounded exactly like (ii) with L replaced by k•, generating k2
• C1
8D ∆t2. Combining (ii)–(iii) yields the
discretization part in equation 39 with Ltot = L + k⋆. Data processing then gives the terminal-law bounds.
Corollary 2 (Uniform steps minimize schedule error). For fixed T = N ∆t, the sum P
n ∆t2 is
minimized by uniform steps, giving schedule error O(N −1).
H.6 VANISHING KERNEL AND PATH ERROR AS THE DENOISING GRID IS REFINED
Assumption 5 (Refinement regime). As N → ∞, maxn ∆t → 0, N ∆t → T ∈ (0, ∞), and the model improves: ε ̄ = ε ̄(N ) → 0.
Theorem 6 (Vanishing path error). Under Assumptions 2, 3, 4, 5, the path laws converge:
DKL L(X ̃ (N)
[0,T ]) ∥ L(X[0,T ]) −−−−→
N→∞ 0, ∥L(X ̃ (N)
[0,T ]) − L(X[0,T ])∥TV −−−−→
N→∞ 0.
Hence, for every bounded Lipschitz functional F : C([0, T ]; Rd) → R, EF (X ̃ (N)
· )−EF (X·) → 0.
Proof. Apply Theorem 5. Since P
n ∆t2 ≤ T maxn ∆t, the schedule term is ≤
βL2
tot
2 T maxn ∆t → 0. The model term is βT ε ̄(N )2 → 0. Pinsker yields TV convergence;
bounded-Lipschitz convergence follows.
H.7 CONSEQUENCES AND DIAGNOSTIC COROLLARIES
Corollary 3 (Bias decomposition). For fixed T ,
total error ≲ βT ε ̄2
| {z }
model
+ βLt2ot
2
X
n
∆t2
| {z }
schedule
.
The second term decays as O(N −1) with uniform steps; higher-order (Heun/SRK) adapters further improve the rate.

Chapter 2: Diffusion Models are Molecular Propagators
Corollary 4 (Temperature/resolution dial). From equation 32, k(∆t) = 1/(2D∆t) = β/(2∆t). Thus the inference spring selects an effective resolution ∆t = β/(2k) while leaving the order constants in Theorem 5 unchanged.
Remarks (implementation). (i) In the anchor variant, comparing jointly to the anchor SDE removes the explicit glue term from the KL and yields Ltot = L + ka directly from the x-Hessian of V (x) + ka
2 ∥x − a∥2. (ii) A one-step Metropolis correction on Eθ makes the terminal law exactly
∝ e−βEθ while preserving acceptance 1 − O(∆t).
Notes on provenance. The units choice βD = 1, the EM kernel identity equation 30, and the algebraic spring k(∆t) = 1/(2D∆t) match the harmonic adapter formalism used in the accompanying chapter; here we give full path-space KL proofs and adjacent-batch bias formulas within a selfcontained presentation. (See also Ch. 2 for consistent exposition.) [Ref.: Chapter 2 draft]
H.8 COROLLARIES FOR TRAJECTORIES, FREE ENERGIES, OBSERVABLES, SPEED-UPS, AND CONVERGENCES
We now derive consequences that are frequently needed in MD workflows: bounds for path observables (including correlation functions and Green–Kubo integrals), free-energy estimators (Zwanzig/Jarzynski), complexity/speed-up laws, and convergence of time averages. All statements below depend only on the local assumptions of this section and the previously proved Theorems 5–6.
H.8.1 TRAJECTORY OBSERVABLES: PATH-FUNCTIONALS AND FINITE-TIME CORRELATIONS
Let  ̃P (resp. P) denote the path law of the harmonic-glue sampler (resp. the exact SDE equation 28) on [0, T ].
Corollary 5 (Path-functional stability). Let F : C([0, T ]; Rd) → R be bounded. Then
E ̃PF − EPF ≤ 2∥F ∥∞ TV P ̃, P ≤ ∥F ∥∞
q
DKL( ̃P ∥ P) ,
where the last inequality is Pinsker. By Theorem 5, the RHS is
≤ ∥F ∥∞
s
βT ε ̄2 + βL2
tot 2
X
n
∆t2.
In particular, E ̃PF → EPF as N → ∞ and ε ̄ → 0 (Theorem 6).
Corollary 6 (Two-time correlations and Green–Kubo kernels). Fix a bounded observable φ : Rd → R with ∥φ∥∞ < ∞. For 0 ≤ s ≤ t ≤ T , define
Ctrue(s, t) := EP φ(Xs)φ(Xt) , Cglue(s, t) := EP ̃ φ(X ̃s)φ(X ̃t) .
Then
|Cglue(s, t) − Ctrue(s, t)| ≤ 2∥φ∥2
∞ TV P ̃, P ≤ ∥φ∥2
∞
q
DKL(P ̃ ∥ P).
Consequently, any Green–Kubo integral R T
0 C(τ ) w(τ ) dτ (with bounded weight w) computed on
X ̃· converges to the exact one as in Theorem 6.
Remark 1 (Time rescaling via the spring). With k(∆t) = β/(2∆t), k acts purely as a resolution dial: increasing k decreases the implied step ∆t = β/(2k) and lengthens correlation time in frame index, without changing the order constants in Theorem 5. When comparing autocorrelation functions to MD, one must rescale the lag axis by ∆t to a physical time grid. This is the design principle emphasised in the chapter and its figures (ACF comparison and “resolution dial”). Qualitatively, increasing k stre-
tches correlation shapes while leaving equilibrium statistics intact.
H.8.2 FREE ENERGIES FROM END-POINTS AND FROM PATHS
Corollary 7 (Zwanzig FEP bias under terminal-law mismatch). Let qT be the terminal law of X ̃T
and π the target ∝ e−βV . For any reference potential Vref define w(x) = exp{−β[V (x)−Vref (x)]}. Then
EqT w − Eπw ≤ p χ2(qT ∥π) p Eπ[w2] ≤
p
eDKL(qT ∥π) − 1 p Eπ[w2] .

Chapter 2: Diffusion Models are Molecular Propagators
In particular, if DKL(qT ∥π) ≪ 1, then
EqT w − Zref /Z ≤ pDKL(qT ∥π) p Eπ[w2] 1 + o(1) .
By Theorem 5 and data processing, DKL(qT ∥π) obeys the same finite-schedule bound as the path KL. Hence the Zwanzig estimator bias vanishes under the refinement regime.
Derivation. Write r = dqT
dπ . Then EqT w − Eπw = Eπ[(r − 1)w]. Cauchy–Schwarz gives |Eπ[(r − 1)w]| ≤ pEπ[(r − 1)2]pEπ[w2] = pχ2(qT ∥π) pEπ[w2]. Finally, χ2 ≤ eDKL − 1.
Corollary 8 (Jarzynski-type path estimator). Let G(ω) = exp{−βW (ω)} be any nonnegative path weight (e.g. work functional along a nonequilibrium switching). Then
EP ̃G − EPG ≤
q
χ2( ̃P ∥ P) p EP[G2] ≤
q
eDKL( ̃P ∥ P) − 1 p EP[G2] .
Hence the free-energy difference −β−1 log EG computed on glued paths converges to the exact value; moreover, for m := EPG > 0,
∆Fglue − ∆Ftrue ≤ 1
β
|E ̃PG − EPG|
min{E ̃PG, EPG} ≲ 1
βm
q
eDKL( ̃P ∥ P) − 1 pEP[G2].
H.8.3 TIME AVERAGES, VARIANCE, AND SPECTRAL-GAP IMPLICATIONS
Assumption 6 (Strong convexity (optional for sharp rates)). Assume ∇2V (x) ⪰ mId for some m > 0; then the Langevin semigroup has spectral gap at least m and a Poincar ́e constant 1/m.
Corollary 9 (Variance and IAT for time averages). Let φ ∈ L2(π) with π[φ] = 0 and define the
time average φ ̄T := 1
T
RT
0 φ(Xt) dt (resp. φ ̃ ̄T on X ̃t). Under Assumption 6,
Var(φ ̄T ) ≤ 2
mT Varπ(φ).
Moreover, for the glued process,
E[φ ̃ ̄T ] − E[φ ̄T ] ≤ ∥φ∥∞
s
βT ε ̄2 + βL2
tot 2
X
n
∆t2,
and
Var(φ ̃ ̄T ) − Var(φ ̄T ) ≤ C(φ)
s
βT ε ̄2 + βL2
tot 2
X
n
∆t2
for a constant C(φ) depending on ∥φ∥∞ and Varπ(φ). Thus the MSE of time-averaged observables under glue converges to that of the exact process.
Remark 2 (Spectral gap and “stiffness dial”). When V is m-strongly convex, the effective local curvature of the glued score ∇V (x) + k(x − a) is m + k, so the local contractivity rate of the drift increases with k. While the invariant law of x is unchanged in the anchor construction, the discrete proposal contracts faster in stiff directions, reducing integrated autocorrelation times in practice (consistent with the empirical findings and the “enhanced gap” discussion in the chapter).
H.8.4 COMPLEXITY/SPEED-UP COROLLARIES (WALL-CLOCK AND ACCURACY)
Recall the finite-schedule bound
DKL(P ̃ ∥ P) ≤ βT ε ̄2 + βLt2ot
2
X
n
∆t2.
Corollary 10 (Steps needed for accuracy ε). With uniform steps ∆t = T /N ,
DKL(P ̃ ∥ P) ≤ βT ε ̄2 + βLt2ot
2
T2
N.

Chapter 2: Diffusion Models are Molecular Propagators
To guarantee DKL ≤ ε2 it suffices to take
N ≥ βLt2otT 2
2 (ε2 − βT ε ̄2) (ε2 > βT ε ̄2).
Hence, at fixed model error, accuracy improves as O(N −1); with higher-order harmonic adapters (Heun/SRK), the schedule term improves to O(N −p) with the same proof pattern (momentmatching), reducing N further. See the chapter’s Appendix E for explicit SRK adapters that preserve parallelism.
Corollary 11 (Effective sample size (ESS) and wall-clock). Let τint be the integrated autocorrelation time of φ(Xt). For a trajectory of duration T = N ∆t, the effective sample size ESS ≈ T /(2τint). If the glue increases the local contractivity in stiff modes (Remark 1), then τint decreases and ESS increases at the same network-call budget (the per-step cost equals a single score evaluation). Combined with Corollary 10, one obtains the MSE scaling
MSE(φ ̃ ̄T ) ≲ Varπ(φ)
ESS + ∥φ∥2
∞
r
βT ε ̄2 + βLt2otT 2
2N ,
making explicit the variance–bias trade-off: increase N until the schedule term is below the model term, then reduce ε ̄ (distillation/training). The resolution dial k = β/(2∆t) allows tuning correlation length at fixed bias order.
H.8.5 RELATIONS AMONG THE COROLLARIES
• (Theorem 5) ⇒ (Cor. 5, 6). Substitute Pinsker into path functionals to bound trajectory-level observables and two-time correlations.
• (Theorem 5) ⇒ (Cor. 7). Apply data processing to pass from path KL to terminal KL; use χ2 ≤ eKL − 1.
• (Theorem 5) ⇒ (Cor. 8). Work on path space directly with Cauchy–Schwarz; convert to a free-energy bound via log-Lipschitz on (0, ∞).
• (Assump. 6) ⇒ (Cor. 9). Use Poincare ́/Green–Kubo to control variance of time averages; combine with path-KL to control bias and variance gap.
• (Theorem 5) + uniform steps ⇒ (Cor. 10). Turn the schedule term into an explicit N -law; the chapter’s SRK adapters improve the rate to O(N −p) at the same parallel depth.
• (Remark 1) + (Cor. 11). The algebraic identity k(∆t) = β/(2∆t) lets one trade correlation length against resolution without changing the bias order; practical speed-ups follow from larger ESS at fixed wall-clock.
I PYTHON HARMONIC ADAPTER FUNCTION
PRACTICAL CHOICE: HARMONIC-ONLY TO AVOID EXTRA SCORE EVALUATIONS
In our pipeline, the **harmonic adapter** with specified minimum distance is used instead of a score-modulated variant because it:
1. Requires only one scalar ft per frame from dt, avoiding **additional score evaluations** (e.g., learned or external scoring functions) that would otherwise increase wall time.
2. Provides stable, semiconvex coupling around rmin, which empirically reduces optimization noise while preserving temporal smoothness.
import torch from typing import Optional
def harmonic_adapter( self, coords: torch.Tensor, # [T, N, 3] align: bool = True, max_neighbors: int = 3, # S (number of forward temporal ,→ neighbors)

Chapter 2: Diffusion Models are Molecular Propagators
reduction_factor: float = 0.6, # rho in (0,1) gm: Optional[torch.Tensor] = None, # optional helper arg for ,→ align-aware MSE k: float = 1.0e-1, # spring constant r_min: float = 12.0, # preferred distance eps: float = 1e-9, # small numerical stabilizer ): """ Harmonic-only temporal adapter. The routine builds bidirectional temporal couplings between frames (t, t+s) with geometric decay.
Args: coords: [T, N, 3] time-ordered coordinates. align: if True, use alignment-aware MSE helper; else plain MSE. max_neighbors: number of forward temporal neighbors S. reduction_factor: rho in (0,1), geometric decay with neighbor shift ,→ s.
gm: optional geometry/guide passed to alignment-aware MSE helper. k: harmonic stiffness; r_min: preferred distance; eps: stability ,→ term.
Returns: gradients: [T, N, 3] """ if coords.ndim != 3 or coords.shape[-1] != 3: raise ValueError("coords must be [T, N, 3].") device, dtype = coords.device, coords.dtype T, N, _ = coords.shape if T < 2: raise ValueError("Need at least two frames (T >= 2).")
# --- Per-frame scalar distance d_t = sqrt(MSE) + eps --if align: mse_d2 = align_and_calculate_mse(coords, gm=gm) # user-provided ,→ helper else: mse_d2 = calculate_mse(coords) # user-provided ,→ helper d = torch.sqrt(mse_d2.to(device=device, dtype=dtype)) + ,→ torch.as_tensor(eps, device=device, dtype=dtype) # [T]
# --- Harmonic force scalar f_t = -k (d_t - r_min) --f = -torch.as_tensor(k, device=device, dtype=dtype) * (d ,→ torch.as_tensor(r_min, device=device, dtype=dtype)) # [T]
# --- Batched Kabsch alignment of all frames to the first --center_of_mass = coords.mean(dim=1, keepdim=True) coords_centered = coords - center_of_mass reference = coords_centered[0].unsqueeze(0).expand(T, -1, -1) coords_aligned = kabsch_algorithm_batch(reference, coords_centered) ,→ # [T, N, 3]
# --- Accumulate neighbor contributions (vectorized; O(T N S)) --gradients = torch.zeros_like(coords_aligned, device=device, ,→ dtype=dtype) rho = torch.as_tensor(reduction_factor, device=device, dtype=dtype) factors = rho ** torch.arange(max_neighbors, device=device, ,→ dtype=dtype) # [S] invN = torch.as_tensor(1.0 / float(N), device=device, dtype=dtype)
# Bidirectional: add to t, subtract from t+s for shift in range(1, max_neighbors + 1): if shift >= T: break dR = coords_aligned[:-shift] - coords_aligned[shift:] # ,→ [T-shift, N, 3]

Chapter 2: Diffusion Models are Molecular Propagators
f_s = f[:-shift].view(-1, 1, 1) # ,→ [T-shift, 1, 1] contrib = factors[shift - 1] * (f_s * dR) * invN # ,→ [T-shift, N, 3] gradients[:-shift] += contrib gradients[shift:] -= contrib
return gradients
MATHEMATICAL SUMMARY (HARMONIC-ONLY, MATCHES CODE)
Given time-ordered coordinates R0:T −1 ∈ RT ×N×3, define the scalar per-frame distance
dt =
q
MSE distance Rt; (optional alignment helpers) + ε, t = 0, . . . , T − 1.
The harmonic force magnitude used by the adapter is
ft = − k dt − rmin .
All frames are aligned to the first via batched Kabsch to obtain Rb t. For a reduction factor ρ ∈ (0, 1) and a maximum forward temporal neighborhood S = max neighbors, the bidirectional contribution between frames (t, t + s) is
∆Rt→t+s := Rb t − Rb t+s ∈ RN×3, g(s)
t = ρ s−1 ft
∆Rt→t+s
N , g(s)
t+s = − g(s)
t.
Accumulating over valid pairs yields the returned gradients G0:T −1 ∈ RT ×N×3:
Gt =
S
X
s=1
t+s≤T −1
ρ s−1ft
Rb t − Rb t+s
N−
S
X
s=1
t−s≥0
ρ s−1ft−s
Rb t−s − Rb t
N.
J EM FROM AN rmin–DISTANCE GLUE (NO LEARNED SCORE)
State and distances. Stack the T frames into a single state X = (X0, . . . , XT −1) ∈ RT ×N×3. For each pair (t, s) (neighbor shift s ∈ {1, . . . , S}) define the distance
rt,s(X) := 1
N ∥Xt − Xt+s∥2
F
1/2
,
(or any smooth “distance-like” scalar; SE(3)-invariant choices are allowed). Fix a preferred scale rmin > 0 and weights αs ≥ 0 (e.g. αs = ρ s−1).
Radial glue energy. Define the quadratic (harmonic) glue on the whole path state
Uglue(X) = k
2
T −1
X
t=0
S
X
s=1
αs rt,s(X) − rmin
2, k > 0. (40)
Its negative gradient w.r.t. the slice Xt is the deterministic “force”
Ft(X) := −∇Xt Uglue(X) = −
S
X
s=1
αs
k rt,s(X) − rmin
N rt,s(X) Xt−Xt+s −
S
X
s=1
αs
k rt−s,s(X) − rmin
N rt−s,s(X) Xt−Xt−s ,
(41) with the obvious truncation at boundaries. In vector form, F (X) = −∇Uglue(X) lives in RT ×N×3.
EM kernel with rmin glue (score-free). Work in friction units βD = 1 and set the stiffness–step map
k(∆t) = 1
2D ∆t = β
2 ∆t .

Chapter 2: Diffusion Models are Molecular Propagators
R0:T −1
coordinates [T, N, 3]
Per-frame distance dt = pMSE(·) + ε
Scalar ft: −k(dt − rmin)
Batched Kabsch (optional): Rb t → Rb 0
Temporal diffs (forward shifts s = 1..S):
∆Rt→t+s = Rb t − Rb t+s
Accumulate bidirectionally with weight ρs−1/N
G0:T −1
gradients [T, N, 3]
Figure 16: Data flow for the (score-free) harmonic adapter with optional LJ-style scalar and temporal neighbors.
Consider the Langevin SDE on the path state dXt = F (Xt) dt + √2D dWt, whose drift is entirely the rmin glue equation 41. A single Euler–Maruyama (EM) step with step size ∆t is
Xn+1 = Xn + ∆t F (Xn) +
√
2D ∆t Ξn, Ξn ∼ N (0, I). (42)
Equivalently, the one-step conditional is the exact EM Gaussian
p(Xn+1 | Xn) = 1
(4πD∆t)d/2 exp
h
−β
4D∆t Xn+1 − Xn + ∆t F (Xn) 2i
, (43)
which is the quadratic “glue” kernel with stiffness k(∆t) = β/(2∆t). Thus, with no learned score, the rmin glue alone yields an EM update: the drift is F = −∇Uglue and the covariance is 2D∆t I. This is the full EM kernel (mean and covariance), not a projection of it.
1
Nearest–neighbor and multi–neighbor cases. For S = 1 the path precision is tri-diagonal (time-chain Laplacian) and equation 43 coincides with the standard EM chain on a quadratic path energy. For S > 1 the precision is banded; equation 41 becomes a higher-order temporal filter with eigenvalues λ(ω) = k
N
P
s αs 2(1 − cos sω), so the EM step damps high temporal frequencies more strongly while remaining an exact EM update for the same drift and covariance.
Match to the implementation. The Mathematical Summary panel (p. 34) sets a per-frame scalar ft = −k(dt − rmin) and accumulates pairwise contributions proportional to ft (Xt − Xt+s) (Eq. (40), bidirectional variant).This is precisely the structure of equation 41 up to any preconditioning/normalization used in code. With k = β/(2∆t) and Gaussian noise N (0, 2D∆t I), one step of the sampler is exactly equation 42.
1The EM kernel written as a quadratic Boltzmann factor with stiffness k(∆t) = β/(2∆t) is Eq. (4)–(5) in the draft; substituting −∇Uglue for the drift gives equation 43.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:41.373Z
- **Text Length:** 91049 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 36 of 36
