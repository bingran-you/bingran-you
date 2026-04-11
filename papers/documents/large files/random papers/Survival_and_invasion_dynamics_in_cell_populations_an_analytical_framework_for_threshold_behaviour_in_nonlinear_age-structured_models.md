# PDF Document: Abo and Baker - 2025 - Survival and invasion dynamics in cell populations an analytical framework for threshold behaviour.pdf

**File Path:** Abo and Baker - 2025 - Survival and invasion dynamics in cell populations an analytical framework for threshold behaviour.pdf

**Processed Date:** 2026-02-10T18:18:29.289Z

**File Size:** 19372.68 KB

**Total Pages:** 29

**Extracted Pages:** 29

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3643

**Title:** Survival and invasion dynamics in cell populations: an analytical framework for threshold behaviour in nonlinear age-structured models

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

SURVIVAL AND INVASION DYNAMICS IN CELL POPULATIONS: AN ANALYTICAL FRAMEWORK FOR THRESHOLD BEHAVIOUR IN NONLINEAR AGE-STRUCTURED MODELS
ST ́EPHANIE M. C. ABO∗ AND RUTH E. BAKER∗
Abstract. Cell populations invade through a combination of proliferation and motility. Proliferation depends on the internal timing of cell division: how long cells take to complete the cell cycle. This timing varies substantially within (and across) cell types, creating age structure where cells at different times since their last division have different propensities to divide. Classical mathematical models of cell spreading treat division as memoryless and predict exponential cell-cycle-time dis-
tributions. Lineage tracing, by contrast, reveals peaked, gamma-like distributions that indicate a maturation delay leading to a fertility window. This gap motivates a modelling framework that incorporates age-dependent cell division rates while retaining analytical tractability. We address this through a moment-hierarchy framework that tracks time since cell division, with age resetting to zero at division. The framework yields explicit formulae for steady-state age distributions, cell-cycle-time-
 distributions, and invasion speeds. For age-independent rates, we recover classical Fisher–KPP. Three fundamental principles emerge. First, age structure systematically reduces a population’s carrying capacity and narrows the viable parameter range for positive steady states. Second, classical linear theory overestimates invasion speeds; the true minimal speed is slower when division is age-dependent. Third, the parameter condition for population survival is identical to the condition for a posit-
ive invasion speed.
Key words. Cell cycle dynamics, division timing, structured populations, Fisher–KPP equation, travelling waves, integrodifferential equations, survival conditions.
1. Introduction. The coordinated behaviour of motile and proliferative cells is fundamental to embryonic development, tissue regeneration, wound healing, and tumour invasion. In such processes, spatial expansion occurs through collective cell invasion, where cells move as cohesive groups with mechanical and biochemical coupling [1]. These dynamics depend on both external cues (adhesion, confinement) and internal cell-cycle state [2, 3, 4]. The cell cycle imposes a necessary maturation delay before-
 division can occur, acting as a key biological constraint. The progression time through the cell cycle, measured as the intermitotic time (IMT), exhibits marked heterogeneity in experimental data [5, 6]. High-resolution lineage tracing reveals IMT distributions that are typically gamma-like, with defined peaks and right skew, rather than exponential as assumed in memoryless birth models [7] (Figure 1(a)). This discrepancy indicates that models assuming constant division rates across the cell cycl-
e do not account for essential biological regulation. Non-exponential division timing has motivated structured modelling approaches that account for how internal states constrain and delay cell division (Figure 1(b)). These approaches introduce continuous variables representing internal timing [9, 10, 11, 12]. Cell age can denote chronological age, phase duration, or generational time; age-structured partial differential equations (PDEs) provide a general formalism accommodating this variability. -
Here, we focus on cell age as time since last division—a biologically grounded assumption aligning with experimental measurement of cell-cycle times. This simplification aggregates sub-stages while providing a meaningful foundation for future extensions incorporating finer-grained structure. Classical mathematical models of population spread, such as the Fisher–KPP (Fisher–KolmogorovPetrovsky–Piskunov) equation, assume cells divide at a constant rate independent of time since division. These model-
s do not account for the finite time required to complete the cell cycle, which affects divisiontime distributions and the capacity of populations to persist or invade. Age-structured models address this gap by tracking the joint evolution of density and internal time. The foundational works of McKendrick [13] and von Foerster [14] formalised transport equations where individuals progress deterministically through age. In the simplest linear setting, populations grow exponentially and approach sta-
ble age distributions. Gurtin and MacCamy [15, 16] extended this to include density dependence, spatial diffusion, and biologically motivated division kernels where division rates peak at intermediate ages. Their formulation combined division and death within a single loss term, with age dependence appearing only in the boundary condition. This simplified the mathematics but limited the capacity to distinguish how ageing, division, and death separately influence dynamics. Spatial theory advanced w-
ith the work of Al-Omari and Gourley [17], who established the existence of travelling waves in age-structured reaction-diffusion models. Gourley [18] proved linear stability of travelling fronts, and Li, Mei, and Wong [19] extended this to nonlinear stability, though initially restricted to small
∗Mathematical Institute, University of Oxford, UK (stephanie.abo@maths.ox.ac.uk).
1
arXiv:2511.17279v2 [q-bio.CB] 24 Nov 2025

2 S. ABO AND R. E. BAKER
Fig. 1. (a) Distribution of intermitotic times (IMTs) from lineage-tracing data (grey bars) with fitted exponential (red), Erlang (green), and gamma mixture (blue) models. (b) Schematic of the cell cycle. Cells progress through four main phases: Gap 1 (G1, growth and preparation for DNA synthesis), Synthesis (S, DNA replication), Gap 2 (G2, preparation for mitosis), and Mitosis (M, cell division; here mitosis and cell division are used interchangeably). In our model, cell age (defined as time sinc-
e last division) resets to zero upon mitosis, providing a coarse-grained representation of cell-cycle progression. The intermitotic time (IMT) is measured from one mitosis to the next (M→M). Experimental IMT data reproduced with permission, courtesy of Richard L. Mort (Lancaster University) and Matthew J. Ford (University of Cambridge), provided by Christian A. Yates (University of Bath). Cell-cycle stages adapted from [8] (BioRender).
maturation delays. Mei and Wong [20] later proved nonlinear stability for arbitrarily large delays. In applied contexts, structured PDEs have been used to model cell-cycle regulation in proliferating tissues [21] and to connect multi-stage stochastic frameworks with continuous age-structured formalisms [10]. More recently, Pang and Pardoux [22] established formal connections between stochastic individual-based models, renewal equations, and age-structured PDEs. Despite these advances, most nonline-
ar age-structured PDEs remain analytically intractable. Explicit characterisations of steady states, division-time distributions, and invasion speeds remain rare, limiting the ability to derive interpretable predictions from such models. We develop an analytical framework for collective cell invasion that links single-cell division timing to population persistence and invasion. Models are classified by their rate functions—constant, exponentially decaying, or gamma-like. Integration with respect t-
o age yields a set of integro–differential equations where age structure enters through weighted integrals. This finite integro–differential formulation can be analysed directly, without closure approximations. Division and death are treated as separate processes, each dependent on cell age and local density. We treat non-spatial and spatial dynamics. In the non-spatial setting, we obtain explicit formulae for steady-state age distributions, cell-cycle-time distributions, and the parameter conditi-
ons for population persistence. In the spatial setting, we derive expressions for the minimal wave speed and recover the classical Fisher–KPP limit when division and death are age-independent. To our knowledge, this is the first deterministic analysis within this class of nonlinear age-structured PDEs to provide explicit cell-cycle-time distributions together with survival conditions and invasion criteria. It addresses a gap previously approached only through stochastic or discrete-time models [7,-
 23]. We show that the shape of the division kernel controls both population persistence and invasion speed. Biologically, the results account for the gamma-shaped division-time distributions observed in lineage-tracing data and demonstrate how longer division times slow invasion. The framework links measurable quantities to the underlying division and death mechanisms. The paper is structured as follows. Section 2 introduces the age-structured model and derives the moment-hierarchy reduction. Sec-
tion 3 analyses non-spatial dynamics and establishes survival thresholds that depend systematically on division kernel shape. Sections 4–5 characterise steady-state age distributions and cell-cycle-time distributions. Section 6 establishes minimal wave speeds for spatial models and shows that classical linear theory overestimates invasion rates when division is age-dependent. Section 7 discusses

INVASION DYNAMICS IN CELL POPULATIONS 3
biological implications and experimental validation. Our approach builds on the work of Gurtin and MacCamy [15, 16] but diverges by separating division and death explicitly, retaining age-dependence in both loss terms, and deriving analytical results without closure assumptions.
2. Model framework. We model a motile and proliferative cell population, where cell age tracks time since last division. Let u(a, x, t) represent the density of cells of age a ≥ 0 at position x ∈ Ω ⊆ Rd and time t ≥ 0, with total population
(2.1) P (x, t) =
Z∞
0
u(a, x, t) da.
Cells age at unit rate, move diffusively with coefficient κ ≥ 0, and are removed by death at rate μ(a, P ) ≥ 0 or division at rate β(a, P ) ≥ 0. Upon division, two daughter cells enter at age zero, giving the transport-renewal system
(2.2) ∂tu + ∂au = κ ∆u − μ(a, P (x, t)) + β(a, P (x, t)) u,
u(0, x, t) = 2
Z∞
0
(2.3) β(a, P (x, t)) u(a, x, t) da.
The boundary condition (2.3) represents the influx of newborn cells. Initial data are u(a, x, 0) = u0(a, x) ≥ 0.
For bounded Ω, we impose no-flux boundary conditions (confined tissue). For Ω = Rd, one may assume decay as |x| → ∞ (unbounded spread). The model captures two mechanisms. First, division and death rates depend on cell age and local density P (x, t). This density dependence captures contact inhibition without imposing an explicit carrying capacity. Second, division and death are treated as distinct processes. This separation enables direct analysis of how ageing and division timing independently in-
fluence population dynamics. We analyse five model cases (Table 1): constant rates (age-homogeneous), exponential decay (early division), and gamma-type profiles (maturation delay). These forms are chosen for analytical tractability and biological relevance. Each case is studied in both non-spatial (κ = 0) and spatial (κ > 0) settings.
Table 1
Model cases studied in both non-spatial and spatial settings
Case μ(a, P ) β(a, P )
1 μ β(1 − P )
2 μ βe−αa(1 − P ) 3 μ βae−αa(1 − P ) 4 μP βae−αa(1 − P ) 5 (μ − γae−αa)P βae−αa(1 − P )
2.1. Integro–differential reduction. We now derive an integro–differential reduction of the agestructured system (2.2)–(2.3). Integrating Equation (2.2) with respect to age, and assuming u(a, x, t) → 0 as a → ∞, we obtain the population balance
(2.4) ∂tP = κ ∆P (x, t) + B(x, t) −
Z∞
0
μ(a, P (x, t)) + β(a, P (x, t)) u(a, x, t) da,
where B(x, t) = u(0, x, t) is given by the renewal condition (2.3). When division and death rates depend only on the total population, the system closes in terms of P (x, t) alone; see Lemma 2.1. This corresponds to logistic-type dynamics (cf. Case 1).
Lemma 2.1. Suppose the division and death rates depend only on total density, i.e. μ(a, P ) = μ(P ) and β(a, P ) = β(P ), with μ, β ≥ 0 and continuous. Under the renewal condition (2.3), the total population
P (x, t) = R ∞
0 u(a, x, t) da satisfies the reaction-diffusion equation
(2.5) ∂tP = κ ∆P + β(P ) − μ(P ) P.

4 S. ABO AND R. E. BAKER
More generally, for affine feedback β(P ) = β0 − β1P and μ(P ) = μ0 + μ1P ,
(2.6) ∂tP = κ ∆P + (β0 − μ0) − (β1 + μ1)P P,
where the linear growth rate is r = β0 − μ0 and the carrying capacity is K = (β0 − μ0)/(β1 + μ1). Hence K > 0 requires β0 > μ0 and β1 + μ1 > 0.
Proof. Integrate (2.2) with respect to a with u(∞, x, t) = 0 to give
(2.7) ∂tP − u(0, x, t) = κ ∆P −
Z∞
0
μ(P ) + β(P ) u da.
Since μ, β depend only on P , R ∞
0 μ(P ) + β(P ) u da = μ(P ) + β(P ) P . From (2.3), u(0, x, t) = 2β(P )P ,
and R ∞
0 u da = P . Substitution yields (2.5).
For age-dependent rates, we introduce age-weighted moments that mirror the division kernel structures. For any fixed decay parameter α > 0, define
(2.8) C(x, t; α) =
Z∞
0
e−αau(a, x, t) da, D(x, t; α) =
Z∞
0
ae−αau(a, x, t) da.
Multiplying Equation (2.2) by e−αa and integrating by parts with respect to a gives
(2.9)
∂tC = κ∆C(x, t; α) + B(x, t) − αC(x, t; α)
−
Z∞
0
[μ(a, P (x, t)) + β(a, P (x, t))] e−αau(a, x, t) da.
Similarly, multiplying Equation (2.2) by ae−αa and integrating gives
(2.10)
∂tD = κ∆D(x, t; α) + C(x, t; α) − αD(x, t; α)
−
Z∞
0
[μ(a, P (x, t)) + β(a, P (x, t))] ae−αau(a, x, t) da.
These moments also appear directly in the boundary renewal term, which becomes case-dependent:
(2.11) B(x, t) =


2β(1 − P (x, t)) P (x, t), Case 1, 2β(1 − P (x, t)) C(x, t; α), Case 2, 2β(1 − P (x, t)) D(x, t; α), Cases 3–5.
To express the integral loss terms in Equation (2.9) and Equation (2.10), i.e.,
R∞
0 [μ(a, P (x, t)) + β(a, P (x, t))] e−αau(a, x, t) da and R ∞
0 [μ(a, P (x, t)) + β(a, P (x, t))] ae−αau(a, x, t) da, we
define higher-order moments. For any constant decay parameter α > 0, define
(2.12)
I0(t, x; α) =
Z∞
0
e−2αau(a, x, t) da, I1(t, x; α) =
Z∞
0
ae−2αau(a, x, t) da,
I2(t, x; α) =
Z∞
0
a2e−2αau(a, x, t) da.
The evolution of (P, C, D) involves these higher moments, so the system does not close. We use positivity constraints and integral inequalities to bound Ik and derive population thresholds. Equations (2.4), (2.9), and (2.10), together with definitions (2.12) and case-specific B(x, t) in Equation (2.11), constitute the reduced integro–differential system.
2.2. Population persistence: survival conditions and bounds on population size. We assume a well-mixed system and determine when populations sustain positive steady states and derive upper bounds on equilibrium size.

INVASION DYNAMICS IN CELL POPULATIONS 5
The well-mixed system (κ = 0) reduces to a transport-renewal model,
(2.13)
∂u
∂t + ∂u
∂a = − [μ(a, P (t)) + β(a, P (t))] u(a, t),
u(0, t) = B(t) = 2
Z∞
0
β(a, P (t)) u(a, t) da,
P (t) =
Z∞
0
u(a, t) da.
If P (0) ≤ 1 then the total population P (t) ∈ [0, 1], ∀t by construction. This system admits an explicit solution via characteristics,
(2.14) u(a, t) =
(
u0(a − t) S(a − t, a, t; P ), a > t, B(t − a) S(0, a, t − a; P ), 0 ≤ a ≤ t,
where the survival probability from age a0 to a (i.e., the probability that a cell neither dies nor divides during this interval) is given by
(2.15) S(a0, a, t; P ) = exp −
Za
a0
[μ(a′, P (a′ − a0 + t)) + β(a′, P (a′ − a0 + t))] da′ .
In the long-time limit, we assume convergence to a steady state,
(2.16) u(a, t) → F (a), P (t) → P ̄,
where P ̄ is the total population at equilibrium. The steady-state distribution satisfies
(2.17) F ′(a) = − μ(a, P ̄) + β(a, P ̄) F (a),
with F (0) = 2 R ∞
0 β(a, P ̄) F (a) da and P ̄ = R ∞
0 F (a) da. We define the steady-state survival function
(2.18) S(a, P ̄) = exp −
Za
0
μ(a′, P ̄) + β(a′, P ̄) da′ ,
so that the age distribution can be expressed explicitly as
(2.19) F (a) = F (0) S(a, P ̄).
Substituting Equation (2.19) into the boundary condition (2.17) yields the integral constraint
(2.20) 1 = 2
Z∞
0
β(a, P ̄) S(a, P ̄) da.
This equation determines the possible steady states P ̄. A positive solution P ̄ > 0 indicates a viable, persistent population. Our moment reduction approach leads to explicit upper bounds Pc, derived case by case below,
such that any steady state satisfies P ̄ ≤ Pc. These bounds hold under the assumptions that β(a, P ) is non-increasing in P , μ(a, P ) is non-decreasing in P , and the relevant moments C, D, Ik are finite.
Case 1: Age-homogeneous dynamics. When division and death rates are independent of age, all cells share the same survival probability regardless of time since division. We assume that
μ(a, P ) = μ, β(a, P ) = β(1 − P ),
with constants μ > 0, β > 0, where the term β(1 − P ) models contact inhibition: division potential decreases with density. Constant μ implies death rate is the same at all densities. The governing Equation (2.4) reduces to logistic growth (Lemma 2.1):
P ′(t) = (β − μ) P (t) 1 − P (t)
K , K = β−μ
β.
Survival requires β > μ; otherwise P ≡ 0 is the only steady state. When β > μ, the unique positive equilibrium is
(2.21) Pc = 1 − μ
β,
representing the classical logistic balance between proliferation and mortality.

6 S. ABO AND R. E. BAKER
Case 2: Early-division bias. When cells have short cell cycle times (e.g., embryonic stem cells or intestinal epithelial cells), division events occur predominantly shortly after the previous division. We therefore assume that
(2.22) μ(a, P ) = μ, β(a, P ) = βe−αa(1 − P ),
with constants μ, β, α > 0. The parameter α controls the decline in division rate and favours division at younger ages. The contact inhibition factor (1 − P ) limits division at high density. Inserting these rates into the main PDE, Equation (2.2), and using the model reduction outlined in Section 2.1 yields a reduced moment system in the variables (P, C, I0),
(2.23) P ′(t) = −μP (t) + β(1 − P (t))C(t),
C′(t) = −(μ + α)C(t) + β(1 − P (t)) (2C(t) − I0(t)) .
At steady state, algebraic relations between P ̄, C ̄, and I0 with the constraint I ̄0 ≥ 0 yields the survival condition 2β > μ + α. Any positive steady state satisfies
(2.24) Pc = 1 − μ + α
2β .
Compared to Case 1, the survival condition reflects the combined effects of mortality (μ) and age-related decline in division rates (α).
Case 3: Maturation delay. When cells require time to pass cell-cycle checkpoints (G1/S/G2/M) before dividing, division potential is low immediately after division and peaks at intermediate ages. We therefore assume that
μ(a, P ) = μ, β(a, P ) = βae−αa(1 − P ),
with constants μ, β, α > 0. The division rate follows a gamma-type profile, which peaks at age a = 1/α. Inserting these rates into Equation (2.2) and using the reduction framework (Section 2.1) yields a coupled moment system in the variables (P, C, D, I1, I2),
(2.25)
P ′(t) = −μP (t) + β(1 − P (t)) D(t), C′(t) = −(μ + α) C(t) + β(1 − P (t)) (2D(t) − I1(t)) , D′(t) = −(μ + α) D(t) + C(t) − β(1 − P (t)) I2(t).
Solving this system at steady state, and imposing non-negativity of (I1, I2) yields the survival condition
2β > (μ + α)2. Any positive steady state satisfies
(2.26) Pc = 1 − (μ + α)2
2β .
The quadratic penalty reflects a compounded cost: cells must survive both background mortality (μ) and the period of low division probability before reaching peak fertility at age 1/α.
Cases 4 and 5: Maturation delay with density-dependent death rate. When cell death is driven by crowding rather than intrinsic processes, death rate scales with population density. We combine densitydependent death with the gamma-type division kernel from Case 3. In Case 4, we assume μ(a, P ) = μP . Using the reduction framework (Section 2.1) yields coupled moment equations in (P, C, D, I1, I2) analogous to those in Case 3. Again solving at steady state and assuming non-negativity of the higher mo-
ments yields a survival condition 2β > α2, and the population bound becomes
(2.27) Pc = −(αμ + β) + p(αμ + β)2 − μ2(α2 − 2β)
μ2 .
Case 5 extends this by incorporating age-dependent mortality. We assume μ(a, P ) = (γ − μae−αa)P , which captures elevated death rates at birth, a decline during maturation, and a subsequent rise with senescence.

INVASION DYNAMICS IN CELL POPULATIONS 7
Despite this added complexity, the survival condition remains 2β > α2, and the steady-state population is bounded above,
(2.28) P ̄ ≤ min (Pc, β/(γ + β)) ,
where Pc is given by Equation (2.27). The second constraint arises from moment sign requirements; for moderate γ, the first term is the relevant upper bound (see Supplementary Materials, Section 3.3). The critical shift from Cases 1–3 is that the survival condition now depends only on the division kernel parameters (β, α), not on the death rate μ. At low density (P → 0), density-dependent death terms vanish, so persistence is determined solely by the low-density division potential β(a, 0). However-
, the equilibrium population level Pc does depend on μ. This reflects how the death rates modulate the carrying capacity but not the survival condition.
These cases show a clear progression in how age structure constrains survival. Case 1 recovers the classical rule that net growth determines persistence. Case 2 imposes a linear penalty for early reproductive decline. Case 3 introduces a quadratic penalty that reflects the compounded challenge of surviving both a nonreproductive phase and background mortality. This progression quantifies the cost of delayed reproduction. In Cases 4–5, the survival condition depends only on division kernel shape, w-
hereas death rate parameters affect the equilibrium bound Pc, and determine how large the population can be once it survives. Figure 2 and Table 2 summarise these results. Numerical simulations confirm that steady-state populations respect their theoretical bounds Pc. In Case 1, solutions match the bound exactly because the moment system closes in P . Cases 2–3 track their respective bounds closely, while Cases 4–5 form bands beneath them. This banding stems from a fundamental difference in how mo-
rtality operates. In Cases 1–3, constant death rates affect growth at all densities. Both the survival condition and the equilibrium population density involve μ, which sets a unique equilibrium for a given (β, α, μ). In Cases 4–5, density-dependent death vanishes at low densities. Survival is μ-independent, depending only on (β, α), but the bound Pc is μ-dependent. This gives one degree of freedom: varying μ while holding (β, α) fixed produces one survival condition with different equilibria, hen-
ce the bands.
Fig. 2. Numerical steady-state population sizes P ̄ plotted against threshold conditions (Table 2) for each non-spatial model
(Cases 1–5). Dashed lines indicate the analytical upper bounds P ̄c. Each panel corresponds to a different model case: (a) Case 1; (b) Case 2; (c) Case 3; (d) Case 4; and (e) Case 5.

8 S. ABO AND R. E. BAKER
Table 2
Summary of non-spatial models: population bounds Pc (with P ̄ ≤ Pc) and survival conditions admitting positive steady states.
Case Upper bound Pc Survival condition
1 1 − μ/β β > μ 2 1 − μ+α
2β 2β > μ + α
3 1 − (μ+α)2
2β 2β > (μ + α)2
4 −(αμ+β)+√(αμ+β)2−μ2(α2−2β)
μ2 2β > α2
5 min −(αμ+β)+√(αμ+β)2−μ2(α2−2β)
μ2 , β
γ+β 2β > α2, μ > γ/αe
3. Steady-state age distributions. As established in Section 2.2, the steady-state age distribution
(SSAD) takes the form F (a) = F (0) S(a; P ̄), where S(a; P ̄) is the survival function and F (0) is determined by the renewal constraint (2.20). It describes the fraction of cells of age a in a population at equilibrium. Intuitively, it can be expressed as
(3.1) F (a) = renewal factor × P(cell survives beyond age a)
× P(cell does not divide by age a),
which captures the balance between survival and renewal across ages. A useful summary measure is the mean population age,
(3.2)  ̄apop =
R∞
0 aF (a)da
R∞
0 F (a)da ,
which quantifies the average time since last division for cells in the population at steady state.
Table 3 lists explicit formulae for F (a) across all five cases. The value of P ̄ is found by solving the
integral constraint (2.20) numerically. Once P ̄ is known, either from this computation or from data, these formulae give F (a) directly without integrating the full PDE specified in Equation (2.13). Figure 3 validates the analytical formulae. Panels (a–e) show numerical solutions (solid) match analytical predictions (dashed) across all cases. Panel (h) reveals a consistent pattern: mean division age  ̄adiv falls below mean population age  ̄apop in all cases. This occurs because divisions concentr-
ate among cells in the reproductive window, while the population includes older, non-dividing survivors that persist in the tail and increase the mean age. The explicit SSADs therefore quantify how division timing shapes population structure. Age-independent rates (Cases 1–2) produce exponential-decay profiles because the division rates are constant across all ages. In contrast, gamma-type kernels (Cases 3–5) produce concave profiles near the origin. Newborn cells have a near-zero division probabi-
lity, which causes them to accumulate into intermediate age classes before dividing.
4. Cell-cycle-time distributions. The cell-cycle-time distribution (CCTD) describes the timing of a cell’s first division in a population at steady-state. It complements the steady-state age distribution (SSAD)
F (a), which describes population structure. Both derive from the survival probability S(a, P ̄) (2.18), but represent different biological quantities. The CCTD can be interpreted heuristically as
(4.1) f (a) = division rate × P(cell survives beyond age a)
× P(cell does not divide by age a),
which expresses the probability that a cell divides at age a. We formalise this by defining the unnormalised
cell division density as as f ̃(a) = β(a, P ̄)S(a, P ̄). This represents the density of cells undergoing their first
division at age a, given by the fraction of survivors S(a, P ̄) (cells that have survived without dying or dividing
until age a) multiplied by their instantaneous division rate β(a, P ̄). The normalised CCTD is then
(4.2) f (a) = β(a, P ̄)S(a, P ̄)
R∞
0 β(a′, P ̄)S(a′, P ̄) da′ ,

INVASION DYNAMICS IN CELL POPULATIONS 9
Table 3
Summary of steady-state age distributions F (a). Cases 1-5 correspond to different division and death rate structures as defined in Table 1.
Case F (0) F (a) = F (0) e− R a
0 h(a′) da′
1 2β(1 − P ̄)P ̄ F (0) e−μa−βa(1−P ̄)
2 2β(1 − P ̄)C ̄ F (0) e−μa− β(1−P ̄)
α (1−e−αa)
3 2β(1 − P ̄)D ̄ F (0) e−μa− β(1−P ̄)
α2 [1−e−αa(1+αa)]
4 2β(1 − P ̄)D ̄ F (0) e−μaP ̄− β(1−P ̄)
α2 [1−e−αa(1+αa)]
5 2β(1 − P ̄)D ̄ F (0) e−μa P ̄+ γ P ̄
α2 [1−e−αa(1+αa)]− β(1−P ̄)
α2 [1−e−αa(1+αa)]
Fig. 3. Steady-state age distributions across five model cases with different division and death structures. Panels (a)-(e) show steady-state distributions F (a) for Cases 1-5: numerical solutions (coloured lines with shading) compared to analytical (black dashed lines). Red triangles mark the mean population age for each case. Panel (f ) compares mean population age a ̄pop and mean division age  ̄adiv across all cases.
which ensures R ∞
0 f (a) da = 1. Using the SSAD F (a) = F (0)S(a, P ̄), the CCTD relates directly to the
population structure:
(4.3) f (a) = β(a, P ̄)F (a)
R∞
0 β(a′, P ̄)F (a′) da′ = 2β(a, P ̄)F (a)
F (0) ,
where the renewal condition F (0) = 2 R ∞
0 β(a, P ̄)F (a) da gives the final form. Thus, f (a) is the division
weighted SSAD. The SSAD F (a) includes all cells, while the CCTD f (a) conditions on those that successfully divide. A useful summary statistic is the mean division age defined by
(4.4)  ̄adiv =
Z∞
0
af (a)da,

10 S. ABO AND R. E. BAKER
which quantifies the expected timing of division events in the population. The explicit forms of the CCTD for each case are given in Table 4; Cases 1–2 produce exponential-like profiles, while Cases 3–5 yield gamma-type distributions with delayed peaks. These formulae provide a direct link to experiments. One can fit them to lineage-tracing data to either infer the underlying division kernel shape or, if the kernel form is known, to estimate specific parameters like the peak division age (α−1) and-
 the maximum division rate (β). This enables quantitative prediction of how division timing shapes population dynamics without conducting extensive numerical simulations. We first validate these expressions against numerical solutions (Fig. 4) and then demonstrate their application to experimental data (Fig. 5).
Table 4
Cell-cycle-time distributions (CCTDs) for each model case. The distribution is given by f (a) = β(a, P ̄)S(a, P ̄)/Z, where
Z is the normalization constant. The survival function is S(a, P ̄) = exp − R a
0 h(a′)da′ with the removal rate h(a) = μ(a, P ̄) +
β(a, P ̄).
Case CCTD f (a)
1 β(a, P ̄) e−(μ+β(1−P ̄)) a
2 β(a, P ̄) e−μa− β(1−P ̄)
α [1−e−αa]
3 β(a, P ̄) e−μa− β(1−P ̄)
α2 [1−e−αa(1+αa)]
4 β(a, P ̄) e−μaP ̄− β(1−P ̄)
α2 [1−e−αa(1+αa)]
5 β(a, P ̄) e−μaP ̄+ γP ̄
α2 [1−e−αa(1+αa)]− β(1−P ̄)
α2 [1−e−αa(1+αa)]
Figure 4 illustrates how the CCTD expressions translate into observable cell division-timing patterns. Cases 1–2 concentrate divisions at young ages. The exponential form in Case 1 (k = 1.0) reflects memoryless division timing, where cells have a constant division rate regardless of age, consistent with classical birthdeath models. In Case 2 (k = 0.95), division potential decreases exponentially with age, producing a hypoexponential distribution that shifts divisions to even earlier ages. This cap-
tures fast-cycling regimes where many cells divide soon after birth. In contrast, Cases 3–5 incorporate gamma-type division kernels
β(a, P ̄) ∝ ae−αa, which model a maturation delay and produce the bell-shaped CCTDs observed in lineagetracing data [5, 24]. This captures the more realistic scenario where newly divided cells require time to prepare for the next division cycle. The peak location is set by a ≈ 1/α, while the distribution height and
width are determined by β and the death rate μ. All cases exhibit an exponential tail ∼ e−μ(a,P ̄). Panel (f) overlays all normalised cases, showing the ordering implied by their means: exponential-decay division rates (Case 2) yield the lowest mean division age (15.6), followed by constant rates (Case 1, 20.8), then gamma-type cases (3–5) with later peaks and higher mean ages (23–25). We fitted the analytical CCTD for Case 3 to lineage data from cells under control (DMSO) and drugperturbed condit-
ions (Fig. 5(a)–(c)). CHX (cycloheximide) is a protein synthesis inhibitor that lengthens the G1 phase, and erlotinib (ERL) is an EGFR inhibitor that extends all cycle phases. Case 3 was selected because its gamma-type division rate is the simplest form that produces the unimodal CCTD observed experimentally. The minimum cell-cycle time a0 was set to the 10th percentile of the data, fixing the lefthand support of the distribution. For each α in a plausible range, we estimated (β, μ) by minimising -
a combined loss: the L2 difference between model and empirical cumulative distribution functions (CDFs), plus a weighting on tail survival probabilities to ensure accurate long-time behaviour. The survival condition 2β > (μ + α)2 was enforced via quadratic penalty. The fitted parameters (β, α, μ) reflect the expected mechanisms: CHX and erlotinib reduce the division rate (β) and increase the maturation timescale (1/α) compared to the DMSO control. Full fitting details and code are provided in the -
Supplementary Materials.
5. Travelling waves and invasion thresholds. We now examine travelling-wave solutions of the spatial (κ > 0) models to assess how age structure modifies invasion speed. Classical Fisher–KPP theory predicts a single wave speed determined by the net growth rate. In the context of age-structured models, two distinct linear predictions emerge. The first, clin, arises from the moment-system approximation and coincides with the Fisher–KPP prediction. The second, cmin, obtained from the age-structured fo-
rmulation, is systematically smaller. This discrepancy arises because the moment-system linearisation assumes uniform decay across all ages at the wave front, whereas the age-structured model preserves differential decay where

INVASION DYNAMICS IN CELL POPULATIONS 11
Fig. 4. Cell–cycle-time distributions across five model cases. Panels (a–e) show numerical CCTDs (solid) with fitted gamma distributions (dashed) for Cases 1–5; the fitted shape k and scale θ parameters are indicated. Squares mark mean division ages. Panel (f ) overlays all cases after normalisation to isolate shape differences: exponential (Case 1, k = 1), hypoexponential (Case 2, k < 1), and bell–shaped (Cases 3–5, k > 1). Panel (h) summarises the fitted gamma parameters and mean division ages.
younger cells dominate the front, and their lower division potential slows invasion. Moreover, the condition for a positive wave speed exactly matches the non-spatial survival condition, linking persistence and invasion within a unified framework.
5.1. Moment-system linearisation and the speed clin. We seek solutions of the form
(5.1) u(a, x, t) = φ(a, z),
with z = x − ct and c > 0, representing a front propagating at constant speed c. We apply the travelling wave ansatz (5.1) to the reduced integro–differential system (2.4)–(2.12), expressing the population moments as functions of z,
U (z) =
Z∞
0
φ(a, z) da, V (z; α) =
Z∞
0
(5.2) e−αaφ(a, z) da,
W (z; α) =
Z∞
0
ae−αaφ(a, z) da, I ̃k(z; α) =
Z∞
0
(5.3) ake−2αaφ(a, z) da for k = 0, 1, 2.
The parameter α here represents the rate at which fertility declines with age in the division kernel. We linearise the resulting system about the extinction state where all moments vanish, i.e. U (z) = V (z; α) =
W (z; α) = I ̃k(z; α) = 0 for k = 0, 1, 2. This is mathematically tractable and makes the specific biological assumption that all age classes vanish uniformly at the wave front. For each model case, this procedure yields an explicit expression for the wave speed, which we denote clin. For age-independent rates (Case 1),
this gives the classical Fisher–KPP speed, clin = 2√κr with r = β − μ. For models with age structure, clin
takes a more complex form but maintains the general structure 2√κ reff , where reff is an effective low-density growth rate.

12 S. ABO AND R. E. BAKER
Fig. 5. Experimental cell–cycle time distributions with Case 3 distributions and gamma fits. Panels (a–c) show CCTDs under DMSO (vehicle control), cycloheximide (CHX), and erlotinib (ERL). Data are plotted with the Case 3 analytical CCTD fit (solid) and a gamma distribution fit (dashed). Insets report the fitted (β, α, μ); squares mark mean division age. Panels (d–f ) show the corresponding loss landscapes in (μ, β) at the fitted α on a shared colour scale: the white curve is the constraint
boundary β = 1
2 (μ + α)2 (i.e., parameter condition for survival per Table 2); the red star marks the optimum; infeasible regions
are shaded. Axes are μ ∈ [0, 1] and β ∈ [0, 1]. The infeasible region differs across panels because the feasibility boundary depends on the fitted α for each dataset.
Table 5 summarises the wave speeds clin for Cases 1–5. Numerical simulations (Fig. 6) confirm that clin matches the observed invasion speed when division and death rates are age-independent (Case 1). For age-dependent rates, however, clin overestimates the observed speed because the age distribution at the wave front is not uniform. We derive the exact minimal speed cmin in the next section and show cmin ≤ clin in all cases.
5.2. Age-structured analysis and minimal wave speeds. We apply the ansatz (5.1) to the governing PDE (2.2),
(5.4) −cφz + φa = κφzz − [μ(a, U (z)) + β(a, U (z))]φ(a, z).
At the leading edge, where U (z) → 0, the linearised system becomes
(5.5) −cφz + φa = κφzz − [μ(a, 0) + β(a, 0)]φ(a, z),
with boundary condition
(5.6) φ(0, z) = 2
Z∞
0
β(a, 0)φ(a, z) da.
We seek solutions of the form φ(a, z) = A(a)e−λz, where λ > 0 determines the spatial decay rate. Substituting into (5.5) yields the age profile equation
(5.7) A′(a) + cλ − κλ2 + μ(a, 0) + β(a, 0) A(a) = 0,
with solution
(5.8) A(a) = A(0) exp −
Za
0
cλ − κλ2 + μ(s, 0) + β(s, 0) ds .

INVASION DYNAMICS IN CELL POPULATIONS 13
Substituting (5.8) into (5.6) gives the dispersion relation
(5.9) 1 = 2
Z∞
0
β(a, 0) exp −
Za
0
(cλ − κλ2 + μ(s, 0) + β(s, 0)) ds da.
The minimal wave speed cmin is the smallest c > 0 for which there exists λ > 0 satisfying (5.9). For tractable rate forms, (5.9) yields cmin analytically. Otherwise, it reduces to a root-finding problem that is straightforward to compute numerically.
5.3. Minimal wave speeds across model cases. We now apply both linearisation approaches to Cases 1 and 5, deriving cmin explicitly and showing that cmin = clin for Case 1 but cmin < clin for Case 5. Case 1: Age-homogeneous dynamics. Consider the system (2.2)–(2.3) with
(5.10) μ(a, P ) = μ, β(a, P ) = β(1 − P ).
This case serves as a benchmark where age structure decouples from invasion dynamics. We recall that the non-spatial survival condition is β > μ. Integrating the PDE (2.2) with respect to a and using the boundary condition u(0, x, t) = 2β(1 − P )P gives (Lemma 2.1)
(5.11) ∂tP = κ∆P + rP 1 − P
K.
where r = β − μ and K = (β − μ)/β. Applying the travelling-wave ansatz P (x, t) = U (z), z = x − ct, and linearising about U = 0 yields
(5.12) κλ2 − cλ + (β − μ) = 0.
This dispersion relation is identical to that obtained from the general formula (5.9) with μ(a, 0) = μ and β(a, 0) = β, confirming that the moment-system and age-structured linearisations agree. Hence
(5.13) cmin = clin = 2pκ(β − μ).
If β > μ the population invades; otherwise the population goes extinct. This matches the non-spatial survival condition. Invasion speed depends solely on the net growth rate β − μ, not age structure, linking persistence to spatial spread.
Case 1b: Density-dependent death rate. Consider a modification: μ(a, P ) = μP and β(a, P ) = β(1 − P ). Lemma 2.1 applies, giving
(5.14) ∂tP = κ∆P + β P − (β + μ)P 2.
This is again a Fisher–KPP-type equation with r = β and K = β/(β + μ). Since the division and death rates remain age-independent, we have cmin = clin, with
(5.15) cmin = 2pκ β.
The key difference from Case 1 lies in how the death rate affects invasion. In Case 1, the death rate is independent of the density (μ(a, P ) = μ), reducing the net growth rate to r = β − μ. In Case 1b, the death rate is density-dependent (μ(a, P ) = μP ) and vanishes at the wave front where P → 0. The invasion speed is therefore governed by the division rate at low density, while the death rate regulates the carrying capacity behind the front.
Case 5: Maturation delay with density-dependent death rate. Consider
(5.16) μ(a, P ) = (μ − γae−αa) P, β(a, P ) = βae−αa(1 − P ),
where μ > γ/(αe) ensures the death rate remains positive, and the non-spatial threshold 2β > α2 guarantees population persistence.

14 S. ABO AND R. E. BAKER
Using the reduction framework of Section 2.1 and the ansatz (5.1), the moment system in travelling-wave coordinates becomes
(5.17)
−cU ′ = κU ′′ − μU 2 + γU W + β(1 − U )W,
−cV ′ = κV ′′ − (μU + α)V + γU I ̃1 + β(1 − U ) 2W − I ̃1 ,
−cW ′ = κW ′′ − (μU + α)W + V + γU I ̃2 − β(1 − U )I ̃2,
where the I ̃k are defined as in (5.2). Linearising about (U, V, W ) = (0, 0, 0), where higher moments vanish because φ(a, z) → 0, yields
(5.18) clin = 2
r
κ p2β − α .
If2β > α2, which matches the condition for population persistence, the population invades; otherwise the population dies out. Unlike Case 1, however, clin provides only an upper bound. To obtain the exact minimal speed cmin, we solve the dispersion relation (5.9). At the wave front where P → 0, μ(a, 0) = 0 and
β(a, 0) = βae−αa, giving
(5.19) 1 = 2β
Z∞
0
ae−αa exp −(cλ − κλ2)a − β
α2 1 − e−αa(1 + αa) da.
The minimal speed cmin is obtained by minimising c(λ) over λ > 0 satisfying (5.19). Numerical solution (Fig. 6) confirms cmin < clin.
In summary, the upper bound clin arises from linearising the moment system at the extinction state, assuming uniform decay across all age classes. The exact minimal speed cmin accounts for the age-structured profile at the leading edge and satisfies cmin ≤ clin, with equality only when division and death rates are ageindependent. The invasion conditions are parameter constraints derived by requiring clin > 0 and coincide with the non-spatial survival thresholds for all cases (Table 2 and Table 5).-
 When invasion conditions hold, travelling waves exist with positive minimal speed; when they fail, populations cannot invade regardless of initial spatial configuration, as the population dies out locally before spatial spread can occur.
Table 5
Summary of invasion speed bounds and conditions for the spatial models. The upper bound clin comes from momentsystem linearisation, and the minimal speed cmin satisfies cmin ≤ clin. Invasion conditions give the parameter regime where travelling waves exist (equivalently, where clin > 0).
Spatial case Invasion speed bound clin Invasion condition
1 2pκ(β − μ) β > μ
1b 2√κβ β > 0
2 2pκ(2β − μ − α) 2β > μ + α
3 2pκ(√2β − μ − α) 2β > (μ + α)2
4 2pκ(√2β − α) 2β > α2
5 2pκ(√2β − α) 2β > α2
Numerical solutions of the governing PDE (2.2) converge to travelling waves with speeds matching theoretical predictions (Fig. 6). For age-independent rates (Case 1), cmin = clin. For age-dependent rates (Cases 3, 5), cmin < clin. Figure 7 reveals the mechanism. The top row shows where cell division occurs spatially. In Case 1, division concentrates at the leading edge. In Cases 3 and 5, cell division concentrates slightly behind the leading edge. Consequently, peak division occurs not at the lead-
ing edge but at positions where cells have aged sufficiently to reach peak division rates. The bottom row shows death loss and division loss. In Case 1, high division rates at the front drive rapid invasion. In Cases 3 and 5, lower division rates at the front slow the wave.

INVASION DYNAMICS IN CELL POPULATIONS 15
The inequality cmin ≤ clin quantifies how age structure affects invasion speed. The bound clin assumes all ages contribute equally at the wave front and yields a tractable expression that depends only on division and death rates at low density. The exact minimal speed cmin accounts for the age distribution at the leading edge but requires solving a dispersion relation numerically. Computing both quantities provides a diagnostic: if cmin ≈ clin, age structure is negligible; if cmin ≪ clin, age-stru-
cture substantially affects invasion speed.
Fig. 6. Travelling wave profiles for different model cases. Each panel shows the evolution of the population density P (z) as a function of the travelling wave coordinate z = x − ct. The numerically estimated wave speed cest approximates the theoretical minimal wave speed cmin. The wave speed predicted by the linear theory clin is also provided. Parameters: α = 0.01, μ = 0.005,
κ = 3 × 10−4; β satisfies β = r × (invasion condition) with r = 5 and invasion conditions from Table 2, which places each case at the same relative distance above its extinction threshold. Case 5 additionally requires γ < μαe to ensure non-negative death
rates. We set γ = 1 × 10−4.
Fig. 7. Population structure and birth-death dynamics for different division kernels. Top row: normalised division rate density β(a, z)u(a, z) in the travelling wave frame, showing the spatial distribution of new cells across age classes. Bottom row: death and division loss rates (left axis) alongside total population density P (z) (right axis), illustrating the balance between losses (cell death and division) and population renewal (birth influx via daughter cells). Parameters are as in Figure 6.
6. Discussion. We developed an analytical framework for age-structured cell populations that separates division and death processes explicitly and reduces the governing transport-renewal PDE to a tractable integro–differential system. Using this reduction, we derived explicit expressions for the SSAD, the CCTD,

16 S. ABO AND R. E. BAKER
and the invasion speeds, and achieved analytical tractability previously limited to homogeneous populations. A fundamental duality emerges: the condition for population persistence is identical to the condition for spatial invasion. If this condition fails, the population does not generate a front and declines to extinction. This correspondence holds across all model cases. Moreover, when the division and death rates are ageindependent, the system reduces to a logistic or Fisher–KPP equation; when-
 the rates depend explicitly on age, the same framework yields rigorous bounds, including the survival threshold Pc, the wave-speed upper bound clin, and the exact minimal speed cmin. The difference clin − cmin quantifies how the assumption of a uniform division rate across the cell population leads to an overestimation of the true invasion speed. In modelling applications such as wound healing or tumour invasion, models that neglect age-dependent division rates systematically overestimate the rat-
e of spatial advance.
Age structure changes the rules of population persistence. We first examined the growth dynamics of populations without spatial structure. The framework yields explicit survival conditions (Table 2) confirmed by numerical simulations (Fig. 2). These conditions follow a systematic pattern. For age-independent dynamics (Case 1), population persistence requires only that the division rate exceeds the death rate (β > μ). When the division rate varies with age, stricter criteria emerge. An early-divisi-
on bias, where division rate decays exponentially at rate α (Case 2), requires 2β > μ + α. A maturation delay, where division rate peaks at age ∼ 1/α (Case 3), requires 2β > (μ + α)2. Cases 4–5 represent a qualitatively different regime. When the death rate is density-dependent (μ(a, P ) = μP ) with a maturation delay in the division rate, the survival condition simplifies to 2β > α2, which depends solely on the division rate. In these cases the division mechanism sets the survival condition, wher-
eas the death rate determines only the equilibrium population size (see Pc in Table 2).
Age structure at invasion fronts slows spatial spread. Invasion speed depends on the division rate at low density. Case 1 illustrates the classical scenario where division rates are age-independent, so newborn cells at the leading edge divide at the same rate as older cells, and the wave propagates at the Fisher–KPP speed (cmin = clin). In Cases 3 and 5, the leading edge is dominated by newborn cells with low division rates, whereas peak division rate occurs behind the front. This maturation delay-
 explains why cmin < clin in these cases. Cell populations that can divide soon after division (Cases 1–2) invade faster than those requiring maturation before division (Cases 3–5). Far behind the leading edge in all cases, the population reaches equilibrium where the division and death rates balance (Figure 7, bottom row), but this region does not drive front propagation. Explicit distributions link mechanism to data. The framework yields explicit expressions for the SSAD and the CCTD (Tables 3, -
4). These distributions follow from the same division and death rates but emphasise distinct features of the population. The SSAD describes the age profile of the entire population; the CCTD describes the timing of first divisions. Age-independent division rates produce exponential CCTDs. Gamma-type division rates produce bell-shaped CCTDs that peak at intermediate ages, matching the maturation delays observed in lineage data [5, 24]. The mean division age and the mean population age can be obtain-
ed from the CCTD and the SSAD, respectively. The mean division age systematically lies below the mean population age (Fig. 4 h) because cell divisions concentrate among younger cells, whereas the SSAD retains older cells that have neither died nor divided. Experimental techniques such as fluorescent cell-cycle reporters [6] identify the current phase of an individual cell (G1/S/G2/M) but not the duration of that phase [25]. Lineage tracing quantifies cell-cycle time yet requires long-term tracking-
. The analytical CCTD provides a direct route from data to populationlevel parameters (β, α, μ), as illustrated in Fig. 6 for drug treatments where fitted values fall near the theoretical survival thresholds. The same parameters determine the SSAD and predict persistence and invasion speed without live-cell imaging or simulation of the full PDE system. Earlier work established equivalence between multi-stage stochastic models and age-structured PDEs [7, 10]. Our explicit formulae extend that found-
ation and permit direct parameter inference from standard experimental measurements.
Our framework aggregates the cell-cycle phases into a single age variable, which provides analytical tractability but has limitations. It cannot resolve phase-specific regulation (e.g., G1 versus S/G2/M delays) or model heritable differences in division timing—the ‘two-clock’ problem in which biological and chronological age diverge [11]. Cells that cycle rapidly may be biologically older despite less chronological time elapsed, and this disparity affects population dynamics in ways our framework -
does not yet capture. Future work will extend the framework in two directions. First, multi-stage models could test whether the persistence and invasion principles persist under finer cell-cycle resolution. Second, allowing the rate of biological ageing

INVASION DYNAMICS IN CELL POPULATIONS 17
to vary could reveal how internal clocks, distinct from chronological time, modulate population dynamics.
Declarations
Authorship and contributorship. All authors have made substantial intellectual contributions to the study conception, execution, and design of the work. All authors have read and approved the final manuscript. Contributions were as follows: Conceptualisation: St ́ephanie M. C. Abo, Ruth E. Baker; Methodology: St ́ephanie M. C. Abo, Ruth E. Baker; Software: Ste ́phanie M. C. Abo; Formal analysis and investigation: St ́ephanie M. C. Abo; Writing – original draft preparation: St ́ephanie M. C. Abo; W-
riting – review and editing: Ste ́phanie M. C. Abo, Ruth E. Baker; Supervision: Ruth E. Baker; Funding acquisition: Ruth E. Baker.
Funding. Ruth E. Baker is supported by a grant from the Simons Foundation (MP-SIP-00001828).
Acknowledgements. We thank Christian A. Yates for sharing unpublished cell-cycle data originally collected by Richard L. Mort and Matthew J. Ford; Rachel N. Leander for providing access to the DMSO, CHX, and ERL datasets available at https://github.com/rnleander/DDT cell cycle. We also thank Mike B. Giles for helpful discussions on the formulation and implementation of the numerical scheme.
For the purpose of open access, the authors have applied a CC BY public copyright licence to any author accepted manuscript arising from this submission.
Conflicts of interest. The authors declare there are no conflicts of interest.
Consent for publication All the authors approved the final version of the manuscript.
Code availability. All code used for the simulations and figure generation is publicly available on GitHub at https://github.com/Stephanie-Abo/age-structured-invasion-dynamics.git.
REFERENCES
[1] K. Aoki, Y. Kondo, N. Honda, T. Hiratsuka, R. E. Itoh, and M. Matsuda. Propagating wave of erk activation orients collective cell migration. Developmental Cell, 43(3):305–317, 2017. [2] M. A. Heinrich, R. Alert, J. M. LaChance, T. J. Zajdel, A. Koˇsmrlj, and D. J. Cohen. Size-dependent patterns of cell proliferation and migration in freely-expanding epithelia. eLife, 9:e58945, 2020. [3] L. Donker, R. Houtekamer, M. Vliem, F. Sipieter, H. Canever, M. Gomez-Gonzalez, M. Bosch-Padros, W.-J. Panne-
koek, X. Trepat, and N. Borghi. A mechanical g2 checkpoint controls epithelial cell division through e-cadherin-mediated regulation of wee1-cdk1. Cell Reports, 41(2), 2022. [4] C. Falc ́o, D. J. Cohen, J. A. Carrillo, and R. E. Baker. Quantifying tissue growth, shape and collision via continuum models and bayesian inference. Journal of the Royal Society Interface, 20(204):20230184, 2023. [5] J. A. Smith and L. Martin. Do cells cycle? Proceedings of the National Academy of Sciences, 70(4):1263–1267-
, 1973. [6] A. Sakaue-Sawano, H. Kurokawa, T. Morimura, A. Hanyu, H. Hama, H. Osawa, S. Kashiwagi, K. Fukami, T. Miyata, and H. Miyoshi. Visualizing spatiotemporal dynamics of multicellular cell-cycle progression. Cell, 132(3):487–498, 2008. [7] C. A. Yates, M. J. Ford, and R. L. Mort. A multi-stage representation of cell proliferation as a Markov process. Bulletin of Mathematical Biology, 79(12):2905–2928, 2017. [8] W. Jiang. Cell cycle checkpoints callout (layout). BioRender template, 2025. Acce-
ssed: 2025-09-15. [9] Z. W. Jones, R. Leander, V. Quaranta, L. A. Harris, and D. R. Tyson. A drift-diffusion checkpoint model predicts a highly variable and growth-factor-sensitive portion of the cell cycle g1 phase. PLOS ONE, 13(2):1–20, 2018. [10] J. C. Kynaston, C. Guiver, and C. A. Yates. Equivalence framework for an age-structured multistage representation of the cell cycle. Physical Review E, 105(6):064411, 2022.
[11] K. O ̈ cal and M. P. H. Stumpf. The two-clock problem in population dynamics. arXiv preprint, 2025. arXiv:2504.20388. [12] H. Kang, S. Ruan, and X. Yu. Age-structured population dynamics with nonlocal diffusion. Journal of Dynamics and Differential Equations, 34(2):789–823, 2022.
[13] K. Dietz. Introduction to mckendrick (1926) applications of mathematics to medical problems. In S. Kotz and N. L. Johnson, editors, Breakthroughs in Statistics, pages 17–57. Springer, New York, NY, 1997. [14] H. von Foerster. Some remarks on changing populations. In F. Stohlman, editor, The Kinetics of Cellular Proliferation, pages 382–407. Grune and Stratton, 1959. [15] M. E. Gurtin and R. C. MacCamy. Some simple models for nonlinear age-dependent population dynamics. Mathematical Bioscience-
s, 43(3–4):199–211, 1979. [16] M. E. Gurtin and R. C. MacCamy. Diffusion models for age-structured populations. Mathematical Biosciences, 54(12):49–59, 1981. [17] J. Al-Omari and S. A. Gourley. Monotone travelling fronts in an age-structured reaction-diffusion model of a single species. Journal of Mathematical Biology, 45(4):294–312, 2002.
[18] S. A. Gourley. Linear stability of travelling fronts in an age-structured reaction–diffusion population model. The Quarterly Journal of Mechanics and Applied Mathematics, 58(2):257–268, 2005.

18 S. ABO AND R. E. BAKER
[19] G. Li, M. Mei, and Y. S. Wong. Nonlinear stability of traveling wavefronts in an age-structured reaction-diffusion population model. Mathematical Biosciences and Engineering, 5(1):85–100, 2008.
[20] M. Mei and Y. S. Wong. Novel stability results for traveling wavefronts in an age-structured reaction-diffusion equation. Mathematical Biosciences and Engineering, 6(4):743–752, 2009.
[21] R. E. Nixson, H. M. Byrne, J. M. Pitt-Francis, and P. K. Maini. Characterising the behaviour of a structured pde model of the cell cycle in contrast to a corresponding ode system. Bulletin of Mathematical Biology, 87(7):93, 2025. [22] G. Pang and  ́E. Pardoux. Functional law of large numbers and PDEs for epidemic models with infection-age dependent infectivity. Applied Mathematics and Optimization, 87(3):50, 2023.
[23] G. Belluccini, M. Lo ́pez-Garcı ́a, G. Lythe, and C. Molina-Par ́ıs. Counting generations in birth and death processes with competing erlang and exponential waiting times. Scientific Reports, 12:11289, 2022. [24] R. Leander, E. J. Allen, S. P. Garbett, D. R. Tyson, and V. Quaranta. Derivation and experimental comparison of cell-division probability densities. Journal of Theoretical Biology, 359:129–135, 2014. [25] A. E. Eastman, X. Chen, X. Hu, A. A. Hartman, A. M. P. Morales, C. Yang, J. Lu,-
 H. Y. Kueh, and S. Guo. Resolving cell cycle speed in one snapshot with a live-cell fluorescent reporter. Cell Reports, 31(12), 2020.

supplementary materials
SURVIVAL AND INVASION DYNAMICS IN CELL POPULATIONS: AN ANALYTICAL FRAMEWORK FOR THRESHOLD BEHAVIOUR IN NONLINEAR AGE-STRUCTURED MODELS
ST ́EPHANIE M. C. ABO∗ AND RUTH E. BAKER∗
SM1. Model summary and reduced moment system. This document provides supplementary details for the age-structured model of proliferating cell populations analysed in the main text. The model tracks the density of cells, u(a, x, t), of age a (time since last division) at position x and time t. The dynamics are governed by the transport-renewal equation with diffusion
(SM1.1) ∂tu + ∂au = κ∆u − [μ(a, P ) + β(a, P )] u,
u(0, x, t) = 2
∫∞
0
(SM1.2) β(a, P )u(a, x, t) da,
where P (x, t) = ∫ ∞
0 u(a, x, t) da is the total population density.
We analyse different model cases (Table SM1): constant rates (age-homogeneous), exponential decay (early division), and gamma-type profiles (maturation delay). These forms are chosen for analytical tractability and biological relevance. Each case is studied in both the non-spatial (κ = 0) and spatial (κ > 0) settings.
Table SM1
Model cases studied in both non-spatial and spatial settings
Case μ(a, P ) β(a, P )
1 μ β(1 − P ) 1b μP β(1 − P )
2 μ βe−αa(1 − P ) 3 μ βae−αa(1 − P ) 4 μP βae−αa(1 − P ) 5 (μ − γae−αa)P βae−αa(1 − P )
Generalised moment system. We derive an integro–differential reduction of the age-structured system (SM1.1)–(SM1.2). We introduce age-weighted moments that mirror the form of division rates. For any fixed decay parameter α > 0, the reduced system is formulated in terms of the following quantities,
P (x, t) =
∫∞
0
(SM1.3) u(a, x, t) da,
C(x, t; α) =
∫∞
0
(SM1.4) e−αau(a, x, t) da,
D(x, t; α) =
∫∞
0
(SM1.5) ae−αau(a, x, t) da.
∗Mathematical Institute, University of Oxford, UK (stephanie.abo@maths.ox.ac.uk).
SM1
INVASION DYNAMICS IN CELL POPULATIONS 19

SM2 S. M. C. ABO AND R. E. BAKER
The system (P, C, D) is not closed, and its evolution involves higher moments,
I0(t, x; α) =
∫∞
0
(SM1.6) e−2αau(a, x, t) da,
I1(t, x; α) =
∫∞
0
(SM1.7) ae−2αau(a, x, t) da,
I2(t, x; α) =
∫∞
0
(SM1.8) a2e−2αau(a, x, t) da.
The birth term (birth boundary condition) is case-dependent and involves these moments,
(SM1.9) B(x, t) = u(0, x, t) =


2β(1 − P )P, Case 1, 2β(1 − P )C, Case 2, 2β(1 − P )D, Cases 3–5.
The resulting generalised integro–differential system is
∂tP = κ ∆P + B −
∫∞
0
(SM1.10) [μ(a, P (x, t)) + β(a, P (x, t))] u(a, x, t) da,
∂tC = κ ∆C + B − αC −
∫∞
0
(SM1.11) [μ(a, P (x, t)) + β(a, P (x, t))]e−αau(a, x, t) da,
∂tD = κ ∆D + C − αD −
∫∞
0
(SM1.12) [μ(a, P (x, t)) + β(a, P (x, t))]ae−αau(a, x, t) da,
with B(x, t) (SM1.9) and higher moments Ik(x, t; α) = ∫ ∞
0 ake−2αau(a, x, t)da. The integral terms are
evaluated using the defined moments and the specific forms of μ(a, P ) and β(a, P ) for each model case. In general, age-homogeneous rates (constant rates) yield exact closure in P (t); exponential decay rates (early reproduction bias) require bounds on P, C, I0; gamma-type rates (maturation delay) require bounds on P, C, D, I1, I2.
SM2. Boundedness of age-weighted moments.
Proposition SM2.1 (Boundedness in the non-spatial case). Suppose κ = 0 and P (0) ≤ 1. Then for all t ≥ 0:
(i) P (t) ≤ 1, (ii) The moments C(t; α), D(t; α), and Ik(t; α) remain bounded.
Proof. (i) Population bound. The total population satisfies
dP
dt = B(t) −
∫∞
0
[μ(a, P ) + β(a, P )]u(a, t)da,
where B(t) = 2(1 − P ) ∫ ∞
0 β0(a)u(a, t)da.
Whenever P (t) ≥ 1, we have B(t) ≤ 0 whilst the loss term remains non-negative. Thus dP/dt ≤ 0 in any region where P ≥ 1. Since P (0) ≤ 1, it follows that P (t) ≤ 1 for all t ≥ 0. (ii) Moment bounds. Since e−αa < 1 for all a > 0,
C(t; α) =
∫∞
0
e−αau(a, t)da < P (t) ≤ 1.
The function ae−αa attains its maximum 1/(αe) at a = 1/α, giving
D(t; α) =
∫∞
0
ae−αau(a, t)da ≤ P (t)
αe ≤ 1
αe .
Similarly, ake−2αa attains its maximum (k/(2αe))k at a = k/(2α), hence
Ik(t; α) =
∫∞
0
ake−2αau(a, t)da ≤
(k
2αe
)k
P (t) ≤
(k
2αe
)k .
These bounds ensure all moments remain finite.
20 S. ABO AND R. E. BAKER

SURVIVAL AND INVASION DYNAMICS IN CELL POPULATIONS SM3
SM3. Moment-based derivations of survival thresholds.
SM3.1. Fully closed population dynamics. When division and death rates depend only on total density, the population is age-homogeneous. All cells share the same division and death rates, and the moment system closes exactly, as established by Lemma 1 in the main text. Case 1. Consider the rates
(SM3.1) μ(a, P ) = μ, β(a, P ) = β(1 − P ),
with constants μ, β > 0. This models a population where division is subject to contact inhibition, while cell death occurs at a constant rate independent of local conditions. The total population P (t) satisfies the logistic equation,
P ′(t) = (β − μ) P (t)
(
1 − P (t)
K
)
, with K = β − μ
β.
Population persistence requires β > μ. When this holds, the unique positive steady state defines the critical threshold
(SM3.2) Pc = 1 − μ
β.
SM3.2. Exponential decay in division potential. This models a division rate that declines exponentially with age, β(a, P ) ∝ e−αa. This is a reasonable approximation if the population reproduces at sufficiently young ages. Case 2. Consider the rates
(SM3.3) μ(a, P ) = μ, β(a, P ) = βe−αa(1 − P ),
with constants μ, β, α > 0. Division potential is highest immediately after birth and decays exponentially thereafter. The system (SM1.1)–(SM1.2) reduces to
P ′(t) = −μP (t) + β(1 − P (t))C(t), C′(t) = −(μ + α)C(t) + β(1 − P (t)) (2C(t) − I0(t)) ,
where C(t) = ∫ ∞
0 e−αau da and I0(t) = ∫ ∞
0 e−2αau da.
At steady state,
C ̄ = μ P ̄
β(1 − P ̄) , I ̄0 = 2C ̄ − (μ + α) C ̄
β(1 − P ̄) , for P ̄ ̸= 1.
The non-negativity constraint I ̄0 ≥ 0 implies
2C ̄ − (μ + α) C ̄
β(1 − P ̄) ≥ 0.
Assuming C ̄ ̸= 0 and P ̄ ̸= 1, this simplifies to 2β(1 − P ̄) ≥ μ + α. Therefore, population persistence requires
2β > μ + α, and any positive steady state satisfies P ̄ < Pc, with
(SM3.4) Pc = 1 − μ + α
2β .
If 2β ≤ μ + α, only the extinction equilibrium exists.
SM3.3. Gamma-type age dependence. The division rate follows a gamma-type profile β(a, P ) ∝ ae−αa, capturing maturation delays before division. We consider three cases: constant mortality (Case 3), density-dependent mortality (Case 4), and age- and density-dependent mortality (Case 5).
INVASION DYNAMICS IN CELL POPULATIONS 21

SM4 S. M. C. ABO AND R. E. BAKER
Case 3. Consider the rates
(SM3.5) μ(a, P ) = μ, β(a, P ) = βae−αa(1 − P ),
with constants μ, β, α > 0. The system (SM1.1)–(SM1.2) reduces to
(SM3.6)
P ′(t) = −μP (t) + β(1 − P (t)) D(t), C′(t) = −(μ + α) C(t) + β(1 − P (t)) (2D(t) − I1(t)) , D′(t) = −(μ + α) D(t) + C(t) − β(1 − P (t)) I2(t),
with
C(t; α) =
∫∞
0
e−αau(a, t) da, D(t; α) =
∫∞
0
ae−αau(a, t) da,
and higher moments
I1(t; α) =
∫∞
0
ae−2αau(a, t) da, I2(t; α) =
∫∞
0
a2e−2αau(a, t) da.
At steady state, assuming D ̄ ̸= 0, we obtain
D ̄ = μ P ̄
β(1 − P ̄) , I ̄1 = 2D ̄ − (μ + α) C ̄
β(1 − P ̄) , I ̄2 = C ̄ − (μ + α) D ̄
β(1 − P ̄) , for P ̄ ̸= 1.
Given I ̄1 ≥ 0, we have
C ̄ ≤ 2μ P ̄
μ + α.
Substituting into I ̄2 ≥ 0 yields
C ̄ β(1 − P ̄) − (μ + α)μ P ̄ ≥ 0 =⇒ P ̄ ≤ C ̄ β(1 − P ̄)
(μ + α)μ ≤ 2μ P ̄ β(1 − P ̄)
μ(μ + α)2 .
Assuming P ̄ ̸= 0, this gives
P ̄ ≤ 1 − (μ + α)2
2β .
For P ̄ to be positive, we require 2β > (μ + α)2. When this condition holds,
(SM3.7) Pc = 1 − (μ + α)2
2β
provides an upper bound on steady-state populations. Case 4. Consider that death rate increases proportionally with total population,
(SM3.8) μ(a, P ) = μP, β(a, P ) = βae−αa(1 − P ),
with constants μ, β, α > 0. The moment hierarchy includes P, C, D, I1, and I2,
(SM3.9)
P ′(t) = −μP (t)2 + β(1 − P (t))D(t), C′(t) = −(μP (t) + α)C(t) + β(1 − P (t)) (2D(t) − I1(t)) , D′(t) = −(μP (t) + α)D(t) + C(t) − β(1 − P (t))I2(t).
At steady state,
D ̄ = μP ̄2
β(1 − P ̄) , I ̄1 = 2D ̄ − C ̄(α + μP ̄)
β(1 − P ̄) I ̄2 = C ̄ − D ̄ (α + μP ̄)
β(1 − P ̄) , for P ̄ ̸= 1.
Given I ̄1 ≥ 0,
C ̄ ≤ 2D ̄ β(1 − P ̄)
μP ̄ + α .
22 S. ABO AND R. E. BAKER

SURVIVAL AND INVASION DYNAMICS IN CELL POPULATIONS SM5
Similarly, I ̄2 ≥ 0 implies
D ̄ (α + μP ̄) ≤ C ̄.
Combining these inequalities gives upper and lower bounds on C ̄, which lead to
(SM3.10) (μP ̄ + α)2 ≤ 2β(1 − P ̄).
The above inequality simplifies to
(SM3.11) P ̄ ≤ −(αμ + β) + √(αμ + β)2 − μ2(α2 − 2β)
μ2 , with 2β > α2.
Population survival thus requires 2β > α2. When this holds,
(SM3.12) Pc = −(αμ + β) + √(αμ + β)2 − μ2(α2 − 2β)
μ2 .
Case 5. Consider that both death and division rates depend explicitly on cell age,
(SM3.13) μ(a, P ) = (μ − γ ae−αa) P, β(a, P ) = β ae−αa(1 − P ),
with μ, γ, β, α > 0. We require μ > γ/(αe) to ensure positive death rates. This models a scenario where the death rate is initially elevated for newly divided cells, decreases during a maturation phase, and rises again due to senescence. The moment hierarchy becomes
(SM3.14)
P ′(t) = −μP (t)2 + γP (t)D(t) + β(1 − P (t))D(t), C′(t) = −(μP (t) + α)C(t) + γP (t)I1(t) + β(1 − P (t)) (2D(t) − I1(t)) , D′(t) = −(μP (t) + α)D(t) + C(t) + γP (t)I2(t) − β(1 − P (t))I2(t).
At steady state with P ̄ ̸= 1 and γP ̄ ̸= β(1 − P ̄) (ensuring the moment expressions are well-defined),
D ̄ = μP ̄2
γP ̄ + β(1 − P ̄) , I ̄1 = (μP ̄ + α)C ̄ − 2β(1 − P ̄)D ̄
γP ̄ − β(1 − P ̄) , I ̄2 = (μP ̄ + α)D ̄ − C ̄
γP ̄ − β(1 − P ̄) .
For non-negative moments I ̄1 ≥ 0 and I ̄2 ≥ 0, both numerator and denominator must have the same sign.
The condition γP ̄ ̸= β(1 − P ̄) ensures the denominators are non-zero. We analyse first the case where both the numerator and denominator are negative in the expressions for
I ̄1 and I ̄2. From I ̄1 ≥ 0 we obtain
C ̄ ≤ 2β(1 − P ̄)
μP ̄ + α D ̄ .
Then from I ̄2 ≥ 0 we obtain
C ̄ ≥ (μP ̄ + α)D ̄ .
Combining these inequalities gives the constraint
(SM3.15) (μP ̄ + α)2 ≤ 2β(1 − P ̄).
The function f (P ) = (μP + α)2 + 2βP − 2β is strictly increasing for P ≥ 0, since
f ′(P ) = 2μ(μP + α) + 2β > 0.
Therefore, the inequality f (P ̄) ≤ 0 is equivalent to P ̄ ≤ Pc, where Pc is the unique positive root of f (P ) = 0,
(SM3.16) Pc = −(αμ + β) + √(αμ + β)2 − μ2(α2 − 2β)
μ2 .
INVASION DYNAMICS IN CELL POPULATIONS 23

SM6 S. M. C. ABO AND R. E. BAKER
The condition 2β > α2 ensures the discriminant is positive and Pc > 0. From the denominator we have
P ̄ < β/(γ + β) (strict inequality since γP ̄ ̸= β(1 − P ̄)). The upper bound on the positive steady state
becomes P ̄ < min (Pc, β/(γ + β)) .
When both numerator and denominator are positive, the analogous derivation yields (μP ̄ + α)2 ≥ 2β(1 − P ̄),
which combined with P ̄ > β/(γ + β) provides a lower bound on feasible steady states. However, for survival threshold analysis, the first case provides the relevant upper bound. The survival condition 2β > α2 ensures positive steady states exist with population bounded by the constraints above. The parameter γ determines how strongly the death rate varies with cell age. In the limit γ → 0, the model reduces to Case 4 with purely density-dependent death, and β/(γ + β) → 1, leaving Pc as the sole bo-
und. As γ increases, the constraint μ > γ/(αe) forces proportionally larger baseline death rates μ, whilst β/(γ + β) → 0 drives the equilibrium toward extinction. Although positive steady states persist when 2β > α2, large γ yields populations barely above zero. For typical biological scenarios, γ remains small relative to β, ensuring Pc provides the relevant upper bound.
SM4. Minimal wave speed derivations. We present the full derivation for Case 5, which is the most general. Case 1 is derived in the main text. Cases 2–4 follow by simplification (replacing μ with μP , setting γ = 0, or removing age-dependent terms). Consider the following division and death rates,
(SM4.1) μ(a, P ) = (μ − γae−αa) P, β(a, P ) = βae−αa(1 − P ).
The survival condition from the non-spatial analysis is 2β > α2, which we assume holds. We further require μ > γ/(αe) to ensure μ(a, P ) > 0 for all a ≥ 0. We derive the minimal speed cmin via the dispersion relation arising from the full age-structured PDE. Starting from
(SM4.2) ∂u
∂t + ∂u
∂a = κ∂2u
∂x2 − [μ(a, P ) + β(a, P )]u,
with boundary condition
(SM4.3) u(0, x, t) = 2
∫∞
0
β(a, P (x, t))u(a, x, t) da,
the travelling-wave ansatz u(a, x, t) = φ(a, z), z = x − ct transforms the system into
(SM4.4) −c ∂φ
∂z + ∂φ
∂a = κ∂2φ
∂z2 − [(μ − γae−αa)U (z) + βae−αa(1 − U (z))]φ,
where U (z) = ∫ ∞
0 φ(a, z) da.
Linearising at the leading edge where U → 0, the death term (μ − γae−αa)U → 0 and (1 − U ) → 1, giving
(SM4.5) −c ∂φ
∂z + ∂φ
∂a = κ∂2φ
∂z2 − βae−αaφ + O(U ).
The boundary condition linearises to
(SM4.6) φ(0, z) = 2β
∫∞
0
ae−αaφ(a, z) da + O(U ).
We assume separability φ(a, z) = A(a)e−λz and solve the resulting age-profile equation. Here λ is the rate of spatial decay. This yields the dispersion relation
(SM4.7) 1 = 2β
∫∞
0
ae−αa exp
[
−(cλ − κλ2)a − β
α2 (1 − e−αa(1 + αa))
]
da.
The minimal speed cmin is the smallest c > 0 for which there exists λ > 0 satisfying equation (SM4.7).
24 S. ABO AND R. E. BAKER

SURVIVAL AND INVASION DYNAMICS IN CELL POPULATIONS SM7
We now derive the upper bound clin from the moment system. Using the reduction framework of Section 2 in the main text and the travelling-wave ansatz z = x − ct, we have
(SM4.8)
−cU ′ = κU ′′ − μU 2 + γU W + β(1 − U )W,
−cV ′ = κV ′′ − (μU + α)V + γU I ̃1 + β(1 − U ) (2W − I ̃1
),
−cW ′ = κW ′′ − (μU + α)W + V + γU I ̃2 − β(1 − U )I ̃2.
where P (x, t) = U (z), C(x, t) = V (z), D(x, t) = W (z), and Ik(x, t) = I ̃(z). Converting to a first-order system
with Y1 = U , Y2 = U ′, Y3 = V , Y4 = V ′, Y5 = W , Y6 = W ′, the linearisation at (Y1, . . . , Y6) = (0, . . . , 0) yields
Y′ = J Y, J =


01 0 0 0 0
0 −c
κ 0 0 −β
κ0 00 0 1 0 0
00 α
κ −c
κ − 2β
κ0 00 0 0 0 1
0 0 −1
κ0 α
κ −c
κ


.
The eigenvalues are
λ1 = 0, λ2 = − c
κ,
λ3,4 = −c ± √c2 + 4(α − √2β)κ
2κ ,
λ5,6 = −c ± √c2 + 4(α + √2β)κ
2κ .
We seek biologically realistic solutions, and hence the eigenvalues must be real. The critical constraint comes
from λ3, which has positive real part unless c2 + 4(α − √2β)κ ≤ 0. This requires
c≥2
√
κ(√2β − α),
yielding the upper bound clin = 2√κ(√2β − α), valid when √2β > α. The inequality cmin ≤ clin reflects the fact that the moment system linearisation assumes all age classes vanish uniformly at the wave front, neglecting the natural age structure where younger cells dominate the leading edge. The dispersion relation preserves this age-dependent decay structure at the leading edge, yielding a sharper (and typically slower) minimal speed bound. Both approaches give the same threshold
condition for invasion: √2β > α, equivalent to the non-spatial survival condition 2β > α2.
SM5. Numerical methods. The system (SM1.1)–(SM1.2) combines three distinct processes: advective transport in the age variable, diffusive spread in space, and a non-local renewal condition at a = 0 that links all ages through cell division. Because these processes act on different variables and timescales, advancing them simultaneously introduces numerical errors. The diffusion operator acts locally in space, coupling only neighbouring points, whereas the renewal term introduces a global coupling a-
cross the age domain. Standard reaction–diffusion schemes fail to maintain the non-negativity of u(a, x, t) and to balance the total renewal flux. Additional numerical challenges arise from the unbounded age domain and from stiffness when the combined loss rate μ(a, P ) + β(a, P ) changes rapidly with age or density. We address these challenges with an operator-splitting scheme that advances age transport, reaction, and diffusion sequentially, combined with a predictor–corrector integration that e-
valuates rates at both the current and predicted states to achieve second-order accuracy. The renewal boundary condition is computed from the corrected interior solution using averaged division rates. This ensures consistent coupling between the non-local birth integral and the interior dynamics while preserving mass balance and non-negativity throughout the domain.
INVASION DYNAMICS IN CELL POPULATIONS 25

SM8 S. M. C. ABO AND R. E. BAKER
Discretisation. The computational domain is x ∈ [−L, L], a ∈ [0, amax], and t ∈ [0, T ]. We discretise the solution u(a, x, t) on a uniform grid: aj = j ∆a for age, xi = i ∆x for space, and tn = n ∆t for time.
Here ujn,i denotes the numerical approximation to u(aj, xi, tn). For the age variable, the discrete transport operator is constructed along the exact characteristics of the hyperbolic part, ∂tu + ∂au = 0, whose solutions satisfy u(a, t) = u(a − t, 0). Setting ∆t = ∆a ensures that
un+1
j+1,i = ujn,i,
meaning that each cohort of cells ages exactly one bin per time step. This choice guarantees positivity and eliminates artificial smoothing in the age coordinate. It also couples the time step to the age grid, a mild but necessary constraint for accuracy and stability. Stability is maintained by ensuring that ∆a = ∆t is sufficiently small relative to the reaction timescales. For spatial diffusion, we employ the Crank–Nicolson scheme, treating the diffusion operator implicitly via a centred three-p-
oint stencil. At each time step, the update for age slice j satisfies
un+1
j,i − ujn,i
∆t = κ
2
un+1
j,i−1 − 2un+1
j,i + un+1
j,i+1
(∆x)2 + κ
2
ujn,i−1 − 2ujn,i + ujn,i+1
(∆x)2 ,
which is second-order accurate in both space and time for the diffusive subproblem and unconditionally stable. We impose zero-flux boundary conditions at x = ±L: at the left boundary, u−1,j = u1,j; at the right boundary, unx+1,j = unx−1,j. Thus ∂xu = 0 at the edges.
Operator splitting and nonlinear coupling. Each full step tn → tn+1 proceeds through an operatorsplit sequence (age transport, reaction, diffusion) embedded within a predictor–corrector framework that makes the scheme second order in time. In the predictor step, we compute rates μ(a, P n) and β(a, P n) from the current population density
P n = ∫ amax
0 un(a, x) da, apply the explicit reaction update, and then advance diffusion via Crank–Nicolson
to obtain the predicted solution upred. We recompute P pred = ∫ amax
0 upred(a, x) da and evaluate rates at
this predicted state. The corrector step applies time-averaged rates μ ̄ = 1
2 [μ(a, P n) + μ(a, P pred)] and
β ̄ = 1
2 [β(a, P n) + β(a, P pred)] to the original un, again sequencing reaction then diffusion, yielding the
corrected solution ucorr. This split predictor–corrector scheme achieves O(∆t2) temporal accuracy. The renewal boundary condition at a = 0 is computed from the corrected interior solution using the averaged division rates. This ensures consistent boundary–interior coupling.
Age transport and renewal. The age variable evolves along the exact characteristics of the transport
equation ∂tu + ∂au = 0. With ∆t = ∆a, each cohort advances deterministically via un+1
j+1,i = un+1
j,i for j ≥ 1.
The boundary at a = 0 is determined by the discrete renewal condition
un+1
0,i = 2
Na −1
∑
j=0
β ̄(aj , Pi) ucorr
j,i wj ,
where wj are Simpson quadrature weights, β ̄ denotes the time-averaged division rate from the predic
tor–corrector scheme, and ucorr is the corrected interior solution. This maintains the integral balance and preserves non-negativity provided β ≥ 0. The unbounded age domain [0, ∞) is truncated dynamically at amax(t). At each step we compute the tail fraction
η(t) =
∫L
−L u(amax, x, t) dx ∆a
∫ amax 0
∫L
−L u(a, x, t) dx da .
If η(t) > ηtol = 10−6, we extend the grid by one age bin; otherwise, the oldest cohort is removed. This adaptive procedure bounds the relative truncation error in total mass by O(ηtol) while maintaining computational cost linear in the number of active age classes.
SM5.1. Numerical validation. We validate the scheme through three complementary tests. First, mass conservation: in non-spatial simulations across all five model cases, the relative mass drift remains below 10−6 after transients (Figure SM1). Second, travelling wave speeds: numerical estimates cest converge
26 S. ABO AND R. E. BAKER

SURVIVAL AND INVASION DYNAMICS IN CELL POPULATIONS SM9
to theoretical predictions cmin across Cases 1–5, confirming the linearisation analysis and dispersion relations
(Figure SM2). Third, grid refinement: L2 errors in both P (x) and u(a, x) exhibit first-order convergence in ∆a and ∆x (Figure SM3), consistent with the characteristic marching in the age coordinate, which is formally first-order despite the higher-order treatment of diffusion and reaction terms. Together, these tests confirm the scheme faithfully reproduces the analytical framework whilst maintaining conservation laws and the predicted wave dynamics.
Fig. SM1. Mass conservation validation for the non-spatial numerical scheme. Relative mass drift over time is shown
for all model cases (1–5) on a logarithmic scale. Simulations use parameters T = 1500, ∆a = 10−2, α = 0.01, μ = 0.012,
β = 0.065, and γ = 10−5. The parameter γ applies only to Case 5. The initial condition is u(a, 0) = e−10a2 . All cases
conserve total mass, with relative drift remaining below 10−6.
SM6. Parameter estimation from cell-cycle time data. Parameters for Case 3 (β, α, μ) were estimated from experimental intermitotic time distributions using a profile likelihood approach. The minimum cell-cycle time a0 was fixed at the 10th percentile of each dataset to define the left support of the distribution. For a grid of α values spanning a plausible range determined by the data quantiles (specifically, α ∈ [1/t50, 1/t10] where t10 and t50 are the 10th and 50th percentiles of the shifted dat-
a), we optimised (β, μ) by minimising the combined objective function
L(β, μ | α) = LCDF + λ Ltail + P (β, μ, α),
where
• LCDF = ∫ amax
a0 [Fmodel(a) − Fdata(a)]2 da measures the L2 error between the model and empirical
cumulative distribution functions (CDFs),
• Ltail = 1
3
∑
i[Smodel(ai) − Sdata(ai)]2 penalises deviations in survival probabilities at anchor points
ai corresponding to the 80th percentile, 90th percentile, and maximum observed time,
• P (β, μ, α) = 106 ·max(0, (μ+α)2 −2β)2 enforces the survival condition 2β > (μ+α)2 via a quadratic penalty.
The weight λ = 0.5 balances CDF accuracy with tail behavior. Results were insensitive to λ ∈ [0.3, 0.7]. The triplet (β, α, μ) minimising L across all α values was selected as the final estimate. Optimisation was
INVASION DYNAMICS IN CELL POPULATIONS 27

SM10 S. M. C. ABO AND R. E. BAKER
Fig. SM2. Travelling-wave solutions for Cases1–5. Each panel shows the population density P (z) in the moving frame z = x − ct. Numerical solutions converge to stable travelling waves with speeds matching theoretical predictions: for ageindependent rates (Cases 1, 1b), cmin = clin; for models with maturation delay (Cases 2–5), invasion is slower, cmin < clin. In all cases, the estimated speed cest agrees with the analytical cmin from the dispersion relation (5.9) in the main text. All
simulations use domain x ∈ [−10, 10], with parameters κ = 3 × 10−4, μ = 0.005, α = 0.01, γ = 0.0001. The parameter γ applies only to Case 5. Division rates are β = 0.025 (Cases 1, 1b), 0.0375 (Case 2), 0.0005625 (Case 3), and 0.00025 (Cases 4–5). The rates β were selected so that all cases satisfy the same relative distance above their survival condition, with r = 2β/(μ + α) = 5 (or the corresponding expression for each model). This ensures comparable invasion regimes across models. Initial condit-
ion:
u(a, x, 0) = 0.01⊮x<−8e−a.
performed using L-BFGS-B with box constraints β ∈ [10−3, 2.0] and μ ∈ [10−4, 1.0]. Complete Python code for fitting and visualisation is available on GitHub at https://github.com/Stephanie-Abo/age-structuredinvasion-dynamics.git.
Declarations
Authorship and contributorship. All authors have made substantial intellectual contributions to the study conception, execution, and design of the work. All authors have read and approved the final manuscript. Contributions were as follows: Conceptualisation: St ́ephanie M. C. Abo, Ruth E. Baker; Methodology: St ́ephanie M. C. Abo, Ruth E. Baker; Software: Ste ́phanie M. C. Abo; Formal analysis and investigation: St ́ephanie M. C. Abo; Writing – original draft preparation: St ́ephanie M. C. Abo; W-
riting – review and editing: Ste ́phanie M. C. Abo, Ruth E. Baker; Supervision: Ruth E. Baker; Funding acquisition: Ruth E. Baker.
Funding. Ruth E. Baker is supported by a grant from the Simons Foundation (MP-SIP-00001828).
Acknowledgements. We thank Christian A. Yates for sharing unpublished cell-cycle data originally collected by Richard L. Mort and Matthew J. Ford, and Rachel N. Leander for providing access to the DMSO, CHX, and ERL datasets available at https://github.com/rnleander/DDT cell cycle. We also thank Mike B. Giles for helpful discussions on the formulation and implementation of the numerical scheme.
For the purpose of open access, the authors have applied a CC BY public copyright licence to any author accepted manuscript arising from this submission.
Conflicts of interest. The authors declare there are no conflicts of interest.
Consent for publication All the authors approved the final version of the manuscript.
28 S. ABO AND R. E. BAKER

SURVIVAL AND INVASION DYNAMICS IN CELL POPULATIONS SM11
Fig. SM3. Spatial and temporal convergence of the numerical scheme. Top row: L2 error in total population P (x) (left) and age distribution u(a, x) (right) versus age-step size ∆a (spatial resolution fixed at ∆x = 0.1). Bottom row: L2 error in P (x) (left) and u(a, x) (right) versus spatial-step size ∆x (age resolution fixed at ∆a = 0.1). All simulations use
domain x ∈ [−10, 10], with parameters κ = 3 × 10−4, μ = 0.005, α = 0.01, γ = 0.0001. The parameter γ applies only to Case 5. Division rates are β = 0.025 (Cases 1, 1b), 0.0375 (Case 2), 0.0005625 (Case 3), and 0.00025 (Cases 4–5). The rates β were selected so that all cases satisfy the same relative distance above their survival condition, with r = 2β/(μ + α) = 5 (or the corresponding expression for each model). This ensures comparable invasion regimes across models. Initial condition:
u(a, x, 0) = 0.01 ⊮x<−8e−a. Errors are measured at steady wave profiles relative to finer reference grids (∆a = ∆x = 0.05). Numbers in parentheses show convergence slopes from log–log regression; dotted lines mark first-order references O(∆a) and O(∆x). Age resolution gives near-first-order convergence (slopes ≈ 1.2–1.3, except Case 3 ≈ 1.8), while spatial resolution yields ≈ 1.3 across cases—consistent with coupling of first-order age transport with Crank–Nicolson diffusion.
Code availability. All code used for the simulations and figure generation is publicly available on GitHub at https://github.com/Stephanie-Abo/age-structured-invasion-dynamics.git.
INVASION DYNAMICS IN CELL POPULATIONS 29

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:29.289Z
- **Text Length:** 82553 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 29 of 29
